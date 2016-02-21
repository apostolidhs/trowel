/// <reference path="../../tsDefinitions/tsd.d.ts" />
/// <reference path="utilities/Exception.ts" />
/// <reference path="lexical/Lexer.ts" />
/// <reference path="lexical/CharacterStream.ts" />
/// <reference path="syntax/Parser.ts" />

module trl.frontend.api {

	interface ITokenizeResult {
		tokens: lexical.IToken[],
		exceptions?: utilities.IException[]
	}
    
	interface IParserResult {
		program: any,
		exceptions?: utilities.IException[]
	}    

	export function tokenize(src: string, options?: lexical.ILexerOptions): ITokenizeResult {
		const charStream = new lexical.CharacterStream(src),
			exceptionHandler = new utilities.ExceptionHandler(),
			lexer = new lexical.Lexer(charStream, exceptionHandler, options);

		const tokens: lexical.IToken[] = [];
		while (lexer.hasNext()) {
			const token = lexer.nextToken();
            tokens.push(token);
		};

		const tokenizeResult: ITokenizeResult = {
			tokens: tokens
		};

		if (exceptionHandler.hasExceptions()) {
			tokenizeResult.exceptions = exceptionHandler.getExceptions();
		}
		return tokenizeResult;
	}
    
    export function parse(src: string, options?: syntax.IParserOptions): IParserResult {
        const parser = new syntax.Parser(src, options);
        const parseNodes = parser.parse();
        
		const parseResult: IParserResult = {
			program: parseNodes
		};
                
        const exceptionHandler = parser.getExceptions();
        
		if (exceptionHandler.hasExceptions()) {
			parseResult.exceptions = exceptionHandler.getExceptions();
		}        
        return parseResult;
    }

} 