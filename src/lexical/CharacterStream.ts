/// <reference path="../../tsDefinitions/tsd.d.ts" />
/// <reference path="CharacterStream.d.ts" />

module trl.lexical {
	export class CharacterStream implements ICharacterStream {
		private cursor;

		constructor(private src: string) {
			this.cursor = 0;
		}

		getNextChar(): number {
			var charCode = this.src.charCodeAt(this.cursor);
			if (_.isNaN(charCode)) {
				return;
			} else {
				++this.cursor;
				return charCode;
			}
		}

		getCurrOffset(): number {
			return this.cursor;
		}
	}
}