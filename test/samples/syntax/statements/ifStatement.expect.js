{
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 25,
            "column": 1
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
                    "line": 2,
                    "column": 3
                }
            },
            "type": "IfStatement",
            "test": {
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 3
                    },
                    "end": {
                        "line": 1,
                        "column": 4
                    }
                },
                "type": "Literal",
                "value": 1
            },
            "consequent": {
                "loc": {
                    "start": {
                        "line": 2,
                        "column": 1
                    },
                    "end": {
                        "line": 2,
                        "column": 3
                    }
                },
                "type": "ExpressionStatement",
                "expression": {
                    "loc": {
                        "start": {
                            "line": 2,
                            "column": 1
                        },
                        "end": {
                            "line": 2,
                            "column": 2
                        }
                    },
                    "type": "Literal",
                    "value": 2
                }
            },
            "alternate": null
        },
        {
            "loc": {
                "start": {
                    "line": 4,
                    "column": 0
                },
                "end": {
                    "line": 6,
                    "column": 1
                }
            },
            "type": "IfStatement",
            "test": {
                "loc": {
                    "start": {
                        "line": 4,
                        "column": 3
                    },
                    "end": {
                        "line": 4,
                        "column": 4
                    }
                },
                "type": "Literal",
                "value": 3
            },
            "consequent": {
                "loc": {
                    "start": {
                        "line": 4,
                        "column": 5
                    },
                    "end": {
                        "line": 6,
                        "column": 1
                    }
                },
                "type": "BlockStatement",
                "body": [
                    {
                        "loc": {
                            "start": {
                                "line": 5,
                                "column": 2
                            },
                            "end": {
                                "line": 5,
                                "column": 4
                            }
                        },
                        "type": "ExpressionStatement",
                        "expression": {
                            "loc": {
                                "start": {
                                    "line": 5,
                                    "column": 2
                                },
                                "end": {
                                    "line": 5,
                                    "column": 3
                                }
                            },
                            "type": "Literal",
                            "value": 4
                        }
                    }
                ]
            },
            "alternate": null
        },
        {
            "loc": {
                "start": {
                    "line": 8,
                    "column": 0
                },
                "end": {
                    "line": 10,
                    "column": 6
                }
            },
            "type": "IfStatement",
            "test": {
                "loc": {
                    "start": {
                        "line": 8,
                        "column": 3
                    },
                    "end": {
                        "line": 8,
                        "column": 4
                    }
                },
                "type": "Literal",
                "value": 5
            },
            "consequent": {
                "loc": {
                    "start": {
                        "line": 8,
                        "column": 5
                    },
                    "end": {
                        "line": 10,
                        "column": 1
                    }
                },
                "type": "BlockStatement",
                "body": [
                    {
                        "loc": {
                            "start": {
                                "line": 9,
                                "column": 2
                            },
                            "end": {
                                "line": 9,
                                "column": 3
                            }
                        },
                        "type": "EmptyStatement"
                    }
                ]
            },
            "alternate": {
                "loc": {
                    "start": {
                        "line": 10,
                        "column": 5
                    },
                    "end": {
                        "line": 10,
                        "column": 6
                    }
                },
                "type": "EmptyStatement"
            }
        },
        {
            "loc": {
                "start": {
                    "line": 12,
                    "column": 0
                },
                "end": {
                    "line": 16,
                    "column": 1
                }
            },
            "type": "IfStatement",
            "test": {
                "loc": {
                    "start": {
                        "line": 12,
                        "column": 3
                    },
                    "end": {
                        "line": 12,
                        "column": 4
                    }
                },
                "type": "Literal",
                "value": 6
            },
            "consequent": {
                "loc": {
                    "start": {
                        "line": 12,
                        "column": 5
                    },
                    "end": {
                        "line": 14,
                        "column": 1
                    }
                },
                "type": "BlockStatement",
                "body": [
                    {
                        "loc": {
                            "start": {
                                "line": 13,
                                "column": 2
                            },
                            "end": {
                                "line": 13,
                                "column": 3
                            }
                        },
                        "type": "EmptyStatement"
                    }
                ]
            },
            "alternate": {
                "loc": {
                    "start": {
                        "line": 14,
                        "column": 6
                    },
                    "end": {
                        "line": 16,
                        "column": 1
                    }
                },
                "type": "BlockStatement",
                "body": [
                    {
                        "loc": {
                            "start": {
                                "line": 15,
                                "column": 1
                            },
                            "end": {
                                "line": 15,
                                "column": 9
                            }
                        },
                        "type": "VariableDeclaration",
                        "declarations": [
                            {
                                "loc": {
                                    "start": {
                                        "line": 15,
                                        "column": 5
                                    },
                                    "end": {
                                        "line": 15,
                                        "column": 8
                                    }
                                },
                                "type": "VariableDeclarator",
                                "id": {
                                    "loc": {
                                        "start": {
                                            "line": 15,
                                            "column": 5
                                        },
                                        "end": {
                                            "line": 15,
                                            "column": 6
                                        }
                                    },
                                    "type": "Identifier",
                                    "name": "t"
                                },
                                "init": {
                                    "loc": {
                                        "start": {
                                            "line": 15,
                                            "column": 7
                                        },
                                        "end": {
                                            "line": 15,
                                            "column": 8
                                        }
                                    },
                                    "type": "Literal",
                                    "value": 0
                                }
                            }
                        ],
                        "kind": "var"
                    }
                ]
            }
        },
        {
            "loc": {
                "start": {
                    "line": 18,
                    "column": 0
                },
                "end": {
                    "line": 25,
                    "column": 1
                }
            },
            "type": "IfStatement",
            "test": {
                "loc": {
                    "start": {
                        "line": 18,
                        "column": 3
                    },
                    "end": {
                        "line": 18,
                        "column": 4
                    }
                },
                "type": "Literal",
                "value": 7
            },
            "consequent": {
                "loc": {
                    "start": {
                        "line": 18,
                        "column": 5
                    },
                    "end": {
                        "line": 19,
                        "column": 1
                    }
                },
                "type": "BlockStatement",
                "body": []
            },
            "alternate": {
                "loc": {
                    "start": {
                        "line": 19,
                        "column": 6
                    },
                    "end": {
                        "line": 25,
                        "column": 1
                    }
                },
                "type": "IfStatement",
                "test": {
                    "loc": {
                        "start": {
                            "line": 19,
                            "column": 9
                        },
                        "end": {
                            "line": 19,
                            "column": 10
                        }
                    },
                    "type": "Literal",
                    "value": 8
                },
                "consequent": {
                    "loc": {
                        "start": {
                            "line": 19,
                            "column": 11
                        },
                        "end": {
                            "line": 21,
                            "column": 1
                        }
                    },
                    "type": "BlockStatement",
                    "body": [
                        {
                            "loc": {
                                "start": {
                                    "line": 20,
                                    "column": 2
                                },
                                "end": {
                                    "line": 20,
                                    "column": 9
                                }
                            },
                            "type": "IfStatement",
                            "test": {
                                "loc": {
                                    "start": {
                                        "line": 20,
                                        "column": 5
                                    },
                                    "end": {
                                        "line": 20,
                                        "column": 6
                                    }
                                },
                                "type": "Literal",
                                "value": 9
                            },
                            "consequent": {
                                "loc": {
                                    "start": {
                                        "line": 20,
                                        "column": 7
                                    },
                                    "end": {
                                        "line": 20,
                                        "column": 9
                                    }
                                },
                                "type": "BlockStatement",
                                "body": []
                            },
                            "alternate": null
                        }
                    ]
                },
                "alternate": {
                    "loc": {
                        "start": {
                            "line": 21,
                            "column": 6
                        },
                        "end": {
                            "line": 25,
                            "column": 1
                        }
                    },
                    "type": "BlockStatement",
                    "body": [
                        {
                            "loc": {
                                "start": {
                                    "line": 22,
                                    "column": 2
                                },
                                "end": {
                                    "line": 24,
                                    "column": 17
                                }
                            },
                            "type": "IfStatement",
                            "test": {
                                "loc": {
                                    "start": {
                                        "line": 22,
                                        "column": 5
                                    },
                                    "end": {
                                        "line": 22,
                                        "column": 7
                                    }
                                },
                                "type": "Literal",
                                "value": 10
                            },
                            "consequent": {
                                "loc": {
                                    "start": {
                                        "line": 22,
                                        "column": 8
                                    },
                                    "end": {
                                        "line": 24,
                                        "column": 3
                                    }
                                },
                                "type": "BlockStatement",
                                "body": []
                            },
                            "alternate": {
                                "loc": {
                                    "start": {
                                        "line": 24,
                                        "column": 9
                                    },
                                    "end": {
                                        "line": 24,
                                        "column": 17
                                    }
                                },
                                "type": "IfStatement",
                                "test": {
                                    "loc": {
                                        "start": {
                                            "line": 24,
                                            "column": 12
                                        },
                                        "end": {
                                            "line": 24,
                                            "column": 14
                                        }
                                    },
                                    "type": "Literal",
                                    "value": 11
                                },
                                "consequent": {
                                    "loc": {
                                        "start": {
                                            "line": 24,
                                            "column": 15
                                        },
                                        "end": {
                                            "line": 24,
                                            "column": 17
                                        }
                                    },
                                    "type": "BlockStatement",
                                    "body": []
                                },
                                "alternate": null
                            }
                        }
                    ]
                }
            }
        }
    ]
}