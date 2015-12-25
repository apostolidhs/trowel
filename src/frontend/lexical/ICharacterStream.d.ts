declare module trl.frontend.lexical {
	export interface ICharacterStream {
		getChar(): number;
		getNextChar(): number;
		getCursor(): number;
		bwdCursor();
		fwdCursor();
		bwdCursorRange(range: number);
		tokenize(startPos: number): string;
		match(char: number): boolean;
		matchComplex(comparator: (char: number) => boolean): boolean;
		isEof(): boolean;
	}
}

