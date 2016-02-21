/// <reference path="../../../tsDefinitions/tsd.d.ts" />
/// <reference path="../lexical/Lexer.ts" />
/// <reference path="../utilities/Assertion.ts" />
/// <reference path="../utilities/Exception.ts" />
/// <reference path="../lexical/CharacterStream.ts" />
/// <reference path="../lexical/TokenDefinitions.ts" />
/// <reference path="NodeFactory.ts" />
/// <reference path="IParser.d.ts" />

module trl.frontend.syntax {

    export class Parser implements IParser {

        private nodeFactory: NodeFactory;
        private parseException: utilities.IExceptionHandler;

        private charStream: lexical.ICharacterStream;
        private lexException: utilities.IExceptionHandler;
        private lex: lexical.ILexer;

        private inForIn: boolean;
        private inLoopMutex: number[];
        private inSwitchMutex: number[];
        private inFunctionMutex: number;

        private static defaultParserOptions: IParserOptions = {
            loc: false,
            tolerateErrors: false
        };

        private static lexerOptions: lexical.ILexerOptions = {
            loc: true,
            readableTokensMode: false,
            includeCommentsAsNormalTokens: false
        };

        constructor(
            chars: string,
            private options?: IParserOptions
        ) {
            this.options = _.defaults(
                _.clone(options || {}),
                Parser.defaultParserOptions
            );
            this.nodeFactory = new NodeFactory(this.options.loc);
            this.parseException = new utilities.ExceptionHandler();

            this.charStream = new lexical.CharacterStream(chars);
            this.lexException = new utilities.ExceptionHandler();
            this.lex = new lexical.Lexer(this.charStream, this.lexException, Parser.lexerOptions);

            this.inForIn = false;
            this.inLoopMutex = [0];
            this.inSwitchMutex = [0];
            this.inFunctionMutex = 0;
        }       

        ///////////////////////////////////////////
        // Context Utilities

        // private isKeyword(token: lexical.IToken): boolean {
        //     const isValid = this.lex.isKeyword(token);
        //     if (isValid) {
        //         return token.value === "in" ? this.inForIn : true;
        //     }
        //     return false;
        // }

        //iteration mutex
        private beginIteration() {
            ++this.inLoopMutex[this.inLoopMutex.length - 1];
        }

        private finishIteration() {
            --this.inLoopMutex[this.inLoopMutex.length - 1];
        }

        private newIterationScope() {
            this.inLoopMutex.push(0);
        }

        private restoreIterationScope() {
            const currIterationMutex = this.inLoopMutex.pop();
            utilities.assert(currIterationMutex === 0);
        }

        private isOnIteration(): boolean {
            return this.inLoopMutex[this.inLoopMutex.length - 1] > 0;
        }

        //switch mutex
        private beginSwitch() {
            ++this.inSwitchMutex[this.inSwitchMutex.length - 1];
        }

        private finishSwitch() {
            --this.inSwitchMutex[this.inSwitchMutex.length - 1];
        }

        private newSwitchScope() {
            this.inSwitchMutex.push(0);
        }

        private restoreSwitchScope() {
            const currSwitchMutex = this.inSwitchMutex.pop();
            utilities.assert(currSwitchMutex === 0);
        }

        private isOnSwitch(): boolean {
            return this.inSwitchMutex[this.inSwitchMutex.length - 1] > 0;
        }
        
        //function mutex
        private beginFunction() {
            ++this.inFunctionMutex;
        }

        private finishFunction() {
            --this.inFunctionMutex;
        }

        private isOnFunction(): boolean {
            return this.inFunctionMutex > 0;
        }
        
        /////////////Context Utilities/////////////


        ///////////////////////////////////////////
        // Parse Utilities
        
        public getExceptions(): utilities.IExceptionHandler {
            return this.parseException;
        }

        private addException(token: lexical.IToken) {
            const value = this.lex.isEof(token) ? "end of file" : token.value;
            this.parseException.addException(
                `Undexpected token: '${value}'`,
                token.loc.start.line,
                token.loc.start.column
            );
        }

        private delegateLexicalErrors() {
            const lexExceptions = this.lexException.getExceptions();
            _.each(lexExceptions, lexException =>
                this.parseException.addException(lexException.msg, lexException.pos.line, lexException.pos.column));
        }

        private canTolerateError(): boolean {
            const latestToken = this.lex.latestToken();
            return this.options.tolerateErrors
                && latestToken
                && !(this.lex.isEof(latestToken) || this.lex.isError(latestToken));
        }

        private parseStatementIfCanTolerate(stmts: IStatement[]): boolean {
            const stmt = this.parseStatement();
            if (stmt) {
                stmts.push(stmt);
                return true;
            }
            return this.canTolerateError();
        }

        private trimOptionalSemicolon(): boolean {
            const token = this.lex.lookAheadNextToken();
            if (this.lex.isPunctuationValue(token, ";")) {
                this.lex.nextToken();
            }
            else if (
                this.tokenIsInSameLine(token)
                && !this.lex.isEof(token)
                && !this.lex.isPunctuationValue(token, "}")
            ) {
                this.addException(token);
                return false;
            }
            return true;
        }

        private trackPositionUnary(token: lexical.IToken): lexical.ITokenSourceLocation {
            return token.loc;
        }

        private trackPositionByPos(startPos: lexical.ITokenPosition): lexical.ITokenSourceLocation {
            const latestToken = this.lex.latestToken();
            return lexical.TokenSourceLocation.create(startPos, latestToken.loc.end);
        }

        private trackPositionByToken(startToken: lexical.IToken): lexical.ITokenSourceLocation {
            const latestToken = this.lex.latestToken();
            return lexical.TokenSourceLocation.create(startToken.loc.start, latestToken.loc.end);
        }

        private expectType(value: string, typeChecker: (token: lexical.IToken, value: string) => boolean): boolean {
            const token = this.lex.nextToken();
            if (typeChecker.call(this.lex, token, value)) {
                return true;
            }
            this.addException(token);
            return false;
        }

        private expectPunctuation(value: string): boolean {
            return this.expectType(value, (this.lex.isPunctuationValue));
        }

        private expectKeyword(value: string): boolean {
            return this.expectType(value, (this.lex.isKeywordValue));
        }

        private tokenIsInSameLine(token: lexical.IToken): boolean {
            return token.loc.end.line === this.lex.latestToken().loc.end.line;
        }              

        ///////////Parse Utilities/////////////   


        ///////////////////////////////////////////
        // Parse Program

        public parse(): IProgram {
            const initialToken = this.lex.lookAheadNextToken();
            if (this.lex.isError(initialToken)) {
                this.delegateLexicalErrors();
                return;
            }

            const stmts = this.parseSourceElements();
            if (!stmts) return;

            if (this.lex.isEof(initialToken)) {
                return this.nodeFactory.createProgram(stmts, this.trackPositionUnary(initialToken));
            }
            return this.nodeFactory.createProgram(stmts, this.trackPositionByToken(initialToken));
        }

        public parseSourceElements(): IStatement[] {
            const stmts: IStatement[] = [];
            while (this.lex.hasNext() && this.parseStatementIfCanTolerate(stmts));
            return stmts;
        }
        //////////////Parse Program//////////////// 

        ///////////////////////////////////////////
        // Parse Statements

        public parseStatement(): IStatement {
            const token = this.lex.lookAheadNextToken();

            if (this.lex.isKeyword(token)) {

                switch (token.value) {
                    case "var":
                        return this.parseVariableStatement();

                    case "if":
                        return this.parseIfStatement();

                    case "while":
                        return this.parseWhileStatement();

                    case "do":
                        return this.parseDoWhileStatement();

                    case "for":
                        return this.parseForStatement();

                    case "continue":
                        return this.parseContinueStatement();

                    case "break":
                        return this.parseBreakStatement();

                    case "with":
                        return this.parseWithStatement();

                    case "switch":
                        return this.parseSwitchStatement();

                    case "throw":
                        return this.parseThrowStatement();

                    case "try":
                        return this.parseTryStatement();

                    case "debugger":
                        return this.parseDebuggerStatement();

                    case "function":
                        return this.parseFunction(true);

                    case "return":
                        return this.parseReturnStatement();
                }
            }
            else if (this.lex.isPunctuation(token)) {
                switch (token.value) {

                    case "{":
                        return this.parseBlockStatement();

                    case ";":
                        return this.parseEmptyStatement();
                }
            }
            else if (this.lex.isIdentifier(token)) {
                return this.parseLabeledStatement();
            }
            return this.parseExpressionStatement();
        }

        public parseBlockStatement(): IBlockStatement {
            const initialToken = this.lex.lookAheadNextToken();
            if (!this.expectPunctuation("{")) return;

            const stmts: IStatement[] = [];
            let token = this.lex.lookAheadNextToken();
            while (!this.lex.isPunctuationValue(token, "}")) {
                if (!this.parseStatementIfCanTolerate(stmts)) return;

                token = this.lex.lookAheadNextToken();
            }

            if (!this.expectPunctuation("}")) return;

            return this.nodeFactory.createStatementBlock(stmts, this.trackPositionByToken(initialToken));
        }

        public parseEmptyStatement(): IStatement {
            const initialToken = this.lex.lookAheadNextToken();
            if (this.expectPunctuation(";")) {
                return this.nodeFactory.createStatementEmpty(this.trackPositionByToken(initialToken));
            }
        }

        public parseIfStatement(): IStatement {
            const initialToken = this.lex.lookAheadNextToken();
            const testExpr = this.parseKeywordLparExpressionRpar("if");
            if (!testExpr) return;

            const consStmt = this.parseStatement();
            if (!consStmt) return;

            let altStmt = null;
            if (this.lex.matchKeyword("else")) {
                altStmt = this.parseStatement();
                if (!altStmt) return;
            }
            return this.nodeFactory.createStatementIf(testExpr, consStmt, altStmt, this.trackPositionByToken(initialToken));
        }

        private parseIteration(parseFunc: () => INode): IStatement {
            this.beginIteration();
            const stmt = parseFunc.apply(this);
            this.finishIteration();
            return stmt;
        }

        private innerParseWhileStatement(): IStatement {
            const initialToken = this.lex.lookAheadNextToken();

            const testExpr = this.parseKeywordLparExpressionRpar("while");
            if (!testExpr) return;

            const stmt = this.parseStatement();
            if (!stmt) return;

            return this.nodeFactory.createStatementWhile(testExpr, stmt, this.trackPositionByToken(initialToken));
        }

        public parseWhileStatement(): IStatement {
            return this.parseIteration(this.innerParseWhileStatement);
        }

        public innerParseDoWhileStatement(): IStatement {
            const initialToken = this.lex.lookAheadNextToken();

            if (!this.expectKeyword("do")) return;

            const stmt = this.parseStatement();
            if (!stmt) return;

            const testExpr = this.parseKeywordLparExpressionRpar("while");
            if (!testExpr) return;

            this.lex.matchPunctuation(";");

            return this.nodeFactory.createStatementDoWhile(stmt, testExpr, this.trackPositionByToken(initialToken));
        }

        public parseDoWhileStatement(): IStatement {
            return this.parseIteration(this.innerParseDoWhileStatement);
        }

        private innerParseForStatement(): IStatement {
            const initialToken = this.lex.lookAheadNextToken();

            if (!(this.expectKeyword("for") && this.expectPunctuation("("))) return;

            let initDecl: IVariableDeclaration = null,
                declarations: IVariableDeclarator[],
                initExpr: IExpression = null,
                token = this.lex.lookAheadNextToken();

            if (!this.lex.isPunctuationValue(token, ";")) {
                this.inForIn = true;
                if (this.lex.isKeywordValue(token, "var")) {
                    this.lex.nextToken();

                    declarations = this.parseVariableDeclarators();
                    if (!declarations) return;

                    initDecl = this.nodeFactory.createDeclarationVariable(declarations, this.trackPositionByToken(token));
                }
                else {
                    initExpr = this.parseExpression();
                    if (!initExpr) return;
                }
                this.inForIn = false;
            }

            let isForIn = false,
                test = null;
            token = this.lex.lookAheadNextToken();

            if (this.lex.isKeywordValue(token, "in")) {
                this.lex.nextToken();
                isForIn = true;

                if (Parser.isInvalidForInLeftSide(initExpr, declarations)) {
                    this.parseException.addException(
                        `for in left side should resolve to reference`,
                        initialToken.loc.start.line,
                        initialToken.loc.start.column
                    );
                    return;
                }
            } else {
                if (!this.expectPunctuation(";")) return;

                token = this.lex.lookAheadNextToken();
                if (!this.lex.isPunctuationValue(token, ";")) {
                    test = this.parseExpression();
                    if (!test) return;
                }

                if (!this.expectPunctuation(";")) return;
            }

            let update = null;
            token = this.lex.lookAheadNextToken();
            if (!this.lex.isPunctuationValue(token, ")")) {
                update = this.parseExpression();
                if (!update) return;
            }

            if (isForIn && !update) {
                this.addException(token);
                return;
            }

            if (!this.expectPunctuation(")")) return;

            const body = this.parseStatement();
            if (!body) return;

            const pos = this.trackPositionByToken(initialToken);
            const init = initExpr || initDecl;
            if (isForIn) {
                return this.nodeFactory.createStatementForIn(init, update, body, false, pos);
            } else {
                return this.nodeFactory.createStatementFor(init, test, update, body, pos);
            }
        }

        private static isInvalidForInLeftSide(initExpr: IExpression, declarations: IVariableDeclarator[]): boolean {
            return (!initExpr && !declarations)
                || ((initExpr && !Parser.isLeftHandExpressionResolvingToReference(initExpr))
                    || (declarations && declarations.length !== 1));
        }

        public parseForStatement(): IStatement {
            return this.parseIteration(this.innerParseForStatement);
        }

        private parseKeywordIdentifierSemicolon(keyword: string, nodeFactoryFunc: (iten: INode, loc?: lexical.ITokenSourceLocation) => INode): INode {
            const initialToken = this.lex.lookAheadNextToken();
            if (!this.expectKeyword(keyword)) return;

            const token = this.lex.lookAheadNextToken();
            let item: INode = null;

            if (this.tokenIsInSameLine(token) && this.lex.isIdentifier(token)) {
                item = this.parseIdentifier();
                if (!item) return;
            }
            if (!this.trimOptionalSemicolon()) return;

            return nodeFactoryFunc.call(this.nodeFactory, item, this.trackPositionByToken(initialToken));
        }

        public parseContinueStatement(): IExpression {
            const stmt = this.parseKeywordIdentifierSemicolon("continue", this.nodeFactory.createStatementContinue);
            if (!stmt) return;

            if (this.isOnIteration()) {
                return stmt;
            }
            this.parseException.addException(
                `Illegal continue statement`,
                stmt.loc.start.line,
                stmt.loc.start.column
            );
        }

        public parseBreakStatement(): IExpression {
            const stmt = this.parseKeywordIdentifierSemicolon("break", this.nodeFactory.createStatementBreak);
            if (!stmt) return;

            if (this.isOnIteration() || this.isOnSwitch()) {
                return stmt;
            }
            this.parseException.addException(
                `Illegal break statement`,
                stmt.loc.start.line,
                stmt.loc.start.column
            );
        }

        public parseReturnStatement(): IExpression {
            const initialToken = this.lex.lookAheadNextToken();
            if (!this.expectKeyword("return")) return;

            const token = this.lex.lookAheadNextToken();
            let item: INode = null;

            if (this.tokenIsInSameLine(token) 
                && !this.lex.isPunctuationValue(token, ";") 
                && !this.lex.isPunctuationValue(token, "}")
                && !this.lex.isEof(token)
            ) {
                item = this.parseExpression();
                if (!item) return;
            }

            if (this.isOnFunction()) {
                return this.nodeFactory.createStatementReturn(item, this.trackPositionByToken(initialToken));
            }
            this.parseException.addException(
                `Illegal return statement`,
                initialToken.loc.start.line,
                initialToken.loc.start.column
            );
        }

        public parseWithStatement(): IExpression {
            const initialToken = this.lex.lookAheadNextToken();

            const expr = this.parseKeywordLparExpressionRpar("with");
            if (!expr) return;

            const stmt = this.parseStatement();
            if (!stmt) return;

            return this.nodeFactory.createStatementWith(expr, stmt, this.trackPositionByToken(initialToken));
        }

        private parseCaseClauseStatements(expectDefault: boolean): IStatement[] {
            if (!this.expectPunctuation(":")) return;

            const stmts: IStatement[] = [];
            while (true) {
                const token = this.lex.lookAheadNextToken();
                if (this.lex.isKeywordValue(token, "case")
                    || this.lex.isPunctuationValue(token, "}")
                    || (this.lex.isKeywordValue(token, "default") && expectDefault)
                ) {
                    break;
                }

                if (!this.parseStatementIfCanTolerate(stmts)) return;
            }
            return stmts;
        }

        private parseCasesClause(cases: ISwitchCase[], expectDefault: boolean) {
            let token = this.lex.lookAheadNextToken();

            while (this.lex.isKeywordValue(token, "case")) {
                this.lex.nextToken();

                const expr = this.parseExpression();
                if (!expr) return false;

                const stmts = this.parseCaseClauseStatements(expectDefault);
                if (!stmts) return false;

                const switchCase = this.nodeFactory.createSwitchCase(expr, stmts, this.trackPositionByToken(token));
                cases.push(switchCase);

                token = this.lex.lookAheadNextToken();
            }
            return true;
        }

        private innerParseSwitchStatement(): IStatement {
            const initialToken = this.lex.lookAheadNextToken();

            const expr = this.parseKeywordLparExpressionRpar("switch");
            if (!expr) return;

            if (!this.expectPunctuation("{")) return;

            let cases: ISwitchCase[] = [];
            let token = this.lex.lookAheadNextToken();

            if (this.lex.isKeywordValue(token, "case")) {
                if (!this.parseCasesClause(cases, true)) return;

                token = this.lex.lookAheadNextToken();
            }

            if (this.lex.isKeywordValue(token, "default")) {
                this.lex.nextToken();

                const stmts = this.parseCaseClauseStatements(false);
                if (!stmts) return;

                const defaultCase = this.nodeFactory.createSwitchCase(null, stmts, this.trackPositionByToken(token));
                cases.push(defaultCase);

                token = this.lex.lookAheadNextToken();
            }

            if (this.lex.isKeywordValue(token, "case")
                && !this.parseCasesClause(cases, false)) return;

            if (!this.expectPunctuation("}")) return;
            return this.nodeFactory.createStatementSwitch(expr, cases, this.trackPositionByToken(initialToken));
        }

        public parseSwitchStatement(): IStatement {
            this.beginSwitch();
            const stmt = this.innerParseSwitchStatement();
            this.finishSwitch();
            return stmt;
        }

        public parseThrowStatement(): IStatement {
            const initialToken = this.lex.lookAheadNextToken();
            if (!this.expectKeyword("throw")) return;

            const token = this.lex.lookAheadNextToken();
            if (initialToken.loc.start.line !== token.loc.start.line) {
                this.parseException.addException(
                    `Illegal newline after throw`,
                    initialToken.loc.start.line,
                    initialToken.loc.start.column
                );
                return;
            }

            const expr = this.parseExpression();
            if (!expr) return;

            if (!this.trimOptionalSemicolon()) return;
            return this.nodeFactory.createStatementThrow(expr, this.trackPositionByToken(initialToken));
        }

        public parseTryStatement(): IStatement {
            const initialToken = this.lex.lookAheadNextToken();
            if (!this.expectKeyword("try")) return;

            const stmt = this.parseBlockStatement();
            if (!stmt) return;

            let token = this.lex.lookAheadNextToken();
            let catchClause: ICatchClause = null;

            if (this.lex.isKeywordValue(token, "catch")) {
                const catchId = this.parseKeywordLparExpressionRpar("catch");
                if (!(catchId && catchId.type === "Identifier")) return;

                const stmt = this.parseBlockStatement();
                if (!stmt) return;

                catchClause = this.nodeFactory.createCatchClause((catchId as IIdentifier), stmt, this.trackPositionByToken(token));
            }

            let finalizer: IBlockStatement = null;
            if (this.lex.matchKeyword("finally")) {
                finalizer = this.parseBlockStatement();
                if (!finalizer) return;
            }

            return this.nodeFactory.createStatementTry(stmt, catchClause, finalizer, this.trackPositionByToken(initialToken));
        }

        public parseDebuggerStatement(): IStatement {
            const initialToken = this.lex.lookAheadNextToken();
            if (!(this.expectKeyword("debugger") && this.trimOptionalSemicolon())) return;

            return this.nodeFactory.createStatementDebugger(this.trackPositionByToken(initialToken));
        }

        public parseLabeledStatement(): IStatement {
            const initialToken = this.lex.lookAheadNextToken();
            const expr = this.parseExpression();
            if (!expr) return;

            if (expr.type === "Identifier" && this.lex.matchPunctuation(":")) {
                const stmt = this.parseStatement();
                if (!stmt) return;

                return this.nodeFactory.createStatementLabeled(expr as IIdentifier, stmt, this.trackPositionByToken(initialToken));
            }
            // parse like a normal expression statement
            if (!this.trimOptionalSemicolon()) return;

            return this.nodeFactory.createStatementExpression(expr, this.trackPositionByToken(initialToken));
        }

        private parseKeywordLparExpressionRpar(keyword: string): IExpression {
            if (!(this.expectKeyword(keyword) && this.expectPunctuation("("))) return;

            const expr = this.parseExpression();
            if (expr && this.expectPunctuation(")")) {
                return expr;
            }
        }

        public parseVariableStatement(): IStatement {
            const initialToken = this.lex.lookAheadNextToken();
            if (!this.expectKeyword("var")) return;

            const variableDeclarators = this.parseVariableDeclarators();
            if (!this.trimOptionalSemicolon()) return;

            return this.nodeFactory.createDeclarationVariable(variableDeclarators, this.trackPositionByToken(initialToken));
        }

        public parseExpressionStatement(): IStatement {
            const initialToken = this.lex.lookAheadNextToken();
            const expr = this.parseExpression();
            if (!(expr && this.trimOptionalSemicolon())) return;

            return this.nodeFactory.createStatementExpression(expr, this.trackPositionByToken(initialToken));
        }
        
        ///////////Parse Statements////////////////    
        
        ///////////////////////////////////////////
        // Declarations
        
        private parseVariableDeclarators(): IVariableDeclarator[] {
            let variableDeclarator = this.parseVariableDeclarator();
            if (!variableDeclarator) return;

            const variableDeclarators: IVariableDeclarator[] = [variableDeclarator];
            while (this.lex.matchPunctuation(",")) {
                const variableDeclarator = this.parseVariableDeclarator();
                if (!variableDeclarator) return;

                variableDeclarators.push(variableDeclarator);
            }
            return variableDeclarators;
        }

        public parseVariableDeclarator(): IVariableDeclarator {
            const initialToken = this.lex.lookAheadNextToken();
            const identifier = this.parseIdentifier();
            if (!identifier) return;

            let expr = null;
            if (this.lex.matchPunctuation("=")) {
                expr = this.parseAssignmentExpression();
                if (!expr) return;
            }

            return this.nodeFactory.createVariableDeclarator(identifier, expr, this.trackPositionByToken(initialToken));
        }        
        ///////////////Declarations/////////////////            
        
        
        ///////////////////////////////////////////
        // Parse Expressions        
        public parseExpression(): IExpression {
            const initialToken = this.lex.lookAheadNextToken();
            const expr = this.parseAssignmentExpression();
            if (!expr) return;

            if (this.lex.matchPunctuation(",")) {
                const exprs: IExpression[] = [expr];
                do {
                    const expr = this.parseAssignmentExpression();
                    if (!expr) return;
                    exprs.push(expr);
                } while (this.lex.matchPunctuation(","));

                return this.nodeFactory.createExpressionSequence(exprs, this.trackPositionByToken(initialToken));
            }

            return expr;
        }

        // thanks to: http://stackoverflow.com/questions/3709866/whats-a-valid-left-hand-side-expression-in-javascript-grammar
        private static isLeftHandExpressionResolvingToReference(expr: IExpression): boolean {
            return expr.type === "Identifier" || expr.type === "MemberExpression";
        }

        private static AssignmentOperators = {
            "=": true,
            "||": true,
            "*=": true,
            "/=": true,
            "%=": true,
            "+=": true,
            "-=": true,
            "<<=": true,
            ">>=": true,
            ">>>=": true,
            "&=": true,
            "^=": true,
            "|=": true
        }

        public parseAssignmentExpression(): IExpression {
            const initialToken = this.lex.lookAheadNextToken();

            const expr = this.parseConditionalExpression();
            if (!expr) return;

            const token = this.lex.lookAheadNextToken();
            if (this.lex.isPunctuation(token)
                && Parser.AssignmentOperators[token.value]
            ) {
                if (!Parser.isLeftHandExpressionResolvingToReference(expr)) {
                    this.parseException.addException(
                        `Invalid left-hand side in assignment`,
                        token.loc.start.line,
                        token.loc.start.column
                    );
                    return;
                }
                this.lex.nextToken();
                const rexpr = this.parseAssignmentExpression();
                if (!rexpr) return;

                return this.nodeFactory.createExpressionAssignment(token.value, expr, rexpr, this.trackPositionByToken(initialToken));
            }

            return expr;
        }

        public parseConditionalExpression(): IExpression {
            const initialToken = this.lex.lookAheadNextToken();

            const expr = this.parseBinaryExpression();
            if (!expr) return;

            const token = this.lex.lookAheadNextToken();

            if (this.lex.isPunctuationValue(token, "?")) {
                this.lex.nextToken();

                const consequentExpr = this.parseAssignmentExpression();
                if (!consequentExpr) return;

                if (!this.expectPunctuation(":")) return;

                const alternateExpr = this.parseAssignmentExpression();
                if (!alternateExpr) return;

                return this.nodeFactory.createExpressionConditional(expr, alternateExpr, consequentExpr, this.trackPositionByToken(initialToken));
            }

            return expr;
        }

        private static BinaryTokenValues_or = 1;
        private static BinaryTokenValues_and = 2;
        private static BinaryTokenValues_islogic = Parser.BinaryTokenValues_and;
        private static BinaryTokenValues_bor = 3;
        private static BinaryTokenValues_xor = 4;
        private static BinaryTokenValues_band = 5;
        private static BinaryTokenValues_eq = 6;
        private static BinaryTokenValues_rel = 7;
        private static BinaryTokenValues_shift = 8;
        private static BinaryTokenValues_add = 9;
        private static BinaryTokenValues_multi = 10;

        private static isLogicBinaryTokenValue(rank: number): boolean {
            return rank <= Parser.BinaryTokenValues_islogic;
        }

        private static BinaryTokenValues = {
            '||': Parser.BinaryTokenValues_or,
            '&&': Parser.BinaryTokenValues_and,
            '|': Parser.BinaryTokenValues_bor,
            '^': Parser.BinaryTokenValues_xor,
            '&': Parser.BinaryTokenValues_band,
            '==': Parser.BinaryTokenValues_eq,
            '!=': Parser.BinaryTokenValues_eq,
            '===': Parser.BinaryTokenValues_eq,
            '!==': Parser.BinaryTokenValues_eq,
            '<': Parser.BinaryTokenValues_rel,
            '>': Parser.BinaryTokenValues_rel,
            '<=': Parser.BinaryTokenValues_rel,
            '>=': Parser.BinaryTokenValues_rel,
            'instanceof': Parser.BinaryTokenValues_rel,
            'in': Parser.BinaryTokenValues_rel,
            '<<': Parser.BinaryTokenValues_shift,
            '>>': Parser.BinaryTokenValues_shift,
            '>>>': Parser.BinaryTokenValues_shift,
            '+': Parser.BinaryTokenValues_add,
            '-': Parser.BinaryTokenValues_add,
            '*': Parser.BinaryTokenValues_multi,
            '/': Parser.BinaryTokenValues_multi,
            '%': Parser.BinaryTokenValues_multi
        }
        
        private static getBinaryOperationToken(op: string, allowIn: boolean): number {
            if(op === 'in') {
                return allowIn ? Parser.BinaryTokenValues[op] : undefined;
            }
            else {
                return Parser.BinaryTokenValues[op];
            }            
        }

        private createBinaryExpression(
            rank: number,
            operator: string,
            left: IExpression,
            right: IExpression
        ) {
            const loc = this.options.loc ?
                lexical.TokenSourceLocation.create(left.loc.start, right.loc.end) : undefined;
            if (Parser.isLogicBinaryTokenValue(rank)) {
                return this.nodeFactory.createExpressionLogical(operator, left, right, loc);
            } else {
                return this.nodeFactory.createExpressionBinary(operator, left, right, loc);
            }
        }

        // We could use the simple aproach by parsing individually 
        // every binary expression of Ecmascript definition,
        // for instanse, parseLogicalORExpression, parseLogicalANDExpression, parseEqualityExpression etc.
        //
        // We choose to parse all the binary definitions using the method
        // of shift-reduce parser for the left-associative binary operator part
        //
        // https://en.wikipedia.org/wiki/Operator-precedence_parser
        //
        // because it is more fun (and increases the performance :) )
        public innerBarseBinaryExpression(allowIn: boolean): IExpression {
            let lexpr = this.parseUnaryExpression();
            if (!lexpr) return;

            let token = this.lex.lookAheadNextToken();
            let binaryRank = Parser.getBinaryOperationToken(token.value, allowIn);

            if (binaryRank && (this.lex.isPunctuation(token) || this.lex.isKeyword(token))) {
                this.lex.nextToken();
                const rexpr = this.parseUnaryExpression();
                if (!rexpr) return;

                const exprs: IExpression[] = [lexpr, rexpr],
                    puncs: string[] = [token.value],
                    ranks: number[] = [binaryRank];

                while (true) {
                    token = this.lex.lookAheadNextToken();
                    const latestRank = Parser.getBinaryOperationToken(token.value, allowIn);

                    if (!latestRank || (!this.lex.isPunctuation(token) && !this.lex.isKeyword(token))) {
                        break;
                    }

                    this.lex.nextToken();
                    const rexpr = this.parseUnaryExpression();
                    if (!rexpr) return;

                    let lastRank = _.last(ranks);
                    while (lastRank && lastRank >= latestRank) {
                        const rexpr = exprs.pop();
                        const lexpr = exprs.pop();
                        const binaryExpr = this.createBinaryExpression(ranks.pop(), puncs.pop(), lexpr, rexpr);
                        exprs.push(binaryExpr);

                        lastRank = _.last(ranks);
                    }

                    ranks.push(latestRank);
                    puncs.push(token.value);
                    exprs.push(rexpr);
                }

                lexpr = exprs.pop();
                while (puncs.length) {
                    lexpr = this.createBinaryExpression(ranks.pop(), puncs.pop(), exprs.pop(), lexpr);
                }
            }

            return lexpr;   
        }
        
        public parseBinaryExpression(): IExpression {
            const oldInForIn = this.inForIn;
            this.inForIn = false;
            
            const expr = this.innerBarseBinaryExpression(!oldInForIn);
            
            this.inForIn = oldInForIn;
            return expr;
        }

        private static UnaryTokenValues_unary = 1;
        private static UnaryTokenValues_update = 2;

        private static UnaryTokenValues = {
            "-": Parser.UnaryTokenValues_unary,
            "+": Parser.UnaryTokenValues_unary,
            "!": Parser.UnaryTokenValues_unary,
            "~": Parser.UnaryTokenValues_unary,
            "typeof": Parser.UnaryTokenValues_unary,
            "void": Parser.UnaryTokenValues_unary,
            "delete": Parser.UnaryTokenValues_unary,
            "++": Parser.UnaryTokenValues_update,
            "--": Parser.UnaryTokenValues_update
        }

        public parseUnaryExpression(): IExpression {
            const token = this.lex.lookAheadNextToken();
            const unaryRank = Parser.UnaryTokenValues[token.value];

            if (unaryRank && (this.lex.isPunctuation(token) || this.lex.isKeyword(token))) {
                this.lex.nextToken();
                let expr = this.parseUnaryExpression();
                if (!expr) return;

                if (unaryRank === Parser.UnaryTokenValues_update) {
                    return this.nodeFactory.createExpressionUpdate(token.value, expr, true, this.trackPositionByToken(token));
                }

                return this.nodeFactory.createExpressionUnary(token.value, true, expr, this.trackPositionByToken(token));
            }
            return this.parsePostfixExpression();
        }

        public parsePostfixExpression(): IExpression {
            const initialToken = this.lex.lookAheadNextToken();

            const expr = this.parseLeftHandSideExpression(true);
            if (!expr) return;

            const token = this.lex.lookAheadNextToken();
            if (this.lex.isPunctuation(token)
                && token.loc.end.line === this.lex.latestToken().loc.end.line
                && (token.value === "++" || token.value === "--")
            ) {
                this.lex.nextToken();
                return this.nodeFactory.createExpressionUpdate(token.value, expr, false, this.trackPositionByToken(initialToken));
            }
            return expr;
        }

        private parseIdentifier(): IIdentifier {
            const token = this.lex.nextToken();
            if (this.lex.isIdentifier(token)) {
                return this.nodeFactory.createIdentifier(token.value, this.trackPositionUnary(token));
            }
            this.addException(token);
        }

        public parseLeftHandSideExpression(allowCallExpressions: boolean): IExpression {
            let initialToken = this.lex.lookAheadNextToken(),
                primaryExpr;

            if (this.lex.isKeyword(initialToken)) {

                switch (initialToken.value) {
                    case "function":
                        primaryExpr = this.parseFunction(false);
                        break;

                    case "new":
                        primaryExpr = this.parseNewExpression();
                        break;
                }
            }
            primaryExpr = primaryExpr || this.parsePrimaryExpression();
            if (!primaryExpr) return;

            let expr: INode,
                isMatchingExression = true;
            while (isMatchingExression) {
                const token = this.lex.lookAheadNextToken();
                if (!this.lex.isPunctuation(token)) {
                    break;
                }
                switch (token.value) {

                    case "[":
                        this.lex.nextToken();
                        expr = this.parseExpression();
                        if (!expr) return;

                        if (!this.expectPunctuation("]")) return;

                        primaryExpr = this.nodeFactory.createExpressionMember(primaryExpr, expr, true, this.trackPositionByToken(initialToken));
                        break;

                    case ".":
                        this.lex.nextToken();
                        const identifier = this.parseIdentifier();
                        if (!identifier) return;

                        primaryExpr = this.nodeFactory.createExpressionMember(primaryExpr, identifier, false, this.trackPositionByToken(initialToken));
                        break;

                    case "(":
                        if (allowCallExpressions) {
                            const args = this.parseArguments();
                            if (!args) {
                                return;
                            }
                            primaryExpr = this.nodeFactory.createExpressionCall(primaryExpr, args, this.trackPositionByToken(initialToken));
                            break;
                        }

                    default:
                        isMatchingExression = false;
                }
            }
            return primaryExpr;
        }

        public parsePrimaryExpression(): INode {
            let token = this.lex.lookAheadNextToken();

            switch (token.type) {
                case lexical.TokenType.keyword:
                    if (token.value === "this") {
                        this.lex.nextToken();
                        return this.nodeFactory.createExpressionThis(this.trackPositionUnary(token));
                    }
                    break;

                case lexical.TokenType.identifier:
                    this.lex.nextToken();
                    return this.nodeFactory.createIdentifier(token.value, this.trackPositionUnary(token));

                case lexical.TokenType.literal:
                    this.lex.nextToken();
                    return this.nodeFactory.createLiteral(token.value, this.trackPositionUnary(token));

                case lexical.TokenType.punctuation:
                    switch (token.value) {
                        case "[":
                            return this.parseArrayLiteral();

                        case "{":
                            return this.parseObjectLiteral();

                        case "(": {
                            const token = this.lex.nextToken();
                            const expr = this.parseExpression();
                            if (!expr) return;

                            if (this.lex.matchPunctuation(")")) {
                                return expr;
                            } else {
                                this.addException(this.lex.nextToken());
                                return;
                            }
                        }
                        case "/=":
                        case "/": {
                            token = this.lex.reinterpretLastTokenAsRegex(token);
                            if (this.lex.isError(token)) return;
                            
                            return this.nodeFactory.createLiteral(token.value, this.trackPositionUnary(token));
                        }
                    }
            }
            this.addException(token);
        }

        public parseNewExpression(): IExpression {
            let initialToken = this.lex.lookAheadNextToken();
            if (!this.expectKeyword("new")) return;

            const callExpr = this.parseLeftHandSideExpression(false);
            if (!callExpr) return;

            let args,
                token = this.lex.lookAheadNextToken();
            if (this.lex.isPunctuationValue(token, "(")) {
                args = this.parseArguments();
                if (!args) return;
            }

            return this.nodeFactory.createExpressionNew(callExpr, args || [], this.trackPositionByToken(initialToken));
        }

        public parseArguments(): IExpression[] {
            if (!this.expectPunctuation("(")) return;

            let token = this.lex.lookAheadNextToken();
            const exprs: IExpression[] = [];
            if (this.lex.isPunctuationValue(token, ")")) {
                this.lex.nextToken();
                return exprs;
            }

            while (true) {
                const expr = this.parseAssignmentExpression();
                if (!expr) return;

                exprs.push(expr);

                token = this.lex.nextToken();
                if (this.lex.isPunctuationValue(token, ")")) {
                    break;
                } else if (!this.lex.isPunctuationValue(token, ",")) {
                    this.addException(token);
                    return;
                }
            }
            return exprs;
        }

        public parseArrayLiteral(): INode {
            const token = this.lex.lookAheadNextToken();
            if (!this.expectPunctuation("[")) return;

            const arrayExprs: INode[] = [];
            this.trimArrayCommas(arrayExprs);

            while (!this.lex.matchPunctuation("]")) {
                const assignExpr = this.parseAssignmentExpression();
                if (!assignExpr) return;

                arrayExprs.push(assignExpr);
                if (this.lex.matchPunctuation(",")) {
                    this.trimArrayCommas(arrayExprs);
                }
            }

            return this.nodeFactory.createExpressionArray(arrayExprs, this.trackPositionByToken(token));
        }

        private trimArrayCommas(arrayExprs: INode[]) {
            while (this.lex.matchPunctuation(",")) {
                arrayExprs.push(null);
            }
        }

        public parseObjectLiteral(): INode {
            const token = this.lex.lookAheadNextToken();
            if (!this.expectPunctuation("{")) return;

            const properties: IProperty[] = [];
            while (true) {
                let token = this.lex.lookAheadNextToken();

                if (this.lex.isPunctuationValue(token, "}")) {
                    this.lex.nextToken();
                    break;
                }

                const property = this.parsePropertyAssignment();
                if (!property) return;

                properties.push(property);

                token = this.lex.nextToken();
                if (this.lex.isPunctuationValue(token, "}")) {
                    break;
                }
                else if (!this.lex.isPunctuationValue(token, ",")) {
                    this.addException(token);
                    return;
                }
            }
            return this.nodeFactory.createExpressionObject(properties, this.trackPositionByToken(token));
        }

        public parsePropertyAssignment(): IProperty {
            let kind: string;

            let initialToken = this.lex.lookAheadNextToken();
            if (this.lex.isIdentifierValue(initialToken, "get")) {
                kind = "get";
            } else if (this.lex.isIdentifierValue(initialToken, "set")) {
                kind = "set";
            } else {
                kind = "init";
            }

            const propertyName = this.parsePropertyName();
            if (!propertyName) return;

            let token = this.lex.nextToken();
            if (this.lex.isPunctuationValue(token, ":")) {
                const expr = this.parseAssignmentExpression();
                if (!expr) return;

                return this.nodeFactory.createObjectProperty(propertyName, expr, kind, this.trackPositionByToken(initialToken));
            }
            else if (this.lex.isPunctuationValue(token, "(")) {
                let args: IIdentifier[] = [];
                token = this.lex.nextToken();

                if (this.lex.isIdentifier(token)) {
                    const arg = this.nodeFactory.createIdentifier(token.value, this.trackPositionUnary(token));
                    args.push(arg);
                    if (!this.expectPunctuation(")")) return;
                } else if (!this.lex.isPunctuationValue(token, ")")) {
                    this.addException(token);
                    return;
                }

                if (!this.expectPunctuation("{")) return;

                const functionBody = this.parseFunctionBody();
                if (!this.expectPunctuation("}")) return;

                const functionExpr = this.nodeFactory.createExpressionFunction(null, args, functionBody, this.trackPositionByToken(token));
                return this.nodeFactory.createObjectProperty(propertyName, functionExpr, kind, this.trackPositionByToken(initialToken));
            }
            else {
                this.addException(token);
            }
        }

        public parsePropertyName(): ILiteral | IIdentifier {
            const token = this.lex.nextToken();
            if (this.lex.isLiteral(token)) {
                if (token.subType === lexical.LiteralSubType.string
                    || token.subType === lexical.LiteralSubType.number
                ) {
                    return this.nodeFactory.createLiteral(token.value, this.trackPositionUnary(token));
                }
                return this.nodeFactory.createIdentifier(token.value, this.trackPositionUnary(token));
            }
            else if (this.lex.isIdentifier(token)) {
                return this.nodeFactory.createIdentifier(token.value, this.trackPositionUnary(token));
            }
            else {
                this.addException(token);
            }
        }
        
        /////////////Parse Expressions///////////        

        ///////////////////////////////////////////
        // Parse Function

        public parseFunction(asDeclaration: boolean): IFunctionDeclaration | IFunctionExpression {
            const initialToken = this.lex.lookAheadNextToken();
            if (!this.expectKeyword("function")) return;

            let token = this.lex.lookAheadNextToken();
            let identifier: IIdentifier = null;
            if (this.lex.isIdentifier(token)) {
                this.lex.nextToken();
                identifier = this.nodeFactory.createIdentifier(token.value, this.trackPositionUnary(token));
            }
            else if (asDeclaration) {
                this.addException(token);
                return;
            }

            if (!this.expectPunctuation("(")) return;

            const args: IIdentifier[] = [];
            token = this.lex.lookAheadNextToken();
            while (!this.lex.isPunctuationValue(token, ")")) {
                if (!this.lex.isIdentifier(token)) {
                    this.addException(token);
                    return;
                }
                this.lex.nextToken();
                const arg = this.nodeFactory.createIdentifier(token.value, this.trackPositionUnary(token));
                args.push(arg);

                this.lex.matchPunctuation(",");
                token = this.lex.lookAheadNextToken();
            }

            if (!this.expectPunctuation(")")) return;

            const body = this.parseFunctionBody();
            if (!body) return;

            if (asDeclaration) {
                return this.nodeFactory.createDeclarationFunction(identifier, args, body, this.trackPositionByToken(initialToken));
            } else {
                return this.nodeFactory.createExpressionFunction(identifier, args, body, this.trackPositionByToken(initialToken));
            }
        }

        public parseFunctionBody(): IBlockStatement {
            this.newSwitchScope();
            this.newIterationScope();
            this.beginFunction();

            const stmt = this.parseBlockStatement();

            this.finishFunction();
            this.restoreSwitchScope();
            this.restoreIterationScope();

            return stmt;
        }

        /////////////Parse Function////////////////
    }
}