module trl.backend {

    export class JSNativeFunctionObject extends JSObject {
        
        public objCall(self: IJSValue, args?: IJSValue[]): IJSValue | JSReference {
            throw Error("not implemented yet");
        }
        
    }
    
}