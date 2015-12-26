/// <reference path="../../../tsDefinitions/tsd.d.ts" />
/// <reference path="../utilities/CharPoints.ts" />
/// <reference path="ILexer.d.ts" />
/// <reference path="IException.d.ts" />
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

	const TokenValues = {
		keyword: "keyword",
		identifier: "identifier",
		literal: "literal",
		punctuation: "punctuation",
		comment: "comment"
	};

	const PNC = TokenDefinitions.PNC_SINGLE;

	export class Lexer implements ILexer {
		private static CharecterLookup;

		private token: IToken;
		private lineno: number;
		private startLineno: number;
		private currLineCursor: number;
		private relativeStartCursor: number;
		private absoluteStartCursor: number;


		private static initiateCharecterLookupOnce() {
			if (Lexer.CharecterLookup) {
				return;
			}
			let lookup = Lexer.CharecterLookup = {};
			
			//white space
			_.each(<any>TokenDefinitions.WS, (val, key: number) => lookup[key] = Lexer.prototype.stateWhiteSpace);
			
			//new line
			_.each(<any>TokenDefinitions.LT, (val, key: number) => lookup[key] = Lexer.prototype.stateLineTerminator);
			
			//string
			lookup[PNC.qmark] = Lexer.genStateString(PNC.qmark);
			lookup[PNC.apostrophe] = Lexer.genStateString(PNC.apostrophe);
			
			//number
			_.each("0123456789", (numChar) => {
				lookup[utilities.CharPoints.codePointAt(numChar, 0)] = Lexer.prototype.stateNumber;
			});

			lookup[PNC.lbrace] = Lexer.prototype.statePunctuationSingle;
			lookup[PNC.rbrace] = Lexer.prototype.statePunctuationSingle;
			lookup[PNC.lparenth] = Lexer.prototype.statePunctuationSingle;
			lookup[PNC.rparenth] = Lexer.prototype.statePunctuationSingle;
			lookup[PNC.lbracket] = Lexer.prototype.statePunctuationSingle;
			lookup[PNC.rbracket] = Lexer.prototype.statePunctuationSingle;
			
			// . .1
			lookup[PNC.dot] = () => States.dotOrNumber;

			lookup[PNC.semicolon] = Lexer.prototype.statePunctuationSingle;
			lookup[PNC.comma] = Lexer.prototype.statePunctuationSingle;
			
			// < << <= <<< <<=
			lookup[PNC.less] = Lexer.genPunctuationScanner(
				[[PNC.less], [PNC.assign], [PNC.less, PNC.less], [PNC.less, PNC.assign]]
			);
			// > >= >> >>= >>> >>>=
			lookup[PNC.more] = Lexer.genPunctuationScanner(
				[[PNC.more], [PNC.assign], [PNC.more, PNC.more], [PNC.more, PNC.assign], [PNC.more, PNC.more, PNC.assign]]
			);
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
			lookup[PNC.vertical] = Lexer.genPunctuationScanner(
				[[PNC.assign]]
			);

			lookup[PNC.tilde] = Lexer.prototype.statePunctuationSingle;
			lookup[PNC.quest] = Lexer.prototype.statePunctuationSingle;
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

		constructor(private charStream: ICharacterStream, private exceptionHandler: IExceptionHandler) {
			this.lineno = 0;
			this.currLineCursor = 0;

			Lexer.initiateCharecterLookupOnce();
		}

		getNextToken(): IToken {
			let nextState = this.stateInit();
			while (nextState) {
				nextState = this[nextState].call(this);
			}
			return this.token;
		}

		///////////////////////////
		// final states
		
		private stateFinish() { }

		private stateError() { }
		/////// final states //////
		
		///////////////////////////////////////////
		// States
		
		private stateInit() {
			//cleanup current token
			this.token = undefined;
			
			//track cursor position
			this.startLineno = this.lineno;
			this.relativeStartCursor = this.charStream.getCursor() - this.currLineCursor;
			this.absoluteStartCursor = this.charStream.getCursor();

			let nextState,
				char = this.charStream.getNextChar();

			if (Identifyers.isIdentifierStart(char)) {
				this.charStream.bwdCursor();
				nextState = States.identifier;
			} else {
				let charCachedHandler: () => string = Lexer.CharecterLookup[char];
				if (charCachedHandler) {
					this.charStream.bwdCursor();
					nextState = charCachedHandler.call(this);
				}
				else if (char !== undefined) {
					this.exceptionHandler.addException(
						"unexpected token \"" + utilities.CharPoints.fromCodePoint(char) + "\"",
						this.lineno,
						this.charStream.getCursor()
					);
					nextState = States.error;
				}
			}

			return nextState;
		}

		private stateIdentifier(): string {
			let charGen: utilities.IStringFromCharPoint = utilities.CharPoints.createStringFromCharPointGenerator(),
				char = this.charStream.getNextChar();

			if (!this.scanUnicodeEscapeSequence(charGen, char)) {
				this.exceptionHandler.addException("", this.lineno, this.charStream.getCursor());
				return States.error;
			}
			while (true) {
				let char = this.charStream.getNextChar();
				if (Identifyers.isIdentifierPart(char)) {
					if (!this.scanUnicodeEscapeSequence(charGen, char)) {
						this.exceptionHandler.addException("", this.lineno, this.charStream.getCursor());
						return States.error;
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
				type = TokenValues.keyword;
			}
			else {
				switch (str) {
					case "null":
						type = TokenValues.literal;
						subType = "null";
						str = null;
						break;
					case "true":
						type = TokenValues.literal;
						subType = "boolean";
						str = true;
						break;
					case "false":
						type = TokenValues.literal;
						subType = "boolean";
						str = false;
						break;
					default:
						type = TokenValues.identifier;
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
					} else if (char === PNC.backslash) {
						char = this.charStream.getNextChar();
						switch (char) {
							case PNC.b: charGen.addCharPoint(8); break;
							case PNC.f: charGen.addCharPoint(12); break;
							case PNC.n: charGen.addCharPoint(10); break;
							case PNC.r: charGen.addCharPoint(13); break;
							case PNC.t: charGen.addCharPoint(9); break;
							case PNC.v: charGen.addCharPoint(11); break;

							case PNC.x:
								if (!this.handleScanHexDigits(2, charGen)) {
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
						this.exceptionHandler.addException("unclosed string", this.lineno, this.charStream.getCursor());
						return States.error;
					}
					else {
						charGen.addCharPoint(char);
					}
				}
				this.token = this.createToken(TokenValues.literal, charGen.getString(), 'string');
				return States.finish;
			};
		}

		private stateNumber(): string {
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
			} else {
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
			this.token = this.createTokenFromPos(TokenValues.punctuation);
			return States.finish;
		}

		private stateWhiteSpace(): string {
			this.charStream.fwdCursor();
			return States.init;
		}

		private stateLineTerminator(): string {
			this.charStream.fwdCursor();
			this.charStream.matchComplex(char => char === PNC.lf || char === undefined);
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
			this.token = this.createTokenFromPos(TokenValues.comment);
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
					this.exceptionHandler.addException("unclosed comment", this.lineno, this.charStream.getCursor());
					return States.error;
				}
				else if (Identifyers.isLineTerminator(char)) {
					this.handleNewLine();
				}
			}
			this.token = this.createTokenFromPos(TokenValues.comment);
			return States.finish;
		}

		private scanUnicodeEscapeSequence(charGen: utilities.IStringFromCharPoint, char: number): boolean {
			if (char === PNC.backslash) {
				char = this.charStream.getNextChar();
				if (char === PNC.u) {
					let hexDigit = this.scanHexDigits(4);
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
		///////////////////States//////////////////
		
		///////////////////////////////////////////
		// Scanners
		private scanExponensialAndCreateNumber(int: number[], point: number): string {
			let exp = this.scanExponential();
			if (exp === undefined) {
				return States.error;
			}
			if(this.charStream.matchComplex(char => Identifyers.isIdentifierPart(char))) {
				this.exceptionHandler.addException("", this.lineno, this.charStream.getCursor());
				return States.error;
			}
			let num = this.createNumber(int, point, exp);
			this.token = this.createToken(TokenValues.literal, num, "number");
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
			let currCursorpos;
			if (char === undefined) {
				currCursorpos = this.charStream.getCursor();
			}
			else {
				this.charStream.bwdCursor();
				currCursorpos = this.charStream.getCursor();
			}
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
					this.exceptionHandler.addException("exponential should postfixed by numbers", this.lineno, this.charStream.getCursor());
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
		
		private scanHexDigits(times: number): number {
			if (this.scanHexDigitsTimes(times)) {
				let char = this.charStream.getCursor(),
					hexStr = this.charStream.tokenize(char - times);
				return parseInt(hexStr, 16);
			}
		}

		private scanHexDigitsTimes(times: number): boolean {
			let startingPos = times;
			do {
				let char = this.charStream.getNextChar();
				if (!Identifyers.isHexDigit(char)) {
					this.charStream.bwdCursorRange(startingPos - (times - 1));
					return false;
				}
			} while (--times);
			return true;
		}

		private static genPunctuationScanner(candicatePuncs: number[][]) {
			const lastLen = _.last(candicatePuncs).length;
			let puncsLookup = _.map(new Array(lastLen), () => new Object());
			for (let curr = lastLen - 1; curr !== -1; --curr) {
				for (let i = candicatePuncs.length - 1; i !== -1; --i) {
					let c = candicatePuncs[i][curr];
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
				this.token = this.createTokenFromPos(TokenValues.punctuation, this.startPos);
				return States.finish;
			}
		}
		///////////////Scanners////////////////

		///////////////////////////////////////////
		// Lex object creators
		private createPos(): ITokenSourceLocation {
			return {
				start: {
					line: this.startLineno,
					column: this.relativeStartCursor
				},
				end: {
					line: this.lineno,
					column: this.charStream.getCursor() - this.currLineCursor
				}
			}
		}

		private createTokenFromPos(type: string, subType?: string): IToken {
			return {
				type: type,
				value: this.charStream.tokenize(this.absoluteStartCursor),
				subType: subType,
				loc: this.createPos()
			};
		}

		private createToken(type: string, value: any, subType?: string): IToken {
			return {
				type: type,
				value: value,
				subType: subType,
				loc: this.createPos()
			};
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
			let hexDigit = this.scanHexDigits(num);
			if (hexDigit === undefined) {
				this.exceptionHandler.addException("", this.lineno, this.charStream.getCursor());
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
		///////////////Handlers////////////////
	}
}

