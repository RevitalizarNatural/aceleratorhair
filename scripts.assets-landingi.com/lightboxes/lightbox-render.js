let localStorageAvailable;

function initializeNewCounter(a) {
    const b = buildEndDate(a);
    let c = setInterval(() => showRemaining(a, b, () => clearInterval(c)), 1e3)
}

function showRemaining(a, b, c) {
    const d = new Date;
    let e, f, g, h, i = b - d;
    const j = 60000,
        k = 60 * j,
        l = 24 * k;
    0 > i && (c(), e = 0, f = 0, g = 0, h = 0), 0 <= i && (e = Math.floor(i / l), f = Math.floor(i % l / k), g = Math.floor(i % k / j), h = Math.floor(i % j / 1000)), a.querySelectorAll(".widget-text[data-format]").forEach(function(a) {
        a.textContent = calculateWidgetValue(a, e, f, g, h)
    })
}

function calculateWidgetValue(a, b, c, d, e) {
    return 99 < b && "%dd" === a.getAttribute("data-format") && a.setAttribute("data-format", "%ddd"), a.getAttribute("data-format").replace("%ddd", ("00" + b).slice(-3)).replace("%dd", ("0" + b).slice(-2)).replace("%d", b).replace("%hh", ("0" + c).slice(-2)).replace("%mm", ("0" + d).slice(-2)).replace("%ss", ("0" + e).slice(-2)).replace("%h", c).replace("%m", d).replace("%s", e)
}

function buildEndDate(a) {
    const b = a.getAttribute("data-strategy");
    let c = new Date;
    if ("evergreen_counter" === b) {
        const {
            days: b = 0,
            hours: d = 0,
            minutes: e = 0,
            seconds: f = 0
        } = getParsedAttribute(a, "data-intervals");
        c.setTime(c.getTime() + 1e3 * (60 * (60 * (24 * b)))), c.setTime(c.getTime() + 1e3 * (60 * (60 * d))), c.setTime(c.getTime() + 1e3 * (60 * e)), c.setTime(c.getTime() + 1e3 * f)
    } else {
        const b = a.getAttribute("data-date");
        c = new Date(b)
    }
    if ("evergreen_counter" === b) {
        const b = a.getAttribute("id"),
            d = getEndDateFromLocalStorage(a),
            e = getEndDateFromCookies(a);
        window && window.location && !window.location.href.includes("editor.landingi") && (d ? c = d : e ? c = e : saveEndDate(c, b))
    }
    return c
}

function isLocalStorageAvailable() {
    let a, b = "__storage_test__";
    if (void 0 !== localStorageAvailable) return localStorageAvailable;
    if (!window || !window.localStorage) return !1;
    try {
        return a = window.localStorage, a.setItem(b, b), a.removeItem(b), !0
    } catch (b) {
        return b instanceof DOMException && ([22, 1014].includes(b.code) || ["QuotaExceededError", "NS_ERROR_DOM_QUOTA_REACHED"].includes(b.name)) && a && 0 !== a.length
    }
}

function getEndDateFromCookies(a) {
    const b = a.getAttribute("id");
    let d = document.cookie ? document.cookie.split(";") : [],
        e = {};
    for (let b in d)
        if (d.hasOwnProperty(b) && "string" == typeof b) {
            let a = d[b].split("=");
            e[a[0].replace(/\s/g, "")] = a[1]
        }
    return e[`count-${b}`] ? new Date(e[`count-${b}`]) : null
}

function getEndDateFromLocalStorage(a) {
    if (isLocalStorageAvailable()) {
        const b = a.getAttribute("id");
        let c = window.localStorage.getItem(`count-${b}`);
        if (c) try {
            const a = JSON.parse(c);
            if (!localStorageIsExpired(a)) return new Date(a.value);
            window.localStorage.removeItem(`count-${b}`)
        } catch (a) {
            return null
        }
    }
    return null
}

function localStorageIsExpired(a) {
    if (!a.value || !a.expires) return !0;
    const b = new Date,
        c = new Date(a.expires);
    return b.getTime() > c.getTime()
}

function saveEndDate(a, b) {
    const c = new Date;
    if (c.setMonth(c.getMonth() + 1), isLocalStorageAvailable()) {
        const d = {
            value: a.getTime(),
            expires: new Date(c).getTime()
        };
        return void window.localStorage.setItem(`count-${b}`, JSON.stringify(d))
    }
    document.cookie = `count-${b}=${a};expires=${new Date(c)};path=${window.location.pathname}`
}

function getParsedAttribute(a, b) {
    const c = a.getAttribute(b);
    return c ? JSON.parse(c) : {}
}
const lightboxDefaultCss = `
        .animated-lightbox {
          transition: visibility 0.5s, opacity 0.5s;
          display: block !important;
          visibility: hidden;
          opacity: 0;
        }
    
        .show-lightbox {
          opacity: 1;
          visibility: visible;
        }
    `;
"undefined" == typeof youtubeVideos && (window.youtubeVideos = []), "undefined" == typeof youtubePlayers && (window.youtubePlayers = []);
const Common = {
        preventDoubleSubmission: function(a) {
            a.onsubmit = function(b) {
                "1" === a.dataset.submitted ? (b.preventDefault(), b.stopImmediatePropagation()) : a.dataset.submitted = "1"
            }
        }
    },
    LightboxRender = {
        cssManager: {
            addCssStyle: function(a) {
                const b = document.createElement("style");
                b.appendChild(document.createTextNode(a));
                const c = document.getElementsByTagName("head")[0],
                    d = document.getElementsByTagName("link")[0];
                c.insertBefore(b, d)
            }
        },
        animationManager: {
            enableAnimationCapabilities: function(a) {
                a.classList.add("animated-lightbox")
            },
            show: function(a) {
                a.classList.add("show-lightbox"), a.querySelectorAll(".show-lightbox .widget-counterv2").forEach(b => initializeNewCounter(b))
            },
            hide: function(a) {
                const b = document.querySelectorAll(".tooltip-lightbox");
                a.classList.remove("show-lightbox"), b.forEach(a => a.parentNode.removeChild(a))
            }
        },
        youtubeManager: {
            loadYoutubeApiScript: function() {
                const a = document.getElementsByTagName("head").item(0),
                    b = a.getElementsByTagName("script");
                if (!(() => {
                        for (let a of b)
                            if (/(youtube.(?:[a-z{2-3}]+)\/iframe_api)/.test(a.getAttribute("src"))) return !0;
                        return !1
                    })()) {
                    const a = document.createElement("script");
                    a.src = "https://www.youtube.com/iframe_api";
                    const c = b[0];
                    c.parentNode.insertBefore(a, c)
                }
            },
            handlePlayVideo: function(a) {
                "undefined" != typeof window.youtubeVideos && window.youtubeVideos.forEach(function(b) {
                    const c = document.getElementById(b.hash),
                        d = c.closest(".landingi-popup");
                    d && d.id === a.id && 1 === b.autoplay && "undefined" != typeof window.youtubePlayers[b.hash] && window.youtubePlayers[b.hash].playVideo()
                })
            },
            handlePauseVideo: function(a) {
                "undefined" != typeof window.youtubeVideos && window.youtubeVideos.forEach(function(b) {
                    const c = document.getElementById(b.hash),
                        d = c.closest(".landingi-popup");
                    d && d.id === a.id && window.youtubePlayers[b.hash] && "function" == typeof window.youtubePlayers[b.hash].pauseVideo && window.youtubePlayers[b.hash].pauseVideo()
                })
            },
            initializeYoutubeVideos: function() {
                window.youtubeVideos.forEach(function(a) {
                    const b = {
                        playerVars: {
                            rel: a.rel,
                            loop: a.loop,
                            showinfo: a.showinfo,
                            controls: a.controls,
                            mute: a.mute
                        },
                        events: {
                            onReady: function(b) {
                                a.autoplay && (document.getElementsByClassName("video-iframe-container").length || !document.getElementsByClassName("landingi-popup").length) && b.target.playVideo()
                            },
                            onStateChange: function(b) {
                                0 === b.target.getPlayerState() && 0 !== a.loop && b.target.playVideo()
                            }
                        }
                    };
                    a.id && (b.videoId = a.id), void 0 === window.youtubePlayers[a.hash] && (window.youtubePlayers[a.hash] = new YT.Player(a.hash, b))
                })
            }
        },
        vimeoManager: {
            initializeVimeoVideos: function() {
                const a = document.getElementsByTagName("head").item(0),
                    b = a.getElementsByTagName("script"),
                    c = "https://player.vimeo.com/api/player.js";
                let d = !1;
                for (let a of b) a.getAttribute("src") === c && (d = !0);
                if (!1 == d) {
                    const a = document.createElement("script"),
                        d = b[0];
                    a.src = c, a.addEventListener("load", function() {
                        window.dispatchEvent(new Event("lightbox-vimeo-ready"))
                    }), d.parentNode.insertBefore(a, d)
                }
            },
            injectVimeo: function(a) {
                let b = a.match(/id="([^"]*?)" class="landingi-popup-body"/)[1],
                    c = document.querySelectorAll("#" + b)[0];
                const d = c.closest(".landingi-popup");
                0 < a.search(/data-vimeo-url/) ? (LightboxRender.vimeoManager.initializeVimeoVideos(), window.addEventListener("lightbox-vimeo-ready", function() {
                    LightboxRender.lightboxManager.hookCustomScripts(b), LightboxRender.vimeoManager.handlePauseVideos(d)
                })) : LightboxRender.lightboxManager.hookCustomScripts(b)
            },
            handlePauseVideos: function(a) {
                for (let b of this.getVimeoPlayers(a)) b.pause()
            },
            handlePlayVideos: function(a) {
                for (let b of this.getVimeoPlayers(a)) "1" === b.autoplay && b.play()
            },
            handleMuteVideos: function(a) {
                for (let b of this.getVimeoPlayers(a)) b.setVolume(0)
            },
            handleUnmuteVideos: function(a) {
                for (let b of this.getVimeoPlayers(a)) b.setVolume(1)
            },
            getVimeoPlayers: function(a) {
                const b = [];
                for (let c of a.querySelectorAll("[data-vimeo-url]")) {
                    let a = new Vimeo.Player(c.getAttribute("id"), {});
                    a.autoplay = c.getAttribute("data-vimeo-autoplay") || "1", b.push(a)
                }
                return b
            }
        },
        datepickerManager: {
            appendStyle: function() {
                const a = document.getElementsByTagName("head").item(0),
                    b = a.getElementsByTagName("link");
                for (let a of b)
                    if (a.getAttribute("href") === "https://old.assets-landingi.com/js/libs/bootstrap-datepicker/dist/css/bootstrap-datepicker.standalone.min.css") return;
                const c = document.createElement("link"),
                    d = b[0];
                c.href = "https://old.assets-landingi.com/js/libs/bootstrap-datepicker/dist/css/bootstrap-datepicker.standalone.min.css", c.type = "text/css", c.rel = "stylesheet", a.insertBefore(c, d)
            },
            appendScript: function(a) {
                const b = document.getElementsByTagName("body").item(0),
                    c = b.getElementsByTagName("script");
                for (let b of c)
                    if (b.getAttribute("src") === "https://old.assets-landingi.com/js/libs/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js") return;
                const d = document.createElement("script"),
                    e = document.createElement("script"),
                    f = c[0 === c.length ? c.length : c.length - 1];
                d.type = "text/javascript", e.type = "text/javascript", d.src = "https://old.assets-landingi.com/js/libs/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js", e.src = "https://old.assets-landingi.com/js/libs/bootstrap-datepicker/dist/locales/bootstrap-datepicker." + a + ".min.js", b.insertBefore(d, f), b.insertBefore(e, f)
            },
            initializeDatepicker: function(a) {
                document.querySelectorAll(".landingi-popup input[subtype=\"date\"]").forEach(function(b) {
                    $(b).datepicker({
                        autoclose: !0,
                        clearBtn: !0,
                        format: {
                            en: "dd-mm-yyyy",
                            pl: "dd.mm.yyyy",
                            ru: "dd.mm.yyyy",
                            es: "dd/mm/yyyy",
                            pt: "dd/mm/yyyy",
                            fr: "dd-mm-yyyy",
                            it: "dd-mm-yyyy"
                        }[a],
                        language: a,
                        todayBtn: "linked",
                        todayHighlight: !0
                    })
                })
            }
        },
        lightboxManager: {
            loadYoutube: function() {
                0 >= window.youtubeVideos.length && 0 >= window.youtubePlayers.length || ("undefined" == typeof YT || "undefined" == typeof YT.Player ? LightboxRender.youtubeManager.loadYoutubeApiScript() : window.onYouTubeIframeAPIReady())
            },
            hookCustomScripts: function(a) {
                let b = document.querySelectorAll("#" + a + " script");
                for (let c of b) {
                    const a = c.parentElement,
                        b = c.getAttribute("src"),
                        d = c.innerHTML;
                    if (null !== b) {
                        a.removeChild(c);
                        let d = document.createElement("script");
                        d.src = b, a.appendChild(d)
                    }
                    if ("" !== d) {
                        a.removeChild(c);
                        let b = document.createElement("script");
                        b.text = d, a.appendChild(b)
                    }
                }
            },
            initializeCounter: function() {
                document.querySelectorAll(".landingi-popup .widget-counter").forEach(function(a) {
                    function b() {
                        var b, c, h, i, j = new Date,
                            k = e - j;
                        if (0 > k)
                            if (!g || 2 > parseInt(g, 10) || !f || 0 >= f) clearInterval(d), b = 0, c = 0, h = 0, i = 0;
                            else
                                for (; 0 > k;) e.setDate(e.getDate() + parseInt(f, 10)), k = e - j;
                        if (0 <= k && (b = Math.floor(k / 86400000), c = Math.floor(k % 86400000 / 3600000), h = Math.floor(k % 3600000 / 60000), i = Math.floor(k % 60000 / 1000)), a.querySelectorAll(".widget-text[data-format]").forEach(function(a) {
                                var d = a.getAttribute("data-format");
                                d = d.replace("%dddd", ("000" + b).slice(-4)), d = d.replace("%ddd", ("00" + b).slice(-3)), d = d.replace("%dd", ("0" + b).slice(-2)), d = d.replace("%d", b), d = d.replace("%hh", ("0" + c).slice(-2)), d = d.replace("%mm", ("0" + h).slice(-2)), d = d.replace("%ss", ("0" + i).slice(-2)), d = d.replace("%h", c), d = d.replace("%m", h), d = d.replace("%s", i), a.innerText = d
                            }), 0 === a.querySelector(".widget-text").length) {
                            var l = a.getAttribute("data-format");
                            l = l.replace("%dddd", ("000" + b).slice(-4)), l = l.replace("%ddd", ("00" + b).slice(-3)), l = l.replace("%dd", ("0" + b).slice(-2)), l = l.replace("%d", b), l = l.replace("%hh", ("0" + c).slice(-2)), l = l.replace("%mm", ("0" + h).slice(-2)), l = l.replace("%ss", ("0" + i).slice(-2)), l = l.replace("%h", c), l = l.replace("%m", h), l = l.replace("%s", i), a.innerText(l)
                        }
                    }
                    var d, e, f = a.getAttribute("data-repeat"),
                        g = a.getAttribute("data-version"),
                        h = a.getAttribute("data-date"),
                        i = a.getAttribute("id");
                    if ("-1" !== f) e = new Date(h);
                    else {
                        var j = document.cookie ? document.cookie.split(";") : [],
                            k = {};
                        for (var l in j)
                            if (j.hasOwnProperty(l) && "string" == typeof l) {
                                var c = j[l].split("=");
                                k[c[0].replace(/\s/g, "")] = c[1]
                            }
                        if (k["count-" + i]) e = new Date(k["count-" + i]);
                        else {
                            e = new Date;
                            var m = new Date;
                            m.setMonth(m.getMonth() + 1), document.cookie = "count-" + i + "=" + e + ";expires=" + new Date(m) + ";path=" + window.location.pathname
                        }
                        e.setMinutes(e.getMinutes() + parseInt(h, 10))
                    }
                    g || e.setTime(e.getTime() + 1e3 * (60 * e.getTimezoneOffset())), d = setInterval(b, 1e3)
                })
            },
            registerEventHandlers: function() {
                const a = document.querySelectorAll("[subtype=\"popup\"]");
                a.forEach(function(a) {
                    const b = a.getAttribute("href").substring(1);
                    let c = document.getElementById(b);
                    c && LightboxRender.animationManager.enableAnimationCapabilities(c), a.addEventListener("click", function(a) {
                        a.preventDefault(), c && LightboxRender.animationManager.show(c);
                        let b = Array.prototype.slice.call(document.querySelectorAll("[class*=\"-iframe-enabled-\"]:not(.iframe-mockup)"));
                        b = b.filter(function(a) {
                            return "none" !== a.style.display && "hidden" !== a.style.visibility && 0 < a.style.opacity
                        }), b.forEach(function(a, b) {
                            new VideoBg(b).resize(), 768 > window.innerWidth && b.setAttribute("src", "")
                        }), LightboxRender.youtubeManager.handlePlayVideo(c), LightboxRender.vimeoManager.handlePlayVideos(c)
                    })
                });
                const b = document.querySelectorAll(".widget-popupcloser");
                b.forEach(function(a) {
                    a.onclick = function(a) {
                        a.preventDefault();
                        const b = this.closest(".landingi-popup");
                        LightboxRender.vimeoManager.handlePauseVideos(b), LightboxRender.youtubeManager.handlePauseVideo(b), LightboxRender.animationManager.hide(b)
                    }
                });
                const c = document.getElementsByClassName("landingi-popup");
                for (let a of c) a.onclick = function(b) {
                    b.target === a.getElementsByClassName("landingi-popup-body")[0] && (LightboxRender.vimeoManager.handlePauseVideos(a), LightboxRender.youtubeManager.handlePauseVideo(a), LightboxRender.animationManager.hide(a))
                };
                document.addEventListener("keydown", function(a) {
                    if ("Escape" === a.key) {
                        const a = document.getElementsByClassName("landingi-popup");
                        for (let b of a) LightboxRender.youtubeManager.handlePauseVideo(b), LightboxRender.animationManager.hide(b)
                    }
                });
                const d = document.querySelectorAll(".landingi-popup .widget-form");
                for (let a of d) Common.preventDoubleSubmission(a)
            },
            handleLightboxes: function() {
                LightboxRender.lightboxManager.registerEventHandlers();
                const a = document.querySelectorAll(".landingi-popup .widget-form");
                for (let b of a) {
                    const a = function(a) {
                            a.preventDefault(), b = document.getElementById(b.id);
                            const d = function(a) {
                                    if (1 === a.indexOf("popuplead//")) {
                                        const b = a.replace("popuplead//", "popuplead/" + landingiInternalDetails.landing_hash + "/");
                                        let c = window.location.href + b;
                                        return -1 !== window.location.href.indexOf("?") && (c = window.location.href.replace(/(.*)\?(.*)/, `$1${b}?$2`)), c
                                    }
                                    return a
                                },
                                e = function(a) {
                                    const c = b.getElementsByClassName("widget-input-button");
                                    for (let b of c) {
                                        const c = b.getElementsByClassName("widget-overlay");
                                        a(b, c)
                                    }
                                };
                            e(function(a, b) {
                                for (let c of b) c.style.color = window.getComputedStyle(a).color, c.innerHTML += "<i class=\"fa fa-spinner fa-spin\"></i>";
                                a.style.color = "transparent"
                            });
                            const f = function(a) {
                                    a.dataset.submitted = "0";
                                    const b = document.getElementsByClassName("form-error-tooltip");
                                    for (let c of b) c.parentNode.removeChild(c);
                                    e(function(a, b) {
                                        for (let c of b) c.removeChild(c.firstChild);
                                        a.style.color = ""
                                    })
                                },
                                g = new FormData(b);
                            g.set("_landing-hash", landingiInternalDetails.landing_hash);
                            const h = new XMLHttpRequest;
                            h.open("POST", function() {
                                let a = "https://api.landingi.com/validate";
                                return 0 < window.location.href.indexOf(".landingi.it") && (a = "https://api.landingi.it/validate"), a
                            }(), !0), h.onreadystatechange = function() {
                                if (this.readyState === XMLHttpRequest.DONE) {
                                    if (200 === this.status) window.submitGAformTracking ? (window.submitGAformTracking(), setTimeout(function() {
                                        b.setAttribute("action", d(b.getAttribute("action"))), b.dataset.submitted = "0", document.removeEventListener("submit", c), b.submit()
                                    }, 300)) : (b.setAttribute("action", d(b.getAttribute("action"))), b.dataset.submitted = "0", document.removeEventListener("submit", c), b.submit());
                                    else if (400 === this.status) {
                                        f(b);
                                        const a = JSON.parse(h.response);
                                        let c = a.html;
                                        validateCallbacks.forEach(function(a) {
                                            let b = a(c);
                                            b && (c = b)
                                        });
                                        const d = document.getElementsByTagName("body").item(0);
                                        d.insertAdjacentHTML("beforeend", c), window.positionValidationTooltips(), window.scrollToFirstTooltip()
                                    } else console.error("LightboxRender: Unexpected response occurred");
                                    LightboxRender.lightboxManager.registerEventHandlers()
                                }
                            }, h.onerror = function() {
                                f(b), LightboxRender.lightboxManager.registerEventHandlers(), console.error("LightboxRender: An error occured while sending form validation XHR")
                            }, h.send(g)
                        },
                        c = function(c) {
                            const d = b.id;
                            c.target.id === d && a(c)
                        };
                    document.addEventListener("submit", c)
                }
            },
            injectLightboxes: function(a) {
                const b = new XMLHttpRequest;
                b.onload = function() {
                    const a = JSON.parse(b.response),
                        c = document.getElementsByTagName("body")[0],
                        d = document.getElementsByTagName("head")[0];
                    if (!c) return;
                    const e = [],
                        f = [];
                    for (let a of document.getElementsByTagName("link")) e.push(a.href);
                    a.forEach(function(a) {
                        c.insertAdjacentHTML("beforeend", a.content), c.insertAdjacentHTML("beforeend", "<link href=\"" + a.style_url + "\" rel=\"stylesheet\" type=\"text/css\">"), a.fonts.forEach(function(a) {
                            e.includes(a) || f.includes(a) || (f.push(a), d.insertAdjacentHTML("beforeend", "<link href=\"" + a + "\" rel=\"stylesheet\" type=\"text/css\">"))
                        }), LightboxRender.vimeoManager.injectVimeo(a.content)
                    });
                    const g = new Event("lightboxes-ready");
                    d.dispatchEvent(g), a.length && (LightboxRender.lightboxManager.initializeCounter(), LightboxRender.lightboxManager.handleLightboxes(), LightboxRender.datepickerManager.initializeDatepicker(landingiInternalDetails.landing_lang), LightboxRender.lightboxManager.loadYoutube())
                }, b.open("GET", this.getRenderUrl(landingiInternalDetails.apikey, landingiInternalDetails.landing_id, a)), b.send()
            },
            getRenderUrl: function(a, b, c) {
                let d = "https://lightboxes.landingi.com/api/v1/render?apikey=" + a + "&landing_id=" + b;
                return 0 < window.location.href.indexOf(".landingi.it") && (d = "https://lightboxes.landingi.it/api/v1/render?apikey=" + a + "&landing_id=" + b), c && (d += "&aaf=" + window.location.pathname), d
            }
        },
        init: function(a = {
            useAaf: !1
        }) {
            LightboxRender.cssManager.addCssStyle(lightboxDefaultCss), window.onYouTubeIframeAPIReady = function() {
                LightboxRender.youtubeManager.initializeYoutubeVideos()
            }, LightboxRender.datepickerManager.appendStyle(), LightboxRender.datepickerManager.appendScript(landingiInternalDetails.landing_lang), LightboxRender.lightboxManager.injectLightboxes(a.useAaf)
        }
    };