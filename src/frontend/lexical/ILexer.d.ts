declare module trl.frontend.lexical {
	
	interface ITokenPosition  {
		line: number;
		column: number;
	}
	
	export interface ITokenSourceLocation {
		source?: string;
		start: ITokenPosition;
		end: ITokenPosition;
	}
				
	export interface IToken {
		type: string,
		value: any,
		subType?: string,
		loc?: ITokenSourceLocation
	}
	
	export interface ILexer {
		getNextToken(): IToken;
	}
}

