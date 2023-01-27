/*! For license information please see content.js.LICENSE.txt */
(() => {
  var e = {
      5331: (e, t, n) => {
        "use strict";
        t.Z = void 0;
        var r,
          o = (r = n(5509)) && r.__esModule ? r : { default: r };
        var a = function (e, t) {
          if ("throw" === t) throw new Error(e);
          return null;
        };
        t.Z = function (e, t, n) {
          var r = Object.keys(t),
            l = n || {},
            i = l.handleMissingStyleName,
            u = void 0 === i ? o.default.handleMissingStyleName : i,
            c = l.autoResolveMultipleImports,
            s = void 0 === c ? o.default.autoResolveMultipleImports : c;
          return e
            ? e
                .split(" ")
                .filter(function (e) {
                  return e;
                })
                .map(function (e) {
                  if (
                    (function (e) {
                      return -1 !== e.indexOf(".");
                    })(e)
                  )
                    return (function (e, t, n) {
                      var r = e.split("."),
                        l = r[0],
                        i = r[1],
                        u = n || o.default.handleMissingStyleName;
                      return i
                        ? t[l]
                          ? t[l][i]
                            ? t[l][i]
                            : a("CSS module does not exist: " + i, u)
                          : a("CSS module import does not exist: " + l, u)
                        : a("Invalid style name: " + e, u);
                    })(e, t, u);
                  if (0 === r.length)
                    throw new Error(
                      "Cannot use styleName attribute for style name '" +
                        e +
                        "' without importing at least one stylesheet."
                    );
                  if (r.length > 1) {
                    if (!s)
                      throw new Error(
                        "Cannot use anonymous style name '" +
                          e +
                          "' with more than one stylesheet import without setting 'autoResolveMultipleImports' to true."
                      );
                    return (function (e, t, n) {
                      var r = n || o.default.handleMissingStyleName,
                        l = Object.keys(t)
                          .map(function (n) {
                            return t[n][e] && n;
                          })
                          .filter(function (e) {
                            return e;
                          });
                      if (l.length > 1)
                        throw new Error(
                          'Cannot resolve styleName "' +
                            e +
                            '" because it is present in multiple imports:\n\n\t' +
                            l.join("\n\t") +
                            '\n\nYou can resolve this by using a named import, e.g:\n\n\timport foo from "' +
                            l[0] +
                            '";\n\t<div styleName="foo.' +
                            e +
                            '" />\n\n'
                        );
                      return 0 === l.length
                        ? a("Could not resolve the styleName '" + e + "'.", r)
                        : t[l[0]][e];
                    })(e, t, u);
                  }
                  var n = t[r[0]];
                  return n[e]
                    ? n[e]
                    : a("Could not resolve the styleName '" + e + "'.", u);
                })
                .filter(function (e) {
                  return e;
                })
                .join(" ")
            : "";
        };
      },
      5509: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var n = {
          attributeNames: { styleName: "className" },
          generateScopedName: "[path]___[name]__[local]___[hash:base64:5]",
          handleMissingStyleName: "throw",
        };
        t.default = n;
      },
      5443: (e, t) => {
        var n;
        !(function () {
          "use strict";
          var r = {}.hasOwnProperty;
          function o() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var a = typeof n;
                if ("string" === a || "number" === a) e.push(n);
                else if (Array.isArray(n)) {
                  if (n.length) {
                    var l = o.apply(null, n);
                    l && e.push(l);
                  }
                } else if ("object" === a)
                  if (n.toString === Object.prototype.toString)
                    for (var i in n) r.call(n, i) && n[i] && e.push(i);
                  else e.push(n.toString());
              }
            }
            return e.join(" ");
          }
          e.exports
            ? ((o.default = o), (e.exports = o))
            : void 0 ===
                (n = function () {
                  return o;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
      9841: (e, t, n) => {
        "use strict";
        function r(e) {
          var t,
            n,
            o = "";
          if ("string" == typeof e || "number" == typeof e) o += e;
          else if ("object" == typeof e)
            if (Array.isArray(e))
              for (t = 0; t < e.length; t++)
                e[t] && (n = r(e[t])) && (o && (o += " "), (o += n));
            else for (t in e) e[t] && (o && (o += " "), (o += t));
          return o;
        }
        function o() {
          for (var e, t, n = 0, o = ""; n < arguments.length; )
            (e = arguments[n++]) && (t = r(e)) && (o && (o += " "), (o += t));
          return o;
        }
        n.r(t), n.d(t, { clsx: () => o, default: () => a });
        const a = o;
      },
      6095: (e, t, n) => {
        "use strict";
        var r = n(5566),
          o = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          a = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          l = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          i = {};
        function u(e) {
          return r.isMemo(e) ? l : i[e.$$typeof] || o;
        }
        (i[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (i[r.Memo] = l);
        var c = Object.defineProperty,
          s = Object.getOwnPropertyNames,
          f = Object.getOwnPropertySymbols,
          d = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          v = Object.prototype;
        e.exports = function e(t, n, r) {
          if ("string" != typeof n) {
            if (v) {
              var o = p(n);
              o && o !== v && e(t, o, r);
            }
            var l = s(n);
            f && (l = l.concat(f(n)));
            for (var i = u(t), m = u(n), g = 0; g < l.length; ++g) {
              var h = l[g];
              if (!(a[h] || (r && r[h]) || (m && m[h]) || (i && i[h]))) {
                var y = d(n, h);
                try {
                  c(t, h, y);
                } catch (e) {}
              }
            }
          }
          return t;
        };
      },
      5839: (e, t, n) => {
        var r = n(751)(n(3401), "DataView");
        e.exports = r;
      },
      3783: (e, t, n) => {
        var r = n(9219),
          o = n(5937),
          a = n(4054),
          l = n(9991),
          i = n(2753);
        function u(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        (u.prototype.clear = r),
          (u.prototype.delete = o),
          (u.prototype.get = a),
          (u.prototype.has = l),
          (u.prototype.set = i),
          (e.exports = u);
      },
      624: (e, t, n) => {
        var r = n(3647),
          o = n(73),
          a = n(7903),
          l = n(3832),
          i = n(7074);
        function u(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        (u.prototype.clear = r),
          (u.prototype.delete = o),
          (u.prototype.get = a),
          (u.prototype.has = l),
          (u.prototype.set = i),
          (e.exports = u);
      },
      7973: (e, t, n) => {
        var r = n(751)(n(3401), "Map");
        e.exports = r;
      },
      2767: (e, t, n) => {
        var r = n(3070),
          o = n(3638),
          a = n(8444),
          l = n(5877),
          i = n(8990);
        function u(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        (u.prototype.clear = r),
          (u.prototype.delete = o),
          (u.prototype.get = a),
          (u.prototype.has = l),
          (u.prototype.set = i),
          (e.exports = u);
      },
      712: (e, t, n) => {
        var r = n(751)(n(3401), "Promise");
        e.exports = r;
      },
      353: (e, t, n) => {
        var r = n(751)(n(3401), "Set");
        e.exports = r;
      },
      5561: (e, t, n) => {
        var r = n(2767),
          o = n(16),
          a = n(4832);
        function l(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.__data__ = new r(); ++t < n; ) this.add(e[t]);
        }
        (l.prototype.add = l.prototype.push = o),
          (l.prototype.has = a),
          (e.exports = l);
      },
      14: (e, t, n) => {
        var r = n(624),
          o = n(9882),
          a = n(6639),
          l = n(3887),
          i = n(2603),
          u = n(7853);
        function c(e) {
          var t = (this.__data__ = new r(e));
          this.size = t.size;
        }
        (c.prototype.clear = o),
          (c.prototype.delete = a),
          (c.prototype.get = l),
          (c.prototype.has = i),
          (c.prototype.set = u),
          (e.exports = c);
      },
      6293: (e, t, n) => {
        var r = n(3401).Symbol;
        e.exports = r;
      },
      9069: (e, t, n) => {
        var r = n(3401).Uint8Array;
        e.exports = r;
      },
      3180: (e, t, n) => {
        var r = n(751)(n(3401), "WeakMap");
        e.exports = r;
      },
      1177: (e) => {
        e.exports = function (e, t) {
          for (
            var n = -1, r = null == e ? 0 : e.length, o = 0, a = [];
            ++n < r;

          ) {
            var l = e[n];
            t(l, n, e) && (a[o++] = l);
          }
          return a;
        };
      },
      7189: (e, t, n) => {
        var r = n(5606),
          o = n(3735),
          a = n(2428),
          l = n(7757),
          i = n(911),
          u = n(6868),
          c = Object.prototype.hasOwnProperty;
        e.exports = function (e, t) {
          var n = a(e),
            s = !n && o(e),
            f = !n && !s && l(e),
            d = !n && !s && !f && u(e),
            p = n || s || f || d,
            v = p ? r(e.length, String) : [],
            m = v.length;
          for (var g in e)
            (!t && !c.call(e, g)) ||
              (p &&
                ("length" == g ||
                  (f && ("offset" == g || "parent" == g)) ||
                  (d &&
                    ("buffer" == g ||
                      "byteLength" == g ||
                      "byteOffset" == g)) ||
                  i(g, m))) ||
              v.push(g);
          return v;
        };
      },
      6581: (e) => {
        e.exports = function (e, t) {
          for (var n = -1, r = t.length, o = e.length; ++n < r; )
            e[o + n] = t[n];
          return e;
        };
      },
      3531: (e) => {
        e.exports = function (e, t) {
          for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
            if (t(e[n], n, e)) return !0;
          return !1;
        };
      },
      5869: (e, t, n) => {
        var r = n(3284);
        e.exports = function (e, t) {
          for (var n = e.length; n--; ) if (r(e[n][0], t)) return n;
          return -1;
        };
      },
      4755: (e, t, n) => {
        var r = n(6581),
          o = n(2428);
        e.exports = function (e, t, n) {
          var a = t(e);
          return o(e) ? a : r(a, n(e));
        };
      },
      7398: (e, t, n) => {
        var r = n(6293),
          o = n(6945),
          a = n(1584),
          l = r ? r.toStringTag : void 0;
        e.exports = function (e) {
          return null == e
            ? void 0 === e
              ? "[object Undefined]"
              : "[object Null]"
            : l && l in Object(e)
            ? o(e)
            : a(e);
        };
      },
      5227: (e, t, n) => {
        var r = n(7398),
          o = n(9109);
        e.exports = function (e) {
          return o(e) && "[object Arguments]" == r(e);
        };
      },
      3892: (e, t, n) => {
        var r = n(6502),
          o = n(9109);
        e.exports = function e(t, n, a, l, i) {
          return (
            t === n ||
            (null == t || null == n || (!o(t) && !o(n))
              ? t != t && n != n
              : r(t, n, a, l, e, i))
          );
        };
      },
      6502: (e, t, n) => {
        var r = n(14),
          o = n(1979),
          a = n(5473),
          l = n(7287),
          i = n(5064),
          u = n(2428),
          c = n(7757),
          s = n(6868),
          f = "[object Arguments]",
          d = "[object Array]",
          p = "[object Object]",
          v = Object.prototype.hasOwnProperty;
        e.exports = function (e, t, n, m, g, h) {
          var y = u(e),
            b = u(t),
            A = y ? d : i(e),
            w = b ? d : i(t),
            O = (A = A == f ? p : A) == p,
            x = (w = w == f ? p : w) == p,
            E = A == w;
          if (E && c(e)) {
            if (!c(t)) return !1;
            (y = !0), (O = !1);
          }
          if (E && !O)
            return (
              h || (h = new r()),
              y || s(e) ? o(e, t, n, m, g, h) : a(e, t, A, n, m, g, h)
            );
          if (!(1 & n)) {
            var S = O && v.call(e, "__wrapped__"),
              k = x && v.call(t, "__wrapped__");
            if (S || k) {
              var P = S ? e.value() : e,
                C = k ? t.value() : t;
              return h || (h = new r()), g(P, C, n, m, h);
            }
          }
          return !!E && (h || (h = new r()), l(e, t, n, m, g, h));
        };
      },
      9578: (e, t, n) => {
        var r = n(7419),
          o = n(3283),
          a = n(6627),
          l = n(9235),
          i = /^\[object .+?Constructor\]$/,
          u = Function.prototype,
          c = Object.prototype,
          s = u.toString,
          f = c.hasOwnProperty,
          d = RegExp(
            "^" +
              s
                .call(f)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          );
        e.exports = function (e) {
          return !(!a(e) || o(e)) && (r(e) ? d : i).test(l(e));
        };
      },
      9126: (e, t, n) => {
        var r = n(7398),
          o = n(6705),
          a = n(9109),
          l = {};
        (l["[object Float32Array]"] =
          l["[object Float64Array]"] =
          l["[object Int8Array]"] =
          l["[object Int16Array]"] =
          l["[object Int32Array]"] =
          l["[object Uint8Array]"] =
          l["[object Uint8ClampedArray]"] =
          l["[object Uint16Array]"] =
          l["[object Uint32Array]"] =
            !0),
          (l["[object Arguments]"] =
            l["[object Array]"] =
            l["[object ArrayBuffer]"] =
            l["[object Boolean]"] =
            l["[object DataView]"] =
            l["[object Date]"] =
            l["[object Error]"] =
            l["[object Function]"] =
            l["[object Map]"] =
            l["[object Number]"] =
            l["[object Object]"] =
            l["[object RegExp]"] =
            l["[object Set]"] =
            l["[object String]"] =
            l["[object WeakMap]"] =
              !1),
          (e.exports = function (e) {
            return a(e) && o(e.length) && !!l[r(e)];
          });
      },
      790: (e, t, n) => {
        var r = n(2403),
          o = n(9339),
          a = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
          if (!r(e)) return o(e);
          var t = [];
          for (var n in Object(e))
            a.call(e, n) && "constructor" != n && t.push(n);
          return t;
        };
      },
      5606: (e) => {
        e.exports = function (e, t) {
          for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
          return r;
        };
      },
      3897: (e, t, n) => {
        var r = n(5012),
          o = /^\s+/;
        e.exports = function (e) {
          return e ? e.slice(0, r(e) + 1).replace(o, "") : e;
        };
      },
      2715: (e) => {
        e.exports = function (e) {
          return function (t) {
            return e(t);
          };
        };
      },
      8529: (e) => {
        e.exports = function (e, t) {
          return e.has(t);
        };
      },
      4640: (e, t, n) => {
        var r = n(3401)["__core-js_shared__"];
        e.exports = r;
      },
      1979: (e, t, n) => {
        var r = n(5561),
          o = n(3531),
          a = n(8529);
        e.exports = function (e, t, n, l, i, u) {
          var c = 1 & n,
            s = e.length,
            f = t.length;
          if (s != f && !(c && f > s)) return !1;
          var d = u.get(e),
            p = u.get(t);
          if (d && p) return d == t && p == e;
          var v = -1,
            m = !0,
            g = 2 & n ? new r() : void 0;
          for (u.set(e, t), u.set(t, e); ++v < s; ) {
            var h = e[v],
              y = t[v];
            if (l) var b = c ? l(y, h, v, t, e, u) : l(h, y, v, e, t, u);
            if (void 0 !== b) {
              if (b) continue;
              m = !1;
              break;
            }
            if (g) {
              if (
                !o(t, function (e, t) {
                  if (!a(g, t) && (h === e || i(h, e, n, l, u)))
                    return g.push(t);
                })
              ) {
                m = !1;
                break;
              }
            } else if (h !== y && !i(h, y, n, l, u)) {
              m = !1;
              break;
            }
          }
          return u.delete(e), u.delete(t), m;
        };
      },
      5473: (e, t, n) => {
        var r = n(6293),
          o = n(9069),
          a = n(3284),
          l = n(1979),
          i = n(8368),
          u = n(3005),
          c = r ? r.prototype : void 0,
          s = c ? c.valueOf : void 0;
        e.exports = function (e, t, n, r, c, f, d) {
          switch (n) {
            case "[object DataView]":
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                return !1;
              (e = e.buffer), (t = t.buffer);
            case "[object ArrayBuffer]":
              return !(e.byteLength != t.byteLength || !f(new o(e), new o(t)));
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
              return a(+e, +t);
            case "[object Error]":
              return e.name == t.name && e.message == t.message;
            case "[object RegExp]":
            case "[object String]":
              return e == t + "";
            case "[object Map]":
              var p = i;
            case "[object Set]":
              var v = 1 & r;
              if ((p || (p = u), e.size != t.size && !v)) return !1;
              var m = d.get(e);
              if (m) return m == t;
              (r |= 2), d.set(e, t);
              var g = l(p(e), p(t), r, c, f, d);
              return d.delete(e), g;
            case "[object Symbol]":
              if (s) return s.call(e) == s.call(t);
          }
          return !1;
        };
      },
      7287: (e, t, n) => {
        var r = n(393),
          o = Object.prototype.hasOwnProperty;
        e.exports = function (e, t, n, a, l, i) {
          var u = 1 & n,
            c = r(e),
            s = c.length;
          if (s != r(t).length && !u) return !1;
          for (var f = s; f--; ) {
            var d = c[f];
            if (!(u ? d in t : o.call(t, d))) return !1;
          }
          var p = i.get(e),
            v = i.get(t);
          if (p && v) return p == t && v == e;
          var m = !0;
          i.set(e, t), i.set(t, e);
          for (var g = u; ++f < s; ) {
            var h = e[(d = c[f])],
              y = t[d];
            if (a) var b = u ? a(y, h, d, t, e, i) : a(h, y, d, e, t, i);
            if (!(void 0 === b ? h === y || l(h, y, n, a, i) : b)) {
              m = !1;
              break;
            }
            g || (g = "constructor" == d);
          }
          if (m && !g) {
            var A = e.constructor,
              w = t.constructor;
            A == w ||
              !("constructor" in e) ||
              !("constructor" in t) ||
              ("function" == typeof A &&
                A instanceof A &&
                "function" == typeof w &&
                w instanceof w) ||
              (m = !1);
          }
          return i.delete(e), i.delete(t), m;
        };
      },
      151: (e, t, n) => {
        var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
        e.exports = r;
      },
      393: (e, t, n) => {
        var r = n(4755),
          o = n(9128),
          a = n(8834);
        e.exports = function (e) {
          return r(e, a, o);
        };
      },
      1499: (e, t, n) => {
        var r = n(1889);
        e.exports = function (e, t) {
          var n = e.__data__;
          return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
        };
      },
      751: (e, t, n) => {
        var r = n(9578),
          o = n(8027);
        e.exports = function (e, t) {
          var n = o(e, t);
          return r(n) ? n : void 0;
        };
      },
      6945: (e, t, n) => {
        var r = n(6293),
          o = Object.prototype,
          a = o.hasOwnProperty,
          l = o.toString,
          i = r ? r.toStringTag : void 0;
        e.exports = function (e) {
          var t = a.call(e, i),
            n = e[i];
          try {
            e[i] = void 0;
            var r = !0;
          } catch (e) {}
          var o = l.call(e);
          return r && (t ? (e[i] = n) : delete e[i]), o;
        };
      },
      9128: (e, t, n) => {
        var r = n(1177),
          o = n(5615),
          a = Object.prototype.propertyIsEnumerable,
          l = Object.getOwnPropertySymbols,
          i = l
            ? function (e) {
                return null == e
                  ? []
                  : ((e = Object(e)),
                    r(l(e), function (t) {
                      return a.call(e, t);
                    }));
              }
            : o;
        e.exports = i;
      },
      5064: (e, t, n) => {
        var r = n(5839),
          o = n(7973),
          a = n(712),
          l = n(353),
          i = n(3180),
          u = n(7398),
          c = n(9235),
          s = "[object Map]",
          f = "[object Promise]",
          d = "[object Set]",
          p = "[object WeakMap]",
          v = "[object DataView]",
          m = c(r),
          g = c(o),
          h = c(a),
          y = c(l),
          b = c(i),
          A = u;
        ((r && A(new r(new ArrayBuffer(1))) != v) ||
          (o && A(new o()) != s) ||
          (a && A(a.resolve()) != f) ||
          (l && A(new l()) != d) ||
          (i && A(new i()) != p)) &&
          (A = function (e) {
            var t = u(e),
              n = "[object Object]" == t ? e.constructor : void 0,
              r = n ? c(n) : "";
            if (r)
              switch (r) {
                case m:
                  return v;
                case g:
                  return s;
                case h:
                  return f;
                case y:
                  return d;
                case b:
                  return p;
              }
            return t;
          }),
          (e.exports = A);
      },
      8027: (e) => {
        e.exports = function (e, t) {
          return null == e ? void 0 : e[t];
        };
      },
      9219: (e, t, n) => {
        var r = n(4556);
        e.exports = function () {
          (this.__data__ = r ? r(null) : {}), (this.size = 0);
        };
      },
      5937: (e) => {
        e.exports = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        };
      },
      4054: (e, t, n) => {
        var r = n(4556),
          o = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
          var t = this.__data__;
          if (r) {
            var n = t[e];
            return "__lodash_hash_undefined__" === n ? void 0 : n;
          }
          return o.call(t, e) ? t[e] : void 0;
        };
      },
      9991: (e, t, n) => {
        var r = n(4556),
          o = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
          var t = this.__data__;
          return r ? void 0 !== t[e] : o.call(t, e);
        };
      },
      2753: (e, t, n) => {
        var r = n(4556);
        e.exports = function (e, t) {
          var n = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (n[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t),
            this
          );
        };
      },
      911: (e) => {
        var t = /^(?:0|[1-9]\d*)$/;
        e.exports = function (e, n) {
          var r = typeof e;
          return (
            !!(n = null == n ? 9007199254740991 : n) &&
            ("number" == r || ("symbol" != r && t.test(e))) &&
            e > -1 &&
            e % 1 == 0 &&
            e < n
          );
        };
      },
      1889: (e) => {
        e.exports = function (e) {
          var t = typeof e;
          return "string" == t ||
            "number" == t ||
            "symbol" == t ||
            "boolean" == t
            ? "__proto__" !== e
            : null === e;
        };
      },
      3283: (e, t, n) => {
        var r,
          o = n(4640),
          a = (r = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + r
            : "";
        e.exports = function (e) {
          return !!a && a in e;
        };
      },
      2403: (e) => {
        var t = Object.prototype;
        e.exports = function (e) {
          var n = e && e.constructor;
          return e === (("function" == typeof n && n.prototype) || t);
        };
      },
      3647: (e) => {
        e.exports = function () {
          (this.__data__ = []), (this.size = 0);
        };
      },
      73: (e, t, n) => {
        var r = n(5869),
          o = Array.prototype.splice;
        e.exports = function (e) {
          var t = this.__data__,
            n = r(t, e);
          return (
            !(n < 0) &&
            (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, !0)
          );
        };
      },
      7903: (e, t, n) => {
        var r = n(5869);
        e.exports = function (e) {
          var t = this.__data__,
            n = r(t, e);
          return n < 0 ? void 0 : t[n][1];
        };
      },
      3832: (e, t, n) => {
        var r = n(5869);
        e.exports = function (e) {
          return r(this.__data__, e) > -1;
        };
      },
      7074: (e, t, n) => {
        var r = n(5869);
        e.exports = function (e, t) {
          var n = this.__data__,
            o = r(n, e);
          return o < 0 ? (++this.size, n.push([e, t])) : (n[o][1] = t), this;
        };
      },
      3070: (e, t, n) => {
        var r = n(3783),
          o = n(624),
          a = n(7973);
        e.exports = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new r(),
              map: new (a || o)(),
              string: new r(),
            });
        };
      },
      3638: (e, t, n) => {
        var r = n(1499);
        e.exports = function (e) {
          var t = r(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        };
      },
      8444: (e, t, n) => {
        var r = n(1499);
        e.exports = function (e) {
          return r(this, e).get(e);
        };
      },
      5877: (e, t, n) => {
        var r = n(1499);
        e.exports = function (e) {
          return r(this, e).has(e);
        };
      },
      8990: (e, t, n) => {
        var r = n(1499);
        e.exports = function (e, t) {
          var n = r(this, e),
            o = n.size;
          return n.set(e, t), (this.size += n.size == o ? 0 : 1), this;
        };
      },
      8368: (e) => {
        e.exports = function (e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e, r) {
              n[++t] = [r, e];
            }),
            n
          );
        };
      },
      4556: (e, t, n) => {
        var r = n(751)(Object, "create");
        e.exports = r;
      },
      9339: (e, t, n) => {
        var r = n(3518)(Object.keys, Object);
        e.exports = r;
      },
      126: (e, t, n) => {
        e = n.nmd(e);
        var r = n(151),
          o = t && !t.nodeType && t,
          a = o && e && !e.nodeType && e,
          l = a && a.exports === o && r.process,
          i = (function () {
            try {
              var e = a && a.require && a.require("util").types;
              return e || (l && l.binding && l.binding("util"));
            } catch (e) {}
          })();
        e.exports = i;
      },
      1584: (e) => {
        var t = Object.prototype.toString;
        e.exports = function (e) {
          return t.call(e);
        };
      },
      3518: (e) => {
        e.exports = function (e, t) {
          return function (n) {
            return e(t(n));
          };
        };
      },
      3401: (e, t, n) => {
        var r = n(151),
          o = "object" == typeof self && self && self.Object === Object && self,
          a = r || o || Function("return this")();
        e.exports = a;
      },
      16: (e) => {
        e.exports = function (e) {
          return this.__data__.set(e, "__lodash_hash_undefined__"), this;
        };
      },
      4832: (e) => {
        e.exports = function (e) {
          return this.__data__.has(e);
        };
      },
      3005: (e) => {
        e.exports = function (e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e) {
              n[++t] = e;
            }),
            n
          );
        };
      },
      9882: (e, t, n) => {
        var r = n(624);
        e.exports = function () {
          (this.__data__ = new r()), (this.size = 0);
        };
      },
      6639: (e) => {
        e.exports = function (e) {
          var t = this.__data__,
            n = t.delete(e);
          return (this.size = t.size), n;
        };
      },
      3887: (e) => {
        e.exports = function (e) {
          return this.__data__.get(e);
        };
      },
      2603: (e) => {
        e.exports = function (e) {
          return this.__data__.has(e);
        };
      },
      7853: (e, t, n) => {
        var r = n(624),
          o = n(7973),
          a = n(2767);
        e.exports = function (e, t) {
          var n = this.__data__;
          if (n instanceof r) {
            var l = n.__data__;
            if (!o || l.length < 199)
              return l.push([e, t]), (this.size = ++n.size), this;
            n = this.__data__ = new a(l);
          }
          return n.set(e, t), (this.size = n.size), this;
        };
      },
      9235: (e) => {
        var t = Function.prototype.toString;
        e.exports = function (e) {
          if (null != e) {
            try {
              return t.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        };
      },
      5012: (e) => {
        var t = /\s/;
        e.exports = function (e) {
          for (var n = e.length; n-- && t.test(e.charAt(n)); );
          return n;
        };
      },
      9678: (e, t, n) => {
        var r = n(6627),
          o = n(5365),
          a = n(7948),
          l = Math.max,
          i = Math.min;
        e.exports = function (e, t, n) {
          var u,
            c,
            s,
            f,
            d,
            p,
            v = 0,
            m = !1,
            g = !1,
            h = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          function y(t) {
            var n = u,
              r = c;
            return (u = c = void 0), (v = t), (f = e.apply(r, n));
          }
          function b(e) {
            return (v = e), (d = setTimeout(w, t)), m ? y(e) : f;
          }
          function A(e) {
            var n = e - p;
            return void 0 === p || n >= t || n < 0 || (g && e - v >= s);
          }
          function w() {
            var e = o();
            if (A(e)) return O(e);
            d = setTimeout(
              w,
              (function (e) {
                var n = t - (e - p);
                return g ? i(n, s - (e - v)) : n;
              })(e)
            );
          }
          function O(e) {
            return (d = void 0), h && u ? y(e) : ((u = c = void 0), f);
          }
          function x() {
            var e = o(),
              n = A(e);
            if (((u = arguments), (c = this), (p = e), n)) {
              if (void 0 === d) return b(p);
              if (g) return clearTimeout(d), (d = setTimeout(w, t)), y(p);
            }
            return void 0 === d && (d = setTimeout(w, t)), f;
          }
          return (
            (t = a(t) || 0),
            r(n) &&
              ((m = !!n.leading),
              (s = (g = "maxWait" in n) ? l(a(n.maxWait) || 0, t) : s),
              (h = "trailing" in n ? !!n.trailing : h)),
            (x.cancel = function () {
              void 0 !== d && clearTimeout(d),
                (v = 0),
                (u = p = c = d = void 0);
            }),
            (x.flush = function () {
              return void 0 === d ? f : O(o());
            }),
            x
          );
        };
      },
      3284: (e) => {
        e.exports = function (e, t) {
          return e === t || (e != e && t != t);
        };
      },
      3735: (e, t, n) => {
        var r = n(5227),
          o = n(9109),
          a = Object.prototype,
          l = a.hasOwnProperty,
          i = a.propertyIsEnumerable,
          u = r(
            (function () {
              return arguments;
            })()
          )
            ? r
            : function (e) {
                return o(e) && l.call(e, "callee") && !i.call(e, "callee");
              };
        e.exports = u;
      },
      2428: (e) => {
        var t = Array.isArray;
        e.exports = t;
      },
      1701: (e, t, n) => {
        var r = n(7419),
          o = n(6705);
        e.exports = function (e) {
          return null != e && o(e.length) && !r(e);
        };
      },
      7757: (e, t, n) => {
        e = n.nmd(e);
        var r = n(3401),
          o = n(8553),
          a = t && !t.nodeType && t,
          l = a && e && !e.nodeType && e,
          i = l && l.exports === a ? r.Buffer : void 0,
          u = (i ? i.isBuffer : void 0) || o;
        e.exports = u;
      },
      5925: (e, t, n) => {
        var r = n(3892);
        e.exports = function (e, t) {
          return r(e, t);
        };
      },
      7419: (e, t, n) => {
        var r = n(7398),
          o = n(6627);
        e.exports = function (e) {
          if (!o(e)) return !1;
          var t = r(e);
          return (
            "[object Function]" == t ||
            "[object GeneratorFunction]" == t ||
            "[object AsyncFunction]" == t ||
            "[object Proxy]" == t
          );
        };
      },
      6705: (e) => {
        e.exports = function (e) {
          return (
            "number" == typeof e &&
            e > -1 &&
            e % 1 == 0 &&
            e <= 9007199254740991
          );
        };
      },
      6627: (e) => {
        e.exports = function (e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t);
        };
      },
      9109: (e) => {
        e.exports = function (e) {
          return null != e && "object" == typeof e;
        };
      },
      2848: (e, t, n) => {
        var r = n(7398),
          o = n(9109);
        e.exports = function (e) {
          return "symbol" == typeof e || (o(e) && "[object Symbol]" == r(e));
        };
      },
      6868: (e, t, n) => {
        var r = n(9126),
          o = n(2715),
          a = n(126),
          l = a && a.isTypedArray,
          i = l ? o(l) : r;
        e.exports = i;
      },
      8834: (e, t, n) => {
        var r = n(7189),
          o = n(790),
          a = n(1701);
        e.exports = function (e) {
          return a(e) ? r(e) : o(e);
        };
      },
      5365: (e, t, n) => {
        var r = n(3401);
        e.exports = function () {
          return r.Date.now();
        };
      },
      5615: (e) => {
        e.exports = function () {
          return [];
        };
      },
      8553: (e) => {
        e.exports = function () {
          return !1;
        };
      },
      3763: (e, t, n) => {
        var r = n(9678),
          o = n(6627);
        e.exports = function (e, t, n) {
          var a = !0,
            l = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          return (
            o(n) &&
              ((a = "leading" in n ? !!n.leading : a),
              (l = "trailing" in n ? !!n.trailing : l)),
            r(e, t, { leading: a, maxWait: t, trailing: l })
          );
        };
      },
      7948: (e, t, n) => {
        var r = n(3897),
          o = n(6627),
          a = n(2848),
          l = /^[-+]0x[0-9a-f]+$/i,
          i = /^0b[01]+$/i,
          u = /^0o[0-7]+$/i,
          c = parseInt;
        e.exports = function (e) {
          if ("number" == typeof e) return e;
          if (a(e)) return NaN;
          if (o(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = o(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = r(e);
          var n = i.test(e);
          return n || u.test(e)
            ? c(e.slice(2), n ? 2 : 8)
            : l.test(e)
            ? NaN
            : +e;
        };
      },
      1538: (e) => {
        "use strict";
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        function o(e) {
          if (null == e)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          return Object(e);
        }
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, r)).join("")
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, a) {
              for (var l, i, u = o(e), c = 1; c < arguments.length; c++) {
                for (var s in (l = Object(arguments[c])))
                  n.call(l, s) && (u[s] = l[s]);
                if (t) {
                  i = t(l);
                  for (var f = 0; f < i.length; f++)
                    r.call(l, i[f]) && (u[i[f]] = l[i[f]]);
                }
              }
              return u;
            };
      },
      6282: function (e) {
        (function () {
          var t, n, r, o, a, l;
          "undefined" != typeof performance &&
          null !== performance &&
          performance.now
            ? (e.exports = function () {
                return performance.now();
              })
            : "undefined" != typeof process &&
              null !== process &&
              process.hrtime
            ? ((e.exports = function () {
                return (t() - a) / 1e6;
              }),
              (n = process.hrtime),
              (o = (t = function () {
                var e;
                return 1e9 * (e = n())[0] + e[1];
              })()),
              (l = 1e9 * process.uptime()),
              (a = o - l))
            : Date.now
            ? ((e.exports = function () {
                return Date.now() - r;
              }),
              (r = Date.now()))
            : ((e.exports = function () {
                return new Date().getTime() - r;
              }),
              (r = new Date().getTime()));
        }.call(this));
      },
      4835: (e, t, n) => {
        "use strict";
        var r = n(1596);
        function o() {}
        function a() {}
        (a.resetWarningCache = o),
          (e.exports = function () {
            function e(e, t, n, o, a, l) {
              if (l !== r) {
                var i = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((i.name = "Invariant Violation"), i);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: a,
              resetWarningCache: o,
            };
            return (n.PropTypes = n), n;
          });
      },
      9519: (e, t, n) => {
        e.exports = n(4835)();
      },
      1596: (e) => {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      6120: (e, t, n) => {
        for (
          var r = n(6282),
            o = "undefined" == typeof window ? n.g : window,
            a = ["moz", "webkit"],
            l = "AnimationFrame",
            i = o["request" + l],
            u = o["cancel" + l] || o["cancelRequest" + l],
            c = 0;
          !i && c < a.length;
          c++
        )
          (i = o[a[c] + "Request" + l]),
            (u = o[a[c] + "Cancel" + l] || o[a[c] + "CancelRequest" + l]);
        if (!i || !u) {
          var s = 0,
            f = 0,
            d = [];
          (i = function (e) {
            if (0 === d.length) {
              var t = r(),
                n = Math.max(0, 16.666666666666668 - (t - s));
              (s = n + t),
                setTimeout(function () {
                  var e = d.slice(0);
                  d.length = 0;
                  for (var t = 0; t < e.length; t++)
                    if (!e[t].cancelled)
                      try {
                        e[t].callback(s);
                      } catch (e) {
                        setTimeout(function () {
                          throw e;
                        }, 0);
                      }
                }, Math.round(n));
            }
            return d.push({ handle: ++f, callback: e, cancelled: !1 }), f;
          }),
            (u = function (e) {
              for (var t = 0; t < d.length; t++)
                d[t].handle === e && (d[t].cancelled = !0);
            });
        }
        (e.exports = function (e) {
          return i.call(o, e);
        }),
          (e.exports.cancel = function () {
            u.apply(o, arguments);
          }),
          (e.exports.polyfill = function (e) {
            e || (e = o),
              (e.requestAnimationFrame = i),
              (e.cancelAnimationFrame = u);
          });
      },
      4005: (e, t, n) => {
        "use strict";
        var r = n(9231),
          o = n(1538),
          a = n(1851);
        function l(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        if (!r) throw Error(l(227));
        var i = new Set(),
          u = {};
        function c(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (u[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var f = !(
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = Object.prototype.hasOwnProperty,
          v = {},
          m = {};
        function g(e, t, n, r, o, a, l) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = l);
        }
        var h = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            h[e] = new g(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            h[t] = new g(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              h[e] = new g(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            h[e] = new g(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              h[e] = new g(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            h[e] = new g(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            h[e] = new g(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            h[e] = new g(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            h[e] = new g(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function A(e, t, n, r) {
          var o = h.hasOwnProperty(t) ? h[t] : null;
          (null !== o
            ? 0 === o.type
            : !r &&
              2 < t.length &&
              ("o" === t[0] || "O" === t[0]) &&
              ("n" === t[1] || "N" === t[1])) ||
            ((function (e, t, n, r) {
              if (
                null == t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!p.call(m, e) ||
                    (!p.call(v, e) &&
                      (d.test(e) ? (m[e] = !0) : ((v[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (o = o.type) || (4 === o && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, b);
            h[t] = new g(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, b);
              h[t] = new g(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, b);
            h[t] = new g(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            h[e] = new g(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (h.xlinkHref = new g(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            h[e] = new g(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          O = 60103,
          x = 60106,
          E = 60107,
          S = 60108,
          k = 60114,
          P = 60109,
          C = 60110,
          j = 60112,
          _ = 60113,
          T = 60120,
          N = 60115,
          D = 60116,
          L = 60121,
          R = 60128,
          M = 60129,
          I = 60130,
          z = 60131;
        if ("function" == typeof Symbol && Symbol.for) {
          var B = Symbol.for;
          (O = B("react.element")),
            (x = B("react.portal")),
            (E = B("react.fragment")),
            (S = B("react.strict_mode")),
            (k = B("react.profiler")),
            (P = B("react.provider")),
            (C = B("react.context")),
            (j = B("react.forward_ref")),
            (_ = B("react.suspense")),
            (T = B("react.suspense_list")),
            (N = B("react.memo")),
            (D = B("react.lazy")),
            (L = B("react.block")),
            B("react.scope"),
            (R = B("react.opaque.id")),
            (M = B("react.debug_trace_mode")),
            (I = B("react.offscreen")),
            (z = B("react.legacy_hidden"));
        }
        var F,
          U = "function" == typeof Symbol && Symbol.iterator;
        function H(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (U && e[U]) || e["@@iterator"])
            ? e
            : null;
        }
        function W(e) {
          if (void 0 === F)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              F = (t && t[1]) || "";
            }
          return "\n" + F + e;
        }
        var V = !1;
        function X(e, t) {
          if (!e || V) return "";
          V = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (e) {
                  var r = e;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (e) {
                  r = e;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (e) {
                r = e;
              }
              e();
            }
          } catch (e) {
            if (e && r && "string" == typeof e.stack) {
              for (
                var o = e.stack.split("\n"),
                  a = r.stack.split("\n"),
                  l = o.length - 1,
                  i = a.length - 1;
                1 <= l && 0 <= i && o[l] !== a[i];

              )
                i--;
              for (; 1 <= l && 0 <= i; l--, i--)
                if (o[l] !== a[i]) {
                  if (1 !== l || 1 !== i)
                    do {
                      if ((l--, 0 > --i || o[l] !== a[i]))
                        return "\n" + o[l].replace(" at new ", " at ");
                    } while (1 <= l && 0 <= i);
                  break;
                }
            }
          } finally {
            (V = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? W(e) : "";
        }
        function Y(e) {
          switch (e.tag) {
            case 5:
              return W(e.type);
            case 16:
              return W("Lazy");
            case 13:
              return W("Suspense");
            case 19:
              return W("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = X(e.type, !1));
            case 11:
              return (e = X(e.type.render, !1));
            case 22:
              return (e = X(e.type._render, !1));
            case 1:
              return (e = X(e.type, !0));
            default:
              return "";
          }
        }
        function Q(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case E:
              return "Fragment";
            case x:
              return "Portal";
            case k:
              return "Profiler";
            case S:
              return "StrictMode";
            case _:
              return "Suspense";
            case T:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case C:
                return (e.displayName || "Context") + ".Consumer";
              case P:
                return (e._context.displayName || "Context") + ".Provider";
              case j:
                var t = e.render;
                return (
                  (t = t.displayName || t.name || ""),
                  e.displayName ||
                    ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
                );
              case N:
                return Q(e.type);
              case L:
                return Q(e._render);
              case D:
                (t = e._payload), (e = e._init);
                try {
                  return Q(e(t));
                } catch (e) {}
            }
          return null;
        }
        function K(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
              return e;
            default:
              return "";
          }
        }
        function G(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = G(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                void 0 !== n &&
                "function" == typeof n.get &&
                "function" == typeof n.set
              ) {
                var o = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function J(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = G(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Z(e) {
          if (
            void 0 ===
            (e = e || ("undefined" != typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function $(e, t) {
          var n = t.checked;
          return o({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function ee(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = K(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function te(e, t) {
          null != (t = t.checked) && A(e, "checked", t, !1);
        }
        function ne(e, t) {
          te(e, t);
          var n = K(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? oe(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              oe(e, t.type, K(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function re(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function oe(e, t, n) {
          ("number" === t && Z(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        function ae(e, t) {
          return (
            (e = o({ children: void 0 }, t)),
            (t = (function (e) {
              var t = "";
              return (
                r.Children.forEach(e, function (e) {
                  null != e && (t += e);
                }),
                t
              );
            })(t.children)) && (e.children = t),
            e
          );
        }
        function le(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + K(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function ie(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
          return o({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ue(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(l(92));
              if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(l(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: K(n) };
        }
        function ce(e, t) {
          var n = K(t.value),
            r = K(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function se(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        var fe = "http://www.w3.org/1999/xhtml",
          de = "http://www.w3.org/2000/svg";
        function pe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ve(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? pe(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var me,
          ge,
          he =
            ((ge = function (e, t) {
              if (e.namespaceURI !== de || "innerHTML" in e) e.innerHTML = t;
              else {
                for (
                  (me = me || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = me.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ge(e, t);
                  });
                }
              : ge);
        function ye(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var be = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          Ae = ["Webkit", "ms", "Moz", "O"];
        function we(e, t, n) {
          return null == t || "boolean" == typeof t || "" === t
            ? ""
            : n ||
              "number" != typeof t ||
              0 === t ||
              (be.hasOwnProperty(e) && be[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function Oe(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                o = we(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(be).forEach(function (e) {
          Ae.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (be[t] = be[e]);
          });
        });
        var xe = o(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function Ee(e, t) {
          if (t) {
            if (
              xe[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(l(60));
              if (
                "object" != typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(l(61));
            }
            if (null != t.style && "object" != typeof t.style)
              throw Error(l(62));
          }
        }
        function Se(e, t) {
          if (-1 === e.indexOf("-")) return "string" == typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Pe = null,
          Ce = null,
          je = null;
        function _e(e) {
          if ((e = ro(e))) {
            if ("function" != typeof Pe) throw Error(l(280));
            var t = e.stateNode;
            t && ((t = ao(t)), Pe(e.stateNode, e.type, t));
          }
        }
        function Te(e) {
          Ce ? (je ? je.push(e) : (je = [e])) : (Ce = e);
        }
        function Ne() {
          if (Ce) {
            var e = Ce,
              t = je;
            if (((je = Ce = null), _e(e), t))
              for (e = 0; e < t.length; e++) _e(t[e]);
          }
        }
        function De(e, t) {
          return e(t);
        }
        function Le(e, t, n, r, o) {
          return e(t, n, r, o);
        }
        function Re() {}
        var Me = De,
          Ie = !1,
          ze = !1;
        function Be() {
          (null === Ce && null === je) || (Re(), Ne());
        }
        function Fe(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ao(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" != typeof n) throw Error(l(231, t, typeof n));
          return n;
        }
        var Ue = !1;
        if (f)
          try {
            var He = {};
            Object.defineProperty(He, "passive", {
              get: function () {
                Ue = !0;
              },
            }),
              window.addEventListener("test", He, He),
              window.removeEventListener("test", He, He);
          } catch (ge) {
            Ue = !1;
          }
        function We(e, t, n, r, o, a, l, i, u) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (e) {
            this.onError(e);
          }
        }
        var Ve = !1,
          Xe = null,
          Ye = !1,
          Qe = null,
          Ke = {
            onError: function (e) {
              (Ve = !0), (Xe = e);
            },
          };
        function Ge(e, t, n, r, o, a, l, i, u) {
          (Ve = !1), (Xe = null), We.apply(Ke, arguments);
        }
        function qe(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 != (1026 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Je(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ze(e) {
          if (qe(e) !== e) throw Error(l(188));
        }
        function $e(e) {
          if (
            ((e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = qe(e))) throw Error(l(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var a = o.alternate;
                if (null === a) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === a.child) {
                  for (a = o.child; a; ) {
                    if (a === n) return Ze(o), e;
                    if (a === r) return Ze(o), t;
                    a = a.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) (n = o), (r = a);
                else {
                  for (var i = !1, u = o.child; u; ) {
                    if (u === n) {
                      (i = !0), (n = o), (r = a);
                      break;
                    }
                    if (u === r) {
                      (i = !0), (r = o), (n = a);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!i) {
                    for (u = a.child; u; ) {
                      if (u === n) {
                        (i = !0), (n = a), (r = o);
                        break;
                      }
                      if (u === r) {
                        (i = !0), (r = a), (n = o);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!i) throw Error(l(189));
                  }
                }
                if (n.alternate !== r) throw Error(l(190));
              }
              if (3 !== n.tag) throw Error(l(188));
              return n.stateNode.current === n ? e : t;
            })(e)),
            !e)
          )
            return null;
          for (var t = e; ; ) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) (t.child.return = t), (t = t.child);
            else {
              if (t === e) break;
              for (; !t.sibling; ) {
                if (!t.return || t.return === e) return null;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return null;
        }
        function et(e, t) {
          for (var n = e.alternate; null !== t; ) {
            if (t === e || t === n) return !0;
            t = t.return;
          }
          return !1;
        }
        var tt,
          nt,
          rt,
          ot,
          at = !1,
          lt = [],
          it = null,
          ut = null,
          ct = null,
          st = new Map(),
          ft = new Map(),
          dt = [],
          pt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function vt(e, t, n, r, o) {
          return {
            blockedOn: e,
            domEventName: t,
            eventSystemFlags: 16 | n,
            nativeEvent: o,
            targetContainers: [r],
          };
        }
        function mt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              it = null;
              break;
            case "dragenter":
            case "dragleave":
              ut = null;
              break;
            case "mouseover":
            case "mouseout":
              ct = null;
              break;
            case "pointerover":
            case "pointerout":
              st.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              ft.delete(t.pointerId);
          }
        }
        function gt(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = vt(t, n, r, o, a)),
              null !== t && null !== (t = ro(t)) && nt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function ht(e) {
          var t = no(e.target);
          if (null !== t) {
            var n = qe(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Je(n)))
                  return (
                    (e.blockedOn = t),
                    void ot(e.lanePriority, function () {
                      a.unstable_runWithPriority(e.priority, function () {
                        rt(n);
                      });
                    })
                  );
              } else if (3 === t && n.stateNode.hydrate)
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function yt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = $t(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ro(n)) && nt(t), (e.blockedOn = n), !1;
            t.shift();
          }
          return !0;
        }
        function bt(e, t, n) {
          yt(e) && n.delete(t);
        }
        function At() {
          for (at = !1; 0 < lt.length; ) {
            var e = lt[0];
            if (null !== e.blockedOn) {
              null !== (e = ro(e.blockedOn)) && tt(e);
              break;
            }
            for (var t = e.targetContainers; 0 < t.length; ) {
              var n = $t(
                e.domEventName,
                e.eventSystemFlags,
                t[0],
                e.nativeEvent
              );
              if (null !== n) {
                e.blockedOn = n;
                break;
              }
              t.shift();
            }
            null === e.blockedOn && lt.shift();
          }
          null !== it && yt(it) && (it = null),
            null !== ut && yt(ut) && (ut = null),
            null !== ct && yt(ct) && (ct = null),
            st.forEach(bt),
            ft.forEach(bt);
        }
        function wt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            at ||
              ((at = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, At)));
        }
        function Ot(e) {
          function t(t) {
            return wt(t, e);
          }
          if (0 < lt.length) {
            wt(lt[0], e);
            for (var n = 1; n < lt.length; n++) {
              var r = lt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== it && wt(it, e),
              null !== ut && wt(ut, e),
              null !== ct && wt(ct, e),
              st.forEach(t),
              ft.forEach(t),
              n = 0;
            n < dt.length;
            n++
          )
            (r = dt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < dt.length && null === (n = dt[0]).blockedOn; )
            ht(n), null === n.blockedOn && dt.shift();
        }
        function xt(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Et = {
            animationend: xt("Animation", "AnimationEnd"),
            animationiteration: xt("Animation", "AnimationIteration"),
            animationstart: xt("Animation", "AnimationStart"),
            transitionend: xt("Transition", "TransitionEnd"),
          },
          St = {},
          kt = {};
        function Pt(e) {
          if (St[e]) return St[e];
          if (!Et[e]) return e;
          var t,
            n = Et[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in kt) return (St[e] = n[t]);
          return e;
        }
        f &&
          ((kt = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Et.animationend.animation,
            delete Et.animationiteration.animation,
            delete Et.animationstart.animation),
          "TransitionEvent" in window || delete Et.transitionend.transition);
        var Ct = Pt("animationend"),
          jt = Pt("animationiteration"),
          _t = Pt("animationstart"),
          Tt = Pt("transitionend"),
          Nt = new Map(),
          Dt = new Map(),
          Lt = [
            "abort",
            "abort",
            Ct,
            "animationEnd",
            jt,
            "animationIteration",
            _t,
            "animationStart",
            "canplay",
            "canPlay",
            "canplaythrough",
            "canPlayThrough",
            "durationchange",
            "durationChange",
            "emptied",
            "emptied",
            "encrypted",
            "encrypted",
            "ended",
            "ended",
            "error",
            "error",
            "gotpointercapture",
            "gotPointerCapture",
            "load",
            "load",
            "loadeddata",
            "loadedData",
            "loadedmetadata",
            "loadedMetadata",
            "loadstart",
            "loadStart",
            "lostpointercapture",
            "lostPointerCapture",
            "playing",
            "playing",
            "progress",
            "progress",
            "seeking",
            "seeking",
            "stalled",
            "stalled",
            "suspend",
            "suspend",
            "timeupdate",
            "timeUpdate",
            Tt,
            "transitionEnd",
            "waiting",
            "waiting",
          ];
        function Rt(e, t) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
              o = e[n + 1];
            (o = "on" + (o[0].toUpperCase() + o.slice(1))),
              Dt.set(r, t),
              Nt.set(r, o),
              c(o, [r]);
          }
        }
        (0, a.unstable_now)();
        var Mt = 8;
        function It(e) {
          if (0 != (1 & e)) return (Mt = 15), 1;
          if (0 != (2 & e)) return (Mt = 14), 2;
          if (0 != (4 & e)) return (Mt = 13), 4;
          var t = 24 & e;
          return 0 !== t
            ? ((Mt = 12), t)
            : 0 != (32 & e)
            ? ((Mt = 11), 32)
            : 0 !== (t = 192 & e)
            ? ((Mt = 10), t)
            : 0 != (256 & e)
            ? ((Mt = 9), 256)
            : 0 !== (t = 3584 & e)
            ? ((Mt = 8), t)
            : 0 != (4096 & e)
            ? ((Mt = 7), 4096)
            : 0 !== (t = 4186112 & e)
            ? ((Mt = 6), t)
            : 0 !== (t = 62914560 & e)
            ? ((Mt = 5), t)
            : 67108864 & e
            ? ((Mt = 4), 67108864)
            : 0 != (134217728 & e)
            ? ((Mt = 3), 134217728)
            : 0 !== (t = 805306368 & e)
            ? ((Mt = 2), t)
            : 0 != (1073741824 & e)
            ? ((Mt = 1), 1073741824)
            : ((Mt = 8), e);
        }
        function zt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return (Mt = 0);
          var r = 0,
            o = 0,
            a = e.expiredLanes,
            l = e.suspendedLanes,
            i = e.pingedLanes;
          if (0 !== a) (r = a), (o = Mt = 15);
          else if (0 !== (a = 134217727 & n)) {
            var u = a & ~l;
            0 !== u
              ? ((r = It(u)), (o = Mt))
              : 0 !== (i &= a) && ((r = It(i)), (o = Mt));
          } else
            0 !== (a = n & ~l)
              ? ((r = It(a)), (o = Mt))
              : 0 !== i && ((r = It(i)), (o = Mt));
          if (0 === r) return 0;
          if (
            ((r = n & (((0 > (r = 31 - Vt(r)) ? 0 : 1 << r) << 1) - 1)),
            0 !== t && t !== r && 0 == (t & l))
          ) {
            if ((It(t), o <= Mt)) return t;
            Mt = o;
          }
          if (0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - Vt(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function Bt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function Ft(e, t) {
          switch (e) {
            case 15:
              return 1;
            case 14:
              return 2;
            case 12:
              return 0 === (e = Ut(24 & ~t)) ? Ft(10, t) : e;
            case 10:
              return 0 === (e = Ut(192 & ~t)) ? Ft(8, t) : e;
            case 8:
              return (
                0 === (e = Ut(3584 & ~t)) &&
                  0 === (e = Ut(4186112 & ~t)) &&
                  (e = 512),
                e
              );
            case 2:
              return 0 === (t = Ut(805306368 & ~t)) && (t = 268435456), t;
          }
          throw Error(l(358, e));
        }
        function Ut(e) {
          return e & -e;
        }
        function Ht(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Wt(e, t, n) {
          e.pendingLanes |= t;
          var r = t - 1;
          (e.suspendedLanes &= r),
            (e.pingedLanes &= r),
            ((e = e.eventTimes)[(t = 31 - Vt(t))] = n);
        }
        var Vt = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === e ? 32 : (31 - ((Xt(e) / Yt) | 0)) | 0;
              },
          Xt = Math.log,
          Yt = Math.LN2;
        var Qt = a.unstable_UserBlockingPriority,
          Kt = a.unstable_runWithPriority,
          Gt = !0;
        function qt(e, t, n, r) {
          Ie || Re();
          var o = Zt,
            a = Ie;
          Ie = !0;
          try {
            Le(o, e, t, n, r);
          } finally {
            (Ie = a) || Be();
          }
        }
        function Jt(e, t, n, r) {
          Kt(Qt, Zt.bind(null, e, t, n, r));
        }
        function Zt(e, t, n, r) {
          var o;
          if (Gt)
            if ((o = 0 == (4 & t)) && 0 < lt.length && -1 < pt.indexOf(e))
              (e = vt(null, e, t, n, r)), lt.push(e);
            else {
              var a = $t(e, t, n, r);
              if (null === a) o && mt(e, r);
              else {
                if (o) {
                  if (-1 < pt.indexOf(e))
                    return (e = vt(a, e, t, n, r)), void lt.push(e);
                  if (
                    (function (e, t, n, r, o) {
                      switch (t) {
                        case "focusin":
                          return (it = gt(it, e, t, n, r, o)), !0;
                        case "dragenter":
                          return (ut = gt(ut, e, t, n, r, o)), !0;
                        case "mouseover":
                          return (ct = gt(ct, e, t, n, r, o)), !0;
                        case "pointerover":
                          var a = o.pointerId;
                          return (
                            st.set(a, gt(st.get(a) || null, e, t, n, r, o)), !0
                          );
                        case "gotpointercapture":
                          return (
                            (a = o.pointerId),
                            ft.set(a, gt(ft.get(a) || null, e, t, n, r, o)),
                            !0
                          );
                      }
                      return !1;
                    })(a, e, t, n, r)
                  )
                    return;
                  mt(e, r);
                }
                Rr(e, t, r, null, n);
              }
            }
        }
        function $t(e, t, n, r) {
          var o = ke(r);
          if (null !== (o = no(o))) {
            var a = qe(o);
            if (null === a) o = null;
            else {
              var l = a.tag;
              if (13 === l) {
                if (null !== (o = Je(a))) return o;
                o = null;
              } else if (3 === l) {
                if (a.stateNode.hydrate)
                  return 3 === a.tag ? a.stateNode.containerInfo : null;
                o = null;
              } else a !== o && (o = null);
            }
          }
          return Rr(e, t, r, o, n), null;
        }
        var en = null,
          tn = null,
          nn = null;
        function rn() {
          if (nn) return nn;
          var e,
            t,
            n = tn,
            r = n.length,
            o = "value" in en ? en.value : en.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var l = r - e;
          for (t = 1; t <= l && n[r - t] === o[a - t]; t++);
          return (nn = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function on(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function an() {
          return !0;
        }
        function ln() {
          return !1;
        }
        function un(e) {
          function t(t, n, r, o, a) {
            for (var l in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(o) : o[l]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? an
                : ln),
              (this.isPropagationStopped = ln),
              this
            );
          }
          return (
            o(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = an));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" != typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = an));
              },
              persist: function () {},
              isPersistent: an,
            }),
            t
          );
        }
        var cn,
          sn,
          fn,
          dn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          pn = un(dn),
          vn = o({}, dn, { view: 0, detail: 0 }),
          mn = un(vn),
          gn = o({}, vn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== fn &&
                    (fn && "mousemove" === e.type
                      ? ((cn = e.screenX - fn.screenX),
                        (sn = e.screenY - fn.screenY))
                      : (sn = cn = 0),
                    (fn = e)),
                  cn);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          hn = un(gn),
          yn = un(o({}, gn, { dataTransfer: 0 })),
          bn = un(o({}, vn, { relatedTarget: 0 })),
          An = un(
            o({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          wn = o({}, dn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          On = un(wn),
          xn = un(o({}, dn, { data: 0 })),
          En = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          Sn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          kn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Pn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = kn[e]) && !!t[e];
        }
        function Cn() {
          return Pn;
        }
        var jn = o({}, vn, {
            key: function (e) {
              if (e.key) {
                var t = En[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = on(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Sn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? on(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? on(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          _n = un(jn),
          Tn = un(
            o({}, gn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Nn = un(
            o({}, vn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          Dn = un(
            o({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Ln = o({}, gn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Rn = un(Ln),
          Mn = [9, 13, 27, 32],
          In = f && "CompositionEvent" in window,
          zn = null;
        f && "documentMode" in document && (zn = document.documentMode);
        var Bn = f && "TextEvent" in window && !zn,
          Fn = f && (!In || (zn && 8 < zn && 11 >= zn)),
          Un = String.fromCharCode(32),
          Hn = !1;
        function Wn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Mn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Vn(e) {
          return "object" == typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Xn = !1;
        var Yn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Qn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Yn[e.type] : "textarea" === t;
        }
        function Kn(e, t, n, r) {
          Te(r),
            0 < (t = Ir(t, "onChange")).length &&
              ((n = new pn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Gn = null,
          qn = null;
        function Jn(e) {
          jr(e, 0);
        }
        function Zn(e) {
          if (J(oo(e))) return e;
        }
        function $n(e, t) {
          if ("change" === e) return t;
        }
        var er = !1;
        if (f) {
          var tr;
          if (f) {
            var nr = "oninput" in document;
            if (!nr) {
              var rr = document.createElement("div");
              rr.setAttribute("oninput", "return;"),
                (nr = "function" == typeof rr.oninput);
            }
            tr = nr;
          } else tr = !1;
          er = tr && (!document.documentMode || 9 < document.documentMode);
        }
        function or() {
          Gn && (Gn.detachEvent("onpropertychange", ar), (qn = Gn = null));
        }
        function ar(e) {
          if ("value" === e.propertyName && Zn(qn)) {
            var t = [];
            if ((Kn(t, qn, e, ke(e)), (e = Jn), Ie)) e(t);
            else {
              Ie = !0;
              try {
                De(e, t);
              } finally {
                (Ie = !1), Be();
              }
            }
          }
        }
        function lr(e, t, n) {
          "focusin" === e
            ? (or(), (qn = n), (Gn = t).attachEvent("onpropertychange", ar))
            : "focusout" === e && or();
        }
        function ir(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Zn(qn);
        }
        function ur(e, t) {
          if ("click" === e) return Zn(t);
        }
        function cr(e, t) {
          if ("input" === e || "change" === e) return Zn(t);
        }
        var sr =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          fr = Object.prototype.hasOwnProperty;
        function dr(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++)
            if (!fr.call(t, n[r]) || !sr(e[n[r]], t[n[r]])) return !1;
          return !0;
        }
        function pr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function vr(e, t) {
          var n,
            r = pr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = pr(r);
          }
        }
        function mr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? mr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function gr() {
          for (var e = window, t = Z(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" == typeof t.contentWindow.location.href;
            } catch (e) {
              n = !1;
            }
            if (!n) break;
            t = Z((e = t.contentWindow).document);
          }
          return t;
        }
        function hr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var yr = f && "documentMode" in document && 11 >= document.documentMode,
          br = null,
          Ar = null,
          wr = null,
          Or = !1;
        function xr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          Or ||
            null == br ||
            br !== Z(r) ||
            ("selectionStart" in (r = br) && hr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (wr && dr(wr, r)) ||
              ((wr = r),
              0 < (r = Ir(Ar, "onSelect")).length &&
                ((t = new pn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = br))));
        }
        Rt(
          "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
            " "
          ),
          0
        ),
          Rt(
            "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
              " "
            ),
            1
          ),
          Rt(Lt, 2);
        for (
          var Er =
              "change selectionchange textInput compositionstart compositionend compositionupdate".split(
                " "
              ),
            Sr = 0;
          Sr < Er.length;
          Sr++
        )
          Dt.set(Er[Sr], 0);
        s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          c(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          c(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          c("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          c(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          c(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          c(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var kr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Pr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(kr)
          );
        function Cr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, o, a, i, u, c) {
              if ((Ge.apply(this, arguments), Ve)) {
                if (!Ve) throw Error(l(198));
                var s = Xe;
                (Ve = !1), (Xe = null), Ye || ((Ye = !0), (Qe = s));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function jr(e, t) {
          t = 0 != (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var i = r[l],
                    u = i.instance,
                    c = i.currentTarget;
                  if (((i = i.listener), u !== a && o.isPropagationStopped()))
                    break e;
                  Cr(o, i, c), (a = u);
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((u = (i = r[l]).instance),
                    (c = i.currentTarget),
                    (i = i.listener),
                    u !== a && o.isPropagationStopped())
                  )
                    break e;
                  Cr(o, i, c), (a = u);
                }
            }
          }
          if (Ye) throw ((e = Qe), (Ye = !1), (Qe = null), e);
        }
        function _r(e, t) {
          var n = lo(t),
            r = e + "__bubble";
          n.has(r) || (Lr(t, e, 2, !1), n.add(r));
        }
        var Tr = "_reactListening" + Math.random().toString(36).slice(2);
        function Nr(e) {
          e[Tr] ||
            ((e[Tr] = !0),
            i.forEach(function (t) {
              Pr.has(t) || Dr(t, !1, e, null), Dr(t, !0, e, null);
            }));
        }
        function Dr(e, t, n, r) {
          var o =
              4 < arguments.length && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            a = n;
          if (
            ("selectionchange" === e &&
              9 !== n.nodeType &&
              (a = n.ownerDocument),
            null !== r && !t && Pr.has(e))
          ) {
            if ("scroll" !== e) return;
            (o |= 2), (a = r);
          }
          var l = lo(a),
            i = e + "__" + (t ? "capture" : "bubble");
          l.has(i) || (t && (o |= 4), Lr(a, e, o, t), l.add(i));
        }
        function Lr(e, t, n, r) {
          var o = Dt.get(t);
          switch (void 0 === o ? 2 : o) {
            case 0:
              o = qt;
              break;
            case 1:
              o = Jt;
              break;
            default:
              o = Zt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Ue ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
        }
        function Rr(e, t, n, r, o) {
          var a = r;
          if (0 == (1 & t) && 0 == (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var l = r.tag;
              if (3 === l || 4 === l) {
                var i = r.stateNode.containerInfo;
                if (i === o || (8 === i.nodeType && i.parentNode === o)) break;
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var u = l.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = l.stateNode.containerInfo) === o ||
                        (8 === u.nodeType && u.parentNode === o))
                    )
                      return;
                    l = l.return;
                  }
                for (; null !== i; ) {
                  if (null === (l = no(i))) return;
                  if (5 === (u = l.tag) || 6 === u) {
                    r = a = l;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          !(function (e, t, n) {
            if (ze) return e(t, n);
            ze = !0;
            try {
              Me(e, t, n);
            } finally {
              (ze = !1), Be();
            }
          })(function () {
            var r = a,
              o = ke(n),
              l = [];
            e: {
              var i = Nt.get(e);
              if (void 0 !== i) {
                var u = pn,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === on(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = _n;
                    break;
                  case "focusin":
                    (c = "focus"), (u = bn);
                    break;
                  case "focusout":
                    (c = "blur"), (u = bn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = bn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = yn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Nn;
                    break;
                  case Ct:
                  case jt:
                  case _t:
                    u = An;
                    break;
                  case Tt:
                    u = Dn;
                    break;
                  case "scroll":
                    u = mn;
                    break;
                  case "wheel":
                    u = Rn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = On;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Tn;
                }
                var s = 0 != (4 & t),
                  f = !s && "scroll" === e,
                  d = s ? (null !== i ? i + "Capture" : null) : i;
                s = [];
                for (var p, v = r; null !== v; ) {
                  var m = (p = v).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== d &&
                        null != (m = Fe(v, d)) &&
                        s.push(Mr(v, m, p))),
                    f)
                  )
                    break;
                  v = v.return;
                }
                0 < s.length &&
                  ((i = new u(i, c, null, n, o)),
                  l.push({ event: i, listeners: s }));
              }
            }
            if (0 == (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  0 != (16 & t) ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!no(c) && !c[eo])) &&
                  (u || i) &&
                  ((i =
                    o.window === o
                      ? o
                      : (i = o.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? no(c)
                          : null) &&
                        (c !== (f = qe(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((u = null), (c = r)),
                  u !== c))
              ) {
                if (
                  ((s = hn),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (v = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((s = Tn),
                    (m = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (v = "pointer")),
                  (f = null == u ? i : oo(u)),
                  (p = null == c ? i : oo(c)),
                  ((i = new s(m, v + "leave", u, n, o)).target = f),
                  (i.relatedTarget = p),
                  (m = null),
                  no(o) === r &&
                    (((s = new s(d, v + "enter", c, n, o)).target = p),
                    (s.relatedTarget = f),
                    (m = s)),
                  (f = m),
                  u && c)
                )
                  e: {
                    for (d = c, v = 0, p = s = u; p; p = zr(p)) v++;
                    for (p = 0, m = d; m; m = zr(m)) p++;
                    for (; 0 < v - p; ) (s = zr(s)), v--;
                    for (; 0 < p - v; ) (d = zr(d)), p--;
                    for (; v--; ) {
                      if (s === d || (null !== d && s === d.alternate)) break e;
                      (s = zr(s)), (d = zr(d));
                    }
                    s = null;
                  }
                else s = null;
                null !== u && Br(l, i, u, s, !1),
                  null !== c && null !== f && Br(l, f, c, s, !0);
              }
              if (
                "select" ===
                  (u =
                    (i = r ? oo(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === u && "file" === i.type)
              )
                var g = $n;
              else if (Qn(i))
                if (er) g = cr;
                else {
                  g = ir;
                  var h = lr;
                }
              else
                (u = i.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (g = ur);
              switch (
                (g && (g = g(e, r))
                  ? Kn(l, g, n, o)
                  : (h && h(e, i, r),
                    "focusout" === e &&
                      (h = i._wrapperState) &&
                      h.controlled &&
                      "number" === i.type &&
                      oe(i, "number", i.value)),
                (h = r ? oo(r) : window),
                e)
              ) {
                case "focusin":
                  (Qn(h) || "true" === h.contentEditable) &&
                    ((br = h), (Ar = r), (wr = null));
                  break;
                case "focusout":
                  wr = Ar = br = null;
                  break;
                case "mousedown":
                  Or = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (Or = !1), xr(l, n, o);
                  break;
                case "selectionchange":
                  if (yr) break;
                case "keydown":
                case "keyup":
                  xr(l, n, o);
              }
              var y;
              if (In)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Xn
                  ? Wn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Fn &&
                  "ko" !== n.locale &&
                  (Xn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Xn && (y = rn())
                    : ((tn = "value" in (en = o) ? en.value : en.textContent),
                      (Xn = !0))),
                0 < (h = Ir(r, b)).length &&
                  ((b = new xn(b, e, null, n, o)),
                  l.push({ event: b, listeners: h }),
                  y ? (b.data = y) : null !== (y = Vn(n)) && (b.data = y))),
                (y = Bn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Vn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Hn = !0), Un);
                        case "textInput":
                          return (e = t.data) === Un && Hn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Xn)
                        return "compositionend" === e || (!In && Wn(e, t))
                          ? ((e = rn()), (nn = tn = en = null), (Xn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Fn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Ir(r, "onBeforeInput")).length &&
                  ((o = new xn("onBeforeInput", "beforeinput", null, n, o)),
                  l.push({ event: o, listeners: r }),
                  (o.data = y));
            }
            jr(l, t);
          });
        }
        function Mr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Ir(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            5 === o.tag &&
              null !== a &&
              ((o = a),
              null != (a = Fe(e, n)) && r.unshift(Mr(e, a, o)),
              null != (a = Fe(e, t)) && r.push(Mr(e, a, o))),
              (e = e.return);
          }
          return r;
        }
        function zr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Br(e, t, n, r, o) {
          for (var a = t._reactName, l = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              c = i.stateNode;
            if (null !== u && u === r) break;
            5 === i.tag &&
              null !== c &&
              ((i = c),
              o
                ? null != (u = Fe(n, a)) && l.unshift(Mr(n, u, i))
                : o || (null != (u = Fe(n, a)) && l.push(Mr(n, u, i)))),
              (n = n.return);
          }
          0 !== l.length && e.push({ event: t, listeners: l });
        }
        function Fr() {}
        var Ur = null,
          Hr = null;
        function Wr(e, t) {
          switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              return !!t.autoFocus;
          }
          return !1;
        }
        function Vr(e, t) {
          return (
            "textarea" === e ||
            "option" === e ||
            "noscript" === e ||
            "string" == typeof t.children ||
            "number" == typeof t.children ||
            ("object" == typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var Xr = "function" == typeof setTimeout ? setTimeout : void 0,
          Yr = "function" == typeof clearTimeout ? clearTimeout : void 0;
        function Qr(e) {
          1 === e.nodeType
            ? (e.textContent = "")
            : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
        }
        function Kr(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
          }
          return e;
        }
        function Gr(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var qr = 0;
        var Jr = Math.random().toString(36).slice(2),
          Zr = "__reactFiber$" + Jr,
          $r = "__reactProps$" + Jr,
          eo = "__reactContainer$" + Jr,
          to = "__reactEvents$" + Jr;
        function no(e) {
          var t = e[Zr];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[eo] || n[Zr])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = Gr(e); null !== e; ) {
                  if ((n = e[Zr])) return n;
                  e = Gr(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ro(e) {
          return !(e = e[Zr] || e[eo]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function oo(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function ao(e) {
          return e[$r] || null;
        }
        function lo(e) {
          var t = e[to];
          return void 0 === t && (t = e[to] = new Set()), t;
        }
        var io = [],
          uo = -1;
        function co(e) {
          return { current: e };
        }
        function so(e) {
          0 > uo || ((e.current = io[uo]), (io[uo] = null), uo--);
        }
        function fo(e, t) {
          uo++, (io[uo] = e.current), (e.current = t);
        }
        var po = {},
          vo = co(po),
          mo = co(!1),
          go = po;
        function ho(e, t) {
          var n = e.type.contextTypes;
          if (!n) return po;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            a = {};
          for (o in n) a[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function yo(e) {
          return null != (e = e.childContextTypes);
        }
        function bo() {
          so(mo), so(vo);
        }
        function Ao(e, t, n) {
          if (vo.current !== po) throw Error(l(168));
          fo(vo, t), fo(mo, n);
        }
        function wo(e, t, n) {
          var r = e.stateNode;
          if (
            ((e = t.childContextTypes), "function" != typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in e)) throw Error(l(108, Q(t) || "Unknown", a));
          return o({}, n, r);
        }
        function Oo(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              po),
            (go = vo.current),
            fo(vo, e),
            fo(mo, mo.current),
            !0
          );
        }
        function xo(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          n
            ? ((e = wo(e, t, go)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              so(mo),
              so(vo),
              fo(vo, e))
            : so(mo),
            fo(mo, n);
        }
        var Eo = null,
          So = null,
          ko = a.unstable_runWithPriority,
          Po = a.unstable_scheduleCallback,
          Co = a.unstable_cancelCallback,
          jo = a.unstable_shouldYield,
          _o = a.unstable_requestPaint,
          To = a.unstable_now,
          No = a.unstable_getCurrentPriorityLevel,
          Do = a.unstable_ImmediatePriority,
          Lo = a.unstable_UserBlockingPriority,
          Ro = a.unstable_NormalPriority,
          Mo = a.unstable_LowPriority,
          Io = a.unstable_IdlePriority,
          zo = {},
          Bo = void 0 !== _o ? _o : function () {},
          Fo = null,
          Uo = null,
          Ho = !1,
          Wo = To(),
          Vo =
            1e4 > Wo
              ? To
              : function () {
                  return To() - Wo;
                };
        function Xo() {
          switch (No()) {
            case Do:
              return 99;
            case Lo:
              return 98;
            case Ro:
              return 97;
            case Mo:
              return 96;
            case Io:
              return 95;
            default:
              throw Error(l(332));
          }
        }
        function Yo(e) {
          switch (e) {
            case 99:
              return Do;
            case 98:
              return Lo;
            case 97:
              return Ro;
            case 96:
              return Mo;
            case 95:
              return Io;
            default:
              throw Error(l(332));
          }
        }
        function Qo(e, t) {
          return (e = Yo(e)), ko(e, t);
        }
        function Ko(e, t, n) {
          return (e = Yo(e)), Po(e, t, n);
        }
        function Go() {
          if (null !== Uo) {
            var e = Uo;
            (Uo = null), Co(e);
          }
          qo();
        }
        function qo() {
          if (!Ho && null !== Fo) {
            Ho = !0;
            var e = 0;
            try {
              var t = Fo;
              Qo(99, function () {
                for (; e < t.length; e++) {
                  var n = t[e];
                  do {
                    n = n(!0);
                  } while (null !== n);
                }
              }),
                (Fo = null);
            } catch (t) {
              throw (null !== Fo && (Fo = Fo.slice(e + 1)), Po(Do, Go), t);
            } finally {
              Ho = !1;
            }
          }
        }
        var Jo = w.ReactCurrentBatchConfig;
        function Zo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = o({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var $o = co(null),
          ea = null,
          ta = null,
          na = null;
        function ra() {
          na = ta = ea = null;
        }
        function oa(e) {
          var t = $o.current;
          so($o), (e.type._context._currentValue = t);
        }
        function aa(e, t) {
          for (; null !== e; ) {
            var n = e.alternate;
            if ((e.childLanes & t) === t) {
              if (null === n || (n.childLanes & t) === t) break;
              n.childLanes |= t;
            } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
            e = e.return;
          }
        }
        function la(e, t) {
          (ea = e),
            (na = ta = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 != (e.lanes & t) && (Il = !0), (e.firstContext = null));
        }
        function ia(e, t) {
          if (na !== e && !1 !== t && 0 !== t)
            if (
              (("number" == typeof t && 1073741823 !== t) ||
                ((na = e), (t = 1073741823)),
              (t = { context: e, observedBits: t, next: null }),
              null === ta)
            ) {
              if (null === ea) throw Error(l(308));
              (ta = t),
                (ea.dependencies = {
                  lanes: 0,
                  firstContext: t,
                  responders: null,
                });
            } else ta = ta.next = t;
          return e._currentValue;
        }
        var ua = !1;
        function ca(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null },
            effects: null,
          };
        }
        function sa(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function fa(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function da(e, t) {
          if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
              (e.pending = t);
          }
        }
        function pa(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var l = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (o = a = l) : (a = a.next = l), (n = n.next);
              } while (null !== n);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function va(e, t, n, r) {
          var a = e.updateQueue;
          ua = !1;
          var l = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            u = a.shared.pending;
          if (null !== u) {
            a.shared.pending = null;
            var c = u,
              s = c.next;
            (c.next = null), null === i ? (l = s) : (i.next = s), (i = c);
            var f = e.alternate;
            if (null !== f) {
              var d = (f = f.updateQueue).lastBaseUpdate;
              d !== i &&
                (null === d ? (f.firstBaseUpdate = s) : (d.next = s),
                (f.lastBaseUpdate = c));
            }
          }
          if (null !== l) {
            for (d = a.baseState, i = 0, f = s = c = null; ; ) {
              u = l.lane;
              var p = l.eventTime;
              if ((r & u) === u) {
                null !== f &&
                  (f = f.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var v = e,
                    m = l;
                  switch (((u = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" == typeof (v = m.payload)) {
                        d = v.call(p, d, u);
                        break e;
                      }
                      d = v;
                      break e;
                    case 3:
                      v.flags = (-4097 & v.flags) | 64;
                    case 0:
                      if (
                        null ==
                        (u =
                          "function" == typeof (v = m.payload)
                            ? v.call(p, d, u)
                            : v)
                      )
                        break e;
                      d = o({}, d, u);
                      break e;
                    case 2:
                      ua = !0;
                  }
                }
                null !== l.callback &&
                  ((e.flags |= 32),
                  null === (u = a.effects) ? (a.effects = [l]) : u.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: u,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === f ? ((s = f = p), (c = d)) : (f = f.next = p),
                  (i |= u);
              if (null === (l = l.next)) {
                if (null === (u = a.shared.pending)) break;
                (l = u.next),
                  (u.next = null),
                  (a.lastBaseUpdate = u),
                  (a.shared.pending = null);
              }
            }
            null === f && (c = d),
              (a.baseState = c),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = f),
              (Fi |= i),
              (e.lanes = i),
              (e.memoizedState = d);
          }
        }
        function ma(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), "function" != typeof o))
                  throw Error(l(191, o));
                o.call(r);
              }
            }
        }
        var ga = new r.Component().refs;
        function ha(e, t, n, r) {
          (n = null == (n = n(r, (t = e.memoizedState))) ? t : o({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var ya = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && qe(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = fu(),
              o = du(e),
              a = fa(r, o);
            (a.payload = t),
              null != n && (a.callback = n),
              da(e, a),
              pu(e, o, r);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = fu(),
              o = du(e),
              a = fa(r, o);
            (a.tag = 1),
              (a.payload = t),
              null != n && (a.callback = n),
              da(e, a),
              pu(e, o, r);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = fu(),
              r = du(e),
              o = fa(n, r);
            (o.tag = 2), null != t && (o.callback = t), da(e, o), pu(e, r, n);
          },
        };
        function ba(e, t, n, r, o, a, l) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, l)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !dr(n, r) ||
                !dr(o, a);
        }
        function Aa(e, t, n) {
          var r = !1,
            o = po,
            a = t.contextType;
          return (
            "object" == typeof a && null !== a
              ? (a = ia(a))
              : ((o = yo(t) ? go : vo.current),
                (a = (r = null != (r = t.contextTypes)) ? ho(e, o) : po)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = ya),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function wa(e, t, n, r) {
          (e = t.state),
            "function" == typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && ya.enqueueReplaceState(t, t.state, null);
        }
        function Oa(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = ga), ca(e);
          var a = t.contextType;
          "object" == typeof a && null !== a
            ? (o.context = ia(a))
            : ((a = yo(t) ? go : vo.current), (o.context = ho(e, a))),
            va(e, n, o, r),
            (o.state = e.memoizedState),
            "function" == typeof (a = t.getDerivedStateFromProps) &&
              (ha(e, t, a, n), (o.state = e.memoizedState)),
            "function" == typeof t.getDerivedStateFromProps ||
              "function" == typeof o.getSnapshotBeforeUpdate ||
              ("function" != typeof o.UNSAFE_componentWillMount &&
                "function" != typeof o.componentWillMount) ||
              ((t = o.state),
              "function" == typeof o.componentWillMount &&
                o.componentWillMount(),
              "function" == typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && ya.enqueueReplaceState(o, o.state, null),
              va(e, n, o, r),
              (o.state = e.memoizedState)),
            "function" == typeof o.componentDidMount && (e.flags |= 4);
        }
        var xa = Array.isArray;
        function Ea(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" != typeof e &&
            "object" != typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(l(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(l(147, e));
              var o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" == typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = r.refs;
                    t === ga && (t = r.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" != typeof e) throw Error(l(284));
            if (!n._owner) throw Error(l(290, e));
          }
          return e;
        }
        function Sa(e, t) {
          if ("textarea" !== e.type)
            throw Error(
              l(
                31,
                "[object Object]" === Object.prototype.toString.call(t)
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : t
              )
            );
        }
        function ka(e) {
          function t(t, n) {
            if (e) {
              var r = t.lastEffect;
              null !== r
                ? ((r.nextEffect = n), (t.lastEffect = n))
                : (t.firstEffect = t.lastEffect = n),
                (n.nextEffect = null),
                (n.flags = 8);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Xu(e, t)).index = 0), (e.sibling = null), e;
          }
          function a(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags = 2), n)
                    : r
                  : ((t.flags = 2), n)
                : n
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags = 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Gu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            return null !== t && t.elementType === n.type
              ? (((r = o(t, n.props)).ref = Ea(e, t, n)), (r.return = e), r)
              : (((r = Yu(n.type, n.key, n.props, null, e.mode, r)).ref = Ea(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function s(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = qu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Qu(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if ("string" == typeof t || "number" == typeof t)
              return ((t = Gu("" + t, e.mode, n)).return = e), t;
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case O:
                  return (
                    ((n = Yu(t.type, t.key, t.props, null, e.mode, n)).ref = Ea(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case x:
                  return ((t = qu(t, e.mode, n)).return = e), t;
              }
              if (xa(t) || H(t))
                return ((t = Qu(t, e.mode, n, null)).return = e), t;
              Sa(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if ("string" == typeof n || "number" == typeof n)
              return null !== o ? null : u(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case O:
                  return n.key === o
                    ? n.type === E
                      ? f(e, t, n.props.children, r, o)
                      : c(e, t, n, r)
                    : null;
                case x:
                  return n.key === o ? s(e, t, n, r) : null;
              }
              if (xa(n) || H(n)) return null !== o ? null : f(e, t, n, r, null);
              Sa(e, n);
            }
            return null;
          }
          function v(e, t, n, r, o) {
            if ("string" == typeof r || "number" == typeof r)
              return u(t, (e = e.get(n) || null), "" + r, o);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case O:
                  return (
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r.type === E
                      ? f(t, e, r.props.children, o, r.key)
                      : c(t, e, r, o)
                  );
                case x:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
              }
              if (xa(r) || H(r))
                return f(t, (e = e.get(n) || null), r, o, null);
              Sa(t, r);
            }
            return null;
          }
          function m(o, l, i, u) {
            for (
              var c = null, s = null, f = l, m = (l = 0), g = null;
              null !== f && m < i.length;
              m++
            ) {
              f.index > m ? ((g = f), (f = null)) : (g = f.sibling);
              var h = p(o, f, i[m], u);
              if (null === h) {
                null === f && (f = g);
                break;
              }
              e && f && null === h.alternate && t(o, f),
                (l = a(h, l, m)),
                null === s ? (c = h) : (s.sibling = h),
                (s = h),
                (f = g);
            }
            if (m === i.length) return n(o, f), c;
            if (null === f) {
              for (; m < i.length; m++)
                null !== (f = d(o, i[m], u)) &&
                  ((l = a(f, l, m)),
                  null === s ? (c = f) : (s.sibling = f),
                  (s = f));
              return c;
            }
            for (f = r(o, f); m < i.length; m++)
              null !== (g = v(f, o, m, i[m], u)) &&
                (e &&
                  null !== g.alternate &&
                  f.delete(null === g.key ? m : g.key),
                (l = a(g, l, m)),
                null === s ? (c = g) : (s.sibling = g),
                (s = g));
            return (
              e &&
                f.forEach(function (e) {
                  return t(o, e);
                }),
              c
            );
          }
          function g(o, i, u, c) {
            var s = H(u);
            if ("function" != typeof s) throw Error(l(150));
            if (null == (u = s.call(u))) throw Error(l(151));
            for (
              var f = (s = null), m = i, g = (i = 0), h = null, y = u.next();
              null !== m && !y.done;
              g++, y = u.next()
            ) {
              m.index > g ? ((h = m), (m = null)) : (h = m.sibling);
              var b = p(o, m, y.value, c);
              if (null === b) {
                null === m && (m = h);
                break;
              }
              e && m && null === b.alternate && t(o, m),
                (i = a(b, i, g)),
                null === f ? (s = b) : (f.sibling = b),
                (f = b),
                (m = h);
            }
            if (y.done) return n(o, m), s;
            if (null === m) {
              for (; !y.done; g++, y = u.next())
                null !== (y = d(o, y.value, c)) &&
                  ((i = a(y, i, g)),
                  null === f ? (s = y) : (f.sibling = y),
                  (f = y));
              return s;
            }
            for (m = r(o, m); !y.done; g++, y = u.next())
              null !== (y = v(m, o, g, y.value, c)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? g : y.key),
                (i = a(y, i, g)),
                null === f ? (s = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(o, e);
                }),
              s
            );
          }
          return function (e, r, a, u) {
            var c =
              "object" == typeof a &&
              null !== a &&
              a.type === E &&
              null === a.key;
            c && (a = a.props.children);
            var s = "object" == typeof a && null !== a;
            if (s)
              switch (a.$$typeof) {
                case O:
                  e: {
                    for (s = a.key, c = r; null !== c; ) {
                      if (c.key === s) {
                        if (7 === c.tag) {
                          if (a.type === E) {
                            n(e, c.sibling),
                              ((r = o(c, a.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                        } else if (c.elementType === a.type) {
                          n(e, c.sibling),
                            ((r = o(c, a.props)).ref = Ea(e, c, a)),
                            (r.return = e),
                            (e = r);
                          break e;
                        }
                        n(e, c);
                        break;
                      }
                      t(e, c), (c = c.sibling);
                    }
                    a.type === E
                      ? (((r = Qu(a.props.children, e.mode, u, a.key)).return =
                          e),
                        (e = r))
                      : (((u = Yu(
                          a.type,
                          a.key,
                          a.props,
                          null,
                          e.mode,
                          u
                        )).ref = Ea(e, r, a)),
                        (u.return = e),
                        (e = u));
                  }
                  return i(e);
                case x:
                  e: {
                    for (c = a.key; null !== r; ) {
                      if (r.key === c) {
                        if (
                          4 === r.tag &&
                          r.stateNode.containerInfo === a.containerInfo &&
                          r.stateNode.implementation === a.implementation
                        ) {
                          n(e, r.sibling),
                            ((r = o(r, a.children || [])).return = e),
                            (e = r);
                          break e;
                        }
                        n(e, r);
                        break;
                      }
                      t(e, r), (r = r.sibling);
                    }
                    ((r = qu(a, e.mode, u)).return = e), (e = r);
                  }
                  return i(e);
              }
            if ("string" == typeof a || "number" == typeof a)
              return (
                (a = "" + a),
                null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((r = o(r, a)).return = e), (e = r))
                  : (n(e, r), ((r = Gu(a, e.mode, u)).return = e), (e = r)),
                i(e)
              );
            if (xa(a)) return m(e, r, a, u);
            if (H(a)) return g(e, r, a, u);
            if ((s && Sa(e, a), void 0 === a && !c))
              switch (e.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                  throw Error(l(152, Q(e.type) || "Component"));
              }
            return n(e, r);
          };
        }
        var Pa = ka(!0),
          Ca = ka(!1),
          ja = {},
          _a = co(ja),
          Ta = co(ja),
          Na = co(ja);
        function Da(e) {
          if (e === ja) throw Error(l(174));
          return e;
        }
        function La(e, t) {
          switch ((fo(Na, t), fo(Ta, e), fo(_a, ja), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ve(null, "");
              break;
            default:
              t = ve(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          so(_a), fo(_a, t);
        }
        function Ra() {
          so(_a), so(Ta), so(Na);
        }
        function Ma(e) {
          Da(Na.current);
          var t = Da(_a.current),
            n = ve(t, e.type);
          t !== n && (fo(Ta, e), fo(_a, n));
        }
        function Ia(e) {
          Ta.current === e && (so(_a), so(Ta));
        }
        var za = co(0);
        function Ba(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 != (64 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Fa = null,
          Ua = null,
          Ha = !1;
        function Wa(e, t) {
          var n = Wu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.type = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            (n.flags = 8),
            null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
              : (e.firstEffect = e.lastEffect = n);
        }
        function Va(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) && ((e.stateNode = t), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), !0)
              );
            default:
              return !1;
          }
        }
        function Xa(e) {
          if (Ha) {
            var t = Ua;
            if (t) {
              var n = t;
              if (!Va(e, t)) {
                if (!(t = Kr(n.nextSibling)) || !Va(e, t))
                  return (
                    (e.flags = (-1025 & e.flags) | 2), (Ha = !1), void (Fa = e)
                  );
                Wa(Fa, n);
              }
              (Fa = e), (Ua = Kr(t.firstChild));
            } else (e.flags = (-1025 & e.flags) | 2), (Ha = !1), (Fa = e);
          }
        }
        function Ya(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          Fa = e;
        }
        function Qa(e) {
          if (e !== Fa) return !1;
          if (!Ha) return Ya(e), (Ha = !0), !1;
          var t = e.type;
          if (
            5 !== e.tag ||
            ("head" !== t && "body" !== t && !Vr(t, e.memoizedProps))
          )
            for (t = Ua; t; ) Wa(e, t), (t = Kr(t.nextSibling));
          if ((Ya(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      Ua = Kr(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              Ua = null;
            }
          } else Ua = Fa ? Kr(e.stateNode.nextSibling) : null;
          return !0;
        }
        function Ka() {
          (Ua = Fa = null), (Ha = !1);
        }
        var Ga = [];
        function qa() {
          for (var e = 0; e < Ga.length; e++)
            Ga[e]._workInProgressVersionPrimary = null;
          Ga.length = 0;
        }
        var Ja = w.ReactCurrentDispatcher,
          Za = w.ReactCurrentBatchConfig,
          $a = 0,
          el = null,
          tl = null,
          nl = null,
          rl = !1,
          ol = !1;
        function al() {
          throw Error(l(321));
        }
        function ll(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function il(e, t, n, r, o, a) {
          if (
            (($a = a),
            (el = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (Ja.current = null === e || null === e.memoizedState ? Dl : Ll),
            (e = n(r, o)),
            ol)
          ) {
            a = 0;
            do {
              if (((ol = !1), !(25 > a))) throw Error(l(301));
              (a += 1),
                (nl = tl = null),
                (t.updateQueue = null),
                (Ja.current = Rl),
                (e = n(r, o));
            } while (ol);
          }
          if (
            ((Ja.current = Nl),
            (t = null !== tl && null !== tl.next),
            ($a = 0),
            (nl = tl = el = null),
            (rl = !1),
            t)
          )
            throw Error(l(300));
          return e;
        }
        function ul() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === nl ? (el.memoizedState = nl = e) : (nl = nl.next = e), nl
          );
        }
        function cl() {
          if (null === tl) {
            var e = el.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = tl.next;
          var t = null === nl ? el.memoizedState : nl.next;
          if (null !== t) (nl = t), (tl = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (tl = e).memoizedState,
              baseState: tl.baseState,
              baseQueue: tl.baseQueue,
              queue: tl.queue,
              next: null,
            }),
              null === nl ? (el.memoizedState = nl = e) : (nl = nl.next = e);
          }
          return nl;
        }
        function sl(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function fl(e) {
          var t = cl(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = tl,
            o = r.baseQueue,
            a = n.pending;
          if (null !== a) {
            if (null !== o) {
              var i = o.next;
              (o.next = a.next), (a.next = i);
            }
            (r.baseQueue = o = a), (n.pending = null);
          }
          if (null !== o) {
            (o = o.next), (r = r.baseState);
            var u = (i = a = null),
              c = o;
            do {
              var s = c.lane;
              if (($a & s) === s)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      eagerReducer: c.eagerReducer,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.eagerReducer === e ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: s,
                  action: c.action,
                  eagerReducer: c.eagerReducer,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((i = u = f), (a = r)) : (u = u.next = f),
                  (el.lanes |= s),
                  (Fi |= s);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === u ? (a = r) : (u.next = i),
              sr(r, t.memoizedState) || (Il = !0),
              (t.memoizedState = r),
              (t.baseState = a),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          return [t.memoizedState, n.dispatch];
        }
        function dl(e) {
          var t = cl(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            a = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var i = (o = o.next);
            do {
              (a = e(a, i.action)), (i = i.next);
            } while (i !== o);
            sr(a, t.memoizedState) || (Il = !0),
              (t.memoizedState = a),
              null === t.baseQueue && (t.baseState = a),
              (n.lastRenderedState = a);
          }
          return [a, r];
        }
        function pl(e, t, n) {
          var r = t._getVersion;
          r = r(t._source);
          var o = t._workInProgressVersionPrimary;
          if (
            (null !== o
              ? (e = o === r)
              : ((e = e.mutableReadLanes),
                (e = ($a & e) === e) &&
                  ((t._workInProgressVersionPrimary = r), Ga.push(t))),
            e)
          )
            return n(t._source);
          throw (Ga.push(t), Error(l(350)));
        }
        function vl(e, t, n, r) {
          var o = Ni;
          if (null === o) throw Error(l(349));
          var a = t._getVersion,
            i = a(t._source),
            u = Ja.current,
            c = u.useState(function () {
              return pl(o, t, n);
            }),
            s = c[1],
            f = c[0];
          c = nl;
          var d = e.memoizedState,
            p = d.refs,
            v = p.getSnapshot,
            m = d.source;
          d = d.subscribe;
          var g = el;
          return (
            (e.memoizedState = { refs: p, source: t, subscribe: r }),
            u.useEffect(
              function () {
                (p.getSnapshot = n), (p.setSnapshot = s);
                var e = a(t._source);
                if (!sr(i, e)) {
                  (e = n(t._source)),
                    sr(f, e) ||
                      (s(e),
                      (e = du(g)),
                      (o.mutableReadLanes |= e & o.pendingLanes)),
                    (e = o.mutableReadLanes),
                    (o.entangledLanes |= e);
                  for (var r = o.entanglements, l = e; 0 < l; ) {
                    var u = 31 - Vt(l),
                      c = 1 << u;
                    (r[u] |= e), (l &= ~c);
                  }
                }
              },
              [n, t, r]
            ),
            u.useEffect(
              function () {
                return r(t._source, function () {
                  var e = p.getSnapshot,
                    n = p.setSnapshot;
                  try {
                    n(e(t._source));
                    var r = du(g);
                    o.mutableReadLanes |= r & o.pendingLanes;
                  } catch (e) {
                    n(function () {
                      throw e;
                    });
                  }
                });
              },
              [t, r]
            ),
            (sr(v, n) && sr(m, t) && sr(d, r)) ||
              (((e = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: sl,
                lastRenderedState: f,
              }).dispatch = s =
                Tl.bind(null, el, e)),
              (c.queue = e),
              (c.baseQueue = null),
              (f = pl(o, t, n)),
              (c.memoizedState = c.baseState = f)),
            f
          );
        }
        function ml(e, t, n) {
          return vl(cl(), e, t, n);
        }
        function gl(e) {
          var t = ul();
          return (
            "function" == typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: sl,
                lastRenderedState: e,
              }).dispatch =
              Tl.bind(null, el, e)),
            [t.memoizedState, e]
          );
        }
        function hl(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = el.updateQueue)
              ? ((t = { lastEffect: null }),
                (el.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function yl(e) {
          return (e = { current: e }), (ul().memoizedState = e);
        }
        function bl() {
          return cl().memoizedState;
        }
        function Al(e, t, n, r) {
          var o = ul();
          (el.flags |= e),
            (o.memoizedState = hl(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function wl(e, t, n, r) {
          var o = cl();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== tl) {
            var l = tl.memoizedState;
            if (((a = l.destroy), null !== r && ll(r, l.deps)))
              return void hl(t, n, a, r);
          }
          (el.flags |= e), (o.memoizedState = hl(1 | t, n, a, r));
        }
        function Ol(e, t) {
          return Al(516, 4, e, t);
        }
        function xl(e, t) {
          return wl(516, 4, e, t);
        }
        function El(e, t) {
          return wl(4, 2, e, t);
        }
        function Sl(e, t) {
          return "function" == typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null != t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function kl(e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            wl(4, 2, Sl.bind(null, t, e), n)
          );
        }
        function Pl() {}
        function Cl(e, t) {
          var n = cl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ll(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function jl(e, t) {
          var n = cl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ll(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function _l(e, t) {
          var n = Xo();
          Qo(98 > n ? 98 : n, function () {
            e(!0);
          }),
            Qo(97 < n ? 97 : n, function () {
              var n = Za.transition;
              Za.transition = 1;
              try {
                e(!1), t();
              } finally {
                Za.transition = n;
              }
            });
        }
        function Tl(e, t, n) {
          var r = fu(),
            o = du(e),
            a = {
              lane: o,
              action: n,
              eagerReducer: null,
              eagerState: null,
              next: null,
            },
            l = t.pending;
          if (
            (null === l ? (a.next = a) : ((a.next = l.next), (l.next = a)),
            (t.pending = a),
            (l = e.alternate),
            e === el || (null !== l && l === el))
          )
            ol = rl = !0;
          else {
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  u = l(i, n);
                if (((a.eagerReducer = l), (a.eagerState = u), sr(u, i)))
                  return;
              } catch (e) {}
            pu(e, o, r);
          }
        }
        var Nl = {
            readContext: ia,
            useCallback: al,
            useContext: al,
            useEffect: al,
            useImperativeHandle: al,
            useLayoutEffect: al,
            useMemo: al,
            useReducer: al,
            useRef: al,
            useState: al,
            useDebugValue: al,
            useDeferredValue: al,
            useTransition: al,
            useMutableSource: al,
            useOpaqueIdentifier: al,
            unstable_isNewReconciler: !1,
          },
          Dl = {
            readContext: ia,
            useCallback: function (e, t) {
              return (ul().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: ia,
            useEffect: Ol,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null != n ? n.concat([e]) : null),
                Al(4, 2, Sl.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Al(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = ul();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = ul();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = (e = r.queue =
                  {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                  }).dispatch =
                  Tl.bind(null, el, e)),
                [r.memoizedState, e]
              );
            },
            useRef: yl,
            useState: gl,
            useDebugValue: Pl,
            useDeferredValue: function (e) {
              var t = gl(e),
                n = t[0],
                r = t[1];
              return (
                Ol(
                  function () {
                    var t = Za.transition;
                    Za.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Za.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = gl(!1),
                t = e[0];
              return yl((e = _l.bind(null, e[1]))), [e, t];
            },
            useMutableSource: function (e, t, n) {
              var r = ul();
              return (
                (r.memoizedState = {
                  refs: { getSnapshot: t, setSnapshot: null },
                  source: e,
                  subscribe: n,
                }),
                vl(r, e, t, n)
              );
            },
            useOpaqueIdentifier: function () {
              if (Ha) {
                var e = !1,
                  t = (function (e) {
                    return { $$typeof: R, toString: e, valueOf: e };
                  })(function () {
                    throw (
                      (e || ((e = !0), n("r:" + (qr++).toString(36))),
                      Error(l(355)))
                    );
                  }),
                  n = gl(t)[1];
                return (
                  0 == (2 & el.mode) &&
                    ((el.flags |= 516),
                    hl(
                      5,
                      function () {
                        n("r:" + (qr++).toString(36));
                      },
                      void 0,
                      null
                    )),
                  t
                );
              }
              return gl((t = "r:" + (qr++).toString(36))), t;
            },
            unstable_isNewReconciler: !1,
          },
          Ll = {
            readContext: ia,
            useCallback: Cl,
            useContext: ia,
            useEffect: xl,
            useImperativeHandle: kl,
            useLayoutEffect: El,
            useMemo: jl,
            useReducer: fl,
            useRef: bl,
            useState: function () {
              return fl(sl);
            },
            useDebugValue: Pl,
            useDeferredValue: function (e) {
              var t = fl(sl),
                n = t[0],
                r = t[1];
              return (
                xl(
                  function () {
                    var t = Za.transition;
                    Za.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Za.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = fl(sl)[0];
              return [bl().current, e];
            },
            useMutableSource: ml,
            useOpaqueIdentifier: function () {
              return fl(sl)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Rl = {
            readContext: ia,
            useCallback: Cl,
            useContext: ia,
            useEffect: xl,
            useImperativeHandle: kl,
            useLayoutEffect: El,
            useMemo: jl,
            useReducer: dl,
            useRef: bl,
            useState: function () {
              return dl(sl);
            },
            useDebugValue: Pl,
            useDeferredValue: function (e) {
              var t = dl(sl),
                n = t[0],
                r = t[1];
              return (
                xl(
                  function () {
                    var t = Za.transition;
                    Za.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Za.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = dl(sl)[0];
              return [bl().current, e];
            },
            useMutableSource: ml,
            useOpaqueIdentifier: function () {
              return dl(sl)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Ml = w.ReactCurrentOwner,
          Il = !1;
        function zl(e, t, n, r) {
          t.child = null === e ? Ca(t, null, n, r) : Pa(t, e.child, n, r);
        }
        function Bl(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          return (
            la(t, o),
            (r = il(e, t, n, r, a, o)),
            null === e || Il
              ? ((t.flags |= 1), zl(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~o),
                ai(e, t, o))
          );
        }
        function Fl(e, t, n, r, o, a) {
          if (null === e) {
            var l = n.type;
            return "function" != typeof l ||
              Vu(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Yu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), Ul(e, t, l, r, o, a));
          }
          return (
            (l = e.child),
            0 == (o & a) &&
            ((o = l.memoizedProps),
            (n = null !== (n = n.compare) ? n : dr)(o, r) && e.ref === t.ref)
              ? ai(e, t, a)
              : ((t.flags |= 1),
                ((e = Xu(l, r)).ref = t.ref),
                (e.return = t),
                (t.child = e))
          );
        }
        function Ul(e, t, n, r, o, a) {
          if (null !== e && dr(e.memoizedProps, r) && e.ref === t.ref) {
            if (((Il = !1), 0 == (a & o)))
              return (t.lanes = e.lanes), ai(e, t, a);
            0 != (16384 & e.flags) && (Il = !0);
          }
          return Vl(e, t, n, r, a);
        }
        function Hl(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
            if (0 == (4 & t.mode))
              (t.memoizedState = { baseLanes: 0 }), wu(t, n);
            else {
              if (0 == (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e }),
                  wu(t, e),
                  null
                );
              (t.memoizedState = { baseLanes: 0 }),
                wu(t, null !== a ? a.baseLanes : n);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              wu(t, r);
          return zl(e, t, o, n), t.child;
        }
        function Wl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            (t.flags |= 128);
        }
        function Vl(e, t, n, r, o) {
          var a = yo(n) ? go : vo.current;
          return (
            (a = ho(t, a)),
            la(t, o),
            (n = il(e, t, n, r, a, o)),
            null === e || Il
              ? ((t.flags |= 1), zl(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~o),
                ai(e, t, o))
          );
        }
        function Xl(e, t, n, r, o) {
          if (yo(n)) {
            var a = !0;
            Oo(t);
          } else a = !1;
          if ((la(t, o), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              Aa(t, n, r),
              Oa(t, n, r, o),
              (r = !0);
          else if (null === e) {
            var l = t.stateNode,
              i = t.memoizedProps;
            l.props = i;
            var u = l.context,
              c = n.contextType;
            "object" == typeof c && null !== c
              ? (c = ia(c))
              : (c = ho(t, (c = yo(n) ? go : vo.current)));
            var s = n.getDerivedStateFromProps,
              f =
                "function" == typeof s ||
                "function" == typeof l.getSnapshotBeforeUpdate;
            f ||
              ("function" != typeof l.UNSAFE_componentWillReceiveProps &&
                "function" != typeof l.componentWillReceiveProps) ||
              ((i !== r || u !== c) && wa(t, l, r, c)),
              (ua = !1);
            var d = t.memoizedState;
            (l.state = d),
              va(t, r, l, o),
              (u = t.memoizedState),
              i !== r || d !== u || mo.current || ua
                ? ("function" == typeof s &&
                    (ha(t, n, s, r), (u = t.memoizedState)),
                  (i = ua || ba(t, n, i, r, d, u, c))
                    ? (f ||
                        ("function" != typeof l.UNSAFE_componentWillMount &&
                          "function" != typeof l.componentWillMount) ||
                        ("function" == typeof l.componentWillMount &&
                          l.componentWillMount(),
                        "function" == typeof l.UNSAFE_componentWillMount &&
                          l.UNSAFE_componentWillMount()),
                      "function" == typeof l.componentDidMount &&
                        (t.flags |= 4))
                    : ("function" == typeof l.componentDidMount &&
                        (t.flags |= 4),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (l.props = r),
                  (l.state = u),
                  (l.context = c),
                  (r = i))
                : ("function" == typeof l.componentDidMount && (t.flags |= 4),
                  (r = !1));
          } else {
            (l = t.stateNode),
              sa(e, t),
              (i = t.memoizedProps),
              (c = t.type === t.elementType ? i : Zo(t.type, i)),
              (l.props = c),
              (f = t.pendingProps),
              (d = l.context),
              "object" == typeof (u = n.contextType) && null !== u
                ? (u = ia(u))
                : (u = ho(t, (u = yo(n) ? go : vo.current)));
            var p = n.getDerivedStateFromProps;
            (s =
              "function" == typeof p ||
              "function" == typeof l.getSnapshotBeforeUpdate) ||
              ("function" != typeof l.UNSAFE_componentWillReceiveProps &&
                "function" != typeof l.componentWillReceiveProps) ||
              ((i !== f || d !== u) && wa(t, l, r, u)),
              (ua = !1),
              (d = t.memoizedState),
              (l.state = d),
              va(t, r, l, o);
            var v = t.memoizedState;
            i !== f || d !== v || mo.current || ua
              ? ("function" == typeof p &&
                  (ha(t, n, p, r), (v = t.memoizedState)),
                (c = ua || ba(t, n, c, r, d, v, u))
                  ? (s ||
                      ("function" != typeof l.UNSAFE_componentWillUpdate &&
                        "function" != typeof l.componentWillUpdate) ||
                      ("function" == typeof l.componentWillUpdate &&
                        l.componentWillUpdate(r, v, u),
                      "function" == typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(r, v, u)),
                    "function" == typeof l.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof l.getSnapshotBeforeUpdate &&
                      (t.flags |= 256))
                  : ("function" != typeof l.componentDidUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" != typeof l.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = v)),
                (l.props = r),
                (l.state = v),
                (l.context = u),
                (r = c))
              : ("function" != typeof l.componentDidUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof l.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 256),
                (r = !1));
          }
          return Yl(e, t, n, r, a, o);
        }
        function Yl(e, t, n, r, o, a) {
          Wl(e, t);
          var l = 0 != (64 & t.flags);
          if (!r && !l) return o && xo(t, n, !1), ai(e, t, a);
          (r = t.stateNode), (Ml.current = t);
          var i =
            l && "function" != typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && l
              ? ((t.child = Pa(t, e.child, null, a)),
                (t.child = Pa(t, null, i, a)))
              : zl(e, t, i, a),
            (t.memoizedState = r.state),
            o && xo(t, n, !0),
            t.child
          );
        }
        function Ql(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ao(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ao(0, t.context, !1),
            La(e, t.containerInfo);
        }
        var Kl,
          Gl,
          ql,
          Jl = { dehydrated: null, retryLane: 0 };
        function Zl(e, t, n) {
          var r,
            o = t.pendingProps,
            a = za.current,
            l = !1;
          return (
            (r = 0 != (64 & t.flags)) ||
              (r = (null === e || null !== e.memoizedState) && 0 != (2 & a)),
            r
              ? ((l = !0), (t.flags &= -65))
              : (null !== e && null === e.memoizedState) ||
                void 0 === o.fallback ||
                !0 === o.unstable_avoidThisFallback ||
                (a |= 1),
            fo(za, 1 & a),
            null === e
              ? (void 0 !== o.fallback && Xa(t),
                (e = o.children),
                (a = o.fallback),
                l
                  ? ((e = $l(t, e, a, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Jl),
                    e)
                  : "number" == typeof o.unstable_expectedLoadTime
                  ? ((e = $l(t, e, a, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Jl),
                    (t.lanes = 33554432),
                    e)
                  : (((n = Ku(
                      { mode: "visible", children: e },
                      t.mode,
                      n,
                      null
                    )).return = t),
                    (t.child = n)))
              : (e.memoizedState,
                l
                  ? ((o = ti(e, t, o.children, o.fallback, n)),
                    (l = t.child),
                    (a = e.child.memoizedState),
                    (l.memoizedState =
                      null === a
                        ? { baseLanes: n }
                        : { baseLanes: a.baseLanes | n }),
                    (l.childLanes = e.childLanes & ~n),
                    (t.memoizedState = Jl),
                    o)
                  : ((n = ei(e, t, o.children, n)),
                    (t.memoizedState = null),
                    n))
          );
        }
        function $l(e, t, n, r) {
          var o = e.mode,
            a = e.child;
          return (
            (t = { mode: "hidden", children: t }),
            0 == (2 & o) && null !== a
              ? ((a.childLanes = 0), (a.pendingProps = t))
              : (a = Ku(t, o, 0, null)),
            (n = Qu(n, o, r, null)),
            (a.return = e),
            (n.return = e),
            (a.sibling = n),
            (e.child = a),
            n
          );
        }
        function ei(e, t, n, r) {
          var o = e.child;
          return (
            (e = o.sibling),
            (n = Xu(o, { mode: "visible", children: n })),
            0 == (2 & t.mode) && (n.lanes = r),
            (n.return = t),
            (n.sibling = null),
            null !== e &&
              ((e.nextEffect = null),
              (e.flags = 8),
              (t.firstEffect = t.lastEffect = e)),
            (t.child = n)
          );
        }
        function ti(e, t, n, r, o) {
          var a = t.mode,
            l = e.child;
          e = l.sibling;
          var i = { mode: "hidden", children: n };
          return (
            0 == (2 & a) && t.child !== l
              ? (((n = t.child).childLanes = 0),
                (n.pendingProps = i),
                null !== (l = n.lastEffect)
                  ? ((t.firstEffect = n.firstEffect),
                    (t.lastEffect = l),
                    (l.nextEffect = null))
                  : (t.firstEffect = t.lastEffect = null))
              : (n = Xu(l, i)),
            null !== e ? (r = Xu(e, r)) : ((r = Qu(r, a, o, null)).flags |= 2),
            (r.return = t),
            (n.return = t),
            (n.sibling = r),
            (t.child = n),
            r
          );
        }
        function ni(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          null !== n && (n.lanes |= t), aa(e.return, t);
        }
        function ri(e, t, n, r, o, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
                lastEffect: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = o),
              (l.lastEffect = a));
        }
        function oi(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          if ((zl(e, t, r.children, n), 0 != (2 & (r = za.current))))
            (r = (1 & r) | 2), (t.flags |= 64);
          else {
            if (null !== e && 0 != (64 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && ni(e, n);
                else if (19 === e.tag) ni(e, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((fo(za, r), 0 == (2 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === Ba(e) && (o = n),
                    (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  ri(t, !1, o, n, a, t.lastEffect);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === Ba(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                ri(t, !0, n, null, a, t.lastEffect);
                break;
              case "together":
                ri(t, !1, null, null, void 0, t.lastEffect);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function ai(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Fi |= t.lanes),
            0 != (n & t.childLanes))
          ) {
            if (null !== e && t.child !== e.child) throw Error(l(153));
            if (null !== t.child) {
              for (
                n = Xu((e = t.child), e.pendingProps),
                  t.child = n,
                  n.return = t;
                null !== e.sibling;

              )
                (e = e.sibling),
                  ((n = n.sibling = Xu(e, e.pendingProps)).return = t);
              n.sibling = null;
            }
            return t.child;
          }
          return null;
        }
        function li(e, t) {
          if (!Ha)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function ii(e, t, n) {
          var r = t.pendingProps;
          switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return null;
            case 1:
            case 17:
              return yo(t.type) && bo(), null;
            case 3:
              return (
                Ra(),
                so(mo),
                so(vo),
                qa(),
                (r = t.stateNode).pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (Qa(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
                null
              );
            case 5:
              Ia(t);
              var a = Da(Na.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Gl(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return null;
                }
                if (((e = Da(_a.current)), Qa(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (((r[Zr] = t), (r[$r] = i), n)) {
                    case "dialog":
                      _r("cancel", r), _r("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      _r("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < kr.length; e++) _r(kr[e], r);
                      break;
                    case "source":
                      _r("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      _r("error", r), _r("load", r);
                      break;
                    case "details":
                      _r("toggle", r);
                      break;
                    case "input":
                      ee(r, i), _r("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        _r("invalid", r);
                      break;
                    case "textarea":
                      ue(r, i), _r("invalid", r);
                  }
                  for (var c in (Ee(n, i), (e = null), i))
                    i.hasOwnProperty(c) &&
                      ((a = i[c]),
                      "children" === c
                        ? "string" == typeof a
                          ? r.textContent !== a && (e = ["children", a])
                          : "number" == typeof a &&
                            r.textContent !== "" + a &&
                            (e = ["children", "" + a])
                        : u.hasOwnProperty(c) &&
                          null != a &&
                          "onScroll" === c &&
                          _r("scroll", r));
                  switch (n) {
                    case "input":
                      q(r), re(r, i, !0);
                      break;
                    case "textarea":
                      q(r), se(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" == typeof i.onClick && (r.onclick = Fr);
                  }
                  (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  switch (
                    ((c = 9 === a.nodeType ? a : a.ownerDocument),
                    e === fe && (e = pe(n)),
                    e === fe
                      ? "script" === n
                        ? (((e = c.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" == typeof r.is
                        ? (e = c.createElement(n, { is: r.is }))
                        : ((e = c.createElement(n)),
                          "select" === n &&
                            ((c = e),
                            r.multiple
                              ? (c.multiple = !0)
                              : r.size && (c.size = r.size)))
                      : (e = c.createElementNS(e, n)),
                    (e[Zr] = t),
                    (e[$r] = r),
                    Kl(e, t),
                    (t.stateNode = e),
                    (c = Se(n, r)),
                    n)
                  ) {
                    case "dialog":
                      _r("cancel", e), _r("close", e), (a = r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      _r("load", e), (a = r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < kr.length; a++) _r(kr[a], e);
                      a = r;
                      break;
                    case "source":
                      _r("error", e), (a = r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      _r("error", e), _r("load", e), (a = r);
                      break;
                    case "details":
                      _r("toggle", e), (a = r);
                      break;
                    case "input":
                      ee(e, r), (a = $(e, r)), _r("invalid", e);
                      break;
                    case "option":
                      a = ae(e, r);
                      break;
                    case "select":
                      (e._wrapperState = { wasMultiple: !!r.multiple }),
                        (a = o({}, r, { value: void 0 })),
                        _r("invalid", e);
                      break;
                    case "textarea":
                      ue(e, r), (a = ie(e, r)), _r("invalid", e);
                      break;
                    default:
                      a = r;
                  }
                  Ee(n, a);
                  var s = a;
                  for (i in s)
                    if (s.hasOwnProperty(i)) {
                      var f = s[i];
                      "style" === i
                        ? Oe(e, f)
                        : "dangerouslySetInnerHTML" === i
                        ? null != (f = f ? f.__html : void 0) && he(e, f)
                        : "children" === i
                        ? "string" == typeof f
                          ? ("textarea" !== n || "" !== f) && ye(e, f)
                          : "number" == typeof f && ye(e, "" + f)
                        : "suppressContentEditableWarning" !== i &&
                          "suppressHydrationWarning" !== i &&
                          "autoFocus" !== i &&
                          (u.hasOwnProperty(i)
                            ? null != f && "onScroll" === i && _r("scroll", e)
                            : null != f && A(e, i, f, c));
                    }
                  switch (n) {
                    case "input":
                      q(e), re(e, r, !1);
                      break;
                    case "textarea":
                      q(e), se(e);
                      break;
                    case "option":
                      null != r.value &&
                        e.setAttribute("value", "" + K(r.value));
                      break;
                    case "select":
                      (e.multiple = !!r.multiple),
                        null != (i = r.value)
                          ? le(e, !!r.multiple, i, !1)
                          : null != r.defaultValue &&
                            le(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      "function" == typeof a.onClick && (e.onclick = Fr);
                  }
                  Wr(n, r) && (t.flags |= 4);
                }
                null !== t.ref && (t.flags |= 128);
              }
              return null;
            case 6:
              if (e && null != t.stateNode) ql(0, t, e.memoizedProps, r);
              else {
                if ("string" != typeof r && null === t.stateNode)
                  throw Error(l(166));
                (n = Da(Na.current)),
                  Da(_a.current),
                  Qa(t)
                    ? ((r = t.stateNode),
                      (n = t.memoizedProps),
                      (r[Zr] = t),
                      r.nodeValue !== n && (t.flags |= 4))
                    : (((r = (
                        9 === n.nodeType ? n : n.ownerDocument
                      ).createTextNode(r))[Zr] = t),
                      (t.stateNode = r));
              }
              return null;
            case 13:
              return (
                so(za),
                (r = t.memoizedState),
                0 != (64 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e
                      ? void 0 !== t.memoizedProps.fallback && Qa(t)
                      : (n = null !== e.memoizedState),
                    r &&
                      !n &&
                      0 != (2 & t.mode) &&
                      ((null === e &&
                        !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                      0 != (1 & za.current)
                        ? 0 === Ii && (Ii = 3)
                        : ((0 !== Ii && 3 !== Ii) || (Ii = 4),
                          null === Ni ||
                            (0 == (134217727 & Fi) && 0 == (134217727 & Ui)) ||
                            hu(Ni, Li))),
                    (r || n) && (t.flags |= 4),
                    null)
              );
            case 4:
              return Ra(), null === e && Nr(t.stateNode.containerInfo), null;
            case 10:
              return oa(t), null;
            case 19:
              if ((so(za), null === (r = t.memoizedState))) return null;
              if (((i = 0 != (64 & t.flags)), null === (c = r.rendering)))
                if (i) li(r, !1);
                else {
                  if (0 !== Ii || (null !== e && 0 != (64 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (c = Ba(e))) {
                        for (
                          t.flags |= 64,
                            li(r, !1),
                            null !== (i = c.updateQueue) &&
                              ((t.updateQueue = i), (t.flags |= 4)),
                            null === r.lastEffect && (t.firstEffect = null),
                            t.lastEffect = r.lastEffect,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 2),
                            (i.nextEffect = null),
                            (i.firstEffect = null),
                            (i.lastEffect = null),
                            null === (c = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = c.childLanes),
                                (i.lanes = c.lanes),
                                (i.child = c.child),
                                (i.memoizedProps = c.memoizedProps),
                                (i.memoizedState = c.memoizedState),
                                (i.updateQueue = c.updateQueue),
                                (i.type = c.type),
                                (e = c.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return fo(za, (1 & za.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== r.tail &&
                    Vo() > Xi &&
                    ((t.flags |= 64),
                    (i = !0),
                    li(r, !1),
                    (t.lanes = 33554432));
                }
              else {
                if (!i)
                  if (null !== (e = Ba(c))) {
                    if (
                      ((t.flags |= 64),
                      (i = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      li(r, !0),
                      null === r.tail &&
                        "hidden" === r.tailMode &&
                        !c.alternate &&
                        !Ha)
                    )
                      return (
                        null !== (t = t.lastEffect = r.lastEffect) &&
                          (t.nextEffect = null),
                        null
                      );
                  } else
                    2 * Vo() - r.renderingStartTime > Xi &&
                      1073741824 !== n &&
                      ((t.flags |= 64),
                      (i = !0),
                      li(r, !1),
                      (t.lanes = 33554432));
                r.isBackwards
                  ? ((c.sibling = t.child), (t.child = c))
                  : (null !== (n = r.last) ? (n.sibling = c) : (t.child = c),
                    (r.last = c));
              }
              return null !== r.tail
                ? ((n = r.tail),
                  (r.rendering = n),
                  (r.tail = n.sibling),
                  (r.lastEffect = t.lastEffect),
                  (r.renderingStartTime = Vo()),
                  (n.sibling = null),
                  (t = za.current),
                  fo(za, i ? (1 & t) | 2 : 1 & t),
                  n)
                : null;
            case 23:
            case 24:
              return (
                Ou(),
                null !== e &&
                  (null !== e.memoizedState) != (null !== t.memoizedState) &&
                  "unstable-defer-without-hiding" !== r.mode &&
                  (t.flags |= 4),
                null
              );
          }
          throw Error(l(156, t.tag));
        }
        function ui(e) {
          switch (e.tag) {
            case 1:
              yo(e.type) && bo();
              var t = e.flags;
              return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 3:
              if ((Ra(), so(mo), so(vo), qa(), 0 != (64 & (t = e.flags))))
                throw Error(l(285));
              return (e.flags = (-4097 & t) | 64), e;
            case 5:
              return Ia(e), null;
            case 13:
              return (
                so(za),
                4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
              );
            case 19:
              return so(za), null;
            case 4:
              return Ra(), null;
            case 10:
              return oa(e), null;
            case 23:
            case 24:
              return Ou(), null;
            default:
              return null;
          }
        }
        function ci(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += Y(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (e) {
            o = "\nError generating stack: " + e.message + "\n" + e.stack;
          }
          return { value: e, source: t, stack: o };
        }
        (Kl = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Gl = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), Da(_a.current);
              var l,
                i = null;
              switch (n) {
                case "input":
                  (a = $(e, a)), (r = $(e, r)), (i = []);
                  break;
                case "option":
                  (a = ae(e, a)), (r = ae(e, r)), (i = []);
                  break;
                case "select":
                  (a = o({}, a, { value: void 0 })),
                    (r = o({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = ie(e, a)), (r = ie(e, r)), (i = []);
                  break;
                default:
                  "function" != typeof a.onClick &&
                    "function" == typeof r.onClick &&
                    (e.onclick = Fr);
              }
              for (f in (Ee(n, r), (n = null), a))
                if (!r.hasOwnProperty(f) && a.hasOwnProperty(f) && null != a[f])
                  if ("style" === f) {
                    var c = a[f];
                    for (l in c)
                      c.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== f &&
                      "children" !== f &&
                      "suppressContentEditableWarning" !== f &&
                      "suppressHydrationWarning" !== f &&
                      "autoFocus" !== f &&
                      (u.hasOwnProperty(f)
                        ? i || (i = [])
                        : (i = i || []).push(f, null));
              for (f in r) {
                var s = r[f];
                if (
                  ((c = null != a ? a[f] : void 0),
                  r.hasOwnProperty(f) && s !== c && (null != s || null != c))
                )
                  if ("style" === f)
                    if (c) {
                      for (l in c)
                        !c.hasOwnProperty(l) ||
                          (s && s.hasOwnProperty(l)) ||
                          (n || (n = {}), (n[l] = ""));
                      for (l in s)
                        s.hasOwnProperty(l) &&
                          c[l] !== s[l] &&
                          (n || (n = {}), (n[l] = s[l]));
                    } else n || (i || (i = []), i.push(f, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === f
                      ? ((s = s ? s.__html : void 0),
                        (c = c ? c.__html : void 0),
                        null != s && c !== s && (i = i || []).push(f, s))
                      : "children" === f
                      ? ("string" != typeof s && "number" != typeof s) ||
                        (i = i || []).push(f, "" + s)
                      : "suppressContentEditableWarning" !== f &&
                        "suppressHydrationWarning" !== f &&
                        (u.hasOwnProperty(f)
                          ? (null != s && "onScroll" === f && _r("scroll", e),
                            i || c === s || (i = []))
                          : "object" == typeof s &&
                            null !== s &&
                            s.$$typeof === R
                          ? s.toString()
                          : (i = i || []).push(f, s));
              }
              n && (i = i || []).push("style", n);
              var f = i;
              (t.updateQueue = f) && (t.flags |= 4);
            }
          }),
          (ql = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var si = "function" == typeof WeakMap ? WeakMap : Map;
        function fi(e, t, n) {
          ((n = fa(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Gi || ((Gi = !0), (qi = r));
            }),
            n
          );
        }
        function di(e, t, n) {
          (n = fa(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" == typeof r) {
            var o = t.value;
            n.payload = function () {
              return r(o);
            };
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" == typeof a.componentDidCatch &&
              (n.callback = function () {
                "function" != typeof r &&
                  (null === Ji ? (Ji = new Set([this])) : Ji.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        var pi = "function" == typeof WeakSet ? WeakSet : Set;
        function vi(e) {
          var t = e.ref;
          if (null !== t)
            if ("function" == typeof t)
              try {
                t(null);
              } catch (t) {
                Bu(e, t);
              }
            else t.current = null;
        }
        function mi(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
            case 5:
            case 6:
            case 4:
            case 17:
              return;
            case 1:
              if (256 & t.flags && null !== e) {
                var n = e.memoizedProps,
                  r = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                  t.elementType === t.type ? n : Zo(t.type, n),
                  r
                )),
                  (e.__reactInternalSnapshotBeforeUpdate = t);
              }
              return;
            case 3:
              return void (256 & t.flags && Qr(t.stateNode.containerInfo));
          }
          throw Error(l(163));
        }
        function gi(e, t, n) {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  if (3 == (3 & e.tag)) {
                    var r = e.create;
                    e.destroy = r();
                  }
                  e = e.next;
                } while (e !== t);
              }
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  var o = e;
                  (r = o.next),
                    0 != (4 & (o = o.tag)) &&
                      0 != (1 & o) &&
                      (Mu(n, e), Ru(n, e)),
                    (e = r);
                } while (e !== t);
              }
              return;
            case 1:
              return (
                (e = n.stateNode),
                4 & n.flags &&
                  (null === t
                    ? e.componentDidMount()
                    : ((r =
                        n.elementType === n.type
                          ? t.memoizedProps
                          : Zo(n.type, t.memoizedProps)),
                      e.componentDidUpdate(
                        r,
                        t.memoizedState,
                        e.__reactInternalSnapshotBeforeUpdate
                      ))),
                void (null !== (t = n.updateQueue) && ma(n, t, e))
              );
            case 3:
              if (null !== (t = n.updateQueue)) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                ma(n, t, e);
              }
              return;
            case 5:
              return (
                (e = n.stateNode),
                void (
                  null === t &&
                  4 & n.flags &&
                  Wr(n.type, n.memoizedProps) &&
                  e.focus()
                )
              );
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
              return;
            case 13:
              return void (
                null === n.memoizedState &&
                ((n = n.alternate),
                null !== n &&
                  ((n = n.memoizedState),
                  null !== n && ((n = n.dehydrated), null !== n && Ot(n))))
              );
          }
          throw Error(l(163));
        }
        function hi(e, t) {
          for (var n = e; ; ) {
            if (5 === n.tag) {
              var r = n.stateNode;
              if (t)
                "function" == typeof (r = r.style).setProperty
                  ? r.setProperty("display", "none", "important")
                  : (r.display = "none");
              else {
                r = n.stateNode;
                var o = n.memoizedProps.style;
                (o =
                  null != o && o.hasOwnProperty("display") ? o.display : null),
                  (r.style.display = we("display", o));
              }
            } else if (6 === n.tag)
              n.stateNode.nodeValue = t ? "" : n.memoizedProps;
            else if (
              ((23 !== n.tag && 24 !== n.tag) ||
                null === n.memoizedState ||
                n === e) &&
              null !== n.child
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }
        function yi(e, t) {
          if (So && "function" == typeof So.onCommitFiberUnmount)
            try {
              So.onCommitFiberUnmount(Eo, t);
            } catch (e) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var n = (e = e.next);
                do {
                  var r = n,
                    o = r.destroy;
                  if (((r = r.tag), void 0 !== o))
                    if (0 != (4 & r)) Mu(t, n);
                    else {
                      r = t;
                      try {
                        o();
                      } catch (e) {
                        Bu(r, e);
                      }
                    }
                  n = n.next;
                } while (n !== e);
              }
              break;
            case 1:
              if (
                (vi(t),
                "function" == typeof (e = t.stateNode).componentWillUnmount)
              )
                try {
                  (e.props = t.memoizedProps),
                    (e.state = t.memoizedState),
                    e.componentWillUnmount();
                } catch (e) {
                  Bu(t, e);
                }
              break;
            case 5:
              vi(t);
              break;
            case 4:
              Ei(e, t);
          }
        }
        function bi(e) {
          (e.alternate = null),
            (e.child = null),
            (e.dependencies = null),
            (e.firstEffect = null),
            (e.lastEffect = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.return = null),
            (e.updateQueue = null);
        }
        function Ai(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function wi(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (Ai(t)) break e;
              t = t.return;
            }
            throw Error(l(160));
          }
          var n = t;
          switch (((t = n.stateNode), n.tag)) {
            case 5:
              var r = !1;
              break;
            case 3:
            case 4:
              (t = t.containerInfo), (r = !0);
              break;
            default:
              throw Error(l(161));
          }
          16 & n.flags && (ye(t, ""), (n.flags &= -17));
          e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
              if (null === n.return || Ai(n.return)) {
                n = null;
                break e;
              }
              n = n.return;
            }
            for (
              n.sibling.return = n.return, n = n.sibling;
              5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

            ) {
              if (2 & n.flags) continue t;
              if (null === n.child || 4 === n.tag) continue t;
              (n.child.return = n), (n = n.child);
            }
            if (!(2 & n.flags)) {
              n = n.stateNode;
              break e;
            }
          }
          r ? Oi(e, n, t) : xi(e, n, t);
        }
        function Oi(e, t, n) {
          var r = e.tag,
            o = 5 === r || 6 === r;
          if (o)
            (e = o ? e.stateNode : e.stateNode.instance),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) ||
                    null !== t.onclick ||
                    (t.onclick = Fr));
          else if (4 !== r && null !== (e = e.child))
            for (Oi(e, t, n), e = e.sibling; null !== e; )
              Oi(e, t, n), (e = e.sibling);
        }
        function xi(e, t, n) {
          var r = e.tag,
            o = 5 === r || 6 === r;
          if (o)
            (e = o ? e.stateNode : e.stateNode.instance),
              t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (xi(e, t, n), e = e.sibling; null !== e; )
              xi(e, t, n), (e = e.sibling);
        }
        function Ei(e, t) {
          for (var n, r, o = t, a = !1; ; ) {
            if (!a) {
              a = o.return;
              e: for (;;) {
                if (null === a) throw Error(l(160));
                switch (((n = a.stateNode), a.tag)) {
                  case 5:
                    r = !1;
                    break e;
                  case 3:
                  case 4:
                    (n = n.containerInfo), (r = !0);
                    break e;
                }
                a = a.return;
              }
              a = !0;
            }
            if (5 === o.tag || 6 === o.tag) {
              e: for (var i = e, u = o, c = u; ; )
                if ((yi(i, c), null !== c.child && 4 !== c.tag))
                  (c.child.return = c), (c = c.child);
                else {
                  if (c === u) break e;
                  for (; null === c.sibling; ) {
                    if (null === c.return || c.return === u) break e;
                    c = c.return;
                  }
                  (c.sibling.return = c.return), (c = c.sibling);
                }
              r
                ? ((i = n),
                  (u = o.stateNode),
                  8 === i.nodeType
                    ? i.parentNode.removeChild(u)
                    : i.removeChild(u))
                : n.removeChild(o.stateNode);
            } else if (4 === o.tag) {
              if (null !== o.child) {
                (n = o.stateNode.containerInfo),
                  (r = !0),
                  (o.child.return = o),
                  (o = o.child);
                continue;
              }
            } else if ((yi(e, o), null !== o.child)) {
              (o.child.return = o), (o = o.child);
              continue;
            }
            if (o === t) break;
            for (; null === o.sibling; ) {
              if (null === o.return || o.return === t) return;
              4 === (o = o.return).tag && (a = !1);
            }
            (o.sibling.return = o.return), (o = o.sibling);
          }
        }
        function Si(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              var n = t.updateQueue;
              if (null !== (n = null !== n ? n.lastEffect : null)) {
                var r = (n = n.next);
                do {
                  3 == (3 & r.tag) &&
                    ((e = r.destroy),
                    (r.destroy = void 0),
                    void 0 !== e && e()),
                    (r = r.next);
                } while (r !== n);
              }
              return;
            case 1:
            case 12:
            case 17:
              return;
            case 5:
              if (null != (n = t.stateNode)) {
                r = t.memoizedProps;
                var o = null !== e ? e.memoizedProps : r;
                e = t.type;
                var a = t.updateQueue;
                if (((t.updateQueue = null), null !== a)) {
                  for (
                    n[$r] = r,
                      "input" === e &&
                        "radio" === r.type &&
                        null != r.name &&
                        te(n, r),
                      Se(e, o),
                      t = Se(e, r),
                      o = 0;
                    o < a.length;
                    o += 2
                  ) {
                    var i = a[o],
                      u = a[o + 1];
                    "style" === i
                      ? Oe(n, u)
                      : "dangerouslySetInnerHTML" === i
                      ? he(n, u)
                      : "children" === i
                      ? ye(n, u)
                      : A(n, i, u, t);
                  }
                  switch (e) {
                    case "input":
                      ne(n, r);
                      break;
                    case "textarea":
                      ce(n, r);
                      break;
                    case "select":
                      (e = n._wrapperState.wasMultiple),
                        (n._wrapperState.wasMultiple = !!r.multiple),
                        null != (a = r.value)
                          ? le(n, !!r.multiple, a, !1)
                          : e !== !!r.multiple &&
                            (null != r.defaultValue
                              ? le(n, !!r.multiple, r.defaultValue, !0)
                              : le(n, !!r.multiple, r.multiple ? [] : "", !1));
                  }
                }
              }
              return;
            case 6:
              if (null === t.stateNode) throw Error(l(162));
              return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
              return void (
                (n = t.stateNode).hydrate &&
                ((n.hydrate = !1), Ot(n.containerInfo))
              );
            case 13:
              return (
                null !== t.memoizedState && ((Vi = Vo()), hi(t.child, !0)),
                void ki(t)
              );
            case 19:
              return void ki(t);
            case 23:
            case 24:
              return void hi(t, null !== t.memoizedState);
          }
          throw Error(l(163));
        }
        function ki(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new pi()),
              t.forEach(function (t) {
                var r = Uu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function Pi(e, t) {
          return (
            null !== e &&
            (null === (e = e.memoizedState) || null !== e.dehydrated) &&
            null !== (t = t.memoizedState) &&
            null === t.dehydrated
          );
        }
        var Ci = Math.ceil,
          ji = w.ReactCurrentDispatcher,
          _i = w.ReactCurrentOwner,
          Ti = 0,
          Ni = null,
          Di = null,
          Li = 0,
          Ri = 0,
          Mi = co(0),
          Ii = 0,
          zi = null,
          Bi = 0,
          Fi = 0,
          Ui = 0,
          Hi = 0,
          Wi = null,
          Vi = 0,
          Xi = 1 / 0;
        function Yi() {
          Xi = Vo() + 500;
        }
        var Qi,
          Ki = null,
          Gi = !1,
          qi = null,
          Ji = null,
          Zi = !1,
          $i = null,
          eu = 90,
          tu = [],
          nu = [],
          ru = null,
          ou = 0,
          au = null,
          lu = -1,
          iu = 0,
          uu = 0,
          cu = null,
          su = !1;
        function fu() {
          return 0 != (48 & Ti) ? Vo() : -1 !== lu ? lu : (lu = Vo());
        }
        function du(e) {
          if (0 == (2 & (e = e.mode))) return 1;
          if (0 == (4 & e)) return 99 === Xo() ? 1 : 2;
          if ((0 === iu && (iu = Bi), 0 !== Jo.transition)) {
            0 !== uu && (uu = null !== Wi ? Wi.pendingLanes : 0), (e = iu);
            var t = 4186112 & ~uu;
            return (
              0 === (t &= -t) &&
                0 === (t = (e = 4186112 & ~e) & -e) &&
                (t = 8192),
              t
            );
          }
          return (
            (e = Xo()),
            0 != (4 & Ti) && 98 === e
              ? (e = Ft(12, iu))
              : (e = Ft(
                  (e = (function (e) {
                    switch (e) {
                      case 99:
                        return 15;
                      case 98:
                        return 10;
                      case 97:
                      case 96:
                        return 8;
                      case 95:
                        return 2;
                      default:
                        return 0;
                    }
                  })(e)),
                  iu
                )),
            e
          );
        }
        function pu(e, t, n) {
          if (50 < ou) throw ((ou = 0), (au = null), Error(l(185)));
          if (null === (e = vu(e, t))) return null;
          Wt(e, t, n), e === Ni && ((Ui |= t), 4 === Ii && hu(e, Li));
          var r = Xo();
          1 === t
            ? 0 != (8 & Ti) && 0 == (48 & Ti)
              ? yu(e)
              : (mu(e, n), 0 === Ti && (Yi(), Go()))
            : (0 == (4 & Ti) ||
                (98 !== r && 99 !== r) ||
                (null === ru ? (ru = new Set([e])) : ru.add(e)),
              mu(e, n)),
            (Wi = e);
        }
        function vu(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function mu(e, t) {
          for (
            var n = e.callbackNode,
              r = e.suspendedLanes,
              o = e.pingedLanes,
              a = e.expirationTimes,
              i = e.pendingLanes;
            0 < i;

          ) {
            var u = 31 - Vt(i),
              c = 1 << u,
              s = a[u];
            if (-1 === s) {
              if (0 == (c & r) || 0 != (c & o)) {
                (s = t), It(c);
                var f = Mt;
                a[u] = 10 <= f ? s + 250 : 6 <= f ? s + 5e3 : -1;
              }
            } else s <= t && (e.expiredLanes |= c);
            i &= ~c;
          }
          if (((r = zt(e, e === Ni ? Li : 0)), (t = Mt), 0 === r))
            null !== n &&
              (n !== zo && Co(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0));
          else {
            if (null !== n) {
              if (e.callbackPriority === t) return;
              n !== zo && Co(n);
            }
            15 === t
              ? ((n = yu.bind(null, e)),
                null === Fo ? ((Fo = [n]), (Uo = Po(Do, qo))) : Fo.push(n),
                (n = zo))
              : 14 === t
              ? (n = Ko(99, yu.bind(null, e)))
              : ((n = (function (e) {
                  switch (e) {
                    case 15:
                    case 14:
                      return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                      return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                      return 97;
                    case 3:
                    case 2:
                    case 1:
                      return 95;
                    case 0:
                      return 90;
                    default:
                      throw Error(l(358, e));
                  }
                })(t)),
                (n = Ko(n, gu.bind(null, e)))),
              (e.callbackPriority = t),
              (e.callbackNode = n);
          }
        }
        function gu(e) {
          if (((lu = -1), (uu = iu = 0), 0 != (48 & Ti))) throw Error(l(327));
          var t = e.callbackNode;
          if (Lu() && e.callbackNode !== t) return null;
          var n = zt(e, e === Ni ? Li : 0);
          if (0 === n) return null;
          var r = n,
            o = Ti;
          Ti |= 16;
          var a = Su();
          for ((Ni === e && Li === r) || (Yi(), xu(e, r)); ; )
            try {
              Cu();
              break;
            } catch (t) {
              Eu(e, t);
            }
          if (
            (ra(),
            (ji.current = a),
            (Ti = o),
            null !== Di ? (r = 0) : ((Ni = null), (Li = 0), (r = Ii)),
            0 != (Bi & Ui))
          )
            xu(e, 0);
          else if (0 !== r) {
            if (
              (2 === r &&
                ((Ti |= 64),
                e.hydrate && ((e.hydrate = !1), Qr(e.containerInfo)),
                0 !== (n = Bt(e)) && (r = ku(e, n))),
              1 === r)
            )
              throw ((t = zi), xu(e, 0), hu(e, n), mu(e, Vo()), t);
            switch (
              ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
            ) {
              case 0:
              case 1:
                throw Error(l(345));
              case 2:
              case 5:
                Tu(e);
                break;
              case 3:
                if (
                  (hu(e, n), (62914560 & n) === n && 10 < (r = Vi + 500 - Vo()))
                ) {
                  if (0 !== zt(e, 0)) break;
                  if (((o = e.suspendedLanes) & n) !== n) {
                    fu(), (e.pingedLanes |= e.suspendedLanes & o);
                    break;
                  }
                  e.timeoutHandle = Xr(Tu.bind(null, e), r);
                  break;
                }
                Tu(e);
                break;
              case 4:
                if ((hu(e, n), (4186112 & n) === n)) break;
                for (r = e.eventTimes, o = -1; 0 < n; ) {
                  var i = 31 - Vt(n);
                  (a = 1 << i), (i = r[i]) > o && (o = i), (n &= ~a);
                }
                if (
                  ((n = o),
                  10 <
                    (n =
                      (120 > (n = Vo() - n)
                        ? 120
                        : 480 > n
                        ? 480
                        : 1080 > n
                        ? 1080
                        : 1920 > n
                        ? 1920
                        : 3e3 > n
                        ? 3e3
                        : 4320 > n
                        ? 4320
                        : 1960 * Ci(n / 1960)) - n))
                ) {
                  e.timeoutHandle = Xr(Tu.bind(null, e), n);
                  break;
                }
                Tu(e);
                break;
              default:
                throw Error(l(329));
            }
          }
          return mu(e, Vo()), e.callbackNode === t ? gu.bind(null, e) : null;
        }
        function hu(e, t) {
          for (
            t &= ~Hi,
              t &= ~Ui,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - Vt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function yu(e) {
          if (0 != (48 & Ti)) throw Error(l(327));
          if ((Lu(), e === Ni && 0 != (e.expiredLanes & Li))) {
            var t = Li,
              n = ku(e, t);
            0 != (Bi & Ui) && (n = ku(e, (t = zt(e, t))));
          } else n = ku(e, (t = zt(e, 0)));
          if (
            (0 !== e.tag &&
              2 === n &&
              ((Ti |= 64),
              e.hydrate && ((e.hydrate = !1), Qr(e.containerInfo)),
              0 !== (t = Bt(e)) && (n = ku(e, t))),
            1 === n)
          )
            throw ((n = zi), xu(e, 0), hu(e, t), mu(e, Vo()), n);
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Tu(e),
            mu(e, Vo()),
            null
          );
        }
        function bu(e, t) {
          var n = Ti;
          Ti |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ti = n) && (Yi(), Go());
          }
        }
        function Au(e, t) {
          var n = Ti;
          (Ti &= -2), (Ti |= 8);
          try {
            return e(t);
          } finally {
            0 === (Ti = n) && (Yi(), Go());
          }
        }
        function wu(e, t) {
          fo(Mi, Ri), (Ri |= t), (Bi |= t);
        }
        function Ou() {
          (Ri = Mi.current), so(Mi);
        }
        function xu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), Yr(n)), null !== Di))
            for (n = Di.return; null !== n; ) {
              var r = n;
              switch (r.tag) {
                case 1:
                  null != (r = r.type.childContextTypes) && bo();
                  break;
                case 3:
                  Ra(), so(mo), so(vo), qa();
                  break;
                case 5:
                  Ia(r);
                  break;
                case 4:
                  Ra();
                  break;
                case 13:
                case 19:
                  so(za);
                  break;
                case 10:
                  oa(r);
                  break;
                case 23:
                case 24:
                  Ou();
              }
              n = n.return;
            }
          (Ni = e),
            (Di = Xu(e.current, null)),
            (Li = Ri = Bi = t),
            (Ii = 0),
            (zi = null),
            (Hi = Ui = Fi = 0);
        }
        function Eu(e, t) {
          for (;;) {
            var n = Di;
            try {
              if ((ra(), (Ja.current = Nl), rl)) {
                for (var r = el.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                rl = !1;
              }
              if (
                (($a = 0),
                (nl = tl = el = null),
                (ol = !1),
                (_i.current = null),
                null === n || null === n.return)
              ) {
                (Ii = 1), (zi = t), (Di = null);
                break;
              }
              e: {
                var a = e,
                  l = n.return,
                  i = n,
                  u = t;
                if (
                  ((t = Li),
                  (i.flags |= 2048),
                  (i.firstEffect = i.lastEffect = null),
                  null !== u &&
                    "object" == typeof u &&
                    "function" == typeof u.then)
                ) {
                  var c = u;
                  if (0 == (2 & i.mode)) {
                    var s = i.alternate;
                    s
                      ? ((i.updateQueue = s.updateQueue),
                        (i.memoizedState = s.memoizedState),
                        (i.lanes = s.lanes))
                      : ((i.updateQueue = null), (i.memoizedState = null));
                  }
                  var f = 0 != (1 & za.current),
                    d = l;
                  do {
                    var p;
                    if ((p = 13 === d.tag)) {
                      var v = d.memoizedState;
                      if (null !== v) p = null !== v.dehydrated;
                      else {
                        var m = d.memoizedProps;
                        p =
                          void 0 !== m.fallback &&
                          (!0 !== m.unstable_avoidThisFallback || !f);
                      }
                    }
                    if (p) {
                      var g = d.updateQueue;
                      if (null === g) {
                        var h = new Set();
                        h.add(c), (d.updateQueue = h);
                      } else g.add(c);
                      if (0 == (2 & d.mode)) {
                        if (
                          ((d.flags |= 64),
                          (i.flags |= 16384),
                          (i.flags &= -2981),
                          1 === i.tag)
                        )
                          if (null === i.alternate) i.tag = 17;
                          else {
                            var y = fa(-1, 1);
                            (y.tag = 2), da(i, y);
                          }
                        i.lanes |= 1;
                        break e;
                      }
                      (u = void 0), (i = t);
                      var b = a.pingCache;
                      if (
                        (null === b
                          ? ((b = a.pingCache = new si()),
                            (u = new Set()),
                            b.set(c, u))
                          : void 0 === (u = b.get(c)) &&
                            ((u = new Set()), b.set(c, u)),
                        !u.has(i))
                      ) {
                        u.add(i);
                        var A = Fu.bind(null, a, c, i);
                        c.then(A, A);
                      }
                      (d.flags |= 4096), (d.lanes = t);
                      break e;
                    }
                    d = d.return;
                  } while (null !== d);
                  u = Error(
                    (Q(i.type) || "A React component") +
                      " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                  );
                }
                5 !== Ii && (Ii = 2), (u = ci(u, i)), (d = l);
                do {
                  switch (d.tag) {
                    case 3:
                      (a = u),
                        (d.flags |= 4096),
                        (t &= -t),
                        (d.lanes |= t),
                        pa(d, fi(0, a, t));
                      break e;
                    case 1:
                      a = u;
                      var w = d.type,
                        O = d.stateNode;
                      if (
                        0 == (64 & d.flags) &&
                        ("function" == typeof w.getDerivedStateFromError ||
                          (null !== O &&
                            "function" == typeof O.componentDidCatch &&
                            (null === Ji || !Ji.has(O))))
                      ) {
                        (d.flags |= 4096),
                          (t &= -t),
                          (d.lanes |= t),
                          pa(d, di(d, a, t));
                        break e;
                      }
                  }
                  d = d.return;
                } while (null !== d);
              }
              _u(n);
            } catch (e) {
              (t = e), Di === n && null !== n && (Di = n = n.return);
              continue;
            }
            break;
          }
        }
        function Su() {
          var e = ji.current;
          return (ji.current = Nl), null === e ? Nl : e;
        }
        function ku(e, t) {
          var n = Ti;
          Ti |= 16;
          var r = Su();
          for ((Ni === e && Li === t) || xu(e, t); ; )
            try {
              Pu();
              break;
            } catch (t) {
              Eu(e, t);
            }
          if ((ra(), (Ti = n), (ji.current = r), null !== Di))
            throw Error(l(261));
          return (Ni = null), (Li = 0), Ii;
        }
        function Pu() {
          for (; null !== Di; ) ju(Di);
        }
        function Cu() {
          for (; null !== Di && !jo(); ) ju(Di);
        }
        function ju(e) {
          var t = Qi(e.alternate, e, Ri);
          (e.memoizedProps = e.pendingProps),
            null === t ? _u(e) : (Di = t),
            (_i.current = null);
        }
        function _u(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 == (2048 & t.flags))) {
              if (null !== (n = ii(n, t, Ri))) return void (Di = n);
              if (
                (24 !== (n = t).tag && 23 !== n.tag) ||
                null === n.memoizedState ||
                0 != (1073741824 & Ri) ||
                0 == (4 & n.mode)
              ) {
                for (var r = 0, o = n.child; null !== o; )
                  (r |= o.lanes | o.childLanes), (o = o.sibling);
                n.childLanes = r;
              }
              null !== e &&
                0 == (2048 & e.flags) &&
                (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                null !== t.lastEffect &&
                  (null !== e.lastEffect &&
                    (e.lastEffect.nextEffect = t.firstEffect),
                  (e.lastEffect = t.lastEffect)),
                1 < t.flags &&
                  (null !== e.lastEffect
                    ? (e.lastEffect.nextEffect = t)
                    : (e.firstEffect = t),
                  (e.lastEffect = t)));
            } else {
              if (null !== (n = ui(t))) return (n.flags &= 2047), void (Di = n);
              null !== e &&
                ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
            }
            if (null !== (t = t.sibling)) return void (Di = t);
            Di = t = e;
          } while (null !== t);
          0 === Ii && (Ii = 5);
        }
        function Tu(e) {
          var t = Xo();
          return Qo(99, Nu.bind(null, e, t)), null;
        }
        function Nu(e, t) {
          do {
            Lu();
          } while (null !== $i);
          if (0 != (48 & Ti)) throw Error(l(327));
          var n = e.finishedWork;
          if (null === n) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
            throw Error(l(177));
          e.callbackNode = null;
          var r = n.lanes | n.childLanes,
            o = r,
            a = e.pendingLanes & ~o;
          (e.pendingLanes = o),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= o),
            (e.mutableReadLanes &= o),
            (e.entangledLanes &= o),
            (o = e.entanglements);
          for (var i = e.eventTimes, u = e.expirationTimes; 0 < a; ) {
            var c = 31 - Vt(a),
              s = 1 << c;
            (o[c] = 0), (i[c] = -1), (u[c] = -1), (a &= ~s);
          }
          if (
            (null !== ru && 0 == (24 & r) && ru.has(e) && ru.delete(e),
            e === Ni && ((Di = Ni = null), (Li = 0)),
            1 < n.flags
              ? null !== n.lastEffect
                ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
                : (r = n)
              : (r = n.firstEffect),
            null !== r)
          ) {
            if (
              ((o = Ti),
              (Ti |= 32),
              (_i.current = null),
              (Ur = Gt),
              hr((i = gr())))
            ) {
              if ("selectionStart" in i)
                u = { start: i.selectionStart, end: i.selectionEnd };
              else
                e: if (
                  ((u = ((u = i.ownerDocument) && u.defaultView) || window),
                  (s = u.getSelection && u.getSelection()) &&
                    0 !== s.rangeCount)
                ) {
                  (u = s.anchorNode),
                    (a = s.anchorOffset),
                    (c = s.focusNode),
                    (s = s.focusOffset);
                  try {
                    u.nodeType, c.nodeType;
                  } catch (e) {
                    u = null;
                    break e;
                  }
                  var f = 0,
                    d = -1,
                    p = -1,
                    v = 0,
                    m = 0,
                    g = i,
                    h = null;
                  t: for (;;) {
                    for (
                      var y;
                      g !== u || (0 !== a && 3 !== g.nodeType) || (d = f + a),
                        g !== c || (0 !== s && 3 !== g.nodeType) || (p = f + s),
                        3 === g.nodeType && (f += g.nodeValue.length),
                        null !== (y = g.firstChild);

                    )
                      (h = g), (g = y);
                    for (;;) {
                      if (g === i) break t;
                      if (
                        (h === u && ++v === a && (d = f),
                        h === c && ++m === s && (p = f),
                        null !== (y = g.nextSibling))
                      )
                        break;
                      h = (g = h).parentNode;
                    }
                    g = y;
                  }
                  u = -1 === d || -1 === p ? null : { start: d, end: p };
                } else u = null;
              u = u || { start: 0, end: 0 };
            } else u = null;
            (Hr = { focusedElem: i, selectionRange: u }),
              (Gt = !1),
              (cu = null),
              (su = !1),
              (Ki = r);
            do {
              try {
                Du();
              } catch (e) {
                if (null === Ki) throw Error(l(330));
                Bu(Ki, e), (Ki = Ki.nextEffect);
              }
            } while (null !== Ki);
            (cu = null), (Ki = r);
            do {
              try {
                for (i = e; null !== Ki; ) {
                  var b = Ki.flags;
                  if ((16 & b && ye(Ki.stateNode, ""), 128 & b)) {
                    var A = Ki.alternate;
                    if (null !== A) {
                      var w = A.ref;
                      null !== w &&
                        ("function" == typeof w ? w(null) : (w.current = null));
                    }
                  }
                  switch (1038 & b) {
                    case 2:
                      wi(Ki), (Ki.flags &= -3);
                      break;
                    case 6:
                      wi(Ki), (Ki.flags &= -3), Si(Ki.alternate, Ki);
                      break;
                    case 1024:
                      Ki.flags &= -1025;
                      break;
                    case 1028:
                      (Ki.flags &= -1025), Si(Ki.alternate, Ki);
                      break;
                    case 4:
                      Si(Ki.alternate, Ki);
                      break;
                    case 8:
                      Ei(i, (u = Ki));
                      var O = u.alternate;
                      bi(u), null !== O && bi(O);
                  }
                  Ki = Ki.nextEffect;
                }
              } catch (e) {
                if (null === Ki) throw Error(l(330));
                Bu(Ki, e), (Ki = Ki.nextEffect);
              }
            } while (null !== Ki);
            if (
              ((w = Hr),
              (A = gr()),
              (b = w.focusedElem),
              (i = w.selectionRange),
              A !== b &&
                b &&
                b.ownerDocument &&
                mr(b.ownerDocument.documentElement, b))
            ) {
              null !== i &&
                hr(b) &&
                ((A = i.start),
                void 0 === (w = i.end) && (w = A),
                "selectionStart" in b
                  ? ((b.selectionStart = A),
                    (b.selectionEnd = Math.min(w, b.value.length)))
                  : (w =
                      ((A = b.ownerDocument || document) && A.defaultView) ||
                      window).getSelection &&
                    ((w = w.getSelection()),
                    (u = b.textContent.length),
                    (O = Math.min(i.start, u)),
                    (i = void 0 === i.end ? O : Math.min(i.end, u)),
                    !w.extend && O > i && ((u = i), (i = O), (O = u)),
                    (u = vr(b, O)),
                    (a = vr(b, i)),
                    u &&
                      a &&
                      (1 !== w.rangeCount ||
                        w.anchorNode !== u.node ||
                        w.anchorOffset !== u.offset ||
                        w.focusNode !== a.node ||
                        w.focusOffset !== a.offset) &&
                      ((A = A.createRange()).setStart(u.node, u.offset),
                      w.removeAllRanges(),
                      O > i
                        ? (w.addRange(A), w.extend(a.node, a.offset))
                        : (A.setEnd(a.node, a.offset), w.addRange(A))))),
                (A = []);
              for (w = b; (w = w.parentNode); )
                1 === w.nodeType &&
                  A.push({ element: w, left: w.scrollLeft, top: w.scrollTop });
              for (
                "function" == typeof b.focus && b.focus(), b = 0;
                b < A.length;
                b++
              )
                ((w = A[b]).element.scrollLeft = w.left),
                  (w.element.scrollTop = w.top);
            }
            (Gt = !!Ur), (Hr = Ur = null), (e.current = n), (Ki = r);
            do {
              try {
                for (b = e; null !== Ki; ) {
                  var x = Ki.flags;
                  if ((36 & x && gi(b, Ki.alternate, Ki), 128 & x)) {
                    A = void 0;
                    var E = Ki.ref;
                    if (null !== E) {
                      var S = Ki.stateNode;
                      Ki.tag,
                        (A = S),
                        "function" == typeof E ? E(A) : (E.current = A);
                    }
                  }
                  Ki = Ki.nextEffect;
                }
              } catch (e) {
                if (null === Ki) throw Error(l(330));
                Bu(Ki, e), (Ki = Ki.nextEffect);
              }
            } while (null !== Ki);
            (Ki = null), Bo(), (Ti = o);
          } else e.current = n;
          if (Zi) (Zi = !1), ($i = e), (eu = t);
          else
            for (Ki = r; null !== Ki; )
              (t = Ki.nextEffect),
                (Ki.nextEffect = null),
                8 & Ki.flags &&
                  (((x = Ki).sibling = null), (x.stateNode = null)),
                (Ki = t);
          if (
            (0 === (r = e.pendingLanes) && (Ji = null),
            1 === r ? (e === au ? ou++ : ((ou = 0), (au = e))) : (ou = 0),
            (n = n.stateNode),
            So && "function" == typeof So.onCommitFiberRoot)
          )
            try {
              So.onCommitFiberRoot(Eo, n, void 0, 64 == (64 & n.current.flags));
            } catch (e) {}
          if ((mu(e, Vo()), Gi)) throw ((Gi = !1), (e = qi), (qi = null), e);
          return 0 != (8 & Ti) || Go(), null;
        }
        function Du() {
          for (; null !== Ki; ) {
            var e = Ki.alternate;
            su ||
              null === cu ||
              (0 != (8 & Ki.flags)
                ? et(Ki, cu) && (su = !0)
                : 13 === Ki.tag && Pi(e, Ki) && et(Ki, cu) && (su = !0));
            var t = Ki.flags;
            0 != (256 & t) && mi(e, Ki),
              0 == (512 & t) ||
                Zi ||
                ((Zi = !0),
                Ko(97, function () {
                  return Lu(), null;
                })),
              (Ki = Ki.nextEffect);
          }
        }
        function Lu() {
          if (90 !== eu) {
            var e = 97 < eu ? 97 : eu;
            return (eu = 90), Qo(e, Iu);
          }
          return !1;
        }
        function Ru(e, t) {
          tu.push(t, e),
            Zi ||
              ((Zi = !0),
              Ko(97, function () {
                return Lu(), null;
              }));
        }
        function Mu(e, t) {
          nu.push(t, e),
            Zi ||
              ((Zi = !0),
              Ko(97, function () {
                return Lu(), null;
              }));
        }
        function Iu() {
          if (null === $i) return !1;
          var e = $i;
          if ((($i = null), 0 != (48 & Ti))) throw Error(l(331));
          var t = Ti;
          Ti |= 32;
          var n = nu;
          nu = [];
          for (var r = 0; r < n.length; r += 2) {
            var o = n[r],
              a = n[r + 1],
              i = o.destroy;
            if (((o.destroy = void 0), "function" == typeof i))
              try {
                i();
              } catch (e) {
                if (null === a) throw Error(l(330));
                Bu(a, e);
              }
          }
          for (n = tu, tu = [], r = 0; r < n.length; r += 2) {
            (o = n[r]), (a = n[r + 1]);
            try {
              var u = o.create;
              o.destroy = u();
            } catch (e) {
              if (null === a) throw Error(l(330));
              Bu(a, e);
            }
          }
          for (u = e.current.firstEffect; null !== u; )
            (e = u.nextEffect),
              (u.nextEffect = null),
              8 & u.flags && ((u.sibling = null), (u.stateNode = null)),
              (u = e);
          return (Ti = t), Go(), !0;
        }
        function zu(e, t, n) {
          da(e, (t = fi(0, (t = ci(n, t)), 1))),
            (t = fu()),
            null !== (e = vu(e, 1)) && (Wt(e, 1, t), mu(e, t));
        }
        function Bu(e, t) {
          if (3 === e.tag) zu(e, e, t);
          else
            for (var n = e.return; null !== n; ) {
              if (3 === n.tag) {
                zu(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" == typeof n.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch &&
                    (null === Ji || !Ji.has(r)))
                ) {
                  var o = di(n, (e = ci(t, e)), 1);
                  if ((da(n, o), (o = fu()), null !== (n = vu(n, 1))))
                    Wt(n, 1, o), mu(n, o);
                  else if (
                    "function" == typeof r.componentDidCatch &&
                    (null === Ji || !Ji.has(r))
                  )
                    try {
                      r.componentDidCatch(t, e);
                    } catch (e) {}
                  break;
                }
              }
              n = n.return;
            }
        }
        function Fu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = fu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ni === e &&
              (Li & n) === n &&
              (4 === Ii ||
              (3 === Ii && (62914560 & Li) === Li && 500 > Vo() - Vi)
                ? xu(e, 0)
                : (Hi |= n)),
            mu(e, t);
        }
        function Uu(e, t) {
          var n = e.stateNode;
          null !== n && n.delete(t),
            0 === (t = 0) &&
              (0 == (2 & (t = e.mode))
                ? (t = 1)
                : 0 == (4 & t)
                ? (t = 99 === Xo() ? 1 : 2)
                : (0 === iu && (iu = Bi),
                  0 === (t = Ut(62914560 & ~iu)) && (t = 4194304))),
            (n = fu()),
            null !== (e = vu(e, t)) && (Wt(e, t, n), mu(e, n));
        }
        function Hu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.flags = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Wu(e, t, n, r) {
          return new Hu(e, t, n, r);
        }
        function Vu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Xu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Wu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.nextEffect = null),
                (n.firstEffect = null),
                (n.lastEffect = null)),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Yu(e, t, n, r, o, a) {
          var i = 2;
          if (((r = e), "function" == typeof e)) Vu(e) && (i = 1);
          else if ("string" == typeof e) i = 5;
          else
            e: switch (e) {
              case E:
                return Qu(n.children, o, a, t);
              case M:
                (i = 8), (o |= 16);
                break;
              case S:
                (i = 8), (o |= 1);
                break;
              case k:
                return (
                  ((e = Wu(12, n, t, 8 | o)).elementType = k),
                  (e.type = k),
                  (e.lanes = a),
                  e
                );
              case _:
                return (
                  ((e = Wu(13, n, t, o)).type = _),
                  (e.elementType = _),
                  (e.lanes = a),
                  e
                );
              case T:
                return (
                  ((e = Wu(19, n, t, o)).elementType = T), (e.lanes = a), e
                );
              case I:
                return Ku(n, o, a, t);
              case z:
                return (
                  ((e = Wu(24, n, t, o)).elementType = z), (e.lanes = a), e
                );
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case P:
                      i = 10;
                      break e;
                    case C:
                      i = 9;
                      break e;
                    case j:
                      i = 11;
                      break e;
                    case N:
                      i = 14;
                      break e;
                    case D:
                      (i = 16), (r = null);
                      break e;
                    case L:
                      i = 22;
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Wu(i, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = a),
            t
          );
        }
        function Qu(e, t, n, r) {
          return ((e = Wu(7, e, r, t)).lanes = n), e;
        }
        function Ku(e, t, n, r) {
          return ((e = Wu(23, e, r, t)).elementType = I), (e.lanes = n), e;
        }
        function Gu(e, t, n) {
          return ((e = Wu(6, e, null, t)).lanes = n), e;
        }
        function qu(e, t, n) {
          return (
            ((t = Wu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Ju(e, t, n) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.pendingContext = this.context = null),
            (this.hydrate = n),
            (this.callbackNode = null),
            (this.callbackPriority = 0),
            (this.eventTimes = Ht(0)),
            (this.expirationTimes = Ht(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Ht(0)),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Zu(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: x,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function $u(e, t, n, r) {
          var o = t.current,
            a = fu(),
            i = du(o);
          e: if (n) {
            t: {
              if (qe((n = n._reactInternals)) !== n || 1 !== n.tag)
                throw Error(l(170));
              var u = n;
              do {
                switch (u.tag) {
                  case 3:
                    u = u.stateNode.context;
                    break t;
                  case 1:
                    if (yo(u.type)) {
                      u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                u = u.return;
              } while (null !== u);
              throw Error(l(171));
            }
            if (1 === n.tag) {
              var c = n.type;
              if (yo(c)) {
                n = wo(n, c, u);
                break e;
              }
            }
            n = u;
          } else n = po;
          return (
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = fa(a, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            da(o, t),
            pu(o, i, a),
            i
          );
        }
        function ec(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function tc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function nc(e, t) {
          tc(e, t), (e = e.alternate) && tc(e, t);
        }
        function rc(e, t, n) {
          var r =
            (null != n &&
              null != n.hydrationOptions &&
              n.hydrationOptions.mutableSources) ||
            null;
          if (
            ((n = new Ju(e, t, null != n && !0 === n.hydrate)),
            (t = Wu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
            (n.current = t),
            (t.stateNode = n),
            ca(t),
            (e[eo] = n.current),
            Nr(8 === e.nodeType ? e.parentNode : e),
            r)
          )
            for (e = 0; e < r.length; e++) {
              var o = (t = r[e])._getVersion;
              (o = o(t._source)),
                null == n.mutableSourceEagerHydrationData
                  ? (n.mutableSourceEagerHydrationData = [t, o])
                  : n.mutableSourceEagerHydrationData.push(t, o);
            }
          this._internalRoot = n;
        }
        function oc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function ac(e, t, n, r, o) {
          var a = n._reactRootContainer;
          if (a) {
            var l = a._internalRoot;
            if ("function" == typeof o) {
              var i = o;
              o = function () {
                var e = ec(l);
                i.call(e);
              };
            }
            $u(t, l, e, o);
          } else {
            if (
              ((a = n._reactRootContainer =
                (function (e, t) {
                  if (
                    (t ||
                      (t = !(
                        !(t = e
                          ? 9 === e.nodeType
                            ? e.documentElement
                            : e.firstChild
                          : null) ||
                        1 !== t.nodeType ||
                        !t.hasAttribute("data-reactroot")
                      )),
                    !t)
                  )
                    for (var n; (n = e.lastChild); ) e.removeChild(n);
                  return new rc(e, 0, t ? { hydrate: !0 } : void 0);
                })(n, r)),
              (l = a._internalRoot),
              "function" == typeof o)
            ) {
              var u = o;
              o = function () {
                var e = ec(l);
                u.call(e);
              };
            }
            Au(function () {
              $u(t, l, e, o);
            });
          }
          return ec(l);
        }
        function lc(e, t) {
          var n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          if (!oc(t)) throw Error(l(200));
          return Zu(e, t, null, n);
        }
        (Qi = function (e, t, n) {
          var r = t.lanes;
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || mo.current) Il = !0;
            else {
              if (0 == (n & r)) {
                switch (((Il = !1), t.tag)) {
                  case 3:
                    Ql(t), Ka();
                    break;
                  case 5:
                    Ma(t);
                    break;
                  case 1:
                    yo(t.type) && Oo(t);
                    break;
                  case 4:
                    La(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    r = t.memoizedProps.value;
                    var o = t.type._context;
                    fo($o, o._currentValue), (o._currentValue = r);
                    break;
                  case 13:
                    if (null !== t.memoizedState)
                      return 0 != (n & t.child.childLanes)
                        ? Zl(e, t, n)
                        : (fo(za, 1 & za.current),
                          null !== (t = ai(e, t, n)) ? t.sibling : null);
                    fo(za, 1 & za.current);
                    break;
                  case 19:
                    if (((r = 0 != (n & t.childLanes)), 0 != (64 & e.flags))) {
                      if (r) return oi(e, t, n);
                      t.flags |= 64;
                    }
                    if (
                      (null !== (o = t.memoizedState) &&
                        ((o.rendering = null),
                        (o.tail = null),
                        (o.lastEffect = null)),
                      fo(za, za.current),
                      r)
                    )
                      break;
                    return null;
                  case 23:
                  case 24:
                    return (t.lanes = 0), Hl(e, t, n);
                }
                return ai(e, t, n);
              }
              Il = 0 != (16384 & e.flags);
            }
          else Il = !1;
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              if (
                ((r = t.type),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (o = ho(t, vo.current)),
                la(t, n),
                (o = il(null, t, r, e, o, n)),
                (t.flags |= 1),
                "object" == typeof o &&
                  null !== o &&
                  "function" == typeof o.render &&
                  void 0 === o.$$typeof)
              ) {
                if (
                  ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  yo(r))
                ) {
                  var a = !0;
                  Oo(t);
                } else a = !1;
                (t.memoizedState =
                  null !== o.state && void 0 !== o.state ? o.state : null),
                  ca(t);
                var i = r.getDerivedStateFromProps;
                "function" == typeof i && ha(t, r, i, e),
                  (o.updater = ya),
                  (t.stateNode = o),
                  (o._reactInternals = t),
                  Oa(t, r, e, n),
                  (t = Yl(null, t, r, !0, a, n));
              } else (t.tag = 0), zl(null, t, o, n), (t = t.child);
              return t;
            case 16:
              o = t.elementType;
              e: {
                switch (
                  (null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                  (e = t.pendingProps),
                  (o = (a = o._init)(o._payload)),
                  (t.type = o),
                  (a = t.tag =
                    (function (e) {
                      if ("function" == typeof e) return Vu(e) ? 1 : 0;
                      if (null != e) {
                        if ((e = e.$$typeof) === j) return 11;
                        if (e === N) return 14;
                      }
                      return 2;
                    })(o)),
                  (e = Zo(o, e)),
                  a)
                ) {
                  case 0:
                    t = Vl(null, t, o, e, n);
                    break e;
                  case 1:
                    t = Xl(null, t, o, e, n);
                    break e;
                  case 11:
                    t = Bl(null, t, o, e, n);
                    break e;
                  case 14:
                    t = Fl(null, t, o, Zo(o.type, e), r, n);
                    break e;
                }
                throw Error(l(306, o, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Vl(e, t, r, (o = t.elementType === r ? o : Zo(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Xl(e, t, r, (o = t.elementType === r ? o : Zo(r, o)), n)
              );
            case 3:
              if ((Ql(t), (r = t.updateQueue), null === e || null === r))
                throw Error(l(282));
              if (
                ((r = t.pendingProps),
                (o = null !== (o = t.memoizedState) ? o.element : null),
                sa(e, t),
                va(t, r, null, n),
                (r = t.memoizedState.element) === o)
              )
                Ka(), (t = ai(e, t, n));
              else {
                if (
                  ((a = (o = t.stateNode).hydrate) &&
                    ((Ua = Kr(t.stateNode.containerInfo.firstChild)),
                    (Fa = t),
                    (a = Ha = !0)),
                  a)
                ) {
                  if (null != (e = o.mutableSourceEagerHydrationData))
                    for (o = 0; o < e.length; o += 2)
                      ((a = e[o])._workInProgressVersionPrimary = e[o + 1]),
                        Ga.push(a);
                  for (n = Ca(t, null, r, n), t.child = n; n; )
                    (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
                } else zl(e, t, r, n), Ka();
                t = t.child;
              }
              return t;
            case 5:
              return (
                Ma(t),
                null === e && Xa(t),
                (r = t.type),
                (o = t.pendingProps),
                (a = null !== e ? e.memoizedProps : null),
                (i = o.children),
                Vr(r, o)
                  ? (i = null)
                  : null !== a && Vr(r, a) && (t.flags |= 16),
                Wl(e, t),
                zl(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && Xa(t), null;
            case 13:
              return Zl(e, t, n);
            case 4:
              return (
                La(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Pa(t, null, r, n)) : zl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Bl(e, t, r, (o = t.elementType === r ? o : Zo(r, o)), n)
              );
            case 7:
              return zl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return zl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                (r = t.type._context),
                  (o = t.pendingProps),
                  (i = t.memoizedProps),
                  (a = o.value);
                var u = t.type._context;
                if (
                  (fo($o, u._currentValue), (u._currentValue = a), null !== i)
                )
                  if (
                    ((u = i.value),
                    0 ===
                      (a = sr(u, a)
                        ? 0
                        : 0 |
                          ("function" == typeof r._calculateChangedBits
                            ? r._calculateChangedBits(u, a)
                            : 1073741823)))
                  ) {
                    if (i.children === o.children && !mo.current) {
                      t = ai(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (u = t.child) && (u.return = t);
                      null !== u;

                    ) {
                      var c = u.dependencies;
                      if (null !== c) {
                        i = u.child;
                        for (var s = c.firstContext; null !== s; ) {
                          if (s.context === r && 0 != (s.observedBits & a)) {
                            1 === u.tag &&
                              (((s = fa(-1, n & -n)).tag = 2), da(u, s)),
                              (u.lanes |= n),
                              null !== (s = u.alternate) && (s.lanes |= n),
                              aa(u.return, n),
                              (c.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else
                        i = 10 === u.tag && u.type === t.type ? null : u.child;
                      if (null !== i) i.return = u;
                      else
                        for (i = u; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (u = i.sibling)) {
                            (u.return = i.return), (i = u);
                            break;
                          }
                          i = i.return;
                        }
                      u = i;
                    }
                zl(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = (a = t.pendingProps).children),
                la(t, n),
                (r = r((o = ia(o, a.unstable_observedBits)))),
                (t.flags |= 1),
                zl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = Zo((o = t.type), t.pendingProps)),
                Fl(e, t, o, (a = Zo(o.type, a)), r, n)
              );
            case 15:
              return Ul(e, t, t.type, t.pendingProps, r, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Zo(r, o)),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                yo(r) ? ((e = !0), Oo(t)) : (e = !1),
                la(t, n),
                Aa(t, r, o),
                Oa(t, r, o, n),
                Yl(null, t, r, !0, e, n)
              );
            case 19:
              return oi(e, t, n);
            case 23:
            case 24:
              return Hl(e, t, n);
          }
          throw Error(l(156, t.tag));
        }),
          (rc.prototype.render = function (e) {
            $u(e, this._internalRoot, null, null);
          }),
          (rc.prototype.unmount = function () {
            var e = this._internalRoot,
              t = e.containerInfo;
            $u(null, e, null, function () {
              t[eo] = null;
            });
          }),
          (tt = function (e) {
            13 === e.tag && (pu(e, 4, fu()), nc(e, 4));
          }),
          (nt = function (e) {
            13 === e.tag && (pu(e, 67108864, fu()), nc(e, 67108864));
          }),
          (rt = function (e) {
            if (13 === e.tag) {
              var t = fu(),
                n = du(e);
              pu(e, n, t), nc(e, n);
            }
          }),
          (ot = function (e, t) {
            return t();
          }),
          (Pe = function (e, t, n) {
            switch (t) {
              case "input":
                if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = ao(r);
                      if (!o) throw Error(l(90));
                      J(r), ne(r, o);
                    }
                  }
                }
                break;
              case "textarea":
                ce(e, n);
                break;
              case "select":
                null != (t = n.value) && le(e, !!n.multiple, t, !1);
            }
          }),
          (De = bu),
          (Le = function (e, t, n, r, o) {
            var a = Ti;
            Ti |= 4;
            try {
              return Qo(98, e.bind(null, t, n, r, o));
            } finally {
              0 === (Ti = a) && (Yi(), Go());
            }
          }),
          (Re = function () {
            0 == (49 & Ti) &&
              ((function () {
                if (null !== ru) {
                  var e = ru;
                  (ru = null),
                    e.forEach(function (e) {
                      (e.expiredLanes |= 24 & e.pendingLanes), mu(e, Vo());
                    });
                }
                Go();
              })(),
              Lu());
          }),
          (Me = function (e, t) {
            var n = Ti;
            Ti |= 2;
            try {
              return e(t);
            } finally {
              0 === (Ti = n) && (Yi(), Go());
            }
          });
        var ic = { Events: [ro, oo, ao, Te, Ne, Lu, { current: !1 }] },
          uc = {
            findFiberByHostInstance: no,
            bundleType: 0,
            version: "17.0.2",
            rendererPackageName: "react-dom",
          },
          cc = {
            bundleType: uc.bundleType,
            version: uc.version,
            rendererPackageName: uc.rendererPackageName,
            rendererConfig: uc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              uc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
          };
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var sc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!sc.isDisabled && sc.supportsFiber)
            try {
              (Eo = sc.inject(cc)), (So = sc);
            } catch (ge) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ic),
          (t.createPortal = lc),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" == typeof e.render) throw Error(l(188));
              throw Error(l(268, Object.keys(e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e, t) {
            var n = Ti;
            if (0 != (48 & n)) return e(t);
            Ti |= 1;
            try {
              if (e) return Qo(99, e.bind(null, t));
            } finally {
              (Ti = n), Go();
            }
          }),
          (t.hydrate = function (e, t, n) {
            if (!oc(t)) throw Error(l(200));
            return ac(null, e, t, !0, n);
          }),
          (t.render = function (e, t, n) {
            if (!oc(t)) throw Error(l(200));
            return ac(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!oc(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (Au(function () {
                ac(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[eo] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = bu),
          (t.unstable_createPortal = function (e, t) {
            return lc(
              e,
              t,
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null
            );
          }),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!oc(n)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return ac(e, t, n, !1, r);
          }),
          (t.version = "17.0.2");
      },
      4151: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {}
        })(),
          (e.exports = n(4005));
      },
      3371: (e, t, n) => {
        "use strict";
        function r(e) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            r(e)
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "DraggableCore", {
            enumerable: !0,
            get: function () {
              return f.default;
            },
          }),
          (t.default = void 0);
        var o = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" !== r(e) && "function" != typeof e))
              return { default: e };
            var n = m(t);
            if (n && n.has(e)) return n.get(e);
            var o = {},
              a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var l in e)
              if (
                "default" !== l &&
                Object.prototype.hasOwnProperty.call(e, l)
              ) {
                var i = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                i && (i.get || i.set)
                  ? Object.defineProperty(o, l, i)
                  : (o[l] = e[l]);
              }
            (o.default = e), n && n.set(e, o);
            return o;
          })(n(9231)),
          a = v(n(9519)),
          l = v(n(4151)),
          i = v(n(9841)),
          u = n(1594),
          c = n(4629),
          s = n(7161),
          f = v(n(1898)),
          d = v(n(3465)),
          p = [
            "axis",
            "bounds",
            "children",
            "defaultPosition",
            "defaultClassName",
            "defaultClassNameDragging",
            "defaultClassNameDragged",
            "position",
            "positionOffset",
            "scale",
          ];
        function v(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function m(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (m = function (e) {
            return e ? n : t;
          })(e);
        }
        function g() {
          return (
            (g =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            g.apply(this, arguments)
          );
        }
        function h(e, t) {
          if (null == e) return {};
          var n,
            r,
            o = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]),
                t.indexOf(n) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (o[n] = e[n]));
          }
          return o;
        }
        function y(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function b(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? y(Object(n), !0).forEach(function (t) {
                  C(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : y(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function A(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null == n) return;
              var r,
                o,
                a = [],
                l = !0,
                i = !1;
              try {
                for (
                  n = n.call(e);
                  !(l = (r = n.next()).done) &&
                  (a.push(r.value), !t || a.length !== t);
                  l = !0
                );
              } catch (e) {
                (i = !0), (o = e);
              } finally {
                try {
                  l || null == n.return || n.return();
                } finally {
                  if (i) throw o;
                }
              }
              return a;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return w(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return w(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function w(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function O(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function x(e, t) {
          return (
            (x =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            x(e, t)
          );
        }
        function E(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = P(e);
            if (t) {
              var o = P(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return S(this, n);
          };
        }
        function S(e, t) {
          if (t && ("object" === r(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return k(e);
        }
        function k(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function P(e) {
          return (
            (P = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            P(e)
          );
        }
        function C(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var j = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && x(e, t);
          })(s, e);
          var t,
            n,
            r,
            a = E(s);
          function s(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              C(k((t = a.call(this, e))), "onDragStart", function (e, n) {
                if (
                  ((0, d.default)("Draggable: onDragStart: %j", n),
                  !1 ===
                    t.props.onStart(e, (0, c.createDraggableData)(k(t), n)))
                )
                  return !1;
                t.setState({ dragging: !0, dragged: !0 });
              }),
              C(k(t), "onDrag", function (e, n) {
                if (!t.state.dragging) return !1;
                (0, d.default)("Draggable: onDrag: %j", n);
                var r = (0, c.createDraggableData)(k(t), n),
                  o = { x: r.x, y: r.y };
                if (t.props.bounds) {
                  var a = o.x,
                    l = o.y;
                  (o.x += t.state.slackX), (o.y += t.state.slackY);
                  var i = A((0, c.getBoundPosition)(k(t), o.x, o.y), 2),
                    u = i[0],
                    s = i[1];
                  (o.x = u),
                    (o.y = s),
                    (o.slackX = t.state.slackX + (a - o.x)),
                    (o.slackY = t.state.slackY + (l - o.y)),
                    (r.x = o.x),
                    (r.y = o.y),
                    (r.deltaX = o.x - t.state.x),
                    (r.deltaY = o.y - t.state.y);
                }
                if (!1 === t.props.onDrag(e, r)) return !1;
                t.setState(o);
              }),
              C(k(t), "onDragStop", function (e, n) {
                if (!t.state.dragging) return !1;
                if (
                  !1 === t.props.onStop(e, (0, c.createDraggableData)(k(t), n))
                )
                  return !1;
                (0, d.default)("Draggable: onDragStop: %j", n);
                var r = { dragging: !1, slackX: 0, slackY: 0 };
                if (Boolean(t.props.position)) {
                  var o = t.props.position,
                    a = o.x,
                    l = o.y;
                  (r.x = a), (r.y = l);
                }
                t.setState(r);
              }),
              (t.state = {
                dragging: !1,
                dragged: !1,
                x: e.position ? e.position.x : e.defaultPosition.x,
                y: e.position ? e.position.y : e.defaultPosition.y,
                prevPropsPosition: b({}, e.position),
                slackX: 0,
                slackY: 0,
                isElementSVG: !1,
              }),
              e.position && !e.onDrag && e.onStop,
              t
            );
          }
          return (
            (t = s),
            (r = [
              {
                key: "getDerivedStateFromProps",
                value: function (e, t) {
                  var n = e.position,
                    r = t.prevPropsPosition;
                  return !n || (r && n.x === r.x && n.y === r.y)
                    ? null
                    : ((0, d.default)(
                        "Draggable: getDerivedStateFromProps %j",
                        { position: n, prevPropsPosition: r }
                      ),
                      { x: n.x, y: n.y, prevPropsPosition: b({}, n) });
                },
              },
            ]),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  void 0 !== window.SVGElement &&
                    this.findDOMNode() instanceof window.SVGElement &&
                    this.setState({ isElementSVG: !0 });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.setState({ dragging: !1 });
                },
              },
              {
                key: "findDOMNode",
                value: function () {
                  var e, t, n;
                  return null !==
                    (e =
                      null === (t = this.props) ||
                      void 0 === t ||
                      null === (n = t.nodeRef) ||
                      void 0 === n
                        ? void 0
                        : n.current) && void 0 !== e
                    ? e
                    : l.default.findDOMNode(this);
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t = this.props,
                    n = (t.axis, t.bounds, t.children),
                    r = t.defaultPosition,
                    a = t.defaultClassName,
                    l = t.defaultClassNameDragging,
                    s = t.defaultClassNameDragged,
                    d = t.position,
                    v = t.positionOffset,
                    m = (t.scale, h(t, p)),
                    y = {},
                    A = null,
                    w = !Boolean(d) || this.state.dragging,
                    O = d || r,
                    x = {
                      x: (0, c.canDragX)(this) && w ? this.state.x : O.x,
                      y: (0, c.canDragY)(this) && w ? this.state.y : O.y,
                    };
                  this.state.isElementSVG
                    ? (A = (0, u.createSVGTransform)(x, v))
                    : (y = (0, u.createCSSTransform)(x, v));
                  var E = (0, i.default)(
                    n.props.className || "",
                    a,
                    (C((e = {}), l, this.state.dragging),
                    C(e, s, this.state.dragged),
                    e)
                  );
                  return o.createElement(
                    f.default,
                    g({}, m, {
                      onStart: this.onDragStart,
                      onDrag: this.onDrag,
                      onStop: this.onDragStop,
                    }),
                    o.cloneElement(o.Children.only(n), {
                      className: E,
                      style: b(b({}, n.props.style), y),
                      transform: A,
                    })
                  );
                },
              },
            ]) && O(t.prototype, n),
            r && O(t, r),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            s
          );
        })(o.Component);
        (t.default = j),
          C(j, "displayName", "Draggable"),
          C(
            j,
            "propTypes",
            b(
              b({}, f.default.propTypes),
              {},
              {
                axis: a.default.oneOf(["both", "x", "y", "none"]),
                bounds: a.default.oneOfType([
                  a.default.shape({
                    left: a.default.number,
                    right: a.default.number,
                    top: a.default.number,
                    bottom: a.default.number,
                  }),
                  a.default.string,
                  a.default.oneOf([!1]),
                ]),
                defaultClassName: a.default.string,
                defaultClassNameDragging: a.default.string,
                defaultClassNameDragged: a.default.string,
                defaultPosition: a.default.shape({
                  x: a.default.number,
                  y: a.default.number,
                }),
                positionOffset: a.default.shape({
                  x: a.default.oneOfType([a.default.number, a.default.string]),
                  y: a.default.oneOfType([a.default.number, a.default.string]),
                }),
                position: a.default.shape({
                  x: a.default.number,
                  y: a.default.number,
                }),
                className: s.dontSetMe,
                style: s.dontSetMe,
                transform: s.dontSetMe,
              }
            )
          ),
          C(
            j,
            "defaultProps",
            b(
              b({}, f.default.defaultProps),
              {},
              {
                axis: "both",
                bounds: !1,
                defaultClassName: "react-draggable",
                defaultClassNameDragging: "react-draggable-dragging",
                defaultClassNameDragged: "react-draggable-dragged",
                defaultPosition: { x: 0, y: 0 },
                scale: 1,
              }
            )
          );
      },
      1898: (e, t, n) => {
        "use strict";
        function r(e) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            r(e)
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var o = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" !== r(e) && "function" != typeof e))
              return { default: e };
            var n = d(t);
            if (n && n.has(e)) return n.get(e);
            var o = {},
              a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var l in e)
              if (
                "default" !== l &&
                Object.prototype.hasOwnProperty.call(e, l)
              ) {
                var i = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                i && (i.get || i.set)
                  ? Object.defineProperty(o, l, i)
                  : (o[l] = e[l]);
              }
            (o.default = e), n && n.set(e, o);
            return o;
          })(n(9231)),
          a = f(n(9519)),
          l = f(n(4151)),
          i = n(1594),
          u = n(4629),
          c = n(7161),
          s = f(n(3465));
        function f(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function d(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (d = function (e) {
            return e ? n : t;
          })(e);
        }
        function p(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null == n) return;
              var r,
                o,
                a = [],
                l = !0,
                i = !1;
              try {
                for (
                  n = n.call(e);
                  !(l = (r = n.next()).done) &&
                  (a.push(r.value), !t || a.length !== t);
                  l = !0
                );
              } catch (e) {
                (i = !0), (o = e);
              } finally {
                try {
                  l || null == n.return || n.return();
                } finally {
                  if (i) throw o;
                }
              }
              return a;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return v(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return v(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function v(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function m(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function g(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function h(e, t) {
          return (
            (h =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            h(e, t)
          );
        }
        function y(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = w(e);
            if (t) {
              var o = w(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return b(this, n);
          };
        }
        function b(e, t) {
          if (t && ("object" === r(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return A(e);
        }
        function A(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function w(e) {
          return (
            (w = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            w(e)
          );
        }
        function O(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var x = { start: "touchstart", move: "touchmove", stop: "touchend" },
          E = { start: "mousedown", move: "mousemove", stop: "mouseup" },
          S = E,
          k = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && h(e, t);
            })(c, e);
            var t,
              n,
              r,
              a = y(c);
            function c() {
              var e;
              m(this, c);
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return (
                O(A((e = a.call.apply(a, [this].concat(n)))), "state", {
                  dragging: !1,
                  lastX: NaN,
                  lastY: NaN,
                  touchIdentifier: null,
                }),
                O(A(e), "mounted", !1),
                O(A(e), "handleDragStart", function (t) {
                  if (
                    (e.props.onMouseDown(t),
                    !e.props.allowAnyClick &&
                      "number" == typeof t.button &&
                      0 !== t.button)
                  )
                    return !1;
                  var n = e.findDOMNode();
                  if (!n || !n.ownerDocument || !n.ownerDocument.body)
                    throw new Error(
                      "<DraggableCore> not mounted on DragStart!"
                    );
                  var r = n.ownerDocument;
                  if (
                    !(
                      e.props.disabled ||
                      !(t.target instanceof r.defaultView.Node) ||
                      (e.props.handle &&
                        !(0, i.matchesSelectorAndParentsTo)(
                          t.target,
                          e.props.handle,
                          n
                        )) ||
                      (e.props.cancel &&
                        (0, i.matchesSelectorAndParentsTo)(
                          t.target,
                          e.props.cancel,
                          n
                        ))
                    )
                  ) {
                    "touchstart" === t.type && t.preventDefault();
                    var o = (0, i.getTouchIdentifier)(t);
                    e.setState({ touchIdentifier: o });
                    var a = (0, u.getControlPosition)(t, o, A(e));
                    if (null != a) {
                      var l = a.x,
                        c = a.y,
                        f = (0, u.createCoreData)(A(e), l, c);
                      (0, s.default)("DraggableCore: handleDragStart: %j", f),
                        (0, s.default)("calling", e.props.onStart),
                        !1 !== e.props.onStart(t, f) &&
                          !1 !== e.mounted &&
                          (e.props.enableUserSelectHack &&
                            (0, i.addUserSelectStyles)(r),
                          e.setState({ dragging: !0, lastX: l, lastY: c }),
                          (0, i.addEvent)(r, S.move, e.handleDrag),
                          (0, i.addEvent)(r, S.stop, e.handleDragStop));
                    }
                  }
                }),
                O(A(e), "handleDrag", function (t) {
                  var n = (0, u.getControlPosition)(
                    t,
                    e.state.touchIdentifier,
                    A(e)
                  );
                  if (null != n) {
                    var r = n.x,
                      o = n.y;
                    if (Array.isArray(e.props.grid)) {
                      var a = r - e.state.lastX,
                        l = o - e.state.lastY,
                        i = p((0, u.snapToGrid)(e.props.grid, a, l), 2);
                      if (((a = i[0]), (l = i[1]), !a && !l)) return;
                      (r = e.state.lastX + a), (o = e.state.lastY + l);
                    }
                    var c = (0, u.createCoreData)(A(e), r, o);
                    if (
                      ((0, s.default)("DraggableCore: handleDrag: %j", c),
                      !1 !== e.props.onDrag(t, c) && !1 !== e.mounted)
                    )
                      e.setState({ lastX: r, lastY: o });
                    else
                      try {
                        e.handleDragStop(new MouseEvent("mouseup"));
                      } catch (t) {
                        var f = document.createEvent("MouseEvents");
                        f.initMouseEvent(
                          "mouseup",
                          !0,
                          !0,
                          window,
                          0,
                          0,
                          0,
                          0,
                          0,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          e.handleDragStop(f);
                      }
                  }
                }),
                O(A(e), "handleDragStop", function (t) {
                  if (e.state.dragging) {
                    var n = (0, u.getControlPosition)(
                      t,
                      e.state.touchIdentifier,
                      A(e)
                    );
                    if (null != n) {
                      var r = n.x,
                        o = n.y;
                      if (Array.isArray(e.props.grid)) {
                        var a = r - e.state.lastX || 0,
                          l = o - e.state.lastY || 0,
                          c = p((0, u.snapToGrid)(e.props.grid, a, l), 2);
                        (a = c[0]),
                          (l = c[1]),
                          (r = e.state.lastX + a),
                          (o = e.state.lastY + l);
                      }
                      var f = (0, u.createCoreData)(A(e), r, o);
                      if (!1 === e.props.onStop(t, f) || !1 === e.mounted)
                        return !1;
                      var d = e.findDOMNode();
                      d &&
                        e.props.enableUserSelectHack &&
                        (0, i.removeUserSelectStyles)(d.ownerDocument),
                        (0, s.default)("DraggableCore: handleDragStop: %j", f),
                        e.setState({ dragging: !1, lastX: NaN, lastY: NaN }),
                        d &&
                          ((0, s.default)("DraggableCore: Removing handlers"),
                          (0, i.removeEvent)(
                            d.ownerDocument,
                            S.move,
                            e.handleDrag
                          ),
                          (0, i.removeEvent)(
                            d.ownerDocument,
                            S.stop,
                            e.handleDragStop
                          ));
                    }
                  }
                }),
                O(A(e), "onMouseDown", function (t) {
                  return (S = E), e.handleDragStart(t);
                }),
                O(A(e), "onMouseUp", function (t) {
                  return (S = E), e.handleDragStop(t);
                }),
                O(A(e), "onTouchStart", function (t) {
                  return (S = x), e.handleDragStart(t);
                }),
                O(A(e), "onTouchEnd", function (t) {
                  return (S = x), e.handleDragStop(t);
                }),
                e
              );
            }
            return (
              (t = c),
              (n = [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.mounted = !0;
                    var e = this.findDOMNode();
                    e &&
                      (0, i.addEvent)(e, x.start, this.onTouchStart, {
                        passive: !1,
                      });
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.mounted = !1;
                    var e = this.findDOMNode();
                    if (e) {
                      var t = e.ownerDocument;
                      (0, i.removeEvent)(t, E.move, this.handleDrag),
                        (0, i.removeEvent)(t, x.move, this.handleDrag),
                        (0, i.removeEvent)(t, E.stop, this.handleDragStop),
                        (0, i.removeEvent)(t, x.stop, this.handleDragStop),
                        (0, i.removeEvent)(e, x.start, this.onTouchStart, {
                          passive: !1,
                        }),
                        this.props.enableUserSelectHack &&
                          (0, i.removeUserSelectStyles)(t);
                    }
                  },
                },
                {
                  key: "findDOMNode",
                  value: function () {
                    var e, t, n;
                    return null !== (e = this.props) &&
                      void 0 !== e &&
                      e.nodeRef
                      ? null === (t = this.props) ||
                        void 0 === t ||
                        null === (n = t.nodeRef) ||
                        void 0 === n
                        ? void 0
                        : n.current
                      : l.default.findDOMNode(this);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return o.cloneElement(
                      o.Children.only(this.props.children),
                      {
                        onMouseDown: this.onMouseDown,
                        onMouseUp: this.onMouseUp,
                        onTouchEnd: this.onTouchEnd,
                      }
                    );
                  },
                },
              ]) && g(t.prototype, n),
              r && g(t, r),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              c
            );
          })(o.Component);
        (t.default = k),
          O(k, "displayName", "DraggableCore"),
          O(k, "propTypes", {
            allowAnyClick: a.default.bool,
            disabled: a.default.bool,
            enableUserSelectHack: a.default.bool,
            offsetParent: function (e, t) {
              if (e[t] && 1 !== e[t].nodeType)
                throw new Error("Draggable's offsetParent must be a DOM Node.");
            },
            grid: a.default.arrayOf(a.default.number),
            handle: a.default.string,
            cancel: a.default.string,
            nodeRef: a.default.object,
            onStart: a.default.func,
            onDrag: a.default.func,
            onStop: a.default.func,
            onMouseDown: a.default.func,
            scale: a.default.number,
            className: c.dontSetMe,
            style: c.dontSetMe,
            transform: c.dontSetMe,
          }),
          O(k, "defaultProps", {
            allowAnyClick: !1,
            disabled: !1,
            enableUserSelectHack: !0,
            onStart: function () {},
            onDrag: function () {},
            onStop: function () {},
            onMouseDown: function () {},
            scale: 1,
          });
      },
      5398: (e, t, n) => {
        "use strict";
        var r = n(3371),
          o = r.default,
          a = r.DraggableCore;
        (e.exports = o), (e.exports.default = o), (e.exports.DraggableCore = a);
      },
      1594: (e, t, n) => {
        "use strict";
        function r(e) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            r(e)
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.addClassName = p),
          (t.addEvent = function (e, t, n, r) {
            if (!e) return;
            var o = u({ capture: !0 }, r);
            e.addEventListener
              ? e.addEventListener(t, n, o)
              : e.attachEvent
              ? e.attachEvent("on" + t, n)
              : (e["on" + t] = n);
          }),
          (t.addUserSelectStyles = function (e) {
            if (!e) return;
            var t = e.getElementById("react-draggable-style-el");
            t ||
              (((t = e.createElement("style")).type = "text/css"),
              (t.id = "react-draggable-style-el"),
              (t.innerHTML =
                ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n"),
              (t.innerHTML +=
                ".react-draggable-transparent-selection *::selection {all: inherit;}\n"),
              e.getElementsByTagName("head")[0].appendChild(t));
            e.body && p(e.body, "react-draggable-transparent-selection");
          }),
          (t.createCSSTransform = function (e, t) {
            var n = d(e, t, "px");
            return c({}, (0, a.browserPrefixToKey)("transform", a.default), n);
          }),
          (t.createSVGTransform = function (e, t) {
            return d(e, t, "");
          }),
          (t.getTouch = function (e, t) {
            return (
              (e.targetTouches &&
                (0, o.findInArray)(e.targetTouches, function (e) {
                  return t === e.identifier;
                })) ||
              (e.changedTouches &&
                (0, o.findInArray)(e.changedTouches, function (e) {
                  return t === e.identifier;
                }))
            );
          }),
          (t.getTouchIdentifier = function (e) {
            if (e.targetTouches && e.targetTouches[0])
              return e.targetTouches[0].identifier;
            if (e.changedTouches && e.changedTouches[0])
              return e.changedTouches[0].identifier;
          }),
          (t.getTranslation = d),
          (t.innerHeight = function (e) {
            var t = e.clientHeight,
              n = e.ownerDocument.defaultView.getComputedStyle(e);
            return (
              (t -= (0, o.int)(n.paddingTop)),
              (t -= (0, o.int)(n.paddingBottom))
            );
          }),
          (t.innerWidth = function (e) {
            var t = e.clientWidth,
              n = e.ownerDocument.defaultView.getComputedStyle(e);
            return (
              (t -= (0, o.int)(n.paddingLeft)),
              (t -= (0, o.int)(n.paddingRight))
            );
          }),
          (t.matchesSelector = f),
          (t.matchesSelectorAndParentsTo = function (e, t, n) {
            var r = e;
            do {
              if (f(r, t)) return !0;
              if (r === n) return !1;
              r = r.parentNode;
            } while (r);
            return !1;
          }),
          (t.offsetXYFromParent = function (e, t, n) {
            var r =
                t === t.ownerDocument.body
                  ? { left: 0, top: 0 }
                  : t.getBoundingClientRect(),
              o = (e.clientX + t.scrollLeft - r.left) / n,
              a = (e.clientY + t.scrollTop - r.top) / n;
            return { x: o, y: a };
          }),
          (t.outerHeight = function (e) {
            var t = e.clientHeight,
              n = e.ownerDocument.defaultView.getComputedStyle(e);
            return (
              (t += (0, o.int)(n.borderTopWidth)),
              (t += (0, o.int)(n.borderBottomWidth))
            );
          }),
          (t.outerWidth = function (e) {
            var t = e.clientWidth,
              n = e.ownerDocument.defaultView.getComputedStyle(e);
            return (
              (t += (0, o.int)(n.borderLeftWidth)),
              (t += (0, o.int)(n.borderRightWidth))
            );
          }),
          (t.removeClassName = v),
          (t.removeEvent = function (e, t, n, r) {
            if (!e) return;
            var o = u({ capture: !0 }, r);
            e.removeEventListener
              ? e.removeEventListener(t, n, o)
              : e.detachEvent
              ? e.detachEvent("on" + t, n)
              : (e["on" + t] = null);
          }),
          (t.removeUserSelectStyles = function (e) {
            if (!e) return;
            try {
              if (
                (e.body && v(e.body, "react-draggable-transparent-selection"),
                e.selection)
              )
                e.selection.empty();
              else {
                var t = (e.defaultView || window).getSelection();
                t && "Caret" !== t.type && t.removeAllRanges();
              }
            } catch (e) {}
          });
        var o = n(7161),
          a = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" !== r(e) && "function" != typeof e))
              return { default: e };
            var n = l(t);
            if (n && n.has(e)) return n.get(e);
            var o = {},
              a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
              if (
                "default" !== i &&
                Object.prototype.hasOwnProperty.call(e, i)
              ) {
                var u = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                u && (u.get || u.set)
                  ? Object.defineProperty(o, i, u)
                  : (o[i] = e[i]);
              }
            (o.default = e), n && n.set(e, o);
            return o;
          })(n(4231));
        function l(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (l = function (e) {
            return e ? n : t;
          })(e);
        }
        function i(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function u(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? i(Object(n), !0).forEach(function (t) {
                  c(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : i(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function c(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var s = "";
        function f(e, t) {
          return (
            s ||
              (s = (0, o.findInArray)(
                [
                  "matches",
                  "webkitMatchesSelector",
                  "mozMatchesSelector",
                  "msMatchesSelector",
                  "oMatchesSelector",
                ],
                function (t) {
                  return (0, o.isFunction)(e[t]);
                }
              )),
            !!(0, o.isFunction)(e[s]) && e[s](t)
          );
        }
        function d(e, t, n) {
          var r = e.x,
            o = e.y,
            a = "translate(".concat(r).concat(n, ",").concat(o).concat(n, ")");
          if (t) {
            var l = "".concat("string" == typeof t.x ? t.x : t.x + n),
              i = "".concat("string" == typeof t.y ? t.y : t.y + n);
            a = "translate(".concat(l, ", ").concat(i, ")") + a;
          }
          return a;
        }
        function p(e, t) {
          e.classList
            ? e.classList.add(t)
            : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) ||
              (e.className += " ".concat(t));
        }
        function v(e, t) {
          e.classList
            ? e.classList.remove(t)
            : (e.className = e.className.replace(
                new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"),
                ""
              ));
        }
      },
      4231: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.browserPrefixToKey = o),
          (t.browserPrefixToStyle = function (e, t) {
            return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
          }),
          (t.default = void 0),
          (t.getPrefix = r);
        var n = ["Moz", "Webkit", "O", "ms"];
        function r() {
          var e,
            t,
            r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "transform";
          if ("undefined" == typeof window) return "";
          var a =
            null === (e = window.document) ||
            void 0 === e ||
            null === (t = e.documentElement) ||
            void 0 === t
              ? void 0
              : t.style;
          if (!a) return "";
          if (r in a) return "";
          for (var l = 0; l < n.length; l++) if (o(r, n[l]) in a) return n[l];
          return "";
        }
        function o(e, t) {
          return t
            ? "".concat(t).concat(
                (function (e) {
                  for (var t = "", n = !0, r = 0; r < e.length; r++)
                    n
                      ? ((t += e[r].toUpperCase()), (n = !1))
                      : "-" === e[r]
                      ? (n = !0)
                      : (t += e[r]);
                  return t;
                })(e)
              )
            : e;
        }
        var a = r();
        t.default = a;
      },
      3465: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function () {
            0;
          });
      },
      4629: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.canDragX = function (e) {
            return "both" === e.props.axis || "x" === e.props.axis;
          }),
          (t.canDragY = function (e) {
            return "both" === e.props.axis || "y" === e.props.axis;
          }),
          (t.createCoreData = function (e, t, n) {
            var o = e.state,
              l = !(0, r.isNum)(o.lastX),
              i = a(e);
            return l
              ? {
                  node: i,
                  deltaX: 0,
                  deltaY: 0,
                  lastX: t,
                  lastY: n,
                  x: t,
                  y: n,
                }
              : {
                  node: i,
                  deltaX: t - o.lastX,
                  deltaY: n - o.lastY,
                  lastX: o.lastX,
                  lastY: o.lastY,
                  x: t,
                  y: n,
                };
          }),
          (t.createDraggableData = function (e, t) {
            var n = e.props.scale;
            return {
              node: t.node,
              x: e.state.x + t.deltaX / n,
              y: e.state.y + t.deltaY / n,
              deltaX: t.deltaX / n,
              deltaY: t.deltaY / n,
              lastX: e.state.x,
              lastY: e.state.y,
            };
          }),
          (t.getBoundPosition = function (e, t, n) {
            if (!e.props.bounds) return [t, n];
            var l = e.props.bounds;
            l =
              "string" == typeof l
                ? l
                : (function (e) {
                    return {
                      left: e.left,
                      top: e.top,
                      right: e.right,
                      bottom: e.bottom,
                    };
                  })(l);
            var i = a(e);
            if ("string" == typeof l) {
              var u,
                c = i.ownerDocument,
                s = c.defaultView;
              if (
                !(
                  (u =
                    "parent" === l
                      ? i.parentNode
                      : c.querySelector(l)) instanceof s.HTMLElement
                )
              )
                throw new Error(
                  'Bounds selector "' + l + '" could not find an element.'
                );
              var f = u,
                d = s.getComputedStyle(i),
                p = s.getComputedStyle(f);
              l = {
                left:
                  -i.offsetLeft +
                  (0, r.int)(p.paddingLeft) +
                  (0, r.int)(d.marginLeft),
                top:
                  -i.offsetTop +
                  (0, r.int)(p.paddingTop) +
                  (0, r.int)(d.marginTop),
                right:
                  (0, o.innerWidth)(f) -
                  (0, o.outerWidth)(i) -
                  i.offsetLeft +
                  (0, r.int)(p.paddingRight) -
                  (0, r.int)(d.marginRight),
                bottom:
                  (0, o.innerHeight)(f) -
                  (0, o.outerHeight)(i) -
                  i.offsetTop +
                  (0, r.int)(p.paddingBottom) -
                  (0, r.int)(d.marginBottom),
              };
            }
            (0, r.isNum)(l.right) && (t = Math.min(t, l.right));
            (0, r.isNum)(l.bottom) && (n = Math.min(n, l.bottom));
            (0, r.isNum)(l.left) && (t = Math.max(t, l.left));
            (0, r.isNum)(l.top) && (n = Math.max(n, l.top));
            return [t, n];
          }),
          (t.getControlPosition = function (e, t, n) {
            var r = "number" == typeof t ? (0, o.getTouch)(e, t) : null;
            if ("number" == typeof t && !r) return null;
            var l = a(n),
              i =
                n.props.offsetParent || l.offsetParent || l.ownerDocument.body;
            return (0, o.offsetXYFromParent)(r || e, i, n.props.scale);
          }),
          (t.snapToGrid = function (e, t, n) {
            var r = Math.round(t / e[0]) * e[0],
              o = Math.round(n / e[1]) * e[1];
            return [r, o];
          });
        var r = n(7161),
          o = n(1594);
        function a(e) {
          var t = e.findDOMNode();
          if (!t) throw new Error("<DraggableCore>: Unmounted during event!");
          return t;
        }
      },
      7161: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.dontSetMe = function (e, t, n) {
            if (e[t])
              return new Error(
                "Invalid prop "
                  .concat(t, " passed to ")
                  .concat(n, " - do not set this, set it on the child.")
              );
          }),
          (t.findInArray = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              if (t.apply(t, [e[n], n, e])) return e[n];
          }),
          (t.int = function (e) {
            return parseInt(e, 10);
          }),
          (t.isFunction = function (e) {
            return (
              "function" == typeof e ||
              "[object Function]" === Object.prototype.toString.call(e)
            );
          }),
          (t.isNum = function (e) {
            return "number" == typeof e && !isNaN(e);
          });
      },
      2330: (e) => {
        var t = "undefined" != typeof Element,
          n = "function" == typeof Map,
          r = "function" == typeof Set,
          o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
        function a(e, l) {
          if (e === l) return !0;
          if (e && l && "object" == typeof e && "object" == typeof l) {
            if (e.constructor !== l.constructor) return !1;
            var i, u, c, s;
            if (Array.isArray(e)) {
              if ((i = e.length) != l.length) return !1;
              for (u = i; 0 != u--; ) if (!a(e[u], l[u])) return !1;
              return !0;
            }
            if (n && e instanceof Map && l instanceof Map) {
              if (e.size !== l.size) return !1;
              for (s = e.entries(); !(u = s.next()).done; )
                if (!l.has(u.value[0])) return !1;
              for (s = e.entries(); !(u = s.next()).done; )
                if (!a(u.value[1], l.get(u.value[0]))) return !1;
              return !0;
            }
            if (r && e instanceof Set && l instanceof Set) {
              if (e.size !== l.size) return !1;
              for (s = e.entries(); !(u = s.next()).done; )
                if (!l.has(u.value[0])) return !1;
              return !0;
            }
            if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(l)) {
              if ((i = e.length) != l.length) return !1;
              for (u = i; 0 != u--; ) if (e[u] !== l[u]) return !1;
              return !0;
            }
            if (e.constructor === RegExp)
              return e.source === l.source && e.flags === l.flags;
            if (e.valueOf !== Object.prototype.valueOf)
              return e.valueOf() === l.valueOf();
            if (e.toString !== Object.prototype.toString)
              return e.toString() === l.toString();
            if ((i = (c = Object.keys(e)).length) !== Object.keys(l).length)
              return !1;
            for (u = i; 0 != u--; )
              if (!Object.prototype.hasOwnProperty.call(l, c[u])) return !1;
            if (t && e instanceof Element) return !1;
            for (u = i; 0 != u--; )
              if (
                (("_owner" !== c[u] && "__v" !== c[u] && "__o" !== c[u]) ||
                  !e.$$typeof) &&
                !a(e[c[u]], l[c[u]])
              )
                return !1;
            return !0;
          }
          return e != e && l != l;
        }
        e.exports = function (e, t) {
          try {
            return a(e, t);
          } catch (e) {
            if ((e.message || "").match(/stack|recursion/i)) return !1;
            throw e;
          }
        };
      },
      3802: (e, t) => {
        "use strict";
        var n = "function" == typeof Symbol && Symbol.for,
          r = n ? Symbol.for("react.element") : 60103,
          o = n ? Symbol.for("react.portal") : 60106,
          a = n ? Symbol.for("react.fragment") : 60107,
          l = n ? Symbol.for("react.strict_mode") : 60108,
          i = n ? Symbol.for("react.profiler") : 60114,
          u = n ? Symbol.for("react.provider") : 60109,
          c = n ? Symbol.for("react.context") : 60110,
          s = n ? Symbol.for("react.async_mode") : 60111,
          f = n ? Symbol.for("react.concurrent_mode") : 60111,
          d = n ? Symbol.for("react.forward_ref") : 60112,
          p = n ? Symbol.for("react.suspense") : 60113,
          v = n ? Symbol.for("react.suspense_list") : 60120,
          m = n ? Symbol.for("react.memo") : 60115,
          g = n ? Symbol.for("react.lazy") : 60116,
          h = n ? Symbol.for("react.block") : 60121,
          y = n ? Symbol.for("react.fundamental") : 60117,
          b = n ? Symbol.for("react.responder") : 60118,
          A = n ? Symbol.for("react.scope") : 60119;
        function w(e) {
          if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case s:
                  case f:
                  case a:
                  case i:
                  case l:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case c:
                      case d:
                      case g:
                      case m:
                      case u:
                        return e;
                      default:
                        return t;
                    }
                }
              case o:
                return t;
            }
          }
        }
        function O(e) {
          return w(e) === f;
        }
        (t.AsyncMode = s),
          (t.ConcurrentMode = f),
          (t.ContextConsumer = c),
          (t.ContextProvider = u),
          (t.Element = r),
          (t.ForwardRef = d),
          (t.Fragment = a),
          (t.Lazy = g),
          (t.Memo = m),
          (t.Portal = o),
          (t.Profiler = i),
          (t.StrictMode = l),
          (t.Suspense = p),
          (t.isAsyncMode = function (e) {
            return O(e) || w(e) === s;
          }),
          (t.isConcurrentMode = O),
          (t.isContextConsumer = function (e) {
            return w(e) === c;
          }),
          (t.isContextProvider = function (e) {
            return w(e) === u;
          }),
          (t.isElement = function (e) {
            return "object" == typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return w(e) === d;
          }),
          (t.isFragment = function (e) {
            return w(e) === a;
          }),
          (t.isLazy = function (e) {
            return w(e) === g;
          }),
          (t.isMemo = function (e) {
            return w(e) === m;
          }),
          (t.isPortal = function (e) {
            return w(e) === o;
          }),
          (t.isProfiler = function (e) {
            return w(e) === i;
          }),
          (t.isStrictMode = function (e) {
            return w(e) === l;
          }),
          (t.isSuspense = function (e) {
            return w(e) === p;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" == typeof e ||
              "function" == typeof e ||
              e === a ||
              e === f ||
              e === i ||
              e === l ||
              e === p ||
              e === v ||
              ("object" == typeof e &&
                null !== e &&
                (e.$$typeof === g ||
                  e.$$typeof === m ||
                  e.$$typeof === u ||
                  e.$$typeof === c ||
                  e.$$typeof === d ||
                  e.$$typeof === y ||
                  e.$$typeof === b ||
                  e.$$typeof === A ||
                  e.$$typeof === h))
            );
          }),
          (t.typeOf = w);
      },
      5566: (e, t, n) => {
        "use strict";
        e.exports = n(3802);
      },
      2810: (e, t) => {
        "use strict";
        var n,
          r = Symbol.for("react.element"),
          o = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          u = Symbol.for("react.provider"),
          c = Symbol.for("react.context"),
          s = Symbol.for("react.server_context"),
          f = Symbol.for("react.forward_ref"),
          d = Symbol.for("react.suspense"),
          p = Symbol.for("react.suspense_list"),
          v = Symbol.for("react.memo"),
          m = Symbol.for("react.lazy"),
          g = Symbol.for("react.offscreen");
        function h(e) {
          if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case a:
                  case i:
                  case l:
                  case d:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case s:
                      case c:
                      case f:
                      case m:
                      case v:
                      case u:
                        return e;
                      default:
                        return t;
                    }
                }
              case o:
                return t;
            }
          }
        }
        (n = Symbol.for("react.module.reference")),
          (t.isFragment = function (e) {
            return h(e) === a;
          }),
          (t.isMemo = function (e) {
            return h(e) === v;
          });
      },
      2037: (e, t, n) => {
        "use strict";
        e.exports = n(2810);
      },
      8618: (e, t, n) => {
        "use strict";
        var r = n(1538),
          o = 60103,
          a = 60106;
        (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
        var l = 60109,
          i = 60110,
          u = 60112;
        t.Suspense = 60113;
        var c = 60115,
          s = 60116;
        if ("function" == typeof Symbol && Symbol.for) {
          var f = Symbol.for;
          (o = f("react.element")),
            (a = f("react.portal")),
            (t.Fragment = f("react.fragment")),
            (t.StrictMode = f("react.strict_mode")),
            (t.Profiler = f("react.profiler")),
            (l = f("react.provider")),
            (i = f("react.context")),
            (u = f("react.forward_ref")),
            (t.Suspense = f("react.suspense")),
            (c = f("react.memo")),
            (s = f("react.lazy"));
        }
        var d = "function" == typeof Symbol && Symbol.iterator;
        function p(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var v = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || v);
        }
        function h() {}
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || v);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(p(85));
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (h.prototype = g.prototype);
        var b = (y.prototype = new h());
        (b.constructor = y), r(b, g.prototype), (b.isPureReactComponent = !0);
        var A = { current: null },
          w = Object.prototype.hasOwnProperty,
          O = { key: !0, ref: !0, __self: !0, __source: !0 };
        function x(e, t, n) {
          var r,
            a = {},
            l = null,
            i = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (l = "" + t.key),
            t))
              w.call(t, r) && !O.hasOwnProperty(r) && (a[r] = t[r]);
          var u = arguments.length - 2;
          if (1 === u) a.children = n;
          else if (1 < u) {
            for (var c = Array(u), s = 0; s < u; s++) c[s] = arguments[s + 2];
            a.children = c;
          }
          if (e && e.defaultProps)
            for (r in (u = e.defaultProps)) void 0 === a[r] && (a[r] = u[r]);
          return {
            $$typeof: o,
            type: e,
            key: l,
            ref: i,
            props: a,
            _owner: A.current,
          };
        }
        function E(e) {
          return "object" == typeof e && null !== e && e.$$typeof === o;
        }
        var S = /\/+/g;
        function k(e, t) {
          return "object" == typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function P(e, t, n, r, l) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (i) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case o:
                  case a:
                    u = !0;
                }
            }
          if (u)
            return (
              (l = l((u = e))),
              (e = "" === r ? "." + k(u, 0) : r),
              Array.isArray(l)
                ? ((n = ""),
                  null != e && (n = e.replace(S, "$&/") + "/"),
                  P(l, t, n, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (E(l) &&
                    (l = (function (e, t) {
                      return {
                        $$typeof: o,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      l,
                      n +
                        (!l.key || (u && u.key === l.key)
                          ? ""
                          : ("" + l.key).replace(S, "$&/") + "/") +
                        e
                    )),
                  t.push(l)),
              1
            );
          if (((u = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
            for (var c = 0; c < e.length; c++) {
              var s = r + k((i = e[c]), c);
              u += P(i, t, n, s, l);
            }
          else if (
            ((s = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (d && e[d]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" == typeof s)
          )
            for (e = s.call(e), c = 0; !(i = e.next()).done; )
              u += P((i = i.value), t, n, (s = r + k(i, c++)), l);
          else if ("object" === i)
            throw (
              ((t = "" + e),
              Error(
                p(
                  31,
                  "[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t
                )
              ))
            );
          return u;
        }
        function C(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            P(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function j(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()),
              (e._status = 0),
              (e._result = t),
              t.then(
                function (t) {
                  0 === e._status &&
                    ((t = t.default), (e._status = 1), (e._result = t));
                },
                function (t) {
                  0 === e._status && ((e._status = 2), (e._result = t));
                }
              );
          }
          if (1 === e._status) return e._result;
          throw e._result;
        }
        var _ = { current: null };
        function T() {
          var e = _.current;
          if (null === e) throw Error(p(321));
          return e;
        }
        var N = {
          ReactCurrentDispatcher: _,
          ReactCurrentBatchConfig: { transition: 0 },
          ReactCurrentOwner: A,
          IsSomeRendererActing: { current: !1 },
          assign: r,
        };
        (t.Children = {
          map: C,
          forEach: function (e, t, n) {
            C(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              C(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              C(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!E(e)) throw Error(p(143));
            return e;
          },
        }),
          (t.Component = g),
          (t.PureComponent = y),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N),
          (t.cloneElement = function (e, t, n) {
            if (null == e) throw Error(p(267, e));
            var a = r({}, e.props),
              l = e.key,
              i = e.ref,
              u = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (u = A.current)),
                void 0 !== t.key && (l = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var c = e.type.defaultProps;
              for (s in t)
                w.call(t, s) &&
                  !O.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = n;
            else if (1 < s) {
              c = Array(s);
              for (var f = 0; f < s; f++) c[f] = arguments[f + 2];
              a.children = c;
            }
            return {
              $$typeof: o,
              type: e.type,
              key: l,
              ref: i,
              props: a,
              _owner: u,
            };
          }),
          (t.createContext = function (e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: i,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = x),
          (t.createFactory = function (e) {
            var t = x.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = E),
          (t.lazy = function (e) {
            return {
              $$typeof: s,
              _payload: { _status: -1, _result: e },
              _init: j,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: c, type: e, compare: void 0 === t ? null : t };
          }),
          (t.useCallback = function (e, t) {
            return T().useCallback(e, t);
          }),
          (t.useContext = function (e, t) {
            return T().useContext(e, t);
          }),
          (t.useDebugValue = function () {}),
          (t.useEffect = function (e, t) {
            return T().useEffect(e, t);
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return T().useImperativeHandle(e, t, n);
          }),
          (t.useLayoutEffect = function (e, t) {
            return T().useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return T().useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return T().useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return T().useRef(e);
          }),
          (t.useState = function (e) {
            return T().useState(e);
          }),
          (t.version = "17.0.2");
      },
      9231: (e, t, n) => {
        "use strict";
        e.exports = n(8618);
      },
      5726: (e, t) => {
        "use strict";
        var n, r, o, a;
        if (
          "object" == typeof performance &&
          "function" == typeof performance.now
        ) {
          var l = performance;
          t.unstable_now = function () {
            return l.now();
          };
        } else {
          var i = Date,
            u = i.now();
          t.unstable_now = function () {
            return i.now() - u;
          };
        }
        if (
          "undefined" == typeof window ||
          "function" != typeof MessageChannel
        ) {
          var c = null,
            s = null,
            f = function () {
              if (null !== c)
                try {
                  var e = t.unstable_now();
                  c(!0, e), (c = null);
                } catch (e) {
                  throw (setTimeout(f, 0), e);
                }
            };
          (n = function (e) {
            null !== c ? setTimeout(n, 0, e) : ((c = e), setTimeout(f, 0));
          }),
            (r = function (e, t) {
              s = setTimeout(e, t);
            }),
            (o = function () {
              clearTimeout(s);
            }),
            (t.unstable_shouldYield = function () {
              return !1;
            }),
            (a = t.unstable_forceFrameRate = function () {});
        } else {
          var d = window.setTimeout,
            p = window.clearTimeout;
          if ("undefined" != typeof console) {
            window.cancelAnimationFrame;
            window.requestAnimationFrame;
          }
          var v = !1,
            m = null,
            g = -1,
            h = 5,
            y = 0;
          (t.unstable_shouldYield = function () {
            return t.unstable_now() >= y;
          }),
            (a = function () {}),
            (t.unstable_forceFrameRate = function (e) {
              0 > e || 125 < e || (h = 0 < e ? Math.floor(1e3 / e) : 5);
            });
          var b = new MessageChannel(),
            A = b.port2;
          (b.port1.onmessage = function () {
            if (null !== m) {
              var e = t.unstable_now();
              y = e + h;
              try {
                m(!0, e) ? A.postMessage(null) : ((v = !1), (m = null));
              } catch (e) {
                throw (A.postMessage(null), e);
              }
            } else v = !1;
          }),
            (n = function (e) {
              (m = e), v || ((v = !0), A.postMessage(null));
            }),
            (r = function (e, n) {
              g = d(function () {
                e(t.unstable_now());
              }, n);
            }),
            (o = function () {
              p(g), (g = -1);
            });
        }
        function w(e, t) {
          var n = e.length;
          e.push(t);
          e: for (;;) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(void 0 !== o && 0 < E(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function O(e) {
          return void 0 === (e = e[0]) ? null : e;
        }
        function x(e) {
          var t = e[0];
          if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
              e[0] = n;
              e: for (var r = 0, o = e.length; r < o; ) {
                var a = 2 * (r + 1) - 1,
                  l = e[a],
                  i = a + 1,
                  u = e[i];
                if (void 0 !== l && 0 > E(l, n))
                  void 0 !== u && 0 > E(u, l)
                    ? ((e[r] = u), (e[i] = n), (r = i))
                    : ((e[r] = l), (e[a] = n), (r = a));
                else {
                  if (!(void 0 !== u && 0 > E(u, n))) break e;
                  (e[r] = u), (e[i] = n), (r = i);
                }
              }
            }
            return t;
          }
          return null;
        }
        function E(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        var S = [],
          k = [],
          P = 1,
          C = null,
          j = 3,
          _ = !1,
          T = !1,
          N = !1;
        function D(e) {
          for (var t = O(k); null !== t; ) {
            if (null === t.callback) x(k);
            else {
              if (!(t.startTime <= e)) break;
              x(k), (t.sortIndex = t.expirationTime), w(S, t);
            }
            t = O(k);
          }
        }
        function L(e) {
          if (((N = !1), D(e), !T))
            if (null !== O(S)) (T = !0), n(R);
            else {
              var t = O(k);
              null !== t && r(L, t.startTime - e);
            }
        }
        function R(e, n) {
          (T = !1), N && ((N = !1), o()), (_ = !0);
          var a = j;
          try {
            for (
              D(n), C = O(S);
              null !== C &&
              (!(C.expirationTime > n) || (e && !t.unstable_shouldYield()));

            ) {
              var l = C.callback;
              if ("function" == typeof l) {
                (C.callback = null), (j = C.priorityLevel);
                var i = l(C.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" == typeof i
                    ? (C.callback = i)
                    : C === O(S) && x(S),
                  D(n);
              } else x(S);
              C = O(S);
            }
            if (null !== C) var u = !0;
            else {
              var c = O(k);
              null !== c && r(L, c.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (C = null), (j = a), (_ = !1);
          }
        }
        var M = a;
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            T || _ || ((T = !0), n(R));
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return j;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return O(S);
          }),
          (t.unstable_next = function (e) {
            switch (j) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = j;
            }
            var n = j;
            j = t;
            try {
              return e();
            } finally {
              j = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = M),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = j;
            j = e;
            try {
              return t();
            } finally {
              j = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var i = t.unstable_now();
            switch (
              ("object" == typeof l && null !== l
                ? (l = "number" == typeof (l = l.delay) && 0 < l ? i + l : i)
                : (l = i),
              e)
            ) {
              case 1:
                var u = -1;
                break;
              case 2:
                u = 250;
                break;
              case 5:
                u = 1073741823;
                break;
              case 4:
                u = 1e4;
                break;
              default:
                u = 5e3;
            }
            return (
              (e = {
                id: P++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (u = l + u),
                sortIndex: -1,
              }),
              l > i
                ? ((e.sortIndex = l),
                  w(k, e),
                  null === O(S) &&
                    e === O(k) &&
                    (N ? o() : (N = !0), r(L, l - i)))
                : ((e.sortIndex = u), w(S, e), T || _ || ((T = !0), n(R))),
              e
            );
          }),
          (t.unstable_wrapCallback = function (e) {
            var t = j;
            return function () {
              var n = j;
              j = t;
              try {
                return e.apply(this, arguments);
              } finally {
                j = n;
              }
            };
          });
      },
      1851: (e, t, n) => {
        "use strict";
        e.exports = n(5726);
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { id: r, loaded: !1, exports: {} });
    return e[r].call(a.exports, a, a.exports, n), (a.loaded = !0), a.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      "use strict";
      var e = n(9231),
        t = n(4151);
      const r = (e) =>
          new Promise((t, n) => {
            try {
              e &&
                e.header &&
                (e.header.client_key = window.TRANSMART_CRX_CLIENT_KEY),
                chrome.runtime.sendMessage({ message_type: "fetch", ...e }, t);
            } catch (e) {
              n(e);
            }
          }),
        o = "transmart-crx-app-container",
        a = "transmart-crx-shadow-root",
        l = "auto_translation_block",
        i = "text_analysis",
        u = "翻译失败，请重新尝试",
        c = "draggable-header",
        s = "__transmart",
        f = "transmartTrxPopupContainer",
        d = "lang_list",
        p = "SELECTION_TEXT",
        v = "SELECTION_POSITION",
        m = "SELECTION_CLOSE",
        g = (e) => {
          const t = ["STRONG", "PRE", "CODE", "A"];
          if ("LI" === e.nodeName) {
            return [...e.childNodes].some((e) => t.includes(e.nodeName));
          }
          return [
            "P",
            "H1",
            "H2",
            "H3",
            "H4",
            "H5",
            "H6",
            "BLOCKQUOTE",
            "FIGCAPTION",
          ].includes(e.nodeName);
        },
        h = (e) => e.nodeType === e.TEXT_NODE,
        y = (e) => {
          if (!(e instanceof HTMLElement)) return !1;
          const t =
            window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight;
          return (
            (e.getBoundingClientRect() && e.getBoundingClientRect().top) <=
            t + 300
          );
        },
        b = (e) => "none" !== window.getComputedStyle(e).display && y(e),
        A = (e, t) => {
          var n;
          null === (n = t.parentNode) ||
            void 0 === n ||
            n.insertBefore(e, t.nextElementSibling || t.nextSibling);
        },
        w = (e) => !!e.textContent.replace(/\n/, "").trim(),
        O = (e) => {
          if (!(e instanceof HTMLElement)) return !1;
          const { overflow: t, overflowY: n } = window.getComputedStyle(e);
          return ["auto", "scroll"].some((e) => t === e || n === e);
        },
        x = [
          "SCRIPT",
          "I",
          "PRE",
          "CODE",
          "STYLE",
          "svg",
          "#comment",
          "IMG",
          "IFRAME",
          "NOSCRIPT",
        ],
        E = (e) => {
          const t = document.createElement("div");
          return (t.id = e), t;
        },
        S = (e) => Array.isArray(e) && e.length > 0,
        k = () => {
          let e = "";
          if (void 0 !== window.getSelection) {
            const t = window.getSelection();
            if (null != t && t.rangeCount) {
              const n = document.createElement("div");
              for (let e = 0, r = t.rangeCount; e < r; ++e)
                n.appendChild(t.getRangeAt(e).cloneContents());
              e = n.innerHTML;
            }
          }
          return e;
        },
        P = (e) => {
          const t = [...document.querySelectorAll("[__transmart=SOURCE]")],
            n = [...document.querySelectorAll("[__transmart=TARGET]")],
            r = (e) => {
              const t = e.__TRANSMART_PRE_DISPLAY;
              t &&
                "none" === e.style.display &&
                (e.style.setProperty("display", t, "important"),
                (e.__TRANSMART_PRE_DISPLAY = null));
            },
            o = (e) => {
              e.__TRANSMART_PRE_DISPLAY ||
                (e.__TRANSMART_PRE_DISPLAY =
                  window.getComputedStyle(e).display),
                e.style.setProperty("display", "none", "important");
            };
          switch (e) {
            case "source":
              t.forEach(r), n.forEach(o);
              break;
            case "target":
              t.forEach(o), n.forEach(r);
              break;
            case "all":
              t.forEach(r), n.forEach(r);
          }
        },
        C = (e) => {
          const t = [...e.childNodes],
            n = [];
          for (; t.length; ) {
            const e = t.shift();
            var r;
            if (
              !(e instanceof HTMLElement) ||
              ("no" !== e.getAttribute("translate") && !e.hasAttribute(s))
            )
              if (g(e)) {
                if (b(e))
                  null === (r = e.setAttribute) ||
                    void 0 === r ||
                    r.call(e, s, ""),
                    n.push(e);
              } else if (h(e)) {
                if (w(e) && !e.parentElement.hasAttribute(s)) {
                  [...e.parentElement.childNodes].every((e) => !h(e)) &&
                    e.parentElement.setAttribute(s, "");
                  const t = document.createElement("font");
                  t.setAttribute(s, ""),
                    (t.textContent = e.textContent),
                    e.replaceWith(t),
                    n.push(t);
                }
              } else
                !x.includes(e.nodeName) &&
                  (null == e ? void 0 : e.id) !== a &&
                  b(e) &&
                  t.unshift(...e.childNodes);
          }
          return n;
        },
        j = () => {
          const e = ((e, t = document) => [...t.querySelectorAll(e)])(
            "[placeholder]"
          ).filter((e) => !e.hasAttribute(s) && !(null == e || !e.placeholder));
          return (
            e.forEach((e) => {
              e.setAttribute(s, "");
            }),
            e
          );
        },
        _ = () =>
          document
            .getElementById(window._TRANSMART_CTX_SHADOW_ROOT)
            .shadowRoot.getElementById(window._TRANSMART_CRX_APP_CONTAINER),
        T = () => window === window.top,
        N = (e) => {
          window.parent.postMessage({ type: "TRANSMART_CRX", payload: e }, "*");
          [
            ...document.querySelectorAll("iframe"),
            ...document.querySelectorAll("frame"),
          ].forEach((t) => {
            t.contentWindow.postMessage(
              { type: "TRANSMART_CRX", payload: e },
              "*"
            );
          });
        };
      var D = n(5331);
      var L = n(3763),
        R = n.n(L);
      const M = function (t) {
        var n = (0, e.useRef)(t);
        return (n.current = t), n;
      };
      const I = function (t) {
        var n = M(t);
        (0, e.useEffect)(function () {
          return function () {
            n.current();
          };
        }, []);
      };
      var z = function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            o,
            a = n.call(e),
            l = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
              l.push(r.value);
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              r && !r.done && (n = a.return) && n.call(a);
            } finally {
              if (o) throw o.error;
            }
          }
          return l;
        },
        B = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(z(arguments[t]));
          return e;
        };
      const F = function (t, n) {
        var r,
          o = M(t),
          a =
            null !== (r = null == n ? void 0 : n.wait) && void 0 !== r
              ? r
              : 1e3,
          l = (0, e.useMemo)(function () {
            return R()(
              function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                return o.current.apply(o, B(e));
              },
              a,
              n
            );
          }, []);
        return (
          I(function () {
            l.cancel();
          }),
          { run: l, cancel: l.cancel, flush: l.flush }
        );
      };
      var U = n(5443),
        H = n.n(U);
      function W(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function V(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function X(e, t) {
        if (e) {
          if ("string" == typeof e) return V(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? V(e, t)
              : void 0
          );
        }
      }
      function Y(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                a = [],
                l = !0,
                i = !1;
              try {
                for (
                  n = n.call(e);
                  !(l = (r = n.next()).done) &&
                  (a.push(r.value), !t || a.length !== t);
                  l = !0
                );
              } catch (e) {
                (i = !0), (o = e);
              } finally {
                try {
                  l || null == n.return || n.return();
                } finally {
                  if (i) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          X(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      n(6120);
      var Q = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      Q && document.addEventListener, Q && document.removeEventListener;
      function K(e, t) {
        if (!e || !t) return !1;
        if (-1 !== t.indexOf(" "))
          throw new Error("className should not contain space.");
        return e.classList
          ? e.classList.contains(t)
          : " ".concat(e.className, " ").indexOf(" ".concat(t, " ")) > -1;
      }
      var G =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
          ? window
          : void 0 !== n.g
          ? n.g
          : "undefined" != typeof self
          ? self
          : {};
      function q(e) {
        return (
          (q =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          q(e)
        );
      }
      var J = "object" == q(G) && G && G.Object === Object && G,
        Z = J,
        $ =
          "object" == ("undefined" == typeof self ? "undefined" : q(self)) &&
          self &&
          self.Object === Object &&
          self,
        ee = Z || $ || Function("return this")(),
        te = ee.Symbol,
        ne = te,
        re = Object.prototype,
        oe = re.hasOwnProperty,
        ae = re.toString,
        le = ne ? ne.toStringTag : void 0;
      var ie = function (e) {
          var t = oe.call(e, le),
            n = e[le];
          try {
            e[le] = void 0;
            var r = !0;
          } catch (e) {}
          var o = ae.call(e);
          return r && (t ? (e[le] = n) : delete e[le]), o;
        },
        ue = Object.prototype.toString;
      var ce = ie,
        se = function (e) {
          return ue.call(e);
        },
        fe = te ? te.toStringTag : void 0;
      var de = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : fe && fe in Object(e)
          ? ce(e)
          : se(e);
      };
      var pe = function (e) {
          var t = q(e);
          return null != e && ("object" == t || "function" == t);
        },
        ve = de,
        me = pe;
      var ge,
        he = function (e) {
          if (!me(e)) return !1;
          var t = ve(e);
          return (
            "[object Function]" == t ||
            "[object GeneratorFunction]" == t ||
            "[object AsyncFunction]" == t ||
            "[object Proxy]" == t
          );
        },
        ye = ee["__core-js_shared__"],
        be = (ge = /[^.]+$/.exec((ye && ye.keys && ye.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + ge
          : "";
      var Ae = function (e) {
          return !!be && be in e;
        },
        we = Function.prototype.toString;
      var Oe = he,
        xe = Ae,
        Ee = pe,
        Se = function (e) {
          if (null != e) {
            try {
              return we.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        },
        ke = /^\[object .+?Constructor\]$/,
        Pe = Function.prototype,
        Ce = Object.prototype,
        je = Pe.toString,
        _e = Ce.hasOwnProperty,
        Te = RegExp(
          "^" +
            je
              .call(_e)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      var Ne = function (e) {
          return !(!Ee(e) || xe(e)) && (Oe(e) ? Te : ke).test(Se(e));
        },
        De = function (e, t) {
          return null == e ? void 0 : e[t];
        };
      var Le = function (e, t) {
          var n = De(e, t);
          return Ne(n) ? n : void 0;
        },
        Re = Le(ee, "Map");
      var Me = function (e, t) {
        return e === t || (e != e && t != t);
      };
      var Ie = function () {
          (this.__data__ = []), (this.size = 0);
        },
        ze = Me;
      var Be = function (e, t) {
          for (var n = e.length; n--; ) if (ze(e[n][0], t)) return n;
          return -1;
        },
        Fe = Be,
        Ue = Array.prototype.splice;
      var He = Be;
      var We = Be;
      var Ve = Be;
      var Xe = Ie,
        Ye = function (e) {
          var t = this.__data__,
            n = Fe(t, e);
          return (
            !(n < 0) &&
            (n == t.length - 1 ? t.pop() : Ue.call(t, n, 1), --this.size, !0)
          );
        },
        Qe = function (e) {
          var t = this.__data__,
            n = He(t, e);
          return n < 0 ? void 0 : t[n][1];
        },
        Ke = function (e) {
          return We(this.__data__, e) > -1;
        },
        Ge = function (e, t) {
          var n = this.__data__,
            r = Ve(n, e);
          return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
        };
      function qe(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (qe.prototype.clear = Xe),
        (qe.prototype.delete = Ye),
        (qe.prototype.get = Qe),
        (qe.prototype.has = Ke),
        (qe.prototype.set = Ge);
      var Je = qe,
        Ze = Le(Object, "create"),
        $e = Ze;
      var et = function () {
        (this.__data__ = $e ? $e(null) : {}), (this.size = 0);
      };
      var tt = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        },
        nt = Ze,
        rt = Object.prototype.hasOwnProperty;
      var ot = function (e) {
          var t = this.__data__;
          if (nt) {
            var n = t[e];
            return "__lodash_hash_undefined__" === n ? void 0 : n;
          }
          return rt.call(t, e) ? t[e] : void 0;
        },
        at = Ze,
        lt = Object.prototype.hasOwnProperty;
      var it = Ze;
      var ut = et,
        ct = tt,
        st = ot,
        ft = function (e) {
          var t = this.__data__;
          return at ? void 0 !== t[e] : lt.call(t, e);
        },
        dt = function (e, t) {
          var n = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (n[e] = it && void 0 === t ? "__lodash_hash_undefined__" : t),
            this
          );
        };
      function pt(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (pt.prototype.clear = ut),
        (pt.prototype.delete = ct),
        (pt.prototype.get = st),
        (pt.prototype.has = ft),
        (pt.prototype.set = dt);
      var vt = pt,
        mt = Je,
        gt = Re;
      var ht = function (e) {
        var t = q(e);
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      };
      var yt = function (e, t) {
          var n = e.__data__;
          return ht(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
        },
        bt = yt;
      var At = yt;
      var wt = yt;
      var Ot = yt;
      var xt = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new vt(),
              map: new (gt || mt)(),
              string: new vt(),
            });
        },
        Et = function (e) {
          var t = bt(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        },
        St = function (e) {
          return At(this, e).get(e);
        },
        kt = function (e) {
          return wt(this, e).has(e);
        },
        Pt = function (e, t) {
          var n = Ot(this, e),
            r = n.size;
          return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
        };
      function Ct(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (Ct.prototype.clear = xt),
        (Ct.prototype.delete = Et),
        (Ct.prototype.get = St),
        (Ct.prototype.has = kt),
        (Ct.prototype.set = Pt);
      var jt = Ct;
      var _t = function (e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      };
      var Tt = function (e) {
        return null != e && "object" == q(e);
      };
      var Nt = function (e) {
        return function (t) {
          return e(t);
        };
      };
      var Dt = function (e, t) {
          return function (n) {
            return e(t(n));
          };
        },
        Lt = Object.prototype;
      var Rt = function (e) {
          var t = e && e.constructor;
          return e === (("function" == typeof t && t.prototype) || Lt);
        },
        Mt = { exports: {} };
      var It = function () {
        return !1;
      };
      !(function (e, t) {
        var n = ee,
          r = It,
          o = t && !t.nodeType && t,
          a = o && e && !e.nodeType && e,
          l = a && a.exports === o ? n.Buffer : void 0,
          i = (l ? l.isBuffer : void 0) || r;
        e.exports = i;
      })(Mt, Mt.exports);
      var zt = de,
        Bt = _t,
        Ft = Tt,
        Ut = {};
      (Ut["[object Float32Array]"] =
        Ut["[object Float64Array]"] =
        Ut["[object Int8Array]"] =
        Ut["[object Int16Array]"] =
        Ut["[object Int32Array]"] =
        Ut["[object Uint8Array]"] =
        Ut["[object Uint8ClampedArray]"] =
        Ut["[object Uint16Array]"] =
        Ut["[object Uint32Array]"] =
          !0),
        (Ut["[object Arguments]"] =
          Ut["[object Array]"] =
          Ut["[object ArrayBuffer]"] =
          Ut["[object Boolean]"] =
          Ut["[object DataView]"] =
          Ut["[object Date]"] =
          Ut["[object Error]"] =
          Ut["[object Function]"] =
          Ut["[object Map]"] =
          Ut["[object Number]"] =
          Ut["[object Object]"] =
          Ut["[object RegExp]"] =
          Ut["[object Set]"] =
          Ut["[object String]"] =
          Ut["[object WeakMap]"] =
            !1);
      var Ht = function (e) {
          return Ft(e) && Bt(e.length) && !!Ut[zt(e)];
        },
        Wt = { exports: {} };
      !(function (e, t) {
        var n = J,
          r = t && !t.nodeType && t,
          o = r && e && !e.nodeType && e,
          a = o && o.exports === r && n.process,
          l = (function () {
            try {
              var e = o && o.require && o.require("util").types;
              return e || (a && a.binding && a.binding("util"));
            } catch (e) {}
          })();
        e.exports = l;
      })(Wt, Wt.exports);
      var Vt = Ht,
        Xt = Nt,
        Yt = Wt.exports,
        Qt = Yt && Yt.isTypedArray,
        Kt = Qt ? Xt(Qt) : Vt,
        Gt = Le,
        qt = (function () {
          try {
            var e = Gt(Object, "defineProperty");
            return e({}, "", {}), e;
          } catch (e) {}
        })(),
        Jt = qt;
      var Zt = function (e, t, n) {
          "__proto__" == t && Jt
            ? Jt(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0,
              })
            : (e[t] = n);
        },
        $t = Zt,
        en = Me,
        tn = Object.prototype.hasOwnProperty;
      var nn = function (e, t, n) {
          var r = e[t];
          (tn.call(e, t) && en(r, n) && (void 0 !== n || t in e)) ||
            $t(e, t, n);
        },
        rn = de,
        on = Tt;
      var an = function (e) {
          return on(e) && "[object Arguments]" == rn(e);
        },
        ln = Tt,
        un = Object.prototype,
        cn = un.hasOwnProperty,
        sn = un.propertyIsEnumerable,
        fn = an(
          (function () {
            return arguments;
          })()
        )
          ? an
          : function (e) {
              return ln(e) && cn.call(e, "callee") && !sn.call(e, "callee");
            },
        dn = Array.isArray,
        pn = /^(?:0|[1-9]\d*)$/;
      var vn = function (e, t) {
          var n = q(e);
          return (
            !!(t = null == t ? 9007199254740991 : t) &&
            ("number" == n || ("symbol" != n && pn.test(e))) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
          );
        },
        mn = he,
        gn = _t;
      var hn = function (e) {
          return null != e && gn(e.length) && !mn(e);
        },
        yn = Je;
      var bn = Je,
        An = Re,
        wn = jt;
      var On = Je,
        xn = function () {
          (this.__data__ = new yn()), (this.size = 0);
        },
        En = function (e) {
          var t = this.__data__,
            n = t.delete(e);
          return (this.size = t.size), n;
        },
        Sn = function (e) {
          return this.__data__.get(e);
        },
        kn = function (e) {
          return this.__data__.has(e);
        },
        Pn = function (e, t) {
          var n = this.__data__;
          if (n instanceof bn) {
            var r = n.__data__;
            if (!An || r.length < 199)
              return r.push([e, t]), (this.size = ++n.size), this;
            n = this.__data__ = new wn(r);
          }
          return n.set(e, t), (this.size = n.size), this;
        };
      function Cn(e) {
        var t = (this.__data__ = new On(e));
        this.size = t.size;
      }
      (Cn.prototype.clear = xn),
        (Cn.prototype.delete = En),
        (Cn.prototype.get = Sn),
        (Cn.prototype.has = kn),
        (Cn.prototype.set = Pn);
      var jn = Cn,
        _n = { exports: {} };
      !(function (e, t) {
        var n = ee,
          r = t && !t.nodeType && t,
          o = r && e && !e.nodeType && e,
          a = o && o.exports === r ? n.Buffer : void 0,
          l = a ? a.allocUnsafe : void 0;
        e.exports = function (e, t) {
          if (t) return e.slice();
          var n = e.length,
            r = l ? l(n) : new e.constructor(n);
          return e.copy(r), r;
        };
      })(_n, _n.exports);
      var Tn = ee.Uint8Array;
      var Nn = function (e) {
        var t = new e.constructor(e.byteLength);
        return new Tn(t).set(new Tn(e)), t;
      };
      var Dn = function (e, t) {
        var n = t ? Nn(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
      };
      var Ln = function (e, t) {
          var n = -1,
            r = e.length;
          for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
          return t;
        },
        Rn = pe,
        Mn = Object.create,
        In = (function () {
          function e() {}
          return function (t) {
            if (!Rn(t)) return {};
            if (Mn) return Mn(t);
            e.prototype = t;
            var n = new e();
            return (e.prototype = void 0), n;
          };
        })(),
        zn = Dt(Object.getPrototypeOf, Object),
        Bn = In,
        Fn = zn,
        Un = Rt;
      var Hn = function (e) {
          return "function" != typeof e.constructor || Un(e) ? {} : Bn(Fn(e));
        },
        Wn = nn,
        Vn = Zt;
      var Xn = function (e, t, n, r) {
        var o = !n;
        n || (n = {});
        for (var a = -1, l = t.length; ++a < l; ) {
          var i = t[a],
            u = r ? r(n[i], e[i], i, n, e) : void 0;
          void 0 === u && (u = e[i]), o ? Vn(n, i, u) : Wn(n, i, u);
        }
        return n;
      };
      var Yn = function (e, t) {
          for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
          return r;
        },
        Qn = fn,
        Kn = dn,
        Gn = Mt.exports,
        qn = vn,
        Jn = Kt,
        Zn = Object.prototype.hasOwnProperty;
      var $n = function (e, t) {
        var n = Kn(e),
          r = !n && Qn(e),
          o = !n && !r && Gn(e),
          a = !n && !r && !o && Jn(e),
          l = n || r || o || a,
          i = l ? Yn(e.length, String) : [],
          u = i.length;
        for (var c in e)
          (!t && !Zn.call(e, c)) ||
            (l &&
              ("length" == c ||
                (o && ("offset" == c || "parent" == c)) ||
                (a &&
                  ("buffer" == c || "byteLength" == c || "byteOffset" == c)) ||
                qn(c, u))) ||
            i.push(c);
        return i;
      };
      var er = pe,
        tr = Rt,
        nr = function (e) {
          var t = [];
          if (null != e) for (var n in Object(e)) t.push(n);
          return t;
        },
        rr = Object.prototype.hasOwnProperty;
      var or = $n,
        ar = function (e) {
          if (!er(e)) return nr(e);
          var t = tr(e),
            n = [];
          for (var r in e)
            ("constructor" != r || (!t && rr.call(e, r))) && n.push(r);
          return n;
        },
        lr = hn;
      var ir = function (e) {
        return lr(e) ? or(e, !0) : ar(e);
      };
      var ur = function (e) {
        return e;
      };
      var cr = function (e, t, n) {
          switch (n.length) {
            case 0:
              return e.call(t);
            case 1:
              return e.call(t, n[0]);
            case 2:
              return e.call(t, n[0], n[1]);
            case 3:
              return e.call(t, n[0], n[1], n[2]);
          }
          return e.apply(t, n);
        },
        sr = Math.max;
      var fr = function (e, t, n) {
        return (
          (t = sr(void 0 === t ? e.length - 1 : t, 0)),
          function () {
            for (
              var r = arguments, o = -1, a = sr(r.length - t, 0), l = Array(a);
              ++o < a;

            )
              l[o] = r[t + o];
            o = -1;
            for (var i = Array(t + 1); ++o < t; ) i[o] = r[o];
            return (i[t] = n(l)), cr(e, this, i);
          }
        );
      };
      var dr = function (e) {
          return function () {
            return e;
          };
        },
        pr = qt,
        vr = pr
          ? function (e, t) {
              return pr(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: dr(t),
                writable: !0,
              });
            }
          : ur,
        mr = Date.now;
      var gr = (function (e) {
          var t = 0,
            n = 0;
          return function () {
            var r = mr(),
              o = 16 - (r - n);
            if (((n = r), o > 0)) {
              if (++t >= 800) return arguments[0];
            } else t = 0;
            return e.apply(void 0, arguments);
          };
        })(vr),
        hr = hn,
        yr = Tt;
      var br = function (e) {
          return yr(e) && hr(e);
        },
        Ar = ur,
        wr = fr,
        Or = gr;
      var xr = function (e, t) {
          return Or(wr(e, t, Ar), e + "");
        },
        Er = de,
        Sr = zn,
        kr = Tt,
        Pr = Function.prototype,
        Cr = Object.prototype,
        jr = Pr.toString,
        _r = Cr.hasOwnProperty,
        Tr = jr.call(Object);
      var Nr = function (e) {
          if (!kr(e) || "[object Object]" != Er(e)) return !1;
          var t = Sr(e);
          if (null === t) return !0;
          var n = _r.call(t, "constructor") && t.constructor;
          return "function" == typeof n && n instanceof n && jr.call(n) == Tr;
        },
        Dr = Me,
        Lr = hn,
        Rr = vn,
        Mr = pe;
      var Ir = function (e, t, n) {
          if (!Mr(n)) return !1;
          var r = q(t);
          return (
            !!("number" == r
              ? Lr(n) && Rr(t, n.length)
              : "string" == r && t in n) && Dr(n[t], e)
          );
        },
        zr = Zt,
        Br = Me;
      var Fr = function (e, t, n) {
        ((void 0 !== n && !Br(e[t], n)) || (void 0 === n && !(t in e))) &&
          zr(e, t, n);
      };
      var Ur = (function (e) {
        return function (t, n, r) {
          for (var o = -1, a = Object(t), l = r(t), i = l.length; i--; ) {
            var u = l[e ? i : ++o];
            if (!1 === n(a[u], u, a)) break;
          }
          return t;
        };
      })();
      var Hr = function (e, t) {
          if (
            ("constructor" !== t || "function" != typeof e[t]) &&
            "__proto__" != t
          )
            return e[t];
        },
        Wr = Xn,
        Vr = ir;
      var Xr = Fr,
        Yr = _n.exports,
        Qr = Dn,
        Kr = Ln,
        Gr = Hn,
        qr = fn,
        Jr = dn,
        Zr = br,
        $r = Mt.exports,
        eo = he,
        to = pe,
        no = Nr,
        ro = Kt,
        oo = Hr,
        ao = function (e) {
          return Wr(e, Vr(e));
        };
      var lo = jn,
        io = Fr,
        uo = Ur,
        co = function (e, t, n, r, o, a, l) {
          var i = oo(e, n),
            u = oo(t, n),
            c = l.get(u);
          if (c) Xr(e, n, c);
          else {
            var s = a ? a(i, u, n + "", e, t, l) : void 0,
              f = void 0 === s;
            if (f) {
              var d = Jr(u),
                p = !d && $r(u),
                v = !d && !p && ro(u);
              (s = u),
                d || p || v
                  ? Jr(i)
                    ? (s = i)
                    : Zr(i)
                    ? (s = Kr(i))
                    : p
                    ? ((f = !1), (s = Yr(u, !0)))
                    : v
                    ? ((f = !1), (s = Qr(u, !0)))
                    : (s = [])
                  : no(u) || qr(u)
                  ? ((s = i),
                    qr(i) ? (s = ao(i)) : (to(i) && !eo(i)) || (s = Gr(u)))
                  : (f = !1);
            }
            f && (l.set(u, s), o(s, u, r, a, l), l.delete(u)), Xr(e, n, s);
          }
        },
        so = pe,
        fo = ir,
        po = Hr;
      var vo = function e(t, n, r, o, a) {
          t !== n &&
            uo(
              n,
              function (l, i) {
                if ((a || (a = new lo()), so(l))) co(t, n, i, r, e, o, a);
                else {
                  var u = o ? o(po(t, i), l, i + "", t, n, a) : void 0;
                  void 0 === u && (u = l), io(t, i, u);
                }
              },
              fo
            );
        },
        mo = xr,
        go = Ir;
      var ho = vo,
        yo = (function (e) {
          return mo(function (t, n) {
            var r = -1,
              o = n.length,
              a = o > 1 ? n[o - 1] : void 0,
              l = o > 2 ? n[2] : void 0;
            for (
              a = e.length > 3 && "function" == typeof a ? (o--, a) : void 0,
                l && go(n[0], n[1], l) && ((a = o < 3 ? void 0 : a), (o = 1)),
                t = Object(t);
              ++r < o;

            ) {
              var i = n[r];
              i && e(t, i, r, a);
            }
            return t;
          });
        })(function (e, t, n) {
          ho(e, t, n);
        });
      function bo(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var Ao = (function (e) {
          return (
            (e.ripple = "ripple"), (e.expand = "expand"), (e.fade = "fade"), e
          );
        })(Ao || {}),
        wo = {
          globalConfig: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? bo(Object(n), !0).forEach(function (t) {
                    W(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : bo(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          })(
            {
              animation: { include: ["ripple", "expand", "fade"], exclude: [] },
              classPrefix: "t",
            },
            yo(
              {
                pagination: {
                  itemsPerPage: "{size} 条/页",
                  jumpTo: "跳至",
                  page: "页",
                  total: "共 {total} 项数据",
                },
                cascader: {
                  empty: "暂无数据",
                  loadingText: "加载中",
                  placeholder: "请选择",
                },
                calendar: {
                  yearSelection: "{year} 年",
                  monthSelection: "{month} 月",
                  yearRadio: "年",
                  monthRadio: "月",
                  hideWeekend: "隐藏周末",
                  showWeekend: "显示周末",
                  today: "今天",
                  thisMonth: "本月",
                  week: "一,二,三,四,五,六,日",
                  cellMonth:
                    "1 月,2 月,3 月,4 月,5 月,6 月,7 月,8 月,9 月,10 月,11 月,12 月",
                },
                transfer: {
                  title: "{checked} / {total} 项",
                  empty: "暂无数据",
                  placeholder: "请输入关键词搜索",
                },
                timePicker: {
                  now: "此刻",
                  confirm: "确定",
                  anteMeridiem: "上午",
                  postMeridiem: "下午",
                  placeholder: "选择时间",
                },
                dialog: { confirm: "确认", cancel: "取消" },
                drawer: { confirm: "确认", cancel: "取消" },
                popconfirm: {
                  confirm: { content: "确定" },
                  cancel: { content: "取消" },
                },
                table: {
                  empty: "暂无数据",
                  loadingText: "正在加载中，请稍后",
                  loadingMoreText: "点击加载更多",
                  filterInputPlaceholder: "请输入内容（无默认值）",
                  sortAscendingOperationText: "点击升序",
                  sortCancelOperationText: "点击取消排序",
                  sortDescendingOperationText: "点击降序",
                  clearFilterResultButtonText: "清空筛选",
                  columnConfigButtonText: "列配置",
                  columnConfigTitleText: "表格列配置",
                  columnConfigDescriptionText: "请选择需要在表格中显示的数据列",
                  confirmText: "确认",
                  cancelText: "取消",
                  resetText: "重置",
                  selectAllText: "全选",
                  searchResultText: "搜索“{result}”，找到 {count} 条结果",
                },
                select: {
                  empty: "暂无数据",
                  loadingText: "加载中",
                  placeholder: "请选择",
                },
                tree: { empty: "暂无数据" },
                treeSelect: {
                  empty: "暂无数据",
                  loadingText: "加载中",
                  placeholder: "请选择",
                },
                datePicker: {
                  placeholder: {
                    date: "请选择日期",
                    month: "请选择月份",
                    year: "请选择年份",
                  },
                  weekdays: ["一", "二", "三", "四", "五", "六", "日"],
                  months: [
                    "1 月",
                    "2 月",
                    "3 月",
                    "4 月",
                    "5 月",
                    "6 月",
                    "7 月",
                    "8 月",
                    "9 月",
                    "10 月",
                    "11 月",
                    "12 月",
                  ],
                  quarters: ["一季度", "二季度", "三季度", "四季度"],
                  rangeSeparator: " - ",
                  direction: "ltr",
                  format: "YYYY-MM-DD",
                  dayAriaLabel: "日",
                  weekAbbreviation: "周",
                  yearAriaLabel: "年",
                  monthAriaLabel: "月",
                  confirm: "确定",
                  selectTime: "选择时间",
                  selectDate: "选择日期",
                  nextYear: "下一年",
                  preYear: "上一年",
                  nextMonth: "下个月",
                  preMonth: "上个月",
                  preDecade: "上个十年",
                  nextDecade: "下个十年",
                  now: "当前",
                },
                upload: {
                  sizeLimitMessage: "文件大小不能超过 {sizeLimit}",
                  cancelUploadText: "取消上传",
                  triggerUploadText: {
                    fileInput: "选择文件",
                    image: "点击上传图片",
                    normal: "点击上传",
                    reupload: "重新选择",
                    continueUpload: "继续选择",
                    delete: "删除",
                    uploading: "上传中",
                  },
                  dragger: {
                    dragDropText: "释放鼠标",
                    draggingText: "拖拽到此区域",
                    clickAndDragText: "点击上方“选择文件”或将文件拖拽到此区域",
                  },
                  file: {
                    fileNameText: "文件名",
                    fileSizeText: "文件大小",
                    fileStatusText: "状态",
                    fileOperationText: "操作",
                    fileOperationDateText: "上传日期",
                  },
                  progress: {
                    uploadingText: "上传中",
                    waitingText: "待上传",
                    failText: "上传失败",
                    successText: "上传成功",
                  },
                },
                form: {
                  errorMessage: {
                    date: "请输入正确的${name}",
                    url: "请输入正确的${name}",
                    required: "${name}必填",
                    max: "${name}字符长度不能超过 ${validate} 个字符，一个中文等于两个字符",
                    min: "${name}字符长度不能少于 ${validate} 个字符，一个中文等于两个字符",
                    len: "${name}字符长度必须是 ${validate}",
                    enum: "${name}只能是${validate}等",
                    idcard: "请输入正确的${name}",
                    telnumber: "请输入正确的${name}",
                    pattern: "请输入正确的${name}",
                    validator: "${name}不符合要求",
                    boolean: "${name}数据类型必须是布尔类型",
                    number: "${name}必须是数字",
                  },
                },
                input: { placeholder: "请输入" },
                list: {
                  loadingText: "正在加载中，请稍等",
                  loadingMoreText: "点击加载更多",
                },
                alert: { expandText: "展开更多", collapseText: "收起" },
                anchor: {
                  copySuccessText: "链接复制成功",
                  copyText: "复制链接",
                },
                colorPicker: {
                  swatchColorTitle: "系统预设颜色",
                  recentColorTitle: "最近使用颜色",
                  clearConfirmText: "确定清空最近使用的颜色吗？",
                },
              },
              {
                classPrefix: "t",
                animation: {
                  include: ["ripple", "expand", "fade"],
                  exclude: [],
                },
                calendar: {
                  firstDayOfWeek: 1,
                  fillWithZero: !0,
                  controllerConfig: void 0,
                },
                icon: {},
                input: { autocomplete: "" },
                dialog: {
                  closeOnEscKeydown: !0,
                  closeOnOverlayClick: !0,
                  confirmBtnTheme: {
                    default: "primary",
                    info: "primary",
                    warning: "primary",
                    danger: "primary",
                    success: "primary",
                  },
                },
                popconfirm: {
                  confirmBtnTheme: {
                    default: "primary",
                    warning: "primary",
                    danger: "primary",
                  },
                },
                table: {
                  expandIcon: void 0,
                  sortIcon: void 0,
                  filterIcon: void 0,
                  treeExpandAndFoldIcon: void 0,
                  hideSortTips: !1,
                },
                select: { clearIcon: void 0, filterable: !1 },
                drawer: {
                  closeOnEscKeydown: !0,
                  closeOnOverlayClick: !0,
                  size: "small",
                },
                tree: { folderIcon: void 0 },
                datePicker: { firstDayOfWeek: 1 },
                steps: { errorIcon: void 0 },
                tag: { closeIcon: void 0 },
                form: { requiredMark: void 0 },
              }
            )
          ),
        },
        Oo = (0, e.createContext)(wo),
        xo = function () {
          return (0, e.useContext)(Oo).globalConfig;
        };
      var Eo = (0, e.forwardRef)(function (n, r) {
        var o = n.attach,
          a = n.children,
          l = n.triggerNode,
          i = xo().classPrefix,
          u = (0, e.useMemo)(
            function () {
              if (!Q) return null;
              var e = document.createElement("div");
              return (e.className = "".concat(i, "-portal-wrapper")), e;
            },
            [i]
          );
        return (
          (0, e.useEffect)(
            function () {
              var e,
                t = (function (e, t) {
                  return Q
                    ? ("string" == typeof e && (n = document.querySelector(e)),
                      "function" == typeof e && (n = e(t)),
                      "object" === q(e) &&
                        e instanceof window.HTMLElement &&
                        (n = e),
                      n && 1 === n.nodeType ? n : document.body)
                    : null;
                  var n;
                })(o, l);
              return (
                null == t ||
                  null === (e = t.appendChild) ||
                  void 0 === e ||
                  e.call(t, u),
                function () {
                  var e;
                  null == t ||
                    null === (e = t.removeChild) ||
                    void 0 === e ||
                    e.call(t, u);
                }
              );
            },
            [u, o, l]
          ),
          (0, e.useImperativeHandle)(r, function () {
            return u;
          }),
          Q ? (0, t.createPortal)(a, u) : null
        );
      });
      function So(e, t) {
        Object.keys(t).forEach(function (n) {
          e.style[n] = t[n];
        });
      }
      function ko(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return V(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          X(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      Eo.displayName = "Portal";
      function Po(e, t) {
        var n = "number" == typeof t;
        if (!e || 0 === e.length) return n ? { length: 0, characters: e } : 0;
        for (var r = 0, o = 0; o < e.length; o++) {
          var a = 0;
          if (
            ((a = e.charCodeAt(o) > 127 || 94 === e.charCodeAt(o) ? 2 : 1),
            n && r + a > t)
          )
            return { length: r, characters: e.slice(0, o) };
          r += a;
        }
        return n ? { length: r, characters: e } : r;
      }
      function Co(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function jo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Co(Object(n), !0).forEach(function (t) {
                W(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Co(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function _o(e) {
        var t,
          n,
          r,
          o,
          a = {};
        if (e) {
          var l =
              null === (t = window) ||
              void 0 === t ||
              null === (n = t.getComputedStyle) ||
              void 0 === n
                ? void 0
                : n.call(t, e),
            i = l.color,
            u = l.fontSize,
            c =
              null === (r = window) ||
              void 0 === r ||
              null === (o = r.navigator) ||
              void 0 === o
                ? void 0
                : o.userAgent,
            s = /Safari/.test(c) && !/Chrome/.test(c),
            f = /(?=.*iPhone)[?=.*MicroMessenger]/.test(c) && !/Chrome/.test(c),
            d = /Mobile/.test(c);
          if (
            ((!s && !f) ||
              d ||
              (a = {
                transformOrigin: "-1px -1px",
                transform: "scale(".concat(parseInt(u, 10) / 14, ")"),
              }),
            i &&
              (function () {
                var e = navigator.userAgent,
                  t = e.indexOf("compatible") > -1 && e.indexOf("MSIE") > -1,
                  n = e.indexOf("Trident") > -1 && e.indexOf("rv:11.0") > -1;
                if (t) {
                  var r = new RegExp("MSIE (\\d+\\.\\d+);"),
                    o = e.match(r);
                  if (!o) return -1;
                  var a = parseFloat(o[1]);
                  return a < 7 ? 6 : a;
                }
                return n ? 11 : Number.MAX_SAFE_INTEGER;
              })() > 11)
          ) {
            var p = i.match(/[\d.]+/g),
              v = p
                ? "rgba("
                    .concat(p[0], ", ")
                    .concat(p[1], ", ")
                    .concat(p[2], ", 0)")
                : "";
            So(
              e,
              jo(
                jo({}, a),
                {},
                {
                  background: "conic-gradient(from 90deg at 50% 50%,"
                    .concat(v, " 0deg, ")
                    .concat(i, " 360deg)"),
                }
              )
            );
          } else So(e, jo(jo({}, a), {}, { background: "" }));
        }
      }
      var To = function () {
        var t = xo().classPrefix,
          n = (0, e.useRef)(),
          r = "".concat(t, "-loading__gradient");
        return (
          (0, e.useEffect)(function () {
            _o(null == n ? void 0 : n.current);
          }, []),
          e.createElement(
            "svg",
            {
              className: H()(r, "".concat(t, "-icon-loading")),
              viewBox: "0 0 14 14",
              version: "1.1",
              width: "1em",
              height: "1em",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e.createElement(
              "foreignObject",
              { x: "1", y: "1", width: "12", height: "12" },
              e.createElement("div", {
                className: "".concat(r, "-conic"),
                ref: n,
              })
            )
          )
        );
      };
      function No(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Do(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? No(Object(n), !0).forEach(function (t) {
                W(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : No(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Lo = function (t) {
        var n = t.attach,
          r = t.indicator,
          o = t.text,
          a = t.loading,
          l = t.size,
          i = t.delay,
          u = t.fullscreen,
          c = t.preventScrollThrough,
          s = t.showOverlay,
          f = t.content,
          d = t.children,
          p = t.inheritColor,
          v = t.zIndex,
          m = t.className,
          g = t.style,
          h = Y((0, e.useState)(!i && a), 2),
          y = h[0],
          b = h[1],
          A = xo().classPrefix,
          w = "".concat(A, "-loading"),
          O = "".concat(A, "-loading--center"),
          x = "".concat(A, "-loading--inherit-color"),
          E = "".concat(A, "-loading--full"),
          S = "".concat(A, "-loading__fullscreen"),
          k = "".concat(A, "-loading--lock"),
          P = "".concat(A, "-loading__overlay"),
          C = "".concat(A, "-loading__parent"),
          j = "".concat(A, "-loading__text");
        (0, e.useEffect)(
          function () {
            var e;
            return (
              i && a
                ? (e = setTimeout(function () {
                    b(a);
                  }, i))
                : b(a),
              function () {
                clearTimeout(e);
              }
            );
          },
          [i, a]
        );
        var _ = (0, e.useMemo)(
            function () {
              var e = {};
              return (
                void 0 !== v && (e.zIndex = v),
                ["small", "medium", "large"].includes(l) || (e.fontSize = l),
                g ? Do(Do({}, e), g) : e
              );
            },
            [l, v, g]
          ),
          T = {
            large: "".concat(A, "-size-l"),
            small: "".concat(A, "-size-s"),
            medium: "".concat(A, "-size-m"),
          },
          N = H()(O, T[l], W({}, x, p), m);
        (0, e.useEffect)(
          function () {
            return (
              c &&
                u &&
                Q &&
                a &&
                (function (e, t) {
                  if (e) {
                    for (
                      var n = e.className,
                        r = (t || "").split(" "),
                        o = 0,
                        a = r.length;
                      o < a;
                      o++
                    ) {
                      var l = r[o];
                      l &&
                        (e.classList
                          ? e.classList.add(l)
                          : K(e, l) || (n += " ".concat(l)));
                    }
                    e.classList || (e.className = n);
                  }
                })(document.body, k),
              function () {
                !(function (e, t) {
                  if (e && t) {
                    for (
                      var n = t.split(" "),
                        r = " ".concat(e.className, " "),
                        o = 0,
                        a = n.length;
                      o < a;
                      o++
                    ) {
                      var l = n[o];
                      l &&
                        (e.classList
                          ? e.classList.remove(l)
                          : K(e, l) &&
                            (r = r.replace(" ".concat(l, " "), " ")));
                    }
                    e.classList ||
                      (e.className = (r || "").replace(
                        /^[\s\uFEFF]+|[\s\uFEFF]+$/g,
                        ""
                      ));
                  }
                })(document.body, k);
              }
            );
          },
          [a, c, u, k]
        );
        var D = function () {
          var t = e.createElement(To, null);
          return (
            r && "boolean" != typeof r && (t = r),
            e.createElement(
              e.Fragment,
              null,
              r ? t : null,
              o ? e.createElement("div", { className: j }, o) : null
            )
          );
        };
        return u
          ? a
            ? e.createElement(
                "div",
                { className: H()(w, S, O, P), style: _ },
                e.createElement("div", { className: N }, D())
              )
            : null
          : f || d
          ? e.createElement(
              "div",
              { className: C },
              f || d,
              y
                ? e.createElement(
                    "div",
                    { className: H()(w, N, E, W({}, P, s)), style: _ },
                    D()
                  )
                : null
            )
          : n
          ? e.createElement(
              Eo,
              { attach: n },
              a
                ? e.createElement(
                    "div",
                    { className: H()(w, N, E, W({}, P, s)), style: _ },
                    D()
                  )
                : null
            )
          : a
          ? e.createElement("div", { className: H()(w, N), style: _ }, D())
          : null;
      };
      (Lo.displayName = "Loading"),
        (Lo.defaultProps = {
          delay: 0,
          fullscreen: !1,
          indicator: !0,
          inheritColor: !1,
          loading: !0,
          preventScrollThrough: !0,
          showOverlay: !0,
          size: "medium",
        });
      var Ro = Lo;
      function Mo(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var Io = de,
        zo = Tt;
      var Bo = function (e) {
        return "symbol" == q(e) || (zo(e) && "[object Symbol]" == Io(e));
      };
      var Fo = function (e, t) {
          for (
            var n = -1, r = null == e ? 0 : e.length, o = Array(r);
            ++n < r;

          )
            o[n] = t(e[n], n, e);
          return o;
        },
        Uo = dn,
        Ho = Bo,
        Wo = te ? te.prototype : void 0,
        Vo = Wo ? Wo.toString : void 0;
      var Xo = function e(t) {
          if ("string" == typeof t) return t;
          if (Uo(t)) return Fo(t, e) + "";
          if (Ho(t)) return Vo ? Vo.call(t) : "";
          var n = t + "";
          return "0" == n && 1 / t == -Infinity ? "-0" : n;
        },
        Yo = Xo;
      var Qo = function (e) {
          return null == e ? "" : Yo(e);
        },
        Ko = dn,
        Go = Bo,
        qo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Jo = /^\w*$/;
      var Zo = function (e, t) {
          if (Ko(e)) return !1;
          var n = q(e);
          return (
            !(
              "number" != n &&
              "symbol" != n &&
              "boolean" != n &&
              null != e &&
              !Go(e)
            ) ||
            Jo.test(e) ||
            !qo.test(e) ||
            (null != t && e in Object(t))
          );
        },
        $o = jt;
      function ea(e, t) {
        if ("function" != typeof e || (null != t && "function" != typeof t))
          throw new TypeError("Expected a function");
        var n = function n() {
          var r = arguments,
            o = t ? t.apply(this, r) : r[0],
            a = n.cache;
          if (a.has(o)) return a.get(o);
          var l = e.apply(this, r);
          return (n.cache = a.set(o, l) || a), l;
        };
        return (n.cache = new (ea.Cache || $o)()), n;
      }
      ea.Cache = $o;
      var ta = ea;
      var na =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        ra = /\\(\\)?/g,
        oa = (function (e) {
          var t = ta(e, function (e) {
              return 500 === n.size && n.clear(), e;
            }),
            n = t.cache;
          return t;
        })(function (e) {
          var t = [];
          return (
            46 === e.charCodeAt(0) && t.push(""),
            e.replace(na, function (e, n, r, o) {
              t.push(r ? o.replace(ra, "$1") : n || e);
            }),
            t
          );
        }),
        aa = dn,
        la = Zo,
        ia = oa,
        ua = Qo;
      var ca = function (e, t) {
          return aa(e) ? e : la(e, t) ? [e] : ia(ua(e));
        },
        sa = Bo;
      var fa = function (e) {
          if ("string" == typeof e || sa(e)) return e;
          var t = e + "";
          return "0" == t && 1 / e == -Infinity ? "-0" : t;
        },
        da = ca,
        pa = fa;
      var va = function (e, t) {
          for (var n = 0, r = (t = da(t, e)).length; null != e && n < r; )
            e = e[pa(t[n++])];
          return n && n == r ? e : void 0;
        },
        ma = va;
      var ga = function (e, t, n) {
        var r = null == e ? void 0 : ma(e, t);
        return void 0 === r ? n : r;
      };
      var ha = function (e, t, n) {
          var r = -1,
            o = e.length;
          t < 0 && (t = -t > o ? 0 : o + t),
            (n = n > o ? o : n) < 0 && (n += o),
            (o = t > n ? 0 : (n - t) >>> 0),
            (t >>>= 0);
          for (var a = Array(o); ++r < o; ) a[r] = e[r + t];
          return a;
        },
        ya = ha;
      var ba = function (e, t, n) {
          var r = e.length;
          return (n = void 0 === n ? r : n), !t && n >= r ? e : ya(e, t, n);
        },
        Aa = RegExp(
          "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"
        );
      var wa = function (e) {
        return Aa.test(e);
      };
      var Oa = function (e) {
          return e.split("");
        },
        xa = "[\\ud800-\\udfff]",
        Ea = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        Sa = "\\ud83c[\\udffb-\\udfff]",
        ka = "[^\\ud800-\\udfff]",
        Pa = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        Ca = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        ja = "(?:" + Ea + "|" + Sa + ")" + "?",
        _a = "[\\ufe0e\\ufe0f]?",
        Ta =
          _a +
          ja +
          ("(?:\\u200d(?:" + [ka, Pa, Ca].join("|") + ")" + _a + ja + ")*"),
        Na = "(?:" + [ka + Ea + "?", Ea, Pa, Ca, xa].join("|") + ")",
        Da = RegExp(Sa + "(?=" + Sa + ")|" + Na + Ta, "g");
      var La = Oa,
        Ra = wa,
        Ma = function (e) {
          return e.match(Da) || [];
        };
      var Ia = ba,
        za = wa,
        Ba = function (e) {
          return Ra(e) ? Ma(e) : La(e);
        },
        Fa = Qo;
      var Ua = (function (e) {
          return function (t) {
            t = Fa(t);
            var n = za(t) ? Ba(t) : void 0,
              r = n ? n[0] : t.charAt(0),
              o = n ? Ia(n, 1).join("") : t.slice(1);
            return r[e]() + o;
          };
        })("toUpperCase"),
        Ha = function () {},
        Wa = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = arguments.length > 1 ? arguments[1] : void 0,
            r = arguments.length > 2 ? arguments[2] : void 0,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            a = Reflect.has(t, n),
            l = t[n],
            i = o["default".concat(Ua(n))] || t["default".concat(Ua(n))],
            u = (0, e.useState)(i),
            c = Y(u, 2),
            s = c[0],
            f = c[1];
          return a
            ? [l, r || Ha]
            : [
                s,
                function (e) {
                  f(e);
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      o = 1;
                    o < t;
                    o++
                  )
                    n[o - 1] = arguments[o];
                  null == r || r.apply(void 0, [e].concat(n));
                },
              ];
        };
      function Va(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Xa(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Va(Object(n), !0).forEach(function (t) {
                W(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Va(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Ya(t, n) {
        var r = e.useContext(Oo).globalConfig;
        return [
          e.useMemo(
            function () {
              var e = n || {},
                o = r[t],
                a = t && r ? o : {};
              return Xa(Xa({}, "function" == typeof e ? e() : e), a || {});
            },
            [t, n, r]
          ),
          function (e, t) {
            var n = /\{\s*([\w-]+)\s*\}/g;
            return "string" == typeof e
              ? t && n.test(e)
                ? e.replace(n, function (e, n) {
                    return t ? String(t[n]) : "";
                  })
                : e
              : Array.isArray(e)
              ? e.map(function (e, r) {
                  return e.replace(n, function (e, n) {
                    return t ? String(t[r][n]) : "";
                  });
                })
              : "function" == typeof e
              ? e(t)
              : "";
          },
        ];
      }
      var Qa = n(6095),
        Ka = n.n(Qa);
      function Ga(t, n) {
        return Ka()((0, e.forwardRef)(t), n);
      }
      function qa(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var Ja = function (t) {
        var n = t.children,
          r = t.label,
          o = t.selectedValue,
          a = t.onSelect,
          l = t.divider,
          i = xo().classPrefix,
          u = e.Children.map(n, function (t) {
            if ((0, e.isValidElement)(t)) {
              var n = { selectedValue: o, onSelect: a };
              return (0, e.cloneElement)(
                t,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? qa(Object(n), !0).forEach(function (t) {
                          W(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : qa(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t)
                          );
                        });
                  }
                  return e;
                })({}, n)
              );
            }
            return t;
          });
        return e.createElement(
          "li",
          {
            className: H()(
              "".concat(i, "-select-option-group"),
              W({}, "".concat(i, "-select-option-group__divider"), l)
            ),
          },
          e.createElement(
            "ul",
            { className: "".concat(i, "-select-option-group__header") },
            r
          ),
          e.createElement("ul", { className: "".concat(i, "-select__list") }, u)
        );
      };
      Ja.defaultProps = { divider: !0 };
      var Za = de,
        $a = Tt;
      var el = function (e) {
          return "number" == typeof e || ($a(e) && "[object Number]" == Za(e));
        },
        tl = de,
        nl = dn,
        rl = Tt;
      var ol = function (e) {
        return (
          "string" == typeof e ||
          (!nl(e) && rl(e) && "[object String]" == tl(e))
        );
      };
      function al() {
        var t = Y((0, e.useState)(), 2),
          n = t[0],
          r = t[1];
        return (
          (0, e.useCallback)(function (e) {
            e && r(e);
          }, []),
          [n, r]
        );
      }
      function ll() {
        var t = xo().animation,
          n = Ao.expand,
          r = Ao.ripple,
          o = Ao.fade,
          a = (0, e.useCallback)(
            function (e) {
              var n, r;
              return (
                t &&
                !(null !== (n = t.exclude) && void 0 !== n && n.includes(e)) &&
                (null === (r = t.include) || void 0 === r
                  ? void 0
                  : r.includes(e))
              );
            },
            [t]
          );
        return { keepExpand: a(n), keepRipple: a(r), keepFade: a(o) };
      }
      function il(e, t) {
        Object.keys(t).forEach(function (n) {
          e.style[n] = t[n];
        });
      }
      function ul(t, n) {
        var r = xo().classPrefix,
          o = ll().keepRipple,
          a = (0, e.useMemo)(
            function () {
              if (!Q) return null;
              var e = document.createElement("div");
              return (e.className = "".concat(r, "-ripple")), e;
            },
            [r]
          ),
          l = (0, e.useCallback)(
            function (e) {
              var l = (function (e, t) {
                var n;
                return (
                  t ||
                  (null != e &&
                  null !== (n = e.dataset) &&
                  void 0 !== n &&
                  n.ripple
                    ? e.dataset.ripple
                    : getComputedStyle(e).getPropertyValue("--ripple-color") ||
                      "rgba(0, 0, 0, 0.35)")
                );
              })(t, n);
              if (
                0 === e.button &&
                t &&
                o &&
                !(
                  t.classList.contains("".concat(r, "-is-active")) ||
                  t.classList.contains("".concat(r, "-is-disabled")) ||
                  t.classList.contains("".concat(r, "-is-checked")) ||
                  t.classList.contains("".concat(r, "-is-loading"))
                )
              ) {
                var i = getComputedStyle(t),
                  u = parseInt(i.borderWidth, 10),
                  c = u > 0 ? u : 0,
                  s = t.offsetWidth,
                  f = t.offsetHeight;
                null === a.parentNode &&
                  (il(a, {
                    position: "absolute",
                    left: "".concat(0 - c, "px"),
                    top: "".concat(0 - c, "px"),
                    width: "".concat(s, "px"),
                    height: "".concat(f, "px"),
                    borderRadius: i.borderRadius,
                    pointerEvents: "none",
                    overflow: "hidden",
                  }),
                  t.appendChild(a));
                var d = document.createElement("div");
                (d.className = "".concat(r, "-ripple__inner")),
                  il(d, {
                    marginTop: "0",
                    marginLeft: "0",
                    right: "".concat(s, "px"),
                    width: "".concat(s + 20, "px"),
                    height: "100%",
                    transition: "transform "
                      .concat(
                        200,
                        "ms cubic-bezier(.38, 0, .24, 1), background "
                      )
                      .concat(400, "ms linear"),
                    transform: "skewX(-8deg)",
                    pointerEvents: "none",
                    position: "absolute",
                    zIndex: 0,
                    backgroundColor: l,
                    opacity: "0.9",
                  });
                for (
                  var p = new WeakMap(), v = t.children.length, m = 0;
                  m < v;
                  ++m
                ) {
                  var g = t.children[m];
                  "" === g.style.zIndex &&
                    g !== a &&
                    ((g.style.zIndex = "1"), p.set(g, !0));
                }
                var h = t.style.position
                  ? t.style.position
                  : getComputedStyle(t).position;
                ("" !== h && "static" !== h) || (t.style.position = "relative"),
                  a.insertBefore(d, a.firstChild),
                  setTimeout(function () {
                    d.style.transform = "translateX(".concat(s, "px)");
                  }, 0);
                var y = function e() {
                  (d.style.backgroundColor = "rgba(0, 0, 0, 0)"),
                    t &&
                      (t.removeEventListener("pointerup", e, !1),
                      t.removeEventListener("pointerleave", e, !1),
                      setTimeout(function () {
                        d.remove(), 0 === a.children.length && a.remove();
                      }, 500));
                };
                t.addEventListener("pointerup", y, !1),
                  t.addEventListener("pointerleave", y, !1);
              }
            },
            [r, t, n, a, o]
          );
        (0, e.useEffect)(
          function () {
            if (t)
              return (
                t.addEventListener("pointerdown", l, !1),
                function () {
                  t.removeEventListener("pointerdown", l, !1);
                }
              );
          },
          [l, n, t]
        );
      }
      var cl = function (t) {
        var n,
          r,
          o = t.disabled,
          a = t.label,
          l = t.selectedValue,
          i = t.multiple,
          u = t.size,
          c = t.max,
          s = t.keys,
          f = t.value,
          d = t.onSelect,
          p = t.children,
          v = t.content,
          m = t.restData,
          g = t.style,
          h = t.className,
          y = a || f,
          b = o || (i && Array.isArray(l) && c && l.length >= c),
          A = xo().classPrefix,
          w = Y(al(), 2),
          O = w[0],
          x = w[1];
        ul(O),
          i ||
            (r =
              el(l) || ol(l)
                ? f === l
                : f === ga(l, (null == s ? void 0 : s.value) || "value")),
          i &&
            Array.isArray(l) &&
            (r = l.some(function (e) {
              return el(e) || ol(e)
                ? e === f
                : ga(e, (null == s ? void 0 : s.value) || "value") === f;
            }));
        var E, S;
        return e.createElement(
          "li",
          {
            className: H()(
              h,
              "".concat(A, "-").concat("select", "-option"),
              ((n = {}),
              W(n, "".concat(A, "-is-disabled"), b),
              W(n, "".concat(A, "-is-selected"), r),
              W(n, "".concat(A, "-size-s"), "small" === u),
              W(n, "".concat(A, "-size-l"), "large" === u),
              n)
            ),
            key: f,
            onClick: function (e) {
              b ||
                d(f, { label: String(y), selected: r, event: e, restData: m });
            },
            ref: x,
            style: g,
          },
          ((E = p),
          i
            ? e.createElement(
                "label",
                {
                  className: H()(
                    "".concat(A, "-checkbox"),
                    ((S = {}),
                    W(S, "".concat(A, "-is-disabled"), b),
                    W(S, "".concat(A, "-is-checked"), r),
                    S)
                  ),
                },
                e.createElement("input", {
                  type: "checkbox",
                  className: H()("".concat(A, "-checkbox__former")),
                  value: "",
                  disabled: b && !r,
                  onClick: function (e) {
                    return e.stopPropagation();
                  },
                }),
                e.createElement("span", {
                  className: H()("".concat(A, "-checkbox__input")),
                }),
                e.createElement(
                  "span",
                  { className: H()("".concat(A, "-checkbox__label")) },
                  E || v || y
                )
              )
            : e.createElement("span", { title: y }, E || v || y))
        );
      };
      function sl(e, t, n) {
        var r,
          o = e.props,
          a = o.value,
          l = o.label,
          i = o.children;
        t[a] =
          (W((r = {}), (null == n ? void 0 : n.value) || "value", a),
          W(r, (null == n ? void 0 : n.label) || "label", l || i || a),
          r);
      }
      var fl = function (e, t, n, r, o, a) {
          if (((e = Array.isArray(e) ? e : []), Array.isArray(e))) {
            var l = ko(e),
              i = "object" === r;
            if (n)
              l = l.filter(function (e) {
                return i
                  ? Nr(t)
                    ? ga(e, (null == o ? void 0 : o.value) || "value") !==
                      ga(t, (null == o ? void 0 : o.value) || "value")
                    : ga(e, (null == o ? void 0 : o.value) || "value") !== t
                  : e !== t;
              });
            else {
              var u = i ? a : t;
              l.push(u);
            }
            return l;
          }
        },
        dl = function (e, t, n, r, o) {
          var a,
            l,
            i = "object" === n,
            u = [];
          t
            ? (u = i
                ? e
                : null == o || null === (a = o.filter) || void 0 === a
                ? void 0
                : a.call(o, function (t) {
                    var n;
                    return null === (n = e.includes) || void 0 === n
                      ? void 0
                      : n.call(e, t[(null == r ? void 0 : r.value) || "value"]);
                  }))
            : (u = i
                ? [e]
                : (null == o || null === (l = o.filter) || void 0 === l
                    ? void 0
                    : l.call(o, function (t) {
                        return (
                          e === t[(null == r ? void 0 : r.value) || "value"]
                        );
                      })) || []);
          return u;
        };
      function pl(t) {
        var n = xo().classPrefix;
        return e.createElement(
          "svg",
          {
            style: t.style,
            className: H()(
              "".concat(n, "-fake-arrow"),
              W(
                {},
                "".concat(n, "-fake-arrow--active"),
                (null == t ? void 0 : t.isActive) && !(null != t && t.disabled)
              ),
              null == t ? void 0 : t.overlayClassName
            ),
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e.createElement("path", {
            d: "M3.75 5.7998L7.99274 10.0425L12.2361 5.79921",
            stroke: "black",
            strokeOpacity: "0.9",
            strokeWidth: "1.3",
          })
        );
      }
      function vl() {
        return (
          (vl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          vl.apply(this, arguments)
        );
      }
      function ml(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }
      function gl(e, t) {
        return (
          (gl = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          gl(e, t)
        );
      }
      function hl(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          gl(e, t);
      }
      function yl(e, t) {
        return e
          .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      const bl = !1,
        Al = e.createContext(null);
      var wl = function (e) {
          return e.scrollTop;
        },
        Ol = "unmounted",
        xl = "exited",
        El = "entering",
        Sl = "entered",
        kl = "exiting",
        Pl = (function (n) {
          function r(e, t) {
            var r;
            r = n.call(this, e, t) || this;
            var o,
              a = t && !t.isMounting ? e.enter : e.appear;
            return (
              (r.appearStatus = null),
              e.in
                ? a
                  ? ((o = xl), (r.appearStatus = El))
                  : (o = Sl)
                : (o = e.unmountOnExit || e.mountOnEnter ? Ol : xl),
              (r.state = { status: o }),
              (r.nextCallback = null),
              r
            );
          }
          hl(r, n),
            (r.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === Ol ? { status: xl } : null;
            });
          var o = r.prototype;
          return (
            (o.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (o.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? n !== El && n !== Sl && (t = El)
                  : (n !== El && n !== Sl) || (t = kl);
              }
              this.updateStatus(!1, t);
            }),
            (o.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (o.getTimeouts = function () {
              var e,
                t,
                n,
                r = this.props.timeout;
              return (
                (e = t = n = r),
                null != r &&
                  "number" != typeof r &&
                  ((e = r.exit),
                  (t = r.enter),
                  (n = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (o.updateStatus = function (e, n) {
              if ((void 0 === e && (e = !1), null !== n))
                if ((this.cancelNextCallback(), n === El)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var r = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : t.findDOMNode(this);
                    r && wl(r);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit &&
                  this.state.status === xl &&
                  this.setState({ status: Ol });
            }),
            (o.performEnter = function (e) {
              var n = this,
                r = this.props.enter,
                o = this.context ? this.context.isMounting : e,
                a = this.props.nodeRef ? [o] : [t.findDOMNode(this), o],
                l = a[0],
                i = a[1],
                u = this.getTimeouts(),
                c = o ? u.appear : u.enter;
              (!e && !r) || bl
                ? this.safeSetState({ status: Sl }, function () {
                    n.props.onEntered(l);
                  })
                : (this.props.onEnter(l, i),
                  this.safeSetState({ status: El }, function () {
                    n.props.onEntering(l, i),
                      n.onTransitionEnd(c, function () {
                        n.safeSetState({ status: Sl }, function () {
                          n.props.onEntered(l, i);
                        });
                      });
                  }));
            }),
            (o.performExit = function () {
              var e = this,
                n = this.props.exit,
                r = this.getTimeouts(),
                o = this.props.nodeRef ? void 0 : t.findDOMNode(this);
              n && !bl
                ? (this.props.onExit(o),
                  this.safeSetState({ status: kl }, function () {
                    e.props.onExiting(o),
                      e.onTransitionEnd(r.exit, function () {
                        e.safeSetState({ status: xl }, function () {
                          e.props.onExited(o);
                        });
                      });
                  }))
                : this.safeSetState({ status: xl }, function () {
                    e.props.onExited(o);
                  });
            }),
            (o.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (o.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (o.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (o.onTransitionEnd = function (e, n) {
              this.setNextCallback(n);
              var r = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : t.findDOMNode(this),
                o = null == e && !this.props.addEndListener;
              if (r && !o) {
                if (this.props.addEndListener) {
                  var a = this.props.nodeRef
                      ? [this.nextCallback]
                      : [r, this.nextCallback],
                    l = a[0],
                    i = a[1];
                  this.props.addEndListener(l, i);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (o.render = function () {
              var t = this.state.status;
              if (t === Ol) return null;
              var n = this.props,
                r = n.children,
                o =
                  (n.in,
                  n.mountOnEnter,
                  n.unmountOnExit,
                  n.appear,
                  n.enter,
                  n.exit,
                  n.timeout,
                  n.addEndListener,
                  n.onEnter,
                  n.onEntering,
                  n.onEntered,
                  n.onExit,
                  n.onExiting,
                  n.onExited,
                  n.nodeRef,
                  ml(n, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return e.createElement(
                Al.Provider,
                { value: null },
                "function" == typeof r
                  ? r(t, o)
                  : e.cloneElement(e.Children.only(r), o)
              );
            }),
            r
          );
        })(e.Component);
      function Cl() {}
      (Pl.contextType = Al),
        (Pl.propTypes = {}),
        (Pl.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: Cl,
          onEntering: Cl,
          onEntered: Cl,
          onExit: Cl,
          onExiting: Cl,
          onExited: Cl,
        }),
        (Pl.UNMOUNTED = Ol),
        (Pl.EXITED = xl),
        (Pl.ENTERING = El),
        (Pl.ENTERED = Sl),
        (Pl.EXITING = kl);
      const jl = Pl;
      var _l = function (e, t) {
          return (
            e &&
            t &&
            t.split(" ").forEach(function (t) {
              return (
                (r = t),
                void ((n = e).classList
                  ? n.classList.remove(r)
                  : "string" == typeof n.className
                  ? (n.className = yl(n.className, r))
                  : n.setAttribute(
                      "class",
                      yl((n.className && n.className.baseVal) || "", r)
                    ))
              );
              var n, r;
            })
          );
        },
        Tl = (function (t) {
          function n() {
            for (
              var e, n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(r)) || this).appliedClasses =
                { appear: {}, enter: {}, exit: {} }),
              (e.onEnter = function (t, n) {
                var r = e.resolveArguments(t, n),
                  o = r[0],
                  a = r[1];
                e.removeClasses(o, "exit"),
                  e.addClass(o, a ? "appear" : "enter", "base"),
                  e.props.onEnter && e.props.onEnter(t, n);
              }),
              (e.onEntering = function (t, n) {
                var r = e.resolveArguments(t, n),
                  o = r[0],
                  a = r[1] ? "appear" : "enter";
                e.addClass(o, a, "active"),
                  e.props.onEntering && e.props.onEntering(t, n);
              }),
              (e.onEntered = function (t, n) {
                var r = e.resolveArguments(t, n),
                  o = r[0],
                  a = r[1] ? "appear" : "enter";
                e.removeClasses(o, a),
                  e.addClass(o, a, "done"),
                  e.props.onEntered && e.props.onEntered(t, n);
              }),
              (e.onExit = function (t) {
                var n = e.resolveArguments(t)[0];
                e.removeClasses(n, "appear"),
                  e.removeClasses(n, "enter"),
                  e.addClass(n, "exit", "base"),
                  e.props.onExit && e.props.onExit(t);
              }),
              (e.onExiting = function (t) {
                var n = e.resolveArguments(t)[0];
                e.addClass(n, "exit", "active"),
                  e.props.onExiting && e.props.onExiting(t);
              }),
              (e.onExited = function (t) {
                var n = e.resolveArguments(t)[0];
                e.removeClasses(n, "exit"),
                  e.addClass(n, "exit", "done"),
                  e.props.onExited && e.props.onExited(t);
              }),
              (e.resolveArguments = function (t, n) {
                return e.props.nodeRef ? [e.props.nodeRef.current, t] : [t, n];
              }),
              (e.getClassNames = function (t) {
                var n = e.props.classNames,
                  r = "string" == typeof n,
                  o = r ? "" + (r && n ? n + "-" : "") + t : n[t];
                return {
                  baseClassName: o,
                  activeClassName: r ? o + "-active" : n[t + "Active"],
                  doneClassName: r ? o + "-done" : n[t + "Done"],
                };
              }),
              e
            );
          }
          hl(n, t);
          var r = n.prototype;
          return (
            (r.addClass = function (e, t, n) {
              var r = this.getClassNames(t)[n + "ClassName"],
                o = this.getClassNames("enter").doneClassName;
              "appear" === t && "done" === n && o && (r += " " + o),
                "active" === n && e && wl(e),
                r &&
                  ((this.appliedClasses[t][n] = r),
                  (function (e, t) {
                    e &&
                      t &&
                      t.split(" ").forEach(function (t) {
                        return (
                          (r = t),
                          void ((n = e).classList
                            ? n.classList.add(r)
                            : (function (e, t) {
                                return e.classList
                                  ? !!t && e.classList.contains(t)
                                  : -1 !==
                                      (
                                        " " +
                                        (e.className.baseVal || e.className) +
                                        " "
                                      ).indexOf(" " + t + " ");
                              })(n, r) ||
                              ("string" == typeof n.className
                                ? (n.className = n.className + " " + r)
                                : n.setAttribute(
                                    "class",
                                    ((n.className && n.className.baseVal) ||
                                      "") +
                                      " " +
                                      r
                                  )))
                        );
                        var n, r;
                      });
                  })(e, r));
            }),
            (r.removeClasses = function (e, t) {
              var n = this.appliedClasses[t],
                r = n.base,
                o = n.active,
                a = n.done;
              (this.appliedClasses[t] = {}),
                r && _l(e, r),
                o && _l(e, o),
                a && _l(e, a);
            }),
            (r.render = function () {
              var t = this.props,
                n = (t.classNames, ml(t, ["classNames"]));
              return e.createElement(
                jl,
                vl({}, n, {
                  onEnter: this.onEnter,
                  onEntered: this.onEntered,
                  onEntering: this.onEntering,
                  onExit: this.onExit,
                  onExiting: this.onExiting,
                  onExited: this.onExited,
                })
              );
            }),
            n
          );
        })(e.Component);
      (Tl.defaultProps = { classNames: "" }), (Tl.propTypes = {});
      const Nl = Tl;
      function Dl(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function Ll(e) {
        return e instanceof Dl(e).Element || e instanceof Element;
      }
      function Rl(e) {
        return e instanceof Dl(e).HTMLElement || e instanceof HTMLElement;
      }
      function Ml(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof Dl(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var Il = Math.max,
        zl = Math.min,
        Bl = Math.round;
      function Fl(e, t) {
        void 0 === t && (t = !1);
        var n = e.getBoundingClientRect(),
          r = 1,
          o = 1;
        if (Rl(e) && t) {
          var a = e.offsetHeight,
            l = e.offsetWidth;
          l > 0 && (r = Bl(n.width) / l || 1),
            a > 0 && (o = Bl(n.height) / a || 1);
        }
        return {
          width: n.width / r,
          height: n.height / o,
          top: n.top / o,
          right: n.right / r,
          bottom: n.bottom / o,
          left: n.left / r,
          x: n.left / r,
          y: n.top / o,
        };
      }
      function Ul(e) {
        var t = Dl(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function Hl(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function Wl(e) {
        return ((Ll(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function Vl(e) {
        return Fl(Wl(e)).left + Ul(e).scrollLeft;
      }
      function Xl(e) {
        return Dl(e).getComputedStyle(e);
      }
      function Yl(e) {
        var t = Xl(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
      }
      function Ql(e, t, n) {
        void 0 === n && (n = !1);
        var r,
          o,
          a = Rl(t),
          l =
            Rl(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                n = Bl(t.width) / e.offsetWidth || 1,
                r = Bl(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== r;
            })(t),
          i = Wl(t),
          u = Fl(e, l),
          c = { scrollLeft: 0, scrollTop: 0 },
          s = { x: 0, y: 0 };
        return (
          (a || (!a && !n)) &&
            (("body" !== Hl(t) || Yl(i)) &&
              (c =
                (r = t) !== Dl(r) && Rl(r)
                  ? { scrollLeft: (o = r).scrollLeft, scrollTop: o.scrollTop }
                  : Ul(r)),
            Rl(t)
              ? (((s = Fl(t, !0)).x += t.clientLeft), (s.y += t.clientTop))
              : i && (s.x = Vl(i))),
          {
            x: u.left + c.scrollLeft - s.x,
            y: u.top + c.scrollTop - s.y,
            width: u.width,
            height: u.height,
          }
        );
      }
      function Kl(e) {
        var t = Fl(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - r) <= 1 && (r = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
        );
      }
      function Gl(e) {
        return "html" === Hl(e)
          ? e
          : e.assignedSlot || e.parentNode || (Ml(e) ? e.host : null) || Wl(e);
      }
      function ql(e) {
        return ["html", "body", "#document"].indexOf(Hl(e)) >= 0
          ? e.ownerDocument.body
          : Rl(e) && Yl(e)
          ? e
          : ql(Gl(e));
      }
      function Jl(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = ql(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          a = Dl(r),
          l = o ? [a].concat(a.visualViewport || [], Yl(r) ? r : []) : r,
          i = t.concat(l);
        return o ? i : i.concat(Jl(Gl(l)));
      }
      function Zl(e) {
        return ["table", "td", "th"].indexOf(Hl(e)) >= 0;
      }
      function $l(e) {
        return Rl(e) && "fixed" !== Xl(e).position ? e.offsetParent : null;
      }
      function ei(e) {
        for (
          var t = Dl(e), n = $l(e);
          n && Zl(n) && "static" === Xl(n).position;

        )
          n = $l(n);
        return n &&
          ("html" === Hl(n) ||
            ("body" === Hl(n) && "static" === Xl(n).position))
          ? t
          : n ||
              (function (e) {
                var t =
                  -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                if (
                  -1 !== navigator.userAgent.indexOf("Trident") &&
                  Rl(e) &&
                  "fixed" === Xl(e).position
                )
                  return null;
                var n = Gl(e);
                for (
                  Ml(n) && (n = n.host);
                  Rl(n) && ["html", "body"].indexOf(Hl(n)) < 0;

                ) {
                  var r = Xl(n);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (t && "filter" === r.willChange) ||
                    (t && r.filter && "none" !== r.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      var ti = "top",
        ni = "bottom",
        ri = "right",
        oi = "left",
        ai = "auto",
        li = [ti, ni, ri, oi],
        ii = "start",
        ui = "end",
        ci = "viewport",
        si = "popper",
        fi = li.reduce(function (e, t) {
          return e.concat([t + "-" + ii, t + "-" + ui]);
        }, []),
        di = [].concat(li, [ai]).reduce(function (e, t) {
          return e.concat([t, t + "-" + ii, t + "-" + ui]);
        }, []),
        pi = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      function vi(e) {
        var t = new Map(),
          n = new Set(),
          r = [];
        function o(e) {
          n.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!n.has(e)) {
                  var r = t.get(e);
                  r && o(r);
                }
              }),
            r.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            n.has(e.name) || o(e);
          }),
          r
        );
      }
      var mi = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function gi() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function hi(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          o = t.defaultOptions,
          a = void 0 === o ? mi : o;
        return function (e, t, n) {
          void 0 === n && (n = a);
          var o,
            l,
            i = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, mi, a),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            u = [],
            c = !1,
            s = {
              state: i,
              setOptions: function (n) {
                var o = "function" == typeof n ? n(i.options) : n;
                f(),
                  (i.options = Object.assign({}, a, i.options, o)),
                  (i.scrollParents = {
                    reference: Ll(e)
                      ? Jl(e)
                      : e.contextElement
                      ? Jl(e.contextElement)
                      : [],
                    popper: Jl(t),
                  });
                var l = (function (e) {
                  var t = vi(e);
                  return pi.reduce(function (e, n) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === n;
                      })
                    );
                  }, []);
                })(
                  (function (e) {
                    var t = e.reduce(function (e, t) {
                      var n = e[t.name];
                      return (
                        (e[t.name] = n
                          ? Object.assign({}, n, t, {
                              options: Object.assign({}, n.options, t.options),
                              data: Object.assign({}, n.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {});
                    return Object.keys(t).map(function (e) {
                      return t[e];
                    });
                  })([].concat(r, i.options.modifiers))
                );
                return (
                  (i.orderedModifiers = l.filter(function (e) {
                    return e.enabled;
                  })),
                  i.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      r = void 0 === n ? {} : n,
                      o = e.effect;
                    if ("function" == typeof o) {
                      var a = o({ state: i, name: t, instance: s, options: r }),
                        l = function () {};
                      u.push(a || l);
                    }
                  }),
                  s.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var e = i.elements,
                    t = e.reference,
                    n = e.popper;
                  if (gi(t, n)) {
                    (i.rects = {
                      reference: Ql(t, ei(n), "fixed" === i.options.strategy),
                      popper: Kl(n),
                    }),
                      (i.reset = !1),
                      (i.placement = i.options.placement),
                      i.orderedModifiers.forEach(function (e) {
                        return (i.modifiersData[e.name] = Object.assign(
                          {},
                          e.data
                        ));
                      });
                    for (var r = 0; r < i.orderedModifiers.length; r++)
                      if (!0 !== i.reset) {
                        var o = i.orderedModifiers[r],
                          a = o.fn,
                          l = o.options,
                          u = void 0 === l ? {} : l,
                          f = o.name;
                        "function" == typeof a &&
                          (i =
                            a({ state: i, options: u, name: f, instance: s }) ||
                            i);
                      } else (i.reset = !1), (r = -1);
                  }
                }
              },
              update:
                ((o = function () {
                  return new Promise(function (e) {
                    s.forceUpdate(), e(i);
                  });
                }),
                function () {
                  return (
                    l ||
                      (l = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (l = void 0), e(o());
                        });
                      })),
                    l
                  );
                }),
              destroy: function () {
                f(), (c = !0);
              },
            };
          if (!gi(e, t)) return s;
          function f() {
            u.forEach(function (e) {
              return e();
            }),
              (u = []);
          }
          return (
            s.setOptions(n).then(function (e) {
              !c && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            s
          );
        };
      }
      var yi = { passive: !0 };
      function bi(e) {
        return e.split("-")[0];
      }
      function Ai(e) {
        return e.split("-")[1];
      }
      function wi(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function Oi(e) {
        var t,
          n = e.reference,
          r = e.element,
          o = e.placement,
          a = o ? bi(o) : null,
          l = o ? Ai(o) : null,
          i = n.x + n.width / 2 - r.width / 2,
          u = n.y + n.height / 2 - r.height / 2;
        switch (a) {
          case ti:
            t = { x: i, y: n.y - r.height };
            break;
          case ni:
            t = { x: i, y: n.y + n.height };
            break;
          case ri:
            t = { x: n.x + n.width, y: u };
            break;
          case oi:
            t = { x: n.x - r.width, y: u };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var c = a ? wi(a) : null;
        if (null != c) {
          var s = "y" === c ? "height" : "width";
          switch (l) {
            case ii:
              t[c] = t[c] - (n[s] / 2 - r[s] / 2);
              break;
            case ui:
              t[c] = t[c] + (n[s] / 2 - r[s] / 2);
          }
        }
        return t;
      }
      var xi = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Ei(e) {
        var t,
          n = e.popper,
          r = e.popperRect,
          o = e.placement,
          a = e.variation,
          l = e.offsets,
          i = e.position,
          u = e.gpuAcceleration,
          c = e.adaptive,
          s = e.roundOffsets,
          f = e.isFixed,
          d = l.x,
          p = void 0 === d ? 0 : d,
          v = l.y,
          m = void 0 === v ? 0 : v,
          g = "function" == typeof s ? s({ x: p, y: m }) : { x: p, y: m };
        (p = g.x), (m = g.y);
        var h = l.hasOwnProperty("x"),
          y = l.hasOwnProperty("y"),
          b = oi,
          A = ti,
          w = window;
        if (c) {
          var O = ei(n),
            x = "clientHeight",
            E = "clientWidth";
          if (
            (O === Dl(n) &&
              "static" !== Xl((O = Wl(n))).position &&
              "absolute" === i &&
              ((x = "scrollHeight"), (E = "scrollWidth")),
            o === ti || ((o === oi || o === ri) && a === ui))
          )
            (A = ni),
              (m -=
                (f && O === w && w.visualViewport
                  ? w.visualViewport.height
                  : O[x]) - r.height),
              (m *= u ? 1 : -1);
          if (o === oi || ((o === ti || o === ni) && a === ui))
            (b = ri),
              (p -=
                (f && O === w && w.visualViewport
                  ? w.visualViewport.width
                  : O[E]) - r.width),
              (p *= u ? 1 : -1);
        }
        var S,
          k = Object.assign({ position: i }, c && xi),
          P =
            !0 === s
              ? (function (e) {
                  var t = e.x,
                    n = e.y,
                    r = window.devicePixelRatio || 1;
                  return { x: Bl(t * r) / r || 0, y: Bl(n * r) / r || 0 };
                })({ x: p, y: m })
              : { x: p, y: m };
        return (
          (p = P.x),
          (m = P.y),
          u
            ? Object.assign(
                {},
                k,
                (((S = {})[A] = y ? "0" : ""),
                (S[b] = h ? "0" : ""),
                (S.transform =
                  (w.devicePixelRatio || 1) <= 1
                    ? "translate(" + p + "px, " + m + "px)"
                    : "translate3d(" + p + "px, " + m + "px, 0)"),
                S)
              )
            : Object.assign(
                {},
                k,
                (((t = {})[A] = y ? m + "px" : ""),
                (t[b] = h ? p + "px" : ""),
                (t.transform = ""),
                t)
              )
        );
      }
      const Si = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            o = n.offset,
            a = void 0 === o ? [0, 0] : o,
            l = di.reduce(function (e, n) {
              return (
                (e[n] = (function (e, t, n) {
                  var r = bi(e),
                    o = [oi, ti].indexOf(r) >= 0 ? -1 : 1,
                    a =
                      "function" == typeof n
                        ? n(Object.assign({}, t, { placement: e }))
                        : n,
                    l = a[0],
                    i = a[1];
                  return (
                    (l = l || 0),
                    (i = (i || 0) * o),
                    [oi, ri].indexOf(r) >= 0 ? { x: i, y: l } : { x: l, y: i }
                  );
                })(n, t.rects, a)),
                e
              );
            }, {}),
            i = l[t.placement],
            u = i.x,
            c = i.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += u),
            (t.modifiersData.popperOffsets.y += c)),
            (t.modifiersData[r] = l);
        },
      };
      var ki = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function Pi(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return ki[e];
        });
      }
      var Ci = { start: "end", end: "start" };
      function ji(e) {
        return e.replace(/start|end/g, function (e) {
          return Ci[e];
        });
      }
      function _i(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && Ml(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function Ti(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function Ni(e, t) {
        return t === ci
          ? Ti(
              (function (e) {
                var t = Dl(e),
                  n = Wl(e),
                  r = t.visualViewport,
                  o = n.clientWidth,
                  a = n.clientHeight,
                  l = 0,
                  i = 0;
                return (
                  r &&
                    ((o = r.width),
                    (a = r.height),
                    /^((?!chrome|android).)*safari/i.test(
                      navigator.userAgent
                    ) || ((l = r.offsetLeft), (i = r.offsetTop))),
                  { width: o, height: a, x: l + Vl(e), y: i }
                );
              })(e)
            )
          : Ll(t)
          ? (function (e) {
              var t = Fl(e);
              return (
                (t.top = t.top + e.clientTop),
                (t.left = t.left + e.clientLeft),
                (t.bottom = t.top + e.clientHeight),
                (t.right = t.left + e.clientWidth),
                (t.width = e.clientWidth),
                (t.height = e.clientHeight),
                (t.x = t.left),
                (t.y = t.top),
                t
              );
            })(t)
          : Ti(
              (function (e) {
                var t,
                  n = Wl(e),
                  r = Ul(e),
                  o = null == (t = e.ownerDocument) ? void 0 : t.body,
                  a = Il(
                    n.scrollWidth,
                    n.clientWidth,
                    o ? o.scrollWidth : 0,
                    o ? o.clientWidth : 0
                  ),
                  l = Il(
                    n.scrollHeight,
                    n.clientHeight,
                    o ? o.scrollHeight : 0,
                    o ? o.clientHeight : 0
                  ),
                  i = -r.scrollLeft + Vl(e),
                  u = -r.scrollTop;
                return (
                  "rtl" === Xl(o || n).direction &&
                    (i += Il(n.clientWidth, o ? o.clientWidth : 0) - a),
                  { width: a, height: l, x: i, y: u }
                );
              })(Wl(e))
            );
      }
      function Di(e, t, n) {
        var r =
            "clippingParents" === t
              ? (function (e) {
                  var t = Jl(Gl(e)),
                    n =
                      ["absolute", "fixed"].indexOf(Xl(e).position) >= 0 &&
                      Rl(e)
                        ? ei(e)
                        : e;
                  return Ll(n)
                    ? t.filter(function (e) {
                        return Ll(e) && _i(e, n) && "body" !== Hl(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          o = [].concat(r, [n]),
          a = o[0],
          l = o.reduce(function (t, n) {
            var r = Ni(e, n);
            return (
              (t.top = Il(r.top, t.top)),
              (t.right = zl(r.right, t.right)),
              (t.bottom = zl(r.bottom, t.bottom)),
              (t.left = Il(r.left, t.left)),
              t
            );
          }, Ni(e, a));
        return (
          (l.width = l.right - l.left),
          (l.height = l.bottom - l.top),
          (l.x = l.left),
          (l.y = l.top),
          l
        );
      }
      function Li(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function Ri(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      function Mi(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          o = void 0 === r ? e.placement : r,
          a = n.boundary,
          l = void 0 === a ? "clippingParents" : a,
          i = n.rootBoundary,
          u = void 0 === i ? ci : i,
          c = n.elementContext,
          s = void 0 === c ? si : c,
          f = n.altBoundary,
          d = void 0 !== f && f,
          p = n.padding,
          v = void 0 === p ? 0 : p,
          m = Li("number" != typeof v ? v : Ri(v, li)),
          g = s === si ? "reference" : si,
          h = e.rects.popper,
          y = e.elements[d ? g : s],
          b = Di(Ll(y) ? y : y.contextElement || Wl(e.elements.popper), l, u),
          A = Fl(e.elements.reference),
          w = Oi({
            reference: A,
            element: h,
            strategy: "absolute",
            placement: o,
          }),
          O = Ti(Object.assign({}, h, w)),
          x = s === si ? O : A,
          E = {
            top: b.top - x.top + m.top,
            bottom: x.bottom - b.bottom + m.bottom,
            left: b.left - x.left + m.left,
            right: x.right - b.right + m.right,
          },
          S = e.modifiersData.offset;
        if (s === si && S) {
          var k = S[o];
          Object.keys(E).forEach(function (e) {
            var t = [ri, ni].indexOf(e) >= 0 ? 1 : -1,
              n = [ti, ni].indexOf(e) >= 0 ? "y" : "x";
            E[e] += k[n] * t;
          });
        }
        return E;
      }
      function Ii(e, t, n) {
        return Il(e, zl(t, n));
      }
      const zi = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            o = n.mainAxis,
            a = void 0 === o || o,
            l = n.altAxis,
            i = void 0 !== l && l,
            u = n.boundary,
            c = n.rootBoundary,
            s = n.altBoundary,
            f = n.padding,
            d = n.tether,
            p = void 0 === d || d,
            v = n.tetherOffset,
            m = void 0 === v ? 0 : v,
            g = Mi(t, {
              boundary: u,
              rootBoundary: c,
              padding: f,
              altBoundary: s,
            }),
            h = bi(t.placement),
            y = Ai(t.placement),
            b = !y,
            A = wi(h),
            w = "x" === A ? "y" : "x",
            O = t.modifiersData.popperOffsets,
            x = t.rects.reference,
            E = t.rects.popper,
            S =
              "function" == typeof m
                ? m(Object.assign({}, t.rects, { placement: t.placement }))
                : m,
            k =
              "number" == typeof S
                ? { mainAxis: S, altAxis: S }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, S),
            P = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            C = { x: 0, y: 0 };
          if (O) {
            if (a) {
              var j,
                _ = "y" === A ? ti : oi,
                T = "y" === A ? ni : ri,
                N = "y" === A ? "height" : "width",
                D = O[A],
                L = D + g[_],
                R = D - g[T],
                M = p ? -E[N] / 2 : 0,
                I = y === ii ? x[N] : E[N],
                z = y === ii ? -E[N] : -x[N],
                B = t.elements.arrow,
                F = p && B ? Kl(B) : { width: 0, height: 0 },
                U = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                H = U[_],
                W = U[T],
                V = Ii(0, x[N], F[N]),
                X = b
                  ? x[N] / 2 - M - V - H - k.mainAxis
                  : I - V - H - k.mainAxis,
                Y = b
                  ? -x[N] / 2 + M + V + W + k.mainAxis
                  : z + V + W + k.mainAxis,
                Q = t.elements.arrow && ei(t.elements.arrow),
                K = Q ? ("y" === A ? Q.clientTop || 0 : Q.clientLeft || 0) : 0,
                G = null != (j = null == P ? void 0 : P[A]) ? j : 0,
                q = D + Y - G,
                J = Ii(p ? zl(L, D + X - G - K) : L, D, p ? Il(R, q) : R);
              (O[A] = J), (C[A] = J - D);
            }
            if (i) {
              var Z,
                $ = "x" === A ? ti : oi,
                ee = "x" === A ? ni : ri,
                te = O[w],
                ne = "y" === w ? "height" : "width",
                re = te + g[$],
                oe = te - g[ee],
                ae = -1 !== [ti, oi].indexOf(h),
                le = null != (Z = null == P ? void 0 : P[w]) ? Z : 0,
                ie = ae ? re : te - x[ne] - E[ne] - le + k.altAxis,
                ue = ae ? te + x[ne] + E[ne] - le - k.altAxis : oe,
                ce =
                  p && ae
                    ? (function (e, t, n) {
                        var r = Ii(e, t, n);
                        return r > n ? n : r;
                      })(ie, te, ue)
                    : Ii(p ? ie : re, te, p ? ue : oe);
              (O[w] = ce), (C[w] = ce - te);
            }
            t.modifiersData[r] = C;
          }
        },
        requiresIfExists: ["offset"],
      };
      const Bi = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            n = e.state,
            r = e.name,
            o = e.options,
            a = n.elements.arrow,
            l = n.modifiersData.popperOffsets,
            i = bi(n.placement),
            u = wi(i),
            c = [oi, ri].indexOf(i) >= 0 ? "height" : "width";
          if (a && l) {
            var s = (function (e, t) {
                return Li(
                  "number" !=
                    typeof (e =
                      "function" == typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            })
                          )
                        : e)
                    ? e
                    : Ri(e, li)
                );
              })(o.padding, n),
              f = Kl(a),
              d = "y" === u ? ti : oi,
              p = "y" === u ? ni : ri,
              v =
                n.rects.reference[c] +
                n.rects.reference[u] -
                l[u] -
                n.rects.popper[c],
              m = l[u] - n.rects.reference[u],
              g = ei(a),
              h = g
                ? "y" === u
                  ? g.clientHeight || 0
                  : g.clientWidth || 0
                : 0,
              y = v / 2 - m / 2,
              b = s[d],
              A = h - f[c] - s[p],
              w = h / 2 - f[c] / 2 + y,
              O = Ii(b, w, A),
              x = u;
            n.modifiersData[r] =
              (((t = {})[x] = O), (t.centerOffset = O - w), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
          null != r &&
            ("string" != typeof r ||
              (r = t.elements.popper.querySelector(r))) &&
            _i(t.elements.popper, r) &&
            (t.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function Fi(e, t, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
          }
        );
      }
      function Ui(e) {
        return [ti, ri, ni, oi].some(function (t) {
          return e[t] >= 0;
        });
      }
      var Hi = hi({
          defaultModifiers: [
            {
              name: "eventListeners",
              enabled: !0,
              phase: "write",
              fn: function () {},
              effect: function (e) {
                var t = e.state,
                  n = e.instance,
                  r = e.options,
                  o = r.scroll,
                  a = void 0 === o || o,
                  l = r.resize,
                  i = void 0 === l || l,
                  u = Dl(t.elements.popper),
                  c = [].concat(
                    t.scrollParents.reference,
                    t.scrollParents.popper
                  );
                return (
                  a &&
                    c.forEach(function (e) {
                      e.addEventListener("scroll", n.update, yi);
                    }),
                  i && u.addEventListener("resize", n.update, yi),
                  function () {
                    a &&
                      c.forEach(function (e) {
                        e.removeEventListener("scroll", n.update, yi);
                      }),
                      i && u.removeEventListener("resize", n.update, yi);
                  }
                );
              },
              data: {},
            },
            {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (e) {
                var t = e.state,
                  n = e.name;
                t.modifiersData[n] = Oi({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            {
              name: "computeStyles",
              enabled: !0,
              phase: "beforeWrite",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = n.gpuAcceleration,
                  o = void 0 === r || r,
                  a = n.adaptive,
                  l = void 0 === a || a,
                  i = n.roundOffsets,
                  u = void 0 === i || i,
                  c = {
                    placement: bi(t.placement),
                    variation: Ai(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: o,
                    isFixed: "fixed" === t.options.strategy,
                  };
                null != t.modifiersData.popperOffsets &&
                  (t.styles.popper = Object.assign(
                    {},
                    t.styles.popper,
                    Ei(
                      Object.assign({}, c, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: l,
                        roundOffsets: u,
                      })
                    )
                  )),
                  null != t.modifiersData.arrow &&
                    (t.styles.arrow = Object.assign(
                      {},
                      t.styles.arrow,
                      Ei(
                        Object.assign({}, c, {
                          offsets: t.modifiersData.arrow,
                          position: "absolute",
                          adaptive: !1,
                          roundOffsets: u,
                        })
                      )
                    )),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    { "data-popper-placement": t.placement }
                  ));
              },
              data: {},
            },
            {
              name: "applyStyles",
              enabled: !0,
              phase: "write",
              fn: function (e) {
                var t = e.state;
                Object.keys(t.elements).forEach(function (e) {
                  var n = t.styles[e] || {},
                    r = t.attributes[e] || {},
                    o = t.elements[e];
                  Rl(o) &&
                    Hl(o) &&
                    (Object.assign(o.style, n),
                    Object.keys(r).forEach(function (e) {
                      var t = r[e];
                      !1 === t
                        ? o.removeAttribute(e)
                        : o.setAttribute(e, !0 === t ? "" : t);
                    }));
                });
              },
              effect: function (e) {
                var t = e.state,
                  n = {
                    popper: {
                      position: t.options.strategy,
                      left: "0",
                      top: "0",
                      margin: "0",
                    },
                    arrow: { position: "absolute" },
                    reference: {},
                  };
                return (
                  Object.assign(t.elements.popper.style, n.popper),
                  (t.styles = n),
                  t.elements.arrow &&
                    Object.assign(t.elements.arrow.style, n.arrow),
                  function () {
                    Object.keys(t.elements).forEach(function (e) {
                      var r = t.elements[e],
                        o = t.attributes[e] || {},
                        a = Object.keys(
                          t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                        ).reduce(function (e, t) {
                          return (e[t] = ""), e;
                        }, {});
                      Rl(r) &&
                        Hl(r) &&
                        (Object.assign(r.style, a),
                        Object.keys(o).forEach(function (e) {
                          r.removeAttribute(e);
                        }));
                    });
                  }
                );
              },
              requires: ["computeStyles"],
            },
            Si,
            {
              name: "flip",
              enabled: !0,
              phase: "main",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = e.name;
                if (!t.modifiersData[r]._skip) {
                  for (
                    var o = n.mainAxis,
                      a = void 0 === o || o,
                      l = n.altAxis,
                      i = void 0 === l || l,
                      u = n.fallbackPlacements,
                      c = n.padding,
                      s = n.boundary,
                      f = n.rootBoundary,
                      d = n.altBoundary,
                      p = n.flipVariations,
                      v = void 0 === p || p,
                      m = n.allowedAutoPlacements,
                      g = t.options.placement,
                      h = bi(g),
                      y =
                        u ||
                        (h === g || !v
                          ? [Pi(g)]
                          : (function (e) {
                              if (bi(e) === ai) return [];
                              var t = Pi(e);
                              return [ji(e), t, ji(t)];
                            })(g)),
                      b = [g].concat(y).reduce(function (e, n) {
                        return e.concat(
                          bi(n) === ai
                            ? (function (e, t) {
                                void 0 === t && (t = {});
                                var n = t,
                                  r = n.placement,
                                  o = n.boundary,
                                  a = n.rootBoundary,
                                  l = n.padding,
                                  i = n.flipVariations,
                                  u = n.allowedAutoPlacements,
                                  c = void 0 === u ? di : u,
                                  s = Ai(r),
                                  f = s
                                    ? i
                                      ? fi
                                      : fi.filter(function (e) {
                                          return Ai(e) === s;
                                        })
                                    : li,
                                  d = f.filter(function (e) {
                                    return c.indexOf(e) >= 0;
                                  });
                                0 === d.length && (d = f);
                                var p = d.reduce(function (t, n) {
                                  return (
                                    (t[n] = Mi(e, {
                                      placement: n,
                                      boundary: o,
                                      rootBoundary: a,
                                      padding: l,
                                    })[bi(n)]),
                                    t
                                  );
                                }, {});
                                return Object.keys(p).sort(function (e, t) {
                                  return p[e] - p[t];
                                });
                              })(t, {
                                placement: n,
                                boundary: s,
                                rootBoundary: f,
                                padding: c,
                                flipVariations: v,
                                allowedAutoPlacements: m,
                              })
                            : n
                        );
                      }, []),
                      A = t.rects.reference,
                      w = t.rects.popper,
                      O = new Map(),
                      x = !0,
                      E = b[0],
                      S = 0;
                    S < b.length;
                    S++
                  ) {
                    var k = b[S],
                      P = bi(k),
                      C = Ai(k) === ii,
                      j = [ti, ni].indexOf(P) >= 0,
                      _ = j ? "width" : "height",
                      T = Mi(t, {
                        placement: k,
                        boundary: s,
                        rootBoundary: f,
                        altBoundary: d,
                        padding: c,
                      }),
                      N = j ? (C ? ri : oi) : C ? ni : ti;
                    A[_] > w[_] && (N = Pi(N));
                    var D = Pi(N),
                      L = [];
                    if (
                      (a && L.push(T[P] <= 0),
                      i && L.push(T[N] <= 0, T[D] <= 0),
                      L.every(function (e) {
                        return e;
                      }))
                    ) {
                      (E = k), (x = !1);
                      break;
                    }
                    O.set(k, L);
                  }
                  if (x)
                    for (
                      var R = function (e) {
                          var t = b.find(function (t) {
                            var n = O.get(t);
                            if (n)
                              return n.slice(0, e).every(function (e) {
                                return e;
                              });
                          });
                          if (t) return (E = t), "break";
                        },
                        M = v ? 3 : 1;
                      M > 0;
                      M--
                    ) {
                      if ("break" === R(M)) break;
                    }
                  t.placement !== E &&
                    ((t.modifiersData[r]._skip = !0),
                    (t.placement = E),
                    (t.reset = !0));
                }
              },
              requiresIfExists: ["offset"],
              data: { _skip: !1 },
            },
            zi,
            Bi,
            {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  n = e.name,
                  r = t.rects.reference,
                  o = t.rects.popper,
                  a = t.modifiersData.preventOverflow,
                  l = Mi(t, { elementContext: "reference" }),
                  i = Mi(t, { altBoundary: !0 }),
                  u = Fi(l, r),
                  c = Fi(i, o, a),
                  s = Ui(u),
                  f = Ui(c);
                (t.modifiersData[n] = {
                  referenceClippingOffsets: u,
                  popperEscapeOffsets: c,
                  isReferenceHidden: s,
                  hasPopperEscaped: f,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": s,
                      "data-popper-escaped": f,
                    }
                  ));
              },
            },
          ],
        }),
        Wi = n(2330),
        Vi = n.n(Wi),
        Xi = function (e) {
          return e.reduce(function (e, t) {
            var n = t[0],
              r = t[1];
            return (e[n] = r), e;
          }, {});
        },
        Yi =
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
            ? e.useLayoutEffect
            : e.useEffect,
        Qi = [],
        Ki = n(2037);
      function Gi(e) {
        return e.current &&
          "object" === q(e.current) &&
          "currentElement" in e.current
          ? e.current.currentElement
          : e.current;
      }
      function qi(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return Ji(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Ji(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          l = !0,
          i = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (l = e.done), e;
          },
          e: function (e) {
            (i = !0), (a = e);
          },
          f: function () {
            try {
              l || null == n.return || n.return();
            } finally {
              if (i) throw a;
            }
          },
        };
      }
      function Ji(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Zi(t) {
        var n = t.content,
          r = t.disabled,
          o = t.trigger,
          a = t.visible,
          l = t.onVisibleChange,
          i = t.triggerRef,
          u = xo().classPrefix,
          c = (0, e.useRef)(!1),
          s = (0, e.useRef)(0),
          f = (0, e.useRef)(
            "".concat(u, "-popup--").concat(Math.random().toFixed(10))
          ),
          d = !r && n;
        function p(e) {
          if (!d) return {};
          var t,
            n,
            r,
            c,
            s = {
              className: a
                ? H()(e.props.className, "".concat(u, "-popup-open"))
                : e.props.className,
              onClick: function (t) {
                var n, r;
                "click" === o &&
                  l(!a, { e: t, trigger: "trigger-element-click" }),
                  null === (n = (r = e.props).onClick) ||
                    void 0 === n ||
                    n.call(r, t);
              },
              onTouchStart: function (t) {
                var n, r;
                "hover" === o &&
                  l(!0, { e: t, trigger: "trigger-element-hover" }),
                  null === (n = (r = e.props).onTouchStart) ||
                    void 0 === n ||
                    n.call(r, t);
              },
              onMouseEnter: function (t) {
                var n, r;
                "hover" === o &&
                  l(!0, { e: t, trigger: "trigger-element-hover" }),
                  null === (n = (r = e.props).onMouseEnter) ||
                    void 0 === n ||
                    n.call(r, t);
              },
              onMouseLeave: function (t) {
                var n, r;
                "hover" === o &&
                  l(!1, { e: t, trigger: "trigger-element-hover" }),
                  null === (n = (r = e.props).onMouseLeave) ||
                    void 0 === n ||
                    n.call(r, t);
              },
              onFocus: function () {
                var t, n;
                "focus" === o && l(!0, { trigger: "trigger-element-focus" });
                for (
                  var r = arguments.length, a = new Array(r), i = 0;
                  i < r;
                  i++
                )
                  a[i] = arguments[i];
                null === (t = (n = e.props).onFocus) ||
                  void 0 === t ||
                  t.call.apply(t, [n].concat(a));
              },
              onBlur: function () {
                var t, n;
                "focus" === o && l(!1, { trigger: "trigger-element-blur" });
                for (
                  var r = arguments.length, a = new Array(r), i = 0;
                  i < r;
                  i++
                )
                  a[i] = arguments[i];
                null === (t = (n = e.props).onBlur) ||
                  void 0 === t ||
                  t.call.apply(t, [n].concat(a));
              },
              onContextMenu: function (t) {
                var n, r;
                "context-menu" === o &&
                  l(!0, { e: t, trigger: "context-menu" }),
                  null === (n = (r = e.props).onContextMenu) ||
                    void 0 === n ||
                    n.call(r, t);
              },
              onKeyDown: function (t) {
                var n, r;
                "Escape" === (null == t ? void 0 : t.key) &&
                  l(!1, { e: t, trigger: "keydown-esc" }),
                  null === (n = (r = e.props).onKeyDown) ||
                    void 0 === n ||
                    n.call(r, t);
              },
            };
          return (
            (t = e),
            ("function" !=
              typeof (c = (0, Ki.isMemo)(t) ? t.type.type : t.type) ||
              (null !== (n = c.prototype) && void 0 !== n && n.render)) &&
            ("function" != typeof t ||
              (null !== (r = t.prototype) && void 0 !== r && r.render))
              ? (s.ref = (function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return function (e) {
                    var n,
                      r = qi(t);
                    try {
                      for (r.s(); !(n = r.n()).done; ) {
                        var o = n.value;
                        "function" == typeof o ? o(e) : o && (o.current = e);
                      }
                    } catch (e) {
                      r.e(e);
                    } finally {
                      r.f();
                    }
                  };
                })(i, e.ref))
              : (s["data-popup"] = f.current),
            s
          );
        }
        return (
          (0, e.useEffect)(
            function () {
              if (d) {
                var e = function (e) {
                  var t, n;
                  (null !== (t = Gi(i)) &&
                    void 0 !== t &&
                    null !== (n = t.contains) &&
                    void 0 !== n &&
                    n.call(t, e.target)) ||
                    c.current ||
                    (a && l(!1, { e, trigger: "document" }));
                };
                return (
                  document.addEventListener("mousedown", e),
                  document.addEventListener("touchend", e),
                  function () {
                    document.removeEventListener("mousedown", e),
                      document.removeEventListener("touchend", e);
                  }
                );
              }
            },
            [d, a, l, i]
          ),
          {
            getTriggerNode: function (t) {
              var n =
                (0, e.isValidElement)(t) && !(0, Ki.isFragment)(t)
                  ? t
                  : e.createElement(
                      "span",
                      { className: "".concat(u, "-trigger") },
                      t
                    );
              return e.cloneElement(n, p(n));
            },
            getPopupProps: function () {
              return d
                ? {
                    onMouseEnter: function (e) {
                      "hover" === o &&
                        l(!0, { e, trigger: "trigger-element-hover" });
                    },
                    onMouseLeave: function (e) {
                      "hover" === o &&
                        l(!1, { e, trigger: "trigger-element-hover" });
                    },
                    onMouseDown: function () {
                      clearTimeout(s.current),
                        (c.current = !0),
                        (s.current = window.setTimeout(function () {
                          c.current = !1;
                        }));
                    },
                    onTouchEnd: function () {
                      clearTimeout(s.current),
                        (c.current = !0),
                        (s.current = window.setTimeout(function () {
                          c.current = !1;
                        }));
                    },
                  }
                : {};
            },
            getTriggerDom: (0, e.useCallback)(function () {
              return document.querySelector(
                '[data-popup="'.concat(f.current, '"]')
              );
            }, []),
          }
        );
      }
      var $i = /\s/;
      var eu = function (e) {
          for (var t = e.length; t-- && $i.test(e.charAt(t)); );
          return t;
        },
        tu = /^\s+/;
      var nu = function (e) {
          return e ? e.slice(0, eu(e) + 1).replace(tu, "") : e;
        },
        ru = pe,
        ou = Bo,
        au = /^[-+]0x[0-9a-f]+$/i,
        lu = /^0b[01]+$/i,
        iu = /^0o[0-7]+$/i,
        uu = parseInt;
      var cu = ee,
        su = pe,
        fu = function () {
          return cu.Date.now();
        },
        du = function (e) {
          if ("number" == typeof e) return e;
          if (ou(e)) return NaN;
          if (ru(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = ru(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = nu(e);
          var n = lu.test(e);
          return n || iu.test(e)
            ? uu(e.slice(2), n ? 2 : 8)
            : au.test(e)
            ? NaN
            : +e;
        },
        pu = Math.max,
        vu = Math.min;
      var mu = function (e, t, n) {
          var r,
            o,
            a,
            l,
            i,
            u,
            c = 0,
            s = !1,
            f = !1,
            d = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          function p(t) {
            var n = r,
              a = o;
            return (r = o = void 0), (c = t), (l = e.apply(a, n));
          }
          function v(e) {
            return (c = e), (i = setTimeout(g, t)), s ? p(e) : l;
          }
          function m(e) {
            var n = e - u;
            return void 0 === u || n >= t || n < 0 || (f && e - c >= a);
          }
          function g() {
            var e = fu();
            if (m(e)) return h(e);
            i = setTimeout(
              g,
              (function (e) {
                var n = t - (e - u);
                return f ? vu(n, a - (e - c)) : n;
              })(e)
            );
          }
          function h(e) {
            return (i = void 0), d && r ? p(e) : ((r = o = void 0), l);
          }
          function y() {
            var e = fu(),
              n = m(e);
            if (((r = arguments), (o = this), (u = e), n)) {
              if (void 0 === i) return v(u);
              if (f) return clearTimeout(i), (i = setTimeout(g, t)), p(u);
            }
            return void 0 === i && (i = setTimeout(g, t)), l;
          }
          return (
            (t = du(t) || 0),
            su(n) &&
              ((s = !!n.leading),
              (a = (f = "maxWait" in n) ? pu(du(n.maxWait) || 0, t) : a),
              (d = "trailing" in n ? !!n.trailing : d)),
            (y.cancel = function () {
              void 0 !== i && clearTimeout(i),
                (c = 0),
                (r = u = o = i = void 0);
            }),
            (y.flush = function () {
              return void 0 === i ? l : h(fu());
            }),
            y
          );
        },
        gu = {
          debounceTime: 0,
          config: {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0,
          },
        };
      function hu(t, n) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : gu,
          o = (0, e.useRef)(null);
        (0, e.useEffect)(
          function () {
            if (n && "function" == typeof n) {
              var e = r.debounceTime;
              o.current = new MutationObserver(e > 0 ? mu(n, e) : n);
            }
          },
          [n, r]
        ),
          (0, e.useEffect)(
            function () {
              if (t && null != t && t.nodeType) {
                var e = r.config;
                try {
                  o.current.observe(t, e);
                } catch (e) {}
                return function () {
                  o.current.disconnect();
                };
              }
            },
            [t, r]
          );
      }
      function yu(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function bu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? yu(Object(n), !0).forEach(function (t) {
                W(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : yu(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Au = (0, e.forwardRef)(function (n, r) {
        var o = n.trigger,
          a = n.content,
          l = n.placement,
          i = n.attach,
          u = n.showArrow,
          c = n.destroyOnClose,
          s = n.overlayClassName,
          f = n.overlayInnerClassName,
          d = n.overlayStyle,
          p = n.overlayInnerStyle,
          v = n.triggerElement,
          m = n.children,
          g = void 0 === m ? v : m,
          h = n.disabled,
          y = n.zIndex,
          b = n.onScroll,
          A = n.expandAnimation,
          w = n.delay,
          O = n.hideEmptyPopup,
          x = n.popperOptions,
          E = n.updateScrollTop,
          S = xo().classPrefix,
          k = ll(),
          P = k.keepExpand,
          C = k.keepFade,
          j = (function () {
            var t =
                "object" ===
                ("undefined" == typeof window ? "undefined" : q(window)),
              n = (0, e.useCallback)(
                function () {
                  return {
                    width: t ? window.innerWidth : void 0,
                    height: t ? window.innerHeight : void 0,
                  };
                },
                [t]
              ),
              r = Y((0, e.useState)(n()), 2),
              o = r[0],
              a = r[1];
            return (
              (0, e.useEffect)(
                function () {
                  var e = mu(function () {
                    a(n());
                  }, 400);
                  if (t)
                    return (
                      window.addEventListener("resize", e),
                      function () {
                        window.removeEventListener("resize", e), e.cancel();
                      }
                    );
                },
                [n, t]
              ),
              o
            );
          })(),
          _ = j.height,
          T = j.width,
          N = Y(Wa(n, "visible", n.onVisibleChange), 2),
          D = N[0],
          L = N[1],
          R = Y((0, e.useState)(null), 2),
          M = R[0],
          I = R[1],
          z = (0, e.useRef)(null),
          B = (0, e.useRef)(null),
          F = (0, e.useRef)(null),
          U = (0, e.useRef)(null),
          V = (0, e.useRef)(null),
          X = Y(
            (0, e.useMemo)(
              function () {
                return Array.isArray(w) ? w : [w, w];
              },
              [w]
            ),
            2
          ),
          Q = X[0],
          K = void 0 === Q ? 0 : Q,
          G = X[1],
          J = void 0 === G ? 0 : G,
          Z = (0, e.useMemo)(
            function () {
              return !(O && !a) && (D || M);
            },
            [O, a, D, M]
          ),
          $ = (0, e.useMemo)(
            function () {
              return l
                .replace(/-(left|top)$/, "-start")
                .replace(/-(right|bottom)$/, "-end");
            },
            [l]
          ),
          ee = Zi({
            triggerRef: z,
            content: a,
            disabled: h,
            trigger: o,
            visible: D,
            onVisibleChange: L,
          }),
          te = ee.getTriggerNode,
          ne = ee.getPopupProps,
          re = ee.getTriggerDom,
          oe = te(g);
        hu(Gi(z), function () {
          var e, t;
          null === (e = V.current) ||
            void 0 === e ||
            null === (t = e.update) ||
            void 0 === t ||
            t.call(e);
        }),
          (0, e.useEffect)(
            function () {
              var e, t;
              null === (e = V.current) ||
                void 0 === e ||
                null === (t = e.update) ||
                void 0 === t ||
                t.call(e);
            },
            [D, a, _, T]
          ),
          (0, e.useEffect)(
            function () {
              z.current || (z.current = re()), D && (null == E || E(U.current));
            },
            [D, E, re]
          ),
          (V.current = (function (n, r, o) {
            void 0 === o && (o = {});
            var a = e.useRef(null),
              l = {
                onFirstUpdate: o.onFirstUpdate,
                placement: o.placement || "bottom",
                strategy: o.strategy || "absolute",
                modifiers: o.modifiers || Qi,
              },
              i = e.useState({
                styles: {
                  popper: { position: l.strategy, left: "0", top: "0" },
                  arrow: { position: "absolute" },
                },
                attributes: {},
              }),
              u = i[0],
              c = i[1],
              s = e.useMemo(function () {
                return {
                  name: "updateState",
                  enabled: !0,
                  phase: "write",
                  fn: function (e) {
                    var n = e.state,
                      r = Object.keys(n.elements);
                    t.flushSync(function () {
                      c({
                        styles: Xi(
                          r.map(function (e) {
                            return [e, n.styles[e] || {}];
                          })
                        ),
                        attributes: Xi(
                          r.map(function (e) {
                            return [e, n.attributes[e]];
                          })
                        ),
                      });
                    });
                  },
                  requires: ["computeStyles"],
                };
              }, []),
              f = e.useMemo(
                function () {
                  var e = {
                    onFirstUpdate: l.onFirstUpdate,
                    placement: l.placement,
                    strategy: l.strategy,
                    modifiers: [].concat(l.modifiers, [
                      s,
                      { name: "applyStyles", enabled: !1 },
                    ]),
                  };
                  return Vi()(a.current, e)
                    ? a.current || e
                    : ((a.current = e), e);
                },
                [l.onFirstUpdate, l.placement, l.strategy, l.modifiers, s]
              ),
              d = e.useRef();
            return (
              Yi(
                function () {
                  d.current && d.current.setOptions(f);
                },
                [f]
              ),
              Yi(
                function () {
                  if (null != n && null != r) {
                    var e = (o.createPopper || Hi)(n, r, f);
                    return (
                      (d.current = e),
                      function () {
                        e.destroy(), (d.current = null);
                      }
                    );
                  }
                },
                [n, r, o.createPopper]
              ),
              {
                state: d.current ? d.current.state : null,
                styles: u.styles,
                attributes: u.attributes,
                update: d.current ? d.current.update : null,
                forceUpdate: d.current ? d.current.forceUpdate : null,
              }
            );
          })(Gi(z), M, bu({ placement: $ }, x)));
        var ae = V.current,
          le = ae.styles,
          ie = ae.attributes;
        function ue(e) {
          return Gi(z) && B.current && "function" == typeof e
            ? bu({}, e(Gi(z), B.current))
            : bu({}, e);
        }
        var ce =
          Z &&
          e.createElement(
            Nl,
            {
              appear: !0,
              in: D,
              timeout: { appear: 180 + K, enter: 180 + K, exit: 180 + J },
              nodeRef: F,
              unmountOnExit: c,
              onEnter: function () {
                !c && M && (M.style.display = "block");
              },
              onExited: function () {
                !c && M && (M.style.display = "none");
              },
            },
            e.createElement(
              Eo,
              { triggerNode: Gi(z), attach: i, ref: F },
              e.createElement(
                Nl,
                bu(
                  {
                    appear: !0,
                    timeout: { appear: K, enter: K, exit: J },
                    in: D,
                    nodeRef: B,
                  },
                  (function (e) {
                    var t = e.classPrefix,
                      n = e.expandAnimation;
                    if (!e.fadeAnimation) return {};
                    var r = "".concat(
                      t,
                      n ? "-popup--animation-expand" : "-popup--animation"
                    );
                    return {
                      classNames: {
                        appear: ""
                          .concat(r, "-enter ")
                          .concat(r, "-enter-active"),
                        appearActive: "".concat(r, "-enter-active"),
                        appearDone: ""
                          .concat(r, "-enter-active ")
                          .concat(r, "-enter-to"),
                        enter: ""
                          .concat(r, "-enter ")
                          .concat(r, "-enter-active"),
                        enterActive: "".concat(r, "-enter-active"),
                        enterDone: ""
                          .concat(r, "-enter-active ")
                          .concat(r, "-enter-to"),
                        exit: ""
                          .concat(r, "-leave ")
                          .concat(r, "-leave-active"),
                        exitActive: "".concat(r, "-leave-active"),
                        exitDone: ""
                          .concat(r, "-leave-active ")
                          .concat(r, "-leave-to"),
                      },
                    };
                  })({
                    classPrefix: S,
                    fadeAnimation: C,
                    expandAnimation: A && P,
                  })
                ),
                e.createElement(
                  "div",
                  bu(
                    bu(
                      {
                        ref: function (e) {
                          e && ((B.current = e), I(e));
                        },
                        style: bu(bu({}, le.popper), {}, { zIndex: y }, ue(d)),
                        className: H()("".concat(S, "-popup"), s),
                      },
                      ie.popper
                    ),
                    ne()
                  ),
                  e.createElement(
                    "div",
                    {
                      ref: U,
                      className: H()(
                        "".concat(S, "-popup__content"),
                        W({}, "".concat(S, "-popup__content--arrow"), u),
                        f
                      ),
                      style: ue(p),
                      onScroll: function (e) {
                        return null == b ? void 0 : b({ e });
                      },
                    },
                    u
                      ? e.createElement("div", {
                          style: le.arrow,
                          className: "".concat(S, "-popup__arrow"),
                        })
                      : null,
                    a
                  )
                )
              )
            )
          );
        return (
          (0, e.useImperativeHandle)(r, function () {
            return {
              getPopper: function () {
                return V.current;
              },
              getPopupElement: function () {
                return B.current;
              },
              getPortalElement: function () {
                return F.current;
              },
            };
          }),
          e.createElement(e.Fragment, null, oe, ce)
        );
      });
      (Au.displayName = "Popup"),
        (Au.defaultProps = {
          attach: "body",
          destroyOnClose: !1,
          hideEmptyPopup: !1,
          placement: "top",
          showArrow: !1,
          trigger: "hover",
        });
      var wu = Au,
        Ou = nn,
        xu = ca,
        Eu = vn,
        Su = pe,
        ku = fa;
      var Pu = function (e, t, n, r) {
        if (!Su(e)) return e;
        for (
          var o = -1, a = (t = xu(t, e)).length, l = a - 1, i = e;
          null != i && ++o < a;

        ) {
          var u = ku(t[o]),
            c = n;
          if ("__proto__" === u || "constructor" === u || "prototype" === u)
            return e;
          if (o != l) {
            var s = i[u];
            void 0 === (c = r ? r(s, u, i) : void 0) &&
              (c = Su(s) ? s : Eu(t[o + 1]) ? [] : {});
          }
          Ou(i, u, c), (i = i[u]);
        }
        return e;
      };
      var Cu = function (e, t) {
          for (var n = -1, r = t.length, o = e.length; ++n < r; )
            e[o + n] = t[n];
          return e;
        },
        ju = fn,
        _u = dn,
        Tu = te ? te.isConcatSpreadable : void 0;
      var Nu = Cu,
        Du = function (e) {
          return _u(e) || ju(e) || !!(Tu && e && e[Tu]);
        };
      var Lu = function e(t, n, r, o, a) {
          var l = -1,
            i = t.length;
          for (r || (r = Du), a || (a = []); ++l < i; ) {
            var u = t[l];
            n > 0 && r(u)
              ? n > 1
                ? e(u, n - 1, r, o, a)
                : Nu(a, u)
              : o || (a[a.length] = u);
          }
          return a;
        },
        Ru = Lu;
      var Mu = function (e) {
          return (null == e ? 0 : e.length) ? Ru(e, 1) : [];
        },
        Iu = fr,
        zu = gr;
      var Bu = va,
        Fu = Pu,
        Uu = ca;
      var Hu = ca,
        Wu = fn,
        Vu = dn,
        Xu = vn,
        Yu = _t,
        Qu = fa;
      var Ku = function (e, t) {
          return null != e && t in Object(e);
        },
        Gu = function (e, t, n) {
          for (var r = -1, o = (t = Hu(t, e)).length, a = !1; ++r < o; ) {
            var l = Qu(t[r]);
            if (!(a = null != e && n(e, l))) break;
            e = e[l];
          }
          return a || ++r != o
            ? a
            : !!(o = null == e ? 0 : e.length) &&
                Yu(o) &&
                Xu(l, o) &&
                (Vu(e) || Wu(e));
        };
      var qu = function (e, t, n) {
          for (var r = -1, o = t.length, a = {}; ++r < o; ) {
            var l = t[r],
              i = Bu(e, l);
            n(i, l) && Fu(a, Uu(l, e), i);
          }
          return a;
        },
        Ju = function (e, t) {
          return null != e && Gu(e, t, Ku);
        };
      var Zu = function (e, t) {
          return qu(e, t, function (t, n) {
            return Ju(e, n);
          });
        },
        $u = (function (e) {
          return zu(Iu(e, void 0, Mu), e + "");
        })(function (e, t) {
          return null == e ? {} : Zu(e, t);
        });
      function ec(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function tc(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : void 0 !== n.g
        ? n.g
        : "undefined" != typeof self && self;
      var nc,
        rc = { exports: {} };
      (nc = rc),
        (function () {
          var e = {}.hasOwnProperty;
          function t() {
            for (var n = [], r = 0; r < arguments.length; r++) {
              var o = arguments[r];
              if (o) {
                var a = typeof o;
                if ("string" === a || "number" === a) n.push(o);
                else if (Array.isArray(o)) {
                  if (o.length) {
                    var l = t.apply(null, o);
                    l && n.push(l);
                  }
                } else if ("object" === a)
                  if (o.toString === Object.prototype.toString)
                    for (var i in o) e.call(o, i) && o[i] && n.push(i);
                  else n.push(o.toString());
              }
            }
            return n.join(" ");
          }
          nc.exports
            ? ((t.default = t), (nc.exports = t))
            : (window.classNames = t);
        })();
      var oc = rc.exports,
        ac = (0, e.createContext)({ classPrefix: "t", locale: "zh-CN" });
      function lc() {
        var t = (0, e.useContext)(ac).classPrefix;
        return (0, e.useMemo)(
          function () {
            return {
              SIZE: {
                default: "",
                xs: "".concat(t, "-size-xs"),
                small: "".concat(t, "-size-s"),
                medium: "".concat(t, "-size-m"),
                large: "".concat(t, "-size-l"),
                xl: "".concat(t, "-size-xl"),
                block: "".concat(t, "-size-full-width"),
              },
              STATUS: {
                loading: "".concat(t, "-is-loading"),
                disabled: "".concat(t, "-is-disabled"),
                focused: "".concat(t, "-is-focused"),
                success: "".concat(t, "-is-success"),
                error: "".concat(t, "-is-error"),
                warning: "".concat(t, "-is-warning"),
                selected: "".concat(t, "-is-selected"),
                active: "".concat(t, "-is-active"),
                checked: "".concat(t, "-is-checked"),
                current: "".concat(t, "-is-current"),
                hidden: "".concat(t, "-is-hidden"),
                visible: "".concat(t, "-is-visible"),
                expanded: "".concat(t, "-is-expanded"),
                indeterminate: "".concat(t, "-is-indeterminate"),
              },
            };
          },
          [t]
        );
      }
      var ic = ["icon", "id", "className", "size", "style"];
      function uc(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function cc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? uc(Object(n), !0).forEach(function (t) {
                tc(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : uc(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function sc(t, n, r) {
        return (0, e.createElement)(
          t.tag,
          cc(cc({ key: n }, t.attrs), r),
          (t.children || []).map(function (e, r) {
            return sc(e, "".concat(n, "-").concat(t.tag, "-").concat(r));
          })
        );
      }
      var fc = (0, e.forwardRef)(function (e, t) {
        var n = e.icon,
          r = e.id,
          o = e.className,
          a = e.size,
          l = e.style,
          i = ec(e, ic),
          u = (function (e) {
            var t = lc().SIZE;
            return void 0 === e
              ? {}
              : e in t
              ? { className: t[e], style: {} }
              : { className: "", style: { fontSize: e } };
          })(a),
          c = u.className,
          s = u.style,
          f = oc("t-icon", "t-icon-".concat(r), o, c);
        return sc(
          n,
          "".concat(r),
          cc({ ref: t, className: f, style: cc(cc({}, l), s) }, i)
        );
      });
      function dc(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function pc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? dc(Object(n), !0).forEach(function (t) {
                tc(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : dc(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var vc = {
          tag: "svg",
          attrs: {
            fill: "none",
            viewBox: "0 0 16 16",
            width: "1em",
            height: "1em",
          },
          children: [
            {
              tag: "path",
              attrs: {
                fill: "currentColor",
                d: "M10.88 8a2.88 2.88 0 11-5.76 0 2.88 2.88 0 015.76 0zm-1 0a1.88 1.88 0 10-3.76 0 1.88 1.88 0 003.76 0z",
                fillOpacity: 0.9,
              },
            },
            {
              tag: "path",
              attrs: {
                fill: "currentColor",
                d: "M1.12 8.23A7.72 7.72 0 008 12.5c2.9 0 5.54-1.63 6.88-4.27L15 8l-.12-.23A7.73 7.73 0 008 3.5a7.74 7.74 0 00-6.88 4.27L1 8l.12.23zM8 11.5A6.73 6.73 0 012.11 8 6.73 6.73 0 0113.9 8 6.74 6.74 0 018 11.5z",
                fillOpacity: 0.9,
              },
            },
          ],
        },
        mc = (0, e.forwardRef)(function (t, n) {
          return (0,
          e.createElement)(fc, pc(pc({}, t), {}, { id: "browse", ref: n, icon: vc }));
        });
      function gc(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function hc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? gc(Object(n), !0).forEach(function (t) {
                tc(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : gc(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      mc.displayName = "BrowseIcon";
      var yc = {
          tag: "svg",
          attrs: {
            fill: "none",
            viewBox: "0 0 16 16",
            width: "1em",
            height: "1em",
          },
          children: [
            {
              tag: "path",
              attrs: {
                fill: "currentColor",
                d: "M10.77 11.98l1.38 1.37.7-.7-9.7-9.7-.7.7 1.2 1.21a7.9 7.9 0 00-2.53 2.91L1 8l.12.23a7.72 7.72 0 009.65 3.75zM10 11.2A6.67 6.67 0 012.11 8c.56-1 1.34-1.83 2.26-2.43l1.08 1.09a2.88 2.88 0 003.9 3.9l.64.64zM6.21 7.42l2.37 2.37a1.88 1.88 0 01-2.37-2.37zM14.88 8.23L15 8l-.12-.23a7.73 7.73 0 00-9.35-3.86l.8.8A6.7 6.7 0 0113.9 8a6.87 6.87 0 01-2.02 2.26l.7.7a7.9 7.9 0 002.3-2.73z",
                fillOpacity: 0.9,
              },
            },
            {
              tag: "path",
              attrs: {
                fill: "currentColor",
                d: "M10.88 8c0 .37-.07.73-.2 1.06l-.82-.82.02-.24a1.88 1.88 0 00-2.12-1.86l-.82-.82A2.87 2.87 0 0110.88 8z",
                fillOpacity: 0.9,
              },
            },
          ],
        },
        bc = (0, e.forwardRef)(function (t, n) {
          return (0,
          e.createElement)(fc, hc(hc({}, t), {}, { id: "browse-off", ref: n, icon: yc }));
        });
      function Ac(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function wc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ac(Object(n), !0).forEach(function (t) {
                tc(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ac(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      bc.displayName = "BrowseOffIcon";
      var Oc = {
          tag: "svg",
          attrs: {
            fill: "none",
            viewBox: "0 0 16 16",
            width: "1em",
            height: "1em",
          },
          children: [
            {
              tag: "path",
              attrs: {
                fill: "currentColor",
                d: "M15 8A7 7 0 101 8a7 7 0 0014 0zM5.67 4.95L8 7.29l2.33-2.34.7.7L8.7 8l2.34 2.35-.71.7L8 8.71l-2.33 2.34-.7-.7L7.3 8 4.96 5.65l.71-.7z",
                fillOpacity: 0.9,
              },
            },
          ],
        },
        xc = (0, e.forwardRef)(function (t, n) {
          return (0,
          e.createElement)(fc, wc(wc({}, t), {}, { id: "close-circle-filled", ref: n, icon: Oc }));
        });
      xc.displayName = "CloseCircleFilledIcon";
      var Ec = Q ? e.useLayoutEffect : e.useEffect;
      function Sc(e) {
        var t = xo().icon,
          n = {};
        return (
          Object.keys(e).forEach(function (r) {
            n[r] = (null == t ? void 0 : t[r]) || e[r];
          }),
          n
        );
      }
      var kc = ["separate", "children", "className"];
      function Pc(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var Cc = (0, e.forwardRef)(function (t, n) {
        var r = xo().classPrefix,
          o = t.separate,
          a = t.children,
          l = t.className,
          i = Mo(t, kc);
        return e.createElement(
          "div",
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Pc(Object(n), !0).forEach(function (t) {
                    W(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : Pc(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          })(
            {
              ref: n,
              className: H()(
                "".concat(r, "-input-group"),
                l,
                W({}, "".concat(r, "-input-group--separate"), o)
              ),
            },
            i
          ),
          a
        );
      });
      Cc.displayName = "InputGroup";
      function jc(e, t, n) {
        return "function" == typeof e ? e(t) : null != e ? e : n;
      }
      var _c = function (e, t) {};
      function Tc(t) {
        var n = (0, e.useMemo)(
            function () {
              var e,
                n = t.maxlength,
                r = t.maxcharacter,
                o = t.value;
              if ("number" == typeof o) return String(o);
              if (
                (n &&
                  r &&
                  _c("Input", "Pick one of maxlength and maxcharacter please."),
                n)
              ) {
                var a =
                  null != o && o.length
                    ? ko(null != (e = o) ? e : "").length
                    : 0;
                return "".concat(a, "/").concat(n);
              }
              return r ? "".concat(Po(o || ""), "/").concat(r) : "";
            },
            [t.maxcharacter, t.maxlength, t.value]
          ),
          r = (0, e.useMemo)(
            function () {
              if (n) {
                var e = Y(n.split("/"), 2),
                  t = e[0],
                  r = e[1];
                return Number(t) > Number(r) ? "error" : "";
              }
              return "";
            },
            [n]
          ),
          o = (0, e.useMemo)(
            function () {
              return t.status || r;
            },
            [t.status, r]
          );
        return (
          (0, e.useEffect)(
            function () {
              var e;
              null === (e = t.onValidate) ||
                void 0 === e ||
                e.call(t, { error: r ? "exceed-maximum" : void 0 });
            },
            [r]
          ),
          {
            tStatus: o,
            limitNumber: n,
            getValueByLimitNumber: function (e) {
              var n,
                r,
                o,
                a = t.allowInputOverMax,
                l = t.maxlength,
                i = t.maxcharacter;
              if ((!l && !i) || a || !e) return e;
              if (l)
                return (
                  (n = e),
                  (r = l),
                  ko(null != o ? o : "").slice().length === r
                    ? o || ""
                    : ko(null != n ? n : "")
                        .slice(0, r)
                        .join("")
                );
              if (i) {
                var u = Po(e, i);
                if ("object" === q(u)) return u.characters;
              }
            },
          }
        );
      }
      var Nc = [
        "type",
        "autoWidth",
        "placeholder",
        "disabled",
        "status",
        "size",
        "className",
        "inputClass",
        "style",
        "prefixIcon",
        "suffixIcon",
        "clearable",
        "tips",
        "align",
        "maxlength",
        "maxcharacter",
        "showClearIconOnEmpty",
        "autofocus",
        "autocomplete",
        "readonly",
        "label",
        "suffix",
        "showInput",
        "keepWrapperWidth",
        "showLimitNumber",
        "allowInputOverMax",
        "format",
        "onClick",
        "onClear",
        "onEnter",
        "onKeydown",
        "onKeyup",
        "onKeypress",
        "onFocus",
        "onBlur",
        "onPaste",
        "onMouseenter",
        "onMouseleave",
        "onWheel",
        "onCompositionstart",
        "onCompositionend",
        "onValidate",
        "onChange",
      ];
      function Dc(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var Lc = function (t, n, r) {
          var o = jc(r),
            a = r ? "".concat(t, "-input__").concat(n, "-icon") : "";
          return o
            ? e.createElement(
                "span",
                {
                  className: "".concat(t, "-input__").concat(n, " ").concat(a),
                },
                o
              )
            : null;
        },
        Rc = Ga(
          function (t, n) {
            var r,
              o = Y(Ya("input"), 2),
              a = o[0],
              l = o[1],
              i = Sc({
                BrowseIcon: mc,
                BrowseOffIcon: bc,
                CloseCircleFilledIcon: xc,
              }),
              u = i.BrowseIcon,
              c = i.BrowseOffIcon,
              s = i.CloseCircleFilledIcon,
              f = t.type,
              d = t.autoWidth,
              p = t.placeholder,
              v = void 0 === p ? l(a.placeholder) : p,
              m = t.disabled,
              g = t.status,
              h = t.size,
              y = t.className,
              b = t.inputClass,
              A = t.style,
              w = t.prefixIcon,
              O = t.suffixIcon,
              x = t.clearable,
              E = t.tips,
              S = t.align,
              k = t.maxlength,
              P = t.maxcharacter,
              C = t.showClearIconOnEmpty,
              j = t.autofocus,
              _ = t.autocomplete,
              T = t.readonly,
              N = t.label,
              D = t.suffix,
              L = t.showInput,
              R = void 0 === L || L,
              M = t.keepWrapperWidth,
              I = t.showLimitNumber,
              z = t.allowInputOverMax,
              B = t.format,
              F = t.onClick,
              U = t.onClear,
              V = t.onEnter,
              X = t.onKeydown,
              Q = t.onKeyup,
              K = t.onKeypress,
              G = t.onFocus,
              q = t.onBlur,
              J = t.onPaste,
              Z = t.onMouseenter,
              $ = t.onMouseleave,
              ee = t.onWheel,
              te = t.onCompositionstart,
              ne = t.onCompositionend,
              re = t.onValidate,
              oe = t.onChange,
              ae = Mo(t, Nc),
              le = Y(Wa(t, "value", oe), 2),
              ie = le[0],
              ue = le[1],
              ce = Tc({
                value: void 0 === ie ? void 0 : String(ie),
                status: g,
                maxlength: k,
                maxcharacter: P,
                allowInputOverMax: z,
                onValidate: re,
              }),
              se = ce.limitNumber,
              fe = ce.getValueByLimitNumber,
              de = ce.tStatus,
              pe = xo().classPrefix,
              ve = (0, e.useRef)(!1),
              me = (0, e.useRef)(),
              ge = (0, e.useRef)(),
              ye = (0, e.useRef)(),
              be = Y((0, e.useState)(!1), 2),
              Ae = be[0],
              we = be[1],
              Oe = Y((0, e.useState)(!1), 2),
              xe = Oe[0],
              Ee = Oe[1],
              Se = Y((0, e.useState)(f), 2),
              ke = Se[0],
              Pe = Se[1],
              Ce = Y((0, e.useState)(""), 2),
              je = Ce[0],
              _e = Ce[1],
              Te = ((x && ie && !m) || C) && Ae,
              Ne = Lc(pe, "prefix", jc(w)),
              De = O;
            Te &&
              (De = e.createElement(s, {
                className: "".concat(pe, "-input__suffix-clear"),
                onClick: function (e) {
                  null == ue || ue("", { e }), null == U || U({ e });
                },
              })),
              "password" === f &&
                void 0 === O &&
                ("password" === ke
                  ? (De = e.createElement(c, {
                      className: "".concat(pe, "-input__suffix-clear"),
                      onClick: We,
                    }))
                  : "text" === ke &&
                    (De = e.createElement(u, {
                      className: "".concat(pe, "-input__suffix-clear"),
                      onClick: We,
                    })));
            var Le = Lc(pe, "suffix", jc(De)),
              Re = he(N) ? N() : N,
              Me = he(D) ? D() : D,
              Ie =
                se && I
                  ? e.createElement(
                      "div",
                      { className: "".concat(pe, "-input__limit-number") },
                      se
                    )
                  : null,
              ze = function () {
                var e;
                d &&
                  me.current &&
                  (me.current.style.width = "".concat(
                    null === (e = ge.current) || void 0 === e
                      ? void 0
                      : e.offsetWidth,
                    "px"
                  ));
              };
            Ec(
              function () {
                requestAnimationFrame(function () {
                  ze();
                });
              },
              [d, ie, v, me]
            ),
              (0, e.useEffect)(
                function () {
                  var e = null;
                  if (void 0 !== window.ResizeObserver && me.current)
                    return (
                      (e = new window.ResizeObserver(function () {
                        ze();
                      })).observe(me.current),
                      function () {
                        var t, n;
                        null === (t = (n = e).disconnect) ||
                          void 0 === t ||
                          t.call(n),
                          (e = null);
                      }
                    );
                },
                [me]
              ),
              (0, e.useEffect)(
                function () {
                  Pe(f);
                },
                [f]
              );
            var Be = ve.current ? je : null != ie ? ie : "",
              Fe = B && !xe ? B(Be) : Be,
              Ue = e.createElement("input", {
                ref: me,
                placeholder: v,
                type: ke,
                className: "".concat(pe, "-input__inner"),
                value: Fe,
                readOnly: T,
                disabled: m,
                autoComplete: null != _ ? _ : a.autocomplete || void 0,
                autoFocus: j,
                onChange: Ve,
                onKeyDown: function (e) {
                  var t = e.key,
                    n = e.currentTarget.value;
                  "Enter" === t && (null == V || V(n, { e })),
                    null == X || X(n, { e });
                },
                onKeyUp: function (e) {
                  var t = e.currentTarget.value;
                  null == Q || Q(t, { e });
                },
                onKeyPress: function (e) {
                  var t = e.currentTarget.value;
                  null == K || K(t, { e });
                },
                onCompositionStart: function (e) {
                  ve.current = !0;
                  var t = e.currentTarget.value;
                  null == te || te(t, { e });
                },
                onCompositionEnd: function (e) {
                  var t = e.currentTarget.value;
                  ve.current && ((ve.current = !1), Ve(e));
                  null == ne || ne(t, { e });
                },
                onFocus: function (e) {
                  if (T) return;
                  var t = e.currentTarget.value;
                  null == G || G(t, { e }), Ee(!0);
                },
                onBlur: function (e) {
                  if (T) return;
                  var t = e.currentTarget.value;
                  null == q || q(t, { e }), Ee(!1);
                },
                onPaste: function (e) {
                  var t = e.clipboardData,
                    n = null == t ? void 0 : t.getData("text/plain");
                  null == J || J({ e, pasteValue: n });
                },
              }),
              He = e.createElement(
                "div",
                {
                  className: H()(
                    b,
                    "".concat(pe, "-input"),
                    ((r = {}),
                    W(r, "".concat(pe, "-is-readonly"), T),
                    W(r, "".concat(pe, "-is-disabled"), m),
                    W(r, "".concat(pe, "-is-focused"), xe),
                    W(r, "".concat(pe, "-size-s"), "small" === h),
                    W(r, "".concat(pe, "-size-l"), "large" === h),
                    W(r, "".concat(pe, "-size-m"), "medium" === h),
                    W(r, "".concat(pe, "-align-").concat(S), S),
                    W(r, "".concat(pe, "-is-").concat(de), de),
                    W(r, "".concat(pe, "-input--prefix"), w || Re),
                    W(r, "".concat(pe, "-input--suffix"), Le || Me),
                    W(r, "".concat(pe, "-input--focused"), xe),
                    r)
                  ),
                  onMouseEnter: function (e) {
                    we(!0), null == Z || Z({ e });
                  },
                  onMouseLeave: function (e) {
                    we(!1), null == $ || $({ e });
                  },
                  onWheel: function (e) {
                    return null == ee ? void 0 : ee({ e });
                  },
                  onClick: function (e) {
                    return null == F ? void 0 : F({ e });
                  },
                },
                Ne,
                Re
                  ? e.createElement(
                      "div",
                      { className: "".concat(pe, "-input__prefix") },
                      Re
                    )
                  : null,
                R && Ue,
                d &&
                  e.createElement(
                    "span",
                    { ref: ge, className: "".concat(pe, "-input__input-pre") },
                    ie || v
                  ),
                Me || Ie
                  ? e.createElement(
                      "div",
                      { className: "".concat(pe, "-input__suffix") },
                      Me,
                      Ie
                    )
                  : null,
                Le
              );
            function We() {
              Pe("password" === ke ? "text" : "password");
            }
            function Ve(e) {
              var n = e.currentTarget.value;
              ve.current
                ? _e(n)
                : ("number" !== t.type && (n = fe(n)), _e(n), ue(n, { e }));
            }
            return (
              (0, e.useImperativeHandle)(n, function () {
                return {
                  currentElement: ye.current,
                  inputElement: me.current,
                  focus: function () {
                    var e;
                    return null === (e = me.current) || void 0 === e
                      ? void 0
                      : e.focus();
                  },
                  blur: function () {
                    var e;
                    return null === (e = me.current) || void 0 === e
                      ? void 0
                      : e.blur();
                  },
                  select: function () {
                    var e;
                    return null === (e = me.current) || void 0 === e
                      ? void 0
                      : e.select();
                  },
                };
              }),
              e.createElement(
                "div",
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? Dc(Object(n), !0).forEach(function (t) {
                          W(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : Dc(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t)
                          );
                        });
                  }
                  return e;
                })(
                  {
                    ref: ye,
                    style: A,
                    className: H()(
                      "".concat(pe, "-input__wrap"),
                      y,
                      W({}, "".concat(pe, "-input--auto-width"), d && !M)
                    ),
                  },
                  ae
                ),
                He,
                E &&
                  e.createElement(
                    "div",
                    {
                      className: H()(
                        "".concat(pe, "-input__tips"),
                        "".concat(pe, "-input__tips--").concat(de || "default")
                      ),
                    },
                    E
                  )
              )
            );
          },
          { Group: Cc }
        );
      (Rc.displayName = "Input"),
        (Rc.defaultProps = {
          align: "left",
          allowInputOverMax: !1,
          autoWidth: !1,
          autocomplete: void 0,
          autofocus: !1,
          clearable: !1,
          placeholder: void 0,
          readonly: !1,
          showClearIconOnEmpty: !1,
          showLimitNumber: !1,
          size: "medium",
          type: "text",
        });
      var Mc = Rc;
      function Ic(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function zc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ic(Object(n), !0).forEach(function (t) {
                W(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ic(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Bc = [
          "status",
          "clearable",
          "disabled",
          "label",
          "placeholder",
          "readonly",
          "suffix",
          "suffixIcon",
          "onPaste",
          "onEnter",
          "onMouseenter",
          "onMouseleave",
        ],
        Fc = { label: "label", value: "value" };
      function Uc(e, t) {
        var n = t || Fc;
        return pe(e) ? e[n.label] : e;
      }
      var Hc = null;
      function Wc(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Vc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Wc(Object(n), !0).forEach(function (t) {
                tc(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Wc(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Xc = {
          tag: "svg",
          attrs: {
            fill: "none",
            viewBox: "0 0 16 16",
            width: "1em",
            height: "1em",
          },
          children: [
            {
              tag: "path",
              attrs: {
                fill: "currentColor",
                d: "M8 8.92L11.08 12l.92-.92L8.92 8 12 4.92 11.08 4 8 7.08 4.92 4 4 4.92 7.08 8 4 11.08l.92.92L8 8.92z",
                fillOpacity: 0.9,
              },
            },
          ],
        },
        Yc = (0, e.forwardRef)(function (t, n) {
          return (0,
          e.createElement)(fc, Vc(Vc({}, t), {}, { id: "close", ref: n, icon: Xc }));
        });
      Yc.displayName = "CloseIcon";
      var Qc = [
        "content",
        "onClick",
        "disabled",
        "children",
        "className",
        "size",
        "onChange",
      ];
      function Kc(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Gc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Kc(Object(n), !0).forEach(function (t) {
                W(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Kc(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var qc = (0, e.forwardRef)(function (t, n) {
        var r,
          o = t.content,
          a = t.onClick,
          l = void 0 === a ? Ha : a,
          i = t.disabled,
          u = t.children,
          c = t.className,
          s = t.size,
          f = t.onChange,
          d = Mo(t, Qc),
          p = Y(Wa(t, "checked", f), 2),
          v = p[0],
          m = p[1],
          g = xo().classPrefix,
          h = "".concat(g, "-tag"),
          y = {
            large: "".concat(g, "-size-l"),
            small: "".concat(g, "-size-s"),
          },
          b = H()(
            h,
            y[s],
            c,
            "".concat(h, "--default"),
            "".concat(h, "--check"),
            "".concat(h, "--").concat(s),
            (W((r = {}), "".concat(h, "--disabled"), i),
            W(r, "".concat(h, "--checked"), v),
            r)
          );
        return e.createElement(
          "span",
          Gc(
            Gc({ ref: n, className: b }, d),
            {},
            {
              onClick: function (e) {
                i || (m(!v), l({ e }));
              },
            }
          ),
          u || o
        );
      });
      (qc.displayName = "CheckTag"),
        (qc.defaultProps = { defaultChecked: void 0, size: "medium" });
      var Jc = [
        "theme",
        "size",
        "shape",
        "variant",
        "closable",
        "maxWidth",
        "icon",
        "content",
        "onClick",
        "onClose",
        "className",
        "style",
        "disabled",
        "children",
      ];
      function Zc(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function $c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Zc(Object(n), !0).forEach(function (t) {
                W(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Zc(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var es = Ga(
        function (t, n) {
          var r,
            o = t.theme,
            a = t.size,
            l = t.shape,
            i = t.variant,
            u = t.closable,
            c = t.maxWidth,
            s = t.icon,
            f = t.content,
            d = t.onClick,
            p = void 0 === d ? Ha : d,
            v = t.onClose,
            m = void 0 === v ? Ha : v,
            g = t.className,
            h = t.style,
            y = t.disabled,
            b = t.children,
            A = Mo(t, Jc),
            w = xo().classPrefix,
            O = Sc({ CloseIcon: Yc }).CloseIcon,
            x = "".concat(w, "-tag"),
            E = {
              large: "".concat(w, "-size-l"),
              small: "".concat(w, "-size-s"),
            },
            S = H()(
              x,
              "".concat(x, "--").concat(o),
              "".concat(x, "--").concat(i),
              "".concat(x, "--").concat(a),
              "".concat(x, "--").concat(l),
              (W((r = {}), "".concat(x, "--ellipsis"), !!c),
              W(r, "".concat(x, "--disabled"), y),
              r),
              E[a],
              g
            ),
            k = e.createElement(O, {
              onClick: function (e) {
                y || m({ e });
              },
              className: "".concat(x, "__icon-close"),
            });
          return e.createElement(
            "span",
            $c(
              {
                ref: n,
                className: S,
                onClick: function (e) {
                  y || p({ e });
                },
                style: c
                  ? $c(
                      {
                        maxWidth: "number" == typeof c ? "".concat(c, "px") : c,
                      },
                      h
                    )
                  : h,
              },
              A
            ),
            s,
            e.createElement(
              "span",
              { className: c ? "".concat(x, "--text") : void 0 },
              b || f
            ),
            u && k
          );
        },
        { CheckTag: qc }
      );
      (es.displayName = "Tag"),
        (es.defaultProps = {
          closable: !1,
          icon: void 0,
          shape: "square",
          size: "medium",
          theme: "default",
          variant: "dark",
        });
      var ts = es;
      function ns(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function rs(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ns(Object(n), !0).forEach(function (t) {
                W(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ns(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function os(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function as(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? os(Object(n), !0).forEach(function (t) {
                W(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : os(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var ls = (0, e.forwardRef)(function (t, n) {
        var r,
          o = xo().classPrefix,
          a = Sc({ CloseCircleFilledIcon: xc }).CloseCircleFilledIcon,
          l = t.excessTagsDisplayType,
          i = t.autoWidth,
          u = t.readonly,
          c = t.disabled,
          s = t.clearable,
          f = t.placeholder,
          d = t.valueDisplay,
          p = t.label,
          v = t.inputProps,
          m = t.size,
          g = t.tips,
          h = t.status,
          y = t.suffixIcon,
          b = t.suffix,
          A = t.onClick,
          w = t.onPaste,
          O = t.onFocus,
          x = t.onBlur,
          E = Y(Wa(t, "inputValue", t.onInputChange), 2),
          S = E[0],
          k = E[1],
          P = (function (t) {
            var n = t.readonly,
              r = t.disabled,
              o = t.onMouseenter,
              a = t.onMouseleave,
              l = Y((0, e.useState)(!1), 2),
              i = l[0],
              u = l[1];
            return {
              isHover: i,
              addHover: function (e) {
                n || r || (u(!0), null == o || o(e));
              },
              cancelHover: function (e) {
                n || r || (u(!1), null == a || a(e));
              },
            };
          })(t),
          C = P.isHover,
          j = P.addHover,
          _ = P.cancelHover,
          T = (function (t) {
            var n = t.sortOnDraggable,
              r = t.onDragSort,
              o = t.onDragOverCheck,
              a = Y((0, e.useState)(-1), 2),
              l = a[0],
              i = a[1],
              u = Y((0, e.useState)(null), 2),
              c = u[0],
              s = u[1],
              f = Y((0, e.useState)(null), 2),
              d = (f[0], f[1]),
              p = Y((0, e.useState)({ nodeX: 0, nodeWidth: 0, mouseX: 0 }), 2),
              v = p[0],
              m = p[1],
              g = (0, e.useRef)(r),
              h = (0, e.useCallback)(
                function (e, t, n) {
                  var r, a;
                  if (
                    (e.preventDefault(),
                    l !== t &&
                      -1 !== l &&
                      (null == o ||
                        !o.targetClassNameRegExp ||
                        (null != o &&
                          o.targetClassNameRegExp.test(
                            null === (r = e.target) || void 0 === r
                              ? void 0
                              : r.className
                          ))))
                  ) {
                    if (null != o && o.x) {
                      if (!v.nodeWidth) return;
                      var u = e.target.getBoundingClientRect(),
                        s = u.x,
                        f = u.width,
                        d = s + f / 2,
                        p = e.clientX - (v.mouseX - v.nodeX),
                        m = p + v.nodeWidth;
                      if (!(p > s && p < s + f ? p < d : m > d)) return;
                    }
                    null === (a = g.current) ||
                      void 0 === a ||
                      a.call(g, {
                        currentIndex: l,
                        current: c,
                        target: n,
                        targetIndex: t,
                      }),
                      i(t);
                  }
                },
                [
                  l,
                  null == o ? void 0 : o.targetClassNameRegExp,
                  null == o ? void 0 : o.x,
                  c,
                  v.nodeWidth,
                  v.mouseX,
                  v.nodeX,
                ]
              );
            if (!n) return {};
            function y(e, t, n) {
              if ((i(t), s(n), o)) {
                var r = e.target.getBoundingClientRect(),
                  a = r.x,
                  l = r.width;
                m({ nodeX: a, nodeWidth: l, mouseX: e.clientX });
              }
            }
            function b() {
              d(!0);
            }
            function A() {
              d(!1), i(-1), s(null);
            }
            return {
              onDragStart: y,
              onDragOver: h,
              onDrop: b,
              onDragEnd: A,
              getDragProps: function (e, t) {
                return n
                  ? {
                      draggable: !0,
                      onDragStart: function (n) {
                        y(n, e, t);
                      },
                      onDragOver: function (n) {
                        h(n, e, t);
                      },
                      onDrop: function () {
                        b();
                      },
                      onDragEnd: function () {
                        A();
                      },
                    }
                  : {};
              },
              dragging: -1 !== l,
            };
          })(
            as(
              as({}, t),
              {},
              {
                sortOnDraggable: t.dragSort,
                onDragOverCheck: {
                  x: !0,
                  targetClassNameRegExp: new RegExp("^".concat(o, "-tag")),
                },
              }
            )
          ),
          N = T.getDragProps,
          D = (0, e.useRef)(!1),
          L = (function (t) {
            var n = (0, e.useRef)(),
              r = t.excessTagsDisplayType,
              o = void 0 === r ? "scroll" : r,
              a = t.readonly,
              l = t.disabled,
              i = Y((0, e.useState)(0), 2),
              u = i[0],
              c = i[1],
              s = Y((0, e.useState)(), 2),
              f = s[0],
              d = s[1],
              p = function (e) {
                var t = e.children[0];
                d(t);
              },
              v = function () {
                c(f.scrollWidth - f.clientWidth);
              },
              m = function (e) {
                null == f || f.scroll({ left: e, behavior: "smooth" });
              },
              g = function () {
                v(), m(u);
              },
              h = function () {
                clearTimeout(Hc);
              },
              y = function (e) {
                e && p(e);
              };
            return (
              (0, e.useEffect)(function () {
                return y(null == n ? void 0 : n.current.currentElement), h;
              }, []),
              {
                initScroll: y,
                clearScroll: h,
                tagInputRef: n,
                scrollElement: f,
                scrollDistance: u,
                scrollTo: m,
                scrollToRight: g,
                scrollToLeft: function () {
                  m(0);
                },
                updateScrollElement: p,
                updateScrollDistance: v,
                onWheel: function (e) {
                  var t = e.e;
                  if (!a && !l && f)
                    if (t.deltaX > 0) {
                      var n = Math.min(f.scrollLeft + 120, u);
                      m(n);
                    } else {
                      var r = Math.max(f.scrollLeft - 120, 0);
                      m(r);
                    }
                },
                scrollToRightOnEnter: function () {
                  "scroll" === o &&
                    (Hc = setTimeout(function () {
                      g(), clearTimeout(Hc);
                    }, 100));
                },
                scrollToLeftOnLeave: function () {
                  "scroll" === o && (m(0), clearTimeout(Hc));
                },
              }
            );
          })(t),
          R = L.scrollToRight,
          M = L.onWheel,
          I = L.scrollToRightOnEnter,
          z = L.scrollToLeftOnLeave,
          B = L.tagInputRef,
          F = (function (t) {
            var n = xo().classPrefix,
              r = t.onRemove,
              o = t.max,
              a = t.minCollapsedNum,
              l = t.size,
              i = t.disabled,
              u = t.readonly,
              c = t.tagProps,
              s = t.tag,
              f = t.collapsedItems,
              d = t.getDragProps,
              p = Y(Wa(t, "value", t.onChange), 2),
              v = p[0],
              m = p[1],
              g = Y((0, e.useState)(), 2),
              h = g[0],
              y = g[1],
              b = function (e) {
                var t = ko(v);
                t.splice(e.index, 1),
                  m(t, rs({ trigger: "tag-remove" }, e)),
                  null == r ||
                    r(rs(rs({}, e), {}, { trigger: "tag-remove", value: t }));
              };
            return {
              tagValue: v,
              clearAll: function (e) {
                m([], { trigger: "clear", e: e.e });
              },
              onClose: b,
              onInnerEnter: function (e, n) {
                var r,
                  a = e ? String(e).trim() : "";
                if (a) {
                  var l = o && (null == v ? void 0 : v.length) >= o,
                    i = v;
                  l ||
                    ((i = v instanceof Array ? v.concat(String(a)) : [a]),
                    m(i, {
                      trigger: "enter",
                      index: i.length - 1,
                      item: a,
                      e: n.e,
                    })),
                    null == t ||
                      null === (r = t.onEnter) ||
                      void 0 === r ||
                      r.call(t, i, rs(rs({}, n), {}, { inputValue: e }));
                }
              },
              onInputBackspaceKeyUp: function (e, t) {
                var n = t.e;
                if (v && v.length) {
                  if (!h && ["Backspace", "NumpadDelete"].includes(n.key)) {
                    var o = v.length - 1,
                      a = v[o],
                      l = "backspace";
                    m(v.slice(0, -1), { e: n, index: o, item: a, trigger: l }),
                      null == r ||
                        r({ e: n, index: o, item: a, trigger: l, value: v });
                  }
                  y(e);
                }
              },
              renderLabel: function (t) {
                var r = t.displayNode,
                  o = t.label,
                  p = a ? v.slice(0, a) : v,
                  m = r
                    ? [r]
                    : null == p
                    ? void 0
                    : p.map(function (t, n) {
                        var r = he(s) ? s({ value: t }) : s;
                        return e.createElement(
                          ts,
                          rs(
                            rs(
                              {
                                key: n,
                                size: l,
                                disabled: i,
                                onClose: function (e) {
                                  return b({ e: e.e, item: t, index: n });
                                },
                                closable: !u && !i,
                              },
                              null == d ? void 0 : d(n, t)
                            ),
                            c
                          ),
                          null != r ? r : t
                        );
                      });
                if (
                  (o &&
                    (null == m ||
                      m.unshift(
                        e.createElement(
                          "div",
                          {
                            className: "".concat(n, "-tag-input__prefix"),
                            key: "label",
                          },
                          o
                        )
                      )),
                  p.length !== v.length)
                ) {
                  var g = v.length - p.length,
                    h = {
                      value: v,
                      count: v.length,
                      collapsedTags: v.slice(a, v.length),
                    },
                    y = he(f) ? f(h) : f;
                  m.push(
                    e.createElement(
                      e.Fragment,
                      { key: "more" },
                      null != y ? y : e.createElement(ts, null, "+", g)
                    )
                  );
                }
                return m;
              },
            };
          })(as(as({}, t), {}, { getDragProps: N })),
          U = F.tagValue,
          V = F.onClose,
          X = F.onInnerEnter,
          Q = F.onInputBackspaceKeyUp,
          K = F.clearAll,
          G = F.renderLabel,
          q = "".concat(o, "-tag-input"),
          J = "".concat(o, "-tag-input__with-suffix-icon"),
          Z = "".concat(o, "-tag-input__suffix-clear"),
          $ = "".concat(o, "-tag-input--break-line"),
          ee = null != U && U.length ? "" : f,
          te = Boolean(!u && !c && s && C && (null == U ? void 0 : U.length));
        (0, e.useImperativeHandle)(n, function () {
          return as({}, B.current || {});
        });
        var ne = te
            ? e.createElement(a, {
                className: Z,
                onClick: function (e) {
                  var n;
                  K({ e }),
                    k("", { e, trigger: "clear" }),
                    null === (n = t.onClear) ||
                      void 0 === n ||
                      n.call(t, { e });
                },
              })
            : y,
          re = he(d)
            ? d({
                value: U,
                onClose: function (e, t) {
                  return V({ index: e, item: t });
                },
              })
            : d,
          oe = [
            q,
            ((r = {}), W(r, $, "break-line" === l), W(r, J, !!ne), r),
            t.className,
          ];
        return e.createElement(
          Mc,
          as(
            {
              ref: B,
              value: S,
              onChange: function (e, t) {
                k(e, as(as({}, t), {}, { trigger: "input" }));
              },
              autoWidth: !0,
              onWheel: M,
              size: m,
              readonly: u,
              disabled: c,
              label: G({ displayNode: re, label: p }),
              className: H()(oe),
              style: t.style,
              tips: g,
              status: h,
              placeholder: ee,
              suffix: b,
              suffixIcon: ne,
              showInput: !(
                null != v &&
                v.readonly &&
                U &&
                null != U &&
                U.length
              ),
              keepWrapperWidth: !i,
              onPaste: w,
              onClick: function (e) {
                var t, n;
                null === (t = B.current.inputElement) ||
                  void 0 === t ||
                  null === (n = t.focus) ||
                  void 0 === n ||
                  n.call(t),
                  null == A || A(e);
              },
              onEnter: function (e, t) {
                k("", { e: t.e, trigger: "enter" }), !D.current && X(e, t), R();
              },
              onKeyup: Q,
              onMouseenter: function (e) {
                j(e), I();
              },
              onMouseleave: function (e) {
                _(e), z();
              },
              onFocus: function (e, t) {
                null == O || O(U, { e: t.e, inputValue: e });
              },
              onBlur: function (e, t) {
                null == x || x(U, { e: t.e, inputValue: e });
              },
              onCompositionstart: function (e, t) {
                var n;
                (D.current = !0),
                  null == v ||
                    null === (n = v.onCompositionstart) ||
                    void 0 === n ||
                    n.call(v, e, t);
              },
              onCompositionend: function (e, t) {
                var n;
                (D.current = !1),
                  null == v ||
                    null === (n = v.onCompositionend) ||
                    void 0 === n ||
                    n.call(v, e, t);
              },
            },
            v
          )
        );
      });
      (ls.displayName = "TagInput"),
        (ls.defaultProps = {
          autoWidth: !1,
          clearable: !1,
          dragSort: !1,
          excessTagsDisplayType: "break-line",
          defaultInputValue: "",
          minCollapsedNum: 0,
          placeholder: void 0,
          readonly: !1,
          size: "medium",
          defaultValue: [],
        });
      var is = ls;
      function us(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function cs(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? us(Object(n), !0).forEach(function (t) {
                W(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : us(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var ss = { label: "label", key: "key", children: "children" };
      function fs(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ds(t) {
        var n = t.popupProps,
          r = t.autoWidth,
          o = t.readonly,
          a = t.onPopupVisibleChange,
          l = t.allowInput,
          i = Y((0, e.useState)(!1), 2),
          u = i[0],
          c = i[1],
          s = function (e, t) {
            if (e && t) {
              var r = t.scrollHeight > t.offsetHeight ? 8 : 0,
                o =
                  t.offsetWidth + r >= e.offsetWidth
                    ? t.offsetWidth
                    : e.offsetWidth,
                a = {};
              return (
                n &&
                  "object" === q(n.overlayInnerStyle) &&
                  !n.overlayInnerStyle.width &&
                  (a = n.overlayInnerStyle),
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? fs(Object(n), !0).forEach(function (t) {
                          W(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : fs(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t)
                          );
                        });
                  }
                  return e;
                })({ width: "".concat(Math.min(o, 1e3), "px") }, a)
              );
            }
          };
        return {
          tOverlayInnerStyle: (0, e.useMemo)(
            function () {
              var e = {},
                t = (null == n ? void 0 : n.overlayInnerStyle) || {};
              return he(t) || (pe(t) && t.width) ? (e = t) : r || (e = s), e;
            },
            [r, null == n ? void 0 : n.overlayInnerStyle]
          ),
          innerPopupVisible: u,
          onInnerPopupVisibleChange: function (e, t) {
            if (!o) {
              var n = !("trigger-element-click" !== t.trigger || !l) || e;
              c(n), null == a || a(n, t);
            }
          },
        };
      }
      function ps(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function vs(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ps(Object(n), !0).forEach(function (t) {
                W(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ps(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var ms = (0, e.forwardRef)(function (t, n) {
        var r,
          o = (0, e.useRef)(),
          a = (0, e.useRef)(),
          l = xo().classPrefix,
          i = t.multiple,
          u = t.value,
          c = t.popupVisible,
          s = t.popupProps,
          f = t.borderless,
          d = t.disabled,
          p = ds(t),
          v = p.tOverlayInnerStyle,
          m = p.innerPopupVisible,
          g = p.onInnerPopupVisibleChange,
          h = (function (t) {
            var n = t.value,
              r = t.keys,
              o = t.loading,
              a = t.disabled,
              l = xo().classPrefix,
              i = (0, e.useRef)(),
              u = Y(Wa(t, "inputValue", t.onInputChange), 2),
              c = u[0],
              s = u[1],
              f = (0, e.useMemo)(
                function () {
                  return !a && o;
                },
                [o, a]
              ),
              d = zc(
                zc({}, $u(t, Bc)),
                {},
                {
                  suffixIcon: f
                    ? e.createElement(Ro, { loading: !0, size: "small" })
                    : t.suffixIcon,
                }
              ),
              p = function (e) {
                var n, r;
                null == e ||
                  null === (n = e.e) ||
                  void 0 === n ||
                  n.stopPropagation(),
                  null === (r = t.onClear) || void 0 === r || r.call(t, e),
                  s("", { trigger: "clear" });
              },
              v = function (e, n) {
                t.allowInput && s(e, zc(zc({}, n), {}, { trigger: "input" }));
              };
            return {
              inputRef: i,
              commonInputProps: d,
              onInnerClear: p,
              renderSelectSingle: function (o) {
                var a,
                  u = t.multiple ? null : t.valueDisplay,
                  f = o && t.allowInput ? c : Uc(n, r);
                return e.createElement(
                  Mc,
                  zc(
                    zc(
                      zc({ ref: i }, d),
                      {},
                      {
                        autoWidth: t.autoWidth,
                        placeholder: u ? "" : t.placeholder,
                        value: u ? void 0 : f,
                        label: e.createElement(e.Fragment, null, t.label, u),
                        onChange: v,
                        readonly: !t.allowInput,
                        onClear: p,
                        onBlur: function (e, r) {
                          var o;
                          null === (o = t.onBlur) ||
                            void 0 === o ||
                            o.call(t, n, zc(zc({}, r), {}, { inputValue: e }));
                        },
                        onFocus: function (e, a) {
                          var l;
                          null === (l = t.onFocus) ||
                            void 0 === l ||
                            l.call(t, n, zc(zc({}, a), {}, { inputValue: e })),
                            !o &&
                              s(
                                Uc(n, r),
                                zc(zc({}, a), {}, { trigger: "input" })
                              );
                        },
                        onEnter: function (e, r) {
                          var o;
                          null === (o = t.onEnter) ||
                            void 0 === o ||
                            o.call(t, n, zc(zc({}, r), {}, { inputValue: e }));
                        },
                      },
                      t.inputProps
                    ),
                    {},
                    {
                      inputClass: H()(
                        null === (a = t.inputProps) || void 0 === a
                          ? void 0
                          : a.className,
                        W({}, "".concat(l, "-input--focused"), o)
                      ),
                    }
                  )
                );
              },
            };
          })(t),
          y = h.commonInputProps,
          b = h.inputRef,
          A = h.onInnerClear,
          w = h.renderSelectSingle,
          O = (function (t) {
            var n = t.value,
              r = xo().classPrefix,
              o = (0, e.useRef)(),
              a = Y(Wa(t, "inputValue", t.onInputChange), 2),
              l = a[0],
              i = a[1],
              u = cs(cs({}, ss), t.keys),
              c =
                n instanceof Array
                  ? n.map(function (e) {
                      return pe(e) ? e[u.label] : e;
                    })
                  : pe(n)
                  ? [n[u.label]]
                  : [n],
              s = c && c.length ? "" : t.placeholder,
              f = function (e, n) {
                var r, o;
                "tag-remove" === n.trigger &&
                  (null === (o = n.e) || void 0 === o || o.stopPropagation()),
                  null === (r = t.onTagChange) ||
                    void 0 === r ||
                    r.call(t, e, n);
              };
            return {
              tags: c,
              tPlaceholder: s,
              tagInputRef: o,
              renderSelectMultiple: function (n) {
                var a;
                return e.createElement(
                  is,
                  cs(
                    cs(
                      cs({ ref: o }, n.commonInputProps),
                      {},
                      {
                        autoWidth: t.autoWidth,
                        readonly: t.readonly,
                        minCollapsedNum: t.minCollapsedNum,
                        collapsedItems: t.collapsedItems,
                        tag: t.tag,
                        valueDisplay: t.valueDisplay,
                        placeholder: s,
                        value: c,
                        inputValue: l || "",
                        onChange: f,
                        onInputChange: function (e, t) {
                          "enter" !== (null == t ? void 0 : t.trigger) &&
                            i(e, { trigger: t.trigger, e: t.e });
                        },
                        tagProps: t.tagProps,
                        onClear: n.onInnerClear,
                        onBlur: function (e, n) {
                          var r;
                          null === (r = t.onBlur) ||
                            void 0 === r ||
                            r.call(
                              t,
                              t.value,
                              cs(cs({}, n), {}, { tagInputValue: e })
                            );
                        },
                        onFocus: function (e, n) {
                          var r;
                          null === (r = t.onFocus) ||
                            void 0 === r ||
                            r.call(
                              t,
                              t.value,
                              cs(cs({}, n), {}, { tagInputValue: e })
                            );
                        },
                      },
                      t.tagInputProps
                    ),
                    {},
                    {
                      inputProps: {
                        readonly: !t.allowInput || t.readonly,
                        inputClass: H()(
                          null === (a = t.tagInputProps) || void 0 === a
                            ? void 0
                            : a.className,
                          W({}, "".concat(r, "-input--focused"), n.popupVisible)
                        ),
                      },
                    }
                  )
                );
              },
            };
          })(t),
          x = O.tagInputRef,
          E = O.renderSelectMultiple,
          S = H()([
            t.className,
            "".concat(l, "-select-input"),
            ((r = {}),
            W(r, "".concat(l, "-select-input--borderless"), f),
            W(r, "".concat(l, "-select-input--multiple"), i),
            W(
              r,
              "".concat(l, "-select-input--popup-visible"),
              null != c ? c : m
            ),
            W(
              r,
              "".concat(l, "-select-input--empty"),
              u instanceof Array ? !u.length : !u
            ),
            r),
          ]);
        (0, e.useImperativeHandle)(n, function () {
          return vs(
            vs(vs({}, o.current || {}), b.current || {}),
            x.current || {}
          );
        });
        var k = { visible: null != c ? c : m },
          P = e.createElement(
            "div",
            { className: S, style: t.style },
            e.createElement(
              wu,
              vs(
                vs(
                  vs(
                    {
                      ref: o,
                      trigger: (null == s ? void 0 : s.trigger) || "click",
                      placement: "bottom-left",
                      content: t.panel,
                      hideEmptyPopup: !0,
                      onVisibleChange: g,
                      updateScrollTop: t.updateScrollTop,
                    },
                    k
                  ),
                  s
                ),
                {},
                { disabled: d, overlayInnerStyle: v }
              ),
              i
                ? E({
                    commonInputProps: y,
                    onInnerClear: A,
                    popupVisible: k.visible,
                  })
                : w(k.visible)
            )
          );
        return t.tips
          ? e.createElement(
              "div",
              { ref: a, className: "".concat(l, "-select-input__wrap") },
              P,
              e.createElement(
                "div",
                {
                  className: ""
                    .concat(l, "-input__tips ")
                    .concat(l, "-input__tips--")
                    .concat(t.status || "normal"),
                },
                t.tips
              )
            )
          : P;
      });
      (ms.displayName = "SelectInput"),
        (ms.defaultProps = {
          allowInput: !1,
          autoWidth: !1,
          borderless: !1,
          clearable: !1,
          loading: !1,
          minCollapsedNum: 0,
          multiple: !1,
          readonly: !1,
          status: "default",
        });
      var gs = ms,
        hs = ["value", "label", "disabled", "content"];
      function ys(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function bs(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ys(Object(n), !0).forEach(function (t) {
                W(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ys(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var As = (0, e.forwardRef)(function (t, n) {
          var r,
            o = t.onChange,
            a = t.value,
            l = t.size,
            i = t.max,
            u = t.multiple,
            c = t.showPopup,
            s = t.setShowPopup,
            f = t.options,
            d = t.empty,
            p = t.loadingText,
            v = t.loading,
            m = t.valueType,
            g = t.children,
            h = t.keys,
            y = t.panelTopContent,
            b = t.panelBottomContent,
            A = Y(Ya("select"), 2),
            w = A[0],
            O = (0, A[1])(w.empty),
            x = xo().classPrefix;
          if (!g && !t.options) return null;
          var E = function (e, t) {
              var n,
                r = t.label,
                l = t.selected,
                i = t.event,
                f = t.restData,
                d = {};
              ("object" === m &&
                ((d = bs({}, f)),
                (null != h && h.label) || Object.assign(d, { label: r }),
                (null != h && h.value) || Object.assign(d, { value: e })),
              Object.keys(d).length) ||
                Object.assign(
                  d,
                  (W((n = {}), (null == h ? void 0 : h.label) || "label", r),
                  W(n, (null == h ? void 0 : h.value) || "value", e),
                  n)
                );
              if (u) {
                var p = fl(a, e, l, m, h, d);
                o(p, { label: r, e: i, trigger: "check" });
              } else {
                o("object" === m ? d : e, { label: r, e: i, trigger: "check" }),
                  s(!c);
              }
            },
            S = e.Children.map(g, function (t) {
              if ((0, e.isValidElement)(t)) {
                var n = {
                  size: l,
                  max: i,
                  multiple: u,
                  selectedValue: a,
                  onSelect: E,
                };
                return (0, e.cloneElement)(t, bs({}, n));
              }
              return t;
            }),
            k = (Array.isArray(S) && !S.length) || (f && 0 === f.length);
          return e.createElement(
            "div",
            {
              ref: n,
              className: H()(
                "".concat(x, "-select__dropdown-inner"),
                ((r = {}),
                W(
                  r,
                  "".concat(x, "-select__dropdown-inner--size-s"),
                  "small" === l
                ),
                W(
                  r,
                  "".concat(x, "-select__dropdown-inner--size-l"),
                  "large" === l
                ),
                W(
                  r,
                  "".concat(x, "-select__dropdown-inner--size-m"),
                  "medium" === l
                ),
                r)
              ),
            },
            y,
            v &&
              e.createElement(
                "div",
                { className: "".concat(x, "-select__loading-tips") },
                p
              ),
            !v &&
              k &&
              e.createElement(
                "div",
                { className: "".concat(x, "-select__empty") },
                d || e.createElement("p", null, O)
              ),
            !v &&
              !k &&
              (function () {
                if (f) {
                  var t = [];
                  return (
                    f.forEach(function (e) {
                      -1 ===
                        t.findIndex(function (t) {
                          return t.label === e.label && t.value === e.value;
                        }) && t.push(e);
                    }),
                    e.createElement(
                      "ul",
                      { className: "".concat(x, "-select__list") },
                      t.map(function (t, n) {
                        var r = t.value,
                          o = t.label,
                          c = t.disabled,
                          s = t.content,
                          f = Mo(t, hs);
                        return e.createElement(cl, {
                          key: n,
                          max: i,
                          label: o,
                          value: r,
                          onSelect: E,
                          selectedValue: a,
                          multiple: u,
                          size: l,
                          disabled: c,
                          restData: f,
                          keys: h,
                          content: s,
                        });
                      })
                    )
                  );
                }
                return e.createElement(
                  "ul",
                  { className: "".concat(x, "-select__list") },
                  S
                );
              })(),
            b
          );
        }),
        ws = ["overlayClassName"];
      function Os(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function xs(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Os(Object(n), !0).forEach(function (t) {
                W(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Os(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Es = Ga(
        function (t, n) {
          var r = Y(Ya("select"), 2),
            o = r[0],
            a = r[1],
            l = a(o.loadingText),
            i = t.readonly,
            u = t.borderless,
            c = t.autoWidth,
            s = t.creatable,
            f = t.filter,
            d = t.loadingText,
            p = void 0 === d ? l : d,
            v = t.max,
            m = t.popupProps,
            g = t.reserveKeyword,
            h = t.className,
            y = t.style,
            b = t.disabled,
            A = t.size,
            w = t.multiple,
            O = t.placeholder,
            x = t.clearable,
            E = t.prefixIcon,
            S = t.options,
            k = t.filterable,
            P = t.loading,
            C = t.onFocus,
            j = t.onBlur,
            _ = t.onClear,
            T = void 0 === _ ? Ha : _,
            N = t.onCreate,
            D = t.onRemove,
            L = t.onSearch,
            R = t.empty,
            M = t.valueType,
            I = t.keys,
            z = t.children,
            B = t.collapsedItems,
            F = t.minCollapsedNum,
            U = t.valueDisplay,
            V = t.onEnter,
            X = t.showArrow,
            Q = t.inputProps,
            K = t.panelBottomContent,
            G = t.panelTopContent,
            q = t.selectInputProps,
            J = t.tagInputProps,
            Z = t.tagProps,
            $ = Y(Wa(t, "value", t.onChange), 2),
            ee = $[0],
            te = $[1],
            ne = xo().classPrefix,
            re = m || {},
            oe = re.overlayClassName,
            ae = Mo(re, ws),
            le = "".concat(ne, "-select"),
            ie = Y(Wa(t, "popupVisible", t.onPopupVisibleChange), 2),
            ue = ie[0],
            ce = ie[1],
            se = Y(Wa(t, "inputValue", t.onInputChange), 2),
            fe = se[0],
            de = se[1],
            pe = Y((0, e.useState)([]), 2),
            ve = pe[0],
            me = pe[1],
            ge = Y((0, e.useState)([]), 2),
            ye = ge[0],
            be = ge[1],
            Ae = Y((0, e.useState)({}), 2),
            we = Ae[0],
            Oe = Ae[1],
            xe = Y((0, e.useState)([]), 2),
            Ee = xe[0],
            Se = xe[1];
          (0, e.useEffect)(
            function () {
              if (I) {
                var e =
                  null == S
                    ? void 0
                    : S.map(function (e) {
                        return xs(
                          xs({}, e),
                          {},
                          {
                            value: ga(
                              e,
                              (null == I ? void 0 : I.value) || "value"
                            ),
                            label: ga(
                              e,
                              (null == I ? void 0 : I.label) || "label"
                            ),
                          }
                        );
                      });
                me(e), be(e);
              } else me(S), be(S);
              Oe(
                (function (e, t, n) {
                  var r = {};
                  if (Array.isArray(t))
                    return (
                      t.forEach(function (e) {
                        r[ga(e, (null == n ? void 0 : n.value) || "value")] = e;
                      }),
                      r
                    );
                  if (Nr(e)) {
                    if (e.type === cl) return sl(e, r, n), r;
                    if (e.type === Ja) {
                      var o = e.props.children;
                      if (Array.isArray(o))
                        return (
                          o.forEach(function (e) {
                            sl(e, r, n);
                          }),
                          r
                        );
                    }
                  }
                  return (
                    Array.isArray(e) &&
                      e.forEach(function (e) {
                        if ((e.type === cl && sl(e, r, n), e.type === Ja)) {
                          var t = e.props.children;
                          Array.isArray(t) &&
                            t.forEach(function (e) {
                              sl(e, r, n);
                            });
                        }
                      }),
                    r
                  );
                })(z, S, I) || {}
              );
            },
            [S, I, z]
          ),
            (0, e.useEffect)(
              function () {
                Se(function (e) {
                  var t,
                    n = (null == I ? void 0 : I.value) || "value",
                    r = (null == I ? void 0 : I.label) || "label";
                  return Array.isArray(ee)
                    ? ee
                        .map(function (t) {
                          var o;
                          return "value" === M
                            ? we[t] ||
                                e.find(function (e) {
                                  return ga(e, n) === t;
                                }) ||
                                (W((o = {}), n, t), W(o, r, t), o)
                            : t;
                        })
                        .filter(Boolean)
                    : null != ee
                    ? "value" === M
                      ? [
                          we[ee] ||
                            e.find(function (e) {
                              return ga(e, n) === ee;
                            }) ||
                            ((t = {}), W(t, n, ee), W(t, r, ee), t),
                        ].filter(Boolean)
                      : [ee]
                    : [];
                });
              },
              [ee, I, M, we]
            );
          var ke = (0, e.useMemo)(
              function () {
                return w
                  ? Ee.map(function (e) {
                      return (
                        ga(
                          e || {},
                          (null == I ? void 0 : I.label) || "label"
                        ) || ""
                      );
                    })
                  : ga(
                      Ee[0] || {},
                      (null == I ? void 0 : I.label) || "label"
                    ) || void 0;
              },
              [Ee, I, w]
            ),
            Pe = function (e, t) {
              b || (ce(e, t), e && de(""));
            },
            Ce = function (e, t) {
              w && !g && de("", { trigger: "clear" }),
                s &&
                  he(N) &&
                  0 ===
                    S.filter(function (t) {
                      return t.value === e;
                    }).length &&
                  N(e);
              var n = dl(e, w, M, I, ye);
              null == te || te(e, xs(xs({}, t), {}, { selectedOptions: n }));
            },
            je = function (e) {
              e.e.stopPropagation(),
                Array.isArray(ee)
                  ? te([], xs(xs({}, e), {}, { selectedOptions: [] }))
                  : te(null, xs(xs({}, e), {}, { selectedOptions: [] })),
                de(void 0),
                T(e);
            };
          (0, e.useEffect)(
            function () {
              void 0 !== fe &&
                (function (e) {
                  var t = [];
                  if (e) {
                    if (f && he(f))
                      Array.isArray(ye)
                        ? (t = ye.filter(function (t) {
                            return f(e, t);
                          }))
                        : Array.isArray(Object.values(we)) &&
                          (t = Object.values(we).filter(function (t) {
                            return f(e, t);
                          }));
                    else if (Array.isArray(ye)) {
                      var n = e.toUpperCase();
                      t = ye.filter(function (e) {
                        return ((null == e ? void 0 : e.label) || "")
                          .toUpperCase()
                          .includes(n);
                      });
                    }
                    s && (t = t.concat([{ label: e, value: e }])), me(t);
                  } else me(ye);
                })(String(fe));
            },
            [fe]
          );
          var _e,
            Te = (0, e.useMemo)(
              function () {
                return B
                  ? function () {
                      return B({
                        value: ke,
                        collapsedSelectedItems: ke.slice(F, ke.length),
                        count: ke.length - F,
                      });
                    }
                  : null;
              },
              [ke, B, F]
            ),
            Ne = t.onMouseEnter,
            De = t.onMouseLeave;
          return e.createElement(
            "div",
            {
              className: H()("".concat(le, "__wrap"), h),
              style: y,
              onMouseEnter: Ne,
              onMouseLeave: De,
            },
            e.createElement(
              gs,
              xs(
                {
                  autoWidth: !(null != y && y.width) && c,
                  ref: n,
                  className: le,
                  readonly: i,
                  allowInput: (null != k ? k : o.filterable) || he(f),
                  multiple: w,
                  value: ke,
                  valueDisplay: U
                    ? "string" == typeof U
                      ? U
                      : w
                      ? function (e) {
                          var t = e.onClose;
                          return U({ value: ke, onClose: t });
                        }
                      : ke.length
                      ? U({ value: ke[0], onClose: Ha })
                      : ""
                    : w
                    ? function (t) {
                        var n = t.value;
                        return n.slice(0, F || n.length).map(function (t, n) {
                          var r =
                            null == S
                              ? void 0
                              : S.find(function (e) {
                                  return e.label === t;
                                });
                          return e.createElement(
                            ts,
                            xs(
                              xs(
                                {
                                  key: n,
                                  closable: !((null != r && r.disabled) || b),
                                },
                                Z
                              ),
                              {},
                              {
                                onClose: function (e) {
                                  var t,
                                    r = e.e;
                                  r.stopPropagation();
                                  var o = fl(ee, ee[n], !0, M, I),
                                    a = dl(o, w, M, I, ye);
                                  te(o, {
                                    e: r,
                                    selectedOptions: a,
                                    trigger: "uncheck",
                                  }),
                                    null == Z ||
                                      null === (t = Z.onClose) ||
                                      void 0 === t ||
                                      t.call(Z, { e: r });
                                },
                              }
                            ),
                            t
                          );
                        });
                      }
                    : "string" != typeof ke
                    ? ke
                    : "",
                  clearable: x,
                  disabled: b,
                  status: t.status,
                  tips: t.tips,
                  borderless: u,
                  label: E,
                  suffixIcon: P
                    ? e.createElement(Ro, {
                        className: H()(
                          "".concat(le, "__right-icon"),
                          "".concat(le, "__active-icon")
                        ),
                        loading: !0,
                        size: "small",
                      })
                    : X &&
                      e.createElement(pl, {
                        overlayClassName: "".concat(le, "__right-icon"),
                        isActive: ue,
                        disabled: b,
                      }),
                  panel:
                    ((_e = {
                      onChange: Ce,
                      value: ee,
                      className: h,
                      size: A,
                      multiple: w,
                      showPopup: ue,
                      setShowPopup: function (e) {
                        return Pe(e, {});
                      },
                      options: ve,
                      empty: R,
                      max: v,
                      loadingText: p,
                      loading: P,
                      valueType: M,
                      keys: I,
                      panelBottomContent: K,
                      panelTopContent: G,
                    }),
                    e.createElement(As, xs({}, _e), z)),
                  placeholder: !w && ue && ke ? ke : O || a(o.placeholder),
                  inputValue: fe,
                  tagInputProps: xs({}, J),
                  tagProps: Z,
                  inputProps: xs({ size: A }, Q),
                  minCollapsedNum: F,
                  collapsedItems: Te,
                  updateScrollTop: function (e) {
                    if (e) {
                      var t = e.querySelector(".".concat(ne, "-is-selected"));
                      if (t) {
                        var n = getComputedStyle(t).paddingBottom,
                          r = getComputedStyle(e).marginBottom,
                          o = parseInt(n, 10) + parseInt(r, 10),
                          a =
                            t.offsetTop -
                            e.offsetTop -
                            (e.clientHeight - t.clientHeight) +
                            o;
                        e.scrollTop = a;
                      }
                    }
                  },
                  popupProps: xs(
                    { overlayClassName: ["".concat(le, "__dropdown"), oe] },
                    ae
                  ),
                  popupVisible: ue,
                  onPopupVisibleChange: Pe,
                  onTagChange: function (e, t) {
                    var n = t.trigger,
                      r = t.index,
                      o = t.item,
                      a = t.e;
                    if ("backspace" !== n) {
                      if ("clear" === n)
                        return (
                          a.stopPropagation(),
                          void te([], { e: a, trigger: n, selectedOptions: [] })
                        );
                      if ("tag-remove" === n) {
                        a.stopPropagation();
                        var l = fl(ee, ee[r], !0, M, I),
                          i = dl(l, w, M, I, ye);
                        te(l, { e: a, trigger: n, selectedOptions: i }),
                          he(D) &&
                            D({
                              value: ee[r],
                              data: { label: o, value: ee[r] },
                              e: a,
                            });
                      }
                    } else {
                      a.stopPropagation();
                      for (var u = -1, c = r; c >= 0; ) {
                        var s;
                        if (
                          null === (s = Ee[c]) ||
                          void 0 === s ||
                          !s.disabled
                        ) {
                          u = c;
                          break;
                        }
                        c -= 1;
                      }
                      if (u < 0) return;
                      var f = fl(ee, ee[u], !0, M, I),
                        d = dl(f, w, M, I, ye);
                      te(f, { e: a, trigger: n, selectedOptions: d });
                    }
                  },
                  onInputChange: function (e) {
                    de(e), void 0 !== e && he(L) && L(e);
                  },
                  onFocus: C,
                  onEnter: V,
                  onBlur: j,
                  onClear: function (e) {
                    je(e);
                  },
                },
                q
              )
            )
          );
        },
        { Option: cl, OptionGroup: Ja }
      );
      (Es.displayName = "Select"),
        (Es.defaultProps = {
          autoWidth: !1,
          borderless: !1,
          clearable: !1,
          creatable: !1,
          loading: !1,
          max: 0,
          minCollapsedNum: 0,
          multiple: !1,
          placeholder: void 0,
          readonly: !1,
          reserveKeyword: !1,
          showArrow: !0,
          size: "medium",
          valueType: "value",
        });
      var Ss = Es,
        ks = [
          "type",
          "theme",
          "variant",
          "icon",
          "disabled",
          "loading",
          "size",
          "block",
          "ghost",
          "shape",
          "children",
          "content",
          "className",
          "suffix",
          "href",
          "tag",
          "onClick",
        ];
      function Ps(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Cs(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ps(Object(n), !0).forEach(function (t) {
                W(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ps(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var js = (0, e.forwardRef)(function (t, n) {
        var r,
          o = t.type,
          a = t.theme,
          l = t.variant,
          i = t.icon,
          u = t.disabled,
          c = t.loading,
          s = t.size,
          f = t.block,
          d = t.ghost,
          p = t.shape,
          v = t.children,
          m = t.content,
          g = t.className,
          h = t.suffix,
          y = t.href,
          b = t.tag,
          A = t.onClick,
          w = Mo(t, ks),
          O = xo().classPrefix,
          x = Y(al(), 2),
          E = x[0],
          S = x[1];
        ul((null == n ? void 0 : n.current) || E);
        var k = null != m ? m : v,
          P = i;
        c && (P = e.createElement(Ro, { loading: c, inheritColor: !0 }));
        var C = (0, e.useMemo)(
            function () {
              return a || ("base" === l ? "primary" : "default");
            },
            [a, l]
          ),
          j = (0, e.useMemo)(
            function () {
              return !b && y ? "a" : !b && u ? "div" : b || "button";
            },
            [b, y, u]
          );
        return e.createElement(
          j,
          Cs(
            Cs({}, w),
            {},
            {
              href: y,
              type: o,
              ref: n || S,
              disabled: u || c,
              className: H()(
                g,
                [
                  "".concat(O, "-button"),
                  "".concat(O, "-button--theme-").concat(C),
                  "".concat(O, "-button--variant-").concat(l),
                ],
                ((r = {}),
                W(
                  r,
                  "".concat(O, "-button--shape-").concat(p),
                  "rectangle" !== p
                ),
                W(r, "".concat(O, "-button--ghost"), d),
                W(r, "".concat(O, "-is-loading"), c),
                W(r, "".concat(O, "-is-disabled"), u),
                W(r, "".concat(O, "-size-s"), "small" === s),
                W(r, "".concat(O, "-size-l"), "large" === s),
                W(r, "".concat(O, "-size-full-width"), f),
                r)
              ),
              onClick: u || c ? void 0 : A,
            }
          ),
          e.createElement(
            e.Fragment,
            null,
            P,
            k &&
              e.createElement(
                "span",
                { className: "".concat(O, "-button__text") },
                k
              ),
            h &&
              e.createElement(
                "span",
                { className: "".concat(O, "-button__suffix") },
                h
              )
          )
        );
      });
      (js.displayName = "Button"),
        (js.defaultProps = {
          block: !1,
          ghost: !1,
          loading: !1,
          shape: "rectangle",
          size: "medium",
          type: "button",
          variant: "base",
        });
      var _s = js;
      function Ts(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ns(e, t) {
        for (
          var n = (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? Ts(Object(n), !0).forEach(function (t) {
                      W(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : Ts(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            })({}, e),
            r = 0;
          r < t.length;
          r++
        ) {
          delete n[t[r]];
        }
        return n;
      }
      var Ds = de,
        Ls = Tt;
      var Rs = function (e) {
          return !0 === e || !1 === e || (Ls(e) && "[object Boolean]" == Ds(e));
        },
        Ms = [
          "allowUncheck",
          "type",
          "disabled",
          "name",
          "value",
          "onChange",
          "indeterminate",
          "children",
          "label",
          "className",
          "style",
          "readonly",
        ];
      function Is(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var zs = e.createContext(null),
        Bs = (0, e.forwardRef)(function (t, n) {
          var r,
            o = (0, e.useContext)(zs),
            a = o ? o.inject(t) : t,
            l = a.allowUncheck,
            i = void 0 !== l && l,
            u = a.type,
            c = a.disabled,
            s = a.name,
            f = a.value,
            d = a.onChange,
            p = a.indeterminate,
            v = a.children,
            m = a.label,
            g = a.className,
            h = a.style,
            y = a.readonly,
            b = Mo(a, Ms),
            A = xo().classPrefix,
            w = Y(Wa(a, "checked", d), 2),
            O = w[0],
            x = w[1],
            E = H()(
              "".concat(A, "-").concat(u),
              g,
              (W((r = {}), "".concat(A, "-is-checked"), O),
              W(r, "".concat(A, "-is-disabled"), c),
              W(r, "".concat(A, "-is-indeterminate"), p),
              r)
            ),
            S = e.createElement("input", {
              readOnly: y,
              type: "radio-button" === u ? "radio" : u,
              className: "".concat(A, "-").concat(u, "__former"),
              checked: O,
              disabled: c,
              name: s,
              value: Rs(f) ? Number(f) : f,
              onClick: function (e) {
                e.stopPropagation(),
                  ("radio-button" === u || "radio" === u) &&
                    i &&
                    O &&
                    x(!e.currentTarget.checked, { e });
              },
              onChange: function (e) {
                return x(e.currentTarget.checked, { e });
              },
            }),
            k = !(!v && !m);
          return e.createElement(
            "label",
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? Is(Object(n), !0).forEach(function (t) {
                      W(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : Is(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            })(
              { ref: n, className: E, title: a.title, style: h },
              Ns(b, ["checkAll", "stopLabelTrigger"])
            ),
            S,
            e.createElement("span", {
              className: "".concat(A, "-").concat(u, "__input"),
            }),
            k &&
              e.createElement(
                "span",
                {
                  key: "label",
                  className: "".concat(A, "-").concat(u, "__label"),
                  onClick: function (e) {
                    a.stopLabelTrigger && e.preventDefault();
                  },
                },
                v || m
              )
          );
        });
      Bs.displayName = "Check";
      function Fs(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Us(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Fs(Object(n), !0).forEach(function (t) {
                W(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Fs(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Hs = function (t) {
        var n,
          r = xo().classPrefix,
          o = t.disabled,
          a = t.children,
          l = t.onChange,
          i = t.size,
          u = t.variant,
          c = t.options,
          s = void 0 === c ? [] : c,
          f = t.className,
          d = t.style,
          p = Y(Wa(t, "value", l), 2),
          v = p[0],
          m = p[1],
          g = Y((0, e.useState)({}), 2),
          h = g[0],
          y = g[1],
          b = (0, e.useRef)(null),
          A = ".".concat(r, "-radio-button.").concat(r, "-is-checked"),
          w = (function () {
            var t = xo().classPrefix;
            return (0, e.useMemo)(
              function () {
                return {
                  SIZE: {
                    default: "",
                    xs: "".concat(t, "-size-xs"),
                    small: "".concat(t, "-size-s"),
                    medium: "".concat(t, "-size-m"),
                    large: "".concat(t, "-size-l"),
                    xl: "".concat(t, "-size-xl"),
                    block: "".concat(t, "-size-full-width"),
                  },
                  STATUS: {
                    loading: "".concat(t, "-is-loading"),
                    disabled: "".concat(t, "-is-disabled"),
                    focused: "".concat(t, "-is-focused"),
                    success: "".concat(t, "-is-success"),
                    error: "".concat(t, "-is-error"),
                    warning: "".concat(t, "-is-warning"),
                    selected: "".concat(t, "-is-selected"),
                    active: "".concat(t, "-is-active"),
                    checked: "".concat(t, "-is-checked"),
                    current: "".concat(t, "-is-current"),
                    hidden: "".concat(t, "-is-hidden"),
                    visible: "".concat(t, "-is-visible"),
                    expanded: "".concat(t, "-is-expanded"),
                    indeterminate: "".concat(t, "-is-indeterminate"),
                  },
                };
              },
              [t]
            );
          })(),
          O = w.SIZE,
          x = {
            inject: function (e) {
              if (void 0 !== e.checked) return e;
              var t = e.value;
              return Us(
                Us({}, e),
                {},
                {
                  checked: v === e.value,
                  disabled: e.disabled || o,
                  onChange: function (n, r) {
                    var o = r.e;
                    "function" == typeof e.onChange && e.onChange(n, { e: o }),
                      m(n ? t : void 0, { e: o });
                  },
                }
              );
            },
          },
          E = function () {
            var e, t;
            if (u.includes("filled")) {
              var n =
                null === (e = (t = b.current).querySelector) || void 0 === e
                  ? void 0
                  : e.call(t, A);
              if (!n) return y({ width: 0 });
              var r = n.offsetWidth,
                o = n.offsetLeft;
              y({ width: "".concat(r, "px"), left: "".concat(o, "px") });
            }
          };
        (0, e.useEffect)(
          function () {
            E();
          },
          [b.current, v]
        ),
          hu(b.current, E);
        return e.createElement(
          zs.Provider,
          { value: x },
          e.createElement(
            "div",
            {
              ref: b,
              style: d,
              className: H()(
                "".concat(r, "-radio-group"),
                O[i],
                f,
                ((n = {}),
                W(n, "".concat(r, "-radio-group__outline"), "outline" === u),
                W(
                  n,
                  "".concat(r, "-radio-group--filled"),
                  u.includes("filled")
                ),
                W(
                  n,
                  "".concat(r, "-radio-group--primary-filled"),
                  "primary-filled" === u
                ),
                n)
              ),
            },
            a ||
              s.map(function (t) {
                return "string" == typeof t || "number" == typeof t
                  ? e.createElement(Ys, { value: t, key: t }, t)
                  : e.createElement(
                      Ys,
                      { value: t.value, key: t.value, disabled: t.disabled },
                      t.label
                    );
              }),
            u.includes("filled")
              ? e.createElement("div", {
                  style: h,
                  className: "".concat(r, "-radio-group__bg-block"),
                })
              : null
          )
        );
      };
      function Ws(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Vs(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ws(Object(n), !0).forEach(function (t) {
                W(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ws(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      (Hs.displayName = "RadioGroup"),
        (Hs.defaultProps = { size: "medium", variant: "outline" });
      var Xs = Ga(
        function (t, n) {
          return e.createElement(Bs, Vs({ ref: n, type: "radio" }, t));
        },
        {
          Group: Hs,
          Button: (0, e.forwardRef)(function (t, n) {
            return e.createElement(Bs, Vs({ ref: n, type: "radio-button" }, t));
          }),
        }
      );
      (Xs.displayName = "Radio"),
        (Xs.defaultProps = { allowUncheck: !1, defaultChecked: !1, value: !1 });
      var Ys = Xs,
        Qs = Ys;
      function Ks(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Gs(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ks(Object(n), !0).forEach(function (t) {
                W(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ks(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var qs = function (t) {
        var n = xo().classPrefix,
          r = t.onChange,
          o = t.disabled,
          a = t.className,
          l = t.style,
          i = t.children,
          u = t.max,
          c = t.options,
          s = void 0 === c ? [] : c,
          f = (
            Array.isArray(s) && s.length > 0
              ? s
              : e.Children.map(i, function (e) {
                  return e.props;
                }) || []
          ).filter(function (e) {
            return "object" !== q(e) || !e.checkAll;
          }),
          d = [];
        f.forEach(function (e) {
          var t = (function (e) {
            switch (q(e)) {
              case "number":
              case "string":
                return e;
              case "object":
                return e.value;
              default:
                return;
            }
          })(e);
          d.push(t);
        });
        var p = Y(Wa(t, "value", r), 2),
          v = p[0],
          m = p[1],
          g = Y((0, e.useState)(u), 2),
          h = g[0],
          y = g[1],
          b = (0, e.useMemo)(
            function () {
              return Array.isArray(v) ? new Set([].concat(v)) : new Set([]);
            },
            [v]
          ),
          A = (0, e.useMemo)(
            function () {
              var e = Array.from(b);
              return 0 !== e.length && e.length !== f.length;
            },
            [b, f]
          ),
          w = (0, e.useMemo)(
            function () {
              return Array.from(b).length === f.length;
            },
            [b, f]
          );
        (0, e.useEffect)(
          function () {
            el(u) && (u < b.size || y(u));
          },
          [u, b]
        );
        var O = {
            inject: function (e) {
              if (void 0 !== e.checked) return e;
              var t = e.value;
              return Gs(
                Gs({}, e),
                {},
                {
                  checked: e.checkAll ? w : b.has(t),
                  indeterminate: e.checkAll ? A : e.indeterminate,
                  disabled: e.disabled || o || (b.size >= h && !b.has(t)),
                  onChange: function (n, r) {
                    var o = r.e;
                    if (
                      ("function" == typeof e.onChange &&
                        e.onChange(n, { e: o }),
                      e.checkAll)
                    )
                      b.clear(),
                        n &&
                          d.forEach(function (e) {
                            b.add(e);
                          });
                    else if (n) {
                      if (b.size >= h && el(u)) return;
                      b.add(t);
                    } else b.delete(t);
                    m(Array.from(b), {
                      e: o,
                      current: e.checkAll ? void 0 : t,
                      type: n ? "check" : "uncheck",
                    });
                  },
                }
              );
            },
          },
          x = Array.isArray(s) && 0 !== s.length;
        return e.createElement(
          "div",
          { className: H()("".concat(n, "-checkbox-group"), a), style: l },
          e.createElement(
            zs.Provider,
            { value: O },
            x
              ? s.map(function (t, n) {
                  switch (q(t)) {
                    case "string":
                      var r = t;
                      return e.createElement(
                        $s,
                        { key: n, label: r, value: r },
                        t
                      );
                    case "number":
                      var a = t;
                      return e.createElement(
                        $s,
                        { key: n, label: a, value: a },
                        t
                      );
                    case "object":
                      var l = t;
                      return l.checkAll
                        ? e.createElement(
                            $s,
                            Gs(
                              Gs({}, l),
                              {},
                              { key: "checkAll_".concat(n), indeterminate: A }
                            )
                          )
                        : e.createElement(
                            $s,
                            Gs(
                              Gs({}, l),
                              {},
                              { key: n, disabled: l.disabled || o }
                            )
                          );
                    default:
                      return null;
                  }
                })
              : i
          )
        );
      };
      function Js(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      (qs.displayName = "CheckboxGroup"),
        (qs.defaultProps = { max: void 0, defaultValue: [] });
      var Zs = Ga(
        function (t, n) {
          return e.createElement(
            Bs,
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? Js(Object(n), !0).forEach(function (t) {
                      W(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : Js(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            })({ ref: n, type: "checkbox" }, t)
          );
        },
        { Group: qs }
      );
      (Zs.displayName = "Checkbox"),
        (Zs.defaultProps = {
          checkAll: !1,
          defaultChecked: !1,
          disabled: void 0,
          indeterminate: !1,
          readonly: !1,
        });
      var $s = Zs,
        ef = $s;
      let tf;
      !(function (e) {
        (e.Succ = "succ"), (e.Busy = "busy"), (e.Error = "error");
      })(tf || (tf = {}));
      const nf = {};
      var rf, of;
      function af() {
        return (
          (af = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          af.apply(this, arguments)
        );
      }
      const lf = function (t) {
          return e.createElement(
            "svg",
            af(
              {
                className: "icon-setting_svg__icon",
                viewBox: "0 0 1024 1024",
                xmlns: "http://www.w3.org/2000/svg",
                width: 200,
                height: 200,
              },
              t
            ),
            rf ||
              (rf = e.createElement("path", {
                d: "M913.94 431.828c-4.877-25.783-20.692-42.456-40.947-42.456h-3.512c-54.731 0-99.248-44.516-99.248-99.263 0-17.295 8.299-37.015 8.62-37.799 10.097-22.722 2.349-50.567-18.08-64.859l-102.7-57.183-1.51-.739c-20.546-8.91-48.667-3.207-63.987 12.754-11.087 11.434-49.307 44.038-78.472 44.038-29.543 0-67.849-33.258-78.992-44.91-15.293-16.076-43.124-22.112-63.902-13.217l-106.357 58.272-1.597 1.016c-20.43 14.234-28.207 42.078-18.165 64.714.346.828 8.676 20.387 8.676 37.914 0 54.747-44.517 99.263-99.247 99.263h-4.15c-19.618 0-35.434 16.672-40.309 42.456-.363 1.814-8.59 45.446-8.59 80.43 0 34.939 8.227 78.555 8.59 80.355 4.875 25.8 20.691 42.487 40.947 42.487h3.512c54.73 0 99.247 44.517 99.247 99.247 0 17.412-8.329 37.058-8.648 37.812-10.07 22.767-2.35 50.568 18.022 64.788l100.756 56.531 1.538.697c20.837 9.171 49.015 3.192 64.25-13.464 14.074-15.208 52.208-46.783 80.21-46.783 30.355 0 69.446 35.347 80.707 47.767 10.387 11.376 26.349 18.227 42.687 18.227 7.632 0 14.857-1.511 21.474-4.354l104.472-57.574 1.538-.99c20.429-14.276 28.207-42.077 18.139-64.727-.35-.842-8.678-20.403-8.678-37.929 0-54.73 44.517-99.247 99.248-99.247h4.094c19.644 0 35.488-16.687 40.365-42.487.348-1.8 8.588-45.416 8.588-80.355 0-34.986-8.24-78.618-8.588-80.432m-50.959 80.43c0 22.606-4.498 51.655-6.56 63.786-82.097 6.732-145.737 75.335-145.737 158.303 0 23.42 7.43 45.851 11.377 56.17l-89.121 49.216c-4.383-4.584-17.326-17.645-34.94-30.762-30.935-22.926-60.595-34.636-88.106-34.636-27.279 0-56.704 11.42-87.494 34.055-17.528 12.77-30.296 25.48-34.766 30.18l-85.724-47.996c4.179-10.84 11.405-32.983 11.405-56.227 0-82.968-63.64-151.571-145.708-158.303-2.09-12.13-6.588-41.18-6.588-63.786 0-22.651 4.498-51.714 6.588-63.844 82.068-6.718 145.708-75.336 145.708-158.304 0-23.288-7.429-45.793-11.376-56.095l91.326-50.19c3.976 3.976 17.006 16.73 34.823 29.412 30.356 21.663 59.261 32.633 86.016 32.633 26.495 0 55.196-10.766 85.347-32.01 17.963-12.623 30.964-25.202 34.736-28.757l87.901 48.825c-3.975 10.244-11.405 32.676-11.405 56.182 0 82.968 63.64 151.586 145.738 158.304 2.062 12.158 6.56 41.338 6.56 63.844",
              })),
            of ||
              (of = e.createElement("path", {
                d: "M510.216 365.633c-80.53 0-146.057 65.528-146.057 146.058 0 80.543 65.528 146.043 146.057 146.043 80.53 0 146.057-65.5 146.057-146.043 0-80.53-65.527-146.058-146.057-146.058m86.51 146.058c0 47.693-38.8 86.492-86.51 86.492-47.709 0-86.48-38.799-86.48-86.492 0-47.666 38.771-86.48 86.48-86.48 47.71.001 86.51 38.814 86.51 86.48",
              }))
          );
        },
        uf = {
          "./style.module.less": {
            "banner-translate": "trans-ctx--banner-translate",
            "icon-title": "trans-ctx--icon-title",
            "icon-loading": "trans-ctx--icon-loading",
            "action-page-translate": "trans-ctx--action-page-translate",
            focused: "trans-ctx--focused",
            "container-icon": "trans-ctx--container-icon",
            "icon-translate": "trans-ctx--icon-translate",
            "t-icon-loading": "trans-ctx--t-icon-loading",
            "text-translate": "trans-ctx--text-translate",
            "panel-page-translate": "trans-ctx--panel-page-translate",
            "container-icon-close": "trans-ctx--container-icon-close",
            "icon-close": "trans-ctx--icon-close",
            translator: "trans-ctx--translator",
            "lang-selector": "trans-ctx--lang-selector",
            "btn-translate": "trans-ctx--btn-translate",
            "btn-reset-translate": "trans-ctx--btn-reset-translate",
            "page-translate-options": "trans-ctx--page-translate-options",
            "page-translate-options-left":
              "trans-ctx--page-translate-options-left",
            "btn-close-page-translate": "trans-ctx--btn-close-page-translate",
            "radio-page-show-func": "trans-ctx--radio-page-show-func",
            "btn-feedback": "trans-ctx--btn-feedback",
            "icon-setting": "trans-ctx--icon-setting",
          },
          "tdesign-react/es/style/index.css": {
            "narrow-scrollbar": "trans-ctx--narrow-scrollbar",
            "t-fake-arrow": "trans-ctx--t-fake-arrow",
            "t-fake-arrow--active": "trans-ctx--t-fake-arrow--active",
          },
        },
        cf = "PAGE_TRANSLATE_CONTAINER";
      var sf;
      !(function (e) {
        (e.Source = "Source"), (e.Target = "Target"), (e.Together = "Together");
      })(sf || (sf = {}));
      const ff = [
          { label: "原文", value: sf.Source },
          { label: "译文", value: sf.Target },
          { label: "双语对照", value: sf.Together },
        ],
        df = ({ langList: t }) => {
          const [n, o] = (0, e.useState)(!1),
            [a, u] = (0, e.useState)(!1),
            [c, f] = (0, e.useState)(!1),
            [d, p] = (0, e.useState)(!1),
            [v, m] = (0, e.useState)(sf.Together),
            [b, w] = (0, e.useState)(),
            [E, k] = (0, e.useState)(),
            [_, L] = (0, e.useState)([]),
            [R, M] = (0, e.useState)([]),
            [I, z] = (0, e.useState)([]),
            [B, U] = (0, e.useState)([]),
            W = (0, e.useMemo)(() => T(), []);
          (0, e.useEffect)(() => {
            W &&
              N({
                type: "CHANGE_SHOW_FUNC",
                showFunc: v,
                pageSourceLang: b,
                pageTargetLang: E,
              });
          }, [W, v, b, E]);
          const V = (0, e.useCallback)(() => {
              o(!1),
                P("source"),
                B.forEach((e) => {
                  e.element.placeholder = e.source;
                }),
                chrome.storage.sync.set({ PAGE_TRANSLATE_SWITCHER: !1 }),
                W && N({ type: "CLOSE_PAGE_TRANSLATE" });
            }, [B, W]),
            X = (0, e.useCallback)(
              (e) => {
                const t = e.data;
                if ("TRANSMART_CRX" !== t.type) return;
                const {
                  type: n,
                  showFunc: r,
                  pageSourceLang: o,
                  pageTargetLang: a,
                } = t.payload;
                switch (n) {
                  case "CLOSE_PAGE_TRANSLATE":
                    V();
                    break;
                  case "CHANGE_SHOW_FUNC":
                    fe(r), te(o), ne(a);
                }
              },
              [V]
            );
          (0, e.useEffect)(
            () => (
              W || window.addEventListener("message", X),
              () => {
                window.removeEventListener("message", X);
              }
            ),
            [W, X]
          );
          const Y = (e) =>
            new Promise((n) => {
              let o = [];
              if (
                ((o =
                  e && S(I)
                    ? I.map(
                        ({ element: e, source: t }) => (
                          (e.__ORIGIN_TEXT = t), e
                        )
                      )
                    : [...C(document.body)]),
                !S(o))
              )
                return void n(!0);
              const a = async (e, o = 1) => {
                try {
                  p(!0);
                  const u = await Promise.all(
                      e.map(async ({ element: e, sourcelang: n }) => {
                        var o, a, u, c, s;
                        const f = e.__ORIGIN_TEXT
                          ? e.__ORIGIN_TEXT
                          : "FONT" === e.nodeName
                          ? e.textContent
                          : e.innerHTML;
                        if (!n) {
                          var d;
                          const o = { header: { fn: i }, text: f },
                            a = await r(o);
                          if (
                            (null == a ||
                            null === (d = a.header) ||
                            void 0 === d
                              ? void 0
                              : d.ret_code) === tf.Busy ||
                            null == a ||
                            !a.language
                          )
                            return {
                              element: e,
                              succ: !1,
                              source: f,
                              target: void 0,
                              sourceLang: b,
                              targetLang: E,
                            };
                          if ((null == a ? void 0 : a.language) === E)
                            return {
                              element: e,
                              succ: !0,
                              source: f,
                              target: f,
                              sourceLang: a.language,
                              targetLang: E,
                            };
                          n = t.some((e) => e.source.code === a.language)
                            ? a.language
                            : b;
                        }
                        const p = `${n}-${E}-${f}`,
                          v = nf[p];
                        if (v)
                          return {
                            element: e,
                            succ: !0,
                            memo: !0,
                            source: f,
                            target: v,
                            sourceLang: n,
                            targetLang: E,
                          };
                        const m = {
                            header: { fn: l },
                            source: {
                              lang: n,
                              text_block: f,
                              orig_url: window.location.href,
                            },
                            target: { lang: E },
                          },
                          g = await r(m),
                          h =
                            ((y = null == g ? void 0 : g.auto_translation)
                              ? null === (A = y.replace(/〈/g, "<")) ||
                                void 0 === A
                                ? void 0
                                : A.replace(/〉/g, ">")
                              : "") || f;
                        var y, A;
                        const w =
                          (null == g || null === (o = g.header) || void 0 === o
                            ? void 0
                            : o.ret_code) === tf.Succ ||
                          !(
                            null != g &&
                            null !== (a = g.message) &&
                            void 0 !== a &&
                            null !== (u = a.toLocaleLowerCase) &&
                            void 0 !== u &&
                            null !== (c = u.call(a)) &&
                            void 0 !== c &&
                            null !== (s = c.includes) &&
                            void 0 !== s &&
                            s.call(c, "busy")
                          );
                        return (
                          w &&
                            ((e, t) => {
                              nf[e] = t;
                            })(p, h),
                          {
                            element: e,
                            succ: w,
                            source: f,
                            target: h,
                            sourceLang: n,
                            targetLang: E,
                          }
                        );
                      })
                    ),
                    c = u.filter(
                      ({
                        source: e,
                        sourceLang: t,
                        succ: n,
                        target: r,
                        targetLang: o,
                      }) => n
                    );
                  if (S(c)) {
                    const e = c.reduce((e, t) => {
                      const n = e.findIndex((e) => e.element === t.element);
                      return n > -1 ? (e[n] = t) : e.push(t), e;
                    }, I);
                    z([...e]);
                  }
                  const s = u
                    .filter((e) => !e.succ)
                    .map(({ element: e, sourceLang: t }) => ({
                      element: e,
                      sourcelang: t,
                    }));
                  S(s) ? a(s, ++o) : n(!0);
                } finally {
                  p(!1);
                }
              };
              S(o) && a(o.map((e) => ({ element: e })));
            });
          (0, e.useEffect)(() => {
            I.forEach((e) => {
              const t = (({ target: e, element: t }) => {
                var n, r;
                if (
                  e === (null == t ? void 0 : t.textContent) ||
                  e === (null == t ? void 0 : t.innerHTML)
                )
                  return t;
                const o = t.nextElementSibling;
                if (
                  "TARGET" ===
                  (null == o ||
                  null === (n = (r = o).getAttribute) ||
                  void 0 === n
                    ? void 0
                    : n.call(r, s))
                )
                  return g(o) ? (o.innerHTML = e) : (o.textContent = e), t;
                if (g(t)) {
                  var a, l;
                  const n = t.cloneNode(!0);
                  return (
                    (n.innerHTML = e),
                    null === (a = n.setAttribute) ||
                      void 0 === a ||
                      a.call(n, s, "TARGET"),
                    null === (l = t.setAttribute) ||
                      void 0 === l ||
                      l.call(t, s, "SOURCE"),
                    A(n, t),
                    t
                  );
                }
                {
                  const n = document.createElement("font");
                  n.setAttribute(s, "TARGET"), (n.textContent = e);
                  const r = document.createElement("font");
                  return (
                    r.setAttribute(s, "SOURCE"),
                    (r.textContent = t.textContent + " "),
                    t.replaceWith(r),
                    A(n, r),
                    r
                  );
                }
              })(e);
              e.element = t;
            });
          }, [I]),
            (0, e.useEffect)(() => {
              if (n)
                switch (v) {
                  case sf.Together:
                    P("all");
                    break;
                  case sf.Source:
                    P("source");
                    break;
                  case sf.Target:
                    P("target");
                }
            }, [n, v, I]),
            (0, e.useEffect)(() => {
              if (n)
                switch (v) {
                  case sf.Together:
                    B.forEach(({ element: e, source: t, target: n }) => {
                      var r;
                      e.__TRANSMART_OLD_NODE ||
                        (e.__TRANSMART_OLD_NODE = { ...e }),
                        (e.placeholder =
                          ((null === (r = e.__TRANSMART_OLD_NODE) ||
                          void 0 === r
                            ? void 0
                            : r.placeholder) || t) +
                          " " +
                          n);
                    });
                    break;
                  case sf.Source:
                    B.forEach(({ element: e, source: t }) => {
                      var n;
                      e.placeholder =
                        (null === (n = e.__TRANSMART_OLD_NODE) || void 0 === n
                          ? void 0
                          : n.placeholder) || t;
                    });
                    break;
                  case sf.Target:
                    B.forEach(({ element: e, target: t }) => {
                      e.__TRANSMART_OLD_NODE ||
                        (e.__TRANSMART_OLD_NODE = { ...e }),
                        (e.placeholder = t);
                    });
                }
            }, [B, n, v]);
          const Q = (0, e.useCallback)(
              async (e = !1) => {
                try {
                  if (!n) return;
                  if (!b || !E) return;
                  if (b === E) return;
                  await Y(e),
                    await (async (e) => {
                      let t = [];
                      t =
                        e && S(B)
                          ? B.map(
                              (e) => (
                                (e.element.__ORIGIN_TEXT = e.source), e.element
                              )
                            )
                          : j();
                      const n = async (e) => {
                        const t = await Promise.all(
                            e.map(async (e) => {
                              var t, n, o;
                              const a = e.__ORIGIN_TEXT || e.placeholder,
                                u = await r({ header: { fn: i }, text: a });
                              if (
                                (null == u ||
                                null === (t = u.header) ||
                                void 0 === t
                                  ? void 0
                                  : t.ret_code) === tf.Busy ||
                                !u.language
                              )
                                return {
                                  element: e,
                                  succ: !1,
                                  source: a,
                                  target: void 0,
                                  sourceLang: b,
                                  targetLang: E,
                                };
                              if (u.language === E)
                                return {
                                  element: e,
                                  succ: !0,
                                  source: a,
                                  target: a,
                                  sourceLang: u.language,
                                  targetLang: E,
                                };
                              const c = await r({
                                header: { fn: l },
                                source: { lang: u.language, text_block: a },
                                target: { lang: E },
                              });
                              return {
                                element: e,
                                succ:
                                  (null == c ||
                                  null === (n = c.header) ||
                                  void 0 === n
                                    ? void 0
                                    : n.ret_code) === tf.Succ ||
                                  (null == c ||
                                  null === (o = c.header) ||
                                  void 0 === o
                                    ? void 0
                                    : o.ret_code) !== tf.Busy,
                                source: a,
                                target:
                                  (null == c ? void 0 : c.auto_translation) ||
                                  a,
                                sourceLang: u.language,
                                targetLang: E,
                              };
                            })
                          ),
                          o = t.filter((e) => e.succ);
                        if (S(o)) {
                          const e = o.reduce((e, t) => {
                            const n = e.findIndex(
                              (e) => e.element === t.element
                            );
                            return n > -1 ? (e[n] = t) : e.push(t), e;
                          }, B);
                          U([...e]);
                        }
                        const a = t
                          .filter((e) => !e.succ)
                          .map((e) => e.element);
                        S(a) && (await n(a));
                      };
                      S(t) && (await n(t));
                    })(e);
                } catch (e) {}
              },
              [b, E, n]
            ),
            K = (0, e.useCallback)(() => {
              Q();
            }, [Q]),
            G = F(K, { wait: 200 });
          (0, e.useEffect)(() => {
            const e = [...document.querySelectorAll("*")].filter(O);
            return (
              e.forEach((e) => e.addEventListener("scroll", G.run)),
              window.addEventListener("scroll", G.run),
              () => {
                e.forEach((e) => e.removeEventListener("scroll", G.run)),
                  window.removeEventListener("scroll", G.run);
              }
            );
          }, [W, G.run]);
          const q = (0, e.useCallback)(
              (e) => {
                const t = ((e) =>
                  e.some((e) => {
                    switch (e.type) {
                      case "childList":
                        return [...e.addedNodes].some((e) => {
                          var t, n;
                          return !(
                            h(e) ||
                            (null != e &&
                              null !== (t = (n = e).hasAttribute) &&
                              void 0 !== t &&
                              t.call(n, s))
                          );
                        });
                      case "attributes":
                        return "style" === e.attributeName;
                      default:
                        return !1;
                    }
                  }))(e);
                t && Q();
              },
              [Q]
            ),
            J = (0, e.useCallback)(async () => {
              const e = (() => {
                  const e = [],
                    t = [...document.childNodes];
                  for (; t.length; ) {
                    const n = t.shift();
                    h(n)
                      ? e.push(n)
                      : !x.includes(n.nodeName) &&
                        y(n) &&
                        t.unshift(...n.childNodes);
                  }
                  return e
                    .reduce((e, t) => {
                      const n = t.textContent.trim();
                      return n ? e + n : e;
                    }, "")
                    .replace(/(\n| |\t)/g, " ");
                })(),
                t = Math.floor(e.length / 5),
                n = e.slice(2 * t, e.length - t);
              if (n && !b) {
                try {
                  var o;
                  const e = await r({ header: { fn: i }, text: n });
                  if (
                    (null == e || null === (o = e.header) || void 0 === o
                      ? void 0
                      : o.ret_code) === tf.Succ
                  ) {
                    const t = e.language;
                    w(t),
                      N({ sourceLang: t }),
                      chrome.storage.sync.get(
                        ["validLangList"],
                        ({ validLangList: e }) => {
                          S(e) && e.includes(t) && (Z(), u(!0));
                        }
                      );
                  }
                } catch (e) {}
                return [];
              }
            }, [b]),
            Z = () => {
              o(!0);
            },
            $ = (0, e.useCallback)(
              (e) => {
                chrome.storage.sync.get(
                  ["validLangList"],
                  ({ validLangList: t }) => {
                    const n = e
                      ? [...new Set([...(t || []), b])]
                      : t.filter((e) => e !== b);
                    chrome.storage.sync.set({ validLangList: n });
                  }
                ),
                  u(e);
              },
              [b]
            ),
            ee = (0, e.useCallback)(async () => {
              var e;
              if (!b) return;
              const n = (
                (null === (e = t.find((e) => e.source.code === b)) ||
                void 0 === e
                  ? void 0
                  : e.target_list) || []
              )
                .sort((e) => ("zh" === e.code || "en" === e.code ? -1 : 1))
                .filter((e) => e.code !== b);
              M(n),
                chrome.storage.sync.get(
                  ["defaultTargetLang", "validLangList"],
                  (e) => {
                    const t = null == e ? void 0 : e.defaultTargetLang;
                    t && t !== b && n.find((e) => e.code === t)
                      ? k(t)
                      : S(n) && k(n[0].code),
                      S(e.validLangList) && $(e.validLangList.includes(b));
                  }
                );
            }, [t, b, $]),
            te = (e) => {
              w(e);
            },
            ne = (e) => {
              k(e), chrome.storage.sync.set({ defaultTargetLang: e });
            },
            re = (0, e.useCallback)(() => {
              chrome.storage.sync.set({ PAGE_TRANSLATE_SWITCHER: !0 }),
                b && E ? Q(!0) : J();
            }, [J, Q, b, E]);
          (0, e.useEffect)(() => {
            b && E && n && Q(!0);
          }, [Q, n, b, E]),
            (0, e.useEffect)(() => {
              chrome.storage.sync.get(["PAGE_TRANSLATE_SWITCHER"], (e) => {
                e.PAGE_TRANSLATE_SWITCHER && re();
              });
            }, [re]);
          const oe = (0, e.useCallback)(
            (e) => {
              "translate-page" === e && (n ? V() : (re(), Z()));
            },
            [n]
          );
          (0, e.useEffect)(() => {
            const e = new MutationObserver(q);
            return (
              e.observe(document.body, {
                characterData: !1,
                attributes: !0,
                childList: !0,
                subtree: !0,
              }),
              chrome.runtime.onMessage.addListener(oe),
              () => {
                e.disconnect(), chrome.runtime.onMessage.removeListener(oe);
              }
            );
          }, [oe, q]),
            (0, e.useEffect)(() => {
              L(t);
            }, [t]),
            (0, e.useEffect)(() => {
              ee();
            }, [ee]);
          const ae = (0, e.useCallback)(
              (e) => {
                const { key: t } = e;
                chrome.storage.sync.get(
                  ["pageTranslateHotkey"],
                  ({ pageTranslateHotkey: r }) => {
                    const o = [];
                    e.metaKey && o.push("Meta"),
                      e.shiftKey && o.push("Shift"),
                      e.altKey && o.push("Alt"),
                      e.ctrlKey && o.push("Ctrl"),
                      "Control" === t || o.includes(t) || o.push(t);
                    const a = o.sort().join("").toLocaleLowerCase();
                    r.split(" + ").sort().join("").toLocaleLowerCase() === a &&
                      (n ? V() : (re(), Z()));
                  }
                );
              },
              [n]
            ),
            le = (0, e.useCallback)(() => {
              window.removeEventListener("keydown", ae);
            }, [ae]),
            ie = (0, e.useCallback)(() => {
              chrome.storage.sync.get(
                ["isQuickShowPageTranslate"],
                ({ isQuickShowPageTranslate: e }) => {
                  e ? window.addEventListener("keydown", ae) : le();
                }
              );
            }, [ae, le]),
            ue = (0, e.useCallback)(
              (e) => {
                e.defaultTargetLang && (ee(), ie());
              },
              [ie, ee]
            );
          (0, e.useEffect)(
            () => (
              ie(),
              () => {
                le();
              }
            ),
            [ie, le]
          ),
            (0, e.useEffect)(
              () => (
                chrome.storage.onChanged.addListener(ue),
                () => {
                  chrome.storage.onChanged.removeListener(ue);
                }
              ),
              [ue]
            );
          const ce = (0, e.useCallback)((e) => {
            const t = e.composedPath(),
              n = null == t ? void 0 : t.some((e) => e.id === cf);
            f(n);
          }, []);
          (0, e.useEffect)(
            () => (
              document.addEventListener("mousemove", ce),
              () => {
                document.removeEventListener("mousemove", ce);
              }
            ),
            [ce]
          );
          const se = (e) => e.parentElement.parentElement,
            fe = (e) => {
              m(e), chrome.storage.sync.set({ pageShowFunc: e });
            };
          (0, e.useEffect)(() => {
            chrome.storage.sync.get(["pageShowFunc"], ({ pageShowFunc: e }) => {
              m(e || sf.Target);
            });
          }, []);
          return n && W
            ? e.createElement(
                "div",
                {
                  id: cf,
                  className: (0, D.Z)(
                    H()("action-page-translate", { focused: c }),
                    uf,
                    {
                      autoResolveMultipleImports: !0,
                      handleMissingStyleName: "warn",
                    }
                  ),
                },
                e.createElement(
                  "div",
                  { className: "trans-ctx--banner-translate" },
                  e.createElement("img", {
                    className: "trans-ctx--icon-title",
                    src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAkACQAAD/4QB0RXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAACQAAAAAQAAAJAAAAABAAKgAgAEAAAAAQAAADKgAwAEAAAAAQAAAMIAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/iDSBJQ0NfUFJPRklMRQABAQAADRBhcHBsAhAAAG1udHJSR0IgWFlaIAfmAAkADQALABcAAGFjc3BBUFBMAAAAAEFQUEwAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtYXBwbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEWRlc2MAAAFQAAAAYmRzY20AAAG0AAAB6mNwcnQAAAOgAAAAI3d0cHQAAAPEAAAAFHJYWVoAAAPYAAAAFGdYWVoAAAPsAAAAFGJYWVoAAAQAAAAAFHJUUkMAAAQUAAAIDGFhcmcAAAwgAAAAIHZjZ3QAAAxAAAAAMG5kaW4AAAxwAAAAPm1tb2QAAAywAAAAKHZjZ3AAAAzYAAAAOGJUUkMAAAQUAAAIDGdUUkMAAAQUAAAIDGFhYmcAAAwgAAAAIGFhZ2cAAAwgAAAAIGRlc2MAAAAAAAAACERpc3BsYXkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABtbHVjAAAAAAAAACYAAAAMaHJIUgAAABIAAAHYa29LUgAAABIAAAHYbmJOTwAAABIAAAHYaWQAAAAAABIAAAHYaHVIVQAAABIAAAHYY3NDWgAAABIAAAHYZGFESwAAABIAAAHYbmxOTAAAABIAAAHYZmlGSQAAABIAAAHYaXRJVAAAABIAAAHYZXNFUwAAABIAAAHYcm9STwAAABIAAAHYZnJDQQAAABIAAAHYYXIAAAAAABIAAAHYdWtVQQAAABIAAAHYaGVJTAAAABIAAAHYemhUVwAAABIAAAHYdmlWTgAAABIAAAHYc2tTSwAAABIAAAHYemhDTgAAABIAAAHYcnVSVQAAABIAAAHYZW5HQgAAABIAAAHYZnJGUgAAABIAAAHYbXMAAAAAABIAAAHYaGlJTgAAABIAAAHYdGhUSAAAABIAAAHYY2FFUwAAABIAAAHYZW5BVQAAABIAAAHYZXNYTAAAABIAAAHYZGVERQAAABIAAAHYZW5VUwAAABIAAAHYcHRCUgAAABIAAAHYcGxQTAAAABIAAAHYZWxHUgAAABIAAAHYc3ZTRQAAABIAAAHYdHJUUgAAABIAAAHYcHRQVAAAABIAAAHYamFKUAAAABIAAAHYAFAASABMACAAMgA3ADgAQgAxAAB0ZXh0AAAAAENvcHlyaWdodCBBcHBsZSBJbmMuLCAyMDIyAABYWVogAAAAAAAA89gAAQAAAAEWCFhZWiAAAAAAAABxKAAAOfEAAAJqWFlaIAAAAAAAAF16AAC2rwAAD3BYWVogAAAAAAAAKDMAAA9gAADBUmN1cnYAAAAAAAAEAAAAAAUACgAPABQAGQAeACMAKAAtADIANgA7AEAARQBKAE8AVABZAF4AYwBoAG0AcgB3AHwAgQCGAIsAkACVAJoAnwCjAKgArQCyALcAvADBAMYAywDQANUA2wDgAOUA6wDwAPYA+wEBAQcBDQETARkBHwElASsBMgE4AT4BRQFMAVIBWQFgAWcBbgF1AXwBgwGLAZIBmgGhAakBsQG5AcEByQHRAdkB4QHpAfIB+gIDAgwCFAIdAiYCLwI4AkECSwJUAl0CZwJxAnoChAKOApgCogKsArYCwQLLAtUC4ALrAvUDAAMLAxYDIQMtAzgDQwNPA1oDZgNyA34DigOWA6IDrgO6A8cD0wPgA+wD+QQGBBMEIAQtBDsESARVBGMEcQR+BIwEmgSoBLYExATTBOEE8AT+BQ0FHAUrBToFSQVYBWcFdwWGBZYFpgW1BcUF1QXlBfYGBgYWBicGNwZIBlkGagZ7BowGnQavBsAG0QbjBvUHBwcZBysHPQdPB2EHdAeGB5kHrAe/B9IH5Qf4CAsIHwgyCEYIWghuCIIIlgiqCL4I0gjnCPsJEAklCToJTwlkCXkJjwmkCboJzwnlCfsKEQonCj0KVApqCoEKmAquCsUK3ArzCwsLIgs5C1ELaQuAC5gLsAvIC+EL+QwSDCoMQwxcDHUMjgynDMAM2QzzDQ0NJg1ADVoNdA2ODakNww3eDfgOEw4uDkkOZA5/DpsOtg7SDu4PCQ8lD0EPXg96D5YPsw/PD+wQCRAmEEMQYRB+EJsQuRDXEPURExExEU8RbRGMEaoRyRHoEgcSJhJFEmQShBKjEsMS4xMDEyMTQxNjE4MTpBPFE+UUBhQnFEkUahSLFK0UzhTwFRIVNBVWFXgVmxW9FeAWAxYmFkkWbBaPFrIW1hb6Fx0XQRdlF4kXrhfSF/cYGxhAGGUYihivGNUY+hkgGUUZaxmRGbcZ3RoEGioaURp3Gp4axRrsGxQbOxtjG4obshvaHAIcKhxSHHscoxzMHPUdHh1HHXAdmR3DHeweFh5AHmoelB6+HukfEx8+H2kflB+/H+ogFSBBIGwgmCDEIPAhHCFIIXUhoSHOIfsiJyJVIoIiryLdIwojOCNmI5QjwiPwJB8kTSR8JKsk2iUJJTglaCWXJccl9yYnJlcmhya3JugnGCdJJ3onqyfcKA0oPyhxKKIo1CkGKTgpaymdKdAqAio1KmgqmyrPKwIrNitpK50r0SwFLDksbiyiLNctDC1BLXYtqy3hLhYuTC6CLrcu7i8kL1ovkS/HL/4wNTBsMKQw2zESMUoxgjG6MfIyKjJjMpsy1DMNM0YzfzO4M/E0KzRlNJ402DUTNU01hzXCNf02NzZyNq426TckN2A3nDfXOBQ4UDiMOMg5BTlCOX85vDn5OjY6dDqyOu87LTtrO6o76DwnPGU8pDzjPSI9YT2hPeA+ID5gPqA+4D8hP2E/oj/iQCNAZECmQOdBKUFqQaxB7kIwQnJCtUL3QzpDfUPARANER0SKRM5FEkVVRZpF3kYiRmdGq0bwRzVHe0fASAVIS0iRSNdJHUljSalJ8Eo3Sn1KxEsMS1NLmkviTCpMcky6TQJNSk2TTdxOJU5uTrdPAE9JT5NP3VAnUHFQu1EGUVBRm1HmUjFSfFLHUxNTX1OqU/ZUQlSPVNtVKFV1VcJWD1ZcVqlW91dEV5JX4FgvWH1Yy1kaWWlZuFoHWlZaplr1W0VblVvlXDVchlzWXSddeF3JXhpebF69Xw9fYV+zYAVgV2CqYPxhT2GiYfViSWKcYvBjQ2OXY+tkQGSUZOllPWWSZedmPWaSZuhnPWeTZ+loP2iWaOxpQ2maafFqSGqfavdrT2una/9sV2yvbQhtYG25bhJua27Ebx5veG/RcCtwhnDgcTpxlXHwcktypnMBc11zuHQUdHB0zHUodYV14XY+dpt2+HdWd7N4EXhueMx5KnmJeed6RnqlewR7Y3vCfCF8gXzhfUF9oX4BfmJ+wn8jf4R/5YBHgKiBCoFrgc2CMIKSgvSDV4O6hB2EgITjhUeFq4YOhnKG14c7h5+IBIhpiM6JM4mZif6KZIrKizCLlov8jGOMyo0xjZiN/45mjs6PNo+ekAaQbpDWkT+RqJIRknqS45NNk7aUIJSKlPSVX5XJljSWn5cKl3WX4JhMmLiZJJmQmfyaaJrVm0Kbr5wcnImc951kndKeQJ6unx2fi5/6oGmg2KFHobaiJqKWowajdqPmpFakx6U4pammGqaLpv2nbqfgqFKoxKk3qamqHKqPqwKrdavprFys0K1ErbiuLa6hrxavi7AAsHWw6rFgsdayS7LCszizrrQltJy1E7WKtgG2ebbwt2i34LhZuNG5SrnCuju6tbsuu6e8IbybvRW9j74KvoS+/796v/XAcMDswWfB48JfwtvDWMPUxFHEzsVLxcjGRsbDx0HHv8g9yLzJOsm5yjjKt8s2y7bMNcy1zTXNtc42zrbPN8+40DnQutE80b7SP9LB00TTxtRJ1MvVTtXR1lXW2Ndc1+DYZNjo2WzZ8dp22vvbgNwF3IrdEN2W3hzeot8p36/gNuC94UThzOJT4tvjY+Pr5HPk/OWE5g3mlucf56noMui86Ubp0Opb6uXrcOv77IbtEe2c7ijutO9A78zwWPDl8XLx//KM8xnzp/Q09ML1UPXe9m32+/eK+Bn4qPk4+cf6V/rn+3f8B/yY/Sn9uv5L/tz/bf//cGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAAClt2Y2d0AAAAAAAAAAEAAQAAAAAAAAABAAAAAQAAAAAAAAABAAAAAQAAAAAAAAABAABuZGluAAAAAAAAADYAAKVAAABVgAAATUAAAKLAAAAngAAADoAAAFBAAABUQAACMzMAAjMzAAIzMwAAAAAAAAAAbW1vZAAAAAAAAEEMAAAJSQAAFITdBAeAAAAAAAAAAAAAAAAAAAAAAHZjZ3AAAAAAAAMAAAACZmYAAwAAAAJmZgADAAAAAmZmAAAAAjMzAAAAAAACMzMAAAAAAAIzMwAA/8AAEQgAwgAyAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAQEBAQEBAgEBAgMCAgIDBAMDAwMEBgQEBAQEBgcGBgYGBgYHBwcHBwcHBwgICAgICAkJCQkJCwsLCwsLCwsLC//bAEMBAgICAwMDBQMDBQsIBggLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLC//dAAQABP/aAAwDAQACEQMRAD8A/v4oor+Sb9sr9vH/AIKJeJf26vjb8Kv2S/iLaeGvCXwn0G4124gu7O0dFt9Jtbf7YqSSWlxI80lzIyRqzBSxALKK+o4V4UxOfV6lDD1IQ5I87lNtRtzRjb3Yyd25Kyt3PEzzPaOV0oVa0JS5pcqUUm72b6taJLXU/rZor+Fvx5/wWc/at1D9ibw3p998SNRtvi1ceJJ737XZ2FrbwzeHDFJAqytHEsfmpdxNgBAShBJNcfqf/BZr42TftgxfH608X+Iv+EatfC6xR+HhdSrpsmuf2F9nJktBIIGiGqsZS23JRQwGcCv0Cl4HZ7NVG5w91VNubVwaSSvFfHd8r8nex8pU8Tcri4WjLXk7aKV7t2b+G2q81Y/vUor+f/8A4IJ/tk/Ef9qX4aeNdL+Nni/VvF/i7SL6C4lN5AiWtlYzqUgRJEVd0krxzMwI4VRjoa/oAr8z4kyGvkuY1ssxLTnTaTavZ3Saauk7WfbXdaH2eT5pSzHB08bRVoz6O11Z21s2ugUUUV4Z6Z//0P79yQoLMcAdTX+b94wu/ij8TtB/aF/ba8JeJ20HRNe8SDSb2yXcH1eLxDdz3n2cEcBIlt1kdT1GAOM1/et+3R8W4fgT+xz8S/is83kTaT4evjauTj/TJozFbDP+1M6D8a/z3df+B/xZ8O/stfC/VLfxJcT6P8X9e1KXT/DKFxALnSJI7BLx13lGkkeeSJDsDBVYZIOB/RXgZg1GjisVOSj7SpSpxcldPk5qtSK0au4R3e2972PyHxOxDdShQjFvlhObs7W5rU4Pvbme3Xba57b4z+L2tfs8/AzwXo/wf+NUeoahJpdpM/haw0oSDSXu1+0zpcXsq+WX86WQlE8xlY7GCYr5xsvFHi74C6Do/wAZ/hh8RtPu/E3i9Loavp1lG0l5p6+YjoLhp4fJYzH5/wB0zbSuGIJxX6n/APBQv9jz4XfAv9rvwPdfse+B7fxh4V0S0stT10NqC30Gq363krzwTGeWZEVoURGVUAAc5U9/m39rfV/FHxF8WeH/AI+Wn7N+j/DzwZ4Da2l1uw0SOIWl4st0gH2uWGNdqykrApZCAW4yWxX7Hk2aYTE0qFSjDmhX5pTc/YRk278tOcNG7yacd5XtzS3T/PMxwOIozqxqStKnaMVH2rSStecZbKyWvS1+VbH9Ef8AwRF1E+LLvxJ46g+PFt8So7zTrdZPDq2A0y806Xfky3ELAMxX/Vq6F4slsO2RX9B9fkZ/wR++H37OOs/s+L+2B8EPh1B8N9Q+KHm/2lptteS3lsv9l3d1Ahg83AiRzucoiooyAAQoNfrnX8h8fYmFbPsU4RceV8rUlTi04rlkmqXuO0k0mt0r9T+gOFaMqeV0OZp3XNdOTTUtU/f97VNOz22Ciiivjj6E/9H+oH/gtd8J/wBpH49/sa/8KT/Zo8OT+JNQ8Qa1ZDU4YZYYtmn2u+43EzSRg/6RHBgDPc9q/NHxN/wTT/aVuP2s/wBlPwrpvhOU/Dv4SaFoH9taiJoPsw1SC5kvtQOwyeYRLKEU4Q5J6kc1/VLRX3OS8fY7K8DHAYanDlj7R3alfmqR5HL4krxjpHTrrc+YzLhXC43EyxVacrvkVk1a0JcyW2zer19LH4WfGL/gg1+wxd+FPFPi3wB4VvrvxRJaX15ptpLqs8drLflHeGNgrLtjaXapAYYXoR1r8FNS/wCCfH/BSK2+EPib4PfDr9nOHwzaeLpbB9TurfVBcXEkWnSPLHEpuNQkVUMjB3wuSUXniv7vqK9TJfFfO8DBwry+sK8WvayqS5XF3VkpxW6T1T1SOLMuA8sxUlKkvZaNPkUFe+ju3Fva60toz5P/AGFPg3qf7Pv7HHw1+D2vWv2LVNE8P2Ueo2+Vbyr6RBLcrlSVOJ3cZBIPWvrCiivzzG4upisRUxVX4pycn6yd3+LPrsNQjQowow+GKSXolZBRRRXKbH//0v7+KKK/nG/4L7/tBftJfsu6n8Hvir8DvFWq6Fpj3t/BqlpZ3Lw291JAbaaBZlXhwyiZSGyNvHc17/DGQVc7zKlllGajOfNZyva6i5W072svM8rOs1hluDnjakXKMbXS31aX4Xuf0c0V/PL/AMFG/CX/AAUJ0i88RftjfA34/WXgr4P/ANm6dqEdncec0lqkkUMTFEhs5y6yyESDDFiXIA6V8oav8I/+CyVv+zlqv7VHhf8Aam8P+IfB+l6Ld66LvTruaVZ7ayieWQRn7AB5g2MuxiCHG1sEHH0uA4Bp4nC0sS8yowU2o2kquk2k+RtU7cyvqr/geNiuKpUa1Sj9TqS5U3dOGsbtcyXPfldtHY/rJor8If8Aggh+0h+0v+09+z9408c/tDeJLjxMlj4gXT9OubpIxKhS3jlmTciLkfvYyM5xk1+71fK8RZJVyfMa2W15qU6bs3G9nonpdJ9ddNz3MozOnmGDp4ylFqM1dJ7726X7BRRRXinpH//T/v3bcFJQZPYHiv4tvi78TP8AgqT8Lv2+Phv+xn+0T8VNN8VT+K9V0e4li020t7y0trbUbtoGU/abGJldY1djhThCPmJJA/tKr+Jz4uftRfB3wt/wXy8UftGfGvUWg8KfDie5hEcaGaaW40vTvsUcECDG6Rr07gCQo5LMqgsP13wkpSq1swisPGry0JTScFOXOtIRhdNpycum9l2PgOPZxhTwjdZwvVjFtScVyvWTlZq6SXXa7PXv+Cvn/BUvxn8S/gp42/ZDi+Ems+FNEuNcTTIfEV88kdteW+l3YlQxRNbRged5CuqiU7Vz1r5SH/BRv4gfDH/gk4n7E9v8INc0Wy1DTHsF8WXUsiWUy6jdNdyOqNaqpE0cjqgEp4OQSBX1T/wXh+PepftL/Cn9mrQvDOnyadP8QLSTxKulyyCSWMagltHZBioALESyg8cHivpD/g4z1/SPhX+xn8Kv2c9APlQT6ujwIOM2miWZg249AbiM/UCv03II5dDCZHlcsuSdevUqcvtJvknQ911G7+9dJ+6/ctsfF5q8ZLEZnjljG1SpQhfkiuaNT3lBdrX3+I+6/wDggz8Nk+H/APwTX8I6m8RiuPFF7qWsTgjBJe4e3jb33QwRkexr9jq+c/2QPhs/wd/ZT+G/wtnj8qfQfDWl2dwuMf6RHboJSR6tJuJ9zX0ZX85cUZh9ezjGYy91OpOS9HJ2/Cx+v5JhPquX4fD/AMsIp+qSv+IUUUV4R6h//9T+/iv5e/2Rf+CFWpfEf4xax+1f/wAFCAkl34g1e81tPCFvKJF827mabN/PGSrYZiTDCxU8bpCN0df1CUV9HkfFWY5RQxFHL58jrJKUl8SSvpF/ZvfVrXRWa1PHzPIsJmFWjUxceZU22ov4W3bVrra2i21d0z+dL9sj9gL9pX4+f8FXfhF8WvC/g+KH4SfD6LQoGvY7uyigji0y5kvHRbTzhMFyywgLDjAGPlGa47/gud+xD+2/+2T8ZfAUv7O3gseJPDnhbSZne4fULC1Rb68n/exmO6uInOI4ISSFKndjOQQP6XqK9zL/ABGzLCYnA4qnSpuWFpunBNSatK/NKXvpuTu7tNLyPMxfB+DxFHE0JzmlXmpys430tZL3fhVuqb8z4c/YF1P9ubXPhBfav+33p+m6P4tl1ORbOw03yWWKwRECtI9vNPGzvJ5hwG4UDPJwPuOiivjMwxn1rEzxCpxp8zvywVoryiruy+bPo8Jh/YUY0eeUrLeTvJ+bemvyCiiiuM6D/9X+/iiiv46P2/v+CgX/AAUd+EP7UPxt+HXhH4sweHNL+H5ttTsNIOl2Rkn07UJrSKFIJ3tXd5EW8jkk8x87VfBO3FfV8I8I4riHFTwuEqwhKKT99y1TlGOnLGT3kt7Luzws/wA/oZTRjXrwlJN2923ROWt3Hon5n9i9Ffw1+AP2pf2w/Gc2p+IfEH7T3ibTdR0DwtY+JtVuU0v7RoWmwan9m2RzNBMXkmxdRoFSxk2yseV2My4fib9v39uL4RfHL/hVHjL9pln0HV9AstTh8R/2XJPBHDqtpFe2zfZxam5SRkkQfcyu75sDIr7qPgxj5zlSpYum5RV2uStsrN2/d66STSWrurKzTPmH4jYWMVOeHmot2T5qfnv7+mqau9FbVn92FFfzJf8ABLL9oL9tfXP+Ck3jz9l747/E6Tx/ofhHw/c3E0nkolvJcLNZrG8eYkkVl89lIJ5w2QcCv6ba/POJuHauS4uOEq1YzvCM043taSuviSadvI+tyXN4Zlh3XhBxtJxala94uz2bX4hRRRXzp65//9b+/C7u7WwtZL6+kSGCFGkkkkYKqKoySSeAAOST0r/NE/at8FfDPU/EPjT4s/BKTXNb8K23ir+xrfxFrN5HIdUmkjllZ44ktoztxFvBMpKRvFuUF+P9GD9orxRpfgf9n3x3401yGK5stH8Pape3EM6CSKSK3tpJHV1YFWUqpBBGCODX+brpvitfEng/4f8AhXxd8X9QttP1DX7j+19Nlt7y4tvDcO+3jGohA2y4kljaRiluvmBYNpOXUD+jPATD1IPGYyDdrwja0mmkpyekU3eysr2XvWtKTij8g8VK0JLD4eVr2k+ie8YrdrTW7trpfRJs++fg7+wZ4d1b/hfvwDhi1aw+M3w+09ILHR59StRYatDJcRwzTgyw22xUV45Iw8nImTuOfCfCH7Mfx2/ac1n4oaRouipdeK/Auj+H/DE9lJd20Yin037NYsBNJKsJKpYOBtkORnGaqJ8V/H/xu+GOu/BjWfEU3jjxT8SPHmj6TpWv6srTajPY2ayRurTzl7hI5ZZdPYRNIQvl4xkGvEvhxqGkeKrD/hUWgoW0nxL4uj1nUYj96HTdCgnZXPsILy6Zun+rr9poUsxh9YqzrL2l4NXjKSikqbqNXlF8knCdoOzUk1z2sl+cVamDl7KnGm+T3r2aTbbmorZrmSlG8ldNNPl3P6R/+DfayvfiF+0p+0X8etchMd1Pe2tqmSGC/bbm7mkjDAkHZ5MY4JGMV/U3X87X/Btb4K/sf9jHxX45uYys+u+LbhFc/wAcFpbW6qc+0jyiv6Ja/kzxUrqpxPjIx+GHLBeXJCMfzTP3ngak4ZJh3LeXNJ/9vSb/ACYUUUV+en1p/9f+y3/goZ4S+KPxA/Ym+JXw/wDgxpcmteJdf0WbTLSyidI3lF4RDKA0jIgxE7k5YZAx1r+PXwf/AME6f+ClPhLW/h9rD/s26JqieAop43t76Oxmh1pp55Zt+pD7UDclBKI0yQFSNFxgYP8AerRX6Bwn4h4zIMHUweHoU5xnJybnz31jyW92cdLX+9vsfKZ9wjh81xEMRWqzi4pJcvLbSXN1i9b2+4/ij+Cf/BMj9sX9n39nzSfiRpHwFs/E/wAWB4k1QRSalqkiz6RZfZLUWVzBDBfw2jsJ/tLZlWRgwTjAFUvCP/BL79sr4Ffs1aPqPgT4FWev/EnxZZ+JtK1fUbrUnF9otnfQ/YUEcK38dk3nW00xVjFKyknJGFr+2miven4zZxOUpTowfNLmlrV95e9aD/efAuZvlVk2lzX1v5UfDrL4pKNSSsrLSGj928l7nxPl3eq6W0t+b/8AwSV/Z78dfsw/sF+C/hR8UtMOj+JoG1C61K1Z0do5bm8mdAWjZlJ8kxjhjX6QUUV+Y5rmNXMMbXx1a3PVlKbtteTbaV76K+nkfa4DBwwmGpYWn8MIqKvvZK2vn3CiiivPOs//0P7+KKK/mz/4LtfFv9pD9lH4rfBv9p74ReK9e0/w7FeGy1fR7PUJ7fTLqaxmS7hSeBHEUhuYzNG+9TuSMA5AxX0HC+QTzrMaeW0qihOalyt7NqLlb52svM8nO81jluDljJwcoxte29m0r/K5/SZRX4l/8FYfjl+2H4Q/Z/8ABf7TP7Enjiz8NeDRBJea7fPYf2i81rfpA9jME+w3uyFAJN7/ACAGRM57fiv4i/bj/wCCpXh79m2L9qEftU+BL3RLp5Le20+2tbc6tNdxAF7ZbR9FWRZV3KWL7YwrK5cIysfpsi8NMdmuDp4yliaUVOThyy9pzKabXK+WnJJtK6V9tfTxc04zwuBxE8PUozlyxUrrks4tbq802tbXtuf2uUV+Fv8AwRI+NX/BQr9orwL4n+L/AO2PqU2o+F9QFmvheW6sLWxknK+abiWIW8MLPCQYwHcFWI+Q8Nn90q+S4gySplGYVcurVITnTaTcG3G9k2k2k7q9npo00e/lOZQzDCQxdOEoxlqlJWdr2vZN77rXVWYUUUV4x6J//9H+/dtwUlBk9geK/id/bB+JX/BXz9nP9oPwT+zX8ZPjDpmv6v49ntpbG20q3hu4YPtdybWIstzYQkEvuCYDcA8+v9sdfxd/t9ftFfCvTf8AgvNo/jz41XzW/hP4TjTd0sMbTuZNNtG1KOKNFyS73koiXOFDnLFVyw/XfB+MqmYYun9WhVjGjOpaVNTleCtFQum03KSul8Vl2PgPEFqGEoT9tKm3UjC6k4q0vicrNXSUeux+sn7ZP/BR39olp5P2df2FPgV4m8V6hfg6Y2ta54fu7bRY1YeWyxwzxRLIgXILzmKBcZIkQ1/LfN+yl43+DXxmsF8FjR/ix8TfCWozX3in4fWWjXl7BYi1kTckgSFLe7hDOI50tm2xnATfGGdf2J/a4/aE/ZE/bk8Y+HfjbrP7Uer/AARvH8PWdvN4Vs9P1G8FuXaS4V5ZrZ4YmlZJ1D7VbG0LuOK/Eb9lfw98GfF3xv8AFup/Fb4+6j8L7aETtZeJIrG8u7zVjJPzvEEiyJvUCV97n5sDk81+x8CZastyyq6dGVFqKdWLo1pSnJ3jZz5ffik27UErO0r8t7/nnFGNeNxtPnqKom/cftKcYxWjuo83ut/9PW+1r7f3r/sU/tUn9qX4Wx63rXgXX/h1rumJFDqGia3p09msLEEA20ssUaTwnaQpUBlA+dFyM/ZNflL/AMEhpfgxYfs8az4T+DvxevvjPHZ65LPe61f211ayRS3EMQWBUumdtqpGG+ViMsTwTX6tV/LvE+Eo4bNcRQw8HGClopKSaW+00ppdlJXta99z9uyWvUrYGlVqyUpNatOLX3xbi/O2l9gooorwT1D/0v7+K/mv+Ev/AAQ7m+Nf7WHjf9rf9ueYSWWu+JdR1TTfCdrMJN9vJcO1v9uuIyRsEe0CGFjkbd0g+aOv6UKK+gyPifMMohXjl8+SVVKLkviUU72i+l+rWuis0eTmeSYTMJUni48yg7pPZvu11t227pn5x/F3/gmd+w9q3hzxH4u0r4N+H9S8QyWd1cW0UdssRmuhGxjRQGSNdzgAfdUewr8jf+CQf/BHix8O+DfG2o/8FA/hbaTandXtnHo9vqrRXJjghSQyunkyuFDs6g5OTsFf1HUV6eD49znD5diMuhXk1VcPec588VB3Sg+b3U+umq0OPEcLZdWxdLGSpJOHN7qjHlfMrXkratdNdDxb4Ifs6fA79mzw9d+E/gR4YsfC2m31wbu4t7FNiSTlVTe2ScnaoH4V7TRRXyVfEVa9R1a03Kb3bbbfq3qz3qVKFKCp04pRWySsl8gooorE0P/T/v4ooooAKKKKACiiigAooooA/9k=",
                    alt: "腾讯翻译",
                  }),
                  d &&
                    e.createElement(Ro, {
                      className: "trans-ctx--icon-loading",
                      size: "small",
                      inheritColor: !0,
                    })
                ),
                e.createElement(
                  "div",
                  { className: "trans-ctx--panel-page-translate" },
                  e.createElement(
                    "div",
                    { className: "trans-ctx--translator" },
                    e.createElement(
                      Ss,
                      {
                        className: "trans-ctx--lang-selector",
                        value: b,
                        popupProps: { attach: se },
                        onChange: te,
                      },
                      _.map((t) =>
                        e.createElement(
                          Ss.Option,
                          { key: t.source.code, value: t.source.code },
                          t.source.chn_name
                        )
                      )
                    ),
                    e.createElement(
                      Ss,
                      {
                        className: "trans-ctx--lang-selector",
                        value: E,
                        popupProps: { attach: se },
                        onChange: ne,
                      },
                      R.map((t) =>
                        e.createElement(
                          Ss.Option,
                          { key: t.code, value: t.code },
                          t.chn_name
                        )
                      )
                    ),
                    e.createElement(
                      _s,
                      {
                        className: "trans-ctx--btn-translate",
                        loading: d,
                        onClick: () => Q(!0),
                      },
                      "翻译"
                    )
                  ),
                  e.createElement(
                    Qs.Group,
                    {
                      variant: "default-filled",
                      className: "trans-ctx--radio-page-show-func",
                      value: v,
                      onChange: fe,
                    },
                    ff.map(({ label: t, value: n }) =>
                      e.createElement(Qs.Button, { value: n, key: n }, t)
                    )
                  ),
                  e.createElement(
                    "div",
                    { className: "trans-ctx--page-translate-options" },
                    e.createElement(
                      "div",
                      { className: "trans-ctx--page-translate-options-left" },
                      e.createElement(
                        ef,
                        { checked: a, onChange: $ },
                        "始终翻译",
                        (de = b)
                          ? null == t ||
                            null ===
                              (pe = t.find(
                                (e) =>
                                  (null == e ? void 0 : e.source.code) === de
                              )) ||
                            void 0 === pe ||
                            null === (ve = pe.source) ||
                            void 0 === ve
                            ? void 0
                            : ve.chn_name
                          : "xx",
                        "网页"
                      ),
                      e.createElement(
                        "span",
                        {
                          title: "打开设置",
                          className: "trans-ctx--icon-setting",
                          onClick: () => {
                            chrome.runtime.sendMessage({
                              message_type: "openOptionsPage",
                            });
                          },
                        },
                        e.createElement(lf, null)
                      )
                    ),
                    e.createElement(
                      "span",
                      {
                        className: "trans-ctx--btn-close-page-translate",
                        onClick: V,
                      },
                      "在所有网站关闭整页翻译"
                    )
                  )
                )
              )
            : null;
          var de, pe, ve;
        };
      var pf = function (e) {
        return "number" == typeof e;
      };
      const vf = function (t, n, r) {
        var o = null == r ? void 0 : r.immediate,
          a = M(t),
          l = (0, e.useRef)();
        return (
          (0, e.useEffect)(
            function () {
              if (pf(n) && !(n < 0))
                return (
                  o && a.current(),
                  (l.current = setInterval(function () {
                    a.current();
                  }, n)),
                  function () {
                    l.current && clearInterval(l.current);
                  }
                );
            },
            [n]
          ),
          (0, e.useCallback)(function () {
            l.current && clearInterval(l.current);
          }, [])
        );
      };
      var mf,
        gf = n(5398),
        hf = n.n(gf);
      function yf() {
        return (
          (yf = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          yf.apply(this, arguments)
        );
      }
      const bf = function (t) {
        return e.createElement(
          "svg",
          yf(
            {
              className: "icon-translate_svg__icon",
              viewBox: "0 0 1024 1024",
              xmlns: "http://www.w3.org/2000/svg",
              width: 200,
              height: 200,
            },
            t
          ),
          mf ||
            (mf = e.createElement("path", {
              d: "M213.333 640v85.333a85.333 85.333 0 0 0 78.934 85.12l6.4.214h128V896h-128A170.667 170.667 0 0 1 128 725.333V640h85.333zM768 426.667 955.733 896h-91.946l-51.243-128H638.037L586.88 896h-91.904l187.69-469.333H768zM725.333 549.76l-53.205 132.907h106.325l-53.12-132.907zm-384-464.427v85.334H512v298.666H341.333v128H256v-128H85.333V170.667H256V85.333h85.333zm384 42.667A170.667 170.667 0 0 1 896 298.667V384h-85.333v-85.333a85.333 85.333 0 0 0-85.334-85.334h-128V128h128zM256 256h-85.333v128H256V256zm170.667 0h-85.334v128h85.334V256z",
              fill: "#fff",
            }))
        );
      };
      const Af = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      function wf(e, t) {
        if (Af)
          return e
            ? "function" == typeof e
              ? e()
              : "current" in e
              ? e.current
              : e
            : t;
      }
      var Of = n(5925),
        xf = n.n(Of);
      function Ef(e, t) {
        if (e === t) return !0;
        for (var n = 0; n < e.length; n++)
          if (!Object.is(e[n], t[n])) return !1;
        return !0;
      }
      const Sf = function (t) {
        return function (n, r, o) {
          var a = (0, e.useRef)(!1),
            l = (0, e.useRef)([]),
            i = (0, e.useRef)([]),
            u = (0, e.useRef)();
          t(function () {
            var e,
              t = (Array.isArray(o) ? o : [o]).map(function (e) {
                return wf(e);
              });
            if (!a.current)
              return (
                (a.current = !0),
                (l.current = t),
                (i.current = r),
                void (u.current = n())
              );
            (t.length === l.current.length &&
              Ef(t, l.current) &&
              Ef(r, i.current)) ||
              (null === (e = u.current) || void 0 === e || e.call(u),
              (l.current = t),
              (i.current = r),
              (u.current = n()));
          }),
            I(function () {
              var e;
              null === (e = u.current) || void 0 === e || e.call(u),
                (a.current = !1);
            });
        };
      };
      const kf = Sf(e.useEffect);
      const Pf = function (t, n, r) {
        var o,
          a,
          l = (0, e.useRef)(),
          i = (0, e.useRef)(0);
        (o = n),
          void 0 === (a = l.current) && (a = []),
          xf()(o, a) || ((l.current = n), (i.current += 1)),
          kf(t, [i.current], r);
      };
      const Cf = function (e, t, n) {
        void 0 === n && (n = {});
        var r = M(e);
        Pf(
          function () {
            var e = wf(t);
            if (e) {
              var o = new MutationObserver(r.current);
              return (
                o.observe(e, n),
                function () {
                  o && o.disconnect();
                }
              );
            }
          },
          [n],
          t
        );
      };
      var jf;
      function _f() {
        return (
          (_f = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          _f.apply(this, arguments)
        );
      }
      const Tf = function (t) {
        return e.createElement(
          "svg",
          _f(
            {
              className: "icon-close_svg__menuBar-Btn_Icon",
              width: 30,
              height: 30,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 31.112 31.112",
            },
            t
          ),
          jf ||
            (jf = e.createElement("path", {
              d: "M31.112 1.414 29.698 0 15.556 14.142 1.414 0 0 1.414l14.142 14.142L0 29.698l1.414 1.414L15.556 16.97l14.142 14.142 1.414-1.414L16.97 15.556",
            }))
        );
      };
      const Nf = function (t, n) {
        var r = M(t),
          o = (0, e.useRef)();
        return (
          (0, e.useEffect)(
            function () {
              if (pf(n) && !(n < 0))
                return (
                  (o.current = setTimeout(function () {
                    r.current();
                  }, n)),
                  function () {
                    o.current && clearTimeout(o.current);
                  }
                );
            },
            [n]
          ),
          (0, e.useCallback)(function () {
            o.current && clearTimeout(o.current);
          }, [])
        );
      };
      var Df, Lf;
      function Rf() {
        return (
          (Rf = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Rf.apply(this, arguments)
        );
      }
      const Mf = function (t) {
          return e.createElement(
            "svg",
            Rf(
              {
                width: 16,
                height: 16,
                viewBox: "0 0 16 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              t
            ),
            Df ||
              (Df = e.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.25.25C3.56.25 3 .81 3 1.5V14c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25V5.249c0-.332-.132-.65-.367-.885L11.376.614a1.25 1.25 0 0 0-.883-.365H4.25Zm6.243 1.25H4.25V14h10V6.5h-5v-5h1.243Zm.007 3.75h3.75L10.5 1.506V5.25Z",
              })),
            Lf ||
              (Lf = e.createElement("path", {
                fill: "currentColor",
                d: "M.5 5.25V16.5c0 .69.56 1.25 1.25 1.25h12.5V16.5H1.889V5.25H.5Z",
              }))
          );
        },
        If = ({ text: t }) => {
          const [n, r] = (0, e.useState)(),
            [o, a] = (0, e.useState)(!1);
          return (
            (0, e.useEffect)(() => {
              r(o ? 1500 : void 0);
            }, [o]),
            Nf(() => {
              a(!1);
            }, n),
            e.createElement(
              wu,
              {
                disabled: !t,
                trigger: "click",
                content: "已复制",
                attach: _,
                visible: o,
                onVisibleChange: a,
              },
              e.createElement(
                "div",
                {
                  onClick: () =>
                    ((e) => {
                      if (navigator.clipboard) navigator.clipboard.writeText(e);
                      else {
                        const t = document.createElement("textarea");
                        document.body.appendChild(t),
                          (t.style.position = "fixed"),
                          (t.style.clip = "rect(0 0 0 0)"),
                          (t.style.top = "10px"),
                          (t.value = e),
                          t.select(),
                          document.execCommand("copy", !0),
                          document.body.removeChild(t);
                      }
                    })(t),
                },
                e.createElement(Mf, { className: "trans-ctx--icon-copy" })
              )
            )
          );
        },
        zf = (0, e.memo)(If),
        Bf = {
          "./index.module.less": {
            "panel-result": "trans-ctx--panel-result",
            visible: "trans-ctx--visible",
            "container-title": "trans-ctx--container-title",
            "title-text": "trans-ctx--title-text",
            "icon-close": "trans-ctx--icon-close",
            "btn-more": "trans-ctx--btn-more",
            "icon-more": "trans-ctx--icon-more",
            "icon-setting": "trans-ctx--icon-setting",
            content: "trans-ctx--content",
            "result-section": "trans-ctx--result-section",
            label: "trans-ctx--label",
            "container-collapsed-text": "trans-ctx--container-collapsed-text",
            "trs-content-collapsed": "trans-ctx--trs-content-collapsed",
            "btn-expand": "trans-ctx--btn-expand",
            "trs-content": "trans-ctx--trs-content",
            "collapsed-target": "trans-ctx--collapsed-target",
            "icon-expand": "trans-ctx--icon-expand",
            "error-tip": "trans-ctx--error-tip",
            "btn-retry": "trans-ctx--btn-retry",
            "selector-lang": "trans-ctx--selector-lang",
          },
        },
        Ff = ({
          visible: t,
          source: n,
          target: r,
          sourceLang: o,
          targetLang: l,
          translating: i,
          sourceLangList: s,
          targetLangList: d,
          onClose: p,
          setPanelPos: v,
          onTranslate: m,
          setSourceLang: g,
          setTargetLang: h,
        }) => {
          const y = (0, e.useRef)(),
            b = (0, e.useRef)(),
            A = (0, e.useRef)();
          Cf(() => w(), y, { childList: !0, subtree: !0 }),
            Cf(() => w(), b, { childList: !0, subtree: !0 });
          const w = () => {
            var e;
            const t =
                null === (e = document.getElementById(a)) || void 0 === e
                  ? void 0
                  : e.shadowRoot.getElementById(f),
              n = window.innerHeight,
              r = t.offsetTop,
              o = A.current.clientHeight;
            r + o > n && v(n - o - 40);
          };
          return e.createElement(
            "div",
            {
              ref: A,
              className: (0, D.Z)(H()("panel-result", [{ visible: t }]), Bf, {
                autoResolveMultipleImports: !0,
                handleMissingStyleName: "warn",
              }),
            },
            e.createElement(
              "div",
              { className: "trans-ctx--container-title" },
              e.createElement(
                "span",
                { className: "trans-ctx--title-text", id: c },
                "翻译结果"
              ),
              e.createElement(
                "span",
                null,
                e.createElement(
                  "select",
                  {
                    className: "trans-ctx--selector-lang",
                    value: o,
                    onChange: (e) => {
                      g(e.target.value);
                    },
                  },
                  s.map((t) =>
                    e.createElement(
                      "option",
                      { key: t.source.code, value: t.source.code },
                      t.source.chn_name
                    )
                  )
                ),
                e.createElement(
                  "select",
                  {
                    className: "trans-ctx--selector-lang",
                    value: l,
                    onChange: (e) => {
                      h(e.target.value);
                    },
                  },
                  d.map((t) =>
                    e.createElement(
                      "option",
                      { key: t.code, value: t.code },
                      t.chn_name
                    )
                  )
                ),
                e.createElement(
                  "span",
                  {
                    className: "trans-ctx--btn-more",
                    onClick: () => {
                      const e = encodeURIComponent(
                        `source=${n}&target=${r}&sourcelang=${o}&targetlang=${l}`
                      );
                      window.open("https://transmart.qq.com/zh-CN/index?" + e);
                    },
                  },
                  "查看更多结果"
                ),
                e.createElement(
                  "span",
                  {
                    title: "打开设置",
                    onClick: () => {
                      chrome.runtime.sendMessage({
                        message_type: "openOptionsPage",
                      });
                    },
                  },
                  e.createElement(lf, { className: "trans-ctx--icon-setting" })
                )
              ),
              e.createElement(
                "span",
                { title: "关闭翻译结果面板", onClick: p },
                e.createElement(Tf, { className: "trans-ctx--icon-close" })
              )
            ),
            e.createElement(
              "div",
              { className: "trans-ctx--content" },
              e.createElement(
                "div",
                { className: "trans-ctx--result-section", ref: y },
                e.createElement(
                  "div",
                  { className: "trans-ctx--label" },
                  "原文：",
                  n && e.createElement(zf, { text: n })
                ),
                e.createElement(
                  "div",
                  { className: "trans-ctx--trs-content" },
                  n
                )
              ),
              e.createElement(
                "div",
                { className: "trans-ctx--result-section", ref: b },
                e.createElement(
                  "div",
                  { className: "trans-ctx--label" },
                  "译文：",
                  r && e.createElement(zf, { text: r })
                ),
                e.createElement(
                  "div",
                  { className: "trans-ctx--trs-content" },
                  i && "翻译中...",
                  !i &&
                    (r === u
                      ? e.createElement(
                          e.Fragment,
                          null,
                          e.createElement(
                            "span",
                            { className: "trans-ctx--error-tip" },
                            u
                          ),
                          e.createElement(
                            "span",
                            { className: "trans-ctx--btn-retry", onClick: m },
                            "重新翻译"
                          )
                        )
                      : r)
                )
              )
            )
          );
        },
        Uf = (0, e.memo)(Ff),
        Hf = {
          "./style.module.less": {
            "icon-trans": "trans-ctx--icon-trans",
            visible: "trans-ctx--visible",
            "container-popup": "trans-ctx--container-popup",
          },
        },
        Wf = ({
          visible: t,
          left: n,
          top: o,
          source: a,
          sourceHtml: c,
          langList: s,
          panelLeft: d,
          panelTop: p,
          immeShow: v,
          onDestroy: m,
          setPanelPos: g,
        }) => {
          const [h, y] = (0, e.useState)({ x: 0, y: 0 }),
            [b, A] = (0, e.useState)(!1),
            [w, O] = (0, e.useState)("hotkey"),
            [x, E] = (0, e.useState)(""),
            [k, P] = (0, e.useState)(!1),
            [C, j] = (0, e.useState)(""),
            [_, T] = (0, e.useState)(""),
            [N, L] = (0, e.useState)([]),
            [R, M] = (0, e.useState)([]),
            [I, z] = (0, e.useState)(0),
            [B, F] = (0, e.useState)(void 0);
          vf(() => {
            z(I + 1), t && !b && I >= 4 && (m(), z(0), F(void 0));
          }, B),
            (0, e.useEffect)(() => {
              V();
            }, [t]),
            (0, e.useEffect)(() => {
              t && a && !b ? F(500) : (z(0), F(void 0));
            }, [t, a, b]),
            (0, e.useEffect)(() => {
              z(0);
            }, [a]),
            (0, e.useEffect)(() => {
              t && v && A(!0);
            }, [v, t]);
          const U = (0, e.useCallback)(() => {
              var e;
              if (!C) return;
              const t = (
                (null === (e = s.find((e) => e.source.code === C)) ||
                void 0 === e
                  ? void 0
                  : e.target_list) || []
              )
                .sort((e) => ("zh" === e.code || "en" === e.code ? -1 : 1))
                .filter((e) => e.code !== C);
              M(t),
                chrome.storage.sync.get(["defaultTargetLang"], (e) => {
                  const n = null == e ? void 0 : e.defaultTargetLang;
                  n && n !== C && t.find((e) => e.code === n)
                    ? T(n)
                    : S(t) && T(t[0].code);
                });
            }, [s, C]),
            W = (0, e.useCallback)(
              (e) => {
                e.defaultTargetLang && U();
              },
              [U]
            );
          (0, e.useEffect)(
            () => (
              chrome.storage.onChanged.addListener(W),
              () => {
                chrome.storage.onChanged.removeListener(W);
              }
            ),
            [W]
          ),
            (0, e.useEffect)(() => {
              a && (J(), b && Q());
            }, [a, b]),
            (0, e.useEffect)(() => {
              L(s);
            }, [s]),
            (0, e.useEffect)(() => {
              b && G();
            }, [a, b, C, _]),
            (0, e.useEffect)(() => {
              U();
            }, [C]);
          const V = async () => {
              t
                ? chrome.storage.sync.get(["worksOpenOption"], (e) => {
                    O(e.worksOpenOption || "popup"),
                      "immediately" === e.worksOpenOption || v
                        ? A(!0)
                        : "hotkey" === e.worksOpenOption &&
                          window.addEventListener("keydown", X);
                  })
                : (q(), window.removeEventListener("keydown", X));
            },
            X = (0, e.useCallback)(async (e) => {
              const { key: t } = e;
              if ("Escape" === t)
                return e.stopPropagation(), e.preventDefault(), void A(!1);
              chrome.storage.sync.get(["hotkey"], (n) => {
                const r = [];
                e.metaKey && r.push("Meta"),
                  e.shiftKey && r.push("Shift"),
                  e.altKey && r.push("Alt"),
                  e.ctrlKey && r.push("Ctrl"),
                  "Control" === t || r.includes(t) || r.push(t);
                r.sort().join("").toLocaleLowerCase() ===
                  n.hotkey.split(" + ").sort().join("").toLocaleLowerCase() &&
                  A(!0);
              });
            }, []),
            Y = { left: b ? d : n, top: b ? p : o },
            Q = async () => {
              try {
                P(!0);
                const e = await K();
                j(e);
              } catch (e) {}
            },
            K = async () => {
              try {
                const e = await r({ header: { fn: i }, text: a });
                if (e.header.ret_code === tf.Succ) return e.language;
              } catch (e) {}
              return "";
            },
            G = async () => {
              if (a && C && _ && C !== _) {
                P(!0);
                try {
                  const e = await r({
                    header: { fn: l },
                    source: {
                      lang: C,
                      text_block: a,
                      orig_text_block: c,
                      orig_url: window.location.href,
                    },
                    target: { lang: _ },
                  });
                  e.header.ret_code === tf.Succ ? E(e.auto_translation) : E(u);
                } catch (e) {
                  E(u);
                } finally {
                  P(!1);
                }
              }
            },
            q = () => {
              A(!1), m(), J();
            },
            J = () => {
              y({ x: 0, y: 0 });
            };
          return e.createElement(
            hf(),
            {
              position: h,
              handle: "#draggable-header",
              onDrag: (e, { x: t, y: n }) => {
                y({ x: t, y: n });
              },
            },
            e.createElement(
              "div",
              {
                id: f,
                style: Y,
                className: (0, D.Z)(
                  H()("container-popup", [{ visible: t }]),
                  Hf,
                  {
                    autoResolveMultipleImports: !0,
                    handleMissingStyleName: "warn",
                  }
                ),
              },
              e.createElement(bf, {
                onMouseUp: (e) => {
                  e.stopPropagation();
                },
                onClick: () => {
                  A(!0);
                },
                className: (0, D.Z)(
                  H()("icon-trans", [{ visible: !b && "popup" === w }]),
                  Hf,
                  {
                    autoResolveMultipleImports: !0,
                    handleMissingStyleName: "warn",
                  }
                ),
              }),
              e.createElement(Uf, {
                visible: b,
                translating: k,
                source: a,
                target: x,
                sourceLang: C,
                targetLang: _,
                sourceLangList: N,
                targetLangList: R,
                onClose: q,
                setPanelPos: g,
                setSourceLang: j,
                setTargetLang: T,
                onTranslate: G,
              })
            )
          );
        },
        Vf = (0, e.memo)(Wf);
      window.TRANSMART_CRX_CLIENT_KEY ||
        (window.TRANSMART_CRX_CLIENT_KEY = btoa(
          "transmart_crx_" + navigator.userAgent
        ).slice(0, 100));
      const Xf = () => {
          const t = (0, e.useRef)(0),
            n = (0, e.useRef)(0),
            [a, l] = (0, e.useState)(!1),
            [i, u] = (0, e.useState)([]),
            [c, s] = (0, e.useState)(""),
            [f, g] = (0, e.useState)(""),
            [h, y] = (0, e.useState)({
              visible: !1,
              iconLeft: 0,
              iconTop: 0,
              panelLeft: 0,
              panelTop: 0,
            }),
            b = (0, e.useMemo)(() => T(), []),
            A = (0, e.useCallback)(
              (e = !1) => {
                chrome.storage.sync.get(["isChooseWordsOpen"], (r) => {
                  void 0 === r.isChooseWordsOpen && (r.isChooseWordsOpen = !0);
                  const o = window.innerWidth,
                    a = window.innerHeight,
                    l = e ? !!c && r.isChooseWordsOpen : !!c,
                    i = t.current + 20,
                    u = n.current - 45,
                    s = u > o ? o - 20 : i,
                    f = u > 280 ? n.current - 20 : u,
                    d = s + 488 > o ? t.current - 488 : s,
                    p = f + 280 > a ? n.current - 280 : f;
                  y({
                    visible: l,
                    iconLeft: s,
                    iconTop: f,
                    panelLeft: d,
                    panelTop: p,
                  });
                });
              },
              [c]
            ),
            w = (0, e.useCallback)(
              (e) => {
                if ("translate-selected" === e) A(), l(!0);
              },
              [A]
            );
          (0, e.useEffect)(() => {
            A(!0);
          }, [A]);
          const O = (0, e.useCallback)(
              function (e) {
                let r = 0,
                  o = 0;
                if (b) (t.current = e.clientX + r), (n.current = e.clientY + o);
                else if (this.frameElement) {
                  const t = this.frameElement.getBoundingClientRect();
                  (r = t.x),
                    (o = t.y),
                    N({ type: v, x: e.clientX + r, y: e.clientY + o });
                }
              },
              [b]
            ),
            x = (0, e.useCallback)(
              async (e) => {
                setTimeout(() => {
                  const t = (() => {
                    var e, t, n, r;
                    const o = window.getSelection(),
                      a =
                        (null == o ||
                        null === (e = o.toString()) ||
                        void 0 === e ||
                        null === (t = e.trim) ||
                        void 0 === t ||
                        null === (n = t.call(e)) ||
                        void 0 === n ||
                        null === (r = n.replace) ||
                        void 0 === r
                          ? void 0
                          : r.call(n, /(\n)+/g, "\n")) || "";
                    if ("Range" === (null == o ? void 0 : o.type) && a)
                      return { text: a, html: k() };
                  })();
                  t &&
                    (b
                      ? S(e) || (s(t.text), g(t.html))
                      : N({ type: p, text: t.text, html: t.html }));
                });
              },
              [b]
            ),
            E = (0, e.useCallback)(
              async (e) => {
                chrome.storage.sync.get("worksOpenOption", (t) => {
                  "hotkey" !== t.worksOpenOption &&
                    "Escape" === e.key &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    b ? R() : N({ type: m }));
                });
              },
              [b]
            ),
            S = (e) => {
              const t = e.composedPath ? e.composedPath() : e.path;
              return null == t ? void 0 : t.some((e) => e.id === o);
            },
            P = (0, e.useCallback)(() => {
              s(""), g("");
            }, []),
            C = (0, e.useCallback)(() => {
              h.visible && (P(), R());
            }, [P, h.visible]),
            j = (0, e.useCallback)(
              (e) => {
                const r = e.data;
                if ("TRANSMART_CRX" === r.type)
                  switch (r.payload.type) {
                    case v:
                      (t.current = r.payload.x), (n.current = r.payload.y);
                      break;
                    case p:
                      s(r.payload.text), g(r.payload.html);
                      break;
                    case m:
                      C();
                  }
              },
              [C]
            ),
            _ = (0, e.useCallback)(
              (e) => {
                S(e) || (b ? C() : N({ type: m }));
              },
              [C, b]
            );
          (0, e.useEffect)(
            () => (
              b && window.addEventListener("message", j),
              () => {
                window.removeEventListener("message", j);
              }
            ),
            [b, j]
          ),
            (0, e.useEffect)(
              () => (
                chrome.runtime.onMessage.addListener(w),
                window.addEventListener("mousemove", O),
                window.addEventListener("mouseup", x),
                window.addEventListener("keydown", E),
                document.addEventListener("click", _),
                () => {
                  chrome.runtime.onMessage.removeListener(w),
                    window.removeEventListener("mouseup", x),
                    window.removeEventListener("mousemove", O),
                    window.removeEventListener("keydown", E),
                    document.addEventListener("click", _);
                }
              ),
              [_, E, O, x, w]
            );
          const D = (0, e.useCallback)(async () => {
            chrome.storage.local.get(d, (e) => {
              var t, n;
              const r =
                  null == e || null === (t = e.lang_list) || void 0 === t
                    ? void 0
                    : t.time,
                o =
                  (null == e || null === (n = e.lang_list) || void 0 === n
                    ? void 0
                    : n.list) || [];
              r - new Date().getTime() <= 2592e6 ? u(o) : L();
            });
          }, []);
          (0, e.useEffect)(() => {
            D();
          }, [D]);
          const L = async () => {
              try {
                const e = await r({ header: { fn: "support_lang" } });
                u(e.full_lang_pair),
                  chrome.storage.local.set({
                    [d]: { time: new Date().getTime(), list: e.full_lang_pair },
                  });
              } catch {
                u([]);
              }
            },
            R = async () => {
              l(!1),
                y(({ iconLeft: e, iconTop: t, panelLeft: n, panelTop: r }) => ({
                  visible: !1,
                  iconLeft: e,
                  iconTop: t,
                  panelLeft: n,
                  panelTop: r,
                }));
            };
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(Vf, {
              top: h.iconTop,
              left: h.iconLeft,
              panelTop: h.panelTop,
              panelLeft: h.panelLeft,
              visible: h.visible,
              source: c,
              sourceHtml: f,
              langList: i,
              immeShow: a,
              onDestroy: R,
              setPanelPos: (e, t) => {
                y(
                  ({
                    iconLeft: n,
                    iconTop: r,
                    visible: o,
                    panelTop: a,
                    panelLeft: l,
                  }) => ({
                    iconLeft: n,
                    iconTop: r,
                    visible: o,
                    panelTop: e || a,
                    panelLeft: t || l,
                  })
                );
              },
            }),
            e.createElement(df, { langList: i })
          );
        },
        Yf = (0, e.memo)(Xf);
      let Qf;
      const Kf = () => {
        (window._TRANSMART_CTX_SHADOW_ROOT = a),
          (window._TRANSMART_CRX_APP_CONTAINER = o);
      };
      (() => {
        Kf();
        const n = ((r = E(a)), document.documentElement.appendChild(r), r);
        var r;
        n.setAttribute("style", "all: initial;");
        const l = n.attachShadow({ mode: "open" });
        (Qf = E(o)), l.appendChild(Qf);
        const i = document.createElement("link");
        (i.rel = "stylesheet"),
          (i.href = ((e) => {
            try {
              return chrome.runtime.getURL(e);
            } catch (t) {
              return chrome.extension.getURL(e);
            }
          })("/static/css/content.css")),
          l.appendChild(i),
          "undefined" != typeof navigator &&
            /windows|win32/i.test(navigator.userAgent) &&
            (function () {
              var e;
              const t =
                  "\n    ::-webkit-scrollbar-track-piece {\n      position: absolute;\n      background-color: #fff;\n      border-radius: 0;\n    }\n    ::-webkit-scrollbar {\n      width: 10px;\n      height: 10px;\n    }\n    ::-webkit-scrollbar-thumb {\n      height: 50px;\n      background-color: #b8b8b8;\n      border: 2px solid #fff;\n      border-radius: 6px;\n      outline: 2px solid #fff;\n      outline-offset: -2px;\n      -moz-opacity: 0.3;\n      -khtml-opacity: 0.3;\n      opacity: 0.5;\n      filter: alpha(opacity = 30);\n    }\n    ::-webkit-scrollbar-thumb:hover {\n      height: 50px;\n      background-color: #878987;\n    }\n  ",
                n = document.createElement("style");
              (n.type = "text/css"),
                (n.rel = "stylesheet"),
                n.appendChild(document.createTextNode(t)),
                (null === (e = n.styleSheet) || void 0 === e
                  ? void 0
                  : e.cssText) && (n.styleSheet.cssText = t),
                document
                  .getElementById(window._TRANSMART_CTX_SHADOW_ROOT)
                  .shadowRoot.appendChild(n);
            })(),
          (i.onload = () => {
            t.render(e.createElement(Yf, null), Qf);
          });
      })();
    })();
})();
