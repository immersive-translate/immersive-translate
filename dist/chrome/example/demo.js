var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// https://deno.land/std@0.171.0/async/deferred.ts
function deferred() {
  let methods;
  let state = "pending";
  const promise = new Promise((resolve, reject) => {
    methods = {
      async resolve(value) {
        await value;
        state = "fulfilled";
        resolve(value);
      },
      reject(reason) {
        state = "rejected";
        reject(reason);
      }
    };
  });
  Object.defineProperty(promise, "state", { get: () => state });
  return Object.assign(promise, methods);
}

// https://deno.land/std@0.171.0/async/mux_async_iterator.ts
var MuxAsyncIterator = class {
  #iteratorCount = 0;
  #yields = [];
  #throws = [];
  #signal = deferred();
  add(iterable) {
    ++this.#iteratorCount;
    this.#callIteratorNext(iterable[Symbol.asyncIterator]());
  }
  async #callIteratorNext(iterator) {
    try {
      const { value, done } = await iterator.next();
      if (done) {
        --this.#iteratorCount;
      } else {
        this.#yields.push({ iterator, value });
      }
    } catch (e3) {
      this.#throws.push(e3);
    }
    this.#signal.resolve();
  }
  async *iterate() {
    while (this.#iteratorCount > 0) {
      await this.#signal;
      for (let i4 = 0; i4 < this.#yields.length; i4++) {
        const { iterator, value } = this.#yields[i4];
        yield value;
        this.#callIteratorNext(iterator);
      }
      if (this.#throws.length) {
        for (const e3 of this.#throws) {
          throw e3;
        }
        this.#throws.length = 0;
      }
      this.#yields.length = 0;
      this.#signal = deferred();
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
var { Deno: Deno2 } = globalThis;
var noColor = typeof Deno2?.noColor === "boolean" ? Deno2.noColor : true;
var enabled = !noColor;
function setColorEnabled(value) {
  if (noColor) {
    return;
  }
  enabled = value;
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
  if (typeof color === "number") {
    return run(
      str,
      code(
        [38, 2, color >> 16 & 255, color >> 8 & 255, color & 255],
        39
      )
    );
  }
  return run(
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
  if (typeof color === "number") {
    return run(
      str,
      code(
        [48, 2, color >> 16 & 255, color >> 8 & 255, color & 255],
        49
      )
    );
  }
  return run(
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
var P;
var d;
var $;
var Y;
var S;
var F;
var B;
var T = {};
var V = [];
var Z = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
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
  var r, l4, o4, s6 = {};
  for (o4 in t2)
    o4 == "key" ? r = t2[o4] : o4 == "ref" ? l4 = t2[o4] : s6[o4] = t2[o4];
  if (arguments.length > 2 && (s6.children = arguments.length > 3 ? P.call(arguments, 2) : _2), typeof e3 == "function" && e3.defaultProps != null)
    for (o4 in e3.defaultProps)
      s6[o4] === void 0 && (s6[o4] = e3.defaultProps[o4]);
  return w(e3, s6, r, l4, null);
}
function w(e3, t2, _2, r, l4) {
  var o4 = { type: e3, props: t2, key: _2, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: l4 ?? ++$ };
  return l4 == null && d.vnode != null && d.vnode(o4), o4;
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
  (!e3.__d && (e3.__d = true) && S.push(e3) && !D.__r++ || F !== d.debounceRendering) && ((F = d.debounceRendering) || setTimeout)(D);
}
function D() {
  for (var e3; D.__r = S.length; )
    e3 = S.sort(function(t2, _2) {
      return t2.__v.__b - _2.__v.__b;
    }), S = [], e3.some(function(t2) {
      var _2, r, l4, o4, s6, f3;
      t2.__d && (s6 = (o4 = (_2 = t2).__v).__e, (f3 = _2.__P) && (r = [], (l4 = k({}, o4)).__v = o4.__v + 1, W(f3, o4, l4, _2.__n, f3.ownerSVGElement !== void 0, o4.__h != null ? [s6] : null, r, s6 ?? C(o4), o4.__h), K(r, o4), o4.__e != s6 && z(o4)));
    });
}
function G(e3, t2, _2, r, l4, o4, s6, f3, p7, a4) {
  var n3, h3, c3, i4, u4, b5, v4, y4 = r && r.__k || V, g5 = y4.length;
  for (_2.__k = [], n3 = 0; n3 < t2.length; n3++)
    if ((i4 = _2.__k[n3] = (i4 = t2[n3]) == null || typeof i4 == "boolean" ? null : typeof i4 == "string" || typeof i4 == "number" || typeof i4 == "bigint" ? w(null, i4, null, null, i4) : Array.isArray(i4) ? w(L, { children: i4 }, null, null, null) : i4.__b > 0 ? w(i4.type, i4.props, i4.key, i4.ref ? i4.ref : null, i4.__v) : i4) != null) {
      if (i4.__ = _2, i4.__b = _2.__b + 1, (c3 = y4[n3]) === null || c3 && i4.key == c3.key && i4.type === c3.type)
        y4[n3] = void 0;
      else
        for (h3 = 0; h3 < g5; h3++) {
          if ((c3 = y4[h3]) && i4.key == c3.key && i4.type === c3.type) {
            y4[h3] = void 0;
            break;
          }
          c3 = null;
        }
      W(e3, i4, c3 = c3 || T, l4, o4, s6, f3, p7, a4), u4 = i4.__e, (h3 = i4.ref) && c3.ref != h3 && (v4 || (v4 = []), c3.ref && v4.push(c3.ref, null, i4), v4.push(h3, i4.__c || u4, i4)), u4 != null ? (b5 == null && (b5 = u4), typeof i4.type == "function" && i4.__k === c3.__k ? i4.__d = p7 = q(i4, p7, e3) : p7 = J(e3, i4, c3, y4, u4, p7), typeof _2.type == "function" && (_2.__d = p7)) : p7 && c3.__e == p7 && p7.parentNode != e3 && (p7 = C(c3));
    }
  for (_2.__e = b5, n3 = g5; n3--; )
    y4[n3] != null && (typeof _2.type == "function" && y4[n3].__e != null && y4[n3].__e == _2.__d && (_2.__d = C(r, n3 + 1)), X(y4[n3], y4[n3]));
  if (v4)
    for (n3 = 0; n3 < v4.length; n3++)
      Q(v4[n3], v4[++n3], v4[++n3]);
}
function q(e3, t2, _2) {
  for (var r, l4 = e3.__k, o4 = 0; l4 && o4 < l4.length; o4++)
    (r = l4[o4]) && (r.__ = e3, t2 = typeof r.type == "function" ? q(r, t2, _2) : J(_2, r, r, l4, r.__e, t2));
  return t2;
}
function J(e3, t2, _2, r, l4, o4) {
  var s6, f3, p7;
  if (t2.__d !== void 0)
    s6 = t2.__d, t2.__d = void 0;
  else if (_2 == null || l4 != o4 || l4.parentNode == null)
    e:
      if (o4 == null || o4.parentNode !== e3)
        e3.appendChild(l4), s6 = null;
      else {
        for (f3 = o4, p7 = 0; (f3 = f3.nextSibling) && p7 < r.length; p7 += 2)
          if (f3 == l4)
            break e;
        e3.insertBefore(l4, o4), s6 = o4;
      }
  return s6 !== void 0 ? s6 : l4.nextSibling;
}
function _e(e3, t2, _2, r, l4) {
  var o4;
  for (o4 in _2)
    o4 === "children" || o4 === "key" || o4 in t2 || N(e3, o4, null, _2[o4], r);
  for (o4 in t2)
    l4 && typeof t2[o4] != "function" || o4 === "children" || o4 === "key" || o4 === "value" || o4 === "checked" || _2[o4] === t2[o4] || N(e3, o4, t2[o4], _2[o4], r);
}
function I(e3, t2, _2) {
  t2[0] === "-" ? e3.setProperty(t2, _2) : e3[t2] = _2 == null ? "" : typeof _2 != "number" || Z.test(t2) ? _2 : _2 + "px";
}
function N(e3, t2, _2, r, l4) {
  var o4;
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
      o4 = t2 !== (t2 = t2.replace(/Capture$/, "")), t2 = t2.toLowerCase() in e3 ? t2.toLowerCase().slice(2) : t2.slice(2), e3.l || (e3.l = {}), e3.l[t2 + o4] = _2, _2 ? r || e3.addEventListener(t2, o4 ? R : O, o4) : e3.removeEventListener(t2, o4 ? R : O, o4);
    else if (t2 !== "dangerouslySetInnerHTML") {
      if (l4)
        t2 = t2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t2 !== "href" && t2 !== "list" && t2 !== "form" && t2 !== "tabIndex" && t2 !== "download" && t2 in e3)
        try {
          e3[t2] = _2 ?? "";
          break e;
        } catch {
        }
      typeof _2 == "function" || (_2 != null && (_2 !== false || t2[0] === "a" && t2[1] === "r") ? e3.setAttribute(t2, _2) : e3.removeAttribute(t2));
    }
}
function O(e3) {
  this.l[e3.type + false](d.event ? d.event(e3) : e3);
}
function R(e3) {
  this.l[e3.type + true](d.event ? d.event(e3) : e3);
}
function W(e3, t2, _2, r, l4, o4, s6, f3, p7) {
  var a4, n3, h3, c3, i4, u4, b5, v4, y4, g5, x6, H6, E3, m4 = t2.type;
  if (t2.constructor !== void 0)
    return null;
  _2.__h != null && (p7 = _2.__h, f3 = t2.__e = _2.__e, t2.__h = null, o4 = [f3]), (a4 = d.__b) && a4(t2);
  try {
    e:
      if (typeof m4 == "function") {
        if (v4 = t2.props, y4 = (a4 = m4.contextType) && r[a4.__c], g5 = a4 ? y4 ? y4.props.value : a4.__ : r, _2.__c ? b5 = (n3 = t2.__c = _2.__c).__ = n3.__E : ("prototype" in m4 && m4.prototype.render ? t2.__c = n3 = new m4(v4, g5) : (t2.__c = n3 = new U(v4, g5), n3.constructor = m4, n3.render = oe), y4 && y4.sub(n3), n3.props = v4, n3.state || (n3.state = {}), n3.context = g5, n3.__n = r, h3 = n3.__d = true, n3.__h = []), n3.__s == null && (n3.__s = n3.state), m4.getDerivedStateFromProps != null && (n3.__s == n3.state && (n3.__s = k({}, n3.__s)), k(n3.__s, m4.getDerivedStateFromProps(v4, n3.__s))), c3 = n3.props, i4 = n3.state, h3)
          m4.getDerivedStateFromProps == null && n3.componentWillMount != null && n3.componentWillMount(), n3.componentDidMount != null && n3.__h.push(n3.componentDidMount);
        else {
          if (m4.getDerivedStateFromProps == null && v4 !== c3 && n3.componentWillReceiveProps != null && n3.componentWillReceiveProps(v4, g5), !n3.__e && n3.shouldComponentUpdate != null && n3.shouldComponentUpdate(v4, n3.__s, g5) === false || t2.__v === _2.__v) {
            n3.props = v4, n3.state = n3.__s, t2.__v !== _2.__v && (n3.__d = false), n3.__v = t2, t2.__e = _2.__e, t2.__k = _2.__k, t2.__k.forEach(function(A4) {
              A4 && (A4.__ = t2);
            }), n3.__h.length && s6.push(n3);
            break e;
          }
          n3.componentWillUpdate != null && n3.componentWillUpdate(v4, n3.__s, g5), n3.componentDidUpdate != null && n3.__h.push(function() {
            n3.componentDidUpdate(c3, i4, u4);
          });
        }
        if (n3.context = g5, n3.props = v4, n3.__v = t2, n3.__P = e3, x6 = d.__r, H6 = 0, "prototype" in m4 && m4.prototype.render)
          n3.state = n3.__s, n3.__d = false, x6 && x6(t2), a4 = n3.render(n3.props, n3.state, n3.context);
        else
          do
            n3.__d = false, x6 && x6(t2), a4 = n3.render(n3.props, n3.state, n3.context), n3.state = n3.__s;
          while (n3.__d && ++H6 < 25);
        n3.state = n3.__s, n3.getChildContext != null && (r = k(k({}, r), n3.getChildContext())), h3 || n3.getSnapshotBeforeUpdate == null || (u4 = n3.getSnapshotBeforeUpdate(c3, i4)), E3 = a4 != null && a4.type === L && a4.key == null ? a4.props.children : a4, G(e3, Array.isArray(E3) ? E3 : [E3], t2, _2, r, l4, o4, s6, f3, p7), n3.base = t2.__e, t2.__h = null, n3.__h.length && s6.push(n3), b5 && (n3.__E = n3.__ = null), n3.__e = false;
      } else
        o4 == null && t2.__v === _2.__v ? (t2.__k = _2.__k, t2.__e = _2.__e) : t2.__e = ne(_2.__e, t2, _2, r, l4, o4, s6, p7);
    (a4 = d.diffed) && a4(t2);
  } catch (A4) {
    t2.__v = null, (p7 || o4 != null) && (t2.__e = f3, t2.__h = !!p7, o4[o4.indexOf(f3)] = null), d.__e(A4, t2, _2);
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
function ne(e3, t2, _2, r, l4, o4, s6, f3) {
  var p7, a4, n3, h3 = _2.props, c3 = t2.props, i4 = t2.type, u4 = 0;
  if (i4 === "svg" && (l4 = true), o4 != null) {
    for (; u4 < o4.length; u4++)
      if ((p7 = o4[u4]) && "setAttribute" in p7 == !!i4 && (i4 ? p7.localName === i4 : p7.nodeType === 3)) {
        e3 = p7, o4[u4] = null;
        break;
      }
  }
  if (e3 == null) {
    if (i4 === null)
      return document.createTextNode(c3);
    e3 = l4 ? document.createElementNS("http://www.w3.org/2000/svg", i4) : document.createElement(i4, c3.is && c3), o4 = null, f3 = false;
  }
  if (i4 === null)
    h3 === c3 || f3 && e3.data === c3 || (e3.data = c3);
  else {
    if (o4 = o4 && P.call(e3.childNodes), a4 = (h3 = _2.props || T).dangerouslySetInnerHTML, n3 = c3.dangerouslySetInnerHTML, !f3) {
      if (o4 != null)
        for (h3 = {}, u4 = 0; u4 < e3.attributes.length; u4++)
          h3[e3.attributes[u4].name] = e3.attributes[u4].value;
      (n3 || a4) && (n3 && (a4 && n3.__html == a4.__html || n3.__html === e3.innerHTML) || (e3.innerHTML = n3 && n3.__html || ""));
    }
    if (_e(e3, c3, h3, l4, f3), n3)
      t2.__k = [];
    else if (u4 = t2.props.children, G(e3, Array.isArray(u4) ? u4 : [u4], t2, _2, r, l4 && i4 !== "foreignObject", o4, s6, o4 ? o4[0] : _2.__k && C(_2, 0), f3), o4 != null)
      for (u4 = o4.length; u4--; )
        o4[u4] != null && j(o4[u4]);
    f3 || ("value" in c3 && (u4 = c3.value) !== void 0 && (u4 !== e3.value || i4 === "progress" && !u4 || i4 === "option" && u4 !== h3.value) && N(e3, "value", u4, h3.value, false), "checked" in c3 && (u4 = c3.checked) !== void 0 && u4 !== e3.checked && N(e3, "checked", u4, h3.checked, false));
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
  var r, l4;
  if (d.unmount && d.unmount(e3), (r = e3.ref) && (r.current && r.current !== e3.__e || Q(r, null, t2)), (r = e3.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o4) {
        d.__e(o4, t2);
      }
    r.base = r.__P = null, e3.__c = void 0;
  }
  if (r = e3.__k)
    for (l4 = 0; l4 < r.length; l4++)
      r[l4] && X(r[l4], t2, typeof e3.type != "function");
  _2 || e3.__e == null || j(e3.__e), e3.__ = e3.__e = e3.__d = void 0;
}
function oe(e3, t2, _2) {
  return this.constructor(e3, _2);
}
function re(e3, t2, _2) {
  var r, l4, o4;
  d.__ && d.__(e3, t2), l4 = (r = typeof _2 == "function") ? null : _2 && _2.__k || t2.__k, o4 = [], W(t2, e3 = (!r && _2 || t2).__k = ee(L, null, [e3]), l4 || T, T, t2.ownerSVGElement !== void 0, !r && _2 ? [_2] : l4 ? null : t2.firstChild ? P.call(t2.childNodes) : null, o4, !r && _2 ? _2 : l4 ? l4.__e : t2.firstChild, r), K(o4, e3);
}
P = V.slice, d = { __e: function(e3, t2, _2, r) {
  for (var l4, o4, s6; t2 = t2.__; )
    if ((l4 = t2.__c) && !l4.__)
      try {
        if ((o4 = l4.constructor) && o4.getDerivedStateFromError != null && (l4.setState(o4.getDerivedStateFromError(e3)), s6 = l4.__d), l4.componentDidCatch != null && (l4.componentDidCatch(e3, r || {}), s6 = l4.__d), s6)
          return l4.__E = l4;
      } catch (f3) {
        e3 = f3;
      }
  throw e3;
} }, $ = 0, Y = function(e3) {
  return e3 != null && e3.constructor === void 0;
}, U.prototype.setState = function(e3, t2) {
  var _2;
  _2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k({}, this.state), typeof e3 == "function" && (e3 = e3(k({}, _2), this.props)), e3 && k(_2, e3), e3 != null && this.__v && (t2 && this.__h.push(t2), M(this));
}, U.prototype.forceUpdate = function(e3) {
  this.__v && (this.__e = true, e3 && this.__h.push(e3), M(this));
}, U.prototype.render = L, S = [], D.__r = 0, B = 0;

// https://esm.sh/stable/preact@10.11.0/deno/hooks.js
var i;
var n;
var d2;
var N2;
var f = 0;
var q2 = [];
var l = [];
var V2 = d.__b;
var g = d.__r;
var b = d.diffed;
var C2 = d.__c;
var A = d.unmount;
function a(_2, t2) {
  d.__h && d.__h(n, _2, f || t2), f = 0;
  var u4 = n.__H || (n.__H = { __: [], __h: [] });
  return _2 >= u4.__.length && u4.__.push({ __V: l }), u4.__[_2];
}
function w2(_2) {
  return f = 5, x(function() {
    return { current: _2 };
  }, []);
}
function x(_2, t2) {
  var u4 = a(i++, 7);
  return H(u4.__H, t2) ? (u4.__V = _2(), u4.i = t2, u4.__h = _2, u4.__V) : u4.__;
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
  t2 && (d2 === n ? (t2.__h = [], n.__h = [], t2.__.forEach(function(u4) {
    u4.__N && (u4.__ = u4.__N), u4.__V = l, u4.__N = u4.i = void 0;
  })) : (t2.__h.forEach(m), t2.__h.forEach(p), t2.__h = [])), d2 = n;
}, d.diffed = function(_2) {
  b && b(_2);
  var t2 = _2.__c;
  t2 && t2.__H && (t2.__H.__h.length && (q2.push(t2) !== 1 && N2 === d.requestAnimationFrame || ((N2 = d.requestAnimationFrame) || S2)(R2)), t2.__H.__.forEach(function(u4) {
    u4.i && (u4.__H = u4.i), u4.__V !== l && (u4.__ = u4.__V), u4.i = void 0, u4.__V = l;
  })), d2 = n = null;
}, d.__c = function(_2, t2) {
  t2.some(function(u4) {
    try {
      u4.__h.forEach(m), u4.__h = u4.__h.filter(function(o4) {
        return !o4.__ || p(o4);
      });
    } catch (o4) {
      t2.some(function(r) {
        r.__h && (r.__h = []);
      }), t2 = [], d.__e(o4, u4.__v);
    }
  }), C2 && C2(_2, t2);
}, d.unmount = function(_2) {
  A && A(_2);
  var t2, u4 = _2.__c;
  u4 && u4.__H && (u4.__H.__.forEach(function(o4) {
    try {
      m(o4);
    } catch (r) {
      t2 = r;
    }
  }), u4.__H = void 0, t2 && d.__e(t2, u4.__v));
};
var F2 = typeof requestAnimationFrame == "function";
function S2(_2) {
  var t2, u4 = function() {
    clearTimeout(o4), F2 && cancelAnimationFrame(t2), setTimeout(_2);
  }, o4 = setTimeout(u4, 100);
  F2 && (t2 = requestAnimationFrame(u4));
}
function m(_2) {
  var t2 = n, u4 = _2.__c;
  typeof u4 == "function" && (_2.__c = void 0, u4()), n = t2;
}
function p(_2) {
  var t2 = n;
  _2.__c = _2.__(), n = t2;
}
function H(_2, t2) {
  return !_2 || _2.length !== t2.length || t2.some(function(u4, o4) {
    return u4 !== _2[o4];
  });
}

// https://esm.sh/v103/memoize-one@6.0.0/deno/memoize-one.js
var s = Number.isNaN || function(r) {
  return typeof r == "number" && r !== r;
};

// https://esm.sh/v103/@twind/core@1.0.1/deno/core.js
var F3;
function lt(t2) {
  return [...t2.v, (t2.i ? "!" : "") + t2.n].join(":");
}
function st(t2, e3 = ",") {
  return t2.map(lt).join(e3);
}
var W2 = typeof CSS < "u" && CSS.escape || ((t2) => t2.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
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
function D2() {
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
function at({ n: t2, i: e3, v: r = [] }, n3, i4, l4) {
  for (let a4 of (t2 && (t2 = lt({ n: t2, i: e3, v: r })), l4 = [...x2(l4)], r)) {
    let s6 = n3.theme("screens", a4);
    for (let u4 of x2(s6 && kt(s6) || n3.v(a4))) {
      var o4;
      l4.push(u4), i4 |= s6 ? 67108864 | X2(u4) : a4 == "dark" ? 1073741824 : u4[0] == "@" ? X2(u4) : (o4 = u4, 1 << ~(/:([a-z-]+)/.test(o4) && ~qt.indexOf(RegExp.$1.slice(2, 7)) || -18));
    }
  }
  return { n: t2, p: i4, r: l4, i: e3 };
}
var ut = /* @__PURE__ */ new Map();
function tt(t2) {
  if (t2.d) {
    let e3 = [], r = Y2(t2.r.reduce((n3, i4) => i4[0] == "@" ? (e3.push(i4), n3) : i4 ? Y2(n3, (l4) => Y2(i4, (o4) => {
      let a4 = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o4);
      if (a4) {
        let s6 = l4.indexOf(a4[1]);
        return ~s6 ? l4.slice(0, s6) + a4[0] + l4.slice(s6 + a4[1].length) : Z2(l4, o4);
      }
      return Z2(o4, l4);
    })) : n3, "&"), (n3) => Z2(n3, t2.n ? "." + W2(t2.n) : ""));
    return r && e3.push(r.replace(/:merge\((.+?)\)/g, "$1")), e3.reduceRight((n3, i4) => i4 + "{" + n3 + "}", t2.d);
  }
}
function Y2(t2, e3) {
  return t2.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r, n3, i4) => e3(n3) + i4);
}
function Z2(t2, e3) {
  return t2.replace(/&/g, e3);
}
var Dt = new Intl.Collator("en", { numeric: true });
function St(t2, e3) {
  for (var r = 0, n3 = t2.length; r < n3; ) {
    let i4 = n3 + r >> 1;
    0 >= Mt(t2[i4], e3) ? r = i4 + 1 : n3 = i4;
  }
  return n3;
}
function Mt(t2, e3) {
  let r = t2.p & w3.o;
  return r == (e3.p & w3.o) && (r == w3.b || r == w3.o) ? 0 : t2.p - e3.p || t2.o - e3.o || Dt.compare(t2.n, e3.n);
}
function H2(t2, e3) {
  return Math.round(parseInt(t2, 16) * e3);
}
function T2(t2, e3 = {}) {
  if (typeof t2 == "function")
    return t2(e3);
  let { opacityValue: r = "1", opacityVariable: n3 } = e3, i4 = n3 ? `var(${n3})` : r;
  if (t2.includes("<alpha-value>"))
    return t2.replace("<alpha-value>", i4);
  if (t2[0] == "#" && (t2.length == 4 || t2.length == 7)) {
    let l4 = (t2.length - 1) / 3, o4 = [17, 1, 0.062272][l4 - 1];
    return `rgba(${[H2(t2.substr(1, l4), o4), H2(t2.substr(1 + l4, l4), o4), H2(t2.substr(1 + 2 * l4, l4), o4), i4]})`;
  }
  return i4 == "1" ? t2 : i4 == "0" ? "#0000" : t2.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${i4})`);
}
function ct(t2, e3, r, n3, i4 = []) {
  return function l4(o4, { n: a4, p: s6, r: u4 = [], i: f3 }, c3) {
    let p7 = [], d4 = "", v4 = 0, g5 = 0;
    for (let h3 in o4 || {}) {
      var y4, A4;
      let b5 = o4[h3];
      if (h3[0] == "@") {
        if (!b5)
          continue;
        if (h3[1] == "a") {
          p7.push(...ht(a4, s6, N3("" + b5), c3, s6, u4, f3, true));
          continue;
        }
        if (h3[1] == "l") {
          for (let m4 of x2(b5))
            p7.push(...l4(m4, { n: a4, p: (y4 = w3[h3[7]], s6 & ~w3.o | y4), r: u4, i: f3 }, c3));
          continue;
        }
        if (h3[1] == "i") {
          p7.push(...x2(b5).map((m4) => ({ p: -1, o: 0, r: [], d: h3 + " " + m4 })));
          continue;
        }
        if (h3[1] == "k") {
          p7.push({ p: w3.d, o: 0, r: [h3], d: l4(b5, { p: w3.d }, c3).map(tt).join("") });
          continue;
        }
        if (h3[1] == "f") {
          p7.push(...x2(b5).map((m4) => ({ p: w3.d, o: 0, r: [h3], d: l4(m4, { p: w3.d }, c3).map(tt).join("") })));
          continue;
        }
      }
      if (typeof b5 != "object" || Array.isArray(b5))
        h3 == "label" && b5 ? a4 = b5 + V3(JSON.stringify([s6, f3, o4])) : (b5 || b5 === 0) && (h3 = h3.replace(/[A-Z]/g, (m4) => "-" + m4.toLowerCase()), g5 += 1, v4 = Math.max(v4, (A4 = h3)[0] == "-" ? 0 : jt(A4) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(A4) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), d4 += (d4 ? ";" : "") + x2(b5).map((m4) => c3.s(h3, ft("" + m4, c3.theme) + (f3 ? " !important" : ""))).join(";"));
      else if (h3[0] == "@" || h3.includes("&")) {
        let m4 = s6;
        h3[0] == "@" && (h3 = h3.replace(/\bscreen\(([^)]+)\)/g, (C6, $4) => {
          let j5 = c3.theme("screens", $4);
          return j5 ? (m4 |= 67108864, kt(j5, "")) : C6;
        }), m4 |= X2(h3)), p7.push(...l4(b5, { n: a4, p: m4, r: [...u4, h3], i: f3 }, c3));
      } else
        p7.push(...l4(b5, { p: s6, r: [...u4, h3] }, c3));
    }
    return p7.unshift({ n: a4, p: s6, o: Math.max(0, 15 - g5) + 1.5 * Math.min(v4 || 15, 15), r: u4, d: d4 }), p7.sort(Mt);
  }(t2, at(e3, r, n3, i4), r);
}
function ft(t2, e3) {
  return t2.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r, n3, i4, l4, o4) => {
    let a4 = e3(i4, o4);
    return typeof a4 == "function" && /color|fill|stroke/i.test(i4) ? T2(a4) : "" + a4;
  });
}
function pt(t2, e3) {
  let r, n3 = [];
  for (let i4 of t2)
    i4.d && i4.n ? r?.p == i4.p && "" + r.r == "" + i4.r ? (r.c = [r.c, i4.c].filter(Boolean).join(" "), r.d = r.d + ";" + i4.d) : n3.push(r = { ...i4, n: i4.n && e3 }) : n3.push({ ...i4, n: i4.n && e3 });
  return n3;
}
function B2(t2, e3, r = w3.u, n3, i4) {
  let l4 = [];
  for (let o4 of t2)
    for (let a4 of function(s6, u4, f3, c3, p7) {
      var d4;
      s6 = { ...s6, i: s6.i || p7 };
      let v4 = function(g5, y4) {
        let A4 = ut.get(g5.n);
        return A4 ? A4(g5, y4) : y4.r(g5.n, g5.v[0] == "dark");
      }(s6, u4);
      return v4 ? typeof v4 == "string" ? ({ r: c3, p: f3 } = at(s6, u4, f3, c3), pt(B2(N3(v4), u4, f3, c3, s6.i), s6.n)) : Array.isArray(v4) ? v4.map((g5) => {
        var y4, A4;
        return { o: 0, ...g5, r: [...x2(c3), ...x2(g5.r)], p: (y4 = f3, A4 = (d4 = g5.p) != null ? d4 : f3, y4 & ~w3.o | A4) };
      }) : ct(v4, s6, u4, f3, c3) : [{ c: lt(s6), p: 0, o: 0, r: [] }];
    }(o4, e3, r, n3, i4))
      l4.splice(St(l4, a4), 0, a4);
  return l4;
}
function ht(t2, e3, r, n3, i4, l4, o4, a4) {
  return pt((a4 ? r.flatMap((s6) => B2([s6], n3, i4, l4, o4)) : B2(r, n3, i4, l4, o4)).map((s6) => s6.p & w3.o && (s6.n || e3 == w3.b) ? { ...s6, p: s6.p & ~w3.o | e3, o: 0 } : s6), t2);
}
function Ot(t2, e3, r, n3) {
  var i4;
  return i4 = (l4, o4) => {
    let { n: a4, p: s6, r: u4, i: f3 } = at(l4, o4, e3);
    return r && ht(a4, e3, r, o4, s6, u4, f3, n3);
  }, ut.set(t2, i4), t2;
}
function K2(t2, e3) {
  if (t2[t2.length - 1] != "(") {
    let r = [], n3 = false, i4 = false, l4 = "";
    for (let o4 of t2)
      if (!(o4 == "(" || /[~@]$/.test(o4))) {
        if (o4[0] == "!" && (o4 = o4.slice(1), n3 = !n3), o4.endsWith(":")) {
          r[o4 == "dark:" ? "unshift" : "push"](o4.slice(0, -1));
          continue;
        }
        o4[0] == "-" && (o4 = o4.slice(1), i4 = !i4), o4.endsWith("-") && (o4 = o4.slice(0, -1)), o4 && o4 != "&" && (l4 += (l4 && "-") + o4);
      }
    l4 && (i4 && (l4 = "-" + l4), e3[0].push({ n: l4, v: r.filter(Jt), i: n3 }));
  }
}
function Jt(t2, e3, r) {
  return r.indexOf(t2) == e3;
}
var yt = /* @__PURE__ */ new Map();
function N3(t2) {
  let e3 = yt.get(t2);
  if (!e3) {
    let r = [], n3 = [[]], i4 = 0, l4 = 0, o4 = null, a4 = 0, s6 = (u4, f3 = 0) => {
      i4 != a4 && (r.push(t2.slice(i4, a4 + f3)), u4 && K2(r, n3)), i4 = a4 + 1;
    };
    for (; a4 < t2.length; a4++) {
      let u4 = t2[a4];
      if (l4)
        t2[a4 - 1] != "\\" && (l4 += +(u4 == "[") || -(u4 == "]"));
      else if (u4 == "[")
        l4 += 1;
      else if (o4)
        t2[a4 - 1] != "\\" && o4.test(t2.slice(a4)) && (o4 = null, i4 = a4 + RegExp.lastMatch.length);
      else if (u4 == "/" && t2[a4 - 1] != "\\" && (t2[a4 + 1] == "*" || t2[a4 + 1] == "/"))
        o4 = t2[a4 + 1] == "*" ? /^\*\// : /^[\r\n]/;
      else if (u4 == "(")
        s6(), r.push(u4);
      else if (u4 == ":")
        t2[a4 + 1] != ":" && s6(false, 1);
      else if (/[\s,)]/.test(u4)) {
        s6(true);
        let f3 = r.lastIndexOf("(");
        if (u4 == ")") {
          let c3 = r[f3 - 1];
          if (/[~@]$/.test(c3)) {
            let p7 = n3.shift();
            r.length = f3, K2([...r, "#"], n3);
            let { v: d4 } = n3[0].pop();
            for (let v4 of p7)
              v4.v.splice(+(v4.v[0] == "dark") - +(d4[0] == "dark"), d4.length);
            K2([...r, Ot(c3.length > 1 ? c3.slice(0, -1) + V3(JSON.stringify([c3, p7])) : c3 + "(" + st(p7) + ")", w3.a, p7, /@$/.test(c3))], n3);
          }
          f3 = r.lastIndexOf("(", f3 - 1);
        }
        r.length = f3 + 1;
      } else
        /[~@]/.test(u4) && t2[a4 + 1] == "(" && n3.unshift([]);
    }
    s6(true), yt.set(t2, e3 = n3[0]);
  }
  return e3;
}
function Ct(t2, e3, r) {
  return e3.reduce((n3, i4, l4) => n3 + r(i4) + t2[l4 + 1], t2[0]);
}
function G2(t2, e3) {
  return Array.isArray(t2) && Array.isArray(t2.raw) ? Ct(t2, e3, (r) => Q2(r).trim()) : e3.filter(Boolean).reduce((r, n3) => r + Q2(n3), t2 ? Q2(t2) : "");
}
function Q2(t2) {
  let e3, r = "";
  if (t2 && typeof t2 == "object")
    if (Array.isArray(t2))
      (e3 = G2(t2[0], t2.slice(1))) && (r += " " + e3);
    else
      for (let n3 in t2)
        t2[n3] && (r += " " + n3);
  else
    t2 != null && typeof t2 != "boolean" && (r += " " + t2);
  return r;
}
var ae = Et("@");
var ue = Et("~");
function Et(t2) {
  return new Proxy(function(r, ...n3) {
    return e3("", r, n3);
  }, { get: (r, n3) => n3 in r ? r[n3] : function(i4, ...l4) {
    return e3(n3, i4, l4);
  } });
  function e3(r, n3, i4) {
    return st(N3(r + t2 + "(" + G2(n3, i4) + ")"));
  }
}
function U2(t2, e3) {
  return Array.isArray(t2) ? mt(Ct(t2, e3, (r) => r != null && typeof r != "boolean" ? r : "")) : typeof t2 == "string" ? mt(t2) : [t2];
}
var Bt = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
function mt(t2) {
  let e3;
  t2 = t2.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
  let r = [{}], n3 = [r[0]], i4 = [];
  for (; e3 = Bt.exec(t2); )
    e3[4] && (r.shift(), i4.shift()), e3[3] ? (i4.unshift(e3[3]), r.unshift({}), n3.push(i4.reduce((l4, o4) => ({ [o4]: l4 }), r[0]))) : e3[4] || (r[0][e3[1]] && (r.unshift({}), n3.push(i4.reduce((l4, o4) => ({ [o4]: l4 }), r[0]))), r[0][e3[1]] = e3[2]);
  return n3;
}
function dt(t2, ...e3) {
  var r, n3;
  let i4 = U2(t2, e3), l4 = (((r = i4.find((o4) => o4.label)) == null ? void 0 : r.label) || "css") + V3(JSON.stringify(i4));
  return n3 = (o4, a4) => pt(i4.flatMap((s6) => ct(s6, o4, a4, w3.o)), l4), ut.set(l4, n3), l4;
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
var z2 = new Proxy(D2, { apply: (t2, e3, r) => F3(r[0]), get(t2, e3) {
  let r = F3[e3];
  return typeof r == "function" ? function() {
    return r.apply(F3, arguments);
  } : r;
} });
var xe = function t(e3) {
  return new Proxy(function(r, ...n3) {
    return xt(e3, "", r, n3);
  }, { get: (r, n3) => n3 === "bind" ? t : n3 in r ? r[n3] : function(i4, ...l4) {
    return xt(e3, n3, i4, l4);
  } });
}();
function xt(t2, e3, r, n3) {
  return { toString() {
    let i4 = U2(r, n3), l4 = W2(e3 + V3(JSON.stringify([e3, i4])));
    return (typeof t2 == "function" ? t2 : z2)(dt({ [`@keyframes ${l4}`]: U2(r, n3) })), l4;
  } };
}

// https://esm.sh/v103/@twind/preset-tailwind@1.0.1/deno/defaultTheme.js
var s3 = "inherit";
var d3 = "currentColor";
var p2 = "transparent";
var x3 = "#000";
var b2 = "#fff";
var u = { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a" };
var g2 = { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827" };
var h = { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b" };
var y2 = { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717" };
var k2 = { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917" };
var C3 = { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d" };
var T3 = { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12" };
var F4 = { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f" };
var w4 = { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12" };
var A2 = { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314" };
var D3 = { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d" };
var U3 = { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b" };
var E = { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a" };
var L2 = { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63" };
var S3 = { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e" };
var v = { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" };
var z3 = { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81" };
var O2 = { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95" };
var R3 = { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87" };
var W3 = { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75" };
var I2 = { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843" };
var M2 = { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337" };
var l2 = { __proto__: null, inherit: s3, current: d3, transparent: p2, black: x3, white: b2, slate: u, gray: g2, zinc: h, neutral: y2, stone: k2, red: C3, orange: T3, amber: F4, yellow: w4, lime: A2, green: D3, emerald: U3, teal: E, cyan: L2, sky: S3, blue: v, indigo: z3, violet: O2, purple: R3, fuchsia: W3, pink: I2, rose: M2 };
var H3 = { screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" }, colors: l2, columns: { auto: "auto", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem" }, spacing: { px: "1px", 0: "0px", ...a2(4, "rem", 4, 0.5, 0.5), ...a2(12, "rem", 4, 5), 14: "3.5rem", ...a2(64, "rem", 4, 16, 4), 72: "18rem", 80: "20rem", 96: "24rem" }, durations: { 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0,0,0.2,1) infinite", pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite", bounce: "bounce 1s infinite" }, aspectRatio: { auto: "auto", square: "1/1", video: "16/9" }, backdropBlur: o3("blur"), backdropBrightness: o3("brightness"), backdropContrast: o3("contrast"), backdropGrayscale: o3("grayscale"), backdropHueRotate: o3("hueRotate"), backdropInvert: o3("invert"), backdropOpacity: o3("opacity"), backdropSaturate: o3("saturate"), backdropSepia: o3("sepia"), backgroundColor: o3("colors"), backgroundImage: { none: "none" }, backgroundOpacity: o3("opacity"), backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { none: "none", 0: "0", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, brightness: { ...a2(200, "", 100, 0, 50), ...a2(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, borderColor: ({ theme: e3 }) => ({ DEFAULT: e3("colors.gray.200", "currentColor"), ...e3("colors") }), borderOpacity: o3("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", "1/2": "50%", full: "9999px" }, borderSpacing: o3("spacing"), borderWidth: { DEFAULT: "1px", ...n2(8, "px") }, boxShadow: { sm: "0 1px 2px 0 rgba(0,0,0,0.05)", DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)", md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)", lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)", xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)", "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)", inner: "inset 0 2px 4px 0 rgba(0,0,0,0.05)", none: "0 0 #0000" }, boxShadowColor: o3("colors"), caretColor: o3("colors"), accentColor: ({ theme: e3 }) => ({ auto: "auto", ...e3("colors") }), contrast: { ...a2(200, "", 100, 0, 50), 75: "0.75", 125: "1.25" }, content: { none: "none" }, divideColor: o3("borderColor"), divideOpacity: o3("borderOpacity"), divideWidth: o3("borderWidth"), dropShadow: { sm: "0 1px 1px rgba(0,0,0,0.05)", DEFAULT: ["0 1px 2px rgba(0,0,0,0.1)", "0 1px 1px rgba(0,0,0,0.06)"], md: ["0 4px 3px rgba(0,0,0,0.07)", "0 2px 2px rgba(0,0,0,0.06)"], lg: ["0 10px 8px rgba(0,0,0,0.04)", "0 4px 3px rgba(0,0,0,0.1)"], xl: ["0 20px 13px rgba(0,0,0,0.03)", "0 8px 5px rgba(0,0,0,0.08)"], "2xl": "0 25px 25px rgba(0,0,0,0.15)", none: "0 0 #0000" }, fill: o3("colors"), grayscale: { DEFAULT: "100%", 0: "0" }, hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg" }, invert: { DEFAULT: "100%", 0: "0" }, flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: e3 }) => ({ ...e3("spacing"), ...i2(2, 6), ...i2(12, 12), auto: "auto", full: "100%" }), flexGrow: { DEFAULT: 1, 0: 0 }, flexShrink: { DEFAULT: 1, 0: 0 }, fontFamily: { sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","), serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","), mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",") }, fontSize: { xs: ["0.75rem", "1rem"], sm: ["0.875rem", "1.25rem"], base: ["1rem", "1.5rem"], lg: ["1.125rem", "1.75rem"], xl: ["1.25rem", "1.75rem"], "2xl": ["1.5rem", "2rem"], "3xl": ["1.875rem", "2.25rem"], "4xl": ["2.25rem", "2.5rem"], "5xl": ["3rem", "1"], "6xl": ["3.75rem", "1"], "7xl": ["4.5rem", "1"], "8xl": ["6rem", "1"], "9xl": ["8rem", "1"] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: o3("spacing"), gradientColorStops: o3("colors"), gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridColumn: { auto: "auto", "span-full": "1 / -1" }, gridRow: { auto: "auto", "span-full": "1 / -1" }, gridTemplateColumns: { none: "none" }, gridTemplateRows: { none: "none" }, height: ({ theme: e3 }) => ({ ...e3("spacing"), ...i2(2, 6), min: "min-content", max: "max-content", fit: "fit-content", auto: "auto", full: "100%", screen: "100vh" }), inset: ({ theme: e3 }) => ({ ...e3("spacing"), ...i2(2, 4), auto: "auto", full: "100%" }), keyframes: { spin: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } }, ping: { "0%": { transform: "scale(1)", opacity: "1" }, "75%,100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { ...a2(10, "rem", 4, 3), none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2" }, margin: ({ theme: e3 }) => ({ auto: "auto", ...e3("spacing") }), maxHeight: ({ theme: e3 }) => ({ full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh", ...e3("spacing") }), maxWidth: ({ theme: e3, breakpoints: f3 }) => ({ ...f3(e3("screens")), none: "none", 0: "0rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch" }), minHeight: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh" }, minWidth: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content" }, opacity: { ...a2(100, "", 100, 0, 10), 5: "0.05", 25: "0.25", 75: "0.75", 95: "0.95" }, order: { first: "-9999", last: "9999", none: "0" }, padding: o3("spacing"), placeholderColor: o3("colors"), placeholderOpacity: o3("opacity"), outlineColor: o3("colors"), outlineOffset: n2(8, "px"), outlineWidth: n2(8, "px"), ringColor: ({ theme: e3 }) => ({ ...e3("colors"), DEFAULT: e3("colors.blue.500", "#3b82f6") }), ringOffsetColor: o3("colors"), ringOffsetWidth: n2(8, "px"), ringOpacity: ({ theme: e3 }) => ({ ...e3("opacity"), DEFAULT: "0.5" }), ringWidth: { DEFAULT: "3px", ...n2(8, "px") }, rotate: { ...n2(2, "deg"), ...n2(12, "deg", 3), ...n2(180, "deg", 45) }, saturate: a2(200, "", 100, 0, 50), scale: { ...a2(150, "", 100, 0, 50), ...a2(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, scrollMargin: o3("spacing"), scrollPadding: o3("spacing"), sepia: { 0: "0", DEFAULT: "100%" }, skew: { ...n2(2, "deg"), ...n2(12, "deg", 3) }, space: o3("spacing"), stroke: o3("colors"), strokeWidth: a2(2), textColor: o3("colors"), textDecorationColor: o3("colors"), textDecorationThickness: { "from-font": "from-font", auto: "auto", ...n2(8, "px") }, textUnderlineOffset: { auto: "auto", ...n2(8, "px") }, textIndent: o3("spacing"), textOpacity: o3("opacity"), transitionDuration: ({ theme: e3 }) => ({ ...e3("durations"), DEFAULT: "150ms" }), transitionDelay: o3("durations"), transitionProperty: { none: "none", all: "all", DEFAULT: "color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter", colors: "color,background-color,border-color,text-decoration-color,fill,stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4,0,0.2,1)", linear: "linear", in: "cubic-bezier(0.4,0,1,1)", out: "cubic-bezier(0,0,0.2,1)", "in-out": "cubic-bezier(0.4,0,0.2,1)" }, translate: ({ theme: e3 }) => ({ ...e3("spacing"), ...i2(2, 4), full: "100%" }), width: ({ theme: e3 }) => ({ min: "min-content", max: "max-content", fit: "fit-content", screen: "100vw", ...e3("flexBasis") }), willChange: { scroll: "scroll-position" }, zIndex: { ...a2(50, "", 1, 0, 10), auto: "auto" } };
function i2(e3, f3) {
  let t2 = {};
  do
    for (var r = 1; r < e3; r++)
      t2[`${r}/${e3}`] = Number((r / e3 * 100).toFixed(6)) + "%";
  while (++e3 <= f3);
  return t2;
}
function n2(e3, f3, t2 = 0) {
  let r = {};
  for (; t2 <= e3; t2 = 2 * t2 || 1)
    r[t2] = t2 + f3;
  return r;
}
function a2(e3, f3 = "", t2 = 1, r = 0, m4 = 1, c3 = {}) {
  for (; r <= e3; r += m4)
    c3[r] = r / t2 + f3;
  return c3;
}
function o3(e3) {
  return ({ theme: f3 }) => f3(e3);
}

// https://esm.sh/v103/@twind/preset-tailwind@1.0.1/deno/preflight.js
var i3 = { "*,::before,::after": { boxSizing: "border-box", borderWidth: "0", borderStyle: "solid", borderColor: "theme(borderColor.DEFAULT, currentColor)" }, "::before,::after": { "--tw-content": "''" }, html: { lineHeight: 1.5, WebkitTextSizeAdjust: "100%", MozTabSize: "4", tabSize: 4, fontFamily: `theme(fontFamily.sans, ${H3.fontFamily.sans})` }, body: { margin: "0", lineHeight: "inherit" }, hr: { height: "0", color: "inherit", borderTopWidth: "1px" }, "abbr:where([title])": { textDecoration: "underline dotted" }, "h1,h2,h3,h4,h5,h6": { fontSize: "inherit", fontWeight: "inherit" }, a: { color: "inherit", textDecoration: "inherit" }, "b,strong": { fontWeight: "bolder" }, "code,kbd,samp,pre": { fontFamily: `theme(fontFamily.mono, ${H3.fontFamily.mono})`, fontSize: "1em" }, small: { fontSize: "80%" }, "sub,sup": { fontSize: "75%", lineHeight: 0, position: "relative", verticalAlign: "baseline" }, sub: { bottom: "-0.25em" }, sup: { top: "-0.5em" }, table: { textIndent: "0", borderColor: "inherit", borderCollapse: "collapse" }, "button,input,optgroup,select,textarea": { fontFamily: "inherit", fontSize: "100%", lineHeight: "inherit", color: "inherit", margin: "0", padding: "0" }, "button,select": { textTransform: "none" }, "button,[type='button'],[type='reset'],[type='submit']": { WebkitAppearance: "button", backgroundColor: "transparent", backgroundImage: "none" }, ":-moz-focusring": { outline: "auto" }, ":-moz-ui-invalid": { boxShadow: "none" }, progress: { verticalAlign: "baseline" }, "::-webkit-inner-spin-button,::-webkit-outer-spin-button": { height: "auto" }, "[type='search']": { WebkitAppearance: "textfield", outlineOffset: "-2px" }, "::-webkit-search-decoration": { WebkitAppearance: "none" }, "::-webkit-file-upload-button": { WebkitAppearance: "button", font: "inherit" }, summary: { display: "list-item" }, "blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre": { margin: "0" }, fieldset: { margin: "0", padding: "0" }, legend: { padding: "0" }, "ol,ul,menu": { listStyle: "none", margin: "0", padding: "0" }, textarea: { resize: "vertical" }, "input::placeholder,textarea::placeholder": { opacity: 1, color: "theme(colors.gray.400, #9ca3af)" }, 'button,[role="button"]': { cursor: "pointer" }, ":disabled": { cursor: "default" }, "img,svg,video,canvas,audio,iframe,embed,object": { display: "block", verticalAlign: "middle" }, "img,video": { maxWidth: "100%", height: "auto" }, "[hidden]": { display: "none" } };

// https://esm.sh/v103/@twind/core@1.1.2/deno/core.js
var B3;
function ae2(e3) {
  return [...e3.v, (e3.i ? "!" : "") + e3.n].join(":");
}
function ue2(e3, t2 = ",") {
  return e3.map(ae2).join(t2);
}
var Y3 = typeof CSS < "u" && CSS.escape || ((e3) => e3.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
function T4(e3) {
  for (var t2 = 9, r = e3.length; r--; )
    t2 = Math.imul(t2 ^ e3.charCodeAt(r), 1597334677);
  return "#" + ((t2 ^ t2 >>> 9) >>> 0).toString(36);
}
function Ce(e3, t2 = "@media ") {
  return t2 + b3(e3).map((r) => (typeof r == "string" && (r = { min: r }), r.raw || Object.keys(r).map((i4) => `(${i4}-width:${r[i4]})`).join(" and "))).join(",");
}
function b3(e3 = []) {
  return Array.isArray(e3) ? e3 : e3 == null ? [] : [e3];
}
function F5() {
}
var S4 = { d: 0, b: 134217728, c: 268435456, a: 671088640, u: 805306368, o: 939524096 };
function Ee(e3) {
  return e3.match(/[-=:;]/g)?.length || 0;
}
function re2(e3) {
  return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e3) ? Math.max(0, 29.63 * (+RegExp.$1 / (RegExp.$2 ? 15 : 1)) ** 0.137 - 43) : 0, 15) << 22 | Math.min(Ee(e3), 15) << 18;
}
var Ue = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
function ce2({ n: e3, i: t2, v: r = [] }, i4, n3, l4) {
  e3 && (e3 = ae2({ n: e3, i: t2, v: r })), l4 = [...b3(l4)];
  for (let s6 of r) {
    let f3 = i4.theme("screens", s6);
    for (let a4 of b3(f3 && Ce(f3) || i4.v(s6))) {
      var o4;
      l4.push(a4), n3 |= f3 ? 67108864 | re2(a4) : s6 == "dark" ? 1073741824 : a4[0] == "@" ? re2(a4) : (o4 = a4, 1 << ~(/:([a-z-]+)/.test(o4) && ~Ue.indexOf(RegExp.$1.slice(2, 7)) || -18));
    }
  }
  return { n: e3, p: n3, r: l4, i: t2 };
}
var pe = /* @__PURE__ */ new Map();
function ne2(e3) {
  if (e3.d) {
    let t2 = [], r = H4(e3.r.reduce((i4, n3) => n3[0] == "@" ? (t2.push(n3), i4) : n3 ? H4(i4, (l4) => H4(n3, (o4) => {
      let s6 = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o4);
      if (s6) {
        let f3 = l4.indexOf(s6[1]);
        return ~f3 ? l4.slice(0, f3) + s6[0] + l4.slice(f3 + s6[1].length) : Q3(l4, o4);
      }
      return Q3(o4, l4);
    })) : i4, "&"), (i4) => Q3(i4, e3.n ? "." + Y3(e3.n) : ""));
    return r && t2.push(r.replace(/:merge\((.+?)\)/g, "$1")), t2.reduceRight((i4, n3) => n3 + "{" + i4 + "}", e3.d);
  }
}
function H4(e3, t2) {
  return e3.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r, i4, n3) => t2(i4) + n3);
}
function Q3(e3, t2) {
  return e3.replace(/&/g, t2);
}
var $e = new Intl.Collator("en", { numeric: true });
function Me(e3, t2) {
  for (var r = 0, i4 = e3.length; r < i4; ) {
    let n3 = i4 + r >> 1;
    0 >= Ne(e3[n3], t2) ? r = n3 + 1 : i4 = n3;
  }
  return i4;
}
function Ne(e3, t2) {
  let r = e3.p & S4.o;
  return r == (t2.p & S4.o) && (r == S4.b || r == S4.o) ? 0 : e3.p - t2.p || e3.o - t2.o || $e.compare(we(e3.n), we(t2.n)) || $e.compare(Ae(e3.n), Ae(t2.n));
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
function P2(e3, t2 = {}) {
  if (typeof e3 == "function")
    return e3(t2);
  let { opacityValue: r = "1", opacityVariable: i4 } = t2, n3 = i4 ? `var(${i4})` : r;
  if (e3.includes("<alpha-value>"))
    return e3.replace("<alpha-value>", n3);
  if (e3[0] == "#" && (e3.length == 4 || e3.length == 7)) {
    let l4 = (e3.length - 1) / 3, o4 = [17, 1, 0.062272][l4 - 1];
    return `rgba(${[X3(e3.substr(1, l4), o4), X3(e3.substr(1 + l4, l4), o4), X3(e3.substr(1 + 2 * l4, l4), o4), n3]})`;
  }
  return n3 == "1" ? e3 : n3 == "0" ? "#0000" : e3.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${n3})`);
}
function de(e3, t2, r, i4, n3 = []) {
  return function l4(o4, { n: s6, p: f3, r: a4 = [], i: c3 }, u4) {
    let p7 = [], g5 = "", h3 = 0, $4 = 0;
    for (let y4 in o4 || {}) {
      var A4, R6;
      let d4 = o4[y4];
      if (y4[0] == "@") {
        if (!d4)
          continue;
        if (y4[1] == "a") {
          p7.push(...ge(s6, f3, I3("" + d4), u4, f3, a4, c3, true));
          continue;
        }
        if (y4[1] == "l") {
          for (let w6 of b3(d4))
            p7.push(...l4(w6, { n: s6, p: (A4 = S4[y4[7]], f3 & ~S4.o | A4), r: a4, i: c3 }, u4));
          continue;
        }
        if (y4[1] == "i") {
          p7.push(...b3(d4).map((w6) => ({ p: -1, o: 0, r: [], d: y4 + " " + w6 })));
          continue;
        }
        if (y4[1] == "k") {
          p7.push({ p: S4.d, o: 0, r: [y4], d: l4(d4, { p: S4.d }, u4).map(ne2).join("") });
          continue;
        }
        if (y4[1] == "f") {
          p7.push(...b3(d4).map((w6) => ({ p: S4.d, o: 0, r: [y4], d: l4(w6, { p: S4.d }, u4).map(ne2).join("") })));
          continue;
        }
      }
      if (typeof d4 != "object" || Array.isArray(d4))
        y4 == "label" && d4 ? s6 = d4 + T4(JSON.stringify([f3, c3, o4])) : (d4 || d4 === 0) && (y4 = y4.replace(/[A-Z]/g, (w6) => "-" + w6.toLowerCase()), $4 += 1, h3 = Math.max(h3, (R6 = y4)[0] == "-" ? 0 : Ee(R6) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(R6) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), g5 += (g5 ? ";" : "") + b3(d4).map((w6) => u4.s(y4, he("" + w6, u4.theme) + (c3 ? " !important" : ""))).join(";"));
      else if (y4[0] == "@" || y4.includes("&")) {
        let w6 = f3;
        y4[0] == "@" && (y4 = y4.replace(/\bscreen\(([^)]+)\)/g, (j5, M5) => {
          let N6 = u4.theme("screens", M5);
          return N6 ? (w6 |= 67108864, Ce(N6, "")) : j5;
        }), w6 |= re2(y4)), p7.push(...l4(d4, { n: s6, p: w6, r: [...a4, y4], i: c3 }, u4));
      } else
        p7.push(...l4(d4, { p: f3, r: [...a4, y4] }, u4));
    }
    return p7.unshift({ n: s6, p: f3, o: Math.max(0, 15 - $4) + 1.5 * Math.min(h3 || 15, 15), r: a4, d: g5 }), p7.sort(Ne);
  }(e3, ce2(t2, r, i4, n3), r);
}
function he(e3, t2) {
  return e3.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r, i4, n3, l4, o4 = "") => {
    let s6 = t2(n3, o4);
    return typeof s6 == "function" && /color|fill|stroke/i.test(n3) ? P2(s6) : "" + b3(s6).filter((f3) => Object(f3) !== f3);
  });
}
function ye(e3, t2) {
  let r, i4 = [];
  for (let n3 of e3)
    n3.d && n3.n ? r?.p == n3.p && "" + r.r == "" + n3.r ? (r.c = [r.c, n3.c].filter(Boolean).join(" "), r.d = r.d + ";" + n3.d) : i4.push(r = { ...n3, n: n3.n && t2 }) : i4.push({ ...n3, n: n3.n && t2 });
  return i4;
}
function W4(e3, t2, r = S4.u, i4, n3) {
  let l4 = [];
  for (let o4 of e3)
    for (let s6 of function(f3, a4, c3, u4, p7) {
      f3 = { ...f3, i: f3.i || p7 };
      let g5 = function(h3, $4) {
        let A4 = pe.get(h3.n);
        return A4 ? A4(h3, $4) : $4.r(h3.n, h3.v[0] == "dark");
      }(f3, a4);
      return g5 ? typeof g5 == "string" ? ({ r: u4, p: c3 } = ce2(f3, a4, c3, u4), ye(W4(I3(g5), a4, c3, u4, f3.i), f3.n)) : Array.isArray(g5) ? g5.map((h3) => {
        var $4, A4;
        return { o: 0, ...h3, r: [...b3(u4), ...b3(h3.r)], p: ($4 = c3, A4 = h3.p ?? c3, $4 & ~S4.o | A4) };
      }) : de(g5, f3, a4, c3, u4) : [{ c: ae2(f3), p: 0, o: 0, r: [] }];
    }(o4, t2, r, i4, n3))
      l4.splice(Me(l4, s6), 0, s6);
  return l4;
}
function ge(e3, t2, r, i4, n3, l4, o4, s6) {
  return ye((s6 ? r.flatMap((f3) => W4([f3], i4, n3, l4, o4)) : W4(r, i4, n3, l4, o4)).map((f3) => f3.p & S4.o && (f3.n || t2 == S4.b) ? { ...f3, p: f3.p & ~S4.o | t2, o: 0 } : f3), e3);
}
function _e2(e3, t2, r, i4) {
  var n3;
  return n3 = (l4, o4) => {
    let { n: s6, p: f3, r: a4, i: c3 } = ce2(l4, o4, t2);
    return r && ge(s6, t2, r, o4, f3, a4, c3, i4);
  }, pe.set(e3, n3), e3;
}
function K3(e3, t2, r) {
  if (e3[e3.length - 1] != "(") {
    let i4 = [], n3 = false, l4 = false, o4 = "";
    for (let s6 of e3)
      if (!(s6 == "(" || /[~@]$/.test(s6))) {
        if (s6[0] == "!" && (s6 = s6.slice(1), n3 = !n3), s6.endsWith(":")) {
          i4[s6 == "dark:" ? "unshift" : "push"](s6.slice(0, -1));
          continue;
        }
        s6[0] == "-" && (s6 = s6.slice(1), l4 = !l4), s6.endsWith("-") && (s6 = s6.slice(0, -1)), s6 && s6 != "&" && (o4 += (o4 && "-") + s6);
      }
    o4 && (l4 && (o4 = "-" + o4), t2[0].push({ n: o4, v: i4.filter(Be), i: n3 }));
  }
}
function Be(e3, t2, r) {
  return r.indexOf(e3) == t2;
}
var Se = /* @__PURE__ */ new Map();
function I3(e3) {
  let t2 = Se.get(e3);
  if (!t2) {
    let r = [], i4 = [[]], n3 = 0, l4 = 0, o4 = null, s6 = 0, f3 = (a4, c3 = 0) => {
      n3 != s6 && (r.push(e3.slice(n3, s6 + c3)), a4 && K3(r, i4)), n3 = s6 + 1;
    };
    for (; s6 < e3.length; s6++) {
      let a4 = e3[s6];
      if (l4)
        e3[s6 - 1] != "\\" && (l4 += +(a4 == "[") || -(a4 == "]"));
      else if (a4 == "[")
        l4 += 1;
      else if (o4)
        e3[s6 - 1] != "\\" && o4.test(e3.slice(s6)) && (o4 = null, n3 = s6 + RegExp.lastMatch.length);
      else if (a4 == "/" && e3[s6 - 1] != "\\" && (e3[s6 + 1] == "*" || e3[s6 + 1] == "/"))
        o4 = e3[s6 + 1] == "*" ? /^\*\// : /^[\r\n]/;
      else if (a4 == "(")
        f3(), r.push(a4);
      else if (a4 == ":")
        e3[s6 + 1] != ":" && f3(false, 1);
      else if (/[\s,)]/.test(a4)) {
        f3(true);
        let c3 = r.lastIndexOf("(");
        if (a4 == ")") {
          let u4 = r[c3 - 1];
          if (/[~@]$/.test(u4)) {
            let p7 = i4.shift();
            r.length = c3, K3([...r, "#"], i4);
            let { v: g5 } = i4[0].pop();
            for (let h3 of p7)
              h3.v.splice(+(h3.v[0] == "dark") - +(g5[0] == "dark"), g5.length);
            K3([...r, _e2(u4.length > 1 ? u4.slice(0, -1) + T4(JSON.stringify([u4, p7])) : u4 + "(" + ue2(p7) + ")", S4.a, p7, /@$/.test(u4))], i4);
          }
          c3 = r.lastIndexOf("(", c3 - 1);
        }
        r.length = c3 + 1;
      } else
        /[~@]/.test(a4) && e3[s6 + 1] == "(" && i4.unshift([]);
    }
    f3(true), Se.set(e3, t2 = i4[0]);
  }
  return t2;
}
function Ve(e3, t2, r) {
  return t2.reduce((i4, n3, l4) => i4 + r(n3) + e3[l4 + 1], e3[0]);
}
function Z3(e3, t2) {
  return Array.isArray(e3) && Array.isArray(e3.raw) ? Ve(e3, t2, (r) => ee2(r).trim()) : t2.filter(Boolean).reduce((r, i4) => r + ee2(i4), e3 ? ee2(e3) : "");
}
function ee2(e3) {
  let t2, r = "";
  if (e3 && typeof e3 == "object")
    if (Array.isArray(e3))
      (t2 = Z3(e3[0], e3.slice(1))) && (r += " " + t2);
    else
      for (let i4 in e3)
        e3[i4] && (r += " " + i4);
  else
    e3 != null && typeof e3 != "boolean" && (r += " " + e3);
  return r;
}
var pt2 = ze("@");
var dt2 = ze("~");
function ze(e3) {
  return new Proxy(function(i4, ...n3) {
    return t2("", i4, n3);
  }, { get(r, i4) {
    return i4 in r ? r[i4] : function(l4, ...o4) {
      return t2(i4, l4, o4);
    };
  } });
  function t2(r, i4, n3) {
    return ue2(I3(r + e3 + "(" + Z3(i4, n3) + ")"));
  }
}
function G3(e3, t2) {
  return Array.isArray(e3) ? ve(Ve(e3, t2, (r) => r != null && typeof r != "boolean" ? r : "")) : typeof e3 == "string" ? ve(e3) : [e3];
}
var We = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
function ve(e3) {
  let t2;
  e3 = e3.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
  let r = [{}], i4 = [r[0]], n3 = [];
  for (; t2 = We.exec(e3); )
    t2[4] && (r.shift(), n3.shift()), t2[3] ? (n3.unshift(t2[3]), r.unshift({}), i4.push(n3.reduce((l4, o4) => ({ [o4]: l4 }), r[0]))) : t2[4] || (r[0][t2[1]] && (r.unshift({}), i4.push(n3.reduce((l4, o4) => ({ [o4]: l4 }), r[0]))), r[0][t2[1]] = t2[2]);
  return i4;
}
function me(e3, ...t2) {
  var r;
  let i4 = G3(e3, t2), n3 = (i4.find((l4) => l4.label)?.label || "css") + T4(JSON.stringify(i4));
  return r = (l4, o4) => ye(i4.flatMap((s6) => de(s6, l4, o4, S4.o)), n3), pe.set(n3, r), n3;
}
var ht2 = new Proxy(function(e3, t2) {
  return Re("animation", e3, t2);
}, { get(e3, t2) {
  return t2 in e3 ? e3[t2] : function(i4, n3) {
    return Re(t2, i4, n3);
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
  return typeof e3 == "function" ? e3 : typeof e3 == "string" && /^[\w-]+$/.test(e3) ? (r, i4) => ({ [e3]: t2 ? t2(r, i4) : le(r, 1) }) : (r) => e3 || { [r[1]]: le(r, 2) };
}
function le(e3, t2, r = e3.slice(t2).find(Boolean) || e3.$$ || e3.input) {
  return e3.input[0] == "-" ? `calc(${r} * -1)` : r;
}
function gt(e3, t2, r, i4) {
  return [e3, Ge(t2, r, i4)];
}
function Ge(e3, t2, r) {
  let i4 = typeof t2 == "string" ? (n3, l4) => ({ [t2]: r ? r(n3, l4) : n3._ }) : t2 || (({ 1: n3, _: l4 }, o4, s6) => ({ [n3 || s6]: l4 }));
  return (n3, l4) => {
    let o4 = ke(e3 || n3[1]), s6 = l4.theme(o4, n3.$$) ?? oe2(n3.$$, o4, l4);
    if (s6 != null)
      return n3._ = le(n3, 0, s6), i4(n3, l4, o4);
  };
}
function mt2(e3, t2 = {}, r) {
  return [e3, Ye(t2, r)];
}
function Ye(e3 = {}, t2) {
  return (r, i4) => {
    let { section: n3 = ke(r[0]).replace("-", "") + "Color" } = e3, [l4, o4] = Ze(r.$$);
    if (!l4)
      return;
    let s6 = i4.theme(n3, l4) || oe2(l4, n3, i4);
    if (!s6 || typeof s6 == "object")
      return;
    let { opacityVariable: f3 = `--tw-${r[0].replace(/-$/, "")}-opacity`, opacitySection: a4 = n3.replace("Color", "Opacity"), property: c3 = n3, selector: u4 } = e3, p7 = i4.theme(a4, o4 || "DEFAULT") || o4 && oe2(o4, a4, i4), g5 = t2 || (({ _: $4 }) => {
      let A4 = He(c3, $4);
      return u4 ? { [u4]: A4 } : A4;
    });
    r._ = { value: P2(s6, { opacityVariable: f3 || void 0, opacityValue: p7 || void 0 }), color: ($4) => P2(s6, $4), opacityVariable: f3 || void 0, opacityValue: p7 || void 0 };
    let h3 = g5(r, i4);
    if (!r.dark) {
      let $4 = i4.d(n3, l4, s6);
      $4 && $4 !== s6 && (r._ = { value: P2($4, { opacityVariable: f3 || void 0, opacityValue: p7 || "1" }), color: (A4) => P2($4, A4), opacityVariable: f3 || void 0, opacityValue: p7 || void 0 }, h3 = { "&": h3, [i4.v("dark")]: g5(r, i4) });
    }
    return h3;
  };
}
function Ze(e3) {
  return (e3.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/) || []).slice(1);
}
function He(e3, t2) {
  let r = {};
  return typeof t2 == "string" ? r[e3] = t2 : (t2.opacityVariable && t2.value.includes(t2.opacityVariable) && (r[t2.opacityVariable] = t2.opacityValue || "1"), r[e3] = t2.value), r;
}
function oe2(e3, t2, r) {
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
  return e3.includes("url(") ? e3.replace(/(.*?)(url\(.*?\))(.*?)/g, (t2, r = "", i4, n3 = "") => se(r) + i4 + se(n3)) : e3.replace(/(^|[^\\])_+/g, (t2, r) => r + " ".repeat(t2.length - r.length)).replace(/\\_/g, "_").replace(/(calc|min|max|clamp)\(.+\)/g, (t2) => t2.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 "));
}
var Qe = Symbol();
var D4 = new Proxy(F5, { apply(e3, t2, r) {
  return B3(r[0]);
}, get(e3, t2) {
  let r = B3[t2];
  return typeof r == "function" ? function() {
    return r.apply(B3, arguments);
  } : r;
} });
var Rt = function e2(t2) {
  return new Proxy(function(i4, ...n3) {
    return xe2(t2, "", i4, n3);
  }, { get(r, i4) {
    return i4 === "bind" ? e2 : i4 in r ? r[i4] : function(l4, ...o4) {
      return xe2(t2, i4, l4, o4);
    };
  } });
}();
function xe2(e3, t2, r, i4) {
  return { toString() {
    let n3 = G3(r, i4), l4 = Y3(t2 + T4(JSON.stringify([t2, n3])));
    return (typeof e3 == "function" ? e3 : D4)(me({ [`@keyframes ${l4}`]: G3(r, i4) })), l4;
  } };
}

// https://esm.sh/v103/@twind/preset-tailwind@1.0.1/deno/rules.js
var j2 = [yt2("\\[([-\\w]+):(.+)]", ({ 1: t2, 2: r }, a4) => ({ "@layer overrides": { "&": { [t2]: oe2(`[${r}]`, t2, a4) } } })), yt2("(group|peer)(~[^-[]+)?", ({ input: t2 }, { h: r }) => [{ c: r(t2) }]), gt("aspect-", "aspectRatio"), yt2("container", (t2, { theme: r }) => {
  let { screens: a4 = r("screens"), center: i4, padding: l4 } = r("container"), d4 = { width: "100%", marginRight: i4 && "auto", marginLeft: i4 && "auto", ...g5("xs") };
  for (let f3 in a4) {
    let c3 = a4[f3];
    typeof c3 == "string" && (d4[Ce(c3)] = { "&": { maxWidth: c3, ...g5(f3) } });
  }
  return d4;
  function g5(f3) {
    let c3 = l4 && (typeof l4 == "string" ? l4 : l4[f3] || l4.DEFAULT);
    if (c3)
      return { paddingRight: c3, paddingLeft: c3 };
  }
}), gt("content-", "content", ({ _: t2 }) => ({ "--tw-content": t2, content: "var(--tw-content)" })), yt2("(?:box-)?decoration-(slice|clone)", "boxDecorationBreak"), yt2("box-(border|content)", "boxSizing", ({ 1: t2 }) => t2 + "-box"), yt2("hidden", { display: "none" }), yt2("table-(auto|fixed)", "tableLayout"), yt2(["(block|flex|table|grid|inline|contents|flow-root|list-item)", "(inline-(block|flex|table|grid))", "(table-(caption|cell|column|row|(column|row|footer|header)-group))"], "display"), "(float)-(left|right|none)", "(clear)-(left|right|none|both)", "(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)", "(isolation)-(auto)", yt2("isolate", "isolation"), yt2("object-(contain|cover|fill|none|scale-down)", "objectFit"), gt("object-", "objectPosition"), yt2("object-(top|bottom|center|(left|right)(-(top|bottom))?)", "objectPosition", u2), yt2("overscroll(-[xy])?-(auto|contain|none)", ({ 1: t2 = "", 2: r }) => ({ ["overscroll-behavior" + t2]: r })), yt2("(static|fixed|absolute|relative|sticky)", "position"), gt("-?inset(-[xy])?(?:$|-)", "inset", ({ 1: t2, _: r }) => ({ top: t2 != "-x" && r, right: t2 != "-y" && r, bottom: t2 != "-x" && r, left: t2 != "-y" && r })), gt("-?(top|bottom|left|right)(?:$|-)", "inset"), yt2("visible", "visibility"), yt2("invisible", { visibility: "hidden" }), gt("-?z-", "zIndex"), yt2("flex-((row|col)(-reverse)?)", "flexDirection", v2), yt2("flex-(wrap|wrap-reverse|nowrap)", "flexWrap"), gt("(flex-(?:grow|shrink))(?:$|-)"), gt("(flex)-"), gt("grow(?:$|-)", "flexGrow"), gt("shrink(?:$|-)", "flexShrink"), gt("basis-", "flexBasis"), gt("-?(order)-"), "-?(order)-(\\d+)", gt("grid-cols-", "gridTemplateColumns"), yt2("grid-cols-(\\d+)", "gridTemplateColumns", $2), gt("col-", "gridColumn"), yt2("col-(span)-(\\d+)", "gridColumn", S5), gt("col-start-", "gridColumnStart"), yt2("col-start-(auto|\\d+)", "gridColumnStart"), gt("col-end-", "gridColumnEnd"), yt2("col-end-(auto|\\d+)", "gridColumnEnd"), gt("grid-rows-", "gridTemplateRows"), yt2("grid-rows-(\\d+)", "gridTemplateRows", $2), gt("row-", "gridRow"), yt2("row-(span)-(\\d+)", "gridRow", S5), gt("row-start-", "gridRowStart"), yt2("row-start-(auto|\\d+)", "gridRowStart"), gt("row-end-", "gridRowEnd"), yt2("row-end-(auto|\\d+)", "gridRowEnd"), yt2("grid-flow-((row|col)(-dense)?)", "gridAutoFlow", (t2) => u2(v2(t2))), yt2("grid-flow-(dense)", "gridAutoFlow"), gt("auto-cols-", "gridAutoColumns"), gt("auto-rows-", "gridAutoRows"), gt("gap-x(?:$|-)", "gap", "columnGap"), gt("gap-y(?:$|-)", "gap", "rowGap"), gt("gap(?:$|-)", "gap"), "(justify-(?:items|self))-", yt2("justify-", "justifyContent", x4), yt2("(content|items|self)-", (t2) => ({ ["align-" + t2[1]]: x4(t2) })), yt2("(place-(content|items|self))-", ({ 1: t2, $$: r }) => ({ [t2]: ("wun".includes(r[3]) ? "space-" : "") + r })), gt("p([xytrbl])?(?:$|-)", "padding", w5("padding")), gt("-?m([xytrbl])?(?:$|-)", "margin", w5("margin")), gt("-?space-(x|y)(?:$|-)", "space", ({ 1: t2, _: r }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${t2}-reverse`]: "0", ["margin-" + { y: "top", x: "left" }[t2]]: `calc(${r} * calc(1 - var(--tw-space-${t2}-reverse)))`, ["margin-" + { y: "bottom", x: "right" }[t2]]: `calc(${r} * var(--tw-space-${t2}-reverse))` } })), yt2("space-(x|y)-reverse", ({ 1: t2 }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${t2}-reverse`]: "1" } })), gt("w-", "width"), gt("min-w-", "minWidth"), gt("max-w-", "maxWidth"), gt("h-", "height"), gt("min-h-", "minHeight"), gt("max-h-", "maxHeight"), gt("font-", "fontWeight"), gt("font-", "fontFamily", "fontFamily", s4), yt2("antialiased", { WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }), yt2("subpixel-antialiased", { WebkitFontSmoothing: "auto", MozOsxFontSmoothing: "auto" }), yt2("italic", "fontStyle"), yt2("not-italic", { fontStyle: "normal" }), yt2("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)", ({ 1: t2, 2: r = "", 3: a4 }) => r == "normal" ? { fontVariantNumeric: "normal" } : { ["--tw-" + (a4 ? "numeric-fraction" : "pt".includes(r[0]) ? "numeric-spacing" : r ? "numeric-figure" : t2)]: t2, fontVariantNumeric: "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ordinal": "var(--tw-empty,/*!*/ /*!*/)", "--tw-slashed-zero": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-figure": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-spacing": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-fraction": "var(--tw-empty,/*!*/ /*!*/)" } } }), gt("tracking-", "letterSpacing"), gt("leading-", "lineHeight"), yt2("list-(inside|outside)", "listStylePosition"), gt("list-", "listStyleType"), yt2("list-", "listStyleType"), gt("placeholder-opacity-", "placeholderOpacity", ({ _: t2 }) => ({ "&::placeholder": { "--tw-placeholder-opacity": t2 } })), mt2("placeholder-", { property: "color", selector: "&::placeholder" }), yt2("text-(left|center|right|justify|start|end)", "textAlign"), yt2("text-(ellipsis|clip)", "textOverflow"), gt("text-opacity-", "textOpacity", "--tw-text-opacity"), mt2("text-", { property: "color" }), gt("text-", "fontSize", ({ _: t2 }) => typeof t2 == "string" ? { fontSize: t2 } : { fontSize: t2[0], ...typeof t2[1] == "string" ? { lineHeight: t2[1] } : t2[1] }), gt("indent-", "textIndent"), yt2("(overline|underline|line-through)", "textDecorationLine"), yt2("no-underline", { textDecorationLine: "none" }), gt("underline-offset-", "textUnderlineOffset"), mt2("decoration-", { section: "textDecorationColor", opacityVariable: false, opacitySection: "opacity" }), gt("decoration-", "textDecorationThickness"), yt2("decoration-", "textDecorationStyle"), yt2("(uppercase|lowercase|capitalize)", "textTransform"), yt2("normal-case", { textTransform: "none" }), yt2("truncate", { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }), yt2("align-", "verticalAlign"), yt2("whitespace-", "whiteSpace"), yt2("break-normal", { wordBreak: "normal", overflowWrap: "normal" }), yt2("break-words", { overflowWrap: "break-word" }), yt2("break-all", { wordBreak: "break-all" }), mt2("caret-", { opacityVariable: false, opacitySection: "opacity" }), mt2("accent-", { opacityVariable: false, opacitySection: "opacity" }), yt2("bg-gradient-to-([trbl]|[tb][rl])", "backgroundImage", ({ 1: t2 }) => `linear-gradient(to ${p3(t2, " ")},var(--tw-gradient-stops))`), mt2("from-", { section: "gradientColorStops", opacityVariable: false, opacitySection: "opacity" }, ({ _: t2 }) => ({ "--tw-gradient-from": t2.value, "--tw-gradient-to": t2.color({ opacityValue: "0" }), "--tw-gradient-stops": "var(--tw-gradient-from),var(--tw-gradient-to)" })), mt2("via-", { section: "gradientColorStops", opacityVariable: false, opacitySection: "opacity" }, ({ _: t2 }) => ({ "--tw-gradient-to": t2.color({ opacityValue: "0" }), "--tw-gradient-stops": `var(--tw-gradient-from),${t2.value},var(--tw-gradient-to)` })), mt2("to-", { section: "gradientColorStops", property: "--tw-gradient-to", opacityVariable: false, opacitySection: "opacity" }), yt2("bg-(fixed|local|scroll)", "backgroundAttachment"), yt2("bg-origin-(border|padding|content)", "backgroundOrigin", ({ 1: t2 }) => t2 + "-box"), yt2(["bg-(no-repeat|repeat(-[xy])?)", "bg-repeat-(round|space)"], "backgroundRepeat"), yt2("bg-blend-", "backgroundBlendMode"), yt2("bg-clip-(border|padding|content|text)", "backgroundClip", ({ 1: t2 }) => t2 + (t2 == "text" ? "" : "-box")), gt("bg-opacity-", "backgroundOpacity", "--tw-bg-opacity"), mt2("bg-", { section: "backgroundColor" }), gt("bg-", "backgroundImage"), gt("bg-", "backgroundPosition"), yt2("bg-(top|bottom|center|(left|right)(-(top|bottom))?)", "backgroundPosition", u2), gt("bg-", "backgroundSize"), gt("rounded(?:$|-)", "borderRadius"), gt("rounded-([trbl]|[tb][rl])(?:$|-)", "borderRadius", ({ 1: t2, _: r }) => {
  let a4 = { t: ["tl", "tr"], r: ["tr", "br"], b: ["bl", "br"], l: ["bl", "tl"] }[t2] || [t2, t2];
  return { [`border-${p3(a4[0])}-radius`]: r, [`border-${p3(a4[1])}-radius`]: r };
}), yt2("border-(collapse|separate)", "borderCollapse"), gt("border-opacity(?:$|-)", "borderOpacity", "--tw-border-opacity"), yt2("border-(solid|dashed|dotted|double|none)", "borderStyle"), gt("border-spacing(-[xy])?(?:$|-)", "borderSpacing", ({ 1: t2, _: r }) => ({ "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-border-spacing-x": 0, "--tw-border-spacing-y": 0 } }, ["--tw-border-spacing" + (t2 || "-x")]: r, ["--tw-border-spacing" + (t2 || "-y")]: r, "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)" })), mt2("border-([xytrbl])-", { section: "borderColor" }, w5("border", "Color")), mt2("border-"), gt("border-([xytrbl])(?:$|-)", "borderWidth", w5("border", "Width")), gt("border(?:$|-)", "borderWidth"), gt("divide-opacity(?:$|-)", "divideOpacity", ({ _: t2 }) => ({ "&>:not([hidden])~:not([hidden])": { "--tw-divide-opacity": t2 } })), yt2("divide-(solid|dashed|dotted|double|none)", ({ 1: t2 }) => ({ "&>:not([hidden])~:not([hidden])": { borderStyle: t2 } })), yt2("divide-([xy]-reverse)", ({ 1: t2 }) => ({ "&>:not([hidden])~:not([hidden])": { ["--tw-divide-" + t2]: "1" } })), gt("divide-([xy])(?:$|-)", "divideWidth", ({ 1: t2, _: r }) => {
  let a4 = { x: "lr", y: "tb" }[t2];
  return { "&>:not([hidden])~:not([hidden])": { [`--tw-divide-${t2}-reverse`]: "0", [`border-${p3(a4[0])}Width`]: `calc(${r} * calc(1 - var(--tw-divide-${t2}-reverse)))`, [`border-${p3(a4[1])}Width`]: `calc(${r} * var(--tw-divide-${t2}-reverse))` } };
}), mt2("divide-", { property: "borderColor", selector: "&>:not([hidden])~:not([hidden])" }), gt("ring-opacity(?:$|-)", "ringOpacity", "--tw-ring-opacity"), mt2("ring-offset-", { property: "--tw-ring-offset-color", opacityVariable: false }), gt("ring-offset(?:$|-)", "ringOffsetWidth", "--tw-ring-offset-width"), yt2("ring-inset", { "--tw-ring-inset": "inset" }), mt2("ring-", { property: "--tw-ring-color" }), gt("ring(?:$|-)", "ringWidth", ({ _: t2 }, { theme: r }) => ({ "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)", "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${t2} + var(--tw-ring-offset-width)) var(--tw-ring-color)`, boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000", "&": { "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)", "--tw-ring-offset-width": r("ringOffsetWidth", "", "0px"), "--tw-ring-offset-color": P2(r("ringOffsetColor", "", "#fff")), "--tw-ring-color": P2(r("ringColor", "", "#93c5fd"), { opacityVariable: "--tw-ring-opacity" }), "--tw-ring-opacity": r("ringOpacity", "", "0.5") } } } })), mt2("shadow-", { section: "boxShadowColor", opacityVariable: false, opacitySection: "opacity" }, ({ _: t2 }) => ({ "--tw-shadow-color": t2.value, "--tw-shadow": "var(--tw-shadow-colored)" })), gt("shadow(?:$|-)", "boxShadow", ({ _: t2 }) => ({ "--tw-shadow": s4(t2), "--tw-shadow-colored": s4(t2).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g, "$1var(--tw-shadow-color)$2"), boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000" } } })), gt("(opacity)-"), yt2("mix-blend-", "mixBlendMode"), ...k3(), ...k3("backdrop-"), gt("transition(?:$|-)", "transitionProperty", (t2, { theme: r }) => ({ transitionProperty: s4(t2), transitionTimingFunction: t2._ == "none" ? void 0 : s4(r("transitionTimingFunction", "")), transitionDuration: t2._ == "none" ? void 0 : s4(r("transitionDuration", "")) })), gt("duration(?:$|-)", "transitionDuration", "transitionDuration", s4), gt("ease(?:$|-)", "transitionTimingFunction", "transitionTimingFunction", s4), gt("delay(?:$|-)", "transitionDelay", "transitionDelay", s4), gt("animate(?:$|-)", "animation", (t2, { theme: r, h: a4 }) => {
  let i4 = s4(t2), l4 = i4.split(" "), d4 = r("keyframes", l4[0]);
  return d4 ? { ["@keyframes " + (l4[0] = a4(l4[0]))]: d4, animation: l4.join(" ") } : { animation: i4 };
}), "(transform)-(none)", yt2("transform", h2), yt2("transform-(cpu|gpu)", ({ 1: t2 }) => ({ "--tw-transform": C4(t2 == "gpu") })), gt("scale(-[xy])?-", "scale", ({ 1: t2, _: r }) => ({ ["--tw-scale" + (t2 || "-x")]: r, ["--tw-scale" + (t2 || "-y")]: r, ...h2() })), gt("-?(rotate)-", "rotate", y3), gt("-?(translate-[xy])-", "translate", y3), gt("-?(skew-[xy])-", "skew", y3), yt2("origin-(center|((top|bottom)(-(left|right))?)|left|right)", "transformOrigin", u2), "(appearance)-", gt("(columns)-"), "(columns)-(\\d+)", "(break-(?:before|after|inside))-", gt("(cursor)-"), "(cursor)-", yt2("snap-(none)", "scroll-snap-type"), yt2("snap-(x|y|both)", ({ 1: t2 }) => ({ "scroll-snap-type": t2 + " var(--tw-scroll-snap-strictness)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-scroll-snap-strictness": "proximity" } } })), yt2("snap-(mandatory|proximity)", "--tw-scroll-snap-strictness"), yt2("snap-(?:(start|end|center)|align-(none))", "scroll-snap-align"), yt2("snap-(normal|always)", "scroll-snap-stop"), yt2("scroll-(auto|smooth)", "scroll-behavior"), gt("scroll-p([xytrbl])?(?:$|-)", "padding", w5("scroll-padding")), gt("-?scroll-m([xytrbl])?(?:$|-)", "scroll-margin", w5("scroll-margin")), yt2("touch-(auto|none|manipulation)", "touch-action"), yt2("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))", ({ 1: t2, 2: r, 3: a4 }) => ({ [`--tw-${r ? "pan-x" : a4 ? "pan-y" : t2}`]: t2, "touch-action": "var(--tw-touch-action)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-pan-x": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pan-y": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pinch-zoom": "var(--tw-empty,/*!*/ /*!*/)", "--tw-touch-action": "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)" } } })), yt2("outline-none", { outline: "2px solid transparent", "outline-offset": "2px" }), yt2("outline", { outlineStyle: "solid" }), yt2("outline-(dashed|dotted|double|hidden)", "outlineStyle"), gt("(outline-offset)-"), mt2("outline-", { opacityVariable: false, opacitySection: "opacity" }), gt("outline-", "outlineWidth"), "(pointer-events)-", gt("(will-change)-"), "(will-change)-", ["resize(?:-(none|x|y))?", "resize", ({ 1: t2 }) => ({ x: "horizontal", y: "vertical" })[t2] || t2 || "both"], yt2("select-(none|text|all|auto)", "userSelect"), mt2("fill-", { section: "fill", opacityVariable: false, opacitySection: "opacity" }), mt2("stroke-", { section: "stroke", opacityVariable: false, opacitySection: "opacity" }), gt("stroke-", "strokeWidth"), yt2("sr-only", { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", whiteSpace: "nowrap", clip: "rect(0,0,0,0)", borderWidth: "0" }), yt2("not-sr-only", { position: "static", width: "auto", height: "auto", padding: "0", margin: "0", overflow: "visible", whiteSpace: "normal", clip: "auto" })];
function u2(t2) {
  return (typeof t2 == "string" ? t2 : t2[1]).replace(/-/g, " ").trim();
}
function v2(t2) {
  return (typeof t2 == "string" ? t2 : t2[1]).replace("col", "column");
}
function p3(t2, r = "-") {
  let a4 = [];
  for (let i4 of t2)
    a4.push({ t: "top", r: "right", b: "bottom", l: "left" }[i4]);
  return a4.join(r);
}
function s4(t2) {
  return t2 && "" + (t2._ || t2);
}
function x4({ $$: t2 }) {
  return ({ r: "flex-", "": "flex-", w: "space-", u: "space-", n: "space-" }[t2[3] || ""] || "") + t2;
}
function w5(t2, r = "") {
  return ({ 1: a4, _: i4 }) => {
    let l4 = { x: "lr", y: "tb" }[a4] || a4 + a4;
    return l4 ? { ...He(t2 + "-" + p3(l4[0]) + r, i4), ...He(t2 + "-" + p3(l4[1]) + r, i4) } : He(t2 + r, i4);
  };
}
function k3(t2 = "") {
  let r = ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", t2 && "opacity", "saturate", "sepia", !t2 && "drop-shadow"].filter(Boolean), a4 = {};
  for (let i4 of r)
    a4[`--tw-${t2}${i4}`] = "var(--tw-empty,/*!*/ /*!*/)";
  return a4 = { [`${t2}filter`]: r.map((i4) => `var(--tw-${t2}${i4})`).join(" "), "@layer defaults": { "*,::before,::after,::backdrop": a4 } }, [`(${t2}filter)-(none)`, yt2(`${t2}filter`, a4), ...r.map((i4) => gt(`${i4[0] == "h" ? "-?" : ""}(${t2}${i4})(?:$|-)`, i4, ({ 1: l4, _: d4 }) => ({ [`--tw-${l4}`]: b3(d4).map((g5) => `${i4}(${g5})`).join(" "), ...a4 })))];
}
function y3({ 1: t2, _: r }) {
  return { ["--tw-" + t2]: r, ...h2() };
}
function h2() {
  return { transform: "var(--tw-transform)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-translate-x": "0", "--tw-translate-y": "0", "--tw-rotate": "0", "--tw-skew-x": "0", "--tw-skew-y": "0", "--tw-scale-x": "1", "--tw-scale-y": "1", "--tw-transform": C4() } } };
}
function C4(t2) {
  return [t2 ? "translate3d(var(--tw-translate-x),var(--tw-translate-y),0)" : "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))", "rotate(var(--tw-rotate))", "skewX(var(--tw-skew-x))", "skewY(var(--tw-skew-y))", "scaleX(var(--tw-scale-x))", "scaleY(var(--tw-scale-y))"].join(" ");
}
function S5({ 1: t2, 2: r }) {
  return `${t2} ${r} / ${t2} ${r}`;
}
function $2({ 1: t2 }) {
  return `repeat(${t2},minmax(0,1fr))`;
}

// https://esm.sh/v103/notie@4.3.1/deno/notie.js
var Me2 = Object.create;
var xe3 = Object.defineProperty;
var He2 = Object.getOwnPropertyDescriptor;
var Se2 = Object.getOwnPropertyNames;
var we2 = Object.getPrototypeOf;
var Oe = Object.prototype.hasOwnProperty;
var Ae2 = (y4, o4) => () => (o4 || y4((o4 = { exports: {} }).exports, o4), o4.exports);
var De = (y4, o4, v4, b5) => {
  if (o4 && typeof o4 == "object" || typeof o4 == "function")
    for (let m4 of Se2(o4))
      !Oe.call(y4, m4) && m4 !== v4 && xe3(y4, m4, { get: () => o4[m4], enumerable: !(b5 = He2(o4, m4)) || b5.enumerable });
  return y4;
};
var Ie = (y4, o4, v4) => (v4 = y4 != null ? Me2(we2(y4)) : {}, De(o4 || !y4 || !y4.__esModule ? xe3(v4, "default", { value: y4, enumerable: true }) : v4, y4));
var ye2 = Ae2((ie3, pe2) => {
  (function(y4, o4) {
    typeof ie3 == "object" && typeof pe2 == "object" ? pe2.exports = o4() : typeof define == "function" && define.amd ? define([], o4) : typeof ie3 == "object" ? ie3.notie = o4() : y4.notie = o4();
  })(ie3, function() {
    return function(y4) {
      function o4(b5) {
        if (v4[b5])
          return v4[b5].exports;
        var m4 = v4[b5] = { i: b5, l: false, exports: {} };
        return y4[b5].call(m4.exports, m4, m4.exports, o4), m4.l = true, m4.exports;
      }
      var v4 = {};
      return o4.m = y4, o4.c = v4, o4.i = function(b5) {
        return b5;
      }, o4.d = function(b5, m4, ce3) {
        o4.o(b5, m4) || Object.defineProperty(b5, m4, { configurable: false, enumerable: true, get: ce3 });
      }, o4.n = function(b5) {
        var m4 = b5 && b5.__esModule ? function() {
          return b5.default;
        } : function() {
          return b5;
        };
        return o4.d(m4, "a", m4), m4;
      }, o4.o = function(b5, m4) {
        return Object.prototype.hasOwnProperty.call(b5, m4);
      }, o4.p = "", o4(o4.s = 1);
    }([function(y4, o4) {
      y4.exports = function(v4) {
        return v4.webpackPolyfill || (v4.deprecate = function() {
        }, v4.paths = [], v4.children || (v4.children = []), Object.defineProperty(v4, "loaded", { enumerable: true, get: function() {
          return v4.l;
        } }), Object.defineProperty(v4, "id", { enumerable: true, get: function() {
          return v4.i;
        } }), v4.webpackPolyfill = 1), v4;
      };
    }, function(y4, o4, v4) {
      "use strict";
      (function(b5) {
        var m4, ce3, re3, V5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A4) {
          return typeof A4;
        } : function(A4) {
          return A4 && typeof Symbol == "function" && A4.constructor === Symbol && A4 !== Symbol.prototype ? "symbol" : typeof A4;
        };
        (function(A4, u4) {
          V5(o4) === "object" && V5(b5) === "object" ? b5.exports = u4() : (ce3 = [], m4 = u4, re3 = typeof m4 == "function" ? m4.apply(o4, ce3) : m4, re3 !== void 0 && (b5.exports = re3));
        })(void 0, function() {
          return function(A4) {
            function u4(g5) {
              if (X5[g5])
                return X5[g5].exports;
              var T6 = X5[g5] = { i: g5, l: false, exports: {} };
              return A4[g5].call(T6.exports, T6, T6.exports, u4), T6.l = true, T6.exports;
            }
            var X5 = {};
            return u4.m = A4, u4.c = X5, u4.i = function(g5) {
              return g5;
            }, u4.d = function(g5, T6, B5) {
              u4.o(g5, T6) || Object.defineProperty(g5, T6, { configurable: false, enumerable: true, get: B5 });
            }, u4.n = function(g5) {
              var T6 = g5 && g5.__esModule ? function() {
                return g5.default;
              } : function() {
                return g5;
              };
              return u4.d(T6, "a", T6), T6;
            }, u4.o = function(g5, T6) {
              return Object.prototype.hasOwnProperty.call(g5, T6);
            }, u4.p = "", u4(u4.s = 0);
          }([function(A4, u4, X5) {
            function g5(t2, c3) {
              var s6 = {};
              for (var d4 in t2)
                c3.indexOf(d4) >= 0 || Object.prototype.hasOwnProperty.call(t2, d4) && (s6[d4] = t2[d4]);
              return s6;
            }
            Object.defineProperty(u4, "__esModule", { value: true });
            var T6 = typeof Symbol == "function" && V5(Symbol.iterator) === "symbol" ? function(t2) {
              return typeof t2 > "u" ? "undefined" : V5(t2);
            } : function(t2) {
              return t2 && typeof Symbol == "function" && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2 > "u" ? "undefined" : V5(t2);
            }, B5 = Object.assign || function(t2) {
              for (var c3 = 1; c3 < arguments.length; c3++) {
                var s6 = arguments[c3];
                for (var d4 in s6)
                  Object.prototype.hasOwnProperty.call(s6, d4) && (t2[d4] = s6[d4]);
              }
              return t2;
            }, J3 = { top: "top", bottom: "bottom" }, e3 = { alertTime: 3, dateMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], overlayClickDismiss: true, overlayOpacity: 0.75, transitionCurve: "ease", transitionDuration: 0.3, transitionSelector: "all", classes: { container: "notie-container", textbox: "notie-textbox", textboxInner: "notie-textbox-inner", button: "notie-button", element: "notie-element", elementHalf: "notie-element-half", elementThird: "notie-element-third", overlay: "notie-overlay", backgroundSuccess: "notie-background-success", backgroundWarning: "notie-background-warning", backgroundError: "notie-background-error", backgroundInfo: "notie-background-info", backgroundNeutral: "notie-background-neutral", backgroundOverlay: "notie-background-overlay", alert: "notie-alert", inputField: "notie-input-field", selectChoiceRepeated: "notie-select-choice-repeated", dateSelectorInner: "notie-date-selector-inner", dateSelectorUp: "notie-date-selector-up" }, ids: { overlay: "notie-overlay" }, positions: { alert: J3.top, force: J3.top, confirm: J3.top, input: J3.top, select: J3.bottom, date: J3.top } }, ge2 = u4.setOptions = function(t2) {
              e3 = B5({}, e3, t2, { classes: B5({}, e3.classes, t2.classes), ids: B5({}, e3.ids, t2.ids), positions: B5({}, e3.positions, t2.positions) });
            }, fe = function() {
              return new Promise(function(t2) {
                return setTimeout(t2, 0);
              });
            }, oe3 = function(t2) {
              return new Promise(function(c3) {
                return setTimeout(c3, 1e3 * t2);
              });
            }, R6 = function() {
              document.activeElement && document.activeElement.blur();
            }, W6 = function() {
              var t2 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c3) {
                var s6 = 16 * Math.random() | 0, d4 = c3 === "x" ? s6 : 3 & s6 | 8;
                return d4.toString(16);
              });
              return "notie-" + t2;
            }, le2 = { 1: e3.classes.backgroundSuccess, success: e3.classes.backgroundSuccess, 2: e3.classes.backgroundWarning, warning: e3.classes.backgroundWarning, 3: e3.classes.backgroundError, error: e3.classes.backgroundError, 4: e3.classes.backgroundInfo, info: e3.classes.backgroundInfo, 5: e3.classes.backgroundNeutral, neutral: e3.classes.backgroundNeutral }, me2 = function() {
              return e3.transitionSelector + " " + e3.transitionDuration + "s " + e3.transitionCurve;
            }, $4 = function(t2) {
              return t2.keyCode === 13;
            }, ee3 = function(t2) {
              return t2.keyCode === 27;
            }, K4 = function(t2, c3) {
              t2.classList.add(e3.classes.container), t2.style[c3] = "-10000px", document.body.appendChild(t2), t2.style[c3] = "-" + t2.offsetHeight + "px", t2.listener && window.addEventListener("keydown", t2.listener), fe().then(function() {
                t2.style.transition = me2(), t2.style[c3] = 0;
              });
            }, O4 = function(t2, c3) {
              var s6 = document.getElementById(t2);
              s6 && (s6.style[c3] = "-" + s6.offsetHeight + "px", s6.listener && window.removeEventListener("keydown", s6.listener), oe3(e3.transitionDuration).then(function() {
                s6.parentNode && s6.parentNode.removeChild(s6);
              }));
            }, te = function(t2, c3) {
              var s6 = document.createElement("div");
              s6.id = e3.ids.overlay, s6.classList.add(e3.classes.overlay), s6.classList.add(e3.classes.backgroundOverlay), s6.style.opacity = 0, t2 && e3.overlayClickDismiss && (s6.onclick = function() {
                O4(t2.id, c3), j5();
              }), document.body.appendChild(s6), fe().then(function() {
                s6.style.transition = me2(), s6.style.opacity = e3.overlayOpacity;
              });
            }, j5 = function() {
              var t2 = document.getElementById(e3.ids.overlay);
              t2.style.opacity = 0, oe3(e3.transitionDuration).then(function() {
                t2.parentNode && t2.parentNode.removeChild(t2);
              });
            }, F7 = u4.hideAlerts = function(t2) {
              var c3 = document.getElementsByClassName(e3.classes.alert);
              if (c3.length) {
                for (var s6 = 0; s6 < c3.length; s6++) {
                  var d4 = c3[s6];
                  O4(d4.id, d4.position);
                }
                t2 && oe3(e3.transitionDuration).then(function() {
                  return t2();
                });
              }
            }, he2 = u4.alert = function(t2) {
              var c3 = t2.type, s6 = c3 === void 0 ? 4 : c3, d4 = t2.text, i4 = t2.time, k5 = i4 === void 0 ? e3.alertTime : i4, H6 = t2.stay, S8 = H6 !== void 0 && H6, h3 = t2.position, p7 = h3 === void 0 ? e3.positions.alert || p7.top : h3;
              R6(), F7();
              var l4 = document.createElement("div"), f3 = W6();
              l4.id = f3, l4.position = p7, l4.classList.add(e3.classes.textbox), l4.classList.add(le2[s6]), l4.classList.add(e3.classes.alert), l4.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + d4 + "</div>", l4.onclick = function() {
                return O4(f3, p7);
              }, l4.listener = function(n3) {
                ($4(n3) || ee3(n3)) && F7();
              }, K4(l4, p7), k5 && k5 < 1 && (k5 = 1), !S8 && k5 && oe3(k5).then(function() {
                return O4(f3, p7);
              });
            }, ke2 = u4.force = function(t2, c3) {
              var s6 = t2.type, d4 = s6 === void 0 ? 5 : s6, i4 = t2.text, k5 = t2.buttonText, H6 = k5 === void 0 ? "OK" : k5, S8 = t2.callback, h3 = t2.position, p7 = h3 === void 0 ? e3.positions.force || p7.top : h3;
              R6(), F7();
              var l4 = document.createElement("div"), f3 = W6();
              l4.id = f3;
              var n3 = document.createElement("div");
              n3.classList.add(e3.classes.textbox), n3.classList.add(e3.classes.backgroundInfo), n3.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + i4 + "</div>";
              var r = document.createElement("div");
              r.classList.add(e3.classes.button), r.classList.add(le2[d4]), r.innerHTML = H6, r.onclick = function() {
                O4(f3, p7), j5(), S8 ? S8() : c3 && c3();
              }, l4.appendChild(n3), l4.appendChild(r), l4.listener = function(C6) {
                $4(C6) && r.click();
              }, K4(l4, p7), te();
            }, Ce2 = u4.confirm = function(t2, c3, s6) {
              var d4 = t2.text, i4 = t2.submitText, k5 = i4 === void 0 ? "Yes" : i4, H6 = t2.cancelText, S8 = H6 === void 0 ? "Cancel" : H6, h3 = t2.submitCallback, p7 = t2.cancelCallback, l4 = t2.position, f3 = l4 === void 0 ? e3.positions.confirm || f3.top : l4;
              R6(), F7();
              var n3 = document.createElement("div"), r = W6();
              n3.id = r;
              var C6 = document.createElement("div");
              C6.classList.add(e3.classes.textbox), C6.classList.add(e3.classes.backgroundInfo), C6.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + d4 + "</div>";
              var x6 = document.createElement("div");
              x6.classList.add(e3.classes.button), x6.classList.add(e3.classes.elementHalf), x6.classList.add(e3.classes.backgroundSuccess), x6.innerHTML = k5, x6.onclick = function() {
                O4(r, f3), j5(), h3 ? h3() : c3 && c3();
              };
              var a4 = document.createElement("div");
              a4.classList.add(e3.classes.button), a4.classList.add(e3.classes.elementHalf), a4.classList.add(e3.classes.backgroundError), a4.innerHTML = S8, a4.onclick = function() {
                O4(r, f3), j5(), p7 ? p7() : s6 && s6();
              }, n3.appendChild(C6), n3.appendChild(x6), n3.appendChild(a4), n3.listener = function(E3) {
                $4(E3) ? x6.click() : ee3(E3) && a4.click();
              }, K4(n3, f3), te(n3, f3);
            }, ve2 = function(t2, c3, s6) {
              var d4 = t2.text, i4 = t2.submitText, k5 = i4 === void 0 ? "Submit" : i4, H6 = t2.cancelText, S8 = H6 === void 0 ? "Cancel" : H6, h3 = t2.submitCallback, p7 = t2.cancelCallback, l4 = t2.position, f3 = l4 === void 0 ? e3.positions.input || f3.top : l4, n3 = g5(t2, ["text", "submitText", "cancelText", "submitCallback", "cancelCallback", "position"]);
              R6(), F7();
              var r = document.createElement("div"), C6 = W6();
              r.id = C6;
              var x6 = document.createElement("div");
              x6.classList.add(e3.classes.textbox), x6.classList.add(e3.classes.backgroundInfo), x6.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + d4 + "</div>";
              var a4 = document.createElement("input");
              a4.classList.add(e3.classes.inputField), a4.setAttribute("autocapitalize", n3.autocapitalize || "none"), a4.setAttribute("autocomplete", n3.autocomplete || "off"), a4.setAttribute("autocorrect", n3.autocorrect || "off"), a4.setAttribute("autofocus", n3.autofocus || "true"), a4.setAttribute("inputmode", n3.inputmode || "verbatim"), a4.setAttribute("max", n3.max || ""), a4.setAttribute("maxlength", n3.maxlength || ""), a4.setAttribute("min", n3.min || ""), a4.setAttribute("minlength", n3.minlength || ""), a4.setAttribute("placeholder", n3.placeholder || ""), a4.setAttribute("spellcheck", n3.spellcheck || "default"), a4.setAttribute("step", n3.step || "any"), a4.setAttribute("type", n3.type || "text"), a4.value = n3.value || "", n3.allowed && (a4.oninput = function() {
                var M5 = void 0;
                if (Array.isArray(n3.allowed)) {
                  for (var w6 = "", _2 = n3.allowed, P5 = 0; P5 < _2.length; P5++)
                    _2[P5] === "an" ? w6 += "0-9a-zA-Z" : _2[P5] === "a" ? w6 += "a-zA-Z" : _2[P5] === "n" && (w6 += "0-9"), _2[P5] === "s" && (w6 += " ");
                  M5 = new RegExp("[^" + w6 + "]", "g");
                } else
                  T6(n3.allowed) === "object" && (M5 = n3.allowed);
                a4.value = a4.value.replace(M5, "");
              });
              var E3 = document.createElement("div");
              E3.classList.add(e3.classes.button), E3.classList.add(e3.classes.elementHalf), E3.classList.add(e3.classes.backgroundSuccess), E3.innerHTML = k5, E3.onclick = function() {
                O4(C6, f3), j5(), h3 ? h3(a4.value) : c3 && c3(a4.value);
              };
              var D6 = document.createElement("div");
              D6.classList.add(e3.classes.button), D6.classList.add(e3.classes.elementHalf), D6.classList.add(e3.classes.backgroundError), D6.innerHTML = S8, D6.onclick = function() {
                O4(C6, f3), j5(), p7 ? p7(a4.value) : s6 && s6(a4.value);
              }, r.appendChild(x6), r.appendChild(a4), r.appendChild(E3), r.appendChild(D6), r.listener = function(M5) {
                $4(M5) ? E3.click() : ee3(M5) && D6.click();
              }, K4(r, f3), a4.focus(), te(r, f3);
            };
            u4.input = ve2;
            var Ee2 = u4.select = function(t2, c3) {
              var s6 = t2.text, d4 = t2.cancelText, i4 = d4 === void 0 ? "Cancel" : d4, k5 = t2.cancelCallback, H6 = t2.choices, S8 = t2.position, h3 = S8 === void 0 ? e3.positions.select || h3.top : S8;
              R6(), F7();
              var p7 = document.createElement("div"), l4 = W6();
              p7.id = l4;
              var f3 = document.createElement("div");
              f3.classList.add(e3.classes.textbox), f3.classList.add(e3.classes.backgroundInfo), f3.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + s6 + "</div>", p7.appendChild(f3), H6.forEach(function(r, C6) {
                var x6 = r.type, a4 = x6 === void 0 ? 1 : x6, E3 = r.text, D6 = r.handler, M5 = document.createElement("div");
                M5.classList.add(le2[a4]), M5.classList.add(e3.classes.button), M5.classList.add(e3.classes.selectChoice);
                var w6 = H6[C6 + 1];
                w6 && !w6.type && (w6.type = 1), w6 && w6.type === a4 && M5.classList.add(e3.classes.selectChoiceRepeated), M5.innerHTML = E3, M5.onclick = function() {
                  O4(l4, h3), j5(), D6();
                }, p7.appendChild(M5);
              });
              var n3 = document.createElement("div");
              n3.classList.add(e3.classes.backgroundNeutral), n3.classList.add(e3.classes.button), n3.innerHTML = i4, n3.onclick = function() {
                O4(l4, h3), j5(), k5 ? k5() : c3 && c3();
              }, p7.appendChild(n3), p7.listener = function(r) {
                ee3(r) && n3.click();
              }, K4(p7, h3), te(p7, h3);
            }, Te = u4.date = function(t2, c3, s6) {
              var d4 = t2.value, i4 = d4 === void 0 ? new Date() : d4, k5 = t2.submitText, H6 = k5 === void 0 ? "OK" : k5, S8 = t2.cancelText, h3 = S8 === void 0 ? "Cancel" : S8, p7 = t2.submitCallback, l4 = t2.cancelCallback, f3 = t2.position, n3 = f3 === void 0 ? e3.positions.date || n3.top : f3;
              R6(), F7();
              var r = "&#9662", C6 = document.createElement("div"), x6 = document.createElement("div"), a4 = document.createElement("div"), E3 = function(L5) {
                C6.innerHTML = e3.dateMonths[L5.getMonth()], x6.innerHTML = L5.getDate(), a4.innerHTML = L5.getFullYear();
              }, D6 = function(L5) {
                var N6 = new Date(i4.getFullYear(), i4.getMonth() + 1, 0).getDate(), Q5 = L5.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 2);
                Number(Q5) > N6 && (Q5 = N6.toString()), L5.target.textContent = Q5, Number(Q5) < 1 && (Q5 = "1"), i4.setDate(Number(Q5));
              }, M5 = function(L5) {
                var N6 = L5.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 4);
                L5.target.textContent = N6, i4.setFullYear(Number(N6));
              }, w6 = function(L5) {
                E3(i4);
              }, _2 = function(L5) {
                var N6 = new Date(i4.getFullYear(), i4.getMonth() + L5 + 1, 0).getDate();
                i4.getDate() > N6 && i4.setDate(N6), i4.setMonth(i4.getMonth() + L5), E3(i4);
              }, P5 = function(L5) {
                i4.setDate(i4.getDate() + L5), E3(i4);
              }, be = function(L5) {
                var N6 = i4.getFullYear() + L5;
                N6 < 0 ? i4.setFullYear(0) : i4.setFullYear(i4.getFullYear() + L5), E3(i4);
              }, Y5 = document.createElement("div"), de2 = W6();
              Y5.id = de2;
              var ue3 = document.createElement("div");
              ue3.classList.add(e3.classes.backgroundInfo);
              var I5 = document.createElement("div");
              I5.classList.add(e3.classes.dateSelectorInner);
              var Z4 = document.createElement("div");
              Z4.classList.add(e3.classes.button), Z4.classList.add(e3.classes.elementThird), Z4.classList.add(e3.classes.dateSelectorUp), Z4.innerHTML = r;
              var q5 = document.createElement("div");
              q5.classList.add(e3.classes.button), q5.classList.add(e3.classes.elementThird), q5.classList.add(e3.classes.dateSelectorUp), q5.innerHTML = r;
              var G5 = document.createElement("div");
              G5.classList.add(e3.classes.button), G5.classList.add(e3.classes.elementThird), G5.classList.add(e3.classes.dateSelectorUp), G5.innerHTML = r, C6.classList.add(e3.classes.element), C6.classList.add(e3.classes.elementThird), C6.innerHTML = e3.dateMonths[i4.getMonth()], x6.classList.add(e3.classes.element), x6.classList.add(e3.classes.elementThird), x6.setAttribute("contentEditable", true), x6.addEventListener("input", D6), x6.addEventListener("blur", w6), x6.innerHTML = i4.getDate(), a4.classList.add(e3.classes.element), a4.classList.add(e3.classes.elementThird), a4.setAttribute("contentEditable", true), a4.addEventListener("input", M5), a4.addEventListener("blur", w6), a4.innerHTML = i4.getFullYear();
              var ne3 = document.createElement("div");
              ne3.classList.add(e3.classes.button), ne3.classList.add(e3.classes.elementThird), ne3.innerHTML = r;
              var se2 = document.createElement("div");
              se2.classList.add(e3.classes.button), se2.classList.add(e3.classes.elementThird), se2.innerHTML = r;
              var ae3 = document.createElement("div");
              ae3.classList.add(e3.classes.button), ae3.classList.add(e3.classes.elementThird), ae3.innerHTML = r, Z4.onclick = function() {
                return _2(1);
              }, q5.onclick = function() {
                return P5(1);
              }, G5.onclick = function() {
                return be(1);
              }, ne3.onclick = function() {
                return _2(-1);
              }, se2.onclick = function() {
                return P5(-1);
              }, ae3.onclick = function() {
                return be(-1);
              };
              var z5 = document.createElement("div");
              z5.classList.add(e3.classes.button), z5.classList.add(e3.classes.elementHalf), z5.classList.add(e3.classes.backgroundSuccess), z5.innerHTML = H6, z5.onclick = function() {
                O4(de2, n3), j5(), p7 ? p7(i4) : c3 && c3(i4);
              };
              var U5 = document.createElement("div");
              U5.classList.add(e3.classes.button), U5.classList.add(e3.classes.elementHalf), U5.classList.add(e3.classes.backgroundError), U5.innerHTML = h3, U5.onclick = function() {
                O4(de2, n3), j5(), l4 ? l4(i4) : s6 && s6(i4);
              }, I5.appendChild(Z4), I5.appendChild(q5), I5.appendChild(G5), I5.appendChild(C6), I5.appendChild(x6), I5.appendChild(a4), I5.appendChild(ne3), I5.appendChild(se2), I5.appendChild(ae3), ue3.appendChild(I5), Y5.appendChild(ue3), Y5.appendChild(z5), Y5.appendChild(U5), Y5.listener = function(L5) {
                $4(L5) ? z5.click() : ee3(L5) && U5.click();
              }, K4(Y5, n3), te(Y5, n3);
            };
            u4.default = { alert: he2, force: ke2, confirm: Ce2, input: ve2, select: Ee2, date: Te, setOptions: ge2, hideAlerts: F7 };
          }]);
        });
      }).call(o4, v4(0)(y4));
    }]);
  });
});
var je = Ie(ye2());
var { default: Le, ...Ne2 } = je;
var Fe = Le !== void 0 ? Le : Ne2;

// https://esm.sh/v103/nanostores@0.7.1/deno/nanostores.js
var S6 = Symbol("clean");
var c2 = Symbol();

// https://esm.sh/v103/@nanostores/i18n@0.7.1/deno/i18n.js
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
function p5(r) {
  return (n3) => {
    if (n3.transform) {
      let e3 = n3.transform;
      return n3 = n3.input, { input: n3, transform(t2, o4, s6) {
        let f3 = r(t2, o4, ...s6);
        return (...l4) => e3(t2, f3, l4);
      } };
    } else
      return { input: n3, transform(e3, t2, o4) {
        return r(e3, t2, ...o4);
      } };
  };
}
var N4 = p5((r, n3, e3) => g3(n3, (t2) => {
  for (let o4 in e3)
    t2 = t2.replace(new RegExp(`{${o4}}`, "g"), e3[o4]);
  return t2;
}));
var R4 = p5((r, n3, e3) => {
  let t2 = new Intl.PluralRules(r).select(e3);
  return t2 in n3 || (t2 = "many"), g3(n3[t2], (o4) => o4.replace(/{count}/g, e3));
});

// https://esm.sh/v103/hotkeys-js@3.10.1/deno/hotkeys-js.js
var M3 = typeof navigator < "u" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : false;
function P3(e3, t2, i4, r) {
  e3.addEventListener ? e3.addEventListener(t2, i4, r) : e3.attachEvent && e3.attachEvent("on".concat(t2), function() {
    i4(window.event);
  });
}
function T5(e3, t2) {
  for (var i4 = t2.slice(0, t2.length - 1), r = 0; r < i4.length; r++)
    i4[r] = e3[i4[r].toLowerCase()];
  return i4;
}
function U4(e3) {
  typeof e3 != "string" && (e3 = ""), e3 = e3.replace(/\s/g, "");
  for (var t2 = e3.split(","), i4 = t2.lastIndexOf(""); i4 >= 0; )
    t2[i4 - 1] += ",", t2.splice(i4, 1), i4 = t2.lastIndexOf("");
  return t2;
}
function G4(e3, t2) {
  for (var i4 = e3.length >= t2.length ? e3 : t2, r = e3.length >= t2.length ? t2 : e3, n3 = true, a4 = 0; a4 < i4.length; a4++)
    r.indexOf(i4[a4]) === -1 && (n3 = false);
  return n3;
}
var b4 = { backspace: 8, "\u232B": 8, tab: 9, clear: 12, enter: 13, "\u21A9": 13, return: 13, esc: 27, escape: 27, space: 32, left: 37, up: 38, right: 39, down: 40, del: 46, delete: 46, ins: 45, insert: 45, home: 36, end: 35, pageup: 33, pagedown: 34, capslock: 20, num_0: 96, num_1: 97, num_2: 98, num_3: 99, num_4: 100, num_5: 101, num_6: 102, num_7: 103, num_8: 104, num_9: 105, num_multiply: 106, num_add: 107, num_enter: 108, num_subtract: 109, num_decimal: 110, num_divide: 111, "\u21EA": 20, ",": 188, ".": 190, "/": 191, "`": 192, "-": M3 ? 173 : 189, "=": M3 ? 61 : 187, ";": M3 ? 59 : 186, "'": 222, "[": 219, "]": 221, "\\": 220 };
var g4 = { "\u21E7": 16, shift: 16, "\u2325": 18, alt: 18, option: 18, "\u2303": 17, ctrl: 17, control: 17, "\u2318": 91, cmd: 91, command: 91 };
var L3 = { 16: "shiftKey", 18: "altKey", 17: "ctrlKey", 91: "metaKey", shiftKey: 16, ctrlKey: 17, altKey: 18, metaKey: 91 };
var u3 = { 16: false, 18: false, 17: false, 91: false };
var s5 = {};
for (O3 = 1; O3 < 20; O3++)
  b4["f".concat(O3)] = 111 + O3;
var O3;
var f2 = [];
var A3 = false;
var D5 = "all";
var H5 = [];
var C5 = function(t2) {
  return b4[t2.toLowerCase()] || g4[t2.toLowerCase()] || t2.toUpperCase().charCodeAt(0);
};
var R5 = function(t2) {
  return Object.keys(b4).find(function(i4) {
    return b4[i4] === t2;
  });
};
var V4 = function(t2) {
  return Object.keys(g4).find(function(i4) {
    return g4[i4] === t2;
  });
};
function F6(e3) {
  D5 = e3 || "all";
}
function E2() {
  return D5 || "all";
}
function X4() {
  return f2.slice(0);
}
function $3() {
  return f2.map(function(e3) {
    return R5(e3) || V4(e3) || String.fromCharCode(e3);
  });
}
function q4(e3) {
  var t2 = e3.target || e3.srcElement, i4 = t2.tagName, r = true;
  return (t2.isContentEditable || (i4 === "INPUT" || i4 === "TEXTAREA" || i4 === "SELECT") && !t2.readOnly) && (r = false), r;
}
function z4(e3) {
  return typeof e3 == "string" && (e3 = C5(e3)), f2.indexOf(e3) !== -1;
}
function J2(e3, t2) {
  var i4, r;
  e3 || (e3 = E2());
  for (var n3 in s5)
    if (Object.prototype.hasOwnProperty.call(s5, n3))
      for (i4 = s5[n3], r = 0; r < i4.length; )
        i4[r].scope === e3 ? i4.splice(r, 1) : r++;
  E2() === e3 && F6(t2 || "all");
}
function N5(e3) {
  var t2 = e3.keyCode || e3.which || e3.charCode, i4 = f2.indexOf(t2);
  if (i4 >= 0 && f2.splice(i4, 1), e3.key && e3.key.toLowerCase() === "meta" && f2.splice(0, f2.length), (t2 === 93 || t2 === 224) && (t2 = 91), t2 in u3) {
    u3[t2] = false;
    for (var r in g4)
      g4[r] === t2 && (v3[r] = false);
  }
}
function Q4(e3) {
  if (typeof e3 > "u")
    Object.keys(s5).forEach(function(o4) {
      return delete s5[o4];
    });
  else if (Array.isArray(e3))
    e3.forEach(function(o4) {
      o4.key && S7(o4);
    });
  else if (typeof e3 == "object")
    e3.key && S7(e3);
  else if (typeof e3 == "string") {
    for (var t2 = arguments.length, i4 = new Array(t2 > 1 ? t2 - 1 : 0), r = 1; r < t2; r++)
      i4[r - 1] = arguments[r];
    var n3 = i4[0], a4 = i4[1];
    typeof n3 == "function" && (a4 = n3, n3 = ""), S7({ key: e3, scope: n3, method: a4, splitKey: "+" });
  }
}
var S7 = function(t2) {
  var i4 = t2.key, r = t2.scope, n3 = t2.method, a4 = t2.splitKey, o4 = a4 === void 0 ? "+" : a4, l4 = U4(i4);
  l4.forEach(function(c3) {
    var p7 = c3.split(o4), m4 = p7.length, y4 = p7[m4 - 1], d4 = y4 === "*" ? "*" : C5(y4);
    if (s5[d4]) {
      r || (r = E2());
      var K4 = m4 > 1 ? T5(g4, p7) : [];
      s5[d4] = s5[d4].filter(function(h3) {
        var w6 = n3 ? h3.method === n3 : true;
        return !(w6 && h3.scope === r && G4(h3.mods, K4));
      });
    }
  });
};
function _(e3, t2, i4, r) {
  if (t2.element === r) {
    var n3;
    if (t2.scope === i4 || t2.scope === "all") {
      n3 = t2.mods.length > 0;
      for (var a4 in u3)
        Object.prototype.hasOwnProperty.call(u3, a4) && (!u3[a4] && t2.mods.indexOf(+a4) > -1 || u3[a4] && t2.mods.indexOf(+a4) === -1) && (n3 = false);
      (t2.mods.length === 0 && !u3[16] && !u3[18] && !u3[17] && !u3[91] || n3 || t2.shortcut === "*") && t2.method(e3, t2) === false && (e3.preventDefault ? e3.preventDefault() : e3.returnValue = false, e3.stopPropagation && e3.stopPropagation(), e3.cancelBubble && (e3.cancelBubble = true));
    }
  }
}
function k4(e3, t2) {
  var i4 = s5["*"], r = e3.keyCode || e3.which || e3.charCode;
  if (v3.filter.call(this, e3)) {
    if ((r === 93 || r === 224) && (r = 91), f2.indexOf(r) === -1 && r !== 229 && f2.push(r), ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach(function(h3) {
      var w6 = L3[h3];
      e3[h3] && f2.indexOf(w6) === -1 ? f2.push(w6) : !e3[h3] && f2.indexOf(w6) > -1 ? f2.splice(f2.indexOf(w6), 1) : h3 === "metaKey" && e3[h3] && f2.length === 3 && (e3.ctrlKey || e3.shiftKey || e3.altKey || (f2 = f2.slice(f2.indexOf(w6))));
    }), r in u3) {
      u3[r] = true;
      for (var n3 in g4)
        g4[n3] === r && (v3[n3] = true);
      if (!i4)
        return;
    }
    for (var a4 in u3)
      Object.prototype.hasOwnProperty.call(u3, a4) && (u3[a4] = e3[L3[a4]]);
    e3.getModifierState && !(e3.altKey && !e3.ctrlKey) && e3.getModifierState("AltGraph") && (f2.indexOf(17) === -1 && f2.push(17), f2.indexOf(18) === -1 && f2.push(18), u3[17] = true, u3[18] = true);
    var o4 = E2();
    if (i4)
      for (var l4 = 0; l4 < i4.length; l4++)
        i4[l4].scope === o4 && (e3.type === "keydown" && i4[l4].keydown || e3.type === "keyup" && i4[l4].keyup) && _(e3, i4[l4], o4, t2);
    if (r in s5) {
      for (var c3 = 0; c3 < s5[r].length; c3++)
        if ((e3.type === "keydown" && s5[r][c3].keydown || e3.type === "keyup" && s5[r][c3].keyup) && s5[r][c3].key) {
          for (var p7 = s5[r][c3], m4 = p7.splitKey, y4 = p7.key.split(m4), d4 = [], K4 = 0; K4 < y4.length; K4++)
            d4.push(C5(y4[K4]));
          d4.sort().join("") === f2.sort().join("") && _(e3, p7, o4, t2);
        }
    }
  }
}
function W5(e3) {
  return H5.indexOf(e3) > -1;
}
function v3(e3, t2, i4) {
  f2 = [];
  var r = U4(e3), n3 = [], a4 = "all", o4 = document, l4 = 0, c3 = false, p7 = true, m4 = "+", y4 = false;
  for (i4 === void 0 && typeof t2 == "function" && (i4 = t2), Object.prototype.toString.call(t2) === "[object Object]" && (t2.scope && (a4 = t2.scope), t2.element && (o4 = t2.element), t2.keyup && (c3 = t2.keyup), t2.keydown !== void 0 && (p7 = t2.keydown), t2.capture !== void 0 && (y4 = t2.capture), typeof t2.splitKey == "string" && (m4 = t2.splitKey)), typeof t2 == "string" && (a4 = t2); l4 < r.length; l4++)
    e3 = r[l4].split(m4), n3 = [], e3.length > 1 && (n3 = T5(g4, e3)), e3 = e3[e3.length - 1], e3 = e3 === "*" ? "*" : C5(e3), e3 in s5 || (s5[e3] = []), s5[e3].push({ keyup: c3, keydown: p7, scope: a4, mods: n3, shortcut: r[l4], method: i4, key: r[l4], splitKey: m4, element: o4 });
  typeof o4 < "u" && !W5(o4) && window && (H5.push(o4), P3(o4, "keydown", function(d4) {
    k4(d4, o4);
  }, y4), A3 || (A3 = true, P3(window, "focus", function() {
    f2 = [];
  }, y4)), P3(o4, "keyup", function(d4) {
    k4(d4, o4), N5(d4);
  }, y4));
}
function Y4(e3) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
  Object.keys(s5).forEach(function(i4) {
    var r = s5[i4].filter(function(n3) {
      return n3.scope === t2 && n3.shortcut === e3;
    });
    r.forEach(function(n3) {
      n3 && n3.method && n3.method();
    });
  });
}
var j3 = { getPressedKeyString: $3, setScope: F6, getScope: E2, deleteScope: J2, getPressedKeyCodes: X4, isPressed: z4, filter: q4, trigger: Y4, unbind: Q4, keyMap: b4, modifier: g4, modifierMap: L3 };
for (x5 in j3)
  Object.prototype.hasOwnProperty.call(j3, x5) && (v3[x5] = j3[x5]);
var x5;
typeof document < "u" && (B4 = window.hotkeys, v3.noConflict = function(e3) {
  return e3 && window.hotkeys === v3 && (window.hotkeys = B4), v3;
}, window.hotkeys = v3);
var B4;

// deps.ts
var toast = Fe.alert;

// constant.ts
var brandName = "Immersive Translate";
var brandId = "immersive-translate";
var brandIdForJs = "immersiveTranslate";
var targetContainerElementAttributeName = `${brandIdForJs}Container`;
var specifiedTargetContainerElementAttributeName = `${brandIdForJs}SpecifiedContainer`;
var hostname = "immersive-translate.owenyoung.com";
var homepage = `https://${hostname}/`;
var buildinConfigSyncUrl = `https://${hostname}/buildin_config.json`;
var sourceElementMarkAttributeName = `${brandIdForJs}Mark`;
var elementMarkRootKey = `${brandIdForJs}Root`;
var sourceElementEffectAttributeName = `data-${brandId}-effect`;
var sourceElementTranslatedMarkAttributeName = `${brandIdForJs}TranslatedMark`;
var sourceElementParagraphAttributeName = `${brandIdForJs}ParagraphId`;
var sourceAtomicBlockElementMarkAttributeName = `${brandIdForJs}AtomicBlockMark`;
var sourceElementExcludeAttributeName = `${brandIdForJs}ExcludeMark`;
var sourceElementStayOriginalAttributeName = `${brandIdForJs}StayOriginalMark`;
var sourcePreWhitespaceMarkAttributeName = `${brandIdForJs}PreWhitespaceMark`;
var sourceInlineElementMarkAttributeName = `${brandIdForJs}InlineMark`;
var sourceBlockElementMarkAttributeName = `${brandIdForJs}BlockMark`;
var sourceElementLeft = `${brandIdForJs}Left`;
var sourceElementRight = `${brandIdForJs}Right`;
var sourceElementWidth = `${brandIdForJs}Width`;
var sourceElementHeight = `${brandIdForJs}Height`;
var sourceElementTop = `${brandIdForJs}Top`;
var sourceElementFontSize = `${brandIdForJs}FontSize`;
var sourceElementWithGlobalStyleMarkAttributeName = `${brandIdForJs}GlobalStyleMark`;
var translationTargetElementWrapperClass = `${brandId}-target-wrapper`;
var translationPdfTargetContainerClass = `${brandId}-pdf-target-container`;
var translationTargetInnerElementWrapperClass = `${brandId}-target-inner`;
var translationSourceElementsWrapperClass = `${brandId}-source-wrapper`;
var translationTargetTranslationElementBlockWrapperClass = `${brandId}-target-translation-block-wrapper`;
var translationTargetTranslationPdfElementBlockWrapperClass = `${brandId}-target-translation-pdf-block-wrapper`;
var translationTargetTranslationElementPreWhitespaceWrapperClass = `${brandId}-target-translation-pre-whitespace`;
var translationTargetTranslationElementInlineWrapperClass = `${brandId}-target-translation-inline-wrapper`;

// log.ts
var Timing = class {
  #t = performance.now();
  reset() {
    this.#t = performance.now();
  }
  stop(message) {
    const now = performance.now();
    const d4 = Math.round(now - this.#t);
    let cf = colors_exports.green;
    if (d4 > 1e4) {
      cf = colors_exports.red;
    } else if (d4 > 1e3) {
      cf = colors_exports.yellow;
    }
    console.debug(
      colors_exports.dim(brandName + " TIMING:"),
      message,
      "in",
      cf(d4 + "ms")
    );
    this.#t = now;
  }
};
var Logger = class {
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
    if (this.#level <= 0 /* Debug */) {
      console.log(colors_exports.dim(brandName + " DEBUG:"), ...args);
    }
  }
  info(...args) {
    if (this.#level <= 1 /* Info */) {
      console.log(colors_exports.green(brandName + " INFO:"), ...args);
    }
  }
  warn(...args) {
    if (this.#level <= 2 /* Warn */) {
      console.warn(colors_exports.yellow(brandName + " WARN:"), ...args);
    }
  }
  error(...args) {
    if (this.#level <= 3 /* Error */) {
      console.error(colors_exports.red(brandName + " ERROR:"), ...args);
    }
  }
  fatal(...args) {
    if (this.#level <= 4 /* Fatal */) {
      console.error(colors_exports.red(brandName + " FATAL:"), ...args);
    }
  }
  timing() {
    if (this.level === 0 /* Debug */) {
      return new Timing();
    }
    return { reset: () => {
    }, stop: () => {
    } };
  }
};
var log_default = new Logger();

// https://esm.sh/stable/preact@10.11.0/deno/jsx-runtime.js
var a3 = 0;
function p6(n3, s6, t2, f3, u4) {
  var r, o4, _2 = {};
  for (o4 in s6)
    o4 == "ref" ? r = s6[o4] : _2[o4] = s6[o4];
  var e3 = { type: n3, props: _2, key: t2, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --a3, __source: u4, __self: f3 };
  if (typeof n3 == "function" && (r = n3.defaultProps))
    for (o4 in r)
      _2[o4] === void 0 && (_2[o4] = r[o4]);
  return d.vnode && d.vnode(e3), e3;
}

// components/button_drop_down.tsx
var DEFAULT_VALUE = "DROP_DOWN_DEFAULT_VALUE";
function SelectDropDown(props) {
  let { showArrow, onSelected, className, menus, maxWidth } = props;
  className = className || "";
  showArrow = showArrow ?? true;
  maxWidth = maxWidth || 60;
  const ref = w2(null);
  return /* @__PURE__ */ p6("select", {
    ref,
    autoComplete: "off",
    class: `min-select ${showArrow ? "" : "min-select-no-arrow"} ${className ? className : ""}`,
    value: DEFAULT_VALUE,
    style: { maxWidth: `${maxWidth}px` },
    onChange: (e3) => {
      e3.preventDefault();
      const value = e3.target.value;
      if (ref.current && value !== DEFAULT_VALUE) {
        ref.current.value = DEFAULT_VALUE;
        ref.current?.dispatchEvent(new Event("change"));
        const item = menus.find((item2) => item2.value === value);
        if (item) {
          onSelected(item);
        }
      }
    },
    children: [{
      value: DEFAULT_VALUE,
      label: props.label
    }].concat(menus).map((item) => /* @__PURE__ */ p6("option", {
      value: item.value,
      children: item.label
    }))
  });
}

// example/demo.tsx
function main() {
  const mountPoint = document.getElementById("mount");
  if (mountPoint) {
    log_default.setLevel("debug");
    re(
      /* @__PURE__ */ p6(App, {}),
      mountPoint
    );
  }
}
function App() {
  return /* @__PURE__ */ p6(L, {
    children: /* @__PURE__ */ p6("main", {
      class: "container-fluid",
      children: /* @__PURE__ */ p6("div", {
        class: "flex",
        children: [
          /* @__PURE__ */ p6("button", {
            class: "secondary flex-3",
            children: "Hi"
          }),
          /* @__PURE__ */ p6(SelectDropDown, {
            label: "\u66F4\u591A",
            showArrow: false,
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
          })
        ]
      })
    })
  });
}
main();
