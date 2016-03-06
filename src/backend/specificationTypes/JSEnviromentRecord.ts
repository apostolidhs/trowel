module trl.backend {
              
    export class JSEnviromentRecord implements JSSpecificationType {
        
        public getBindingValue(name: JSString, strict: boolean): IJSValue {
            return throwNotImplementedYet();
        }
        
        public setMutableBinding(name: JSString, val: IJSValue, strict: boolean) {
            throwNotImplementedYet();
        }
        
        public getType(): JSSpecificationTypes {
            return JSSpecificationTypes.environmentRecord;
        }
        
    }
    
}