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
     
interface ILexerOptions {
    //tokens contain location information
    loc?: boolean; //default: false
    
    //token type represention as string or as enumerated number
    readableTokensMode?: boolean; //default: true
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
trowel.frontend.api.tokenize(src: string, options?: ILexerOptions): ITokenizeResult
```

Takes as argument an Ecmascript5 source code string and yields an Object that contains: 
1. tokens: array of tokens
2. exceptions: array of exceptions, in case of parse error 

```javascript
var tokens = trowel.frontend.api.tokenize("HelloWorld = true");
console.log(JSON.stringify(tokens, undefined, 4));
// result of console log:
{
	"tokens": [
		{
			"type": "identifier",
			"value": "HelloWorld",
			"loc": {
				"start": {
					"line": 1,
					"column": 0
				},
				"end": {
					"line": 1,
					"column": 10
				}
			}
		},
		{
			"type": "punctuation",
			"value": "=",
			"loc": {
				"start": {
					"line": 1,
					"column": 11
				},
				"end": {
					"line": 1,
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
					"line": 1,
					"column": 13
				},
				"end": {
					"line": 1,
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
    new(ICharacterStream, ExceptionHandler, ?ILexerOptions);

    //get next token
    nextToken(): IToken;
    
    // check if there is next token
    hasNext(): boolean;
    
    // returns the last parsed token
    latestToken(): IToken;
    
    // acts like looking forward by returning the next token.
    // nextToken(), and hasToken() does not effected
    lookAheadNextToken(): IToken;  
    
    // check if the argument is type of error type
    isError(token: IToken): boolean;
    
    // check if the argument is type of end of file type
    isEof(token: IToken): boolean;
    
    // check if the argument is type of literan type
    isLiteral(token: IToken): boolean;
    
    // check if the argument is type of punctuation type
    isPunctuation(token: IToken): boolean;
    
    // check if the argument is type of keyword type
    isKeyword(token: IToken): boolean;
    
    // check if the argument is type of identifier type
    isIdentifier(token: IToken): boolean;

    // check if the argument is type of punctuation type
    // and is equal with the specific value
    isPunctuationValue(token: IToken, value: string): boolean;
    
    // check if the argument is type of keyword type
    // and is equal with the specific value
    isKeywordValue(token: IToken, value: string): boolean;
    
    // check if the argument is type of identifier type
    // and is equal with the specific value
    isIdentifierValue(token: IToken, value: string): boolean;
    
    // consume the next token if its type is punctuation
    // and is equal with the specific value
    matchPunctuation(value: string);
    
    // consume the next token if its type is keyword
    // and is equal with the specific value
    matchKeyword(value: string);
    
    // returns the current position of cursor is the source stream
    getCurrentCursorPos(): ITokenPosition;
}

interface CharacterStream {
    new(src: string);
    
        // returns the current character
    getChar(): number;
    
    // returns the next character
    getNextChar(): number;
    
    // returns the current position 
    // of the cursor in the stream
    getCursor(): number;
    
    // backward the cursor's position in the stream
    bwdCursor();
    
    // forward the cursor's position in the stream
    fwdCursor();
    
    // backward the cursor's position in the 
    // stream for 'range' length of characters
    bwdCursorRange(range: number);
    
    // returns the corresponding string from 'startPos'
    // until the current position of the cursor
    tokenize(startPos: number): string;
    
    // forward the cursor's position if the 'char' 
    // matches the next character
    match(char: number): boolean;
    
    // forward the cursor's position if the result of the 
    // call of the 'comparator' matches the next character
    matchComplex(comparator: (char: number) => boolean): boolean;
    
    // returns if the cursor has reach the end of the stream
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
var lex = new lexical.Lexer(cs, eh, { loc: true });

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
//             "line": 1,
//             "column": 0
//         },
//         "end": {
//             "line": 1,
//             "column": 3
//         }
//     }
// }

cs.isEof() // true

eh.hasExceptions() // false
```