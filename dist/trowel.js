(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // like: require.js
        define(['underscore'], factory);
    } else if (typeof exports === 'object') {
        // like: Node.js
        module.exports = factory(require('underscore'));
    } else {
        // browser global object
        root.trowel = root.trl = factory(root._);
    }
}(this, function (_) {
    if (!(_ && _.VERSION)) {
        throw new Error('Trowel\'s JavaScript requires underscore');
    }
    {
        var trl;
        (function (trl) {
            var backend;
            (function (backend) {
                var JSUndefined = function () {
                    function JSUndefined() {
                    }
                    JSUndefined.prototype.getType = function () {
                        return backend.JSValues.undefined;
                    };
                    return JSUndefined;
                }();
                backend.JSUndefined = JSUndefined;
            }(backend = trl.backend || (trl.backend = {})));
        }(trl || (trl = {})));
        var trl;
        (function (trl) {
            var backend;
            (function (backend) {
                var JSNull = function () {
                    function JSNull() {
                    }
                    JSNull.prototype.getType = function () {
                        return backend.JSValues.null;
                    };
                    return JSNull;
                }();
                backend.JSNull = JSNull;
            }(backend = trl.backend || (trl.backend = {})));
        }(trl || (trl = {})));
        /// <reference path="values/JSUndefined.ts" />
        /// <reference path="values/JSNull.ts" />
        var trl;
        (function (trl) {
            var backend;
            (function (backend) {
                var JSApi = function () {
                    function JSApi() {
                    }
                    JSApi.createUndefined = function () {
                        return JSApi.undefinedValue;
                    };
                    JSApi.createString = function (value) {
                        return new backend.JSString(value);
                    };
                    JSApi.createObject = function () {
                        return new backend.JSObject();
                    };
                    JSApi.createNumber = function (value) {
                        return new backend.JSNumber(value);
                    };
                    JSApi.createNull = function () {
                        return JSApi.nullValue;
                    };
                    JSApi.createBoolean = function (value) {
                        return new backend.JSBoolean(value);
                    };
                    ////////Pure JS Value Factory//////////
                    /////////////////////////////////////
                    // Pure JS Value utilities
                    JSApi.isString = function (val) {
                        return val.getType() === backend.JSValues.string;
                    };
                    JSApi.isStringWithValue = function (val, str) {
                        return val.getType() === backend.JSValues.string && val.getValue() === str;
                    };
                    JSApi.isNumber = function (val) {
                        return val.getType() === backend.JSValues.number;
                    };
                    JSApi.isNumberWithValue = function (val, num) {
                        return val.getType() === backend.JSValues.string && val.getValue() === num;
                    };
                    JSApi.isBoolean = function (val) {
                        return val.getType() === backend.JSValues.boolean;
                    };
                    JSApi.isBooleanWithValue = function (val, is) {
                        return val.getType() === backend.JSValues.string && val.getValue() === is;
                    };
                    JSApi.isNull = function (val) {
                        return val.getType() === backend.JSValues.null;
                    };
                    JSApi.isUndefined = function (val) {
                        return val.getType() === backend.JSValues.undefined;
                    };
                    JSApi.isObject = function (val) {
                        return val.getType() === backend.JSValues.object;
                    };
                    ////////Pure JS Value utilities//////////
                    JSApi.toObject = function (val) {
                        return throwNotImplementedYet();
                    };
                    JSApi.toBoolean = function (val) {
                        return throwNotImplementedYet();
                    };
                    JSApi.isCallable = function (val) {
                        return throwNotImplementedYet();
                    };
                    /////////////////////////////////////////
                    // Exceptions
                    JSApi.throwReferenceErrorException = function () {
                        throwNotImplementedYet();
                    };
                    JSApi.throwTypeErrorException = function () {
                        throwNotImplementedYet();
                    };
                    ///////////////Exceptions///////////////
                    JSApi.callObjectFunction = function (obj, args) {
                        return JSApi.createUndefined();
                    };
                    /////////////////////////////////////
                    // Pure JS Value Factory
                    JSApi.undefinedValue = new backend.JSUndefined();
                    JSApi.nullValue = new backend.JSNull();
                    return JSApi;
                }();
                backend.JSApi = JSApi;
                function throwNotImplementedYet() {
                    throw new Error('Not implemented yet');
                }
                backend.throwNotImplementedYet = throwNotImplementedYet;
            }(backend = trl.backend || (trl.backend = {})));
        }(trl || (trl = {})));
        var trl;
        (function (trl) {
            var frontend;
            (function (frontend) {
                var lexical;
                (function (lexical) {
                    (function (TokenType) {
                        TokenType[TokenType['keyword'] = 1] = 'keyword';
                        TokenType[TokenType['identifier'] = 2] = 'identifier';
                        TokenType[TokenType['literal'] = 3] = 'literal';
                        TokenType[TokenType['punctuation'] = 4] = 'punctuation';
                        TokenType[TokenType['comment'] = 5] = 'comment';
                        TokenType[TokenType['eof'] = 6] = 'eof';
                        TokenType[TokenType['error'] = 7] = 'error';
                    }(lexical.TokenType || (lexical.TokenType = {})));
                    var TokenType = lexical.TokenType;
                    (function (LiteralSubType) {
                        LiteralSubType[LiteralSubType['string'] = 1] = 'string';
                        LiteralSubType[LiteralSubType['number'] = 2] = 'number';
                        LiteralSubType[LiteralSubType['null'] = 3] = 'null';
                        LiteralSubType[LiteralSubType['boolean'] = 4] = 'boolean';
                        LiteralSubType[LiteralSubType['regex'] = 5] = 'regex';
                    }(lexical.LiteralSubType || (lexical.LiteralSubType = {})));
                    var LiteralSubType = lexical.LiteralSubType;
                    ;
                }(lexical = frontend.lexical || (frontend.lexical = {})));
            }(frontend = trl.frontend || (trl.frontend = {})));
        }(trl || (trl = {})));
        /// <reference path="IException.d.ts" />
        var trl;
        (function (trl) {
            var frontend;
            (function (frontend) {
                var ExceptionHandler = function () {
                    function ExceptionHandler() {
                        this.exceptions = [];
                    }
                    ExceptionHandler.prototype.addException = function (msg, line, column) {
                        var exception = {
                            pos: {
                                column: column,
                                line: line
                            },
                            msg: msg
                        };
                        this.exceptions.push(exception);
                    };
                    ExceptionHandler.prototype.hasExceptions = function () {
                        return !_.isEmpty(this.exceptions);
                    };
                    ExceptionHandler.prototype.clear = function () {
                        this.exceptions.length = 0;
                    };
                    ExceptionHandler.prototype.getExceptions = function () {
                        return this.exceptions;
                    };
                    return ExceptionHandler;
                }();
                frontend.ExceptionHandler = ExceptionHandler;
            }(frontend = trl.frontend || (trl.frontend = {})));
        }(trl || (trl = {})));
        /// <reference path="../../tsDefinitions/tsd.d.ts" />
        var trl;
        (function (trl) {
            var frontend;
            (function (frontend) {
                var CharPoints = function () {
                    function CharPoints() {
                    }
                    CharPoints.createStringFromCharPointGenerator = function () {
                        var charBuffer = [];
                        return {
                            addCharPoint: function (char) {
                                charBuffer.push(CharPoints.fromCodePoint(char));
                            },
                            getString: function () {
                                return charBuffer.join('');
                            }
                        };
                    };
                    CharPoints.getDigitFromCharPoint = function (c) {
                        return c - CharPoints.ZERO_CHAR_CODE;
                    };
                    CharPoints.codePointAt = function (str, pos) {
                        return str.codePointAt(pos);
                    };
                    CharPoints.fromCodePoint = function (point) {
                        return String.fromCodePoint(point);
                    };
                    CharPoints.ZERO_CHAR_CODE = '0'.charCodeAt(0);
                    return CharPoints;
                }();
                frontend.CharPoints = CharPoints;
            }(frontend = trl.frontend || (trl.frontend = {})));
        }(trl || (trl = {})));
        var trl;
        (function (trl) {
            var frontend;
            (function (frontend) {
                var lexical;
                (function (lexical) {
                    var t = true;
                    var TokenDefinitions = function () {
                        function TokenDefinitions() {
                        }
                        TokenDefinitions.WS = {
                            9: t,
                            11: t,
                            12: t,
                            32: t,
                            160: t,
                            65279: t
                        };
                        TokenDefinitions.LT = {
                            10: t,
                            13: t,
                            8232: t,
                            514: t
                        };
                        // 0x200C: t, //zwnj
                        // 0x200D: t, //zwj
                        TokenDefinitions.KW = {
                            break: t,
                            do: t,
                            instanceof: t,
                            typeof: t,
                            case: t,
                            else: t,
                            new: t,
                            var: t,
                            catch: t,
                            finally: t,
                            return: t,
                            void: t,
                            continue: t,
                            for: t,
                            switch: t,
                            while: t,
                            debugger: t,
                            function: t,
                            this: t,
                            with: t,
                            default: t,
                            if: t,
                            throw: t,
                            delete: t,
                            in: t,
                            try: t,
                            class: t,
                            enum: t,
                            extends: t,
                            super: t,
                            const: t,
                            export: t,
                            import: t,
                            implements: t,
                            let: t,
                            private: t,
                            public: t,
                            interface: t,
                            package: t,
                            protected: t,
                            static: t,
                            yield: t
                        };
                        TokenDefinitions.LIT = {
                            null: t,
                            true: t,
                            false: t
                        };
                        TokenDefinitions.PNC_SINGLE = {
                            lbrace: 123,
                            rbrace: 125,
                            lparenth: 40,
                            rparenth: 41,
                            lbracket: 91,
                            rbracket: 93,
                            dot: 46,
                            semicolon: 59,
                            comma: 44,
                            less: 60,
                            more: 62,
                            plus: 43,
                            minus: 45,
                            percent: 37,
                            ampersand: 38,
                            vertical: 124,
                            caret: 94,
                            excl: 33,
                            tilde: 126,
                            quest: 63,
                            colon: 58,
                            assign: 61,
                            asterisk: 42,
                            slash: 47,
                            backslash: 92,
                            dollar: 36,
                            exp: 101,
                            expb: 69,
                            apostrophe: 39,
                            qmark: 34,
                            zero: 48,
                            b: 98,
                            f: 102,
                            n: 110,
                            r: 114,
                            t: 116,
                            v: 118,
                            x: 120,
                            u: 117,
                            lf: 10,
                            cr: 13
                        };
                        TokenDefinitions.UNICODE_UNCOMMON_THRESHOLD = 170;
                        TokenDefinitions.UNICODE_CONTINUE_COMMON = {
                            8204: t    /* zwnj */,
                            8205: t    /* zwj */,
                            36: t    /* $ */,
                            92: t    /* \ */,
                            48: t,
                            49: t,
                            50: t,
                            51: t,
                            52: t,
                            53: t,
                            54: t,
                            55: t,
                            56: t,
                            57: t,
                            65: t,
                            66: t,
                            67: t,
                            68: t,
                            69: t,
                            70: t,
                            71: t,
                            72: t,
                            73: t,
                            74: t,
                            75: t,
                            76: t,
                            77: t,
                            78: t,
                            79: t,
                            80: t,
                            81: t,
                            82: t,
                            83: t,
                            84: t,
                            85: t,
                            86: t,
                            87: t,
                            88: t,
                            89: t,
                            90: t,
                            95: t,
                            97: t,
                            98: t,
                            99: t,
                            100: t,
                            101: t,
                            102: t,
                            103: t,
                            104: t,
                            105: t,
                            106: t,
                            107: t,
                            108: t,
                            109: t,
                            110: t,
                            111: t,
                            112: t,
                            113: t,
                            114: t,
                            115: t,
                            116: t,
                            117: t,
                            118: t,
                            119: t,
                            120: t,
                            121: t,
                            122: t
                        };
                        TokenDefinitions.UNICODE_CONTINUE_UNCOMMON = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u0241\u0250-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EE\u0300-\u036F\u037A\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03CE\u03D0-\u03F5\u03F7-\u0481\u0483-\u0486\u048A-\u04CE\u04D0-\u04F9\u0500-\u050F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05B9\u05BB-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u0615\u0621-\u063A\u0640-\u065E\u0660-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u076D\u0780-\u07B1\u0901-\u0939\u093C-\u094D\u0950-\u0954\u0958-\u0963\u0966-\u096F\u097D\u0981-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A59-\u0A5C\u0A5E\u0A66-\u0A74\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B43\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C01-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C60\u0C61\u0C66-\u0C6F\u0C82\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D3E-\u0D43\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D60\u0D61\u0D66-\u0D6F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC\u0EDD\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6A\u0F71-\u0F84\u0F86-\u0F8B\u0F90-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1021\u1023-\u1027\u1029\u102A\u102C-\u1032\u1036-\u1039\u1040-\u1049\u1050-\u1059\u10A0-\u10C5\u10D0-\u10FA\u10FC\u1100-\u1159\u115F-\u11A2\u11A8-\u11F9\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u1676\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17B3\u17B6-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18A9\u1900-\u191C\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19A9\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1D00-\u1DC3\u1E00-\u1E9B\u1EA0-\u1EF9\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u2094\u20D0-\u20DC\u20E1\u20E5-\u20EB\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2131\u2133-\u2139\u213C-\u213F\u2145-\u2149\u2160-\u2183\u2C00-\u2C2E\u2C30-\u2C5E\u2C80-\u2CE4\u2D00-\u2D25\u2D30-\u2D65\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312C\u3131-\u318E\u31A0-\u31B7\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FBB\uA000-\uA48C\uA800-\uA827\uAC00-\uD7A3\uF900-\uFA2D\uFA30-\uFA6A\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE23\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDF00-\uDF1E\uDF30-\uDF4A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCE-\uDFFF]|[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/;
                        TokenDefinitions.UNICODE_START_COMMON = {
                            36: t    /* $ */,
                            92: t    /* \ */,
                            95: t    /* _ */,
                            65: t,
                            66: t,
                            67: t,
                            68: t,
                            69: t,
                            70: t,
                            71: t,
                            72: t,
                            73: t,
                            74: t,
                            75: t,
                            76: t,
                            77: t,
                            78: t,
                            79: t,
                            80: t,
                            81: t,
                            82: t,
                            83: t,
                            84: t,
                            85: t,
                            86: t,
                            87: t,
                            88: t,
                            89: t,
                            90: t,
                            97: t,
                            98: t,
                            99: t,
                            100: t,
                            101: t,
                            102: t,
                            103: t,
                            104: t,
                            105: t,
                            106: t,
                            107: t,
                            108: t,
                            109: t,
                            110: t,
                            111: t,
                            112: t,
                            113: t,
                            114: t,
                            115: t,
                            116: t,
                            117: t,
                            118: t,
                            119: t,
                            120: t,
                            121: t,
                            122: t
                        };
                        TokenDefinitions.UNICODE_START_UNCOMMON = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u0241\u0250-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EE\u037A\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03CE\u03D0-\u03F5\u03F7-\u0481\u048A-\u04CE\u04D0-\u04F9\u0500-\u050F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0621-\u063A\u0640-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u076D\u0780-\u07A5\u07B1\u0904-\u0939\u093D\u0950\u0958-\u0961\u097D\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D60\u0D61\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC\u0EDD\u0F00\u0F40-\u0F47\u0F49-\u0F6A\u0F88-\u0F8B\u1000-\u1021\u1023-\u1027\u1029\u102A\u1050-\u1055\u10A0-\u10C5\u10D0-\u10FA\u10FC\u1100-\u1159\u115F-\u11A2\u11A8-\u11F9\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u1676\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19A9\u19C1-\u19C7\u1A00-\u1A16\u1D00-\u1DBF\u1E00-\u1E9B\u1EA0-\u1EF9\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u2094\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2131\u2133-\u2139\u213C-\u213F\u2145-\u2149\u2160-\u2183\u2C00-\u2C2E\u2C30-\u2C5E\u2C80-\u2CE4\u2D00-\u2D25\u2D30-\u2D65\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312C\u3131-\u318E\u31A0-\u31B7\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FBB\uA000-\uA48C\uA800\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uAC00-\uD7A3\uF900-\uFA2D\uFA30-\uFA6A\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDF00-\uDF1E\uDF30-\uDF4A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFC9]|[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6]|\uD87E[\uDC00-\uDE1D]/;
                        return TokenDefinitions;
                    }();
                    lexical.TokenDefinitions = TokenDefinitions;
                }(lexical = frontend.lexical || (frontend.lexical = {})));
            }(frontend = trl.frontend || (trl.frontend = {})));
        }(trl || (trl = {})));
        /// <reference path="../../../tsDefinitions/tsd.d.ts" />
        /// <reference path="../CharPoints.ts" />
        /// <reference path="TokenDefinitions.ts" />
        var trl;
        (function (trl) {
            var frontend;
            (function (frontend) {
                var lexical;
                (function (lexical) {
                    var hexDigits = {};
                    _.each('0123456789ABCDEFabcdef', function (numChar) {
                        hexDigits[frontend.CharPoints.codePointAt(numChar, 0)] = true;
                    });
                    var digits = {};
                    _.each('0123456789', function (numChar) {
                        digits[frontend.CharPoints.codePointAt(numChar, 0)] = true;
                    });
                    var Identifyers = function () {
                        function Identifyers() {
                        }
                        Identifyers.isHexDigit = function (c) {
                            return hexDigits[c];
                        };
                        Identifyers.isDigit = function (c) {
                            return digits[c];
                        };
                        Identifyers.isKeyword = function (str) {
                            // When str contains a value like 'toString', 
                            // KW has conflict and returns the function toString
                            return _.has(lexical.TokenDefinitions.KW, str);
                        };
                        Identifyers.isLineTerminator = function (c) {
                            return lexical.TokenDefinitions.LT[c];
                        };
                        Identifyers.isIdentifierStart = function (c) {
                            return Identifyers.isSimpleUnicodeStart(c) || Identifyers.isComplexUnicodeStart(c);
                        };
                        Identifyers.isIdentifierPart = function (c) {
                            return Identifyers.isSimpleUnicodeContinue(c) || Identifyers.isComplexUnicodeContinue(c);
                        };
                        Identifyers.isSimpleUnicodeContinue = function (c) {
                            return lexical.TokenDefinitions.UNICODE_CONTINUE_COMMON[c];
                        };
                        Identifyers.isComplexUnicodeContinue = function (c) {
                            return c > lexical.TokenDefinitions.UNICODE_UNCOMMON_THRESHOLD && lexical.TokenDefinitions.UNICODE_CONTINUE_UNCOMMON.test(frontend.CharPoints.fromCodePoint(c));
                        };
                        Identifyers.isSimpleUnicodeStart = function (c) {
                            return lexical.TokenDefinitions.UNICODE_START_COMMON[c];
                        };
                        Identifyers.isComplexUnicodeStart = function (c) {
                            return c > lexical.TokenDefinitions.UNICODE_UNCOMMON_THRESHOLD && lexical.TokenDefinitions.UNICODE_START_UNCOMMON.test(frontend.CharPoints.fromCodePoint(c));
                        };
                        Identifyers.isPunctuationStart = function (c) {
                            return lexical.TokenDefinitions.PNC_SINGLE[c];
                        };
                        return Identifyers;
                    }();
                    lexical.Identifyers = Identifyers;
                }(lexical = frontend.lexical || (frontend.lexical = {})));
            }(frontend = trl.frontend || (trl.frontend = {})));
        }(trl || (trl = {})));
        /// <reference path="../../../tsDefinitions/tsd.d.ts" />
        /// <reference path="../IException.d.ts" />
        /// <reference path="../CharPoints.ts" />
        /// <reference path="ILexer.ts" />
        /// <reference path="TokenDefinitions.ts" />
        /// <reference path="Identifyers.ts" />
        var trl;
        (function (trl) {
            var frontend;
            (function (frontend) {
                var lexical;
                (function (lexical) {
                    var States = {
                        identifier: 'stateIdentifier',
                        punctuation: 'statePunctuation',
                        multiComment: 'stateMultiComment',
                        singleComment: 'stateSingleComment',
                        divOrComment: 'stateDivOrComment',
                        dotOrNumber: 'stateDotOrNumber',
                        error: 'stateError',
                        finish: 'stateFinish',
                        init: 'stateInit'
                    };
                    var ReadableTokenType = {
                        keyword: 'keyword',
                        identifier: 'identifier',
                        literal: 'literal',
                        punctuation: 'punctuation',
                        comment: 'comment',
                        eof: 'eof',
                        error: 'error'
                    };
                    var ReadableLiteralSubType = {
                        string: 'string',
                        number: 'number',
                        null: 'null',
                        boolean: 'boolean',
                        regex: 'regex'
                    };
                    var toReadableTokenType = function () {
                        var toReadableTokenTypeLookup = {};
                        toReadableTokenTypeLookup[lexical.TokenType.keyword] = ReadableTokenType.keyword;
                        toReadableTokenTypeLookup[lexical.TokenType.identifier] = ReadableTokenType.identifier;
                        toReadableTokenTypeLookup[lexical.TokenType.literal] = ReadableTokenType.literal;
                        toReadableTokenTypeLookup[lexical.TokenType.punctuation] = ReadableTokenType.punctuation;
                        toReadableTokenTypeLookup[lexical.TokenType.comment] = ReadableTokenType.comment;
                        toReadableTokenTypeLookup[lexical.TokenType.eof] = ReadableTokenType.eof;
                        toReadableTokenTypeLookup[lexical.TokenType.error] = ReadableTokenType.error;
                        return function (tokenType) {
                            return toReadableTokenTypeLookup[tokenType];
                        };
                    }();
                    var toReadableLiteralSubType = function () {
                        var toReadableLiteralSubTypeLookup = {};
                        toReadableLiteralSubTypeLookup[lexical.LiteralSubType.string] = ReadableLiteralSubType.string;
                        toReadableLiteralSubTypeLookup[lexical.LiteralSubType.number] = ReadableLiteralSubType.number;
                        toReadableLiteralSubTypeLookup[lexical.LiteralSubType.null] = ReadableLiteralSubType.null;
                        toReadableLiteralSubTypeLookup[lexical.LiteralSubType.boolean] = ReadableLiteralSubType.boolean;
                        toReadableLiteralSubTypeLookup[lexical.LiteralSubType.regex] = ReadableLiteralSubType.regex;
                        return function (literalSubType) {
                            return toReadableLiteralSubTypeLookup[literalSubType];
                        };
                    }();
                    var PNC = lexical.TokenDefinitions.PNC_SINGLE;
                    var Lexer = function () {
                        function Lexer(charStream, exceptionHandler, options) {
                            this.charStream = charStream;
                            this.exceptionHandler = exceptionHandler;
                            this.options = options;
                            this.options = _.defaults(_.clone(options || {}), Lexer.defaultLexerOptions);
                            this.lineno = 1;
                            this.currLineCursor = 0;
                            this.comments = [];
                            Lexer.initiateCharecterLookupOnce();
                        }
                        Lexer.initiateCharecterLookupOnce = function () {
                            if (Lexer.CharecterLookup) {
                                return;
                            }
                            var lookup = Lexer.CharecterLookup = {};
                            //white space
                            _.each(lexical.TokenDefinitions.WS, function (val, key) {
                                return lookup[key] = Lexer.prototype.stateWhiteSpace;
                            });
                            //new line
                            _.each(lexical.TokenDefinitions.LT, function (val, key) {
                                return lookup[key] = Lexer.prototype.stateLineTerminator;
                            });
                            //string
                            lookup[PNC.qmark] = Lexer.genStateString(PNC.qmark);
                            lookup[PNC.apostrophe] = Lexer.genStateString(PNC.apostrophe);
                            //number
                            _.each('0123456789', function (numChar) {
                                return lookup[frontend.CharPoints.codePointAt(numChar, 0)] = Lexer.prototype.stateNumber;
                            });
                            // {
                            lookup[PNC.lbrace] = Lexer.prototype.statePunctuationSingle;
                            // }
                            lookup[PNC.rbrace] = Lexer.prototype.statePunctuationSingle;
                            // (
                            lookup[PNC.lparenth] = Lexer.prototype.statePunctuationSingle;
                            // )
                            lookup[PNC.rparenth] = Lexer.prototype.statePunctuationSingle;
                            // [
                            lookup[PNC.lbracket] = Lexer.prototype.statePunctuationSingle;
                            // ]
                            lookup[PNC.rbracket] = Lexer.prototype.statePunctuationSingle;
                            // . .1
                            lookup[PNC.dot] = function () {
                                return States.dotOrNumber;
                            };
                            // :
                            lookup[PNC.semicolon] = Lexer.prototype.statePunctuationSingle;
                            // ,
                            lookup[PNC.comma] = Lexer.prototype.statePunctuationSingle;
                            // < << <= <<< <<=
                            lookup[PNC.less] = Lexer.genPunctuationScanner([
                                [PNC.less],
                                [PNC.assign],
                                [
                                    PNC.less,
                                    PNC.less
                                ],
                                [
                                    PNC.less,
                                    PNC.assign
                                ]
                            ]);
                            // > >= >> >>= >>> >>>=
                            lookup[PNC.more] = Lexer.genPunctuationScanner([
                                [PNC.more],
                                [PNC.assign],
                                [
                                    PNC.more,
                                    PNC.more
                                ],
                                [
                                    PNC.more,
                                    PNC.assign
                                ],
                                [
                                    PNC.more,
                                    PNC.more,
                                    PNC.assign
                                ]
                            ]);
                            // ! != !==
                            lookup[PNC.excl] = Lexer.genPunctuationScanner([
                                [PNC.assign],
                                [
                                    PNC.assign,
                                    PNC.assign
                                ]
                            ]);
                            // - -- -=
                            lookup[PNC.minus] = Lexer.genPunctuationScanner([
                                [PNC.minus],
                                [PNC.assign]
                            ]);
                            // + ++ +-=
                            lookup[PNC.plus] = Lexer.genPunctuationScanner([
                                [PNC.plus],
                                [PNC.assign]
                            ]);
                            // % %=
                            lookup[PNC.percent] = Lexer.genPunctuationScanner([[PNC.assign]]);
                            // & && &=
                            lookup[PNC.ampersand] = Lexer.genPunctuationScanner([
                                [PNC.ampersand],
                                [PNC.assign]
                            ]);
                            // | || |=
                            lookup[PNC.vertical] = Lexer.genPunctuationScanner([
                                [PNC.vertical],
                                [PNC.assign]
                            ]);
                            // ^ ^=
                            lookup[PNC.caret] = Lexer.genPunctuationScanner([[PNC.assign]]);
                            // ~
                            lookup[PNC.tilde] = Lexer.prototype.statePunctuationSingle;
                            // ?
                            lookup[PNC.quest] = Lexer.prototype.statePunctuationSingle;
                            // :
                            lookup[PNC.colon] = Lexer.prototype.statePunctuationSingle;
                            // = == ===
                            lookup[PNC.assign] = Lexer.genPunctuationScanner([
                                [PNC.assign],
                                [
                                    PNC.assign,
                                    PNC.assign
                                ]
                            ]);
                            // * *=
                            lookup[PNC.asterisk] = Lexer.genPunctuationScanner([[PNC.assign]]);
                            // / /= /* // comment
                            lookup[PNC.slash] = function () {
                                return States.divOrComment;
                            };
                            // \ whitespace
                            lookup[PNC.backslash] = function () {
                                return States.identifier;
                            };
                        };
                        Lexer.prototype.isError = function (token) {
                            return this.options.readableTokensMode ? token.type === ReadableTokenType.error : token.type === lexical.TokenType.error;
                        };
                        Lexer.prototype.isEof = function (token) {
                            return this.options.readableTokensMode ? token.type === ReadableTokenType.eof : token.type === lexical.TokenType.eof;
                        };
                        Lexer.prototype.isComment = function (token) {
                            return this.options.readableTokensMode ? token.type === ReadableTokenType.comment : token.type === lexical.TokenType.comment;
                        };
                        Lexer.prototype.isLiteral = function (token) {
                            return this.options.readableTokensMode ? token.type === ReadableTokenType.literal : token.type === lexical.TokenType.literal;
                        };
                        Lexer.prototype.isPunctuation = function (token) {
                            return this.options.readableTokensMode ? token.type === ReadableTokenType.punctuation : token.type === lexical.TokenType.punctuation;
                        };
                        Lexer.prototype.isKeyword = function (token) {
                            return this.options.readableTokensMode ? token.type === ReadableTokenType.keyword : token.type === lexical.TokenType.keyword;
                        };
                        Lexer.prototype.isIdentifier = function (token) {
                            return this.options.readableTokensMode ? token.type === ReadableTokenType.identifier : token.type === lexical.TokenType.identifier;
                        };
                        Lexer.prototype.isPunctuationValue = function (token, value) {
                            return this.isPunctuation(token) && token.value === value;
                        };
                        Lexer.prototype.isKeywordValue = function (token, value) {
                            return this.isKeyword(token) && token.value === value;
                        };
                        Lexer.prototype.isIdentifierValue = function (token, value) {
                            return this.isIdentifier(token) && token.value === value;
                        };
                        Lexer.prototype.matchType = function (value, typeMatcher) {
                            var token = this.lookAheadNextToken();
                            if (typeMatcher.call(this, token, value)) {
                                this.nextToken();
                                return true;
                            }
                            return false;
                        };
                        Lexer.prototype.matchPunctuation = function (value) {
                            return this.matchType(value, this.isPunctuationValue);
                        };
                        Lexer.prototype.matchKeyword = function (value) {
                            return this.matchType(value, this.isKeywordValue);
                        };
                        Lexer.prototype.reinterpretLastTokenAsRegex = function (token) {
                            trl.utilities.assert(this.isPunctuationValue(token, '/') || this.isPunctuationValue(token, '/='));
                            this.lookAheadToken = undefined;
                            this.charStream.bwdCursorRange(token.value.length);
                            return this.beginFromStateRegex();
                        };
                        Lexer.prototype.nextToken = function () {
                            var lookAheadToken = this.lookAheadToken;
                            if (lookAheadToken) {
                                this.lookAheadToken = undefined;
                                return this.currentToken = lookAheadToken;
                            }
                            var nextToken = this.beginFromStateInit();
                            if (this.isComment(nextToken)) {
                                if (this.options.includeCommentsAsNormalTokens) {
                                    this.comments.push(nextToken);
                                } else {
                                    do {
                                        this.comments.push(nextToken);
                                        nextToken = this.beginFromStateInit();
                                    } while (this.isComment(nextToken));
                                }
                            }
                            return nextToken;
                        };
                        Lexer.prototype.startStateEngine = function (nextState) {
                            while (nextState) {
                                nextState = this[nextState].call(this);
                            }
                            if (this.options.readableTokensMode) {
                                this.translateReadableTokens();
                            }
                            return this.currentToken = this.token;
                        };
                        Lexer.prototype.translateReadableTokens = function () {
                            this.token.type = toReadableTokenType(this.token.type);
                            if (this.token.subType) {
                                this.token.subType = toReadableLiteralSubType(this.token.subType);
                            }
                        };
                        Lexer.prototype.beginFromStateInit = function () {
                            var nextState = this.stateInit();
                            return this.startStateEngine(nextState);
                        };
                        Lexer.prototype.beginFromStateRegex = function () {
                            this.cleanupContext();
                            var nextState = this.stateRegex();
                            return this.startStateEngine(nextState);
                        };
                        Lexer.prototype.cleanupContext = function () {
                            //cleanup current token
                            this.token = undefined;
                            //track cursor position
                            this.startLineno = this.lineno;
                            this.relativeStartCursor = this.charStream.getCursor() - this.currLineCursor;
                            this.absoluteStartCursor = this.charStream.getCursor();
                        };
                        Lexer.prototype.latestToken = function () {
                            return this.currentToken;
                        };
                        Lexer.prototype.lookAheadNextToken = function () {
                            var currentToken = this.currentToken;
                            this.lookAheadToken = this.nextToken();
                            this.currentToken = currentToken;
                            return this.lookAheadToken;
                        };
                        Lexer.prototype.hasNext = function () {
                            var token = this.lookAheadNextToken();
                            return !this.isEof(token) && !this.isError(token);
                        };
                        Lexer.prototype.getComments = function () {
                            return this.comments;
                        };
                        Lexer.prototype.getCurrentCursorPos = function () {
                            return {
                                line: this.lineno,
                                column: this.charStream.getCursor() - this.currLineCursor
                            };
                        };
                        ///////////////////////////
                        // final states
                        Lexer.prototype.stateFinish = function () {
                        };
                        Lexer.prototype.stateError = function () {
                            this.token = this.createTokenFromPos(lexical.TokenType.error);
                        };
                        /////// final states //////
                        ///////////////////////////////////////////
                        // States
                        Lexer.prototype.stateInit = function () {
                            this.cleanupContext();
                            if (this.charStream.isEof()) {
                                this.token = this.createToken(lexical.TokenType.eof, undefined);
                                return States.finish;
                            }
                            var nextState, char = this.charStream.getNextChar();
                            if (lexical.Identifyers.isIdentifierStart(char)) {
                                this.charStream.bwdCursor();
                                nextState = States.identifier;
                            } else {
                                var charCachedHandler = Lexer.CharecterLookup[char];
                                if (charCachedHandler) {
                                    this.charStream.bwdCursor();
                                    nextState = charCachedHandler.call(this);
                                } else if (char !== undefined) {
                                    nextState = this.unexpectedChar();
                                }
                            }
                            return nextState;
                        };
                        Lexer.prototype.stateIdentifier = function () {
                            var charGen = frontend.CharPoints.createStringFromCharPointGenerator(), char = this.charStream.getNextChar();
                            if (!this.scanUnicodeEscapeSequence(charGen, char)) {
                                return this.unexpectedChar();
                            }
                            while (true) {
                                var char_1 = this.charStream.getNextChar();
                                if (lexical.Identifyers.isIdentifierPart(char_1)) {
                                    if (!this.scanUnicodeEscapeSequence(charGen, char_1)) {
                                        return this.unexpectedChar();
                                    }
                                } else {
                                    if (char_1 !== undefined) {
                                        this.charStream.bwdCursor();
                                    }
                                    break;
                                }
                            }
                            var type, subType, str = charGen.getString();
                            if (lexical.Identifyers.isKeyword(str)) {
                                type = lexical.TokenType.keyword;
                            } else {
                                switch (str) {
                                case 'null':
                                    type = lexical.TokenType.literal;
                                    subType = lexical.LiteralSubType.null;
                                    str = null;
                                    break;
                                case 'true':
                                    type = lexical.TokenType.literal;
                                    subType = lexical.LiteralSubType.boolean;
                                    str = true;
                                    break;
                                case 'false':
                                    type = lexical.TokenType.literal;
                                    subType = lexical.LiteralSubType.boolean;
                                    str = false;
                                    break;
                                default:
                                    type = lexical.TokenType.identifier;
                                }
                            }
                            this.token = this.createToken(type, str, subType);
                            return States.finish;
                        };
                        Lexer.genStateString = function (stringTerminatorChar) {
                            // esc seq ->
                            // \ ' " \ b f n r t v  -> val
                            // \ x HexDigit HexDigit  -> hex val
                            // \ u HexDigit HexDigit HexDigit HexDigit -> u val
                            // \ line cont -> ignore
                            // \ decimal digit -> ignore digit
                            // \ char -> ignore \
                            // cannot be an arrow function because it binds _this -> this
                            return function () {
                                this.charStream.getNextChar();
                                var charGen = frontend.CharPoints.createStringFromCharPointGenerator();
                                while (true) {
                                    var char = this.charStream.getNextChar();
                                    if (char === stringTerminatorChar) {
                                        break;
                                    } else if (char === PNC.backslash) {
                                        char = this.charStream.getNextChar();
                                        switch (char) {
                                        case PNC.b:
                                            charGen.addCharPoint(8);
                                            break;
                                        case PNC.f:
                                            charGen.addCharPoint(12);
                                            break;
                                        case PNC.n:
                                            charGen.addCharPoint(10);
                                            break;
                                        case PNC.r:
                                            charGen.addCharPoint(13);
                                            break;
                                        case PNC.t:
                                            charGen.addCharPoint(9);
                                            break;
                                        case PNC.v:
                                            charGen.addCharPoint(11);
                                            break;
                                        case PNC.x:
                                            if (!this.handleScangits(2, charGen)) {
                                                return States.error;
                                            }
                                            break;
                                        case PNC.u:
                                            if (!this.handleScanHexDigits(4, charGen)) {
                                                return States.error;
                                            }
                                            break;
                                        default: {
                                                if (lexical.Identifyers.isLineTerminator(char)) {
                                                    charGen.addCharPoint(char);
                                                    this.handleNewLine();
                                                }
                                            }
                                        }
                                    } else if (char === undefined) {
                                        return this.unexpectedChar('unclosed string');
                                    } else {
                                        charGen.addCharPoint(char);
                                    }
                                }
                                this.token = this.createToken(lexical.TokenType.literal, charGen.getString(), lexical.LiteralSubType.string);
                                return States.finish;
                            };
                        };
                        Lexer.prototype.stateNumber = function () {
                            if (this.charStream.match(PNC.zero)) {
                                if (this.charStream.match(PNC.x)) {
                                    var hexNum = this.scanHexDigits();
                                    if (hexNum === undefined) {
                                        return this.unexpectedChar();
                                    }
                                    this.token = this.createToken(lexical.TokenType.literal, hexNum, lexical.LiteralSubType.number);
                                    return States.finish;
                                }
                                this.charStream.bwdCursor();
                            }
                            var int = this.scanDigits(), point = int.length;
                            if (this.charStream.match(PNC.dot)) {
                                var decimal = this.scanDecimal();
                                if (decimal !== undefined) {
                                    int = int.concat(decimal);
                                }
                            }
                            return this.scanExponensialAndCreateNumber(int, point);
                        };
                        Lexer.prototype.stateDotOrNumber = function () {
                            this.charStream.fwdCursor();
                            var decimal = this.scanDecimal();
                            if (decimal !== undefined) {
                                return this.scanExponensialAndCreateNumber(decimal, 0);
                            } else {
                                this.charStream.bwdCursor();
                                return this.statePunctuationSingle();
                            }
                        };
                        Lexer.prototype.stateDivOrComment = function () {
                            this.charStream.fwdCursor();
                            var char = this.charStream.getNextChar();
                            switch (char) {
                            case PNC.slash:
                                return States.singleComment;
                                break;
                            case PNC.asterisk:
                                return States.multiComment;
                                break;
                            case PNC.assign:
                                break;
                            default:
                                this.charStream.bwdCursor();
                            }
                            this.charStream.bwdCursor();
                            return this.statePunctuationSingle();
                        };
                        Lexer.prototype.statePunctuationSingle = function () {
                            this.charStream.fwdCursor();
                            this.token = this.createTokenFromPos(lexical.TokenType.punctuation);
                            return States.finish;
                        };
                        Lexer.prototype.stateWhiteSpace = function () {
                            this.charStream.fwdCursor();
                            return States.init;
                        };
                        Lexer.prototype.stateLineTerminator = function () {
                            var char = this.charStream.getNextChar();
                            this.charStream.matchComplex(function (nextchar) {
                                return char === PNC.cr && nextchar === PNC.lf || nextchar === undefined;
                            });
                            this.handleNewLine();
                            return States.init;
                        };
                        Lexer.prototype.stateSingleComment = function () {
                            do {
                                var char = this.charStream.getNextChar();
                                if (lexical.Identifyers.isLineTerminator(char)) {
                                    this.handleNewLine();
                                    break;
                                }
                            } while (char !== undefined);
                            this.token = this.createTokenFromPos(lexical.TokenType.comment);
                            return States.finish;
                        };
                        Lexer.prototype.stateMultiComment = function () {
                            while (true) {
                                var char = this.charStream.getNextChar();
                                if (char === PNC.asterisk) {
                                    if (this.charStream.match(PNC.slash)) {
                                        break;
                                    }
                                }
                                if (char === undefined) {
                                    return this.unexpectedChar('unclosed string');
                                } else if (lexical.Identifyers.isLineTerminator(char)) {
                                    this.handleNewLine();
                                }
                            }
                            this.token = this.createTokenFromPos(lexical.TokenType.comment);
                            return States.finish;
                        };
                        Lexer.prototype.scanUnicodeEscapeSequence = function (charGen, char) {
                            if (char === PNC.backslash) {
                                char = this.charStream.getNextChar();
                                if (char === PNC.u) {
                                    var hexDigit = this.scanHexDigitsTimes(4);
                                    if (hexDigit === undefined) {
                                        return false;
                                    } else {
                                        charGen.addCharPoint(hexDigit);
                                    }
                                } else {
                                    return false;
                                }
                            } else {
                                charGen.addCharPoint(char);
                            }
                            return true;
                        };
                        Lexer.prototype.stateRegex = function () {
                            var charGen = frontend.CharPoints.createStringFromCharPointGenerator();
                            var char = this.charStream.getNextChar();
                            charGen.addCharPoint(char);
                            var regexBodyHasMoreChars = true;
                            var inClass = false;
                            while (regexBodyHasMoreChars) {
                                char = this.charStream.getNextChar();
                                if (char === undefined) {
                                    return this.unexpectedChar('Invalid regular expression');
                                }
                                charGen.addCharPoint(char);
                                switch (char) {
                                case PNC.backslash:
                                    char = this.charStream.getNextChar();
                                    if (char === undefined || lexical.Identifyers.isLineTerminator(char)) {
                                        return this.unexpectedChar('Invalid regular expression');
                                    }
                                    charGen.addCharPoint(char);
                                    break;
                                case PNC.lbracket:
                                    inClass = true;
                                    break;
                                case PNC.rbracket:
                                    if (inClass) {
                                        inClass = false;
                                    }
                                    break;
                                case PNC.slash:
                                    regexBodyHasMoreChars = false;
                                    break;
                                default:
                                    if (char === undefined || lexical.Identifyers.isLineTerminator(char)) {
                                        return this.unexpectedChar();
                                    }
                                }
                            }
                            while (true) {
                                char = this.charStream.getNextChar();
                                if (lexical.Identifyers.isIdentifierPart(char)) {
                                    charGen.addCharPoint(char);
                                } else {
                                    if (char !== undefined) {
                                        this.charStream.bwdCursor();
                                    }
                                    break;
                                }
                            }
                            //this.charStream.bwdCursor();
                            this.token = this.createToken(lexical.TokenType.literal, charGen.getString(), lexical.LiteralSubType.regex);
                            return States.finish;
                        };
                        ///////////////////States//////////////////
                        ///////////////////////////////////////////
                        // Scanners
                        Lexer.prototype.scanExponensialAndCreateNumber = function (int, point) {
                            var exp = this.scanExponential();
                            if (exp === undefined) {
                                return States.error;
                            }
                            if (this.charStream.matchComplex(function (char) {
                                    return lexical.Identifyers.isIdentifierPart(char);
                                })) {
                                return this.unexpectedChar();
                            }
                            var num = this.createNumber(int, point, exp);
                            this.token = this.createToken(lexical.TokenType.literal, num, lexical.LiteralSubType.number);
                            return States.finish;
                        };
                        Lexer.prototype.scanDigits = function () {
                            var char, dits = [], cursorPos = this.charStream.getCursor();
                            while (true) {
                                char = this.charStream.getNextChar();
                                if (lexical.Identifyers.isDigit(char)) {
                                    var digit = frontend.CharPoints.getDigitFromCharPoint(char);
                                    dits.push(digit);
                                } else {
                                    break;
                                }
                            }
                            if (char !== undefined) {
                                this.charStream.bwdCursor();
                            }
                            var currCursorpos = this.charStream.getCursor();
                            if (currCursorpos - cursorPos !== 0) {
                                return dits;
                            }
                        };
                        Lexer.prototype.scanDecimal = function () {
                            var startPos = this.charStream.getCursor(), digits = this.scanDigits(), endPos = this.charStream.getCursor(), digitRange = endPos - startPos;
                            if (digitRange !== 0) {
                                return digits;
                            }
                        };
                        Lexer.prototype.scanExponential = function () {
                            var char = this.charStream.getNextChar();
                            if (char === PNC.exp || char === PNC.expb) {
                                char = this.charStream.getNextChar();
                                var negative;
                                if (char === PNC.minus) {
                                    negative = true;
                                } else if (char !== PNC.plus) {
                                    this.charStream.bwdCursor();
                                }
                                var digits = this.scanDigits();
                                if (digits === undefined) {
                                    this.unexpectedChar('exponential should postfixed by numbers');
                                    return;
                                }
                                var num = this.createNumber(digits, digits.length, 0);
                                return negative ? -num : num;
                            } else if (char !== undefined) {
                                this.charStream.bwdCursor();
                            }
                            return 0;
                        };
                        Lexer.prototype.scanHexDigitsTimes = function (times) {
                            var startingPos = times;
                            do {
                                var char = this.charStream.getNextChar();
                                if (!lexical.Identifyers.isHexDigit(char)) {
                                    this.charStream.bwdCursorRange(startingPos - (times - 1));
                                    return;
                                }
                            } while (--times);
                            var cursorPos = this.charStream.getCursor(), hexStr = this.charStream.tokenize(cursorPos - startingPos);
                            return parseInt(hexStr, 16);
                        };
                        Lexer.prototype.scanHexDigits = function () {
                            var char = this.charStream.getNextChar();
                            var hexLen = 0;
                            while (lexical.Identifyers.isHexDigit(char)) {
                                ++hexLen;
                                char = this.charStream.getNextChar();
                            }
                            if (hexLen === 0) {
                                return;
                            } else if (char !== undefined) {
                                this.charStream.bwdCursor();
                            }
                            var cursorPos = this.charStream.getCursor(), hexStr = this.charStream.tokenize(cursorPos - hexLen);
                            return parseInt(hexStr, 16);
                        };
                        Lexer.genPunctuationScanner = function (candicatePuncs) {
                            var lastLen = _.last(candicatePuncs).length, puncsLookup = _.map(new Array(lastLen), function () {
                                    return new Object();
                                });
                            for (var curr = lastLen - 1; curr !== -1; --curr) {
                                for (var i = candicatePuncs.length - 1; i !== -1; --i) {
                                    var c = candicatePuncs[i][curr];
                                    if (c) {
                                        puncsLookup[curr][c] = true;
                                    } else {
                                        break;
                                    }
                                }
                            }
                            // cannot use arrow function because it confuse this with _this 
                            // in the compliled typescript version
                            return function () {
                                this.charStream.fwdCursor();
                                for (var i = 0; i < lastLen; ++i) {
                                    var char = this.charStream.getNextChar();
                                    if (!puncsLookup[i][char]) {
                                        if (char !== undefined) {
                                            this.charStream.bwdCursor();
                                        }
                                        break;
                                    }
                                }
                                this.token = this.createTokenFromPos(lexical.TokenType.punctuation, this.startPos);
                                return States.finish;
                            };
                        };
                        ///////////////Scanners////////////////
                        ///////////////////////////////////////////
                        // Lex object creators
                        Lexer.prototype.createTokenSourceLocationFromCursor = function () {
                            return TokenSourceLocation.create({
                                line: this.startLineno,
                                column: this.relativeStartCursor
                            }, this.getCurrentCursorPos());
                        };
                        Lexer.prototype.createTokenFromPos = function (type, subType) {
                            var value = this.charStream.tokenize(this.absoluteStartCursor);
                            return this.createToken(type, value, subType);
                        };
                        Lexer.prototype.createToken = function (type, value, subType) {
                            var token = {
                                type: type,
                                value: value,
                                subType: subType
                            };
                            if (this.options.loc) {
                                token.loc = this.createTokenSourceLocationFromCursor();
                            }
                            return token;
                        };
                        //////////////Lex object creators/////////////////
                        ///////////////////////////////////////////
                        // Handlers
                        Lexer.prototype.genIntegerFromArray = function (digits, from, to) {
                            var num = 0;
                            for (var i = from; i < to; ++i) {
                                num = 10 * num + digits[i];
                            }
                            return num;
                        };
                        Lexer.prototype.createNumber = function (digits, point, exp) {
                            var startPoint = point + exp, intPart = 0, decPart = 0;
                            if (startPoint < 0) {
                                var num = this.genIntegerFromArray(digits, 0, digits.length);
                                return num / Math.pow(10, point - exp);
                            } else if (startPoint > digits.length) {
                                var num = this.genIntegerFromArray(digits, 0, digits.length);
                                return num * Math.pow(10, startPoint - digits.length);
                            } else {
                                var num = this.genIntegerFromArray(digits, 0, startPoint), dec = this.genIntegerFromArray(digits, startPoint, digits.length);
                                return num + dec / Math.pow(10, digits.length - startPoint);
                            }
                        };
                        Lexer.prototype.handleScanHexDigits = function (num, charGen) {
                            var hexDigit = this.scanHexDigitsTimes(num);
                            if (hexDigit === undefined) {
                                this.unexpectedChar();
                                return false;
                            } else {
                                charGen.addCharPoint(hexDigit);
                            }
                            return true;
                        };
                        Lexer.prototype.handleNewLine = function () {
                            ++this.lineno;
                            this.currLineCursor = this.charStream.getCursor();
                        };
                        Lexer.prototype.unexpectedChar = function (msg) {
                            msg = msg || this.charStream.tokenize(this.charStream.getCursor() - 1);
                            this.exceptionHandler.addException(msg, this.lineno, this.charStream.getCursor());
                            return States.error;
                        };
                        Lexer.defaultLexerOptions = {
                            loc: false,
                            readableTokensMode: true,
                            includeCommentsAsNormalTokens: true
                        };
                        return Lexer;
                    }();
                    lexical.Lexer = Lexer;
                    var TokenSourceLocation = function () {
                        function TokenSourceLocation() {
                        }
                        TokenSourceLocation.create = function (start, end) {
                            return {
                                start: start,
                                end: end
                            };
                        };
                        return TokenSourceLocation;
                    }();
                    lexical.TokenSourceLocation = TokenSourceLocation;
                }(lexical = frontend.lexical || (frontend.lexical = {})));
            }(frontend = trl.frontend || (trl.frontend = {})));
        }(trl || (trl = {})));
        /// <reference path="../../../tsDefinitions/tsd.d.ts" />
        /// <reference path="../CharPoints.ts" />
        /// <reference path="ICharacterStream.d.ts" />
        var trl;
        (function (trl) {
            var frontend;
            (function (frontend) {
                var lexical;
                (function (lexical) {
                    var CharacterStream = function () {
                        function CharacterStream(src) {
                            this.src = src;
                            this.cursor = 0;
                        }
                        CharacterStream.prototype.getNextChar = function () {
                            if (this.hasNext()) {
                                return frontend.CharPoints.codePointAt(this.src, this.cursor++);
                            }
                        };
                        CharacterStream.prototype.getChar = function () {
                            return frontend.CharPoints.codePointAt(this.src, this.cursor);
                        };
                        CharacterStream.prototype.getCursor = function () {
                            return this.cursor;
                        };
                        CharacterStream.prototype.bwdCursor = function () {
                            --this.cursor;
                        };
                        CharacterStream.prototype.fwdCursor = function () {
                            if (this.hasNext()) {
                                ++this.cursor;
                            }
                        };
                        CharacterStream.prototype.bwdCursorRange = function (range) {
                            this.cursor = Math.max(this.cursor - range, 0);
                        };
                        CharacterStream.prototype.tokenize = function (startPos) {
                            return this.src.substring(startPos, this.cursor);
                        };
                        CharacterStream.prototype.match = function (charMatch) {
                            var char = this.getNextChar();
                            if (char === charMatch) {
                                return true;
                            } else {
                                if (char !== undefined) {
                                    this.bwdCursor();
                                }
                                return false;
                            }
                        };
                        CharacterStream.prototype.matchComplex = function (comparator) {
                            var char = this.getNextChar();
                            if (comparator(char)) {
                                return true;
                            } else {
                                if (char !== undefined) {
                                    this.bwdCursor();
                                }
                                return false;
                            }
                        };
                        CharacterStream.prototype.isEof = function () {
                            return this.cursor >= this.src.length;
                        };
                        CharacterStream.prototype.hasNext = function () {
                            return this.cursor < this.src.length;
                        };
                        return CharacterStream;
                    }();
                    lexical.CharacterStream = CharacterStream;
                }(lexical = frontend.lexical || (frontend.lexical = {})));
            }(frontend = trl.frontend || (trl.frontend = {})));
        }(trl || (trl = {})));
        var trl;
        (function (trl) {
            var utilities;
            (function (utilities) {
                function assert(cond, msg) {
                    if (!cond) {
                        throw new Error('Assertion fail: ' + msg);
                    }
                }
                utilities.assert = assert;
            }(utilities = trl.utilities || (trl.utilities = {})));
        }(trl || (trl = {})));
        /// <reference path="../lexical/ILexer.ts" />
        /// <reference path="INode.ts" />
        var trl;
        (function (trl) {
            var frontend;
            (function (frontend) {
                var syntax;
                (function (syntax) {
                    var NodeFactory = function () {
                        function NodeFactory(enablePos) {
                            this.enablePos = enablePos;
                        }
                        NodeFactory.prototype.createNode = function (node, loc) {
                            if (this.enablePos) {
                                node.loc = loc;
                            }
                            return node;
                        };
                        NodeFactory.prototype.createProgram = function (body, loc) {
                            return this.createNode({
                                type: 'Program',
                                body: body
                            }, loc);
                        };
                        NodeFactory.prototype.createStatementEmpty = function (loc) {
                            return this.createNode({ type: 'EmptyStatement' }, loc);
                        };
                        NodeFactory.prototype.createStatementBlock = function (body, loc) {
                            return this.createNode({
                                type: 'BlockStatement',
                                body: body
                            }, loc);
                        };
                        NodeFactory.prototype.createStatementExpression = function (expression, loc) {
                            return this.createNode({
                                type: 'ExpressionStatement',
                                expression: expression
                            }, loc);
                        };
                        NodeFactory.prototype.createStatementIf = function (test, consequent, alternate, loc) {
                            return this.createNode({
                                type: 'IfStatement',
                                test: test,
                                consequent: consequent,
                                alternate: alternate
                            }, loc);
                        };
                        NodeFactory.prototype.createStatementBreak = function (label, loc) {
                            return this.createNode({
                                type: 'BreakStatement',
                                label: label
                            }, loc);
                        };
                        NodeFactory.prototype.createStatementContinue = function (label, loc) {
                            return this.createNode({
                                type: 'ContinueStatement',
                                label: label
                            }, loc);
                        };
                        NodeFactory.prototype.createStatementWith = function (obj, body, loc) {
                            return this.createNode({
                                type: 'WithStatement',
                                obj: obj,
                                body: body
                            }, loc);
                        };
                        NodeFactory.prototype.createStatementSwitch = function (discriminant, cases, loc) {
                            return this.createNode({
                                type: 'SwitchStatement',
                                discriminant: discriminant,
                                cases: cases
                            }, loc);
                        };
                        NodeFactory.prototype.createStatementReturn = function (argument, loc) {
                            return this.createNode({
                                type: 'ReturnStatement',
                                argument: argument
                            }, loc);
                        };
                        NodeFactory.prototype.createStatementLabeled = function (label, body, loc) {
                            return this.createNode({
                                type: 'LabeledStatement',
                                label: label,
                                body: body
                            }, loc);
                        };
                        NodeFactory.prototype.createStatementThrow = function (argument, loc) {
                            return this.createNode({
                                type: 'ThrowStatement',
                                argument: argument
                            }, loc);
                        };
                        NodeFactory.prototype.createStatementTry = function (block, handler, finalizer, loc) {
                            return this.createNode({
                                type: 'TryStatement',
                                block: block,
                                handler: handler,
                                finalizer: finalizer
                            }, loc);
                        };
                        NodeFactory.prototype.createStatementWhile = function (test, body, loc) {
                            return this.createNode({
                                type: 'WhileStatement',
                                test: test,
                                body: body
                            }, loc);
                        };
                        NodeFactory.prototype.createStatementDoWhile = function (body, test, loc) {
                            return this.createNode({
                                type: 'DoWhileStatement',
                                body: body,
                                test: test
                            }, loc);
                        };
                        NodeFactory.prototype.createStatementFor = function (init, test, update, body, loc) {
                            return this.createNode({
                                type: 'ForStatement',
                                init: init,
                                test: test,
                                update: update,
                                body: body
                            }, loc);
                        };
                        NodeFactory.prototype.createStatementForIn = function (left, right, body, each, loc) {
                            return this.createNode({
                                type: 'ForInStatement',
                                left: left,
                                right: right,
                                body: body,
                                each: each
                            }, loc);
                        };
                        NodeFactory.prototype.createStatementDebugger = function (loc) {
                            return this.createNode({
                                type: 'ForInStatement',
                                loc: loc
                            }, loc);
                        };
                        NodeFactory.prototype.createDeclarationFunction = function (id, params, body, loc) {
                            return this.createNode({
                                type: 'FunctionDeclaration',
                                id: id,
                                params: params,
                                body: body
                            }, loc);
                        };
                        NodeFactory.prototype.createDeclarationVariable = function (declarations, loc) {
                            return this.createNode({
                                type: 'VariableDeclaration',
                                declarations: declarations,
                                kind: 'var'
                            }, loc);
                        };
                        NodeFactory.prototype.createVariableDeclarator = function (id, init, loc) {
                            return this.createNode({
                                type: 'VariableDeclarator',
                                id: id,
                                init: init
                            }, loc);
                        };
                        NodeFactory.prototype.createExpressionThis = function (loc) {
                            return this.createNode({
                                type: 'ThisExpression',
                                loc: loc
                            }, loc);
                        };
                        NodeFactory.prototype.createExpressionArray = function (elements, loc) {
                            return this.createNode({
                                type: 'ArrayExpression',
                                elements: elements
                            }, loc);
                        };
                        NodeFactory.prototype.createExpressionObject = function (properties, loc) {
                            return this.createNode({
                                type: 'ObjectExpression',
                                properties: properties
                            }, loc);
                        };
                        NodeFactory.prototype.createObjectProperty = function (key, value, kind, loc) {
                            return this.createNode({
                                type: 'Property',
                                key: key,
                                value: value,
                                kind: kind
                            }, loc);
                        };
                        NodeFactory.prototype.createExpressionFunction = function (id, params, body, loc) {
                            return this.createNode({
                                type: 'FunctionExpression',
                                id: id,
                                params: params,
                                body: body
                            }, loc);
                        };
                        NodeFactory.prototype.createExpressionSequence = function (expressions, loc) {
                            return this.createNode({
                                type: 'SequenceExpression',
                                expressions: expressions
                            }, loc);
                        };
                        NodeFactory.prototype.createExpressionUnary = function (operator, prefix, argument, loc) {
                            return this.createNode({
                                type: 'UnaryExpression',
                                operator: operator,
                                prefix: prefix,
                                argument: argument
                            }, loc);
                        };
                        NodeFactory.prototype.createExpressionBinary = function (operator, left, right, loc) {
                            return this.createNode({
                                type: 'BinaryExpression',
                                operator: operator,
                                left: left,
                                right: right
                            }, loc);
                        };
                        NodeFactory.prototype.createExpressionAssignment = function (operator, left, right, loc) {
                            return this.createNode({
                                type: 'AssignmentExpression',
                                operator: operator,
                                left: left,
                                right: right
                            }, loc);
                        };
                        NodeFactory.prototype.createExpressionUpdate = function (operator, argument, prefix, loc) {
                            return this.createNode({
                                type: 'UpdateExpression',
                                operator: operator,
                                argument: argument,
                                prefix: prefix
                            }, loc);
                        };
                        NodeFactory.prototype.createExpressionLogical = function (operator, left, right, loc) {
                            return this.createNode({
                                type: 'LogicalExpression',
                                operator: operator,
                                left: left,
                                right: right
                            }, loc);
                        };
                        NodeFactory.prototype.createExpressionConditional = function (test, alternate, consequent, loc) {
                            return this.createNode({
                                type: 'ConditionalExpression',
                                test: test,
                                alternate: alternate,
                                consequent: consequent
                            }, loc);
                        };
                        NodeFactory.prototype.createExpressionNew = function (callee, args, loc) {
                            return this.createNode({
                                type: 'NewExpression',
                                callee: callee,
                                arguments: args
                            }, loc);
                        };
                        NodeFactory.prototype.createExpressionCall = function (callee, args, loc) {
                            return this.createNode({
                                type: 'CallExpression',
                                callee: callee,
                                arguments: args
                            }, loc);
                        };
                        NodeFactory.prototype.createExpressionMember = function (object, property, computed, loc) {
                            return this.createNode({
                                type: 'MemberExpression',
                                object: object,
                                property: property,
                                computed: computed
                            }, loc);
                        };
                        NodeFactory.prototype.createSwitchCase = function (test, consequent, loc) {
                            return this.createNode({
                                type: 'SwitchCase',
                                test: test,
                                consequent: consequent
                            }, loc);
                        };
                        NodeFactory.prototype.createCatchClause = function (param, body, loc) {
                            return this.createNode({
                                type: 'CatchClause',
                                param: param,
                                body: body
                            }, loc);
                        };
                        NodeFactory.prototype.createIdentifier = function (name, loc) {
                            return this.createNode({
                                type: 'Identifier',
                                name: name
                            }, loc);
                        };
                        NodeFactory.prototype.createLiteral = function (value, loc) {
                            return this.createNode({
                                type: 'Literal',
                                value: value
                            }, loc);
                        };
                        return NodeFactory;
                    }();
                    syntax.NodeFactory = NodeFactory;
                }(syntax = frontend.syntax || (frontend.syntax = {})));
            }(frontend = trl.frontend || (trl.frontend = {})));
        }(trl || (trl = {})));
        /// <reference path="../../../tsDefinitions/tsd.d.ts" />
        /// <reference path="../lexical/Lexer.ts" />
        /// <reference path="../../utilities/Assertion.ts" />
        /// <reference path="../Exception.ts" />
        /// <reference path="../lexical/CharacterStream.ts" />
        /// <reference path="../lexical/TokenDefinitions.ts" />
        /// <reference path="NodeFactory.ts" />
        /// <reference path="IParser.d.ts" />
        var trl;
        (function (trl) {
            var frontend;
            (function (frontend) {
                var syntax;
                (function (syntax) {
                    var Parser = function () {
                        function Parser(chars, options) {
                            this.options = options;
                            this.options = _.defaults(_.clone(options || {}), Parser.defaultParserOptions);
                            this.nodeFactory = new syntax.NodeFactory(this.options.loc);
                            this.parseException = new frontend.ExceptionHandler();
                            this.charStream = new frontend.lexical.CharacterStream(chars);
                            this.lexException = new frontend.ExceptionHandler();
                            this.lex = new frontend.lexical.Lexer(this.charStream, this.lexException, Parser.lexerOptions);
                            this.inForIn = false;
                            this.inLoopMutex = [0];
                            this.inSwitchMutex = [0];
                            this.inFunctionMutex = 0;
                        }
                        ///////////////////////////////////////////
                        // Context Utilities
                        //iteration mutex
                        Parser.prototype.beginIteration = function () {
                            ++this.inLoopMutex[this.inLoopMutex.length - 1];
                        };
                        Parser.prototype.finishIteration = function () {
                            --this.inLoopMutex[this.inLoopMutex.length - 1];
                        };
                        Parser.prototype.newIterationScope = function () {
                            this.inLoopMutex.push(0);
                        };
                        Parser.prototype.restoreIterationScope = function () {
                            var currIterationMutex = this.inLoopMutex.pop();
                            trl.utilities.assert(currIterationMutex === 0);
                        };
                        Parser.prototype.isOnIteration = function () {
                            return this.inLoopMutex[this.inLoopMutex.length - 1] > 0;
                        };
                        //switch mutex
                        Parser.prototype.beginSwitch = function () {
                            ++this.inSwitchMutex[this.inSwitchMutex.length - 1];
                        };
                        Parser.prototype.finishSwitch = function () {
                            --this.inSwitchMutex[this.inSwitchMutex.length - 1];
                        };
                        Parser.prototype.newSwitchScope = function () {
                            this.inSwitchMutex.push(0);
                        };
                        Parser.prototype.restoreSwitchScope = function () {
                            var currSwitchMutex = this.inSwitchMutex.pop();
                            trl.utilities.assert(currSwitchMutex === 0);
                        };
                        Parser.prototype.isOnSwitch = function () {
                            return this.inSwitchMutex[this.inSwitchMutex.length - 1] > 0;
                        };
                        //function mutex
                        Parser.prototype.beginFunction = function () {
                            ++this.inFunctionMutex;
                        };
                        Parser.prototype.finishFunction = function () {
                            --this.inFunctionMutex;
                        };
                        Parser.prototype.isOnFunction = function () {
                            return this.inFunctionMutex > 0;
                        };
                        /////////////Context Utilities/////////////
                        ///////////////////////////////////////////
                        // Parse Utilities
                        Parser.prototype.getExceptions = function () {
                            return this.parseException;
                        };
                        Parser.prototype.addException = function (token) {
                            var value = this.lex.isEof(token) ? 'end of file' : token.value;
                            this.parseException.addException('Undexpected token: \'' + value + '\'', token.loc.start.line, token.loc.start.column);
                        };
                        Parser.prototype.delegateLexicalErrors = function () {
                            var _this = this;
                            var lexExceptions = this.lexException.getExceptions();
                            _.each(lexExceptions, function (lexException) {
                                return _this.parseException.addException(lexException.msg, lexException.pos.line, lexException.pos.column);
                            });
                        };
                        Parser.prototype.canTolerateError = function () {
                            var latestToken = this.lex.latestToken();
                            return this.options.tolerateErrors && latestToken && !(this.lex.isEof(latestToken) || this.lex.isError(latestToken));
                        };
                        Parser.prototype.parseStatementIfCanTolerate = function (stmts) {
                            var stmt = this.parseStatement();
                            if (stmt) {
                                stmts.push(stmt);
                                return true;
                            }
                            return this.canTolerateError();
                        };
                        Parser.prototype.trimOptionalSemicolon = function () {
                            var token = this.lex.lookAheadNextToken();
                            if (this.lex.isPunctuationValue(token, ';')) {
                                this.lex.nextToken();
                            } else if (this.tokenIsInSameLine(token) && !this.lex.isEof(token) && !this.lex.isPunctuationValue(token, '}')) {
                                this.addException(token);
                                return false;
                            }
                            return true;
                        };
                        Parser.prototype.trackPositionUnary = function (token) {
                            return token.loc;
                        };
                        Parser.prototype.trackPositionByPos = function (startPos) {
                            var latestToken = this.lex.latestToken();
                            return frontend.lexical.TokenSourceLocation.create(startPos, latestToken.loc.end);
                        };
                        Parser.prototype.trackPositionByToken = function (startToken) {
                            var latestToken = this.lex.latestToken();
                            return frontend.lexical.TokenSourceLocation.create(startToken.loc.start, latestToken.loc.end);
                        };
                        Parser.prototype.expectType = function (value, typeChecker) {
                            var token = this.lex.nextToken();
                            if (typeChecker.call(this.lex, token, value)) {
                                return true;
                            }
                            this.addException(token);
                            return false;
                        };
                        Parser.prototype.expectPunctuation = function (value) {
                            return this.expectType(value, this.lex.isPunctuationValue);
                        };
                        Parser.prototype.expectKeyword = function (value) {
                            return this.expectType(value, this.lex.isKeywordValue);
                        };
                        Parser.prototype.tokenIsInSameLine = function (token) {
                            return token.loc.end.line === this.lex.latestToken().loc.end.line;
                        };
                        ///////////Parse Utilities/////////////   
                        ///////////////////////////////////////////
                        // Parse Program
                        Parser.prototype.parse = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            if (this.lex.isError(initialToken)) {
                                this.delegateLexicalErrors();
                                return;
                            }
                            var stmts = this.parseSourceElements();
                            if (!stmts)
                                return;
                            if (this.lex.isEof(initialToken)) {
                                return this.nodeFactory.createProgram(stmts, this.trackPositionUnary(initialToken));
                            }
                            return this.nodeFactory.createProgram(stmts, this.trackPositionByToken(initialToken));
                        };
                        Parser.prototype.parseSourceElements = function () {
                            var stmts = [];
                            while (this.lex.hasNext() && this.parseStatementIfCanTolerate(stmts));
                            return stmts;
                        };
                        //////////////Parse Program//////////////// 
                        ///////////////////////////////////////////
                        // Parse Statements
                        Parser.prototype.parseStatement = function () {
                            var token = this.lex.lookAheadNextToken();
                            if (this.lex.isKeyword(token)) {
                                switch (token.value) {
                                case 'var':
                                    return this.parseVariableStatement();
                                case 'if':
                                    return this.parseIfStatement();
                                case 'while':
                                    return this.parseWhileStatement();
                                case 'do':
                                    return this.parseDoWhileStatement();
                                case 'for':
                                    return this.parseForStatement();
                                case 'continue':
                                    return this.parseContinueStatement();
                                case 'break':
                                    return this.parseBreakStatement();
                                case 'with':
                                    return this.parseWithStatement();
                                case 'switch':
                                    return this.parseSwitchStatement();
                                case 'throw':
                                    return this.parseThrowStatement();
                                case 'try':
                                    return this.parseTryStatement();
                                case 'debugger':
                                    return this.parseDebuggerStatement();
                                case 'function':
                                    return this.parseFunction(true);
                                case 'return':
                                    return this.parseReturnStatement();
                                }
                            } else if (this.lex.isPunctuation(token)) {
                                switch (token.value) {
                                case '{':
                                    return this.parseBlockStatement();
                                case ';':
                                    return this.parseEmptyStatement();
                                }
                            } else if (this.lex.isIdentifier(token)) {
                                return this.parseLabeledStatement();
                            }
                            return this.parseExpressionStatement();
                        };
                        Parser.prototype.parseBlockStatement = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            if (!this.expectPunctuation('{'))
                                return;
                            var stmts = [];
                            var token = this.lex.lookAheadNextToken();
                            while (!this.lex.isPunctuationValue(token, '}')) {
                                if (!this.parseStatementIfCanTolerate(stmts))
                                    return;
                                token = this.lex.lookAheadNextToken();
                            }
                            if (!this.expectPunctuation('}'))
                                return;
                            return this.nodeFactory.createStatementBlock(stmts, this.trackPositionByToken(initialToken));
                        };
                        Parser.prototype.parseEmptyStatement = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            if (this.expectPunctuation(';')) {
                                return this.nodeFactory.createStatementEmpty(this.trackPositionByToken(initialToken));
                            }
                        };
                        Parser.prototype.parseIfStatement = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            var testExpr = this.parseKeywordLparExpressionRpar('if');
                            if (!testExpr)
                                return;
                            var consStmt = this.parseStatement();
                            if (!consStmt)
                                return;
                            var altStmt = null;
                            if (this.lex.matchKeyword('else')) {
                                altStmt = this.parseStatement();
                                if (!altStmt)
                                    return;
                            }
                            return this.nodeFactory.createStatementIf(testExpr, consStmt, altStmt, this.trackPositionByToken(initialToken));
                        };
                        Parser.prototype.parseIteration = function (parseFunc) {
                            this.beginIteration();
                            var stmt = parseFunc.apply(this);
                            this.finishIteration();
                            return stmt;
                        };
                        Parser.prototype.innerParseWhileStatement = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            var testExpr = this.parseKeywordLparExpressionRpar('while');
                            if (!testExpr)
                                return;
                            var stmt = this.parseStatement();
                            if (!stmt)
                                return;
                            return this.nodeFactory.createStatementWhile(testExpr, stmt, this.trackPositionByToken(initialToken));
                        };
                        Parser.prototype.parseWhileStatement = function () {
                            return this.parseIteration(this.innerParseWhileStatement);
                        };
                        Parser.prototype.innerParseDoWhileStatement = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            if (!this.expectKeyword('do'))
                                return;
                            var stmt = this.parseStatement();
                            if (!stmt)
                                return;
                            var testExpr = this.parseKeywordLparExpressionRpar('while');
                            if (!testExpr)
                                return;
                            this.lex.matchPunctuation(';');
                            return this.nodeFactory.createStatementDoWhile(stmt, testExpr, this.trackPositionByToken(initialToken));
                        };
                        Parser.prototype.parseDoWhileStatement = function () {
                            return this.parseIteration(this.innerParseDoWhileStatement);
                        };
                        Parser.prototype.innerParseForStatement = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            if (!(this.expectKeyword('for') && this.expectPunctuation('(')))
                                return;
                            var initDecl = null, declarations, initExpr = null, token = this.lex.lookAheadNextToken();
                            if (!this.lex.isPunctuationValue(token, ';')) {
                                this.inForIn = true;
                                if (this.lex.isKeywordValue(token, 'var')) {
                                    this.lex.nextToken();
                                    declarations = this.parseVariableDeclarators();
                                    if (!declarations)
                                        return;
                                    initDecl = this.nodeFactory.createDeclarationVariable(declarations, this.trackPositionByToken(token));
                                } else {
                                    initExpr = this.parseExpression();
                                    if (!initExpr)
                                        return;
                                }
                                this.inForIn = false;
                            }
                            var isForIn = false, test = null;
                            token = this.lex.lookAheadNextToken();
                            if (this.lex.isKeywordValue(token, 'in')) {
                                this.lex.nextToken();
                                isForIn = true;
                                if (Parser.isInvalidForInLeftSide(initExpr, declarations)) {
                                    this.parseException.addException('for in left side should resolve to reference', initialToken.loc.start.line, initialToken.loc.start.column);
                                    return;
                                }
                            } else {
                                if (!this.expectPunctuation(';'))
                                    return;
                                token = this.lex.lookAheadNextToken();
                                if (!this.lex.isPunctuationValue(token, ';')) {
                                    test = this.parseExpression();
                                    if (!test)
                                        return;
                                }
                                if (!this.expectPunctuation(';'))
                                    return;
                            }
                            var update = null;
                            token = this.lex.lookAheadNextToken();
                            if (!this.lex.isPunctuationValue(token, ')')) {
                                update = this.parseExpression();
                                if (!update)
                                    return;
                            }
                            if (isForIn && !update) {
                                this.addException(token);
                                return;
                            }
                            if (!this.expectPunctuation(')'))
                                return;
                            var body = this.parseStatement();
                            if (!body)
                                return;
                            var pos = this.trackPositionByToken(initialToken);
                            var init = initExpr || initDecl;
                            if (isForIn) {
                                return this.nodeFactory.createStatementForIn(init, update, body, false, pos);
                            } else {
                                return this.nodeFactory.createStatementFor(init, test, update, body, pos);
                            }
                        };
                        Parser.isInvalidForInLeftSide = function (initExpr, declarations) {
                            return !initExpr && !declarations || (initExpr && !Parser.isLeftHandExpressionResolvingToReference(initExpr) || declarations && declarations.length !== 1);
                        };
                        Parser.prototype.parseForStatement = function () {
                            return this.parseIteration(this.innerParseForStatement);
                        };
                        Parser.prototype.parseKeywordIdentifierSemicolon = function (keyword, nodeFactoryFunc) {
                            var initialToken = this.lex.lookAheadNextToken();
                            if (!this.expectKeyword(keyword))
                                return;
                            var token = this.lex.lookAheadNextToken();
                            var item = null;
                            if (this.tokenIsInSameLine(token) && this.lex.isIdentifier(token)) {
                                item = this.parseIdentifier();
                                if (!item)
                                    return;
                            }
                            if (!this.trimOptionalSemicolon())
                                return;
                            return nodeFactoryFunc.call(this.nodeFactory, item, this.trackPositionByToken(initialToken));
                        };
                        Parser.prototype.parseContinueStatement = function () {
                            var stmt = this.parseKeywordIdentifierSemicolon('continue', this.nodeFactory.createStatementContinue);
                            if (!stmt)
                                return;
                            if (this.isOnIteration()) {
                                return stmt;
                            }
                            this.parseException.addException('Illegal continue statement', stmt.loc.start.line, stmt.loc.start.column);
                        };
                        Parser.prototype.parseBreakStatement = function () {
                            var stmt = this.parseKeywordIdentifierSemicolon('break', this.nodeFactory.createStatementBreak);
                            if (!stmt)
                                return;
                            if (this.isOnIteration() || this.isOnSwitch()) {
                                return stmt;
                            }
                            this.parseException.addException('Illegal break statement', stmt.loc.start.line, stmt.loc.start.column);
                        };
                        Parser.prototype.parseReturnStatement = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            if (!this.expectKeyword('return'))
                                return;
                            var token = this.lex.lookAheadNextToken();
                            var item = null;
                            if (this.tokenIsInSameLine(token) && !this.lex.isPunctuationValue(token, ';') && !this.lex.isPunctuationValue(token, '}') && !this.lex.isEof(token)) {
                                item = this.parseExpression();
                                if (!item)
                                    return;
                            }
                            if (this.isOnFunction()) {
                                return this.nodeFactory.createStatementReturn(item, this.trackPositionByToken(initialToken));
                            }
                            this.parseException.addException('Illegal return statement', initialToken.loc.start.line, initialToken.loc.start.column);
                        };
                        Parser.prototype.parseWithStatement = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            var expr = this.parseKeywordLparExpressionRpar('with');
                            if (!expr)
                                return;
                            var stmt = this.parseStatement();
                            if (!stmt)
                                return;
                            return this.nodeFactory.createStatementWith(expr, stmt, this.trackPositionByToken(initialToken));
                        };
                        Parser.prototype.parseCaseClauseStatements = function (expectDefault) {
                            if (!this.expectPunctuation(':'))
                                return;
                            var stmts = [];
                            while (true) {
                                var token = this.lex.lookAheadNextToken();
                                if (this.lex.isKeywordValue(token, 'case') || this.lex.isPunctuationValue(token, '}') || this.lex.isKeywordValue(token, 'default') && expectDefault) {
                                    break;
                                }
                                if (!this.parseStatementIfCanTolerate(stmts))
                                    return;
                            }
                            return stmts;
                        };
                        Parser.prototype.parseCasesClause = function (cases, expectDefault) {
                            var token = this.lex.lookAheadNextToken();
                            while (this.lex.isKeywordValue(token, 'case')) {
                                this.lex.nextToken();
                                var expr = this.parseExpression();
                                if (!expr)
                                    return false;
                                var stmts = this.parseCaseClauseStatements(expectDefault);
                                if (!stmts)
                                    return false;
                                var switchCase = this.nodeFactory.createSwitchCase(expr, stmts, this.trackPositionByToken(token));
                                cases.push(switchCase);
                                token = this.lex.lookAheadNextToken();
                            }
                            return true;
                        };
                        Parser.prototype.innerParseSwitchStatement = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            var expr = this.parseKeywordLparExpressionRpar('switch');
                            if (!expr)
                                return;
                            if (!this.expectPunctuation('{'))
                                return;
                            var cases = [];
                            var token = this.lex.lookAheadNextToken();
                            if (this.lex.isKeywordValue(token, 'case')) {
                                if (!this.parseCasesClause(cases, true))
                                    return;
                                token = this.lex.lookAheadNextToken();
                            }
                            if (this.lex.isKeywordValue(token, 'default')) {
                                this.lex.nextToken();
                                var stmts = this.parseCaseClauseStatements(false);
                                if (!stmts)
                                    return;
                                var defaultCase = this.nodeFactory.createSwitchCase(null, stmts, this.trackPositionByToken(token));
                                cases.push(defaultCase);
                                token = this.lex.lookAheadNextToken();
                            }
                            if (this.lex.isKeywordValue(token, 'case') && !this.parseCasesClause(cases, false))
                                return;
                            if (!this.expectPunctuation('}'))
                                return;
                            return this.nodeFactory.createStatementSwitch(expr, cases, this.trackPositionByToken(initialToken));
                        };
                        Parser.prototype.parseSwitchStatement = function () {
                            this.beginSwitch();
                            var stmt = this.innerParseSwitchStatement();
                            this.finishSwitch();
                            return stmt;
                        };
                        Parser.prototype.parseThrowStatement = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            if (!this.expectKeyword('throw'))
                                return;
                            var token = this.lex.lookAheadNextToken();
                            if (initialToken.loc.start.line !== token.loc.start.line) {
                                this.parseException.addException('Illegal newline after throw', initialToken.loc.start.line, initialToken.loc.start.column);
                                return;
                            }
                            var expr = this.parseExpression();
                            if (!expr)
                                return;
                            if (!this.trimOptionalSemicolon())
                                return;
                            return this.nodeFactory.createStatementThrow(expr, this.trackPositionByToken(initialToken));
                        };
                        Parser.prototype.parseTryStatement = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            if (!this.expectKeyword('try'))
                                return;
                            var stmt = this.parseBlockStatement();
                            if (!stmt)
                                return;
                            var token = this.lex.lookAheadNextToken();
                            var catchClause = null;
                            if (this.lex.isKeywordValue(token, 'catch')) {
                                var catchId = this.parseKeywordLparExpressionRpar('catch');
                                if (!(catchId && catchId.type === 'Identifier'))
                                    return;
                                var stmt_1 = this.parseBlockStatement();
                                if (!stmt_1)
                                    return;
                                catchClause = this.nodeFactory.createCatchClause(catchId, stmt_1, this.trackPositionByToken(token));
                            }
                            var finalizer = null;
                            if (this.lex.matchKeyword('finally')) {
                                finalizer = this.parseBlockStatement();
                                if (!finalizer)
                                    return;
                            }
                            return this.nodeFactory.createStatementTry(stmt, catchClause, finalizer, this.trackPositionByToken(initialToken));
                        };
                        Parser.prototype.parseDebuggerStatement = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            if (!(this.expectKeyword('debugger') && this.trimOptionalSemicolon()))
                                return;
                            return this.nodeFactory.createStatementDebugger(this.trackPositionByToken(initialToken));
                        };
                        Parser.prototype.parseLabeledStatement = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            var expr = this.parseExpression();
                            if (!expr)
                                return;
                            if (expr.type === 'Identifier' && this.lex.matchPunctuation(':')) {
                                var stmt = this.parseStatement();
                                if (!stmt)
                                    return;
                                return this.nodeFactory.createStatementLabeled(expr, stmt, this.trackPositionByToken(initialToken));
                            }
                            // parse like a normal expression statement
                            if (!this.trimOptionalSemicolon())
                                return;
                            return this.nodeFactory.createStatementExpression(expr, this.trackPositionByToken(initialToken));
                        };
                        Parser.prototype.parseKeywordLparExpressionRpar = function (keyword) {
                            if (!(this.expectKeyword(keyword) && this.expectPunctuation('(')))
                                return;
                            var expr = this.parseExpression();
                            if (expr && this.expectPunctuation(')')) {
                                return expr;
                            }
                        };
                        Parser.prototype.parseVariableStatement = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            if (!this.expectKeyword('var'))
                                return;
                            var variableDeclarators = this.parseVariableDeclarators();
                            if (!this.trimOptionalSemicolon())
                                return;
                            return this.nodeFactory.createDeclarationVariable(variableDeclarators, this.trackPositionByToken(initialToken));
                        };
                        Parser.prototype.parseExpressionStatement = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            var expr = this.parseExpression();
                            if (!(expr && this.trimOptionalSemicolon()))
                                return;
                            return this.nodeFactory.createStatementExpression(expr, this.trackPositionByToken(initialToken));
                        };
                        ///////////Parse Statements////////////////    
                        ///////////////////////////////////////////
                        // Declarations
                        Parser.prototype.parseVariableDeclarators = function () {
                            var variableDeclarator = this.parseVariableDeclarator();
                            if (!variableDeclarator)
                                return;
                            var variableDeclarators = [variableDeclarator];
                            while (this.lex.matchPunctuation(',')) {
                                var variableDeclarator_1 = this.parseVariableDeclarator();
                                if (!variableDeclarator_1)
                                    return;
                                variableDeclarators.push(variableDeclarator_1);
                            }
                            return variableDeclarators;
                        };
                        Parser.prototype.parseVariableDeclarator = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            var identifier = this.parseIdentifier();
                            if (!identifier)
                                return;
                            var expr = null;
                            if (this.lex.matchPunctuation('=')) {
                                expr = this.parseAssignmentExpression();
                                if (!expr)
                                    return;
                            }
                            return this.nodeFactory.createVariableDeclarator(identifier, expr, this.trackPositionByToken(initialToken));
                        };
                        ///////////////Declarations/////////////////            
                        ///////////////////////////////////////////
                        // Parse Expressions        
                        Parser.prototype.parseExpression = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            var expr = this.parseAssignmentExpression();
                            if (!expr)
                                return;
                            if (this.lex.matchPunctuation(',')) {
                                var exprs = [expr];
                                do {
                                    var expr_1 = this.parseAssignmentExpression();
                                    if (!expr_1)
                                        return;
                                    exprs.push(expr_1);
                                } while (this.lex.matchPunctuation(','));
                                return this.nodeFactory.createExpressionSequence(exprs, this.trackPositionByToken(initialToken));
                            }
                            return expr;
                        };
                        // thanks to: http://stackoverflow.com/questions/3709866/whats-a-valid-left-hand-side-expression-in-javascript-grammar
                        Parser.isLeftHandExpressionResolvingToReference = function (expr) {
                            return expr.type === 'Identifier' || expr.type === 'MemberExpression';
                        };
                        Parser.prototype.parseAssignmentExpression = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            var expr = this.parseConditionalExpression();
                            if (!expr)
                                return;
                            var token = this.lex.lookAheadNextToken();
                            if (this.lex.isPunctuation(token) && Parser.AssignmentOperators[token.value]) {
                                if (!Parser.isLeftHandExpressionResolvingToReference(expr)) {
                                    this.parseException.addException('Invalid left-hand side in assignment', token.loc.start.line, token.loc.start.column);
                                    return;
                                }
                                this.lex.nextToken();
                                var rexpr = this.parseAssignmentExpression();
                                if (!rexpr)
                                    return;
                                return this.nodeFactory.createExpressionAssignment(token.value, expr, rexpr, this.trackPositionByToken(initialToken));
                            }
                            return expr;
                        };
                        Parser.prototype.parseConditionalExpression = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            var expr = this.parseBinaryExpression();
                            if (!expr)
                                return;
                            var token = this.lex.lookAheadNextToken();
                            if (this.lex.isPunctuationValue(token, '?')) {
                                this.lex.nextToken();
                                var consequentExpr = this.parseAssignmentExpression();
                                if (!consequentExpr)
                                    return;
                                if (!this.expectPunctuation(':'))
                                    return;
                                var alternateExpr = this.parseAssignmentExpression();
                                if (!alternateExpr)
                                    return;
                                return this.nodeFactory.createExpressionConditional(expr, alternateExpr, consequentExpr, this.trackPositionByToken(initialToken));
                            }
                            return expr;
                        };
                        Parser.isLogicBinaryTokenValue = function (rank) {
                            return rank <= Parser.BinaryTokenValues_islogic;
                        };
                        Parser.getBinaryOperationToken = function (op, allowIn) {
                            if (op === 'in') {
                                return allowIn ? Parser.BinaryTokenValues[op] : undefined;
                            } else {
                                return Parser.BinaryTokenValues[op];
                            }
                        };
                        Parser.prototype.createBinaryExpression = function (rank, operator, left, right) {
                            var loc = this.options.loc ? frontend.lexical.TokenSourceLocation.create(left.loc.start, right.loc.end) : undefined;
                            if (Parser.isLogicBinaryTokenValue(rank)) {
                                return this.nodeFactory.createExpressionLogical(operator, left, right, loc);
                            } else {
                                return this.nodeFactory.createExpressionBinary(operator, left, right, loc);
                            }
                        };
                        // We could use the simple aproach by parsing individually 
                        // every binary expression of Ecmascript definition,
                        // for instanse, parseLogicalORExpression, parseLogicalANDExpression, parseEqualityExpression etc.
                        //
                        // We choose to parse all the binary definitions using the method
                        // of shift-reduce parser for the left-associative binary operator part
                        //
                        // https://en.wikipedia.org/wiki/Operator-precedence_parser
                        //
                        // because it is more fun (and increases the performance :) )
                        Parser.prototype.innerBarseBinaryExpression = function (allowIn) {
                            var lexpr = this.parseUnaryExpression();
                            if (!lexpr)
                                return;
                            var token = this.lex.lookAheadNextToken();
                            var binaryRank = Parser.getBinaryOperationToken(token.value, allowIn);
                            if (binaryRank && (this.lex.isPunctuation(token) || this.lex.isKeyword(token))) {
                                this.lex.nextToken();
                                var rexpr = this.parseUnaryExpression();
                                if (!rexpr)
                                    return;
                                var exprs = [
                                        lexpr,
                                        rexpr
                                    ], puncs = [token.value], ranks = [binaryRank];
                                while (true) {
                                    token = this.lex.lookAheadNextToken();
                                    var latestRank = Parser.getBinaryOperationToken(token.value, allowIn);
                                    if (!latestRank || !this.lex.isPunctuation(token) && !this.lex.isKeyword(token)) {
                                        break;
                                    }
                                    this.lex.nextToken();
                                    var rexpr_1 = this.parseUnaryExpression();
                                    if (!rexpr_1)
                                        return;
                                    var lastRank = _.last(ranks);
                                    while (lastRank && lastRank >= latestRank) {
                                        var rexpr_2 = exprs.pop();
                                        var lexpr_1 = exprs.pop();
                                        var binaryExpr = this.createBinaryExpression(ranks.pop(), puncs.pop(), lexpr_1, rexpr_2);
                                        exprs.push(binaryExpr);
                                        lastRank = _.last(ranks);
                                    }
                                    ranks.push(latestRank);
                                    puncs.push(token.value);
                                    exprs.push(rexpr_1);
                                }
                                lexpr = exprs.pop();
                                while (puncs.length) {
                                    lexpr = this.createBinaryExpression(ranks.pop(), puncs.pop(), exprs.pop(), lexpr);
                                }
                            }
                            return lexpr;
                        };
                        Parser.prototype.parseBinaryExpression = function () {
                            var oldInForIn = this.inForIn;
                            this.inForIn = false;
                            var expr = this.innerBarseBinaryExpression(!oldInForIn);
                            this.inForIn = oldInForIn;
                            return expr;
                        };
                        Parser.prototype.parseUnaryExpression = function () {
                            var token = this.lex.lookAheadNextToken();
                            var unaryRank = Parser.UnaryTokenValues[token.value];
                            if (unaryRank && (this.lex.isPunctuation(token) || this.lex.isKeyword(token))) {
                                this.lex.nextToken();
                                var expr = this.parseUnaryExpression();
                                if (!expr)
                                    return;
                                if (unaryRank === Parser.UnaryTokenValues_update) {
                                    return this.nodeFactory.createExpressionUpdate(token.value, expr, true, this.trackPositionByToken(token));
                                }
                                return this.nodeFactory.createExpressionUnary(token.value, true, expr, this.trackPositionByToken(token));
                            }
                            return this.parsePostfixExpression();
                        };
                        Parser.prototype.parsePostfixExpression = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            var expr = this.parseLeftHandSideExpression(true);
                            if (!expr)
                                return;
                            var token = this.lex.lookAheadNextToken();
                            if (this.lex.isPunctuation(token) && token.loc.end.line === this.lex.latestToken().loc.end.line && (token.value === '++' || token.value === '--')) {
                                this.lex.nextToken();
                                return this.nodeFactory.createExpressionUpdate(token.value, expr, false, this.trackPositionByToken(initialToken));
                            }
                            return expr;
                        };
                        Parser.prototype.parseIdentifier = function () {
                            var token = this.lex.nextToken();
                            if (this.lex.isIdentifier(token)) {
                                return this.nodeFactory.createIdentifier(token.value, this.trackPositionUnary(token));
                            }
                            this.addException(token);
                        };
                        Parser.prototype.parseLeftHandSideExpression = function (allowCallExpressions) {
                            var initialToken = this.lex.lookAheadNextToken(), primaryExpr;
                            if (this.lex.isKeyword(initialToken)) {
                                switch (initialToken.value) {
                                case 'function':
                                    primaryExpr = this.parseFunction(false);
                                    break;
                                case 'new':
                                    primaryExpr = this.parseNewExpression();
                                    break;
                                }
                            }
                            primaryExpr = primaryExpr || this.parsePrimaryExpression();
                            if (!primaryExpr)
                                return;
                            var expr, isMatchingExression = true;
                            while (isMatchingExression) {
                                var token = this.lex.lookAheadNextToken();
                                if (!this.lex.isPunctuation(token)) {
                                    break;
                                }
                                switch (token.value) {
                                case '[':
                                    this.lex.nextToken();
                                    expr = this.parseExpression();
                                    if (!expr)
                                        return;
                                    if (!this.expectPunctuation(']'))
                                        return;
                                    primaryExpr = this.nodeFactory.createExpressionMember(primaryExpr, expr, true, this.trackPositionByToken(initialToken));
                                    break;
                                case '.':
                                    this.lex.nextToken();
                                    var identifier = this.parseIdentifier();
                                    if (!identifier)
                                        return;
                                    primaryExpr = this.nodeFactory.createExpressionMember(primaryExpr, identifier, false, this.trackPositionByToken(initialToken));
                                    break;
                                case '(':
                                    if (allowCallExpressions) {
                                        var args = this.parseArguments();
                                        if (!args) {
                                            return;
                                        }
                                        primaryExpr = this.nodeFactory.createExpressionCall(primaryExpr, args, this.trackPositionByToken(initialToken));
                                        break;
                                    }
                                default:
                                    isMatchingExression = false;
                                }
                            }
                            return primaryExpr;
                        };
                        Parser.prototype.parsePrimaryExpression = function () {
                            var token = this.lex.lookAheadNextToken();
                            switch (token.type) {
                            case frontend.lexical.TokenType.keyword:
                                if (token.value === 'this') {
                                    this.lex.nextToken();
                                    return this.nodeFactory.createExpressionThis(this.trackPositionUnary(token));
                                }
                                break;
                            case frontend.lexical.TokenType.identifier:
                                this.lex.nextToken();
                                return this.nodeFactory.createIdentifier(token.value, this.trackPositionUnary(token));
                            case frontend.lexical.TokenType.literal:
                                this.lex.nextToken();
                                return this.nodeFactory.createLiteral(token.value, this.trackPositionUnary(token));
                            case frontend.lexical.TokenType.punctuation:
                                switch (token.value) {
                                case '[':
                                    return this.parseArrayLiteral();
                                case '{':
                                    return this.parseObjectLiteral();
                                case '(': {
                                        var token_1 = this.lex.nextToken();
                                        var expr = this.parseExpression();
                                        if (!expr)
                                            return;
                                        if (this.lex.matchPunctuation(')')) {
                                            return expr;
                                        } else {
                                            this.addException(this.lex.nextToken());
                                            return;
                                        }
                                    }
                                case '/=':
                                case '/': {
                                        token = this.lex.reinterpretLastTokenAsRegex(token);
                                        if (this.lex.isError(token))
                                            return;
                                        return this.nodeFactory.createLiteral(token.value, this.trackPositionUnary(token));
                                    }
                                }
                            }
                            this.addException(token);
                        };
                        Parser.prototype.parseNewExpression = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            if (!this.expectKeyword('new'))
                                return;
                            var callExpr = this.parseLeftHandSideExpression(false);
                            if (!callExpr)
                                return;
                            var args, token = this.lex.lookAheadNextToken();
                            if (this.lex.isPunctuationValue(token, '(')) {
                                args = this.parseArguments();
                                if (!args)
                                    return;
                            }
                            return this.nodeFactory.createExpressionNew(callExpr, args || [], this.trackPositionByToken(initialToken));
                        };
                        Parser.prototype.parseArguments = function () {
                            if (!this.expectPunctuation('('))
                                return;
                            var token = this.lex.lookAheadNextToken();
                            var exprs = [];
                            if (this.lex.isPunctuationValue(token, ')')) {
                                this.lex.nextToken();
                                return exprs;
                            }
                            while (true) {
                                var expr = this.parseAssignmentExpression();
                                if (!expr)
                                    return;
                                exprs.push(expr);
                                token = this.lex.nextToken();
                                if (this.lex.isPunctuationValue(token, ')')) {
                                    break;
                                } else if (!this.lex.isPunctuationValue(token, ',')) {
                                    this.addException(token);
                                    return;
                                }
                            }
                            return exprs;
                        };
                        Parser.prototype.parseArrayLiteral = function () {
                            var token = this.lex.lookAheadNextToken();
                            if (!this.expectPunctuation('['))
                                return;
                            var arrayExprs = [];
                            this.trimArrayCommas(arrayExprs);
                            while (!this.lex.matchPunctuation(']')) {
                                var assignExpr = this.parseAssignmentExpression();
                                if (!assignExpr)
                                    return;
                                arrayExprs.push(assignExpr);
                                if (this.lex.matchPunctuation(',')) {
                                    this.trimArrayCommas(arrayExprs);
                                }
                            }
                            return this.nodeFactory.createExpressionArray(arrayExprs, this.trackPositionByToken(token));
                        };
                        Parser.prototype.trimArrayCommas = function (arrayExprs) {
                            while (this.lex.matchPunctuation(',')) {
                                arrayExprs.push(null);
                            }
                        };
                        Parser.prototype.parseObjectLiteral = function () {
                            var token = this.lex.lookAheadNextToken();
                            if (!this.expectPunctuation('{'))
                                return;
                            var properties = [];
                            while (true) {
                                var token_2 = this.lex.lookAheadNextToken();
                                if (this.lex.isPunctuationValue(token_2, '}')) {
                                    this.lex.nextToken();
                                    break;
                                }
                                var property = this.parsePropertyAssignment();
                                if (!property)
                                    return;
                                properties.push(property);
                                token_2 = this.lex.nextToken();
                                if (this.lex.isPunctuationValue(token_2, '}')) {
                                    break;
                                } else if (!this.lex.isPunctuationValue(token_2, ',')) {
                                    this.addException(token_2);
                                    return;
                                }
                            }
                            return this.nodeFactory.createExpressionObject(properties, this.trackPositionByToken(token));
                        };
                        Parser.prototype.parsePropertyAssignment = function () {
                            var kind;
                            var initialToken = this.lex.lookAheadNextToken();
                            if (this.lex.isIdentifierValue(initialToken, 'get')) {
                                kind = 'get';
                            } else if (this.lex.isIdentifierValue(initialToken, 'set')) {
                                kind = 'set';
                            } else {
                                kind = 'init';
                            }
                            var propertyName = this.parsePropertyName();
                            if (!propertyName)
                                return;
                            var token = this.lex.nextToken();
                            if (this.lex.isPunctuationValue(token, ':')) {
                                var expr = this.parseAssignmentExpression();
                                if (!expr)
                                    return;
                                return this.nodeFactory.createObjectProperty(propertyName, expr, kind, this.trackPositionByToken(initialToken));
                            } else if (this.lex.isPunctuationValue(token, '(')) {
                                var args = [];
                                token = this.lex.nextToken();
                                if (this.lex.isIdentifier(token)) {
                                    var arg = this.nodeFactory.createIdentifier(token.value, this.trackPositionUnary(token));
                                    args.push(arg);
                                    if (!this.expectPunctuation(')'))
                                        return;
                                } else if (!this.lex.isPunctuationValue(token, ')')) {
                                    this.addException(token);
                                    return;
                                }
                                if (!this.expectPunctuation('{'))
                                    return;
                                var functionBody = this.parseFunctionBody();
                                if (!this.expectPunctuation('}'))
                                    return;
                                var functionExpr = this.nodeFactory.createExpressionFunction(null, args, functionBody, this.trackPositionByToken(token));
                                return this.nodeFactory.createObjectProperty(propertyName, functionExpr, kind, this.trackPositionByToken(initialToken));
                            } else {
                                this.addException(token);
                            }
                        };
                        Parser.prototype.parsePropertyName = function () {
                            var token = this.lex.nextToken();
                            if (this.lex.isLiteral(token)) {
                                if (token.subType === frontend.lexical.LiteralSubType.string || token.subType === frontend.lexical.LiteralSubType.number) {
                                    return this.nodeFactory.createLiteral(token.value, this.trackPositionUnary(token));
                                }
                                return this.nodeFactory.createIdentifier(token.value, this.trackPositionUnary(token));
                            } else if (this.lex.isIdentifier(token)) {
                                return this.nodeFactory.createIdentifier(token.value, this.trackPositionUnary(token));
                            } else {
                                this.addException(token);
                            }
                        };
                        /////////////Parse Expressions///////////        
                        ///////////////////////////////////////////
                        // Parse Function
                        Parser.prototype.parseFunction = function (asDeclaration) {
                            var initialToken = this.lex.lookAheadNextToken();
                            if (!this.expectKeyword('function'))
                                return;
                            var token = this.lex.lookAheadNextToken();
                            var identifier = null;
                            if (this.lex.isIdentifier(token)) {
                                this.lex.nextToken();
                                identifier = this.nodeFactory.createIdentifier(token.value, this.trackPositionUnary(token));
                            } else if (asDeclaration) {
                                this.addException(token);
                                return;
                            }
                            if (!this.expectPunctuation('('))
                                return;
                            var args = [];
                            token = this.lex.lookAheadNextToken();
                            while (!this.lex.isPunctuationValue(token, ')')) {
                                if (!this.lex.isIdentifier(token)) {
                                    this.addException(token);
                                    return;
                                }
                                this.lex.nextToken();
                                var arg = this.nodeFactory.createIdentifier(token.value, this.trackPositionUnary(token));
                                args.push(arg);
                                this.lex.matchPunctuation(',');
                                token = this.lex.lookAheadNextToken();
                            }
                            if (!this.expectPunctuation(')'))
                                return;
                            var body = this.parseFunctionBody();
                            if (!body)
                                return;
                            if (asDeclaration) {
                                return this.nodeFactory.createDeclarationFunction(identifier, args, body, this.trackPositionByToken(initialToken));
                            } else {
                                return this.nodeFactory.createExpressionFunction(identifier, args, body, this.trackPositionByToken(initialToken));
                            }
                        };
                        Parser.prototype.parseFunctionBody = function () {
                            this.newSwitchScope();
                            this.newIterationScope();
                            this.beginFunction();
                            var stmt = this.parseBlockStatement();
                            this.restoreSwitchScope();
                            this.restoreIterationScope();
                            this.finishFunction();
                            return stmt;
                        };
                        Parser.defaultParserOptions = {
                            loc: false,
                            tolerateErrors: false
                        };
                        Parser.lexerOptions = {
                            loc: true,
                            readableTokensMode: false,
                            includeCommentsAsNormalTokens: false
                        };
                        Parser.AssignmentOperators = {
                            '=': true,
                            '||': true,
                            '*=': true,
                            '/=': true,
                            '%=': true,
                            '+=': true,
                            '-=': true,
                            '<<=': true,
                            '>>=': true,
                            '>>>=': true,
                            '&=': true,
                            '^=': true,
                            '|=': true
                        };
                        Parser.BinaryTokenValues_or = 1;
                        Parser.BinaryTokenValues_and = 2;
                        Parser.BinaryTokenValues_islogic = Parser.BinaryTokenValues_and;
                        Parser.BinaryTokenValues_bor = 3;
                        Parser.BinaryTokenValues_xor = 4;
                        Parser.BinaryTokenValues_band = 5;
                        Parser.BinaryTokenValues_eq = 6;
                        Parser.BinaryTokenValues_rel = 7;
                        Parser.BinaryTokenValues_shift = 8;
                        Parser.BinaryTokenValues_add = 9;
                        Parser.BinaryTokenValues_multi = 10;
                        Parser.BinaryTokenValues = {
                            '||': Parser.BinaryTokenValues_or,
                            '&&': Parser.BinaryTokenValues_and,
                            '|': Parser.BinaryTokenValues_bor,
                            '^': Parser.BinaryTokenValues_xor,
                            '&': Parser.BinaryTokenValues_band,
                            '==': Parser.BinaryTokenValues_eq,
                            '!=': Parser.BinaryTokenValues_eq,
                            '===': Parser.BinaryTokenValues_eq,
                            '!==': Parser.BinaryTokenValues_eq,
                            '<': Parser.BinaryTokenValues_rel,
                            '>': Parser.BinaryTokenValues_rel,
                            '<=': Parser.BinaryTokenValues_rel,
                            '>=': Parser.BinaryTokenValues_rel,
                            'instanceof': Parser.BinaryTokenValues_rel,
                            'in': Parser.BinaryTokenValues_rel,
                            '<<': Parser.BinaryTokenValues_shift,
                            '>>': Parser.BinaryTokenValues_shift,
                            '>>>': Parser.BinaryTokenValues_shift,
                            '+': Parser.BinaryTokenValues_add,
                            '-': Parser.BinaryTokenValues_add,
                            '*': Parser.BinaryTokenValues_multi,
                            '/': Parser.BinaryTokenValues_multi,
                            '%': Parser.BinaryTokenValues_multi
                        };
                        Parser.UnaryTokenValues_unary = 1;
                        Parser.UnaryTokenValues_update = 2;
                        Parser.UnaryTokenValues = {
                            '-': Parser.UnaryTokenValues_unary,
                            '+': Parser.UnaryTokenValues_unary,
                            '!': Parser.UnaryTokenValues_unary,
                            '~': Parser.UnaryTokenValues_unary,
                            'typeof': Parser.UnaryTokenValues_unary,
                            'void': Parser.UnaryTokenValues_unary,
                            'delete': Parser.UnaryTokenValues_unary,
                            '++': Parser.UnaryTokenValues_update,
                            '--': Parser.UnaryTokenValues_update
                        };
                        return Parser;
                    }();
                    syntax.Parser = Parser;
                }(syntax = frontend.syntax || (frontend.syntax = {})));
            }(frontend = trl.frontend || (trl.frontend = {})));
        }(trl || (trl = {})));
        /// <reference path="../../tsDefinitions/tsd.d.ts" />
        /// <reference path="Exception.ts" />
        /// <reference path="lexical/Lexer.ts" />
        /// <reference path="lexical/CharacterStream.ts" />
        /// <reference path="syntax/Parser.ts" />
        var trl;
        (function (trl) {
            var frontend;
            (function (frontend) {
                var api;
                (function (api) {
                    function tokenize(src, options) {
                        var charStream = new frontend.lexical.CharacterStream(src), exceptionHandler = new frontend.ExceptionHandler(), lexer = new frontend.lexical.Lexer(charStream, exceptionHandler, options);
                        var tokens = [];
                        while (lexer.hasNext()) {
                            var token = lexer.nextToken();
                            tokens.push(token);
                        }
                        ;
                        var tokenizeResult = { tokens: tokens };
                        if (exceptionHandler.hasExceptions()) {
                            tokenizeResult.exceptions = exceptionHandler.getExceptions();
                        }
                        return tokenizeResult;
                    }
                    api.tokenize = tokenize;
                    function parse(src, options) {
                        var parser = new frontend.syntax.Parser(src, options);
                        var parseNodes = parser.parse();
                        var parseResult = { program: parseNodes };
                        var exceptionHandler = parser.getExceptions();
                        if (exceptionHandler.hasExceptions()) {
                            parseResult.exceptions = exceptionHandler.getExceptions();
                        }
                        return parseResult;
                    }
                    api.parse = parse;
                }(api = frontend.api || (frontend.api = {})));
            }(frontend = trl.frontend || (trl.frontend = {})));
        }(trl || (trl = {})));
        var trl;
        (function (trl) {
            var backend;
            (function (backend) {
                (function (JSCompletionType) {
                    JSCompletionType[JSCompletionType['normal'] = 0] = 'normal';
                    JSCompletionType[JSCompletionType['break'] = 1] = 'break';
                    JSCompletionType[JSCompletionType['continue'] = 2] = 'continue';
                    JSCompletionType[JSCompletionType['return'] = 3] = 'return';
                    JSCompletionType[JSCompletionType['throw'] = 4] = 'throw';
                }(backend.JSCompletionType || (backend.JSCompletionType = {})));
                var JSCompletionType = backend.JSCompletionType;
                var JSCompletion = function () {
                    function JSCompletion(type, val, target) {
                        if (type === void 0) {
                            type = JSCompletionType.normal;
                        }
                        this.type = type;
                        this.val = val;
                        this.target = target;
                    }
                    JSCompletion.prototype.getType = function () {
                        return backend.JSSpecificationTypes.completion;
                    };
                    return JSCompletion;
                }();
                backend.JSCompletion = JSCompletion;
            }(backend = trl.backend || (trl.backend = {})));
        }(trl || (trl = {})));
        var trl;
        (function (trl) {
            var backend;
            (function (backend) {
                var JSEnviromentRecord = function () {
                    function JSEnviromentRecord() {
                    }
                    JSEnviromentRecord.prototype.getBindingValue = function (name, strict) {
                        return backend.throwNotImplementedYet();
                    };
                    JSEnviromentRecord.prototype.setMutableBinding = function (name, val, strict) {
                        backend.throwNotImplementedYet();
                    };
                    JSEnviromentRecord.prototype.getType = function () {
                        return backend.JSSpecificationTypes.environmentRecord;
                    };
                    return JSEnviromentRecord;
                }();
                backend.JSEnviromentRecord = JSEnviromentRecord;
            }(backend = trl.backend || (trl.backend = {})));
        }(trl || (trl = {})));
        var trl;
        (function (trl) {
            var backend;
            (function (backend) {
                var JSList = function () {
                    function JSList(list) {
                        if (list === void 0) {
                            list = [];
                        }
                        this.list = list;
                    }
                    JSList.prototype.getType = function () {
                        return backend.JSSpecificationTypes.list;
                    };
                    return JSList;
                }();
                backend.JSList = JSList;
            }(backend = trl.backend || (trl.backend = {})));
        }(trl || (trl = {})));
        var trl;
        (function (trl) {
            var backend;
            (function (backend) {
                var JSPropertyDescriptor = function () {
                    function JSPropertyDescriptor(jsvalue, jswritable, jsget, jsset, jsenumerable, jsconfigurable) {
                        this.jsvalue = jsvalue;
                        this.jswritable = jswritable;
                        this.jsget = jsget;
                        this.jsset = jsset;
                        this.jsenumerable = jsenumerable;
                        this.jsconfigurable = jsconfigurable;
                    }
                    JSPropertyDescriptor.createDataPropertyDescriptor = function (jsvalue, jswritable, jsenumerable, jsconfigurable) {
                        if (jsvalue === void 0) {
                            jsvalue = backend.JSApi.createUndefined();
                        }
                        if (jswritable === void 0) {
                            jswritable = backend.JSApi.createBoolean(false);
                        }
                        if (jsenumerable === void 0) {
                            jsenumerable = backend.JSApi.createBoolean(false);
                        }
                        if (jsconfigurable === void 0) {
                            jsconfigurable = backend.JSApi.createBoolean(false);
                        }
                        return new JSPropertyDescriptor(jsvalue, jswritable, undefined, undefined, jsenumerable, jsconfigurable);
                    };
                    JSPropertyDescriptor.createAccessorPropertyDescriptor = function (jsget, jsset, jsenumerable, jsconfigurable) {
                        if (jsget === void 0) {
                            jsget = backend.JSApi.createUndefined();
                        }
                        if (jsset === void 0) {
                            jsset = backend.JSApi.createUndefined();
                        }
                        if (jsenumerable === void 0) {
                            jsenumerable = backend.JSApi.createBoolean(false);
                        }
                        if (jsconfigurable === void 0) {
                            jsconfigurable = backend.JSApi.createBoolean(false);
                        }
                        return new JSPropertyDescriptor(undefined, undefined, jsget, jsset, jsenumerable, jsconfigurable);
                    };
                    JSPropertyDescriptor.prototype.isAccessorDescriptor = function () {
                        return this.jsget !== undefined || this.jsget !== undefined;
                    };
                    JSPropertyDescriptor.prototype.isDataDescriptor = function () {
                        return this.jsvalue !== undefined || this.jswritable !== undefined;
                    };
                    JSPropertyDescriptor.prototype.isGenericDescriptor = function () {
                        return !this.isAccessorDescriptor() && !this.isDataDescriptor();
                    };
                    JSPropertyDescriptor.prototype.fromPropertyDescriptor = function () {
                        var obj = backend.JSApi.createObject();
                        if (this.isDataDescriptor()) {
                            obj.objDefineOwnProperty(backend.JSApi.createString('value'), JSPropertyDescriptor.createDataPropertyDescriptor(this.jsvalue, backend.JSApi.createBoolean(true), backend.JSApi.createBoolean(true), backend.JSApi.createBoolean(true)), false);
                            obj.objDefineOwnProperty(backend.JSApi.createString('writable'), JSPropertyDescriptor.createDataPropertyDescriptor(this.jsvalue, backend.JSApi.createBoolean(true), backend.JSApi.createBoolean(true), backend.JSApi.createBoolean(true)), false);
                        } else if (this.isAccessorDescriptor()) {
                            obj.objDefineOwnProperty(backend.JSApi.createString('get'), JSPropertyDescriptor.createDataPropertyDescriptor(this.jsget, backend.JSApi.createBoolean(true), backend.JSApi.createBoolean(true), backend.JSApi.createBoolean(true)), false);
                            obj.objDefineOwnProperty(backend.JSApi.createString('set'), JSPropertyDescriptor.createDataPropertyDescriptor(this.jsset, backend.JSApi.createBoolean(true), backend.JSApi.createBoolean(true), backend.JSApi.createBoolean(true)), false);
                        }
                        obj.objDefineOwnProperty(backend.JSApi.createString('enumerable'), JSPropertyDescriptor.createDataPropertyDescriptor(this.jsenumerable, backend.JSApi.createBoolean(true), backend.JSApi.createBoolean(true), backend.JSApi.createBoolean(true)), false);
                        obj.objDefineOwnProperty(backend.JSApi.createString('configurable'), JSPropertyDescriptor.createDataPropertyDescriptor(this.jsconfigurable, backend.JSApi.createBoolean(true), backend.JSApi.createBoolean(true), backend.JSApi.createBoolean(true)), false);
                        return obj;
                    };
                    JSPropertyDescriptor.toPropertyDescriptor = function (val) {
                        if (!backend.JSApi.isObject(val)) {
                            backend.JSApi.throwTypeErrorException();
                            return;
                        }
                        var obj = val;
                        var desc = new JSPropertyDescriptor();
                        if (obj.objHasProperty(backend.JSApi.createString('enumerable'))) {
                            desc.jsenumerable = backend.JSApi.toBoolean(obj.objGet(backend.JSApi.createString('enumerable')));
                        }
                        if (obj.objHasProperty(backend.JSApi.createString('configurable'))) {
                            desc.jsconfigurable = backend.JSApi.toBoolean(obj.objGet(backend.JSApi.createString('configurable')));
                        }
                        if (obj.objHasProperty(backend.JSApi.createString('value'))) {
                            desc.jsvalue = obj.objGet(backend.JSApi.createString('value'));
                        }
                        if (obj.objHasProperty(backend.JSApi.createString('writable'))) {
                            desc.jswritable = backend.JSApi.toBoolean(obj.objGet(backend.JSApi.createString('writable')));
                        }
                        if (obj.objHasProperty(backend.JSApi.createString('get'))) {
                            var jsget = obj.objGet(backend.JSApi.createString('get'));
                            if (!backend.JSApi.isCallable(jsget) && !backend.JSApi.isUndefined(jsget)) {
                                backend.JSApi.throwTypeErrorException();
                                return;
                            }
                            desc.jsget = jsget;
                        }
                        if (obj.objHasProperty(backend.JSApi.createString('set'))) {
                            var jsset = obj.objGet(backend.JSApi.createString('set'));
                            if (!backend.JSApi.isCallable(jsset) && !backend.JSApi.isUndefined(jsset)) {
                                backend.JSApi.throwTypeErrorException();
                                return;
                            }
                            desc.jsset = jsset;
                        }
                        if ((desc.jsget || desc.jsset) && (desc.jsvalue || desc.jswritable)) {
                            backend.JSApi.throwTypeErrorException();
                            return;
                        }
                        return desc;
                    };
                    JSPropertyDescriptor.prototype.getType = function () {
                        return backend.JSSpecificationTypes.propertyDescriptor;
                    };
                    return JSPropertyDescriptor;
                }();
                backend.JSPropertyDescriptor = JSPropertyDescriptor;
            }(backend = trl.backend || (trl.backend = {})));
        }(trl || (trl = {})));
        var trl;
        (function (trl) {
            var backend;
            (function (backend) {
                var JSPropertyIdentifier = function () {
                    function JSPropertyIdentifier(name, descriptor) {
                        this.name = name;
                        this.descriptor = descriptor;
                    }
                    JSPropertyIdentifier.prototype.getType = function () {
                        return backend.JSSpecificationTypes.propertyIdentifier;
                    };
                    return JSPropertyIdentifier;
                }();
                backend.JSPropertyIdentifier = JSPropertyIdentifier;
            }(backend = trl.backend || (trl.backend = {})));
        }(trl || (trl = {})));
        var trl;
        (function (trl) {
            var backend;
            (function (backend) {
                var JSReference = function () {
                    function JSReference() {
                    }
                    JSReference.prototype.getBase = function () {
                        return this.baseValue;
                    };
                    JSReference.prototype.getReferencedName = function () {
                        return this.referencedName;
                    };
                    JSReference.prototype.isStrictReference = function () {
                        return this.strict;
                    };
                    JSReference.prototype.hasPrimitiveBase = function () {
                        return this.baseValue.getType() === backend.JSValues.boolean || this.baseValue.getType() === backend.JSValues.string || this.baseValue.getType() === backend.JSValues.number;
                    };
                    JSReference.prototype.isPropertyReference = function () {
                        return this.hasPrimitiveBase() || this.baseValue.getType() === backend.JSValues.object;
                    };
                    JSReference.prototype.isUnresolvableReference = function () {
                        return this.baseValue.getType() === backend.JSValues.undefined;
                    };
                    JSReference.prototype.getType = function () {
                        return backend.JSSpecificationTypes.reference;
                    };
                    return JSReference;
                }();
                backend.JSReference = JSReference;
            }(backend = trl.backend || (trl.backend = {})));
        }(trl || (trl = {})));
        var trl;
        (function (trl) {
            var backend;
            (function (backend) {
                (function (JSSpecificationTypes) {
                    JSSpecificationTypes[JSSpecificationTypes['reference'] = 0] = 'reference';
                    JSSpecificationTypes[JSSpecificationTypes['list'] = 1] = 'list';
                    JSSpecificationTypes[JSSpecificationTypes['completion'] = 2] = 'completion';
                    JSSpecificationTypes[JSSpecificationTypes['propertyDescriptor'] = 3] = 'propertyDescriptor';
                    JSSpecificationTypes[JSSpecificationTypes['propertyIdentifier'] = 4] = 'propertyIdentifier';
                    JSSpecificationTypes[JSSpecificationTypes['lexicalEnvironment'] = 5] = 'lexicalEnvironment';
                    JSSpecificationTypes[JSSpecificationTypes['environmentRecord'] = 6] = 'environmentRecord';
                }(backend.JSSpecificationTypes || (backend.JSSpecificationTypes = {})));
                var JSSpecificationTypes = backend.JSSpecificationTypes;
                function JSGetValue(spec) {
                    if (spec.getType() !== JSSpecificationTypes.reference) {
                        return spec;
                    }
                    var ref = spec;
                    var base = ref.getBase();
                    if (ref.isUnresolvableReference()) {
                        backend.JSApi.throwReferenceErrorException();
                        return;
                    }
                    if (ref.isPropertyReference()) {
                        if (ref.hasPrimitiveBase()) {
                            var obj = backend.JSApi.toObject(base);
                            var desc = obj.objGetProperty(ref.getReferencedName());
                            if (desc instanceof backend.JSUndefined) {
                                return desc;
                            }
                            var propDescr = desc;
                            if (propDescr.isDataDescriptor()) {
                                return propDescr.jsvalue;
                            }
                            if (backend.JSApi.isUndefined(propDescr.jsget)) {
                                return propDescr.jsget;
                            }
                            return propDescr.jsget.objCall(base);
                        } else {
                            return base.objGet(ref.getReferencedName());
                        }
                    } else {
                        return base.getBindingValue(ref.getReferencedName(), ref.isStrictReference());
                    }
                }
                backend.JSGetValue = JSGetValue;
                function JSPutValue(global, spec, val) {
                    if (spec.getType() !== JSSpecificationTypes.reference) {
                        return spec;
                    }
                    var ref = spec;
                    var base = ref.getBase();
                    if (ref.isUnresolvableReference()) {
                        if (ref.isStrictReference()) {
                            backend.JSApi.throwReferenceErrorException();
                            return;
                        }
                        global.objPut(ref.getReferencedName(), val, false);
                    } else if (ref.isPropertyReference) {
                        if (ref.hasPrimitiveBase()) {
                            var obj = backend.JSApi.toObject(base);
                            if (!obj.objCanPut(ref.getReferencedName())) {
                                if (ref.isStrictReference()) {
                                    backend.JSApi.throwReferenceErrorException();
                                }
                                return;
                            }
                            var ownProp = obj.objGetOwnProperty(ref.getReferencedName());
                            if (ownProp instanceof backend.JSPropertyDescriptor && ownProp.isDataDescriptor()) {
                                if (ref.isStrictReference()) {
                                    backend.JSApi.throwReferenceErrorException();
                                }
                                return;
                            }
                            var prop = obj.objGetProperty(ref.getReferencedName());
                            if (prop instanceof backend.JSPropertyDescriptor && prop.isAccessorDescriptor()) {
                                prop.jsset.objCall(base, [ref.getReferencedName()]);
                            } else {
                                // Else, this is a request to create an own property on the transient object O
                                // If Throw is true, then throw a TypeError exception.
                                backend.throwNotImplementedYet();
                            }
                        } else {
                            base.objPut(ref.getReferencedName(), val, ref.isStrictReference());
                        }
                    } else {
                        base.setMutableBinding(ref.getReferencedName(), val, ref.isStrictReference());
                    }
                }
                backend.JSPutValue = JSPutValue;
            }(backend = trl.backend || (trl.backend = {})));
        }(trl || (trl = {})));
        var trl;
        (function (trl) {
            var backend;
            (function (backend) {
                var JSBoolean = function () {
                    function JSBoolean(value) {
                        this.value = value;
                    }
                    JSBoolean.prototype.getType = function () {
                        return backend.JSValues.boolean;
                    };
                    JSBoolean.prototype.getValue = function () {
                        return this.value;
                    };
                    return JSBoolean;
                }();
                backend.JSBoolean = JSBoolean;
            }(backend = trl.backend || (trl.backend = {})));
        }(trl || (trl = {})));
        var trl;
        (function (trl) {
            var backend;
            (function (backend) {
                var JSNumber = function () {
                    function JSNumber(value) {
                        this.value = value;
                    }
                    JSNumber.prototype.getType = function () {
                        return backend.JSValues.number;
                    };
                    JSNumber.prototype.getValue = function () {
                        return this.value;
                    };
                    return JSNumber;
                }();
                backend.JSNumber = JSNumber;
            }(backend = trl.backend || (trl.backend = {})));
        }(trl || (trl = {})));
        var __extends = this && this.__extends || function (d, b) {
            for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p];
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
        var trl;
        (function (trl) {
            var backend;
            (function (backend) {
                var JSObject = function () {
                    function JSObject() {
                        this.objProps = {};
                    }
                    JSObject.prototype.objGet = function (propName) {
                        var desc = this.objGetProperty(propName);
                        if (desc instanceof backend.JSUndefined) {
                            return desc;
                        }
                        var propDesc = desc;
                        if (propDesc.isDataDescriptor()) {
                            return propDesc.jsvalue;
                        }
                        trl.utilities.assert(propDesc.isAccessorDescriptor());
                        if (propDesc.jsget instanceof backend.JSUndefined) {
                            return propDesc.jsget;
                        }
                        return propDesc.jsget.objCall(this);
                    };
                    JSObject.prototype.objGetOwnProperty = function (propName) {
                        if (!_.has(this.objProps, propName.getValue())) {
                            return backend.JSApi.createUndefined();
                        }
                        var desc = new backend.JSPropertyDescriptor();
                        var xdesc = this.objProps[propName.getValue()];
                        if (xdesc.isDataDescriptor()) {
                            desc.jsvalue = xdesc.jsvalue;
                            desc.jswritable = xdesc.jswritable;
                        } else {
                            trl.utilities.assert(xdesc.isAccessorDescriptor());
                            desc.jsget = xdesc.jsget;
                            desc.jsset = xdesc.jsset;
                        }
                        desc.jsenumerable = xdesc.jsenumerable;
                        desc.jsconfigurable = xdesc.jsconfigurable;
                        return desc;
                    };
                    JSObject.prototype.objGetProperty = function (propName) {
                        var prop = this.objGetOwnProperty(propName);
                        if (prop instanceof backend.JSPropertyDescriptor) {
                            return prop;
                        }
                        if (backend.JSApi.isNull(this.objPrototype)) {
                            return backend.JSApi.createUndefined();
                        }
                        return this.objPrototype.objGetProperty(propName);
                    };
                    JSObject.prototype.objPut = function (propName, val, flag) {
                    };
                    JSObject.prototype.objCanPut = function (propName) {
                        var desc = this.objGetOwnProperty(propName);
                        if (desc instanceof backend.JSPropertyDescriptor) {
                            return desc.isAccessorDescriptor() ? backend.JSApi.createBoolean(!(desc.jsset instanceof backend.JSUndefined)) : desc.jswritable;
                        }
                        if (backend.JSApi.isNull(this.objPrototype)) {
                            return this.objExtensible;
                        }
                        var inherited = this.objPrototype.objGetProperty(propName);
                        if (inherited instanceof backend.JSUndefined) {
                            return this.objExtensible;
                        }
                        var inheritedDesc = inherited;
                        if (inheritedDesc.isAccessorDescriptor()) {
                            return backend.JSApi.createBoolean(!(inheritedDesc.jsset instanceof backend.JSUndefined));
                        }
                        trl.utilities.assert(inheritedDesc.isDataDescriptor());
                        if (backend.JSApi.isBooleanWithValue(this.objExtensible, false)) {
                            return backend.JSApi.createBoolean(false);
                        }
                        return inheritedDesc.jswritable;
                    };
                    JSObject.prototype.objHasProperty = function (propName) {
                        return;
                    };
                    JSObject.prototype.objDelete = function (hint) {
                        return;
                    };
                    JSObject.prototype.objDefaultValue = function (propName, flag) {
                        return;
                    };
                    JSObject.prototype.objDefineOwnProperty = function (propName, prop, flag) {
                    };
                    JSObject.prototype.getType = function () {
                        return backend.JSValues.object;
                    };
                    return JSObject;
                }();
                backend.JSObject = JSObject;
                var JSGlobalObject = function (_super) {
                    __extends(JSGlobalObject, _super);
                    function JSGlobalObject() {
                        _super.apply(this, arguments);
                    }
                    return JSGlobalObject;
                }(JSObject);
                backend.JSGlobalObject = JSGlobalObject;
            }(backend = trl.backend || (trl.backend = {})));
        }(trl || (trl = {})));
        var trl;
        (function (trl) {
            var backend;
            (function (backend) {
                var JSString = function () {
                    function JSString(value) {
                        this.value = value;
                    }
                    JSString.prototype.getType = function () {
                        return backend.JSValues.string;
                    };
                    JSString.prototype.getValue = function () {
                        return this.value;
                    };
                    return JSString;
                }();
                backend.JSString = JSString;
            }(backend = trl.backend || (trl.backend = {})));
        }(trl || (trl = {})));
        var __extends = this && this.__extends || function (d, b) {
            for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p];
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
        var trl;
        (function (trl) {
            var backend;
            (function (backend) {
                var JSCallableObject = function (_super) {
                    __extends(JSCallableObject, _super);
                    function JSCallableObject() {
                        _super.apply(this, arguments);
                    }
                    JSCallableObject.prototype.objCall = function (self, args) {
                        throw Error('not implemented yet');
                    };
                    return JSCallableObject;
                }(backend.JSObject);
                backend.JSCallableObject = JSCallableObject;
            }(backend = trl.backend || (trl.backend = {})));
        }(trl || (trl = {})));
    }
    return trl;
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2tlbmQvdmFsdWVzL0pTVW5kZWZpbmVkLnRzIiwiYmFja2VuZC92YWx1ZXMvSlNOdWxsLnRzIiwiYmFja2VuZC9KU0FwaS50cyIsImZyb250ZW5kL2xleGljYWwvSUxleGVyLnRzIiwiZnJvbnRlbmQvRXhjZXB0aW9uLnRzIiwiZnJvbnRlbmQvQ2hhclBvaW50cy50cyIsImZyb250ZW5kL2xleGljYWwvVG9rZW5EZWZpbml0aW9ucy50cyIsImZyb250ZW5kL2xleGljYWwvSWRlbnRpZnllcnMudHMiLCJmcm9udGVuZC9sZXhpY2FsL0xleGVyLnRzIiwic3JjL3Ryb3dlbC5qcyIsImZyb250ZW5kL2xleGljYWwvQ2hhcmFjdGVyU3RyZWFtLnRzIiwidXRpbGl0aWVzL0Fzc2VydGlvbi50cyIsImZyb250ZW5kL3N5bnRheC9Ob2RlRmFjdG9yeS50cyIsImZyb250ZW5kL3N5bnRheC9QYXJzZXIudHMiLCJmcm9udGVuZC9BcGkudHMiLCJiYWNrZW5kL3NwZWNpZmljYXRpb25UeXBlcy9KU0NvbXBsZXRpb24udHMiLCJiYWNrZW5kL3NwZWNpZmljYXRpb25UeXBlcy9KU0Vudmlyb21lbnRSZWNvcmQudHMiLCJiYWNrZW5kL3NwZWNpZmljYXRpb25UeXBlcy9KU0xpc3QudHMiLCJiYWNrZW5kL3NwZWNpZmljYXRpb25UeXBlcy9KU1Byb3BlcnR5RGVzY3JpcHRvci50cyIsImJhY2tlbmQvc3BlY2lmaWNhdGlvblR5cGVzL0pTUHJvcGVydHlJZGVudGlmaWVyLnRzIiwiYmFja2VuZC9zcGVjaWZpY2F0aW9uVHlwZXMvSlNSZWZlcmVuY2UudHMiLCJiYWNrZW5kL3NwZWNpZmljYXRpb25UeXBlcy9KU1NwZWNpZmljYXRpb25UeXBlcy50cyIsImJhY2tlbmQvdmFsdWVzL0pTQm9vbGVhbi50cyIsImJhY2tlbmQvdmFsdWVzL0pTTnVtYmVyLnRzIiwiYmFja2VuZC92YWx1ZXMvSlNPYmplY3QudHMiLCJiYWNrZW5kL3ZhbHVlcy9KU1N0cmluZy50cyIsImJhY2tlbmQvdmFsdWVzL29iamVjdHMvSlNDYWxsYWJsZU9iamVjdC50cyJdLCJuYW1lcyI6WyJ0cmwiLCJ0cmwuYmFja2VuZCIsInRybC5iYWNrZW5kLkpTVW5kZWZpbmVkIiwidHJsLmJhY2tlbmQuSlNVbmRlZmluZWQuZ2V0VHlwZSIsInRybC5iYWNrZW5kLkpTTnVsbCIsInRybC5iYWNrZW5kLkpTTnVsbC5nZXRUeXBlIiwidHJsLmJhY2tlbmQuSlNBcGkiLCJ0cmwuYmFja2VuZC5KU0FwaS5jcmVhdGVVbmRlZmluZWQiLCJ0cmwuYmFja2VuZC5KU0FwaS5jcmVhdGVTdHJpbmciLCJ0cmwuYmFja2VuZC5KU0FwaS5jcmVhdGVPYmplY3QiLCJ0cmwuYmFja2VuZC5KU0FwaS5jcmVhdGVOdW1iZXIiLCJ0cmwuYmFja2VuZC5KU0FwaS5jcmVhdGVOdWxsIiwidHJsLmJhY2tlbmQuSlNBcGkuY3JlYXRlQm9vbGVhbiIsInRybC5iYWNrZW5kLkpTQXBpLmlzU3RyaW5nIiwidHJsLmJhY2tlbmQuSlNBcGkuaXNTdHJpbmdXaXRoVmFsdWUiLCJ0cmwuYmFja2VuZC5KU0FwaS5pc051bWJlciIsInRybC5iYWNrZW5kLkpTQXBpLmlzTnVtYmVyV2l0aFZhbHVlIiwidHJsLmJhY2tlbmQuSlNBcGkuaXNCb29sZWFuIiwidHJsLmJhY2tlbmQuSlNBcGkuaXNCb29sZWFuV2l0aFZhbHVlIiwidHJsLmJhY2tlbmQuSlNBcGkuaXNOdWxsIiwidHJsLmJhY2tlbmQuSlNBcGkuaXNVbmRlZmluZWQiLCJ0cmwuYmFja2VuZC5KU0FwaS5pc09iamVjdCIsInRybC5iYWNrZW5kLkpTQXBpLnRvT2JqZWN0IiwidHJsLmJhY2tlbmQuSlNBcGkudG9Cb29sZWFuIiwidHJsLmJhY2tlbmQuSlNBcGkuaXNDYWxsYWJsZSIsInRybC5iYWNrZW5kLkpTQXBpLnRocm93UmVmZXJlbmNlRXJyb3JFeGNlcHRpb24iLCJ0cmwuYmFja2VuZC5KU0FwaS50aHJvd1R5cGVFcnJvckV4Y2VwdGlvbiIsInRybC5iYWNrZW5kLkpTQXBpLmNhbGxPYmplY3RGdW5jdGlvbiIsInRybC5iYWNrZW5kLnRocm93Tm90SW1wbGVtZW50ZWRZZXQiLCJ0cmwuZnJvbnRlbmQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbCIsInRybC5mcm9udGVuZC5sZXhpY2FsLlRva2VuVHlwZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxpdGVyYWxTdWJUeXBlIiwidHJsLmZyb250ZW5kLkV4Y2VwdGlvbkhhbmRsZXIiLCJ0cmwuZnJvbnRlbmQuRXhjZXB0aW9uSGFuZGxlci5jb25zdHJ1Y3RvciIsInRybC5mcm9udGVuZC5FeGNlcHRpb25IYW5kbGVyLmFkZEV4Y2VwdGlvbiIsInRybC5mcm9udGVuZC5FeGNlcHRpb25IYW5kbGVyLmhhc0V4Y2VwdGlvbnMiLCJ0cmwuZnJvbnRlbmQuRXhjZXB0aW9uSGFuZGxlci5jbGVhciIsInRybC5mcm9udGVuZC5FeGNlcHRpb25IYW5kbGVyLmdldEV4Y2VwdGlvbnMiLCJ0cmwuZnJvbnRlbmQuQ2hhclBvaW50cyIsInRybC5mcm9udGVuZC5DaGFyUG9pbnRzLmNyZWF0ZVN0cmluZ0Zyb21DaGFyUG9pbnRHZW5lcmF0b3IiLCJ0cmwuZnJvbnRlbmQuQ2hhclBvaW50cy5nZXREaWdpdEZyb21DaGFyUG9pbnQiLCJ0cmwuZnJvbnRlbmQuQ2hhclBvaW50cy5jb2RlUG9pbnRBdCIsInRybC5mcm9udGVuZC5DaGFyUG9pbnRzLmZyb21Db2RlUG9pbnQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5Ub2tlbkRlZmluaXRpb25zIiwidHJsLmZyb250ZW5kLmxleGljYWwuSWRlbnRpZnllcnMiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5JZGVudGlmeWVycy5pc0hleERpZ2l0IiwidHJsLmZyb250ZW5kLmxleGljYWwuSWRlbnRpZnllcnMuaXNEaWdpdCIsInRybC5mcm9udGVuZC5sZXhpY2FsLklkZW50aWZ5ZXJzLmlzS2V5d29yZCIsInRybC5mcm9udGVuZC5sZXhpY2FsLklkZW50aWZ5ZXJzLmlzTGluZVRlcm1pbmF0b3IiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5JZGVudGlmeWVycy5pc0lkZW50aWZpZXJTdGFydCIsInRybC5mcm9udGVuZC5sZXhpY2FsLklkZW50aWZ5ZXJzLmlzSWRlbnRpZmllclBhcnQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5JZGVudGlmeWVycy5pc1NpbXBsZVVuaWNvZGVDb250aW51ZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLklkZW50aWZ5ZXJzLmlzQ29tcGxleFVuaWNvZGVDb250aW51ZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLklkZW50aWZ5ZXJzLmlzU2ltcGxlVW5pY29kZVN0YXJ0IiwidHJsLmZyb250ZW5kLmxleGljYWwuSWRlbnRpZnllcnMuaXNDb21wbGV4VW5pY29kZVN0YXJ0IiwidHJsLmZyb250ZW5kLmxleGljYWwuSWRlbnRpZnllcnMuaXNQdW5jdHVhdGlvblN0YXJ0IiwidG9SZWFkYWJsZVRva2VuVHlwZUxvb2t1cCIsImxleGljYWwiLCJUb2tlblR5cGUiLCJrZXl3b3JkIiwiUmVhZGFibGVUb2tlblR5cGUiLCJpZGVudGlmaWVyIiwibGl0ZXJhbCIsInB1bmN0dWF0aW9uIiwiY29tbWVudCIsImVvZiIsImVycm9yIiwidG9rZW5UeXBlIiwidG9SZWFkYWJsZUxpdGVyYWxTdWJUeXBlTG9va3VwIiwiTGl0ZXJhbFN1YlR5cGUiLCJzdHJpbmciLCJSZWFkYWJsZUxpdGVyYWxTdWJUeXBlIiwibnVtYmVyIiwibnVsbCIsImJvb2xlYW4iLCJyZWdleCIsImxpdGVyYWxTdWJUeXBlIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5jb25zdHJ1Y3RvciIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmluaXRpYXRlQ2hhcmVjdGVyTG9va3VwT25jZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmlzRXJyb3IiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5pc0VvZiIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmlzQ29tbWVudCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmlzTGl0ZXJhbCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmlzUHVuY3R1YXRpb24iLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5pc0tleXdvcmQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5pc0lkZW50aWZpZXIiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5pc1B1bmN0dWF0aW9uVmFsdWUiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5pc0tleXdvcmRWYWx1ZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmlzSWRlbnRpZmllclZhbHVlIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIubWF0Y2hUeXBlIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIubWF0Y2hQdW5jdHVhdGlvbiIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLm1hdGNoS2V5d29yZCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnJlaW50ZXJwcmV0TGFzdFRva2VuQXNSZWdleCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLm5leHRUb2tlbiIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnN0YXJ0U3RhdGVFbmdpbmUiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci50cmFuc2xhdGVSZWFkYWJsZVRva2VucyIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmJlZ2luRnJvbVN0YXRlSW5pdCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmJlZ2luRnJvbVN0YXRlUmVnZXgiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5jbGVhbnVwQ29udGV4dCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmxhdGVzdFRva2VuIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIubG9va0FoZWFkTmV4dFRva2VuIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuaGFzTmV4dCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmdldENvbW1lbnRzIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuZ2V0Q3VycmVudEN1cnNvclBvcyIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnN0YXRlRXJyb3IiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zdGF0ZUluaXQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zdGF0ZUlkZW50aWZpZXIiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5nZW5TdGF0ZVN0cmluZyIsImNoYXJTdHJlYW0iLCJnZXROZXh0Q2hhciIsImNoYXJHZW4iLCJmcm9udGVuZCIsIkNoYXJQb2ludHMiLCJjcmVhdGVTdHJpbmdGcm9tQ2hhclBvaW50R2VuZXJhdG9yIiwiY2hhciIsInN0cmluZ1Rlcm1pbmF0b3JDaGFyIiwiUE5DIiwiYmFja3NsYXNoIiwiYiIsImFkZENoYXJQb2ludCIsImYiLCJuIiwiciIsInQiLCJ2IiwieCIsImhhbmRsZVNjYW5naXRzIiwiU3RhdGVzIiwidSIsImhhbmRsZVNjYW5IZXhEaWdpdHMiLCJJZGVudGlmeWVycyIsImlzTGluZVRlcm1pbmF0b3IiLCJoYW5kbGVOZXdMaW5lIiwidW5kZWZpbmVkIiwidW5leHBlY3RlZENoYXIiLCJ0b2tlbiIsImNyZWF0ZVRva2VuIiwiZ2V0U3RyaW5nIiwiZmluaXNoIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc3RhdGVOdW1iZXIiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zdGF0ZURvdE9yTnVtYmVyIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc3RhdGVEaXZPckNvbW1lbnQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zdGF0ZVB1bmN0dWF0aW9uU2luZ2xlIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc3RhdGVXaGl0ZVNwYWNlIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc3RhdGVMaW5lVGVybWluYXRvciIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnN0YXRlU2luZ2xlQ29tbWVudCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnN0YXRlTXVsdGlDb21tZW50IiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc2NhblVuaWNvZGVFc2NhcGVTZXF1ZW5jZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnN0YXRlUmVnZXgiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zY2FuRXhwb25lbnNpYWxBbmRDcmVhdGVOdW1iZXIiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zY2FuRGlnaXRzIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc2NhbkRlY2ltYWwiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zY2FuRXhwb25lbnRpYWwiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zY2FuSGV4RGlnaXRzVGltZXMiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zY2FuSGV4RGlnaXRzIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuZ2VuUHVuY3R1YXRpb25TY2FubmVyIiwiZndkQ3Vyc29yIiwiaSIsImxhc3RMZW4iLCJwdW5jc0xvb2t1cCIsImJ3ZEN1cnNvciIsImNyZWF0ZVRva2VuRnJvbVBvcyIsInN0YXJ0UG9zIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuY3JlYXRlVG9rZW5Tb3VyY2VMb2NhdGlvbkZyb21DdXJzb3IiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5jcmVhdGVUb2tlbkZyb21Qb3MiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5jcmVhdGVUb2tlbiIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmdlbkludGVnZXJGcm9tQXJyYXkiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5jcmVhdGVOdW1iZXIiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5oYW5kbGVTY2FuSGV4RGlnaXRzIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuaGFuZGxlTmV3TGluZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnVuZXhwZWN0ZWRDaGFyIiwidHJsLmZyb250ZW5kLmxleGljYWwuVG9rZW5Tb3VyY2VMb2NhdGlvbiIsInRybC5mcm9udGVuZC5sZXhpY2FsLlRva2VuU291cmNlTG9jYXRpb24uY3JlYXRlIiwidHJsLmZyb250ZW5kLmxleGljYWwuQ2hhcmFjdGVyU3RyZWFtIiwidHJsLmZyb250ZW5kLmxleGljYWwuQ2hhcmFjdGVyU3RyZWFtLmNvbnN0cnVjdG9yIiwidHJsLmZyb250ZW5kLmxleGljYWwuQ2hhcmFjdGVyU3RyZWFtLmdldE5leHRDaGFyIiwidHJsLmZyb250ZW5kLmxleGljYWwuQ2hhcmFjdGVyU3RyZWFtLmdldENoYXIiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0uZ2V0Q3Vyc29yIiwidHJsLmZyb250ZW5kLmxleGljYWwuQ2hhcmFjdGVyU3RyZWFtLmJ3ZEN1cnNvciIsInRybC5mcm9udGVuZC5sZXhpY2FsLkNoYXJhY3RlclN0cmVhbS5md2RDdXJzb3IiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0uYndkQ3Vyc29yUmFuZ2UiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0udG9rZW5pemUiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0ubWF0Y2giLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0ubWF0Y2hDb21wbGV4IiwidHJsLmZyb250ZW5kLmxleGljYWwuQ2hhcmFjdGVyU3RyZWFtLmlzRW9mIiwidHJsLmZyb250ZW5kLmxleGljYWwuQ2hhcmFjdGVyU3RyZWFtLmhhc05leHQiLCJ0cmwudXRpbGl0aWVzIiwidHJsLnV0aWxpdGllcy5hc3NlcnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4IiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY29uc3RydWN0b3IiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZU5vZGUiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVByb2dyYW0iLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudEVtcHR5IiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRCbG9jayIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50RXhwcmVzc2lvbiIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50SWYiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudEJyZWFrIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRDb250aW51ZSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50V2l0aCIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50U3dpdGNoIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRSZXR1cm4iLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudExhYmVsZWQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudFRocm93IiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRUcnkiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudFdoaWxlIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnREb1doaWxlIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRGb3IiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudEZvckluIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnREZWJ1Z2dlciIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRGVjbGFyYXRpb25GdW5jdGlvbiIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRGVjbGFyYXRpb25WYXJpYWJsZSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlVmFyaWFibGVEZWNsYXJhdG9yIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uVGhpcyIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbkFycmF5IiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uT2JqZWN0IiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVPYmplY3RQcm9wZXJ0eSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbkZ1bmN0aW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uU2VxdWVuY2UiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25VbmFyeSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbkJpbmFyeSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbkFzc2lnbm1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25VcGRhdGUiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25Mb2dpY2FsIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uQ29uZGl0aW9uYWwiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25OZXciLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25DYWxsIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uTWVtYmVyIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTd2l0Y2hDYXNlIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVDYXRjaENsYXVzZSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlSWRlbnRpZmllciIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlTGl0ZXJhbCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuY29uc3RydWN0b3IiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5iZWdpbkl0ZXJhdGlvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmZpbmlzaEl0ZXJhdGlvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLm5ld0l0ZXJhdGlvblNjb3BlIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucmVzdG9yZUl0ZXJhdGlvblNjb3BlIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuaXNPbkl0ZXJhdGlvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmJlZ2luU3dpdGNoIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuZmluaXNoU3dpdGNoIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIubmV3U3dpdGNoU2NvcGUiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5yZXN0b3JlU3dpdGNoU2NvcGUiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5pc09uU3dpdGNoIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuYmVnaW5GdW5jdGlvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmZpbmlzaEZ1bmN0aW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuaXNPbkZ1bmN0aW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuZ2V0RXhjZXB0aW9ucyIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmFkZEV4Y2VwdGlvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmRlbGVnYXRlTGV4aWNhbEVycm9ycyIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmNhblRvbGVyYXRlRXJyb3IiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVN0YXRlbWVudElmQ2FuVG9sZXJhdGUiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci50cmltT3B0aW9uYWxTZW1pY29sb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci50cmFja1Bvc2l0aW9uVW5hcnkiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci50cmFja1Bvc2l0aW9uQnlQb3MiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci50cmFja1Bvc2l0aW9uQnlUb2tlbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmV4cGVjdFR5cGUiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5leHBlY3RQdW5jdHVhdGlvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmV4cGVjdEtleXdvcmQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci50b2tlbklzSW5TYW1lTGluZSIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VTb3VyY2VFbGVtZW50cyIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlU3RhdGVtZW50IiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VCbG9ja1N0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlRW1wdHlTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUlmU3RhdGVtZW50IiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VJdGVyYXRpb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5pbm5lclBhcnNlV2hpbGVTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVdoaWxlU3RhdGVtZW50IiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuaW5uZXJQYXJzZURvV2hpbGVTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZURvV2hpbGVTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5pbm5lclBhcnNlRm9yU3RhdGVtZW50IiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuaXNJbnZhbGlkRm9ySW5MZWZ0U2lkZSIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlRm9yU3RhdGVtZW50IiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VLZXl3b3JkSWRlbnRpZmllclNlbWljb2xvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlQ29udGludWVTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUJyZWFrU3RhdGVtZW50IiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VSZXR1cm5TdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVdpdGhTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUNhc2VDbGF1c2VTdGF0ZW1lbnRzIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VDYXNlc0NsYXVzZSIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmlubmVyUGFyc2VTd2l0Y2hTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVN3aXRjaFN0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlVGhyb3dTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVRyeVN0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlRGVidWdnZXJTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUxhYmVsZWRTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUtleXdvcmRMcGFyRXhwcmVzc2lvblJwYXIiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVZhcmlhYmxlU3RhdGVtZW50IiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VFeHByZXNzaW9uU3RhdGVtZW50IiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VWYXJpYWJsZURlY2xhcmF0b3JzIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VWYXJpYWJsZURlY2xhcmF0b3IiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUV4cHJlc3Npb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5pc0xlZnRIYW5kRXhwcmVzc2lvblJlc29sdmluZ1RvUmVmZXJlbmNlIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VBc3NpZ25tZW50RXhwcmVzc2lvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlQ29uZGl0aW9uYWxFeHByZXNzaW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuaXNMb2dpY0JpbmFyeVRva2VuVmFsdWUiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5nZXRCaW5hcnlPcGVyYXRpb25Ub2tlbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmNyZWF0ZUJpbmFyeUV4cHJlc3Npb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5pbm5lckJhcnNlQmluYXJ5RXhwcmVzc2lvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlQmluYXJ5RXhwcmVzc2lvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlVW5hcnlFeHByZXNzaW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VQb3N0Zml4RXhwcmVzc2lvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlSWRlbnRpZmllciIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlTGVmdEhhbmRTaWRlRXhwcmVzc2lvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlUHJpbWFyeUV4cHJlc3Npb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZU5ld0V4cHJlc3Npb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUFyZ3VtZW50cyIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlQXJyYXlMaXRlcmFsIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIudHJpbUFycmF5Q29tbWFzIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VPYmplY3RMaXRlcmFsIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VQcm9wZXJ0eUFzc2lnbm1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVByb3BlcnR5TmFtZSIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlRnVuY3Rpb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUZ1bmN0aW9uQm9keSIsInRybC5mcm9udGVuZC5hcGkiLCJ0cmwuZnJvbnRlbmQuYXBpLnRva2VuaXplIiwidHJsLmZyb250ZW5kLmFwaS5wYXJzZSIsInRybC5iYWNrZW5kLkpTQ29tcGxldGlvblR5cGUiLCJ0cmwuYmFja2VuZC5KU0NvbXBsZXRpb24iLCJ0cmwuYmFja2VuZC5KU0NvbXBsZXRpb24uY29uc3RydWN0b3IiLCJ0cmwuYmFja2VuZC5KU0NvbXBsZXRpb24uZ2V0VHlwZSIsInRybC5iYWNrZW5kLkpTRW52aXJvbWVudFJlY29yZCIsInRybC5iYWNrZW5kLkpTRW52aXJvbWVudFJlY29yZC5nZXRCaW5kaW5nVmFsdWUiLCJ0cmwuYmFja2VuZC5KU0Vudmlyb21lbnRSZWNvcmQuc2V0TXV0YWJsZUJpbmRpbmciLCJ0cmwuYmFja2VuZC5KU0Vudmlyb21lbnRSZWNvcmQuZ2V0VHlwZSIsInRybC5iYWNrZW5kLkpTTGlzdCIsInRybC5iYWNrZW5kLkpTTGlzdC5jb25zdHJ1Y3RvciIsInRybC5iYWNrZW5kLkpTTGlzdC5nZXRUeXBlIiwidHJsLmJhY2tlbmQuSlNQcm9wZXJ0eURlc2NyaXB0b3IiLCJ0cmwuYmFja2VuZC5KU1Byb3BlcnR5RGVzY3JpcHRvci5jb25zdHJ1Y3RvciIsInRybC5iYWNrZW5kLkpTUHJvcGVydHlEZXNjcmlwdG9yLmNyZWF0ZURhdGFQcm9wZXJ0eURlc2NyaXB0b3IiLCJ0cmwuYmFja2VuZC5KU1Byb3BlcnR5RGVzY3JpcHRvci5jcmVhdGVBY2Nlc3NvclByb3BlcnR5RGVzY3JpcHRvciIsInRybC5iYWNrZW5kLkpTUHJvcGVydHlEZXNjcmlwdG9yLmlzQWNjZXNzb3JEZXNjcmlwdG9yIiwidHJsLmJhY2tlbmQuSlNQcm9wZXJ0eURlc2NyaXB0b3IuaXNEYXRhRGVzY3JpcHRvciIsInRybC5iYWNrZW5kLkpTUHJvcGVydHlEZXNjcmlwdG9yLmlzR2VuZXJpY0Rlc2NyaXB0b3IiLCJ0cmwuYmFja2VuZC5KU1Byb3BlcnR5RGVzY3JpcHRvci5mcm9tUHJvcGVydHlEZXNjcmlwdG9yIiwidHJsLmJhY2tlbmQuSlNQcm9wZXJ0eURlc2NyaXB0b3IudG9Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ0cmwuYmFja2VuZC5KU1Byb3BlcnR5RGVzY3JpcHRvci5nZXRUeXBlIiwidHJsLmJhY2tlbmQuSlNQcm9wZXJ0eUlkZW50aWZpZXIiLCJ0cmwuYmFja2VuZC5KU1Byb3BlcnR5SWRlbnRpZmllci5jb25zdHJ1Y3RvciIsInRybC5iYWNrZW5kLkpTUHJvcGVydHlJZGVudGlmaWVyLmdldFR5cGUiLCJ0cmwuYmFja2VuZC5KU1JlZmVyZW5jZSIsInRybC5iYWNrZW5kLkpTUmVmZXJlbmNlLmdldEJhc2UiLCJ0cmwuYmFja2VuZC5KU1JlZmVyZW5jZS5nZXRSZWZlcmVuY2VkTmFtZSIsInRybC5iYWNrZW5kLkpTUmVmZXJlbmNlLmlzU3RyaWN0UmVmZXJlbmNlIiwidHJsLmJhY2tlbmQuSlNSZWZlcmVuY2UuaGFzUHJpbWl0aXZlQmFzZSIsInRybC5iYWNrZW5kLkpTUmVmZXJlbmNlLmlzUHJvcGVydHlSZWZlcmVuY2UiLCJ0cmwuYmFja2VuZC5KU1JlZmVyZW5jZS5pc1VucmVzb2x2YWJsZVJlZmVyZW5jZSIsInRybC5iYWNrZW5kLkpTUmVmZXJlbmNlLmdldFR5cGUiLCJ0cmwuYmFja2VuZC5KU1NwZWNpZmljYXRpb25UeXBlcyIsInRybC5iYWNrZW5kLkpTR2V0VmFsdWUiLCJ0cmwuYmFja2VuZC5KU1B1dFZhbHVlIiwidHJsLmJhY2tlbmQuSlNCb29sZWFuIiwidHJsLmJhY2tlbmQuSlNCb29sZWFuLmNvbnN0cnVjdG9yIiwidHJsLmJhY2tlbmQuSlNCb29sZWFuLmdldFR5cGUiLCJ0cmwuYmFja2VuZC5KU0Jvb2xlYW4uZ2V0VmFsdWUiLCJ0cmwuYmFja2VuZC5KU051bWJlciIsInRybC5iYWNrZW5kLkpTTnVtYmVyLmNvbnN0cnVjdG9yIiwidHJsLmJhY2tlbmQuSlNOdW1iZXIuZ2V0VHlwZSIsInRybC5iYWNrZW5kLkpTTnVtYmVyLmdldFZhbHVlIiwiX19leHRlbmRzIiwiZCIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsIl9fIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJjcmVhdGUiLCJ0cmwuYmFja2VuZC5KU09iamVjdCIsInRybC5iYWNrZW5kLkpTT2JqZWN0LmNvbnN0cnVjdG9yIiwidHJsLmJhY2tlbmQuSlNPYmplY3Qub2JqR2V0IiwidHJsLmJhY2tlbmQuSlNPYmplY3Qub2JqR2V0T3duUHJvcGVydHkiLCJ0cmwuYmFja2VuZC5KU09iamVjdC5vYmpHZXRQcm9wZXJ0eSIsInRybC5iYWNrZW5kLkpTT2JqZWN0Lm9iakNhblB1dCIsInRybC5iYWNrZW5kLkpTT2JqZWN0Lm9iakhhc1Byb3BlcnR5IiwidHJsLmJhY2tlbmQuSlNPYmplY3Qub2JqRGVsZXRlIiwidHJsLmJhY2tlbmQuSlNPYmplY3Qub2JqRGVmYXVsdFZhbHVlIiwidHJsLmJhY2tlbmQuSlNPYmplY3QuZ2V0VHlwZSIsInRybC5iYWNrZW5kLkpTR2xvYmFsT2JqZWN0IiwidHJsLmJhY2tlbmQuSlNHbG9iYWxPYmplY3QuY29uc3RydWN0b3IiLCJ0cmwuYmFja2VuZC5KU1N0cmluZyIsInRybC5iYWNrZW5kLkpTU3RyaW5nLmNvbnN0cnVjdG9yIiwidHJsLmJhY2tlbmQuSlNTdHJpbmcuZ2V0VHlwZSIsInRybC5iYWNrZW5kLkpTU3RyaW5nLmdldFZhbHVlIiwidHJsLmJhY2tlbmQuSlNDYWxsYWJsZU9iamVjdCIsInRybC5iYWNrZW5kLkpTQ2FsbGFibGVPYmplY3QuY29uc3RydWN0b3IiLCJ0cmwuYmFja2VuZC5KU0NhbGxhYmxlT2JqZWN0Lm9iakNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7UUFDQSxJQUFPQSxHQUFQLEM7UUFBQSxDQUFBLFVBQU9BLEdBQVAsRUFBVTtBQUFBLFlBQUNBLElBQUFBLE9BQUFBLENBQUQ7QUFBQSxZQUFDQSxDQUFBQSxVQUFBQSxPQUFBQSxFQUFRQTtBQUFBQSxnQkFF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QUFBLFlBQUFBLENBRmlCRDtBQUFBQSx3QkFHakJDLFNBQUFBLENBQUFBLFNBQUFBLENBQUFBLFNBQUFBLElBQUFBLENBQUFBLElBQUFBLFNBQUFBLENBSGlCRDtBQUFBQSx3QkFJakJDLFNBQUFBLENBQUFBLFNBQUFBLENBQUFBLGFBQUFBLElBQUFBLENBQUFBLElBQUFBLGFBQUFBLENBSmlCRDtBQUFBQSx3QkFLakJDLFNBQUFBLENBQUFBLFNBQUFBLENBQUFBLFNBQUFBLElBQUFBLENBQUFBLElBQUFBLFNBQUFBLENBTGlCRDtBQUFBQSx3QkFNakJDLFNBQUFBLENBQUFBLFNBQUFBLENBQUFBLEtBQUFBLElBQUFBLENBQUFBLElBQUFBLEtBQUFBLENBTmlCRDtBQUFBQSx3QkFPakJDLFNBQUFBLENBQUFBLFNBQUFBLENBQUFBLE9BQUFBLElBQUFBLENBQUFBLElBQUFBLE9BQUFBLENBUGlCRDtBQUFBQSxxQkFBckJBLENBQVlBLE9BQUFBLENBQUFBLFNBQUFBLElBQUFBLENBQUFBLE9BQUFBLENBQUFBLFNBQUFBLEdBQVNBLEVBQVRBLENBQVpBLEdBRndCRDtBQUFBQSxvQkFFeEJDLElBQVlBLFNBQUFBLEdBQUFBLE9BQUFBLENBQUFBLFNBQVpBLENBRndCRDtBQUFBQSxvQkFZeEJDLENBQUFBLFVBQVlBLGNBQVpBLEVBQTBCQTtBQUFBQSx3QkFDdEJFLGNBQUFBLENBQUFBLGNBQUFBLENBQUFBLFFBQUFBLElBQUFBLENBQUFBLElBQUFBLFFBQUFBLENBRHNCRjtBQUFBQSx3QkFFdEJFLGNBQUFBLENBQUFBLGNBQUFBLENBQUFBLFFBQUFBLElBQUFBLENBQUFBLElBQUFBLFFBQUFBLENBRnNCRjtBQUFBQSx3QkFHdEJFLGNBQUFBLENBQUFBLGNBQUFBLENBQUFBLE1BQUFBLElBQUFBLENBQUFBLElBQUFBLE1BQUFBLENBSHNCRjtBQUFBQSx3QkFJdEJFLGNBQUFBLENBQUFBLGNBQUFBLENBQUFBLFNBQUFBLElBQUFBLENBQUFBLElBQUFBLFNBQUFBLENBSnNCRjtBQUFBQSx3QkFLdEJFLGNBQUFB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O0FBQUFBLG9CQUFBbVksU0FBQUEsZ0JBQUFBLEdBQUFBO0FBQUFBLHdCQUFzQ0MsTUFBQUEsQ0FBQUEsS0FBQUEsQ0FBQUEsSUFBQUEsRUFBQUEsU0FBQUEsRUFBdENEO0FBQUFBLHFCQUFBblk7QUFBQUEsb0JBRVdtWSxnQkFBQUEsQ0FBQUEsU0FBQUEsQ0FBQUEsT0FBQUEsR0FBUEEsVUFBZUEsSUFBZkEsRUFBK0JBLElBQS9CQSxFQUFnREE7QUFBQUEsd0JBQzVDRSxNQUFNQSxLQUFBQSxDQUFNQSxxQkFBTkEsQ0FBTkEsQ0FENENGO0FBQUFBLHFCQUF6Q0EsQ0FGWG5ZO0FBQUFBLG9CQU1BbVksT0FBQUEsZ0JBQUFBLENBTkFuWTtBQUFBQSxpQkFBQUEsQ0FBc0NBLE9BQUFBLENBQUFBLFFBQXRDQSxDQUFBQSxDQUZlRDtBQUFBQSxnQkFFRkMsT0FBQUEsQ0FBQUEsZ0JBQUFBLEdBQWdCQSxnQkFBaEJBLENBRkVEO0FBQUFBLGFBQVJBLENBQUFBLE9BQUFBLEdBQUFBLEdBQUFBLENBQUFBLE9BQUFBLElBQUFBLENBQUFBLEdBQUFBLENBQUFBLE9BQUFBLEdBQU9BLEVBQVBBLENBQUFBLEdBQUQ7QUFBQSxTQUFWLENBQU9BLEdBQUEsSUFBQSxDQUFBQSxHQUFBLEdBQUcsRUFBSCxDQUFQLEciLCJmaWxlIjoic3JjL3Ryb3dlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5tb2R1bGUgdHJsLmJhY2tlbmQge1xyXG4gICAgXHJcbiAgICBleHBvcnQgY2xhc3MgSlNVbmRlZmluZWQgaW1wbGVtZW50cyBJSlNWYWx1ZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGdldFR5cGUoKTogSlNWYWx1ZXMge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNWYWx1ZXMudW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG59IiwiXHJcbm1vZHVsZSB0cmwuYmFja2VuZCB7XHJcbiAgICBcclxuICAgIGV4cG9ydCBjbGFzcyBKU051bGwgaW1wbGVtZW50cyBJSlNWYWx1ZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGdldFR5cGUoKTogSlNWYWx1ZXMge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNWYWx1ZXMubnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ2YWx1ZXMvSlNVbmRlZmluZWQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwidmFsdWVzL0pTTnVsbC50c1wiIC8+XHJcblxyXG5tb2R1bGUgdHJsLmJhY2tlbmQge1xyXG4gICAgXHJcbiAgICBleHBvcnQgdHlwZSBKU1ByaW1pdGl2ZSA9IEpTVW5kZWZpbmVkIHwgSlNOdWxsIHwgSlNCb29sZWFuIHwgSlNOdW1iZXIgfCBKU1N0cmluZztcclxuICAgIFxyXG4gICAgZXhwb3J0IGNsYXNzIEpTQXBpIHtcclxuICAgICAgICBcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8gUHVyZSBKUyBWYWx1ZSBGYWN0b3J5XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdW5kZWZpbmVkVmFsdWUgPSBuZXcgSlNVbmRlZmluZWQoKTtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVVuZGVmaW5lZCgpOiBKU1VuZGVmaW5lZCB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU0FwaS51bmRlZmluZWRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBjcmVhdGVTdHJpbmcodmFsdWU6IHN0cmluZyk6IEpTU3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBKU1N0cmluZyh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlT2JqZWN0KCk6IEpTT2JqZWN0IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBKU09iamVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZU51bWJlcih2YWx1ZTogbnVtYmVyKTogSlNOdW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEpTTnVtYmVyKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgbnVsbFZhbHVlID0gbmV3IEpTTnVsbCgpO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlTnVsbCgpOiBKU051bGwge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNBcGkubnVsbFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUJvb2xlYW4odmFsdWU6IGJvb2xlYW4pOiBKU0Jvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEpTQm9vbGVhbih2YWx1ZSk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICAvLy8vLy8vL1B1cmUgSlMgVmFsdWUgRmFjdG9yeS8vLy8vLy8vLy9cclxuICAgICAgICBcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8gUHVyZSBKUyBWYWx1ZSB1dGlsaXRpZXNcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgc3RhdGljIGlzU3RyaW5nKHZhbDogSUpTVmFsdWUpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbC5nZXRUeXBlKCkgPT09IEpTVmFsdWVzLnN0cmluZztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpc1N0cmluZ1dpdGhWYWx1ZSh2YWw6IElKU1ZhbHVlLCBzdHI6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsLmdldFR5cGUoKSA9PT0gSlNWYWx1ZXMuc3RyaW5nXHJcbiAgICAgICAgICAgICAgICAmJiAodmFsIGFzIEpTU3RyaW5nKS5nZXRWYWx1ZSgpID09PSBzdHI7XHJcbiAgICAgICAgfSAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpc051bWJlcih2YWw6IElKU1ZhbHVlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWwuZ2V0VHlwZSgpID09PSBKU1ZhbHVlcy5udW1iZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaXNOdW1iZXJXaXRoVmFsdWUodmFsOiBJSlNWYWx1ZSwgbnVtOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbC5nZXRUeXBlKCkgPT09IEpTVmFsdWVzLnN0cmluZ1xyXG4gICAgICAgICAgICAgICAgJiYgKHZhbCBhcyBKU051bWJlcikuZ2V0VmFsdWUoKSA9PT0gbnVtO1xyXG4gICAgICAgIH0gICBcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgc3RhdGljIGlzQm9vbGVhbih2YWw6IElKU1ZhbHVlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWwuZ2V0VHlwZSgpID09PSBKU1ZhbHVlcy5ib29sZWFuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgc3RhdGljIGlzQm9vbGVhbldpdGhWYWx1ZSh2YWw6IElKU1ZhbHVlLCBpczogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsLmdldFR5cGUoKSA9PT0gSlNWYWx1ZXMuc3RyaW5nXHJcbiAgICAgICAgICAgICAgICAmJiAodmFsIGFzIEpTQm9vbGVhbikuZ2V0VmFsdWUoKSA9PT0gaXM7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpc051bGwodmFsOiBJSlNWYWx1ZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsLmdldFR5cGUoKSA9PT0gSlNWYWx1ZXMubnVsbDtcclxuICAgICAgICB9ICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpc1VuZGVmaW5lZCh2YWw6IElKU1ZhbHVlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWwuZ2V0VHlwZSgpID09PSBKU1ZhbHVlcy51bmRlZmluZWQ7XHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgc3RhdGljIGlzT2JqZWN0KHZhbDogSUpTVmFsdWUpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbC5nZXRUeXBlKCkgPT09IEpTVmFsdWVzLm9iamVjdDtcclxuICAgICAgICB9ICAgICAgICAgXHJcbiAgICAgICAgLy8vLy8vLy9QdXJlIEpTIFZhbHVlIHV0aWxpdGllcy8vLy8vLy8vLy9cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHRvT2JqZWN0KHZhbDogSUpTVmFsdWUpOiBKU09iamVjdCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aHJvd05vdEltcGxlbWVudGVkWWV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdG9Cb29sZWFuKHZhbDogSUpTVmFsdWUpOiBKU0Jvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhyb3dOb3RJbXBsZW1lbnRlZFlldCgpO1xyXG4gICAgICAgIH0gICBcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgc3RhdGljIGlzQ2FsbGFibGUodmFsOiBJSlNWYWx1ZSk6IEpTQm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aHJvd05vdEltcGxlbWVudGVkWWV0KCk7XHJcbiAgICAgICAgfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8gRXhjZXB0aW9uc1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdGhyb3dSZWZlcmVuY2VFcnJvckV4Y2VwdGlvbigpIHtcclxuICAgICAgICAgICAgdGhyb3dOb3RJbXBsZW1lbnRlZFlldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHRocm93VHlwZUVycm9yRXhjZXB0aW9uKCkge1xyXG4gICAgICAgICAgICB0aHJvd05vdEltcGxlbWVudGVkWWV0KCk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vRXhjZXB0aW9ucy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY2FsbE9iamVjdEZ1bmN0aW9uKG9iajogSlNPYmplY3QsIGFyZ3M/OiBhbnlbXSk6IElKU1ZhbHVlIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTQXBpLmNyZWF0ZVVuZGVmaW5lZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHRocm93Tm90SW1wbGVtZW50ZWRZZXQoKTogYW55IHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQgeWV0XCIpO1xyXG4gICAgfVxyXG59IiwibW9kdWxlIHRybC5mcm9udGVuZC5sZXhpY2FsIHtcclxuXHRcclxuICAgIGV4cG9ydCBlbnVtIFRva2VuVHlwZSB7XHJcbiAgICAgICAga2V5d29yZCA9IDEsXHJcbiAgICAgICAgaWRlbnRpZmllcixcclxuICAgICAgICBsaXRlcmFsLFxyXG4gICAgICAgIHB1bmN0dWF0aW9uLFxyXG4gICAgICAgIGNvbW1lbnQsXHJcbiAgICAgICAgZW9mLFxyXG4gICAgICAgIGVycm9yXHJcbiAgICB9ICAgIFxyXG4gICAgXHJcbiAgICBleHBvcnQgZW51bSBMaXRlcmFsU3ViVHlwZSB7XHJcbiAgICAgICAgc3RyaW5nID0gMSxcclxuICAgICAgICBudW1iZXIsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBib29sZWFuLFxyXG4gICAgICAgIHJlZ2V4XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElUb2tlblBvc2l0aW9uICB7XHJcbiAgICAgICAgbGluZTogbnVtYmVyO1xyXG4gICAgICAgIGNvbHVtbjogbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVRva2VuU291cmNlTG9jYXRpb24ge1xyXG4gICAgICAgIHNvdXJjZT86IHN0cmluZztcclxuICAgICAgICBzdGFydDogSVRva2VuUG9zaXRpb247XHJcbiAgICAgICAgZW5kOiBJVG9rZW5Qb3NpdGlvbjtcclxuICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJVG9rZW4ge1xyXG4gICAgICAgIHR5cGU6IHN0cmluZyB8IFRva2VuVHlwZSxcclxuICAgICAgICB2YWx1ZTogYW55LFxyXG4gICAgICAgIHN1YlR5cGU/OiBzdHJpbmcgfCBMaXRlcmFsU3ViVHlwZSxcclxuICAgICAgICBsb2M/OiBJVG9rZW5Tb3VyY2VMb2NhdGlvblxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUxleGVyT3B0aW9ucyB7XHJcbiAgICAgICAgbG9jPzogYm9vbGVhbjtcclxuICAgICAgICByZWFkYWJsZVRva2Vuc01vZGU/OiBib29sZWFuO1xyXG4gICAgICAgIGluY2x1ZGVDb21tZW50c0FzTm9ybWFsVG9rZW5zPzogYm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElMZXhlciB7XHJcbiAgICAgICAgLy8gZ2V0IG5leHQgdG9rZW5cclxuICAgICAgICBuZXh0VG9rZW4oKTogSVRva2VuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHJlIHBhcnNlIHRoZSBsYXRlc3QgdG9rZW4gKHNob3VsZCBiZWdpbiB3aXRoICcvJylcclxuICAgICAgICAvLyBhcyByZWd1bGFyIGV4cHJlc3Npb24gbGl0ZXJhbFxyXG4gICAgICAgIHJlaW50ZXJwcmV0TGFzdFRva2VuQXNSZWdleCh0b2tlbjogSVRva2VuKTogSVRva2VuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGlzIG5leHQgdG9rZW5cclxuICAgICAgICBoYXNOZXh0KCk6IGJvb2xlYW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcmV0dXJucyB0aGUgbGFzdCBwYXJzZWQgdG9rZW5cclxuICAgICAgICBsYXRlc3RUb2tlbigpOiBJVG9rZW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gYWN0cyBsaWtlIGxvb2tpbmcgZm9yd2FyZCBieSByZXR1cm5pbmcgdGhlIG5leHQgdG9rZW4uXHJcbiAgICAgICAgLy8gbmV4dFRva2VuKCksIGFuZCBoYXNUb2tlbigpIGRvZXMgbm90IGVmZmVjdGVkXHJcbiAgICAgICAgbG9va0FoZWFkTmV4dFRva2VuKCk6IElUb2tlbjsgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBhcmd1bWVudCBpcyB0eXBlIG9mIGVycm9yIHR5cGVcclxuICAgICAgICBpc0Vycm9yKHRva2VuOiBJVG9rZW4pOiBib29sZWFuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBhcmd1bWVudCBpcyB0eXBlIG9mIGVuZCBvZiBmaWxlIHR5cGVcclxuICAgICAgICBpc0VvZih0b2tlbjogSVRva2VuKTogYm9vbGVhbjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgYXJndW1lbnQgaXMgdHlwZSBvZiBjb21tZW50IHR5cGVcclxuICAgICAgICBpc0NvbW1lbnQodG9rZW46IElUb2tlbik6IGJvb2xlYW47ICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgYXJndW1lbnQgaXMgdHlwZSBvZiBsaXRlcmFuIHR5cGVcclxuICAgICAgICBpc0xpdGVyYWwodG9rZW46IElUb2tlbik6IGJvb2xlYW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGFyZ3VtZW50IGlzIHR5cGUgb2YgcHVuY3R1YXRpb24gdHlwZVxyXG4gICAgICAgIGlzUHVuY3R1YXRpb24odG9rZW46IElUb2tlbik6IGJvb2xlYW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGFyZ3VtZW50IGlzIHR5cGUgb2Yga2V5d29yZCB0eXBlXHJcbiAgICAgICAgaXNLZXl3b3JkKHRva2VuOiBJVG9rZW4pOiBib29sZWFuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBhcmd1bWVudCBpcyB0eXBlIG9mIGlkZW50aWZpZXIgdHlwZVxyXG4gICAgICAgIGlzSWRlbnRpZmllcih0b2tlbjogSVRva2VuKTogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGFyZ3VtZW50IGlzIHR5cGUgb2YgcHVuY3R1YXRpb24gdHlwZVxyXG4gICAgICAgIC8vIGFuZCBpcyBlcXVhbCB3aXRoIHRoZSBzcGVjaWZpYyB2YWx1ZVxyXG4gICAgICAgIGlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbjogSVRva2VuLCB2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgYXJndW1lbnQgaXMgdHlwZSBvZiBrZXl3b3JkIHR5cGVcclxuICAgICAgICAvLyBhbmQgaXMgZXF1YWwgd2l0aCB0aGUgc3BlY2lmaWMgdmFsdWVcclxuICAgICAgICBpc0tleXdvcmRWYWx1ZSh0b2tlbjogSVRva2VuLCB2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgYXJndW1lbnQgaXMgdHlwZSBvZiBpZGVudGlmaWVyIHR5cGVcclxuICAgICAgICAvLyBhbmQgaXMgZXF1YWwgd2l0aCB0aGUgc3BlY2lmaWMgdmFsdWVcclxuICAgICAgICBpc0lkZW50aWZpZXJWYWx1ZSh0b2tlbjogSVRva2VuLCB2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zdW1lIHRoZSBuZXh0IHRva2VuIGlmIGl0cyB0eXBlIGlzIHB1bmN0dWF0aW9uXHJcbiAgICAgICAgLy8gYW5kIGlzIGVxdWFsIHdpdGggdGhlIHNwZWNpZmljIHZhbHVlXHJcbiAgICAgICAgbWF0Y2hQdW5jdHVhdGlvbih2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zdW1lIHRoZSBuZXh0IHRva2VuIGlmIGl0cyB0eXBlIGlzIGtleXdvcmRcclxuICAgICAgICAvLyBhbmQgaXMgZXF1YWwgd2l0aCB0aGUgc3BlY2lmaWMgdmFsdWVcclxuICAgICAgICBtYXRjaEtleXdvcmQodmFsdWU6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcmV0dXJucyBhbGwgdGhlIGNvbW1lbnRzIHRoYXQgaGF2ZSBiZWVuIFxyXG4gICAgICAgIC8vIGNvbGxlY3RlZCBzaW5jZSB0aGUgY3VycmVudCBleGVjdXRpb24gXHJcbiAgICAgICAgZ2V0Q29tbWVudHMoKTogSVRva2VuW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcmV0dXJucyB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiBjdXJzb3IgaXMgdGhlIHNvdXJjZSBzdHJlYW1cclxuICAgICAgICBnZXRDdXJyZW50Q3Vyc29yUG9zKCk6IElUb2tlblBvc2l0aW9uO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiSUV4Y2VwdGlvbi5kLnRzXCIgLz5cclxuXHJcbm1vZHVsZSB0cmwuZnJvbnRlbmQge1xyXG5cdGV4cG9ydCBjbGFzcyBFeGNlcHRpb25IYW5kbGVyIGltcGxlbWVudHMgSUV4Y2VwdGlvbkhhbmRsZXIge1xyXG5cdFx0cHJpdmF0ZSBleGNlcHRpb25zOiBJRXhjZXB0aW9uW10gPSBbXTtcclxuXHRcdFxyXG5cdFx0cHVibGljIGNvbnN0cnVjdG9yKCl7fVxyXG5cdFx0XHJcblx0XHRwdWJsaWMgYWRkRXhjZXB0aW9uKG1zZzogc3RyaW5nLCBsaW5lOiBudW1iZXIsIGNvbHVtbjogbnVtYmVyKSB7XHJcblx0XHRcdGxldCBleGNlcHRpb246IElFeGNlcHRpb24gPSB7XHJcblx0XHRcdFx0cG9zOiB7XHJcblx0XHRcdFx0XHRjb2x1bW4sIFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVcclxuXHRcdFx0XHR9LFx0XHRcclxuXHRcdFx0XHRtc2c6IG1zZ1xyXG5cdFx0XHR9O1xyXG5cdFx0XHR0aGlzLmV4Y2VwdGlvbnMucHVzaChleGNlcHRpb24pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwdWJsaWMgaGFzRXhjZXB0aW9ucygpOiBib29sZWFuIHtcclxuXHRcdFx0cmV0dXJuICFfLmlzRW1wdHkodGhpcy5leGNlcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIGNsZWFyKCk6IHZvaWQge1xyXG5cdFx0XHR0aGlzLmV4Y2VwdGlvbnMubGVuZ3RoID0gMDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIGdldEV4Y2VwdGlvbnMoKTogSUV4Y2VwdGlvbltdIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZXhjZXB0aW9ucztcclxuXHRcdH1cclxuXHR9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHNEZWZpbml0aW9ucy90c2QuZC50c1wiIC8+XHJcblxyXG5tb2R1bGUgdHJsLmZyb250ZW5kIHtcclxuICAgIFxyXG4gICAgLy8gbGV0J3MgdXNlIG91ciBpbWFnaW5hdGlvblxyXG4gICAgZXhwb3J0IHR5cGUgSWNoYXIgPSBudW1iZXI7XHJcblx0XHJcblx0ZXhwb3J0IGludGVyZmFjZSBJU3RyaW5nRnJvbUNoYXJQb2ludCB7XHJcblx0XHRhZGRDaGFyUG9pbnQoY2hhcjogbnVtYmVyKTtcclxuXHRcdGdldFN0cmluZygpOiBzdHJpbmc7XHJcblx0fVxyXG5cdFxyXG5cdGV4cG9ydCBjbGFzcyBDaGFyUG9pbnRzIHtcclxuXHRcdHN0YXRpYyBjcmVhdGVTdHJpbmdGcm9tQ2hhclBvaW50R2VuZXJhdG9yKCk6IElTdHJpbmdGcm9tQ2hhclBvaW50IHtcclxuXHRcdFx0bGV0IGNoYXJCdWZmZXI6IHN0cmluZ1tdID0gW107XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0YWRkQ2hhclBvaW50OiAoY2hhcjogSWNoYXIpID0+IHtcclxuXHRcdFx0XHRcdGNoYXJCdWZmZXIucHVzaChDaGFyUG9pbnRzLmZyb21Db2RlUG9pbnQoY2hhcikpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Z2V0U3RyaW5nOiAoKTogc3RyaW5nID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBjaGFyQnVmZmVyLmpvaW4oJycpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHJpdmF0ZSBzdGF0aWMgWkVST19DSEFSX0NPREUgPSBcIjBcIi5jaGFyQ29kZUF0KDApO1xyXG5cdFx0c3RhdGljIGdldERpZ2l0RnJvbUNoYXJQb2ludChjOiBJY2hhcik6IG51bWJlciB7XHJcblx0XHRcdHJldHVybiBjIC0gQ2hhclBvaW50cy5aRVJPX0NIQVJfQ09ERTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0c3RhdGljIGNvZGVQb2ludEF0KHN0cjogc3RyaW5nLCBwb3M6IG51bWJlcik6IEljaGFyIHtcclxuXHRcdFx0cmV0dXJuICg8YW55PnN0cikuY29kZVBvaW50QXQocG9zKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0c3RhdGljIGZyb21Db2RlUG9pbnQocG9pbnQ6IEljaGFyKTogc3RyaW5nIHtcclxuXHRcdFx0cmV0dXJuICg8YW55PlN0cmluZykuZnJvbUNvZGVQb2ludChwb2ludCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG59IiwiXHJcbm1vZHVsZSB0cmwuZnJvbnRlbmQubGV4aWNhbCB7XHJcblx0Y29uc3QgdCA9IHRydWU7XHJcblx0XHJcblx0ZXhwb3J0IGNsYXNzIFRva2VuRGVmaW5pdGlvbnMge1xyXG5cdFxyXG5cdFx0c3RhdGljIFdTID0ge1xyXG5cdFx0XHQweDAwMDk6IHQsXHJcblx0XHRcdDB4MDAwQjogdCxcclxuXHRcdFx0MHgwMDBDOiB0LFxyXG5cdFx0XHQweDAwMjA6IHQsXHJcblx0XHRcdDB4MDBBMDogdCxcclxuXHRcdFx0MHhGRUZGOiB0XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRzdGF0aWMgTFQgPSB7XHJcblx0XHRcdDB4MDAwQTogdCxcclxuXHRcdFx0MHgwMDBEOiB0LCAvL2NyXHJcblx0XHRcdDB4MjAyODogdCxcclxuXHRcdFx0MHgyMDI6IHRcclxuXHRcdH07XHJcblxyXG4vLyAweDIwMEM6IHQsIC8vendualxyXG4vLyAweDIwMEQ6IHQsIC8vendqXHJcblx0XHRcdFx0XHJcblx0XHRzdGF0aWMgS1cgPSB7XHJcblx0XHRcdGJyZWFrOiB0LFxyXG5cdFx0XHRkbzogdCxcclxuXHRcdFx0aW5zdGFuY2VvZjogdCxcclxuXHRcdFx0dHlwZW9mOiB0LFxyXG5cdFx0XHRjYXNlOiB0LFxyXG5cdFx0XHRlbHNlOiB0LFxyXG5cdFx0XHRuZXc6IHQsXHJcblx0XHRcdHZhcjogdCxcclxuXHRcdFx0Y2F0Y2g6IHQsXHJcblx0XHRcdGZpbmFsbHk6IHQsXHJcblx0XHRcdHJldHVybjogdCxcclxuXHRcdFx0dm9pZDogdCxcclxuXHRcdFx0Y29udGludWU6IHQsXHJcblx0XHRcdGZvcjogdCxcclxuXHRcdFx0c3dpdGNoOiB0LFxyXG5cdFx0XHR3aGlsZTogdCxcclxuXHRcdFx0ZGVidWdnZXI6IHQsXHJcblx0XHRcdGZ1bmN0aW9uOiB0LFxyXG5cdFx0XHR0aGlzOiB0LFxyXG5cdFx0XHR3aXRoOiB0LFxyXG5cdFx0XHRkZWZhdWx0OiB0LFxyXG5cdFx0XHRpZjogdCxcclxuXHRcdFx0dGhyb3c6IHQsXHJcblx0XHRcdGRlbGV0ZTogdCxcclxuXHRcdFx0aW46IHQsXHJcblx0XHRcdHRyeTogdCxcclxuXHRcclxuXHRcdFx0Y2xhc3M6IHQsXHJcblx0XHRcdGVudW06IHQsXHJcblx0XHRcdGV4dGVuZHM6IHQsXHJcblx0XHRcdHN1cGVyOiB0LFxyXG5cdFx0XHRjb25zdDogdCxcclxuXHRcdFx0ZXhwb3J0OiB0LFxyXG5cdFx0XHRpbXBvcnQ6IHQsXHJcblx0XHJcblx0XHRcdGltcGxlbWVudHM6IHQsXHJcblx0XHRcdGxldDogdCxcclxuXHRcdFx0cHJpdmF0ZTogdCxcclxuXHRcdFx0cHVibGljOiB0LFxyXG5cdFx0XHRpbnRlcmZhY2U6IHQsXHJcblx0XHRcdHBhY2thZ2U6IHQsXHJcblx0XHRcdHByb3RlY3RlZDogdCxcclxuXHRcdFx0c3RhdGljOiB0LFxyXG5cdFx0XHR5aWVsZDogdFxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0c3RhdGljIExJVCA9IHtcclxuXHRcdFx0bnVsbDogdCxcclxuXHRcdFx0dHJ1ZTogdCxcclxuXHRcdFx0ZmFsc2U6IHRcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHN0YXRpYyBQTkNfU0lOR0xFID0ge1xyXG5cdFx0XHRsYnJhY2U6IDEyMyxcclxuXHRcdFx0cmJyYWNlOiAxMjUsXHJcblx0XHRcdGxwYXJlbnRoOiA0MCxcclxuXHRcdFx0cnBhcmVudGg6IDQxLFxyXG5cdFx0XHRsYnJhY2tldDogOTEsXHJcblx0XHRcdHJicmFja2V0OiA5MyxcclxuXHRcdFx0ZG90OiA0NixcclxuXHRcdFx0c2VtaWNvbG9uOiA1OSxcclxuXHRcdFx0Y29tbWE6IDQ0LFxyXG5cdFx0XHRsZXNzOiA2MCxcclxuXHRcdFx0bW9yZTogNjIsXHJcblx0XHRcdHBsdXM6IDQzLFxyXG5cdFx0XHRtaW51czogNDUsXHJcblx0XHRcdHBlcmNlbnQ6IDM3LFxyXG5cdFx0XHRhbXBlcnNhbmQ6IDM4LFxyXG5cdFx0XHR2ZXJ0aWNhbDogMTI0LFxyXG5cdFx0XHRjYXJldDogOTQsXHJcblx0XHRcdGV4Y2w6IDMzLFxyXG5cdFx0XHR0aWxkZTogMTI2LFxyXG5cdFx0XHRxdWVzdDogNjMsXHJcblx0XHRcdGNvbG9uOiA1OCxcclxuXHRcdFx0YXNzaWduOiA2MSxcclxuXHRcdFx0YXN0ZXJpc2s6IDQyLFxyXG5cdFx0XHRzbGFzaDogNDcsXHJcblx0XHRcdGJhY2tzbGFzaDogOTIsXHJcblx0XHRcdGRvbGxhcjogMzYsXHJcblx0XHRcdGV4cDogMTAxLFxyXG5cdFx0XHRleHBiOiA2OSxcclxuXHRcdFx0YXBvc3Ryb3BoZTogMzksXHJcblx0XHRcdHFtYXJrOiAzNCxcclxuXHRcdFx0emVybzogNDgsXHJcblx0XHRcdFxyXG5cdFx0XHRiOiA5OCxcclxuXHRcdFx0ZjogMTAyLFxyXG5cdFx0XHRuOiAxMTAsXHJcblx0XHRcdHI6IDExNCxcclxuXHRcdFx0dDogMTE2LFxyXG5cdFx0XHR2OiAxMTgsXHJcblx0XHRcdHg6IDEyMCxcclxuXHRcdFx0dTogMTE3LFxyXG5cdFx0XHRcclxuXHRcdFx0bGY6IDB4MDAwQSxcclxuICAgICAgICAgICAgY3I6IDB4MDAwRFxyXG5cdFx0fTtcdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0c3RhdGljIFVOSUNPREVfVU5DT01NT05fVEhSRVNIT0xEID0gMTcwO1xyXG5cdFx0XHJcblx0XHRzdGF0aWMgVU5JQ09ERV9DT05USU5VRV9DT01NT04gPSB7IDB4MjAwQzogdCAvKiB6d25qICovLCAweDIwMEQ6IHQgLyogendqICovLCAzNjogdCAvKiAkICovLCA5MjogdCAvKiBcXCAqLywgXHJcblx0XHRcdDQ4OiB0LCA0OTogdCwgNTA6IHQsIDUxOiB0LCA1MjogdCwgNTM6IHQsIDU0OiB0LCA1NTogdCwgNTY6IHQsIDU3OiB0LCA2NTogdCwgNjY6IHQsIDY3OiB0LCA2ODogdCwgNjk6IHQsIDcwOiB0LCA3MTogdCwgNzI6IHQsIDczOiB0LCA3NDogdCwgNzU6IHQsIDc2OiB0LCA3NzogdCwgNzg6IHQsIDc5OiB0LCA4MDogdCwgODE6IHQsIDgyOiB0LCA4MzogdCwgODQ6IHQsIDg1OiB0LCA4NjogdCwgODc6IHQsIDg4OiB0LCA4OTogdCwgOTA6IHQsIDk1OiB0LCA5NzogdCwgOTg6IHQsIDk5OiB0LCAxMDA6IHQsIDEwMTogdCwgMTAyOiB0LCAxMDM6IHQsIDEwNDogdCwgMTA1OiB0LCAxMDY6IHQsIDEwNzogdCwgMTA4OiB0LCAxMDk6IHQsIDExMDogdCwgMTExOiB0LCAxMTI6IHQsIDExMzogdCwgMTE0OiB0LCAxMTU6IHQsIDExNjogdCwgMTE3OiB0LCAxMTg6IHQsIDExOTogdCwgMTIwOiB0LCAxMjE6IHQsIDEyMjogdCB9O1xyXG5cdFx0XHJcblx0XHRzdGF0aWMgVU5JQ09ERV9DT05USU5VRV9VTkNPTU1PTiA9IC9bXFx4QUFcXHhCNVxceEJBXFx4QzAtXFx4RDZcXHhEOC1cXHhGNlxceEY4LVxcdTAyNDFcXHUwMjUwLVxcdTAyQzFcXHUwMkM2LVxcdTAyRDFcXHUwMkUwLVxcdTAyRTRcXHUwMkVFXFx1MDMwMC1cXHUwMzZGXFx1MDM3QVxcdTAzODZcXHUwMzg4LVxcdTAzOEFcXHUwMzhDXFx1MDM4RS1cXHUwM0ExXFx1MDNBMy1cXHUwM0NFXFx1MDNEMC1cXHUwM0Y1XFx1MDNGNy1cXHUwNDgxXFx1MDQ4My1cXHUwNDg2XFx1MDQ4QS1cXHUwNENFXFx1MDREMC1cXHUwNEY5XFx1MDUwMC1cXHUwNTBGXFx1MDUzMS1cXHUwNTU2XFx1MDU1OVxcdTA1NjEtXFx1MDU4N1xcdTA1OTEtXFx1MDVCOVxcdTA1QkItXFx1MDVCRFxcdTA1QkZcXHUwNUMxXFx1MDVDMlxcdTA1QzRcXHUwNUM1XFx1MDVDN1xcdTA1RDAtXFx1MDVFQVxcdTA1RjAtXFx1MDVGMlxcdTA2MTAtXFx1MDYxNVxcdTA2MjEtXFx1MDYzQVxcdTA2NDAtXFx1MDY1RVxcdTA2NjAtXFx1MDY2OVxcdTA2NkUtXFx1MDZEM1xcdTA2RDUtXFx1MDZEQ1xcdTA2REYtXFx1MDZFOFxcdTA2RUEtXFx1MDZGQ1xcdTA2RkZcXHUwNzEwLVxcdTA3NEFcXHUwNzRELVxcdTA3NkRcXHUwNzgwLVxcdTA3QjFcXHUwOTAxLVxcdTA5MzlcXHUwOTNDLVxcdTA5NERcXHUwOTUwLVxcdTA5NTRcXHUwOTU4LVxcdTA5NjNcXHUwOTY2LVxcdTA5NkZcXHUwOTdEXFx1MDk4MS1cXHUwOTgzXFx1MDk4NS1cXHUwOThDXFx1MDk4RlxcdTA5OTBcXHUwOTkzLVxcdTA5QThcXHUwOUFBLVxcdTA5QjBcXHUwOUIyXFx1MDlCNi1cXHUwOUI5XFx1MDlCQy1cXHUwOUM0XFx1MDlDN1xcdTA5QzhcXHUwOUNCLVxcdTA5Q0VcXHUwOUQ3XFx1MDlEQ1xcdTA5RERcXHUwOURGLVxcdTA5RTNcXHUwOUU2LVxcdTA5RjFcXHUwQTAxLVxcdTBBMDNcXHUwQTA1LVxcdTBBMEFcXHUwQTBGXFx1MEExMFxcdTBBMTMtXFx1MEEyOFxcdTBBMkEtXFx1MEEzMFxcdTBBMzJcXHUwQTMzXFx1MEEzNVxcdTBBMzZcXHUwQTM4XFx1MEEzOVxcdTBBM0NcXHUwQTNFLVxcdTBBNDJcXHUwQTQ3XFx1MEE0OFxcdTBBNEItXFx1MEE0RFxcdTBBNTktXFx1MEE1Q1xcdTBBNUVcXHUwQTY2LVxcdTBBNzRcXHUwQTgxLVxcdTBBODNcXHUwQTg1LVxcdTBBOERcXHUwQThGLVxcdTBBOTFcXHUwQTkzLVxcdTBBQThcXHUwQUFBLVxcdTBBQjBcXHUwQUIyXFx1MEFCM1xcdTBBQjUtXFx1MEFCOVxcdTBBQkMtXFx1MEFDNVxcdTBBQzctXFx1MEFDOVxcdTBBQ0ItXFx1MEFDRFxcdTBBRDBcXHUwQUUwLVxcdTBBRTNcXHUwQUU2LVxcdTBBRUZcXHUwQjAxLVxcdTBCMDNcXHUwQjA1LVxcdTBCMENcXHUwQjBGXFx1MEIxMFxcdTBCMTMtXFx1MEIyOFxcdTBCMkEtXFx1MEIzMFxcdTBCMzJcXHUwQjMzXFx1MEIzNS1cXHUwQjM5XFx1MEIzQy1cXHUwQjQzXFx1MEI0N1xcdTBCNDhcXHUwQjRCLVxcdTBCNERcXHUwQjU2XFx1MEI1N1xcdTBCNUNcXHUwQjVEXFx1MEI1Ri1cXHUwQjYxXFx1MEI2Ni1cXHUwQjZGXFx1MEI3MVxcdTBCODJcXHUwQjgzXFx1MEI4NS1cXHUwQjhBXFx1MEI4RS1cXHUwQjkwXFx1MEI5Mi1cXHUwQjk1XFx1MEI5OVxcdTBCOUFcXHUwQjlDXFx1MEI5RVxcdTBCOUZcXHUwQkEzXFx1MEJBNFxcdTBCQTgtXFx1MEJBQVxcdTBCQUUtXFx1MEJCOVxcdTBCQkUtXFx1MEJDMlxcdTBCQzYtXFx1MEJDOFxcdTBCQ0EtXFx1MEJDRFxcdTBCRDdcXHUwQkU2LVxcdTBCRUZcXHUwQzAxLVxcdTBDMDNcXHUwQzA1LVxcdTBDMENcXHUwQzBFLVxcdTBDMTBcXHUwQzEyLVxcdTBDMjhcXHUwQzJBLVxcdTBDMzNcXHUwQzM1LVxcdTBDMzlcXHUwQzNFLVxcdTBDNDRcXHUwQzQ2LVxcdTBDNDhcXHUwQzRBLVxcdTBDNERcXHUwQzU1XFx1MEM1NlxcdTBDNjBcXHUwQzYxXFx1MEM2Ni1cXHUwQzZGXFx1MEM4MlxcdTBDODNcXHUwQzg1LVxcdTBDOENcXHUwQzhFLVxcdTBDOTBcXHUwQzkyLVxcdTBDQThcXHUwQ0FBLVxcdTBDQjNcXHUwQ0I1LVxcdTBDQjlcXHUwQ0JDLVxcdTBDQzRcXHUwQ0M2LVxcdTBDQzhcXHUwQ0NBLVxcdTBDQ0RcXHUwQ0Q1XFx1MENENlxcdTBDREVcXHUwQ0UwXFx1MENFMVxcdTBDRTYtXFx1MENFRlxcdTBEMDJcXHUwRDAzXFx1MEQwNS1cXHUwRDBDXFx1MEQwRS1cXHUwRDEwXFx1MEQxMi1cXHUwRDI4XFx1MEQyQS1cXHUwRDM5XFx1MEQzRS1cXHUwRDQzXFx1MEQ0Ni1cXHUwRDQ4XFx1MEQ0QS1cXHUwRDREXFx1MEQ1N1xcdTBENjBcXHUwRDYxXFx1MEQ2Ni1cXHUwRDZGXFx1MEQ4MlxcdTBEODNcXHUwRDg1LVxcdTBEOTZcXHUwRDlBLVxcdTBEQjFcXHUwREIzLVxcdTBEQkJcXHUwREJEXFx1MERDMC1cXHUwREM2XFx1MERDQVxcdTBEQ0YtXFx1MERENFxcdTBERDZcXHUwREQ4LVxcdTBEREZcXHUwREYyXFx1MERGM1xcdTBFMDEtXFx1MEUzQVxcdTBFNDAtXFx1MEU0RVxcdTBFNTAtXFx1MEU1OVxcdTBFODFcXHUwRTgyXFx1MEU4NFxcdTBFODdcXHUwRTg4XFx1MEU4QVxcdTBFOERcXHUwRTk0LVxcdTBFOTdcXHUwRTk5LVxcdTBFOUZcXHUwRUExLVxcdTBFQTNcXHUwRUE1XFx1MEVBN1xcdTBFQUFcXHUwRUFCXFx1MEVBRC1cXHUwRUI5XFx1MEVCQi1cXHUwRUJEXFx1MEVDMC1cXHUwRUM0XFx1MEVDNlxcdTBFQzgtXFx1MEVDRFxcdTBFRDAtXFx1MEVEOVxcdTBFRENcXHUwRUREXFx1MEYwMFxcdTBGMThcXHUwRjE5XFx1MEYyMC1cXHUwRjI5XFx1MEYzNVxcdTBGMzdcXHUwRjM5XFx1MEYzRS1cXHUwRjQ3XFx1MEY0OS1cXHUwRjZBXFx1MEY3MS1cXHUwRjg0XFx1MEY4Ni1cXHUwRjhCXFx1MEY5MC1cXHUwRjk3XFx1MEY5OS1cXHUwRkJDXFx1MEZDNlxcdTEwMDAtXFx1MTAyMVxcdTEwMjMtXFx1MTAyN1xcdTEwMjlcXHUxMDJBXFx1MTAyQy1cXHUxMDMyXFx1MTAzNi1cXHUxMDM5XFx1MTA0MC1cXHUxMDQ5XFx1MTA1MC1cXHUxMDU5XFx1MTBBMC1cXHUxMEM1XFx1MTBEMC1cXHUxMEZBXFx1MTBGQ1xcdTExMDAtXFx1MTE1OVxcdTExNUYtXFx1MTFBMlxcdTExQTgtXFx1MTFGOVxcdTEyMDAtXFx1MTI0OFxcdTEyNEEtXFx1MTI0RFxcdTEyNTAtXFx1MTI1NlxcdTEyNThcXHUxMjVBLVxcdTEyNURcXHUxMjYwLVxcdTEyODhcXHUxMjhBLVxcdTEyOERcXHUxMjkwLVxcdTEyQjBcXHUxMkIyLVxcdTEyQjVcXHUxMkI4LVxcdTEyQkVcXHUxMkMwXFx1MTJDMi1cXHUxMkM1XFx1MTJDOC1cXHUxMkQ2XFx1MTJEOC1cXHUxMzEwXFx1MTMxMi1cXHUxMzE1XFx1MTMxOC1cXHUxMzVBXFx1MTM1RlxcdTEzNjktXFx1MTM3MVxcdTEzODAtXFx1MTM4RlxcdTEzQTAtXFx1MTNGNFxcdTE0MDEtXFx1MTY2Q1xcdTE2NkYtXFx1MTY3NlxcdTE2ODEtXFx1MTY5QVxcdTE2QTAtXFx1MTZFQVxcdTE2RUUtXFx1MTZGMFxcdTE3MDAtXFx1MTcwQ1xcdTE3MEUtXFx1MTcxNFxcdTE3MjAtXFx1MTczNFxcdTE3NDAtXFx1MTc1M1xcdTE3NjAtXFx1MTc2Q1xcdTE3NkUtXFx1MTc3MFxcdTE3NzJcXHUxNzczXFx1MTc4MC1cXHUxN0IzXFx1MTdCNi1cXHUxN0QzXFx1MTdEN1xcdTE3RENcXHUxN0REXFx1MTdFMC1cXHUxN0U5XFx1MTgwQi1cXHUxODBEXFx1MTgxMC1cXHUxODE5XFx1MTgyMC1cXHUxODc3XFx1MTg4MC1cXHUxOEE5XFx1MTkwMC1cXHUxOTFDXFx1MTkyMC1cXHUxOTJCXFx1MTkzMC1cXHUxOTNCXFx1MTk0Ni1cXHUxOTZEXFx1MTk3MC1cXHUxOTc0XFx1MTk4MC1cXHUxOUE5XFx1MTlCMC1cXHUxOUM5XFx1MTlEMC1cXHUxOUQ5XFx1MUEwMC1cXHUxQTFCXFx1MUQwMC1cXHUxREMzXFx1MUUwMC1cXHUxRTlCXFx1MUVBMC1cXHUxRUY5XFx1MUYwMC1cXHUxRjE1XFx1MUYxOC1cXHUxRjFEXFx1MUYyMC1cXHUxRjQ1XFx1MUY0OC1cXHUxRjREXFx1MUY1MC1cXHUxRjU3XFx1MUY1OVxcdTFGNUJcXHUxRjVEXFx1MUY1Ri1cXHUxRjdEXFx1MUY4MC1cXHUxRkI0XFx1MUZCNi1cXHUxRkJDXFx1MUZCRVxcdTFGQzItXFx1MUZDNFxcdTFGQzYtXFx1MUZDQ1xcdTFGRDAtXFx1MUZEM1xcdTFGRDYtXFx1MUZEQlxcdTFGRTAtXFx1MUZFQ1xcdTFGRjItXFx1MUZGNFxcdTFGRjYtXFx1MUZGQ1xcdTIwM0ZcXHUyMDQwXFx1MjA1NFxcdTIwNzFcXHUyMDdGXFx1MjA5MC1cXHUyMDk0XFx1MjBEMC1cXHUyMERDXFx1MjBFMVxcdTIwRTUtXFx1MjBFQlxcdTIxMDJcXHUyMTA3XFx1MjEwQS1cXHUyMTEzXFx1MjExNVxcdTIxMTgtXFx1MjExRFxcdTIxMjRcXHUyMTI2XFx1MjEyOFxcdTIxMkEtXFx1MjEzMVxcdTIxMzMtXFx1MjEzOVxcdTIxM0MtXFx1MjEzRlxcdTIxNDUtXFx1MjE0OVxcdTIxNjAtXFx1MjE4M1xcdTJDMDAtXFx1MkMyRVxcdTJDMzAtXFx1MkM1RVxcdTJDODAtXFx1MkNFNFxcdTJEMDAtXFx1MkQyNVxcdTJEMzAtXFx1MkQ2NVxcdTJENkZcXHUyRDgwLVxcdTJEOTZcXHUyREEwLVxcdTJEQTZcXHUyREE4LVxcdTJEQUVcXHUyREIwLVxcdTJEQjZcXHUyREI4LVxcdTJEQkVcXHUyREMwLVxcdTJEQzZcXHUyREM4LVxcdTJEQ0VcXHUyREQwLVxcdTJERDZcXHUyREQ4LVxcdTJEREVcXHUzMDA1LVxcdTMwMDdcXHUzMDIxLVxcdTMwMkZcXHUzMDMxLVxcdTMwMzVcXHUzMDM4LVxcdTMwM0NcXHUzMDQxLVxcdTMwOTZcXHUzMDk5LVxcdTMwOUZcXHUzMEExLVxcdTMwRkFcXHUzMEZDLVxcdTMwRkZcXHUzMTA1LVxcdTMxMkNcXHUzMTMxLVxcdTMxOEVcXHUzMUEwLVxcdTMxQjdcXHUzMUYwLVxcdTMxRkZcXHUzNDAwLVxcdTREQjVcXHU0RTAwLVxcdTlGQkJcXHVBMDAwLVxcdUE0OENcXHVBODAwLVxcdUE4MjdcXHVBQzAwLVxcdUQ3QTNcXHVGOTAwLVxcdUZBMkRcXHVGQTMwLVxcdUZBNkFcXHVGQTcwLVxcdUZBRDlcXHVGQjAwLVxcdUZCMDZcXHVGQjEzLVxcdUZCMTdcXHVGQjFELVxcdUZCMjhcXHVGQjJBLVxcdUZCMzZcXHVGQjM4LVxcdUZCM0NcXHVGQjNFXFx1RkI0MFxcdUZCNDFcXHVGQjQzXFx1RkI0NFxcdUZCNDYtXFx1RkJCMVxcdUZCRDMtXFx1RkQzRFxcdUZENTAtXFx1RkQ4RlxcdUZEOTItXFx1RkRDN1xcdUZERjAtXFx1RkRGQlxcdUZFMDAtXFx1RkUwRlxcdUZFMjAtXFx1RkUyM1xcdUZFMzNcXHVGRTM0XFx1RkU0RC1cXHVGRTRGXFx1RkU3MC1cXHVGRTc0XFx1RkU3Ni1cXHVGRUZDXFx1RkYxMC1cXHVGRjE5XFx1RkYyMS1cXHVGRjNBXFx1RkYzRlxcdUZGNDEtXFx1RkY1QVxcdUZGNjYtXFx1RkZCRVxcdUZGQzItXFx1RkZDN1xcdUZGQ0EtXFx1RkZDRlxcdUZGRDItXFx1RkZEN1xcdUZGREEtXFx1RkZEQ118XFx1RDgwMFtcXHVEQzAwLVxcdURDMEJcXHVEQzBELVxcdURDMjZcXHVEQzI4LVxcdURDM0FcXHVEQzNDXFx1REMzRFxcdURDM0YtXFx1REM0RFxcdURDNTAtXFx1REM1RFxcdURDODAtXFx1RENGQVxcdURENDAtXFx1REQ3NFxcdURGMDAtXFx1REYxRVxcdURGMzAtXFx1REY0QVxcdURGODAtXFx1REY5RFxcdURGQTAtXFx1REZDM1xcdURGQzgtXFx1REZDRlxcdURGRDEtXFx1REZENV18XFx1RDgwMVtcXHVEQzAwLVxcdURDOURcXHVEQ0EwLVxcdURDQTldfFxcdUQ4MDJbXFx1REMwMC1cXHVEQzA1XFx1REMwOFxcdURDMEEtXFx1REMzNVxcdURDMzdcXHVEQzM4XFx1REMzQ1xcdURDM0ZcXHVERTAwLVxcdURFMDNcXHVERTA1XFx1REUwNlxcdURFMEMtXFx1REUxM1xcdURFMTUtXFx1REUxN1xcdURFMTktXFx1REUzM1xcdURFMzgtXFx1REUzQVxcdURFM0ZdfFxcdUQ4MzRbXFx1REQ2NS1cXHVERDY5XFx1REQ2RC1cXHVERDcyXFx1REQ3Qi1cXHVERDgyXFx1REQ4NS1cXHVERDhCXFx1RERBQS1cXHVEREFEXFx1REU0Mi1cXHVERTQ0XXxcXHVEODM1W1xcdURDMDAtXFx1REM1NFxcdURDNTYtXFx1REM5Q1xcdURDOUVcXHVEQzlGXFx1RENBMlxcdURDQTVcXHVEQ0E2XFx1RENBOS1cXHVEQ0FDXFx1RENBRS1cXHVEQ0I5XFx1RENCQlxcdURDQkQtXFx1RENDM1xcdURDQzUtXFx1REQwNVxcdUREMDctXFx1REQwQVxcdUREMEQtXFx1REQxNFxcdUREMTYtXFx1REQxQ1xcdUREMUUtXFx1REQzOVxcdUREM0ItXFx1REQzRVxcdURENDAtXFx1REQ0NFxcdURENDZcXHVERDRBLVxcdURENTBcXHVERDUyLVxcdURFQTVcXHVERUE4LVxcdURFQzBcXHVERUMyLVxcdURFREFcXHVERURDLVxcdURFRkFcXHVERUZDLVxcdURGMTRcXHVERjE2LVxcdURGMzRcXHVERjM2LVxcdURGNEVcXHVERjUwLVxcdURGNkVcXHVERjcwLVxcdURGODhcXHVERjhBLVxcdURGQThcXHVERkFBLVxcdURGQzJcXHVERkM0LVxcdURGQzlcXHVERkNFLVxcdURGRkZdfFtcXHVEODQwLVxcdUQ4NjhdW1xcdURDMDAtXFx1REZGRl18XFx1RDg2OVtcXHVEQzAwLVxcdURFRDZdfFxcdUQ4N0VbXFx1REMwMC1cXHVERTFEXXxcXHVEQjQwW1xcdUREMDAtXFx1RERFRl0vO1xyXG5cclxuXHRcdHN0YXRpYyBVTklDT0RFX1NUQVJUX0NPTU1PTiA9IHsgMzY6IHQgLyogJCAqLywgOTI6IHQgLyogXFwgKi8sIDk1OiB0IC8qIF8gKi8sIDY1OiB0LCA2NjogdCwgNjc6IHQsIDY4OiB0LCA2OTogdCwgNzA6IHQsIDcxOiB0LCA3MjogdCwgNzM6IHQsIDc0OiB0LCA3NTogdCwgNzY6IHQsIDc3OiB0LCA3ODogdCwgNzk6IHQsIDgwOiB0LCA4MTogdCwgODI6IHQsIDgzOiB0LCA4NDogdCwgODU6IHQsIDg2OiB0LCA4NzogdCwgODg6IHQsIDg5OiB0LCA5MDogdCwgOTc6IHQsIDk4OiB0LCA5OTogdCwgMTAwOiB0LCAxMDE6IHQsIDEwMjogdCwgMTAzOiB0LCAxMDQ6IHQsIDEwNTogdCwgMTA2OiB0LCAxMDc6IHQsIDEwODogdCwgMTA5OiB0LCAxMTA6IHQsIDExMTogdCwgMTEyOiB0LCAxMTM6IHQsIDExNDogdCwgMTE1OiB0LCAxMTY6IHQsIDExNzogdCwgMTE4OiB0LCAxMTk6IHQsIDEyMDogdCwgMTIxOiB0LCAxMjI6IHQgfTtcclxuXHRcdFxyXG5cdFx0c3RhdGljIFVOSUNPREVfU1RBUlRfVU5DT01NT04gPSAvW1xceEFBXFx4QjVcXHhCQVxceEMwLVxceEQ2XFx4RDgtXFx4RjZcXHhGOC1cXHUwMjQxXFx1MDI1MC1cXHUwMkMxXFx1MDJDNi1cXHUwMkQxXFx1MDJFMC1cXHUwMkU0XFx1MDJFRVxcdTAzN0FcXHUwMzg2XFx1MDM4OC1cXHUwMzhBXFx1MDM4Q1xcdTAzOEUtXFx1MDNBMVxcdTAzQTMtXFx1MDNDRVxcdTAzRDAtXFx1MDNGNVxcdTAzRjctXFx1MDQ4MVxcdTA0OEEtXFx1MDRDRVxcdTA0RDAtXFx1MDRGOVxcdTA1MDAtXFx1MDUwRlxcdTA1MzEtXFx1MDU1NlxcdTA1NTlcXHUwNTYxLVxcdTA1ODdcXHUwNUQwLVxcdTA1RUFcXHUwNUYwLVxcdTA1RjJcXHUwNjIxLVxcdTA2M0FcXHUwNjQwLVxcdTA2NEFcXHUwNjZFXFx1MDY2RlxcdTA2NzEtXFx1MDZEM1xcdTA2RDVcXHUwNkU1XFx1MDZFNlxcdTA2RUVcXHUwNkVGXFx1MDZGQS1cXHUwNkZDXFx1MDZGRlxcdTA3MTBcXHUwNzEyLVxcdTA3MkZcXHUwNzRELVxcdTA3NkRcXHUwNzgwLVxcdTA3QTVcXHUwN0IxXFx1MDkwNC1cXHUwOTM5XFx1MDkzRFxcdTA5NTBcXHUwOTU4LVxcdTA5NjFcXHUwOTdEXFx1MDk4NS1cXHUwOThDXFx1MDk4RlxcdTA5OTBcXHUwOTkzLVxcdTA5QThcXHUwOUFBLVxcdTA5QjBcXHUwOUIyXFx1MDlCNi1cXHUwOUI5XFx1MDlCRFxcdTA5Q0VcXHUwOURDXFx1MDlERFxcdTA5REYtXFx1MDlFMVxcdTA5RjBcXHUwOUYxXFx1MEEwNS1cXHUwQTBBXFx1MEEwRlxcdTBBMTBcXHUwQTEzLVxcdTBBMjhcXHUwQTJBLVxcdTBBMzBcXHUwQTMyXFx1MEEzM1xcdTBBMzVcXHUwQTM2XFx1MEEzOFxcdTBBMzlcXHUwQTU5LVxcdTBBNUNcXHUwQTVFXFx1MEE3Mi1cXHUwQTc0XFx1MEE4NS1cXHUwQThEXFx1MEE4Ri1cXHUwQTkxXFx1MEE5My1cXHUwQUE4XFx1MEFBQS1cXHUwQUIwXFx1MEFCMlxcdTBBQjNcXHUwQUI1LVxcdTBBQjlcXHUwQUJEXFx1MEFEMFxcdTBBRTBcXHUwQUUxXFx1MEIwNS1cXHUwQjBDXFx1MEIwRlxcdTBCMTBcXHUwQjEzLVxcdTBCMjhcXHUwQjJBLVxcdTBCMzBcXHUwQjMyXFx1MEIzM1xcdTBCMzUtXFx1MEIzOVxcdTBCM0RcXHUwQjVDXFx1MEI1RFxcdTBCNUYtXFx1MEI2MVxcdTBCNzFcXHUwQjgzXFx1MEI4NS1cXHUwQjhBXFx1MEI4RS1cXHUwQjkwXFx1MEI5Mi1cXHUwQjk1XFx1MEI5OVxcdTBCOUFcXHUwQjlDXFx1MEI5RVxcdTBCOUZcXHUwQkEzXFx1MEJBNFxcdTBCQTgtXFx1MEJBQVxcdTBCQUUtXFx1MEJCOVxcdTBDMDUtXFx1MEMwQ1xcdTBDMEUtXFx1MEMxMFxcdTBDMTItXFx1MEMyOFxcdTBDMkEtXFx1MEMzM1xcdTBDMzUtXFx1MEMzOVxcdTBDNjBcXHUwQzYxXFx1MEM4NS1cXHUwQzhDXFx1MEM4RS1cXHUwQzkwXFx1MEM5Mi1cXHUwQ0E4XFx1MENBQS1cXHUwQ0IzXFx1MENCNS1cXHUwQ0I5XFx1MENCRFxcdTBDREVcXHUwQ0UwXFx1MENFMVxcdTBEMDUtXFx1MEQwQ1xcdTBEMEUtXFx1MEQxMFxcdTBEMTItXFx1MEQyOFxcdTBEMkEtXFx1MEQzOVxcdTBENjBcXHUwRDYxXFx1MEQ4NS1cXHUwRDk2XFx1MEQ5QS1cXHUwREIxXFx1MERCMy1cXHUwREJCXFx1MERCRFxcdTBEQzAtXFx1MERDNlxcdTBFMDEtXFx1MEUzMFxcdTBFMzJcXHUwRTMzXFx1MEU0MC1cXHUwRTQ2XFx1MEU4MVxcdTBFODJcXHUwRTg0XFx1MEU4N1xcdTBFODhcXHUwRThBXFx1MEU4RFxcdTBFOTQtXFx1MEU5N1xcdTBFOTktXFx1MEU5RlxcdTBFQTEtXFx1MEVBM1xcdTBFQTVcXHUwRUE3XFx1MEVBQVxcdTBFQUJcXHUwRUFELVxcdTBFQjBcXHUwRUIyXFx1MEVCM1xcdTBFQkRcXHUwRUMwLVxcdTBFQzRcXHUwRUM2XFx1MEVEQ1xcdTBFRERcXHUwRjAwXFx1MEY0MC1cXHUwRjQ3XFx1MEY0OS1cXHUwRjZBXFx1MEY4OC1cXHUwRjhCXFx1MTAwMC1cXHUxMDIxXFx1MTAyMy1cXHUxMDI3XFx1MTAyOVxcdTEwMkFcXHUxMDUwLVxcdTEwNTVcXHUxMEEwLVxcdTEwQzVcXHUxMEQwLVxcdTEwRkFcXHUxMEZDXFx1MTEwMC1cXHUxMTU5XFx1MTE1Ri1cXHUxMUEyXFx1MTFBOC1cXHUxMUY5XFx1MTIwMC1cXHUxMjQ4XFx1MTI0QS1cXHUxMjREXFx1MTI1MC1cXHUxMjU2XFx1MTI1OFxcdTEyNUEtXFx1MTI1RFxcdTEyNjAtXFx1MTI4OFxcdTEyOEEtXFx1MTI4RFxcdTEyOTAtXFx1MTJCMFxcdTEyQjItXFx1MTJCNVxcdTEyQjgtXFx1MTJCRVxcdTEyQzBcXHUxMkMyLVxcdTEyQzVcXHUxMkM4LVxcdTEyRDZcXHUxMkQ4LVxcdTEzMTBcXHUxMzEyLVxcdTEzMTVcXHUxMzE4LVxcdTEzNUFcXHUxMzgwLVxcdTEzOEZcXHUxM0EwLVxcdTEzRjRcXHUxNDAxLVxcdTE2NkNcXHUxNjZGLVxcdTE2NzZcXHUxNjgxLVxcdTE2OUFcXHUxNkEwLVxcdTE2RUFcXHUxNkVFLVxcdTE2RjBcXHUxNzAwLVxcdTE3MENcXHUxNzBFLVxcdTE3MTFcXHUxNzIwLVxcdTE3MzFcXHUxNzQwLVxcdTE3NTFcXHUxNzYwLVxcdTE3NkNcXHUxNzZFLVxcdTE3NzBcXHUxNzgwLVxcdTE3QjNcXHUxN0Q3XFx1MTdEQ1xcdTE4MjAtXFx1MTg3N1xcdTE4ODAtXFx1MThBOFxcdTE5MDAtXFx1MTkxQ1xcdTE5NTAtXFx1MTk2RFxcdTE5NzAtXFx1MTk3NFxcdTE5ODAtXFx1MTlBOVxcdTE5QzEtXFx1MTlDN1xcdTFBMDAtXFx1MUExNlxcdTFEMDAtXFx1MURCRlxcdTFFMDAtXFx1MUU5QlxcdTFFQTAtXFx1MUVGOVxcdTFGMDAtXFx1MUYxNVxcdTFGMTgtXFx1MUYxRFxcdTFGMjAtXFx1MUY0NVxcdTFGNDgtXFx1MUY0RFxcdTFGNTAtXFx1MUY1N1xcdTFGNTlcXHUxRjVCXFx1MUY1RFxcdTFGNUYtXFx1MUY3RFxcdTFGODAtXFx1MUZCNFxcdTFGQjYtXFx1MUZCQ1xcdTFGQkVcXHUxRkMyLVxcdTFGQzRcXHUxRkM2LVxcdTFGQ0NcXHUxRkQwLVxcdTFGRDNcXHUxRkQ2LVxcdTFGREJcXHUxRkUwLVxcdTFGRUNcXHUxRkYyLVxcdTFGRjRcXHUxRkY2LVxcdTFGRkNcXHUyMDcxXFx1MjA3RlxcdTIwOTAtXFx1MjA5NFxcdTIxMDJcXHUyMTA3XFx1MjEwQS1cXHUyMTEzXFx1MjExNVxcdTIxMTgtXFx1MjExRFxcdTIxMjRcXHUyMTI2XFx1MjEyOFxcdTIxMkEtXFx1MjEzMVxcdTIxMzMtXFx1MjEzOVxcdTIxM0MtXFx1MjEzRlxcdTIxNDUtXFx1MjE0OVxcdTIxNjAtXFx1MjE4M1xcdTJDMDAtXFx1MkMyRVxcdTJDMzAtXFx1MkM1RVxcdTJDODAtXFx1MkNFNFxcdTJEMDAtXFx1MkQyNVxcdTJEMzAtXFx1MkQ2NVxcdTJENkZcXHUyRDgwLVxcdTJEOTZcXHUyREEwLVxcdTJEQTZcXHUyREE4LVxcdTJEQUVcXHUyREIwLVxcdTJEQjZcXHUyREI4LVxcdTJEQkVcXHUyREMwLVxcdTJEQzZcXHUyREM4LVxcdTJEQ0VcXHUyREQwLVxcdTJERDZcXHUyREQ4LVxcdTJEREVcXHUzMDA1LVxcdTMwMDdcXHUzMDIxLVxcdTMwMjlcXHUzMDMxLVxcdTMwMzVcXHUzMDM4LVxcdTMwM0NcXHUzMDQxLVxcdTMwOTZcXHUzMDlCLVxcdTMwOUZcXHUzMEExLVxcdTMwRkFcXHUzMEZDLVxcdTMwRkZcXHUzMTA1LVxcdTMxMkNcXHUzMTMxLVxcdTMxOEVcXHUzMUEwLVxcdTMxQjdcXHUzMUYwLVxcdTMxRkZcXHUzNDAwLVxcdTREQjVcXHU0RTAwLVxcdTlGQkJcXHVBMDAwLVxcdUE0OENcXHVBODAwXFx1QTgwMVxcdUE4MDMtXFx1QTgwNVxcdUE4MDctXFx1QTgwQVxcdUE4MEMtXFx1QTgyMlxcdUFDMDAtXFx1RDdBM1xcdUY5MDAtXFx1RkEyRFxcdUZBMzAtXFx1RkE2QVxcdUZBNzAtXFx1RkFEOVxcdUZCMDAtXFx1RkIwNlxcdUZCMTMtXFx1RkIxN1xcdUZCMURcXHVGQjFGLVxcdUZCMjhcXHVGQjJBLVxcdUZCMzZcXHVGQjM4LVxcdUZCM0NcXHVGQjNFXFx1RkI0MFxcdUZCNDFcXHVGQjQzXFx1RkI0NFxcdUZCNDYtXFx1RkJCMVxcdUZCRDMtXFx1RkQzRFxcdUZENTAtXFx1RkQ4RlxcdUZEOTItXFx1RkRDN1xcdUZERjAtXFx1RkRGQlxcdUZFNzAtXFx1RkU3NFxcdUZFNzYtXFx1RkVGQ1xcdUZGMjEtXFx1RkYzQVxcdUZGNDEtXFx1RkY1QVxcdUZGNjYtXFx1RkZCRVxcdUZGQzItXFx1RkZDN1xcdUZGQ0EtXFx1RkZDRlxcdUZGRDItXFx1RkZEN1xcdUZGREEtXFx1RkZEQ118XFx1RDgwMFtcXHVEQzAwLVxcdURDMEJcXHVEQzBELVxcdURDMjZcXHVEQzI4LVxcdURDM0FcXHVEQzNDXFx1REMzRFxcdURDM0YtXFx1REM0RFxcdURDNTAtXFx1REM1RFxcdURDODAtXFx1RENGQVxcdURENDAtXFx1REQ3NFxcdURGMDAtXFx1REYxRVxcdURGMzAtXFx1REY0QVxcdURGODAtXFx1REY5RFxcdURGQTAtXFx1REZDM1xcdURGQzgtXFx1REZDRlxcdURGRDEtXFx1REZENV18XFx1RDgwMVtcXHVEQzAwLVxcdURDOURdfFxcdUQ4MDJbXFx1REMwMC1cXHVEQzA1XFx1REMwOFxcdURDMEEtXFx1REMzNVxcdURDMzdcXHVEQzM4XFx1REMzQ1xcdURDM0ZcXHVERTAwXFx1REUxMC1cXHVERTEzXFx1REUxNS1cXHVERTE3XFx1REUxOS1cXHVERTMzXXxcXHVEODM1W1xcdURDMDAtXFx1REM1NFxcdURDNTYtXFx1REM5Q1xcdURDOUVcXHVEQzlGXFx1RENBMlxcdURDQTVcXHVEQ0E2XFx1RENBOS1cXHVEQ0FDXFx1RENBRS1cXHVEQ0I5XFx1RENCQlxcdURDQkQtXFx1RENDM1xcdURDQzUtXFx1REQwNVxcdUREMDctXFx1REQwQVxcdUREMEQtXFx1REQxNFxcdUREMTYtXFx1REQxQ1xcdUREMUUtXFx1REQzOVxcdUREM0ItXFx1REQzRVxcdURENDAtXFx1REQ0NFxcdURENDZcXHVERDRBLVxcdURENTBcXHVERDUyLVxcdURFQTVcXHVERUE4LVxcdURFQzBcXHVERUMyLVxcdURFREFcXHVERURDLVxcdURFRkFcXHVERUZDLVxcdURGMTRcXHVERjE2LVxcdURGMzRcXHVERjM2LVxcdURGNEVcXHVERjUwLVxcdURGNkVcXHVERjcwLVxcdURGODhcXHVERjhBLVxcdURGQThcXHVERkFBLVxcdURGQzJcXHVERkM0LVxcdURGQzldfFtcXHVEODQwLVxcdUQ4NjhdW1xcdURDMDAtXFx1REZGRl18XFx1RDg2OVtcXHVEQzAwLVxcdURFRDZdfFxcdUQ4N0VbXFx1REMwMC1cXHVERTFEXS87XHJcblx0XHJcblx0fVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3RzRGVmaW5pdGlvbnMvdHNkLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ2hhclBvaW50cy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJUb2tlbkRlZmluaXRpb25zLnRzXCIgLz5cclxuXHJcbm1vZHVsZSB0cmwuZnJvbnRlbmQubGV4aWNhbCB7XHJcblx0XHJcblx0bGV0IGhleERpZ2l0cyA9IHt9O1xyXG5cdF8uZWFjaChcIjAxMjM0NTY3ODlBQkNERUZhYmNkZWZcIiwgKG51bUNoYXIpID0+IHtcclxuXHRcdFxyXG5cdFx0aGV4RGlnaXRzW0NoYXJQb2ludHMuY29kZVBvaW50QXQobnVtQ2hhciwgMCldID0gdHJ1ZTtcclxuXHR9KTtcclxuXHRcclxuXHRsZXQgZGlnaXRzID0ge307XHJcblx0Xy5lYWNoKFwiMDEyMzQ1Njc4OVwiLCAobnVtQ2hhcikgPT4ge1xyXG5cdFx0ZGlnaXRzW0NoYXJQb2ludHMuY29kZVBvaW50QXQobnVtQ2hhciwgMCldID0gdHJ1ZTtcclxuXHR9KTtcclxuXHRcclxuXHRleHBvcnQgY2xhc3MgSWRlbnRpZnllcnMge1xyXG5cdFxyXG5cdFx0c3RhdGljIGlzSGV4RGlnaXQoYzogbnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRcdHJldHVybiBoZXhEaWdpdHNbY107XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHN0YXRpYyBpc0RpZ2l0KGM6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0XHRyZXR1cm4gZGlnaXRzW2NdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBpc0tleXdvcmQoc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgLy8gV2hlbiBzdHIgY29udGFpbnMgYSB2YWx1ZSBsaWtlICd0b1N0cmluZycsIFxyXG4gICAgICAgICAgICAvLyBLVyBoYXMgY29uZmxpY3QgYW5kIHJldHVybnMgdGhlIGZ1bmN0aW9uIHRvU3RyaW5nXHJcblx0XHRcdHJldHVybiBfLmhhcyhUb2tlbkRlZmluaXRpb25zLktXLCBzdHIpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRzdGF0aWMgaXNMaW5lVGVybWluYXRvcihjOiBudW1iZXIpOiBib29sZWFuIHtcclxuXHRcdFx0cmV0dXJuIFRva2VuRGVmaW5pdGlvbnMuTFRbY107XHJcblx0XHR9XHJcblxyXG5cdFx0c3RhdGljIGlzSWRlbnRpZmllclN0YXJ0KGM6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0XHRyZXR1cm4gSWRlbnRpZnllcnMuaXNTaW1wbGVVbmljb2RlU3RhcnQoYylcclxuXHRcdFx0XHR8fCBJZGVudGlmeWVycy5pc0NvbXBsZXhVbmljb2RlU3RhcnQoYyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHN0YXRpYyBpc0lkZW50aWZpZXJQYXJ0KGM6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0XHRyZXR1cm4gSWRlbnRpZnllcnMuaXNTaW1wbGVVbmljb2RlQ29udGludWUoYylcclxuXHRcdFx0XHR8fCBJZGVudGlmeWVycy5pc0NvbXBsZXhVbmljb2RlQ29udGludWUoYyk7XHJcblx0XHR9XHJcblxyXG5cdFx0c3RhdGljIGlzU2ltcGxlVW5pY29kZUNvbnRpbnVlKGM6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0XHRyZXR1cm4gVG9rZW5EZWZpbml0aW9ucy5VTklDT0RFX0NPTlRJTlVFX0NPTU1PTltjXTtcclxuXHRcdH1cdFxyXG5cdFx0XHRcclxuXHRcdHN0YXRpYyBpc0NvbXBsZXhVbmljb2RlQ29udGludWUoYzogbnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRcdHJldHVybiBjID4gVG9rZW5EZWZpbml0aW9ucy5VTklDT0RFX1VOQ09NTU9OX1RIUkVTSE9MRCBcclxuXHRcdFx0XHQmJiBUb2tlbkRlZmluaXRpb25zLlVOSUNPREVfQ09OVElOVUVfVU5DT01NT04udGVzdChDaGFyUG9pbnRzLmZyb21Db2RlUG9pbnQoYykpO1xyXG5cdFx0fVx0XHJcblx0XHRcclxuXHRcdHN0YXRpYyBpc1NpbXBsZVVuaWNvZGVTdGFydChjOiBudW1iZXIpOiBib29sZWFuIHtcclxuXHRcdFx0cmV0dXJuIFRva2VuRGVmaW5pdGlvbnMuVU5JQ09ERV9TVEFSVF9DT01NT05bY107XHJcblx0XHR9XHRcclxuXHRcdFx0XHJcblx0XHRzdGF0aWMgaXNDb21wbGV4VW5pY29kZVN0YXJ0KGM6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0XHRyZXR1cm4gYyA+IFRva2VuRGVmaW5pdGlvbnMuVU5JQ09ERV9VTkNPTU1PTl9USFJFU0hPTEQgXHJcblx0XHRcdFx0JiYgVG9rZW5EZWZpbml0aW9ucy5VTklDT0RFX1NUQVJUX1VOQ09NTU9OLnRlc3QoQ2hhclBvaW50cy5mcm9tQ29kZVBvaW50KGMpKTtcclxuXHRcdH1cdFxyXG5cdFx0XHJcblx0XHRzdGF0aWMgaXNQdW5jdHVhdGlvblN0YXJ0KGM6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0XHRyZXR1cm4gVG9rZW5EZWZpbml0aW9ucy5QTkNfU0lOR0xFW2NdO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3RzRGVmaW5pdGlvbnMvdHNkLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vSUV4Y2VwdGlvbi5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NoYXJQb2ludHMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiSUxleGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIlRva2VuRGVmaW5pdGlvbnMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiSWRlbnRpZnllcnMudHNcIiAvPlxyXG5cclxubW9kdWxlIHRybC5mcm9udGVuZC5sZXhpY2FsIHtcclxuXHJcbiAgICBjb25zdCBTdGF0ZXMgPSB7XHJcbiAgICAgICAgaWRlbnRpZmllcjogXCJzdGF0ZUlkZW50aWZpZXJcIixcclxuICAgICAgICBwdW5jdHVhdGlvbjogXCJzdGF0ZVB1bmN0dWF0aW9uXCIsXHJcbiAgICAgICAgbXVsdGlDb21tZW50OiBcInN0YXRlTXVsdGlDb21tZW50XCIsXHJcbiAgICAgICAgc2luZ2xlQ29tbWVudDogXCJzdGF0ZVNpbmdsZUNvbW1lbnRcIixcclxuICAgICAgICBkaXZPckNvbW1lbnQ6IFwic3RhdGVEaXZPckNvbW1lbnRcIixcclxuICAgICAgICBkb3RPck51bWJlcjogXCJzdGF0ZURvdE9yTnVtYmVyXCIsXHJcbiAgICAgICAgZXJyb3I6IFwic3RhdGVFcnJvclwiLFxyXG4gICAgICAgIGZpbmlzaDogXCJzdGF0ZUZpbmlzaFwiLFxyXG4gICAgICAgIGluaXQ6IFwic3RhdGVJbml0XCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgUmVhZGFibGVUb2tlblR5cGUgPSB7XHJcbiAgICAgICAga2V5d29yZDogXCJrZXl3b3JkXCIsXHJcbiAgICAgICAgaWRlbnRpZmllcjogXCJpZGVudGlmaWVyXCIsXHJcbiAgICAgICAgbGl0ZXJhbDogXCJsaXRlcmFsXCIsXHJcbiAgICAgICAgcHVuY3R1YXRpb246IFwicHVuY3R1YXRpb25cIixcclxuICAgICAgICBjb21tZW50OiBcImNvbW1lbnRcIixcclxuICAgICAgICBlb2Y6IFwiZW9mXCIsXHJcbiAgICAgICAgZXJyb3I6IFwiZXJyb3JcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBSZWFkYWJsZUxpdGVyYWxTdWJUeXBlID0ge1xyXG4gICAgICAgIHN0cmluZzogXCJzdHJpbmdcIixcclxuICAgICAgICBudW1iZXI6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgbnVsbDogXCJudWxsXCIsXHJcbiAgICAgICAgYm9vbGVhbjogXCJib29sZWFuXCIsXHJcbiAgICAgICAgcmVnZXg6IFwicmVnZXhcIlxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgdG9SZWFkYWJsZVRva2VuVHlwZSA9IChmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCB0b1JlYWRhYmxlVG9rZW5UeXBlTG9va3VwID0ge307XHJcbiAgICAgICAgdG9SZWFkYWJsZVRva2VuVHlwZUxvb2t1cFtUb2tlblR5cGUua2V5d29yZF0gPSBSZWFkYWJsZVRva2VuVHlwZS5rZXl3b3JkO1xyXG4gICAgICAgIHRvUmVhZGFibGVUb2tlblR5cGVMb29rdXBbVG9rZW5UeXBlLmlkZW50aWZpZXJdID0gUmVhZGFibGVUb2tlblR5cGUuaWRlbnRpZmllcjtcclxuICAgICAgICB0b1JlYWRhYmxlVG9rZW5UeXBlTG9va3VwW1Rva2VuVHlwZS5saXRlcmFsXSA9IFJlYWRhYmxlVG9rZW5UeXBlLmxpdGVyYWw7XHJcbiAgICAgICAgdG9SZWFkYWJsZVRva2VuVHlwZUxvb2t1cFtUb2tlblR5cGUucHVuY3R1YXRpb25dID0gUmVhZGFibGVUb2tlblR5cGUucHVuY3R1YXRpb247XHJcbiAgICAgICAgdG9SZWFkYWJsZVRva2VuVHlwZUxvb2t1cFtUb2tlblR5cGUuY29tbWVudF0gPSBSZWFkYWJsZVRva2VuVHlwZS5jb21tZW50O1xyXG4gICAgICAgIHRvUmVhZGFibGVUb2tlblR5cGVMb29rdXBbVG9rZW5UeXBlLmVvZl0gPSBSZWFkYWJsZVRva2VuVHlwZS5lb2Y7XHJcbiAgICAgICAgdG9SZWFkYWJsZVRva2VuVHlwZUxvb2t1cFtUb2tlblR5cGUuZXJyb3JdID0gUmVhZGFibGVUb2tlblR5cGUuZXJyb3I7XHJcblxyXG4gICAgICAgIHJldHVybiAodG9rZW5UeXBlOiBUb2tlblR5cGUpOiBzdHJpbmcgPT4gdG9SZWFkYWJsZVRva2VuVHlwZUxvb2t1cFt0b2tlblR5cGVdO1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICBjb25zdCB0b1JlYWRhYmxlTGl0ZXJhbFN1YlR5cGUgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgdG9SZWFkYWJsZUxpdGVyYWxTdWJUeXBlTG9va3VwID0ge307XHJcbiAgICAgICAgdG9SZWFkYWJsZUxpdGVyYWxTdWJUeXBlTG9va3VwW0xpdGVyYWxTdWJUeXBlLnN0cmluZ10gPSBSZWFkYWJsZUxpdGVyYWxTdWJUeXBlLnN0cmluZztcclxuICAgICAgICB0b1JlYWRhYmxlTGl0ZXJhbFN1YlR5cGVMb29rdXBbTGl0ZXJhbFN1YlR5cGUubnVtYmVyXSA9IFJlYWRhYmxlTGl0ZXJhbFN1YlR5cGUubnVtYmVyO1xyXG4gICAgICAgIHRvUmVhZGFibGVMaXRlcmFsU3ViVHlwZUxvb2t1cFtMaXRlcmFsU3ViVHlwZS5udWxsXSA9IFJlYWRhYmxlTGl0ZXJhbFN1YlR5cGUubnVsbDtcclxuICAgICAgICB0b1JlYWRhYmxlTGl0ZXJhbFN1YlR5cGVMb29rdXBbTGl0ZXJhbFN1YlR5cGUuYm9vbGVhbl0gPSBSZWFkYWJsZUxpdGVyYWxTdWJUeXBlLmJvb2xlYW47XHJcbiAgICAgICAgdG9SZWFkYWJsZUxpdGVyYWxTdWJUeXBlTG9va3VwW0xpdGVyYWxTdWJUeXBlLnJlZ2V4XSA9IFJlYWRhYmxlTGl0ZXJhbFN1YlR5cGUucmVnZXg7XHJcblxyXG4gICAgICAgIHJldHVybiAobGl0ZXJhbFN1YlR5cGU6IExpdGVyYWxTdWJUeXBlKTogc3RyaW5nID0+IHRvUmVhZGFibGVMaXRlcmFsU3ViVHlwZUxvb2t1cFtsaXRlcmFsU3ViVHlwZV07XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIGNvbnN0IFBOQyA9IFRva2VuRGVmaW5pdGlvbnMuUE5DX1NJTkdMRTtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTGV4ZXIgaW1wbGVtZW50cyBJTGV4ZXIge1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIENoYXJlY3Rlckxvb2t1cDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSB0b2tlbjogSVRva2VuO1xyXG4gICAgICAgIHByaXZhdGUgY29tbWVudHM6IElUb2tlbltdO1xyXG5cclxuICAgICAgICBwcml2YXRlIGxvb2tBaGVhZFRva2VuOiBJVG9rZW47XHJcbiAgICAgICAgcHJpdmF0ZSBjdXJyZW50VG9rZW46IElUb2tlbjtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBsaW5lbm86IG51bWJlcjtcclxuICAgICAgICBwcml2YXRlIHN0YXJ0TGluZW5vOiBudW1iZXI7XHJcbiAgICAgICAgcHJpdmF0ZSBjdXJyTGluZUN1cnNvcjogbnVtYmVyO1xyXG4gICAgICAgIHByaXZhdGUgcmVsYXRpdmVTdGFydEN1cnNvcjogbnVtYmVyO1xyXG4gICAgICAgIHByaXZhdGUgYWJzb2x1dGVTdGFydEN1cnNvcjogbnVtYmVyO1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0aWF0ZUNoYXJlY3Rlckxvb2t1cE9uY2UoKSB7XHJcbiAgICAgICAgICAgIGlmIChMZXhlci5DaGFyZWN0ZXJMb29rdXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBsb29rdXAgPSBMZXhlci5DaGFyZWN0ZXJMb29rdXAgPSB7fTtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgIC8vd2hpdGUgc3BhY2VcclxuICAgICAgICAgICAgXy5lYWNoKDxhbnk+VG9rZW5EZWZpbml0aW9ucy5XUywgKHZhbCwga2V5OiBudW1iZXIpID0+XHJcbiAgICAgICAgICAgICAgICBsb29rdXBba2V5XSA9IExleGVyLnByb3RvdHlwZS5zdGF0ZVdoaXRlU3BhY2UpO1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgLy9uZXcgbGluZVxyXG4gICAgICAgICAgICBfLmVhY2goPGFueT5Ub2tlbkRlZmluaXRpb25zLkxULCAodmFsLCBrZXk6IG51bWJlcikgPT5cclxuICAgICAgICAgICAgICAgIGxvb2t1cFtrZXldID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlTGluZVRlcm1pbmF0b3IpO1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgLy9zdHJpbmdcclxuICAgICAgICAgICAgbG9va3VwW1BOQy5xbWFya10gPSBMZXhlci5nZW5TdGF0ZVN0cmluZyhQTkMucW1hcmspO1xyXG4gICAgICAgICAgICBsb29rdXBbUE5DLmFwb3N0cm9waGVdID0gTGV4ZXIuZ2VuU3RhdGVTdHJpbmcoUE5DLmFwb3N0cm9waGUpO1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgLy9udW1iZXJcclxuICAgICAgICAgICAgXy5lYWNoKFwiMDEyMzQ1Njc4OVwiLCBudW1DaGFyID0+XHJcbiAgICAgICAgICAgICAgICBsb29rdXBbQ2hhclBvaW50cy5jb2RlUG9pbnRBdChudW1DaGFyLCAwKV0gPSBMZXhlci5wcm90b3R5cGUuc3RhdGVOdW1iZXIpO1xyXG5cclxuICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICBsb29rdXBbUE5DLmxicmFjZV0gPSBMZXhlci5wcm90b3R5cGUuc3RhdGVQdW5jdHVhdGlvblNpbmdsZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgbG9va3VwW1BOQy5yYnJhY2VdID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAoXHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMubHBhcmVudGhdID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyApXHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMucnBhcmVudGhdID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBbXHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMubGJyYWNrZXRdID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBdXHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMucmJyYWNrZXRdID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAvLyAuIC4xXHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMuZG90XSA9ICgpID0+IFN0YXRlcy5kb3RPck51bWJlcjtcclxuXHJcbiAgICAgICAgICAgIC8vIDpcclxuICAgICAgICAgICAgbG9va3VwW1BOQy5zZW1pY29sb25dID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAsXHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMuY29tbWFdID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAvLyA8IDw8IDw9IDw8PCA8PD1cclxuICAgICAgICAgICAgbG9va3VwW1BOQy5sZXNzXSA9IExleGVyLmdlblB1bmN0dWF0aW9uU2Nhbm5lcihcclxuICAgICAgICAgICAgICAgIFtbUE5DLmxlc3NdLCBbUE5DLmFzc2lnbl0sIFtQTkMubGVzcywgUE5DLmxlc3NdLCBbUE5DLmxlc3MsIFBOQy5hc3NpZ25dXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gPiA+PSA+PiA+Pj0gPj4+ID4+Pj1cclxuICAgICAgICAgICAgbG9va3VwW1BOQy5tb3JlXSA9IExleGVyLmdlblB1bmN0dWF0aW9uU2Nhbm5lcihbXHJcbiAgICAgICAgICAgICAgICBbUE5DLm1vcmVdLCBbUE5DLmFzc2lnbl0sIFtQTkMubW9yZSwgUE5DLm1vcmVdLFxyXG4gICAgICAgICAgICAgICAgW1BOQy5tb3JlLCBQTkMuYXNzaWduXSwgW1BOQy5tb3JlLCBQTkMubW9yZSwgUE5DLmFzc2lnbl1cclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAhICE9ICE9PVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLmV4Y2xdID0gTGV4ZXIuZ2VuUHVuY3R1YXRpb25TY2FubmVyKFxyXG4gICAgICAgICAgICAgICAgW1tQTkMuYXNzaWduXSwgW1BOQy5hc3NpZ24sIFBOQy5hc3NpZ25dXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gLSAtLSAtPVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLm1pbnVzXSA9IExleGVyLmdlblB1bmN0dWF0aW9uU2Nhbm5lcihcclxuICAgICAgICAgICAgICAgIFtbUE5DLm1pbnVzXSwgW1BOQy5hc3NpZ25dXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gKyArKyArLT1cclxuICAgICAgICAgICAgbG9va3VwW1BOQy5wbHVzXSA9IExleGVyLmdlblB1bmN0dWF0aW9uU2Nhbm5lcihcclxuICAgICAgICAgICAgICAgIFtbUE5DLnBsdXNdLCBbUE5DLmFzc2lnbl1dXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAlICU9XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMucGVyY2VudF0gPSBMZXhlci5nZW5QdW5jdHVhdGlvblNjYW5uZXIoXHJcbiAgICAgICAgICAgICAgICBbW1BOQy5hc3NpZ25dXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gJiAmJiAmPVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLmFtcGVyc2FuZF0gPSBMZXhlci5nZW5QdW5jdHVhdGlvblNjYW5uZXIoXHJcbiAgICAgICAgICAgICAgICBbW1BOQy5hbXBlcnNhbmRdLCBbUE5DLmFzc2lnbl1dXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyB8IHx8IHw9XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMudmVydGljYWxdID0gTGV4ZXIuZ2VuUHVuY3R1YXRpb25TY2FubmVyKFxyXG4gICAgICAgICAgICAgICAgW1tQTkMudmVydGljYWxdLCBbUE5DLmFzc2lnbl1dXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBeIF49XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMuY2FyZXRdID0gTGV4ZXIuZ2VuUHVuY3R1YXRpb25TY2FubmVyKFxyXG4gICAgICAgICAgICAgICAgW1tQTkMuYXNzaWduXV1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIH5cclxuICAgICAgICAgICAgbG9va3VwW1BOQy50aWxkZV0gPSBMZXhlci5wcm90b3R5cGUuc3RhdGVQdW5jdHVhdGlvblNpbmdsZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vID9cclxuICAgICAgICAgICAgbG9va3VwW1BOQy5xdWVzdF0gPSBMZXhlci5wcm90b3R5cGUuc3RhdGVQdW5jdHVhdGlvblNpbmdsZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIDpcclxuICAgICAgICAgICAgbG9va3VwW1BOQy5jb2xvbl0gPSBMZXhlci5wcm90b3R5cGUuc3RhdGVQdW5jdHVhdGlvblNpbmdsZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vID0gPT0gPT09XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMuYXNzaWduXSA9IExleGVyLmdlblB1bmN0dWF0aW9uU2Nhbm5lcihcclxuICAgICAgICAgICAgICAgIFtbUE5DLmFzc2lnbl0sIFtQTkMuYXNzaWduLCBQTkMuYXNzaWduXV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vICogKj1cclxuICAgICAgICAgICAgbG9va3VwW1BOQy5hc3Rlcmlza10gPSBMZXhlci5nZW5QdW5jdHVhdGlvblNjYW5uZXIoXHJcbiAgICAgICAgICAgICAgICBbW1BOQy5hc3NpZ25dXVxyXG4gICAgICAgICAgICApO1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgLy8gLyAvPSAvKiAvLyBjb21tZW50XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMuc2xhc2hdID0gKCkgPT4gU3RhdGVzLmRpdk9yQ29tbWVudDtcclxuXHJcbiAgICAgICAgICAgIC8vIFxcIHdoaXRlc3BhY2VcclxuICAgICAgICAgICAgbG9va3VwW1BOQy5iYWNrc2xhc2hdID0gKCkgPT4gU3RhdGVzLmlkZW50aWZpZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBkZWZhdWx0TGV4ZXJPcHRpb25zOiBJTGV4ZXJPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBsb2M6IGZhbHNlLFxyXG4gICAgICAgICAgICByZWFkYWJsZVRva2Vuc01vZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGluY2x1ZGVDb21tZW50c0FzTm9ybWFsVG9rZW5zOiB0cnVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwcml2YXRlIGNoYXJTdHJlYW06IElDaGFyYWN0ZXJTdHJlYW0sXHJcbiAgICAgICAgICAgIHByaXZhdGUgZXhjZXB0aW9uSGFuZGxlcjogSUV4Y2VwdGlvbkhhbmRsZXIsXHJcbiAgICAgICAgICAgIHByaXZhdGUgb3B0aW9ucz86IElMZXhlck9wdGlvbnNcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gXy5kZWZhdWx0cyhcclxuICAgICAgICAgICAgICAgIF8uY2xvbmUob3B0aW9ucyB8fCB7fSksXHJcbiAgICAgICAgICAgICAgICBMZXhlci5kZWZhdWx0TGV4ZXJPcHRpb25zXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMubGluZW5vID0gMTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyTGluZUN1cnNvciA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWVudHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIExleGVyLmluaXRpYXRlQ2hhcmVjdGVyTG9va3VwT25jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGlzRXJyb3IodG9rZW46IElUb2tlbik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnJlYWRhYmxlVG9rZW5zTW9kZSA/XHJcbiAgICAgICAgICAgICAgICB0b2tlbi50eXBlID09PSBSZWFkYWJsZVRva2VuVHlwZS5lcnJvciA6IHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5lcnJvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGlzRW9mKHRva2VuOiBJVG9rZW4pOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5yZWFkYWJsZVRva2Vuc01vZGUgP1xyXG4gICAgICAgICAgICAgICAgdG9rZW4udHlwZSA9PT0gUmVhZGFibGVUb2tlblR5cGUuZW9mIDogdG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLmVvZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGlzQ29tbWVudCh0b2tlbjogSVRva2VuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucmVhZGFibGVUb2tlbnNNb2RlID9cclxuICAgICAgICAgICAgICAgIHRva2VuLnR5cGUgPT09IFJlYWRhYmxlVG9rZW5UeXBlLmNvbW1lbnQgOiB0b2tlbi50eXBlID09PSBUb2tlblR5cGUuY29tbWVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGlzTGl0ZXJhbCh0b2tlbjogSVRva2VuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucmVhZGFibGVUb2tlbnNNb2RlID9cclxuICAgICAgICAgICAgICAgIHRva2VuLnR5cGUgPT09IFJlYWRhYmxlVG9rZW5UeXBlLmxpdGVyYWwgOiB0b2tlbi50eXBlID09PSBUb2tlblR5cGUubGl0ZXJhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGlzUHVuY3R1YXRpb24odG9rZW46IElUb2tlbik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnJlYWRhYmxlVG9rZW5zTW9kZSA/XHJcbiAgICAgICAgICAgICAgICB0b2tlbi50eXBlID09PSBSZWFkYWJsZVRva2VuVHlwZS5wdW5jdHVhdGlvbiA6IHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5wdW5jdHVhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGlzS2V5d29yZCh0b2tlbjogSVRva2VuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucmVhZGFibGVUb2tlbnNNb2RlID9cclxuICAgICAgICAgICAgICAgIHRva2VuLnR5cGUgPT09IFJlYWRhYmxlVG9rZW5UeXBlLmtleXdvcmQgOiB0b2tlbi50eXBlID09PSBUb2tlblR5cGUua2V5d29yZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGlzSWRlbnRpZmllcih0b2tlbjogSVRva2VuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucmVhZGFibGVUb2tlbnNNb2RlID9cclxuICAgICAgICAgICAgICAgIHRva2VuLnR5cGUgPT09IFJlYWRhYmxlVG9rZW5UeXBlLmlkZW50aWZpZXIgOiB0b2tlbi50eXBlID09PSBUb2tlblR5cGUuaWRlbnRpZmllcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpc1B1bmN0dWF0aW9uVmFsdWUodG9rZW46IElUb2tlbiwgdmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1B1bmN0dWF0aW9uKHRva2VuKSAmJiB0b2tlbi52YWx1ZSA9PT0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBpc0tleXdvcmRWYWx1ZSh0b2tlbjogSVRva2VuLCB2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzS2V5d29yZCh0b2tlbikgJiYgdG9rZW4udmFsdWUgPT09IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgaXNJZGVudGlmaWVyVmFsdWUodG9rZW46IElUb2tlbiwgdmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0lkZW50aWZpZXIodG9rZW4pICYmIHRva2VuLnZhbHVlID09PSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgbWF0Y2hUeXBlKHZhbHVlOiBzdHJpbmcsIHR5cGVNYXRjaGVyOiAodG9rZW46IElUb2tlbiwgdmFsdWU6IHN0cmluZykgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlTWF0Y2hlci5jYWxsKHRoaXMsIHRva2VuLCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbWF0Y2hQdW5jdHVhdGlvbih2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hdGNoVHlwZSh2YWx1ZSwgdGhpcy5pc1B1bmN0dWF0aW9uVmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG1hdGNoS2V5d29yZCh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hdGNoVHlwZSh2YWx1ZSwgdGhpcy5pc0tleXdvcmRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcmVpbnRlcnByZXRMYXN0VG9rZW5Bc1JlZ2V4KHRva2VuOiBJVG9rZW4pOiBJVG9rZW4ge1xyXG4gICAgICAgICAgICB1dGlsaXRpZXMuYXNzZXJ0KHRoaXMuaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIi9cIikgfHwgdGhpcy5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwiLz1cIikpO1xyXG4gICAgICAgICAgICB0aGlzLmxvb2tBaGVhZFRva2VuID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uYndkQ3Vyc29yUmFuZ2UodG9rZW4udmFsdWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmVnaW5Gcm9tU3RhdGVSZWdleCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG5leHRUb2tlbigpOiBJVG9rZW4ge1xyXG4gICAgICAgICAgICBjb25zdCBsb29rQWhlYWRUb2tlbiA9IHRoaXMubG9va0FoZWFkVG9rZW47XHJcbiAgICAgICAgICAgIGlmIChsb29rQWhlYWRUb2tlbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb29rQWhlYWRUb2tlbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRUb2tlbiA9IGxvb2tBaGVhZFRva2VuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgbmV4dFRva2VuID0gdGhpcy5iZWdpbkZyb21TdGF0ZUluaXQoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNDb21tZW50KG5leHRUb2tlbikpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW5jbHVkZUNvbW1lbnRzQXNOb3JtYWxUb2tlbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnB1c2gobmV4dFRva2VuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cy5wdXNoKG5leHRUb2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRUb2tlbiA9IHRoaXMuYmVnaW5Gcm9tU3RhdGVJbml0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5pc0NvbW1lbnQobmV4dFRva2VuKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXh0VG9rZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXJ0U3RhdGVFbmdpbmUobmV4dFN0YXRlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgd2hpbGUgKG5leHRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgbmV4dFN0YXRlID0gdGhpc1tuZXh0U3RhdGVdLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVhZGFibGVUb2tlbnNNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVJlYWRhYmxlVG9rZW5zKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdHJhbnNsYXRlUmVhZGFibGVUb2tlbnMoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW4udHlwZSA9IHRvUmVhZGFibGVUb2tlblR5cGUodGhpcy50b2tlbi50eXBlIGFzIFRva2VuVHlwZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRva2VuLnN1YlR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW4uc3ViVHlwZSA9IHRvUmVhZGFibGVMaXRlcmFsU3ViVHlwZSh0aGlzLnRva2VuLnN1YlR5cGUgYXMgTGl0ZXJhbFN1YlR5cGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGJlZ2luRnJvbVN0YXRlSW5pdCgpOiBJVG9rZW4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0U3RhdGUgPSB0aGlzLnN0YXRlSW5pdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydFN0YXRlRW5naW5lKG5leHRTdGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGJlZ2luRnJvbVN0YXRlUmVnZXgoKTogSVRva2VuIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhbnVwQ29udGV4dCgpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0U3RhdGUgPSB0aGlzLnN0YXRlUmVnZXgoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRTdGF0ZUVuZ2luZShuZXh0U3RhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBjbGVhbnVwQ29udGV4dCgpIHtcclxuICAgICAgICAgICAgLy9jbGVhbnVwIGN1cnJlbnQgdG9rZW5cclxuICAgICAgICAgICAgdGhpcy50b2tlbiA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgIC8vdHJhY2sgY3Vyc29yIHBvc2l0aW9uXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMaW5lbm8gPSB0aGlzLmxpbmVubztcclxuICAgICAgICAgICAgdGhpcy5yZWxhdGl2ZVN0YXJ0Q3Vyc29yID0gdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpIC0gdGhpcy5jdXJyTGluZUN1cnNvcjtcclxuICAgICAgICAgICAgdGhpcy5hYnNvbHV0ZVN0YXJ0Q3Vyc29yID0gdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGxhdGVzdFRva2VuKCk6IElUb2tlbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRUb2tlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBsb29rQWhlYWROZXh0VG9rZW4oKTogSVRva2VuIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFRva2VuID0gdGhpcy5jdXJyZW50VG9rZW47XHJcbiAgICAgICAgICAgIHRoaXMubG9va0FoZWFkVG9rZW4gPSB0aGlzLm5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VG9rZW4gPSBjdXJyZW50VG9rZW47XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvb2tBaGVhZFRva2VuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGhhc05leHQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgcmV0dXJuICF0aGlzLmlzRW9mKHRva2VuKSAmJiAhdGhpcy5pc0Vycm9yKHRva2VuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRDb21tZW50cygpOiBJVG9rZW5bXSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbW1lbnRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldEN1cnJlbnRDdXJzb3JQb3MoKTogSVRva2VuUG9zaXRpb24ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbGluZTogdGhpcy5saW5lbm8sXHJcbiAgICAgICAgICAgICAgICBjb2x1bW46IHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKSAtIHRoaXMuY3VyckxpbmVDdXJzb3JcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIGZpbmFsIHN0YXRlc1xyXG5cdFx0XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0ZUZpbmlzaCgpIHsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRlRXJyb3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW4gPSB0aGlzLmNyZWF0ZVRva2VuRnJvbVBvcyhUb2tlblR5cGUuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLy8vLy8vIGZpbmFsIHN0YXRlcyAvLy8vLy9cclxuXHRcdFxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyBTdGF0ZXNcclxuXHRcdFxyXG4gICAgICAgIHByaXZhdGUgc3RhdGVJbml0KCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFudXBDb250ZXh0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGFyU3RyZWFtLmlzRW9mKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW4gPSB0aGlzLmNyZWF0ZVRva2VuKFRva2VuVHlwZS5lb2YsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGVzLmZpbmlzaDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IG5leHRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNoYXIgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0TmV4dENoYXIoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChJZGVudGlmeWVycy5pc0lkZW50aWZpZXJTdGFydChjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmJ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICAgICAgbmV4dFN0YXRlID0gU3RhdGVzLmlkZW50aWZpZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhckNhY2hlZEhhbmRsZXI6ICgpID0+IHN0cmluZyA9IExleGVyLkNoYXJlY3Rlckxvb2t1cFtjaGFyXTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGFyQ2FjaGVkSGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5id2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0U3RhdGUgPSBjaGFyQ2FjaGVkSGFuZGxlci5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFN0YXRlID0gdGhpcy51bmV4cGVjdGVkQ2hhcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbmV4dFN0YXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0ZUlkZW50aWZpZXIoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgbGV0IGNoYXJHZW46IElTdHJpbmdGcm9tQ2hhclBvaW50ID0gQ2hhclBvaW50cy5jcmVhdGVTdHJpbmdGcm9tQ2hhclBvaW50R2VuZXJhdG9yKCksXHJcbiAgICAgICAgICAgICAgICBjaGFyID0gdGhpcy5jaGFyU3RyZWFtLmdldE5leHRDaGFyKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2NhblVuaWNvZGVFc2NhcGVTZXF1ZW5jZShjaGFyR2VuLCBjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudW5leHBlY3RlZENoYXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0TmV4dENoYXIoKTtcclxuICAgICAgICAgICAgICAgIGlmIChJZGVudGlmeWVycy5pc0lkZW50aWZpZXJQYXJ0KGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNjYW5Vbmljb2RlRXNjYXBlU2VxdWVuY2UoY2hhckdlbiwgY2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudW5leHBlY3RlZENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5id2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHR5cGUsXHJcbiAgICAgICAgICAgICAgICBzdWJUeXBlLFxyXG4gICAgICAgICAgICAgICAgc3RyOiBhbnkgPSBjaGFyR2VuLmdldFN0cmluZygpO1xyXG4gICAgICAgICAgICBpZiAoSWRlbnRpZnllcnMuaXNLZXl3b3JkKHN0cikpIHtcclxuICAgICAgICAgICAgICAgIHR5cGUgPSBUb2tlblR5cGUua2V5d29yZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJudWxsXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBUb2tlblR5cGUubGl0ZXJhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViVHlwZSA9IExpdGVyYWxTdWJUeXBlLm51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidHJ1ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gVG9rZW5UeXBlLmxpdGVyYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YlR5cGUgPSBMaXRlcmFsU3ViVHlwZS5ib29sZWFuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZhbHNlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBUb2tlblR5cGUubGl0ZXJhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViVHlwZSA9IExpdGVyYWxTdWJUeXBlLmJvb2xlYW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFRva2VuVHlwZS5pZGVudGlmaWVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW4gPSB0aGlzLmNyZWF0ZVRva2VuKHR5cGUsIHN0ciwgc3ViVHlwZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZmluaXNoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgZ2VuU3RhdGVTdHJpbmcoc3RyaW5nVGVybWluYXRvckNoYXI6IG51bWJlcik6ICgpID0+IHN0cmluZyB7XHJcbiAgICAgICAgICAgIC8vIGVzYyBzZXEgLT5cclxuICAgICAgICAgICAgLy8gXFwgJyBcIiBcXCBiIGYgbiByIHQgdiAgLT4gdmFsXHJcbiAgICAgICAgICAgIC8vIFxcIHggSGV4RGlnaXQgSGV4RGlnaXQgIC0+IGhleCB2YWxcclxuICAgICAgICAgICAgLy8gXFwgdSBIZXhEaWdpdCBIZXhEaWdpdCBIZXhEaWdpdCBIZXhEaWdpdCAtPiB1IHZhbFxyXG4gICAgICAgICAgICAvLyBcXCBsaW5lIGNvbnQgLT4gaWdub3JlXHJcbiAgICAgICAgICAgIC8vIFxcIGRlY2ltYWwgZGlnaXQgLT4gaWdub3JlIGRpZ2l0XHJcbiAgICAgICAgICAgIC8vIFxcIGNoYXIgLT4gaWdub3JlIFxcXHJcblx0XHRcdFxyXG4gICAgICAgICAgICAvLyBjYW5ub3QgYmUgYW4gYXJyb3cgZnVuY3Rpb24gYmVjYXVzZSBpdCBiaW5kcyBfdGhpcyAtPiB0aGlzXHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoYXJHZW46IElTdHJpbmdGcm9tQ2hhclBvaW50ID0gQ2hhclBvaW50cy5jcmVhdGVTdHJpbmdGcm9tQ2hhclBvaW50R2VuZXJhdG9yKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSBzdHJpbmdUZXJtaW5hdG9yQ2hhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhciA9PT0gUE5DLmJhY2tzbGFzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyID0gdGhpcy5jaGFyU3RyZWFtLmdldE5leHRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY2hhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMuYjogY2hhckdlbi5hZGRDaGFyUG9pbnQoOCk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMuZjogY2hhckdlbi5hZGRDaGFyUG9pbnQoMTIpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUE5DLm46IGNoYXJHZW4uYWRkQ2hhclBvaW50KDEwKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFBOQy5yOiBjaGFyR2VuLmFkZENoYXJQb2ludCgxMyk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMudDogY2hhckdlbi5hZGRDaGFyUG9pbnQoOSk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMudjogY2hhckdlbi5hZGRDaGFyUG9pbnQoMTEpOyBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFBOQy54OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5oYW5kbGVTY2FuZ2l0cygyLCBjaGFyR2VuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGVzLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFBOQy51OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5oYW5kbGVTY2FuSGV4RGlnaXRzKDQsIGNoYXJHZW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoSWRlbnRpZnllcnMuaXNMaW5lVGVybWluYXRvcihjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyR2VuLmFkZENoYXJQb2ludChjaGFyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVOZXdMaW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51bmV4cGVjdGVkQ2hhcihcInVuY2xvc2VkIHN0cmluZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJHZW4uYWRkQ2hhclBvaW50KGNoYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW4gPSB0aGlzLmNyZWF0ZVRva2VuKFRva2VuVHlwZS5saXRlcmFsLCBjaGFyR2VuLmdldFN0cmluZygpLCBMaXRlcmFsU3ViVHlwZS5zdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5maW5pc2g7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRlTnVtYmVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYXJTdHJlYW0ubWF0Y2goUE5DLnplcm8pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGFyU3RyZWFtLm1hdGNoKFBOQy54KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhleE51bSA9IHRoaXMuc2NhbkhleERpZ2l0cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoZXhOdW0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51bmV4cGVjdGVkQ2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2VuID0gdGhpcy5jcmVhdGVUb2tlbihUb2tlblR5cGUubGl0ZXJhbCwgaGV4TnVtLCBMaXRlcmFsU3ViVHlwZS5udW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZmluaXNoXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uYndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBpbnQgPSB0aGlzLnNjYW5EaWdpdHMoKSxcclxuICAgICAgICAgICAgICAgIHBvaW50ID0gaW50Lmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hhclN0cmVhbS5tYXRjaChQTkMuZG90KSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRlY2ltYWwgPSB0aGlzLnNjYW5EZWNpbWFsKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVjaW1hbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ID0gaW50LmNvbmNhdChkZWNpbWFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2FuRXhwb25lbnNpYWxBbmRDcmVhdGVOdW1iZXIoaW50LCBwb2ludCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRlRG90T3JOdW1iZXIoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5md2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgbGV0IGRlY2ltYWwgPSB0aGlzLnNjYW5EZWNpbWFsKCk7XHJcbiAgICAgICAgICAgIGlmIChkZWNpbWFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNjYW5FeHBvbmVuc2lhbEFuZENyZWF0ZU51bWJlcihkZWNpbWFsLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5id2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlUHVuY3R1YXRpb25TaW5nbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0ZURpdk9yQ29tbWVudCgpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmZ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGNoYXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFBOQy5zbGFzaDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGVzLnNpbmdsZUNvbW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBQTkMuYXN0ZXJpc2s6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5tdWx0aUNvbW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBQTkMuYXNzaWduOlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmJ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5id2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVQdW5jdHVhdGlvblNpbmdsZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0ZVB1bmN0dWF0aW9uU2luZ2xlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5md2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuY3JlYXRlVG9rZW5Gcm9tUG9zKFRva2VuVHlwZS5wdW5jdHVhdGlvbik7XHJcbiAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZmluaXNoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0ZVdoaXRlU3BhY2UoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmZ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gU3RhdGVzLmluaXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRlTGluZVRlcm1pbmF0b3IoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgY29uc3QgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0ubWF0Y2hDb21wbGV4KG5leHRjaGFyID0+XHJcbiAgICAgICAgICAgICAgICAoY2hhciA9PT0gUE5DLmNyICYmIG5leHRjaGFyID09PSBQTkMubGYpXHJcbiAgICAgICAgICAgICAgICB8fCBuZXh0Y2hhciA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTmV3TGluZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gU3RhdGVzLmluaXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRlU2luZ2xlQ29tbWVudCgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKElkZW50aWZ5ZXJzLmlzTGluZVRlcm1pbmF0b3IoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU5ld0xpbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSB3aGlsZSAoY2hhciAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuY3JlYXRlVG9rZW5Gcm9tUG9zKFRva2VuVHlwZS5jb21tZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5maW5pc2g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRlTXVsdGlDb21tZW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09IFBOQy5hc3Rlcmlzaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoYXJTdHJlYW0ubWF0Y2goUE5DLnNsYXNoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudW5leHBlY3RlZENoYXIoXCJ1bmNsb3NlZCBzdHJpbmdcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChJZGVudGlmeWVycy5pc0xpbmVUZXJtaW5hdG9yKGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVOZXdMaW5lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuY3JlYXRlVG9rZW5Gcm9tUG9zKFRva2VuVHlwZS5jb21tZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5maW5pc2g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNjYW5Vbmljb2RlRXNjYXBlU2VxdWVuY2UoY2hhckdlbjogSVN0cmluZ0Zyb21DaGFyUG9pbnQsIGNoYXI6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gUE5DLmJhY2tzbGFzaCkge1xyXG4gICAgICAgICAgICAgICAgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09IFBOQy51KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhleERpZ2l0ID0gdGhpcy5zY2FuSGV4RGlnaXRzVGltZXMoNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhleERpZ2l0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhckdlbi5hZGRDaGFyUG9pbnQoaGV4RGlnaXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNoYXJHZW4uYWRkQ2hhclBvaW50KGNoYXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0ZVJlZ2V4KCk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjaGFyR2VuOiBJU3RyaW5nRnJvbUNoYXJQb2ludCA9IENoYXJQb2ludHMuY3JlYXRlU3RyaW5nRnJvbUNoYXJQb2ludEdlbmVyYXRvcigpO1xyXG4gICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICBjaGFyR2VuLmFkZENoYXJQb2ludChjaGFyKTtcclxuXHJcbiAgICAgICAgICAgIGxldCByZWdleEJvZHlIYXNNb3JlQ2hhcnMgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgaW5DbGFzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB3aGlsZSAocmVnZXhCb2R5SGFzTW9yZUNoYXJzKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFyID0gdGhpcy5jaGFyU3RyZWFtLmdldE5leHRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudW5leHBlY3RlZENoYXIoXCJJbnZhbGlkIHJlZ3VsYXIgZXhwcmVzc2lvblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNoYXJHZW4uYWRkQ2hhclBvaW50KGNoYXIpO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChjaGFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMuYmFja3NsYXNoOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyID0gdGhpcy5jaGFyU3RyZWFtLmdldE5leHRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSB1bmRlZmluZWQgfHwgSWRlbnRpZnllcnMuaXNMaW5lVGVybWluYXRvcihjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudW5leHBlY3RlZENoYXIoXCJJbnZhbGlkIHJlZ3VsYXIgZXhwcmVzc2lvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyR2VuLmFkZENoYXJQb2ludChjaGFyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgUE5DLmxicmFja2V0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbkNsYXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgUE5DLnJicmFja2V0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5DbGFzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5DbGFzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFBOQy5zbGFzaDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnZXhCb2R5SGFzTW9yZUNoYXJzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gdW5kZWZpbmVkIHx8IElkZW50aWZ5ZXJzLmlzTGluZVRlcm1pbmF0b3IoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVuZXhwZWN0ZWRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNoYXIgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0TmV4dENoYXIoKTtcclxuICAgICAgICAgICAgICAgIGlmIChJZGVudGlmeWVycy5pc0lkZW50aWZpZXJQYXJ0KGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhckdlbi5hZGRDaGFyUG9pbnQoY2hhcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5id2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy90aGlzLmNoYXJTdHJlYW0uYndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW4gPSB0aGlzLmNyZWF0ZVRva2VuKFRva2VuVHlwZS5saXRlcmFsLCBjaGFyR2VuLmdldFN0cmluZygpLCBMaXRlcmFsU3ViVHlwZS5yZWdleCk7XHJcbiAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZmluaXNoO1xyXG4gICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vL1N0YXRlcy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIFNjYW5uZXJzXHJcbiAgICAgICAgcHJpdmF0ZSBzY2FuRXhwb25lbnNpYWxBbmRDcmVhdGVOdW1iZXIoaW50OiBudW1iZXJbXSwgcG9pbnQ6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIGxldCBleHAgPSB0aGlzLnNjYW5FeHBvbmVudGlhbCgpO1xyXG4gICAgICAgICAgICBpZiAoZXhwID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hhclN0cmVhbS5tYXRjaENvbXBsZXgoY2hhciA9PiBJZGVudGlmeWVycy5pc0lkZW50aWZpZXJQYXJ0KGNoYXIpKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudW5leHBlY3RlZENoYXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbnVtID0gdGhpcy5jcmVhdGVOdW1iZXIoaW50LCBwb2ludCwgZXhwKTtcclxuICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuY3JlYXRlVG9rZW4oVG9rZW5UeXBlLmxpdGVyYWwsIG51bSwgTGl0ZXJhbFN1YlR5cGUubnVtYmVyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5maW5pc2hcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2NhbkRpZ2l0cygpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFyLFxyXG4gICAgICAgICAgICAgICAgZGl0cyA9IFtdLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yUG9zID0gdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpO1xyXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKElkZW50aWZ5ZXJzLmlzRGlnaXQoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlnaXQgPSBDaGFyUG9pbnRzLmdldERpZ2l0RnJvbUNoYXJQb2ludChjaGFyKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXRzLnB1c2goZGlnaXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjaGFyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5id2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgY3VyckN1cnNvcnBvcyA9IHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKTtcclxuICAgICAgICAgICAgaWYgKGN1cnJDdXJzb3Jwb3MgLSBjdXJzb3JQb3MgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkaXRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNjYW5EZWNpbWFsKCk6IG51bWJlcltdIHtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0UG9zID0gdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpLFxyXG4gICAgICAgICAgICAgICAgZGlnaXRzID0gdGhpcy5zY2FuRGlnaXRzKCksXHJcbiAgICAgICAgICAgICAgICBlbmRQb3MgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCksXHJcbiAgICAgICAgICAgICAgICBkaWdpdFJhbmdlID0gZW5kUG9zIC0gc3RhcnRQb3M7XHJcbiAgICAgICAgICAgIGlmIChkaWdpdFJhbmdlICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlnaXRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNjYW5FeHBvbmVudGlhbCgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gUE5DLmV4cCB8fCBjaGFyID09PSBQTkMuZXhwYikge1xyXG4gICAgICAgICAgICAgICAgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5lZ2F0aXZlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSBQTkMubWludXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWdhdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyICE9PSBQTkMucGx1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5id2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGlnaXRzID0gdGhpcy5zY2FuRGlnaXRzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlnaXRzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuZXhwZWN0ZWRDaGFyKFwiZXhwb25lbnRpYWwgc2hvdWxkIHBvc3RmaXhlZCBieSBudW1iZXJzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gdGhpcy5jcmVhdGVOdW1iZXIoZGlnaXRzLCBkaWdpdHMubGVuZ3RoLCAwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZWdhdGl2ZSA/IC1udW0gOiBudW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hhciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uYndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNjYW5IZXhEaWdpdHNUaW1lcyh0aW1lczogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0aW5nUG9zID0gdGltZXM7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5jaGFyU3RyZWFtLmdldE5leHRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUlkZW50aWZ5ZXJzLmlzSGV4RGlnaXQoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uYndkQ3Vyc29yUmFuZ2Uoc3RhcnRpbmdQb3MgLSAodGltZXMgLSAxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IHdoaWxlICgtLXRpbWVzKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnNvclBvcyA9IHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKSxcclxuICAgICAgICAgICAgICAgIGhleFN0ciA9IHRoaXMuY2hhclN0cmVhbS50b2tlbml6ZShjdXJzb3JQb3MgLSBzdGFydGluZ1Bvcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChoZXhTdHIsIDE2KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2NhbkhleERpZ2l0cygpOiBudW1iZXIge1xyXG4gICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICBsZXQgaGV4TGVuID0gMDtcclxuICAgICAgICAgICAgd2hpbGUgKElkZW50aWZ5ZXJzLmlzSGV4RGlnaXQoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgICsraGV4TGVuO1xyXG4gICAgICAgICAgICAgICAgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaGV4TGVuID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uYndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnNvclBvcyA9IHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKSxcclxuICAgICAgICAgICAgICAgIGhleFN0ciA9IHRoaXMuY2hhclN0cmVhbS50b2tlbml6ZShjdXJzb3JQb3MgLSBoZXhMZW4pO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoaGV4U3RyLCAxNik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBnZW5QdW5jdHVhdGlvblNjYW5uZXIoY2FuZGljYXRlUHVuY3M6IG51bWJlcltdW10pIHtcclxuICAgICAgICAgICAgY29uc3QgbGFzdExlbiA9IF8ubGFzdChjYW5kaWNhdGVQdW5jcykubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgcHVuY3NMb29rdXAgPSBfLm1hcChuZXcgQXJyYXkobGFzdExlbiksICgpID0+IG5ldyBPYmplY3QoKSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGN1cnIgPSBsYXN0TGVuIC0gMTsgY3VyciAhPT0gLTE7IC0tY3Vycikge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNhbmRpY2F0ZVB1bmNzLmxlbmd0aCAtIDE7IGkgIT09IC0xOyAtLWkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjID0gY2FuZGljYXRlUHVuY3NbaV1bY3Vycl07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVuY3NMb29rdXBbY3Vycl1bY10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNhbm5vdCB1c2UgYXJyb3cgZnVuY3Rpb24gYmVjYXVzZSBpdCBjb25mdXNlIHRoaXMgd2l0aCBfdGhpcyBcclxuICAgICAgICAgICAgLy8gaW4gdGhlIGNvbXBsaWxlZCB0eXBlc2NyaXB0IHZlcnNpb25cclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmZ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXN0TGVuOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcHVuY3NMb29rdXBbaV1bY2hhcl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmJ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW4gPSB0aGlzLmNyZWF0ZVRva2VuRnJvbVBvcyhUb2tlblR5cGUucHVuY3R1YXRpb24sIHRoaXMuc3RhcnRQb3MpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5maW5pc2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vU2Nhbm5lcnMvLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyBMZXggb2JqZWN0IGNyZWF0b3JzXHJcbiAgICAgICAgcHJpdmF0ZSBjcmVhdGVUb2tlblNvdXJjZUxvY2F0aW9uRnJvbUN1cnNvcigpOiBJVG9rZW5Tb3VyY2VMb2NhdGlvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiBUb2tlblNvdXJjZUxvY2F0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBsaW5lOiB0aGlzLnN0YXJ0TGluZW5vLFxyXG4gICAgICAgICAgICAgICAgY29sdW1uOiB0aGlzLnJlbGF0aXZlU3RhcnRDdXJzb3JcclxuICAgICAgICAgICAgfSwgdGhpcy5nZXRDdXJyZW50Q3Vyc29yUG9zKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBjcmVhdGVUb2tlbkZyb21Qb3ModHlwZTogc3RyaW5nIHwgVG9rZW5UeXBlLCBzdWJUeXBlPzogc3RyaW5nKTogSVRva2VuIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmNoYXJTdHJlYW0udG9rZW5pemUodGhpcy5hYnNvbHV0ZVN0YXJ0Q3Vyc29yKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlVG9rZW4odHlwZSwgdmFsdWUsIHN1YlR5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBjcmVhdGVUb2tlbih0eXBlOiBzdHJpbmcgfCBUb2tlblR5cGUsIHZhbHVlOiBhbnksIHN1YlR5cGU/OiBzdHJpbmcgfCBMaXRlcmFsU3ViVHlwZSk6IElUb2tlbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuOiBJVG9rZW4gPSB7IHR5cGUsIHZhbHVlLCBzdWJUeXBlIH07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubG9jKSB7XHJcbiAgICAgICAgICAgICAgICB0b2tlbi5sb2MgPSB0aGlzLmNyZWF0ZVRva2VuU291cmNlTG9jYXRpb25Gcm9tQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgIH1cclxuXHRcdFxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vTGV4IG9iamVjdCBjcmVhdG9ycy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyBIYW5kbGVyc1xyXG5cdFx0XHJcbiAgICAgICAgcHJpdmF0ZSBnZW5JbnRlZ2VyRnJvbUFycmF5KGRpZ2l0cywgZnJvbSwgdG8pIHtcclxuICAgICAgICAgICAgbGV0IG51bSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBmcm9tOyBpIDwgdG87ICsraSkge1xyXG4gICAgICAgICAgICAgICAgbnVtID0gMTAgKiBudW0gKyBkaWdpdHNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgY3JlYXRlTnVtYmVyKGRpZ2l0cywgcG9pbnQsIGV4cCkge1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRQb2ludCA9IHBvaW50ICsgZXhwLFxyXG4gICAgICAgICAgICAgICAgaW50UGFydCA9IDAsIGRlY1BhcnQgPSAwO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnRQb2ludCA8IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBudW0gPSB0aGlzLmdlbkludGVnZXJGcm9tQXJyYXkoZGlnaXRzLCAwLCBkaWdpdHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudW0gLyBNYXRoLnBvdygxMCwgcG9pbnQgLSBleHApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0UG9pbnQgPiBkaWdpdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gdGhpcy5nZW5JbnRlZ2VyRnJvbUFycmF5KGRpZ2l0cywgMCwgZGlnaXRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtICogTWF0aC5wb3coMTAsIHN0YXJ0UG9pbnQgLSBkaWdpdHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBudW0gPSB0aGlzLmdlbkludGVnZXJGcm9tQXJyYXkoZGlnaXRzLCAwLCBzdGFydFBvaW50KSxcclxuICAgICAgICAgICAgICAgICAgICBkZWMgPSB0aGlzLmdlbkludGVnZXJGcm9tQXJyYXkoZGlnaXRzLCBzdGFydFBvaW50LCBkaWdpdHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudW0gKyBkZWMgLyBNYXRoLnBvdygxMCwgZGlnaXRzLmxlbmd0aCAtIHN0YXJ0UG9pbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGhhbmRsZVNjYW5IZXhEaWdpdHMobnVtOiBudW1iZXIsIGNoYXJHZW46IElTdHJpbmdGcm9tQ2hhclBvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGxldCBoZXhEaWdpdCA9IHRoaXMuc2NhbkhleERpZ2l0c1RpbWVzKG51bSk7XHJcbiAgICAgICAgICAgIGlmIChoZXhEaWdpdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuZXhwZWN0ZWRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjaGFyR2VuLmFkZENoYXJQb2ludChoZXhEaWdpdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGhhbmRsZU5ld0xpbmUoKSB7XHJcbiAgICAgICAgICAgICsrdGhpcy5saW5lbm87XHJcbiAgICAgICAgICAgIHRoaXMuY3VyckxpbmVDdXJzb3IgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHVuZXhwZWN0ZWRDaGFyKG1zZz86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIG1zZyA9IG1zZyB8fCB0aGlzLmNoYXJTdHJlYW0udG9rZW5pemUodGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpIC0gMSk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhjZXB0aW9uSGFuZGxlci5hZGRFeGNlcHRpb24obXNnLCB0aGlzLmxpbmVubywgdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpKTtcclxuICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5lcnJvcjtcclxuICAgICAgICB9ICAgICAgICBcdFxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vL0hhbmRsZXJzLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUb2tlblNvdXJjZUxvY2F0aW9uIHtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBjcmVhdGUoc3RhcnQ6IGxleGljYWwuSVRva2VuUG9zaXRpb24sIGVuZDogbGV4aWNhbC5JVG9rZW5Qb3NpdGlvbik6IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24ge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdGFydCwgZW5kIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuIixudWxsLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHNEZWZpbml0aW9ucy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9DaGFyUG9pbnRzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIklDaGFyYWN0ZXJTdHJlYW0uZC50c1wiIC8+XHJcblxyXG5tb2R1bGUgdHJsLmZyb250ZW5kLmxleGljYWwge1xyXG5cdFxyXG5cdGV4cG9ydCBjbGFzcyBDaGFyYWN0ZXJTdHJlYW0gaW1wbGVtZW50cyBJQ2hhcmFjdGVyU3RyZWFtIHtcclxuXHRcdHByaXZhdGUgY3Vyc29yOiBudW1iZXI7XHJcblxyXG5cdFx0cHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgc3JjOiBzdHJpbmcpIHtcclxuXHRcdFx0dGhpcy5jdXJzb3IgPSAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdHB1YmxpYyBnZXROZXh0Q2hhcigpOiBudW1iZXIge1xyXG5cdFx0XHRpZih0aGlzLmhhc05leHQoKSkge1xyXG5cdFx0XHRcdHJldHVybiBDaGFyUG9pbnRzLmNvZGVQb2ludEF0KHRoaXMuc3JjLCB0aGlzLmN1cnNvcisrKTtcclxuXHRcdFx0fVx0XHRcdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHB1YmxpYyBnZXRDaGFyKCk6IG51bWJlciB7XHJcblx0XHRcdHJldHVybiBDaGFyUG9pbnRzLmNvZGVQb2ludEF0KHRoaXMuc3JjLCB0aGlzLmN1cnNvcik7XHJcblx0XHR9XHJcblxyXG5cdFx0cHVibGljIGdldEN1cnNvcigpOiBudW1iZXIge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jdXJzb3I7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHB1YmxpYyBid2RDdXJzb3IoKSB7XHJcblx0XHRcdC0tdGhpcy5jdXJzb3I7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHB1YmxpYyBmd2RDdXJzb3IoKSB7XHJcblx0XHRcdGlmKHRoaXMuaGFzTmV4dCgpKSB7XHJcblx0XHRcdFx0Kyt0aGlzLmN1cnNvcjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwdWJsaWMgYndkQ3Vyc29yUmFuZ2UocmFuZ2U6IG51bWJlcikge1xyXG5cdFx0XHR0aGlzLmN1cnNvciA9IE1hdGgubWF4KHRoaXMuY3Vyc29yIC0gcmFuZ2UsIDApO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwdWJsaWMgdG9rZW5pemUoc3RhcnRQb3M6IG51bWJlcik6IHN0cmluZyB7XHJcblx0XHRcdHJldHVybiB0aGlzLnNyYy5zdWJzdHJpbmcoc3RhcnRQb3MsIHRoaXMuY3Vyc29yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIG1hdGNoKGNoYXJNYXRjaDogbnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRcdGxldCBjaGFyID0gdGhpcy5nZXROZXh0Q2hhcigpO1xyXG5cdFx0XHRpZihjaGFyID09PSBjaGFyTWF0Y2gpIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRpZihjaGFyICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdHRoaXMuYndkQ3Vyc29yKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwdWJsaWMgbWF0Y2hDb21wbGV4KGNvbXBhcmF0b3I6IChjaGFyOiBudW1iZXIpID0+IGJvb2xlYW4pOiBib29sZWFuIHtcclxuXHRcdFx0bGV0IGNoYXIgPSB0aGlzLmdldE5leHRDaGFyKCk7XHJcblx0XHRcdGlmKGNvbXBhcmF0b3IoY2hhcikpIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRpZihjaGFyICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdHRoaXMuYndkQ3Vyc29yKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwdWJsaWMgaXNFb2YoKTogYm9vbGVhbiB7XHJcblx0XHRcdHJldHVybiB0aGlzLmN1cnNvciA+PSB0aGlzLnNyYy5sZW5ndGg7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHByaXZhdGUgaGFzTmV4dCgpOiBib29sZWFuIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY3Vyc29yIDwgdGhpcy5zcmMubGVuZ3RoO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsIm1vZHVsZSB0cmwudXRpbGl0aWVzIHtcclxuICAgIFxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGFzc2VydChjb25kOiBhbnksIG1zZz86IHN0cmluZykge1xyXG4gICAgICAgIGlmKCFjb25kKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXNzZXJ0aW9uIGZhaWw6ICR7bXNnfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIklOb2RlLnRzXCIgLz5cclxuXHJcbm1vZHVsZSB0cmwuZnJvbnRlbmQuc3ludGF4IHtcclxuICAgIFxyXG4gICAgZXhwb3J0IGNsYXNzIE5vZGVGYWN0b3J5IHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVuYWJsZVBvczogYm9vbGVhbikge31cclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGNyZWF0ZU5vZGUobm9kZSwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbikge1xyXG4gICAgICAgICAgICBpZih0aGlzLmVuYWJsZVBvcykge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5sb2MgPSBsb2M7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlUHJvZ3JhbShib2R5OiBJU3RhdGVtZW50W10sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJUHJvZ3JhbSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQcm9ncmFtXCIsXHJcbiAgICAgICAgICAgICAgICBib2R5XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTdGF0ZW1lbnRFbXB0eShsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUVtcHR5U3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkVtcHR5U3RhdGVtZW50XCJcclxuICAgICAgICAgICAgfSwgbG9jKTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudEJsb2NrKGJvZHk6IElTdGF0ZW1lbnRbXSwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElCbG9ja1N0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCbG9ja1N0YXRlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgYm9keVxyXG4gICAgICAgICAgICB9LCBsb2MpOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50RXhwcmVzc2lvbihleHByZXNzaW9uOiBJRXhwcmVzc2lvbiwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElFeHByZXNzaW9uU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkV4cHJlc3Npb25TdGF0ZW1lbnRcIixcclxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb25cclxuICAgICAgICAgICAgfSwgbG9jKTsgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudElmKHRlc3Q6IElFeHByZXNzaW9uLCBjb25zZXF1ZW50OiBJU3RhdGVtZW50LCBhbHRlcm5hdGU/OiBJU3RhdGVtZW50LCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUlmU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIklmU3RhdGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICB0ZXN0LFxyXG4gICAgICAgICAgICAgICAgY29uc2VxdWVudCxcclxuICAgICAgICAgICAgICAgIGFsdGVybmF0ZVxyXG4gICAgICAgICAgICB9LCBsb2MpOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudEJyZWFrKGxhYmVsOiBJSWRlbnRpZmllciwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElCcmVha1N0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCcmVha1N0YXRlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgfSwgbG9jKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTdGF0ZW1lbnRDb250aW51ZShsYWJlbDogSUlkZW50aWZpZXIsIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJQ29udGludWVTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQ29udGludWVTdGF0ZW1lbnRcIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICB9LCBsb2MpOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudFdpdGgob2JqOiBJRXhwcmVzc2lvbiwgYm9keTogSVN0YXRlbWVudCwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElXaXRoU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIldpdGhTdGF0ZW1lbnRcIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvYmosXHJcbiAgICAgICAgICAgICAgICBib2R5XHJcbiAgICAgICAgICAgIH0sIGxvYyk7IFxyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTdGF0ZW1lbnRTd2l0Y2goZGlzY3JpbWluYW50OiBJRXhwcmVzc2lvbiwgY2FzZXM6IElTd2l0Y2hDYXNlW10sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJU3dpdGNoU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlN3aXRjaFN0YXRlbWVudFwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRpc2NyaW1pbmFudCxcclxuICAgICAgICAgICAgICAgIGNhc2VzXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTdGF0ZW1lbnRSZXR1cm4oYXJndW1lbnQ6IElFeHByZXNzaW9uLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVJldHVyblN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJSZXR1cm5TdGF0ZW1lbnRcIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBhcmd1bWVudFxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50TGFiZWxlZChsYWJlbDogSUlkZW50aWZpZXIsIGJvZHk6IElTdGF0ZW1lbnQsIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJTGFiZWxlZFN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJMYWJlbGVkU3RhdGVtZW50XCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgICAgICBib2R5XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudFRocm93KGFyZ3VtZW50OiBJRXhwcmVzc2lvbiwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElUaHJvd1N0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJUaHJvd1N0YXRlbWVudFwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFyZ3VtZW50XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTdGF0ZW1lbnRUcnkoYmxvY2s6IElCbG9ja1N0YXRlbWVudCwgaGFuZGxlcjogSUNhdGNoQ2xhdXNlLCBmaW5hbGl6ZXI6IElCbG9ja1N0YXRlbWVudCwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElUcnlTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiVHJ5U3RhdGVtZW50XCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYmxvY2ssXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyLFxyXG4gICAgICAgICAgICAgICAgZmluYWxpemVyXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTdGF0ZW1lbnRXaGlsZSh0ZXN0OiBJRXhwcmVzc2lvbiwgYm9keTogSVN0YXRlbWVudCwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElXaGlsZVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJXaGlsZVN0YXRlbWVudFwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRlc3QsXHJcbiAgICAgICAgICAgICAgICBib2R5XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTdGF0ZW1lbnREb1doaWxlKGJvZHk6IElTdGF0ZW1lbnQsIHRlc3Q6IElFeHByZXNzaW9uLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSURvV2hpbGVTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRG9XaGlsZVN0YXRlbWVudFwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAgICAgICB0ZXN0XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTdGF0ZW1lbnRGb3IoaW5pdDogSVZhcmlhYmxlRGVjbGFyYXRpb24gfCBJRXhwcmVzc2lvbiwgdGVzdDogSUV4cHJlc3Npb24sIHVwZGF0ZTogSUV4cHJlc3Npb24sIGJvZHk6IElTdGF0ZW1lbnQsIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJRm9yU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkZvclN0YXRlbWVudFwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGluaXQsXHJcbiAgICAgICAgICAgICAgICB0ZXN0LFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlLFxyXG4gICAgICAgICAgICAgICAgYm9keVxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50Rm9ySW4obGVmdDogSVZhcmlhYmxlRGVjbGFyYXRpb24gfCBJRXhwcmVzc2lvbiwgcmlnaHQ6IElFeHByZXNzaW9uLCBib2R5OiBJU3RhdGVtZW50LCBlYWNoOiBib29sZWFuLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUZvckluU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkZvckluU3RhdGVtZW50XCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGVmdCxcclxuICAgICAgICAgICAgICAgIHJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgYm9keSxcclxuICAgICAgICAgICAgICAgIGVhY2hcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudERlYnVnZ2VyKGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJRGVidWdnZXJTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRm9ySW5TdGF0ZW1lbnRcIixcclxuICAgICAgICAgICAgICAgIGxvY1xyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRGVjbGFyYXRpb25GdW5jdGlvbihpZDogSUlkZW50aWZpZXIsIHBhcmFtczogSUlkZW50aWZpZXJbXSwgYm9keTogSUJsb2NrU3RhdGVtZW50LCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUZ1bmN0aW9uRGVjbGFyYXRpb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRnVuY3Rpb25EZWNsYXJhdGlvblwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgYm9keVxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRGVjbGFyYXRpb25WYXJpYWJsZShkZWNsYXJhdGlvbnM6IElWYXJpYWJsZURlY2xhcmF0b3JbXSwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElWYXJpYWJsZURlY2xhcmF0aW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlZhcmlhYmxlRGVjbGFyYXRpb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBraW5kOiBcInZhclwiXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVWYXJpYWJsZURlY2xhcmF0b3IoaWQ6IElJZGVudGlmaWVyLCBpbml0OiBJRXhwcmVzc2lvbiwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElWYXJpYWJsZURlY2xhcmF0b3Ige1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiVmFyaWFibGVEZWNsYXJhdG9yXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICBpbml0XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVFeHByZXNzaW9uVGhpcyhsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVRoaXNFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlRoaXNFeHByZXNzaW9uXCIsXHJcbiAgICAgICAgICAgICAgICBsb2NcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUV4cHJlc3Npb25BcnJheShlbGVtZW50czogSUV4cHJlc3Npb25bXSwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElBcnJheUV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQXJyYXlFeHByZXNzaW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudHNcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUV4cHJlc3Npb25PYmplY3QocHJvcGVydGllczogSVByb3BlcnR5W10sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJT2JqZWN0RXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJPYmplY3RFeHByZXNzaW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc1xyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlT2JqZWN0UHJvcGVydHkoa2V5OiBJTGl0ZXJhbCB8IElJZGVudGlmaWVyLCB2YWx1ZTogSUV4cHJlc3Npb24sIGtpbmQ6IHN0cmluZywgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElQcm9wZXJ0eSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQcm9wZXJ0eVwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAga2luZFxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRXhwcmVzc2lvbkZ1bmN0aW9uKGlkOiBJSWRlbnRpZmllciwgcGFyYW1zOiBJSWRlbnRpZmllcltdLCBib2R5OiBJQmxvY2tTdGF0ZW1lbnQsIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJRnVuY3Rpb25FeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkZ1bmN0aW9uRXhwcmVzc2lvblwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgYm9keVxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH0gICAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRXhwcmVzc2lvblNlcXVlbmNlKGV4cHJlc3Npb25zOiBJRXhwcmVzc2lvbltdLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVNlcXVlbmNlRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJTZXF1ZW5jZUV4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uc1xyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRXhwcmVzc2lvblVuYXJ5KG9wZXJhdG9yOiBzdHJpbmcsIHByZWZpeDogYm9vbGVhbiwgYXJndW1lbnQ6IElFeHByZXNzaW9uLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVVuYXJ5RXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJVbmFyeUV4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcixcclxuICAgICAgICAgICAgICAgIHByZWZpeCxcclxuICAgICAgICAgICAgICAgIGFyZ3VtZW50XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVFeHByZXNzaW9uQmluYXJ5KG9wZXJhdG9yOiBzdHJpbmcsIGxlZnQ6IElFeHByZXNzaW9uLCByaWdodDogSUV4cHJlc3Npb24sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJQmluYXJ5RXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCaW5hcnlFeHByZXNzaW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3IsXHJcbiAgICAgICAgICAgICAgICBsZWZ0LFxyXG4gICAgICAgICAgICAgICAgcmlnaHRcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUV4cHJlc3Npb25Bc3NpZ25tZW50KG9wZXJhdG9yOiBzdHJpbmcsIGxlZnQ6IElFeHByZXNzaW9uLCByaWdodDogSUV4cHJlc3Npb24sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJQXNzaWdubWVudEV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQXNzaWdubWVudEV4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcixcclxuICAgICAgICAgICAgICAgIGxlZnQsXHJcbiAgICAgICAgICAgICAgICByaWdodFxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRXhwcmVzc2lvblVwZGF0ZShvcGVyYXRvcjogc3RyaW5nLCBhcmd1bWVudDogSUV4cHJlc3Npb24sIHByZWZpeDogYm9vbGVhbiwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElVcGRhdGVFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlVwZGF0ZUV4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcixcclxuICAgICAgICAgICAgICAgIGFyZ3VtZW50LFxyXG4gICAgICAgICAgICAgICAgcHJlZml4XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVFeHByZXNzaW9uTG9naWNhbChvcGVyYXRvcjogc3RyaW5nLCBsZWZ0OiBJRXhwcmVzc2lvbiwgcmlnaHQ6IElFeHByZXNzaW9uLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUxvZ2ljYWxFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkxvZ2ljYWxFeHByZXNzaW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3IsXHJcbiAgICAgICAgICAgICAgICBsZWZ0LFxyXG4gICAgICAgICAgICAgICAgcmlnaHRcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUV4cHJlc3Npb25Db25kaXRpb25hbCh0ZXN0OiBJRXhwcmVzc2lvbiwgYWx0ZXJuYXRlOiBJRXhwcmVzc2lvbiwgY29uc2VxdWVudDogSUV4cHJlc3Npb24sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJQ29uZGl0aW9uYWxFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkNvbmRpdGlvbmFsRXhwcmVzc2lvblwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRlc3QsXHJcbiAgICAgICAgICAgICAgICBhbHRlcm5hdGUsXHJcbiAgICAgICAgICAgICAgICBjb25zZXF1ZW50XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVFeHByZXNzaW9uTmV3KGNhbGxlZTogSUV4cHJlc3Npb24sIGFyZ3M6IElFeHByZXNzaW9uW10sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJTmV3RXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJOZXdFeHByZXNzaW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2FsbGVlLFxyXG4gICAgICAgICAgICAgICAgYXJndW1lbnRzOiBhcmdzXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVFeHByZXNzaW9uQ2FsbChjYWxsZWU6IElFeHByZXNzaW9uLCBhcmdzOiBJRXhwcmVzc2lvbltdLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUNhbGxFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkNhbGxFeHByZXNzaW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2FsbGVlLFxyXG4gICAgICAgICAgICAgICAgYXJndW1lbnRzOiBhcmdzXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVFeHByZXNzaW9uTWVtYmVyKG9iamVjdDogSUV4cHJlc3Npb24sIHByb3BlcnR5OiBJSWRlbnRpZmllciB8IElFeHByZXNzaW9uLCBjb21wdXRlZDogYm9vbGVhbiwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElNZW1iZXJFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIk1lbWJlckV4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvYmplY3QsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgIGNvbXB1dGVkXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTd2l0Y2hDYXNlKHRlc3Q6IElFeHByZXNzaW9uLCBjb25zZXF1ZW50OiBJU3RhdGVtZW50W10sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJU3dpdGNoQ2FzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJTd2l0Y2hDYXNlXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGVzdCxcclxuICAgICAgICAgICAgICAgIGNvbnNlcXVlbnRcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUNhdGNoQ2xhdXNlKHBhcmFtOiBJSWRlbnRpZmllciwgYm9keTogSUJsb2NrU3RhdGVtZW50LCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUNhdGNoQ2xhdXNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkNhdGNoQ2xhdXNlXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcGFyYW0sXHJcbiAgICAgICAgICAgICAgICBib2R5XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVJZGVudGlmaWVyKG5hbWU6IHN0cmluZywgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElJZGVudGlmaWVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIklkZW50aWZpZXJcIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVMaXRlcmFsKHZhbHVlOiBzdHJpbmcgfCBib29sZWFuIHwgbnVtYmVyIHwgSVJlZ0V4cCwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElMaXRlcmFsIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkxpdGVyYWxcIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHNEZWZpbml0aW9ucy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9sZXhpY2FsL0xleGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3V0aWxpdGllcy9Bc3NlcnRpb24udHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRXhjZXB0aW9uLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2xleGljYWwvQ2hhcmFjdGVyU3RyZWFtLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2xleGljYWwvVG9rZW5EZWZpbml0aW9ucy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJOb2RlRmFjdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJJUGFyc2VyLmQudHNcIiAvPlxyXG5cclxubW9kdWxlIHRybC5mcm9udGVuZC5zeW50YXgge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBQYXJzZXIgaW1wbGVtZW50cyBJUGFyc2VyIHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBub2RlRmFjdG9yeTogTm9kZUZhY3Rvcnk7XHJcbiAgICAgICAgcHJpdmF0ZSBwYXJzZUV4Y2VwdGlvbjogSUV4Y2VwdGlvbkhhbmRsZXI7XHJcblxyXG4gICAgICAgIHByaXZhdGUgY2hhclN0cmVhbTogbGV4aWNhbC5JQ2hhcmFjdGVyU3RyZWFtO1xyXG4gICAgICAgIHByaXZhdGUgbGV4RXhjZXB0aW9uOiBJRXhjZXB0aW9uSGFuZGxlcjtcclxuICAgICAgICBwcml2YXRlIGxleDogbGV4aWNhbC5JTGV4ZXI7XHJcblxyXG4gICAgICAgIHByaXZhdGUgaW5Gb3JJbjogYm9vbGVhbjtcclxuICAgICAgICBwcml2YXRlIGluTG9vcE11dGV4OiBudW1iZXJbXTtcclxuICAgICAgICBwcml2YXRlIGluU3dpdGNoTXV0ZXg6IG51bWJlcltdO1xyXG4gICAgICAgIHByaXZhdGUgaW5GdW5jdGlvbk11dGV4OiBudW1iZXI7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGRlZmF1bHRQYXJzZXJPcHRpb25zOiBJUGFyc2VyT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbG9jOiBmYWxzZSxcclxuICAgICAgICAgICAgdG9sZXJhdGVFcnJvcnM6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgbGV4ZXJPcHRpb25zOiBsZXhpY2FsLklMZXhlck9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGxvYzogdHJ1ZSxcclxuICAgICAgICAgICAgcmVhZGFibGVUb2tlbnNNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgaW5jbHVkZUNvbW1lbnRzQXNOb3JtYWxUb2tlbnM6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIGNoYXJzOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHByaXZhdGUgb3B0aW9ucz86IElQYXJzZXJPcHRpb25zXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IF8uZGVmYXVsdHMoXHJcbiAgICAgICAgICAgICAgICBfLmNsb25lKG9wdGlvbnMgfHwge30pLFxyXG4gICAgICAgICAgICAgICAgUGFyc2VyLmRlZmF1bHRQYXJzZXJPcHRpb25zXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUZhY3RvcnkgPSBuZXcgTm9kZUZhY3RvcnkodGhpcy5vcHRpb25zLmxvYyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyc2VFeGNlcHRpb24gPSBuZXcgRXhjZXB0aW9uSGFuZGxlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtID0gbmV3IGxleGljYWwuQ2hhcmFjdGVyU3RyZWFtKGNoYXJzKTtcclxuICAgICAgICAgICAgdGhpcy5sZXhFeGNlcHRpb24gPSBuZXcgRXhjZXB0aW9uSGFuZGxlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmxleCA9IG5ldyBsZXhpY2FsLkxleGVyKHRoaXMuY2hhclN0cmVhbSwgdGhpcy5sZXhFeGNlcHRpb24sIFBhcnNlci5sZXhlck9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pbkZvckluID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaW5Mb29wTXV0ZXggPSBbMF07XHJcbiAgICAgICAgICAgIHRoaXMuaW5Td2l0Y2hNdXRleCA9IFswXTtcclxuICAgICAgICAgICAgdGhpcy5pbkZ1bmN0aW9uTXV0ZXggPSAwO1xyXG4gICAgICAgIH0gICAgICAgXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyBDb250ZXh0IFV0aWxpdGllc1xyXG5cclxuICAgICAgICAvL2l0ZXJhdGlvbiBtdXRleFxyXG4gICAgICAgIHByaXZhdGUgYmVnaW5JdGVyYXRpb24oKSB7XHJcbiAgICAgICAgICAgICsrdGhpcy5pbkxvb3BNdXRleFt0aGlzLmluTG9vcE11dGV4Lmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmaW5pc2hJdGVyYXRpb24oKSB7XHJcbiAgICAgICAgICAgIC0tdGhpcy5pbkxvb3BNdXRleFt0aGlzLmluTG9vcE11dGV4Lmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBuZXdJdGVyYXRpb25TY29wZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbkxvb3BNdXRleC5wdXNoKDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZXN0b3JlSXRlcmF0aW9uU2NvcGUoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJJdGVyYXRpb25NdXRleCA9IHRoaXMuaW5Mb29wTXV0ZXgucG9wKCk7XHJcbiAgICAgICAgICAgIHV0aWxpdGllcy5hc3NlcnQoY3Vyckl0ZXJhdGlvbk11dGV4ID09PSAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaXNPbkl0ZXJhdGlvbigpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5Mb29wTXV0ZXhbdGhpcy5pbkxvb3BNdXRleC5sZW5ndGggLSAxXSA+IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3N3aXRjaCBtdXRleFxyXG4gICAgICAgIHByaXZhdGUgYmVnaW5Td2l0Y2goKSB7XHJcbiAgICAgICAgICAgICsrdGhpcy5pblN3aXRjaE11dGV4W3RoaXMuaW5Td2l0Y2hNdXRleC5sZW5ndGggLSAxXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZmluaXNoU3dpdGNoKCkge1xyXG4gICAgICAgICAgICAtLXRoaXMuaW5Td2l0Y2hNdXRleFt0aGlzLmluU3dpdGNoTXV0ZXgubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIG5ld1N3aXRjaFNjb3BlKCkge1xyXG4gICAgICAgICAgICB0aGlzLmluU3dpdGNoTXV0ZXgucHVzaCgwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVzdG9yZVN3aXRjaFNjb3BlKCkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyU3dpdGNoTXV0ZXggPSB0aGlzLmluU3dpdGNoTXV0ZXgucG9wKCk7XHJcbiAgICAgICAgICAgIHV0aWxpdGllcy5hc3NlcnQoY3VyclN3aXRjaE11dGV4ID09PSAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaXNPblN3aXRjaCgpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5Td2l0Y2hNdXRleFt0aGlzLmluU3dpdGNoTXV0ZXgubGVuZ3RoIC0gMV0gPiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvL2Z1bmN0aW9uIG11dGV4XHJcbiAgICAgICAgcHJpdmF0ZSBiZWdpbkZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICArK3RoaXMuaW5GdW5jdGlvbk11dGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmaW5pc2hGdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLS10aGlzLmluRnVuY3Rpb25NdXRleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaXNPbkZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbkZ1bmN0aW9uTXV0ZXggPiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8vLy8vLy8vLy8vQ29udGV4dCBVdGlsaXRpZXMvLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8gUGFyc2UgVXRpbGl0aWVzXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGdldEV4Y2VwdGlvbnMoKTogSUV4Y2VwdGlvbkhhbmRsZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUV4Y2VwdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgYWRkRXhjZXB0aW9uKHRva2VuOiBsZXhpY2FsLklUb2tlbikge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMubGV4LmlzRW9mKHRva2VuKSA/IFwiZW5kIG9mIGZpbGVcIiA6IHRva2VuLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnNlRXhjZXB0aW9uLmFkZEV4Y2VwdGlvbihcclxuICAgICAgICAgICAgICAgIGBVbmRleHBlY3RlZCB0b2tlbjogJyR7dmFsdWV9J2AsXHJcbiAgICAgICAgICAgICAgICB0b2tlbi5sb2Muc3RhcnQubGluZSxcclxuICAgICAgICAgICAgICAgIHRva2VuLmxvYy5zdGFydC5jb2x1bW5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZGVsZWdhdGVMZXhpY2FsRXJyb3JzKCkge1xyXG4gICAgICAgICAgICBjb25zdCBsZXhFeGNlcHRpb25zID0gdGhpcy5sZXhFeGNlcHRpb24uZ2V0RXhjZXB0aW9ucygpO1xyXG4gICAgICAgICAgICBfLmVhY2gobGV4RXhjZXB0aW9ucywgbGV4RXhjZXB0aW9uID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnNlRXhjZXB0aW9uLmFkZEV4Y2VwdGlvbihsZXhFeGNlcHRpb24ubXNnLCBsZXhFeGNlcHRpb24ucG9zLmxpbmUsIGxleEV4Y2VwdGlvbi5wb3MuY29sdW1uKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGNhblRvbGVyYXRlRXJyb3IoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhdGVzdFRva2VuID0gdGhpcy5sZXgubGF0ZXN0VG9rZW4oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy50b2xlcmF0ZUVycm9yc1xyXG4gICAgICAgICAgICAgICAgJiYgbGF0ZXN0VG9rZW5cclxuICAgICAgICAgICAgICAgICYmICEodGhpcy5sZXguaXNFb2YobGF0ZXN0VG9rZW4pIHx8IHRoaXMubGV4LmlzRXJyb3IobGF0ZXN0VG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgcGFyc2VTdGF0ZW1lbnRJZkNhblRvbGVyYXRlKHN0bXRzOiBJU3RhdGVtZW50W10pOiBib29sZWFuIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RtdCA9IHRoaXMucGFyc2VTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgaWYgKHN0bXQpIHtcclxuICAgICAgICAgICAgICAgIHN0bXRzLnB1c2goc3RtdCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYW5Ub2xlcmF0ZUVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHRyaW1PcHRpb25hbFNlbWljb2xvbigpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCI7XCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5Jc0luU2FtZUxpbmUodG9rZW4pXHJcbiAgICAgICAgICAgICAgICAmJiAhdGhpcy5sZXguaXNFb2YodG9rZW4pXHJcbiAgICAgICAgICAgICAgICAmJiAhdGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIn1cIilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV4Y2VwdGlvbih0b2tlbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHRyYWNrUG9zaXRpb25VbmFyeSh0b2tlbjogbGV4aWNhbC5JVG9rZW4pOiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuLmxvYztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdHJhY2tQb3NpdGlvbkJ5UG9zKHN0YXJ0UG9zOiBsZXhpY2FsLklUb2tlblBvc2l0aW9uKTogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhdGVzdFRva2VuID0gdGhpcy5sZXgubGF0ZXN0VG9rZW4oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGxleGljYWwuVG9rZW5Tb3VyY2VMb2NhdGlvbi5jcmVhdGUoc3RhcnRQb3MsIGxhdGVzdFRva2VuLmxvYy5lbmQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB0cmFja1Bvc2l0aW9uQnlUb2tlbihzdGFydFRva2VuOiBsZXhpY2FsLklUb2tlbik6IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24ge1xyXG4gICAgICAgICAgICBjb25zdCBsYXRlc3RUb2tlbiA9IHRoaXMubGV4LmxhdGVzdFRva2VuKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBsZXhpY2FsLlRva2VuU291cmNlTG9jYXRpb24uY3JlYXRlKHN0YXJ0VG9rZW4ubG9jLnN0YXJ0LCBsYXRlc3RUb2tlbi5sb2MuZW5kKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZXhwZWN0VHlwZSh2YWx1ZTogc3RyaW5nLCB0eXBlQ2hlY2tlcjogKHRva2VuOiBsZXhpY2FsLklUb2tlbiwgdmFsdWU6IHN0cmluZykgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodHlwZUNoZWNrZXIuY2FsbCh0aGlzLmxleCwgdG9rZW4sIHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hZGRFeGNlcHRpb24odG9rZW4pO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGV4cGVjdFB1bmN0dWF0aW9uKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwZWN0VHlwZSh2YWx1ZSwgKHRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBleHBlY3RLZXl3b3JkKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwZWN0VHlwZSh2YWx1ZSwgKHRoaXMubGV4LmlzS2V5d29yZFZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHRva2VuSXNJblNhbWVMaW5lKHRva2VuOiBsZXhpY2FsLklUb2tlbik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW4ubG9jLmVuZC5saW5lID09PSB0aGlzLmxleC5sYXRlc3RUb2tlbigpLmxvYy5lbmQubGluZTtcclxuICAgICAgICB9ICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy9QYXJzZSBVdGlsaXRpZXMvLy8vLy8vLy8vLy8vICAgXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8gUGFyc2UgUHJvZ3JhbVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2UoKTogSVByb2dyYW0ge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzRXJyb3IoaW5pdGlhbFRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZUxleGljYWxFcnJvcnMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RtdHMgPSB0aGlzLnBhcnNlU291cmNlRWxlbWVudHMoKTtcclxuICAgICAgICAgICAgaWYgKCFzdG10cykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzRW9mKGluaXRpYWxUb2tlbikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVByb2dyYW0oc3RtdHMsIHRoaXMudHJhY2tQb3NpdGlvblVuYXJ5KGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVByb2dyYW0oc3RtdHMsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VTb3VyY2VFbGVtZW50cygpOiBJU3RhdGVtZW50W10ge1xyXG4gICAgICAgICAgICBjb25zdCBzdG10czogSVN0YXRlbWVudFtdID0gW107XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmxleC5oYXNOZXh0KCkgJiYgdGhpcy5wYXJzZVN0YXRlbWVudElmQ2FuVG9sZXJhdGUoc3RtdHMpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0bXRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLy8vLy8vLy8vLy8vL1BhcnNlIFByb2dyYW0vLy8vLy8vLy8vLy8vLy8vIFxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8gUGFyc2UgU3RhdGVtZW50c1xyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNLZXl3b3JkKHRva2VuKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodG9rZW4udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidmFyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVmFyaWFibGVTdGF0ZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImlmXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlSWZTdGF0ZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIndoaWxlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlV2hpbGVTdGF0ZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRvXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRG9XaGlsZVN0YXRlbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZm9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRm9yU3RhdGVtZW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb250aW51ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUNvbnRpbnVlU3RhdGVtZW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJicmVha1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUJyZWFrU3RhdGVtZW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ3aXRoXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlV2l0aFN0YXRlbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3dpdGNoXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlU3dpdGNoU3RhdGVtZW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0aHJvd1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVRocm93U3RhdGVtZW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0cnlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VUcnlTdGF0ZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRlYnVnZ2VyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRGVidWdnZXJTdGF0ZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZ1bmN0aW9uXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRnVuY3Rpb24odHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyZXR1cm5cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VSZXR1cm5TdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uKHRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0b2tlbi52YWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwie1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUJsb2NrU3RhdGVtZW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCI7XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRW1wdHlTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmxleC5pc0lkZW50aWZpZXIodG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUxhYmVsZWRTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUV4cHJlc3Npb25TdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUJsb2NrU3RhdGVtZW50KCk6IElCbG9ja1N0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCJ7XCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdG10czogSVN0YXRlbWVudFtdID0gW107XHJcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICB3aGlsZSAoIXRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCJ9XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucGFyc2VTdGF0ZW1lbnRJZkNhblRvbGVyYXRlKHN0bXRzKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIn1cIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudEJsb2NrKHN0bXRzLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlRW1wdHlTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIjtcIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudEVtcHR5KHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUlmU3RhdGVtZW50KCk6IElTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgY29uc3QgdGVzdEV4cHIgPSB0aGlzLnBhcnNlS2V5d29yZExwYXJFeHByZXNzaW9uUnBhcihcImlmXCIpO1xyXG4gICAgICAgICAgICBpZiAoIXRlc3RFeHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb25zU3RtdCA9IHRoaXMucGFyc2VTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgaWYgKCFjb25zU3RtdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IGFsdFN0bXQgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXgubWF0Y2hLZXl3b3JkKFwiZWxzZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgYWx0U3RtdCA9IHRoaXMucGFyc2VTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICghYWx0U3RtdCkgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudElmKHRlc3RFeHByLCBjb25zU3RtdCwgYWx0U3RtdCwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgcGFyc2VJdGVyYXRpb24ocGFyc2VGdW5jOiAoKSA9PiBJTm9kZSk6IElTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICB0aGlzLmJlZ2luSXRlcmF0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0bXQgPSBwYXJzZUZ1bmMuYXBwbHkodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoSXRlcmF0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG10O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpbm5lclBhcnNlV2hpbGVTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGVzdEV4cHIgPSB0aGlzLnBhcnNlS2V5d29yZExwYXJFeHByZXNzaW9uUnBhcihcIndoaWxlXCIpO1xyXG4gICAgICAgICAgICBpZiAoIXRlc3RFeHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdG10ID0gdGhpcy5wYXJzZVN0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICBpZiAoIXN0bXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudFdoaWxlKHRlc3RFeHByLCBzdG10LCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlV2hpbGVTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlSXRlcmF0aW9uKHRoaXMuaW5uZXJQYXJzZVdoaWxlU3RhdGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbm5lclBhcnNlRG9XaGlsZVN0YXRlbWVudCgpOiBJU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0S2V5d29yZChcImRvXCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdG10ID0gdGhpcy5wYXJzZVN0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICBpZiAoIXN0bXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRlc3RFeHByID0gdGhpcy5wYXJzZUtleXdvcmRMcGFyRXhwcmVzc2lvblJwYXIoXCJ3aGlsZVwiKTtcclxuICAgICAgICAgICAgaWYgKCF0ZXN0RXhwcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sZXgubWF0Y2hQdW5jdHVhdGlvbihcIjtcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnREb1doaWxlKHN0bXQsIHRlc3RFeHByLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlRG9XaGlsZVN0YXRlbWVudCgpOiBJU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VJdGVyYXRpb24odGhpcy5pbm5lclBhcnNlRG9XaGlsZVN0YXRlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGlubmVyUGFyc2VGb3JTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEodGhpcy5leHBlY3RLZXl3b3JkKFwiZm9yXCIpICYmIHRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCIoXCIpKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IGluaXREZWNsOiBJVmFyaWFibGVEZWNsYXJhdGlvbiA9IG51bGwsXHJcbiAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IElWYXJpYWJsZURlY2xhcmF0b3JbXSxcclxuICAgICAgICAgICAgICAgIGluaXRFeHByOiBJRXhwcmVzc2lvbiA9IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwiO1wiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbkZvckluID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc0tleXdvcmRWYWx1ZSh0b2tlbiwgXCJ2YXJcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zID0gdGhpcy5wYXJzZVZhcmlhYmxlRGVjbGFyYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRlY2xhcmF0aW9ucykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbml0RGVjbCA9IHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRGVjbGFyYXRpb25WYXJpYWJsZShkZWNsYXJhdGlvbnMsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4odG9rZW4pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRFeHByID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWluaXRFeHByKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluRm9ySW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGlzRm9ySW4gPSBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRlc3QgPSBudWxsO1xyXG4gICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzS2V5d29yZFZhbHVlKHRva2VuLCBcImluXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGlzRm9ySW4gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChQYXJzZXIuaXNJbnZhbGlkRm9ySW5MZWZ0U2lkZShpbml0RXhwciwgZGVjbGFyYXRpb25zKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VFeGNlcHRpb24uYWRkRXhjZXB0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgZm9yIGluIGxlZnQgc2lkZSBzaG91bGQgcmVzb2x2ZSB0byByZWZlcmVuY2VgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVG9rZW4ubG9jLnN0YXJ0LmxpbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxUb2tlbi5sb2Muc3RhcnQuY29sdW1uXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCI7XCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIjtcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXN0ID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRlc3QpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCI7XCIpKSByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB1cGRhdGUgPSBudWxsO1xyXG4gICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCIpXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGUgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF1cGRhdGUpIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGlzRm9ySW4gJiYgIXVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFeGNlcHRpb24odG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCIpXCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gdGhpcy5wYXJzZVN0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICBpZiAoIWJvZHkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKTtcclxuICAgICAgICAgICAgY29uc3QgaW5pdCA9IGluaXRFeHByIHx8IGluaXREZWNsO1xyXG4gICAgICAgICAgICBpZiAoaXNGb3JJbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50Rm9ySW4oaW5pdCwgdXBkYXRlLCBib2R5LCBmYWxzZSwgcG9zKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudEZvcihpbml0LCB0ZXN0LCB1cGRhdGUsIGJvZHksIHBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGlzSW52YWxpZEZvckluTGVmdFNpZGUoaW5pdEV4cHI6IElFeHByZXNzaW9uLCBkZWNsYXJhdGlvbnM6IElWYXJpYWJsZURlY2xhcmF0b3JbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKCFpbml0RXhwciAmJiAhZGVjbGFyYXRpb25zKVxyXG4gICAgICAgICAgICAgICAgfHwgKChpbml0RXhwciAmJiAhUGFyc2VyLmlzTGVmdEhhbmRFeHByZXNzaW9uUmVzb2x2aW5nVG9SZWZlcmVuY2UoaW5pdEV4cHIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHx8IChkZWNsYXJhdGlvbnMgJiYgZGVjbGFyYXRpb25zLmxlbmd0aCAhPT0gMSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlRm9yU3RhdGVtZW50KCk6IElTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUl0ZXJhdGlvbih0aGlzLmlubmVyUGFyc2VGb3JTdGF0ZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwYXJzZUtleXdvcmRJZGVudGlmaWVyU2VtaWNvbG9uKGtleXdvcmQ6IHN0cmluZywgbm9kZUZhY3RvcnlGdW5jOiAoaXRlbjogSU5vZGUsIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pID0+IElOb2RlKTogSU5vZGUge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdEtleXdvcmQoa2V5d29yZCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtOiBJTm9kZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50b2tlbklzSW5TYW1lTGluZSh0b2tlbikgJiYgdGhpcy5sZXguaXNJZGVudGlmaWVyKHRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMucGFyc2VJZGVudGlmaWVyKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0pIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMudHJpbU9wdGlvbmFsU2VtaWNvbG9uKCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBub2RlRmFjdG9yeUZ1bmMuY2FsbCh0aGlzLm5vZGVGYWN0b3J5LCBpdGVtLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlQ29udGludWVTdGF0ZW1lbnQoKTogSUV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICBjb25zdCBzdG10ID0gdGhpcy5wYXJzZUtleXdvcmRJZGVudGlmaWVyU2VtaWNvbG9uKFwiY29udGludWVcIiwgdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRDb250aW51ZSk7XHJcbiAgICAgICAgICAgIGlmICghc3RtdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPbkl0ZXJhdGlvbigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RtdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBhcnNlRXhjZXB0aW9uLmFkZEV4Y2VwdGlvbihcclxuICAgICAgICAgICAgICAgIGBJbGxlZ2FsIGNvbnRpbnVlIHN0YXRlbWVudGAsXHJcbiAgICAgICAgICAgICAgICBzdG10LmxvYy5zdGFydC5saW5lLFxyXG4gICAgICAgICAgICAgICAgc3RtdC5sb2Muc3RhcnQuY29sdW1uXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VCcmVha1N0YXRlbWVudCgpOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0bXQgPSB0aGlzLnBhcnNlS2V5d29yZElkZW50aWZpZXJTZW1pY29sb24oXCJicmVha1wiLCB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudEJyZWFrKTtcclxuICAgICAgICAgICAgaWYgKCFzdG10KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc09uSXRlcmF0aW9uKCkgfHwgdGhpcy5pc09uU3dpdGNoKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdG10O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGFyc2VFeGNlcHRpb24uYWRkRXhjZXB0aW9uKFxyXG4gICAgICAgICAgICAgICAgYElsbGVnYWwgYnJlYWsgc3RhdGVtZW50YCxcclxuICAgICAgICAgICAgICAgIHN0bXQubG9jLnN0YXJ0LmxpbmUsXHJcbiAgICAgICAgICAgICAgICBzdG10LmxvYy5zdGFydC5jb2x1bW5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZVJldHVyblN0YXRlbWVudCgpOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0S2V5d29yZChcInJldHVyblwiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgbGV0IGl0ZW06IElOb2RlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRva2VuSXNJblNhbWVMaW5lKHRva2VuKVxyXG4gICAgICAgICAgICAgICAgJiYgIXRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCI7XCIpXHJcbiAgICAgICAgICAgICAgICAmJiAhdGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIn1cIilcclxuICAgICAgICAgICAgICAgICYmICF0aGlzLmxleC5pc0VvZih0b2tlbilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIGlmICghaXRlbSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc09uRnVuY3Rpb24oKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50UmV0dXJuKGl0ZW0sIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wYXJzZUV4Y2VwdGlvbi5hZGRFeGNlcHRpb24oXHJcbiAgICAgICAgICAgICAgICBgSWxsZWdhbCByZXR1cm4gc3RhdGVtZW50YCxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxUb2tlbi5sb2Muc3RhcnQubGluZSxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxUb2tlbi5sb2Muc3RhcnQuY29sdW1uXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VXaXRoU3RhdGVtZW50KCk6IElFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUtleXdvcmRMcGFyRXhwcmVzc2lvblJwYXIoXCJ3aXRoXCIpO1xyXG4gICAgICAgICAgICBpZiAoIWV4cHIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0bXQgPSB0aGlzLnBhcnNlU3RhdGVtZW50KCk7XHJcbiAgICAgICAgICAgIGlmICghc3RtdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50V2l0aChleHByLCBzdG10LCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwYXJzZUNhc2VDbGF1c2VTdGF0ZW1lbnRzKGV4cGVjdERlZmF1bHQ6IGJvb2xlYW4pOiBJU3RhdGVtZW50W10ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCI6XCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdG10czogSVN0YXRlbWVudFtdID0gW107XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzS2V5d29yZFZhbHVlKHRva2VuLCBcImNhc2VcIilcclxuICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwifVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHx8ICh0aGlzLmxleC5pc0tleXdvcmRWYWx1ZSh0b2tlbiwgXCJkZWZhdWx0XCIpICYmIGV4cGVjdERlZmF1bHQpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucGFyc2VTdGF0ZW1lbnRJZkNhblRvbGVyYXRlKHN0bXRzKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdG10cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgcGFyc2VDYXNlc0NsYXVzZShjYXNlczogSVN3aXRjaENhc2VbXSwgZXhwZWN0RGVmYXVsdDogYm9vbGVhbikge1xyXG4gICAgICAgICAgICBsZXQgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmxleC5pc0tleXdvcmRWYWx1ZSh0b2tlbiwgXCJjYXNlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIGlmICghZXhwcikgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0bXRzID0gdGhpcy5wYXJzZUNhc2VDbGF1c2VTdGF0ZW1lbnRzKGV4cGVjdERlZmF1bHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdG10cykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN3aXRjaENhc2UgPSB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN3aXRjaENhc2UoZXhwciwgc3RtdHMsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4odG9rZW4pKTtcclxuICAgICAgICAgICAgICAgIGNhc2VzLnB1c2goc3dpdGNoQ2FzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaW5uZXJQYXJzZVN3aXRjaFN0YXRlbWVudCgpOiBJU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUtleXdvcmRMcGFyRXhwcmVzc2lvblJwYXIoXCJzd2l0Y2hcIik7XHJcbiAgICAgICAgICAgIGlmICghZXhwcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwie1wiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNhc2VzOiBJU3dpdGNoQ2FzZVtdID0gW107XHJcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzS2V5d29yZFZhbHVlKHRva2VuLCBcImNhc2VcIikpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wYXJzZUNhc2VzQ2xhdXNlKGNhc2VzLCB0cnVlKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc0tleXdvcmRWYWx1ZSh0b2tlbiwgXCJkZWZhdWx0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdG10cyA9IHRoaXMucGFyc2VDYXNlQ2xhdXNlU3RhdGVtZW50cyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0bXRzKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdENhc2UgPSB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN3aXRjaENhc2UobnVsbCwgc3RtdHMsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4odG9rZW4pKTtcclxuICAgICAgICAgICAgICAgIGNhc2VzLnB1c2goZGVmYXVsdENhc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc0tleXdvcmRWYWx1ZSh0b2tlbiwgXCJjYXNlXCIpXHJcbiAgICAgICAgICAgICAgICAmJiAhdGhpcy5wYXJzZUNhc2VzQ2xhdXNlKGNhc2VzLCBmYWxzZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIn1cIikpIHJldHVybjtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50U3dpdGNoKGV4cHIsIGNhc2VzLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlU3dpdGNoU3RhdGVtZW50KCk6IElTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICB0aGlzLmJlZ2luU3dpdGNoKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0bXQgPSB0aGlzLmlubmVyUGFyc2VTd2l0Y2hTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hTd2l0Y2goKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0bXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VUaHJvd1N0YXRlbWVudCgpOiBJU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RLZXl3b3JkKFwidGhyb3dcIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmIChpbml0aWFsVG9rZW4ubG9jLnN0YXJ0LmxpbmUgIT09IHRva2VuLmxvYy5zdGFydC5saW5lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnNlRXhjZXB0aW9uLmFkZEV4Y2VwdGlvbihcclxuICAgICAgICAgICAgICAgICAgICBgSWxsZWdhbCBuZXdsaW5lIGFmdGVyIHRocm93YCxcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVG9rZW4ubG9jLnN0YXJ0LmxpbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFRva2VuLmxvYy5zdGFydC5jb2x1bW5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICBpZiAoIWV4cHIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy50cmltT3B0aW9uYWxTZW1pY29sb24oKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRUaHJvdyhleHByLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlVHJ5U3RhdGVtZW50KCk6IElTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdEtleXdvcmQoXCJ0cnlcIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0bXQgPSB0aGlzLnBhcnNlQmxvY2tTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgaWYgKCFzdG10KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgbGV0IGNhdGNoQ2xhdXNlOiBJQ2F0Y2hDbGF1c2UgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzS2V5d29yZFZhbHVlKHRva2VuLCBcImNhdGNoXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXRjaElkID0gdGhpcy5wYXJzZUtleXdvcmRMcGFyRXhwcmVzc2lvblJwYXIoXCJjYXRjaFwiKTtcclxuICAgICAgICAgICAgICAgIGlmICghKGNhdGNoSWQgJiYgY2F0Y2hJZC50eXBlID09PSBcIklkZW50aWZpZXJcIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdG10ID0gdGhpcy5wYXJzZUJsb2NrU3RhdGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0bXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXRjaENsYXVzZSA9IHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlQ2F0Y2hDbGF1c2UoKGNhdGNoSWQgYXMgSUlkZW50aWZpZXIpLCBzdG10LCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKHRva2VuKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBmaW5hbGl6ZXI6IElCbG9ja1N0YXRlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5tYXRjaEtleXdvcmQoXCJmaW5hbGx5XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBmaW5hbGl6ZXIgPSB0aGlzLnBhcnNlQmxvY2tTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICghZmluYWxpemVyKSByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudFRyeShzdG10LCBjYXRjaENsYXVzZSwgZmluYWxpemVyLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlRGVidWdnZXJTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAoISh0aGlzLmV4cGVjdEtleXdvcmQoXCJkZWJ1Z2dlclwiKSAmJiB0aGlzLnRyaW1PcHRpb25hbFNlbWljb2xvbigpKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50RGVidWdnZXIodGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUxhYmVsZWRTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgaWYgKCFleHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAoZXhwci50eXBlID09PSBcIklkZW50aWZpZXJcIiAmJiB0aGlzLmxleC5tYXRjaFB1bmN0dWF0aW9uKFwiOlwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RtdCA9IHRoaXMucGFyc2VTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICghc3RtdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudExhYmVsZWQoZXhwciBhcyBJSWRlbnRpZmllciwgc3RtdCwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBwYXJzZSBsaWtlIGEgbm9ybWFsIGV4cHJlc3Npb24gc3RhdGVtZW50XHJcbiAgICAgICAgICAgIGlmICghdGhpcy50cmltT3B0aW9uYWxTZW1pY29sb24oKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50RXhwcmVzc2lvbihleHByLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwYXJzZUtleXdvcmRMcGFyRXhwcmVzc2lvblJwYXIoa2V5d29yZDogc3RyaW5nKTogSUV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICBpZiAoISh0aGlzLmV4cGVjdEtleXdvcmQoa2V5d29yZCkgJiYgdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIihcIikpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgaWYgKGV4cHIgJiYgdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIilcIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBleHByO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VWYXJpYWJsZVN0YXRlbWVudCgpOiBJU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RLZXl3b3JkKFwidmFyXCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZURlY2xhcmF0b3JzID0gdGhpcy5wYXJzZVZhcmlhYmxlRGVjbGFyYXRvcnMoKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnRyaW1PcHRpb25hbFNlbWljb2xvbigpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVEZWNsYXJhdGlvblZhcmlhYmxlKHZhcmlhYmxlRGVjbGFyYXRvcnMsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VFeHByZXNzaW9uU3RhdGVtZW50KCk6IElTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgY29uc3QgZXhwciA9IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIGlmICghKGV4cHIgJiYgdGhpcy50cmltT3B0aW9uYWxTZW1pY29sb24oKSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudEV4cHJlc3Npb24oZXhwciwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vLy8vLy8vLy9QYXJzZSBTdGF0ZW1lbnRzLy8vLy8vLy8vLy8vLy8vLyAgICBcclxuICAgICAgICBcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8gRGVjbGFyYXRpb25zXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBwYXJzZVZhcmlhYmxlRGVjbGFyYXRvcnMoKTogSVZhcmlhYmxlRGVjbGFyYXRvcltdIHtcclxuICAgICAgICAgICAgbGV0IHZhcmlhYmxlRGVjbGFyYXRvciA9IHRoaXMucGFyc2VWYXJpYWJsZURlY2xhcmF0b3IoKTtcclxuICAgICAgICAgICAgaWYgKCF2YXJpYWJsZURlY2xhcmF0b3IpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlRGVjbGFyYXRvcnM6IElWYXJpYWJsZURlY2xhcmF0b3JbXSA9IFt2YXJpYWJsZURlY2xhcmF0b3JdO1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5sZXgubWF0Y2hQdW5jdHVhdGlvbihcIixcIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlRGVjbGFyYXRvciA9IHRoaXMucGFyc2VWYXJpYWJsZURlY2xhcmF0b3IoKTtcclxuICAgICAgICAgICAgICAgIGlmICghdmFyaWFibGVEZWNsYXJhdG9yKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVEZWNsYXJhdG9ycy5wdXNoKHZhcmlhYmxlRGVjbGFyYXRvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRvcnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VWYXJpYWJsZURlY2xhcmF0b3IoKTogSVZhcmlhYmxlRGVjbGFyYXRvciB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gdGhpcy5wYXJzZUlkZW50aWZpZXIoKTtcclxuICAgICAgICAgICAgaWYgKCFpZGVudGlmaWVyKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgZXhwciA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5tYXRjaFB1bmN0dWF0aW9uKFwiPVwiKSkge1xyXG4gICAgICAgICAgICAgICAgZXhwciA9IHRoaXMucGFyc2VBc3NpZ25tZW50RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFleHByKSByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVZhcmlhYmxlRGVjbGFyYXRvcihpZGVudGlmaWVyLCBleHByLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vL0RlY2xhcmF0aW9ucy8vLy8vLy8vLy8vLy8vLy8vICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIFBhcnNlIEV4cHJlc3Npb25zICAgICAgICBcclxuICAgICAgICBwdWJsaWMgcGFyc2VFeHByZXNzaW9uKCk6IElFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLnBhcnNlQXNzaWdubWVudEV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgaWYgKCFleHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXgubWF0Y2hQdW5jdHVhdGlvbihcIixcIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHJzOiBJRXhwcmVzc2lvbltdID0gW2V4cHJdO1xyXG4gICAgICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLnBhcnNlQXNzaWdubWVudEV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4cHIpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBleHBycy5wdXNoKGV4cHIpO1xyXG4gICAgICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5sZXgubWF0Y2hQdW5jdHVhdGlvbihcIixcIikpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25TZXF1ZW5jZShleHBycywgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGFua3MgdG86IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzcwOTg2Ni93aGF0cy1hLXZhbGlkLWxlZnQtaGFuZC1zaWRlLWV4cHJlc3Npb24taW4tamF2YXNjcmlwdC1ncmFtbWFyXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaXNMZWZ0SGFuZEV4cHJlc3Npb25SZXNvbHZpbmdUb1JlZmVyZW5jZShleHByOiBJRXhwcmVzc2lvbik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZXhwci50eXBlID09PSBcIklkZW50aWZpZXJcIiB8fCBleHByLnR5cGUgPT09IFwiTWVtYmVyRXhwcmVzc2lvblwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQXNzaWdubWVudE9wZXJhdG9ycyA9IHtcclxuICAgICAgICAgICAgXCI9XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwifHxcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCIqPVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcIi89XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiJT1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCIrPVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcIi09XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiPDw9XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiPj49XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiPj4+PVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcIiY9XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiXj1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJ8PVwiOiB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VBc3NpZ25tZW50RXhwcmVzc2lvbigpOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhwciA9IHRoaXMucGFyc2VDb25kaXRpb25hbEV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgaWYgKCFleHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNQdW5jdHVhdGlvbih0b2tlbilcclxuICAgICAgICAgICAgICAgICYmIFBhcnNlci5Bc3NpZ25tZW50T3BlcmF0b3JzW3Rva2VuLnZhbHVlXVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGlmICghUGFyc2VyLmlzTGVmdEhhbmRFeHByZXNzaW9uUmVzb2x2aW5nVG9SZWZlcmVuY2UoZXhwcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlRXhjZXB0aW9uLmFkZEV4Y2VwdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgYEludmFsaWQgbGVmdC1oYW5kIHNpZGUgaW4gYXNzaWdubWVudGAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuLmxvYy5zdGFydC5saW5lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbi5sb2Muc3RhcnQuY29sdW1uXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJleHByID0gdGhpcy5wYXJzZUFzc2lnbm1lbnRFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJleHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbkFzc2lnbm1lbnQodG9rZW4udmFsdWUsIGV4cHIsIHJleHByLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUNvbmRpdGlvbmFsRXhwcmVzc2lvbigpOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhwciA9IHRoaXMucGFyc2VCaW5hcnlFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIGlmICghZXhwcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwiP1wiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29uc2VxdWVudEV4cHIgPSB0aGlzLnBhcnNlQXNzaWdubWVudEV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIGlmICghY29uc2VxdWVudEV4cHIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCI6XCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYWx0ZXJuYXRlRXhwciA9IHRoaXMucGFyc2VBc3NpZ25tZW50RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhbHRlcm5hdGVFeHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbkNvbmRpdGlvbmFsKGV4cHIsIGFsdGVybmF0ZUV4cHIsIGNvbnNlcXVlbnRFeHByLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEJpbmFyeVRva2VuVmFsdWVzX29yID0gMTtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBCaW5hcnlUb2tlblZhbHVlc19hbmQgPSAyO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEJpbmFyeVRva2VuVmFsdWVzX2lzbG9naWMgPSBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfYW5kO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEJpbmFyeVRva2VuVmFsdWVzX2JvciA9IDM7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQmluYXJ5VG9rZW5WYWx1ZXNfeG9yID0gNDtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBCaW5hcnlUb2tlblZhbHVlc19iYW5kID0gNTtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBCaW5hcnlUb2tlblZhbHVlc19lcSA9IDY7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQmluYXJ5VG9rZW5WYWx1ZXNfcmVsID0gNztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBCaW5hcnlUb2tlblZhbHVlc19zaGlmdCA9IDg7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQmluYXJ5VG9rZW5WYWx1ZXNfYWRkID0gOTtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBCaW5hcnlUb2tlblZhbHVlc19tdWx0aSA9IDEwO1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpc0xvZ2ljQmluYXJ5VG9rZW5WYWx1ZShyYW5rOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJhbmsgPD0gUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2lzbG9naWM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBCaW5hcnlUb2tlblZhbHVlcyA9IHtcclxuICAgICAgICAgICAgJ3x8JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX29yLFxyXG4gICAgICAgICAgICAnJiYnOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfYW5kLFxyXG4gICAgICAgICAgICAnfCc6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19ib3IsXHJcbiAgICAgICAgICAgICdeJzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX3hvcixcclxuICAgICAgICAgICAgJyYnOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfYmFuZCxcclxuICAgICAgICAgICAgJz09JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2VxLFxyXG4gICAgICAgICAgICAnIT0nOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfZXEsXHJcbiAgICAgICAgICAgICc9PT0nOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfZXEsXHJcbiAgICAgICAgICAgICchPT0nOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfZXEsXHJcbiAgICAgICAgICAgICc8JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX3JlbCxcclxuICAgICAgICAgICAgJz4nOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfcmVsLFxyXG4gICAgICAgICAgICAnPD0nOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfcmVsLFxyXG4gICAgICAgICAgICAnPj0nOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfcmVsLFxyXG4gICAgICAgICAgICAnaW5zdGFuY2VvZic6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19yZWwsXHJcbiAgICAgICAgICAgICdpbic6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19yZWwsXHJcbiAgICAgICAgICAgICc8PCc6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19zaGlmdCxcclxuICAgICAgICAgICAgJz4+JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX3NoaWZ0LFxyXG4gICAgICAgICAgICAnPj4+JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX3NoaWZ0LFxyXG4gICAgICAgICAgICAnKyc6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19hZGQsXHJcbiAgICAgICAgICAgICctJzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2FkZCxcclxuICAgICAgICAgICAgJyonOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfbXVsdGksXHJcbiAgICAgICAgICAgICcvJzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX211bHRpLFxyXG4gICAgICAgICAgICAnJSc6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19tdWx0aVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgZ2V0QmluYXJ5T3BlcmF0aW9uVG9rZW4ob3A6IHN0cmluZywgYWxsb3dJbjogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgICAgICAgICAgIGlmIChvcCA9PT0gJ2luJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbG93SW4gPyBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNbb3BdIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc1tvcF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgY3JlYXRlQmluYXJ5RXhwcmVzc2lvbihcclxuICAgICAgICAgICAgcmFuazogbnVtYmVyLFxyXG4gICAgICAgICAgICBvcGVyYXRvcjogc3RyaW5nLFxyXG4gICAgICAgICAgICBsZWZ0OiBJRXhwcmVzc2lvbixcclxuICAgICAgICAgICAgcmlnaHQ6IElFeHByZXNzaW9uXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvYyA9IHRoaXMub3B0aW9ucy5sb2MgP1xyXG4gICAgICAgICAgICAgICAgbGV4aWNhbC5Ub2tlblNvdXJjZUxvY2F0aW9uLmNyZWF0ZShsZWZ0LmxvYy5zdGFydCwgcmlnaHQubG9jLmVuZCkgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGlmIChQYXJzZXIuaXNMb2dpY0JpbmFyeVRva2VuVmFsdWUocmFuaykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25Mb2dpY2FsKG9wZXJhdG9yLCBsZWZ0LCByaWdodCwgbG9jKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25CaW5hcnkob3BlcmF0b3IsIGxlZnQsIHJpZ2h0LCBsb2MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBXZSBjb3VsZCB1c2UgdGhlIHNpbXBsZSBhcHJvYWNoIGJ5IHBhcnNpbmcgaW5kaXZpZHVhbGx5IFxyXG4gICAgICAgIC8vIGV2ZXJ5IGJpbmFyeSBleHByZXNzaW9uIG9mIEVjbWFzY3JpcHQgZGVmaW5pdGlvbixcclxuICAgICAgICAvLyBmb3IgaW5zdGFuc2UsIHBhcnNlTG9naWNhbE9SRXhwcmVzc2lvbiwgcGFyc2VMb2dpY2FsQU5ERXhwcmVzc2lvbiwgcGFyc2VFcXVhbGl0eUV4cHJlc3Npb24gZXRjLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gV2UgY2hvb3NlIHRvIHBhcnNlIGFsbCB0aGUgYmluYXJ5IGRlZmluaXRpb25zIHVzaW5nIHRoZSBtZXRob2RcclxuICAgICAgICAvLyBvZiBzaGlmdC1yZWR1Y2UgcGFyc2VyIGZvciB0aGUgbGVmdC1hc3NvY2lhdGl2ZSBiaW5hcnkgb3BlcmF0b3IgcGFydFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvT3BlcmF0b3ItcHJlY2VkZW5jZV9wYXJzZXJcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGJlY2F1c2UgaXQgaXMgbW9yZSBmdW4gKGFuZCBpbmNyZWFzZXMgdGhlIHBlcmZvcm1hbmNlIDopIClcclxuICAgICAgICBwdWJsaWMgaW5uZXJCYXJzZUJpbmFyeUV4cHJlc3Npb24oYWxsb3dJbjogYm9vbGVhbik6IElFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgbGV0IGxleHByID0gdGhpcy5wYXJzZVVuYXJ5RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICBpZiAoIWxleHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgbGV0IGJpbmFyeVJhbmsgPSBQYXJzZXIuZ2V0QmluYXJ5T3BlcmF0aW9uVG9rZW4odG9rZW4udmFsdWUsIGFsbG93SW4pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJpbmFyeVJhbmsgJiYgKHRoaXMubGV4LmlzUHVuY3R1YXRpb24odG9rZW4pIHx8IHRoaXMubGV4LmlzS2V5d29yZCh0b2tlbikpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJleHByID0gdGhpcy5wYXJzZVVuYXJ5RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXhwcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHJzOiBJRXhwcmVzc2lvbltdID0gW2xleHByLCByZXhwcl0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHVuY3M6IHN0cmluZ1tdID0gW3Rva2VuLnZhbHVlXSxcclxuICAgICAgICAgICAgICAgICAgICByYW5rczogbnVtYmVyW10gPSBbYmluYXJ5UmFua107XHJcblxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhdGVzdFJhbmsgPSBQYXJzZXIuZ2V0QmluYXJ5T3BlcmF0aW9uVG9rZW4odG9rZW4udmFsdWUsIGFsbG93SW4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWxhdGVzdFJhbmsgfHwgKCF0aGlzLmxleC5pc1B1bmN0dWF0aW9uKHRva2VuKSAmJiAhdGhpcy5sZXguaXNLZXl3b3JkKHRva2VuKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXhwciA9IHRoaXMucGFyc2VVbmFyeUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJleHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0UmFuayA9IF8ubGFzdChyYW5rcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGxhc3RSYW5rICYmIGxhc3RSYW5rID49IGxhdGVzdFJhbmspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV4cHIgPSBleHBycy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGV4cHIgPSBleHBycy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmluYXJ5RXhwciA9IHRoaXMuY3JlYXRlQmluYXJ5RXhwcmVzc2lvbihyYW5rcy5wb3AoKSwgcHVuY3MucG9wKCksIGxleHByLCByZXhwcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJzLnB1c2goYmluYXJ5RXhwcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0UmFuayA9IF8ubGFzdChyYW5rcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByYW5rcy5wdXNoKGxhdGVzdFJhbmspO1xyXG4gICAgICAgICAgICAgICAgICAgIHB1bmNzLnB1c2godG9rZW4udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cHJzLnB1c2gocmV4cHIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxleHByID0gZXhwcnMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocHVuY3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV4cHIgPSB0aGlzLmNyZWF0ZUJpbmFyeUV4cHJlc3Npb24ocmFua3MucG9wKCksIHB1bmNzLnBvcCgpLCBleHBycy5wb3AoKSwgbGV4cHIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbGV4cHI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VCaW5hcnlFeHByZXNzaW9uKCk6IElFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgY29uc3Qgb2xkSW5Gb3JJbiA9IHRoaXMuaW5Gb3JJbjtcclxuICAgICAgICAgICAgdGhpcy5pbkZvckluID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5pbm5lckJhcnNlQmluYXJ5RXhwcmVzc2lvbighb2xkSW5Gb3JJbik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmluRm9ySW4gPSBvbGRJbkZvckluO1xyXG4gICAgICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIFVuYXJ5VG9rZW5WYWx1ZXNfdW5hcnkgPSAxO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIFVuYXJ5VG9rZW5WYWx1ZXNfdXBkYXRlID0gMjtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgVW5hcnlUb2tlblZhbHVlcyA9IHtcclxuICAgICAgICAgICAgXCItXCI6IFBhcnNlci5VbmFyeVRva2VuVmFsdWVzX3VuYXJ5LFxyXG4gICAgICAgICAgICBcIitcIjogUGFyc2VyLlVuYXJ5VG9rZW5WYWx1ZXNfdW5hcnksXHJcbiAgICAgICAgICAgIFwiIVwiOiBQYXJzZXIuVW5hcnlUb2tlblZhbHVlc191bmFyeSxcclxuICAgICAgICAgICAgXCJ+XCI6IFBhcnNlci5VbmFyeVRva2VuVmFsdWVzX3VuYXJ5LFxyXG4gICAgICAgICAgICBcInR5cGVvZlwiOiBQYXJzZXIuVW5hcnlUb2tlblZhbHVlc191bmFyeSxcclxuICAgICAgICAgICAgXCJ2b2lkXCI6IFBhcnNlci5VbmFyeVRva2VuVmFsdWVzX3VuYXJ5LFxyXG4gICAgICAgICAgICBcImRlbGV0ZVwiOiBQYXJzZXIuVW5hcnlUb2tlblZhbHVlc191bmFyeSxcclxuICAgICAgICAgICAgXCIrK1wiOiBQYXJzZXIuVW5hcnlUb2tlblZhbHVlc191cGRhdGUsXHJcbiAgICAgICAgICAgIFwiLS1cIjogUGFyc2VyLlVuYXJ5VG9rZW5WYWx1ZXNfdXBkYXRlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VVbmFyeUV4cHJlc3Npb24oKTogSUV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBjb25zdCB1bmFyeVJhbmsgPSBQYXJzZXIuVW5hcnlUb2tlblZhbHVlc1t0b2tlbi52YWx1ZV07XHJcblxyXG4gICAgICAgICAgICBpZiAodW5hcnlSYW5rICYmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uKHRva2VuKSB8fCB0aGlzLmxleC5pc0tleXdvcmQodG9rZW4pKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXhwciA9IHRoaXMucGFyc2VVbmFyeUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIGlmICghZXhwcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh1bmFyeVJhbmsgPT09IFBhcnNlci5VbmFyeVRva2VuVmFsdWVzX3VwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25VcGRhdGUodG9rZW4udmFsdWUsIGV4cHIsIHRydWUsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4odG9rZW4pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uVW5hcnkodG9rZW4udmFsdWUsIHRydWUsIGV4cHIsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4odG9rZW4pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVBvc3RmaXhFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VQb3N0Zml4RXhwcmVzc2lvbigpOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhwciA9IHRoaXMucGFyc2VMZWZ0SGFuZFNpZGVFeHByZXNzaW9uKHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoIWV4cHIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uKHRva2VuKVxyXG4gICAgICAgICAgICAgICAgJiYgdG9rZW4ubG9jLmVuZC5saW5lID09PSB0aGlzLmxleC5sYXRlc3RUb2tlbigpLmxvYy5lbmQubGluZVxyXG4gICAgICAgICAgICAgICAgJiYgKHRva2VuLnZhbHVlID09PSBcIisrXCIgfHwgdG9rZW4udmFsdWUgPT09IFwiLS1cIilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25VcGRhdGUodG9rZW4udmFsdWUsIGV4cHIsIGZhbHNlLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBleHByO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwYXJzZUlkZW50aWZpZXIoKTogSUlkZW50aWZpZXIge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNJZGVudGlmaWVyKHRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlSWRlbnRpZmllcih0b2tlbi52YWx1ZSwgdGhpcy50cmFja1Bvc2l0aW9uVW5hcnkodG9rZW4pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFkZEV4Y2VwdGlvbih0b2tlbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VMZWZ0SGFuZFNpZGVFeHByZXNzaW9uKGFsbG93Q2FsbEV4cHJlc3Npb25zOiBib29sZWFuKTogSUV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICBsZXQgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCksXHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5RXhwcjtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc0tleXdvcmQoaW5pdGlhbFRva2VuKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoaW5pdGlhbFRva2VuLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZ1bmN0aW9uXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlFeHByID0gdGhpcy5wYXJzZUZ1bmN0aW9uKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJuZXdcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUV4cHIgPSB0aGlzLnBhcnNlTmV3RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcmltYXJ5RXhwciA9IHByaW1hcnlFeHByIHx8IHRoaXMucGFyc2VQcmltYXJ5RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICBpZiAoIXByaW1hcnlFeHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgZXhwcjogSU5vZGUsXHJcbiAgICAgICAgICAgICAgICBpc01hdGNoaW5nRXhyZXNzaW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgd2hpbGUgKGlzTWF0Y2hpbmdFeHJlc3Npb24pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubGV4LmlzUHVuY3R1YXRpb24odG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRva2VuLnZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJbXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFleHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCJdXCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5RXhwciA9IHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbk1lbWJlcihwcmltYXJ5RXhwciwgZXhwciwgdHJ1ZSwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIuXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gdGhpcy5wYXJzZUlkZW50aWZpZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpZGVudGlmaWVyKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5RXhwciA9IHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbk1lbWJlcihwcmltYXJ5RXhwciwgaWRlbnRpZmllciwgZmFsc2UsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiKFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWxsb3dDYWxsRXhwcmVzc2lvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB0aGlzLnBhcnNlQXJndW1lbnRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWFyZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5RXhwciA9IHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbkNhbGwocHJpbWFyeUV4cHIsIGFyZ3MsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc01hdGNoaW5nRXhyZXNzaW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHByaW1hcnlFeHByO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlUHJpbWFyeUV4cHJlc3Npb24oKTogSU5vZGUge1xyXG4gICAgICAgICAgICBsZXQgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAodG9rZW4udHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBsZXhpY2FsLlRva2VuVHlwZS5rZXl3b3JkOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi52YWx1ZSA9PT0gXCJ0aGlzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25UaGlzKHRoaXMudHJhY2tQb3NpdGlvblVuYXJ5KHRva2VuKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgbGV4aWNhbC5Ub2tlblR5cGUuaWRlbnRpZmllcjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVJZGVudGlmaWVyKHRva2VuLnZhbHVlLCB0aGlzLnRyYWNrUG9zaXRpb25VbmFyeSh0b2tlbikpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgbGV4aWNhbC5Ub2tlblR5cGUubGl0ZXJhbDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVMaXRlcmFsKHRva2VuLnZhbHVlLCB0aGlzLnRyYWNrUG9zaXRpb25VbmFyeSh0b2tlbikpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgbGV4aWNhbC5Ub2tlblR5cGUucHVuY3R1YXRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0b2tlbi52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiW1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VBcnJheUxpdGVyYWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ7XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZU9iamVjdExpdGVyYWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIoXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZXhwcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxleC5tYXRjaFB1bmN0dWF0aW9uKFwiKVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBleHByO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEV4Y2VwdGlvbih0aGlzLmxleC5uZXh0VG9rZW4oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvPVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiL1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4LnJlaW50ZXJwcmV0TGFzdFRva2VuQXNSZWdleCh0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZXguaXNFcnJvcih0b2tlbikpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVMaXRlcmFsKHRva2VuLnZhbHVlLCB0aGlzLnRyYWNrUG9zaXRpb25VbmFyeSh0b2tlbikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRXhjZXB0aW9uKHRva2VuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZU5ld0V4cHJlc3Npb24oKTogSUV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICBsZXQgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RLZXl3b3JkKFwibmV3XCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYWxsRXhwciA9IHRoaXMucGFyc2VMZWZ0SGFuZFNpZGVFeHByZXNzaW9uKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKCFjYWxsRXhwcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IGFyZ3MsXHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIihcIikpIHtcclxuICAgICAgICAgICAgICAgIGFyZ3MgPSB0aGlzLnBhcnNlQXJndW1lbnRzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFyZ3MpIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbk5ldyhjYWxsRXhwciwgYXJncyB8fCBbXSwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUFyZ3VtZW50cygpOiBJRXhwcmVzc2lvbltdIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwiKFwiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4cHJzOiBJRXhwcmVzc2lvbltdID0gW107XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwiKVwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhwcnM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUFzc2lnbm1lbnRFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWV4cHIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBleHBycy5wdXNoKGV4cHIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIilcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCIsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFeGNlcHRpb24odG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZXhwcnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VBcnJheUxpdGVyYWwoKTogSU5vZGUge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCJbXCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhcnJheUV4cHJzOiBJTm9kZVtdID0gW107XHJcbiAgICAgICAgICAgIHRoaXMudHJpbUFycmF5Q29tbWFzKGFycmF5RXhwcnMpO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKCF0aGlzLmxleC5tYXRjaFB1bmN0dWF0aW9uKFwiXVwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXNzaWduRXhwciA9IHRoaXMucGFyc2VBc3NpZ25tZW50RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhc3NpZ25FeHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgYXJyYXlFeHBycy5wdXNoKGFzc2lnbkV4cHIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGV4Lm1hdGNoUHVuY3R1YXRpb24oXCIsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmltQXJyYXlDb21tYXMoYXJyYXlFeHBycyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25BcnJheShhcnJheUV4cHJzLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKHRva2VuKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHRyaW1BcnJheUNvbW1hcyhhcnJheUV4cHJzOiBJTm9kZVtdKSB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmxleC5tYXRjaFB1bmN0dWF0aW9uKFwiLFwiKSkge1xyXG4gICAgICAgICAgICAgICAgYXJyYXlFeHBycy5wdXNoKG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VPYmplY3RMaXRlcmFsKCk6IElOb2RlIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwie1wiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvcGVydGllczogSVByb3BlcnR5W10gPSBbXTtcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwifVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5wYXJzZVByb3BlcnR5QXNzaWdubWVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwcm9wZXJ0eSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaChwcm9wZXJ0eSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwifVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCIsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFeGNlcHRpb24odG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uT2JqZWN0KHByb3BlcnRpZXMsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4odG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZVByb3BlcnR5QXNzaWdubWVudCgpOiBJUHJvcGVydHkge1xyXG4gICAgICAgICAgICBsZXQga2luZDogc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgbGV0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNJZGVudGlmaWVyVmFsdWUoaW5pdGlhbFRva2VuLCBcImdldFwiKSkge1xyXG4gICAgICAgICAgICAgICAga2luZCA9IFwiZ2V0XCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZXguaXNJZGVudGlmaWVyVmFsdWUoaW5pdGlhbFRva2VuLCBcInNldFwiKSkge1xyXG4gICAgICAgICAgICAgICAga2luZCA9IFwic2V0XCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBraW5kID0gXCJpbml0XCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHRoaXMucGFyc2VQcm9wZXJ0eU5hbWUoKTtcclxuICAgICAgICAgICAgaWYgKCFwcm9wZXJ0eU5hbWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIjpcIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLnBhcnNlQXNzaWdubWVudEV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIGlmICghZXhwcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZU9iamVjdFByb3BlcnR5KHByb3BlcnR5TmFtZSwgZXhwciwga2luZCwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwiKFwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFyZ3M6IElJZGVudGlmaWVyW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzSWRlbnRpZmllcih0b2tlbikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcmcgPSB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUlkZW50aWZpZXIodG9rZW4udmFsdWUsIHRoaXMudHJhY2tQb3NpdGlvblVuYXJ5KHRva2VuKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKGFyZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwiKVwiKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIilcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEV4Y2VwdGlvbih0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIntcIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmdW5jdGlvbkJvZHkgPSB0aGlzLnBhcnNlRnVuY3Rpb25Cb2R5KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCJ9XCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZnVuY3Rpb25FeHByID0gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uRnVuY3Rpb24obnVsbCwgYXJncywgZnVuY3Rpb25Cb2R5LCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKHRva2VuKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVPYmplY3RQcm9wZXJ0eShwcm9wZXJ0eU5hbWUsIGZ1bmN0aW9uRXhwciwga2luZCwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRXhjZXB0aW9uKHRva2VuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlUHJvcGVydHlOYW1lKCk6IElMaXRlcmFsIHwgSUlkZW50aWZpZXIge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNMaXRlcmFsKHRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLnN1YlR5cGUgPT09IGxleGljYWwuTGl0ZXJhbFN1YlR5cGUuc3RyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgdG9rZW4uc3ViVHlwZSA9PT0gbGV4aWNhbC5MaXRlcmFsU3ViVHlwZS5udW1iZXJcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUxpdGVyYWwodG9rZW4udmFsdWUsIHRoaXMudHJhY2tQb3NpdGlvblVuYXJ5KHRva2VuKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVJZGVudGlmaWVyKHRva2VuLnZhbHVlLCB0aGlzLnRyYWNrUG9zaXRpb25VbmFyeSh0b2tlbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMubGV4LmlzSWRlbnRpZmllcih0b2tlbikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUlkZW50aWZpZXIodG9rZW4udmFsdWUsIHRoaXMudHJhY2tQb3NpdGlvblVuYXJ5KHRva2VuKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV4Y2VwdGlvbih0b2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vL1BhcnNlIEV4cHJlc3Npb25zLy8vLy8vLy8vLy8gICAgICAgIFxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8gUGFyc2UgRnVuY3Rpb25cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlRnVuY3Rpb24oYXNEZWNsYXJhdGlvbjogYm9vbGVhbik6IElGdW5jdGlvbkRlY2xhcmF0aW9uIHwgSUZ1bmN0aW9uRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0S2V5d29yZChcImZ1bmN0aW9uXCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgbGV0IGlkZW50aWZpZXI6IElJZGVudGlmaWVyID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzSWRlbnRpZmllcih0b2tlbikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgaWRlbnRpZmllciA9IHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlSWRlbnRpZmllcih0b2tlbi52YWx1ZSwgdGhpcy50cmFja1Bvc2l0aW9uVW5hcnkodG9rZW4pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChhc0RlY2xhcmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV4Y2VwdGlvbih0b2tlbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIihcIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFyZ3M6IElJZGVudGlmaWVyW10gPSBbXTtcclxuICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgd2hpbGUgKCF0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwiKVwiKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmxleC5pc0lkZW50aWZpZXIodG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFeGNlcHRpb24odG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJnID0gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVJZGVudGlmaWVyKHRva2VuLnZhbHVlLCB0aGlzLnRyYWNrUG9zaXRpb25VbmFyeSh0b2tlbikpO1xyXG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKGFyZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXgubWF0Y2hQdW5jdHVhdGlvbihcIixcIik7XHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCIpXCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gdGhpcy5wYXJzZUZ1bmN0aW9uQm9keSgpO1xyXG4gICAgICAgICAgICBpZiAoIWJvZHkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmIChhc0RlY2xhcmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVEZWNsYXJhdGlvbkZ1bmN0aW9uKGlkZW50aWZpZXIsIGFyZ3MsIGJvZHksIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uRnVuY3Rpb24oaWRlbnRpZmllciwgYXJncywgYm9keSwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlRnVuY3Rpb25Cb2R5KCk6IElCbG9ja1N0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3U3dpdGNoU2NvcGUoKTtcclxuICAgICAgICAgICAgdGhpcy5uZXdJdGVyYXRpb25TY29wZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmJlZ2luRnVuY3Rpb24oKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0bXQgPSB0aGlzLnBhcnNlQmxvY2tTdGF0ZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZVN3aXRjaFNjb3BlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZUl0ZXJhdGlvblNjb3BlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoRnVuY3Rpb24oKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBzdG10O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vL1BhcnNlIEZ1bmN0aW9uLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3RzRGVmaW5pdGlvbnMvdHNkLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiRXhjZXB0aW9uLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImxleGljYWwvTGV4ZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwibGV4aWNhbC9DaGFyYWN0ZXJTdHJlYW0udHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwic3ludGF4L1BhcnNlci50c1wiIC8+XHJcblxyXG5tb2R1bGUgdHJsLmZyb250ZW5kLmFwaSB7XHJcblxyXG5cdGludGVyZmFjZSBJVG9rZW5pemVSZXN1bHQge1xyXG5cdFx0dG9rZW5zOiBsZXhpY2FsLklUb2tlbltdLFxyXG5cdFx0ZXhjZXB0aW9ucz86IElFeGNlcHRpb25bXVxyXG5cdH1cclxuICAgIFxyXG5cdGludGVyZmFjZSBJUGFyc2VyUmVzdWx0IHtcclxuXHRcdHByb2dyYW06IGFueSxcclxuXHRcdGV4Y2VwdGlvbnM/OiBJRXhjZXB0aW9uW11cclxuXHR9ICAgIFxyXG5cclxuXHRleHBvcnQgZnVuY3Rpb24gdG9rZW5pemUoc3JjOiBzdHJpbmcsIG9wdGlvbnM/OiBsZXhpY2FsLklMZXhlck9wdGlvbnMpOiBJVG9rZW5pemVSZXN1bHQge1xyXG5cdFx0Y29uc3QgY2hhclN0cmVhbSA9IG5ldyBsZXhpY2FsLkNoYXJhY3RlclN0cmVhbShzcmMpLFxyXG5cdFx0XHRleGNlcHRpb25IYW5kbGVyID0gbmV3IEV4Y2VwdGlvbkhhbmRsZXIoKSxcclxuXHRcdFx0bGV4ZXIgPSBuZXcgbGV4aWNhbC5MZXhlcihjaGFyU3RyZWFtLCBleGNlcHRpb25IYW5kbGVyLCBvcHRpb25zKTtcclxuXHJcblx0XHRjb25zdCB0b2tlbnM6IGxleGljYWwuSVRva2VuW10gPSBbXTtcclxuXHRcdHdoaWxlIChsZXhlci5oYXNOZXh0KCkpIHtcclxuXHRcdFx0Y29uc3QgdG9rZW4gPSBsZXhlci5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCB0b2tlbml6ZVJlc3VsdDogSVRva2VuaXplUmVzdWx0ID0ge1xyXG5cdFx0XHR0b2tlbnM6IHRva2Vuc1xyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAoZXhjZXB0aW9uSGFuZGxlci5oYXNFeGNlcHRpb25zKCkpIHtcclxuXHRcdFx0dG9rZW5pemVSZXN1bHQuZXhjZXB0aW9ucyA9IGV4Y2VwdGlvbkhhbmRsZXIuZ2V0RXhjZXB0aW9ucygpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRva2VuaXplUmVzdWx0O1xyXG5cdH1cclxuICAgIFxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKHNyYzogc3RyaW5nLCBvcHRpb25zPzogc3ludGF4LklQYXJzZXJPcHRpb25zKTogSVBhcnNlclJlc3VsdCB7XHJcbiAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IHN5bnRheC5QYXJzZXIoc3JjLCBvcHRpb25zKTtcclxuICAgICAgICBjb25zdCBwYXJzZU5vZGVzID0gcGFyc2VyLnBhcnNlKCk7XHJcbiAgICAgICAgXHJcblx0XHRjb25zdCBwYXJzZVJlc3VsdDogSVBhcnNlclJlc3VsdCA9IHtcclxuXHRcdFx0cHJvZ3JhbTogcGFyc2VOb2Rlc1xyXG5cdFx0fTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGV4Y2VwdGlvbkhhbmRsZXIgPSBwYXJzZXIuZ2V0RXhjZXB0aW9ucygpO1xyXG4gICAgICAgIFxyXG5cdFx0aWYgKGV4Y2VwdGlvbkhhbmRsZXIuaGFzRXhjZXB0aW9ucygpKSB7XHJcblx0XHRcdHBhcnNlUmVzdWx0LmV4Y2VwdGlvbnMgPSBleGNlcHRpb25IYW5kbGVyLmdldEV4Y2VwdGlvbnMoKTtcclxuXHRcdH0gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBwYXJzZVJlc3VsdDtcclxuICAgIH1cclxuXHJcbn0gIiwibW9kdWxlIHRybC5iYWNrZW5kIHtcclxuICAgICAgICAgICAgICBcclxuICAgIGV4cG9ydCBlbnVtIEpTQ29tcGxldGlvblR5cGUge1xyXG4gICAgICAgIG5vcm1hbCxcclxuICAgICAgICBicmVhayxcclxuICAgICAgICBjb250aW51ZSxcclxuICAgICAgICByZXR1cm4sXHJcbiAgICAgICAgdGhyb3dcclxuICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgIGV4cG9ydCBjbGFzcyBKU0NvbXBsZXRpb24gaW1wbGVtZW50cyBKU1NwZWNpZmljYXRpb25UeXBlIHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHB1YmxpYyB0eXBlOiBKU0NvbXBsZXRpb25UeXBlID0gSlNDb21wbGV0aW9uVHlwZS5ub3JtYWwsXHJcbiAgICAgICAgICAgIHB1YmxpYyB2YWw/OiBJSlNWYWx1ZSxcclxuICAgICAgICAgICAgcHVibGljIHRhcmdldD86IEpTU3RyaW5nXHJcbiAgICAgICAgKXt9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGdldFR5cGUoKTogSlNTcGVjaWZpY2F0aW9uVHlwZXMge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNTcGVjaWZpY2F0aW9uVHlwZXMuY29tcGxldGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxufSIsIm1vZHVsZSB0cmwuYmFja2VuZCB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICBleHBvcnQgY2xhc3MgSlNFbnZpcm9tZW50UmVjb3JkIGltcGxlbWVudHMgSlNTcGVjaWZpY2F0aW9uVHlwZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGdldEJpbmRpbmdWYWx1ZShuYW1lOiBKU1N0cmluZywgc3RyaWN0OiBib29sZWFuKTogSUpTVmFsdWUge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhyb3dOb3RJbXBsZW1lbnRlZFlldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgc2V0TXV0YWJsZUJpbmRpbmcobmFtZTogSlNTdHJpbmcsIHZhbDogSUpTVmFsdWUsIHN0cmljdDogYm9vbGVhbikge1xyXG4gICAgICAgICAgICB0aHJvd05vdEltcGxlbWVudGVkWWV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBnZXRUeXBlKCk6IEpTU3BlY2lmaWNhdGlvblR5cGVzIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTU3BlY2lmaWNhdGlvblR5cGVzLmVudmlyb25tZW50UmVjb3JkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG59IiwibW9kdWxlIHRybC5iYWNrZW5kIHtcclxuICAgICAgICAgICAgICBcclxuICAgIGV4cG9ydCBjbGFzcyBKU0xpc3QgaW1wbGVtZW50cyBKU1NwZWNpZmljYXRpb25UeXBlIHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHB1YmxpYyBsaXN0OiBJSlNWYWx1ZVtdID0gW11cclxuICAgICAgICApe31cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgZ2V0VHlwZSgpOiBKU1NwZWNpZmljYXRpb25UeXBlcyB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU1NwZWNpZmljYXRpb25UeXBlcy5saXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG59IiwibW9kdWxlIHRybC5iYWNrZW5kIHtcclxuXHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEpTUHJvcGVydHlEZXNjcmlwdG9yIGltcGxlbWVudHMgSlNTcGVjaWZpY2F0aW9uVHlwZSB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgLy9kYXRhIHByb3BlcnR5IGRlc2NyaXB0b3JzXHJcbiAgICAgICAgICAgIHB1YmxpYyBqc3ZhbHVlPzogSUpTVmFsdWUsXHJcbiAgICAgICAgICAgIHB1YmxpYyBqc3dyaXRhYmxlPzogSlNCb29sZWFuLFxyXG4gICAgICAgXHJcbiAgICAgICAgICAgIC8vYWNjZXNzb3IgcHJvcGVydHkgZGVzY3JpcHRvclxyXG4gICAgICAgICAgICBwdWJsaWMganNnZXQ/OiBKU0NhbGxhYmxlT2JqZWN0IHwgSlNVbmRlZmluZWQsXHJcbiAgICAgICAgICAgIHB1YmxpYyBqc3NldD86IEpTQ2FsbGFibGVPYmplY3QgfCBKU1VuZGVmaW5lZCxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vYW55IHByb3BlcnR5IGRlc2NyaXB0b3JcclxuICAgICAgICAgICAgcHVibGljIGpzZW51bWVyYWJsZT86IEpTQm9vbGVhbixcclxuICAgICAgICAgICAgcHVibGljIGpzY29uZmlndXJhYmxlPzogSlNCb29sZWFuXHJcbiAgICAgICAgKSB7IH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBjcmVhdGVEYXRhUHJvcGVydHlEZXNjcmlwdG9yKFxyXG4gICAgICAgICAgICBqc3ZhbHVlOiBJSlNWYWx1ZSA9IEpTQXBpLmNyZWF0ZVVuZGVmaW5lZCgpLFxyXG4gICAgICAgICAgICBqc3dyaXRhYmxlOiBKU0Jvb2xlYW4gPSBKU0FwaS5jcmVhdGVCb29sZWFuKGZhbHNlKSxcclxuICAgICAgICAgICAganNlbnVtZXJhYmxlOiBKU0Jvb2xlYW4gPSBKU0FwaS5jcmVhdGVCb29sZWFuKGZhbHNlKSxcclxuICAgICAgICAgICAganNjb25maWd1cmFibGU6IEpTQm9vbGVhbiA9IEpTQXBpLmNyZWF0ZUJvb2xlYW4oZmFsc2UpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgSlNQcm9wZXJ0eURlc2NyaXB0b3IoanN2YWx1ZSwganN3cml0YWJsZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGpzZW51bWVyYWJsZSwganNjb25maWd1cmFibGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBjcmVhdGVBY2Nlc3NvclByb3BlcnR5RGVzY3JpcHRvcihcclxuICAgICAgICAgICAganNnZXQ6IEpTT2JqZWN0IHwgSlNVbmRlZmluZWQgPSBKU0FwaS5jcmVhdGVVbmRlZmluZWQoKSxcclxuICAgICAgICAgICAganNzZXQ6IEpTT2JqZWN0IHwgSlNVbmRlZmluZWQgPSBKU0FwaS5jcmVhdGVVbmRlZmluZWQoKSxcclxuICAgICAgICAgICAganNlbnVtZXJhYmxlOiBKU0Jvb2xlYW4gPSBKU0FwaS5jcmVhdGVCb29sZWFuKGZhbHNlKSxcclxuICAgICAgICAgICAganNjb25maWd1cmFibGU6IEpTQm9vbGVhbiA9IEpTQXBpLmNyZWF0ZUJvb2xlYW4oZmFsc2UpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgSlNQcm9wZXJ0eURlc2NyaXB0b3IodW5kZWZpbmVkLCB1bmRlZmluZWQsIGpzZ2V0LCBqc3NldCwganNlbnVtZXJhYmxlLCBqc2NvbmZpZ3VyYWJsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaXNBY2Nlc3NvckRlc2NyaXB0b3IoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmpzZ2V0ICE9PSB1bmRlZmluZWQgfHwgdGhpcy5qc2dldCAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGlzRGF0YURlc2NyaXB0b3IoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmpzdmFsdWUgIT09IHVuZGVmaW5lZCB8fCB0aGlzLmpzd3JpdGFibGUgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpc0dlbmVyaWNEZXNjcmlwdG9yKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuaXNBY2Nlc3NvckRlc2NyaXB0b3IoKSAmJiAhdGhpcy5pc0RhdGFEZXNjcmlwdG9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZnJvbVByb3BlcnR5RGVzY3JpcHRvcigpOiBKU09iamVjdCB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IEpTQXBpLmNyZWF0ZU9iamVjdCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0RhdGFEZXNjcmlwdG9yKCkpIHtcclxuICAgICAgICAgICAgICAgIG9iai5vYmpEZWZpbmVPd25Qcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgICAgICBKU0FwaS5jcmVhdGVTdHJpbmcoXCJ2YWx1ZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICBKU1Byb3BlcnR5RGVzY3JpcHRvci5jcmVhdGVEYXRhUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMuanN2YWx1ZSwgSlNBcGkuY3JlYXRlQm9vbGVhbih0cnVlKSwgSlNBcGkuY3JlYXRlQm9vbGVhbih0cnVlKSwgSlNBcGkuY3JlYXRlQm9vbGVhbih0cnVlKSksXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBvYmoub2JqRGVmaW5lT3duUHJvcGVydHkoXHJcbiAgICAgICAgICAgICAgICAgICAgSlNBcGkuY3JlYXRlU3RyaW5nKFwid3JpdGFibGVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgSlNQcm9wZXJ0eURlc2NyaXB0b3IuY3JlYXRlRGF0YVByb3BlcnR5RGVzY3JpcHRvcih0aGlzLmpzdmFsdWUsIEpTQXBpLmNyZWF0ZUJvb2xlYW4odHJ1ZSksIEpTQXBpLmNyZWF0ZUJvb2xlYW4odHJ1ZSksIEpTQXBpLmNyZWF0ZUJvb2xlYW4odHJ1ZSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNBY2Nlc3NvckRlc2NyaXB0b3IoKSkge1xyXG4gICAgICAgICAgICAgICAgb2JqLm9iakRlZmluZU93blByb3BlcnR5KFxyXG4gICAgICAgICAgICAgICAgICAgIEpTQXBpLmNyZWF0ZVN0cmluZyhcImdldFwiKSxcclxuICAgICAgICAgICAgICAgICAgICBKU1Byb3BlcnR5RGVzY3JpcHRvci5jcmVhdGVEYXRhUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMuanNnZXQsIEpTQXBpLmNyZWF0ZUJvb2xlYW4odHJ1ZSksIEpTQXBpLmNyZWF0ZUJvb2xlYW4odHJ1ZSksIEpTQXBpLmNyZWF0ZUJvb2xlYW4odHJ1ZSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgb2JqLm9iakRlZmluZU93blByb3BlcnR5KFxyXG4gICAgICAgICAgICAgICAgICAgIEpTQXBpLmNyZWF0ZVN0cmluZyhcInNldFwiKSxcclxuICAgICAgICAgICAgICAgICAgICBKU1Byb3BlcnR5RGVzY3JpcHRvci5jcmVhdGVEYXRhUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMuanNzZXQsIEpTQXBpLmNyZWF0ZUJvb2xlYW4odHJ1ZSksIEpTQXBpLmNyZWF0ZUJvb2xlYW4odHJ1ZSksIEpTQXBpLmNyZWF0ZUJvb2xlYW4odHJ1ZSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICApOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYmoub2JqRGVmaW5lT3duUHJvcGVydHkoXHJcbiAgICAgICAgICAgICAgICBKU0FwaS5jcmVhdGVTdHJpbmcoXCJlbnVtZXJhYmxlXCIpLFxyXG4gICAgICAgICAgICAgICAgSlNQcm9wZXJ0eURlc2NyaXB0b3IuY3JlYXRlRGF0YVByb3BlcnR5RGVzY3JpcHRvcih0aGlzLmpzZW51bWVyYWJsZSwgSlNBcGkuY3JlYXRlQm9vbGVhbih0cnVlKSwgSlNBcGkuY3JlYXRlQm9vbGVhbih0cnVlKSwgSlNBcGkuY3JlYXRlQm9vbGVhbih0cnVlKSksXHJcbiAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApOyAgXHJcbiAgICAgICAgICAgIG9iai5vYmpEZWZpbmVPd25Qcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgIEpTQXBpLmNyZWF0ZVN0cmluZyhcImNvbmZpZ3VyYWJsZVwiKSxcclxuICAgICAgICAgICAgICAgIEpTUHJvcGVydHlEZXNjcmlwdG9yLmNyZWF0ZURhdGFQcm9wZXJ0eURlc2NyaXB0b3IodGhpcy5qc2NvbmZpZ3VyYWJsZSwgSlNBcGkuY3JlYXRlQm9vbGVhbih0cnVlKSwgSlNBcGkuY3JlYXRlQm9vbGVhbih0cnVlKSwgSlNBcGkuY3JlYXRlQm9vbGVhbih0cnVlKSksXHJcbiAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApOyAgIFxyXG4gICAgICAgICAgICByZXR1cm4gb2JqOyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdG9Qcm9wZXJ0eURlc2NyaXB0b3IodmFsOiBJSlNWYWx1ZSk6IEpTUHJvcGVydHlEZXNjcmlwdG9yIHtcclxuICAgICAgICAgICAgaWYoIUpTQXBpLmlzT2JqZWN0KHZhbCkpIHtcclxuICAgICAgICAgICAgICAgIEpTQXBpLnRocm93VHlwZUVycm9yRXhjZXB0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgb2JqID0gdmFsIGFzIEpTT2JqZWN0O1xyXG4gICAgICAgICAgICBjb25zdCBkZXNjID0gbmV3IEpTUHJvcGVydHlEZXNjcmlwdG9yKCk7XHJcbiAgICAgICAgICAgIGlmKG9iai5vYmpIYXNQcm9wZXJ0eShKU0FwaS5jcmVhdGVTdHJpbmcoXCJlbnVtZXJhYmxlXCIpKSkge1xyXG4gICAgICAgICAgICAgICAgZGVzYy5qc2VudW1lcmFibGUgPSBKU0FwaS50b0Jvb2xlYW4ob2JqLm9iakdldChKU0FwaS5jcmVhdGVTdHJpbmcoXCJlbnVtZXJhYmxlXCIpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYob2JqLm9iakhhc1Byb3BlcnR5KEpTQXBpLmNyZWF0ZVN0cmluZyhcImNvbmZpZ3VyYWJsZVwiKSkpIHtcclxuICAgICAgICAgICAgICAgIGRlc2MuanNjb25maWd1cmFibGUgPSBKU0FwaS50b0Jvb2xlYW4ob2JqLm9iakdldChKU0FwaS5jcmVhdGVTdHJpbmcoXCJjb25maWd1cmFibGVcIikpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihvYmoub2JqSGFzUHJvcGVydHkoSlNBcGkuY3JlYXRlU3RyaW5nKFwidmFsdWVcIikpKSB7XHJcbiAgICAgICAgICAgICAgICBkZXNjLmpzdmFsdWUgPSBvYmoub2JqR2V0KEpTQXBpLmNyZWF0ZVN0cmluZyhcInZhbHVlXCIpKTtcclxuICAgICAgICAgICAgfSAgICAgIFxyXG4gICAgICAgICAgICBpZihvYmoub2JqSGFzUHJvcGVydHkoSlNBcGkuY3JlYXRlU3RyaW5nKFwid3JpdGFibGVcIikpKSB7XHJcbiAgICAgICAgICAgICAgICBkZXNjLmpzd3JpdGFibGUgPSBKU0FwaS50b0Jvb2xlYW4ob2JqLm9iakdldChKU0FwaS5jcmVhdGVTdHJpbmcoXCJ3cml0YWJsZVwiKSkpO1xyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICBpZihvYmoub2JqSGFzUHJvcGVydHkoSlNBcGkuY3JlYXRlU3RyaW5nKFwiZ2V0XCIpKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QganNnZXQgPSBvYmoub2JqR2V0KEpTQXBpLmNyZWF0ZVN0cmluZyhcImdldFwiKSk7XHJcbiAgICAgICAgICAgICAgICBpZighSlNBcGkuaXNDYWxsYWJsZShqc2dldCkgJiYgIUpTQXBpLmlzVW5kZWZpbmVkKGpzZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEpTQXBpLnRocm93VHlwZUVycm9yRXhjZXB0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVzYy5qc2dldCA9IGpzZ2V0O1xyXG4gICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgaWYob2JqLm9iakhhc1Byb3BlcnR5KEpTQXBpLmNyZWF0ZVN0cmluZyhcInNldFwiKSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGpzc2V0ID0gb2JqLm9iakdldChKU0FwaS5jcmVhdGVTdHJpbmcoXCJzZXRcIikpO1xyXG4gICAgICAgICAgICAgICAgaWYoIUpTQXBpLmlzQ2FsbGFibGUoanNzZXQpICYmICFKU0FwaS5pc1VuZGVmaW5lZChqc3NldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBKU0FwaS50aHJvd1R5cGVFcnJvckV4Y2VwdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRlc2MuanNzZXQgPSBqc3NldDtcclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICBpZigoZGVzYy5qc2dldCB8fCBkZXNjLmpzc2V0KSAmJiAoZGVzYy5qc3ZhbHVlIHx8IGRlc2MuanN3cml0YWJsZSkpIHtcclxuICAgICAgICAgICAgICAgIEpTQXBpLnRocm93VHlwZUVycm9yRXhjZXB0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZGVzYzsgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0VHlwZSgpOiBKU1NwZWNpZmljYXRpb25UeXBlcyB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU1NwZWNpZmljYXRpb25UeXBlcy5wcm9wZXJ0eURlc2NyaXB0b3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBleHBvcnQgZW51bSBKU05hbWVkUHJvcGVydHlUeXBlIHtcclxuICAgIC8vICAgICBkYXRhLFxyXG4gICAgLy8gICAgIGFjY2Vzc29yXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaW50ZXJmYWNlIEpTTmFtZWRQcm9wZXJ0eSB7XHJcbiAgICAvLyAgICAgZ2V0VHlwZSgpOiBKU05hbWVkUHJvcGVydHlUeXBlO1xyXG4gICAgLy8gICAgIGdldFZhbHVlKCk6IElKU1ZhbHVlO1xyXG4gICAgLy8gICAgIHB1dFZhbHVlKHZhbDogSUpTVmFsdWUpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGV4cG9ydCBjbGFzcyBKU05hbWVkRGF0YVByb3BlcnR5IGltcGxlbWVudHMgSlNOYW1lZFByb3BlcnR5IHtcclxuXHJcbiAgICAvLyAgICAgY29uc3RydWN0b3IoXHJcbiAgICAvLyAgICAgICAgIHB1YmxpYyB2YWx1ZTogSUpTVmFsdWUgPSBKU0FwaS5jcmVhdGVVbmRlZmluZWQoKSxcclxuICAgIC8vICAgICAgICAgcHVibGljIHdyaXRhYmxlOiBKU0Jvb2xlYW4gPSBKU0FwaS5jcmVhdGVCb29sZWFuKGZhbHNlKSxcclxuICAgIC8vICAgICAgICAgcHVibGljIGVudW1tZXJhYmxlOiBKU0Jvb2xlYW4gPSBKU0FwaS5jcmVhdGVCb29sZWFuKGZhbHNlKSxcclxuICAgIC8vICAgICAgICAgcHVibGljIGNvbmZpZ3VyYWJsZTogSlNCb29sZWFuID0gSlNBcGkuY3JlYXRlQm9vbGVhbihmYWxzZSlcclxuICAgIC8vICAgICApIHsgfVxyXG5cclxuICAgIC8vICAgICBnZXRUeXBlKCk6IEpTTmFtZWRQcm9wZXJ0eVR5cGUge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gSlNOYW1lZFByb3BlcnR5VHlwZS5kYXRhO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgcHVibGljIGdldFZhbHVlKCk6IElKU1ZhbHVlIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBwdWJsaWMgcHV0VmFsdWUodmFsOiBJSlNWYWx1ZSkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnZhbHVlID0gdmFsO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBleHBvcnQgY2xhc3MgSlNOYW1lZEFjY2Vzc29yUHJvcGVydHkgaW1wbGVtZW50cyBKU05hbWVkUHJvcGVydHkge1xyXG5cclxuICAgIC8vICAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8vICAgICAgICAgcHVibGljIGdldDogSlNPYmplY3QgfCBKU1VuZGVmaW5lZCA9IEpTQXBpLmNyZWF0ZVVuZGVmaW5lZCgpLFxyXG4gICAgLy8gICAgICAgICBwdWJsaWMgc2V0OiBKU09iamVjdCB8IEpTVW5kZWZpbmVkID0gSlNBcGkuY3JlYXRlVW5kZWZpbmVkKCksXHJcbiAgICAvLyAgICAgICAgIHB1YmxpYyBlbnVtbWVyYWJsZTogSlNCb29sZWFuID0gSlNBcGkuY3JlYXRlQm9vbGVhbihmYWxzZSksXHJcbiAgICAvLyAgICAgICAgIHB1YmxpYyBjb25maWd1cmFibGU6IEpTQm9vbGVhbiA9IEpTQXBpLmNyZWF0ZUJvb2xlYW4oZmFsc2UpXHJcbiAgICAvLyAgICAgKSB7IH1cclxuXHJcbiAgICAvLyAgICAgZ2V0VHlwZSgpOiBKU05hbWVkUHJvcGVydHlUeXBlIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIEpTTmFtZWRQcm9wZXJ0eVR5cGUuYWNjZXNzb3I7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBwdWJsaWMgZ2V0VmFsdWUoKTogSUpTVmFsdWUge1xyXG4gICAgLy8gICAgICAgICBpZiAoSlNBcGkuaXNVbmRlZmluZWQodGhpcy5nZXQpKSB7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQ7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgcmV0dXJuIEpTQXBpLmNhbGxPYmplY3RGdW5jdGlvbih0aGlzLmdldCBhcyBKU09iamVjdCk7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBwdWJsaWMgcHV0VmFsdWUodmFsOiBJSlNWYWx1ZSkge1xyXG4gICAgLy8gICAgICAgICBpZiAoSlNBcGkuaXNPYmplY3QodGhpcy5nZXQpKSB7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gSlNBcGkuY2FsbE9iamVjdEZ1bmN0aW9uKHRoaXMuZ2V0IGFzIEpTT2JqZWN0LCBbdmFsXSk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9ICAgIFxyXG5cclxufSIsIm1vZHVsZSB0cmwuYmFja2VuZCB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICBleHBvcnQgY2xhc3MgSlNQcm9wZXJ0eUlkZW50aWZpZXIgaW1wbGVtZW50cyBKU1NwZWNpZmljYXRpb25UeXBlIHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHB1YmxpYyBuYW1lOiBKU1N0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIGRlc2NyaXB0b3I6IEpTUHJvcGVydHlEZXNjcmlwdG9yXHJcbiAgICAgICAgKXt9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGdldFR5cGUoKTogSlNTcGVjaWZpY2F0aW9uVHlwZXMge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNTcGVjaWZpY2F0aW9uVHlwZXMucHJvcGVydHlJZGVudGlmaWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG59IiwibW9kdWxlIHRybC5iYWNrZW5kIHtcclxuICAgICAgICAgICAgICBcclxuICAgIGV4cG9ydCB0eXBlIEpTQmFzZVZhbHVlVHlwZSA9IEpTVW5kZWZpbmVkIHwgSlNPYmplY3QgfCBKU0Jvb2xlYW4gfCBKU1N0cmluZyB8IEpTTnVtYmVyIHwgSlNFbnZpcm9tZW50UmVjb3JkXHJcbiAgICAgICAgICAgICAgXHJcbiAgICBleHBvcnQgY2xhc3MgSlNSZWZlcmVuY2UgaW1wbGVtZW50cyBKU1NwZWNpZmljYXRpb25UeXBlIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGJhc2VWYWx1ZTogSlNCYXNlVmFsdWVUeXBlO1xyXG4gICAgICAgIHByaXZhdGUgcmVmZXJlbmNlZE5hbWU6IEpTU3RyaW5nO1xyXG4gICAgICAgIHByaXZhdGUgc3RyaWN0OiBib29sZWFuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBnZXRCYXNlKCk6IEpTQmFzZVZhbHVlVHlwZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJhc2VWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGdldFJlZmVyZW5jZWROYW1lKCk6IEpTU3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlZE5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBpc1N0cmljdFJlZmVyZW5jZSgpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyaWN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgaGFzUHJpbWl0aXZlQmFzZSgpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVZhbHVlLmdldFR5cGUoKSA9PT0gSlNWYWx1ZXMuYm9vbGVhblxyXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5iYXNlVmFsdWUuZ2V0VHlwZSgpID09PSBKU1ZhbHVlcy5zdHJpbmdcclxuICAgICAgICAgICAgICAgIHx8IHRoaXMuYmFzZVZhbHVlLmdldFR5cGUoKSA9PT0gSlNWYWx1ZXMubnVtYmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgaXNQcm9wZXJ0eVJlZmVyZW5jZSgpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFzUHJpbWl0aXZlQmFzZSgpIFxyXG4gICAgICAgICAgICB8fCB0aGlzLmJhc2VWYWx1ZS5nZXRUeXBlKCkgPT09IEpTVmFsdWVzLm9iamVjdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGlzVW5yZXNvbHZhYmxlUmVmZXJlbmNlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iYXNlVmFsdWUuZ2V0VHlwZSgpID09PSBKU1ZhbHVlcy51bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBnZXRUeXBlKCk6IEpTU3BlY2lmaWNhdGlvblR5cGVzIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTU3BlY2lmaWNhdGlvblR5cGVzLnJlZmVyZW5jZTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH0gICAgXHJcbn0iLCJtb2R1bGUgdHJsLmJhY2tlbmQge1xyXG5cclxuICAgIGV4cG9ydCBlbnVtIEpTU3BlY2lmaWNhdGlvblR5cGVzIHtcclxuICAgICAgICByZWZlcmVuY2UsXHJcbiAgICAgICAgbGlzdCxcclxuICAgICAgICBjb21wbGV0aW9uLFxyXG4gICAgICAgIHByb3BlcnR5RGVzY3JpcHRvcixcclxuICAgICAgICBwcm9wZXJ0eUlkZW50aWZpZXIsXHJcbiAgICAgICAgbGV4aWNhbEVudmlyb25tZW50LFxyXG4gICAgICAgIGVudmlyb25tZW50UmVjb3JkXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBKU1NwZWNpZmljYXRpb25UeXBlIHtcclxuICAgICAgICBnZXRUeXBlKCk6IEpTU3BlY2lmaWNhdGlvblR5cGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBKU0dldFZhbHVlKHNwZWM6IEpTU3BlY2lmaWNhdGlvblR5cGUpOiBJSlNWYWx1ZSB8IEpTU3BlY2lmaWNhdGlvblR5cGUge1xyXG4gICAgICAgIGlmIChzcGVjLmdldFR5cGUoKSAhPT0gSlNTcGVjaWZpY2F0aW9uVHlwZXMucmVmZXJlbmNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzcGVjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZWYgPSBzcGVjIGFzIEpTUmVmZXJlbmNlO1xyXG4gICAgICAgIGxldCBiYXNlID0gcmVmLmdldEJhc2UoKTtcclxuICAgICAgICBpZiAocmVmLmlzVW5yZXNvbHZhYmxlUmVmZXJlbmNlKCkpIHtcclxuICAgICAgICAgICAgSlNBcGkudGhyb3dSZWZlcmVuY2VFcnJvckV4Y2VwdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWYuaXNQcm9wZXJ0eVJlZmVyZW5jZSgpKSB7XHJcbiAgICAgICAgICAgIGlmIChyZWYuaGFzUHJpbWl0aXZlQmFzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSBKU0FwaS50b09iamVjdChiYXNlIGFzIElKU1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2MgPSBvYmoub2JqR2V0UHJvcGVydHkocmVmLmdldFJlZmVyZW5jZWROYW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlc2MgaW5zdGFuY2VvZiBKU1VuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZXNjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcERlc2NyID0gZGVzYyBhcyBKU1Byb3BlcnR5RGVzY3JpcHRvcjtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wRGVzY3IuaXNEYXRhRGVzY3JpcHRvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3BEZXNjci5qc3ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKEpTQXBpLmlzVW5kZWZpbmVkKHByb3BEZXNjci5qc2dldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcERlc2NyLmpzZ2V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChwcm9wRGVzY3IuanNnZXQgYXMgSlNDYWxsYWJsZU9iamVjdCkub2JqQ2FsbChiYXNlIGFzIElKU1ZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoYmFzZSBhcyBKU09iamVjdCkub2JqR2V0KHJlZi5nZXRSZWZlcmVuY2VkTmFtZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChiYXNlIGFzIEpTRW52aXJvbWVudFJlY29yZCkuZ2V0QmluZGluZ1ZhbHVlKHJlZi5nZXRSZWZlcmVuY2VkTmFtZSgpLCByZWYuaXNTdHJpY3RSZWZlcmVuY2UoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBKU1B1dFZhbHVlKGdsb2JhbDogSlNHbG9iYWxPYmplY3QsIHNwZWM6IEpTU3BlY2lmaWNhdGlvblR5cGUsIHZhbDogSUpTVmFsdWUpIHtcclxuICAgICAgICBpZiAoc3BlYy5nZXRUeXBlKCkgIT09IEpTU3BlY2lmaWNhdGlvblR5cGVzLnJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3BlYztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVmID0gc3BlYyBhcyBKU1JlZmVyZW5jZTtcclxuICAgICAgICBsZXQgYmFzZSA9IHJlZi5nZXRCYXNlKCk7XHJcbiAgICAgICAgaWYgKHJlZi5pc1VucmVzb2x2YWJsZVJlZmVyZW5jZSgpKSB7XHJcbiAgICAgICAgICAgIGlmIChyZWYuaXNTdHJpY3RSZWZlcmVuY2UoKSkge1xyXG4gICAgICAgICAgICAgICAgSlNBcGkudGhyb3dSZWZlcmVuY2VFcnJvckV4Y2VwdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdsb2JhbC5vYmpQdXQocmVmLmdldFJlZmVyZW5jZWROYW1lKCksIHZhbCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyZWYuaXNQcm9wZXJ0eVJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICBpZihyZWYuaGFzUHJpbWl0aXZlQmFzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSBKU0FwaS50b09iamVjdChiYXNlIGFzIElKU1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmKCFvYmoub2JqQ2FuUHV0KHJlZi5nZXRSZWZlcmVuY2VkTmFtZSgpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlZi5pc1N0cmljdFJlZmVyZW5jZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpTQXBpLnRocm93UmVmZXJlbmNlRXJyb3JFeGNlcHRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3duUHJvcCA9IG9iai5vYmpHZXRPd25Qcm9wZXJ0eShyZWYuZ2V0UmVmZXJlbmNlZE5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICBpZihvd25Qcm9wIGluc3RhbmNlb2YgSlNQcm9wZXJ0eURlc2NyaXB0b3IgJiYgKG93blByb3AgYXMgSlNQcm9wZXJ0eURlc2NyaXB0b3IpLmlzRGF0YURlc2NyaXB0b3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlZi5pc1N0cmljdFJlZmVyZW5jZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpTQXBpLnRocm93UmVmZXJlbmNlRXJyb3JFeGNlcHRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IG9iai5vYmpHZXRQcm9wZXJ0eShyZWYuZ2V0UmVmZXJlbmNlZE5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICBpZihwcm9wIGluc3RhbmNlb2YgSlNQcm9wZXJ0eURlc2NyaXB0b3IgJiYgKHByb3AgYXMgSlNQcm9wZXJ0eURlc2NyaXB0b3IpLmlzQWNjZXNzb3JEZXNjcmlwdG9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAoKHByb3AgYXMgSlNQcm9wZXJ0eURlc2NyaXB0b3IpLmpzc2V0IGFzIEpTQ2FsbGFibGVPYmplY3QpLm9iakNhbGwoKGJhc2UgYXMgSUpTVmFsdWUpLCBbcmVmLmdldFJlZmVyZW5jZWROYW1lKCldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEVsc2UsIHRoaXMgaXMgYSByZXF1ZXN0IHRvIGNyZWF0ZSBhbiBvd24gcHJvcGVydHkgb24gdGhlIHRyYW5zaWVudCBvYmplY3QgT1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIFRocm93IGlzIHRydWUsIHRoZW4gdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93Tm90SW1wbGVtZW50ZWRZZXQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIChiYXNlIGFzIEpTT2JqZWN0KS5vYmpQdXQocmVmLmdldFJlZmVyZW5jZWROYW1lKCksIHZhbCwgcmVmLmlzU3RyaWN0UmVmZXJlbmNlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAoYmFzZSBhcyBKU0Vudmlyb21lbnRSZWNvcmQpLnNldE11dGFibGVCaW5kaW5nKHJlZi5nZXRSZWZlcmVuY2VkTmFtZSgpLCB2YWwsIHJlZi5pc1N0cmljdFJlZmVyZW5jZSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiXHJcbm1vZHVsZSB0cmwuYmFja2VuZCB7XHJcbiAgICBcclxuICAgIGV4cG9ydCBjbGFzcyBKU0Jvb2xlYW4gaW1wbGVtZW50cyBJSlNWYWx1ZSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbHVlOiBib29sZWFuKSB7fVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBnZXRUeXBlKCk6IEpTVmFsdWVzIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTVmFsdWVzLmJvb2xlYW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZSgpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn0iLCJcclxubW9kdWxlIHRybC5iYWNrZW5kIHtcclxuICAgIFxyXG4gICAgZXhwb3J0IGNsYXNzIEpTTnVtYmVyIGltcGxlbWVudHMgSUpTVmFsdWUge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmFsdWU6IG51bWJlcikge31cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgZ2V0VHlwZSgpOiBKU1ZhbHVlcyB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU1ZhbHVlcy5udW1iZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZSgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG59IiwiXHJcbm1vZHVsZSB0cmwuYmFja2VuZCB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEpTT2JqZWN0IGltcGxlbWVudHMgSUpTVmFsdWUge1xyXG5cclxuICAgICAgICBwdWJsaWMgb2JqUHJvcHM6IF8uRGljdGlvbmFyeTxKU1Byb3BlcnR5RGVzY3JpcHRvcj47XHJcblxyXG4gICAgICAgIHB1YmxpYyBvYmpQcm90b3R5cGU6IEpTT2JqZWN0IHwgSlNOdWxsO1xyXG4gICAgICAgIHB1YmxpYyBvYmpDbGFzczogSlNTdHJpbmc7XHJcbiAgICAgICAgcHVibGljIG9iakV4dGVuc2libGU6IEpTQm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqUHJvcHMgPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvYmpHZXQocHJvcE5hbWU6IEpTU3RyaW5nKTogSUpTVmFsdWUge1xyXG4gICAgICAgICAgICBjb25zdCBkZXNjID0gdGhpcy5vYmpHZXRQcm9wZXJ0eShwcm9wTmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChkZXNjIGluc3RhbmNlb2YgSlNVbmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkZXNjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHByb3BEZXNjID0gZGVzYyBhcyBKU1Byb3BlcnR5RGVzY3JpcHRvcjtcclxuICAgICAgICAgICAgaWYgKHByb3BEZXNjLmlzRGF0YURlc2NyaXB0b3IoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BEZXNjLmpzdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXRpbGl0aWVzLmFzc2VydChwcm9wRGVzYy5pc0FjY2Vzc29yRGVzY3JpcHRvcigpKTtcclxuICAgICAgICAgICAgaWYgKHByb3BEZXNjLmpzZ2V0IGluc3RhbmNlb2YgSlNVbmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wRGVzYy5qc2dldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKHByb3BEZXNjLmpzZ2V0IGFzIEpTQ2FsbGFibGVPYmplY3QpLm9iakNhbGwodGhpcykgYXMgSUpTVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb2JqR2V0T3duUHJvcGVydHkocHJvcE5hbWU6IEpTU3RyaW5nKTogSlNQcm9wZXJ0eURlc2NyaXB0b3IgfCBKU1VuZGVmaW5lZCB7XHJcbiAgICAgICAgICAgIGlmICghXy5oYXModGhpcy5vYmpQcm9wcywgcHJvcE5hbWUuZ2V0VmFsdWUoKSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBKU0FwaS5jcmVhdGVVbmRlZmluZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkZXNjID0gbmV3IEpTUHJvcGVydHlEZXNjcmlwdG9yKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHhkZXNjID0gdGhpcy5vYmpQcm9wc1twcm9wTmFtZS5nZXRWYWx1ZSgpXTtcclxuICAgICAgICAgICAgaWYgKHhkZXNjLmlzRGF0YURlc2NyaXB0b3IoKSkge1xyXG4gICAgICAgICAgICAgICAgZGVzYy5qc3ZhbHVlID0geGRlc2MuanN2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGRlc2MuanN3cml0YWJsZSA9IHhkZXNjLmpzd3JpdGFibGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGlsaXRpZXMuYXNzZXJ0KHhkZXNjLmlzQWNjZXNzb3JEZXNjcmlwdG9yKCkpO1xyXG4gICAgICAgICAgICAgICAgZGVzYy5qc2dldCA9IHhkZXNjLmpzZ2V0O1xyXG4gICAgICAgICAgICAgICAgZGVzYy5qc3NldCA9IHhkZXNjLmpzc2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlc2MuanNlbnVtZXJhYmxlID0geGRlc2MuanNlbnVtZXJhYmxlO1xyXG4gICAgICAgICAgICBkZXNjLmpzY29uZmlndXJhYmxlID0geGRlc2MuanNjb25maWd1cmFibGU7XHJcbiAgICAgICAgICAgIHJldHVybiBkZXNjO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG9iakdldFByb3BlcnR5KHByb3BOYW1lOiBKU1N0cmluZyk6IEpTUHJvcGVydHlEZXNjcmlwdG9yIHwgSlNVbmRlZmluZWQge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9wID0gdGhpcy5vYmpHZXRPd25Qcm9wZXJ0eShwcm9wTmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChwcm9wIGluc3RhbmNlb2YgSlNQcm9wZXJ0eURlc2NyaXB0b3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChKU0FwaS5pc051bGwodGhpcy5vYmpQcm90b3R5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNBcGkuY3JlYXRlVW5kZWZpbmVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLm9ialByb3RvdHlwZSBhcyBKU09iamVjdCkub2JqR2V0UHJvcGVydHkocHJvcE5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG9ialB1dChwcm9wTmFtZTogSlNTdHJpbmcsIHZhbDogSUpTVmFsdWUsIGZsYWc6IGJvb2xlYW4pIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb2JqQ2FuUHV0KHByb3BOYW1lOiBKU1N0cmluZyk6IEpTQm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2MgPSB0aGlzLm9iakdldE93blByb3BlcnR5KHByb3BOYW1lKTtcclxuICAgICAgICAgICAgaWYgKGRlc2MgaW5zdGFuY2VvZiBKU1Byb3BlcnR5RGVzY3JpcHRvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlc2MuaXNBY2Nlc3NvckRlc2NyaXB0b3IoKVxyXG4gICAgICAgICAgICAgICAgICAgID8gSlNBcGkuY3JlYXRlQm9vbGVhbighKGRlc2MuanNzZXQgaW5zdGFuY2VvZiBKU1VuZGVmaW5lZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBkZXNjLmpzd3JpdGFibGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKEpTQXBpLmlzTnVsbCh0aGlzLm9ialByb3RvdHlwZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9iakV4dGVuc2libGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgaW5oZXJpdGVkID0gKHRoaXMub2JqUHJvdG90eXBlIGFzIEpTT2JqZWN0KS5vYmpHZXRQcm9wZXJ0eShwcm9wTmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChpbmhlcml0ZWQgaW5zdGFuY2VvZiBKU1VuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JqRXh0ZW5zaWJsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBpbmhlcml0ZWREZXNjID0gaW5oZXJpdGVkIGFzIEpTUHJvcGVydHlEZXNjcmlwdG9yO1xyXG4gICAgICAgICAgICBpZiAoaW5oZXJpdGVkRGVzYy5pc0FjY2Vzc29yRGVzY3JpcHRvcigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNBcGkuY3JlYXRlQm9vbGVhbighKGluaGVyaXRlZERlc2MuanNzZXQgaW5zdGFuY2VvZiBKU1VuZGVmaW5lZCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXRpbGl0aWVzLmFzc2VydChpbmhlcml0ZWREZXNjLmlzRGF0YURlc2NyaXB0b3IoKSk7XHJcbiAgICAgICAgICAgIGlmIChKU0FwaS5pc0Jvb2xlYW5XaXRoVmFsdWUodGhpcy5vYmpFeHRlbnNpYmxlLCBmYWxzZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBKU0FwaS5jcmVhdGVCb29sZWFuKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaW5oZXJpdGVkRGVzYy5qc3dyaXRhYmxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG9iakhhc1Byb3BlcnR5KHByb3BOYW1lOiBKU1N0cmluZyk6IEpTQm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvYmpEZWxldGUoaGludDogSlNTdHJpbmcpOiBKU0Jvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb2JqRGVmYXVsdFZhbHVlKHByb3BOYW1lOiBKU1N0cmluZywgZmxhZzogYm9vbGVhbik6IEpTUHJpbWl0aXZlIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG9iakRlZmluZU93blByb3BlcnR5KHByb3BOYW1lOiBKU1N0cmluZywgcHJvcDogSlNQcm9wZXJ0eURlc2NyaXB0b3IsIGZsYWc6IGJvb2xlYW4pIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0VHlwZSgpOiBKU1ZhbHVlcyB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU1ZhbHVlcy5vYmplY3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSlNHbG9iYWxPYmplY3QgZXh0ZW5kcyBKU09iamVjdCB7XHJcblxyXG4gICAgfVxyXG5cclxufSIsIlxyXG5tb2R1bGUgdHJsLmJhY2tlbmQge1xyXG4gICAgXHJcbiAgICBleHBvcnQgY2xhc3MgSlNTdHJpbmcgaW1wbGVtZW50cyBJSlNWYWx1ZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWx1ZTogc3RyaW5nKSB7fVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBnZXRUeXBlKCk6IEpTVmFsdWVzIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTVmFsdWVzLnN0cmluZztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGdldFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn0iLCJtb2R1bGUgdHJsLmJhY2tlbmQge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBKU0NhbGxhYmxlT2JqZWN0IGV4dGVuZHMgSlNPYmplY3Qge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBvYmpDYWxsKHNlbGY6IElKU1ZhbHVlLCBhcmdzPzogSUpTVmFsdWVbXSk6IElKU1ZhbHVlIHwgSlNSZWZlcmVuY2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIm5vdCBpbXBsZW1lbnRlZCB5ZXRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
