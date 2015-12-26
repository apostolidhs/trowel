/// <reference path="IException.d.ts" />

module trl.frontend.lexical {
	export class ExceptionHandler implements IExceptionHandler {
		private exceptions: IException[] = [];
		
		constructor(){}
		
		addException(msg: string, line: number, col: number) {
			let exception: IException = {
				pos: {
					col: col,
					line: line
				},		
				msg: msg
			};
			this.exceptions.push(exception);
		}
		
		hasExceptions(): boolean {
			return !_.isEmpty(this.exceptions);
		}
		
		clear(): void {
			this.exceptions.length = 0;
		}
		
		getExceptions(): IException[] {
			return this.exceptions;
		}
	}
}