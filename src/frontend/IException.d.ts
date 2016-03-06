/// <reference path="lexical/ILexer.ts" />

declare module trl.frontend {
		
	export interface IException {
		pos: lexical.ITokenPosition,
		msg: string
	}
    
	export interface IExceptionHandler {
		addException(msg: string, line: number, col: number): void;
		hasExceptions(): boolean;
		clear(): void;
		getExceptions(): IException[];
	}
}
