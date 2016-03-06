
module trl.backend {
    
    export class JSUndefined implements IJSValue {
        
        public getType(): JSValues {
            return JSValues.undefined;
        }
        
    }
    
}