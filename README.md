**Trowel** is an under-construction Ecmascript5 interpreter written in Ecmascript5

## Currently project cover

1. ~~lexical phase~~
2. syntax phase
3. run-time

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
