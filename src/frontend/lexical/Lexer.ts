/// <reference path="../../../tsDefinitions/tsd.d.ts" />
/// <reference path="../utilities/IException.d.ts" />
/// <reference path="../utilities/CharPoints.ts" />
/// <reference path="ILexer.ts" />
/// <reference path="TokenDefinitions.ts" />
/// <reference path="Identifyers.ts" />

module trl.frontend.lexical {

    const States = {
        identifier: "stateIdentifier",
        punctuation: "statePunctuation",
        multiComment: "stateMultiComment",
        singleComment: "stateSingleComment",
        divOrComment: "stateDivOrComment",
        dotOrNumber: "stateDotOrNumber",
        error: "stateError",
        finish: "stateFinish",
        init: "stateInit"
    };

    const ReadableTokenType = {
        keyword: "keyword",
        identifier: "identifier",
        literal: "literal",
        punctuation: "punctuation",
        comment: "comment",
        eof: "eof",
        error: "error"
    };

    const ReadableLiteralSubType = {
        string: "string",
        number: "number",
        null: "null",
        boolean: "boolean",
        regex: "regex"
    };


    const toReadableTokenType = (function() {
        const toReadableTokenTypeLookup = {};
        toReadableTokenTypeLookup[TokenType.keyword] = ReadableTokenType.keyword;
        toReadableTokenTypeLookup[TokenType.identifier] = ReadableTokenType.identifier;
        toReadableTokenTypeLookup[TokenType.literal] = ReadableTokenType.literal;
        toReadableTokenTypeLookup[TokenType.punctuation] = ReadableTokenType.punctuation;
        toReadableTokenTypeLookup[TokenType.comment] = ReadableTokenType.comment;
        toReadableTokenTypeLookup[TokenType.eof] = ReadableTokenType.eof;
        toReadableTokenTypeLookup[TokenType.error] = ReadableTokenType.error;

        return (tokenType: TokenType): string => toReadableTokenTypeLookup[tokenType];
    })();

    const toReadableLiteralSubType = (function() {
        const toReadableLiteralSubTypeLookup = {};
        toReadableLiteralSubTypeLookup[LiteralSubType.string] = ReadableLiteralSubType.string;
        toReadableLiteralSubTypeLookup[LiteralSubType.number] = ReadableLiteralSubType.number;
        toReadableLiteralSubTypeLookup[LiteralSubType.null] = ReadableLiteralSubType.null;
        toReadableLiteralSubTypeLookup[LiteralSubType.boolean] = ReadableLiteralSubType.boolean;
        toReadableLiteralSubTypeLookup[LiteralSubType.regex] = ReadableLiteralSubType.regex;

        return (literalSubType: LiteralSubType): string => toReadableLiteralSubTypeLookup[literalSubType];
    })();

    const PNC = TokenDefinitions.PNC_SINGLE;

    export class Lexer implements ILexer {
        private static CharecterLookup;

        private token: IToken;
        private comments: IToken[];

        private lookAheadToken: IToken;
        private currentToken: IToken;

        private lineno: number;
        private startLineno: number;
        private currLineCursor: number;
        private relativeStartCursor: number;
        private absoluteStartCursor: number;

        private static initiateCharecterLookupOnce() {
            if (Lexer.CharecterLookup) {
                return;
            }
            const lookup = Lexer.CharecterLookup = {};
			
            //white space
            _.each(<any>TokenDefinitions.WS, (val, key: number) =>
                lookup[key] = Lexer.prototype.stateWhiteSpace);
			
            //new line
            _.each(<any>TokenDefinitions.LT, (val, key: number) =>
                lookup[key] = Lexer.prototype.stateLineTerminator);
			
            //string
            lookup[PNC.qmark] = Lexer.genStateString(PNC.qmark);
            lookup[PNC.apostrophe] = Lexer.genStateString(PNC.apostrophe);
			
            //number
            _.each("0123456789", numChar =>
                lookup[utilities.CharPoints.codePointAt(numChar, 0)] = Lexer.prototype.stateNumber);

            // {
            lookup[PNC.lbrace] = Lexer.prototype.statePunctuationSingle;
            
            // }
            lookup[PNC.rbrace] = Lexer.prototype.statePunctuationSingle;
            
            // (
            lookup[PNC.lparenth] = Lexer.prototype.statePunctuationSingle;
            
            // )
            lookup[PNC.rparenth] = Lexer.prototype.statePunctuationSingle;
            
            // [
            lookup[PNC.lbracket] = Lexer.prototype.statePunctuationSingle;
            
            // ]
            lookup[PNC.rbracket] = Lexer.prototype.statePunctuationSingle;
			
            // . .1
            lookup[PNC.dot] = () => States.dotOrNumber;

            // :
            lookup[PNC.semicolon] = Lexer.prototype.statePunctuationSingle;
            
            // ,
            lookup[PNC.comma] = Lexer.prototype.statePunctuationSingle;
			
            // < << <= <<< <<=
            lookup[PNC.less] = Lexer.genPunctuationScanner(
                [[PNC.less], [PNC.assign], [PNC.less, PNC.less], [PNC.less, PNC.assign]]
            );
            
            // > >= >> >>= >>> >>>=
            lookup[PNC.more] = Lexer.genPunctuationScanner([
                [PNC.more], [PNC.assign], [PNC.more, PNC.more],
                [PNC.more, PNC.assign], [PNC.more, PNC.more, PNC.assign]
            ]);
            
            // ! != !==
            lookup[PNC.excl] = Lexer.genPunctuationScanner(
                [[PNC.assign], [PNC.assign, PNC.assign]]
            );
            
            // - -- -=
            lookup[PNC.minus] = Lexer.genPunctuationScanner(
                [[PNC.minus], [PNC.assign]]
            );
            
            // + ++ +-=
            lookup[PNC.plus] = Lexer.genPunctuationScanner(
                [[PNC.plus], [PNC.assign]]
            );
            
            // % %=
            lookup[PNC.percent] = Lexer.genPunctuationScanner(
                [[PNC.assign]]
            );
            
            // & && &=
            lookup[PNC.ampersand] = Lexer.genPunctuationScanner(
                [[PNC.ampersand], [PNC.assign]]
            );
            
            // | || |=
            lookup[PNC.vertical] = Lexer.genPunctuationScanner(
                [[PNC.vertical], [PNC.assign]]
            );
            
            // ^ ^=
            lookup[PNC.caret] = Lexer.genPunctuationScanner(
                [[PNC.assign]]
            );

            // ~
            lookup[PNC.tilde] = Lexer.prototype.statePunctuationSingle;
            
            // ?
            lookup[PNC.quest] = Lexer.prototype.statePunctuationSingle;
            
            // :
            lookup[PNC.colon] = Lexer.prototype.statePunctuationSingle;
            
            // = == ===
            lookup[PNC.assign] = Lexer.genPunctuationScanner(
                [[PNC.assign], [PNC.assign, PNC.assign]]
            );
            
            // * *=
            lookup[PNC.asterisk] = Lexer.genPunctuationScanner(
                [[PNC.assign]]
            );
			
            // / /= /* // comment
            lookup[PNC.slash] = () => States.divOrComment;

            // \ whitespace
            lookup[PNC.backslash] = () => States.identifier;
        }

        private static defaultLexerOptions: ILexerOptions = {
            loc: false,
            readableTokensMode: true,
            includeCommentsAsNormalTokens: true
        };

        public constructor(
            private charStream: ICharacterStream,
            private exceptionHandler: utilities.IExceptionHandler,
            private options?: ILexerOptions
        ) {
            this.options = _.defaults(
                _.clone(options || {}),
                Lexer.defaultLexerOptions
            );
            this.lineno = 1;
            this.currLineCursor = 0;
            this.comments = [];

            Lexer.initiateCharecterLookupOnce();
        }

        public isError(token: IToken): boolean {
            return this.options.readableTokensMode ?
                token.type === ReadableTokenType.error : token.type === TokenType.error;
        }
        public isEof(token: IToken): boolean {
            return this.options.readableTokensMode ?
                token.type === ReadableTokenType.eof : token.type === TokenType.eof;
        }
        public isComment(token: IToken): boolean {
            return this.options.readableTokensMode ?
                token.type === ReadableTokenType.comment : token.type === TokenType.comment;
        }
        public isLiteral(token: IToken): boolean {
            return this.options.readableTokensMode ?
                token.type === ReadableTokenType.literal : token.type === TokenType.literal;
        }
        public isPunctuation(token: IToken): boolean {
            return this.options.readableTokensMode ?
                token.type === ReadableTokenType.punctuation : token.type === TokenType.punctuation;
        }
        public isKeyword(token: IToken): boolean {
            return this.options.readableTokensMode ?
                token.type === ReadableTokenType.keyword : token.type === TokenType.keyword;
        }
        public isIdentifier(token: IToken): boolean {
            return this.options.readableTokensMode ?
                token.type === ReadableTokenType.identifier : token.type === TokenType.identifier;
        }

        public isPunctuationValue(token: IToken, value: string): boolean {
            return this.isPunctuation(token) && token.value === value;
        }
        public isKeywordValue(token: IToken, value: string): boolean {
            return this.isKeyword(token) && token.value === value;
        }
        public isIdentifierValue(token: IToken, value: string): boolean {
            return this.isIdentifier(token) && token.value === value;
        }

        private matchType(value: string, typeMatcher: (token: IToken, value: string) => boolean): boolean {
            const token = this.lookAheadNextToken();
            if (typeMatcher.call(this, token, value)) {
                this.nextToken();
                return true;
            }
            return false;
        }

        public matchPunctuation(value: string): boolean {
            return this.matchType(value, this.isPunctuationValue);
        }

        public matchKeyword(value: string): boolean {
            return this.matchType(value, this.isKeywordValue);
        }

        public reinterpretLastTokenAsRegex(token: IToken): IToken {
            utilities.assert(this.isPunctuationValue(token, "/") || this.isPunctuationValue(token, "/="));
            this.lookAheadToken = undefined;
            this.charStream.bwdCursorRange(token.value.length);
            return this.beginFromStateRegex();
        }

        public nextToken(): IToken {
            const lookAheadToken = this.lookAheadToken;
            if (lookAheadToken) {
                this.lookAheadToken = undefined;
                return this.currentToken = lookAheadToken;
            }

            let nextToken = this.beginFromStateInit();
            if (this.isComment(nextToken)) {
                if (this.options.includeCommentsAsNormalTokens) {
                    this.comments.push(nextToken);
                }
                else {
                    do {
                        this.comments.push(nextToken);
                        nextToken = this.beginFromStateInit();
                    } while (this.isComment(nextToken));
                }
            }

            return nextToken;
        }

        private startStateEngine(nextState: string) {
            while (nextState) {
                nextState = this[nextState].call(this);
            }

            if (this.options.readableTokensMode) {
                this.translateReadableTokens();
            }
            return this.currentToken = this.token;
        }

        private translateReadableTokens() {
            this.token.type = toReadableTokenType(this.token.type as TokenType);
            if (this.token.subType) {
                this.token.subType = toReadableLiteralSubType(this.token.subType as LiteralSubType);
            }
        }

        private beginFromStateInit(): IToken {
            const nextState = this.stateInit();
            return this.startStateEngine(nextState);
        }

        private beginFromStateRegex(): IToken {
            this.cleanupContext();
            const nextState = this.stateRegex();
            return this.startStateEngine(nextState);
        }

        private cleanupContext() {
            //cleanup current token
            this.token = undefined;
			
            //track cursor position
            this.startLineno = this.lineno;
            this.relativeStartCursor = this.charStream.getCursor() - this.currLineCursor;
            this.absoluteStartCursor = this.charStream.getCursor();
        }

        public latestToken(): IToken {
            return this.currentToken;
        }

        public lookAheadNextToken(): IToken {
            const currentToken = this.currentToken;
            this.lookAheadToken = this.nextToken();

            this.currentToken = currentToken;
            return this.lookAheadToken;
        }

        public hasNext(): boolean {
            const token = this.lookAheadNextToken();
            return !this.isEof(token) && !this.isError(token);
        }

        public getComments(): IToken[] {
            return this.comments;
        }

        public getCurrentCursorPos(): ITokenPosition {
            return {
                line: this.lineno,
                column: this.charStream.getCursor() - this.currLineCursor
            };
        }

        ///////////////////////////
        // final states
		
        private stateFinish() { }

        private stateError() {
            this.token = this.createTokenFromPos(TokenType.error);
        }
        /////// final states //////
		
        ///////////////////////////////////////////
        // States
		
        private stateInit() {
            this.cleanupContext();

            if (this.charStream.isEof()) {
                this.token = this.createToken(TokenType.eof, undefined);
                return States.finish;
            }

            let nextState,
                char = this.charStream.getNextChar();

            if (Identifyers.isIdentifierStart(char)) {
                this.charStream.bwdCursor();
                nextState = States.identifier;
            }
            else {
                let charCachedHandler: () => string = Lexer.CharecterLookup[char];
                if (charCachedHandler) {
                    this.charStream.bwdCursor();
                    nextState = charCachedHandler.call(this);
                }
                else if (char !== undefined) {
                    nextState = this.unexpectedChar();
                }
            }

            return nextState;
        }

        private stateIdentifier(): string {
            let charGen: utilities.IStringFromCharPoint = utilities.CharPoints.createStringFromCharPointGenerator(),
                char = this.charStream.getNextChar();

            if (!this.scanUnicodeEscapeSequence(charGen, char)) {
                return this.unexpectedChar();
            }
            while (true) {
                let char = this.charStream.getNextChar();
                if (Identifyers.isIdentifierPart(char)) {
                    if (!this.scanUnicodeEscapeSequence(charGen, char)) {
                        return this.unexpectedChar();
                    }
                }
                else {
                    if (char !== undefined) {
                        this.charStream.bwdCursor();
                    }
                    break;
                }
            }
            let type,
                subType,
                str: any = charGen.getString();
            if (Identifyers.isKeyword(str)) {
                type = TokenType.keyword;
            }
            else {
                switch (str) {

                    case "null":
                        type = TokenType.literal;
                        subType = LiteralSubType.null;
                        str = null;
                        break;

                    case "true":
                        type = TokenType.literal;
                        subType = LiteralSubType.boolean;
                        str = true;
                        break;

                    case "false":
                        type = TokenType.literal;
                        subType = LiteralSubType.boolean;
                        str = false;
                        break;

                    default:
                        type = TokenType.identifier;
                }
            }
            this.token = this.createToken(type, str, subType);
            return States.finish;
        }

        private static genStateString(stringTerminatorChar: number): () => string {
            // esc seq ->
            // \ ' " \ b f n r t v  -> val
            // \ x HexDigit HexDigit  -> hex val
            // \ u HexDigit HexDigit HexDigit HexDigit -> u val
            // \ line cont -> ignore
            // \ decimal digit -> ignore digit
            // \ char -> ignore \
			
            // cannot be an arrow function because it binds _this -> this
            return function() {
                this.charStream.getNextChar();
                let charGen: utilities.IStringFromCharPoint = utilities.CharPoints.createStringFromCharPointGenerator();

                while (true) {
                    let char = this.charStream.getNextChar();
                    if (char === stringTerminatorChar) {
                        break;
                    }
                    else if (char === PNC.backslash) {
                        char = this.charStream.getNextChar();
                        switch (char) {
                            case PNC.b: charGen.addCharPoint(8); break;
                            case PNC.f: charGen.addCharPoint(12); break;
                            case PNC.n: charGen.addCharPoint(10); break;
                            case PNC.r: charGen.addCharPoint(13); break;
                            case PNC.t: charGen.addCharPoint(9); break;
                            case PNC.v: charGen.addCharPoint(11); break;

                            case PNC.x:
                                if (!this.handleScangits(2, charGen)) {
                                    return States.error;
                                }
                                break;

                            case PNC.u:
                                if (!this.handleScanHexDigits(4, charGen)) {
                                    return States.error;
                                }
                                break;

                            default: {
                                if (Identifyers.isLineTerminator(char)) {
                                    charGen.addCharPoint(char);
                                    this.handleNewLine();
                                }
                            }
                        }
                    }
                    else if (char === undefined) {
                        return this.unexpectedChar("unclosed string");
                    }
                    else {
                        charGen.addCharPoint(char);
                    }
                }
                this.token = this.createToken(TokenType.literal, charGen.getString(), LiteralSubType.string);
                return States.finish;
            };
        }

        private stateNumber(): string {
            if (this.charStream.match(PNC.zero)) {
                if (this.charStream.match(PNC.x)) {
                    const hexNum = this.scanHexDigits();
                    if (hexNum === undefined) {
                        return this.unexpectedChar();
                    }
                    this.token = this.createToken(TokenType.literal, hexNum, LiteralSubType.number);
                    return States.finish
                }
                this.charStream.bwdCursor();
            }

            let int = this.scanDigits(),
                point = int.length;
            if (this.charStream.match(PNC.dot)) {
                let decimal = this.scanDecimal();
                if (decimal !== undefined) {
                    int = int.concat(decimal);
                }
            }
            return this.scanExponensialAndCreateNumber(int, point);
        }

        private stateDotOrNumber() {
            this.charStream.fwdCursor();
            let decimal = this.scanDecimal();
            if (decimal !== undefined) {
                return this.scanExponensialAndCreateNumber(decimal, 0);
            }
            else {
                this.charStream.bwdCursor();
                return this.statePunctuationSingle();
            }
        }

        private stateDivOrComment() {
            this.charStream.fwdCursor();
            let char = this.charStream.getNextChar();
            switch (char) {

                case PNC.slash:
                    return States.singleComment;
                    break;

                case PNC.asterisk:
                    return States.multiComment;
                    break;

                case PNC.assign:
                    break;

                default:
                    this.charStream.bwdCursor();
            }
            this.charStream.bwdCursor();
            return this.statePunctuationSingle();
        }

        private statePunctuationSingle(): string {
            this.charStream.fwdCursor();
            this.token = this.createTokenFromPos(TokenType.punctuation);
            return States.finish;
        }

        private stateWhiteSpace(): string {
            this.charStream.fwdCursor();
            return States.init;
        }

        private stateLineTerminator(): string {
            const char = this.charStream.getNextChar();
            this.charStream.matchComplex(nextchar =>
                (char === PNC.cr && nextchar === PNC.lf)
                || nextchar === undefined
            );
            this.handleNewLine();
            return States.init;
        }

        private stateSingleComment(): string {
            do {
                var char = this.charStream.getNextChar();
                if (Identifyers.isLineTerminator(char)) {
                    this.handleNewLine();
                    break;
                }
            } while (char !== undefined);
            this.token = this.createTokenFromPos(TokenType.comment);
            return States.finish;
        }

        private stateMultiComment(): string {
            while (true) {
                let char = this.charStream.getNextChar();
                if (char === PNC.asterisk) {
                    if (this.charStream.match(PNC.slash)) {
                        break;
                    }
                }
                if (char === undefined) {
                    return this.unexpectedChar("unclosed string");
                }
                else if (Identifyers.isLineTerminator(char)) {
                    this.handleNewLine();
                }
            }
            this.token = this.createTokenFromPos(TokenType.comment);
            return States.finish;
        }

        private scanUnicodeEscapeSequence(charGen: utilities.IStringFromCharPoint, char: number): boolean {
            if (char === PNC.backslash) {
                char = this.charStream.getNextChar();
                if (char === PNC.u) {
                    let hexDigit = this.scanHexDigitsTimes(4);
                    if (hexDigit === undefined) {
                        return false;
                    }
                    else {
                        charGen.addCharPoint(hexDigit);
                    }
                }
                else {
                    return false;
                }
            }
            else {
                charGen.addCharPoint(char);
            }
            return true;
        }

        private stateRegex(): string {

            const charGen: utilities.IStringFromCharPoint = utilities.CharPoints.createStringFromCharPointGenerator();
            let char = this.charStream.getNextChar();
            charGen.addCharPoint(char);

            let regexBodyHasMoreChars = true;
            let inClass = false;
            while (regexBodyHasMoreChars) {
                char = this.charStream.getNextChar();
                if (char === undefined) {
                    return this.unexpectedChar("Invalid regular expression");
                }
                charGen.addCharPoint(char);
                switch (char) {
                    case PNC.backslash:
                        char = this.charStream.getNextChar();
                        if (char === undefined || Identifyers.isLineTerminator(char)) {
                            return this.unexpectedChar("Invalid regular expression");
                        }
                        charGen.addCharPoint(char);
                        break;

                    case PNC.lbracket:
                        inClass = true;
                        break;

                    case PNC.rbracket:
                        if (inClass) {
                            inClass = false;
                        }
                        break;

                    case PNC.slash:
                        regexBodyHasMoreChars = false;
                        break;

                    default:
                        if (char === undefined || Identifyers.isLineTerminator(char)) {
                            return this.unexpectedChar();
                        }
                }
            }

            while (true) {
                char = this.charStream.getNextChar();
                if (Identifyers.isIdentifierPart(char)) {
                    charGen.addCharPoint(char);
                }
                else {
                    if (char !== undefined) {
                        this.charStream.bwdCursor();
                    }
                    break;
                }
            }
            //this.charStream.bwdCursor();
            this.token = this.createToken(TokenType.literal, charGen.getString(), LiteralSubType.regex);
            return States.finish;
        }       
        ///////////////////States//////////////////
		
        ///////////////////////////////////////////
        // Scanners
        private scanExponensialAndCreateNumber(int: number[], point: number): string {
            let exp = this.scanExponential();
            if (exp === undefined) {
                return States.error;
            }
            if (this.charStream.matchComplex(char => Identifyers.isIdentifierPart(char))) {
                return this.unexpectedChar();
            }
            let num = this.createNumber(int, point, exp);
            this.token = this.createToken(TokenType.literal, num, LiteralSubType.number);
            return States.finish
        }

        private scanDigits(): number[] {
            let char,
                dits = [],
                cursorPos = this.charStream.getCursor();
            while (true) {
                char = this.charStream.getNextChar();
                if (Identifyers.isDigit(char)) {
                    let digit = utilities.CharPoints.getDigitFromCharPoint(char);
                    dits.push(digit);
                }
                else {
                    break;
                }
            }

            if (char !== undefined) {
                this.charStream.bwdCursor();
            }

            const currCursorpos = this.charStream.getCursor();
            if (currCursorpos - cursorPos !== 0) {
                return dits;
            }
        }

        private scanDecimal(): number[] {
            let startPos = this.charStream.getCursor(),
                digits = this.scanDigits(),
                endPos = this.charStream.getCursor(),
                digitRange = endPos - startPos;
            if (digitRange !== 0) {
                return digits;
            }
        }

        private scanExponential(): number {
            let char = this.charStream.getNextChar();
            if (char === PNC.exp || char === PNC.expb) {
                char = this.charStream.getNextChar();
                let negative;

                if (char === PNC.minus) {
                    negative = true;
                }
                else if (char !== PNC.plus) {
                    this.charStream.bwdCursor();
                }

                let digits = this.scanDigits();
                if (digits === undefined) {
                    this.unexpectedChar("exponential should postfixed by numbers");
                    return;
                }

                let num = this.createNumber(digits, digits.length, 0);
                return negative ? -num : num;
            }
            else if (char !== undefined) {
                this.charStream.bwdCursor();
            }
            return 0;
        }

        private scanHexDigitsTimes(times: number): number {
            let startingPos = times;
            do {
                let char = this.charStream.getNextChar();
                if (!Identifyers.isHexDigit(char)) {
                    this.charStream.bwdCursorRange(startingPos - (times - 1));
                    return;
                }
            } while (--times);

            const cursorPos = this.charStream.getCursor(),
                hexStr = this.charStream.tokenize(cursorPos - startingPos);
            return parseInt(hexStr, 16);
        }

        private scanHexDigits(): number {
            let char = this.charStream.getNextChar();
            let hexLen = 0;
            while (Identifyers.isHexDigit(char)) {
                ++hexLen;
                char = this.charStream.getNextChar();
            }

            if (hexLen === 0) {
                return;
            } else if (char !== undefined) {
                this.charStream.bwdCursor();
            }

            const cursorPos = this.charStream.getCursor(),
                hexStr = this.charStream.tokenize(cursorPos - hexLen);
            return parseInt(hexStr, 16);
        }

        private static genPunctuationScanner(candicatePuncs: number[][]) {
            const lastLen = _.last(candicatePuncs).length,
                puncsLookup = _.map(new Array(lastLen), () => new Object());
            for (let curr = lastLen - 1; curr !== -1; --curr) {
                for (let i = candicatePuncs.length - 1; i !== -1; --i) {
                    const c = candicatePuncs[i][curr];
                    if (c) {
                        puncsLookup[curr][c] = true;
                    }
                    else {
                        break;
                    }
                }
            }
            // cannot use arrow function because it confuse this with _this 
            // in the compliled typescript version
            return function() {
                this.charStream.fwdCursor();
                for (let i = 0; i < lastLen; ++i) {
                    let char = this.charStream.getNextChar();
                    if (!puncsLookup[i][char]) {
                        if (char !== undefined) {
                            this.charStream.bwdCursor();
                        }
                        break;
                    }
                }
                this.token = this.createTokenFromPos(TokenType.punctuation, this.startPos);
                return States.finish;
            }
        }
        ///////////////Scanners////////////////

        ///////////////////////////////////////////
        // Lex object creators
        private createTokenSourceLocationFromCursor(): ITokenSourceLocation {
            return TokenSourceLocation.create({
                line: this.startLineno,
                column: this.relativeStartCursor
            }, this.getCurrentCursorPos());
        }

        private createTokenFromPos(type: string | TokenType, subType?: string): IToken {
            const value = this.charStream.tokenize(this.absoluteStartCursor);
            return this.createToken(type, value, subType);
        }

        private createToken(type: string | TokenType, value: any, subType?: string | LiteralSubType): IToken {
            const token: IToken = { type, value, subType };
            if (this.options.loc) {
                token.loc = this.createTokenSourceLocationFromCursor();
            }
            return token;
        }
		
        //////////////Lex object creators/////////////////

        ///////////////////////////////////////////
        // Handlers
		
        private genIntegerFromArray(digits, from, to) {
            let num = 0;
            for (let i = from; i < to; ++i) {
                num = 10 * num + digits[i];
            }
            return num;
        }

        private createNumber(digits, point, exp) {
            let startPoint = point + exp,
                intPart = 0, decPart = 0;
            if (startPoint < 0) {
                let num = this.genIntegerFromArray(digits, 0, digits.length);
                return num / Math.pow(10, point - exp);
            }
            else if (startPoint > digits.length) {
                let num = this.genIntegerFromArray(digits, 0, digits.length);
                return num * Math.pow(10, startPoint - digits.length);
            }
            else {
                let num = this.genIntegerFromArray(digits, 0, startPoint),
                    dec = this.genIntegerFromArray(digits, startPoint, digits.length);
                return num + dec / Math.pow(10, digits.length - startPoint);
            }
        }

        private handleScanHexDigits(num: number, charGen: utilities.IStringFromCharPoint): boolean {
            let hexDigit = this.scanHexDigitsTimes(num);
            if (hexDigit === undefined) {
                this.unexpectedChar();
                return false;
            }
            else {
                charGen.addCharPoint(hexDigit);
            }
            return true;
        }

        private handleNewLine() {
            ++this.lineno;
            this.currLineCursor = this.charStream.getCursor();
        }

        private unexpectedChar(msg?: string): string {
            msg = msg || this.charStream.tokenize(this.charStream.getCursor() - 1);
            this.exceptionHandler.addException(msg, this.lineno, this.charStream.getCursor());
            return States.error;
        }        	
        ///////////////Handlers////////////////
    }

    export class TokenSourceLocation {

        public static create(start: lexical.ITokenPosition, end: lexical.ITokenPosition): lexical.ITokenSourceLocation {
            return { start, end };
        }

    }
}

