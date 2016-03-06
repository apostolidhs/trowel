module trl.backend {
              
    export type JSBaseValueType = JSUndefined | JSObject | JSBoolean | JSString | JSNumber | JSEnviromentRecord
              
    export class JSReference implements JSSpecificationType {
        
        private baseValue: JSBaseValueType;
        private referencedName: JSString;
        private strict: boolean;
        
        public getBase(): JSBaseValueType {
            return this.baseValue;
        }
        
        public getReferencedName(): JSString {
            return this.referencedName;
        }
        
        public isStrictReference(): boolean {
            return this.strict;
        }
        
        public hasPrimitiveBase(): boolean {
            return this.baseValue.getType() === JSValues.boolean
                || this.baseValue.getType() === JSValues.string
                || this.baseValue.getType() === JSValues.number;
        }
        
        public isPropertyReference(): boolean {
            return this.hasPrimitiveBase() 
            || this.baseValue.getType() === JSValues.object;
        }
        
        public isUnresolvableReference(): boolean {
            return this.baseValue.getType() === JSValues.undefined;
        }
        
        public getType(): JSSpecificationTypes {
            return JSSpecificationTypes.reference;
        }        
    }    
}