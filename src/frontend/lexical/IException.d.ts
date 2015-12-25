
declare module trl.frontend.lexical {
	
	export interface IInvalidTokenPos {
		col: number,
		line: number
	}
	
	export interface IException {
		pos: IInvalidTokenPos,
		msg: string
	}
}
