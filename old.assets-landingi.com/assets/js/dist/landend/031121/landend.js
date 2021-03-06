(function b(c, d, e) {
    function a(h, i) {
        if (!d[h]) {
            if (!c[h]) {
                var j = "function" == typeof require && require;
                if (!i && j) return j(h, !0);
                if (g) return g(h, !0);
                var k = new Error("Cannot find module '" + h + "'");
                throw k.code = "MODULE_NOT_FOUND", k
            }
            var f = d[h] = {
                exports: {}
            };
            c[h][0].call(f.exports, function(b) {
                var d = c[h][1][b];
                return a(d ? d : b)
            }, f, f.exports, b, c, d, e)
        }
        return d[h].exports
    }
    for (var g = "function" == typeof require && require, f = 0; f < e.length; f++) a(e[f]);
    return a
})({
    1: [function(a) {
        'use strict';
        var b = a("./landend/counter/v2/counters"),
            c = a("./landend/newAwesomeCounter/counter");
        (function() {
            document.querySelectorAll(".widget-counter").forEach(function(a) {
                return (0, b.initialize)(a)
            }), document.querySelectorAll(".widget-counterv2").forEach(function(a) {
                return (0, c.initialize)(a)
            })
        })()
    }, {
        "./landend/counter/v2/counters": 2,
        "./landend/newAwesomeCounter/counter": 3
    }],
    2: [function(a, b, c) {
        'use strict';

        function d(a, b, c) {
            var d = +a.getAttribute("data-repeat"),
                f = a.getAttribute("data-version"),
                g = new Date,
                h = b - g,
                i = void 0,
                j = void 0,
                k = void 0,
                l = void 0,
                m = 1e3,
                n = 60 * m,
                o = 60 * n,
                p = 24 * o;
            if (0 > h)
                if (!f || 2 > parseInt(f, 10) || !d || 0 >= d) c(), i = 0, j = 0, k = 0, l = 0;
                else
                    for (; 0 > h;) b.setDate(b.getDate() + d), h = b - g;
            0 <= h && (i = Math.floor(h / p), j = Math.floor(h % p / o), k = Math.floor(h % o / n), l = Math.floor(h % n / m)), a.querySelectorAll(".widget-text[data-format]").forEach(function(a) {
                a.textContent = e(a, i, j, k, l)
            }), 0 === a.querySelectorAll(".widget-text").length && (a.textContent = e(a, i, j, k, l))
        }

        function e(a, b, c, d, e) {
            return a.getAttribute("data-format").replace("%dddd", ("000" + b).slice(-4)).replace("%ddd", ("00" + b).slice(-3)).replace("%dd", ("0" + b).slice(-2)).replace("%d", b).replace("%hh", ("0" + c).slice(-2)).replace("%mm", ("0" + d).slice(-2)).replace("%ss", ("0" + e).slice(-2)).replace("%h", c).replace("%m", d).replace("%s", e)
        }

        function f(a) {
            var b = a.getAttribute("data-date"),
                c = a.getAttribute("data-version"),
                d = a.getAttribute("id"),
                e = new Date(b);
            return "-1" === a.getAttribute("data-repeat") && (g() && (e = i(a)), !e && (e = h(a)), !e && (e = new Date, k(e, d)), e.setMinutes(e.getMinutes() + parseInt(b, 10))), c || e.setTime(e.getTime() + 1e3 * (60 * e.getTimezoneOffset())), e
        }

        function g() {
            var a = void 0,
                b = "__storage_test__";
            if (!window || !window.localStorage) return !1;
            try {
                return a = window.localStorage, a.setItem(b, b), a.removeItem(b), !0
            } catch (b) {
                return b instanceof DOMException && ([22, 1014].includes(b.code) || ["QuotaExceededError", "NS_ERROR_DOM_QUOTA_REACHED"].includes(b.name)) && a && 0 !== a.length
            }
        }

        function h(a) {
            var b = a.getAttribute("id"),
                d = document.cookie ? document.cookie.split(";") : [],
                e = {};
            for (var f in d)
                if (d.hasOwnProperty(f) && "string" == typeof f) {
                    var c = d[f].split("=");
                    e[c[0].replace(/\s/g, "")] = c[1]
                }
            return e["count-" + b] ? new Date(e["count-" + b]) : null
        }

        function i(a) {
            var b = a.getAttribute("id"),
                c = window.localStorage.getItem("count-" + b);
            if (c) try {
                var d = JSON.parse(c);
                if (!j(d)) return new Date(d.value);
                window.localStorage.removeItem("count-" + b)
            } catch (a) {
                return null
            }
            return null
        }

        function j(a) {
            if (!a.value || !a.expires) return !0;
            var b = new Date,
                c = new Date(a.expires);
            return b.getTime() > c.getTime()
        }

        function k(a, b) {
            var c = new Date;
            if (c.setMonth(c.getMonth() + 1), g()) {
                var d = {
                    value: a.getTime(),
                    expires: new Date(c).getTime()
                };
                return void window.localStorage.setItem("count-" + b, JSON.stringify(d))
            }
            document.cookie = "count-" + b + "=" + a + ";expires=" + new Date(c) + ";path=" + window.location.pathname
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        c.initialize = function(a) {
            var b = f(a),
                c = void 0;
            c = setInterval(function() {
                return d(a, b, function() {
                    return clearInterval(c)
                })
            }, 1e3)
        }
    }, {}],
    3: [function(a, b, c) {
        'use strict';

        function d(a, b, c, d) {
            var f = new Date,
                g = b - f,
                h = void 0,
                i = void 0,
                j = void 0,
                k = void 0,
                l = 1e3,
                n = 60 * l,
                o = 60 * n,
                p = 24 * o;
            0 > g && (c(), h = 0, i = 0, j = 0, k = 0, m(d)), 0 <= g && (h = Math.floor(g / p), i = Math.floor(g % p / o), j = Math.floor(g % o / n), k = Math.floor(g % n / l)), a.querySelectorAll(".widget-text[data-format]").forEach(function(a) {
                a.textContent = e(a, h, i, j, k)
            })
        }

        function e(a, b, c, d, e) {
            return 99 < b && "%dd" === a.getAttribute("data-format") && a.setAttribute("data-format", "%ddd"), a.getAttribute("data-format").replace("%ddd", ("00" + b).slice(-3)).replace("%dd", ("0" + b).slice(-2)).replace("%d", b).replace("%hh", ("0" + c).slice(-2)).replace("%mm", ("0" + d).slice(-2)).replace("%ss", ("0" + e).slice(-2)).replace("%h", c).replace("%m", d).replace("%s", e)
        }

        function f(a) {
            var b = a.getAttribute("data-strategy"),
                c = new Date;
            if ("evergreen_counter" === b) {
                var d = l(a, "data-intervals"),
                    e = d.days,
                    f = e === void 0 ? 0 : e,
                    g = d.hours,
                    j = g === void 0 ? 0 : g,
                    m = d.minutes,
                    n = m === void 0 ? 0 : m,
                    o = d.seconds,
                    p = o === void 0 ? 0 : o;
                c.setTime(c.getTime() + 1e3 * (60 * (60 * (24 * f)))), c.setTime(c.getTime() + 1e3 * (60 * (60 * j))), c.setTime(c.getTime() + 1e3 * (60 * n)), c.setTime(c.getTime() + 1e3 * p)
            } else {
                var q = a.getAttribute("data-date");
                c = new Date(q)
            }
            if ("evergreen_counter" === b) {
                var r = a.getAttribute("id"),
                    s = i(a),
                    t = h(a);
                window && window.location && !window.location.href.includes("editor.landingi") && (s ? c = s : t ? c = t : k(c, r))
            }
            return c
        }

        function g() {
            var a = void 0,
                b = "__storage_test__";
            if (!window || !window.localStorage) return !1;
            try {
                return a = window.localStorage, a.setItem(b, b), a.removeItem(b), !0
            } catch (b) {
                return b instanceof DOMException && ([22, 1014].includes(b.code) || ["QuotaExceededError", "NS_ERROR_DOM_QUOTA_REACHED"].includes(b.name)) && a && 0 !== a.length
            }
        }

        function h(a) {
            var b = a.getAttribute("id"),
                d = document.cookie ? document.cookie.split(";") : [],
                e = {};
            for (var f in d)
                if (d.hasOwnProperty(f) && "string" == typeof f) {
                    var c = d[f].split("=");
                    e[c[0].replace(/\s/g, "")] = c[1]
                }
            return e["count-" + b] ? new Date(e["count-" + b]) : null
        }

        function i(a) {
            if (g()) {
                var b = a.getAttribute("id"),
                    c = window.localStorage.getItem("count-" + b);
                if (c) try {
                    var d = JSON.parse(c);
                    if (!j(d)) return new Date(d.value);
                    window.localStorage.removeItem("count-" + b)
                } catch (a) {
                    return null
                }
            }
            return null
        }

        function j(a) {
            if (!a.value || !a.expires) return !0;
            var b = new Date,
                c = new Date(a.expires);
            return b.getTime() > c.getTime()
        }

        function k(a, b) {
            var c = new Date;
            if (c.setMonth(c.getMonth() + 1), g()) {
                var d = {
                    value: a.getTime(),
                    expires: new Date(c).getTime()
                };
                return void window.localStorage.setItem("count-" + b, JSON.stringify(d))
            }
            document.cookie = "count-" + b + "=" + a + ";expires=" + new Date(c) + ";path=" + window.location.pathname
        }

        function l(a, b) {
            var c = a.getAttribute(b);
            return c ? JSON.parse(c) : {}
        }

        function m(a) {
            if (window && window.location && !(window.location.href.includes("editor.landingi") || window.location.href.includes("preview-frame"))) switch (a.type) {
                case "redirect":
                    {
                        window.location.replace(a.url);
                        break
                    }
                case "do_nothing":
                default:
            }
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        c.initialize = function(a) {
            var b = f(a),
                c = l(a, "data-expire-action"),
                e = void 0;
            e = setInterval(function() {
                return d(a, b, function() {
                    return clearInterval(e)
                }, c)
            }, 1e3)
        }
    }, {}]
}, {}, [1]);