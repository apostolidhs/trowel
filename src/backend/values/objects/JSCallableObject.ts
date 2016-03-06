module trl.backend {

    export class JSCallableObject extends JSObject {
        
        public objCall(self: IJSValue, args?: IJSValue[]): IJSValue | JSReference {
            throw Error("not implemented yet");
        }
        
    }
    
}