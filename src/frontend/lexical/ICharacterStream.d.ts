declare module trl.frontend.lexical {
	export interface ICharacterStream {

        // returns the current character
        getChar(): number;

        // returns the next character
        getNextChar(): number;

        // returns the current position 
        // of the cursor in the stream
        getCursor(): number;

        // backward the cursor's position in the stream
        bwdCursor();

        // forward the cursor's position in the stream
        fwdCursor();

        // backward the cursor's position in the 
        // stream for 'range' length of characters
        bwdCursorRange(range: number);

        // returns the corresponding string from 'startPos'
        // until the current position of the cursor
        tokenize(startPos: number): string;

        // forward the cursor's position if the 'char' 
        // matches the next character
        match(char: number): boolean;

        // forward the cursor's position if the result of the 
        // call of the 'comparator' matches the next character
        matchComplex(comparator: (char: number) => boolean): boolean;

        // returns if the cursor has reach the end of the stream
        isEof(): boolean;
	}
}

