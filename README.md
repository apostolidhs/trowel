[![NPM version](https://img.shields.io/npm/v/trowel.svg)](https://www.npmjs.com/package/trowel)
![Bower version](https://img.shields.io/bower/v/trowel.svg)

**Trowel** is an under-construction Ecmascript5 interpreter written in TypeScript

Current Keywords: *lexer, parser, lex, syntax, ecmascript, javascript, ast*

Bibliography: [EcmaScript5](http://www.ecma-international.org/ecma-262/5.1), [Mozilla SpiderMonkey Parser API](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API)

## Currently project cover

1. ~~lexical phase~~
2. syntax phase
3. run-time

## API documentation

[Documentation](https://github.com/apostolidhs/trowel/blob/master/doc/APIDocumentation.md)

## Install 

### Requirements

In order to build the application the following tools are required: node.js, npm, bower, gulp, and tsd

For bower, gulp and tsd you'll need to execute:
```
npm install -g gulp
npm install -g bower
npm install -g tsd
```

### Build

Run the following commands in the project root:

1. `npm install`
2. `bower install`
3. `tsd install`
4. `gulp`

the *gulp* command will automatically build the JavaScript and run the tests.

##### Only build JavaScript

`gulp build-js`

##### Only run tests

`gulp test`

## Usage

Trowel is full compatible on all the web browsers, Rhino, Node.js and most of the wellknown javascript runtime enviroments ([jscc](http://jscc.info/)).

### Include

*Trowel has dependency on underscore*

#### Web browsers global object

```html
<script src="trowel.js"></script>
<!-- exported variable: trowel, trl -->
```

#### AMD

```javascript
require(['trowel'], function (trowel) {

});
```

#### Node.js

```
var trowel = require('trowel');
```

#### Rhino

```
load('/path/to/trowel.js');
// exported variable: trowel, trl
```

### API

#### Simple

**trowel.frontend.api.tokenize**

```javascript
trowel.frontend.api.tokenize(sourceCode);
```

Takes as argument an Ecmascript5 source code string and yields an Object that contains: 

1. tokens: array of tokens
2. exceptions: array of exceptions, in case of parse error 

[More Information](https://github.com/apostolidhs/trowel/blob/master/doc/APIDocumentation.md)

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
