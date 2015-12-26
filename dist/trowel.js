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
        /// <reference path="../utilities/CharPoints.ts" />
        /// <reference path="ILexer.d.ts" />
        /// <reference path="IException.d.ts" />
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
                    var TokenValues = {
                        keyword: 'keyword',
                        identifier: 'identifier',
                        literal: 'literal',
                        punctuation: 'punctuation',
                        comment: 'comment'
                    };
                    var PNC = lexical.TokenDefinitions.PNC_SINGLE;
                    var Lexer = function () {
                        function Lexer(charStream, exceptionHandler) {
                            this.charStream = charStream;
                            this.exceptionHandler = exceptionHandler;
                            this.lineno = 0;
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
                            lookup[PNC.vertical] = Lexer.genPunctuationScanner([[PNC.assign]]);
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
                        Lexer.prototype.getNextToken = function () {
                            var nextState = this.stateInit();
                            while (nextState) {
                                nextState = this[nextState].call(this);
                            }
                            return this.token;
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
                                type = TokenValues.keyword;
                            } else {
                                switch (str) {
                                case 'null':
                                    type = TokenValues.literal;
                                    subType = 'null';
                                    str = null;
                                    break;
                                case 'true':
                                    type = TokenValues.literal;
                                    subType = 'boolean';
                                    str = true;
                                    break;
                                case 'false':
                                    type = TokenValues.literal;
                                    subType = 'boolean';
                                    str = false;
                                    break;
                                default:
                                    type = TokenValues.identifier;
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
                                this.token = this.createToken(TokenValues.literal, charGen.getString(), 'string');
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
                            this.token = this.createTokenFromPos(TokenValues.punctuation);
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
                            this.token = this.createTokenFromPos(TokenValues.comment);
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
                            this.token = this.createTokenFromPos(TokenValues.comment);
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
                            this.token = this.createToken(TokenValues.literal, num, 'number');
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
                                this.token = this.createTokenFromPos(TokenValues.punctuation, this.startPos);
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
                                end: {
                                    line: this.lineno,
                                    column: this.charStream.getCursor() - this.currLineCursor
                                }
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
                var lexical;
                (function (lexical) {
                    var ExceptionHandler = function () {
                        function ExceptionHandler() {
                            this.exceptions = [];
                        }
                        ExceptionHandler.prototype.addException = function (msg, line, col) {
                            var exception = {
                                pos: {
                                    col: col,
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
                    lexical.ExceptionHandler = ExceptionHandler;
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
        /// <reference path="../../tsDefinitions/tsd.d.ts" />
        /// <reference path="lexical/Lexer.ts" />
        /// <reference path="lexical/Exception.ts" />
        /// <reference path="lexical/CharacterStream.ts" />
        var trl;
        (function (trl) {
            var frontend;
            (function (frontend) {
                var api;
                (function (api) {
                    function tokenize(src) {
                        var cs = new frontend.lexical.CharacterStream(src), eh = new frontend.lexical.ExceptionHandler(), lex = new frontend.lexical.Lexer(cs, eh);
                        var tokens = [];
                        while (true) {
                            var token = lex.getNextToken();
                            if (token) {
                                tokens.push(token);
                            } else {
                                break;
                            }
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
    }
    return trl;
}));
//# sourceMappingURL=trowel.js.map
