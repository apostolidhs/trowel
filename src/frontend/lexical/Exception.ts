/// <reference path="IException.d.ts" />

module trl.frontend.lexical {
	export class ExceptionHandler {
		private exceptions: IException[] = [];
		
		constructor(){}
		
		public addException(msg: string, line: number, col: number) {
			let exception: IException = {
				pos: {
					col: col,
					line: line
				},		
				msg: msg
			};
			this.exceptions.push(exception);
		}
		
		public hasExceptions(): boolean {
			return !_.isEmpty(this.exceptions);
		}
		
		public clear(): void {
			this.exceptions.length = 0;
		}
		
		public getExceptions(): IException[] {
			return this.exceptions;
		}
	}
}