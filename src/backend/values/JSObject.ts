
module trl.backend {

    export class JSObject implements IJSValue {

        public objProps: _.Dictionary<JSPropertyDescriptor>;

        public objPrototype: JSObject | JSNull;
        public objClass: JSString;
        public objExtensible: JSBoolean;       

        constructor(public cx: vm.JSExecutionContexts) {
            this.objProps = {};
            this.objClass = JSApi.createString("Object");
            this.objExtensible = JSApi.createBoolean(true);
            this.objPrototype = JSApi.createNull();
        }

        public objGet(propName: JSString): IJSValue {
            const desc = this.objGetProperty(propName);
            if (desc instanceof JSUndefined) {
                return desc;
            }
            const propDesc = desc as JSPropertyDescriptor;
            if (propDesc.isDataDescriptor()) {
                return propDesc.jsvalue;
            }
            utilities.assert(propDesc.isAccessorDescriptor());
            if (propDesc.jsget instanceof JSUndefined) {
                return propDesc.jsget;
            }
            return (propDesc.jsget as JSCallableObject).objCall(this) as IJSValue;
        }

        public objGetOwnProperty(propName: JSString): JSPropertyDescriptor | JSUndefined {
            if (!_.has(this.objProps, propName.getValue())) {
                return JSApi.createUndefined();
            }
            const desc = new JSPropertyDescriptor();
            const xdesc = this.objProps[propName.getValue()];
            if (xdesc.isDataDescriptor()) {
                desc.jsvalue = xdesc.jsvalue;
                desc.jswritable = xdesc.jswritable;
            }
            else {
                utilities.assert(xdesc.isAccessorDescriptor());
                desc.jsget = xdesc.jsget;
                desc.jsset = xdesc.jsset;
            }
            desc.jsenumerable = xdesc.jsenumerable;
            desc.jsconfigurable = xdesc.jsconfigurable;
            return desc;
        }

        public objGetProperty(propName: JSString): JSPropertyDescriptor | JSUndefined {
            const prop = this.objGetOwnProperty(propName);
            if (prop instanceof JSPropertyDescriptor) {
                return prop;
            }
            if (JSApi.isNull(this.objPrototype)) {
                return JSApi.createUndefined();
            }
            return (this.objPrototype as JSObject).objGetProperty(propName);
        }

        public objPut(propName: JSString, val: IJSValue, flag: boolean) {
            if (!this.objCanPut(propName)) {
                if (flag) {
                    JSApi.throwTypeErrorException();
                }
                return;
            }
            const ownDesc = this.objGetOwnProperty(propName);
            if (ownDesc instanceof JSPropertyDescriptor && ownDesc.isDataDescriptor()) {
                const desc = new JSPropertyDescriptor(val);
                this.objDefineOwnProperty(propName, ownDesc, flag);
                return;
            }
            const desc = this.objGetProperty(propName);
            if (ownDesc instanceof JSPropertyDescriptor && ownDesc.isAccessorDescriptor()) {
                utilities.assert(!(ownDesc.jsset instanceof JSUndefined));
                (ownDesc.jsset as JSCallableObject).objCall(this, new JSList([val]));
            }
            else {
                const newDesc = JSPropertyDescriptor.createDataPropertyDescriptor(
                    val,
                    JSApi.createBoolean(true),
                    JSApi.createBoolean(true),
                    JSApi.createBoolean(true)
                );
                this.objDefineOwnProperty(propName, newDesc, flag);
            }
        }

        public objCanPut(propName: JSString): JSBoolean {
            const desc = this.objGetOwnProperty(propName);
            if (desc instanceof JSPropertyDescriptor) {
                return desc.isAccessorDescriptor()
                    ? JSApi.createBoolean(!(desc.jsset instanceof JSUndefined))
                    : desc.jswritable;
            }
            if (JSApi.isNull(this.objPrototype)) {
                return this.objExtensible;
            }
            const inherited = (this.objPrototype as JSObject).objGetProperty(propName);
            if (inherited instanceof JSUndefined) {
                return this.objExtensible;
            }
            const inheritedDesc = inherited as JSPropertyDescriptor;
            if (inheritedDesc.isAccessorDescriptor()) {
                return JSApi.createBoolean(!(inheritedDesc.jsset instanceof JSUndefined))
            }
            utilities.assert(inheritedDesc.isDataDescriptor());
            if (JSApi.isBooleanWithValue(this.objExtensible, false)) {
                return JSApi.createBoolean(false);
            }
            return inheritedDesc.jswritable;
        }

        public objHasProperty(propName: JSString): JSBoolean {
            return JSApi.createBoolean(!(this.objGetProperty(propName) instanceof JSUndefined));
        }

        public objDelete(propName: JSString, flag: boolean): JSBoolean {
            const desc = this.objGetOwnProperty(propName);
            if (desc instanceof JSUndefined) {
                return JSApi.createBoolean(true);
            }
            const descSpec = desc as JSPropertyDescriptor;
            if (JSApi.isBooleanWithValue(descSpec.jsconfigurable, true)) {
                utilities.assert(this.objProps[propName.getValue()]);
                delete this.objProps[propName.getValue()];
                return JSApi.createBoolean(true);
            }
            if (flag) {
                JSApi.throwTypeErrorException();
            }
            return JSApi.createBoolean(false);
        }

        private getAndCallIfPrimitive(nameProp: string): JSPrimitive {
            const val = this.objGet(JSApi.createString(nameProp));
            if (JSApi.isCallable(val)) {
                const str = (val as JSCallableObject).objCall(this);
                if (JSApi.isPrimitive(str as IJSValue)) {
                    return str as JSPrimitive;
                }
            }
        }

        public objDefaultValue(hint: JSString | JSNumber): JSPrimitive {
            let result;
            if (!hint || JSApi.isNumber(hint)) {
                result = this.getAndCallIfPrimitive("valueOf") || this.getAndCallIfPrimitive("toString");
            }
            else {
                result = this.getAndCallIfPrimitive("toString") || this.getAndCallIfPrimitive("valueOf");
            }
            if (result) {
                return result;
            }
            JSApi.throwTypeErrorException();
        }

        public objDefineOwnProperty(propName: JSString, desc: JSPropertyDescriptor, flag: boolean): JSBoolean {
            const current = this.objGetOwnProperty(propName);
            if (current instanceof JSUndefined && JSApi.isBooleanWithValue(this.objExtensible, false)) {
                if (flag) JSApi.throwTypeErrorException();
                return;
            }
            if (current instanceof JSUndefined && JSApi.isBooleanWithValue(this.objExtensible, true)) {
                const prop = (desc.isGenericDescriptor() || desc.isDataDescriptor())
                    ? JSPropertyDescriptor.createDataPropertyDescriptor(
                        desc.jsvalue, desc.jswritable, desc.jsenumerable, desc.jsconfigurable
                    )
                    : JSPropertyDescriptor.createAccessorPropertyDescriptor(
                        desc.jsget, desc.jsset, desc.jsenumerable, desc.jsconfigurable
                    );
                this.objProps[propName.getValue()] = prop;
                return JSApi.createBoolean(true);
            }
            const currentDesc = current as JSPropertyDescriptor;
            if (desc.isAllAbsent() || (
                JSApi.sameValue(currentDesc.jsvalue, desc.jsvalue)
                && JSApi.sameValue(currentDesc.jswritable, desc.jswritable)
                && JSApi.sameValue(currentDesc.jsconfigurable, desc.jsconfigurable)
                && JSApi.sameValue(currentDesc.jsenumerable, desc.jsenumerable)
                && JSApi.sameValue(currentDesc.jsget, desc.jsget)
                && JSApi.sameValue(currentDesc.jsset, desc.jsset)
            )) {
                return JSApi.createBoolean(true);
            }

            if (JSApi.isBooleanWithValue(currentDesc.jsconfigurable, false)) {
                if (JSApi.isBooleanWithValue(desc.jsconfigurable, true) || (
                    JSApi.isBooleanWithValue(desc.jsenumerable, false)
                    && JSApi.isBooleanWithValue(currentDesc.jsenumerable, false)
                )) {
                    if (flag) JSApi.throwTypeErrorException();
                    return;
                }
            }

            if (desc.isGenericDescriptor()) {
                //no further validation is required
                return JSApi.createBoolean(true);
            }

            if (currentDesc.isDataDescriptor() !== desc.isDataDescriptor()) {
                if (JSApi.isBooleanWithValue(currentDesc.jsconfigurable, false)) {
                    if (flag) JSApi.throwTypeErrorException();
                    return;
                }
                const prop = this.objProps[propName.getValue()];
                this.objProps[propName.getValue()] = currentDesc.isDataDescriptor()
                    ? JSPropertyDescriptor.createAccessorPropertyDescriptor(
                        JSApi.createUndefined(), JSApi.createUndefined(), prop.jsenumerable, prop.jsconfigurable
                    )
                    : JSPropertyDescriptor.createDataPropertyDescriptor(
                        JSApi.createUndefined(), JSApi.createBoolean(false), prop.jsenumerable, prop.jsconfigurable
                    );
            }
            else if (currentDesc.isDataDescriptor() && desc.isDataDescriptor()) {
                if (JSApi.isBooleanWithValue(currentDesc.jsconfigurable, false)
                    && JSApi.isBooleanWithValue(currentDesc.jswritable, false)
                    && (JSApi.isBooleanWithValue(desc.jswritable, false) || (desc.jsvalue && !JSApi.sameValue(desc.jsvalue, currentDesc.jsvalue)))
                ) {
                    if (flag) JSApi.throwTypeErrorException();
                    return;
                }
                else {
                    utilities.assert(JSApi.isBooleanWithValue(currentDesc.jsconfigurable, true));
                    //any change is acceptable
                }
            }
            else {
                utilities.assert(currentDesc.isAccessorDescriptor() && desc.isAccessorDescriptor());
                if (JSApi.isBooleanWithValue(currentDesc.jsconfigurable, false)) {
                    if (desc.jsset && !JSApi.sameValue(desc.jsset, currentDesc.jsset) ||
                        desc.jsget && !JSApi.sameValue(desc.jsget, currentDesc.jsget)
                    ) {
                        if (flag) JSApi.throwTypeErrorException();
                        return;
                    }
                }
            }

            const prop = new JSPropertyDescriptor(desc.jsvalue, desc.jswritable, desc.jsget, desc.jsset, desc.jsenumerable, desc.jsconfigurable);
            this.objProps[propName.getValue()] = prop;
            
            return JSApi.createBoolean(true);
        }

        public getType(): JSValues {
            return JSValues.object;
        }
    }
    
    export interface JSCallableObject extends IJSValue {
        objCall(self: IJSValue, args?: JSList): IJSValue | JSReference;
    }
    
    export interface JSConstructableObject extends IJSValue {
        objConstruct(self: IJSValue, args?: JSList): IJSValue | JSReference;
    }   
    
}