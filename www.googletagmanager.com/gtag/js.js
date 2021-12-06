// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__c",
                "vtp_value": "google.com.br"
            }, {
                "function": "__c",
                "vtp_value": 0
            }, {
                "vtp_signal": 0,
                "function": "__c",
                "vtp_value": 0
            }],
            "tags": [{
                "function": "__gct",
                "vtp_trackingId": "G-QWGR6M5L7L",
                "vtp_sessionDuration": 0,
                "tag_id": 1
            }, {
                "function": "__set_product_settings",
                "original_activity_id": 3001,
                "vtp_foreignTldMacroResult": ["macro", 1],
                "vtp_isChinaVipRegionMacroResult": ["macro", 2],
                "tag_id": 4
            }, {
                "function": "__ogt_event_settings",
                "original_activity_id": 3002,
                "vtp_eventSettings": ["list", ["map", "name", "purchase", "conversion", true]],
                "tag_id": 5
            }, {
                "function": "__ogt_google_signals",
                "original_activity_id": 3003,
                "vtp_googleSignals": "DISABLED",
                "vtp_serverMacroResult": ["macro", 3],
                "tag_id": 6
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.init"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0]
                ],
                [
                    ["if", 1],
                    ["add", 1, 2, 3]
                ]
            ]
        },
        "runtime": [
            [50, "__set_product_settings", [46, "a"],
                [52, "b", ["require", "internal.setProductSettingsParameter"]],
                [52, "c", ["require", "getContainerVersion"]],
                [52, "d", [17, ["c"], "containerId"]],
                ["b", [15, "d"], "google_tld", [17, [15, "a"], "foreignTldMacroResult"]],
                ["b", [15, "d"], "ga_restrict_domain", [20, [17, [15, "a"], "isChinaVipRegionMacroResult"], 1]],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ogt_event_settings", [46, "a"],
                [52, "b", ["require", "internal.setProductSettingsParameter"]],
                [52, "c", ["require", "getContainerVersion"]],
                [52, "d", [8]],
                [53, [41, "f"],
                    [3, "f", 0],
                    [63, [7, "f"],
                        [23, [15, "f"],
                            [17, [17, [15, "a"], "eventSettings"], "length"]
                        ],
                        [33, [15, "f"],
                            [3, "f", [0, [15, "f"], 1]]
                        ],
                        [46, [53, [52, "g", [16, [16, [17, [15, "a"], "eventSettings"],
                                [15, "f"]
                            ], "name"]],
                            [43, [15, "d"],
                                [15, "g"],
                                [8, "blacklisted", [16, [16, [17, [15, "a"], "eventSettings"],
                                    [15, "f"]
                                ], "blacklisted"], "conversion", [16, [16, [17, [15, "a"], "eventSettings"],
                                    [15, "f"]
                                ], "conversion"]]
                            ]
                        ]]
                    ]
                ],
                [52, "e", [17, ["c"], "containerId"]],
                ["b", [15, "e"], "event_settings", [15, "d"]],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ogt_google_signals", [46, "a"],
                [52, "b", ["require", "internal.setProductSettingsParameter"]],
                [52, "c", ["require", "getContainerVersion"]],
                [52, "d", [17, ["c"], "containerId"]],
                ["b", [15, "d"], "google_signals", [20, [17, [15, "a"], "serverMacroResult"], 1]],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ]
        ],
        "permissions": {
            "__set_product_settings": {
                "read_container_data": {}
            },
            "__ogt_event_settings": {
                "read_container_data": {}
            },
            "__ogt_google_signals": {
                "read_container_data": {}
            }
        }

        ,
        "security_groups": {
            "google": ["__set_product_settings", "__ogt_event_settings", "__ogt_google_signals"]
        }

    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var l, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        ca = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ea;
    if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
    else {
        var fa;
        a: {
            var ha = {
                    a: !0
                },
                ia = {};
            try {
                ia.__proto__ = ha;
                fa = ia.a;
                break a
            } catch (a) {}
            fa = !1
        }
        ea = fa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ja = ea,
        ka = function(a, b) {
            a.prototype = ca(b.prototype);
            a.prototype.constructor = a;
            if (ja) ja(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.rk = b.prototype
        },
        la = this || self,
        ma = function(a) {
            return a
        };
    var na = function(a, b) {
        this.g = a;
        this.o = b
    };
    var pa = function(a) {
            return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
        },
        qa = function() {
            this.C = {};
            this.s = !1;
            this.F = {}
        },
        ra = function(a, b) {
            var c = [],
                d;
            for (d in a.C)
                if (a.C.hasOwnProperty(d)) switch (d = d.substr(5), b) {
                    case 1:
                        c.push(d);
                        break;
                    case 2:
                        c.push(a.get(d));
                        break;
                    case 3:
                        c.push([d, a.get(d)])
                }
            return c
        };
    qa.prototype.get = function(a) {
        return this.C["dust." + a]
    };
    qa.prototype.set = function(a, b) {
        this.s || (a = "dust." + a, this.F.hasOwnProperty(a) || (this.C[a] = b))
    };
    qa.prototype.has = function(a) {
        return this.C.hasOwnProperty("dust." + a)
    };
    var sa = function(a, b) {
        b = "dust." + b;
        a.s || a.F.hasOwnProperty(b) || delete a.C[b]
    };
    qa.prototype.Ab = function() {
        this.s = !0
    };
    var ta = function(a) {
        this.o = new qa;
        this.g = [];
        this.s = !1;
        a = a || [];
        for (var b in a) a.hasOwnProperty(b) && (pa(b) ? this.g[Number(b)] = a[Number(b)] : this.o.set(b, a[b]))
    };
    l = ta.prototype;
    l.toString = function(a) {
        if (a && 0 <= a.indexOf(this)) return "";
        for (var b = [], c = 0; c < this.g.length; c++) {
            var d = this.g[c];
            null === d || void 0 === d ? b.push("") : d instanceof ta ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString())
        }
        return b.join(",")
    };
    l.set = function(a, b) {
        if (!this.s)
            if ("length" === a) {
                if (!pa(b)) throw Error("RangeError: Length property must be a valid integer.");
                this.g.length = Number(b)
            } else pa(a) ? this.g[Number(a)] = b : this.o.set(a, b)
    };
    l.get = function(a) {
        return "length" === a ? this.length() : pa(a) ? this.g[Number(a)] : this.o.get(a)
    };
    l.length = function() {
        return this.g.length
    };
    l.zb = function() {
        for (var a = ra(this.o, 1), b = 0; b < this.g.length; b++) a.push(b + "");
        return new ta(a)
    };
    var ua = function(a, b) {
        pa(b) ? delete a.g[Number(b)] : sa(a.o, b)
    };
    l = ta.prototype;
    l.pop = function() {
        return this.g.pop()
    };
    l.push = function(a) {
        return this.g.push.apply(this.g, Array.prototype.slice.call(arguments))
    };
    l.shift = function() {
        return this.g.shift()
    };
    l.splice = function(a, b, c) {
        return new ta(this.g.splice.apply(this.g, arguments))
    };
    l.unshift = function(a) {
        return this.g.unshift.apply(this.g, Array.prototype.slice.call(arguments))
    };
    l.has = function(a) {
        return pa(a) && this.g.hasOwnProperty(a) || this.o.has(a)
    };
    l.Ab = function() {
        this.s = !0;
        Object.freeze(this.g);
        this.o.Ab()
    };
    var va = function() {
        function a(f, g) {
            if (b[f]) {
                if (b[f].Dd + g > b[f].max) throw Error("Quota exceeded");
                b[f].Dd += g
            }
        }
        var b = {},
            c = void 0,
            d = void 0,
            e = {
                xj: function(f) {
                    c = f
                },
                Hg: function() {
                    c && a(c, 1)
                },
                zj: function(f) {
                    d = f
                },
                Bb: function(f) {
                    d && a(d, f)
                },
                Rj: function(f, g) {
                    b[f] = b[f] || {
                        Dd: 0
                    };
                    b[f].max = g
                },
                Zi: function(f) {
                    return b[f] && b[f].Dd || 0
                },
                reset: function() {
                    b = {}
                },
                Li: a
            };
        e.onFnConsume = e.xj;
        e.consumeFn = e.Hg;
        e.onStorageConsume = e.zj;
        e.consumeStorage = e.Bb;
        e.setMax = e.Rj;
        e.getConsumed = e.Zi;
        e.reset = e.reset;
        e.consume = e.Li;
        return e
    };
    var wa = function(a, b) {
        this.s = a;
        this.O = function(c, d, e) {
            return c.apply(d, e)
        };
        this.C = b;
        this.o = new qa;
        this.g = this.F = void 0
    };
    wa.prototype.add = function(a, b) {
        ya(this, a, b, !1)
    };
    var ya = function(a, b, c, d) {
        if (!a.o.s)
            if (a.s.Bb(("string" === typeof b ? b.length : 1) + ("string" === typeof c ? c.length : 1)), d) {
                var e = a.o;
                e.set(b, c);
                e.F["dust." + b] = !0
            } else a.o.set(b, c)
    };
    wa.prototype.set = function(a, b) {
        this.o.s || (!this.o.has(a) && this.C && this.C.has(a) ? this.C.set(a, b) : (this.s.Bb(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.o.set(a, b)))
    };
    wa.prototype.get = function(a) {
        return this.o.has(a) ? this.o.get(a) : this.C ? this.C.get(a) : void 0
    };
    wa.prototype.has = function(a) {
        return !!this.o.has(a) || !(!this.C || !this.C.has(a))
    };
    var za = function(a) {
        var b = new wa(a.s, a);
        a.F && (b.F = a.F);
        b.O = a.O;
        b.g = a.g;
        return b
    };
    var Ca = function() {},
        Da = function(a) {
            return "function" == typeof a
        },
        Ga = function(a) {
            return "string" == typeof a
        },
        Ha = function(a) {
            return "number" == typeof a && !isNaN(a)
        },
        Ia = Array.isArray,
        Ja = function(a, b) {
            if (a && Ia(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        Ka = function(a, b) {
            if (!Ha(a) || !Ha(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        Ma = function(a, b) {
            for (var c = new La, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        Qa = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Ra = function(a) {
            return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Sa = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ta = function(a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a
        },
        Xa = function(a) {
            var b = [];
            if (Ia(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ya = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        ab = function() {
            return new Date(Date.now())
        },
        bb = function() {
            return ab().getTime()
        },
        La = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    La.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    La.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var cb = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        db = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        eb = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        fb = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        gb = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        hb = function(a, b) {
            var c = m;
            b = b || [];
            for (var d = c, e = 0; e < a.length - 1; e++) {
                if (!d.hasOwnProperty(a[e])) return;
                d = d[a[e]];
                if (0 <=
                    b.indexOf(d)) return
            }
            return d
        },
        ib = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        kb = /^\w{1,9}$/,
        lb = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            Qa(a, function(d, e) {
                kb.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        mb = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };
    var nb = function(a, b) {
        qa.call(this);
        this.O = a;
        this.La = b
    };
    ka(nb, qa);
    nb.prototype.toString = function() {
        return this.O
    };
    nb.prototype.zb = function() {
        return new ta(ra(this, 1))
    };
    nb.prototype.g = function(a, b) {
        a.s.Hg();
        return this.La.apply(new ob(this, a), Array.prototype.slice.call(arguments, 1))
    };
    nb.prototype.o = function(a, b) {
        try {
            return this.g.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (c) {}
    };
    var rb = function(a, b) {
            for (var c, d = 0; d < b.length && !(c = qb(a, b[d]), c instanceof na); d++);
            return c
        },
        qb = function(a, b) {
            try {
                var c = a.get(String(b[0]));
                if (!(c && c instanceof nb)) throw Error("Attempting to execute non-function " + b[0] + ".");
                return c.g.apply(c, [a].concat(b.slice(1)))
            } catch (e) {
                var d = a.F;
                d && d(e, b.context ? {
                    id: b[0],
                    line: b.context.line
                } : null);
                throw e;
            }
        },
        ob = function(a, b) {
            this.o = a;
            this.g = b
        },
        B = function(a, b) {
            return Ia(b) ? qb(a.g, b) : b
        },
        G = function(a) {
            return a.o.O
        };
    var sb = function() {
        qa.call(this)
    };
    ka(sb, qa);
    sb.prototype.zb = function() {
        return new ta(ra(this, 1))
    };
    var tb = {
        control: function(a, b) {
            return new na(a, B(this, b))
        },
        fn: function(a, b, c) {
            var d = this.g,
                e = B(this, b);
            if (!(e instanceof ta)) throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            this.g.s.Bb(a.length + f.length);
            return new nb(a, function() {
                return function(g) {
                    var h = za(d);
                    void 0 === h.g && (h.g = this.g.g);
                    for (var k = Array.prototype.slice.call(arguments, 0), n = 0; n < k.length; n++)
                        if (k[n] = B(this, k[n]), k[n] instanceof na) return k[n];
                    for (var p = e.get("length"), r =
                            0; r < p; r++) r < k.length ? h.add(e.get(r), k[r]) : h.add(e.get(r), void 0);
                    h.add("arguments", new ta(k));
                    var t = rb(h, f);
                    if (t instanceof na) return "return" === t.g ? t.o : t
                }
            }())
        },
        list: function(a) {
            var b = this.g.s;
            b.Bb(arguments.length);
            for (var c = new ta, d = 0; d < arguments.length; d++) {
                var e = B(this, arguments[d]);
                "string" === typeof e && b.Bb(e.length ? e.length - 1 : 0);
                c.push(e)
            }
            return c
        },
        map: function(a) {
            for (var b = this.g.s, c = new sb, d = 0; d < arguments.length - 1; d += 2) {
                var e = B(this, arguments[d]) + "",
                    f = B(this, arguments[d + 1]),
                    g = e.length;
                g += "string" ===
                    typeof f ? f.length : 1;
                b.Bb(g);
                c.set(e, f)
            }
            return c
        },
        undefined: function() {}
    };
    var ub = function() {
            this.s = va();
            this.g = new wa(this.s)
        },
        vb = function(a, b, c) {
            var d = new nb(b, c);
            d.Ab();
            a.g.set(b, d)
        },
        wb = function(a, b, c) {
            tb.hasOwnProperty(b) && vb(a, c || b, tb[b])
        };
    ub.prototype.execute = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.o(c)
    };
    ub.prototype.o = function(a) {
        for (var b, c = 0; c < arguments.length; c++) b = qb(this.g, arguments[c]);
        return b
    };
    ub.prototype.C = function(a, b) {
        var c = za(this.g);
        c.g = a;
        for (var d, e = 1; e < arguments.length; e++) d = d = qb(c, arguments[e]);
        return d
    };
    var xb, yb = function() {
        if (void 0 === xb) {
            var a = null,
                b = la.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ma,
                        createScript: ma,
                        createScriptURL: ma
                    })
                } catch (c) {
                    la.console && la.console.error(c.message)
                }
                xb = a
            } else xb = a
        }
        return xb
    };
    var Ab = function(a, b) {
        this.s = b === zb ? a : ""
    };
    Ab.prototype.o = !0;
    Ab.prototype.g = function() {
        return this.s.toString()
    };
    Ab.prototype.toString = function() {
        return this.s + ""
    };
    var zb = {},
        Bb = function(a) {
            var b = yb(),
                c = b ? b.createScriptURL(a) : a;
            return new Ab(c, zb)
        };
    var Fb = function(a, b) {
        this.s = b === Eb ? a : ""
    };
    Fb.prototype.o = !0;
    Fb.prototype.g = function() {
        return this.s.toString()
    };
    Fb.prototype.toString = function() {
        return this.s.toString()
    };
    var Gb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        Eb = {};

    function Hb() {
        var a = la.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }

    function Ib(a) {
        return -1 != Hb().indexOf(a)
    };
    var Jb = {},
        Kb = function(a, b, c) {
            this.s = c === Jb ? a : "";
            this.o = !0
        };
    Kb.prototype.g = function() {
        return this.s.toString()
    };
    Kb.prototype.toString = function() {
        return this.s.toString()
    };
    var Lb = function(a) {
            return a instanceof Kb && a.constructor === Kb ? a.s : "type_error:SafeHtml"
        },
        Mb = function(a) {
            var b = yb(),
                c = b ? b.createHTML(a) : a;
            return new Kb(c, null, Jb)
        },
        Ob = new Kb(la.trustedTypes && la.trustedTypes.emptyHTML || "", 0, Jb);
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function Pb(a, b) {
        a.src = b instanceof Ab && b.constructor === Ab ? b.s : "type_error:TrustedResourceUrl";
        var c, d, e = (a.ownerDocument && a.ownerDocument.defaultView || window).document,
            f = null === (d = e.querySelector) || void 0 === d ? void 0 : d.call(e, "script[nonce]");
        (c = f ? f.nonce || f.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    };
    var Qb = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        Rb = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var Sb = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        var c = a.firstChild.firstChild;
        a.innerHTML = Lb(Ob);
        return !c.parentElement
    });
    var m = window,
        H = document,
        Tb = navigator,
        Wb = H.currentScript && H.currentScript.src,
        Xb = function(a, b) {
            var c = m[a];
            m[a] = void 0 === c ? b : c;
            return m[a]
        },
        Yb = function(a) {
            var b = H.getElementsByTagName("script")[0] || H.body || H.head;
            b.parentNode.insertBefore(a, b)
        },
        Zb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        $b = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        ac = function(a, b, c, d) {
            var e = H.createElement("script");
            d && Qa(d, function(f, g) {
                f = f.toLowerCase();
                $b.hasOwnProperty(f) || e.setAttribute(f, g)
            });
            e.type = "text/javascript";
            e.async = !0;
            Pb(e, Bb(a));
            Zb(e, b);
            c && (e.onerror = c);
            Yb(e);
            return e
        },
        bc = function() {
            if (Wb) {
                var a = Wb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        cc = function(a, b) {
            var c = H.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = H.body && H.body.lastChild || H.body || H.head;
            d.parentNode.insertBefore(c,
                d);
            Zb(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        dc = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        ec = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        fc = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        I = function(a) {
            m.setTimeout(a, 0)
        },
        gc = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value :
                null
        },
        hc = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        ic = function(a) {
            var b = H.createElement("div"),
                c = Mb("A<div>" + a + "</div>"),
                d = b;
            if (Sb())
                for (; d.lastChild;) d.removeChild(d.lastChild);
            d.innerHTML = Lb(c);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        jc = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        kc = function(a) {
            var b;
            try {
                b = Tb.sendBeacon && Tb.sendBeacon(a)
            } catch (c) {}
            b || dc(a)
        },
        lc = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        pc = function(a) {
            var b = H.featurePolicy;
            return b && Da(b.allowsFeature) ? b.allowsFeature(a) : !1
        };
    var qc = function(a, b) {
            return B(this, a) && B(this, b)
        },
        rc = function(a, b) {
            return B(this, a) === B(this, b)
        },
        sc = function(a, b) {
            return B(this, a) || B(this, b)
        },
        tc = function(a, b) {
            a = B(this, a);
            b = B(this, b);
            return -1 < String(a).indexOf(String(b))
        },
        uc = function(a, b) {
            a = String(B(this, a));
            b = String(B(this, b));
            return a.substring(0, b.length) === b
        },
        vc = function(a, b) {
            a = B(this, a);
            b = B(this, b);
            switch (a) {
                case "pageLocation":
                    var c = m.location.href;
                    b instanceof sb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                    return c
            }
        };
    var xc = function() {
        this.g = new ub;
        wc(this)
    };
    xc.prototype.execute = function(a) {
        return this.g.o(a)
    };
    var wc = function(a) {
        wb(a.g, "map");
        var b = function(c, d) {
            vb(a.g, c, d)
        };
        b("and", qc);
        b("contains", tc);
        b("equals", rc);
        b("or", sc);
        b("startsWith", uc);
        b("variable", vc)
    };
    var yc = function(a) {
        if (a instanceof yc) return a;
        this.Qa = a
    };
    yc.prototype.toString = function() {
        return String(this.Qa)
    };
    var Ac = function(a) {
        qa.call(this);
        this.g = a;
        this.set("then", zc(this));
        this.set("catch", zc(this, !0));
        this.set("finally", zc(this, !1, !0))
    };
    ka(Ac, sb);
    var zc = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        return new nb("", function(d, e) {
            b && (e = d, d = void 0);
            c && (e = d);
            d instanceof nb || (d = void 0);
            e instanceof nb || (e = void 0);
            var f = za(this.g),
                g = function(k) {
                    return function(n) {
                        return c ? (k.g(f), a.g) : k.g(f, n)
                    }
                },
                h = a.g.then(d && g(d), e && g(e));
            return new Ac(h)
        })
    };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Bc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Cc = function(a) {
            if (null == a) return String(a);
            var b = Bc.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Dc = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Gc = function(a) {
            if (!a || "object" != Cc(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Dc(a, "constructor") && !Dc(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Dc(a, b)
        },
        Hc = function(a, b) {
            var c = b || ("array" == Cc(a) ? [] : {}),
                d;
            for (d in a)
                if (Dc(a, d)) {
                    var e = a[d];
                    "array" == Cc(e) ? ("array" != Cc(c[d]) && (c[d] = []), c[d] = Hc(e, c[d])) : Gc(e) ? (Gc(c[d]) || (c[d] = {}), c[d] = Hc(e, c[d])) : c[d] = e
                }
            return c
        };
    var Jc = function(a, b, c) {
            var d = [],
                e = [],
                f = function(h, k) {
                    for (var n = ra(h, 1), p = 0; p < n.length; p++) k[n[p]] = g(h.get(n[p]))
                },
                g = function(h) {
                    var k = d.indexOf(h);
                    if (-1 < k) return e[k];
                    if (h instanceof ta) {
                        var n = [];
                        d.push(h);
                        e.push(n);
                        for (var p = h.zb(), r = 0; r < p.length(); r++) n[p.get(r)] = g(h.get(p.get(r)));
                        return n
                    }
                    if (h instanceof Ac) return h.g;
                    if (h instanceof sb) {
                        var t = {};
                        d.push(h);
                        e.push(t);
                        f(h, t);
                        return t
                    }
                    if (h instanceof nb) {
                        var u = function() {
                            for (var q = Array.prototype.slice.call(arguments, 0), v = 0; v < q.length; v++) q[v] = Ic(q[v],
                                b, !!c);
                            var w = b ? b.s : va(),
                                y = new wa(w);
                            b && (y.g = b.g);
                            return g(h.g.apply(h, [y].concat(q)))
                        };
                        d.push(h);
                        e.push(u);
                        f(h, u);
                        return u
                    }
                    switch (typeof h) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                            return h;
                        case "object":
                            if (null === h) return null
                    }
                };
            return g(a)
        },
        Ic = function(a, b, c) {
            var d = [],
                e = [],
                f = function(h, k) {
                    for (var n in h) h.hasOwnProperty(n) && k.set(n,
                        g(h[n]))
                },
                g = function(h) {
                    var k = d.indexOf(h);
                    if (-1 < k) return e[k];
                    if (Ia(h) || Ra(h)) {
                        var n = new ta([]);
                        d.push(h);
                        e.push(n);
                        for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
                        return n
                    }
                    if (Gc(h)) {
                        var r = new sb;
                        d.push(h);
                        e.push(r);
                        f(h, r);
                        return r
                    }
                    if ("function" === typeof h) {
                        var t = new nb("", function(y) {
                            for (var x = Array.prototype.slice.call(arguments, 0), z = 0; z < x.length; z++) x[z] = Jc(B(this, x[z]), b, !!c);
                            return g((0, this.g.O)(h, h, x))
                        });
                        d.push(h);
                        e.push(t);
                        f(h, t);
                        return t
                    }
                    var w = typeof h;
                    if (null === h || "string" === w || "number" === w || "boolean" === w) return h;
                };
            return g(a)
        };
    var Kc = function(a) {
            for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
            return b
        },
        Lc = function(a) {
            if (void 0 === a || Ia(a) || Gc(a)) return !0;
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    return !0
            }
            return !1
        };
    var Mc = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e] instanceof ta)
                    for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
                else c.push(arguments[e]);
            return new ta(c)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.g(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.g(a, this.get(e), e, this) && d.push(this.get(e));
            return new ta(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.g(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) &&
                    this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.g(a, this.get(e), e, this));
            return new ta(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a, b) {
            return this.push.apply(this,
                Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e, f = 0;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d) throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() {
            for (var a = Kc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : ua(this, c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ?
                Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new ta(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.g(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = Kc(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) {
                return Number(b.g(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : ua(this, d);
            return this
        },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments,
                1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var Nc = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
        Oc = new na("break"),
        Pc = new na("continue"),
        Qc = function(a, b) {
            return B(this, a) + B(this, b)
        },
        Rc = function(a, b) {
            return B(this, a) && B(this, b)
        },
        Sc = function(a, b, c) {
            a = B(this, a);
            b = B(this, b);
            c = B(this, c);
            if (!(c instanceof ta)) throw Error("Error: Non-List argument given to Apply instruction.");
            if (null === a || void 0 === a) throw Error("TypeError: Can't read property " +
                b + " of " + a + ".");
            var d = "number" === typeof a;
            if ("boolean" === typeof a || d) {
                if ("toString" === b) {
                    if (d && c.length()) {
                        var e = Jc(c.get(0));
                        try {
                            return a.toString(e)
                        } catch (r) {}
                    }
                    return a.toString()
                }
                throw Error("TypeError: " + a + "." + b + " is not a function.");
            }
            if ("string" === typeof a) {
                if (0 <= Nc.indexOf(b)) {
                    var f = Jc(c);
                    return Ic(a[b].apply(a, f), this.g)
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if (a instanceof ta) {
                if (a.has(b)) {
                    var g = a.get(b);
                    if (g instanceof nb) {
                        var h = Kc(c);
                        h.unshift(this.g);
                        return g.g.apply(g, h)
                    }
                    throw Error("TypeError: " +
                        b + " is not a function");
                }
                if (0 <= Mc.supportedMethods.indexOf(b)) {
                    var k = Kc(c);
                    k.unshift(this.g);
                    return Mc[b].apply(a, k)
                }
            }
            if (a instanceof nb || a instanceof sb) {
                if (a.has(b)) {
                    var n = a.get(b);
                    if (n instanceof nb) {
                        var p = Kc(c);
                        p.unshift(this.g);
                        return n.g.apply(n, p)
                    }
                    throw Error("TypeError: " + b + " is not a function");
                }
                if ("toString" === b) return a instanceof nb ? a.O : a.toString();
                if ("hasOwnProperty" === b) return a.has.apply(a, Kc(c))
            }
            if (a instanceof yc && "toString" === b) return a.toString();
            throw Error("TypeError: Object has no '" +
                b + "' property.");
        },
        Tc = function(a, b) {
            a = B(this, a);
            if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
            var c = this.g;
            if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
            var d = B(this, b);
            c.set(a, d);
            return d
        },
        Uc = function(a) {
            var b = za(this.g),
                c = rb(b, Array.prototype.slice.apply(arguments));
            if (c instanceof na) return c
        },
        Zc = function() {
            return Oc
        },
        $c = function(a) {
            for (var b = B(this, a), c = 0; c < b.length; c++) {
                var d = B(this, b[c]);
                if (d instanceof na) return d
            }
        },
        ad = function(a) {
            for (var b =
                    this.g, c = 0; c < arguments.length - 1; c += 2) {
                var d = arguments[c];
                if ("string" === typeof d) {
                    var e = B(this, arguments[c + 1]);
                    ya(b, d, e, !0)
                }
            }
        },
        bd = function() {
            return Pc
        },
        cd = function(a, b, c) {
            var d = new ta;
            b = B(this, b);
            for (var e = 0; e < b.length; e++) d.push(b[e]);
            var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
            this.g.add(a, B(this, f))
        },
        dd = function(a, b) {
            return B(this, a) / B(this, b)
        },
        ed = function(a, b) {
            a = B(this, a);
            b = B(this, b);
            var c = a instanceof yc,
                d = b instanceof yc;
            return c || d ? c && d ? a.Qa == b.Qa : !1 : a ==
                b
        },
        fd = function(a) {
            for (var b, c = 0; c < arguments.length; c++) b = B(this, arguments[c]);
            return b
        };

    function gd(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = rb(f, d);
            if (g instanceof na) {
                if ("break" === g.g) break;
                if ("return" === g.g) return g
            }
        }
    }

    function hd(a, b, c) {
        if ("string" === typeof b) return gd(a, function() {
            return b.length
        }, function(f) {
            return f
        }, c);
        if (b instanceof sb || b instanceof ta || b instanceof nb) {
            var d = b.zb(),
                e = d.length();
            return gd(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }
    var id = function(a, b, c) {
            a = B(this, a);
            b = B(this, b);
            c = B(this, c);
            var d = this.g;
            return hd(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        jd = function(a, b, c) {
            a = B(this, a);
            b = B(this, b);
            c = B(this, c);
            var d = this.g;
            return hd(function(e) {
                var f = za(d);
                ya(f, a, e, !0);
                return f
            }, b, c)
        },
        kd = function(a, b, c) {
            a = B(this, a);
            b = B(this, b);
            c = B(this, c);
            var d = this.g;
            return hd(function(e) {
                var f = za(d);
                f.add(a, e);
                return f
            }, b, c)
        },
        md = function(a, b, c) {
            a = B(this, a);
            b = B(this, b);
            c = B(this, c);
            var d = this.g;
            return ld(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        nd =
        function(a, b, c) {
            a = B(this, a);
            b = B(this, b);
            c = B(this, c);
            var d = this.g;
            return ld(function(e) {
                var f = za(d);
                ya(f, a, e, !0);
                return f
            }, b, c)
        },
        od = function(a, b, c) {
            a = B(this, a);
            b = B(this, b);
            c = B(this, c);
            var d = this.g;
            return ld(function(e) {
                var f = za(d);
                f.add(a, e);
                return f
            }, b, c)
        };

    function ld(a, b, c) {
        if ("string" === typeof b) return gd(a, function() {
            return b.length
        }, function(d) {
            return b[d]
        }, c);
        if (b instanceof ta) return gd(a, function() {
            return b.length()
        }, function(d) {
            return b.get(d)
        }, c);
        throw new TypeError("The value is not iterable.");
    }
    var pd = function(a, b, c, d) {
            function e(p, r) {
                for (var t = 0; t < f.length(); t++) {
                    var u = f.get(t);
                    r.add(u, p.get(u))
                }
            }
            var f = B(this, a);
            if (!(f instanceof ta)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
            var g = this.g;
            d = B(this, d);
            var h = za(g);
            for (e(g, h); qb(h, b);) {
                var k = rb(h, d);
                if (k instanceof na) {
                    if ("break" === k.g) break;
                    if ("return" === k.g) return k
                }
                var n = za(g);
                e(h, n);
                qb(n, c);
                h = n
            }
        },
        qd = function(a) {
            a = B(this, a);
            var b = this.g,
                c = !1;
            if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
            return b.get(a)
        },
        wd = function(a, b) {
            var c;
            a = B(this, a);
            b = B(this, b);
            if (void 0 === a || null === a) throw Error("TypeError: cannot access property of " + a + ".");
            if (a instanceof sb || a instanceof ta || a instanceof nb) c = a.get(b);
            else if ("string" === typeof a) "length" === b ? c = a.length : pa(b) && (c = a[b]);
            else if (a instanceof yc) return;
            return c
        },
        xd = function(a, b) {
            return B(this, a) > B(this,
                b)
        },
        yd = function(a, b) {
            return B(this, a) >= B(this, b)
        },
        zd = function(a, b) {
            a = B(this, a);
            b = B(this, b);
            a instanceof yc && (a = a.Qa);
            b instanceof yc && (b = b.Qa);
            return a === b
        },
        Ad = function(a, b) {
            return !zd.call(this, a, b)
        },
        Bd = function(a, b, c) {
            var d = [];
            B(this, a) ? d = B(this, b) : c && (d = B(this, c));
            var e = rb(this.g, d);
            if (e instanceof na) return e
        },
        Cd = function(a, b) {
            return B(this, a) < B(this, b)
        },
        Dd = function(a, b) {
            return B(this, a) <= B(this, b)
        },
        Ed = function(a, b) {
            return B(this, a) % B(this, b)
        },
        Fd = function(a, b) {
            return B(this, a) * B(this, b)
        },
        Gd = function(a) {
            return -B(this,
                a)
        },
        Hd = function(a) {
            return !B(this, a)
        },
        Id = function(a, b) {
            return !ed.call(this, a, b)
        },
        Jd = function() {
            return null
        },
        Kd = function(a, b) {
            return B(this, a) || B(this, b)
        },
        Ld = function(a, b) {
            var c = B(this, a);
            B(this, b);
            return c
        },
        Md = function(a) {
            return B(this, a)
        },
        Nd = function(a) {
            return Array.prototype.slice.apply(arguments)
        },
        Od = function(a) {
            return new na("return", B(this, a))
        },
        Pd = function(a, b, c) {
            a = B(this, a);
            b = B(this, b);
            c = B(this, c);
            if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + " of " + a + ".");
            (a instanceof nb || a instanceof ta || a instanceof sb) && a.set(b, c);
            return c
        },
        Qd = function(a, b) {
            return B(this, a) - B(this, b)
        },
        Rd = function(a, b, c) {
            a = B(this, a);
            var d = B(this, b),
                e = B(this, c);
            if (!Ia(d) || !Ia(e)) throw Error("Error: Malformed switch instruction.");
            for (var f, g = !1, h = 0; h < d.length; h++)
                if (g || a === B(this, d[h]))
                    if (f = B(this, e[h]), f instanceof na) {
                        var k = f.g;
                        if ("break" === k) return;
                        if ("return" === k || "continue" === k) return f
                    } else g = !0;
            if (e.length === d.length + 1 && (f = B(this, e[e.length - 1]), f instanceof na && ("return" === f.g || "continue" ===
                    f.g))) return f
        },
        Sd = function(a, b, c) {
            return B(this, a) ? B(this, b) : B(this, c)
        },
        be = function(a) {
            a = B(this, a);
            return a instanceof nb ? "function" : typeof a
        },
        ce = function(a) {
            for (var b = this.g, c = 0; c < arguments.length; c++) {
                var d = arguments[c];
                "string" !== typeof d || b.add(d, void 0)
            }
        },
        de = function(a, b, c, d) {
            var e = B(this, d);
            if (B(this, c)) {
                var f = rb(this.g, e);
                if (f instanceof na) {
                    if ("break" === f.g) return;
                    if ("return" === f.g) return f
                }
            }
            for (; B(this, a);) {
                var g = rb(this.g, e);
                if (g instanceof na) {
                    if ("break" === g.g) break;
                    if ("return" === g.g) return g
                }
                B(this,
                    b)
            }
        },
        ee = function(a) {
            return ~Number(B(this, a))
        },
        fe = function(a, b) {
            return Number(B(this, a)) << Number(B(this, b))
        },
        ge = function(a, b) {
            return Number(B(this, a)) >> Number(B(this, b))
        },
        he = function(a, b) {
            return Number(B(this, a)) >>> Number(B(this, b))
        },
        ie = function(a, b) {
            return Number(B(this, a)) & Number(B(this, b))
        },
        je = function(a, b) {
            return Number(B(this, a)) ^ Number(B(this, b))
        },
        ke = function(a, b) {
            return Number(B(this, a)) | Number(B(this, b))
        };
    var me = function() {
        this.g = new ub;
        le(this)
    };
    me.prototype.execute = function(a) {
        return ne(this.g.o(a))
    };
    var oe = function(a, b, c) {
            return ne(a.g.C(b, c))
        },
        le = function(a) {
            var b = function(d, e) {
                wb(a.g, d, String(e))
            };
            b("control", 49);
            b("fn", 51);
            b("list", 7);
            b("map", 8);
            b("undefined", 44);
            var c = function(d, e) {
                vb(a.g, String(d), e)
            };
            c(0, Qc);
            c(1, Rc);
            c(2, Sc);
            c(3, Tc);
            c(53, Uc);
            c(4, Zc);
            c(5, $c);
            c(52, ad);
            c(6, bd);
            c(9, $c);
            c(50, cd);
            c(10, dd);
            c(12, ed);
            c(13, fd);
            c(47, id);
            c(54, jd);
            c(55, kd);
            c(63, pd);
            c(64, md);
            c(65, nd);
            c(66, od);
            c(15, qd);
            c(16, wd);
            c(17, wd);
            c(18, xd);
            c(19, yd);
            c(20, zd);
            c(21, Ad);
            c(22, Bd);
            c(23, Cd);
            c(24, Dd);
            c(25, Ed);
            c(26, Fd);
            c(27,
                Gd);
            c(28, Hd);
            c(29, Id);
            c(45, Jd);
            c(30, Kd);
            c(32, Ld);
            c(33, Ld);
            c(34, Md);
            c(35, Md);
            c(46, Nd);
            c(36, Od);
            c(43, Pd);
            c(37, Qd);
            c(38, Rd);
            c(39, Sd);
            c(40, be);
            c(41, ce);
            c(42, de);
            c(58, ee);
            c(57, fe);
            c(60, ge);
            c(61, he);
            c(56, ie);
            c(62, je);
            c(59, ke)
        };

    function ne(a) {
        if (a instanceof na || a instanceof nb || a instanceof ta || a instanceof sb || a instanceof yc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a
    };
    var pe = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            zh: a("consent"),
            Wd: a("consent_always_fire"),
            Ff: a("convert_case_to"),
            Gf: a("convert_false_to"),
            Hf: a("convert_null_to"),
            If: a("convert_true_to"),
            Jf: a("convert_undefined_to"),
            bk: a("debug_mode_metadata"),
            ck: a("event_data_overrides"),
            yb: a("function"),
            ii: a("instance_name"),
            mi: a("live_only"),
            ni: a("malware_disabled"),
            oi: a("metadata"),
            fk: a("original_activity_id"),
            gk: a("original_vendor_template_id"),
            vi: a("once_per_event"),
            ng: a("once_per_load"),
            ik: a("priority_override"),
            jk: a("respected_consent_types"),
            rg: a("setup_tags"),
            sg: a("tag_id"),
            ug: a("teardown_tags")
        }
    }();
    var Qe;
    var Re = [],
        Se = [],
        Te = [],
        Ue = [],
        Ve = [],
        We = {},
        Xe, Ye, Ze, $e = function(a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        af = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = We[c],
                f = {},
                g;
            for (g in a)
                if (a.hasOwnProperty(g))
                    if (0 === g.indexOf("vtp_")) e && d && d.Gg && d.Gg(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g];
                    else if (g === pe.Wd.toString() && a[g]) {}
            e && d && d.Fg && (f.vtp_gtmCachedValues = d.Fg);
            return void 0 !== e ? e(f) : Qe(c, f, b)
        },
        cf = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = bf(a[e], b, c));
            return d
        },
        bf = function(a, b, c) {
            if (Ia(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(bf(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = Re[f];
                        if (!g || b.ff(g)) return;
                        c[f] = !0;
                        try {
                            var h = cf(g, b, c);
                            h.vtp_gtmEventId = b.id;
                            d = af(h, {
                                event: b,
                                index: f,
                                type: 2
                            });
                            Ze && (d = Ze.Mi(d, h))
                        } catch (y) {
                            b.Xg && b.Xg(y, Number(f)), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var k = 1; k < a.length; k += 2) d[bf(a[k], b, c)] = bf(a[k + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var n = !1, p = 1; p < a.length; p++) {
                            var r = bf(a[p], b, c);
                            Ye && (n = n || r === Ye.td);
                            d.push(r)
                        }
                        return Ye && n ? Ye.Qi(d) : d.join("");
                    case "escape":
                        d = bf(a[1], b, c);
                        if (Ye && Ia(a[1]) && "macro" ===
                            a[1][0] && Ye.kj(a)) return Ye.Cj(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) qe[a[t]] && (d = qe[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!Ue[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            Ng: a[2],
                            index: u
                        };
                    case "zb":
                        var q = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        q["function"] = a[1];
                        var v = df(q, b, c),
                            w = !!a[4];
                        return w || 2 !== v ? w !== (1 === v) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        df = function(a, b, c) {
            try {
                return Xe(cf(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var ef = function(a, b, c) {
        var d;
        d = Error.call(this);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.o = a;
        this.g = c
    };
    ka(ef, Error);

    function ff(a, b) {
        if (Ia(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++) ff(a[c], b[c])
        }
    };
    var gf = function(a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.s = a;
        this.o = b;
        this.g = []
    };
    ka(gf, Error);
    var jf = function() {
        return function(a, b) {
            a instanceof gf || (a = new gf(a, hf));
            b && a.g.push(b);
            throw a;
        }
    };

    function hf(a) {
        if (!a.length) return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; 0 < b; b--) Ha(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };
    var mf = function(a) {
            function b(t) {
                for (var u = 0; u < t.length; u++) d[t[u]] = !0
            }
            for (var c = [], d = [], e = kf(a), f = 0; f < Se.length; f++) {
                var g = Se[f],
                    h = lf(g, e);
                if (h) {
                    for (var k = g.add || [], n = 0; n < k.length; n++) c[k[n]] = !0;
                    b(g.block || [])
                } else null === h && b(g.block || []);
            }
            for (var p = [], r = 0; r < Ue.length; r++) c[r] && !d[r] && (p[r] = !0);
            return p
        },
        lf = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var h = b(f[g]);
                if (2 === h) return null;
                if (1 === h) return !1
            }
            return !0
        },
        kf = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = df(Te[c], a));
                return b[c]
            }
        };
    var nf = {
        Mi: function(a, b) {
            b[pe.Ff] && "string" === typeof a && (a = 1 == b[pe.Ff] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(pe.Hf) && null === a && (a = b[pe.Hf]);
            b.hasOwnProperty(pe.Jf) && void 0 === a && (a = b[pe.Jf]);
            b.hasOwnProperty(pe.If) && !0 === a && (a = b[pe.If]);
            b.hasOwnProperty(pe.Gf) && !1 === a && (a = b[pe.Gf]);
            return a
        }
    };
    var of = function() {
        this.g = {}
    };

    function pf(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    f = a[e].call(void 0, b, c, d), g += "."
                } catch (h) {
                    g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
                }
                if (!f) throw new ef(c, d, g);
            }
    }

    function qf(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.g[d],
                    f = a.g.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    pf(e, b, d, g);
                    pf(f, b, d, g)
                }
            }
        }
    };
    var tf = function() {
            var a = data.permissions || {},
                b = K.J,
                c = this;
            this.o = new of ;
            this.g = {};
            var d = {},
                e = qf(this.o, b, function() {
                    var f = arguments[0];
                    return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
                });
            Qa(a, function(f, g) {
                var h = {};
                Qa(g, function(k, n) {
                    var p = rf(k, n);
                    h[k] = p.assert;
                    d[k] || (d[k] = p.R)
                });
                c.g[f] = function(k, n) {
                    var p = h[k];
                    if (!p) throw sf(k, {}, "The requested permission " + k + " is not configured.");
                    var r = Array.prototype.slice.call(arguments, 0);
                    p.apply(void 0, r);
                    e.apply(void 0, r)
                }
            })
        },
        vf =
        function(a) {
            return uf.g[a] || function() {}
        };

    function rf(a, b) {
        var c = $e(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = sf;
        try {
            return af(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new ef(e, {}, "Permission " + e + " is unknown.");
                },
                R: function() {
                    for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
                    return e
                }
            }
        }
    }

    function sf(a, b, c) {
        return new ef(a, b, c)
    };
    var wf = !1;
    var xf = {};
    xf.Zj = Ta('');
    xf.Ti = Ta('');
    var yf = wf,
        zf = xf.Ti,
        Af = xf.Zj;
    var Bf = function(a, b) {
        var c = String(a);
        return c
    };
    var Gf = function(a) {
            var b = {},
                c = 0;
            Qa(a, function(e, f) {
                if (void 0 !== f)
                    if (f = Bf(f, 100), Cf.hasOwnProperty(e)) b[Cf[e]] = Df(f);
                    else if (Ef.hasOwnProperty(e)) {
                    var g = Ef[e],
                        h = Df(f);
                    b.hasOwnProperty(g) || (b[g] = h)
                } else if ("category" === e)
                    for (var k = Df(f).split("/", 5), n = 0; n < k.length; n++) {
                        var p = Ff[n],
                            r = k[n];
                        b.hasOwnProperty(p) || (b[p] = r)
                    } else 10 > c && (b["k" + c] = Df(Bf(e, 40)), b["v" + c] = Df(f), c++)
            });
            var d = [];
            Qa(b, function(e, f) {
                d.push("" + e + f)
            });
            return d.join("~")
        },
        Df = function(a) {
            return ("" + a).replace(/~/g, function() {
                return "~~"
            })
        },
        Cf = {
            item_id: "id",
            item_name: "nm",
            item_brand: "br",
            item_category: "ca",
            item_category2: "c2",
            item_category3: "c3",
            item_category4: "c4",
            item_category5: "c5",
            item_variant: "va",
            price: "pr",
            quantity: "qt",
            coupon: "cp",
            item_list_name: "ln",
            index: "lp",
            item_list_id: "li",
            discount: "ds",
            affiliation: "af",
            promotion_id: "pi",
            promotion_name: "pn",
            creative_name: "cn",
            creative_slot: "cs",
            location_id: "lo"
        },
        Ef = {
            id: "id",
            name: "nm",
            brand: "br",
            variant: "va",
            list_name: "ln",
            list_position: "lp",
            list: "ln",
            position: "lp",
            creative: "cn"
        },
        Ff = ["ca",
            "c2", "c3", "c4", "c5"
        ];
    var Hf = function(a) {
            var b = [];
            Qa(a, function(c, d) {
                null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
            });
            return b.join("&")
        },
        If = function(a, b, c, d) {
            this.Ua = a.Ua;
            this.Ib = a.Ib;
            this.M = a.M;
            this.o = b;
            this.C = c;
            this.s = Hf(a.Ua);
            this.g = Hf(a.M);
            this.F = d ? this.g.length : 0;
            if (16384 < this.F) throw Error("EVENT_TOO_LARGE");
        };
    var Jf = function() {
        this.events = [];
        this.g = this.Ua = "";
        this.s = 0;
        this.o = !1
    };
    Jf.prototype.add = function(a) {
        return this.C(a) ? (this.events.push(a), this.Ua = a.s, this.g = a.o, this.s += a.F, this.o = a.C, !0) : !1
    };
    Jf.prototype.C = function(a) {
        var b = 20 > this.events.length && 16384 > a.F + this.s,
            c = this.Ua === a.s && this.g === a.o && this.o === a.C;
        return 0 == this.events.length || b && c
    };
    var Kf = function(a, b) {
            Qa(a, function(c, d) {
                null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
            })
        },
        Lf = function(a, b) {
            var c = [];
            a.s && c.push(a.s);
            b && c.push("_s=" + b);
            Kf(a.Ib, c);
            var d = !1;
            a.g && (c.push(a.g), d = !0);
            var e = c.join("&"),
                f = "",
                g = e.length + a.o.length + 1;
            d && 2048 < g && (f = c.pop(), e = c.join("&"));
            return {
                sf: e,
                body: f
            }
        },
        Mf = function(a, b) {
            var c = a.events;
            if (1 == c.length) return Lf(c[0], b);
            var d = [];
            a.Ua && d.push(a.Ua);
            for (var e = {}, f = 0; f < c.length; f++) Qa(c[f].Ib, function(u, q) {
                null != q && (e[u] = e[u] || {}, e[u][String(q)] =
                    e[u][String(q)] + 1 || 1)
            });
            var g = {};
            Qa(e, function(u, q) {
                var v, w = -1,
                    y = 0;
                Qa(q, function(x, z) {
                    y += z;
                    var A = (x.length + u.length + 2) * (z - 1);
                    A > w && (v = x, w = A)
                });
                y == c.length && (g[u] = v)
            });
            Kf(g, d);
            b && d.push("_s=" + b);
            for (var h = d.join("&"), k = [], n = {}, p = 0; p < c.length; n = {
                    ad: n.ad
                }, p++) {
                var r = [];
                n.ad = {};
                Qa(c[p].Ib, function(u) {
                    return function(q, v) {
                        g[q] != "" + v && (u.ad[q] = v)
                    }
                }(n));
                c[p].g && r.push(c[p].g);
                Kf(n.ad, r);
                k.push(r.join("&"))
            }
            var t = k.join("\r\n");
            return {
                sf: h,
                body: t
            }
        };
    var ag = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
        bg = {
            Fn: "function",
            DustMap: "Object",
            List: "Array"
        },
        P = function(a, b, c) {
            for (var d = 0; d < b.length; d++) {
                var e = ag.exec(b[d]);
                if (!e) throw Error("Internal Error in " + a);
                var f = e[1],
                    g = "!" === e[2],
                    h = e[3],
                    k = c[d],
                    n = typeof k;
                if (null === k || "undefined" === n) {
                    if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
                } else if ("*" !== h) {
                    var p = typeof k;
                    k instanceof nb ? p = "Fn" : k instanceof ta ? p = "List" : k instanceof sb ? p = "DustMap" :
                        k instanceof yc && (p = "OpaqueValue");
                    if (p != h) throw Error("Error in " + a + ". Argument " + f + " has type " + p + ", which does not match required type " + (bg[h] || h) + ".");
                }
            }
        };

    function cg(a) {
        return "" + a
    }

    function dg(a, b) {
        var c = [];
        return c
    };
    var eg = function(a, b) {
            var c = new nb(a, function() {
                for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = B(this, d[e]);
                return b.apply(this, d)
            });
            c.Ab();
            return c
        },
        fg = function(a, b) {
            var c = new sb,
                d;
            for (d in b)
                if (b.hasOwnProperty(d)) {
                    var e = b[d];
                    Da(e) ? c.set(d, eg(a + "_" + d, e)) : (Ha(e) || Ga(e) || "boolean" == typeof e) && c.set(d, e)
                }
            c.Ab();
            return c
        };
    var gg = function(a, b) {
        P(G(this), ["apiName:!string", "message:?string"], arguments);
        var c = {},
            d = new sb;
        return d = fg("AssertApiSubject", c)
    };
    var hg = function(a, b) {
        P(G(this), ["actual:?*", "message:?string"], arguments);
        var c = {},
            d = new sb;
        return d = fg("AssertThatSubject", c)
    };

    function ig(a) {
        return function() {
            for (var b = [], c = this.g, d = 0; d < arguments.length; ++d) b.push(Jc(arguments[d], c));
            return Ic(a.apply(null, b))
        }
    }
    var kg = function() {
        for (var a = Math, b = jg, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = ig(a[e].bind(a)))
        }
        return c
    };
    var lg = function(a) {
        var b;
        return b
    };
    var mg = function(a) {
        var b;
        return b
    };
    var ng = function(a) {
        return encodeURI(a)
    };
    var og = function(a) {
        return encodeURIComponent(a)
    };
    var pg = function(a) {
        P(G(this), ["message:?string"], arguments);
    };
    var qg = function(a, b) {
        P(G(this), ["min:!number", "max:!number"], arguments);
        return Ka(a, b)
    };
    var rg = function(a, b, c) {
        var d = a.g.g;
        if (!d) throw Error("Missing program state.");
        d.Fi.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var sg = function() {
        rg(this, "read_container_data");
        var a = new sb;
        a.set("containerId", 'G-QWGR6M5L7L');
        a.set("version", '1');
        a.set("environmentName", '');
        a.set("debugMode", yf);
        a.set("previewMode", Af);
        a.set("environmentMode", zf);
        a.Ab();
        return a
    };
    var tg = {};
    tg.sstECEnableData = !0;
    tg.enableAdsEc = !0;
    tg.sstFFConversionEnabled = !0;
    tg.sstEnableAuid = !0;
    tg.enableGbraidUpdate = !0;
    tg.requireGtagUserDataTos = !0;
    tg.enableGlobalEventDeveloperIds = !1;
    tg.enableLandingPageBeaconRollback = !1;

    function ug() {
        return Ic(tg)
    };
    var vg = function() {
        return (new Date).getTime()
    };
    var wg = function(a) {
        if (null === a) return "null";
        if (a instanceof ta) return "array";
        if (a instanceof nb) return "function";
        if (a instanceof yc) {
            a = a.Qa;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var xg = function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (yf || Af) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return Ic(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(Jc(c))
            })
        }
    };
    var yg = function(a) {
        return Sa(Jc(a, this.g))
    };
    var zg = function(a) {
        return Number(Jc(a, this.g))
    };
    var Ag = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    };
    var Bg = function(a, b, c) {
        var d = null,
            e = !1;
        return e ? d : null
    };
    var jg = "floor ceil round max min abs pow sqrt".split(" ");
    var Cg = function() {
            var a = {};
            return {
                $i: function(b) {
                    return a.hasOwnProperty(b) ? a[b] : void 0
                },
                Sj: function(b, c) {
                    a[b] = c
                },
                reset: function() {
                    a = {}
                }
            }
        },
        Dg = function(a, b) {
            P(G(this), ["apiName:!string", "mock:?*"], arguments);
        };
    var Eg = {};
    Eg.keys = function(a) {
        return new ta
    };
    Eg.values = function(a) {
        return new ta
    };
    Eg.entries = function(a) {
        return new ta
    };
    Eg.freeze = function(a) {
        return a
    };
    Eg.delete = function(a, b) {
        return !1
    };
    var Gg = function() {
        this.g = {};
        this.o = {};
    };
    Gg.prototype.get = function(a, b) {
        var c = this.g.hasOwnProperty(a) ? this.g[a] : void 0;
        return c
    };
    Gg.prototype.add = function(a, b, c) {
        if (this.g.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
        if (this.o.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.g[a] = c ? void 0 : Da(b) ? eg(a, b) : fg(a, b)
    };
    var Ig = function(a, b, c) {
        if (a.o.hasOwnProperty(b)) throw "Attempting to add a private function which already exists: " + b + ".";
        if (a.g.hasOwnProperty(b)) throw "Attempting to add a private function with an existing API name: " + b + ".";
        a.o[b] = Da(c) ? eg(b, c) : fg(b, c)
    };

    function Hg(a, b) {
        var c = void 0;
        return c
    };

    function Jg() {
        var a = {};
        return a
    };
    var Q = {
        Wb: "_ee",
        zd: "_syn_or_mod",
        lk: "_uei",
        ze: "_eu",
        hk: "_pci",
        Rb: "event_callback",
        hd: "event_timeout",
        za: "gtag.config",
        Ma: "gtag.get",
        xa: "purchase",
        Ob: "refund",
        ob: "begin_checkout",
        Mb: "add_to_cart",
        Nb: "remove_from_cart",
        Ih: "view_cart",
        Lf: "add_to_wishlist",
        ya: "view_item",
        pb: "view_promotion",
        dd: "select_promotion",
        $d: "select_item",
        Ya: "view_item_list",
        Kf: "add_payment_info",
        Hh: "add_shipping_info",
        Na: "value_key",
        $a: "value_callback",
        Ea: "allow_ad_personalization_signals",
        uc: "restricted_data_processing",
        nc: "allow_google_signals",
        qa: "cookie_expires",
        Qb: "cookie_update",
        vc: "session_duration",
        nd: "session_engaged_time",
        Pa: "user_properties",
        sa: "transport_url",
        V: "ads_data_redaction",
        Aa: "user_data",
        sc: "first_party_collection",
        D: "ad_storage",
        I: "analytics_storage",
        Xd: "region",
        Ef: "wait_for_update",
        oa: "conversion_linker",
        Fa: "conversion_cookie_prefix",
        ia: "value",
        fa: "currency",
        jg: "trip_type",
        ba: "items",
        bg: "passengers",
        ce: "allow_custom_scripts",
        wc: "session_id",
        gg: "quantity",
        cb: "transaction_id",
        tb: "language",
        fd: "country",
        ed: "allow_enhanced_conversions",
        ie: "aw_merchant_id",
        fe: "aw_feed_country",
        he: "aw_feed_language",
        ee: "discount",
        X: "developer_id",
        od: "delivery_postal_code",
        pe: "estimated_delivery_date",
        ne: "shipping",
        ve: "new_customer",
        je: "customer_lifetime_value",
        oe: "enhanced_conversions",
        mc: "page_view",
        la: "linker",
        P: "domains",
        ub: "decorate_forms",
        Xf: "enhanced_conversions_automatic_settings",
        Rh: "auto_detection_enabled",
        Yf: "ga_temp_client_id",
        ae: "user_engagement",
        Ch: "app_remove",
        Dh: "app_store_refund",
        Eh: "app_store_subscription_cancel",
        Fh: "app_store_subscription_convert",
        Gh: "app_store_subscription_renew",
        Jh: "first_open",
        Kh: "first_visit",
        Lh: "in_app_purchase",
        Mh: "session_start",
        Nh: "user_data_login",
        Oh: "user_data_logout",
        Ph: "allow_display_features",
        oc: "campaign",
        Nf: "campaign_content",
        Of: "campaign_id",
        Pf: "campaign_medium",
        Qf: "campaign_name",
        Rf: "campaign_source",
        Sf: "campaign_term",
        qb: "client_id",
        ka: "cookie_domain",
        Pb: "cookie_name",
        Za: "cookie_path",
        Ga: "cookie_flags",
        qc: "custom_map",
        se: "groups",
        ag: "non_interaction",
        vb: "page_location",
        we: "page_path",
        Oa: "page_referrer",
        ld: "page_title",
        Vb: "send_page_view",
        wb: "send_to",
        xe: "session_engaged",
        Zf: "_logged_in_state",
        ye: "session_number",
        ei: "tracking_id",
        eb: "url_passthrough",
        Tb: "accept_incoming",
        Ub: "url_position",
        eg: "phone_conversion_number",
        cg: "phone_conversion_callback",
        dg: "phone_conversion_css_class",
        fg: "phone_conversion_options",
        bi: "phone_conversion_ids",
        ai: "phone_conversion_country_code",
        Mf: "aw_remarketing",
        de: "aw_remarketing_only",
        be: "gclid",
        Qh: "auid",
        Wh: "affiliation",
        Wf: "tax",
        me: "list_name",
        Vf: "checkout_step",
        Uf: "checkout_option",
        Xh: "coupon",
        Yh: "promotions",
        xb: "user_id",
        ci: "retoken",
        ra: "cookie_prefix",
        Tf: "disable_merchant_reported_purchases",
        Vh: "dc_natural_search",
        Uh: "dc_custom_params",
        $f: "method",
        di: "search_term",
        Th: "content_type",
        $h: "optimize_id",
        Zh: "experiments",
        ab: "google_signals",
        kd: "google_tld",
        pd: "update",
        qe: "firebase_id",
        Sb: "ga_restrict_domain",
        gd: "event_settings",
        ke: "dynamic_event_settings",
        xc: "user_data_settings",
        hg: "screen_name",
        sb: "_x_19",
        rb: "_ecid",
        jd: "_x_20",
        ue: "internal_traffic_results",
        ig: "traffic_type",
        md: "referral_exclusion_definition",
        te: "ignore_referrer",
        Sh: "content_group"
    };
    var Kg = {};
    Q.fi = Object.freeze((Kg[Q.Ea] = 1, Kg[Q.ed] = 1, Kg[Q.nc] = 1, Kg[Q.ba] = 1, Kg[Q.ka] = 1, Kg[Q.qa] = 1, Kg[Q.Ga] = 1, Kg[Q.Pb] = 1, Kg[Q.Za] = 1, Kg[Q.ra] = 1, Kg[Q.Qb] = 1, Kg[Q.qc] = 1, Kg[Q.X] = 1, Kg[Q.ke] = 1, Kg[Q.Rb] = 1, Kg[Q.gd] = 1, Kg[Q.hd] = 1, Kg[Q.sc] = 1, Kg[Q.Sb] = 1, Kg[Q.ab] = 1, Kg[Q.kd] = 1, Kg[Q.se] = 1, Kg[Q.ue] = 1, Kg[Q.la] = 1, Kg[Q.md] = 1, Kg[Q.uc] = 1, Kg[Q.Vb] = 1, Kg[Q.wb] = 1, Kg[Q.vc] = 1, Kg[Q.nd] = 1, Kg[Q.od] = 1, Kg[Q.sa] = 1, Kg[Q.pd] = 1, Kg[Q.xc] = 1, Kg[Q.Pa] = 1, Kg[Q.ze] = 1, Kg));
    Q.kg = Object.freeze([Q.vb, Q.Oa, Q.ld, Q.tb, Q.hg, Q.xb, Q.qe, Q.Sh]);
    var Lg = {};
    Q.hi = Object.freeze((Lg[Q.Ch] = 1, Lg[Q.Dh] = 1, Lg[Q.Eh] = 1, Lg[Q.Fh] = 1, Lg[Q.Gh] = 1, Lg[Q.Jh] = 1, Lg[Q.Kh] = 1, Lg[Q.Lh] = 1, Lg[Q.Mh] = 1, Lg[Q.ae] = 1, Lg));
    var Mg = {};
    Q.lg = Object.freeze((Mg[Q.Kf] = 1, Mg[Q.Hh] = 1, Mg[Q.Mb] = 1, Mg[Q.Nb] = 1, Mg[Q.Ih] = 1, Mg[Q.ob] = 1, Mg[Q.$d] = 1, Mg[Q.Ya] = 1, Mg[Q.dd] = 1, Mg[Q.pb] = 1, Mg[Q.xa] = 1, Mg[Q.Ob] = 1, Mg[Q.ya] = 1, Mg[Q.Lf] = 1, Mg));
    Q.Be = Object.freeze([Q.Ea, Q.nc, Q.Qb]);
    Q.si = Object.freeze([].concat(Q.Be));
    Q.Ce = Object.freeze([Q.qa, Q.hd, Q.vc, Q.nd]);
    Q.ui = Object.freeze([].concat(Q.Ce));
    var Og = {},
        Pg = function(a, b) {
            Og[a] = Og[a] || [];
            Og[a][b] = !0
        },
        Qg = function(a) {
            for (var b = [], c = Og[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        };
    var Rg = function(a) {
        Pg("GTM", a)
    };
    var K = {},
        Sg = null,
        Tg = Math.random();
    K.J = "G-QWGR6M5L7L";
    K.xd = "c10";
    K.W = "dataLayer";
    K.Bh = "ChEIgIa3jQYQuNCQurbU69rSARIlAHH898pfWJfcpkPwyQvWq9sJjZsvAibgdXtMZqInPQlFuJBnxBoCy8I\x3d";
    var Ug = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        Vg = {
            __paused: !0,
            __tg: !0
        },
        Wg;
    for (Wg in Ug) Ug.hasOwnProperty(Wg) && (Vg[Wg] = !0);
    K.Yd = "www.googletagmanager.com";
    var Xg = K.Yd + "/gtm.js";
    Xg = K.Yd + "/gtag/js";
    var Yg = Xg,
        Zg = Ta(""),
        $g = null,
        ah = null,
        bh = "https://www.googletagmanager.com/a?id=" + K.J + "&cv=1",
        ch = {},
        dh = {},
        eh = function() {
            var a = Sg.sequence || 1;
            Sg.sequence = a + 1;
            return a
        };
    K.Ah = "";
    var fh = "";
    K.yd = fh;
    var gh = {},
        hh = new La,
        ih = {},
        jh = {},
        mh = {
            name: K.W,
            set: function(a, b) {
                Hc(ib(a, b), ih);
                kh()
            },
            get: function(a) {
                return lh(a, 2)
            },
            reset: function() {
                hh = new La;
                ih = {};
                kh()
            }
        },
        lh = function(a, b) {
            return 2 != b ? hh.get(a) : nh(a)
        },
        nh = function(a, b) {
            var c = a.split(".");
            b = b || [];
            for (var d = ih, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        oh = function(a, b) {
            jh.hasOwnProperty(a) || (hh.set(a, b), Hc(ib(a, b), ih), kh())
        },
        ph = function() {
            for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist",
                    "gtm.blacklist", "tagTypeBlacklist"
                ], b = 0; b < a.length; b++) {
                var c = a[b],
                    d = lh(c, 1);
                if (Ia(d) || Gc(d)) d = Hc(d);
                jh[c] = d
            }
        },
        kh = function(a) {
            Qa(jh, function(b, c) {
                hh.set(b, c);
                Hc(ib(b, void 0), ih);
                Hc(ib(b, c), ih);
                a && delete jh[b]
            })
        },
        rh = function(a, b, c) {
            gh[a] = gh[a] || {};
            gh[a][b] = qh(b, c)
        },
        qh = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? nh(a) : hh.get(a);
            "array" === Cc(d) || "object" === Cc(d) ? c = Hc(d) : c = d;
            return c
        },
        sh = function(a, b) {
            if (gh[a]) return gh[a][b]
        },
        th = function(a, b) {
            gh[a] && delete gh[a][b]
        };
    var uh = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        vh = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        wh = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        xh = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var yh = function() {
            var a = !1;
            a = !0;
            return a
        },
        Ah = function(a) {
            var b = lh("gtm.allowlist") || lh("gtm.whitelist");
            b && Rg(9);
            yh() && (b = "google gtagfl lcl zone oid op".split(" "));
            var c = b && gb(Xa(b), vh),
                d = lh("gtm.blocklist") ||
                lh("gtm.blacklist");
            d || (d = lh("tagTypeBlacklist")) && Rg(3);
            d ? Rg(8) : d = [];
            zh() && (d = Xa(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Xa(d).indexOf("google") && Rg(2);
            var e = d && gb(Xa(d), wh),
                f = {};
            return function(g) {
                var h = g && g[pe.yb];
                if (!h || "string" != typeof h) return !0;
                h = h.replace(/^_*/, "");
                if (void 0 !== f[h]) return f[h];
                var k = dh[h] || [],
                    n = a(h, k);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(h))
                            if (k && 0 < k.length)
                                for (var r = 0; r < k.length; r++) {
                                    if (0 > c.indexOf(k[r])) {
                                        Rg(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var t = !1;
                if (d) {
                    var u = 0 <= e.indexOf(h);
                    if (u) t = u;
                    else {
                        var q = Ma(e, k || []);
                        q && Rg(10);
                        t = q
                    }
                }
                var v = !n || t;
                v || !(0 <= k.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = Ma(e, xh));
                return f[h] = v
            }
        },
        zh = function() {
            return uh.test(m.location && m.location.hostname)
        };
    var Bh = {
            active: !0,
            isAllowed: function() {
                return !0
            }
        },
        Ch = function(a) {
            var b = Sg.zones;
            return b ? b.checkState(K.J, a) : Bh
        },
        Dh = function(a) {
            var b = Sg.zones;
            !b && a && (b = Sg.zones = a());
            return b
        };
    var Eh = function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    };
    var Fh = new Eh(1933),
        Gh = new Eh(1956, !0);
    var Ih = function() {
        var a = Hh,
            b = "df";
        if (a.df && a.hasOwnProperty(b)) return a.df;
        var c = new a;
        a.df = c;
        a.hasOwnProperty(b);
        return c
    };
    var Hh = function() {
            var a = {};
            this.o = function(b, c) {
                return null != a[b] ? a[b] : c
            };
            this.g = function(b) {
                a[b] = !0
            }
        },
        Jh = function(a) {
            return Ih().o(a.g, a.defaultValue)
        };
    var Kh = [];

    function Lh() {
        var a = Xb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Mh,
            update: Qh,
            addListener: Rh,
            notifyListeners: Sh,
            active: !1,
            usedDefault: !1
        });
        return a.ics
    }

    function Mh(a, b, c, d, e, f) {
        var g = Lh();
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries,
                k = h[a] || {},
                n = k.region,
                p = c && Ga(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var r = !!(f && 0 < f && void 0 === k.update),
                    t = {
                        region: p,
                        initial: "granted" === b,
                        update: k.update,
                        quiet: r
                    };
                if ("" !== d || !1 !== k.initial) h[a] = t;
                r && m.setTimeout(function() {
                    h[a] === t && t.quiet && (t.quiet = !1, Th(a), Sh(), Pg("TAGGING", 2))
                }, f)
            }
        }
    }

    function Qh(a, b) {
        var c = Lh();
        c.active = !0;
        if (void 0 != b) {
            var d = Uh(a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Uh(a);
            f.quiet ? (f.quiet = !1, Th(a)) : g !== d && Th(a)
        }
    }

    function Rh(a, b) {
        Kh.push({
            Ue: a,
            Wi: b
        })
    }

    function Th(a) {
        for (var b = 0; b < Kh.length; ++b) {
            var c = Kh[b];
            Ia(c.Ue) && -1 !== c.Ue.indexOf(a) && (c.ah = !0)
        }
    }

    function Sh(a) {
        for (var b = 0; b < Kh.length; ++b) {
            var c = Kh[b];
            if (c.ah) {
                c.ah = !1;
                try {
                    c.Wi({
                        consentEventId: a
                    })
                } catch (d) {}
            }
        }
    }
    var Uh = function(a) {
            var b = Lh().entries[a] || {};
            return void 0 !== b.update ? b.update : b.initial
        },
        Vh = function(a) {
            return (Lh().entries[a] || {}).initial
        },
        Wh = function(a) {
            return !(Lh().entries[a] || {}).quiet
        },
        Xh = function() {
            return Jh(Fh) ? Lh().active : !1
        },
        Yh = function() {
            return Lh().usedDefault
        },
        Zh = function(a, b) {
            Lh().addListener(a, b)
        },
        $h = function(a) {
            Lh().notifyListeners(a)
        },
        ai = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Wh(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Zh(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        bi = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var h = d[g];
                    !1 === Uh(h) || e[h] || (f.push(h), e[h] = !0)
                }
                return f
            }
            var d = Ga(b) ? [b] : b,
                e = {};
            c().length !== d.length && Zh(d, function(f) {
                var g = c();
                0 < g.length && (f.Ue = g, a(f))
            })
        };

    function ci() {}

    function di() {};

    function ei(a) {
        for (var b = [], c = 0; c < fi.length; c++) {
            var d = a(fi[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var fi = [Q.D, Q.I],
        gi = function(a) {
            var b = a[Q.Xd];
            b && Rg(40);
            var c = a[Q.Ef];
            c && Rg(41);
            for (var d = Ia(b) ? b : [b], e = {
                    hc: 0
                }; e.hc < d.length; e = {
                    hc: e.hc
                }, ++e.hc) Qa(a, function(f) {
                return function(g, h) {
                    if (g !== Q.Xd && g !== Q.Ef) {
                        var k = d[f.hc];
                        Lh().set(g, h, k, "BR", "BR-SP", c)
                    }
                }
            }(e))
        },
        hi = 0,
        ii = function(a, b) {
            Qa(a, function(e, f) {
                Lh().update(e, f)
            });
            $h(b);
            var c = bb(),
                d = c - hi;
            hi && 0 <= d && 1E3 > d && Rg(66);
            hi = c
        },
        ji = function(a) {
            var b = Uh(a);
            return void 0 != b ? b : !0
        },
        ki = function() {
            return "G1" + ei(Uh)
        },
        li = function() {
            return "G1" +
                ei(Vh)
        },
        mi = function(a, b) {
            Zh(a, b)
        },
        ni = function(a, b) {
            bi(a, b)
        },
        oi = function(a, b) {
            ai(a, b)
        };
    var qi = function(a) {
            return pi ? H.querySelectorAll(a) : null
        },
        ri = function(a, b) {
            if (!pi) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!H.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        si = !1;
    if (H.querySelectorAll) try {
        var ti = H.querySelectorAll(":root");
        ti && 1 == ti.length && ti[0] == H.documentElement && (si = !0)
    } catch (a) {}
    var pi = si;
    var ui = function(a) {
            return void 0 === a || null === a ? "" : Ga(a) ? Ya(String(a)) : "e0"
        },
        wi = function(a) {
            return a.replace(vi, "")
        },
        yi = function(a) {
            return xi(a.replace(/\s/g, ""))
        },
        xi = function(a) {
            return Ya(a.replace(zi, "").toLowerCase())
        },
        Bi = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return Ai.test(a) ? a : "e0"
        },
        Di = function(a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (Ci.test(c)) return c
            }
            return "e0"
        },
        Gi = function(a, b) {
            window.Promise || b([]);
            Promise.all(a.map(function(c) {
                return c.value && -1 !== Ei.indexOf(c.name) ? Fi(c.value).then(function(d) {
                    c.value = d
                }) : Promise.resolve()
            })).then(function() {
                b(a)
            }).catch(function() {
                b([])
            })
        },
        Fi = function(a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (m.crypto && m.crypto.subtle) try {
                var b = Hi(a);
                return m.crypto.subtle.digest("SHA-256", b).then(function(c) {
                    var d = Array.from(new Uint8Array(c)).map(function(e) {
                        return String.fromCharCode(e)
                    }).join("");
                    return m.btoa(d).replace(/\+/g,
                        "-").replace(/\//g, "_").replace(/=+$/, "")
                }).catch(function() {
                    return "e2"
                })
            } catch (c) {
                return Promise.resolve("e2")
            } else return Promise.resolve("e1")
        },
        Hi = function(a) {
            var b;
            if (m.TextEncoder) b = (new m.TextEncoder("utf-8")).encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        },
        zi = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        Ci = /^\S+@\S+\.\S+$/,
        Ai = /^\+\d{11,15}$/,
        vi = /[.~]/g,
        Ii = {},
        Ji = (Ii.email = "em", Ii.phone_number = "pn", Ii.first_name = "fn", Ii.last_name = "ln", Ii.street = "sa", Ii.city = "ct", Ii.region = "rg", Ii.country = "co", Ii.postal_code = "pc", Ii.error_code = "ec", Ii),
        Ki = function(a, b) {
            function c(n, p, r) {
                var t = n[p];
                Ia(t) || (t = [t]);
                for (var u = 0; u < t.length; ++u) {
                    var q = ui(t[u]);
                    "" !== q && f.push({
                        name: p,
                        value: r(q),
                        index: void 0
                    })
                }
            }

            function d(n, p, r, t) {
                var u = ui(n[p]);
                "" !== u && f.push({
                    name: p,
                    value: r(u),
                    index: t
                })
            }

            function e(n) {
                return function(p) {
                    Rg(64);
                    return n(p)
                }
            }
            var f = [];
            if ("https:" === m.location.protocol) {
                c(a, "email", Di);
                c(a, "phone_number", Bi);
                c(a, "first_name", e(yi));
                c(a, "last_name", e(yi));
                var g = a.home_address || {};
                c(g, "street", e(xi));
                c(g, "city", e(xi));
                c(g, "postal_code", e(wi));
                c(g, "region", e(xi));
                c(g, "country", e(wi));
                var h = a.address || {};
                Ia(h) || (h = [h]);
                for (var k = 0; k < h.length; k++) d(h[k], "first_name", yi, k), d(h[k], "last_name", yi, k), d(h[k], "street", xi, k), d(h[k], "city", xi, k), d(h[k], "postal_code", wi, k), d(h[k],
                    "region", xi, k), d(h[k], "country", wi, k);
                Gi(f, b)
            } else f.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }), b(f)
        },
        Li = function(a, b) {
            Ki(a, function(c) {
                for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                    var g = c[f].name,
                        h = c[f].value,
                        k = c[f].index,
                        n = Ji[g];
                    n && h && (-1 === Ei.indexOf(g) || /^e\d+$/.test(h) || /^[0-9A-Za-z_-]{43}$/.test(h)) && (void 0 !== k && (n += k), d.push(n + "." + h), e++)
                }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e)
            })
        },
        Mi = function(a) {
            if (m.Promise) try {
                return new Promise(function(b) {
                    Li(a,
                        function(c, d) {
                            b({
                                Qc: c,
                                qk: d
                            })
                        })
                })
            } catch (b) {}
        },
        Ei = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var Ni = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.globalConfig = {};
            this.remoteConfig = {};
            this.onSuccess = function() {};
            this.onFailure = function() {};
            this.setContainerTypeLoaded = function() {};
            this.getContainerTypeLoaded = function() {};
            this.eventId = void 0;
            this.isGtmEvent = !1
        },
        Oi = function(a) {
            var b = new Ni;
            b.eventModel = a;
            return b
        },
        Pi = function(a, b) {
            a.targetConfig = b;
            return a
        },
        Qi = function(a, b) {
            a.containerConfig = b;
            return a
        },
        Ri = function(a, b) {
            a.globalConfig = b;
            return a
        },
        Si = function(a,
            b) {
            a.remoteConfig = b;
            return a
        },
        Ti = function(a, b) {
            a.onSuccess = b;
            return a
        },
        Ui = function(a, b) {
            a.setContainerTypeLoaded = b;
            return a
        },
        Vi = function(a, b) {
            a.getContainerTypeLoaded = b;
            return a
        },
        Wi = function(a, b) {
            a.onFailure = b;
            return a
        };
    Ni.prototype.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a]
    };
    var Xi = function(a) {
            function b(d) {
                for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1
            }
            var c = {};
            b(a.eventModel);
            b(a.targetConfig);
            b(a.containerConfig);
            b(a.globalConfig);
            return Object.keys(c)
        },
        Yi = function(a, b, c) {
            function d(g) {
                Gc(g) && Qa(g, function(h, k) {
                    f = !0;
                    e[h] = k
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.remoteConfig[b]), d(a.globalConfig[b]), d(a.containerConfig[b]), d(a.targetConfig[b]));
            c && 2 !== c || d(a.eventModel[b]);
            return f ? e : void 0
        },
        Zi = function(a) {
            var b = [Q.oc, Q.Nf, Q.Of, Q.Pf, Q.Qf, Q.Rf, Q.Sf],
                c = {},
                d = !1,
                e = function(f) {
                    for (var g =
                            0; g < b.length; g++) void 0 !== f[b[g]] && (c[b[g]] = f[b[g]], d = !0);
                    return d
                };
            if (e(a.eventModel) || e(a.targetConfig) || e(a.containerConfig) || e(a.globalConfig)) return c;
            e(a.remoteConfig);
            return c
        },
        $i = function(a) {
            var b = [],
                c;
            for (c in a.eventModel) c !== Q.Wb && a.eventModel.hasOwnProperty(c) && void 0 !== a.eventModel[c] && b.push(c);
            return b
        };
    var aj, bj = !1;

    function cj() {
        bj = !0;
        aj = aj || {}
    }
    var dj = function(a) {
        bj || cj();
        return aj[a]
    };
    var ej = function(a) {
        if (H.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !m.getComputedStyle) return !0;
        var c = m.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var h = g.indexOf("opacity(");
                0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = m.getComputedStyle(d,
                null))
        }
        return !1
    };
    var nj = /:[0-9]+$/,
        oj = function(a, b, c, d) {
            for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
                var h = f[g].split("=");
                if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
                    var k = h.slice(1).join("=");
                    if (!c) return d ? k : decodeURIComponent(k).replace(/\+/g, " ");
                    e.push(d ? k : decodeURIComponent(k).replace(/\+/g, " "))
                }
            }
            return c ? e : void 0
        },
        rj = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = pj(a.protocol) || pj(m.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port :
                m.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || m.location.hostname).replace(nj, "").toLowerCase());
            return qj(a, b, c, d, e)
        },
        qj = function(a, b, c, d, e) {
            var f, g = pj(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = sj(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(nj, "").toLowerCase();
                    if (c) {
                        var h = /^www\d*\./.exec(f);
                        h && h[0] && (f = f.substr(h[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" ==
                        g ? 80 : "https" == g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || Pg("TAGGING", 1);
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var k = f.split("/");
                    0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = "");
                    f = k.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = oj(f, e, !1, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        pj = function(a) {
            return a ?
                a.replace(":", "").toLowerCase() : ""
        },
        sj = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        tj = function(a) {
            var b = H.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Pg("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(nj, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        uj = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !=
                        p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = tj(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                h = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === h[0] && (h = h.substring(1));
            g = c(g);
            h = c(h);
            "" !== g && (g = "?" + g);
            "" !== h && (h = "#" + h);
            var k = "" + f + g + h;
            "/" === k[k.length - 1] && (k = k.substring(0, k.length - 1));
            return k
        };
    var vj = {};
    var yj = function(a) {
            if (0 == a.length) return null;
            var b;
            b = wj(a, function(c) {
                return !xj.test(c.Ja)
            });
            b = wj(b, function(c) {
                return "INPUT" === c.element.tagName.toUpperCase()
            });
            b = wj(b, function(c) {
                return !ej(c.element)
            });
            return b[0]
        },
        wj = function(a, b) {
            if (1 >= a.length) return a;
            var c = a.filter(b);
            return 0 == c.length ? a : c
        },
        zj = function(a) {
            var b;
            if (a === H.body) b = "body";
            else {
                var c;
                if (a.id) c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a: {
                            var f = a.parentElement;
                            if (f) {
                                for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] === a) {
                                        e =
                                            g + 1;
                                        break a
                                    }
                                e = -1
                            } else e = 1
                        }
                        d = zj(a.parentElement) + ">:nth-child(" + e + ")"
                    } else d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        Aj = !0,
        Bj = !1;
    vj.xh = "false";
    var Cj = function(a) {
            if ("false" === vj.xh || !Aj) return !1;
            if (Bj) return !0;
            var b = dj("AW-" +
                a);
            return !!b && !!b.preAutoPii
        },
        Dj = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
        Ej = new RegExp(/@(gmail|googlemail)\./i),
        xj = new RegExp(/support|noreply/i),
        Fj = "SCRIPT STYLE IMG SVG PATH BR".split(" "),
        Gj = ["BR"],
        Hj = {},
        Ij = function(a) {
            a = a || {
                Od: !0,
                Pd: !0
            };
            a.jb = a.jb || {
                email: !0,
                phone: !0,
                Cg: !0
            };
            var b, c = a,
                d = !!c.Od + "." + !!c.Pd;
            c && c.Fc && c.Fc.length && (d += "." + c.Fc.join("."));
            c && c.jb && (d += "." + c.jb.email + "." + c.jb.phone + "." + c.jb.Cg);
            b = d;
            var e = Hj[b];
            if (e && 200 > bb() - e.timestamp) return e.result;
            var f;
            var g = [],
                h = H.body;
            if (h) {
                for (var k = h.querySelectorAll("*"), n = 0; n < k.length && 1E4 > n; n++) {
                    var p = k[n];
                    if (!(0 <= Fj.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                        for (var r = !1, t = 0; t < p.childElementCount && 1E4 > t; t++)
                            if (!(0 <= Gj.indexOf(p.children[t].tagName.toUpperCase()))) {
                                r = !0;
                                break
                            }
                        r || g.push(p)
                    }
                }
                f = {
                    elements: g,
                    status: 1E4 < k.length ? "2" : "1"
                }
            } else f = {
                elements: g,
                status: "4"
            };
            var u = f,
                q = u.status,
                v;
            if (a.jb && a.jb.email) {
                for (var w = u.elements, y = [], x = 0; x < w.length; x++) {
                    var z = w[x],
                        A = z.textContent;
                    "INPUT" === z.tagName.toUpperCase() &&
                        z.value && (A = z.value);
                    if (A) {
                        var C = A.match(Dj);
                        if (C) {
                            var E = C[0],
                                D;
                            if (m.location) {
                                var F = qj(m.location, "host", !0);
                                D = 0 <= E.toLowerCase().indexOf(F)
                            } else D = !1;
                            D || y.push({
                                element: z,
                                Ja: E
                            })
                        }
                    }
                }
                var S;
                var M = a && a.Fc;
                if (M && 0 !== M.length) {
                    for (var J = [], O = 0; O < y.length; O++) {
                        for (var N = !0, L = 0; L < M.length; L++) {
                            var V = M[L];
                            if (V && ri(y[O].element, V)) {
                                N = !1;
                                break
                            }
                        }
                        N && J.push(y[O])
                    }
                    S = J
                } else S = y;
                v = yj(S);
                10 < y.length && (q = "3")
            }
            var Z = [];
            if (v) {
                var W = v.element,
                    Ea = {
                        Ja: v.Ja,
                        tagName: W.tagName,
                        type: 1
                    };
                a.Od && (Ea.querySelector = zj(W));
                a.Pd &&
                    (Ea.isVisible = !ej(W));
                Z.push(Ea)
            }
            var Fa = {
                elements: Z,
                status: q
            };
            Hj[b] = {
                timestamp: bb(),
                result: Fa
            };
            return Fa
        },
        Jj = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.Ja.length + ":" + Ej.test(a.Ja)
        };
    var Kj = function(a, b, c) {
            if (c) {
                var d = c.selector_type,
                    e = String(c.value),
                    f;
                if ("js_variable" === d) {
                    e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                    for (var g = e.split(","), h = 0; h < g.length; h++) {
                        var k = g[h].trim();
                        if (k) {
                            if (0 === k.indexOf("dataLayer.")) f = lh(k.substring(10));
                            else {
                                var n = k.split(".");
                                f = m[n.shift()];
                                for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                            }
                            if (void 0 !== f) break
                        }
                    }
                } else if ("css_selector" === d && pi) {
                    var r = qi(e);
                    r && 0 < r.length && (f = hc(r[0]) || Ya(r[0].value))
                }
                f && (a[b] = f)
            }
        },
        Lj = function(a) {
            if (a) {
                var b = {};
                Kj(b, "email",
                    a.email);
                Kj(b, "phone_number", a.phone);
                b.address = [];
                for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
                    var e = {};
                    Kj(e, "first_name", c[d].first_name);
                    Kj(e, "last_name", c[d].last_name);
                    Kj(e, "street", c[d].street);
                    Kj(e, "city", c[d].city);
                    Kj(e, "region", c[d].region);
                    Kj(e, "country", c[d].country);
                    Kj(e, "postal_code", c[d].postal_code);
                    b.address.push(e)
                }
                return b
            }
        },
        Mj = function(a) {
            if (a) switch (a.mode) {
                case "selectors":
                    return Lj(a.selectors);
                case "auto_detect":
                    var b;
                    var c = a.auto_detect;
                    if (c) {
                        var d = Ij({
                                Od: !1,
                                Pd: !1,
                                Fc: c.exclude_element_selectors,
                                jb: {
                                    email: !!c.email,
                                    phone: !!c.phone,
                                    Cg: !!c.address
                                }
                            }).elements,
                            e = {};
                        if (0 < d.length)
                            for (var f = 0; f < d.length; f++) {
                                var g = d[f];
                                if (1 === g.type) {
                                    e.email = g.Ja;
                                    break
                                }
                            }
                        b = e
                    } else b = void 0;
                    return b
            }
        },
        Nj = function(a) {
            switch (a.enhanced_conversions_mode) {
                case "manual":
                    var b = a.enhanced_conversions_manual_var;
                    return void 0 !== b ? b : m.enhanced_conversion_data;
                case "automatic":
                    return Lj(a[Q.Xf])
            }
        };
    var Oj = {},
        Pj = function(a, b) {
            if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a)) return m._gtmexpgrp[a];
            void 0 === Oj[a] && (Oj[a] = Math.floor(Math.random() * b));
            return Oj[a]
        };
    var Qj = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
        return b
    };
    var Rj = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var k = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                k && c && (k = decodeURIComponent(k));
                d.push(k)
            }
        }
        return d
    };

    function Sj(a) {
        return "null" !== a.origin
    };
    var Vj = function(a, b, c, d) {
            return Tj(d) ? Rj(a, String(b || Uj()), c) : []
        },
        Yj = function(a, b, c, d, e) {
            if (Tj(e)) {
                var f = Wj(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Xj(f, function(g) {
                        return g.Gd
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Xj(f, function(g) {
                        return g.Rc
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Zj(a, b, c, d) {
        var e = Uj(),
            f = window;
        Sj(f) && (f.document.cookie = a);
        var g = Uj();
        return e != g || void 0 != c && 0 <= Vj(b, g, !1, d).indexOf(c)
    }
    var dk = function(a, b, c, d) {
            function e(w, y, x) {
                if (null == x) return delete h[y], w;
                h[y] = x;
                return w + "; " + y + "=" + x
            }

            function f(w, y) {
                if (null == y) return delete h[y], w;
                h[y] = !0;
                return w + "; " + y
            }
            if (!Tj(c.Va)) return 2;
            var g;
            void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = ak(b), g = a + "=" + b);
            var h = {};
            g = e(g, "path", c.path);
            var k;
            c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
            g = e(g, "expires", k);
            g = e(g, "max-age", c.uj);
            g = e(g, "samesite",
                c.Mj);
            c.Oj && (g = f(g, "secure"));
            var n = c.domain;
            if (n && "auto" === n.toLowerCase()) {
                for (var p = bk(), r = void 0, t = !1, u = 0; u < p.length; ++u) {
                    var q = "none" !== p[u] ? p[u] : void 0,
                        v = e(g, "domain", q);
                    v = f(v, c.flags);
                    try {
                        d && d(a, h)
                    } catch (w) {
                        r = w;
                        continue
                    }
                    t = !0;
                    if (!ck(q, c.path) && Zj(v, a, b, c.Va)) return 0
                }
                if (r && !t) throw r;
                return 1
            }
            n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
            g = f(g, c.flags);
            d && d(a, h);
            return ck(n, c.path) ? 1 : Zj(g, a, b, c.Va) ? 0 : 1
        },
        ek = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return dk(a,
                b, c)
        };

    function Xj(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g],
                k = b(h);
            k === c ? d.push(h) : void 0 === f || k < f ? (e = [h], f = k) : k === f && e.push(h)
        }
        return 0 < d.length ? d : e
    }

    function Wj(a, b, c) {
        for (var d = [], e = Vj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = g.shift();
                k && (k = k.split("-"), d.push({
                    id: g.join("."),
                    Gd: 1 * k[0] || 1,
                    Rc: 1 * k[1] || 1
                }))
            }
        }
        return d
    }
    var ak = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        fk = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        gk = /(^|\.)doubleclick\.net$/i,
        ck = function(a, b) {
            return gk.test(window.document.location.hostname) || "/" === b && fk.test(a)
        },
        Uj = function() {
            return Sj(window) ? window.document.cookie : ""
        },
        bk = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            gk.test(e) || fk.test(e) || a.push("none");
            return a
        },
        Tj = function(a) {
            if (!Jh(Fh) || !a || !Xh()) return !0;
            if (!Wh(a)) return !1;
            var b = Uh(a);
            return null == b ? !0 : !!b
        };
    var hk = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return [a ? String(b ^ Qj(a) & 2147483647) : String(b), Math.round(bb() / 1E3)].join(".")
        },
        kk = function(a, b, c, d, e) {
            var f = ik(b);
            return Yj(a, f, jk(c), d, e)
        },
        lk = function(a, b, c, d) {
            var e = "" + ik(c),
                f = jk(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        ik = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        jk = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };

    function mk(a, b, c) {
        var d, e = Number(null != a.Gb ? a.Gb : void 0);
        0 !== e && (d = new Date((b || bb()) + 1E3 * (e || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    };
    var nk = ["1"],
        ok = {},
        pk = {},
        tk = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = qk(a.prefix);
            if (!ok[c] && !rk(c, a.path, a.domain) && b) {
                var d = qk(a.prefix),
                    e = hk();
                if (0 === sk(d, e, a)) {
                    var f = Xb("google_tag_data", {});
                    f._gcl_au ? Pg("GTM", 57) : f._gcl_au = e
                }
                rk(c, a.path, a.domain)
            }
        };

    function sk(a, b, c, d) {
        var e = lk(b, "1", c.domain, c.path),
            f = mk(c, d);
        f.Va = "ad_storage";
        return ek(a, e, f)
    }

    function rk(a, b, c) {
        var d = kk(a, b, c, nk, "ad_storage");
        if (!d) return !1;
        var e = d.split(".");
        5 === e.length ? (ok[a] = e.slice(0, 2).join("."), pk[a] = {
            id: e.slice(2, 4).join("."),
            Vg: Number(e[4]) || 0
        }) : 3 === e.length ? pk[a] = {
            id: e.slice(0, 2).join("."),
            Vg: Number(e[2]) || 0
        } : ok[a] = d;
        return !0
    }

    function qk(a) {
        return (a || "_gcl") + "_au"
    };
    var uk = function(a) {
        for (var b = [], c = H.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Af: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, h) {
            return h.timestamp - g.timestamp
        });
        return b
    };

    function vk(a, b) {
        var c = uk(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Af] || (d[c[e].Af] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    va: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Af].push(g)
            }
        }
        return d
    };

    function wk() {
        for (var a = xk, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function yk() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var xk, zk;

    function Ak(a) {
        xk = xk || yk();
        zk = zk || wk();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                h = e ? a.charCodeAt(c + 2) : 0,
                k = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | h >> 6,
                r = h & 63;
            e || (r = 64, d || (p = 64));
            b.push(xk[k], xk[n], xk[p], xk[r])
        }
        return b.join("")
    }

    function Bk(a) {
        function b(k) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = zk[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return k
        }
        xk = xk || yk();
        zk = zk || wk();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                h = b(64);
            if (64 === h && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    };
    var Ck;
    var Dk = {
            $j: 0,
            kk: 1,
            ek: 2,
            dk: 3
        },
        Ek = void 0,
        Ik = function() {
            var a = Fk,
                b = Gk,
                c = Hk(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                ec(H, "mousedown", d);
                ec(H, "keyup", d);
                ec(H, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Jk = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Hk().decorators.push(f)
        },
        Kk = function(a, b, c) {
            for (var d = Hk().decorators,
                    e = {}, f = 0; f < d.length; ++f) {
                var g = d[f],
                    h;
                if (h = !c || g.forms) a: {
                    var k = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (k && (p || n !== H.location.hostname))
                        for (var r = 0; r < k.length; r++)
                            if (k[r] instanceof RegExp) {
                                if (k[r].test(n)) {
                                    h = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(k[r]) || p && 0 <= k[r].indexOf(n)) {
                        h = !0;
                        break a
                    }
                    h = !1
                }
                if (h) {
                    var t = g.placement;
                    void 0 == t && (t = g.fragment ? 2 : 1);
                    t === b && eb(e, g.callback())
                }
            }
            return e
        };

    function Hk() {
        var a = Xb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Lk = /(.*?)\*(.*?)\*(.*)/,
        Mk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Nk = /^(?:www\.|m\.|amp\.)+/,
        Ok = /\*?xp_[0-3]\*?/,
        Pk = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Qk(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var Tk = function(a, b) {
        var c = [],
            d;
        for (d in a)
            if (a.hasOwnProperty(d)) {
                var e = a[d];
                void 0 !== e && e === e && null !== e && "[object Object]" !== e.toString() && (c.push(d), c.push(Ak(String(e))))
            }
        var f = c.join("*");
        if (void 0 !== b) {
            var g = "xp_" + b,
                h = Rk[b](f);
            f = [f, g, Ak(String(h))].join("*")
        }
        return ["1", Sk(f), f].join("*")
    };

    function Sk(a, b) {
        var c = [m.navigator.userAgent, (new Date).getTimezoneOffset(), Tb.userLanguage || Tb.language, Math.floor(bb() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = Ck)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Ck = d;
        for (var k = 4294967295, n = 0; n < c.length; n++) k = k >>> 8 ^ Ck[(k ^ c.charCodeAt(n)) & 255];
        return ((k ^ -1) >>> 0).toString(36)
    }
    var Uk = {},
        Rk = (Uk[0] = function() {
            return "BASELINE"
        }, Uk[1] = Vk, Uk[2] = Wk, Uk[3] = Xk, Uk);

    function Vk() {
        return "CHECKSUM_EXP_DISABLED"
    }

    function Wk() {
        return "CHECKSUM_EXP_DISABLED"
    }

    function Yk() {
        Tb.userAgentData && Tb.userAgentData.getHighEntropyValues(["architecture", "model", "bitness", "platformVersion", "uaFullVersion"]).then(function() {})
    }

    function Xk() {
        return "CHECKSUM_EXP_DISABLED"
    }

    function Zk() {
        return function(a) {
            var b = tj(m.location.href),
                c = b.search.replace("?", ""),
                d = oj(c, "_gl", !1, !0) || "";
            a.query = $k(d) || {};
            var e = rj(b, "fragment").match(Qk("_gl"));
            a.fragment = $k(e && e[3] || "") || {}
        }
    }
    var al = function(a) {
            var b = Zk(),
                c = Hk();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (eb(d, e.query), a && eb(d, e.fragment));
            return d
        },
        $k = function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var f = Lk.exec(d);
                            if (f) {
                                c = f;
                                break a
                            }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var g = c;
                    if (g && "1" === g[1]) {
                        var h = g[2],
                            k = g[3],
                            n = null !== k.match(Ok),
                            p;
                        a: {
                            for (var r = 0; r < b; ++r)
                                if (h === Sk(k, r)) {
                                    p = !0;
                                    break a
                                }
                            p = !1
                        }
                        var t = p;
                        if (t || n) {
                            for (var u = {}, q = k ? k.split("*") : [], v = 0; v + 1 < q.length; v += 2) {
                                var w =
                                    q[v],
                                    y = null !== w.match(Ok);
                                if (t || y) {
                                    var x = Bk(q[v + 1]);
                                    u[w] = x
                                }
                                if (y) {
                                    var z = w.split("_")[1];
                                    if (!(Number(z) < Object.keys(Dk).length)) return;
                                    var A = b,
                                        C = u[w],
                                        E = k.slice(0, k.indexOf("*xp")),
                                        D = t;
                                    if (0 !== Number(z)) a: {
                                        var F = C,
                                            S = E,
                                            M = A;
                                        if ("undefined" !== F && "UA_DATA_NOT_PRESENT" !== F && "UACH_ACCESSED_TOO_EARLY" !== F)
                                            for (var J = 0; J < M; ++J)
                                                if (F === Rk[z](S, J)) {
                                                    D = !0;
                                                    break a
                                                }
                                        D = !1
                                    }
                                    u._z = "uaxp." + (t ? D === t ? "" + z + 0 : "" + z + 3 : D === t ? "" + z + 1 : "" + z + 2)
                                }
                            }
                            return u
                        }
                    }
                }
            } catch (O) {}
        };

    function bl(a, b, c, d) {
        function e(p) {
            var r = p,
                t = Qk(a).exec(r),
                u = r;
            if (t) {
                var q = t[2],
                    v = t[4];
                u = t[1];
                v && (u = u + q + v)
            }
            p = u;
            var w = p.charAt(p.length - 1);
            p && "&" !== w && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Pk.exec(c);
        if (!f) return "";
        var g = f[1],
            h = f[2] || "",
            k = f[3] || "",
            n = a + "=" + b;
        d ? k = "#" + e(k.substring(1)) : h = "?" + e(h.substring(1));
        return "" + g + h + k
    }

    function cl(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Kk(b, 1, c),
            e = Kk(b, 2, c),
            f = Kk(b, 3, c),
            g = Ek;
        if (fb(d)) {
            var h = Tk(d, g);
            c ? dl("_gl", h, a) : gl("_gl", h, a, !1)
        }
        if (!c && fb(e)) {
            var k = Tk(e);
            gl("_gl", k, a, !0)
        }
        for (var n in f)
            if (f.hasOwnProperty(n)) a: {
                var p = n,
                    r = f[n],
                    t = a;
                if (t.tagName) {
                    if ("a" === t.tagName.toLowerCase()) {
                        gl(p, r, t, void 0);
                        break a
                    }
                    if ("form" === t.tagName.toLowerCase()) {
                        dl(p, r, t);
                        break a
                    }
                }
                "string" == typeof t && bl(p, r, t, void 0)
            }
    }

    function gl(a, b, c, d) {
        if (c.href) {
            var e = bl(a, b, c.href, void 0 === d ? !1 : d);
            Gb.test(e) && (c.href = e)
        }
    }

    function dl(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var h = e[g];
                    if (h.name === a) {
                        h.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var k = H.createElement("input");
                    k.setAttribute("type", "hidden");
                    k.setAttribute("name", a);
                    k.setAttribute("value", b);
                    c.appendChild(k)
                }
            } else if ("post" === d) {
                var n = bl(a, b, c.action);
                Gb.test(n) && (c.action = n)
            }
        }
    }

    function Fk(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || cl(e, e.hostname)
            }
        } catch (g) {}
    }

    function Gk(a) {
        try {
            if (a.action) {
                var b = rj(tj(a.action), "host");
                cl(a, b)
            }
        } catch (c) {}
    }
    var hl = function(a, b, c, d, e) {
            Ik();
            void 0 !== e && (Ek = e);
            3 === e && Yk();
            Jk(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        il = function(a, b) {
            Ik();
            Jk(a, [qj(m.location, "host", !0)], b, !0, !0)
        },
        jl = function() {
            var a = H.location.hostname,
                b = Mk.exec(H.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var h = a.replace(Nk, ""),
                k = e.replace(Nk, ""),
                n;
            if (!(n = h === k)) {
                var p =
                    "." + k;
                n = h.substring(h.length - p.length, h.length) === p
            }
            return n
        },
        kl = function(a, b) {
            return !1 === a ? !1 : a || b || jl()
        };
    var ll = {};
    var ml = /^\w+$/,
        nl = /^[\w-]+$/,
        ol = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        pl = function() {
            if (!Jh(Fh) || !Xh()) return !0;
            var a = Uh("ad_storage");
            return null == a ? !0 : !!a
        },
        ql = function(a, b) {
            Wh("ad_storage") ? pl() ? a() : bi(a, "ad_storage") : b ? Pg("TAGGING", 3) : ai(function() {
                ql(a, !0)
            }, ["ad_storage"])
        },
        sl = function(a) {
            return rl(a).map(function(b) {
                return b.va
            })
        },
        rl = function(a) {
            var b = [];
            if (!Sj(m) || !H.cookie) return b;
            var c = Vj(a, H.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    $c: d.$c
                }, e++) {
                var f = tl(c[e]);
                if (null != f) {
                    var g = f,
                        h = g.version;
                    d.$c = g.va;
                    var k = g.timestamp,
                        n = g.labels,
                        p = Ja(b, function(r) {
                            return function(t) {
                                return t.va === r.$c
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, k), p.labels = ul(p.labels, n || [])) : b.push({
                        version: h,
                        va: d.$c,
                        timestamp: k,
                        labels: n
                    })
                }
            }
            b.sort(function(r, t) {
                return t.timestamp - r.timestamp
            });
            return vl(b)
        };

    function ul(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function wl(a) {
        return a && "string" == typeof a && a.match(ml) ? a : "_gcl"
    }
    var yl = function() {
            var a = tj(m.location.href),
                b = rj(a, "query", !1, void 0, "gclid"),
                c = rj(a, "query", !1, void 0, "gclsrc"),
                d = rj(a, "query", !1, void 0, "wbraid"),
                e = rj(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || oj(f, "gclid", !1, void 0);
                c = c || oj(f, "gclsrc", !1, void 0);
                d = d || oj(f, "wbraid", !1, void 0)
            }
            return xl(b, c, e, d)
        },
        xl = function(a, b, c, d) {
            var e = {},
                f = function(g, h) {
                    e[h] || (e[h] = []);
                    e[h].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && nl.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !==
                a && a.match(nl)) switch (b) {
                case void 0:
                    f(a, "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        Al = function(a) {
            var b = yl();
            ql(function() {
                zl(b, !1, a)
            })
        };

    function zl(a, b, c, d, e) {
        function f(w, y) {
            var x = Bl(w, g);
            x && (ek(x, y, h), k = !0)
        }
        c = c || {};
        e = e || [];
        var g = wl(c.prefix);
        d = d || bb();
        var h = mk(c, d, !0);
        h.Va = "ad_storage";
        var k = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var y = ["GCL", n, w];
                0 < e.length && y.push(e.join("."));
                return y.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == ll.enable_gbraid_cookie_write ? 0 : ll.enable_gbraid_cookie_write) && !k && a.gb) {
            var r = a.gb[0],
                t = Bl("gb",
                    g),
                u = !1;
            if (!b)
                for (var q = rl(t), v = 0; v < q.length; v++) q[v].va === r && q[v].labels && 0 < q[v].labels.length && (u = !0);
            u || f("gb", p(r))
        }
    }
    var Dl = function(a, b) {
            var c = al(!0);
            ql(function() {
                for (var d = wl(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== ol[f]) {
                        var g = Bl(f, d),
                            h = c[g];
                        if (h) {
                            var k = Math.min(Cl(h), bb()),
                                n;
                            b: {
                                var p = k;
                                if (Sj(m))
                                    for (var r = Vj(g, H.cookie, void 0, "ad_storage"), t = 0; t < r.length; ++t)
                                        if (Cl(r[t]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var u = mk(b, k, !0);
                                u.Va = "ad_storage";
                                ek(g, h, u)
                            }
                        }
                    }
                }
                zl(xl(c.gclid, c.gclsrc), !1, b)
            })
        },
        Bl = function(a, b) {
            var c = ol[a];
            if (void 0 !== c) return b + c
        },
        Cl = function(a) {
            return 0 !== El(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function tl(a) {
        var b = El(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            va: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function El(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !nl.test(a[2]) ? [] : a
    }
    var Fl = function(a, b, c, d, e) {
            if (Ia(b) && Sj(m)) {
                var f = wl(e),
                    g = function() {
                        for (var h = {}, k = 0; k < a.length; ++k) {
                            var n = Bl(a[k], f);
                            if (n) {
                                var p = Vj(n, H.cookie, void 0, "ad_storage");
                                p.length && (h[n] = p.sort()[p.length - 1])
                            }
                        }
                        return h
                    };
                ql(function() {
                    hl(g, b, c, d)
                })
            }
        },
        vl = function(a) {
            return a.filter(function(b) {
                return nl.test(b.va)
            })
        },
        Gl = function(a, b) {
            if (Sj(m)) {
                for (var c = wl(b.prefix), d = {}, e = 0; e < a.length; e++) ol[a[e]] && (d[a[e]] = ol[a[e]]);
                ql(function() {
                    Qa(d, function(f, g) {
                        var h = Vj(c + g, H.cookie, void 0, "ad_storage");
                        h.sort(function(u,
                            q) {
                            return Cl(q) - Cl(u)
                        });
                        if (h.length) {
                            var k = h[0],
                                n = Cl(k),
                                p = 0 !== El(k.split(".")).length ? k.split(".").slice(3) : [],
                                r = {},
                                t;
                            t = 0 !== El(k.split(".")).length ? k.split(".")[2] : void 0;
                            r[f] = [t];
                            zl(r, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function Hl(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var Il = function(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (Xh()) {
            var c = yl();
            if (Hl(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                il(function() {
                    return d
                }, 3);
                il(function() {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    };

    function Jl(a, b) {
        var c = wl(b),
            d = Bl(a, c);
        if (!d) return 0;
        for (var e = rl(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Kl(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var fm = !1,
        gm = 0,
        hm = [];

    function im(a) {
        if (!fm) {
            var b = H.createEventObject,
                c = "complete" == H.readyState,
                d = "interactive" == H.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                fm = !0;
                for (var e = 0; e < hm.length; e++) I(hm[e])
            }
            hm.push = function() {
                for (var f = 0; f < arguments.length; f++) I(arguments[f]);
                return 0
            }
        }
    }

    function jm() {
        if (!fm && 140 > gm) {
            gm++;
            try {
                H.documentElement.doScroll("left"), im()
            } catch (a) {
                m.setTimeout(jm, 50)
            }
        }
    }
    var km = function(a) {
        fm ? a() : hm.push(a)
    };
    var nm = function(a, b) {
            this.g = !1;
            this.C = [];
            this.F = {
                tags: []
            };
            this.O = !1;
            this.o = this.s = 0;
            mm(this, a, b)
        },
        om = function(a, b, c, d) {
            if (Vg.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Gc(d) && (e = Hc(d, e));
            e.id = c;
            e.status = "timeout";
            return a.F.tags.push(e) - 1
        },
        pm = function(a, b, c, d) {
            var e = a.F.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        qm = function(a) {
            if (!a.g) {
                for (var b = a.C, c = 0; c < b.length; c++) b[c]();
                a.g = !0;
                a.C.length = 0
            }
        },
        mm = function(a, b, c) {
            Da(b) && a.Ac(b);
            c && m.setTimeout(function() {
                return qm(a)
            }, Number(c))
        };
    nm.prototype.Ac = function(a) {
        var b = this,
            c = db(function() {
                return I(function() {
                    a(K.J, b.F)
                })
            });
        this.g ? c() : this.C.push(c)
    };
    var rm = function(a) {
        a.s++;
        return db(function() {
            a.o++;
            a.O && a.o >= a.s && qm(a)
        })
    };
    var sm = function() {
            function a(d) {
                return !Ha(d) || 0 > d ? 0 : d
            }
            if (!Sg._li && m.performance && m.performance.timing) {
                var b = m.performance.timing.navigationStart,
                    c = Ha(mh.get("gtm.start")) ? mh.get("gtm.start") : 0;
                Sg._li = {
                    cst: a(c - b),
                    cbt: a(ah - b)
                }
            }
        },
        tm = function(a) {
            m.performance && m.performance.mark(K.J + "_" + a + "_start")
        },
        um = function(a) {
            if (m.performance) {
                var b = K.J + "_" + a + "_start",
                    c = K.J + "_" + a + "_duration";
                m.performance.measure(c, b);
                var d = m.performance.getEntriesByName(c)[0];
                m.performance.clearMarks(b);
                m.performance.clearMeasures(c);
                var e = Sg._p || {};
                void 0 === e[a] && (e[a] = d.duration, Sg._p = e);
                return d.duration
            }
        },
        vm = function() {
            if (m.performance && m.performance.now) {
                var a = Sg._p || {};
                a.PAGEVIEW = m.performance.now();
                Sg._p = a
            }
        };
    var wm = {},
        xm = function() {
            return m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject]
        },
        ym = !1;

    function Cm() {
        return m.GoogleAnalyticsObject || "ga"
    }
    var Dm = function(a) {},
        Em = function(a, b) {
            return function() {
                var c = xm(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            h = f.get("hitCallback"),
                            k = 0 > g.indexOf("&tid=" + b);
                        k && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        k && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var Lm = function(a) {},
        Pm = function(a) {},
        Qm =
        function() {
            return "&tc=" + Ue.filter(function(a) {
                return a
            }).length
        },
        Tm = function() {
            2022 <= Rm().length && Sm()
        },
        Um = function(a) {
            return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*"
        },
        Wm = function() {
            Vm || (Vm = m.setTimeout(Sm, 500))
        },
        Sm = function() {
            Vm && (m.clearTimeout(Vm), Vm = void 0);
            void 0 === Xm || Ym[Xm] && !Zm && !$m || (an[Xm] || bn.lj() || 0 >= cn-- ? (Rg(1), an[Xm] = !0) : (bn.Hj(), dc(Rm(!0)), Ym[Xm] = !0, dn = en = fn = $m = Zm = ""))
        },
        Rm = function(a) {
            var b = Xm;
            if (void 0 === b) return "";
            var c = Qg("GTM"),
                d = Qg("TAGGING");
            return [gn, Ym[b] ? "" : "&es=1",
                hn[b], Lm(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", Qm(), Zm, $m, fn, en, Pm(a), dn, "&z=0"
            ].join("")
        },
        kn = function() {
            gn = jn()
        },
        jn = function() {
            return [bh, "&v=3&t=t", "&pid=" + Ka(), "&rv=" + K.xd].join("")
        },
        Om = ["L", "S", "Y"],
        Km = ["S", "E"],
        ln = {
            sampleRate: "0.005000",
            uh: "",
            th: Number("5")
        },
        mn = 0 <= H.location.search.indexOf("?gtm_latency=") || 0 <= H.location.search.indexOf("&gtm_latency="),
        nn;
    if (!(nn = mn)) {
        var on = Math.random(),
            pn = ln.sampleRate;
        nn = on < pn
    }
    var qn = nn,
        rn = {
            label: K.J + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        },
        gn = jn(),
        Ym = {},
        Zm = "",
        $m = "",
        dn = "",
        en = "",
        Nm = {},
        Mm = !1,
        Jm = {},
        sn = {},
        fn = "",
        Xm = void 0,
        hn = {},
        an = {},
        Vm = void 0,
        tn = 5;
    0 < ln.th && (tn = ln.th);
    var bn = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                lj: function() {
                    return c < a ? !1 : bb() - d[c % a] < b
                },
                Hj: function() {
                    var f = c++ % a;
                    d[f] = bb()
                }
            }
        }(tn, 1E3),
        cn = 1E3,
        vn = function(a, b) {
            if (qn && !an[a] && Xm !==
                a) {
                Sm();
                Xm = a;
                dn = Zm = "";
                hn[a] = "&e=" + Um(b) + "&eid=" + a;
                Wm();
            }
        },
        wn = function(a, b, c, d) {
            if (qn && b) {
                var e, f = String(b[pe.yb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!an[a]) {
                    a !== Xm && (Sm(), Xm = a);
                    Zm = Zm ? Zm + "." + g : "&tr=" + g;
                    var h = b["function"];
                    if (!h) throw Error("Error: No function name given for function call.");
                    var k = (We[h] ? "1" : "2") + e;
                    dn = dn ? dn + "." + k : "&ti=" + k;
                    Wm();
                    Tm()
                }
            }
        };
    var Dn = function(a, b, c) {
            if (qn && !an[a]) {
                a !== Xm && (Sm(), Xm = a);
                var d = c + b;
                $m = $m ? $m + "." + d : "&epr=" + d;
                Wm();
                Tm()
            }
        },
        En = function(a, b, c) {};

    function Fn(a, b, c, d) {
        var e = Ue[a],
            f = Gn(a, b, c, d);
        if (!f) return null;
        var g = bf(e[pe.rg], c, []);
        if (g && g.length) {
            var h = g[0];
            f = Fn(h.index, {
                onSuccess: f,
                onFailure: 1 === h.Ng ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Gn(a, b, c, d) {
        function e() {
            if (f[pe.ni]) h();
            else {
                var w = cf(f, c, []);
                var y = w[pe.zh];
                if (null != y)
                    for (var x = 0; x < y.length; x++)
                        if (!ji(y[x])) {
                            h();
                            return
                        }
                var z = om(c.ib, String(f[pe.yb]), Number(f[pe.sg]), w[pe.oi]),
                    A = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!A) {
                        A = !0;
                        var D = bb() - E;
                        wn(c.id, Ue[a], "5", D);
                        pm(c.ib, z, "success",
                            D);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!A) {
                        A = !0;
                        var D = bb() - E;
                        wn(c.id, Ue[a], "6", D);
                        pm(c.ib, z, "failure", D);
                        h()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                wn(c.id, f, "1");
                var C = function() {
                    var D = bb() - E;
                    wn(c.id, f, "7", D);
                    pm(c.ib, z, "exception", D);
                    A || (A = !0, h())
                };
                var E = bb();
                try {
                    af(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (D) {
                    C(D)
                }
            }
        }
        var f = Ue[a],
            g = b.onSuccess,
            h = b.onFailure,
            k = b.terminate;
        if (c.ff(f)) return null;
        var n = bf(f[pe.ug], c, []);
        if (n && n.length) {
            var p = n[0],
                r = Fn(p.index, {
                    onSuccess: g,
                    onFailure: h,
                    terminate: k
                }, c, d);
            if (!r) return null;
            g = r;
            h = 2 === p.Ng ? k : r
        }
        if (f[pe.ng] || f[pe.vi]) {
            var t =
                f[pe.ng] ? Ve : c.Tj,
                u = g,
                q = h;
            if (!t[a]) {
                e = db(e);
                var v = Hn(a, t, e);
                g = v.onSuccess;
                h = v.onFailure
            }
            return function() {
                t[a](u, q)
            }
        }
        return e
    }

    function Hn(a, b, c) {
        var d = [],
            e = [];
        b[a] = In(d, e, c);
        return {
            onSuccess: function() {
                b[a] = Jn;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = Kn;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function In(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Jn(a) {
        a()
    }

    function Kn(a, b) {
        b()
    };
    var Nn = function(a, b) {
        for (var c = [], d = 0; d < Ue.length; d++)
            if (a[d]) {
                var e = Ue[d];
                var f = rm(b.ib);
                try {
                    var g = Fn(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var h = c,
                            k = h.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var r = We[p];
                        k.call(h, {
                            mh: n,
                            bh: r ? r.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else Ln(d, b), f()
                } catch (q) {
                    f()
                }
            }
        var t = b.ib;
        t.O = !0;
        t.o >= t.s && qm(t);
        c.sort(Mn);
        for (var u = 0; u < c.length; u++) c[u].execute();
        return 0 < c.length
    };

    function Mn(a, b) {
        var c, d = b.bh,
            e = a.bh;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.mh,
                h = b.mh;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }

    function Ln(a, b) {
        if (!qn) return;
        var c = function(d) {
            var e = b.ff(Ue[d]) ? "3" : "4",
                f = bf(Ue[d][pe.rg], b, []);
            f && f.length && c(f[0].index);
            wn(b.id, Ue[d], e);
            var g = bf(Ue[d][pe.ug], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }
    var On = !1,
        Pn;
    var Wn = function(a) {
        var b = bb(),
            c = a["gtm.uniqueEventId"],
            d = a.event;
        if ("gtm.js" === d) {
            if (On) return !1;
            On = !0;
        }
        var g = Ch(c),
            h = !1;
        if (!g.active) {
            if ("gtm.js" !== d) return !1;
            h = !0;
            g = Ch(Number.MAX_SAFE_INTEGER)
        }
        vn(c,
            d);
        var k = a.eventCallback,
            n = a.eventTimeout,
            p = k;
        var r = {
            id: c,
            name: d,
            ff: Ah(g.isAllowed),
            Tj: [],
            Xg: function() {
                Rg(6)
            },
            Gg: Rn(c),
            ib: new nm(p, n)
        };
        r.Fg = Sn();
        Tn(c, r.ib);
        var t = mf(r);
        h && (t = Un(t));
        var u = Nn(t, r);
        "gtm.js" !== d && "gtm.sync" !== d || Dm(K.J);
        return Vn(t, u)
    };

    function Rn(a) {
        return function(b) {
            qn && (Lc(b) || En(a, "input", b))
        }
    }

    function Tn(a, b) {
        rh(a, "event", 1);
        rh(a, "ecommerce", 1);
        rh(a, "gtm");
        rh(a, "eventModel");
    }

    function Sn() {
        var a = {};
        a.event = qh("event", 1);
        a.ecommerce = qh("ecommerce", 1);
        a.gtm = qh("gtm");
        a.eventModel = qh("eventModel");
        return a
    }

    function Un(a) {
        for (var b = [], c = 0; c < a.length; c++) a[c] && Ug[String(Ue[c][pe.yb])] && (b[c] = !0);
        return b
    }

    function Vn(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Ue[c] && !Vg[String(Ue[c][pe.yb])]) return !0;
        return !1
    }

    function Xn(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return tj("" + c + b).href
        }
    }

    function Yn(a, b) {
        return Zn() ? Xn(a, b) : void 0
    }

    function Zn() {
        var a = !1;
        return a
    }

    function $n() {
        return !!K.yd && "SGTM_TOKEN" !== K.yd.replaceAll("@@", "")
    };
    var ao = function() {
        var a = !1;
        return a
    };
    var bo;
    if (3 === K.xd.length) bo = "g";
    else {
        var co = "G";
        co = "g";
        bo = co
    }
    var eo = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: bo,
            OPT: "o"
        },
        fo = function(a) {
            var b = K.J.split("-"),
                c = b[0].toUpperCase(),
                d = eo[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === K.xd.length) {
                var g = "w";
                g = ao() ? "s" : "o";
                f = "2" + g
            } else f = "";
            return f + d + K.xd + e
        };

    function go(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var ho = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };

    function io() {
        return Ib("iPhone") && !Ib("iPod") && !Ib("iPad")
    };
    Ib("Opera");
    Ib("Trident") || Ib("MSIE");
    Ib("Edge");
    !Ib("Gecko") || -1 != Hb().toLowerCase().indexOf("webkit") && !Ib("Edge") || Ib("Trident") || Ib("MSIE") || Ib("Edge"); - 1 != Hb().toLowerCase().indexOf("webkit") && !Ib("Edge") && Ib("Mobile");
    Ib("Macintosh");
    Ib("Windows");
    Ib("Linux") || Ib("CrOS");
    var jo = la.navigator || null;
    jo && (jo.appVersion || "").indexOf("X11");
    Ib("Android");
    io();
    Ib("iPad");
    Ib("iPod");
    io() || Ib("iPad") || Ib("iPod");
    Hb().toLowerCase().indexOf("kaios");
    var ko = function(a, b) {
            for (var c = a, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames[b])
                } catch (h) {
                    e = !1
                }
                if (e) return c;
                var f;
                a: {
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break a
                        }
                    } catch (h) {}
                    f = null
                }
                if (!(c = f)) break
            }
            return null
        },
        lo = function(a) {
            var b = H;
            b = void 0 === b ? window.document : b;
            if (!a || !b.head) return null;
            var c, d;
            d = void 0 === d ? document : d;
            c = d.createElement("meta");
            b.head.appendChild(c);
            c.httpEquiv = "origin-trial";
            c.content = a;
            return c
        };
    var mo = function() {};
    var no = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        oo = function(a, b) {
            this.o = a;
            this.g = null;
            this.C = {};
            this.O = 0;
            this.F = void 0 === b ? 500 : b;
            this.s = null
        };
    ka(oo, mo);
    var qo = function(a) {
        return "function" === typeof a.o.__tcfapi || null != po(a)
    };
    oo.prototype.addEventListener = function(a) {
        var b = {},
            c = Rb(function() {
                return a(b)
            }),
            d = 0; - 1 !== this.F && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.F));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = no(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try {
            ro(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    oo.prototype.removeEventListener = function(a) {
        a && a.listenerId && ro(this, "removeEventListener", null, a.listenerId)
    };
    var to = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var h = c;
            2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
            var k;
            if (0 === h)
                if (a.purpose && a.vendor) {
                    var n = so(a.vendor.consents, void 0 === d ? "755" : d);
                    k = n && "1" === b && a.purposeOneTreatment && ((Jh(Gh) ? 0 : "DE" === a.publisherCC) || "CH" === a.publisherCC) ? !0 : n && so(a.purpose.consents, b)
                } else k = !0;
            else k =
                1 === h ? a.purpose && a.vendor ? so(a.purpose.legitimateInterests, b) && so(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return k
        },
        so = function(a, b) {
            return !(!a || !a[b])
        },
        ro = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.o.__tcfapi) {
                var e = a.o.__tcfapi;
                e(b, 2, c, d)
            } else if (po(a)) {
                uo(a);
                var f = ++a.O;
                a.C[f] = c;
                if (a.g) {
                    var g = {};
                    a.g.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        po = function(a) {
            if (a.g) return a.g;
            a.g = ko(a.o, "__tcfapiLocator");
            return a.g
        },
        uo = function(a) {
            a.s || (a.s = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.C[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, ho(a.o, a.s))
        };
    var vo = !0;
    vo = !1;
    Ih().g(Gh.g);
    var wo = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        xo = go("", 550),
        yo = go("", 500);

    function zo() {
        var a = Sg.tcf || {};
        return Sg.tcf = a
    }
    var Ao = function(a, b) {
            this.s = a;
            this.g = b;
            this.o = bb();
        },
        Bo = function(a) {},
        Co = function(a) {},
        Io = function() {
            var a = zo(),
                b = new oo(m, vo ? 3E3 : -1),
                c = new Ao(b, a);
            if ((Do() ? !0 === m.gtag_enable_tcf_support : !1 !== m.gtag_enable_tcf_support) && !a.active && ("function" === typeof m.__tcfapi || qo(b))) {
                a.active = !0;
                a.Uc = {};
                Eo();
                var d = null;
                vo ? d = m.setTimeout(function() {
                    Fo(a);
                    Go(a);
                    d = null
                }, yo) : a.tcString = "tcunavailable";
                try {
                    b.addEventListener(function(e) {
                        d && (clearTimeout(d), d = null);
                        if (0 !== e.internalErrorState) Fo(a), Go(a), Bo(c);
                        else {
                            var f;
                            a.gdprApplies = e.gdprApplies;
                            if (!1 === e.gdprApplies) f = Ho(), b.removeEventListener(e);
                            else if ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus || "cmpuishown" === e.eventStatus) {
                                var g = {},
                                    h;
                                for (h in wo)
                                    if (wo.hasOwnProperty(h))
                                        if ("1" === h) {
                                            var k, n = e,
                                                p = !0;
                                            p = void 0 === p ? !1 : p;
                                            var r;
                                            var t = n;
                                            !1 === t.gdprApplies ? r = !0 : (void 0 === t.internalErrorState && (t.internalErrorState = no(t)), r = "error" === t.cmpStatus || 0 !== t.internalErrorState || "loaded" === t.cmpStatus && ("tcloaded" === t.eventStatus || "useractioncomplete" ===
                                                t.eventStatus) ? !0 : !1);
                                            k = r ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : to(n, "1", 0) : !1;
                                            g["1"] = k
                                        } else g[h] = to(e, h, wo[h]);
                                f = g
                            }
                            f && (a.tcString = e.tcString || "tcempty", a.Uc = f, Go(a), Bo(c))
                        }
                    }), Co(c)
                } catch (e) {
                    d && (clearTimeout(d), d = null), Fo(a), Go(a)
                }
            }
        };

    function Fo(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        vo && (a.Uc = Ho())
    }

    function Eo() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = xo, a);
        gi(b)
    }
    var Do = function() {
        var a = !1;
        a = !0;
        return a
    };

    function Ho() {
        var a = {},
            b;
        for (b in wo) wo.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function Go(a) {
        var b = {},
            c = (b.ad_storage = a.Uc["1"] ? "granted" : "denied", b);
        ii(c, 0, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: Jo()
        })
    }
    var Ko = function() {
            var a = zo();
            if (a.active && void 0 !== a.loadTime) return Number(a.loadTime)
        },
        Jo = function() {
            var a = zo();
            return a.active ? a.tcString || "" : ""
        },
        Lo = function() {
            var a = zo();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        Mo = function(a) {
            if (!wo.hasOwnProperty(String(a))) return !0;
            var b = zo();
            return b.active && b.Uc ? !!b.Uc[String(a)] : !0
        };
    var To = !1;
    var Uo = function() {
            this.g = {}
        },
        Vo = function(a, b, c) {
            null != c && (a.g[b] = c)
        },
        Wo = function(a) {
            return Object.keys(a.g).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.g[b])
            }).join("&")
        },
        Yo = function(a, b, c, d, e) {};
    var $o = /[A-Z]+/,
        ap = /\s/,
        bp = function(a) {
            if (Ga(a)) {
                a = Ya(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if ($o.test(c)) {
                        var d = !1;
                        d = !0;
                        for (var e = a.substring(b + 1).split("/"), f = 0; f < e.length; f++)
                            if (!e[f] || ap.test(e[f]) && ("AW" !== c || 1 !== f || !d)) return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + e[0],
                            N: e
                        }
                    }
                }
            }
        },
        dp = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d =
                    bp(a[c]);
                d && (b[d.id] = d)
            }
            cp(b);
            var e = [];
            Qa(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function cp(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.N[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var fp = function(a, b, c, d) {
            return (2 === ep() || d || "http:" != m.location.protocol ? a : b) + c
        },
        ep = function() {
            var a = bc(),
                b;
            if (1 === a) a: {
                var c = Yg;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = H.getElementsByTagName("script"), h = 0; h < g.length && 100 > h; h++) {
                    var k = g[h].src;
                    if (k) {
                        k = k.toLowerCase();
                        if (0 === k.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === k.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var tq = function() {
            var a = !0;
            Mo(7) && Mo(9) && Mo(10) || (a = !1);
            var b = !0;
            b = !1;
            b && !sq() && (a = !1);
            return a
        },
        sq = function() {
            var a = !0;
            Mo(3) && Mo(4) || (a = !1);
            return a
        };
    var or = !1;
    or = !0;

    function pr() {
        var a = Sg;
        return a.gcq = a.gcq || new qr
    }
    var rr = function(a, b, c) {
            pr().register(a, b, c)
        },
        sr = function(a, b, c, d) {
            pr().push("event", [b, a], c, d)
        },
        tr = function(a, b) {
            pr().push("config", [a], b)
        },
        ur = function(a, b, c, d) {
            pr().push("get", [a, b], c, d)
        },
        vr = function(a) {
            return pr().getRemoteConfig(a)
        },
        wr = {},
        xr = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.o = {};
            this.s = null;
            this.g = !1
        },
        yr = function(a, b, c, d, e) {
            this.type = a;
            this.s = b;
            this.U = c || "";
            this.g = d;
            this.o = e
        },
        qr = function() {
            this.o = {};
            this.s = {};
            this.g = [];
            this.C = {
                AW: !1,
                UA: !1
            }
        },
        zr = function(a, b) {
            var c = bp(b);
            return a.o[c.containerId] = a.o[c.containerId] || new xr
        },
        Ar = function(a, b, c) {
            if (b) {
                var d = bp(b);
                if (d && 1 === zr(a, b).status) {
                    zr(a, b).status = 2;
                    var e = {};
                    qn && (e.timeoutId = m.setTimeout(function() {
                        Rg(38);
                        Wm()
                    }, 3E3));
                    a.push("require", [e], d.containerId);
                    wr[d.containerId] = bb();
                    if (ao()) {} else {
                        var g = "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=" + K.W + "&cx=c";
                        $n() && (g += "&sign=" + K.yd);
                        var h = ("http:" != m.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g),
                            k = Yn(c, g) || h;
                        ac(k)
                    }
                }
            }
        },
        Br = function(a, b, c, d) {
            if (d.U) {
                var e = zr(a, d.U),
                    f = e.s;
                if (f) {
                    var g = Hc(c),
                        h = Hc(e.targetConfig[d.U]),
                        k = Hc(e.containerConfig),
                        n = Hc(e.remoteConfig),
                        p = Hc(a.s),
                        r = lh("gtm.uniqueEventId"),
                        t = bp(d.U).prefix,
                        u = db(function() {
                            var v = g[Q.Rb];
                            v && I(v)
                        }),
                        q = Vi(Ui(Wi(Ti(Ri(Si(Qi(Pi(Oi(g), h), k), n), p), function() {
                            Dn(r, t, "2");
                            or && u()
                        }), function() {
                            Dn(r, t, "3");
                            or && u()
                        }), function(v, w) {
                            a.C[v] = w
                        }), function(v) {
                            return a.C[v]
                        });
                    try {
                        Dn(r, t, "1");
                        f(d.U, b, d.s, q)
                    } catch (v) {
                        Dn(r, t, "4");
                    }
                }
            }
        };
    qr.prototype.register = function(a, b, c) {
        var d = zr(this, a);
        if (3 !== d.status) {
            d.s = b;
            d.status = 3;
            c && (Hc(d.remoteConfig, c), d.remoteConfig = c);
            var e = bp(a),
                f = wr[e.containerId];
            if (void 0 !== f) {
                var g = Sg[e.containerId].bootstrap,
                    h = e.prefix.toUpperCase();
                Sg[e.containerId]._spx && (h = h.toLowerCase());
                var k = lh("gtm.uniqueEventId"),
                    n = h,
                    p = bb() - g;
                if (qn && !an[k]) {
                    k !== Xm && (Sm(), Xm = k);
                    var r = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    en = en ? en + "," + r : "&cl=" + r
                }
                delete wr[e.containerId]
            }
            this.flush()
        }
    };
    qr.prototype.push = function(a, b, c, d) {
        var e = Math.floor(bb() / 1E3);
        Ar(this, c, b[0][Q.sa] || this.s[Q.sa]);
        c && zr(this, c).g && (d = !1);
        this.g.push(new yr(a, e, c, b, d));
        d || this.flush()
    };
    qr.prototype.insert = function(a, b, c) {
        var d = Math.floor(bb() / 1E3);
        0 < this.g.length ? this.g.splice(1, 0, new yr(a, d, c, b, !1)) : this.g.push(new yr(a, d, c, b, !1))
    };
    qr.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.g.length;) {
            var f = this.g[0];
            if (f.o) !f.U || zr(this, f.U).g ? (f.o = !1, this.g.push(f)) : c.push(f), this.g.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== zr(this, f.U).status && !a) {
                            this.g.push.apply(this.g, c);
                            return
                        }
                        qn && m.clearTimeout(f.g[0].timeoutId);
                        break;
                    case "set":
                        Qa(f.g[0], function(t, u) {
                            Hc(ib(t, u), b.s)
                        });
                        break;
                    case "config":
                        e.Ka = {};
                        Qa(f.g[0], function(t) {
                            return function(u, q) {
                                Hc(ib(u, q), t.Ka)
                            }
                        }(e));
                        var g = !!e.Ka[Q.pd];
                        delete e.Ka[Q.pd];
                        var h =
                            zr(this, f.U),
                            k = bp(f.U),
                            n = k.containerId === k.id;
                        g || (n ? h.containerConfig = {} : h.targetConfig[f.U] = {});
                        h.g && g || Br(this, Q.za, e.Ka, f);
                        h.g = !0;
                        delete e.Ka[Q.Wb];
                        n ? Hc(e.Ka, h.containerConfig) : Hc(e.Ka, h.targetConfig[f.U]);
                        d = !0;
                        break;
                    case "event":
                        e.Zc = {};
                        Qa(f.g[0], function(t) {
                            return function(u, q) {
                                Hc(ib(u, q), t.Zc)
                            }
                        }(e));
                        Br(this, f.g[1], e.Zc, f);
                        break;
                    case "get":
                        var p = {},
                            r = (p[Q.Na] = f.g[0], p[Q.$a] = f.g[1], p);
                        Br(this, Q.Ma, r, f)
                }
                this.g.shift();
                Cr(this, f)
            }
            e = {
                Ka: e.Ka,
                Zc: e.Zc
            }
        }
        this.g.push.apply(this.g, c);
        d && this.flush()
    };
    var Cr = function(a, b) {
        if ("require" !== b.type)
            if (b.U)
                for (var c = a.getCommandListeners(b.U)[b.type] || [], d = 0; d < c.length; d++) c[d]();
            else
                for (var e in a.o)
                    if (a.o.hasOwnProperty(e)) {
                        var f = a.o[e];
                        if (f && f.o)
                            for (var g = f.o[b.type] || [], h = 0; h < g.length; h++) g[h]()
                    }
    };
    qr.prototype.getRemoteConfig = function(a) {
        return zr(this, a).remoteConfig
    };
    qr.prototype.getCommandListeners = function(a) {
        return zr(this, a).o
    };
    var uf;
    var Dr = {},
        Er = function(a, b) {
            b = b.toString().split(",");
            for (var c = 0; c < b.length; c++) {
                var d = Dr[b[c]] || [];
                Dr[b[c]] = d;
                0 > d.indexOf(a) && d.push(a)
            }
        },
        Fr = function(a) {
            Qa(Dr, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var Gr = "HA GF G UA AW DC".split(" "),
        Hr = !1;
    Hr = !0;
    var Ir = !1,
        Jr = !1,
        Kr = 0;

    function Lr(a, b) {
        var c = {
            event: a
        };
        b && (c.eventModel = Hc(b), b[Q.Rb] && (c.eventCallback = b[Q.Rb]), b[Q.hd] && (c.eventTimeout = b[Q.hd]));
        return c
    }

    function Mr(a) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: eh()
        });
        return a["gtm.uniqueEventId"]
    }

    function Nr() {
        if (!Ir && !Sg.gtagRegistered) {
            Ir = Sg.gtagRegistered = !0;
            Sg.addTargetToGroup = function(c) {
                Er(c, "default")
            };
            var a = Sg.pendingDefaultTargets;
            delete Sg.pendingDefaultTargets;
            if (Ia(a))
                for (var b = 0; b < a.length; ++b) Er(a[b], "default")
        }
        return Ir
    }
    var Or = {
            config: function(a) {
                var b, c = Mr(a);
                if (2 > a.length || !Ga(a[1])) return;
                var d = {};
                if (2 < a.length) {
                    if (void 0 != a[2] && !Gc(a[2]) || 3 < a.length) return;
                    d = a[2]
                }
                var e = bp(a[1]);
                if (!e) return;
                Fr(e.id);
                Er(e.id, d[Q.se] || "default");
                delete d[Q.se];
                Jr || Rg(43);
                if (Nr() && -1 !== Gr.indexOf(e.prefix)) {
                    "G" === e.prefix && (d[Q.Wb] = !0);
                    Hr && delete d[Q.Rb];
                    e.id === e.containerId && (Sg.configCount = ++Kr);
                    tr(d, e.id);
                    return
                }
                oh("gtag.targets." + e.id, void 0);
                oh("gtag.targets." + e.id, Hc(d));
                var f = {};
                f[Q.wb] = e.id;
                b = Lr(Q.za, f);
                b["gtm.uniqueEventId"] = c;
                return b
            },
            consent: function(a) {
                function b() {
                    Nr() && Hc(a[2], {
                        subcommand: a[1]
                    })
                }
                if (3 === a.length) {
                    Rg(39);
                    var c = eh(),
                        d = a[1];
                    "default" === d ? (b(), gi(a[2])) : "update" === d && (b(), ii(a[2], c))
                }
            },
            event: function(a) {
                var b = a[1];
                if (!(2 > a.length) && Ga(b)) {
                    var c;
                    if (2 < a.length) {
                        if (!Gc(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        c = a[2]
                    }
                    var d = Lr(b, c),
                        e = Mr(a);
                    d["gtm.uniqueEventId"] = e;
                    var f;
                    var g = c && c[Q.wb];
                    void 0 === g && (g = lh(Q.wb, 2),
                        void 0 === g && (g = "default"));
                    if (Ga(g) || Ia(g)) {
                        for (var h = g.toString().replace(/\s+/g, "").split(","), k = [], n = 0; n < h.length; n++)
                            if (0 <= h[n].indexOf("-")) k.push(h[n]);
                            else {
                                var p = Dr[h[n]];
                                p && p.length && (k = k.concat(p))
                            }
                        f = dp(k)
                    } else f = void 0;
                    var r = f;
                    if (!r) return;
                    for (var t = Nr(), u = [], q = 0; t && q < r.length; q++) {
                        var v = r[q];
                        if (-1 !== Gr.indexOf(v.prefix)) {
                            var w = Hc(c);
                            "G" === v.prefix && (w[Q.Wb] = !0);
                            Hr && delete w[Q.Rb];
                            sr(b, w, v.id)
                        }
                        u.push(v.id)
                    }
                    d.eventModel = d.eventModel || {};
                    0 < r.length ? d.eventModel[Q.wb] = u.join() : delete d.eventModel[Q.wb];
                    Jr || Rg(43);
                    return d
                }
            },
            get: function(a) {
                Rg(53);
                if (4 !== a.length || !Ga(a[1]) || !Ga(a[2]) || !Da(a[3])) return;
                var b = bp(a[1]),
                    c = String(a[2]),
                    d = a[3];
                if (!b) return;
                Jr || Rg(43);
                if (!Nr() || -1 === Gr.indexOf(b.prefix)) return;
                eh();
                var e = {};
                ci(Hc((e[Q.Na] = c, e[Q.$a] = d, e)));
                ur(c, function(f) {
                    I(function() {
                        return d(f)
                    })
                }, b.id);
            },
            js: function(a) {
                if (2 == a.length && a[1].getTime) {
                    Jr = !0;
                    Nr();
                    var b = {};
                    return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(),
                        b["gtm.uniqueEventId"] = Mr(a), b
                }
            },
            policy: function(a) {
                if (3 === a.length) {
                    var b = a[1],
                        c = a[2],
                        d = uf.o;
                    d.g[b] ? d.g[b].push(c) : d.g[b] = [c]
                }
            },
            set: function(a) {
                var b;
                2 == a.length && Gc(a[1]) ? b = Hc(a[1]) : 3 == a.length && Ga(a[1]) && (b = {}, Gc(a[2]) || Ia(a[2]) ? b[a[1]] = Hc(a[2]) : b[a[1]] = a[2]);
                if (b) {
                    if (eh(), Nr()) {
                        Hc(b);
                        var c = Hc(b);
                        pr().push("set", [c])
                    }
                    b._clear = !0;
                    return b
                }
            }
        },
        Pr = {
            policy: !0
        };
    var Qr = function(a) {
            var b = m[K.W].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        Rr = function(a) {
            var b = m[K.W],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var Sr = !1,
        Tr = [];

    function Ur() {
        if (!Sr) {
            Sr = !0;
            for (var a = 0; a < Tr.length; a++) I(Tr[a])
        }
    }
    var Vr = function(a) {
        Sr ? I(a) : Tr.push(a)
    };
    var ls = function(a) {
        if (ks(a)) return a;
        this.g = a
    };
    ls.prototype.dj = function() {
        return this.g
    };
    var ks = function(a) {
        return !a || "object" !== Cc(a) || Gc(a) ? !1 : "getUntrustedUpdateValue" in a
    };
    ls.prototype.getUntrustedUpdateValue = ls.prototype.dj;
    var ms = [],
        ns = !1,
        os = !1,
        ps = function(a) {
            return m[K.W].push(a)
        },
        qs = function(a, b, c) {
            a.eventCallback = b;
            c && (a.eventTimeout = c);
            return ps(a)
        },
        rs = function(a, b) {
            var c = Sg[K.W],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = m.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (m.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function ss(a) {
        var b = a._clear;
        Qa(a, function(d, e) {
            "_clear" !== d && (b && oh(d, void 0), oh(d, e))
        });
        $g || ($g = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || (c = eh(), a["gtm.uniqueEventId"] = c, oh("gtm.uniqueEventId", c));
        return Wn(a)
    }

    function ts() {
        var a = ms[0];
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Ra(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b) return !0
        }
        return !1
    }

    function us() {
        for (var a = !1; !os && 0 < ms.length;) {
            if (!ns && ts()) {
                var b = {},
                    c = (b.event = "gtm.init_consent", b),
                    d = {},
                    e = (d.event = "gtm.init", d),
                    f = ms[0]["gtm.uniqueEventId"];
                f && (c["gtm.uniqueEventId"] = f - 2, e["gtm.uniqueEventId"] = f - 1);
                ms.unshift(c, e);
                ns = !0
            }
            os = !0;
            delete ih.eventModel;
            kh();
            var g = ms.shift();
            if (null != g) {
                var h = ks(g);
                if (h) {
                    var k = g;
                    g = ks(k) ? k.getUntrustedUpdateValue() : void 0;
                    ph()
                }
                try {
                    if (Da(g)) try {
                        g.call(mh)
                    } catch (w) {} else if (Ia(g)) {
                        var n =
                            g;
                        if (Ga(n[0])) {
                            var p = n[0].split("."),
                                r = p.pop(),
                                t = n.slice(1),
                                u = lh(p.join("."), 2);
                            if (void 0 !== u && null !== u) try {
                                u[r].apply(u, t)
                            } catch (w) {}
                        }
                    } else {
                        if (Ra(g)) {
                            a: {
                                var q = g;
                                if (q.length && Ga(q[0])) {
                                    var v = Or[q[0]];
                                    if (v && (!h || !Pr[q[0]])) {
                                        g = v(q);
                                        break a
                                    }
                                }
                                g = void 0
                            }
                            if (!g) {
                                os = !1;
                                continue
                            }
                        }
                        a = ss(g) || a
                    }
                } finally {
                    h && kh(!0)
                }
            }
            os = !1
        }
        return !a
    }

    function vs() {
        var b = us();
        try {
            Qr(K.J)
        } catch (c) {}
        return b
    }
    var xs = function() {
            var a = Xb(K.W, []),
                b = Xb("google_tag_manager", {});
            b = b[K.W] = b[K.W] || {};
            km(function() {
                b.gtmDom || (b.gtmDom = !0, a.push({
                    event: "gtm.dom"
                }))
            });
            Vr(function() {
                b.gtmLoad || (b.gtmLoad = !0, a.push({
                    event: "gtm.load"
                }))
            });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function() {
                var e;
                if (0 < Sg.SANDBOXED_JS_SEMAPHORE) {
                    e = [];
                    for (var f = 0; f < arguments.length; f++) e[f] = new ls(arguments[f])
                } else e = [].slice.call(arguments, 0);
                var g, h = !0;
                h = !1;
                g = h;
                !g && ms.push.apply(ms, e);
                var k = c.apply(a, e);
                g && ms.push.apply(ms, e);
                if (300 < this.length)
                    for (Rg(4); 300 < this.length;) this.shift();
                var n = "boolean" !== typeof k || k;
                return us() && n
            };
            var d = a.slice(0);
            ms.push.apply(ms, d);
            if (ws()) {
                I(vs)
            }
        },
        ws = function() {
            var a = !0;
            a = !1;
            return a
        };

    function ys(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = bb();
        return b < c + 3E5 && b > c - 9E5
    };
    var zs = function(a) {
        Sg.addTargetToGroup ? Sg.addTargetToGroup(a) : (Sg.pendingDefaultTargets = Sg.pendingDefaultTargets || [], Sg.pendingDefaultTargets.push(a))
    };
    var As = function() {
        var a = [];
        return a
    };
    var Bs = {};
    Bs.td = new String("undefined");
    var bt = m.clearTimeout,
        ct = m.setTimeout,
        R = function(a, b, c, d) {
            if (ao()) {
                b && I(b)
            } else return ac(a, b, c, d)
        },
        dt = function() {
            return new Date
        },
        et = function() {
            return m.location.href
        },
        ft = function(a) {
            return rj(tj(a), "fragment")
        },
        gt = function(a) {
            return sj(tj(a))
        },
        ht = function(a, b) {
            return lh(a, b || 2)
        },
        it = function(a, b, c) {
            return b ? qs(a, b, c) : ps(a)
        },
        jt = function(a, b) {
            m[a] = b
        },
        U = function(a, b, c) {
            b && (void 0 === m[a] || c && !m[a]) && (m[a] = b);
            return m[a]
        },
        kt = function(a, b, c) {
            return Vj(a, b, void 0 === c ? !0 : !!c)
        },
        lt = function(a, b, c) {
            return 0 === ek(a, b, c)
        },
        mt = function(a, b) {
            if (ao()) {
                b && I(b)
            } else cc(a, b)
        },
        nt = function(a) {
            return !!Is(a, "init", !1)
        },
        ot = function(a) {
            Gs(a, "init", !0)
        },
        pt = function(a) {
            var b = Yg,
                c = "?id=" + encodeURIComponent(a) + "&l=" + K.W;
            $n() && (c += "&sign=" + K.yd, Wb && (b = Wb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]));
            var d = fp("https://", "http://", b + c);
            R(d)
        },
        qt = function(a,
            b, c) {
            qn && (Lc(a) || En(c, b, a))
        };

    function Ot(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    var Pt = new La;

    function Qt(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = Pt.get(e);
            f || (f = new RegExp(b, d), Pt.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function Rt(a, b) {
        function c(g) {
            var h = tj(g),
                k = rj(h, "protocol"),
                n = rj(h, "host", !0),
                p = rj(h, "port"),
                r = rj(h, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === k || "http" == k && "80" == p || "https" == k && "443" == p) k = "web", p = "default";
            return [k, n, p, r]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function St(a) {
        return Tt(a) ? 1 : 0
    }

    function Tt(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = Hc(a, {});
                Hc({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (St(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) {
                        var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var h = 0; h < g.length; h++)
                                if (b[g[h]]) {
                                    f = b[g[h]](c);
                                    break a
                                }
                        } catch (k) {}
                    }
                    f = !1
                }
                return f;
            case "_ew":
                return Ot(b, c);
            case "_eq":
                return String(b) ==
                    String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return Qt(b, c, a.ignore_case);
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return Rt(b, c)
        }
        return !1
    };

    function Ut(a, b) {
        var c = this;
    };

    function Vt(a, b, c) {
        var d;
        return d
    };

    function Wt(a, b, c) {};

    function Xt(a, b, c, d) {};

    function Yt(a) {};

    function bu(a) {};
    var cu = {},
        du = [],
        eu = {},
        fu = 0,
        gu = 0;

    function nu(a, b) {}

    function uu(a, b) {};

    function zu(a) {};
    var Au = {},
        Bu = [];
    var Iu = function(a, b) {};

    function Pu(a, b) {};
    var Qu = /^\s*$/,
        Ru, Su = !1;

    function cv(a, b) {}

    function dv(a, b, c) {};
    var ev = ["www.youtube.com", "www.youtube-nocookie.com"],
        fv, gv = !1,
        hv = 0;

    function rv(a, b) {}

    function sv(a, b) {
        return !0
    };

    function tv(a, b, c) {};

    function uv(a, b) {
        var c;
        return c
    };

    function vv(a) {};

    function wv(a) {};

    function xv(a) {
        P(G(this), ["listener:!Fn"], arguments);
        rg(this, "process_dom_events", "window", "load");
        Vr(Jc(a))
    };

    function yv(a) {
        var b;
        return b
    };

    function zv(a, b) {
        var c;
        var d = !1;
        var e = Ic(c, this.g, d);
        void 0 === e && void 0 !== c && Rg(45);
        return e
    };

    function Av(a) {
        var b;
        return b
    };

    function Bv(a, b) {
        var c = null,
            d = !1;
        return Ic(c, this.g, d)
    };

    function Cv(a) {
        var b;
        var g = !1;
        return Ic(b, this.g, g)
    };
    var Dv = {},
        Ev = [],
        Fv = {},
        Gv = 0,
        Hv = 0;
    var Nv = function(a, b) {
        return b
    };

    function Sv(a, b) {
        return b
    };

    function Xv() {};
    var Yv = {},
        Zv = [];

    function fw(a, b) {
        return b
    }

    function gw(a) {
        return !1
    }
    var hw;

    function iw(a) {
        var b = !1;
        return b
    };
    var jw = function(a) {
        var b;
        return b
    };

    function kw(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        return c
    };

    function lw() {
        var a = [];
        return Ic(a)
    };

    function mw(a) {
        var b = null;
        return b
    };

    function nw(a, b) {
        var c;
        return c
    };

    function ow(a, b) {
        var c;
        return c
    };

    function pw(a, b) {
        var c;
        return c
    };

    function qw(a) {
        var b = "";
        return b
    };

    function rw(a, b) {
        var c;
        return c
    };

    function sw(a) {
        var b = "";
        return b
    };

    function tw() {
        rg(this, "get_user_agent");
        return m.navigator.userAgent
    };

    function uw(a, b) {};
    var vw = {};

    function ww(a, b, c, d, e, f) {
        f ? e[f] ? (e[f][0].push(c), e[f][1].push(d)) : (e[f] = [
            [c],
            [d]
        ], ac(a, function() {
            for (var g = e[f][0], h = 0; h < g.length; h++) I(g[h]);
            g.push = function(k) {
                I(k);
                return 0
            }
        }, function() {
            for (var g = e[f][1], h = 0; h < g.length; h++) I(g[h]);
            e[f] = null
        }, b)) : ac(a, c, d, b)
    }

    function xw(a, b, c, d) {}
    var yw = Object.freeze({
            dl: 1,
            id: 1
        }),
        zw = {};

    function Aw(a, b, c, d) {};

    function Bw(a) {
        var b = !0;
        return b
    };
    var Cw = function() {
            return !1
        },
        Dw = {
            getItem: function(a) {
                var b = null;
                return b
            },
            setItem: function(a,
                b) {
                return !1
            },
            removeItem: function(a) {}
        };
    var Ew = ["textContent", "value", "tagName", "children", "childElementCount"];

    function Fw(a) {
        var b;
        return b
    };

    function Gw() {};

    function Hw(a, b) {
        var c;
        return c
    };

    function Iw(a) {
        var b = void 0;
        return b
    };

    function Jw(a, b) {
        var c = !1;
        return c
    };

    function Kw() {
        var a = "";
        return a
    };

    function Lw() {
        var a = "";
        return a
    };
    var Mw = Object.freeze(["config", "event", "get", "set"]);

    function Nw(a, b, c) {};

    function Ow(a, b) {
        var c = !1;
        return c
    };

    function Pw() {};

    function Qw(a, b, c, d) {
        d = void 0 === d ? !1 : d;
    };

    function Rw(a, b, c) {};

    function Sw(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    };

    function Tw(a) {
        P(G(this), ["consentSettings:!DustMap"], arguments);
        for (var b = a.zb(), c = b.length(), d = 0; d < c; d++) {
            var e = b.get(d);
            e !== Q.Xd && rg(this, "access_consent", e, "write")
        }
        gi(Jc(a))
    };

    function Uw(a, b, c) {
        return !1
    };

    function Vw(a, b, c) {
        P(G(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
        var d = dj(a) || {};
        d[b] = Jc(c, this.g);
        var e = a;
        bj || cj();
        aj[e] = d;
    };

    function Ww(a, b, c) {};
    var Xw = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };

    function Yw(a, b, c, d) {
        var e = this;
    };

    function Zw(a, b, c) {};
    var $w = {},
        ax = {};
    $w.getItem = function(a) {
        var b = null;
        return b
    };
    $w.setItem = function(a, b) {};
    $w.removeItem = function(a) {};
    $w.clear = function() {};
    var bx = function(a) {
        var b;
        return b
    };

    function cx(a) {
        P(G(this), ["consentSettings:!DustMap"], arguments);
        var b = Jc(a),
            c;
        for (c in b) b.hasOwnProperty(c) && rg(this, "access_consent", c, "write");
        var d = this.g.g;
        ii(b, d && d.eventId)
    };
    var dx = function() {
        var a = new Gg;
        ao() ? (a.add("injectHiddenIframe", Ca), a.add("injectScript", Ca)) : (a.add("injectHiddenIframe", uw), a.add("injectScript", xw));
        var b = Rw;
        a.add("Math", kg());
        a.add("Object", Eg);
        a.add("TestHelper", Jg());
        a.add("addConsentListener", Ut);
        a.add("addEventCallback", Yt);
        a.add("aliasInWindow", sv);
        a.add("assertApi",
            gg);
        a.add("assertThat", hg);
        a.add("callInWindow", uv);
        a.add("callLater", vv);
        a.add("copyFromDataLayer", zv);
        a.add("copyFromWindow", Av);
        a.add("createArgumentsQueue", Bv);
        a.add("createQueue", Cv);
        a.add("decodeUri", lg);
        a.add("decodeUriComponent", mg);
        a.add("encodeUri", ng);
        a.add("encodeUriComponent", og);
        a.add("fail", pg);
        a.add("fromBase64", jw, !("atob" in m));
        a.add("generateRandom", qg);
        a.add("getContainerVersion", sg);
        a.add("getCookieValues", kw);
        a.add("getQueryParameters", ow);
        a.add("getReferrerQueryParameters",
            pw);
        a.add("getReferrerUrl", qw);
        a.add("getTimestamp", vg);
        a.add("getTimestampMillis", vg);
        a.add("getType", wg);
        a.add("getUrl", sw);
        a.add("isConsentGranted", Bw);
        a.add("localStorage", Dw, !Cw());
        a.add("logToConsole", Gw);
        a.add("makeInteger", yg);
        a.add("makeNumber", zg);
        a.add("makeString", Ag);
        a.add("makeTableMap", Bg);
        a.add("mock", Dg);
        a.add("parseUrl", Iw);
        a.add("queryPermission", Jw);
        a.add("readCharacterSet", Kw);
        a.add("readTitle", Lw);
        a.add("sendPixel", b);
        a.add("setCookie", Sw);
        a.add("setDefaultConsentState", Tw);
        a.add("setInWindow", Uw);
        a.add("sha256", Yw);
        a.add("templateStorage", $w);
        a.add("toBase64", bx, !("btoa" in m));
        a.add("updateConsentState", cx);
        Ig(a, "callOnWindowLoad", xv);
        a.add("JSON", xg(function(c) {
            var d = this.g.g;
            d && d.log.call(this, "error", c)
        }));
        Ig(a, "internal.appendRemoteConfigParameter", tv);
        Ig(a, "internal.getRemoteConfigParameter", rw);
        Ig(a, "internal.setRemoteConfigParameter", Ww);
        Ig(a, "internal.sortRemoteConfigParameters", Zw);
        Ig(a, "internal.evaluateMatchingRules",
            iw), Ig(a, "internal.registerGtagCommandListener", Nw);
        Ig(a, "internal.addGaSendListener", zu);
        Ig(a, "internal.evaluateFilteringRules", gw);
        Ig(a, "internal.getProductSettingsParameter", nw);
        Ig(a, "internal.setProductSettingsParameter",
            Vw);
        Ig(a, "internal.addHistoryChangeListener", Iu);
        Ig(a, "internal.sendGtagEvent", Qw);
        ao() ? Ig(a, "internal.injectScript", Ca) : Ig(a, "internal.injectScript", Aw);
        Ig(a, "internal.locateUserData", Fw);
        Ig(a, "internal.addFormInteractionListener", nu);
        Ig(a, "internal.addFormSubmitListener", uu);
        Ig(a, "internal.getFlags", ug);

        return function(c) {
            var d;
            if (a.g.hasOwnProperty(c)) d = a.get(c, this);
            else {
                var e;
                if (e = a.o.hasOwnProperty(c)) {
                    var f = !1,
                        g = this.g.g;
                    if (g) {
                        var h = g.Jc();
                        if (h) {
                            0 !== h.indexOf("__cvt_") && (f = !0);
                        }
                    }
                    e = f
                }
                if (e) {
                    var k = a.o.hasOwnProperty(c) ? a.o[c] : void 0;
                    d = k
                } else throw Error(c + " is not a valid API name.");
            }
            return d
        }
    };
    var ex = function() {
            return !1
        },
        fx = function() {
            var a = {};
            return function(b, c, d) {}
        };
    var gx;

    function hx() {
        var a = gx;
        return function(b, c, d) {
            var e = d && d.event;
            ix(c);
            var f = new sb;
            Qa(c, function(r, t) {
                var u = Ic(t);
                void 0 === u && void 0 !== t && Rg(44);
                f.set(r, u)
            });
            a.g.g.F = jf();
            var g = {
                Fi: vf(b),
                eventId: void 0 !== e ? e.id : void 0,
                Ac: void 0 !== e ? function(r) {
                    return e.ib.Ac(r)
                } : void 0,
                Jc: function() {
                    return b
                },
                log: function() {},
                pk: {
                    index: d && d.index,
                    type: d && d.type
                }
            };
            if (ex()) {
                var h =
                    fx(),
                    k = void 0,
                    n = void 0;
                g.Da = {
                    Bc: {},
                    kb: function(r, t, u) {
                        1 === t && (k = r);
                        7 === t && (n = u);
                        h(r, t, u)
                    },
                    nf: Cg()
                };
                g.log = function(r, t) {
                    if (k) {
                        var u = Array.prototype.slice.call(arguments, 1);
                        h(k, 4, {
                            level: r,
                            source: n,
                            message: u
                        })
                    }
                }
            }
            var p = oe(a, g, [b, f]);
            a.g.g.F = void 0;
            p instanceof na && "return" === p.g && (p = p.o);
            return Jc(p)
        }
    }

    function ix(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        Da(b) && (a.gtmOnSuccess = function() {
            I(b)
        });
        Da(c) && (a.gtmOnFailure = function() {
            I(c)
        })
    }

    function jx() {
        gx.g.g.O = function(a, b, c) {
            Sg.SANDBOXED_JS_SEMAPHORE = Sg.SANDBOXED_JS_SEMAPHORE || 0;
            Sg.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                Sg.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }

    function kx(a) {
        void 0 !== a && Qa(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                dh[e] = dh[e] || [];
                dh[e].push(b)
            }
        })
    };
    var lx = encodeURI,
        X = encodeURIComponent,
        mx = dc;
    var nx = function(a, b) {
        if (!a) return !1;
        var c = rj(tj(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var ox = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    };
    var yy = {};
    yy[Q.Pb] = "";
    yy[Q.ra] = "";
    yy[Q.Ga] = "";
    yy[Q.ka] = "auto";
    yy[Q.Za] = "/";
    yy[Q.qa] = 63072E3;
    yy[Q.vc] = 30;
    yy[Q.nd] = 1E4;
    yy[Q.Vb] = !0;
    var zy = function(a, b, c, d, e, f) {
        f = void 0 === f ? !1 : f;
        this.s = a;
        this.eventName = b;
        this.C = c;
        this.M = d.eventModel;
        this.yi = d.containerConfig;
        this.g = d;
        this.La = d.getWithConfig(Q.qb) ? 1 : 7;
        this.Fe = d.getWithConfig(Q.rb) ? 1 : 7;
        this.O = e;
        this.nb = this.Ee = this.Ag = this.F = this.wg = this.yg = this.sd = !1;
        this.Fb = 0;
        this.Je = this.Ke = this.rd = !1;
        this.Ne = void 0;
        this.Xb = 0;
        this.vg = this.Ie = this.zg = this.o = this.He =
            this.Ge = void 0;
        this.Gi = f
    };
    l = zy.prototype;
    l.Ha = function(a, b) {
        void 0 === this.B(a) && (this.M[a] = b)
    };
    l.jh = function(a, b) {
        b <= this.La && (this.M[Q.qb] = a, this.La = b)
    };
    l.kh = function(a, b) {
        b <= this.Fe && (this.M[Q.rb] = a, this.Fe = b)
    };
    l.B = function(a) {
        return void 0 !== this.M[a] ? this.M[a] : void 0 !== this.g.getWithConfig(a) ? this.g.getWithConfig(a) : void 0 !== this.O[a] ? this.O[a] : yy[a]
    };
    l.getRemoteConfig = function(a) {
        return void 0 !== this.g.remoteConfig[a] ? this.g.remoteConfig[a] : this.O[a]
    };
    l.Ld = function(a) {
        var b = this.Eb(Q.gd, this.O[Q.gd]);
        if (b && void 0 !== b[a || this.eventName]) return b[a || this.eventName]
    };
    l.Eb = function(a, b) {
        var c = dj(this.s);
        if (c && c.hasOwnProperty(a)) return c[a];
        return b
    };
    l.Qg = function() {
        var a = this.B(Q.Aa);
        if ("object" === typeof a) return a
    };
    l.Rg = function() {
        return !!this.Qg()
    };
    l.abort = function() {
        throw "ABORT";
    };
    l.Sa = function() {
        return !(!0 !== this.B(Q.sc) && "true" !== this.B(Q.sc) || !this.B(Q.sa))
    };
    l.wj =
        function() {
            return this.F || !!this.B(Q.Yf)
        };
    var Ay = !1,
        By = function() {
            Ay = !0;
            Ay = !0;
        },
        Cy = function(a) {
            var b = !1;
            b = a.eventName === Q.mc && Xh() && a.Sa();
            return !(!Tb.sendBeacon || a.rd || a.Ke || a.F || a.Ee || a.nb || b || Ay)
        };
    var Dy = function(a) {
        Pg("GA4_EVENT", a)
    };
    var Fy = function(a) {
            return !a || Ey.test(a) || Q.hi.hasOwnProperty(a)
        },
        Gy = function(a) {
            var b = a[Q.we];
            if (b) return b;
            var c = a[Q.vb];
            if (Ga(c)) {
                if ("function" === typeof URL) try {
                    return (new URL(c)).pathname
                } catch (e) {
                    return
                }
                var d = tj(c);
                return d.hostname ? rj(d, "path") : void 0
            }
        },
        Hy = function(a, b, c) {
            if (c) switch (c.type) {
                case "event_name":
                    return a;
                case "const":
                    return c.const_value;
                case "event_param":
                    var d = c.event_param.param_name,
                        e = b[d];
                    return e
            }
        },
        Iy = function(a, b, c) {
            for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) {
                var f = d[e];
                if (f.edit_param) {
                    var g = f.edit_param.param_name,
                        h = Hy(a, b, f.edit_param.param_value),
                        k;
                    if (h) {
                        var n = Number(h);
                        k = isNaN(n) ? h : n
                    } else k = h;
                    b[g] = k
                } else f.delete_param && delete b[f.delete_param.param_name]
            }
        },
        Jy = function(a, b) {
            var c = b.values || [],
                d = Hy(a.eventName, a.M, c[0]),
                e = Hy(a.eventName, a.M, c[1]),
                f = b.type;
            if ("eqi" === f || "swi" === f || "ewi" === f || "cni" === f) d = "string" === typeof d ? d.toLowerCase() : d, e = "string" === typeof e ? e.toLowerCase() :
                e;
            var g = !1;
            switch (f) {
                case "eq":
                case "eqi":
                    g = String(d) == String(e);
                    break;
                case "sw":
                case "swi":
                    g = 0 == String(d).indexOf(String(e));
                    break;
                case "ew":
                case "ewi":
                    g = Ot(d, e);
                    break;
                case "cn":
                case "cni":
                    g = 0 <= String(d).indexOf(String(e));
                    break;
                case "lt":
                    g = Number(d) < Number(e);
                    break;
                case "le":
                    g = Number(d) <= Number(e);
                    break;
                case "gt":
                    g = Number(d) > Number(e);
                    break;
                case "ge":
                    g = Number(d) >= Number(e);
                    break;
                case "re":
                case "rei":
                    g = Qt(d, e, "rei" === f)
            }
            return !!b.negate !== g
        },
        Ky = function(a, b) {
            var c = b.event_name_predicate;
            if (c && !Jy(a,
                    c)) return !1;
            var d = b.conditions || [];
            if (0 === d.length) return !0;
            for (var e = 0; e < d.length; e++) {
                for (var f = d[e].predicates || [], g = !0, h = 0; h < f.length; h++)
                    if (!Jy(a, f[h])) {
                        g = !1;
                        break
                    }
                if (g) return !0
            }
            return !1
        },
        Ey = /^(_|ga_|google_|gtag\.|firebase_).*$/;
    var Ly = function(a) {
            var b = 0,
                c = 0;
            return {
                start: function() {
                    b = bb()
                },
                stop: function() {
                    c = this.get()
                },
                get: function() {
                    var d = 0;
                    a.jf() && (d = bb() - b);
                    return d + c
                }
            }
        },
        My = function() {
            this.g = void 0;
            this.o = 0;
            this.isActive = this.isVisible = this.s = !1;
            this.F = this.C = void 0
        };
    l = My.prototype;
    l.ki = function(a) {
        var b = this;
        if (!this.g) {
            this.s = H.hasFocus();
            this.isVisible = !H.hidden;
            this.isActive = !0;
            var c = function(d, e, f) {
                ec(d, e, function(g) {
                    b.g.stop();
                    f(g);
                    b.jf() && b.g.start()
                })
            };
            c(m, "focus", function() {
                b.s = !0
            });
            c(m, "blur", function() {
                b.s = !1
            });
            c(m, "pageshow", function(d) {
                b.isActive = !0;
                d.persisted && Rg(56);
                b.F && b.F()
            });
            c(m, "pagehide", function() {
                b.isActive = !1;
                b.C && b.C()
            });
            c(H, "visibilitychange", function() {
                b.isVisible = !H.hidden
            });
            a.Sa() && -1 === (Tb.userAgent || "").indexOf("Firefox") && -1 === (Tb.userAgent || "").indexOf("FxiOS") && c(m, "beforeunload", function() {
                By()
            });
            this.wf();
            this.o = 0
        }
    };
    l.wf = function() {
        this.o +=
            this.Kd();
        this.g = Ly(this);
        this.jf() && this.g.start()
    };
    l.Vj = function(a) {
        a.Xb = this.Kd()
    };
    l.gj = function(a) {
        a.Xb = 0;
        this.wf();
        this.o = 0
    };
    l.jf = function() {
        return this.s && this.isVisible && this.isActive
    };
    l.bj = function() {
        return this.o + this.Kd()
    };
    l.Kd = function() {
        return this.g && this.g.get() || 0
    };
    l.Jj = function(a) {
        this.C = a
    };
    l.fh = function(a) {
        this.F = a
    };

    function Ny() {
        return m.gaGlobal = m.gaGlobal || {}
    }
    var Oy = function() {
            var a = Ny();
            a.hid = a.hid || Ka();
            return a.hid
        },
        Py = function(a, b) {
            var c = Ny();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var Sy = function(a, b) {
            var c = !0;
            return c
        },
        Uy = function(a) {
            var b;
            return b
        },
        Qy = function(a, b, c) {
            var d = String(c.B(Q.ka)),
                e = String(c.B(Q.Za)),
                f = Number(c.B(Q.qa)),
                g = c.B(Q.Qb),
                h = {
                    Va: Q.I,
                    domain: d,
                    path: e,
                    expires: f ? new Date(bb() + 1E3 * f) : void 0,
                    flags: "" + c.B(Q.Ga)
                };
            if (!1 === g && Vy(c) === b) return !0;
            var k = lk(b, Wy[0], d, e);
            return 1 !== ek(a, k, h)
        },
        Ty = function(a, b) {
            var c = "" + b.B(Q.ka),
                d = "" + b.B(Q.Za),
                e = kk(a, c, d, Wy, Q.I);
            if (!e) {
                var f = String(b.B(Q.Pb));
                f && f != a && (e = kk(f, c, d, Wy, Q.I))
            }
            return e
        },
        Ry = function(a) {
            return a.B(Q.ra) + "_ga_ecid"
        },
        Yy = function(a, b) {
            return Qy(Xy(b), a, b)
        },
        Vy = function(a) {
            return Ty(Xy(a), a)
        },
        Xy = function(a) {
            return String(a.B(Q.ra)) + "_ga"
        },
        Wy = ["GA1"];
    var az = function(a, b) {
            var c = Zy(b),
                d = String(b.B(Q.ka)),
                e = String(b.B(Q.Za)),
                f = Number(b.B(Q.qa)),
                g = lk(a, $y[0], d, e),
                h = {
                    Va: Q.I,
                    domain: d,
                    path: e,
                    expires: f ? new Date(bb() + 1E3 * f) : void 0,
                    flags: String(b.B(Q.Ga))
                };
            return 1 !== ek(c, g, h)
        },
        bz = function(a) {
            var b = Zy(a),
                c = String(a.B(Q.ka)),
                d = String(a.B(Q.Za));
            return kk(b, c, d, $y, Q.I)
        },
        $y = ["GS1"],
        Zy = function(a) {
            return String(a.B(Q.ra)) + "_ga_" + a.s.substr(2)
        },
        cz = function(a) {
            var b;
            var c = a.M[Q.wc],
                d = a.M[Q.ye],
                e = !!a.M[Q.Zf];
            if (c && d) {
                var f = [c, d, Sa(a.M[Q.xe]), a.C, a.Fb];
                b = f.join(".")
            } else b = void 0;
            return b
        };
    var dz = function(a) {
            var b = a.B(Q.la),
                c = a.getRemoteConfig(Q.la);
            if (c === b) return c;
            var d = Hc(b);
            c && c[Q.P] && (d[Q.P] = (d[Q.P] || []).concat(c[Q.P]));
            return d
        },
        ez = function(a, b, c, d) {
            var e = al(!0);
            if ("1" !== e._up) return {};
            var f = e[b],
                g = e[d],
                h;
            a.o && (h = e[c]);
            return {
                clientId: f,
                Mg: h,
                ih: g
            }
        },
        fz = function(a, b, c, d) {
            var e = al(!0),
                f = e[b];
            f && (a.jh(f, 2), Yy(f, a));
            var g = e._z;
            g && (a.He = g);
            var h = e[c];
            a.o && h && (a.kh(h, 2), Sy(h, a));
            var k = e[d];
            k && az(k, a);
            return a.o ? !!(f && h && k) : !(!f || !k)
        },
        gz, hz = !1,
        iz = [0, 1, 2, 3];
    var jz = !1,
        kz = function(a) {
            var b = dz(a) || {},
                c = Xy(a),
                d = Ry(a),
                e = Zy(a);
            kl(b[Q.Tb], !!b[Q.P]) && fz(a, c, d, e) && (jz = !0);
            if (b[Q.P]) {
                var f = function() {
                    var g = {},
                        h = Vy(a);
                    h && (g[c] = h);
                    if (a.o) {
                        var k = Uy(a);
                        k && (g[d] = k)
                    }
                    var n = bz(a);
                    n && (g[e] = n);
                    var p = Vj("FPLC", void 0, void 0, Q.I);
                    p.length && (g._fplc = p[0]);
                    return g
                };
                hz ? hl(f, b[Q.P], b[Q.Ub], !!b[Q.ub], gz) : hl(f, b[Q.P], b[Q.Ub], !!b[Q.ub])
            }
        },
        mz = function(a) {
            if (!a.B(Q.eb)) return {};
            var b = Xy(a),
                c = Ry(a),
                d = Zy(a);
            il(function() {
                var e;
                if (ji("analytics_storage")) e = {};
                else {
                    var f = {},
                        g = (f._up = "1", f[b] = a.M[Q.qb], f[d] = cz(a), f);
                    a.o && (g[c] = a.M[Q.rb]);
                    e = g
                }
                return e
            }, 1);
            if (!ji("analytics_storage") && lz()) return ez(a, b, c, d);
            return {}
        },
        lz = function() {
            var a = qj(m.location, "host"),
                b = qj(tj(H.referrer), "host");
            return a && b ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a) ? !0 : !1 : !1
        };
    var nz = function() {
        var a = bb(),
            b = a + 864E5,
            c = 20,
            d = 5E3;
        return function() {
            var e = bb();
            e >= b && (b = e + 864E5, d = 5E3);
            if (1 > d) return !1;
            c = Math.min(c + (e - a) / 1E3 * 5, 20);
            a = e;
            if (1 > c) return !1;
            d--;
            c--;
            return !0
        }
    };
    var oz = !1;
    oz = !0;
    var pz = "" + Ka(),
        qz = !1,
        rz = void 0;
    var sz = function() {
        if (Da(m.__uspapi)) {
            var a = "";
            try {
                m.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var tz = function(a, b) {
            if (b.Sa()) {
                var c = sz();
                c && (a.us_privacy = c);
                var d = Lo();
                d && (a.gdpr = d);
                var e = Jo();
                e && (a.gdpr_consent = e)
            }
        },
        vz = function(a, b) {
            if (Xh() && (a.gcs = ki(), b.Ie && (a.gcu = "1"), b.Sa())) {
                Yh() && (a.gcd = li());
                var c = b.B(Q.V);
                a.adr = void 0 !== c && !1 !== c ? "1" : "0";
                b.Ie && (a.gcut = uz[b.vg || ""]);
            }
        },
        wz = function(a, b, c) {
            void 0 === c && (c = {});
            if ("object" === typeof b)
                for (var d in b) wz(a + "." + d, b[d], c);
            else c[a] = b;
            return c
        },
        xz = function(a) {
            var b = "https://www.google-analytics.com/g/collect",
                c = Xn(a.B(Q.sa), "/g/collect");
            if (c) return c;
            var d = !0;
            ji(Q.D) && ji(Q.I) || (d = !1);
            var e = !1 !== a.B(Q.Ea);
            e = !0;
            var f = a.Eb(Q.ab, a.B(Q.ab)),
                g = a.Eb(Q.Sb, a.B(Q.Sb));
            f && !g && e && !1 !== a.B(Q.nc) && tq() && d && (b = "https://analytics.google.com/g/collect");
            return b
        },
        yz = {},
        uz = (yz[Q.D] = "1", yz[Q.I] = "2", yz),
        zz = {};
    zz[Q.ei] = "tid";
    zz[Q.qb] = "cid";
    zz[Q.tb] = "ul";
    zz[Q.qe] =
        "_fid";
    zz[Q.ig] = "tt";
    zz[Q.te] = "ir";
    var Az = {};
    Az[Q.wc] = "sid";
    Az[Q.ye] = "sct";
    Az[Q.xe] = "seg";
    Az[Q.vb] = "dl";
    Az[Q.Oa] = "dr";
    Az[Q.ld] = "dt";
    Az[Q.fa] = "cu";
    Az[Q.xb] = "uid";
    var Bz = {};
    Bz[Q.Nf] = "cc";
    Bz[Q.Of] = "ci";
    Bz[Q.Pf] = "cm";
    Bz[Q.Qf] = "cn";
    Bz[Q.Rf] = "cs";
    Bz[Q.Sf] = "ck";
    var Cz = function(a, b, c) {
        function d(z, A) {
            if (void 0 !== A && !Q.fi.hasOwnProperty(z)) {
                null === A && (A = "");
                var C;
                if ("_" === z.charAt(0)) {
                    e[z] = Bf(A, 300)
                } else if (zz[z]) C = zz[z], e[C] = Bf(A, 300);
                else if (Az[z]) C = Az[z], g[C] = Bf(A, 300);
                else if (!t(z, A)) {
                    r(z, A)
                }
            }
        }
        var e = {},
            f = {},
            g = {};
        e.v = "2";
        e.tid = a.s;
        e.gtm = fo();
        e._p = Oy();
        a.Ne && (e.sr = a.Ne);
        a.He && (e._z = a.He);
        c && (e.em = c);
        a.nb && (e._gaz = 1);
        vz(e, a);
        tz(e, a);
        a.zg && (e.gtm_up = "1");
        var h = lb(Yi(a.g, Q.X, 1), ".");
        h && (e.gdid = h);
        f.en = Bf(a.eventName, 40);
        a.sd && (f._fv = a.yg ? 2 : 1);
        a.wg && (f._nsi = 1);
        a.F && (f._ss = a.Ag ? 2 : 1);
        a.rd && (f._c = 1);
        0 < a.Xb && (f._et = a.Xb);
        if (a.Je) {
            var k = a.B(Q.ba);
            if (Ia(k))
                for (var n = 0; n < k.length && 200 > n; n++) f["pr" + (n + 1)] = Gf(k[n])
        }
        a.Ge && (f._eu = a.Ge);
        var p = lb(Yi(a.g, Q.X, 2), ".");
        p && (f.edid = p);
        for (var r = function(z,
                A) {
                z = Bf(z, 40);
                var C = "ep." + z,
                    E = "epn." + z;
                z = Ha(A) ? E : C;
                var D = Ha(A) ? C : E;
                f.hasOwnProperty(D) && delete f[D];
                f[z] = Bf(A, 100)
            }, t = function(z, A) {
                var C = z.split(".");
                if (z === Q.Aa && "object" !== typeof A) return r(z, A), !0;
                if (C[0] === Q.Aa) {
                    if ((1 < C.length || "object" === typeof A) && a.Sa()) {
                        var E = wz(z, A);
                        Qa(E, function(D, F) {
                            return void r(D, F)
                        })
                    }
                    return !0
                }
                return !1
            }, u = 0; u < Q.kg.length; ++u) {
            var q = Q.kg[u];
            d(q, a.B(q))
        }
        a.Je && d(Q.fa, a.B(Q.fa));
        Qa(a.yi, d);
        Qa(a.M, d);
        var y = a.B(Q.Pa) || {};
        !1 !== a.B(Q.Ea) && sq() || (y._npa = "1");
        Qa(y, function(z, A) {
            if (void 0 !== A && (null === A && (A = ""), b[z] !== A)) {
                if (z !== Q.xb || g.uid) {
                    var C = (Ha(A) ? "upn." : "up.") + Bf(z, 24);
                    f[C] = Bf(A, 36)
                } else g.uid =
                    Bf(A, 36);
                b[z] = A
            }
        });
        var x = !1;
        return If.call(this, {
            Ua: e,
            Ib: g,
            M: f
        }, xz(a), a.Sa(), x) || this
    };
    ka(Cz, If);
    var Dz = function(a, b) {
            return a.replace(/\$\{([^\}]+)\}/g, function(c, d) {
                return b[d] || c
            })
        },
        Ez = function(a) {
            var b = a.search;
            return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
        },
        Fz = function(a) {
            var b = {},
                c = "",
                d = a.pathname.indexOf("/g/collect");
            0 <= d && (c = a.pathname.substring(0, d));
            b.transport_url = a.protocol + "//" + a.hostname + c;
            return b
        },
        Gz = function(a, b) {
            var c = new m.XMLHttpRequest;
            c.withCredentials = !0;
            var d = b ? "POST" : "GET",
                e = "",
                f = 0,
                g = tj(a),
                h = Fz(g),
                k = Ez(g);
            c.onprogress = function(n) {
                if (200 === c.status) {
                    e += c.responseText.substring(f);
                    f = n.loaded;
                    for (var p = Dz(e, h), r = p.indexOf("\n\n"); - 1 !== r;) {
                        var t;
                        a: {
                            var u = ba(p.substring(0, r).split("\n")),
                                q = u.next().value,
                                v = u.next().value;
                            if (q.startsWith("event: message") && v.startsWith("data: ")) try {
                                t = JSON.parse(v.substring(v.indexOf(":") + 1));
                                break a
                            } catch (S) {}
                            t = void 0
                        }
                        if (t) {
                            var w = t.send_pixel || [];
                            if (Array.isArray(w))
                                for (var y = 0; y < w.length; y++) {
                                    var x = w[y],
                                        z = go('',
                                            0);
                                    if (1 === z) {
                                        var A = Math.floor(2 * Math.random()) + 1,
                                            C, E = x,
                                            D = A,
                                            F = 0 < E.indexOf("?") ? "&" : "?";
                                        C = "" + E + F + "gtmexpsb=" + D;
                                        2 === A ? kc(C) : dc(C)
                                    } else 2 === z ? kc(x) : dc(x)
                                }
                        }
                        p = p.substring(r + 2);
                        r = p.indexOf("\n\n")
                    }
                    e = p
                }
            };
            c.open(d, k);
            c.send(b);
        };
    var Kz = function(a, b, c, d) {
            var e = a + "?" + b;
            Hz && (d = !(0 === e.indexOf("https://www.google-analytics.com/g/collect") || 0 === e.indexOf("https://analytics.google.com/g/collect")));
            Iz && d && !Ay ? Gz(e, c) : Jz(a, b, c)
        },
        Lz = function(a) {
            return a && 0 === a.indexOf("google.") && "google.com" != a ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", a) : void 0
        },
        Iz = !1;
    Iz = !0;
    var Hz = !1;
    var Mz = function() {
        this.C = 1;
        this.F = {};
        this.g = new Jf;
        this.o = -1
    };
    Mz.prototype.s = function(a, b) {
        var c = this,
            d;
        try {
            d = new Cz(a, this.F, b)
        } catch (n) {
            a.abort()
        }
        var e = Cy(a);
        e && this.g.C(d) || this.flush();
        if (e && this.g.add(d)) {
            if (0 > this.o) {
                var f = m,
                    g = f.setTimeout,
                    h;
                a.Sa() ? Nz ? (Nz = !1, h = Oz) : h = Pz : h = 5E3;
                this.o = g.call(f, function() {
                    return c.flush()
                }, h)
            }
        } else {
            var k = Lf(d, this.C++);
            Kz(d.o, k.sf, k.body, d.C);
            Qz(d, a.Ee, a.nb, String(a.Eb(Q.kd, a.B(Q.kd))))
        }
    };
    Mz.prototype.add = function(a) {
        a.Ke ? this.O(a) : this.s(a)
    };
    Mz.prototype.flush = function() {
        if (this.g.events.length) {
            var a = Mf(this.g, this.C++);
            Kz(this.g.g, a.sf, a.body, this.g.o);
            this.g = new Jf;
            0 <= this.o && (m.clearTimeout(this.o), this.o = -1)
        }
    };
    Mz.prototype.O = function(a) {
        var b = this,
            c = a.Qg();
        c ? Li(c, function(d) {
            b.s(a, d)
        }) : this.s(a)
    };
    var Qz = function(a, b, c, d) {
            function e(h) {
                f.push(h + "=" + encodeURIComponent("" + a.Ua[h]))
            }
            if (b || c) {
                var f = [];
                e("tid");
                e("cid");
                e("gtm");
                f.push("aip=1");
                a.Ib.uid && f.push("uid=" + encodeURIComponent("" +
                    a.Ib.uid));
                b && (Jz("https://stats.g.doubleclick.net/g/collect", "v=2&" + f.join("&")), di("https://stats.g.doubleclick.net/g/collect?v=2&" + f.join("&")));
                if (c) {
                    f.push("z=" + Ka());
                    var g = Lz(d);
                    g && dc(g + f.join("&"))
                }
            }
        },
        Jz = function(a, b, c) {
            var d = a + "?" + b;
            c ? Tb.sendBeacon && Tb.sendBeacon(d, c) : kc(d)
        },
        Oz = go('', 500),
        Pz = go('', 5E3),
        Nz = !0;
    var Rz = window,
        Sz = document,
        Tz = function(a) {
            var b = Rz._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === Rz["ga-disable-" + a]) return !0;
            try {
                var c = Rz.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = Rj("AMP_TOKEN", String(Sz.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return Sz.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var Uz = {};
    var Vz = function(a, b) {
        var c = Q.D;
        ji(c) || ni(function() {
            b.Ie = !0;
            b.vg = c;
            a.Bg(b)
        }, c)
    };
    Uz.gi = "";
    var Wz = function(a, b) {
        this.nb = a;
        this.Xb = b;
        this.La = new Mz;
        this.o = void 0;
        this.F = new My;
        this.g = this.C = this.s = void 0;
        this.O = !1
    };
    l = Wz.prototype;
    l.Dj = function(a, b, c) {
        var d = this,
            e = !1;
        if (c.eventModel[Q.Wb]) {
            e = !0;
            if ("_" === a.charAt(0)) return;
            a !== Q.za && a !== Q.Ma && Fy(a) && Rg(58);
            Xz(c)
        }
        var f = new zy(this.nb, a, b, c, this.Xb, e),
            g = [Q.I],
            h = !1;
        h = f.Sa();
        (f.Eb(Q.ab, f.B(Q.ab)) || h) && g.push(Q.D);
        oi(function() {
            d.Ej(f)
        }, g)
    };
    l.Ej = function(a) {
        this.g = a;
        try {
            Tz(a.s) && (Rg(28), a.abort());
            0 <= Uz.gi.replace(/\s+/g, "").split(",").indexOf(a.eventName) && (Rg(33), a.abort());
            var b = a.Ld();
            b && b.blacklisted && (Rg(34), a.abort());
            var c = H.location.protocol;
            "http:" != c && "https:" != c && (Rg(29), a.abort());
            Tb && "preview" == Tb.loadPurpose && (Rg(30), a.abort());
            var d = Sg.grl;
            d || (d = nz(), Sg.grl = d);
            d() || (Rg(35), a.abort());
            this.li(a);
            this.F.Vj(a);
            var g = this.eh,
                h;
            b: {
                if (!a.B(Q.eb) || ji(Q.I) || 1 === a.La) break b;a.zg = !0;
            }
            a.eventName === Q.za ? (a.B(Q.eb) && Il(["aw", "dc"]), kz(a), h = mz(a)) : h = {};
            g.call(this, h);
            a.eventName ==
                Q.za && (a.Gi && 0 < $i(a.g).length && (Rg(68), 1 < Sg.configCount && Rg(69)), a.B(Q.Vb) || a.abort(), a.g.eventModel[Q.X] && (a.g.containerConfig[Q.X] = a.g.eventModel[Q.X], a.g.eventModel[Q.X] = void 0), a.eventName = Q.mc);
            var k = this.o,
                n = this.s,
                p = this.C,
                r = this.F,
                t = bz(a);
            t || (t = p);
            var u = Sa(a.B(Q.vc)),
                q;
            q = Sa(a.B(Q.nd));
            var v;
            a: {
                if (t) {
                    var w = t.split(".");
                    if (!(5 > w.length || 6 < w.length)) {
                        v = {
                            sessionId: w[0],
                            zf: Number(w[1]),
                            Sd: !!Number(w[2]),
                            kf: Number(w[3]),
                            Fb: Number(w[4] || 0),
                            Pc: "1" === w[5]
                        };
                        break a
                    }
                }
                v = void 0
            }
            v && v.Fb && (a.Fb = Math.max(0, v.Fb - Math.max(0, a.C - v.kf)));
            var y = !1;
            v || (y = a.sd = !0, v = {
                sessionId: String(a.C),
                zf: 1,
                Sd: !1,
                kf: a.C,
                Pc: !1
            });
            a.C > v.kf + 60 * u && (y = !0, v.sessionId = String(a.C), v.zf++, v.Sd = !1);
            if (y) a.F = !0, r.gj(a);
            else if (r.bj() > q || a.eventName == Q.mc) v.Sd = !0;
            a.Ha(Q.wc, v.sessionId);
            a.Ha(Q.ye, v.zf);
            a.Ha(Q.xe, v.Sd ? 1 : 0);
            var x = a.B(Q.qb),
                z = a.La;
            x || (x = Vy(a), z = 3);
            x || (x = k, z = 4);
            if (!x) {
                var A = ji(Q.I),
                    C = Ny();
                x = !C.from_cookie || A ? C.vid : void 0;
                z = 5
            }
            x ? x = "" + x : (a.sd = a.wg = !0, x = hk(), z = 6);
            a.jh(x, z);
            a: {}
            var F =
                "",
                S = H.location;
            if (S) {
                var M = S.pathname || "";
                "/" != M.charAt(0) && (M = "/" + M);
                F = S.protocol + "//" + S.hostname + M + S.search
            }
            a.Ha(Q.vb, F);
            var J;
            a: {
                var O = Vj("_opt_expid", void 0, void 0, Q.I)[0];
                if (O) {
                    var N = decodeURIComponent(O).split("$");
                    if (3 === N.length) {
                        J = N[2];
                        break a
                    }
                }
                if (void 0 !== Sg.ga4_referrer_override) J = Sg.ga4_referrer_override;
                else {
                    var L = lh("gtm.gtagReferrer." + a.s);
                    J = L ? "" + L : H.referrer
                }
            }
            var V = J;
            V && a.Ha(Q.Oa, V);
            a.Ha(Q.ld, H.title);
            a.Ha(Q.tb, (Tb.language || "").toLowerCase());
            var Z = m.screen,
                W = Z ? Z.width : 0,
                Ea = Z ? Z.height :
                0;
            a.Ne = W + "x" + Ea;
            var Fa = !1 !== a.B(Q.Ea);
            Fa = !0;
            if (Fa && !1 !== a.B(Q.nc) && tq() && ji(Q.D)) {
                var Aa = a.Eb(Q.ab, a.B(Q.ab)),
                    Na = a.Eb(Q.Sb, a.B(Q.Sb));
                a.wj() && (a.Ee = !!Aa);
                Aa && !Na && 0 === a.Fb && (a.Fb = 60, a.nb = !0)
            }
            Yz(a);
            a.Je = Q.lg.hasOwnProperty(a.eventName);
            for (var da = a.B(Q.ue) || [], Ba = 0; Ba < da.length; Ba++) {
                var Ua = da[Ba];
                if (Ua.rule_result) {
                    a.Ha(Q.ig, Ua.traffic_type);
                    Dy(3);
                    break
                }
            }
            if (a.B(Q.sa)) {
                var Va = dz(a) || {},
                    pb = kl(Va[Q.Tb], !!Va[Q.P]) ? al(!0)._fplc : void 0;
                a.M._fplc = pb || (0 < Vj("FPLC", void 0, void 0, Q.I).length ? void 0 : "0")
            }
            if (void 0 === a.B(Q.te)) {
                var Pa = a.B(Q.md),
                    rd, Td;
                a: {
                    if (jz) {
                        var Fe = dz(a) || {};
                        if (Fe && Fe[Q.P])
                            for (var Vc = rj(tj(a.B(Q.Oa)), "host", !0), Ud = Fe[Q.P], sd = 0; sd < Ud.length; sd++)
                                if (Ud[sd] instanceof RegExp) {
                                    if (Ud[sd].test(Vc)) {
                                        Td = !0;
                                        break a
                                    }
                                } else if (0 <= Vc.indexOf(Ud[sd])) {
                            Td = !0;
                            break a
                        }
                    }
                    Td = !1
                }
                var td;
                if (!(td = Td))
                    if (oz) td = !1;
                    else {
                        var Vd = rj(tj(a.B(Q.Oa)), "host", !0),
                            Wd;
                        var Wc = String(a.B(Q.ka));
                        if ("none" !== Wc)
                            if ("auto" !== Wc) Wd =
                                Wc;
                            else {
                                if (!qz) {
                                    for (var Nf = String(a.B(Q.Za)), Xd = bk(), mc = 0; mc < Xd.length; mc++)
                                        if ("none" !== Xd[mc]) {
                                            var Of = String(a.B(Q.ra)) + "_ga_autodomain";
                                            if (0 === ek(Of, pz, {
                                                    Va: Q.I,
                                                    domain: Xd[mc],
                                                    path: Nf
                                                })) {
                                                ek(Of, void 0, {
                                                    Va: Q.I,
                                                    domain: Xd[mc],
                                                    path: Nf
                                                });
                                                rz = Xd[mc];
                                                break
                                            }
                                        }
                                    qz = !0
                                }
                                Wd = rz
                            }
                        else Wd = void 0;
                        var Nh = Wd;
                        td = Nh ? 0 <= Vd.indexOf(Nh) : !1
                    }
                if (!(rd = td)) {
                    var xa;
                    if (xa = Pa) a: {
                        for (var oa = Pa.include_conditions || [], $a = 0; $a < oa.length; $a++)
                            if (oa[$a].test(a.B(Q.Oa))) {
                                xa = !0;
                                break a
                            }
                        xa = !1
                    }
                    rd = xa
                }
                rd && (a.Ha(Q.te, 1), Dy(4))
            }
            if (a.eventName == Q.Ma) {
                var Yd =
                    a.B(Q.Na);
                a.B(Q.$a)(a.B(Yd));
                a.abort()
            }
            if (a.M[Q.zd]) delete a.M[Q.zd];
            else {
                var Ec = a.B(Q.ke);
                if (Ec) {
                    for (var Nb = Ec.edit_rules || [], nc = !1, Cb = 0; Cb < Nb.length; Cb++) {
                        var Db;
                        a: {
                            var T = a,
                                oc = Nb[Cb];
                            if (Ky(T, oc)) {
                                if (oc.new_event_name) {
                                    var Zd = "string" === typeof oc.new_event_name ? String(oc.new_event_name) : Hy(T.eventName, T.M, oc.new_event_name);
                                    if (Fy(Zd)) {
                                        Db = !1;
                                        break a
                                    }
                                    T.eventName = String(Zd)
                                }
                                Iy(T.eventName, T.M, oc);
                                var Oa = T.M[Q.zd] = !0;
                                Dy(2);
                                if (Oa) {
                                    var Pf = T.eventName,
                                        Ge = T.M,
                                        He = T.s;
                                    pr().insert("event", [Ge, Pf], He);
                                    T.abort()
                                }
                                Db = !0
                            } else Db = !1
                        }
                        Db && (nc = !0)
                    }
                    for (var Qf = Ec.synthesis_rules || [], ud = 0; ud < Qf.length; ud++) {
                        var Ie = a,
                            Fc = Qf[ud];
                        if (Ky(Ie, Fc)) {
                            var Xc = Fc.new_event_name;
                            if (!Fy(Xc)) {
                                var $d = Fc.merge_source_event_params ? Hc(Ie.M) : {};
                                $d[Q.zd] = !0;
                                Iy(Xc, $d, Fc);
                                var Oh = Xc,
                                    Ub = $d,
                                    jb = Ie.s;
                                pr().insert("event", [Ub, Oh], jb);
                                Dy(1)
                            }
                        }
                    }
                }
            }
            var ae = a.M[Q.ze];
            if (Ia(ae))
                for (var Yc = 0; Yc < ae.length; Yc++) Dy(ae[Yc]);
            var Je = Qg("GA4_EVENT");
            Je && (a.Ge = Je);
            var eA = this.eh,
                Wq = this.o,
                Xq = this.s,
                el;
            var fl = cz(a);
            fl ? (az(fl, a) || (Rg(25), a.abort()), el = fl) : el = void 0;
            var fA = el,
                Ph;
            var vd = a.M[Q.qb];
            Wq && vd === Wq ? Ph = vd : vd ? (vd = "" + vd, Yy(vd, a) || (Rg(31), a.abort()), Py(vd, ji(Q.I)), Ph = vd) : (Rg(32), a.abort(), Ph = "");
            var gA = Ph,
                Rf;
            a: {
                Rf = void 0
            }
            eA.call(this, {
                clientId: gA,
                Mg: Rf,
                ih: fA
            });
            this.Uj();
            a.Sa() && ("page_view" === a.eventName || a.rd) && Vz(this, a);
            this.F.wf();
            this.Bg(a);
            a.g.onSuccess()
        } catch (lA) {
            a.g.onFailure()
        }
        delete Og.GA4_EVENT
    };
    l.Bg = function(a) {
        this.La.add(a)
    };
    l.eh = function(a) {
        var b = a.clientId,
            c = a.Mg,
            d = a.ih;
        b && d && (this.o = b, this.s = c, this.C = d)
    };
    l.flush = function() {
        this.La.flush()
    };
    l.Uj = function() {
        var a = this;
        if (!this.O) {
            var b = ji(Q.I);
            mi([Q.I], function() {
                var c = ji(Q.I);
                if (b ^ c && a.g && a.C && a.o) {
                    var d = a.o;
                    if (c) {
                        var e = Vy(a.g);
                        e ? (a.o = e, a.C = bz(a.g), a.g.o && (a.s = Uy(a.g))) : (Yy(a.o, a.g), az(a.C, a.g), Py(a.o, !0), a.g.o && a.s && Sy(a.s, a.g));
                    } else {
                        a.C =
                            void 0;
                        a.o = void 0;
                        a.s = void 0;
                    }
                    b = c
                }
            });
            this.O = !0
        }
    };
    l.li = function(a) {
        a.eventName !== Q.Ma && this.F.ki(a)
    };
    var Yz = function(a) {
        var b = function(c) {
            return !!c && c.conversion
        };
        a.rd = b(a.Ld());
        a.sd && (a.yg = b(a.Ld("first_visit")));
        a.F && (a.Ag = b(a.Ld("session_start")))
    };

    function Xz(a) {
        delete a.eventModel[Q.Wb];
        Zz(a.eventModel)
    }
    var Zz = function(a) {
        Qa(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[Q.Pa] || {};
        Qa(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var $z = function(a) {
            if ("prerender" == H.visibilityState) return !1;
            a();
            return !0
        },
        aA = function(a) {
            if (!$z(a)) {
                var b = !1,
                    c = function() {
                        !b && $z(a) && (b = !0, fc(H, "visibilitychange", c), Rg(55))
                    };
                ec(H, "visibilitychange", c);
                Rg(54)
            }
        };
    var bA = function(a, b, c) {
            sr(b, c, a)
        },
        cA = function(a, b, c) {
            sr(b, c, a, !0)
        },
        hA = function(a, b) {
            var c = new Wz(a, b);
            aA(function() {
                dA(a, c)
            });
        };

    function dA(a, b) {
        var c = b.F;
        rr(a, function(d, e, f, g) {
            b.Dj(e, f, g)
        });
        c.Jj(function() {
            pr().flush();
            1E3 <= c.Kd() && Tb.sendBeacon && bA(a, Q.ae, {});
            By();
            b.flush();
            c.fh(function() {
                Ay = !1;
                Ay = !1;
                c.fh(void 0)
            })
        });
    }
    var Y = {
        h: {}
    };





    Y.h.read_container_data = ["google"],
        function() {
            (function(a) {
                Y.__read_container_data = a;
                Y.__read_container_data.m = "read_container_data";
                Y.__read_container_data.isVendorTemplate = !0;
                Y.__read_container_data.priorityOverride = 0
            })(function() {
                return {
                    assert: function() {},
                    R: function() {
                        return {}
                    }
                }
            })
        }();
    Y.h.c = ["google"],
        function() {
            (function(a) {
                Y.__c = a;
                Y.__c.m = "c";
                Y.__c.isVendorTemplate = !0;
                Y.__c.priorityOverride = 0
            })(function(a) {
                qt(a.vtp_value, "c", a.vtp_gtmEventId);
                return a.vtp_value
            })
        }();
    Y.h.e = ["google"],
        function() {
            (function(a) {
                Y.__e = a;
                Y.__e.m = "e";
                Y.__e.isVendorTemplate = !0;
                Y.__e.priorityOverride = 0
            })(function(a) {
                var b = String(sh(a.vtp_gtmEventId, "event"));
                a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
                return b
            })
        }();

    Y.h.v = ["google"],
        function() {
            (function(a) {
                Y.__v = a;
                Y.__v.m = "v";
                Y.__v.isVendorTemplate = !0;
                Y.__v.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = ht(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                qt(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();





    Y.h.gct = ["google"],
        function() {
            function a(d) {
                for (var e = [], f = 0; f < d.length; f++) try {
                    e.push(new RegExp(d[f]))
                } catch (g) {}
                return e
            }

            function b(d) {
                return d.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")
            }

            function c(d) {
                for (var e = [], f = 0; f < d.length; f++) {
                    var g = d[f].matchValue,
                        h;
                    switch (d[f].matchType) {
                        case "BEGINS_WITH":
                            h = "^" + b(g);
                            break;
                        case "ENDS_WITH":
                            h = b(g) + "$";
                            break;
                        case "EQUALS":
                            h = "^" + b(g) + "$";
                            break;
                        case "REGEX":
                            h = g;
                            break;
                        default:
                            h = b(g)
                    }
                    e.push(h)
                }
                return e
            }(function(d) {
                Y.__gct = d;
                Y.__gct.m = "gct";
                Y.__gct.isVendorTemplate = !0;
                Y.__gct.priorityOverride = 0
            })(function(d) {
                var e = {};
                0 < d.vtp_sessionDuration && (e[Q.vc] = d.vtp_sessionDuration);
                e[Q.gd] = d.vtp_eventSettings;
                e[Q.ke] = d.vtp_dynamicEventSettings;
                e[Q.ab] = 1 === d.vtp_googleSignals;
                e[Q.kd] = d.vtp_foreignTld;
                e[Q.Sb] = 1 === d.vtp_restrictDomain;
                e[Q.ue] = d.vtp_internalTrafficResults;
                var f = Q.la,
                    g = d.vtp_linker;
                g && g[Q.P] && (g[Q.P] = a(g[Q.P]));
                e[f] = g;
                var h = Q.md,
                    k = d.vtp_referralExclusionDefinition;
                k && k.include_conditions && (k.include_conditions = a(k.include_conditions));
                e[h] = k;
                var n = vr(d.vtp_trackingId),
                    p = n.referral_exclusion_conditions;
                p && (p.length && "object" === typeof p[0] && (p = c(p)), e[Q.md] = {
                    include_conditions: a(p)
                });
                var r = n.cross_domain_conditions;
                if (r) {
                    r.length && "object" === typeof r[0] && (r = c(r));
                    var t = {};
                    e[Q.la] = (t[Q.P] = a(r), t[Q.ub] = !0, t[Q.Tb] = !0, t[Q.Ub] = "query", t)
                }
                hA(d.vtp_trackingId, e);
                I(d.vtp_gtmOnSuccess)
            })
        }();




    Y.h.get = ["google"],
        function() {
            (function(a) {
                Y.__get = a;
                Y.__get.m = "get";
                Y.__get.isVendorTemplate = !0;
                Y.__get.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_settings;
                (a.vtp_deferrable ? cA : bA)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
                a.vtp_gtmOnSuccess()
            })
        }();








    var iA = {};
    iA.dataLayer = mh;
    iA.callback = function(a) {
        ch.hasOwnProperty(a) && Da(ch[a]) && ch[a]();
        delete ch[a]
    };
    iA.bootstrap = 0;
    iA._spx = !1;

    function jA() {
        Sg[K.J] = iA;
        eb(dh, Y.h);
        Ze = nf
    }

    function kA() {
        var a = !1;
        a && tm("INIT");
        Ih().g(Fh.g);
        Sg = m.google_tag_manager = m.google_tag_manager || {};
        Io();
        ll.enable_gbraid_cookie_write = !0;
        var b = !!Sg[K.J];
        if (b) {
            var c = Sg.zones;
            c && c.unregisterChild(K.J);
        } else {
            for (var f = data.resource || {}, g = f.macros || [], h = 0; h < g.length; h++) Re.push(g[h]);
            for (var k = f.tags || [], n = 0; n < k.length; n++) Ue.push(k[n]);
            for (var p = f.predicates || [], r = 0; r < p.length; r++) Te.push(p[r]);
            for (var t = f.rules || [], u = 0; u < t.length; u++) {
                for (var q = t[u], v = {}, w = 0; w < q.length; w++) v[q[w][0]] = Array.prototype.slice.call(q[w], 1);
                Se.push(v)
            }
            We = Y;
            Xe = St;
            uf = new tf;
            var y = data.sandboxed_scripts,
                x = data.security_groups,
                z = data.runtime || [],
                A = data.runtime_lines;
            gx = new me;
            jx();
            Qe = hx();
            var C = gx,
                E = dx();
            vb(C.g, "require", E);
            for (var D =
                    0; D < z.length; D++) {
                var F = z[D];
                if (!Ia(F) || 3 > F.length) {
                    if (0 === F.length) continue;
                    break
                }
                A && A[D] && A[D].length && ff(F, A[D]);
                gx.execute(F)
            }
            if (void 0 !== y)
                for (var S = ["sandboxedScripts"], M = 0; M < y.length; M++) {
                    var J = y[M].replace(/^_*/, "");
                    dh[J] = S
                }
            kx(x);
            jA();
            xs();
            fm = !1;
            gm = 0;
            if ("interactive" == H.readyState && !H.createEventObject || "complete" == H.readyState) im();
            else {
                ec(H, "DOMContentLoaded", im);
                ec(H, "readystatechange", im);
                if (H.createEventObject && H.documentElement.doScroll) {
                    var O = !0;
                    try {
                        O = !m.frameElement
                    } catch (W) {}
                    O && jm()
                }
                ec(m,
                    "load", im)
            }
            Sr = !1;
            "complete" === H.readyState ? Ur() : ec(m, "load", Ur);
            qn && m.setInterval(kn, 864E5);
            ah = (new Date).getTime();
            iA.bootstrap = ah;
            iA._spx = !0, vs();
            if (a) {
                var Z = um("INIT");
            }
        }
    }
    (function(a) {
        if (!m["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (H.referrer) {
                var c = tj(H.referrer);
                b = "cct.google" === qj(c, "host")
            }
            if (!b) {
                var d = Vj("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (m["__TAGGY_INSTALLED"] = !0, ac("https://cct.google/taggy/agent.js"))
        }
        var f = function(r) {
                var t = "GTM",
                    u = "GTM";
                t = "OGT", u = "GTAG";
                var q = m["google.tagmanager.debugui2.queue"];
                q || (q = [], m["google.tagmanager.debugui2.queue"] = q, ac("https://" + K.Yd + "/debug/bootstrap?id=" + K.J + "&src=" + u + "&cond=" + r + "&gtm=" + fo()));
                var v = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: Wb,
                        containerProduct: t,
                        debug: !1,
                        id: K.J
                    }
                };
                v.data.resume = function() {
                    a()
                };
                K.Ah && (v.data.initialPublish = !0);
                q.push(v)
            },
            g = void 0,
            h = rj(m.location, "query", !1, void 0, "gtm_debug");
        ys(h) && (g = 2);
        if (!g && H.referrer) {
            var k = tj(H.referrer);
            "tagassistant.google.com" === qj(k, "host") && (g = 3)
        }
        if (!g) {
            var n = Vj("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4)
        }
        if (!g) {
            var p = H.documentElement.getAttribute("data-tag-assistant-present");
            ys(p) && (g = 5)
        }
        g && Wb ? f(g) : a()
    })(kA);

})()