{
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 8,
            "column": 18
        }
    },
    "type": "Program",
    "body": [
        {
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 8
                }
            },
            "type": "ForStatement",
            "init": null,
            "test": null,
            "update": null,
            "body": {
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 7
                    },
                    "end": {
                        "line": 1,
                        "column": 8
                    }
                },
                "type": "EmptyStatement"
            }
        },
        {
            "loc": {
                "start": {
                    "line": 2,
                    "column": 0
                },
                "end": {
                    "line": 2,
                    "column": 12
                }
            },
            "type": "ForStatement",
            "init": {
                "loc": {
                    "start": {
                        "line": 2,
                        "column": 4
                    },
                    "end": {
                        "line": 2,
                        "column": 5
                    }
                },
                "type": "Literal",
                "value": 1
            },
            "test": {
                "loc": {
                    "start": {
                        "line": 2,
                        "column": 6
                    },
                    "end": {
                        "line": 2,
                        "column": 7
                    }
                },
                "type": "Literal",
                "value": 2
            },
            "update": {
                "loc": {
                    "start": {
                        "line": 2,
                        "column": 8
                    },
                    "end": {
                        "line": 2,
                        "column": 9
                    }
                },
                "type": "Literal",
                "value": 3
            },
            "body": {
                "loc": {
                    "start": {
                        "line": 2,
                        "column": 10
                    },
                    "end": {
                        "line": 2,
                        "column": 12
                    }
                },
                "type": "BlockStatement",
                "body": []
            }
        },
        {
            "loc": {
                "start": {
                    "line": 3,
                    "column": 0
                },
                "end": {
                    "line": 3,
                    "column": 24
                }
            },
            "type": "ForStatement",
            "init": {
                "loc": {
                    "start": {
                        "line": 3,
                        "column": 4
                    },
                    "end": {
                        "line": 3,
                        "column": 11
                    }
                },
                "type": "VariableDeclaration",
                "declarations": [
                    {
                        "loc": {
                            "start": {
                                "line": 3,
                                "column": 8
                            },
                            "end": {
                                "line": 3,
                                "column": 11
                            }
                        },
                        "type": "VariableDeclarator",
                        "id": {
                            "loc": {
                                "start": {
                                    "line": 3,
                                    "column": 8
                                },
                                "end": {
                                    "line": 3,
                                    "column": 9
                                }
                            },
                            "type": "Identifier",
                            "name": "i"
                        },
                        "init": {
                            "loc": {
                                "start": {
                                    "line": 3,
                                    "column": 10
                                },
                                "end": {
                                    "line": 3,
                                    "column": 11
                                }
                            },
                            "type": "Literal",
                            "value": 0
                        }
                    }
                ],
                "kind": "var"
            },
            "test": {
                "loc": {
                    "start": {
                        "line": 3,
                        "column": 13
                    },
                    "end": {
                        "line": 3,
                        "column": 17
                    }
                },
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                    "loc": {
                        "start": {
                            "line": 3,
                            "column": 13
                        },
                        "end": {
                            "line": 3,
                            "column": 14
                        }
                    },
                    "type": "Identifier",
                    "name": "i"
                },
                "right": {
                    "loc": {
                        "start": {
                            "line": 3,
                            "column": 15
                        },
                        "end": {
                            "line": 3,
                            "column": 17
                        }
                    },
                    "type": "Literal",
                    "value": 10
                }
            },
            "update": {
                "loc": {
                    "start": {
                        "line": 3,
                        "column": 19
                    },
                    "end": {
                        "line": 3,
                        "column": 22
                    }
                },
                "type": "UpdateExpression",
                "operator": "++",
                "argument": {
                    "loc": {
                        "start": {
                            "line": 3,
                            "column": 21
                        },
                        "end": {
                            "line": 3,
                            "column": 22
                        }
                    },
                    "type": "Identifier",
                    "name": "i"
                },
                "prefix": true
            },
            "body": {
                "loc": {
                    "start": {
                        "line": 3,
                        "column": 23
                    },
                    "end": {
                        "line": 3,
                        "column": 24
                    }
                },
                "type": "EmptyStatement"
            }
        },
        {
            "loc": {
                "start": {
                    "line": 4,
                    "column": 0
                },
                "end": {
                    "line": 7,
                    "column": 1
                }
            },
            "type": "ForStatement",
            "init": {
                "loc": {
                    "start": {
                        "line": 4,
                        "column": 4
                    },
                    "end": {
                        "line": 4,
                        "column": 29
                    }
                },
                "type": "VariableDeclaration",
                "declarations": [
                    {
                        "loc": {
                            "start": {
                                "line": 4,
                                "column": 8
                            },
                            "end": {
                                "line": 4,
                                "column": 11
                            }
                        },
                        "type": "VariableDeclarator",
                        "id": {
                            "loc": {
                                "start": {
                                    "line": 4,
                                    "column": 8
                                },
                                "end": {
                                    "line": 4,
                                    "column": 9
                                }
                            },
                            "type": "Identifier",
                            "name": "i"
                        },
                        "init": {
                            "loc": {
                                "start": {
                                    "line": 4,
                                    "column": 10
                                },
                                "end": {
                                    "line": 4,
                                    "column": 11
                                }
                            },
                            "type": "Literal",
                            "value": 0
                        }
                    },
                    {
                        "loc": {
                            "start": {
                                "line": 4,
                                "column": 13
                            },
                            "end": {
                                "line": 4,
                                "column": 29
                            }
                        },
                        "type": "VariableDeclarator",
                        "id": {
                            "loc": {
                                "start": {
                                    "line": 4,
                                    "column": 13
                                },
                                "end": {
                                    "line": 4,
                                    "column": 16
                                }
                            },
                            "type": "Identifier",
                            "name": "len"
                        },
                        "init": {
                            "loc": {
                                "start": {
                                    "line": 4,
                                    "column": 19
                                },
                                "end": {
                                    "line": 4,
                                    "column": 29
                                }
                            },
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                                "loc": {
                                    "start": {
                                        "line": 4,
                                        "column": 19
                                    },
                                    "end": {
                                        "line": 4,
                                        "column": 22
                                    }
                                },
                                "type": "Identifier",
                                "name": "arr"
                            },
                            "property": {
                                "loc": {
                                    "start": {
                                        "line": 4,
                                        "column": 23
                                    },
                                    "end": {
                                        "line": 4,
                                        "column": 29
                                    }
                                },
                                "type": "Identifier",
                                "name": "length"
                            }
                        }
                    }
                ],
                "kind": "var"
            },
            "test": {
                "loc": {
                    "start": {
                        "line": 4,
                        "column": 31
                    },
                    "end": {
                        "line": 4,
                        "column": 36
                    }
                },
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                    "loc": {
                        "start": {
                            "line": 4,
                            "column": 31
                        },
                        "end": {
                            "line": 4,
                            "column": 32
                        }
                    },
                    "type": "Identifier",
                    "name": "i"
                },
                "right": {
                    "loc": {
                        "start": {
                            "line": 4,
                            "column": 33
                        },
                        "end": {
                            "line": 4,
                            "column": 36
                        }
                    },
                    "type": "Identifier",
                    "name": "len"
                }
            },
            "update": {
                "loc": {
                    "start": {
                        "line": 4,
                        "column": 38
                    },
                    "end": {
                        "line": 4,
                        "column": 41
                    }
                },
                "type": "UpdateExpression",
                "operator": "++",
                "argument": {
                    "loc": {
                        "start": {
                            "line": 4,
                            "column": 40
                        },
                        "end": {
                            "line": 4,
                            "column": 41
                        }
                    },
                    "type": "Identifier",
                    "name": "i"
                },
                "prefix": true
            },
            "body": {
                "loc": {
                    "start": {
                        "line": 4,
                        "column": 42
                    },
                    "end": {
                        "line": 7,
                        "column": 1
                    }
                },
                "type": "BlockStatement",
                "body": [
                    {
                        "loc": {
                            "start": {
                                "line": 5,
                                "column": 1
                            },
                            "end": {
                                "line": 5,
                                "column": 21
                            }
                        },
                        "type": "ExpressionStatement",
                        "expression": {
                            "loc": {
                                "start": {
                                    "line": 5,
                                    "column": 1
                                },
                                "end": {
                                    "line": 5,
                                    "column": 20
                                }
                            },
                            "type": "CallExpression",
                            "callee": {
                                "loc": {
                                    "start": {
                                        "line": 5,
                                        "column": 1
                                    },
                                    "end": {
                                        "line": 5,
                                        "column": 12
                                    }
                                },
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "loc": {
                                        "start": {
                                            "line": 5,
                                            "column": 1
                                        },
                                        "end": {
                                            "line": 5,
                                            "column": 8
                                        }
                                    },
                                    "type": "Identifier",
                                    "name": "console"
                                },
                                "property": {
                                    "loc": {
                                        "start": {
                                            "line": 5,
                                            "column": 9
                                        },
                                        "end": {
                                            "line": 5,
                                            "column": 12
                                        }
                                    },
                                    "type": "Identifier",
                                    "name": "log"
                                }
                            },
                            "arguments": [
                                {
                                    "loc": {
                                        "start": {
                                            "line": 5,
                                            "column": 13
                                        },
                                        "end": {
                                            "line": 5,
                                            "column": 19
                                        }
                                    },
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                        "loc": {
                                            "start": {
                                                "line": 5,
                                                "column": 13
                                            },
                                            "end": {
                                                "line": 5,
                                                "column": 16
                                            }
                                        },
                                        "type": "Identifier",
                                        "name": "arr"
                                    },
                                    "property": {
                                        "loc": {
                                            "start": {
                                                "line": 5,
                                                "column": 17
                                            },
                                            "end": {
                                                "line": 5,
                                                "column": 18
                                            }
                                        },
                                        "type": "Identifier",
                                        "name": "i"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "loc": {
                            "start": {
                                "line": 6,
                                "column": 1
                            },
                            "end": {
                                "line": 6,
                                "column": 32
                            }
                        },
                        "type": "ForStatement",
                        "init": null,
                        "test": null,
                        "update": null,
                        "body": {
                            "loc": {
                                "start": {
                                    "line": 6,
                                    "column": 8
                                },
                                "end": {
                                    "line": 6,
                                    "column": 32
                                }
                            },
                            "type": "ExpressionStatement",
                            "expression": {
                                "loc": {
                                    "start": {
                                        "line": 6,
                                        "column": 8
                                    },
                                    "end": {
                                        "line": 6,
                                        "column": 31
                                    }
                                },
                                "type": "CallExpression",
                                "callee": {
                                    "loc": {
                                        "start": {
                                            "line": 6,
                                            "column": 8
                                        },
                                        "end": {
                                            "line": 6,
                                            "column": 19
                                        }
                                    },
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                        "loc": {
                                            "start": {
                                                "line": 6,
                                                "column": 8
                                            },
                                            "end": {
                                                "line": 6,
                                                "column": 15
                                            }
                                        },
                                        "type": "Identifier",
                                        "name": "console"
                                    },
                                    "property": {
                                        "loc": {
                                            "start": {
                                                "line": 6,
                                                "column": 16
                                            },
                                            "end": {
                                                "line": 6,
                                                "column": 19
                                            }
                                        },
                                        "type": "Identifier",
                                        "name": "log"
                                    }
                                },
                                "arguments": [
                                    {
                                        "loc": {
                                            "start": {
                                                "line": 6,
                                                "column": 20
                                            },
                                            "end": {
                                                "line": 6,
                                                "column": 30
                                            }
                                        },
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                            "loc": {
                                                "start": {
                                                    "line": 6,
                                                    "column": 20
                                                },
                                                "end": {
                                                    "line": 6,
                                                    "column": 23
                                                }
                                            },
                                            "type": "Identifier",
                                            "name": "arr"
                                        },
                                        "property": {
                                            "loc": {
                                                "start": {
                                                    "line": 6,
                                                    "column": 24
                                                },
                                                "end": {
                                                    "line": 6,
                                                    "column": 29
                                                }
                                            },
                                            "type": "BinaryExpression",
                                            "operator": "-",
                                            "left": {
                                                "loc": {
                                                    "start": {
                                                        "line": 6,
                                                        "column": 24
                                                    },
                                                    "end": {
                                                        "line": 6,
                                                        "column": 27
                                                    }
                                                },
                                                "type": "Identifier",
                                                "name": "len"
                                            },
                                            "right": {
                                                "loc": {
                                                    "start": {
                                                        "line": 6,
                                                        "column": 28
                                                    },
                                                    "end": {
                                                        "line": 6,
                                                        "column": 29
                                                    }
                                                },
                                                "type": "Identifier",
                                                "name": "i"
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        },
        {
            "loc": {
                "start": {
                    "line": 8,
                    "column": 0
                },
                "end": {
                    "line": 8,
                    "column": 18
                }
            },
            "type": "ForInStatement",
            "left": {
                "loc": {
                    "start": {
                        "line": 8,
                        "column": 4
                    },
                    "end": {
                        "line": 8,
                        "column": 5
                    }
                },
                "type": "Identifier",
                "name": "i"
            },
            "right": {
                "loc": {
                    "start": {
                        "line": 8,
                        "column": 9
                    },
                    "end": {
                        "line": 8,
                        "column": 16
                    }
                },
                "type": "ArrayExpression",
                "elements": [
                    {
                        "loc": {
                            "start": {
                                "line": 8,
                                "column": 10
                            },
                            "end": {
                                "line": 8,
                                "column": 11
                            }
                        },
                        "type": "Literal",
                        "value": 1
                    },
                    {
                        "loc": {
                            "start": {
                                "line": 8,
                                "column": 12
                            },
                            "end": {
                                "line": 8,
                                "column": 13
                            }
                        },
                        "type": "Literal",
                        "value": 2
                    },
                    {
                        "loc": {
                            "start": {
                                "line": 8,
                                "column": 14
                            },
                            "end": {
                                "line": 8,
                                "column": 15
                            }
                        },
                        "type": "Literal",
                        "value": 3
                    }
                ]
            },
            "body": {
                "loc": {
                    "start": {
                        "line": 8,
                        "column": 17
                    },
                    "end": {
                        "line": 8,
                        "column": 18
                    }
                },
                "type": "EmptyStatement"
            },
            "each": false
        }
    ]
}