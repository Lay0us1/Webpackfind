(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-9101bd60"], {
        "0993": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }();
            e.checksum = d;
            var o = n("f2ff"),
                i = f(o),
                a = n("4b94"),
                u = f(a);

            function f(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function c(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }

            function l(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var p = function(t) {
                function e(t, n) {
                    c(this, e), -1 !== t.search(/^[0-9]{11}$/) && (t += d(t));
                    var r = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                    return r.displayValue = n.displayValue, n.fontSize > 10 * n.width ? r.fontSize = 10 * n.width : r.fontSize = n.fontSize, r.guardHeight = n.height + r.fontSize / 2 + n.textMargin, r
                }
                return l(e, t), r(e, [{
                    key: "valid",
                    value: function() {
                        return -1 !== this.data.search(/^[0-9]{12}$/) && this.data[11] == d(this.data)
                    }
                }, {
                    key: "encode",
                    value: function() {
                        return this.options.flat ? this.flatEncoding() : this.guardedEncoding()
                    }
                }, {
                    key: "flatEncoding",
                    value: function() {
                        var t = "";
                        return t += "101", t += (0, i.default)(this.data.substr(0, 6), "LLLLLL"), t += "01010", t += (0, i.default)(this.data.substr(6, 6), "RRRRRR"), t += "101", {
                            data: t,
                            text: this.text
                        }
                    }
                }, {
                    key: "guardedEncoding",
                    value: function() {
                        var t = [];
                        return this.displayValue && t.push({
                            data: "00000000",
                            text: this.text.substr(0, 1),
                            options: {
                                textAlign: "left",
                                fontSize: this.fontSize
                            }
                        }), t.push({
                            data: "101" + (0, i.default)(this.data[0], "L"),
                            options: {
                                height: this.guardHeight
                            }
                        }), t.push({
                            data: (0, i.default)(this.data.substr(1, 5), "LLLLL"),
                            text: this.text.substr(1, 5),
                            options: {
                                fontSize: this.fontSize
                            }
                        }), t.push({
                            data: "01010",
                            options: {
                                height: this.guardHeight
                            }
                        }), t.push({
                            data: (0, i.default)(this.data.substr(6, 5), "RRRRR"),
                            text: this.text.substr(6, 5),
                            options: {
                                fontSize: this.fontSize
                            }
                        }), t.push({
                            data: (0, i.default)(this.data[11], "R") + "101",
                            options: {
                                height: this.guardHeight
                            }
                        }), this.displayValue && t.push({
                            data: "00000000",
                            text: this.text.substr(11, 1),
                            options: {
                                textAlign: "right",
                                fontSize: this.fontSize
                            }
                        }), t
                    }
                }]), e
            }(u.default);

            function d(t) {
                var e, n = 0;
                for (e = 1; e < 11; e += 2) n += parseInt(t[e]);
                for (e = 0; e < 11; e += 2) n += 3 * parseInt(t[e]);
                return (10 - n % 10) % 10
            }
            e.default = p
        },
        "0dec": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                o = n("2689"),
                i = u(o),
                a = n("dab6");

            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function f(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var c = "http://www.w3.org/2000/svg",
                s = function() {
                    function t(e, n, r) {
                        f(this, t), this.svg = e, this.encodings = n, this.options = r, this.document = r.xmlDocument || document
                    }
                    return r(t, [{
                        key: "render",
                        value: function() {
                            var t = this.options.marginLeft;
                            this.prepareSVG();
                            for (var e = 0; e < this.encodings.length; e++) {
                                var n = this.encodings[e],
                                    r = (0, i.default)(this.options, n.options),
                                    o = this.createGroup(t, r.marginTop, this.svg);
                                this.setGroupOptions(o, r), this.drawSvgBarcode(o, r, n), this.drawSVGText(o, r, n), t += n.width
                            }
                        }
                    }, {
                        key: "prepareSVG",
                        value: function() {
                            while (this.svg.firstChild) this.svg.removeChild(this.svg.firstChild);
                            (0, a.calculateEncodingAttributes)(this.encodings, this.options);
                            var t = (0, a.getTotalWidthOfEncodings)(this.encodings),
                                e = (0, a.getMaximumHeightOfEncodings)(this.encodings),
                                n = t + this.options.marginLeft + this.options.marginRight;
                            this.setSvgAttributes(n, e), this.options.background && this.drawRect(0, 0, n, e, this.svg).setAttribute("style", "fill:" + this.options.background + ";")
                        }
                    }, {
                        key: "drawSvgBarcode",
                        value: function(t, e, n) {
                            var r, o = n.data;
                            r = "top" == e.textPosition ? e.fontSize + e.textMargin : 0;
                            for (var i = 0, a = 0, u = 0; u < o.length; u++) a = u * e.width + n.barcodePadding, "1" === o[u] ? i++ : i > 0 && (this.drawRect(a - e.width * i, r, e.width * i, e.height, t), i = 0);
                            i > 0 && this.drawRect(a - e.width * (i - 1), r, e.width * i, e.height, t)
                        }
                    }, {
                        key: "drawSVGText",
                        value: function(t, e, n) {
                            var r, o, i = this.document.createElementNS(c, "text");
                            e.displayValue && (i.setAttribute("style", "font:" + e.fontOptions + " " + e.fontSize + "px " + e.font), o = "top" == e.textPosition ? e.fontSize - e.textMargin : e.height + e.textMargin + e.fontSize, "left" == e.textAlign || n.barcodePadding > 0 ? (r = 0, i.setAttribute("text-anchor", "start")) : "right" == e.textAlign ? (r = n.width - 1, i.setAttribute("text-anchor", "end")) : (r = n.width / 2, i.setAttribute("text-anchor", "middle")), i.setAttribute("x", r), i.setAttribute("y", o), i.appendChild(this.document.createTextNode(n.text)), t.appendChild(i))
                        }
                    }, {
                        key: "setSvgAttributes",
                        value: function(t, e) {
                            var n = this.svg;
                            n.setAttribute("width", t + "px"), n.setAttribute("height", e + "px"), n.setAttribute("x", "0px"), n.setAttribute("y", "0px"), n.setAttribute("viewBox", "0 0 " + t + " " + e), n.setAttribute("xmlns", c), n.setAttribute("version", "1.1"), n.setAttribute("style", "transform: translate(0,0)")
                        }
                    }, {
                        key: "createGroup",
                        value: function(t, e, n) {
                            var r = this.document.createElementNS(c, "g");
                            return r.setAttribute("transform", "translate(" + t + ", " + e + ")"), n.appendChild(r), r
                        }
                    }, {
                        key: "setGroupOptions",
                        value: function(t, e) {
                            t.setAttribute("style", "fill:" + e.lineColor + ";")
                        }
                    }, {
                        key: "drawRect",
                        value: function(t, e, n, r, o) {
                            var i = this.document.createElementNS(c, "rect");
                            return i.setAttribute("x", t), i.setAttribute("y", e), i.setAttribute("width", n), i.setAttribute("height", r), o.appendChild(i), i
                        }
                    }]), t
                }();
            e.default = s
        },
        "108e": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }();

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var i = function() {
                function t(e) {
                    o(this, t), this.api = e
                }
                return r(t, [{
                    key: "handleCatch",
                    value: function(t) {
                        if ("InvalidInputException" !== t.name) throw t;
                        if (this.api._options.valid === this.api._defaults.valid) throw t.message;
                        this.api._options.valid(!1), this.api.render = function() {}
                    }
                }, {
                    key: "wrapBarcodeCall",
                    value: function(t) {
                        try {
                            var e = t.apply(void 0, arguments);
                            return this.api._options.valid(!0), e
                        } catch (n) {
                            return this.handleCatch(n), this.api
                        }
                    }
                }]), t
            }();
            e.default = i
        },
        "10ee": function(t, e, n) {
            "use strict";
            var r;

            function o(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = e.SET_A = 0,
                a = e.SET_B = 1,
                u = e.SET_C = 2,
                f = (e.SHIFT = 98, e.START_A = 103),
                c = e.START_B = 104,
                s = e.START_C = 105;
            e.MODULO = 103, e.STOP = 106, e.FNC1 = 207, e.SET_BY_CODE = (r = {}, o(r, f, i), o(r, c, a), o(r, s, u), r), e.SWAP = {
                101: i,
                100: a,
                99: u
            }, e.A_START_CHAR = String.fromCharCode(208), e.B_START_CHAR = String.fromCharCode(209), e.C_START_CHAR = String.fromCharCode(210), e.A_CHARS = "[\0-_È-Ï]", e.B_CHARS = "[ -È-Ï]", e.C_CHARS = "(Ï*[0-9]{2}Ï*)", e.BARS = [11011001100, 11001101100, 11001100110, 10010011e3, 10010001100, 10001001100, 10011001e3, 10011000100, 10001100100, 11001001e3, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011e3, 11011000110, 11000110110, 10100011e3, 10001011e3, 10001000110, 10110001e3, 10001101e3, 10001100010, 11010001e3, 11000101e3, 11000100010, 10110111e3, 10110001110, 10001101110, 10111011e3, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101e3, 11011100010, 11011101110, 11101011e3, 11101000110, 11100010110, 11101101e3, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 1010011e4, 10100001100, 1001011e4, 10010000110, 10000101100, 10000100110, 1011001e4, 10110000100, 1001101e4, 10011000010, 10000110100, 10000110010, 11000010010, 1100101e4, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111e3, 10100011110, 10001011110, 10111101e3, 10111100010, 11110101e3, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 1101001e4, 11010011100, 1100011101011]
        },
        "1ab2": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = {
                width: 2,
                height: 100,
                format: "auto",
                displayValue: !0,
                fontOptions: "",
                font: "monospace",
                text: void 0,
                textAlign: "center",
                textPosition: "bottom",
                textMargin: 2,
                fontSize: 20,
                background: "#ffffff",
                lineColor: "#000000",
                margin: 10,
                marginTop: void 0,
                marginBottom: void 0,
                marginLeft: void 0,
                marginRight: void 0,
                valid: function() {}
            };
            e.default = r
        },
        2004: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.pharmacode = void 0;
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                o = n("4b94"),
                i = a(o);

            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function f(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }

            function c(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var s = function(t) {
                function e(t, n) {
                    u(this, e);
                    var r = f(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                    return r.number = parseInt(t, 10), r
                }
                return c(e, t), r(e, [{
                    key: "encode",
                    value: function() {
                        var t = this.number,
                            e = "";
                        while (!isNaN(t) && 0 != t) t % 2 === 0 ? (e = "11100" + e, t = (t - 2) / 2) : (e = "100" + e, t = (t - 1) / 2);
                        return e = e.slice(0, -2), {
                            data: e,
                            text: this.text
                        }
                    }
                }, {
                    key: "valid",
                    value: function() {
                        return this.number >= 3 && this.number <= 131070
                    }
                }]), e
            }(i.default);
            e.pharmacode = s
        },
        "20de": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n("10ee"),
                o = function(t) {
                    return t.match(new RegExp("^" + r.A_CHARS + "*"))[0].length
                },
                i = function(t) {
                    return t.match(new RegExp("^" + r.B_CHARS + "*"))[0].length
                },
                a = function(t) {
                    return t.match(new RegExp("^" + r.C_CHARS + "*"))[0]
                };

            function u(t, e) {
                var n = e ? r.A_CHARS : r.B_CHARS,
                    o = t.match(new RegExp("^(" + n + "+?)(([0-9]{2}){2,})([^0-9]|$)"));
                if (o) return o[1] + String.fromCharCode(204) + f(t.substring(o[1].length));
                var i = t.match(new RegExp("^" + n + "+"))[0];
                return i.length === t.length ? t : i + String.fromCharCode(e ? 205 : 206) + u(t.substring(i.length), !e)
            }

            function f(t) {
                var e = a(t),
                    n = e.length;
                if (n === t.length) return t;
                t = t.substring(n);
                var r = o(t) >= i(t);
                return e + String.fromCharCode(r ? 206 : 205) + u(t, r)
            }
            e.default = function(t) {
                var e = void 0,
                    n = a(t).length;
                if (n >= 2) e = r.C_START_CHAR + f(t);
                else {
                    var c = o(t) > i(t);
                    e = (c ? r.A_START_CHAR : r.B_START_CHAR) + u(t, c)
                }
                return e.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, (function(t, e) {
                    return String.fromCharCode(203) + e
                }))
            }
        },
        2689: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            };
            e.default = function(t, e) {
                return r({}, t, e)
            }
        },
        "2aee": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                o = n("a2ad"),
                i = u(o),
                a = n("10ee");

            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function f(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }

            function s(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var l = function(t) {
                function e(t, n) {
                    return f(this, e), c(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, a.A_START_CHAR + t, n))
                }
                return s(e, t), r(e, [{
                    key: "valid",
                    value: function() {
                        return new RegExp("^" + a.A_CHARS + "+$").test(this.data)
                    }
                }]), e
            }(i.default);
            e.default = l
        },
        "2bf3": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n("dff7"),
                o = n("b82f"),
                i = n("8532"),
                a = n("7360"),
                u = n("d988"),
                f = n("2004"),
                c = n("4c22"),
                s = n("6327");
            e.default = {
                CODE39: r.CODE39,
                CODE128: o.CODE128,
                CODE128A: o.CODE128A,
                CODE128B: o.CODE128B,
                CODE128C: o.CODE128C,
                EAN13: i.EAN13,
                EAN8: i.EAN8,
                EAN5: i.EAN5,
                EAN2: i.EAN2,
                UPC: i.UPC,
                UPCE: i.UPCE,
                ITF14: a.ITF14,
                ITF: a.ITF,
                MSI: u.MSI,
                MSI10: u.MSI10,
                MSI11: u.MSI11,
                MSI1010: u.MSI1010,
                MSI1110: u.MSI1110,
                pharmacode: f.pharmacode,
                codabar: c.codabar,
                GenericBarcode: s.GenericBarcode
            }
        },
        4826: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                o = n("7bc3"),
                i = n("f2ff"),
                a = c(i),
                u = n("4b94"),
                f = c(u);

            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function l(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }

            function p(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var d = function(t) {
                    var e = t.split("").map((function(t) {
                        return +t
                    })).reduce((function(t, e, n) {
                        return n % 2 ? t + 9 * e : t + 3 * e
                    }), 0);
                    return e % 10
                },
                h = function(t) {
                    function e(t, n) {
                        return s(this, e), l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
                    }
                    return p(e, t), r(e, [{
                        key: "valid",
                        value: function() {
                            return -1 !== this.data.search(/^[0-9]{5}$/)
                        }
                    }, {
                        key: "encode",
                        value: function() {
                            var t = o.EAN5_STRUCTURE[d(this.data)];
                            return {
                                data: "1011" + (0, a.default)(this.data, t, "01"),
                                text: this.text
                            }
                        }
                    }]), e
                }(f.default);
            e.default = h
        },
        "4b94": function(t, e, n) {
            "use strict";

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function t(e, n) {
                r(this, t), this.data = e, this.text = n.text || e, this.options = n
            };
            e.default = o
        },
        "4c22": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.codabar = void 0;
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                o = n("4b94"),
                i = a(o);

            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function f(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }

            function c(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var s = function(t) {
                function e(t, n) {
                    u(this, e), 0 === t.search(/^[0-9\-\$\:\.\+\/]+$/) && (t = "A" + t + "A");
                    var r = f(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t.toUpperCase(), n));
                    return r.text = r.options.text || r.text.replace(/[A-D]/g, ""), r
                }
                return c(e, t), r(e, [{
                    key: "valid",
                    value: function() {
                        return -1 !== this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/)
                    }
                }, {
                    key: "encode",
                    value: function() {
                        for (var t = [], e = this.getEncodings(), n = 0; n < this.data.length; n++) t.push(e[this.data.charAt(n)]), n !== this.data.length - 1 && t.push("0");
                        return {
                            text: this.text,
                            data: t.join("")
                        }
                    }
                }, {
                    key: "getEncodings",
                    value: function() {
                        return {
                            0: "101010011",
                            1: "101011001",
                            2: "101001011",
                            3: "110010101",
                            4: "101101001",
                            5: "110101001",
                            6: "100101011",
                            7: "100101101",
                            8: "100110101",
                            9: "110100101",
                            "-": "101001101",
                            $: "101100101",
                            ":": "1101011011",
                            "/": "1101101011",
                            ".": "1101101101",
                            "+": "101100110011",
                            A: "1011001001",
                            B: "1001001011",
                            C: "1010010011",
                            D: "1010011001"
                        }
                    }
                }]), e
            }(i.default);
            e.codabar = s
        },
        5010: function(t, e, n) {
            "use strict";

            function r(t) {
                for (var e = 0, n = 0; n < t.length; n++) {
                    var r = parseInt(t[n]);
                    (n + t.length) % 2 === 0 ? e += r : e += 2 * r % 10 + Math.floor(2 * r / 10)
                }
                return (10 - e % 10) % 10
            }

            function o(t) {
                for (var e = 0, n = [2, 3, 4, 5, 6, 7], r = 0; r < t.length; r++) {
                    var o = parseInt(t[t.length - 1 - r]);
                    e += n[r % n.length] * o
                }
                return (11 - e % 11) % 11
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.mod10 = r, e.mod11 = o
        },
        "5d79": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.START_BIN = "1010", e.END_BIN = "11101", e.BINARIES = ["00110", "10001", "01001", "11000", "00101", "10100", "01100", "00011", "10010", "01010"]
        },
        6327: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.GenericBarcode = void 0;
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                o = n("4b94"),
                i = a(o);

            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function f(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }

            function c(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var s = function(t) {
                function e(t, n) {
                    return u(this, e), f(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
                }
                return c(e, t), r(e, [{
                    key: "encode",
                    value: function() {
                        return {
                            data: "10101010101010101010101010101010101010101",
                            text: this.text
                        }
                    }
                }, {
                    key: "valid",
                    value: function() {
                        return !0
                    }
                }]), e
            }(i.default);
            e.GenericBarcode = s
        },
        "6c62": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                o = n("4b94"),
                i = a(o);

            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function f(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }

            function c(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var s = function(t) {
                function e(t, n) {
                    return u(this, e), f(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
                }
                return c(e, t), r(e, [{
                    key: "encode",
                    value: function() {
                        for (var t = "110", e = 0; e < this.data.length; e++) {
                            var n = parseInt(this.data[e]),
                                r = n.toString(2);
                            r = l(r, 4 - r.length);
                            for (var o = 0; o < r.length; o++) t += "0" == r[o] ? "100" : "110"
                        }
                        return t += "1001", {
                            data: t,
                            text: this.text
                        }
                    }
                }, {
                    key: "valid",
                    value: function() {
                        return -1 !== this.data.search(/^[0-9]+$/)
                    }
                }]), e
            }(i.default);

            function l(t, e) {
                for (var n = 0; n < e; n++) t = "0" + t;
                return t
            }
            e.default = s
        },
        "6caa": function(t, e, n) {
            "use strict";

            function r(t) {
                var e = [];

                function n(t) {
                    if (Array.isArray(t))
                        for (var r = 0; r < t.length; r++) n(t[r]);
                    else t.text = t.text || "", t.data = t.data || "", e.push(t)
                }
                return n(t), e
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = r
        },
        "6d14": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n("c060"),
                o = u(r),
                i = n("1ab2"),
                a = u(i);

            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function f(t) {
                var e = {};
                for (var n in a.default) a.default.hasOwnProperty(n) && (t.hasAttribute("jsbarcode-" + n.toLowerCase()) && (e[n] = t.getAttribute("jsbarcode-" + n.toLowerCase())), t.hasAttribute("data-" + n.toLowerCase()) && (e[n] = t.getAttribute("data-" + n.toLowerCase())));
                return e["value"] = t.getAttribute("jsbarcode-value") || t.getAttribute("data-value"), e = (0, o.default)(e), e
            }
            e.default = f
        },
        7193: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                o = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                        var i = Object.getPrototypeOf(e);
                        return null === i ? void 0 : t(i, n, r)
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0
                },
                i = n("c839"),
                a = u(i);

            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function f(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }

            function s(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var l = function(t) {
                    var e = t.substr(0, 7).split("").map((function(t) {
                        return +t
                    })).reduce((function(t, e, n) {
                        return n % 2 ? t + e : t + 3 * e
                    }), 0);
                    return (10 - e % 10) % 10
                },
                p = function(t) {
                    function e(t, n) {
                        return f(this, e), -1 !== t.search(/^[0-9]{7}$/) && (t += l(t)), c(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
                    }
                    return s(e, t), r(e, [{
                        key: "valid",
                        value: function() {
                            return -1 !== this.data.search(/^[0-9]{8}$/) && +this.data[7] === l(this.data)
                        }
                    }, {
                        key: "leftText",
                        value: function() {
                            return o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "leftText", this).call(this, 0, 4)
                        }
                    }, {
                        key: "leftEncode",
                        value: function() {
                            var t = this.data.substr(0, 4);
                            return o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "leftEncode", this).call(this, t, "LLLL")
                        }
                    }, {
                        key: "rightText",
                        value: function() {
                            return o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "rightText", this).call(this, 4, 4)
                        }
                    }, {
                        key: "rightEncode",
                        value: function() {
                            var t = this.data.substr(4, 4);
                            return o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "rightEncode", this).call(this, t, "RRRR")
                        }
                    }]), e
                }(a.default);
            e.default = p
        },
        7360: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ITF14 = e.ITF = void 0;
            var r = n("8246"),
                o = u(r),
                i = n("ebdc"),
                a = u(i);

            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.ITF = o.default, e.ITF14 = a.default
        },
        "7bc3": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.SIDE_BIN = "101", e.MIDDLE_BIN = "01010", e.BINARIES = {
                L: ["0001101", "0011001", "0010011", "0111101", "0100011", "0110001", "0101111", "0111011", "0110111", "0001011"],
                G: ["0100111", "0110011", "0011011", "0100001", "0011101", "0111001", "0000101", "0010001", "0001001", "0010111"],
                R: ["1110010", "1100110", "1101100", "1000010", "1011100", "1001110", "1010000", "1000100", "1001000", "1110100"],
                O: ["0001101", "0011001", "0010011", "0111101", "0100011", "0110001", "0101111", "0111011", "0110111", "0001011"],
                E: ["0100111", "0110011", "0011011", "0100001", "0011101", "0111001", "0000101", "0010001", "0001001", "0010111"]
            }, e.EAN2_STRUCTURE = ["LL", "LG", "GL", "GG"], e.EAN5_STRUCTURE = ["GGLLL", "GLGLL", "GLLGL", "GLLLG", "LGGLL", "LLGGL", "LLLGG", "LGLGL", "LGLLG", "LLGLG"], e.EAN13_STRUCTURE = ["LLLLLL", "LLGLGG", "LLGGLG", "LLGGGL", "LGLLGG", "LGGLLG", "LGGGLL", "LGLGLG", "LGLGGL", "LGGLGL"]
        },
        8246: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                o = n("5d79"),
                i = n("4b94"),
                a = u(i);

            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function f(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }

            function s(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var l = function(t) {
                function e() {
                    return f(this, e), c(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return s(e, t), r(e, [{
                    key: "valid",
                    value: function() {
                        return -1 !== this.data.search(/^([0-9]{2})+$/)
                    }
                }, {
                    key: "encode",
                    value: function() {
                        var t = this,
                            e = this.data.match(/.{2}/g).map((function(e) {
                                return t.encodePair(e)
                            })).join("");
                        return {
                            data: o.START_BIN + e + o.END_BIN,
                            text: this.text
                        }
                    }
                }, {
                    key: "encodePair",
                    value: function(t) {
                        var e = o.BINARIES[t[1]];
                        return o.BINARIES[t[0]].split("").map((function(t, n) {
                            return ("1" === t ? "111" : "1") + ("1" === e[n] ? "000" : "0")
                        })).join("")
                    }
                }]), e
            }(a.default);
            e.default = l
        },
        8532: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.UPCE = e.UPC = e.EAN2 = e.EAN5 = e.EAN8 = e.EAN13 = void 0;
            var r = n("da5c"),
                o = b(r),
                i = n("7193"),
                a = b(i),
                u = n("4826"),
                f = b(u),
                c = n("d45a"),
                s = b(c),
                l = n("0993"),
                p = b(l),
                d = n("a884"),
                h = b(d);

            function b(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.EAN13 = o.default, e.EAN8 = a.default, e.EAN5 = f.default, e.EAN2 = s.default, e.UPC = p.default, e.UPCE = h.default
        },
        "88d6": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n("6c62"),
                o = a(r),
                i = n("5010");

            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function f(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }

            function c(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var s = function(t) {
                function e(t, n) {
                    return u(this, e), f(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t + (0, i.mod10)(t), n))
                }
                return c(e, t), e
            }(o.default);
            e.default = s
        },
        "8fcf": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                o = n("a2ad"),
                i = u(o),
                a = n("10ee");

            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function f(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }

            function s(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var l = function(t) {
                function e(t, n) {
                    return f(this, e), c(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, a.B_START_CHAR + t, n))
                }
                return s(e, t), r(e, [{
                    key: "valid",
                    value: function() {
                        return new RegExp("^" + a.B_CHARS + "+$").test(this.data)
                    }
                }]), e
            }(i.default);
            e.default = l
        },
        9296: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                o = n("6d14"),
                i = c(o),
                a = n("abad"),
                u = c(a),
                f = n("9f0c");

            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function s(t) {
                if ("string" === typeof t) return l(t);
                if (Array.isArray(t)) {
                    for (var e = [], n = 0; n < t.length; n++) e.push(s(t[n]));
                    return e
                }
                if ("undefined" !== typeof HTMLCanvasElement && t instanceof HTMLImageElement) return p(t);
                if (t && t.nodeName && "svg" === t.nodeName.toLowerCase() || "undefined" !== typeof SVGElement && t instanceof SVGElement) return {
                    element: t,
                    options: (0, i.default)(t),
                    renderer: u.default.SVGRenderer
                };
                if ("undefined" !== typeof HTMLCanvasElement && t instanceof HTMLCanvasElement) return {
                    element: t,
                    options: (0, i.default)(t),
                    renderer: u.default.CanvasRenderer
                };
                if (t && t.getContext) return {
                    element: t,
                    renderer: u.default.CanvasRenderer
                };
                if (t && "object" === ("undefined" === typeof t ? "undefined" : r(t)) && !t.nodeName) return {
                    element: t,
                    renderer: u.default.ObjectRenderer
                };
                throw new f.InvalidElementException
            }

            function l(t) {
                var e = document.querySelectorAll(t);
                if (0 !== e.length) {
                    for (var n = [], r = 0; r < e.length; r++) n.push(s(e[r]));
                    return n
                }
            }

            function p(t) {
                var e = document.createElement("canvas");
                return {
                    element: e,
                    options: (0, i.default)(t),
                    renderer: u.default.CanvasRenderer,
                    afterRender: function() {
                        t.setAttribute("src", e.toDataURL())
                    }
                }
            }
            e.default = s
        },
        "9f0c": function(t, e, n) {
            "use strict";

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function o(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }

            function i(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var a = function(t) {
                    function e(t, n) {
                        r(this, e);
                        var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                        return i.name = "InvalidInputException", i.symbology = t, i.input = n, i.message = '"' + i.input + '" is not a valid input for ' + i.symbology, i
                    }
                    return i(e, t), e
                }(Error),
                u = function(t) {
                    function e() {
                        r(this, e);
                        var t = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                        return t.name = "InvalidElementException", t.message = "Not supported type to render on", t
                    }
                    return i(e, t), e
                }(Error),
                f = function(t) {
                    function e() {
                        r(this, e);
                        var t = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                        return t.name = "NoElementException", t.message = "No element to render on.", t
                    }
                    return i(e, t), e
                }(Error);
            e.InvalidInputException = a, e.InvalidElementException = u, e.NoElementException = f
        },
        a2ad: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                o = n("4b94"),
                i = u(o),
                a = n("10ee");

            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function f(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }

            function s(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var l = function(t) {
                function e(t, n) {
                    f(this, e);
                    var r = c(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t.substring(1), n));
                    return r.bytes = t.split("").map((function(t) {
                        return t.charCodeAt(0)
                    })), r
                }
                return s(e, t), r(e, [{
                    key: "valid",
                    value: function() {
                        return /^[\x00-\x7F\xC8-\xD3]+$/.test(this.data)
                    }
                }, {
                    key: "encode",
                    value: function() {
                        var t = this.bytes,
                            n = t.shift() - 105,
                            r = a.SET_BY_CODE[n];
                        if (void 0 === r) throw new RangeError("The encoding does not start with a start character.");
                        !0 === this.shouldEncodeAsEan128() && t.unshift(a.FNC1);
                        var o = e.next(t, 1, r);
                        return {
                            text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, "") : this.text,
                            data: e.getBar(n) + o.result + e.getBar((o.checksum + n) % a.MODULO) + e.getBar(a.STOP)
                        }
                    }
                }, {
                    key: "shouldEncodeAsEan128",
                    value: function() {
                        var t = this.options.ean128 || !1;
                        return "string" === typeof t && (t = "true" === t.toLowerCase()), t
                    }
                }], [{
                    key: "getBar",
                    value: function(t) {
                        return a.BARS[t] ? a.BARS[t].toString() : ""
                    }
                }, {
                    key: "correctIndex",
                    value: function(t, e) {
                        if (e === a.SET_A) {
                            var n = t.shift();
                            return n < 32 ? n + 64 : n - 32
                        }
                        return e === a.SET_B ? t.shift() - 32 : 10 * (t.shift() - 48) + t.shift() - 48
                    }
                }, {
                    key: "next",
                    value: function(t, n, r) {
                        if (!t.length) return {
                            result: "",
                            checksum: 0
                        };
                        var o = void 0,
                            i = void 0;
                        if (t[0] >= 200) {
                            i = t.shift() - 105;
                            var u = a.SWAP[i];
                            void 0 !== u ? o = e.next(t, n + 1, u) : (r !== a.SET_A && r !== a.SET_B || i !== a.SHIFT || (t[0] = r === a.SET_A ? t[0] > 95 ? t[0] - 96 : t[0] : t[0] < 32 ? t[0] + 96 : t[0]), o = e.next(t, n + 1, r))
                        } else i = e.correctIndex(t, r), o = e.next(t, n + 1, r);
                        var f = e.getBar(i),
                            c = i * n;
                        return {
                            result: f + o.result,
                            checksum: c + o.checksum
                        }
                    }
                }]), e
            }(i.default);
            e.default = l
        },
        a884: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                o = n("f2ff"),
                i = c(o),
                a = n("4b94"),
                u = c(a),
                f = n("0993");

            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function l(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }

            function p(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var d = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"],
                h = [
                    ["EEEOOO", "OOOEEE"],
                    ["EEOEOO", "OOEOEE"],
                    ["EEOOEO", "OOEEOE"],
                    ["EEOOOE", "OOEEEO"],
                    ["EOEEOO", "OEOOEE"],
                    ["EOOEEO", "OEEOOE"],
                    ["EOOOEE", "OEEEOO"],
                    ["EOEOEO", "OEOEOE"],
                    ["EOEOOE", "OEOEEO"],
                    ["EOOEOE", "OEEOEO"]
                ],
                b = function(t) {
                    function e(t, n) {
                        s(this, e);
                        var r = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                        if (r.isValid = !1, -1 !== t.search(/^[0-9]{6}$/)) r.middleDigits = t, r.upcA = y(t, "0"), r.text = n.text || "" + r.upcA[0] + t + r.upcA[r.upcA.length - 1], r.isValid = !0;
                        else {
                            if (-1 === t.search(/^[01][0-9]{7}$/)) return l(r);
                            if (r.middleDigits = t.substring(1, t.length - 1), r.upcA = y(r.middleDigits, t[0]), r.upcA[r.upcA.length - 1] !== t[t.length - 1]) return l(r);
                            r.isValid = !0
                        }
                        return r.displayValue = n.displayValue, n.fontSize > 10 * n.width ? r.fontSize = 10 * n.width : r.fontSize = n.fontSize, r.guardHeight = n.height + r.fontSize / 2 + n.textMargin, r
                    }
                    return p(e, t), r(e, [{
                        key: "valid",
                        value: function() {
                            return this.isValid
                        }
                    }, {
                        key: "encode",
                        value: function() {
                            return this.options.flat ? this.flatEncoding() : this.guardedEncoding()
                        }
                    }, {
                        key: "flatEncoding",
                        value: function() {
                            var t = "";
                            return t += "101", t += this.encodeMiddleDigits(), t += "010101", {
                                data: t,
                                text: this.text
                            }
                        }
                    }, {
                        key: "guardedEncoding",
                        value: function() {
                            var t = [];
                            return this.displayValue && t.push({
                                data: "00000000",
                                text: this.text[0],
                                options: {
                                    textAlign: "left",
                                    fontSize: this.fontSize
                                }
                            }), t.push({
                                data: "101",
                                options: {
                                    height: this.guardHeight
                                }
                            }), t.push({
                                data: this.encodeMiddleDigits(),
                                text: this.text.substring(1, 7),
                                options: {
                                    fontSize: this.fontSize
                                }
                            }), t.push({
                                data: "010101",
                                options: {
                                    height: this.guardHeight
                                }
                            }), this.displayValue && t.push({
                                data: "00000000",
                                text: this.text[7],
                                options: {
                                    textAlign: "right",
                                    fontSize: this.fontSize
                                }
                            }), t
                        }
                    }, {
                        key: "encodeMiddleDigits",
                        value: function() {
                            var t = this.upcA[0],
                                e = this.upcA[this.upcA.length - 1],
                                n = h[parseInt(e)][parseInt(t)];
                            return (0, i.default)(this.middleDigits, n)
                        }
                    }]), e
                }(u.default);

            function y(t, e) {
                for (var n = parseInt(t[t.length - 1]), r = d[n], o = "", i = 0, a = 0; a < r.length; a++) {
                    var u = r[a];
                    o += "X" === u ? t[i++] : u
                }
                return o = "" + e + o, "" + o + (0, f.checksum)(o)
            }
            e.default = b
        },
        abad: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n("fc0c"),
                o = c(r),
                i = n("0dec"),
                a = c(i),
                u = n("eb1c"),
                f = c(u);

            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.default = {
                CanvasRenderer: o.default,
                SVGRenderer: a.default,
                ObjectRenderer: f.default
            }
        },
        b82f: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.CODE128C = e.CODE128B = e.CODE128A = e.CODE128 = void 0;
            var r = n("fb58"),
                o = l(r),
                i = n("2aee"),
                a = l(i),
                u = n("8fcf"),
                f = l(u),
                c = n("ee89"),
                s = l(c);

            function l(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.CODE128 = o.default, e.CODE128A = a.default, e.CODE128B = f.default, e.CODE128C = s.default
        },
        c030: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n("6c62"),
                o = a(r),
                i = n("5010");

            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function f(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }

            function c(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var s = function(t) {
                function e(t, n) {
                    return u(this, e), f(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t + (0, i.mod11)(t), n))
                }
                return c(e, t), e
            }(o.default);
            e.default = s
        },
        c060: function(t, e, n) {
            "use strict";

            function r(t) {
                var e = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];
                for (var n in e) e.hasOwnProperty(n) && (n = e[n], "string" === typeof t[n] && (t[n] = parseInt(t[n], 10)));
                return "string" === typeof t["displayValue"] && (t["displayValue"] = "false" != t["displayValue"]), t
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = r
        },
        c839: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                o = n("7bc3"),
                i = n("f2ff"),
                a = c(i),
                u = n("4b94"),
                f = c(u);

            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function l(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }

            function p(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var d = function(t) {
                function e(t, n) {
                    s(this, e);
                    var r = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                    return r.fontSize = !n.flat && n.fontSize > 10 * n.width ? 10 * n.width : n.fontSize, r.guardHeight = n.height + r.fontSize / 2 + n.textMargin, r
                }
                return p(e, t), r(e, [{
                    key: "encode",
                    value: function() {
                        return this.options.flat ? this.encodeFlat() : this.encodeGuarded()
                    }
                }, {
                    key: "leftText",
                    value: function(t, e) {
                        return this.text.substr(t, e)
                    }
                }, {
                    key: "leftEncode",
                    value: function(t, e) {
                        return (0, a.default)(t, e)
                    }
                }, {
                    key: "rightText",
                    value: function(t, e) {
                        return this.text.substr(t, e)
                    }
                }, {
                    key: "rightEncode",
                    value: function(t, e) {
                        return (0, a.default)(t, e)
                    }
                }, {
                    key: "encodeGuarded",
                    value: function() {
                        var t = {
                                fontSize: this.fontSize
                            },
                            e = {
                                height: this.guardHeight
                            };
                        return [{
                            data: o.SIDE_BIN,
                            options: e
                        }, {
                            data: this.leftEncode(),
                            text: this.leftText(),
                            options: t
                        }, {
                            data: o.MIDDLE_BIN,
                            options: e
                        }, {
                            data: this.rightEncode(),
                            text: this.rightText(),
                            options: t
                        }, {
                            data: o.SIDE_BIN,
                            options: e
                        }]
                    }
                }, {
                    key: "encodeFlat",
                    value: function() {
                        var t = [o.SIDE_BIN, this.leftEncode(), o.MIDDLE_BIN, this.rightEncode(), o.SIDE_BIN];
                        return {
                            data: t.join(""),
                            text: this.text
                        }
                    }
                }]), e
            }(f.default);
            e.default = d
        },
        d45a: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                o = n("7bc3"),
                i = n("f2ff"),
                a = c(i),
                u = n("4b94"),
                f = c(u);

            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function l(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }

            function p(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var d = function(t) {
                function e(t, n) {
                    return s(this, e), l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
                }
                return p(e, t), r(e, [{
                    key: "valid",
                    value: function() {
                        return -1 !== this.data.search(/^[0-9]{2}$/)
                    }
                }, {
                    key: "encode",
                    value: function() {
                        var t = o.EAN2_STRUCTURE[parseInt(this.data) % 4];
                        return {
                            data: "1011" + (0, a.default)(this.data, t, "01"),
                            text: this.text
                        }
                    }
                }]), e
            }(f.default);
            e.default = d
        },
        d988: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.MSI1110 = e.MSI1010 = e.MSI11 = e.MSI10 = e.MSI = void 0;
            var r = n("6c62"),
                o = d(r),
                i = n("88d6"),
                a = d(i),
                u = n("c030"),
                f = d(u),
                c = n("f887"),
                s = d(c),
                l = n("db74"),
                p = d(l);

            function d(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.MSI = o.default, e.MSI10 = a.default, e.MSI11 = f.default, e.MSI1010 = s.default, e.MSI1110 = p.default
        },
        da5c: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                o = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                        var i = Object.getPrototypeOf(e);
                        return null === i ? void 0 : t(i, n, r)
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0
                },
                i = n("7bc3"),
                a = n("c839"),
                u = f(a);

            function f(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function c(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }

            function l(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var p = function(t) {
                    var e = t.substr(0, 12).split("").map((function(t) {
                        return +t
                    })).reduce((function(t, e, n) {
                        return n % 2 ? t + 3 * e : t + e
                    }), 0);
                    return (10 - e % 10) % 10
                },
                d = function(t) {
                    function e(t, n) {
                        c(this, e), -1 !== t.search(/^[0-9]{12}$/) && (t += p(t));
                        var r = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                        return r.lastChar = n.lastChar, r
                    }
                    return l(e, t), r(e, [{
                        key: "valid",
                        value: function() {
                            return -1 !== this.data.search(/^[0-9]{13}$/) && +this.data[12] === p(this.data)
                        }
                    }, {
                        key: "leftText",
                        value: function() {
                            return o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "leftText", this).call(this, 1, 6)
                        }
                    }, {
                        key: "leftEncode",
                        value: function() {
                            var t = this.data.substr(1, 6),
                                n = i.EAN13_STRUCTURE[this.data[0]];
                            return o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "leftEncode", this).call(this, t, n)
                        }
                    }, {
                        key: "rightText",
                        value: function() {
                            return o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "rightText", this).call(this, 7, 6)
                        }
                    }, {
                        key: "rightEncode",
                        value: function() {
                            var t = this.data.substr(7, 6);
                            return o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "rightEncode", this).call(this, t, "RRRRRR")
                        }
                    }, {
                        key: "encodeGuarded",
                        value: function() {
                            var t = o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "encodeGuarded", this).call(this);
                            return this.options.displayValue && (t.unshift({
                                data: "000000000000",
                                text: this.text.substr(0, 1),
                                options: {
                                    textAlign: "left",
                                    fontSize: this.fontSize
                                }
                            }), this.options.lastChar && (t.push({
                                data: "00"
                            }), t.push({
                                data: "00000",
                                text: this.options.lastChar,
                                options: {
                                    fontSize: this.fontSize
                                }
                            }))), t
                        }
                    }]), e
                }(u.default);
            e.default = d
        },
        dab6: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getTotalWidthOfEncodings = e.calculateEncodingAttributes = e.getBarcodePadding = e.getEncodingHeight = e.getMaximumHeightOfEncodings = void 0;
            var r = n("2689"),
                o = i(r);

            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function a(t, e) {
                return e.height + (e.displayValue && t.text.length > 0 ? e.fontSize + e.textMargin : 0) + e.marginTop + e.marginBottom
            }

            function u(t, e, n) {
                if (n.displayValue && e < t) {
                    if ("center" == n.textAlign) return Math.floor((t - e) / 2);
                    if ("left" == n.textAlign) return 0;
                    if ("right" == n.textAlign) return Math.floor(t - e)
                }
                return 0
            }

            function f(t, e, n) {
                for (var r = 0; r < t.length; r++) {
                    var i, f = t[r],
                        c = (0, o.default)(e, f.options);
                    i = c.displayValue ? l(f.text, c, n) : 0;
                    var s = f.data.length * c.width;
                    f.width = Math.ceil(Math.max(i, s)), f.height = a(f, c), f.barcodePadding = u(i, s, c)
                }
            }

            function c(t) {
                for (var e = 0, n = 0; n < t.length; n++) e += t[n].width;
                return e
            }

            function s(t) {
                for (var e = 0, n = 0; n < t.length; n++) t[n].height > e && (e = t[n].height);
                return e
            }

            function l(t, e, n) {
                var r;
                if (n) r = n;
                else {
                    if ("undefined" === typeof document) return 0;
                    r = document.createElement("canvas").getContext("2d")
                }
                r.font = e.fontOptions + " " + e.fontSize + "px " + e.font;
                var o = r.measureText(t).width;
                return o
            }
            e.getMaximumHeightOfEncodings = s, e.getEncodingHeight = a, e.getBarcodePadding = u, e.calculateEncodingAttributes = f, e.getTotalWidthOfEncodings = c
        },
        db74: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n("6c62"),
                o = a(r),
                i = n("5010");

            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function f(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }

            function c(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var s = function(t) {
                function e(t, n) {
                    return u(this, e), t += (0, i.mod11)(t), t += (0, i.mod10)(t), f(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
                }
                return c(e, t), e
            }(o.default);
            e.default = s
        },
        dff7: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.CODE39 = void 0;
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                o = n("4b94"),
                i = a(o);

            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function f(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }

            function c(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var s = function(t) {
                    function e(t, n) {
                        return u(this, e), t = t.toUpperCase(), n.mod43 && (t += b(v(t))), f(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
                    }
                    return c(e, t), r(e, [{
                        key: "encode",
                        value: function() {
                            for (var t = d("*"), e = 0; e < this.data.length; e++) t += d(this.data[e]) + "0";
                            return t += d("*"), {
                                data: t,
                                text: this.text
                            }
                        }
                    }, {
                        key: "valid",
                        value: function() {
                            return -1 !== this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/)
                        }
                    }]), e
                }(i.default),
                l = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"],
                p = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770];

            function d(t) {
                return h(y(t))
            }

            function h(t) {
                return p[t].toString(2)
            }

            function b(t) {
                return l[t]
            }

            function y(t) {
                return l.indexOf(t)
            }

            function v(t) {
                for (var e = 0, n = 0; n < t.length; n++) e += y(t[n]);
                return e %= 43, e
            }
            e.CODE39 = s
        },
        e92c: function(t, e, n) {
            "use strict";

            function r(t) {
                return t.marginTop = t.marginTop || t.margin, t.marginBottom = t.marginBottom || t.margin, t.marginRight = t.marginRight || t.margin, t.marginLeft = t.marginLeft || t.margin, t
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = r
        },
        eb1c: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }();

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var i = function() {
                function t(e, n, r) {
                    o(this, t), this.object = e, this.encodings = n, this.options = r
                }
                return r(t, [{
                    key: "render",
                    value: function() {
                        this.object.encodings = this.encodings
                    }
                }]), t
            }();
            e.default = i
        },
        ebdc: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                o = n("8246"),
                i = a(o);

            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function f(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }

            function c(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var s = function(t) {
                    var e = t.substr(0, 13).split("").map((function(t) {
                        return parseInt(t, 10)
                    })).reduce((function(t, e, n) {
                        return t + e * (3 - n % 2 * 2)
                    }), 0);
                    return 10 * Math.ceil(e / 10) - e
                },
                l = function(t) {
                    function e(t, n) {
                        return u(this, e), -1 !== t.search(/^[0-9]{13}$/) && (t += s(t)), f(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
                    }
                    return c(e, t), r(e, [{
                        key: "valid",
                        value: function() {
                            return -1 !== this.data.search(/^[0-9]{14}$/) && +this.data[13] === s(this.data)
                        }
                    }]), e
                }(i.default);
            e.default = l
        },
        ee89: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                o = n("a2ad"),
                i = u(o),
                a = n("10ee");

            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function f(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }

            function s(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var l = function(t) {
                function e(t, n) {
                    return f(this, e), c(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, a.C_START_CHAR + t, n))
                }
                return s(e, t), r(e, [{
                    key: "valid",
                    value: function() {
                        return new RegExp("^" + a.C_CHARS + "+$").test(this.data)
                    }
                }]), e
            }(i.default);
            e.default = l
        },
        f2ff: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n("7bc3"),
                o = function(t, e, n) {
                    var o = t.split("").map((function(t, n) {
                        return r.BINARIES[e[n]]
                    })).map((function(e, n) {
                        return e ? e[t[n]] : ""
                    }));
                    if (n) {
                        var i = t.length - 1;
                        o = o.map((function(t, e) {
                            return e < i ? t + n : t
                        }))
                    }
                    return o.join("")
                };
            e.default = o
        },
        f887: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n("6c62"),
                o = a(r),
                i = n("5010");

            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function f(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }

            function c(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var s = function(t) {
                function e(t, n) {
                    return u(this, e), t += (0, i.mod10)(t), t += (0, i.mod10)(t), f(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
                }
                return c(e, t), e
            }(o.default);
            e.default = s
        },
        fb58: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n("a2ad"),
                o = u(r),
                i = n("20de"),
                a = u(i);

            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function f(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }

            function s(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var l = function(t) {
                function e(t, n) {
                    if (f(this, e), /^[\x00-\x7F\xC8-\xD3]+$/.test(t)) var r = c(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, (0, a.default)(t), n));
                    else r = c(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                    return c(r)
                }
                return s(e, t), e
            }(o.default);
            e.default = l
        },
        fba3: function(t, e, n) {
            "use strict";
            var r = n("2bf3"),
                o = O(r),
                i = n("2689"),
                a = O(i),
                u = n("6caa"),
                f = O(u),
                c = n("e92c"),
                s = O(c),
                l = n("9296"),
                p = O(l),
                d = n("c060"),
                h = O(d),
                b = n("108e"),
                y = O(b),
                v = n("9f0c"),
                _ = n("1ab2"),
                g = O(_);

            function O(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var w = function() {},
                E = function(t, e, n) {
                    var r = new w;
                    if ("undefined" === typeof t) throw Error("No element to render on was provided.");
                    return r._renderProperties = (0, p.default)(t), r._encodings = [], r._options = g.default, r._errorHandler = new y.default(r), "undefined" !== typeof e && (n = n || {}, n.format || (n.format = P()), r.options(n)[n.format](e, n).render()), r
                };
            for (var m in E.getModule = function(t) {
                    return o.default[t]
                }, o.default) o.default.hasOwnProperty(m) && j(o.default, m);

            function j(t, e) {
                w.prototype[e] = w.prototype[e.toUpperCase()] = w.prototype[e.toLowerCase()] = function(n, r) {
                    var o = this;
                    return o._errorHandler.wrapBarcodeCall((function() {
                        r.text = "undefined" === typeof r.text ? void 0 : "" + r.text;
                        var i = (0, a.default)(o._options, r);
                        i = (0, h.default)(i);
                        var u = t[e],
                            f = x(n, u, i);
                        return o._encodings.push(f), o
                    }))
                }
            }

            function x(t, e, n) {
                t = "" + t;
                var r = new e(t, n);
                if (!r.valid()) throw new v.InvalidInputException(r.constructor.name, t);
                var o = r.encode();
                o = (0, f.default)(o);
                for (var i = 0; i < o.length; i++) o[i].options = (0, a.default)(n, o[i].options);
                return o
            }

            function P() {
                return o.default["CODE128"] ? "CODE128" : Object.keys(o.default)[0]
            }

            function S(t, e, n) {
                e = (0, f.default)(e);
                for (var r = 0; r < e.length; r++) e[r].options = (0, a.default)(n, e[r].options), (0, s.default)(e[r].options);
                (0, s.default)(n);
                var o = t.renderer,
                    i = new o(t.element, e, n);
                i.render(), t.afterRender && t.afterRender()
            }
            w.prototype.options = function(t) {
                return this._options = (0, a.default)(this._options, t), this
            }, w.prototype.blank = function(t) {
                var e = new Array(t + 1).join("0");
                return this._encodings.push({
                    data: e
                }), this
            }, w.prototype.init = function() {
                var t;
                if (this._renderProperties)
                    for (var e in Array.isArray(this._renderProperties) || (this._renderProperties = [this._renderProperties]), this._renderProperties) {
                        t = this._renderProperties[e];
                        var n = (0, a.default)(this._options, t.options);
                        "auto" == n.format && (n.format = P()), this._errorHandler.wrapBarcodeCall((function() {
                            var e = n.value,
                                r = o.default[n.format.toUpperCase()],
                                i = x(e, r, n);
                            S(t, i, n)
                        }))
                    }
            }, w.prototype.render = function() {
                if (!this._renderProperties) throw new v.NoElementException;
                if (Array.isArray(this._renderProperties))
                    for (var t = 0; t < this._renderProperties.length; t++) S(this._renderProperties[t], this._encodings, this._options);
                else S(this._renderProperties, this._encodings, this._options);
                return this
            }, w.prototype._defaults = g.default, "undefined" !== typeof window && (window.JsBarcode = E), "undefined" !== typeof jQuery && (jQuery.fn.JsBarcode = function(t, e) {
                var n = [];
                return jQuery(this).each((function() {
                    n.push(this)
                })), E(n, t, e)
            }), t.exports = E
        },
        fc0c: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                o = n("2689"),
                i = u(o),
                a = n("dab6");

            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function f(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var c = function() {
                function t(e, n, r) {
                    f(this, t), this.canvas = e, this.encodings = n, this.options = r
                }
                return r(t, [{
                    key: "render",
                    value: function() {
                        if (!this.canvas.getContext) throw new Error("The browser does not support canvas.");
                        this.prepareCanvas();
                        for (var t = 0; t < this.encodings.length; t++) {
                            var e = (0, i.default)(this.options, this.encodings[t].options);
                            this.drawCanvasBarcode(e, this.encodings[t]), this.drawCanvasText(e, this.encodings[t]), this.moveCanvasDrawing(this.encodings[t])
                        }
                        this.restoreCanvas()
                    }
                }, {
                    key: "prepareCanvas",
                    value: function() {
                        var t = this.canvas.getContext("2d");
                        t.save(), (0, a.calculateEncodingAttributes)(this.encodings, this.options, t);
                        var e = (0, a.getTotalWidthOfEncodings)(this.encodings),
                            n = (0, a.getMaximumHeightOfEncodings)(this.encodings);
                        this.canvas.width = e + this.options.marginLeft + this.options.marginRight, this.canvas.height = n, t.clearRect(0, 0, this.canvas.width, this.canvas.height), this.options.background && (t.fillStyle = this.options.background, t.fillRect(0, 0, this.canvas.width, this.canvas.height)), t.translate(this.options.marginLeft, 0)
                    }
                }, {
                    key: "drawCanvasBarcode",
                    value: function(t, e) {
                        var n, r = this.canvas.getContext("2d"),
                            o = e.data;
                        n = "top" == t.textPosition ? t.marginTop + t.fontSize + t.textMargin : t.marginTop, r.fillStyle = t.lineColor;
                        for (var i = 0; i < o.length; i++) {
                            var a = i * t.width + e.barcodePadding;
                            "1" === o[i] ? r.fillRect(a, n, t.width, t.height) : o[i] && r.fillRect(a, n, t.width, t.height * o[i])
                        }
                    }
                }, {
                    key: "drawCanvasText",
                    value: function(t, e) {
                        var n, r, o = this.canvas.getContext("2d"),
                            i = t.fontOptions + " " + t.fontSize + "px " + t.font;
                        t.displayValue && (r = "top" == t.textPosition ? t.marginTop + t.fontSize - t.textMargin : t.height + t.textMargin + t.marginTop + t.fontSize, o.font = i, "left" == t.textAlign || e.barcodePadding > 0 ? (n = 0, o.textAlign = "left") : "right" == t.textAlign ? (n = e.width - 1, o.textAlign = "right") : (n = e.width / 2, o.textAlign = "center"), o.fillText(e.text, n, r))
                    }
                }, {
                    key: "moveCanvasDrawing",
                    value: function(t) {
                        var e = this.canvas.getContext("2d");
                        e.translate(t.width, 0)
                    }
                }, {
                    key: "restoreCanvas",
                    value: function() {
                        var t = this.canvas.getContext("2d");
                        t.restore()
                    }
                }]), t
            }();
            e.default = c
        }
    }
]);