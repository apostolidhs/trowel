[![NPM version](https://img.shields.io/npm/v/trowel.svg)](https://www.npmjs.com/package/trowel)
![Bower version](https://img.shields.io/bower/v/trowel.svg)

**Trowel** is an under-construction Ecmascript5 interpreter written in TypeScript

Current Keywords: *lexer, parser, lex, syntax, ecmascript, javascript, ast*

Bibliography: [EcmaScript5](http://www.ecma-international.org/ecma-262/5.1), [Mozilla SpiderMonkey Parser API](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API)

---

**Trowel** is splitted in three architectural components. 
The components compose a chain by giving the output to the next component. 
Each component can be used separately from the others, providing a variety of language utility applications.

1. The *lexical* phase recognise the tokens of the Ecmascript5 definition, and marks the type of the token.

2. The *syntax* phase recognise the syntax of the language. The result of this phase is an Abstract Syntax Tree (AST) that embodies the nodes of the structure. 

3. The last phase is the *interpreter*. The interpreter will evaluate the the frontend's structure and will execute it in its context.

The lexer and the parser are known as the frontend part of the Javascript Engine and the intepreter is the backend.

Usually there is an intermediate structure between the frontend and the backend, 
but to simplify the procedure we are planning to execute directly the AST by traversing it.

## Currently project cover

1. ~~lexical phase~~ (finished)
2. ~~syntax phase~~ (finished)
3. run-time (working on it)

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

**trowel.frontend.api.parse**

```javascript
trowel.frontend.api.parse(sourceCode, ?options);
```

Takes as argument an Ecmascript5 source code string and yields an Object that contains: 

1. program: The ast of the source code as defined in [MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API)
2. exceptions: array of exceptions, in case of parse errors 

[More Information](https://github.com/apostolidhs/trowel/blob/master/doc/APIDocumentation.md#simple-parsing)

```javascript
var programNode = trowel.frontend.api.parse("HelloWorld = true", { loc: true });
console.log(JSON.stringify(programNode, undefined, 4));

{
    "program": {
        "type": "Program",
        "body": [
            {
                "type": "ExpressionStatement",
                "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                        "type": "Identifier",
                        "name": "HelloWorld",
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
                    "right": {
                        "type": "Literal",
                        "value": true,
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
                    },
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 17
                        }
                    }
                },
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 0
                    },
                    "end": {
                        "line": 1,
                        "column": 17
                    }
                }
            }
        ],
        "loc": {
            "start": {
                "line": 1,
                "column": 0
            },
            "end": {
                "line": 1,
                "column": 17
            }
        }
    }
}
```

**trowel.frontend.api.tokenize**

```javascript
trowel.frontend.api.tokenize(sourceCode, ?options);
```

Takes as argument an Ecmascript5 source code string and yields an Object that contains: 

1. tokens: array of tokens
2. exceptions: array of exceptions, in case of parse error 

[More Information](https://github.com/apostolidhs/trowel/blob/master/doc/APIDocumentation.md#simple-tokenize)

```javascript
var tokens = trowel.frontend.api.tokenize("HelloWorld = true", { loc: true });
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
