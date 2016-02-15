/// <reference path="../../../tsDefinitions/tsd.d.ts" />
/// <reference path="../lexical/Lexer.ts" />
/// <reference path="../utilities/Exception.ts" />
/// <reference path="../lexical/CharacterStream.ts" />
/// <reference path="../lexical/TokenDefinitions.ts" />
/// <reference path="NodeFactory.ts" />
/// <reference path="IParser.d.ts" />

module trl.frontend.syntax {

    export class Parser implements IParser {

        private nodeFactory: NodeFactory;
        public parseException: utilities.IExceptionHandler;

        private charStream: lexical.ICharacterStream;
        private lexException: utilities.IExceptionHandler;
        private lex: lexical.ILexer;

        private static defaultParserOptions: IParserOptions = {
            loc: false
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
            const lexOptions = {
                loc: true,
                readableTokensMode: false,
                includeCommentsAsNormalTokens: false
            };
            this.lex = new lexical.Lexer(this.charStream, this.lexException, lexOptions);
        }

        private addException(token: lexical.IToken) {
            const value = this.lex.isEof(token) ? "end of file" : token.value;
            this.parseException.addException(
                `Undexpected token: '${value}'`,
                token.loc.start.line,
                token.loc.start.column
            );
        }

        private trimOptionalSemicolon(): boolean {
            const token = this.lex.lookAheadNextToken();
            if (this.lex.isPunctuationValue(token, ";")) {
                this.lex.nextToken();
            } else if (this.tokenIsInSameLine(token) && !this.lex.isEof(token)) {
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
            return this.createLoc(startPos, latestToken.loc.end);
        }

        private trackPositionByToken(startToken: lexical.IToken): lexical.ITokenSourceLocation {
            const latestToken = this.lex.latestToken();
            return this.createLoc(startToken.loc.start, latestToken.loc.end);
        }

        private createLoc(start: lexical.ITokenPosition, end: lexical.ITokenPosition): lexical.ITokenSourceLocation {
            return { start, end };
        }

        private expectPunctuation(value: string): boolean {
            const token = this.lex.nextToken();
            if (this.lex.isPunctuationValue(token, value)) {
                return true;
            }
            this.addException(token);
            return false;
        }

        private expectKeyword(value: string): boolean {
            const token = this.lex.nextToken();
            if (this.lex.isKeywordValue(token, value)) {
                return true;
            }
            this.addException(token);
            return false;
        }

        private tokenIsInSameLine(token: lexical.IToken): boolean {
            return token.loc.end.line === this.lex.latestToken().loc.end.line;
        }

        public parse(): IProgram {
            const initialToken = this.lex.lookAheadNextToken();
            const stmts = this.parseSourceElements();
            if (!stmts) return;

            return this.nodeFactory.createProgram(stmts, this.trackPositionByToken(initialToken));
        }

        public parseSourceElements(): IStatement[] {
            const stmts: IStatement[] = [];

            while (this.lex.hasNext()) {
                const stmt = this.parseStatement();
                if (!stmt) return;

                stmts.push(stmt);
            }

            return stmts;
        }

        public parseSourceElement(): IStatement {
            const token = this.lex.lookAheadNextToken();
            if (this.lex.isKeywordValue(token, "function")) {
                return this.parseFunctionDeclaration();
            }
            return this.parseStatement();
        }

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
                }
            }
            if (this.lex.isPunctuation(token)) {
                switch (token.value) {
                    case "{":
                        return this.parseBlockStatement();
                    case ";":
                        return this.parseEmptyStatement();
                }
            }
            return this.parseExpressionStatement();
        }

        public parseBlockStatement(): IStatement {
            const initialToken = this.lex.lookAheadNextToken();
            if (!this.expectPunctuation("{")) return;


            const stmts: IStatement[] = [];
            let token = this.lex.lookAheadNextToken();
            while (!this.lex.isPunctuationValue(token, "}")) {
                const stmt = this.parseStatement();
                if (!stmt) return;

                stmts.push(stmt);
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

        public parseWhileStatement(): IStatement {
            const initialToken = this.lex.lookAheadNextToken();
            const testExpr = this.parseKeywordLparExpressionRpar("while");
            if (!testExpr) return;


            const stmt = this.parseStatement();
            if (stmt) {
                return this.nodeFactory.createStatementWhile(testExpr, stmt, this.trackPositionByToken(initialToken));
            }
        }

        public parseDoWhileStatement(): IStatement {
            const initialToken = this.lex.lookAheadNextToken();
            if (!this.expectKeyword("do")) return;


            const stmt = this.parseStatement();
            if (!stmt) return;

            const testExpr = this.parseKeywordLparExpressionRpar("while");
            if (!testExpr) return;


            this.lex.matchPunctuation(";");

            return this.nodeFactory.createStatementDoWhile(stmt, testExpr, this.trackPositionByToken(initialToken));
        }

        public parseForStatement(): IStatement {
            const initialToken = this.lex.lookAheadNextToken();
            if (!(this.expectKeyword("for") && this.expectPunctuation("("))) return;


            let initDecl: IVariableDeclaration = null,
                declarations: IVariableDeclarator[],
                initExpr: IExpression = null,
                token = this.lex.lookAheadNextToken();
            if (!this.lex.isPunctuationValue(token, ";")) {
                if (this.lex.isKeywordValue(token, "var")) {
                    this.lex.nextToken();
                    declarations = this.parseVariableDeclarators();
                    if (!declarations) return;
                    initDecl = this.nodeFactory.createDeclarationVariable(declarations, this.trackPositionByToken(token));
                } else {
                    initExpr = this.parseExpression();
                    if (!initExpr) return;
                }                
            }

            let isForIn = false,
                test = null;
            token = this.lex.lookAheadNextToken();
            if (this.lex.isKeywordValue(token, "in")) {
                this.lex.nextToken();
                isForIn = true;
                if ((!initExpr && !declarations) ||
                    ((initExpr && !Parser.isLeftHandExpressionResolvingToReference(initExpr))
                        || (declarations && declarations.length !== 1))
                ) {
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

        public parseExpressionStatement(): IStatement {
            const initialToken = this.lex.lookAheadNextToken();
            const expr = this.parseExpression();
            if (!expr) return;


            if (!this.trimOptionalSemicolon()) return;


            return this.nodeFactory.createStatementExpression(expr, this.trackPositionByToken(initialToken));
        }

        public parseFunctionDeclaration(): IFunctionDeclaration {
            throw new Error("not implemented yet");
        }


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
            'in ': Parser.BinaryTokenValues_rel,
            '<<': Parser.BinaryTokenValues_shift,
            '>>': Parser.BinaryTokenValues_shift,
            '>>>': Parser.BinaryTokenValues_shift,
            '+': Parser.BinaryTokenValues_add,
            '-': Parser.BinaryTokenValues_add,
            '*': Parser.BinaryTokenValues_multi,
            '/': Parser.BinaryTokenValues_multi,
            '%': Parser.BinaryTokenValues_multi
        }

        private createBinaryExpression(
            rank: number,
            operator: string,
            left: IExpression,
            right: IExpression
        ) {
            const loc = this.options.loc ? this.createLoc(left.loc.start, right.loc.end) : undefined;
            if (Parser.isLogicBinaryTokenValue(rank)) {
                return this.nodeFactory.createExpressionLogical(operator, left, right, loc);
            } else {
                return this.nodeFactory.createExpressionBinary(operator, left, right, loc);
            }
        }

        public parseBinaryExpression(): IExpression {
            let lexpr = this.parseUnaryExpression();
            if (!lexpr) return;


            let token = this.lex.lookAheadNextToken();
            let binaryRank = Parser.BinaryTokenValues[token.value];

            if (binaryRank && (this.lex.isPunctuation(token) || this.lex.isKeyword(token))) {
                this.lex.nextToken();
                const rexpr = this.parseUnaryExpression();
                if (!rexpr) return;


                const exprs: IExpression[] = [lexpr, rexpr],
                    puncs: string[] = [token.value],
                    ranks: number[] = [binaryRank];

                while (true) {
                    token = this.lex.lookAheadNextToken();
                    const latestRank = Parser.BinaryTokenValues[token.value];

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
                let expr = this.parsePostfixExpression();
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
            if (this.lex.isPunctuation(token) && token.loc.end.line === this.lex.latestToken().loc.end.line) {
                if (token.value === "++" || token.value === "--") {
                    this.lex.nextToken();
                    return this.nodeFactory.createExpressionUpdate(token.value, expr, false, this.trackPositionByToken(initialToken));
                }
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
            let initialToken = this.lex.lookAheadNextToken();
            let primaryExpr;
            if (this.lex.isKeyword(initialToken)) {
                switch (initialToken.value) {
                    case "function":
                        return this.parseFunctionExpression();
                    case "new":
                        primaryExpr = this.parseNewExpression();
                }
            }
            primaryExpr = primaryExpr || this.parsePrimaryExpression();
            if (!primaryExpr) return;

            let expr: INode, isMatchingExression = true;
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
            const token = this.lex.lookAheadNextToken();

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
                    this.lex.nextToken()
                    break;
                }

                const property = this.parsePropertyAssignment();
                if (!property) return;

                properties.push(property);

                token = this.lex.nextToken();
                if (this.lex.isPunctuationValue(token, "}")) {
                    break;
                } else {
                    if (!this.lex.isPunctuationValue(token, ",")) {
                        this.addException(token);
                        return;
                    }
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

            } else if (this.lex.isPunctuationValue(token, "(")) {
                let args: string[] = [];
                token = this.lex.nextToken();

                if (this.lex.isIdentifier(token)) {
                    args.push(token.value);
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

            } else {
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

            } else if (this.lex.isIdentifier(token)) {
                return this.nodeFactory.createIdentifier(token.value, this.trackPositionUnary(token));

            } else {
                this.addException(token);
            }
        }

        public parseFunctionExpression(): IFunctionExpression {
            throw new Error("not implemented yet");
        }

        public parseFunctionBody(): IBlockStatement {
            throw new Error("not implemented yet");
        }
    }
}