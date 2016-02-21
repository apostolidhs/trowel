/// <reference path="../../../tsDefinitions/tsd.d.ts" />

module trl.frontend.utilities {
    
    // let's use our imagination
    export type Ichar = number;
	
	export interface IStringFromCharPoint {
		addCharPoint(char: number);
		getString(): string;
	}
	
	export class CharPoints {
		static createStringFromCharPointGenerator(): IStringFromCharPoint {
			let charBuffer: string[] = [];
			return {
				addCharPoint: (char: Ichar) => {
					charBuffer.push(CharPoints.fromCodePoint(char));
				},
				getString: (): string => {
					return charBuffer.join('');
				}
			};
		}
		
		private static ZERO_CHAR_CODE = "0".charCodeAt(0);
		static getDigitFromCharPoint(c: Ichar): number {
			return c - CharPoints.ZERO_CHAR_CODE;
		}
		
		static codePointAt(str: string, pos: number): Ichar {
			return (<any>str).codePointAt(pos);
		}
		
		static fromCodePoint(point: Ichar): string {
			return (<any>String).fromCodePoint(point);
		}
	}
	
}