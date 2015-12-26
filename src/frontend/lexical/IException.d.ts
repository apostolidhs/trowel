
declare module trl.frontend.lexical {
	
	export interface IInvalidTokenPos {
		col: number,
		line: number
	}
	
	export interface IException {
		pos: IInvalidTokenPos,
		msg: string
	}
    
	export interface IExceptionHandler {
		addException(msg: string, line: number, col: number): void;
		hasExceptions(): boolean;
		clear(): void;
		getExceptions(): IException[];
	}
}
