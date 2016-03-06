
module trl.backend {
    
    export class JSNull implements IJSValue {
        
        public getType(): JSValues {
            return JSValues.null;
        }
        
    }
    
}