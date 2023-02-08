var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// https://deno.land/std@0.171.0/async/deferred.ts
function deferred() {
  let methods, state = "pending", promise = new Promise((resolve, reject) => {
    methods = {
      async resolve(value) {
        await value, state = "fulfilled", resolve(value);
      },
      // deno-lint-ignore no-explicit-any
      reject(reason) {
        state = "rejected", reject(reason);
      }
    };
  });
  return Object.defineProperty(promise, "state", { get: () => state }), Object.assign(promise, methods);
}

// https://deno.land/std@0.171.0/async/mux_async_iterator.ts
var MuxAsyncIterator = class {
  #iteratorCount = 0;
  #yields = [];
  // deno-lint-ignore no-explicit-any
  #throws = [];
  #signal = deferred();
  add(iterable) {
    ++this.#iteratorCount, this.#callIteratorNext(iterable[Symbol.asyncIterator]());
  }
  async #callIteratorNext(iterator) {
    try {
      let { value, done } = await iterator.next();
      done ? --this.#iteratorCount : this.#yields.push({ iterator, value });
    } catch (e3) {
      this.#throws.push(e3);
    }
    this.#signal.resolve();
  }
  async *iterate() {
    for (; this.#iteratorCount > 0; ) {
      await this.#signal;
      for (let i2 = 0; i2 < this.#yields.length; i2++) {
        let { iterator, value } = this.#yields[i2];
        yield value, this.#callIteratorNext(iterator);
      }
      if (this.#throws.length) {
        for (let e3 of this.#throws)
          throw e3;
        this.#throws.length = 0;
      }
      this.#yields.length = 0, this.#signal = deferred();
    }
  }
  [Symbol.asyncIterator]() {
    return this.iterate();
  }
};

// https://deno.land/std@0.167.0/fmt/colors.ts
var colors_exports = {};
__export(colors_exports, {
  bgBlack: () => bgBlack,
  bgBlue: () => bgBlue,
  bgBrightBlack: () => bgBrightBlack,
  bgBrightBlue: () => bgBrightBlue,
  bgBrightCyan: () => bgBrightCyan,
  bgBrightGreen: () => bgBrightGreen,
  bgBrightMagenta: () => bgBrightMagenta,
  bgBrightRed: () => bgBrightRed,
  bgBrightWhite: () => bgBrightWhite,
  bgBrightYellow: () => bgBrightYellow,
  bgCyan: () => bgCyan,
  bgGreen: () => bgGreen,
  bgMagenta: () => bgMagenta,
  bgRed: () => bgRed,
  bgRgb24: () => bgRgb24,
  bgRgb8: () => bgRgb8,
  bgWhite: () => bgWhite,
  bgYellow: () => bgYellow,
  black: () => black,
  blue: () => blue,
  bold: () => bold,
  brightBlack: () => brightBlack,
  brightBlue: () => brightBlue,
  brightCyan: () => brightCyan,
  brightGreen: () => brightGreen,
  brightMagenta: () => brightMagenta,
  brightRed: () => brightRed,
  brightWhite: () => brightWhite,
  brightYellow: () => brightYellow,
  cyan: () => cyan,
  dim: () => dim,
  getColorEnabled: () => getColorEnabled,
  gray: () => gray,
  green: () => green,
  hidden: () => hidden,
  inverse: () => inverse,
  italic: () => italic,
  magenta: () => magenta,
  red: () => red,
  reset: () => reset,
  rgb24: () => rgb24,
  rgb8: () => rgb8,
  setColorEnabled: () => setColorEnabled,
  strikethrough: () => strikethrough,
  stripColor: () => stripColor,
  underline: () => underline,
  white: () => white,
  yellow: () => yellow
});
var { Deno: Deno2 } = globalThis, noColor = typeof Deno2?.noColor == "boolean" ? Deno2.noColor : !0, enabled = !noColor;
function setColorEnabled(value) {
  noColor || (enabled = value);
}
function getColorEnabled() {
  return enabled;
}
function code(open, close) {
  return {
    open: `\x1B[${open.join(";")}m`,
    close: `\x1B[${close}m`,
    regexp: new RegExp(`\\x1b\\[${close}m`, "g")
  };
}
function run(str, code2) {
  return enabled ? `${code2.open}${str.replace(code2.regexp, code2.open)}${code2.close}` : str;
}
function reset(str) {
  return run(str, code([0], 0));
}
function bold(str) {
  return run(str, code([1], 22));
}
function dim(str) {
  return run(str, code([2], 22));
}
function italic(str) {
  return run(str, code([3], 23));
}
function underline(str) {
  return run(str, code([4], 24));
}
function inverse(str) {
  return run(str, code([7], 27));
}
function hidden(str) {
  return run(str, code([8], 28));
}
function strikethrough(str) {
  return run(str, code([9], 29));
}
function black(str) {
  return run(str, code([30], 39));
}
function red(str) {
  return run(str, code([31], 39));
}
function green(str) {
  return run(str, code([32], 39));
}
function yellow(str) {
  return run(str, code([33], 39));
}
function blue(str) {
  return run(str, code([34], 39));
}
function magenta(str) {
  return run(str, code([35], 39));
}
function cyan(str) {
  return run(str, code([36], 39));
}
function white(str) {
  return run(str, code([37], 39));
}
function gray(str) {
  return brightBlack(str);
}
function brightBlack(str) {
  return run(str, code([90], 39));
}
function brightRed(str) {
  return run(str, code([91], 39));
}
function brightGreen(str) {
  return run(str, code([92], 39));
}
function brightYellow(str) {
  return run(str, code([93], 39));
}
function brightBlue(str) {
  return run(str, code([94], 39));
}
function brightMagenta(str) {
  return run(str, code([95], 39));
}
function brightCyan(str) {
  return run(str, code([96], 39));
}
function brightWhite(str) {
  return run(str, code([97], 39));
}
function bgBlack(str) {
  return run(str, code([40], 49));
}
function bgRed(str) {
  return run(str, code([41], 49));
}
function bgGreen(str) {
  return run(str, code([42], 49));
}
function bgYellow(str) {
  return run(str, code([43], 49));
}
function bgBlue(str) {
  return run(str, code([44], 49));
}
function bgMagenta(str) {
  return run(str, code([45], 49));
}
function bgCyan(str) {
  return run(str, code([46], 49));
}
function bgWhite(str) {
  return run(str, code([47], 49));
}
function bgBrightBlack(str) {
  return run(str, code([100], 49));
}
function bgBrightRed(str) {
  return run(str, code([101], 49));
}
function bgBrightGreen(str) {
  return run(str, code([102], 49));
}
function bgBrightYellow(str) {
  return run(str, code([103], 49));
}
function bgBrightBlue(str) {
  return run(str, code([104], 49));
}
function bgBrightMagenta(str) {
  return run(str, code([105], 49));
}
function bgBrightCyan(str) {
  return run(str, code([106], 49));
}
function bgBrightWhite(str) {
  return run(str, code([107], 49));
}
function clampAndTruncate(n3, max = 255, min = 0) {
  return Math.trunc(Math.max(Math.min(n3, max), min));
}
function rgb8(str, color) {
  return run(str, code([38, 5, clampAndTruncate(color)], 39));
}
function bgRgb8(str, color) {
  return run(str, code([48, 5, clampAndTruncate(color)], 49));
}
function rgb24(str, color) {
  return typeof color == "number" ? run(
    str,
    code(
      [38, 2, color >> 16 & 255, color >> 8 & 255, color & 255],
      39
    )
  ) : run(
    str,
    code(
      [
        38,
        2,
        clampAndTruncate(color.r),
        clampAndTruncate(color.g),
        clampAndTruncate(color.b)
      ],
      39
    )
  );
}
function bgRgb24(str, color) {
  return typeof color == "number" ? run(
    str,
    code(
      [48, 2, color >> 16 & 255, color >> 8 & 255, color & 255],
      49
    )
  ) : run(
    str,
    code(
      [
        48,
        2,
        clampAndTruncate(color.r),
        clampAndTruncate(color.g),
        clampAndTruncate(color.b)
      ],
      49
    )
  );
}
var ANSI_PATTERN = new RegExp(
  [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
  ].join("|"),
  "g"
);
function stripColor(string) {
  return string.replace(ANSI_PATTERN, "");
}

// https://esm.sh/stable/preact@10.11.0/deno/preact.js
var P, d, $, Y, S, F, B, T = {}, V = [], Z = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function k(e3, t2) {
  for (var _2 in t2)
    e3[_2] = t2[_2];
  return e3;
}
function j(e3) {
  var t2 = e3.parentNode;
  t2 && t2.removeChild(e3);
}
function ee(e3, t2, _2) {
  var r, l2, o3, s4 = {};
  for (o3 in t2)
    o3 == "key" ? r = t2[o3] : o3 == "ref" ? l2 = t2[o3] : s4[o3] = t2[o3];
  if (arguments.length > 2 && (s4.children = arguments.length > 3 ? P.call(arguments, 2) : _2), typeof e3 == "function" && e3.defaultProps != null)
    for (o3 in e3.defaultProps)
      s4[o3] === void 0 && (s4[o3] = e3.defaultProps[o3]);
  return w(e3, s4, r, l2, null);
}
function w(e3, t2, _2, r, l2) {
  var o3 = { type: e3, props: t2, key: _2, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: l2 ?? ++$ };
  return l2 == null && d.vnode != null && d.vnode(o3), o3;
}
function L(e3) {
  return e3.children;
}
function U(e3, t2) {
  this.props = e3, this.context = t2;
}
function C(e3, t2) {
  if (t2 == null)
    return e3.__ ? C(e3.__, e3.__.__k.indexOf(e3) + 1) : null;
  for (var _2; t2 < e3.__k.length; t2++)
    if ((_2 = e3.__k[t2]) != null && _2.__e != null)
      return _2.__e;
  return typeof e3.type == "function" ? C(e3) : null;
}
function z(e3) {
  var t2, _2;
  if ((e3 = e3.__) != null && e3.__c != null) {
    for (e3.__e = e3.__c.base = null, t2 = 0; t2 < e3.__k.length; t2++)
      if ((_2 = e3.__k[t2]) != null && _2.__e != null) {
        e3.__e = e3.__c.base = _2.__e;
        break;
      }
    return z(e3);
  }
}
function M(e3) {
  (!e3.__d && (e3.__d = !0) && S.push(e3) && !D.__r++ || F !== d.debounceRendering) && ((F = d.debounceRendering) || setTimeout)(D);
}
function D() {
  for (var e3; D.__r = S.length; )
    e3 = S.sort(function(t2, _2) {
      return t2.__v.__b - _2.__v.__b;
    }), S = [], e3.some(function(t2) {
      var _2, r, l2, o3, s4, f4;
      t2.__d && (s4 = (o3 = (_2 = t2).__v).__e, (f4 = _2.__P) && (r = [], (l2 = k({}, o3)).__v = o3.__v + 1, W(f4, o3, l2, _2.__n, f4.ownerSVGElement !== void 0, o3.__h != null ? [s4] : null, r, s4 ?? C(o3), o3.__h), K(r, o3), o3.__e != s4 && z(o3)));
    });
}
function G(e3, t2, _2, r, l2, o3, s4, f4, p6, a3) {
  var n3, h3, c3, i2, u3, b4, v2, y3 = r && r.__k || V, g5 = y3.length;
  for (_2.__k = [], n3 = 0; n3 < t2.length; n3++)
    if ((i2 = _2.__k[n3] = (i2 = t2[n3]) == null || typeof i2 == "boolean" ? null : typeof i2 == "string" || typeof i2 == "number" || typeof i2 == "bigint" ? w(null, i2, null, null, i2) : Array.isArray(i2) ? w(L, { children: i2 }, null, null, null) : i2.__b > 0 ? w(i2.type, i2.props, i2.key, i2.ref ? i2.ref : null, i2.__v) : i2) != null) {
      if (i2.__ = _2, i2.__b = _2.__b + 1, (c3 = y3[n3]) === null || c3 && i2.key == c3.key && i2.type === c3.type)
        y3[n3] = void 0;
      else
        for (h3 = 0; h3 < g5; h3++) {
          if ((c3 = y3[h3]) && i2.key == c3.key && i2.type === c3.type) {
            y3[h3] = void 0;
            break;
          }
          c3 = null;
        }
      W(e3, i2, c3 = c3 || T, l2, o3, s4, f4, p6, a3), u3 = i2.__e, (h3 = i2.ref) && c3.ref != h3 && (v2 || (v2 = []), c3.ref && v2.push(c3.ref, null, i2), v2.push(h3, i2.__c || u3, i2)), u3 != null ? (b4 == null && (b4 = u3), typeof i2.type == "function" && i2.__k === c3.__k ? i2.__d = p6 = q(i2, p6, e3) : p6 = J(e3, i2, c3, y3, u3, p6), typeof _2.type == "function" && (_2.__d = p6)) : p6 && c3.__e == p6 && p6.parentNode != e3 && (p6 = C(c3));
    }
  for (_2.__e = b4, n3 = g5; n3--; )
    y3[n3] != null && (typeof _2.type == "function" && y3[n3].__e != null && y3[n3].__e == _2.__d && (_2.__d = C(r, n3 + 1)), X(y3[n3], y3[n3]));
  if (v2)
    for (n3 = 0; n3 < v2.length; n3++)
      Q(v2[n3], v2[++n3], v2[++n3]);
}
function q(e3, t2, _2) {
  for (var r, l2 = e3.__k, o3 = 0; l2 && o3 < l2.length; o3++)
    (r = l2[o3]) && (r.__ = e3, t2 = typeof r.type == "function" ? q(r, t2, _2) : J(_2, r, r, l2, r.__e, t2));
  return t2;
}
function J(e3, t2, _2, r, l2, o3) {
  var s4, f4, p6;
  if (t2.__d !== void 0)
    s4 = t2.__d, t2.__d = void 0;
  else if (_2 == null || l2 != o3 || l2.parentNode == null)
    e:
      if (o3 == null || o3.parentNode !== e3)
        e3.appendChild(l2), s4 = null;
      else {
        for (f4 = o3, p6 = 0; (f4 = f4.nextSibling) && p6 < r.length; p6 += 2)
          if (f4 == l2)
            break e;
        e3.insertBefore(l2, o3), s4 = o3;
      }
  return s4 !== void 0 ? s4 : l2.nextSibling;
}
function _e(e3, t2, _2, r, l2) {
  var o3;
  for (o3 in _2)
    o3 === "children" || o3 === "key" || o3 in t2 || N(e3, o3, null, _2[o3], r);
  for (o3 in t2)
    l2 && typeof t2[o3] != "function" || o3 === "children" || o3 === "key" || o3 === "value" || o3 === "checked" || _2[o3] === t2[o3] || N(e3, o3, t2[o3], _2[o3], r);
}
function I(e3, t2, _2) {
  t2[0] === "-" ? e3.setProperty(t2, _2) : e3[t2] = _2 == null ? "" : typeof _2 != "number" || Z.test(t2) ? _2 : _2 + "px";
}
function N(e3, t2, _2, r, l2) {
  var o3;
  e:
    if (t2 === "style")
      if (typeof _2 == "string")
        e3.style.cssText = _2;
      else {
        if (typeof r == "string" && (e3.style.cssText = r = ""), r)
          for (t2 in r)
            _2 && t2 in _2 || I(e3.style, t2, "");
        if (_2)
          for (t2 in _2)
            r && _2[t2] === r[t2] || I(e3.style, t2, _2[t2]);
      }
    else if (t2[0] === "o" && t2[1] === "n")
      o3 = t2 !== (t2 = t2.replace(/Capture$/, "")), t2 = t2.toLowerCase() in e3 ? t2.toLowerCase().slice(2) : t2.slice(2), e3.l || (e3.l = {}), e3.l[t2 + o3] = _2, _2 ? r || e3.addEventListener(t2, o3 ? R : O, o3) : e3.removeEventListener(t2, o3 ? R : O, o3);
    else if (t2 !== "dangerouslySetInnerHTML") {
      if (l2)
        t2 = t2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t2 !== "href" && t2 !== "list" && t2 !== "form" && t2 !== "tabIndex" && t2 !== "download" && t2 in e3)
        try {
          e3[t2] = _2 ?? "";
          break e;
        } catch {
        }
      typeof _2 == "function" || (_2 != null && (_2 !== !1 || t2[0] === "a" && t2[1] === "r") ? e3.setAttribute(t2, _2) : e3.removeAttribute(t2));
    }
}
function O(e3) {
  this.l[e3.type + !1](d.event ? d.event(e3) : e3);
}
function R(e3) {
  this.l[e3.type + !0](d.event ? d.event(e3) : e3);
}
function W(e3, t2, _2, r, l2, o3, s4, f4, p6) {
  var a3, n3, h3, c3, i2, u3, b4, v2, y3, g5, x5, H7, E3, m4 = t2.type;
  if (t2.constructor !== void 0)
    return null;
  _2.__h != null && (p6 = _2.__h, f4 = t2.__e = _2.__e, t2.__h = null, o3 = [f4]), (a3 = d.__b) && a3(t2);
  try {
    e:
      if (typeof m4 == "function") {
        if (v2 = t2.props, y3 = (a3 = m4.contextType) && r[a3.__c], g5 = a3 ? y3 ? y3.props.value : a3.__ : r, _2.__c ? b4 = (n3 = t2.__c = _2.__c).__ = n3.__E : ("prototype" in m4 && m4.prototype.render ? t2.__c = n3 = new m4(v2, g5) : (t2.__c = n3 = new U(v2, g5), n3.constructor = m4, n3.render = oe), y3 && y3.sub(n3), n3.props = v2, n3.state || (n3.state = {}), n3.context = g5, n3.__n = r, h3 = n3.__d = !0, n3.__h = []), n3.__s == null && (n3.__s = n3.state), m4.getDerivedStateFromProps != null && (n3.__s == n3.state && (n3.__s = k({}, n3.__s)), k(n3.__s, m4.getDerivedStateFromProps(v2, n3.__s))), c3 = n3.props, i2 = n3.state, h3)
          m4.getDerivedStateFromProps == null && n3.componentWillMount != null && n3.componentWillMount(), n3.componentDidMount != null && n3.__h.push(n3.componentDidMount);
        else {
          if (m4.getDerivedStateFromProps == null && v2 !== c3 && n3.componentWillReceiveProps != null && n3.componentWillReceiveProps(v2, g5), !n3.__e && n3.shouldComponentUpdate != null && n3.shouldComponentUpdate(v2, n3.__s, g5) === !1 || t2.__v === _2.__v) {
            n3.props = v2, n3.state = n3.__s, t2.__v !== _2.__v && (n3.__d = !1), n3.__v = t2, t2.__e = _2.__e, t2.__k = _2.__k, t2.__k.forEach(function(A5) {
              A5 && (A5.__ = t2);
            }), n3.__h.length && s4.push(n3);
            break e;
          }
          n3.componentWillUpdate != null && n3.componentWillUpdate(v2, n3.__s, g5), n3.componentDidUpdate != null && n3.__h.push(function() {
            n3.componentDidUpdate(c3, i2, u3);
          });
        }
        if (n3.context = g5, n3.props = v2, n3.__v = t2, n3.__P = e3, x5 = d.__r, H7 = 0, "prototype" in m4 && m4.prototype.render)
          n3.state = n3.__s, n3.__d = !1, x5 && x5(t2), a3 = n3.render(n3.props, n3.state, n3.context);
        else
          do
            n3.__d = !1, x5 && x5(t2), a3 = n3.render(n3.props, n3.state, n3.context), n3.state = n3.__s;
          while (n3.__d && ++H7 < 25);
        n3.state = n3.__s, n3.getChildContext != null && (r = k(k({}, r), n3.getChildContext())), h3 || n3.getSnapshotBeforeUpdate == null || (u3 = n3.getSnapshotBeforeUpdate(c3, i2)), E3 = a3 != null && a3.type === L && a3.key == null ? a3.props.children : a3, G(e3, Array.isArray(E3) ? E3 : [E3], t2, _2, r, l2, o3, s4, f4, p6), n3.base = t2.__e, t2.__h = null, n3.__h.length && s4.push(n3), b4 && (n3.__E = n3.__ = null), n3.__e = !1;
      } else
        o3 == null && t2.__v === _2.__v ? (t2.__k = _2.__k, t2.__e = _2.__e) : t2.__e = ne(_2.__e, t2, _2, r, l2, o3, s4, p6);
    (a3 = d.diffed) && a3(t2);
  } catch (A5) {
    t2.__v = null, (p6 || o3 != null) && (t2.__e = f4, t2.__h = !!p6, o3[o3.indexOf(f4)] = null), d.__e(A5, t2, _2);
  }
}
function K(e3, t2) {
  d.__c && d.__c(t2, e3), e3.some(function(_2) {
    try {
      e3 = _2.__h, _2.__h = [], e3.some(function(r) {
        r.call(_2);
      });
    } catch (r) {
      d.__e(r, _2.__v);
    }
  });
}
function ne(e3, t2, _2, r, l2, o3, s4, f4) {
  var p6, a3, n3, h3 = _2.props, c3 = t2.props, i2 = t2.type, u3 = 0;
  if (i2 === "svg" && (l2 = !0), o3 != null) {
    for (; u3 < o3.length; u3++)
      if ((p6 = o3[u3]) && "setAttribute" in p6 == !!i2 && (i2 ? p6.localName === i2 : p6.nodeType === 3)) {
        e3 = p6, o3[u3] = null;
        break;
      }
  }
  if (e3 == null) {
    if (i2 === null)
      return document.createTextNode(c3);
    e3 = l2 ? document.createElementNS("http://www.w3.org/2000/svg", i2) : document.createElement(i2, c3.is && c3), o3 = null, f4 = !1;
  }
  if (i2 === null)
    h3 === c3 || f4 && e3.data === c3 || (e3.data = c3);
  else {
    if (o3 = o3 && P.call(e3.childNodes), a3 = (h3 = _2.props || T).dangerouslySetInnerHTML, n3 = c3.dangerouslySetInnerHTML, !f4) {
      if (o3 != null)
        for (h3 = {}, u3 = 0; u3 < e3.attributes.length; u3++)
          h3[e3.attributes[u3].name] = e3.attributes[u3].value;
      (n3 || a3) && (n3 && (a3 && n3.__html == a3.__html || n3.__html === e3.innerHTML) || (e3.innerHTML = n3 && n3.__html || ""));
    }
    if (_e(e3, c3, h3, l2, f4), n3)
      t2.__k = [];
    else if (u3 = t2.props.children, G(e3, Array.isArray(u3) ? u3 : [u3], t2, _2, r, l2 && i2 !== "foreignObject", o3, s4, o3 ? o3[0] : _2.__k && C(_2, 0), f4), o3 != null)
      for (u3 = o3.length; u3--; )
        o3[u3] != null && j(o3[u3]);
    f4 || ("value" in c3 && (u3 = c3.value) !== void 0 && (u3 !== e3.value || i2 === "progress" && !u3 || i2 === "option" && u3 !== h3.value) && N(e3, "value", u3, h3.value, !1), "checked" in c3 && (u3 = c3.checked) !== void 0 && u3 !== e3.checked && N(e3, "checked", u3, h3.checked, !1));
  }
  return e3;
}
function Q(e3, t2, _2) {
  try {
    typeof e3 == "function" ? e3(t2) : e3.current = t2;
  } catch (r) {
    d.__e(r, _2);
  }
}
function X(e3, t2, _2) {
  var r, l2;
  if (d.unmount && d.unmount(e3), (r = e3.ref) && (r.current && r.current !== e3.__e || Q(r, null, t2)), (r = e3.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o3) {
        d.__e(o3, t2);
      }
    r.base = r.__P = null, e3.__c = void 0;
  }
  if (r = e3.__k)
    for (l2 = 0; l2 < r.length; l2++)
      r[l2] && X(r[l2], t2, typeof e3.type != "function");
  _2 || e3.__e == null || j(e3.__e), e3.__ = e3.__e = e3.__d = void 0;
}
function oe(e3, t2, _2) {
  return this.constructor(e3, _2);
}
function re(e3, t2, _2) {
  var r, l2, o3;
  d.__ && d.__(e3, t2), l2 = (r = typeof _2 == "function") ? null : _2 && _2.__k || t2.__k, o3 = [], W(t2, e3 = (!r && _2 || t2).__k = ee(L, null, [e3]), l2 || T, T, t2.ownerSVGElement !== void 0, !r && _2 ? [_2] : l2 ? null : t2.firstChild ? P.call(t2.childNodes) : null, o3, !r && _2 ? _2 : l2 ? l2.__e : t2.firstChild, r), K(o3, e3);
}
P = V.slice, d = { __e: function(e3, t2, _2, r) {
  for (var l2, o3, s4; t2 = t2.__; )
    if ((l2 = t2.__c) && !l2.__)
      try {
        if ((o3 = l2.constructor) && o3.getDerivedStateFromError != null && (l2.setState(o3.getDerivedStateFromError(e3)), s4 = l2.__d), l2.componentDidCatch != null && (l2.componentDidCatch(e3, r || {}), s4 = l2.__d), s4)
          return l2.__E = l2;
      } catch (f4) {
        e3 = f4;
      }
  throw e3;
} }, $ = 0, Y = function(e3) {
  return e3 != null && e3.constructor === void 0;
}, U.prototype.setState = function(e3, t2) {
  var _2;
  _2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k({}, this.state), typeof e3 == "function" && (e3 = e3(k({}, _2), this.props)), e3 && k(_2, e3), e3 != null && this.__v && (t2 && this.__h.push(t2), M(this));
}, U.prototype.forceUpdate = function(e3) {
  this.__v && (this.__e = !0, e3 && this.__h.push(e3), M(this));
}, U.prototype.render = L, S = [], D.__r = 0, B = 0;

// https://esm.sh/stable/preact@10.11.0/deno/hooks.js
var i, n, d2, N2, f = 0, q2 = [], l = [], V2 = d.__b, g = d.__r, b = d.diffed, C2 = d.__c, A = d.unmount;
function a(_2, t2) {
  d.__h && d.__h(n, _2, f || t2), f = 0;
  var u3 = n.__H || (n.__H = { __: [], __h: [] });
  return _2 >= u3.__.length && u3.__.push({ __V: l }), u3.__[_2];
}
function w2(_2) {
  return f = 5, x(function() {
    return { current: _2 };
  }, []);
}
function x(_2, t2) {
  var u3 = a(i++, 7);
  return H(u3.__H, t2) ? (u3.__V = _2(), u3.i = t2, u3.__h = _2, u3.__V) : u3.__;
}
function R2() {
  for (var _2; _2 = q2.shift(); )
    if (_2.__P && _2.__H)
      try {
        _2.__H.__h.forEach(m), _2.__H.__h.forEach(p), _2.__H.__h = [];
      } catch (t2) {
        _2.__H.__h = [], d.__e(t2, _2.__v);
      }
}
d.__b = function(_2) {
  typeof _2.type != "function" || _2.o || _2.type === L ? _2.o || (_2.o = _2.__ && _2.__.o ? _2.__.o : "") : _2.o = (_2.__ && _2.__.o ? _2.__.o : "") + (_2.__ && _2.__.__k ? _2.__.__k.indexOf(_2) : 0), n = null, V2 && V2(_2);
}, d.__r = function(_2) {
  g && g(_2), i = 0;
  var t2 = (n = _2.__c).__H;
  t2 && (d2 === n ? (t2.__h = [], n.__h = [], t2.__.forEach(function(u3) {
    u3.__N && (u3.__ = u3.__N), u3.__V = l, u3.__N = u3.i = void 0;
  })) : (t2.__h.forEach(m), t2.__h.forEach(p), t2.__h = [])), d2 = n;
}, d.diffed = function(_2) {
  b && b(_2);
  var t2 = _2.__c;
  t2 && t2.__H && (t2.__H.__h.length && (q2.push(t2) !== 1 && N2 === d.requestAnimationFrame || ((N2 = d.requestAnimationFrame) || S2)(R2)), t2.__H.__.forEach(function(u3) {
    u3.i && (u3.__H = u3.i), u3.__V !== l && (u3.__ = u3.__V), u3.i = void 0, u3.__V = l;
  })), d2 = n = null;
}, d.__c = function(_2, t2) {
  t2.some(function(u3) {
    try {
      u3.__h.forEach(m), u3.__h = u3.__h.filter(function(o3) {
        return !o3.__ || p(o3);
      });
    } catch (o3) {
      t2.some(function(r) {
        r.__h && (r.__h = []);
      }), t2 = [], d.__e(o3, u3.__v);
    }
  }), C2 && C2(_2, t2);
}, d.unmount = function(_2) {
  A && A(_2);
  var t2, u3 = _2.__c;
  u3 && u3.__H && (u3.__H.__.forEach(function(o3) {
    try {
      m(o3);
    } catch (r) {
      t2 = r;
    }
  }), u3.__H = void 0, t2 && d.__e(t2, u3.__v));
};
var F2 = typeof requestAnimationFrame == "function";
function S2(_2) {
  var t2, u3 = function() {
    clearTimeout(o3), F2 && cancelAnimationFrame(t2), setTimeout(_2);
  }, o3 = setTimeout(u3, 100);
  F2 && (t2 = requestAnimationFrame(u3));
}
function m(_2) {
  var t2 = n, u3 = _2.__c;
  typeof u3 == "function" && (_2.__c = void 0, u3()), n = t2;
}
function p(_2) {
  var t2 = n;
  _2.__c = _2.__(), n = t2;
}
function H(_2, t2) {
  return !_2 || _2.length !== t2.length || t2.some(function(u3, o3) {
    return u3 !== _2[o3];
  });
}

// https://esm.sh/v106/memoize-one@6.0.0/deno/memoize-one.js
var s = Number.isNaN || function(r) {
  return typeof r == "number" && r !== r;
};

// https://esm.sh/v106/lodash.throttle@4.1.1/deno/lodash.throttle.js
var __global$ = globalThis || (typeof window < "u" ? window : self), A2 = Object.create, h = Object.defineProperty, B2 = Object.getOwnPropertyDescriptor, F3 = Object.getOwnPropertyNames, R3 = Object.getPrototypeOf, P2 = Object.prototype.hasOwnProperty, D2 = (e3, n3) => () => (n3 || e3((n3 = { exports: {} }).exports, n3), n3.exports), G2 = (e3, n3, t2, f4) => {
  if (n3 && typeof n3 == "object" || typeof n3 == "function")
    for (let i2 of F3(n3))
      !P2.call(e3, i2) && i2 !== t2 && h(e3, i2, { get: () => n3[i2], enumerable: !(f4 = B2(n3, i2)) || f4.enumerable });
  return e3;
}, H2 = (e3, n3, t2) => (t2 = e3 != null ? A2(R3(e3)) : {}, G2(n3 || !e3 || !e3.__esModule ? h(t2, "default", { value: e3, enumerable: !0 }) : t2, e3)), L2 = D2((ce4, k4) => {
  var _2 = "Expected a function", S7 = NaN, U5 = "[object Symbol]", X6 = /^\s+|\s+$/g, q6 = /^[-+]0x[0-9a-f]+$/i, z4 = /^0b[01]+$/i, J4 = /^0o[0-7]+$/i, K5 = parseInt, Q6 = typeof __global$ == "object" && __global$ && __global$.Object === Object && __global$, V6 = typeof self == "object" && self && self.Object === Object && self, Y6 = Q6 || V6 || Function("return this")(), Z5 = Object.prototype, w4 = Z5.toString, ee4 = Math.max, ne4 = Math.min, j5 = function() {
    return Y6.Date.now();
  };
  function te2(e3, n3, t2) {
    var f4, i2, g5, c3, a3, u3, l2 = 0, v2 = !1, s4 = !1, y3 = !0;
    if (typeof e3 != "function")
      throw new TypeError(_2);
    n3 = E3(n3) || 0, b4(t2) && (v2 = !!t2.leading, s4 = "maxWait" in t2, g5 = s4 ? ee4(E3(t2.maxWait) || 0, n3) : g5, y3 = "trailing" in t2 ? !!t2.trailing : y3);
    function p6(r) {
      var o3 = f4, d3 = i2;
      return f4 = i2 = void 0, l2 = r, c3 = e3.apply(d3, o3), c3;
    }
    function C5(r) {
      return l2 = r, a3 = setTimeout(m4, n3), v2 ? p6(r) : c3;
    }
    function M5(r) {
      var o3 = r - u3, d3 = r - l2, O4 = n3 - o3;
      return s4 ? ne4(O4, g5 - d3) : O4;
    }
    function x5(r) {
      var o3 = r - u3, d3 = r - l2;
      return u3 === void 0 || o3 >= n3 || o3 < 0 || s4 && d3 >= g5;
    }
    function m4() {
      var r = j5();
      if (x5(r))
        return I5(r);
      a3 = setTimeout(m4, M5(r));
    }
    function I5(r) {
      return a3 = void 0, y3 && f4 ? p6(r) : (f4 = i2 = void 0, c3);
    }
    function N7() {
      a3 !== void 0 && clearTimeout(a3), l2 = 0, f4 = u3 = i2 = a3 = void 0;
    }
    function $4() {
      return a3 === void 0 ? c3 : I5(j5());
    }
    function T6() {
      var r = j5(), o3 = x5(r);
      if (f4 = arguments, i2 = this, u3 = r, o3) {
        if (a3 === void 0)
          return C5(u3);
        if (s4)
          return a3 = setTimeout(m4, n3), p6(u3);
      }
      return a3 === void 0 && (a3 = setTimeout(m4, n3)), c3;
    }
    return T6.cancel = N7, T6.flush = $4, T6;
  }
  function re4(e3, n3, t2) {
    var f4 = !0, i2 = !0;
    if (typeof e3 != "function")
      throw new TypeError(_2);
    return b4(t2) && (f4 = "leading" in t2 ? !!t2.leading : f4, i2 = "trailing" in t2 ? !!t2.trailing : i2), te2(e3, n3, { leading: f4, maxWait: n3, trailing: i2 });
  }
  function b4(e3) {
    var n3 = typeof e3;
    return !!e3 && (n3 == "object" || n3 == "function");
  }
  function ie4(e3) {
    return !!e3 && typeof e3 == "object";
  }
  function fe(e3) {
    return typeof e3 == "symbol" || ie4(e3) && w4.call(e3) == U5;
  }
  function E3(e3) {
    if (typeof e3 == "number")
      return e3;
    if (fe(e3))
      return S7;
    if (b4(e3)) {
      var n3 = typeof e3.valueOf == "function" ? e3.valueOf() : e3;
      e3 = b4(n3) ? n3 + "" : n3;
    }
    if (typeof e3 != "string")
      return e3 === 0 ? e3 : +e3;
    e3 = e3.replace(X6, "");
    var t2 = z4.test(e3);
    return t2 || J4.test(e3) ? K5(e3.slice(2), t2 ? 2 : 8) : q6.test(e3) ? S7 : +e3;
  }
  k4.exports = re4;
}), ae = H2(L2()), { default: W2, ...oe2 } = ae;

// https://esm.sh/v106/@twind/core@1.0.1/deno/core.js
var F4;
function lt(t2) {
  return [...t2.v, (t2.i ? "!" : "") + t2.n].join(":");
}
function st(t2, e3 = ",") {
  return t2.map(lt).join(e3);
}
var W3 = typeof CSS < "u" && CSS.escape || ((t2) => t2.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
function V3(t2) {
  for (var e3 = 9, r = t2.length; r--; )
    e3 = Math.imul(e3 ^ t2.charCodeAt(r), 1597334677);
  return "#" + ((e3 ^ e3 >>> 9) >>> 0).toString(36);
}
function kt(t2, e3 = "@media ") {
  return e3 + x2(t2).map((r) => (typeof r == "string" && (r = { min: r }), r.raw || Object.keys(r).map((n3) => `(${n3}-width:${r[n3]})`).join(" and "))).join(",");
}
function x2(t2 = []) {
  return Array.isArray(t2) ? t2 : t2 == null ? [] : [t2];
}
function D3() {
}
var w3 = { d: 0, b: 134217728, c: 268435456, a: 671088640, u: 805306368, o: 939524096 };
function jt(t2) {
  var e3;
  return ((e3 = t2.match(/[-=:;]/g)) == null ? void 0 : e3.length) || 0;
}
function X2(t2) {
  return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(t2) ? +RegExp.$1 / (RegExp.$2 ? 15 : 1) / 10 : 0, 15) << 22 | Math.min(jt(t2), 15) << 18;
}
var qt = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
function at({ n: t2, i: e3, v: r = [] }, n3, i2, l2) {
  for (let a3 of (t2 && (t2 = lt({ n: t2, i: e3, v: r })), l2 = [...x2(l2)], r)) {
    let s4 = n3.theme("screens", a3);
    for (let u3 of x2(s4 && kt(s4) || n3.v(a3))) {
      var o3;
      l2.push(u3), i2 |= s4 ? 67108864 | X2(u3) : a3 == "dark" ? 1073741824 : u3[0] == "@" ? X2(u3) : (o3 = u3, 1 << ~(/:([a-z-]+)/.test(o3) && ~qt.indexOf(RegExp.$1.slice(2, 7)) || -18));
    }
  }
  return { n: t2, p: i2, r: l2, i: e3 };
}
var ut = /* @__PURE__ */ new Map();
function tt(t2) {
  if (t2.d) {
    let e3 = [], r = Y2(t2.r.reduce((n3, i2) => i2[0] == "@" ? (e3.push(i2), n3) : i2 ? Y2(n3, (l2) => Y2(i2, (o3) => {
      let a3 = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o3);
      if (a3) {
        let s4 = l2.indexOf(a3[1]);
        return ~s4 ? l2.slice(0, s4) + a3[0] + l2.slice(s4 + a3[1].length) : Z2(l2, o3);
      }
      return Z2(o3, l2);
    })) : n3, "&"), (n3) => Z2(n3, t2.n ? "." + W3(t2.n) : ""));
    return r && e3.push(r.replace(/:merge\((.+?)\)/g, "$1")), e3.reduceRight((n3, i2) => i2 + "{" + n3 + "}", t2.d);
  }
}
function Y2(t2, e3) {
  return t2.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r, n3, i2) => e3(n3) + i2);
}
function Z2(t2, e3) {
  return t2.replace(/&/g, e3);
}
var Dt = new Intl.Collator("en", { numeric: !0 });
function St(t2, e3) {
  for (var r = 0, n3 = t2.length; r < n3; ) {
    let i2 = n3 + r >> 1;
    0 >= Mt(t2[i2], e3) ? r = i2 + 1 : n3 = i2;
  }
  return n3;
}
function Mt(t2, e3) {
  let r = t2.p & w3.o;
  return r == (e3.p & w3.o) && (r == w3.b || r == w3.o) ? 0 : t2.p - e3.p || t2.o - e3.o || Dt.compare(t2.n, e3.n);
}
function H3(t2, e3) {
  return Math.round(parseInt(t2, 16) * e3);
}
function T2(t2, e3 = {}) {
  if (typeof t2 == "function")
    return t2(e3);
  let { opacityValue: r = "1", opacityVariable: n3 } = e3, i2 = n3 ? `var(${n3})` : r;
  if (t2.includes("<alpha-value>"))
    return t2.replace("<alpha-value>", i2);
  if (t2[0] == "#" && (t2.length == 4 || t2.length == 7)) {
    let l2 = (t2.length - 1) / 3, o3 = [17, 1, 0.062272][l2 - 1];
    return `rgba(${[H3(t2.substr(1, l2), o3), H3(t2.substr(1 + l2, l2), o3), H3(t2.substr(1 + 2 * l2, l2), o3), i2]})`;
  }
  return i2 == "1" ? t2 : i2 == "0" ? "#0000" : t2.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${i2})`);
}
function ct(t2, e3, r, n3, i2 = []) {
  return function l2(o3, { n: a3, p: s4, r: u3 = [], i: f4 }, c3) {
    let p6 = [], d3 = "", v2 = 0, g5 = 0;
    for (let h3 in o3 || {}) {
      var y3, A5;
      let b4 = o3[h3];
      if (h3[0] == "@") {
        if (!b4)
          continue;
        if (h3[1] == "a") {
          p6.push(...ht(a3, s4, N3("" + b4), c3, s4, u3, f4, !0));
          continue;
        }
        if (h3[1] == "l") {
          for (let m4 of x2(b4))
            p6.push(...l2(m4, { n: a3, p: (y3 = w3[h3[7]], s4 & ~w3.o | y3), r: u3, i: f4 }, c3));
          continue;
        }
        if (h3[1] == "i") {
          p6.push(...x2(b4).map((m4) => ({ p: -1, o: 0, r: [], d: h3 + " " + m4 })));
          continue;
        }
        if (h3[1] == "k") {
          p6.push({ p: w3.d, o: 0, r: [h3], d: l2(b4, { p: w3.d }, c3).map(tt).join("") });
          continue;
        }
        if (h3[1] == "f") {
          p6.push(...x2(b4).map((m4) => ({ p: w3.d, o: 0, r: [h3], d: l2(m4, { p: w3.d }, c3).map(tt).join("") })));
          continue;
        }
      }
      if (typeof b4 != "object" || Array.isArray(b4))
        h3 == "label" && b4 ? a3 = b4 + V3(JSON.stringify([s4, f4, o3])) : (b4 || b4 === 0) && (h3 = h3.replace(/[A-Z]/g, (m4) => "-" + m4.toLowerCase()), g5 += 1, v2 = Math.max(v2, (A5 = h3)[0] == "-" ? 0 : jt(A5) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(A5) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), d3 += (d3 ? ";" : "") + x2(b4).map((m4) => c3.s(h3, ft("" + m4, c3.theme) + (f4 ? " !important" : ""))).join(";"));
      else if (h3[0] == "@" || h3.includes("&")) {
        let m4 = s4;
        h3[0] == "@" && (h3 = h3.replace(/\bscreen\(([^)]+)\)/g, (C5, $4) => {
          let j5 = c3.theme("screens", $4);
          return j5 ? (m4 |= 67108864, kt(j5, "")) : C5;
        }), m4 |= X2(h3)), p6.push(...l2(b4, { n: a3, p: m4, r: [...u3, h3], i: f4 }, c3));
      } else
        p6.push(...l2(b4, { p: s4, r: [...u3, h3] }, c3));
    }
    return p6.unshift({ n: a3, p: s4, o: Math.max(0, 15 - g5) + 1.5 * Math.min(v2 || 15, 15), r: u3, d: d3 }), p6.sort(Mt);
  }(t2, at(e3, r, n3, i2), r);
}
function ft(t2, e3) {
  return t2.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r, n3, i2, l2, o3) => {
    let a3 = e3(i2, o3);
    return typeof a3 == "function" && /color|fill|stroke/i.test(i2) ? T2(a3) : "" + a3;
  });
}
function pt(t2, e3) {
  let r, n3 = [];
  for (let i2 of t2)
    i2.d && i2.n ? r?.p == i2.p && "" + r.r == "" + i2.r ? (r.c = [r.c, i2.c].filter(Boolean).join(" "), r.d = r.d + ";" + i2.d) : n3.push(r = { ...i2, n: i2.n && e3 }) : n3.push({ ...i2, n: i2.n && e3 });
  return n3;
}
function B3(t2, e3, r = w3.u, n3, i2) {
  let l2 = [];
  for (let o3 of t2)
    for (let a3 of function(s4, u3, f4, c3, p6) {
      var d3;
      s4 = { ...s4, i: s4.i || p6 };
      let v2 = function(g5, y3) {
        let A5 = ut.get(g5.n);
        return A5 ? A5(g5, y3) : y3.r(g5.n, g5.v[0] == "dark");
      }(s4, u3);
      return v2 ? typeof v2 == "string" ? ({ r: c3, p: f4 } = at(s4, u3, f4, c3), pt(B3(N3(v2), u3, f4, c3, s4.i), s4.n)) : Array.isArray(v2) ? v2.map((g5) => {
        var y3, A5;
        return { o: 0, ...g5, r: [...x2(c3), ...x2(g5.r)], p: (y3 = f4, A5 = (d3 = g5.p) != null ? d3 : f4, y3 & ~w3.o | A5) };
      }) : ct(v2, s4, u3, f4, c3) : [{ c: lt(s4), p: 0, o: 0, r: [] }];
    }(o3, e3, r, n3, i2))
      l2.splice(St(l2, a3), 0, a3);
  return l2;
}
function ht(t2, e3, r, n3, i2, l2, o3, a3) {
  return pt((a3 ? r.flatMap((s4) => B3([s4], n3, i2, l2, o3)) : B3(r, n3, i2, l2, o3)).map((s4) => s4.p & w3.o && (s4.n || e3 == w3.b) ? { ...s4, p: s4.p & ~w3.o | e3, o: 0 } : s4), t2);
}
function Ot(t2, e3, r, n3) {
  var i2;
  return i2 = (l2, o3) => {
    let { n: a3, p: s4, r: u3, i: f4 } = at(l2, o3, e3);
    return r && ht(a3, e3, r, o3, s4, u3, f4, n3);
  }, ut.set(t2, i2), t2;
}
function K2(t2, e3) {
  if (t2[t2.length - 1] != "(") {
    let r = [], n3 = !1, i2 = !1, l2 = "";
    for (let o3 of t2)
      if (!(o3 == "(" || /[~@]$/.test(o3))) {
        if (o3[0] == "!" && (o3 = o3.slice(1), n3 = !n3), o3.endsWith(":")) {
          r[o3 == "dark:" ? "unshift" : "push"](o3.slice(0, -1));
          continue;
        }
        o3[0] == "-" && (o3 = o3.slice(1), i2 = !i2), o3.endsWith("-") && (o3 = o3.slice(0, -1)), o3 && o3 != "&" && (l2 += (l2 && "-") + o3);
      }
    l2 && (i2 && (l2 = "-" + l2), e3[0].push({ n: l2, v: r.filter(Jt), i: n3 }));
  }
}
function Jt(t2, e3, r) {
  return r.indexOf(t2) == e3;
}
var yt = /* @__PURE__ */ new Map();
function N3(t2) {
  let e3 = yt.get(t2);
  if (!e3) {
    let r = [], n3 = [[]], i2 = 0, l2 = 0, o3 = null, a3 = 0, s4 = (u3, f4 = 0) => {
      i2 != a3 && (r.push(t2.slice(i2, a3 + f4)), u3 && K2(r, n3)), i2 = a3 + 1;
    };
    for (; a3 < t2.length; a3++) {
      let u3 = t2[a3];
      if (l2)
        t2[a3 - 1] != "\\" && (l2 += +(u3 == "[") || -(u3 == "]"));
      else if (u3 == "[")
        l2 += 1;
      else if (o3)
        t2[a3 - 1] != "\\" && o3.test(t2.slice(a3)) && (o3 = null, i2 = a3 + RegExp.lastMatch.length);
      else if (u3 == "/" && t2[a3 - 1] != "\\" && (t2[a3 + 1] == "*" || t2[a3 + 1] == "/"))
        o3 = t2[a3 + 1] == "*" ? /^\*\// : /^[\r\n]/;
      else if (u3 == "(")
        s4(), r.push(u3);
      else if (u3 == ":")
        t2[a3 + 1] != ":" && s4(!1, 1);
      else if (/[\s,)]/.test(u3)) {
        s4(!0);
        let f4 = r.lastIndexOf("(");
        if (u3 == ")") {
          let c3 = r[f4 - 1];
          if (/[~@]$/.test(c3)) {
            let p6 = n3.shift();
            r.length = f4, K2([...r, "#"], n3);
            let { v: d3 } = n3[0].pop();
            for (let v2 of p6)
              v2.v.splice(+(v2.v[0] == "dark") - +(d3[0] == "dark"), d3.length);
            K2([...r, Ot(c3.length > 1 ? c3.slice(0, -1) + V3(JSON.stringify([c3, p6])) : c3 + "(" + st(p6) + ")", w3.a, p6, /@$/.test(c3))], n3);
          }
          f4 = r.lastIndexOf("(", f4 - 1);
        }
        r.length = f4 + 1;
      } else
        /[~@]/.test(u3) && t2[a3 + 1] == "(" && n3.unshift([]);
    }
    s4(!0), yt.set(t2, e3 = n3[0]);
  }
  return e3;
}
function Ct(t2, e3, r) {
  return e3.reduce((n3, i2, l2) => n3 + r(i2) + t2[l2 + 1], t2[0]);
}
function G3(t2, e3) {
  return Array.isArray(t2) && Array.isArray(t2.raw) ? Ct(t2, e3, (r) => Q2(r).trim()) : e3.filter(Boolean).reduce((r, n3) => r + Q2(n3), t2 ? Q2(t2) : "");
}
function Q2(t2) {
  let e3, r = "";
  if (t2 && typeof t2 == "object")
    if (Array.isArray(t2))
      (e3 = G3(t2[0], t2.slice(1))) && (r += " " + e3);
    else
      for (let n3 in t2)
        t2[n3] && (r += " " + n3);
  else
    t2 != null && typeof t2 != "boolean" && (r += " " + t2);
  return r;
}
var ae2 = Et("@"), ue = Et("~");
function Et(t2) {
  return new Proxy(function(r, ...n3) {
    return e3("", r, n3);
  }, { get: (r, n3) => n3 in r ? r[n3] : function(i2, ...l2) {
    return e3(n3, i2, l2);
  } });
  function e3(r, n3, i2) {
    return st(N3(r + t2 + "(" + G3(n3, i2) + ")"));
  }
}
function U2(t2, e3) {
  return Array.isArray(t2) ? mt(Ct(t2, e3, (r) => r != null && typeof r != "boolean" ? r : "")) : typeof t2 == "string" ? mt(t2) : [t2];
}
var Bt = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
function mt(t2) {
  let e3;
  t2 = t2.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
  let r = [{}], n3 = [r[0]], i2 = [];
  for (; e3 = Bt.exec(t2); )
    e3[4] && (r.shift(), i2.shift()), e3[3] ? (i2.unshift(e3[3]), r.unshift({}), n3.push(i2.reduce((l2, o3) => ({ [o3]: l2 }), r[0]))) : e3[4] || (r[0][e3[1]] && (r.unshift({}), n3.push(i2.reduce((l2, o3) => ({ [o3]: l2 }), r[0]))), r[0][e3[1]] = e3[2]);
  return n3;
}
function dt(t2, ...e3) {
  var r, n3;
  let i2 = U2(t2, e3), l2 = (((r = i2.find((o3) => o3.label)) == null ? void 0 : r.label) || "css") + V3(JSON.stringify(i2));
  return n3 = (o3, a3) => pt(i2.flatMap((s4) => ct(s4, o3, a3, w3.o)), l2), ut.set(l2, n3), l2;
}
var ce = new Proxy(function(t2, e3) {
  return bt("animation", t2, e3);
}, { get: (t2, e3) => e3 in t2 ? t2[e3] : function(r, n3) {
  return bt(e3, r, n3);
} });
function bt(t2, e3, r) {
  return { toString: () => dt({ label: t2, "@layer components": { ...typeof e3 == "object" ? e3 : { animation: e3 }, animationName: "" + r } }) };
}
var Ut = Symbol();
var z2 = new Proxy(D3, { apply: (t2, e3, r) => F4(r[0]), get(t2, e3) {
  let r = F4[e3];
  return typeof r == "function" ? function() {
    return r.apply(F4, arguments);
  } : r;
} });
var xe = function t(e3) {
  return new Proxy(function(r, ...n3) {
    return xt(e3, "", r, n3);
  }, { get: (r, n3) => n3 === "bind" ? t : n3 in r ? r[n3] : function(i2, ...l2) {
    return xt(e3, n3, i2, l2);
  } });
}();
function xt(t2, e3, r, n3) {
  return { toString() {
    let i2 = U2(r, n3), l2 = W3(e3 + V3(JSON.stringify([e3, i2])));
    return (typeof t2 == "function" ? t2 : z2)(dt({ [`@keyframes ${l2}`]: U2(r, n3) })), l2;
  } };
}

// https://esm.sh/v106/@twind/core@1.1.3/deno/core.js
var B4;
function ae3(e3) {
  return [...e3.v, (e3.i ? "!" : "") + e3.n].join(":");
}
function ue2(e3, t2 = ",") {
  return e3.map(ae3).join(t2);
}
var Y3 = typeof CSS < "u" && CSS.escape || ((e3) => e3.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
function T3(e3) {
  for (var t2 = 9, r = e3.length; r--; )
    t2 = Math.imul(t2 ^ e3.charCodeAt(r), 1597334677);
  return "#" + ((t2 ^ t2 >>> 9) >>> 0).toString(36);
}
function Ce(e3, t2 = "@media ") {
  return t2 + b2(e3).map((r) => (typeof r == "string" && (r = { min: r }), r.raw || Object.keys(r).map((i2) => `(${i2}-width:${r[i2]})`).join(" and "))).join(",");
}
function b2(e3 = []) {
  return Array.isArray(e3) ? e3 : e3 == null ? [] : [e3];
}
function F5() {
}
var S3 = { d: 0, b: 134217728, c: 268435456, a: 671088640, u: 805306368, o: 939524096 };
function Ee(e3) {
  return e3.match(/[-=:;]/g)?.length || 0;
}
function re2(e3) {
  return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e3) ? Math.max(0, 29.63 * (+RegExp.$1 / (RegExp.$2 ? 15 : 1)) ** 0.137 - 43) : 0, 15) << 22 | Math.min(Ee(e3), 15) << 18;
}
var Ue = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
function ce2({ n: e3, i: t2, v: r = [] }, i2, n3, l2) {
  e3 && (e3 = ae3({ n: e3, i: t2, v: r })), l2 = [...b2(l2)];
  for (let s4 of r) {
    let f4 = i2.theme("screens", s4);
    for (let a3 of b2(f4 && Ce(f4) || i2.v(s4))) {
      var o3;
      l2.push(a3), n3 |= f4 ? 67108864 | re2(a3) : s4 == "dark" ? 1073741824 : a3[0] == "@" ? re2(a3) : (o3 = a3, 1 << ~(/:([a-z-]+)/.test(o3) && ~Ue.indexOf(RegExp.$1.slice(2, 7)) || -18));
    }
  }
  return { n: e3, p: n3, r: l2, i: t2 };
}
var pe = /* @__PURE__ */ new Map();
function ne2(e3) {
  if (e3.d) {
    let t2 = [], r = H4(e3.r.reduce((i2, n3) => n3[0] == "@" ? (t2.push(n3), i2) : n3 ? H4(i2, (l2) => H4(n3, (o3) => {
      let s4 = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o3);
      if (s4) {
        let f4 = l2.indexOf(s4[1]);
        return ~f4 ? l2.slice(0, f4) + s4[0] + l2.slice(f4 + s4[1].length) : Q3(l2, o3);
      }
      return Q3(o3, l2);
    })) : i2, "&"), (i2) => Q3(i2, e3.n ? "." + Y3(e3.n) : ""));
    return r && t2.push(r.replace(/:merge\((.+?)\)/g, "$1")), t2.reduceRight((i2, n3) => n3 + "{" + i2 + "}", e3.d);
  }
}
function H4(e3, t2) {
  return e3.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r, i2, n3) => t2(i2) + n3);
}
function Q3(e3, t2) {
  return e3.replace(/&/g, t2);
}
var $e = new Intl.Collator("en", { numeric: !0 });
function Me(e3, t2) {
  for (var r = 0, i2 = e3.length; r < i2; ) {
    let n3 = i2 + r >> 1;
    0 >= Ne(e3[n3], t2) ? r = n3 + 1 : i2 = n3;
  }
  return i2;
}
function Ne(e3, t2) {
  let r = e3.p & S3.o;
  return r == (t2.p & S3.o) && (r == S3.b || r == S3.o) ? 0 : e3.p - t2.p || e3.o - t2.o || $e.compare(we(e3.n), we(t2.n)) || $e.compare(Ae(e3.n), Ae(t2.n));
}
function we(e3) {
  return (e3 || "").split(/:/).pop().split("/").pop() || "\0";
}
function Ae(e3) {
  return (e3 || "").replace(/\W/g, (t2) => String.fromCharCode(127 + t2.charCodeAt(0))) + "\0";
}
function X3(e3, t2) {
  return Math.round(parseInt(e3, 16) * t2);
}
function P3(e3, t2 = {}) {
  if (typeof e3 == "function")
    return e3(t2);
  let { opacityValue: r = "1", opacityVariable: i2 } = t2, n3 = i2 ? `var(${i2})` : r;
  if (e3.includes("<alpha-value>"))
    return e3.replace("<alpha-value>", n3);
  if (e3[0] == "#" && (e3.length == 4 || e3.length == 7)) {
    let l2 = (e3.length - 1) / 3, o3 = [17, 1, 0.062272][l2 - 1];
    return `rgba(${[X3(e3.substr(1, l2), o3), X3(e3.substr(1 + l2, l2), o3), X3(e3.substr(1 + 2 * l2, l2), o3), n3]})`;
  }
  return n3 == "1" ? e3 : n3 == "0" ? "#0000" : e3.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${n3})`);
}
function de(e3, t2, r, i2, n3 = []) {
  return function l2(o3, { n: s4, p: f4, r: a3 = [], i: c3 }, u3) {
    let p6 = [], g5 = "", y3 = 0, $4 = 0;
    for (let h3 in o3 || {}) {
      var A5, R6;
      let d3 = o3[h3];
      if (h3[0] == "@") {
        if (!d3)
          continue;
        if (h3[1] == "a") {
          p6.push(...ge(s4, f4, I2("" + d3), u3, f4, a3, c3, !0));
          continue;
        }
        if (h3[1] == "l") {
          for (let w4 of b2(d3))
            p6.push(...l2(w4, { n: s4, p: (A5 = S3[h3[7]], f4 & ~S3.o | A5), r: h3[7] == "d" ? [] : a3, i: c3 }, u3));
          continue;
        }
        if (h3[1] == "i") {
          p6.push(...b2(d3).map((w4) => ({ p: -1, o: 0, r: [], d: h3 + " " + w4 })));
          continue;
        }
        if (h3[1] == "k") {
          p6.push({ p: S3.d, o: 0, r: [h3], d: l2(d3, { p: S3.d }, u3).map(ne2).join("") });
          continue;
        }
        if (h3[1] == "f") {
          p6.push(...b2(d3).map((w4) => ({ p: S3.d, o: 0, r: [h3], d: l2(w4, { p: S3.d }, u3).map(ne2).join("") })));
          continue;
        }
      }
      if (typeof d3 != "object" || Array.isArray(d3))
        h3 == "label" && d3 ? s4 = d3 + T3(JSON.stringify([f4, c3, o3])) : (d3 || d3 === 0) && (h3 = h3.replace(/[A-Z]/g, (w4) => "-" + w4.toLowerCase()), $4 += 1, y3 = Math.max(y3, (R6 = h3)[0] == "-" ? 0 : Ee(R6) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(R6) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), g5 += (g5 ? ";" : "") + b2(d3).map((w4) => u3.s(h3, he("" + w4, u3.theme) + (c3 ? " !important" : ""))).join(";"));
      else if (h3[0] == "@" || h3.includes("&")) {
        let w4 = f4;
        h3[0] == "@" && (h3 = h3.replace(/\bscreen\(([^)]+)\)/g, (j5, M5) => {
          let N7 = u3.theme("screens", M5);
          return N7 ? (w4 |= 67108864, Ce(N7, "")) : j5;
        }), w4 |= re2(h3)), p6.push(...l2(d3, { n: s4, p: w4, r: [...a3, h3], i: c3 }, u3));
      } else
        p6.push(...l2(d3, { p: f4, r: [...a3, h3] }, u3));
    }
    return p6.unshift({ n: s4, p: f4, o: Math.max(0, 15 - $4) + 1.5 * Math.min(y3 || 15, 15), r: a3, d: g5 }), p6.sort(Ne);
  }(e3, ce2(t2, r, i2, n3), r);
}
function he(e3, t2) {
  return e3.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r, i2, n3, l2, o3 = "") => {
    let s4 = t2(n3, o3);
    return typeof s4 == "function" && /color|fill|stroke/i.test(n3) ? P3(s4) : "" + b2(s4).filter((f4) => Object(f4) !== f4);
  });
}
function ye(e3, t2) {
  let r, i2 = [];
  for (let n3 of e3)
    n3.d && n3.n ? r?.p == n3.p && "" + r.r == "" + n3.r ? (r.c = [r.c, n3.c].filter(Boolean).join(" "), r.d = r.d + ";" + n3.d) : i2.push(r = { ...n3, n: n3.n && t2 }) : i2.push({ ...n3, n: n3.n && t2 });
  return i2;
}
function W4(e3, t2, r = S3.u, i2, n3) {
  let l2 = [];
  for (let o3 of e3)
    for (let s4 of function(f4, a3, c3, u3, p6) {
      f4 = { ...f4, i: f4.i || p6 };
      let g5 = function(y3, $4) {
        let A5 = pe.get(y3.n);
        return A5 ? A5(y3, $4) : $4.r(y3.n, y3.v[0] == "dark");
      }(f4, a3);
      return g5 ? typeof g5 == "string" ? ({ r: u3, p: c3 } = ce2(f4, a3, c3, u3), ye(W4(I2(g5), a3, c3, u3, f4.i), f4.n)) : Array.isArray(g5) ? g5.map((y3) => {
        var $4, A5;
        return { o: 0, ...y3, r: [...b2(u3), ...b2(y3.r)], p: ($4 = c3, A5 = y3.p ?? c3, $4 & ~S3.o | A5) };
      }) : de(g5, f4, a3, c3, u3) : [{ c: ae3(f4), p: 0, o: 0, r: [] }];
    }(o3, t2, r, i2, n3))
      l2.splice(Me(l2, s4), 0, s4);
  return l2;
}
function ge(e3, t2, r, i2, n3, l2, o3, s4) {
  return ye((s4 ? r.flatMap((f4) => W4([f4], i2, n3, l2, o3)) : W4(r, i2, n3, l2, o3)).map((f4) => f4.p & S3.o && (f4.n || t2 == S3.b) ? { ...f4, p: f4.p & ~S3.o | t2, o: 0 } : f4), e3);
}
function _e2(e3, t2, r, i2) {
  var n3;
  return n3 = (l2, o3) => {
    let { n: s4, p: f4, r: a3, i: c3 } = ce2(l2, o3, t2);
    return r && ge(s4, t2, r, o3, f4, a3, c3, i2);
  }, pe.set(e3, n3), e3;
}
function K3(e3, t2, r) {
  if (e3[e3.length - 1] != "(") {
    let i2 = [], n3 = !1, l2 = !1, o3 = "";
    for (let s4 of e3)
      if (!(s4 == "(" || /[~@]$/.test(s4))) {
        if (s4[0] == "!" && (s4 = s4.slice(1), n3 = !n3), s4.endsWith(":")) {
          i2[s4 == "dark:" ? "unshift" : "push"](s4.slice(0, -1));
          continue;
        }
        s4[0] == "-" && (s4 = s4.slice(1), l2 = !l2), s4.endsWith("-") && (s4 = s4.slice(0, -1)), s4 && s4 != "&" && (o3 += (o3 && "-") + s4);
      }
    o3 && (l2 && (o3 = "-" + o3), t2[0].push({ n: o3, v: i2.filter(Be), i: n3 }));
  }
}
function Be(e3, t2, r) {
  return r.indexOf(e3) == t2;
}
var Se = /* @__PURE__ */ new Map();
function I2(e3) {
  let t2 = Se.get(e3);
  if (!t2) {
    let r = [], i2 = [[]], n3 = 0, l2 = 0, o3 = null, s4 = 0, f4 = (a3, c3 = 0) => {
      n3 != s4 && (r.push(e3.slice(n3, s4 + c3)), a3 && K3(r, i2)), n3 = s4 + 1;
    };
    for (; s4 < e3.length; s4++) {
      let a3 = e3[s4];
      if (l2)
        e3[s4 - 1] != "\\" && (l2 += +(a3 == "[") || -(a3 == "]"));
      else if (a3 == "[")
        l2 += 1;
      else if (o3)
        e3[s4 - 1] != "\\" && o3.test(e3.slice(s4)) && (o3 = null, n3 = s4 + RegExp.lastMatch.length);
      else if (a3 == "/" && e3[s4 - 1] != "\\" && (e3[s4 + 1] == "*" || e3[s4 + 1] == "/"))
        o3 = e3[s4 + 1] == "*" ? /^\*\// : /^[\r\n]/;
      else if (a3 == "(")
        f4(), r.push(a3);
      else if (a3 == ":")
        e3[s4 + 1] != ":" && f4(!1, 1);
      else if (/[\s,)]/.test(a3)) {
        f4(!0);
        let c3 = r.lastIndexOf("(");
        if (a3 == ")") {
          let u3 = r[c3 - 1];
          if (/[~@]$/.test(u3)) {
            let p6 = i2.shift();
            r.length = c3, K3([...r, "#"], i2);
            let { v: g5 } = i2[0].pop();
            for (let y3 of p6)
              y3.v.splice(+(y3.v[0] == "dark") - +(g5[0] == "dark"), g5.length);
            K3([...r, _e2(u3.length > 1 ? u3.slice(0, -1) + T3(JSON.stringify([u3, p6])) : u3 + "(" + ue2(p6) + ")", S3.a, p6, /@$/.test(u3))], i2);
          }
          c3 = r.lastIndexOf("(", c3 - 1);
        }
        r.length = c3 + 1;
      } else
        /[~@]/.test(a3) && e3[s4 + 1] == "(" && i2.unshift([]);
    }
    f4(!0), Se.set(e3, t2 = i2[0]);
  }
  return t2;
}
function Ve(e3, t2, r) {
  return t2.reduce((i2, n3, l2) => i2 + r(n3) + e3[l2 + 1], e3[0]);
}
function Z3(e3, t2) {
  return Array.isArray(e3) && Array.isArray(e3.raw) ? Ve(e3, t2, (r) => ee2(r).trim()) : t2.filter(Boolean).reduce((r, i2) => r + ee2(i2), e3 ? ee2(e3) : "");
}
function ee2(e3) {
  let t2, r = "";
  if (e3 && typeof e3 == "object")
    if (Array.isArray(e3))
      (t2 = Z3(e3[0], e3.slice(1))) && (r += " " + t2);
    else
      for (let i2 in e3)
        e3[i2] && (r += " " + i2);
  else
    e3 != null && typeof e3 != "boolean" && (r += " " + e3);
  return r;
}
var pt2 = ze("@"), dt2 = ze("~");
function ze(e3) {
  return new Proxy(function(i2, ...n3) {
    return t2("", i2, n3);
  }, { get(r, i2) {
    return i2 in r ? r[i2] : function(l2, ...o3) {
      return t2(i2, l2, o3);
    };
  } });
  function t2(r, i2, n3) {
    return ue2(I2(r + e3 + "(" + Z3(i2, n3) + ")"));
  }
}
function G4(e3, t2) {
  return Array.isArray(e3) ? ve(Ve(e3, t2, (r) => r != null && typeof r != "boolean" ? r : "")) : typeof e3 == "string" ? ve(e3) : [e3];
}
var We = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
function ve(e3) {
  let t2;
  e3 = e3.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
  let r = [{}], i2 = [r[0]], n3 = [];
  for (; t2 = We.exec(e3); )
    t2[4] && (r.shift(), n3.shift()), t2[3] ? (n3.unshift(t2[3]), r.unshift({}), i2.push(n3.reduce((l2, o3) => ({ [o3]: l2 }), r[0]))) : t2[4] || (r[0][t2[1]] && (r.unshift({}), i2.push(n3.reduce((l2, o3) => ({ [o3]: l2 }), r[0]))), r[0][t2[1]] = t2[2]);
  return i2;
}
function me(e3, ...t2) {
  var r;
  let i2 = G4(e3, t2), n3 = (i2.find((l2) => l2.label)?.label || "css") + T3(JSON.stringify(i2));
  return r = (l2, o3) => ye(i2.flatMap((s4) => de(s4, l2, o3, S3.o)), n3), pe.set(n3, r), n3;
}
var ht2 = new Proxy(function(e3, t2) {
  return Re("animation", e3, t2);
}, { get(e3, t2) {
  return t2 in e3 ? e3[t2] : function(i2, n3) {
    return Re(t2, i2, n3);
  };
} });
function Re(e3, t2, r) {
  return { toString() {
    return me({ label: e3, "@layer components": { ...typeof t2 == "object" ? t2 : { animation: t2 }, animationName: "" + r } });
  } };
}
function yt2(e3, t2, r) {
  return [e3, ie(t2, r)];
}
function ie(e3, t2) {
  return typeof e3 == "function" ? e3 : typeof e3 == "string" && /^[\w-]+$/.test(e3) ? (r, i2) => ({ [e3]: t2 ? t2(r, i2) : le2(r, 1) }) : (r) => e3 || { [r[1]]: le2(r, 2) };
}
function le2(e3, t2, r = e3.slice(t2).find(Boolean) || e3.$$ || e3.input) {
  return e3.input[0] == "-" ? `calc(${r} * -1)` : r;
}
function gt(e3, t2, r, i2) {
  return [e3, Ge(t2, r, i2)];
}
function Ge(e3, t2, r) {
  let i2 = typeof t2 == "string" ? (n3, l2) => ({ [t2]: r ? r(n3, l2) : n3._ }) : t2 || (({ 1: n3, _: l2 }, o3, s4) => ({ [n3 || s4]: l2 }));
  return (n3, l2) => {
    let o3 = ke(e3 || n3[1]), s4 = l2.theme(o3, n3.$$) ?? oe3(n3.$$, o3, l2);
    if (s4 != null)
      return n3._ = le2(n3, 0, s4), i2(n3, l2, o3);
  };
}
function mt2(e3, t2 = {}, r) {
  return [e3, Ye(t2, r)];
}
function Ye(e3 = {}, t2) {
  return (r, i2) => {
    let { section: n3 = ke(r[0]).replace("-", "") + "Color" } = e3, [l2, o3] = Ze(r.$$);
    if (!l2)
      return;
    let s4 = i2.theme(n3, l2) || oe3(l2, n3, i2);
    if (!s4 || typeof s4 == "object")
      return;
    let { opacityVariable: f4 = `--tw-${r[0].replace(/-$/, "")}-opacity`, opacitySection: a3 = n3.replace("Color", "Opacity"), property: c3 = n3, selector: u3 } = e3, p6 = i2.theme(a3, o3 || "DEFAULT") || o3 && oe3(o3, a3, i2), g5 = t2 || (({ _: $4 }) => {
      let A5 = He(c3, $4);
      return u3 ? { [u3]: A5 } : A5;
    });
    r._ = { value: P3(s4, { opacityVariable: f4 || void 0, opacityValue: p6 || void 0 }), color: ($4) => P3(s4, $4), opacityVariable: f4 || void 0, opacityValue: p6 || void 0 };
    let y3 = g5(r, i2);
    if (!r.dark) {
      let $4 = i2.d(n3, l2, s4);
      $4 && $4 !== s4 && (r._ = { value: P3($4, { opacityVariable: f4 || void 0, opacityValue: p6 || "1" }), color: (A5) => P3($4, A5), opacityVariable: f4 || void 0, opacityValue: p6 || void 0 }, y3 = { "&": y3, [i2.v("dark")]: g5(r, i2) });
    }
    return y3;
  };
}
function Ze(e3) {
  return (e3.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/) || []).slice(1);
}
function He(e3, t2) {
  let r = {};
  return typeof t2 == "string" ? r[e3] = t2 : (t2.opacityVariable && t2.value.includes(t2.opacityVariable) && (r[t2.opacityVariable] = t2.opacityValue || "1"), r[e3] = t2.value), r;
}
function oe3(e3, t2, r) {
  if (e3[0] == "[" && e3.slice(-1) == "]") {
    if (e3 = se(he(e3.slice(1, -1), r.theme)), !t2)
      return e3;
    if (!(/color|fill|stroke/i.test(t2) && !(/^color:/.test(e3) || /^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e3)) || /image/i.test(t2) && !(/^image:/.test(e3) || /^[a-z-]+\(/.test(e3)) || /weight/i.test(t2) && !(/^(number|any):/.test(e3) || /^\d+$/.test(e3)) || /position/i.test(t2) && /^(length|size):/.test(e3)))
      return e3.replace(/^[a-z-]+:/, "");
  }
}
function ke(e3) {
  return e3.replace(/-./g, (t2) => t2[1].toUpperCase());
}
function se(e3) {
  return e3.includes("url(") ? e3.replace(/(.*?)(url\(.*?\))(.*?)/g, (t2, r = "", i2, n3 = "") => se(r) + i2 + se(n3)) : e3.replace(/(^|[^\\])_+/g, (t2, r) => r + " ".repeat(t2.length - r.length)).replace(/\\_/g, "_").replace(/(calc|min|max|clamp)\(.+\)/g, (t2) => t2.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 "));
}
var Qe = Symbol();
var D4 = new Proxy(F5, { apply(e3, t2, r) {
  return B4(r[0]);
}, get(e3, t2) {
  let r = B4[t2];
  return typeof r == "function" ? function() {
    return r.apply(B4, arguments);
  } : r;
} });
var Rt = function e2(t2) {
  return new Proxy(function(i2, ...n3) {
    return xe2(t2, "", i2, n3);
  }, { get(r, i2) {
    return i2 === "bind" ? e2 : i2 in r ? r[i2] : function(l2, ...o3) {
      return xe2(t2, i2, l2, o3);
    };
  } });
}();
function xe2(e3, t2, r, i2) {
  return { toString() {
    let n3 = G4(r, i2), l2 = Y3(t2 + T3(JSON.stringify([t2, n3])));
    return (typeof e3 == "function" ? e3 : D4)(me({ [`@keyframes ${l2}`]: G4(r, i2) })), l2;
  } };
}

// https://esm.sh/v106/@twind/preset-tailwind@1.0.1/deno/preset-tailwind.js
var L3 = "inherit", U3 = "currentColor", j2 = "transparent", V4 = "#000", B5 = "#fff", H5 = { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a" }, I3 = { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827" }, M2 = { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b" }, P4 = { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717" }, N4 = { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917" }, G5 = { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d" }, q3 = { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12" }, Y4 = { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f" }, X4 = { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12" }, J2 = { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314" }, K4 = { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d" }, Q4 = { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b" }, Z4 = { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a" }, ee3 = { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63" }, te = { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e" }, oe4 = { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" }, re3 = { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81" }, ae4 = { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95" }, ie2 = { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87" }, ne3 = { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75" }, le3 = { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843" }, se2 = { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337" }, S4 = { __proto__: null, inherit: L3, current: U3, transparent: j2, black: V4, white: B5, slate: H5, gray: I3, zinc: M2, neutral: P4, stone: N4, red: G5, orange: q3, amber: Y4, yellow: X4, lime: J2, green: K4, emerald: Q4, teal: Z4, cyan: ee3, sky: te, blue: oe4, indigo: re3, violet: ae4, purple: ie2, fuchsia: ne3, pink: le3, rose: se2 }, h2 = { screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" }, colors: S4, columns: { auto: "auto", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem" }, spacing: { px: "1px", 0: "0px", ...c(4, "rem", 4, 0.5, 0.5), ...c(12, "rem", 4, 5), 14: "3.5rem", ...c(64, "rem", 4, 16, 4), 72: "18rem", 80: "20rem", 96: "24rem" }, durations: { 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0,0,0.2,1) infinite", pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite", bounce: "bounce 1s infinite" }, aspectRatio: { auto: "auto", square: "1/1", video: "16/9" }, backdropBlur: n2("blur"), backdropBrightness: n2("brightness"), backdropContrast: n2("contrast"), backdropGrayscale: n2("grayscale"), backdropHueRotate: n2("hueRotate"), backdropInvert: n2("invert"), backdropOpacity: n2("opacity"), backdropSaturate: n2("saturate"), backdropSepia: n2("sepia"), backgroundColor: n2("colors"), backgroundImage: { none: "none" }, backgroundOpacity: n2("opacity"), backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { none: "none", 0: "0", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, brightness: { ...c(200, "", 100, 0, 50), ...c(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, borderColor: ({ theme: e3 }) => ({ DEFAULT: e3("colors.gray.200", "currentColor"), ...e3("colors") }), borderOpacity: n2("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", "1/2": "50%", full: "9999px" }, borderSpacing: n2("spacing"), borderWidth: { DEFAULT: "1px", ...f2(8, "px") }, boxShadow: { sm: "0 1px 2px 0 rgba(0,0,0,0.05)", DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)", md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)", lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)", xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)", "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)", inner: "inset 0 2px 4px 0 rgba(0,0,0,0.05)", none: "0 0 #0000" }, boxShadowColor: n2("colors"), caretColor: n2("colors"), accentColor: ({ theme: e3 }) => ({ auto: "auto", ...e3("colors") }), contrast: { ...c(200, "", 100, 0, 50), 75: "0.75", 125: "1.25" }, content: { none: "none" }, divideColor: n2("borderColor"), divideOpacity: n2("borderOpacity"), divideWidth: n2("borderWidth"), dropShadow: { sm: "0 1px 1px rgba(0,0,0,0.05)", DEFAULT: ["0 1px 2px rgba(0,0,0,0.1)", "0 1px 1px rgba(0,0,0,0.06)"], md: ["0 4px 3px rgba(0,0,0,0.07)", "0 2px 2px rgba(0,0,0,0.06)"], lg: ["0 10px 8px rgba(0,0,0,0.04)", "0 4px 3px rgba(0,0,0,0.1)"], xl: ["0 20px 13px rgba(0,0,0,0.03)", "0 8px 5px rgba(0,0,0,0.08)"], "2xl": "0 25px 25px rgba(0,0,0,0.15)", none: "0 0 #0000" }, fill: n2("colors"), grayscale: { DEFAULT: "100%", 0: "0" }, hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg" }, invert: { DEFAULT: "100%", 0: "0" }, flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: e3 }) => ({ ...e3("spacing"), ...x3(2, 6), ...x3(12, 12), auto: "auto", full: "100%" }), flexGrow: { DEFAULT: 1, 0: 0 }, flexShrink: { DEFAULT: 1, 0: 0 }, fontFamily: { sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","), serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","), mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",") }, fontSize: { xs: ["0.75rem", "1rem"], sm: ["0.875rem", "1.25rem"], base: ["1rem", "1.5rem"], lg: ["1.125rem", "1.75rem"], xl: ["1.25rem", "1.75rem"], "2xl": ["1.5rem", "2rem"], "3xl": ["1.875rem", "2.25rem"], "4xl": ["2.25rem", "2.5rem"], "5xl": ["3rem", "1"], "6xl": ["3.75rem", "1"], "7xl": ["4.5rem", "1"], "8xl": ["6rem", "1"], "9xl": ["8rem", "1"] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: n2("spacing"), gradientColorStops: n2("colors"), gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridColumn: { auto: "auto", "span-full": "1 / -1" }, gridRow: { auto: "auto", "span-full": "1 / -1" }, gridTemplateColumns: { none: "none" }, gridTemplateRows: { none: "none" }, height: ({ theme: e3 }) => ({ ...e3("spacing"), ...x3(2, 6), min: "min-content", max: "max-content", fit: "fit-content", auto: "auto", full: "100%", screen: "100vh" }), inset: ({ theme: e3 }) => ({ ...e3("spacing"), ...x3(2, 4), auto: "auto", full: "100%" }), keyframes: { spin: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } }, ping: { "0%": { transform: "scale(1)", opacity: "1" }, "75%,100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { ...c(10, "rem", 4, 3), none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2" }, margin: ({ theme: e3 }) => ({ auto: "auto", ...e3("spacing") }), maxHeight: ({ theme: e3 }) => ({ full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh", ...e3("spacing") }), maxWidth: ({ theme: e3, breakpoints: r }) => ({ ...r(e3("screens")), none: "none", 0: "0rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch" }), minHeight: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh" }, minWidth: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content" }, opacity: { ...c(100, "", 100, 0, 10), 5: "0.05", 25: "0.25", 75: "0.75", 95: "0.95" }, order: { first: "-9999", last: "9999", none: "0" }, padding: n2("spacing"), placeholderColor: n2("colors"), placeholderOpacity: n2("opacity"), outlineColor: n2("colors"), outlineOffset: f2(8, "px"), outlineWidth: f2(8, "px"), ringColor: ({ theme: e3 }) => ({ ...e3("colors"), DEFAULT: e3("colors.blue.500", "#3b82f6") }), ringOffsetColor: n2("colors"), ringOffsetWidth: f2(8, "px"), ringOpacity: ({ theme: e3 }) => ({ ...e3("opacity"), DEFAULT: "0.5" }), ringWidth: { DEFAULT: "3px", ...f2(8, "px") }, rotate: { ...f2(2, "deg"), ...f2(12, "deg", 3), ...f2(180, "deg", 45) }, saturate: c(200, "", 100, 0, 50), scale: { ...c(150, "", 100, 0, 50), ...c(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, scrollMargin: n2("spacing"), scrollPadding: n2("spacing"), sepia: { 0: "0", DEFAULT: "100%" }, skew: { ...f2(2, "deg"), ...f2(12, "deg", 3) }, space: n2("spacing"), stroke: n2("colors"), strokeWidth: c(2), textColor: n2("colors"), textDecorationColor: n2("colors"), textDecorationThickness: { "from-font": "from-font", auto: "auto", ...f2(8, "px") }, textUnderlineOffset: { auto: "auto", ...f2(8, "px") }, textIndent: n2("spacing"), textOpacity: n2("opacity"), transitionDuration: ({ theme: e3 }) => ({ ...e3("durations"), DEFAULT: "150ms" }), transitionDelay: n2("durations"), transitionProperty: { none: "none", all: "all", DEFAULT: "color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter", colors: "color,background-color,border-color,text-decoration-color,fill,stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4,0,0.2,1)", linear: "linear", in: "cubic-bezier(0.4,0,1,1)", out: "cubic-bezier(0,0,0.2,1)", "in-out": "cubic-bezier(0.4,0,0.2,1)" }, translate: ({ theme: e3 }) => ({ ...e3("spacing"), ...x3(2, 4), full: "100%" }), width: ({ theme: e3 }) => ({ min: "min-content", max: "max-content", fit: "fit-content", screen: "100vw", ...e3("flexBasis") }), willChange: { scroll: "scroll-position" }, zIndex: { ...c(50, "", 1, 0, 10), auto: "auto" } };
function x3(e3, r) {
  let a3 = {};
  do
    for (var i2 = 1; i2 < e3; i2++)
      a3[`${i2}/${e3}`] = Number((i2 / e3 * 100).toFixed(6)) + "%";
  while (++e3 <= r);
  return a3;
}
function f2(e3, r, a3 = 0) {
  let i2 = {};
  for (; a3 <= e3; a3 = 2 * a3 || 1)
    i2[a3] = a3 + r;
  return i2;
}
function c(e3, r = "", a3 = 1, i2 = 0, l2 = 1, d3 = {}) {
  for (; i2 <= e3; i2 += l2)
    d3[i2] = i2 / a3 + r;
  return d3;
}
function n2(e3) {
  return ({ theme: r }) => r(e3);
}
var C3 = { "*,::before,::after": { boxSizing: "border-box", borderWidth: "0", borderStyle: "solid", borderColor: "theme(borderColor.DEFAULT, currentColor)" }, "::before,::after": { "--tw-content": "''" }, html: { lineHeight: 1.5, WebkitTextSizeAdjust: "100%", MozTabSize: "4", tabSize: 4, fontFamily: `theme(fontFamily.sans, ${h2.fontFamily.sans})` }, body: { margin: "0", lineHeight: "inherit" }, hr: { height: "0", color: "inherit", borderTopWidth: "1px" }, "abbr:where([title])": { textDecoration: "underline dotted" }, "h1,h2,h3,h4,h5,h6": { fontSize: "inherit", fontWeight: "inherit" }, a: { color: "inherit", textDecoration: "inherit" }, "b,strong": { fontWeight: "bolder" }, "code,kbd,samp,pre": { fontFamily: `theme(fontFamily.mono, ${h2.fontFamily.mono})`, fontSize: "1em" }, small: { fontSize: "80%" }, "sub,sup": { fontSize: "75%", lineHeight: 0, position: "relative", verticalAlign: "baseline" }, sub: { bottom: "-0.25em" }, sup: { top: "-0.5em" }, table: { textIndent: "0", borderColor: "inherit", borderCollapse: "collapse" }, "button,input,optgroup,select,textarea": { fontFamily: "inherit", fontSize: "100%", lineHeight: "inherit", color: "inherit", margin: "0", padding: "0" }, "button,select": { textTransform: "none" }, "button,[type='button'],[type='reset'],[type='submit']": { WebkitAppearance: "button", backgroundColor: "transparent", backgroundImage: "none" }, ":-moz-focusring": { outline: "auto" }, ":-moz-ui-invalid": { boxShadow: "none" }, progress: { verticalAlign: "baseline" }, "::-webkit-inner-spin-button,::-webkit-outer-spin-button": { height: "auto" }, "[type='search']": { WebkitAppearance: "textfield", outlineOffset: "-2px" }, "::-webkit-search-decoration": { WebkitAppearance: "none" }, "::-webkit-file-upload-button": { WebkitAppearance: "button", font: "inherit" }, summary: { display: "list-item" }, "blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre": { margin: "0" }, fieldset: { margin: "0", padding: "0" }, legend: { padding: "0" }, "ol,ul,menu": { listStyle: "none", margin: "0", padding: "0" }, textarea: { resize: "vertical" }, "input::placeholder,textarea::placeholder": { opacity: 1, color: "theme(colors.gray.400, #9ca3af)" }, 'button,[role="button"]': { cursor: "pointer" }, ":disabled": { cursor: "default" }, "img,svg,video,canvas,audio,iframe,embed,object": { display: "block", verticalAlign: "middle" }, "img,video": { maxWidth: "100%", height: "auto" }, "[hidden]": { display: "none" } }, O2 = [yt2("\\[([-\\w]+):(.+)]", ({ 1: e3, 2: r }, a3) => ({ "@layer overrides": { "&": { [e3]: oe3(`[${r}]`, e3, a3) } } })), yt2("(group|peer)(~[^-[]+)?", ({ input: e3 }, { h: r }) => [{ c: r(e3) }]), gt("aspect-", "aspectRatio"), yt2("container", (e3, { theme: r }) => {
  let { screens: a3 = r("screens"), center: i2, padding: l2 } = r("container"), d3 = { width: "100%", marginRight: i2 && "auto", marginLeft: i2 && "auto", ...m4("xs") };
  for (let w4 in a3) {
    let b4 = a3[w4];
    typeof b4 == "string" && (d3[Ce(b4)] = { "&": { maxWidth: b4, ...m4(w4) } });
  }
  return d3;
  function m4(w4) {
    let b4 = l2 && (typeof l2 == "string" ? l2 : l2[w4] || l2.DEFAULT);
    if (b4)
      return { paddingRight: b4, paddingLeft: b4 };
  }
}), gt("content-", "content", ({ _: e3 }) => ({ "--tw-content": e3, content: "var(--tw-content)" })), yt2("(?:box-)?decoration-(slice|clone)", "boxDecorationBreak"), yt2("box-(border|content)", "boxSizing", ({ 1: e3 }) => e3 + "-box"), yt2("hidden", { display: "none" }), yt2("table-(auto|fixed)", "tableLayout"), yt2(["(block|flex|table|grid|inline|contents|flow-root|list-item)", "(inline-(block|flex|table|grid))", "(table-(caption|cell|column|row|(column|row|footer|header)-group))"], "display"), "(float)-(left|right|none)", "(clear)-(left|right|none|both)", "(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)", "(isolation)-(auto)", yt2("isolate", "isolation"), yt2("object-(contain|cover|fill|none|scale-down)", "objectFit"), gt("object-", "objectPosition"), yt2("object-(top|bottom|center|(left|right)(-(top|bottom))?)", "objectPosition", y2), yt2("overscroll(-[xy])?-(auto|contain|none)", ({ 1: e3 = "", 2: r }) => ({ ["overscroll-behavior" + e3]: r })), yt2("(static|fixed|absolute|relative|sticky)", "position"), gt("-?inset(-[xy])?(?:$|-)", "inset", ({ 1: e3, _: r }) => ({ top: e3 != "-x" && r, right: e3 != "-y" && r, bottom: e3 != "-x" && r, left: e3 != "-y" && r })), gt("-?(top|bottom|left|right)(?:$|-)", "inset"), yt2("visible", "visibility"), yt2("invisible", { visibility: "hidden" }), gt("-?z-", "zIndex"), yt2("flex-((row|col)(-reverse)?)", "flexDirection", F6), yt2("flex-(wrap|wrap-reverse|nowrap)", "flexWrap"), gt("(flex-(?:grow|shrink))(?:$|-)"), gt("(flex)-"), gt("grow(?:$|-)", "flexGrow"), gt("shrink(?:$|-)", "flexShrink"), gt("basis-", "flexBasis"), gt("-?(order)-"), "-?(order)-(\\d+)", gt("grid-cols-", "gridTemplateColumns"), yt2("grid-cols-(\\d+)", "gridTemplateColumns", D5), gt("col-", "gridColumn"), yt2("col-(span)-(\\d+)", "gridColumn", W5), gt("col-start-", "gridColumnStart"), yt2("col-start-(auto|\\d+)", "gridColumnStart"), gt("col-end-", "gridColumnEnd"), yt2("col-end-(auto|\\d+)", "gridColumnEnd"), gt("grid-rows-", "gridTemplateRows"), yt2("grid-rows-(\\d+)", "gridTemplateRows", D5), gt("row-", "gridRow"), yt2("row-(span)-(\\d+)", "gridRow", W5), gt("row-start-", "gridRowStart"), yt2("row-start-(auto|\\d+)", "gridRowStart"), gt("row-end-", "gridRowEnd"), yt2("row-end-(auto|\\d+)", "gridRowEnd"), yt2("grid-flow-((row|col)(-dense)?)", "gridAutoFlow", (e3) => y2(F6(e3))), yt2("grid-flow-(dense)", "gridAutoFlow"), gt("auto-cols-", "gridAutoColumns"), gt("auto-rows-", "gridAutoRows"), gt("gap-x(?:$|-)", "gap", "columnGap"), gt("gap-y(?:$|-)", "gap", "rowGap"), gt("gap(?:$|-)", "gap"), "(justify-(?:items|self))-", yt2("justify-", "justifyContent", T4), yt2("(content|items|self)-", (e3) => ({ ["align-" + e3[1]]: T4(e3) })), yt2("(place-(content|items|self))-", ({ 1: e3, $$: r }) => ({ [e3]: ("wun".includes(r[3]) ? "space-" : "") + r })), gt("p([xytrbl])?(?:$|-)", "padding", u("padding")), gt("-?m([xytrbl])?(?:$|-)", "margin", u("margin")), gt("-?space-(x|y)(?:$|-)", "space", ({ 1: e3, _: r }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${e3}-reverse`]: "0", ["margin-" + { y: "top", x: "left" }[e3]]: `calc(${r} * calc(1 - var(--tw-space-${e3}-reverse)))`, ["margin-" + { y: "bottom", x: "right" }[e3]]: `calc(${r} * var(--tw-space-${e3}-reverse))` } })), yt2("space-(x|y)-reverse", ({ 1: e3 }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${e3}-reverse`]: "1" } })), gt("w-", "width"), gt("min-w-", "minWidth"), gt("max-w-", "maxWidth"), gt("h-", "height"), gt("min-h-", "minHeight"), gt("max-h-", "maxHeight"), gt("font-", "fontWeight"), gt("font-", "fontFamily", "fontFamily", p2), yt2("antialiased", { WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }), yt2("subpixel-antialiased", { WebkitFontSmoothing: "auto", MozOsxFontSmoothing: "auto" }), yt2("italic", "fontStyle"), yt2("not-italic", { fontStyle: "normal" }), yt2("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)", ({ 1: e3, 2: r = "", 3: a3 }) => r == "normal" ? { fontVariantNumeric: "normal" } : { ["--tw-" + (a3 ? "numeric-fraction" : "pt".includes(r[0]) ? "numeric-spacing" : r ? "numeric-figure" : e3)]: e3, fontVariantNumeric: "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ordinal": "var(--tw-empty,/*!*/ /*!*/)", "--tw-slashed-zero": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-figure": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-spacing": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-fraction": "var(--tw-empty,/*!*/ /*!*/)" } } }), gt("tracking-", "letterSpacing"), gt("leading-", "lineHeight"), yt2("list-(inside|outside)", "listStylePosition"), gt("list-", "listStyleType"), yt2("list-", "listStyleType"), gt("placeholder-opacity-", "placeholderOpacity", ({ _: e3 }) => ({ "&::placeholder": { "--tw-placeholder-opacity": e3 } })), mt2("placeholder-", { property: "color", selector: "&::placeholder" }), yt2("text-(left|center|right|justify|start|end)", "textAlign"), yt2("text-(ellipsis|clip)", "textOverflow"), gt("text-opacity-", "textOpacity", "--tw-text-opacity"), mt2("text-", { property: "color" }), gt("text-", "fontSize", ({ _: e3 }) => typeof e3 == "string" ? { fontSize: e3 } : { fontSize: e3[0], ...typeof e3[1] == "string" ? { lineHeight: e3[1] } : e3[1] }), gt("indent-", "textIndent"), yt2("(overline|underline|line-through)", "textDecorationLine"), yt2("no-underline", { textDecorationLine: "none" }), gt("underline-offset-", "textUnderlineOffset"), mt2("decoration-", { section: "textDecorationColor", opacityVariable: !1, opacitySection: "opacity" }), gt("decoration-", "textDecorationThickness"), yt2("decoration-", "textDecorationStyle"), yt2("(uppercase|lowercase|capitalize)", "textTransform"), yt2("normal-case", { textTransform: "none" }), yt2("truncate", { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }), yt2("align-", "verticalAlign"), yt2("whitespace-", "whiteSpace"), yt2("break-normal", { wordBreak: "normal", overflowWrap: "normal" }), yt2("break-words", { overflowWrap: "break-word" }), yt2("break-all", { wordBreak: "break-all" }), mt2("caret-", { opacityVariable: !1, opacitySection: "opacity" }), mt2("accent-", { opacityVariable: !1, opacitySection: "opacity" }), yt2("bg-gradient-to-([trbl]|[tb][rl])", "backgroundImage", ({ 1: e3 }) => `linear-gradient(to ${g2(e3, " ")},var(--tw-gradient-stops))`), mt2("from-", { section: "gradientColorStops", opacityVariable: !1, opacitySection: "opacity" }, ({ _: e3 }) => ({ "--tw-gradient-from": e3.value, "--tw-gradient-to": e3.color({ opacityValue: "0" }), "--tw-gradient-stops": "var(--tw-gradient-from),var(--tw-gradient-to)" })), mt2("via-", { section: "gradientColorStops", opacityVariable: !1, opacitySection: "opacity" }, ({ _: e3 }) => ({ "--tw-gradient-to": e3.color({ opacityValue: "0" }), "--tw-gradient-stops": `var(--tw-gradient-from),${e3.value},var(--tw-gradient-to)` })), mt2("to-", { section: "gradientColorStops", property: "--tw-gradient-to", opacityVariable: !1, opacitySection: "opacity" }), yt2("bg-(fixed|local|scroll)", "backgroundAttachment"), yt2("bg-origin-(border|padding|content)", "backgroundOrigin", ({ 1: e3 }) => e3 + "-box"), yt2(["bg-(no-repeat|repeat(-[xy])?)", "bg-repeat-(round|space)"], "backgroundRepeat"), yt2("bg-blend-", "backgroundBlendMode"), yt2("bg-clip-(border|padding|content|text)", "backgroundClip", ({ 1: e3 }) => e3 + (e3 == "text" ? "" : "-box")), gt("bg-opacity-", "backgroundOpacity", "--tw-bg-opacity"), mt2("bg-", { section: "backgroundColor" }), gt("bg-", "backgroundImage"), gt("bg-", "backgroundPosition"), yt2("bg-(top|bottom|center|(left|right)(-(top|bottom))?)", "backgroundPosition", y2), gt("bg-", "backgroundSize"), gt("rounded(?:$|-)", "borderRadius"), gt("rounded-([trbl]|[tb][rl])(?:$|-)", "borderRadius", ({ 1: e3, _: r }) => {
  let a3 = { t: ["tl", "tr"], r: ["tr", "br"], b: ["bl", "br"], l: ["bl", "tl"] }[e3] || [e3, e3];
  return { [`border-${g2(a3[0])}-radius`]: r, [`border-${g2(a3[1])}-radius`]: r };
}), yt2("border-(collapse|separate)", "borderCollapse"), gt("border-opacity(?:$|-)", "borderOpacity", "--tw-border-opacity"), yt2("border-(solid|dashed|dotted|double|none)", "borderStyle"), gt("border-spacing(-[xy])?(?:$|-)", "borderSpacing", ({ 1: e3, _: r }) => ({ "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-border-spacing-x": 0, "--tw-border-spacing-y": 0 } }, ["--tw-border-spacing" + (e3 || "-x")]: r, ["--tw-border-spacing" + (e3 || "-y")]: r, "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)" })), mt2("border-([xytrbl])-", { section: "borderColor" }, u("border", "Color")), mt2("border-"), gt("border-([xytrbl])(?:$|-)", "borderWidth", u("border", "Width")), gt("border(?:$|-)", "borderWidth"), gt("divide-opacity(?:$|-)", "divideOpacity", ({ _: e3 }) => ({ "&>:not([hidden])~:not([hidden])": { "--tw-divide-opacity": e3 } })), yt2("divide-(solid|dashed|dotted|double|none)", ({ 1: e3 }) => ({ "&>:not([hidden])~:not([hidden])": { borderStyle: e3 } })), yt2("divide-([xy]-reverse)", ({ 1: e3 }) => ({ "&>:not([hidden])~:not([hidden])": { ["--tw-divide-" + e3]: "1" } })), gt("divide-([xy])(?:$|-)", "divideWidth", ({ 1: e3, _: r }) => {
  let a3 = { x: "lr", y: "tb" }[e3];
  return { "&>:not([hidden])~:not([hidden])": { [`--tw-divide-${e3}-reverse`]: "0", [`border-${g2(a3[0])}Width`]: `calc(${r} * calc(1 - var(--tw-divide-${e3}-reverse)))`, [`border-${g2(a3[1])}Width`]: `calc(${r} * var(--tw-divide-${e3}-reverse))` } };
}), mt2("divide-", { property: "borderColor", selector: "&>:not([hidden])~:not([hidden])" }), gt("ring-opacity(?:$|-)", "ringOpacity", "--tw-ring-opacity"), mt2("ring-offset-", { property: "--tw-ring-offset-color", opacityVariable: !1 }), gt("ring-offset(?:$|-)", "ringOffsetWidth", "--tw-ring-offset-width"), yt2("ring-inset", { "--tw-ring-inset": "inset" }), mt2("ring-", { property: "--tw-ring-color" }), gt("ring(?:$|-)", "ringWidth", ({ _: e3 }, { theme: r }) => ({ "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)", "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${e3} + var(--tw-ring-offset-width)) var(--tw-ring-color)`, boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000", "&": { "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)", "--tw-ring-offset-width": r("ringOffsetWidth", "", "0px"), "--tw-ring-offset-color": P3(r("ringOffsetColor", "", "#fff")), "--tw-ring-color": P3(r("ringColor", "", "#93c5fd"), { opacityVariable: "--tw-ring-opacity" }), "--tw-ring-opacity": r("ringOpacity", "", "0.5") } } } })), mt2("shadow-", { section: "boxShadowColor", opacityVariable: !1, opacitySection: "opacity" }, ({ _: e3 }) => ({ "--tw-shadow-color": e3.value, "--tw-shadow": "var(--tw-shadow-colored)" })), gt("shadow(?:$|-)", "boxShadow", ({ _: e3 }) => ({ "--tw-shadow": p2(e3), "--tw-shadow-colored": p2(e3).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g, "$1var(--tw-shadow-color)$2"), boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000" } } })), gt("(opacity)-"), yt2("mix-blend-", "mixBlendMode"), ...A3(), ...A3("backdrop-"), gt("transition(?:$|-)", "transitionProperty", (e3, { theme: r }) => ({ transitionProperty: p2(e3), transitionTimingFunction: e3._ == "none" ? void 0 : p2(r("transitionTimingFunction", "")), transitionDuration: e3._ == "none" ? void 0 : p2(r("transitionDuration", "")) })), gt("duration(?:$|-)", "transitionDuration", "transitionDuration", p2), gt("ease(?:$|-)", "transitionTimingFunction", "transitionTimingFunction", p2), gt("delay(?:$|-)", "transitionDelay", "transitionDelay", p2), gt("animate(?:$|-)", "animation", (e3, { theme: r, h: a3 }) => {
  let i2 = p2(e3), l2 = i2.split(" "), d3 = r("keyframes", l2[0]);
  return d3 ? { ["@keyframes " + (l2[0] = a3(l2[0]))]: d3, animation: l2.join(" ") } : { animation: i2 };
}), "(transform)-(none)", yt2("transform", $2), yt2("transform-(cpu|gpu)", ({ 1: e3 }) => ({ "--tw-transform": E(e3 == "gpu") })), gt("scale(-[xy])?-", "scale", ({ 1: e3, _: r }) => ({ ["--tw-scale" + (e3 || "-x")]: r, ["--tw-scale" + (e3 || "-y")]: r, ...$2() })), gt("-?(rotate)-", "rotate", k2), gt("-?(translate-[xy])-", "translate", k2), gt("-?(skew-[xy])-", "skew", k2), yt2("origin-(center|((top|bottom)(-(left|right))?)|left|right)", "transformOrigin", y2), "(appearance)-", gt("(columns)-"), "(columns)-(\\d+)", "(break-(?:before|after|inside))-", gt("(cursor)-"), "(cursor)-", yt2("snap-(none)", "scroll-snap-type"), yt2("snap-(x|y|both)", ({ 1: e3 }) => ({ "scroll-snap-type": e3 + " var(--tw-scroll-snap-strictness)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-scroll-snap-strictness": "proximity" } } })), yt2("snap-(mandatory|proximity)", "--tw-scroll-snap-strictness"), yt2("snap-(?:(start|end|center)|align-(none))", "scroll-snap-align"), yt2("snap-(normal|always)", "scroll-snap-stop"), yt2("scroll-(auto|smooth)", "scroll-behavior"), gt("scroll-p([xytrbl])?(?:$|-)", "padding", u("scroll-padding")), gt("-?scroll-m([xytrbl])?(?:$|-)", "scroll-margin", u("scroll-margin")), yt2("touch-(auto|none|manipulation)", "touch-action"), yt2("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))", ({ 1: e3, 2: r, 3: a3 }) => ({ [`--tw-${r ? "pan-x" : a3 ? "pan-y" : e3}`]: e3, "touch-action": "var(--tw-touch-action)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-pan-x": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pan-y": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pinch-zoom": "var(--tw-empty,/*!*/ /*!*/)", "--tw-touch-action": "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)" } } })), yt2("outline-none", { outline: "2px solid transparent", "outline-offset": "2px" }), yt2("outline", { outlineStyle: "solid" }), yt2("outline-(dashed|dotted|double|hidden)", "outlineStyle"), gt("(outline-offset)-"), mt2("outline-", { opacityVariable: !1, opacitySection: "opacity" }), gt("outline-", "outlineWidth"), "(pointer-events)-", gt("(will-change)-"), "(will-change)-", ["resize(?:-(none|x|y))?", "resize", ({ 1: e3 }) => ({ x: "horizontal", y: "vertical" })[e3] || e3 || "both"], yt2("select-(none|text|all|auto)", "userSelect"), mt2("fill-", { section: "fill", opacityVariable: !1, opacitySection: "opacity" }), mt2("stroke-", { section: "stroke", opacityVariable: !1, opacitySection: "opacity" }), gt("stroke-", "strokeWidth"), yt2("sr-only", { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", whiteSpace: "nowrap", clip: "rect(0,0,0,0)", borderWidth: "0" }), yt2("not-sr-only", { position: "static", width: "auto", height: "auto", padding: "0", margin: "0", overflow: "visible", whiteSpace: "normal", clip: "auto" })];
function y2(e3) {
  return (typeof e3 == "string" ? e3 : e3[1]).replace(/-/g, " ").trim();
}
function F6(e3) {
  return (typeof e3 == "string" ? e3 : e3[1]).replace("col", "column");
}
function g2(e3, r = "-") {
  let a3 = [];
  for (let i2 of e3)
    a3.push({ t: "top", r: "right", b: "bottom", l: "left" }[i2]);
  return a3.join(r);
}
function p2(e3) {
  return e3 && "" + (e3._ || e3);
}
function T4({ $$: e3 }) {
  return ({ r: "flex-", "": "flex-", w: "space-", u: "space-", n: "space-" }[e3[3] || ""] || "") + e3;
}
function u(e3, r = "") {
  return ({ 1: a3, _: i2 }) => {
    let l2 = { x: "lr", y: "tb" }[a3] || a3 + a3;
    return l2 ? { ...He(e3 + "-" + g2(l2[0]) + r, i2), ...He(e3 + "-" + g2(l2[1]) + r, i2) } : He(e3 + r, i2);
  };
}
function A3(e3 = "") {
  let r = ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", e3 && "opacity", "saturate", "sepia", !e3 && "drop-shadow"].filter(Boolean), a3 = {};
  for (let i2 of r)
    a3[`--tw-${e3}${i2}`] = "var(--tw-empty,/*!*/ /*!*/)";
  return a3 = { [`${e3}filter`]: r.map((i2) => `var(--tw-${e3}${i2})`).join(" "), "@layer defaults": { "*,::before,::after,::backdrop": a3 } }, [`(${e3}filter)-(none)`, yt2(`${e3}filter`, a3), ...r.map((i2) => gt(`${i2[0] == "h" ? "-?" : ""}(${e3}${i2})(?:$|-)`, i2, ({ 1: l2, _: d3 }) => ({ [`--tw-${l2}`]: b2(d3).map((m4) => `${i2}(${m4})`).join(" "), ...a3 })))];
}
function k2({ 1: e3, _: r }) {
  return { ["--tw-" + e3]: r, ...$2() };
}
function $2() {
  return { transform: "var(--tw-transform)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-translate-x": "0", "--tw-translate-y": "0", "--tw-rotate": "0", "--tw-skew-x": "0", "--tw-skew-y": "0", "--tw-scale-x": "1", "--tw-scale-y": "1", "--tw-transform": E() } } };
}
function E(e3) {
  return [e3 ? "translate3d(var(--tw-translate-x),var(--tw-translate-y),0)" : "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))", "rotate(var(--tw-rotate))", "skewX(var(--tw-skew-x))", "skewY(var(--tw-skew-y))", "scaleX(var(--tw-scale-x))", "scaleY(var(--tw-scale-y))"].join(" ");
}
function W5({ 1: e3, 2: r }) {
  return `${e3} ${r} / ${e3} ${r}`;
}
function D5({ 1: e3 }) {
  return `repeat(${e3},minmax(0,1fr))`;
}

// https://esm.sh/v106/notie@4.3.1/deno/notie.js
var Me2 = Object.create, xe3 = Object.defineProperty, He2 = Object.getOwnPropertyDescriptor, Se2 = Object.getOwnPropertyNames, we2 = Object.getPrototypeOf, Oe = Object.prototype.hasOwnProperty, Ae2 = (y3, o3) => () => (o3 || y3((o3 = { exports: {} }).exports, o3), o3.exports), De = (y3, o3, v2, b4) => {
  if (o3 && typeof o3 == "object" || typeof o3 == "function")
    for (let m4 of Se2(o3))
      !Oe.call(y3, m4) && m4 !== v2 && xe3(y3, m4, { get: () => o3[m4], enumerable: !(b4 = He2(o3, m4)) || b4.enumerable });
  return y3;
}, Ie = (y3, o3, v2) => (v2 = y3 != null ? Me2(we2(y3)) : {}, De(o3 || !y3 || !y3.__esModule ? xe3(v2, "default", { value: y3, enumerable: !0 }) : v2, y3)), ye2 = Ae2((ie4, pe2) => {
  (function(y3, o3) {
    typeof ie4 == "object" && typeof pe2 == "object" ? pe2.exports = o3() : typeof define == "function" && define.amd ? define([], o3) : typeof ie4 == "object" ? ie4.notie = o3() : y3.notie = o3();
  })(ie4, function() {
    return function(y3) {
      function o3(b4) {
        if (v2[b4])
          return v2[b4].exports;
        var m4 = v2[b4] = { i: b4, l: !1, exports: {} };
        return y3[b4].call(m4.exports, m4, m4.exports, o3), m4.l = !0, m4.exports;
      }
      var v2 = {};
      return o3.m = y3, o3.c = v2, o3.i = function(b4) {
        return b4;
      }, o3.d = function(b4, m4, ce4) {
        o3.o(b4, m4) || Object.defineProperty(b4, m4, { configurable: !1, enumerable: !0, get: ce4 });
      }, o3.n = function(b4) {
        var m4 = b4 && b4.__esModule ? function() {
          return b4.default;
        } : function() {
          return b4;
        };
        return o3.d(m4, "a", m4), m4;
      }, o3.o = function(b4, m4) {
        return Object.prototype.hasOwnProperty.call(b4, m4);
      }, o3.p = "", o3(o3.s = 1);
    }([function(y3, o3) {
      y3.exports = function(v2) {
        return v2.webpackPolyfill || (v2.deprecate = function() {
        }, v2.paths = [], v2.children || (v2.children = []), Object.defineProperty(v2, "loaded", { enumerable: !0, get: function() {
          return v2.l;
        } }), Object.defineProperty(v2, "id", { enumerable: !0, get: function() {
          return v2.i;
        } }), v2.webpackPolyfill = 1), v2;
      };
    }, function(y3, o3, v2) {
      "use strict";
      (function(b4) {
        var m4, ce4, re4, V6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A5) {
          return typeof A5;
        } : function(A5) {
          return A5 && typeof Symbol == "function" && A5.constructor === Symbol && A5 !== Symbol.prototype ? "symbol" : typeof A5;
        };
        (function(A5, u3) {
          V6(o3) === "object" && V6(b4) === "object" ? b4.exports = u3() : (ce4 = [], m4 = u3, re4 = typeof m4 == "function" ? m4.apply(o3, ce4) : m4, re4 !== void 0 && (b4.exports = re4));
        })(void 0, function() {
          return function(A5) {
            function u3(g5) {
              if (X6[g5])
                return X6[g5].exports;
              var T6 = X6[g5] = { i: g5, l: !1, exports: {} };
              return A5[g5].call(T6.exports, T6, T6.exports, u3), T6.l = !0, T6.exports;
            }
            var X6 = {};
            return u3.m = A5, u3.c = X6, u3.i = function(g5) {
              return g5;
            }, u3.d = function(g5, T6, B7) {
              u3.o(g5, T6) || Object.defineProperty(g5, T6, { configurable: !1, enumerable: !0, get: B7 });
            }, u3.n = function(g5) {
              var T6 = g5 && g5.__esModule ? function() {
                return g5.default;
              } : function() {
                return g5;
              };
              return u3.d(T6, "a", T6), T6;
            }, u3.o = function(g5, T6) {
              return Object.prototype.hasOwnProperty.call(g5, T6);
            }, u3.p = "", u3(u3.s = 0);
          }([function(A5, u3, X6) {
            function g5(t2, c3) {
              var s4 = {};
              for (var d3 in t2)
                c3.indexOf(d3) >= 0 || Object.prototype.hasOwnProperty.call(t2, d3) && (s4[d3] = t2[d3]);
              return s4;
            }
            Object.defineProperty(u3, "__esModule", { value: !0 });
            var T6 = typeof Symbol == "function" && V6(Symbol.iterator) === "symbol" ? function(t2) {
              return typeof t2 > "u" ? "undefined" : V6(t2);
            } : function(t2) {
              return t2 && typeof Symbol == "function" && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2 > "u" ? "undefined" : V6(t2);
            }, B7 = Object.assign || function(t2) {
              for (var c3 = 1; c3 < arguments.length; c3++) {
                var s4 = arguments[c3];
                for (var d3 in s4)
                  Object.prototype.hasOwnProperty.call(s4, d3) && (t2[d3] = s4[d3]);
              }
              return t2;
            }, J4 = { top: "top", bottom: "bottom" }, e3 = { alertTime: 3, dateMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], overlayClickDismiss: !0, overlayOpacity: 0.75, transitionCurve: "ease", transitionDuration: 0.3, transitionSelector: "all", classes: { container: "notie-container", textbox: "notie-textbox", textboxInner: "notie-textbox-inner", button: "notie-button", element: "notie-element", elementHalf: "notie-element-half", elementThird: "notie-element-third", overlay: "notie-overlay", backgroundSuccess: "notie-background-success", backgroundWarning: "notie-background-warning", backgroundError: "notie-background-error", backgroundInfo: "notie-background-info", backgroundNeutral: "notie-background-neutral", backgroundOverlay: "notie-background-overlay", alert: "notie-alert", inputField: "notie-input-field", selectChoiceRepeated: "notie-select-choice-repeated", dateSelectorInner: "notie-date-selector-inner", dateSelectorUp: "notie-date-selector-up" }, ids: { overlay: "notie-overlay" }, positions: { alert: J4.top, force: J4.top, confirm: J4.top, input: J4.top, select: J4.bottom, date: J4.top } }, ge2 = u3.setOptions = function(t2) {
              e3 = B7({}, e3, t2, { classes: B7({}, e3.classes, t2.classes), ids: B7({}, e3.ids, t2.ids), positions: B7({}, e3.positions, t2.positions) });
            }, fe = function() {
              return new Promise(function(t2) {
                return setTimeout(t2, 0);
              });
            }, oe5 = function(t2) {
              return new Promise(function(c3) {
                return setTimeout(c3, 1e3 * t2);
              });
            }, R6 = function() {
              document.activeElement && document.activeElement.blur();
            }, W7 = function() {
              var t2 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c3) {
                var s4 = 16 * Math.random() | 0, d3 = c3 === "x" ? s4 : 3 & s4 | 8;
                return d3.toString(16);
              });
              return "notie-" + t2;
            }, le4 = { 1: e3.classes.backgroundSuccess, success: e3.classes.backgroundSuccess, 2: e3.classes.backgroundWarning, warning: e3.classes.backgroundWarning, 3: e3.classes.backgroundError, error: e3.classes.backgroundError, 4: e3.classes.backgroundInfo, info: e3.classes.backgroundInfo, 5: e3.classes.backgroundNeutral, neutral: e3.classes.backgroundNeutral }, me2 = function() {
              return e3.transitionSelector + " " + e3.transitionDuration + "s " + e3.transitionCurve;
            }, $4 = function(t2) {
              return t2.keyCode === 13;
            }, ee4 = function(t2) {
              return t2.keyCode === 27;
            }, K5 = function(t2, c3) {
              t2.classList.add(e3.classes.container), t2.style[c3] = "-10000px", document.body.appendChild(t2), t2.style[c3] = "-" + t2.offsetHeight + "px", t2.listener && window.addEventListener("keydown", t2.listener), fe().then(function() {
                t2.style.transition = me2(), t2.style[c3] = 0;
              });
            }, O4 = function(t2, c3) {
              var s4 = document.getElementById(t2);
              s4 && (s4.style[c3] = "-" + s4.offsetHeight + "px", s4.listener && window.removeEventListener("keydown", s4.listener), oe5(e3.transitionDuration).then(function() {
                s4.parentNode && s4.parentNode.removeChild(s4);
              }));
            }, te2 = function(t2, c3) {
              var s4 = document.createElement("div");
              s4.id = e3.ids.overlay, s4.classList.add(e3.classes.overlay), s4.classList.add(e3.classes.backgroundOverlay), s4.style.opacity = 0, t2 && e3.overlayClickDismiss && (s4.onclick = function() {
                O4(t2.id, c3), j5();
              }), document.body.appendChild(s4), fe().then(function() {
                s4.style.transition = me2(), s4.style.opacity = e3.overlayOpacity;
              });
            }, j5 = function() {
              var t2 = document.getElementById(e3.ids.overlay);
              t2.style.opacity = 0, oe5(e3.transitionDuration).then(function() {
                t2.parentNode && t2.parentNode.removeChild(t2);
              });
            }, F8 = u3.hideAlerts = function(t2) {
              var c3 = document.getElementsByClassName(e3.classes.alert);
              if (c3.length) {
                for (var s4 = 0; s4 < c3.length; s4++) {
                  var d3 = c3[s4];
                  O4(d3.id, d3.position);
                }
                t2 && oe5(e3.transitionDuration).then(function() {
                  return t2();
                });
              }
            }, he2 = u3.alert = function(t2) {
              var c3 = t2.type, s4 = c3 === void 0 ? 4 : c3, d3 = t2.text, i2 = t2.time, k4 = i2 === void 0 ? e3.alertTime : i2, H7 = t2.stay, S7 = H7 !== void 0 && H7, h3 = t2.position, p6 = h3 === void 0 ? e3.positions.alert || p6.top : h3;
              R6(), F8();
              var l2 = document.createElement("div"), f4 = W7();
              l2.id = f4, l2.position = p6, l2.classList.add(e3.classes.textbox), l2.classList.add(le4[s4]), l2.classList.add(e3.classes.alert), l2.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + d3 + "</div>", l2.onclick = function() {
                return O4(f4, p6);
              }, l2.listener = function(n3) {
                ($4(n3) || ee4(n3)) && F8();
              }, K5(l2, p6), k4 && k4 < 1 && (k4 = 1), !S7 && k4 && oe5(k4).then(function() {
                return O4(f4, p6);
              });
            }, ke2 = u3.force = function(t2, c3) {
              var s4 = t2.type, d3 = s4 === void 0 ? 5 : s4, i2 = t2.text, k4 = t2.buttonText, H7 = k4 === void 0 ? "OK" : k4, S7 = t2.callback, h3 = t2.position, p6 = h3 === void 0 ? e3.positions.force || p6.top : h3;
              R6(), F8();
              var l2 = document.createElement("div"), f4 = W7();
              l2.id = f4;
              var n3 = document.createElement("div");
              n3.classList.add(e3.classes.textbox), n3.classList.add(e3.classes.backgroundInfo), n3.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + i2 + "</div>";
              var r = document.createElement("div");
              r.classList.add(e3.classes.button), r.classList.add(le4[d3]), r.innerHTML = H7, r.onclick = function() {
                O4(f4, p6), j5(), S7 ? S7() : c3 && c3();
              }, l2.appendChild(n3), l2.appendChild(r), l2.listener = function(C5) {
                $4(C5) && r.click();
              }, K5(l2, p6), te2();
            }, Ce3 = u3.confirm = function(t2, c3, s4) {
              var d3 = t2.text, i2 = t2.submitText, k4 = i2 === void 0 ? "Yes" : i2, H7 = t2.cancelText, S7 = H7 === void 0 ? "Cancel" : H7, h3 = t2.submitCallback, p6 = t2.cancelCallback, l2 = t2.position, f4 = l2 === void 0 ? e3.positions.confirm || f4.top : l2;
              R6(), F8();
              var n3 = document.createElement("div"), r = W7();
              n3.id = r;
              var C5 = document.createElement("div");
              C5.classList.add(e3.classes.textbox), C5.classList.add(e3.classes.backgroundInfo), C5.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + d3 + "</div>";
              var x5 = document.createElement("div");
              x5.classList.add(e3.classes.button), x5.classList.add(e3.classes.elementHalf), x5.classList.add(e3.classes.backgroundSuccess), x5.innerHTML = k4, x5.onclick = function() {
                O4(r, f4), j5(), h3 ? h3() : c3 && c3();
              };
              var a3 = document.createElement("div");
              a3.classList.add(e3.classes.button), a3.classList.add(e3.classes.elementHalf), a3.classList.add(e3.classes.backgroundError), a3.innerHTML = S7, a3.onclick = function() {
                O4(r, f4), j5(), p6 ? p6() : s4 && s4();
              }, n3.appendChild(C5), n3.appendChild(x5), n3.appendChild(a3), n3.listener = function(E3) {
                $4(E3) ? x5.click() : ee4(E3) && a3.click();
              }, K5(n3, f4), te2(n3, f4);
            }, ve2 = function(t2, c3, s4) {
              var d3 = t2.text, i2 = t2.submitText, k4 = i2 === void 0 ? "Submit" : i2, H7 = t2.cancelText, S7 = H7 === void 0 ? "Cancel" : H7, h3 = t2.submitCallback, p6 = t2.cancelCallback, l2 = t2.position, f4 = l2 === void 0 ? e3.positions.input || f4.top : l2, n3 = g5(t2, ["text", "submitText", "cancelText", "submitCallback", "cancelCallback", "position"]);
              R6(), F8();
              var r = document.createElement("div"), C5 = W7();
              r.id = C5;
              var x5 = document.createElement("div");
              x5.classList.add(e3.classes.textbox), x5.classList.add(e3.classes.backgroundInfo), x5.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + d3 + "</div>";
              var a3 = document.createElement("input");
              a3.classList.add(e3.classes.inputField), a3.setAttribute("autocapitalize", n3.autocapitalize || "none"), a3.setAttribute("autocomplete", n3.autocomplete || "off"), a3.setAttribute("autocorrect", n3.autocorrect || "off"), a3.setAttribute("autofocus", n3.autofocus || "true"), a3.setAttribute("inputmode", n3.inputmode || "verbatim"), a3.setAttribute("max", n3.max || ""), a3.setAttribute("maxlength", n3.maxlength || ""), a3.setAttribute("min", n3.min || ""), a3.setAttribute("minlength", n3.minlength || ""), a3.setAttribute("placeholder", n3.placeholder || ""), a3.setAttribute("spellcheck", n3.spellcheck || "default"), a3.setAttribute("step", n3.step || "any"), a3.setAttribute("type", n3.type || "text"), a3.value = n3.value || "", n3.allowed && (a3.oninput = function() {
                var M5 = void 0;
                if (Array.isArray(n3.allowed)) {
                  for (var w4 = "", _2 = n3.allowed, P7 = 0; P7 < _2.length; P7++)
                    _2[P7] === "an" ? w4 += "0-9a-zA-Z" : _2[P7] === "a" ? w4 += "a-zA-Z" : _2[P7] === "n" && (w4 += "0-9"), _2[P7] === "s" && (w4 += " ");
                  M5 = new RegExp("[^" + w4 + "]", "g");
                } else
                  T6(n3.allowed) === "object" && (M5 = n3.allowed);
                a3.value = a3.value.replace(M5, "");
              });
              var E3 = document.createElement("div");
              E3.classList.add(e3.classes.button), E3.classList.add(e3.classes.elementHalf), E3.classList.add(e3.classes.backgroundSuccess), E3.innerHTML = k4, E3.onclick = function() {
                O4(C5, f4), j5(), h3 ? h3(a3.value) : c3 && c3(a3.value);
              };
              var D7 = document.createElement("div");
              D7.classList.add(e3.classes.button), D7.classList.add(e3.classes.elementHalf), D7.classList.add(e3.classes.backgroundError), D7.innerHTML = S7, D7.onclick = function() {
                O4(C5, f4), j5(), p6 ? p6(a3.value) : s4 && s4(a3.value);
              }, r.appendChild(x5), r.appendChild(a3), r.appendChild(E3), r.appendChild(D7), r.listener = function(M5) {
                $4(M5) ? E3.click() : ee4(M5) && D7.click();
              }, K5(r, f4), a3.focus(), te2(r, f4);
            };
            u3.input = ve2;
            var Ee2 = u3.select = function(t2, c3) {
              var s4 = t2.text, d3 = t2.cancelText, i2 = d3 === void 0 ? "Cancel" : d3, k4 = t2.cancelCallback, H7 = t2.choices, S7 = t2.position, h3 = S7 === void 0 ? e3.positions.select || h3.top : S7;
              R6(), F8();
              var p6 = document.createElement("div"), l2 = W7();
              p6.id = l2;
              var f4 = document.createElement("div");
              f4.classList.add(e3.classes.textbox), f4.classList.add(e3.classes.backgroundInfo), f4.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + s4 + "</div>", p6.appendChild(f4), H7.forEach(function(r, C5) {
                var x5 = r.type, a3 = x5 === void 0 ? 1 : x5, E3 = r.text, D7 = r.handler, M5 = document.createElement("div");
                M5.classList.add(le4[a3]), M5.classList.add(e3.classes.button), M5.classList.add(e3.classes.selectChoice);
                var w4 = H7[C5 + 1];
                w4 && !w4.type && (w4.type = 1), w4 && w4.type === a3 && M5.classList.add(e3.classes.selectChoiceRepeated), M5.innerHTML = E3, M5.onclick = function() {
                  O4(l2, h3), j5(), D7();
                }, p6.appendChild(M5);
              });
              var n3 = document.createElement("div");
              n3.classList.add(e3.classes.backgroundNeutral), n3.classList.add(e3.classes.button), n3.innerHTML = i2, n3.onclick = function() {
                O4(l2, h3), j5(), k4 ? k4() : c3 && c3();
              }, p6.appendChild(n3), p6.listener = function(r) {
                ee4(r) && n3.click();
              }, K5(p6, h3), te2(p6, h3);
            }, Te = u3.date = function(t2, c3, s4) {
              var d3 = t2.value, i2 = d3 === void 0 ? /* @__PURE__ */ new Date() : d3, k4 = t2.submitText, H7 = k4 === void 0 ? "OK" : k4, S7 = t2.cancelText, h3 = S7 === void 0 ? "Cancel" : S7, p6 = t2.submitCallback, l2 = t2.cancelCallback, f4 = t2.position, n3 = f4 === void 0 ? e3.positions.date || n3.top : f4;
              R6(), F8();
              var r = "&#9662", C5 = document.createElement("div"), x5 = document.createElement("div"), a3 = document.createElement("div"), E3 = function(L6) {
                C5.innerHTML = e3.dateMonths[L6.getMonth()], x5.innerHTML = L6.getDate(), a3.innerHTML = L6.getFullYear();
              }, D7 = function(L6) {
                var N7 = new Date(i2.getFullYear(), i2.getMonth() + 1, 0).getDate(), Q6 = L6.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 2);
                Number(Q6) > N7 && (Q6 = N7.toString()), L6.target.textContent = Q6, Number(Q6) < 1 && (Q6 = "1"), i2.setDate(Number(Q6));
              }, M5 = function(L6) {
                var N7 = L6.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 4);
                L6.target.textContent = N7, i2.setFullYear(Number(N7));
              }, w4 = function(L6) {
                E3(i2);
              }, _2 = function(L6) {
                var N7 = new Date(i2.getFullYear(), i2.getMonth() + L6 + 1, 0).getDate();
                i2.getDate() > N7 && i2.setDate(N7), i2.setMonth(i2.getMonth() + L6), E3(i2);
              }, P7 = function(L6) {
                i2.setDate(i2.getDate() + L6), E3(i2);
              }, be = function(L6) {
                var N7 = i2.getFullYear() + L6;
                N7 < 0 ? i2.setFullYear(0) : i2.setFullYear(i2.getFullYear() + L6), E3(i2);
              }, Y6 = document.createElement("div"), de2 = W7();
              Y6.id = de2;
              var ue3 = document.createElement("div");
              ue3.classList.add(e3.classes.backgroundInfo);
              var I5 = document.createElement("div");
              I5.classList.add(e3.classes.dateSelectorInner);
              var Z5 = document.createElement("div");
              Z5.classList.add(e3.classes.button), Z5.classList.add(e3.classes.elementThird), Z5.classList.add(e3.classes.dateSelectorUp), Z5.innerHTML = r;
              var q6 = document.createElement("div");
              q6.classList.add(e3.classes.button), q6.classList.add(e3.classes.elementThird), q6.classList.add(e3.classes.dateSelectorUp), q6.innerHTML = r;
              var G7 = document.createElement("div");
              G7.classList.add(e3.classes.button), G7.classList.add(e3.classes.elementThird), G7.classList.add(e3.classes.dateSelectorUp), G7.innerHTML = r, C5.classList.add(e3.classes.element), C5.classList.add(e3.classes.elementThird), C5.innerHTML = e3.dateMonths[i2.getMonth()], x5.classList.add(e3.classes.element), x5.classList.add(e3.classes.elementThird), x5.setAttribute("contentEditable", !0), x5.addEventListener("input", D7), x5.addEventListener("blur", w4), x5.innerHTML = i2.getDate(), a3.classList.add(e3.classes.element), a3.classList.add(e3.classes.elementThird), a3.setAttribute("contentEditable", !0), a3.addEventListener("input", M5), a3.addEventListener("blur", w4), a3.innerHTML = i2.getFullYear();
              var ne4 = document.createElement("div");
              ne4.classList.add(e3.classes.button), ne4.classList.add(e3.classes.elementThird), ne4.innerHTML = r;
              var se3 = document.createElement("div");
              se3.classList.add(e3.classes.button), se3.classList.add(e3.classes.elementThird), se3.innerHTML = r;
              var ae5 = document.createElement("div");
              ae5.classList.add(e3.classes.button), ae5.classList.add(e3.classes.elementThird), ae5.innerHTML = r, Z5.onclick = function() {
                return _2(1);
              }, q6.onclick = function() {
                return P7(1);
              }, G7.onclick = function() {
                return be(1);
              }, ne4.onclick = function() {
                return _2(-1);
              }, se3.onclick = function() {
                return P7(-1);
              }, ae5.onclick = function() {
                return be(-1);
              };
              var z4 = document.createElement("div");
              z4.classList.add(e3.classes.button), z4.classList.add(e3.classes.elementHalf), z4.classList.add(e3.classes.backgroundSuccess), z4.innerHTML = H7, z4.onclick = function() {
                O4(de2, n3), j5(), p6 ? p6(i2) : c3 && c3(i2);
              };
              var U5 = document.createElement("div");
              U5.classList.add(e3.classes.button), U5.classList.add(e3.classes.elementHalf), U5.classList.add(e3.classes.backgroundError), U5.innerHTML = h3, U5.onclick = function() {
                O4(de2, n3), j5(), l2 ? l2(i2) : s4 && s4(i2);
              }, I5.appendChild(Z5), I5.appendChild(q6), I5.appendChild(G7), I5.appendChild(C5), I5.appendChild(x5), I5.appendChild(a3), I5.appendChild(ne4), I5.appendChild(se3), I5.appendChild(ae5), ue3.appendChild(I5), Y6.appendChild(ue3), Y6.appendChild(z4), Y6.appendChild(U5), Y6.listener = function(L6) {
                $4(L6) ? z4.click() : ee4(L6) && U5.click();
              }, K5(Y6, n3), te2(Y6, n3);
            };
            u3.default = { alert: he2, force: ke2, confirm: Ce3, input: ve2, select: Ee2, date: Te, setOptions: ge2, hideAlerts: F8 };
          }]);
        });
      }).call(o3, v2(0)(y3));
    }]);
  });
}), je = Ie(ye2()), { default: Le, ...Ne2 } = je, Fe = Le !== void 0 ? Le : Ne2;

// https://esm.sh/v106/nanostores@0.7.1/deno/nanostores.js
var S5 = Symbol("clean");
var c2 = Symbol();

// https://esm.sh/v106/@nanostores/i18n@0.7.1/deno/i18n.js
function g3(r, n3) {
  if (typeof r == "string")
    return n3(r);
  {
    let e3 = {};
    for (let t2 in r)
      e3[t2] = g3(r[t2], n3);
    return e3;
  }
}
function p4(r) {
  return (n3) => {
    if (n3.transform) {
      let e3 = n3.transform;
      return n3 = n3.input, { input: n3, transform(t2, o3, s4) {
        let f4 = r(t2, o3, ...s4);
        return (...l2) => e3(t2, f4, l2);
      } };
    } else
      return { input: n3, transform(e3, t2, o3) {
        return r(e3, t2, ...o3);
      } };
  };
}
var N5 = p4((r, n3, e3) => g3(n3, (t2) => {
  for (let o3 in e3)
    t2 = t2.replace(new RegExp(`{${o3}}`, "g"), e3[o3]);
  return t2;
})), R4 = p4((r, n3, e3) => {
  let t2 = new Intl.PluralRules(r).select(e3);
  return t2 in n3 || (t2 = "many"), g3(n3[t2], (o3) => o3.replace(/{count}/g, e3));
});

// https://esm.sh/v106/hotkeys-js@3.10.1/deno/hotkeys-js.js
var M3 = typeof navigator < "u" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : !1;
function P5(e3, t2, i2, r) {
  e3.addEventListener ? e3.addEventListener(t2, i2, r) : e3.attachEvent && e3.attachEvent("on".concat(t2), function() {
    i2(window.event);
  });
}
function T5(e3, t2) {
  for (var i2 = t2.slice(0, t2.length - 1), r = 0; r < i2.length; r++)
    i2[r] = e3[i2[r].toLowerCase()];
  return i2;
}
function U4(e3) {
  typeof e3 != "string" && (e3 = ""), e3 = e3.replace(/\s/g, "");
  for (var t2 = e3.split(","), i2 = t2.lastIndexOf(""); i2 >= 0; )
    t2[i2 - 1] += ",", t2.splice(i2, 1), i2 = t2.lastIndexOf("");
  return t2;
}
function G6(e3, t2) {
  for (var i2 = e3.length >= t2.length ? e3 : t2, r = e3.length >= t2.length ? t2 : e3, n3 = !0, a3 = 0; a3 < i2.length; a3++)
    r.indexOf(i2[a3]) === -1 && (n3 = !1);
  return n3;
}
var b3 = { backspace: 8, "\u232B": 8, tab: 9, clear: 12, enter: 13, "\u21A9": 13, return: 13, esc: 27, escape: 27, space: 32, left: 37, up: 38, right: 39, down: 40, del: 46, delete: 46, ins: 45, insert: 45, home: 36, end: 35, pageup: 33, pagedown: 34, capslock: 20, num_0: 96, num_1: 97, num_2: 98, num_3: 99, num_4: 100, num_5: 101, num_6: 102, num_7: 103, num_8: 104, num_9: 105, num_multiply: 106, num_add: 107, num_enter: 108, num_subtract: 109, num_decimal: 110, num_divide: 111, "\u21EA": 20, ",": 188, ".": 190, "/": 191, "`": 192, "-": M3 ? 173 : 189, "=": M3 ? 61 : 187, ";": M3 ? 59 : 186, "'": 222, "[": 219, "]": 221, "\\": 220 }, g4 = { "\u21E7": 16, shift: 16, "\u2325": 18, alt: 18, option: 18, "\u2303": 17, ctrl: 17, control: 17, "\u2318": 91, cmd: 91, command: 91 }, L4 = { 16: "shiftKey", 18: "altKey", 17: "ctrlKey", 91: "metaKey", shiftKey: 16, ctrlKey: 17, altKey: 18, metaKey: 91 }, u2 = { 16: !1, 18: !1, 17: !1, 91: !1 }, s3 = {};
for (O3 = 1; O3 < 20; O3++)
  b3["f".concat(O3)] = 111 + O3;
var O3, f3 = [], A4 = !1, D6 = "all", H6 = [], C4 = function(t2) {
  return b3[t2.toLowerCase()] || g4[t2.toLowerCase()] || t2.toUpperCase().charCodeAt(0);
}, R5 = function(t2) {
  return Object.keys(b3).find(function(i2) {
    return b3[i2] === t2;
  });
}, V5 = function(t2) {
  return Object.keys(g4).find(function(i2) {
    return g4[i2] === t2;
  });
};
function F7(e3) {
  D6 = e3 || "all";
}
function E2() {
  return D6 || "all";
}
function X5() {
  return f3.slice(0);
}
function $3() {
  return f3.map(function(e3) {
    return R5(e3) || V5(e3) || String.fromCharCode(e3);
  });
}
function q5(e3) {
  var t2 = e3.target || e3.srcElement, i2 = t2.tagName, r = !0;
  return (t2.isContentEditable || (i2 === "INPUT" || i2 === "TEXTAREA" || i2 === "SELECT") && !t2.readOnly) && (r = !1), r;
}
function z3(e3) {
  return typeof e3 == "string" && (e3 = C4(e3)), f3.indexOf(e3) !== -1;
}
function J3(e3, t2) {
  var i2, r;
  e3 || (e3 = E2());
  for (var n3 in s3)
    if (Object.prototype.hasOwnProperty.call(s3, n3))
      for (i2 = s3[n3], r = 0; r < i2.length; )
        i2[r].scope === e3 ? i2.splice(r, 1) : r++;
  E2() === e3 && F7(t2 || "all");
}
function N6(e3) {
  var t2 = e3.keyCode || e3.which || e3.charCode, i2 = f3.indexOf(t2);
  if (i2 >= 0 && f3.splice(i2, 1), e3.key && e3.key.toLowerCase() === "meta" && f3.splice(0, f3.length), (t2 === 93 || t2 === 224) && (t2 = 91), t2 in u2) {
    u2[t2] = !1;
    for (var r in g4)
      g4[r] === t2 && (v[r] = !1);
  }
}
function Q5(e3) {
  if (typeof e3 > "u")
    Object.keys(s3).forEach(function(o3) {
      return delete s3[o3];
    });
  else if (Array.isArray(e3))
    e3.forEach(function(o3) {
      o3.key && S6(o3);
    });
  else if (typeof e3 == "object")
    e3.key && S6(e3);
  else if (typeof e3 == "string") {
    for (var t2 = arguments.length, i2 = new Array(t2 > 1 ? t2 - 1 : 0), r = 1; r < t2; r++)
      i2[r - 1] = arguments[r];
    var n3 = i2[0], a3 = i2[1];
    typeof n3 == "function" && (a3 = n3, n3 = ""), S6({ key: e3, scope: n3, method: a3, splitKey: "+" });
  }
}
var S6 = function(t2) {
  var i2 = t2.key, r = t2.scope, n3 = t2.method, a3 = t2.splitKey, o3 = a3 === void 0 ? "+" : a3, l2 = U4(i2);
  l2.forEach(function(c3) {
    var p6 = c3.split(o3), m4 = p6.length, y3 = p6[m4 - 1], d3 = y3 === "*" ? "*" : C4(y3);
    if (s3[d3]) {
      r || (r = E2());
      var K5 = m4 > 1 ? T5(g4, p6) : [];
      s3[d3] = s3[d3].filter(function(h3) {
        var w4 = n3 ? h3.method === n3 : !0;
        return !(w4 && h3.scope === r && G6(h3.mods, K5));
      });
    }
  });
};
function _(e3, t2, i2, r) {
  if (t2.element === r) {
    var n3;
    if (t2.scope === i2 || t2.scope === "all") {
      n3 = t2.mods.length > 0;
      for (var a3 in u2)
        Object.prototype.hasOwnProperty.call(u2, a3) && (!u2[a3] && t2.mods.indexOf(+a3) > -1 || u2[a3] && t2.mods.indexOf(+a3) === -1) && (n3 = !1);
      (t2.mods.length === 0 && !u2[16] && !u2[18] && !u2[17] && !u2[91] || n3 || t2.shortcut === "*") && t2.method(e3, t2) === !1 && (e3.preventDefault ? e3.preventDefault() : e3.returnValue = !1, e3.stopPropagation && e3.stopPropagation(), e3.cancelBubble && (e3.cancelBubble = !0));
    }
  }
}
function k3(e3, t2) {
  var i2 = s3["*"], r = e3.keyCode || e3.which || e3.charCode;
  if (v.filter.call(this, e3)) {
    if ((r === 93 || r === 224) && (r = 91), f3.indexOf(r) === -1 && r !== 229 && f3.push(r), ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach(function(h3) {
      var w4 = L4[h3];
      e3[h3] && f3.indexOf(w4) === -1 ? f3.push(w4) : !e3[h3] && f3.indexOf(w4) > -1 ? f3.splice(f3.indexOf(w4), 1) : h3 === "metaKey" && e3[h3] && f3.length === 3 && (e3.ctrlKey || e3.shiftKey || e3.altKey || (f3 = f3.slice(f3.indexOf(w4))));
    }), r in u2) {
      u2[r] = !0;
      for (var n3 in g4)
        g4[n3] === r && (v[n3] = !0);
      if (!i2)
        return;
    }
    for (var a3 in u2)
      Object.prototype.hasOwnProperty.call(u2, a3) && (u2[a3] = e3[L4[a3]]);
    e3.getModifierState && !(e3.altKey && !e3.ctrlKey) && e3.getModifierState("AltGraph") && (f3.indexOf(17) === -1 && f3.push(17), f3.indexOf(18) === -1 && f3.push(18), u2[17] = !0, u2[18] = !0);
    var o3 = E2();
    if (i2)
      for (var l2 = 0; l2 < i2.length; l2++)
        i2[l2].scope === o3 && (e3.type === "keydown" && i2[l2].keydown || e3.type === "keyup" && i2[l2].keyup) && _(e3, i2[l2], o3, t2);
    if (r in s3) {
      for (var c3 = 0; c3 < s3[r].length; c3++)
        if ((e3.type === "keydown" && s3[r][c3].keydown || e3.type === "keyup" && s3[r][c3].keyup) && s3[r][c3].key) {
          for (var p6 = s3[r][c3], m4 = p6.splitKey, y3 = p6.key.split(m4), d3 = [], K5 = 0; K5 < y3.length; K5++)
            d3.push(C4(y3[K5]));
          d3.sort().join("") === f3.sort().join("") && _(e3, p6, o3, t2);
        }
    }
  }
}
function W6(e3) {
  return H6.indexOf(e3) > -1;
}
function v(e3, t2, i2) {
  f3 = [];
  var r = U4(e3), n3 = [], a3 = "all", o3 = document, l2 = 0, c3 = !1, p6 = !0, m4 = "+", y3 = !1;
  for (i2 === void 0 && typeof t2 == "function" && (i2 = t2), Object.prototype.toString.call(t2) === "[object Object]" && (t2.scope && (a3 = t2.scope), t2.element && (o3 = t2.element), t2.keyup && (c3 = t2.keyup), t2.keydown !== void 0 && (p6 = t2.keydown), t2.capture !== void 0 && (y3 = t2.capture), typeof t2.splitKey == "string" && (m4 = t2.splitKey)), typeof t2 == "string" && (a3 = t2); l2 < r.length; l2++)
    e3 = r[l2].split(m4), n3 = [], e3.length > 1 && (n3 = T5(g4, e3)), e3 = e3[e3.length - 1], e3 = e3 === "*" ? "*" : C4(e3), e3 in s3 || (s3[e3] = []), s3[e3].push({ keyup: c3, keydown: p6, scope: a3, mods: n3, shortcut: r[l2], method: i2, key: r[l2], splitKey: m4, element: o3 });
  typeof o3 < "u" && !W6(o3) && window && (H6.push(o3), P5(o3, "keydown", function(d3) {
    k3(d3, o3);
  }, y3), A4 || (A4 = !0, P5(window, "focus", function() {
    f3 = [];
  }, y3)), P5(o3, "keyup", function(d3) {
    k3(d3, o3), N6(d3);
  }, y3));
}
function Y5(e3) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
  Object.keys(s3).forEach(function(i2) {
    var r = s3[i2].filter(function(n3) {
      return n3.scope === t2 && n3.shortcut === e3;
    });
    r.forEach(function(n3) {
      n3 && n3.method && n3.method();
    });
  });
}
var j3 = { getPressedKeyString: $3, setScope: F7, getScope: E2, deleteScope: J3, getPressedKeyCodes: X5, isPressed: z3, filter: q5, trigger: Y5, unbind: Q5, keyMap: b3, modifier: g4, modifierMap: L4 };
for (x4 in j3)
  Object.prototype.hasOwnProperty.call(j3, x4) && (v[x4] = j3[x4]);
var x4;
typeof document < "u" && (B6 = window.hotkeys, v.noConflict = function(e3) {
  return e3 && window.hotkeys === v && (window.hotkeys = B6), v;
}, window.hotkeys = v);
var B6;

// deps.ts
var toast = Fe.alert;

// locales/zh-CN.json
var zh_CN_default = {
  lineBreakMaxTextCount: "\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF",
  "translate-pdf": "\u70B9\u51FB\u7FFB\u8BD1 PDF",
  "translate-firefox-local-pdf": "\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",
  enableLineBreak: "\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",
  sponsorLabel: "$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",
  help: "\u5E2E\u52A9",
  browserShortcutsNoteForFirefox: "Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",
  browserShortcutsNoteForChrome: "\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",
  browserShortcutsSucks: "\u4FEE\u6539\u5FEB\u6377\u952E\u8BF7\u624B\u52A8\u8F93\u5165\uFF0C\u683C\u5F0F\u4E3A\uFF1A",
  enableLineBreakDescription: "\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB",
  "browser.brandName": "\u6C89\u6D78\u5F0F\u7FFB\u8BD1",
  "browser.brandDescription": "\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u817E\u8BAF/\u706B\u5C71\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002",
  "browser.toggleTranslatePage": "\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",
  "browser.toggleTranslateTheWholePage": "\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587",
  "browser.toggleTranslateToThePageEndImmediately": "\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587",
  "browser.toggleTranslateTheMainPage": "\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587",
  "browser.openOptionsPage": "\u6253\u5F00\u8BBE\u7F6E\u9875",
  "browser.toggleTranslationMask": "\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",
  "browser.translateLocalPdfFile": "\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6",
  confirmResetConfig: "\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",
  translationLineBreakSettingTitle: "\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",
  smartLineBreak: "\u667A\u80FD\u6362\u884C",
  alwaysLineBreak: "\u603B\u662F\u6362\u884C",
  toggleBeta: "\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",
  betaDescription: "\u5F00\u542F\u540E\u4F1A\u542F\u7528\u4E00\u4E9B\u5B9E\u9A8C\u6027\u529F\u80FD\uFF0C\u4EE5\u53CA\u8FD8\u5728\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1, \u53EF\u4EE5<1>\u52A0Telegram \u7FA4\u7EC4</1>\u4E86\u89E3",
  translationLineBreakSettingDescription: "\u5BF9\u4E8E\u8BD1\u6587\u7684\u4F4D\u7F6E\uFF1A\u603B\u662F\u6362\u884C(\u66F4\u6574\u9F50)/\u667A\u80FD\u6362\u884C\uFF08\u5F53\u6BB5\u843D\u591A\u4E8E{count}\u4E2A\u5B57\u7B26\u624D\u6362\u884C\u663E\u793A\u8BD1\u6587\uFF0C\u66F4\u7701\u7A7A\u95F4\uFF09",
  tempTranslateDomainTitle: "\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",
  tempTranslateDomainDescription: "\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1",
  xMinutes: "{count} \u5206\u949F",
  disabled: "\u7981\u7528",
  changelog: "\u66F4\u65B0\u65E5\u5FD7",
  toggleTranslatePageWhenThreeFingersOnTheScreen: "\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",
  toggleTranslationMaskWhenThreeFingersOnTheScreen: "\u591A\u6307\u540C\u65F6\u89E6\u6478\u5219\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",
  addUrlDescription: "\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",
  general: "\u57FA\u672C\u8BBE\u7F6E",
  clickToExpandConfig: "\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",
  import: "\u4ECE\u6587\u4EF6\u5BFC\u5165",
  export: "\u5BFC\u51FA\u5230\u6587\u4EF6",
  toggleDebug: "\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7",
  "fingers.0": "\u5173\u95ED",
  "fingers.2": "\u53CC\u6307\u89E6\u6478",
  "fingers.3": "\u4E09\u6307\u89E6\u6478",
  "fingers.4": "\u56DB\u6307\u89E6\u6478",
  "fingers.5": "\u4E94\u6307\u89E6\u6478",
  document: "\u6587\u6863",
  resetSuccess: "\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",
  saved: "\u4FDD\u5B58\u6210\u529F",
  successImportConfig: "\u6210\u529F\u5BFC\u5165\u914D\u7F6E",
  goAdvancedSettings: "\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",
  goAdvancedInterfaceSettings: "\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",
  advanced: "\u8FDB\u9636\u8BBE\u7F6E",
  advancedDescription: "\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",
  developer: "\u5F00\u53D1\u8005\u8BBE\u7F6E",
  donateCafe: "\u8BF7\u5F00\u53D1\u8005\u559D\u676F\u5496\u5561",
  "translate to the bottom of the page": "\u6253\u5F00\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",
  feedback: "\u95EE\u9898\u53CD\u9988",
  toggleTranslatePage: "\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",
  translateToThePageEndImmediatelyDescription: "\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u7ACB\u5373\u7FFB\u8BD1\u7F51\u9875\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09",
  "translate all areas of the page": "\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",
  translationAreaDescription: "\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\u53BB\u7FFB\u8BD1\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09",
  "the number of characters to be translated first": "\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF1F",
  "interface language": "\u754C\u9762\u8BED\u8A00",
  "display both the original text and the translation": "\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587",
  "keyboard shortcuts": "\u952E\u76D8\u5FEB\u6377\u952E",
  modify: "\u4FEE\u6539\u5FEB\u6377\u952E",
  reset: "\u91CD\u7F6E",
  close: "\u5173\u95ED",
  homepage: "\u4E3B\u9875",
  more: "\u66F4\u591A",
  translateTheWholePage: "\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",
  changeToTranslateTheWholePage: "\u5207\u6362\u4E3A\u7FFB\u8BD1\u6240\u6709\u533A\u57DF",
  changeToTranslateTheMainPage: "\u5207\u6362\u4E3A\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",
  translateToThePageEndImmediately: "\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8",
  translateTheMainPage: "\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",
  "The local rules are up to date": "\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:",
  "Successfully synchronized with the latest official rules:": "\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:",
  "Checking for updates": "\u6B63\u5728\u68C0\u67E5\u66F4\u65B0",
  "Rules are being synchronized": "\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",
  localVersionIsTooOld: "\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u4E4B\u540E\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",
  badUserscriptBrowser: "\u8BE5\u6D4F\u89C8\u5668\u672A\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u7684\u63A5\u53E3\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334</1>\u7684\u6D4F\u89C8\u5668\u5982(Firefox Nightly \u7248\u672C)",
  foundNewVersion: "\u53D1\u73B0\u65B0\u7248\u672C",
  theLocalExtensionIsUpToUpdate: "\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",
  failToSyncRules: "\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",
  retry: "\u70B9\u6B64\u91CD\u8BD5",
  failedReason: "\u5931\u8D25\u539F\u56E0",
  currentRuleVersion: "\u5F53\u524D\u89C4\u5219\u7248\u672C",
  calculating: "\u8BA1\u7B97\u4E2D",
  unknownError: "\u672A\u77E5\u9519\u8BEF",
  canNotFetchRemoteRule: "\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",
  enableAlphaSuccess: "\u5DF2\u5F00\u542FAlpha\u529F\u80FD",
  disableAlphaSuccess: "\u5DF2\u5173\u95EDAlpha\u529F\u80FD",
  cacheSize: "\u7F13\u5B58\u5927\u5C0F\uFF1A",
  cleaning: "\u6E05\u7406\u4E2D",
  cleanCache: "\u6E05\u9664\u7F13\u5B58",
  options: "\u8BBE\u7F6E",
  about: "\u5173\u4E8E",
  service: "\u7FFB\u8BD1\u670D\u52A1",
  needAction: "(\u53BB\u8BBE\u7F6E)",
  goSettings: "\u53BB\u8BBE\u7F6E",
  needActionForOptions: "(\u9700\u8BBE\u7F6E)",
  translationEngine: "\u5F15\u64CE\u9009\u9879",
  sourceLanguage: "\u539F\u6587\u8BED\u8A00",
  target: "\u76EE\u6807\u8BED\u8A00",
  popupSourceLanguage: "\u539F\u6587\u8BED\u8A00",
  popupTarget: "\u76EE\u6807\u8BED\u8A00",
  popupService: "\u7FFB\u8BD1\u670D\u52A1",
  forThisSite: "\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",
  alwaysTranslateSomeLanguage: "\u603B\u662F\u7FFB\u8BD1{language}",
  neverTranslateSomeLanguage: "\u6C38\u4E0D\u7FFB\u8BD1{language}",
  alwaysTranslateSomeSite: "\u603B\u662F\u7FFB\u8BD1 {hostname}",
  neverTranslateSomeSite: "\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",
  add: "\u6DFB\u52A0",
  default: "\u9ED8\u8BA4",
  forThisLanguage: "\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A",
  "add url": "\u8F93\u5165URL",
  edit: "\u7F16\u8F91",
  "translate other languages into specific language": "\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00",
  "select translation service": "\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",
  language: "\u8BED\u8A00",
  "show-original": "\u663E\u793A\u539F\u6587",
  translate: "\u7FFB\u8BD1",
  Translated: "\u5DF2\u7FFB\u8BD1",
  Translating: "\u7FFB\u8BD1\u4E2D",
  Error: "\u9519\u8BEF",
  allowCacheTranslations: "\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09",
  "translation display": "\u8BD1\u6587\u663E\u793A\u6837\u5F0F",
  "select diplay style": "\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",
  interface: "\u754C\u9762\u8BBE\u7F6E",
  import_export: "\u5BFC\u5165/\u5BFC\u51FA",
  import_export_title: "\u5BFC\u5165/\u5BFC\u51FA\u914D\u7F6E",
  syncToGoogleDrive: "\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65",
  "translationTheme.none": "\u65E0",
  "translationTheme.dashed": "\u865A\u7EBF\u4E0B\u5212\u7EBF",
  "translationTheme.dotted": "\u70B9\u72B6\u4E0B\u5212\u7EBF",
  "translationTheme.dashedBorder": "\u865A\u7EBF\u8FB9\u6846",
  "translationTheme.underline": "\u76F4\u7EBF\u4E0B\u5212\u7EBF",
  "translationTheme.mask": "\u6A21\u7CCA\u6548\u679C",
  "translationTheme.paper": "\u767D\u7EB8\u9634\u5F71\u6548\u679C",
  "translationTheme.dividingLine": "\u5206\u5272\u7EBF",
  "translationTheme.highlight": "\u9AD8\u4EAE",
  "translationTheme.marker": "\u9A6C\u514B\u7B14",
  "translationTheme.blockquote": "\u5F15\u7528\u6837\u5F0F",
  "translationTheme.weakening": "\u5F31\u5316",
  "translationTheme.italic": "\u659C\u4F53",
  "translationTheme.bold": "\u52A0\u7C97",
  "translationTheme.thinDashed": "\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF",
  "translationTheme.nativeDashed": "\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF",
  "translationTheme.nativeDotted": "\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF",
  "translationTheme.nativeUnderline": "\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF",
  "translationTheme.wavy": "\u6CE2\u6D6A\u7EBF",
  "translationServices.tencent": "\u817E\u8BAF\u7FFB\u8BD1\u541B",
  "translationServices.google": "\u8C37\u6B4C\u7FFB\u8BD1",
  "translationServices.bai": "\u767E\u5EA6(Alpha)",
  "translationServices.baidu": "\u767E\u5EA6\u7FFB\u8BD1",
  "translationServices.aliyun": "\u963F\u91CC\u4E91\u7FFB\u8BD1",
  "translationServices.volc": "\u706B\u5C71\u7FFB\u8BD1",
  "translationServices.deeplx": "DeeplX(Beta)",
  "translationServices.bing": "\u5FC5\u5E94\u7FFB\u8BD1",
  "translationServices.deepl": "Deepl",
  "translationServices.wechat": "\u5FAE\u4FE1\u7FFB\u8BD1",
  "translationServices.azure": "\u5FAE\u8F6F\u7FFB\u8BD1",
  "translationServices.ibm": "IBM Watson",
  "translationServices.aws": "\u4E9A\u9A6C\u900A\u7FFB\u8BD1",
  "translationServices.mock": "\u6A21\u62DF\u7FFB\u8BD1",
  "translationServices.mock2": "\u6A21\u62DF\u7FFB\u8BD12",
  "translationServices.caiyun": "\u5F69\u4E91\u5C0F\u8BD1",
  "translationServices.volcAlpha": "\u706B\u5C71 (Alpha)",
  "translationServices.openl": "OpenL",
  "translationServices.youdao": "\u6709\u9053\u7FFB\u8BD1",
  "translationServices.transmart": "\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1",
  "translationServices.niu": "\u5C0F\u725B\u7FFB\u8BD1",
  "translationServices.d": "D (Alpha)",
  "translationServices.dpro": "D Pro (Canary)",
  "translate title": "\u7FFB\u8BD1\u9875\u9762\u6807\u9898",
  "always languages": "\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",
  neverTranslateLanguagesLabel: "\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",
  neverTranslateTheFollowingLanguagesDescription: "\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u7FFB\u8BD1\u8BE5\u6BB5\u843D",
  enableUserscriptPagePopup: "\u603B\u662F\u5728\u9875\u9762\u4E0A\u5C55\u793A Popup \u6D6E\u7A97",
  enableUserscriptPagePopupDescription: "\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875",
  "always translate the following languages": "\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00",
  "always sites": "\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740",
  "always translate the following sites": "\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00",
  "never sites": "\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740",
  "never translate the following sites": "\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1",
  "please refer to": "\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",
  KeyAndConfigurationTutorial: "\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",
  useAboveStyleForTheseSites: "\u5F53\u524D\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\u4E3A\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u8BA9\u67D0\u4E9B\u7F51\u7AD9\u4F7F\u7528\u8BE5\u6837\u5F0F\uFF0C\u70B9\u51FB\u53F3\u8FB9\u7684\u6309\u94AE\u6DFB\u52A0\u540E\uFF0C\u518D\u5207\u6362\u5230\u53E6\u4E00\u79CD\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\uFF0C\u8FD9\u6837\u5373\u53EF\u5B9E\u73B0\u4E0D\u540C\u7F51\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8BD1\u6587\u6837\u5F0F\u3002",
  currentUrl: "\u5F53\u524D\u7F51\u5740",
  confirm: "\u4FDD\u5B58",
  cancel: "\u53D6\u6D88",
  delete: "\u5220\u9664",
  "languages.auto": "\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00",
  syncToCloud: "\u540C\u6B65\u5230\u4E91\u7AEF",
  syncToCloudDescription: "\u5F00\u542F\u540E\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668/\u6CB9\u7334\u811A\u672C\u4E4B\u95F4\u540C\u6B65\u914D\u7F6E,\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",
  authFail: "\u6388\u6743\u5931\u8D25",
  syncTitle: "\u624B\u52A8\u5907\u4EFD\u7BA1\u7406",
  import_hint: "\u5BFC\u5165",
  upload: "\u4E0A\u4F20",
  revokeAuth: "\u64A4\u9500\u6388\u6743",
  uploadFail: "\u4E0A\u4F20\u5931\u8D25",
  download: "\u4E0B\u8F7D",
  importSuccess: "\u5BFC\u5165\u6210\u529F",
  importFail: "\u5BFC\u5165\u5931\u8D25",
  deleteFail: "\u5220\u9664\u5931\u8D25",
  isShowContextMenu: "\u521B\u5EFA\u53F3\u952E\u83DC\u5355",
  backupToCloud: "\u624B\u52A8\u7BA1\u7406\u5907\u4EFD\u6587\u4EF6",
  create_new_backup: "\u65B0\u589E\u5907\u4EFD\u8282\u70B9",
  maxBackupFiles: "\u6700\u591A\u53EF\u4EE5\u5907\u4EFD{count}\u4E2A\u4E0D\u540C\u7684\u8282\u70B9, \u8BF7\u5220\u9664\u4E0D\u9700\u8981\u7684\u8282\u70B9",
  backupToCloudDescription: "\u624B\u52A8\u4E0A\u4F20\u6216\u6062\u590D\u5907\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8BB83\u4E2A\u4E0D\u540C\u7684\u5907\u4EFD",
  successSyncConfig: "\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",
  syncFail: "\u540C\u6B65\u5931\u8D25",
  updatedAt: "\u66F4\u65B0\u4E8E {date}",
  lastSyncedAt: "\u4E0A\u6B21\u68C0\u67E5\u4E8E {date}",
  downloadFail: "\u4E0B\u8F7D\u5931\u8D25",
  clickToDownload: "\u70B9\u51FB\u4E0B\u8F7D",
  aboutLabel: "\u5173\u4E8E - \u53CD\u9988 - \u8D5E\u52A9",
  "browser.openAboutPage": "\u5173\u4E8E/\u53CD\u9988/\u8D5E\u52A9",
  aboutIntro: "\u8BE5\u6269\u5C55\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F <br/><br/>\u611F\u8C22\u8FD9\u4E9B<1>\u8D5E\u52A9\u8005\u4EEC</1>, \u7531\u4E8E\u4ED6/\u5979\u4EEC\u7684\u652F\u6301\uFF0C\u66F4\u591A\u7684\u4EBA\u53EF\u4EE5\u5B8C\u5168\u514D\u8D39\u5730\u4F7F\u7528\u8FD9\u4E2A\u5DE5\u5177\u3002\u5982\u679C\u6709\u4F59\u529B\uFF0C\u4F60\u53EF\u4EE5<2>\u70B9\u51FB\u8FD9\u91CC\u8D5E\u52A9</2> \u6211\u7684\u5DE5\u4F5C\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u5173\u6CE8\u6211\u7684<3>\u63A8\u7279</3>\u548C<4>Telegram \u9891\u9053</4>\u83B7\u53D6\u6700\u65B0\u66F4\u65B0\u3002",
  projectHomepage: "\u9879\u76EE\u4E3B\u9875",
  joinTelegramGroup: "\u52A0\u5165 Telegram \u7FA4\u53C2\u4E0E\u529F\u80FD\u8BA8\u8BBA",
  feedbackAndJoin: "\u95EE\u9898\u53CD\u9988/\u52A0\u7FA4",
  autoSync: "\u81EA\u52A8\u5B9A\u65F6\u540C\u6B65",
  loadingThemeTitle: "Loading \u6837\u5F0F",
  loadingThemeDescription: "\u8BBE\u7F6E\u7B49\u5F85\u8BD1\u6587\u52A0\u8F7D\u65F6\u7684\u6837\u5F0F",
  "loadingTheme.spinner": "\u8F6C\u5708\u52A8\u753B Spinner",
  "loadingTheme.text": "\u9759\u6001\u6587\u5B57 ... ",
  "loadingTheme.none": "\u4E0D\u663E\u793A",
  developerDescription: "\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863",
  successSyncButNoChange: "\u5F53\u524D\u914D\u7F6E\u4E0E\u4E91\u7AEF\u4E00\u81F4"
};

// locales/zh-TW.json
var zh_TW_default = {
  lineBreakMaxTextCount: "\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u7B26\u6578\u91CF",
  "translate-pdf": "\u9EDE\u64CA\u7FFB\u8B6FPDF",
  "translate-firefox-local-pdf": "\u9EDE\u64CA\u4E0A\u50B3PDF",
  enableLineBreak: "\u662F\u5426\u958B\u5553\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",
  sponsorLabel: "$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",
  help: "\u5E6B\u52A9",
  browserShortcutsNoteForFirefox: "Firefox\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u6377\u9375\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762`about:addons`\uFF0C\u7136\u5F8C\u9EDE\u64CA\u300C\u8A2D\u7F6E\u300D\uFF0C\u518D\u9EDE\u64CA\u300C\u7BA1\u7406\u5FEB\u6377\u9375\u300D\u5373\u53EF\u8A2D\u7F6E",
  browserShortcutsNoteForChrome: "\u985EChrome\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u7D50\u75C2\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u2019\u7BA1\u7406\u5FEB\u6377\u9375\u2018\u9762\u677F\uFF08\u2019chrome://extensions/shortcuts\u2018\uFF09\u8A2D\u7F6E\uFF0C\u9EDE\u64CA\u4E0B\u65B9\u6309\u9215\u8DF3\u8F49\u5230\u5FEB\u6377\u9375\u7BA1\u7406\u9801\u9762\u3002",
  browserShortcutsSucks: "\u4FEE\u6539\u5FEB\u6377\u9375\u8ACB\u624B\u52D5\u8F38\u5165\uFF0C\u683C\u5F0F\u7232\uFF1A",
  enableLineBreakDescription: "\u958B\u5553\u5F8C\uFF0C\u8B1B\u6703\u5728\u9577\u77ED\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u7B26\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80",
  "browser.brandName": "\u6C89\u6D78\u5F0F\u7FFB\u8B6F",
  "browser.brandDescription": "\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002",
  "browser.toggleTranslatePage": "\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",
  "browser.toggleTranslateTheWholePage": "\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587",
  "browser.toggleTranslateToThePageEndImmediately": "\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587",
  "browser.toggleTranslateTheMainPage": "\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587",
  "browser.openOptionsPage": "\u6253\u958B\u8A2D\u7F6E\u9801",
  "browser.toggleTranslationMask": "\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",
  "browser.translateLocalPdfFile": "\u7FFB\u8B6F\u672C\u5730 PDF \u6587\u4EF6",
  confirmResetConfig: "\u4F60\u78BA\u5B9A\u8981\u91CD\u8F09\u8A2D\u7F6E\u55CE?",
  translationLineBreakSettingTitle: "\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",
  smartLineBreak: "\u667A\u80FD\u6362\u884C",
  alwaysLineBreak: "\u603B\u662F\u6362\u884C",
  toggleBeta: "\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",
  betaDescription: "\u5F00\u542F\u540E\u4F1A\u542F\u7528\u4E00\u4E9B\u5B9E\u9A8C\u6027\u529F\u80FD\uFF0C\u4EE5\u53CA\u8FD8\u5728\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1, \u53EF\u4EE5<1>\u52A0Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u5185\u6D4B\u7684\u7279\u6027\u3002",
  translationLineBreakSettingDescription: "\u5BF9\u4E8E\u8BD1\u6587\u7684\u4F4D\u7F6E\uFF1A\u603B\u662F\u6362\u884C/\u667A\u80FD\u6362\u884C\uFF08\u5F53\u6BB5\u843D\u591A\u4E8E{count}\u4E2A\u5B57\u7B26\u624D\u6362\u884C\u663E\u793A\u8BD1\u6587\uFF09",
  tempTranslateDomainTitle: "\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",
  tempTranslateDomainDescription: "\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1",
  xMinutes: "{count} \u5206\u949F",
  disabled: "\u505C\u7528",
  changelog: "\u66F4\u65B0\u65E5\u8A8C",
  toggleTranslatePageWhenThreeFingersOnTheScreen: "\u4E09\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",
  addUrlDescription: "\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",
  general: "\u57FA\u672C\u8A2D\u7F6E",
  clickToExpandConfig: "\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",
  import: "\u4ECE\u6587\u4EF6\u5BFC\u5165\u914D\u7F6E",
  export: "\u5BFC\u51FA\u5230\u6587\u4EF6",
  toggleDebug: "\u5728\u63A7\u5236\u6AAF\u6253\u5370\u8ABF\u8A66\u65E5\u8A8C",
  "fingers.0": "\u5173\u95ED",
  "fingers.2": "\u53CC\u6307\u89E6\u6478",
  "fingers.3": "\u4E09\u6307\u89E6\u6478",
  "fingers.4": "\u56DB\u6307\u89E6\u6478",
  "fingers.5": "\u4E94\u6307\u89E6\u6478",
  document: "\u6587\u6A94",
  resetSuccess: "\u885D\u7F6E\u6240\u6709\u8A2D\u7F6E\u6210\u529F",
  saved: "\u6210\u529F\u5132\u5B58",
  successImportConfig: "\u6210\u529F\u532F\u5165\u8A2D\u5B9A",
  goAdvancedSettings: "\u53BB\u9032\u968E\u8A2D\u7F6E\u9801",
  goAdvancedInterfaceSettings: "\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",
  advanced: "\u9032\u968E\u8A2D\u7F6E",
  advancedDescription: "\u4E00\u4E9B\u96E3\u4EE5\u7406\u89E3\u7684\u8A2D\u7F6E\u9805\uFF08\u4E00\u822C\u7121\u9700\u8A2D\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8A8D\u5373\u53EF\uFF09",
  developer: "\u958B\u767C\u8005\u8A2D\u7F6E",
  donateCafe: "\u8ACB\u958B\u767C\u8005\u559D\u676F\u5496\u5561",
  "translate to the bottom of the page": "\u6253\u958B\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",
  feedback: "\u554F\u984C\u53CD\u994B",
  toggleTranslatePage: "\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",
  translateToThePageEndImmediatelyDescription: "\u958B\u5553\u5F8C\uFF0C\u5C07\u6703\u7ACB\u5373\u7FFB\u8B6F\u7DB2\u9801\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\uFF0C\u800C\u4E0D\u662F\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09",
  "translate all areas of the page": "\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",
  translationAreaDescription: "\u958B\u5553\u5F8C\uFF0C\u6574\u500B\u7DB2\u9801\u7684\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\uFF0C\u800C\u4E0D\u662F\u9ED8\u8A8D\u7684\u667A\u80FD\u8B58\u5225\u4E3B\u8981\u5340\u57DF\u53BB\u7FFB\u8B6F\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09",
  "the number of characters to be translated first": "\u524D\u591A\u5C11\u500B\u5B57\u7B26\u7121\u9700\u7B49\u5F85\u6EFE\u52D5\u5230\u53EF\u8996\u5340\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8B6F\uFF1F",
  "interface language": "\u754C\u9762\u8A9E\u8A00",
  "display both the original text and the translation": "\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587",
  "keyboard shortcuts": "\u9375\u76E4\u5FEB\u6377\u9375",
  modify: "\u4FEE\u6539\u5FEB\u6377\u9375",
  reset: "\u91CD\u8A2D",
  close: "\u95DC\u9589",
  homepage: "\u4E3B\u9801",
  more: "\u66F4\u591A",
  translateTheWholePage: "\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",
  changeToTranslateTheWholePage: "\u5207\u6362\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF",
  changeToTranslateTheMainPage: "\u5207\u6362\u4E3A\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",
  translateToThePageEndImmediately: "\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",
  translateTheMainPage: "\u667A\u80FD\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF",
  "The local rules are up to date": "\u672C\u5730\u9069\u914D\u898F\u5247\u5DF2\u662F\u6700\u65B0\uFF1A",
  "Successfully synchronized with the latest official rules:": "\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9069\u914D\u898F\u5247\uFF1A",
  "Checking for updates": "\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0",
  "Rules are being synchronized": "\u6B63\u5728\u540C\u6B65\u9069\u914D\u898F\u5247",
  localVersionIsTooOld: "\u672C\u5730\u64F4\u5C55\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u64F4\u5C55\u5230{minVersion} \u6216\u4E4B\u5F8C\u7684\u7248\u672C\u5F8C\u518D\u5617\u8A66\u540C\u6B65",
  badUserscriptBrowser: "\u8BE5\u6D4F\u89C8\u5668\u672A\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u7684\u63A5\u53E3\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334</1>\u7684\u6D4F\u89C8\u5668\u5982(Firefox Nightly \u7248\u672C)",
  foundNewVersion: "\u767C\u73FE\u65B0\u7248\u672C",
  theLocalExtensionIsUpToUpdate: "\u7576\u524D\u64F4\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C",
  failToSyncRules: "\u540C\u6B65\u6700\u65B0\u9069\u914D\u898F\u5247\u5931\u6557",
  retry: "\u9EDE\u6B64\u885D\u8A66",
  failedReason: "\u5931\u6557\u539F\u56E0",
  currentRuleVersion: "\u7576\u524D\u898F\u5247\u7248\u672C",
  calculating: "\u8A08\u7B97\u4E2D",
  unknownError: "\u672A\u77E5\u932F\u8AA4",
  canNotFetchRemoteRule: "\u7121\u6CD5\u7372\u53D6\u9060\u7A0B\u898F\u5247",
  enableAlphaSuccess: "\u5DF2\u958B\u5553Alpha\u529F\u80FD",
  disableAlphaSuccess: "\u5DF2\u95DC\u9589Alpha\u529F\u80FD",
  cacheSize: "\u7DE9\u5B58\u5927\u5C0F\uFF1A",
  cleaning: "\u6E05\u7406\u4E2D",
  cleanCache: "\u6E05\u9664\u7DE9\u5B58",
  options: "\u9078\u9805",
  about: "\u95DC\u65BC",
  service: "\u7FFB\u8B6F\u670D\u52D9",
  needAction: "\uFF08\u53BB\u8A2D\u7F6E\uFF09",
  goSettings: "\u53BB\u8A2D\u7F6E",
  needActionForOptions: "\uFF08\u53BB\u8A2D\u7F6E\uFF09",
  translationEngine: "\u5F15\u64CE\u9078\u9805",
  sourceLanguage: "\u539F\u6587\u8A9E\u8A00",
  target: "\u76EE\u6A19\u8A9E\u8A00",
  popupSourceLanguage: "\u539F\u6587\u8A9E\u8A00",
  popupTarget: "\u76EE\u6A19\u8A9E\u8A00",
  popupService: "\u7FFB\u8B6F\u670D\u52D9",
  forThisSite: "\u5C0D\u65BC\u8A72\u7DB2\u7AD9\uFF1A",
  alwaysTranslateSomeLanguage: "\u7E3D\u662F\u7FFB\u8B6F{language}",
  neverTranslateSomeLanguage: "\u6C38\u4E0D\u7FFB\u8B6F{language}",
  alwaysTranslateSomeSite: "\u7E3D\u662F\u7FFB\u8B6F {hostname}",
  neverTranslateSomeSite: "\u6C38\u4E0D\u7FFB\u8B6F {hostname}",
  add: "\u589E\u52A0",
  default: "\u9ED8\u8A8D",
  forThisLanguage: "\u5C0D\u65BC\u8A72\u8A9E\u8A00\uFF1A",
  "add url": "\u8F38\u5165URL",
  edit: "\u7DE8\u8F2F",
  "translate other languages into specific language": "\u5C07\u5176\u4ED6\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u7F6E\u7684\u8A9E\u8A00",
  "select translation service": "\u9078\u64C7\u4E00\u9805\u7FFB\u8B6F\u670D\u52D9",
  language: "\u8A9E\u8A00",
  "show-original": "\u986F\u793A\u539F\u6587",
  translate: "\u7FFB\u8B6F",
  Translated: "\u5DF2\u7FFB\u8B6F",
  Translating: "\u7FFB\u8B6F\u4E2D",
  Error: "\u932F\u8AA4",
  allowCacheTranslations: "\u958B\u555F\u672C\u5730\u7FFB\u8B6F\u7DE9\u5B58\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8ACB\u6C42\uFF09",
  "translation display": "\u8B6F\u6587\u986F\u793A\u6A23\u5F0F",
  "select diplay style": "\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u793A\u4F8B",
  interface: "\u754C\u9762\u8A2D\u7F6E",
  import_export: "\u5C0E\u5165/\u5C0E\u51FA",
  import_export_title: "\u5C0E\u5165/\u5C0E\u51FA",
  syncToGoogleDrive: "\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65",
  "translationTheme.none": "\u7121",
  "translationTheme.dashed": "\u865B\u7DDA\u4E0B\u5283\u7DDA",
  "translationTheme.dotted": "\u9EDE\u72C0\u4E0B\u5283\u7DDA",
  "translationTheme.dashedBorder": "\u865B\u7DDA\u908A\u6846",
  "translationTheme.underline": "\u76F4\u7DDA\u4E0B\u5283\u7DDA",
  "translationTheme.mask": "\u6A21\u7CCA\u6548\u679C",
  "translationTheme.paper": "\u767D\u7D19\u9670\u5F71\u6548\u679C",
  "translationTheme.dividingLine": "\u5206\u5272\u7DDA",
  "translationTheme.highlight": "\u9AD8\u4EAE",
  "translationTheme.marker": "\u99AC\u514B\u7B46",
  "translationTheme.blockquote": "\u5F15\u7528\u6A23\u5F0F",
  "translationTheme.weakening": "\u5F31\u5316",
  "translationTheme.italic": "\u659C\u9AD4",
  "translationTheme.bold": "\u7C97\u9AD4",
  "translationTheme.thinDashed": "\u7D30\u865B\u7DDA\u4E0B\u5283\u7DDA",
  "translationTheme.nativeDashed": "\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF",
  "translationTheme.nativeDotted": "\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF",
  "translationTheme.nativeUnderline": "\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF",
  "translationTheme.wavy": "\u6CE2\u6D6A\u7DDA",
  "translationServices.tencent": "\u9A30\u8A0A\u7FFB\u8B6F\u541B",
  "translationServices.google": "\u8C37\u6B4C\u7FFB\u8B6F",
  "translationServices.bai": "\u767E\u5EA6\uFF08Alpha\uFF09",
  "translationServices.baidu": "\u767E\u5EA6\u7FFB\u8B6F",
  "translationServices.aliyun": "\u963F\u91CC\u96F2\u7FFB\u8B6F",
  "translationServices.volc": "\u706B\u5C71\u7FFB\u8B6F",
  "translationServices.deeplx": "DeeplX(Alpha)",
  "translationServices.bing": "\u5FC5\u61C9\u7FFB\u8B6F",
  "translationServices.deepl": "Deepl",
  "translationServices.wechat": "\u5FAE\u4FE1\u7FFB\u8B6F",
  "translationServices.azure": "\u5FAE\u8EDF\u7FFB\u8B6F",
  "translationServices.ibm": "IBM Watson",
  "translationServices.aws": "\u4E9E\u99AC\u905C\u7FFB\u8B6F",
  "translationServices.mock": "\u6A21\u64EC\u7FFB\u8B6F",
  "translationServices.mock2": "\u6A21\u64EC\u7FFB\u8B6F2",
  "translationServices.caiyun": "\u5F69\u96F2\u5C0F\u8B6F",
  "translationServices.volcAlpha": "\u706B\u5C71\u7FFB\u8B6F(Alpha)",
  "translationServices.openl": "OpenL",
  "translationServices.youdao": "\u6709\u9053\u7FFB\u8B6F",
  "translationServices.transmart": "\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F",
  "translationServices.niu": "\u5C0F\u725B\u7FFB\u8B6F",
  "translationServices.d": "Deepl(Alpha)",
  "translate title": "\u7FFB\u8B6F\u9801\u9762\u6A19\u984C",
  "always languages": "\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00",
  neverTranslateLanguagesLabel: "\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740",
  neverTranslateTheFollowingLanguagesDescription: "\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u7FFB\u8BD1\u8BE5\u6BB5\u843D",
  enableUserscriptPagePopup: "\u603B\u662F\u5728\u9875\u9762\u4E0A\u5C55\u793A Popup \u6D6E\u7A97",
  enableUserscriptPagePopupDescription: "\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/\u4E09\u6307\u89E6\u5C4F\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875",
  "always translate the following languages": "\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00",
  "always sites": "\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740",
  "always translate the following sites": "\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00",
  "never sites": "\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740",
  "never translate the following sites": "\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F",
  "please refer to": "\u9700\u8981\u586B\u5BEB\u5BC6\u9470\u5F8C\u624D\u53EF\u7528\uFF0C\u8A73\u60C5\u53C3\u8003",
  KeyAndConfigurationTutorial: "\u300A\u5BC6\u9470\u7533\u8ACB\u548C\u914D\u7F6E\u6559\u7A0B\u300B",
  useAboveStyleForTheseSites: "\u7576\u524D\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\u70BA\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8A2D\u7F6E\u70BA\u8B93\u67D0\u4E9B\u7DB2\u7AD9\u4F7F\u7528\u8A72\u6A23\u5F0F\uFF0C\u9EDE\u64CA\u53F3\u908A\u7684\u6309\u9215\u6DFB\u52A0\u5F8C\uFF0C\u518D\u5207\u63DB\u5230\u53E6\u4E00\u7A2E\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\uFF0C\u9019\u6A23\u5373\u53EF\u5BE6\u73FE\u4E0D\u540C\u7DB2\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8B6F\u6587\u6A23\u5F0F\u3002",
  currentUrl: "\u7576\u524D\u7DB2\u5740",
  confirm: "\u5132\u5B58",
  cancel: "\u53D6\u6D88",
  delete: "\u522A\u9664",
  "languages.auto": "\u81EA\u52D5\u5075\u6E2C\u8A9E\u8A00",
  isShowContextMenu: "\u5275\u5EFA\u53F3\u9375\u83DC\u55AE",
  syncToCloud: "\u540C\u6B65\u5230\u96F2\u7AEF",
  syncToCloudDescription: "\u540C\u6B65\u65F6\u4F1A\u6BD4\u8F83\u672C\u5730\u548C\u4E91\u7AEF\u914D\u7F6E\u7684\u6700\u540E\u4FEE\u6539\u65F6\u95F4\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",
  authFail: "\u6388\u6B0A\u5931\u6557",
  syncTitle: "\u8ACB\u9078\u64C7\u6587\u4EF6\u64CD\u4F5C",
  import_hint: "\u5C0E\u5165",
  upload: "\u4E0A\u50B3",
  revokeAuth: "\u64A4\u92B7\u6388\u6B0A",
  uploadFail: "\u4E0A\u50B3\u5931\u6557",
  download: "\u4E0B\u8F09",
  importSuccess: "\u5C0E\u5165\u6210\u529F",
  importFail: "\u5C0E\u5165\u5931\u6557",
  deleteFail: "\u522A\u9664\u5931\u6557",
  backupToCloud: "\u624B\u52D5\u7BA1\u7406\u5099\u4EFD\u6587\u4EF6",
  create_new_backup: "\u65B0\u589E\u5099\u4EFD\u7BC0\u9EDE",
  maxBackupFiles: "\u6700\u591A\u53EF\u4EE5\u5099\u4EFD{count}\u500B\u4E0D\u540C\u7684\u7BC0\u9EDE, \u8ACB\u522A\u9664\u4E0D\u9700\u8981\u7684\u7BC0\u9EDE",
  backupToCloudDescription: "\u624B\u52D5\u4E0A\u50B3\u6216\u6062\u5FA9\u5099\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8A313\u500B\u4E0D\u540C\u7684\u5099\u4EFD",
  successSyncConfig: "\u6210\u529F\u8207\u96F2\u7AEF\u4FDD\u6301\u540C\u6B65",
  syncFail: "\u540C\u6B65\u5931\u6557",
  updatedAt: "\u66F4\u65B0\u65BC {date}",
  lastSyncedAt: "\u4E0A\u6B21\u6AA2\u67E5\u65BC {date}",
  downloadFail: "\u4E0B\u8F09\u5931\u6557",
  clickToDownload: "\u9EDE\u64CA\u4E0B\u8F09",
  aboutLabel: "\u95DC\u65BC - \u53CD\u994B - \u8D0A\u52A9",
  "browser.openAboutPage": "\u95DC\u65BC/\u53CD\u994B/\u8D0A\u52A9",
  aboutIntro: "\u8A72\u64F4\u5C55\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u4E92\u806F\u7DB2\u4E0A\u5DE8\u5927\u7684\u5916\u8A9E\u4FE1\u606F \u2764\uFE0F <br/><br/>\u611F\u8B1D\u9019\u4E9B<1>\u8D0A\u52A9\u8005\u5011</1>, \u7531\u65BC\u4ED6/\u5979\u5011\u7684\u652F\u6301\uFF0C\u66F4\u591A\u7684\u4EBA\u53EF\u4EE5\u5B8C\u5168\u514D\u8CBB\u5730\u4F7F\u7528\u9019\u500B\u5DE5\u5177\u3002\u5982\u679C\u6709\u9918\u529B\uFF0C\u4F60\u53EF\u4EE5<2>\u9EDE\u64CA\u9019\u88E1\u8D0A\u52A9</2> \u6211\u7684\u5DE5\u4F5C\uFF0C\u4F60\u9084\u53EF\u4EE5\u95DC\u6CE8\u6211\u7684<3>\u63A8\u7279</3>\u548C<4>Telegram \u983B\u9053</4>\u7372\u53D6\u6700\u65B0\u66F4\u65B0\u3002",
  projectHomepage: "\u9805\u76EE\u4E3B\u9801",
  joinTelegramGroup: "\u52A0\u5165 Telegram \u7FA4\u53C3\u8207\u529F\u80FD\u8A0E\u8AD6",
  feedbackAndJoin: "\u554F\u984C\u53CD\u994B/\u52A0\u7FA4",
  autoSync: "\u81EA\u52D5\u5B9A\u6642\u540C\u6B65",
  loadingThemeTitle: "Loading \u6A23\u5F0F",
  loadingThemeDescription: "\u8A2D\u7F6E\u7B49\u5F85\u8B6F\u6587\u52A0\u8F09\u6642\u7684\u6A23\u5F0F",
  "loadingTheme.spinner": "\u8F49\u5708\u52D5\u756B Spinner",
  "loadingTheme.text": "\u975C\u614B\u6587\u5B57 ... ",
  "loadingTheme.none": "\u4E0D\u986F\u793A",
  developerDescription: "\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863"
};

// locales/en.json
var en_default = {
  lineBreakMaxTextCount: "Maximum number of characters allowed per sentence after line break",
  "translate-pdf": "Click to translate PDF",
  "translate-firefox-local-pdf": "Click to upload Pdf",
  enableLineBreak: "Whether to turn on automatic line wrapping for long paragraphs",
  sponsorLabel: "Sponsoring developers from $1 (monthly or one-time)",
  help: "Help",
  browserShortcutsNoteForFirefox: `To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,
  browserShortcutsNoteForChrome: "To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",
  browserShortcutsSucks: "Please enter the shortcut key manually in the format:",
  enableLineBreakDescription: "After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading",
  "browser.brandName": "Immersive Translate",
  "browser.brandDescription": "Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.",
  "browser.toggleTranslatePage": "Toggle translate webpage ",
  "browser.toggleTranslateTheWholePage": "Toggle translate the whole page",
  "browser.toggleTranslateToThePageEndImmediately": "Toggle translate to the bottom of the page immediately",
  "browser.toggleTranslateTheMainPage": "Toggle translate the main page",
  "browser.openOptionsPage": "Open Settings Page",
  "browser.toggleTranslationMask": "Toggle translation mask style",
  "browser.translateLocalPdfFile": "Translate local PDF files",
  confirmResetConfig: "Are you sure you want to reset the settings?",
  translationLineBreakSettingTitle: "Line break setting",
  smartLineBreak: "Smart Wrap",
  alwaysLineBreak: "Always Wrap",
  toggleBeta: "\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",
  betaDescription: "\u5F00\u542F\u540E\u4F1A\u542F\u7528\u4E00\u4E9B\u5B9E\u9A8C\u6027\u529F\u80FD\uFF0C\u4EE5\u53CA\u8FD8\u5728\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1, \u53EF\u4EE5<1>\u52A0Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u5185\u6D4B\u7684\u7279\u6027\u3002",
  translationLineBreakSettingDescription: "The position of the translation\uFF1AAlways wrap / smart wrap (the translation is displayed only when the paragraph is more than {count} characters)",
  tempTranslateDomainTitle: "Open the translation time temporarily",
  tempTranslateDomainDescription: "When a page is translated manually, turn it temporarily on as automatic translation",
  xMinutes: "{count} minutes",
  disabled: "Disable",
  changelog: "Change Log",
  toggleTranslatePageWhenThreeFingersOnTheScreen: "\u4E09\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",
  addUrlDescription: "The domain name is available and wildcard is supported e.g.\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",
  general: "General",
  clickToExpandConfig: "Expand current configuration",
  import: "Import configuration from file",
  export: "Export to file",
  toggleDebug: "Print debug logs on the console",
  "fingers.0": "Close",
  "fingers.2": "Two-finger touch",
  "fingers.3": "Three-finger touch",
  "fingers.4": "Four-finger touch",
  "fingers.5": "Five-finger touch",
  document: "Document",
  resetSuccess: "All settings reset successful",
  saved: "Saved successfully",
  successImportConfig: "Configuration imported successfully",
  goAdvancedSettings: "Go to Advanced Settings Page",
  goAdvancedInterfaceSettings: "Go to Advanced Custom Settings Page",
  advanced: "Advanced",
  advancedDescription: "Some unintelligible settings (normally set without setting to default)",
  developer: "Developer settings",
  donateCafe: "Buy Me a Coffee",
  "translate to the bottom of the page": "Whether translate to the bottom of the page once you open the page?",
  feedback: "Feedback",
  toggleTranslatePage: "Toggle Translate",
  translateToThePageEndImmediatelyDescription: "When turned on, it will immediately translate the page from the top to the bottom, instead of translating as you read. (Not recommended to turn on)",
  "translate all areas of the page": "Whether to translate all areas of the web page",
  translationAreaDescription: "When enabled, the entire area of the page will be translated, not the default intelligent recognition main area to translate ( not recommended)",
  "the number of characters to be translated first": "How many characters are translated directly without waiting to scroll to the visible area for the first few characters?",
  "interface language": "Interface language",
  "display both the original text and the translation": "Display both the original text and the translation",
  "keyboard shortcuts": "Keyboard shortcuts",
  modify: "Edit",
  reset: "Reset",
  close: "Close",
  homepage: "Home Page",
  more: "More",
  translateTheWholePage: "Translate the whole page area (different from only the main area)",
  changeToTranslateTheWholePage: "\u5207\u6362\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF",
  changeToTranslateTheMainPage: "\u5207\u6362\u4E3A\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",
  translateToThePageEndImmediately: "Immediately translate to the bottom (different from translating the current visible area)",
  translateTheMainPage: "Main areas of intelligent translation",
  "The local rules are up to date": "Local  rules are up to date:",
  "Successfully synchronized with the latest official rules:": "Successfully synced latest official rules:",
  "Checking for updates": "Checking for update",
  "Rules are being synchronized": "Syncing official rules",
  localVersionIsTooOld: "The local extension is too old. Please upgrade to {minVersion} or then try syncing again",
  badUserscriptBrowser: "This browser does not correctly implement the interface of Tampermonkey. Please use other < 1 > browsers that support Tampermonkey < / 1 >, such as (Firefox Nightly version)",
  foundNewVersion: "New version available",
  theLocalExtensionIsUpToUpdate: "The current extension version is up to date.",
  failToSyncRules: "Failed to sync latest adaptive rules",
  retry: "Retry",
  failedReason: "Failure reason",
  currentRuleVersion: "Current Rule Version",
  calculating: "Calculating",
  unknownError: "Unknown Error",
  canNotFetchRemoteRule: "Unable to fetch remote rule",
  enableAlphaSuccess: "Alpha enabled successfully",
  disableAlphaSuccess: "Alpha has been disabled",
  cacheSize: "Cache size:",
  cleaning: "Cleaning",
  cleanCache: "Clear cache",
  options: "Options",
  about: "About",
  service: "Translation Service",
  needAction: "(to set up)",
  goSettings: "to set up",
  needActionForOptions: "(need to set)",
  translationEngine: "Engine Options",
  sourceLanguage: "Original language",
  target: "Target Language",
  popupSourceLanguage: "Source",
  popupTarget: "Target",
  popupService: "Service",
  forThisSite: "For This Site:",
  alwaysTranslateSomeLanguage: "Always translate {language}",
  neverTranslateSomeLanguage: "Never translate {language}",
  alwaysTranslateSomeSite: "Always translate {hostname}",
  neverTranslateSomeSite: "Never translate {hostname}",
  add: "Add",
  default: "Default",
  forThisLanguage: "For This Language:",
  "add url": "Add URL",
  edit: "Edit",
  "translate other languages into specific language": "Translate other languages into the language you set",
  "select translation service": "Select a translation service",
  language: "Language",
  "show-original": "Show Original",
  translate: "Translate",
  Translated: "Translated",
  Translating: "Translating",
  Error: "Error",
  allowCacheTranslations: "Enable local translation caching (reduce translation requests for duplicate paragraphs)",
  "translation display": "Translation display style",
  "select diplay style": "Please refer to the following examples",
  interface: "Interface Settings",
  import_export: "Import/Export",
  import_export_title: "Import/Export Configuration",
  syncToGoogleDrive: "Sync Now with Google Drive",
  "translationTheme.none": "None",
  "translationTheme.dashed": "Dashed underline",
  "translationTheme.dotted": "Dotted Underline",
  "translationTheme.dashedBorder": "Dashed Border",
  "translationTheme.underline": "Straight underline",
  "translationTheme.mask": "Blur effect",
  "translationTheme.paper": "White paper shadow effect",
  "translationTheme.dividingLine": "Dividing line",
  "translationTheme.highlight": "Highlight",
  "translationTheme.marker": "Maker",
  "translationTheme.blockquote": "quote style",
  "translationTheme.weakening": "Weakening",
  "translationTheme.italic": "Italic",
  "translationTheme.bold": "Bold",
  "translationTheme.thinDashed": "Thin dashed underline",
  "translationTheme.nativeDashed": "System Dash Underline",
  "translationTheme.nativeDotted": "System Dotted Underline",
  "translationTheme.nativeUnderline": "System Straight Line Underline",
  "translationTheme.wavy": "Squiggle",
  "translationServices.tencent": "Tencent Translator",
  "translationServices.google": "Google Translate",
  "translationServices.bai": "Baidu (Alpha)",
  "translationServices.baidu": "Baidu translation",
  "translationServices.aliyun": "Aliyun Translator",
  "translationServices.volc": "Volcano Translation",
  "translationServices.deeplx": "DeeplX (Alpha)",
  "translationServices.bing": "Bing translate",
  "translationServices.deepl": "DeepL",
  "translationServices.wechat": "Wechat translation",
  "translationServices.azure": "Microsoft Translator",
  "translationServices.ibm": "IBM Watson",
  "translationServices.aws": "Amazon Translate",
  "translationServices.mock": "Mock translation",
  "translationServices.mock2": "Mock Translation2",
  "translationServices.caiyun": "Caiyun Translation",
  "translationServices.volcAlpha": "Volcano Translation (Alpha)",
  "translationServices.openl": "OpenL",
  "translationServices.youdao": "Youdao Translation",
  "translationServices.transmart": "Tencent Smart Translation",
  "translationServices.niu": "Niu Translation",
  "translationServices.d": "DeeplX (Alpha)",
  "translate title": "Translate page title",
  "always languages": "Always translate the following languages",
  neverTranslateLanguagesLabel: "Never Translated Languages",
  neverTranslateTheFollowingLanguagesDescription: "Automatically skip translating the paragraph when languages are the followings",
  enableUserscriptPagePopup: "Always show Popup windows on the page",
  enableUserscriptPagePopupDescription: "\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/\u4E09\u6307\u89E6\u5C4F\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875",
  "always translate the following languages": "The following languages will always be translated",
  "always sites": "Always translate the following sites",
  "always translate the following sites": "The following sites will always be translated",
  "never sites": "Never translate the following sites",
  "never translate the following sites": "The following sites will never be translated",
  "please refer to": "It can only be used after filling in the key. For details, please refer to",
  KeyAndConfigurationTutorial: "Key Application and Configuration Tutorial",
  useAboveStyleForTheseSites: "The current default translation style is \u300C{theme}\u300D, you can also set it to let some websites use this style, click the button on the right to add it, and then switch to another default translation style, so that you can use different translation styles for different websites.",
  currentUrl: "Current URL",
  confirm: "Save",
  cancel: "Cancel",
  delete: "Delete",
  "languages.auto": "Detect Language",
  isShowContextMenu: "Create right button menu",
  syncToCloud: "Sync to cloud",
  syncToCloudDescription: "When syncing it will compare the last modification time of the local and cloud configurations, whichever is the last.",
  authFail: "Authorization Failed",
  syncTitle: "Please select a file operation",
  import_hint: "Import",
  upload: "Upload",
  revokeAuth: "Revoke Authorization",
  uploadFail: "Upload Failed",
  download: "Download",
  importSuccess: "Upload Success",
  importFail: "Import Failed",
  deleteFail: "Delete Failed",
  backupToCloud: "Manage backup files manually",
  create_new_backup: "Add backup node",
  maxBackupFiles: "Up to{count}different nodes can be backed up. Please delete unneeded nodes",
  backupToCloudDescription: "Upload or restore backup files manually, up to 3 different backups",
  successSyncConfig: "Successfully synced with cloud",
  syncFail: "Synchronization failed",
  updatedAt: "Updated at {date}",
  lastSyncedAt: "Last checked at {date}",
  downloadFail: "Download failed",
  clickToDownload: "Click to download",
  aboutLabel: "About - Feedback - Sponsor",
  "browser.openAboutPage": "About / Feedback/Sponsor",
  aboutIntro: `This extension is completely free. I hope we can get foreign information on the Internet more easily and happily. Thanks to these <1>sponsors</1>, more people can use this tool completely free of charge because of their support. 
If you have spare time, you can click here to <2>sponsor</2> my work, and you can follow my <3>Twitter</3> and <4>Telegram channels </4> for the latest updates.`,
  projectHomepage: "Project Homepage",
  joinTelegramGroup: "Join Telegram group for feature discussion",
  feedbackAndJoin: "Issue feedback/group",
  autoSync: "Auto-Time Sync",
  loadingThemeTitle: "Loading Style",
  loadingThemeDescription: "Set the style of waiting for the translation to load",
  "loadingTheme.spinner": "Animate Spinner",
  "loadingTheme.text": "Static Text... ",
  "loadingTheme.none": "Disabled",
  developerDescription: "\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863"
};

// constant.ts
var interfaceTranslations = [
  {
    code: "zh-CN",
    messages: zh_CN_default
  },
  {
    code: "zh-TW",
    messages: zh_TW_default
  },
  {
    code: "en",
    messages: en_default
  }
], translations = {};
for (let translation of interfaceTranslations)
  translations[translation.code] = translation.messages;
var brandName = "Immersive Translate", brandId = "immersive-translate";
var brandIdForJs = "immersiveTranslate";
var GOOGLE_ACCESS_TOKEN_KEY = brandIdForJs + "GoogleAccessToken", AUTH_FLOW_FLAG = brandIdForJs + "AuthFlow";
var AUTH_STATE_FLAG = brandIdForJs + "AuthState", iframeMessageIdentifier = brandIdForJs + "IframeMessage", targetContainerElementAttributeName = `${brandIdForJs}Container`, specifiedTargetContainerElementAttributeName = `${brandIdForJs}SpecifiedContainer`;
var pageTranslatedStatusEventName = `${brandIdForJs}PageTranslatedStatus`, pageUrlChangedEventName = `${brandIdForJs}PageUrlChanged`, userscriptCommandEventName = `${brandIdForJs}ReceiveCommand`, popupReceiveMessageEventName = `${brandIdForJs}PopupReceiveMessage`, hostname = "immersive-translate.owenyoung.com", homepage = `https://${hostname}/`, buildinConfigSyncUrl = `https://${hostname}/buildin_config.json`, sourceElementMarkAttributeName = `${brandIdForJs}Mark`;
var elementMarkRootKey = `${brandIdForJs}Root`, sourceElementEffectAttributeName = `data-${brandId}-effect`, sourceElementTranslatedMarkAttributeName = `${brandIdForJs}TranslatedMark`, sourceElementParagraphAttributeName = `${brandIdForJs}ParagraphId`, sourceAtomicBlockElementMarkAttributeName = `${brandIdForJs}AtomicBlockMark`, sourceElementExcludeAttributeName = `${brandIdForJs}ExcludeMark`, sourceElementExcludeAttributeNameForSelector = `data-${brandId}-exclude-mark`, sourceElementStayOriginalAttributeName = `${brandIdForJs}StayOriginalMark`, sourcePreWhitespaceMarkAttributeName = `${brandIdForJs}PreWhitespaceMark`, sourceInlineElementMarkAttributeName = `${brandIdForJs}InlineMark`, sourceBlockElementMarkAttributeName = `${brandIdForJs}BlockMark`, sourceElementLeft = `${brandIdForJs}Left`, sourceElementRight = `${brandIdForJs}Right`, sourceElementWidth = `${brandIdForJs}Width`, sourceElementHeight = `${brandIdForJs}Height`, sourceElementTop = `${brandIdForJs}Top`, sourceElementFontSize = `${brandIdForJs}FontSize`;
var sourceElementWithGlobalStyleMarkAttributeName = `${brandIdForJs}GlobalStyleMark`;
var translationTargetElementWrapperClass = `${brandId}-target-wrapper`, translationPdfTargetContainerClass = `${brandId}-pdf-target-container`, translationTargetInnerElementWrapperClass = `${brandId}-target-inner`, translationSourceElementsWrapperClass = `${brandId}-source-wrapper`, translationTargetTranslationElementBlockWrapperClass = `${brandId}-target-translation-block-wrapper`, translationFrameRootThemeAttributeName = `${brandId}-root-translation-theme`, translationFrameRootThemeAttributeNameForJs = `${brandIdForJs}RootTranslationTheme`, translationTargetTranslationElementVerticalBlockClass = `${brandId}-target-translation-vertical-block-wrapper`, translationTargetTranslationPdfElementBlockWrapperClass = `${brandId}-target-translation-pdf-block-wrapper`, translationTargetTranslationElementPreWhitespaceWrapperClass = `${brandId}-target-translation-pre-whitespace`, translationTargetTranslationElementInlineWrapperClass = `${brandId}-target-translation-inline-wrapper`;

// log.ts
var Timing = class {
  #t = performance.now();
  reset() {
    this.#t = performance.now();
  }
  stop(message) {
    let now = performance.now(), d3 = Math.round(now - this.#t), cf = colors_exports.green;
    d3 > 1e4 ? cf = colors_exports.red : d3 > 1e3 && (cf = colors_exports.yellow), console.debug(
      colors_exports.dim(brandName + " TIMING:"),
      message,
      "in",
      cf(d3 + "ms")
    ), this.#t = now;
  }
}, Logger = class {
  #level = 1 /* Info */;
  get level() {
    return this.#level;
  }
  setLevel(level) {
    switch (level) {
      case "debug":
        this.#level = 0 /* Debug */;
        break;
      case "info":
        this.#level = 1 /* Info */;
        break;
      case "warn":
        this.#level = 2 /* Warn */;
        break;
      case "error":
        this.#level = 3 /* Error */;
        break;
      case "fatal":
        this.#level = 4 /* Fatal */;
        break;
    }
  }
  debug(...args) {
    this.#level <= 0 /* Debug */ && console.log(colors_exports.dim(brandName + " DEBUG:"), ...args);
  }
  v(...args) {
    this.#level <= 0 /* Debug */ && console.log(colors_exports.dim(brandName + " VERBOSE:"), ...args);
  }
  info(...args) {
    this.#level <= 1 /* Info */ && console.log(colors_exports.green(brandName + " INFO:"), ...args);
  }
  l(...args) {
    this.#level <= 1 /* Info */ && console.log(colors_exports.green(brandName + " TEMP INFO:"), ...args);
  }
  warn(...args) {
    this.#level <= 2 /* Warn */ && console.warn(colors_exports.yellow(brandName + " WARN:"), ...args);
  }
  error(...args) {
    this.#level <= 3 /* Error */ && console.error(colors_exports.red(brandName + " ERROR:"), ...args);
  }
  fatal(...args) {
    this.#level <= 4 /* Fatal */ && console.error(colors_exports.red(brandName + " FATAL:"), ...args);
  }
  timing() {
    return this.level === 0 /* Debug */ ? new Timing() : { reset: () => {
    }, stop: () => {
    } };
  }
}, log_default = new Logger();

// https://esm.sh/stable/preact@10.11.0/deno/jsx-runtime.js
var a2 = 0;
function p5(n3, s4, t2, f4, u3) {
  var r, o3, _2 = {};
  for (o3 in s4)
    o3 == "ref" ? r = s4[o3] : _2[o3] = s4[o3];
  var e3 = { type: n3, props: _2, key: t2, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --a2, __source: u3, __self: f4 };
  if (typeof n3 == "function" && (r = n3.defaultProps))
    for (o3 in r)
      _2[o3] === void 0 && (_2[o3] = r[o3]);
  return d.vnode && d.vnode(e3), e3;
}

// components/button_drop_down.tsx
var DEFAULT_VALUE = "DROP_DOWN_DEFAULT_VALUE";
function SelectDropDown(props) {
  let { showArrow, onSelected, className, menus, maxWidth } = props;
  className = className || "", showArrow = showArrow ?? !0, maxWidth = maxWidth || 60;
  let ref = w2(null);
  return /* @__PURE__ */ p5(
    "select",
    {
      ref,
      autoComplete: "off",
      class: `min-select ${showArrow ? "" : "min-select-no-arrow"} ${className || ""}`,
      value: DEFAULT_VALUE,
      style: { maxWidth: `${maxWidth}px` },
      onChange: (e3) => {
        e3.preventDefault();
        let value = e3.target.value;
        if (ref.current && value !== DEFAULT_VALUE) {
          ref.current.value = DEFAULT_VALUE, ref.current?.dispatchEvent(new Event("change"));
          let item = menus.find((item2) => item2.value === value);
          item && onSelected(item);
        }
      },
      children: [{
        value: DEFAULT_VALUE,
        label: props.label
      }].concat(menus).map((item) => /* @__PURE__ */ p5("option", { value: item.value, children: item.label }))
    }
  );
}

// example/demo.tsx
function main() {
  let mountPoint = document.getElementById("mount");
  mountPoint && (log_default.setLevel("debug"), re(
    /* @__PURE__ */ p5(App, {}),
    mountPoint
  ));
}
function App() {
  return /* @__PURE__ */ p5(L, { children: /* @__PURE__ */ p5("main", { class: "container-fluid", children: /* @__PURE__ */ p5("div", { class: "flex", children: [
    /* @__PURE__ */ p5("button", { class: "secondary flex-3", children: "Hi" }),
    /* @__PURE__ */ p5(
      SelectDropDown,
      {
        label: "\u66F4\u591A",
        showArrow: !1,
        maxWidth: 60,
        onSelected: (item) => {
        },
        menus: [{
          label: "translateTheWholePage",
          value: "translateTheWholePage"
        }, {
          label: "translateToThePageEndImmediately",
          value: "translateToThePageEndImmediately"
        }]
      }
    )
  ] }) }) });
}
main();
