! function(t) {
    function i() {
        var i = window.innerWidth;
        t(".form-error-tooltip").each(function() {
            var e = t(this),
                o = e.attr("data-uid"),
                r = t('[id="' + o + '"]:visible'),
                s = r.hasClass("widget-textarea") ? "textarea" : r.hasClass("widget-input-select") ? "select" : r.attr("type"),
                a = r.parents(".widget-container").first(),
                n = a.parents(".widget-form").first(),
                l = n && n.attr("data-orientation") || "vertical",
                d = a.length ? a : r;
            if (d.length) {
                var f = d.offset(),
                    p = r.offset(),
                    c = n.find(".widget-regular-label"),
                    h = c.length ? c.css("display") : "none",
                    g = r.parents(".landingi-popup").first(),
                    u = 0;
                if (d.hasClass("widget-container") && (u = parseInt(d.css("padding-bottom"), 10)), e.removeClass("left right under under-right"), e.attr("style", ""), g.length) {
                    if (g.is(":visible")) {
                        var w = g.css("z-index");
                        e.css("display", "inline-block"), e.css("z-index", w), e.addClass("tooltip-lightbox")
                    }
                } else e.css("display", "inline-block");
                if ("vertical" === l && f.left > 330 && "inline-block" !== h) e.addClass("left"), e.css({
                    top: p.top + r.outerHeight() / 2,
                    left: f.left - e.outerWidth() - 5,
                    transform: "translateY(-50%)"
                });
                else if ("vertical" === l && i - (f.left + d.outerWidth()) > 330) e.addClass("right"), e.css({
                    top: p.top + r.outerHeight() / 2,
                    left: f.left + d.outerWidth() + 5,
                    transform: "translateY(-50%)"
                });
                else if ("horizontal" === l && "checkbox" === s) e.addClass("under-right"), e.css({
                    top: p.top + r.outerHeight() + 2,
                    left: p.left - 5
                });
                else {
                    var v = f.top + d.outerHeight() - u,
                        b = p.left + 19;
                    ["checkbox", "radio"].indexOf(s) >= 0 && ("checkbox" === s && (v = p.top + r.outerHeight() + 2, b = p.left - 4), v += 2), e.addClass("under-right"), e.css({
                        top: v,
                        left: b
                    })
                }
            }
        })
    }
    t(document).ready(function() {
        var e = t("#" + t(".form-error-tooltip").attr("data-uid")).parents(".landingi-popup").first();
        e.length && e.show(), i(), e.length || function() {
            var i = t(".form-error-tooltip").first().attr("data-uid");
            if (i) {
                var e = t('[id="' + i + '"]:visible').parents(".widget-container").first(),
                    o = t(".widget-section").first(),
                    r = e.offset().top;
                "fixed" === o.css("position") && (r -= o.outerHeight()), t("html, body").animate({
                    scrollTop: r
                }, 500)
            }
        }()
    }), t(window).resize(i), t(window).scroll(i), t(".landingi-popup-body").scroll(i), t("body").on("click", ".form-error-tooltip", function() {
        t(this).remove()
    }), t(".widget-popupcloser, .landingi-popup-body").on("click", function() {
        t(".form-error-tooltip").hide(300)
    }), window.positionValidationTooltips = i, window.scrollToFirstTooltip = function() {
        var i = t(".form-error-tooltip").first().attr("data-uid"),
            e = t('[id="' + i + '"]:visible').parents(".widget-container").first();
        0 === e.length && (e = t("#" + i));
        var o = t(".widget-section").first(),
            r = e.offset().top;
        "fixed" === o.css("position") && (r -= o.outerHeight());
        t("html, body").animate({
            scrollTop: r
        }, 500)
    }
}(jQuery);