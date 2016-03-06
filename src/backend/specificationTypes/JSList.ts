module trl.backend {
              
    export class JSList implements JSSpecificationType {

        constructor(
            public list: IJSValue[] = []
        ){}
        
        public getType(): JSSpecificationTypes {
            return JSSpecificationTypes.list;
        }
        
    }
    
}