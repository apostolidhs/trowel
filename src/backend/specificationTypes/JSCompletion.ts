module trl.backend {
              
    export enum JSCompletionType {
        normal,
        break,
        continue,
        return,
        throw
    }
              
    export class JSCompletion implements JSSpecificationType {

        constructor(
            public type: JSCompletionType = JSCompletionType.normal,
            public val?: IJSValue,
            public target?: JSString
        ){}
        
        public getType(): JSSpecificationTypes {
            return JSSpecificationTypes.completion;
        }
        
    }
    
}