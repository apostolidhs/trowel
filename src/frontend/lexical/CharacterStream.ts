/// <reference path="../../../tsDefinitions/tsd.d.ts" />
/// <reference path="../utilities/CharPoints.ts" />
/// <reference path="ICharacterStream.d.ts" />

module trl.frontend.lexical {
	
	export class CharacterStream implements ICharacterStream {
		private cursor;

		public constructor(private src: string) {
			this.cursor = 0;
		}

		public getNextChar(): number {
			if(this.hasNext()) {
				return utilities.CharPoints.codePointAt(this.src, this.cursor++);
			}				
		}
		
		public getChar(): number {
			return utilities.CharPoints.codePointAt(this.src, this.cursor);
		}

		public getCursor(): number {
			return this.cursor;
		}
		
		public bwdCursor() {
			--this.cursor;
		}
		
		public fwdCursor() {
			if(this.hasNext()) {
				++this.cursor;
			}
		}
		
		public bwdCursorRange(range: number) {
			this.cursor = Math.max(this.cursor - range, 0);
		}
		
		public tokenize(startPos: number): string {
			return this.src.substring(startPos, this.cursor);
		}
		
		public match(charMatch: number): boolean {
			let char = this.getNextChar();
			if(char === charMatch) {
				return true;
			}
			else {
				if(char !== undefined) {
					this.bwdCursor();
				}
				return false;
			}
		}
		
		public matchComplex(comparator: (char: number) => boolean): boolean {
			let char = this.getNextChar();
			if(comparator(char)) {
				return true;
			}
			else {
				if(char !== undefined) {
					this.bwdCursor();
				}
				return false;
			}
		}
		
		public isEof(): boolean {
			return this.cursor >= this.src.length;
		}
		
		private hasNext(): boolean {
			return this.cursor < this.src.length;
		}
	}
}