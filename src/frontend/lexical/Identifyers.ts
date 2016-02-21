/// <reference path="../../../tsDefinitions/tsd.d.ts" />
/// <reference path="../utilities/CharPoints.ts" />
/// <reference path="TokenDefinitions.ts" />

module trl.frontend.lexical {
	
	let hexDigits = {};
	_.each("0123456789ABCDEFabcdef", (numChar) => {
		
		hexDigits[utilities.CharPoints.codePointAt(numChar, 0)] = true;
	});
	
	let digits = {};
	_.each("0123456789", (numChar) => {
		digits[utilities.CharPoints.codePointAt(numChar, 0)] = true;
	});
	
	export class Identifyers {
	
		static isHexDigit(c: number): boolean {
			return hexDigits[c];
		}
		
		static isDigit(c: number): boolean {
			return digits[c];
		}

		static isKeyword(str: string): boolean {
            // When str contains a value like 'toString', 
            // KW has conflict and returns the function toString
			return _.has(TokenDefinitions.KW, str);
		}
		
		static isLineTerminator(c: number): boolean {
			return TokenDefinitions.LT[c];
		}

		static isIdentifierStart(c: number): boolean {
			return Identifyers.isSimpleUnicodeStart(c)
				|| Identifyers.isComplexUnicodeStart(c);
		}
		
		static isIdentifierPart(c: number): boolean {
			return Identifyers.isSimpleUnicodeContinue(c)
				|| Identifyers.isComplexUnicodeContinue(c);
		}

		static isSimpleUnicodeContinue(c: number): boolean {
			return TokenDefinitions.UNICODE_CONTINUE_COMMON[c];
		}	
			
		static isComplexUnicodeContinue(c: number): boolean {
			return c > TokenDefinitions.UNICODE_UNCOMMON_THRESHOLD 
				&& TokenDefinitions.UNICODE_CONTINUE_UNCOMMON.test(utilities.CharPoints.fromCodePoint(c));
		}	
		
		static isSimpleUnicodeStart(c: number): boolean {
			return TokenDefinitions.UNICODE_START_COMMON[c];
		}	
			
		static isComplexUnicodeStart(c: number): boolean {
			return c > TokenDefinitions.UNICODE_UNCOMMON_THRESHOLD 
				&& TokenDefinitions.UNICODE_START_UNCOMMON.test(utilities.CharPoints.fromCodePoint(c));
		}	
		
		static isPunctuationStart(c: number): boolean {
			return TokenDefinitions.PNC_SINGLE[c];
		}
		
	}
}