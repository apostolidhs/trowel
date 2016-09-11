module trl.backend {

    export type JSNullableLexicalEnvironment = JSLexicalEnvironment | JSNull;

    export class JSLexicalEnvironment implements JSSpecificationType {

        constructor(
            public env: JSEnviromentRecord,
            public outerEnv: JSNullableLexicalEnvironment
        ) { }

        public getType(): JSSpecificationTypes {
            return JSSpecificationTypes.environmentRecord;
        }

    }

    export class JSLexicalEnviromentOperations {

        public static getIdentifierReference(
            lex: JSNullableLexicalEnvironment,
            name: JSString,
            strict: boolean
        ): JSReference {
            if (lex instanceof JSNull) {
                return new JSReference(JSApi.createUndefined(), name, strict);
            }
            const envRec = (lex as JSLexicalEnvironment).env;
            if (envRec.hasBinding(name.getValue())) {
                return new JSReference(envRec, name, strict);
            }
            return JSLexicalEnviromentOperations.getIdentifierReference((lex as JSLexicalEnvironment).outerEnv, name, strict);
        }

        public static newDeclarativeEnvironment(lex: JSNullableLexicalEnvironment): JSLexicalEnvironment {
            const envRec = new JSDeclerativeEnvironmentRecord();
            return new JSLexicalEnvironment(envRec, lex);
        }
        
        public static newObjectEnvironment(obj: JSObject, lex: JSNullableLexicalEnvironment): JSLexicalEnvironment {
            const envRec = new JSObjectEnvironmentRecord(obj);
            return new JSLexicalEnvironment(envRec, lex);
        }        
        
        public static newGlobalEnvironment(obj: JSGlobalObject): JSLexicalEnvironment {
            const envRec = new JSObjectEnvironmentRecord(obj);
            return new JSLexicalEnvironment(envRec, JSApi.createNull());
        }          

    }
}