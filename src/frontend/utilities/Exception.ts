/// <reference path="IException.d.ts" />

module trl.frontend.utilities {
	export class ExceptionHandler implements IExceptionHandler {
		private exceptions: IException[] = [];
		
		public constructor(){}
		
		public addException(msg: string, line: number, column: number) {
			let exception: IException = {
				pos: {
					column, 
                    line
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