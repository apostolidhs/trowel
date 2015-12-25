## Api

### Basic Data Structures

```javascript
interface IException {
    pos: {
        col: number,
        line: number
    },
    msg: string
}

interface ITokenPosition  {
    line: number;
    column: number;
}

interface ITokenSourceLocation {
    source?: string;
    start: ITokenPosition;
    end: ITokenPosition;
}
            
interface IToken {
    type: string,
    value: any,
    subType?: string,
    loc?: ITokenSourceLocation
}

interface ITokenizeResult {
    tokens: lexical.IToken[],
    exceptions?: lexical.IException[]
}

```

### Functions

#### Simple Tokenize

```javascript
trowel.frontend.api.tokenize(src: string): ITokenizeResult
```

Takes as argument an Ecmascript5 source code string and yields an Object that contains: 
1. tokens: array of tokens
2. exceptions: array of exceptions, in case of parse error 

```javascript
var tokens = trowel.frontend.api.tokenize("HelloWorld = true");
console.log(JSON.stringify(tokens, undefined, "\t"));
// result of console log:
{
	"tokens": [
		{
			"type": "identifier",
			"value": "HelloWorld",
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
			"type": "punctuation",
			"value": "=",
			"loc": {
				"start": {
					"line": 0,
					"column": 11
				},
				"end": {
					"line": 0,
					"column": 12
				}
			}
		},
		{
			"type": "literal",
			"value": true,
			"subType": "boolean",
			"loc": {
				"start": {
					"line": 0,
					"column": 13
				},
				"end": {
					"line": 0,
					"column": 17
				}
			}
		}
	]
}
```

#### Custom Tokenize

```javascript
interface Lexer {
    new(ICharacterStream, ExceptionHandler);
    getNextToken(): IToken;
}

interface CharacterStream {
    new(src: string);
    getChar(): number;
    getNextChar(): number;
    getCursor(): number;
    bwdCursor();
    fwdCursor();
    bwdCursorRange(range: number);
    tokenize(startPos: number): string;
    match(char: number): boolean;
    matchComplex(comparator: (char: number) => boolean): boolean;
    isEof(): boolean;
}

interface ExceptionHandler {
    new();
    addException(msg: string, line: number, col: number): void;
    hasExceptions(): boolean;
    clear(): void;
    getExceptions(): IException[];
}
```

```javascript
var cs = new lexical.CharacterStream("100");
var eh = new lexical.ExceptionHandler();
var lex = new lexical.Lexer(cs, eh);

cs.isEof() // false

var token = lex.getNextToken(); 
console.log(token)

// console.log result:
// {
//     "type": "literal",
//     "value": 100,
//     "subType": "number",
//     "loc": {
//         "start": {
//             "line": 0,
//             "column": 0
//         },
//         "end": {
//             "line": 0,
//             "column": 3
//         }
//     }
// }

cs.isEof() // true

eh.hasExceptions() // false
```