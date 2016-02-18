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
                            var nextToken = this.beginStates();
                            if (this.isComment(nextToken)) {
                                if (this.options.includeCommentsAsNormalTokens) {
                                    this.comments.push(nextToken);
                                } else {
                                    do {
                                        this.comments.push(nextToken);
                                        nextToken = this.beginStates();
                                    } while (this.isComment(nextToken));
                                }
                            }
                            return nextToken;
                        };
                        Lexer.prototype.beginStates = function () {
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
                                token.loc = this.createPos();
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
                            readableTokensMode: true,
                            includeCommentsAsNormalTokens: true
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
                            var lexOptions = {
                                loc: true,
                                readableTokensMode: false,
                                includeCommentsAsNormalTokens: false
                            };
                            this.lex = new frontend.lexical.Lexer(this.charStream, this.lexException, lexOptions);
                            this.inLoopMutex = [0];
                            this.inSwitchMutex = [0];
                            this.inFunctionMutex = 0;
                        }
                        Parser.prototype.addException = function (token) {
                            var value = this.lex.isEof(token) ? 'end of file' : token.value;
                            this.parseException.addException('Undexpected token: \'' + value + '\'', token.loc.start.line, token.loc.start.column);
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
                            if (!stmts)
                                return;
                            return this.nodeFactory.createProgram(stmts, this.trackPositionByToken(initialToken));
                        };
                        Parser.prototype.parseSourceElements = function () {
                            var stmts = [];
                            while (this.lex.hasNext()) {
                                var stmt = this.parseStatement();
                                if (!stmt)
                                    return;
                                stmts.push(stmt);
                            }
                            return stmts;
                        };
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
                                case 'try':
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
                                var stmt = this.parseStatement();
                                if (!stmt)
                                    return;
                                stmts.push(stmt);
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
                            this.beginIteration();
                            var initialToken = this.lex.lookAheadNextToken();
                            var testExpr = this.parseKeywordLparExpressionRpar('while');
                            if (!testExpr)
                                return;
                            var stmt = this.parseStatement();
                            this.finishIteration();
                            if (stmt) {
                                return this.nodeFactory.createStatementWhile(testExpr, stmt, this.trackPositionByToken(initialToken));
                            }
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
                            }
                            var isForIn = false, test = null;
                            token = this.lex.lookAheadNextToken();
                            if (this.lex.isKeywordValue(token, 'in')) {
                                this.lex.nextToken();
                                isForIn = true;
                                if (!initExpr && !declarations || (initExpr && !Parser.isLeftHandExpressionResolvingToReference(initExpr) || declarations && declarations.length !== 1)) {
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
                        Parser.prototype.parseForStatement = function () {
                            return this.parseIteration(this.innerParseForStatement);
                        };
                        Parser.prototype.parseKeywordNodeSemicolon = function (keyword, parseFunc, nodeFactoryFunc) {
                            var initialToken = this.lex.lookAheadNextToken();
                            if (!this.expectKeyword(keyword))
                                return;
                            var token = this.lex.lookAheadNextToken();
                            var item = null;
                            if (this.lex.isIdentifier(token) && this.tokenIsInSameLine(token)) {
                                item = parseFunc.call(this);
                                if (!item)
                                    return;
                            }
                            if (!this.trimOptionalSemicolon())
                                return;
                            return nodeFactoryFunc.call(this.nodeFactory, item, this.trackPositionByToken(initialToken));
                        };
                        Parser.prototype.parseContinueStatement = function () {
                            var stmt = this.parseKeywordNodeSemicolon('continue', this.parseIdentifier, this.nodeFactory.createStatementContinue);
                            if (this.isOnIteration()) {
                                return stmt;
                            }
                            this.parseException.addException('Illegal continue statement', stmt.loc.start.line, stmt.loc.start.column);
                        };
                        Parser.prototype.parseBreakStatement = function () {
                            var stmt = this.parseKeywordNodeSemicolon('break', this.parseIdentifier, this.nodeFactory.createStatementBreak);
                            if (this.isOnIteration() || this.isOnSwitch()) {
                                return stmt;
                            }
                            this.parseException.addException('Illegal break statement', stmt.loc.start.line, stmt.loc.start.column);
                        };
                        Parser.prototype.parseReturnStatement = function () {
                            var stmt = this.parseKeywordNodeSemicolon('return', this.parseExpression, this.nodeFactory.createStatementReturn);
                            if (this.isOnFunction()) {
                                return stmt;
                            }
                            this.parseException.addException('Illegal return statement', stmt.loc.start.line, stmt.loc.start.column);
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
                                var stmt = this.parseStatement();
                                if (!stmt)
                                    return;
                                stmts.push(stmt);
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
                            if (this.lex.isKeywordValue(token, 'case')) {
                                if (!this.parseCasesClause(cases, false))
                                    return;
                            }
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
                        Parser.prototype.parseExpressionStatement = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            var expr = this.parseExpression();
                            if (!(expr && this.trimOptionalSemicolon()))
                                return;
                            return this.nodeFactory.createStatementExpression(expr, this.trackPositionByToken(initialToken));
                        };
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
                            if (!lexpr)
                                return;
                            var token = this.lex.lookAheadNextToken();
                            var binaryRank = Parser.BinaryTokenValues[token.value];
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
                                    var latestRank = Parser.BinaryTokenValues[token.value];
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
                        Parser.prototype.parseUnaryExpression = function () {
                            var token = this.lex.lookAheadNextToken();
                            var unaryRank = Parser.UnaryTokenValues[token.value];
                            if (unaryRank && (this.lex.isPunctuation(token) || this.lex.isKeyword(token))) {
                                this.lex.nextToken();
                                var expr = this.parsePostfixExpression();
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
                            if (this.lex.isPunctuation(token) && token.loc.end.line === this.lex.latestToken().loc.end.line) {
                                if (token.value === '++' || token.value === '--') {
                                    this.lex.nextToken();
                                    return this.nodeFactory.createExpressionUpdate(token.value, expr, false, this.trackPositionByToken(initialToken));
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
                                    return this.parseFunction(false);
                                case 'new':
                                    primaryExpr = this.parseNewExpression();
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
    }
    return trl;
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL2xleGljYWwvSUxleGVyLnRzIiwiZnJvbnRlbmQvdXRpbGl0aWVzL0NoYXJQb2ludHMudHMiLCJmcm9udGVuZC9sZXhpY2FsL1Rva2VuRGVmaW5pdGlvbnMudHMiLCJmcm9udGVuZC9sZXhpY2FsL0lkZW50aWZ5ZXJzLnRzIiwiZnJvbnRlbmQvbGV4aWNhbC9MZXhlci50cyIsInNyYy90cm93ZWwuanMiLCJmcm9udGVuZC91dGlsaXRpZXMvRXhjZXB0aW9uLnRzIiwiZnJvbnRlbmQvbGV4aWNhbC9DaGFyYWN0ZXJTdHJlYW0udHMiLCJmcm9udGVuZC9hcGkudHMiLCJmcm9udGVuZC9zeW50YXgvTm9kZUZhY3RvcnkudHMiLCJmcm9udGVuZC91dGlsaXRpZXMvQXNzZXJ0aW9uLnRzIiwiZnJvbnRlbmQvc3ludGF4L1BhcnNlci50cyJdLCJuYW1lcyI6WyJ0cmwiLCJ0cmwuZnJvbnRlbmQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbCIsInRybC5mcm9udGVuZC5sZXhpY2FsLlRva2VuVHlwZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxpdGVyYWxTdWJUeXBlIiwidHJsLmZyb250ZW5kLnV0aWxpdGllcyIsInRybC5mcm9udGVuZC51dGlsaXRpZXMuQ2hhclBvaW50cyIsInRybC5mcm9udGVuZC51dGlsaXRpZXMuQ2hhclBvaW50cy5jcmVhdGVTdHJpbmdGcm9tQ2hhclBvaW50R2VuZXJhdG9yIiwidHJsLmZyb250ZW5kLnV0aWxpdGllcy5DaGFyUG9pbnRzLmdldERpZ2l0RnJvbUNoYXJQb2ludCIsInRybC5mcm9udGVuZC51dGlsaXRpZXMuQ2hhclBvaW50cy5jb2RlUG9pbnRBdCIsInRybC5mcm9udGVuZC51dGlsaXRpZXMuQ2hhclBvaW50cy5mcm9tQ29kZVBvaW50IiwidHJsLmZyb250ZW5kLmxleGljYWwuVG9rZW5EZWZpbml0aW9ucyIsInRybC5mcm9udGVuZC5sZXhpY2FsLklkZW50aWZ5ZXJzIiwidHJsLmZyb250ZW5kLmxleGljYWwuSWRlbnRpZnllcnMuaXNIZXhEaWdpdCIsInRybC5mcm9udGVuZC5sZXhpY2FsLklkZW50aWZ5ZXJzLmlzRGlnaXQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5JZGVudGlmeWVycy5pc0tleXdvcmQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5JZGVudGlmeWVycy5pc0xpbmVUZXJtaW5hdG9yIiwidHJsLmZyb250ZW5kLmxleGljYWwuSWRlbnRpZnllcnMuaXNJZGVudGlmaWVyU3RhcnQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5JZGVudGlmeWVycy5pc0lkZW50aWZpZXJQYXJ0IiwidHJsLmZyb250ZW5kLmxleGljYWwuSWRlbnRpZnllcnMuaXNTaW1wbGVVbmljb2RlQ29udGludWUiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5JZGVudGlmeWVycy5pc0NvbXBsZXhVbmljb2RlQ29udGludWUiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5JZGVudGlmeWVycy5pc1NpbXBsZVVuaWNvZGVTdGFydCIsInRybC5mcm9udGVuZC5sZXhpY2FsLklkZW50aWZ5ZXJzLmlzQ29tcGxleFVuaWNvZGVTdGFydCIsInRybC5mcm9udGVuZC5sZXhpY2FsLklkZW50aWZ5ZXJzLmlzUHVuY3R1YXRpb25TdGFydCIsInRybC5mcm9udGVuZC5sZXhpY2FsLnRvUmVhZGFibGVUb2tlblR5cGUiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC50b1JlYWRhYmxlTGl0ZXJhbFN1YlR5cGUiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlciIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmNvbnN0cnVjdG9yIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuaW5pdGlhdGVDaGFyZWN0ZXJMb29rdXBPbmNlIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuaXNFcnJvciIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmlzRW9mIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuaXNDb21tZW50IiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuaXNMaXRlcmFsIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuaXNQdW5jdHVhdGlvbiIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmlzS2V5d29yZCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmlzSWRlbnRpZmllciIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmlzUHVuY3R1YXRpb25WYWx1ZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmlzS2V5d29yZFZhbHVlIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuaXNJZGVudGlmaWVyVmFsdWUiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5tYXRjaFB1bmN0dWF0aW9uIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIubWF0Y2hLZXl3b3JkIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIubmV4dFRva2VuIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuYmVnaW5TdGF0ZXMiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5sYXRlc3RUb2tlbiIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmxvb2tBaGVhZE5leHRUb2tlbiIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmhhc05leHQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5nZXRDb21tZW50cyIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmdldEN1cnJlbnRDdXJzb3JQb3MiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zdGF0ZUluaXQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zdGF0ZUlkZW50aWZpZXIiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5nZW5TdGF0ZVN0cmluZyIsImNoYXJTdHJlYW0iLCJnZXROZXh0Q2hhciIsImNoYXJHZW4iLCJmcm9udGVuZCIsInV0aWxpdGllcyIsIkNoYXJQb2ludHMiLCJjcmVhdGVTdHJpbmdGcm9tQ2hhclBvaW50R2VuZXJhdG9yIiwiY2hhciIsInN0cmluZ1Rlcm1pbmF0b3JDaGFyIiwiUE5DIiwiYmFja3NsYXNoIiwiYiIsImFkZENoYXJQb2ludCIsImYiLCJuIiwiciIsInQiLCJ2IiwieCIsImhhbmRsZVNjYW5IZXhEaWdpdHMiLCJTdGF0ZXMiLCJlcnJvciIsInUiLCJsZXhpY2FsIiwiSWRlbnRpZnllcnMiLCJpc0xpbmVUZXJtaW5hdG9yIiwiaGFuZGxlTmV3TGluZSIsInVuZGVmaW5lZCIsImV4Y2VwdGlvbkhhbmRsZXIiLCJhZGRFeGNlcHRpb24iLCJsaW5lbm8iLCJnZXRDdXJzb3IiLCJ0b2tlbiIsImNyZWF0ZVRva2VuIiwiVG9rZW5UeXBlIiwibGl0ZXJhbCIsImdldFN0cmluZyIsIkxpdGVyYWxTdWJUeXBlIiwic3RyaW5nIiwiZmluaXNoIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc3RhdGVOdW1iZXIiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zdGF0ZURvdE9yTnVtYmVyIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc3RhdGVEaXZPckNvbW1lbnQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zdGF0ZVB1bmN0dWF0aW9uU2luZ2xlIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc3RhdGVXaGl0ZVNwYWNlIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc3RhdGVMaW5lVGVybWluYXRvciIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnN0YXRlU2luZ2xlQ29tbWVudCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnN0YXRlTXVsdGlDb21tZW50IiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc2NhblVuaWNvZGVFc2NhcGVTZXF1ZW5jZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnNjYW5FeHBvbmVuc2lhbEFuZENyZWF0ZU51bWJlciIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnNjYW5EaWdpdHMiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zY2FuRGVjaW1hbCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnNjYW5FeHBvbmVudGlhbCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnNjYW5IZXhEaWdpdHMiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zY2FuSGV4RGlnaXRzVGltZXMiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5nZW5QdW5jdHVhdGlvblNjYW5uZXIiLCJmd2RDdXJzb3IiLCJpIiwibGFzdExlbiIsInB1bmNzTG9va3VwIiwiYndkQ3Vyc29yIiwiY3JlYXRlVG9rZW5Gcm9tUG9zIiwicHVuY3R1YXRpb24iLCJzdGFydFBvcyIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmNyZWF0ZVBvcyIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmNyZWF0ZVRva2VuRnJvbVBvcyIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmNyZWF0ZVRva2VuIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuZ2VuSW50ZWdlckZyb21BcnJheSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmNyZWF0ZU51bWJlciIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmhhbmRsZVNjYW5IZXhEaWdpdHMiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5oYW5kbGVOZXdMaW5lIiwidHJsLmZyb250ZW5kLnV0aWxpdGllcy5FeGNlcHRpb25IYW5kbGVyIiwidHJsLmZyb250ZW5kLnV0aWxpdGllcy5FeGNlcHRpb25IYW5kbGVyLmNvbnN0cnVjdG9yIiwidHJsLmZyb250ZW5kLnV0aWxpdGllcy5FeGNlcHRpb25IYW5kbGVyLmFkZEV4Y2VwdGlvbiIsInRybC5mcm9udGVuZC51dGlsaXRpZXMuRXhjZXB0aW9uSGFuZGxlci5oYXNFeGNlcHRpb25zIiwidHJsLmZyb250ZW5kLnV0aWxpdGllcy5FeGNlcHRpb25IYW5kbGVyLmNsZWFyIiwidHJsLmZyb250ZW5kLnV0aWxpdGllcy5FeGNlcHRpb25IYW5kbGVyLmdldEV4Y2VwdGlvbnMiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0iLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0uY29uc3RydWN0b3IiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0uZ2V0TmV4dENoYXIiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0uZ2V0Q2hhciIsInRybC5mcm9udGVuZC5sZXhpY2FsLkNoYXJhY3RlclN0cmVhbS5nZXRDdXJzb3IiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0uYndkQ3Vyc29yIiwidHJsLmZyb250ZW5kLmxleGljYWwuQ2hhcmFjdGVyU3RyZWFtLmZ3ZEN1cnNvciIsInRybC5mcm9udGVuZC5sZXhpY2FsLkNoYXJhY3RlclN0cmVhbS5id2RDdXJzb3JSYW5nZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkNoYXJhY3RlclN0cmVhbS50b2tlbml6ZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkNoYXJhY3RlclN0cmVhbS5tYXRjaCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkNoYXJhY3RlclN0cmVhbS5tYXRjaENvbXBsZXgiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0uaXNFb2YiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0uaGFzTmV4dCIsInRybC5mcm9udGVuZC5hcGkiLCJ0cmwuZnJvbnRlbmQuYXBpLnRva2VuaXplIiwidHJsLmZyb250ZW5kLnN5bnRheCIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNvbnN0cnVjdG9yIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVOb2RlIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVQcm9ncmFtIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRFbXB0eSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50QmxvY2siLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudEV4cHJlc3Npb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudElmIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRCcmVhayIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50Q29udGludWUiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudFdpdGgiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudFN3aXRjaCIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50UmV0dXJuIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRMYWJlbGVkIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRUaHJvdyIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50VHJ5IiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRXaGlsZSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50RG9XaGlsZSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50Rm9yIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRGb3JJbiIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50RGVidWdnZXIiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZURlY2xhcmF0aW9uRnVuY3Rpb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZURlY2xhcmF0aW9uVmFyaWFibGUiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVZhcmlhYmxlRGVjbGFyYXRvciIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvblRoaXMiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25BcnJheSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbk9iamVjdCIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlT2JqZWN0UHJvcGVydHkiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25GdW5jdGlvbiIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvblNlcXVlbmNlIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uVW5hcnkiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25CaW5hcnkiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25Bc3NpZ25tZW50IiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uVXBkYXRlIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uTG9naWNhbCIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbkNvbmRpdGlvbmFsIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uTmV3IiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uQ2FsbCIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbk1lbWJlciIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3dpdGNoQ2FzZSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlQ2F0Y2hDbGF1c2UiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUlkZW50aWZpZXIiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUxpdGVyYWwiLCJ0cmwuZnJvbnRlbmQudXRpbGl0aWVzLmFzc2VydCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuY29uc3RydWN0b3IiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5hZGRFeGNlcHRpb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci50cmltT3B0aW9uYWxTZW1pY29sb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5iZWdpbkl0ZXJhdGlvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmZpbmlzaEl0ZXJhdGlvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLm5ld0l0ZXJhdGlvblNjb3BlIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucmVzdG9yZUl0ZXJhdGlvblNjb3BlIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuaXNPbkl0ZXJhdGlvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmJlZ2luU3dpdGNoIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuZmluaXNoU3dpdGNoIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIubmV3U3dpdGNoU2NvcGUiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5yZXN0b3JlU3dpdGNoU2NvcGUiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5pc09uU3dpdGNoIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuYmVnaW5GdW5jdGlvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmZpbmlzaEZ1bmN0aW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuaXNPbkZ1bmN0aW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIudHJhY2tQb3NpdGlvblVuYXJ5IiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIudHJhY2tQb3NpdGlvbkJ5UG9zIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIudHJhY2tQb3NpdGlvbkJ5VG9rZW4iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5jcmVhdGVMb2MiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5leHBlY3RQdW5jdHVhdGlvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmV4cGVjdEtleXdvcmQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci50b2tlbklzSW5TYW1lTGluZSIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VTb3VyY2VFbGVtZW50cyIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlU3RhdGVtZW50IiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VCbG9ja1N0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlRW1wdHlTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUlmU3RhdGVtZW50IiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VJdGVyYXRpb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5pbm5lclBhcnNlV2hpbGVTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVdoaWxlU3RhdGVtZW50IiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuaW5uZXJQYXJzZURvV2hpbGVTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZURvV2hpbGVTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5pbm5lclBhcnNlRm9yU3RhdGVtZW50IiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VGb3JTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUtleXdvcmROb2RlU2VtaWNvbG9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VDb250aW51ZVN0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlQnJlYWtTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVJldHVyblN0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlV2l0aFN0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlQ2FzZUNsYXVzZVN0YXRlbWVudHMiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUNhc2VzQ2xhdXNlIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuaW5uZXJQYXJzZVN3aXRjaFN0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlU3dpdGNoU3RhdGVtZW50IiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VUaHJvd1N0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlVHJ5U3RhdGVtZW50IiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VEZWJ1Z2dlclN0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlTGFiZWxlZFN0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlS2V5d29yZExwYXJFeHByZXNzaW9uUnBhciIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlVmFyaWFibGVTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVZhcmlhYmxlRGVjbGFyYXRvcnMiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVZhcmlhYmxlRGVjbGFyYXRvciIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlRXhwcmVzc2lvblN0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlRnVuY3Rpb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUV4cHJlc3Npb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5pc0xlZnRIYW5kRXhwcmVzc2lvblJlc29sdmluZ1RvUmVmZXJlbmNlIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VBc3NpZ25tZW50RXhwcmVzc2lvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlQ29uZGl0aW9uYWxFeHByZXNzaW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuaXNMb2dpY0JpbmFyeVRva2VuVmFsdWUiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5jcmVhdGVCaW5hcnlFeHByZXNzaW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VCaW5hcnlFeHByZXNzaW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VVbmFyeUV4cHJlc3Npb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVBvc3RmaXhFeHByZXNzaW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VJZGVudGlmaWVyIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VMZWZ0SGFuZFNpZGVFeHByZXNzaW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VQcmltYXJ5RXhwcmVzc2lvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlTmV3RXhwcmVzc2lvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlQXJndW1lbnRzIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VBcnJheUxpdGVyYWwiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci50cmltQXJyYXlDb21tYXMiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZU9iamVjdExpdGVyYWwiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVByb3BlcnR5QXNzaWdubWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlUHJvcGVydHlOYW1lIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VGdW5jdGlvbkJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7UUFBQSxJQUFPQSxHQUFQLEM7UUFBQSxDQUFBLFVBQU9BLEdBQVAsRUFBVTtBQUFBLFlBQUNBLElBQUFBLFFBQUFBLENBQUQ7QUFBQSxZQUFDQSxDQUFBQSxVQUFBQSxRQUFBQSxFQUFRQTtBQUFBQSxnQkFBQ0MsSUFBQUEsT0FBQUEsQ0FBREQ7QUFBQUEsZ0JBQUNDLENBQUFBLFVBQUFBLE9BQUFBLEVBQVFBO0FBQUFBLG9CQUV4QkMsQ0FBQUEsVUFBWUEsU0FBWkEsRUFBcUJBO0FBQUFBLHdCQUNqQkMsU0FBQUEsQ0FBQUEsU0FBQUEsQ0FBQUEsU0FBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsU0FBQUEsQ0FEaUJEO0FBQUFBLHdCQUVqQkMsU0FBQUEsQ0FBQUEsU0FBQUEsQ0FBQUEsWUFBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsWUFBQUEsQ0FGaUJEO0FBQUFBLHdCQUdqQkMsU0FBQUEsQ0FBQUEsU0FBQUEsQ0FBQUEsU0FBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsU0FBQUEsQ0FIaUJEO0FBQUFBLHdCQUlqQkMsU0FBQUEsQ0FBQUEsU0FBQUEsQ0FBQUEsYUFBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsYUFBQUEsQ0FKaUJEO0FBQUFBLHdCQUtqQkMsU0FBQUEsQ0FBQUEsU0FBQUEsQ0FBQUEsU0FBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsU0FBQUEsQ0FMaUJEO0FBQUFBLHdCQU1qQkMsU0FBQUEsQ0FBQUEsU0FBQUEsQ0FBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsS0FBQUEsQ0FOaUJEO0FBQUFBLHdCQU9qQkMsU0FBQUEsQ0FBQUEsU0FBQUEsQ0FBQUEsT0FBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsT0FBQUEsQ0FQaUJEO0FBQUFBLHFCQUFyQkEsQ0FBWUEsT0FBQUEsQ0FBQUEsU0FBQUEsSUFBQUEsQ0FBQUEsT0FBQUEsQ0FBQUEsU0FBQUEsR0FBU0EsRUFBVEEsQ0FBWkEsR0FGd0JEO0FBQUFBLG9CQUV4QkMsSUFBWUEsU0FBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsU0FBWkEsQ0FGd0JEO0FBQUFBLG9CQVl4QkMsQ0FBQUEsVUFBWUEsY0FBWkEsRUFBMEJBO0FBQUFBLHdCQUN0QkUsY0FBQUEsQ0FBQUEsY0FBQUEsQ0FBQUEsUUFBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsUUFBQUEsQ0FEc0JGO0FBQUFBLHdCQUV0QkUsY0FBQUEsQ0FBQUEsY0FBQUEsQ0FBQUEsUUFBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsUUFBQUEsQ0FGc0JGO0FBQUFBLHdCQUd0QkUsY0FBQUEsQ0FBQUEsY0FBQUEsQ0FBQUEsTUFBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsTUFBQUEsQ0FIc0JGO0FBQUFBLHdCQUl0QkUsY0FBQUEsQ0FBQUEsY0FBQUEsQ0FBQUEsU0FBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsU0FBQUEsQ0FKc0JGO0FBQUFBLHFCQUExQkEsQ0FBWUEsT0FBQUEsQ0FBQUEsY0FBQUEsSUFBQUEsQ0FBQUEsT0FBQUEsQ0FBQUEsY0FBQUEsR0FBY0EsRUFBZEEsQ0FBWkEsR0Fad0JEO0FBQUFBLG9CQVl4QkMsSUFBWUEsY0FBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsY0FBWkEsQ0Fad0JEO0FBQUFBLG9CQWlCdkJDLENBakJ1QkQ7QUFBQUEsaUJBQVJBLENBQUFBLE9BQUFBLEdBQUFBLFFBQUFBLENBQUFBLE9BQUFBLElBQUFBLENBQUFBLFFBQUFBLENBQUFBLE9BQUFBLEdBQU9BLEVBQVBBLENBQUFBLEdBQUREO0FBQUFBLGFBQVJBLENBQUFBLFFBQUFBLEdBQUFBLEdBQUFBLENBQUFBLFFBQUFBLElBQUFBLENBQUFBLEdBQUFBLENBQUFBLFFBQUFBLEdBQVFBLEVBQVJBLENBQUFBLEdBQUQ7QUFBQSxTQUFWLENBQU9BLEdBQUEsSUFBQSxDQUFBQSxHQUFBLEdBQUcsRUFBSCxDQUFQLEc7UUNFQTtBQUFBLFlBQU9BLEdBQVAsQztRQUFBLENBQUEsVUFBT0EsR0FBUCxFQUFVO0FBQUEsWUFBQ0EsSUFBQUEsUUFBQUEsQ0FBRDtBQUFBLFlBQUNBLENBQUFBLFVBQUFBLFFBQUFBLEVBQVFBO0FBQUFBLGdCQUFDQyxJQUFBQSxTQUFBQSxDQUFERDtBQUFBQSxnQkFBQ0MsQ0FBQUEsVUFBQUEsU0FBQUEsRUFBVUE7QUFBQUEsb0JBTzdCSSxJQUFBQSxVQUFBQSxHQUFBQSxZQUFBQTtBQUFBQSx3QkFBQUMsU0FBQUEsVUFBQUEsR0FBQUE7QUFBQUEseUJBQUFEO0FBQUFBLHdCQUNRQyxVQUFBQSxDQUFBQSxrQ0FBQUEsR0FBUEEsWUFBQUE7QUFBQUEsNEJBQ0NDLElBQUlBLFVBQUFBLEdBQXVCQSxFQUEzQkEsQ0FEREQ7QUFBQUEsNEJBRUNDLE9BQU9BO0FBQUFBLGdDQUNOQSxZQUFBQSxFQUFjQSxVQUFDQSxJQUFEQSxFQUFhQTtBQUFBQSxvQ0FDMUJBLFVBQUFBLENBQVdBLElBQVhBLENBQWdCQSxVQUFBQSxDQUFXQSxhQUFYQSxDQUF5QkEsSUFBekJBLENBQWhCQSxFQUQwQkE7QUFBQUEsaUNBRHJCQTtBQUFBQSxnQ0FJTkEsU0FBQUEsRUFBV0EsWUFBQUE7QUFBQUEsb0NBQ1ZBLE9BQU9BLFVBQUFBLENBQVdBLElBQVhBLENBQWdCQSxFQUFoQkEsQ0FBUEEsQ0FEVUE7QUFBQUEsaUNBSkxBO0FBQUFBLDZCQUFQQSxDQUZERDtBQUFBQSx5QkFBT0EsQ0FEUkQ7QUFBQUEsd0JBY1FDLFVBQUFBLENBQUFBLHFCQUFBQSxHQUFQQSxVQUE2QkEsQ0FBN0JBLEVBQXNDQTtBQUFBQSw0QkFDckNFLE9BQU9BLENBQUFBLEdBQUlBLFVBQUFBLENBQVdBLGNBQXRCQSxDQURxQ0Y7QUFBQUEseUJBQS9CQSxDQWRSRDtBQUFBQSx3QkFrQlFDLFVBQUFBLENBQUFBLFdBQUFBLEdBQVBBLFVBQW1CQSxHQUFuQkEsRUFBZ0NBLEdBQWhDQSxFQUEyQ0E7QUFBQUEsNEJBQzFDRyxPQUFhQSxHQUFBQSxDQUFLQSxXQUFMQSxDQUFpQkEsR0FBakJBLENBQWJBLENBRDBDSDtBQUFBQSx5QkFBcENBLENBbEJSRDtBQUFBQSx3QkFzQlFDLFVBQUFBLENBQUFBLGFBQUFBLEdBQVBBLFVBQXFCQSxLQUFyQkEsRUFBa0NBO0FBQUFBLDRCQUNqQ0ksT0FBYUEsTUFBQUEsQ0FBUUEsYUFBUkEsQ0FBc0JBLEtBQXRCQSxDQUFiQSxDQURpQ0o7QUFBQUEseUJBQTNCQSxDQXRCUkQ7QUFBQUEsd0JBYWdCQyxVQUFBQSxDQUFBQSxjQUFBQSxHQUFpQkEsSUFBSUEsVUFBSkEsQ0FBZUEsQ0FBZkEsQ0FBakJBLENBYmhCRDtBQUFBQSx3QkF5QkFDLE9BQUFBLFVBQUFBLENBekJBRDtBQUFBQSxxQkFBQUEsRUFBQUEsQ0FQNkJKO0FBQUFBLG9CQU9oQkksU0FBQUEsQ0FBQUEsVUFBQUEsR0FBVUEsVUFBVkEsQ0FQZ0JKO0FBQUFBLGlCQUFWQSxDQUFBQSxTQUFBQSxHQUFBQSxRQUFBQSxDQUFBQSxTQUFBQSxJQUFBQSxDQUFBQSxRQUFBQSxDQUFBQSxTQUFBQSxHQUFTQSxFQUFUQSxDQUFBQSxHQUFERDtBQUFBQSxhQUFSQSxDQUFBQSxRQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxRQUFBQSxJQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxRQUFBQSxHQUFRQSxFQUFSQSxDQUFBQSxHQUFEO0FBQUEsU0FBVixDQUFPQSxHQUFBLElBQUEsQ0FBQUEsR0FBQSxHQUFHLEVBQUgsQ0FBUCxHO1FDREEsSUFBT0EsR0FBUCxDO1FBQUEsQ0FBQSxVQUFPQSxHQUFQLEVBQVU7QUFBQSxZQUFDQSxJQUFBQSxRQUFBQSxDQUFEO0FBQUEsWUFBQ0EsQ0FBQUEsVUFBQUEsUUFBQUEsRUFBUUE7QUFBQUEsZ0JBQUNDLElBQUFBLE9BQUFBLENBQUREO0FBQUFBLGdCQUFDQyxDQUFBQSxVQUFBQSxPQUFBQSxFQUFRQTtBQUFBQSxvQkFDM0JDLElBQU1BLENBQUFBLEdBQUlBLElBQVZBLENBRDJCRDtBQUFBQSxvQkFHM0JDLElBQUFBLGdCQUFBQSxHQUFBQSxZQUFBQTtBQUFBQSx3QkFBQVMsU0FBQUEsZ0JBQUFBLEdBQUFBO0FBQUFBLHlCQUFBVDtBQUFBQSx3QkFFUVMsZ0JBQUFBLENBQUFBLEVBQUFBLEdBQUtBO0FBQUFBLDRCQUNYQSxHQUFRQSxDQURHQTtBQUFBQSw0QkFFWEEsSUFBUUEsQ0FGR0E7QUFBQUEsNEJBR1hBLElBQVFBLENBSEdBO0FBQUFBLDRCQUlYQSxJQUFRQSxDQUpHQTtBQUFBQSw0QkFLWEEsS0FBUUEsQ0FMR0E7QUFBQUEsNEJBTVhBLE9BQVFBLENBTkdBO0FBQUFBLHlCQUFMQSxDQUZSVDtBQUFBQSx3QkFXUVMsZ0JBQUFBLENBQUFBLEVBQUFBLEdBQUtBO0FBQUFBLDRCQUNYQSxJQUFRQSxDQURHQTtBQUFBQSw0QkFFWEEsSUFBUUEsQ0FGR0E7QUFBQUEsNEJBR1hBLE1BQVFBLENBSEdBO0FBQUFBLDRCQUlYQSxLQUFPQSxDQUpJQTtBQUFBQSx5QkFBTEEsQ0FYUlQ7QUFBQUEsd0JBcUJRUztBQUFBQTtBQUFBQSx3QkFBQUEsZ0JBQUFBLENBQUFBLEVBQUFBLEdBQUtBO0FBQUFBLDRCQUNYQSxLQUFBQSxFQUFPQSxDQURJQTtBQUFBQSw0QkFFWEEsRUFBQUEsRUFBSUEsQ0FGT0E7QUFBQUEsNEJBR1hBLFVBQUFBLEVBQVlBLENBSERBO0FBQUFBLDRCQUlYQSxNQUFBQSxFQUFRQSxDQUpHQTtBQUFBQSw0QkFLWEEsSUFBQUEsRUFBTUEsQ0FMS0E7QUFBQUEsNEJBTVhBLElBQUFBLEVBQU1BLENBTktBO0FBQUFBLDRCQU9YQSxHQUFBQSxFQUFLQSxDQVBNQTtBQUFBQSw0QkFRWEEsR0FBQUEsRUFBS0EsQ0FSTUE7QUFBQUEsNEJBU1hBLEtBQUFBLEVBQU9BLENBVElBO0FBQUFBLDRCQVVYQSxPQUFBQSxFQUFTQSxDQVZFQTtBQUFBQSw0QkFXWEEsTUFBQUEsRUFBUUEsQ0FYR0E7QUFBQUEsNEJBWVhBLElBQUFBLEVBQU1BLENBWktBO0FBQUFBLDRCQWFYQSxRQUFBQSxFQUFVQSxDQWJDQTtBQUFBQSw0QkFjWEEsR0FBQUEsRUFBS0EsQ0FkTUE7QUFBQUEsNEJBZVhBLE1BQUFBLEVBQVFBLENBZkdBO0FBQUFBLDRCQWdCWEEsS0FBQUEsRUFBT0EsQ0FoQklBO0FBQUFBLDRCQWlCWEEsUUFBQUEsRUFBVUEsQ0FqQkNBO0FBQUFBLDRCQWtCWEEsUUFBQUEsRUFBVUEsQ0FsQkNBO0FBQUFBLDRCQW1CWEEsSUFBQUEsRUFBTUEsQ0FuQktBO0FBQUFBLDRCQW9CWEEsSUFBQUEsRUFBTUEsQ0FwQktBO0FBQUFBLDRCQXFCWEEsT0FBQUEsRUFBU0EsQ0FyQkVBO0FBQUFBLDRCQXNCWEEsRUFBQUEsRUFBSUEsQ0F0Qk9BO0FBQUFBLDRCQXVCWEEsS0FBQUEsRUFBT0EsQ0F2QklBO0FBQUFBLDRCQXdCWEEsTUFBQUEsRUFBUUEsQ0F4QkdBO0FBQUFBLDRCQXlCWEEsRUFBQUEsRUFBSUEsQ0F6Qk9BO0FBQUFBLDRCQTBCWEEsR0FBQUEsRUFBS0EsQ0ExQk1BO0FBQUFBLDRCQTRCWEEsS0FBQUEsRUFBT0EsQ0E1QklBO0FBQUFBLDRCQTZCWEEsSUFBQUEsRUFBTUEsQ0E3QktBO0FBQUFBLDRCQThCWEEsT0FBQUEsRUFBU0EsQ0E5QkVBO0FBQUFBLDRCQStCWEEsS0FBQUEsRUFBT0EsQ0EvQklBO0FBQUFBLDRCQWdDWEEsS0FBQUEsRUFBT0EsQ0FoQ0lBO0FBQUFBLDRCQWlDWEEsTUFBQUEsRUFBUUEsQ0FqQ0dBO0FBQUFBLDRCQWtDWEEsTUFBQUEsRUFBUUEsQ0FsQ0dBO0FBQUFBLDRCQW9DWEEsVUFBQUEsRUFBWUEsQ0FwQ0RBO0FBQUFBLDRCQXFDWEEsR0FBQUEsRUFBS0EsQ0FyQ01BO0FBQUFBLDRCQXNDWEEsT0FBQUEsRUFBU0EsQ0F0Q0VBO0FBQUFBLDRCQXVDWEEsTUFBQUEsRUFBUUEsQ0F2Q0dBO0FBQUFBLDRCQXdDWEEsU0FBQUEsRUFBV0EsQ0F4Q0FBO0FBQUFBLDRCQXlDWEEsT0FBQUEsRUFBU0EsQ0F6Q0VBO0FBQUFBLDRCQTBDWEEsU0FBQUEsRUFBV0EsQ0ExQ0FBO0FBQUFBLDRCQTJDWEEsTUFBQUEsRUFBUUEsQ0EzQ0dBO0FBQUFBLDRCQTRDWEEsS0FBQUEsRUFBT0EsQ0E1Q0lBO0FBQUFBLHlCQUFMQSxDQXJCUlQ7QUFBQUEsd0JBb0VRUyxnQkFBQUEsQ0FBQUEsR0FBQUEsR0FBTUE7QUFBQUEsNEJBQ1pBLElBQUFBLEVBQU1BLENBRE1BO0FBQUFBLDRCQUVaQSxJQUFBQSxFQUFNQSxDQUZNQTtBQUFBQSw0QkFHWkEsS0FBQUEsRUFBT0EsQ0FIS0E7QUFBQUEseUJBQU5BLENBcEVSVDtBQUFBQSx3QkEwRVFTLGdCQUFBQSxDQUFBQSxVQUFBQSxHQUFhQTtBQUFBQSw0QkFDbkJBLE1BQUFBLEVBQVFBLEdBRFdBO0FBQUFBLDRCQUVuQkEsTUFBQUEsRUFBUUEsR0FGV0E7QUFBQUEsNEJBR25CQSxRQUFBQSxFQUFVQSxFQUhTQTtBQUFBQSw0QkFJbkJBLFFBQUFBLEVBQVVBLEVBSlNBO0FBQUFBLDRCQUtuQkEsUUFBQUEsRUFBVUEsRUFMU0E7QUFBQUEsNEJBTW5CQSxRQUFBQSxFQUFVQSxFQU5TQTtBQUFBQSw0QkFPbkJBLEdBQUFBLEVBQUtBLEVBUGNBO0FBQUFBLDRCQVFuQkEsU0FBQUEsRUFBV0EsRUFSUUE7QUFBQUEsNEJBU25CQSxLQUFBQSxFQUFPQSxFQVRZQTtBQUFBQSw0QkFVbkJBLElBQUFBLEVBQU1BLEVBVmFBO0FBQUFBLDRCQVduQkEsSUFBQUEsRUFBTUEsRUFYYUE7QUFBQUEsNEJBWW5CQSxJQUFBQSxFQUFNQSxFQVphQTtBQUFBQSw0QkFhbkJBLEtBQUFBLEVBQU9BLEVBYllBO0FBQUFBLDRCQWNuQkEsT0FBQUEsRUFBU0EsRUFkVUE7QUFBQUEsNEJBZW5CQSxTQUFBQSxFQUFXQSxFQWZRQTtBQUFBQSw0QkFnQm5CQSxRQUFBQSxFQUFVQSxHQWhCU0E7QUFBQUEsNEJBaUJuQkEsS0FBQUEsRUFBT0EsRUFqQllBO0FBQUFBLDRCQWtCbkJBLElBQUFBLEVBQU1BLEVBbEJhQTtBQUFBQSw0QkFtQm5CQSxLQUFBQSxFQUFPQSxHQW5CWUE7QUFBQUEsNEJBb0JuQkEsS0FBQUEsRUFBT0EsRUFwQllBO0FBQUFBLDRCQXFCbkJBLEtBQUFBLEVBQU9BLEVBckJZQTtBQUFBQSw0QkFzQm5CQSxNQUFBQSxFQUFRQSxFQXRCV0E7QUFBQUEsNEJBdUJuQkEsUUFBQUEsRUFBVUEsRUF2QlNBO0FBQUFBLDRCQXdCbkJBLEtBQUFBLEVBQU9BLEVBeEJZQTtBQUFBQSw0QkF5Qm5CQSxTQUFBQSxFQUFXQSxFQXpCUUE7QUFBQUEsNEJBMEJuQkEsTUFBQUEsRUFBUUEsRUExQldBO0FBQUFBLDRCQTJCbkJBLEdBQUFBLEVBQUtBLEdBM0JjQTtBQUFBQSw0QkE0Qm5CQSxJQUFBQSxFQUFNQSxFQTVCYUE7QUFBQUEsNEJBNkJuQkEsVUFBQUEsRUFBWUEsRUE3Qk9BO0FBQUFBLDRCQThCbkJBLEtBQUFBLEVBQU9BLEVBOUJZQTtBQUFBQSw0QkErQm5CQSxJQUFBQSxFQUFNQSxFQS9CYUE7QUFBQUEsNEJBaUNuQkEsQ0FBQUEsRUFBR0EsRUFqQ2dCQTtBQUFBQSw0QkFrQ25CQSxDQUFBQSxFQUFHQSxHQWxDZ0JBO0FBQUFBLDRCQW1DbkJBLENBQUFBLEVBQUdBLEdBbkNnQkE7QUFBQUEsNEJBb0NuQkEsQ0FBQUEsRUFBR0EsR0FwQ2dCQTtBQUFBQSw0QkFxQ25CQSxDQUFBQSxFQUFHQSxHQXJDZ0JBO0FBQUFBLDRCQXNDbkJBLENBQUFBLEVBQUdBLEdBdENnQkE7QUFBQUEsNEJBdUNuQkEsQ0FBQUEsRUFBR0EsR0F2Q2dCQTtBQUFBQSw0QkF3Q25CQSxDQUFBQSxFQUFHQSxHQXhDZ0JBO0FBQUFBLDRCQTBDbkJBLEVBQUFBLEVBQUlBLEVBMUNlQTtBQUFBQSw0QkEyQ1ZBLEVBQUFBLEVBQUlBLEVBM0NNQTtBQUFBQSx5QkFBYkEsQ0ExRVJUO0FBQUFBLHdCQXlIUVMsZ0JBQUFBLENBQUFBLDBCQUFBQSxHQUE2QkEsR0FBN0JBLENBekhSVDtBQUFBQSx3QkEySFFTLGdCQUFBQSxDQUFBQSx1QkFBQUEsR0FBMEJBO0FBQUFBLDRCQUFFQSxNQUFRQSxlQUFWQTtBQUFBQSw0QkFBd0JBLE1BQVFBLGNBQWhDQTtBQUFBQSw0QkFBNkNBLElBQUlBLFlBQWpEQTtBQUFBQSw0QkFBNERBLElBQUlBLFlBQWhFQTtBQUFBQSw0QkFDaENBLElBQUlBLENBRDRCQTtBQUFBQSw0QkFDekJBLElBQUlBLENBRHFCQTtBQUFBQSw0QkFDbEJBLElBQUlBLENBRGNBO0FBQUFBLDRCQUNYQSxJQUFJQSxDQURPQTtBQUFBQSw0QkFDSkEsSUFBSUEsQ0FEQUE7QUFBQUEsNEJBQ0dBLElBQUlBLENBRFBBO0FBQUFBLDRCQUNVQSxJQUFJQSxDQURkQTtBQUFBQSw0QkFDaUJBLElBQUlBLENBRHJCQTtBQUFBQSw0QkFDd0JBLElBQUlBLENBRDVCQTtBQUFBQSw0QkFDK0JBLElBQUlBLENBRG5DQTtBQUFBQSw0QkFDc0NBLElBQUlBLENBRDFDQTtBQUFBQSw0QkFDNkNBLElBQUlBLENBRGpEQTtBQUFBQSw0QkFDb0RBLElBQUlBLENBRHhEQTtBQUFBQSw0QkFDMkRBLElBQUlBLENBRC9EQTtBQUFBQSw0QkFDa0VBLElBQUlBLENBRHRFQTtBQUFBQSw0QkFDeUVBLElBQUlBLENBRDdFQTtBQUFBQSw0QkFDZ0ZBLElBQUlBLENBRHBGQTtBQUFBQSw0QkFDdUZBLElBQUlBLENBRDNGQTtBQUFBQSw0QkFDOEZBLElBQUlBLENBRGxHQTtBQUFBQSw0QkFDcUdBLElBQUlBLENBRHpHQTtBQUFBQSw0QkFDNEdBLElBQUlBLENBRGhIQTtBQUFBQSw0QkFDbUhBLElBQUlBLENBRHZIQTtBQUFBQSw0QkFDMEhBLElBQUlBLENBRDlIQTtBQUFBQSw0QkFDaUlBLElBQUlBLENBRHJJQTtBQUFBQSw0QkFDd0lBLElBQUlBLENBRDVJQTtBQUFBQSw0QkFDK0lBLElBQUlBLENBRG5KQTtBQUFBQSw0QkFDc0pBLElBQUlBLENBRDFKQTtBQUFBQSw0QkFDNkpBLElBQUlBLENBRGpLQTtBQUFBQSw0QkFDb0tBLElBQUlBLENBRHhLQTtBQUFBQSw0QkFDMktBLElBQUlBLENBRC9LQTtBQUFBQSw0QkFDa0xBLElBQUlBLENBRHRMQTtBQUFBQSw0QkFDeUxBLElBQUlBLENBRDdMQTtBQUFBQSw0QkFDZ01BLElBQUlBLENBRHBNQTtBQUFBQSw0QkFDdU1BLElBQUlBLENBRDNNQTtBQUFBQSw0QkFDOE1BLElBQUlBLENBRGxOQTtBQUFBQSw0QkFDcU5BLElBQUlBLENBRHpOQTtBQUFBQSw0QkFDNE5BLElBQUlBLENBRGhPQTtBQUFBQSw0QkFDbU9BLElBQUlBLENBRHZPQTtBQUFBQSw0QkFDME9BLElBQUlBLENBRDlPQTtBQUFBQSw0QkFDaVBBLElBQUlBLENBRHJQQTtBQUFBQSw0QkFDd1BBLEtBQUtBLENBRDdQQTtBQUFBQSw0QkFDZ1FBLEtBQUtBLENBRHJRQTtBQUFBQSw0QkFDd1FBLEtBQUtBLENBRDdRQTtBQUFBQSw0QkFDZ1JBLEtBQUtBLENBRHJSQTtBQUFBQSw0QkFDd1JBLEtBQUtBLENBRDdSQTtBQUFBQSw0QkFDZ1NBLEtBQUtBLENBRHJTQTtBQUFBQSw0QkFDd1NBLEtBQUtBLENBRDdTQTtBQUFBQSw0QkFDZ1RBLEtBQUtBLENBRHJUQTtBQUFBQSw0QkFDd1RBLEtBQUtBLENBRDdUQTtBQUFBQSw0QkFDZ1VBLEtBQUtBLENBRHJVQTtBQUFBQSw0QkFDd1VBLEtBQUtBLENBRDdVQTtBQUFBQSw0QkFDZ1ZBLEtBQUtBLENBRHJWQTtBQUFBQSw0QkFDd1ZBLEtBQUtBLENBRDdWQTtBQUFBQSw0QkFDZ1dBLEtBQUtBLENBRHJXQTtBQUFBQSw0QkFDd1dBLEtBQUtBLENBRDdXQTtBQUFBQSw0QkFDZ1hBLEtBQUtBLENBRHJYQTtBQUFBQSw0QkFDd1hBLEtBQUtBLENBRDdYQTtBQUFBQSw0QkFDZ1lBLEtBQUtBLENBRHJZQTtBQUFBQSw0QkFDd1lBLEtBQUtBLENBRDdZQTtBQUFBQSw0QkFDZ1pBLEtBQUtBLENBRHJaQTtBQUFBQSw0QkFDd1pBLEtBQUtBLENBRDdaQTtBQUFBQSw0QkFDZ2FBLEtBQUtBLENBRHJhQTtBQUFBQSw0QkFDd2FBLEtBQUtBLENBRDdhQTtBQUFBQSx5QkFBMUJBLENBM0hSVDtBQUFBQSx3QkE4SFFTLGdCQUFBQSxDQUFBQSx5QkFBQUEsR0FBNEJBLHF1S0FBNUJBLENBOUhSVDtBQUFBQSx3QkFnSVFTLGdCQUFBQSxDQUFBQSxvQkFBQUEsR0FBdUJBO0FBQUFBLDRCQUFFQSxJQUFJQSxZQUFOQTtBQUFBQSw0QkFBaUJBLElBQUlBLFlBQXJCQTtBQUFBQSw0QkFBZ0NBLElBQUlBLFlBQXBDQTtBQUFBQSw0QkFBK0NBLElBQUlBLENBQW5EQTtBQUFBQSw0QkFBc0RBLElBQUlBLENBQTFEQTtBQUFBQSw0QkFBNkRBLElBQUlBLENBQWpFQTtBQUFBQSw0QkFBb0VBLElBQUlBLENBQXhFQTtBQUFBQSw0QkFBMkVBLElBQUlBLENBQS9FQTtBQUFBQSw0QkFBa0ZBLElBQUlBLENBQXRGQTtBQUFBQSw0QkFBeUZBLElBQUlBLENBQTdGQTtBQUFBQSw0QkFBZ0dBLElBQUlBLENBQXBHQTtBQUFBQSw0QkFBdUdBLElBQUlBLENBQTNHQTtBQUFBQSw0QkFBOEdBLElBQUlBLENBQWxIQTtBQUFBQSw0QkFBcUhBLElBQUlBLENBQXpIQTtBQUFBQSw0QkFBNEhBLElBQUlBLENBQWhJQTtBQUFBQSw0QkFBbUlBLElBQUlBLENBQXZJQTtBQUFBQSw0QkFBMElBLElBQUlBLENBQTlJQTtBQUFBQSw0QkFBaUpBLElBQUlBLENBQXJKQTtBQUFBQSw0QkFBd0pBLElBQUlBLENBQTVKQTtBQUFBQSw0QkFBK0pBLElBQUlBLENBQW5LQTtBQUFBQSw0QkFBc0tBLElBQUlBLENBQTFLQTtBQUFBQSw0QkFBNktBLElBQUlBLENBQWpMQTtBQUFBQSw0QkFBb0xBLElBQUlBLENBQXhMQTtBQUFBQSw0QkFBMkxBLElBQUlBLENBQS9MQTtBQUFBQSw0QkFBa01BLElBQUlBLENBQXRNQTtBQUFBQSw0QkFBeU1BLElBQUlBLENBQTdNQTtBQUFBQSw0QkFBZ05BLElBQUlBLENBQXBOQTtBQUFBQSw0QkFBdU5BLElBQUlBLENBQTNOQTtBQUFBQSw0QkFBOE5BLElBQUlBLENBQWxPQTtBQUFBQSw0QkFBcU9BLElBQUlBLENBQXpPQTtBQUFBQSw0QkFBNE9BLElBQUlBLENBQWhQQTtBQUFBQSw0QkFBbVBBLElBQUlBLENBQXZQQTtBQUFBQSw0QkFBMFBBLEtBQUtBLENBQS9QQTtBQUFBQSw0QkFBa1FBLEtBQUtBLENBQXZRQTtBQUFBQSw0QkFBMFFBLEtBQUtBLENBQS9RQTtBQUFBQSw0QkFBa1JBLEtBQUtBLENBQXZSQTtBQUFBQSw0QkFBMFJBLEtBQUtBLENBQS9SQTtBQUFBQSw0QkFBa1NBLEtBQUtBLENBQXZTQTtBQUFBQSw0QkFBMFNBLEtBQUtBLENBQS9TQTtBQUFBQSw0QkFBa1RBLEtBQUtBLENBQXZUQTtBQUFBQSw0QkFBMFRBLEtBQUtBLENBQS9UQTtBQUFBQSw0QkFBa1VBLEtBQUtBLENBQXZVQTtBQUFBQSw0QkFBMFVBLEtBQUtBLENBQS9VQTtBQUFBQSw0QkFBa1ZBLEtBQUtBLENBQXZWQTtBQUFBQSw0QkFBMFZBLEtBQUtBLENBQS9WQTtBQUFBQSw0QkFBa1dBLEtBQUtBLENBQXZXQTtBQUFBQSw0QkFBMFdBLEtBQUtBLENBQS9XQTtBQUFBQSw0QkFBa1hBLEtBQUtBLENBQXZYQTtBQUFBQSw0QkFBMFhBLEtBQUtBLENBQS9YQTtBQUFBQSw0QkFBa1lBLEtBQUtBLENBQXZZQTtBQUFBQSw0QkFBMFlBLEtBQUtBLENBQS9ZQTtB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QUFBLGlCQUFQQSxDQUFBQSxNQUFBQSxHQUFBQSxRQUFBQSxDQUFBQSxNQUFBQSxJQUFBQSxDQUFBQSxRQUFBQSxDQUFBQSxNQUFBQSxHQUFNQSxFQUFOQSxDQUFBQSxHQUFERDtBQUFBQSxhQUFSQSxDQUFBQSxRQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxRQUFBQSxJQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxRQUFBQSxHQUFRQSxFQUFSQSxDQUFBQSxHQUFEO0FBQUEsU0FBVixDQUFPQSxHQUFBLElBQUEsQ0FBQUEsR0FBQSxHQUFHLEVBQUgsQ0FBUCxHIiwiZmlsZSI6InNyYy90cm93ZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUgdHJsLmZyb250ZW5kLmxleGljYWwge1xyXG5cdFxyXG4gICAgZXhwb3J0IGVudW0gVG9rZW5UeXBlIHtcclxuICAgICAgICBrZXl3b3JkID0gMSxcclxuICAgICAgICBpZGVudGlmaWVyLFxyXG4gICAgICAgIGxpdGVyYWwsXHJcbiAgICAgICAgcHVuY3R1YXRpb24sXHJcbiAgICAgICAgY29tbWVudCxcclxuICAgICAgICBlb2YsXHJcbiAgICAgICAgZXJyb3JcclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgIGV4cG9ydCBlbnVtIExpdGVyYWxTdWJUeXBlIHtcclxuICAgICAgICBzdHJpbmcgPSAxLFxyXG4gICAgICAgIG51bWJlcixcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIGJvb2xlYW5cclxuICAgIH07XHJcbiAgICBcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVRva2VuUG9zaXRpb24gIHtcclxuICAgICAgICBsaW5lOiBudW1iZXI7XHJcbiAgICAgICAgY29sdW1uOiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJVG9rZW5Tb3VyY2VMb2NhdGlvbiB7XHJcbiAgICAgICAgc291cmNlPzogc3RyaW5nO1xyXG4gICAgICAgIHN0YXJ0OiBJVG9rZW5Qb3NpdGlvbjtcclxuICAgICAgICBlbmQ6IElUb2tlblBvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElUb2tlbiB7XHJcbiAgICAgICAgdHlwZTogc3RyaW5nIHwgVG9rZW5UeXBlLFxyXG4gICAgICAgIHZhbHVlOiBhbnksXHJcbiAgICAgICAgc3ViVHlwZT86IHN0cmluZyB8IExpdGVyYWxTdWJUeXBlLFxyXG4gICAgICAgIGxvYz86IElUb2tlblNvdXJjZUxvY2F0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJTGV4ZXJPcHRpb25zIHtcclxuICAgICAgICBsb2M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlYWRhYmxlVG9rZW5zTW9kZT86IGJvb2xlYW47XHJcbiAgICAgICAgaW5jbHVkZUNvbW1lbnRzQXNOb3JtYWxUb2tlbnM/OiBib29sZWFuO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUxleGVyIHtcclxuICAgICAgICAvLyBnZXQgbmV4dCB0b2tlblxyXG4gICAgICAgIG5leHRUb2tlbigpOiBJVG9rZW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgbmV4dCB0b2tlblxyXG4gICAgICAgIGhhc05leHQoKTogYm9vbGVhbjtcclxuICAgICAgICBcclxuICAgICAgICAvLyByZXR1cm5zIHRoZSBsYXN0IHBhcnNlZCB0b2tlblxyXG4gICAgICAgIGxhdGVzdFRva2VuKCk6IElUb2tlbjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBhY3RzIGxpa2UgbG9va2luZyBmb3J3YXJkIGJ5IHJldHVybmluZyB0aGUgbmV4dCB0b2tlbi5cclxuICAgICAgICAvLyBuZXh0VG9rZW4oKSwgYW5kIGhhc1Rva2VuKCkgZG9lcyBub3QgZWZmZWN0ZWRcclxuICAgICAgICBsb29rQWhlYWROZXh0VG9rZW4oKTogSVRva2VuOyAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGFyZ3VtZW50IGlzIHR5cGUgb2YgZXJyb3IgdHlwZVxyXG4gICAgICAgIGlzRXJyb3IodG9rZW46IElUb2tlbik6IGJvb2xlYW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGFyZ3VtZW50IGlzIHR5cGUgb2YgZW5kIG9mIGZpbGUgdHlwZVxyXG4gICAgICAgIGlzRW9mKHRva2VuOiBJVG9rZW4pOiBib29sZWFuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBhcmd1bWVudCBpcyB0eXBlIG9mIGNvbW1lbnQgdHlwZVxyXG4gICAgICAgIGlzQ29tbWVudCh0b2tlbjogSVRva2VuKTogYm9vbGVhbjsgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBhcmd1bWVudCBpcyB0eXBlIG9mIGxpdGVyYW4gdHlwZVxyXG4gICAgICAgIGlzTGl0ZXJhbCh0b2tlbjogSVRva2VuKTogYm9vbGVhbjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgYXJndW1lbnQgaXMgdHlwZSBvZiBwdW5jdHVhdGlvbiB0eXBlXHJcbiAgICAgICAgaXNQdW5jdHVhdGlvbih0b2tlbjogSVRva2VuKTogYm9vbGVhbjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgYXJndW1lbnQgaXMgdHlwZSBvZiBrZXl3b3JkIHR5cGVcclxuICAgICAgICBpc0tleXdvcmQodG9rZW46IElUb2tlbik6IGJvb2xlYW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGFyZ3VtZW50IGlzIHR5cGUgb2YgaWRlbnRpZmllciB0eXBlXHJcbiAgICAgICAgaXNJZGVudGlmaWVyKHRva2VuOiBJVG9rZW4pOiBib29sZWFuO1xyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgYXJndW1lbnQgaXMgdHlwZSBvZiBwdW5jdHVhdGlvbiB0eXBlXHJcbiAgICAgICAgLy8gYW5kIGlzIGVxdWFsIHdpdGggdGhlIHNwZWNpZmljIHZhbHVlXHJcbiAgICAgICAgaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuOiBJVG9rZW4sIHZhbHVlOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBhcmd1bWVudCBpcyB0eXBlIG9mIGtleXdvcmQgdHlwZVxyXG4gICAgICAgIC8vIGFuZCBpcyBlcXVhbCB3aXRoIHRoZSBzcGVjaWZpYyB2YWx1ZVxyXG4gICAgICAgIGlzS2V5d29yZFZhbHVlKHRva2VuOiBJVG9rZW4sIHZhbHVlOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBhcmd1bWVudCBpcyB0eXBlIG9mIGlkZW50aWZpZXIgdHlwZVxyXG4gICAgICAgIC8vIGFuZCBpcyBlcXVhbCB3aXRoIHRoZSBzcGVjaWZpYyB2YWx1ZVxyXG4gICAgICAgIGlzSWRlbnRpZmllclZhbHVlKHRva2VuOiBJVG9rZW4sIHZhbHVlOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnN1bWUgdGhlIG5leHQgdG9rZW4gaWYgaXRzIHR5cGUgaXMgcHVuY3R1YXRpb25cclxuICAgICAgICAvLyBhbmQgaXMgZXF1YWwgd2l0aCB0aGUgc3BlY2lmaWMgdmFsdWVcclxuICAgICAgICBtYXRjaFB1bmN0dWF0aW9uKHZhbHVlOiBzdHJpbmcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnN1bWUgdGhlIG5leHQgdG9rZW4gaWYgaXRzIHR5cGUgaXMga2V5d29yZFxyXG4gICAgICAgIC8vIGFuZCBpcyBlcXVhbCB3aXRoIHRoZSBzcGVjaWZpYyB2YWx1ZVxyXG4gICAgICAgIG1hdGNoS2V5d29yZCh2YWx1ZTogc3RyaW5nKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyByZXR1cm5zIGFsbCB0aGUgY29tbWVudHMgdGhhdCBoYXZlIGJlZW4gXHJcbiAgICAgICAgLy8gY29sbGVjdGVkIHNpbmNlIHRoZSBjdXJyZW50IGV4ZWN1dGlvbiBcclxuICAgICAgICBnZXRDb21tZW50cygpOiBJVG9rZW5bXTtcclxuICAgICAgICBcclxuICAgICAgICAvLyByZXR1cm5zIHRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIGN1cnNvciBpcyB0aGUgc291cmNlIHN0cmVhbVxyXG4gICAgICAgIGdldEN1cnJlbnRDdXJzb3JQb3MoKTogSVRva2VuUG9zaXRpb247XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90c0RlZmluaXRpb25zL3RzZC5kLnRzXCIgLz5cclxuXHJcbm1vZHVsZSB0cmwuZnJvbnRlbmQudXRpbGl0aWVzIHtcclxuXHRcclxuXHRleHBvcnQgaW50ZXJmYWNlIElTdHJpbmdGcm9tQ2hhclBvaW50IHtcclxuXHRcdGFkZENoYXJQb2ludChjaGFyOiBudW1iZXIpO1xyXG5cdFx0Z2V0U3RyaW5nKCk6IHN0cmluZztcclxuXHR9XHJcblx0XHJcblx0ZXhwb3J0IGNsYXNzIENoYXJQb2ludHMge1xyXG5cdFx0c3RhdGljIGNyZWF0ZVN0cmluZ0Zyb21DaGFyUG9pbnRHZW5lcmF0b3IoKTogSVN0cmluZ0Zyb21DaGFyUG9pbnQge1xyXG5cdFx0XHRsZXQgY2hhckJ1ZmZlcjogc3RyaW5nW10gPSBbXTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRhZGRDaGFyUG9pbnQ6IChjaGFyOiBudW1iZXIpID0+IHtcclxuXHRcdFx0XHRcdGNoYXJCdWZmZXIucHVzaChDaGFyUG9pbnRzLmZyb21Db2RlUG9pbnQoY2hhcikpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Z2V0U3RyaW5nOiAoKTogc3RyaW5nID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBjaGFyQnVmZmVyLmpvaW4oJycpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHJpdmF0ZSBzdGF0aWMgWkVST19DSEFSX0NPREUgPSBcIjBcIi5jaGFyQ29kZUF0KDApO1xyXG5cdFx0c3RhdGljIGdldERpZ2l0RnJvbUNoYXJQb2ludChjOiBudW1iZXIpOiBudW1iZXIge1xyXG5cdFx0XHRyZXR1cm4gYyAtIENoYXJQb2ludHMuWkVST19DSEFSX0NPREU7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHN0YXRpYyBjb2RlUG9pbnRBdChzdHI6IHN0cmluZywgcG9zOiBudW1iZXIpOiBudW1iZXIge1xyXG5cdFx0XHRyZXR1cm4gKDxhbnk+c3RyKS5jb2RlUG9pbnRBdChwb3MpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRzdGF0aWMgZnJvbUNvZGVQb2ludChwb2ludDogbnVtYmVyKTogc3RyaW5nIHtcclxuXHRcdFx0cmV0dXJuICg8YW55PlN0cmluZykuZnJvbUNvZGVQb2ludChwb2ludCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG59IiwiXHJcbm1vZHVsZSB0cmwuZnJvbnRlbmQubGV4aWNhbCB7XHJcblx0Y29uc3QgdCA9IHRydWU7XHJcblx0XHJcblx0ZXhwb3J0IGNsYXNzIFRva2VuRGVmaW5pdGlvbnMge1xyXG5cdFxyXG5cdFx0c3RhdGljIFdTID0ge1xyXG5cdFx0XHQweDAwMDk6IHQsXHJcblx0XHRcdDB4MDAwQjogdCxcclxuXHRcdFx0MHgwMDBDOiB0LFxyXG5cdFx0XHQweDAwMjA6IHQsXHJcblx0XHRcdDB4MDBBMDogdCxcclxuXHRcdFx0MHhGRUZGOiB0XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRzdGF0aWMgTFQgPSB7XHJcblx0XHRcdDB4MDAwQTogdCxcclxuXHRcdFx0MHgwMDBEOiB0LCAvL2NyXHJcblx0XHRcdDB4MjAyODogdCxcclxuXHRcdFx0MHgyMDI6IHRcclxuXHRcdH07XHJcblxyXG4vLyAweDIwMEM6IHQsIC8vendualxyXG4vLyAweDIwMEQ6IHQsIC8vendqXHJcblx0XHRcdFx0XHJcblx0XHRzdGF0aWMgS1cgPSB7XHJcblx0XHRcdGJyZWFrOiB0LFxyXG5cdFx0XHRkbzogdCxcclxuXHRcdFx0aW5zdGFuY2VvZjogdCxcclxuXHRcdFx0dHlwZW9mOiB0LFxyXG5cdFx0XHRjYXNlOiB0LFxyXG5cdFx0XHRlbHNlOiB0LFxyXG5cdFx0XHRuZXc6IHQsXHJcblx0XHRcdHZhcjogdCxcclxuXHRcdFx0Y2F0Y2g6IHQsXHJcblx0XHRcdGZpbmFsbHk6IHQsXHJcblx0XHRcdHJldHVybjogdCxcclxuXHRcdFx0dm9pZDogdCxcclxuXHRcdFx0Y29udGludWU6IHQsXHJcblx0XHRcdGZvcjogdCxcclxuXHRcdFx0c3dpdGNoOiB0LFxyXG5cdFx0XHR3aGlsZTogdCxcclxuXHRcdFx0ZGVidWdnZXI6IHQsXHJcblx0XHRcdGZ1bmN0aW9uOiB0LFxyXG5cdFx0XHR0aGlzOiB0LFxyXG5cdFx0XHR3aXRoOiB0LFxyXG5cdFx0XHRkZWZhdWx0OiB0LFxyXG5cdFx0XHRpZjogdCxcclxuXHRcdFx0dGhyb3c6IHQsXHJcblx0XHRcdGRlbGV0ZTogdCxcclxuXHRcdFx0aW46IHQsXHJcblx0XHRcdHRyeTogdCxcclxuXHRcclxuXHRcdFx0Y2xhc3M6IHQsXHJcblx0XHRcdGVudW06IHQsXHJcblx0XHRcdGV4dGVuZHM6IHQsXHJcblx0XHRcdHN1cGVyOiB0LFxyXG5cdFx0XHRjb25zdDogdCxcclxuXHRcdFx0ZXhwb3J0OiB0LFxyXG5cdFx0XHRpbXBvcnQ6IHQsXHJcblx0XHJcblx0XHRcdGltcGxlbWVudHM6IHQsXHJcblx0XHRcdGxldDogdCxcclxuXHRcdFx0cHJpdmF0ZTogdCxcclxuXHRcdFx0cHVibGljOiB0LFxyXG5cdFx0XHRpbnRlcmZhY2U6IHQsXHJcblx0XHRcdHBhY2thZ2U6IHQsXHJcblx0XHRcdHByb3RlY3RlZDogdCxcclxuXHRcdFx0c3RhdGljOiB0LFxyXG5cdFx0XHR5aWVsZDogdFxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0c3RhdGljIExJVCA9IHtcclxuXHRcdFx0bnVsbDogdCxcclxuXHRcdFx0dHJ1ZTogdCxcclxuXHRcdFx0ZmFsc2U6IHRcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHN0YXRpYyBQTkNfU0lOR0xFID0ge1xyXG5cdFx0XHRsYnJhY2U6IDEyMyxcclxuXHRcdFx0cmJyYWNlOiAxMjUsXHJcblx0XHRcdGxwYXJlbnRoOiA0MCxcclxuXHRcdFx0cnBhcmVudGg6IDQxLFxyXG5cdFx0XHRsYnJhY2tldDogOTEsXHJcblx0XHRcdHJicmFja2V0OiA5MyxcclxuXHRcdFx0ZG90OiA0NixcclxuXHRcdFx0c2VtaWNvbG9uOiA1OSxcclxuXHRcdFx0Y29tbWE6IDQ0LFxyXG5cdFx0XHRsZXNzOiA2MCxcclxuXHRcdFx0bW9yZTogNjIsXHJcblx0XHRcdHBsdXM6IDQzLFxyXG5cdFx0XHRtaW51czogNDUsXHJcblx0XHRcdHBlcmNlbnQ6IDM3LFxyXG5cdFx0XHRhbXBlcnNhbmQ6IDM4LFxyXG5cdFx0XHR2ZXJ0aWNhbDogMTI0LFxyXG5cdFx0XHRjYXJldDogOTQsXHJcblx0XHRcdGV4Y2w6IDMzLFxyXG5cdFx0XHR0aWxkZTogMTI2LFxyXG5cdFx0XHRxdWVzdDogNjMsXHJcblx0XHRcdGNvbG9uOiA1OCxcclxuXHRcdFx0YXNzaWduOiA2MSxcclxuXHRcdFx0YXN0ZXJpc2s6IDQyLFxyXG5cdFx0XHRzbGFzaDogNDcsXHJcblx0XHRcdGJhY2tzbGFzaDogOTIsXHJcblx0XHRcdGRvbGxhcjogMzYsXHJcblx0XHRcdGV4cDogMTAxLFxyXG5cdFx0XHRleHBiOiA2OSxcclxuXHRcdFx0YXBvc3Ryb3BoZTogMzksXHJcblx0XHRcdHFtYXJrOiAzNCxcclxuXHRcdFx0emVybzogNDgsXHJcblx0XHRcdFxyXG5cdFx0XHRiOiA5OCxcclxuXHRcdFx0ZjogMTAyLFxyXG5cdFx0XHRuOiAxMTAsXHJcblx0XHRcdHI6IDExNCxcclxuXHRcdFx0dDogMTE2LFxyXG5cdFx0XHR2OiAxMTgsXHJcblx0XHRcdHg6IDEyMCxcclxuXHRcdFx0dTogMTE3LFxyXG5cdFx0XHRcclxuXHRcdFx0bGY6IDB4MDAwQSxcclxuICAgICAgICAgICAgY3I6IDB4MDAwRFxyXG5cdFx0fTtcdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0c3RhdGljIFVOSUNPREVfVU5DT01NT05fVEhSRVNIT0xEID0gMTcwO1xyXG5cdFx0XHJcblx0XHRzdGF0aWMgVU5JQ09ERV9DT05USU5VRV9DT01NT04gPSB7IDB4MjAwQzogdCAvKiB6d25qICovLCAweDIwMEQ6IHQgLyogendqICovLCAzNjogdCAvKiAkICovLCA5MjogdCAvKiBcXCAqLywgXHJcblx0XHRcdDQ4OiB0LCA0OTogdCwgNTA6IHQsIDUxOiB0LCA1MjogdCwgNTM6IHQsIDU0OiB0LCA1NTogdCwgNTY6IHQsIDU3OiB0LCA2NTogdCwgNjY6IHQsIDY3OiB0LCA2ODogdCwgNjk6IHQsIDcwOiB0LCA3MTogdCwgNzI6IHQsIDczOiB0LCA3NDogdCwgNzU6IHQsIDc2OiB0LCA3NzogdCwgNzg6IHQsIDc5OiB0LCA4MDogdCwgODE6IHQsIDgyOiB0LCA4MzogdCwgODQ6IHQsIDg1OiB0LCA4NjogdCwgODc6IHQsIDg4OiB0LCA4OTogdCwgOTA6IHQsIDk1OiB0LCA5NzogdCwgOTg6IHQsIDk5OiB0LCAxMDA6IHQsIDEwMTogdCwgMTAyOiB0LCAxMDM6IHQsIDEwNDogdCwgMTA1OiB0LCAxMDY6IHQsIDEwNzogdCwgMTA4OiB0LCAxMDk6IHQsIDExMDogdCwgMTExOiB0LCAxMTI6IHQsIDExMzogdCwgMTE0OiB0LCAxMTU6IHQsIDExNjogdCwgMTE3OiB0LCAxMTg6IHQsIDExOTogdCwgMTIwOiB0LCAxMjE6IHQsIDEyMjogdCB9O1xyXG5cdFx0XHJcblx0XHRzdGF0aWMgVU5JQ09ERV9DT05USU5VRV9VTkNPTU1PTiA9IC9bXFx4QUFcXHhCNVxceEJBXFx4QzAtXFx4RDZcXHhEOC1cXHhGNlxceEY4LVxcdTAyNDFcXHUwMjUwLVxcdTAyQzFcXHUwMkM2LVxcdTAyRDFcXHUwMkUwLVxcdTAyRTRcXHUwMkVFXFx1MDMwMC1cXHUwMzZGXFx1MDM3QVxcdTAzODZcXHUwMzg4LVxcdTAzOEFcXHUwMzhDXFx1MDM4RS1cXHUwM0ExXFx1MDNBMy1cXHUwM0NFXFx1MDNEMC1cXHUwM0Y1XFx1MDNGNy1cXHUwNDgxXFx1MDQ4My1cXHUwNDg2XFx1MDQ4QS1cXHUwNENFXFx1MDREMC1cXHUwNEY5XFx1MDUwMC1cXHUwNTBGXFx1MDUzMS1cXHUwNTU2XFx1MDU1OVxcdTA1NjEtXFx1MDU4N1xcdTA1OTEtXFx1MDVCOVxcdTA1QkItXFx1MDVCRFxcdTA1QkZcXHUwNUMxXFx1MDVDMlxcdTA1QzRcXHUwNUM1XFx1MDVDN1xcdTA1RDAtXFx1MDVFQVxcdTA1RjAtXFx1MDVGMlxcdTA2MTAtXFx1MDYxNVxcdTA2MjEtXFx1MDYzQVxcdTA2NDAtXFx1MDY1RVxcdTA2NjAtXFx1MDY2OVxcdTA2NkUtXFx1MDZEM1xcdTA2RDUtXFx1MDZEQ1xcdTA2REYtXFx1MDZFOFxcdTA2RUEtXFx1MDZGQ1xcdTA2RkZcXHUwNzEwLVxcdTA3NEFcXHUwNzRELVxcdTA3NkRcXHUwNzgwLVxcdTA3QjFcXHUwOTAxLVxcdTA5MzlcXHUwOTNDLVxcdTA5NERcXHUwOTUwLVxcdTA5NTRcXHUwOTU4LVxcdTA5NjNcXHUwOTY2LVxcdTA5NkZcXHUwOTdEXFx1MDk4MS1cXHUwOTgzXFx1MDk4NS1cXHUwOThDXFx1MDk4RlxcdTA5OTBcXHUwOTkzLVxcdTA5QThcXHUwOUFBLVxcdTA5QjBcXHUwOUIyXFx1MDlCNi1cXHUwOUI5XFx1MDlCQy1cXHUwOUM0XFx1MDlDN1xcdTA5QzhcXHUwOUNCLVxcdTA5Q0VcXHUwOUQ3XFx1MDlEQ1xcdTA5RERcXHUwOURGLVxcdTA5RTNcXHUwOUU2LVxcdTA5RjFcXHUwQTAxLVxcdTBBMDNcXHUwQTA1LVxcdTBBMEFcXHUwQTBGXFx1MEExMFxcdTBBMTMtXFx1MEEyOFxcdTBBMkEtXFx1MEEzMFxcdTBBMzJcXHUwQTMzXFx1MEEzNVxcdTBBMzZcXHUwQTM4XFx1MEEzOVxcdTBBM0NcXHUwQTNFLVxcdTBBNDJcXHUwQTQ3XFx1MEE0OFxcdTBBNEItXFx1MEE0RFxcdTBBNTktXFx1MEE1Q1xcdTBBNUVcXHUwQTY2LVxcdTBBNzRcXHUwQTgxLVxcdTBBODNcXHUwQTg1LVxcdTBBOERcXHUwQThGLVxcdTBBOTFcXHUwQTkzLVxcdTBBQThcXHUwQUFBLVxcdTBBQjBcXHUwQUIyXFx1MEFCM1xcdTBBQjUtXFx1MEFCOVxcdTBBQkMtXFx1MEFDNVxcdTBBQzctXFx1MEFDOVxcdTBBQ0ItXFx1MEFDRFxcdTBBRDBcXHUwQUUwLVxcdTBBRTNcXHUwQUU2LVxcdTBBRUZcXHUwQjAxLVxcdTBCMDNcXHUwQjA1LVxcdTBCMENcXHUwQjBGXFx1MEIxMFxcdTBCMTMtXFx1MEIyOFxcdTBCMkEtXFx1MEIzMFxcdTBCMzJcXHUwQjMzXFx1MEIzNS1cXHUwQjM5XFx1MEIzQy1cXHUwQjQzXFx1MEI0N1xcdTBCNDhcXHUwQjRCLVxcdTBCNERcXHUwQjU2XFx1MEI1N1xcdTBCNUNcXHUwQjVEXFx1MEI1Ri1cXHUwQjYxXFx1MEI2Ni1cXHUwQjZGXFx1MEI3MVxcdTBCODJcXHUwQjgzXFx1MEI4NS1cXHUwQjhBXFx1MEI4RS1cXHUwQjkwXFx1MEI5Mi1cXHUwQjk1XFx1MEI5OVxcdTBCOUFcXHUwQjlDXFx1MEI5RVxcdTBCOUZcXHUwQkEzXFx1MEJBNFxcdTBCQTgtXFx1MEJBQVxcdTBCQUUtXFx1MEJCOVxcdTBCQkUtXFx1MEJDMlxcdTBCQzYtXFx1MEJDOFxcdTBCQ0EtXFx1MEJDRFxcdTBCRDdcXHUwQkU2LVxcdTBCRUZcXHUwQzAxLVxcdTBDMDNcXHUwQzA1LVxcdTBDMENcXHUwQzBFLVxcdTBDMTBcXHUwQzEyLVxcdTBDMjhcXHUwQzJBLVxcdTBDMzNcXHUwQzM1LVxcdTBDMzlcXHUwQzNFLVxcdTBDNDRcXHUwQzQ2LVxcdTBDNDhcXHUwQzRBLVxcdTBDNERcXHUwQzU1XFx1MEM1NlxcdTBDNjBcXHUwQzYxXFx1MEM2Ni1cXHUwQzZGXFx1MEM4MlxcdTBDODNcXHUwQzg1LVxcdTBDOENcXHUwQzhFLVxcdTBDOTBcXHUwQzkyLVxcdTBDQThcXHUwQ0FBLVxcdTBDQjNcXHUwQ0I1LVxcdTBDQjlcXHUwQ0JDLVxcdTBDQzRcXHUwQ0M2LVxcdTBDQzhcXHUwQ0NBLVxcdTBDQ0RcXHUwQ0Q1XFx1MENENlxcdTBDREVcXHUwQ0UwXFx1MENFMVxcdTBDRTYtXFx1MENFRlxcdTBEMDJcXHUwRDAzXFx1MEQwNS1cXHUwRDBDXFx1MEQwRS1cXHUwRDEwXFx1MEQxMi1cXHUwRDI4XFx1MEQyQS1cXHUwRDM5XFx1MEQzRS1cXHUwRDQzXFx1MEQ0Ni1cXHUwRDQ4XFx1MEQ0QS1cXHUwRDREXFx1MEQ1N1xcdTBENjBcXHUwRDYxXFx1MEQ2Ni1cXHUwRDZGXFx1MEQ4MlxcdTBEODNcXHUwRDg1LVxcdTBEOTZcXHUwRDlBLVxcdTBEQjFcXHUwREIzLVxcdTBEQkJcXHUwREJEXFx1MERDMC1cXHUwREM2XFx1MERDQVxcdTBEQ0YtXFx1MERENFxcdTBERDZcXHUwREQ4LVxcdTBEREZcXHUwREYyXFx1MERGM1xcdTBFMDEtXFx1MEUzQVxcdTBFNDAtXFx1MEU0RVxcdTBFNTAtXFx1MEU1OVxcdTBFODFcXHUwRTgyXFx1MEU4NFxcdTBFODdcXHUwRTg4XFx1MEU4QVxcdTBFOERcXHUwRTk0LVxcdTBFOTdcXHUwRTk5LVxcdTBFOUZcXHUwRUExLVxcdTBFQTNcXHUwRUE1XFx1MEVBN1xcdTBFQUFcXHUwRUFCXFx1MEVBRC1cXHUwRUI5XFx1MEVCQi1cXHUwRUJEXFx1MEVDMC1cXHUwRUM0XFx1MEVDNlxcdTBFQzgtXFx1MEVDRFxcdTBFRDAtXFx1MEVEOVxcdTBFRENcXHUwRUREXFx1MEYwMFxcdTBGMThcXHUwRjE5XFx1MEYyMC1cXHUwRjI5XFx1MEYzNVxcdTBGMzdcXHUwRjM5XFx1MEYzRS1cXHUwRjQ3XFx1MEY0OS1cXHUwRjZBXFx1MEY3MS1cXHUwRjg0XFx1MEY4Ni1cXHUwRjhCXFx1MEY5MC1cXHUwRjk3XFx1MEY5OS1cXHUwRkJDXFx1MEZDNlxcdTEwMDAtXFx1MTAyMVxcdTEwMjMtXFx1MTAyN1xcdTEwMjlcXHUxMDJBXFx1MTAyQy1cXHUxMDMyXFx1MTAzNi1cXHUxMDM5XFx1MTA0MC1cXHUxMDQ5XFx1MTA1MC1cXHUxMDU5XFx1MTBBMC1cXHUxMEM1XFx1MTBEMC1cXHUxMEZBXFx1MTBGQ1xcdTExMDAtXFx1MTE1OVxcdTExNUYtXFx1MTFBMlxcdTExQTgtXFx1MTFGOVxcdTEyMDAtXFx1MTI0OFxcdTEyNEEtXFx1MTI0RFxcdTEyNTAtXFx1MTI1NlxcdTEyNThcXHUxMjVBLVxcdTEyNURcXHUxMjYwLVxcdTEyODhcXHUxMjhBLVxcdTEyOERcXHUxMjkwLVxcdTEyQjBcXHUxMkIyLVxcdTEyQjVcXHUxMkI4LVxcdTEyQkVcXHUxMkMwXFx1MTJDMi1cXHUxMkM1XFx1MTJDOC1cXHUxMkQ2XFx1MTJEOC1cXHUxMzEwXFx1MTMxMi1cXHUxMzE1XFx1MTMxOC1cXHUxMzVBXFx1MTM1RlxcdTEzNjktXFx1MTM3MVxcdTEzODAtXFx1MTM4RlxcdTEzQTAtXFx1MTNGNFxcdTE0MDEtXFx1MTY2Q1xcdTE2NkYtXFx1MTY3NlxcdTE2ODEtXFx1MTY5QVxcdTE2QTAtXFx1MTZFQVxcdTE2RUUtXFx1MTZGMFxcdTE3MDAtXFx1MTcwQ1xcdTE3MEUtXFx1MTcxNFxcdTE3MjAtXFx1MTczNFxcdTE3NDAtXFx1MTc1M1xcdTE3NjAtXFx1MTc2Q1xcdTE3NkUtXFx1MTc3MFxcdTE3NzJcXHUxNzczXFx1MTc4MC1cXHUxN0IzXFx1MTdCNi1cXHUxN0QzXFx1MTdEN1xcdTE3RENcXHUxN0REXFx1MTdFMC1cXHUxN0U5XFx1MTgwQi1cXHUxODBEXFx1MTgxMC1cXHUxODE5XFx1MTgyMC1cXHUxODc3XFx1MTg4MC1cXHUxOEE5XFx1MTkwMC1cXHUxOTFDXFx1MTkyMC1cXHUxOTJCXFx1MTkzMC1cXHUxOTNCXFx1MTk0Ni1cXHUxOTZEXFx1MTk3MC1cXHUxOTc0XFx1MTk4MC1cXHUxOUE5XFx1MTlCMC1cXHUxOUM5XFx1MTlEMC1cXHUxOUQ5XFx1MUEwMC1cXHUxQTFCXFx1MUQwMC1cXHUxREMzXFx1MUUwMC1cXHUxRTlCXFx1MUVBMC1cXHUxRUY5XFx1MUYwMC1cXHUxRjE1XFx1MUYxOC1cXHUxRjFEXFx1MUYyMC1cXHUxRjQ1XFx1MUY0OC1cXHUxRjREXFx1MUY1MC1cXHUxRjU3XFx1MUY1OVxcdTFGNUJcXHUxRjVEXFx1MUY1Ri1cXHUxRjdEXFx1MUY4MC1cXHUxRkI0XFx1MUZCNi1cXHUxRkJDXFx1MUZCRVxcdTFGQzItXFx1MUZDNFxcdTFGQzYtXFx1MUZDQ1xcdTFGRDAtXFx1MUZEM1xcdTFGRDYtXFx1MUZEQlxcdTFGRTAtXFx1MUZFQ1xcdTFGRjItXFx1MUZGNFxcdTFGRjYtXFx1MUZGQ1xcdTIwM0ZcXHUyMDQwXFx1MjA1NFxcdTIwNzFcXHUyMDdGXFx1MjA5MC1cXHUyMDk0XFx1MjBEMC1cXHUyMERDXFx1MjBFMVxcdTIwRTUtXFx1MjBFQlxcdTIxMDJcXHUyMTA3XFx1MjEwQS1cXHUyMTEzXFx1MjExNVxcdTIxMTgtXFx1MjExRFxcdTIxMjRcXHUyMTI2XFx1MjEyOFxcdTIxMkEtXFx1MjEzMVxcdTIxMzMtXFx1MjEzOVxcdTIxM0MtXFx1MjEzRlxcdTIxNDUtXFx1MjE0OVxcdTIxNjAtXFx1MjE4M1xcdTJDMDAtXFx1MkMyRVxcdTJDMzAtXFx1MkM1RVxcdTJDODAtXFx1MkNFNFxcdTJEMDAtXFx1MkQyNVxcdTJEMzAtXFx1MkQ2NVxcdTJENkZcXHUyRDgwLVxcdTJEOTZcXHUyREEwLVxcdTJEQTZcXHUyREE4LVxcdTJEQUVcXHUyREIwLVxcdTJEQjZcXHUyREI4LVxcdTJEQkVcXHUyREMwLVxcdTJEQzZcXHUyREM4LVxcdTJEQ0VcXHUyREQwLVxcdTJERDZcXHUyREQ4LVxcdTJEREVcXHUzMDA1LVxcdTMwMDdcXHUzMDIxLVxcdTMwMkZcXHUzMDMxLVxcdTMwMzVcXHUzMDM4LVxcdTMwM0NcXHUzMDQxLVxcdTMwOTZcXHUzMDk5LVxcdTMwOUZcXHUzMEExLVxcdTMwRkFcXHUzMEZDLVxcdTMwRkZcXHUzMTA1LVxcdTMxMkNcXHUzMTMxLVxcdTMxOEVcXHUzMUEwLVxcdTMxQjdcXHUzMUYwLVxcdTMxRkZcXHUzNDAwLVxcdTREQjVcXHU0RTAwLVxcdTlGQkJcXHVBMDAwLVxcdUE0OENcXHVBODAwLVxcdUE4MjdcXHVBQzAwLVxcdUQ3QTNcXHVGOTAwLVxcdUZBMkRcXHVGQTMwLVxcdUZBNkFcXHVGQTcwLVxcdUZBRDlcXHVGQjAwLVxcdUZCMDZcXHVGQjEzLVxcdUZCMTdcXHVGQjFELVxcdUZCMjhcXHVGQjJBLVxcdUZCMzZcXHVGQjM4LVxcdUZCM0NcXHVGQjNFXFx1RkI0MFxcdUZCNDFcXHVGQjQzXFx1RkI0NFxcdUZCNDYtXFx1RkJCMVxcdUZCRDMtXFx1RkQzRFxcdUZENTAtXFx1RkQ4RlxcdUZEOTItXFx1RkRDN1xcdUZERjAtXFx1RkRGQlxcdUZFMDAtXFx1RkUwRlxcdUZFMjAtXFx1RkUyM1xcdUZFMzNcXHVGRTM0XFx1RkU0RC1cXHVGRTRGXFx1RkU3MC1cXHVGRTc0XFx1RkU3Ni1cXHVGRUZDXFx1RkYxMC1cXHVGRjE5XFx1RkYyMS1cXHVGRjNBXFx1RkYzRlxcdUZGNDEtXFx1RkY1QVxcdUZGNjYtXFx1RkZCRVxcdUZGQzItXFx1RkZDN1xcdUZGQ0EtXFx1RkZDRlxcdUZGRDItXFx1RkZEN1xcdUZGREEtXFx1RkZEQ118XFx1RDgwMFtcXHVEQzAwLVxcdURDMEJcXHVEQzBELVxcdURDMjZcXHVEQzI4LVxcdURDM0FcXHVEQzNDXFx1REMzRFxcdURDM0YtXFx1REM0RFxcdURDNTAtXFx1REM1RFxcdURDODAtXFx1RENGQVxcdURENDAtXFx1REQ3NFxcdURGMDAtXFx1REYxRVxcdURGMzAtXFx1REY0QVxcdURGODAtXFx1REY5RFxcdURGQTAtXFx1REZDM1xcdURGQzgtXFx1REZDRlxcdURGRDEtXFx1REZENV18XFx1RDgwMVtcXHVEQzAwLVxcdURDOURcXHVEQ0EwLVxcdURDQTldfFxcdUQ4MDJbXFx1REMwMC1cXHVEQzA1XFx1REMwOFxcdURDMEEtXFx1REMzNVxcdURDMzdcXHVEQzM4XFx1REMzQ1xcdURDM0ZcXHVERTAwLVxcdURFMDNcXHVERTA1XFx1REUwNlxcdURFMEMtXFx1REUxM1xcdURFMTUtXFx1REUxN1xcdURFMTktXFx1REUzM1xcdURFMzgtXFx1REUzQVxcdURFM0ZdfFxcdUQ4MzRbXFx1REQ2NS1cXHVERDY5XFx1REQ2RC1cXHVERDcyXFx1REQ3Qi1cXHVERDgyXFx1REQ4NS1cXHVERDhCXFx1RERBQS1cXHVEREFEXFx1REU0Mi1cXHVERTQ0XXxcXHVEODM1W1xcdURDMDAtXFx1REM1NFxcdURDNTYtXFx1REM5Q1xcdURDOUVcXHVEQzlGXFx1RENBMlxcdURDQTVcXHVEQ0E2XFx1RENBOS1cXHVEQ0FDXFx1RENBRS1cXHVEQ0I5XFx1RENCQlxcdURDQkQtXFx1RENDM1xcdURDQzUtXFx1REQwNVxcdUREMDctXFx1REQwQVxcdUREMEQtXFx1REQxNFxcdUREMTYtXFx1REQxQ1xcdUREMUUtXFx1REQzOVxcdUREM0ItXFx1REQzRVxcdURENDAtXFx1REQ0NFxcdURENDZcXHVERDRBLVxcdURENTBcXHVERDUyLVxcdURFQTVcXHVERUE4LVxcdURFQzBcXHVERUMyLVxcdURFREFcXHVERURDLVxcdURFRkFcXHVERUZDLVxcdURGMTRcXHVERjE2LVxcdURGMzRcXHVERjM2LVxcdURGNEVcXHVERjUwLVxcdURGNkVcXHVERjcwLVxcdURGODhcXHVERjhBLVxcdURGQThcXHVERkFBLVxcdURGQzJcXHVERkM0LVxcdURGQzlcXHVERkNFLVxcdURGRkZdfFtcXHVEODQwLVxcdUQ4NjhdW1xcdURDMDAtXFx1REZGRl18XFx1RDg2OVtcXHVEQzAwLVxcdURFRDZdfFxcdUQ4N0VbXFx1REMwMC1cXHVERTFEXXxcXHVEQjQwW1xcdUREMDAtXFx1RERFRl0vO1xyXG5cclxuXHRcdHN0YXRpYyBVTklDT0RFX1NUQVJUX0NPTU1PTiA9IHsgMzY6IHQgLyogJCAqLywgOTI6IHQgLyogXFwgKi8sIDk1OiB0IC8qIF8gKi8sIDY1OiB0LCA2NjogdCwgNjc6IHQsIDY4OiB0LCA2OTogdCwgNzA6IHQsIDcxOiB0LCA3MjogdCwgNzM6IHQsIDc0OiB0LCA3NTogdCwgNzY6IHQsIDc3OiB0LCA3ODogdCwgNzk6IHQsIDgwOiB0LCA4MTogdCwgODI6IHQsIDgzOiB0LCA4NDogdCwgODU6IHQsIDg2OiB0LCA4NzogdCwgODg6IHQsIDg5OiB0LCA5MDogdCwgOTc6IHQsIDk4OiB0LCA5OTogdCwgMTAwOiB0LCAxMDE6IHQsIDEwMjogdCwgMTAzOiB0LCAxMDQ6IHQsIDEwNTogdCwgMTA2OiB0LCAxMDc6IHQsIDEwODogdCwgMTA5OiB0LCAxMTA6IHQsIDExMTogdCwgMTEyOiB0LCAxMTM6IHQsIDExNDogdCwgMTE1OiB0LCAxMTY6IHQsIDExNzogdCwgMTE4OiB0LCAxMTk6IHQsIDEyMDogdCwgMTIxOiB0LCAxMjI6IHQgfTtcclxuXHRcdFxyXG5cdFx0c3RhdGljIFVOSUNPREVfU1RBUlRfVU5DT01NT04gPSAvW1xceEFBXFx4QjVcXHhCQVxceEMwLVxceEQ2XFx4RDgtXFx4RjZcXHhGOC1cXHUwMjQxXFx1MDI1MC1cXHUwMkMxXFx1MDJDNi1cXHUwMkQxXFx1MDJFMC1cXHUwMkU0XFx1MDJFRVxcdTAzN0FcXHUwMzg2XFx1MDM4OC1cXHUwMzhBXFx1MDM4Q1xcdTAzOEUtXFx1MDNBMVxcdTAzQTMtXFx1MDNDRVxcdTAzRDAtXFx1MDNGNVxcdTAzRjctXFx1MDQ4MVxcdTA0OEEtXFx1MDRDRVxcdTA0RDAtXFx1MDRGOVxcdTA1MDAtXFx1MDUwRlxcdTA1MzEtXFx1MDU1NlxcdTA1NTlcXHUwNTYxLVxcdTA1ODdcXHUwNUQwLVxcdTA1RUFcXHUwNUYwLVxcdTA1RjJcXHUwNjIxLVxcdTA2M0FcXHUwNjQwLVxcdTA2NEFcXHUwNjZFXFx1MDY2RlxcdTA2NzEtXFx1MDZEM1xcdTA2RDVcXHUwNkU1XFx1MDZFNlxcdTA2RUVcXHUwNkVGXFx1MDZGQS1cXHUwNkZDXFx1MDZGRlxcdTA3MTBcXHUwNzEyLVxcdTA3MkZcXHUwNzRELVxcdTA3NkRcXHUwNzgwLVxcdTA3QTVcXHUwN0IxXFx1MDkwNC1cXHUwOTM5XFx1MDkzRFxcdTA5NTBcXHUwOTU4LVxcdTA5NjFcXHUwOTdEXFx1MDk4NS1cXHUwOThDXFx1MDk4RlxcdTA5OTBcXHUwOTkzLVxcdTA5QThcXHUwOUFBLVxcdTA5QjBcXHUwOUIyXFx1MDlCNi1cXHUwOUI5XFx1MDlCRFxcdTA5Q0VcXHUwOURDXFx1MDlERFxcdTA5REYtXFx1MDlFMVxcdTA5RjBcXHUwOUYxXFx1MEEwNS1cXHUwQTBBXFx1MEEwRlxcdTBBMTBcXHUwQTEzLVxcdTBBMjhcXHUwQTJBLVxcdTBBMzBcXHUwQTMyXFx1MEEzM1xcdTBBMzVcXHUwQTM2XFx1MEEzOFxcdTBBMzlcXHUwQTU5LVxcdTBBNUNcXHUwQTVFXFx1MEE3Mi1cXHUwQTc0XFx1MEE4NS1cXHUwQThEXFx1MEE4Ri1cXHUwQTkxXFx1MEE5My1cXHUwQUE4XFx1MEFBQS1cXHUwQUIwXFx1MEFCMlxcdTBBQjNcXHUwQUI1LVxcdTBBQjlcXHUwQUJEXFx1MEFEMFxcdTBBRTBcXHUwQUUxXFx1MEIwNS1cXHUwQjBDXFx1MEIwRlxcdTBCMTBcXHUwQjEzLVxcdTBCMjhcXHUwQjJBLVxcdTBCMzBcXHUwQjMyXFx1MEIzM1xcdTBCMzUtXFx1MEIzOVxcdTBCM0RcXHUwQjVDXFx1MEI1RFxcdTBCNUYtXFx1MEI2MVxcdTBCNzFcXHUwQjgzXFx1MEI4NS1cXHUwQjhBXFx1MEI4RS1cXHUwQjkwXFx1MEI5Mi1cXHUwQjk1XFx1MEI5OVxcdTBCOUFcXHUwQjlDXFx1MEI5RVxcdTBCOUZcXHUwQkEzXFx1MEJBNFxcdTBCQTgtXFx1MEJBQVxcdTBCQUUtXFx1MEJCOVxcdTBDMDUtXFx1MEMwQ1xcdTBDMEUtXFx1MEMxMFxcdTBDMTItXFx1MEMyOFxcdTBDMkEtXFx1MEMzM1xcdTBDMzUtXFx1MEMzOVxcdTBDNjBcXHUwQzYxXFx1MEM4NS1cXHUwQzhDXFx1MEM4RS1cXHUwQzkwXFx1MEM5Mi1cXHUwQ0E4XFx1MENBQS1cXHUwQ0IzXFx1MENCNS1cXHUwQ0I5XFx1MENCRFxcdTBDREVcXHUwQ0UwXFx1MENFMVxcdTBEMDUtXFx1MEQwQ1xcdTBEMEUtXFx1MEQxMFxcdTBEMTItXFx1MEQyOFxcdTBEMkEtXFx1MEQzOVxcdTBENjBcXHUwRDYxXFx1MEQ4NS1cXHUwRDk2XFx1MEQ5QS1cXHUwREIxXFx1MERCMy1cXHUwREJCXFx1MERCRFxcdTBEQzAtXFx1MERDNlxcdTBFMDEtXFx1MEUzMFxcdTBFMzJcXHUwRTMzXFx1MEU0MC1cXHUwRTQ2XFx1MEU4MVxcdTBFODJcXHUwRTg0XFx1MEU4N1xcdTBFODhcXHUwRThBXFx1MEU4RFxcdTBFOTQtXFx1MEU5N1xcdTBFOTktXFx1MEU5RlxcdTBFQTEtXFx1MEVBM1xcdTBFQTVcXHUwRUE3XFx1MEVBQVxcdTBFQUJcXHUwRUFELVxcdTBFQjBcXHUwRUIyXFx1MEVCM1xcdTBFQkRcXHUwRUMwLVxcdTBFQzRcXHUwRUM2XFx1MEVEQ1xcdTBFRERcXHUwRjAwXFx1MEY0MC1cXHUwRjQ3XFx1MEY0OS1cXHUwRjZBXFx1MEY4OC1cXHUwRjhCXFx1MTAwMC1cXHUxMDIxXFx1MTAyMy1cXHUxMDI3XFx1MTAyOVxcdTEwMkFcXHUxMDUwLVxcdTEwNTVcXHUxMEEwLVxcdTEwQzVcXHUxMEQwLVxcdTEwRkFcXHUxMEZDXFx1MTEwMC1cXHUxMTU5XFx1MTE1Ri1cXHUxMUEyXFx1MTFBOC1cXHUxMUY5XFx1MTIwMC1cXHUxMjQ4XFx1MTI0QS1cXHUxMjREXFx1MTI1MC1cXHUxMjU2XFx1MTI1OFxcdTEyNUEtXFx1MTI1RFxcdTEyNjAtXFx1MTI4OFxcdTEyOEEtXFx1MTI4RFxcdTEyOTAtXFx1MTJCMFxcdTEyQjItXFx1MTJCNVxcdTEyQjgtXFx1MTJCRVxcdTEyQzBcXHUxMkMyLVxcdTEyQzVcXHUxMkM4LVxcdTEyRDZcXHUxMkQ4LVxcdTEzMTBcXHUxMzEyLVxcdTEzMTVcXHUxMzE4LVxcdTEzNUFcXHUxMzgwLVxcdTEzOEZcXHUxM0EwLVxcdTEzRjRcXHUxNDAxLVxcdTE2NkNcXHUxNjZGLVxcdTE2NzZcXHUxNjgxLVxcdTE2OUFcXHUxNkEwLVxcdTE2RUFcXHUxNkVFLVxcdTE2RjBcXHUxNzAwLVxcdTE3MENcXHUxNzBFLVxcdTE3MTFcXHUxNzIwLVxcdTE3MzFcXHUxNzQwLVxcdTE3NTFcXHUxNzYwLVxcdTE3NkNcXHUxNzZFLVxcdTE3NzBcXHUxNzgwLVxcdTE3QjNcXHUxN0Q3XFx1MTdEQ1xcdTE4MjAtXFx1MTg3N1xcdTE4ODAtXFx1MThBOFxcdTE5MDAtXFx1MTkxQ1xcdTE5NTAtXFx1MTk2RFxcdTE5NzAtXFx1MTk3NFxcdTE5ODAtXFx1MTlBOVxcdTE5QzEtXFx1MTlDN1xcdTFBMDAtXFx1MUExNlxcdTFEMDAtXFx1MURCRlxcdTFFMDAtXFx1MUU5QlxcdTFFQTAtXFx1MUVGOVxcdTFGMDAtXFx1MUYxNVxcdTFGMTgtXFx1MUYxRFxcdTFGMjAtXFx1MUY0NVxcdTFGNDgtXFx1MUY0RFxcdTFGNTAtXFx1MUY1N1xcdTFGNTlcXHUxRjVCXFx1MUY1RFxcdTFGNUYtXFx1MUY3RFxcdTFGODAtXFx1MUZCNFxcdTFGQjYtXFx1MUZCQ1xcdTFGQkVcXHUxRkMyLVxcdTFGQzRcXHUxRkM2LVxcdTFGQ0NcXHUxRkQwLVxcdTFGRDNcXHUxRkQ2LVxcdTFGREJcXHUxRkUwLVxcdTFGRUNcXHUxRkYyLVxcdTFGRjRcXHUxRkY2LVxcdTFGRkNcXHUyMDcxXFx1MjA3RlxcdTIwOTAtXFx1MjA5NFxcdTIxMDJcXHUyMTA3XFx1MjEwQS1cXHUyMTEzXFx1MjExNVxcdTIxMTgtXFx1MjExRFxcdTIxMjRcXHUyMTI2XFx1MjEyOFxcdTIxMkEtXFx1MjEzMVxcdTIxMzMtXFx1MjEzOVxcdTIxM0MtXFx1MjEzRlxcdTIxNDUtXFx1MjE0OVxcdTIxNjAtXFx1MjE4M1xcdTJDMDAtXFx1MkMyRVxcdTJDMzAtXFx1MkM1RVxcdTJDODAtXFx1MkNFNFxcdTJEMDAtXFx1MkQyNVxcdTJEMzAtXFx1MkQ2NVxcdTJENkZcXHUyRDgwLVxcdTJEOTZcXHUyREEwLVxcdTJEQTZcXHUyREE4LVxcdTJEQUVcXHUyREIwLVxcdTJEQjZcXHUyREI4LVxcdTJEQkVcXHUyREMwLVxcdTJEQzZcXHUyREM4LVxcdTJEQ0VcXHUyREQwLVxcdTJERDZcXHUyREQ4LVxcdTJEREVcXHUzMDA1LVxcdTMwMDdcXHUzMDIxLVxcdTMwMjlcXHUzMDMxLVxcdTMwMzVcXHUzMDM4LVxcdTMwM0NcXHUzMDQxLVxcdTMwOTZcXHUzMDlCLVxcdTMwOUZcXHUzMEExLVxcdTMwRkFcXHUzMEZDLVxcdTMwRkZcXHUzMTA1LVxcdTMxMkNcXHUzMTMxLVxcdTMxOEVcXHUzMUEwLVxcdTMxQjdcXHUzMUYwLVxcdTMxRkZcXHUzNDAwLVxcdTREQjVcXHU0RTAwLVxcdTlGQkJcXHVBMDAwLVxcdUE0OENcXHVBODAwXFx1QTgwMVxcdUE4MDMtXFx1QTgwNVxcdUE4MDctXFx1QTgwQVxcdUE4MEMtXFx1QTgyMlxcdUFDMDAtXFx1RDdBM1xcdUY5MDAtXFx1RkEyRFxcdUZBMzAtXFx1RkE2QVxcdUZBNzAtXFx1RkFEOVxcdUZCMDAtXFx1RkIwNlxcdUZCMTMtXFx1RkIxN1xcdUZCMURcXHVGQjFGLVxcdUZCMjhcXHVGQjJBLVxcdUZCMzZcXHVGQjM4LVxcdUZCM0NcXHVGQjNFXFx1RkI0MFxcdUZCNDFcXHVGQjQzXFx1RkI0NFxcdUZCNDYtXFx1RkJCMVxcdUZCRDMtXFx1RkQzRFxcdUZENTAtXFx1RkQ4RlxcdUZEOTItXFx1RkRDN1xcdUZERjAtXFx1RkRGQlxcdUZFNzAtXFx1RkU3NFxcdUZFNzYtXFx1RkVGQ1xcdUZGMjEtXFx1RkYzQVxcdUZGNDEtXFx1RkY1QVxcdUZGNjYtXFx1RkZCRVxcdUZGQzItXFx1RkZDN1xcdUZGQ0EtXFx1RkZDRlxcdUZGRDItXFx1RkZEN1xcdUZGREEtXFx1RkZEQ118XFx1RDgwMFtcXHVEQzAwLVxcdURDMEJcXHVEQzBELVxcdURDMjZcXHVEQzI4LVxcdURDM0FcXHVEQzNDXFx1REMzRFxcdURDM0YtXFx1REM0RFxcdURDNTAtXFx1REM1RFxcdURDODAtXFx1RENGQVxcdURENDAtXFx1REQ3NFxcdURGMDAtXFx1REYxRVxcdURGMzAtXFx1REY0QVxcdURGODAtXFx1REY5RFxcdURGQTAtXFx1REZDM1xcdURGQzgtXFx1REZDRlxcdURGRDEtXFx1REZENV18XFx1RDgwMVtcXHVEQzAwLVxcdURDOURdfFxcdUQ4MDJbXFx1REMwMC1cXHVEQzA1XFx1REMwOFxcdURDMEEtXFx1REMzNVxcdURDMzdcXHVEQzM4XFx1REMzQ1xcdURDM0ZcXHVERTAwXFx1REUxMC1cXHVERTEzXFx1REUxNS1cXHVERTE3XFx1REUxOS1cXHVERTMzXXxcXHVEODM1W1xcdURDMDAtXFx1REM1NFxcdURDNTYtXFx1REM5Q1xcdURDOUVcXHVEQzlGXFx1RENBMlxcdURDQTVcXHVEQ0E2XFx1RENBOS1cXHVEQ0FDXFx1RENBRS1cXHVEQ0I5XFx1RENCQlxcdURDQkQtXFx1RENDM1xcdURDQzUtXFx1REQwNVxcdUREMDctXFx1REQwQVxcdUREMEQtXFx1REQxNFxcdUREMTYtXFx1REQxQ1xcdUREMUUtXFx1REQzOVxcdUREM0ItXFx1REQzRVxcdURENDAtXFx1REQ0NFxcdURENDZcXHVERDRBLVxcdURENTBcXHVERDUyLVxcdURFQTVcXHVERUE4LVxcdURFQzBcXHVERUMyLVxcdURFREFcXHVERURDLVxcdURFRkFcXHVERUZDLVxcdURGMTRcXHVERjE2LVxcdURGMzRcXHVERjM2LVxcdURGNEVcXHVERjUwLVxcdURGNkVcXHVERjcwLVxcdURGODhcXHVERjhBLVxcdURGQThcXHVERkFBLVxcdURGQzJcXHVERkM0LVxcdURGQzldfFtcXHVEODQwLVxcdUQ4NjhdW1xcdURDMDAtXFx1REZGRl18XFx1RDg2OVtcXHVEQzAwLVxcdURFRDZdfFxcdUQ4N0VbXFx1REMwMC1cXHVERTFEXS87XHJcblx0XHJcblx0fVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3RzRGVmaW5pdGlvbnMvdHNkLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdXRpbGl0aWVzL0NoYXJQb2ludHMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiVG9rZW5EZWZpbml0aW9ucy50c1wiIC8+XHJcblxyXG5tb2R1bGUgdHJsLmZyb250ZW5kLmxleGljYWwge1xyXG5cdFxyXG5cdGxldCBoZXhEaWdpdHMgPSB7fTtcclxuXHRfLmVhY2goXCIwMTIzNDU2Nzg5QUJDREVGYWJjZGVmXCIsIChudW1DaGFyKSA9PiB7XHJcblx0XHRcclxuXHRcdGhleERpZ2l0c1t1dGlsaXRpZXMuQ2hhclBvaW50cy5jb2RlUG9pbnRBdChudW1DaGFyLCAwKV0gPSB0cnVlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdGxldCBkaWdpdHMgPSB7fTtcclxuXHRfLmVhY2goXCIwMTIzNDU2Nzg5XCIsIChudW1DaGFyKSA9PiB7XHJcblx0XHRkaWdpdHNbdXRpbGl0aWVzLkNoYXJQb2ludHMuY29kZVBvaW50QXQobnVtQ2hhciwgMCldID0gdHJ1ZTtcclxuXHR9KTtcclxuXHRcclxuXHRleHBvcnQgY2xhc3MgSWRlbnRpZnllcnMge1xyXG5cdFxyXG5cdFx0c3RhdGljIGlzSGV4RGlnaXQoYzogbnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRcdHJldHVybiBoZXhEaWdpdHNbY107XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHN0YXRpYyBpc0RpZ2l0KGM6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0XHRyZXR1cm4gZGlnaXRzW2NdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBpc0tleXdvcmQoc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdFx0cmV0dXJuIFRva2VuRGVmaW5pdGlvbnMuS1dbc3RyXTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0c3RhdGljIGlzTGluZVRlcm1pbmF0b3IoYzogbnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRcdHJldHVybiBUb2tlbkRlZmluaXRpb25zLkxUW2NdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBpc0lkZW50aWZpZXJTdGFydChjOiBudW1iZXIpOiBib29sZWFuIHtcclxuXHRcdFx0cmV0dXJuIElkZW50aWZ5ZXJzLmlzU2ltcGxlVW5pY29kZVN0YXJ0KGMpXHJcblx0XHRcdFx0fHwgSWRlbnRpZnllcnMuaXNDb21wbGV4VW5pY29kZVN0YXJ0KGMpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRzdGF0aWMgaXNJZGVudGlmaWVyUGFydChjOiBudW1iZXIpOiBib29sZWFuIHtcclxuXHRcdFx0cmV0dXJuIElkZW50aWZ5ZXJzLmlzU2ltcGxlVW5pY29kZUNvbnRpbnVlKGMpXHJcblx0XHRcdFx0fHwgSWRlbnRpZnllcnMuaXNDb21wbGV4VW5pY29kZUNvbnRpbnVlKGMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBpc1NpbXBsZVVuaWNvZGVDb250aW51ZShjOiBudW1iZXIpOiBib29sZWFuIHtcclxuXHRcdFx0cmV0dXJuIFRva2VuRGVmaW5pdGlvbnMuVU5JQ09ERV9DT05USU5VRV9DT01NT05bY107XHJcblx0XHR9XHRcclxuXHRcdFx0XHJcblx0XHRzdGF0aWMgaXNDb21wbGV4VW5pY29kZUNvbnRpbnVlKGM6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0XHRyZXR1cm4gYyA+IFRva2VuRGVmaW5pdGlvbnMuVU5JQ09ERV9VTkNPTU1PTl9USFJFU0hPTEQgXHJcblx0XHRcdFx0JiYgVG9rZW5EZWZpbml0aW9ucy5VTklDT0RFX0NPTlRJTlVFX1VOQ09NTU9OLnRlc3QodXRpbGl0aWVzLkNoYXJQb2ludHMuZnJvbUNvZGVQb2ludChjKSk7XHJcblx0XHR9XHRcclxuXHRcdFxyXG5cdFx0c3RhdGljIGlzU2ltcGxlVW5pY29kZVN0YXJ0KGM6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0XHRyZXR1cm4gVG9rZW5EZWZpbml0aW9ucy5VTklDT0RFX1NUQVJUX0NPTU1PTltjXTtcclxuXHRcdH1cdFxyXG5cdFx0XHRcclxuXHRcdHN0YXRpYyBpc0NvbXBsZXhVbmljb2RlU3RhcnQoYzogbnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRcdHJldHVybiBjID4gVG9rZW5EZWZpbml0aW9ucy5VTklDT0RFX1VOQ09NTU9OX1RIUkVTSE9MRCBcclxuXHRcdFx0XHQmJiBUb2tlbkRlZmluaXRpb25zLlVOSUNPREVfU1RBUlRfVU5DT01NT04udGVzdCh1dGlsaXRpZXMuQ2hhclBvaW50cy5mcm9tQ29kZVBvaW50KGMpKTtcclxuXHRcdH1cdFxyXG5cdFx0XHJcblx0XHRzdGF0aWMgaXNQdW5jdHVhdGlvblN0YXJ0KGM6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0XHRyZXR1cm4gVG9rZW5EZWZpbml0aW9ucy5QTkNfU0lOR0xFW2NdO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3RzRGVmaW5pdGlvbnMvdHNkLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdXRpbGl0aWVzL0lFeGNlcHRpb24uZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi91dGlsaXRpZXMvQ2hhclBvaW50cy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJJTGV4ZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiVG9rZW5EZWZpbml0aW9ucy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJJZGVudGlmeWVycy50c1wiIC8+XHJcblxyXG5tb2R1bGUgdHJsLmZyb250ZW5kLmxleGljYWwge1xyXG5cclxuICAgIGNvbnN0IFN0YXRlcyA9IHtcclxuICAgICAgICBpZGVudGlmaWVyOiBcInN0YXRlSWRlbnRpZmllclwiLFxyXG4gICAgICAgIHB1bmN0dWF0aW9uOiBcInN0YXRlUHVuY3R1YXRpb25cIixcclxuICAgICAgICBtdWx0aUNvbW1lbnQ6IFwic3RhdGVNdWx0aUNvbW1lbnRcIixcclxuICAgICAgICBzaW5nbGVDb21tZW50OiBcInN0YXRlU2luZ2xlQ29tbWVudFwiLFxyXG4gICAgICAgIGRpdk9yQ29tbWVudDogXCJzdGF0ZURpdk9yQ29tbWVudFwiLFxyXG4gICAgICAgIGRvdE9yTnVtYmVyOiBcInN0YXRlRG90T3JOdW1iZXJcIixcclxuICAgICAgICBlcnJvcjogXCJzdGF0ZUVycm9yXCIsXHJcbiAgICAgICAgZmluaXNoOiBcInN0YXRlRmluaXNoXCIsXHJcbiAgICAgICAgaW5pdDogXCJzdGF0ZUluaXRcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBSZWFkYWJsZVRva2VuVHlwZSA9IHtcclxuICAgICAgICBrZXl3b3JkOiBcImtleXdvcmRcIixcclxuICAgICAgICBpZGVudGlmaWVyOiBcImlkZW50aWZpZXJcIixcclxuICAgICAgICBsaXRlcmFsOiBcImxpdGVyYWxcIixcclxuICAgICAgICBwdW5jdHVhdGlvbjogXCJwdW5jdHVhdGlvblwiLFxyXG4gICAgICAgIGNvbW1lbnQ6IFwiY29tbWVudFwiLFxyXG4gICAgICAgIGVvZjogXCJlb2ZcIixcclxuICAgICAgICBlcnJvcjogXCJlcnJvclwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IFJlYWRhYmxlTGl0ZXJhbFN1YlR5cGUgPSB7XHJcbiAgICAgICAgc3RyaW5nOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG51bWJlcjogXCJudW1iZXJcIixcclxuICAgICAgICBudWxsOiBcIm51bGxcIixcclxuICAgICAgICBib29sZWFuOiBcImJvb2xlYW5cIlxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiB0b1JlYWRhYmxlVG9rZW5UeXBlKHRva2VuVHlwZTogVG9rZW5UeXBlKTogc3RyaW5nIHtcclxuICAgICAgICBzd2l0Y2ggKHRva2VuVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5rZXl3b3JkOiByZXR1cm4gUmVhZGFibGVUb2tlblR5cGUua2V5d29yZDtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuaWRlbnRpZmllcjogcmV0dXJuIFJlYWRhYmxlVG9rZW5UeXBlLmlkZW50aWZpZXI7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmxpdGVyYWw6IHJldHVybiBSZWFkYWJsZVRva2VuVHlwZS5saXRlcmFsO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5wdW5jdHVhdGlvbjogcmV0dXJuIFJlYWRhYmxlVG9rZW5UeXBlLnB1bmN0dWF0aW9uO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5jb21tZW50OiByZXR1cm4gUmVhZGFibGVUb2tlblR5cGUuY29tbWVudDtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuZW9mOiByZXR1cm4gUmVhZGFibGVUb2tlblR5cGUuZW9mO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5lcnJvcjogcmV0dXJuIFJlYWRhYmxlVG9rZW5UeXBlLmVycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIHRva2VuIHR5cGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9SZWFkYWJsZUxpdGVyYWxTdWJUeXBlKGxpdGVyYWxTdWJUeXBlOiBMaXRlcmFsU3ViVHlwZSk6IHN0cmluZyB7XHJcbiAgICAgICAgc3dpdGNoIChsaXRlcmFsU3ViVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIExpdGVyYWxTdWJUeXBlLnN0cmluZzogcmV0dXJuIFJlYWRhYmxlTGl0ZXJhbFN1YlR5cGUuc3RyaW5nO1xyXG4gICAgICAgICAgICBjYXNlIExpdGVyYWxTdWJUeXBlLm51bWJlcjogcmV0dXJuIFJlYWRhYmxlTGl0ZXJhbFN1YlR5cGUubnVtYmVyO1xyXG4gICAgICAgICAgICBjYXNlIExpdGVyYWxTdWJUeXBlLm51bGw6IHJldHVybiBSZWFkYWJsZUxpdGVyYWxTdWJUeXBlLm51bGw7XHJcbiAgICAgICAgICAgIGNhc2UgTGl0ZXJhbFN1YlR5cGUuYm9vbGVhbjogcmV0dXJuIFJlYWRhYmxlTGl0ZXJhbFN1YlR5cGUuYm9vbGVhbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCB0b2tlbiB0eXBlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFBOQyA9IFRva2VuRGVmaW5pdGlvbnMuUE5DX1NJTkdMRTtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTGV4ZXIgaW1wbGVtZW50cyBJTGV4ZXIge1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIENoYXJlY3Rlckxvb2t1cDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSB0b2tlbjogSVRva2VuO1xyXG4gICAgICAgIHByaXZhdGUgY29tbWVudHM6IElUb2tlbltdO1xyXG5cclxuICAgICAgICBwcml2YXRlIGxvb2tBaGVhZFRva2VuOiBJVG9rZW47XHJcbiAgICAgICAgcHJpdmF0ZSBjdXJyZW50VG9rZW46IElUb2tlbjtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBsaW5lbm86IG51bWJlcjtcclxuICAgICAgICBwcml2YXRlIHN0YXJ0TGluZW5vOiBudW1iZXI7XHJcbiAgICAgICAgcHJpdmF0ZSBjdXJyTGluZUN1cnNvcjogbnVtYmVyO1xyXG4gICAgICAgIHByaXZhdGUgcmVsYXRpdmVTdGFydEN1cnNvcjogbnVtYmVyO1xyXG4gICAgICAgIHByaXZhdGUgYWJzb2x1dGVTdGFydEN1cnNvcjogbnVtYmVyO1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0aWF0ZUNoYXJlY3Rlckxvb2t1cE9uY2UoKSB7XHJcbiAgICAgICAgICAgIGlmIChMZXhlci5DaGFyZWN0ZXJMb29rdXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbG9va3VwID0gTGV4ZXIuQ2hhcmVjdGVyTG9va3VwID0ge307XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAvL3doaXRlIHNwYWNlXHJcbiAgICAgICAgICAgIF8uZWFjaCg8YW55PlRva2VuRGVmaW5pdGlvbnMuV1MsICh2YWwsIGtleTogbnVtYmVyKSA9PiBsb29rdXBba2V5XSA9IExleGVyLnByb3RvdHlwZS5zdGF0ZVdoaXRlU3BhY2UpO1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgLy9uZXcgbGluZVxyXG4gICAgICAgICAgICBfLmVhY2goPGFueT5Ub2tlbkRlZmluaXRpb25zLkxULCAodmFsLCBrZXk6IG51bWJlcikgPT4gbG9va3VwW2tleV0gPSBMZXhlci5wcm90b3R5cGUuc3RhdGVMaW5lVGVybWluYXRvcik7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAvL3N0cmluZ1xyXG4gICAgICAgICAgICBsb29rdXBbUE5DLnFtYXJrXSA9IExleGVyLmdlblN0YXRlU3RyaW5nKFBOQy5xbWFyayk7XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMuYXBvc3Ryb3BoZV0gPSBMZXhlci5nZW5TdGF0ZVN0cmluZyhQTkMuYXBvc3Ryb3BoZSk7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAvL251bWJlclxyXG4gICAgICAgICAgICBfLmVhY2goXCIwMTIzNDU2Nzg5XCIsIChudW1DaGFyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb29rdXBbdXRpbGl0aWVzLkNoYXJQb2ludHMuY29kZVBvaW50QXQobnVtQ2hhciwgMCldID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlTnVtYmVyO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMubGJyYWNlXSA9IExleGVyLnByb3RvdHlwZS5zdGF0ZVB1bmN0dWF0aW9uU2luZ2xlO1xyXG4gICAgICAgICAgICBsb29rdXBbUE5DLnJicmFjZV0gPSBMZXhlci5wcm90b3R5cGUuc3RhdGVQdW5jdHVhdGlvblNpbmdsZTtcclxuICAgICAgICAgICAgbG9va3VwW1BOQy5scGFyZW50aF0gPSBMZXhlci5wcm90b3R5cGUuc3RhdGVQdW5jdHVhdGlvblNpbmdsZTtcclxuICAgICAgICAgICAgbG9va3VwW1BOQy5ycGFyZW50aF0gPSBMZXhlci5wcm90b3R5cGUuc3RhdGVQdW5jdHVhdGlvblNpbmdsZTtcclxuICAgICAgICAgICAgbG9va3VwW1BOQy5sYnJhY2tldF0gPSBMZXhlci5wcm90b3R5cGUuc3RhdGVQdW5jdHVhdGlvblNpbmdsZTtcclxuICAgICAgICAgICAgbG9va3VwW1BOQy5yYnJhY2tldF0gPSBMZXhlci5wcm90b3R5cGUuc3RhdGVQdW5jdHVhdGlvblNpbmdsZTtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgIC8vIC4gLjFcclxuICAgICAgICAgICAgbG9va3VwW1BOQy5kb3RdID0gKCkgPT4gU3RhdGVzLmRvdE9yTnVtYmVyO1xyXG5cclxuICAgICAgICAgICAgbG9va3VwW1BOQy5zZW1pY29sb25dID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMuY29tbWFdID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAvLyA8IDw8IDw9IDw8PCA8PD1cclxuICAgICAgICAgICAgbG9va3VwW1BOQy5sZXNzXSA9IExleGVyLmdlblB1bmN0dWF0aW9uU2Nhbm5lcihcclxuICAgICAgICAgICAgICAgIFtbUE5DLmxlc3NdLCBbUE5DLmFzc2lnbl0sIFtQTkMubGVzcywgUE5DLmxlc3NdLCBbUE5DLmxlc3MsIFBOQy5hc3NpZ25dXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyA+ID49ID4+ID4+PSA+Pj4gPj4+PVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLm1vcmVdID0gTGV4ZXIuZ2VuUHVuY3R1YXRpb25TY2FubmVyKFxyXG4gICAgICAgICAgICAgICAgW1tQTkMubW9yZV0sIFtQTkMuYXNzaWduXSwgW1BOQy5tb3JlLCBQTkMubW9yZV0sIFtQTkMubW9yZSwgUE5DLmFzc2lnbl0sIFtQTkMubW9yZSwgUE5DLm1vcmUsIFBOQy5hc3NpZ25dXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyAhICE9ICE9PVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLmV4Y2xdID0gTGV4ZXIuZ2VuUHVuY3R1YXRpb25TY2FubmVyKFxyXG4gICAgICAgICAgICAgICAgW1tQTkMuYXNzaWduXSwgW1BOQy5hc3NpZ24sIFBOQy5hc3NpZ25dXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyAtIC0tIC09XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMubWludXNdID0gTGV4ZXIuZ2VuUHVuY3R1YXRpb25TY2FubmVyKFxyXG4gICAgICAgICAgICAgICAgW1tQTkMubWludXNdLCBbUE5DLmFzc2lnbl1dXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIC8vICsgKysgKy09XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMucGx1c10gPSBMZXhlci5nZW5QdW5jdHVhdGlvblNjYW5uZXIoXHJcbiAgICAgICAgICAgICAgICBbW1BOQy5wbHVzXSwgW1BOQy5hc3NpZ25dXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyAlICU9XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMucGVyY2VudF0gPSBMZXhlci5nZW5QdW5jdHVhdGlvblNjYW5uZXIoXHJcbiAgICAgICAgICAgICAgICBbW1BOQy5hc3NpZ25dXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyAmICYmICY9XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMuYW1wZXJzYW5kXSA9IExleGVyLmdlblB1bmN0dWF0aW9uU2Nhbm5lcihcclxuICAgICAgICAgICAgICAgIFtbUE5DLmFtcGVyc2FuZF0sIFtQTkMuYXNzaWduXV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gfCB8fCB8PVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLnZlcnRpY2FsXSA9IExleGVyLmdlblB1bmN0dWF0aW9uU2Nhbm5lcihcclxuICAgICAgICAgICAgICAgIFtbUE5DLnZlcnRpY2FsXSwgW1BOQy5hc3NpZ25dXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyBeIF49XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMuY2FyZXRdID0gTGV4ZXIuZ2VuUHVuY3R1YXRpb25TY2FubmVyKFxyXG4gICAgICAgICAgICAgICAgW1tQTkMuYXNzaWduXV1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMudGlsZGVdID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMucXVlc3RdID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMuY29sb25dID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcbiAgICAgICAgICAgIC8vID0gPT0gPT09XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMuYXNzaWduXSA9IExleGVyLmdlblB1bmN0dWF0aW9uU2Nhbm5lcihcclxuICAgICAgICAgICAgICAgIFtbUE5DLmFzc2lnbl0sIFtQTkMuYXNzaWduLCBQTkMuYXNzaWduXV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gKiAqPVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLmFzdGVyaXNrXSA9IExleGVyLmdlblB1bmN0dWF0aW9uU2Nhbm5lcihcclxuICAgICAgICAgICAgICAgIFtbUE5DLmFzc2lnbl1dXHJcbiAgICAgICAgICAgICk7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAvLyAvIC89IC8qIC8vIGNvbW1lbnRcclxuICAgICAgICAgICAgbG9va3VwW1BOQy5zbGFzaF0gPSAoKSA9PiBTdGF0ZXMuZGl2T3JDb21tZW50O1xyXG5cclxuICAgICAgICAgICAgLy8gXFwgd2hpdGVzcGFjZVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLmJhY2tzbGFzaF0gPSAoKSA9PiBTdGF0ZXMuaWRlbnRpZmllcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGRlZmF1bHRMZXhlck9wdGlvbnM6IElMZXhlck9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGxvYzogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlYWRhYmxlVG9rZW5zTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgaW5jbHVkZUNvbW1lbnRzQXNOb3JtYWxUb2tlbnM6IHRydWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHByaXZhdGUgY2hhclN0cmVhbTogSUNoYXJhY3RlclN0cmVhbSxcclxuICAgICAgICAgICAgcHJpdmF0ZSBleGNlcHRpb25IYW5kbGVyOiB1dGlsaXRpZXMuSUV4Y2VwdGlvbkhhbmRsZXIsXHJcbiAgICAgICAgICAgIHByaXZhdGUgb3B0aW9ucz86IElMZXhlck9wdGlvbnNcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gXy5kZWZhdWx0cyhcclxuICAgICAgICAgICAgICAgIF8uY2xvbmUob3B0aW9ucyB8fCB7fSksXHJcbiAgICAgICAgICAgICAgICBMZXhlci5kZWZhdWx0TGV4ZXJPcHRpb25zXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMubGluZW5vID0gMTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyTGluZUN1cnNvciA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWVudHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIExleGVyLmluaXRpYXRlQ2hhcmVjdGVyTG9va3VwT25jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGlzRXJyb3IodG9rZW46IElUb2tlbik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnJlYWRhYmxlVG9rZW5zTW9kZSA/XHJcbiAgICAgICAgICAgICAgICB0b2tlbi50eXBlID09PSBSZWFkYWJsZVRva2VuVHlwZS5lcnJvciA6IHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5lcnJvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGlzRW9mKHRva2VuOiBJVG9rZW4pOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5yZWFkYWJsZVRva2Vuc01vZGUgP1xyXG4gICAgICAgICAgICAgICAgdG9rZW4udHlwZSA9PT0gUmVhZGFibGVUb2tlblR5cGUuZW9mIDogdG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLmVvZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGlzQ29tbWVudCh0b2tlbjogSVRva2VuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucmVhZGFibGVUb2tlbnNNb2RlID9cclxuICAgICAgICAgICAgICAgIHRva2VuLnR5cGUgPT09IFJlYWRhYmxlVG9rZW5UeXBlLmNvbW1lbnQgOiB0b2tlbi50eXBlID09PSBUb2tlblR5cGUuY29tbWVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGlzTGl0ZXJhbCh0b2tlbjogSVRva2VuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucmVhZGFibGVUb2tlbnNNb2RlID9cclxuICAgICAgICAgICAgICAgIHRva2VuLnR5cGUgPT09IFJlYWRhYmxlVG9rZW5UeXBlLmxpdGVyYWwgOiB0b2tlbi50eXBlID09PSBUb2tlblR5cGUubGl0ZXJhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGlzUHVuY3R1YXRpb24odG9rZW46IElUb2tlbik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnJlYWRhYmxlVG9rZW5zTW9kZSA/XHJcbiAgICAgICAgICAgICAgICB0b2tlbi50eXBlID09PSBSZWFkYWJsZVRva2VuVHlwZS5wdW5jdHVhdGlvbiA6IHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5wdW5jdHVhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGlzS2V5d29yZCh0b2tlbjogSVRva2VuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucmVhZGFibGVUb2tlbnNNb2RlID9cclxuICAgICAgICAgICAgICAgIHRva2VuLnR5cGUgPT09IFJlYWRhYmxlVG9rZW5UeXBlLmtleXdvcmQgOiB0b2tlbi50eXBlID09PSBUb2tlblR5cGUua2V5d29yZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGlzSWRlbnRpZmllcih0b2tlbjogSVRva2VuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucmVhZGFibGVUb2tlbnNNb2RlID9cclxuICAgICAgICAgICAgICAgIHRva2VuLnR5cGUgPT09IFJlYWRhYmxlVG9rZW5UeXBlLmlkZW50aWZpZXIgOiB0b2tlbi50eXBlID09PSBUb2tlblR5cGUuaWRlbnRpZmllcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpc1B1bmN0dWF0aW9uVmFsdWUodG9rZW46IElUb2tlbiwgdmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1B1bmN0dWF0aW9uKHRva2VuKSAmJiB0b2tlbi52YWx1ZSA9PT0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBpc0tleXdvcmRWYWx1ZSh0b2tlbjogSVRva2VuLCB2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzS2V5d29yZCh0b2tlbikgJiYgdG9rZW4udmFsdWUgPT09IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgaXNJZGVudGlmaWVyVmFsdWUodG9rZW46IElUb2tlbiwgdmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0lkZW50aWZpZXIodG9rZW4pICYmIHRva2VuLnZhbHVlID09PSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtYXRjaFB1bmN0dWF0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtYXRjaEtleXdvcmQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzS2V5d29yZFZhbHVlKHRva2VuLCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbmV4dFRva2VuKCk6IElUb2tlbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvb2tBaGVhZFRva2VuID0gdGhpcy5sb29rQWhlYWRUb2tlbjtcclxuICAgICAgICAgICAgaWYgKGxvb2tBaGVhZFRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvb2tBaGVhZFRva2VuID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFRva2VuID0gbG9va0FoZWFkVG9rZW47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBuZXh0VG9rZW4gPSB0aGlzLmJlZ2luU3RhdGVzKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ29tbWVudChuZXh0VG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmluY2x1ZGVDb21tZW50c0FzTm9ybWFsVG9rZW5zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cy5wdXNoKG5leHRUb2tlbik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cy5wdXNoKG5leHRUb2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRUb2tlbiA9IHRoaXMuYmVnaW5TdGF0ZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IHdoaWxlICh0aGlzLmlzQ29tbWVudChuZXh0VG9rZW4pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXh0VG9rZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGJlZ2luU3RhdGVzKCk6IElUb2tlbiB7XHJcbiAgICAgICAgICAgIGxldCBuZXh0U3RhdGUgPSB0aGlzLnN0YXRlSW5pdCgpO1xyXG4gICAgICAgICAgICB3aGlsZSAobmV4dFN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0U3RhdGUgPSB0aGlzW25leHRTdGF0ZV0uY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW4gPSB0aGlzLmNyZWF0ZVRva2VuKFRva2VuVHlwZS5lcnJvciwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJlYWRhYmxlVG9rZW5zTW9kZSAmJiB0aGlzLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRva2VuLnR5cGUgPSB0b1JlYWRhYmxlVG9rZW5UeXBlKHRoaXMudG9rZW4udHlwZSBhcyBUb2tlblR5cGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG9rZW4uc3ViVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW4uc3ViVHlwZSA9IHRvUmVhZGFibGVMaXRlcmFsU3ViVHlwZSh0aGlzLnRva2VuLnN1YlR5cGUgYXMgTGl0ZXJhbFN1YlR5cGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbGF0ZXN0VG9rZW4oKTogSVRva2VuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFRva2VuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGxvb2tBaGVhZE5leHRUb2tlbigpOiBJVG9rZW4ge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VG9rZW4gPSB0aGlzLmN1cnJlbnRUb2tlbjtcclxuICAgICAgICAgICAgdGhpcy5sb29rQWhlYWRUb2tlbiA9IHRoaXMubmV4dFRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUb2tlbiA9IGN1cnJlbnRUb2tlbjtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9va0FoZWFkVG9rZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaGFzTmV4dCgpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuaXNFb2YodG9rZW4pICYmICF0aGlzLmlzRXJyb3IodG9rZW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldENvbW1lbnRzKCk6IElUb2tlbltdIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tbWVudHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0Q3VycmVudEN1cnNvclBvcygpOiBJVG9rZW5Qb3NpdGlvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBsaW5lOiB0aGlzLmxpbmVubyxcclxuICAgICAgICAgICAgICAgIGNvbHVtbjogdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpIC0gdGhpcy5jdXJyTGluZUN1cnNvclxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8gZmluYWwgc3RhdGVzXHJcblx0XHRcclxuICAgICAgICBwcml2YXRlIHN0YXRlRmluaXNoKCkgeyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGVFcnJvcigpIHsgfVxyXG4gICAgICAgIC8vLy8vLy8gZmluYWwgc3RhdGVzIC8vLy8vL1xyXG5cdFx0XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIFN0YXRlc1xyXG5cdFx0XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0ZUluaXQoKSB7XHJcbiAgICAgICAgICAgIC8vY2xlYW51cCBjdXJyZW50IHRva2VuXHJcbiAgICAgICAgICAgIHRoaXMudG9rZW4gPSB1bmRlZmluZWQ7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAvL3RyYWNrIGN1cnNvciBwb3NpdGlvblxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0TGluZW5vID0gdGhpcy5saW5lbm87XHJcbiAgICAgICAgICAgIHRoaXMucmVsYXRpdmVTdGFydEN1cnNvciA9IHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKSAtIHRoaXMuY3VyckxpbmVDdXJzb3I7XHJcbiAgICAgICAgICAgIHRoaXMuYWJzb2x1dGVTdGFydEN1cnNvciA9IHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYXJTdHJlYW0uaXNFb2YoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuY3JlYXRlVG9rZW4oVG9rZW5UeXBlLmVvZiwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZmluaXNoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgbmV4dFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKElkZW50aWZ5ZXJzLmlzSWRlbnRpZmllclN0YXJ0KGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uYndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgICAgICBuZXh0U3RhdGUgPSBTdGF0ZXMuaWRlbnRpZmllcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyQ2FjaGVkSGFuZGxlcjogKCkgPT4gc3RyaW5nID0gTGV4ZXIuQ2hhcmVjdGVyTG9va3VwW2NoYXJdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXJDYWNoZWRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmJ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRTdGF0ZSA9IGNoYXJDYWNoZWRIYW5kbGVyLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4Y2VwdGlvbkhhbmRsZXIuYWRkRXhjZXB0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVuZXhwZWN0ZWQgdG9rZW4gXFxcIlwiICsgdXRpbGl0aWVzLkNoYXJQb2ludHMuZnJvbUNvZGVQb2ludChjaGFyKSArIFwiXFxcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbmVubyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0U3RhdGUgPSBTdGF0ZXMuZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXh0U3RhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRlSWRlbnRpZmllcigpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBsZXQgY2hhckdlbjogdXRpbGl0aWVzLklTdHJpbmdGcm9tQ2hhclBvaW50ID0gdXRpbGl0aWVzLkNoYXJQb2ludHMuY3JlYXRlU3RyaW5nRnJvbUNoYXJQb2ludEdlbmVyYXRvcigpLFxyXG4gICAgICAgICAgICAgICAgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNjYW5Vbmljb2RlRXNjYXBlU2VxdWVuY2UoY2hhckdlbiwgY2hhcikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhjZXB0aW9uSGFuZGxlci5hZGRFeGNlcHRpb24oXCJcIiwgdGhpcy5saW5lbm8sIHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGVzLmVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKElkZW50aWZ5ZXJzLmlzSWRlbnRpZmllclBhcnQoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2NhblVuaWNvZGVFc2NhcGVTZXF1ZW5jZShjaGFyR2VuLCBjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4Y2VwdGlvbkhhbmRsZXIuYWRkRXhjZXB0aW9uKFwiXCIsIHRoaXMubGluZW5vLCB0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGVzLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmJ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdHlwZSxcclxuICAgICAgICAgICAgICAgIHN1YlR5cGUsXHJcbiAgICAgICAgICAgICAgICBzdHI6IGFueSA9IGNoYXJHZW4uZ2V0U3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmIChJZGVudGlmeWVycy5pc0tleXdvcmQoc3RyKSkge1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9IFRva2VuVHlwZS5rZXl3b3JkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChzdHIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibnVsbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gVG9rZW5UeXBlLmxpdGVyYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YlR5cGUgPSBMaXRlcmFsU3ViVHlwZS5udWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidHJ1ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gVG9rZW5UeXBlLmxpdGVyYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YlR5cGUgPSBMaXRlcmFsU3ViVHlwZS5ib29sZWFuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZmFsc2VcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFRva2VuVHlwZS5saXRlcmFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJUeXBlID0gTGl0ZXJhbFN1YlR5cGUuYm9vbGVhbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBUb2tlblR5cGUuaWRlbnRpZmllcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRva2VuID0gdGhpcy5jcmVhdGVUb2tlbih0eXBlLCBzdHIsIHN1YlR5cGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gU3RhdGVzLmZpbmlzaDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGdlblN0YXRlU3RyaW5nKHN0cmluZ1Rlcm1pbmF0b3JDaGFyOiBudW1iZXIpOiAoKSA9PiBzdHJpbmcge1xyXG4gICAgICAgICAgICAvLyBlc2Mgc2VxIC0+XHJcbiAgICAgICAgICAgIC8vIFxcICcgXCIgXFwgYiBmIG4gciB0IHYgIC0+IHZhbFxyXG4gICAgICAgICAgICAvLyBcXCB4IEhleERpZ2l0IEhleERpZ2l0ICAtPiBoZXggdmFsXHJcbiAgICAgICAgICAgIC8vIFxcIHUgSGV4RGlnaXQgSGV4RGlnaXQgSGV4RGlnaXQgSGV4RGlnaXQgLT4gdSB2YWxcclxuICAgICAgICAgICAgLy8gXFwgbGluZSBjb250IC0+IGlnbm9yZVxyXG4gICAgICAgICAgICAvLyBcXCBkZWNpbWFsIGRpZ2l0IC0+IGlnbm9yZSBkaWdpdFxyXG4gICAgICAgICAgICAvLyBcXCBjaGFyIC0+IGlnbm9yZSBcXFxyXG5cdFx0XHRcclxuICAgICAgICAgICAgLy8gY2Fubm90IGJlIGFuIGFycm93IGZ1bmN0aW9uIGJlY2F1c2UgaXQgYmluZHMgX3RoaXMgLT4gdGhpc1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uZ2V0TmV4dENoYXIoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyR2VuOiB1dGlsaXRpZXMuSVN0cmluZ0Zyb21DaGFyUG9pbnQgPSB1dGlsaXRpZXMuQ2hhclBvaW50cy5jcmVhdGVTdHJpbmdGcm9tQ2hhclBvaW50R2VuZXJhdG9yKCk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5jaGFyU3RyZWFtLmdldE5leHRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09IHN0cmluZ1Rlcm1pbmF0b3JDaGFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhciA9PT0gUE5DLmJhY2tzbGFzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyID0gdGhpcy5jaGFyU3RyZWFtLmdldE5leHRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY2hhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMuYjogY2hhckdlbi5hZGRDaGFyUG9pbnQoOCk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMuZjogY2hhckdlbi5hZGRDaGFyUG9pbnQoMTIpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUE5DLm46IGNoYXJHZW4uYWRkQ2hhclBvaW50KDEwKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFBOQy5yOiBjaGFyR2VuLmFkZENoYXJQb2ludCgxMyk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMudDogY2hhckdlbi5hZGRDaGFyUG9pbnQoOSk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMudjogY2hhckdlbi5hZGRDaGFyUG9pbnQoMTEpOyBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFBOQy54OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5oYW5kbGVTY2FuSGV4RGlnaXRzKDIsIGNoYXJHZW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMudTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGFuZGxlU2NhbkhleERpZ2l0cyg0LCBjaGFyR2VuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGVzLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoSWRlbnRpZnllcnMuaXNMaW5lVGVybWluYXRvcihjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyR2VuLmFkZENoYXJQb2ludChjaGFyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVOZXdMaW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4Y2VwdGlvbkhhbmRsZXIuYWRkRXhjZXB0aW9uKFwidW5jbG9zZWQgc3RyaW5nXCIsIHRoaXMubGluZW5vLCB0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGVzLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhckdlbi5hZGRDaGFyUG9pbnQoY2hhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuY3JlYXRlVG9rZW4oVG9rZW5UeXBlLmxpdGVyYWwsIGNoYXJHZW4uZ2V0U3RyaW5nKCksIExpdGVyYWxTdWJUeXBlLnN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGVzLmZpbmlzaDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGVOdW1iZXIoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgbGV0IGludCA9IHRoaXMuc2NhbkRpZ2l0cygpLFxyXG4gICAgICAgICAgICAgICAgcG9pbnQgPSBpbnQubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGFyU3RyZWFtLm1hdGNoKFBOQy5kb3QpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVjaW1hbCA9IHRoaXMuc2NhbkRlY2ltYWwoKTtcclxuICAgICAgICAgICAgICAgIGlmIChkZWNpbWFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnQgPSBpbnQuY29uY2F0KGRlY2ltYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjYW5FeHBvbmVuc2lhbEFuZENyZWF0ZU51bWJlcihpbnQsIHBvaW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGVEb3RPck51bWJlcigpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmZ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICBsZXQgZGVjaW1hbCA9IHRoaXMuc2NhbkRlY2ltYWwoKTtcclxuICAgICAgICAgICAgaWYgKGRlY2ltYWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NhbkV4cG9uZW5zaWFsQW5kQ3JlYXRlTnVtYmVyKGRlY2ltYWwsIDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmJ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVQdW5jdHVhdGlvblNpbmdsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRlRGl2T3JDb21tZW50KCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uZndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5jaGFyU3RyZWFtLmdldE5leHRDaGFyKCk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoY2hhcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBQTkMuc2xhc2g6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5zaW5nbGVDb21tZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBQTkMuYXN0ZXJpc2s6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5tdWx0aUNvbW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFBOQy5hc3NpZ246XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5id2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uYndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlUHVuY3R1YXRpb25TaW5nbGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGVQdW5jdHVhdGlvblNpbmdsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uZndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW4gPSB0aGlzLmNyZWF0ZVRva2VuRnJvbVBvcyhUb2tlblR5cGUucHVuY3R1YXRpb24pO1xyXG4gICAgICAgICAgICByZXR1cm4gU3RhdGVzLmZpbmlzaDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGVXaGl0ZVNwYWNlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5md2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5pbml0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0ZUxpbmVUZXJtaW5hdG9yKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0TmV4dENoYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLm1hdGNoQ29tcGxleChuZXh0Y2hhciA9PiBcclxuICAgICAgICAgICAgICAgIChjaGFyID09PSBQTkMuY3IgJiYgbmV4dGNoYXIgPT09IFBOQy5sZikgXHJcbiAgICAgICAgICAgICAgICB8fCBuZXh0Y2hhciA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTmV3TGluZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gU3RhdGVzLmluaXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRlU2luZ2xlQ29tbWVudCgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKElkZW50aWZ5ZXJzLmlzTGluZVRlcm1pbmF0b3IoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU5ld0xpbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSB3aGlsZSAoY2hhciAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuY3JlYXRlVG9rZW5Gcm9tUG9zKFRva2VuVHlwZS5jb21tZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5maW5pc2g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRlTXVsdGlDb21tZW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09IFBOQy5hc3Rlcmlzaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoYXJTdHJlYW0ubWF0Y2goUE5DLnNsYXNoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGNlcHRpb25IYW5kbGVyLmFkZEV4Y2VwdGlvbihcInVuY2xvc2VkIGNvbW1lbnRcIiwgdGhpcy5saW5lbm8sIHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5lcnJvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKElkZW50aWZ5ZXJzLmlzTGluZVRlcm1pbmF0b3IoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU5ld0xpbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRva2VuID0gdGhpcy5jcmVhdGVUb2tlbkZyb21Qb3MoVG9rZW5UeXBlLmNvbW1lbnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gU3RhdGVzLmZpbmlzaDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2NhblVuaWNvZGVFc2NhcGVTZXF1ZW5jZShjaGFyR2VuOiB1dGlsaXRpZXMuSVN0cmluZ0Zyb21DaGFyUG9pbnQsIGNoYXI6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gUE5DLmJhY2tzbGFzaCkge1xyXG4gICAgICAgICAgICAgICAgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09IFBOQy51KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhleERpZ2l0ID0gdGhpcy5zY2FuSGV4RGlnaXRzKDQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoZXhEaWdpdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJHZW4uYWRkQ2hhclBvaW50KGhleERpZ2l0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjaGFyR2VuLmFkZENoYXJQb2ludChjaGFyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vL1N0YXRlcy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIFNjYW5uZXJzXHJcbiAgICAgICAgcHJpdmF0ZSBzY2FuRXhwb25lbnNpYWxBbmRDcmVhdGVOdW1iZXIoaW50OiBudW1iZXJbXSwgcG9pbnQ6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIGxldCBleHAgPSB0aGlzLnNjYW5FeHBvbmVudGlhbCgpO1xyXG4gICAgICAgICAgICBpZiAoZXhwID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hhclN0cmVhbS5tYXRjaENvbXBsZXgoY2hhciA9PiBJZGVudGlmeWVycy5pc0lkZW50aWZpZXJQYXJ0KGNoYXIpKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGNlcHRpb25IYW5kbGVyLmFkZEV4Y2VwdGlvbihcIlwiLCB0aGlzLmxpbmVubywgdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IG51bSA9IHRoaXMuY3JlYXRlTnVtYmVyKGludCwgcG9pbnQsIGV4cCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW4gPSB0aGlzLmNyZWF0ZVRva2VuKFRva2VuVHlwZS5saXRlcmFsLCBudW0sIExpdGVyYWxTdWJUeXBlLm51bWJlcik7XHJcbiAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZmluaXNoXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNjYW5EaWdpdHMoKTogbnVtYmVyW10ge1xyXG4gICAgICAgICAgICBsZXQgY2hhcixcclxuICAgICAgICAgICAgICAgIGRpdHMgPSBbXSxcclxuICAgICAgICAgICAgICAgIGN1cnNvclBvcyA9IHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKTtcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNoYXIgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0TmV4dENoYXIoKTtcclxuICAgICAgICAgICAgICAgIGlmIChJZGVudGlmeWVycy5pc0RpZ2l0KGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpZ2l0ID0gdXRpbGl0aWVzLkNoYXJQb2ludHMuZ2V0RGlnaXRGcm9tQ2hhclBvaW50KGNoYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdHMucHVzaChkaWdpdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgY3VyckN1cnNvcnBvcztcclxuICAgICAgICAgICAgaWYgKGNoYXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY3VyckN1cnNvcnBvcyA9IHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5id2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgICAgIGN1cnJDdXJzb3Jwb3MgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGN1cnJDdXJzb3Jwb3MgLSBjdXJzb3JQb3MgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkaXRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNjYW5EZWNpbWFsKCk6IG51bWJlcltdIHtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0UG9zID0gdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpLFxyXG4gICAgICAgICAgICAgICAgZGlnaXRzID0gdGhpcy5zY2FuRGlnaXRzKCksXHJcbiAgICAgICAgICAgICAgICBlbmRQb3MgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCksXHJcbiAgICAgICAgICAgICAgICBkaWdpdFJhbmdlID0gZW5kUG9zIC0gc3RhcnRQb3M7XHJcbiAgICAgICAgICAgIGlmIChkaWdpdFJhbmdlICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlnaXRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNjYW5FeHBvbmVudGlhbCgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gUE5DLmV4cCB8fCBjaGFyID09PSBQTkMuZXhwYikge1xyXG4gICAgICAgICAgICAgICAgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5lZ2F0aXZlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09IFBOQy5taW51cykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5lZ2F0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgIT09IFBOQy5wbHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmJ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGRpZ2l0cyA9IHRoaXMuc2NhbkRpZ2l0cygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpZ2l0cyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGNlcHRpb25IYW5kbGVyLmFkZEV4Y2VwdGlvbihcImV4cG9uZW50aWFsIHNob3VsZCBwb3N0Zml4ZWQgYnkgbnVtYmVyc1wiLCB0aGlzLmxpbmVubywgdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gdGhpcy5jcmVhdGVOdW1iZXIoZGlnaXRzLCBkaWdpdHMubGVuZ3RoLCAwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZWdhdGl2ZSA/IC1udW0gOiBudW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hhciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uYndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNjYW5IZXhEaWdpdHModGltZXM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjYW5IZXhEaWdpdHNUaW1lcyh0aW1lcykpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhleFN0ciA9IHRoaXMuY2hhclN0cmVhbS50b2tlbml6ZShjaGFyIC0gdGltZXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGhleFN0ciwgMTYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNjYW5IZXhEaWdpdHNUaW1lcyh0aW1lczogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGxldCBzdGFydGluZ1BvcyA9IHRpbWVzO1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFJZGVudGlmeWVycy5pc0hleERpZ2l0KGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmJ3ZEN1cnNvclJhbmdlKHN0YXJ0aW5nUG9zIC0gKHRpbWVzIC0gMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSB3aGlsZSAoLS10aW1lcyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgZ2VuUHVuY3R1YXRpb25TY2FubmVyKGNhbmRpY2F0ZVB1bmNzOiBudW1iZXJbXVtdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RMZW4gPSBfLmxhc3QoY2FuZGljYXRlUHVuY3MpLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IHB1bmNzTG9va3VwID0gXy5tYXAobmV3IEFycmF5KGxhc3RMZW4pLCAoKSA9PiBuZXcgT2JqZWN0KCkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjdXJyID0gbGFzdExlbiAtIDE7IGN1cnIgIT09IC0xOyAtLWN1cnIpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBjYW5kaWNhdGVQdW5jcy5sZW5ndGggLSAxOyBpICE9PSAtMTsgLS1pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGMgPSBjYW5kaWNhdGVQdW5jc1tpXVtjdXJyXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdW5jc0xvb2t1cFtjdXJyXVtjXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY2Fubm90IHVzZSBhcnJvdyBmdW5jdGlvbiBiZWNhdXNlIGl0IGNvbmZ1c2UgdGhpcyB3aXRoIF90aGlzIFxyXG4gICAgICAgICAgICAvLyBpbiB0aGUgY29tcGxpbGVkIHR5cGVzY3JpcHQgdmVyc2lvblxyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uZndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RMZW47ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5jaGFyU3RyZWFtLmdldE5leHRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwdW5jc0xvb2t1cFtpXVtjaGFyXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hhciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uYndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuY3JlYXRlVG9rZW5Gcm9tUG9zKFRva2VuVHlwZS5wdW5jdHVhdGlvbiwgdGhpcy5zdGFydFBvcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGVzLmZpbmlzaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy9TY2FubmVycy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIExleCBvYmplY3QgY3JlYXRvcnNcclxuICAgICAgICBwcml2YXRlIGNyZWF0ZVBvcygpOiBJVG9rZW5Tb3VyY2VMb2NhdGlvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdGFydDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmU6IHRoaXMuc3RhcnRMaW5lbm8sXHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uOiB0aGlzLnJlbGF0aXZlU3RhcnRDdXJzb3JcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlbmQ6IHRoaXMuZ2V0Q3VycmVudEN1cnNvclBvcygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgY3JlYXRlVG9rZW5Gcm9tUG9zKHR5cGU6IHN0cmluZyB8IFRva2VuVHlwZSwgc3ViVHlwZT86IHN0cmluZyk6IElUb2tlbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jaGFyU3RyZWFtLnRva2VuaXplKHRoaXMuYWJzb2x1dGVTdGFydEN1cnNvcik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVRva2VuKHR5cGUsIHZhbHVlLCBzdWJUeXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgY3JlYXRlVG9rZW4odHlwZTogc3RyaW5nIHwgVG9rZW5UeXBlLCB2YWx1ZTogYW55LCBzdWJUeXBlPzogc3RyaW5nIHwgTGl0ZXJhbFN1YlR5cGUpOiBJVG9rZW4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbjogSVRva2VuID0geyB0eXBlLCB2YWx1ZSwgc3ViVHlwZSB9O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxvYykge1xyXG4gICAgICAgICAgICAgICAgdG9rZW4ubG9jID0gdGhpcy5jcmVhdGVQb3MoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICAgICAgfVxyXG5cdFx0XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy9MZXggb2JqZWN0IGNyZWF0b3JzLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIEhhbmRsZXJzXHJcblx0XHRcclxuICAgICAgICBwcml2YXRlIGdlbkludGVnZXJGcm9tQXJyYXkoZGlnaXRzLCBmcm9tLCB0bykge1xyXG4gICAgICAgICAgICBsZXQgbnVtID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGZyb207IGkgPCB0bzsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBudW0gPSAxMCAqIG51bSArIGRpZ2l0c1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBjcmVhdGVOdW1iZXIoZGlnaXRzLCBwb2ludCwgZXhwKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGFydFBvaW50ID0gcG9pbnQgKyBleHAsXHJcbiAgICAgICAgICAgICAgICBpbnRQYXJ0ID0gMCwgZGVjUGFydCA9IDA7XHJcbiAgICAgICAgICAgIGlmIChzdGFydFBvaW50IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IHRoaXMuZ2VuSW50ZWdlckZyb21BcnJheShkaWdpdHMsIDAsIGRpZ2l0cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bSAvIE1hdGgucG93KDEwLCBwb2ludCAtIGV4cCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhcnRQb2ludCA+IGRpZ2l0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBudW0gPSB0aGlzLmdlbkludGVnZXJGcm9tQXJyYXkoZGlnaXRzLCAwLCBkaWdpdHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudW0gKiBNYXRoLnBvdygxMCwgc3RhcnRQb2ludCAtIGRpZ2l0cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IHRoaXMuZ2VuSW50ZWdlckZyb21BcnJheShkaWdpdHMsIDAsIHN0YXJ0UG9pbnQpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlYyA9IHRoaXMuZ2VuSW50ZWdlckZyb21BcnJheShkaWdpdHMsIHN0YXJ0UG9pbnQsIGRpZ2l0cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bSArIGRlYyAvIE1hdGgucG93KDEwLCBkaWdpdHMubGVuZ3RoIC0gc3RhcnRQb2ludCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaGFuZGxlU2NhbkhleERpZ2l0cyhudW06IG51bWJlciwgY2hhckdlbjogdXRpbGl0aWVzLklTdHJpbmdGcm9tQ2hhclBvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGxldCBoZXhEaWdpdCA9IHRoaXMuc2NhbkhleERpZ2l0cyhudW0pO1xyXG4gICAgICAgICAgICBpZiAoaGV4RGlnaXQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGNlcHRpb25IYW5kbGVyLmFkZEV4Y2VwdGlvbihcIlwiLCB0aGlzLmxpbmVubywgdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNoYXJHZW4uYWRkQ2hhclBvaW50KGhleERpZ2l0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaGFuZGxlTmV3TGluZSgpIHtcclxuICAgICAgICAgICAgKyt0aGlzLmxpbmVubztcclxuICAgICAgICAgICAgdGhpcy5jdXJyTGluZUN1cnNvciA9IHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKTtcclxuICAgICAgICB9XHRcdFxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vL0hhbmRsZXJzLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgfVxyXG59XHJcblxyXG4iLG51bGwsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJJRXhjZXB0aW9uLmQudHNcIiAvPlxyXG5cclxubW9kdWxlIHRybC5mcm9udGVuZC51dGlsaXRpZXMge1xyXG5cdGV4cG9ydCBjbGFzcyBFeGNlcHRpb25IYW5kbGVyIGltcGxlbWVudHMgSUV4Y2VwdGlvbkhhbmRsZXIge1xyXG5cdFx0cHJpdmF0ZSBleGNlcHRpb25zOiBJRXhjZXB0aW9uW10gPSBbXTtcclxuXHRcdFxyXG5cdFx0cHVibGljIGNvbnN0cnVjdG9yKCl7fVxyXG5cdFx0XHJcblx0XHRwdWJsaWMgYWRkRXhjZXB0aW9uKG1zZzogc3RyaW5nLCBsaW5lOiBudW1iZXIsIGNvbHVtbjogbnVtYmVyKSB7XHJcblx0XHRcdGxldCBleGNlcHRpb246IElFeGNlcHRpb24gPSB7XHJcblx0XHRcdFx0cG9zOiB7XHJcblx0XHRcdFx0XHRjb2x1bW4sIFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVcclxuXHRcdFx0XHR9LFx0XHRcclxuXHRcdFx0XHRtc2c6IG1zZ1xyXG5cdFx0XHR9O1xyXG5cdFx0XHR0aGlzLmV4Y2VwdGlvbnMucHVzaChleGNlcHRpb24pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwdWJsaWMgaGFzRXhjZXB0aW9ucygpOiBib29sZWFuIHtcclxuXHRcdFx0cmV0dXJuICFfLmlzRW1wdHkodGhpcy5leGNlcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIGNsZWFyKCk6IHZvaWQge1xyXG5cdFx0XHR0aGlzLmV4Y2VwdGlvbnMubGVuZ3RoID0gMDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIGdldEV4Y2VwdGlvbnMoKTogSUV4Y2VwdGlvbltdIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZXhjZXB0aW9ucztcclxuXHRcdH1cclxuXHR9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHNEZWZpbml0aW9ucy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi91dGlsaXRpZXMvQ2hhclBvaW50cy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJJQ2hhcmFjdGVyU3RyZWFtLmQudHNcIiAvPlxyXG5cclxubW9kdWxlIHRybC5mcm9udGVuZC5sZXhpY2FsIHtcclxuXHRcclxuXHRleHBvcnQgY2xhc3MgQ2hhcmFjdGVyU3RyZWFtIGltcGxlbWVudHMgSUNoYXJhY3RlclN0cmVhbSB7XHJcblx0XHRwcml2YXRlIGN1cnNvcjtcclxuXHJcblx0XHRwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBzcmM6IHN0cmluZykge1xyXG5cdFx0XHR0aGlzLmN1cnNvciA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0cHVibGljIGdldE5leHRDaGFyKCk6IG51bWJlciB7XHJcblx0XHRcdGlmKHRoaXMuaGFzTmV4dCgpKSB7XHJcblx0XHRcdFx0cmV0dXJuIHV0aWxpdGllcy5DaGFyUG9pbnRzLmNvZGVQb2ludEF0KHRoaXMuc3JjLCB0aGlzLmN1cnNvcisrKTtcclxuXHRcdFx0fVx0XHRcdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHB1YmxpYyBnZXRDaGFyKCk6IG51bWJlciB7XHJcblx0XHRcdHJldHVybiB1dGlsaXRpZXMuQ2hhclBvaW50cy5jb2RlUG9pbnRBdCh0aGlzLnNyYywgdGhpcy5jdXJzb3IpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHB1YmxpYyBnZXRDdXJzb3IoKTogbnVtYmVyIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY3Vyc29yO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwdWJsaWMgYndkQ3Vyc29yKCkge1xyXG5cdFx0XHQtLXRoaXMuY3Vyc29yO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwdWJsaWMgZndkQ3Vyc29yKCkge1xyXG5cdFx0XHRpZih0aGlzLmhhc05leHQoKSkge1xyXG5cdFx0XHRcdCsrdGhpcy5jdXJzb3I7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIGJ3ZEN1cnNvclJhbmdlKHJhbmdlOiBudW1iZXIpIHtcclxuXHRcdFx0dGhpcy5jdXJzb3IgPSBNYXRoLm1heCh0aGlzLmN1cnNvciAtIHJhbmdlLCAwKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIHRva2VuaXplKHN0YXJ0UG9zOiBudW1iZXIpOiBzdHJpbmcge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5zcmMuc3Vic3RyaW5nKHN0YXJ0UG9zLCB0aGlzLmN1cnNvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHB1YmxpYyBtYXRjaChjaGFyTWF0Y2g6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0XHRsZXQgY2hhciA9IHRoaXMuZ2V0TmV4dENoYXIoKTtcclxuXHRcdFx0aWYoY2hhciA9PT0gY2hhck1hdGNoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0aWYoY2hhciAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHR0aGlzLmJ3ZEN1cnNvcigpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIG1hdGNoQ29tcGxleChjb21wYXJhdG9yOiAoY2hhcjogbnVtYmVyKSA9PiBib29sZWFuKTogYm9vbGVhbiB7XHJcblx0XHRcdGxldCBjaGFyID0gdGhpcy5nZXROZXh0Q2hhcigpO1xyXG5cdFx0XHRpZihjb21wYXJhdG9yKGNoYXIpKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0aWYoY2hhciAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHR0aGlzLmJ3ZEN1cnNvcigpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIGlzRW9mKCk6IGJvb2xlYW4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jdXJzb3IgPj0gdGhpcy5zcmMubGVuZ3RoO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwcml2YXRlIGhhc05leHQoKTogYm9vbGVhbiB7XHJcblx0XHRcdHJldHVybiB0aGlzLmN1cnNvciA8IHRoaXMuc3JjLmxlbmd0aDtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHNEZWZpbml0aW9ucy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJsZXhpY2FsL0xleGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cInV0aWxpdGllcy9FeGNlcHRpb24udHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwibGV4aWNhbC9DaGFyYWN0ZXJTdHJlYW0udHNcIiAvPlxyXG5cclxubW9kdWxlIHRybC5mcm9udGVuZC5hcGkge1xyXG5cclxuXHRpbnRlcmZhY2UgSVRva2VuaXplUmVzdWx0IHtcclxuXHRcdHRva2VuczogbGV4aWNhbC5JVG9rZW5bXSxcclxuXHRcdGV4Y2VwdGlvbnM/OiB1dGlsaXRpZXMuSUV4Y2VwdGlvbltdXHJcblx0fVxyXG5cclxuXHRleHBvcnQgZnVuY3Rpb24gdG9rZW5pemUoc3JjOiBzdHJpbmcsIG9wdGlvbnM/OiBsZXhpY2FsLklMZXhlck9wdGlvbnMpOiBJVG9rZW5pemVSZXN1bHQge1xyXG5cdFx0Y29uc3QgY3MgPSBuZXcgbGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0oc3JjKSxcclxuXHRcdFx0ZWggPSBuZXcgdXRpbGl0aWVzLkV4Y2VwdGlvbkhhbmRsZXIoKSxcclxuXHRcdFx0bGV4ID0gbmV3IGxleGljYWwuTGV4ZXIoY3MsIGVoLCBvcHRpb25zKTtcclxuXHJcblx0XHRjb25zdCB0b2tlbnM6IGxleGljYWwuSVRva2VuW10gPSBbXTtcclxuXHRcdHdoaWxlIChsZXguaGFzTmV4dCgpKSB7XHJcblx0XHRcdGNvbnN0IHRva2VuID0gbGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XHJcblx0XHR9O1xyXG5cclxuXHRcdGxldCB0b2tlbml6ZVJlc3VsdDogSVRva2VuaXplUmVzdWx0ID0ge1xyXG5cdFx0XHR0b2tlbnM6IHRva2Vuc1xyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAoZWguaGFzRXhjZXB0aW9ucygpKSB7XHJcblx0XHRcdHRva2VuaXplUmVzdWx0LmV4Y2VwdGlvbnMgPSBlaC5nZXRFeGNlcHRpb25zKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdG9rZW5pemVSZXN1bHQ7XHJcblx0fVxyXG5cclxufSAiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiSU5vZGUudHNcIiAvPlxyXG5cclxubW9kdWxlIHRybC5mcm9udGVuZC5zeW50YXgge1xyXG4gICAgXHJcbiAgICBleHBvcnQgY2xhc3MgTm9kZUZhY3Rvcnkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZW5hYmxlUG9zOiBib29sZWFuKSB7fVxyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgY3JlYXRlTm9kZShub2RlLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZW5hYmxlUG9zKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmxvYyA9IGxvYztcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVQcm9ncmFtKGJvZHk6IElTdGF0ZW1lbnRbXSwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElQcm9ncmFtIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlByb2dyYW1cIixcclxuICAgICAgICAgICAgICAgIGJvZHlcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudEVtcHR5KGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJRW1wdHlTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRW1wdHlTdGF0ZW1lbnRcIlxyXG4gICAgICAgICAgICB9LCBsb2MpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50QmxvY2soYm9keTogSVN0YXRlbWVudFtdLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUJsb2NrU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJsb2NrU3RhdGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICBib2R5XHJcbiAgICAgICAgICAgIH0sIGxvYyk7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTdGF0ZW1lbnRFeHByZXNzaW9uKGV4cHJlc3Npb246IElFeHByZXNzaW9uLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUV4cHJlc3Npb25TdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRXhwcmVzc2lvblN0YXRlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvblxyXG4gICAgICAgICAgICB9LCBsb2MpOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50SWYodGVzdDogSUV4cHJlc3Npb24sIGNvbnNlcXVlbnQ6IElTdGF0ZW1lbnQsIGFsdGVybmF0ZT86IElTdGF0ZW1lbnQsIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJSWZTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiSWZTdGF0ZW1lbnRcIixcclxuICAgICAgICAgICAgICAgIHRlc3QsXHJcbiAgICAgICAgICAgICAgICBjb25zZXF1ZW50LFxyXG4gICAgICAgICAgICAgICAgYWx0ZXJuYXRlXHJcbiAgICAgICAgICAgIH0sIGxvYyk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50QnJlYWsobGFiZWw6IElJZGVudGlmaWVyLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUJyZWFrU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJyZWFrU3RhdGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICB9LCBsb2MpOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudENvbnRpbnVlKGxhYmVsOiBJSWRlbnRpZmllciwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElDb250aW51ZVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJDb250aW51ZVN0YXRlbWVudFwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgIH0sIGxvYyk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50V2l0aChvYmo6IElFeHByZXNzaW9uLCBib2R5OiBJU3RhdGVtZW50LCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVdpdGhTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiV2l0aFN0YXRlbWVudFwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9iaixcclxuICAgICAgICAgICAgICAgIGJvZHlcclxuICAgICAgICAgICAgfSwgbG9jKTsgXHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudFN3aXRjaChkaXNjcmltaW5hbnQ6IElFeHByZXNzaW9uLCBjYXNlczogSVN3aXRjaENhc2VbXSwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElTd2l0Y2hTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiU3dpdGNoU3RhdGVtZW50XCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGlzY3JpbWluYW50LFxyXG4gICAgICAgICAgICAgICAgY2FzZXNcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudFJldHVybihhcmd1bWVudDogSUV4cHJlc3Npb24sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJUmV0dXJuU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlJldHVyblN0YXRlbWVudFwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFyZ3VtZW50XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTdGF0ZW1lbnRMYWJlbGVkKGxhYmVsOiBJSWRlbnRpZmllciwgYm9keTogSVN0YXRlbWVudCwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElMYWJlbGVkU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkxhYmVsZWRTdGF0ZW1lbnRcIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgICAgIGJvZHlcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50VGhyb3coYXJndW1lbnQ6IElFeHByZXNzaW9uLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVRocm93U3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlRocm93U3RhdGVtZW50XCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYXJndW1lbnRcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudFRyeShibG9jazogSUJsb2NrU3RhdGVtZW50LCBoYW5kbGVyOiBJQ2F0Y2hDbGF1c2UsIGZpbmFsaXplcjogSUJsb2NrU3RhdGVtZW50LCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVRyeVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJUcnlTdGF0ZW1lbnRcIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBibG9jayxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXIsXHJcbiAgICAgICAgICAgICAgICBmaW5hbGl6ZXJcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudFdoaWxlKHRlc3Q6IElFeHByZXNzaW9uLCBib2R5OiBJU3RhdGVtZW50LCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVdoaWxlU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIldoaWxlU3RhdGVtZW50XCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGVzdCxcclxuICAgICAgICAgICAgICAgIGJvZHlcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudERvV2hpbGUoYm9keTogSVN0YXRlbWVudCwgdGVzdDogSUV4cHJlc3Npb24sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJRG9XaGlsZVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJEb1doaWxlU3RhdGVtZW50XCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYm9keSxcclxuICAgICAgICAgICAgICAgIHRlc3RcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudEZvcihpbml0OiBJVmFyaWFibGVEZWNsYXJhdGlvbiB8IElFeHByZXNzaW9uLCB0ZXN0OiBJRXhwcmVzc2lvbiwgdXBkYXRlOiBJRXhwcmVzc2lvbiwgYm9keTogSVN0YXRlbWVudCwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElGb3JTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRm9yU3RhdGVtZW50XCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW5pdCxcclxuICAgICAgICAgICAgICAgIHRlc3QsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGUsXHJcbiAgICAgICAgICAgICAgICBib2R5XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTdGF0ZW1lbnRGb3JJbihsZWZ0OiBJVmFyaWFibGVEZWNsYXJhdGlvbiB8IElFeHByZXNzaW9uLCByaWdodDogSUV4cHJlc3Npb24sIGJvZHk6IElTdGF0ZW1lbnQsIGVhY2g6IGJvb2xlYW4sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJRm9ySW5TdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRm9ySW5TdGF0ZW1lbnRcIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZWZ0LFxyXG4gICAgICAgICAgICAgICAgcmlnaHQsXHJcbiAgICAgICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICAgICAgZWFjaFxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50RGVidWdnZXIobG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElEZWJ1Z2dlclN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJGb3JJblN0YXRlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgbG9jXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVEZWNsYXJhdGlvbkZ1bmN0aW9uKGlkOiBJSWRlbnRpZmllciwgcGFyYW1zOiBJSWRlbnRpZmllcltdLCBib2R5OiBJQmxvY2tTdGF0ZW1lbnQsIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJRnVuY3Rpb25EZWNsYXJhdGlvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJGdW5jdGlvbkRlY2xhcmF0aW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXMsXHJcbiAgICAgICAgICAgICAgICBib2R5XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVEZWNsYXJhdGlvblZhcmlhYmxlKGRlY2xhcmF0aW9uczogSVZhcmlhYmxlRGVjbGFyYXRvcltdLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVZhcmlhYmxlRGVjbGFyYXRpb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiVmFyaWFibGVEZWNsYXJhdGlvblwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucyxcclxuICAgICAgICAgICAgICAgIGtpbmQ6IFwidmFyXCJcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVZhcmlhYmxlRGVjbGFyYXRvcihpZDogSUlkZW50aWZpZXIsIGluaXQ6IElFeHByZXNzaW9uLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVZhcmlhYmxlRGVjbGFyYXRvciB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJWYXJpYWJsZURlY2xhcmF0b3JcIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgIGluaXRcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUV4cHJlc3Npb25UaGlzKGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJVGhpc0V4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiVGhpc0V4cHJlc3Npb25cIixcclxuICAgICAgICAgICAgICAgIGxvY1xyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRXhwcmVzc2lvbkFycmF5KGVsZW1lbnRzOiBJRXhwcmVzc2lvbltdLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUFycmF5RXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJBcnJheUV4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50c1xyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRXhwcmVzc2lvbk9iamVjdChwcm9wZXJ0aWVzOiBJUHJvcGVydHlbXSwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElPYmplY3RFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIk9iamVjdEV4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVPYmplY3RQcm9wZXJ0eShrZXk6IElMaXRlcmFsIHwgSUlkZW50aWZpZXIsIHZhbHVlOiBJRXhwcmVzc2lvbiwga2luZDogc3RyaW5nLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVByb3BlcnR5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlByb3BlcnR5XCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBraW5kXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVFeHByZXNzaW9uRnVuY3Rpb24oaWQ6IElJZGVudGlmaWVyLCBwYXJhbXM6IElJZGVudGlmaWVyW10sIGJvZHk6IElCbG9ja1N0YXRlbWVudCwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElGdW5jdGlvbkV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRnVuY3Rpb25FeHByZXNzaW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXMsXHJcbiAgICAgICAgICAgICAgICBib2R5XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVFeHByZXNzaW9uU2VxdWVuY2UoZXhwcmVzc2lvbnM6IElFeHByZXNzaW9uW10sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJU2VxdWVuY2VFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlNlcXVlbmNlRXhwcmVzc2lvblwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb25zXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVFeHByZXNzaW9uVW5hcnkob3BlcmF0b3I6IHN0cmluZywgcHJlZml4OiBib29sZWFuLCBhcmd1bWVudDogSUV4cHJlc3Npb24sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJVW5hcnlFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlVuYXJ5RXhwcmVzc2lvblwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yLFxyXG4gICAgICAgICAgICAgICAgcHJlZml4LFxyXG4gICAgICAgICAgICAgICAgYXJndW1lbnRcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUV4cHJlc3Npb25CaW5hcnkob3BlcmF0b3I6IHN0cmluZywgbGVmdDogSUV4cHJlc3Npb24sIHJpZ2h0OiBJRXhwcmVzc2lvbiwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElCaW5hcnlFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJpbmFyeUV4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcixcclxuICAgICAgICAgICAgICAgIGxlZnQsXHJcbiAgICAgICAgICAgICAgICByaWdodFxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRXhwcmVzc2lvbkFzc2lnbm1lbnQob3BlcmF0b3I6IHN0cmluZywgbGVmdDogSUV4cHJlc3Npb24sIHJpZ2h0OiBJRXhwcmVzc2lvbiwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElBc3NpZ25tZW50RXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJBc3NpZ25tZW50RXhwcmVzc2lvblwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yLFxyXG4gICAgICAgICAgICAgICAgbGVmdCxcclxuICAgICAgICAgICAgICAgIHJpZ2h0XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVFeHByZXNzaW9uVXBkYXRlKG9wZXJhdG9yOiBzdHJpbmcsIGFyZ3VtZW50OiBJRXhwcmVzc2lvbiwgcHJlZml4OiBib29sZWFuLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVVwZGF0ZUV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiVXBkYXRlRXhwcmVzc2lvblwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yLFxyXG4gICAgICAgICAgICAgICAgYXJndW1lbnQsXHJcbiAgICAgICAgICAgICAgICBwcmVmaXhcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUV4cHJlc3Npb25Mb2dpY2FsKG9wZXJhdG9yOiBzdHJpbmcsIGxlZnQ6IElFeHByZXNzaW9uLCByaWdodDogSUV4cHJlc3Npb24sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJTG9naWNhbEV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiTG9naWNhbEV4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcixcclxuICAgICAgICAgICAgICAgIGxlZnQsXHJcbiAgICAgICAgICAgICAgICByaWdodFxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRXhwcmVzc2lvbkNvbmRpdGlvbmFsKHRlc3Q6IElFeHByZXNzaW9uLCBhbHRlcm5hdGU6IElFeHByZXNzaW9uLCBjb25zZXF1ZW50OiBJRXhwcmVzc2lvbiwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElDb25kaXRpb25hbEV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQ29uZGl0aW9uYWxFeHByZXNzaW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGVzdCxcclxuICAgICAgICAgICAgICAgIGFsdGVybmF0ZSxcclxuICAgICAgICAgICAgICAgIGNvbnNlcXVlbnRcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUV4cHJlc3Npb25OZXcoY2FsbGVlOiBJRXhwcmVzc2lvbiwgYXJnczogSUV4cHJlc3Npb25bXSwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElOZXdFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIk5ld0V4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjYWxsZWUsXHJcbiAgICAgICAgICAgICAgICBhcmd1bWVudHM6IGFyZ3NcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUV4cHJlc3Npb25DYWxsKGNhbGxlZTogSUV4cHJlc3Npb24sIGFyZ3M6IElFeHByZXNzaW9uW10sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJQ2FsbEV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQ2FsbEV4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjYWxsZWUsXHJcbiAgICAgICAgICAgICAgICBhcmd1bWVudHM6IGFyZ3NcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUV4cHJlc3Npb25NZW1iZXIob2JqZWN0OiBJRXhwcmVzc2lvbiwgcHJvcGVydHk6IElJZGVudGlmaWVyIHwgSUV4cHJlc3Npb24sIGNvbXB1dGVkOiBib29sZWFuLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSU1lbWJlckV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiTWVtYmVyRXhwcmVzc2lvblwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9iamVjdCxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgY29tcHV0ZWRcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN3aXRjaENhc2UodGVzdDogSUV4cHJlc3Npb24sIGNvbnNlcXVlbnQ6IElTdGF0ZW1lbnRbXSwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElTd2l0Y2hDYXNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlN3aXRjaENhc2VcIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0ZXN0LFxyXG4gICAgICAgICAgICAgICAgY29uc2VxdWVudFxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlQ2F0Y2hDbGF1c2UocGFyYW06IElJZGVudGlmaWVyLCBib2R5OiBJQmxvY2tTdGF0ZW1lbnQsIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJQ2F0Y2hDbGF1c2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQ2F0Y2hDbGF1c2VcIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwYXJhbSxcclxuICAgICAgICAgICAgICAgIGJvZHlcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUlkZW50aWZpZXIobmFtZTogc3RyaW5nLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUlkZW50aWZpZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiSWRlbnRpZmllclwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUxpdGVyYWwodmFsdWU6IHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXIgfCBJUmVnRXhwLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUxpdGVyYWwge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiTGl0ZXJhbFwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxufSIsIm1vZHVsZSB0cmwuZnJvbnRlbmQudXRpbGl0aWVzIHtcclxuICAgIFxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGFzc2VydChjb25kOiBhbnksIG1zZz86IHN0cmluZykge1xyXG4gICAgICAgIGlmKCFjb25kKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXNzZXJ0aW9uIGZhaWw6ICR7bXNnfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3RzRGVmaW5pdGlvbnMvdHNkLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vbGV4aWNhbC9MZXhlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi91dGlsaXRpZXMvQXNzZXJ0aW9uLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3V0aWxpdGllcy9FeGNlcHRpb24udHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vbGV4aWNhbC9DaGFyYWN0ZXJTdHJlYW0udHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vbGV4aWNhbC9Ub2tlbkRlZmluaXRpb25zLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIk5vZGVGYWN0b3J5LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIklQYXJzZXIuZC50c1wiIC8+XHJcblxyXG5tb2R1bGUgdHJsLmZyb250ZW5kLnN5bnRheCB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFBhcnNlciBpbXBsZW1lbnRzIElQYXJzZXIge1xyXG5cclxuICAgICAgICBwcml2YXRlIG5vZGVGYWN0b3J5OiBOb2RlRmFjdG9yeTtcclxuICAgICAgICBwdWJsaWMgcGFyc2VFeGNlcHRpb246IHV0aWxpdGllcy5JRXhjZXB0aW9uSGFuZGxlcjtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBjaGFyU3RyZWFtOiBsZXhpY2FsLklDaGFyYWN0ZXJTdHJlYW07XHJcbiAgICAgICAgcHJpdmF0ZSBsZXhFeGNlcHRpb246IHV0aWxpdGllcy5JRXhjZXB0aW9uSGFuZGxlcjtcclxuICAgICAgICBwcml2YXRlIGxleDogbGV4aWNhbC5JTGV4ZXI7XHJcblxyXG4gICAgICAgIHByaXZhdGUgaW5Mb29wTXV0ZXg6IG51bWJlcltdO1xyXG4gICAgICAgIHByaXZhdGUgaW5Td2l0Y2hNdXRleDogbnVtYmVyW107XHJcbiAgICAgICAgcHJpdmF0ZSBpbkZ1bmN0aW9uTXV0ZXg6IG51bWJlcjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBkZWZhdWx0UGFyc2VyT3B0aW9uczogSVBhcnNlck9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGxvYzogZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgY2hhcnM6IHN0cmluZyxcclxuICAgICAgICAgICAgcHJpdmF0ZSBvcHRpb25zPzogSVBhcnNlck9wdGlvbnNcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gXy5kZWZhdWx0cyhcclxuICAgICAgICAgICAgICAgIF8uY2xvbmUob3B0aW9ucyB8fCB7fSksXHJcbiAgICAgICAgICAgICAgICBQYXJzZXIuZGVmYXVsdFBhcnNlck9wdGlvbnNcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlRmFjdG9yeSA9IG5ldyBOb2RlRmFjdG9yeSh0aGlzLm9wdGlvbnMubG9jKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJzZUV4Y2VwdGlvbiA9IG5ldyB1dGlsaXRpZXMuRXhjZXB0aW9uSGFuZGxlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtID0gbmV3IGxleGljYWwuQ2hhcmFjdGVyU3RyZWFtKGNoYXJzKTtcclxuICAgICAgICAgICAgdGhpcy5sZXhFeGNlcHRpb24gPSBuZXcgdXRpbGl0aWVzLkV4Y2VwdGlvbkhhbmRsZXIoKTtcclxuICAgICAgICAgICAgY29uc3QgbGV4T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGxvYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJlYWRhYmxlVG9rZW5zTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbmNsdWRlQ29tbWVudHNBc05vcm1hbFRva2VuczogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5sZXggPSBuZXcgbGV4aWNhbC5MZXhlcih0aGlzLmNoYXJTdHJlYW0sIHRoaXMubGV4RXhjZXB0aW9uLCBsZXhPcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW5Mb29wTXV0ZXggPSBbMF07ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuaW5Td2l0Y2hNdXRleCA9IFswXTtcclxuICAgICAgICAgICAgdGhpcy5pbkZ1bmN0aW9uTXV0ZXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBhZGRFeGNlcHRpb24odG9rZW46IGxleGljYWwuSVRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5sZXguaXNFb2YodG9rZW4pID8gXCJlbmQgb2YgZmlsZVwiIDogdG9rZW4udmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMucGFyc2VFeGNlcHRpb24uYWRkRXhjZXB0aW9uKFxyXG4gICAgICAgICAgICAgICAgYFVuZGV4cGVjdGVkIHRva2VuOiAnJHt2YWx1ZX0nYCxcclxuICAgICAgICAgICAgICAgIHRva2VuLmxvYy5zdGFydC5saW5lLFxyXG4gICAgICAgICAgICAgICAgdG9rZW4ubG9jLnN0YXJ0LmNvbHVtblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB0cmltT3B0aW9uYWxTZW1pY29sb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwiO1wiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2tlbklzSW5TYW1lTGluZSh0b2tlbikgJiYgIXRoaXMubGV4LmlzRW9mKHRva2VuKSAmJiAhdGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIn1cIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRXhjZXB0aW9uKHRva2VuKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vaXRlcmF0aW9uIG11dGV4XHJcbiAgICAgICAgcHJpdmF0ZSBiZWdpbkl0ZXJhdGlvbigpIHtcclxuICAgICAgICAgICAgKyt0aGlzLmluTG9vcE11dGV4W3RoaXMuaW5Mb29wTXV0ZXgubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGZpbmlzaEl0ZXJhdGlvbigpIHtcclxuICAgICAgICAgICAgLS10aGlzLmluTG9vcE11dGV4W3RoaXMuaW5Mb29wTXV0ZXgubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIG5ld0l0ZXJhdGlvblNjb3BlKCkge1xyXG4gICAgICAgICAgICB0aGlzLmluTG9vcE11dGV4LnB1c2goMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHJlc3RvcmVJdGVyYXRpb25TY29wZSgpIHtcclxuICAgICAgICAgICAgY29uc3QgY3Vyckl0ZXJhdGlvbk11dGV4ID0gdGhpcy5pbkxvb3BNdXRleC5wb3AoKTtcclxuICAgICAgICAgICAgdXRpbGl0aWVzLmFzc2VydChjdXJySXRlcmF0aW9uTXV0ZXggPT09IDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpc09uSXRlcmF0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbkxvb3BNdXRleFt0aGlzLmluTG9vcE11dGV4Lmxlbmd0aCAtIDFdID4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vc3dpdGNoIG11dGV4XHJcbiAgICAgICAgcHJpdmF0ZSBiZWdpblN3aXRjaCgpIHtcclxuICAgICAgICAgICAgKyt0aGlzLmluU3dpdGNoTXV0ZXhbdGhpcy5pblN3aXRjaE11dGV4Lmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmaW5pc2hTd2l0Y2goKSB7XHJcbiAgICAgICAgICAgIC0tdGhpcy5pblN3aXRjaE11dGV4W3RoaXMuaW5Td2l0Y2hNdXRleC5sZW5ndGggLSAxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBuZXdTd2l0Y2hTY29wZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5pblN3aXRjaE11dGV4LnB1c2goMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHJlc3RvcmVTd2l0Y2hTY29wZSgpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VyclN3aXRjaE11dGV4ID0gdGhpcy5pblN3aXRjaE11dGV4LnBvcCgpO1xyXG4gICAgICAgICAgICB1dGlsaXRpZXMuYXNzZXJ0KGN1cnJTd2l0Y2hNdXRleCA9PT0gMCk7XHJcbiAgICAgICAgfSAgICAgICAgIFxyXG5cclxuICAgICAgICBwcml2YXRlIGlzT25Td2l0Y2goKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluU3dpdGNoTXV0ZXhbdGhpcy5pblN3aXRjaE11dGV4Lmxlbmd0aCAtIDFdID4gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9mdW5jdGlvbiBtdXRleFxyXG4gICAgICAgIHByaXZhdGUgYmVnaW5GdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgKyt0aGlzLmluRnVuY3Rpb25NdXRleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZmluaXNoRnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC0tdGhpcy5pbkZ1bmN0aW9uTXV0ZXg7XHJcbiAgICAgICAgfSAgICAgICBcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpc09uRnVuY3Rpb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluRnVuY3Rpb25NdXRleCA+IDA7XHJcbiAgICAgICAgfSAgICAgICAgXHJcblxyXG4gICAgICAgIHByaXZhdGUgdHJhY2tQb3NpdGlvblVuYXJ5KHRva2VuOiBsZXhpY2FsLklUb2tlbik6IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW4ubG9jO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB0cmFja1Bvc2l0aW9uQnlQb3Moc3RhcnRQb3M6IGxleGljYWwuSVRva2VuUG9zaXRpb24pOiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uIHtcclxuICAgICAgICAgICAgY29uc3QgbGF0ZXN0VG9rZW4gPSB0aGlzLmxleC5sYXRlc3RUb2tlbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVMb2Moc3RhcnRQb3MsIGxhdGVzdFRva2VuLmxvYy5lbmQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB0cmFja1Bvc2l0aW9uQnlUb2tlbihzdGFydFRva2VuOiBsZXhpY2FsLklUb2tlbik6IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24ge1xyXG4gICAgICAgICAgICBjb25zdCBsYXRlc3RUb2tlbiA9IHRoaXMubGV4LmxhdGVzdFRva2VuKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUxvYyhzdGFydFRva2VuLmxvYy5zdGFydCwgbGF0ZXN0VG9rZW4ubG9jLmVuZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGNyZWF0ZUxvYyhzdGFydDogbGV4aWNhbC5JVG9rZW5Qb3NpdGlvbiwgZW5kOiBsZXhpY2FsLklUb2tlblBvc2l0aW9uKTogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN0YXJ0LCBlbmQgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZXhwZWN0UHVuY3R1YXRpb24odmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRXhjZXB0aW9uKHRva2VuKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBleHBlY3RLZXl3b3JkKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzS2V5d29yZFZhbHVlKHRva2VuLCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRXhjZXB0aW9uKHRva2VuKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB0b2tlbklzSW5TYW1lTGluZSh0b2tlbjogbGV4aWNhbC5JVG9rZW4pOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuLmxvYy5lbmQubGluZSA9PT0gdGhpcy5sZXgubGF0ZXN0VG9rZW4oKS5sb2MuZW5kLmxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2UoKTogSVByb2dyYW0ge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RtdHMgPSB0aGlzLnBhcnNlU291cmNlRWxlbWVudHMoKTtcclxuICAgICAgICAgICAgaWYgKCFzdG10cykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlUHJvZ3JhbShzdG10cywgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZVNvdXJjZUVsZW1lbnRzKCk6IElTdGF0ZW1lbnRbXSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0bXRzOiBJU3RhdGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmxleC5oYXNOZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0bXQgPSB0aGlzLnBhcnNlU3RhdGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0bXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBzdG10cy5wdXNoKHN0bXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc3RtdHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc0tleXdvcmQodG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRva2VuLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInZhclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVZhcmlhYmxlU3RhdGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImlmXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlSWZTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwid2hpbGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VXaGlsZVN0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkb1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZURvV2hpbGVTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZm9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRm9yU3RhdGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbnRpbnVlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlQ29udGludWVTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYnJlYWtcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VCcmVha1N0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ3aXRoXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlV2l0aFN0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzd2l0Y2hcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VTd2l0Y2hTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidGhyb3dcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VUaHJvd1N0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0cnlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VUcnlTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidHJ5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRGVidWdnZXJTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZnVuY3Rpb25cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VGdW5jdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmV0dXJuXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlUmV0dXJuU3RhdGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZXguaXNQdW5jdHVhdGlvbih0b2tlbikpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodG9rZW4udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwie1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUJsb2NrU3RhdGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjtcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFbXB0eVN0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGV4LmlzSWRlbnRpZmllcih0b2tlbikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlTGFiZWxlZFN0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXhwcmVzc2lvblN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlQmxvY2tTdGF0ZW1lbnQoKTogSUJsb2NrU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIntcIikpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdG10czogSVN0YXRlbWVudFtdID0gW107XHJcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICB3aGlsZSAoIXRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCJ9XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdG10ID0gdGhpcy5wYXJzZVN0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdG10KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgc3RtdHMucHVzaChzdG10KTtcclxuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIn1cIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudEJsb2NrKHN0bXRzLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlRW1wdHlTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIjtcIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudEVtcHR5KHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUlmU3RhdGVtZW50KCk6IElTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgY29uc3QgdGVzdEV4cHIgPSB0aGlzLnBhcnNlS2V5d29yZExwYXJFeHByZXNzaW9uUnBhcihcImlmXCIpO1xyXG4gICAgICAgICAgICBpZiAoIXRlc3RFeHByKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgY29uc1N0bXQgPSB0aGlzLnBhcnNlU3RhdGVtZW50KCk7XHJcbiAgICAgICAgICAgIGlmICghY29uc1N0bXQpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgYWx0U3RtdCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5tYXRjaEtleXdvcmQoXCJlbHNlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBhbHRTdG10ID0gdGhpcy5wYXJzZVN0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhbHRTdG10KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudElmKHRlc3RFeHByLCBjb25zU3RtdCwgYWx0U3RtdCwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgcGFyc2VJdGVyYXRpb24ocGFyc2VGdW5jOiAoKSA9PiBJTm9kZSk6IElTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICB0aGlzLmJlZ2luSXRlcmF0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0bXQgPSBwYXJzZUZ1bmMuYXBwbHkodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoSXRlcmF0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG10O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpbm5lclBhcnNlV2hpbGVTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHRoaXMuYmVnaW5JdGVyYXRpb24oKTtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlc3RFeHByID0gdGhpcy5wYXJzZUtleXdvcmRMcGFyRXhwcmVzc2lvblJwYXIoXCJ3aGlsZVwiKTtcclxuICAgICAgICAgICAgaWYgKCF0ZXN0RXhwcikgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0bXQgPSB0aGlzLnBhcnNlU3RhdGVtZW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoSXRlcmF0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmIChzdG10KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRXaGlsZSh0ZXN0RXhwciwgc3RtdCwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlV2hpbGVTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlSXRlcmF0aW9uKHRoaXMuaW5uZXJQYXJzZVdoaWxlU3RhdGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbm5lclBhcnNlRG9XaGlsZVN0YXRlbWVudCgpOiBJU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RLZXl3b3JkKFwiZG9cIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0bXQgPSB0aGlzLnBhcnNlU3RhdGVtZW50KCk7XHJcbiAgICAgICAgICAgIGlmICghc3RtdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGVzdEV4cHIgPSB0aGlzLnBhcnNlS2V5d29yZExwYXJFeHByZXNzaW9uUnBhcihcIndoaWxlXCIpO1xyXG4gICAgICAgICAgICBpZiAoIXRlc3RFeHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxleC5tYXRjaFB1bmN0dWF0aW9uKFwiO1wiKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudERvV2hpbGUoc3RtdCwgdGVzdEV4cHIsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VEb1doaWxlU3RhdGVtZW50KCk6IElTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUl0ZXJhdGlvbih0aGlzLmlubmVyUGFyc2VEb1doaWxlU3RhdGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaW5uZXJQYXJzZUZvclN0YXRlbWVudCgpOiBJU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICghKHRoaXMuZXhwZWN0S2V5d29yZChcImZvclwiKSAmJiB0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwiKFwiKSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbml0RGVjbDogSVZhcmlhYmxlRGVjbGFyYXRpb24gPSBudWxsLFxyXG4gICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBJVmFyaWFibGVEZWNsYXJhdG9yW10sXHJcbiAgICAgICAgICAgICAgICBpbml0RXhwcjogSUV4cHJlc3Npb24gPSBudWxsLFxyXG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwiO1wiKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzS2V5d29yZFZhbHVlKHRva2VuLCBcInZhclwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IHRoaXMucGFyc2VWYXJpYWJsZURlY2xhcmF0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkZWNsYXJhdGlvbnMpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBpbml0RGVjbCA9IHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRGVjbGFyYXRpb25WYXJpYWJsZShkZWNsYXJhdGlvbnMsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4odG9rZW4pKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdEV4cHIgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5pdEV4cHIpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGlzRm9ySW4gPSBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRlc3QgPSBudWxsO1xyXG4gICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNLZXl3b3JkVmFsdWUodG9rZW4sIFwiaW5cIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgaXNGb3JJbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoKCFpbml0RXhwciAmJiAhZGVjbGFyYXRpb25zKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICgoaW5pdEV4cHIgJiYgIVBhcnNlci5pc0xlZnRIYW5kRXhwcmVzc2lvblJlc29sdmluZ1RvUmVmZXJlbmNlKGluaXRFeHByKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgKGRlY2xhcmF0aW9ucyAmJiBkZWNsYXJhdGlvbnMubGVuZ3RoICE9PSAxKSlcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VFeGNlcHRpb24uYWRkRXhjZXB0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgZm9yIGluIGxlZnQgc2lkZSBzaG91bGQgcmVzb2x2ZSB0byByZWZlcmVuY2VgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVG9rZW4ubG9jLnN0YXJ0LmxpbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxUb2tlbi5sb2Muc3RhcnQuY29sdW1uXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCI7XCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIjtcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXN0ID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRlc3QpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCI7XCIpKSByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB1cGRhdGUgPSBudWxsO1xyXG4gICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCIpXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGUgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF1cGRhdGUpIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGlzRm9ySW4gJiYgIXVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFeGNlcHRpb24odG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCIpXCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gdGhpcy5wYXJzZVN0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICBpZiAoIWJvZHkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKTtcclxuICAgICAgICAgICAgY29uc3QgaW5pdCA9IGluaXRFeHByIHx8IGluaXREZWNsO1xyXG4gICAgICAgICAgICBpZiAoaXNGb3JJbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50Rm9ySW4oaW5pdCwgdXBkYXRlLCBib2R5LCBmYWxzZSwgcG9zKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudEZvcihpbml0LCB0ZXN0LCB1cGRhdGUsIGJvZHksIHBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUZvclN0YXRlbWVudCgpOiBJU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VJdGVyYXRpb24odGhpcy5pbm5lclBhcnNlRm9yU3RhdGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgcGFyc2VLZXl3b3JkTm9kZVNlbWljb2xvbihrZXl3b3JkOiBzdHJpbmcsIHBhcnNlRnVuYzogKCkgPT4gSU5vZGUsIG5vZGVGYWN0b3J5RnVuYzogKGl0ZW46IElOb2RlLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKSA9PiBJTm9kZSk6IElOb2RlIHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RLZXl3b3JkKGtleXdvcmQpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbTogSU5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNJZGVudGlmaWVyKHRva2VuKSAmJiB0aGlzLnRva2VuSXNJblNhbWVMaW5lKHRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHBhcnNlRnVuYy5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtKSAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy50cmltT3B0aW9uYWxTZW1pY29sb24oKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZUZhY3RvcnlGdW5jLmNhbGwodGhpcy5ub2RlRmFjdG9yeSwgaXRlbSwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUNvbnRpbnVlU3RhdGVtZW50KCk6IElFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RtdCA9IHRoaXMucGFyc2VLZXl3b3JkTm9kZVNlbWljb2xvbihcImNvbnRpbnVlXCIsIHRoaXMucGFyc2VJZGVudGlmaWVyLCB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudENvbnRpbnVlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPbkl0ZXJhdGlvbigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RtdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBhcnNlRXhjZXB0aW9uLmFkZEV4Y2VwdGlvbihcclxuICAgICAgICAgICAgICAgIGBJbGxlZ2FsIGNvbnRpbnVlIHN0YXRlbWVudGAsXHJcbiAgICAgICAgICAgICAgICBzdG10LmxvYy5zdGFydC5saW5lLFxyXG4gICAgICAgICAgICAgICAgc3RtdC5sb2Muc3RhcnQuY29sdW1uXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VCcmVha1N0YXRlbWVudCgpOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0bXQgPSB0aGlzLnBhcnNlS2V5d29yZE5vZGVTZW1pY29sb24oXCJicmVha1wiLCB0aGlzLnBhcnNlSWRlbnRpZmllciwgdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRCcmVhayk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT25JdGVyYXRpb24oKSB8fCB0aGlzLmlzT25Td2l0Y2goKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0bXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wYXJzZUV4Y2VwdGlvbi5hZGRFeGNlcHRpb24oXHJcbiAgICAgICAgICAgICAgICBgSWxsZWdhbCBicmVhayBzdGF0ZW1lbnRgLFxyXG4gICAgICAgICAgICAgICAgc3RtdC5sb2Muc3RhcnQubGluZSxcclxuICAgICAgICAgICAgICAgIHN0bXQubG9jLnN0YXJ0LmNvbHVtblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlUmV0dXJuU3RhdGVtZW50KCk6IElFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RtdCA9IHRoaXMucGFyc2VLZXl3b3JkTm9kZVNlbWljb2xvbihcInJldHVyblwiLCB0aGlzLnBhcnNlRXhwcmVzc2lvbiwgdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRSZXR1cm4pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc09uRnVuY3Rpb24oKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0bXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wYXJzZUV4Y2VwdGlvbi5hZGRFeGNlcHRpb24oXHJcbiAgICAgICAgICAgICAgICBgSWxsZWdhbCByZXR1cm4gc3RhdGVtZW50YCxcclxuICAgICAgICAgICAgICAgIHN0bXQubG9jLnN0YXJ0LmxpbmUsXHJcbiAgICAgICAgICAgICAgICBzdG10LmxvYy5zdGFydC5jb2x1bW5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZVdpdGhTdGF0ZW1lbnQoKTogSUV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgY29uc3QgZXhwciA9IHRoaXMucGFyc2VLZXl3b3JkTHBhckV4cHJlc3Npb25ScGFyKFwid2l0aFwiKTtcclxuICAgICAgICAgICAgaWYgKCFleHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdG10ID0gdGhpcy5wYXJzZVN0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICBpZiAoIXN0bXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudFdpdGgoZXhwciwgc3RtdCwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgcGFyc2VDYXNlQ2xhdXNlU3RhdGVtZW50cyhleHBlY3REZWZhdWx0OiBib29sZWFuKTogSVN0YXRlbWVudFtdIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwiOlwiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RtdHM6IElTdGF0ZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc0tleXdvcmRWYWx1ZSh0b2tlbiwgXCJjYXNlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgdGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIn1cIilcclxuICAgICAgICAgICAgICAgICAgICB8fCAodGhpcy5sZXguaXNLZXl3b3JkVmFsdWUodG9rZW4sIFwiZGVmYXVsdFwiKSAmJiBleHBlY3REZWZhdWx0KVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdG10ID0gdGhpcy5wYXJzZVN0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdG10KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgc3RtdHMucHVzaChzdG10KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RtdHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHBhcnNlQ2FzZXNDbGF1c2UoY2FzZXM6IElTd2l0Y2hDYXNlW10sIGV4cGVjdERlZmF1bHQ6IGJvb2xlYW4pIHtcclxuICAgICAgICAgICAgbGV0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmxleC5pc0tleXdvcmRWYWx1ZSh0b2tlbiwgXCJjYXNlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFleHByKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RtdHMgPSB0aGlzLnBhcnNlQ2FzZUNsYXVzZVN0YXRlbWVudHMoZXhwZWN0RGVmYXVsdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0bXRzKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3dpdGNoQ2FzZSA9IHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlU3dpdGNoQ2FzZShleHByLCBzdG10cywgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbih0b2tlbikpO1xyXG4gICAgICAgICAgICAgICAgY2FzZXMucHVzaChzd2l0Y2hDYXNlKTtcclxuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGlubmVyUGFyc2VTd2l0Y2hTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUtleXdvcmRMcGFyRXhwcmVzc2lvblJwYXIoXCJzd2l0Y2hcIik7XHJcbiAgICAgICAgICAgIGlmICghZXhwcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwie1wiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNhc2VzOiBJU3dpdGNoQ2FzZVtdID0gW107XHJcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzS2V5d29yZFZhbHVlKHRva2VuLCBcImNhc2VcIikpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wYXJzZUNhc2VzQ2xhdXNlKGNhc2VzLCB0cnVlKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc0tleXdvcmRWYWx1ZSh0b2tlbiwgXCJkZWZhdWx0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0bXRzID0gdGhpcy5wYXJzZUNhc2VDbGF1c2VTdGF0ZW1lbnRzKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlmICghc3RtdHMpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0Q2FzZSA9IHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlU3dpdGNoQ2FzZShudWxsLCBzdG10cywgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbih0b2tlbikpO1xyXG4gICAgICAgICAgICAgICAgY2FzZXMucHVzaChkZWZhdWx0Q2FzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzS2V5d29yZFZhbHVlKHRva2VuLCBcImNhc2VcIikpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wYXJzZUNhc2VzQ2xhdXNlKGNhc2VzLCBmYWxzZSkpIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwifVwiKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRTd2l0Y2goZXhwciwgY2FzZXMsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VTd2l0Y2hTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHRoaXMuYmVnaW5Td2l0Y2goKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RtdCA9IHRoaXMuaW5uZXJQYXJzZVN3aXRjaFN0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaFN3aXRjaCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RtdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZVRocm93U3RhdGVtZW50KCk6IElTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdEtleXdvcmQoXCJ0aHJvd1wiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKGluaXRpYWxUb2tlbi5sb2Muc3RhcnQubGluZSAhPT0gdG9rZW4ubG9jLnN0YXJ0LmxpbmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyc2VFeGNlcHRpb24uYWRkRXhjZXB0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgIGBJbGxlZ2FsIG5ld2xpbmUgYWZ0ZXIgdGhyb3dgLFxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxUb2tlbi5sb2Muc3RhcnQubGluZSxcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVG9rZW4ubG9jLnN0YXJ0LmNvbHVtblxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhwciA9IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIGlmICghZXhwcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnRyaW1PcHRpb25hbFNlbWljb2xvbigpKSByZXR1cm47XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudFRocm93KGV4cHIsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VUcnlTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0S2V5d29yZChcInRyeVwiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RtdCA9IHRoaXMucGFyc2VCbG9ja1N0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICBpZiAoIXN0bXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBsZXQgY2F0Y2hDbGF1c2U6IElDYXRjaENsYXVzZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc0tleXdvcmRWYWx1ZSh0b2tlbiwgXCJjYXRjaFwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2F0Y2hJZCA9IHRoaXMucGFyc2VLZXl3b3JkTHBhckV4cHJlc3Npb25ScGFyKFwiY2F0Y2hcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShjYXRjaElkICYmIGNhdGNoSWQudHlwZSA9PT0gXCJJZGVudGlmaWVyXCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RtdCA9IHRoaXMucGFyc2VCbG9ja1N0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdG10KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgY2F0Y2hDbGF1c2UgPSB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUNhdGNoQ2xhdXNlKChjYXRjaElkIGFzIElJZGVudGlmaWVyKSwgc3RtdCwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbih0b2tlbikpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZmluYWxpemVyOiBJQmxvY2tTdGF0ZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXgubWF0Y2hLZXl3b3JkKFwiZmluYWxseVwiKSkge1xyXG4gICAgICAgICAgICAgICAgZmluYWxpemVyID0gdGhpcy5wYXJzZUJsb2NrU3RhdGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWZpbmFsaXplcikgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRUcnkoc3RtdCwgY2F0Y2hDbGF1c2UsIGZpbmFsaXplciwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZURlYnVnZ2VyU3RhdGVtZW50KCk6IElTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKCEodGhpcy5leHBlY3RLZXl3b3JkKFwiZGVidWdnZXJcIikgJiYgdGhpcy50cmltT3B0aW9uYWxTZW1pY29sb24oKSkpIHJldHVybjtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50RGVidWdnZXIodGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUxhYmVsZWRTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgaWYgKCFleHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAoZXhwci50eXBlID09PSBcIklkZW50aWZpZXJcIiAmJiB0aGlzLmxleC5tYXRjaFB1bmN0dWF0aW9uKFwiOlwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RtdCA9IHRoaXMucGFyc2VTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICghc3RtdCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50TGFiZWxlZChleHByIGFzIElJZGVudGlmaWVyLCBzdG10LCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHBhcnNlIGxpa2UgYSBub3JtYWwgZXhwcmVzc2lvbiBzdGF0ZW1lbnRcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnRyaW1PcHRpb25hbFNlbWljb2xvbigpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRFeHByZXNzaW9uKGV4cHIsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHBhcnNlS2V5d29yZExwYXJFeHByZXNzaW9uUnBhcihrZXl3b3JkOiBzdHJpbmcpOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGlmICghKHRoaXMuZXhwZWN0S2V5d29yZChrZXl3b3JkKSAmJiB0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwiKFwiKSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICBpZiAoZXhwciAmJiB0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwiKVwiKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZVZhcmlhYmxlU3RhdGVtZW50KCk6IElTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdEtleXdvcmQoXCJ2YXJcIikpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZURlY2xhcmF0b3JzID0gdGhpcy5wYXJzZVZhcmlhYmxlRGVjbGFyYXRvcnMoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy50cmltT3B0aW9uYWxTZW1pY29sb24oKSkgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZURlY2xhcmF0aW9uVmFyaWFibGUodmFyaWFibGVEZWNsYXJhdG9ycywgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgcGFyc2VWYXJpYWJsZURlY2xhcmF0b3JzKCk6IElWYXJpYWJsZURlY2xhcmF0b3JbXSB7XHJcbiAgICAgICAgICAgIGxldCB2YXJpYWJsZURlY2xhcmF0b3IgPSB0aGlzLnBhcnNlVmFyaWFibGVEZWNsYXJhdG9yKCk7XHJcbiAgICAgICAgICAgIGlmICghdmFyaWFibGVEZWNsYXJhdG9yKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVEZWNsYXJhdG9yczogSVZhcmlhYmxlRGVjbGFyYXRvcltdID0gW3ZhcmlhYmxlRGVjbGFyYXRvcl07XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmxleC5tYXRjaFB1bmN0dWF0aW9uKFwiLFwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGVEZWNsYXJhdG9yID0gdGhpcy5wYXJzZVZhcmlhYmxlRGVjbGFyYXRvcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YXJpYWJsZURlY2xhcmF0b3IpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVEZWNsYXJhdG9ycy5wdXNoKHZhcmlhYmxlRGVjbGFyYXRvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRvcnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VWYXJpYWJsZURlY2xhcmF0b3IoKTogSVZhcmlhYmxlRGVjbGFyYXRvciB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gdGhpcy5wYXJzZUlkZW50aWZpZXIoKTtcclxuICAgICAgICAgICAgaWYgKCFpZGVudGlmaWVyKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IGV4cHIgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXgubWF0Y2hQdW5jdHVhdGlvbihcIj1cIikpIHtcclxuICAgICAgICAgICAgICAgIGV4cHIgPSB0aGlzLnBhcnNlQXNzaWdubWVudEV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIGlmICghZXhwcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlVmFyaWFibGVEZWNsYXJhdG9yKGlkZW50aWZpZXIsIGV4cHIsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VFeHByZXNzaW9uU3RhdGVtZW50KCk6IElTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgY29uc3QgZXhwciA9IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIGlmICghKGV4cHIgJiYgdGhpcy50cmltT3B0aW9uYWxTZW1pY29sb24oKSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudEV4cHJlc3Npb24oZXhwciwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUZ1bmN0aW9uKGFzRGVjbGFyYXRpb246IGJvb2xlYW4pOiBJRnVuY3Rpb25EZWNsYXJhdGlvbiB8IElGdW5jdGlvbkV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdEtleXdvcmQoXCJmdW5jdGlvblwiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGxldCBpZGVudGlmaWVyOiBJSWRlbnRpZmllciA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc0lkZW50aWZpZXIodG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGlkZW50aWZpZXIgPSB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUlkZW50aWZpZXIodG9rZW4udmFsdWUsIHRoaXMudHJhY2tQb3NpdGlvblVuYXJ5KHRva2VuKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXNEZWNsYXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFeGNlcHRpb24odG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCIoXCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhcmdzOiBJSWRlbnRpZmllcltdID0gW107XHJcbiAgICAgICAgICAgIHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIHdoaWxlICghdGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIilcIikpIHtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmxleC5pc0lkZW50aWZpZXIodG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFeGNlcHRpb24odG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJnID0gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVJZGVudGlmaWVyKHRva2VuLnZhbHVlLCB0aGlzLnRyYWNrUG9zaXRpb25VbmFyeSh0b2tlbikpO1xyXG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKGFyZyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5tYXRjaFB1bmN0dWF0aW9uKFwiLFwiKTtcclxuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIilcIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSB0aGlzLnBhcnNlRnVuY3Rpb25Cb2R5KCk7XHJcbiAgICAgICAgICAgIGlmICghYm9keSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFzRGVjbGFyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZURlY2xhcmF0aW9uRnVuY3Rpb24oaWRlbnRpZmllciwgYXJncywgYm9keSwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25GdW5jdGlvbihpZGVudGlmaWVyLCBhcmdzLCBib2R5LCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlRXhwcmVzc2lvbigpOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUFzc2lnbm1lbnRFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIGlmICghZXhwcikgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5tYXRjaFB1bmN0dWF0aW9uKFwiLFwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhwcnM6IElFeHByZXNzaW9uW10gPSBbZXhwcl07XHJcbiAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwciA9IHRoaXMucGFyc2VBc3NpZ25tZW50RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhwcikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cHJzLnB1c2goZXhwcik7XHJcbiAgICAgICAgICAgICAgICB9IHdoaWxlICh0aGlzLmxleC5tYXRjaFB1bmN0dWF0aW9uKFwiLFwiKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvblNlcXVlbmNlKGV4cHJzLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoYW5rcyB0bzogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNzA5ODY2L3doYXRzLWEtdmFsaWQtbGVmdC1oYW5kLXNpZGUtZXhwcmVzc2lvbi1pbi1qYXZhc2NyaXB0LWdyYW1tYXJcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpc0xlZnRIYW5kRXhwcmVzc2lvblJlc29sdmluZ1RvUmVmZXJlbmNlKGV4cHI6IElFeHByZXNzaW9uKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHByLnR5cGUgPT09IFwiSWRlbnRpZmllclwiIHx8IGV4cHIudHlwZSA9PT0gXCJNZW1iZXJFeHByZXNzaW9uXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBBc3NpZ25tZW50T3BlcmF0b3JzID0ge1xyXG4gICAgICAgICAgICBcIj1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJ8fFwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcIio9XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiLz1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCIlPVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcIis9XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiLT1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCI8PD1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCI+Pj1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCI+Pj49XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiJj1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJePVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcInw9XCI6IHRydWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUFzc2lnbm1lbnRFeHByZXNzaW9uKCk6IElFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUNvbmRpdGlvbmFsRXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICBpZiAoIWV4cHIpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNQdW5jdHVhdGlvbih0b2tlbilcclxuICAgICAgICAgICAgICAgICYmIFBhcnNlci5Bc3NpZ25tZW50T3BlcmF0b3JzW3Rva2VuLnZhbHVlXVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGlmICghUGFyc2VyLmlzTGVmdEhhbmRFeHByZXNzaW9uUmVzb2x2aW5nVG9SZWZlcmVuY2UoZXhwcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlRXhjZXB0aW9uLmFkZEV4Y2VwdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgYEludmFsaWQgbGVmdC1oYW5kIHNpZGUgaW4gYXNzaWdubWVudGAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuLmxvYy5zdGFydC5saW5lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbi5sb2Muc3RhcnQuY29sdW1uXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJleHByID0gdGhpcy5wYXJzZUFzc2lnbm1lbnRFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJleHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbkFzc2lnbm1lbnQodG9rZW4udmFsdWUsIGV4cHIsIHJleHByLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUNvbmRpdGlvbmFsRXhwcmVzc2lvbigpOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUJpbmFyeUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgaWYgKCFleHByKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCI/XCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnNlcXVlbnRFeHByID0gdGhpcy5wYXJzZUFzc2lnbm1lbnRFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnNlcXVlbnRFeHByKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIjpcIikpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYWx0ZXJuYXRlRXhwciA9IHRoaXMucGFyc2VBc3NpZ25tZW50RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhbHRlcm5hdGVFeHByKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25Db25kaXRpb25hbChleHByLCBhbHRlcm5hdGVFeHByLCBjb25zZXF1ZW50RXhwciwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBCaW5hcnlUb2tlblZhbHVlc19vciA9IDE7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQmluYXJ5VG9rZW5WYWx1ZXNfYW5kID0gMjtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBCaW5hcnlUb2tlblZhbHVlc19pc2xvZ2ljID0gUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2FuZDtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBCaW5hcnlUb2tlblZhbHVlc19ib3IgPSAzO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEJpbmFyeVRva2VuVmFsdWVzX3hvciA9IDQ7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQmluYXJ5VG9rZW5WYWx1ZXNfYmFuZCA9IDU7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQmluYXJ5VG9rZW5WYWx1ZXNfZXEgPSA2O1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEJpbmFyeVRva2VuVmFsdWVzX3JlbCA9IDc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQmluYXJ5VG9rZW5WYWx1ZXNfc2hpZnQgPSA4O1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEJpbmFyeVRva2VuVmFsdWVzX2FkZCA9IDk7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQmluYXJ5VG9rZW5WYWx1ZXNfbXVsdGkgPSAxMDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaXNMb2dpY0JpbmFyeVRva2VuVmFsdWUocmFuazogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiByYW5rIDw9IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19pc2xvZ2ljO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQmluYXJ5VG9rZW5WYWx1ZXMgPSB7XHJcbiAgICAgICAgICAgICd8fCc6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19vcixcclxuICAgICAgICAgICAgJyYmJzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2FuZCxcclxuICAgICAgICAgICAgJ3wnOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfYm9yLFxyXG4gICAgICAgICAgICAnXic6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc194b3IsXHJcbiAgICAgICAgICAgICcmJzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2JhbmQsXHJcbiAgICAgICAgICAgICc9PSc6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19lcSxcclxuICAgICAgICAgICAgJyE9JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2VxLFxyXG4gICAgICAgICAgICAnPT09JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2VxLFxyXG4gICAgICAgICAgICAnIT09JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2VxLFxyXG4gICAgICAgICAgICAnPCc6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19yZWwsXHJcbiAgICAgICAgICAgICc+JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX3JlbCxcclxuICAgICAgICAgICAgJzw9JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX3JlbCxcclxuICAgICAgICAgICAgJz49JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX3JlbCxcclxuICAgICAgICAgICAgJ2luc3RhbmNlb2YnOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfcmVsLFxyXG4gICAgICAgICAgICAnaW4gJzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX3JlbCxcclxuICAgICAgICAgICAgJzw8JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX3NoaWZ0LFxyXG4gICAgICAgICAgICAnPj4nOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfc2hpZnQsXHJcbiAgICAgICAgICAgICc+Pj4nOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfc2hpZnQsXHJcbiAgICAgICAgICAgICcrJzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2FkZCxcclxuICAgICAgICAgICAgJy0nOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfYWRkLFxyXG4gICAgICAgICAgICAnKic6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19tdWx0aSxcclxuICAgICAgICAgICAgJy8nOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfbXVsdGksXHJcbiAgICAgICAgICAgICclJzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX211bHRpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGNyZWF0ZUJpbmFyeUV4cHJlc3Npb24oXHJcbiAgICAgICAgICAgIHJhbms6IG51bWJlcixcclxuICAgICAgICAgICAgb3BlcmF0b3I6IHN0cmluZyxcclxuICAgICAgICAgICAgbGVmdDogSUV4cHJlc3Npb24sXHJcbiAgICAgICAgICAgIHJpZ2h0OiBJRXhwcmVzc2lvblxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBsb2MgPSB0aGlzLm9wdGlvbnMubG9jID8gdGhpcy5jcmVhdGVMb2MobGVmdC5sb2Muc3RhcnQsIHJpZ2h0LmxvYy5lbmQpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBpZiAoUGFyc2VyLmlzTG9naWNCaW5hcnlUb2tlblZhbHVlKHJhbmspKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uTG9naWNhbChvcGVyYXRvciwgbGVmdCwgcmlnaHQsIGxvYyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uQmluYXJ5KG9wZXJhdG9yLCBsZWZ0LCByaWdodCwgbG9jKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlQmluYXJ5RXhwcmVzc2lvbigpOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGxldCBsZXhwciA9IHRoaXMucGFyc2VVbmFyeUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgaWYgKCFsZXhwcikgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBsZXQgYmluYXJ5UmFuayA9IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc1t0b2tlbi52YWx1ZV07XHJcblxyXG4gICAgICAgICAgICBpZiAoYmluYXJ5UmFuayAmJiAodGhpcy5sZXguaXNQdW5jdHVhdGlvbih0b2tlbikgfHwgdGhpcy5sZXguaXNLZXl3b3JkKHRva2VuKSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmV4cHIgPSB0aGlzLnBhcnNlVW5hcnlFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJleHByKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHJzOiBJRXhwcmVzc2lvbltdID0gW2xleHByLCByZXhwcl0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHVuY3M6IHN0cmluZ1tdID0gW3Rva2VuLnZhbHVlXSxcclxuICAgICAgICAgICAgICAgICAgICByYW5rczogbnVtYmVyW10gPSBbYmluYXJ5UmFua107XHJcblxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhdGVzdFJhbmsgPSBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNbdG9rZW4udmFsdWVdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWxhdGVzdFJhbmsgfHwgKCF0aGlzLmxleC5pc1B1bmN0dWF0aW9uKHRva2VuKSAmJiAhdGhpcy5sZXguaXNLZXl3b3JkKHRva2VuKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXhwciA9IHRoaXMucGFyc2VVbmFyeUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJleHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0UmFuayA9IF8ubGFzdChyYW5rcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGxhc3RSYW5rICYmIGxhc3RSYW5rID49IGxhdGVzdFJhbmspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV4cHIgPSBleHBycy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGV4cHIgPSBleHBycy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmluYXJ5RXhwciA9IHRoaXMuY3JlYXRlQmluYXJ5RXhwcmVzc2lvbihyYW5rcy5wb3AoKSwgcHVuY3MucG9wKCksIGxleHByLCByZXhwcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJzLnB1c2goYmluYXJ5RXhwcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0UmFuayA9IF8ubGFzdChyYW5rcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByYW5rcy5wdXNoKGxhdGVzdFJhbmspO1xyXG4gICAgICAgICAgICAgICAgICAgIHB1bmNzLnB1c2godG9rZW4udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cHJzLnB1c2gocmV4cHIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxleHByID0gZXhwcnMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocHVuY3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV4cHIgPSB0aGlzLmNyZWF0ZUJpbmFyeUV4cHJlc3Npb24ocmFua3MucG9wKCksIHB1bmNzLnBvcCgpLCBleHBycy5wb3AoKSwgbGV4cHIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbGV4cHI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBVbmFyeVRva2VuVmFsdWVzX3VuYXJ5ID0gMTtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBVbmFyeVRva2VuVmFsdWVzX3VwZGF0ZSA9IDI7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIFVuYXJ5VG9rZW5WYWx1ZXMgPSB7XHJcbiAgICAgICAgICAgIFwiLVwiOiBQYXJzZXIuVW5hcnlUb2tlblZhbHVlc191bmFyeSxcclxuICAgICAgICAgICAgXCIrXCI6IFBhcnNlci5VbmFyeVRva2VuVmFsdWVzX3VuYXJ5LFxyXG4gICAgICAgICAgICBcIiFcIjogUGFyc2VyLlVuYXJ5VG9rZW5WYWx1ZXNfdW5hcnksXHJcbiAgICAgICAgICAgIFwiflwiOiBQYXJzZXIuVW5hcnlUb2tlblZhbHVlc191bmFyeSxcclxuICAgICAgICAgICAgXCJ0eXBlb2ZcIjogUGFyc2VyLlVuYXJ5VG9rZW5WYWx1ZXNfdW5hcnksXHJcbiAgICAgICAgICAgIFwidm9pZFwiOiBQYXJzZXIuVW5hcnlUb2tlblZhbHVlc191bmFyeSxcclxuICAgICAgICAgICAgXCJkZWxldGVcIjogUGFyc2VyLlVuYXJ5VG9rZW5WYWx1ZXNfdW5hcnksXHJcbiAgICAgICAgICAgIFwiKytcIjogUGFyc2VyLlVuYXJ5VG9rZW5WYWx1ZXNfdXBkYXRlLFxyXG4gICAgICAgICAgICBcIi0tXCI6IFBhcnNlci5VbmFyeVRva2VuVmFsdWVzX3VwZGF0ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlVW5hcnlFeHByZXNzaW9uKCk6IElFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgY29uc3QgdW5hcnlSYW5rID0gUGFyc2VyLlVuYXJ5VG9rZW5WYWx1ZXNbdG9rZW4udmFsdWVdO1xyXG4gICAgICAgICAgICBpZiAodW5hcnlSYW5rICYmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uKHRva2VuKSB8fCB0aGlzLmxleC5pc0tleXdvcmQodG9rZW4pKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXhwciA9IHRoaXMucGFyc2VQb3N0Zml4RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFleHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHVuYXJ5UmFuayA9PT0gUGFyc2VyLlVuYXJ5VG9rZW5WYWx1ZXNfdXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvblVwZGF0ZSh0b2tlbi52YWx1ZSwgZXhwciwgdHJ1ZSwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbih0b2tlbikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25VbmFyeSh0b2tlbi52YWx1ZSwgdHJ1ZSwgZXhwciwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbih0b2tlbikpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVBvc3RmaXhFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VQb3N0Zml4RXhwcmVzc2lvbigpOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUxlZnRIYW5kU2lkZUV4cHJlc3Npb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmICghZXhwcikgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uKHRva2VuKSAmJiB0b2tlbi5sb2MuZW5kLmxpbmUgPT09IHRoaXMubGV4LmxhdGVzdFRva2VuKCkubG9jLmVuZC5saW5lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4udmFsdWUgPT09IFwiKytcIiB8fCB0b2tlbi52YWx1ZSA9PT0gXCItLVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvblVwZGF0ZSh0b2tlbi52YWx1ZSwgZXhwciwgZmFsc2UsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBleHByO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwYXJzZUlkZW50aWZpZXIoKTogSUlkZW50aWZpZXIge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNJZGVudGlmaWVyKHRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlSWRlbnRpZmllcih0b2tlbi52YWx1ZSwgdGhpcy50cmFja1Bvc2l0aW9uVW5hcnkodG9rZW4pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFkZEV4Y2VwdGlvbih0b2tlbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VMZWZ0SGFuZFNpZGVFeHByZXNzaW9uKGFsbG93Q2FsbEV4cHJlc3Npb25zOiBib29sZWFuKTogSUV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICBsZXQgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGxldCBwcmltYXJ5RXhwcjtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzS2V5d29yZChpbml0aWFsVG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGluaXRpYWxUb2tlbi52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmdW5jdGlvblwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUZ1bmN0aW9uKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibmV3XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlFeHByID0gdGhpcy5wYXJzZU5ld0V4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcmltYXJ5RXhwciA9IHByaW1hcnlFeHByIHx8IHRoaXMucGFyc2VQcmltYXJ5RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICBpZiAoIXByaW1hcnlFeHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgZXhwcjogSU5vZGUsIGlzTWF0Y2hpbmdFeHJlc3Npb24gPSB0cnVlO1xyXG4gICAgICAgICAgICB3aGlsZSAoaXNNYXRjaGluZ0V4cmVzc2lvbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5sZXguaXNQdW5jdHVhdGlvbih0b2tlbikpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodG9rZW4udmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIltcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHIgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWV4cHIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIl1cIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlFeHByID0gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uTWVtYmVyKHByaW1hcnlFeHByLCBleHByLCB0cnVlLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi5cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSB0aGlzLnBhcnNlSWRlbnRpZmllcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlkZW50aWZpZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlFeHByID0gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uTWVtYmVyKHByaW1hcnlFeHByLCBpZGVudGlmaWVyLCBmYWxzZSwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIoXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbGxvd0NhbGxFeHByZXNzaW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJncyA9IHRoaXMucGFyc2VBcmd1bWVudHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYXJncykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlFeHByID0gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uQ2FsbChwcmltYXJ5RXhwciwgYXJncywgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNNYXRjaGluZ0V4cmVzc2lvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwcmltYXJ5RXhwcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZVByaW1hcnlFeHByZXNzaW9uKCk6IElOb2RlIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAodG9rZW4udHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBsZXhpY2FsLlRva2VuVHlwZS5rZXl3b3JkOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi52YWx1ZSA9PT0gXCJ0aGlzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25UaGlzKHRoaXMudHJhY2tQb3NpdGlvblVuYXJ5KHRva2VuKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgbGV4aWNhbC5Ub2tlblR5cGUuaWRlbnRpZmllcjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVJZGVudGlmaWVyKHRva2VuLnZhbHVlLCB0aGlzLnRyYWNrUG9zaXRpb25VbmFyeSh0b2tlbikpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgbGV4aWNhbC5Ub2tlblR5cGUubGl0ZXJhbDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVMaXRlcmFsKHRva2VuLnZhbHVlLCB0aGlzLnRyYWNrUG9zaXRpb25VbmFyeSh0b2tlbikpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgbGV4aWNhbC5Ub2tlblR5cGUucHVuY3R1YXRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0b2tlbi52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiW1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VBcnJheUxpdGVyYWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ7XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZU9iamVjdExpdGVyYWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIoXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZXhwcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxleC5tYXRjaFB1bmN0dWF0aW9uKFwiKVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBleHByO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEV4Y2VwdGlvbih0aGlzLmxleC5uZXh0VG9rZW4oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZEV4Y2VwdGlvbih0b2tlbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VOZXdFeHByZXNzaW9uKCk6IElFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgbGV0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0S2V5d29yZChcIm5ld1wiKSkgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhbGxFeHByID0gdGhpcy5wYXJzZUxlZnRIYW5kU2lkZUV4cHJlc3Npb24oZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAoIWNhbGxFeHByKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IGFyZ3MsXHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIihcIikpIHtcclxuICAgICAgICAgICAgICAgIGFyZ3MgPSB0aGlzLnBhcnNlQXJndW1lbnRzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFyZ3MpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25OZXcoY2FsbEV4cHIsIGFyZ3MgfHwgW10sIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VBcmd1bWVudHMoKTogSUV4cHJlc3Npb25bXSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIihcIikpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgY29uc3QgZXhwcnM6IElFeHByZXNzaW9uW10gPSBbXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCIpXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBleHBycztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLnBhcnNlQXNzaWdubWVudEV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIGlmICghZXhwcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGV4cHJzLnB1c2goZXhwcik7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwiKVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIixcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEV4Y2VwdGlvbih0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZXhwcnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VBcnJheUxpdGVyYWwoKTogSU5vZGUge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCJbXCIpKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgYXJyYXlFeHByczogSU5vZGVbXSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnRyaW1BcnJheUNvbW1hcyhhcnJheUV4cHJzKTtcclxuICAgICAgICAgICAgd2hpbGUgKCF0aGlzLmxleC5tYXRjaFB1bmN0dWF0aW9uKFwiXVwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXNzaWduRXhwciA9IHRoaXMucGFyc2VBc3NpZ25tZW50RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhc3NpZ25FeHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgYXJyYXlFeHBycy5wdXNoKGFzc2lnbkV4cHIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGV4Lm1hdGNoUHVuY3R1YXRpb24oXCIsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmltQXJyYXlDb21tYXMoYXJyYXlFeHBycyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25BcnJheShhcnJheUV4cHJzLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKHRva2VuKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHRyaW1BcnJheUNvbW1hcyhhcnJheUV4cHJzOiBJTm9kZVtdKSB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmxleC5tYXRjaFB1bmN0dWF0aW9uKFwiLFwiKSkge1xyXG4gICAgICAgICAgICAgICAgYXJyYXlFeHBycy5wdXNoKG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VPYmplY3RMaXRlcmFsKCk6IElOb2RlIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwie1wiKSkgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnRpZXM6IElQcm9wZXJ0eVtdID0gW107XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIn1cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5wYXJzZVByb3BlcnR5QXNzaWdubWVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwcm9wZXJ0eSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaChwcm9wZXJ0eSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwifVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCIsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXhjZXB0aW9uKHRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbk9iamVjdChwcm9wZXJ0aWVzLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKHRva2VuKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VQcm9wZXJ0eUFzc2lnbm1lbnQoKTogSVByb3BlcnR5IHtcclxuICAgICAgICAgICAgbGV0IGtpbmQ6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgIGxldCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzSWRlbnRpZmllclZhbHVlKGluaXRpYWxUb2tlbiwgXCJnZXRcIikpIHtcclxuICAgICAgICAgICAgICAgIGtpbmQgPSBcImdldFwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGV4LmlzSWRlbnRpZmllclZhbHVlKGluaXRpYWxUb2tlbiwgXCJzZXRcIikpIHtcclxuICAgICAgICAgICAgICAgIGtpbmQgPSBcInNldFwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAga2luZCA9IFwiaW5pdFwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSB0aGlzLnBhcnNlUHJvcGVydHlOYW1lKCk7XHJcbiAgICAgICAgICAgIGlmICghcHJvcGVydHlOYW1lKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IHRva2VuID0gdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwiOlwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhwciA9IHRoaXMucGFyc2VBc3NpZ25tZW50RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFleHByKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZU9iamVjdFByb3BlcnR5KHByb3BlcnR5TmFtZSwgZXhwciwga2luZCwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIihcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhcmdzOiBJSWRlbnRpZmllcltdID0gW107XHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc0lkZW50aWZpZXIodG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJnID0gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVJZGVudGlmaWVyKHRva2VuLnZhbHVlLCB0aGlzLnRyYWNrUG9zaXRpb25VbmFyeSh0b2tlbikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaChhcmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIilcIikpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCIpXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFeGNlcHRpb24odG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCJ7XCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZnVuY3Rpb25Cb2R5ID0gdGhpcy5wYXJzZUZ1bmN0aW9uQm9keSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwifVwiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZ1bmN0aW9uRXhwciA9IHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbkZ1bmN0aW9uKG51bGwsIGFyZ3MsIGZ1bmN0aW9uQm9keSwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbih0b2tlbikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlT2JqZWN0UHJvcGVydHkocHJvcGVydHlOYW1lLCBmdW5jdGlvbkV4cHIsIGtpbmQsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFeGNlcHRpb24odG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VQcm9wZXJ0eU5hbWUoKTogSUxpdGVyYWwgfCBJSWRlbnRpZmllciB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc0xpdGVyYWwodG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4uc3ViVHlwZSA9PT0gbGV4aWNhbC5MaXRlcmFsU3ViVHlwZS5zdHJpbmdcclxuICAgICAgICAgICAgICAgICAgICB8fCB0b2tlbi5zdWJUeXBlID09PSBsZXhpY2FsLkxpdGVyYWxTdWJUeXBlLm51bWJlclxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlTGl0ZXJhbCh0b2tlbi52YWx1ZSwgdGhpcy50cmFja1Bvc2l0aW9uVW5hcnkodG9rZW4pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUlkZW50aWZpZXIodG9rZW4udmFsdWUsIHRoaXMudHJhY2tQb3NpdGlvblVuYXJ5KHRva2VuKSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGV4LmlzSWRlbnRpZmllcih0b2tlbikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUlkZW50aWZpZXIodG9rZW4udmFsdWUsIHRoaXMudHJhY2tQb3NpdGlvblVuYXJ5KHRva2VuKSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFeGNlcHRpb24odG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VGdW5jdGlvbkJvZHkoKTogSUJsb2NrU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgdGhpcy5uZXdTd2l0Y2hTY29wZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm5ld0l0ZXJhdGlvblNjb3BlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmVnaW5GdW5jdGlvbigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgc3RtdCA9IHRoaXMucGFyc2VCbG9ja1N0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hGdW5jdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RvcmVTd2l0Y2hTY29wZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RvcmVJdGVyYXRpb25TY29wZSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHN0bXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
