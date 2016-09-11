module trl.backend {

    export class JSGlobalObject extends JSObject {
        constructor(cx: vm.JSExecutionContexts) {
            super(cx);
            this.objClass = JSApi.createString("Global");

            this.installStandardValues();
        }

        public installStandardValues() {
            JSApi.defineImmutableDataPropertyDescriptor(this, "NaN", JSApi.createNumber(NaN));
            JSApi.defineImmutableDataPropertyDescriptor(this, "Infinity", JSApi.createNumber(Infinity));
            JSApi.defineImmutableDataPropertyDescriptor(this, "undefined", JSApi.createUndefined());

            JSApi.defineImmutableDataPropertyDescriptor(this, "parseInt", 
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    const arg1 = JSApi.toNativeValue(argumentsList.list[0]);
                    const arg2 = JSApi.toNativeValue(argumentsList.list[1]);       
                    return JSApi.fromNativeValue(parseInt(arg1, arg2));
                }
            ));
            
            JSApi.defineImmutableDataPropertyDescriptor(this, "parseFloat",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    const arg1 = JSApi.toNativeValue(argumentsList.list[0]);     
                    return JSApi.fromNativeValue(parseFloat(arg1));
                }
            ));     
            
            JSApi.defineImmutableDataPropertyDescriptor(this, "isNaN",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    const arg1 = argumentsList.list[0] || JSApi.createUndefined();     
                    return JSApi.createBoolean(isNaN(JSApi.toNumber(arg1).getValue()));
                }
            ));                     

            JSApi.defineImmutableDataPropertyDescriptor(this, "isFinite",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    const arg1 = argumentsList.list[0] || JSApi.createUndefined();   
                    return JSApi.createBoolean(isFinite(JSApi.toNumber(arg1).getValue()));
                }
            ));  
            
            JSApi.defineImmutableDataPropertyDescriptor(this, "decodeURI",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    const arg1 = argumentsList.list[0] || JSApi.createUndefined();   
                    return JSApi.createString(decodeURI(JSApi.toString(arg1).getValue()));
                }
            ));  
            
            JSApi.defineImmutableDataPropertyDescriptor(this, "decodeURIComponent",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    const arg1 = argumentsList.list[0] || JSApi.createUndefined();   
                    return JSApi.createString(decodeURIComponent(JSApi.toString(arg1).getValue()));
                }
            ));     
            
            JSApi.defineImmutableDataPropertyDescriptor(this, "encodeURI",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    const arg1 = argumentsList.list[0] || JSApi.createUndefined();   
                    return JSApi.createString(encodeURI(JSApi.toString(arg1).getValue()));
                }
            ));   
            
            JSApi.defineImmutableDataPropertyDescriptor(this, "encodeURIComponent",
                JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                    const arg1 = argumentsList.list[0] || JSApi.createUndefined();   
                    return JSApi.createString(encodeURIComponent (JSApi.toString(arg1).getValue()));
                }
            ));                                             
        }
    }

}