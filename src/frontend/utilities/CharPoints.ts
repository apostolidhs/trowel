/// <reference path="../../../tsDefinitions/tsd.d.ts" />

module trl.frontend.utilities {
	
	export interface IStringFromCharPoint {
		addCharPoint(char: number);
		getString(): string;
	}
	
	export class CharPoints {
		static createStringFromCharPointGenerator(): IStringFromCharPoint {
			let charBuffer: string[] = [];
			return {
				addCharPoint: (char: number) => {
					charBuffer.push(CharPoints.fromCodePoint(char));
				},
				getString: (): string => {
					return charBuffer.join('');
				}
			};
		}
		
		private static ZERO_CHAR_CODE = "0".charCodeAt(0);
		static getDigitFromCharPoint(c: number): number {
			return c - CharPoints.ZERO_CHAR_CODE;
		}
		
		static codePointAt(str: string, pos: number): number {
			return (<any>str).codePointAt(pos);
		}
		
		static fromCodePoint(point: number): string {
			return (<any>String).fromCodePoint(point);
		}
	}
	
}