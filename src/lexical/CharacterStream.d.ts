declare module trl.lexical {
	export interface ICharacterStream {
		getNextChar(): number;
		getCurrOffset(): number;
	}
}

