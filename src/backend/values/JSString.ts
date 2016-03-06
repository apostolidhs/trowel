
module trl.backend {
    
    export class JSString implements IJSValue {
        
        constructor(private value: string) {}
        
        public getType(): JSValues {
            return JSValues.string;
        }
        
        public getValue(): string {
            return this.value;
        }        
        
    }
    
}