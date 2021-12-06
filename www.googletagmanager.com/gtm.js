// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "8",

            "macros": [{
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__e"
            }, {
                "function": "__u",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }],
            "tags": [{
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "469926391",
                "vtp_conversionLabel": "VqqPCM7F-esBEPeDiuAB",
                "vtp_rdp": false,
                "vtp_url": ["macro", 3],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableShoppingQualitySettings": true,
                "tag_id": 5
            }, {
                "function": "__gclidw",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableCrossDomain": false,
                "vtp_enableUrlPassthrough": false,
                "vtp_enableCookieOverrides": false,
                "vtp_enableCrossDomainFeature": true,
                "vtp_enableCookieFlagsFeature": true,
                "tag_id": 9
            }, {
                "function": "__cl",
                "tag_id": 10
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"505955180532498\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=505955180532498\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 8
            }],
            "predicates": [{
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "HTMLImageElement"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "bt_whatsapp"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "gtm.click"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "gtm.js"
            }],
            "rules": [
                [
                    ["if", 0, 1, 2],
                    ["add", 0, 3]
                ],
                [
                    ["if", 3],
                    ["add", 1, 2]
                ]
            ]
        },
        "runtime": []




    };

    var productSettings = {
        "AW-469926391": {
            "preAutoPii": true
        }
    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var h, aa = function(a) {
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
        ba = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ca;
    if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf;
    else {
        var da;
        a: {
            var fa = {
                    a: !0
                },
                ha = {};
            try {
                ha.__proto__ = fa;
                da = ha.a;
                break a
            } catch (a) {}
            da = !1
        }
        ca = da ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ia = ca,
        ka = function(a, b) {
            a.prototype = ba(b.prototype);
            a.prototype.constructor = a;
            if (ia) ia(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Hj = b.prototype
        },
        la = this || self,
        ma = function(a) {
            return a
        };
    var pa = function() {},
        sa = function(a) {
            return "function" == typeof a
        },
        ta = function(a) {
            return "string" == typeof a
        },
        ua = function(a) {
            return "number" == typeof a && !isNaN(a)
        },
        va = Array.isArray,
        wa = function(a, b) {
            if (a && va(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        xa = function(a, b) {
            if (!ua(a) || !ua(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        za = function(a, b) {
            for (var c = new ya, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        Aa = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Da = function(a) {
            return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Fa = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ga = function(a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a
        },
        Ha = function(a) {
            var b = [];
            if (va(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        La = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Oa = function() {
            return new Date(Date.now())
        },
        Pa = function() {
            return Oa().getTime()
        },
        ya = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    ya.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    ya.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Qa = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Ra = function(a) {
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
        Sa = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Ua = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Va = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Wa = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Ya = /^\w{1,9}$/,
        Za = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            Aa(a, function(d, e) {
                Ya.test(d) && e && c.push(d)
            });
            return c.join(b)
        };
    var $a, ab = function() {
        if (void 0 === $a) {
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
                $a = a
            } else $a = a
        }
        return $a
    };
    var cb = function(a, b) {
        this.m = b === bb ? a : ""
    };
    cb.prototype.toString = function() {
        return this.m + ""
    };
    var bb = {},
        db = function(a) {
            var b = ab(),
                c = b ? b.createScriptURL(a) : a;
            return new cb(c, bb)
        };
    var eb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function fb() {
        var a = la.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }

    function gb(a) {
        return -1 != fb().indexOf(a)
    };
    var hb = {},
        ib = function(a, b, c) {
            this.m = c === hb ? a : ""
        };
    ib.prototype.toString = function() {
        return this.m.toString()
    };
    var lb = function(a) {
            return a instanceof ib && a.constructor === ib ? a.m : "type_error:SafeHtml"
        },
        mb = function(a) {
            var b = ab(),
                c = b ? b.createHTML(a) : a;
            return new ib(c, null, hb)
        },
        nb = new ib(la.trustedTypes && la.trustedTypes.emptyHTML || "", 0, hb);
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function ob(a, b) {
        a.src = b instanceof cb && b.constructor === cb ? b.m : "type_error:TrustedResourceUrl";
        var c, d, e = (a.ownerDocument && a.ownerDocument.defaultView || window).document,
            f = null === (d = e.querySelector) || void 0 === d ? void 0 : d.call(e, "script[nonce]");
        (c = f ? f.nonce || f.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    };
    var pb = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        qb = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var rb = function(a) {
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
        a.innerHTML = lb(nb);
        return !c.parentElement
    });
    var m = window,
        B = document,
        tb = navigator,
        ub = B.currentScript && B.currentScript.src,
        vb = function(a, b) {
            var c = m[a];
            m[a] = void 0 === c ? b : c;
            return m[a]
        },
        wb = function(a) {
            var b = B.getElementsByTagName("script")[0] || B.body || B.head;
            b.parentNode.insertBefore(a, b)
        },
        xb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        yb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        zb = function(a, b, c, d) {
            var e = B.createElement("script");
            d && Aa(d, function(f, g) {
                f = f.toLowerCase();
                yb.hasOwnProperty(f) || e.setAttribute(f, g)
            });
            e.type = "text/javascript";
            e.async = !0;
            ob(e, db(a));
            xb(e, b);
            c && (e.onerror = c);
            wb(e);
            return e
        },
        Ab = function() {
            if (ub) {
                var a = ub.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Db = function(a, b) {
            var c = B.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = B.body && B.body.lastChild || B.body || B.head;
            d.parentNode.insertBefore(c,
                d);
            xb(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        Eb = function(a, b, c) {
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
        Fb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Gb = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        G = function(a) {
            m.setTimeout(a, 0)
        },
        Hb = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value :
                null
        },
        Ib = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Jb = function(a) {
            var b = B.createElement("div"),
                c = mb("A<div>" + a + "</div>"),
                d = b;
            if (rb())
                for (; d.lastChild;) d.removeChild(d.lastChild);
            d.innerHTML = lb(c);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        Kb = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Lb = function(a) {
            var b;
            try {
                b = tb.sendBeacon && tb.sendBeacon(a)
            } catch (c) {}
            b || Eb(a)
        },
        Mb = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Nb = function(a) {
            var b = B.featurePolicy;
            return b && sa(b.allowsFeature) ? b.allowsFeature(a) : !1
        },
        Ob = function() {
            return tb.userLanguage || tb.language
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Pb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Tb = function(a) {
            if (null == a) return String(a);
            var b = Pb.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Ub = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Vb = function(a) {
            if (!a || "object" != Tb(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Ub(a, "constructor") && !Ub(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Ub(a, b)
        },
        H = function(a, b) {
            var c = b || ("array" == Tb(a) ? [] : {}),
                d;
            for (d in a)
                if (Ub(a, d)) {
                    var e = a[d];
                    "array" == Tb(e) ? ("array" != Tb(c[d]) && (c[d] = []), c[d] = H(e, c[d])) : Vb(e) ? (Vb(c[d]) || (c[d] = {}), c[d] = H(e, c[d])) : c[d] = e
                }
            return c
        };
    var Wb = function(a) {
        if (void 0 === a || va(a) || Vb(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var Xb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Tg: a("consent"),
            Ug: a("consent_always_fire"),
            Xe: a("convert_case_to"),
            Ye: a("convert_false_to"),
            Ze: a("convert_null_to"),
            $e: a("convert_true_to"),
            af: a("convert_undefined_to"),
            qj: a("debug_mode_metadata"),
            rj: a("event_data_overrides"),
            pb: a("function"),
            Eh: a("instance_name"),
            Ih: a("live_only"),
            Jh: a("malware_disabled"),
            Kh: a("metadata"),
            uj: a("original_activity_id"),
            vj: a("original_vendor_template_id"),
            Oh: a("once_per_event"),
            Jf: a("once_per_load"),
            xj: a("priority_override"),
            yj: a("respected_consent_types"),
            Nf: a("setup_tags"),
            Of: a("tag_id"),
            Pf: a("teardown_tags")
        }
    }();
    var uc;
    var vc = [],
        Ac = [],
        Bc = [],
        Cc = [],
        Dc = [],
        Ec = {},
        Fc, Gc, Hc, Ic = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = Ec[c],
                f = {},
                g;
            for (g in a)
                if (a.hasOwnProperty(g))
                    if (0 === g.indexOf("vtp_")) e && d && d.$f && d.$f(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g];
                    else if (g === Xb.Ug.toString() && a[g]) {}
            e && d && d.Zf && (f.vtp_gtmCachedValues = d.Zf);
            return void 0 !== e ? e(f) : uc(c, f, b)
        },
        Kc = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Jc(a[e], b, c));
            return d
        },
        Jc = function(a, b, c) {
            if (va(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Jc(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = vc[f];
                        if (!g || b.Ee(g)) return;
                        c[f] = !0;
                        try {
                            var l = Kc(g, b, c);
                            l.vtp_gtmEventId = b.id;
                            d = Ic(l, {
                                event: b,
                                index: f,
                                type: 2
                            });
                            Hc && (d = Hc.ci(d, l))
                        } catch (A) {
                            b.pg && b.pg(A, Number(f)), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var k = 1; k < a.length; k += 2) d[Jc(a[k], b, c)] = Jc(a[k + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var n = !1, p = 1; p < a.length; p++) {
                            var r = Jc(a[p], b, c);
                            Gc && (n = n || r === Gc.Xc);
                            d.push(r)
                        }
                        return Gc && n ? Gc.gi(d) : d.join("");
                    case "escape":
                        d = Jc(a[1], b, c);
                        if (Gc && va(a[1]) && "macro" === a[1][0] && Gc.Ei(a)) return Gc.Ti(d);
                        d = String(d);
                        for (var v = 2; v < a.length; v++) Yb[a[v]] && (d = Yb[a[v]](d));
                        return d;
                    case "tag":
                        var t =
                            a[1];
                        if (!Cc[t]) throw Error("Unable to resolve tag reference " + t + ".");
                        return d = {
                            fg: a[2],
                            index: t
                        };
                    case "zb":
                        var q = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        q["function"] = a[1];
                        var u = Lc(q, b, c),
                            x = !!a[4];
                        return x || 2 !== u ? x !== (1 === u) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Lc = function(a, b, c) {
            try {
                return Fc(Kc(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var Oc = function(a) {
            function b(v) {
                for (var t = 0; t < v.length; t++) d[v[t]] = !0
            }
            for (var c = [], d = [], e = Mc(a), f = 0; f < Ac.length; f++) {
                var g = Ac[f],
                    l = Nc(g, e);
                if (l) {
                    for (var k = g.add || [], n = 0; n < k.length; n++) c[k[n]] = !0;
                    b(g.block || [])
                } else null === l && b(g.block || []);
            }
            for (var p = [], r = 0; r < Cc.length; r++) c[r] && !d[r] && (p[r] = !0);
            return p
        },
        Nc = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var l = b(f[g]);
                if (2 === l) return null;
                if (1 === l) return !1
            }
            return !0
        },
        Mc = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Lc(Bc[c], a));
                return b[c]
            }
        };
    var Pc = {
        ci: function(a, b) {
            b[Xb.Xe] && "string" === typeof a && (a = 1 == b[Xb.Xe] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Xb.Ze) && null === a && (a = b[Xb.Ze]);
            b.hasOwnProperty(Xb.af) && void 0 === a && (a = b[Xb.af]);
            b.hasOwnProperty(Xb.$e) && !0 === a && (a = b[Xb.$e]);
            b.hasOwnProperty(Xb.Ye) && !1 === a && (a = b[Xb.Ye]);
            return a
        }
    };
    var N = {
        Mb: "_ee",
        cd: "_syn_or_mod",
        Aj: "_uei",
        Yd: "_eu",
        wj: "_pci",
        Hb: "event_callback",
        Nc: "event_timeout",
        wa: "gtag.config",
        Ga: "gtag.get",
        sa: "purchase",
        Eb: "refund",
        eb: "begin_checkout",
        Cb: "add_to_cart",
        Db: "remove_from_cart",
        dh: "view_cart",
        cf: "add_to_wishlist",
        va: "view_item",
        fb: "view_promotion",
        Jc: "select_promotion",
        Bd: "select_item",
        Sa: "view_item_list",
        bf: "add_payment_info",
        bh: "add_shipping_info",
        Ha: "value_key",
        Ua: "value_callback",
        Aa: "allow_ad_personalization_signals",
        bc: "restricted_data_processing",
        Yb: "allow_google_signals",
        ma: "cookie_expires",
        Gb: "cookie_update",
        cc: "session_duration",
        Sc: "session_engaged_time",
        Ja: "user_properties",
        oa: "transport_url",
        T: "ads_data_redaction",
        xa: "user_data",
        ac: "first_party_collection",
        C: "ad_storage",
        H: "analytics_storage",
        Ve: "region",
        We: "wait_for_update",
        la: "conversion_linker",
        Ba: "conversion_cookie_prefix",
        da: "value",
        ca: "currency",
        Ff: "trip_type",
        Z: "items",
        xf: "passengers",
        Ed: "allow_custom_scripts",
        fc: "session_id",
        Cf: "quantity",
        Wa: "transaction_id",
        kb: "language",
        Lc: "country",
        Kc: "allow_enhanced_conversions",
        Jd: "aw_merchant_id",
        Hd: "aw_feed_country",
        Id: "aw_feed_language",
        Gd: "discount",
        V: "developer_id",
        Tc: "delivery_postal_code",
        Pd: "estimated_delivery_date",
        Nd: "shipping",
        Ud: "new_customer",
        Kd: "customer_lifetime_value",
        Od: "enhanced_conversions",
        Xb: "page_view",
        ia: "linker",
        N: "domains",
        lb: "decorate_forms",
        sf: "enhanced_conversions_automatic_settings",
        mh: "auto_detection_enabled",
        tf: "ga_temp_client_id",
        Cd: "user_engagement",
        Xg: "app_remove",
        Yg: "app_store_refund",
        Zg: "app_store_subscription_cancel",
        $g: "app_store_subscription_convert",
        ah: "app_store_subscription_renew",
        eh: "first_open",
        fh: "first_visit",
        gh: "in_app_purchase",
        hh: "session_start",
        ih: "user_data_login",
        jh: "user_data_logout",
        kh: "allow_display_features",
        Zb: "campaign",
        ef: "campaign_content",
        ff: "campaign_id",
        hf: "campaign_medium",
        jf: "campaign_name",
        kf: "campaign_source",
        lf: "campaign_term",
        hb: "client_id",
        fa: "cookie_domain",
        Fb: "cookie_name",
        Ta: "cookie_path",
        Ca: "cookie_flags",
        $b: "custom_map",
        Rd: "groups",
        wf: "non_interaction",
        mb: "page_location",
        Vd: "page_path",
        Ia: "page_referrer",
        Qc: "page_title",
        Lb: "send_page_view",
        nb: "send_to",
        Wd: "session_engaged",
        uf: "_logged_in_state",
        Xd: "session_number",
        Ah: "tracking_id",
        Xa: "url_passthrough",
        Jb: "accept_incoming",
        Kb: "url_position",
        Af: "phone_conversion_number",
        yf: "phone_conversion_callback",
        zf: "phone_conversion_css_class",
        Bf: "phone_conversion_options",
        xh: "phone_conversion_ids",
        wh: "phone_conversion_country_code",
        df: "aw_remarketing",
        Fd: "aw_remarketing_only",
        Dd: "gclid",
        lh: "auid",
        rh: "affiliation",
        rf: "tax",
        Md: "list_name",
        qf: "checkout_step",
        pf: "checkout_option",
        sh: "coupon",
        th: "promotions",
        ob: "user_id",
        yh: "retoken",
        na: "cookie_prefix",
        nf: "disable_merchant_reported_purchases",
        qh: "dc_natural_search",
        ph: "dc_custom_params",
        vf: "method",
        zh: "search_term",
        oh: "content_type",
        vh: "optimize_id",
        uh: "experiments",
        Va: "google_signals",
        Pc: "google_tld",
        Uc: "update",
        Qd: "firebase_id",
        Ib: "ga_restrict_domain",
        Mc: "event_settings",
        Ld: "dynamic_event_settings",
        hc: "user_data_settings",
        Df: "screen_name",
        jb: "_x_19",
        ib: "_ecid",
        Oc: "_x_20",
        Td: "internal_traffic_results",
        Ef: "traffic_type",
        Rc: "referral_exclusion_definition",
        Sd: "ignore_referrer",
        nh: "content_group"
    };
    var zd = {};
    N.Hf = Object.freeze((zd[N.bf] = 1, zd[N.bh] = 1, zd[N.Cb] = 1, zd[N.Db] = 1, zd[N.dh] = 1, zd[N.eb] = 1, zd[N.Bd] = 1, zd[N.Sa] = 1, zd[N.Jc] = 1, zd[N.fb] = 1, zd[N.sa] = 1, zd[N.Eb] = 1, zd[N.va] = 1, zd[N.cf] = 1, zd));
    N.$d = Object.freeze([N.Aa, N.Yb, N.Gb]);
    N.Mh = Object.freeze([].concat(N.$d));
    N.ae = Object.freeze([N.ma, N.Nc, N.cc, N.Sc]);
    N.Nh = Object.freeze([].concat(N.ae));
    var Bd = {},
        Cd = function(a, b) {
            Bd[a] = Bd[a] || [];
            Bd[a][b] = !0
        },
        Dd = function(a) {
            for (var b = [], c = Bd[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        };
    var Ed = function(a) {
        Cd("GTM", a)
    };
    var O = {},
        R = null,
        Fd = Math.random();
    O.J = "GTM-N5DP3SW";
    O.ad = "c10";
    O.U = "dataLayer";
    O.Wg = "ChEIgIa3jQYQuNCQurbU69rSARIkAHH898o2/BMMRMcyKnffvpsaFXtAy5RXg2hWgCuIb2fS0mbdGgIb0Q\x3d\x3d";
    var Gd = {
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
        Hd = {
            __paused: !0,
            __tg: !0
        },
        Id;
    for (Id in Gd) Gd.hasOwnProperty(Id) && (Hd[Id] = !0);
    O.zd = "www.googletagmanager.com";
    var Jd = O.zd + "/gtm.js";
    var Kd = Jd,
        Ld = Ga(""),
        Md = null,
        Nd = null,
        Od = "https://www.googletagmanager.com/a?id=" + O.J + "&cv=8",
        Pd = {},
        Qd = {},
        Rd = function() {
            var a = R.sequence || 1;
            R.sequence = a + 1;
            return a
        };
    O.Vg = "";
    var Xd = "";
    O.bd = Xd;
    var Yd = {},
        Zd = new ya,
        $d = {},
        ae = {},
        de = {
            name: O.U,
            set: function(a, b) {
                H(Wa(a, b), $d);
                be()
            },
            get: function(a) {
                return ce(a, 2)
            },
            reset: function() {
                Zd = new ya;
                $d = {};
                be()
            }
        },
        ce = function(a, b) {
            return 2 != b ? Zd.get(a) : ee(a)
        },
        ee = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = $d, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        fe = function(a, b) {
            ae.hasOwnProperty(a) || (Zd.set(a, b), H(Wa(a, b), $d), be())
        },
        be = function(a) {
            Aa(ae, function(b, c) {
                Zd.set(b, c);
                H(Wa(b, void 0),
                    $d);
                H(Wa(b, c), $d);
                a && delete ae[b]
            })
        },
        he = function(a, b, c) {
            Yd[a] = Yd[a] || {};
            Yd[a][b] = ge(b, c)
        },
        ge = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? ee(a) : Zd.get(a);
            "array" === Tb(d) || "object" === Tb(d) ? c = H(d) : c = d;
            return c
        },
        ie = function(a, b) {
            if (Yd[a]) return Yd[a][b]
        },
        je = function(a, b) {
            Yd[a] && delete Yd[a][b]
        };
    var ke = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        le = {
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
        me = {
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
        ne = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var oe = function() {
            var a = !1;
            return a
        },
        qe = function(a) {
            var b = ce("gtm.allowlist") || ce("gtm.whitelist");
            b && Ed(9);
            oe() && (b = "google gtagfl lcl zone oid op".split(" "));
            var c = b && Va(Ha(b), le),
                d = ce("gtm.blocklist") ||
                ce("gtm.blacklist");
            d || (d = ce("tagTypeBlacklist")) && Ed(3);
            d ? Ed(8) : d = [];
            pe() && (d = Ha(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ha(d).indexOf("google") && Ed(2);
            var e = d && Va(Ha(d), me),
                f = {};
            return function(g) {
                var l = g && g[Xb.pb];
                if (!l || "string" != typeof l) return !0;
                l = l.replace(/^_*/, "");
                if (void 0 !== f[l]) return f[l];
                var k = Qd[l] || [],
                    n = a(l, k);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(l))
                            if (k && 0 < k.length)
                                for (var r = 0; r < k.length; r++) {
                                    if (0 > c.indexOf(k[r])) {
                                        Ed(11);
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
                var v = !1;
                if (d) {
                    var t = 0 <= e.indexOf(l);
                    if (t) v = t;
                    else {
                        var q = za(e, k || []);
                        q && Ed(10);
                        v = q
                    }
                }
                var u = !n || v;
                u || !(0 <= k.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (u = za(e, ne));
                return f[l] = u
            }
        },
        pe = function() {
            return ke.test(m.location && m.location.hostname)
        };
    var re = {
            active: !0,
            isAllowed: function() {
                return !0
            }
        },
        se = function(a) {
            var b = R.zones;
            return b ? b.checkState(O.J, a) : re
        },
        te = function(a) {
            var b = R.zones;
            !b && a && (b = R.zones = a());
            return b
        };
    var ue = function(a, b) {
        this.m = a;
        this.defaultValue = void 0 === b ? !1 : b
    };
    var ve = new ue(1933),
        we = new ue(1956, !0);
    var ye = function() {
        var a = xe,
            b = "Ce";
        if (a.Ce && a.hasOwnProperty(b)) return a.Ce;
        var c = new a;
        a.Ce = c;
        a.hasOwnProperty(b);
        return c
    };
    var xe = function() {
            var a = {};
            this.o = function(b, c) {
                return null != a[b] ? a[b] : c
            };
            this.m = function(b) {
                a[b] = !0
            }
        },
        ze = function(a) {
            return ye().o(a.m, a.defaultValue)
        };
    var Ae = [];

    function Be() {
        var a = vb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Ce,
            update: De,
            addListener: Ee,
            notifyListeners: Fe,
            active: !1,
            usedDefault: !1
        });
        return a.ics
    }

    function Ce(a, b, c, d, e, f) {
        var g = Be();
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var l = g.entries,
                k = l[a] || {},
                n = k.region,
                p = c && ta(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var r = !!(f && 0 < f && void 0 === k.update),
                    v = {
                        region: p,
                        initial: "granted" === b,
                        update: k.update,
                        quiet: r
                    };
                if ("" !== d || !1 !== k.initial) l[a] = v;
                r && m.setTimeout(function() {
                    l[a] === v && v.quiet && (v.quiet = !1, Ge(a), Fe(), Cd("TAGGING", 2))
                }, f)
            }
        }
    }

    function De(a, b) {
        var c = Be();
        c.active = !0;
        if (void 0 != b) {
            var d = He(a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = He(a);
            f.quiet ? (f.quiet = !1, Ge(a)) : g !== d && Ge(a)
        }
    }

    function Ee(a, b) {
        Ae.push({
            te: a,
            oi: b
        })
    }

    function Ge(a) {
        for (var b = 0; b < Ae.length; ++b) {
            var c = Ae[b];
            va(c.te) && -1 !== c.te.indexOf(a) && (c.vg = !0)
        }
    }

    function Fe(a) {
        for (var b = 0; b < Ae.length; ++b) {
            var c = Ae[b];
            if (c.vg) {
                c.vg = !1;
                try {
                    c.oi({
                        consentEventId: a
                    })
                } catch (d) {}
            }
        }
    }
    var He = function(a) {
            var b = Be().entries[a] || {};
            return void 0 !== b.update ? b.update : b.initial
        },
        Ie = function(a) {
            return (Be().entries[a] || {}).initial
        },
        Je = function(a) {
            return !(Be().entries[a] || {}).quiet
        },
        Ke = function() {
            return ze(ve) ? Be().active : !1
        },
        Le = function() {
            return Be().usedDefault
        },
        Me = function(a, b) {
            Be().addListener(a, b)
        },
        Ne = function(a) {
            Be().notifyListeners(a)
        },
        Oe = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Je(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Me(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Pe = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var l = d[g];
                    !1 === He(l) || e[l] || (f.push(l), e[l] = !0)
                }
                return f
            }
            var d = ta(b) ? [b] : b,
                e = {};
            c().length !== d.length && Me(d, function(f) {
                var g = c();
                0 < g.length && (f.te = g, a(f))
            })
        };

    function Qe() {}

    function Re() {};

    function Se(a) {
        for (var b = [], c = 0; c < Ze.length; c++) {
            var d = a(Ze[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var Ze = [N.C, N.H],
        $e = function(a) {
            var b = a[N.Ve];
            b && Ed(40);
            var c = a[N.We];
            c && Ed(41);
            for (var d = va(b) ? b : [b], e = {
                    Ub: 0
                }; e.Ub < d.length; e = {
                    Ub: e.Ub
                }, ++e.Ub) Aa(a, function(f) {
                return function(g, l) {
                    if (g !== N.Ve && g !== N.We) {
                        var k = d[f.Ub];
                        Be().set(g, l, k, "BR", "BR-SP", c)
                    }
                }
            }(e))
        },
        af = 0,
        bf = function(a, b) {
            Aa(a, function(e, f) {
                Be().update(e, f)
            });
            Ne(b);
            var c = Pa(),
                d = c - af;
            af && 0 <= d && 1E3 > d && Ed(66);
            af = c
        },
        cf = function(a) {
            var b = He(a);
            return void 0 != b ? b : !0
        },
        df = function() {
            return "G1" + Se(He)
        },
        ef = function() {
            return "G1" +
                Se(Ie)
        },
        ff = function(a, b) {
            Pe(a, b)
        },
        gf = function(a, b) {
            Oe(a, b)
        };
    var jf = function(a) {
            return hf ? B.querySelectorAll(a) : null
        },
        kf = function(a, b) {
            if (!hf) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!B.documentElement.contains(d)) return null;
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
        lf = !1;
    if (B.querySelectorAll) try {
        var mf = B.querySelectorAll(":root");
        mf && 1 == mf.length && mf[0] == B.documentElement && (lf = !0)
    } catch (a) {}
    var hf = lf;
    var nf = function(a) {
            return void 0 === a || null === a ? "" : ta(a) ? La(String(a)) : "e0"
        },
        pf = function(a) {
            return a.replace( of , "")
        },
        rf = function(a) {
            return qf(a.replace(/\s/g, ""))
        },
        qf = function(a) {
            return La(a.replace(sf, "").toLowerCase())
        },
        uf = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return tf.test(a) ? a : "e0"
        },
        wf = function(a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (vf.test(c)) return c
            }
            return "e0"
        },
        zf = function(a, b) {
            window.Promise || b([]);
            Promise.all(a.map(function(c) {
                return c.value && -1 !== xf.indexOf(c.name) ? yf(c.value).then(function(d) {
                    c.value = d
                }) : Promise.resolve()
            })).then(function() {
                b(a)
            }).catch(function() {
                b([])
            })
        },
        yf = function(a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (m.crypto && m.crypto.subtle) try {
                var b = Af(a);
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
        Af = function(a) {
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
        sf = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        vf = /^\S+@\S+\.\S+$/,
        tf = /^\+\d{11,15}$/,
        of = /[.~]/g,
        Bf = {},
        Cf = (Bf.email = "em", Bf.phone_number = "pn", Bf.first_name = "fn", Bf.last_name = "ln", Bf.street = "sa", Bf.city = "ct", Bf.region = "rg", Bf.country = "co", Bf.postal_code = "pc", Bf.error_code = "ec", Bf),
        Df = function(a, b) {
            function c(n, p, r) {
                var v = n[p];
                va(v) || (v = [v]);
                for (var t = 0; t < v.length; ++t) {
                    var q = nf(v[t]);
                    "" !== q && f.push({
                        name: p,
                        value: r(q),
                        index: void 0
                    })
                }
            }

            function d(n, p, r, v) {
                var t = nf(n[p]);
                "" !== t && f.push({
                    name: p,
                    value: r(t),
                    index: v
                })
            }

            function e(n) {
                return function(p) {
                    Ed(64);
                    return n(p)
                }
            }
            var f = [];
            if ("https:" === m.location.protocol) {
                c(a, "email", wf);
                c(a, "phone_number", uf);
                c(a, "first_name", e(rf));
                c(a, "last_name", e(rf));
                var g = a.home_address || {};
                c(g, "street", e(qf));
                c(g, "city", e(qf));
                c(g, "postal_code", e(pf));
                c(g, "region", e(qf));
                c(g, "country", e(pf));
                var l = a.address || {};
                va(l) || (l = [l]);
                for (var k = 0; k < l.length; k++) d(l[k], "first_name", rf, k), d(l[k], "last_name", rf, k), d(l[k], "street", qf, k), d(l[k], "city", qf, k), d(l[k], "postal_code", pf, k), d(l[k],
                    "region", qf, k), d(l[k], "country", pf, k);
                zf(f, b)
            } else f.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }), b(f)
        },
        Ef = function(a, b) {
            Df(a, function(c) {
                for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                    var g = c[f].name,
                        l = c[f].value,
                        k = c[f].index,
                        n = Cf[g];
                    n && l && (-1 === xf.indexOf(g) || /^e\d+$/.test(l) || /^[0-9A-Za-z_-]{43}$/.test(l)) && (void 0 !== k && (n += k), d.push(n + "." + l), e++)
                }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e)
            })
        },
        Ff = function(a) {
            if (m.Promise) try {
                return new Promise(function(b) {
                    Ef(a,
                        function(c, d) {
                            b({
                                xc: c,
                                Ej: d
                            })
                        })
                })
            } catch (b) {}
        },
        xf = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var Gf = function() {
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
        Hf = function(a) {
            var b = new Gf;
            b.eventModel = a;
            return b
        },
        If = function(a, b) {
            a.targetConfig = b;
            return a
        },
        Jf = function(a, b) {
            a.containerConfig = b;
            return a
        },
        Kf = function(a, b) {
            a.globalConfig = b;
            return a
        },
        Lf = function(a,
            b) {
            a.remoteConfig = b;
            return a
        },
        Mf = function(a, b) {
            a.onSuccess = b;
            return a
        },
        Nf = function(a, b) {
            a.setContainerTypeLoaded = b;
            return a
        },
        Of = function(a, b) {
            a.getContainerTypeLoaded = b;
            return a
        },
        Pf = function(a, b) {
            a.onFailure = b;
            return a
        };
    Gf.prototype.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a]
    };
    var Qf = function(a) {
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
        Rf = function(a, b, c) {
            function d(g) {
                Vb(g) && Aa(g, function(l, k) {
                    f = !0;
                    e[l] = k
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.remoteConfig[b]), d(a.globalConfig[b]), d(a.containerConfig[b]), d(a.targetConfig[b]));
            c && 2 !== c || d(a.eventModel[b]);
            return f ? e : void 0
        },
        Sf = function(a) {
            var b = [N.Zb, N.ef, N.ff, N.hf, N.jf, N.kf, N.lf],
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
        Tf = function(a) {
            var b = [],
                c;
            for (c in a.eventModel) c !== N.Mb && a.eventModel.hasOwnProperty(c) && void 0 !== a.eventModel[c] && b.push(c);
            return b
        };
    var Uf, Vf = !1,
        Wf = function(a) {
            if (!Vf) {
                Vf = !0;
                Uf = productSettings, productSettings = void 0;
                Uf = Uf || {}
            }
            return Uf[a]
        };
    var Xf = function(a) {
        if (B.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !m.getComputedStyle) return !0;
        var c = m.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var l = g.indexOf("opacity(");
                0 <= l && (g = g.substring(l + 8, g.indexOf(")", l)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = m.getComputedStyle(d,
                null))
        }
        return !1
    };
    var fg = /:[0-9]+$/,
        gg = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var g = f.slice(1).join("=");
                    return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
                }
            }
        },
        jg = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = hg(a.protocol) || hg(m.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : m.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
                (a.hostname = (a.hostname || m.location.hostname).replace(fg, "").toLowerCase());
            return ig(a, b, c, d, e)
        },
        ig = function(a, b, c, d, e) {
            var f, g = hg(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = kg(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(fg, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(f);
                        l && l[0] && (f = f.substr(l[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" == g ? 80 : "https" == g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || Cd("TAGGING",
                        1);
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var k = f.split("/");
                    0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = "");
                    f = k.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = gg(f, e, void 0));
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
        hg = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        kg = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        lg = function(a) {
            var b = B.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Cd("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(fg, "");
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
        mg = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 != p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = lg(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                l = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === l[0] && (l = l.substring(1));
            g = c(g);
            l = c(l);
            "" !== g && (g = "?" + g);
            "" !== l && (l = "#" + l);
            var k = "" + f + g + l;
            "/" === k[k.length - 1] && (k = k.substring(0, k.length - 1));
            return k
        };
    var ng = {};
    var qg = function(a) {
            if (0 == a.length) return null;
            var b;
            b = og(a, function(c) {
                return !pg.test(c.Pa)
            });
            b = og(b, function(c) {
                return "INPUT" === c.element.tagName.toUpperCase()
            });
            b = og(b, function(c) {
                return !Xf(c.element)
            });
            return b[0]
        },
        og = function(a, b) {
            if (1 >= a.length) return a;
            var c = a.filter(b);
            return 0 == c.length ? a : c
        },
        rg = function(a) {
            var b;
            if (a === B.body) b = "body";
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
                        d = rg(a.parentElement) + ">:nth-child(" + e + ")"
                    } else d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        sg = !0,
        tg = !1;
    ng.Rg = "false";
    var ug = function(a) {
            if ("false" === ng.Rg || !sg) return !1;
            if (tg) return !0;
            var b = Wf("AW-" +
                a);
            return !!b && !!b.preAutoPii
        },
        vg = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
        wg = new RegExp(/@(gmail|googlemail)\./i),
        pg = new RegExp(/support|noreply/i),
        xg = "SCRIPT STYLE IMG SVG PATH BR".split(" "),
        yg = ["BR"],
        zg = {},
        Ag = function(a) {
            a = a || {
                Ae: !0,
                Be: !0
            };
            a.$a = a.$a || {
                email: !0,
                phone: !0,
                Xf: !0
            };
            var b, c = a,
                d = !!c.Ae + "." + !!c.Be;
            c && c.ld && c.ld.length && (d += "." + c.ld.join("."));
            c && c.$a && (d += "." + c.$a.email + "." + c.$a.phone + "." + c.$a.Xf);
            b = d;
            var e = zg[b];
            if (e && 200 > Pa() - e.timestamp) return e.result;
            var f;
            var g = [],
                l = B.body;
            if (l) {
                for (var k = l.querySelectorAll("*"), n = 0; n < k.length && 1E4 > n; n++) {
                    var p = k[n];
                    if (!(0 <= xg.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                        for (var r = !1, v = 0; v < p.childElementCount && 1E4 > v; v++)
                            if (!(0 <= yg.indexOf(p.children[v].tagName.toUpperCase()))) {
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
            var t = f,
                q = t.status,
                u;
            if (a.$a && a.$a.email) {
                for (var x = t.elements, A = [], w = 0; w < x.length; w++) {
                    var y = x[w],
                        z = y.textContent;
                    "INPUT" === y.tagName.toUpperCase() &&
                        y.value && (z = y.value);
                    if (z) {
                        var C = z.match(vg);
                        if (C) {
                            var E = C[0],
                                D;
                            if (m.location) {
                                var F = ig(m.location, "host", !0);
                                D = 0 <= E.toLowerCase().indexOf(F)
                            } else D = !1;
                            D || A.push({
                                element: y,
                                Pa: E
                            })
                        }
                    }
                }
                var P;
                var J = a && a.ld;
                if (J && 0 !== J.length) {
                    for (var I = [], M = 0; M < A.length; M++) {
                        for (var L = !0, K = 0; K < J.length; K++) {
                            var T = J[K];
                            if (T && kf(A[M].element, T)) {
                                L = !1;
                                break
                            }
                        }
                        L && I.push(A[M])
                    }
                    P = I
                } else P = A;
                u = qg(P);
                10 < A.length && (q = "3")
            }
            var V = [];
            if (u) {
                var S = u.element,
                    qa = {
                        Pa: u.Pa,
                        tagName: S.tagName,
                        type: 1
                    };
                a.Ae && (qa.querySelector = rg(S));
                a.Be &&
                    (qa.isVisible = !Xf(S));
                V.push(qa)
            }
            var ra = {
                elements: V,
                status: q
            };
            zg[b] = {
                timestamp: Pa(),
                result: ra
            };
            return ra
        },
        Bg = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.Pa.length + ":" + wg.test(a.Pa)
        };
    var Cg = function(a, b, c) {
            if (c) {
                var d = c.selector_type,
                    e = String(c.value),
                    f;
                if ("js_variable" === d) {
                    e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                    for (var g = e.split(","), l = 0; l < g.length; l++) {
                        var k = g[l].trim();
                        if (k) {
                            if (0 === k.indexOf("dataLayer.")) f = ce(k.substring(10));
                            else {
                                var n = k.split(".");
                                f = m[n.shift()];
                                for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                            }
                            if (void 0 !== f) break
                        }
                    }
                } else if ("css_selector" === d && hf) {
                    var r = jf(e);
                    r && 0 < r.length && (f = Ib(r[0]) || La(r[0].value))
                }
                f && (a[b] = f)
            }
        },
        Dg = function(a) {
            if (a) {
                var b = {};
                Cg(b, "email",
                    a.email);
                Cg(b, "phone_number", a.phone);
                b.address = [];
                for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
                    var e = {};
                    Cg(e, "first_name", c[d].first_name);
                    Cg(e, "last_name", c[d].last_name);
                    Cg(e, "street", c[d].street);
                    Cg(e, "city", c[d].city);
                    Cg(e, "region", c[d].region);
                    Cg(e, "country", c[d].country);
                    Cg(e, "postal_code", c[d].postal_code);
                    b.address.push(e)
                }
                return b
            }
        },
        Eg = function(a) {
            if (a) switch (a.mode) {
                case "selectors":
                    return Dg(a.selectors);
                case "auto_detect":
                    var b;
                    var c = a.auto_detect;
                    if (c) {
                        var d = Ag({
                                Ae: !1,
                                Be: !1,
                                ld: c.exclude_element_selectors,
                                $a: {
                                    email: !!c.email,
                                    phone: !!c.phone,
                                    Xf: !!c.address
                                }
                            }).elements,
                            e = {};
                        if (0 < d.length)
                            for (var f = 0; f < d.length; f++) {
                                var g = d[f];
                                if (1 === g.type) {
                                    e.email = g.Pa;
                                    break
                                }
                            }
                        b = e
                    } else b = void 0;
                    return b
            }
        },
        Fg = function(a) {
            switch (a.enhanced_conversions_mode) {
                case "manual":
                    var b = a.enhanced_conversions_manual_var;
                    return void 0 !== b ? b : m.enhanced_conversion_data;
                case "automatic":
                    return Dg(a[N.sf])
            }
        };
    var Gg = {},
        Hg = function(a, b) {
            if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a)) return m._gtmexpgrp[a];
            void 0 === Gg[a] && (Gg[a] = Math.floor(Math.random() * b));
            return Gg[a]
        };
    var Lg = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
        return b
    };
    var Mg = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                l = g[0].replace(/^\s*|\s*$/g, "");
            if (l && l == a) {
                var k = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                k && c && (k = decodeURIComponent(k));
                d.push(k)
            }
        }
        return d
    };

    function Ng(a) {
        return "null" !== a.origin
    };
    var Qg = function(a, b, c, d) {
            return Og(d) ? Mg(a, String(b || Pg()), c) : []
        },
        Tg = function(a, b, c, d, e) {
            if (Og(e)) {
                var f = Rg(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Sg(f, function(g) {
                        return g.jd
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Sg(f, function(g) {
                        return g.yc
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Ug(a, b, c, d) {
        var e = Pg(),
            f = window;
        Ng(f) && (f.document.cookie = a);
        var g = Pg();
        return e != g || void 0 != c && 0 <= Qg(b, g, !1, d).indexOf(c)
    }
    var Yg = function(a, b, c) {
            function d(t, q, u) {
                if (null == u) return delete g[q], t;
                g[q] = u;
                return t + "; " + q + "=" + u
            }

            function e(t, q) {
                if (null == q) return delete g[q], t;
                g[q] = !0;
                return t + "; " + q
            }
            if (!Og(c.Oa)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Vg(b), f = a + "=" + b);
            var g = {};
            f = d(f, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            f = d(f, "expires", l);
            f = d(f, "max-age", c.Dj);
            f = d(f, "samesite",
                c.Fj);
            c.Gj && (f = e(f, "secure"));
            var k = c.domain;
            if (k && "auto" === k.toLowerCase()) {
                for (var n = Wg(), p = 0; p < n.length; ++p) {
                    var r = "none" !== n[p] ? n[p] : void 0,
                        v = d(f, "domain", r);
                    v = e(v, c.flags);
                    if (!Xg(r, c.path) && Ug(v, a, b, c.Oa)) return 0
                }
                return 1
            }
            k && "none" !== k.toLowerCase() && (f = d(f, "domain", k));
            f = e(f, c.flags);
            return Xg(k, c.path) ? 1 : Ug(f, a, b, c.Oa) ? 0 : 1
        },
        Zg = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Yg(a, b, c)
        };

    function Sg(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var l = a[g],
                k = b(l);
            k === c ? d.push(l) : void 0 === f || k < f ? (e = [l], f = k) : k === f && e.push(l)
        }
        return 0 < d.length ? d : e
    }

    function Rg(a, b, c) {
        for (var d = [], e = Qg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                l = g.shift();
            if (!b || -1 !== b.indexOf(l)) {
                var k = g.shift();
                k && (k = k.split("-"), d.push({
                    id: g.join("."),
                    jd: 1 * k[0] || 1,
                    yc: 1 * k[1] || 1
                }))
            }
        }
        return d
    }
    var Vg = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        $g = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        ah = /(^|\.)doubleclick\.net$/i,
        Xg = function(a, b) {
            return ah.test(window.document.location.hostname) || "/" === b && $g.test(a)
        },
        Pg = function() {
            return Ng(window) ? window.document.cookie : ""
        },
        Wg = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            ah.test(e) || $g.test(e) || a.push("none");
            return a
        },
        Og = function(a) {
            if (!ze(ve) || !a || !Ke()) return !0;
            if (!Je(a)) return !1;
            var b = He(a);
            return null == b ? !0 : !!b
        };
    var bh = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return [a ? String(b ^ Lg(a) & 2147483647) : String(b), Math.round(Pa() / 1E3)].join(".")
        },
        eh = function(a, b, c, d, e) {
            var f = ch(b);
            return Tg(a, f, dh(c), d, e)
        },
        fh = function(a, b, c, d) {
            var e = "" + ch(c),
                f = dh(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        ch = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        dh = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };

    function gh(a, b, c) {
        var d, e = Number(null != a.vb ? a.vb : void 0);
        0 !== e && (d = new Date((b || Pa()) + 1E3 * (e || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    };
    var hh = ["1"],
        ih = {},
        jh = {},
        nh = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = kh(a.prefix);
            if (!ih[c] && !lh(c, a.path, a.domain) && b) {
                var d = kh(a.prefix),
                    e = bh();
                if (0 === mh(d, e, a)) {
                    var f = vb("google_tag_data", {});
                    f._gcl_au ? Cd("GTM", 57) : f._gcl_au = e
                }
                lh(c, a.path, a.domain)
            }
        };

    function mh(a, b, c, d) {
        var e = fh(b, "1", c.domain, c.path),
            f = gh(c, d);
        f.Oa = "ad_storage";
        return Zg(a, e, f)
    }

    function lh(a, b, c) {
        var d = eh(a, b, c, hh, "ad_storage");
        if (!d) return !1;
        var e = d.split(".");
        5 === e.length ? (ih[a] = e.slice(0, 2).join("."), jh[a] = {
            id: e.slice(2, 4).join("."),
            ng: Number(e[4]) || 0
        }) : 3 === e.length ? jh[a] = {
            id: e.slice(0, 2).join("."),
            ng: Number(e[2]) || 0
        } : ih[a] = d;
        return !0
    }

    function kh(a) {
        return (a || "_gcl") + "_au"
    };
    var oh = function(a) {
        for (var b = [], c = B.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Re: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, l) {
            return l.timestamp - g.timestamp
        });
        return b
    };

    function ph(a, b) {
        var c = oh(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Re] || (d[c[e].Re] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    qa: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Re].push(g)
            }
        }
        return d
    };

    function qh() {
        for (var a = rh, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function sh() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var rh, th;

    function uh(a) {
        rh = rh || sh();
        th = th || qh();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                l = e ? a.charCodeAt(c + 2) : 0,
                k = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | l >> 6,
                r = l & 63;
            e || (r = 64, d || (p = 64));
            b.push(rh[k], rh[n], rh[p], rh[r])
        }
        return b.join("")
    }

    function vh(a) {
        function b(k) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = th[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return k
        }
        rh = rh || sh();
        th = th || qh();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                l = b(64);
            if (64 === l && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != l && (c += String.fromCharCode(g << 6 & 192 | l)))
        }
    };
    var wh, xh = function(a) {
        var b;
        if (!(b = wh)) {
            for (var c = Array(256), d = 0; 256 > d; d++) {
                for (var e = d, f = 0; 8 > f; f++) e = e & 1 ? e >>> 1 ^ 3988292384 : e >>> 1;
                c[d] = e
            }
            b = c
        }
        wh = b;
        for (var g = 4294967295, l = 0; l < a.length; l++) g = g >>> 8 ^ wh[(g ^ a.charCodeAt(l)) & 255];
        return (g ^ -1) >>> 0
    };
    var yh = {
            pj: 0,
            zj: 1,
            tj: 2,
            sj: 3
        },
        zh = void 0,
        Dh = function() {
            var a = Ah,
                b = Bh,
                c = Ch(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                Fb(B, "mousedown", d);
                Fb(B, "keyup", d);
                Fb(B, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Eh = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Ch().decorators.push(f)
        },
        Fh = function(a, b, c) {
            for (var d = Ch().decorators,
                    e = {}, f = 0; f < d.length; ++f) {
                var g = d[f],
                    l;
                if (l = !c || g.forms) a: {
                    var k = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (k && (p || n !== B.location.hostname))
                        for (var r = 0; r < k.length; r++)
                            if (k[r] instanceof RegExp) {
                                if (k[r].test(n)) {
                                    l = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(k[r]) || p && 0 <= k[r].indexOf(n)) {
                        l = !0;
                        break a
                    }
                    l = !1
                }
                if (l) {
                    var v = g.placement;
                    void 0 == v && (v = g.fragment ? 2 : 1);
                    v === b && Sa(e, g.callback())
                }
            }
            return e
        };

    function Ch() {
        var a = vb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Gh = /(.*?)\*(.*?)\*(.*)/,
        Hh = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Ih = /^(?:www\.|m\.|amp\.)+/,
        Jh = /\*?xp_[0-3]\*?/,
        Kh = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Lh(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var Mh = void 0,
        Ph = function(a, b) {
            var c = [],
                d;
            for (d in a)
                if (a.hasOwnProperty(d)) {
                    var e = a[d];
                    void 0 !== e && e === e && null !== e && "[object Object]" !== e.toString() && (c.push(d), c.push(uh(String(e))))
                }
            var f = c.join("*");
            if (void 0 !== b) {
                var g = "xp_" + b,
                    l = Nh[b](f);
                f = [f, g, uh(String(l))].join("*")
            }
            return ["1", Oh(f), f].join("*")
        };

    function Oh(a, b) {
        var c = [m.navigator.userAgent, (new Date).getTimezoneOffset(), Ob(), Math.floor(Pa() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*");
        return xh(c).toString(36)
    }
    var Qh = {},
        Nh = (Qh[0] = function() {
            return "BASELINE"
        }, Qh[1] = Rh, Qh[2] = Sh, Qh[3] = Th, Qh);

    function Rh(a, b) {
        var c = [(new Date).getTimezoneOffset(), Ob(), Math.floor(Pa() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*");
        return xh(c).toString(36)
    }

    function Sh(a, b) {
        if (!tb.userAgentData) return "UA_DATA_NOT_PRESENT";
        var c = [(new Date).getTimezoneOffset(), Ob(), Math.floor(Pa() / 60 / 1E3) - (void 0 === b ? 0 : b), tb.userAgentData.brands, tb.userAgentData.mobile, tb.userAgentData.platform, a].join("*");
        return xh(c).toString(36)
    }

    function Uh() {
        tb.userAgentData && tb.userAgentData.getHighEntropyValues(["architecture", "model", "bitness", "platformVersion", "uaFullVersion"]).then(function(a) {
            Mh = a
        })
    }

    function Th(a, b) {
        if (void 0 === Mh) return "UACH_ACCESSED_TOO_EARLY";
        var c = [(new Date).getTimezoneOffset(), Ob(), Math.floor(Pa() / 60 / 1E3) - (void 0 === b ? 0 : b), tb.userAgentData.brands, tb.userAgentData.mobile, tb.userAgentData.platform, Mh.architecture, Mh.bitness, Mh.model, Mh.platformVersion, Mh.uaFullVersion, a].join("*");
        return xh(c).toString(36)
    }

    function Vh() {
        return function(a) {
            var b = lg(m.location.href),
                c = b.search.replace("?", ""),
                d = gg(c, "_gl", !0) || "";
            a.query = Wh(d) || {};
            var e = jg(b, "fragment").match(Lh("_gl"));
            a.fragment = Wh(e && e[3] || "") || {}
        }
    }
    var Xh = function(a) {
            var b = Vh(),
                c = Ch();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Sa(d, e.query), a && Sa(d, e.fragment));
            return d
        },
        Wh = function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var f = Gh.exec(d);
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
                        var l = g[2],
                            k = g[3],
                            n = null !== k.match(Jh),
                            p;
                        a: {
                            for (var r = 0; r < b; ++r)
                                if (l === Oh(k, r)) {
                                    p = !0;
                                    break a
                                }
                            p = !1
                        }
                        var v = p;
                        if (v || n) {
                            for (var t = {}, q = k ? k.split("*") : [], u = 0; u + 1 < q.length; u += 2) {
                                var x =
                                    q[u],
                                    A = null !== x.match(Jh);
                                if (v || A) {
                                    var w = vh(q[u + 1]);
                                    t[x] = w
                                }
                                if (A) {
                                    var y = x.split("_")[1];
                                    if (!(Number(y) < Object.keys(yh).length)) return;
                                    var z = b,
                                        C = t[x],
                                        E = k.slice(0, k.indexOf("*xp")),
                                        D = v;
                                    if (0 !== Number(y)) a: {
                                        var F = C,
                                            P = E,
                                            J = z;
                                        if ("undefined" !== F && "UA_DATA_NOT_PRESENT" !== F && "UACH_ACCESSED_TOO_EARLY" !== F)
                                            for (var I = 0; I < J; ++I)
                                                if (F === Nh[y](P, I)) {
                                                    D = !0;
                                                    break a
                                                }
                                        D = !1
                                    }
                                    t._z = "uaxp." + (v ? D === v ? "" + y + 0 : "" + y + 3 : D === v ? "" + y + 1 : "" + y + 2)
                                }
                            }
                            return t
                        }
                    }
                }
            } catch (M) {}
        };

    function Yh(a, b, c, d) {
        function e(p) {
            var r = p,
                v = Lh(a).exec(r),
                t = r;
            if (v) {
                var q = v[2],
                    u = v[4];
                t = v[1];
                u && (t = t + q + u)
            }
            p = t;
            var x = p.charAt(p.length - 1);
            p && "&" !== x && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Kh.exec(c);
        if (!f) return "";
        var g = f[1],
            l = f[2] || "",
            k = f[3] || "",
            n = a + "=" + b;
        d ? k = "#" + e(k.substring(1)) : l = "?" + e(l.substring(1));
        return "" + g + l + k
    }

    function Zh(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Fh(b, 1, c),
            e = Fh(b, 2, c),
            f = Fh(b, 3, c),
            g = zh;
        if (Ua(d)) {
            var l = Ph(d, g);
            c ? $h("_gl", l, a) : ai("_gl", l, a, !1)
        }
        if (!c && Ua(e)) {
            var k = Ph(e);
            ai("_gl", k, a, !0)
        }
        for (var n in f)
            if (f.hasOwnProperty(n)) a: {
                var p = n,
                    r = f[n],
                    v = a;
                if (v.tagName) {
                    if ("a" === v.tagName.toLowerCase()) {
                        ai(p, r, v, void 0);
                        break a
                    }
                    if ("form" === v.tagName.toLowerCase()) {
                        $h(p, r, v);
                        break a
                    }
                }
                "string" == typeof v && Yh(p, r, v, void 0)
            }
    }

    function ai(a, b, c, d) {
        if (c.href) {
            var e = Yh(a, b, c.href, void 0 === d ? !1 : d);
            eb.test(e) && (c.href = e)
        }
    }

    function $h(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var l = e[g];
                    if (l.name === a) {
                        l.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var k = B.createElement("input");
                    k.setAttribute("type", "hidden");
                    k.setAttribute("name", a);
                    k.setAttribute("value", b);
                    c.appendChild(k)
                }
            } else if ("post" === d) {
                var n = Yh(a, b, c.action);
                eb.test(n) && (c.action = n)
            }
        }
    }

    function Ah(a) {
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
                "http:" !== f && "https:" !== f || Zh(e, e.hostname)
            }
        } catch (g) {}
    }

    function Bh(a) {
        try {
            if (a.action) {
                var b = jg(lg(a.action), "host");
                Zh(a, b)
            }
        } catch (c) {}
    }
    var bi = function(a, b, c, d, e) {
            Dh();
            void 0 !== e && (zh = e);
            3 === e && Uh();
            Eh(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        ci = function(a, b) {
            Dh();
            Eh(a, [ig(m.location, "host", !0)], b, !0, !0)
        },
        di = function() {
            var a = B.location.hostname,
                b = Hh.exec(B.referrer);
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
            var l = a.replace(Ih, ""),
                k = e.replace(Ih, ""),
                n;
            if (!(n = l === k)) {
                var p =
                    "." + k;
                n = l.substring(l.length - p.length, l.length) === p
            }
            return n
        },
        ei = function(a, b) {
            return !1 === a ? !1 : a || b || di()
        };
    var fi = {};
    var gi = /^\w+$/,
        hi = /^[\w-]+$/,
        ii = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        ji = function() {
            if (!ze(ve) || !Ke()) return !0;
            var a = He("ad_storage");
            return null == a ? !0 : !!a
        },
        ki = function(a, b) {
            Je("ad_storage") ? ji() ? a() : Pe(a, "ad_storage") : b ? Cd("TAGGING", 3) : Oe(function() {
                ki(a, !0)
            }, ["ad_storage"])
        },
        mi = function(a) {
            return li(a).map(function(b) {
                return b.qa
            })
        },
        li = function(a) {
            var b = [];
            if (!Ng(m) || !B.cookie) return b;
            var c = Qg(a, B.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    Fc: d.Fc
                }, e++) {
                var f = ni(c[e]);
                if (null != f) {
                    var g = f,
                        l = g.version;
                    d.Fc = g.qa;
                    var k = g.timestamp,
                        n = g.labels,
                        p = wa(b, function(r) {
                            return function(v) {
                                return v.qa === r.Fc
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, k), p.labels = oi(p.labels, n || [])) : b.push({
                        version: l,
                        qa: d.Fc,
                        timestamp: k,
                        labels: n
                    })
                }
            }
            b.sort(function(r, v) {
                return v.timestamp - r.timestamp
            });
            return pi(b)
        };

    function oi(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function qi(a) {
        return a && "string" == typeof a && a.match(gi) ? a : "_gcl"
    }
    var si = function() {
            var a = lg(m.location.href),
                b = jg(a, "query", !1, void 0, "gclid"),
                c = jg(a, "query", !1, void 0, "gclsrc"),
                d = jg(a, "query", !1, void 0, "wbraid"),
                e = jg(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || gg(f, "gclid", void 0);
                c = c || gg(f, "gclsrc", void 0);
                d = d || gg(f, "wbraid", void 0)
            }
            return ri(b, c, e, d)
        },
        ri = function(a, b, c, d) {
            var e = {},
                f = function(g, l) {
                    e[l] || (e[l] = []);
                    e[l].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && hi.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(hi)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
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
        ui = function(a) {
            var b = si();
            ki(function() {
                ti(b, !1, a)
            })
        };

    function ti(a, b, c, d, e) {
        function f(x, A) {
            var w = vi(x, g);
            w && (Zg(w, A, l), k = !0)
        }
        c = c || {};
        e = e || [];
        var g = qi(c.prefix);
        d = d || Pa();
        var l = gh(c, d, !0);
        l.Oa = "ad_storage";
        var k = !1,
            n = Math.round(d / 1E3),
            p = function(x) {
                var A = ["GCL", n, x];
                0 < e.length && A.push(e.join("."));
                return A.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == fi.enable_gbraid_cookie_write ? 0 : fi.enable_gbraid_cookie_write) && !k && a.gb) {
            var r = a.gb[0],
                v = vi("gb",
                    g),
                t = !1;
            if (!b)
                for (var q = li(v), u = 0; u < q.length; u++) q[u].qa === r && q[u].labels && 0 < q[u].labels.length && (t = !0);
            t || f("gb", p(r))
        }
    }
    var xi = function(a, b) {
            var c = Xh(!0);
            ki(function() {
                for (var d = qi(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== ii[f]) {
                        var g = vi(f, d),
                            l = c[g];
                        if (l) {
                            var k = Math.min(wi(l), Pa()),
                                n;
                            b: {
                                var p = k;
                                if (Ng(m))
                                    for (var r = Qg(g, B.cookie, void 0, "ad_storage"), v = 0; v < r.length; ++v)
                                        if (wi(r[v]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var t = gh(b, k, !0);
                                t.Oa = "ad_storage";
                                Zg(g, l, t)
                            }
                        }
                    }
                }
                ti(ri(c.gclid, c.gclsrc), !1, b)
            })
        },
        vi = function(a, b) {
            var c = ii[a];
            if (void 0 !== c) return b + c
        },
        wi = function(a) {
            return 0 !== yi(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function ni(a) {
        var b = yi(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            qa: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function yi(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !hi.test(a[2]) ? [] : a
    }
    var zi = function(a, b, c, d, e) {
            if (va(b) && Ng(m)) {
                var f = qi(e),
                    g = function() {
                        for (var l = {}, k = 0; k < a.length; ++k) {
                            var n = vi(a[k], f);
                            if (n) {
                                var p = Qg(n, B.cookie, void 0, "ad_storage");
                                p.length && (l[n] = p.sort()[p.length - 1])
                            }
                        }
                        return l
                    };
                ki(function() {
                    bi(g, b, c, d)
                })
            }
        },
        pi = function(a) {
            return a.filter(function(b) {
                return hi.test(b.qa)
            })
        },
        Ai = function(a, b) {
            if (Ng(m)) {
                for (var c = qi(b.prefix), d = {}, e = 0; e < a.length; e++) ii[a[e]] && (d[a[e]] = ii[a[e]]);
                ki(function() {
                    Aa(d, function(f, g) {
                        var l = Qg(c + g, B.cookie, void 0, "ad_storage");
                        l.sort(function(t,
                            q) {
                            return wi(q) - wi(t)
                        });
                        if (l.length) {
                            var k = l[0],
                                n = wi(k),
                                p = 0 !== yi(k.split(".")).length ? k.split(".").slice(3) : [],
                                r = {},
                                v;
                            v = 0 !== yi(k.split(".")).length ? k.split(".")[2] : void 0;
                            r[f] = [v];
                            ti(r, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function Bi(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var Ci = function(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (Ke()) {
            var c = si();
            if (Bi(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                ci(function() {
                    return d
                }, 3);
                ci(function() {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    };

    function Di(a, b) {
        var c = qi(b),
            d = vi(a, c);
        if (!d) return 0;
        for (var e = li(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Ei(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var Fi = function(a) {
            var b = [];
            Aa(a, function(c, d) {
                d = pi(d);
                for (var e = [], f = 0; f < d.length; f++) e.push(d[f].qa);
                e.length && b.push(c + ":" + e.join(","))
            });
            return b.join(";")
        },
        Hi = function(a, b, c) {
            if ("aw" === a || "dc" === a || "gb" === a) {
                var d = Gi("gcl" + a);
                if (d) return d.split(".")
            }
            var e = qi(b);
            if ("_gcl" == e) {
                c = void 0 === c ? !0 : c;
                var f = !cf(N.C) && c,
                    g;
                g = si()[a] || [];
                if (0 < g.length) return f ? ["0"] : g
            }
            var l = vi(a, e);
            return l ? mi(l) : []
        },
        Gi = function(a) {
            var b = lg(m.location.href),
                c = jg(b, "host", !1);
            if (c && c.match(Ii)) {
                var d = jg(b, "path").split(a +
                    "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        },
        Ji = function(a, b) {
            Je(N.C) ? cf(N.C) ? a() : Pe(a, N.C) : b ? Ed(42) : gf(function() {
                Ji(a, !0)
            }, [N.C])
        },
        Ii = /^\d+\.fls\.doubleclick\.net$/,
        Ki = !1;
    var Li = function(a, b) {
            return Hi("aw", a, b)
        },
        Mi = function(a, b) {
            return Hi("dc", a, b)
        },
        Ni = function(a) {
            var b = Gi("gac");
            return b ? !cf(N.C) && a ? "0" : decodeURIComponent(b) : Fi(ji() ? ph() : {})
        },
        Oi = function(a) {
            var b = Gi("gacgb");
            return b ?
                !cf(N.C) && a ? "0" : decodeURIComponent(b) : Fi(ji() ? ph("_gac_gb", !0) : {})
        },
        Pi = function(a) {
            var b = si(),
                c = [],
                d = b.gclid,
                e = b.dclid,
                f = b.gclsrc || "aw";
            !d || "aw.ds" !== f && "aw" !== f && "ds" !== f || c.push({
                qa: d,
                xe: f
            });
            e && c.push({
                qa: e,
                xe: "ds"
            });
            if (!Ki) {}
            Ji(function() {
                nh(a);
                var g = ih[kh(a.prefix)];
                if (g && 0 < c.length)
                    for (var l = R.joined_auid = R.joined_auid || {}, k = 0; k < c.length; k++) {
                        var n =
                            c[k],
                            p = n.qa,
                            r = n.xe,
                            v = (a.prefix || "_gcl") + "." + r + "." + p;
                        if (!l[v]) {
                            var t = "https://adservice.google.com/pagead/regclk";
                            t = "gb" === r ? t + "?gbraid=" + p + "&auid=" + g : t + "?gclid=" + p + "&auid=" + g + "&gclsrc=" + r;
                            Lb(t);
                            l[v] = !0
                        }
                    }
            })
        },
        Qi = function(a) {
            var b;
            if (Gi("gclaw") || Gi("gac") || 0 < (si().aw || []).length) b = !1;
            else {
                var c;
                if (0 < (si().gb || []).length) c = !0;
                else {
                    var d = Math.max(Di("aw", a), Ei(ji() ? ph() : {}));
                    c = Math.max(Di("gb", a), Ei(ji() ? ph("_gac_gb", !0) : {})) > d
                }
                b = c
            }
            return b
        };
    var Ri = function(a) {
        var b = tb && tb.userAgent || "";
        if (0 > b.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(b)) return !1;
        var c = (/Version\/([\d\.]+)/.exec(b) || [])[1] || "";
        if ("" === c) return !1;
        for (var d = a.split("."), e = c.split("."), f = 0; f < e.length; f++) {
            if (void 0 === d[f]) return !0;
            if (e[f] != d[f]) return Number(e[f]) > Number(d[f])
        }
        return e.length >= d.length
    };
    var Ti = function(a) {
            var b = a ? Fg(a) : m.enhanced_conversion_data,
                c = (a || {}).enhanced_conversions_mode,
                d = void 0;
            if ("manual" === c && b) switch (b._tag_mode) {
                case "CODE":
                    d = "c";
                    break;
                case "AUTO":
                    d = "a";
                    break;
                case "MANUAL":
                    d = "m";
                    break;
                default:
                    d = "c"
            } else d = "automatic" === c ? Si(a) ? "a" : "m" : "c";
            if (m.Promise) try {
                return b ? Ff(b).then(function(e) {
                    e.ve = d;
                    return e
                }) : Promise.resolve({
                    xc: "",
                    ve: void 0
                })
            } catch (e) {}
        },
        Si = function(a) {
            var b = a && a[N.sf];
            return b && b[N.mh]
        },
        Ui = function(a) {
            return a
        },
        Vi = function(a) {
            if (cf(N.C)) return a;
            a = a.replace(/&url=([^&#]+)/, function(b, c) {
                var d = mg(decodeURIComponent(c));
                return "&url=" + encodeURIComponent(d)
            });
            a = a.replace(/&ref=([^&#]+)/, function(b, c) {
                var d = mg(decodeURIComponent(c));
                return "&ref=" + encodeURIComponent(d)
            });
            return a
        },
        Wi = function() {
            if (Ld || !0 !== m._gtmdgs && !Ri("11")) return -1;
            var a = Fa('1');
            return Hg(1, 100) < a ? Hg(2, 2) : -1
        },
        Xi = function() {
            return -1 !== tb.userAgent.toLowerCase().indexOf("firefox")
        },
        Yi = function(a) {
            var b;
            if (!a || !a.length) return;
            for (var c = [], d = 0; d < a.length; ++d) {
                var e = a[d];
                e && e.estimated_delivery_date ? c.push("" + e.estimated_delivery_date) : c.push("")
            }
            b = c.join(",");
            return b
        },
        Zi = function() {
            var a = !1;
            return a
        };
    var $i = !1,
        aj = 0,
        bj = [];

    function cj(a) {
        if (!$i) {
            var b = B.createEventObject,
                c = "complete" == B.readyState,
                d = "interactive" == B.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                $i = !0;
                for (var e = 0; e < bj.length; e++) G(bj[e])
            }
            bj.push = function() {
                for (var f = 0; f < arguments.length; f++) G(arguments[f]);
                return 0
            }
        }
    }

    function dj() {
        if (!$i && 140 > aj) {
            aj++;
            try {
                B.documentElement.doScroll("left"), cj()
            } catch (a) {
                m.setTimeout(dj, 50)
            }
        }
    }
    var ej = function(a) {
        $i ? a() : bj.push(a)
    };
    var gj = function(a, b) {
            this.m = !1;
            this.D = [];
            this.I = {
                tags: []
            };
            this.X = !1;
            this.o = this.s = 0;
            fj(this, a, b)
        },
        hj = function(a, b, c, d) {
            if (Hd.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Vb(d) && (e = H(d, e));
            e.id = c;
            e.status = "timeout";
            return a.I.tags.push(e) - 1
        },
        ij = function(a, b, c, d) {
            var e = a.I.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        jj = function(a) {
            if (!a.m) {
                for (var b = a.D, c = 0; c < b.length; c++) b[c]();
                a.m = !0;
                a.D.length = 0
            }
        },
        fj = function(a, b, c) {
            sa(b) && kj(a, b);
            c && m.setTimeout(function() {
                return jj(a)
            }, Number(c))
        },
        kj = function(a,
            b) {
            var c = Ra(function() {
                return G(function() {
                    b(O.J, a.I)
                })
            });
            a.m ? c() : a.D.push(c)
        },
        lj = function(a) {
            a.s++;
            return Ra(function() {
                a.o++;
                a.X && a.o >= a.s && jj(a)
            })
        };
    var mj = function() {
            function a(d) {
                return !ua(d) || 0 > d ? 0 : d
            }
            if (!R._li && m.performance && m.performance.timing) {
                var b = m.performance.timing.navigationStart,
                    c = ua(de.get("gtm.start")) ? de.get("gtm.start") : 0;
                R._li = {
                    cst: a(c - b),
                    cbt: a(Nd - b)
                }
            }
        },
        nj = function(a) {
            m.performance && m.performance.mark(O.J + "_" + a + "_start")
        },
        oj = function(a) {
            if (m.performance) {
                var b = O.J + "_" + a + "_start",
                    c = O.J + "_" + a + "_duration";
                m.performance.measure(c, b);
                var d = m.performance.getEntriesByName(c)[0];
                m.performance.clearMarks(b);
                m.performance.clearMeasures(c);
                var e = R._p || {};
                void 0 === e[a] && (e[a] = d.duration, R._p = e);
                return d.duration
            }
        },
        pj = function() {
            if (m.performance && m.performance.now) {
                var a = R._p || {};
                a.PAGEVIEW = m.performance.now();
                R._p = a
            }
        };
    var qj = {},
        rj = function() {
            return m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject]
        },
        sj = !1;

    function yj() {
        return m.GoogleAnalyticsObject || "ga"
    }
    var zj = function(a) {},
        Aj = function(a, b) {
            return function() {
                var c = rj(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            l = f.get("hitCallback"),
                            k = 0 > g.indexOf("&tid=" + b);
                        k && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        k && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var Hj = function(a) {},
        Lj = function(a) {},
        Mj =
        function() {
            return "&tc=" + Cc.filter(function(a) {
                return a
            }).length
        },
        Pj = function() {
            2022 <= Nj().length && Oj()
        },
        Qj = function(a) {
            return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*"
        },
        Sj = function() {
            Rj || (Rj = m.setTimeout(Oj, 500))
        },
        Oj = function() {
            Rj && (m.clearTimeout(Rj), Rj = void 0);
            void 0 === Tj || Uj[Tj] && !Vj && !Wj || (Xj[Tj] || Yj.Fi() || 0 >= Zj-- ? (Ed(1), Xj[Tj] = !0) : (Yj.$i(), Eb(Nj(!0)), Uj[Tj] = !0, ak = bk = ck = Wj = Vj = ""))
        },
        Nj = function(a) {
            var b = Tj;
            if (void 0 === b) return "";
            var c = Dd("GTM"),
                d = Dd("TAGGING");
            return [dk, Uj[b] ? "" : "&es=1",
                ek[b], Hj(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", Mj(), Vj, Wj, ck, bk, Lj(a), ak, "&z=0"
            ].join("")
        },
        gk = function() {
            dk = fk()
        },
        fk = function() {
            return [Od, "&v=3&t=t", "&pid=" + xa(), "&rv=" + O.ad].join("")
        },
        Kj = ["L", "S", "Y"],
        Gj = ["S", "E"],
        hk = {
            sampleRate: "0.005000",
            Pg: "",
            Og: Number("5")
        },
        ik = 0 <= B.location.search.indexOf("?gtm_latency=") || 0 <= B.location.search.indexOf("&gtm_latency="),
        jk;
    if (!(jk = ik)) {
        var kk = Math.random(),
            lk = hk.sampleRate;
        jk = kk < lk
    }
    var mk = jk,
        nk = {
            label: O.J + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        },
        dk = fk(),
        Uj = {},
        Vj = "",
        Wj = "",
        ak = "",
        bk = "",
        Jj = {},
        Ij = !1,
        Fj = {},
        ok = {},
        ck = "",
        Tj = void 0,
        ek = {},
        Xj = {},
        Rj = void 0,
        pk = 5;
    0 < hk.Og && (pk = hk.Og);
    var Yj = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                Fi: function() {
                    return c < a ? !1 : Pa() - d[c % a] < b
                },
                $i: function() {
                    var f = c++ % a;
                    d[f] = Pa()
                }
            }
        }(pk, 1E3),
        Zj = 1E3,
        rk = function(a, b) {
            if (mk && !Xj[a] && Tj !==
                a) {
                Oj();
                Tj = a;
                ak = Vj = "";
                ek[a] = "&e=" + Qj(b) + "&eid=" + a;
                Sj();
            }
        },
        sk = function(a, b, c, d) {
            if (mk && b) {
                var e, f = String(b[Xb.pb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!Xj[a]) {
                    a !== Tj && (Oj(), Tj = a);
                    Vj = Vj ? Vj + "." + g : "&tr=" + g;
                    var l = b["function"];
                    if (!l) throw Error("Error: No function name given for function call.");
                    var k = (Ec[l] ? "1" : "2") + e;
                    ak = ak ? ak + "." + k : "&ti=" + k;
                    Sj();
                    Pj()
                }
            }
        };
    var zk = function(a, b, c) {
            if (mk && !Xj[a]) {
                a !== Tj && (Oj(), Tj = a);
                var d = c + b;
                Wj = Wj ? Wj + "." + d : "&epr=" + d;
                Sj();
                Pj()
            }
        },
        Ak = function(a, b, c) {};

    function Bk(a, b, c, d) {
        var e = Cc[a],
            f = Ck(a, b, c, d);
        if (!f) return null;
        var g = Jc(e[Xb.Nf], c, []);
        if (g && g.length) {
            var l = g[0];
            f = Bk(l.index, {
                onSuccess: f,
                onFailure: 1 === l.fg ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Ck(a, b, c, d) {
        function e() {
            if (f[Xb.Jh]) l();
            else {
                var x = Kc(f, c, []);
                var A = x[Xb.Tg];
                if (null != A)
                    for (var w = 0; w < A.length; w++)
                        if (!cf(A[w])) {
                            l();
                            return
                        }
                var y = hj(c.qb, String(f[Xb.pb]), Number(f[Xb.Of]), x[Xb.Kh]),
                    z = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!z) {
                        z = !0;
                        var D = Pa() - E;
                        sk(c.id, Cc[a], "5", D);
                        ij(c.qb, y, "success",
                            D);
                        g()
                    }
                };
                x.vtp_gtmOnFailure = function() {
                    if (!z) {
                        z = !0;
                        var D = Pa() - E;
                        sk(c.id, Cc[a], "6", D);
                        ij(c.qb, y, "failure", D);
                        l()
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                sk(c.id, f, "1");
                var C = function() {
                    var D = Pa() - E;
                    sk(c.id, f, "7", D);
                    ij(c.qb, y, "exception", D);
                    z || (z = !0, l())
                };
                var E = Pa();
                try {
                    Ic(x, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (D) {
                    C(D)
                }
            }
        }
        var f = Cc[a],
            g = b.onSuccess,
            l = b.onFailure,
            k = b.terminate;
        if (c.Ee(f)) return null;
        var n = Jc(f[Xb.Pf], c, []);
        if (n && n.length) {
            var p = n[0],
                r = Bk(p.index, {
                    onSuccess: g,
                    onFailure: l,
                    terminate: k
                }, c, d);
            if (!r) return null;
            g = r;
            l = 2 === p.fg ? k : r
        }
        if (f[Xb.Jf] || f[Xb.Oh]) {
            var v =
                f[Xb.Jf] ? Dc : c.jj,
                t = g,
                q = l;
            if (!v[a]) {
                e = Ra(e);
                var u = Dk(a, v, e);
                g = u.onSuccess;
                l = u.onFailure
            }
            return function() {
                v[a](t, q)
            }
        }
        return e
    }

    function Dk(a, b, c) {
        var d = [],
            e = [];
        b[a] = Ek(d, e, c);
        return {
            onSuccess: function() {
                b[a] = Fk;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = Gk;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Ek(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Fk(a) {
        a()
    }

    function Gk(a, b) {
        b()
    };
    var Jk = function(a, b) {
        for (var c = [], d = 0; d < Cc.length; d++)
            if (a[d]) {
                var e = Cc[d];
                var f = lj(b.qb);
                try {
                    var g = Bk(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var l = c,
                            k = l.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var r = Ec[p];
                        k.call(l, {
                            Hg: n,
                            wg: r ? r.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else Hk(d, b), f()
                } catch (q) {
                    f()
                }
            }
        var v = b.qb;
        v.X = !0;
        v.o >= v.s && jj(v);
        c.sort(Ik);
        for (var t = 0; t < c.length; t++) c[t].execute();
        return 0 < c.length
    };

    function Ik(a, b) {
        var c, d = b.wg,
            e = a.wg;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Hg,
                l = b.Hg;
            f = g > l ? 1 : g < l ? -1 : 0
        }
        return f
    }

    function Hk(a, b) {
        if (!mk) return;
        var c = function(d) {
            var e = b.Ee(Cc[d]) ? "3" : "4",
                f = Jc(Cc[d][Xb.Nf], b, []);
            f && f.length && c(f[0].index);
            sk(b.id, Cc[d], e);
            var g = Jc(Cc[d][Xb.Pf], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }
    var Kk = !1;
    var Qk = function(a) {
        var b = Pa(),
            c = a["gtm.uniqueEventId"],
            d = a.event;
        if ("gtm.js" === d) {
            if (Kk) return !1;
            Kk = !0;
        }
        var g = se(c),
            l = !1;
        if (!g.active) {
            if ("gtm.js" !== d) return !1;
            l = !0;
            g = se(Number.MAX_SAFE_INTEGER)
        }
        rk(c,
            d);
        var k = a.eventCallback,
            n = a.eventTimeout,
            p = k;
        var r = {
            id: c,
            name: d,
            Ee: qe(g.isAllowed),
            jj: [],
            pg: function() {
                Ed(6)
            },
            $f: Lk(c),
            qb: new gj(p, n)
        };
        r.Zf = Mk();
        Nk(c, r.qb);
        var v = Oc(r);
        l && (v = Ok(v));
        var t = Jk(v, r);
        "gtm.js" !== d && "gtm.sync" !==
            d || zj(O.J);
        return Pk(v, t)
    };

    function Lk(a) {
        return function(b) {
            mk && (Wb(b) || Ak(a, "input", b))
        }
    }

    function Nk(a, b) {
        he(a, "event", 1);
        he(a, "ecommerce", 1);
        he(a, "gtm");
        he(a, "eventModel");
    }

    function Mk() {
        var a = {};
        a.event = ge("event", 1);
        a.ecommerce = ge("ecommerce", 1);
        a.gtm = ge("gtm");
        a.eventModel = ge("eventModel");
        return a
    }

    function Ok(a) {
        for (var b = [], c = 0; c < a.length; c++) a[c] && Gd[String(Cc[c][Xb.pb])] && (b[c] = !0);
        return b
    }

    function Pk(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Cc[c] && !Hd[String(Cc[c][Xb.pb])]) return !0;
        return !1
    }

    function Rk(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return lg("" + c + b).href
        }
    }

    function Sk(a, b) {
        return Tk() ? Rk(a, b) : void 0
    }

    function Tk() {
        var a = !1;
        return a
    }

    function Uk() {
        return !!O.bd && "SGTM_TOKEN" !== O.bd.replaceAll("@@", "")
    };
    var Vk = function() {
        var a = !1;
        return a
    };
    var Wk;
    if (3 === O.ad.length) Wk = "g";
    else {
        var Xk = "G";
        Wk = Xk
    }
    var Yk = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: Wk,
            OPT: "o"
        },
        Zk = function(a) {
            var b = O.J.split("-"),
                c = b[0].toUpperCase(),
                d = Yk[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === O.ad.length) {
                var g = "w";
                f = "2" + g
            } else f = "";
            return f + d + O.ad + e
        };

    function $k(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var al = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };

    function bl() {
        return gb("iPhone") && !gb("iPod") && !gb("iPad")
    };
    gb("Opera");
    gb("Trident") || gb("MSIE");
    gb("Edge");
    !gb("Gecko") || -1 != fb().toLowerCase().indexOf("webkit") && !gb("Edge") || gb("Trident") || gb("MSIE") || gb("Edge"); - 1 != fb().toLowerCase().indexOf("webkit") && !gb("Edge") && gb("Mobile");
    gb("Macintosh");
    gb("Windows");
    gb("Linux") || gb("CrOS");
    var cl = la.navigator || null;
    cl && (cl.appVersion || "").indexOf("X11");
    gb("Android");
    bl();
    gb("iPad");
    gb("iPod");
    bl() || gb("iPad") || gb("iPod");
    fb().toLowerCase().indexOf("kaios");
    var dl = function(a, b) {
            for (var c = a, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames[b])
                } catch (l) {
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
                    } catch (l) {}
                    f = null
                }
                if (!(c = f)) break
            }
            return null
        },
        el = function(a) {
            var b = B;
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
    var fl = function() {};
    var gl = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        hl = function(a, b) {
            this.o = a;
            this.m = null;
            this.D = {};
            this.X = 0;
            this.I = void 0 === b ? 500 : b;
            this.s = null
        };
    ka(hl, fl);
    var jl = function(a) {
        return "function" === typeof a.o.__tcfapi || null != il(a)
    };
    hl.prototype.addEventListener = function(a) {
        var b = {},
            c = qb(function() {
                return a(b)
            }),
            d = 0; - 1 !== this.I && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.I));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = gl(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try {
            kl(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    hl.prototype.removeEventListener = function(a) {
        a && a.listenerId && kl(this, "removeEventListener", null, a.listenerId)
    };
    var ml = function(a, b, c) {
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
            var l = c;
            2 === c ? (l = 0, 2 === g && (l = 1)) : 3 === c && (l = 1, 1 === g && (l = 0));
            var k;
            if (0 === l)
                if (a.purpose && a.vendor) {
                    var n = ll(a.vendor.consents, void 0 === d ? "755" : d);
                    k = n && "1" === b && a.purposeOneTreatment && ((ze(we) ? 0 : "DE" === a.publisherCC) || "CH" === a.publisherCC) ? !0 : n && ll(a.purpose.consents, b)
                } else k = !0;
            else k =
                1 === l ? a.purpose && a.vendor ? ll(a.purpose.legitimateInterests, b) && ll(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return k
        },
        ll = function(a, b) {
            return !(!a || !a[b])
        },
        kl = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.o.__tcfapi) {
                var e = a.o.__tcfapi;
                e(b, 2, c, d)
            } else if (il(a)) {
                nl(a);
                var f = ++a.X;
                a.D[f] = c;
                if (a.m) {
                    var g = {};
                    a.m.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        il = function(a) {
            if (a.m) return a.m;
            a.m = dl(a.o, "__tcfapiLocator");
            return a.m
        },
        nl = function(a) {
            a.s || (a.s = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.D[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, al(a.o, a.s))
        };
    var ol = !0;
    ol = !1;
    ye().m(we.m);
    var pl = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        ql = $k("", 550),
        rl = $k("", 500);

    function sl() {
        var a = R.tcf || {};
        return R.tcf = a
    }
    var tl = function(a, b) {
            this.s = a;
            this.m = b;
            this.o = Pa();
        },
        ul = function(a) {},
        vl = function(a) {},
        Bl = function() {
            var a = sl(),
                b = new hl(m, ol ? 3E3 : -1),
                c = new tl(b, a);
            if ((wl() ? !0 === m.gtag_enable_tcf_support : !1 !== m.gtag_enable_tcf_support) && !a.active && ("function" === typeof m.__tcfapi || jl(b))) {
                a.active = !0;
                a.Ac = {};
                xl();
                var d = null;
                ol ? d = m.setTimeout(function() {
                    yl(a);
                    zl(a);
                    d = null
                }, rl) : a.tcString = "tcunavailable";
                try {
                    b.addEventListener(function(e) {
                        d && (clearTimeout(d), d = null);
                        if (0 !== e.internalErrorState) yl(a), zl(a), ul(c);
                        else {
                            var f;
                            a.gdprApplies = e.gdprApplies;
                            if (!1 === e.gdprApplies) f = Al(), b.removeEventListener(e);
                            else if ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus || "cmpuishown" === e.eventStatus) {
                                var g = {},
                                    l;
                                for (l in pl)
                                    if (pl.hasOwnProperty(l))
                                        if ("1" === l) {
                                            var k, n = e,
                                                p = !0;
                                            p = void 0 === p ? !1 : p;
                                            var r;
                                            var v = n;
                                            !1 === v.gdprApplies ? r = !0 : (void 0 === v.internalErrorState && (v.internalErrorState = gl(v)), r = "error" === v.cmpStatus || 0 !== v.internalErrorState || "loaded" === v.cmpStatus && ("tcloaded" === v.eventStatus || "useractioncomplete" ===
                                                v.eventStatus) ? !0 : !1);
                                            k = r ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : ml(n, "1", 0) : !1;
                                            g["1"] = k
                                        } else g[l] = ml(e, l, pl[l]);
                                f = g
                            }
                            f && (a.tcString = e.tcString || "tcempty", a.Ac = f, zl(a), ul(c))
                        }
                    }), vl(c)
                } catch (e) {
                    d && (clearTimeout(d), d = null), yl(a), zl(a)
                }
            }
        };

    function yl(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        ol && (a.Ac = Al())
    }

    function xl() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = ql, a);
        $e(b)
    }
    var wl = function() {
        var a = !1;
        a = !0;
        return a
    };

    function Al() {
        var a = {},
            b;
        for (b in pl) pl.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function zl(a) {
        var b = {},
            c = (b.ad_storage = a.Ac["1"] ? "granted" : "denied", b);
        bf(c, 0, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: Cl()
        })
    }
    var Dl = function() {
            var a = sl();
            if (a.active && void 0 !== a.loadTime) return Number(a.loadTime)
        },
        Cl = function() {
            var a = sl();
            return a.active ? a.tcString || "" : ""
        },
        El = function() {
            var a = sl();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        Fl = function(a) {
            if (!pl.hasOwnProperty(String(a))) return !0;
            var b = sl();
            return b.active && b.Ac ? !!b.Ac[String(a)] : !0
        };
    var Gl = function(a, b) {
            var c = a && !cf(N.C);
            return b && c ? "0" : b
        },
        Kl = function(a) {
            function b(q) {
                var u;
                R.reported_gclid || (R.reported_gclid = {});
                u = R.reported_gclid;
                var x, A = g;
                x = !g || Ke() && !cf(N.C) ? k + (q ? "gcu" : "gcs") : k + "." + (f.prefix || "_gcl") + (q ? "gcu" : "gcs");
                if (!u[x]) {
                    u[x] = !0;
                    var w = [],
                        y = {},
                        z = function(I, M) {
                            M && (w.push(I + "=" + encodeURIComponent(M)), y[I] = !0)
                        },
                        C = "https://www.google.com";
                    if (Ke()) {
                        var E = cf(N.C);
                        z("gcs", df());
                        q && z("gcu", "1");
                        Le() && z("gcd", ef());
                        R.dedupe_gclid || (R.dedupe_gclid = "" + bh());
                        z("rnd", R.dedupe_gclid);
                        if ((!k || n && "aw.ds" !== n) && cf(N.C)) {
                            var D = mi("_gcl_aw");
                            z("gclaw", D.join("."))
                        }
                        z("url", String(m.location).split(/[?#]/)[0]);
                        z("dclid", Gl(d, p));
                        var F = !1;
                        F = !0;
                        E || !d && !F || (C = "https://pagead2.googlesyndication.com")
                    }
                    z("gdpr_consent",
                        Cl()), z("gdpr", El());
                    "1" === Xh(!1)._up && z("gtm_up", "1");
                    z("gclid", Gl(d, k));
                    z("gclsrc", n);
                    if (!(y.gclid || y.dclid || y.gclaw) && (z("gbraid", Gl(d, r)), y.gbraid && Il && (A = !1), !y.gbraid && Ke() && cf(N.C))) {
                        var P = mi("_gcl_gb");
                        0 < P.length && (z("gclgb", P.join(".")), Il && (A = !1))
                    }
                    z("gtm", Zk(!e));
                    g && cf(N.C) && (nh(f || {}), A && z("auid", ih[kh(f.prefix)] || ""));
                    Jl || a.hd && z("did", a.hd), a.Qb && z("gdid", a.Qb), a.Pb && z("edid", a.Pb);
                    var J = C + "/pagead/landing?" + w.join("&");
                    Lb(J)
                }
            }
            var c = !!a.se,
                d = !!a.Ea,
                e = a.R,
                f = void 0 === a.rb ? {} : a.rb,
                g = void 0 === a.rd ? !0 : a.rd,
                l = si(),
                k = l.gclid || "",
                n = l.gclsrc,
                p = l.dclid || "",
                r = l.gbraid || "",
                v = !c && ((!k || n && "aw.ds" !== n ? !1 : !0) || r),
                t = Ke();
            if (v || t) t ? gf(function() {
                b();
                cf(N.C) || ff(function(q) {
                    return b(!0, q.consentEventId)
                }, N.C)
            }, [N.C]) : b()
        },
        Hl = function(a) {
            var b = String(m.location).split(/[?#]/)[0],
                c = O.Wg || m._CONSENT_MODE_SALT;
            return a ? c ? String(Lg(b + a + c)) : "0" : ""
        },
        Jl = !1;
    var Il = !1;
    var Ll = function(a) {
        if (!Ke() || He(N.C)) {
            a = a || {};
            nh(a, !1);
            var b = jh[kh(qi(a.prefix))];
            if (b && !(18E5 < Pa() - 1E3 * b.ng)) {
                var c = b.id,
                    d = c.split(".");
                if (2 === d.length && !(864E5 < Pa() - 1E3 * (Number(d[1]) || 0))) return c
            }
        }
    };
    var Ml = !1;
    var Nl = function() {
            this.m = {}
        },
        Ol = function(a, b, c) {
            null != c && (a.m[b] = c)
        },
        Pl = function(a) {
            return Object.keys(a.m).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.m[b])
            }).join("&")
        },
        Rl = function(a, b, c, d, e) {};
    var Tl = /[A-Z]+/,
        Ul = /\s/,
        Vl = function(a) {
            if (ta(a)) {
                a = La(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Tl.test(c)) {
                        var d = !1;
                        d = !0;
                        for (var e = a.substring(b + 1).split("/"), f = 0; f < e.length; f++)
                            if (!e[f] || Ul.test(e[f]) && ("AW" !== c || 1 !== f || !d)) return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + e[0],
                            M: e
                        }
                    }
                }
            }
        },
        Xl = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d =
                    Vl(a[c]);
                d && (b[d.id] = d)
            }
            Wl(b);
            var e = [];
            Aa(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function Wl(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.M[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var Zl = function(a, b, c, d) {
            return (2 === Yl() || d || "http:" != m.location.protocol ? a : b) + c
        },
        Yl = function() {
            var a = Ab(),
                b;
            if (1 === a) a: {
                var c = Kd;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = B.getElementsByTagName("script"), l = 0; l < g.length && 100 > l; l++) {
                    var k = g[l].src;
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
    var am = function(a, b, c) {
            if (m[a.functionName]) return b.Je && G(b.Je), m[a.functionName];
            var d = $l();
            m[a.functionName] = d;
            if (a.ed)
                for (var e = 0; e < a.ed.length; e++) m[a.ed[e]] = m[a.ed[e]] || $l();
            a.qd && void 0 === m[a.qd] && (m[a.qd] = c);
            zb(Zl("https://", "http://", a.Pe), b.Je, b.Qi);
            return d
        },
        $l = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        bm = {
            functionName: "_googWcmImpl",
            qd: "_googWcmAk",
            Pe: "www.gstatic.com/wcm/loader.js"
        },
        cm = {
            functionName: "_gaPhoneImpl",
            qd: "ga_wpid",
            Pe: "www.gstatic.com/gaphone/loader.js"
        },
        dm = {
            Sg: "",
            Ph: "5"
        },
        em = {
            functionName: "_googCallTrackingImpl",
            ed: [cm.functionName, bm.functionName],
            Pe: "www.gstatic.com/call-tracking/call-tracking_" + (dm.Sg || dm.Ph) + ".js"
        },
        fm = {},
        gm = function(a, b, c, d) {
            Ed(22);
            if (c) {
                d = d || {};
                var e = am(bm, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.Ma && (f.autoreplace = c);
                e(2, d.Ma, f, c, 0, Oa(), d.options)
            }
        },
        hm = function(a, b, c, d) {
            Ed(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Oa()
                    }, f = 0; f < a.length; f++) {
                    var g = a[f];
                    fm[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.M.length ? (e.adData = {
                            ak: g.M[0],
                            cl: g.M[1]
                        }, fm[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                            gaWpid: g.containerId
                        }, fm[g.id] = !0))
                }(e.gaData || e.adData) && am(em, d)(d.Ma, e, d.options)
            }
        },
        im = function() {
            var a = !1;
            return a
        },
        jm = function(a, b) {
            if (a)
                if (Vk()) {} else {
                    if (ta(a)) {
                        var c =
                            Vl(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = b.getWithConfig(N.xh);
                    if (f && va(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var l = Vl(f[g]);
                            l && (d.push(l), (a.id === l.id || a.id === a.containerId && a.containerId === l.containerId) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var k = b.getWithConfig(N.Af),
                            n;
                        if (k) {
                            va(k) ? n = k : n = [k];
                            var p = b.getWithConfig(N.yf),
                                r = b.getWithConfig(N.zf),
                                v = b.getWithConfig(N.Bf),
                                t = b.getWithConfig(N.wh),
                                q = p || r,
                                u = 1;
                            "UA" !== a.prefix || d || (u = 5);
                            for (var x = 0; x < n.length; x++)
                                if (x < u)
                                    if (d) hm(d, n[x], t, {
                                        Ma: q,
                                        options: v
                                    });
                                    else if ("AW" === a.prefix &&
                                a.M[1]) im() ? hm([a], n[x], t || "US", {
                                Ma: q,
                                options: v
                            }) : gm(a.M[0], a.M[1], n[x], {
                                Ma: q,
                                options: v
                            });
                            else if ("UA" === a.prefix)
                                if (im()) hm([a], n[x], t || "US", {
                                    Ma: q
                                });
                                else {
                                    var A = a.containerId,
                                        w = n[x],
                                        y = {
                                            Ma: q
                                        };
                                    Ed(23);
                                    if (w) {
                                        y = y || {};
                                        var z = am(cm, y, A),
                                            C = {};
                                        void 0 !== y.Ma ? C.receiver = y.Ma : C.replace = w;
                                        C.ga_wpid = A;
                                        C.destination = w;
                                        z(2, Oa(), C)
                                    }
                                }
                        }
                    }
                }
        };
    var lm = function() {
            var a = R.floc;
            if (a) {
                var b = a.ts,
                    c = a.floc;
                if (b && c && 1E3 > Pa() - b) return Promise.resolve(c)
            }
            var d = void 0;
            try {
                d = Promise.race([B.interestCohort().then(function(e) {
                    R.floc = {
                        ts: Pa(),
                        floc: e
                    };
                    return e
                }), new Promise(function(e) {
                    m.setTimeout(function() {
                        return e()
                    }, km)
                })]).catch(function() {})
            } catch (e) {
                return
            }
            return d
        },
        nm = function() {
            if (!m.Promise) return !1;
            sa(B.interestCohort) || mm || (mm = !0, el("A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"));
            return sa(B.interestCohort)
        },
        mm = !1,
        km = Number("200");
    var nn = function() {
            var a = !0;
            Fl(7) && Fl(9) && Fl(10) || (a = !1);
            var b = !0;
            b = !1;
            b && !mn() && (a = !1);
            return a
        },
        mn = function() {
            var a = !0;
            Fl(3) && Fl(4) || (a = !1);
            return a
        };
    var ho = !1;
    ho = !0;

    function io() {
        var a = R;
        return a.gcq = a.gcq || new jo
    }
    var ko = function(a, b, c) {
            io().register(a, b, c)
        },
        lo = function(a, b, c, d) {
            io().push("event", [b, a], c, d)
        },
        mo = function(a, b) {
            io().push("config", [a], b)
        },
        no = function(a, b, c, d) {
            io().push("get", [a, b], c, d)
        },
        oo = {},
        po = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.o = {};
            this.s = null;
            this.m = !1
        },
        qo = function(a, b, c, d, e) {
            this.type = a;
            this.s = b;
            this.R = c || "";
            this.m = d;
            this.o = e
        },
        jo = function() {
            this.o = {};
            this.s = {};
            this.m = [];
            this.D = {
                AW: !1,
                UA: !1
            }
        },
        ro = function(a, b) {
            var c = Vl(b);
            return a.o[c.containerId] =
                a.o[c.containerId] || new po
        },
        so = function(a, b, c) {
            if (b) {
                var d = Vl(b);
                if (d && 1 === ro(a, b).status) {
                    ro(a, b).status = 2;
                    var e = {};
                    mk && (e.timeoutId = m.setTimeout(function() {
                        Ed(38);
                        Sj()
                    }, 3E3));
                    a.push("require", [e], d.containerId);
                    oo[d.containerId] = Pa();
                    if (Vk()) {} else {
                        var g =
                            "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=" + O.U + "&cx=c";
                        Uk() && (g += "&sign=" + O.bd);
                        var l = ("http:" != m.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g),
                            k = Sk(c, g) || l;
                        zb(k)
                    }
                }
            }
        },
        to = function(a, b, c, d) {
            if (d.R) {
                var e = ro(a, d.R),
                    f = e.s;
                if (f) {
                    var g = H(c),
                        l = H(e.targetConfig[d.R]),
                        k = H(e.containerConfig),
                        n = H(e.remoteConfig),
                        p = H(a.s),
                        r = ce("gtm.uniqueEventId"),
                        v = Vl(d.R).prefix,
                        t = Ra(function() {
                            var u = g[N.Hb];
                            u && G(u)
                        }),
                        q = Of(Nf(Pf(Mf(Kf(Lf(Jf(If(Hf(g), l), k), n), p), function() {
                            zk(r, v, "2");
                            ho && t()
                        }), function() {
                            zk(r, v, "3");
                            ho && t()
                        }), function(u, x) {
                            a.D[u] = x
                        }), function(u) {
                            return a.D[u]
                        });
                    try {
                        zk(r, v, "1");
                        f(d.R, b, d.s, q)
                    } catch (u) {
                        zk(r, v, "4");
                    }
                }
            }
        };
    jo.prototype.register = function(a, b, c) {
        var d = ro(this, a);
        if (3 !== d.status) {
            d.s = b;
            d.status = 3;
            c && (H(d.remoteConfig, c), d.remoteConfig = c);
            var e = Vl(a),
                f = oo[e.containerId];
            if (void 0 !== f) {
                var g = R[e.containerId].bootstrap,
                    l = e.prefix.toUpperCase();
                R[e.containerId]._spx && (l = l.toLowerCase());
                var k = ce("gtm.uniqueEventId"),
                    n = l,
                    p = Pa() - g;
                if (mk && !Xj[k]) {
                    k !== Tj && (Oj(), Tj = k);
                    var r = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    bk = bk ? bk + "," + r : "&cl=" + r
                }
                delete oo[e.containerId]
            }
            this.flush()
        }
    };
    jo.prototype.push = function(a, b, c, d) {
        var e = Math.floor(Pa() / 1E3);
        so(this, c, b[0][N.oa] || this.s[N.oa]);
        c && ro(this, c).m && (d = !1);
        this.m.push(new qo(a, e, c, b, d));
        d || this.flush()
    };
    jo.prototype.insert = function(a, b, c) {
        var d = Math.floor(Pa() / 1E3);
        0 < this.m.length ? this.m.splice(1, 0, new qo(a, d, c, b, !1)) : this.m.push(new qo(a, d, c, b, !1))
    };
    jo.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.m.length;) {
            var f = this.m[0];
            if (f.o) !f.R || ro(this, f.R).m ? (f.o = !1, this.m.push(f)) : c.push(f), this.m.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== ro(this, f.R).status && !a) {
                            this.m.push.apply(this.m, c);
                            return
                        }
                        mk && m.clearTimeout(f.m[0].timeoutId);
                        break;
                    case "set":
                        Aa(f.m[0], function(v, t) {
                            H(Wa(v, t), b.s)
                        });
                        break;
                    case "config":
                        e.Fa = {};
                        Aa(f.m[0], function(v) {
                            return function(t, q) {
                                H(Wa(t, q), v.Fa)
                            }
                        }(e));
                        var g = !!e.Fa[N.Uc];
                        delete e.Fa[N.Uc];
                        var l =
                            ro(this, f.R),
                            k = Vl(f.R),
                            n = k.containerId === k.id;
                        g || (n ? l.containerConfig = {} : l.targetConfig[f.R] = {});
                        l.m && g || to(this, N.wa, e.Fa, f);
                        l.m = !0;
                        delete e.Fa[N.Mb];
                        n ? H(e.Fa, l.containerConfig) : H(e.Fa, l.targetConfig[f.R]);
                        d = !0;
                        break;
                    case "event":
                        e.Ec = {};
                        Aa(f.m[0], function(v) {
                            return function(t, q) {
                                H(Wa(t, q), v.Ec)
                            }
                        }(e));
                        to(this, f.m[1], e.Ec, f);
                        break;
                    case "get":
                        var p = {},
                            r = (p[N.Ha] = f.m[0], p[N.Ua] = f.m[1], p);
                        to(this, N.Ga, r, f)
                }
                this.m.shift();
                uo(this, f)
            }
            e = {
                Fa: e.Fa,
                Ec: e.Ec
            }
        }
        this.m.push.apply(this.m, c);
        d && this.flush()
    };
    var uo = function(a, b) {
        if ("require" !== b.type)
            if (b.R)
                for (var c = a.getCommandListeners(b.R)[b.type] || [], d = 0; d < c.length; d++) c[d]();
            else
                for (var e in a.o)
                    if (a.o.hasOwnProperty(e)) {
                        var f = a.o[e];
                        if (f && f.o)
                            for (var g = f.o[b.type] || [], l = 0; l < g.length; l++) g[l]()
                    }
    };
    jo.prototype.getRemoteConfig = function(a) {
        return ro(this, a).remoteConfig
    };
    jo.prototype.getCommandListeners = function(a) {
        return ro(this, a).o
    };
    var Ao = "HA GF G UA AW DC".split(" "),
        Bo = !1;
    Bo = !0;
    var Co = !1,
        Do = !1,
        Eo = 0;

    function Fo(a, b) {
        var c = {
            event: a
        };
        b && (c.eventModel = H(b), b[N.Hb] && (c.eventCallback = b[N.Hb]), b[N.Nc] && (c.eventTimeout = b[N.Nc]));
        return c
    }

    function Go(a) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Rd()
        });
        return a["gtm.uniqueEventId"]
    }

    function Ho() {
        return Co
    }
    var Io = {
            config: function(a) {
                var b, c = Go(a);
                return b
            },
            consent: function(a) {
                function b() {
                    Ho() && H(a[2], {
                        subcommand: a[1]
                    })
                }
                if (3 === a.length) {
                    Ed(39);
                    var c = Rd(),
                        d = a[1];
                    "default" === d ? (b(), $e(a[2])) : "update" === d && (b(), bf(a[2], c))
                }
            },
            event: function(a) {
                var b = a[1];
                if (!(2 > a.length) && ta(b)) {
                    var c;
                    if (2 < a.length) {
                        if (!Vb(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        c = a[2]
                    }
                    var d = Fo(b, c),
                        e = Go(a);
                    d["gtm.uniqueEventId"] = e;
                    return d
                }
            },
            get: function(a) {},
            js: function(a) {
                if (2 == a.length && a[1].getTime) {
                    Do = !0;
                    Ho();
                    var b = {};
                    return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(),
                        b["gtm.uniqueEventId"] = Go(a), b
                }
            },
            policy: function() {},
            set: function(a) {
                var b;
                2 == a.length && Vb(a[1]) ? b = H(a[1]) : 3 == a.length && ta(a[1]) && (b = {}, Vb(a[2]) || va(a[2]) ? b[a[1]] = H(a[2]) : b[a[1]] = a[2]);
                if (b) {
                    b._clear = !0;
                    return b
                }
            }
        },
        Jo = {
            policy: !0
        };
    var Ko = function(a) {
            var b = m[O.U].hide;
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
        Lo = function(a) {
            var b = m[O.U],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var Mo = !1,
        No = [];

    function Oo() {
        if (!Mo) {
            Mo = !0;
            for (var a = 0; a < No.length; a++) G(No[a])
        }
    }
    var Po = function(a) {
        Mo ? G(a) : No.push(a)
    };
    var fp = function(a) {
        if (ep(a)) return a;
        this.m = a
    };
    fp.prototype.xi = function() {
        return this.m
    };
    var ep = function(a) {
        return !a || "object" !== Tb(a) || Vb(a) ? !1 : "getUntrustedUpdateValue" in a
    };
    fp.prototype.getUntrustedUpdateValue = fp.prototype.xi;
    var gp = [],
        hp = !1,
        ip = !1,
        jp = function(a) {
            return m[O.U].push(a)
        },
        kp = function(a, b) {
            var c = R[O.U],
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

    function lp(a) {
        var b = a._clear;
        Aa(a, function(d, e) {
            "_clear" !== d && (b && fe(d, void 0), fe(d, e))
        });
        Md || (Md = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || (c = Rd(), a["gtm.uniqueEventId"] = c, fe("gtm.uniqueEventId", c));
        return Qk(a)
    }

    function mp() {
        var a = gp[0];
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Da(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b) return !0
        }
        return !1
    }

    function np() {
        for (var a = !1; !ip && 0 < gp.length;) {
            if (!hp && mp()) {
                var b = {},
                    c = (b.event = "gtm.init_consent", b),
                    d = {},
                    e = (d.event = "gtm.init", d),
                    f = gp[0]["gtm.uniqueEventId"];
                f && (c["gtm.uniqueEventId"] = f - 2, e["gtm.uniqueEventId"] = f - 1);
                gp.unshift(c, e);
                hp = !0
            }
            ip = !0;
            delete $d.eventModel;
            be();
            var g = gp.shift();
            if (null != g) {
                var l = ep(g);
                if (l) {
                    var k = g;
                    g = ep(k) ? k.getUntrustedUpdateValue() : void 0;
                    for (var n = ["gtm.allowlist",
                            "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"
                        ], p = 0; p < n.length; p++) {
                        var r = n[p],
                            v = ce(r, 1);
                        if (va(v) || Vb(v)) v = H(v);
                        ae[r] = v
                    }
                }
                try {
                    if (sa(g)) try {
                        g.call(de)
                    } catch (z) {} else if (va(g)) {
                        var t = g;
                        if (ta(t[0])) {
                            var q = t[0].split("."),
                                u = q.pop(),
                                x = t.slice(1),
                                A = ce(q.join("."), 2);
                            if (void 0 !== A && null !== A) try {
                                A[u].apply(A, x)
                            } catch (z) {}
                        }
                    } else {
                        if (Da(g)) {
                            a: {
                                var w = g;
                                if (w.length && ta(w[0])) {
                                    var y = Io[w[0]];
                                    if (y && (!l || !Jo[w[0]])) {
                                        g = y(w);
                                        break a
                                    }
                                }
                                g = void 0
                            }
                            if (!g) {
                                ip = !1;
                                continue
                            }
                        }
                        a = lp(g) || a
                    }
                } finally {
                    l && be(!0)
                }
            }
            ip = !1
        }
        return !a
    }

    function op() {
        var b = np();
        try {
            Ko(O.J)
        } catch (c) {}
        return b
    }
    var qp = function() {
            var a = vb(O.U, []),
                b = vb("google_tag_manager", {});
            b = b[O.U] = b[O.U] || {};
            ej(function() {
                b.gtmDom || (b.gtmDom = !0, a.push({
                    event: "gtm.dom"
                }))
            });
            Po(function() {
                b.gtmLoad || (b.gtmLoad = !0, a.push({
                    event: "gtm.load"
                }))
            });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function() {
                var e;
                if (0 < R.SANDBOXED_JS_SEMAPHORE) {
                    e = [];
                    for (var f = 0; f < arguments.length; f++) e[f] = new fp(arguments[f])
                } else e = [].slice.call(arguments, 0);
                var g, l = !0;
                l = !1;
                g = l;
                !g && gp.push.apply(gp, e);
                var k = c.apply(a, e);
                g && gp.push.apply(gp, e);
                if (300 < this.length)
                    for (Ed(4); 300 < this.length;) this.shift();
                var n = "boolean" !== typeof k || k;
                return np() && n
            };
            var d = a.slice(0);
            gp.push.apply(gp, d);
            if (pp()) {
                G(op)
            }
        },
        pp = function() {
            var a = !0;
            return a
        };

    function rp(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Pa();
        return b < c + 3E5 && b > c - 9E5
    };
    var sp = function(a) {
        R.addTargetToGroup ? R.addTargetToGroup(a) : (R.pendingDefaultTargets = R.pendingDefaultTargets || [], R.pendingDefaultTargets.push(a))
    };
    var tp = {};
    tp.Xc = new String("undefined");
    var up = function(a) {
        this.m = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === tp.Xc ? b : a[d]);
            return c.join("")
        }
    };
    up.prototype.toString = function() {
        return this.m("undefined")
    };
    up.prototype.valueOf = up.prototype.toString;
    tp.Qh = up;
    tp.ke = {};
    tp.gi = function(a) {
        return new up(a)
    };
    var vp = {};
    tp.aj = function(a, b) {
        var c = Rd();
        vp[c] = [a, b];
        return c
    };
    tp.bg = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = vp[c];
            if (d && "function" === typeof d[b]) d[b]();
            vp[c] = void 0
        }
    };
    tp.Ei = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
            b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    tp.Ti = function(a) {
        if (a === tp.Xc) return a;
        var b = Rd();
        tp.ke[b] = a;
        return 'google_tag_manager["' + O.J + '"].macro(' + b + ")"
    };
    tp.Oi = function(a, b, c) {
        a instanceof tp.Qh && (a = a.m(tp.aj(b, c)), b = pa);
        return {
            Bi: a,
            onSuccess: b
        }
    };
    var wp = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": Mb(a, "className"),
                "gtm.elementId": a["for"] || Hb(a, "id") || "",
                "gtm.elementTarget": a.formTarget || Mb(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Mb(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        xp = function(a) {
            R.hasOwnProperty("autoEventsSettings") || (R.autoEventsSettings = {});
            var b = R.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        yp = function(a, b, c) {
            xp(a)[b] = c
        },
        zp = function(a, b, c, d) {
            var e = xp(a),
                f = Qa(e, b, d);
            e[b] = c(f)
        },
        Ap = function(a, b, c) {
            var d = xp(a);
            return Qa(d, b, c)
        };
    var Up = m.clearTimeout,
        Vp = m.setTimeout,
        U = function(a, b, c, d) {
            if (Vk()) {
                b && G(b)
            } else return zb(a, b, c, d)
        },
        Wp = function() {
            return new Date
        },
        Xp = function() {
            return m.location.href
        },
        Yp = function(a) {
            return jg(lg(a), "fragment")
        },
        Zp = function(a) {
            return kg(lg(a))
        },
        $p = function(a, b) {
            return ce(a, b || 2)
        },
        aq = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = jp(a)) : d = jp(a);
            return d
        },
        bq = function(a, b) {
            m[a] = b
        },
        X = function(a, b,
            c) {
            b && (void 0 === m[a] || c && !m[a]) && (m[a] = b);
            return m[a]
        },
        cq = function(a, b, c) {
            return Qg(a, b, void 0 === c ? !0 : !!c)
        },
        dq = function(a, b, c) {
            return 0 === Zg(a, b, c)
        },
        eq = function(a, b) {
            if (Vk()) {
                b && G(b)
            } else Db(a, b)
        },
        fq = function(a) {
            return !!Ap(a, "init", !1)
        },
        gq = function(a) {
            yp(a, "init", !0)
        },
        hq = function(a) {
            var b = Kd,
                c = "?id=" + encodeURIComponent(a) + "&l=" + O.U;
            Uk() && (c += "&sign=" + O.bd, ub && (b = ub.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]));
            var d = Zl("https://", "http://", b + c);
            U(d)
        },
        iq = function(a, b, c) {
            mk && (Wb(a) || Ak(c, b, a))
        };
    var jq = tp.Oi;

    function Gq(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    var Hq = new ya;

    function Iq(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = Hq.get(e);
            f || (f = new RegExp(b, d), Hq.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function Jq(a, b) {
        function c(g) {
            var l = lg(g),
                k = jg(l, "protocol"),
                n = jg(l, "host", !0),
                p = jg(l, "port"),
                r = jg(l, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === k || "http" == k && "80" == p || "https" == k && "443" == p) k = "web", p = "default";
            return [k, n, p, r]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Kq(a) {
        return Lq(a) ? 1 : 0
    }

    function Lq(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = H(a, {});
                H({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Kq(e)) return !0
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
                            for (var l = 0; l < g.length; l++)
                                if (b[g[l]]) {
                                    f = b[g[l]](c);
                                    break a
                                }
                        } catch (k) {}
                    }
                    f = !1
                }
                return f;
            case "_ew":
                return Gq(b, c);
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
                return Iq(b, c, a.ignore_case);
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return Jq(b, c)
        }
        return !1
    };
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);
    var Mq = encodeURI,
        Y = encodeURIComponent,
        Nq = Eb;
    var Oq = function(a, b) {
        if (!a) return !1;
        var c = jg(lg(a), "host");
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
    var Pq = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    };

    function ns() {
        return m.gaGlobal = m.gaGlobal || {}
    }
    var os = function() {
            var a = ns();
            a.hid = a.hid || xa();
            return a.hid
        },
        ps = function(a, b) {
            var c = ns();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var Ts = function() {
        if (sa(m.__uspapi)) {
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
    var rt = window,
        st = document,
        tt = function(a) {
            var b = rt._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === rt["ga-disable-" + a]) return !0;
            try {
                var c = rt.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = Mg("AMP_TOKEN", String(st.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return st.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var ut = {};

    function xt(a) {
        delete a.eventModel[N.Mb];
        zt(a.eventModel)
    }
    var zt = function(a) {
        Aa(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[N.Ja] || {};
        Aa(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var Ct = function(a, b, c) {
            lo(b, c, a)
        },
        Dt = function(a, b, c) {
            lo(b, c, a, !0)
        },
        It = function(a, b) {};

    function Et(a, b) {}
    var Z = {
        g: {}
    };





    Z.g.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.h = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0
            })(function(a) {
                var b = String(ie(a.vtp_gtmEventId, "event"));
                a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
                return b
            })
        }();
    Z.g.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.h = "f";
                Z.__f.isVendorTemplate = !0;
                Z.__f.priorityOverride = 0
            })(function(a) {
                var b = $p("gtm.referrer", 1) || B.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? jg(lg(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Zp(String(b)) : String(b)
            })
        }();
    Z.g.cl = ["google"],
        function() {
            function a(b) {
                var c = b.target;
                if (c) {
                    var d = wp(c, "gtm.click");
                    aq(d)
                }
            }(function(b) {
                Z.__cl = b;
                Z.__cl.h = "cl";
                Z.__cl.isVendorTemplate = !0;
                Z.__cl.priorityOverride = 0
            })(function(b) {
                if (!fq("cl")) {
                    var c = X("document");
                    Fb(c, "click", a, !0);
                    gq("cl")
                }
                G(b.vtp_gtmOnSuccess)
            })
        }();
    Z.g.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.h = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : $p("gtm.url", 1)) || Xp();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return Zp(String(c));
                var e = lg(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        l = b[a("vtp_queryKey").toString()] || "",
                        k = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? va(l) ?
                    n = l : n = String(l).replace(/\s+/g, "").split(",") : n = [String(l)];
                    for (var p = 0; p < n.length; p++) {
                        var r = jg(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != r && (!k || "" !== r)) {
                            f = r;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = jg(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0, void 0);
                return f
            })
        }();
    Z.g.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.h = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = $p(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                iq(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();



    Z.g.gclidw = ["google"],
        function() {
            var a = ["aw", "dc", "gf", "ha", "gb"];
            (function(b) {
                Z.__gclidw = b;
                Z.__gclidw.h = "gclidw";
                Z.__gclidw.isVendorTemplate = !0;
                Z.__gclidw.priorityOverride = 100
            })(function(b) {
                G(b.vtp_gtmOnSuccess);
                var c, d, e, f;
                b.vtp_enableCookieOverrides && (e = b.vtp_cookiePrefix, c = b.vtp_path, d = b.vtp_domain, b.vtp_enableCookieFlagsFeature && (f = b.vtp_cookieFlags));
                var g = {
                    prefix: e,
                    path: c,
                    domain: d,
                    flags: f
                };
                b.vtp_enableCrossDomainFeature && (b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming || (b.vtp_enableCrossDomain ||
                    di()) && xi(a, g));
                ui(g);
                Ai(["aw", "dc"], g);
                Pi(g);
                var l = e;
                if (b.vtp_enableCrossDomainFeature && b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
                    var k = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
                    zi(a, k, b.vtp_urlPosition, !!b.vtp_formDecoration, l)
                }
                var n = $p(N.T);
                Kl({
                    se: !1,
                    Ea: void 0 != n && !1 !== n,
                    rb: g,
                    rd: !0
                });
                b.vtp_enableUrlPassthrough && Ci(["aw", "dc", "gb"])
            })
        }();
    Z.g.aev = ["google"],
        function() {
            function a(t, q, u) {
                var x = t || ie(q, "gtm");
                if (x) return x[u]
            }

            function b(t, q, u, x, A) {
                A || (A = "element");
                var w = q + "." + u,
                    y;
                if (p.hasOwnProperty(w)) y = p[w];
                else {
                    var z = a(t, q, A);
                    if (z && (y = x(z), p[w] = y, r.push(w), 35 < r.length)) {
                        var C = r.shift();
                        delete p[C]
                    }
                }
                return y
            }

            function c(t, q, u, x) {
                var A = a(t, q, v[u]);
                return void 0 !== A ? A : x
            }

            function d(t, q) {
                if (!t) return !1;
                var u = e(Xp());
                va(q) || (q = String(q || "").replace(/\s+/g, "").split(","));
                for (var x = [u], A = 0; A < q.length; A++) {
                    var w = q[A];
                    if (w.hasOwnProperty("is_regex"))
                        if (w.is_regex) try {
                            w =
                                new RegExp(w.domain)
                        } catch (z) {
                            continue
                        } else w = w.domain;
                    if (w instanceof RegExp) {
                        if (w.test(t)) return !1
                    } else {
                        var y = w;
                        if (0 != y.length) {
                            if (0 <= e(t).indexOf(y)) return !1;
                            x.push(e(y))
                        }
                    }
                }
                return !Oq(t, x)
            }

            function e(t) {
                n.test(t) || (t = "http://" + t);
                return jg(lg(t), "HOST", !0)
            }

            function f(t, q, u, x) {
                switch (t) {
                    case "SUBMIT_TEXT":
                        return b(q, u, "FORM." + t, g, "formSubmitElement") || x;
                    case "LENGTH":
                        var A = b(q, u, "FORM." + t, l);
                        return void 0 === A ? x : A;
                    case "INTERACTED_FIELD_ID":
                        return k(q, u, "id", x);
                    case "INTERACTED_FIELD_NAME":
                        return k(q,
                            u, "name", x);
                    case "INTERACTED_FIELD_TYPE":
                        return k(q, u, "type", x);
                    case "INTERACTED_FIELD_POSITION":
                        var w = a(q, u, "interactedFormFieldPosition");
                        return void 0 === w ? x : w;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var y = a(q, u, "interactSequenceNumber");
                        return void 0 === y ? x : y;
                    default:
                        return x
                }
            }

            function g(t) {
                switch (t.tagName.toLowerCase()) {
                    case "input":
                        return Hb(t, "value");
                    case "button":
                        return Ib(t);
                    default:
                        return null
                }
            }

            function l(t) {
                if ("form" === t.tagName.toLowerCase() && t.elements) {
                    for (var q = 0, u = 0; u < t.elements.length; u++) Dp(t.elements[u]) &&
                        q++;
                    return q
                }
            }

            function k(t, q, u, x) {
                var A = a(t, q, "interactedFormField");
                return A && Hb(A, u) || x
            }
            var n = /^https?:\/\//i,
                p = {},
                r = [],
                v = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(t) {
                Z.__aev = t;
                Z.__aev.h = "aev";
                Z.__aev.isVendorTemplate = !0;
                Z.__aev.priorityOverride = 0
            })(function(t) {
                var q = t.vtp_gtmEventId,
                    u = t.vtp_defaultValue,
                    x = t.vtp_varType,
                    A;
                t.vtp_gtmCachedValues && (A = t.vtp_gtmCachedValues.gtm);
                switch (x) {
                    case "TAG_NAME":
                        var w = a(A, q, "element");
                        return w && w.tagName || u;
                    case "TEXT":
                        return b(A, q, x, Ib) || u;
                    case "URL":
                        var y;
                        a: {
                            var z = String(a(A, q, "elementUrl") || u || ""),
                                C = lg(z),
                                E = String(t.vtp_component || "URL");
                            switch (E) {
                                case "URL":
                                    y = z;
                                    break a;
                                case "IS_OUTBOUND":
                                    y = d(z, t.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    y = jg(C, E, t.vtp_stripWww, t.vtp_defaultPages, t.vtp_queryKey)
                            }
                        }
                        return y;
                    case "ATTRIBUTE":
                        var D;
                        if (void 0 === t.vtp_attribute) D = c(A, q, x, u);
                        else {
                            var F = t.vtp_attribute,
                                P = a(A, q, "element");
                            D = P && Hb(P, F) || u || ""
                        }
                        return D;
                    case "MD":
                        var J = t.vtp_mdValue,
                            I = b(A, q, "MD", Pp);
                        return J && I ? Sp(I, J) || u : I || u;
                    case "FORM":
                        return f(String(t.vtp_component || "SUBMIT_TEXT"), A, q, u);
                    default:
                        var M = c(A, q, x, u);
                        iq(M, "aev", t.vtp_gtmEventId);
                        return M
                }
            })
        }();


    Z.g.awct = ["google"],
        function() {
            var a = !1;
            var b = !1;
            var c = !1,
                d = [],
                e = function(k) {
                    var n = X("google_trackConversion"),
                        p = k.gtm_onFailure;
                    "function" == typeof n ? n(k) || p() : p()
                },
                f = function() {
                    for (; 0 < d.length;) e(d.shift())
                },
                g = function() {
                    return function() {
                        f();
                        c = !1
                    }
                },
                l = function() {
                    return function() {
                        f();
                        d = {
                            push: e
                        };
                    }
                };
            (function(k) {
                Z.__awct = k;
                Z.__awct.h = "awct";
                Z.__awct.isVendorTemplate = !0;
                Z.__awct.priorityOverride = 0
            })(function(k) {
                function n(W) {
                    I.google_gtm_experiments = I.google_gtm_experiments || {};
                    I.google_gtm_experiments[W] = !0
                }

                function p(W, oa, Ia) {
                    return "DATA_LAYER" === W ? $p(Ia) : k[oa]
                }

                function r() {
                    S("gdpr_consent", Cl()), S("gdpr", El());
                }

                function v() {
                    if (ug(k.vtp_conversionId)) {
                        var W = Pa(),
                            oa = Ag();
                        if (0 !== oa.elements.length) {
                            for (var Ia = [], Ja = [], Xa = 0; Xa < oa.elements.length; ++Xa) {
                                var Ea = oa.elements[Xa];
                                Ia.push(Ea.querySelector);
                                Ja.push(Bg(Ea))
                            }
                            var Sc = Pa();
                            S("ec_sel", Ia.join(","));
                            S("ec_meta", Ja.join(","));
                            S("ec_lat", String(Sc - W));
                            S("ec_s",
                                oa.status)
                        }
                    }
                }

                function t() {
                    if (k.vtp_enableEnhancedConversion) {
                        var W;
                        void 0 === k.vtp_dataSource ? W = k.vtp_cssProvidedEnhancedConversionValue || k.vtp_enhancedConversionObject : "DATA_OBJECT" === k.vtp_dataSource ? W = k.vtp_enhancedConversionObject : "INDIVIDUAL_FIELDS" === k.vtp_dataSource && (W = k.vtp_cssProvidedEnhancedConversionValue);
                        if (W) return {
                            enhanced_conversions_mode: "manual",
                            enhanced_conversions_manual_var: W
                        }
                    }
                }

                function q(W) {
                    var oa = [];
                    if (W) {
                        v();
                        if (u) {
                            var Ia = {};
                            k.vtp_conversionCookiePrefix && (Ia.prefix = k.vtp_conversionCookiePrefix);
                            nh(Ia);
                            S("auid", ih[kh(Ia.prefix)])
                        }
                    }
                    if ((k.vtp_enableEnhancedConversions || k.vtp_enableEnhancedConversion) && W && (!b || !Qi())) {
                        var Xa =
                            Ti(t());
                        Xa && oa.push(Xa.then(function(Ea) {
                            S("em", Ea.xc);
                            S("ec_mode", Ea.ve)
                        }))
                    }
                    if (oa.length) try {
                        Promise.all(oa).then(function() {
                            d.push(I)
                        });
                        return
                    } catch (Ea) {}
                    d.push(I)
                }
                var u = !k.hasOwnProperty("vtp_enableConversionLinker") || !!k.vtp_enableConversionLinker,
                    x = !!k.vtp_enableEnhancedConversions || !!k.vtp_enableEnhancedConversion,
                    A = Pq(k.vtp_customVariables, "name", "value") || {};
                if (a) {} else {
                    mj();
                    var I = {
                            google_basket_transaction_type: "purchase",
                            google_conversion_domain: "",
                            google_conversion_id: k.vtp_conversionId,
                            google_conversion_label: k.vtp_conversionLabel,
                            google_conversion_value: k.vtp_conversionValue || 0,
                            google_remarketing_only: !1,
                            onload_callback: k.vtp_gtmOnSuccess,
                            gtm_onFailure: k.vtp_gtmOnFailure,
                            google_gtm: Zk()
                        },
                        M = Zi();
                    M && n("apcm");
                    if (!M) {
                        n("capi");
                        n("capiorig");
                    }
                    k.vtp_rdp && (I.google_restricted_data_processing = !0);
                    k.vtp_enableCustomParams && (I.google_custom_params = A);
                    var L = void 0 != $p(N.T) && !1 !== $p(N.T);
                    I.google_gtm_url_processor = function(W) {
                        L && (W = Vi(W));
                        return W = Ui(W)
                    };
                    var K = function(W) {
                            return function(oa, Ia, Ja) {
                                var Xa = p(W, Ia, Ja);
                                Xa && (I[oa] = Xa)
                            }
                        },
                        T = K("JSON");
                    T("google_conversion_currency", "vtp_currencyCode");
                    T("google_conversion_order_id", "vtp_orderId");
                    k.vtp_enableProductReporting && (T = K(k.vtp_productReportingDataSource), T("google_conversion_merchant_id", "vtp_awMerchantId",
                        "aw_merchant_id"), T("google_basket_feed_country", "vtp_awFeedCountry", "aw_feed_country"), T("google_basket_feed_language", "vtp_awFeedLanguage", "aw_feed_language"), T("google_basket_discount", "vtp_discount", "discount"), T("google_conversion_items", "vtp_items", "items"), I.google_conversion_items && I.google_conversion_items.map && (I.google_conversion_items = I.google_conversion_items.map(function(W) {
                        return {
                            value: W.price,
                            quantity: W.quantity,
                            item_id: W.id
                        }
                    })));
                    var V = function(W, oa) {
                            (I.google_additional_params = I.google_additional_params || {})[W] = oa
                        },
                        S = function(W, oa) {
                            void 0 !== oa && ((I.google_additional_conversion_params = I.google_additional_conversion_params || {})[W] = oa)
                        },
                        qa = function(W) {
                            return function(oa, Ia, Ja, Xa) {
                                var Ea = p(W, Ia, Ja);
                                Xa(Ea) && S(oa, Ea)
                            }
                        };
                    var ra = $p("developer_id"),
                        na = Za(Vb(ra) ? ra : {});
                    na && S("did", na);
                    (function() {
                        if (!k.vtp_enableShippingData) return;
                        S("delopc", k.vtp_deliveryPostalCode);
                        S("oedeld", k.vtp_estimatedDeliveryDate);
                        S("delc", k.vtp_deliveryCountry);
                        S("shf", k.vtp_shippingFee);
                        if (k.vtp_enableProductReporting) {
                            var W = p(k.vtp_productReportingDataSource, "vtp_items", "items");
                            S("iedeld", Yi(W))
                        }
                    })();
                    k.vtp_transportUrl && (I.google_transport_url = k.vtp_transportUrl);
                    var Ba = Sk(k.vtp_transportUrl, "/pagead/conversion_async.js");
                    Ba || (Ba = Xi() ? "https://www.google.com/pagead/conversion_async.js" : "//www.googleadservices.com/pagead/conversion_async.js");
                    k.vtp_enableNewCustomerReporting && (T = qa(k.vtp_newCustomerReportingDataSource), T("vdnc", "vtp_awNewCustomer", "new_customer", function(W) {
                        return void 0 != W && "" !== W
                    }), T("vdltv", "vtp_awCustomerLTV", "customer_lifetime_value", function(W) {
                        return void 0 != W && "" !== W
                    }));
                    u ? (k.vtp_conversionCookiePrefix && (I.google_gcl_cookie_prefix = k.vtp_conversionCookiePrefix), I.google_read_gcl_cookie_opt_out = !1) : I.google_read_gcl_cookie_opt_out = !0;
                    "1" === Xh(!1)._up && S("gtm_up", "1");
                    r();
                    (function() {})();
                    (function() {
                        var W = !1;
                        !Ke() || W ? q(!0) : gf(function() {
                            r();
                            var oa = cf(N.C),
                                Ia = void 0 != $p(N.T) && !1 !== $p(N.T),
                                Ja = !1;
                            Ja = !0;
                            k.vtp_transportUrl || oa || !Ia && !Ja || (I.google_transport_url = "https://pagead2.googlesyndication.com/");
                            S("gcs", df());
                            Le() && S("gcd", ef());
                            q(oa);
                            oa || ff(function() {
                                I = H(I);
                                r();
                                !k.vtp_transportUrl && I.google_transport_url && delete I.google_transport_url;
                                S("gcs", df());
                                Le() && S("gcd", ef());
                                S("gcu",
                                    "1");
                                q(!0)
                            }, N.C)
                        }, [N.C])
                    })();
                    c || (c = !0, U(Ba, l(), g(Ba)))
                }
            })
        }();





    Z.g.html = ["customScripts"],
        function() {
            function a(d, e, f, g) {
                return function() {
                    try {
                        if (0 < e.length) {
                            var l = e.shift(),
                                k = a(d, e, f, g);
                            if ("SCRIPT" == String(l.nodeName).toUpperCase() && "text/gtmscript" == l.type) {
                                var n = B.createElement("script");
                                n.async = !1;
                                n.type = "text/javascript";
                                n.id = l.id;
                                n.text = l.text || l.textContent || l.innerHTML || "";
                                l.charset && (n.charset = l.charset);
                                var p = l.getAttribute("data-gtmsrc");
                                p && (n.src = p, xb(n, k));
                                d.insertBefore(n, null);
                                p || k()
                            } else if (l.innerHTML && 0 <= l.innerHTML.toLowerCase().indexOf("<script")) {
                                for (var r = []; l.firstChild;) r.push(l.removeChild(l.firstChild));
                                d.insertBefore(l, null);
                                a(l, r, k, g)()
                            } else d.insertBefore(l, null), k()
                        } else f()
                    } catch (v) {
                        G(g)
                    }
                }
            }
            var c = function(d) {
                if (B.body) {
                    var e =
                        d.vtp_gtmOnFailure,
                        f = jq(d.vtp_html, d.vtp_gtmOnSuccess, e),
                        g = f.Bi,
                        l = f.onSuccess;
                    if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? b(g, l, e) : a(B.body, Jb(g), l, e)()
                } else Vp(function() {
                        c(d)
                    },
                    200)
            };
            Z.__html = c;
            Z.__html.h = "html";
            Z.__html.isVendorTemplate = !0;
            Z.__html.priorityOverride = 0
        }();








    var Jt = {};
    Jt.macro = function(a) {
        if (tp.ke.hasOwnProperty(a)) return tp.ke[a]
    }, Jt.onHtmlSuccess = tp.bg(!0), Jt.onHtmlFailure = tp.bg(!1);
    Jt.dataLayer = de;
    Jt.callback = function(a) {
        Pd.hasOwnProperty(a) && sa(Pd[a]) && Pd[a]();
        delete Pd[a]
    };
    Jt.bootstrap = 0;
    Jt._spx = !1;

    function Kt() {
        R[O.J] = Jt;
        Sa(Qd, Z.g);
        Gc = Gc || tp;
        Hc = Pc
    }

    function Lt() {
        var a = !1;
        a && nj("INIT");
        ye().m(ve.m);
        R = m.google_tag_manager = m.google_tag_manager || {};
        Bl();
        fi.enable_gbraid_cookie_write = !0;
        var b = !!R[O.J];
        if (b) {
            var c = R.zones;
            c && c.unregisterChild(O.J);
        } else {
            for (var g = data.resource || {}, l = g.macros || [], k = 0; k < l.length; k++) vc.push(l[k]);
            for (var n = g.tags || [], p = 0; p < n.length; p++) Cc.push(n[p]);
            for (var r = g.predicates || [], v = 0; v < r.length; v++) Bc.push(r[v]);
            for (var t = g.rules || [], q = 0; q < t.length; q++) {
                for (var u = t[q], x = {}, A = 0; A < u.length; A++) x[u[A][0]] = Array.prototype.slice.call(u[A], 1);
                Ac.push(x)
            }
            Ec = Z;
            Fc =
                Kq;
            Kt();
            qp();
            $i = !1;
            aj = 0;
            if ("interactive" == B.readyState && !B.createEventObject || "complete" == B.readyState) cj();
            else {
                Fb(B, "DOMContentLoaded", cj);
                Fb(B, "readystatechange", cj);
                if (B.createEventObject && B.documentElement.doScroll) {
                    var w = !0;
                    try {
                        w = !m.frameElement
                    } catch (D) {}
                    w && dj()
                }
                Fb(m, "load", cj)
            }
            Mo = !1;
            "complete" === B.readyState ? Oo() : Fb(m, "load", Oo);
            mk && m.setInterval(gk, 864E5);
            Nd = (new Date).getTime();
            if (a) {
                var E = oj("INIT");
            }
        }
    }
    (function(a) {
        if (!m["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (B.referrer) {
                var c = lg(B.referrer);
                b = "cct.google" === ig(c, "host")
            }
            if (!b) {
                var d = Qg("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (m["__TAGGY_INSTALLED"] = !0, zb("https://cct.google/taggy/agent.js"))
        }
        var f = function(r) {
                var v = "GTM",
                    t = "GTM";
                var q = m["google.tagmanager.debugui2.queue"];
                q || (q = [], m["google.tagmanager.debugui2.queue"] = q, zb("https://" + O.zd + "/debug/bootstrap?id=" + O.J + "&src=" + t + "&cond=" + r + "&gtm=" + Zk()));
                var u = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: ub,
                        containerProduct: v,
                        debug: !1,
                        id: O.J
                    }
                };
                u.data.resume = function() {
                    a()
                };
                O.Vg && (u.data.initialPublish = !0);
                q.push(u)
            },
            g = void 0,
            l = jg(m.location, "query", !1, void 0, "gtm_debug");
        rp(l) && (g = 2);
        if (!g && B.referrer) {
            var k = lg(B.referrer);
            "tagassistant.google.com" === ig(k, "host") && (g = 3)
        }
        if (!g) {
            var n = Qg("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4)
        }
        if (!g) {
            var p = B.documentElement.getAttribute("data-tag-assistant-present");
            rp(p) && (g = 5)
        }
        g && ub ? f(g) : a()
    })(Lt);

})()