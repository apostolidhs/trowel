{
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 17,
            "column": 9
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
                    "column": 9
                }
            },
            "type": "WhileStatement",
            "test": {
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 6
                    },
                    "end": {
                        "line": 1,
                        "column": 7
                    }
                },
                "type": "Literal",
                "value": 1
            },
            "body": {
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 8
                    },
                    "end": {
                        "line": 1,
                        "column": 9
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
                    "line": 4,
                    "column": 1
                }
            },
            "type": "WhileStatement",
            "test": {
                "loc": {
                    "start": {
                        "line": 2,
                        "column": 6
                    },
                    "end": {
                        "line": 2,
                        "column": 17
                    }
                },
                "type": "CallExpression",
                "callee": {
                    "loc": {
                        "start": {
                            "line": 2,
                            "column": 6
                        },
                        "end": {
                            "line": 2,
                            "column": 15
                        }
                    },
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
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
                        "type": "Identifier",
                        "name": "t"
                    },
                    "property": {
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 8
                            },
                            "end": {
                                "line": 2,
                                "column": 15
                            }
                        },
                        "type": "Identifier",
                        "name": "hasNext"
                    }
                },
                "arguments": []
            },
            "body": {
                "loc": {
                    "start": {
                        "line": 2,
                        "column": 18
                    },
                    "end": {
                        "line": 4,
                        "column": 1
                    }
                },
                "type": "BlockStatement",
                "body": [
                    {
                        "loc": {
                            "start": {
                                "line": 3,
                                "column": 1
                            },
                            "end": {
                                "line": 3,
                                "column": 19
                            }
                        },
                        "type": "ExpressionStatement",
                        "expression": {
                            "loc": {
                                "start": {
                                    "line": 3,
                                    "column": 1
                                },
                                "end": {
                                    "line": 3,
                                    "column": 18
                                }
                            },
                            "type": "CallExpression",
                            "callee": {
                                "loc": {
                                    "start": {
                                        "line": 3,
                                        "column": 1
                                    },
                                    "end": {
                                        "line": 3,
                                        "column": 8
                                    }
                                },
                                "type": "Identifier",
                                "name": "consume"
                            },
                            "arguments": [
                                {
                                    "loc": {
                                        "start": {
                                            "line": 3,
                                            "column": 9
                                        },
                                        "end": {
                                            "line": 3,
                                            "column": 17
                                        }
                                    },
                                    "type": "CallExpression",
                                    "callee": {
                                        "loc": {
                                            "start": {
                                                "line": 3,
                                                "column": 9
                                            },
                                            "end": {
                                                "line": 3,
                                                "column": 15
                                            }
                                        },
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "loc": {
                                                "start": {
                                                    "line": 3,
                                                    "column": 9
                                                },
                                                "end": {
                                                    "line": 3,
                                                    "column": 10
                                                }
                                            },
                                            "type": "Identifier",
                                            "name": "t"
                                        },
                                        "property": {
                                            "loc": {
                                                "start": {
                                                    "line": 3,
                                                    "column": 11
                                                },
                                                "end": {
                                                    "line": 3,
                                                    "column": 15
                                                }
                                            },
                                            "type": "Identifier",
                                            "name": "next"
                                        }
                                    },
                                    "arguments": []
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "loc": {
                "start": {
                    "line": 5,
                    "column": 0
                },
                "end": {
                    "line": 8,
                    "column": 1
                }
            },
            "type": "WhileStatement",
            "test": {
                "loc": {
                    "start": {
                        "line": 5,
                        "column": 6
                    },
                    "end": {
                        "line": 5,
                        "column": 10
                    }
                },
                "type": "Literal",
                "value": true
            },
            "body": {
                "loc": {
                    "start": {
                        "line": 5,
                        "column": 12
                    },
                    "end": {
                        "line": 8,
                        "column": 1
                    }
                },
                "type": "BlockStatement",
                "body": [
                    {
                        "loc": {
                            "start": {
                                "line": 6,
                                "column": 1
                            },
                            "end": {
                                "line": 7,
                                "column": 17
                            }
                        },
                        "type": "WhileStatement",
                        "test": {
                            "loc": {
                                "start": {
                                    "line": 6,
                                    "column": 7
                                },
                                "end": {
                                    "line": 6,
                                    "column": 11
                                }
                            },
                            "type": "BinaryExpression",
                            "operator": "==",
                            "left": {
                                "loc": {
                                    "start": {
                                        "line": 6,
                                        "column": 7
                                    },
                                    "end": {
                                        "line": 6,
                                        "column": 8
                                    }
                                },
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "loc": {
                                    "start": {
                                        "line": 6,
                                        "column": 10
                                    },
                                    "end": {
                                        "line": 6,
                                        "column": 11
                                    }
                                },
                                "type": "Identifier",
                                "name": "b"
                            }
                        },
                        "body": {
                            "loc": {
                                "start": {
                                    "line": 7,
                                    "column": 3
                                },
                                "end": {
                                    "line": 7,
                                    "column": 17
                                }
                            },
                            "type": "WhileStatement",
                            "test": {
                                "loc": {
                                    "start": {
                                        "line": 7,
                                        "column": 9
                                    },
                                    "end": {
                                        "line": 7,
                                        "column": 14
                                    }
                                },
                                "type": "Literal",
                                "value": false
                            },
                            "body": {
                                "loc": {
                                    "start": {
                                        "line": 7,
                                        "column": 15
                                    },
                                    "end": {
                                        "line": 7,
                                        "column": 17
                                    }
                                },
                                "type": "BlockStatement",
                                "body": []
                            }
                        }
                    }
                ]
            }
        },
        {
            "loc": {
                "start": {
                    "line": 10,
                    "column": 0
                },
                "end": {
                    "line": 11,
                    "column": 9
                }
            },
            "type": "DoWhileStatement",
            "body": {
                "loc": {
                    "start": {
                        "line": 10,
                        "column": 2
                    },
                    "end": {
                        "line": 11,
                        "column": 1
                    }
                },
                "type": "BlockStatement",
                "body": []
            },
            "test": {
                "loc": {
                    "start": {
                        "line": 11,
                        "column": 7
                    },
                    "end": {
                        "line": 11,
                        "column": 8
                    }
                },
                "type": "Literal",
                "value": 1
            }
        },
        {
            "loc": {
                "start": {
                    "line": 13,
                    "column": 0
                },
                "end": {
                    "line": 17,
                    "column": 9
                }
            },
            "type": "DoWhileStatement",
            "body": {
                "loc": {
                    "start": {
                        "line": 13,
                        "column": 2
                    },
                    "end": {
                        "line": 17,
                        "column": 1
                    }
                },
                "type": "BlockStatement",
                "body": [
                    {
                        "loc": {
                            "start": {
                                "line": 14,
                                "column": 3
                            },
                            "end": {
                                "line": 16,
                                "column": 16
                            }
                        },
                        "type": "DoWhileStatement",
                        "body": {
                            "loc": {
                                "start": {
                                    "line": 14,
                                    "column": 5
                                },
                                "end": {
                                    "line": 16,
                                    "column": 2
                                }
                            },
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "loc": {
                                        "start": {
                                            "line": 15,
                                            "column": 4
                                        },
                                        "end": {
                                            "line": 15,
                                            "column": 32
                                        }
                                    },
                                    "type": "WhileStatement",
                                    "test": {
                                        "loc": {
                                            "start": {
                                                "line": 15,
                                                "column": 10
                                            },
                                            "end": {
                                                "line": 15,
                                                "column": 11
                                            }
                                        },
                                        "type": "Literal",
                                        "value": 2
                                    },
                                    "body": {
                                        "loc": {
                                            "start": {
                                                "line": 15,
                                                "column": 12
                                            },
                                            "end": {
                                                "line": 15,
                                                "column": 32
                                            }
                                        },
                                        "type": "ExpressionStatement",
                                        "expression": {
                                            "loc": {
                                                "start": {
                                                    "line": 15,
                                                    "column": 12
                                                },
                                                "end": {
                                                    "line": 15,
                                                    "column": 31
                                                }
                                            },
                                            "type": "CallExpression",
                                            "callee": {
                                                "loc": {
                                                    "start": {
                                                        "line": 15,
                                                        "column": 12
                                                    },
                                                    "end": {
                                                        "line": 15,
                                                        "column": 23
                                                    }
                                                },
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                    "loc": {
                                                        "start": {
                                                            "line": 15,
                                                            "column": 12
                                                        },
                                                        "end": {
                                                            "line": 15,
                                                            "column": 19
                                                        }
                                                    },
                                                    "type": "Identifier",
                                                    "name": "console"
                                                },
                                                "property": {
                                                    "loc": {
                                                        "start": {
                                                            "line": 15,
                                                            "column": 20
                                                        },
                                                        "end": {
                                                            "line": 15,
                                                            "column": 23
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
                                                            "line": 15,
                                                            "column": 24
                                                        },
                                                        "end": {
                                                            "line": 15,
                                                            "column": 30
                                                        }
                                                    },
                                                    "type": "Literal",
                                                    "value": "test"
                                                }
                                            ]
                                        }
                                    }
                                }
                            ]
                        },
                        "test": {
                            "loc": {
                                "start": {
                                    "line": 16,
                                    "column": 8
                                },
                                "end": {
                                    "line": 16,
                                    "column": 15
                                }
                            },
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                                "loc": {
                                    "start": {
                                        "line": 16,
                                        "column": 8
                                    },
                                    "end": {
                                        "line": 16,
                                        "column": 10
                                    }
                                },
                                "type": "ObjectExpression",
                                "properties": []
                            },
                            "right": {
                                "loc": {
                                    "start": {
                                        "line": 16,
                                        "column": 13
                                    },
                                    "end": {
                                        "line": 16,
                                        "column": 15
                                    }
                                },
                                "type": "ArrayExpression",
                                "elements": []
                            }
                        }
                    }
                ]
            },
            "test": {
                "loc": {
                    "start": {
                        "line": 17,
                        "column": 7
                    },
                    "end": {
                        "line": 17,
                        "column": 8
                    }
                },
                "type": "Literal",
                "value": 2
            } 
        }
    ]
}