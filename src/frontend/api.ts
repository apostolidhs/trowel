/// <reference path="../../tsDefinitions/tsd.d.ts" />
/// <reference path="lexical/Lexer.ts" />
/// <reference path="lexical/Exception.ts" />
/// <reference path="lexical/CharacterStream.ts" />

module trl.frontend.api {

	interface ITokenizeResult {
		tokens: lexical.IToken[],
		exceptions?: lexical.IException[]
	}

	export function tokenize(src: string): ITokenizeResult {
		let cs = new lexical.CharacterStream(src),
			eh = new lexical.ExceptionHandler(),
			lex = new lexical.Lexer(cs, eh);

		let tokens: lexical.IToken[] = [];
		while (true) {
			let token = lex.getNextToken();
			if (token) {
				tokens.push(token);
			}
			else {
				break;
			}
		};

		let tokenizeResult: ITokenizeResult = {
			tokens: tokens
		};

		if (eh.hasExceptions()) {
			tokenizeResult.exceptions = eh.getExceptions();
		}
		return tokenizeResult;
	}

} 