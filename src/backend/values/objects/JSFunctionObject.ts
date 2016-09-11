module trl.backend {

    function createFunctionObject(
        FormalParameterList: JSList,
        funcBody: frontend.syntax.IBlockStatement,
        scope: JSLexicalEnvironment,
        strict: boolean
    ): IJSValue | JSReference {
        const obj = JSApi.createObject(this.cx);
        obj.objPrototype = this.cx.objectPrototypeObject;
        obj.objClass = JSApi.createString("Function");

        installStandardValues();

        return obj;
    }

    function installStandardValues() {
        JSApi.defineImmutableDataPropertyDescriptor(this, "getOwnPropertyDescriptor",
            JSApi.createNativeFunctionObject(this.cx, (thisArg: IJSValue, argumentsList: JSList): IJSValue => {
                const arg1 = JSApi.toNativeValue(argumentsList.list[0]);
                if (JSApi.isObject(arg1)) {
                    return (arg1 as JSObject).objPrototype;
                }
                else {
                    JSApi.throwTypeErrorException();
                }
        }));
    }

    function objConstruct(args?: JSList): IJSValue | JSReference {
        let body: string;
        let argsStr: string[];
        if (args.list.length === 1) {
            body = "";
        } else if (args.list.length === 1) {
            body = JSApi.toString(args.list[0]).getValue();
        } else {
            body = JSApi.toString(_.last(args.list)).getValue();
            for (let i = 0; i < args.list.length - 1; ++i) {
                argsStr.push(JSApi.toString(args.list[i]).getValue());
            }
            const arg = argsStr.join(",");
            const tokenizeResult = frontend.api.tokenize(arg, {
                loc: true,
                readableTokensMode: false,
                includeCommentsAsNormalTokens: false
            });
            if (tokenizeResult.exceptions) {
                return JSApi.throwSyntaxError();
            }
        }
        const parser = new frontend.syntax.Parser(body, {
            loc: true,
            attachJSContextInfo: true
        });
        const blockStmt = parser.parseFunctionBody();
        if (!blockStmt) {
            return JSApi.throwSyntaxError();
        }
        const strict = parser.getLastJSScopeContext().strict;
    }

    export class JSFunctionObject extends JSObject {

        public jsFormalParameters: string[];
        public strictMode: boolean;

        constructor(
            cx: vm.JSExecutionContexts
        ) {
            super(cx);
            this.objClass = JSApi.createString("Function");
            this.objPrototype = cx.functionPrototypeObject;
            this.installStandardValues();
        }

        objCall(self: IJSValue, args?: JSList): IJSValue | JSReference {
            return objConstruct(args);
        }

        objConstruct(self: IJSValue, args?: JSList): IJSValue | JSReference {
            return objConstruct(args);
        }

        objGet(propName: JSString): IJSValue {
            const val = super.objGet(propName);
            if (propName.getValue() === "caller" && JSApi.isFunctionObject(val) && (val as JSFunctionObject).strictMode) {
                return JSApi.throwTypeErrorException();
            }
            return val;
        }

        public installStandardValues() {

        }
    }


    export class JSFunctionPrototypeObject extends JSObject {
        constructor(cx: vm.JSExecutionContexts) {
            super(cx);
        }
    }
}

