module trl.backend {
              
    export abstract class JSEnviromentRecord implements JSSpecificationType {
        
        abstract hasBinding(name: string): boolean;
        
        abstract createMutableBinding(name: string, del?: boolean);
        
        abstract setMutableBinding(name: string, val: IJSValue, strict?: boolean);
        
        abstract getBindingValue(name: string, strict?: boolean): IJSValue;
        
        abstract deleteBinding(name: string);
        
        abstract implicitThisValue(): IJSValue;
        
        public getType(): JSSpecificationTypes {
            return JSSpecificationTypes.lexicalEnvironment;
        }
        
    }    
}
