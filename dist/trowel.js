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
                    }(lexical.LiteralSubType || (lexical.LiteralSubType = {})));
                    var LiteralSubType = lexical.LiteralSubType;
                    ;
                }(lexical = frontend.lexical || (frontend.lexical = {})));
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
                            lf: 10
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
                            return lexical.TokenDefinitions.KW[str];
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
                        boolean: 'boolean'
                    };
                    function toReadableTokenType(tokenType) {
                        switch (tokenType) {
                        case lexical.TokenType.keyword:
                            return ReadableTokenType.keyword;
                        case lexical.TokenType.identifier:
                            return ReadableTokenType.identifier;
                        case lexical.TokenType.literal:
                            return ReadableTokenType.literal;
                        case lexical.TokenType.punctuation:
                            return ReadableTokenType.punctuation;
                        case lexical.TokenType.comment:
                            return ReadableTokenType.comment;
                        case lexical.TokenType.eof:
                            return ReadableTokenType.eof;
                        case lexical.TokenType.error:
                            return ReadableTokenType.error;
                        }
                        throw new Error('Unexpected token type');
                    }
                    function toReadableLiteralSubType(literalSubType) {
                        switch (literalSubType) {
                        case lexical.LiteralSubType.string:
                            return ReadableLiteralSubType.string;
                        case lexical.LiteralSubType.number:
                            return ReadableLiteralSubType.number;
                        case lexical.LiteralSubType.null:
                            return ReadableLiteralSubType.null;
                        case lexical.LiteralSubType.boolean:
                            return ReadableLiteralSubType.boolean;
                        }
                        throw new Error('Unexpected token type');
                    }
                    var PNC = lexical.TokenDefinitions.PNC_SINGLE;
                    var Lexer = function () {
                        function Lexer(charStream, exceptionHandler, options) {
                            this.charStream = charStream;
                            this.exceptionHandler = exceptionHandler;
                            this.options = options;
                            this.options = _.defaults(_.clone(options || {}), Lexer.defaultLexerOptions);
                            this.lineno = 1;
                            this.currLineCursor = 0;
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
                                lookup[frontend.utilities.CharPoints.codePointAt(numChar, 0)] = Lexer.prototype.stateNumber;
                            });
                            lookup[PNC.lbrace] = Lexer.prototype.statePunctuationSingle;
                            lookup[PNC.rbrace] = Lexer.prototype.statePunctuationSingle;
                            lookup[PNC.lparenth] = Lexer.prototype.statePunctuationSingle;
                            lookup[PNC.rparenth] = Lexer.prototype.statePunctuationSingle;
                            lookup[PNC.lbracket] = Lexer.prototype.statePunctuationSingle;
                            lookup[PNC.rbracket] = Lexer.prototype.statePunctuationSingle;
                            // . .1
                            lookup[PNC.dot] = function () {
                                return States.dotOrNumber;
                            };
                            lookup[PNC.semicolon] = Lexer.prototype.statePunctuationSingle;
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
                            lookup[PNC.tilde] = Lexer.prototype.statePunctuationSingle;
                            lookup[PNC.quest] = Lexer.prototype.statePunctuationSingle;
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
                        Lexer.prototype.matchPunctuation = function (value) {
                            var token = this.lookAheadNextToken();
                            if (this.isPunctuationValue(token, value)) {
                                this.nextToken();
                                return true;
                            }
                            return false;
                        };
                        Lexer.prototype.matchKeyword = function (value) {
                            var token = this.lookAheadNextToken();
                            if (this.isKeywordValue(token, value)) {
                                this.nextToken();
                                return true;
                            }
                            return false;
                        };
                        Lexer.prototype.nextToken = function () {
                            var lookAheadToken = this.lookAheadToken;
                            if (lookAheadToken) {
                                this.lookAheadToken = undefined;
                                return this.currentToken = lookAheadToken;
                            }
                            var nextState = this.stateInit();
                            while (nextState) {
                                nextState = this[nextState].call(this);
                            }
                            if (!this.token) {
                                this.token = this.createToken(lexical.TokenType.error, undefined);
                            }
                            if (this.options.readableTokensMode && this.token) {
                                this.token.type = toReadableTokenType(this.token.type);
                                if (this.token.subType) {
                                    this.token.subType = toReadableLiteralSubType(this.token.subType);
                                }
                            }
                            return this.currentToken = this.token;
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
                        };
                        /////// final states //////
                        ///////////////////////////////////////////
                        // States
                        Lexer.prototype.stateInit = function () {
                            //cleanup current token
                            this.token = undefined;
                            //track cursor position
                            this.startLineno = this.lineno;
                            this.relativeStartCursor = this.charStream.getCursor() - this.currLineCursor;
                            this.absoluteStartCursor = this.charStream.getCursor();
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
                                    this.exceptionHandler.addException('unexpected token "' + frontend.utilities.CharPoints.fromCodePoint(char) + '"', this.lineno, this.charStream.getCursor());
                                    nextState = States.error;
                                }
                            }
                            return nextState;
                        };
                        Lexer.prototype.stateIdentifier = function () {
                            var charGen = frontend.utilities.CharPoints.createStringFromCharPointGenerator(), char = this.charStream.getNextChar();
                            if (!this.scanUnicodeEscapeSequence(charGen, char)) {
                                this.exceptionHandler.addException('', this.lineno, this.charStream.getCursor());
                                return States.error;
                            }
                            while (true) {
                                var char_1 = this.charStream.getNextChar();
                                if (lexical.Identifyers.isIdentifierPart(char_1)) {
                                    if (!this.scanUnicodeEscapeSequence(charGen, char_1)) {
                                        this.exceptionHandler.addException('', this.lineno, this.charStream.getCursor());
                                        return States.error;
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
                                            if (!this.handleScanHexDigits(2, charGen)) {
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
                                        this.exceptionHandler.addException('unclosed string', this.lineno, this.charStream.getCursor());
                                        return States.error;
                                    } else {
                                        charGen.addCharPoint(char);
                                    }
                                }
                                this.token = this.createToken(lexical.TokenType.literal, charGen.getString(), lexical.LiteralSubType.string);
                                return States.finish;
                            };
                        };
                        Lexer.prototype.stateNumber = function () {
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
                            this.charStream.fwdCursor();
                            this.charStream.matchComplex(function (char) {
                                return char === PNC.lf || char === undefined;
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
                                    this.exceptionHandler.addException('unclosed comment', this.lineno, this.charStream.getCursor());
                                    return States.error;
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
                                    var hexDigit = this.scanHexDigits(4);
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
                                this.exceptionHandler.addException('', this.lineno, this.charStream.getCursor());
                                return States.error;
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
                            var currCursorpos;
                            if (char === undefined) {
                                currCursorpos = this.charStream.getCursor();
                            } else {
                                this.charStream.bwdCursor();
                                currCursorpos = this.charStream.getCursor();
                            }
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
                                    this.exceptionHandler.addException('exponential should postfixed by numbers', this.lineno, this.charStream.getCursor());
                                    return;
                                }
                                var num = this.createNumber(digits, digits.length, 0);
                                return negative ? -num : num;
                            } else if (char !== undefined) {
                                this.charStream.bwdCursor();
                            }
                            return 0;
                        };
                        Lexer.prototype.scanHexDigits = function (times) {
                            if (this.scanHexDigitsTimes(times)) {
                                var char = this.charStream.getCursor(), hexStr = this.charStream.tokenize(char - times);
                                return parseInt(hexStr, 16);
                            }
                        };
                        Lexer.prototype.scanHexDigitsTimes = function (times) {
                            var startingPos = times;
                            do {
                                var char = this.charStream.getNextChar();
                                if (!lexical.Identifyers.isHexDigit(char)) {
                                    this.charStream.bwdCursorRange(startingPos - (times - 1));
                                    return false;
                                }
                            } while (--times);
                            return true;
                        };
                        Lexer.genPunctuationScanner = function (candicatePuncs) {
                            var lastLen = _.last(candicatePuncs).length;
                            var puncsLookup = _.map(new Array(lastLen), function () {
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
                        Lexer.prototype.createPos = function () {
                            return {
                                start: {
                                    line: this.startLineno,
                                    column: this.relativeStartCursor
                                },
                                end: this.getCurrentCursorPos()
                            };
                        };
                        Lexer.prototype.createTokenFromPos = function (type, subType) {
                            return {
                                type: type,
                                value: this.charStream.tokenize(this.absoluteStartCursor),
                                subType: subType,
                                loc: this.createPos()
                            };
                        };
                        Lexer.prototype.createToken = function (type, value, subType) {
                            return {
                                type: type,
                                value: value,
                                subType: subType,
                                loc: this.createPos()
                            };
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
                            var hexDigit = this.scanHexDigits(num);
                            if (hexDigit === undefined) {
                                this.exceptionHandler.addException('', this.lineno, this.charStream.getCursor());
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
                        Lexer.defaultLexerOptions = {
                            loc: false,
                            readableTokensMode: true
                        };
                        return Lexer;
                    }();
                    lexical.Lexer = Lexer;
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
        /// <reference path="../../tsDefinitions/tsd.d.ts" />
        /// <reference path="lexical/Lexer.ts" />
        /// <reference path="utilities/Exception.ts" />
        /// <reference path="lexical/CharacterStream.ts" />
        var trl;
        (function (trl) {
            var frontend;
            (function (frontend) {
                var api;
                (function (api) {
                    function tokenize(src, options) {
                        var cs = new frontend.lexical.CharacterStream(src), eh = new frontend.utilities.ExceptionHandler(), lex = new frontend.lexical.Lexer(cs, eh, options);
                        var tokens = [];
                        while (lex.hasNext()) {
                            var token = lex.nextToken();
                            tokens.push(token);
                        }
                        ;
                        var tokenizeResult = { tokens: tokens };
                        if (eh.hasExceptions()) {
                            tokenizeResult.exceptions = eh.getExceptions();
                        }
                        return tokenizeResult;
                    }
                    api.tokenize = tokenize;
                }(api = frontend.api || (frontend.api = {})));
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
                        NodeFactory.prototype.createDeclarationFunction = function (id, params, body, declarations, loc) {
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
                            var lexOptions = {
                                loc: true,
                                readableTokensMode: false
                            };
                            this.lex = new frontend.lexical.Lexer(this.charStream, this.lexException, lexOptions);
                        }
                        Parser.prototype.addException = function (token) {
                            var value = this.lex.isEof(token) ? 'end of file' : token.value;
                            this.parseException.addException('Undexpected token: \'' + value + '\'', token.loc.start.line, token.loc.start.column);
                        };
                        Parser.prototype.trimOptionalSemicolon = function () {
                            var token = this.lex.lookAheadNextToken();
                            if (this.lex.isPunctuationValue(token, ';')) {
                                this.lex.nextToken();
                            } else if (this.tokenIsInSameLine(token) && !this.lex.isEof(token)) {
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
                            return this.createLoc(startPos, latestToken.loc.end);
                        };
                        Parser.prototype.trackPositionByToken = function (startToken) {
                            var latestToken = this.lex.latestToken();
                            return this.createLoc(startToken.loc.start, latestToken.loc.end);
                        };
                        Parser.prototype.createLoc = function (start, end) {
                            return {
                                start: start,
                                end: end
                            };
                        };
                        Parser.prototype.expectPunctuation = function (value) {
                            var token = this.lex.nextToken();
                            if (this.lex.isPunctuationValue(token, value)) {
                                return true;
                            }
                            this.addException(token);
                            return false;
                        };
                        Parser.prototype.expectKeyword = function (value) {
                            var token = this.lex.nextToken();
                            if (this.lex.isKeywordValue(token, value)) {
                                return true;
                            }
                            this.addException(token);
                            return false;
                        };
                        Parser.prototype.tokenIsInSameLine = function (token) {
                            return token.loc.end.line === this.lex.latestToken().loc.end.line;
                        };
                        Parser.prototype.parse = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            var stmts = this.parseSourceElements();
                            if (!stmts) {
                                return;
                            }
                            return this.nodeFactory.createProgram(stmts, this.trackPositionByToken(initialToken));
                        };
                        Parser.prototype.parseSourceElements = function () {
                            var stmts = [];
                            while (this.lex.hasNext()) {
                                var stmt = this.parseStatement();
                                if (!stmt) {
                                    return;
                                }
                                stmts.push(stmt);
                            }
                            return stmts;
                        };
                        Parser.prototype.parseSourceElement = function () {
                            var token = this.lex.lookAheadNextToken();
                            if (this.lex.isKeywordValue(token, 'function')) {
                                return this.parseFunctionDeclaration();
                            }
                            return this.parseStatement();
                        };
                        Parser.prototype.parseStatement = function () {
                            var token = this.lex.lookAheadNextToken();
                            if (this.lex.isKeyword(token)) {
                                switch (token.value) {
                                case 'var':
                                    return this.parseVariableStatement();
                                }
                            }
                            return this.parseExpressionStatement();
                        };
                        Parser.prototype.parseVariableStatement = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            if (!this.expectKeyword('var')) {
                                return;
                            }
                            var variableDeclarator = this.parseVariableDeclarator();
                            if (!variableDeclarator) {
                                return;
                            }
                            var variableDeclarators = [variableDeclarator];
                            while (this.lex.matchPunctuation(',')) {
                                var variableDeclarator_1 = this.parseVariableDeclarator();
                                if (!variableDeclarator_1) {
                                    return;
                                }
                                variableDeclarators.push(variableDeclarator_1);
                            }
                            if (!this.trimOptionalSemicolon()) {
                                return;
                            }
                            return this.nodeFactory.createDeclarationVariable(variableDeclarators, this.trackPositionByToken(initialToken));
                        };
                        Parser.prototype.parseVariableDeclarator = function () {
                            var token = this.lex.nextToken();
                            if (!this.lex.isIdentifier(token)) {
                                this.addException(token);
                                return;
                            }
                            var expr = null;
                            if (this.lex.matchPunctuation('=')) {
                                expr = this.parseAssignmentExpression();
                                if (!expr) {
                                    return;
                                }
                            }
                            return this.nodeFactory.createVariableDeclarator(token.value, expr, this.trackPositionByToken(token));
                        };
                        Parser.prototype.parseExpressionStatement = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            var expr = this.parseExpression();
                            if (!expr) {
                                return;
                            }
                            if (!this.trimOptionalSemicolon()) {
                                return;
                            }
                            return this.nodeFactory.createStatementExpression(expr, this.trackPositionByToken(initialToken));
                        };
                        Parser.prototype.parseFunctionDeclaration = function () {
                            throw new Error('not implemented yet');
                        };
                        Parser.prototype.parseExpression = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            var expr = this.parseAssignmentExpression();
                            if (!expr) {
                                return;
                            }
                            if (this.lex.matchPunctuation(',')) {
                                var exprs = [expr];
                                do {
                                    var expr_1 = this.parseAssignmentExpression();
                                    if (!expr_1) {
                                        return;
                                    }
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
                            if (!expr) {
                                return;
                            }
                            var token = this.lex.lookAheadNextToken();
                            if (this.lex.isPunctuation(token) && Parser.AssignmentOperators[token.value]) {
                                if (!Parser.isLeftHandExpressionResolvingToReference(expr)) {
                                    this.parseException.addException('Invalid left-hand side in assignment', token.loc.start.line, token.loc.start.column);
                                    return;
                                }
                                this.lex.nextToken();
                                var rexpr = this.parseAssignmentExpression();
                                if (!rexpr) {
                                    return;
                                }
                                return this.nodeFactory.createExpressionAssignment(token.value, expr, rexpr, this.trackPositionByToken(initialToken));
                            }
                            return expr;
                        };
                        Parser.prototype.parseConditionalExpression = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            var expr = this.parseBinaryExpression();
                            if (!expr) {
                                return;
                            }
                            var token = this.lex.lookAheadNextToken();
                            if (this.lex.isPunctuationValue(token, '?')) {
                                this.lex.nextToken();
                                var consequentExpr = this.parseAssignmentExpression();
                                if (!consequentExpr) {
                                    return;
                                }
                                if (!this.expectPunctuation(':')) {
                                    return;
                                }
                                var alternateExpr = this.parseAssignmentExpression();
                                if (!alternateExpr) {
                                    return;
                                }
                                return this.nodeFactory.createExpressionConditional(expr, alternateExpr, consequentExpr, this.trackPositionByToken(initialToken));
                            }
                            return expr;
                        };
                        Parser.isLogicBinaryTokenValue = function (rank) {
                            return rank <= Parser.BinaryTokenValues_islogic;
                        };
                        Parser.prototype.createBinaryExpression = function (rank, operator, left, right) {
                            var loc = this.options.loc ? this.createLoc(left.loc.start, right.loc.end) : undefined;
                            if (Parser.isLogicBinaryTokenValue(rank)) {
                                return this.nodeFactory.createExpressionLogical(operator, left, right, loc);
                            } else {
                                return this.nodeFactory.createExpressionBinary(operator, left, right, loc);
                            }
                        };
                        Parser.prototype.parseBinaryExpression = function () {
                            var lexpr = this.parseUnaryExpression();
                            if (!lexpr) {
                                return;
                            }
                            var token = this.lex.lookAheadNextToken();
                            var binaryRank = Parser.BinaryTokenValues[token.value];
                            if (binaryRank && (this.lex.isPunctuation(token) || this.lex.isKeyword(token))) {
                                this.lex.nextToken();
                                var rexpr = this.parseUnaryExpression();
                                if (!rexpr) {
                                    return;
                                }
                                var exprs = [
                                        lexpr,
                                        rexpr
                                    ], puncs = [token.value], ranks = [binaryRank];
                                while (true) {
                                    token = this.lex.lookAheadNextToken();
                                    var latestRank = Parser.BinaryTokenValues[token.value];
                                    if (!latestRank || !this.lex.isPunctuation(token) && !this.lex.isKeyword(token)) {
                                        break;
                                    }
                                    this.lex.nextToken();
                                    var rexpr_1 = this.parseUnaryExpression();
                                    if (!rexpr_1) {
                                        return;
                                    }
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
                        Parser.prototype.parseUnaryExpression = function () {
                            var token = this.lex.lookAheadNextToken();
                            var unaryRank = Parser.UnaryTokenValues[token.value];
                            if (unaryRank && (this.lex.isPunctuation(token) || this.lex.isKeyword(token))) {
                                this.lex.nextToken();
                                var expr = this.parsePostfixExpression();
                                if (!expr) {
                                    return;
                                }
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
                            if (!expr) {
                                return;
                            }
                            var token = this.lex.lookAheadNextToken();
                            if (this.lex.isPunctuation(token) && token.loc.end.line === this.lex.latestToken().loc.end.line) {
                                if (token.value === '++' || token.value === '--') {
                                    this.lex.nextToken();
                                    return this.nodeFactory.createExpressionUpdate(token.value, expr, false, this.trackPositionByToken(token));
                                }
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
                            var initialToken = this.lex.lookAheadNextToken();
                            var primaryExpr;
                            if (this.lex.isKeyword(initialToken)) {
                                switch (initialToken.value) {
                                case 'function':
                                    return this.parseFunctionExpression();
                                case 'new':
                                    primaryExpr = this.parseNewExpression();
                                }
                            }
                            primaryExpr = primaryExpr || this.parsePrimaryExpression();
                            if (!primaryExpr) {
                                return;
                            }
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
                                    if (!expr) {
                                        return;
                                    }
                                    if (!this.expectPunctuation(']')) {
                                        return;
                                    }
                                    primaryExpr = this.nodeFactory.createExpressionMember(primaryExpr, expr, true, this.trackPositionByToken(initialToken));
                                    break;
                                case '.':
                                    this.lex.nextToken();
                                    var identifier = this.parseIdentifier();
                                    if (!identifier) {
                                        return;
                                    }
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
                                        if (!expr) {
                                            return;
                                        }
                                        if (this.lex.matchPunctuation(')')) {
                                            if (this.options.loc) {
                                                expr.loc = this.trackPositionByToken(token_1);
                                            }
                                            return expr;
                                        } else {
                                            this.addException(this.lex.nextToken());
                                            return;
                                        }
                                    }
                                }
                            }
                            this.addException(token);
                        };
                        Parser.prototype.parseNewExpression = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            if (!this.expectKeyword('new')) {
                                return;
                            }
                            var callExpr = this.parseLeftHandSideExpression(false);
                            if (!callExpr) {
                                return;
                            }
                            var args, token = this.lex.lookAheadNextToken();
                            if (this.lex.isPunctuationValue(token, '(')) {
                                args = this.parseArguments();
                                if (!args) {
                                    return;
                                }
                            }
                            return this.nodeFactory.createExpressionNew(callExpr, args || [], this.trackPositionByToken(initialToken));
                        };
                        Parser.prototype.parseArguments = function () {
                            if (!this.expectPunctuation('(')) {
                                return;
                            }
                            var token = this.lex.lookAheadNextToken();
                            var exprs = [];
                            if (this.lex.isPunctuationValue(token, ')')) {
                                this.lex.nextToken();
                                return exprs;
                            }
                            while (true) {
                                var expr = this.parseAssignmentExpression();
                                if (!expr) {
                                    return;
                                }
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
                            if (!this.expectPunctuation('[')) {
                                return;
                            }
                            var arrayExprs = [];
                            this.trimArrayCommas(arrayExprs);
                            while (!this.lex.matchPunctuation(']')) {
                                var assignExpr = this.parseAssignmentExpression();
                                if (!assignExpr) {
                                    return;
                                }
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
                            if (!this.expectPunctuation('{')) {
                                return;
                            }
                            var properties = [];
                            while (true) {
                                var token_2 = this.lex.lookAheadNextToken();
                                if (this.lex.isPunctuationValue(token_2, '}')) {
                                    this.lex.nextToken();
                                    break;
                                }
                                var property = this.parsePropertyAssignment();
                                if (!property) {
                                    return;
                                }
                                properties.push(property);
                                token_2 = this.lex.nextToken();
                                if (this.lex.isPunctuationValue(token_2, '}')) {
                                    break;
                                } else {
                                    if (!this.lex.isPunctuationValue(token_2, ',')) {
                                        this.addException(token_2);
                                        return;
                                    }
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
                            if (!propertyName) {
                                return;
                            }
                            var token = this.lex.nextToken();
                            if (this.lex.isPunctuationValue(token, ':')) {
                                var expr = this.parseAssignmentExpression();
                                if (!expr) {
                                    return;
                                }
                                return this.nodeFactory.createObjectProperty(propertyName, expr, kind, this.trackPositionByToken(initialToken));
                            } else if (this.lex.isPunctuationValue(token, '(')) {
                                var args = [];
                                token = this.lex.nextToken();
                                if (this.lex.isIdentifier(token)) {
                                    args.push(token.value);
                                    if (!this.expectPunctuation(')')) {
                                        return;
                                    }
                                } else if (!this.lex.isPunctuationValue(token, ')')) {
                                    this.addException(token);
                                    return;
                                }
                                if (!this.expectPunctuation('{')) {
                                    return;
                                }
                                var functionBody = this.parseFunctionBody();
                                if (!this.expectPunctuation('}')) {
                                    return;
                                }
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
                        Parser.prototype.parseFunctionExpression = function () {
                            throw new Error('not implemented yet');
                        };
                        Parser.prototype.parseFunctionBody = function () {
                            throw new Error('not implemented yet');
                        };
                        Parser.defaultParserOptions = { loc: false };
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
                            'in ': Parser.BinaryTokenValues_rel,
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
    }
    return trl;
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL2xleGljYWwvSUxleGVyLnRzIiwiZnJvbnRlbmQvdXRpbGl0aWVzL0NoYXJQb2ludHMudHMiLCJmcm9udGVuZC9sZXhpY2FsL1Rva2VuRGVmaW5pdGlvbnMudHMiLCJmcm9udGVuZC9sZXhpY2FsL0lkZW50aWZ5ZXJzLnRzIiwiZnJvbnRlbmQvbGV4aWNhbC9MZXhlci50cyIsImZyb250ZW5kL3V0aWxpdGllcy9FeGNlcHRpb24udHMiLCJmcm9udGVuZC9sZXhpY2FsL0NoYXJhY3RlclN0cmVhbS50cyIsImZyb250ZW5kL2FwaS50cyIsImZyb250ZW5kL3N5bnRheC9Ob2RlRmFjdG9yeS50cyIsImZyb250ZW5kL3N5bnRheC9QYXJzZXIudHMiLCJmcm9udGVuZC91dGlsaXRpZXMvQXNzZXJ0aW9uLnRzIl0sIm5hbWVzIjpbInRybCIsInRybC5mcm9udGVuZCIsInRybC5mcm9udGVuZC5sZXhpY2FsIiwidHJsLmZyb250ZW5kLmxleGljYWwuVG9rZW5UeXBlIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGl0ZXJhbFN1YlR5cGUiLCJ0cmwuZnJvbnRlbmQudXRpbGl0aWVzIiwidHJsLmZyb250ZW5kLnV0aWxpdGllcy5DaGFyUG9pbnRzIiwidHJsLmZyb250ZW5kLnV0aWxpdGllcy5DaGFyUG9pbnRzLmNyZWF0ZVN0cmluZ0Zyb21DaGFyUG9pbnRHZW5lcmF0b3IiLCJ0cmwuZnJvbnRlbmQudXRpbGl0aWVzLkNoYXJQb2ludHMuZ2V0RGlnaXRGcm9tQ2hhclBvaW50IiwidHJsLmZyb250ZW5kLnV0aWxpdGllcy5DaGFyUG9pbnRzLmNvZGVQb2ludEF0IiwidHJsLmZyb250ZW5kLnV0aWxpdGllcy5DaGFyUG9pbnRzLmZyb21Db2RlUG9pbnQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5Ub2tlbkRlZmluaXRpb25zIiwidHJsLmZyb250ZW5kLmxleGljYWwuSWRlbnRpZnllcnMiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5JZGVudGlmeWVycy5pc0hleERpZ2l0IiwidHJsLmZyb250ZW5kLmxleGljYWwuSWRlbnRpZnllcnMuaXNEaWdpdCIsInRybC5mcm9udGVuZC5sZXhpY2FsLklkZW50aWZ5ZXJzLmlzS2V5d29yZCIsInRybC5mcm9udGVuZC5sZXhpY2FsLklkZW50aWZ5ZXJzLmlzTGluZVRlcm1pbmF0b3IiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5JZGVudGlmeWVycy5pc0lkZW50aWZpZXJTdGFydCIsInRybC5mcm9udGVuZC5sZXhpY2FsLklkZW50aWZ5ZXJzLmlzSWRlbnRpZmllclBhcnQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5JZGVudGlmeWVycy5pc1NpbXBsZVVuaWNvZGVDb250aW51ZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLklkZW50aWZ5ZXJzLmlzQ29tcGxleFVuaWNvZGVDb250aW51ZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLklkZW50aWZ5ZXJzLmlzU2ltcGxlVW5pY29kZVN0YXJ0IiwidHJsLmZyb250ZW5kLmxleGljYWwuSWRlbnRpZnllcnMuaXNDb21wbGV4VW5pY29kZVN0YXJ0IiwidHJsLmZyb250ZW5kLmxleGljYWwuSWRlbnRpZnllcnMuaXNQdW5jdHVhdGlvblN0YXJ0IiwidHJsLmZyb250ZW5kLmxleGljYWwudG9SZWFkYWJsZVRva2VuVHlwZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLnRvUmVhZGFibGVMaXRlcmFsU3ViVHlwZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuY29uc3RydWN0b3IiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5pbml0aWF0ZUNoYXJlY3Rlckxvb2t1cE9uY2UiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5pc0Vycm9yIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuaXNFb2YiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5pc0xpdGVyYWwiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5pc1B1bmN0dWF0aW9uIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuaXNLZXl3b3JkIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuaXNJZGVudGlmaWVyIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuaXNQdW5jdHVhdGlvblZhbHVlIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuaXNLZXl3b3JkVmFsdWUiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5pc0lkZW50aWZpZXJWYWx1ZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLm1hdGNoUHVuY3R1YXRpb24iLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5tYXRjaEtleXdvcmQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5uZXh0VG9rZW4iLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5sYXRlc3RUb2tlbiIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmxvb2tBaGVhZE5leHRUb2tlbiIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmhhc05leHQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5nZXRDdXJyZW50Q3Vyc29yUG9zIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc3RhdGVJbml0IiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc3RhdGVJZGVudGlmaWVyIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuZ2VuU3RhdGVTdHJpbmciLCJjaGFyU3RyZWFtIiwiZ2V0TmV4dENoYXIiLCJjaGFyR2VuIiwiZnJvbnRlbmQiLCJ1dGlsaXRpZXMiLCJDaGFyUG9pbnRzIiwiY3JlYXRlU3RyaW5nRnJvbUNoYXJQb2ludEdlbmVyYXRvciIsImNoYXIiLCJzdHJpbmdUZXJtaW5hdG9yQ2hhciIsIlBOQyIsImJhY2tzbGFzaCIsImIiLCJhZGRDaGFyUG9pbnQiLCJmIiwibiIsInIiLCJ0IiwidiIsIngiLCJoYW5kbGVTY2FuSGV4RGlnaXRzIiwiU3RhdGVzIiwiZXJyb3IiLCJ1IiwibGV4aWNhbCIsIklkZW50aWZ5ZXJzIiwiaXNMaW5lVGVybWluYXRvciIsImhhbmRsZU5ld0xpbmUiLCJ1bmRlZmluZWQiLCJleGNlcHRpb25IYW5kbGVyIiwiYWRkRXhjZXB0aW9uIiwibGluZW5vIiwiZ2V0Q3Vyc29yIiwidG9rZW4iLCJjcmVhdGVUb2tlbiIsIlRva2VuVHlwZSIsImxpdGVyYWwiLCJnZXRTdHJpbmciLCJMaXRlcmFsU3ViVHlwZSIsInN0cmluZyIsImZpbmlzaCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnN0YXRlTnVtYmVyIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc3RhdGVEb3RPck51bWJlciIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnN0YXRlRGl2T3JDb21tZW50IiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc3RhdGVQdW5jdHVhdGlvblNpbmdsZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnN0YXRlV2hpdGVTcGFjZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnN0YXRlTGluZVRlcm1pbmF0b3IiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zdGF0ZVNpbmdsZUNvbW1lbnQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zdGF0ZU11bHRpQ29tbWVudCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnNjYW5Vbmljb2RlRXNjYXBlU2VxdWVuY2UiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zY2FuRXhwb25lbnNpYWxBbmRDcmVhdGVOdW1iZXIiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zY2FuRGlnaXRzIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc2NhbkRlY2ltYWwiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zY2FuRXhwb25lbnRpYWwiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zY2FuSGV4RGlnaXRzIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc2NhbkhleERpZ2l0c1RpbWVzIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuZ2VuUHVuY3R1YXRpb25TY2FubmVyIiwiZndkQ3Vyc29yIiwiaSIsImxhc3RMZW4iLCJwdW5jc0xvb2t1cCIsImJ3ZEN1cnNvciIsImNyZWF0ZVRva2VuRnJvbVBvcyIsInB1bmN0dWF0aW9uIiwic3RhcnRQb3MiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5jcmVhdGVQb3MiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5jcmVhdGVUb2tlbkZyb21Qb3MiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5jcmVhdGVUb2tlbiIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmdlbkludGVnZXJGcm9tQXJyYXkiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5jcmVhdGVOdW1iZXIiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5oYW5kbGVTY2FuSGV4RGlnaXRzIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuaGFuZGxlTmV3TGluZSIsInRybC5mcm9udGVuZC51dGlsaXRpZXMuRXhjZXB0aW9uSGFuZGxlciIsInRybC5mcm9udGVuZC51dGlsaXRpZXMuRXhjZXB0aW9uSGFuZGxlci5jb25zdHJ1Y3RvciIsInRybC5mcm9udGVuZC51dGlsaXRpZXMuRXhjZXB0aW9uSGFuZGxlci5hZGRFeGNlcHRpb24iLCJ0cmwuZnJvbnRlbmQudXRpbGl0aWVzLkV4Y2VwdGlvbkhhbmRsZXIuaGFzRXhjZXB0aW9ucyIsInRybC5mcm9udGVuZC51dGlsaXRpZXMuRXhjZXB0aW9uSGFuZGxlci5jbGVhciIsInRybC5mcm9udGVuZC51dGlsaXRpZXMuRXhjZXB0aW9uSGFuZGxlci5nZXRFeGNlcHRpb25zIiwidHJsLmZyb250ZW5kLmxleGljYWwuQ2hhcmFjdGVyU3RyZWFtIiwidHJsLmZyb250ZW5kLmxleGljYWwuQ2hhcmFjdGVyU3RyZWFtLmNvbnN0cnVjdG9yIiwidHJsLmZyb250ZW5kLmxleGljYWwuQ2hhcmFjdGVyU3RyZWFtLmdldE5leHRDaGFyIiwidHJsLmZyb250ZW5kLmxleGljYWwuQ2hhcmFjdGVyU3RyZWFtLmdldENoYXIiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0uZ2V0Q3Vyc29yIiwidHJsLmZyb250ZW5kLmxleGljYWwuQ2hhcmFjdGVyU3RyZWFtLmJ3ZEN1cnNvciIsInRybC5mcm9udGVuZC5sZXhpY2FsLkNoYXJhY3RlclN0cmVhbS5md2RDdXJzb3IiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0uYndkQ3Vyc29yUmFuZ2UiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0udG9rZW5pemUiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0ubWF0Y2giLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0ubWF0Y2hDb21wbGV4IiwidHJsLmZyb250ZW5kLmxleGljYWwuQ2hhcmFjdGVyU3RyZWFtLmlzRW9mIiwidHJsLmZyb250ZW5kLmxleGljYWwuQ2hhcmFjdGVyU3RyZWFtLmhhc05leHQiLCJ0cmwuZnJvbnRlbmQuYXBpIiwidHJsLmZyb250ZW5kLmFwaS50b2tlbml6ZSIsInRybC5mcm9udGVuZC5zeW50YXgiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5IiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jb25zdHJ1Y3RvciIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlTm9kZSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlUHJvZ3JhbSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50RW1wdHkiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudEJsb2NrIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRFeHByZXNzaW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRJZiIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50QnJlYWsiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudENvbnRpbnVlIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRTd2l0Y2giLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudFJldHVybiIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50VGhyb3ciLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudFRyeSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50V2hpbGUiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudERvV2hpbGUiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudEZvciIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50Rm9ySW4iLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudERlYnVnZ2VyIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVEZWNsYXJhdGlvbkZ1bmN0aW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVEZWNsYXJhdGlvblZhcmlhYmxlIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVWYXJpYWJsZURlY2xhcmF0b3IiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25UaGlzIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uQXJyYXkiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25PYmplY3QiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZU9iamVjdFByb3BlcnR5IiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uRnVuY3Rpb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25TZXF1ZW5jZSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvblVuYXJ5IiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uQmluYXJ5IiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uQXNzaWdubWVudCIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvblVwZGF0ZSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbkxvZ2ljYWwiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25Db25kaXRpb25hbCIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbk5ldyIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbkNhbGwiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25NZW1iZXIiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN3aXRjaENhc2UiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUNhdGNoQ2xhdXNlIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVJZGVudGlmaWVyIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVMaXRlcmFsIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5jb25zdHJ1Y3RvciIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmFkZEV4Y2VwdGlvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnRyaW1PcHRpb25hbFNlbWljb2xvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnRyYWNrUG9zaXRpb25VbmFyeSIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnRyYWNrUG9zaXRpb25CeVBvcyIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnRyYWNrUG9zaXRpb25CeVRva2VuIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuY3JlYXRlTG9jIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuZXhwZWN0UHVuY3R1YXRpb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5leHBlY3RLZXl3b3JkIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIudG9rZW5Jc0luU2FtZUxpbmUiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZSIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlU291cmNlRWxlbWVudHMiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVNvdXJjZUVsZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVN0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlVmFyaWFibGVTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVZhcmlhYmxlRGVjbGFyYXRvciIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlRXhwcmVzc2lvblN0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlRnVuY3Rpb25EZWNsYXJhdGlvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlRXhwcmVzc2lvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmlzTGVmdEhhbmRFeHByZXNzaW9uUmVzb2x2aW5nVG9SZWZlcmVuY2UiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUFzc2lnbm1lbnRFeHByZXNzaW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VDb25kaXRpb25hbEV4cHJlc3Npb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5pc0xvZ2ljQmluYXJ5VG9rZW5WYWx1ZSIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmNyZWF0ZUJpbmFyeUV4cHJlc3Npb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUJpbmFyeUV4cHJlc3Npb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVVuYXJ5RXhwcmVzc2lvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlUG9zdGZpeEV4cHJlc3Npb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUlkZW50aWZpZXIiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUxlZnRIYW5kU2lkZUV4cHJlc3Npb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVByaW1hcnlFeHByZXNzaW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VOZXdFeHByZXNzaW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VBcmd1bWVudHMiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUFycmF5TGl0ZXJhbCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnRyaW1BcnJheUNvbW1hcyIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlT2JqZWN0TGl0ZXJhbCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlUHJvcGVydHlBc3NpZ25tZW50IiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VQcm9wZXJ0eU5hbWUiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUZ1bmN0aW9uRXhwcmVzc2lvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlRnVuY3Rpb25Cb2R5IiwidHJsLmZyb250ZW5kLnV0aWxpdGllcy5hc3NlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7UUFBQSxJQUFPQSxHQUFQLEM7UUFBQSxDQUFBLFVBQU9BLEdBQVAsRUFBVTtBQUFBLFlBQUNBLElBQUFBLFFBQUFBLENBQUQ7QUFBQSxZQUFDQSxDQUFBQSxVQUFBQSxRQUFBQSxFQUFRQTtBQUFBQSxnQkFBQ0MsSUFBQUEsT0FBQUEsQ0FBREQ7QUFBQUEsZ0JBQUNDLENBQUFBLFVBQUFBLE9BQUFBLEVBQVFBO0FBQUFBLG9CQUV4QkMsQ0FBQUEsVUFBWUEsU0FBWkEsRUFBcUJBO0FBQUFBLHdCQUN2QkMsU0FBQUEsQ0FBQUEsU0FBQUEsQ0FBQUEsU0FBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsU0FBQUEsQ0FEdUJEO0FBQUFBLHdCQUV2QkMsU0FBQUEsQ0FBQUEsU0FBQUEsQ0FBQUEsWUFBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsWUFBQUEsQ0FGdUJEO0FBQUFBLHdCQUd2QkMsU0FBQUEsQ0FBQUEsU0FBQUEsQ0FBQUEsU0FBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsU0FBQUEsQ0FIdUJEO0FBQUFBLHdCQUl2QkMsU0FBQUEsQ0FBQUEsU0FBQUEsQ0FBQUEsYUFBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsYUFBQUEsQ0FKdUJEO0FBQUFBLHdCQUt2QkMsU0FBQUEsQ0FBQUEsU0FBQUEsQ0FBQUEsU0FBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsU0FBQUEsQ0FMdUJEO0FBQUFBLHdCQU1qQkMsU0FBQUEsQ0FBQUEsU0FBQUEsQ0FBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsS0FBQUEsQ0FOaUJEO0FBQUFBLHdCQU9qQkMsU0FBQUEsQ0FBQUEsU0FBQUEsQ0FBQUEsT0FBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsT0FBQUEsQ0FQaUJEO0FBQUFBLHFCQUFyQkEsQ0FBWUEsT0FBQUEsQ0FBQUEsU0FBQUEsSUFBQUEsQ0FBQUEsT0FBQUEsQ0FBQUEsU0FBQUEsR0FBU0EsRUFBVEEsQ0FBWkEsR0FGd0JEO0FBQUFBLG9CQUV4QkMsSUFBWUEsU0FBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsU0FBWkEsQ0FGd0JEO0FBQUFBLG9CQVl4QkMsQ0FBQUEsVUFBWUEsY0FBWkEsRUFBMEJBO0FBQUFBLHdCQUN0QkUsY0FBQUEsQ0FBQUEsY0FBQUEsQ0FBQUEsUUFBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsUUFBQUEsQ0FEc0JGO0FBQUFBLHdCQUV0QkUsY0FBQUEsQ0FBQUEsY0FBQUEsQ0FBQUEsUUFBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsUUFBQUEsQ0FGc0JGO0FBQUFBLHdCQUd0QkUsY0FBQUEsQ0FBQUEsY0FBQUEsQ0FBQUEsTUFBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsTUFBQUEsQ0FIc0JGO0FBQUFBLHdCQUl0QkUsY0FBQUEsQ0FBQUEsY0FBQUEsQ0FBQUEsU0FBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsU0FBQUEsQ0FKc0JGO0FBQUFBLHFCQUExQkEsQ0FBWUEsT0FBQUEsQ0FBQUEsY0FBQUEsSUFBQUEsQ0FBQUEsT0FBQUEsQ0FBQUEsY0FBQUEsR0FBY0EsRUFBZEEsQ0FBWkEsR0Fad0JEO0FBQUFBLG9CQVl4QkMsSUFBWUEsY0FBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsY0FBWkEsQ0Fad0JEO0FBQUFBLG9CQWlCdkJDLENBakJ1QkQ7QUFBQUEsaUJBQVJBLENBQUFBLE9BQUFBLEdBQUFBLFFBQUFBLENBQUFBLE9BQUFBLElBQUFB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Q0FBTkEsQ0FETUE7QUFBQUEseUJBRGdDek47QUFBQUEscUJBRnBCSjtBQUFBQSxvQkFFVkksU0FBQUEsQ0FBQUEsTUFBQUEsR0FBTUEsTUFBTkEsQ0FGVUo7QUFBQUEsaUJBQVZBLENBQUFBLFNBQUFBLEdBQUFBLFFBQUFBLENBQUFBLFNBQUFBLElBQUFBLENBQUFBLFFBQUFBLENBQUFBLFNBQUFBLEdBQVNBLEVBQVRBLENBQUFBLEdBQUREO0FBQUFBLGFBQVJBLENBQUFBLFFBQUFBLEdBQUFBLEdBQUFBLENBQUFBLFFBQUFBLElBQUFBLENBQUFBLEdBQUFBLENBQUFBLFFBQUFBLEdBQVFBLEVBQVJBLENBQUFBLEdBQUQ7QUFBQSxTQUFWLENBQU9BLEdBQUEsSUFBQSxDQUFBQSxHQUFBLEdBQUcsRUFBSCxDQUFQLEciLCJmaWxlIjoic3JjL3Ryb3dlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZSB0cmwuZnJvbnRlbmQubGV4aWNhbCB7XHJcblx0XHJcbiAgICBleHBvcnQgZW51bSBUb2tlblR5cGUge1xyXG5cdFx0a2V5d29yZCA9IDEsXHJcblx0XHRpZGVudGlmaWVyLFxyXG5cdFx0bGl0ZXJhbCxcclxuXHRcdHB1bmN0dWF0aW9uLFxyXG5cdFx0Y29tbWVudCxcclxuICAgICAgICBlb2YsXHJcbiAgICAgICAgZXJyb3JcclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgIGV4cG9ydCBlbnVtIExpdGVyYWxTdWJUeXBlIHtcclxuICAgICAgICBzdHJpbmcgPSAxLFxyXG4gICAgICAgIG51bWJlcixcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIGJvb2xlYW5cclxuICAgIH07XHJcbiAgICBcclxuXHRleHBvcnQgaW50ZXJmYWNlIElUb2tlblBvc2l0aW9uICB7XHJcblx0XHRsaW5lOiBudW1iZXI7XHJcblx0XHRjb2x1bW46IG51bWJlcjtcclxuXHR9XHJcblx0XHJcblx0ZXhwb3J0IGludGVyZmFjZSBJVG9rZW5Tb3VyY2VMb2NhdGlvbiB7XHJcblx0XHRzb3VyY2U/OiBzdHJpbmc7XHJcblx0XHRzdGFydDogSVRva2VuUG9zaXRpb247XHJcblx0XHRlbmQ6IElUb2tlblBvc2l0aW9uO1xyXG5cdH1cclxuXHRcdFx0XHRcclxuXHRleHBvcnQgaW50ZXJmYWNlIElUb2tlbiB7XHJcblx0XHR0eXBlOiBzdHJpbmcgfCBUb2tlblR5cGUsXHJcblx0XHR2YWx1ZTogYW55LFxyXG5cdFx0c3ViVHlwZT86IHN0cmluZyB8IExpdGVyYWxTdWJUeXBlLFxyXG5cdFx0bG9jPzogSVRva2VuU291cmNlTG9jYXRpb25cclxuXHR9XHJcblx0XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElMZXhlck9wdGlvbnMge1xyXG4gICAgICAgIGxvYz86IGJvb2xlYW47XHJcbiAgICAgICAgcmVhZGFibGVUb2tlbnNNb2RlPzogYm9vbGVhbjtcclxuICAgIH1cclxuICAgIFxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSUxleGVyIHtcclxuICAgICAgICAvL2dldCBuZXh0IHRva2VuXHJcblx0XHRuZXh0VG9rZW4oKTogSVRva2VuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGlzIG5leHQgdG9rZW5cclxuICAgICAgICBoYXNOZXh0KCk6IGJvb2xlYW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcmV0dXJucyB0aGUgbGFzdCBwYXJzZWQgdG9rZW5cclxuICAgICAgICBsYXRlc3RUb2tlbigpOiBJVG9rZW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gYWN0cyBsaWtlIGxvb2tpbmcgZm9yd2FyZCBieSByZXR1cm5pbmcgdGhlIG5leHQgdG9rZW4uXHJcbiAgICAgICAgLy8gbmV4dFRva2VuKCksIGFuZCBoYXNUb2tlbigpIGRvZXMgbm90IGVmZmVjdGVkXHJcbiAgICAgICAgbG9va0FoZWFkTmV4dFRva2VuKCk6IElUb2tlbjsgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBhcmd1bWVudCBpcyB0eXBlIG9mIGVycm9yIHR5cGVcclxuICAgICAgICBpc0Vycm9yKHRva2VuOiBJVG9rZW4pOiBib29sZWFuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBhcmd1bWVudCBpcyB0eXBlIG9mIGVuZCBvZiBmaWxlIHR5cGVcclxuICAgICAgICBpc0VvZih0b2tlbjogSVRva2VuKTogYm9vbGVhbjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgYXJndW1lbnQgaXMgdHlwZSBvZiBsaXRlcmFuIHR5cGVcclxuICAgICAgICBpc0xpdGVyYWwodG9rZW46IElUb2tlbik6IGJvb2xlYW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGFyZ3VtZW50IGlzIHR5cGUgb2YgcHVuY3R1YXRpb24gdHlwZVxyXG4gICAgICAgIGlzUHVuY3R1YXRpb24odG9rZW46IElUb2tlbik6IGJvb2xlYW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGFyZ3VtZW50IGlzIHR5cGUgb2Yga2V5d29yZCB0eXBlXHJcbiAgICAgICAgaXNLZXl3b3JkKHRva2VuOiBJVG9rZW4pOiBib29sZWFuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBhcmd1bWVudCBpcyB0eXBlIG9mIGlkZW50aWZpZXIgdHlwZVxyXG4gICAgICAgIGlzSWRlbnRpZmllcih0b2tlbjogSVRva2VuKTogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGFyZ3VtZW50IGlzIHR5cGUgb2YgcHVuY3R1YXRpb24gdHlwZVxyXG4gICAgICAgIC8vIGFuZCBpcyBlcXVhbCB3aXRoIHRoZSBzcGVjaWZpYyB2YWx1ZVxyXG4gICAgICAgIGlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbjogSVRva2VuLCB2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgYXJndW1lbnQgaXMgdHlwZSBvZiBrZXl3b3JkIHR5cGVcclxuICAgICAgICAvLyBhbmQgaXMgZXF1YWwgd2l0aCB0aGUgc3BlY2lmaWMgdmFsdWVcclxuICAgICAgICBpc0tleXdvcmRWYWx1ZSh0b2tlbjogSVRva2VuLCB2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgYXJndW1lbnQgaXMgdHlwZSBvZiBpZGVudGlmaWVyIHR5cGVcclxuICAgICAgICAvLyBhbmQgaXMgZXF1YWwgd2l0aCB0aGUgc3BlY2lmaWMgdmFsdWVcclxuICAgICAgICBpc0lkZW50aWZpZXJWYWx1ZSh0b2tlbjogSVRva2VuLCB2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zdW1lIHRoZSBuZXh0IHRva2VuIGlmIGl0cyB0eXBlIGlzIHB1bmN0dWF0aW9uXHJcbiAgICAgICAgLy8gYW5kIGlzIGVxdWFsIHdpdGggdGhlIHNwZWNpZmljIHZhbHVlXHJcbiAgICAgICAgbWF0Y2hQdW5jdHVhdGlvbih2YWx1ZTogc3RyaW5nKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zdW1lIHRoZSBuZXh0IHRva2VuIGlmIGl0cyB0eXBlIGlzIGtleXdvcmRcclxuICAgICAgICAvLyBhbmQgaXMgZXF1YWwgd2l0aCB0aGUgc3BlY2lmaWMgdmFsdWVcclxuICAgICAgICBtYXRjaEtleXdvcmQodmFsdWU6IHN0cmluZyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcmV0dXJucyB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiBjdXJzb3IgaXMgdGhlIHNvdXJjZSBzdHJlYW1cclxuICAgICAgICBnZXRDdXJyZW50Q3Vyc29yUG9zKCk6IElUb2tlblBvc2l0aW9uO1xyXG5cdH1cclxufVxyXG5cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3RzRGVmaW5pdGlvbnMvdHNkLmQudHNcIiAvPlxyXG5cclxubW9kdWxlIHRybC5mcm9udGVuZC51dGlsaXRpZXMge1xyXG5cdFxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSVN0cmluZ0Zyb21DaGFyUG9pbnQge1xyXG5cdFx0YWRkQ2hhclBvaW50KGNoYXI6IG51bWJlcik7XHJcblx0XHRnZXRTdHJpbmcoKTogc3RyaW5nO1xyXG5cdH1cclxuXHRcclxuXHRleHBvcnQgY2xhc3MgQ2hhclBvaW50cyB7XHJcblx0XHRzdGF0aWMgY3JlYXRlU3RyaW5nRnJvbUNoYXJQb2ludEdlbmVyYXRvcigpOiBJU3RyaW5nRnJvbUNoYXJQb2ludCB7XHJcblx0XHRcdGxldCBjaGFyQnVmZmVyOiBzdHJpbmdbXSA9IFtdO1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGFkZENoYXJQb2ludDogKGNoYXI6IG51bWJlcikgPT4ge1xyXG5cdFx0XHRcdFx0Y2hhckJ1ZmZlci5wdXNoKENoYXJQb2ludHMuZnJvbUNvZGVQb2ludChjaGFyKSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRnZXRTdHJpbmc6ICgpOiBzdHJpbmcgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGNoYXJCdWZmZXIuam9pbignJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwcml2YXRlIHN0YXRpYyBaRVJPX0NIQVJfQ09ERSA9IFwiMFwiLmNoYXJDb2RlQXQoMCk7XHJcblx0XHRzdGF0aWMgZ2V0RGlnaXRGcm9tQ2hhclBvaW50KGM6IG51bWJlcik6IG51bWJlciB7XHJcblx0XHRcdHJldHVybiBjIC0gQ2hhclBvaW50cy5aRVJPX0NIQVJfQ09ERTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0c3RhdGljIGNvZGVQb2ludEF0KHN0cjogc3RyaW5nLCBwb3M6IG51bWJlcik6IG51bWJlciB7XHJcblx0XHRcdHJldHVybiAoPGFueT5zdHIpLmNvZGVQb2ludEF0KHBvcyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHN0YXRpYyBmcm9tQ29kZVBvaW50KHBvaW50OiBudW1iZXIpOiBzdHJpbmcge1xyXG5cdFx0XHRyZXR1cm4gKDxhbnk+U3RyaW5nKS5mcm9tQ29kZVBvaW50KHBvaW50KTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcbn0iLCJcclxubW9kdWxlIHRybC5mcm9udGVuZC5sZXhpY2FsIHtcclxuXHRjb25zdCB0ID0gdHJ1ZTtcclxuXHRcclxuXHRleHBvcnQgY2xhc3MgVG9rZW5EZWZpbml0aW9ucyB7XHJcblx0XHJcblx0XHRzdGF0aWMgV1MgPSB7XHJcblx0XHRcdDB4MDAwOTogdCxcclxuXHRcdFx0MHgwMDBCOiB0LFxyXG5cdFx0XHQweDAwMEM6IHQsXHJcblx0XHRcdDB4MDAyMDogdCxcclxuXHRcdFx0MHgwMEEwOiB0LFxyXG5cdFx0XHQweEZFRkY6IHRcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHN0YXRpYyBMVCA9IHtcclxuXHRcdFx0MHgwMDBBOiB0LFxyXG5cdFx0XHQweDAwMEQ6IHQsXHJcblx0XHRcdDB4MjAyODogdCxcclxuXHRcdFx0MHgyMDI6IHRcclxuXHRcdH07XHJcblxyXG4vLyAweDIwMEM6IHQsIC8vendualxyXG4vLyAweDIwMEQ6IHQsIC8vendqXHJcblx0XHRcdFx0XHJcblx0XHRzdGF0aWMgS1cgPSB7XHJcblx0XHRcdGJyZWFrOiB0LFxyXG5cdFx0XHRkbzogdCxcclxuXHRcdFx0aW5zdGFuY2VvZjogdCxcclxuXHRcdFx0dHlwZW9mOiB0LFxyXG5cdFx0XHRjYXNlOiB0LFxyXG5cdFx0XHRlbHNlOiB0LFxyXG5cdFx0XHRuZXc6IHQsXHJcblx0XHRcdHZhcjogdCxcclxuXHRcdFx0Y2F0Y2g6IHQsXHJcblx0XHRcdGZpbmFsbHk6IHQsXHJcblx0XHRcdHJldHVybjogdCxcclxuXHRcdFx0dm9pZDogdCxcclxuXHRcdFx0Y29udGludWU6IHQsXHJcblx0XHRcdGZvcjogdCxcclxuXHRcdFx0c3dpdGNoOiB0LFxyXG5cdFx0XHR3aGlsZTogdCxcclxuXHRcdFx0ZGVidWdnZXI6IHQsXHJcblx0XHRcdGZ1bmN0aW9uOiB0LFxyXG5cdFx0XHR0aGlzOiB0LFxyXG5cdFx0XHR3aXRoOiB0LFxyXG5cdFx0XHRkZWZhdWx0OiB0LFxyXG5cdFx0XHRpZjogdCxcclxuXHRcdFx0dGhyb3c6IHQsXHJcblx0XHRcdGRlbGV0ZTogdCxcclxuXHRcdFx0aW46IHQsXHJcblx0XHRcdHRyeTogdCxcclxuXHRcclxuXHRcdFx0Y2xhc3M6IHQsXHJcblx0XHRcdGVudW06IHQsXHJcblx0XHRcdGV4dGVuZHM6IHQsXHJcblx0XHRcdHN1cGVyOiB0LFxyXG5cdFx0XHRjb25zdDogdCxcclxuXHRcdFx0ZXhwb3J0OiB0LFxyXG5cdFx0XHRpbXBvcnQ6IHQsXHJcblx0XHJcblx0XHRcdGltcGxlbWVudHM6IHQsXHJcblx0XHRcdGxldDogdCxcclxuXHRcdFx0cHJpdmF0ZTogdCxcclxuXHRcdFx0cHVibGljOiB0LFxyXG5cdFx0XHRpbnRlcmZhY2U6IHQsXHJcblx0XHRcdHBhY2thZ2U6IHQsXHJcblx0XHRcdHByb3RlY3RlZDogdCxcclxuXHRcdFx0c3RhdGljOiB0LFxyXG5cdFx0XHR5aWVsZDogdFxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0c3RhdGljIExJVCA9IHtcclxuXHRcdFx0bnVsbDogdCxcclxuXHRcdFx0dHJ1ZTogdCxcclxuXHRcdFx0ZmFsc2U6IHRcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHN0YXRpYyBQTkNfU0lOR0xFID0ge1xyXG5cdFx0XHRsYnJhY2U6IDEyMyxcclxuXHRcdFx0cmJyYWNlOiAxMjUsXHJcblx0XHRcdGxwYXJlbnRoOiA0MCxcclxuXHRcdFx0cnBhcmVudGg6IDQxLFxyXG5cdFx0XHRsYnJhY2tldDogOTEsXHJcblx0XHRcdHJicmFja2V0OiA5MyxcclxuXHRcdFx0ZG90OiA0NixcclxuXHRcdFx0c2VtaWNvbG9uOiA1OSxcclxuXHRcdFx0Y29tbWE6IDQ0LFxyXG5cdFx0XHRsZXNzOiA2MCxcclxuXHRcdFx0bW9yZTogNjIsXHJcblx0XHRcdHBsdXM6IDQzLFxyXG5cdFx0XHRtaW51czogNDUsXHJcblx0XHRcdHBlcmNlbnQ6IDM3LFxyXG5cdFx0XHRhbXBlcnNhbmQ6IDM4LFxyXG5cdFx0XHR2ZXJ0aWNhbDogMTI0LFxyXG5cdFx0XHRjYXJldDogOTQsXHJcblx0XHRcdGV4Y2w6IDMzLFxyXG5cdFx0XHR0aWxkZTogMTI2LFxyXG5cdFx0XHRxdWVzdDogNjMsXHJcblx0XHRcdGNvbG9uOiA1OCxcclxuXHRcdFx0YXNzaWduOiA2MSxcclxuXHRcdFx0YXN0ZXJpc2s6IDQyLFxyXG5cdFx0XHRzbGFzaDogNDcsXHJcblx0XHRcdGJhY2tzbGFzaDogOTIsXHJcblx0XHRcdGRvbGxhcjogMzYsXHJcblx0XHRcdGV4cDogMTAxLFxyXG5cdFx0XHRleHBiOiA2OSxcclxuXHRcdFx0YXBvc3Ryb3BoZTogMzksXHJcblx0XHRcdHFtYXJrOiAzNCxcclxuXHRcdFx0emVybzogNDgsXHJcblx0XHRcdFxyXG5cdFx0XHRiOiA5OCxcclxuXHRcdFx0ZjogMTAyLFxyXG5cdFx0XHRuOiAxMTAsXHJcblx0XHRcdHI6IDExNCxcclxuXHRcdFx0dDogMTE2LFxyXG5cdFx0XHR2OiAxMTgsXHJcblx0XHRcdHg6IDEyMCxcclxuXHRcdFx0dTogMTE3LFxyXG5cdFx0XHRcclxuXHRcdFx0bGY6IDB4MDAwQVxyXG5cdFx0fTtcdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0c3RhdGljIFVOSUNPREVfVU5DT01NT05fVEhSRVNIT0xEID0gMTcwO1xyXG5cdFx0XHJcblx0XHRzdGF0aWMgVU5JQ09ERV9DT05USU5VRV9DT01NT04gPSB7IDB4MjAwQzogdCAvKiB6d25qICovLCAweDIwMEQ6IHQgLyogendqICovLCAzNjogdCAvKiAkICovLCA5MjogdCAvKiBcXCAqLywgXHJcblx0XHRcdDQ4OiB0LCA0OTogdCwgNTA6IHQsIDUxOiB0LCA1MjogdCwgNTM6IHQsIDU0OiB0LCA1NTogdCwgNTY6IHQsIDU3OiB0LCA2NTogdCwgNjY6IHQsIDY3OiB0LCA2ODogdCwgNjk6IHQsIDcwOiB0LCA3MTogdCwgNzI6IHQsIDczOiB0LCA3NDogdCwgNzU6IHQsIDc2OiB0LCA3NzogdCwgNzg6IHQsIDc5OiB0LCA4MDogdCwgODE6IHQsIDgyOiB0LCA4MzogdCwgODQ6IHQsIDg1OiB0LCA4NjogdCwgODc6IHQsIDg4OiB0LCA4OTogdCwgOTA6IHQsIDk1OiB0LCA5NzogdCwgOTg6IHQsIDk5OiB0LCAxMDA6IHQsIDEwMTogdCwgMTAyOiB0LCAxMDM6IHQsIDEwNDogdCwgMTA1OiB0LCAxMDY6IHQsIDEwNzogdCwgMTA4OiB0LCAxMDk6IHQsIDExMDogdCwgMTExOiB0LCAxMTI6IHQsIDExMzogdCwgMTE0OiB0LCAxMTU6IHQsIDExNjogdCwgMTE3OiB0LCAxMTg6IHQsIDExOTogdCwgMTIwOiB0LCAxMjE6IHQsIDEyMjogdCB9O1xyXG5cdFx0XHJcblx0XHRzdGF0aWMgVU5JQ09ERV9DT05USU5VRV9VTkNPTU1PTiA9IC9bXFx4QUFcXHhCNVxceEJBXFx4QzAtXFx4RDZcXHhEOC1cXHhGNlxceEY4LVxcdTAyNDFcXHUwMjUwLVxcdTAyQzFcXHUwMkM2LVxcdTAyRDFcXHUwMkUwLVxcdTAyRTRcXHUwMkVFXFx1MDMwMC1cXHUwMzZGXFx1MDM3QVxcdTAzODZcXHUwMzg4LVxcdTAzOEFcXHUwMzhDXFx1MDM4RS1cXHUwM0ExXFx1MDNBMy1cXHUwM0NFXFx1MDNEMC1cXHUwM0Y1XFx1MDNGNy1cXHUwNDgxXFx1MDQ4My1cXHUwNDg2XFx1MDQ4QS1cXHUwNENFXFx1MDREMC1cXHUwNEY5XFx1MDUwMC1cXHUwNTBGXFx1MDUzMS1cXHUwNTU2XFx1MDU1OVxcdTA1NjEtXFx1MDU4N1xcdTA1OTEtXFx1MDVCOVxcdTA1QkItXFx1MDVCRFxcdTA1QkZcXHUwNUMxXFx1MDVDMlxcdTA1QzRcXHUwNUM1XFx1MDVDN1xcdTA1RDAtXFx1MDVFQVxcdTA1RjAtXFx1MDVGMlxcdTA2MTAtXFx1MDYxNVxcdTA2MjEtXFx1MDYzQVxcdTA2NDAtXFx1MDY1RVxcdTA2NjAtXFx1MDY2OVxcdTA2NkUtXFx1MDZEM1xcdTA2RDUtXFx1MDZEQ1xcdTA2REYtXFx1MDZFOFxcdTA2RUEtXFx1MDZGQ1xcdTA2RkZcXHUwNzEwLVxcdTA3NEFcXHUwNzRELVxcdTA3NkRcXHUwNzgwLVxcdTA3QjFcXHUwOTAxLVxcdTA5MzlcXHUwOTNDLVxcdTA5NERcXHUwOTUwLVxcdTA5NTRcXHUwOTU4LVxcdTA5NjNcXHUwOTY2LVxcdTA5NkZcXHUwOTdEXFx1MDk4MS1cXHUwOTgzXFx1MDk4NS1cXHUwOThDXFx1MDk4RlxcdTA5OTBcXHUwOTkzLVxcdTA5QThcXHUwOUFBLVxcdTA5QjBcXHUwOUIyXFx1MDlCNi1cXHUwOUI5XFx1MDlCQy1cXHUwOUM0XFx1MDlDN1xcdTA5QzhcXHUwOUNCLVxcdTA5Q0VcXHUwOUQ3XFx1MDlEQ1xcdTA5RERcXHUwOURGLVxcdTA5RTNcXHUwOUU2LVxcdTA5RjFcXHUwQTAxLVxcdTBBMDNcXHUwQTA1LVxcdTBBMEFcXHUwQTBGXFx1MEExMFxcdTBBMTMtXFx1MEEyOFxcdTBBMkEtXFx1MEEzMFxcdTBBMzJcXHUwQTMzXFx1MEEzNVxcdTBBMzZcXHUwQTM4XFx1MEEzOVxcdTBBM0NcXHUwQTNFLVxcdTBBNDJcXHUwQTQ3XFx1MEE0OFxcdTBBNEItXFx1MEE0RFxcdTBBNTktXFx1MEE1Q1xcdTBBNUVcXHUwQTY2LVxcdTBBNzRcXHUwQTgxLVxcdTBBODNcXHUwQTg1LVxcdTBBOERcXHUwQThGLVxcdTBBOTFcXHUwQTkzLVxcdTBBQThcXHUwQUFBLVxcdTBBQjBcXHUwQUIyXFx1MEFCM1xcdTBBQjUtXFx1MEFCOVxcdTBBQkMtXFx1MEFDNVxcdTBBQzctXFx1MEFDOVxcdTBBQ0ItXFx1MEFDRFxcdTBBRDBcXHUwQUUwLVxcdTBBRTNcXHUwQUU2LVxcdTBBRUZcXHUwQjAxLVxcdTBCMDNcXHUwQjA1LVxcdTBCMENcXHUwQjBGXFx1MEIxMFxcdTBCMTMtXFx1MEIyOFxcdTBCMkEtXFx1MEIzMFxcdTBCMzJcXHUwQjMzXFx1MEIzNS1cXHUwQjM5XFx1MEIzQy1cXHUwQjQzXFx1MEI0N1xcdTBCNDhcXHUwQjRCLVxcdTBCNERcXHUwQjU2XFx1MEI1N1xcdTBCNUNcXHUwQjVEXFx1MEI1Ri1cXHUwQjYxXFx1MEI2Ni1cXHUwQjZGXFx1MEI3MVxcdTBCODJcXHUwQjgzXFx1MEI4NS1cXHUwQjhBXFx1MEI4RS1cXHUwQjkwXFx1MEI5Mi1cXHUwQjk1XFx1MEI5OVxcdTBCOUFcXHUwQjlDXFx1MEI5RVxcdTBCOUZcXHUwQkEzXFx1MEJBNFxcdTBCQTgtXFx1MEJBQVxcdTBCQUUtXFx1MEJCOVxcdTBCQkUtXFx1MEJDMlxcdTBCQzYtXFx1MEJDOFxcdTBCQ0EtXFx1MEJDRFxcdTBCRDdcXHUwQkU2LVxcdTBCRUZcXHUwQzAxLVxcdTBDMDNcXHUwQzA1LVxcdTBDMENcXHUwQzBFLVxcdTBDMTBcXHUwQzEyLVxcdTBDMjhcXHUwQzJBLVxcdTBDMzNcXHUwQzM1LVxcdTBDMzlcXHUwQzNFLVxcdTBDNDRcXHUwQzQ2LVxcdTBDNDhcXHUwQzRBLVxcdTBDNERcXHUwQzU1XFx1MEM1NlxcdTBDNjBcXHUwQzYxXFx1MEM2Ni1cXHUwQzZGXFx1MEM4MlxcdTBDODNcXHUwQzg1LVxcdTBDOENcXHUwQzhFLVxcdTBDOTBcXHUwQzkyLVxcdTBDQThcXHUwQ0FBLVxcdTBDQjNcXHUwQ0I1LVxcdTBDQjlcXHUwQ0JDLVxcdTBDQzRcXHUwQ0M2LVxcdTBDQzhcXHUwQ0NBLVxcdTBDQ0RcXHUwQ0Q1XFx1MENENlxcdTBDREVcXHUwQ0UwXFx1MENFMVxcdTBDRTYtXFx1MENFRlxcdTBEMDJcXHUwRDAzXFx1MEQwNS1cXHUwRDBDXFx1MEQwRS1cXHUwRDEwXFx1MEQxMi1cXHUwRDI4XFx1MEQyQS1cXHUwRDM5XFx1MEQzRS1cXHUwRDQzXFx1MEQ0Ni1cXHUwRDQ4XFx1MEQ0QS1cXHUwRDREXFx1MEQ1N1xcdTBENjBcXHUwRDYxXFx1MEQ2Ni1cXHUwRDZGXFx1MEQ4MlxcdTBEODNcXHUwRDg1LVxcdTBEOTZcXHUwRDlBLVxcdTBEQjFcXHUwREIzLVxcdTBEQkJcXHUwREJEXFx1MERDMC1cXHUwREM2XFx1MERDQVxcdTBEQ0YtXFx1MERENFxcdTBERDZcXHUwREQ4LVxcdTBEREZcXHUwREYyXFx1MERGM1xcdTBFMDEtXFx1MEUzQVxcdTBFNDAtXFx1MEU0RVxcdTBFNTAtXFx1MEU1OVxcdTBFODFcXHUwRTgyXFx1MEU4NFxcdTBFODdcXHUwRTg4XFx1MEU4QVxcdTBFOERcXHUwRTk0LVxcdTBFOTdcXHUwRTk5LVxcdTBFOUZcXHUwRUExLVxcdTBFQTNcXHUwRUE1XFx1MEVBN1xcdTBFQUFcXHUwRUFCXFx1MEVBRC1cXHUwRUI5XFx1MEVCQi1cXHUwRUJEXFx1MEVDMC1cXHUwRUM0XFx1MEVDNlxcdTBFQzgtXFx1MEVDRFxcdTBFRDAtXFx1MEVEOVxcdTBFRENcXHUwRUREXFx1MEYwMFxcdTBGMThcXHUwRjE5XFx1MEYyMC1cXHUwRjI5XFx1MEYzNVxcdTBGMzdcXHUwRjM5XFx1MEYzRS1cXHUwRjQ3XFx1MEY0OS1cXHUwRjZBXFx1MEY3MS1cXHUwRjg0XFx1MEY4Ni1cXHUwRjhCXFx1MEY5MC1cXHUwRjk3XFx1MEY5OS1cXHUwRkJDXFx1MEZDNlxcdTEwMDAtXFx1MTAyMVxcdTEwMjMtXFx1MTAyN1xcdTEwMjlcXHUxMDJBXFx1MTAyQy1cXHUxMDMyXFx1MTAzNi1cXHUxMDM5XFx1MTA0MC1cXHUxMDQ5XFx1MTA1MC1cXHUxMDU5XFx1MTBBMC1cXHUxMEM1XFx1MTBEMC1cXHUxMEZBXFx1MTBGQ1xcdTExMDAtXFx1MTE1OVxcdTExNUYtXFx1MTFBMlxcdTExQTgtXFx1MTFGOVxcdTEyMDAtXFx1MTI0OFxcdTEyNEEtXFx1MTI0RFxcdTEyNTAtXFx1MTI1NlxcdTEyNThcXHUxMjVBLVxcdTEyNURcXHUxMjYwLVxcdTEyODhcXHUxMjhBLVxcdTEyOERcXHUxMjkwLVxcdTEyQjBcXHUxMkIyLVxcdTEyQjVcXHUxMkI4LVxcdTEyQkVcXHUxMkMwXFx1MTJDMi1cXHUxMkM1XFx1MTJDOC1cXHUxMkQ2XFx1MTJEOC1cXHUxMzEwXFx1MTMxMi1cXHUxMzE1XFx1MTMxOC1cXHUxMzVBXFx1MTM1RlxcdTEzNjktXFx1MTM3MVxcdTEzODAtXFx1MTM4RlxcdTEzQTAtXFx1MTNGNFxcdTE0MDEtXFx1MTY2Q1xcdTE2NkYtXFx1MTY3NlxcdTE2ODEtXFx1MTY5QVxcdTE2QTAtXFx1MTZFQVxcdTE2RUUtXFx1MTZGMFxcdTE3MDAtXFx1MTcwQ1xcdTE3MEUtXFx1MTcxNFxcdTE3MjAtXFx1MTczNFxcdTE3NDAtXFx1MTc1M1xcdTE3NjAtXFx1MTc2Q1xcdTE3NkUtXFx1MTc3MFxcdTE3NzJcXHUxNzczXFx1MTc4MC1cXHUxN0IzXFx1MTdCNi1cXHUxN0QzXFx1MTdEN1xcdTE3RENcXHUxN0REXFx1MTdFMC1cXHUxN0U5XFx1MTgwQi1cXHUxODBEXFx1MTgxMC1cXHUxODE5XFx1MTgyMC1cXHUxODc3XFx1MTg4MC1cXHUxOEE5XFx1MTkwMC1cXHUxOTFDXFx1MTkyMC1cXHUxOTJCXFx1MTkzMC1cXHUxOTNCXFx1MTk0Ni1cXHUxOTZEXFx1MTk3MC1cXHUxOTc0XFx1MTk4MC1cXHUxOUE5XFx1MTlCMC1cXHUxOUM5XFx1MTlEMC1cXHUxOUQ5XFx1MUEwMC1cXHUxQTFCXFx1MUQwMC1cXHUxREMzXFx1MUUwMC1cXHUxRTlCXFx1MUVBMC1cXHUxRUY5XFx1MUYwMC1cXHUxRjE1XFx1MUYxOC1cXHUxRjFEXFx1MUYyMC1cXHUxRjQ1XFx1MUY0OC1cXHUxRjREXFx1MUY1MC1cXHUxRjU3XFx1MUY1OVxcdTFGNUJcXHUxRjVEXFx1MUY1Ri1cXHUxRjdEXFx1MUY4MC1cXHUxRkI0XFx1MUZCNi1cXHUxRkJDXFx1MUZCRVxcdTFGQzItXFx1MUZDNFxcdTFGQzYtXFx1MUZDQ1xcdTFGRDAtXFx1MUZEM1xcdTFGRDYtXFx1MUZEQlxcdTFGRTAtXFx1MUZFQ1xcdTFGRjItXFx1MUZGNFxcdTFGRjYtXFx1MUZGQ1xcdTIwM0ZcXHUyMDQwXFx1MjA1NFxcdTIwNzFcXHUyMDdGXFx1MjA5MC1cXHUyMDk0XFx1MjBEMC1cXHUyMERDXFx1MjBFMVxcdTIwRTUtXFx1MjBFQlxcdTIxMDJcXHUyMTA3XFx1MjEwQS1cXHUyMTEzXFx1MjExNVxcdTIxMTgtXFx1MjExRFxcdTIxMjRcXHUyMTI2XFx1MjEyOFxcdTIxMkEtXFx1MjEzMVxcdTIxMzMtXFx1MjEzOVxcdTIxM0MtXFx1MjEzRlxcdTIxNDUtXFx1MjE0OVxcdTIxNjAtXFx1MjE4M1xcdTJDMDAtXFx1MkMyRVxcdTJDMzAtXFx1MkM1RVxcdTJDODAtXFx1MkNFNFxcdTJEMDAtXFx1MkQyNVxcdTJEMzAtXFx1MkQ2NVxcdTJENkZcXHUyRDgwLVxcdTJEOTZcXHUyREEwLVxcdTJEQTZcXHUyREE4LVxcdTJEQUVcXHUyREIwLVxcdTJEQjZcXHUyREI4LVxcdTJEQkVcXHUyREMwLVxcdTJEQzZcXHUyREM4LVxcdTJEQ0VcXHUyREQwLVxcdTJERDZcXHUyREQ4LVxcdTJEREVcXHUzMDA1LVxcdTMwMDdcXHUzMDIxLVxcdTMwMkZcXHUzMDMxLVxcdTMwMzVcXHUzMDM4LVxcdTMwM0NcXHUzMDQxLVxcdTMwOTZcXHUzMDk5LVxcdTMwOUZcXHUzMEExLVxcdTMwRkFcXHUzMEZDLVxcdTMwRkZcXHUzMTA1LVxcdTMxMkNcXHUzMTMxLVxcdTMxOEVcXHUzMUEwLVxcdTMxQjdcXHUzMUYwLVxcdTMxRkZcXHUzNDAwLVxcdTREQjVcXHU0RTAwLVxcdTlGQkJcXHVBMDAwLVxcdUE0OENcXHVBODAwLVxcdUE4MjdcXHVBQzAwLVxcdUQ3QTNcXHVGOTAwLVxcdUZBMkRcXHVGQTMwLVxcdUZBNkFcXHVGQTcwLVxcdUZBRDlcXHVGQjAwLVxcdUZCMDZcXHVGQjEzLVxcdUZCMTdcXHVGQjFELVxcdUZCMjhcXHVGQjJBLVxcdUZCMzZcXHVGQjM4LVxcdUZCM0NcXHVGQjNFXFx1RkI0MFxcdUZCNDFcXHVGQjQzXFx1RkI0NFxcdUZCNDYtXFx1RkJCMVxcdUZCRDMtXFx1RkQzRFxcdUZENTAtXFx1RkQ4RlxcdUZEOTItXFx1RkRDN1xcdUZERjAtXFx1RkRGQlxcdUZFMDAtXFx1RkUwRlxcdUZFMjAtXFx1RkUyM1xcdUZFMzNcXHVGRTM0XFx1RkU0RC1cXHVGRTRGXFx1RkU3MC1cXHVGRTc0XFx1RkU3Ni1cXHVGRUZDXFx1RkYxMC1cXHVGRjE5XFx1RkYyMS1cXHVGRjNBXFx1RkYzRlxcdUZGNDEtXFx1RkY1QVxcdUZGNjYtXFx1RkZCRVxcdUZGQzItXFx1RkZDN1xcdUZGQ0EtXFx1RkZDRlxcdUZGRDItXFx1RkZEN1xcdUZGREEtXFx1RkZEQ118XFx1RDgwMFtcXHVEQzAwLVxcdURDMEJcXHVEQzBELVxcdURDMjZcXHVEQzI4LVxcdURDM0FcXHVEQzNDXFx1REMzRFxcdURDM0YtXFx1REM0RFxcdURDNTAtXFx1REM1RFxcdURDODAtXFx1RENGQVxcdURENDAtXFx1REQ3NFxcdURGMDAtXFx1REYxRVxcdURGMzAtXFx1REY0QVxcdURGODAtXFx1REY5RFxcdURGQTAtXFx1REZDM1xcdURGQzgtXFx1REZDRlxcdURGRDEtXFx1REZENV18XFx1RDgwMVtcXHVEQzAwLVxcdURDOURcXHVEQ0EwLVxcdURDQTldfFxcdUQ4MDJbXFx1REMwMC1cXHVEQzA1XFx1REMwOFxcdURDMEEtXFx1REMzNVxcdURDMzdcXHVEQzM4XFx1REMzQ1xcdURDM0ZcXHVERTAwLVxcdURFMDNcXHVERTA1XFx1REUwNlxcdURFMEMtXFx1REUxM1xcdURFMTUtXFx1REUxN1xcdURFMTktXFx1REUzM1xcdURFMzgtXFx1REUzQVxcdURFM0ZdfFxcdUQ4MzRbXFx1REQ2NS1cXHVERDY5XFx1REQ2RC1cXHVERDcyXFx1REQ3Qi1cXHVERDgyXFx1REQ4NS1cXHVERDhCXFx1RERBQS1cXHVEREFEXFx1REU0Mi1cXHVERTQ0XXxcXHVEODM1W1xcdURDMDAtXFx1REM1NFxcdURDNTYtXFx1REM5Q1xcdURDOUVcXHVEQzlGXFx1RENBMlxcdURDQTVcXHVEQ0E2XFx1RENBOS1cXHVEQ0FDXFx1RENBRS1cXHVEQ0I5XFx1RENCQlxcdURDQkQtXFx1RENDM1xcdURDQzUtXFx1REQwNVxcdUREMDctXFx1REQwQVxcdUREMEQtXFx1REQxNFxcdUREMTYtXFx1REQxQ1xcdUREMUUtXFx1REQzOVxcdUREM0ItXFx1REQzRVxcdURENDAtXFx1REQ0NFxcdURENDZcXHVERDRBLVxcdURENTBcXHVERDUyLVxcdURFQTVcXHVERUE4LVxcdURFQzBcXHVERUMyLVxcdURFREFcXHVERURDLVxcdURFRkFcXHVERUZDLVxcdURGMTRcXHVERjE2LVxcdURGMzRcXHVERjM2LVxcdURGNEVcXHVERjUwLVxcdURGNkVcXHVERjcwLVxcdURGODhcXHVERjhBLVxcdURGQThcXHVERkFBLVxcdURGQzJcXHVERkM0LVxcdURGQzlcXHVERkNFLVxcdURGRkZdfFtcXHVEODQwLVxcdUQ4NjhdW1xcdURDMDAtXFx1REZGRl18XFx1RDg2OVtcXHVEQzAwLVxcdURFRDZdfFxcdUQ4N0VbXFx1REMwMC1cXHVERTFEXXxcXHVEQjQwW1xcdUREMDAtXFx1RERFRl0vO1xyXG5cclxuXHRcdHN0YXRpYyBVTklDT0RFX1NUQVJUX0NPTU1PTiA9IHsgMzY6IHQgLyogJCAqLywgOTI6IHQgLyogXFwgKi8sIDk1OiB0IC8qIF8gKi8sIDY1OiB0LCA2NjogdCwgNjc6IHQsIDY4OiB0LCA2OTogdCwgNzA6IHQsIDcxOiB0LCA3MjogdCwgNzM6IHQsIDc0OiB0LCA3NTogdCwgNzY6IHQsIDc3OiB0LCA3ODogdCwgNzk6IHQsIDgwOiB0LCA4MTogdCwgODI6IHQsIDgzOiB0LCA4NDogdCwgODU6IHQsIDg2OiB0LCA4NzogdCwgODg6IHQsIDg5OiB0LCA5MDogdCwgOTc6IHQsIDk4OiB0LCA5OTogdCwgMTAwOiB0LCAxMDE6IHQsIDEwMjogdCwgMTAzOiB0LCAxMDQ6IHQsIDEwNTogdCwgMTA2OiB0LCAxMDc6IHQsIDEwODogdCwgMTA5OiB0LCAxMTA6IHQsIDExMTogdCwgMTEyOiB0LCAxMTM6IHQsIDExNDogdCwgMTE1OiB0LCAxMTY6IHQsIDExNzogdCwgMTE4OiB0LCAxMTk6IHQsIDEyMDogdCwgMTIxOiB0LCAxMjI6IHQgfTtcclxuXHRcdFxyXG5cdFx0c3RhdGljIFVOSUNPREVfU1RBUlRfVU5DT01NT04gPSAvW1xceEFBXFx4QjVcXHhCQVxceEMwLVxceEQ2XFx4RDgtXFx4RjZcXHhGOC1cXHUwMjQxXFx1MDI1MC1cXHUwMkMxXFx1MDJDNi1cXHUwMkQxXFx1MDJFMC1cXHUwMkU0XFx1MDJFRVxcdTAzN0FcXHUwMzg2XFx1MDM4OC1cXHUwMzhBXFx1MDM4Q1xcdTAzOEUtXFx1MDNBMVxcdTAzQTMtXFx1MDNDRVxcdTAzRDAtXFx1MDNGNVxcdTAzRjctXFx1MDQ4MVxcdTA0OEEtXFx1MDRDRVxcdTA0RDAtXFx1MDRGOVxcdTA1MDAtXFx1MDUwRlxcdTA1MzEtXFx1MDU1NlxcdTA1NTlcXHUwNTYxLVxcdTA1ODdcXHUwNUQwLVxcdTA1RUFcXHUwNUYwLVxcdTA1RjJcXHUwNjIxLVxcdTA2M0FcXHUwNjQwLVxcdTA2NEFcXHUwNjZFXFx1MDY2RlxcdTA2NzEtXFx1MDZEM1xcdTA2RDVcXHUwNkU1XFx1MDZFNlxcdTA2RUVcXHUwNkVGXFx1MDZGQS1cXHUwNkZDXFx1MDZGRlxcdTA3MTBcXHUwNzEyLVxcdTA3MkZcXHUwNzRELVxcdTA3NkRcXHUwNzgwLVxcdTA3QTVcXHUwN0IxXFx1MDkwNC1cXHUwOTM5XFx1MDkzRFxcdTA5NTBcXHUwOTU4LVxcdTA5NjFcXHUwOTdEXFx1MDk4NS1cXHUwOThDXFx1MDk4RlxcdTA5OTBcXHUwOTkzLVxcdTA5QThcXHUwOUFBLVxcdTA5QjBcXHUwOUIyXFx1MDlCNi1cXHUwOUI5XFx1MDlCRFxcdTA5Q0VcXHUwOURDXFx1MDlERFxcdTA5REYtXFx1MDlFMVxcdTA5RjBcXHUwOUYxXFx1MEEwNS1cXHUwQTBBXFx1MEEwRlxcdTBBMTBcXHUwQTEzLVxcdTBBMjhcXHUwQTJBLVxcdTBBMzBcXHUwQTMyXFx1MEEzM1xcdTBBMzVcXHUwQTM2XFx1MEEzOFxcdTBBMzlcXHUwQTU5LVxcdTBBNUNcXHUwQTVFXFx1MEE3Mi1cXHUwQTc0XFx1MEE4NS1cXHUwQThEXFx1MEE4Ri1cXHUwQTkxXFx1MEE5My1cXHUwQUE4XFx1MEFBQS1cXHUwQUIwXFx1MEFCMlxcdTBBQjNcXHUwQUI1LVxcdTBBQjlcXHUwQUJEXFx1MEFEMFxcdTBBRTBcXHUwQUUxXFx1MEIwNS1cXHUwQjBDXFx1MEIwRlxcdTBCMTBcXHUwQjEzLVxcdTBCMjhcXHUwQjJBLVxcdTBCMzBcXHUwQjMyXFx1MEIzM1xcdTBCMzUtXFx1MEIzOVxcdTBCM0RcXHUwQjVDXFx1MEI1RFxcdTBCNUYtXFx1MEI2MVxcdTBCNzFcXHUwQjgzXFx1MEI4NS1cXHUwQjhBXFx1MEI4RS1cXHUwQjkwXFx1MEI5Mi1cXHUwQjk1XFx1MEI5OVxcdTBCOUFcXHUwQjlDXFx1MEI5RVxcdTBCOUZcXHUwQkEzXFx1MEJBNFxcdTBCQTgtXFx1MEJBQVxcdTBCQUUtXFx1MEJCOVxcdTBDMDUtXFx1MEMwQ1xcdTBDMEUtXFx1MEMxMFxcdTBDMTItXFx1MEMyOFxcdTBDMkEtXFx1MEMzM1xcdTBDMzUtXFx1MEMzOVxcdTBDNjBcXHUwQzYxXFx1MEM4NS1cXHUwQzhDXFx1MEM4RS1cXHUwQzkwXFx1MEM5Mi1cXHUwQ0E4XFx1MENBQS1cXHUwQ0IzXFx1MENCNS1cXHUwQ0I5XFx1MENCRFxcdTBDREVcXHUwQ0UwXFx1MENFMVxcdTBEMDUtXFx1MEQwQ1xcdTBEMEUtXFx1MEQxMFxcdTBEMTItXFx1MEQyOFxcdTBEMkEtXFx1MEQzOVxcdTBENjBcXHUwRDYxXFx1MEQ4NS1cXHUwRDk2XFx1MEQ5QS1cXHUwREIxXFx1MERCMy1cXHUwREJCXFx1MERCRFxcdTBEQzAtXFx1MERDNlxcdTBFMDEtXFx1MEUzMFxcdTBFMzJcXHUwRTMzXFx1MEU0MC1cXHUwRTQ2XFx1MEU4MVxcdTBFODJcXHUwRTg0XFx1MEU4N1xcdTBFODhcXHUwRThBXFx1MEU4RFxcdTBFOTQtXFx1MEU5N1xcdTBFOTktXFx1MEU5RlxcdTBFQTEtXFx1MEVBM1xcdTBFQTVcXHUwRUE3XFx1MEVBQVxcdTBFQUJcXHUwRUFELVxcdTBFQjBcXHUwRUIyXFx1MEVCM1xcdTBFQkRcXHUwRUMwLVxcdTBFQzRcXHUwRUM2XFx1MEVEQ1xcdTBFRERcXHUwRjAwXFx1MEY0MC1cXHUwRjQ3XFx1MEY0OS1cXHUwRjZBXFx1MEY4OC1cXHUwRjhCXFx1MTAwMC1cXHUxMDIxXFx1MTAyMy1cXHUxMDI3XFx1MTAyOVxcdTEwMkFcXHUxMDUwLVxcdTEwNTVcXHUxMEEwLVxcdTEwQzVcXHUxMEQwLVxcdTEwRkFcXHUxMEZDXFx1MTEwMC1cXHUxMTU5XFx1MTE1Ri1cXHUxMUEyXFx1MTFBOC1cXHUxMUY5XFx1MTIwMC1cXHUxMjQ4XFx1MTI0QS1cXHUxMjREXFx1MTI1MC1cXHUxMjU2XFx1MTI1OFxcdTEyNUEtXFx1MTI1RFxcdTEyNjAtXFx1MTI4OFxcdTEyOEEtXFx1MTI4RFxcdTEyOTAtXFx1MTJCMFxcdTEyQjItXFx1MTJCNVxcdTEyQjgtXFx1MTJCRVxcdTEyQzBcXHUxMkMyLVxcdTEyQzVcXHUxMkM4LVxcdTEyRDZcXHUxMkQ4LVxcdTEzMTBcXHUxMzEyLVxcdTEzMTVcXHUxMzE4LVxcdTEzNUFcXHUxMzgwLVxcdTEzOEZcXHUxM0EwLVxcdTEzRjRcXHUxNDAxLVxcdTE2NkNcXHUxNjZGLVxcdTE2NzZcXHUxNjgxLVxcdTE2OUFcXHUxNkEwLVxcdTE2RUFcXHUxNkVFLVxcdTE2RjBcXHUxNzAwLVxcdTE3MENcXHUxNzBFLVxcdTE3MTFcXHUxNzIwLVxcdTE3MzFcXHUxNzQwLVxcdTE3NTFcXHUxNzYwLVxcdTE3NkNcXHUxNzZFLVxcdTE3NzBcXHUxNzgwLVxcdTE3QjNcXHUxN0Q3XFx1MTdEQ1xcdTE4MjAtXFx1MTg3N1xcdTE4ODAtXFx1MThBOFxcdTE5MDAtXFx1MTkxQ1xcdTE5NTAtXFx1MTk2RFxcdTE5NzAtXFx1MTk3NFxcdTE5ODAtXFx1MTlBOVxcdTE5QzEtXFx1MTlDN1xcdTFBMDAtXFx1MUExNlxcdTFEMDAtXFx1MURCRlxcdTFFMDAtXFx1MUU5QlxcdTFFQTAtXFx1MUVGOVxcdTFGMDAtXFx1MUYxNVxcdTFGMTgtXFx1MUYxRFxcdTFGMjAtXFx1MUY0NVxcdTFGNDgtXFx1MUY0RFxcdTFGNTAtXFx1MUY1N1xcdTFGNTlcXHUxRjVCXFx1MUY1RFxcdTFGNUYtXFx1MUY3RFxcdTFGODAtXFx1MUZCNFxcdTFGQjYtXFx1MUZCQ1xcdTFGQkVcXHUxRkMyLVxcdTFGQzRcXHUxRkM2LVxcdTFGQ0NcXHUxRkQwLVxcdTFGRDNcXHUxRkQ2LVxcdTFGREJcXHUxRkUwLVxcdTFGRUNcXHUxRkYyLVxcdTFGRjRcXHUxRkY2LVxcdTFGRkNcXHUyMDcxXFx1MjA3RlxcdTIwOTAtXFx1MjA5NFxcdTIxMDJcXHUyMTA3XFx1MjEwQS1cXHUyMTEzXFx1MjExNVxcdTIxMTgtXFx1MjExRFxcdTIxMjRcXHUyMTI2XFx1MjEyOFxcdTIxMkEtXFx1MjEzMVxcdTIxMzMtXFx1MjEzOVxcdTIxM0MtXFx1MjEzRlxcdTIxNDUtXFx1MjE0OVxcdTIxNjAtXFx1MjE4M1xcdTJDMDAtXFx1MkMyRVxcdTJDMzAtXFx1MkM1RVxcdTJDODAtXFx1MkNFNFxcdTJEMDAtXFx1MkQyNVxcdTJEMzAtXFx1MkQ2NVxcdTJENkZcXHUyRDgwLVxcdTJEOTZcXHUyREEwLVxcdTJEQTZcXHUyREE4LVxcdTJEQUVcXHUyREIwLVxcdTJEQjZcXHUyREI4LVxcdTJEQkVcXHUyREMwLVxcdTJEQzZcXHUyREM4LVxcdTJEQ0VcXHUyREQwLVxcdTJERDZcXHUyREQ4LVxcdTJEREVcXHUzMDA1LVxcdTMwMDdcXHUzMDIxLVxcdTMwMjlcXHUzMDMxLVxcdTMwMzVcXHUzMDM4LVxcdTMwM0NcXHUzMDQxLVxcdTMwOTZcXHUzMDlCLVxcdTMwOUZcXHUzMEExLVxcdTMwRkFcXHUzMEZDLVxcdTMwRkZcXHUzMTA1LVxcdTMxMkNcXHUzMTMxLVxcdTMxOEVcXHUzMUEwLVxcdTMxQjdcXHUzMUYwLVxcdTMxRkZcXHUzNDAwLVxcdTREQjVcXHU0RTAwLVxcdTlGQkJcXHVBMDAwLVxcdUE0OENcXHVBODAwXFx1QTgwMVxcdUE4MDMtXFx1QTgwNVxcdUE4MDctXFx1QTgwQVxcdUE4MEMtXFx1QTgyMlxcdUFDMDAtXFx1RDdBM1xcdUY5MDAtXFx1RkEyRFxcdUZBMzAtXFx1RkE2QVxcdUZBNzAtXFx1RkFEOVxcdUZCMDAtXFx1RkIwNlxcdUZCMTMtXFx1RkIxN1xcdUZCMURcXHVGQjFGLVxcdUZCMjhcXHVGQjJBLVxcdUZCMzZcXHVGQjM4LVxcdUZCM0NcXHVGQjNFXFx1RkI0MFxcdUZCNDFcXHVGQjQzXFx1RkI0NFxcdUZCNDYtXFx1RkJCMVxcdUZCRDMtXFx1RkQzRFxcdUZENTAtXFx1RkQ4RlxcdUZEOTItXFx1RkRDN1xcdUZERjAtXFx1RkRGQlxcdUZFNzAtXFx1RkU3NFxcdUZFNzYtXFx1RkVGQ1xcdUZGMjEtXFx1RkYzQVxcdUZGNDEtXFx1RkY1QVxcdUZGNjYtXFx1RkZCRVxcdUZGQzItXFx1RkZDN1xcdUZGQ0EtXFx1RkZDRlxcdUZGRDItXFx1RkZEN1xcdUZGREEtXFx1RkZEQ118XFx1RDgwMFtcXHVEQzAwLVxcdURDMEJcXHVEQzBELVxcdURDMjZcXHVEQzI4LVxcdURDM0FcXHVEQzNDXFx1REMzRFxcdURDM0YtXFx1REM0RFxcdURDNTAtXFx1REM1RFxcdURDODAtXFx1RENGQVxcdURENDAtXFx1REQ3NFxcdURGMDAtXFx1REYxRVxcdURGMzAtXFx1REY0QVxcdURGODAtXFx1REY5RFxcdURGQTAtXFx1REZDM1xcdURGQzgtXFx1REZDRlxcdURGRDEtXFx1REZENV18XFx1RDgwMVtcXHVEQzAwLVxcdURDOURdfFxcdUQ4MDJbXFx1REMwMC1cXHVEQzA1XFx1REMwOFxcdURDMEEtXFx1REMzNVxcdURDMzdcXHVEQzM4XFx1REMzQ1xcdURDM0ZcXHVERTAwXFx1REUxMC1cXHVERTEzXFx1REUxNS1cXHVERTE3XFx1REUxOS1cXHVERTMzXXxcXHVEODM1W1xcdURDMDAtXFx1REM1NFxcdURDNTYtXFx1REM5Q1xcdURDOUVcXHVEQzlGXFx1RENBMlxcdURDQTVcXHVEQ0E2XFx1RENBOS1cXHVEQ0FDXFx1RENBRS1cXHVEQ0I5XFx1RENCQlxcdURDQkQtXFx1RENDM1xcdURDQzUtXFx1REQwNVxcdUREMDctXFx1REQwQVxcdUREMEQtXFx1REQxNFxcdUREMTYtXFx1REQxQ1xcdUREMUUtXFx1REQzOVxcdUREM0ItXFx1REQzRVxcdURENDAtXFx1REQ0NFxcdURENDZcXHVERDRBLVxcdURENTBcXHVERDUyLVxcdURFQTVcXHVERUE4LVxcdURFQzBcXHVERUMyLVxcdURFREFcXHVERURDLVxcdURFRkFcXHVERUZDLVxcdURGMTRcXHVERjE2LVxcdURGMzRcXHVERjM2LVxcdURGNEVcXHVERjUwLVxcdURGNkVcXHVERjcwLVxcdURGODhcXHVERjhBLVxcdURGQThcXHVERkFBLVxcdURGQzJcXHVERkM0LVxcdURGQzldfFtcXHVEODQwLVxcdUQ4NjhdW1xcdURDMDAtXFx1REZGRl18XFx1RDg2OVtcXHVEQzAwLVxcdURFRDZdfFxcdUQ4N0VbXFx1REMwMC1cXHVERTFEXS87XHJcblx0XHJcblx0fVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3RzRGVmaW5pdGlvbnMvdHNkLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdXRpbGl0aWVzL0NoYXJQb2ludHMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiVG9rZW5EZWZpbml0aW9ucy50c1wiIC8+XHJcblxyXG5tb2R1bGUgdHJsLmZyb250ZW5kLmxleGljYWwge1xyXG5cdFxyXG5cdGxldCBoZXhEaWdpdHMgPSB7fTtcclxuXHRfLmVhY2goXCIwMTIzNDU2Nzg5QUJDREVGYWJjZGVmXCIsIChudW1DaGFyKSA9PiB7XHJcblx0XHRcclxuXHRcdGhleERpZ2l0c1t1dGlsaXRpZXMuQ2hhclBvaW50cy5jb2RlUG9pbnRBdChudW1DaGFyLCAwKV0gPSB0cnVlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdGxldCBkaWdpdHMgPSB7fTtcclxuXHRfLmVhY2goXCIwMTIzNDU2Nzg5XCIsIChudW1DaGFyKSA9PiB7XHJcblx0XHRkaWdpdHNbdXRpbGl0aWVzLkNoYXJQb2ludHMuY29kZVBvaW50QXQobnVtQ2hhciwgMCldID0gdHJ1ZTtcclxuXHR9KTtcclxuXHRcclxuXHRleHBvcnQgY2xhc3MgSWRlbnRpZnllcnMge1xyXG5cdFxyXG5cdFx0c3RhdGljIGlzSGV4RGlnaXQoYzogbnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRcdHJldHVybiBoZXhEaWdpdHNbY107XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHN0YXRpYyBpc0RpZ2l0KGM6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0XHRyZXR1cm4gZGlnaXRzW2NdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBpc0tleXdvcmQoc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdFx0cmV0dXJuIFRva2VuRGVmaW5pdGlvbnMuS1dbc3RyXTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0c3RhdGljIGlzTGluZVRlcm1pbmF0b3IoYzogbnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRcdHJldHVybiBUb2tlbkRlZmluaXRpb25zLkxUW2NdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBpc0lkZW50aWZpZXJTdGFydChjOiBudW1iZXIpOiBib29sZWFuIHtcclxuXHRcdFx0cmV0dXJuIElkZW50aWZ5ZXJzLmlzU2ltcGxlVW5pY29kZVN0YXJ0KGMpXHJcblx0XHRcdFx0fHwgSWRlbnRpZnllcnMuaXNDb21wbGV4VW5pY29kZVN0YXJ0KGMpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRzdGF0aWMgaXNJZGVudGlmaWVyUGFydChjOiBudW1iZXIpOiBib29sZWFuIHtcclxuXHRcdFx0cmV0dXJuIElkZW50aWZ5ZXJzLmlzU2ltcGxlVW5pY29kZUNvbnRpbnVlKGMpXHJcblx0XHRcdFx0fHwgSWRlbnRpZnllcnMuaXNDb21wbGV4VW5pY29kZUNvbnRpbnVlKGMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBpc1NpbXBsZVVuaWNvZGVDb250aW51ZShjOiBudW1iZXIpOiBib29sZWFuIHtcclxuXHRcdFx0cmV0dXJuIFRva2VuRGVmaW5pdGlvbnMuVU5JQ09ERV9DT05USU5VRV9DT01NT05bY107XHJcblx0XHR9XHRcclxuXHRcdFx0XHJcblx0XHRzdGF0aWMgaXNDb21wbGV4VW5pY29kZUNvbnRpbnVlKGM6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0XHRyZXR1cm4gYyA+IFRva2VuRGVmaW5pdGlvbnMuVU5JQ09ERV9VTkNPTU1PTl9USFJFU0hPTEQgXHJcblx0XHRcdFx0JiYgVG9rZW5EZWZpbml0aW9ucy5VTklDT0RFX0NPTlRJTlVFX1VOQ09NTU9OLnRlc3QodXRpbGl0aWVzLkNoYXJQb2ludHMuZnJvbUNvZGVQb2ludChjKSk7XHJcblx0XHR9XHRcclxuXHRcdFxyXG5cdFx0c3RhdGljIGlzU2ltcGxlVW5pY29kZVN0YXJ0KGM6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0XHRyZXR1cm4gVG9rZW5EZWZpbml0aW9ucy5VTklDT0RFX1NUQVJUX0NPTU1PTltjXTtcclxuXHRcdH1cdFxyXG5cdFx0XHRcclxuXHRcdHN0YXRpYyBpc0NvbXBsZXhVbmljb2RlU3RhcnQoYzogbnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRcdHJldHVybiBjID4gVG9rZW5EZWZpbml0aW9ucy5VTklDT0RFX1VOQ09NTU9OX1RIUkVTSE9MRCBcclxuXHRcdFx0XHQmJiBUb2tlbkRlZmluaXRpb25zLlVOSUNPREVfU1RBUlRfVU5DT01NT04udGVzdCh1dGlsaXRpZXMuQ2hhclBvaW50cy5mcm9tQ29kZVBvaW50KGMpKTtcclxuXHRcdH1cdFxyXG5cdFx0XHJcblx0XHRzdGF0aWMgaXNQdW5jdHVhdGlvblN0YXJ0KGM6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0XHRyZXR1cm4gVG9rZW5EZWZpbml0aW9ucy5QTkNfU0lOR0xFW2NdO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3RzRGVmaW5pdGlvbnMvdHNkLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdXRpbGl0aWVzL0lFeGNlcHRpb24uZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi91dGlsaXRpZXMvQ2hhclBvaW50cy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJJTGV4ZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiVG9rZW5EZWZpbml0aW9ucy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJJZGVudGlmeWVycy50c1wiIC8+XHJcblxyXG5tb2R1bGUgdHJsLmZyb250ZW5kLmxleGljYWwge1xyXG5cclxuICAgIGNvbnN0IFN0YXRlcyA9IHtcclxuICAgICAgICBpZGVudGlmaWVyOiBcInN0YXRlSWRlbnRpZmllclwiLFxyXG4gICAgICAgIHB1bmN0dWF0aW9uOiBcInN0YXRlUHVuY3R1YXRpb25cIixcclxuICAgICAgICBtdWx0aUNvbW1lbnQ6IFwic3RhdGVNdWx0aUNvbW1lbnRcIixcclxuICAgICAgICBzaW5nbGVDb21tZW50OiBcInN0YXRlU2luZ2xlQ29tbWVudFwiLFxyXG4gICAgICAgIGRpdk9yQ29tbWVudDogXCJzdGF0ZURpdk9yQ29tbWVudFwiLFxyXG4gICAgICAgIGRvdE9yTnVtYmVyOiBcInN0YXRlRG90T3JOdW1iZXJcIixcclxuICAgICAgICBlcnJvcjogXCJzdGF0ZUVycm9yXCIsXHJcbiAgICAgICAgZmluaXNoOiBcInN0YXRlRmluaXNoXCIsXHJcbiAgICAgICAgaW5pdDogXCJzdGF0ZUluaXRcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBSZWFkYWJsZVRva2VuVHlwZSA9IHtcclxuICAgICAgICBrZXl3b3JkOiBcImtleXdvcmRcIixcclxuICAgICAgICBpZGVudGlmaWVyOiBcImlkZW50aWZpZXJcIixcclxuICAgICAgICBsaXRlcmFsOiBcImxpdGVyYWxcIixcclxuICAgICAgICBwdW5jdHVhdGlvbjogXCJwdW5jdHVhdGlvblwiLFxyXG4gICAgICAgIGNvbW1lbnQ6IFwiY29tbWVudFwiLFxyXG4gICAgICAgIGVvZjogXCJlb2ZcIixcclxuICAgICAgICBlcnJvcjogXCJlcnJvclwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IFJlYWRhYmxlTGl0ZXJhbFN1YlR5cGUgPSB7XHJcbiAgICAgICAgc3RyaW5nOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG51bWJlcjogXCJudW1iZXJcIixcclxuICAgICAgICBudWxsOiBcIm51bGxcIixcclxuICAgICAgICBib29sZWFuOiBcImJvb2xlYW5cIlxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiB0b1JlYWRhYmxlVG9rZW5UeXBlKHRva2VuVHlwZTogVG9rZW5UeXBlKTogc3RyaW5nIHtcclxuICAgICAgICBzd2l0Y2ggKHRva2VuVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5rZXl3b3JkOiByZXR1cm4gUmVhZGFibGVUb2tlblR5cGUua2V5d29yZDtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuaWRlbnRpZmllcjogcmV0dXJuIFJlYWRhYmxlVG9rZW5UeXBlLmlkZW50aWZpZXI7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmxpdGVyYWw6IHJldHVybiBSZWFkYWJsZVRva2VuVHlwZS5saXRlcmFsO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5wdW5jdHVhdGlvbjogcmV0dXJuIFJlYWRhYmxlVG9rZW5UeXBlLnB1bmN0dWF0aW9uO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5jb21tZW50OiByZXR1cm4gUmVhZGFibGVUb2tlblR5cGUuY29tbWVudDtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuZW9mOiByZXR1cm4gUmVhZGFibGVUb2tlblR5cGUuZW9mO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5lcnJvcjogcmV0dXJuIFJlYWRhYmxlVG9rZW5UeXBlLmVycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIHRva2VuIHR5cGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9SZWFkYWJsZUxpdGVyYWxTdWJUeXBlKGxpdGVyYWxTdWJUeXBlOiBMaXRlcmFsU3ViVHlwZSk6IHN0cmluZyB7XHJcbiAgICAgICAgc3dpdGNoIChsaXRlcmFsU3ViVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIExpdGVyYWxTdWJUeXBlLnN0cmluZzogcmV0dXJuIFJlYWRhYmxlTGl0ZXJhbFN1YlR5cGUuc3RyaW5nO1xyXG4gICAgICAgICAgICBjYXNlIExpdGVyYWxTdWJUeXBlLm51bWJlcjogcmV0dXJuIFJlYWRhYmxlTGl0ZXJhbFN1YlR5cGUubnVtYmVyO1xyXG4gICAgICAgICAgICBjYXNlIExpdGVyYWxTdWJUeXBlLm51bGw6IHJldHVybiBSZWFkYWJsZUxpdGVyYWxTdWJUeXBlLm51bGw7XHJcbiAgICAgICAgICAgIGNhc2UgTGl0ZXJhbFN1YlR5cGUuYm9vbGVhbjogcmV0dXJuIFJlYWRhYmxlTGl0ZXJhbFN1YlR5cGUuYm9vbGVhbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCB0b2tlbiB0eXBlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFBOQyA9IFRva2VuRGVmaW5pdGlvbnMuUE5DX1NJTkdMRTtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTGV4ZXIgaW1wbGVtZW50cyBJTGV4ZXIge1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIENoYXJlY3Rlckxvb2t1cDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSB0b2tlbjogSVRva2VuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgbG9va0FoZWFkVG9rZW46IElUb2tlbjtcclxuICAgICAgICBwcml2YXRlIGN1cnJlbnRUb2tlbjogSVRva2VuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgbGluZW5vOiBudW1iZXI7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGFydExpbmVubzogbnVtYmVyO1xyXG4gICAgICAgIHByaXZhdGUgY3VyckxpbmVDdXJzb3I6IG51bWJlcjtcclxuICAgICAgICBwcml2YXRlIHJlbGF0aXZlU3RhcnRDdXJzb3I6IG51bWJlcjtcclxuICAgICAgICBwcml2YXRlIGFic29sdXRlU3RhcnRDdXJzb3I6IG51bWJlcjtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdGlhdGVDaGFyZWN0ZXJMb29rdXBPbmNlKCkge1xyXG4gICAgICAgICAgICBpZiAoTGV4ZXIuQ2hhcmVjdGVyTG9va3VwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGxvb2t1cCA9IExleGVyLkNoYXJlY3Rlckxvb2t1cCA9IHt9O1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgLy93aGl0ZSBzcGFjZVxyXG4gICAgICAgICAgICBfLmVhY2goPGFueT5Ub2tlbkRlZmluaXRpb25zLldTLCAodmFsLCBrZXk6IG51bWJlcikgPT4gbG9va3VwW2tleV0gPSBMZXhlci5wcm90b3R5cGUuc3RhdGVXaGl0ZVNwYWNlKTtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgIC8vbmV3IGxpbmVcclxuICAgICAgICAgICAgXy5lYWNoKDxhbnk+VG9rZW5EZWZpbml0aW9ucy5MVCwgKHZhbCwga2V5OiBudW1iZXIpID0+IGxvb2t1cFtrZXldID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlTGluZVRlcm1pbmF0b3IpO1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgLy9zdHJpbmdcclxuICAgICAgICAgICAgbG9va3VwW1BOQy5xbWFya10gPSBMZXhlci5nZW5TdGF0ZVN0cmluZyhQTkMucW1hcmspO1xyXG4gICAgICAgICAgICBsb29rdXBbUE5DLmFwb3N0cm9waGVdID0gTGV4ZXIuZ2VuU3RhdGVTdHJpbmcoUE5DLmFwb3N0cm9waGUpO1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgLy9udW1iZXJcclxuICAgICAgICAgICAgXy5lYWNoKFwiMDEyMzQ1Njc4OVwiLCAobnVtQ2hhcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbG9va3VwW3V0aWxpdGllcy5DaGFyUG9pbnRzLmNvZGVQb2ludEF0KG51bUNoYXIsIDApXSA9IExleGVyLnByb3RvdHlwZS5zdGF0ZU51bWJlcjtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLmxicmFjZV0gPSBMZXhlci5wcm90b3R5cGUuc3RhdGVQdW5jdHVhdGlvblNpbmdsZTtcclxuICAgICAgICAgICAgbG9va3VwW1BOQy5yYnJhY2VdID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMubHBhcmVudGhdID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMucnBhcmVudGhdID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMubGJyYWNrZXRdID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMucmJyYWNrZXRdID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAvLyAuIC4xXHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMuZG90XSA9ICgpID0+IFN0YXRlcy5kb3RPck51bWJlcjtcclxuXHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMuc2VtaWNvbG9uXSA9IExleGVyLnByb3RvdHlwZS5zdGF0ZVB1bmN0dWF0aW9uU2luZ2xlO1xyXG4gICAgICAgICAgICBsb29rdXBbUE5DLmNvbW1hXSA9IExleGVyLnByb3RvdHlwZS5zdGF0ZVB1bmN0dWF0aW9uU2luZ2xlO1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgLy8gPCA8PCA8PSA8PDwgPDw9XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMubGVzc10gPSBMZXhlci5nZW5QdW5jdHVhdGlvblNjYW5uZXIoXHJcbiAgICAgICAgICAgICAgICBbW1BOQy5sZXNzXSwgW1BOQy5hc3NpZ25dLCBbUE5DLmxlc3MsIFBOQy5sZXNzXSwgW1BOQy5sZXNzLCBQTkMuYXNzaWduXV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gPiA+PSA+PiA+Pj0gPj4+ID4+Pj1cclxuICAgICAgICAgICAgbG9va3VwW1BOQy5tb3JlXSA9IExleGVyLmdlblB1bmN0dWF0aW9uU2Nhbm5lcihcclxuICAgICAgICAgICAgICAgIFtbUE5DLm1vcmVdLCBbUE5DLmFzc2lnbl0sIFtQTkMubW9yZSwgUE5DLm1vcmVdLCBbUE5DLm1vcmUsIFBOQy5hc3NpZ25dLCBbUE5DLm1vcmUsIFBOQy5tb3JlLCBQTkMuYXNzaWduXV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gISAhPSAhPT1cclxuICAgICAgICAgICAgbG9va3VwW1BOQy5leGNsXSA9IExleGVyLmdlblB1bmN0dWF0aW9uU2Nhbm5lcihcclxuICAgICAgICAgICAgICAgIFtbUE5DLmFzc2lnbl0sIFtQTkMuYXNzaWduLCBQTkMuYXNzaWduXV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gLSAtLSAtPVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLm1pbnVzXSA9IExleGVyLmdlblB1bmN0dWF0aW9uU2Nhbm5lcihcclxuICAgICAgICAgICAgICAgIFtbUE5DLm1pbnVzXSwgW1BOQy5hc3NpZ25dXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyArICsrICstPVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLnBsdXNdID0gTGV4ZXIuZ2VuUHVuY3R1YXRpb25TY2FubmVyKFxyXG4gICAgICAgICAgICAgICAgW1tQTkMucGx1c10sIFtQTkMuYXNzaWduXV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gJSAlPVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLnBlcmNlbnRdID0gTGV4ZXIuZ2VuUHVuY3R1YXRpb25TY2FubmVyKFxyXG4gICAgICAgICAgICAgICAgW1tQTkMuYXNzaWduXV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gJiAmJiAmPVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLmFtcGVyc2FuZF0gPSBMZXhlci5nZW5QdW5jdHVhdGlvblNjYW5uZXIoXHJcbiAgICAgICAgICAgICAgICBbW1BOQy5hbXBlcnNhbmRdLCBbUE5DLmFzc2lnbl1dXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIC8vIHwgfHwgfD1cclxuICAgICAgICAgICAgbG9va3VwW1BOQy52ZXJ0aWNhbF0gPSBMZXhlci5nZW5QdW5jdHVhdGlvblNjYW5uZXIoXHJcbiAgICAgICAgICAgICAgICBbW1BOQy52ZXJ0aWNhbF0sIFtQTkMuYXNzaWduXV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gXiBePVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLmNhcmV0XSA9IExleGVyLmdlblB1bmN0dWF0aW9uU2Nhbm5lcihcclxuICAgICAgICAgICAgICAgIFtbUE5DLmFzc2lnbl1dXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLnRpbGRlXSA9IExleGVyLnByb3RvdHlwZS5zdGF0ZVB1bmN0dWF0aW9uU2luZ2xlO1xyXG4gICAgICAgICAgICBsb29rdXBbUE5DLnF1ZXN0XSA9IExleGVyLnByb3RvdHlwZS5zdGF0ZVB1bmN0dWF0aW9uU2luZ2xlO1xyXG4gICAgICAgICAgICBsb29rdXBbUE5DLmNvbG9uXSA9IExleGVyLnByb3RvdHlwZS5zdGF0ZVB1bmN0dWF0aW9uU2luZ2xlO1xyXG4gICAgICAgICAgICAvLyA9ID09ID09PVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLmFzc2lnbl0gPSBMZXhlci5nZW5QdW5jdHVhdGlvblNjYW5uZXIoXHJcbiAgICAgICAgICAgICAgICBbW1BOQy5hc3NpZ25dLCBbUE5DLmFzc2lnbiwgUE5DLmFzc2lnbl1dXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIC8vICogKj1cclxuICAgICAgICAgICAgbG9va3VwW1BOQy5hc3Rlcmlza10gPSBMZXhlci5nZW5QdW5jdHVhdGlvblNjYW5uZXIoXHJcbiAgICAgICAgICAgICAgICBbW1BOQy5hc3NpZ25dXVxyXG4gICAgICAgICAgICApO1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgLy8gLyAvPSAvKiAvLyBjb21tZW50XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMuc2xhc2hdID0gKCkgPT4gU3RhdGVzLmRpdk9yQ29tbWVudDtcclxuXHJcbiAgICAgICAgICAgIC8vIFxcIHdoaXRlc3BhY2VcclxuICAgICAgICAgICAgbG9va3VwW1BOQy5iYWNrc2xhc2hdID0gKCkgPT4gU3RhdGVzLmlkZW50aWZpZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBkZWZhdWx0TGV4ZXJPcHRpb25zOiBJTGV4ZXJPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBsb2M6IGZhbHNlLFxyXG4gICAgICAgICAgICByZWFkYWJsZVRva2Vuc01vZGU6IHRydWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHByaXZhdGUgY2hhclN0cmVhbTogSUNoYXJhY3RlclN0cmVhbSwgXHJcbiAgICAgICAgICAgIHByaXZhdGUgZXhjZXB0aW9uSGFuZGxlcjogdXRpbGl0aWVzLklFeGNlcHRpb25IYW5kbGVyLFxyXG4gICAgICAgICAgICBwcml2YXRlIG9wdGlvbnM/OiBJTGV4ZXJPcHRpb25zXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IF8uZGVmYXVsdHMoXHJcbiAgICAgICAgICAgICAgICAgICAgXy5jbG9uZShvcHRpb25zIHx8IHt9KSwgXHJcbiAgICAgICAgICAgICAgICAgICAgTGV4ZXIuZGVmYXVsdExleGVyT3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5saW5lbm8gPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJMaW5lQ3Vyc29yID0gMDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIExleGVyLmluaXRpYXRlQ2hhcmVjdGVyTG9va3VwT25jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGlzRXJyb3IodG9rZW46IElUb2tlbik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnJlYWRhYmxlVG9rZW5zTW9kZSA/IFxyXG4gICAgICAgICAgICAgICAgdG9rZW4udHlwZSA9PT0gUmVhZGFibGVUb2tlblR5cGUuZXJyb3IgOiB0b2tlbi50eXBlID09PSBUb2tlblR5cGUuZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBpc0VvZih0b2tlbjogSVRva2VuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucmVhZGFibGVUb2tlbnNNb2RlID8gXHJcbiAgICAgICAgICAgICAgICB0b2tlbi50eXBlID09PSBSZWFkYWJsZVRva2VuVHlwZS5lb2YgOiB0b2tlbi50eXBlID09PSBUb2tlblR5cGUuZW9mO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgaXNMaXRlcmFsKHRva2VuOiBJVG9rZW4pOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5yZWFkYWJsZVRva2Vuc01vZGUgPyBcclxuICAgICAgICAgICAgICAgIHRva2VuLnR5cGUgPT09IFJlYWRhYmxlVG9rZW5UeXBlLmxpdGVyYWwgOiB0b2tlbi50eXBlID09PSBUb2tlblR5cGUubGl0ZXJhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGlzUHVuY3R1YXRpb24odG9rZW46IElUb2tlbik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnJlYWRhYmxlVG9rZW5zTW9kZSA/IFxyXG4gICAgICAgICAgICAgICAgdG9rZW4udHlwZSA9PT0gUmVhZGFibGVUb2tlblR5cGUucHVuY3R1YXRpb24gOiB0b2tlbi50eXBlID09PSBUb2tlblR5cGUucHVuY3R1YXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBpc0tleXdvcmQodG9rZW46IElUb2tlbik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnJlYWRhYmxlVG9rZW5zTW9kZSA/IFxyXG4gICAgICAgICAgICAgICAgdG9rZW4udHlwZSA9PT0gUmVhZGFibGVUb2tlblR5cGUua2V5d29yZCA6IHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5rZXl3b3JkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgaXNJZGVudGlmaWVyKHRva2VuOiBJVG9rZW4pOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5yZWFkYWJsZVRva2Vuc01vZGUgPyBcclxuICAgICAgICAgICAgICAgIHRva2VuLnR5cGUgPT09IFJlYWRhYmxlVG9rZW5UeXBlLmlkZW50aWZpZXIgOiB0b2tlbi50eXBlID09PSBUb2tlblR5cGUuaWRlbnRpZmllcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpc1B1bmN0dWF0aW9uVmFsdWUodG9rZW46IElUb2tlbiwgdmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1B1bmN0dWF0aW9uKHRva2VuKSAmJiB0b2tlbi52YWx1ZSA9PT0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBpc0tleXdvcmRWYWx1ZSh0b2tlbjogSVRva2VuLCB2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzS2V5d29yZCh0b2tlbikgJiYgdG9rZW4udmFsdWUgPT09IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgaXNJZGVudGlmaWVyVmFsdWUodG9rZW46IElUb2tlbiwgdmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0lkZW50aWZpZXIodG9rZW4pICYmIHRva2VuLnZhbHVlID09PSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtYXRjaFB1bmN0dWF0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbWF0Y2hLZXl3b3JkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0tleXdvcmRWYWx1ZSh0b2tlbiwgdmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBuZXh0VG9rZW4oKTogSVRva2VuIHtcclxuICAgICAgICAgICAgY29uc3QgbG9va0FoZWFkVG9rZW4gPSB0aGlzLmxvb2tBaGVhZFRva2VuO1xyXG4gICAgICAgICAgICBpZiAobG9va0FoZWFkVG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9va0FoZWFkVG9rZW4gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VG9rZW4gPSBsb29rQWhlYWRUb2tlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbmV4dFN0YXRlID0gdGhpcy5zdGF0ZUluaXQoKTtcclxuICAgICAgICAgICAgd2hpbGUgKG5leHRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgbmV4dFN0YXRlID0gdGhpc1tuZXh0U3RhdGVdLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIXRoaXMudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW4gPSB0aGlzLmNyZWF0ZVRva2VuKFRva2VuVHlwZS5lcnJvciwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJlYWRhYmxlVG9rZW5zTW9kZSAmJiB0aGlzLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRva2VuLnR5cGUgPSB0b1JlYWRhYmxlVG9rZW5UeXBlKHRoaXMudG9rZW4udHlwZSBhcyBUb2tlblR5cGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG9rZW4uc3ViVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW4uc3ViVHlwZSA9IHRvUmVhZGFibGVMaXRlcmFsU3ViVHlwZSh0aGlzLnRva2VuLnN1YlR5cGUgYXMgTGl0ZXJhbFN1YlR5cGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBsYXRlc3RUb2tlbigpOiBJVG9rZW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VG9rZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbG9va0FoZWFkTmV4dFRva2VuKCk6IElUb2tlbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUb2tlbiA9IHRoaXMuY3VycmVudFRva2VuO1xyXG4gICAgICAgICAgICB0aGlzLmxvb2tBaGVhZFRva2VuID0gdGhpcy5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VG9rZW4gPSBjdXJyZW50VG9rZW47XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvb2tBaGVhZFRva2VuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgaGFzTmV4dCgpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuaXNFb2YodG9rZW4pICYmICF0aGlzLmlzRXJyb3IodG9rZW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldEN1cnJlbnRDdXJzb3JQb3MoKTogSVRva2VuUG9zaXRpb24ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbGluZTogdGhpcy5saW5lbm8sXHJcbiAgICAgICAgICAgICAgICBjb2x1bW46IHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKSAtIHRoaXMuY3VyckxpbmVDdXJzb3JcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIGZpbmFsIHN0YXRlc1xyXG5cdFx0XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0ZUZpbmlzaCgpIHsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRlRXJyb3IoKSB7IH1cclxuICAgICAgICAvLy8vLy8vIGZpbmFsIHN0YXRlcyAvLy8vLy9cclxuXHRcdFxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyBTdGF0ZXNcclxuXHRcdFxyXG4gICAgICAgIHByaXZhdGUgc3RhdGVJbml0KCkge1xyXG4gICAgICAgICAgICAvL2NsZWFudXAgY3VycmVudCB0b2tlblxyXG4gICAgICAgICAgICB0aGlzLnRva2VuID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgLy90cmFjayBjdXJzb3IgcG9zaXRpb25cclxuICAgICAgICAgICAgdGhpcy5zdGFydExpbmVubyA9IHRoaXMubGluZW5vO1xyXG4gICAgICAgICAgICB0aGlzLnJlbGF0aXZlU3RhcnRDdXJzb3IgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCkgLSB0aGlzLmN1cnJMaW5lQ3Vyc29yO1xyXG4gICAgICAgICAgICB0aGlzLmFic29sdXRlU3RhcnRDdXJzb3IgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCk7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmNoYXJTdHJlYW0uaXNFb2YoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuY3JlYXRlVG9rZW4oVG9rZW5UeXBlLmVvZiwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZmluaXNoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgbmV4dFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKElkZW50aWZ5ZXJzLmlzSWRlbnRpZmllclN0YXJ0KGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uYndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgICAgICBuZXh0U3RhdGUgPSBTdGF0ZXMuaWRlbnRpZmllcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyQ2FjaGVkSGFuZGxlcjogKCkgPT4gc3RyaW5nID0gTGV4ZXIuQ2hhcmVjdGVyTG9va3VwW2NoYXJdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXJDYWNoZWRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmJ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRTdGF0ZSA9IGNoYXJDYWNoZWRIYW5kbGVyLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4Y2VwdGlvbkhhbmRsZXIuYWRkRXhjZXB0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVuZXhwZWN0ZWQgdG9rZW4gXFxcIlwiICsgdXRpbGl0aWVzLkNoYXJQb2ludHMuZnJvbUNvZGVQb2ludChjaGFyKSArIFwiXFxcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbmVubyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0U3RhdGUgPSBTdGF0ZXMuZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXh0U3RhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRlSWRlbnRpZmllcigpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBsZXQgY2hhckdlbjogdXRpbGl0aWVzLklTdHJpbmdGcm9tQ2hhclBvaW50ID0gdXRpbGl0aWVzLkNoYXJQb2ludHMuY3JlYXRlU3RyaW5nRnJvbUNoYXJQb2ludEdlbmVyYXRvcigpLFxyXG4gICAgICAgICAgICAgICAgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNjYW5Vbmljb2RlRXNjYXBlU2VxdWVuY2UoY2hhckdlbiwgY2hhcikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhjZXB0aW9uSGFuZGxlci5hZGRFeGNlcHRpb24oXCJcIiwgdGhpcy5saW5lbm8sIHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGVzLmVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKElkZW50aWZ5ZXJzLmlzSWRlbnRpZmllclBhcnQoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2NhblVuaWNvZGVFc2NhcGVTZXF1ZW5jZShjaGFyR2VuLCBjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4Y2VwdGlvbkhhbmRsZXIuYWRkRXhjZXB0aW9uKFwiXCIsIHRoaXMubGluZW5vLCB0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGVzLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmJ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdHlwZSxcclxuICAgICAgICAgICAgICAgIHN1YlR5cGUsXHJcbiAgICAgICAgICAgICAgICBzdHI6IGFueSA9IGNoYXJHZW4uZ2V0U3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmIChJZGVudGlmeWVycy5pc0tleXdvcmQoc3RyKSkge1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9IFRva2VuVHlwZS5rZXl3b3JkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChzdHIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibnVsbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gVG9rZW5UeXBlLmxpdGVyYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YlR5cGUgPSBMaXRlcmFsU3ViVHlwZS5udWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidHJ1ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gVG9rZW5UeXBlLmxpdGVyYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YlR5cGUgPSBMaXRlcmFsU3ViVHlwZS5ib29sZWFuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZmFsc2VcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFRva2VuVHlwZS5saXRlcmFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJUeXBlID0gTGl0ZXJhbFN1YlR5cGUuYm9vbGVhbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBUb2tlblR5cGUuaWRlbnRpZmllcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRva2VuID0gdGhpcy5jcmVhdGVUb2tlbih0eXBlLCBzdHIsIHN1YlR5cGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gU3RhdGVzLmZpbmlzaDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGdlblN0YXRlU3RyaW5nKHN0cmluZ1Rlcm1pbmF0b3JDaGFyOiBudW1iZXIpOiAoKSA9PiBzdHJpbmcge1xyXG4gICAgICAgICAgICAvLyBlc2Mgc2VxIC0+XHJcbiAgICAgICAgICAgIC8vIFxcICcgXCIgXFwgYiBmIG4gciB0IHYgIC0+IHZhbFxyXG4gICAgICAgICAgICAvLyBcXCB4IEhleERpZ2l0IEhleERpZ2l0ICAtPiBoZXggdmFsXHJcbiAgICAgICAgICAgIC8vIFxcIHUgSGV4RGlnaXQgSGV4RGlnaXQgSGV4RGlnaXQgSGV4RGlnaXQgLT4gdSB2YWxcclxuICAgICAgICAgICAgLy8gXFwgbGluZSBjb250IC0+IGlnbm9yZVxyXG4gICAgICAgICAgICAvLyBcXCBkZWNpbWFsIGRpZ2l0IC0+IGlnbm9yZSBkaWdpdFxyXG4gICAgICAgICAgICAvLyBcXCBjaGFyIC0+IGlnbm9yZSBcXFxyXG5cdFx0XHRcclxuICAgICAgICAgICAgLy8gY2Fubm90IGJlIGFuIGFycm93IGZ1bmN0aW9uIGJlY2F1c2UgaXQgYmluZHMgX3RoaXMgLT4gdGhpc1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uZ2V0TmV4dENoYXIoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyR2VuOiB1dGlsaXRpZXMuSVN0cmluZ0Zyb21DaGFyUG9pbnQgPSB1dGlsaXRpZXMuQ2hhclBvaW50cy5jcmVhdGVTdHJpbmdGcm9tQ2hhclBvaW50R2VuZXJhdG9yKCk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5jaGFyU3RyZWFtLmdldE5leHRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09IHN0cmluZ1Rlcm1pbmF0b3JDaGFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhciA9PT0gUE5DLmJhY2tzbGFzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyID0gdGhpcy5jaGFyU3RyZWFtLmdldE5leHRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY2hhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMuYjogY2hhckdlbi5hZGRDaGFyUG9pbnQoOCk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMuZjogY2hhckdlbi5hZGRDaGFyUG9pbnQoMTIpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUE5DLm46IGNoYXJHZW4uYWRkQ2hhclBvaW50KDEwKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFBOQy5yOiBjaGFyR2VuLmFkZENoYXJQb2ludCgxMyk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMudDogY2hhckdlbi5hZGRDaGFyUG9pbnQoOSk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMudjogY2hhckdlbi5hZGRDaGFyUG9pbnQoMTEpOyBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFBOQy54OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5oYW5kbGVTY2FuSGV4RGlnaXRzKDIsIGNoYXJHZW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMudTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGFuZGxlU2NhbkhleERpZ2l0cyg0LCBjaGFyR2VuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGVzLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoSWRlbnRpZnllcnMuaXNMaW5lVGVybWluYXRvcihjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyR2VuLmFkZENoYXJQb2ludChjaGFyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVOZXdMaW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4Y2VwdGlvbkhhbmRsZXIuYWRkRXhjZXB0aW9uKFwidW5jbG9zZWQgc3RyaW5nXCIsIHRoaXMubGluZW5vLCB0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGVzLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhckdlbi5hZGRDaGFyUG9pbnQoY2hhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuY3JlYXRlVG9rZW4oVG9rZW5UeXBlLmxpdGVyYWwsIGNoYXJHZW4uZ2V0U3RyaW5nKCksIExpdGVyYWxTdWJUeXBlLnN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGVzLmZpbmlzaDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGVOdW1iZXIoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgbGV0IGludCA9IHRoaXMuc2NhbkRpZ2l0cygpLFxyXG4gICAgICAgICAgICAgICAgcG9pbnQgPSBpbnQubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGFyU3RyZWFtLm1hdGNoKFBOQy5kb3QpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVjaW1hbCA9IHRoaXMuc2NhbkRlY2ltYWwoKTtcclxuICAgICAgICAgICAgICAgIGlmIChkZWNpbWFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnQgPSBpbnQuY29uY2F0KGRlY2ltYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjYW5FeHBvbmVuc2lhbEFuZENyZWF0ZU51bWJlcihpbnQsIHBvaW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGVEb3RPck51bWJlcigpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmZ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICBsZXQgZGVjaW1hbCA9IHRoaXMuc2NhbkRlY2ltYWwoKTtcclxuICAgICAgICAgICAgaWYgKGRlY2ltYWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NhbkV4cG9uZW5zaWFsQW5kQ3JlYXRlTnVtYmVyKGRlY2ltYWwsIDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmJ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVQdW5jdHVhdGlvblNpbmdsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRlRGl2T3JDb21tZW50KCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uZndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5jaGFyU3RyZWFtLmdldE5leHRDaGFyKCk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoY2hhcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBQTkMuc2xhc2g6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5zaW5nbGVDb21tZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBQTkMuYXN0ZXJpc2s6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5tdWx0aUNvbW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFBOQy5hc3NpZ246XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5id2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uYndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlUHVuY3R1YXRpb25TaW5nbGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGVQdW5jdHVhdGlvblNpbmdsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uZndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW4gPSB0aGlzLmNyZWF0ZVRva2VuRnJvbVBvcyhUb2tlblR5cGUucHVuY3R1YXRpb24pO1xyXG4gICAgICAgICAgICByZXR1cm4gU3RhdGVzLmZpbmlzaDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGVXaGl0ZVNwYWNlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5md2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5pbml0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0ZUxpbmVUZXJtaW5hdG9yKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5md2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLm1hdGNoQ29tcGxleChjaGFyID0+IGNoYXIgPT09IFBOQy5sZiB8fCBjaGFyID09PSB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZU5ld0xpbmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5pbml0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0ZVNpbmdsZUNvbW1lbnQoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoYXIgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0TmV4dENoYXIoKTtcclxuICAgICAgICAgICAgICAgIGlmIChJZGVudGlmeWVycy5pc0xpbmVUZXJtaW5hdG9yKGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVOZXdMaW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKGNoYXIgIT09IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW4gPSB0aGlzLmNyZWF0ZVRva2VuRnJvbVBvcyhUb2tlblR5cGUuY29tbWVudCk7XHJcbiAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZmluaXNoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0ZU11bHRpQ29tbWVudCgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0TmV4dENoYXIoKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSBQTkMuYXN0ZXJpc2spIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGFyU3RyZWFtLm1hdGNoKFBOQy5zbGFzaCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhjZXB0aW9uSGFuZGxlci5hZGRFeGNlcHRpb24oXCJ1bmNsb3NlZCBjb21tZW50XCIsIHRoaXMubGluZW5vLCB0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChJZGVudGlmeWVycy5pc0xpbmVUZXJtaW5hdG9yKGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVOZXdMaW5lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuY3JlYXRlVG9rZW5Gcm9tUG9zKFRva2VuVHlwZS5jb21tZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5maW5pc2g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNjYW5Vbmljb2RlRXNjYXBlU2VxdWVuY2UoY2hhckdlbjogdXRpbGl0aWVzLklTdHJpbmdGcm9tQ2hhclBvaW50LCBjaGFyOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgaWYgKGNoYXIgPT09IFBOQy5iYWNrc2xhc2gpIHtcclxuICAgICAgICAgICAgICAgIGNoYXIgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0TmV4dENoYXIoKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSBQTkMudSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoZXhEaWdpdCA9IHRoaXMuc2NhbkhleERpZ2l0cyg0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGV4RGlnaXQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyR2VuLmFkZENoYXJQb2ludChoZXhEaWdpdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2hhckdlbi5hZGRDaGFyUG9pbnQoY2hhcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy9TdGF0ZXMvLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyBTY2FubmVyc1xyXG4gICAgICAgIHByaXZhdGUgc2NhbkV4cG9uZW5zaWFsQW5kQ3JlYXRlTnVtYmVyKGludDogbnVtYmVyW10sIHBvaW50OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBsZXQgZXhwID0gdGhpcy5zY2FuRXhwb25lbnRpYWwoKTtcclxuICAgICAgICAgICAgaWYgKGV4cCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGVzLmVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYXJTdHJlYW0ubWF0Y2hDb21wbGV4KGNoYXIgPT4gSWRlbnRpZnllcnMuaXNJZGVudGlmaWVyUGFydChjaGFyKSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhjZXB0aW9uSGFuZGxlci5hZGRFeGNlcHRpb24oXCJcIiwgdGhpcy5saW5lbm8sIHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGVzLmVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBudW0gPSB0aGlzLmNyZWF0ZU51bWJlcihpbnQsIHBvaW50LCBleHApO1xyXG4gICAgICAgICAgICB0aGlzLnRva2VuID0gdGhpcy5jcmVhdGVUb2tlbihUb2tlblR5cGUubGl0ZXJhbCwgbnVtLCBMaXRlcmFsU3ViVHlwZS5udW1iZXIpO1xyXG4gICAgICAgICAgICByZXR1cm4gU3RhdGVzLmZpbmlzaFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzY2FuRGlnaXRzKCk6IG51bWJlcltdIHtcclxuICAgICAgICAgICAgbGV0IGNoYXIsXHJcbiAgICAgICAgICAgICAgICBkaXRzID0gW10sXHJcbiAgICAgICAgICAgICAgICBjdXJzb3JQb3MgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCk7XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFyID0gdGhpcy5jaGFyU3RyZWFtLmdldE5leHRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoSWRlbnRpZnllcnMuaXNEaWdpdChjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaWdpdCA9IHV0aWxpdGllcy5DaGFyUG9pbnRzLmdldERpZ2l0RnJvbUNoYXJQb2ludChjaGFyKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXRzLnB1c2goZGlnaXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGN1cnJDdXJzb3Jwb3M7XHJcbiAgICAgICAgICAgIGlmIChjaGFyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJDdXJzb3Jwb3MgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uYndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgICAgICBjdXJyQ3Vyc29ycG9zID0gdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjdXJyQ3Vyc29ycG9zIC0gY3Vyc29yUG9zICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGl0cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzY2FuRGVjaW1hbCgpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgICAgIGxldCBzdGFydFBvcyA9IHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKSxcclxuICAgICAgICAgICAgICAgIGRpZ2l0cyA9IHRoaXMuc2NhbkRpZ2l0cygpLFxyXG4gICAgICAgICAgICAgICAgZW5kUG9zID0gdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpLFxyXG4gICAgICAgICAgICAgICAgZGlnaXRSYW5nZSA9IGVuZFBvcyAtIHN0YXJ0UG9zO1xyXG4gICAgICAgICAgICBpZiAoZGlnaXRSYW5nZSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpZ2l0cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzY2FuRXhwb25lbnRpYWwoKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0TmV4dENoYXIoKTtcclxuICAgICAgICAgICAgaWYgKGNoYXIgPT09IFBOQy5leHAgfHwgY2hhciA9PT0gUE5DLmV4cGIpIHtcclxuICAgICAgICAgICAgICAgIGNoYXIgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0TmV4dENoYXIoKTtcclxuICAgICAgICAgICAgICAgIGxldCBuZWdhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSBQTkMubWludXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWdhdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyICE9PSBQTkMucGx1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5id2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBkaWdpdHMgPSB0aGlzLnNjYW5EaWdpdHMoKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaWdpdHMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhjZXB0aW9uSGFuZGxlci5hZGRFeGNlcHRpb24oXCJleHBvbmVudGlhbCBzaG91bGQgcG9zdGZpeGVkIGJ5IG51bWJlcnNcIiwgdGhpcy5saW5lbm8sIHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IHRoaXMuY3JlYXRlTnVtYmVyKGRpZ2l0cywgZGlnaXRzLmxlbmd0aCwgMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmVnYXRpdmUgPyAtbnVtIDogbnVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmJ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzY2FuSGV4RGlnaXRzKHRpbWVzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zY2FuSGV4RGlnaXRzVGltZXModGltZXMpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKSxcclxuICAgICAgICAgICAgICAgICAgICBoZXhTdHIgPSB0aGlzLmNoYXJTdHJlYW0udG9rZW5pemUoY2hhciAtIHRpbWVzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChoZXhTdHIsIDE2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzY2FuSGV4RGlnaXRzVGltZXModGltZXM6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRpbmdQb3MgPSB0aW1lcztcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0TmV4dENoYXIoKTtcclxuICAgICAgICAgICAgICAgIGlmICghSWRlbnRpZnllcnMuaXNIZXhEaWdpdChjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5id2RDdXJzb3JSYW5nZShzdGFydGluZ1BvcyAtICh0aW1lcyAtIDEpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKC0tdGltZXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGdlblB1bmN0dWF0aW9uU2Nhbm5lcihjYW5kaWNhdGVQdW5jczogbnVtYmVyW11bXSkge1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0TGVuID0gXy5sYXN0KGNhbmRpY2F0ZVB1bmNzKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCBwdW5jc0xvb2t1cCA9IF8ubWFwKG5ldyBBcnJheShsYXN0TGVuKSwgKCkgPT4gbmV3IE9iamVjdCgpKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgY3VyciA9IGxhc3RMZW4gLSAxOyBjdXJyICE9PSAtMTsgLS1jdXJyKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY2FuZGljYXRlUHVuY3MubGVuZ3RoIC0gMTsgaSAhPT0gLTE7IC0taSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjID0gY2FuZGljYXRlUHVuY3NbaV1bY3Vycl07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVuY3NMb29rdXBbY3Vycl1bY10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNhbm5vdCB1c2UgYXJyb3cgZnVuY3Rpb24gYmVjYXVzZSBpdCBjb25mdXNlIHRoaXMgd2l0aCBfdGhpcyBcclxuICAgICAgICAgICAgLy8gaW4gdGhlIGNvbXBsaWxlZCB0eXBlc2NyaXB0IHZlcnNpb25cclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmZ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXN0TGVuOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcHVuY3NMb29rdXBbaV1bY2hhcl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmJ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW4gPSB0aGlzLmNyZWF0ZVRva2VuRnJvbVBvcyhUb2tlblR5cGUucHVuY3R1YXRpb24sIHRoaXMuc3RhcnRQb3MpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5maW5pc2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vU2Nhbm5lcnMvLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyBMZXggb2JqZWN0IGNyZWF0b3JzXHJcbiAgICAgICAgcHJpdmF0ZSBjcmVhdGVQb3MoKTogSVRva2VuU291cmNlTG9jYXRpb24ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lOiB0aGlzLnN0YXJ0TGluZW5vLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbjogdGhpcy5yZWxhdGl2ZVN0YXJ0Q3Vyc29yXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZW5kOiB0aGlzLmdldEN1cnJlbnRDdXJzb3JQb3MoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGNyZWF0ZVRva2VuRnJvbVBvcyh0eXBlOiBzdHJpbmcgfCBUb2tlblR5cGUsIHN1YlR5cGU/OiBzdHJpbmcpOiBJVG9rZW4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmNoYXJTdHJlYW0udG9rZW5pemUodGhpcy5hYnNvbHV0ZVN0YXJ0Q3Vyc29yKSxcclxuICAgICAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGUsXHJcbiAgICAgICAgICAgICAgICBsb2M6IHRoaXMuY3JlYXRlUG9zKClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgY3JlYXRlVG9rZW4odHlwZTogc3RyaW5nIHwgVG9rZW5UeXBlLCB2YWx1ZTogYW55LCBzdWJUeXBlPzogc3RyaW5nIHwgTGl0ZXJhbFN1YlR5cGUpOiBJVG9rZW4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGUsXHJcbiAgICAgICAgICAgICAgICBsb2M6IHRoaXMuY3JlYXRlUG9zKClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblx0XHRcclxuICAgICAgICAvLy8vLy8vLy8vLy8vL0xleCBvYmplY3QgY3JlYXRvcnMvLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8gSGFuZGxlcnNcclxuXHRcdFxyXG4gICAgICAgIHByaXZhdGUgZ2VuSW50ZWdlckZyb21BcnJheShkaWdpdHMsIGZyb20sIHRvKSB7XHJcbiAgICAgICAgICAgIGxldCBudW0gPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gZnJvbTsgaSA8IHRvOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIG51bSA9IDEwICogbnVtICsgZGlnaXRzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGNyZWF0ZU51bWJlcihkaWdpdHMsIHBvaW50LCBleHApIHtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0UG9pbnQgPSBwb2ludCArIGV4cCxcclxuICAgICAgICAgICAgICAgIGludFBhcnQgPSAwLCBkZWNQYXJ0ID0gMDtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0UG9pbnQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gdGhpcy5nZW5JbnRlZ2VyRnJvbUFycmF5KGRpZ2l0cywgMCwgZGlnaXRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtIC8gTWF0aC5wb3coMTAsIHBvaW50IC0gZXhwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydFBvaW50ID4gZGlnaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IHRoaXMuZ2VuSW50ZWdlckZyb21BcnJheShkaWdpdHMsIDAsIGRpZ2l0cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bSAqIE1hdGgucG93KDEwLCBzdGFydFBvaW50IC0gZGlnaXRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gdGhpcy5nZW5JbnRlZ2VyRnJvbUFycmF5KGRpZ2l0cywgMCwgc3RhcnRQb2ludCksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVjID0gdGhpcy5nZW5JbnRlZ2VyRnJvbUFycmF5KGRpZ2l0cywgc3RhcnRQb2ludCwgZGlnaXRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtICsgZGVjIC8gTWF0aC5wb3coMTAsIGRpZ2l0cy5sZW5ndGggLSBzdGFydFBvaW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBoYW5kbGVTY2FuSGV4RGlnaXRzKG51bTogbnVtYmVyLCBjaGFyR2VuOiB1dGlsaXRpZXMuSVN0cmluZ0Zyb21DaGFyUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgbGV0IGhleERpZ2l0ID0gdGhpcy5zY2FuSGV4RGlnaXRzKG51bSk7XHJcbiAgICAgICAgICAgIGlmIChoZXhEaWdpdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4Y2VwdGlvbkhhbmRsZXIuYWRkRXhjZXB0aW9uKFwiXCIsIHRoaXMubGluZW5vLCB0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2hhckdlbi5hZGRDaGFyUG9pbnQoaGV4RGlnaXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBoYW5kbGVOZXdMaW5lKCkge1xyXG4gICAgICAgICAgICArK3RoaXMubGluZW5vO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJMaW5lQ3Vyc29yID0gdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpO1xyXG4gICAgICAgIH1cdFx0XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vSGFuZGxlcnMvLy8vLy8vLy8vLy8vLy8vXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJJRXhjZXB0aW9uLmQudHNcIiAvPlxyXG5cclxubW9kdWxlIHRybC5mcm9udGVuZC51dGlsaXRpZXMge1xyXG5cdGV4cG9ydCBjbGFzcyBFeGNlcHRpb25IYW5kbGVyIGltcGxlbWVudHMgSUV4Y2VwdGlvbkhhbmRsZXIge1xyXG5cdFx0cHJpdmF0ZSBleGNlcHRpb25zOiBJRXhjZXB0aW9uW10gPSBbXTtcclxuXHRcdFxyXG5cdFx0cHVibGljIGNvbnN0cnVjdG9yKCl7fVxyXG5cdFx0XHJcblx0XHRwdWJsaWMgYWRkRXhjZXB0aW9uKG1zZzogc3RyaW5nLCBsaW5lOiBudW1iZXIsIGNvbHVtbjogbnVtYmVyKSB7XHJcblx0XHRcdGxldCBleGNlcHRpb246IElFeGNlcHRpb24gPSB7XHJcblx0XHRcdFx0cG9zOiB7XHJcblx0XHRcdFx0XHRjb2x1bW4sIFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVcclxuXHRcdFx0XHR9LFx0XHRcclxuXHRcdFx0XHRtc2c6IG1zZ1xyXG5cdFx0XHR9O1xyXG5cdFx0XHR0aGlzLmV4Y2VwdGlvbnMucHVzaChleGNlcHRpb24pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwdWJsaWMgaGFzRXhjZXB0aW9ucygpOiBib29sZWFuIHtcclxuXHRcdFx0cmV0dXJuICFfLmlzRW1wdHkodGhpcy5leGNlcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIGNsZWFyKCk6IHZvaWQge1xyXG5cdFx0XHR0aGlzLmV4Y2VwdGlvbnMubGVuZ3RoID0gMDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIGdldEV4Y2VwdGlvbnMoKTogSUV4Y2VwdGlvbltdIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZXhjZXB0aW9ucztcclxuXHRcdH1cclxuXHR9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHNEZWZpbml0aW9ucy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi91dGlsaXRpZXMvQ2hhclBvaW50cy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJJQ2hhcmFjdGVyU3RyZWFtLmQudHNcIiAvPlxyXG5cclxubW9kdWxlIHRybC5mcm9udGVuZC5sZXhpY2FsIHtcclxuXHRcclxuXHRleHBvcnQgY2xhc3MgQ2hhcmFjdGVyU3RyZWFtIGltcGxlbWVudHMgSUNoYXJhY3RlclN0cmVhbSB7XHJcblx0XHRwcml2YXRlIGN1cnNvcjtcclxuXHJcblx0XHRwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBzcmM6IHN0cmluZykge1xyXG5cdFx0XHR0aGlzLmN1cnNvciA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0cHVibGljIGdldE5leHRDaGFyKCk6IG51bWJlciB7XHJcblx0XHRcdGlmKHRoaXMuaGFzTmV4dCgpKSB7XHJcblx0XHRcdFx0cmV0dXJuIHV0aWxpdGllcy5DaGFyUG9pbnRzLmNvZGVQb2ludEF0KHRoaXMuc3JjLCB0aGlzLmN1cnNvcisrKTtcclxuXHRcdFx0fVx0XHRcdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHB1YmxpYyBnZXRDaGFyKCk6IG51bWJlciB7XHJcblx0XHRcdHJldHVybiB1dGlsaXRpZXMuQ2hhclBvaW50cy5jb2RlUG9pbnRBdCh0aGlzLnNyYywgdGhpcy5jdXJzb3IpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHB1YmxpYyBnZXRDdXJzb3IoKTogbnVtYmVyIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY3Vyc29yO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwdWJsaWMgYndkQ3Vyc29yKCkge1xyXG5cdFx0XHQtLXRoaXMuY3Vyc29yO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwdWJsaWMgZndkQ3Vyc29yKCkge1xyXG5cdFx0XHRpZih0aGlzLmhhc05leHQoKSkge1xyXG5cdFx0XHRcdCsrdGhpcy5jdXJzb3I7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIGJ3ZEN1cnNvclJhbmdlKHJhbmdlOiBudW1iZXIpIHtcclxuXHRcdFx0dGhpcy5jdXJzb3IgPSBNYXRoLm1heCh0aGlzLmN1cnNvciAtIHJhbmdlLCAwKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIHRva2VuaXplKHN0YXJ0UG9zOiBudW1iZXIpOiBzdHJpbmcge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5zcmMuc3Vic3RyaW5nKHN0YXJ0UG9zLCB0aGlzLmN1cnNvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHB1YmxpYyBtYXRjaChjaGFyTWF0Y2g6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0XHRsZXQgY2hhciA9IHRoaXMuZ2V0TmV4dENoYXIoKTtcclxuXHRcdFx0aWYoY2hhciA9PT0gY2hhck1hdGNoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0aWYoY2hhciAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHR0aGlzLmJ3ZEN1cnNvcigpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIG1hdGNoQ29tcGxleChjb21wYXJhdG9yOiAoY2hhcjogbnVtYmVyKSA9PiBib29sZWFuKTogYm9vbGVhbiB7XHJcblx0XHRcdGxldCBjaGFyID0gdGhpcy5nZXROZXh0Q2hhcigpO1xyXG5cdFx0XHRpZihjb21wYXJhdG9yKGNoYXIpKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0aWYoY2hhciAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHR0aGlzLmJ3ZEN1cnNvcigpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIGlzRW9mKCk6IGJvb2xlYW4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jdXJzb3IgPj0gdGhpcy5zcmMubGVuZ3RoO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwcml2YXRlIGhhc05leHQoKTogYm9vbGVhbiB7XHJcblx0XHRcdHJldHVybiB0aGlzLmN1cnNvciA8IHRoaXMuc3JjLmxlbmd0aDtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHNEZWZpbml0aW9ucy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJsZXhpY2FsL0xleGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cInV0aWxpdGllcy9FeGNlcHRpb24udHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwibGV4aWNhbC9DaGFyYWN0ZXJTdHJlYW0udHNcIiAvPlxyXG5cclxubW9kdWxlIHRybC5mcm9udGVuZC5hcGkge1xyXG5cclxuXHRpbnRlcmZhY2UgSVRva2VuaXplUmVzdWx0IHtcclxuXHRcdHRva2VuczogbGV4aWNhbC5JVG9rZW5bXSxcclxuXHRcdGV4Y2VwdGlvbnM/OiB1dGlsaXRpZXMuSUV4Y2VwdGlvbltdXHJcblx0fVxyXG5cclxuXHRleHBvcnQgZnVuY3Rpb24gdG9rZW5pemUoc3JjOiBzdHJpbmcsIG9wdGlvbnM/OiBsZXhpY2FsLklMZXhlck9wdGlvbnMpOiBJVG9rZW5pemVSZXN1bHQge1xyXG5cdFx0Y29uc3QgY3MgPSBuZXcgbGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0oc3JjKSxcclxuXHRcdFx0ZWggPSBuZXcgdXRpbGl0aWVzLkV4Y2VwdGlvbkhhbmRsZXIoKSxcclxuXHRcdFx0bGV4ID0gbmV3IGxleGljYWwuTGV4ZXIoY3MsIGVoLCBvcHRpb25zKTtcclxuXHJcblx0XHRjb25zdCB0b2tlbnM6IGxleGljYWwuSVRva2VuW10gPSBbXTtcclxuXHRcdHdoaWxlIChsZXguaGFzTmV4dCgpKSB7XHJcblx0XHRcdGNvbnN0IHRva2VuID0gbGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XHJcblx0XHR9O1xyXG5cclxuXHRcdGxldCB0b2tlbml6ZVJlc3VsdDogSVRva2VuaXplUmVzdWx0ID0ge1xyXG5cdFx0XHR0b2tlbnM6IHRva2Vuc1xyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAoZWguaGFzRXhjZXB0aW9ucygpKSB7XHJcblx0XHRcdHRva2VuaXplUmVzdWx0LmV4Y2VwdGlvbnMgPSBlaC5nZXRFeGNlcHRpb25zKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdG9rZW5pemVSZXN1bHQ7XHJcblx0fVxyXG5cclxufSAiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiSU5vZGUudHNcIiAvPlxyXG5cclxubW9kdWxlIHRybC5mcm9udGVuZC5zeW50YXgge1xyXG4gICAgXHJcbiAgICBleHBvcnQgY2xhc3MgTm9kZUZhY3Rvcnkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZW5hYmxlUG9zOiBib29sZWFuKSB7fVxyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgY3JlYXRlTm9kZShub2RlLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZW5hYmxlUG9zKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmxvYyA9IGxvYztcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVQcm9ncmFtKGJvZHk6IElTdGF0ZW1lbnRbXSwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElQcm9ncmFtIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlByb2dyYW1cIixcclxuICAgICAgICAgICAgICAgIGJvZHlcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudEVtcHR5KGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJRW1wdHlTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRW1wdHlTdGF0ZW1lbnRcIlxyXG4gICAgICAgICAgICB9LCBsb2MpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50QmxvY2soYm9keTogSVN0YXRlbWVudFtdLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUJsb2NrU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJsb2NrU3RhdGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICBib2R5XHJcbiAgICAgICAgICAgIH0sIGxvYyk7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTdGF0ZW1lbnRFeHByZXNzaW9uKGV4cHJlc3Npb246IElFeHByZXNzaW9uLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUV4cHJlc3Npb25TdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRXhwcmVzc2lvblN0YXRlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvblxyXG4gICAgICAgICAgICB9LCBsb2MpOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50SWYodGVzdDogSUV4cHJlc3Npb24sIGNvbnNlcXVlbnQ6IElTdGF0ZW1lbnQsIGFsdGVybmF0ZT86IElTdGF0ZW1lbnQsIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJSWZTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiSWZTdGF0ZW1lbnRcIixcclxuICAgICAgICAgICAgICAgIHRlc3QsXHJcbiAgICAgICAgICAgICAgICBjb25zZXF1ZW50LFxyXG4gICAgICAgICAgICAgICAgYWx0ZXJuYXRlXHJcbiAgICAgICAgICAgIH0sIGxvYyk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50QnJlYWsobGFiZWw6IElJZGVudGlmaWVyLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUJyZWFrU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJyZWFrU3RhdGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICB9LCBsb2MpOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudENvbnRpbnVlKGxhYmVsOiBJSWRlbnRpZmllciwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElDb250aW51ZVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJDb250aW51ZVN0YXRlbWVudFwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgIH0sIGxvYyk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50U3dpdGNoKGRpc2NyaW1pbmFudDogSUV4cHJlc3Npb24sIGNhc2VzOiBJU3dpdGNoQ2FzZVtdLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVN3aXRjaFN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJTd2l0Y2hTdGF0ZW1lbnRcIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkaXNjcmltaW5hbnQsXHJcbiAgICAgICAgICAgICAgICBjYXNlc1xyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50UmV0dXJuKGFyZ3VtZW50OiBJRXhwcmVzc2lvbiwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElSZXR1cm5TdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUmV0dXJuU3RhdGVtZW50XCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYXJndW1lbnRcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudFRocm93KGFyZ3VtZW50OiBJRXhwcmVzc2lvbiwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElUaHJvd1N0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJUaHJvd1N0YXRlbWVudFwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFyZ3VtZW50XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTdGF0ZW1lbnRUcnkoYmxvY2s6IElCbG9ja1N0YXRlbWVudCwgaGFuZGxlcjogSUNhdGNoQ2xhdXNlLCBmaW5hbGl6ZXI6IElCbG9ja1N0YXRlbWVudCwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElUcnlTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiVHJ5U3RhdGVtZW50XCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYmxvY2ssXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyLFxyXG4gICAgICAgICAgICAgICAgZmluYWxpemVyXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTdGF0ZW1lbnRXaGlsZSh0ZXN0OiBJRXhwcmVzc2lvbiwgYm9keTogSVN0YXRlbWVudCwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElXaGlsZVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJXaGlsZVN0YXRlbWVudFwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRlc3QsXHJcbiAgICAgICAgICAgICAgICBib2R5XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTdGF0ZW1lbnREb1doaWxlKGJvZHk6IElTdGF0ZW1lbnQsIHRlc3Q6IElFeHByZXNzaW9uLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSURvV2hpbGVTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRG9XaGlsZVN0YXRlbWVudFwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAgICAgICB0ZXN0XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTdGF0ZW1lbnRGb3IoaW5pdDogSVZhcmlhYmxlRGVjbGFyYXRpb24gfCBJRXhwcmVzc2lvbiwgdGVzdDogSUV4cHJlc3Npb24sIHVwZGF0ZTogSUV4cHJlc3Npb24sIGJvZHk6IElTdGF0ZW1lbnQsIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJRm9yU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkZvclN0YXRlbWVudFwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGluaXQsXHJcbiAgICAgICAgICAgICAgICB0ZXN0LFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlLFxyXG4gICAgICAgICAgICAgICAgYm9keVxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50Rm9ySW4obGVmdDogSVZhcmlhYmxlRGVjbGFyYXRpb24gfCBJRXhwcmVzc2lvbiwgcmlnaHQ6IElFeHByZXNzaW9uLCBib2R5OiBJU3RhdGVtZW50LCBlYWNoOiBib29sZWFuLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUZvckluU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkZvckluU3RhdGVtZW50XCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGVmdCxcclxuICAgICAgICAgICAgICAgIHJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgYm9keSxcclxuICAgICAgICAgICAgICAgIGVhY2hcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudERlYnVnZ2VyKGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJRGVidWdnZXJTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRm9ySW5TdGF0ZW1lbnRcIixcclxuICAgICAgICAgICAgICAgIGxvY1xyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRGVjbGFyYXRpb25GdW5jdGlvbihpZDogSUlkZW50aWZpZXIsIHBhcmFtczogc3RyaW5nW10sIGJvZHk6IElCbG9ja1N0YXRlbWVudCwgZGVjbGFyYXRpb25zOiBJVmFyaWFibGVEZWNsYXJhdG9yW10sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJRnVuY3Rpb25EZWNsYXJhdGlvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJGdW5jdGlvbkRlY2xhcmF0aW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXMsXHJcbiAgICAgICAgICAgICAgICBib2R5XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVEZWNsYXJhdGlvblZhcmlhYmxlKGRlY2xhcmF0aW9uczogSVZhcmlhYmxlRGVjbGFyYXRvcltdLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVZhcmlhYmxlRGVjbGFyYXRpb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiVmFyaWFibGVEZWNsYXJhdGlvblwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucyxcclxuICAgICAgICAgICAgICAgIGtpbmQ6IFwidmFyXCJcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVZhcmlhYmxlRGVjbGFyYXRvcihpZDogc3RyaW5nLCBpbml0OiBJRXhwcmVzc2lvbiwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElWYXJpYWJsZURlY2xhcmF0b3Ige1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiVmFyaWFibGVEZWNsYXJhdG9yXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICBpbml0XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVFeHByZXNzaW9uVGhpcyhsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVRoaXNFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlRoaXNFeHByZXNzaW9uXCIsXHJcbiAgICAgICAgICAgICAgICBsb2NcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUV4cHJlc3Npb25BcnJheShlbGVtZW50czogSUV4cHJlc3Npb25bXSwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElBcnJheUV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQXJyYXlFeHByZXNzaW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudHNcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUV4cHJlc3Npb25PYmplY3QocHJvcGVydGllczogSVByb3BlcnR5W10sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJT2JqZWN0RXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJPYmplY3RFeHByZXNzaW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc1xyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlT2JqZWN0UHJvcGVydHkoa2V5OiBJTGl0ZXJhbCB8IElJZGVudGlmaWVyLCB2YWx1ZTogSUV4cHJlc3Npb24sIGtpbmQ6IHN0cmluZywgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElQcm9wZXJ0eSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQcm9wZXJ0eVwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAga2luZFxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRXhwcmVzc2lvbkZ1bmN0aW9uKGlkOiBJSWRlbnRpZmllciwgcGFyYW1zOiBzdHJpbmdbXSwgYm9keTogSUJsb2NrU3RhdGVtZW50LCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUZ1bmN0aW9uRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJGdW5jdGlvbkV4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgIHBhcmFtcyxcclxuICAgICAgICAgICAgICAgIGJvZHlcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUV4cHJlc3Npb25TZXF1ZW5jZShleHByZXNzaW9uczogSUV4cHJlc3Npb25bXSwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElTZXF1ZW5jZUV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiU2VxdWVuY2VFeHByZXNzaW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbnNcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUV4cHJlc3Npb25VbmFyeShvcGVyYXRvcjogc3RyaW5nLCBwcmVmaXg6IGJvb2xlYW4sIGFyZ3VtZW50OiBJRXhwcmVzc2lvbiwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElVbmFyeUV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiVW5hcnlFeHByZXNzaW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3IsXHJcbiAgICAgICAgICAgICAgICBwcmVmaXgsXHJcbiAgICAgICAgICAgICAgICBhcmd1bWVudFxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRXhwcmVzc2lvbkJpbmFyeShvcGVyYXRvcjogc3RyaW5nLCBsZWZ0OiBJRXhwcmVzc2lvbiwgcmlnaHQ6IElFeHByZXNzaW9uLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUJpbmFyeUV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQmluYXJ5RXhwcmVzc2lvblwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yLFxyXG4gICAgICAgICAgICAgICAgbGVmdCxcclxuICAgICAgICAgICAgICAgIHJpZ2h0XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVFeHByZXNzaW9uQXNzaWdubWVudChvcGVyYXRvcjogc3RyaW5nLCBsZWZ0OiBJRXhwcmVzc2lvbiwgcmlnaHQ6IElFeHByZXNzaW9uLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUFzc2lnbm1lbnRFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkFzc2lnbm1lbnRFeHByZXNzaW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3IsXHJcbiAgICAgICAgICAgICAgICBsZWZ0LFxyXG4gICAgICAgICAgICAgICAgcmlnaHRcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUV4cHJlc3Npb25VcGRhdGUob3BlcmF0b3I6IHN0cmluZywgYXJndW1lbnQ6IElFeHByZXNzaW9uLCBwcmVmaXg6IGJvb2xlYW4sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJVXBkYXRlRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJVcGRhdGVFeHByZXNzaW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3IsXHJcbiAgICAgICAgICAgICAgICBhcmd1bWVudCxcclxuICAgICAgICAgICAgICAgIHByZWZpeFxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRXhwcmVzc2lvbkxvZ2ljYWwob3BlcmF0b3I6IHN0cmluZywgbGVmdDogSUV4cHJlc3Npb24sIHJpZ2h0OiBJRXhwcmVzc2lvbiwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElMb2dpY2FsRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJMb2dpY2FsRXhwcmVzc2lvblwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yLFxyXG4gICAgICAgICAgICAgICAgbGVmdCxcclxuICAgICAgICAgICAgICAgIHJpZ2h0XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVFeHByZXNzaW9uQ29uZGl0aW9uYWwodGVzdDogSUV4cHJlc3Npb24sIGFsdGVybmF0ZTogSUV4cHJlc3Npb24sIGNvbnNlcXVlbnQ6IElFeHByZXNzaW9uLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUNvbmRpdGlvbmFsRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJDb25kaXRpb25hbEV4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0ZXN0LFxyXG4gICAgICAgICAgICAgICAgYWx0ZXJuYXRlLFxyXG4gICAgICAgICAgICAgICAgY29uc2VxdWVudFxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRXhwcmVzc2lvbk5ldyhjYWxsZWU6IElFeHByZXNzaW9uLCBhcmdzOiBJRXhwcmVzc2lvbltdLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSU5ld0V4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiTmV3RXhwcmVzc2lvblwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNhbGxlZSxcclxuICAgICAgICAgICAgICAgIGFyZ3VtZW50czogYXJnc1xyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRXhwcmVzc2lvbkNhbGwoY2FsbGVlOiBJRXhwcmVzc2lvbiwgYXJnczogSUV4cHJlc3Npb25bXSwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElDYWxsRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJDYWxsRXhwcmVzc2lvblwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNhbGxlZSxcclxuICAgICAgICAgICAgICAgIGFyZ3VtZW50czogYXJnc1xyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRXhwcmVzc2lvbk1lbWJlcihvYmplY3Q6IElFeHByZXNzaW9uLCBwcm9wZXJ0eTogSUlkZW50aWZpZXIgfCBJRXhwcmVzc2lvbiwgY29tcHV0ZWQ6IGJvb2xlYW4sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJTWVtYmVyRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJNZW1iZXJFeHByZXNzaW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICBjb21wdXRlZFxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3dpdGNoQ2FzZSh0ZXN0OiBJRXhwcmVzc2lvbiwgY29uc2VxdWVudDogSVN0YXRlbWVudFtdLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVN3aXRjaENhc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiU3dpdGNoQ2FzZVwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRlc3QsXHJcbiAgICAgICAgICAgICAgICBjb25zZXF1ZW50XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVDYXRjaENsYXVzZShwYXJhbTogc3RyaW5nLCBib2R5OiBJQmxvY2tTdGF0ZW1lbnQsIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJQ2F0Y2hDbGF1c2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQ2F0Y2hDbGF1c2VcIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwYXJhbSxcclxuICAgICAgICAgICAgICAgIGJvZHlcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUlkZW50aWZpZXIobmFtZTogc3RyaW5nLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUlkZW50aWZpZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiSWRlbnRpZmllclwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUxpdGVyYWwodmFsdWU6IHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXIgfCBJUmVnRXhwLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUxpdGVyYWwge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiTGl0ZXJhbFwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90c0RlZmluaXRpb25zL3RzZC5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2xleGljYWwvTGV4ZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdXRpbGl0aWVzL0V4Y2VwdGlvbi50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9sZXhpY2FsL0NoYXJhY3RlclN0cmVhbS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9sZXhpY2FsL1Rva2VuRGVmaW5pdGlvbnMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiTm9kZUZhY3RvcnkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiSVBhcnNlci5kLnRzXCIgLz5cclxuXHJcbm1vZHVsZSB0cmwuZnJvbnRlbmQuc3ludGF4IHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUGFyc2VyIGltcGxlbWVudHMgSVBhcnNlciB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgbm9kZUZhY3Rvcnk6IE5vZGVGYWN0b3J5O1xyXG4gICAgICAgIHB1YmxpYyBwYXJzZUV4Y2VwdGlvbjogdXRpbGl0aWVzLklFeGNlcHRpb25IYW5kbGVyO1xyXG5cclxuICAgICAgICBwcml2YXRlIGNoYXJTdHJlYW06IGxleGljYWwuSUNoYXJhY3RlclN0cmVhbTtcclxuICAgICAgICBwcml2YXRlIGxleEV4Y2VwdGlvbjogdXRpbGl0aWVzLklFeGNlcHRpb25IYW5kbGVyO1xyXG4gICAgICAgIHByaXZhdGUgbGV4OiBsZXhpY2FsLklMZXhlcjtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgZGVmYXVsdFBhcnNlck9wdGlvbnM6IElQYXJzZXJPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBsb2M6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIGNoYXJzOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHByaXZhdGUgb3B0aW9ucz86IElQYXJzZXJPcHRpb25zXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IF8uZGVmYXVsdHMoXHJcbiAgICAgICAgICAgICAgICAgICAgXy5jbG9uZShvcHRpb25zIHx8IHt9KSwgXHJcbiAgICAgICAgICAgICAgICAgICAgUGFyc2VyLmRlZmF1bHRQYXJzZXJPcHRpb25zXHJcbiAgICAgICAgICAgICAgICApOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLm5vZGVGYWN0b3J5ID0gbmV3IE5vZGVGYWN0b3J5KHRoaXMub3B0aW9ucy5sb2MpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnNlRXhjZXB0aW9uID0gbmV3IHV0aWxpdGllcy5FeGNlcHRpb25IYW5kbGVyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0gPSBuZXcgbGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0oY2hhcnMpO1xyXG4gICAgICAgICAgICB0aGlzLmxleEV4Y2VwdGlvbiA9IG5ldyB1dGlsaXRpZXMuRXhjZXB0aW9uSGFuZGxlcigpO1xyXG4gICAgICAgICAgICBjb25zdCBsZXhPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgbG9jOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmVhZGFibGVUb2tlbnNNb2RlOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmxleCA9IG5ldyBsZXhpY2FsLkxleGVyKHRoaXMuY2hhclN0cmVhbSwgdGhpcy5sZXhFeGNlcHRpb24sIGxleE9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBhZGRFeGNlcHRpb24odG9rZW46IGxleGljYWwuSVRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5sZXguaXNFb2YodG9rZW4pID8gXCJlbmQgb2YgZmlsZVwiIDogdG9rZW4udmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMucGFyc2VFeGNlcHRpb24uYWRkRXhjZXB0aW9uKFxyXG4gICAgICAgICAgICAgICAgYFVuZGV4cGVjdGVkIHRva2VuOiAnJHt2YWx1ZX0nYCxcclxuICAgICAgICAgICAgICAgIHRva2VuLmxvYy5zdGFydC5saW5lLFxyXG4gICAgICAgICAgICAgICAgdG9rZW4ubG9jLnN0YXJ0LmNvbHVtblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB0cmltT3B0aW9uYWxTZW1pY29sb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCI7XCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMudG9rZW5Jc0luU2FtZUxpbmUodG9rZW4pICYmICF0aGlzLmxleC5pc0VvZih0b2tlbikpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFeGNlcHRpb24odG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSB0cmFja1Bvc2l0aW9uVW5hcnkodG9rZW46IGxleGljYWwuSVRva2VuKTogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbi5sb2M7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgdHJhY2tQb3NpdGlvbkJ5UG9zKHN0YXJ0UG9zOiBsZXhpY2FsLklUb2tlblBvc2l0aW9uKTogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhdGVzdFRva2VuID0gdGhpcy5sZXgubGF0ZXN0VG9rZW4oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTG9jKHN0YXJ0UG9zLCBsYXRlc3RUb2tlbi5sb2MuZW5kKTtcclxuICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSB0cmFja1Bvc2l0aW9uQnlUb2tlbihzdGFydFRva2VuOiBsZXhpY2FsLklUb2tlbik6IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24ge1xyXG4gICAgICAgICAgICBjb25zdCBsYXRlc3RUb2tlbiA9IHRoaXMubGV4LmxhdGVzdFRva2VuKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUxvYyhzdGFydFRva2VuLmxvYy5zdGFydCwgbGF0ZXN0VG9rZW4ubG9jLmVuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgY3JlYXRlTG9jKHN0YXJ0OiBsZXhpY2FsLklUb2tlblBvc2l0aW9uLCBlbmQ6IGxleGljYWwuSVRva2VuUG9zaXRpb24pOiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhcnQsIGVuZCB9O1xyXG4gICAgICAgIH0gICAgICAgIFxyXG5cclxuICAgICAgICBwcml2YXRlIGV4cGVjdFB1bmN0dWF0aW9uKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgdmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFkZEV4Y2VwdGlvbih0b2tlbik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZXhwZWN0S2V5d29yZCh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc0tleXdvcmRWYWx1ZSh0b2tlbiwgdmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFkZEV4Y2VwdGlvbih0b2tlbik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSB0b2tlbklzSW5TYW1lTGluZSh0b2tlbjogbGV4aWNhbC5JVG9rZW4pOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuLmxvYy5lbmQubGluZSA9PT0gdGhpcy5sZXgubGF0ZXN0VG9rZW4oKS5sb2MuZW5kLmxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2UoKTogSVByb2dyYW0ge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RtdHMgPSB0aGlzLnBhcnNlU291cmNlRWxlbWVudHMoKTtcclxuICAgICAgICAgICAgaWYoIXN0bXRzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlUHJvZ3JhbShzdG10cywgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZVNvdXJjZUVsZW1lbnRzKCk6IElTdGF0ZW1lbnRbXSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0bXRzOiBJU3RhdGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmxleC5oYXNOZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0bXQgPSB0aGlzLnBhcnNlU3RhdGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0bXQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdG10cy5wdXNoKHN0bXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc3RtdHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VTb3VyY2VFbGVtZW50KCk6IElTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNLZXl3b3JkVmFsdWUodG9rZW4sIFwiZnVuY3Rpb25cIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRnVuY3Rpb25EZWNsYXJhdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlU3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc0tleXdvcmQodG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRva2VuLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInZhclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVZhcmlhYmxlU3RhdGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFeHByZXNzaW9uU3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VWYXJpYWJsZVN0YXRlbWVudCgpOiBJU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RLZXl3b3JkKFwidmFyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB2YXJpYWJsZURlY2xhcmF0b3IgPSB0aGlzLnBhcnNlVmFyaWFibGVEZWNsYXJhdG9yKCk7XHJcbiAgICAgICAgICAgIGlmICghdmFyaWFibGVEZWNsYXJhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlRGVjbGFyYXRvcnM6IElWYXJpYWJsZURlY2xhcmF0b3JbXSA9IFt2YXJpYWJsZURlY2xhcmF0b3JdO1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5sZXgubWF0Y2hQdW5jdHVhdGlvbihcIixcIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlRGVjbGFyYXRvciA9IHRoaXMucGFyc2VWYXJpYWJsZURlY2xhcmF0b3IoKTtcclxuICAgICAgICAgICAgICAgIGlmICghdmFyaWFibGVEZWNsYXJhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRvcnMucHVzaCh2YXJpYWJsZURlY2xhcmF0b3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZighdGhpcy50cmltT3B0aW9uYWxTZW1pY29sb24oKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVEZWNsYXJhdGlvblZhcmlhYmxlKHZhcmlhYmxlRGVjbGFyYXRvcnMsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VWYXJpYWJsZURlY2xhcmF0b3IoKTogSVZhcmlhYmxlRGVjbGFyYXRvciB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5sZXguaXNJZGVudGlmaWVyKHRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFeGNlcHRpb24odG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZXhwciA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5tYXRjaFB1bmN0dWF0aW9uKFwiPVwiKSkge1xyXG4gICAgICAgICAgICAgICAgZXhwciA9IHRoaXMucGFyc2VBc3NpZ25tZW50RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFleHByKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVWYXJpYWJsZURlY2xhcmF0b3IodG9rZW4udmFsdWUsIGV4cHIsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4odG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUV4cHJlc3Npb25TdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgaWYoIWV4cHIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoIXRoaXMudHJpbU9wdGlvbmFsU2VtaWNvbG9uKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50RXhwcmVzc2lvbihleHByLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlRnVuY3Rpb25EZWNsYXJhdGlvbigpOiBJRnVuY3Rpb25EZWNsYXJhdGlvbiB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vdCBpbXBsZW1lbnRlZCB5ZXRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlRXhwcmVzc2lvbigpOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUFzc2lnbm1lbnRFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIGlmICghZXhwcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXgubWF0Y2hQdW5jdHVhdGlvbihcIixcIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHJzOiBJRXhwcmVzc2lvbltdID0gW2V4cHJdO1xyXG4gICAgICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLnBhcnNlQXNzaWdubWVudEV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4cHIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBleHBycy5wdXNoKGV4cHIpO1xyXG4gICAgICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5sZXgubWF0Y2hQdW5jdHVhdGlvbihcIixcIikpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25TZXF1ZW5jZShleHBycywgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGFua3MgdG86IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzcwOTg2Ni93aGF0cy1hLXZhbGlkLWxlZnQtaGFuZC1zaWRlLWV4cHJlc3Npb24taW4tamF2YXNjcmlwdC1ncmFtbWFyXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaXNMZWZ0SGFuZEV4cHJlc3Npb25SZXNvbHZpbmdUb1JlZmVyZW5jZShleHByOiBJRXhwcmVzc2lvbik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZXhwci50eXBlID09PSBcIklkZW50aWZpZXJcIiB8fCBleHByLnR5cGUgPT09IFwiTWVtYmVyRXhwcmVzc2lvblwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQXNzaWdubWVudE9wZXJhdG9ycyA9IHtcclxuICAgICAgICAgICAgXCI9XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwifHxcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCIqPVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcIi89XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiJT1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCIrPVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcIi09XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiPDw9XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiPj49XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiPj4+PVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcIiY9XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiXj1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJ8PVwiOiB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VBc3NpZ25tZW50RXhwcmVzc2lvbigpOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhwciA9IHRoaXMucGFyc2VDb25kaXRpb25hbEV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgaWYgKCFleHByKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uKHRva2VuKVxyXG4gICAgICAgICAgICAgICAgJiYgUGFyc2VyLkFzc2lnbm1lbnRPcGVyYXRvcnNbdG9rZW4udmFsdWVdXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFQYXJzZXIuaXNMZWZ0SGFuZEV4cHJlc3Npb25SZXNvbHZpbmdUb1JlZmVyZW5jZShleHByKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VFeGNlcHRpb24uYWRkRXhjZXB0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgSW52YWxpZCBsZWZ0LWhhbmQgc2lkZSBpbiBhc3NpZ25tZW50YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4ubG9jLnN0YXJ0LmxpbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuLmxvYy5zdGFydC5jb2x1bW5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmV4cHIgPSB0aGlzLnBhcnNlQXNzaWdubWVudEV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIGlmICghcmV4cHIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uQXNzaWdubWVudCh0b2tlbi52YWx1ZSwgZXhwciwgcmV4cHIsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBleHByO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlQ29uZGl0aW9uYWxFeHByZXNzaW9uKCk6IElFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLnBhcnNlQmluYXJ5RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICBpZiAoIWV4cHIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCI/XCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnNlcXVlbnRFeHByID0gdGhpcy5wYXJzZUFzc2lnbm1lbnRFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnNlcXVlbnRFeHByKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIjpcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYWx0ZXJuYXRlRXhwciA9IHRoaXMucGFyc2VBc3NpZ25tZW50RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhbHRlcm5hdGVFeHByKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25Db25kaXRpb25hbChleHByLCBhbHRlcm5hdGVFeHByLCBjb25zZXF1ZW50RXhwciwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBCaW5hcnlUb2tlblZhbHVlc19vciA9IDE7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQmluYXJ5VG9rZW5WYWx1ZXNfYW5kID0gMjtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBCaW5hcnlUb2tlblZhbHVlc19pc2xvZ2ljID0gUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2FuZDtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBCaW5hcnlUb2tlblZhbHVlc19ib3IgPSAzO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEJpbmFyeVRva2VuVmFsdWVzX3hvciA9IDQ7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQmluYXJ5VG9rZW5WYWx1ZXNfYmFuZCA9IDU7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQmluYXJ5VG9rZW5WYWx1ZXNfZXEgPSA2O1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEJpbmFyeVRva2VuVmFsdWVzX3JlbCA9IDc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQmluYXJ5VG9rZW5WYWx1ZXNfc2hpZnQgPSA4O1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEJpbmFyeVRva2VuVmFsdWVzX2FkZCA9IDk7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQmluYXJ5VG9rZW5WYWx1ZXNfbXVsdGkgPSAxMDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaXNMb2dpY0JpbmFyeVRva2VuVmFsdWUocmFuazogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiByYW5rIDw9IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19pc2xvZ2ljO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQmluYXJ5VG9rZW5WYWx1ZXMgPSB7XHJcbiAgICAgICAgICAgICd8fCc6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19vcixcclxuICAgICAgICAgICAgJyYmJzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2FuZCxcclxuICAgICAgICAgICAgJ3wnOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfYm9yLFxyXG4gICAgICAgICAgICAnXic6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc194b3IsXHJcbiAgICAgICAgICAgICcmJzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2JhbmQsXHJcbiAgICAgICAgICAgICc9PSc6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19lcSxcclxuICAgICAgICAgICAgJyE9JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2VxLFxyXG4gICAgICAgICAgICAnPT09JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2VxLFxyXG4gICAgICAgICAgICAnIT09JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2VxLFxyXG4gICAgICAgICAgICAnPCc6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19yZWwsXHJcbiAgICAgICAgICAgICc+JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX3JlbCxcclxuICAgICAgICAgICAgJzw9JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX3JlbCxcclxuICAgICAgICAgICAgJz49JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX3JlbCxcclxuICAgICAgICAgICAgJ2luc3RhbmNlb2YnOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfcmVsLFxyXG4gICAgICAgICAgICAnaW4gJzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX3JlbCxcclxuICAgICAgICAgICAgJzw8JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX3NoaWZ0LFxyXG4gICAgICAgICAgICAnPj4nOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfc2hpZnQsXHJcbiAgICAgICAgICAgICc+Pj4nOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfc2hpZnQsXHJcbiAgICAgICAgICAgICcrJzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2FkZCxcclxuICAgICAgICAgICAgJy0nOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfYWRkLFxyXG4gICAgICAgICAgICAnKic6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19tdWx0aSxcclxuICAgICAgICAgICAgJy8nOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfbXVsdGksXHJcbiAgICAgICAgICAgICclJzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX211bHRpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGNyZWF0ZUJpbmFyeUV4cHJlc3Npb24oXHJcbiAgICAgICAgICAgIHJhbms6IG51bWJlcixcclxuICAgICAgICAgICAgb3BlcmF0b3I6IHN0cmluZyxcclxuICAgICAgICAgICAgbGVmdDogSUV4cHJlc3Npb24sXHJcbiAgICAgICAgICAgIHJpZ2h0OiBJRXhwcmVzc2lvblxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBsb2MgPSB0aGlzLm9wdGlvbnMubG9jID8gdGhpcy5jcmVhdGVMb2MobGVmdC5sb2Muc3RhcnQsIHJpZ2h0LmxvYy5lbmQpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBpZiAoUGFyc2VyLmlzTG9naWNCaW5hcnlUb2tlblZhbHVlKHJhbmspKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uTG9naWNhbChvcGVyYXRvciwgbGVmdCwgcmlnaHQsIGxvYyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uQmluYXJ5KG9wZXJhdG9yLCBsZWZ0LCByaWdodCwgbG9jKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlQmluYXJ5RXhwcmVzc2lvbigpOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGxldCBsZXhwciA9IHRoaXMucGFyc2VVbmFyeUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgaWYgKCFsZXhwcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgbGV0IGJpbmFyeVJhbmsgPSBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNbdG9rZW4udmFsdWVdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJpbmFyeVJhbmsgJiYgKHRoaXMubGV4LmlzUHVuY3R1YXRpb24odG9rZW4pIHx8IHRoaXMubGV4LmlzS2V5d29yZCh0b2tlbikpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJleHByID0gdGhpcy5wYXJzZVVuYXJ5RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXhwcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHByczogSUV4cHJlc3Npb25bXSA9IFtsZXhwciwgcmV4cHJdLFxyXG4gICAgICAgICAgICAgICAgICAgIHB1bmNzOiBzdHJpbmdbXSA9IFt0b2tlbi52YWx1ZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmFua3M6IG51bWJlcltdID0gW2JpbmFyeVJhbmtdO1xyXG5cclxuICAgICAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXRlc3RSYW5rID0gUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzW3Rva2VuLnZhbHVlXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFsYXRlc3RSYW5rIHx8ICghdGhpcy5sZXguaXNQdW5jdHVhdGlvbih0b2tlbikgJiYgIXRoaXMubGV4LmlzS2V5d29yZCh0b2tlbikpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV4cHIgPSB0aGlzLnBhcnNlVW5hcnlFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXhwcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdFJhbmsgPSBfLmxhc3QocmFua3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChsYXN0UmFuayAmJiBsYXN0UmFuayA+PSBsYXRlc3RSYW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJleHByID0gZXhwcnMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxleHByID0gZXhwcnMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJpbmFyeUV4cHIgPSB0aGlzLmNyZWF0ZUJpbmFyeUV4cHJlc3Npb24ocmFua3MucG9wKCksIHB1bmNzLnBvcCgpLCBsZXhwciwgcmV4cHIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBycy5wdXNoKGJpbmFyeUV4cHIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFJhbmsgPSBfLmxhc3QocmFua3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmFua3MucHVzaChsYXRlc3RSYW5rKTtcclxuICAgICAgICAgICAgICAgICAgICBwdW5jcy5wdXNoKHRva2VuLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBleHBycy5wdXNoKHJleHByKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXhwciA9IGV4cHJzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHB1bmNzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxleHByID0gdGhpcy5jcmVhdGVCaW5hcnlFeHByZXNzaW9uKHJhbmtzLnBvcCgpLCBwdW5jcy5wb3AoKSwgZXhwcnMucG9wKCksIGxleHByKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGxleHByO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgVW5hcnlUb2tlblZhbHVlc191bmFyeSA9IDE7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgVW5hcnlUb2tlblZhbHVlc191cGRhdGUgPSAyO1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBVbmFyeVRva2VuVmFsdWVzID0ge1xyXG4gICAgICAgICAgICBcIi1cIjogUGFyc2VyLlVuYXJ5VG9rZW5WYWx1ZXNfdW5hcnksXHJcbiAgICAgICAgICAgIFwiK1wiOiBQYXJzZXIuVW5hcnlUb2tlblZhbHVlc191bmFyeSxcclxuICAgICAgICAgICAgXCIhXCI6IFBhcnNlci5VbmFyeVRva2VuVmFsdWVzX3VuYXJ5LFxyXG4gICAgICAgICAgICBcIn5cIjogUGFyc2VyLlVuYXJ5VG9rZW5WYWx1ZXNfdW5hcnksXHJcbiAgICAgICAgICAgIFwidHlwZW9mXCI6IFBhcnNlci5VbmFyeVRva2VuVmFsdWVzX3VuYXJ5LFxyXG4gICAgICAgICAgICBcInZvaWRcIjogUGFyc2VyLlVuYXJ5VG9rZW5WYWx1ZXNfdW5hcnksXHJcbiAgICAgICAgICAgIFwiZGVsZXRlXCI6IFBhcnNlci5VbmFyeVRva2VuVmFsdWVzX3VuYXJ5LFxyXG4gICAgICAgICAgICBcIisrXCI6IFBhcnNlci5VbmFyeVRva2VuVmFsdWVzX3VwZGF0ZSxcclxuICAgICAgICAgICAgXCItLVwiOiBQYXJzZXIuVW5hcnlUb2tlblZhbHVlc191cGRhdGVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZVVuYXJ5RXhwcmVzc2lvbigpOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVuYXJ5UmFuayA9IFBhcnNlci5VbmFyeVRva2VuVmFsdWVzW3Rva2VuLnZhbHVlXTtcclxuICAgICAgICAgICAgaWYgKHVuYXJ5UmFuayAmJiAodGhpcy5sZXguaXNQdW5jdHVhdGlvbih0b2tlbikgfHwgdGhpcy5sZXguaXNLZXl3b3JkKHRva2VuKSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGV4cHIgPSB0aGlzLnBhcnNlUG9zdGZpeEV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIGlmICghZXhwcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh1bmFyeVJhbmsgPT09IFBhcnNlci5VbmFyeVRva2VuVmFsdWVzX3VwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25VcGRhdGUodG9rZW4udmFsdWUsIGV4cHIsIHRydWUsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4odG9rZW4pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uVW5hcnkodG9rZW4udmFsdWUsIHRydWUsIGV4cHIsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4odG9rZW4pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VQb3N0Zml4RXhwcmVzc2lvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlUG9zdGZpeEV4cHJlc3Npb24oKTogSUV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgY29uc3QgZXhwciA9IHRoaXMucGFyc2VMZWZ0SGFuZFNpZGVFeHByZXNzaW9uKHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoIWV4cHIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzUHVuY3R1YXRpb24odG9rZW4pICYmIHRva2VuLmxvYy5lbmQubGluZSA9PT0gdGhpcy5sZXgubGF0ZXN0VG9rZW4oKS5sb2MuZW5kLmxpbmUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0b2tlbi52YWx1ZSA9PT0gXCIrK1wiIHx8IHRva2VuLnZhbHVlID09PSBcIi0tXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uVXBkYXRlKHRva2VuLnZhbHVlLCBleHByLCBmYWxzZSwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbih0b2tlbikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgcGFyc2VJZGVudGlmaWVyKCk6IElJZGVudGlmaWVyIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzSWRlbnRpZmllcih0b2tlbikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUlkZW50aWZpZXIodG9rZW4udmFsdWUsIHRoaXMudHJhY2tQb3NpdGlvblVuYXJ5KHRva2VuKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hZGRFeGNlcHRpb24odG9rZW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlTGVmdEhhbmRTaWRlRXhwcmVzc2lvbihhbGxvd0NhbGxFeHByZXNzaW9uczogYm9vbGVhbik6IElFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgbGV0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBsZXQgcHJpbWFyeUV4cHI7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc0tleXdvcmQoaW5pdGlhbFRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChpbml0aWFsVG9rZW4udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZnVuY3Rpb25cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VGdW5jdGlvbkV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibmV3XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlFeHByID0gdGhpcy5wYXJzZU5ld0V4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcmltYXJ5RXhwciA9IHByaW1hcnlFeHByIHx8IHRoaXMucGFyc2VQcmltYXJ5RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICBpZiAoIXByaW1hcnlFeHByKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGV4cHI6IElOb2RlLCBpc01hdGNoaW5nRXhyZXNzaW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgd2hpbGUgKGlzTWF0Y2hpbmdFeHJlc3Npb24pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubGV4LmlzUHVuY3R1YXRpb24odG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRva2VuLnZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJbXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFleHByKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwiXVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlFeHByID0gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uTWVtYmVyKHByaW1hcnlFeHByLCBleHByLCB0cnVlLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi5cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSB0aGlzLnBhcnNlSWRlbnRpZmllcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5RXhwciA9IHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbk1lbWJlcihwcmltYXJ5RXhwciwgaWRlbnRpZmllciwgZmFsc2UsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiKFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWxsb3dDYWxsRXhwcmVzc2lvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB0aGlzLnBhcnNlQXJndW1lbnRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWFyZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5RXhwciA9IHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbkNhbGwocHJpbWFyeUV4cHIsIGFyZ3MsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTWF0Y2hpbmdFeHJlc3Npb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcHJpbWFyeUV4cHI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VQcmltYXJ5RXhwcmVzc2lvbigpOiBJTm9kZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHRva2VuLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgbGV4aWNhbC5Ub2tlblR5cGUua2V5d29yZDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4udmFsdWUgPT09IFwidGhpc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uVGhpcyh0aGlzLnRyYWNrUG9zaXRpb25VbmFyeSh0b2tlbikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIGxleGljYWwuVG9rZW5UeXBlLmlkZW50aWZpZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlSWRlbnRpZmllcih0b2tlbi52YWx1ZSwgdGhpcy50cmFja1Bvc2l0aW9uVW5hcnkodG9rZW4pKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIGxleGljYWwuVG9rZW5UeXBlLmxpdGVyYWw6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlTGl0ZXJhbCh0b2tlbi52YWx1ZSwgdGhpcy50cmFja1Bvc2l0aW9uVW5hcnkodG9rZW4pKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIGxleGljYWwuVG9rZW5UeXBlLnB1bmN0dWF0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodG9rZW4udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIltcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlQXJyYXlMaXRlcmFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwie1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VPYmplY3RMaXRlcmFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiKFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwciA9IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighZXhwcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGV4Lm1hdGNoUHVuY3R1YXRpb24oXCIpXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLmxvYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByLmxvYyA9IHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4odG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFeGNlcHRpb24odGhpcy5sZXgubmV4dFRva2VuKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRFeGNlcHRpb24odG9rZW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlTmV3RXhwcmVzc2lvbigpOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGxldCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdEtleXdvcmQoXCJuZXdcIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FsbEV4cHIgPSB0aGlzLnBhcnNlTGVmdEhhbmRTaWRlRXhwcmVzc2lvbihmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmICghY2FsbEV4cHIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGFyZ3MsXHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIihcIikpIHtcclxuICAgICAgICAgICAgICAgIGFyZ3MgPSB0aGlzLnBhcnNlQXJndW1lbnRzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFyZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbk5ldyhjYWxsRXhwciwgYXJncyB8fCBbXSwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUFyZ3VtZW50cygpOiBJRXhwcmVzc2lvbltdIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwiKFwiKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgY29uc3QgZXhwcnM6IElFeHByZXNzaW9uW10gPSBbXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCIpXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBleHBycztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLnBhcnNlQXNzaWdubWVudEV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIGlmICghZXhwcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGV4cHJzLnB1c2goZXhwcik7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwiKVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIixcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEV4Y2VwdGlvbih0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZXhwcnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VBcnJheUxpdGVyYWwoKTogSU5vZGUge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCJbXCIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFycmF5RXhwcnM6IElOb2RlW10gPSBbXTtcclxuICAgICAgICAgICAgdGhpcy50cmltQXJyYXlDb21tYXMoYXJyYXlFeHBycyk7XHJcbiAgICAgICAgICAgIHdoaWxlICghdGhpcy5sZXgubWF0Y2hQdW5jdHVhdGlvbihcIl1cIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFzc2lnbkV4cHIgPSB0aGlzLnBhcnNlQXNzaWdubWVudEV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIGlmICghYXNzaWduRXhwcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFycmF5RXhwcnMucHVzaChhc3NpZ25FeHByKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxleC5tYXRjaFB1bmN0dWF0aW9uKFwiLFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpbUFycmF5Q29tbWFzKGFycmF5RXhwcnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uQXJyYXkoYXJyYXlFeHBycywgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbih0b2tlbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB0cmltQXJyYXlDb21tYXMoYXJyYXlFeHByczogSU5vZGVbXSkge1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5sZXgubWF0Y2hQdW5jdHVhdGlvbihcIixcIikpIHtcclxuICAgICAgICAgICAgICAgIGFycmF5RXhwcnMucHVzaChudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlT2JqZWN0TGl0ZXJhbCgpOiBJTm9kZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIntcIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvcGVydGllczogSVByb3BlcnR5W10gPSBbXTtcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwifVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnBhcnNlUHJvcGVydHlBc3NpZ25tZW50KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXByb3BlcnR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKHByb3BlcnR5KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCJ9XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIixcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFeGNlcHRpb24odG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uT2JqZWN0KHByb3BlcnRpZXMsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4odG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZVByb3BlcnR5QXNzaWdubWVudCgpOiBJUHJvcGVydHkge1xyXG4gICAgICAgICAgICBsZXQga2luZDogc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgbGV0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNJZGVudGlmaWVyVmFsdWUoaW5pdGlhbFRva2VuLCBcImdldFwiKSkge1xyXG4gICAgICAgICAgICAgICAga2luZCA9IFwiZ2V0XCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZXguaXNJZGVudGlmaWVyVmFsdWUoaW5pdGlhbFRva2VuLCBcInNldFwiKSkge1xyXG4gICAgICAgICAgICAgICAga2luZCA9IFwic2V0XCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBraW5kID0gXCJpbml0XCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHRoaXMucGFyc2VQcm9wZXJ0eU5hbWUoKTtcclxuICAgICAgICAgICAgaWYgKCFwcm9wZXJ0eU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHRva2VuID0gdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwiOlwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhwciA9IHRoaXMucGFyc2VBc3NpZ25tZW50RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFleHByKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZU9iamVjdFByb3BlcnR5KHByb3BlcnR5TmFtZSwgZXhwciwga2luZCwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIihcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhcmdzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZXguaXNJZGVudGlmaWVyKHRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh0b2tlbi52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwiKVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIilcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEV4Y2VwdGlvbih0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIntcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmdW5jdGlvbkJvZHkgPSB0aGlzLnBhcnNlRnVuY3Rpb25Cb2R5KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCJ9XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZnVuY3Rpb25FeHByID0gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uRnVuY3Rpb24obnVsbCwgYXJncywgZnVuY3Rpb25Cb2R5LCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKHRva2VuKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVPYmplY3RQcm9wZXJ0eShwcm9wZXJ0eU5hbWUsIGZ1bmN0aW9uRXhwciwga2luZCwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV4Y2VwdGlvbih0b2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZVByb3BlcnR5TmFtZSgpOiBJTGl0ZXJhbCB8IElJZGVudGlmaWVyIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzTGl0ZXJhbCh0b2tlbikpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0b2tlbi5zdWJUeXBlID09PSBsZXhpY2FsLkxpdGVyYWxTdWJUeXBlLnN0cmluZ1xyXG4gICAgICAgICAgICAgICAgICAgIHx8IHRva2VuLnN1YlR5cGUgPT09IGxleGljYWwuTGl0ZXJhbFN1YlR5cGUubnVtYmVyXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVMaXRlcmFsKHRva2VuLnZhbHVlLCB0aGlzLnRyYWNrUG9zaXRpb25VbmFyeSh0b2tlbikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlSWRlbnRpZmllcih0b2tlbi52YWx1ZSwgdGhpcy50cmFja1Bvc2l0aW9uVW5hcnkodG9rZW4pKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZXguaXNJZGVudGlmaWVyKHRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlSWRlbnRpZmllcih0b2tlbi52YWx1ZSwgdGhpcy50cmFja1Bvc2l0aW9uVW5hcnkodG9rZW4pKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV4Y2VwdGlvbih0b2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUZ1bmN0aW9uRXhwcmVzc2lvbigpOiBJRnVuY3Rpb25FeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm90IGltcGxlbWVudGVkIHlldFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUZ1bmN0aW9uQm9keSgpOiBJQmxvY2tTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub3QgaW1wbGVtZW50ZWQgeWV0XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxufSIsIm1vZHVsZSB0cmwuZnJvbnRlbmQudXRpbGl0aWVzIHtcclxuICAgIFxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGFzc2VydChjb25kOiBhbnksIG1zZz86IHN0cmluZykge1xyXG4gICAgICAgIGlmKCFjb25kKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXNzZXJ0aW9uIGZhaWw6ICR7bXNnfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
