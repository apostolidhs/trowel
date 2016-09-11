module trl.backend {

    export class JSObjectEnvironmentRecord extends JSEnviromentRecord {

        constructor(
            private bindings: JSObject = JSApi.createObject(),
            private provideThis: boolean = false
        ) {
            super();
        }

        hasBinding(name: string): boolean {
            return this.bindings.objHasProperty(JSApi.createString(name)).getValue();
        }

        createMutableBinding(name: string, del?: boolean) {
            utilities.assert(this.bindings.objHasProperty(JSApi.createString(name)).getValue() === false);
            this.bindings.objDefineOwnProperty(
                JSApi.createString(name),
                JSPropertyDescriptor.createDataPropertyDescriptor(
                    JSApi.createUndefined(), JSApi.createBoolean(true), JSApi.createBoolean(true), JSApi.createBoolean(del)
                ),
                true
            );
        }

        setMutableBinding(name: string, val: IJSValue, strict?: boolean) {
            this.bindings.objPut(JSApi.createString(name), val, strict);
        }

        getBindingValue(name: string, strict?: boolean): IJSValue {
            const value = this.bindings.objHasProperty(JSApi.createString(name));
            if(JSApi.isBooleanWithValue(value, true)) {
                return this.bindings.objGet(JSApi.createString(name));
            }
            if(!strict) {
                return JSApi.createUndefined();                
            }
            JSApi.throwReferenceErrorException(); 
        }

        deleteBinding(name: string): boolean {
            return this.bindings.objDelete(JSApi.createString(name), false).getValue();
        }

        implicitThisValue(): IJSValue {
            return this.provideThis ? this.bindings : JSApi.createUndefined();
        }
    }

}