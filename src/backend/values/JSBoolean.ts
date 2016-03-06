
module trl.backend {
    
    export class JSBoolean implements IJSValue {
                
        constructor(private value: boolean) {}
        
        public getType(): JSValues {
            return JSValues.boolean;
        }
        
        public getValue(): boolean {
            return this.value;
        }
        
    }
    
}