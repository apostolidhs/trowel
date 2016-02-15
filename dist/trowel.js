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
                                readableTokensMode: false,
                                includeCommentsAsNormalTokens: false
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
                                case 'if':
                                    return this.parseIfStatement();
                                case 'while':
                                    return this.parseWhileStatement();
                                case 'do':
                                    return this.parseDoWhileStatement();
                                case 'for':
                                    return this.parseForStatement();
                                }
                            }
                            if (this.lex.isPunctuation(token)) {
                                switch (token.value) {
                                case '{':
                                    return this.parseBlockStatement();
                                case ';':
                                    return this.parseEmptyStatement();
                                }
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
                        Parser.prototype.parseWhileStatement = function () {
                            var initialToken = this.lex.lookAheadNextToken();
                            var testExpr = this.parseKeywordLparExpressionRpar('while');
                            if (!testExpr)
                                return;
                            var stmt = this.parseStatement();
                            if (stmt) {
                                return this.nodeFactory.createStatementWhile(testExpr, stmt, this.trackPositionByToken(initialToken));
                            }
                        };
                        Parser.prototype.parseDoWhileStatement = function () {
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
                        Parser.prototype.parseForStatement = function () {
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
                            if (!expr)
                                return;
                            if (!this.trimOptionalSemicolon())
                                return;
                            return this.nodeFactory.createStatementExpression(expr, this.trackPositionByToken(initialToken));
                        };
                        Parser.prototype.parseFunctionDeclaration = function () {
                            throw new Error('not implemented yet');
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
                                    return this.parseFunctionExpression();
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
                                    args.push(token.value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL2xleGljYWwvSUxleGVyLnRzIiwiZnJvbnRlbmQvdXRpbGl0aWVzL0NoYXJQb2ludHMudHMiLCJmcm9udGVuZC9sZXhpY2FsL1Rva2VuRGVmaW5pdGlvbnMudHMiLCJmcm9udGVuZC9sZXhpY2FsL0lkZW50aWZ5ZXJzLnRzIiwiZnJvbnRlbmQvbGV4aWNhbC9MZXhlci50cyIsInNyYy90cm93ZWwuanMiLCJmcm9udGVuZC91dGlsaXRpZXMvRXhjZXB0aW9uLnRzIiwiZnJvbnRlbmQvbGV4aWNhbC9DaGFyYWN0ZXJTdHJlYW0udHMiLCJmcm9udGVuZC9hcGkudHMiLCJmcm9udGVuZC9zeW50YXgvTm9kZUZhY3RvcnkudHMiLCJmcm9udGVuZC9zeW50YXgvUGFyc2VyLnRzIiwiZnJvbnRlbmQvdXRpbGl0aWVzL0Fzc2VydGlvbi50cyJdLCJuYW1lcyI6WyJ0cmwiLCJ0cmwuZnJvbnRlbmQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbCIsInRybC5mcm9udGVuZC5sZXhpY2FsLlRva2VuVHlwZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxpdGVyYWxTdWJUeXBlIiwidHJsLmZyb250ZW5kLnV0aWxpdGllcyIsInRybC5mcm9udGVuZC51dGlsaXRpZXMuQ2hhclBvaW50cyIsInRybC5mcm9udGVuZC51dGlsaXRpZXMuQ2hhclBvaW50cy5jcmVhdGVTdHJpbmdGcm9tQ2hhclBvaW50R2VuZXJhdG9yIiwidHJsLmZyb250ZW5kLnV0aWxpdGllcy5DaGFyUG9pbnRzLmdldERpZ2l0RnJvbUNoYXJQb2ludCIsInRybC5mcm9udGVuZC51dGlsaXRpZXMuQ2hhclBvaW50cy5jb2RlUG9pbnRBdCIsInRybC5mcm9udGVuZC51dGlsaXRpZXMuQ2hhclBvaW50cy5mcm9tQ29kZVBvaW50IiwidHJsLmZyb250ZW5kLmxleGljYWwuVG9rZW5EZWZpbml0aW9ucyIsInRybC5mcm9udGVuZC5sZXhpY2FsLklkZW50aWZ5ZXJzIiwidHJsLmZyb250ZW5kLmxleGljYWwuSWRlbnRpZnllcnMuaXNIZXhEaWdpdCIsInRybC5mcm9udGVuZC5sZXhpY2FsLklkZW50aWZ5ZXJzLmlzRGlnaXQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5JZGVudGlmeWVycy5pc0tleXdvcmQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5JZGVudGlmeWVycy5pc0xpbmVUZXJtaW5hdG9yIiwidHJsLmZyb250ZW5kLmxleGljYWwuSWRlbnRpZnllcnMuaXNJZGVudGlmaWVyU3RhcnQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5JZGVudGlmeWVycy5pc0lkZW50aWZpZXJQYXJ0IiwidHJsLmZyb250ZW5kLmxleGljYWwuSWRlbnRpZnllcnMuaXNTaW1wbGVVbmljb2RlQ29udGludWUiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5JZGVudGlmeWVycy5pc0NvbXBsZXhVbmljb2RlQ29udGludWUiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5JZGVudGlmeWVycy5pc1NpbXBsZVVuaWNvZGVTdGFydCIsInRybC5mcm9udGVuZC5sZXhpY2FsLklkZW50aWZ5ZXJzLmlzQ29tcGxleFVuaWNvZGVTdGFydCIsInRybC5mcm9udGVuZC5sZXhpY2FsLklkZW50aWZ5ZXJzLmlzUHVuY3R1YXRpb25TdGFydCIsInRybC5mcm9udGVuZC5sZXhpY2FsLnRvUmVhZGFibGVUb2tlblR5cGUiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC50b1JlYWRhYmxlTGl0ZXJhbFN1YlR5cGUiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlciIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmNvbnN0cnVjdG9yIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuaW5pdGlhdGVDaGFyZWN0ZXJMb29rdXBPbmNlIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuaXNFcnJvciIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmlzRW9mIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuaXNDb21tZW50IiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuaXNMaXRlcmFsIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuaXNQdW5jdHVhdGlvbiIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmlzS2V5d29yZCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmlzSWRlbnRpZmllciIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmlzUHVuY3R1YXRpb25WYWx1ZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmlzS2V5d29yZFZhbHVlIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuaXNJZGVudGlmaWVyVmFsdWUiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5tYXRjaFB1bmN0dWF0aW9uIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIubWF0Y2hLZXl3b3JkIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIubmV4dFRva2VuIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuYmVnaW5TdGF0ZXMiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5sYXRlc3RUb2tlbiIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmxvb2tBaGVhZE5leHRUb2tlbiIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmhhc05leHQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5nZXRDb21tZW50cyIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmdldEN1cnJlbnRDdXJzb3JQb3MiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zdGF0ZUluaXQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zdGF0ZUlkZW50aWZpZXIiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5nZW5TdGF0ZVN0cmluZyIsImNoYXJTdHJlYW0iLCJnZXROZXh0Q2hhciIsImNoYXJHZW4iLCJmcm9udGVuZCIsInV0aWxpdGllcyIsIkNoYXJQb2ludHMiLCJjcmVhdGVTdHJpbmdGcm9tQ2hhclBvaW50R2VuZXJhdG9yIiwiY2hhciIsInN0cmluZ1Rlcm1pbmF0b3JDaGFyIiwiUE5DIiwiYmFja3NsYXNoIiwiYiIsImFkZENoYXJQb2ludCIsImYiLCJuIiwiciIsInQiLCJ2IiwieCIsImhhbmRsZVNjYW5IZXhEaWdpdHMiLCJTdGF0ZXMiLCJlcnJvciIsInUiLCJsZXhpY2FsIiwiSWRlbnRpZnllcnMiLCJpc0xpbmVUZXJtaW5hdG9yIiwiaGFuZGxlTmV3TGluZSIsInVuZGVmaW5lZCIsImV4Y2VwdGlvbkhhbmRsZXIiLCJhZGRFeGNlcHRpb24iLCJsaW5lbm8iLCJnZXRDdXJzb3IiLCJ0b2tlbiIsImNyZWF0ZVRva2VuIiwiVG9rZW5UeXBlIiwibGl0ZXJhbCIsImdldFN0cmluZyIsIkxpdGVyYWxTdWJUeXBlIiwic3RyaW5nIiwiZmluaXNoIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc3RhdGVOdW1iZXIiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zdGF0ZURvdE9yTnVtYmVyIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc3RhdGVEaXZPckNvbW1lbnQiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zdGF0ZVB1bmN0dWF0aW9uU2luZ2xlIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc3RhdGVXaGl0ZVNwYWNlIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc3RhdGVMaW5lVGVybWluYXRvciIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnN0YXRlU2luZ2xlQ29tbWVudCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnN0YXRlTXVsdGlDb21tZW50IiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuc2NhblVuaWNvZGVFc2NhcGVTZXF1ZW5jZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnNjYW5FeHBvbmVuc2lhbEFuZENyZWF0ZU51bWJlciIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnNjYW5EaWdpdHMiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zY2FuRGVjaW1hbCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnNjYW5FeHBvbmVudGlhbCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLnNjYW5IZXhEaWdpdHMiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5zY2FuSGV4RGlnaXRzVGltZXMiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5nZW5QdW5jdHVhdGlvblNjYW5uZXIiLCJmd2RDdXJzb3IiLCJpIiwibGFzdExlbiIsInB1bmNzTG9va3VwIiwiYndkQ3Vyc29yIiwiY3JlYXRlVG9rZW5Gcm9tUG9zIiwicHVuY3R1YXRpb24iLCJzdGFydFBvcyIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmNyZWF0ZVBvcyIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmNyZWF0ZVRva2VuRnJvbVBvcyIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmNyZWF0ZVRva2VuIiwidHJsLmZyb250ZW5kLmxleGljYWwuTGV4ZXIuZ2VuSW50ZWdlckZyb21BcnJheSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmNyZWF0ZU51bWJlciIsInRybC5mcm9udGVuZC5sZXhpY2FsLkxleGVyLmhhbmRsZVNjYW5IZXhEaWdpdHMiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5MZXhlci5oYW5kbGVOZXdMaW5lIiwidHJsLmZyb250ZW5kLnV0aWxpdGllcy5FeGNlcHRpb25IYW5kbGVyIiwidHJsLmZyb250ZW5kLnV0aWxpdGllcy5FeGNlcHRpb25IYW5kbGVyLmNvbnN0cnVjdG9yIiwidHJsLmZyb250ZW5kLnV0aWxpdGllcy5FeGNlcHRpb25IYW5kbGVyLmFkZEV4Y2VwdGlvbiIsInRybC5mcm9udGVuZC51dGlsaXRpZXMuRXhjZXB0aW9uSGFuZGxlci5oYXNFeGNlcHRpb25zIiwidHJsLmZyb250ZW5kLnV0aWxpdGllcy5FeGNlcHRpb25IYW5kbGVyLmNsZWFyIiwidHJsLmZyb250ZW5kLnV0aWxpdGllcy5FeGNlcHRpb25IYW5kbGVyLmdldEV4Y2VwdGlvbnMiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0iLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0uY29uc3RydWN0b3IiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0uZ2V0TmV4dENoYXIiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0uZ2V0Q2hhciIsInRybC5mcm9udGVuZC5sZXhpY2FsLkNoYXJhY3RlclN0cmVhbS5nZXRDdXJzb3IiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0uYndkQ3Vyc29yIiwidHJsLmZyb250ZW5kLmxleGljYWwuQ2hhcmFjdGVyU3RyZWFtLmZ3ZEN1cnNvciIsInRybC5mcm9udGVuZC5sZXhpY2FsLkNoYXJhY3RlclN0cmVhbS5id2RDdXJzb3JSYW5nZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkNoYXJhY3RlclN0cmVhbS50b2tlbml6ZSIsInRybC5mcm9udGVuZC5sZXhpY2FsLkNoYXJhY3RlclN0cmVhbS5tYXRjaCIsInRybC5mcm9udGVuZC5sZXhpY2FsLkNoYXJhY3RlclN0cmVhbS5tYXRjaENvbXBsZXgiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0uaXNFb2YiLCJ0cmwuZnJvbnRlbmQubGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0uaGFzTmV4dCIsInRybC5mcm9udGVuZC5hcGkiLCJ0cmwuZnJvbnRlbmQuYXBpLnRva2VuaXplIiwidHJsLmZyb250ZW5kLnN5bnRheCIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNvbnN0cnVjdG9yIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVOb2RlIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVQcm9ncmFtIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRFbXB0eSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50QmxvY2siLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudEV4cHJlc3Npb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudElmIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRCcmVhayIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50Q29udGludWUiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVN0YXRlbWVudFN3aXRjaCIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50UmV0dXJuIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRUaHJvdyIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50VHJ5IiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRXaGlsZSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50RG9XaGlsZSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50Rm9yIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRGb3JJbiIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50RGVidWdnZXIiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZURlY2xhcmF0aW9uRnVuY3Rpb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZURlY2xhcmF0aW9uVmFyaWFibGUiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZVZhcmlhYmxlRGVjbGFyYXRvciIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvblRoaXMiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25BcnJheSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbk9iamVjdCIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlT2JqZWN0UHJvcGVydHkiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25GdW5jdGlvbiIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvblNlcXVlbmNlIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uVW5hcnkiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25CaW5hcnkiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25Bc3NpZ25tZW50IiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uVXBkYXRlIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uTG9naWNhbCIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbkNvbmRpdGlvbmFsIiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uTmV3IiwidHJsLmZyb250ZW5kLnN5bnRheC5Ob2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uQ2FsbCIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbk1lbWJlciIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlU3dpdGNoQ2FzZSIsInRybC5mcm9udGVuZC5zeW50YXguTm9kZUZhY3RvcnkuY3JlYXRlQ2F0Y2hDbGF1c2UiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUlkZW50aWZpZXIiLCJ0cmwuZnJvbnRlbmQuc3ludGF4Lk5vZGVGYWN0b3J5LmNyZWF0ZUxpdGVyYWwiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlciIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmNvbnN0cnVjdG9yIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuYWRkRXhjZXB0aW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIudHJpbU9wdGlvbmFsU2VtaWNvbG9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIudHJhY2tQb3NpdGlvblVuYXJ5IiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIudHJhY2tQb3NpdGlvbkJ5UG9zIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIudHJhY2tQb3NpdGlvbkJ5VG9rZW4iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5jcmVhdGVMb2MiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5leHBlY3RQdW5jdHVhdGlvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmV4cGVjdEtleXdvcmQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci50b2tlbklzSW5TYW1lTGluZSIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VTb3VyY2VFbGVtZW50cyIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlU291cmNlRWxlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlU3RhdGVtZW50IiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VCbG9ja1N0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlRW1wdHlTdGF0ZW1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUlmU3RhdGVtZW50IiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VXaGlsZVN0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlRG9XaGlsZVN0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlRm9yU3RhdGVtZW50IiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VLZXl3b3JkTHBhckV4cHJlc3Npb25ScGFyIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VWYXJpYWJsZVN0YXRlbWVudCIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlVmFyaWFibGVEZWNsYXJhdG9ycyIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlVmFyaWFibGVEZWNsYXJhdG9yIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VFeHByZXNzaW9uU3RhdGVtZW50IiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VGdW5jdGlvbkRlY2xhcmF0aW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VFeHByZXNzaW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuaXNMZWZ0SGFuZEV4cHJlc3Npb25SZXNvbHZpbmdUb1JlZmVyZW5jZSIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlQXNzaWdubWVudEV4cHJlc3Npb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUNvbmRpdGlvbmFsRXhwcmVzc2lvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLmlzTG9naWNCaW5hcnlUb2tlblZhbHVlIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIuY3JlYXRlQmluYXJ5RXhwcmVzc2lvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlQmluYXJ5RXhwcmVzc2lvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlVW5hcnlFeHByZXNzaW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VQb3N0Zml4RXhwcmVzc2lvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlSWRlbnRpZmllciIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlTGVmdEhhbmRTaWRlRXhwcmVzc2lvbiIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlUHJpbWFyeUV4cHJlc3Npb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZU5ld0V4cHJlc3Npb24iLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZUFyZ3VtZW50cyIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlQXJyYXlMaXRlcmFsIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIudHJpbUFycmF5Q29tbWFzIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VPYmplY3RMaXRlcmFsIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VQcm9wZXJ0eUFzc2lnbm1lbnQiLCJ0cmwuZnJvbnRlbmQuc3ludGF4LlBhcnNlci5wYXJzZVByb3BlcnR5TmFtZSIsInRybC5mcm9udGVuZC5zeW50YXguUGFyc2VyLnBhcnNlRnVuY3Rpb25FeHByZXNzaW9uIiwidHJsLmZyb250ZW5kLnN5bnRheC5QYXJzZXIucGFyc2VGdW5jdGlvbkJvZHkiLCJ0cmwuZnJvbnRlbmQudXRpbGl0aWVzLmFzc2VydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztRQUFBLElBQU9BLEdB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Z0JBQUNDLElBQUFBLFNBQUFBLENBQUREO0FBQUFBLGdCQUFDQyxDQUFBQSxVQUFBQSxTQUFBQSxFQUFVQTtBQUFBQSxvQkFFMUJJLFNBQUFBLE1BQUFBLENBQXVCQSxJQUF2QkEsRUFBa0NBLEdBQWxDQSxFQUE4Q0E7QUFBQUEsd0JBQzFDb08sSUFBR0EsQ0FBQ0EsSUFBSkEsRUFBVUE7QUFBQUEsNEJBQ05BLE1BQU1BLElBQUlBLEtBQUpBLENBQVVBLHFCQUFtQkEsR0FBN0JBLENBQU5BLENBRE1BO0FBQUFBLHlCQURnQ3BPO0FBQUFBLHFCQUZwQko7QUFBQUEsb0JBRVZJLFNBQUFBLENBQUFBLE1BQUFBLEdBQU1BLE1BQU5BLENBRlVKO0FBQUFBLGlCQUFWQSxDQUFBQSxTQUFBQSxHQUFBQSxRQUFBQSxDQUFBQSxTQUFBQSxJQUFBQSxDQUFBQSxRQUFBQSxDQUFBQSxTQUFBQSxHQUFTQSxFQUFUQSxDQUFBQSxHQUFERDtBQUFBQSxhQUFSQSxDQUFBQSxRQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxRQUFBQSxJQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxRQUFBQSxHQUFRQSxFQUFSQSxDQUFBQSxHQUFEO0FBQUEsU0FBVixDQUFPQSxHQUFBLElBQUEsQ0FBQUEsR0FBQSxHQUFHLEVBQUgsQ0FBUCxHIiwiZmlsZSI6InNyYy90cm93ZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUgdHJsLmZyb250ZW5kLmxleGljYWwge1xyXG5cdFxyXG4gICAgZXhwb3J0IGVudW0gVG9rZW5UeXBlIHtcclxuICAgICAgICBrZXl3b3JkID0gMSxcclxuICAgICAgICBpZGVudGlmaWVyLFxyXG4gICAgICAgIGxpdGVyYWwsXHJcbiAgICAgICAgcHVuY3R1YXRpb24sXHJcbiAgICAgICAgY29tbWVudCxcclxuICAgICAgICBlb2YsXHJcbiAgICAgICAgZXJyb3JcclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgIGV4cG9ydCBlbnVtIExpdGVyYWxTdWJUeXBlIHtcclxuICAgICAgICBzdHJpbmcgPSAxLFxyXG4gICAgICAgIG51bWJlcixcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIGJvb2xlYW5cclxuICAgIH07XHJcbiAgICBcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVRva2VuUG9zaXRpb24gIHtcclxuICAgICAgICBsaW5lOiBudW1iZXI7XHJcbiAgICAgICAgY29sdW1uOiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJVG9rZW5Tb3VyY2VMb2NhdGlvbiB7XHJcbiAgICAgICAgc291cmNlPzogc3RyaW5nO1xyXG4gICAgICAgIHN0YXJ0OiBJVG9rZW5Qb3NpdGlvbjtcclxuICAgICAgICBlbmQ6IElUb2tlblBvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElUb2tlbiB7XHJcbiAgICAgICAgdHlwZTogc3RyaW5nIHwgVG9rZW5UeXBlLFxyXG4gICAgICAgIHZhbHVlOiBhbnksXHJcbiAgICAgICAgc3ViVHlwZT86IHN0cmluZyB8IExpdGVyYWxTdWJUeXBlLFxyXG4gICAgICAgIGxvYz86IElUb2tlblNvdXJjZUxvY2F0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJTGV4ZXJPcHRpb25zIHtcclxuICAgICAgICBsb2M/OiBib29sZWFuO1xyXG4gICAgICAgIHJlYWRhYmxlVG9rZW5zTW9kZT86IGJvb2xlYW47XHJcbiAgICAgICAgaW5jbHVkZUNvbW1lbnRzQXNOb3JtYWxUb2tlbnM/OiBib29sZWFuO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUxleGVyIHtcclxuICAgICAgICAvLyBnZXQgbmV4dCB0b2tlblxyXG4gICAgICAgIG5leHRUb2tlbigpOiBJVG9rZW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgbmV4dCB0b2tlblxyXG4gICAgICAgIGhhc05leHQoKTogYm9vbGVhbjtcclxuICAgICAgICBcclxuICAgICAgICAvLyByZXR1cm5zIHRoZSBsYXN0IHBhcnNlZCB0b2tlblxyXG4gICAgICAgIGxhdGVzdFRva2VuKCk6IElUb2tlbjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBhY3RzIGxpa2UgbG9va2luZyBmb3J3YXJkIGJ5IHJldHVybmluZyB0aGUgbmV4dCB0b2tlbi5cclxuICAgICAgICAvLyBuZXh0VG9rZW4oKSwgYW5kIGhhc1Rva2VuKCkgZG9lcyBub3QgZWZmZWN0ZWRcclxuICAgICAgICBsb29rQWhlYWROZXh0VG9rZW4oKTogSVRva2VuOyAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGFyZ3VtZW50IGlzIHR5cGUgb2YgZXJyb3IgdHlwZVxyXG4gICAgICAgIGlzRXJyb3IodG9rZW46IElUb2tlbik6IGJvb2xlYW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGFyZ3VtZW50IGlzIHR5cGUgb2YgZW5kIG9mIGZpbGUgdHlwZVxyXG4gICAgICAgIGlzRW9mKHRva2VuOiBJVG9rZW4pOiBib29sZWFuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBhcmd1bWVudCBpcyB0eXBlIG9mIGNvbW1lbnQgdHlwZVxyXG4gICAgICAgIGlzQ29tbWVudCh0b2tlbjogSVRva2VuKTogYm9vbGVhbjsgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBhcmd1bWVudCBpcyB0eXBlIG9mIGxpdGVyYW4gdHlwZVxyXG4gICAgICAgIGlzTGl0ZXJhbCh0b2tlbjogSVRva2VuKTogYm9vbGVhbjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgYXJndW1lbnQgaXMgdHlwZSBvZiBwdW5jdHVhdGlvbiB0eXBlXHJcbiAgICAgICAgaXNQdW5jdHVhdGlvbih0b2tlbjogSVRva2VuKTogYm9vbGVhbjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgYXJndW1lbnQgaXMgdHlwZSBvZiBrZXl3b3JkIHR5cGVcclxuICAgICAgICBpc0tleXdvcmQodG9rZW46IElUb2tlbik6IGJvb2xlYW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGFyZ3VtZW50IGlzIHR5cGUgb2YgaWRlbnRpZmllciB0eXBlXHJcbiAgICAgICAgaXNJZGVudGlmaWVyKHRva2VuOiBJVG9rZW4pOiBib29sZWFuO1xyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgYXJndW1lbnQgaXMgdHlwZSBvZiBwdW5jdHVhdGlvbiB0eXBlXHJcbiAgICAgICAgLy8gYW5kIGlzIGVxdWFsIHdpdGggdGhlIHNwZWNpZmljIHZhbHVlXHJcbiAgICAgICAgaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuOiBJVG9rZW4sIHZhbHVlOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBhcmd1bWVudCBpcyB0eXBlIG9mIGtleXdvcmQgdHlwZVxyXG4gICAgICAgIC8vIGFuZCBpcyBlcXVhbCB3aXRoIHRoZSBzcGVjaWZpYyB2YWx1ZVxyXG4gICAgICAgIGlzS2V5d29yZFZhbHVlKHRva2VuOiBJVG9rZW4sIHZhbHVlOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBhcmd1bWVudCBpcyB0eXBlIG9mIGlkZW50aWZpZXIgdHlwZVxyXG4gICAgICAgIC8vIGFuZCBpcyBlcXVhbCB3aXRoIHRoZSBzcGVjaWZpYyB2YWx1ZVxyXG4gICAgICAgIGlzSWRlbnRpZmllclZhbHVlKHRva2VuOiBJVG9rZW4sIHZhbHVlOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnN1bWUgdGhlIG5leHQgdG9rZW4gaWYgaXRzIHR5cGUgaXMgcHVuY3R1YXRpb25cclxuICAgICAgICAvLyBhbmQgaXMgZXF1YWwgd2l0aCB0aGUgc3BlY2lmaWMgdmFsdWVcclxuICAgICAgICBtYXRjaFB1bmN0dWF0aW9uKHZhbHVlOiBzdHJpbmcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnN1bWUgdGhlIG5leHQgdG9rZW4gaWYgaXRzIHR5cGUgaXMga2V5d29yZFxyXG4gICAgICAgIC8vIGFuZCBpcyBlcXVhbCB3aXRoIHRoZSBzcGVjaWZpYyB2YWx1ZVxyXG4gICAgICAgIG1hdGNoS2V5d29yZCh2YWx1ZTogc3RyaW5nKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyByZXR1cm5zIGFsbCB0aGUgY29tbWVudHMgdGhhdCBoYXZlIGJlZW4gXHJcbiAgICAgICAgLy8gY29sbGVjdGVkIHNpbmNlIHRoZSBjdXJyZW50IGV4ZWN1dGlvbiBcclxuICAgICAgICBnZXRDb21tZW50cygpOiBJVG9rZW5bXTtcclxuICAgICAgICBcclxuICAgICAgICAvLyByZXR1cm5zIHRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIGN1cnNvciBpcyB0aGUgc291cmNlIHN0cmVhbVxyXG4gICAgICAgIGdldEN1cnJlbnRDdXJzb3JQb3MoKTogSVRva2VuUG9zaXRpb247XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90c0RlZmluaXRpb25zL3RzZC5kLnRzXCIgLz5cclxuXHJcbm1vZHVsZSB0cmwuZnJvbnRlbmQudXRpbGl0aWVzIHtcclxuXHRcclxuXHRleHBvcnQgaW50ZXJmYWNlIElTdHJpbmdGcm9tQ2hhclBvaW50IHtcclxuXHRcdGFkZENoYXJQb2ludChjaGFyOiBudW1iZXIpO1xyXG5cdFx0Z2V0U3RyaW5nKCk6IHN0cmluZztcclxuXHR9XHJcblx0XHJcblx0ZXhwb3J0IGNsYXNzIENoYXJQb2ludHMge1xyXG5cdFx0c3RhdGljIGNyZWF0ZVN0cmluZ0Zyb21DaGFyUG9pbnRHZW5lcmF0b3IoKTogSVN0cmluZ0Zyb21DaGFyUG9pbnQge1xyXG5cdFx0XHRsZXQgY2hhckJ1ZmZlcjogc3RyaW5nW10gPSBbXTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRhZGRDaGFyUG9pbnQ6IChjaGFyOiBudW1iZXIpID0+IHtcclxuXHRcdFx0XHRcdGNoYXJCdWZmZXIucHVzaChDaGFyUG9pbnRzLmZyb21Db2RlUG9pbnQoY2hhcikpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Z2V0U3RyaW5nOiAoKTogc3RyaW5nID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBjaGFyQnVmZmVyLmpvaW4oJycpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHJpdmF0ZSBzdGF0aWMgWkVST19DSEFSX0NPREUgPSBcIjBcIi5jaGFyQ29kZUF0KDApO1xyXG5cdFx0c3RhdGljIGdldERpZ2l0RnJvbUNoYXJQb2ludChjOiBudW1iZXIpOiBudW1iZXIge1xyXG5cdFx0XHRyZXR1cm4gYyAtIENoYXJQb2ludHMuWkVST19DSEFSX0NPREU7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHN0YXRpYyBjb2RlUG9pbnRBdChzdHI6IHN0cmluZywgcG9zOiBudW1iZXIpOiBudW1iZXIge1xyXG5cdFx0XHRyZXR1cm4gKDxhbnk+c3RyKS5jb2RlUG9pbnRBdChwb3MpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRzdGF0aWMgZnJvbUNvZGVQb2ludChwb2ludDogbnVtYmVyKTogc3RyaW5nIHtcclxuXHRcdFx0cmV0dXJuICg8YW55PlN0cmluZykuZnJvbUNvZGVQb2ludChwb2ludCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG59IiwiXHJcbm1vZHVsZSB0cmwuZnJvbnRlbmQubGV4aWNhbCB7XHJcblx0Y29uc3QgdCA9IHRydWU7XHJcblx0XHJcblx0ZXhwb3J0IGNsYXNzIFRva2VuRGVmaW5pdGlvbnMge1xyXG5cdFxyXG5cdFx0c3RhdGljIFdTID0ge1xyXG5cdFx0XHQweDAwMDk6IHQsXHJcblx0XHRcdDB4MDAwQjogdCxcclxuXHRcdFx0MHgwMDBDOiB0LFxyXG5cdFx0XHQweDAwMjA6IHQsXHJcblx0XHRcdDB4MDBBMDogdCxcclxuXHRcdFx0MHhGRUZGOiB0XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRzdGF0aWMgTFQgPSB7XHJcblx0XHRcdDB4MDAwQTogdCxcclxuXHRcdFx0MHgwMDBEOiB0LCAvL2NyXHJcblx0XHRcdDB4MjAyODogdCxcclxuXHRcdFx0MHgyMDI6IHRcclxuXHRcdH07XHJcblxyXG4vLyAweDIwMEM6IHQsIC8vendualxyXG4vLyAweDIwMEQ6IHQsIC8vendqXHJcblx0XHRcdFx0XHJcblx0XHRzdGF0aWMgS1cgPSB7XHJcblx0XHRcdGJyZWFrOiB0LFxyXG5cdFx0XHRkbzogdCxcclxuXHRcdFx0aW5zdGFuY2VvZjogdCxcclxuXHRcdFx0dHlwZW9mOiB0LFxyXG5cdFx0XHRjYXNlOiB0LFxyXG5cdFx0XHRlbHNlOiB0LFxyXG5cdFx0XHRuZXc6IHQsXHJcblx0XHRcdHZhcjogdCxcclxuXHRcdFx0Y2F0Y2g6IHQsXHJcblx0XHRcdGZpbmFsbHk6IHQsXHJcblx0XHRcdHJldHVybjogdCxcclxuXHRcdFx0dm9pZDogdCxcclxuXHRcdFx0Y29udGludWU6IHQsXHJcblx0XHRcdGZvcjogdCxcclxuXHRcdFx0c3dpdGNoOiB0LFxyXG5cdFx0XHR3aGlsZTogdCxcclxuXHRcdFx0ZGVidWdnZXI6IHQsXHJcblx0XHRcdGZ1bmN0aW9uOiB0LFxyXG5cdFx0XHR0aGlzOiB0LFxyXG5cdFx0XHR3aXRoOiB0LFxyXG5cdFx0XHRkZWZhdWx0OiB0LFxyXG5cdFx0XHRpZjogdCxcclxuXHRcdFx0dGhyb3c6IHQsXHJcblx0XHRcdGRlbGV0ZTogdCxcclxuXHRcdFx0aW46IHQsXHJcblx0XHRcdHRyeTogdCxcclxuXHRcclxuXHRcdFx0Y2xhc3M6IHQsXHJcblx0XHRcdGVudW06IHQsXHJcblx0XHRcdGV4dGVuZHM6IHQsXHJcblx0XHRcdHN1cGVyOiB0LFxyXG5cdFx0XHRjb25zdDogdCxcclxuXHRcdFx0ZXhwb3J0OiB0LFxyXG5cdFx0XHRpbXBvcnQ6IHQsXHJcblx0XHJcblx0XHRcdGltcGxlbWVudHM6IHQsXHJcblx0XHRcdGxldDogdCxcclxuXHRcdFx0cHJpdmF0ZTogdCxcclxuXHRcdFx0cHVibGljOiB0LFxyXG5cdFx0XHRpbnRlcmZhY2U6IHQsXHJcblx0XHRcdHBhY2thZ2U6IHQsXHJcblx0XHRcdHByb3RlY3RlZDogdCxcclxuXHRcdFx0c3RhdGljOiB0LFxyXG5cdFx0XHR5aWVsZDogdFxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0c3RhdGljIExJVCA9IHtcclxuXHRcdFx0bnVsbDogdCxcclxuXHRcdFx0dHJ1ZTogdCxcclxuXHRcdFx0ZmFsc2U6IHRcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHN0YXRpYyBQTkNfU0lOR0xFID0ge1xyXG5cdFx0XHRsYnJhY2U6IDEyMyxcclxuXHRcdFx0cmJyYWNlOiAxMjUsXHJcblx0XHRcdGxwYXJlbnRoOiA0MCxcclxuXHRcdFx0cnBhcmVudGg6IDQxLFxyXG5cdFx0XHRsYnJhY2tldDogOTEsXHJcblx0XHRcdHJicmFja2V0OiA5MyxcclxuXHRcdFx0ZG90OiA0NixcclxuXHRcdFx0c2VtaWNvbG9uOiA1OSxcclxuXHRcdFx0Y29tbWE6IDQ0LFxyXG5cdFx0XHRsZXNzOiA2MCxcclxuXHRcdFx0bW9yZTogNjIsXHJcblx0XHRcdHBsdXM6IDQzLFxyXG5cdFx0XHRtaW51czogNDUsXHJcblx0XHRcdHBlcmNlbnQ6IDM3LFxyXG5cdFx0XHRhbXBlcnNhbmQ6IDM4LFxyXG5cdFx0XHR2ZXJ0aWNhbDogMTI0LFxyXG5cdFx0XHRjYXJldDogOTQsXHJcblx0XHRcdGV4Y2w6IDMzLFxyXG5cdFx0XHR0aWxkZTogMTI2LFxyXG5cdFx0XHRxdWVzdDogNjMsXHJcblx0XHRcdGNvbG9uOiA1OCxcclxuXHRcdFx0YXNzaWduOiA2MSxcclxuXHRcdFx0YXN0ZXJpc2s6IDQyLFxyXG5cdFx0XHRzbGFzaDogNDcsXHJcblx0XHRcdGJhY2tzbGFzaDogOTIsXHJcblx0XHRcdGRvbGxhcjogMzYsXHJcblx0XHRcdGV4cDogMTAxLFxyXG5cdFx0XHRleHBiOiA2OSxcclxuXHRcdFx0YXBvc3Ryb3BoZTogMzksXHJcblx0XHRcdHFtYXJrOiAzNCxcclxuXHRcdFx0emVybzogNDgsXHJcblx0XHRcdFxyXG5cdFx0XHRiOiA5OCxcclxuXHRcdFx0ZjogMTAyLFxyXG5cdFx0XHRuOiAxMTAsXHJcblx0XHRcdHI6IDExNCxcclxuXHRcdFx0dDogMTE2LFxyXG5cdFx0XHR2OiAxMTgsXHJcblx0XHRcdHg6IDEyMCxcclxuXHRcdFx0dTogMTE3LFxyXG5cdFx0XHRcclxuXHRcdFx0bGY6IDB4MDAwQSxcclxuICAgICAgICAgICAgY3I6IDB4MDAwRFxyXG5cdFx0fTtcdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0c3RhdGljIFVOSUNPREVfVU5DT01NT05fVEhSRVNIT0xEID0gMTcwO1xyXG5cdFx0XHJcblx0XHRzdGF0aWMgVU5JQ09ERV9DT05USU5VRV9DT01NT04gPSB7IDB4MjAwQzogdCAvKiB6d25qICovLCAweDIwMEQ6IHQgLyogendqICovLCAzNjogdCAvKiAkICovLCA5MjogdCAvKiBcXCAqLywgXHJcblx0XHRcdDQ4OiB0LCA0OTogdCwgNTA6IHQsIDUxOiB0LCA1MjogdCwgNTM6IHQsIDU0OiB0LCA1NTogdCwgNTY6IHQsIDU3OiB0LCA2NTogdCwgNjY6IHQsIDY3OiB0LCA2ODogdCwgNjk6IHQsIDcwOiB0LCA3MTogdCwgNzI6IHQsIDczOiB0LCA3NDogdCwgNzU6IHQsIDc2OiB0LCA3NzogdCwgNzg6IHQsIDc5OiB0LCA4MDogdCwgODE6IHQsIDgyOiB0LCA4MzogdCwgODQ6IHQsIDg1OiB0LCA4NjogdCwgODc6IHQsIDg4OiB0LCA4OTogdCwgOTA6IHQsIDk1OiB0LCA5NzogdCwgOTg6IHQsIDk5OiB0LCAxMDA6IHQsIDEwMTogdCwgMTAyOiB0LCAxMDM6IHQsIDEwNDogdCwgMTA1OiB0LCAxMDY6IHQsIDEwNzogdCwgMTA4OiB0LCAxMDk6IHQsIDExMDogdCwgMTExOiB0LCAxMTI6IHQsIDExMzogdCwgMTE0OiB0LCAxMTU6IHQsIDExNjogdCwgMTE3OiB0LCAxMTg6IHQsIDExOTogdCwgMTIwOiB0LCAxMjE6IHQsIDEyMjogdCB9O1xyXG5cdFx0XHJcblx0XHRzdGF0aWMgVU5JQ09ERV9DT05USU5VRV9VTkNPTU1PTiA9IC9bXFx4QUFcXHhCNVxceEJBXFx4QzAtXFx4RDZcXHhEOC1cXHhGNlxceEY4LVxcdTAyNDFcXHUwMjUwLVxcdTAyQzFcXHUwMkM2LVxcdTAyRDFcXHUwMkUwLVxcdTAyRTRcXHUwMkVFXFx1MDMwMC1cXHUwMzZGXFx1MDM3QVxcdTAzODZcXHUwMzg4LVxcdTAzOEFcXHUwMzhDXFx1MDM4RS1cXHUwM0ExXFx1MDNBMy1cXHUwM0NFXFx1MDNEMC1cXHUwM0Y1XFx1MDNGNy1cXHUwNDgxXFx1MDQ4My1cXHUwNDg2XFx1MDQ4QS1cXHUwNENFXFx1MDREMC1cXHUwNEY5XFx1MDUwMC1cXHUwNTBGXFx1MDUzMS1cXHUwNTU2XFx1MDU1OVxcdTA1NjEtXFx1MDU4N1xcdTA1OTEtXFx1MDVCOVxcdTA1QkItXFx1MDVCRFxcdTA1QkZcXHUwNUMxXFx1MDVDMlxcdTA1QzRcXHUwNUM1XFx1MDVDN1xcdTA1RDAtXFx1MDVFQVxcdTA1RjAtXFx1MDVGMlxcdTA2MTAtXFx1MDYxNVxcdTA2MjEtXFx1MDYzQVxcdTA2NDAtXFx1MDY1RVxcdTA2NjAtXFx1MDY2OVxcdTA2NkUtXFx1MDZEM1xcdTA2RDUtXFx1MDZEQ1xcdTA2REYtXFx1MDZFOFxcdTA2RUEtXFx1MDZGQ1xcdTA2RkZcXHUwNzEwLVxcdTA3NEFcXHUwNzRELVxcdTA3NkRcXHUwNzgwLVxcdTA3QjFcXHUwOTAxLVxcdTA5MzlcXHUwOTNDLVxcdTA5NERcXHUwOTUwLVxcdTA5NTRcXHUwOTU4LVxcdTA5NjNcXHUwOTY2LVxcdTA5NkZcXHUwOTdEXFx1MDk4MS1cXHUwOTgzXFx1MDk4NS1cXHUwOThDXFx1MDk4RlxcdTA5OTBcXHUwOTkzLVxcdTA5QThcXHUwOUFBLVxcdTA5QjBcXHUwOUIyXFx1MDlCNi1cXHUwOUI5XFx1MDlCQy1cXHUwOUM0XFx1MDlDN1xcdTA5QzhcXHUwOUNCLVxcdTA5Q0VcXHUwOUQ3XFx1MDlEQ1xcdTA5RERcXHUwOURGLVxcdTA5RTNcXHUwOUU2LVxcdTA5RjFcXHUwQTAxLVxcdTBBMDNcXHUwQTA1LVxcdTBBMEFcXHUwQTBGXFx1MEExMFxcdTBBMTMtXFx1MEEyOFxcdTBBMkEtXFx1MEEzMFxcdTBBMzJcXHUwQTMzXFx1MEEzNVxcdTBBMzZcXHUwQTM4XFx1MEEzOVxcdTBBM0NcXHUwQTNFLVxcdTBBNDJcXHUwQTQ3XFx1MEE0OFxcdTBBNEItXFx1MEE0RFxcdTBBNTktXFx1MEE1Q1xcdTBBNUVcXHUwQTY2LVxcdTBBNzRcXHUwQTgxLVxcdTBBODNcXHUwQTg1LVxcdTBBOERcXHUwQThGLVxcdTBBOTFcXHUwQTkzLVxcdTBBQThcXHUwQUFBLVxcdTBBQjBcXHUwQUIyXFx1MEFCM1xcdTBBQjUtXFx1MEFCOVxcdTBBQkMtXFx1MEFDNVxcdTBBQzctXFx1MEFDOVxcdTBBQ0ItXFx1MEFDRFxcdTBBRDBcXHUwQUUwLVxcdTBBRTNcXHUwQUU2LVxcdTBBRUZcXHUwQjAxLVxcdTBCMDNcXHUwQjA1LVxcdTBCMENcXHUwQjBGXFx1MEIxMFxcdTBCMTMtXFx1MEIyOFxcdTBCMkEtXFx1MEIzMFxcdTBCMzJcXHUwQjMzXFx1MEIzNS1cXHUwQjM5XFx1MEIzQy1cXHUwQjQzXFx1MEI0N1xcdTBCNDhcXHUwQjRCLVxcdTBCNERcXHUwQjU2XFx1MEI1N1xcdTBCNUNcXHUwQjVEXFx1MEI1Ri1cXHUwQjYxXFx1MEI2Ni1cXHUwQjZGXFx1MEI3MVxcdTBCODJcXHUwQjgzXFx1MEI4NS1cXHUwQjhBXFx1MEI4RS1cXHUwQjkwXFx1MEI5Mi1cXHUwQjk1XFx1MEI5OVxcdTBCOUFcXHUwQjlDXFx1MEI5RVxcdTBCOUZcXHUwQkEzXFx1MEJBNFxcdTBCQTgtXFx1MEJBQVxcdTBCQUUtXFx1MEJCOVxcdTBCQkUtXFx1MEJDMlxcdTBCQzYtXFx1MEJDOFxcdTBCQ0EtXFx1MEJDRFxcdTBCRDdcXHUwQkU2LVxcdTBCRUZcXHUwQzAxLVxcdTBDMDNcXHUwQzA1LVxcdTBDMENcXHUwQzBFLVxcdTBDMTBcXHUwQzEyLVxcdTBDMjhcXHUwQzJBLVxcdTBDMzNcXHUwQzM1LVxcdTBDMzlcXHUwQzNFLVxcdTBDNDRcXHUwQzQ2LVxcdTBDNDhcXHUwQzRBLVxcdTBDNERcXHUwQzU1XFx1MEM1NlxcdTBDNjBcXHUwQzYxXFx1MEM2Ni1cXHUwQzZGXFx1MEM4MlxcdTBDODNcXHUwQzg1LVxcdTBDOENcXHUwQzhFLVxcdTBDOTBcXHUwQzkyLVxcdTBDQThcXHUwQ0FBLVxcdTBDQjNcXHUwQ0I1LVxcdTBDQjlcXHUwQ0JDLVxcdTBDQzRcXHUwQ0M2LVxcdTBDQzhcXHUwQ0NBLVxcdTBDQ0RcXHUwQ0Q1XFx1MENENlxcdTBDREVcXHUwQ0UwXFx1MENFMVxcdTBDRTYtXFx1MENFRlxcdTBEMDJcXHUwRDAzXFx1MEQwNS1cXHUwRDBDXFx1MEQwRS1cXHUwRDEwXFx1MEQxMi1cXHUwRDI4XFx1MEQyQS1cXHUwRDM5XFx1MEQzRS1cXHUwRDQzXFx1MEQ0Ni1cXHUwRDQ4XFx1MEQ0QS1cXHUwRDREXFx1MEQ1N1xcdTBENjBcXHUwRDYxXFx1MEQ2Ni1cXHUwRDZGXFx1MEQ4MlxcdTBEODNcXHUwRDg1LVxcdTBEOTZcXHUwRDlBLVxcdTBEQjFcXHUwREIzLVxcdTBEQkJcXHUwREJEXFx1MERDMC1cXHUwREM2XFx1MERDQVxcdTBEQ0YtXFx1MERENFxcdTBERDZcXHUwREQ4LVxcdTBEREZcXHUwREYyXFx1MERGM1xcdTBFMDEtXFx1MEUzQVxcdTBFNDAtXFx1MEU0RVxcdTBFNTAtXFx1MEU1OVxcdTBFODFcXHUwRTgyXFx1MEU4NFxcdTBFODdcXHUwRTg4XFx1MEU4QVxcdTBFOERcXHUwRTk0LVxcdTBFOTdcXHUwRTk5LVxcdTBFOUZcXHUwRUExLVxcdTBFQTNcXHUwRUE1XFx1MEVBN1xcdTBFQUFcXHUwRUFCXFx1MEVBRC1cXHUwRUI5XFx1MEVCQi1cXHUwRUJEXFx1MEVDMC1cXHUwRUM0XFx1MEVDNlxcdTBFQzgtXFx1MEVDRFxcdTBFRDAtXFx1MEVEOVxcdTBFRENcXHUwRUREXFx1MEYwMFxcdTBGMThcXHUwRjE5XFx1MEYyMC1cXHUwRjI5XFx1MEYzNVxcdTBGMzdcXHUwRjM5XFx1MEYzRS1cXHUwRjQ3XFx1MEY0OS1cXHUwRjZBXFx1MEY3MS1cXHUwRjg0XFx1MEY4Ni1cXHUwRjhCXFx1MEY5MC1cXHUwRjk3XFx1MEY5OS1cXHUwRkJDXFx1MEZDNlxcdTEwMDAtXFx1MTAyMVxcdTEwMjMtXFx1MTAyN1xcdTEwMjlcXHUxMDJBXFx1MTAyQy1cXHUxMDMyXFx1MTAzNi1cXHUxMDM5XFx1MTA0MC1cXHUxMDQ5XFx1MTA1MC1cXHUxMDU5XFx1MTBBMC1cXHUxMEM1XFx1MTBEMC1cXHUxMEZBXFx1MTBGQ1xcdTExMDAtXFx1MTE1OVxcdTExNUYtXFx1MTFBMlxcdTExQTgtXFx1MTFGOVxcdTEyMDAtXFx1MTI0OFxcdTEyNEEtXFx1MTI0RFxcdTEyNTAtXFx1MTI1NlxcdTEyNThcXHUxMjVBLVxcdTEyNURcXHUxMjYwLVxcdTEyODhcXHUxMjhBLVxcdTEyOERcXHUxMjkwLVxcdTEyQjBcXHUxMkIyLVxcdTEyQjVcXHUxMkI4LVxcdTEyQkVcXHUxMkMwXFx1MTJDMi1cXHUxMkM1XFx1MTJDOC1cXHUxMkQ2XFx1MTJEOC1cXHUxMzEwXFx1MTMxMi1cXHUxMzE1XFx1MTMxOC1cXHUxMzVBXFx1MTM1RlxcdTEzNjktXFx1MTM3MVxcdTEzODAtXFx1MTM4RlxcdTEzQTAtXFx1MTNGNFxcdTE0MDEtXFx1MTY2Q1xcdTE2NkYtXFx1MTY3NlxcdTE2ODEtXFx1MTY5QVxcdTE2QTAtXFx1MTZFQVxcdTE2RUUtXFx1MTZGMFxcdTE3MDAtXFx1MTcwQ1xcdTE3MEUtXFx1MTcxNFxcdTE3MjAtXFx1MTczNFxcdTE3NDAtXFx1MTc1M1xcdTE3NjAtXFx1MTc2Q1xcdTE3NkUtXFx1MTc3MFxcdTE3NzJcXHUxNzczXFx1MTc4MC1cXHUxN0IzXFx1MTdCNi1cXHUxN0QzXFx1MTdEN1xcdTE3RENcXHUxN0REXFx1MTdFMC1cXHUxN0U5XFx1MTgwQi1cXHUxODBEXFx1MTgxMC1cXHUxODE5XFx1MTgyMC1cXHUxODc3XFx1MTg4MC1cXHUxOEE5XFx1MTkwMC1cXHUxOTFDXFx1MTkyMC1cXHUxOTJCXFx1MTkzMC1cXHUxOTNCXFx1MTk0Ni1cXHUxOTZEXFx1MTk3MC1cXHUxOTc0XFx1MTk4MC1cXHUxOUE5XFx1MTlCMC1cXHUxOUM5XFx1MTlEMC1cXHUxOUQ5XFx1MUEwMC1cXHUxQTFCXFx1MUQwMC1cXHUxREMzXFx1MUUwMC1cXHUxRTlCXFx1MUVBMC1cXHUxRUY5XFx1MUYwMC1cXHUxRjE1XFx1MUYxOC1cXHUxRjFEXFx1MUYyMC1cXHUxRjQ1XFx1MUY0OC1cXHUxRjREXFx1MUY1MC1cXHUxRjU3XFx1MUY1OVxcdTFGNUJcXHUxRjVEXFx1MUY1Ri1cXHUxRjdEXFx1MUY4MC1cXHUxRkI0XFx1MUZCNi1cXHUxRkJDXFx1MUZCRVxcdTFGQzItXFx1MUZDNFxcdTFGQzYtXFx1MUZDQ1xcdTFGRDAtXFx1MUZEM1xcdTFGRDYtXFx1MUZEQlxcdTFGRTAtXFx1MUZFQ1xcdTFGRjItXFx1MUZGNFxcdTFGRjYtXFx1MUZGQ1xcdTIwM0ZcXHUyMDQwXFx1MjA1NFxcdTIwNzFcXHUyMDdGXFx1MjA5MC1cXHUyMDk0XFx1MjBEMC1cXHUyMERDXFx1MjBFMVxcdTIwRTUtXFx1MjBFQlxcdTIxMDJcXHUyMTA3XFx1MjEwQS1cXHUyMTEzXFx1MjExNVxcdTIxMTgtXFx1MjExRFxcdTIxMjRcXHUyMTI2XFx1MjEyOFxcdTIxMkEtXFx1MjEzMVxcdTIxMzMtXFx1MjEzOVxcdTIxM0MtXFx1MjEzRlxcdTIxNDUtXFx1MjE0OVxcdTIxNjAtXFx1MjE4M1xcdTJDMDAtXFx1MkMyRVxcdTJDMzAtXFx1MkM1RVxcdTJDODAtXFx1MkNFNFxcdTJEMDAtXFx1MkQyNVxcdTJEMzAtXFx1MkQ2NVxcdTJENkZcXHUyRDgwLVxcdTJEOTZcXHUyREEwLVxcdTJEQTZcXHUyREE4LVxcdTJEQUVcXHUyREIwLVxcdTJEQjZcXHUyREI4LVxcdTJEQkVcXHUyREMwLVxcdTJEQzZcXHUyREM4LVxcdTJEQ0VcXHUyREQwLVxcdTJERDZcXHUyREQ4LVxcdTJEREVcXHUzMDA1LVxcdTMwMDdcXHUzMDIxLVxcdTMwMkZcXHUzMDMxLVxcdTMwMzVcXHUzMDM4LVxcdTMwM0NcXHUzMDQxLVxcdTMwOTZcXHUzMDk5LVxcdTMwOUZcXHUzMEExLVxcdTMwRkFcXHUzMEZDLVxcdTMwRkZcXHUzMTA1LVxcdTMxMkNcXHUzMTMxLVxcdTMxOEVcXHUzMUEwLVxcdTMxQjdcXHUzMUYwLVxcdTMxRkZcXHUzNDAwLVxcdTREQjVcXHU0RTAwLVxcdTlGQkJcXHVBMDAwLVxcdUE0OENcXHVBODAwLVxcdUE4MjdcXHVBQzAwLVxcdUQ3QTNcXHVGOTAwLVxcdUZBMkRcXHVGQTMwLVxcdUZBNkFcXHVGQTcwLVxcdUZBRDlcXHVGQjAwLVxcdUZCMDZcXHVGQjEzLVxcdUZCMTdcXHVGQjFELVxcdUZCMjhcXHVGQjJBLVxcdUZCMzZcXHVGQjM4LVxcdUZCM0NcXHVGQjNFXFx1RkI0MFxcdUZCNDFcXHVGQjQzXFx1RkI0NFxcdUZCNDYtXFx1RkJCMVxcdUZCRDMtXFx1RkQzRFxcdUZENTAtXFx1RkQ4RlxcdUZEOTItXFx1RkRDN1xcdUZERjAtXFx1RkRGQlxcdUZFMDAtXFx1RkUwRlxcdUZFMjAtXFx1RkUyM1xcdUZFMzNcXHVGRTM0XFx1RkU0RC1cXHVGRTRGXFx1RkU3MC1cXHVGRTc0XFx1RkU3Ni1cXHVGRUZDXFx1RkYxMC1cXHVGRjE5XFx1RkYyMS1cXHVGRjNBXFx1RkYzRlxcdUZGNDEtXFx1RkY1QVxcdUZGNjYtXFx1RkZCRVxcdUZGQzItXFx1RkZDN1xcdUZGQ0EtXFx1RkZDRlxcdUZGRDItXFx1RkZEN1xcdUZGREEtXFx1RkZEQ118XFx1RDgwMFtcXHVEQzAwLVxcdURDMEJcXHVEQzBELVxcdURDMjZcXHVEQzI4LVxcdURDM0FcXHVEQzNDXFx1REMzRFxcdURDM0YtXFx1REM0RFxcdURDNTAtXFx1REM1RFxcdURDODAtXFx1RENGQVxcdURENDAtXFx1REQ3NFxcdURGMDAtXFx1REYxRVxcdURGMzAtXFx1REY0QVxcdURGODAtXFx1REY5RFxcdURGQTAtXFx1REZDM1xcdURGQzgtXFx1REZDRlxcdURGRDEtXFx1REZENV18XFx1RDgwMVtcXHVEQzAwLVxcdURDOURcXHVEQ0EwLVxcdURDQTldfFxcdUQ4MDJbXFx1REMwMC1cXHVEQzA1XFx1REMwOFxcdURDMEEtXFx1REMzNVxcdURDMzdcXHVEQzM4XFx1REMzQ1xcdURDM0ZcXHVERTAwLVxcdURFMDNcXHVERTA1XFx1REUwNlxcdURFMEMtXFx1REUxM1xcdURFMTUtXFx1REUxN1xcdURFMTktXFx1REUzM1xcdURFMzgtXFx1REUzQVxcdURFM0ZdfFxcdUQ4MzRbXFx1REQ2NS1cXHVERDY5XFx1REQ2RC1cXHVERDcyXFx1REQ3Qi1cXHVERDgyXFx1REQ4NS1cXHVERDhCXFx1RERBQS1cXHVEREFEXFx1REU0Mi1cXHVERTQ0XXxcXHVEODM1W1xcdURDMDAtXFx1REM1NFxcdURDNTYtXFx1REM5Q1xcdURDOUVcXHVEQzlGXFx1RENBMlxcdURDQTVcXHVEQ0E2XFx1RENBOS1cXHVEQ0FDXFx1RENBRS1cXHVEQ0I5XFx1RENCQlxcdURDQkQtXFx1RENDM1xcdURDQzUtXFx1REQwNVxcdUREMDctXFx1REQwQVxcdUREMEQtXFx1REQxNFxcdUREMTYtXFx1REQxQ1xcdUREMUUtXFx1REQzOVxcdUREM0ItXFx1REQzRVxcdURENDAtXFx1REQ0NFxcdURENDZcXHVERDRBLVxcdURENTBcXHVERDUyLVxcdURFQTVcXHVERUE4LVxcdURFQzBcXHVERUMyLVxcdURFREFcXHVERURDLVxcdURFRkFcXHVERUZDLVxcdURGMTRcXHVERjE2LVxcdURGMzRcXHVERjM2LVxcdURGNEVcXHVERjUwLVxcdURGNkVcXHVERjcwLVxcdURGODhcXHVERjhBLVxcdURGQThcXHVERkFBLVxcdURGQzJcXHVERkM0LVxcdURGQzlcXHVERkNFLVxcdURGRkZdfFtcXHVEODQwLVxcdUQ4NjhdW1xcdURDMDAtXFx1REZGRl18XFx1RDg2OVtcXHVEQzAwLVxcdURFRDZdfFxcdUQ4N0VbXFx1REMwMC1cXHVERTFEXXxcXHVEQjQwW1xcdUREMDAtXFx1RERFRl0vO1xyXG5cclxuXHRcdHN0YXRpYyBVTklDT0RFX1NUQVJUX0NPTU1PTiA9IHsgMzY6IHQgLyogJCAqLywgOTI6IHQgLyogXFwgKi8sIDk1OiB0IC8qIF8gKi8sIDY1OiB0LCA2NjogdCwgNjc6IHQsIDY4OiB0LCA2OTogdCwgNzA6IHQsIDcxOiB0LCA3MjogdCwgNzM6IHQsIDc0OiB0LCA3NTogdCwgNzY6IHQsIDc3OiB0LCA3ODogdCwgNzk6IHQsIDgwOiB0LCA4MTogdCwgODI6IHQsIDgzOiB0LCA4NDogdCwgODU6IHQsIDg2OiB0LCA4NzogdCwgODg6IHQsIDg5OiB0LCA5MDogdCwgOTc6IHQsIDk4OiB0LCA5OTogdCwgMTAwOiB0LCAxMDE6IHQsIDEwMjogdCwgMTAzOiB0LCAxMDQ6IHQsIDEwNTogdCwgMTA2OiB0LCAxMDc6IHQsIDEwODogdCwgMTA5OiB0LCAxMTA6IHQsIDExMTogdCwgMTEyOiB0LCAxMTM6IHQsIDExNDogdCwgMTE1OiB0LCAxMTY6IHQsIDExNzogdCwgMTE4OiB0LCAxMTk6IHQsIDEyMDogdCwgMTIxOiB0LCAxMjI6IHQgfTtcclxuXHRcdFxyXG5cdFx0c3RhdGljIFVOSUNPREVfU1RBUlRfVU5DT01NT04gPSAvW1xceEFBXFx4QjVcXHhCQVxceEMwLVxceEQ2XFx4RDgtXFx4RjZcXHhGOC1cXHUwMjQxXFx1MDI1MC1cXHUwMkMxXFx1MDJDNi1cXHUwMkQxXFx1MDJFMC1cXHUwMkU0XFx1MDJFRVxcdTAzN0FcXHUwMzg2XFx1MDM4OC1cXHUwMzhBXFx1MDM4Q1xcdTAzOEUtXFx1MDNBMVxcdTAzQTMtXFx1MDNDRVxcdTAzRDAtXFx1MDNGNVxcdTAzRjctXFx1MDQ4MVxcdTA0OEEtXFx1MDRDRVxcdTA0RDAtXFx1MDRGOVxcdTA1MDAtXFx1MDUwRlxcdTA1MzEtXFx1MDU1NlxcdTA1NTlcXHUwNTYxLVxcdTA1ODdcXHUwNUQwLVxcdTA1RUFcXHUwNUYwLVxcdTA1RjJcXHUwNjIxLVxcdTA2M0FcXHUwNjQwLVxcdTA2NEFcXHUwNjZFXFx1MDY2RlxcdTA2NzEtXFx1MDZEM1xcdTA2RDVcXHUwNkU1XFx1MDZFNlxcdTA2RUVcXHUwNkVGXFx1MDZGQS1cXHUwNkZDXFx1MDZGRlxcdTA3MTBcXHUwNzEyLVxcdTA3MkZcXHUwNzRELVxcdTA3NkRcXHUwNzgwLVxcdTA3QTVcXHUwN0IxXFx1MDkwNC1cXHUwOTM5XFx1MDkzRFxcdTA5NTBcXHUwOTU4LVxcdTA5NjFcXHUwOTdEXFx1MDk4NS1cXHUwOThDXFx1MDk4RlxcdTA5OTBcXHUwOTkzLVxcdTA5QThcXHUwOUFBLVxcdTA5QjBcXHUwOUIyXFx1MDlCNi1cXHUwOUI5XFx1MDlCRFxcdTA5Q0VcXHUwOURDXFx1MDlERFxcdTA5REYtXFx1MDlFMVxcdTA5RjBcXHUwOUYxXFx1MEEwNS1cXHUwQTBBXFx1MEEwRlxcdTBBMTBcXHUwQTEzLVxcdTBBMjhcXHUwQTJBLVxcdTBBMzBcXHUwQTMyXFx1MEEzM1xcdTBBMzVcXHUwQTM2XFx1MEEzOFxcdTBBMzlcXHUwQTU5LVxcdTBBNUNcXHUwQTVFXFx1MEE3Mi1cXHUwQTc0XFx1MEE4NS1cXHUwQThEXFx1MEE4Ri1cXHUwQTkxXFx1MEE5My1cXHUwQUE4XFx1MEFBQS1cXHUwQUIwXFx1MEFCMlxcdTBBQjNcXHUwQUI1LVxcdTBBQjlcXHUwQUJEXFx1MEFEMFxcdTBBRTBcXHUwQUUxXFx1MEIwNS1cXHUwQjBDXFx1MEIwRlxcdTBCMTBcXHUwQjEzLVxcdTBCMjhcXHUwQjJBLVxcdTBCMzBcXHUwQjMyXFx1MEIzM1xcdTBCMzUtXFx1MEIzOVxcdTBCM0RcXHUwQjVDXFx1MEI1RFxcdTBCNUYtXFx1MEI2MVxcdTBCNzFcXHUwQjgzXFx1MEI4NS1cXHUwQjhBXFx1MEI4RS1cXHUwQjkwXFx1MEI5Mi1cXHUwQjk1XFx1MEI5OVxcdTBCOUFcXHUwQjlDXFx1MEI5RVxcdTBCOUZcXHUwQkEzXFx1MEJBNFxcdTBCQTgtXFx1MEJBQVxcdTBCQUUtXFx1MEJCOVxcdTBDMDUtXFx1MEMwQ1xcdTBDMEUtXFx1MEMxMFxcdTBDMTItXFx1MEMyOFxcdTBDMkEtXFx1MEMzM1xcdTBDMzUtXFx1MEMzOVxcdTBDNjBcXHUwQzYxXFx1MEM4NS1cXHUwQzhDXFx1MEM4RS1cXHUwQzkwXFx1MEM5Mi1cXHUwQ0E4XFx1MENBQS1cXHUwQ0IzXFx1MENCNS1cXHUwQ0I5XFx1MENCRFxcdTBDREVcXHUwQ0UwXFx1MENFMVxcdTBEMDUtXFx1MEQwQ1xcdTBEMEUtXFx1MEQxMFxcdTBEMTItXFx1MEQyOFxcdTBEMkEtXFx1MEQzOVxcdTBENjBcXHUwRDYxXFx1MEQ4NS1cXHUwRDk2XFx1MEQ5QS1cXHUwREIxXFx1MERCMy1cXHUwREJCXFx1MERCRFxcdTBEQzAtXFx1MERDNlxcdTBFMDEtXFx1MEUzMFxcdTBFMzJcXHUwRTMzXFx1MEU0MC1cXHUwRTQ2XFx1MEU4MVxcdTBFODJcXHUwRTg0XFx1MEU4N1xcdTBFODhcXHUwRThBXFx1MEU4RFxcdTBFOTQtXFx1MEU5N1xcdTBFOTktXFx1MEU5RlxcdTBFQTEtXFx1MEVBM1xcdTBFQTVcXHUwRUE3XFx1MEVBQVxcdTBFQUJcXHUwRUFELVxcdTBFQjBcXHUwRUIyXFx1MEVCM1xcdTBFQkRcXHUwRUMwLVxcdTBFQzRcXHUwRUM2XFx1MEVEQ1xcdTBFRERcXHUwRjAwXFx1MEY0MC1cXHUwRjQ3XFx1MEY0OS1cXHUwRjZBXFx1MEY4OC1cXHUwRjhCXFx1MTAwMC1cXHUxMDIxXFx1MTAyMy1cXHUxMDI3XFx1MTAyOVxcdTEwMkFcXHUxMDUwLVxcdTEwNTVcXHUxMEEwLVxcdTEwQzVcXHUxMEQwLVxcdTEwRkFcXHUxMEZDXFx1MTEwMC1cXHUxMTU5XFx1MTE1Ri1cXHUxMUEyXFx1MTFBOC1cXHUxMUY5XFx1MTIwMC1cXHUxMjQ4XFx1MTI0QS1cXHUxMjREXFx1MTI1MC1cXHUxMjU2XFx1MTI1OFxcdTEyNUEtXFx1MTI1RFxcdTEyNjAtXFx1MTI4OFxcdTEyOEEtXFx1MTI4RFxcdTEyOTAtXFx1MTJCMFxcdTEyQjItXFx1MTJCNVxcdTEyQjgtXFx1MTJCRVxcdTEyQzBcXHUxMkMyLVxcdTEyQzVcXHUxMkM4LVxcdTEyRDZcXHUxMkQ4LVxcdTEzMTBcXHUxMzEyLVxcdTEzMTVcXHUxMzE4LVxcdTEzNUFcXHUxMzgwLVxcdTEzOEZcXHUxM0EwLVxcdTEzRjRcXHUxNDAxLVxcdTE2NkNcXHUxNjZGLVxcdTE2NzZcXHUxNjgxLVxcdTE2OUFcXHUxNkEwLVxcdTE2RUFcXHUxNkVFLVxcdTE2RjBcXHUxNzAwLVxcdTE3MENcXHUxNzBFLVxcdTE3MTFcXHUxNzIwLVxcdTE3MzFcXHUxNzQwLVxcdTE3NTFcXHUxNzYwLVxcdTE3NkNcXHUxNzZFLVxcdTE3NzBcXHUxNzgwLVxcdTE3QjNcXHUxN0Q3XFx1MTdEQ1xcdTE4MjAtXFx1MTg3N1xcdTE4ODAtXFx1MThBOFxcdTE5MDAtXFx1MTkxQ1xcdTE5NTAtXFx1MTk2RFxcdTE5NzAtXFx1MTk3NFxcdTE5ODAtXFx1MTlBOVxcdTE5QzEtXFx1MTlDN1xcdTFBMDAtXFx1MUExNlxcdTFEMDAtXFx1MURCRlxcdTFFMDAtXFx1MUU5QlxcdTFFQTAtXFx1MUVGOVxcdTFGMDAtXFx1MUYxNVxcdTFGMTgtXFx1MUYxRFxcdTFGMjAtXFx1MUY0NVxcdTFGNDgtXFx1MUY0RFxcdTFGNTAtXFx1MUY1N1xcdTFGNTlcXHUxRjVCXFx1MUY1RFxcdTFGNUYtXFx1MUY3RFxcdTFGODAtXFx1MUZCNFxcdTFGQjYtXFx1MUZCQ1xcdTFGQkVcXHUxRkMyLVxcdTFGQzRcXHUxRkM2LVxcdTFGQ0NcXHUxRkQwLVxcdTFGRDNcXHUxRkQ2LVxcdTFGREJcXHUxRkUwLVxcdTFGRUNcXHUxRkYyLVxcdTFGRjRcXHUxRkY2LVxcdTFGRkNcXHUyMDcxXFx1MjA3RlxcdTIwOTAtXFx1MjA5NFxcdTIxMDJcXHUyMTA3XFx1MjEwQS1cXHUyMTEzXFx1MjExNVxcdTIxMTgtXFx1MjExRFxcdTIxMjRcXHUyMTI2XFx1MjEyOFxcdTIxMkEtXFx1MjEzMVxcdTIxMzMtXFx1MjEzOVxcdTIxM0MtXFx1MjEzRlxcdTIxNDUtXFx1MjE0OVxcdTIxNjAtXFx1MjE4M1xcdTJDMDAtXFx1MkMyRVxcdTJDMzAtXFx1MkM1RVxcdTJDODAtXFx1MkNFNFxcdTJEMDAtXFx1MkQyNVxcdTJEMzAtXFx1MkQ2NVxcdTJENkZcXHUyRDgwLVxcdTJEOTZcXHUyREEwLVxcdTJEQTZcXHUyREE4LVxcdTJEQUVcXHUyREIwLVxcdTJEQjZcXHUyREI4LVxcdTJEQkVcXHUyREMwLVxcdTJEQzZcXHUyREM4LVxcdTJEQ0VcXHUyREQwLVxcdTJERDZcXHUyREQ4LVxcdTJEREVcXHUzMDA1LVxcdTMwMDdcXHUzMDIxLVxcdTMwMjlcXHUzMDMxLVxcdTMwMzVcXHUzMDM4LVxcdTMwM0NcXHUzMDQxLVxcdTMwOTZcXHUzMDlCLVxcdTMwOUZcXHUzMEExLVxcdTMwRkFcXHUzMEZDLVxcdTMwRkZcXHUzMTA1LVxcdTMxMkNcXHUzMTMxLVxcdTMxOEVcXHUzMUEwLVxcdTMxQjdcXHUzMUYwLVxcdTMxRkZcXHUzNDAwLVxcdTREQjVcXHU0RTAwLVxcdTlGQkJcXHVBMDAwLVxcdUE0OENcXHVBODAwXFx1QTgwMVxcdUE4MDMtXFx1QTgwNVxcdUE4MDctXFx1QTgwQVxcdUE4MEMtXFx1QTgyMlxcdUFDMDAtXFx1RDdBM1xcdUY5MDAtXFx1RkEyRFxcdUZBMzAtXFx1RkE2QVxcdUZBNzAtXFx1RkFEOVxcdUZCMDAtXFx1RkIwNlxcdUZCMTMtXFx1RkIxN1xcdUZCMURcXHVGQjFGLVxcdUZCMjhcXHVGQjJBLVxcdUZCMzZcXHVGQjM4LVxcdUZCM0NcXHVGQjNFXFx1RkI0MFxcdUZCNDFcXHVGQjQzXFx1RkI0NFxcdUZCNDYtXFx1RkJCMVxcdUZCRDMtXFx1RkQzRFxcdUZENTAtXFx1RkQ4RlxcdUZEOTItXFx1RkRDN1xcdUZERjAtXFx1RkRGQlxcdUZFNzAtXFx1RkU3NFxcdUZFNzYtXFx1RkVGQ1xcdUZGMjEtXFx1RkYzQVxcdUZGNDEtXFx1RkY1QVxcdUZGNjYtXFx1RkZCRVxcdUZGQzItXFx1RkZDN1xcdUZGQ0EtXFx1RkZDRlxcdUZGRDItXFx1RkZEN1xcdUZGREEtXFx1RkZEQ118XFx1RDgwMFtcXHVEQzAwLVxcdURDMEJcXHVEQzBELVxcdURDMjZcXHVEQzI4LVxcdURDM0FcXHVEQzNDXFx1REMzRFxcdURDM0YtXFx1REM0RFxcdURDNTAtXFx1REM1RFxcdURDODAtXFx1RENGQVxcdURENDAtXFx1REQ3NFxcdURGMDAtXFx1REYxRVxcdURGMzAtXFx1REY0QVxcdURGODAtXFx1REY5RFxcdURGQTAtXFx1REZDM1xcdURGQzgtXFx1REZDRlxcdURGRDEtXFx1REZENV18XFx1RDgwMVtcXHVEQzAwLVxcdURDOURdfFxcdUQ4MDJbXFx1REMwMC1cXHVEQzA1XFx1REMwOFxcdURDMEEtXFx1REMzNVxcdURDMzdcXHVEQzM4XFx1REMzQ1xcdURDM0ZcXHVERTAwXFx1REUxMC1cXHVERTEzXFx1REUxNS1cXHVERTE3XFx1REUxOS1cXHVERTMzXXxcXHVEODM1W1xcdURDMDAtXFx1REM1NFxcdURDNTYtXFx1REM5Q1xcdURDOUVcXHVEQzlGXFx1RENBMlxcdURDQTVcXHVEQ0E2XFx1RENBOS1cXHVEQ0FDXFx1RENBRS1cXHVEQ0I5XFx1RENCQlxcdURDQkQtXFx1RENDM1xcdURDQzUtXFx1REQwNVxcdUREMDctXFx1REQwQVxcdUREMEQtXFx1REQxNFxcdUREMTYtXFx1REQxQ1xcdUREMUUtXFx1REQzOVxcdUREM0ItXFx1REQzRVxcdURENDAtXFx1REQ0NFxcdURENDZcXHVERDRBLVxcdURENTBcXHVERDUyLVxcdURFQTVcXHVERUE4LVxcdURFQzBcXHVERUMyLVxcdURFREFcXHVERURDLVxcdURFRkFcXHVERUZDLVxcdURGMTRcXHVERjE2LVxcdURGMzRcXHVERjM2LVxcdURGNEVcXHVERjUwLVxcdURGNkVcXHVERjcwLVxcdURGODhcXHVERjhBLVxcdURGQThcXHVERkFBLVxcdURGQzJcXHVERkM0LVxcdURGQzldfFtcXHVEODQwLVxcdUQ4NjhdW1xcdURDMDAtXFx1REZGRl18XFx1RDg2OVtcXHVEQzAwLVxcdURFRDZdfFxcdUQ4N0VbXFx1REMwMC1cXHVERTFEXS87XHJcblx0XHJcblx0fVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3RzRGVmaW5pdGlvbnMvdHNkLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdXRpbGl0aWVzL0NoYXJQb2ludHMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiVG9rZW5EZWZpbml0aW9ucy50c1wiIC8+XHJcblxyXG5tb2R1bGUgdHJsLmZyb250ZW5kLmxleGljYWwge1xyXG5cdFxyXG5cdGxldCBoZXhEaWdpdHMgPSB7fTtcclxuXHRfLmVhY2goXCIwMTIzNDU2Nzg5QUJDREVGYWJjZGVmXCIsIChudW1DaGFyKSA9PiB7XHJcblx0XHRcclxuXHRcdGhleERpZ2l0c1t1dGlsaXRpZXMuQ2hhclBvaW50cy5jb2RlUG9pbnRBdChudW1DaGFyLCAwKV0gPSB0cnVlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdGxldCBkaWdpdHMgPSB7fTtcclxuXHRfLmVhY2goXCIwMTIzNDU2Nzg5XCIsIChudW1DaGFyKSA9PiB7XHJcblx0XHRkaWdpdHNbdXRpbGl0aWVzLkNoYXJQb2ludHMuY29kZVBvaW50QXQobnVtQ2hhciwgMCldID0gdHJ1ZTtcclxuXHR9KTtcclxuXHRcclxuXHRleHBvcnQgY2xhc3MgSWRlbnRpZnllcnMge1xyXG5cdFxyXG5cdFx0c3RhdGljIGlzSGV4RGlnaXQoYzogbnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRcdHJldHVybiBoZXhEaWdpdHNbY107XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHN0YXRpYyBpc0RpZ2l0KGM6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0XHRyZXR1cm4gZGlnaXRzW2NdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBpc0tleXdvcmQoc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdFx0cmV0dXJuIFRva2VuRGVmaW5pdGlvbnMuS1dbc3RyXTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0c3RhdGljIGlzTGluZVRlcm1pbmF0b3IoYzogbnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRcdHJldHVybiBUb2tlbkRlZmluaXRpb25zLkxUW2NdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBpc0lkZW50aWZpZXJTdGFydChjOiBudW1iZXIpOiBib29sZWFuIHtcclxuXHRcdFx0cmV0dXJuIElkZW50aWZ5ZXJzLmlzU2ltcGxlVW5pY29kZVN0YXJ0KGMpXHJcblx0XHRcdFx0fHwgSWRlbnRpZnllcnMuaXNDb21wbGV4VW5pY29kZVN0YXJ0KGMpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRzdGF0aWMgaXNJZGVudGlmaWVyUGFydChjOiBudW1iZXIpOiBib29sZWFuIHtcclxuXHRcdFx0cmV0dXJuIElkZW50aWZ5ZXJzLmlzU2ltcGxlVW5pY29kZUNvbnRpbnVlKGMpXHJcblx0XHRcdFx0fHwgSWRlbnRpZnllcnMuaXNDb21wbGV4VW5pY29kZUNvbnRpbnVlKGMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBpc1NpbXBsZVVuaWNvZGVDb250aW51ZShjOiBudW1iZXIpOiBib29sZWFuIHtcclxuXHRcdFx0cmV0dXJuIFRva2VuRGVmaW5pdGlvbnMuVU5JQ09ERV9DT05USU5VRV9DT01NT05bY107XHJcblx0XHR9XHRcclxuXHRcdFx0XHJcblx0XHRzdGF0aWMgaXNDb21wbGV4VW5pY29kZUNvbnRpbnVlKGM6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0XHRyZXR1cm4gYyA+IFRva2VuRGVmaW5pdGlvbnMuVU5JQ09ERV9VTkNPTU1PTl9USFJFU0hPTEQgXHJcblx0XHRcdFx0JiYgVG9rZW5EZWZpbml0aW9ucy5VTklDT0RFX0NPTlRJTlVFX1VOQ09NTU9OLnRlc3QodXRpbGl0aWVzLkNoYXJQb2ludHMuZnJvbUNvZGVQb2ludChjKSk7XHJcblx0XHR9XHRcclxuXHRcdFxyXG5cdFx0c3RhdGljIGlzU2ltcGxlVW5pY29kZVN0YXJ0KGM6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0XHRyZXR1cm4gVG9rZW5EZWZpbml0aW9ucy5VTklDT0RFX1NUQVJUX0NPTU1PTltjXTtcclxuXHRcdH1cdFxyXG5cdFx0XHRcclxuXHRcdHN0YXRpYyBpc0NvbXBsZXhVbmljb2RlU3RhcnQoYzogbnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRcdHJldHVybiBjID4gVG9rZW5EZWZpbml0aW9ucy5VTklDT0RFX1VOQ09NTU9OX1RIUkVTSE9MRCBcclxuXHRcdFx0XHQmJiBUb2tlbkRlZmluaXRpb25zLlVOSUNPREVfU1RBUlRfVU5DT01NT04udGVzdCh1dGlsaXRpZXMuQ2hhclBvaW50cy5mcm9tQ29kZVBvaW50KGMpKTtcclxuXHRcdH1cdFxyXG5cdFx0XHJcblx0XHRzdGF0aWMgaXNQdW5jdHVhdGlvblN0YXJ0KGM6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0XHRyZXR1cm4gVG9rZW5EZWZpbml0aW9ucy5QTkNfU0lOR0xFW2NdO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3RzRGVmaW5pdGlvbnMvdHNkLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdXRpbGl0aWVzL0lFeGNlcHRpb24uZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi91dGlsaXRpZXMvQ2hhclBvaW50cy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJJTGV4ZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiVG9rZW5EZWZpbml0aW9ucy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJJZGVudGlmeWVycy50c1wiIC8+XHJcblxyXG5tb2R1bGUgdHJsLmZyb250ZW5kLmxleGljYWwge1xyXG5cclxuICAgIGNvbnN0IFN0YXRlcyA9IHtcclxuICAgICAgICBpZGVudGlmaWVyOiBcInN0YXRlSWRlbnRpZmllclwiLFxyXG4gICAgICAgIHB1bmN0dWF0aW9uOiBcInN0YXRlUHVuY3R1YXRpb25cIixcclxuICAgICAgICBtdWx0aUNvbW1lbnQ6IFwic3RhdGVNdWx0aUNvbW1lbnRcIixcclxuICAgICAgICBzaW5nbGVDb21tZW50OiBcInN0YXRlU2luZ2xlQ29tbWVudFwiLFxyXG4gICAgICAgIGRpdk9yQ29tbWVudDogXCJzdGF0ZURpdk9yQ29tbWVudFwiLFxyXG4gICAgICAgIGRvdE9yTnVtYmVyOiBcInN0YXRlRG90T3JOdW1iZXJcIixcclxuICAgICAgICBlcnJvcjogXCJzdGF0ZUVycm9yXCIsXHJcbiAgICAgICAgZmluaXNoOiBcInN0YXRlRmluaXNoXCIsXHJcbiAgICAgICAgaW5pdDogXCJzdGF0ZUluaXRcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBSZWFkYWJsZVRva2VuVHlwZSA9IHtcclxuICAgICAgICBrZXl3b3JkOiBcImtleXdvcmRcIixcclxuICAgICAgICBpZGVudGlmaWVyOiBcImlkZW50aWZpZXJcIixcclxuICAgICAgICBsaXRlcmFsOiBcImxpdGVyYWxcIixcclxuICAgICAgICBwdW5jdHVhdGlvbjogXCJwdW5jdHVhdGlvblwiLFxyXG4gICAgICAgIGNvbW1lbnQ6IFwiY29tbWVudFwiLFxyXG4gICAgICAgIGVvZjogXCJlb2ZcIixcclxuICAgICAgICBlcnJvcjogXCJlcnJvclwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IFJlYWRhYmxlTGl0ZXJhbFN1YlR5cGUgPSB7XHJcbiAgICAgICAgc3RyaW5nOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG51bWJlcjogXCJudW1iZXJcIixcclxuICAgICAgICBudWxsOiBcIm51bGxcIixcclxuICAgICAgICBib29sZWFuOiBcImJvb2xlYW5cIlxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiB0b1JlYWRhYmxlVG9rZW5UeXBlKHRva2VuVHlwZTogVG9rZW5UeXBlKTogc3RyaW5nIHtcclxuICAgICAgICBzd2l0Y2ggKHRva2VuVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5rZXl3b3JkOiByZXR1cm4gUmVhZGFibGVUb2tlblR5cGUua2V5d29yZDtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuaWRlbnRpZmllcjogcmV0dXJuIFJlYWRhYmxlVG9rZW5UeXBlLmlkZW50aWZpZXI7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLmxpdGVyYWw6IHJldHVybiBSZWFkYWJsZVRva2VuVHlwZS5saXRlcmFsO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5wdW5jdHVhdGlvbjogcmV0dXJuIFJlYWRhYmxlVG9rZW5UeXBlLnB1bmN0dWF0aW9uO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5jb21tZW50OiByZXR1cm4gUmVhZGFibGVUb2tlblR5cGUuY29tbWVudDtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuZW9mOiByZXR1cm4gUmVhZGFibGVUb2tlblR5cGUuZW9mO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5lcnJvcjogcmV0dXJuIFJlYWRhYmxlVG9rZW5UeXBlLmVycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIHRva2VuIHR5cGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9SZWFkYWJsZUxpdGVyYWxTdWJUeXBlKGxpdGVyYWxTdWJUeXBlOiBMaXRlcmFsU3ViVHlwZSk6IHN0cmluZyB7XHJcbiAgICAgICAgc3dpdGNoIChsaXRlcmFsU3ViVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIExpdGVyYWxTdWJUeXBlLnN0cmluZzogcmV0dXJuIFJlYWRhYmxlTGl0ZXJhbFN1YlR5cGUuc3RyaW5nO1xyXG4gICAgICAgICAgICBjYXNlIExpdGVyYWxTdWJUeXBlLm51bWJlcjogcmV0dXJuIFJlYWRhYmxlTGl0ZXJhbFN1YlR5cGUubnVtYmVyO1xyXG4gICAgICAgICAgICBjYXNlIExpdGVyYWxTdWJUeXBlLm51bGw6IHJldHVybiBSZWFkYWJsZUxpdGVyYWxTdWJUeXBlLm51bGw7XHJcbiAgICAgICAgICAgIGNhc2UgTGl0ZXJhbFN1YlR5cGUuYm9vbGVhbjogcmV0dXJuIFJlYWRhYmxlTGl0ZXJhbFN1YlR5cGUuYm9vbGVhbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCB0b2tlbiB0eXBlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFBOQyA9IFRva2VuRGVmaW5pdGlvbnMuUE5DX1NJTkdMRTtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTGV4ZXIgaW1wbGVtZW50cyBJTGV4ZXIge1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIENoYXJlY3Rlckxvb2t1cDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSB0b2tlbjogSVRva2VuO1xyXG4gICAgICAgIHByaXZhdGUgY29tbWVudHM6IElUb2tlbltdO1xyXG5cclxuICAgICAgICBwcml2YXRlIGxvb2tBaGVhZFRva2VuOiBJVG9rZW47XHJcbiAgICAgICAgcHJpdmF0ZSBjdXJyZW50VG9rZW46IElUb2tlbjtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBsaW5lbm86IG51bWJlcjtcclxuICAgICAgICBwcml2YXRlIHN0YXJ0TGluZW5vOiBudW1iZXI7XHJcbiAgICAgICAgcHJpdmF0ZSBjdXJyTGluZUN1cnNvcjogbnVtYmVyO1xyXG4gICAgICAgIHByaXZhdGUgcmVsYXRpdmVTdGFydEN1cnNvcjogbnVtYmVyO1xyXG4gICAgICAgIHByaXZhdGUgYWJzb2x1dGVTdGFydEN1cnNvcjogbnVtYmVyO1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0aWF0ZUNoYXJlY3Rlckxvb2t1cE9uY2UoKSB7XHJcbiAgICAgICAgICAgIGlmIChMZXhlci5DaGFyZWN0ZXJMb29rdXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbG9va3VwID0gTGV4ZXIuQ2hhcmVjdGVyTG9va3VwID0ge307XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAvL3doaXRlIHNwYWNlXHJcbiAgICAgICAgICAgIF8uZWFjaCg8YW55PlRva2VuRGVmaW5pdGlvbnMuV1MsICh2YWwsIGtleTogbnVtYmVyKSA9PiBsb29rdXBba2V5XSA9IExleGVyLnByb3RvdHlwZS5zdGF0ZVdoaXRlU3BhY2UpO1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgLy9uZXcgbGluZVxyXG4gICAgICAgICAgICBfLmVhY2goPGFueT5Ub2tlbkRlZmluaXRpb25zLkxULCAodmFsLCBrZXk6IG51bWJlcikgPT4gbG9va3VwW2tleV0gPSBMZXhlci5wcm90b3R5cGUuc3RhdGVMaW5lVGVybWluYXRvcik7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAvL3N0cmluZ1xyXG4gICAgICAgICAgICBsb29rdXBbUE5DLnFtYXJrXSA9IExleGVyLmdlblN0YXRlU3RyaW5nKFBOQy5xbWFyayk7XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMuYXBvc3Ryb3BoZV0gPSBMZXhlci5nZW5TdGF0ZVN0cmluZyhQTkMuYXBvc3Ryb3BoZSk7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAvL251bWJlclxyXG4gICAgICAgICAgICBfLmVhY2goXCIwMTIzNDU2Nzg5XCIsIChudW1DaGFyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb29rdXBbdXRpbGl0aWVzLkNoYXJQb2ludHMuY29kZVBvaW50QXQobnVtQ2hhciwgMCldID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlTnVtYmVyO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMubGJyYWNlXSA9IExleGVyLnByb3RvdHlwZS5zdGF0ZVB1bmN0dWF0aW9uU2luZ2xlO1xyXG4gICAgICAgICAgICBsb29rdXBbUE5DLnJicmFjZV0gPSBMZXhlci5wcm90b3R5cGUuc3RhdGVQdW5jdHVhdGlvblNpbmdsZTtcclxuICAgICAgICAgICAgbG9va3VwW1BOQy5scGFyZW50aF0gPSBMZXhlci5wcm90b3R5cGUuc3RhdGVQdW5jdHVhdGlvblNpbmdsZTtcclxuICAgICAgICAgICAgbG9va3VwW1BOQy5ycGFyZW50aF0gPSBMZXhlci5wcm90b3R5cGUuc3RhdGVQdW5jdHVhdGlvblNpbmdsZTtcclxuICAgICAgICAgICAgbG9va3VwW1BOQy5sYnJhY2tldF0gPSBMZXhlci5wcm90b3R5cGUuc3RhdGVQdW5jdHVhdGlvblNpbmdsZTtcclxuICAgICAgICAgICAgbG9va3VwW1BOQy5yYnJhY2tldF0gPSBMZXhlci5wcm90b3R5cGUuc3RhdGVQdW5jdHVhdGlvblNpbmdsZTtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgIC8vIC4gLjFcclxuICAgICAgICAgICAgbG9va3VwW1BOQy5kb3RdID0gKCkgPT4gU3RhdGVzLmRvdE9yTnVtYmVyO1xyXG5cclxuICAgICAgICAgICAgbG9va3VwW1BOQy5zZW1pY29sb25dID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMuY29tbWFdID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAvLyA8IDw8IDw9IDw8PCA8PD1cclxuICAgICAgICAgICAgbG9va3VwW1BOQy5sZXNzXSA9IExleGVyLmdlblB1bmN0dWF0aW9uU2Nhbm5lcihcclxuICAgICAgICAgICAgICAgIFtbUE5DLmxlc3NdLCBbUE5DLmFzc2lnbl0sIFtQTkMubGVzcywgUE5DLmxlc3NdLCBbUE5DLmxlc3MsIFBOQy5hc3NpZ25dXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyA+ID49ID4+ID4+PSA+Pj4gPj4+PVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLm1vcmVdID0gTGV4ZXIuZ2VuUHVuY3R1YXRpb25TY2FubmVyKFxyXG4gICAgICAgICAgICAgICAgW1tQTkMubW9yZV0sIFtQTkMuYXNzaWduXSwgW1BOQy5tb3JlLCBQTkMubW9yZV0sIFtQTkMubW9yZSwgUE5DLmFzc2lnbl0sIFtQTkMubW9yZSwgUE5DLm1vcmUsIFBOQy5hc3NpZ25dXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyAhICE9ICE9PVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLmV4Y2xdID0gTGV4ZXIuZ2VuUHVuY3R1YXRpb25TY2FubmVyKFxyXG4gICAgICAgICAgICAgICAgW1tQTkMuYXNzaWduXSwgW1BOQy5hc3NpZ24sIFBOQy5hc3NpZ25dXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyAtIC0tIC09XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMubWludXNdID0gTGV4ZXIuZ2VuUHVuY3R1YXRpb25TY2FubmVyKFxyXG4gICAgICAgICAgICAgICAgW1tQTkMubWludXNdLCBbUE5DLmFzc2lnbl1dXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIC8vICsgKysgKy09XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMucGx1c10gPSBMZXhlci5nZW5QdW5jdHVhdGlvblNjYW5uZXIoXHJcbiAgICAgICAgICAgICAgICBbW1BOQy5wbHVzXSwgW1BOQy5hc3NpZ25dXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyAlICU9XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMucGVyY2VudF0gPSBMZXhlci5nZW5QdW5jdHVhdGlvblNjYW5uZXIoXHJcbiAgICAgICAgICAgICAgICBbW1BOQy5hc3NpZ25dXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyAmICYmICY9XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMuYW1wZXJzYW5kXSA9IExleGVyLmdlblB1bmN0dWF0aW9uU2Nhbm5lcihcclxuICAgICAgICAgICAgICAgIFtbUE5DLmFtcGVyc2FuZF0sIFtQTkMuYXNzaWduXV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gfCB8fCB8PVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLnZlcnRpY2FsXSA9IExleGVyLmdlblB1bmN0dWF0aW9uU2Nhbm5lcihcclxuICAgICAgICAgICAgICAgIFtbUE5DLnZlcnRpY2FsXSwgW1BOQy5hc3NpZ25dXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyBeIF49XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMuY2FyZXRdID0gTGV4ZXIuZ2VuUHVuY3R1YXRpb25TY2FubmVyKFxyXG4gICAgICAgICAgICAgICAgW1tQTkMuYXNzaWduXV1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMudGlsZGVdID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMucXVlc3RdID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMuY29sb25dID0gTGV4ZXIucHJvdG90eXBlLnN0YXRlUHVuY3R1YXRpb25TaW5nbGU7XHJcbiAgICAgICAgICAgIC8vID0gPT0gPT09XHJcbiAgICAgICAgICAgIGxvb2t1cFtQTkMuYXNzaWduXSA9IExleGVyLmdlblB1bmN0dWF0aW9uU2Nhbm5lcihcclxuICAgICAgICAgICAgICAgIFtbUE5DLmFzc2lnbl0sIFtQTkMuYXNzaWduLCBQTkMuYXNzaWduXV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gKiAqPVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLmFzdGVyaXNrXSA9IExleGVyLmdlblB1bmN0dWF0aW9uU2Nhbm5lcihcclxuICAgICAgICAgICAgICAgIFtbUE5DLmFzc2lnbl1dXHJcbiAgICAgICAgICAgICk7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAvLyAvIC89IC8qIC8vIGNvbW1lbnRcclxuICAgICAgICAgICAgbG9va3VwW1BOQy5zbGFzaF0gPSAoKSA9PiBTdGF0ZXMuZGl2T3JDb21tZW50O1xyXG5cclxuICAgICAgICAgICAgLy8gXFwgd2hpdGVzcGFjZVxyXG4gICAgICAgICAgICBsb29rdXBbUE5DLmJhY2tzbGFzaF0gPSAoKSA9PiBTdGF0ZXMuaWRlbnRpZmllcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGRlZmF1bHRMZXhlck9wdGlvbnM6IElMZXhlck9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGxvYzogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlYWRhYmxlVG9rZW5zTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgaW5jbHVkZUNvbW1lbnRzQXNOb3JtYWxUb2tlbnM6IHRydWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHByaXZhdGUgY2hhclN0cmVhbTogSUNoYXJhY3RlclN0cmVhbSxcclxuICAgICAgICAgICAgcHJpdmF0ZSBleGNlcHRpb25IYW5kbGVyOiB1dGlsaXRpZXMuSUV4Y2VwdGlvbkhhbmRsZXIsXHJcbiAgICAgICAgICAgIHByaXZhdGUgb3B0aW9ucz86IElMZXhlck9wdGlvbnNcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gXy5kZWZhdWx0cyhcclxuICAgICAgICAgICAgICAgIF8uY2xvbmUob3B0aW9ucyB8fCB7fSksXHJcbiAgICAgICAgICAgICAgICBMZXhlci5kZWZhdWx0TGV4ZXJPcHRpb25zXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMubGluZW5vID0gMTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyTGluZUN1cnNvciA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWVudHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIExleGVyLmluaXRpYXRlQ2hhcmVjdGVyTG9va3VwT25jZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGlzRXJyb3IodG9rZW46IElUb2tlbik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnJlYWRhYmxlVG9rZW5zTW9kZSA/XHJcbiAgICAgICAgICAgICAgICB0b2tlbi50eXBlID09PSBSZWFkYWJsZVRva2VuVHlwZS5lcnJvciA6IHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5lcnJvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGlzRW9mKHRva2VuOiBJVG9rZW4pOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5yZWFkYWJsZVRva2Vuc01vZGUgP1xyXG4gICAgICAgICAgICAgICAgdG9rZW4udHlwZSA9PT0gUmVhZGFibGVUb2tlblR5cGUuZW9mIDogdG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLmVvZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGlzQ29tbWVudCh0b2tlbjogSVRva2VuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucmVhZGFibGVUb2tlbnNNb2RlID9cclxuICAgICAgICAgICAgICAgIHRva2VuLnR5cGUgPT09IFJlYWRhYmxlVG9rZW5UeXBlLmNvbW1lbnQgOiB0b2tlbi50eXBlID09PSBUb2tlblR5cGUuY29tbWVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGlzTGl0ZXJhbCh0b2tlbjogSVRva2VuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucmVhZGFibGVUb2tlbnNNb2RlID9cclxuICAgICAgICAgICAgICAgIHRva2VuLnR5cGUgPT09IFJlYWRhYmxlVG9rZW5UeXBlLmxpdGVyYWwgOiB0b2tlbi50eXBlID09PSBUb2tlblR5cGUubGl0ZXJhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGlzUHVuY3R1YXRpb24odG9rZW46IElUb2tlbik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnJlYWRhYmxlVG9rZW5zTW9kZSA/XHJcbiAgICAgICAgICAgICAgICB0b2tlbi50eXBlID09PSBSZWFkYWJsZVRva2VuVHlwZS5wdW5jdHVhdGlvbiA6IHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5wdW5jdHVhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGlzS2V5d29yZCh0b2tlbjogSVRva2VuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucmVhZGFibGVUb2tlbnNNb2RlID9cclxuICAgICAgICAgICAgICAgIHRva2VuLnR5cGUgPT09IFJlYWRhYmxlVG9rZW5UeXBlLmtleXdvcmQgOiB0b2tlbi50eXBlID09PSBUb2tlblR5cGUua2V5d29yZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGlzSWRlbnRpZmllcih0b2tlbjogSVRva2VuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucmVhZGFibGVUb2tlbnNNb2RlID9cclxuICAgICAgICAgICAgICAgIHRva2VuLnR5cGUgPT09IFJlYWRhYmxlVG9rZW5UeXBlLmlkZW50aWZpZXIgOiB0b2tlbi50eXBlID09PSBUb2tlblR5cGUuaWRlbnRpZmllcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpc1B1bmN0dWF0aW9uVmFsdWUodG9rZW46IElUb2tlbiwgdmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1B1bmN0dWF0aW9uKHRva2VuKSAmJiB0b2tlbi52YWx1ZSA9PT0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBpc0tleXdvcmRWYWx1ZSh0b2tlbjogSVRva2VuLCB2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzS2V5d29yZCh0b2tlbikgJiYgdG9rZW4udmFsdWUgPT09IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgaXNJZGVudGlmaWVyVmFsdWUodG9rZW46IElUb2tlbiwgdmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0lkZW50aWZpZXIodG9rZW4pICYmIHRva2VuLnZhbHVlID09PSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtYXRjaFB1bmN0dWF0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtYXRjaEtleXdvcmQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzS2V5d29yZFZhbHVlKHRva2VuLCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbmV4dFRva2VuKCk6IElUb2tlbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvb2tBaGVhZFRva2VuID0gdGhpcy5sb29rQWhlYWRUb2tlbjtcclxuICAgICAgICAgICAgaWYgKGxvb2tBaGVhZFRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvb2tBaGVhZFRva2VuID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFRva2VuID0gbG9va0FoZWFkVG9rZW47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBuZXh0VG9rZW4gPSB0aGlzLmJlZ2luU3RhdGVzKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ29tbWVudChuZXh0VG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmluY2x1ZGVDb21tZW50c0FzTm9ybWFsVG9rZW5zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cy5wdXNoKG5leHRUb2tlbik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cy5wdXNoKG5leHRUb2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRUb2tlbiA9IHRoaXMuYmVnaW5TdGF0ZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IHdoaWxlICh0aGlzLmlzQ29tbWVudChuZXh0VG9rZW4pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXh0VG9rZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGJlZ2luU3RhdGVzKCk6IElUb2tlbiB7XHJcbiAgICAgICAgICAgIGxldCBuZXh0U3RhdGUgPSB0aGlzLnN0YXRlSW5pdCgpO1xyXG4gICAgICAgICAgICB3aGlsZSAobmV4dFN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0U3RhdGUgPSB0aGlzW25leHRTdGF0ZV0uY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW4gPSB0aGlzLmNyZWF0ZVRva2VuKFRva2VuVHlwZS5lcnJvciwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJlYWRhYmxlVG9rZW5zTW9kZSAmJiB0aGlzLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRva2VuLnR5cGUgPSB0b1JlYWRhYmxlVG9rZW5UeXBlKHRoaXMudG9rZW4udHlwZSBhcyBUb2tlblR5cGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG9rZW4uc3ViVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW4uc3ViVHlwZSA9IHRvUmVhZGFibGVMaXRlcmFsU3ViVHlwZSh0aGlzLnRva2VuLnN1YlR5cGUgYXMgTGl0ZXJhbFN1YlR5cGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbGF0ZXN0VG9rZW4oKTogSVRva2VuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFRva2VuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGxvb2tBaGVhZE5leHRUb2tlbigpOiBJVG9rZW4ge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VG9rZW4gPSB0aGlzLmN1cnJlbnRUb2tlbjtcclxuICAgICAgICAgICAgdGhpcy5sb29rQWhlYWRUb2tlbiA9IHRoaXMubmV4dFRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUb2tlbiA9IGN1cnJlbnRUb2tlbjtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9va0FoZWFkVG9rZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaGFzTmV4dCgpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuaXNFb2YodG9rZW4pICYmICF0aGlzLmlzRXJyb3IodG9rZW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldENvbW1lbnRzKCk6IElUb2tlbltdIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tbWVudHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0Q3VycmVudEN1cnNvclBvcygpOiBJVG9rZW5Qb3NpdGlvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBsaW5lOiB0aGlzLmxpbmVubyxcclxuICAgICAgICAgICAgICAgIGNvbHVtbjogdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpIC0gdGhpcy5jdXJyTGluZUN1cnNvclxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8gZmluYWwgc3RhdGVzXHJcblx0XHRcclxuICAgICAgICBwcml2YXRlIHN0YXRlRmluaXNoKCkgeyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGVFcnJvcigpIHsgfVxyXG4gICAgICAgIC8vLy8vLy8gZmluYWwgc3RhdGVzIC8vLy8vL1xyXG5cdFx0XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIFN0YXRlc1xyXG5cdFx0XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0ZUluaXQoKSB7XHJcbiAgICAgICAgICAgIC8vY2xlYW51cCBjdXJyZW50IHRva2VuXHJcbiAgICAgICAgICAgIHRoaXMudG9rZW4gPSB1bmRlZmluZWQ7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAvL3RyYWNrIGN1cnNvciBwb3NpdGlvblxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0TGluZW5vID0gdGhpcy5saW5lbm87XHJcbiAgICAgICAgICAgIHRoaXMucmVsYXRpdmVTdGFydEN1cnNvciA9IHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKSAtIHRoaXMuY3VyckxpbmVDdXJzb3I7XHJcbiAgICAgICAgICAgIHRoaXMuYWJzb2x1dGVTdGFydEN1cnNvciA9IHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYXJTdHJlYW0uaXNFb2YoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuY3JlYXRlVG9rZW4oVG9rZW5UeXBlLmVvZiwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZmluaXNoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgbmV4dFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKElkZW50aWZ5ZXJzLmlzSWRlbnRpZmllclN0YXJ0KGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uYndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgICAgICBuZXh0U3RhdGUgPSBTdGF0ZXMuaWRlbnRpZmllcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyQ2FjaGVkSGFuZGxlcjogKCkgPT4gc3RyaW5nID0gTGV4ZXIuQ2hhcmVjdGVyTG9va3VwW2NoYXJdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXJDYWNoZWRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmJ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRTdGF0ZSA9IGNoYXJDYWNoZWRIYW5kbGVyLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4Y2VwdGlvbkhhbmRsZXIuYWRkRXhjZXB0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVuZXhwZWN0ZWQgdG9rZW4gXFxcIlwiICsgdXRpbGl0aWVzLkNoYXJQb2ludHMuZnJvbUNvZGVQb2ludChjaGFyKSArIFwiXFxcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbmVubyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0U3RhdGUgPSBTdGF0ZXMuZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXh0U3RhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRlSWRlbnRpZmllcigpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBsZXQgY2hhckdlbjogdXRpbGl0aWVzLklTdHJpbmdGcm9tQ2hhclBvaW50ID0gdXRpbGl0aWVzLkNoYXJQb2ludHMuY3JlYXRlU3RyaW5nRnJvbUNoYXJQb2ludEdlbmVyYXRvcigpLFxyXG4gICAgICAgICAgICAgICAgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNjYW5Vbmljb2RlRXNjYXBlU2VxdWVuY2UoY2hhckdlbiwgY2hhcikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhjZXB0aW9uSGFuZGxlci5hZGRFeGNlcHRpb24oXCJcIiwgdGhpcy5saW5lbm8sIHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGVzLmVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKElkZW50aWZ5ZXJzLmlzSWRlbnRpZmllclBhcnQoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2NhblVuaWNvZGVFc2NhcGVTZXF1ZW5jZShjaGFyR2VuLCBjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4Y2VwdGlvbkhhbmRsZXIuYWRkRXhjZXB0aW9uKFwiXCIsIHRoaXMubGluZW5vLCB0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGVzLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmJ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdHlwZSxcclxuICAgICAgICAgICAgICAgIHN1YlR5cGUsXHJcbiAgICAgICAgICAgICAgICBzdHI6IGFueSA9IGNoYXJHZW4uZ2V0U3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmIChJZGVudGlmeWVycy5pc0tleXdvcmQoc3RyKSkge1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9IFRva2VuVHlwZS5rZXl3b3JkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChzdHIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibnVsbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gVG9rZW5UeXBlLmxpdGVyYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YlR5cGUgPSBMaXRlcmFsU3ViVHlwZS5udWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidHJ1ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gVG9rZW5UeXBlLmxpdGVyYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YlR5cGUgPSBMaXRlcmFsU3ViVHlwZS5ib29sZWFuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZmFsc2VcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFRva2VuVHlwZS5saXRlcmFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJUeXBlID0gTGl0ZXJhbFN1YlR5cGUuYm9vbGVhbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBUb2tlblR5cGUuaWRlbnRpZmllcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRva2VuID0gdGhpcy5jcmVhdGVUb2tlbih0eXBlLCBzdHIsIHN1YlR5cGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gU3RhdGVzLmZpbmlzaDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGdlblN0YXRlU3RyaW5nKHN0cmluZ1Rlcm1pbmF0b3JDaGFyOiBudW1iZXIpOiAoKSA9PiBzdHJpbmcge1xyXG4gICAgICAgICAgICAvLyBlc2Mgc2VxIC0+XHJcbiAgICAgICAgICAgIC8vIFxcICcgXCIgXFwgYiBmIG4gciB0IHYgIC0+IHZhbFxyXG4gICAgICAgICAgICAvLyBcXCB4IEhleERpZ2l0IEhleERpZ2l0ICAtPiBoZXggdmFsXHJcbiAgICAgICAgICAgIC8vIFxcIHUgSGV4RGlnaXQgSGV4RGlnaXQgSGV4RGlnaXQgSGV4RGlnaXQgLT4gdSB2YWxcclxuICAgICAgICAgICAgLy8gXFwgbGluZSBjb250IC0+IGlnbm9yZVxyXG4gICAgICAgICAgICAvLyBcXCBkZWNpbWFsIGRpZ2l0IC0+IGlnbm9yZSBkaWdpdFxyXG4gICAgICAgICAgICAvLyBcXCBjaGFyIC0+IGlnbm9yZSBcXFxyXG5cdFx0XHRcclxuICAgICAgICAgICAgLy8gY2Fubm90IGJlIGFuIGFycm93IGZ1bmN0aW9uIGJlY2F1c2UgaXQgYmluZHMgX3RoaXMgLT4gdGhpc1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uZ2V0TmV4dENoYXIoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyR2VuOiB1dGlsaXRpZXMuSVN0cmluZ0Zyb21DaGFyUG9pbnQgPSB1dGlsaXRpZXMuQ2hhclBvaW50cy5jcmVhdGVTdHJpbmdGcm9tQ2hhclBvaW50R2VuZXJhdG9yKCk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5jaGFyU3RyZWFtLmdldE5leHRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09IHN0cmluZ1Rlcm1pbmF0b3JDaGFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhciA9PT0gUE5DLmJhY2tzbGFzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyID0gdGhpcy5jaGFyU3RyZWFtLmdldE5leHRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY2hhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMuYjogY2hhckdlbi5hZGRDaGFyUG9pbnQoOCk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMuZjogY2hhckdlbi5hZGRDaGFyUG9pbnQoMTIpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUE5DLm46IGNoYXJHZW4uYWRkQ2hhclBvaW50KDEwKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFBOQy5yOiBjaGFyR2VuLmFkZENoYXJQb2ludCgxMyk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMudDogY2hhckdlbi5hZGRDaGFyUG9pbnQoOSk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMudjogY2hhckdlbi5hZGRDaGFyUG9pbnQoMTEpOyBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFBOQy54OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5oYW5kbGVTY2FuSGV4RGlnaXRzKDIsIGNoYXJHZW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBQTkMudTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGFuZGxlU2NhbkhleERpZ2l0cyg0LCBjaGFyR2VuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGVzLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoSWRlbnRpZnllcnMuaXNMaW5lVGVybWluYXRvcihjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyR2VuLmFkZENoYXJQb2ludChjaGFyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVOZXdMaW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4Y2VwdGlvbkhhbmRsZXIuYWRkRXhjZXB0aW9uKFwidW5jbG9zZWQgc3RyaW5nXCIsIHRoaXMubGluZW5vLCB0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGVzLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhckdlbi5hZGRDaGFyUG9pbnQoY2hhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuY3JlYXRlVG9rZW4oVG9rZW5UeXBlLmxpdGVyYWwsIGNoYXJHZW4uZ2V0U3RyaW5nKCksIExpdGVyYWxTdWJUeXBlLnN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGVzLmZpbmlzaDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGVOdW1iZXIoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgbGV0IGludCA9IHRoaXMuc2NhbkRpZ2l0cygpLFxyXG4gICAgICAgICAgICAgICAgcG9pbnQgPSBpbnQubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGFyU3RyZWFtLm1hdGNoKFBOQy5kb3QpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVjaW1hbCA9IHRoaXMuc2NhbkRlY2ltYWwoKTtcclxuICAgICAgICAgICAgICAgIGlmIChkZWNpbWFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnQgPSBpbnQuY29uY2F0KGRlY2ltYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjYW5FeHBvbmVuc2lhbEFuZENyZWF0ZU51bWJlcihpbnQsIHBvaW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGVEb3RPck51bWJlcigpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmZ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICBsZXQgZGVjaW1hbCA9IHRoaXMuc2NhbkRlY2ltYWwoKTtcclxuICAgICAgICAgICAgaWYgKGRlY2ltYWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NhbkV4cG9uZW5zaWFsQW5kQ3JlYXRlTnVtYmVyKGRlY2ltYWwsIDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmJ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVQdW5jdHVhdGlvblNpbmdsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRlRGl2T3JDb21tZW50KCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uZndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5jaGFyU3RyZWFtLmdldE5leHRDaGFyKCk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoY2hhcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBQTkMuc2xhc2g6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5zaW5nbGVDb21tZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBQTkMuYXN0ZXJpc2s6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5tdWx0aUNvbW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFBOQy5hc3NpZ246XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5id2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uYndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlUHVuY3R1YXRpb25TaW5nbGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGVQdW5jdHVhdGlvblNpbmdsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uZndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW4gPSB0aGlzLmNyZWF0ZVRva2VuRnJvbVBvcyhUb2tlblR5cGUucHVuY3R1YXRpb24pO1xyXG4gICAgICAgICAgICByZXR1cm4gU3RhdGVzLmZpbmlzaDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGVXaGl0ZVNwYWNlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5md2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5pbml0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0ZUxpbmVUZXJtaW5hdG9yKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0TmV4dENoYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLm1hdGNoQ29tcGxleChuZXh0Y2hhciA9PiBcclxuICAgICAgICAgICAgICAgIChjaGFyID09PSBQTkMuY3IgJiYgbmV4dGNoYXIgPT09IFBOQy5sZikgXHJcbiAgICAgICAgICAgICAgICB8fCBuZXh0Y2hhciA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTmV3TGluZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gU3RhdGVzLmluaXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRlU2luZ2xlQ29tbWVudCgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKElkZW50aWZ5ZXJzLmlzTGluZVRlcm1pbmF0b3IoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU5ld0xpbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSB3aGlsZSAoY2hhciAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuY3JlYXRlVG9rZW5Gcm9tUG9zKFRva2VuVHlwZS5jb21tZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5maW5pc2g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRlTXVsdGlDb21tZW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09IFBOQy5hc3Rlcmlzaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoYXJTdHJlYW0ubWF0Y2goUE5DLnNsYXNoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGNlcHRpb25IYW5kbGVyLmFkZEV4Y2VwdGlvbihcInVuY2xvc2VkIGNvbW1lbnRcIiwgdGhpcy5saW5lbm8sIHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YXRlcy5lcnJvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKElkZW50aWZ5ZXJzLmlzTGluZVRlcm1pbmF0b3IoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU5ld0xpbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRva2VuID0gdGhpcy5jcmVhdGVUb2tlbkZyb21Qb3MoVG9rZW5UeXBlLmNvbW1lbnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gU3RhdGVzLmZpbmlzaDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2NhblVuaWNvZGVFc2NhcGVTZXF1ZW5jZShjaGFyR2VuOiB1dGlsaXRpZXMuSVN0cmluZ0Zyb21DaGFyUG9pbnQsIGNoYXI6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gUE5DLmJhY2tzbGFzaCkge1xyXG4gICAgICAgICAgICAgICAgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09IFBOQy51KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhleERpZ2l0ID0gdGhpcy5zY2FuSGV4RGlnaXRzKDQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoZXhEaWdpdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJHZW4uYWRkQ2hhclBvaW50KGhleERpZ2l0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjaGFyR2VuLmFkZENoYXJQb2ludChjaGFyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vL1N0YXRlcy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIFNjYW5uZXJzXHJcbiAgICAgICAgcHJpdmF0ZSBzY2FuRXhwb25lbnNpYWxBbmRDcmVhdGVOdW1iZXIoaW50OiBudW1iZXJbXSwgcG9pbnQ6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIGxldCBleHAgPSB0aGlzLnNjYW5FeHBvbmVudGlhbCgpO1xyXG4gICAgICAgICAgICBpZiAoZXhwID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hhclN0cmVhbS5tYXRjaENvbXBsZXgoY2hhciA9PiBJZGVudGlmeWVycy5pc0lkZW50aWZpZXJQYXJ0KGNoYXIpKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGNlcHRpb25IYW5kbGVyLmFkZEV4Y2VwdGlvbihcIlwiLCB0aGlzLmxpbmVubywgdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IG51bSA9IHRoaXMuY3JlYXRlTnVtYmVyKGludCwgcG9pbnQsIGV4cCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW4gPSB0aGlzLmNyZWF0ZVRva2VuKFRva2VuVHlwZS5saXRlcmFsLCBudW0sIExpdGVyYWxTdWJUeXBlLm51bWJlcik7XHJcbiAgICAgICAgICAgIHJldHVybiBTdGF0ZXMuZmluaXNoXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNjYW5EaWdpdHMoKTogbnVtYmVyW10ge1xyXG4gICAgICAgICAgICBsZXQgY2hhcixcclxuICAgICAgICAgICAgICAgIGRpdHMgPSBbXSxcclxuICAgICAgICAgICAgICAgIGN1cnNvclBvcyA9IHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKTtcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNoYXIgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0TmV4dENoYXIoKTtcclxuICAgICAgICAgICAgICAgIGlmIChJZGVudGlmeWVycy5pc0RpZ2l0KGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpZ2l0ID0gdXRpbGl0aWVzLkNoYXJQb2ludHMuZ2V0RGlnaXRGcm9tQ2hhclBvaW50KGNoYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdHMucHVzaChkaWdpdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgY3VyckN1cnNvcnBvcztcclxuICAgICAgICAgICAgaWYgKGNoYXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY3VyckN1cnNvcnBvcyA9IHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhclN0cmVhbS5id2RDdXJzb3IoKTtcclxuICAgICAgICAgICAgICAgIGN1cnJDdXJzb3Jwb3MgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGN1cnJDdXJzb3Jwb3MgLSBjdXJzb3JQb3MgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkaXRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNjYW5EZWNpbWFsKCk6IG51bWJlcltdIHtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0UG9zID0gdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpLFxyXG4gICAgICAgICAgICAgICAgZGlnaXRzID0gdGhpcy5zY2FuRGlnaXRzKCksXHJcbiAgICAgICAgICAgICAgICBlbmRQb3MgPSB0aGlzLmNoYXJTdHJlYW0uZ2V0Q3Vyc29yKCksXHJcbiAgICAgICAgICAgICAgICBkaWdpdFJhbmdlID0gZW5kUG9zIC0gc3RhcnRQb3M7XHJcbiAgICAgICAgICAgIGlmIChkaWdpdFJhbmdlICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlnaXRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNjYW5FeHBvbmVudGlhbCgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gUE5DLmV4cCB8fCBjaGFyID09PSBQTkMuZXhwYikge1xyXG4gICAgICAgICAgICAgICAgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5lZ2F0aXZlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09IFBOQy5taW51cykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5lZ2F0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgIT09IFBOQy5wbHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmJ3ZEN1cnNvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGRpZ2l0cyA9IHRoaXMuc2NhbkRpZ2l0cygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpZ2l0cyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGNlcHRpb25IYW5kbGVyLmFkZEV4Y2VwdGlvbihcImV4cG9uZW50aWFsIHNob3VsZCBwb3N0Zml4ZWQgYnkgbnVtYmVyc1wiLCB0aGlzLmxpbmVubywgdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gdGhpcy5jcmVhdGVOdW1iZXIoZGlnaXRzLCBkaWdpdHMubGVuZ3RoLCAwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZWdhdGl2ZSA/IC1udW0gOiBudW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hhciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uYndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNjYW5IZXhEaWdpdHModGltZXM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjYW5IZXhEaWdpdHNUaW1lcyh0aW1lcykpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhleFN0ciA9IHRoaXMuY2hhclN0cmVhbS50b2tlbml6ZShjaGFyIC0gdGltZXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGhleFN0ciwgMTYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNjYW5IZXhEaWdpdHNUaW1lcyh0aW1lczogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGxldCBzdGFydGluZ1BvcyA9IHRpbWVzO1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhciA9IHRoaXMuY2hhclN0cmVhbS5nZXROZXh0Q2hhcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFJZGVudGlmeWVycy5pc0hleERpZ2l0KGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtLmJ3ZEN1cnNvclJhbmdlKHN0YXJ0aW5nUG9zIC0gKHRpbWVzIC0gMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSB3aGlsZSAoLS10aW1lcyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgZ2VuUHVuY3R1YXRpb25TY2FubmVyKGNhbmRpY2F0ZVB1bmNzOiBudW1iZXJbXVtdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RMZW4gPSBfLmxhc3QoY2FuZGljYXRlUHVuY3MpLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IHB1bmNzTG9va3VwID0gXy5tYXAobmV3IEFycmF5KGxhc3RMZW4pLCAoKSA9PiBuZXcgT2JqZWN0KCkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjdXJyID0gbGFzdExlbiAtIDE7IGN1cnIgIT09IC0xOyAtLWN1cnIpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBjYW5kaWNhdGVQdW5jcy5sZW5ndGggLSAxOyBpICE9PSAtMTsgLS1pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGMgPSBjYW5kaWNhdGVQdW5jc1tpXVtjdXJyXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdW5jc0xvb2t1cFtjdXJyXVtjXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY2Fubm90IHVzZSBhcnJvdyBmdW5jdGlvbiBiZWNhdXNlIGl0IGNvbmZ1c2UgdGhpcyB3aXRoIF90aGlzIFxyXG4gICAgICAgICAgICAvLyBpbiB0aGUgY29tcGxpbGVkIHR5cGVzY3JpcHQgdmVyc2lvblxyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uZndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RMZW47ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5jaGFyU3RyZWFtLmdldE5leHRDaGFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwdW5jc0xvb2t1cFtpXVtjaGFyXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hhciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJTdHJlYW0uYndkQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuY3JlYXRlVG9rZW5Gcm9tUG9zKFRva2VuVHlwZS5wdW5jdHVhdGlvbiwgdGhpcy5zdGFydFBvcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGVzLmZpbmlzaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy9TY2FubmVycy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIExleCBvYmplY3QgY3JlYXRvcnNcclxuICAgICAgICBwcml2YXRlIGNyZWF0ZVBvcygpOiBJVG9rZW5Tb3VyY2VMb2NhdGlvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdGFydDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmU6IHRoaXMuc3RhcnRMaW5lbm8sXHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uOiB0aGlzLnJlbGF0aXZlU3RhcnRDdXJzb3JcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlbmQ6IHRoaXMuZ2V0Q3VycmVudEN1cnNvclBvcygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgY3JlYXRlVG9rZW5Gcm9tUG9zKHR5cGU6IHN0cmluZyB8IFRva2VuVHlwZSwgc3ViVHlwZT86IHN0cmluZyk6IElUb2tlbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jaGFyU3RyZWFtLnRva2VuaXplKHRoaXMuYWJzb2x1dGVTdGFydEN1cnNvcik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVRva2VuKHR5cGUsIHZhbHVlLCBzdWJUeXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgY3JlYXRlVG9rZW4odHlwZTogc3RyaW5nIHwgVG9rZW5UeXBlLCB2YWx1ZTogYW55LCBzdWJUeXBlPzogc3RyaW5nIHwgTGl0ZXJhbFN1YlR5cGUpOiBJVG9rZW4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbjogSVRva2VuID0geyB0eXBlLCB2YWx1ZSwgc3ViVHlwZSB9O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxvYykge1xyXG4gICAgICAgICAgICAgICAgdG9rZW4ubG9jID0gdGhpcy5jcmVhdGVQb3MoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICAgICAgfVxyXG5cdFx0XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy9MZXggb2JqZWN0IGNyZWF0b3JzLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIEhhbmRsZXJzXHJcblx0XHRcclxuICAgICAgICBwcml2YXRlIGdlbkludGVnZXJGcm9tQXJyYXkoZGlnaXRzLCBmcm9tLCB0bykge1xyXG4gICAgICAgICAgICBsZXQgbnVtID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGZyb207IGkgPCB0bzsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBudW0gPSAxMCAqIG51bSArIGRpZ2l0c1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBjcmVhdGVOdW1iZXIoZGlnaXRzLCBwb2ludCwgZXhwKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGFydFBvaW50ID0gcG9pbnQgKyBleHAsXHJcbiAgICAgICAgICAgICAgICBpbnRQYXJ0ID0gMCwgZGVjUGFydCA9IDA7XHJcbiAgICAgICAgICAgIGlmIChzdGFydFBvaW50IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IHRoaXMuZ2VuSW50ZWdlckZyb21BcnJheShkaWdpdHMsIDAsIGRpZ2l0cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bSAvIE1hdGgucG93KDEwLCBwb2ludCAtIGV4cCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhcnRQb2ludCA+IGRpZ2l0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBudW0gPSB0aGlzLmdlbkludGVnZXJGcm9tQXJyYXkoZGlnaXRzLCAwLCBkaWdpdHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudW0gKiBNYXRoLnBvdygxMCwgc3RhcnRQb2ludCAtIGRpZ2l0cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IHRoaXMuZ2VuSW50ZWdlckZyb21BcnJheShkaWdpdHMsIDAsIHN0YXJ0UG9pbnQpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlYyA9IHRoaXMuZ2VuSW50ZWdlckZyb21BcnJheShkaWdpdHMsIHN0YXJ0UG9pbnQsIGRpZ2l0cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bSArIGRlYyAvIE1hdGgucG93KDEwLCBkaWdpdHMubGVuZ3RoIC0gc3RhcnRQb2ludCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaGFuZGxlU2NhbkhleERpZ2l0cyhudW06IG51bWJlciwgY2hhckdlbjogdXRpbGl0aWVzLklTdHJpbmdGcm9tQ2hhclBvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGxldCBoZXhEaWdpdCA9IHRoaXMuc2NhbkhleERpZ2l0cyhudW0pO1xyXG4gICAgICAgICAgICBpZiAoaGV4RGlnaXQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGNlcHRpb25IYW5kbGVyLmFkZEV4Y2VwdGlvbihcIlwiLCB0aGlzLmxpbmVubywgdGhpcy5jaGFyU3RyZWFtLmdldEN1cnNvcigpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNoYXJHZW4uYWRkQ2hhclBvaW50KGhleERpZ2l0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaGFuZGxlTmV3TGluZSgpIHtcclxuICAgICAgICAgICAgKyt0aGlzLmxpbmVubztcclxuICAgICAgICAgICAgdGhpcy5jdXJyTGluZUN1cnNvciA9IHRoaXMuY2hhclN0cmVhbS5nZXRDdXJzb3IoKTtcclxuICAgICAgICB9XHRcdFxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vL0hhbmRsZXJzLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgfVxyXG59XHJcblxyXG4iLG51bGwsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJJRXhjZXB0aW9uLmQudHNcIiAvPlxyXG5cclxubW9kdWxlIHRybC5mcm9udGVuZC51dGlsaXRpZXMge1xyXG5cdGV4cG9ydCBjbGFzcyBFeGNlcHRpb25IYW5kbGVyIGltcGxlbWVudHMgSUV4Y2VwdGlvbkhhbmRsZXIge1xyXG5cdFx0cHJpdmF0ZSBleGNlcHRpb25zOiBJRXhjZXB0aW9uW10gPSBbXTtcclxuXHRcdFxyXG5cdFx0cHVibGljIGNvbnN0cnVjdG9yKCl7fVxyXG5cdFx0XHJcblx0XHRwdWJsaWMgYWRkRXhjZXB0aW9uKG1zZzogc3RyaW5nLCBsaW5lOiBudW1iZXIsIGNvbHVtbjogbnVtYmVyKSB7XHJcblx0XHRcdGxldCBleGNlcHRpb246IElFeGNlcHRpb24gPSB7XHJcblx0XHRcdFx0cG9zOiB7XHJcblx0XHRcdFx0XHRjb2x1bW4sIFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVcclxuXHRcdFx0XHR9LFx0XHRcclxuXHRcdFx0XHRtc2c6IG1zZ1xyXG5cdFx0XHR9O1xyXG5cdFx0XHR0aGlzLmV4Y2VwdGlvbnMucHVzaChleGNlcHRpb24pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwdWJsaWMgaGFzRXhjZXB0aW9ucygpOiBib29sZWFuIHtcclxuXHRcdFx0cmV0dXJuICFfLmlzRW1wdHkodGhpcy5leGNlcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIGNsZWFyKCk6IHZvaWQge1xyXG5cdFx0XHR0aGlzLmV4Y2VwdGlvbnMubGVuZ3RoID0gMDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIGdldEV4Y2VwdGlvbnMoKTogSUV4Y2VwdGlvbltdIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZXhjZXB0aW9ucztcclxuXHRcdH1cclxuXHR9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHNEZWZpbml0aW9ucy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi91dGlsaXRpZXMvQ2hhclBvaW50cy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJJQ2hhcmFjdGVyU3RyZWFtLmQudHNcIiAvPlxyXG5cclxubW9kdWxlIHRybC5mcm9udGVuZC5sZXhpY2FsIHtcclxuXHRcclxuXHRleHBvcnQgY2xhc3MgQ2hhcmFjdGVyU3RyZWFtIGltcGxlbWVudHMgSUNoYXJhY3RlclN0cmVhbSB7XHJcblx0XHRwcml2YXRlIGN1cnNvcjtcclxuXHJcblx0XHRwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBzcmM6IHN0cmluZykge1xyXG5cdFx0XHR0aGlzLmN1cnNvciA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0cHVibGljIGdldE5leHRDaGFyKCk6IG51bWJlciB7XHJcblx0XHRcdGlmKHRoaXMuaGFzTmV4dCgpKSB7XHJcblx0XHRcdFx0cmV0dXJuIHV0aWxpdGllcy5DaGFyUG9pbnRzLmNvZGVQb2ludEF0KHRoaXMuc3JjLCB0aGlzLmN1cnNvcisrKTtcclxuXHRcdFx0fVx0XHRcdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHB1YmxpYyBnZXRDaGFyKCk6IG51bWJlciB7XHJcblx0XHRcdHJldHVybiB1dGlsaXRpZXMuQ2hhclBvaW50cy5jb2RlUG9pbnRBdCh0aGlzLnNyYywgdGhpcy5jdXJzb3IpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHB1YmxpYyBnZXRDdXJzb3IoKTogbnVtYmVyIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY3Vyc29yO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwdWJsaWMgYndkQ3Vyc29yKCkge1xyXG5cdFx0XHQtLXRoaXMuY3Vyc29yO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwdWJsaWMgZndkQ3Vyc29yKCkge1xyXG5cdFx0XHRpZih0aGlzLmhhc05leHQoKSkge1xyXG5cdFx0XHRcdCsrdGhpcy5jdXJzb3I7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIGJ3ZEN1cnNvclJhbmdlKHJhbmdlOiBudW1iZXIpIHtcclxuXHRcdFx0dGhpcy5jdXJzb3IgPSBNYXRoLm1heCh0aGlzLmN1cnNvciAtIHJhbmdlLCAwKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIHRva2VuaXplKHN0YXJ0UG9zOiBudW1iZXIpOiBzdHJpbmcge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5zcmMuc3Vic3RyaW5nKHN0YXJ0UG9zLCB0aGlzLmN1cnNvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHB1YmxpYyBtYXRjaChjaGFyTWF0Y2g6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0XHRsZXQgY2hhciA9IHRoaXMuZ2V0TmV4dENoYXIoKTtcclxuXHRcdFx0aWYoY2hhciA9PT0gY2hhck1hdGNoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0aWYoY2hhciAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHR0aGlzLmJ3ZEN1cnNvcigpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIG1hdGNoQ29tcGxleChjb21wYXJhdG9yOiAoY2hhcjogbnVtYmVyKSA9PiBib29sZWFuKTogYm9vbGVhbiB7XHJcblx0XHRcdGxldCBjaGFyID0gdGhpcy5nZXROZXh0Q2hhcigpO1xyXG5cdFx0XHRpZihjb21wYXJhdG9yKGNoYXIpKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0aWYoY2hhciAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHR0aGlzLmJ3ZEN1cnNvcigpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVibGljIGlzRW9mKCk6IGJvb2xlYW4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jdXJzb3IgPj0gdGhpcy5zcmMubGVuZ3RoO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwcml2YXRlIGhhc05leHQoKTogYm9vbGVhbiB7XHJcblx0XHRcdHJldHVybiB0aGlzLmN1cnNvciA8IHRoaXMuc3JjLmxlbmd0aDtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHNEZWZpbml0aW9ucy90c2QuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJsZXhpY2FsL0xleGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cInV0aWxpdGllcy9FeGNlcHRpb24udHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwibGV4aWNhbC9DaGFyYWN0ZXJTdHJlYW0udHNcIiAvPlxyXG5cclxubW9kdWxlIHRybC5mcm9udGVuZC5hcGkge1xyXG5cclxuXHRpbnRlcmZhY2UgSVRva2VuaXplUmVzdWx0IHtcclxuXHRcdHRva2VuczogbGV4aWNhbC5JVG9rZW5bXSxcclxuXHRcdGV4Y2VwdGlvbnM/OiB1dGlsaXRpZXMuSUV4Y2VwdGlvbltdXHJcblx0fVxyXG5cclxuXHRleHBvcnQgZnVuY3Rpb24gdG9rZW5pemUoc3JjOiBzdHJpbmcsIG9wdGlvbnM/OiBsZXhpY2FsLklMZXhlck9wdGlvbnMpOiBJVG9rZW5pemVSZXN1bHQge1xyXG5cdFx0Y29uc3QgY3MgPSBuZXcgbGV4aWNhbC5DaGFyYWN0ZXJTdHJlYW0oc3JjKSxcclxuXHRcdFx0ZWggPSBuZXcgdXRpbGl0aWVzLkV4Y2VwdGlvbkhhbmRsZXIoKSxcclxuXHRcdFx0bGV4ID0gbmV3IGxleGljYWwuTGV4ZXIoY3MsIGVoLCBvcHRpb25zKTtcclxuXHJcblx0XHRjb25zdCB0b2tlbnM6IGxleGljYWwuSVRva2VuW10gPSBbXTtcclxuXHRcdHdoaWxlIChsZXguaGFzTmV4dCgpKSB7XHJcblx0XHRcdGNvbnN0IHRva2VuID0gbGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XHJcblx0XHR9O1xyXG5cclxuXHRcdGxldCB0b2tlbml6ZVJlc3VsdDogSVRva2VuaXplUmVzdWx0ID0ge1xyXG5cdFx0XHR0b2tlbnM6IHRva2Vuc1xyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAoZWguaGFzRXhjZXB0aW9ucygpKSB7XHJcblx0XHRcdHRva2VuaXplUmVzdWx0LmV4Y2VwdGlvbnMgPSBlaC5nZXRFeGNlcHRpb25zKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdG9rZW5pemVSZXN1bHQ7XHJcblx0fVxyXG5cclxufSAiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiSU5vZGUudHNcIiAvPlxyXG5cclxubW9kdWxlIHRybC5mcm9udGVuZC5zeW50YXgge1xyXG4gICAgXHJcbiAgICBleHBvcnQgY2xhc3MgTm9kZUZhY3Rvcnkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZW5hYmxlUG9zOiBib29sZWFuKSB7fVxyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgY3JlYXRlTm9kZShub2RlLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZW5hYmxlUG9zKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmxvYyA9IGxvYztcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVQcm9ncmFtKGJvZHk6IElTdGF0ZW1lbnRbXSwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElQcm9ncmFtIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlByb2dyYW1cIixcclxuICAgICAgICAgICAgICAgIGJvZHlcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudEVtcHR5KGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJRW1wdHlTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRW1wdHlTdGF0ZW1lbnRcIlxyXG4gICAgICAgICAgICB9LCBsb2MpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50QmxvY2soYm9keTogSVN0YXRlbWVudFtdLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUJsb2NrU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJsb2NrU3RhdGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICBib2R5XHJcbiAgICAgICAgICAgIH0sIGxvYyk7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTdGF0ZW1lbnRFeHByZXNzaW9uKGV4cHJlc3Npb246IElFeHByZXNzaW9uLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUV4cHJlc3Npb25TdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRXhwcmVzc2lvblN0YXRlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvblxyXG4gICAgICAgICAgICB9LCBsb2MpOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50SWYodGVzdDogSUV4cHJlc3Npb24sIGNvbnNlcXVlbnQ6IElTdGF0ZW1lbnQsIGFsdGVybmF0ZT86IElTdGF0ZW1lbnQsIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJSWZTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiSWZTdGF0ZW1lbnRcIixcclxuICAgICAgICAgICAgICAgIHRlc3QsXHJcbiAgICAgICAgICAgICAgICBjb25zZXF1ZW50LFxyXG4gICAgICAgICAgICAgICAgYWx0ZXJuYXRlXHJcbiAgICAgICAgICAgIH0sIGxvYyk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50QnJlYWsobGFiZWw6IElJZGVudGlmaWVyLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUJyZWFrU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkJyZWFrU3RhdGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICB9LCBsb2MpOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudENvbnRpbnVlKGxhYmVsOiBJSWRlbnRpZmllciwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElDb250aW51ZVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJDb250aW51ZVN0YXRlbWVudFwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgIH0sIGxvYyk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50U3dpdGNoKGRpc2NyaW1pbmFudDogSUV4cHJlc3Npb24sIGNhc2VzOiBJU3dpdGNoQ2FzZVtdLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVN3aXRjaFN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJTd2l0Y2hTdGF0ZW1lbnRcIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkaXNjcmltaW5hbnQsXHJcbiAgICAgICAgICAgICAgICBjYXNlc1xyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50UmV0dXJuKGFyZ3VtZW50OiBJRXhwcmVzc2lvbiwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElSZXR1cm5TdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUmV0dXJuU3RhdGVtZW50XCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYXJndW1lbnRcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudFRocm93KGFyZ3VtZW50OiBJRXhwcmVzc2lvbiwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElUaHJvd1N0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJUaHJvd1N0YXRlbWVudFwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFyZ3VtZW50XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTdGF0ZW1lbnRUcnkoYmxvY2s6IElCbG9ja1N0YXRlbWVudCwgaGFuZGxlcjogSUNhdGNoQ2xhdXNlLCBmaW5hbGl6ZXI6IElCbG9ja1N0YXRlbWVudCwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElUcnlTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiVHJ5U3RhdGVtZW50XCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYmxvY2ssXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyLFxyXG4gICAgICAgICAgICAgICAgZmluYWxpemVyXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTdGF0ZW1lbnRXaGlsZSh0ZXN0OiBJRXhwcmVzc2lvbiwgYm9keTogSVN0YXRlbWVudCwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElXaGlsZVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJXaGlsZVN0YXRlbWVudFwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRlc3QsXHJcbiAgICAgICAgICAgICAgICBib2R5XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTdGF0ZW1lbnREb1doaWxlKGJvZHk6IElTdGF0ZW1lbnQsIHRlc3Q6IElFeHByZXNzaW9uLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSURvV2hpbGVTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRG9XaGlsZVN0YXRlbWVudFwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAgICAgICB0ZXN0XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTdGF0ZW1lbnRGb3IoaW5pdDogSVZhcmlhYmxlRGVjbGFyYXRpb24gfCBJRXhwcmVzc2lvbiwgdGVzdDogSUV4cHJlc3Npb24sIHVwZGF0ZTogSUV4cHJlc3Npb24sIGJvZHk6IElTdGF0ZW1lbnQsIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJRm9yU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkZvclN0YXRlbWVudFwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGluaXQsXHJcbiAgICAgICAgICAgICAgICB0ZXN0LFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlLFxyXG4gICAgICAgICAgICAgICAgYm9keVxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlU3RhdGVtZW50Rm9ySW4obGVmdDogSVZhcmlhYmxlRGVjbGFyYXRpb24gfCBJRXhwcmVzc2lvbiwgcmlnaHQ6IElFeHByZXNzaW9uLCBib2R5OiBJU3RhdGVtZW50LCBlYWNoOiBib29sZWFuLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUZvckluU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkZvckluU3RhdGVtZW50XCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGVmdCxcclxuICAgICAgICAgICAgICAgIHJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgYm9keSxcclxuICAgICAgICAgICAgICAgIGVhY2hcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVN0YXRlbWVudERlYnVnZ2VyKGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJRGVidWdnZXJTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRm9ySW5TdGF0ZW1lbnRcIixcclxuICAgICAgICAgICAgICAgIGxvY1xyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRGVjbGFyYXRpb25GdW5jdGlvbihpZDogSUlkZW50aWZpZXIsIHBhcmFtczogc3RyaW5nW10sIGJvZHk6IElCbG9ja1N0YXRlbWVudCwgZGVjbGFyYXRpb25zOiBJVmFyaWFibGVEZWNsYXJhdG9yW10sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJRnVuY3Rpb25EZWNsYXJhdGlvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJGdW5jdGlvbkRlY2xhcmF0aW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXMsXHJcbiAgICAgICAgICAgICAgICBib2R5XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVEZWNsYXJhdGlvblZhcmlhYmxlKGRlY2xhcmF0aW9uczogSVZhcmlhYmxlRGVjbGFyYXRvcltdLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVZhcmlhYmxlRGVjbGFyYXRpb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiVmFyaWFibGVEZWNsYXJhdGlvblwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucyxcclxuICAgICAgICAgICAgICAgIGtpbmQ6IFwidmFyXCJcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZVZhcmlhYmxlRGVjbGFyYXRvcihpZDogSUlkZW50aWZpZXIsIGluaXQ6IElFeHByZXNzaW9uLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVZhcmlhYmxlRGVjbGFyYXRvciB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJWYXJpYWJsZURlY2xhcmF0b3JcIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgIGluaXRcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUV4cHJlc3Npb25UaGlzKGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJVGhpc0V4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiVGhpc0V4cHJlc3Npb25cIixcclxuICAgICAgICAgICAgICAgIGxvY1xyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRXhwcmVzc2lvbkFycmF5KGVsZW1lbnRzOiBJRXhwcmVzc2lvbltdLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUFycmF5RXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJBcnJheUV4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50c1xyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRXhwcmVzc2lvbk9iamVjdChwcm9wZXJ0aWVzOiBJUHJvcGVydHlbXSwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElPYmplY3RFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIk9iamVjdEV4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVPYmplY3RQcm9wZXJ0eShrZXk6IElMaXRlcmFsIHwgSUlkZW50aWZpZXIsIHZhbHVlOiBJRXhwcmVzc2lvbiwga2luZDogc3RyaW5nLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVByb3BlcnR5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlByb3BlcnR5XCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBraW5kXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVFeHByZXNzaW9uRnVuY3Rpb24oaWQ6IElJZGVudGlmaWVyLCBwYXJhbXM6IHN0cmluZ1tdLCBib2R5OiBJQmxvY2tTdGF0ZW1lbnQsIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJRnVuY3Rpb25FeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkZ1bmN0aW9uRXhwcmVzc2lvblwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgYm9keVxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH0gICAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRXhwcmVzc2lvblNlcXVlbmNlKGV4cHJlc3Npb25zOiBJRXhwcmVzc2lvbltdLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVNlcXVlbmNlRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJTZXF1ZW5jZUV4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uc1xyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRXhwcmVzc2lvblVuYXJ5KG9wZXJhdG9yOiBzdHJpbmcsIHByZWZpeDogYm9vbGVhbiwgYXJndW1lbnQ6IElFeHByZXNzaW9uLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSVVuYXJ5RXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJVbmFyeUV4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcixcclxuICAgICAgICAgICAgICAgIHByZWZpeCxcclxuICAgICAgICAgICAgICAgIGFyZ3VtZW50XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVFeHByZXNzaW9uQmluYXJ5KG9wZXJhdG9yOiBzdHJpbmcsIGxlZnQ6IElFeHByZXNzaW9uLCByaWdodDogSUV4cHJlc3Npb24sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJQmluYXJ5RXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCaW5hcnlFeHByZXNzaW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3IsXHJcbiAgICAgICAgICAgICAgICBsZWZ0LFxyXG4gICAgICAgICAgICAgICAgcmlnaHRcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUV4cHJlc3Npb25Bc3NpZ25tZW50KG9wZXJhdG9yOiBzdHJpbmcsIGxlZnQ6IElFeHByZXNzaW9uLCByaWdodDogSUV4cHJlc3Npb24sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJQXNzaWdubWVudEV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQXNzaWdubWVudEV4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcixcclxuICAgICAgICAgICAgICAgIGxlZnQsXHJcbiAgICAgICAgICAgICAgICByaWdodFxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlRXhwcmVzc2lvblVwZGF0ZShvcGVyYXRvcjogc3RyaW5nLCBhcmd1bWVudDogSUV4cHJlc3Npb24sIHByZWZpeDogYm9vbGVhbiwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElVcGRhdGVFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlVwZGF0ZUV4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcixcclxuICAgICAgICAgICAgICAgIGFyZ3VtZW50LFxyXG4gICAgICAgICAgICAgICAgcHJlZml4XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVFeHByZXNzaW9uTG9naWNhbChvcGVyYXRvcjogc3RyaW5nLCBsZWZ0OiBJRXhwcmVzc2lvbiwgcmlnaHQ6IElFeHByZXNzaW9uLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUxvZ2ljYWxFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkxvZ2ljYWxFeHByZXNzaW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3IsXHJcbiAgICAgICAgICAgICAgICBsZWZ0LFxyXG4gICAgICAgICAgICAgICAgcmlnaHRcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUV4cHJlc3Npb25Db25kaXRpb25hbCh0ZXN0OiBJRXhwcmVzc2lvbiwgYWx0ZXJuYXRlOiBJRXhwcmVzc2lvbiwgY29uc2VxdWVudDogSUV4cHJlc3Npb24sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJQ29uZGl0aW9uYWxFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkNvbmRpdGlvbmFsRXhwcmVzc2lvblwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRlc3QsXHJcbiAgICAgICAgICAgICAgICBhbHRlcm5hdGUsXHJcbiAgICAgICAgICAgICAgICBjb25zZXF1ZW50XHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVFeHByZXNzaW9uTmV3KGNhbGxlZTogSUV4cHJlc3Npb24sIGFyZ3M6IElFeHByZXNzaW9uW10sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJTmV3RXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJOZXdFeHByZXNzaW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2FsbGVlLFxyXG4gICAgICAgICAgICAgICAgYXJndW1lbnRzOiBhcmdzXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVFeHByZXNzaW9uQ2FsbChjYWxsZWU6IElFeHByZXNzaW9uLCBhcmdzOiBJRXhwcmVzc2lvbltdLCBsb2M/OiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uKTogSUNhbGxFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkNhbGxFeHByZXNzaW9uXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2FsbGVlLFxyXG4gICAgICAgICAgICAgICAgYXJndW1lbnRzOiBhcmdzXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVFeHByZXNzaW9uTWVtYmVyKG9iamVjdDogSUV4cHJlc3Npb24sIHByb3BlcnR5OiBJSWRlbnRpZmllciB8IElFeHByZXNzaW9uLCBjb21wdXRlZDogYm9vbGVhbiwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElNZW1iZXJFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIk1lbWJlckV4cHJlc3Npb25cIiwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvYmplY3QsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgIGNvbXB1dGVkXHJcbiAgICAgICAgICAgIH0sIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVTd2l0Y2hDYXNlKHRlc3Q6IElFeHByZXNzaW9uLCBjb25zZXF1ZW50OiBJU3RhdGVtZW50W10sIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJU3dpdGNoQ2FzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJTd2l0Y2hDYXNlXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGVzdCxcclxuICAgICAgICAgICAgICAgIGNvbnNlcXVlbnRcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZUNhdGNoQ2xhdXNlKHBhcmFtOiBzdHJpbmcsIGJvZHk6IElCbG9ja1N0YXRlbWVudCwgbG9jPzogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbik6IElDYXRjaENsYXVzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJDYXRjaENsYXVzZVwiLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHBhcmFtLFxyXG4gICAgICAgICAgICAgICAgYm9keVxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlSWRlbnRpZmllcihuYW1lOiBzdHJpbmcsIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJSWRlbnRpZmllciB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJJZGVudGlmaWVyXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICB9LCBsb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgY3JlYXRlTGl0ZXJhbCh2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlciB8IElSZWdFeHAsIGxvYz86IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24pOiBJTGl0ZXJhbCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJMaXRlcmFsXCIsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgfSwgbG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3RzRGVmaW5pdGlvbnMvdHNkLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vbGV4aWNhbC9MZXhlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi91dGlsaXRpZXMvRXhjZXB0aW9uLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2xleGljYWwvQ2hhcmFjdGVyU3RyZWFtLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2xleGljYWwvVG9rZW5EZWZpbml0aW9ucy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJOb2RlRmFjdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJJUGFyc2VyLmQudHNcIiAvPlxyXG5cclxubW9kdWxlIHRybC5mcm9udGVuZC5zeW50YXgge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBQYXJzZXIgaW1wbGVtZW50cyBJUGFyc2VyIHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBub2RlRmFjdG9yeTogTm9kZUZhY3Rvcnk7XHJcbiAgICAgICAgcHVibGljIHBhcnNlRXhjZXB0aW9uOiB1dGlsaXRpZXMuSUV4Y2VwdGlvbkhhbmRsZXI7XHJcblxyXG4gICAgICAgIHByaXZhdGUgY2hhclN0cmVhbTogbGV4aWNhbC5JQ2hhcmFjdGVyU3RyZWFtO1xyXG4gICAgICAgIHByaXZhdGUgbGV4RXhjZXB0aW9uOiB1dGlsaXRpZXMuSUV4Y2VwdGlvbkhhbmRsZXI7XHJcbiAgICAgICAgcHJpdmF0ZSBsZXg6IGxleGljYWwuSUxleGVyO1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBkZWZhdWx0UGFyc2VyT3B0aW9uczogSVBhcnNlck9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGxvYzogZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgY2hhcnM6IHN0cmluZyxcclxuICAgICAgICAgICAgcHJpdmF0ZSBvcHRpb25zPzogSVBhcnNlck9wdGlvbnNcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gXy5kZWZhdWx0cyhcclxuICAgICAgICAgICAgICAgIF8uY2xvbmUob3B0aW9ucyB8fCB7fSksXHJcbiAgICAgICAgICAgICAgICBQYXJzZXIuZGVmYXVsdFBhcnNlck9wdGlvbnNcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlRmFjdG9yeSA9IG5ldyBOb2RlRmFjdG9yeSh0aGlzLm9wdGlvbnMubG9jKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJzZUV4Y2VwdGlvbiA9IG5ldyB1dGlsaXRpZXMuRXhjZXB0aW9uSGFuZGxlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGFyU3RyZWFtID0gbmV3IGxleGljYWwuQ2hhcmFjdGVyU3RyZWFtKGNoYXJzKTtcclxuICAgICAgICAgICAgdGhpcy5sZXhFeGNlcHRpb24gPSBuZXcgdXRpbGl0aWVzLkV4Y2VwdGlvbkhhbmRsZXIoKTtcclxuICAgICAgICAgICAgY29uc3QgbGV4T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGxvYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJlYWRhYmxlVG9rZW5zTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbmNsdWRlQ29tbWVudHNBc05vcm1hbFRva2VuczogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5sZXggPSBuZXcgbGV4aWNhbC5MZXhlcih0aGlzLmNoYXJTdHJlYW0sIHRoaXMubGV4RXhjZXB0aW9uLCBsZXhPcHRpb25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgYWRkRXhjZXB0aW9uKHRva2VuOiBsZXhpY2FsLklUb2tlbikge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMubGV4LmlzRW9mKHRva2VuKSA/IFwiZW5kIG9mIGZpbGVcIiA6IHRva2VuLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnNlRXhjZXB0aW9uLmFkZEV4Y2VwdGlvbihcclxuICAgICAgICAgICAgICAgIGBVbmRleHBlY3RlZCB0b2tlbjogJyR7dmFsdWV9J2AsXHJcbiAgICAgICAgICAgICAgICB0b2tlbi5sb2Muc3RhcnQubGluZSxcclxuICAgICAgICAgICAgICAgIHRva2VuLmxvYy5zdGFydC5jb2x1bW5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdHJpbU9wdGlvbmFsU2VtaWNvbG9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIjtcIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9rZW5Jc0luU2FtZUxpbmUodG9rZW4pICYmICF0aGlzLmxleC5pc0VvZih0b2tlbikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRXhjZXB0aW9uKHRva2VuKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdHJhY2tQb3NpdGlvblVuYXJ5KHRva2VuOiBsZXhpY2FsLklUb2tlbik6IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24ge1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW4ubG9jO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB0cmFja1Bvc2l0aW9uQnlQb3Moc3RhcnRQb3M6IGxleGljYWwuSVRva2VuUG9zaXRpb24pOiBsZXhpY2FsLklUb2tlblNvdXJjZUxvY2F0aW9uIHtcclxuICAgICAgICAgICAgY29uc3QgbGF0ZXN0VG9rZW4gPSB0aGlzLmxleC5sYXRlc3RUb2tlbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVMb2Moc3RhcnRQb3MsIGxhdGVzdFRva2VuLmxvYy5lbmQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB0cmFja1Bvc2l0aW9uQnlUb2tlbihzdGFydFRva2VuOiBsZXhpY2FsLklUb2tlbik6IGxleGljYWwuSVRva2VuU291cmNlTG9jYXRpb24ge1xyXG4gICAgICAgICAgICBjb25zdCBsYXRlc3RUb2tlbiA9IHRoaXMubGV4LmxhdGVzdFRva2VuKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUxvYyhzdGFydFRva2VuLmxvYy5zdGFydCwgbGF0ZXN0VG9rZW4ubG9jLmVuZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGNyZWF0ZUxvYyhzdGFydDogbGV4aWNhbC5JVG9rZW5Qb3NpdGlvbiwgZW5kOiBsZXhpY2FsLklUb2tlblBvc2l0aW9uKTogbGV4aWNhbC5JVG9rZW5Tb3VyY2VMb2NhdGlvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN0YXJ0LCBlbmQgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZXhwZWN0UHVuY3R1YXRpb24odmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRXhjZXB0aW9uKHRva2VuKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBleHBlY3RLZXl3b3JkKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzS2V5d29yZFZhbHVlKHRva2VuLCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRXhjZXB0aW9uKHRva2VuKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB0b2tlbklzSW5TYW1lTGluZSh0b2tlbjogbGV4aWNhbC5JVG9rZW4pOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuLmxvYy5lbmQubGluZSA9PT0gdGhpcy5sZXgubGF0ZXN0VG9rZW4oKS5sb2MuZW5kLmxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2UoKTogSVByb2dyYW0ge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RtdHMgPSB0aGlzLnBhcnNlU291cmNlRWxlbWVudHMoKTtcclxuICAgICAgICAgICAgaWYgKCFzdG10cykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlUHJvZ3JhbShzdG10cywgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZVNvdXJjZUVsZW1lbnRzKCk6IElTdGF0ZW1lbnRbXSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0bXRzOiBJU3RhdGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmxleC5oYXNOZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0bXQgPSB0aGlzLnBhcnNlU3RhdGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0bXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBzdG10cy5wdXNoKHN0bXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc3RtdHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VTb3VyY2VFbGVtZW50KCk6IElTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNLZXl3b3JkVmFsdWUodG9rZW4sIFwiZnVuY3Rpb25cIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRnVuY3Rpb25EZWNsYXJhdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlU3RhdGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc0tleXdvcmQodG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRva2VuLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInZhclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVZhcmlhYmxlU3RhdGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImlmXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlSWZTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwid2hpbGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VXaGlsZVN0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkb1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZURvV2hpbGVTdGF0ZW1lbnQoKTsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUZvclN0YXRlbWVudCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNQdW5jdHVhdGlvbih0b2tlbikpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodG9rZW4udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwie1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUJsb2NrU3RhdGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjtcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFbXB0eVN0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXhwcmVzc2lvblN0YXRlbWVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlQmxvY2tTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCJ7XCIpKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RtdHM6IElTdGF0ZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgd2hpbGUgKCF0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwifVwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RtdCA9IHRoaXMucGFyc2VTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICghc3RtdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHN0bXRzLnB1c2goc3RtdCk7XHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCJ9XCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRCbG9jayhzdG10cywgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUVtcHR5U3RhdGVtZW50KCk6IElTdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCI7XCIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRFbXB0eSh0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VJZlN0YXRlbWVudCgpOiBJU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlc3RFeHByID0gdGhpcy5wYXJzZUtleXdvcmRMcGFyRXhwcmVzc2lvblJwYXIoXCJpZlwiKTtcclxuICAgICAgICAgICAgaWYgKCF0ZXN0RXhwcikgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnNTdG10ID0gdGhpcy5wYXJzZVN0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICBpZiAoIWNvbnNTdG10KSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IGFsdFN0bXQgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXgubWF0Y2hLZXl3b3JkKFwiZWxzZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgYWx0U3RtdCA9IHRoaXMucGFyc2VTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICghYWx0U3RtdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRJZih0ZXN0RXhwciwgY29uc1N0bXQsIGFsdFN0bXQsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VXaGlsZVN0YXRlbWVudCgpOiBJU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlc3RFeHByID0gdGhpcy5wYXJzZUtleXdvcmRMcGFyRXhwcmVzc2lvblJwYXIoXCJ3aGlsZVwiKTtcclxuICAgICAgICAgICAgaWYgKCF0ZXN0RXhwcikgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0bXQgPSB0aGlzLnBhcnNlU3RhdGVtZW50KCk7XHJcbiAgICAgICAgICAgIGlmIChzdG10KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRXaGlsZSh0ZXN0RXhwciwgc3RtdCwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlRG9XaGlsZVN0YXRlbWVudCgpOiBJU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RLZXl3b3JkKFwiZG9cIikpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdG10ID0gdGhpcy5wYXJzZVN0YXRlbWVudCgpO1xyXG4gICAgICAgICAgICBpZiAoIXN0bXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRlc3RFeHByID0gdGhpcy5wYXJzZUtleXdvcmRMcGFyRXhwcmVzc2lvblJwYXIoXCJ3aGlsZVwiKTtcclxuICAgICAgICAgICAgaWYgKCF0ZXN0RXhwcikgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMubGV4Lm1hdGNoUHVuY3R1YXRpb24oXCI7XCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50RG9XaGlsZShzdG10LCB0ZXN0RXhwciwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUZvclN0YXRlbWVudCgpOiBJU3RhdGVtZW50IHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICghKHRoaXMuZXhwZWN0S2V5d29yZChcImZvclwiKSAmJiB0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwiKFwiKSkpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgaW5pdERlY2w6IElWYXJpYWJsZURlY2xhcmF0aW9uID0gbnVsbCxcclxuICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogSVZhcmlhYmxlRGVjbGFyYXRvcltdLFxyXG4gICAgICAgICAgICAgICAgaW5pdEV4cHI6IElFeHByZXNzaW9uID0gbnVsbCxcclxuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIjtcIikpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc0tleXdvcmRWYWx1ZSh0b2tlbiwgXCJ2YXJcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMgPSB0aGlzLnBhcnNlVmFyaWFibGVEZWNsYXJhdG9ycygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZGVjbGFyYXRpb25zKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdERlY2wgPSB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZURlY2xhcmF0aW9uVmFyaWFibGUoZGVjbGFyYXRpb25zLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKHRva2VuKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRFeHByID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWluaXRFeHByKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaXNGb3JJbiA9IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdGVzdCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc0tleXdvcmRWYWx1ZSh0b2tlbiwgXCJpblwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICBpc0ZvckluID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmICgoIWluaXRFeHByICYmICFkZWNsYXJhdGlvbnMpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKChpbml0RXhwciAmJiAhUGFyc2VyLmlzTGVmdEhhbmRFeHByZXNzaW9uUmVzb2x2aW5nVG9SZWZlcmVuY2UoaW5pdEV4cHIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAoZGVjbGFyYXRpb25zICYmIGRlY2xhcmF0aW9ucy5sZW5ndGggIT09IDEpKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZUV4Y2VwdGlvbi5hZGRFeGNlcHRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBmb3IgaW4gbGVmdCBzaWRlIHNob3VsZCByZXNvbHZlIHRvIHJlZmVyZW5jZWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxUb2tlbi5sb2Muc3RhcnQubGluZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFRva2VuLmxvYy5zdGFydC5jb2x1bW5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIjtcIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCI7XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVzdCA9IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0ZXN0KSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwiO1wiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHVwZGF0ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIilcIikpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZSA9IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXVwZGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGlzRm9ySW4gJiYgIXVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFeGNlcHRpb24odG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCIpXCIpKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgYm9keSA9IHRoaXMucGFyc2VTdGF0ZW1lbnQoKTtcclxuICAgICAgICAgICAgaWYgKCFib2R5KSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pO1xyXG4gICAgICAgICAgICBjb25zdCBpbml0ID0gaW5pdEV4cHIgfHwgaW5pdERlY2w7XHJcbiAgICAgICAgICAgIGlmIChpc0ZvckluKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVTdGF0ZW1lbnRGb3JJbihpbml0LCB1cGRhdGUsIGJvZHksIGZhbHNlLCBwb3MpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50Rm9yKGluaXQsIHRlc3QsIHVwZGF0ZSwgYm9keSwgcG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwYXJzZUtleXdvcmRMcGFyRXhwcmVzc2lvblJwYXIoa2V5d29yZDogc3RyaW5nKTogSUV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICBpZiAoISh0aGlzLmV4cGVjdEtleXdvcmQoa2V5d29yZCkgJiYgdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIihcIikpKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhwciA9IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIGlmIChleHByICYmIHRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCIpXCIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlVmFyaWFibGVTdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0S2V5d29yZChcInZhclwiKSkgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlRGVjbGFyYXRvcnMgPSB0aGlzLnBhcnNlVmFyaWFibGVEZWNsYXJhdG9ycygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnRyaW1PcHRpb25hbFNlbWljb2xvbigpKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRGVjbGFyYXRpb25WYXJpYWJsZSh2YXJpYWJsZURlY2xhcmF0b3JzLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwYXJzZVZhcmlhYmxlRGVjbGFyYXRvcnMoKTogSVZhcmlhYmxlRGVjbGFyYXRvcltdIHtcclxuICAgICAgICAgICAgbGV0IHZhcmlhYmxlRGVjbGFyYXRvciA9IHRoaXMucGFyc2VWYXJpYWJsZURlY2xhcmF0b3IoKTtcclxuICAgICAgICAgICAgaWYgKCF2YXJpYWJsZURlY2xhcmF0b3IpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZURlY2xhcmF0b3JzOiBJVmFyaWFibGVEZWNsYXJhdG9yW10gPSBbdmFyaWFibGVEZWNsYXJhdG9yXTtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMubGV4Lm1hdGNoUHVuY3R1YXRpb24oXCIsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZURlY2xhcmF0b3IgPSB0aGlzLnBhcnNlVmFyaWFibGVEZWNsYXJhdG9yKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhcmlhYmxlRGVjbGFyYXRvcikgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0b3JzLnB1c2godmFyaWFibGVEZWNsYXJhdG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFyaWFibGVEZWNsYXJhdG9ycztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZVZhcmlhYmxlRGVjbGFyYXRvcigpOiBJVmFyaWFibGVEZWNsYXJhdG9yIHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSB0aGlzLnBhcnNlSWRlbnRpZmllcigpO1xyXG4gICAgICAgICAgICBpZiAoIWlkZW50aWZpZXIpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgZXhwciA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5tYXRjaFB1bmN0dWF0aW9uKFwiPVwiKSkge1xyXG4gICAgICAgICAgICAgICAgZXhwciA9IHRoaXMucGFyc2VBc3NpZ25tZW50RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFleHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVWYXJpYWJsZURlY2xhcmF0b3IoaWRlbnRpZmllciwgZXhwciwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUV4cHJlc3Npb25TdGF0ZW1lbnQoKTogSVN0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgaWYgKCFleHByKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnRyaW1PcHRpb25hbFNlbWljb2xvbigpKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlU3RhdGVtZW50RXhwcmVzc2lvbihleHByLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlRnVuY3Rpb25EZWNsYXJhdGlvbigpOiBJRnVuY3Rpb25EZWNsYXJhdGlvbiB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vdCBpbXBsZW1lbnRlZCB5ZXRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlRXhwcmVzc2lvbigpOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUFzc2lnbm1lbnRFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIGlmICghZXhwcikgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5tYXRjaFB1bmN0dWF0aW9uKFwiLFwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhwcnM6IElFeHByZXNzaW9uW10gPSBbZXhwcl07XHJcbiAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwciA9IHRoaXMucGFyc2VBc3NpZ25tZW50RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhwcikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cHJzLnB1c2goZXhwcik7XHJcbiAgICAgICAgICAgICAgICB9IHdoaWxlICh0aGlzLmxleC5tYXRjaFB1bmN0dWF0aW9uKFwiLFwiKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvblNlcXVlbmNlKGV4cHJzLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoYW5rcyB0bzogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNzA5ODY2L3doYXRzLWEtdmFsaWQtbGVmdC1oYW5kLXNpZGUtZXhwcmVzc2lvbi1pbi1qYXZhc2NyaXB0LWdyYW1tYXJcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpc0xlZnRIYW5kRXhwcmVzc2lvblJlc29sdmluZ1RvUmVmZXJlbmNlKGV4cHI6IElFeHByZXNzaW9uKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHByLnR5cGUgPT09IFwiSWRlbnRpZmllclwiIHx8IGV4cHIudHlwZSA9PT0gXCJNZW1iZXJFeHByZXNzaW9uXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBBc3NpZ25tZW50T3BlcmF0b3JzID0ge1xyXG4gICAgICAgICAgICBcIj1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJ8fFwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcIio9XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiLz1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCIlPVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcIis9XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiLT1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCI8PD1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCI+Pj1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCI+Pj49XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiJj1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJePVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcInw9XCI6IHRydWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUFzc2lnbm1lbnRFeHByZXNzaW9uKCk6IElFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUNvbmRpdGlvbmFsRXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICBpZiAoIWV4cHIpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNQdW5jdHVhdGlvbih0b2tlbilcclxuICAgICAgICAgICAgICAgICYmIFBhcnNlci5Bc3NpZ25tZW50T3BlcmF0b3JzW3Rva2VuLnZhbHVlXVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGlmICghUGFyc2VyLmlzTGVmdEhhbmRFeHByZXNzaW9uUmVzb2x2aW5nVG9SZWZlcmVuY2UoZXhwcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlRXhjZXB0aW9uLmFkZEV4Y2VwdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgYEludmFsaWQgbGVmdC1oYW5kIHNpZGUgaW4gYXNzaWdubWVudGAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuLmxvYy5zdGFydC5saW5lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbi5sb2Muc3RhcnQuY29sdW1uXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJleHByID0gdGhpcy5wYXJzZUFzc2lnbm1lbnRFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJleHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbkFzc2lnbm1lbnQodG9rZW4udmFsdWUsIGV4cHIsIHJleHByLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUNvbmRpdGlvbmFsRXhwcmVzc2lvbigpOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUJpbmFyeUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgaWYgKCFleHByKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCI/XCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnNlcXVlbnRFeHByID0gdGhpcy5wYXJzZUFzc2lnbm1lbnRFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnNlcXVlbnRFeHByKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIjpcIikpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYWx0ZXJuYXRlRXhwciA9IHRoaXMucGFyc2VBc3NpZ25tZW50RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhbHRlcm5hdGVFeHByKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25Db25kaXRpb25hbChleHByLCBhbHRlcm5hdGVFeHByLCBjb25zZXF1ZW50RXhwciwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBCaW5hcnlUb2tlblZhbHVlc19vciA9IDE7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQmluYXJ5VG9rZW5WYWx1ZXNfYW5kID0gMjtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBCaW5hcnlUb2tlblZhbHVlc19pc2xvZ2ljID0gUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2FuZDtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBCaW5hcnlUb2tlblZhbHVlc19ib3IgPSAzO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEJpbmFyeVRva2VuVmFsdWVzX3hvciA9IDQ7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQmluYXJ5VG9rZW5WYWx1ZXNfYmFuZCA9IDU7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQmluYXJ5VG9rZW5WYWx1ZXNfZXEgPSA2O1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEJpbmFyeVRva2VuVmFsdWVzX3JlbCA9IDc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQmluYXJ5VG9rZW5WYWx1ZXNfc2hpZnQgPSA4O1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEJpbmFyeVRva2VuVmFsdWVzX2FkZCA9IDk7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQmluYXJ5VG9rZW5WYWx1ZXNfbXVsdGkgPSAxMDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaXNMb2dpY0JpbmFyeVRva2VuVmFsdWUocmFuazogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiByYW5rIDw9IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19pc2xvZ2ljO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQmluYXJ5VG9rZW5WYWx1ZXMgPSB7XHJcbiAgICAgICAgICAgICd8fCc6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19vcixcclxuICAgICAgICAgICAgJyYmJzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2FuZCxcclxuICAgICAgICAgICAgJ3wnOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfYm9yLFxyXG4gICAgICAgICAgICAnXic6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc194b3IsXHJcbiAgICAgICAgICAgICcmJzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2JhbmQsXHJcbiAgICAgICAgICAgICc9PSc6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19lcSxcclxuICAgICAgICAgICAgJyE9JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2VxLFxyXG4gICAgICAgICAgICAnPT09JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2VxLFxyXG4gICAgICAgICAgICAnIT09JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2VxLFxyXG4gICAgICAgICAgICAnPCc6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19yZWwsXHJcbiAgICAgICAgICAgICc+JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX3JlbCxcclxuICAgICAgICAgICAgJzw9JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX3JlbCxcclxuICAgICAgICAgICAgJz49JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX3JlbCxcclxuICAgICAgICAgICAgJ2luc3RhbmNlb2YnOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfcmVsLFxyXG4gICAgICAgICAgICAnaW4gJzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX3JlbCxcclxuICAgICAgICAgICAgJzw8JzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX3NoaWZ0LFxyXG4gICAgICAgICAgICAnPj4nOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfc2hpZnQsXHJcbiAgICAgICAgICAgICc+Pj4nOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfc2hpZnQsXHJcbiAgICAgICAgICAgICcrJzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX2FkZCxcclxuICAgICAgICAgICAgJy0nOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfYWRkLFxyXG4gICAgICAgICAgICAnKic6IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc19tdWx0aSxcclxuICAgICAgICAgICAgJy8nOiBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNfbXVsdGksXHJcbiAgICAgICAgICAgICclJzogUGFyc2VyLkJpbmFyeVRva2VuVmFsdWVzX211bHRpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGNyZWF0ZUJpbmFyeUV4cHJlc3Npb24oXHJcbiAgICAgICAgICAgIHJhbms6IG51bWJlcixcclxuICAgICAgICAgICAgb3BlcmF0b3I6IHN0cmluZyxcclxuICAgICAgICAgICAgbGVmdDogSUV4cHJlc3Npb24sXHJcbiAgICAgICAgICAgIHJpZ2h0OiBJRXhwcmVzc2lvblxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBsb2MgPSB0aGlzLm9wdGlvbnMubG9jID8gdGhpcy5jcmVhdGVMb2MobGVmdC5sb2Muc3RhcnQsIHJpZ2h0LmxvYy5lbmQpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBpZiAoUGFyc2VyLmlzTG9naWNCaW5hcnlUb2tlblZhbHVlKHJhbmspKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uTG9naWNhbChvcGVyYXRvciwgbGVmdCwgcmlnaHQsIGxvYyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uQmluYXJ5KG9wZXJhdG9yLCBsZWZ0LCByaWdodCwgbG9jKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlQmluYXJ5RXhwcmVzc2lvbigpOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGxldCBsZXhwciA9IHRoaXMucGFyc2VVbmFyeUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgaWYgKCFsZXhwcikgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBsZXQgYmluYXJ5UmFuayA9IFBhcnNlci5CaW5hcnlUb2tlblZhbHVlc1t0b2tlbi52YWx1ZV07XHJcblxyXG4gICAgICAgICAgICBpZiAoYmluYXJ5UmFuayAmJiAodGhpcy5sZXguaXNQdW5jdHVhdGlvbih0b2tlbikgfHwgdGhpcy5sZXguaXNLZXl3b3JkKHRva2VuKSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmV4cHIgPSB0aGlzLnBhcnNlVW5hcnlFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJleHByKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHJzOiBJRXhwcmVzc2lvbltdID0gW2xleHByLCByZXhwcl0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHVuY3M6IHN0cmluZ1tdID0gW3Rva2VuLnZhbHVlXSxcclxuICAgICAgICAgICAgICAgICAgICByYW5rczogbnVtYmVyW10gPSBbYmluYXJ5UmFua107XHJcblxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhdGVzdFJhbmsgPSBQYXJzZXIuQmluYXJ5VG9rZW5WYWx1ZXNbdG9rZW4udmFsdWVdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWxhdGVzdFJhbmsgfHwgKCF0aGlzLmxleC5pc1B1bmN0dWF0aW9uKHRva2VuKSAmJiAhdGhpcy5sZXguaXNLZXl3b3JkKHRva2VuKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXhwciA9IHRoaXMucGFyc2VVbmFyeUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJleHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0UmFuayA9IF8ubGFzdChyYW5rcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGxhc3RSYW5rICYmIGxhc3RSYW5rID49IGxhdGVzdFJhbmspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV4cHIgPSBleHBycy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGV4cHIgPSBleHBycy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmluYXJ5RXhwciA9IHRoaXMuY3JlYXRlQmluYXJ5RXhwcmVzc2lvbihyYW5rcy5wb3AoKSwgcHVuY3MucG9wKCksIGxleHByLCByZXhwcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJzLnB1c2goYmluYXJ5RXhwcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0UmFuayA9IF8ubGFzdChyYW5rcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByYW5rcy5wdXNoKGxhdGVzdFJhbmspO1xyXG4gICAgICAgICAgICAgICAgICAgIHB1bmNzLnB1c2godG9rZW4udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cHJzLnB1c2gocmV4cHIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxleHByID0gZXhwcnMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocHVuY3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV4cHIgPSB0aGlzLmNyZWF0ZUJpbmFyeUV4cHJlc3Npb24ocmFua3MucG9wKCksIHB1bmNzLnBvcCgpLCBleHBycy5wb3AoKSwgbGV4cHIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbGV4cHI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBVbmFyeVRva2VuVmFsdWVzX3VuYXJ5ID0gMTtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBVbmFyeVRva2VuVmFsdWVzX3VwZGF0ZSA9IDI7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIFVuYXJ5VG9rZW5WYWx1ZXMgPSB7XHJcbiAgICAgICAgICAgIFwiLVwiOiBQYXJzZXIuVW5hcnlUb2tlblZhbHVlc191bmFyeSxcclxuICAgICAgICAgICAgXCIrXCI6IFBhcnNlci5VbmFyeVRva2VuVmFsdWVzX3VuYXJ5LFxyXG4gICAgICAgICAgICBcIiFcIjogUGFyc2VyLlVuYXJ5VG9rZW5WYWx1ZXNfdW5hcnksXHJcbiAgICAgICAgICAgIFwiflwiOiBQYXJzZXIuVW5hcnlUb2tlblZhbHVlc191bmFyeSxcclxuICAgICAgICAgICAgXCJ0eXBlb2ZcIjogUGFyc2VyLlVuYXJ5VG9rZW5WYWx1ZXNfdW5hcnksXHJcbiAgICAgICAgICAgIFwidm9pZFwiOiBQYXJzZXIuVW5hcnlUb2tlblZhbHVlc191bmFyeSxcclxuICAgICAgICAgICAgXCJkZWxldGVcIjogUGFyc2VyLlVuYXJ5VG9rZW5WYWx1ZXNfdW5hcnksXHJcbiAgICAgICAgICAgIFwiKytcIjogUGFyc2VyLlVuYXJ5VG9rZW5WYWx1ZXNfdXBkYXRlLFxyXG4gICAgICAgICAgICBcIi0tXCI6IFBhcnNlci5VbmFyeVRva2VuVmFsdWVzX3VwZGF0ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlVW5hcnlFeHByZXNzaW9uKCk6IElFeHByZXNzaW9uIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5sb29rQWhlYWROZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgY29uc3QgdW5hcnlSYW5rID0gUGFyc2VyLlVuYXJ5VG9rZW5WYWx1ZXNbdG9rZW4udmFsdWVdO1xyXG4gICAgICAgICAgICBpZiAodW5hcnlSYW5rICYmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uKHRva2VuKSB8fCB0aGlzLmxleC5pc0tleXdvcmQodG9rZW4pKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXhwciA9IHRoaXMucGFyc2VQb3N0Zml4RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFleHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHVuYXJ5UmFuayA9PT0gUGFyc2VyLlVuYXJ5VG9rZW5WYWx1ZXNfdXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvblVwZGF0ZSh0b2tlbi52YWx1ZSwgZXhwciwgdHJ1ZSwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbih0b2tlbikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25VbmFyeSh0b2tlbi52YWx1ZSwgdHJ1ZSwgZXhwciwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbih0b2tlbikpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVBvc3RmaXhFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VQb3N0Zml4RXhwcmVzc2lvbigpOiBJRXhwcmVzc2lvbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUxlZnRIYW5kU2lkZUV4cHJlc3Npb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmICghZXhwcikgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uKHRva2VuKSAmJiB0b2tlbi5sb2MuZW5kLmxpbmUgPT09IHRoaXMubGV4LmxhdGVzdFRva2VuKCkubG9jLmVuZC5saW5lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4udmFsdWUgPT09IFwiKytcIiB8fCB0b2tlbi52YWx1ZSA9PT0gXCItLVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXgubmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvblVwZGF0ZSh0b2tlbi52YWx1ZSwgZXhwciwgZmFsc2UsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBleHByO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwYXJzZUlkZW50aWZpZXIoKTogSUlkZW50aWZpZXIge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNJZGVudGlmaWVyKHRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlSWRlbnRpZmllcih0b2tlbi52YWx1ZSwgdGhpcy50cmFja1Bvc2l0aW9uVW5hcnkodG9rZW4pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFkZEV4Y2VwdGlvbih0b2tlbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGFyc2VMZWZ0SGFuZFNpZGVFeHByZXNzaW9uKGFsbG93Q2FsbEV4cHJlc3Npb25zOiBib29sZWFuKTogSUV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICBsZXQgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGxldCBwcmltYXJ5RXhwcjtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzS2V5d29yZChpbml0aWFsVG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGluaXRpYWxUb2tlbi52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmdW5jdGlvblwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUZ1bmN0aW9uRXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJuZXdcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUV4cHIgPSB0aGlzLnBhcnNlTmV3RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByaW1hcnlFeHByID0gcHJpbWFyeUV4cHIgfHwgdGhpcy5wYXJzZVByaW1hcnlFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIGlmICghcHJpbWFyeUV4cHIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCBleHByOiBJTm9kZSwgaXNNYXRjaGluZ0V4cmVzc2lvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHdoaWxlIChpc01hdGNoaW5nRXhyZXNzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmxleC5pc1B1bmN0dWF0aW9uKHRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0b2tlbi52YWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiW1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwciA9IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZXhwcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwiXVwiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUV4cHIgPSB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25NZW1iZXIocHJpbWFyeUV4cHIsIGV4cHIsIHRydWUsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4oaW5pdGlhbFRva2VuKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiLlwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IHRoaXMucGFyc2VJZGVudGlmaWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaWRlbnRpZmllcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUV4cHIgPSB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25NZW1iZXIocHJpbWFyeUV4cHIsIGlkZW50aWZpZXIsIGZhbHNlLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIihcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFsbG93Q2FsbEV4cHJlc3Npb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcmdzID0gdGhpcy5wYXJzZUFyZ3VtZW50cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUV4cHIgPSB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25DYWxsKHByaW1hcnlFeHByLCBhcmdzLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc01hdGNoaW5nRXhyZXNzaW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHByaW1hcnlFeHByO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlUHJpbWFyeUV4cHJlc3Npb24oKTogSU5vZGUge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoICh0b2tlbi50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGxleGljYWwuVG9rZW5UeXBlLmtleXdvcmQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLnZhbHVlID09PSBcInRoaXNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvblRoaXModGhpcy50cmFja1Bvc2l0aW9uVW5hcnkodG9rZW4pKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBsZXhpY2FsLlRva2VuVHlwZS5pZGVudGlmaWVyOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUlkZW50aWZpZXIodG9rZW4udmFsdWUsIHRoaXMudHJhY2tQb3NpdGlvblVuYXJ5KHRva2VuKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBsZXhpY2FsLlRva2VuVHlwZS5saXRlcmFsOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUxpdGVyYWwodG9rZW4udmFsdWUsIHRoaXMudHJhY2tQb3NpdGlvblVuYXJ5KHRva2VuKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBsZXhpY2FsLlRva2VuVHlwZS5wdW5jdHVhdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRva2VuLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJbXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUFycmF5TGl0ZXJhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIntcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlT2JqZWN0TGl0ZXJhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIihcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFleHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGV4Lm1hdGNoUHVuY3R1YXRpb24oXCIpXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXhjZXB0aW9uKHRoaXMubGV4Lm5leHRUb2tlbigpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkRXhjZXB0aW9uKHRva2VuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZU5ld0V4cHJlc3Npb24oKTogSUV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICBsZXQgaW5pdGlhbFRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RLZXl3b3JkKFwibmV3XCIpKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FsbEV4cHIgPSB0aGlzLnBhcnNlTGVmdEhhbmRTaWRlRXhwcmVzc2lvbihmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmICghY2FsbEV4cHIpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgYXJncyxcclxuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwiKFwiKSkge1xyXG4gICAgICAgICAgICAgICAgYXJncyA9IHRoaXMucGFyc2VBcmd1bWVudHMoKTtcclxuICAgICAgICAgICAgICAgIGlmICghYXJncykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbk5ldyhjYWxsRXhwciwgYXJncyB8fCBbXSwgdGhpcy50cmFja1Bvc2l0aW9uQnlUb2tlbihpbml0aWFsVG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUFyZ3VtZW50cygpOiBJRXhwcmVzc2lvbltdIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwiKFwiKSkgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBjb25zdCBleHByczogSUV4cHJlc3Npb25bXSA9IFtdO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIilcIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4cHJzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhwciA9IHRoaXMucGFyc2VBc3NpZ25tZW50RXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFleHByKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgZXhwcnMucHVzaChleHByKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCIpXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwiLFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXhjZXB0aW9uKHRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBleHBycztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZUFycmF5TGl0ZXJhbCgpOiBJTm9kZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sZXgubG9va0FoZWFkTmV4dFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIltcIikpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBhcnJheUV4cHJzOiBJTm9kZVtdID0gW107XHJcbiAgICAgICAgICAgIHRoaXMudHJpbUFycmF5Q29tbWFzKGFycmF5RXhwcnMpO1xyXG4gICAgICAgICAgICB3aGlsZSAoIXRoaXMubGV4Lm1hdGNoUHVuY3R1YXRpb24oXCJdXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhc3NpZ25FeHByID0gdGhpcy5wYXJzZUFzc2lnbm1lbnRFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFzc2lnbkV4cHIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBhcnJheUV4cHJzLnB1c2goYXNzaWduRXhwcik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZXgubWF0Y2hQdW5jdHVhdGlvbihcIixcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaW1BcnJheUNvbW1hcyhhcnJheUV4cHJzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlRXhwcmVzc2lvbkFycmF5KGFycmF5RXhwcnMsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4odG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdHJpbUFycmF5Q29tbWFzKGFycmF5RXhwcnM6IElOb2RlW10pIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMubGV4Lm1hdGNoUHVuY3R1YXRpb24oXCIsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJheUV4cHJzLnB1c2gobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZU9iamVjdExpdGVyYWwoKTogSU5vZGUge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCJ7XCIpKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvcGVydGllczogSVByb3BlcnR5W10gPSBbXTtcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwifVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGV4Lm5leHRUb2tlbigpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnBhcnNlUHJvcGVydHlBc3NpZ25tZW50KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXByb3BlcnR5KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKHByb3BlcnR5KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCJ9XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5sZXguaXNQdW5jdHVhdGlvblZhbHVlKHRva2VuLCBcIixcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFeGNlcHRpb24odG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVFeHByZXNzaW9uT2JqZWN0KHByb3BlcnRpZXMsIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4odG9rZW4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwYXJzZVByb3BlcnR5QXNzaWdubWVudCgpOiBJUHJvcGVydHkge1xyXG4gICAgICAgICAgICBsZXQga2luZDogc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgbGV0IGluaXRpYWxUb2tlbiA9IHRoaXMubGV4Lmxvb2tBaGVhZE5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNJZGVudGlmaWVyVmFsdWUoaW5pdGlhbFRva2VuLCBcImdldFwiKSkge1xyXG4gICAgICAgICAgICAgICAga2luZCA9IFwiZ2V0XCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZXguaXNJZGVudGlmaWVyVmFsdWUoaW5pdGlhbFRva2VuLCBcInNldFwiKSkge1xyXG4gICAgICAgICAgICAgICAga2luZCA9IFwic2V0XCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBraW5kID0gXCJpbml0XCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHRoaXMucGFyc2VQcm9wZXJ0eU5hbWUoKTtcclxuICAgICAgICAgICAgaWYgKCFwcm9wZXJ0eU5hbWUpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgdG9rZW4gPSB0aGlzLmxleC5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV4LmlzUHVuY3R1YXRpb25WYWx1ZSh0b2tlbiwgXCI6XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZUFzc2lnbm1lbnRFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWV4cHIpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZUZhY3RvcnkuY3JlYXRlT2JqZWN0UHJvcGVydHkocHJvcGVydHlOYW1lLCBleHByLCBraW5kLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwiKFwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFyZ3M6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxleC5pc0lkZW50aWZpZXIodG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKHRva2VuLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0UHVuY3R1YXRpb24oXCIpXCIpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmxleC5pc1B1bmN0dWF0aW9uVmFsdWUodG9rZW4sIFwiKVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXhjZXB0aW9uKHRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdFB1bmN0dWF0aW9uKFwie1wiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZ1bmN0aW9uQm9keSA9IHRoaXMucGFyc2VGdW5jdGlvbkJvZHkoKTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3RQdW5jdHVhdGlvbihcIn1cIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmdW5jdGlvbkV4cHIgPSB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUV4cHJlc3Npb25GdW5jdGlvbihudWxsLCBhcmdzLCBmdW5jdGlvbkJvZHksIHRoaXMudHJhY2tQb3NpdGlvbkJ5VG9rZW4odG9rZW4pKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZU9iamVjdFByb3BlcnR5KHByb3BlcnR5TmFtZSwgZnVuY3Rpb25FeHByLCBraW5kLCB0aGlzLnRyYWNrUG9zaXRpb25CeVRva2VuKGluaXRpYWxUb2tlbikpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRXhjZXB0aW9uKHRva2VuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlUHJvcGVydHlOYW1lKCk6IElMaXRlcmFsIHwgSUlkZW50aWZpZXIge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMubGV4Lm5leHRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZXguaXNMaXRlcmFsKHRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLnN1YlR5cGUgPT09IGxleGljYWwuTGl0ZXJhbFN1YlR5cGUuc3RyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgdG9rZW4uc3ViVHlwZSA9PT0gbGV4aWNhbC5MaXRlcmFsU3ViVHlwZS5udW1iZXJcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVGYWN0b3J5LmNyZWF0ZUxpdGVyYWwodG9rZW4udmFsdWUsIHRoaXMudHJhY2tQb3NpdGlvblVuYXJ5KHRva2VuKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVJZGVudGlmaWVyKHRva2VuLnZhbHVlLCB0aGlzLnRyYWNrUG9zaXRpb25VbmFyeSh0b2tlbikpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxleC5pc0lkZW50aWZpZXIodG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlRmFjdG9yeS5jcmVhdGVJZGVudGlmaWVyKHRva2VuLnZhbHVlLCB0aGlzLnRyYWNrUG9zaXRpb25VbmFyeSh0b2tlbikpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRXhjZXB0aW9uKHRva2VuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlRnVuY3Rpb25FeHByZXNzaW9uKCk6IElGdW5jdGlvbkV4cHJlc3Npb24ge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub3QgaW1wbGVtZW50ZWQgeWV0XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBhcnNlRnVuY3Rpb25Cb2R5KCk6IElCbG9ja1N0YXRlbWVudCB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vdCBpbXBsZW1lbnRlZCB5ZXRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibW9kdWxlIHRybC5mcm9udGVuZC51dGlsaXRpZXMge1xyXG4gICAgXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gYXNzZXJ0KGNvbmQ6IGFueSwgbXNnPzogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYoIWNvbmQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBc3NlcnRpb24gZmFpbDogJHttc2d9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
