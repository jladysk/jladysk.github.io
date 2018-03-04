$('.sidebox ul.cat-tree u,.sidebox ul.cat-tree i').remove();
(function(d) {
    d.fn.hoverIntent = function(a, b, c) {
        var e = {interval: 100,sensitivity: 7,timeout: 0}, e = "object" === typeof a ? d.extend(e, a) : d.isFunction(b) ? d.extend(e, {over: a,out: b,selector: c}) : d.extend(e, {over: a,out: a,selector: b}), f, g, h, k, l = function(a) {
            f = a.pageX;
            g = a.pageY
        }, m = function(a, c) {
            c.hoverIntent_t = clearTimeout(c.hoverIntent_t);
            if (Math.abs(h - f) + Math.abs(k - g) < e.sensitivity)
                return d(c).off("mousemove.hoverIntent", l), c.hoverIntent_s = 1, e.over.apply(c, [a]);
            h = f;
            k = g;
            c.hoverIntent_t = setTimeout(function() {
                m(a, c)
            }, 
            e.interval)
        };
        a = function(a) {
            var c = jQuery.extend({}, a), b = this;
            b.hoverIntent_t && (b.hoverIntent_t = clearTimeout(b.hoverIntent_t));
            "mouseenter" == a.type ? (h = c.pageX, k = c.pageY, d(b).on("mousemove.hoverIntent", l), 1 != b.hoverIntent_s && (b.hoverIntent_t = setTimeout(function() {
                m(c, b)
            }, e.interval))) : (d(b).off("mousemove.hoverIntent", l), 1 == b.hoverIntent_s && (b.hoverIntent_t = setTimeout(function() {
                b.hoverIntent_t = clearTimeout(b.hoverIntent_t);
                b.hoverIntent_s = 0;
                e.out.apply(b, [c])
            }, e.timeout)))
        };
        return this.on({"mouseenter.hoverIntent": a,
            "mouseleave.hoverIntent": a}, e.selector)
    }
})(jQuery);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {def: "easeOutQuad",swing: function(d, a, b, c, e) {
        return jQuery.easing[jQuery.easing.def](d, a, b, c, e)
    },easeInQuad: function(d, a, b, c, e) {
        return c * (a /= e) * a + b
    },easeOutQuad: function(d, a, b, c, e) {
        return -c * (a /= e) * (a - 2) + b
    },easeInOutQuad: function(d, a, b, c, e) {
        return 1 > (a /= e / 2) ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b
    },easeInCubic: function(d, a, b, c, e) {
        return c * (a /= e) * a * a + b
    },easeOutCubic: function(d, a, b, c, e) {
        return c * ((a = a / e - 1) * a * a + 1) + b
    },easeInOutCubic: function(d, a, b, c, e) {
        return 1 > (a /= e / 2) ? c / 2 * a * a * a + b : 
        c / 2 * ((a -= 2) * a * a + 2) + b
    },easeInQuart: function(d, a, b, c, e) {
        return c * (a /= e) * a * a * a + b
    },easeOutQuart: function(d, a, b, c, e) {
        return -c * ((a = a / e - 1) * a * a * a - 1) + b
    },easeInOutQuart: function(d, a, b, c, e) {
        return 1 > (a /= e / 2) ? c / 2 * a * a * a * a + b : -c / 2 * ((a -= 2) * a * a * a - 2) + b
    },easeInQuint: function(d, a, b, c, e) {
        return c * (a /= e) * a * a * a * a + b
    },easeOutQuint: function(d, a, b, c, e) {
        return c * ((a = a / e - 1) * a * a * a * a + 1) + b
    },easeInOutQuint: function(d, a, b, c, e) {
        return 1 > (a /= e / 2) ? c / 2 * a * a * a * a * a + b : c / 2 * ((a -= 2) * a * a * a * a + 2) + b
    },easeInSine: function(d, a, b, c, e) {
        return -c * Math.cos(a / 
        e * (Math.PI / 2)) + c + b
    },easeOutSine: function(d, a, b, c, e) {
        return c * Math.sin(a / e * (Math.PI / 2)) + b
    },easeInOutSine: function(d, a, b, c, e) {
        return -c / 2 * (Math.cos(Math.PI * a / e) - 1) + b
    },easeInExpo: function(d, a, b, c, e) {
        return 0 == a ? b : c * Math.pow(2, 10 * (a / e - 1)) + b
    },easeOutExpo: function(d, a, b, c, e) {
        return a == e ? b + c : c * (-Math.pow(2, -10 * a / e) + 1) + b
    },easeInOutExpo: function(d, a, b, c, e) {
        return 0 == a ? b : a == e ? b + c : 1 > (a /= e / 2) ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : c / 2 * (-Math.pow(2, -10 * --a) + 2) + b
    },easeInCirc: function(d, a, b, c, e) {
        return -c * (Math.sqrt(1 - (a /= e) * 
        a) - 1) + b
    },easeOutCirc: function(d, a, b, c, e) {
        return c * Math.sqrt(1 - (a = a / e - 1) * a) + b
    },easeInOutCirc: function(d, a, b, c, e) {
        return 1 > (a /= e / 2) ? -c / 2 * (Math.sqrt(1 - a * a) - 1) + b : c / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b
    },easeInElastic: function(d, a, b, c, e) {
        d = 1.70158;
        var f = 0, g = c;
        if (0 == a)
            return b;
        if (1 == (a /= e))
            return b + c;
        f || (f = 0.3 * e);
        g < Math.abs(c) ? (g = c, d = f / 4) : d = f / (2 * Math.PI) * Math.asin(c / g);
        return -(g * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a * e - d) * Math.PI / f)) + b
    },easeOutElastic: function(d, a, b, c, e) {
        d = 1.70158;
        var f = 0, g = c;
        if (0 == a)
            return b;
        if (1 == 
        (a /= e))
            return b + c;
        f || (f = 0.3 * e);
        g < Math.abs(c) ? (g = c, d = f / 4) : d = f / (2 * Math.PI) * Math.asin(c / g);
        return g * Math.pow(2, -10 * a) * Math.sin(2 * (a * e - d) * Math.PI / f) + c + b
    },easeInOutElastic: function(d, a, b, c, e) {
        d = 1.70158;
        var f = 0, g = c;
        if (0 == a)
            return b;
        if (2 == (a /= e / 2))
            return b + c;
        f || (f = 0.3 * e * 1.5);
        g < Math.abs(c) ? (g = c, d = f / 4) : d = f / (2 * Math.PI) * Math.asin(c / g);
        return 1 > a ? -0.5 * g * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a * e - d) * Math.PI / f) + b : g * Math.pow(2, -10 * (a -= 1)) * Math.sin(2 * (a * e - d) * Math.PI / f) * 0.5 + c + b
    },easeInBack: function(d, a, b, c, e, f) {
        void 0 == 
        f && (f = 1.70158);
        return c * (a /= e) * a * ((f + 1) * a - f) + b
    },easeOutBack: function(d, a, b, c, e, f) {
        void 0 == f && (f = 1.70158);
        return c * ((a = a / e - 1) * a * ((f + 1) * a + f) + 1) + b
    },easeInOutBack: function(d, a, b, c, e, f) {
        void 0 == f && (f = 1.70158);
        return 1 > (a /= e / 2) ? c / 2 * a * a * (((f *= 1.525) + 1) * a - f) + b : c / 2 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + b
    },easeInBounce: function(d, a, b, c, e) {
        return c - jQuery.easing.easeOutBounce(d, e - a, 0, c, e) + b
    },easeOutBounce: function(d, a, b, c, e) {
        return (a /= e) < 1 / 2.75 ? 7.5625 * c * a * a + b : a < 2 / 2.75 ? c * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + b : a < 2.5 / 2.75 ? 
        c * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + b : c * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + b
    },easeInOutBounce: function(d, a, b, c, e) {
        return a < e / 2 ? 0.5 * jQuery.easing.easeInBounce(d, 2 * a, 0, c, e) + b : 0.5 * jQuery.easing.easeOutBounce(d, 2 * a - e, 0, c, e) + 0.5 * c + b
    }});
(function(d) {
    d.fn.extend({actual: function(a, b) {
            var c, e, f, g, h, k, l;
            if (!this[a])
                throw '$.actual => The jQuery method "' + a + '" you called does not exist';
            f = d.extend({absolute: !1,clone: !1,includeMargin: void 0}, b);
            e = this;
            !0 === f.clone ? (k = function() {
                e = e.filter(":first").clone().css({position: "absolute",top: -1E3}).appendTo("body")
            }, l = function() {
                e.remove()
            }) : (k = function() {
                c = e.parents().andSelf().filter(":hidden");
                g = !0 === f.absolute ? {position: "absolute",visibility: "hidden",display: "block"} : {visibility: "hidden",
                    display: "block"};
                h = [];
                c.each(function() {
                    var a = {}, b;
                    for (b in g)
                        a[b] = this.style[b], this.style[b] = g[b];
                    h.push(a)
                })
            }, l = function() {
                c.each(function(a) {
                    a = h[a];
                    for (var b in g)
                        this.style[b] = a[b]
                })
            });
            k();
            k = /(outer)/g.test(a) ? e[a](f.includeMargin) : e[a]();
            l();
            return k
        }})
})(jQuery);
$("li,a", ".sidebox ul.cat-tree").removeAttr("id").removeAttr("ondblclick").removeAttr("class");
$(".sidebox ul.cat-tree li,.sidebox .gTable").each(function() {
    var d = $(this);
    d.html(d.html().replace(/&nbsp;/g, ""))
});
$(".sidebox ul.cat-tree:first").addClass("ut-menu ut-vmenu");
$(".sidebox ul.cat-tree").removeAttr("style").removeClass("cat-tree");
var sw = $(window).width();
breakpoint = 959;
mobile = !1;
$("#catmenu").prepend('<div class="nav-head"><div class="icon"><span></span><span></span><span></span><span></span></div><a href="#">' + navTitle + "</a></div>");
sw < breakpoint && $("#catmenu").attr("class", "nav-mobi");
$(function(d) {
    (function(a, c, e) {
        a = d(a).find("a").get();
        var f = null, g = 0, h;
        for (h in a)
            a[h].href && 0 <= c.indexOf(a[h].href) && (!f || g < a[h].href.length) && (f = a[h], g = a[h].href.length);
        f && d(f).addClass(e)
    })(d("#catmenu")[0], document.location.href + "/", "current-item");
    var a = d("#catmenu ul li:has(ul)").addClass("item-parent");
    d("#catmenu").hasClass("nav-mobi") || a.hoverIntent({interval: 0,over: function() {
            mobile || (d(this).addClass("hover"), d("> ul", this).animate({visibility: "toggle",opacity: "toggle"}, 0), d("> a", this).addClass("current-item"))
        },
        timeout: 100,out: function() {
            mobile || (d(this).removeClass("hover"), d("> ul", this).animate({opacity: "toggle",visibility: "toggle"}, 0), d("> a", this).removeClass("current-item"))
        }});
    d(window).resize(function() {
        sw = d(window).width();
        (mobile = sw > breakpoint ? !1 : !0) ? (d("#catmenu").attr("class", "nav-mobi"), d(".nav-head").hasClass("over") || d("#catmenu > div > ul").hide()) : (d("#catmenu").removeAttr("class"), d("#catmenu > div > ul").show())
    });
    d("> a", a).after("<em>+</em>");
    d("> em", a).click(function() {
        "+" == d(this).text() ? 
        (d(this).parent().addClass("over"), d(this).next().show(), d(this).text("-")) : (d(this).parent().removeClass("over"), d(this).next().hide(), d(this).text("+"));
        return !1
    });
    d(".nav-head").click(function() {
        d(this).toggleClass("over").next().children().toggle();
        return !1
    })
});
$(function(d) {
    var a = d(".sidebox ul li:has(ul)").addClass("item-parent");
    d(a).each(function() {
        d(this).prepend("<em>+</em>");
        d("em", this).css("top", d(this).actual("outerHeight") / 2 - d("em", this).actual("outerHeight") / 2)
    });
    d("> em", a).click(function() {
        !0 == d(this).siblings('ul').is(":hidden") ? (d(this).siblings('ul').slideDown(500, "easeOutExpo"), d(this).text("-")) : (d(this).siblings('ul').slideUp(500, "easeInExpo"), d(this).text("+"))
    });
    d("> a", a).hoverIntent({interval: 0,over: function() {
            d(this).prev().addClass("hover")
        },
        timeout: 0,out: function() {
            d(this).prev().removeClass("hover")
        }})
});
$(window).on("load", function() {
    $(window).resize().scroll()
});
$(".eBlock").length && $("#content").addClass("no-bg");
$(".site-n a").click(function(d) {
    $(d.target).hasClass("uz-signs") && d.preventDefault()
});
