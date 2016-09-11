module trl.backend.vm {

    export class JSExecutionContexts {
        public executionContexts: JSExecutionContext[];
        public globalEnvironment: JSLexicalEnvironment;

        public objectPrototypeObject: JSObjectPrototypeObject;
        public functionPrototypeObject: JSFunctionPrototypeObject;
        constructor(
            public global: JSGlobalObject
        ) {
            this.executionContexts = [];
            this.globalEnvironment = JSLexicalEnviromentOperations.newGlobalEnvironment(global);
        }

        public createGlobalExecutionContext(): JSExecutionContext {
            return new JSExecutionContext(
                this.globalEnvironment,
                this.globalEnvironment,
                this.global,
                JSExecutableCodeType.global
            );
        }
        
        public initiateGlobalCode(executionContext: JSExecutionContext, code: frontend.syntax.IJSContextInfo) {
            executionContext.setCode(code);
            executionContext.declarationBindingInstantiation(this);
        }

        public createFunctionExecutionContext(funcObj: JSFunctionObject, thisArg: IJSValue,  argumentsList: JSList): JSExecutionContext {
            let thisBinding: IJSValue;
            if() {
                
            }
        }

    }

    export enum JSExecutableCodeType {
        global,
        eval,
        function
    }

    export class JSExecutionContext {
        public code: frontend.syntax.IJSContextInfo;

        constructor(
            public lexicalEnvironment: JSLexicalEnvironment,
            public variableEnvironment: JSLexicalEnvironment,
            public thisBinding: IJSValue,

            public executionCodeType: JSExecutableCodeType
        ) { }

        public setCode(code: frontend.syntax.IJSContextInfo) {
            this.code = code;
        }

        public declarationBindingInstantiation(executionContexts: JSExecutionContexts, funcObj?: JSFunctionObject, args?: JSList) {
            //10.5 Declaration Binding Instantiation
            
            const env = this.variableEnvironment.env;
            const configurableBindings = this.executionCodeType === JSExecutableCodeType.eval;
            const strict = this.code.jscontext.strict;

            //4. If code is function code, then
            if (this.executionCodeType === JSExecutableCodeType.function) {
                const names = funcObj.jsFormalParameters;
                _.each(names, (argName, n) => {
                    const val = n > args.list.length
                        ? JSApi.createUndefined()
                        : args.list[n];

                    if (!env.hasBinding(argName)) {
                        env.createMutableBinding(argName);
                    }
                    env.setMutableBinding(argName, val, strict);
                });
            }

            //5. For each FunctionDeclaration f in code, in source text order do
            _.each(this.code.jscontext.functionDeclarations, (f: frontend.syntax.IFunctionDeclaration) => {
                const fn = JSApi.createString(f.id.name);
                const fo = JSEvaluation.instantiateFunctionDeclaration(this, f);
                const funcAlreadyDeclared = env.hasBinding(fn.getValue());
                if (!funcAlreadyDeclared) {
                    env.createMutableBinding(fn.getValue(), configurableBindings);
                }
                else if (env === executionContexts.globalEnvironment.env) {
                    const go = executionContexts.global;
                    const existing = go.objGetProperty(fn);
                    if (existing instanceof JSUndefined) {
                        JSApi.throwTypeErrorException();
                    }
                    const existingProp = existing as JSPropertyDescriptor;
                    if (JSApi.isBooleanWithValue(existingProp.jsconfigurable, true)) {
                        go.objDefineOwnProperty(
                            fn,
                            JSPropertyDescriptor.createDataPropertyDescriptor(
                                JSApi.createUndefined(),
                                JSApi.createBoolean(true),
                                JSApi.createBoolean(true),
                                JSApi.createBoolean(configurableBindings)
                            ),
                            true
                        );
                    }
                    else if (existingProp.isAccessorDescriptor()
                        || !JSApi.isBooleanWithValue(existingProp.jswritable, true)
                        || !JSApi.isBooleanWithValue(existingProp.jsconfigurable, true)
                    ) {
                        JSApi.throwTypeErrorException();
                    }
                }
                env.setMutableBinding(fn.getValue(), fo, strict);
            });
            
            const argumentsAlreadyDeclared = env.hasBinding("arguments");
            
            //7. If code is function code and
            if (this.executionCodeType === JSExecutableCodeType.function
                && !argumentsAlreadyDeclared
            ) {
                const names = funcObj.jsFormalParameters;
                const argsObj = JSExecutionContext.createArgumentsObject(funcObj, names, args, this.variableEnvironment, strict);
                if(strict) {
                    (env as JSDeclerativeEnvironmentRecord).createImmutableBinding("arguments");
                    (env as JSDeclerativeEnvironmentRecord).initializeImmutableBinding("arguments", argsObj);
                }
                else {
                    env.createMutableBinding("arguments");
                    env.setMutableBinding("arguments", argsObj, false);
                }
            }
            
            //8. For each VariableDeclaration and VariableDeclarationNoIn d in code, in source text order do
            _.each(this.code.jscontext.variableDeclarations, (variableDeclaration: frontend.syntax.IVariableDeclaration) => {
                _.each(variableDeclaration.declarations, (declaratior: frontend.syntax.IVariableDeclarator) => {
                    const dn = declaratior.id.name;
                    if(!env.hasBinding(dn)) {
                        env.createMutableBinding(dn);
                        env.setMutableBinding(dn, JSApi.createUndefined(), strict);
                    }
                });
            });
        }
        
        public static createArgumentsObject(func: JSFunctionObject, names: string[], args: JSList, env: JSLexicalEnvironment, strict: boolean): JSArgumentsObject {
            return throwNotImplementedYet();
        }
    }
}