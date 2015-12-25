/// <reference path="../../tsDefinitions/tsd.d.ts" />
/// <reference path="../../src/frontend/lexical/Lexer.ts" />
/// <reference path="../../src/frontend/Api.ts" />
/// <reference path="../utilities/testUtilities.ts" />


describe('js source text read as tokens', function() {

	interface testExpectation {
		file: string,
		content: string,
		expect: any
	}

	function tokenizeLexer(testingExpect: testExpectation) {
		let cs = <any>new trl.frontend.lexical.CharacterStream(testingExpect.content);
		let eh = new trl.frontend.lexical.ExceptionHandler();
		let lex = new trl.frontend.lexical.Lexer(cs, eh);
		let tokenNum = 0;
		while(true) {
			const token = lex.getNextToken();
			if(token === undefined) {
				break;
			}
			const expectToken = testingExpect.expect[tokenNum++];
			expectToken.subType = expectToken.subType || undefined;
			trl.test.Utilities.expectToEqual(
				_.isEqual(token, expectToken), 
				true, 
				[
					"file: ", 
					testingExpect.file, 
					", index: ", 
					tokenNum, 
					", lexToken: ", 
					JSON.stringify(token, undefined, "\t"), 
					", expToken: ", 
					JSON.stringify(expectToken, undefined, "\t")
				].join("")
			);
		}
		trl.test.Utilities.expectToEqual(eh.hasExceptions(), false, "lexer should tokenize without exceptions");
	}

	it('every token in the lexer read properly', function() {
		let lexicalFiles = trl.test.Utilities.getSampleFiles((<any>window).__html__, ["/lexical/literal"]);
		let testingSamples = _.chain(lexicalFiles)
			.keys()
			.filter(filename => filename.indexOf(".expect.js") === -1)
			.value();

		let testingExpects = _.map(testingSamples, testingSample => {
			let expectFilename = testingSample.substring(0, testingSample.length - 3) + ".expect.js";
			return {
				file: testingSample,
				content: lexicalFiles[testingSample],
				expect: JSON.parse(lexicalFiles[expectFilename])
			};
		});

		_.each(testingExpects, testingExpect => tokenizeLexer(testingExpect));
	});
	
	it('every escaped token in the lexer read properly', function() {
		let testingSrc = [
			"\"one\\ntwo\"",
			"\\u0076\\u0061fake",
			"fake\\u0061",
			"\\u0076\\u0061fake;fake\\u0061",
			"t = { b: /*bigger",
			"comment",
			"*/4}",
			"multilinestring = \"asd\" +",
			"\t\"asd\\",
			"\tefg\""
		].join("\n");
		let testingExpects = [
			{
				"type": "literal",
				"value": "one\ntwo",
				"subType": "string",
				"loc": {
					"start": {
						"line": 0,
						"column": 0
					},
					"end": {
						"line": 0,
						"column": 10
					}
				}
			},
			{
				"type": "identifier",
				"value": "vafake",
				"loc": {
					"start": {
						"line": 1,
						"column": 0
					},
					"end": {
						"line": 1,
						"column": 16
					}
				}
			},
			{
				"type": "identifier",
				"value": "fakea",
				"loc": {
					"start": {
						"line": 2,
						"column": 0
					},
					"end": {
						"line": 2,
						"column": 10
					}
				}
			},
			{
				"type": "identifier",
				"value": "vafake",
				"loc": {
					"start": {
						"line": 3,
						"column": 0
					},
					"end": {
						"line": 3,
						"column": 16
					}
				}
			},
			{
				"type": "punctuation",
				"value": ";",
				"loc": {
					"start": {
						"line": 3,
						"column": 16
					},
					"end": {
						"line": 3,
						"column": 17
					}
				}
			},
			{
				"type": "identifier",
				"value": "fakea",
				"loc": {
					"start": {
						"line": 3,
						"column": 17
					},
					"end": {
						"line": 3,
						"column": 27
					}
				}
			},
			{
				"type": "identifier",
				"value": "t",
				"loc": {
					"start": {
						"line": 4,
						"column": 0
					},
					"end": {
						"line": 4,
						"column": 1
					}
				}
			},
			{
				"type": "punctuation",
				"value": "=",
				"loc": {
					"start": {
						"line": 4,
						"column": 2
					},
					"end": {
						"line": 4,
						"column": 3
					}
				}
			},
			{
				"type": "punctuation",
				"value": "{",
				"loc": {
					"start": {
						"line": 4,
						"column": 4
					},
					"end": {
						"line": 4,
						"column": 5
					}
				}
			},
			{
				"type": "identifier",
				"value": "b",
				"loc": {
					"start": {
						"line": 4,
						"column": 6
					},
					"end": {
						"line": 4,
						"column": 7
					}
				}
			},
			{
				"type": "punctuation",
				"value": ":",
				"loc": {
					"start": {
						"line": 4,
						"column": 7
					},
					"end": {
						"line": 4,
						"column": 8
					}
				}
			},
			{
				"type": "comment",
				"value": "/*bigger\ncomment\n*/",
				"loc": {
					"start": {
						"line": 4,
						"column": 9
					},
					"end": {
						"line": 6,
						"column": 2
					}
				}
			},
			{
				"type": "literal",
				"value": 4,
				"subType": "number",
				"loc": {
					"start": {
						"line": 6,
						"column": 2
					},
					"end": {
						"line": 6,
						"column": 3
					}
				}
			},
			{
				"type": "punctuation",
				"value": "}",
				"loc": {
					"start": {
						"line": 6,
						"column": 3
					},
					"end": {
						"line": 6,
						"column": 4
					}
				}
			},
			{
				"type": "identifier",
				"value": "multilinestring",
				"loc": {
					"start": {
						"line": 7,
						"column": 0
					},
					"end": {
						"line": 7,
						"column": 15
					}
				}
			},
			{
				"type": "punctuation",
				"value": "=",
				"loc": {
					"start": {
						"line": 7,
						"column": 16
					},
					"end": {
						"line": 7,
						"column": 17
					}
				}
			},
			{
				"type": "literal",
				"value": "asd",
				"subType": "string",
				"loc": {
					"start": {
						"line": 7,
						"column": 18
					},
					"end": {
						"line": 7,
						"column": 23
					}
				}
			},
			{
				"type": "punctuation",
				"value": "+",
				"loc": {
					"start": {
						"line": 7,
						"column": 24
					},
					"end": {
						"line": 7,
						"column": 25
					}
				}
			},
			{
				"type": "literal",
				"value": "asd\n\tefg",
				"subType": "string",
				"loc": {
					"start": {
						"line": 8,
						"column": 1
					},
					"end": {
						"line": 9,
						"column": 5
					}
				}
			}
		];

		tokenizeLexer({
			file: "escaped tokens",
			content: testingSrc,
			expect: testingExpects
		});
	});
	
	it('wrong tokens generates parse exceptions', function() {
		[
			"2e", "2.1e", "2.3e-", "2.3e-1a", "2.3e1a",
			".1e", ".3e-", ".3e-1a", ".3e1a",
			"233asd", "2asd",
			"'\\u1'", "asd\\u01asd"
		].forEach(src => {
			let token = trl.frontend.api.tokenize(src);
			trl.test.Utilities.expectToEqual(token.exceptions && token.exceptions.length > 0, true, src);
		});
	});
});