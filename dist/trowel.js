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
                var utilities;
                (function (utilities) {
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
                    utilities.ExceptionHandler = ExceptionHandler;
                }(utilities = frontend.utilities || (frontend.utilities = {})));
            }(frontend = trl.frontend || (trl.frontend = {})));
        }(trl || (trl = {})));
        /// <reference path="../../../tsDefinitions/tsd.d.ts" />
        var trl;
        (function (trl) {
            var frontend;
            (function (frontend) {
                var utilities;
                (function (utilities) {
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
                    utilities.CharPoints = CharPoints;
                }(utilities = frontend.utilities || (frontend.utilities = {})));
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
        /// <reference path="../utilities/CharPoints.ts" />
        /// <reference path="TokenDefinitions.ts" />
        var trl;
        (function (trl) {
            var frontend;
            (function (frontend) {
                var lexical;
                (function (lexical) {
                    var hexDigits = {};
                    _.each('0123456789ABCDEFabcdef', function (numChar) {
                        hexDigits[frontend.utilities.CharPoints.codePointAt(numChar, 0)] = true;
                    });
                    var digits = {};
                    _.each('0123456789', function (numChar) {
                        digits[frontend.utilities.CharPoints.codePointAt(numChar, 0)] = true;
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
                            return c > lexical.TokenDefinitions.UNICODE_UNCOMMON_THRESHOLD && lexical.TokenDefinitions.UNICODE_CONTINUE_UNCOMMON.test(frontend.utilities.CharPoints.fromCodePoint(c));
                        };
                        Identifyers.isSimpleUnicodeStart = function (c) {
                            return lexical.TokenDefinitions.UNICODE_START_COMMON[c];
                        };
                        Identifyers.isComplexUnicodeStart = function (c) {
                            return c > lexical.TokenDefinitions.UNICODE_UNCOMMON_THRESHOLD && lexical.TokenDefinitions.UNICODE_START_UNCOMMON.test(frontend.utilities.CharPoints.fromCodePoint(c));
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
        /// <reference path="../utilities/IException.d.ts" />
        /// <reference path="../utilities/CharPoints.ts" />
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
                                return lookup[frontend.utilities.CharPoints.codePointAt(numChar, 0)] = Lexer.prototype.stateNumber;
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
                            frontend.utilities.assert(this.isPunctuationValue(token, '/') || this.isPunctuationValue(token, '/='));
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
                            var charGen = frontend.utilities.CharPoints.createStringFromCharPointGenerator(), char = this.charStream.getNextChar();
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
                                var charGen = frontend.utilities.CharPoints.createStringFromCharPointGenerator();
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
                            var charGen = frontend.utilities.CharPoints.createStringFromCharPointGenerator();
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
                                    var digit = frontend.utilities.CharPoints.getDigitFromCharPoint(char);
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
        /// <reference path="../utilities/CharPoints.ts" />
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
                                return frontend.utilities.CharPoints.codePointAt(this.src, this.cursor++);
                            }
                        };
                        CharacterStream.prototype.getChar = function () {
                            return frontend.utilities.CharPoints.codePointAt(this.src, this.cursor);
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
            var frontend;
            (function (frontend) {
                var utilities;
                (function (utilities) {
                    function assert(cond, msg) {
                        if (!cond) {
                            throw new Error('Assertion fail: ' + msg);
                        }
                    }
                    utilities.assert = assert;
                }(utilities = frontend.utilities || (frontend.utilities = {})));
            }(frontend = trl.frontend || (trl.frontend = {})));
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
        /// <reference path="../utilities/Assertion.ts" />
        /// <reference path="../utilities/Exception.ts" />
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
                            this.parseException = new frontend.utilities.ExceptionHandler();
                            this.charStream = new frontend.lexical.CharacterStream(chars);
                            this.lexException = new frontend.utilities.ExceptionHandler();
                            this.lex = new frontend.lexical.Lexer(this.charStream, this.lexException, Parser.lexerOptions);
                            this.inForIn = false;
                            this.inLoopMutex = [0];
                            this.inSwitchMutex = [0];
                            this.inFunctionMutex = 0;
                        }
                        ///////////////////////////////////////////
                        // Context Utilities
                        // private isKeyword(token: lexical.IToken): boolean {
                        //     const isValid = this.lex.isKeyword(token);
                        //     if (isValid) {
                        //         return token.value === "in" ? this.inForIn : true;
                        //     }
                        //     return false;
                        // }
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
                            frontend.utilities.assert(currIterationMutex === 0);
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
                            frontend.utilities.assert(currSwitchMutex === 0);
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
                            this.finishFunction();
                            this.restoreSwitchScope();
                            this.restoreIterationScope();
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
        /// <reference path="utilities/Exception.ts" />
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
                        var charStream = new frontend.lexical.CharacterStream(src), exceptionHandler = new frontend.utilities.ExceptionHandler(), lexer = new frontend.lexical.Lexer(charStream, exceptionHandler, options);
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
    }
    return trl;
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL2xleGljYWwvSUxleGVyLnRzIiwiZnJvbnRlbmQvdXRpbGl0aWVzL0V4Y2VwdGlvbi50cyIsImZyb250ZW5kL3V0aWxpdGllcy9DaGFyUG9pbnRzLnRzIiwiZnJvbnRlbmQvbGV4aWNhbC9Ub2tlbkRlZmluaXRpb25zLnRzIiwiZnJvbnRlbmQvbGV4aWNhbC9JZGVudGlmeWVycy50cyIsImZyb250ZW5kL2xleGljYWwvTGV4ZXIudHMiLCJzcmMvdHJvd2VsLmpzIiwiZnJvbnRlbmQvbGV4aWNhbC9DaGFyYWN0ZXJTdHJlYW0udHMiLCJmcm9udGVuZC91dGlsaXRpZXMvQXNzZXJ0aW9uLnRzIiwiZnJvbnRlbmQvc3ludGF4L05vZGVGYWN0b3J5LnRzIiwiZnJvbnRlbmQvc3ludGF4L1BhcnNlci50cyIsImZyb250ZW5kL2FwaS50cyJdLCJuYW1lcyI6WyJ0cmwiLCJ0cmwuZnJvbnRlbmQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbCIsInRybC5mcm9udGVuZC5sZXhpY2FsLlRva2VuVHlwZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxpdGVyYWxTdWJUeXBlIiwidHJsLmZyb250ZW5kLnV0aWxpdGllcyIsInRybC5mcm9udGVuZC51dGlsaXRpZXMuRXhjZXB0aW9uSGFuZGxlciIsInRybC5mcm9udGVuZC51dGlsaXRpZXMuRXhjZXB0aW9uSGFuZGxlci5jb25zdHJ1Y3RvciIsInRybC5mcm9udGVuZC51dGlsaXRpZXMuRXhjZXB0aW9uSGFuZGxlci5hZGRFeGNlcHRpb24iLCJ0cmwuZnJvbnRlbmQudXRpbGl0aWVzLkV4Y2VwdGlvbkhhbmRsZXIuaGFzRXhjZXB0aW9ucyIsInRybC5mcm9udGVuZC51dGlsaXRpZXMuRXhjZXB0aW9uSGFuZGxlci5jbGVhciIsInRybC5mcm9udGVuZC51dGlsaXRpZXMuRXhjZXB0aW9uSGFuZGxlci5nZXRFeGNlcHRpb25zIiwidHJsLmZyb250ZW5kLnV0aWxpdGllcy5DaGFyUG9pbnRzIiwidHJsLmZyb250ZW5kLnV0aWxpdGllcy5DaGFyUG9pbnRzLmNyZWF0ZVN0cmluZ0Zyb21DaGFyUG9pbnRHZW5lcmF0b3IiLCJ0cmwuZnJvbnRlbmQudXRpbGl0aWVzLkNoYXJQb2ludHMuZ2V0RGlnaXRGcm9tQ2hhclBvaW50IiwidHJsLmZyb250ZW5kLnV0aWxpdGllcy5DaGFyUG9pbnRzLmNvZGVQb2ludEF0IiwidHJsLmZyb250ZW5kLnV0aWxpdGllcy5DaGFyUG9pbnRzLmZyb21Db2RlUG9pbnQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5Ub2tlbkRlZmluaXRpb25zIiwidHJsLmZyb250ZW5kLmxleGljYWwuSWRlbnRpZnllcnMiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5JZGVudGlmeWVycy5pc0hleERpZ2l0IiwidHJsLmZyb250ZW5kLmxleGljYWwuSWRlbnRpZnllcnMuaXNEaWdpdCIsInRybC5mcm9udGVuZC5sZXhpY2FsLklkZW50aWZ5ZXJzLmlzS2V5d29yZCIsInRybC5mcm9udGVuZC5sZXhpY2FsLklkZW50aWZ5ZXJzLmlzTGluZVRlcm1pbmF0b3IiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5JZGVudGlmeWVycy5pc0lkZW50aWZpZXJTdGFydCIsInRybC5mcm9udGVuZC5sZXhpY2FsLklkZW50aWZ5ZXJzLmlzSWRlbnRpZmllclBhcnQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5JZGVudGlmeWVycy5pc1NpbXBsZVVuaWNvZGVDb250aW51ZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLklkZW50aWZ5ZXJzLmlzQ29tcGxleFVuaWNvZGVDb250aW51ZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLklkZW50aWZ5ZXJzLmlzU2ltcGxlVW5pY29kZVN0YXJ0IiwidHJsLmZyb250ZW5kLmxleGljYWwuSWRlbnRpZnllcnMuaXNDb21wbGV4VW5pY29kZVN0YXJ0IiwidHJsLmZyb250ZW5kLmxleGljYWwuSWRlbnRpZnllcnMuaXNQdW5jdHVhdGlvblN0YXJ0IiwidG9SZWFkYWJsZVRva2VuVHlwZUxvb2t1cCIsImxleGljYWwiLCJUb2tlblR5cGUiLCJrZXl3b3JkIiwiUmVhZGFibGVUb2tlblR5cGUiLCJpZGVudGlmaWVyIiwibGl0ZXJhbCIsInB1bmN0dWF0aW9uIiwiY29tbWVudCIsImVvZiIsImVycm9yIiwidG9rZW5UeXBlIiwidG9SZWFkYWJsZUxpdGVyYWxTdWJUeXBlTG9va3VwIiwiTGl0ZXJhbFN1YlR5cGUiLCJzdHJpbmciLCJSZWFkYWJsZUxpdGVyYWxTdWJUeXBlIiwibnVtYmVyIiwibnVsbCIsImJvb2xlYW4iLCJyZWdleCIsImxpdGVyYWxTdWJUeXBlIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5jb25zdHJ1Y3RvciIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmluaXRpYXRlQ2hhcmVjdGVyTG9va3VwT25jZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmlzRXJyb3IiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5pc0VvZiIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmlzQ29tbWVudCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmlzTGl0ZXJhbCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmlzUHVuY3R1YXRpb24iLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5pc0tleXdvcmQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5pc0lkZW50aWZpZXIiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5pc1B1bmN0dWF0aW9uVmFsdWUiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5pc0tleXdvcmRWYWx1ZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmlzSWRlbnRpZmllclZhbHVlIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIubWF0Y2hUeXBlIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIubWF0Y2hQdW5jdHVhdGlvbiIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLm1hdGNoS2V5d29yZCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnJlaW50ZXJwcmV0TGFzdFRva2VuQXNSZWdleCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLm5leHRUb2tlbiIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnN0YXJ0U3RhdGVFbmdpbmUiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci50cmFuc2xhdGVSZWFkYWJsZVRva2VucyIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmJlZ2luRnJvbVN0YXRlSW5pdCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmJlZ2luRnJvbVN0YXRlUmVnZXgiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5jbGVhbnVwQ29udGV4dCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmxhdGVzdFRva2VuIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIubG9va0FoZWFkTmV4dFRva2VuIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuaGFzTmV4dCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmdldENvbW1lbnRzIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuZ2V0Q3VycmVudEN1cnNvclBvcyIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnN0YXRlRXJyb3IiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zdGF0ZUluaXQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zdGF0ZUlkZW50aWZpZXIiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5nZW5TdGF0ZVN0cmluZyIsImNoYXJTdHJlYW0iLCJnZXROZXh0Q2hhciIsImNoYXJHZW4iLCJmcm9udGVuZCIsInV0aWxpdGllcyIsIkNoYXJQb2ludHMiLCJjcmVhdGVTdHJpbmdGcm9tQ2hhclBvaW50R2VuZXJhdG9yIiwiY2hhciIsInN0cmluZ1Rlcm1pbmF0b3JDaGFyIiwiUE5DIiwiYmFja3NsYXNoIiwiYiIsImFkZENoYXJQb2ludCIsImYiLCJuIiwiciIsInQiLCJ2IiwieCIsImhhbmRsZVNjYW5naXRzIiwiU3RhdGVzIiwidSIsImhhbmRsZVNjYW5IZXhEaWdpdHMiLCJJZGVudGlmeWVycyIsImlzTGluZVRlcm1pbmF0b3IiLCJoYW5kbGVOZXdMaW5lIiwidW5kZWZpbmVkIiwidW5leHBlY3RlZENoYXIiLCJ0b2tlbiIsImNyZWF0ZVRva2VuIiwiZ2V0U3RyaW5nIiwiZmluaXNoIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc3RhdGVOdW1iZXIiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zdGF0ZURvdE9yTnVtYmVyIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc3RhdGVEaXZPckNvbW1lbnQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zdGF0ZVB1bmN0dWF0aW9uU2luZ2xlIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc3RhdGVXaGl0ZVNwYWNlIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc3RhdGVMaW5lVGVybWluYXRvciIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnN0YXRlU2luZ2xlQ29tbWVudCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnN0YXRlTXVsdGlDb21tZW50IiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc2NhblVuaWNvZGVFc2NhcGVTZXF1ZW5jZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnN0YXRlUmVnZXgiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zY2FuRXhwb25lbnNpYWxBbmRDcmVhdGVOdW1iZXIiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zY2FuRGlnaXRzIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc2NhbkRlY2ltYWwiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zY2FuRXhwb25lbnRpYWwiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zY2FuSGV4RGlnaXRzVGltZXMiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zY2FuSGV4RGlnaXRzIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuZ2VuUHVuY3R1YXRpb25TY2FubmVyIiwiZndkQ3Vyc29yIiwiaSIsImxhc3RMZW4iLCJwdW5jc0xvb2t1cCIsImJ3ZEN1cnNvciIsImNyZWF0ZVRva2VuRnJvbVBvcyIsInN0YXJ0UG9zIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuY3JlYXRlVG9rZW5Tb3VyY2VMb2NhdGlvbkZyb21DdXJzb3IiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5jcmVhdGVUb2tlbkZyb21Qb3MiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5jcmVhdGVUb2tlbiIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmdlbkludGVnZXJGcm9tQXJyYXkiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5jcmVhdGVOdW1iZXIiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5oYW5kbGVTY2FuSGV4RGlnaXRzIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuaGFuZGxlTmV3TGluZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnVuZXhwZWN0ZWRDaGFyIiwidHJsLmZyb250ZW5kLmxleGljYWwuVG9rZW5Tb3VyY2VMb2NhdGlvbiIsInRybC5mcm9udGVuZC5sZXhpY2FsLlRva2VuU291cmNlTG9jYXRpb24uY3JlYXRlIiwidHJsLmZyb250ZW5kLmxleGljYWwuQ2hhcmFjdGVyU3RyZWFtIiwidHJsLmZyb250ZW5kLmxleGljYWwuQ2hhcmFjdGVyU3RyZWFtLmNvbnN0cnVjdG9yIiwidHJsLmZyb250ZW5kLmxleGljYWwuQ2hhcmFjdGVyU3RyZWFtLmdldE5leHRDaGFyIiwidHJsLmZyb250ZW5kLmxleGljYWwuQ2hhcmFjdGVyU3RyZWFtLmdldENoYXIiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0uZ2V0Q3Vyc29yIiwidHJsLmZyb250ZW5kLmxleGljYWwuQ2hhcmFjdGVyU3RyZWFtLmJ3ZEN1cnNvciIsInRybC5mcm9udGVuZC5sZXhpY2FsLkNoYXJhY3RlclN0cmVhbS5md2RDdXJzb3IiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0uYndkQ3Vyc29yUmFuZ2UiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0udG9rZW5pemUiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0ubWF0Y2giLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0ubWF0Y2hDb21wbGV4IiwidHJsLmZyb250ZW5kLmxleGljYWwuQ2hhcmFjdGVyU3RyZWFtLmlzRW9mIiwidHJsLmZyb250ZW5kLmxleGljYWwuQ2hhcmFjdGVyU3RyZWFtLmhhc05leHQiLCJ0cmwuZnJvbnRlbmQudXRpbGl0aWVzLmFzc2VydCIsInRybC5mcm9udGVuZC5zeW50YXgiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5IiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jb25zdHJ1Y3RvciIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlTm9kZSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlUHJvZ3JhbSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50RW1wdHkiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudEJsb2NrIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRFeHByZXNzaW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRJZiIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50QnJlYWsiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudENvbnRpbnVlIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRXaXRoIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRTd2l0Y2giLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudFJldHVybiIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50TGFiZWxlZCIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50VGhyb3ciLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudFRyeSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50V2hpbGUiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudERvV2hpbGUiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudEZvciIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50Rm9ySW4iLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudERlYnVnZ2VyIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVEZWNsYXJhdGlvbkZ1bmN0aW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVEZWNsYXJhdGlvblZhcmlhYmxlIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVWYXJpYWJsZURlY2xhcmF0b3IiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25UaGlzIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uQXJyYXkiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25PYmplY3QiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZU9iamVjdFByb3BlcnR5IiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uRnVuY3Rpb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25TZXF1ZW5jZSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvblVuYXJ5IiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uQmluYXJ5IiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uQXNzaWdubWVudCIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvblVwZGF0ZSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbkxvZ2ljYWwiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25Db25kaXRpb25hbCIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbk5ldyIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbkNhbGwiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25NZW1iZXIiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN3aXRjaENhc2UiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUNhdGNoQ2xhdXNlIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVJZGVudGlmaWVyIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVMaXRlcmFsIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5jb25zdHJ1Y3RvciIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmJlZ2luSXRlcmF0aW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuZmluaXNoSXRlcmF0aW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIubmV3SXRlcmF0aW9uU2NvcGUiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5yZXN0b3JlSXRlcmF0aW9uU2NvcGUiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5pc09uSXRlcmF0aW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuYmVnaW5Td2l0Y2giLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5maW5pc2hTd2l0Y2giLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5uZXdTd2l0Y2hTY29wZSIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnJlc3RvcmVTd2l0Y2hTY29wZSIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmlzT25Td2l0Y2giLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5iZWdpbkZ1bmN0aW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuZmluaXNoRnVuY3Rpb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5pc09uRnVuY3Rpb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5nZXRFeGNlcHRpb25zIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuYWRkRXhjZXB0aW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuZGVsZWdhdGVMZXhpY2FsRXJyb3JzIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuY2FuVG9sZXJhdGVFcnJvciIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlU3RhdGVtZW50SWZDYW5Ub2xlcmF0ZSIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnRyaW1PcHRpb25hbFNlbWljb2xvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnRyYWNrUG9zaXRpb25VbmFyeSIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnRyYWNrUG9zaXRpb25CeVBvcyIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnRyYWNrUG9zaXRpb25CeVRva2VuIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuZXhwZWN0VHlwZSIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmV4cGVjdFB1bmN0dWF0aW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuZXhwZWN0S2V5d29yZCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnRva2VuSXNJblNhbWVMaW5lIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2UiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVNvdXJjZUVsZW1lbnRzIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUJsb2NrU3RhdGVtZW50IiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VFbXB0eVN0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlSWZTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUl0ZXJhdGlvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmlubmVyUGFyc2VXaGlsZVN0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlV2hpbGVTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5pbm5lclBhcnNlRG9XaGlsZVN0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlRG9XaGlsZVN0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmlubmVyUGFyc2VGb3JTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5pc0ludmFsaWRGb3JJbkxlZnRTaWRlIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VGb3JTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUtleXdvcmRJZGVudGlmaWVyU2VtaWNvbG9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VDb250aW51ZVN0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlQnJlYWtTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVJldHVyblN0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlV2l0aFN0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlQ2FzZUNsYXVzZVN0YXRlbWVudHMiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUNhc2VzQ2xhdXNlIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuaW5uZXJQYXJzZVN3aXRjaFN0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlU3dpdGNoU3RhdGVtZW50IiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VUaHJvd1N0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlVHJ5U3RhdGVtZW50IiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VEZWJ1Z2dlclN0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlTGFiZWxlZFN0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlS2V5d29yZExwYXJFeHByZXNzaW9uUnBhciIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlVmFyaWFibGVTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUV4cHJlc3Npb25TdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVZhcmlhYmxlRGVjbGFyYXRvcnMiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVZhcmlhYmxlRGVjbGFyYXRvciIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlRXhwcmVzc2lvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmlzTGVmdEhhbmRFeHByZXNzaW9uUmVzb2x2aW5nVG9SZWZlcmVuY2UiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUFzc2lnbm1lbnRFeHByZXNzaW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VDb25kaXRpb25hbEV4cHJlc3Npb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5pc0xvZ2ljQmluYXJ5VG9rZW5WYWx1ZSIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmdldEJpbmFyeU9wZXJhdGlvblRva2VuIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuY3JlYXRlQmluYXJ5RXhwcmVzc2lvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmlubmVyQmFyc2VCaW5hcnlFeHByZXNzaW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VCaW5hcnlFeHByZXNzaW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VVbmFyeUV4cHJlc3Npb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVBvc3RmaXhFeHByZXNzaW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VJZGVudGlmaWVyIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VMZWZ0SGFuZFNpZGVFeHByZXNzaW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VQcmltYXJ5RXhwcmVzc2lvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlTmV3RXhwcmVzc2lvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlQXJndW1lbnRzIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VBcnJheUxpdGVyYWwiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci50cmltQXJyYXlDb21tYXMiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZU9iamVjdExpdGVyYWwiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVByb3BlcnR5QXNzaWdubWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlUHJvcGVydHlOYW1lIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VGdW5jdGlvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlRnVuY3Rpb25Cb2R5IiwidHJsLmZyb250ZW5kLmFwaSIsInRybC5mcm9udGVuZC5hcGkudG9rZW5pemUiLCJ0cmwuZnJvbnRlbmQuYXBpLnBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1FBQUEsSUFBT0EsR0FBUCxDO1FBQUEsQ0FBQSxVQUFPQSxHQUFQLEVBQVU7QUFBQSxZQUFDQSxJQUFBQSxRQUFBQSxDQUFEO0FBQUEsWUFBQ0EsQ0FBQUEsVUFBQUEsUUFBQUEsRUFBUUE7QUFBQUEsZ0JBQUNDLElBQUFBLE9BQUFBLENBQUREO0FBQUFBLGdCQUFDQyxDQUFBQSxVQUFBQSxPQUFBQSxFQUFRQTtBQUFBQSxvQkFFeEJDLENBQUFBLFVBQVlBLFNBQVpBLEVBQXFCQTtBQUFBQSx3QkFDakJDLFNBQUFBLENBQUFBLFNBQUFBLENBQUFBLFNBQUFBLElBQUFBLENBQUFBLElBQUFBLFNBQUFBLENBRGlCRDtBQUFBQSx3QkFFakJDLFNBQUFBLENBQUFBLFNBQUFBLENBQUFBLFlBQUFBLElBQUFBLENBQUFBLElBQUFBLFlBQUFBLENBRmlCRDtBQUFBQSx3QkFHakJDLFNBQUFBLENBQUFBLFNBQUFBLENBQUFBLFNBQUFBLElBQUFBLENBQUFBLElBQUFBLFNBQUFBLENBSGlCRDtBQUFBQSx3QkFJakJDLFNBQUFBLENBQUFBLFNBQUFBLENBQUFBLGFBQUFBLElBQUFBLENBQUFBLElBQUFBLGFBQUFBLENBSmlCRDtBQUFBQSx3QkFLakJDLFNBQUFBLENBQUFBLFNBQUFBLENBQUFBLFNBQUFBLElBQUFBLENBQUFBLElBQUFBLFNBQUFBLENBTGlCRDtBQUFBQSx3QkFNakJDLFNBQUFBLENBQUFBLFNBQUFBLENBQUFBLEtBQUFBLElBQUFBLENBQUFBLElBQUFBLEtBQUFBLENBTmlCRDtBQUFBQSx3QkFPakJDLFNBQUFBLENBQUFBLFNBQUFBLENBQUFBLE9BQUFBLElBQUFBLENBQUFBLElBQUFBLE9BQUFBLENBUGlCRDtBQUFBQSxxQkFBckJBLENBQVlBLE9BQUFBLENBQUFBLFNBQUFBLElBQUFBLENBQUFBLE9BQUFBLENBQUFBLFNBQUFBLEdBQVNBLEVBQVRBLENBQVpBLEdBRndCRDtBQUFBQSxvQkFFeEJDLElBQVlBLFNBQUFBLEdBQUFBLE9BQUFBLENBQUFBLFNBQVpBLENBRndCRDtBQUFBQSxvQkFZeEJDLENBQUFBLFVBQVlBLGNBQVpBLEVBQTBCQTtBQUFBQSx3QkFDdEJFLGNBQUFBLENBQUFBLGNBQUFBLENBQUFBLFFBQUFBLElBQUFBLENBQUFBLElBQUFBLFFBQUFBLENBRHNCRjtBQUFBQSx3QkFFdEJFLGNBQUFBLENBQUFBLGNBQUFBLENBQUFBLFFBQUFBLElBQUFBLENBQUFBLElBQUFBLFFBQUFBLENBRnNCRjtBQUFBQSx3QkFHdEJFLGNBQUFBLENBQUFBLGNBQUFBLENBQUFBLE1BQUFBLElBQUFBLENBQUFBLElBQUFBLE1BQUFBLENBSHNC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dHJvd2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlIHRybC5mcm9udGVuZC5sZXhpY2FsIHtcclxuXHRcclxuICAgIGV4cG9ydCBlbnVtIFRva2VuVHlwZSB7XHJcbiAgICAgICAga2V5d29yZCA9IDEsXHJcbiAgICAgICAgaWRlbnRpZmllcixcclxuICAgICAgICBsaXRlcmFsLFxyXG4gICAgICAgIHB1bmN0dWF0aW9uLFxyXG4gICAgICAgIGNvbW1lbnQsXHJcbiAgICAgICAgZW9mLFxyXG4gICAgICAgIGVycm9yXHJcbiAgICB9ICAgIFxyXG4gICAgXHJcbiAgICBleHBvcnQgZW51bSBMaXRlcmFsU3ViVHlwZSB7XHJcbiAgICAgICAgc3RyaW5nID0gMSxcclxuICAgICAgICBudW1iZXIsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBib29sZWFuLFxyXG4gICAgICAgIHJlZ2V4XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElUb2tlblBvc2l0aW9uICB7XHJcbiAgICAgICAgbGluZTogbnVtYmVyO1xyXG4gICAgICAgIGNvbHVtbjogbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVRva2VuU291cmNlTG9jYXRpb24ge1xyXG4gICAgICAgIHNvdXJjZT86IHN0cmluZztcclxuICAgICAgICBzdGFydDogSVRva2VuUG9zaXRpb247XHJcbiAgICAgICAgZW5kOiBJVG9rZW5Qb3NpdGlvbjtcclxuICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJVG9rZW4ge1xyXG4gICAgICAgIHR5cGU6IHN0cmluZyB8IFRva2VuVHlwZSxcclxuICAgICAgICB2YWx1ZTogYW55LFxyXG4gICAgICAgIHN1YlR5cGU/OiBzdHJpbmcgfCBMaXRlcmFsU3ViVHlwZSxcclxuICAgICAgICBsb2M/OiBJVG9rZW5Tb3VyY2VMb2NhdGlvblxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUxleGVyT3B0aW9ucyB7XHJcbiAgICAgICAgbG9jPzogYm9vbGVhbjtcclxuICAgICAgICByZWFkYWJsZVRva2Vuc01vZGU/OiBib29sZWFuO1xyXG4gICAgICAgIGluY2x1ZGVDb21tZW50c0FzTm9ybWFsVG9rZW5zPzogYm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElMZXhlciB7XHJcbiAgICAgICAgLy8gZ2V0IG5leHQgdG9rZW5cclxuICAgICAgICBuZXh0VG9rZW4oKTogSVRva2VuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHJlIHBhcnNlIHRoZSBsYXRlc3QgdG9rZW4gKHNob3VsZCBiZWdpbiB3aXRoICcvJylcclxuICAgICAgICAvLyBhcyByZWd1bGFyIGV4cHJlc3Npb24gbGl0ZXJhbFxyXG4gICAgICAgIHJlaW50ZXJwcmV0TGFzdFRva2VuQXNSZWdleCh0b2tlbjogSVRva2VuKTogSVRva2VuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGlzIG5leHQgdG9rZW5cclxuICAgICAgICBoYXNOZXh0KCk6IGJvb2xlYW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcmV0dXJucyB0aGUgbGFzdCBwYXJzZWQgdG9rZW5cclxuICAgICAgICBsYXRlc3RUb2tlbigpOiBJVG9rZW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gYWN0cyBsaWtlIGxvb2tpbmcgZm9yd2FyZCBieSByZXR1cm5pbmcgdGhlIG5leHQgdG9rZW4uXHJcbiAgICAgICAgLy8gbmV4dFRva2VuKCksIGFuZCBoYXNUb2tlbigpIGRvZXMgbm90IGVmZmVjdGVkXHJcbiAgICAgICAgbG9va0FoZWFkTmV4dFRva2VuKCk6IElUb2tlbjsgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBhcmd1bWVudCBpcyB0eXBlIG9mIGVycm9yIHR5cGVcclxuICAgICAgICBpc0Vycm9yKHRva2VuOiBJVG9rZW4pOiBib29sZWFuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBhcmd1bWVudCBpcyB0eXBlIG9mIGVuZCBvZiBmaWxlIHR5cGVcclxuICAgICAgICBpc0VvZih0b2tlbjogSVRva2VuKTogYm9vbGVhbjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgYXJndW1lbnQgaXMgdHlwZSBvZiBjb21tZW50IHR5cGVcclxuICAgICAgICBpc0NvbW1lbnQodG9rZW46IElUb2tlbik6IGJvb2xlYW47ICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgYXJndW1lbnQgaXMgdHlwZSBvZiBsaXRlcmFuIHR5cGVcclxuICAgICAgICBpc0xpdGVyYWwodG9rZW46IElUb2tlbik6IGJvb2xlYW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGFyZ3VtZW50IGlzIHR5cGUgb2YgcHVuY3R1YXRpb24gdHlwZVxyXG4gICAgICAgIGlzUHVuY3R1YXRpb24odG9rZW46IElUb2tlbik6IGJvb2xlYW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGFyZ3VtZW50IGlzIHR5cGUgb2Yga2V5d29yZCB0eXBlXHJcbiAgICAgICAgaXNLZXl3b3JkKHRva2VuOiBJVG9rZW4pOiBib29sZWFuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBhcmd1bWVudCBpcyB0eXBlIG9mIGlkZW50aWZpZXIgdHlwZVxyXG4gICAgICAgIGlzSWRlbnRpZmllcih0b2tlbjogSVRva2VuKTogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGFyZ3VtZW50IGlzIHR5cGUgb2YgcHVuY3R1YXRpb24gdHlwZVxyXG4gICAgICAgIC8vIGFuZCBpcyBlcXVhbCB3aXRoIHRoZSBzcGVjaWZpYyB2YWx1ZVxyXG4gICAgICAgIGlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbjogSVRva2VuLCB2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgYXJndW1lbnQgaXMgdHlwZSBvZiBrZXl3b3JkIHR5cGVcclxuICAgICAgICAvLyBhbmQgaXMgZXF1YWwgd2l0aCB0aGUgc3BlY2lmaWMgdmFsdWVcclxuICAgICAgICBpc0tleXdvcmRWYWx1ZSh0b2tlbjogSVRva2VuLCB2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgYXJndW1lbnQgaXMgdHlwZSBvZiBpZGVudGlmaWVyIHR5cGVcclxuICAgICAgICAvLyBhbmQgaXMgZXF1YWwgd2l0aCB0aGUgc3BlY2lmaWMgdmFsdWVcclxuICAgICAgICBpc0lkZW50aWZpZXJWYWx1ZSh0b2tlbjogSVRva2VuLCB2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zdW1lIHRoZSBuZXh0IHRva2VuIGlmIGl0cyB0eXBlIGlzIHB1bmN0dWF0aW9uXHJcbiAgICAgICAgLy8gYW5kIGlzIGVxdWFsIHdpdGggdGhlIHNwZWNpZmljIHZhbHVlXHJcbiAgICAgICAgbWF0Y2hQdW5jdHVhdGlvbih2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zdW1lIHRoZSBuZXh0IHRva2VuIGlmIGl0cyB0eXBlIGlzIGtleXdvcmRcclxuICAgICAgICAvLyBhbmQgaXMgZXF1YWwgd2l0aCB0aGUgc3BlY2lmaWMgdmFsdWVcclxuICAgICAgICBtYXRjaEtleXdvcmQodmFsdWU6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcmV0dXJucyBhbGwgdGhlIGNvbW1lbnRzIHRoYXQgaGF2ZSBiZWVuIFxyXG4gICAgICAgIC8vIGNvbGxlY3RlZCBzaW5jZSB0aGUgY3VycmVudCBleGVjdXRpb24gXHJcbiAgICAgICAgZ2V0Q29tbWVudHMoKTogSVRva2VuW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcmV0dXJucyB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiBjdXJzb3IgaXMgdGhlIHNvdXJjZSBzdHJlYW1cclxuICAgICAgICBnZXRDdXJyZW50Q3Vyc29yUG9zKCk6IElUb2tlblBvc2l0aW9uO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiSUV4Y2VwdGlvbi5kLnRzXCIgLz5cclxuXHJcbm1vZHVsZSB0cmwuZnJvbnRlbmQudXRpbGl0aWVzIHtcclxuXHRleHBvcnQgY2xhc3MgRXhjZXB0aW9uSGFuZGxlciBpbXBsZW1lbnRzIElFeGNlcHRpb25IYW5kbGVyIHtcclxuXHRcdHByaXZhdGUgZXhjZXB0aW9uczogSUV4Y2VwdGlvbltdID0gW107XHJcblx0XHRcclxuXHRcdHB1YmxpYyBjb25zdHJ1Y3Rvcigpe31cclxuXHRcdFxyXG5cdFx0cHVibGljIGFkZEV4Y2VwdGlvbihtc2c6IHN0cmluZywgbGluZTogbnVtYmVyLCBjb2x1bW46IG51bWJlcikge1xyXG5cdFx0XHRsZXQgZXhjZXB0aW9uOiBJRXhjZXB0aW9uID0ge1xyXG5cdFx0XHRcdHBvczoge1xyXG5cdFx0XHRcdFx0Y29sdW1uLCBcclxuICAgICAgICAgICAgICAgICAgICBsaW5lXHJcblx0XHRcdFx0fSxcdFx0XHJcblx0XHRcdFx0bXNnOiBtc2dcclxuXHRcdFx0fTtcclxuXHRcdFx0dGhpcy5leGNlcHRpb25zLnB1c2goZXhjZXB0aW9uKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIGhhc0V4Y2VwdGlvbnMoKTogYm9vbGVhbiB7XHJcblx0XHRcdHJldHVybiAhXy5pc0VtcHR5KHRoaXMuZXhjZXB0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcclxuXHRcdFx0dGhpcy5leGNlcHRpb25zLmxlbmd0aCA9IDA7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHB1YmxpYyBnZXRFeGNlcHRpb25zKCk6IElFeGNlcHRpb25bXSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmV4Y2VwdGlvbnM7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3RzRGVmaW5pdGlvbnMvdHNkLmQudHNcIiAvPlxyXG5cclxubW9kdWxlIHRybC5mcm9udGVuZC51dGlsaXRpZXMge1xyXG4gICAgXHJcbiAgICAvLyBsZXQncyB1c2Ugb3VyIGltYWdpbmF0aW9uXHJcbiAgICBleHBvcnQgdHlwZSBJY2hhciA9IG51bWJlcjtcclxuXHRcclxuXHRleHBvcnQgaW50ZXJmYWNlIElTdHJpbmdGcm9tQ2hhclBvaW50IHtcclxuXHRcdGFkZENoYXJQb2ludChjaGFyOiBudW1iZXIpO1xyXG5cdFx0Z2V0U3RyaW5nKCk6IHN0cmluZztcclxuXHR9XHJcblx0XHJcblx0ZXhwb3J0IGNsYXNzIENoYXJQb2ludHMge1xyXG5cdFx0c3RhdGljIGNyZWF0ZVN0cmluZ0Zyb21DaGFyUG9pbnRHZW5lcmF0b3IoKTogSVN0cmluZ0Zyb21DaGFyUG9pbnQge1xyXG5cdFx0XHRsZXQgY2hhckJ1ZmZlcjogc3RyaW5nW10gPSBbXTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRhZGRDaGFyUG9pbnQ6IChjaGFyOiBJY2hhcikgPT4ge1xyXG5cdFx0XHRcdFx0Y2hhckJ1ZmZlci5wdXNoKENoYXJQb2ludHMuZnJvbUNvZGVQb2ludChjaGFyKSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRnZXRTdHJpbmc6ICgpOiBzdHJpbmcgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGNoYXJCdWZmZXIuam9pbignJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwcml2YXRlIHN0YXRpYyBaRVJPX0NIQVJfQ09ERSA9IFwiMFwiLmNoYXJDb2RlQXQoMCk7XHJcblx0XHRzdGF0aWMgZ2V0RGlnaXRGcm9tQ2hhclBvaW50KGM6IEljaGFyKTogbnVtYmVyIHtcclxuXHRcdFx0cmV0dXJuIGMgLSBDaGFyUG9pbnRzLlpFUk9fQ0hBUl9DT0RFO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRzdGF0aWMgY29kZVBvaW50QXQoc3RyOiBzdHJpbmcsIHBvczogbnVtYmVyKTogSWNoYXIge1xyXG5cdFx0XHRyZXR1cm4gKDxhbnk+c3RyKS5jb2RlUG9pbnRBdChwb3MpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRzdGF0aWMgZnJvbUNvZGVQb2ludChwb2ludDogSWNoYXIpOiBzdHJpbmcge1xyXG5cdFx0XHRyZXR1cm4gKDxhbnk+U3RyaW5nKS5mcm9tQ29kZVBvaW50KHBvaW50KTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcbn0iLCJcclxubW9kdWxlIHRybC5mcm9udGVuZC5sZXhpY2FsIHtcclxuXHRjb25zdCB0ID0gdHJ1ZTtcclxuXHRcclxuXHRleHBvcnQgY2xhc3MgVG9rZW5EZWZpbml0aW9ucyB7XHJcblx0XHJcblx0XHRzdGF0aWMgV1MgPSB7XHJcblx0XHRcdDB4MDAwOTogdCxcclxuXHRcdFx0MHgwMDBCOiB0LFxyXG5cdFx0XHQweDAwMEM6IHQsXHJcblx0XHRcdDB4MDAyMDogdCxcclxuXHRcdFx0MHgwMEEwOiB0LFxyXG5cdFx0XHQweEZFRkY6IHRcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHN0YXRpYyBMVCA9IHtcclxuXHRcdFx0MHgwMDBBOiB0LFxyXG5cdFx0XHQweDAwMEQ6IHQsIC8vY3JcclxuXHRcdFx0MHgyMDI4OiB0LFxyXG5cdFx0XHQweDIwMjogdFxyXG5cdFx0fTtcclxuXHJcbi8vIDB4MjAwQzogdCwgLy96d25qXHJcbi8vIDB4MjAwRDogdCwgLy96d2pcclxuXHRcdFx0XHRcclxuXHRcdHN0YXRpYyBLVyA9IHtcclxuXHRcdFx0YnJlYWs6IHQsXHJcblx0XHRcdGRvOiB0LFxyXG5cdFx0XHRpbnN0YW5jZW9mOiB0LFxyXG5cdFx0XHR0eXBlb2Y6IHQsXHJcblx0XHRcdGNhc2U6IHQsXHJcblx0XHRcdGVsc2U6IHQsXHJcblx0XHRcdG5ldzogdCxcclxuXHRcdFx0dmFyOiB0LFxyXG5cdFx0XHRjYXRjaDogdCxcclxuXHRcdFx0ZmluYWxseTogdCxcclxuXHRcdFx0cmV0dXJuOiB0LFxyXG5cdFx0XHR2b2lkOiB0LFxyXG5cdFx0XHRjb250aW51ZTogdCxcclxuXHRcdFx0Zm9yOiB0LFxyXG5cdFx0XHRzd2l0Y2g6IHQsXHJcblx0XHRcdHdoaWxlOiB0LFxyXG5cdFx0XHRkZWJ1Z2dlcjogdCxcclxuXHRcdFx0ZnVuY3Rpb246IHQsXHJcblx0XHRcdHRoaXM6IHQsXHJcblx0XHRcdHdpdGg6IHQsXHJcblx0XHRcdGRlZmF1bHQ6IHQsXHJcblx0XHRcdGlmOiB0LFxyXG5cdFx0XHR0aHJvdzogdCxcclxuXHRcdFx0ZGVsZXRlOiB0LFxyXG5cdFx0XHRpbjogdCxcclxuXHRcdFx0dHJ5OiB0LFxyXG5cdFxyXG5cdFx0XHRjbGFzczogdCxcclxuXHRcdFx0ZW51bTogdCxcclxuXHRcdFx0ZXh0ZW5kczogdCxcclxuXHRcdFx0c3VwZXI6IHQsXHJcblx0XHRcdGNvbnN0OiB0LFxyXG5cdFx0XHRleHBvcnQ6IHQsXHJcblx0XHRcdGltcG9ydDogdCxcclxuXHRcclxuXHRcdFx0aW1wbGVtZW50czogdCxcclxuXHRcdFx0bGV0OiB0LFxyXG5cdFx0XHRwcml2YXRlOiB0LFxyXG5cdFx0XHRwdWJsaWM6IHQsXHJcblx0XHRcdGludGVyZmFjZTogdCxcclxuXHRcdFx0cGFja2FnZTogdCxcclxuXHRcdFx0cHJvdGVjdGVkOiB0LFxyXG5cdFx0XHRzdGF0aWM6IHQsXHJcblx0XHRcdHlpZWxkOiB0XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRzdGF0aWMgTElUID0ge1xyXG5cdFx0XHRudWxsOiB0LFxyXG5cdFx0XHR0cnVlOiB0LFxyXG5cdFx0XHRmYWxzZTogdFxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0c3RhdGljIFBOQ19TSU5HTEUgPSB7XHJcblx0XHRcdGxicmFjZTogMTIzLFxyXG5cdFx0XHRyYnJhY2U6IDEyNSxcclxuXHRcdFx0bHBhcmVudGg6IDQwLFxyXG5cdFx0XHRycGFyZW50aDogNDEsXHJcblx0XHRcdGxicmFja2V0OiA5MSxcclxuXHRcdFx0cmJyYWNrZXQ6IDkzLFxyXG5cdFx0XHRkb3Q6IDQ2LFxyXG5cdFx0XHRzZW1pY29sb246IDU5LFxyXG5cdFx0XHRjb21tYTogNDQsXHJcblx0XHRcdGxlc3M6IDYwLFxyXG5cdFx0XHRtb3JlOiA2MixcclxuXHRcdFx0cGx1czogNDMsXHJcblx0XHRcdG1pbnVzOiA0NSxcclxuXHRcdFx0cGVyY2VudDogMzcsXHJcblx0XHRcdGFtcGVyc2FuZDogMzgsXHJcblx0XHRcdHZlcnRpY2FsOiAxMjQsXHJcblx0XHRcdGNhcmV0OiA5NCxcclxuXHRcdFx0ZXhjbDogMzMsXHJcblx0XHRcdHRpbGRlOiAxMjYsXHJcblx0XHRcdHF1ZXN0OiA2MyxcclxuXHRcdFx0Y29sb246IDU4LFxyXG5cdFx0XHRhc3NpZ246IDYxLFxyXG5cdFx0XHRhc3RlcmlzazogNDIsXHJcblx0XHRcdHNsYXNoOiA0NyxcclxuXHRcdFx0YmFja3NsYXNoOiA5MixcclxuXHRcdFx0ZG9sbGFyOiAzNixcclxuXHRcdFx0ZXhwOiAxMDEsXHJcblx0XHRcdGV4cGI6IDY5LFxyXG5cdFx0XHRhcG9zdHJvcGhlOiAzOSxcclxuXHRcdFx0cW1hcms6IDM0LFxyXG5cdFx0XHR6ZXJvOiA0OCxcclxuXHRcdFx0XHJcblx0XHRcdGI6IDk4LFxyXG5cdFx0XHRmOiAxMDIsXHJcblx0XHRcdG46IDExMCxcclxuXHRcdFx0cjogMTE0LFxyXG5cdFx0XHR0OiAxMTYsXHJcblx0XHRcdHY6IDExOCxcclxuXHRcdFx0eDogMTIwLFxyXG5cdFx0XHR1OiAxMTcsXHJcblx0XHRcdFxyXG5cdFx0XHRsZjogMHgwMDBBLFxyXG4gICAgICAgICAgICBjcjogMHgwMDBEXHJcblx0XHR9O1x0XHRcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRzdGF0aWMgVU5JQ09ERV9VTkNPTU1PTl9USFJFU0hPTEQgPSAxNzA7XHJcblx0XHRcclxuXHRcdHN0YXRpYyBVTklDT0RFX0NPTlRJTlVFX0NPTU1PTiA9IHsgMHgyMDBDOiB0IC8qIHp3bmogKi8sIDB4MjAwRDogdCAvKiB6d2ogKi8sIDM2OiB0IC8qICQgKi8sIDkyOiB0IC8qIFxcICovLCBcclxuXHRcdFx0NDg6IHQsIDQ5OiB0LCA1MDogdCwgNTE6IHQsIDUyOiB0LCA1MzogdCwgNTQ6IHQsIDU1OiB0LCA1NjogdCwgNTc6IHQsIDY1OiB0LCA2NjogdCwgNjc6IHQsIDY4OiB0LCA2OTogdCwgNzA6IHQsIDcxOiB0LCA3MjogdCwgNzM6IHQsIDc0OiB0LCA3NTogdCwgNzY6IHQsIDc3OiB0LCA3ODogdCwgNzk6IHQsIDgwOiB0LCA4MTogdCwgODI6IHQsIDgzOiB0LCA4NDogdCwgODU6IHQsIDg2OiB0LCA4NzogdCwgODg6IHQsIDg5OiB0LCA5MDogdCwgOTU6IHQsIDk3OiB0LCA5ODogdCwgOTk6IHQsIDEwMDogdCwgMTAxOiB0LCAxMDI6IHQsIDEwMzogdCwgMTA0OiB0LCAxMDU6IHQsIDEwNjogdCwgMTA3OiB0LCAxMDg6IHQsIDEwOTogdCwgMTEwOiB0LCAxMTE6IHQsIDExMjogdCwgMTEzOiB0LCAxMTQ6IHQsIDExNTogdCwgMTE2OiB0LCAxMTc6IHQsIDExODogdCwgMTE5OiB0LCAxMjA6IHQsIDEyMTogdCwgMTIyOiB0IH07XHJcblx0XHRcclxuXHRcdHN0YXRpYyBVTklDT0RFX0NPTlRJTlVFX1VOQ09NTU9OID0gL1tcXHhBQVxceEI1XFx4QkFcXHhDMC1cXHhENlxceEQ4LVxceEY2XFx4RjgtXFx1MDI0MVxcdTAyNTAtXFx1MDJDMVxcdTAyQzYtXFx1MDJEMVxcdTAyRTAtXFx1MDJFNFxcdTAyRUVcXHUwMzAwLVxcdTAzNkZcXHUwMzdBXFx1MDM4NlxcdTAzODgtXFx1MDM4QVxcdTAzOENcXHUwMzhFLVxcdTAzQTFcXHUwM0EzLVxcdTAzQ0VcXHUwM0QwLVxcdTAzRjVcXHUwM0Y3LVxcdTA0ODFcXHUwNDgzLVxcdTA0ODZcXHUwNDhBLVxcdTA0Q0VcXHUwNEQwLVxcdTA0RjlcXHUwNTAwLVxcdTA1MEZcXHUwNTMxLVxcdTA1NTZcXHUwNTU5XFx1MDU2MS1cXHUwNTg3XFx1MDU5MS1cXHUwNUI5XFx1MDVCQi1cXHUwNUJEXFx1MDVCRlxcdTA1QzFcXHUwNUMyXFx1MDVDNFxcdTA1QzVcXHUwNUM3XFx1MDVEMC1cXHUwNUVBXFx1MDVGMC1cXHUwNUYyXFx1MDYxMC1cXHUwNjE1XFx1MDYyMS1cXHUwNjNBXFx1MDY0MC1cXHUwNjVFXFx1MDY2MC1cXHUwNjY5XFx1MDY2RS1cXHUwNkQzXFx1MDZENS1cXHUwNkRDXFx1MDZERi1cXHUwNkU4XFx1MDZFQS1cXHUwNkZDXFx1MDZGRlxcdTA3MTAtXFx1MDc0QVxcdTA3NEQtXFx1MDc2RFxcdTA3ODAtXFx1MDdCMVxcdTA5MDEtXFx1MDkzOVxcdTA5M0MtXFx1MDk0RFxcdTA5NTAtXFx1MDk1NFxcdTA5NTgtXFx1MDk2M1xcdTA5NjYtXFx1MDk2RlxcdTA5N0RcXHUwOTgxLVxcdTA5ODNcXHUwOTg1LVxcdTA5OENcXHUwOThGXFx1MDk5MFxcdTA5OTMtXFx1MDlBOFxcdTA5QUEtXFx1MDlCMFxcdTA5QjJcXHUwOUI2LVxcdTA5QjlcXHUwOUJDLVxcdTA5QzRcXHUwOUM3XFx1MDlDOFxcdTA5Q0ItXFx1MDlDRVxcdTA5RDdcXHUwOURDXFx1MDlERFxcdTA5REYtXFx1MDlFM1xcdTA5RTYtXFx1MDlGMVxcdTBBMDEtXFx1MEEwM1xcdTBBMDUtXFx1MEEwQVxcdTBBMEZcXHUwQTEwXFx1MEExMy1cXHUwQTI4XFx1MEEyQS1cXHUwQTMwXFx1MEEzMlxcdTBBMzNcXHUwQTM1XFx1MEEzNlxcdTBBMzhcXHUwQTM5XFx1MEEzQ1xcdTBBM0UtXFx1MEE0MlxcdTBBNDdcXHUwQTQ4XFx1MEE0Qi1cXHUwQTREXFx1MEE1OS1cXHUwQTVDXFx1MEE1RVxcdTBBNjYtXFx1MEE3NFxcdTBBODEtXFx1MEE4M1xcdTBBODUtXFx1MEE4RFxcdTBBOEYtXFx1MEE5MVxcdTBBOTMtXFx1MEFBOFxcdTBBQUEtXFx1MEFCMFxcdTBBQjJcXHUwQUIzXFx1MEFCNS1cXHUwQUI5XFx1MEFCQy1cXHUwQUM1XFx1MEFDNy1cXHUwQUM5XFx1MEFDQi1cXHUwQUNEXFx1MEFEMFxcdTBBRTAtXFx1MEFFM1xcdTBBRTYtXFx1MEFFRlxcdTBCMDEtXFx1MEIwM1xcdTBCMDUtXFx1MEIwQ1xcdTBCMEZcXHUwQjEwXFx1MEIxMy1cXHUwQjI4XFx1MEIyQS1cXHUwQjMwXFx1MEIzMlxcdTBCMzNcXHUwQjM1LVxcdTBCMzlcXHUwQjNDLVxcdTBCNDNcXHUwQjQ3XFx1MEI0OFxcdTBCNEItXFx1MEI0RFxcdTBCNTZcXHUwQjU3XFx1MEI1Q1xcdTBCNURcXHUwQjVGLVxcdTBCNjFcXHUwQjY2LVxcdTBCNkZcXHUwQjcxXFx1MEI4MlxcdTBCODNcXHUwQjg1LVxcdTBCOEFcXHUwQjhFLVxcdTBCOTBcXHUwQjkyLVxcdTBCOTVcXHUwQjk5XFx1MEI5QVxcdTBCOUNcXHUwQjlFXFx1MEI5RlxcdTBCQTNcXHUwQkE0XFx1MEJBOC1cXHUwQkFBXFx1MEJBRS1cXHUwQkI5XFx1MEJCRS1cXHUwQkMyXFx1MEJDNi1cXHUwQkM4XFx1MEJDQS1cXHUwQkNEXFx1MEJEN1xcdTBCRTYtXFx1MEJFRlxcdTBDMDEtXFx1MEMwM1xcdTBDMDUtXFx1MEMwQ1xcdTBDMEUtXFx1MEMxMFxcdTBDMTItXFx1MEMyOFxcdTBDMkEtXFx1MEMzM1xcdTBDMzUtXFx1MEMzOVxcdTBDM0UtXFx1MEM0NFxcdTBDNDYtXFx1MEM0OFxcdTBDNEEtXFx1MEM0RFxcdTBDNTVcXHUwQzU2XFx1MEM2MFxcdTBDNjFcXHUwQzY2LVxcdTBDNkZcXHUwQzgyXFx1MEM4M1xcdTBDODUtXFx1MEM4Q1xcdTBDOEUtXFx1MEM5MFxcdTBDOTItXFx1MENBOFxcdTBDQUEtXFx1MENCM1xcdTBDQjUtXFx1MENCOVxcdTBDQkMtXFx1MENDNFxcdTBDQzYtXFx1MENDOFxcdTBDQ0EtXFx1MENDRFxcdTBDRDVcXHUwQ0Q2XFx1MENERVxcdTBDRTBcXHUwQ0UxXFx1MENFNi1cXHUwQ0VGXFx1MEQwMlxcdTBEMDNcXHUwRDA1LVxcdTBEMENcXHUwRDBFLVxcdTBEMTBcXHUwRDEyLVxcdTBEMjhcXHUwRDJBLVxcdTBEMzlcXHUwRDNFLVxcdTBENDNcXHUwRDQ2LVxcdTBENDhcXHUwRDRBLVxcdTBENERcXHUwRDU3XFx1MEQ2MFxcdTBENjFcXHUwRDY2LVxcdTBENkZcXHUwRDgyXFx1MEQ4M1xcdTBEODUtXFx1MEQ5NlxcdTBEOUEtXFx1MERCMVxcdTBEQjMtXFx1MERCQlxcdTBEQkRcXHUwREMwLVxcdTBEQzZcXHUwRENBXFx1MERDRi1cXHUwREQ0XFx1MERENlxcdTBERDgtXFx1MERERlxcdTBERjJcXHUwREYzXFx1MEUwMS1cXHUwRTNBXFx1MEU0MC1cXHUwRTRFXFx1MEU1MC1cXHUwRTU5XFx1MEU4MVxcdTBFODJcXHUwRTg0XFx1MEU4N1xcdTBFODhcXHUwRThBXFx1MEU4RFxcdTBFOTQtXFx1MEU5N1xcdTBFOTktXFx1MEU5RlxcdTBFQTEtXFx1MEVBM1xcdTBFQTVcXHUwRUE3XFx1MEVBQVxcdTBFQUJcXHUwRUFELVxcdTBFQjlcXHUwRUJCLVxcdTBFQkRcXHUwRUMwLVxcdTBFQzRcXHUwRUM2XFx1MEVDOC1cXHUwRUNEXFx1MEVEMC1cXHUwRUQ5XFx1MEVEQ1xcdTBFRERcXHUwRjAwXFx1MEYxOFxcdTBGMTlcXHUwRjIwLVxcdTBGMjlcXHUwRjM1XFx1MEYzN1xcdTBGMzlcXHUwRjNFLVxcdTBGNDdcXHUwRjQ5LVxcdTBGNkFcXHUwRjcxLVxcdTBGODRcXHUwRjg2LVxcdTBGOEJcXHUwRjkwLVxcdTBGOTdcXHUwRjk5LVxcdTBGQkNcXHUwRkM2XFx1MTAwMC1cXHUxMDIxXFx1MTAyMy1cXHUxMDI3XFx1MTAyOVxcdTEwMkFcXHUxMDJDLVxcdTEwMzJcXHUxMDM2LVxcdTEwMzlcXHUxMDQwLVxcdTEwNDlcXHUxMDUwLVxcdTEwNTlcXHUxMEEwLVxcdTEwQzVcXHUxMEQwLVxcdTEwRkFcXHUxMEZDXFx1MTEwMC1cXHUxMTU5XFx1MTE1Ri1cXHUxMUEyXFx1MTFBOC1cXHUxMUY5XFx1MTIwMC1cXHUxMjQ4XFx1MTI0QS1cXHUxMjREXFx1MTI1MC1cXHUxMjU2XFx1MTI1OFxcdTEyNUEtXFx1MTI1RFxcdTEyNjAtXFx1MTI4OFxcdTEyOEEtXFx1MTI4RFxcdTEyOTAtXFx1MTJCMFxcdTEyQjItXFx1MTJCNVxcdTEyQjgtXFx1MTJCRVxcdTEyQzBcXHUxMkMyLVxcdTEyQzVcXHUxMkM4LVxcdTEyRDZcXHUxMkQ4LVxcdTEzMTBcXHUxMzEyLVxcdTEzMTVcXHUxMzE4LVxcdTEzNUFcXHUxMzVGXFx1MTM2OS1cXHUxMzcxXFx1MTM4MC1cXHUxMzhGXFx1MTNBMC1cXHUxM0Y0XFx1MTQwMS1cXHUxNjZDXFx1MTY2Ri1cXHUxNjc2XFx1MTY4MS1cXHUxNjlBXFx1MTZBMC1cXHUxNkVBXFx1MTZFRS1cXHUxNkYwXFx1MTcwMC1cXHUxNzBDXFx1MTcwRS1cXHUxNzE0XFx1MTcyMC1cXHUxNzM0XFx1MTc0MC1cXHUxNzUzXFx1MTc2MC1cXHUxNzZDXFx1MTc2RS1cXHUxNzcwXFx1MTc3MlxcdTE3NzNcXHUxNzgwLVxcdTE3QjNcXHUxN0I2LVxcdTE3RDNcXHUxN0Q3XFx1MTdEQ1xcdTE3RERcXHUxN0UwLVxcdTE3RTlcXHUxODBCLVxcdTE4MERcXHUxODEwLVxcdTE4MTlcXHUxODIwLVxcdTE4NzdcXHUxODgwLVxcdTE4QTlcXHUxOTAwLVxcdTE5MUNcXHUxOTIwLVxcdTE5MkJcXHUxOTMwLVxcdTE5M0JcXHUxOTQ2LVxcdTE5NkRcXHUxOTcwLVxcdTE5NzRcXHUxOTgwLVxcdTE5QTlcXHUxOUIwLVxcdTE5QzlcXHUxOUQwLVxcdTE5RDlcXHUxQTAwLVxcdTFBMUJcXHUxRDAwLVxcdTFEQzNcXHUxRTAwLVxcdTFFOUJcXHUxRUEwLVxcdTFFRjlcXHUxRjAwLVxcdTFGMTVcXHUxRjE4LVxcdTFGMURcXHUxRjIwLVxcdTFGNDVcXHUxRjQ4LVxcdTFGNERcXHUxRjUwLVxcdTFGNTdcXHUxRjU5XFx1MUY1QlxcdTFGNURcXHUxRjVGLVxcdTFGN0RcXHUxRjgwLVxcdTFGQjRcXHUxRkI2LVxcdTFGQkNcXHUxRkJFXFx1MUZDMi1cXHUxRkM0XFx1MUZDNi1cXHUxRkNDXFx1MUZEMC1cXHUxRkQzXFx1MUZENi1cXHUxRkRCXFx1MUZFMC1cXHUxRkVDXFx1MUZGMi1cXHUxRkY0XFx1MUZGNi1cXHUxRkZDXFx1MjAzRlxcdTIwNDBcXHUyMDU0XFx1MjA3MVxcdTIwN0ZcXHUyMDkwLVxcdTIwOTRcXHUyMEQwLVxcdTIwRENcXHUyMEUxXFx1MjBFNS1cXHUyMEVCXFx1MjEwMlxcdTIxMDdcXHUyMTBBLVxcdTIxMTNcXHUyMTE1XFx1MjExOC1cXHUyMTFEXFx1MjEyNFxcdTIxMjZcXHUyMTI4XFx1MjEyQS1cXHUyMTMxXFx1MjEzMy1cXHUyMTM5XFx1MjEzQy1cXHUyMTNGXFx1MjE0NS1cXHUyMTQ5XFx1MjE2MC1cXHUyMTgzXFx1MkMwMC1cXHUyQzJFXFx1MkMzMC1cXHUyQzVFXFx1MkM4MC1cXHUyQ0U0XFx1MkQwMC1cXHUyRDI1XFx1MkQzMC1cXHUyRDY1XFx1MkQ2RlxcdTJEODAtXFx1MkQ5NlxcdTJEQTAtXFx1MkRBNlxcdTJEQTgtXFx1MkRBRVxcdTJEQjAtXFx1MkRCNlxcdTJEQjgtXFx1MkRCRVxcdTJEQzAtXFx1MkRDNlxcdTJEQzgtXFx1MkRDRVxcdTJERDAtXFx1MkRENlxcdTJERDgtXFx1MkRERVxcdTMwMDUtXFx1MzAwN1xcdTMwMjEtXFx1MzAyRlxcdTMwMzEtXFx1MzAzNVxcdTMwMzgtXFx1MzAzQ1xcdTMwNDEtXFx1MzA5NlxcdTMwOTktXFx1MzA5RlxcdTMwQTEtXFx1MzBGQVxcdTMwRkMtXFx1MzBGRlxcdTMxMDUtXFx1MzEyQ1xcdTMxMzEtXFx1MzE4RVxcdTMxQTAtXFx1MzFCN1xcdTMxRjAtXFx1MzFGRlxcdTM0MDAtXFx1NERCNVxcdTRFMDAtXFx1OUZCQlxcdUEwMDAtXFx1QTQ4Q1xcdUE4MDAtXFx1QTgyN1xcdUFDMDAtXFx1RDdBM1xcdUY5MDAtXFx1RkEyRFxcdUZBMzAtXFx1RkE2QVxcdUZBNzAtXFx1RkFEOVxcdUZCMDAtXFx1RkIwNlxcdUZCMTMtXFx1RkIxN1xcdUZCMUQtXFx1RkIyOFxcdUZCMkEtXFx1RkIzNlxcdUZCMzgtXFx1RkIzQ1xcdUZCM0VcXHVGQjQwXFx1RkI0MVxcdUZCNDNcXHVGQjQ0XFx1RkI0Ni1cXHVGQkIxXFx1RkJEMy1cXHVGRDNEXFx1RkQ1MC1cXHVGRDhGXFx1RkQ5Mi1cXHVGREM3XFx1RkRGMC1cXHVGREZCXFx1RkUwMC1cXHVGRTBGXFx1RkUyMC1cXHVGRTIzXFx1RkUzM1xcdUZFMzRcXHVGRTRELVxcdUZFNEZcXHVGRTcwLVxcdUZFNzRcXHVGRTc2LVxcdUZFRkNcXHVGRjEwLVxcdUZGMTlcXHVGRjIxLVxcdUZGM0FcXHVGRjNGXFx1RkY0MS1cXHVGRjVBXFx1RkY2Ni1cXHVGRkJFXFx1RkZDMi1cXHVGRkM3XFx1RkZDQS1cXHVGRkNGXFx1RkZEMi1cXHVGRkQ3XFx1RkZEQS1cXHVGRkRDXXxcXHVEODAwW1xcdURDMDAtXFx1REMwQlxcdURDMEQtXFx1REMyNlxcdURDMjgtXFx1REMzQVxcdURDM0NcXHVEQzNEXFx1REMzRi1cXHVEQzREXFx1REM1MC1cXHVEQzVEXFx1REM4MC1cXHVEQ0ZBXFx1REQ0MC1cXHVERDc0XFx1REYwMC1cXHVERjFFXFx1REYzMC1cXHVERjRBXFx1REY4MC1cXHVERjlEXFx1REZBMC1cXHVERkMzXFx1REZDOC1cXHVERkNGXFx1REZEMS1cXHVERkQ1XXxcXHVEODAxW1xcdURDMDAtXFx1REM5RFxcdURDQTAtXFx1RENBOV18XFx1RDgwMltcXHVEQzAwLVxcdURDMDVcXHVEQzA4XFx1REMwQS1cXHVEQzM1XFx1REMzN1xcdURDMzhcXHVEQzNDXFx1REMzRlxcdURFMDAtXFx1REUwM1xcdURFMDVcXHVERTA2XFx1REUwQy1cXHVERTEzXFx1REUxNS1cXHVERTE3XFx1REUxOS1cXHVERTMzXFx1REUzOC1cXHVERTNBXFx1REUzRl18XFx1RDgzNFtcXHVERDY1LVxcdURENjlcXHVERDZELVxcdURENzJcXHVERDdCLVxcdUREODJcXHVERDg1LVxcdUREOEJcXHVEREFBLVxcdUREQURcXHVERTQyLVxcdURFNDRdfFxcdUQ4MzVbXFx1REMwMC1cXHVEQzU0XFx1REM1Ni1cXHVEQzlDXFx1REM5RVxcdURDOUZcXHVEQ0EyXFx1RENBNVxcdURDQTZcXHVEQ0E5LVxcdURDQUNcXHVEQ0FFLVxcdURDQjlcXHVEQ0JCXFx1RENCRC1cXHVEQ0MzXFx1RENDNS1cXHVERDA1XFx1REQwNy1cXHVERDBBXFx1REQwRC1cXHVERDE0XFx1REQxNi1cXHVERDFDXFx1REQxRS1cXHVERDM5XFx1REQzQi1cXHVERDNFXFx1REQ0MC1cXHVERDQ0XFx1REQ0NlxcdURENEEtXFx1REQ1MFxcdURENTItXFx1REVBNVxcdURFQTgtXFx1REVDMFxcdURFQzItXFx1REVEQVxcdURFREMtXFx1REVGQVxcdURFRkMtXFx1REYxNFxcdURGMTYtXFx1REYzNFxcdURGMzYtXFx1REY0RVxcdURGNTAtXFx1REY2RVxcdURGNzAtXFx1REY4OFxcdURGOEEtXFx1REZBOFxcdURGQUEtXFx1REZDMlxcdURGQzQtXFx1REZDOVxcdURGQ0UtXFx1REZGRl18W1xcdUQ4NDAtXFx1RDg2OF1bXFx1REMwMC1cXHVERkZGXXxcXHVEODY5W1xcdURDMDAtXFx1REVENl18XFx1RDg3RVtcXHVEQzAwLVxcdURFMURdfFxcdURCNDBbXFx1REQwMC1cXHVEREVGXS87XHJcblxyXG5cdFx0c3RhdGljIFVOSUNPREVfU1RBUlRfQ09NTU9OID0geyAzNjogdCAvKiAkICovLCA5MjogdCAvKiBcXCAqLywgOTU6IHQgLyogXyAqLywgNjU6IHQsIDY2OiB0LCA2NzogdCwgNjg6IHQsIDY5OiB0LCA3MDogdCwgNzE6IHQsIDcyOiB0LCA3MzogdCwgNzQ6IHQsIDc1OiB0LCA3NjogdCwgNzc6IHQsIDc4OiB0LCA3OTogdCwgODA6IHQsIDgxOiB0LCA4MjogdCwgODM6IHQsIDg0OiB0LCA4NTogdCwgODY6IHQsIDg3OiB0LCA4ODogdCwgODk6IHQsIDkwOiB0LCA5NzogdCwgOTg6IHQsIDk5OiB0LCAxMDA6IHQsIDEwMTogdCwgMTAyOiB0LCAxMDM6IHQsIDEwNDogdCwgMTA1OiB0LCAxMDY6IHQsIDEwNzogdCwgMTA4OiB0LCAxMDk6IHQsIDExMDogdCwgMTExOiB0LCAxMTI6IHQsIDExMzogdCwgMTE0OiB0LCAxMTU6IHQsIDExNjogdCwgMTE3OiB0LCAxMTg6IHQsIDExOTogdCwgMTIwOiB0LCAxMjE6IHQsIDEyMjogdCB9O1xyXG5cdFx0XHJcblx0XHRzdGF0aWMgVU5JQ09ERV9TVEFSVF9VTkNPTU1PTiA9IC9bXFx4QUFcXHhCNVxceEJBXFx4QzAtXFx4RDZcXHhEOC1cXHhGNlxceEY4LVxcdTAyNDFcXHUwMjUwLVxcdTAyQzFcXHUwMkM2LVxcdTAyRDFcXHUwMkUwLVxcdTAyRTRcXHUwMkVFXFx1MDM3QVxcdTAzODZcXHUwMzg4LVxcdTAzOEFcXHUwMzhDXFx1MDM4RS1cXHUwM0ExXFx1MDNBMy1cXHUwM0NFXFx1MDNEMC1cXHUwM0Y1XFx1MDNGNy1cXHUwNDgxXFx1MDQ4QS1cXHUwNENFXFx1MDREMC1cXHUwNEY5XFx1MDUwMC1cXHUwNTBGXFx1MDUzMS1cXHUwNTU2XFx1MDU1OVxcdTA1NjEtXFx1MDU4N1xcdTA1RDAtXFx1MDVFQVxcdTA1RjAtXFx1MDVGMlxcdTA2MjEtXFx1MDYzQVxcdTA2NDAtXFx1MDY0QVxcdTA2NkVcXHUwNjZGXFx1MDY3MS1cXHUwNkQzXFx1MDZENVxcdTA2RTVcXHUwNkU2XFx1MDZFRVxcdTA2RUZcXHUwNkZBLVxcdTA2RkNcXHUwNkZGXFx1MDcxMFxcdTA3MTItXFx1MDcyRlxcdTA3NEQtXFx1MDc2RFxcdTA3ODAtXFx1MDdBNVxcdTA3QjFcXHUwOTA0LVxcdTA5MzlcXHUwOTNEXFx1MDk1MFxcdTA5NTgtXFx1MDk2MVxcdTA5N0RcXHUwOTg1LVxcdTA5OENcXHUwOThGXFx1MDk5MFxcdTA5OTMtXFx1MDlBOFxcdTA5QUEtXFx1MDlCMFxcdTA5QjJcXHUwOUI2LVxcdTA5QjlcXHUwOUJEXFx1MDlDRVxcdTA5RENcXHUwOUREXFx1MDlERi1cXHUwOUUxXFx1MDlGMFxcdTA5RjFcXHUwQTA1LVxcdTBBMEFcXHUwQTBGXFx1MEExMFxcdTBBMTMtXFx1MEEyOFxcdTBBMkEtXFx1MEEzMFxcdTBBMzJcXHUwQTMzXFx1MEEzNVxcdTBBMzZcXHUwQTM4XFx1MEEzOVxcdTBBNTktXFx1MEE1Q1xcdTBBNUVcXHUwQTcyLVxcdTBBNzRcXHUwQTg1LVxcdTBBOERcXHUwQThGLVxcdTBBOTFcXHUwQTkzLVxcdTBBQThcXHUwQUFBLVxcdTBBQjBcXHUwQUIyXFx1MEFCM1xcdTBBQjUtXFx1MEFCOVxcdTBBQkRcXHUwQUQwXFx1MEFFMFxcdTBBRTFcXHUwQjA1LVxcdTBCMENcXHUwQjBGXFx1MEIxMFxcdTBCMTMtXFx1MEIyOFxcdTBCMkEtXFx1MEIzMFxcdTBCMzJcXHUwQjMzXFx1MEIzNS1cXHUwQjM5XFx1MEIzRFxcdTBCNUNcXHUwQjVEXFx1MEI1Ri1cXHUwQjYxXFx1MEI3MVxcdTBCODNcXHUwQjg1LVxcdTBCOEFcXHUwQjhFLVxcdTBCOTBcXHUwQjkyLVxcdTBCOTVcXHUwQjk5XFx1MEI5QVxcdTBCOUNcXHUwQjlFXFx1MEI5RlxcdTBCQTNcXHUwQkE0XFx1MEJBOC1cXHUwQkFBXFx1MEJBRS1cXHUwQkI5XFx1MEMwNS1cXHUwQzBDXFx1MEMwRS1cXHUwQzEwXFx1MEMxMi1cXHUwQzI4XFx1MEMyQS1cXHUwQzMzXFx1MEMzNS1cXHUwQzM5XFx1MEM2MFxcdTBDNjFcXHUwQzg1LVxcdTBDOENcXHUwQzhFLVxcdTBDOTBcXHUwQzkyLVxcdTBDQThcXHUwQ0FBLVxcdTBDQjNcXHUwQ0I1LVxcdTBDQjlcXHUwQ0JEXFx1MENERVxcdTBDRTBcXHUwQ0UxXFx1MEQwNS1cXHUwRDBDXFx1MEQwRS1cXHUwRDEwXFx1MEQxMi1cXHUwRDI4XFx1MEQyQS1cXHUwRDM5XFx1MEQ2MFxcdTBENjFcXHUwRDg1LVxcdTBEOTZcXHUwRDlBLVxcdTBEQjFcXHUwREIzLVxcdTBEQkJcXHUwREJEXFx1MERDMC1cXHUwREM2XFx1MEUwMS1cXHUwRTMwXFx1MEUzMlxcdTBFMzNcXHUwRTQwLVxcdTBFNDZcXHUwRTgxXFx1MEU4MlxcdTBFODRcXHUwRTg3XFx1MEU4OFxcdTBFOEFcXHUwRThEXFx1MEU5NC1cXHUwRTk3XFx1MEU5OS1cXHUwRTlGXFx1MEVBMS1cXHUwRUEzXFx1MEVBNVxcdTBFQTdcXHUwRUFBXFx1MEVBQlxcdTBFQUQtXFx1MEVCMFxcdTBFQjJcXHUwRUIzXFx1MEVCRFxcdTBFQzAtXFx1MEVDNFxcdTBFQzZcXHUwRURDXFx1MEVERFxcdTBGMDBcXHUwRjQwLVxcdTBGNDdcXHUwRjQ5LVxcdTBGNkFcXHUwRjg4LVxcdTBGOEJcXHUxMDAwLVxcdTEwMjFcXHUxMDIzLVxcdTEwMjdcXHUxMDI5XFx1MTAyQVxcdTEwNTAtXFx1MTA1NVxcdTEwQTAtXFx1MTBDNVxcdTEwRDAtXFx1MTBGQVxcdTEwRkNcXHUxMTAwLVxcdTExNTlcXHUxMTVGLVxcdTExQTJcXHUxMUE4LVxcdTExRjlcXHUxMjAwLVxcdTEyNDhcXHUxMjRBLVxcdTEyNERcXHUxMjUwLVxcdTEyNTZcXHUxMjU4XFx1MTI1QS1cXHUxMjVEXFx1MTI2MC1cXHUxMjg4XFx1MTI4QS1cXHUxMjhEXFx1MTI5MC1cXHUxMkIwXFx1MTJCMi1cXHUxMkI1XFx1MTJCOC1cXHUxMkJFXFx1MTJDMFxcdTEyQzItXFx1MTJDNVxcdTEyQzgtXFx1MTJENlxcdTEyRDgtXFx1MTMxMFxcdTEzMTItXFx1MTMxNVxcdTEzMTgtXFx1MTM1QVxcdTEzODAtXFx1MTM4RlxcdTEzQTAtXFx1MTNGNFxcdTE0MDEtXFx1MTY2Q1xcdTE2NkYtXFx1MTY3NlxcdTE2ODEtXFx1MTY5QVxcdTE2QTAtXFx1MTZFQVxcdTE2RUUtXFx1MTZGMFxcdTE3MDAtXFx1MTcwQ1xcdTE3MEUtXFx1MTcxMVxcdTE3MjAtXFx1MTczMVxcdTE3NDAtXFx1MTc1MVxcdTE3NjAtXFx1MTc2Q1xcdTE3NkUtXFx1MTc3MFxcdTE3ODAtXFx1MTdCM1xcdTE3RDdcXHUxN0RDXFx1MTgyMC1cXHUxODc3XFx1MTg4MC1cXHUxOEE4XFx1MTkwMC1cXHUxOTFDXFx1MTk1MC1cXHUxOTZEXFx1MTk3MC1cXHUxOTc0XFx1MTk4MC1cXHUxOUE5XFx1MTlDMS1cXHUxOUM3XFx1MUEwMC1cXHUxQTE2XFx1MUQwMC1cXHUxREJGXFx1MUUwMC1cXHUxRTlCXFx1MUVBMC1cXHUxRUY5XFx1MUYwMC1cXHUxRjE1XFx1MUYxOC1cXHUxRjFEXFx1MUYyMC1cXHUxRjQ1XFx1MUY0OC1cXHUxRjREXFx1MUY1MC1cXHUxRjU3XFx1MUY1OVxcdTFGNUJcXHUxRjVEXFx1MUY1Ri1cXHUxRjdEXFx1MUY4MC1cXHUxRkI0XFx1MUZCNi1cXHUxRkJDXFx1MUZCRVxcdTFGQzItXFx1MUZDNFxcdTFGQzYtXFx1MUZDQ1xcdTFGRDAtXFx1MUZEM1xcdTFGRDYtXFx1MUZEQlxcdTFGRTAtXFx1MUZFQ1xcdTFGRjItXFx1MUZGNFxcdTFGRjYtXFx1MUZGQ1xcdTIwNzFcXHUyMDdGXFx1MjA5MC1cXHUyMDk0XFx1MjEwMlxcdTIxMDdcXHUyMTBBLVxcdTIxMTNcXHUyMTE1XFx1MjExOC1cXHUyMTFEXFx1MjEyNFxcdTIxMjZcXHUyMTI4XFx1MjEyQS1cXHUyMTMxXFx1MjEzMy1cXHUyMTM5XFx1MjEzQy1cXHUyMTNGXFx1MjE0NS1cXHUyMTQ5XFx1MjE2MC1cXHUyMTgzXFx1MkMwMC1cXHUyQzJFXFx1MkMzMC1cXHUyQzVFXFx1MkM4MC1cXHUyQ0U0XFx1MkQwMC1cXHUyRDI1XFx1MkQzMC1cXHUyRDY1XFx1MkQ2RlxcdTJEODAtXFx1MkQ5NlxcdTJEQTAtXFx1MkRBNlxcdTJEQTgtXFx1MkRBRVxcdTJEQjAtXFx1MkRCNlxcdTJEQjgtXFx1MkRCRVxcdTJEQzAtXFx1MkRDNlxcdTJEQzgtXFx1MkRDRVxcdTJERDAtXFx1MkRENlxcdTJERDgtXFx1MkRERVxcdTMwMDUtXFx1MzAwN1xcdTMwMjEtXFx1MzAyOVxcdTMwMzEtXFx1MzAzNVxcdTMwMzgtXFx1MzAzQ1xcdTMwNDEtXFx1MzA5NlxcdTMwOUItXFx1MzA5RlxcdTMwQTEtXFx1MzBGQVxcdTMwRkMtXFx1MzBGRlxcdTMxMDUtXFx1MzEyQ1xcdTMxMzEtXFx1MzE4RVxcdTMxQTAtXFx1MzFCN1xcdTMxRjAtXFx1MzFGRlxcdTM0MDAtXFx1NERCNVxcdTRFMDAtXFx1OUZCQlxcdUEwMDAtXFx1QTQ4Q1xcdUE4MDBcXHVBODAxXFx1QTgwMy1cXHVBODA1XFx1QTgwNy1cXHVBODBBXFx1QTgwQy1cXHVBODIyXFx1QUMwMC1cXHVEN0EzXFx1RjkwMC1cXHVGQTJEXFx1RkEzMC1cXHVGQTZBXFx1RkE3MC1cXHVGQUQ5XFx1RkIwMC1cXHVGQjA2XFx1RkIxMy1cXHVGQjE3XFx1RkIxRFxcdUZCMUYtXFx1RkIyOFxcdUZCMkEtXFx1RkIzNlxcdUZCMzgtXFx1RkIzQ1xcdUZCM0VcXHVGQjQwXFx1RkI0MVxcdUZCNDNcXHVGQjQ0XFx1RkI0Ni1cXHVGQkIxXFx1RkJEMy1cXHVGRDNEXFx1RkQ1MC1cXHVGRDhGXFx1RkQ5Mi1cXHVGREM3XFx1RkRGMC1cXHVGREZCXFx1RkU3MC1cXHVGRTc0XFx1RkU3Ni1cXHVGRUZDXFx1RkYyMS1cXHVGRjNBXFx1RkY0MS1cXHVGRjVBXFx1RkY2Ni1cXHVGRkJFXFx1RkZDMi1cXHVGRkM3XFx1RkZDQS1cXHVGRkNGXFx1RkZEMi1cXHVGRkQ3XFx1RkZEQS1cXHVGRkRDXXxcXHVEODAwW1xcdURDMDAtXFx1REMwQlxcdURDMEQtXFx1REMyNlxcdURDMjgtXFx1REMzQVxcdURDM0NcXHVEQzNEXFx1REMzRi1cXHVEQzREXFx1REM1MC1cXHVEQzVEXFx1REM4MC1cXHVEQ0ZBXFx1REQ0MC1cXHVERDc0XFx1REYwMC1cXHVERjFFXFx1REYzMC1cXHVERjRBXFx1REY4MC1cXHVERjlEXFx1REZBMC1cXHVERkMzXFx1REZDOC1cXHVERkNGXFx1REZEMS1cXHVERkQ1XXxcXHVEODAxW1xcdURDMDAtXFx1REM5RF18XFx1RDgwMltcXHVEQzAwLVxcdURDMDVcXHVEQzA4XFx1REMwQS1cXHVEQzM1XFx1REMzN1xcdURDMzhcXHVEQzNDXFx1REMzRlxcdURFMDBcXHVERTEwLVxcdURFMTNcXHVERTE1LVxcdURFMTdcXHVERTE5LVxcdURFMzNdfFxcdUQ4MzVbXFx1REMwMC1cXHVEQzU0XFx1REM1Ni1cXHVEQzlDXFx1REM5RVxcdURDOUZcXHVEQ0EyXFx1RENBNVxcdURDQTZcXHVEQ0E5LVxcdURDQUNcXHVEQ0FFLVxcdURDQjlcXHVEQ0JCXFx1RENCRC1cXHVEQ0MzXFx1RENDNS1cXHVERDA1XFx1REQwNy1cXHVERDBBXFx1REQwRC1cXHVERDE0XFx1REQxNi1cXHVERDFDXFx1REQxRS1cXHVERDM5XFx1REQzQi1cXHVERDNFXFx1REQ0MC1cXHVERDQ0XFx1REQ0NlxcdURENEEtXFx1REQ1MFxcdURENTItXFx1REVBNVxcdURFQTgtXFx1REVDMFxcdURFQzItXFx1REVEQVxcdURFREMtXFx1REVGQVxcdURFRkMtXFx1REYxNFxcdURGMTYtXFx1REYzNFxcdURGMzYtXFx1REY0RVxcdURGNTAtXFx1REY2RVxcdURGNzAtXFx1REY4OFxcdURGOEEtXFx1REZBOFxcdURGQUEtXFx1REZDMlxcdURGQzQtXFx1REZDOV18W1xcdUQ4NDAtXFx1RDg2OF1bXFx1REMwMC1cXHVERkZGXXxcXHVEODY5W1xcdURDMDAtXFx1REVENl18XFx1RDg3RVtcXHVEQzAwLVxcdURFMURdLztcclxuXHRcclxuXHR9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHNEZWZpbml0aW9ucy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi91dGlsaXRpZXMvQ2hhclBvaW50cy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJUb2tlbkRlZmluaXRpb25zLnRzXCIgLz5cclxuXHJcbm1vZHVsZSB0cmwuZnJvbnRlbmQubGV4aWNhbCB7XHJcblx0XHJcblx0bGV0IGhleERpZ2l0cyA9IHt9O1xyXG5cdF8uZWFjaChcIjAxMjM0NTY3ODlBQkNERUZhYmNkZWZcIiwgKG51bUNoYXIpID0+IHtcclxuXHRcdFxyXG5cdFx0aGV4RGlnaXRzW3V0aWxpdGllcy5DaGFyUG9pbnRzLmNvZGVQb2ludEF0KG51bUNoYXIsIDApXSA9IHRydWU7XHJcblx0fSk7XHJcblx0XHJcblx0bGV0IGRpZ2l0cyA9IHt9O1xyXG5cdF8uZWFjaChcIjAxMjM0NTY3ODlcIiwgKG51bUNoYXIpID0+IHtcclxuXHRcdGRpZ2l0c1t1dGlsaXRpZXMuQ2hhclBvaW50cy5jb2RlUG9pbnRBdChudW1DaGFyLCAwKV0gPSB0cnVlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdGV4cG9ydCBjbGFzcyBJZGVudGlmeWVycyB7XHJcblx0XHJcblx0XHRzdGF0aWMgaXNIZXhEaWdpdChjOiBudW1iZXIpOiBib29sZWFuIHtcclxuXHRcdFx0cmV0dXJuIGhleERpZ2l0c1tjXTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0c3RhdGljIGlzRGlnaXQoYzogbnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRcdHJldHVybiBkaWdpdHNbY107XHJcblx0XHR9XHJcblxyXG5cdFx0c3RhdGljIGlzS2V5d29yZChzdHI6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICAvLyBXaGVuIHN0ciBjb250YWlucyBhIHZhbHVlIGxpa2UgJ3RvU3RyaW5nJywgXHJcbiAgICAgICAgICAgIC8vIEtXIGhhcyBjb25mbGljdCBhbmQgcmV0dXJucyB0aGUgZnVuY3Rpb24gdG9TdHJpbmdcclxuXHRcdFx0cmV0dXJuIF8uaGFzKFRva2VuRGVmaW5pdGlvbnMuS1csIHN0cik7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHN0YXRpYyBpc0xpbmVUZXJtaW5hdG9yKGM6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0XHRyZXR1cm4gVG9rZW5EZWZpbml0aW9ucy5MVFtjXTtcclxuXHRcdH1cclxuXHJcblx0XHRzdGF0aWMgaXNJZGVudGlmaWVyU3RhcnQoYzogbnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRcdHJldHVybiBJZGVudGlmeWVycy5pc1NpbXBsZVVuaWNvZGVTdGFydChjKVxyXG5cdFx0XHRcdHx8IElkZW50aWZ5ZXJzLmlzQ29tcGxleFVuaWNvZGVTdGFydChjKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0c3RhdGljIGlzSWRlbnRpZmllclBhcnQoYzogbnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRcdHJldHVybiBJZGVudGlmeWVycy5pc1NpbXBsZVVuaWNvZGVDb250aW51ZShjKVxyXG5cdFx0XHRcdHx8IElkZW50aWZ5ZXJzLmlzQ29tcGxleFVuaWNvZGVDb250aW51ZShjKTtcclxuXHRcdH1cclxuXHJcblx0XHRzdGF0aWMgaXNTaW1wbGVVbmljb2RlQ29udGludWUoYzogbnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRcdHJldHVybiBUb2tlbkRlZmluaXRpb25zLlVOSUNPREVfQ09OVElOVUVfQ09NTU9OW2NdO1xyXG5cdFx0fVx0XHJcblx0XHRcdFxyXG5cdFx0c3RhdGljIGlzQ29tcGxleFVuaWNvZGVDb250aW51ZShjOiBudW1iZXIpOiBib29sZWFuIHtcclxuXHRcdFx0cmV0dXJuIGMgPiBUb2tlbkRlZmluaXRpb25zLlVOSUNPREVfVU5DT01NT05fVEhSRVNIT0xEIFxyXG5cdFx0XHRcdCYmIFRva2VuRGVmaW5pdGlvbnMuVU5JQ09ERV9DT05USU5VRV9VTkNPTU1PTi50ZXN0KHV0aWxpdGllcy5DaGFyUG9pbnRzLmZyb21Db2RlUG9pbnQoYykpO1xyXG5cdFx0fVx0XHJcblx0XHRcclxuXHRcdHN0YXRpYyBpc1NpbXBsZVVuaWNvZGVTdGFydChjOiBudW1iZXIpOiBib29sZWFuIHtcclxuXHRcdFx0cmV0dXJuIFRva2VuRGVmaW5pdGlvbnMuVU5JQ09ERV9TVEFSVF9DT01NT05bY107XHJcblx0XHR9XHRcclxuXHRcdFx0XHJcblx0XHRzdGF0aWMgaXNDb21wbGV4VW5pY29kZVN0YXJ0KGM6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0XHRyZXR1cm4gYyA+IFRva2VuRGVmaW5pdGlvbnMuVU5JQ09ERV9VTkNPTU1PTl9USFJFU0hPTEQgXHJcblx0XHRcdFx0JiYgVG9rZW5EZWZpbml0aW9ucy5VTklDT0RFX1NUQVJUX1VOQ09NTU9OLnRlc3QodXRpbGl0aWVzLkNoYXJQb2ludHMuZnJvbUNvZGVQb2ludChjKSk7XHJcblx0XHR9XHRcclxuXHRcdFxyXG5cdFx0c3RhdGljIGlzUHVuY3R1YXRpb25TdGFydChjOiBudW1iZXIpOiBib29sZWFuIHtcclxuXHRcdFx0cmV0dXJuIFRva2VuRGVmaW5pdGlvbnMuUE5DX1NJTkdMRVtjXTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90c0RlZmluaXRpb25zL3RzZC5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3V0aWxpdGllcy9JRXhjZXB0aW9uLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdXRpbGl0aWVzL0NoYXJQb2ludHMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiSUxleGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIlRva2VuRGVmaW5pdGlvbnMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiSWRlbnRpZnllcnMudHNcIiAvPlxyXG5cclxubW9kdWxlIHRybC5mcm9udGVuZC5sZXhpY2FsIHtcclxuXHJcbiAgICBjb25zdCBTdGF0ZXMgPSB7XHJcbiAgICAgICAgaWRlbnRpZmllcjogXCJzdGF0ZUlkZW50aWZpZXJcIixcclxuICAgICAgICBwdW5jdHVhdGlvbjogXCJzdGF0ZVB1bmN0dWF0aW9uXCIsXHJcbiAgICAgICAgbXVsdGlDb21tZW50OiBcInN0YXRlTXVsdGlDb21tZW50XCIsXHJcbiAgICAgICAgc2luZ2xlQ29tbWVudDogXCJzdGF0ZVNpbmdsZUNvbW1lbnRcIixcclxuICAgICAgICBkaXZPckNvbW1lbnQ6IFwic3RhdGVEaXZPckNvbW1lbnRcIixcclxuICAgICAgICBkb3RPck51bWJlcjogXCJzdGF0ZURvdE9yTnVtYmVyXCIsXHJcbiAgICAgICAgZXJyb3I6IFwic3RhdGVFcnJvclwiLFxyXG4gICAgICAgIGZpbmlzaDogXCJzdGF0ZUZpbmlzaFwiLFxyXG4gICAgICAgIGluaXQ6IFwic3RhdGVJbml0XCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgUmVhZGFibGVUb2tlblR5cGUgPSB7XHJcbiAgICAgICAga2V5d29yZDogXCJrZXl3b3JkXCIsXHJcbiAgICAgICAgaWRlbnRpZmllcjogXCJpZGVudGlmaWVyXCIsXHJcbiAgICAgICAgbGl0ZXJhbDogXCJsaXRlcmFsXCIsXHJcbiAgICAgICAgcHVuY3R1YXRpb246IFwicHVuY3R1YXRpb25cIixcclxuICAgICAgICBjb21tZW50OiBcImNvbW1lbnRcIixcclxuICAgICAgICBlb2Y6IFwiZW9mXCIsXHJcbiAgICAgICAgZXJyb3I6IFwiZXJyb3JcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBSZWFkYWJsZUxpdGVyYWxTdWJUeXBlID0ge1xyXG4gICAgICAgIHN0cmluZzogXCJzdHJpbmdcIixcclxuICAgICAgICBudW1iZXI6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgbnVsbDogXCJudWxsXCIsXHJcbiAgICAgICAgYm9vbGVhbjogXCJib29sZWFuXCIsXHJcbiAgICAgICAgcmVnZXg6IFwicmVnZXhcIlxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgdG9SZWFkYWJsZVRva2VuVHlwZSA9IChmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCB0b1JlYWRhYmxlVG9rZW5UeXBlTG9va3VwID0ge307XHJcbiAgICAgICAgdG9SZWFkYWJsZVRva2VuVHlwZUxvb2t1cFtUb2tlblR5cGUua2V5d29yZF0gPSBSZWFkYWJsZVRva2VuVHlwZS5rZXl3b3JkO1xyXG4gICAgICAgIHRvUmVhZGFibGVUb2tlblR5cGVMb29rdXBbVG9rZW5UeXBlLmlkZW50aWZpZXJdID0gUmVhZGFibGVUb2tlblR5cGUuaWRlbnRpZmllcjtcclxuICAgICAgICB0b1JlYWRhYmxlVG9rZW5UeXBlTG9va3VwW1Rva2VuVHlwZS5saXRlcmFsXSA9IFJlYWRhYmxlVG9rZW5UeXBlLmxpdGVyYWw7XHJcbiAgICAgICAgdG9SZWFkYWJsZVRva2VuVHlwZUxvb2t1cFtUb2tlblR5cGUucHVuY3R1YXRpb25dID0gUmVhZGFibGVUb2tlblR5cGUucHVuY3R1YXRpb247XHJcbiAgICAgICAgdG9SZWFkYWJsZVRva2VuVHlwZUxvb2t1cFtUb2tlblR5cGUuY29tbWVudF0gPSBSZWFkYWJsZVRva2VuVHlwZS5jb21tZW50O1xyXG4gICAgICAgIHRvUmVhZGFibGVUb2tlblR5cGVMb29rdXBbVG9rZW5UeXBlLmVvZl0gPSBSZWFkYWJsZVRva2VuVHlwZS5lb2Y7XHJcbiAgICAgICAgdG9SZWFkYWJsZVRva2VuVHlwZUxvb2t1cFtUb2tlblR5cGUuZXJyb3JdID0gUmVhZGFibGVUb2tlblR5cGUuZXJyb3I7XHJcblxyXG4gICAgICAgIHJldHVybiAodG9rZW5UeXBlOiBUb2tlblR5cGUpOiBzdHJpbmcgPT4gdG9SZWFkYWJsZVRva2VuVHlwZUxvb2t1cFt0b2tlblR5cGVdO1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICBjb25zdCB0b1JlYWRhYmxlTGl0ZXJhbFN1YlR5cGUgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgdG9SZWFkYWJsZUxpdGVyYWxTdWJUeXBlTG9va3VwID0ge307XHJcbiAgICAgICAgdG9SZWFkYWJsZUxpdGVyYWxTdWJUeXBlTG9va3VwW0xpdGVyYWxTdWJUeXBlLnN0cmluZ10gPSBSZWFkYWJsZUxpdGVyYWxTdWJUeXBlLnN0cmluZztcclxuICAgICAgICB0b1JlYWRhYmxlTGl0ZXJhbFN1YlR5cGVMb29rdXBbTGl0ZXJhbFN1YlR5cGUubnVtYmVyXSA9IFJlYWRhYmxlTGl0ZXJhbFN1YlR5cGUubnVtYmVyO1xyXG4gICAgICAgIHRvUmVhZGFibGVMaXRlcmFsU3ViVHlwZUxvb2t1cFtMaXRlcmFsU3ViVHlwZS5udWxsXSA9IFJlYWRhYmxlTGl0ZXJhbFN1YlR5cGUubnVsbDtcclxuICAgICAgICB0b1JlYWRhYmxlTGl0ZXJhbFN1YlR5cGVMb29rdXBbTGl0ZXJhbFN1YlR5cGUuYm9vbGVhbl0gPSBSZWFkYWJsZUxpdGVyYWxTdWJUeXBlLmJvb2xlYW47XHJcbiAgICAgICAgdG9SZWFkYWJsZUxpdGVyYWxTdWJUeXBlTG9va3VwW0xpdGVyYWxTdWJUeXBlLnJlZ2V4XSA9IFJlYWRhYmxlTGl0ZXJhbFN1YlR5cGUucmVnZXg7XHJcblxyXG4gICAgICAgIHJldHVybiAobGl0ZXJhbFN1YlR5cGU6IExpdGVyYWxTdWJUeXBlKTogc3RyaW5nID0+IHRvUmVhZGFibGVMaXRlcmFsU3ViVHlwZUxvb2t1cFtsaXRlcmFsU3ViVHlwZV07XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIGNvbnN0IFBOQyA9IFRva2VuRGVmaW5pdGlvbnMuUE5DX1NJTkdMRTtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTGV4ZXIgaW1wbGVtZW50cyBJTGV4ZXIge1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIENoYXJlY3Rlckxvb2t1cDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSB0b2tlbjogSVRva2VuO1xyXG4gICAgICAgIHByaXZhdGUgY29tbWVudHM6IElUb2tlbltdO1xyXG5cclxuICAgICAgICBwcml2YXRlIGxvb2tBaGVhZFRva2VuOiBJVG9rZW47XHJcbiAgICAgICAgcHJpdmF0ZSBjdXJyZW50VG9rZW46IElUb2tlbjtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBsaW5lbm86IG51bWJlcjtcclxuICAgICAgICBwcml2YXRlIHN0YXJ0TGluZW5vOiBudW1iZXI7XHJcbiAgICAgICAgcHJpdmF0ZSBjdXJyTGluZUN1cnNvcjogbnVtYmVyO1xyXG4gICAgICAgIHByaXZhdGUgcmVsYXRpdmVTdGFydEN1cnNvcjogbnVtYmVyO1xyXG4gICAgICAgIHByaXZhdGUgYWJzb2x1dGVTdGFydEN1cnNvcjogbnVtYmVyO1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0aWF0ZUNoYXJlY3Rlckxvb2t1cE9uY2UoKSB7XHJcbiAgICAgICAgICAgIGlmIChMZXhlci5DaGFyZWN0ZXJMb29rdXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBsb29rdXAgPSBMZXhlci5DaGFyZWN0ZXJMb29rdXAgPSB7fTtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgIC8vd2hpdGUgc3BhY2VcclxuICAgICAgICAgICAgXy5lYWNoKDxhbnk+VG9rZW5EZWZpbml0aW9ucy5XUywgKHZhbCwga2V5OiBudW1iZXIpID0+XHJcbiAgICAgICAgICAgICAgICBsb29rdXBba2V5XSA9IExleGVyLnByb3RvdHlwZS5zdGF0ZVdoaXRlU3BhY2UpO1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgLy9uZXcgbGluZVxyXG4gICAgICAgICAgICBfLmVhY2goPGFueT5Ub2tlbkRlZmluaXRpb25zLkxULCAodmFsLCBrZXk6IG51bWJlcikgPT5cclxuICAgICAgICAgICAgICAgIGxvb2t1cFtrZXldID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlTGluZVRlcm1pbmF0b3IpO1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgLy9zdHJpbmdcclxuICAgICAgICAgICAgbG9va3VwW1BOQy5xbWFya10gPSBMZXhlci5nZW5TdGF0ZVN0cmluZyhQTkMucW1hcmspO1xyXG4gICAgICAgICAgICBsb29rdXBbUE5DLmFwb3N0cm9waGVdID0gTGV4ZXIuZ2VuU3RhdGVTdHJpbmcoUE5DLmFwb3N0cm9waGUpO1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgLy9udW1iZXJcclxuICAgICAgICAgICAgXy5lYWNoKFwiMDEyMzQ1Njc4OVwiLCBudW1DaGFyID0+XHJcbiAgICAgICAgICAgICAgICBsb29rdXBbdXRpbGl0aWVzLkNoYXJQb2ludHMuY29kZVBvaW50QXQobnVtQ2hhciwgMCldID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlTnVtYmVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgbG9va3VwW1BOQy5sYnJhY2VdID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMucmJyYWNlXSA9IExleGVyLnByb3RvdHlwZS5zdGF0ZVB1bmN0dWF0aW9uU2luZ2xlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gKFxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLmxwYXJlbnRoXSA9IExleGVyLnByb3RvdHlwZS5zdGF0ZVB1bmN0dWF0aW9uU2luZ2xlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gKVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLnJwYXJlbnRoXSA9IExleGVyLnByb3RvdHlwZS5zdGF0ZVB1bmN0dWF0aW9uU2luZ2xlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gW1xyXG4gICAgICAgICAgICBsb29rdXBbUE5DLmxicmFja2V0XSA9IExleGVyLnByb3RvdHlwZS5zdGF0ZVB1bmN0dWF0aW9uU2luZ2xlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gXVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLnJicmFja2V0XSA9IExleGVyLnByb3RvdHlwZS5zdGF0ZVB1bmN0dWF0aW9uU2luZ2xlO1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgLy8gLiAuMVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLmRvdF0gPSAoKSA9PiBTdGF0ZXMuZG90T3JOdW1iZXI7XHJcblxyXG4gICAgICAgICAgICAvLyA6XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMuc2VtaWNvbG9uXSA9IExleGVyLnByb3RvdHlwZS5zdGF0ZVB1bmN0dWF0aW9uU2luZ2xlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gLFxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLmNvbW1hXSA9IExleGVyLnByb3RvdHlwZS5zdGF0ZVB1bmN0dWF0aW9uU2luZ2xlO1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgLy8gPCA8PCA8PSA8PDwgPDw9XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMubGVzc10gPSBMZXhlci5nZW5QdW5jdHVhdGlvblNjYW5uZXIoXHJcbiAgICAgICAgICAgICAgICBbW1BOQy5sZXNzXSwgW1BOQy5hc3NpZ25dLCBbUE5DLmxlc3MsIFBOQy5sZXNzXSwgW1BOQy5sZXNzLCBQTkMuYXNzaWduXV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vID4gPj0gPj4gPj49ID4+PiA+Pj49XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMubW9yZV0gPSBMZXhlci5nZW5QdW5jdHVhdGlvblNjYW5uZXIoW1xyXG4gICAgICAgICAgICAgICAgW1BOQy5tb3JlXSwgW1BOQy5hc3NpZ25dLCBbUE5DLm1vcmUsIFBOQy5tb3JlXSxcclxuICAgICAgICAgICAgICAgIFtQTkMubW9yZSwgUE5DLmFzc2lnbl0sIFtQTkMubW9yZSwgUE5DLm1vcmUsIFBOQy5hc3NpZ25dXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gISAhPSAhPT1cclxuICAgICAgICAgICAgbG9va3VwW1BOQy5leGNsXSA9IExleGVyLmdlblB1bmN0dWF0aW9uU2Nhbm5lcihcclxuICAgICAgICAgICAgICAgIFtbUE5DLmFzc2lnbl0sIFtQTkMuYXNzaWduLCBQTkMuYXNzaWduXV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIC0gLS0gLT1cclxuICAgICAgICAgICAgbG9va3VwW1BOQy5taW51c10gPSBMZXhlci5nZW5QdW5jdHVhdGlvblNjYW5uZXIoXHJcbiAgICAgICAgICAgICAgICBbW1BOQy5taW51c10sIFtQTkMuYXNzaWduXV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vICsgKysgKy09XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMucGx1c10gPSBMZXhlci5nZW5QdW5jdHVhdGlvblNjYW5uZXIoXHJcbiAgICAgICAgICAgICAgICBbW1BOQy5wbHVzXSwgW1BOQy5hc3NpZ25dXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gJSAlPVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLnBlcmNlbnRdID0gTGV4ZXIuZ2VuUHVuY3R1YXRpb25TY2FubmVyKFxyXG4gICAgICAgICAgICAgICAgW1tQTkMuYXNzaWduXV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vICYgJiYgJj1cclxuICAgICAgICAgICAgbG9va3VwW1BOQy5hbXBlcnNhbmRdID0gTGV4ZXIuZ2VuUHVuY3R1YXRpb25TY2FubmVyKFxyXG4gICAgICAgICAgICAgICAgW1tQTkMuYW1wZXJzYW5kXSwgW1BOQy5hc3NpZ25dXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gfCB8fCB8PVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLnZlcnRpY2FsXSA9IExleGVyLmdlblB1bmN0dWF0aW9uU2Nhbm5lcihcclxuICAgICAgICAgICAgICAgIFtbUE5DLnZlcnRpY2FsXSwgW1BOQy5hc3NpZ25dXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gXiBePVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLmNhcmV0XSA9IExleGVyLmdlblB1bmN0dWF0aW9uU2Nhbm5lcihcclxuICAgICAgICAgICAgICAgIFtbUE5DLmFzc2lnbl1dXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyB+XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMudGlsZGVdID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyA/XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMucXVlc3RdID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyA6XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMuY29sb25dID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyA9ID09ID09PVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLmFzc2lnbl0gPSBMZXhlci5nZW5QdW5jdHVhdGlvblNjYW5uZXIoXHJcbiAgICAgICAgICAgICAgICBbW1BOQy5hc3NpZ25dLCBbUE5DLmFzc2lnbiwgUE5DLmFzc2lnbl1dXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAqICo9XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMuYXN0ZXJpc2tdID0gTGV4ZXIuZ2VuUHVuY3R1YXRpb25TY2FubmVyKFxyXG4gICAgICAgICAgICAgICAgW1tQTkMuYXNzaWduXV1cclxuICAgICAgICAgICAgKTtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgIC8vIC8gLz0gLyogLy8gY29tbWVudFxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLnNsYXNoXSA9ICgpID0+IFN0YXRlcy5kaXZPckNvbW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAvLyBcXCB3aGl0ZXNwYWNlXHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMuYmFja3NsYXNoXSA9ICgpID0+IFN0YXRlcy5pZGVudGlmaWVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgZGVmYXVsdExleGVyT3B0aW9uczogSUxleGVyT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbG9jOiBmYWxzZSxcclxuICAgICAgICAgICAgcmVhZGFibGVUb2tlbnNNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICBpbmNsdWRlQ29tbWVudHNBc05vcm1hbFRva2VuczogdHJ1ZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHJpdmF0ZSBjaGFyU3RyZWFtOiBJQ2hhcmFjdGVyU3RyZWFtLFxyXG4gICAgICAgICAgICBwcml2YXRlIGV4Y2VwdGlvbkhhbmRsZXI6IHV0aWxpdGllcy5JRXhjZXB0aW9uSGFuZGxlcixcclxuICAgICAgICAgICAgcHJpdmF0ZSBvcHRpb25zPzogSUxleGVyT3B0aW9uc1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBfLmRlZmF1bHRzKFxyXG4gICAgICAgICAgICAgICAgXy5jbG9uZShvcHRpb25zIHx8IHt9KSxcclxuICAgICAgICAgICAgICAgIExleGVyLmRlZmF1bHRMZXhlck9wdGlvbnNcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5saW5lbm8gPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJMaW5lQ3Vyc29yID0gMDtcclxuICAgICAgICAgICAgdGhpcy5jb21tZW50cyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgTGV4ZXIuaW5pdGlhdGVDaGFyZWN0ZXJMb29rdXBPbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaXNFcnJvcih0b2tlbjogSVRva2VuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucmVhZGFibGVUb2tlbnNNb2RlID9cclxuICAgICAgICAgICAgICAgIHRva2VuLnR5cGUgPT09IFJlYWRhYmxlVG9rZW5UeXBlLmVycm9yIDogdG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLmVycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgaXNFb2YodG9rZW46IElUb2tlbik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnJlYWRhYmxlVG9rZW5zTW9kZSA/XHJcbiAgICAgICAgICAgICAgICB0b2tlbi50eXBlID09PSBSZWFkYWJsZVRva2VuVHlwZS5lb2YgOiB0b2tlbi50eXBlID09PSBUb2tlblR5cGUuZW9mO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgaXNDb21tZW50KHRva2VuOiBJVG9rZW4pOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5yZWFkYWJsZVRva2Vuc01vZGUgP1xyXG4gICAgICAgICAgICAgICAgdG9rZW4udHlwZSA9PT0gUmVhZGFibGVUb2tlblR5cGUuY29tbWVudCA6IHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5jb21tZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgaXNMaXRlcmFsKHRva2VuOiBJVG9rZW4pOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5yZWFkYWJsZVRva2Vuc01vZGUgP1xyXG4gICAgICAgICAgICAgICAgdG9rZW4udHlwZSA9PT0gUmVhZGFibGVUb2tlblR5cGUubGl0ZXJhbCA6IHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5saXRlcmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgaXNQdW5jdHVhdGlvbih0b2tlbjogSVRva2VuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucmVhZGFibGVUb2tlbnNNb2RlID9cclxuICAgICAgICAgICAgICAgIHRva2VuLnR5cGUgPT09IFJlYWRhYmxlVG9rZW5UeXBlLnB1bmN0dWF0aW9uIDogdG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLnB1bmN0dWF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgaXNLZXl3b3JkKHRva2VuOiBJVG9rZW4pOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5yZWFkYWJsZVRva2Vuc01vZGUgP1xyXG4gICAgICAgICAgICAgICAgdG9rZW4udHlwZSA9PT0gUmVhZGFibGVUb2tlblR5cGUua2V5d29yZCA6IHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5rZXl3b3JkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgaXNJZGVudGlmaWVyKHRva2VuOiBJVG9rZW4pOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5yZWFkYWJsZVRva2Vuc01vZGUgP1xyXG4gICAgICAgICAgICAgICAgdG9rZW4udHlwZSA9PT0gUmVhZGFibGVUb2tlblR5cGUuaWRlbnRpZmllciA6IHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5pZGVudGlmaWVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbjogSVRva2VuLCB2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzUHVuY3R1YXRpb24odG9rZW4pICYmIHRva2VuLnZhbHVlID09PSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGlzS2V5d29yZFZhbHVlKHRva2VuOiBJVG9rZW4sIHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNLZXl3b3JkKHRva2VuKSAmJiB0b2tlbi52YWx1ZSA9PT0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBpc0lkZW50aWZpZXJWYWx1ZSh0b2tlbjogSVRva2VuLCB2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzSWRlbnRpZmllcih0b2tlbikgJiYgdG9rZW4udmFsdWUgPT09IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtYXRjaFR5cGUodmFsdWU6IHN0cmluZywgdHlwZU1hdGNoZXI6ICh0b2tlbjogSVRva2VuLCB2YWx1ZTogc3RyaW5nKSA9PiBib29sZWFuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVNYXRjaGVyLmNhbGwodGhpcywgdG9rZW4sIHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtYXRjaFB1bmN0dWF0aW9uKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF0Y2hUeXBlKHZhbHVlLCB0aGlzLmlzUHVuY3R1YXRpb25WYWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbWF0Y2hLZXl3b3JkKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF0Y2hUeXBlKHZhbHVlLCB0aGlzLmlzS2V5d29yZFZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyByZWludGVycHJldExhc3RUb2tlbkFzUmVnZXgodG9rZW46IElUb2tlbik6IElUb2tlbiB7XHJcbiAgICAgICAgICAgIHV0aWxpdGllcy5hc3NlcnQodGhpcy5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwiL1wiKSB8fCB0aGlzLmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCIvPVwiKSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9va0FoZWFkVG9rZW4gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5id2RDdXJzb3JSYW5nZSh0b2tlbi52YWx1ZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iZWdpbkZyb21TdGF0ZVJlZ2V4KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbmV4dFRva2VuKCk6IElUb2tlbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvb2tBaGVhZFRva2VuID0gdGhpcy5sb29rQWhlYWRUb2tlbjtcclxuICAgICAgICAgICAgaWYgKGxvb2tBaGVhZFRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvb2tBaGVhZFRva2VuID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFRva2VuID0gbG9va0FoZWFkVG9rZW47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBuZXh0VG9rZW4gPSB0aGlzLmJlZ2luRnJvbVN0YXRlSW5pdCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0NvbW1lbnQobmV4dFRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbmNsdWRlQ29tbWVudHNBc05vcm1hbFRva2Vucykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMucHVzaChuZXh0VG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnB1c2gobmV4dFRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFRva2VuID0gdGhpcy5iZWdpbkZyb21TdGF0ZUluaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IHdoaWxlICh0aGlzLmlzQ29tbWVudChuZXh0VG9rZW4pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG5leHRUb2tlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhcnRTdGF0ZUVuZ2luZShuZXh0U3RhdGU6IHN0cmluZykge1xyXG4gICAgICAgICAgICB3aGlsZSAobmV4dFN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0U3RhdGUgPSB0aGlzW25leHRTdGF0ZV0uY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZWFkYWJsZVRva2Vuc01vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlUmVhZGFibGVUb2tlbnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB0cmFuc2xhdGVSZWFkYWJsZVRva2VucygpIHtcclxuICAgICAgICAgICAgdGhpcy50b2tlbi50eXBlID0gdG9SZWFkYWJsZVRva2VuVHlwZSh0aGlzLnRva2VuLnR5cGUgYXMgVG9rZW5UeXBlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudG9rZW4uc3ViVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbi5zdWJUeXBlID0gdG9SZWFkYWJsZUxpdGVyYWxTdWJUeXBlKHRoaXMudG9rZW4uc3ViVHlwZSBhcyBMaXRlcmFsU3ViVHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgYmVnaW5Gcm9tU3RhdGVJbml0KCk6IElUb2tlbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHRoaXMuc3RhdGVJbml0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXJ0U3RhdGVFbmdpbmUobmV4dFN0YXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgYmVnaW5Gcm9tU3RhdGVSZWdleCgpOiBJVG9rZW4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFudXBDb250ZXh0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHRoaXMuc3RhdGVSZWdleCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydFN0YXRlRW5naW5lKG5leHRTdGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGNsZWFudXBDb250ZXh0KCkge1xyXG4gICAgICAgICAgICAvL2NsZWFudXAgY3VycmVudCB0b2tlblxyXG4gICAgICAgICAgICB0aGlzLnRva2VuID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgLy90cmFjayBjdXJzb3IgcG9zaXRpb25cclxuICAgICAgICAgICAgdGhpcy5zdGFydExpbmVubyA9IHRoaXMubGluZW5vO1xyXG4gICAgICAgICAgICB0aGlzLnJlbGF0aXZlU3RhcnRDdXJzb3IgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCkgLSB0aGlzLmN1cnJMaW5lQ3Vyc29yO1xyXG4gICAgICAgICAgICB0aGlzLmFic29sdXRlU3RhcnRDdXJzb3IgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbGF0ZXN0VG9rZW4oKTogSVRva2VuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFRva2VuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGxvb2tBaGVhZE5leHRUb2tlbigpOiBJVG9rZW4ge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VG9rZW4gPSB0aGlzLmN1cnJlbnRUb2tlbjtcclxuICAgICAgICAgICAgdGhpcy5sb29rQWhlYWRUb2tlbiA9IHRoaXMubmV4dFRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUb2tlbiA9IGN1cnJlbnRUb2tlbjtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9va0FoZWFkVG9rZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaGFzTmV4dCgpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuaXNFb2YodG9rZW4pICYmICF0aGlzLmlzRXJyb3IodG9rZW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldENvbW1lbnRzKCk6IElUb2tlbltdIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tbWVudHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0Q3VycmVudEN1cnNvclBvcygpOiBJVG9rZW5Qb3NpdGlvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBsaW5lOiB0aGlzLmxpbmVubyxcclxuICAgICAgICAgICAgICAgIGNvbHVtbjogdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpIC0gdGhpcy5jdXJyTGluZUN1cnNvclxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8gZmluYWwgc3RhdGVzXHJcblx0XHRcclxuICAgICAgICBwcml2YXRlIHN0YXRlRmluaXNoKCkgeyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGVFcnJvcigpIHtcclxuICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuY3JlYXRlVG9rZW5Gcm9tUG9zKFRva2VuVHlwZS5lcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vLy8vLy8gZmluYWwgc3RhdGVzIC8vLy8vL1xyXG5cdFx0XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIFN0YXRlc1xyXG5cdFx0XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0ZUluaXQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYW51cENvbnRleHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYXJTdHJlYW0uaXNFb2YoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuY3JlYXRlVG9rZW4oVG9rZW5UeXBlLmVvZiwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZmluaXNoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgbmV4dFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKElkZW50aWZ5ZXJzLmlzSWRlbnRpZmllclN0YXJ0KGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uYndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgICAgICBuZXh0U3RhdGUgPSBTdGF0ZXMuaWRlbnRpZmllcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyQ2FjaGVkSGFuZGxlcjogKCkgPT4gc3RyaW5nID0gTGV4ZXIuQ2hhcmVjdGVyTG9va3VwW2NoYXJdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXJDYWNoZWRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmJ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRTdGF0ZSA9IGNoYXJDYWNoZWRIYW5kbGVyLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0U3RhdGUgPSB0aGlzLnVuZXhwZWN0ZWRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXh0U3RhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRlSWRlbnRpZmllcigpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBsZXQgY2hhckdlbjogdXRpbGl0aWVzLklTdHJpbmdGcm9tQ2hhclBvaW50ID0gdXRpbGl0aWVzLkNoYXJQb2ludHMuY3JlYXRlU3RyaW5nRnJvbUNoYXJQb2ludEdlbmVyYXRvcigpLFxyXG4gICAgICAgICAgICAgICAgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNjYW5Vbmljb2RlRXNjYXBlU2VxdWVuY2UoY2hhckdlbiwgY2hhcikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVuZXhwZWN0ZWRDaGFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5jaGFyU3RyZWFtLmdldE5leHRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoSWRlbnRpZnllcnMuaXNJZGVudGlmaWVyUGFydChjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zY2FuVW5pY29kZUVzY2FwZVNlcXVlbmNlKGNoYXJHZW4sIGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVuZXhwZWN0ZWRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uYndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB0eXBlLFxyXG4gICAgICAgICAgICAgICAgc3ViVHlwZSxcclxuICAgICAgICAgICAgICAgIHN0cjogYW55ID0gY2hhckdlbi5nZXRTdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKElkZW50aWZ5ZXJzLmlzS2V5d29yZChzdHIpKSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlID0gVG9rZW5UeXBlLmtleXdvcmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN0cikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibnVsbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gVG9rZW5UeXBlLmxpdGVyYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YlR5cGUgPSBMaXRlcmFsU3ViVHlwZS5udWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRydWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFRva2VuVHlwZS5saXRlcmFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJUeXBlID0gTGl0ZXJhbFN1YlR5cGUuYm9vbGVhbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmYWxzZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gVG9rZW5UeXBlLmxpdGVyYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YlR5cGUgPSBMaXRlcmFsU3ViVHlwZS5ib29sZWFuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBUb2tlblR5cGUuaWRlbnRpZmllcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRva2VuID0gdGhpcy5jcmVhdGVUb2tlbih0eXBlLCBzdHIsIHN1YlR5cGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gU3RhdGVzLmZpbmlzaDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGdlblN0YXRlU3RyaW5nKHN0cmluZ1Rlcm1pbmF0b3JDaGFyOiBudW1iZXIpOiAoKSA9PiBzdHJpbmcge1xyXG4gICAgICAgICAgICAvLyBlc2Mgc2VxIC0+XHJcbiAgICAgICAgICAgIC8vIFxcICcgXCIgXFwgYiBmIG4gciB0IHYgIC0+IHZhbFxyXG4gICAgICAgICAgICAvLyBcXCB4IEhleERpZ2l0IEhleERpZ2l0ICAtPiBoZXggdmFsXHJcbiAgICAgICAgICAgIC8vIFxcIHUgSGV4RGlnaXQgSGV4RGlnaXQgSGV4RGlnaXQgSGV4RGlnaXQgLT4gdSB2YWxcclxuICAgICAgICAgICAgLy8gXFwgbGluZSBjb250IC0+IGlnbm9yZVxyXG4gICAgICAgICAgICAvLyBcXCBkZWNpbWFsIGRpZ2l0IC0+IGlnbm9yZSBkaWdpdFxyXG4gICAgICAgICAgICAvLyBcXCBjaGFyIC0+IGlnbm9yZSBcXFxyXG5cdFx0XHRcclxuICAgICAgICAgICAgLy8gY2Fubm90IGJlIGFuIGFycm93IGZ1bmN0aW9uIGJlY2F1c2UgaXQgYmluZHMgX3RoaXMgLT4gdGhpc1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uZ2V0TmV4dENoYXIoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyR2VuOiB1dGlsaXRpZXMuSVN0cmluZ0Zyb21DaGFyUG9pbnQgPSB1dGlsaXRpZXMuQ2hhclBvaW50cy5jcmVhdGVTdHJpbmdGcm9tQ2hhclBvaW50R2VuZXJhdG9yKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSBzdHJpbmdUZXJtaW5hdG9yQ2hhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhciA9PT0gUE5DLmJhY2tzbGFzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyID0gdGhpcy5jaGFyU3RyZWFtLmdldE5leHRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY2hhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMuYjogY2hhckdlbi5hZGRDaGFyUG9pbnQoOCk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMuZjogY2hhckdlbi5hZGRDaGFyUG9pbnQoMTIpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUE5DLm46IGNoYXJHZW4uYWRkQ2hhclBvaW50KDEwKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFBOQy5yOiBjaGFyR2VuLmFkZENoYXJQb2ludCgxMyk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMudDogY2hhckdlbi5hZGRDaGFyUG9pbnQoOSk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMudjogY2hhckdlbi5hZGRDaGFyUG9pbnQoMTEpOyBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFBOQy54OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5oYW5kbGVTY2FuZ2l0cygyLCBjaGFyR2VuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGVzLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFBOQy51OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5oYW5kbGVTY2FuSGV4RGlnaXRzKDQsIGNoYXJHZW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoSWRlbnRpZnllcnMuaXNMaW5lVGVybWluYXRvcihjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyR2VuLmFkZENoYXJQb2ludChjaGFyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVOZXdMaW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51bmV4cGVjdGVkQ2hhcihcInVuY2xvc2VkIHN0cmluZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJHZW4uYWRkQ2hhclBvaW50KGNoYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW4gPSB0aGlzLmNyZWF0ZVRva2VuKFRva2VuVHlwZS5saXRlcmFsLCBjaGFyR2VuLmdldFN0cmluZygpLCBMaXRlcmFsU3ViVHlwZS5zdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5maW5pc2g7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRlTnVtYmVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYXJTdHJlYW0ubWF0Y2goUE5DLnplcm8pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGFyU3RyZWFtLm1hdGNoKFBOQy54KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhleE51bSA9IHRoaXMuc2NhbkhleERpZ2l0cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoZXhOdW0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51bmV4cGVjdGVkQ2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2VuID0gdGhpcy5jcmVhdGVUb2tlbihUb2tlblR5cGUubGl0ZXJhbCwgaGV4TnVtLCBMaXRlcmFsU3ViVHlwZS5udW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZmluaXNoXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uYndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBpbnQgPSB0aGlzLnNjYW5EaWdpdHMoKSxcclxuICAgICAgICAgICAgICAgIHBvaW50ID0gaW50Lmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hhclN0cmVhbS5tYXRjaChQTkMuZG90KSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRlY2ltYWwgPSB0aGlzLnNjYW5EZWNpbWFsKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVjaW1hbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ID0gaW50LmNvbmNhdChkZWNpbWFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2FuRXhwb25lbnNpYWxBbmRDcmVhdGVOdW1iZXIoaW50LCBwb2ludCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRlRG90T3JOdW1iZXIoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5md2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgbGV0IGRlY2ltYWwgPSB0aGlzLnNjYW5EZWNpbWFsKCk7XHJcbiAgICAgICAgICAgIGlmIChkZWNpbWFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNjYW5FeHBvbmVuc2lhbEFuZENyZWF0ZU51bWJlcihkZWNpbWFsLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5id2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlUHVuY3R1YXRpb25TaW5nbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0ZURpdk9yQ29tbWVudCgpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmZ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGNoYXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFBOQy5zbGFzaDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGVzLnNpbmdsZUNvbW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBQTkMuYXN0ZXJpc2s6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5tdWx0aUNvbW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBQTkMuYXNzaWduOlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmJ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5id2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVQdW5jdHVhdGlvblNpbmdsZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0ZVB1bmN0dWF0aW9uU2luZ2xlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5md2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuY3JlYXRlVG9rZW5Gcm9tUG9zKFRva2VuVHlwZS5wdW5jdHVhdGlvbik7XHJcbiAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZmluaXNoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0ZVdoaXRlU3BhY2UoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmZ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gU3RhdGVzLmluaXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRlTGluZVRlcm1pbmF0b3IoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgY29uc3QgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0ubWF0Y2hDb21wbGV4KG5leHRjaGFyID0+XHJcbiAgICAgICAgICAgICAgICAoY2hhciA9PT0gUE5DLmNyICYmIG5leHRjaGFyID09PSBQTkMubGYpXHJcbiAgICAgICAgICAgICAgICB8fCBuZXh0Y2hhciA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTmV3TGluZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gU3RhdGVzLmluaXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRlU2luZ2xlQ29tbWVudCgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKElkZW50aWZ5ZXJzLmlzTGluZVRlcm1pbmF0b3IoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU5ld0xpbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSB3aGlsZSAoY2hhciAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuY3JlYXRlVG9rZW5Gcm9tUG9zKFRva2VuVHlwZS5jb21tZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5maW5pc2g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRlTXVsdGlDb21tZW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09IFBOQy5hc3Rlcmlzaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoYXJTdHJlYW0ubWF0Y2goUE5DLnNsYXNoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudW5leHBlY3RlZENoYXIoXCJ1bmNsb3NlZCBzdHJpbmdcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChJZGVudGlmeWVycy5pc0xpbmVUZXJtaW5hdG9yKGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVOZXdMaW5lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuY3JlYXRlVG9rZW5Gcm9tUG9zKFRva2VuVHlwZS5jb21tZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5maW5pc2g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNjYW5Vbmljb2RlRXNjYXBlU2VxdWVuY2UoY2hhckdlbjogdXRpbGl0aWVzLklTdHJpbmdGcm9tQ2hhclBvaW50LCBjaGFyOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgaWYgKGNoYXIgPT09IFBOQy5iYWNrc2xhc2gpIHtcclxuICAgICAgICAgICAgICAgIGNoYXIgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0TmV4dENoYXIoKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSBQTkMudSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoZXhEaWdpdCA9IHRoaXMuc2NhbkhleERpZ2l0c1RpbWVzKDQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoZXhEaWdpdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJHZW4uYWRkQ2hhclBvaW50KGhleERpZ2l0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjaGFyR2VuLmFkZENoYXJQb2ludChjaGFyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGVSZWdleCgpOiBzdHJpbmcge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2hhckdlbjogdXRpbGl0aWVzLklTdHJpbmdGcm9tQ2hhclBvaW50ID0gdXRpbGl0aWVzLkNoYXJQb2ludHMuY3JlYXRlU3RyaW5nRnJvbUNoYXJQb2ludEdlbmVyYXRvcigpO1xyXG4gICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICBjaGFyR2VuLmFkZENoYXJQb2ludChjaGFyKTtcclxuXHJcbiAgICAgICAgICAgIGxldCByZWdleEJvZHlIYXNNb3JlQ2hhcnMgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgaW5DbGFzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB3aGlsZSAocmVnZXhCb2R5SGFzTW9yZUNoYXJzKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFyID0gdGhpcy5jaGFyU3RyZWFtLmdldE5leHRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudW5leHBlY3RlZENoYXIoXCJJbnZhbGlkIHJlZ3VsYXIgZXhwcmVzc2lvblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNoYXJHZW4uYWRkQ2hhclBvaW50KGNoYXIpO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChjaGFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMuYmFja3NsYXNoOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyID0gdGhpcy5jaGFyU3RyZWFtLmdldE5leHRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSB1bmRlZmluZWQgfHwgSWRlbnRpZnllcnMuaXNMaW5lVGVybWluYXRvcihjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudW5leHBlY3RlZENoYXIoXCJJbnZhbGlkIHJlZ3VsYXIgZXhwcmVzc2lvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyR2VuLmFkZENoYXJQb2ludChjaGFyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgUE5DLmxicmFja2V0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbkNsYXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgUE5DLnJicmFja2V0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5DbGFzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5DbGFzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFBOQy5zbGFzaDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnZXhCb2R5SGFzTW9yZUNoYXJzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gdW5kZWZpbmVkIHx8IElkZW50aWZ5ZXJzLmlzTGluZVRlcm1pbmF0b3IoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVuZXhwZWN0ZWRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNoYXIgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0TmV4dENoYXIoKTtcclxuICAgICAgICAgICAgICAgIGlmIChJZGVudGlmeWVycy5pc0lkZW50aWZpZXJQYXJ0KGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhckdlbi5hZGRDaGFyUG9pbnQoY2hhcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5id2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy90aGlzLmNoYXJTdHJlYW0uYndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW4gPSB0aGlzLmNyZWF0ZVRva2VuKFRva2VuVHlwZS5saXRlcmFsLCBjaGFyR2VuLmdldFN0cmluZygpLCBMaXRlcmFsU3ViVHlwZS5yZWdleCk7XHJcbiAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZmluaXNoO1xyXG4gICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vL1N0YXRlcy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIFNjYW5uZXJzXHJcbiAgICAgICAgcHJpdmF0ZSBzY2FuRXhwb25lbnNpYWxBbmRDcmVhdGVOdW1iZXIoaW50OiBudW1iZXJbXSwgcG9pbnQ6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIGxldCBleHAgPSB0aGlzLnNjYW5FeHBvbmVudGlhbCgpO1xyXG4gICAgICAgICAgICBpZiAoZXhwID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hhclN0cmVhbS5tYXRjaENvbXBsZXgoY2hhciA9PiBJZGVudGlmeWVycy5pc0lkZW50aWZpZXJQYXJ0KGNoYXIpKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudW5leHBlY3RlZENoYXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbnVtID0gdGhpcy5jcmVhdGVOdW1iZXIoaW50LCBwb2ludCwgZXhwKTtcclxuICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuY3JlYXRlVG9rZW4oVG9rZW5UeXBlLmxpdGVyYWwsIG51bSwgTGl0ZXJhbFN1YlR5cGUubnVtYmVyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5maW5pc2hcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2NhbkRpZ2l0cygpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFyLFxyXG4gICAgICAgICAgICAgICAgZGl0cyA9IFtdLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yUG9zID0gdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpO1xyXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKElkZW50aWZ5ZXJzLmlzRGlnaXQoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlnaXQgPSB1dGlsaXRpZXMuQ2hhclBvaW50cy5nZXREaWdpdEZyb21DaGFyUG9pbnQoY2hhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl0cy5wdXNoKGRpZ2l0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2hhciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uYndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJDdXJzb3Jwb3MgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCk7XHJcbiAgICAgICAgICAgIGlmIChjdXJyQ3Vyc29ycG9zIC0gY3Vyc29yUG9zICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGl0cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzY2FuRGVjaW1hbCgpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgICAgIGxldCBzdGFydFBvcyA9IHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKSxcclxuICAgICAgICAgICAgICAgIGRpZ2l0cyA9IHRoaXMuc2NhbkRpZ2l0cygpLFxyXG4gICAgICAgICAgICAgICAgZW5kUG9zID0gdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpLFxyXG4gICAgICAgICAgICAgICAgZGlnaXRSYW5nZSA9IGVuZFBvcyAtIHN0YXJ0UG9zO1xyXG4gICAgICAgICAgICBpZiAoZGlnaXRSYW5nZSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpZ2l0cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzY2FuRXhwb25lbnRpYWwoKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0TmV4dENoYXIoKTtcclxuICAgICAgICAgICAgaWYgKGNoYXIgPT09IFBOQy5leHAgfHwgY2hhciA9PT0gUE5DLmV4cGIpIHtcclxuICAgICAgICAgICAgICAgIGNoYXIgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0TmV4dENoYXIoKTtcclxuICAgICAgICAgICAgICAgIGxldCBuZWdhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gUE5DLm1pbnVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVnYXRpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhciAhPT0gUE5DLnBsdXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uYndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRpZ2l0cyA9IHRoaXMuc2NhbkRpZ2l0cygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpZ2l0cyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bmV4cGVjdGVkQ2hhcihcImV4cG9uZW50aWFsIHNob3VsZCBwb3N0Zml4ZWQgYnkgbnVtYmVyc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IHRoaXMuY3JlYXRlTnVtYmVyKGRpZ2l0cywgZGlnaXRzLmxlbmd0aCwgMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmVnYXRpdmUgPyAtbnVtIDogbnVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmJ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzY2FuSGV4RGlnaXRzVGltZXModGltZXM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgICAgIGxldCBzdGFydGluZ1BvcyA9IHRpbWVzO1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFJZGVudGlmeWVycy5pc0hleERpZ2l0KGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmJ3ZEN1cnNvclJhbmdlKHN0YXJ0aW5nUG9zIC0gKHRpbWVzIC0gMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSB3aGlsZSAoLS10aW1lcyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjdXJzb3JQb3MgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCksXHJcbiAgICAgICAgICAgICAgICBoZXhTdHIgPSB0aGlzLmNoYXJTdHJlYW0udG9rZW5pemUoY3Vyc29yUG9zIC0gc3RhcnRpbmdQb3MpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoaGV4U3RyLCAxNik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNjYW5IZXhEaWdpdHMoKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0TmV4dENoYXIoKTtcclxuICAgICAgICAgICAgbGV0IGhleExlbiA9IDA7XHJcbiAgICAgICAgICAgIHdoaWxlIChJZGVudGlmeWVycy5pc0hleERpZ2l0KGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICArK2hleExlbjtcclxuICAgICAgICAgICAgICAgIGNoYXIgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0TmV4dENoYXIoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGhleExlbiA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoYXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmJ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjdXJzb3JQb3MgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCksXHJcbiAgICAgICAgICAgICAgICBoZXhTdHIgPSB0aGlzLmNoYXJTdHJlYW0udG9rZW5pemUoY3Vyc29yUG9zIC0gaGV4TGVuKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGhleFN0ciwgMTYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgZ2VuUHVuY3R1YXRpb25TY2FubmVyKGNhbmRpY2F0ZVB1bmNzOiBudW1iZXJbXVtdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RMZW4gPSBfLmxhc3QoY2FuZGljYXRlUHVuY3MpLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIHB1bmNzTG9va3VwID0gXy5tYXAobmV3IEFycmF5KGxhc3RMZW4pLCAoKSA9PiBuZXcgT2JqZWN0KCkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjdXJyID0gbGFzdExlbiAtIDE7IGN1cnIgIT09IC0xOyAtLWN1cnIpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBjYW5kaWNhdGVQdW5jcy5sZW5ndGggLSAxOyBpICE9PSAtMTsgLS1pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYyA9IGNhbmRpY2F0ZVB1bmNzW2ldW2N1cnJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1bmNzTG9va3VwW2N1cnJdW2NdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjYW5ub3QgdXNlIGFycm93IGZ1bmN0aW9uIGJlY2F1c2UgaXQgY29uZnVzZSB0aGlzIHdpdGggX3RoaXMgXHJcbiAgICAgICAgICAgIC8vIGluIHRoZSBjb21wbGlsZWQgdHlwZXNjcmlwdCB2ZXJzaW9uXHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5md2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdExlbjsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0TmV4dENoYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXB1bmNzTG9va3VwW2ldW2NoYXJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGFyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5id2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRva2VuID0gdGhpcy5jcmVhdGVUb2tlbkZyb21Qb3MoVG9rZW5UeXBlLnB1bmN0dWF0aW9uLCB0aGlzLnN0YXJ0UG9zKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZmluaXNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vL1NjYW5uZXJzLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8gTGV4IG9iamVjdCBjcmVhdG9yc1xyXG4gICAgICAgIHByaXZhdGUgY3JlYXRlVG9rZW5Tb3VyY2VMb2NhdGlvbkZyb21DdXJzb3IoKTogSVRva2VuU291cmNlTG9jYXRpb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gVG9rZW5Tb3VyY2VMb2NhdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgbGluZTogdGhpcy5zdGFydExpbmVubyxcclxuICAgICAgICAgICAgICAgIGNvbHVtbjogdGhpcy5yZWxhdGl2ZVN0YXJ0Q3Vyc29yXHJcbiAgICAgICAgICAgIH0sIHRoaXMuZ2V0Q3VycmVudEN1cnNvclBvcygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgY3JlYXRlVG9rZW5Gcm9tUG9zKHR5cGU6IHN0cmluZyB8IFRva2VuVHlwZSwgc3ViVHlwZT86IHN0cmluZyk6IElUb2tlbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jaGFyU3RyZWFtLnRva2VuaXplKHRoaXMuYWJzb2x1dGVTdGFydEN1cnNvcik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVRva2VuKHR5cGUsIHZhbHVlLCBzdWJUeXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgY3JlYXRlVG9rZW4odHlwZTogc3RyaW5nIHwgVG9rZW5UeXBlLCB2YWx1ZTogYW55LCBzdWJUeXBlPzogc3RyaW5nIHwgTGl0ZXJhbFN1YlR5cGUpOiBJVG9rZW4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbjogSVRva2VuID0geyB0eXBlLCB2YWx1ZSwgc3ViVHlwZSB9O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxvYykge1xyXG4gICAgICAgICAgICAgICAgdG9rZW4ubG9jID0gdGhpcy5jcmVhdGVUb2tlblNvdXJjZUxvY2F0aW9uRnJvbUN1cnNvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgICAgICB9XHJcblx0XHRcclxuICAgICAgICAvLy8vLy8vLy8vLy8vL0xleCBvYmplY3QgY3JlYXRvcnMvLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8gSGFuZGxlcnNcclxuXHRcdFxyXG4gICAgICAgIHByaXZhdGUgZ2VuSW50ZWdlckZyb21BcnJheShkaWdpdHMsIGZyb20sIHRvKSB7XHJcbiAgICAgICAgICAgIGxldCBudW0gPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gZnJvbTsgaSA8IHRvOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIG51bSA9IDEwICogbnVtICsgZGlnaXRzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGNyZWF0ZU51bWJlcihkaWdpdHMsIHBvaW50LCBleHApIHtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0UG9pbnQgPSBwb2ludCArIGV4cCxcclxuICAgICAgICAgICAgICAgIGludFBhcnQgPSAwLCBkZWNQYXJ0ID0gMDtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0UG9pbnQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gdGhpcy5nZW5JbnRlZ2VyRnJvbUFycmF5KGRpZ2l0cywgMCwgZGlnaXRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtIC8gTWF0aC5wb3coMTAsIHBvaW50IC0gZXhwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydFBvaW50ID4gZGlnaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IHRoaXMuZ2VuSW50ZWdlckZyb21BcnJheShkaWdpdHMsIDAsIGRpZ2l0cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bSAqIE1hdGgucG93KDEwLCBzdGFydFBvaW50IC0gZGlnaXRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gdGhpcy5nZW5JbnRlZ2VyRnJvbUFycmF5KGRpZ2l0cywgMCwgc3RhcnRQb2ludCksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVjID0gdGhpcy5nZW5JbnRlZ2VyRnJvbUFycmF5KGRpZ2l0cywgc3RhcnRQb2ludCwgZGlnaXRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtICsgZGVjIC8gTWF0aC5wb3coMTAsIGRpZ2l0cy5sZW5ndGggLSBzdGFydFBvaW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBoYW5kbGVTY2FuSGV4RGlnaXRzKG51bTogbnVtYmVyLCBjaGFyR2VuOiB1dGlsaXRpZXMuSVN0cmluZ0Zyb21DaGFyUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgbGV0IGhleERpZ2l0ID0gdGhpcy5zY2FuSGV4RGlnaXRzVGltZXMobnVtKTtcclxuICAgICAgICAgICAgaWYgKGhleERpZ2l0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5leHBlY3RlZENoYXIoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNoYXJHZW4uYWRkQ2hhclBvaW50KGhleERpZ2l0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaGFuZGxlTmV3TGluZSgpIHtcclxuICAgICAgICAgICAgKyt0aGlzLmxpbmVubztcclxuICAgICAgICAgICAgdGhpcy5jdXJyTGluZUN1cnNvciA9IHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdW5leHBlY3RlZENoYXIobXNnPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgbXNnID0gbXNnIHx8IHRoaXMuY2hhclN0cmVhbS50b2tlbml6ZSh0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCkgLSAxKTtcclxuICAgICAgICAgICAgdGhpcy5leGNlcHRpb25IYW5kbGVyLmFkZEV4Y2VwdGlvbihtc2csIHRoaXMubGluZW5vLCB0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gU3RhdGVzLmVycm9yO1xyXG4gICAgICAgIH0gICAgICAgIFx0XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vSGFuZGxlcnMvLy8vLy8vLy8vLy8vLy8vXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRva2VuU291cmNlTG9jYXRpb24ge1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZShzdGFydDogbGV4aWNhbC5JVG9rZW5Qb3NpdGlvbiwgZW5kOiBsZXhpY2FsLklUb2tlblBvc2l0aW9uKTogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN0YXJ0LCBlbmQgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4iLG51bGwsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90c0RlZmluaXRpb25zL3RzZC5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3V0aWxpdGllcy9DaGFyUG9pbnRzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIklDaGFyYWN0ZXJTdHJlYW0uZC50c1wiIC8+XHJcblxyXG5tb2R1bGUgdHJsLmZyb250ZW5kLmxleGljYWwge1xyXG5cdFxyXG5cdGV4cG9ydCBjbGFzcyBDaGFyYWN0ZXJTdHJlYW0gaW1wbGVtZW50cyBJQ2hhcmFjdGVyU3RyZWFtIHtcclxuXHRcdHByaXZhdGUgY3Vyc29yOiBudW1iZXI7XHJcblxyXG5cdFx0cHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgc3JjOiBzdHJpbmcpIHtcclxuXHRcdFx0dGhpcy5jdXJzb3IgPSAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdHB1YmxpYyBnZXROZXh0Q2hhcigpOiBudW1iZXIge1xyXG5cdFx0XHRpZih0aGlzLmhhc05leHQoKSkge1xyXG5cdFx0XHRcdHJldHVybiB1dGlsaXRpZXMuQ2hhclBvaW50cy5jb2RlUG9pbnRBdCh0aGlzLnNyYywgdGhpcy5jdXJzb3IrKyk7XHJcblx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwdWJsaWMgZ2V0Q2hhcigpOiBudW1iZXIge1xyXG5cdFx0XHRyZXR1cm4gdXRpbGl0aWVzLkNoYXJQb2ludHMuY29kZVBvaW50QXQodGhpcy5zcmMsIHRoaXMuY3Vyc29yKTtcclxuXHRcdH1cclxuXHJcblx0XHRwdWJsaWMgZ2V0Q3Vyc29yKCk6IG51bWJlciB7XHJcblx0XHRcdHJldHVybiB0aGlzLmN1cnNvcjtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIGJ3ZEN1cnNvcigpIHtcclxuXHRcdFx0LS10aGlzLmN1cnNvcjtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIGZ3ZEN1cnNvcigpIHtcclxuXHRcdFx0aWYodGhpcy5oYXNOZXh0KCkpIHtcclxuXHRcdFx0XHQrK3RoaXMuY3Vyc29yO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHB1YmxpYyBid2RDdXJzb3JSYW5nZShyYW5nZTogbnVtYmVyKSB7XHJcblx0XHRcdHRoaXMuY3Vyc29yID0gTWF0aC5tYXgodGhpcy5jdXJzb3IgLSByYW5nZSwgMCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHB1YmxpYyB0b2tlbml6ZShzdGFydFBvczogbnVtYmVyKTogc3RyaW5nIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuc3JjLnN1YnN0cmluZyhzdGFydFBvcywgdGhpcy5jdXJzb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwdWJsaWMgbWF0Y2goY2hhck1hdGNoOiBudW1iZXIpOiBib29sZWFuIHtcclxuXHRcdFx0bGV0IGNoYXIgPSB0aGlzLmdldE5leHRDaGFyKCk7XHJcblx0XHRcdGlmKGNoYXIgPT09IGNoYXJNYXRjaCkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGlmKGNoYXIgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0dGhpcy5id2RDdXJzb3IoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHB1YmxpYyBtYXRjaENvbXBsZXgoY29tcGFyYXRvcjogKGNoYXI6IG51bWJlcikgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xyXG5cdFx0XHRsZXQgY2hhciA9IHRoaXMuZ2V0TmV4dENoYXIoKTtcclxuXHRcdFx0aWYoY29tcGFyYXRvcihjaGFyKSkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGlmKGNoYXIgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0dGhpcy5id2RDdXJzb3IoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHB1YmxpYyBpc0VvZigpOiBib29sZWFuIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY3Vyc29yID49IHRoaXMuc3JjLmxlbmd0aDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHJpdmF0ZSBoYXNOZXh0KCk6IGJvb2xlYW4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jdXJzb3IgPCB0aGlzLnNyYy5sZW5ndGg7XHJcblx0XHR9XHJcblx0fVxyXG59IiwibW9kdWxlIHRybC5mcm9udGVuZC51dGlsaXRpZXMge1xyXG4gICAgXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gYXNzZXJ0KGNvbmQ6IGFueSwgbXNnPzogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYoIWNvbmQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBc3NlcnRpb24gZmFpbDogJHttc2d9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiSU5vZGUudHNcIiAvPlxyXG5cclxubW9kdWxlIHRybC5mcm9udGVuZC5zeW50YXgge1xyXG4gICAgXHJcbiAgICBleHBvcnQgY2xhc3MgTm9kZUZhY3Rvcnkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZW5hYmxlUG9zOiBib29sZWFuKSB7fVxyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgY3JlYXRlTm9kZShub2RlLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZW5hYmxlUG9zKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmxvYyA9IGxvYztcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVQcm9ncmFtKGJvZHk6IElTdGF0ZW1lbnRbXSwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElQcm9ncmFtIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlByb2dyYW1cIixcclxuICAgICAgICAgICAgICAgIGJvZHlcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudEVtcHR5KGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJRW1wdHlTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRW1wdHlTdGF0ZW1lbnRcIlxyXG4gICAgICAgICAgICB9LCBsb2MpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50QmxvY2soYm9keTogSVN0YXRlbWVudFtdLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUJsb2NrU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJsb2NrU3RhdGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICBib2R5XHJcbiAgICAgICAgICAgIH0sIGxvYyk7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTdGF0ZW1lbnRFeHByZXNzaW9uKGV4cHJlc3Npb246IElFeHByZXNzaW9uLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUV4cHJlc3Npb25TdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRXhwcmVzc2lvblN0YXRlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvblxyXG4gICAgICAgICAgICB9LCBsb2MpOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50SWYodGVzdDogSUV4cHJlc3Npb24sIGNvbnNlcXVlbnQ6IElTdGF0ZW1lbnQsIGFsdGVybmF0ZT86IElTdGF0ZW1lbnQsIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJSWZTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiSWZTdGF0ZW1lbnRcIixcclxuICAgICAgICAgICAgICAgIHRlc3QsXHJcbiAgICAgICAgICAgICAgICBjb25zZXF1ZW50LFxyXG4gICAgICAgICAgICAgICAgYWx0ZXJuYXRlXHJcbiAgICAgICAgICAgIH0sIGxvYyk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50QnJlYWsobGFiZWw6IElJZGVudGlmaWVyLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUJyZWFrU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJyZWFrU3RhdGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICB9LCBsb2MpOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudENvbnRpbnVlKGxhYmVsOiBJSWRlbnRpZmllciwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElDb250aW51ZVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJDb250aW51ZVN0YXRlbWVudFwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgIH0sIGxvYyk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50V2l0aChvYmo6IElFeHByZXNzaW9uLCBib2R5OiBJU3RhdGVtZW50LCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVdpdGhTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiV2l0aFN0YXRlbWVudFwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9iaixcclxuICAgICAgICAgICAgICAgIGJvZHlcclxuICAgICAgICAgICAgfSwgbG9jKTsgXHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudFN3aXRjaChkaXNjcmltaW5hbnQ6IElFeHByZXNzaW9uLCBjYXNlczogSVN3aXRjaENhc2VbXSwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElTd2l0Y2hTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiU3dpdGNoU3RhdGVtZW50XCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGlzY3JpbWluYW50LFxyXG4gICAgICAgICAgICAgICAgY2FzZXNcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudFJldHVybihhcmd1bWVudDogSUV4cHJlc3Npb24sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJUmV0dXJuU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlJldHVyblN0YXRlbWVudFwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFyZ3VtZW50XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTdGF0ZW1lbnRMYWJlbGVkKGxhYmVsOiBJSWRlbnRpZmllciwgYm9keTogSVN0YXRlbWVudCwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElMYWJlbGVkU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkxhYmVsZWRTdGF0ZW1lbnRcIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgICAgIGJvZHlcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50VGhyb3coYXJndW1lbnQ6IElFeHByZXNzaW9uLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVRocm93U3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlRocm93U3RhdGVtZW50XCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYXJndW1lbnRcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudFRyeShibG9jazogSUJsb2NrU3RhdGVtZW50LCBoYW5kbGVyOiBJQ2F0Y2hDbGF1c2UsIGZpbmFsaXplcjogSUJsb2NrU3RhdGVtZW50LCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVRyeVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJUcnlTdGF0ZW1lbnRcIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBibG9jayxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXIsXHJcbiAgICAgICAgICAgICAgICBmaW5hbGl6ZXJcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudFdoaWxlKHRlc3Q6IElFeHByZXNzaW9uLCBib2R5OiBJU3RhdGVtZW50LCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVdoaWxlU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIldoaWxlU3RhdGVtZW50XCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGVzdCxcclxuICAgICAgICAgICAgICAgIGJvZHlcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudERvV2hpbGUoYm9keTogSVN0YXRlbWVudCwgdGVzdDogSUV4cHJlc3Npb24sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJRG9XaGlsZVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJEb1doaWxlU3RhdGVtZW50XCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYm9keSxcclxuICAgICAgICAgICAgICAgIHRlc3RcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudEZvcihpbml0OiBJVmFyaWFibGVEZWNsYXJhdGlvbiB8IElFeHByZXNzaW9uLCB0ZXN0OiBJRXhwcmVzc2lvbiwgdXBkYXRlOiBJRXhwcmVzc2lvbiwgYm9keTogSVN0YXRlbWVudCwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElGb3JTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRm9yU3RhdGVtZW50XCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW5pdCxcclxuICAgICAgICAgICAgICAgIHRlc3QsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGUsXHJcbiAgICAgICAgICAgICAgICBib2R5XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTdGF0ZW1lbnRGb3JJbihsZWZ0OiBJVmFyaWFibGVEZWNsYXJhdGlvbiB8IElFeHByZXNzaW9uLCByaWdodDogSUV4cHJlc3Npb24sIGJvZHk6IElTdGF0ZW1lbnQsIGVhY2g6IGJvb2xlYW4sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJRm9ySW5TdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRm9ySW5TdGF0ZW1lbnRcIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZWZ0LFxyXG4gICAgICAgICAgICAgICAgcmlnaHQsXHJcbiAgICAgICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICAgICAgZWFjaFxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50RGVidWdnZXIobG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElEZWJ1Z2dlclN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJGb3JJblN0YXRlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgbG9jXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVEZWNsYXJhdGlvbkZ1bmN0aW9uKGlkOiBJSWRlbnRpZmllciwgcGFyYW1zOiBJSWRlbnRpZmllcltdLCBib2R5OiBJQmxvY2tTdGF0ZW1lbnQsIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJRnVuY3Rpb25EZWNsYXJhdGlvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJGdW5jdGlvbkRlY2xhcmF0aW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXMsXHJcbiAgICAgICAgICAgICAgICBib2R5XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVEZWNsYXJhdGlvblZhcmlhYmxlKGRlY2xhcmF0aW9uczogSVZhcmlhYmxlRGVjbGFyYXRvcltdLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVZhcmlhYmxlRGVjbGFyYXRpb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiVmFyaWFibGVEZWNsYXJhdGlvblwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucyxcclxuICAgICAgICAgICAgICAgIGtpbmQ6IFwidmFyXCJcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVZhcmlhYmxlRGVjbGFyYXRvcihpZDogSUlkZW50aWZpZXIsIGluaXQ6IElFeHByZXNzaW9uLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVZhcmlhYmxlRGVjbGFyYXRvciB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJWYXJpYWJsZURlY2xhcmF0b3JcIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgIGluaXRcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUV4cHJlc3Npb25UaGlzKGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJVGhpc0V4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiVGhpc0V4cHJlc3Npb25cIixcclxuICAgICAgICAgICAgICAgIGxvY1xyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRXhwcmVzc2lvbkFycmF5KGVsZW1lbnRzOiBJRXhwcmVzc2lvbltdLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUFycmF5RXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJBcnJheUV4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50c1xyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRXhwcmVzc2lvbk9iamVjdChwcm9wZXJ0aWVzOiBJUHJvcGVydHlbXSwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElPYmplY3RFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIk9iamVjdEV4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVPYmplY3RQcm9wZXJ0eShrZXk6IElMaXRlcmFsIHwgSUlkZW50aWZpZXIsIHZhbHVlOiBJRXhwcmVzc2lvbiwga2luZDogc3RyaW5nLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVByb3BlcnR5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlByb3BlcnR5XCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBraW5kXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVFeHByZXNzaW9uRnVuY3Rpb24oaWQ6IElJZGVudGlmaWVyLCBwYXJhbXM6IElJZGVudGlmaWVyW10sIGJvZHk6IElCbG9ja1N0YXRlbWVudCwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElGdW5jdGlvbkV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRnVuY3Rpb25FeHByZXNzaW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXMsXHJcbiAgICAgICAgICAgICAgICBib2R5XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVFeHByZXNzaW9uU2VxdWVuY2UoZXhwcmVzc2lvbnM6IElFeHByZXNzaW9uW10sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJU2VxdWVuY2VFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlNlcXVlbmNlRXhwcmVzc2lvblwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb25zXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVFeHByZXNzaW9uVW5hcnkob3BlcmF0b3I6IHN0cmluZywgcHJlZml4OiBib29sZWFuLCBhcmd1bWVudDogSUV4cHJlc3Npb24sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJVW5hcnlFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlVuYXJ5RXhwcmVzc2lvblwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yLFxyXG4gICAgICAgICAgICAgICAgcHJlZml4LFxyXG4gICAgICAgICAgICAgICAgYXJndW1lbnRcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUV4cHJlc3Npb25CaW5hcnkob3BlcmF0b3I6IHN0cmluZywgbGVmdDogSUV4cHJlc3Npb24sIHJpZ2h0OiBJRXhwcmVzc2lvbiwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElCaW5hcnlFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJpbmFyeUV4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcixcclxuICAgICAgICAgICAgICAgIGxlZnQsXHJcbiAgICAgICAgICAgICAgICByaWdodFxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRXhwcmVzc2lvbkFzc2lnbm1lbnQob3BlcmF0b3I6IHN0cmluZywgbGVmdDogSUV4cHJlc3Npb24sIHJpZ2h0OiBJRXhwcmVzc2lvbiwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElBc3NpZ25tZW50RXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJBc3NpZ25tZW50RXhwcmVzc2lvblwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yLFxyXG4gICAgICAgICAgICAgICAgbGVmdCxcclxuICAgICAgICAgICAgICAgIHJpZ2h0XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVFeHByZXNzaW9uVXBkYXRlKG9wZXJhdG9yOiBzdHJpbmcsIGFyZ3VtZW50OiBJRXhwcmVzc2lvbiwgcHJlZml4OiBib29sZWFuLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVVwZGF0ZUV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiVXBkYXRlRXhwcmVzc2lvblwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yLFxyXG4gICAgICAgICAgICAgICAgYXJndW1lbnQsXHJcbiAgICAgICAgICAgICAgICBwcmVmaXhcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUV4cHJlc3Npb25Mb2dpY2FsKG9wZXJhdG9yOiBzdHJpbmcsIGxlZnQ6IElFeHByZXNzaW9uLCByaWdodDogSUV4cHJlc3Npb24sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJTG9naWNhbEV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiTG9naWNhbEV4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcixcclxuICAgICAgICAgICAgICAgIGxlZnQsXHJcbiAgICAgICAgICAgICAgICByaWdodFxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRXhwcmVzc2lvbkNvbmRpdGlvbmFsKHRlc3Q6IElFeHByZXNzaW9uLCBhbHRlcm5hdGU6IElFeHByZXNzaW9uLCBjb25zZXF1ZW50OiBJRXhwcmVzc2lvbiwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElDb25kaXRpb25hbEV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQ29uZGl0aW9uYWxFeHByZXNzaW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGVzdCxcclxuICAgICAgICAgICAgICAgIGFsdGVybmF0ZSxcclxuICAgICAgICAgICAgICAgIGNvbnNlcXVlbnRcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUV4cHJlc3Npb25OZXcoY2FsbGVlOiBJRXhwcmVzc2lvbiwgYXJnczogSUV4cHJlc3Npb25bXSwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElOZXdFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIk5ld0V4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjYWxsZWUsXHJcbiAgICAgICAgICAgICAgICBhcmd1bWVudHM6IGFyZ3NcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUV4cHJlc3Npb25DYWxsKGNhbGxlZTogSUV4cHJlc3Npb24sIGFyZ3M6IElFeHByZXNzaW9uW10sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJQ2FsbEV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQ2FsbEV4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjYWxsZWUsXHJcbiAgICAgICAgICAgICAgICBhcmd1bWVudHM6IGFyZ3NcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUV4cHJlc3Npb25NZW1iZXIob2JqZWN0OiBJRXhwcmVzc2lvbiwgcHJvcGVydHk6IElJZGVudGlmaWVyIHwgSUV4cHJlc3Npb24sIGNvbXB1dGVkOiBib29sZWFuLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSU1lbWJlckV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiTWVtYmVyRXhwcmVzc2lvblwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9iamVjdCxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgY29tcHV0ZWRcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN3aXRjaENhc2UodGVzdDogSUV4cHJlc3Npb24sIGNvbnNlcXVlbnQ6IElTdGF0ZW1lbnRbXSwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElTd2l0Y2hDYXNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlN3aXRjaENhc2VcIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0ZXN0LFxyXG4gICAgICAgICAgICAgICAgY29uc2VxdWVudFxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlQ2F0Y2hDbGF1c2UocGFyYW06IElJZGVudGlmaWVyLCBib2R5OiBJQmxvY2tTdGF0ZW1lbnQsIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJQ2F0Y2hDbGF1c2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQ2F0Y2hDbGF1c2VcIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwYXJhbSxcclxuICAgICAgICAgICAgICAgIGJvZHlcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUlkZW50aWZpZXIobmFtZTogc3RyaW5nLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUlkZW50aWZpZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiSWRlbnRpZmllclwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUxpdGVyYWwodmFsdWU6IHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXIgfCBJUmVnRXhwLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUxpdGVyYWwge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiTGl0ZXJhbFwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90c0RlZmluaXRpb25zL3RzZC5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2xleGljYWwvTGV4ZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdXRpbGl0aWVzL0Fzc2VydGlvbi50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi91dGlsaXRpZXMvRXhjZXB0aW9uLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2xleGljYWwvQ2hhcmFjdGVyU3RyZWFtLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2xleGljYWwvVG9rZW5EZWZpbml0aW9ucy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJOb2RlRmFjdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJJUGFyc2VyLmQudHNcIiAvPlxyXG5cclxubW9kdWxlIHRybC5mcm9udGVuZC5zeW50YXgge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBQYXJzZXIgaW1wbGVtZW50cyBJUGFyc2VyIHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBub2RlRmFjdG9yeTogTm9kZUZhY3Rvcnk7XHJcbiAgICAgICAgcHJpdmF0ZSBwYXJzZUV4Y2VwdGlvbjogdXRpbGl0aWVzLklFeGNlcHRpb25IYW5kbGVyO1xyXG5cclxuICAgICAgICBwcml2YXRlIGNoYXJTdHJlYW06IGxleGljYWwuSUNoYXJhY3RlclN0cmVhbTtcclxuICAgICAgICBwcml2YXRlIGxleEV4Y2VwdGlvbjogdXRpbGl0aWVzLklFeGNlcHRpb25IYW5kbGVyO1xyXG4gICAgICAgIHByaXZhdGUgbGV4OiBsZXhpY2FsLklMZXhlcjtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpbkZvckluOiBib29sZWFuO1xyXG4gICAgICAgIHByaXZhdGUgaW5Mb29wTXV0ZXg6IG51bWJlcltdO1xyXG4gICAgICAgIHByaXZhdGUgaW5Td2l0Y2hNdXRleDogbnVtYmVyW107XHJcbiAgICAgICAgcHJpdmF0ZSBpbkZ1bmN0aW9uTXV0ZXg6IG51bWJlcjtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgZGVmYXVsdFBhcnNlck9wdGlvbnM6IElQYXJzZXJPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBsb2M6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b2xlcmF0ZUVycm9yczogZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBsZXhlck9wdGlvbnM6IGxleGljYWwuSUxleGVyT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbG9jOiB0cnVlLFxyXG4gICAgICAgICAgICByZWFkYWJsZVRva2Vuc01vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpbmNsdWRlQ29tbWVudHNBc05vcm1hbFRva2VuczogZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgY2hhcnM6IHN0cmluZyxcclxuICAgICAgICAgICAgcHJpdmF0ZSBvcHRpb25zPzogSVBhcnNlck9wdGlvbnNcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gXy5kZWZhdWx0cyhcclxuICAgICAgICAgICAgICAgIF8uY2xvbmUob3B0aW9ucyB8fCB7fSksXHJcbiAgICAgICAgICAgICAgICBQYXJzZXIuZGVmYXVsdFBhcnNlck9wdGlvbnNcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlRmFjdG9yeSA9IG5ldyBOb2RlRmFjdG9yeSh0aGlzLm9wdGlvbnMubG9jKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJzZUV4Y2VwdGlvbiA9IG5ldyB1dGlsaXRpZXMuRXhjZXB0aW9uSGFuZGxlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtID0gbmV3IGxleGljYWwuQ2hhcmFjdGVyU3RyZWFtKGNoYXJzKTtcclxuICAgICAgICAgICAgdGhpcy5sZXhFeGNlcHRpb24gPSBuZXcgdXRpbGl0aWVzLkV4Y2VwdGlvbkhhbmRsZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5sZXggPSBuZXcgbGV4aWNhbC5MZXhlcih0aGlzLmNoYXJTdHJlYW0sIHRoaXMubGV4RXhjZXB0aW9uLCBQYXJzZXIubGV4ZXJPcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW5Gb3JJbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmluTG9vcE11dGV4ID0gWzBdO1xyXG4gICAgICAgICAgICB0aGlzLmluU3dpdGNoTXV0ZXggPSBbMF07XHJcbiAgICAgICAgICAgIHRoaXMuaW5GdW5jdGlvbk11dGV4ID0gMDtcclxuICAgICAgICB9ICAgICAgIFxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8gQ29udGV4dCBVdGlsaXRpZXNcclxuXHJcbiAgICAgICAgLy8gcHJpdmF0ZSBpc0tleXdvcmQodG9rZW46IGxleGljYWwuSVRva2VuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLmxleC5pc0tleXdvcmQodG9rZW4pO1xyXG4gICAgICAgIC8vICAgICBpZiAoaXNWYWxpZCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRva2VuLnZhbHVlID09PSBcImluXCIgPyB0aGlzLmluRm9ySW4gOiB0cnVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vaXRlcmF0aW9uIG11dGV4XHJcbiAgICAgICAgcHJpdmF0ZSBiZWdpbkl0ZXJhdGlvbigpIHtcclxuICAgICAgICAgICAgKyt0aGlzLmluTG9vcE11dGV4W3RoaXMuaW5Mb29wTXV0ZXgubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGZpbmlzaEl0ZXJhdGlvbigpIHtcclxuICAgICAgICAgICAgLS10aGlzLmluTG9vcE11dGV4W3RoaXMuaW5Mb29wTXV0ZXgubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIG5ld0l0ZXJhdGlvblNjb3BlKCkge1xyXG4gICAgICAgICAgICB0aGlzLmluTG9vcE11dGV4LnB1c2goMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHJlc3RvcmVJdGVyYXRpb25TY29wZSgpIHtcclxuICAgICAgICAgICAgY29uc3QgY3Vyckl0ZXJhdGlvbk11dGV4ID0gdGhpcy5pbkxvb3BNdXRleC5wb3AoKTtcclxuICAgICAgICAgICAgdXRpbGl0aWVzLmFzc2VydChjdXJySXRlcmF0aW9uTXV0ZXggPT09IDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpc09uSXRlcmF0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbkxvb3BNdXRleFt0aGlzLmluTG9vcE11dGV4Lmxlbmd0aCAtIDFdID4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vc3dpdGNoIG11dGV4XHJcbiAgICAgICAgcHJpdmF0ZSBiZWdpblN3aXRjaCgpIHtcclxuICAgICAgICAgICAgKyt0aGlzLmluU3dpdGNoTXV0ZXhbdGhpcy5pblN3aXRjaE11dGV4Lmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmaW5pc2hTd2l0Y2goKSB7XHJcbiAgICAgICAgICAgIC0tdGhpcy5pblN3aXRjaE11dGV4W3RoaXMuaW5Td2l0Y2hNdXRleC5sZW5ndGggLSAxXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgbmV3U3dpdGNoU2NvcGUoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5Td2l0Y2hNdXRleC5wdXNoKDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZXN0b3JlU3dpdGNoU2NvcGUoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJTd2l0Y2hNdXRleCA9IHRoaXMuaW5Td2l0Y2hNdXRleC5wb3AoKTtcclxuICAgICAgICAgICAgdXRpbGl0aWVzLmFzc2VydChjdXJyU3dpdGNoTXV0ZXggPT09IDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpc09uU3dpdGNoKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pblN3aXRjaE11dGV4W3RoaXMuaW5Td2l0Y2hNdXRleC5sZW5ndGggLSAxXSA+IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vZnVuY3Rpb24gbXV0ZXhcclxuICAgICAgICBwcml2YXRlIGJlZ2luRnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICsrdGhpcy5pbkZ1bmN0aW9uTXV0ZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGZpbmlzaEZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAtLXRoaXMuaW5GdW5jdGlvbk11dGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpc09uRnVuY3Rpb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluRnVuY3Rpb25NdXRleCA+IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy9Db250ZXh0IFV0aWxpdGllcy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyBQYXJzZSBVdGlsaXRpZXNcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgZ2V0RXhjZXB0aW9ucygpOiB1dGlsaXRpZXMuSUV4Y2VwdGlvbkhhbmRsZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUV4Y2VwdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgYWRkRXhjZXB0aW9uKHRva2VuOiBsZXhpY2FsLklUb2tlbikge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMubGV4LmlzRW9mKHRva2VuKSA/IFwiZW5kIG9mIGZpbGVcIiA6IHRva2VuLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnNlRXhjZXB0aW9uLmFkZEV4Y2VwdGlvbihcclxuICAgICAgICAgICAgICAgIGBVbmRleHBlY3RlZCB0b2tlbjogJyR7dmFsdWV9J2AsXHJcbiAgICAgICAgICAgICAgICB0b2tlbi5sb2Muc3RhcnQubGluZSxcclxuICAgICAgICAgICAgICAgIHRva2VuLmxvYy5zdGFydC5jb2x1bW5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZGVsZWdhdGVMZXhpY2FsRXJyb3JzKCkge1xyXG4gICAgICAgICAgICBjb25zdCBsZXhFeGNlcHRpb25zID0gdGhpcy5sZXhFeGNlcHRpb24uZ2V0RXhjZXB0aW9ucygpO1xyXG4gICAgICAgICAgICBfLmVhY2gobGV4RXhjZXB0aW9ucywgbGV4RXhjZXB0aW9uID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnNlRXhjZXB0aW9uLmFkZEV4Y2VwdGlvbihsZXhFeGNlcHRpb24ubXNnLCBsZXhFeGNlcHRpb24ucG9zLmxpbmUsIGxleEV4Y2VwdGlvbi5wb3MuY29sdW1uKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGNhblRvbGVyYXRlRXJyb3IoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhdGVzdFRva2VuID0gdGhpcy5sZXgubGF0ZXN0VG9rZW4oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy50b2xlcmF0ZUVycm9yc1xyXG4gICAgICAgICAgICAgICAgJiYgbGF0ZXN0VG9rZW5cclxuICAgICAgICAgICAgICAgICYmICEodGhpcy5sZXguaXNFb2YobGF0ZXN0VG9rZW4pIHx8IHRoaXMubGV4LmlzRXJyb3IobGF0ZXN0VG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgcGFyc2VTdGF0ZW1lbnRJZkNhblRvbGVyYXRlKHN0bXRzOiBJU3RhdGVtZW50W10pOiBib29sZWFuIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RtdCA9IHRoaXMucGFyc2VTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgaWYgKHN0bXQpIHtcclxuICAgICAgICAgICAgICAgIHN0bXRzLnB1c2goc3RtdCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYW5Ub2xlcmF0ZUVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHRyaW1PcHRpb25hbFNlbWljb2xvbigpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCI7XCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5Jc0luU2FtZUxpbmUodG9rZW4pXHJcbiAgICAgICAgICAgICAgICAmJiAhdGhpcy5sZXguaXNFb2YodG9rZW4pXHJcbiAgICAgICAgICAgICAgICAmJiAhdGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIn1cIilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV4Y2VwdGlvbih0b2tlbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHRyYWNrUG9zaXRpb25VbmFyeSh0b2tlbjogbGV4aWNhbC5JVG9rZW4pOiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuLmxvYztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdHJhY2tQb3NpdGlvbkJ5UG9zKHN0YXJ0UG9zOiBsZXhpY2FsLklUb2tlblBvc2l0aW9uKTogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhdGVzdFRva2VuID0gdGhpcy5sZXgubGF0ZXN0VG9rZW4oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGxleGljYWwuVG9rZW5Tb3VyY2VMb2NhdGlvbi5jcmVhdGUoc3RhcnRQb3MsIGxhdGVzdFRva2VuLmxvYy5lbmQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB0cmFja1Bvc2l0aW9uQnlUb2tlbihzdGFydFRva2VuOiBsZXhpY2FsLklUb2tlbik6IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24ge1xyXG4gICAgICAgICAgICBjb25zdCBsYXRlc3RUb2tlbiA9IHRoaXMubGV4LmxhdGVzdFRva2VuKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBsZXhpY2FsLlRva2VuU291cmNlTG9jYXRpb24uY3JlYXRlKHN0YXJ0VG9rZW4ubG9jLnN0YXJ0LCBsYXRlc3RUb2tlbi5sb2MuZW5kKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZXhwZWN0VHlwZSh2YWx1ZTogc3RyaW5nLCB0eXBlQ2hlY2tlcjogKHRva2VuOiBsZXhpY2FsLklUb2tlbiwgdmFsdWU6IHN0cmluZykgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodHlwZUNoZWNrZXIuY2FsbCh0aGlzLmxleCwgdG9rZW4sIHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hZGRFeGNlcHRpb24odG9rZW4pO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGV4cGVjdFB1bmN0dWF0aW9uKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwZWN0VHlwZSh2YWx1ZSwgKHRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBleHBlY3RLZXl3b3JkKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwZWN0VHlwZSh2YWx1ZSwgKHRoaXMubGV4LmlzS2V5d29yZFZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHRva2VuSXNJblNhbWVMaW5lKHRva2VuOiBsZXhpY2FsLklUb2tlbik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW4ubG9jLmVuZC5saW5lID09PSB0aGlzLmxleC5sYXRlc3RUb2tlbigpLmxvYy5lbmQubGluZTtcclxuICAgICAgICB9ICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy9QYXJzZSBVdGlsaXRpZXMvLy8vLy8vLy8vLy8vICAgXHJcblxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8gUGFyc2UgUHJvZ3JhbVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2UoKTogSVByb2dyYW0ge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzRXJyb3IoaW5pdGlhbFRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZUxleGljYWxFcnJvcnMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RtdHMgPSB0aGlzLnBhcnNlU291cmNlRWxlbWVudHMoKTtcclxuICAgICAgICAgICAgaWYgKCFzdG10cykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzRW9mKGluaXRpYWxUb2tlbikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVByb2dyYW0oc3RtdHMsIHRoaXMudHJhY2tQb3NpdGlvblVuYXJ5KGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVByb2dyYW0oc3RtdHMsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VTb3VyY2VFbGVtZW50cygpOiBJU3RhdGVtZW50W10ge1xyXG4gICAgICAgICAgICBjb25zdCBzdG10czogSVN0YXRlbWVudFtdID0gW107XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmxleC5oYXNOZXh0KCkgJiYgdGhpcy5wYXJzZVN0YXRlbWVudElmQ2FuVG9sZXJhdGUoc3RtdHMpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0bXRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLy8vLy8vLy8vLy8vL1BhcnNlIFByb2dyYW0vLy8vLy8vLy8vLy8vLy8vIFxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8gUGFyc2UgU3RhdGVtZW50c1xyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNLZXl3b3JkKHRva2VuKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodG9rZW4udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidmFyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVmFyaWFibGVTdGF0ZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImlmXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlSWZTdGF0ZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIndoaWxlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlV2hpbGVTdGF0ZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRvXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRG9XaGlsZVN0YXRlbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZm9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRm9yU3RhdGVtZW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb250aW51ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUNvbnRpbnVlU3RhdGVtZW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJicmVha1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUJyZWFrU3RhdGVtZW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ3aXRoXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlV2l0aFN0YXRlbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3dpdGNoXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlU3dpdGNoU3RhdGVtZW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0aHJvd1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVRocm93U3RhdGVtZW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0cnlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VUcnlTdGF0ZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRlYnVnZ2VyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRGVidWdnZXJTdGF0ZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZ1bmN0aW9uXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRnVuY3Rpb24odHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyZXR1cm5cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VSZXR1cm5TdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uKHRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0b2tlbi52YWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwie1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUJsb2NrU3RhdGVtZW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCI7XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRW1wdHlTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmxleC5pc0lkZW50aWZpZXIodG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUxhYmVsZWRTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUV4cHJlc3Npb25TdGF0ZW1lbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUJsb2NrU3RhdGVtZW50KCk6IElCbG9ja1N0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCJ7XCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdG10czogSVN0YXRlbWVudFtdID0gW107XHJcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICB3aGlsZSAoIXRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCJ9XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucGFyc2VTdGF0ZW1lbnRJZkNhblRvbGVyYXRlKHN0bXRzKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIn1cIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudEJsb2NrKHN0bXRzLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlRW1wdHlTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIjtcIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudEVtcHR5KHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUlmU3RhdGVtZW50KCk6IElTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgY29uc3QgdGVzdEV4cHIgPSB0aGlzLnBhcnNlS2V5d29yZExwYXJFeHByZXNzaW9uUnBhcihcImlmXCIpO1xyXG4gICAgICAgICAgICBpZiAoIXRlc3RFeHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb25zU3RtdCA9IHRoaXMucGFyc2VTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgaWYgKCFjb25zU3RtdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IGFsdFN0bXQgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXgubWF0Y2hLZXl3b3JkKFwiZWxzZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgYWx0U3RtdCA9IHRoaXMucGFyc2VTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICghYWx0U3RtdCkgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudElmKHRlc3RFeHByLCBjb25zU3RtdCwgYWx0U3RtdCwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgcGFyc2VJdGVyYXRpb24ocGFyc2VGdW5jOiAoKSA9PiBJTm9kZSk6IElTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICB0aGlzLmJlZ2luSXRlcmF0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0bXQgPSBwYXJzZUZ1bmMuYXBwbHkodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoSXRlcmF0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG10O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpbm5lclBhcnNlV2hpbGVTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGVzdEV4cHIgPSB0aGlzLnBhcnNlS2V5d29yZExwYXJFeHByZXNzaW9uUnBhcihcIndoaWxlXCIpO1xyXG4gICAgICAgICAgICBpZiAoIXRlc3RFeHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdG10ID0gdGhpcy5wYXJzZVN0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICBpZiAoIXN0bXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudFdoaWxlKHRlc3RFeHByLCBzdG10LCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlV2hpbGVTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlSXRlcmF0aW9uKHRoaXMuaW5uZXJQYXJzZVdoaWxlU3RhdGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbm5lclBhcnNlRG9XaGlsZVN0YXRlbWVudCgpOiBJU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0S2V5d29yZChcImRvXCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdG10ID0gdGhpcy5wYXJzZVN0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICBpZiAoIXN0bXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRlc3RFeHByID0gdGhpcy5wYXJzZUtleXdvcmRMcGFyRXhwcmVzc2lvblJwYXIoXCJ3aGlsZVwiKTtcclxuICAgICAgICAgICAgaWYgKCF0ZXN0RXhwcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sZXgubWF0Y2hQdW5jdHVhdGlvbihcIjtcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnREb1doaWxlKHN0bXQsIHRlc3RFeHByLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlRG9XaGlsZVN0YXRlbWVudCgpOiBJU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VJdGVyYXRpb24odGhpcy5pbm5lclBhcnNlRG9XaGlsZVN0YXRlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGlubmVyUGFyc2VGb3JTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEodGhpcy5leHBlY3RLZXl3b3JkKFwiZm9yXCIpICYmIHRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCIoXCIpKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IGluaXREZWNsOiBJVmFyaWFibGVEZWNsYXJhdGlvbiA9IG51bGwsXHJcbiAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IElWYXJpYWJsZURlY2xhcmF0b3JbXSxcclxuICAgICAgICAgICAgICAgIGluaXRFeHByOiBJRXhwcmVzc2lvbiA9IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwiO1wiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbkZvckluID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc0tleXdvcmRWYWx1ZSh0b2tlbiwgXCJ2YXJcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zID0gdGhpcy5wYXJzZVZhcmlhYmxlRGVjbGFyYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRlY2xhcmF0aW9ucykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbml0RGVjbCA9IHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRGVjbGFyYXRpb25WYXJpYWJsZShkZWNsYXJhdGlvbnMsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4odG9rZW4pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRFeHByID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWluaXRFeHByKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluRm9ySW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGlzRm9ySW4gPSBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRlc3QgPSBudWxsO1xyXG4gICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzS2V5d29yZFZhbHVlKHRva2VuLCBcImluXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGlzRm9ySW4gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChQYXJzZXIuaXNJbnZhbGlkRm9ySW5MZWZ0U2lkZShpbml0RXhwciwgZGVjbGFyYXRpb25zKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VFeGNlcHRpb24uYWRkRXhjZXB0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgZm9yIGluIGxlZnQgc2lkZSBzaG91bGQgcmVzb2x2ZSB0byByZWZlcmVuY2VgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVG9rZW4ubG9jLnN0YXJ0LmxpbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxUb2tlbi5sb2Muc3RhcnQuY29sdW1uXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCI7XCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIjtcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXN0ID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRlc3QpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCI7XCIpKSByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB1cGRhdGUgPSBudWxsO1xyXG4gICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCIpXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGUgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF1cGRhdGUpIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGlzRm9ySW4gJiYgIXVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFeGNlcHRpb24odG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCIpXCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gdGhpcy5wYXJzZVN0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICBpZiAoIWJvZHkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKTtcclxuICAgICAgICAgICAgY29uc3QgaW5pdCA9IGluaXRFeHByIHx8IGluaXREZWNsO1xyXG4gICAgICAgICAgICBpZiAoaXNGb3JJbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50Rm9ySW4oaW5pdCwgdXBkYXRlLCBib2R5LCBmYWxzZSwgcG9zKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudEZvcihpbml0LCB0ZXN0LCB1cGRhdGUsIGJvZHksIHBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGlzSW52YWxpZEZvckluTGVmdFNpZGUoaW5pdEV4cHI6IElFeHByZXNzaW9uLCBkZWNsYXJhdGlvbnM6IElWYXJpYWJsZURlY2xhcmF0b3JbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKCFpbml0RXhwciAmJiAhZGVjbGFyYXRpb25zKVxyXG4gICAgICAgICAgICAgICAgfHwgKChpbml0RXhwciAmJiAhUGFyc2VyLmlzTGVmdEhhbmRFeHByZXNzaW9uUmVzb2x2aW5nVG9SZWZlcmVuY2UoaW5pdEV4cHIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHx8IChkZWNsYXJhdGlvbnMgJiYgZGVjbGFyYXRpb25zLmxlbmd0aCAhPT0gMSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlRm9yU3RhdGVtZW50KCk6IElTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUl0ZXJhdGlvbih0aGlzLmlubmVyUGFyc2VGb3JTdGF0ZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwYXJzZUtleXdvcmRJZGVudGlmaWVyU2VtaWNvbG9uKGtleXdvcmQ6IHN0cmluZywgbm9kZUZhY3RvcnlGdW5jOiAoaXRlbjogSU5vZGUsIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pID0+IElOb2RlKTogSU5vZGUge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdEtleXdvcmQoa2V5d29yZCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtOiBJTm9kZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50b2tlbklzSW5TYW1lTGluZSh0b2tlbikgJiYgdGhpcy5sZXguaXNJZGVudGlmaWVyKHRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMucGFyc2VJZGVudGlmaWVyKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0pIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMudHJpbU9wdGlvbmFsU2VtaWNvbG9uKCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBub2RlRmFjdG9yeUZ1bmMuY2FsbCh0aGlzLm5vZGVGYWN0b3J5LCBpdGVtLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlQ29udGludWVTdGF0ZW1lbnQoKTogSUV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICBjb25zdCBzdG10ID0gdGhpcy5wYXJzZUtleXdvcmRJZGVudGlmaWVyU2VtaWNvbG9uKFwiY29udGludWVcIiwgdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRDb250aW51ZSk7XHJcbiAgICAgICAgICAgIGlmICghc3RtdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPbkl0ZXJhdGlvbigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RtdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBhcnNlRXhjZXB0aW9uLmFkZEV4Y2VwdGlvbihcclxuICAgICAgICAgICAgICAgIGBJbGxlZ2FsIGNvbnRpbnVlIHN0YXRlbWVudGAsXHJcbiAgICAgICAgICAgICAgICBzdG10LmxvYy5zdGFydC5saW5lLFxyXG4gICAgICAgICAgICAgICAgc3RtdC5sb2Muc3RhcnQuY29sdW1uXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VCcmVha1N0YXRlbWVudCgpOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0bXQgPSB0aGlzLnBhcnNlS2V5d29yZElkZW50aWZpZXJTZW1pY29sb24oXCJicmVha1wiLCB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudEJyZWFrKTtcclxuICAgICAgICAgICAgaWYgKCFzdG10KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc09uSXRlcmF0aW9uKCkgfHwgdGhpcy5pc09uU3dpdGNoKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdG10O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGFyc2VFeGNlcHRpb24uYWRkRXhjZXB0aW9uKFxyXG4gICAgICAgICAgICAgICAgYElsbGVnYWwgYnJlYWsgc3RhdGVtZW50YCxcclxuICAgICAgICAgICAgICAgIHN0bXQubG9jLnN0YXJ0LmxpbmUsXHJcbiAgICAgICAgICAgICAgICBzdG10LmxvYy5zdGFydC5jb2x1bW5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZVJldHVyblN0YXRlbWVudCgpOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0S2V5d29yZChcInJldHVyblwiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgbGV0IGl0ZW06IElOb2RlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRva2VuSXNJblNhbWVMaW5lKHRva2VuKSBcclxuICAgICAgICAgICAgICAgICYmICF0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwiO1wiKSBcclxuICAgICAgICAgICAgICAgICYmICF0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwifVwiKVxyXG4gICAgICAgICAgICAgICAgJiYgIXRoaXMubGV4LmlzRW9mKHRva2VuKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtKSByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT25GdW5jdGlvbigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRSZXR1cm4oaXRlbSwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBhcnNlRXhjZXB0aW9uLmFkZEV4Y2VwdGlvbihcclxuICAgICAgICAgICAgICAgIGBJbGxlZ2FsIHJldHVybiBzdGF0ZW1lbnRgLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFRva2VuLmxvYy5zdGFydC5saW5lLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFRva2VuLmxvYy5zdGFydC5jb2x1bW5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZVdpdGhTdGF0ZW1lbnQoKTogSUV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLnBhcnNlS2V5d29yZExwYXJFeHByZXNzaW9uUnBhcihcIndpdGhcIik7XHJcbiAgICAgICAgICAgIGlmICghZXhwcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RtdCA9IHRoaXMucGFyc2VTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgaWYgKCFzdG10KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRXaXRoKGV4cHIsIHN0bXQsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHBhcnNlQ2FzZUNsYXVzZVN0YXRlbWVudHMoZXhwZWN0RGVmYXVsdDogYm9vbGVhbik6IElTdGF0ZW1lbnRbXSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIjpcIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0bXRzOiBJU3RhdGVtZW50W10gPSBbXTtcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZXguaXNLZXl3b3JkVmFsdWUodG9rZW4sIFwiY2FzZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHx8IHRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCJ9XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgKHRoaXMubGV4LmlzS2V5d29yZFZhbHVlKHRva2VuLCBcImRlZmF1bHRcIikgJiYgZXhwZWN0RGVmYXVsdClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wYXJzZVN0YXRlbWVudElmQ2FuVG9sZXJhdGUoc3RtdHMpKSByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0bXRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwYXJzZUNhc2VzQ2xhdXNlKGNhc2VzOiBJU3dpdGNoQ2FzZVtdLCBleHBlY3REZWZhdWx0OiBib29sZWFuKSB7XHJcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMubGV4LmlzS2V5d29yZFZhbHVlKHRva2VuLCBcImNhc2VcIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFleHByKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RtdHMgPSB0aGlzLnBhcnNlQ2FzZUNsYXVzZVN0YXRlbWVudHMoZXhwZWN0RGVmYXVsdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0bXRzKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3dpdGNoQ2FzZSA9IHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlU3dpdGNoQ2FzZShleHByLCBzdG10cywgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbih0b2tlbikpO1xyXG4gICAgICAgICAgICAgICAgY2FzZXMucHVzaChzd2l0Y2hDYXNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpbm5lclBhcnNlU3dpdGNoU3RhdGVtZW50KCk6IElTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLnBhcnNlS2V5d29yZExwYXJFeHByZXNzaW9uUnBhcihcInN3aXRjaFwiKTtcclxuICAgICAgICAgICAgaWYgKCFleHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCJ7XCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgY2FzZXM6IElTd2l0Y2hDYXNlW10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNLZXl3b3JkVmFsdWUodG9rZW4sIFwiY2FzZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBhcnNlQ2FzZXNDbGF1c2UoY2FzZXMsIHRydWUpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzS2V5d29yZFZhbHVlKHRva2VuLCBcImRlZmF1bHRcIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0bXRzID0gdGhpcy5wYXJzZUNhc2VDbGF1c2VTdGF0ZW1lbnRzKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlmICghc3RtdHMpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0Q2FzZSA9IHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlU3dpdGNoQ2FzZShudWxsLCBzdG10cywgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbih0b2tlbikpO1xyXG4gICAgICAgICAgICAgICAgY2FzZXMucHVzaChkZWZhdWx0Q2FzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzS2V5d29yZFZhbHVlKHRva2VuLCBcImNhc2VcIilcclxuICAgICAgICAgICAgICAgICYmICF0aGlzLnBhcnNlQ2FzZXNDbGF1c2UoY2FzZXMsIGZhbHNlKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwifVwiKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRTd2l0Y2goZXhwciwgY2FzZXMsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VTd2l0Y2hTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHRoaXMuYmVnaW5Td2l0Y2goKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RtdCA9IHRoaXMuaW5uZXJQYXJzZVN3aXRjaFN0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaFN3aXRjaCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RtdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZVRocm93U3RhdGVtZW50KCk6IElTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdEtleXdvcmQoXCJ0aHJvd1wiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKGluaXRpYWxUb2tlbi5sb2Muc3RhcnQubGluZSAhPT0gdG9rZW4ubG9jLnN0YXJ0LmxpbmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyc2VFeGNlcHRpb24uYWRkRXhjZXB0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgIGBJbGxlZ2FsIG5ld2xpbmUgYWZ0ZXIgdGhyb3dgLFxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxUb2tlbi5sb2Muc3RhcnQubGluZSxcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVG9rZW4ubG9jLnN0YXJ0LmNvbHVtblxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhwciA9IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIGlmICghZXhwcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnRyaW1PcHRpb25hbFNlbWljb2xvbigpKSByZXR1cm47XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudFRocm93KGV4cHIsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VUcnlTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0S2V5d29yZChcInRyeVwiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RtdCA9IHRoaXMucGFyc2VCbG9ja1N0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICBpZiAoIXN0bXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBsZXQgY2F0Y2hDbGF1c2U6IElDYXRjaENsYXVzZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNLZXl3b3JkVmFsdWUodG9rZW4sIFwiY2F0Y2hcIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhdGNoSWQgPSB0aGlzLnBhcnNlS2V5d29yZExwYXJFeHByZXNzaW9uUnBhcihcImNhdGNoXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoY2F0Y2hJZCAmJiBjYXRjaElkLnR5cGUgPT09IFwiSWRlbnRpZmllclwiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0bXQgPSB0aGlzLnBhcnNlQmxvY2tTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICghc3RtdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhdGNoQ2xhdXNlID0gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVDYXRjaENsYXVzZSgoY2F0Y2hJZCBhcyBJSWRlbnRpZmllciksIHN0bXQsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4odG9rZW4pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGZpbmFsaXplcjogSUJsb2NrU3RhdGVtZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4Lm1hdGNoS2V5d29yZChcImZpbmFsbHlcIikpIHtcclxuICAgICAgICAgICAgICAgIGZpbmFsaXplciA9IHRoaXMucGFyc2VCbG9ja1N0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmaW5hbGl6ZXIpIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50VHJ5KHN0bXQsIGNhdGNoQ2xhdXNlLCBmaW5hbGl6ZXIsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VEZWJ1Z2dlclN0YXRlbWVudCgpOiBJU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICghKHRoaXMuZXhwZWN0S2V5d29yZChcImRlYnVnZ2VyXCIpICYmIHRoaXMudHJpbU9wdGlvbmFsU2VtaWNvbG9uKCkpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnREZWJ1Z2dlcih0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlTGFiZWxlZFN0YXRlbWVudCgpOiBJU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICBpZiAoIWV4cHIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmIChleHByLnR5cGUgPT09IFwiSWRlbnRpZmllclwiICYmIHRoaXMubGV4Lm1hdGNoUHVuY3R1YXRpb24oXCI6XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdG10ID0gdGhpcy5wYXJzZVN0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdG10KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50TGFiZWxlZChleHByIGFzIElJZGVudGlmaWVyLCBzdG10LCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHBhcnNlIGxpa2UgYSBub3JtYWwgZXhwcmVzc2lvbiBzdGF0ZW1lbnRcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnRyaW1PcHRpb25hbFNlbWljb2xvbigpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRFeHByZXNzaW9uKGV4cHIsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHBhcnNlS2V5d29yZExwYXJFeHByZXNzaW9uUnBhcihrZXl3b3JkOiBzdHJpbmcpOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGlmICghKHRoaXMuZXhwZWN0S2V5d29yZChrZXl3b3JkKSAmJiB0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwiKFwiKSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICBpZiAoZXhwciAmJiB0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwiKVwiKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZVZhcmlhYmxlU3RhdGVtZW50KCk6IElTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdEtleXdvcmQoXCJ2YXJcIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlRGVjbGFyYXRvcnMgPSB0aGlzLnBhcnNlVmFyaWFibGVEZWNsYXJhdG9ycygpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMudHJpbU9wdGlvbmFsU2VtaWNvbG9uKCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZURlY2xhcmF0aW9uVmFyaWFibGUodmFyaWFibGVEZWNsYXJhdG9ycywgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUV4cHJlc3Npb25TdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgaWYgKCEoZXhwciAmJiB0aGlzLnRyaW1PcHRpb25hbFNlbWljb2xvbigpKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50RXhwcmVzc2lvbihleHByLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8vLy8vLy8vL1BhcnNlIFN0YXRlbWVudHMvLy8vLy8vLy8vLy8vLy8vICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyBEZWNsYXJhdGlvbnNcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHBhcnNlVmFyaWFibGVEZWNsYXJhdG9ycygpOiBJVmFyaWFibGVEZWNsYXJhdG9yW10ge1xyXG4gICAgICAgICAgICBsZXQgdmFyaWFibGVEZWNsYXJhdG9yID0gdGhpcy5wYXJzZVZhcmlhYmxlRGVjbGFyYXRvcigpO1xyXG4gICAgICAgICAgICBpZiAoIXZhcmlhYmxlRGVjbGFyYXRvcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVEZWNsYXJhdG9yczogSVZhcmlhYmxlRGVjbGFyYXRvcltdID0gW3ZhcmlhYmxlRGVjbGFyYXRvcl07XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmxleC5tYXRjaFB1bmN0dWF0aW9uKFwiLFwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGVEZWNsYXJhdG9yID0gdGhpcy5wYXJzZVZhcmlhYmxlRGVjbGFyYXRvcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YXJpYWJsZURlY2xhcmF0b3IpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0b3JzLnB1c2godmFyaWFibGVEZWNsYXJhdG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFyaWFibGVEZWNsYXJhdG9ycztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZVZhcmlhYmxlRGVjbGFyYXRvcigpOiBJVmFyaWFibGVEZWNsYXJhdG9yIHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSB0aGlzLnBhcnNlSWRlbnRpZmllcigpO1xyXG4gICAgICAgICAgICBpZiAoIWlkZW50aWZpZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCBleHByID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4Lm1hdGNoUHVuY3R1YXRpb24oXCI9XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBleHByID0gdGhpcy5wYXJzZUFzc2lnbm1lbnRFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWV4cHIpIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlVmFyaWFibGVEZWNsYXJhdG9yKGlkZW50aWZpZXIsIGV4cHIsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vRGVjbGFyYXRpb25zLy8vLy8vLy8vLy8vLy8vLy8gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8gUGFyc2UgRXhwcmVzc2lvbnMgICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUV4cHJlc3Npb24oKTogSUV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgY29uc3QgZXhwciA9IHRoaXMucGFyc2VBc3NpZ25tZW50RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICBpZiAoIWV4cHIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5tYXRjaFB1bmN0dWF0aW9uKFwiLFwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhwcnM6IElFeHByZXNzaW9uW10gPSBbZXhwcl07XHJcbiAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwciA9IHRoaXMucGFyc2VBc3NpZ25tZW50RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhwcikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cHJzLnB1c2goZXhwcik7XHJcbiAgICAgICAgICAgICAgICB9IHdoaWxlICh0aGlzLmxleC5tYXRjaFB1bmN0dWF0aW9uKFwiLFwiKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvblNlcXVlbmNlKGV4cHJzLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoYW5rcyB0bzogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNzA5ODY2L3doYXRzLWEtdmFsaWQtbGVmdC1oYW5kLXNpZGUtZXhwcmVzc2lvbi1pbi1qYXZhc2NyaXB0LWdyYW1tYXJcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpc0xlZnRIYW5kRXhwcmVzc2lvblJlc29sdmluZ1RvUmVmZXJlbmNlKGV4cHI6IElFeHByZXNzaW9uKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHByLnR5cGUgPT09IFwiSWRlbnRpZmllclwiIHx8IGV4cHIudHlwZSA9PT0gXCJNZW1iZXJFeHByZXNzaW9uXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBBc3NpZ25tZW50T3BlcmF0b3JzID0ge1xyXG4gICAgICAgICAgICBcIj1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJ8fFwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcIio9XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiLz1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCIlPVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcIis9XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiLT1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCI8PD1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCI+Pj1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCI+Pj49XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiJj1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJePVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcInw9XCI6IHRydWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUFzc2lnbm1lbnRFeHByZXNzaW9uKCk6IElFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUNvbmRpdGlvbmFsRXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICBpZiAoIWV4cHIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uKHRva2VuKVxyXG4gICAgICAgICAgICAgICAgJiYgUGFyc2VyLkFzc2lnbm1lbnRPcGVyYXRvcnNbdG9rZW4udmFsdWVdXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFQYXJzZXIuaXNMZWZ0SGFuZEV4cHJlc3Npb25SZXNvbHZpbmdUb1JlZmVyZW5jZShleHByKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VFeGNlcHRpb24uYWRkRXhjZXB0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgSW52YWxpZCBsZWZ0LWhhbmQgc2lkZSBpbiBhc3NpZ25tZW50YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4ubG9jLnN0YXJ0LmxpbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuLmxvYy5zdGFydC5jb2x1bW5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmV4cHIgPSB0aGlzLnBhcnNlQXNzaWdubWVudEV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIGlmICghcmV4cHIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uQXNzaWdubWVudCh0b2tlbi52YWx1ZSwgZXhwciwgcmV4cHIsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBleHByO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlQ29uZGl0aW9uYWxFeHByZXNzaW9uKCk6IElFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUJpbmFyeUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgaWYgKCFleHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCI/XCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb25zZXF1ZW50RXhwciA9IHRoaXMucGFyc2VBc3NpZ25tZW50RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjb25zZXF1ZW50RXhwcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIjpcIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbHRlcm5hdGVFeHByID0gdGhpcy5wYXJzZUFzc2lnbm1lbnRFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFsdGVybmF0ZUV4cHIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uQ29uZGl0aW9uYWwoZXhwciwgYWx0ZXJuYXRlRXhwciwgY29uc2VxdWVudEV4cHIsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBleHByO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQmluYXJ5VG9rZW5WYWx1ZXNfb3IgPSAxO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEJpbmFyeVRva2VuVmFsdWVzX2FuZCA9IDI7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQmluYXJ5VG9rZW5WYWx1ZXNfaXNsb2dpYyA9IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19hbmQ7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQmluYXJ5VG9rZW5WYWx1ZXNfYm9yID0gMztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBCaW5hcnlUb2tlblZhbHVlc194b3IgPSA0O1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEJpbmFyeVRva2VuVmFsdWVzX2JhbmQgPSA1O1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEJpbmFyeVRva2VuVmFsdWVzX2VxID0gNjtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBCaW5hcnlUb2tlblZhbHVlc19yZWwgPSA3O1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEJpbmFyeVRva2VuVmFsdWVzX3NoaWZ0ID0gODtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBCaW5hcnlUb2tlblZhbHVlc19hZGQgPSA5O1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEJpbmFyeVRva2VuVmFsdWVzX211bHRpID0gMTA7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGlzTG9naWNCaW5hcnlUb2tlblZhbHVlKHJhbms6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmFuayA8PSBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfaXNsb2dpYztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEJpbmFyeVRva2VuVmFsdWVzID0ge1xyXG4gICAgICAgICAgICAnfHwnOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfb3IsXHJcbiAgICAgICAgICAgICcmJic6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19hbmQsXHJcbiAgICAgICAgICAgICd8JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2JvcixcclxuICAgICAgICAgICAgJ14nOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfeG9yLFxyXG4gICAgICAgICAgICAnJic6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19iYW5kLFxyXG4gICAgICAgICAgICAnPT0nOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfZXEsXHJcbiAgICAgICAgICAgICchPSc6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19lcSxcclxuICAgICAgICAgICAgJz09PSc6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19lcSxcclxuICAgICAgICAgICAgJyE9PSc6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19lcSxcclxuICAgICAgICAgICAgJzwnOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfcmVsLFxyXG4gICAgICAgICAgICAnPic6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19yZWwsXHJcbiAgICAgICAgICAgICc8PSc6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19yZWwsXHJcbiAgICAgICAgICAgICc+PSc6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19yZWwsXHJcbiAgICAgICAgICAgICdpbnN0YW5jZW9mJzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX3JlbCxcclxuICAgICAgICAgICAgJ2luJzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX3JlbCxcclxuICAgICAgICAgICAgJzw8JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX3NoaWZ0LFxyXG4gICAgICAgICAgICAnPj4nOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfc2hpZnQsXHJcbiAgICAgICAgICAgICc+Pj4nOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfc2hpZnQsXHJcbiAgICAgICAgICAgICcrJzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2FkZCxcclxuICAgICAgICAgICAgJy0nOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfYWRkLFxyXG4gICAgICAgICAgICAnKic6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19tdWx0aSxcclxuICAgICAgICAgICAgJy8nOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfbXVsdGksXHJcbiAgICAgICAgICAgICclJzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX211bHRpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGdldEJpbmFyeU9wZXJhdGlvblRva2VuKG9wOiBzdHJpbmcsIGFsbG93SW46IGJvb2xlYW4pOiBudW1iZXIge1xyXG4gICAgICAgICAgICBpZihvcCA9PT0gJ2luJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbG93SW4gPyBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNbb3BdIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc1tvcF07XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgY3JlYXRlQmluYXJ5RXhwcmVzc2lvbihcclxuICAgICAgICAgICAgcmFuazogbnVtYmVyLFxyXG4gICAgICAgICAgICBvcGVyYXRvcjogc3RyaW5nLFxyXG4gICAgICAgICAgICBsZWZ0OiBJRXhwcmVzc2lvbixcclxuICAgICAgICAgICAgcmlnaHQ6IElFeHByZXNzaW9uXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvYyA9IHRoaXMub3B0aW9ucy5sb2MgP1xyXG4gICAgICAgICAgICAgICAgbGV4aWNhbC5Ub2tlblNvdXJjZUxvY2F0aW9uLmNyZWF0ZShsZWZ0LmxvYy5zdGFydCwgcmlnaHQubG9jLmVuZCkgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGlmIChQYXJzZXIuaXNMb2dpY0JpbmFyeVRva2VuVmFsdWUocmFuaykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25Mb2dpY2FsKG9wZXJhdG9yLCBsZWZ0LCByaWdodCwgbG9jKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25CaW5hcnkob3BlcmF0b3IsIGxlZnQsIHJpZ2h0LCBsb2MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBXZSBjb3VsZCB1c2UgdGhlIHNpbXBsZSBhcHJvYWNoIGJ5IHBhcnNpbmcgaW5kaXZpZHVhbGx5IFxyXG4gICAgICAgIC8vIGV2ZXJ5IGJpbmFyeSBleHByZXNzaW9uIG9mIEVjbWFzY3JpcHQgZGVmaW5pdGlvbixcclxuICAgICAgICAvLyBmb3IgaW5zdGFuc2UsIHBhcnNlTG9naWNhbE9SRXhwcmVzc2lvbiwgcGFyc2VMb2dpY2FsQU5ERXhwcmVzc2lvbiwgcGFyc2VFcXVhbGl0eUV4cHJlc3Npb24gZXRjLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gV2UgY2hvb3NlIHRvIHBhcnNlIGFsbCB0aGUgYmluYXJ5IGRlZmluaXRpb25zIHVzaW5nIHRoZSBtZXRob2RcclxuICAgICAgICAvLyBvZiBzaGlmdC1yZWR1Y2UgcGFyc2VyIGZvciB0aGUgbGVmdC1hc3NvY2lhdGl2ZSBiaW5hcnkgb3BlcmF0b3IgcGFydFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvT3BlcmF0b3ItcHJlY2VkZW5jZV9wYXJzZXJcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGJlY2F1c2UgaXQgaXMgbW9yZSBmdW4gKGFuZCBpbmNyZWFzZXMgdGhlIHBlcmZvcm1hbmNlIDopIClcclxuICAgICAgICBwdWJsaWMgaW5uZXJCYXJzZUJpbmFyeUV4cHJlc3Npb24oYWxsb3dJbjogYm9vbGVhbik6IElFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgbGV0IGxleHByID0gdGhpcy5wYXJzZVVuYXJ5RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICBpZiAoIWxleHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgbGV0IGJpbmFyeVJhbmsgPSBQYXJzZXIuZ2V0QmluYXJ5T3BlcmF0aW9uVG9rZW4odG9rZW4udmFsdWUsIGFsbG93SW4pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJpbmFyeVJhbmsgJiYgKHRoaXMubGV4LmlzUHVuY3R1YXRpb24odG9rZW4pIHx8IHRoaXMubGV4LmlzS2V5d29yZCh0b2tlbikpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJleHByID0gdGhpcy5wYXJzZVVuYXJ5RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXhwcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHJzOiBJRXhwcmVzc2lvbltdID0gW2xleHByLCByZXhwcl0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHVuY3M6IHN0cmluZ1tdID0gW3Rva2VuLnZhbHVlXSxcclxuICAgICAgICAgICAgICAgICAgICByYW5rczogbnVtYmVyW10gPSBbYmluYXJ5UmFua107XHJcblxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhdGVzdFJhbmsgPSBQYXJzZXIuZ2V0QmluYXJ5T3BlcmF0aW9uVG9rZW4odG9rZW4udmFsdWUsIGFsbG93SW4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWxhdGVzdFJhbmsgfHwgKCF0aGlzLmxleC5pc1B1bmN0dWF0aW9uKHRva2VuKSAmJiAhdGhpcy5sZXguaXNLZXl3b3JkKHRva2VuKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXhwciA9IHRoaXMucGFyc2VVbmFyeUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJleHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0UmFuayA9IF8ubGFzdChyYW5rcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGxhc3RSYW5rICYmIGxhc3RSYW5rID49IGxhdGVzdFJhbmspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV4cHIgPSBleHBycy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGV4cHIgPSBleHBycy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmluYXJ5RXhwciA9IHRoaXMuY3JlYXRlQmluYXJ5RXhwcmVzc2lvbihyYW5rcy5wb3AoKSwgcHVuY3MucG9wKCksIGxleHByLCByZXhwcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJzLnB1c2goYmluYXJ5RXhwcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0UmFuayA9IF8ubGFzdChyYW5rcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByYW5rcy5wdXNoKGxhdGVzdFJhbmspO1xyXG4gICAgICAgICAgICAgICAgICAgIHB1bmNzLnB1c2godG9rZW4udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cHJzLnB1c2gocmV4cHIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxleHByID0gZXhwcnMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocHVuY3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV4cHIgPSB0aGlzLmNyZWF0ZUJpbmFyeUV4cHJlc3Npb24ocmFua3MucG9wKCksIHB1bmNzLnBvcCgpLCBleHBycy5wb3AoKSwgbGV4cHIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbGV4cHI7ICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUJpbmFyeUV4cHJlc3Npb24oKTogSUV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICBjb25zdCBvbGRJbkZvckluID0gdGhpcy5pbkZvckluO1xyXG4gICAgICAgICAgICB0aGlzLmluRm9ySW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLmlubmVyQmFyc2VCaW5hcnlFeHByZXNzaW9uKCFvbGRJbkZvckluKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuaW5Gb3JJbiA9IG9sZEluRm9ySW47XHJcbiAgICAgICAgICAgIHJldHVybiBleHByO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgVW5hcnlUb2tlblZhbHVlc191bmFyeSA9IDE7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgVW5hcnlUb2tlblZhbHVlc191cGRhdGUgPSAyO1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBVbmFyeVRva2VuVmFsdWVzID0ge1xyXG4gICAgICAgICAgICBcIi1cIjogUGFyc2VyLlVuYXJ5VG9rZW5WYWx1ZXNfdW5hcnksXHJcbiAgICAgICAgICAgIFwiK1wiOiBQYXJzZXIuVW5hcnlUb2tlblZhbHVlc191bmFyeSxcclxuICAgICAgICAgICAgXCIhXCI6IFBhcnNlci5VbmFyeVRva2VuVmFsdWVzX3VuYXJ5LFxyXG4gICAgICAgICAgICBcIn5cIjogUGFyc2VyLlVuYXJ5VG9rZW5WYWx1ZXNfdW5hcnksXHJcbiAgICAgICAgICAgIFwidHlwZW9mXCI6IFBhcnNlci5VbmFyeVRva2VuVmFsdWVzX3VuYXJ5LFxyXG4gICAgICAgICAgICBcInZvaWRcIjogUGFyc2VyLlVuYXJ5VG9rZW5WYWx1ZXNfdW5hcnksXHJcbiAgICAgICAgICAgIFwiZGVsZXRlXCI6IFBhcnNlci5VbmFyeVRva2VuVmFsdWVzX3VuYXJ5LFxyXG4gICAgICAgICAgICBcIisrXCI6IFBhcnNlci5VbmFyeVRva2VuVmFsdWVzX3VwZGF0ZSxcclxuICAgICAgICAgICAgXCItLVwiOiBQYXJzZXIuVW5hcnlUb2tlblZhbHVlc191cGRhdGVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZVVuYXJ5RXhwcmVzc2lvbigpOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVuYXJ5UmFuayA9IFBhcnNlci5VbmFyeVRva2VuVmFsdWVzW3Rva2VuLnZhbHVlXTtcclxuXHJcbiAgICAgICAgICAgIGlmICh1bmFyeVJhbmsgJiYgKHRoaXMubGV4LmlzUHVuY3R1YXRpb24odG9rZW4pIHx8IHRoaXMubGV4LmlzS2V5d29yZCh0b2tlbikpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGxldCBleHByID0gdGhpcy5wYXJzZVVuYXJ5RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFleHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHVuYXJ5UmFuayA9PT0gUGFyc2VyLlVuYXJ5VG9rZW5WYWx1ZXNfdXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvblVwZGF0ZSh0b2tlbi52YWx1ZSwgZXhwciwgdHJ1ZSwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbih0b2tlbikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25VbmFyeSh0b2tlbi52YWx1ZSwgdHJ1ZSwgZXhwciwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbih0b2tlbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlUG9zdGZpeEV4cHJlc3Npb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZVBvc3RmaXhFeHByZXNzaW9uKCk6IElFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUxlZnRIYW5kU2lkZUV4cHJlc3Npb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmICghZXhwcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzUHVuY3R1YXRpb24odG9rZW4pXHJcbiAgICAgICAgICAgICAgICAmJiB0b2tlbi5sb2MuZW5kLmxpbmUgPT09IHRoaXMubGV4LmxhdGVzdFRva2VuKCkubG9jLmVuZC5saW5lXHJcbiAgICAgICAgICAgICAgICAmJiAodG9rZW4udmFsdWUgPT09IFwiKytcIiB8fCB0b2tlbi52YWx1ZSA9PT0gXCItLVwiKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvblVwZGF0ZSh0b2tlbi52YWx1ZSwgZXhwciwgZmFsc2UsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHBhcnNlSWRlbnRpZmllcigpOiBJSWRlbnRpZmllciB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc0lkZW50aWZpZXIodG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVJZGVudGlmaWVyKHRva2VuLnZhbHVlLCB0aGlzLnRyYWNrUG9zaXRpb25VbmFyeSh0b2tlbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRXhjZXB0aW9uKHRva2VuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUxlZnRIYW5kU2lkZUV4cHJlc3Npb24oYWxsb3dDYWxsRXhwcmVzc2lvbnM6IGJvb2xlYW4pOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGxldCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKSxcclxuICAgICAgICAgICAgICAgIHByaW1hcnlFeHByO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzS2V5d29yZChpbml0aWFsVG9rZW4pKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChpbml0aWFsVG9rZW4udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZnVuY3Rpb25cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUV4cHIgPSB0aGlzLnBhcnNlRnVuY3Rpb24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5ld1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5RXhwciA9IHRoaXMucGFyc2VOZXdFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByaW1hcnlFeHByID0gcHJpbWFyeUV4cHIgfHwgdGhpcy5wYXJzZVByaW1hcnlFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIGlmICghcHJpbWFyeUV4cHIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCBleHByOiBJTm9kZSxcclxuICAgICAgICAgICAgICAgIGlzTWF0Y2hpbmdFeHJlc3Npb24gPSB0cnVlO1xyXG4gICAgICAgICAgICB3aGlsZSAoaXNNYXRjaGluZ0V4cmVzc2lvbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5sZXguaXNQdW5jdHVhdGlvbih0b2tlbikpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodG9rZW4udmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIltcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHIgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWV4cHIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIl1cIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlFeHByID0gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uTWVtYmVyKHByaW1hcnlFeHByLCBleHByLCB0cnVlLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi5cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSB0aGlzLnBhcnNlSWRlbnRpZmllcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlkZW50aWZpZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlFeHByID0gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uTWVtYmVyKHByaW1hcnlFeHByLCBpZGVudGlmaWVyLCBmYWxzZSwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIoXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbGxvd0NhbGxFeHByZXNzaW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJncyA9IHRoaXMucGFyc2VBcmd1bWVudHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYXJncykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlFeHByID0gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uQ2FsbChwcmltYXJ5RXhwciwgYXJncywgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTWF0Y2hpbmdFeHJlc3Npb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcHJpbWFyeUV4cHI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VQcmltYXJ5RXhwcmVzc2lvbigpOiBJTm9kZSB7XHJcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoICh0b2tlbi50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGxleGljYWwuVG9rZW5UeXBlLmtleXdvcmQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLnZhbHVlID09PSBcInRoaXNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvblRoaXModGhpcy50cmFja1Bvc2l0aW9uVW5hcnkodG9rZW4pKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBsZXhpY2FsLlRva2VuVHlwZS5pZGVudGlmaWVyOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUlkZW50aWZpZXIodG9rZW4udmFsdWUsIHRoaXMudHJhY2tQb3NpdGlvblVuYXJ5KHRva2VuKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBsZXhpY2FsLlRva2VuVHlwZS5saXRlcmFsOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUxpdGVyYWwodG9rZW4udmFsdWUsIHRoaXMudHJhY2tQb3NpdGlvblVuYXJ5KHRva2VuKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBsZXhpY2FsLlRva2VuVHlwZS5wdW5jdHVhdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRva2VuLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJbXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUFycmF5TGl0ZXJhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIntcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlT2JqZWN0TGl0ZXJhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIihcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFleHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGV4Lm1hdGNoUHVuY3R1YXRpb24oXCIpXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXhjZXB0aW9uKHRoaXMubGV4Lm5leHRUb2tlbigpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi89XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIvXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5sZXgucmVpbnRlcnByZXRMYXN0VG9rZW5Bc1JlZ2V4KHRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc0Vycm9yKHRva2VuKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVMaXRlcmFsKHRva2VuLnZhbHVlLCB0aGlzLnRyYWNrUG9zaXRpb25VbmFyeSh0b2tlbikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRXhjZXB0aW9uKHRva2VuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZU5ld0V4cHJlc3Npb24oKTogSUV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICBsZXQgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RLZXl3b3JkKFwibmV3XCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYWxsRXhwciA9IHRoaXMucGFyc2VMZWZ0SGFuZFNpZGVFeHByZXNzaW9uKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKCFjYWxsRXhwcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IGFyZ3MsXHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIihcIikpIHtcclxuICAgICAgICAgICAgICAgIGFyZ3MgPSB0aGlzLnBhcnNlQXJndW1lbnRzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFyZ3MpIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbk5ldyhjYWxsRXhwciwgYXJncyB8fCBbXSwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUFyZ3VtZW50cygpOiBJRXhwcmVzc2lvbltdIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwiKFwiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4cHJzOiBJRXhwcmVzc2lvbltdID0gW107XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwiKVwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhwcnM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUFzc2lnbm1lbnRFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWV4cHIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBleHBycy5wdXNoKGV4cHIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIilcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCIsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFeGNlcHRpb24odG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZXhwcnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VBcnJheUxpdGVyYWwoKTogSU5vZGUge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCJbXCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhcnJheUV4cHJzOiBJTm9kZVtdID0gW107XHJcbiAgICAgICAgICAgIHRoaXMudHJpbUFycmF5Q29tbWFzKGFycmF5RXhwcnMpO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKCF0aGlzLmxleC5tYXRjaFB1bmN0dWF0aW9uKFwiXVwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXNzaWduRXhwciA9IHRoaXMucGFyc2VBc3NpZ25tZW50RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhc3NpZ25FeHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgYXJyYXlFeHBycy5wdXNoKGFzc2lnbkV4cHIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGV4Lm1hdGNoUHVuY3R1YXRpb24oXCIsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmltQXJyYXlDb21tYXMoYXJyYXlFeHBycyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25BcnJheShhcnJheUV4cHJzLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKHRva2VuKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHRyaW1BcnJheUNvbW1hcyhhcnJheUV4cHJzOiBJTm9kZVtdKSB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmxleC5tYXRjaFB1bmN0dWF0aW9uKFwiLFwiKSkge1xyXG4gICAgICAgICAgICAgICAgYXJyYXlFeHBycy5wdXNoKG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VPYmplY3RMaXRlcmFsKCk6IElOb2RlIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwie1wiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvcGVydGllczogSVByb3BlcnR5W10gPSBbXTtcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwifVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5wYXJzZVByb3BlcnR5QXNzaWdubWVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwcm9wZXJ0eSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaChwcm9wZXJ0eSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwifVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCIsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFeGNlcHRpb24odG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uT2JqZWN0KHByb3BlcnRpZXMsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4odG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZVByb3BlcnR5QXNzaWdubWVudCgpOiBJUHJvcGVydHkge1xyXG4gICAgICAgICAgICBsZXQga2luZDogc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgbGV0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNJZGVudGlmaWVyVmFsdWUoaW5pdGlhbFRva2VuLCBcImdldFwiKSkge1xyXG4gICAgICAgICAgICAgICAga2luZCA9IFwiZ2V0XCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZXguaXNJZGVudGlmaWVyVmFsdWUoaW5pdGlhbFRva2VuLCBcInNldFwiKSkge1xyXG4gICAgICAgICAgICAgICAga2luZCA9IFwic2V0XCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBraW5kID0gXCJpbml0XCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHRoaXMucGFyc2VQcm9wZXJ0eU5hbWUoKTtcclxuICAgICAgICAgICAgaWYgKCFwcm9wZXJ0eU5hbWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIjpcIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLnBhcnNlQXNzaWdubWVudEV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIGlmICghZXhwcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZU9iamVjdFByb3BlcnR5KHByb3BlcnR5TmFtZSwgZXhwciwga2luZCwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwiKFwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFyZ3M6IElJZGVudGlmaWVyW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzSWRlbnRpZmllcih0b2tlbikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcmcgPSB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUlkZW50aWZpZXIodG9rZW4udmFsdWUsIHRoaXMudHJhY2tQb3NpdGlvblVuYXJ5KHRva2VuKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKGFyZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwiKVwiKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIilcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEV4Y2VwdGlvbih0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIntcIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmdW5jdGlvbkJvZHkgPSB0aGlzLnBhcnNlRnVuY3Rpb25Cb2R5KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCJ9XCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZnVuY3Rpb25FeHByID0gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uRnVuY3Rpb24obnVsbCwgYXJncywgZnVuY3Rpb25Cb2R5LCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKHRva2VuKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVPYmplY3RQcm9wZXJ0eShwcm9wZXJ0eU5hbWUsIGZ1bmN0aW9uRXhwciwga2luZCwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRXhjZXB0aW9uKHRva2VuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlUHJvcGVydHlOYW1lKCk6IElMaXRlcmFsIHwgSUlkZW50aWZpZXIge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNMaXRlcmFsKHRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLnN1YlR5cGUgPT09IGxleGljYWwuTGl0ZXJhbFN1YlR5cGUuc3RyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgdG9rZW4uc3ViVHlwZSA9PT0gbGV4aWNhbC5MaXRlcmFsU3ViVHlwZS5udW1iZXJcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUxpdGVyYWwodG9rZW4udmFsdWUsIHRoaXMudHJhY2tQb3NpdGlvblVuYXJ5KHRva2VuKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVJZGVudGlmaWVyKHRva2VuLnZhbHVlLCB0aGlzLnRyYWNrUG9zaXRpb25VbmFyeSh0b2tlbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMubGV4LmlzSWRlbnRpZmllcih0b2tlbikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUlkZW50aWZpZXIodG9rZW4udmFsdWUsIHRoaXMudHJhY2tQb3NpdGlvblVuYXJ5KHRva2VuKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV4Y2VwdGlvbih0b2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vL1BhcnNlIEV4cHJlc3Npb25zLy8vLy8vLy8vLy8gICAgICAgIFxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8gUGFyc2UgRnVuY3Rpb25cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlRnVuY3Rpb24oYXNEZWNsYXJhdGlvbjogYm9vbGVhbik6IElGdW5jdGlvbkRlY2xhcmF0aW9uIHwgSUZ1bmN0aW9uRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0S2V5d29yZChcImZ1bmN0aW9uXCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgbGV0IGlkZW50aWZpZXI6IElJZGVudGlmaWVyID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzSWRlbnRpZmllcih0b2tlbikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgaWRlbnRpZmllciA9IHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlSWRlbnRpZmllcih0b2tlbi52YWx1ZSwgdGhpcy50cmFja1Bvc2l0aW9uVW5hcnkodG9rZW4pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChhc0RlY2xhcmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV4Y2VwdGlvbih0b2tlbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIihcIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFyZ3M6IElJZGVudGlmaWVyW10gPSBbXTtcclxuICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgd2hpbGUgKCF0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwiKVwiKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmxleC5pc0lkZW50aWZpZXIodG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFeGNlcHRpb24odG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJnID0gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVJZGVudGlmaWVyKHRva2VuLnZhbHVlLCB0aGlzLnRyYWNrUG9zaXRpb25VbmFyeSh0b2tlbikpO1xyXG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKGFyZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXgubWF0Y2hQdW5jdHVhdGlvbihcIixcIik7XHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCIpXCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gdGhpcy5wYXJzZUZ1bmN0aW9uQm9keSgpO1xyXG4gICAgICAgICAgICBpZiAoIWJvZHkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmIChhc0RlY2xhcmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVEZWNsYXJhdGlvbkZ1bmN0aW9uKGlkZW50aWZpZXIsIGFyZ3MsIGJvZHksIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uRnVuY3Rpb24oaWRlbnRpZmllciwgYXJncywgYm9keSwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlRnVuY3Rpb25Cb2R5KCk6IElCbG9ja1N0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3U3dpdGNoU2NvcGUoKTtcclxuICAgICAgICAgICAgdGhpcy5uZXdJdGVyYXRpb25TY29wZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmJlZ2luRnVuY3Rpb24oKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0bXQgPSB0aGlzLnBhcnNlQmxvY2tTdGF0ZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoRnVuY3Rpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5yZXN0b3JlU3dpdGNoU2NvcGUoKTtcclxuICAgICAgICAgICAgdGhpcy5yZXN0b3JlSXRlcmF0aW9uU2NvcGUoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzdG10O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vL1BhcnNlIEZ1bmN0aW9uLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3RzRGVmaW5pdGlvbnMvdHNkLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwidXRpbGl0aWVzL0V4Y2VwdGlvbi50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJsZXhpY2FsL0xleGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImxleGljYWwvQ2hhcmFjdGVyU3RyZWFtLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cInN5bnRheC9QYXJzZXIudHNcIiAvPlxyXG5cclxubW9kdWxlIHRybC5mcm9udGVuZC5hcGkge1xyXG5cclxuXHRpbnRlcmZhY2UgSVRva2VuaXplUmVzdWx0IHtcclxuXHRcdHRva2VuczogbGV4aWNhbC5JVG9rZW5bXSxcclxuXHRcdGV4Y2VwdGlvbnM/OiB1dGlsaXRpZXMuSUV4Y2VwdGlvbltdXHJcblx0fVxyXG4gICAgXHJcblx0aW50ZXJmYWNlIElQYXJzZXJSZXN1bHQge1xyXG5cdFx0cHJvZ3JhbTogYW55LFxyXG5cdFx0ZXhjZXB0aW9ucz86IHV0aWxpdGllcy5JRXhjZXB0aW9uW11cclxuXHR9ICAgIFxyXG5cclxuXHRleHBvcnQgZnVuY3Rpb24gdG9rZW5pemUoc3JjOiBzdHJpbmcsIG9wdGlvbnM/OiBsZXhpY2FsLklMZXhlck9wdGlvbnMpOiBJVG9rZW5pemVSZXN1bHQge1xyXG5cdFx0Y29uc3QgY2hhclN0cmVhbSA9IG5ldyBsZXhpY2FsLkNoYXJhY3RlclN0cmVhbShzcmMpLFxyXG5cdFx0XHRleGNlcHRpb25IYW5kbGVyID0gbmV3IHV0aWxpdGllcy5FeGNlcHRpb25IYW5kbGVyKCksXHJcblx0XHRcdGxleGVyID0gbmV3IGxleGljYWwuTGV4ZXIoY2hhclN0cmVhbSwgZXhjZXB0aW9uSGFuZGxlciwgb3B0aW9ucyk7XHJcblxyXG5cdFx0Y29uc3QgdG9rZW5zOiBsZXhpY2FsLklUb2tlbltdID0gW107XHJcblx0XHR3aGlsZSAobGV4ZXIuaGFzTmV4dCgpKSB7XHJcblx0XHRcdGNvbnN0IHRva2VuID0gbGV4ZXIubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgdG9rZW5pemVSZXN1bHQ6IElUb2tlbml6ZVJlc3VsdCA9IHtcclxuXHRcdFx0dG9rZW5zOiB0b2tlbnNcclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKGV4Y2VwdGlvbkhhbmRsZXIuaGFzRXhjZXB0aW9ucygpKSB7XHJcblx0XHRcdHRva2VuaXplUmVzdWx0LmV4Y2VwdGlvbnMgPSBleGNlcHRpb25IYW5kbGVyLmdldEV4Y2VwdGlvbnMoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0b2tlbml6ZVJlc3VsdDtcclxuXHR9XHJcbiAgICBcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBwYXJzZShzcmM6IHN0cmluZywgb3B0aW9ucz86IHN5bnRheC5JUGFyc2VyT3B0aW9ucyk6IElQYXJzZXJSZXN1bHQge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBzeW50YXguUGFyc2VyKHNyYywgb3B0aW9ucyk7XHJcbiAgICAgICAgY29uc3QgcGFyc2VOb2RlcyA9IHBhcnNlci5wYXJzZSgpO1xyXG4gICAgICAgIFxyXG5cdFx0Y29uc3QgcGFyc2VSZXN1bHQ6IElQYXJzZXJSZXN1bHQgPSB7XHJcblx0XHRcdHByb2dyYW06IHBhcnNlTm9kZXNcclxuXHRcdH07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICBjb25zdCBleGNlcHRpb25IYW5kbGVyID0gcGFyc2VyLmdldEV4Y2VwdGlvbnMoKTtcclxuICAgICAgICBcclxuXHRcdGlmIChleGNlcHRpb25IYW5kbGVyLmhhc0V4Y2VwdGlvbnMoKSkge1xyXG5cdFx0XHRwYXJzZVJlc3VsdC5leGNlcHRpb25zID0gZXhjZXB0aW9uSGFuZGxlci5nZXRFeGNlcHRpb25zKCk7XHJcblx0XHR9ICAgICAgICBcclxuICAgICAgICByZXR1cm4gcGFyc2VSZXN1bHQ7XHJcbiAgICB9XHJcblxyXG59ICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
