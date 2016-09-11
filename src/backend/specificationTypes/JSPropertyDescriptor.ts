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
            jsvalue = JSApi.createUndefined(),
            jswritable = JSApi.createBoolean(false),
            jsenumerable = JSApi.createBoolean(false),
            jsconfigurable = JSApi.createBoolean(false)
        ) {
            return new JSPropertyDescriptor(jsvalue, jswritable, undefined, undefined, jsenumerable, jsconfigurable);
        }

        public static createAccessorPropertyDescriptor(
            jsget = JSApi.createUndefined(),
            jsset = JSApi.createUndefined(),
            jsenumerable = JSApi.createBoolean(false),
            jsconfigurable = JSApi.createBoolean(false)
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

        public static toPropertyDescriptor(cx: vm.JSExecutionContexts, val: IJSValue): JSPropertyDescriptor {
            if(!JSApi.isObject(val)) {
                JSApi.throwTypeErrorException();
                return;
            }
            const obj = val as JSObject;
            const desc = new JSPropertyDescriptor();
            if(obj.objHasProperty(JSApi.createString("enumerable"))) {
                desc.jsenumerable = JSApi.toBoolean(obj.objGet(cx, JSApi.createString("enumerable")));
            }
            if(obj.objHasProperty(JSApi.createString("configurable"))) {
                desc.jsconfigurable = JSApi.toBoolean(obj.objGet(cx, JSApi.createString("configurable")));
            }
            if(obj.objHasProperty(JSApi.createString("value"))) {
                desc.jsvalue = obj.objGet(cx, JSApi.createString("value"));
            }      
            if(obj.objHasProperty(JSApi.createString("writable"))) {
                desc.jswritable = JSApi.toBoolean(obj.objGet(cx, JSApi.createString("writable")));
            }    
            if(obj.objHasProperty(JSApi.createString("get"))) {
                const jsget = obj.objGet(cx, JSApi.createString("get"));
                if(!JSApi.isCallable(jsget) && !JSApi.isUndefined(jsget)) {
                    JSApi.throwTypeErrorException();
                    return;
                }
                desc.jsget = jsget;
            }     
            if(obj.objHasProperty(JSApi.createString("set"))) {
                const jsset = obj.objGet(cx, JSApi.createString("set"));
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

        public isAllAbsent(): JSBoolean {
            return JSApi.createBoolean(!this.jsvalue
                    && !this.jswritable
                    && !this.jsconfigurable
                    && !this.jsenumerable
                    && !this.jsget
                    && !this.jsset
                );
        }

        public getType(): JSSpecificationTypes {
            return JSSpecificationTypes.propertyDescriptor;
        }
    }

}