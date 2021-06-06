(window.webpackJsonp = window.webpackJsonp || []).push([
    [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    Array(200).concat([
        function (t, e, n) {
            var content = n(203);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
            (0, n(79).default)("ab1da326", content, !0, { sourceMap: !1 });
        },
        function (t, e, n) {
            "use strict";
            n.r(e);
            var d = {
                    name: "Header",
                    props: { label: { type: String, default: "" }, link: { type: String, default: "" }, type: { type: String, default: "primary" }, size: { type: String, default: "md" }, disabled: { type: Boolean, default: !1 } },
                },
                o = (n(202), n(34)),
                component = Object(o.a)(
                    d,
                    function () {
                        var t = this,
                            e = t.$createElement;
                        return (t._self._c || e)("a", { class: ["btn", t.type, t.size, { disabled: t.disabled }], attrs: { href: t.disabled ? null : t.link } }, [t._v(t._s(t.label))]);
                    },
                    [],
                    !1,
                    null,
                    "123ab5a6",
                    null
                );
            e.default = component.exports;
        },
        function (t, e, n) {
            "use strict";
            n(200);
        },
        function (t, e, n) {
            var d = n(78)(!1);
            d.push([
                t.i,
                '.btn[data-v-123ab5a6]{font-family:"Lato";transition:all .3s ease-out;display:block;white-space:nowrap}.btn.primary[data-v-123ab5a6]{background-color:#fff;color:var(--brand)}.btn.primary[data-v-123ab5a6]:hover{color:#fff;background:#ffbf65;box-shadow:inset 0 -2px 0 #ffddad,inset 0 2px 0 #f39324}.btn.primary[data-v-123ab5a6]:active{background:#eb8e22;box-shadow:none}.btn.secondary[data-v-123ab5a6]{background-color:var(--brand);color:#fff}.btn.secondary[data-v-123ab5a6]:hover{background:#ffac40;box-shadow:inset 0 -4px 0 #ffbc5f,inset 0 4px 0 #f39324}.btn.secondary[data-v-123ab5a6]:active{background:#eb8e22;box-shadow:none}.btn.accent[data-v-123ab5a6]{background-color:#ffe3bd;color:var(--brand)}.btn.accent[data-v-123ab5a6]:hover{background-color:#ffac40;color:#fff}.btn.accent[data-v-123ab5a6]:active{background-color:#eb8e22;color:#fff}.btn.sm[data-v-123ab5a6]{font-weight:500;font-size:16px;line-height:17px;border-radius:16px;padding:8px 16px}.btn.md[data-v-123ab5a6]{font-weight:600;font-size:20px;line-height:24px;border-radius:56px;padding:16px 40px}.btn.disabled[data-v-123ab5a6]{opacity:.5;cursor:not-allowed;background-color:#fff;color:var(--brand)}.btn.disabled[data-v-123ab5a6]:active,.btn.disabled[data-v-123ab5a6]:hover{background-color:#fff;color:var(--brand);box-shadow:none}',
                "",
            ]),
                (t.exports = d);
        },
        function (t, e, n) {
            var content = n(211);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
            (0, n(79).default)("1076bedd", content, !0, { sourceMap: !1 });
        },
        function (t, e, n) {
            "use strict";
            n.r(e);
            var d = n(206),
                o = n.n(d);
            for (var r in d)
                ["default"].indexOf(r) < 0 &&
                    (function (t) {
                        n.d(e, t, function () {
                            return d[t];
                        });
                    })(r);
            e.default = o.a;
        },
        function (t, e) {},
        function (t, e, n) {
            t.exports = n.p + "img/copy.5967aa4.svg";
        },
        function (t, e, n) {
            "use strict";
            n.r(e);
            var d = { name: "ProductCard", components: { BaseButton: n(201).default }, props: { title: String, text: String, btn: Object } },
                o = (n(210), n(34)),
                component = Object(o.a)(
                    d,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", { staticClass: "card__container" }, [
                            n("div", { staticClass: "card__header" }, [n("h3", { staticClass: "card__title" }, [t._v(t._s(t.title))])]),
                            t._v(" "),
                            n("div", { staticClass: "card__text" }, [n("p", [t._v(t._s(t.text))])]),
                            t._v(" "),
                            n("div", { staticClass: "card__btn" }, [n("BaseButton", { attrs: { link: t.btn.link, label: t.btn.label, size: "md", disabled: t.btn.disabled } })], 1),
                        ]);
                    },
                    [],
                    !1,
                    null,
                    "82f1a568",
                    null
                );
            e.default = component.exports;
        },
        function (t, e, n) {
            var content = n(228);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
            (0, n(79).default)("5046da2e", content, !0, { sourceMap: !1 });
        },
        function (t, e, n) {
            "use strict";
            n(204);
        },
        function (t, e, n) {
            var d = n(78)(!1);
            d.push([
                t.i,
                '.card__container[data-v-82f1a568]{width:45%;background:#f6a32f;border-radius:16px;padding:0 10px 40px}@media screen and (max-width:767px){.card__container[data-v-82f1a568]{width:100%}}.cards__container[data-v-82f1a568]{display:flex;justify-content:space-between;width:100%}.card__title[data-v-82f1a568]{font-family:"Patrick";font-weight:400;font-size:48px;line-height:65px}.card__text[data-v-82f1a568],.card__title[data-v-82f1a568]{font-style:normal;color:#fff}.card__text[data-v-82f1a568]{font-family:"Quicksand";font-weight:500;font-size:20px;line-height:28px;align-items:center;text-align:center}.card__btn[data-v-82f1a568]{display:flex;align-items:center;justify-content:center}@media screen and (max-width:576px){.card__btn[data-v-82f1a568]{display:flex}}',
                "",
            ]),
                (t.exports = d);
        },
        function (t, e, n) {
            var content = n(230);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
            (0, n(79).default)("44f5d781", content, !0, { sourceMap: !1 });
        },
        function (t, e, n) {
            var content = n(240);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
            (0, n(79).default)("299c6fcf", content, !0, { sourceMap: !1 });
        },
        function (t, e, n) {
            var content = n(243);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
            (0, n(79).default)("caaacd2a", content, !0, { sourceMap: !1 });
        },
        function (t, e, n) {
            var content = n(246);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
            (0, n(79).default)("111a9c0f", content, !0, { sourceMap: !1 });
        },
        function (t, e, n) {
            var content = n(252);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
            (0, n(79).default)("42dfc5c4", content, !0, { sourceMap: !1 });
        },
        function (t, e, n) {
            t.exports = n.p + "img/simple.0121242.png";
        },
        function (t, e, n) {
            var content = n(259);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
            (0, n(79).default)("2cc32801", content, !0, { sourceMap: !1 });
        },
        function (t, e, n) {
            var content = n(266);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
            (0, n(79).default)("d89e32ae", content, !0, { sourceMap: !1 });
        },
        function (t, e, n) {
            var content = n(268);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
            (0, n(79).default)("cd4f4d64", content, !0, { sourceMap: !1 });
        },
        function (t, e, n) {
            var content = n(270);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
            (0, n(79).default)("6346af26", content, !0, { sourceMap: !1 });
        },
        function (t, e, n) {
            "use strict";
            n.r(e);
            var d = [
                    function () {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e("div", { staticClass: "logo__container" }, [e("img", { staticClass: "logo", attrs: { src: n(225), alt: "" } })]);
                    },
                ],
                o = n(201),
                r = n(226),
                c = n.n(r),
                l = [
                    { label: "Apps", id: "products" },
                    { label: "Price Chart", id: "pricelist", link: "https://www.dextools.io/app/uniswap/pair-explorer/0x27fd2f5942049bcd601428c7bcede364180b4b3f" },
                    { label: "Donate", id: "donating" },
                    { label: "Team", id: "social" },
                ],
                _ = {
                    name: "Header",
                    components: { BaseButton: o.default },
                    directives: { clickOutside: c.a.directive },
                    data: function () {
                        return { NAV_LIST: l, scrollPosition: 0, isMenuOpened: !1 };
                    },
                    mounted: function () {
                        window.addEventListener("scroll", this.updateScroll);
                    },
                    methods: {
                        scroll: function (t) {
                            document.getElementById(t).scrollIntoView({ behavior: "smooth", block: "center" });
                        },
                        updateScroll: function () {
                            this.scrollPosition = window.scrollY;
                        },
                        toggleMenu: function () {
                            this.isMenuOpened = !this.isMenuOpened;
                        },
                        onClickOutside: function () {
                            this.isMenuOpened && (this.isMenuOpened = !1);
                        },
                    },
                },
                f = (n(227), n(34)),
                component = Object(f.a)(
                    _,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            d = t._self._c || e;
                        return d("header", { class: ["header", { scrolled: t.scrollPosition > 400 }] }, [
                            d("div", { staticClass: "container header__container" }, [
                                t._m(0),
                                t._v(" "),
                                d(
                                    "div",
                                    { staticClass: "nav" },
                                    [
                                        d(
                                            "ul",
                                            { staticClass: "nav__container" },
                                            t._l(t.NAV_LIST, function (e, n) {
                                                return d("li", { key: n, staticClass: "nav__item" }, [
                                                    "pricelist" == e.id
                                                        ? d("a", { staticClass: "nav_link", attrs: { href: e.link } }, [t._v(t._s(e.label))])
                                                        : d(
                                                              "a",
                                                              {
                                                                  staticClass: "nav_link",
                                                                  on: {
                                                                      click: function (n) {
                                                                          return t.scroll(e.id);
                                                                      },
                                                                  },
                                                              },
                                                              [t._v(t._s(e.label))]
                                                          ),
                                                ]);
                                            }),
                                            0
                                        ),
                                        t._v(" "),
                                        d("BaseButton", { staticClass: "buy_btn", attrs: { link: "https://app.uniswap.org/#/swap?outputCurrency=0xb525ecee288b99216cd481c56b6efbdbe9bf90b5&use=V2", label: "Buy Kuma Inu", size: "sm" } }),
                                    ],
                                    1
                                ),
                                t._v(" "),
                                t.isMenuOpened
                                    ? t._e()
                                    : d(
                                          "div",
                                          {
                                              staticClass: "burger",
                                              on: {
                                                  click: function (e) {
                                                      return e.stopPropagation(), t.toggleMenu(e);
                                                  },
                                              },
                                          },
                                          [d("img", { attrs: { src: n(223), alt: "" } })]
                                      ),
                                t._v(" "),
                                d(
                                    "div",
                                    { directives: [{ name: "click-outside", rawName: "v-click-outside", value: t.onClickOutside, expression: "onClickOutside" }], class: ["mobile__nav", { active: t.isMenuOpened }] },
                                    [
                                        d(
                                            "div",
                                            {
                                                staticClass: "cross",
                                                on: {
                                                    click: function (e) {
                                                        return e.stopPropagation(), t.toggleMenu(e);
                                                    },
                                                },
                                            },
                                            [d("img", { attrs: { src: n(224), alt: "" } })]
                                        ),
                                        t._v(" "),
                                        d(
                                            "ul",
                                            { staticClass: "burger__list" },
                                            t._l(t.NAV_LIST, function (e, n) {
                                                return d("li", { key: n, staticClass: "nav__item" }, [
                                                    d(
                                                        "a",
                                                        {
                                                            staticClass: "nav_link",
                                                            on: {
                                                                click: function (n) {
                                                                    return t.scroll(e.link);
                                                                },
                                                            },
                                                        },
                                                        [t._v(t._s(e.label))]
                                                    ),
                                                ]);
                                            }),
                                            0
                                        ),
                                        t._v(" "),
                                        d("BaseButton", { staticClass: "buy_btn", attrs: { link: "https://app.uniswap.org/#/swap?outputCurrency=0xb525ecee288b99216cd481c56b6efbdbe9bf90b5&use=V2", label: "Buy Kuma Inu", size: "sm" } }),
                                    ],
                                    1
                                ),
                            ]),
                        ]);
                    },
                    d,
                    !1,
                    null,
                    "045185e4",
                    null
                );
            e.default = component.exports;
            installComponents(component, { Header: n(222).default });
        },
        function (t, e) {
            t.exports =
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjEgMTcuNDAwNUgyLjlDMi40MDMyMSAxNy40MDA1IDIgMTcuNzk0OCAyIDE4LjI4MDdDMiAxOC43NjY1IDIuNDAzMjEgMTkuMTYwOCAyLjkgMTkuMTYwOEgxOS4xQzE5LjU5NjggMTkuMTYwOCAyMCAxOC43NjY1IDIwIDE4LjI4MDZDMjAgMTcuNzk0OCAxOS41OTY4IDE3LjQwMDUgMTkuMSAxNy40MDA1Wk0yLjkgNS4wNzg0N0gxOS4xQzE5LjU5NjggNS4wNzg0NyAyMCA0LjY4NDE5IDIwIDQuMTk4MzJDMjAgMy43MTI0NiAxOS41OTY4IDMuMzE4MTggMTkuMSAzLjMxODE4SDIuOUMyLjQwMzIxIDMuMzE4MjEgMiAzLjcxMjQ5IDIgNC4xOTgzNUMyIDQuNjg0MTkgMi40MDMyMSA1LjA3ODQ3IDIuOSA1LjA3ODQ3Wk0xOS4xIDEwLjM1OTRIMi45QzIuNDAzMjEgMTAuMzU5NCAyIDEwLjc1MzcgMiAxMS4yMzk1QzIgMTEuNzI1NCAyLjQwMzIxIDEyLjExOTcgMi45IDEyLjExOTdIMTkuMUMxOS41OTY4IDEyLjExOTcgMjAgMTEuNzI1NCAyMCAxMS4yMzk1QzIwIDEwLjc1MzcgMTkuNTk2OCAxMC4zNTk0IDE5LjEgMTAuMzU5NFoiIGZpbGw9IiMwMDAiLz4KPC9zdmc+Cg==";
        },
        function (t, e) {
            t.exports =
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExIDNDNi42IDMgMyA2LjYgMyAxMUMzIDE1LjQgNi42IDE5IDExIDE5QzE1LjQgMTkgMTkgMTUuNCAxOSAxMUMxOSA2LjYgMTUuNCAzIDExIDNaTTE1IDEzLjg4TDEzLjg4IDE1TDExIDEyLjEyTDguMTIgMTVMNyAxMy44OEw5Ljg4IDExTDcgOC4xMkw4LjEyIDdMMTEgOS44OEwxMy44OCA3TDE1IDguMTJMMTIuMTIgMTFMMTUgMTMuODhaIiBmaWxsPSIjMDAwIi8+Cjwvc3ZnPgo=";
        },
        function (t, e, n) {
            t.exports = n.p + "img/logo.ac20197.png";
        },
        function (t, e, n) {
            t.exports = (function () {
                var t = "undefined" != typeof window,
                    e = "undefined" != typeof navigator,
                    n = t && ("ontouchstart" in window || (e && navigator.msMaxTouchPoints > 0)) ? ["touchstart"] : ["click"];
                function i(t) {
                    var e = t.event,
                        n = t.handler;
                    (0, t.middleware)(e) && n(e);
                }
                function d(t, e) {
                    var d = (function (t) {
                            var e = "function" == typeof t;
                            if (!e && "object" != typeof t) throw new Error("v-click-outside: Binding value must be a function or an object");
                            return {
                                handler: e ? t : t.handler,
                                middleware:
                                    t.middleware ||
                                    function (t) {
                                        return t;
                                    },
                                events: t.events || n,
                                isActive: !(!1 === t.isActive),
                                detectIframe: !(!1 === t.detectIframe),
                            };
                        })(e.value),
                        o = d.handler,
                        r = d.middleware,
                        a = d.detectIframe;
                    if (d.isActive) {
                        if (
                            ((t["__v-click-outside"] = d.events.map(function (e) {
                                return {
                                    event: e,
                                    srcTarget: document.documentElement,
                                    handler: function (e) {
                                        return (function (t) {
                                            var e = t.el,
                                                n = t.event,
                                                d = t.handler,
                                                o = t.middleware,
                                                r = n.path || (n.composedPath && n.composedPath());
                                            (r ? r.indexOf(e) < 0 : !e.contains(n.target)) && i({ event: n, handler: d, middleware: o });
                                        })({ el: t, event: e, handler: o, middleware: r });
                                    },
                                };
                            })),
                            a)
                        ) {
                            var c = {
                                event: "blur",
                                srcTarget: window,
                                handler: function (e) {
                                    return (function (t) {
                                        var e = t.el,
                                            n = t.event,
                                            d = t.handler,
                                            o = t.middleware;
                                        setTimeout(function () {
                                            var t = document.activeElement;
                                            t && "IFRAME" === t.tagName && !e.contains(t) && i({ event: n, handler: d, middleware: o });
                                        }, 0);
                                    })({ el: t, event: e, handler: o, middleware: r });
                                },
                            };
                            t["__v-click-outside"] = [].concat(t["__v-click-outside"], [c]);
                        }
                        t["__v-click-outside"].forEach(function (e) {
                            var n = e.event,
                                i = e.srcTarget,
                                d = e.handler;
                            return setTimeout(function () {
                                t["__v-click-outside"] && i.addEventListener(n, d, !1);
                            }, 0);
                        });
                    }
                }
                function o(t) {
                    (t["__v-click-outside"] || []).forEach(function (t) {
                        return t.srcTarget.removeEventListener(t.event, t.handler, !1);
                    }),
                        delete t["__v-click-outside"];
                }
                var r = t
                    ? {
                          bind: d,
                          update: function (t, e) {
                              var n = e.value,
                                  i = e.oldValue;
                              JSON.stringify(n) !== JSON.stringify(i) && (o(t), d(t, { value: n }));
                          },
                          unbind: o,
                      }
                    : {};
                return {
                    install: function (t) {
                        t.directive("click-outside", r);
                    },
                    directive: r,
                };
            })();
        },
        function (t, e, n) {
            "use strict";
            n(209);
        },
        function (t, e, n) {
            var d = n(78)(!1);
            d.push([
                t.i,
                '.header[data-v-045185e4]{position:fixed;top:0;left:0;right:0;transition:background-color .3s ease-out;z-index:10}.header.scrolled[data-v-045185e4]{background-color:var(--brand)}.header__container[data-v-045185e4]{display:flex;justify-content:space-between;align-items:center;max-width:1200px;padding:8px 0}.logo__container[data-v-045185e4]{max-width:140px;display:flex;align-items:center;justify-content:center}.logo__container img[data-v-045185e4]{width:100%}.nav[data-v-045185e4]{display:flex;align-items:center}@media screen and (max-width:767px){.nav[data-v-045185e4]{display:none}}.nav__container[data-v-045185e4]{display:flex;list-style:none}.nav_link[data-v-045185e4]{font-family:"Lato";font-style:normal;font-weight:600;font-size:16px;line-height:17px;color:#fff;margin:0 17px;text-decoration:none}.nav__item[data-v-045185e4]{margin:20px 0}.nav__item[data-v-045185e4]:hover{opacity:.8;transform:scale(1.05)}.nav__item a[data-v-045185e4]:hover{cursor:pointer}.buy_btn[data-v-045185e4]{margin-left:20px}@media screen and (max-width:767px){.buy_btn[data-v-045185e4]{margin:0}}.burger_menu[data-v-045185e4]{display:none}@media screen and (max-width:767px){.burger_menu[data-v-045185e4]{display:block}}.burger__list[data-v-045185e4]{list-style:none;padding:0;margin-bottom:16px;text-align:left}.burger[data-v-045185e4]{position:absolute;width:18px;height:16px;right:20px;top:16px;cursor:pointer;display:none;z-index:12}@media screen and (max-width:767px){.burger[data-v-045185e4]{display:block}}.burger img[data-v-045185e4]{width:100%}.mobile__nav[data-v-045185e4]{display:none;position:absolute;right:0;top:0;bottom:0;background-color:var(--brand);transform:translateX(100%);transition:all .3s ease-out;height:100vh;width:200px;padding:0 12px}.mobile__nav.active[data-v-045185e4]{transform:none}@media screen and (max-width:767px){.mobile__nav[data-v-045185e4]{display:block}}.cross[data-v-045185e4]{position:absolute;width:18px;height:16px;right:20px;top:16px;cursor:pointer;z-index:12}.cross img[data-v-045185e4]{width:100%}',
                "",
            ]),
                (t.exports = d);
        },
        function (t, e, n) {
            "use strict";
            n(212);
        },
        function (t, e, n) {
            var d = n(78)(!1);
            d.push([
                t.i,
                '.card[data-v-6479949e]{width:100%}.products_container[data-v-6479949e]{max-width:1376px;margin:0 auto}.cards__container[data-v-6479949e]{display:flex;justify-content:space-between}.products_container h2[data-v-6479949e]{font-family:"Patrick";font-style:normal;font-weight:400;font-size:48px;line-height:65px;text-align:center;color:#232323}@media screen and (max-width:1200px){.card[data-v-6479949e]{display:block;padding:0 10px}.cards__container[data-v-6479949e]{justify-content:space-between}}@media screen and (max-width:992px){.card[data-v-6479949e]{display:block;padding:0 10px}}.card[data-v-6479949e]{display:block;padding:0 10px}@media screen and (max-width:576px){.card[data-v-6479949e]{display:block;padding:0 10px}.cards__container[data-v-6479949e]{flex-direction:column;width:100%;display:block;justify-content:center}}',
                "",
            ]),
                (t.exports = d);
        },
        function (t, e, n) {
            "use strict";
            n.r(e);
            var d = n(279),
                o = n(205);
            for (var r in o)
                ["default"].indexOf(r) < 0 &&
                    (function (t) {
                        n.d(e, t, function () {
                            return o[t];
                        });
                    })(r);
            n(239);
            var c = n(34),
                component = Object(c.a)(o.default, d.a, d.b, !1, null, "3e6d514e", null);
            e.default = component.exports;
        },
        function (t, e, n) {
            t.exports = n.p + "img/paw.2f5d8dd.png";
        },
        function (t, e, n) {
            t.exports = n.p + "img/vector-road1.ef4d5a0.png";
        },
        function (t, e, n) {
            t.exports = n.p + "img/vector-road2.bde61f4.png";
        },
        function (t, e, n) {
            t.exports = n.p + "img/road1.0697dfa.png";
        },
        function (t, e, n) {
            t.exports = n.p + "img/road2.fafd6fc.png";
        },
        function (t, e, n) {
            t.exports = n.p + "img/road3.c2ec31c.png";
        },
        function (t, e, n) {
            t.exports = n.p + "img/road4.d11b859.png";
        },
        function (t, e, n) {
            "use strict";
            n(213);
        },
        function (t, e, n) {
            var d = n(78)(!1);
            d.push([
                t.i,
                '.roadmap__container[data-v-3e6d514e]{padding-top:100px;position:relative}@media screen and (max-width:767px){.roadmap__container[data-v-3e6d514e]{padding-top:32px}}.roadmap__title[data-v-3e6d514e]{font-family:"Patrick";font-style:normal;font-weight:400;font-size:48px;line-height:65px}@media screen and (max-width:767px){.roadmap__title[data-v-3e6d514e]{font-size:36px;line-height:1.3}.roadmap__title h2[data-v-3e6d514e]{margin:0 0 16px}}.roadmap__inner[data-v-3e6d514e]{font-family:"Quicksand";font-style:normal;font-weight:500;font-size:20px;line-height:28px}@media screen and (max-width:767px){.roadmap__inner[data-v-3e6d514e]{font-size:18px;line-height:25px}.roadmap__inner h5[data-v-3e6d514e]{margin:0 0 12px}}.paw[data-v-3e6d514e]{position:absolute;top:155px;right:-100px;width:1250px}.paw img[data-v-3e6d514e]{width:100%}.vector__first[data-v-3e6d514e]{position:absolute;top:370px;right:42%;width:273px}.vector__first img[data-v-3e6d514e]{width:100%}.vector__second[data-v-3e6d514e]{position:absolute;top:925px;right:42%;width:295px}.vector__second img[data-v-3e6d514e]{width:100%}.list[data-v-3e6d514e]{display:flex;flex-wrap:wrap;justify-content:space-between}@media screen and (max-width:767px){.list[data-v-3e6d514e]{flex-wrap:nowrap;flex-direction:column;align-items:center;margin:0}}.roadmap__list[data-v-3e6d514e]{margin-bottom:150px;flex-direction:column;list-style:none;align-items:start;justify-content:start;font-family:"Quicksand";font-style:normal;font-weight:500;font-size:20px;line-height:28px;width:35%;text-align:left}.roadmap__list li[data-v-3e6d514e]{margin-bottom:20px}@media screen and (max-width:767px){.roadmap__list li[data-v-3e6d514e]{margin-bottom:12px}}@media screen and (max-width:767px){.roadmap__list[data-v-3e6d514e]{width:100%;font-size:16px;line-height:18px;margin:0 auto 16px;max-width:310px}.roadmap__list ul[data-v-3e6d514e]{padding:0}}.roadmap__list ul[data-v-3e6d514e]{list-style:none}@media screen and (max-width:767px){.bg[data-v-3e6d514e]{display:none}}@media screen and (max-width:1200px){.paw[data-v-3e6d514e],.vector__first[data-v-3e6d514e],.vector__second[data-v-3e6d514e]{display:none}}@media screen and (max-width:992px){.paw[data-v-3e6d514e],.vector__first[data-v-3e6d514e],.vector__second[data-v-3e6d514e]{display:none}}@media screen and (max-width:768px){.paw[data-v-3e6d514e],.vector__first[data-v-3e6d514e],.vector__second[data-v-3e6d514e]{display:none}}@media screen and (max-width:576px){.roadmap__inner h5[data-v-3e6d514e]{padding:0 20px}.paw[data-v-3e6d514e],.vector__first[data-v-3e6d514e],.vector__second[data-v-3e6d514e]{display:none}}',
                "",
            ]),
                (t.exports = d);
        },
        function (t, e, n) {
            t.exports = n.p + "img/direction.d451afc.png";
        },
        function (t, e, n) {
            "use strict";
            n(214);
        },
        function (t, e, n) {
            var d = n(78)(!1);
            d.push([
                t.i,
                '.direction[data-v-a834781a]{padding-bottom:110px}.direction__container[data-v-a834781a]{background:#fff;border:3px solid #e8891d;box-sizing:border-box;border-radius:16px;position:relative;display:flex;flex-direction:column;align-items:center;padding:16px}.card__container[data-v-a834781a]{width:45%;background:#f6a32f;border-radius:16px;padding:20px 10px;display:flex;justify-content:center}@media screen and (max-width:767px){.card__container[data-v-a834781a]{width:100%}}.btn__direction[data-v-a834781a]{opacity:1!important;color:var(--brand)!important;background-color:rgba(246,163,47,.5)!important}.title__direction[data-v-a834781a]{font-family:"Patrick";font-style:normal;font-weight:400;font-size:48px;line-height:65px;margin:0 0 16px}.title__direction .orange[data-v-a834781a]{color:var(--brand)}@media screen and (max-width:767px){.title__direction h2[data-v-a834781a]{font-size:36px;line-height:1.3;margin:0}}.inner__direction[data-v-a834781a]{font-family:"Quicksand";font-weight:500;font-size:20px;line-height:28px;margin:0 0 16px}@media screen and (max-width:767px){.inner__direction h3[data-v-a834781a]{font-size:18px;line-height:1.3;margin:16px 0 12px}}.text__direction[data-v-a834781a]{display:flex;justify-content:center;max-width:712px;font-family:"Quicksand";font-weight:500;font-size:14px;line-height:24px}@media screen and (max-width:767px){.text__direction p[data-v-a834781a]{margin:0}}.img__direction[data-v-a834781a]{position:absolute;bottom:-175px;right:-140px;z-index:2;width:294px}.img__direction img[data-v-a834781a]{width:100%}@media screen and (max-width:1200px){.img__direction[data-v-a834781a]{display:flex;justify-content:space-around;position:relative;top:0;right:0}.text__direction[data-v-a834781a]{padding:0 15px}}@media screen and (max-width:992px){.img__direction[data-v-a834781a]{display:flex;justify-content:space-around;position:relative;top:0;right:0}.text__direction[data-v-a834781a]{padding:0 15px}}@media screen and (max-width:768px){.img__direction[data-v-a834781a]{display:flex;justify-content:space-around;position:relative;top:0;right:0}.text__direction[data-v-a834781a]{padding:0 15px}}@media screen and (max-width:576px){.direction[data-v-a834781a]{padding:0 10px 30px;margin:32px 0}.img__direction[data-v-a834781a]{display:flex;justify-content:space-around;position:relative;top:0;right:0;width:120px;margin-top:16px}.img__direction img[data-v-a834781a]{width:100%}.text__direction[data-v-a834781a]{padding:0 15px}.title__direction h2[data-v-a834781a]{font-size:32px}}',
                "",
            ]),
                (t.exports = d);
        },
        function (t, e, n) {
            t.exports = n.p + "img/vector-footer.fa9d394.png";
        },
        function (t, e, n) {
            "use strict";
            n(215);
        },
        function (t, e, n) {
            var d = n(78)(!1);
            d.push([
                t.i,
                '.footer__container[data-v-91d32b3c]{max-width:1376px;background:#f6a32f;border-radius:16px;margin:0 auto 32px}.container[data-v-91d32b3c]{display:flex;align-items:flex-start;justify-content:center;max-width:854px;margin:0 auto;padding:72px 0 83px}@media screen and (max-width:767px){.container[data-v-91d32b3c]{align-items:center;padding:16px}}.footer__title[data-v-91d32b3c]{font-family:"Patrick";font-style:normal;font-weight:400;font-size:48px;line-height:65px;text-align:center;color:#fff;margin:0 0 10px}.footer__inner[data-v-91d32b3c]{margin-top:-20px;font-style:normal;font-size:20px;line-height:28px}.footer__inner[data-v-91d32b3c],.footer__text[data-v-91d32b3c]{font-family:"Quicksand";font-weight:500;color:#fff}.footer__text[data-v-91d32b3c]{padding-top:28px;font-size:14px;line-height:24px;margin:0;max-width:346px;text-align:center}.footer__btn[data-v-91d32b3c]{margin-top:35px;display:flex;align-items:center;justify-content:center}.footer__vector[data-v-91d32b3c]{padding-top:60px;margin-right:50px}@media screen and (max-width:1200px){.footer__container[data-v-91d32b3c]{width:960px}.container[data-v-91d32b3c]{flex-direction:column;align-items:center}.footer__vector[data-v-91d32b3c]{display:none}.footer__text[data-v-91d32b3c]{padding:25px}.footer__btn[data-v-91d32b3c]{margin:0 0 30px}}@media screen and (max-width:992px){.footer__container[data-v-91d32b3c]{width:720px}.container[data-v-91d32b3c]{flex-direction:column}.footer__vector[data-v-91d32b3c]{display:none}.footer__text[data-v-91d32b3c]{padding:25px}.footer__btn[data-v-91d32b3c]{margin:0 0 30px}}@media screen and (max-width:768px){.footer__container[data-v-91d32b3c]{width:540px}.container[data-v-91d32b3c]{flex-direction:column;align-items:center}.footer__vector[data-v-91d32b3c]{display:none}.footer__text[data-v-91d32b3c]{padding:25px}.footer__btn[data-v-91d32b3c]{margin:0 0 30px}}@media screen and (max-width:576px){.footer__container[data-v-91d32b3c]{width:90%}.container[data-v-91d32b3c]{flex-direction:column}.footer__vector[data-v-91d32b3c]{display:none}.footer__text[data-v-91d32b3c]{padding:25px}.footer__btn[data-v-91d32b3c]{margin:0 0 30px}}',
                "",
            ]),
                (t.exports = d);
        },
        function (t, e, n) {
            t.exports = n.p + "img/main.408b15c.png";
        },
        function (t, e, n) {
            t.exports = n.p + "img/coin_1.c6e0848.png";
        },
        function (t, e, n) {
            t.exports = n.p + "img/coin_2.8077222.png";
        },
        function (t, e, n) {
            t.exports = n.p + "img/text.5b72668.png";
        },
        function (t, e, n) {
            "use strict";
            n(216);
        },
        function (t, e, n) {
            var d = n(78),
                o = n(152),
                r = n(253),
                c = d(!1),
                l = o(r);
            c.push([
                t.i,
                ".head[data-v-3f46854d]{width:100%;position:relative;padding-bottom:140px;padding-top:180px}.head .bg[data-v-3f46854d]{z-index:-1;position:absolute;width:100%;height:100%;top:0;left:0;right:0;background-size:cover;background-position:50%;background-repeat:no-repeat;background-image:url(" +
                    l +
                    ')}@media screen and (max-width:767px){.head[data-v-3f46854d]{padding-top:100px;padding-bottom:32px}}.container[data-v-3f46854d]{max-width:1200px}@media screen and (max-width:767px){.container[data-v-3f46854d]{display:flex;flex-direction:column;align-items:center;padding:0 12px}}.head__title[data-v-3f46854d]{margin:0;font-family:"Patrick";font-weight:600;font-size:94px;line-height:83px;max-width:275px;position:relative;z-index:2}.head__text[data-v-3f46854d],.head__title[data-v-3f46854d]{color:#fefefe;text-align:left}.head__text[data-v-3f46854d]{margin-top:36px;max-width:335px;font-family:Lato;font-style:normal;font-weight:500;font-size:16px;line-height:28px}.head__text .highlight[data-v-3f46854d]{text-decoration:underline;color:#fefefe}.main__img[data-v-3f46854d]{position:absolute;max-width:730px;width:33%;left:55%;transform:translateX(-50%);bottom:-90px;z-index:5}@media screen and (max-width:1919px){.main__img[data-v-3f46854d]{width:38%}}@media screen and (max-width:767px){.main__img[data-v-3f46854d]{position:static;transform:none;width:350px}}.main__img img[data-v-3f46854d]{width:100%}.coin[data-v-3f46854d]{position:absolute;transform:translateX(-50%)}.coin img[data-v-3f46854d]{width:100%}.coin.coin_1[data-v-3f46854d]{width:206px;right:10%;z-index:4;bottom:16px}@media screen and (max-width:767px){.coin.coin_1[data-v-3f46854d]{display:none}}.coin.coin_2[data-v-3f46854d]{width:136px;right:15%;z-index:4;bottom:50%}@media screen and (max-width:767px){.coin.coin_2[data-v-3f46854d]{left:-50px;width:50px}}.add[data-v-3f46854d]{position:absolute;right:45px;top:44%;width:205px;transform:rotate(8deg)}@media screen and (max-width:767px){.add[data-v-3f46854d]{position:static;transform:none;width:200px}}.add img[data-v-3f46854d]{width:100%}@media screen and (max-width:1200px){.head__title[data-v-3f46854d]{max-width:100%}}@media screen and (max-width:576px){.head__title[data-v-3f46854d]{width:100%}.head__text[data-v-3f46854d],.head__title[data-v-3f46854d]{max-width:none}}.fade-enter-active[data-v-3f46854d],.fade-leave-active[data-v-3f46854d]{transition:all .5s}.fade-enter[data-v-3f46854d],.fade-leave-to[data-v-3f46854d]{opacity:0;transform:translateX(-50%) translateY(20px)}.coin_1_animation-enter-active[data-v-3f46854d],.coin_1_animation-leave-active[data-v-3f46854d]{transition:all .5s}.coin_1_animation-enter[data-v-3f46854d],.coin_1_animation-leave-to[data-v-3f46854d]{opacity:0;transform:translateX(10%)}.coin_2_animation-enter-active[data-v-3f46854d],.coin_2_animation-leave-active[data-v-3f46854d]{transition:all .5s}.coin_1_animation-leave-to[data-v-3f46854d],.coin_2_animation-enter[data-v-3f46854d]{opacity:0;transform:translateX(-50%) translateY(-20px)}.bg-enter-active[data-v-3f46854d],.bg-leave-active[data-v-3f46854d]{transition:all .5s}.bg-enter[data-v-3f46854d],.bg-leave-to[data-v-3f46854d]{opacity:0;transform:translateY(10px)}.text-enter-active[data-v-3f46854d],.text-leave-active[data-v-3f46854d]{transition:all .5s}.text-enter[data-v-3f46854d],.text-leave-to[data-v-3f46854d]{transform:translateY(15px)}',
                "",
            ]),
                (t.exports = c);
        },
        function (t, e, n) {
            t.exports = n.p + "img/bg.927738f.png";
        },
        function (t, e, n) {
            t.exports = n.p + "img/coin_3.d576e32.png";
        },
        function (t, e, n) {
            t.exports = n.p + "img/coin_4.7b78201.png";
        },
        function (t, e, n) {
            t.exports = n.p + "img/paws.d9dfe9d.png";
        },
        function (t, e, n) {
            t.exports = n.p + "img/tokenomics.e8987b6.png";
        },
        function (t, e, n) {
            "use strict";
            n(218);
        },
        function (t, e, n) {
            var d = n(78)(!1);
            d.push([
                t.i,
                '.advantages[data-v-5cfeee79]{padding-top:195px;padding-bottom:50px;display:flex;align-items:center;justify-content:center;position:relative}@media screen and (max-width:767px){.advantages[data-v-5cfeee79]{padding:50px 0 32px}}.container[data-v-5cfeee79]{display:flex;align-items:stretch;justify-content:space-around;margin:0 -23px;max-width:971px}@media screen and (max-width:767px){.container[data-v-5cfeee79]{max-width:100%;box-sizing:border-box}}.advantages__card[data-v-5cfeee79]{border:3px solid var(--brand);box-sizing:border-box;border-radius:16px;position:relative;margin:0 23px;padding:75px 15px 10px;width:calc(33% - 23px)}@media screen and (max-width:767px){.advantages__card[data-v-5cfeee79]{padding:45px 12px 0}}.advantages__card .card__title[data-v-5cfeee79]{font-family:"Quicksand";font-style:normal;font-weight:700;font-size:20px;line-height:28px}@media screen and (max-width:767px){.advantages__card .card__title[data-v-5cfeee79]{margin:0 0 12px}}.advantages__card .card__text[data-v-5cfeee79]{font-family:"Quicksand";font-style:normal;font-weight:500;font-size:14px;line-height:24px}.advantages__card .card__icon[data-v-5cfeee79]{position:absolute;width:144px;top:-70px;left:50%;transform:translateX(-50%)}@media screen and (max-width:767px){.advantages__card .card__icon[data-v-5cfeee79]{width:100px;top:-50px}}.advantages__card .card__icon img[data-v-5cfeee79]{width:100%}.coin[data-v-5cfeee79]{position:absolute}.coin img[data-v-5cfeee79]{width:100%}.coin.coin_1[data-v-5cfeee79]{right:0;top:50px;width:50px}.coin.coin_2[data-v-5cfeee79]{left:0;bottom:0;width:90px}.paws[data-v-5cfeee79]{position:absolute;bottom:-180px;right:24%;width:180px}.paws img[data-v-5cfeee79]{width:100%}@media screen and (max-width:576px){.container[data-v-5cfeee79]{display:block;padding:16px}.advantages__card[data-v-5cfeee79]{width:100%;margin:70px 0 0}.coin img[data-v-5cfeee79],.paws[data-v-5cfeee79]{display:none}}',
                "",
            ]),
                (t.exports = d);
        },
        function (t, e, n) {
            t.exports = n.p + "img/settings.b7b8141.png";
        },
        function (t, e, n) {
            t.exports = n.p + "img/ETH.d62fc73.png";
        },
        function (t, e, n) {
            t.exports = n.p + "img/Swap.99357ec.png";
        },
        function (t, e, n) {
            t.exports = n.p + "img/Hold.2d7568f.png";
        },
        function (t, e, n) {
            t.exports = n.p + "img/arrow.f51dd60.png";
        },
        function (t, e, n) {
            "use strict";
            n(219);
        },
        function (t, e, n) {
            var d = n(78)(!1);
            d.push([
                t.i,
                '.buy[data-v-e2785bf2]{margin-top:100px;padding-bottom:100px}@media screen and (max-width:767px){.buy[data-v-e2785bf2]{margin-top:0;padding-top:24px;padding-bottom:32px}}.container[data-v-e2785bf2]{display:flex;flex-direction:column;align-items:center}.buy__title[data-v-e2785bf2]{font-family:"Patrick";font-style:normal;font-weight:400;font-size:48px;line-height:65px;color:var(--text-primary);margin:0}.buy__title .orange[data-v-e2785bf2]{color:var(--brand)}.buy__subtitle[data-v-e2785bf2]{margin-top:10px;margin-bottom:32px;font-family:Quicksand;font-style:normal;font-weight:700;font-size:20px;line-height:28px;color:var(--text-primary)}.copy__container[data-v-e2785bf2]{display:flex;justify-content:space-between;align-items:center;padding:19px 40px;background:#f9f9f9;border-radius:16px;width:100%;max-width:600px}.copy_address[data-v-e2785bf2]{font-family:Quicksand;font-style:normal;font-weight:400;font-size:20px;line-height:28px;color:var(--text-primary)}.copy_icon[data-v-e2785bf2]{cursor:pointer;transition:opacity .3s ease-out;width:24px}.copy_icon img[data-v-e2785bf2]{width:100%}.copy_icon[data-v-e2785bf2]:hover{opacity:.5}.card__container[data-v-e2785bf2]{margin-top:100px;display:flex;align-items:center;justify-content:space-between;width:100%;max-width:1376px;padding:0 16px}@media screen and (max-width:1400px){.card__container[data-v-e2785bf2]{max-width:1012px}}@media screen and (max-width:124px){.card__container[data-v-e2785bf2]{max-width:880px}}@media screen and (max-width:767px){.card__container[data-v-e2785bf2]{margin-top:16px}}.card__container .buy__card[data-v-e2785bf2]{display:flex;flex-direction:column;align-items:none;text-align:left}@media screen and (max-width:767px){.card__container .buy__card[data-v-e2785bf2]{text-align:center;align-items:center}}.card__container .card__icon[data-v-e2785bf2]{width:75px;margin-bottom:24px}@media screen and (max-width:767px){.card__container .card__icon[data-v-e2785bf2]{width:55px;margin-bottom:12px}}.card__container .card__icon img[data-v-e2785bf2]{width:100%}.card__container .card__title[data-v-e2785bf2]{margin-bottom:16px;font-family:"Quicksand";font-style:normal;font-weight:700;font-size:20px;line-height:28px;color:var(--text-primary)}@media screen and (max-width:767px){.card__container .card__title[data-v-e2785bf2]{font-size:18px;margin-bottom:8px}}.card__container .card__title .orange[data-v-e2785bf2]{color:var(--brand)}.card__container .card__text[data-v-e2785bf2]{font-family:"Quicksand";font-style:normal;font-weight:500;font-size:14px;line-height:28px;color:var(--text-primary)}@media screen and (max-width:767px){.card__container .card__text[data-v-e2785bf2]{margin-bottom:8px}.card__container .card__text h4[data-v-e2785bf2]{margin:0}}.card__container .card__text .link[data-v-e2785bf2]{text-decoration:underline;color:#1a1e25}.buy__block[data-v-e2785bf2]{display:flex;flex-direction:column;align-items:center;font-family:"Patrick";font-style:normal;font-weight:400;position:relative}.buy__block .block__title[data-v-e2785bf2]{margin-bottom:32px;margin-top:95px;font-size:27px;line-height:28px}.buy__block .block__subtitle[data-v-e2785bf2]{margin:41px 0 32px;font-size:28px;line-height:28px}.buy__block .arrow__icon[data-v-e2785bf2]{position:absolute;width:120px;top:104px;right:-88px}.buy__block .arrow__icon img[data-v-e2785bf2]{width:100%}@media screen and (max-width:992px){.buy__title[data-v-e2785bf2]{padding:0 20px}.buy__block .block__title[data-v-e2785bf2]{padding:0 10px}.buy__block[data-v-e2785bf2]{padding:10px 15px}.buy__block .arrow__icon img[data-v-e2785bf2]{display:none}.copy__container[data-v-e2785bf2]{padding:15px 30px;width:300px}.copy_address[data-v-e2785bf2]{font-size:10px}}@media screen and (max-width:768px){.buy__title[data-v-e2785bf2]{padding:0 20px}.buy__block .block__title[data-v-e2785bf2]{padding:0 10px}.buy__block[data-v-e2785bf2]{padding:10px 15px}.buy__block .arrow__icon img[data-v-e2785bf2]{display:none}.card__container[data-v-e2785bf2]{justify-content:start;flex-direction:column}.copy__container[data-v-e2785bf2]{padding:15px 30px;width:300px}.copy_address[data-v-e2785bf2]{font-size:10px}}@media screen and (max-width:576px){.buy__title[data-v-e2785bf2]{padding:0 20px}.buy__block .block__title[data-v-e2785bf2]{padding:0 10px}.buy__block[data-v-e2785bf2]{padding:10px 15px}.buy__block .arrow__icon img[data-v-e2785bf2]{display:none}.card__container[data-v-e2785bf2]{justify-content:start;flex-direction:column}.copy__container[data-v-e2785bf2]{padding:15px 30px;width:300px}.copy_address[data-v-e2785bf2]{font-size:10px}.buy__title[data-v-e2785bf2]{font-size:36px}.card__container .buy__card[data-v-e2785bf2]{text-align:center;align-items:center;padding:0}}',
                "",
            ]),
                (t.exports = d);
        },
        function (t, e, n) {
            "use strict";
            n(220);
        },
        function (t, e, n) {
            var d = n(78)(!1);
            d.push([
                t.i,
                ".smm[data-v-1d5029a8]{display:flex;align-items:center;justify-content:center;width:100%;padding:12px 0 32px}.smm .smm__item[data-v-1d5029a8]{width:48px;margin:0 8px;transition:all .2 ease-out}.smm .smm__item[data-v-1d5029a8]:hover{opacity:.8;transform:scale(1.05)}@media screen and (max-width:767px){.smm .smm__item[data-v-1d5029a8]{width:32px;margin:0 4px}}.smm .smm__item img[data-v-1d5029a8]{width:100%}",
                "",
            ]),
                (t.exports = d);
        },
        function (t, e, n) {
            "use strict";
            n(221);
        },
        function (t, e, n) {
            var d = n(78)(!1);
            d.push([
                t.i,
                '.donating[data-v-58ce1007]{padding-bottom:100px}@media screen and (max-width:767px){.donating[data-v-58ce1007]{margin-top:0;padding-top:24px;padding-bottom:32px}}.container[data-v-58ce1007]{display:flex;flex-direction:column;align-items:center}.donating__title[data-v-58ce1007]{font-family:"Patrick";font-style:normal;font-weight:400;font-size:48px;line-height:65px;color:var(--text-primary);margin:0}.donating__title .orange[data-v-58ce1007]{color:var(--brand)}.donating__subtitle[data-v-58ce1007]{margin-top:10px;margin-bottom:32px;font-family:Quicksand;font-style:normal;font-weight:700;font-size:20px;line-height:28px;color:var(--text-primary)}.copy__container[data-v-58ce1007]{display:flex;justify-content:space-between;align-items:center;padding:19px 40px;background:#f9f9f9;border-radius:16px;width:100%;max-width:600px}.copy_address[data-v-58ce1007]{font-family:Quicksand;font-style:normal;font-weight:400;font-size:20px;line-height:28px;color:var(--text-primary)}.copy_icon[data-v-58ce1007]{cursor:pointer;transition:opacity .3s ease-out;width:24px}.copy_icon img[data-v-58ce1007]{width:100%}.copy_icon[data-v-58ce1007]:hover{opacity:.5}.card__container[data-v-58ce1007]{margin-top:100px;display:flex;align-items:center;justify-content:space-between;width:100%;max-width:1376px;padding:0 16px}@media screen and (max-width:1400px){.card__container[data-v-58ce1007]{max-width:1012px}}@media screen and (max-width:124px){.card__container[data-v-58ce1007]{max-width:880px}}@media screen and (max-width:767px){.card__container[data-v-58ce1007]{margin-top:16px}}.card__container .donating__card[data-v-58ce1007]{display:flex;flex-direction:column;align-items:none;text-align:left}@media screen and (max-width:767px){.card__container .donating__card[data-v-58ce1007]{text-align:center;align-items:center}}.card__container .card__icon[data-v-58ce1007]{width:75px;margin-bottom:24px}@media screen and (max-width:767px){.card__container .card__icon[data-v-58ce1007]{width:55px;margin-bottom:12px}}.card__container .card__icon img[data-v-58ce1007]{width:100%}.card__container .card__title[data-v-58ce1007]{margin-bottom:16px;font-family:"Quicksand";font-style:normal;font-weight:700;font-size:20px;line-height:28px;color:var(--text-primary)}@media screen and (max-width:767px){.card__container .card__title[data-v-58ce1007]{font-size:18px;margin-bottom:8px}}.card__container .card__title .orange[data-v-58ce1007]{color:var(--brand)}.card__container .card__text[data-v-58ce1007]{font-family:"Quicksand";font-style:normal;font-weight:500;font-size:14px;line-height:28px;color:var(--text-primary)}@media screen and (max-width:767px){.card__container .card__text[data-v-58ce1007]{margin-bottom:8px}.card__container .card__text h4[data-v-58ce1007]{margin:0}}.card__container .card__text .link[data-v-58ce1007]{text-decoration:underline;color:#1a1e25}.donating__block[data-v-58ce1007]{display:flex;flex-direction:column;align-items:center;font-family:"Patrick";font-style:normal;font-weight:400;position:relative}.donating__block .block__title[data-v-58ce1007]{margin-bottom:32px;margin-top:95px;font-size:27px;line-height:28px}.donating__block .block__subtitle[data-v-58ce1007]{margin:41px 0 32px;font-size:28px;line-height:28px}.donating__block .detail__title[data-v-58ce1007]{display:flex}.donating__block .detail__subtitle[data-v-58ce1007]{margin:30px 10px;font-family:Quicksand;font-weight:500;font-size:14px;font-style:normal;color:#585c6f;line-height:24px}.donating__block .arrow__icon[data-v-58ce1007]{position:absolute;width:120px;top:104px;right:-88px}.donating__block .arrow__icon img[data-v-58ce1007]{width:100%}@media screen and (max-width:992px){.donating__title[data-v-58ce1007]{padding:0 20px}.donating__block .block__title[data-v-58ce1007]{padding:0 10px}.donating__block[data-v-58ce1007]{padding:10px 15px}.donating__block .arrow__icon img[data-v-58ce1007]{display:none}.copy__container[data-v-58ce1007]{padding:15px 30px;width:300px}.copy_address[data-v-58ce1007]{font-size:10px}}@media screen and (max-width:768px){.donating__title[data-v-58ce1007]{padding:0 20px}.donating__block .block__title[data-v-58ce1007]{padding:0 10px}.donating__block[data-v-58ce1007]{padding:10px 15px}.donating__block .arrow__icon img[data-v-58ce1007]{display:none}.card__container[data-v-58ce1007]{justify-content:start;flex-direction:column}.copy__container[data-v-58ce1007]{padding:15px 30px;width:300px}.copy_address[data-v-58ce1007]{font-size:10px}}@media screen and (max-width:576px){.donating__title[data-v-58ce1007]{padding:0 20px}.donating__block .block__title[data-v-58ce1007]{padding:0 10px}.donating__block[data-v-58ce1007]{padding:10px 15px}.donating__block .arrow__icon img[data-v-58ce1007]{display:none}.card__container[data-v-58ce1007]{justify-content:start;flex-direction:column}.copy__container[data-v-58ce1007]{padding:15px 30px;width:300px}.copy_address[data-v-58ce1007]{font-size:10px}.donating__title[data-v-58ce1007]{font-size:36px}.card__container .donating__card[data-v-58ce1007]{text-align:center;align-items:center;padding:0}}',
                "",
            ]),
                (t.exports = d);
        },
        function (t, e, n) {
            "use strict";
            n.r(e);
            var d = n(208),
                o = [
                    { title: "Kuma Breeder", text: "Yield Farming Protocol for meme coins. Deposit your meme coins, earn passive income.", btn: { label: "Go to the App", link: "https://app.kumatoken.com" } },
                    { title: "Kuma Dex", text: "Decentralized, vAMM based perpetual contract trading protocol for meme coins.Up to 25x long/short leverage trading.", btn: { label: "Coming Soon", link: "1", disabled: !0 } },
                ],
                r = {
                    name: "Products",
                    components: { ProductCard: d.default },
                    data: function () {
                        return { CARD_LIST: o };
                    },
                },
                c = (n(229), n(34)),
                component = Object(c.a)(
                    r,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", { staticClass: "products_container" }, [
                            n("h2", [t._v("Our new products:")]),
                            t._v(" "),
                            n("div", { staticClass: "card" }, [
                                n(
                                    "div",
                                    { staticClass: "cards__container" },
                                    t._l(t.CARD_LIST, function (t, e) {
                                        return n("ProductCard", { key: e, attrs: { title: t.title, text: t.text, btn: t.btn } });
                                    }),
                                    1
                                ),
                            ]),
                        ]);
                    },
                    [],
                    !1,
                    null,
                    "6479949e",
                    null
                );
            e.default = component.exports;
            installComponents(component, { ProductCard: n(208).default });
        },
        function (t, e, n) {
            "use strict";
            n.r(e);
            var d = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("h2", { staticClass: "title__direction" }, [t._v("\n      Our\n      "), n("span", { staticClass: "orange" }, [t._v("Direction")])]);
                    },
                    function () {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e("div", { staticClass: "img__direction" }, [e("img", { attrs: { src: n(241), alt: "" } })]);
                    },
                ],
                o = {
                    components: { BaseButton: n(201).default },
                    data: function () {
                        return {
                            inner: "Whitepaper",
                            text:
                                "Our direction is simple: we want to keep this token useful and valuable. To achieve that we have planned few decentralized apps that will increase the value of $KUMA and grow the community. We did not use any advanced functions in our tokenomics because we want to keep it as simple as possible and fully focus on bringing practical use of $KUMA token in our future decentralized applications.",
                        };
                    },
                },
                r = (n(242), n(34)),
                component = Object(r.a)(
                    o,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", { staticClass: "direction" }, [
                            n(
                                "div",
                                { staticClass: "direction__container container" },
                                [
                                    t._m(0),
                                    t._v(" "),
                                    n("h3", { staticClass: "inner__direction" }, [t._v("\n      " + t._s(t.inner) + "\n    ")]),
                                    t._v(" "),
                                    n("BaseButton", { staticClass: "btn__direction", attrs: { label: "Coming Soon", size: "md", disabled: "" } }),
                                    t._v(" "),
                                    t._m(1),
                                ],
                                1
                            ),
                        ]);
                    },
                    d,
                    !1,
                    null,
                    "a834781a",
                    null
                );
            e.default = component.exports;
        },
        function (t, e, n) {
            "use strict";
            n.r(e);
            var d = [
                    function () {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e("div", { staticClass: "footer__vector" }, [e("img", { attrs: { src: n(244), alt: "" } })]);
                    },
                ],
                o = {
                    name: "Header",
                    components: { BaseButton: n(201).default },
                    data: function () {
                        return {
                            title: "The Team",
                            inner: "We are hiring! Feel free to contact.",
                            text: "Kuma Inu is hiring developers. We are always happy to expand the team!",
                            btn: { label: "Contact Us", link: "mailto:contact@kumatoken.com" },
                        };
                    },
                },
                r = (n(245), n(34)),
                component = Object(r.a)(
                    o,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", { staticClass: "footer__container" }, [
                            n("div", { staticClass: "container" }, [
                                n("div", { staticClass: "left" }, [
                                    n("h3", { staticClass: "footer__title" }, [t._v(t._s(t.title))]),
                                    t._v(" "),
                                    n("div", { staticClass: "footer__inner" }, [n("h4", [t._v(t._s(t.inner))])]),
                                    t._v(" "),
                                    n("p", { staticClass: "footer__text" }, [t._v(t._s(t.text))]),
                                ]),
                                t._v(" "),
                                t._m(0),
                                t._v(" "),
                                n("div", { staticClass: "right" }, [n("div", { staticClass: "footer__btn" }, [n("BaseButton", { attrs: { link: t.btn.link, label: t.btn.label, size: "md" } })], 1)]),
                            ]),
                        ]);
                    },
                    d,
                    !1,
                    null,
                    "91d32b3c",
                    null
                );
            e.default = component.exports;
        },
        function (t, e, n) {
            "use strict";
            n.r(e);
            var d = [
                    function () {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e("div", { staticClass: "add" }, [e("img", { attrs: { src: n(250), alt: "" } })]);
                    },
                ],
                o =
                    (n(43),
                    {
                        name: "Head",
                        data: function () {
                            return { isLoaded: !1 };
                        },
                        created: function () {
                            var t = this;
                            setTimeout(function () {
                                t.isLoaded = !0;
                            }, 500);
                        },
                    }),
                r = (n(251), n(34)),
                component = Object(r.a)(
                    o,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            d = t._self._c || e;
                        return d(
                            "div",
                            { staticClass: "head" },
                            [
                                d("transition", { attrs: { name: "bg" } }, [t.isLoaded ? d("div", { staticClass: "bg" }) : t._e()]),
                                t._v(" "),
                                d(
                                    "div",
                                    { staticClass: "container" },
                                    [
                                        d("transition", { attrs: { name: "text" } }, [t.isLoaded ? d("h1", { staticClass: "head__title" }, [t._v("\n        Kuma Inu\n      ")]) : t._e()]),
                                        t._v(" "),
                                        d("transition", { attrs: { name: "text" } }, [
                                            t.isLoaded
                                                ? d("p", { staticClass: "head__text" }, [
                                                      t._v("\n        Kuma Inu ($KUMA) is a community-focused, DeFi cryptocurrency project,\n        consisting of Kuma Breeder, Kuma DEX, and Kuma NFT.\n      "),
                                                  ])
                                                : t._e(),
                                        ]),
                                        t._v(" "),
                                        d("transition", { attrs: { name: "fade" } }, [t.isLoaded ? d("div", { staticClass: "main__img" }, [d("img", { attrs: { src: n(247), alt: "" } })]) : t._e()]),
                                        t._v(" "),
                                        d("transition", { attrs: { name: "coin_1_animation" } }, [t.isLoaded ? d("div", { staticClass: "coin coin_1" }, [d("img", { attrs: { src: n(248), alt: "" } })]) : t._e()]),
                                        t._v(" "),
                                        d("transition", { attrs: { name: "coin_2_animation" } }, [t.isLoaded ? d("div", { staticClass: "coin coin_2" }, [d("img", { attrs: { src: n(249), alt: "" } })]) : t._e()]),
                                        t._v(" "),
                                        t._m(0),
                                    ],
                                    1
                                ),
                            ],
                            1
                        );
                    },
                    d,
                    !1,
                    null,
                    "3f46854d",
                    null
                );
            e.default = component.exports;
        },
        function (t, e, n) {
            "use strict";
            n.r(e);
            var d = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            d = t._self._c || e;
                        return d("div", { staticClass: "advantages" }, [
                            d("div", { staticClass: "coin coin_1" }, [d("img", { attrs: { src: n(254), alt: "" } })]),
                            t._v(" "),
                            d("div", { staticClass: "coin coin_2" }, [d("img", { attrs: { src: n(255), alt: "" } })]),
                            t._v(" "),
                            d("div", { staticClass: "paws" }, [d("img", { attrs: { src: n(256), alt: "" } })]),
                            t._v(" "),
                            d("div", { staticClass: "container" }, [
                                d("div", { staticClass: "advantages__card" }, [
                                    d("div", { staticClass: "card__icon" }, [d("img", { attrs: { src: n(217), alt: "" } })]),
                                    t._v(" "),
                                    d("h4", { staticClass: "card__title" }, [t._v("Simple as that!")]),
                                    t._v(" "),
                                    d("p", { staticClass: "card__text" }, [
                                        t._v("\n        Token Name - Kuma Inu\n        "),
                                        d("br"),
                                        t._v("\n        Token Symbol - $KUMA\n        "),
                                        d("br"),
                                        t._v("\n        Total Supply - 1 Quadrillion\n        "),
                                        d("br"),
                                        t._v("\n        Liquidity - Locked\n      "),
                                    ]),
                                ]),
                                t._v(" "),
                                d("div", { staticClass: "advantages__card" }, [
                                    d("div", { staticClass: "card__icon" }, [d("img", { attrs: { src: n(257), alt: "" } })]),
                                    t._v(" "),
                                    d("h4", { staticClass: "card__title" }, [t._v("No advanced tokenomics")]),
                                    t._v(" "),
                                    d("p", { staticClass: "card__text" }, [t._v("\n        We believe this token should be as simple as possible. No advanced\n        smart contracts are used.\n      ")]),
                                ]),
                                t._v(" "),
                                d("div", { staticClass: "advantages__card" }, [
                                    d("div", { staticClass: "card__icon" }, [d("img", { attrs: { src: n(217), alt: "" } })]),
                                    t._v(" "),
                                    d("h4", { staticClass: "card__title" }, [t._v("Community Driven")]),
                                    t._v(" "),
                                    d("p", { staticClass: "card__text" }, [t._v("\n        This token is fully decentralized and is community-driven. These are\n        on rails because of our beloved Kuma Inu Family.\n      ")]),
                                ]),
                            ]),
                        ]);
                    },
                ],
                o = { name: "Advantages" },
                r = (n(258), n(34)),
                component = Object(r.a)(
                    o,
                    function () {
                        var t = this,
                            e = t.$createElement;
                        t._self._c;
                        return t._m(0);
                    },
                    d,
                    !1,
                    null,
                    "5cfeee79",
                    null
                );
            e.default = component.exports;
        },
        function (t, e, n) {
            "use strict";
            n.r(e);
            var d = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("h2", { staticClass: "buy__title" }, [t._v("\n      How to buy\n      "), n("span", { staticClass: "orange" }, [t._v("$KUMA?")])]);
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            d = t._self._c || e;
                        return d("div", { staticClass: "card__container" }, [
                            d("div", { staticClass: "buy__card" }, [
                                d("div", { staticClass: "card__icon" }, [d("img", { attrs: { src: n(260), alt: "" } })]),
                                t._v(" "),
                                d("div", { staticClass: "card__title" }, [t._v("\n          1.\n          "), d("span", { staticClass: "orange" }, [t._v("Installation.")])]),
                                t._v(" "),
                                d("div", { staticClass: "card__text" }, [
                                    d("h4", [
                                        t._v("\n            Download and install\n            "),
                                        d("br"),
                                        t._v(" "),
                                        d("a", { staticClass: "link", attrs: { href: "https://metamask.io/download" } }, [t._v("\n              Metamask wallet.\n            ")]),
                                    ]),
                                ]),
                            ]),
                            t._v(" "),
                            d("div", { staticClass: "buy__card" }, [
                                d("div", { staticClass: "card__icon" }, [d("img", { attrs: { src: n(261), alt: "" } })]),
                                t._v(" "),
                                d("div", { staticClass: "card__title" }, [t._v("\n          2.\n          "), d("span", { staticClass: "orange" }, [t._v("Buy ETH.")])]),
                                t._v(" "),
                                d("div", { staticClass: "card__text" }, [
                                    d("h4", [
                                        t._v("\n            Run\n            "),
                                        d("a", { staticClass: "link", attrs: { href: "https://metamask.io/download" } }, [t._v("Metamask")]),
                                        t._v("\n            and then\n            "),
                                        d("br"),
                                        t._v('\n            press "BUY".\n          '),
                                    ]),
                                ]),
                            ]),
                            t._v(" "),
                            d("div", { staticClass: "buy__card" }, [
                                d("div", { staticClass: "card__icon" }, [d("img", { attrs: { src: n(262), alt: "" } })]),
                                t._v(" "),
                                d("div", { staticClass: "card__title" }, [t._v("\n          3.\n          "), d("span", { staticClass: "orange" }, [t._v("Swap.")])]),
                                t._v(" "),
                                d("div", { staticClass: "card__text" }, [d("h4", [t._v("\n            Go to UNISWAP to swap\n            "), d("br"), t._v("\n            ETH to $KUMA.\n          ")])]),
                            ]),
                            t._v(" "),
                            d("div", { staticClass: "buy__card" }, [
                                d("div", { staticClass: "card__icon" }, [d("img", { attrs: { src: n(263), alt: "" } })]),
                                t._v(" "),
                                d("div", { staticClass: "card__title" }, [t._v("\n          4.\n          "), d("span", { staticClass: "orange" }, [t._v("Hold.")])]),
                                t._v(" "),
                                d("div", { staticClass: "card__text" }, [d("h4", [t._v("\n            Now you just watch your\n            "), d("br"), t._v("\n            $KUMA tokens grow.\n          ")])]),
                            ]),
                        ]);
                    },
                    function () {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e("div", { staticClass: "arrow__icon" }, [e("img", { attrs: { src: n(264), alt: "" } })]);
                    },
                ],
                o =
                    (n(43),
                    {
                        name: "Buy",
                        components: { BaseButton: n(201).default },
                        data: function () {
                            return { showTooltip: !1 };
                        },
                        methods: {
                            copyToClipboard: function () {
                                var t = this,
                                    e = document.createRange();
                                e.selectNode(document.getElementById("address")),
                                    window.getSelection().removeAllRanges(),
                                    window.getSelection().addRange(e),
                                    document.execCommand("copy"),
                                    window.getSelection().removeAllRanges(),
                                    (this.showTooltip = !0),
                                    setTimeout(function () {
                                        t.showTooltip = !1;
                                    }, 2e3);
                            },
                        },
                    }),
                r = (n(265), n(34)),
                component = Object(r.a)(
                    o,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            d = t._self._c || e;
                        return d("div", { staticClass: "buy" }, [
                            d("div", { staticClass: "container" }, [
                                t._m(0),
                                t._v(" "),
                                d("div", { staticClass: "buy__subtitle" }, [t._v("Contract address:")]),
                                t._v(" "),
                                d("div", { staticClass: "copy__container" }, [
                                    d("div", { staticClass: "copy_address", attrs: { id: "address" } }, [t._v("\n        0xb525ecee288b99216cd481c56b6efbdbe9bf90b5\n      ")]),
                                    t._v(" "),
                                    d("div", { staticClass: "copy_icon" }, [
                                        d("img", {
                                            attrs: { title: t.showTooltip ? "Copied" : null, src: n(207), alt: "" },
                                            on: {
                                                click: function (e) {
                                                    return t.copyToClipboard();
                                                },
                                            },
                                        }),
                                    ]),
                                ]),
                                t._v(" "),
                                t._m(1),
                                t._v(" "),
                                d(
                                    "div",
                                    { staticClass: "buy__block" },
                                    [
                                        t._m(2),
                                        t._v(" "),
                                        d("div", { staticClass: "block__title" }, [t._v("Currently you can buy $KUMA here:")]),
                                        t._v(" "),
                                        d("BaseButton", {
                                            staticClass: "buy_btn",
                                            attrs: { link: "https://app.uniswap.org/#/swap?outputCurrency=0xb525ecee288b99216cd481c56b6efbdbe9bf90b5&use=V2", label: "Buy Kuma Inu", type: "secondary" },
                                        }),
                                        t._v(" "),
                                        d("div", { staticClass: "block__subtitle" }, [t._v("Price chart is here:")]),
                                        t._v(" "),
                                        d("BaseButton", {
                                            staticClass: "buy_btn",
                                            attrs: { link: "https://www.dextools.io/app/uniswap/pair-explorer/0x27fd2f5942049bcd601428c7bcede364180b4b3f", label: "WATCH PRICE ON DEXTOOLS", type: "accent" },
                                        }),
                                    ],
                                    1
                                ),
                            ]),
                        ]);
                    },
                    d,
                    !1,
                    null,
                    "e2785bf2",
                    null
                );
            e.default = component.exports;
        },
        function (t, e, n) {
            "use strict";
            n.r(e);
            var d = [
                    { img: "/smm/coingek.png", link: "https://www.coingecko.com/en/coins/kuma-inu" },
                    { img: "/smm/defipulse.png", link: "https://defipulse.com/" },
                    { img: "/smm/Unicorn.png", link: "https://app.uniswap.org/#/swap?outputCurrency=0x3f5dd1a1538a4f9f82e543098f01f22480b0a3a8&use=V2" },
                    { img: "/smm/web.png", link: "https://coinmarketcap.com/" },
                    { img: "/smm/medium.png", link: "https://kumainu.medium.com/" },
                    { img: "/smm/reddit.png", link: "https://www.reddit.com/r/KumaInu/" },
                    { img: "/smm/twitter.png", link: "https://twitter.com/KumaInuOfficial" },
                    { img: "/smm/telegra.png", link: "https://t.me/KumaInuOfficial" },
                ],
                o = {
                    name: "SMM",
                    data: function () {
                        return { SMM_LIST: d };
                    },
                },
                r = (n(267), n(34)),
                component = Object(r.a)(
                    o,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n(
                            "div",
                            { staticClass: "smm" },
                            t._l(t.SMM_LIST, function (t, e) {
                                return n("a", { key: e, staticClass: "smm__item", attrs: { href: t.link } }, [n("img", { attrs: { src: t.img, alt: "" } })]);
                            }),
                            0
                        );
                    },
                    [],
                    !1,
                    null,
                    "1d5029a8",
                    null
                );
            e.default = component.exports;
        },
        function (t, e, n) {
            "use strict";
            n.r(e);
            n(43);
            var d = {
                    name: "donating",
                    components: { BaseButton: n(201).default },
                    data: function () {
                        return { showTooltip: !1 };
                    },
                    methods: {
                        copyToClipboard: function () {
                            var t = this,
                                e = document.createRange();
                            e.selectNode(document.getElementById("address")),
                                window.getSelection().removeAllRanges(),
                                window.getSelection().addRange(e),
                                document.execCommand("copy"),
                                window.getSelection().removeAllRanges(),
                                (this.showTooltip = !0),
                                setTimeout(function () {
                                    t.showTooltip = !1;
                                }, 2e3);
                        },
                    },
                },
                o = (n(269), n(34)),
                component = Object(o.a)(
                    d,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            d = t._self._c || e;
                        return d("div", { staticClass: "donating" }, [
                            d("div", { staticClass: "container" }, [
                                t._m(0),
                                t._v(" "),
                                d("div", { staticClass: "donating__subtitle" }, [t._v("Contract address:")]),
                                t._v(" "),
                                d("div", { staticClass: "copy__container" }, [
                                    d("div", { staticClass: "copy_address", attrs: { id: "address" } }, [t._v("\n        0xd5a472CD2fB9f26E9DC4f3C6c124164d4846cBD7\n      ")]),
                                    t._v(" "),
                                    d("div", { staticClass: "copy_icon" }, [
                                        d("img", {
                                            attrs: { title: t.showTooltip ? "Copied" : null, src: n(207), alt: "" },
                                            on: {
                                                click: function (e) {
                                                    return t.copyToClipboard();
                                                },
                                            },
                                        }),
                                    ]),
                                ]),
                                t._v(" "),
                                t._m(1),
                            ]),
                        ]);
                    },
                    [
                        function () {
                            var t = this,
                                e = t.$createElement,
                                n = t._self._c || e;
                            return n("h2", { staticClass: "donating__title" }, [t._v("\n      Feel like\n      "), n("span", { staticClass: "orange" }, [t._v("$DONATING?")])]);
                        },
                        function () {
                            var t = this,
                                e = t.$createElement,
                                n = t._self._c || e;
                            return n("div", { staticClass: "donating__block" }, [
                                n("div", { staticClass: "detail__title" }, [
                                    n("h4", { staticClass: "detail__subtitle" }, [t._v("Accepted: Any ERC20 Token")]),
                                    t._v(" "),
                                    n("h4", { staticClass: "detail__subtitle" }, [t._v("Preferred: $ETH, $USDC, $KUMA")]),
                                ]),
                            ]);
                        },
                    ],
                    !1,
                    null,
                    "58ce1007",
                    null
                );
            e.default = component.exports;
        },
        function (t, e, n) {
            "use strict";
            n.d(e, "a", function () {
                return d;
            }),
                n.d(e, "b", function () {
                    return o;
                });
            var d = function () {
                    var t = this,
                        e = t.$createElement;
                    t._self._c;
                    return t._m(0);
                },
                o = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            d = t._self._c || e;
                        return d("div", { staticClass: "roadmap__container container" }, [
                            d("div", { staticClass: "roadmap__title" }, [d("h2", [t._v("Roadmap")])]),
                            t._v(" "),
                            d("div", { staticClass: "roadmap__inner" }, [d("h5", [t._v("Our roadmap represents our most obvious goals")])]),
                            t._v(" "),
                            d("div", { staticClass: "paw bg" }, [d("img", { attrs: { src: n(232), alt: "" } })]),
                            t._v(" "),
                            d("div", { staticClass: "vector__first bg" }, [d("img", { attrs: { src: n(233), alt: "" } })]),
                            t._v(" "),
                            d("div", { staticClass: "vector__second bg" }, [d("img", { attrs: { src: n(234), alt: "" } })]),
                            t._v(" "),
                            d("div", { staticClass: "list" }, [
                                d("div", { staticClass: "roadmap__list first" }, [
                                    d("img", { attrs: { src: n(235), alt: "" } }),
                                    t._v(" "),
                                    d("ul", [
                                        d("li", [t._v("- $KUMA Uniswap Listing")]),
                                        t._v(" "),
                                        d("li", [t._v("- CoinGecko Listing")]),
                                        t._v(" "),
                                        d("li", [t._v("- CoinMarketCap Listing")]),
                                        t._v(" "),
                                        d("li", [t._v("- 2,000 Telegram Members")]),
                                        t._v(" "),
                                        d("li", [t._v("- 5,000 Holders")]),
                                        t._v(" "),
                                        d("li", [t._v("- Community Marketing Fund")]),
                                    ]),
                                ]),
                                t._v(" "),
                                d("div", { staticClass: "roadmap__list second" }, [
                                    d("img", { attrs: { src: n(236), alt: "" } }),
                                    t._v(" "),
                                    d("ul", [
                                        d("li", [t._v("- Website Redesign")]),
                                        t._v(" "),
                                        d("li", [t._v("- $dKUMA Launch & Uniswap Listing")]),
                                        t._v(" "),
                                        d("li", [t._v("- Kuma Breeder Launch")]),
                                        t._v(" "),
                                        d("li", [t._v("- Centralized Exchange Listings")]),
                                        t._v(" "),
                                        d("li", [t._v("- 10,000 Holders")]),
                                    ]),
                                ]),
                                t._v(" "),
                                d("div", { staticClass: "roadmap__list thrid" }, [
                                    d("img", { attrs: { src: n(237), alt: "" } }),
                                    t._v(" "),
                                    d("ul", [
                                        d("li", [t._v("- Kuma Breeder dApp Redesign")]),
                                        t._v(" "),
                                        d("li", [t._v("- 20,000 Holders")]),
                                        t._v(" "),
                                        d("li", [t._v("- Expand Marketing + Development Team")]),
                                        t._v(" "),
                                        d("li", [t._v("- Smart Contract Audit")]),
                                        t._v(" "),
                                        d("li", [t._v("- Kuma Dex Launch")]),
                                        t._v(" "),
                                        d("li", [t._v("- Huge Partnerships")]),
                                    ]),
                                ]),
                                t._v(" "),
                                d("div", { staticClass: "roadmap__list fourth" }, [
                                    d("img", { attrs: { src: n(238), alt: "" } }),
                                    t._v(" "),
                                    d("ul", [
                                        d("li", [t._v("- Kuma Dex Staking Launch")]),
                                        t._v(" "),
                                        d("li", [t._v("- Market Expansion")]),
                                        t._v(" "),
                                        d("li", [t._v("\n          - Kuma Inu NFT Products\n          "), d("br"), t._v("\n          (Marketplace + AuctionPad)\n        ")]),
                                        t._v(" "),
                                        d("li", [t._v("- Influencer Marketing")]),
                                    ]),
                                ]),
                            ]),
                        ]);
                    },
                ];
        },
        function (t, e, n) {
            var content = n(282);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
            (0, n(79).default)("1b7833da", content, !0, { sourceMap: !1 });
        },
        function (t, e, n) {
            "use strict";
            n(280);
        },
        function (t, e, n) {
            var d = n(78)(!1);
            d.push([
                t.i,
                ":root{--brand:#f6a32f;--text-primary:#1a1e25;--text-secondary:#585c6e}#app{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;position:relative;width:100%;max-width:100vw}#app,body{overflow-x:hidden}body{width:100vw}",
                "",
            ]),
                (t.exports = d);
        },
        function (t, e, n) {
            "use strict";
            n.r(e);
            var d = n(222),
                o = n(271),
                r = n(231),
                c = n(272),
                l = n(273),
                _ = n(274),
                f = n(275),
                v = n(276),
                m = n(277),
                x = n(278),
                h = {
                    name: "App",
                    components: { Header: d.default, Products: o.default, Roadmap: r.default, Footer: l.default, Direction: c.default, Head: _.default, Advantages: f.default, Buy: v.default, Social: m.default, Donating: x.default },
                },
                w = (n(281), n(34)),
                component = Object(w.a)(
                    h,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n(
                            "div",
                            { attrs: { id: "app" } },
                            [
                                n("Header"),
                                t._v(" "),
                                n("Head"),
                                t._v(" "),
                                n("Advantages"),
                                t._v(" "),
                                n("Buy"),
                                t._v(" "),
                                n("Products", { attrs: { id: "products" } }),
                                t._v(" "),
                                n("Roadmap"),
                                t._v(" "),
                                n("Donating", { attrs: { id: "donating" } }),
                                t._v(" "),
                                n("Direction"),
                                t._v(" "),
                                n("Footer"),
                                t._v(" "),
                                n("Social", { attrs: { id: "social" } }),
                            ],
                            1
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            e.default = component.exports;
            installComponents(component, {
                Header: n(222).default,
                Head: n(274).default,
                Advantages: n(275).default,
                Buy: n(276).default,
                Products: n(271).default,
                Roadmap: n(231).default,
                Donating: n(278).default,
                Direction: n(272).default,
                Footer: n(273).default,
                Social: n(277).default,
            });
        },
    ]),
]);
