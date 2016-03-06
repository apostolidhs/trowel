
module trl.backend {
    
    export class JSNumber implements IJSValue {
        
        constructor(private value: number) {}
        
        public getType(): JSValues {
            return JSValues.number;
        }
        
        public getValue(): number {
            return this.value;
        }        
        
    }
    
}