module trl.backend {
              
    export class JSPropertyIdentifier implements JSSpecificationType {

        constructor(
            public name: JSString,
            public descriptor: JSPropertyDescriptor
        ){}
        
        public getType(): JSSpecificationTypes {
            return JSSpecificationTypes.propertyIdentifier;
        }
        
    }
    
}