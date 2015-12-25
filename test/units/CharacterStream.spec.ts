/// <reference path="../../tsDefinitions/tsd.d.ts" />
/// <reference path="../../src/frontend/lexical/CharacterStream.ts" />
/// <reference path="../utilities/testUtilities.ts" />

describe('js source text read as characters stream', function() {

	it('every character in the stream read properly', function() {

		const charStreamFiles = trl.test.Utilities.getSampleFiles((<any>window).__html__, ["/charStream"]);

		_.each(charStreamFiles, (content: string, filepath: string) => {

			let cs = new trl.frontend.lexical.CharacterStream(content);
			let char, cursor = 0;
			while (char = cs.getNextChar()) {
				trl.test.Utilities.expectToEqual(char, content.charCodeAt(cursor), "each char from a stream should equal with the corresponding char from the source");
				++cursor;
				trl.test.Utilities.expectToEqual(cs.getCursor(), cursor, "each char offset from a stream should equal with the corresponding char offset from the source");
				const nextChar = cs.getNextChar();
				if(nextChar !== undefined) {
					cs.bwdCursor();
					trl.test.Utilities.expectToEqual(cs.getCursor(), cursor, "bwdCursor should decrease the coursor by one");
					cs.bwdCursor();
					trl.test.Utilities.expectToEqual(cs.isEof(), false, "current char cannot be end of file");
					trl.test.Utilities.expectToEqual(char, cs.getChar(), "bwdCursor of getNextChar is the same character");
					cs.getNextChar();
					let token = cs.tokenize(cs.getCursor()-1);
					trl.test.Utilities.expectToEqual(token, String.fromCharCode(char), "tokenized string is equal with the current char");
				}	
			}
			trl.test.Utilities.expectToEqual(char, undefined, "on stream finish next value is undefined");
		});
		console.log("finish");
	});
});