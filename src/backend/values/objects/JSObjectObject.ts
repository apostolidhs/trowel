module trl.backend {

    function objConstruct(self: IJSValue, args?: JSList): IJSValue | JSReference {
        if (!args || !JSApi.isUndefined(args[0]) || !JSApi.isNull(args[0])) {
            const obj = JSApi.createObject(this.cx);
            obj.objPrototype = this.cx.objectPrototypeObject;
            obj.objClass = JSApi.createString("Object");
            return obj;
        }
        else {
            return JSApi.toObject(args[0]);
        }
    }

    export class JSObjectObject extends JSObject implements JSCallableObject, JSConstructableObject {

        constructor(cx: vm.JSExecutionContexts) {
            super(cx);
            this.objClass = JSApi.createString("Function");
            this.objPrototype = cx.objectPrototypeObject;
            this.installStandardValues();
        }

        objCall(self: IJSValue, args?: JSList): IJSValue | JSReference {
            if (!args || !JSApi.isUndefined(args[0]) || !JSApi.isNull(args[0])) {
                return this.objConstruct(self, args);
            }
            else {
                return JSApi.toObject(args[0]);
            }
        }

        objConstruct(self: IJSValue, args?: JSList): IJSValue | JSReference {
            return objConstruct(self, args);
        }

        public installStandardValues() {
            JSApi.defineImmutableDataPropertyDescriptor(this, "length", JSApi.createNumber(1));
            JSApi.defineImmutableDataPropertyDescriptor(this, "prototype", this.objPrototype);

            JSApi.defineImmutableDataPropertyDescriptor(this, "getPrototypeOf",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    const arg1 = JSApi.toNativeValue(argumentsList.list[0]);
                    if (JSApi.isObject(arg1)) {
                        return (arg1 as JSObject).objPrototype;
                    }
                    else {
                        JSApi.throwTypeErrorException();
                    }
                }
                ));

            JSApi.defineImmutableDataPropertyDescriptor(this, "getOwnPropertyDescriptor",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    const arg1 = JSApi.toNativeValue(argumentsList.list[0]);
                    if (JSApi.isObject(arg1)) {
                        return (arg1 as JSObject).objPrototype;
                    }
                    else {
                        JSApi.throwTypeErrorException();
                    }
                }
                ));

            JSApi.defineImmutableDataPropertyDescriptor(this, "getOwnPropertyNames",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    const arg1 = JSApi.toNativeValue(argumentsList.list[0]);
                    if (!JSApi.isObject(arg1)) {
                        return JSApi.throwTypeErrorException();
                    }
                    const arr = JSApi.createArrayObject(this.cx);
                    _.each(_.keys((arg1 as JSObject).objProps), (key, idx) => {
                        arr.objDefineOwnProperty(
                            JSApi.toString(JSApi.createNumber(idx)),
                            JSPropertyDescriptor.createDataPropertyDescriptor(
                                JSApi.createString(key),
                                JSApi.createBoolean(true),
                                JSApi.createBoolean(true),
                                JSApi.createBoolean(true)
                            ),
                            false
                        );
                    });
                    return arr;
                }
                ));

            JSApi.defineImmutableDataPropertyDescriptor(this, "create",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    const arg1 = argumentsList.list[0] && JSApi.toNativeValue(argumentsList.list[0]);
                    const arg2 = argumentsList.list[1] && JSApi.toNativeValue(argumentsList.list[1]);
                    if (!JSApi.isObject(arg1) && !JSApi.isNull(arg1)) {
                        return JSApi.throwTypeErrorException();
                    }
                    const obj = JSApi.createObject(this.cx);
                    obj.objPrototype = arg1;
                    if (!JSApi.isUndefined(arg2)) {
                        const definePropertiesFunc = this.objGetOwnProperty(JSApi.createString("defineProperties"));
                        (definePropertiesFunc as JSCallableObject).objCall(thisArg, JSApi.createList([arg2]));
                    }
                    return obj;
                }
                ));

            JSApi.defineImmutableDataPropertyDescriptor(this, "defineProperty",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    const arg1 = argumentsList.list[0] && JSApi.toNativeValue(argumentsList.list[0]);
                    const arg2 = argumentsList.list[1] && JSApi.toNativeValue(argumentsList.list[1]);
                    const arg3 = argumentsList.list[2] && JSApi.toNativeValue(argumentsList.list[2]);
                    if (!JSApi.isObject(arg1)) {
                        return JSApi.throwTypeErrorException();
                    }
                    (arg1 as JSObject).objDefineOwnProperty(
                        JSApi.toString(arg2),
                        JSPropertyDescriptor.toPropertyDescriptor(this.cx, arg3),
                        true
                    );
                    return arg1;
                }
                ));

            JSApi.defineImmutableDataPropertyDescriptor(this, "defineProperties",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    const arg1 = argumentsList.list[0] && JSApi.toNativeValue(argumentsList.list[0]);
                    const arg2 = argumentsList.list[1] && JSApi.toNativeValue(argumentsList.list[1]);
                    if (!JSApi.isObject(arg1)) {
                        return JSApi.throwTypeErrorException();
                    }
                    const props = JSApi.toObject(arg2);
                    const names = _.keys(props.objProps);
                    _.each(names, p => {
                        const descObj = props.objGet(JSApi.createString(p));
                        const desc = JSPropertyDescriptor.toPropertyDescriptor(this.cx, descObj);
                        (arg1 as JSObject).objDefineOwnProperty(JSApi.createString(p), desc, true);
                    });
                    return arg1;
                }
                ));

            JSApi.defineImmutableDataPropertyDescriptor(this, "seal",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    return throwNotImplementedYet();
                }
                ));

            JSApi.defineImmutableDataPropertyDescriptor(this, "freeze",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    return throwNotImplementedYet();
                }
                ));

            JSApi.defineImmutableDataPropertyDescriptor(this, "preventExtensions",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    return throwNotImplementedYet();
                }
                ));

            JSApi.defineImmutableDataPropertyDescriptor(this, "isSealed",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    return throwNotImplementedYet();
                }
                ));

            JSApi.defineImmutableDataPropertyDescriptor(this, "isFrozen",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    return throwNotImplementedYet();
                }
                ));

            JSApi.defineImmutableDataPropertyDescriptor(this, "isExtensible",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    return throwNotImplementedYet();
                }
                ));

            JSApi.defineImmutableDataPropertyDescriptor(this, "keys",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    return throwNotImplementedYet();
                }
                ));
        }
    }

    export class JSObjectPrototypeObject extends JSObject {
        constructor(cx: vm.JSExecutionContexts) {
            super(cx);
            this.installStandardValues();
        }

        public installStandardValues() {
            JSApi.defineImmutableDataPropertyDescriptor(this, "constructor",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    const arg1 = argumentsList.list[0] && JSApi.toNativeValue(argumentsList.list[0]);
                    const arg2 = argumentsList.list[1] && JSApi.toNativeValue(argumentsList.list[1]);
                    return objConstruct(arg1, JSApi.createList(arg2)) as IJSValue;
                }));

            JSApi.defineImmutableDataPropertyDescriptor(this, "toString",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    let str;
                    if (JSApi.isUndefined(thisArg)) {
                        str = "Undefined";
                    }
                    else if (JSApi.isNull(thisArg)) {
                        str = "Null";
                    }
                    else {
                        str = JSApi.toObject(thisArg).objClass;
                    }
                    return JSApi.createString(`[object ${str}]`);
                }));

            JSApi.defineImmutableDataPropertyDescriptor(this, "toLocaleString",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    const toString = JSApi.toObject(thisArg).objGet(JSApi.createString("toString"));
                    if (JSApi.isCallable(toString)) {
                        return JSApi.throwTypeErrorException();
                    }
                    return (toString as JSCallableObject).objCall(thisArg) as IJSValue;
                }));

            JSApi.defineImmutableDataPropertyDescriptor(this, "valueOf",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    return JSApi.toObject(thisArg);
                }));

            JSApi.defineImmutableDataPropertyDescriptor(this, "hasOwnProperty",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    const arg1 = argumentsList.list[0] && JSApi.toNativeValue(argumentsList.list[0]);
                    const result = JSApi.toObject(thisArg).objGetOwnProperty(JSApi.toString(arg1));
                    return JSApi.createBoolean(result instanceof JSUndefined);
                }));

            JSApi.defineImmutableDataPropertyDescriptor(this, "isPrototypeOf",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    const arg1 = argumentsList.list[0] && JSApi.toNativeValue(argumentsList.list[0]);
                    if (!JSApi.isObject(arg1)) {
                        return JSApi.createBoolean(false);
                    }
                    const obj = JSApi.toObject(thisArg);
                    while (true) {
                        const v = (arg1 as JSObject).objPrototype;
                        if (JSApi.isNull(v)) {
                            return JSApi.createBoolean(false);
                        }
                        if (obj === v) {
                            return JSApi.createBoolean(true);
                        }
                    }
                }));

            JSApi.defineImmutableDataPropertyDescriptor(this, "propertyIsEnumerable",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    const arg1 = argumentsList.list[0] && JSApi.toNativeValue(argumentsList.list[0]);
                    const desc = JSApi.toObject(thisArg).objGetOwnProperty(JSApi.toString(arg1));
                    return desc instanceof JSUndefined ? JSApi.createBoolean(false) : desc.jsenumerable;
                }));
        }

    }

}