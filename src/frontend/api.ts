/// <reference path="../../tsDefinitions/tsd.d.ts" />
/// <reference path="lexical/Lexer.ts" />
/// <reference path="utilities/Exception.ts" />
/// <reference path="lexical/CharacterStream.ts" />

module trl.frontend.api {

	interface ITokenizeResult {
		tokens: lexical.IToken[],
		exceptions?: utilities.IException[]
	}

	export function tokenize(src: string, options?: lexical.ILexerOptions): ITokenizeResult {
		const cs = new lexical.CharacterStream(src),
			eh = new utilities.ExceptionHandler(),
			lex = new lexical.Lexer(cs, eh, options);

		const tokens: lexical.IToken[] = [];
		while (lex.hasNext()) {
			const token = lex.nextToken();
            tokens.push(token);
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