// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"dist/main.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  var e = {};

  function i(n) {
    if (e[n]) return e[n].exports;
    var s = e[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return t[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
  }

  i.m = t, i.c = e, i.d = function (t, e, n) {
    i.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    });
  }, i.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, i.t = function (t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var s in t) {
      i.d(n, s, function (e) {
        return t[e];
      }.bind(null, s));
    }
    return n;
  }, i.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return i.d(e, "a", e), e;
  }, i.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, i.p = "", i(i.s = 1);
}([function (t, e, i) {
  "use strict";

  (function (t) {
    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function n(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
      }
    }

    function s(t, e, i) {
      return e && n(t.prototype, e), i && n(t, i), t;
    }

    function o(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t;
    }

    function l(t, e) {
      var i = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), i.push.apply(i, n);
      }

      return i;
    }

    function r(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2 ? l(Object(i), !0).forEach(function (e) {
          o(t, e, i[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : l(Object(i)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
        });
      }

      return t;
    }

    function a(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && h(t, e);
    }

    function c(t) {
      return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    function h(t, e) {
      return (h = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    function u(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }

    function d(t, e) {
      return !e || "object" != _typeof(e) && "function" != typeof e ? u(t) : e;
    }

    function f(t, e, i) {
      return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, i) {
        var n = function (t, e) {
          for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t));) {
            ;
          }

          return t;
        }(t, e);

        if (n) {
          var s = Object.getOwnPropertyDescriptor(n, e);
          return s.get ? s.get.call(i) : s.value;
        }
      })(t, e, i || t);
    }

    function p(t) {
      return function (t) {
        if (Array.isArray(t)) {
          for (var e = 0, i = new Array(t.length); e < t.length; e++) {
            i[e] = t[e];
          }

          return i;
        }
      }(t) || function (t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
      }(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }();
    }

    var y = {
      el: document,
      elMobile: document,
      name: "scroll",
      offset: [0, 0],
      repeat: !1,
      smooth: !1,
      smoothMobile: !1,
      direction: "vertical",
      lerp: .1,
      class: "is-inview",
      scrollbarContainer: !1,
      scrollbarClass: "c-scrollbar",
      scrollingClass: "has-scroll-scrolling",
      draggingClass: "has-scroll-dragging",
      smoothClass: "has-scroll-smooth",
      initClass: "has-scroll-init",
      getSpeed: !1,
      getDirection: !1,
      multiplier: 1,
      firefoxMultiplier: 50,
      touchMultiplier: 2,
      scrollFromAnywhere: !1
    },
        v = function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        i(this, t), Object.assign(this, y, e), this.namespace = "locomotive", this.html = document.documentElement, this.windowHeight = window.innerHeight, this.windowMiddle = this.windowHeight / 2, this.els = [], this.listeners = {}, this.hasScrollTicking = !1, this.hasCallEventSet = !1, this.checkScroll = this.checkScroll.bind(this), this.checkResize = this.checkResize.bind(this), this.checkEvent = this.checkEvent.bind(this), this.instance = {
          scroll: {
            x: 0,
            y: 0
          },
          limit: this.html.offsetHeight
        }, this.getDirection && (this.instance.direction = null), this.getDirection && (this.instance.speed = 0), this.html.classList.add(this.initClass), window.addEventListener("resize", this.checkResize, !1);
      }

      return s(t, [{
        key: "init",
        value: function value() {
          this.initEvents();
        }
      }, {
        key: "checkScroll",
        value: function value() {
          this.dispatchScroll();
        }
      }, {
        key: "checkResize",
        value: function value() {
          var t = this;
          this.resizeTick || (this.resizeTick = !0, requestAnimationFrame(function () {
            t.resize(), t.resizeTick = !1;
          }));
        }
      }, {
        key: "resize",
        value: function value() {}
      }, {
        key: "initEvents",
        value: function value() {
          var t = this;
          this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")), this.setScrollTo = this.setScrollTo.bind(this), this.scrollToEls.forEach(function (e) {
            e.addEventListener("click", t.setScrollTo, !1);
          });
        }
      }, {
        key: "setScrollTo",
        value: function value(t) {
          t.preventDefault(), this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), t.currentTarget.getAttribute("data-".concat(this.name, "-offset")));
        }
      }, {
        key: "addElements",
        value: function value() {}
      }, {
        key: "detectElements",
        value: function value(t) {
          var e = this,
              i = this.instance.scroll.y,
              n = i + this.windowHeight;
          this.els.forEach(function (s, o) {
            !s || s.inView && !t || n >= s.top && i < s.bottom && e.setInView(s, o), s && s.inView && (n < s.top || i > s.bottom) && e.setOutOfView(s, o);
          }), this.els = this.els.filter(function (t, e) {
            return null !== t;
          }), this.hasScrollTicking = !1;
        }
      }, {
        key: "setInView",
        value: function value(t, e) {
          this.els[e].inView = !0, t.el.classList.add(t.class), t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"), t.repeat || (this.els[e].call = !1)), t.repeat || t.speed || t.sticky || (!t.call || t.call && this.hasCallEventSet) && (this.els[e] = null);
        }
      }, {
        key: "setOutOfView",
        value: function value(t, e) {
          (t.repeat || void 0 !== t.speed) && (this.els[e].inView = !1), t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"), t.repeat && t.el.classList.remove(t.class);
        }
      }, {
        key: "dispatchCall",
        value: function value(t, e) {
          this.callWay = e, this.callValue = t.call.split(",").map(function (t) {
            return t.trim();
          }), this.callObj = t, 1 == this.callValue.length && (this.callValue = this.callValue[0]);
          var i = new Event(this.namespace + "call");
          this.el.dispatchEvent(i);
        }
      }, {
        key: "dispatchScroll",
        value: function value() {
          var t = new Event(this.namespace + "scroll");
          this.el.dispatchEvent(t);
        }
      }, {
        key: "setEvents",
        value: function value(t, e) {
          this.listeners[t] || (this.listeners[t] = []);
          var i = this.listeners[t];
          i.push(e), 1 === i.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1), "call" === t && (this.hasCallEventSet = !0, this.detectElements(!0));
        }
      }, {
        key: "unsetEvents",
        value: function value(t, e) {
          if (this.listeners[t]) {
            var i = this.listeners[t],
                n = i.indexOf(e);
            n < 0 || (i.splice(n, 1), 0 === i.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1));
          }
        }
      }, {
        key: "checkEvent",
        value: function value(t) {
          var e = this,
              i = t.type.replace(this.namespace, ""),
              n = this.listeners[i];
          n && 0 !== n.length && n.forEach(function (t) {
            switch (i) {
              case "scroll":
                return t(e.instance);

              case "call":
                return t(e.callValue, e.callWay, e.callObj);

              default:
                return t();
            }
          });
        }
      }, {
        key: "startScroll",
        value: function value() {}
      }, {
        key: "stopScroll",
        value: function value() {}
      }, {
        key: "setScroll",
        value: function value(t, e) {
          this.instance.scroll = {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "destroy",
        value: function value() {
          var t = this;
          window.removeEventListener("resize", this.checkResize, !1), Object.keys(this.listeners).forEach(function (e) {
            t.el.removeEventListener(t.namespace + e, t.checkEvent, !1);
          }), this.listeners = {}, this.scrollToEls.forEach(function (e) {
            e.removeEventListener("click", t.setScrollTo, !1);
          });
        }
      }]), t;
    }(),
        m = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};

    function g(t, e) {
      return t(e = {
        exports: {}
      }, e.exports), e.exports;
    }

    var w = g(function (t, e) {
      t.exports = {
        polyfill: function polyfill() {
          var t = window,
              e = document;

          if (!("scrollBehavior" in e.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
            var i,
                n = t.HTMLElement || t.Element,
                s = {
              scroll: t.scroll || t.scrollTo,
              scrollBy: t.scrollBy,
              elementScroll: n.prototype.scroll || r,
              scrollIntoView: n.prototype.scrollIntoView
            },
                o = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                l = (i = t.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i) ? 1 : 0);
            t.scroll = t.scrollTo = function () {
              void 0 !== arguments[0] && (!0 !== a(arguments[0]) ? p.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : s.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != _typeof(arguments[0]) ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset));
            }, t.scrollBy = function () {
              void 0 !== arguments[0] && (a(arguments[0]) ? s.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != _typeof(arguments[0]) ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)));
            }, n.prototype.scroll = n.prototype.scrollTo = function () {
              if (void 0 !== arguments[0]) if (!0 !== a(arguments[0])) {
                var t = arguments[0].left,
                    e = arguments[0].top;
                p.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e);
              } else {
                if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                s.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != _typeof(arguments[0]) ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop);
              }
            }, n.prototype.scrollBy = function () {
              void 0 !== arguments[0] && (!0 !== a(arguments[0]) ? this.scroll({
                left: ~~arguments[0].left + this.scrollLeft,
                top: ~~arguments[0].top + this.scrollTop,
                behavior: arguments[0].behavior
              }) : s.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop));
            }, n.prototype.scrollIntoView = function () {
              if (!0 !== a(arguments[0])) {
                var i = d(this),
                    n = i.getBoundingClientRect(),
                    o = this.getBoundingClientRect();
                i !== e.body ? (p.call(this, i, i.scrollLeft + o.left - n.left, i.scrollTop + o.top - n.top), "fixed" !== t.getComputedStyle(i).position && t.scrollBy({
                  left: n.left,
                  top: n.top,
                  behavior: "smooth"
                })) : t.scrollBy({
                  left: o.left,
                  top: o.top,
                  behavior: "smooth"
                });
              } else s.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
            };
          }

          function r(t, e) {
            this.scrollLeft = t, this.scrollTop = e;
          }

          function a(t) {
            if (null === t || "object" != _typeof(t) || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
            if ("object" == _typeof(t) && "smooth" === t.behavior) return !1;
            throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.");
          }

          function c(t, e) {
            return "Y" === e ? t.clientHeight + l < t.scrollHeight : "X" === e ? t.clientWidth + l < t.scrollWidth : void 0;
          }

          function h(e, i) {
            var n = t.getComputedStyle(e, null)["overflow" + i];
            return "auto" === n || "scroll" === n;
          }

          function u(t) {
            var e = c(t, "Y") && h(t, "Y"),
                i = c(t, "X") && h(t, "X");
            return e || i;
          }

          function d(t) {
            for (; t !== e.body && !1 === u(t);) {
              t = t.parentNode || t.host;
            }

            return t;
          }

          function f(e) {
            var i,
                n,
                s,
                l,
                r = (o() - e.startTime) / 468;
            l = r = r > 1 ? 1 : r, i = .5 * (1 - Math.cos(Math.PI * l)), n = e.startX + (e.x - e.startX) * i, s = e.startY + (e.y - e.startY) * i, e.method.call(e.scrollable, n, s), n === e.x && s === e.y || t.requestAnimationFrame(f.bind(t, e));
          }

          function p(i, n, l) {
            var a,
                c,
                h,
                u,
                d = o();
            i === e.body ? (a = t, c = t.scrollX || t.pageXOffset, h = t.scrollY || t.pageYOffset, u = s.scroll) : (a = i, c = i.scrollLeft, h = i.scrollTop, u = r), f({
              scrollable: a,
              method: u,
              startTime: d,
              startX: c,
              startY: h,
              x: n,
              y: l
            });
          }
        }
      };
    }),
        b = (w.polyfill, function (t) {
      function e() {
        var t,
            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return i(this, e), t = d(this, c(e).call(this, n)), window.addEventListener("scroll", t.checkScroll, !1), w.polyfill(), t;
      }

      return a(e, t), s(e, [{
        key: "init",
        value: function value() {
          this.instance.scroll.y = window.pageYOffset, this.addElements(), this.detectElements(), f(c(e.prototype), "init", this).call(this);
        }
      }, {
        key: "checkScroll",
        value: function value() {
          var t = this;
          f(c(e.prototype), "checkScroll", this).call(this), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.timestamp = Date.now()), this.instance.scroll.y = window.pageYOffset, this.els.length && (this.hasScrollTicking || (requestAnimationFrame(function () {
            t.detectElements();
          }), this.hasScrollTicking = !0));
        }
      }, {
        key: "addDirection",
        value: function value() {
          window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up");
        }
      }, {
        key: "addSpeed",
        value: function value() {
          window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / (Date.now() - this.timestamp) : this.instance.speed = 0;
        }
      }, {
        key: "resize",
        value: function value() {
          this.els.length && (this.windowHeight = window.innerHeight, this.updateElements());
        }
      }, {
        key: "addElements",
        value: function value() {
          var t = this;
          this.els = [], this.el.querySelectorAll("[data-" + this.name + "]").forEach(function (e, i) {
            var n = e.dataset[t.name + "Class"] || t.class,
                s = e.getBoundingClientRect().top + t.instance.scroll.y,
                o = s + e.offsetHeight,
                l = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                r = e.dataset[t.name + "Repeat"],
                a = e.dataset[t.name + "Call"];
            r = "false" != r && (null != r || t.repeat);
            var c = t.getRelativeOffset(l),
                h = {
              el: e,
              id: i,
              class: n,
              top: s + c[0],
              bottom: o - c[1],
              offset: l,
              repeat: r,
              inView: !!e.classList.contains(n),
              call: a
            };
            t.els.push(h);
          });
        }
      }, {
        key: "updateElements",
        value: function value() {
          var t = this;
          this.els.forEach(function (e, i) {
            var n = e.el.getBoundingClientRect().top + t.instance.scroll.y,
                s = n + e.el.offsetHeight,
                o = t.getRelativeOffset(e.offset);
            t.els[i].top = n + o[0], t.els[i].bottom = s - o[1];
          }), this.hasScrollTicking = !1;
        }
      }, {
        key: "getRelativeOffset",
        value: function value(t) {
          var e = [0, 0];
          if (t) for (var i = 0; i < t.length; i++) {
            "string" == typeof t[i] ? t[i].includes("%") ? e[i] = parseInt(t[i].replace("%", "") * this.windowHeight / 100) : e[i] = parseInt(t[i]) : e[i] = t[i];
          }
          return e;
        }
      }, {
        key: "scrollTo",
        value: function value(t, e, i, n, s, o) {
          var l,
              r = e ? parseInt(e) : 0;

          if ("string" == typeof t) {
            if ("top" === t) l = this.html;else if ("bottom" === t) l = this.html.offsetHeight - window.innerHeight;else if (!(l = document.querySelector(t))) return;
          } else if ("number" == typeof t) l = parseInt(t);else {
            if (!t || !t.tagName) return void console.warn("`targetOption` parameter is not valid");
            l = t;
          }

          if (r = "number" != typeof l ? l.getBoundingClientRect().top + r + this.instance.scroll.y : l + r, o) {
            r = r.toFixed();
            window.addEventListener("scroll", function t() {
              window.pageYOffset.toFixed() === r && (window.removeEventListener("scroll", t), o());
            });
          }

          window.scrollTo({
            top: r,
            behavior: "smooth"
          });
        }
      }, {
        key: "update",
        value: function value() {
          this.addElements(), this.detectElements();
        }
      }, {
        key: "destroy",
        value: function value() {
          f(c(e.prototype), "destroy", this).call(this), window.removeEventListener("scroll", this.checkScroll, !1);
        }
      }]), e;
    }(v)),
        S = Object.getOwnPropertySymbols,
        k = Object.prototype.hasOwnProperty,
        E = Object.prototype.propertyIsEnumerable;

    function T(t) {
      if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(t);
    }

    var O = function () {
      try {
        if (!Object.assign) return !1;
        var t = new String("abc");
        if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;

        for (var e = {}, i = 0; i < 10; i++) {
          e["_" + String.fromCharCode(i)] = i;
        }

        if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
          return e[t];
        }).join("")) return !1;
        var n = {};
        return "abcdefghijklmnopqrst".split("").forEach(function (t) {
          n[t] = t;
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("");
      } catch (t) {
        return !1;
      }
    }() ? Object.assign : function (t, e) {
      for (var i, n, s = T(t), o = 1; o < arguments.length; o++) {
        for (var l in i = Object(arguments[o])) {
          k.call(i, l) && (s[l] = i[l]);
        }

        if (S) {
          n = S(i);

          for (var r = 0; r < n.length; r++) {
            E.call(i, n[r]) && (s[n[r]] = i[n[r]]);
          }
        }
      }

      return s;
    };

    function L() {}

    L.prototype = {
      on: function on(t, e, i) {
        var n = this.e || (this.e = {});
        return (n[t] || (n[t] = [])).push({
          fn: e,
          ctx: i
        }), this;
      },
      once: function once(t, e, i) {
        var n = this;

        function s() {
          n.off(t, s), e.apply(i, arguments);
        }

        return s._ = e, this.on(t, s, i);
      },
      emit: function emit(t) {
        for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, s = i.length; n < s; n++) {
          i[n].fn.apply(i[n].ctx, e);
        }

        return this;
      },
      off: function off(t, e) {
        var i = this.e || (this.e = {}),
            n = i[t],
            s = [];
        if (n && e) for (var o = 0, l = n.length; o < l; o++) {
          n[o].fn !== e && n[o].fn._ !== e && s.push(n[o]);
        }
        return s.length ? i[t] = s : delete i[t], this;
      }
    };

    var D = L,
        _ = g(function (t, e) {
      (function () {
        (null !== e ? e : this).Lethargy = function () {
          function t(t, e, i, n) {
            this.stability = null != t ? Math.abs(t) : 8, this.sensitivity = null != e ? 1 + Math.abs(e) : 100, this.tolerance = null != i ? 1 + Math.abs(i) : 1.1, this.delay = null != n ? n : 150, this.lastUpDeltas = function () {
              var t, e, i;

              for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) {
                i.push(null);
              }

              return i;
            }.call(this), this.lastDownDeltas = function () {
              var t, e, i;

              for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) {
                i.push(null);
              }

              return i;
            }.call(this), this.deltasTimestamp = function () {
              var t, e, i;

              for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) {
                i.push(null);
              }

              return i;
            }.call(this);
          }

          return t.prototype.check = function (t) {
            var e;
            return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), e > 0 ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1));
          }, t.prototype.isInertia = function (t) {
            var e, i, n, s, o, l, r;
            return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (n = e.slice(0, this.stability), i = e.slice(this.stability, 2 * this.stability), r = n.reduce(function (t, e) {
              return t + e;
            }), o = i.reduce(function (t, e) {
              return t + e;
            }), l = r / n.length, s = o / i.length, Math.abs(l) < Math.abs(s * this.tolerance) && this.sensitivity < Math.abs(s) && t);
          }, t.prototype.showLastUpDeltas = function () {
            return this.lastUpDeltas;
          }, t.prototype.showLastDownDeltas = function () {
            return this.lastDownDeltas;
          }, t;
        }();
      }).call(m);
    }),
        M = {
      hasWheelEvent: "onwheel" in document,
      hasMouseWheelEvent: "onmousewheel" in document,
      hasTouch: "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
      hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
      hasPointer: !!window.navigator.msPointerEnabled,
      hasKeyDown: "onkeydown" in document,
      isFirefox: navigator.userAgent.indexOf("Firefox") > -1
    },
        x = Object.prototype.toString,
        j = Object.prototype.hasOwnProperty;

    function C(t, e) {
      return function () {
        return t.apply(e, arguments);
      };
    }

    var B = _.Lethargy,
        H = "virtualscroll",
        Y = F,
        P = 37,
        A = 38,
        R = 39,
        q = 40,
        X = 32;

    function F(t) {
      !function (t) {
        if (!t) return console.warn("bindAll requires at least one argument.");
        var e = Array.prototype.slice.call(arguments, 1);
        if (0 === e.length) for (var i in t) {
          j.call(t, i) && "function" == typeof t[i] && "[object Function]" == x.call(t[i]) && e.push(i);
        }

        for (var n = 0; n < e.length; n++) {
          var s = e[n];
          t[s] = C(t[s], t);
        }
      }(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, t && t.el && (this.el = t.el, delete t.el), this.options = O({
        mouseMultiplier: 1,
        touchMultiplier: 2,
        firefoxMultiplier: 15,
        keyStep: 120,
        preventTouch: !1,
        unpreventTouchClass: "vs-touchmove-allowed",
        limitInertia: !1,
        useKeyboard: !0,
        useTouch: !0
      }, t), this.options.limitInertia && (this._lethargy = new B()), this._emitter = new D(), this._event = {
        y: 0,
        x: 0,
        deltaX: 0,
        deltaY: 0
      }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, void 0 !== this.options.passive && (this.listenerOptions = {
        passive: this.options.passive
      });
    }

    function I(t, e, i) {
      return (1 - i) * t + i * e;
    }

    function V(t) {
      var e = {};

      if (window.getComputedStyle) {
        var i = getComputedStyle(t),
            n = i.transform || i.webkitTransform || i.mozTransform,
            s = n.match(/^matrix3d\((.+)\)$/);
        return s ? (e.x = s ? parseFloat(s[1].split(", ")[12]) : 0, e.y = s ? parseFloat(s[1].split(", ")[13]) : 0) : (s = n.match(/^matrix\((.+)\)$/), e.x = s ? parseFloat(s[1].split(", ")[4]) : 0, e.y = s ? parseFloat(s[1].split(", ")[5]) : 0), e;
      }
    }

    function W(t) {
      for (var e = []; t && t !== document; t = t.parentNode) {
        e.push(t);
      }

      return e;
    }

    F.prototype._notify = function (t) {
      var e = this._event;
      e.x += e.deltaX, e.y += e.deltaY, this._emitter.emit(H, {
        x: e.x,
        y: e.y,
        deltaX: e.deltaX,
        deltaY: e.deltaY,
        originalEvent: t
      });
    }, F.prototype._onWheel = function (t) {
      var e = this.options;

      if (!this._lethargy || !1 !== this._lethargy.check(t)) {
        var i = this._event;
        i.deltaX = t.wheelDeltaX || -1 * t.deltaX, i.deltaY = t.wheelDeltaY || -1 * t.deltaY, M.isFirefox && 1 == t.deltaMode && (i.deltaX *= e.firefoxMultiplier, i.deltaY *= e.firefoxMultiplier), i.deltaX *= e.mouseMultiplier, i.deltaY *= e.mouseMultiplier, this._notify(t);
      }
    }, F.prototype._onMouseWheel = function (t) {
      if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
        var e = this._event;
        e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, this._notify(t);
      }
    }, F.prototype._onTouchStart = function (t) {
      var e = t.targetTouches ? t.targetTouches[0] : t;
      this.touchStartX = e.pageX, this.touchStartY = e.pageY;
    }, F.prototype._onTouchMove = function (t) {
      var e = this.options;
      e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
      var i = this._event,
          n = t.targetTouches ? t.targetTouches[0] : t;
      i.deltaX = (n.pageX - this.touchStartX) * e.touchMultiplier, i.deltaY = (n.pageY - this.touchStartY) * e.touchMultiplier, this.touchStartX = n.pageX, this.touchStartY = n.pageY, this._notify(t);
    }, F.prototype._onKeyDown = function (t) {
      var e = this._event;
      e.deltaX = e.deltaY = 0;
      var i = window.innerHeight - 40;

      switch (t.keyCode) {
        case P:
        case A:
          e.deltaY = this.options.keyStep;
          break;

        case R:
        case q:
          e.deltaY = -this.options.keyStep;
          break;

        case t.shiftKey:
          e.deltaY = i;
          break;

        case X:
          e.deltaY = -i;
          break;

        default:
          return;
      }

      this._notify(t);
    }, F.prototype._bind = function () {
      M.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), M.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), M.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), M.hasPointer && M.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), M.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown);
    }, F.prototype._unbind = function () {
      M.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel), M.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel), M.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), M.hasPointer && M.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), M.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown);
    }, F.prototype.on = function (t, e) {
      this._emitter.on(H, t, e);

      var i = this._emitter.e;
      i && i[H] && 1 === i[H].length && this._bind();
    }, F.prototype.off = function (t, e) {
      this._emitter.off(H, t, e);

      var i = this._emitter.e;
      (!i[H] || i[H].length <= 0) && this._unbind();
    }, F.prototype.reset = function () {
      var t = this._event;
      t.x = 0, t.y = 0;
    }, F.prototype.destroy = function () {
      this._emitter.off(), this._unbind();
    };
    var K = "function" == typeof Float32Array;

    function z(t, e) {
      return 1 - 3 * e + 3 * t;
    }

    function $(t, e) {
      return 3 * e - 6 * t;
    }

    function N(t) {
      return 3 * t;
    }

    function U(t, e, i) {
      return ((z(e, i) * t + $(e, i)) * t + N(e)) * t;
    }

    function J(t, e, i) {
      return 3 * z(e, i) * t * t + 2 * $(e, i) * t + N(e);
    }

    function G(t) {
      return t;
    }

    var Q = function Q(t, e, i, n) {
      if (!(0 <= t && t <= 1 && 0 <= i && i <= 1)) throw new Error("bezier x values must be in [0, 1] range");
      if (t === e && i === n) return G;

      for (var s = K ? new Float32Array(11) : new Array(11), o = 0; o < 11; ++o) {
        s[o] = U(.1 * o, t, i);
      }

      function l(e) {
        for (var n = 0, o = 1; 10 !== o && s[o] <= e; ++o) {
          n += .1;
        }

        --o;
        var l = n + .1 * ((e - s[o]) / (s[o + 1] - s[o])),
            r = J(l, t, i);
        return r >= .001 ? function (t, e, i, n) {
          for (var s = 0; s < 4; ++s) {
            var o = J(e, i, n);
            if (0 === o) return e;
            e -= (U(e, i, n) - t) / o;
          }

          return e;
        }(e, l, t, i) : 0 === r ? l : function (t, e, i, n, s) {
          var o,
              l,
              r = 0;

          do {
            (o = U(l = e + (i - e) / 2, n, s) - t) > 0 ? i = l : e = l;
          } while (Math.abs(o) > 1e-7 && ++r < 10);

          return l;
        }(e, n, n + .1, t, i);
      }

      return function (t) {
        return 0 === t ? 0 : 1 === t ? 1 : U(l(t), e, n);
      };
    },
        Z = 38,
        tt = 40,
        et = 32,
        it = 9,
        nt = 33,
        st = 34,
        ot = 36,
        lt = 35,
        rt = function (t) {
      function e() {
        var t,
            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return i(this, e), window.scrollTo(0, 0), history.scrollRestoration = "manual", (t = d(this, c(e).call(this, n))).inertia && (t.lerp = .1 * t.inertia), t.isScrolling = !1, t.isDraggingScrollbar = !1, t.isTicking = !1, t.hasScrollTicking = !1, t.parallaxElements = [], t.stop = !1, t.scrollbarContainer = n.scrollbarContainer, t.checkKey = t.checkKey.bind(u(t)), window.addEventListener("keydown", t.checkKey, !1), t;
      }

      return a(e, t), s(e, [{
        key: "init",
        value: function value() {
          var t = this;
          this.html.classList.add(this.smoothClass), this.instance = r({
            delta: {
              x: 0,
              y: 0
            }
          }, this.instance), this.vs = new Y({
            el: this.scrollFromAnywhere ? document : this.el,
            mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : .4,
            firefoxMultiplier: this.firefoxMultiplier,
            touchMultiplier: this.touchMultiplier,
            useKeyboard: !1,
            passive: !0
          }), this.vs.on(function (e) {
            t.stop || (t.isTicking || t.isDraggingScrollbar || (requestAnimationFrame(function () {
              t.updateDelta(e), t.isScrolling || t.startScrolling();
            }), t.isTicking = !0), t.isTicking = !1);
          }), this.setScrollLimit(), this.initScrollBar(), this.addSections(), this.addElements(), this.detectElements(), this.transformElements(!0, !0), this.checkScroll(!0), f(c(e.prototype), "init", this).call(this);
        }
      }, {
        key: "setScrollLimit",
        value: function value() {
          this.instance.limit = this.el.offsetHeight - this.windowHeight;
        }
      }, {
        key: "startScrolling",
        value: function value() {
          this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass);
        }
      }, {
        key: "stopScrolling",
        value: function value() {
          this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf), this.scrollToRaf = null), this.isScrolling = !1, this.instance.scroll.y = Math.round(this.instance.scroll.y), this.html.classList.remove(this.scrollingClass);
        }
      }, {
        key: "checkKey",
        value: function value(t) {
          var e = this;
          if (this.stop) t.keyCode == it && requestAnimationFrame(function () {
            e.html.scrollTop = 0, document.body.scrollTop = 0;
          });else {
            switch (t.keyCode) {
              case it:
                requestAnimationFrame(function () {
                  e.html.scrollTop = 0, document.body.scrollTop = 0, e.scrollTo(document.activeElement, -window.innerHeight / 2);
                });
                break;

              case Z:
                this.instance.delta.y -= 240;
                break;

              case tt:
                this.instance.delta.y += 240;
                break;

              case nt:
                this.instance.delta.y -= window.innerHeight;
                break;

              case st:
                this.instance.delta.y += window.innerHeight;
                break;

              case ot:
                this.instance.delta.y -= this.instance.limit;
                break;

              case lt:
                this.instance.delta.y += this.instance.limit;
                break;

              case et:
                document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || (t.shiftKey ? this.instance.delta.y -= window.innerHeight : this.instance.delta.y += window.innerHeight);
                break;

              default:
                return;
            }

            this.instance.delta.y < 0 && (this.instance.delta.y = 0), this.instance.delta.y > this.instance.limit && (this.instance.delta.y = this.instance.limit), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass);
          }
        }
      }, {
        key: "checkScroll",
        value: function value() {
          var t = this,
              i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

          if (i || this.isScrolling || this.isDraggingScrollbar) {
            this.hasScrollTicking || (requestAnimationFrame(function () {
              return t.checkScroll();
            }), this.hasScrollTicking = !0), this.updateScroll();
            var n = Math.abs(this.instance.delta.y - this.instance.scroll.y);
            !this.animatingScroll && (n < .5 && 0 != this.instance.delta.y || n < .5 && 0 == this.instance.delta.y) && this.stopScrolling();

            for (var s = this.sections.length - 1; s >= 0; s--) {
              this.sections[s].persistent || this.instance.scroll.y > this.sections[s].offset && this.instance.scroll.y < this.sections[s].limit ? (this.transform(this.sections[s].el, 0, -this.instance.scroll.y), this.sections[s].inView || (this.sections[s].inView = !0, this.sections[s].el.style.opacity = 1, this.sections[s].el.style.pointerEvents = "all", this.sections[s].el.setAttribute("data-".concat(this.name, "-section-inview"), ""))) : (this.sections[s].inView && (this.sections[s].inView = !1, this.sections[s].el.style.opacity = 0, this.sections[s].el.style.pointerEvents = "none", this.sections[s].el.removeAttribute("data-".concat(this.name, "-section-inview"))), this.transform(this.sections[s].el, 0, 0));
            }

            this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.timestamp = Date.now()), this.detectElements(), this.transformElements();
            var o = this.instance.scroll.y / this.instance.limit * this.scrollBarLimit;
            this.transform(this.scrollbarThumb, 0, o), f(c(e.prototype), "checkScroll", this).call(this), this.hasScrollTicking = !1;
          }
        }
      }, {
        key: "resize",
        value: function value() {
          this.windowHeight = window.innerHeight, this.windowMiddle = this.windowHeight / 2, this.update();
        }
      }, {
        key: "updateDelta",
        value: function value(t) {
          this.instance.delta.y -= t.deltaY * this.multiplier, this.instance.delta.y < 0 && (this.instance.delta.y = 0), this.instance.delta.y > this.instance.limit && (this.instance.delta.y = this.instance.limit);
        }
      }, {
        key: "updateScroll",
        value: function value(t) {
          this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll.y = I(this.instance.scroll.y, this.instance.delta.y, this.lerp) : this.instance.scroll.y > this.instance.limit ? this.setScroll(this.instance.scroll.x, this.instance.limit) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll.x, 0) : this.setScroll(this.instance.scroll.x, this.instance.delta.y);
        }
      }, {
        key: "addDirection",
        value: function value() {
          this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up");
        }
      }, {
        key: "addSpeed",
        value: function value() {
          this.instance.delta.y != this.instance.scroll.y ? this.instance.speed = (this.instance.delta.y - this.instance.scroll.y) / Math.max(1, Date.now() - this.timestamp) : this.instance.speed = 0;
        }
      }, {
        key: "initScrollBar",
        value: function value() {
          this.scrollbar = document.createElement("span"), this.scrollbarThumb = document.createElement("span"), this.scrollbar.classList.add("".concat(this.scrollbarClass)), this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")), this.scrollbar.append(this.scrollbarThumb), this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar), this.getScrollBar = this.getScrollBar.bind(this), this.releaseScrollBar = this.releaseScrollBar.bind(this), this.moveScrollBar = this.moveScrollBar.bind(this), this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar), window.addEventListener("mouseup", this.releaseScrollBar), window.addEventListener("mousemove", this.moveScrollBar), this.instance.limit + this.windowHeight <= this.windowHeight || (this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit + this.scrollbarHeight), "px"), this.scrollBarLimit = this.scrollbarHeight - this.scrollbarThumb.getBoundingClientRect().height);
        }
      }, {
        key: "reinitScrollBar",
        value: function value() {
          this.instance.limit + this.windowHeight <= this.windowHeight || (this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit + this.scrollbarHeight), "px"), this.scrollBarLimit = this.scrollbarHeight - this.scrollbarThumb.getBoundingClientRect().height);
        }
      }, {
        key: "destroyScrollBar",
        value: function value() {
          this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar), window.removeEventListener("mouseup", this.releaseScrollBar), window.removeEventListener("mousemove", this.moveScrollBar), this.scrollbar.remove();
        }
      }, {
        key: "getScrollBar",
        value: function value(t) {
          this.isDraggingScrollbar = !0, this.checkScroll(), this.html.classList.remove(this.scrollingClass), this.html.classList.add(this.draggingClass);
        }
      }, {
        key: "releaseScrollBar",
        value: function value(t) {
          this.isDraggingScrollbar = !1, this.html.classList.add(this.scrollingClass), this.html.classList.remove(this.draggingClass);
        }
      }, {
        key: "moveScrollBar",
        value: function value(t) {
          var e = this;
          !this.isTicking && this.isDraggingScrollbar && (requestAnimationFrame(function () {
            var i = 100 * (t.clientY - e.scrollbarBCR.top) / e.scrollbarHeight * e.instance.limit / 100;
            i > 0 && i < e.instance.limit && (e.instance.delta.y = i);
          }), this.isTicking = !0), this.isTicking = !1;
        }
      }, {
        key: "addElements",
        value: function value() {
          var t = this;
          this.els = [], this.parallaxElements = [], this.sections.forEach(function (e, i) {
            t.sections[i].el.querySelectorAll("[data-".concat(t.name, "]")).forEach(function (e, n) {
              var s,
                  o,
                  l = e.dataset[t.name + "Class"] || t.class,
                  r = e.dataset[t.name + "Repeat"],
                  a = e.dataset[t.name + "Call"],
                  c = e.dataset[t.name + "Position"],
                  h = e.dataset[t.name + "Delay"],
                  u = e.dataset[t.name + "Direction"],
                  d = "string" == typeof e.dataset[t.name + "Sticky"],
                  f = !!e.dataset[t.name + "Speed"] && parseFloat(e.dataset[t.name + "Speed"]) / 10,
                  p = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                  y = e.dataset[t.name + "Target"];
              o = void 0 !== y ? document.querySelector("".concat(y)) : e;
              var v = (s = t.sections[i].inView ? o.getBoundingClientRect().top + t.instance.scroll.y - V(o).y : o.getBoundingClientRect().top - V(t.sections[i].el).y - V(o).y) + o.offsetHeight,
                  m = (v - s) / 2 + s;

              if (d) {
                var g = e.getBoundingClientRect().top,
                    w = g - s;
                s += window.innerHeight, m = ((v = g + o.offsetHeight - e.offsetHeight - w) - s) / 2 + s;
              }

              r = "false" != r && (null != r || t.repeat);
              var b = [0, 0];
              if (p) for (var S = 0; S < p.length; S++) {
                "string" == typeof p[S] ? p[S].includes("%") ? b[S] = parseInt(p[S].replace("%", "") * t.windowHeight / 100) : b[S] = parseInt(p[S]) : b[S] = p[S];
              }
              var k = {
                el: e,
                id: n,
                class: l,
                top: s + b[0],
                middle: m,
                bottom: v - b[1],
                offset: p,
                repeat: r,
                inView: !!e.classList.contains(l),
                call: a,
                speed: f,
                delay: h,
                position: c,
                target: o,
                direction: u,
                sticky: d
              };
              t.els.push(k), (!1 !== f || d) && t.parallaxElements.push(k);
            });
          });
        }
      }, {
        key: "addSections",
        value: function value() {
          var t = this;
          this.sections = [];
          var e = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
          0 === e.length && (e = [this.el]), e.forEach(function (e, i) {
            var n = e.getBoundingClientRect().top - 1.5 * window.innerHeight - V(e).y,
                s = n + e.getBoundingClientRect().height + 2 * window.innerHeight,
                o = {
              el: e,
              offset: n,
              limit: s,
              inView: !1,
              persistent: "string" == typeof e.dataset[t.name + "Persistent"]
            };
            t.sections[i] = o;
          });
        }
      }, {
        key: "transform",
        value: function value(t, e, i, n) {
          var s;

          if (n) {
            var o = V(t),
                l = I(o.x, e, n),
                r = I(o.y, i, n);
            s = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(l, ",").concat(r, ",0,1)");
          } else s = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(i, ",0,1)");

          t.style.webkitTransform = s, t.style.msTransform = s, t.style.transform = s;
        }
      }, {
        key: "transformElements",
        value: function value(t) {
          var e = this,
              i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = this.instance.scroll.y + this.windowHeight,
              s = this.instance.scroll.y + this.windowMiddle;
          this.parallaxElements.forEach(function (o, l) {
            var r = !1;
            if (t && (r = 0), o.inView || i) switch (o.position) {
              case "top":
                r = e.instance.scroll.y * -o.speed;
                break;

              case "elementTop":
                r = (n - o.top) * -o.speed;
                break;

              case "bottom":
                r = (e.instance.limit - n + e.windowHeight) * o.speed;
                break;

              default:
                r = (s - o.middle) * -o.speed;
            }
            o.sticky && (r = o.inView ? e.instance.scroll.y - o.top + window.innerHeight : e.instance.scroll.y < o.top - window.innerHeight && e.instance.scroll.y < o.top - window.innerHeight / 2 ? 0 : e.instance.scroll.y > o.bottom && e.instance.scroll.y > o.bottom + 100 && o.bottom - o.top + window.innerHeight), !1 !== r && ("horizontal" === o.direction ? e.transform(o.el, r, 0, !t && o.delay) : e.transform(o.el, 0, r, !t && o.delay));
          });
        }
      }, {
        key: "scrollTo",
        value: function value(t, e) {
          var i,
              n = this,
              s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
              o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [.25, 0, .35, 1],
              l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              r = arguments.length > 5 ? arguments[5] : void 0,
              a = e ? parseInt(e) : 0;

          if (o = Q.apply(void 0, p(o)), "string" == typeof t) {
            if ("top" === t) i = 0;else if ("bottom" === t) i = this.instance.limit;else if (!(i = document.querySelector(t))) return;
          } else if ("number" == typeof t) i = parseInt(t);else {
            if (!t || !t.tagName) return void console.warn("`targetOption` parameter is not valid");
            i = t;
          }

          if ("number" != typeof i) {
            var c = W(i).includes(this.el);
            if (!c) return;
            var h = i.getBoundingClientRect(),
                u = h.top,
                d = W(i),
                f = d.find(function (t) {
              return n.sections.find(function (e) {
                return e.el == t;
              });
            }),
                y = 0;
            f && (y = V(f).y), a = u + a - y;
          } else a = i + a;

          var v = parseFloat(this.instance.delta.y),
              m = Math.max(0, Math.min(a, this.instance.limit)),
              g = m - v,
              w = function w(t) {
            l ? n.setScroll(n.instance.delta.x, v + g * t) : n.instance.delta.y = v + g * t;
          };

          this.animatingScroll = !0, this.stopScrolling(), this.startScrolling();

          var b = Date.now(),
              S = function t() {
            var e = (Date.now() - b) / s;
            e > 1 ? (w(1), n.animatingScroll = !1, 0 == s && n.update(), r && r()) : (n.scrollToRaf = requestAnimationFrame(t), w(o(e)));
          };

          S();
        }
      }, {
        key: "update",
        value: function value() {
          this.setScrollLimit(), this.addSections(), this.addElements(), this.detectElements(), this.updateScroll(), this.transformElements(!0), this.reinitScrollBar(), this.checkScroll(!0);
        }
      }, {
        key: "startScroll",
        value: function value() {
          this.stop = !1;
        }
      }, {
        key: "stopScroll",
        value: function value() {
          this.stop = !0;
        }
      }, {
        key: "setScroll",
        value: function value(t, e) {
          this.instance = r({}, this.instance, {
            scroll: {
              x: t,
              y: e
            },
            delta: {
              x: t,
              y: e
            },
            speed: 0
          });
        }
      }, {
        key: "destroy",
        value: function value() {
          f(c(e.prototype), "destroy", this).call(this), this.stopScrolling(), this.html.classList.remove(this.smoothClass), this.vs.destroy(), this.destroyScrollBar(), window.removeEventListener("keydown", this.checkKey, !1);
        }
      }]), e;
    }(v),
        at = function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        i(this, t), this.options = e, Object.assign(this, y, e), this.init();
      }

      return s(t, [{
        key: "init",
        value: function value() {
          if (this.smoothMobile || (this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1), !0 !== this.smooth || this.isMobile ? this.scroll = new b(this.options) : this.scroll = new rt(this.options), this.scroll.init(), window.location.hash) {
            var t = window.location.hash.slice(1, window.location.hash.length),
                e = document.getElementById(t);
            e && this.scroll.scrollTo(e);
          }
        }
      }, {
        key: "update",
        value: function value() {
          this.scroll.update();
        }
      }, {
        key: "start",
        value: function value() {
          this.scroll.startScroll();
        }
      }, {
        key: "stop",
        value: function value() {
          this.scroll.stopScroll();
        }
      }, {
        key: "scrollTo",
        value: function value(t, e, i, n, s, o) {
          this.scroll.scrollTo(t, e, i, n, s, o);
        }
      }, {
        key: "setScroll",
        value: function value(t, e) {
          this.scroll.setScroll(t, e);
        }
      }, {
        key: "on",
        value: function value(t, e) {
          this.scroll.setEvents(t, e);
        }
      }, {
        key: "off",
        value: function value(t, e) {
          this.scroll.unsetEvents(t, e);
        }
      }, {
        key: "destroy",
        value: function value() {
          this.scroll.destroy();
        }
      }]), t;
    }();

    e.a = at;
  }).call(this, i(2));
}, function (t, e, i) {
  "use strict";

  i.r(e);
  var n = i(0);
  var s = document.querySelector(".menu"),
      o = document.querySelector(".navigace"),
      l = document.querySelector(".close");
  s.addEventListener("click", function () {
    o.classList.add("active"), document.querySelector("main").classList.add("inactive"), document.querySelector("footer").classList.add("inactive");
  }), l.addEventListener("click", function () {
    o.classList.remove("active"), document.querySelector("main").classList.remove("inactive"), document.querySelector("footer").classList.remove("inactive");
  });
  new n.a({
    el: document.querySelector("[data-scroll-container]"),
    smooth: !0,
    smoothMobile: !0,
    getSpeed: !0,
    getDirection: !0,
    useKeyboard: !0
  });
  var r = document.querySelector(".poslat");
  document.querySelector(".form");
  r.addEventListener("click", function () {
    var t = "Jmenuji%20se%20".concat(document.querySelector("#name").value, "%20").concat(document.querySelector("#surname").value, "\n a m\u016Fj email je ").concat(document.querySelector("#mail").value, ".Firma: ").concat(document.querySelector("#company").value, ". O n\xE1s: ").concat(document.querySelector("#about-company").value, ". Na\u0161e soci\xE1ln\xED s\xEDt\u011B: ").concat(document.querySelector("#socials").value, ". A n\u011Bco v\xEDc o n\xE1s: ").concat(document.querySelector("#details").value);
    window.open("mailto:te.konecna@icloud.com?subject=Žádost o spolupráci&body=" + t);
  });
}, function (t, e) {
  var i;

  i = function () {
    return this;
  }();

  try {
    i = i || new Function("return this")();
  } catch (t) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (i = window);
  }

  t.exports = i;
}]);
},{}]