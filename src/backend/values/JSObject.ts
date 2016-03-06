
module trl.backend {

    export class JSObject implements IJSValue {

        public objProps: _.Dictionary<JSPropertyDescriptor>;

        public objPrototype: JSObject | JSNull;
        public objClass: JSString;
        public objExtensible: JSBoolean;

        constructor() {
            this.objProps = {};
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
            return;
        }

        public objDelete(hint: JSString): JSBoolean {
            return;
        }

        public objDefaultValue(propName: JSString, flag: boolean): JSPrimitive {
            return;
        }

        public objDefineOwnProperty(propName: JSString, prop: JSPropertyDescriptor, flag: boolean) {

        }

        public getType(): JSValues {
            return JSValues.object;
        }

    }

    export class JSGlobalObject extends JSObject {

    }

}