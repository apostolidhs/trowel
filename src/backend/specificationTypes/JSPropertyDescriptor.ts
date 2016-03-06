module trl.backend {


    export class JSPropertyDescriptor implements JSSpecificationType {

        public constructor(
            //data property descriptors
            public jsvalue?: IJSValue,
            public jswritable?: JSBoolean,
       
            //accessor property descriptor
            public jsget?: JSCallableObject | JSUndefined,
            public jsset?: JSCallableObject | JSUndefined,
            
            //any property descriptor
            public jsenumerable?: JSBoolean,
            public jsconfigurable?: JSBoolean
        ) { }

        public static createDataPropertyDescriptor(
            jsvalue: IJSValue = JSApi.createUndefined(),
            jswritable: JSBoolean = JSApi.createBoolean(false),
            jsenumerable: JSBoolean = JSApi.createBoolean(false),
            jsconfigurable: JSBoolean = JSApi.createBoolean(false)
        ) {
            return new JSPropertyDescriptor(jsvalue, jswritable, undefined, undefined, jsenumerable, jsconfigurable);
        }

        public static createAccessorPropertyDescriptor(
            jsget: JSObject | JSUndefined = JSApi.createUndefined(),
            jsset: JSObject | JSUndefined = JSApi.createUndefined(),
            jsenumerable: JSBoolean = JSApi.createBoolean(false),
            jsconfigurable: JSBoolean = JSApi.createBoolean(false)
        ) {
            return new JSPropertyDescriptor(undefined, undefined, jsget, jsset, jsenumerable, jsconfigurable);
        }

        public isAccessorDescriptor(): boolean {
            return this.jsget !== undefined || this.jsget !== undefined;
        }

        public isDataDescriptor(): boolean {
            return this.jsvalue !== undefined || this.jswritable !== undefined;
        }

        public isGenericDescriptor(): boolean {
            return !this.isAccessorDescriptor() && !this.isDataDescriptor();
        }

        public fromPropertyDescriptor(): JSObject {
            const obj = JSApi.createObject();
            if (this.isDataDescriptor()) {
                obj.objDefineOwnProperty(
                    JSApi.createString("value"),
                    JSPropertyDescriptor.createDataPropertyDescriptor(this.jsvalue, JSApi.createBoolean(true), JSApi.createBoolean(true), JSApi.createBoolean(true)),
                    false
                );
                obj.objDefineOwnProperty(
                    JSApi.createString("writable"),
                    JSPropertyDescriptor.createDataPropertyDescriptor(this.jsvalue, JSApi.createBoolean(true), JSApi.createBoolean(true), JSApi.createBoolean(true)),
                    false
                );
            }
            else if (this.isAccessorDescriptor()) {
                obj.objDefineOwnProperty(
                    JSApi.createString("get"),
                    JSPropertyDescriptor.createDataPropertyDescriptor(this.jsget, JSApi.createBoolean(true), JSApi.createBoolean(true), JSApi.createBoolean(true)),
                    false
                );
                obj.objDefineOwnProperty(
                    JSApi.createString("set"),
                    JSPropertyDescriptor.createDataPropertyDescriptor(this.jsset, JSApi.createBoolean(true), JSApi.createBoolean(true), JSApi.createBoolean(true)),
                    false
                );                
            }
            obj.objDefineOwnProperty(
                JSApi.createString("enumerable"),
                JSPropertyDescriptor.createDataPropertyDescriptor(this.jsenumerable, JSApi.createBoolean(true), JSApi.createBoolean(true), JSApi.createBoolean(true)),
                false
            );  
            obj.objDefineOwnProperty(
                JSApi.createString("configurable"),
                JSPropertyDescriptor.createDataPropertyDescriptor(this.jsconfigurable, JSApi.createBoolean(true), JSApi.createBoolean(true), JSApi.createBoolean(true)),
                false
            );   
            return obj;                      
        }

        public static toPropertyDescriptor(val: IJSValue): JSPropertyDescriptor {
            if(!JSApi.isObject(val)) {
                JSApi.throwTypeErrorException();
                return;
            }
            const obj = val as JSObject;
            const desc = new JSPropertyDescriptor();
            if(obj.objHasProperty(JSApi.createString("enumerable"))) {
                desc.jsenumerable = JSApi.toBoolean(obj.objGet(JSApi.createString("enumerable")));
            }
            if(obj.objHasProperty(JSApi.createString("configurable"))) {
                desc.jsconfigurable = JSApi.toBoolean(obj.objGet(JSApi.createString("configurable")));
            }
            if(obj.objHasProperty(JSApi.createString("value"))) {
                desc.jsvalue = obj.objGet(JSApi.createString("value"));
            }      
            if(obj.objHasProperty(JSApi.createString("writable"))) {
                desc.jswritable = JSApi.toBoolean(obj.objGet(JSApi.createString("writable")));
            }    
            if(obj.objHasProperty(JSApi.createString("get"))) {
                const jsget = obj.objGet(JSApi.createString("get"));
                if(!JSApi.isCallable(jsget) && !JSApi.isUndefined(jsget)) {
                    JSApi.throwTypeErrorException();
                    return;
                }
                desc.jsget = jsget;
            }     
            if(obj.objHasProperty(JSApi.createString("set"))) {
                const jsset = obj.objGet(JSApi.createString("set"));
                if(!JSApi.isCallable(jsset) && !JSApi.isUndefined(jsset)) {
                    JSApi.throwTypeErrorException();
                    return;
                }
                desc.jsset = jsset;
            }   
            if((desc.jsget || desc.jsset) && (desc.jsvalue || desc.jswritable)) {
                JSApi.throwTypeErrorException();
                return;
            }        
            return desc;                     
        } 

        public getType(): JSSpecificationTypes {
            return JSSpecificationTypes.propertyDescriptor;
        }
    }
    
    // export enum JSNamedPropertyType {
    //     data,
    //     accessor
    // }

    // interface JSNamedProperty {
    //     getType(): JSNamedPropertyType;
    //     getValue(): IJSValue;
    //     putValue(val: IJSValue);
    // }

    // export class JSNamedDataProperty implements JSNamedProperty {

    //     constructor(
    //         public value: IJSValue = JSApi.createUndefined(),
    //         public writable: JSBoolean = JSApi.createBoolean(false),
    //         public enummerable: JSBoolean = JSApi.createBoolean(false),
    //         public configurable: JSBoolean = JSApi.createBoolean(false)
    //     ) { }

    //     getType(): JSNamedPropertyType {
    //         return JSNamedPropertyType.data;
    //     }

    //     public getValue(): IJSValue {
    //         return this.value;
    //     }

    //     public putValue(val: IJSValue) {
    //         this.value = val;
    //     }
    // }

    // export class JSNamedAccessorProperty implements JSNamedProperty {

    //     constructor(
    //         public get: JSObject | JSUndefined = JSApi.createUndefined(),
    //         public set: JSObject | JSUndefined = JSApi.createUndefined(),
    //         public enummerable: JSBoolean = JSApi.createBoolean(false),
    //         public configurable: JSBoolean = JSApi.createBoolean(false)
    //     ) { }

    //     getType(): JSNamedPropertyType {
    //         return JSNamedPropertyType.accessor;
    //     }

    //     public getValue(): IJSValue {
    //         if (JSApi.isUndefined(this.get)) {
    //             return this.get;
    //         }
    //         return JSApi.callObjectFunction(this.get as JSObject);
    //     }

    //     public putValue(val: IJSValue) {
    //         if (JSApi.isObject(this.get)) {
    //             return JSApi.callObjectFunction(this.get as JSObject, [val]);
    //         }
    //     }
    // }    

}