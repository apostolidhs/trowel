/// <reference path="../../tsDefinitions/tsd.d.ts" />
/// <reference path="../../src/lexical/CharacterStream.ts" />

describe('js source text read as characters stream', function() {

	it('every character in the stream read properly', function() {

		var files: _.Dictionary<string> = (<any>window).__html__;

		_.each(files, (src: string, filename: string) => {

			var cs = new trl.lexical.CharacterStream(src);
			var char, cursor = 0;
			while (char = cs.getNextChar()) {
				var offset = cs.getCurrOffset();
				expect(char).toEqual(src.charCodeAt(cursor++));
				expect(offset).toEqual(cursor);
			}
			expect(char).toEqual(undefined);
			expect(src.length).toEqual(cs.getCurrOffset());
		});
	});
});