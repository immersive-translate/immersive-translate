var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// <define:process.env>
var define_process_env_default = { BUILD_TIME: "2023-01-18T05:35:35.195Z", VERSION: "0.2.3", PROD: "1", MOCK: "0", DEBUG: "0" };

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

// https://deno.land/std@0.171.0/async/deadline.ts
var DeadlineError = class extends Error {
  constructor() {
    super("Deadline");
    this.name = "DeadlineError";
  }
};
function deadline(p7, delay2) {
  const d4 = deferred();
  const t5 = setTimeout(() => d4.reject(new DeadlineError()), delay2);
  return Promise.race([p7, d4]).finally(() => clearTimeout(t5));
}

// https://deno.land/std@0.171.0/async/delay.ts
function delay(ms, options = {}) {
  const { signal, persistent } = options;
  if (signal?.aborted) {
    return Promise.reject(new DOMException("Delay was aborted.", "AbortError"));
  }
  return new Promise((resolve, reject) => {
    const abort = () => {
      clearTimeout(i4);
      reject(new DOMException("Delay was aborted.", "AbortError"));
    };
    const done = () => {
      signal?.removeEventListener("abort", abort);
      resolve();
    };
    const i4 = setTimeout(done, ms);
    signal?.addEventListener("abort", abort, { once: true });
    if (persistent === false) {
      try {
        Deno.unrefTimer(i4);
      } catch (error2) {
        if (!(error2 instanceof ReferenceError)) {
          throw error2;
        }
        console.error("`persistent` option is only available in Deno");
      }
    }
  });
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

// https://deno.land/std@0.167.0/async/debounce.ts
function debounce(fn, wait) {
  let timeout = null;
  let flush = null;
  const debounced = (...args) => {
    debounced.clear();
    flush = () => {
      debounced.clear();
      fn.call(debounced, ...args);
    };
    timeout = setTimeout(flush, wait);
  };
  debounced.clear = () => {
    if (typeof timeout === "number") {
      clearTimeout(timeout);
      timeout = null;
      flush = null;
    }
  };
  debounced.flush = () => {
    flush?.();
  };
  Object.defineProperty(debounced, "pending", {
    get: () => typeof timeout === "number"
  });
  return debounced;
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
function k(e3, t5) {
  for (var _2 in t5)
    e3[_2] = t5[_2];
  return e3;
}
function j(e3) {
  var t5 = e3.parentNode;
  t5 && t5.removeChild(e3);
}
function ee(e3, t5, _2) {
  var r, l4, o4, s6 = {};
  for (o4 in t5)
    o4 == "key" ? r = t5[o4] : o4 == "ref" ? l4 = t5[o4] : s6[o4] = t5[o4];
  if (arguments.length > 2 && (s6.children = arguments.length > 3 ? P.call(arguments, 2) : _2), typeof e3 == "function" && e3.defaultProps != null)
    for (o4 in e3.defaultProps)
      s6[o4] === void 0 && (s6[o4] = e3.defaultProps[o4]);
  return w(e3, s6, r, l4, null);
}
function w(e3, t5, _2, r, l4) {
  var o4 = { type: e3, props: t5, key: _2, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: l4 ?? ++$ };
  return l4 == null && d.vnode != null && d.vnode(o4), o4;
}
function L(e3) {
  return e3.children;
}
function U(e3, t5) {
  this.props = e3, this.context = t5;
}
function C(e3, t5) {
  if (t5 == null)
    return e3.__ ? C(e3.__, e3.__.__k.indexOf(e3) + 1) : null;
  for (var _2; t5 < e3.__k.length; t5++)
    if ((_2 = e3.__k[t5]) != null && _2.__e != null)
      return _2.__e;
  return typeof e3.type == "function" ? C(e3) : null;
}
function z(e3) {
  var t5, _2;
  if ((e3 = e3.__) != null && e3.__c != null) {
    for (e3.__e = e3.__c.base = null, t5 = 0; t5 < e3.__k.length; t5++)
      if ((_2 = e3.__k[t5]) != null && _2.__e != null) {
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
    e3 = S.sort(function(t5, _2) {
      return t5.__v.__b - _2.__v.__b;
    }), S = [], e3.some(function(t5) {
      var _2, r, l4, o4, s6, f3;
      t5.__d && (s6 = (o4 = (_2 = t5).__v).__e, (f3 = _2.__P) && (r = [], (l4 = k({}, o4)).__v = o4.__v + 1, W(f3, o4, l4, _2.__n, f3.ownerSVGElement !== void 0, o4.__h != null ? [s6] : null, r, s6 ?? C(o4), o4.__h), K(r, o4), o4.__e != s6 && z(o4)));
    });
}
function G(e3, t5, _2, r, l4, o4, s6, f3, p7, a5) {
  var n3, h3, c4, i4, u4, b5, v4, y4 = r && r.__k || V, g5 = y4.length;
  for (_2.__k = [], n3 = 0; n3 < t5.length; n3++)
    if ((i4 = _2.__k[n3] = (i4 = t5[n3]) == null || typeof i4 == "boolean" ? null : typeof i4 == "string" || typeof i4 == "number" || typeof i4 == "bigint" ? w(null, i4, null, null, i4) : Array.isArray(i4) ? w(L, { children: i4 }, null, null, null) : i4.__b > 0 ? w(i4.type, i4.props, i4.key, i4.ref ? i4.ref : null, i4.__v) : i4) != null) {
      if (i4.__ = _2, i4.__b = _2.__b + 1, (c4 = y4[n3]) === null || c4 && i4.key == c4.key && i4.type === c4.type)
        y4[n3] = void 0;
      else
        for (h3 = 0; h3 < g5; h3++) {
          if ((c4 = y4[h3]) && i4.key == c4.key && i4.type === c4.type) {
            y4[h3] = void 0;
            break;
          }
          c4 = null;
        }
      W(e3, i4, c4 = c4 || T, l4, o4, s6, f3, p7, a5), u4 = i4.__e, (h3 = i4.ref) && c4.ref != h3 && (v4 || (v4 = []), c4.ref && v4.push(c4.ref, null, i4), v4.push(h3, i4.__c || u4, i4)), u4 != null ? (b5 == null && (b5 = u4), typeof i4.type == "function" && i4.__k === c4.__k ? i4.__d = p7 = q(i4, p7, e3) : p7 = J(e3, i4, c4, y4, u4, p7), typeof _2.type == "function" && (_2.__d = p7)) : p7 && c4.__e == p7 && p7.parentNode != e3 && (p7 = C(c4));
    }
  for (_2.__e = b5, n3 = g5; n3--; )
    y4[n3] != null && (typeof _2.type == "function" && y4[n3].__e != null && y4[n3].__e == _2.__d && (_2.__d = C(r, n3 + 1)), X(y4[n3], y4[n3]));
  if (v4)
    for (n3 = 0; n3 < v4.length; n3++)
      Q(v4[n3], v4[++n3], v4[++n3]);
}
function q(e3, t5, _2) {
  for (var r, l4 = e3.__k, o4 = 0; l4 && o4 < l4.length; o4++)
    (r = l4[o4]) && (r.__ = e3, t5 = typeof r.type == "function" ? q(r, t5, _2) : J(_2, r, r, l4, r.__e, t5));
  return t5;
}
function J(e3, t5, _2, r, l4, o4) {
  var s6, f3, p7;
  if (t5.__d !== void 0)
    s6 = t5.__d, t5.__d = void 0;
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
function _e(e3, t5, _2, r, l4) {
  var o4;
  for (o4 in _2)
    o4 === "children" || o4 === "key" || o4 in t5 || N(e3, o4, null, _2[o4], r);
  for (o4 in t5)
    l4 && typeof t5[o4] != "function" || o4 === "children" || o4 === "key" || o4 === "value" || o4 === "checked" || _2[o4] === t5[o4] || N(e3, o4, t5[o4], _2[o4], r);
}
function I(e3, t5, _2) {
  t5[0] === "-" ? e3.setProperty(t5, _2) : e3[t5] = _2 == null ? "" : typeof _2 != "number" || Z.test(t5) ? _2 : _2 + "px";
}
function N(e3, t5, _2, r, l4) {
  var o4;
  e:
    if (t5 === "style")
      if (typeof _2 == "string")
        e3.style.cssText = _2;
      else {
        if (typeof r == "string" && (e3.style.cssText = r = ""), r)
          for (t5 in r)
            _2 && t5 in _2 || I(e3.style, t5, "");
        if (_2)
          for (t5 in _2)
            r && _2[t5] === r[t5] || I(e3.style, t5, _2[t5]);
      }
    else if (t5[0] === "o" && t5[1] === "n")
      o4 = t5 !== (t5 = t5.replace(/Capture$/, "")), t5 = t5.toLowerCase() in e3 ? t5.toLowerCase().slice(2) : t5.slice(2), e3.l || (e3.l = {}), e3.l[t5 + o4] = _2, _2 ? r || e3.addEventListener(t5, o4 ? R : O, o4) : e3.removeEventListener(t5, o4 ? R : O, o4);
    else if (t5 !== "dangerouslySetInnerHTML") {
      if (l4)
        t5 = t5.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t5 !== "href" && t5 !== "list" && t5 !== "form" && t5 !== "tabIndex" && t5 !== "download" && t5 in e3)
        try {
          e3[t5] = _2 ?? "";
          break e;
        } catch {
        }
      typeof _2 == "function" || (_2 != null && (_2 !== false || t5[0] === "a" && t5[1] === "r") ? e3.setAttribute(t5, _2) : e3.removeAttribute(t5));
    }
}
function O(e3) {
  this.l[e3.type + false](d.event ? d.event(e3) : e3);
}
function R(e3) {
  this.l[e3.type + true](d.event ? d.event(e3) : e3);
}
function W(e3, t5, _2, r, l4, o4, s6, f3, p7) {
  var a5, n3, h3, c4, i4, u4, b5, v4, y4, g5, x6, H6, E3, m4 = t5.type;
  if (t5.constructor !== void 0)
    return null;
  _2.__h != null && (p7 = _2.__h, f3 = t5.__e = _2.__e, t5.__h = null, o4 = [f3]), (a5 = d.__b) && a5(t5);
  try {
    e:
      if (typeof m4 == "function") {
        if (v4 = t5.props, y4 = (a5 = m4.contextType) && r[a5.__c], g5 = a5 ? y4 ? y4.props.value : a5.__ : r, _2.__c ? b5 = (n3 = t5.__c = _2.__c).__ = n3.__E : ("prototype" in m4 && m4.prototype.render ? t5.__c = n3 = new m4(v4, g5) : (t5.__c = n3 = new U(v4, g5), n3.constructor = m4, n3.render = oe), y4 && y4.sub(n3), n3.props = v4, n3.state || (n3.state = {}), n3.context = g5, n3.__n = r, h3 = n3.__d = true, n3.__h = []), n3.__s == null && (n3.__s = n3.state), m4.getDerivedStateFromProps != null && (n3.__s == n3.state && (n3.__s = k({}, n3.__s)), k(n3.__s, m4.getDerivedStateFromProps(v4, n3.__s))), c4 = n3.props, i4 = n3.state, h3)
          m4.getDerivedStateFromProps == null && n3.componentWillMount != null && n3.componentWillMount(), n3.componentDidMount != null && n3.__h.push(n3.componentDidMount);
        else {
          if (m4.getDerivedStateFromProps == null && v4 !== c4 && n3.componentWillReceiveProps != null && n3.componentWillReceiveProps(v4, g5), !n3.__e && n3.shouldComponentUpdate != null && n3.shouldComponentUpdate(v4, n3.__s, g5) === false || t5.__v === _2.__v) {
            n3.props = v4, n3.state = n3.__s, t5.__v !== _2.__v && (n3.__d = false), n3.__v = t5, t5.__e = _2.__e, t5.__k = _2.__k, t5.__k.forEach(function(A4) {
              A4 && (A4.__ = t5);
            }), n3.__h.length && s6.push(n3);
            break e;
          }
          n3.componentWillUpdate != null && n3.componentWillUpdate(v4, n3.__s, g5), n3.componentDidUpdate != null && n3.__h.push(function() {
            n3.componentDidUpdate(c4, i4, u4);
          });
        }
        if (n3.context = g5, n3.props = v4, n3.__v = t5, n3.__P = e3, x6 = d.__r, H6 = 0, "prototype" in m4 && m4.prototype.render)
          n3.state = n3.__s, n3.__d = false, x6 && x6(t5), a5 = n3.render(n3.props, n3.state, n3.context);
        else
          do
            n3.__d = false, x6 && x6(t5), a5 = n3.render(n3.props, n3.state, n3.context), n3.state = n3.__s;
          while (n3.__d && ++H6 < 25);
        n3.state = n3.__s, n3.getChildContext != null && (r = k(k({}, r), n3.getChildContext())), h3 || n3.getSnapshotBeforeUpdate == null || (u4 = n3.getSnapshotBeforeUpdate(c4, i4)), E3 = a5 != null && a5.type === L && a5.key == null ? a5.props.children : a5, G(e3, Array.isArray(E3) ? E3 : [E3], t5, _2, r, l4, o4, s6, f3, p7), n3.base = t5.__e, t5.__h = null, n3.__h.length && s6.push(n3), b5 && (n3.__E = n3.__ = null), n3.__e = false;
      } else
        o4 == null && t5.__v === _2.__v ? (t5.__k = _2.__k, t5.__e = _2.__e) : t5.__e = ne(_2.__e, t5, _2, r, l4, o4, s6, p7);
    (a5 = d.diffed) && a5(t5);
  } catch (A4) {
    t5.__v = null, (p7 || o4 != null) && (t5.__e = f3, t5.__h = !!p7, o4[o4.indexOf(f3)] = null), d.__e(A4, t5, _2);
  }
}
function K(e3, t5) {
  d.__c && d.__c(t5, e3), e3.some(function(_2) {
    try {
      e3 = _2.__h, _2.__h = [], e3.some(function(r) {
        r.call(_2);
      });
    } catch (r) {
      d.__e(r, _2.__v);
    }
  });
}
function ne(e3, t5, _2, r, l4, o4, s6, f3) {
  var p7, a5, n3, h3 = _2.props, c4 = t5.props, i4 = t5.type, u4 = 0;
  if (i4 === "svg" && (l4 = true), o4 != null) {
    for (; u4 < o4.length; u4++)
      if ((p7 = o4[u4]) && "setAttribute" in p7 == !!i4 && (i4 ? p7.localName === i4 : p7.nodeType === 3)) {
        e3 = p7, o4[u4] = null;
        break;
      }
  }
  if (e3 == null) {
    if (i4 === null)
      return document.createTextNode(c4);
    e3 = l4 ? document.createElementNS("http://www.w3.org/2000/svg", i4) : document.createElement(i4, c4.is && c4), o4 = null, f3 = false;
  }
  if (i4 === null)
    h3 === c4 || f3 && e3.data === c4 || (e3.data = c4);
  else {
    if (o4 = o4 && P.call(e3.childNodes), a5 = (h3 = _2.props || T).dangerouslySetInnerHTML, n3 = c4.dangerouslySetInnerHTML, !f3) {
      if (o4 != null)
        for (h3 = {}, u4 = 0; u4 < e3.attributes.length; u4++)
          h3[e3.attributes[u4].name] = e3.attributes[u4].value;
      (n3 || a5) && (n3 && (a5 && n3.__html == a5.__html || n3.__html === e3.innerHTML) || (e3.innerHTML = n3 && n3.__html || ""));
    }
    if (_e(e3, c4, h3, l4, f3), n3)
      t5.__k = [];
    else if (u4 = t5.props.children, G(e3, Array.isArray(u4) ? u4 : [u4], t5, _2, r, l4 && i4 !== "foreignObject", o4, s6, o4 ? o4[0] : _2.__k && C(_2, 0), f3), o4 != null)
      for (u4 = o4.length; u4--; )
        o4[u4] != null && j(o4[u4]);
    f3 || ("value" in c4 && (u4 = c4.value) !== void 0 && (u4 !== e3.value || i4 === "progress" && !u4 || i4 === "option" && u4 !== h3.value) && N(e3, "value", u4, h3.value, false), "checked" in c4 && (u4 = c4.checked) !== void 0 && u4 !== e3.checked && N(e3, "checked", u4, h3.checked, false));
  }
  return e3;
}
function Q(e3, t5, _2) {
  try {
    typeof e3 == "function" ? e3(t5) : e3.current = t5;
  } catch (r) {
    d.__e(r, _2);
  }
}
function X(e3, t5, _2) {
  var r, l4;
  if (d.unmount && d.unmount(e3), (r = e3.ref) && (r.current && r.current !== e3.__e || Q(r, null, t5)), (r = e3.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o4) {
        d.__e(o4, t5);
      }
    r.base = r.__P = null, e3.__c = void 0;
  }
  if (r = e3.__k)
    for (l4 = 0; l4 < r.length; l4++)
      r[l4] && X(r[l4], t5, typeof e3.type != "function");
  _2 || e3.__e == null || j(e3.__e), e3.__ = e3.__e = e3.__d = void 0;
}
function oe(e3, t5, _2) {
  return this.constructor(e3, _2);
}
function re(e3, t5, _2) {
  var r, l4, o4;
  d.__ && d.__(e3, t5), l4 = (r = typeof _2 == "function") ? null : _2 && _2.__k || t5.__k, o4 = [], W(t5, e3 = (!r && _2 || t5).__k = ee(L, null, [e3]), l4 || T, T, t5.ownerSVGElement !== void 0, !r && _2 ? [_2] : l4 ? null : t5.firstChild ? P.call(t5.childNodes) : null, o4, !r && _2 ? _2 : l4 ? l4.__e : t5.firstChild, r), K(o4, e3);
}
function ce(e3, t5) {
  var _2 = { __c: t5 = "__cC" + B++, __: e3, Consumer: function(r, l4) {
    return r.children(l4);
  }, Provider: function(r) {
    var l4, o4;
    return this.getChildContext || (l4 = [], (o4 = {})[t5] = this, this.getChildContext = function() {
      return o4;
    }, this.shouldComponentUpdate = function(s6) {
      this.props.value !== s6.value && l4.some(M);
    }, this.sub = function(s6) {
      l4.push(s6);
      var f3 = s6.componentWillUnmount;
      s6.componentWillUnmount = function() {
        l4.splice(l4.indexOf(s6), 1), f3 && f3.call(s6);
      };
    }), r.children;
  } };
  return _2.Provider.__ = _2.Consumer.contextType = _2;
}
P = V.slice, d = { __e: function(e3, t5, _2, r) {
  for (var l4, o4, s6; t5 = t5.__; )
    if ((l4 = t5.__c) && !l4.__)
      try {
        if ((o4 = l4.constructor) && o4.getDerivedStateFromError != null && (l4.setState(o4.getDerivedStateFromError(e3)), s6 = l4.__d), l4.componentDidCatch != null && (l4.componentDidCatch(e3, r || {}), s6 = l4.__d), s6)
          return l4.__E = l4;
      } catch (f3) {
        e3 = f3;
      }
  throw e3;
} }, $ = 0, Y = function(e3) {
  return e3 != null && e3.constructor === void 0;
}, U.prototype.setState = function(e3, t5) {
  var _2;
  _2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k({}, this.state), typeof e3 == "function" && (e3 = e3(k({}, _2), this.props)), e3 && k(_2, e3), e3 != null && this.__v && (t5 && this.__h.push(t5), M(this));
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
function a(_2, t5) {
  d.__h && d.__h(n, _2, f || t5), f = 0;
  var u4 = n.__H || (n.__H = { __: [], __h: [] });
  return _2 >= u4.__.length && u4.__.push({ __V: l }), u4.__[_2];
}
function P2(_2) {
  return f = 1, B2(D2, _2);
}
function B2(_2, t5, u4) {
  var o4 = a(i++, 2);
  if (o4.t = _2, !o4.__c && (o4.__ = [u4 ? u4(t5) : D2(void 0, t5), function(v4) {
    var s6 = o4.__N ? o4.__N[0] : o4.__[0], h3 = o4.t(s6, v4);
    s6 !== h3 && (o4.__N = [h3, o4.__[1]], o4.__c.setState({}));
  }], o4.__c = n, !n.u)) {
    n.u = true;
    var r = n.shouldComponentUpdate;
    n.shouldComponentUpdate = function(v4, s6, h3) {
      if (!o4.__c.__H)
        return true;
      var y4 = o4.__c.__H.__.filter(function(c4) {
        return c4.__c;
      });
      if (y4.every(function(c4) {
        return !c4.__N;
      }))
        return !r || r.call(this, v4, s6, h3);
      var E3 = false;
      return y4.forEach(function(c4) {
        if (c4.__N) {
          var k5 = c4.__[0];
          c4.__ = c4.__N, c4.__N = void 0, k5 !== c4.__[0] && (E3 = true);
        }
      }), !!E3 && (!r || r.call(this, v4, s6, h3));
    };
  }
  return o4.__N || o4.__;
}
function j2(_2, t5) {
  var u4 = a(i++, 3);
  !d.__s && H(u4.__H, t5) && (u4.__ = _2, u4.i = t5, n.__H.__h.push(u4));
}
function w2(_2) {
  return f = 5, x(function() {
    return { current: _2 };
  }, []);
}
function x(_2, t5) {
  var u4 = a(i++, 7);
  return H(u4.__H, t5) ? (u4.__V = _2(), u4.i = t5, u4.__h = _2, u4.__V) : u4.__;
}
function L2(_2, t5) {
  return f = 8, x(function() {
    return _2;
  }, t5);
}
function M2(_2) {
  var t5 = n.context[_2.__c], u4 = a(i++, 9);
  return u4.c = _2, t5 ? (u4.__ == null && (u4.__ = true, t5.sub(n)), t5.props.value) : _2.__;
}
function R2() {
  for (var _2; _2 = q2.shift(); )
    if (_2.__P && _2.__H)
      try {
        _2.__H.__h.forEach(m), _2.__H.__h.forEach(p), _2.__H.__h = [];
      } catch (t5) {
        _2.__H.__h = [], d.__e(t5, _2.__v);
      }
}
d.__b = function(_2) {
  typeof _2.type != "function" || _2.o || _2.type === L ? _2.o || (_2.o = _2.__ && _2.__.o ? _2.__.o : "") : _2.o = (_2.__ && _2.__.o ? _2.__.o : "") + (_2.__ && _2.__.__k ? _2.__.__k.indexOf(_2) : 0), n = null, V2 && V2(_2);
}, d.__r = function(_2) {
  g && g(_2), i = 0;
  var t5 = (n = _2.__c).__H;
  t5 && (d2 === n ? (t5.__h = [], n.__h = [], t5.__.forEach(function(u4) {
    u4.__N && (u4.__ = u4.__N), u4.__V = l, u4.__N = u4.i = void 0;
  })) : (t5.__h.forEach(m), t5.__h.forEach(p), t5.__h = [])), d2 = n;
}, d.diffed = function(_2) {
  b && b(_2);
  var t5 = _2.__c;
  t5 && t5.__H && (t5.__H.__h.length && (q2.push(t5) !== 1 && N2 === d.requestAnimationFrame || ((N2 = d.requestAnimationFrame) || S2)(R2)), t5.__H.__.forEach(function(u4) {
    u4.i && (u4.__H = u4.i), u4.__V !== l && (u4.__ = u4.__V), u4.i = void 0, u4.__V = l;
  })), d2 = n = null;
}, d.__c = function(_2, t5) {
  t5.some(function(u4) {
    try {
      u4.__h.forEach(m), u4.__h = u4.__h.filter(function(o4) {
        return !o4.__ || p(o4);
      });
    } catch (o4) {
      t5.some(function(r) {
        r.__h && (r.__h = []);
      }), t5 = [], d.__e(o4, u4.__v);
    }
  }), C2 && C2(_2, t5);
}, d.unmount = function(_2) {
  A && A(_2);
  var t5, u4 = _2.__c;
  u4 && u4.__H && (u4.__H.__.forEach(function(o4) {
    try {
      m(o4);
    } catch (r) {
      t5 = r;
    }
  }), u4.__H = void 0, t5 && d.__e(t5, u4.__v));
};
var F2 = typeof requestAnimationFrame == "function";
function S2(_2) {
  var t5, u4 = function() {
    clearTimeout(o4), F2 && cancelAnimationFrame(t5), setTimeout(_2);
  }, o4 = setTimeout(u4, 100);
  F2 && (t5 = requestAnimationFrame(u4));
}
function m(_2) {
  var t5 = n, u4 = _2.__c;
  typeof u4 == "function" && (_2.__c = void 0, u4()), n = t5;
}
function p(_2) {
  var t5 = n;
  _2.__c = _2.__(), n = t5;
}
function H(_2, t5) {
  return !_2 || _2.length !== t5.length || t5.some(function(u4, o4) {
    return u4 !== _2[o4];
  });
}
function D2(_2, t5) {
  return typeof t5 == "function" ? t5(_2) : t5;
}

// https://esm.sh/v103/memoize-one@6.0.0/deno/memoize-one.js
var s = Number.isNaN || function(r) {
  return typeof r == "number" && r !== r;
};

// https://esm.sh/v103/p-throttle@5.0.0/deno/p-throttle.js
var a2 = class extends Error {
  constructor() {
    super("Throttled function aborted"), this.name = "AbortError";
  }
};
function m2({ limit: i4, interval: s6, strict: f3 }) {
  if (!Number.isFinite(i4))
    throw new TypeError("Expected `limit` to be a finite number");
  if (!Number.isFinite(s6))
    throw new TypeError("Expected `interval` to be a finite number");
  let r = /* @__PURE__ */ new Map(), u4 = 0, c4 = 0;
  function p7() {
    let e3 = Date.now();
    return e3 - u4 > s6 ? (c4 = 1, u4 = e3, 0) : (c4 < i4 ? c4++ : (u4 += s6, c4 = 1), u4 - e3);
  }
  let n3 = [];
  function h3() {
    let e3 = Date.now();
    if (n3.length < i4)
      return n3.push(e3), 0;
    let t5 = n3.shift() + s6;
    return e3 >= t5 ? (n3.push(e3), 0) : (n3.push(t5), t5 - e3);
  }
  let w6 = f3 ? h3 : p7;
  return (e3) => {
    let t5 = function(...o4) {
      if (!t5.isEnabled)
        return (async () => e3.apply(this, o4))();
      let l4;
      return new Promise((d4, b5) => {
        l4 = setTimeout(() => {
          d4(e3.apply(this, o4)), r.delete(l4);
        }, w6()), r.set(l4, b5);
      });
    };
    return t5.abort = () => {
      for (let o4 of r.keys())
        clearTimeout(o4), r.get(o4)(new a2());
      r.clear(), n3.splice(0, n3.length);
    }, t5.isEnabled = true, t5;
  };
}

// https://esm.sh/v103/@twind/core@1.0.1/deno/core.js
var F3;
function lt(t5) {
  return [...t5.v, (t5.i ? "!" : "") + t5.n].join(":");
}
function st(t5, e3 = ",") {
  return t5.map(lt).join(e3);
}
var W2 = typeof CSS < "u" && CSS.escape || ((t5) => t5.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
function V3(t5) {
  for (var e3 = 9, r = t5.length; r--; )
    e3 = Math.imul(e3 ^ t5.charCodeAt(r), 1597334677);
  return "#" + ((e3 ^ e3 >>> 9) >>> 0).toString(36);
}
function kt(t5, e3 = "@media ") {
  return e3 + x2(t5).map((r) => (typeof r == "string" && (r = { min: r }), r.raw || Object.keys(r).map((n3) => `(${n3}-width:${r[n3]})`).join(" and "))).join(",");
}
function x2(t5 = []) {
  return Array.isArray(t5) ? t5 : t5 == null ? [] : [t5];
}
function At(t5) {
  return t5;
}
function D3() {
}
var w3 = { d: 0, b: 134217728, c: 268435456, a: 671088640, u: 805306368, o: 939524096 };
function jt(t5) {
  var e3;
  return ((e3 = t5.match(/[-=:;]/g)) == null ? void 0 : e3.length) || 0;
}
function X2(t5) {
  return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(t5) ? +RegExp.$1 / (RegExp.$2 ? 15 : 1) / 10 : 0, 15) << 22 | Math.min(jt(t5), 15) << 18;
}
var qt = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
function at({ n: t5, i: e3, v: r = [] }, n3, i4, l4) {
  for (let a5 of (t5 && (t5 = lt({ n: t5, i: e3, v: r })), l4 = [...x2(l4)], r)) {
    let s6 = n3.theme("screens", a5);
    for (let u4 of x2(s6 && kt(s6) || n3.v(a5))) {
      var o4;
      l4.push(u4), i4 |= s6 ? 67108864 | X2(u4) : a5 == "dark" ? 1073741824 : u4[0] == "@" ? X2(u4) : (o4 = u4, 1 << ~(/:([a-z-]+)/.test(o4) && ~qt.indexOf(RegExp.$1.slice(2, 7)) || -18));
    }
  }
  return { n: t5, p: i4, r: l4, i: e3 };
}
var ut = /* @__PURE__ */ new Map();
function tt(t5) {
  if (t5.d) {
    let e3 = [], r = Y2(t5.r.reduce((n3, i4) => i4[0] == "@" ? (e3.push(i4), n3) : i4 ? Y2(n3, (l4) => Y2(i4, (o4) => {
      let a5 = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o4);
      if (a5) {
        let s6 = l4.indexOf(a5[1]);
        return ~s6 ? l4.slice(0, s6) + a5[0] + l4.slice(s6 + a5[1].length) : Z2(l4, o4);
      }
      return Z2(o4, l4);
    })) : n3, "&"), (n3) => Z2(n3, t5.n ? "." + W2(t5.n) : ""));
    return r && e3.push(r.replace(/:merge\((.+?)\)/g, "$1")), e3.reduceRight((n3, i4) => i4 + "{" + n3 + "}", t5.d);
  }
}
function Y2(t5, e3) {
  return t5.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r, n3, i4) => e3(n3) + i4);
}
function Z2(t5, e3) {
  return t5.replace(/&/g, e3);
}
var Dt = new Intl.Collator("en", { numeric: true });
function St(t5, e3) {
  for (var r = 0, n3 = t5.length; r < n3; ) {
    let i4 = n3 + r >> 1;
    0 >= Mt(t5[i4], e3) ? r = i4 + 1 : n3 = i4;
  }
  return n3;
}
function Mt(t5, e3) {
  let r = t5.p & w3.o;
  return r == (e3.p & w3.o) && (r == w3.b || r == w3.o) ? 0 : t5.p - e3.p || t5.o - e3.o || Dt.compare(t5.n, e3.n);
}
function H2(t5, e3) {
  return Math.round(parseInt(t5, 16) * e3);
}
function T2(t5, e3 = {}) {
  if (typeof t5 == "function")
    return t5(e3);
  let { opacityValue: r = "1", opacityVariable: n3 } = e3, i4 = n3 ? `var(${n3})` : r;
  if (t5.includes("<alpha-value>"))
    return t5.replace("<alpha-value>", i4);
  if (t5[0] == "#" && (t5.length == 4 || t5.length == 7)) {
    let l4 = (t5.length - 1) / 3, o4 = [17, 1, 0.062272][l4 - 1];
    return `rgba(${[H2(t5.substr(1, l4), o4), H2(t5.substr(1 + l4, l4), o4), H2(t5.substr(1 + 2 * l4, l4), o4), i4]})`;
  }
  return i4 == "1" ? t5 : i4 == "0" ? "#0000" : t5.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${i4})`);
}
function ct(t5, e3, r, n3, i4 = []) {
  return function l4(o4, { n: a5, p: s6, r: u4 = [], i: f3 }, c4) {
    let p7 = [], d4 = "", v4 = 0, g5 = 0;
    for (let h3 in o4 || {}) {
      var y4, A4;
      let b5 = o4[h3];
      if (h3[0] == "@") {
        if (!b5)
          continue;
        if (h3[1] == "a") {
          p7.push(...ht(a5, s6, N3("" + b5), c4, s6, u4, f3, true));
          continue;
        }
        if (h3[1] == "l") {
          for (let m4 of x2(b5))
            p7.push(...l4(m4, { n: a5, p: (y4 = w3[h3[7]], s6 & ~w3.o | y4), r: u4, i: f3 }, c4));
          continue;
        }
        if (h3[1] == "i") {
          p7.push(...x2(b5).map((m4) => ({ p: -1, o: 0, r: [], d: h3 + " " + m4 })));
          continue;
        }
        if (h3[1] == "k") {
          p7.push({ p: w3.d, o: 0, r: [h3], d: l4(b5, { p: w3.d }, c4).map(tt).join("") });
          continue;
        }
        if (h3[1] == "f") {
          p7.push(...x2(b5).map((m4) => ({ p: w3.d, o: 0, r: [h3], d: l4(m4, { p: w3.d }, c4).map(tt).join("") })));
          continue;
        }
      }
      if (typeof b5 != "object" || Array.isArray(b5))
        h3 == "label" && b5 ? a5 = b5 + V3(JSON.stringify([s6, f3, o4])) : (b5 || b5 === 0) && (h3 = h3.replace(/[A-Z]/g, (m4) => "-" + m4.toLowerCase()), g5 += 1, v4 = Math.max(v4, (A4 = h3)[0] == "-" ? 0 : jt(A4) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(A4) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), d4 += (d4 ? ";" : "") + x2(b5).map((m4) => c4.s(h3, ft("" + m4, c4.theme) + (f3 ? " !important" : ""))).join(";"));
      else if (h3[0] == "@" || h3.includes("&")) {
        let m4 = s6;
        h3[0] == "@" && (h3 = h3.replace(/\bscreen\(([^)]+)\)/g, (C6, $4) => {
          let j5 = c4.theme("screens", $4);
          return j5 ? (m4 |= 67108864, kt(j5, "")) : C6;
        }), m4 |= X2(h3)), p7.push(...l4(b5, { n: a5, p: m4, r: [...u4, h3], i: f3 }, c4));
      } else
        p7.push(...l4(b5, { p: s6, r: [...u4, h3] }, c4));
    }
    return p7.unshift({ n: a5, p: s6, o: Math.max(0, 15 - g5) + 1.5 * Math.min(v4 || 15, 15), r: u4, d: d4 }), p7.sort(Mt);
  }(t5, at(e3, r, n3, i4), r);
}
function ft(t5, e3) {
  return t5.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r, n3, i4, l4, o4) => {
    let a5 = e3(i4, o4);
    return typeof a5 == "function" && /color|fill|stroke/i.test(i4) ? T2(a5) : "" + a5;
  });
}
function pt(t5, e3) {
  let r, n3 = [];
  for (let i4 of t5)
    i4.d && i4.n ? r?.p == i4.p && "" + r.r == "" + i4.r ? (r.c = [r.c, i4.c].filter(Boolean).join(" "), r.d = r.d + ";" + i4.d) : n3.push(r = { ...i4, n: i4.n && e3 }) : n3.push({ ...i4, n: i4.n && e3 });
  return n3;
}
function B3(t5, e3, r = w3.u, n3, i4) {
  let l4 = [];
  for (let o4 of t5)
    for (let a5 of function(s6, u4, f3, c4, p7) {
      var d4;
      s6 = { ...s6, i: s6.i || p7 };
      let v4 = function(g5, y4) {
        let A4 = ut.get(g5.n);
        return A4 ? A4(g5, y4) : y4.r(g5.n, g5.v[0] == "dark");
      }(s6, u4);
      return v4 ? typeof v4 == "string" ? ({ r: c4, p: f3 } = at(s6, u4, f3, c4), pt(B3(N3(v4), u4, f3, c4, s6.i), s6.n)) : Array.isArray(v4) ? v4.map((g5) => {
        var y4, A4;
        return { o: 0, ...g5, r: [...x2(c4), ...x2(g5.r)], p: (y4 = f3, A4 = (d4 = g5.p) != null ? d4 : f3, y4 & ~w3.o | A4) };
      }) : ct(v4, s6, u4, f3, c4) : [{ c: lt(s6), p: 0, o: 0, r: [] }];
    }(o4, e3, r, n3, i4))
      l4.splice(St(l4, a5), 0, a5);
  return l4;
}
function ht(t5, e3, r, n3, i4, l4, o4, a5) {
  return pt((a5 ? r.flatMap((s6) => B3([s6], n3, i4, l4, o4)) : B3(r, n3, i4, l4, o4)).map((s6) => s6.p & w3.o && (s6.n || e3 == w3.b) ? { ...s6, p: s6.p & ~w3.o | e3, o: 0 } : s6), t5);
}
function Ot(t5, e3, r, n3) {
  var i4;
  return i4 = (l4, o4) => {
    let { n: a5, p: s6, r: u4, i: f3 } = at(l4, o4, e3);
    return r && ht(a5, e3, r, o4, s6, u4, f3, n3);
  }, ut.set(t5, i4), t5;
}
function K2(t5, e3) {
  if (t5[t5.length - 1] != "(") {
    let r = [], n3 = false, i4 = false, l4 = "";
    for (let o4 of t5)
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
function Jt(t5, e3, r) {
  return r.indexOf(t5) == e3;
}
var yt = /* @__PURE__ */ new Map();
function N3(t5) {
  let e3 = yt.get(t5);
  if (!e3) {
    let r = [], n3 = [[]], i4 = 0, l4 = 0, o4 = null, a5 = 0, s6 = (u4, f3 = 0) => {
      i4 != a5 && (r.push(t5.slice(i4, a5 + f3)), u4 && K2(r, n3)), i4 = a5 + 1;
    };
    for (; a5 < t5.length; a5++) {
      let u4 = t5[a5];
      if (l4)
        t5[a5 - 1] != "\\" && (l4 += +(u4 == "[") || -(u4 == "]"));
      else if (u4 == "[")
        l4 += 1;
      else if (o4)
        t5[a5 - 1] != "\\" && o4.test(t5.slice(a5)) && (o4 = null, i4 = a5 + RegExp.lastMatch.length);
      else if (u4 == "/" && t5[a5 - 1] != "\\" && (t5[a5 + 1] == "*" || t5[a5 + 1] == "/"))
        o4 = t5[a5 + 1] == "*" ? /^\*\// : /^[\r\n]/;
      else if (u4 == "(")
        s6(), r.push(u4);
      else if (u4 == ":")
        t5[a5 + 1] != ":" && s6(false, 1);
      else if (/[\s,)]/.test(u4)) {
        s6(true);
        let f3 = r.lastIndexOf("(");
        if (u4 == ")") {
          let c4 = r[f3 - 1];
          if (/[~@]$/.test(c4)) {
            let p7 = n3.shift();
            r.length = f3, K2([...r, "#"], n3);
            let { v: d4 } = n3[0].pop();
            for (let v4 of p7)
              v4.v.splice(+(v4.v[0] == "dark") - +(d4[0] == "dark"), d4.length);
            K2([...r, Ot(c4.length > 1 ? c4.slice(0, -1) + V3(JSON.stringify([c4, p7])) : c4 + "(" + st(p7) + ")", w3.a, p7, /@$/.test(c4))], n3);
          }
          f3 = r.lastIndexOf("(", f3 - 1);
        }
        r.length = f3 + 1;
      } else
        /[~@]/.test(u4) && t5[a5 + 1] == "(" && n3.unshift([]);
    }
    s6(true), yt.set(t5, e3 = n3[0]);
  }
  return e3;
}
function Ct(t5, e3, r) {
  return e3.reduce((n3, i4, l4) => n3 + r(i4) + t5[l4 + 1], t5[0]);
}
function G2(t5, e3) {
  return Array.isArray(t5) && Array.isArray(t5.raw) ? Ct(t5, e3, (r) => Q2(r).trim()) : e3.filter(Boolean).reduce((r, n3) => r + Q2(n3), t5 ? Q2(t5) : "");
}
function Q2(t5) {
  let e3, r = "";
  if (t5 && typeof t5 == "object")
    if (Array.isArray(t5))
      (e3 = G2(t5[0], t5.slice(1))) && (r += " " + e3);
    else
      for (let n3 in t5)
        t5[n3] && (r += " " + n3);
  else
    t5 != null && typeof t5 != "boolean" && (r += " " + t5);
  return r;
}
var ae = Et("@");
var ue = Et("~");
function Et(t5) {
  return new Proxy(function(r, ...n3) {
    return e3("", r, n3);
  }, { get: (r, n3) => n3 in r ? r[n3] : function(i4, ...l4) {
    return e3(n3, i4, l4);
  } });
  function e3(r, n3, i4) {
    return st(N3(r + t5 + "(" + G2(n3, i4) + ")"));
  }
}
function U2(t5, e3) {
  return Array.isArray(t5) ? mt(Ct(t5, e3, (r) => r != null && typeof r != "boolean" ? r : "")) : typeof t5 == "string" ? mt(t5) : [t5];
}
var Bt = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
function mt(t5) {
  let e3;
  t5 = t5.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
  let r = [{}], n3 = [r[0]], i4 = [];
  for (; e3 = Bt.exec(t5); )
    e3[4] && (r.shift(), i4.shift()), e3[3] ? (i4.unshift(e3[3]), r.unshift({}), n3.push(i4.reduce((l4, o4) => ({ [o4]: l4 }), r[0]))) : e3[4] || (r[0][e3[1]] && (r.unshift({}), n3.push(i4.reduce((l4, o4) => ({ [o4]: l4 }), r[0]))), r[0][e3[1]] = e3[2]);
  return n3;
}
function dt(t5, ...e3) {
  var r, n3;
  let i4 = U2(t5, e3), l4 = (((r = i4.find((o4) => o4.label)) == null ? void 0 : r.label) || "css") + V3(JSON.stringify(i4));
  return n3 = (o4, a5) => pt(i4.flatMap((s6) => ct(s6, o4, a5, w3.o)), l4), ut.set(l4, n3), l4;
}
var ce2 = new Proxy(function(t5, e3) {
  return bt("animation", t5, e3);
}, { get: (t5, e3) => e3 in t5 ? t5[e3] : function(r, n3) {
  return bt(e3, r, n3);
} });
function bt(t5, e3, r) {
  return { toString: () => dt({ label: t5, "@layer components": { ...typeof e3 == "object" ? e3 : { animation: e3 }, animationName: "" + r } }) };
}
var Ut = Symbol();
function Rt({ presets: t5 = [], ...e3 }) {
  let r = { preflight: e3.preflight !== false && [], darkMode: void 0, darkColor: void 0, theme: {}, variants: x2(e3.variants), rules: x2(e3.rules), ignorelist: x2(e3.ignorelist), hash: e3.hash, stringify: e3.stringify || Wt };
  for (let n3 of x2([...t5, { darkMode: e3.darkMode, darkColor: e3.darkColor, preflight: e3.preflight !== false && x2(e3.preflight), theme: e3.theme, hash: e3.hash, stringify: e3.stringify }])) {
    let { preflight: i4, darkMode: l4 = r.darkMode, darkColor: o4 = r.darkColor, theme: a5, variants: s6, rules: u4, ignorelist: f3, hash: c4 = r.hash, stringify: p7 = r.stringify } = typeof n3 == "function" ? n3(r) : n3;
    r = { preflight: r.preflight !== false && i4 !== false && [...r.preflight, ...x2(i4)], darkMode: l4, darkColor: o4, theme: { ...r.theme, ...a5, extend: { ...r.theme.extend, ...a5?.extend } }, variants: [...r.variants, ...x2(s6)], rules: [...r.rules, ...x2(u4)], ignorelist: [...r.ignorelist, ...x2(f3)], hash: c4, stringify: p7 };
  }
  return r;
}
function Wt(t5, e3) {
  return t5 + ":" + e3;
}
function et(t5, e3) {
  return typeof t5 == "function" ? t5 : typeof t5 == "string" && /^[\w-]+$/.test(t5) ? (r, n3) => ({ [t5]: e3 ? e3(r, n3) : rt(r, 1) }) : (r) => t5 || { [r[1]]: rt(r, 2) };
}
function rt(t5, e3, r = t5.slice(e3).find(Boolean) || t5.$$ || t5.input) {
  return t5.input[0] == "-" ? `calc(${r} * -1)` : r;
}
function vt(t5, e3, r, n3, i4, l4) {
  for (let o4 of e3) {
    let a5 = r.get(o4);
    a5 || r.set(o4, a5 = n3(o4));
    let s6 = a5(t5, i4, l4);
    if (s6)
      return s6;
  }
}
function Ht(t5) {
  var e3;
  return ot(t5[0], typeof (e3 = t5[1]) == "function" ? e3 : () => e3);
}
function Kt(t5) {
  var e3, r;
  return Array.isArray(t5) ? ot(t5[0], et(t5[1], t5[2])) : ot(t5, et(e3, r));
}
function ot(t5, e3) {
  return Nt(t5, (r, n3, i4, l4) => {
    let o4 = n3.exec(r);
    if (o4)
      return o4.$$ = r.slice(o4[0].length), o4.dark = l4, e3(o4, i4);
  });
}
function Nt(t5, e3) {
  let r = x2(t5).map(Qt);
  return (n3, i4, l4) => {
    for (let o4 of r) {
      let a5 = e3(n3, o4, i4, l4);
      if (a5)
        return a5;
    }
  };
}
function Qt(t5) {
  return typeof t5 == "string" ? RegExp("^" + t5 + (t5.includes("$") || t5.slice(-1) == "-" ? "" : "$")) : t5;
}
function $t(t5, e3) {
  return t5.replace(/--(tw(?:-[\w-]+)?)\b/g, (r, n3) => "--" + e3(n3).replace("#", ""));
}
function Xt(t5, e3) {
  let r = Rt(t5), n3 = function({ theme: s6, darkMode: u4, darkColor: f3, variants: c4, rules: p7, hash: d4, stringify: v4, ignorelist: g5 }) {
    let y4 = /* @__PURE__ */ new Map(), A4 = /* @__PURE__ */ new Map(), h3 = /* @__PURE__ */ new Map(), b5 = /* @__PURE__ */ new Map(), m4 = Nt(g5, ($4, j5) => j5.test($4));
    c4.push(["dark", Array.isArray(u4) || u4 == "class" ? `${x2(u4)[1] || ".dark"} &` : typeof u4 == "string" && u4 != "media" ? u4 : "@media (prefers-color-scheme:dark)"]);
    let C6 = typeof d4 == "function" ? ($4) => d4($4, V3) : d4 ? V3 : At;
    return { theme: function({ extend: $4 = {}, ...j5 }) {
      let E3 = {}, Ft = { get colors() {
        return I5("colors");
      }, theme: I5, negative: () => ({}), breakpoints(k5) {
        let M5 = {};
        for (let S8 in k5)
          typeof k5[S8] == "string" && (M5["screen-" + S8] = k5[S8]);
        return M5;
      } };
      return I5;
      function I5(k5, M5, S8, L5) {
        if (k5) {
          var q5;
          if ({ 1: k5, 2: L5 } = /^(\S+?)(?:\s*\/\s*([^/]+))?$/.exec(k5) || [, k5], /[.[]/.test(k5)) {
            let R6 = [];
            k5.replace(/\[([^\]]+)\]|([^.[]+)/g, (J3, It, Lt = It) => R6.push(Lt)), k5 = R6.shift(), S8 = M5, M5 = R6.join("-");
          }
          let O4 = E3[k5] || Object.assign(Object.assign(E3[k5] = {}, gt2(j5, k5)), gt2($4, k5));
          if (M5 == null)
            return O4;
          let P5 = (q5 = O4[M5 || "DEFAULT"]) != null ? q5 : S8;
          return L5 ? T2(P5, { opacityValue: ft(L5, I5) }) : P5;
        }
        let _2 = {};
        for (let O4 of [...Object.keys(j5), ...Object.keys($4)])
          _2[O4] = I5(O4);
        return _2;
      }
      function gt2(k5, M5) {
        let S8 = k5[M5];
        return typeof S8 == "function" && (S8 = S8(Ft)), S8 && /color|fill|stroke/i.test(M5) ? function L5(q5, _2 = []) {
          let O4 = {};
          for (let P5 in q5) {
            let R6 = q5[P5], J3 = [..._2, P5];
            O4[J3.join("-")] = R6, P5 == "DEFAULT" && (J3 = _2, O4[_2.join("-")] = R6), typeof R6 == "object" && Object.assign(O4, L5(R6, J3));
          }
          return O4;
        }(S8) : S8;
      }
    }(s6), e: W2, h: C6, s($4, j5) {
      return v4($t($4, C6), $t(j5, C6), this);
    }, d($4, j5, E3) {
      return f3?.($4, j5, this, E3);
    }, v($4) {
      return y4.has($4) || y4.set($4, vt($4, c4, A4, Ht, this) || "&:" + $4), y4.get($4);
    }, r($4, j5) {
      let E3 = JSON.stringify([$4, j5]);
      return h3.has(E3) || h3.set(E3, !m4($4, this) && vt($4, p7, b5, Kt, this, j5)), h3.get(E3);
    } };
  }(r), i4 = /* @__PURE__ */ new Map(), l4 = [], o4 = /* @__PURE__ */ new Set();
  function a5(s6) {
    let u4 = s6.n && n3.h(s6.n), f3 = tt(u4 ? { ...s6, n: u4 } : s6);
    if (f3 && !o4.has(f3)) {
      o4.add(f3);
      let c4 = St(l4, s6);
      e3.insert(f3, c4, s6), l4.splice(c4, 0, s6);
    }
    return u4;
  }
  return e3.resume((s6) => i4.set(s6, s6), (s6, u4) => {
    e3.insert(s6, l4.length, u4), l4.push(u4), o4.add(s6);
  }), Object.defineProperties(function(s6) {
    if (!i4.size)
      for (let f3 of x2(r.preflight))
        typeof f3 == "function" && (f3 = f3(n3)), f3 && (typeof f3 == "string" ? ht("", w3.b, N3(f3), n3, w3.b, [], false, true) : ct(f3, {}, n3, w3.b)).forEach(a5);
    s6 = "" + s6;
    let u4 = i4.get(s6);
    if (!u4) {
      let f3 = /* @__PURE__ */ new Set();
      for (let c4 of B3(N3(s6), n3))
        f3.add(c4.c).add(a5(c4));
      u4 = [...f3].filter(Boolean).join(" "), i4.set(s6, u4).set(u4, u4);
    }
    return u4;
  }, Object.getOwnPropertyDescriptors({ get target() {
    return e3.target;
  }, theme: n3.theme, config: r, snapshot() {
    let s6 = e3.snapshot(), u4 = new Set(o4), f3 = new Map(i4), c4 = [...l4];
    return () => {
      s6(), o4 = u4, i4 = f3, l4 = c4;
    };
  }, clear() {
    e3.clear(), o4 = /* @__PURE__ */ new Set(), i4 = /* @__PURE__ */ new Map(), l4 = [];
  }, destroy() {
    this.clear(), e3.destroy();
  } }));
}
function zt(t5, e3) {
  return t5 != e3 && "" + t5.split(" ").sort() != "" + e3.split(" ").sort();
}
function te(t5 = z2, e3 = document.documentElement) {
  if (!e3)
    return t5;
  let r = new MutationObserver(i4);
  r.observe(e3, { attributeFilter: ["class"], subtree: true, childList: true }), l4(e3), i4([{ target: e3, type: "" }]);
  let { destroy: n3 } = t5;
  return t5.destroy = () => {
    r.disconnect(), n3.call(t5);
  }, t5;
  function i4(o4) {
    for (let { type: a5, target: s6 } of o4)
      if (a5[0] == "a")
        l4(s6);
      else
        for (let u4 of s6.querySelectorAll("[class]"))
          l4(u4);
    r.takeRecords();
  }
  function l4(o4) {
    let a5, s6 = o4.getAttribute("class");
    s6 && zt(s6, a5 = t5(s6)) && o4.setAttribute("class", a5);
  }
}
function _t(t5) {
  let e3 = document.querySelector(t5 || "style[data-twind]");
  return e3 && e3.tagName == "STYLE" || ((e3 = document.createElement("style")).dataset.twind = "", document.head.prepend(e3)), e3;
}
function ee2(t5) {
  let e3 = t5?.cssRules ? t5 : (t5 && typeof t5 != "string" ? t5 : _t(t5)).sheet;
  return { target: e3, snapshot() {
    let r = Array.from(e3.cssRules, (n3) => n3.cssText);
    return () => {
      this.clear(), r.forEach(this.insert);
    };
  }, clear() {
    for (let r = e3.cssRules.length; r--; )
      e3.deleteRule(r);
  }, destroy() {
    var r;
    (r = e3.ownerNode) == null || r.remove();
  }, insert(r, n3) {
    try {
      e3.insertRule(r, n3);
    } catch {
      e3.insertRule(":root{}", n3), /:-[mwo]/.test(r);
    }
  }, resume: D3 };
}
function re2(t5) {
  let e3 = t5 && typeof t5 != "string" ? t5 : _t(t5);
  return { target: e3, snapshot() {
    let r = Array.from(e3.childNodes, (n3) => n3.textContent);
    return () => {
      this.clear(), r.forEach(this.insert);
    };
  }, clear() {
    e3.textContent = "";
  }, destroy() {
    e3.remove();
  }, insert(r, n3) {
    e3.insertBefore(document.createTextNode(r), e3.childNodes[n3] || null);
  }, resume: D3 };
}
function Pt(t5, e3) {
  let r = t5 ? re2() : ee2();
  return e3 || (r.resume = ne2), r;
}
function Tt(t5) {
  return (t5.ownerNode || t5).textContent || (t5.cssRules ? Array.from(t5.cssRules, (e3) => e3.cssText) : x2(t5)).join("");
}
function ne2(t5, e3) {
  let r = Tt(this.target), n3 = /\/\*!([\da-z]+),([\da-z]+)(?:,(.+?))?\*\//g;
  if (n3.test(r)) {
    var i4;
    let l4;
    for (let o4 of (n3.lastIndex = 0, this.clear(), document.querySelectorAll("[class]")))
      t5(o4.getAttribute("class"));
    for (; i4 = n3.exec(r), l4 && e3(r.slice(l4.index + l4[0].length, i4?.index), { p: parseInt(l4[1], 36), o: parseInt(l4[2], 36) / 2, n: l4[3] }), l4 = i4; )
      ;
  }
}
var z2 = new Proxy(D3, { apply: (t5, e3, r) => F3(r[0]), get(t5, e3) {
  let r = F3[e3];
  return typeof r == "function" ? function() {
    return r.apply(F3, arguments);
  } : r;
} });
function ie(t5 = {}, e3 = Pt, r) {
  return F3?.destroy(), F3 = te(Xt(t5, typeof e3 == "function" ? e3() : e3), r);
}
function $e(t5, e3 = true) {
  var r;
  let n3 = Rt(t5);
  return ie({ ...n3, hash: (r = n3.hash) != null ? r : e3 }, () => Pt(!e3));
}
var xe = function t(e3) {
  return new Proxy(function(r, ...n3) {
    return xt(e3, "", r, n3);
  }, { get: (r, n3) => n3 === "bind" ? t : n3 in r ? r[n3] : function(i4, ...l4) {
    return xt(e3, n3, i4, l4);
  } });
}();
function xt(t5, e3, r, n3) {
  return { toString() {
    let i4 = U2(r, n3), l4 = W2(e3 + V3(JSON.stringify([e3, i4])));
    return (typeof t5 == "function" ? t5 : z2)(dt({ [`@keyframes ${l4}`]: U2(r, n3) })), l4;
  } };
}

// https://esm.sh/v103/style-vendorizer@2.2.3/deno/style-vendorizer.js
var t2 = /* @__PURE__ */ new Map([["align-self", "-ms-grid-row-align"], ["color-adjust", "-webkit-print-color-adjust"], ["column-gap", "grid-column-gap"], ["forced-color-adjust", "-ms-high-contrast-adjust"], ["gap", "grid-gap"], ["grid-template-columns", "-ms-grid-columns"], ["grid-template-rows", "-ms-grid-rows"], ["justify-self", "-ms-grid-column-align"], ["margin-inline-end", "-webkit-margin-end"], ["margin-inline-start", "-webkit-margin-start"], ["mask-border", "-webkit-mask-box-image"], ["mask-border-outset", "-webkit-mask-box-image-outset"], ["mask-border-slice", "-webkit-mask-box-image-slice"], ["mask-border-source", "-webkit-mask-box-image-source"], ["mask-border-repeat", "-webkit-mask-box-image-repeat"], ["mask-border-width", "-webkit-mask-box-image-width"], ["overflow-wrap", "word-wrap"], ["padding-inline-end", "-webkit-padding-end"], ["padding-inline-start", "-webkit-padding-start"], ["print-color-adjust", "color-adjust"], ["row-gap", "grid-row-gap"], ["scroll-margin-bottom", "scroll-snap-margin-bottom"], ["scroll-margin-left", "scroll-snap-margin-left"], ["scroll-margin-right", "scroll-snap-margin-right"], ["scroll-margin-top", "scroll-snap-margin-top"], ["scroll-margin", "scroll-snap-margin"], ["text-combine-upright", "-ms-text-combine-horizontal"]]);
function e(r) {
  return t2.get(r);
}
function s2(r) {
  var i4 = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(r);
  return i4 ? i4[1] ? 1 : i4[2] ? 2 : i4[3] ? 3 : 5 : 0;
}
function o2(r, i4) {
  var a5 = /^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(r);
  return a5 ? a5[1] ? /^sti/i.test(i4) ? 1 : 0 : a5[2] ? /^pat/i.test(i4) ? 1 : 0 : a5[3] ? /^image-/i.test(i4) ? 1 : 0 : a5[4] ? i4[3] === "-" ? 2 : 0 : /^(?:inline-)?grid$/i.test(i4) ? 4 : 0 : 0;
}

// https://esm.sh/v103/@twind/preset-autoprefix@1.0.1/deno/preset-autoprefix.js
var c = [["-webkit-", 1], ["-moz-", 2], ["-ms-", 4]];
function y() {
  return ({ stringify: t5 }) => ({ stringify(r, s6, e3) {
    let a5 = "", f3 = e(r);
    f3 && (a5 += t5(f3, s6, e3) + ";");
    let u4 = s2(r), i4 = o2(r, s6);
    for (let o4 of c)
      u4 & o4[1] && (a5 += t5(o4[0] + r, s6, e3) + ";"), i4 & o4[1] && (a5 += t5(r, o4[0] + s6, e3) + ";");
    return a5 + t5(r, s6, e3);
  } });
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
var D4 = { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d" };
var U3 = { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b" };
var E = { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a" };
var L3 = { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63" };
var S3 = { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e" };
var v = { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" };
var z3 = { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81" };
var O2 = { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95" };
var R3 = { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87" };
var W3 = { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75" };
var I2 = { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843" };
var M3 = { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337" };
var l2 = { __proto__: null, inherit: s3, current: d3, transparent: p2, black: x3, white: b2, slate: u, gray: g2, zinc: h, neutral: y2, stone: k2, red: C3, orange: T3, amber: F4, yellow: w4, lime: A2, green: D4, emerald: U3, teal: E, cyan: L3, sky: S3, blue: v, indigo: z3, violet: O2, purple: R3, fuchsia: W3, pink: I2, rose: M3 };
var H3 = { screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" }, colors: l2, columns: { auto: "auto", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem" }, spacing: { px: "1px", 0: "0px", ...a3(4, "rem", 4, 0.5, 0.5), ...a3(12, "rem", 4, 5), 14: "3.5rem", ...a3(64, "rem", 4, 16, 4), 72: "18rem", 80: "20rem", 96: "24rem" }, durations: { 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0,0,0.2,1) infinite", pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite", bounce: "bounce 1s infinite" }, aspectRatio: { auto: "auto", square: "1/1", video: "16/9" }, backdropBlur: o3("blur"), backdropBrightness: o3("brightness"), backdropContrast: o3("contrast"), backdropGrayscale: o3("grayscale"), backdropHueRotate: o3("hueRotate"), backdropInvert: o3("invert"), backdropOpacity: o3("opacity"), backdropSaturate: o3("saturate"), backdropSepia: o3("sepia"), backgroundColor: o3("colors"), backgroundImage: { none: "none" }, backgroundOpacity: o3("opacity"), backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { none: "none", 0: "0", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, brightness: { ...a3(200, "", 100, 0, 50), ...a3(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, borderColor: ({ theme: e3 }) => ({ DEFAULT: e3("colors.gray.200", "currentColor"), ...e3("colors") }), borderOpacity: o3("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", "1/2": "50%", full: "9999px" }, borderSpacing: o3("spacing"), borderWidth: { DEFAULT: "1px", ...n2(8, "px") }, boxShadow: { sm: "0 1px 2px 0 rgba(0,0,0,0.05)", DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)", md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)", lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)", xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)", "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)", inner: "inset 0 2px 4px 0 rgba(0,0,0,0.05)", none: "0 0 #0000" }, boxShadowColor: o3("colors"), caretColor: o3("colors"), accentColor: ({ theme: e3 }) => ({ auto: "auto", ...e3("colors") }), contrast: { ...a3(200, "", 100, 0, 50), 75: "0.75", 125: "1.25" }, content: { none: "none" }, divideColor: o3("borderColor"), divideOpacity: o3("borderOpacity"), divideWidth: o3("borderWidth"), dropShadow: { sm: "0 1px 1px rgba(0,0,0,0.05)", DEFAULT: ["0 1px 2px rgba(0,0,0,0.1)", "0 1px 1px rgba(0,0,0,0.06)"], md: ["0 4px 3px rgba(0,0,0,0.07)", "0 2px 2px rgba(0,0,0,0.06)"], lg: ["0 10px 8px rgba(0,0,0,0.04)", "0 4px 3px rgba(0,0,0,0.1)"], xl: ["0 20px 13px rgba(0,0,0,0.03)", "0 8px 5px rgba(0,0,0,0.08)"], "2xl": "0 25px 25px rgba(0,0,0,0.15)", none: "0 0 #0000" }, fill: o3("colors"), grayscale: { DEFAULT: "100%", 0: "0" }, hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg" }, invert: { DEFAULT: "100%", 0: "0" }, flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: e3 }) => ({ ...e3("spacing"), ...i2(2, 6), ...i2(12, 12), auto: "auto", full: "100%" }), flexGrow: { DEFAULT: 1, 0: 0 }, flexShrink: { DEFAULT: 1, 0: 0 }, fontFamily: { sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","), serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","), mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",") }, fontSize: { xs: ["0.75rem", "1rem"], sm: ["0.875rem", "1.25rem"], base: ["1rem", "1.5rem"], lg: ["1.125rem", "1.75rem"], xl: ["1.25rem", "1.75rem"], "2xl": ["1.5rem", "2rem"], "3xl": ["1.875rem", "2.25rem"], "4xl": ["2.25rem", "2.5rem"], "5xl": ["3rem", "1"], "6xl": ["3.75rem", "1"], "7xl": ["4.5rem", "1"], "8xl": ["6rem", "1"], "9xl": ["8rem", "1"] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: o3("spacing"), gradientColorStops: o3("colors"), gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridColumn: { auto: "auto", "span-full": "1 / -1" }, gridRow: { auto: "auto", "span-full": "1 / -1" }, gridTemplateColumns: { none: "none" }, gridTemplateRows: { none: "none" }, height: ({ theme: e3 }) => ({ ...e3("spacing"), ...i2(2, 6), min: "min-content", max: "max-content", fit: "fit-content", auto: "auto", full: "100%", screen: "100vh" }), inset: ({ theme: e3 }) => ({ ...e3("spacing"), ...i2(2, 4), auto: "auto", full: "100%" }), keyframes: { spin: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } }, ping: { "0%": { transform: "scale(1)", opacity: "1" }, "75%,100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { ...a3(10, "rem", 4, 3), none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2" }, margin: ({ theme: e3 }) => ({ auto: "auto", ...e3("spacing") }), maxHeight: ({ theme: e3 }) => ({ full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh", ...e3("spacing") }), maxWidth: ({ theme: e3, breakpoints: f3 }) => ({ ...f3(e3("screens")), none: "none", 0: "0rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch" }), minHeight: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh" }, minWidth: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content" }, opacity: { ...a3(100, "", 100, 0, 10), 5: "0.05", 25: "0.25", 75: "0.75", 95: "0.95" }, order: { first: "-9999", last: "9999", none: "0" }, padding: o3("spacing"), placeholderColor: o3("colors"), placeholderOpacity: o3("opacity"), outlineColor: o3("colors"), outlineOffset: n2(8, "px"), outlineWidth: n2(8, "px"), ringColor: ({ theme: e3 }) => ({ ...e3("colors"), DEFAULT: e3("colors.blue.500", "#3b82f6") }), ringOffsetColor: o3("colors"), ringOffsetWidth: n2(8, "px"), ringOpacity: ({ theme: e3 }) => ({ ...e3("opacity"), DEFAULT: "0.5" }), ringWidth: { DEFAULT: "3px", ...n2(8, "px") }, rotate: { ...n2(2, "deg"), ...n2(12, "deg", 3), ...n2(180, "deg", 45) }, saturate: a3(200, "", 100, 0, 50), scale: { ...a3(150, "", 100, 0, 50), ...a3(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, scrollMargin: o3("spacing"), scrollPadding: o3("spacing"), sepia: { 0: "0", DEFAULT: "100%" }, skew: { ...n2(2, "deg"), ...n2(12, "deg", 3) }, space: o3("spacing"), stroke: o3("colors"), strokeWidth: a3(2), textColor: o3("colors"), textDecorationColor: o3("colors"), textDecorationThickness: { "from-font": "from-font", auto: "auto", ...n2(8, "px") }, textUnderlineOffset: { auto: "auto", ...n2(8, "px") }, textIndent: o3("spacing"), textOpacity: o3("opacity"), transitionDuration: ({ theme: e3 }) => ({ ...e3("durations"), DEFAULT: "150ms" }), transitionDelay: o3("durations"), transitionProperty: { none: "none", all: "all", DEFAULT: "color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter", colors: "color,background-color,border-color,text-decoration-color,fill,stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4,0,0.2,1)", linear: "linear", in: "cubic-bezier(0.4,0,1,1)", out: "cubic-bezier(0,0,0.2,1)", "in-out": "cubic-bezier(0.4,0,0.2,1)" }, translate: ({ theme: e3 }) => ({ ...e3("spacing"), ...i2(2, 4), full: "100%" }), width: ({ theme: e3 }) => ({ min: "min-content", max: "max-content", fit: "fit-content", screen: "100vw", ...e3("flexBasis") }), willChange: { scroll: "scroll-position" }, zIndex: { ...a3(50, "", 1, 0, 10), auto: "auto" } };
function i2(e3, f3) {
  let t5 = {};
  do
    for (var r = 1; r < e3; r++)
      t5[`${r}/${e3}`] = Number((r / e3 * 100).toFixed(6)) + "%";
  while (++e3 <= f3);
  return t5;
}
function n2(e3, f3, t5 = 0) {
  let r = {};
  for (; t5 <= e3; t5 = 2 * t5 || 1)
    r[t5] = t5 + f3;
  return r;
}
function a3(e3, f3 = "", t5 = 1, r = 0, m4 = 1, c4 = {}) {
  for (; r <= e3; r += m4)
    c4[r] = r / t5 + f3;
  return c4;
}
function o3(e3) {
  return ({ theme: f3 }) => f3(e3);
}

// https://esm.sh/v103/@twind/preset-tailwind@1.0.1/deno/preflight.js
var i3 = { "*,::before,::after": { boxSizing: "border-box", borderWidth: "0", borderStyle: "solid", borderColor: "theme(borderColor.DEFAULT, currentColor)" }, "::before,::after": { "--tw-content": "''" }, html: { lineHeight: 1.5, WebkitTextSizeAdjust: "100%", MozTabSize: "4", tabSize: 4, fontFamily: `theme(fontFamily.sans, ${H3.fontFamily.sans})` }, body: { margin: "0", lineHeight: "inherit" }, hr: { height: "0", color: "inherit", borderTopWidth: "1px" }, "abbr:where([title])": { textDecoration: "underline dotted" }, "h1,h2,h3,h4,h5,h6": { fontSize: "inherit", fontWeight: "inherit" }, a: { color: "inherit", textDecoration: "inherit" }, "b,strong": { fontWeight: "bolder" }, "code,kbd,samp,pre": { fontFamily: `theme(fontFamily.mono, ${H3.fontFamily.mono})`, fontSize: "1em" }, small: { fontSize: "80%" }, "sub,sup": { fontSize: "75%", lineHeight: 0, position: "relative", verticalAlign: "baseline" }, sub: { bottom: "-0.25em" }, sup: { top: "-0.5em" }, table: { textIndent: "0", borderColor: "inherit", borderCollapse: "collapse" }, "button,input,optgroup,select,textarea": { fontFamily: "inherit", fontSize: "100%", lineHeight: "inherit", color: "inherit", margin: "0", padding: "0" }, "button,select": { textTransform: "none" }, "button,[type='button'],[type='reset'],[type='submit']": { WebkitAppearance: "button", backgroundColor: "transparent", backgroundImage: "none" }, ":-moz-focusring": { outline: "auto" }, ":-moz-ui-invalid": { boxShadow: "none" }, progress: { verticalAlign: "baseline" }, "::-webkit-inner-spin-button,::-webkit-outer-spin-button": { height: "auto" }, "[type='search']": { WebkitAppearance: "textfield", outlineOffset: "-2px" }, "::-webkit-search-decoration": { WebkitAppearance: "none" }, "::-webkit-file-upload-button": { WebkitAppearance: "button", font: "inherit" }, summary: { display: "list-item" }, "blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre": { margin: "0" }, fieldset: { margin: "0", padding: "0" }, legend: { padding: "0" }, "ol,ul,menu": { listStyle: "none", margin: "0", padding: "0" }, textarea: { resize: "vertical" }, "input::placeholder,textarea::placeholder": { opacity: 1, color: "theme(colors.gray.400, #9ca3af)" }, 'button,[role="button"]': { cursor: "pointer" }, ":disabled": { cursor: "default" }, "img,svg,video,canvas,audio,iframe,embed,object": { display: "block", verticalAlign: "middle" }, "img,video": { maxWidth: "100%", height: "auto" }, "[hidden]": { display: "none" } };

// https://esm.sh/v103/@twind/core@1.1.2/deno/core.js
var B4;
function ae2(e3) {
  return [...e3.v, (e3.i ? "!" : "") + e3.n].join(":");
}
function ue2(e3, t5 = ",") {
  return e3.map(ae2).join(t5);
}
var Y3 = typeof CSS < "u" && CSS.escape || ((e3) => e3.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
function T4(e3) {
  for (var t5 = 9, r = e3.length; r--; )
    t5 = Math.imul(t5 ^ e3.charCodeAt(r), 1597334677);
  return "#" + ((t5 ^ t5 >>> 9) >>> 0).toString(36);
}
function Ce(e3, t5 = "@media ") {
  return t5 + b3(e3).map((r) => (typeof r == "string" && (r = { min: r }), r.raw || Object.keys(r).map((i4) => `(${i4}-width:${r[i4]})`).join(" and "))).join(",");
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
function re3(e3) {
  return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e3) ? Math.max(0, 29.63 * (+RegExp.$1 / (RegExp.$2 ? 15 : 1)) ** 0.137 - 43) : 0, 15) << 22 | Math.min(Ee(e3), 15) << 18;
}
var Ue = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
function ce3({ n: e3, i: t5, v: r = [] }, i4, n3, l4) {
  e3 && (e3 = ae2({ n: e3, i: t5, v: r })), l4 = [...b3(l4)];
  for (let s6 of r) {
    let f3 = i4.theme("screens", s6);
    for (let a5 of b3(f3 && Ce(f3) || i4.v(s6))) {
      var o4;
      l4.push(a5), n3 |= f3 ? 67108864 | re3(a5) : s6 == "dark" ? 1073741824 : a5[0] == "@" ? re3(a5) : (o4 = a5, 1 << ~(/:([a-z-]+)/.test(o4) && ~Ue.indexOf(RegExp.$1.slice(2, 7)) || -18));
    }
  }
  return { n: e3, p: n3, r: l4, i: t5 };
}
var pe = /* @__PURE__ */ new Map();
function ne3(e3) {
  if (e3.d) {
    let t5 = [], r = H4(e3.r.reduce((i4, n3) => n3[0] == "@" ? (t5.push(n3), i4) : n3 ? H4(i4, (l4) => H4(n3, (o4) => {
      let s6 = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o4);
      if (s6) {
        let f3 = l4.indexOf(s6[1]);
        return ~f3 ? l4.slice(0, f3) + s6[0] + l4.slice(f3 + s6[1].length) : Q3(l4, o4);
      }
      return Q3(o4, l4);
    })) : i4, "&"), (i4) => Q3(i4, e3.n ? "." + Y3(e3.n) : ""));
    return r && t5.push(r.replace(/:merge\((.+?)\)/g, "$1")), t5.reduceRight((i4, n3) => n3 + "{" + i4 + "}", e3.d);
  }
}
function H4(e3, t5) {
  return e3.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r, i4, n3) => t5(i4) + n3);
}
function Q3(e3, t5) {
  return e3.replace(/&/g, t5);
}
var $e2 = new Intl.Collator("en", { numeric: true });
function Me(e3, t5) {
  for (var r = 0, i4 = e3.length; r < i4; ) {
    let n3 = i4 + r >> 1;
    0 >= Ne(e3[n3], t5) ? r = n3 + 1 : i4 = n3;
  }
  return i4;
}
function Ne(e3, t5) {
  let r = e3.p & S4.o;
  return r == (t5.p & S4.o) && (r == S4.b || r == S4.o) ? 0 : e3.p - t5.p || e3.o - t5.o || $e2.compare(we(e3.n), we(t5.n)) || $e2.compare(Ae(e3.n), Ae(t5.n));
}
function we(e3) {
  return (e3 || "").split(/:/).pop().split("/").pop() || "\0";
}
function Ae(e3) {
  return (e3 || "").replace(/\W/g, (t5) => String.fromCharCode(127 + t5.charCodeAt(0))) + "\0";
}
function X3(e3, t5) {
  return Math.round(parseInt(e3, 16) * t5);
}
function P3(e3, t5 = {}) {
  if (typeof e3 == "function")
    return e3(t5);
  let { opacityValue: r = "1", opacityVariable: i4 } = t5, n3 = i4 ? `var(${i4})` : r;
  if (e3.includes("<alpha-value>"))
    return e3.replace("<alpha-value>", n3);
  if (e3[0] == "#" && (e3.length == 4 || e3.length == 7)) {
    let l4 = (e3.length - 1) / 3, o4 = [17, 1, 0.062272][l4 - 1];
    return `rgba(${[X3(e3.substr(1, l4), o4), X3(e3.substr(1 + l4, l4), o4), X3(e3.substr(1 + 2 * l4, l4), o4), n3]})`;
  }
  return n3 == "1" ? e3 : n3 == "0" ? "#0000" : e3.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${n3})`);
}
function de(e3, t5, r, i4, n3 = []) {
  return function l4(o4, { n: s6, p: f3, r: a5 = [], i: c4 }, u4) {
    let p7 = [], g5 = "", h3 = 0, $4 = 0;
    for (let y4 in o4 || {}) {
      var A4, R6;
      let d4 = o4[y4];
      if (y4[0] == "@") {
        if (!d4)
          continue;
        if (y4[1] == "a") {
          p7.push(...ge(s6, f3, I3("" + d4), u4, f3, a5, c4, true));
          continue;
        }
        if (y4[1] == "l") {
          for (let w6 of b3(d4))
            p7.push(...l4(w6, { n: s6, p: (A4 = S4[y4[7]], f3 & ~S4.o | A4), r: a5, i: c4 }, u4));
          continue;
        }
        if (y4[1] == "i") {
          p7.push(...b3(d4).map((w6) => ({ p: -1, o: 0, r: [], d: y4 + " " + w6 })));
          continue;
        }
        if (y4[1] == "k") {
          p7.push({ p: S4.d, o: 0, r: [y4], d: l4(d4, { p: S4.d }, u4).map(ne3).join("") });
          continue;
        }
        if (y4[1] == "f") {
          p7.push(...b3(d4).map((w6) => ({ p: S4.d, o: 0, r: [y4], d: l4(w6, { p: S4.d }, u4).map(ne3).join("") })));
          continue;
        }
      }
      if (typeof d4 != "object" || Array.isArray(d4))
        y4 == "label" && d4 ? s6 = d4 + T4(JSON.stringify([f3, c4, o4])) : (d4 || d4 === 0) && (y4 = y4.replace(/[A-Z]/g, (w6) => "-" + w6.toLowerCase()), $4 += 1, h3 = Math.max(h3, (R6 = y4)[0] == "-" ? 0 : Ee(R6) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(R6) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), g5 += (g5 ? ";" : "") + b3(d4).map((w6) => u4.s(y4, he("" + w6, u4.theme) + (c4 ? " !important" : ""))).join(";"));
      else if (y4[0] == "@" || y4.includes("&")) {
        let w6 = f3;
        y4[0] == "@" && (y4 = y4.replace(/\bscreen\(([^)]+)\)/g, (j5, M5) => {
          let N6 = u4.theme("screens", M5);
          return N6 ? (w6 |= 67108864, Ce(N6, "")) : j5;
        }), w6 |= re3(y4)), p7.push(...l4(d4, { n: s6, p: w6, r: [...a5, y4], i: c4 }, u4));
      } else
        p7.push(...l4(d4, { p: f3, r: [...a5, y4] }, u4));
    }
    return p7.unshift({ n: s6, p: f3, o: Math.max(0, 15 - $4) + 1.5 * Math.min(h3 || 15, 15), r: a5, d: g5 }), p7.sort(Ne);
  }(e3, ce3(t5, r, i4, n3), r);
}
function he(e3, t5) {
  return e3.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r, i4, n3, l4, o4 = "") => {
    let s6 = t5(n3, o4);
    return typeof s6 == "function" && /color|fill|stroke/i.test(n3) ? P3(s6) : "" + b3(s6).filter((f3) => Object(f3) !== f3);
  });
}
function ye(e3, t5) {
  let r, i4 = [];
  for (let n3 of e3)
    n3.d && n3.n ? r?.p == n3.p && "" + r.r == "" + n3.r ? (r.c = [r.c, n3.c].filter(Boolean).join(" "), r.d = r.d + ";" + n3.d) : i4.push(r = { ...n3, n: n3.n && t5 }) : i4.push({ ...n3, n: n3.n && t5 });
  return i4;
}
function W4(e3, t5, r = S4.u, i4, n3) {
  let l4 = [];
  for (let o4 of e3)
    for (let s6 of function(f3, a5, c4, u4, p7) {
      f3 = { ...f3, i: f3.i || p7 };
      let g5 = function(h3, $4) {
        let A4 = pe.get(h3.n);
        return A4 ? A4(h3, $4) : $4.r(h3.n, h3.v[0] == "dark");
      }(f3, a5);
      return g5 ? typeof g5 == "string" ? ({ r: u4, p: c4 } = ce3(f3, a5, c4, u4), ye(W4(I3(g5), a5, c4, u4, f3.i), f3.n)) : Array.isArray(g5) ? g5.map((h3) => {
        var $4, A4;
        return { o: 0, ...h3, r: [...b3(u4), ...b3(h3.r)], p: ($4 = c4, A4 = h3.p ?? c4, $4 & ~S4.o | A4) };
      }) : de(g5, f3, a5, c4, u4) : [{ c: ae2(f3), p: 0, o: 0, r: [] }];
    }(o4, t5, r, i4, n3))
      l4.splice(Me(l4, s6), 0, s6);
  return l4;
}
function ge(e3, t5, r, i4, n3, l4, o4, s6) {
  return ye((s6 ? r.flatMap((f3) => W4([f3], i4, n3, l4, o4)) : W4(r, i4, n3, l4, o4)).map((f3) => f3.p & S4.o && (f3.n || t5 == S4.b) ? { ...f3, p: f3.p & ~S4.o | t5, o: 0 } : f3), e3);
}
function _e2(e3, t5, r, i4) {
  var n3;
  return n3 = (l4, o4) => {
    let { n: s6, p: f3, r: a5, i: c4 } = ce3(l4, o4, t5);
    return r && ge(s6, t5, r, o4, f3, a5, c4, i4);
  }, pe.set(e3, n3), e3;
}
function K3(e3, t5, r) {
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
    o4 && (l4 && (o4 = "-" + o4), t5[0].push({ n: o4, v: i4.filter(Be), i: n3 }));
  }
}
function Be(e3, t5, r) {
  return r.indexOf(e3) == t5;
}
var Se = /* @__PURE__ */ new Map();
function I3(e3) {
  let t5 = Se.get(e3);
  if (!t5) {
    let r = [], i4 = [[]], n3 = 0, l4 = 0, o4 = null, s6 = 0, f3 = (a5, c4 = 0) => {
      n3 != s6 && (r.push(e3.slice(n3, s6 + c4)), a5 && K3(r, i4)), n3 = s6 + 1;
    };
    for (; s6 < e3.length; s6++) {
      let a5 = e3[s6];
      if (l4)
        e3[s6 - 1] != "\\" && (l4 += +(a5 == "[") || -(a5 == "]"));
      else if (a5 == "[")
        l4 += 1;
      else if (o4)
        e3[s6 - 1] != "\\" && o4.test(e3.slice(s6)) && (o4 = null, n3 = s6 + RegExp.lastMatch.length);
      else if (a5 == "/" && e3[s6 - 1] != "\\" && (e3[s6 + 1] == "*" || e3[s6 + 1] == "/"))
        o4 = e3[s6 + 1] == "*" ? /^\*\// : /^[\r\n]/;
      else if (a5 == "(")
        f3(), r.push(a5);
      else if (a5 == ":")
        e3[s6 + 1] != ":" && f3(false, 1);
      else if (/[\s,)]/.test(a5)) {
        f3(true);
        let c4 = r.lastIndexOf("(");
        if (a5 == ")") {
          let u4 = r[c4 - 1];
          if (/[~@]$/.test(u4)) {
            let p7 = i4.shift();
            r.length = c4, K3([...r, "#"], i4);
            let { v: g5 } = i4[0].pop();
            for (let h3 of p7)
              h3.v.splice(+(h3.v[0] == "dark") - +(g5[0] == "dark"), g5.length);
            K3([...r, _e2(u4.length > 1 ? u4.slice(0, -1) + T4(JSON.stringify([u4, p7])) : u4 + "(" + ue2(p7) + ")", S4.a, p7, /@$/.test(u4))], i4);
          }
          c4 = r.lastIndexOf("(", c4 - 1);
        }
        r.length = c4 + 1;
      } else
        /[~@]/.test(a5) && e3[s6 + 1] == "(" && i4.unshift([]);
    }
    f3(true), Se.set(e3, t5 = i4[0]);
  }
  return t5;
}
function Ve(e3, t5, r) {
  return t5.reduce((i4, n3, l4) => i4 + r(n3) + e3[l4 + 1], e3[0]);
}
function Z3(e3, t5) {
  return Array.isArray(e3) && Array.isArray(e3.raw) ? Ve(e3, t5, (r) => ee3(r).trim()) : t5.filter(Boolean).reduce((r, i4) => r + ee3(i4), e3 ? ee3(e3) : "");
}
function ee3(e3) {
  let t5, r = "";
  if (e3 && typeof e3 == "object")
    if (Array.isArray(e3))
      (t5 = Z3(e3[0], e3.slice(1))) && (r += " " + t5);
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
    return t5("", i4, n3);
  }, { get(r, i4) {
    return i4 in r ? r[i4] : function(l4, ...o4) {
      return t5(i4, l4, o4);
    };
  } });
  function t5(r, i4, n3) {
    return ue2(I3(r + e3 + "(" + Z3(i4, n3) + ")"));
  }
}
function G3(e3, t5) {
  return Array.isArray(e3) ? ve(Ve(e3, t5, (r) => r != null && typeof r != "boolean" ? r : "")) : typeof e3 == "string" ? ve(e3) : [e3];
}
var We = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
function ve(e3) {
  let t5;
  e3 = e3.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
  let r = [{}], i4 = [r[0]], n3 = [];
  for (; t5 = We.exec(e3); )
    t5[4] && (r.shift(), n3.shift()), t5[3] ? (n3.unshift(t5[3]), r.unshift({}), i4.push(n3.reduce((l4, o4) => ({ [o4]: l4 }), r[0]))) : t5[4] || (r[0][t5[1]] && (r.unshift({}), i4.push(n3.reduce((l4, o4) => ({ [o4]: l4 }), r[0]))), r[0][t5[1]] = t5[2]);
  return i4;
}
function me(e3, ...t5) {
  var r;
  let i4 = G3(e3, t5), n3 = (i4.find((l4) => l4.label)?.label || "css") + T4(JSON.stringify(i4));
  return r = (l4, o4) => ye(i4.flatMap((s6) => de(s6, l4, o4, S4.o)), n3), pe.set(n3, r), n3;
}
var ht2 = new Proxy(function(e3, t5) {
  return Re("animation", e3, t5);
}, { get(e3, t5) {
  return t5 in e3 ? e3[t5] : function(i4, n3) {
    return Re(t5, i4, n3);
  };
} });
function Re(e3, t5, r) {
  return { toString() {
    return me({ label: e3, "@layer components": { ...typeof t5 == "object" ? t5 : { animation: t5 }, animationName: "" + r } });
  } };
}
function yt2(e3, t5, r) {
  return [e3, ie2(t5, r)];
}
function ie2(e3, t5) {
  return typeof e3 == "function" ? e3 : typeof e3 == "string" && /^[\w-]+$/.test(e3) ? (r, i4) => ({ [e3]: t5 ? t5(r, i4) : le(r, 1) }) : (r) => e3 || { [r[1]]: le(r, 2) };
}
function le(e3, t5, r = e3.slice(t5).find(Boolean) || e3.$$ || e3.input) {
  return e3.input[0] == "-" ? `calc(${r} * -1)` : r;
}
function gt(e3, t5, r, i4) {
  return [e3, Ge(t5, r, i4)];
}
function Ge(e3, t5, r) {
  let i4 = typeof t5 == "string" ? (n3, l4) => ({ [t5]: r ? r(n3, l4) : n3._ }) : t5 || (({ 1: n3, _: l4 }, o4, s6) => ({ [n3 || s6]: l4 }));
  return (n3, l4) => {
    let o4 = ke(e3 || n3[1]), s6 = l4.theme(o4, n3.$$) ?? oe2(n3.$$, o4, l4);
    if (s6 != null)
      return n3._ = le(n3, 0, s6), i4(n3, l4, o4);
  };
}
function mt2(e3, t5 = {}, r) {
  return [e3, Ye(t5, r)];
}
function Ye(e3 = {}, t5) {
  return (r, i4) => {
    let { section: n3 = ke(r[0]).replace("-", "") + "Color" } = e3, [l4, o4] = Ze(r.$$);
    if (!l4)
      return;
    let s6 = i4.theme(n3, l4) || oe2(l4, n3, i4);
    if (!s6 || typeof s6 == "object")
      return;
    let { opacityVariable: f3 = `--tw-${r[0].replace(/-$/, "")}-opacity`, opacitySection: a5 = n3.replace("Color", "Opacity"), property: c4 = n3, selector: u4 } = e3, p7 = i4.theme(a5, o4 || "DEFAULT") || o4 && oe2(o4, a5, i4), g5 = t5 || (({ _: $4 }) => {
      let A4 = He(c4, $4);
      return u4 ? { [u4]: A4 } : A4;
    });
    r._ = { value: P3(s6, { opacityVariable: f3 || void 0, opacityValue: p7 || void 0 }), color: ($4) => P3(s6, $4), opacityVariable: f3 || void 0, opacityValue: p7 || void 0 };
    let h3 = g5(r, i4);
    if (!r.dark) {
      let $4 = i4.d(n3, l4, s6);
      $4 && $4 !== s6 && (r._ = { value: P3($4, { opacityVariable: f3 || void 0, opacityValue: p7 || "1" }), color: (A4) => P3($4, A4), opacityVariable: f3 || void 0, opacityValue: p7 || void 0 }, h3 = { "&": h3, [i4.v("dark")]: g5(r, i4) });
    }
    return h3;
  };
}
function Ze(e3) {
  return (e3.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/) || []).slice(1);
}
function He(e3, t5) {
  let r = {};
  return typeof t5 == "string" ? r[e3] = t5 : (t5.opacityVariable && t5.value.includes(t5.opacityVariable) && (r[t5.opacityVariable] = t5.opacityValue || "1"), r[e3] = t5.value), r;
}
function oe2(e3, t5, r) {
  if (e3[0] == "[" && e3.slice(-1) == "]") {
    if (e3 = se(he(e3.slice(1, -1), r.theme)), !t5)
      return e3;
    if (!(/color|fill|stroke/i.test(t5) && !(/^color:/.test(e3) || /^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e3)) || /image/i.test(t5) && !(/^image:/.test(e3) || /^[a-z-]+\(/.test(e3)) || /weight/i.test(t5) && !(/^(number|any):/.test(e3) || /^\d+$/.test(e3)) || /position/i.test(t5) && /^(length|size):/.test(e3)))
      return e3.replace(/^[a-z-]+:/, "");
  }
}
function ke(e3) {
  return e3.replace(/-./g, (t5) => t5[1].toUpperCase());
}
function se(e3) {
  return e3.includes("url(") ? e3.replace(/(.*?)(url\(.*?\))(.*?)/g, (t5, r = "", i4, n3 = "") => se(r) + i4 + se(n3)) : e3.replace(/(^|[^\\])_+/g, (t5, r) => r + " ".repeat(t5.length - r.length)).replace(/\\_/g, "_").replace(/(calc|min|max|clamp)\(.+\)/g, (t5) => t5.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 "));
}
var Qe = Symbol();
var D5 = new Proxy(F5, { apply(e3, t5, r) {
  return B4(r[0]);
}, get(e3, t5) {
  let r = B4[t5];
  return typeof r == "function" ? function() {
    return r.apply(B4, arguments);
  } : r;
} });
var Rt2 = function e2(t5) {
  return new Proxy(function(i4, ...n3) {
    return xe2(t5, "", i4, n3);
  }, { get(r, i4) {
    return i4 === "bind" ? e2 : i4 in r ? r[i4] : function(l4, ...o4) {
      return xe2(t5, i4, l4, o4);
    };
  } });
}();
function xe2(e3, t5, r, i4) {
  return { toString() {
    let n3 = G3(r, i4), l4 = Y3(t5 + T4(JSON.stringify([t5, n3])));
    return (typeof e3 == "function" ? e3 : D5)(me({ [`@keyframes ${l4}`]: G3(r, i4) })), l4;
  } };
}

// https://esm.sh/v103/@twind/preset-tailwind@1.0.1/deno/rules.js
var j3 = [yt2("\\[([-\\w]+):(.+)]", ({ 1: t5, 2: r }, a5) => ({ "@layer overrides": { "&": { [t5]: oe2(`[${r}]`, t5, a5) } } })), yt2("(group|peer)(~[^-[]+)?", ({ input: t5 }, { h: r }) => [{ c: r(t5) }]), gt("aspect-", "aspectRatio"), yt2("container", (t5, { theme: r }) => {
  let { screens: a5 = r("screens"), center: i4, padding: l4 } = r("container"), d4 = { width: "100%", marginRight: i4 && "auto", marginLeft: i4 && "auto", ...g5("xs") };
  for (let f3 in a5) {
    let c4 = a5[f3];
    typeof c4 == "string" && (d4[Ce(c4)] = { "&": { maxWidth: c4, ...g5(f3) } });
  }
  return d4;
  function g5(f3) {
    let c4 = l4 && (typeof l4 == "string" ? l4 : l4[f3] || l4.DEFAULT);
    if (c4)
      return { paddingRight: c4, paddingLeft: c4 };
  }
}), gt("content-", "content", ({ _: t5 }) => ({ "--tw-content": t5, content: "var(--tw-content)" })), yt2("(?:box-)?decoration-(slice|clone)", "boxDecorationBreak"), yt2("box-(border|content)", "boxSizing", ({ 1: t5 }) => t5 + "-box"), yt2("hidden", { display: "none" }), yt2("table-(auto|fixed)", "tableLayout"), yt2(["(block|flex|table|grid|inline|contents|flow-root|list-item)", "(inline-(block|flex|table|grid))", "(table-(caption|cell|column|row|(column|row|footer|header)-group))"], "display"), "(float)-(left|right|none)", "(clear)-(left|right|none|both)", "(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)", "(isolation)-(auto)", yt2("isolate", "isolation"), yt2("object-(contain|cover|fill|none|scale-down)", "objectFit"), gt("object-", "objectPosition"), yt2("object-(top|bottom|center|(left|right)(-(top|bottom))?)", "objectPosition", u2), yt2("overscroll(-[xy])?-(auto|contain|none)", ({ 1: t5 = "", 2: r }) => ({ ["overscroll-behavior" + t5]: r })), yt2("(static|fixed|absolute|relative|sticky)", "position"), gt("-?inset(-[xy])?(?:$|-)", "inset", ({ 1: t5, _: r }) => ({ top: t5 != "-x" && r, right: t5 != "-y" && r, bottom: t5 != "-x" && r, left: t5 != "-y" && r })), gt("-?(top|bottom|left|right)(?:$|-)", "inset"), yt2("visible", "visibility"), yt2("invisible", { visibility: "hidden" }), gt("-?z-", "zIndex"), yt2("flex-((row|col)(-reverse)?)", "flexDirection", v2), yt2("flex-(wrap|wrap-reverse|nowrap)", "flexWrap"), gt("(flex-(?:grow|shrink))(?:$|-)"), gt("(flex)-"), gt("grow(?:$|-)", "flexGrow"), gt("shrink(?:$|-)", "flexShrink"), gt("basis-", "flexBasis"), gt("-?(order)-"), "-?(order)-(\\d+)", gt("grid-cols-", "gridTemplateColumns"), yt2("grid-cols-(\\d+)", "gridTemplateColumns", $2), gt("col-", "gridColumn"), yt2("col-(span)-(\\d+)", "gridColumn", S5), gt("col-start-", "gridColumnStart"), yt2("col-start-(auto|\\d+)", "gridColumnStart"), gt("col-end-", "gridColumnEnd"), yt2("col-end-(auto|\\d+)", "gridColumnEnd"), gt("grid-rows-", "gridTemplateRows"), yt2("grid-rows-(\\d+)", "gridTemplateRows", $2), gt("row-", "gridRow"), yt2("row-(span)-(\\d+)", "gridRow", S5), gt("row-start-", "gridRowStart"), yt2("row-start-(auto|\\d+)", "gridRowStart"), gt("row-end-", "gridRowEnd"), yt2("row-end-(auto|\\d+)", "gridRowEnd"), yt2("grid-flow-((row|col)(-dense)?)", "gridAutoFlow", (t5) => u2(v2(t5))), yt2("grid-flow-(dense)", "gridAutoFlow"), gt("auto-cols-", "gridAutoColumns"), gt("auto-rows-", "gridAutoRows"), gt("gap-x(?:$|-)", "gap", "columnGap"), gt("gap-y(?:$|-)", "gap", "rowGap"), gt("gap(?:$|-)", "gap"), "(justify-(?:items|self))-", yt2("justify-", "justifyContent", x4), yt2("(content|items|self)-", (t5) => ({ ["align-" + t5[1]]: x4(t5) })), yt2("(place-(content|items|self))-", ({ 1: t5, $$: r }) => ({ [t5]: ("wun".includes(r[3]) ? "space-" : "") + r })), gt("p([xytrbl])?(?:$|-)", "padding", w5("padding")), gt("-?m([xytrbl])?(?:$|-)", "margin", w5("margin")), gt("-?space-(x|y)(?:$|-)", "space", ({ 1: t5, _: r }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${t5}-reverse`]: "0", ["margin-" + { y: "top", x: "left" }[t5]]: `calc(${r} * calc(1 - var(--tw-space-${t5}-reverse)))`, ["margin-" + { y: "bottom", x: "right" }[t5]]: `calc(${r} * var(--tw-space-${t5}-reverse))` } })), yt2("space-(x|y)-reverse", ({ 1: t5 }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${t5}-reverse`]: "1" } })), gt("w-", "width"), gt("min-w-", "minWidth"), gt("max-w-", "maxWidth"), gt("h-", "height"), gt("min-h-", "minHeight"), gt("max-h-", "maxHeight"), gt("font-", "fontWeight"), gt("font-", "fontFamily", "fontFamily", s4), yt2("antialiased", { WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }), yt2("subpixel-antialiased", { WebkitFontSmoothing: "auto", MozOsxFontSmoothing: "auto" }), yt2("italic", "fontStyle"), yt2("not-italic", { fontStyle: "normal" }), yt2("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)", ({ 1: t5, 2: r = "", 3: a5 }) => r == "normal" ? { fontVariantNumeric: "normal" } : { ["--tw-" + (a5 ? "numeric-fraction" : "pt".includes(r[0]) ? "numeric-spacing" : r ? "numeric-figure" : t5)]: t5, fontVariantNumeric: "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ordinal": "var(--tw-empty,/*!*/ /*!*/)", "--tw-slashed-zero": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-figure": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-spacing": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-fraction": "var(--tw-empty,/*!*/ /*!*/)" } } }), gt("tracking-", "letterSpacing"), gt("leading-", "lineHeight"), yt2("list-(inside|outside)", "listStylePosition"), gt("list-", "listStyleType"), yt2("list-", "listStyleType"), gt("placeholder-opacity-", "placeholderOpacity", ({ _: t5 }) => ({ "&::placeholder": { "--tw-placeholder-opacity": t5 } })), mt2("placeholder-", { property: "color", selector: "&::placeholder" }), yt2("text-(left|center|right|justify|start|end)", "textAlign"), yt2("text-(ellipsis|clip)", "textOverflow"), gt("text-opacity-", "textOpacity", "--tw-text-opacity"), mt2("text-", { property: "color" }), gt("text-", "fontSize", ({ _: t5 }) => typeof t5 == "string" ? { fontSize: t5 } : { fontSize: t5[0], ...typeof t5[1] == "string" ? { lineHeight: t5[1] } : t5[1] }), gt("indent-", "textIndent"), yt2("(overline|underline|line-through)", "textDecorationLine"), yt2("no-underline", { textDecorationLine: "none" }), gt("underline-offset-", "textUnderlineOffset"), mt2("decoration-", { section: "textDecorationColor", opacityVariable: false, opacitySection: "opacity" }), gt("decoration-", "textDecorationThickness"), yt2("decoration-", "textDecorationStyle"), yt2("(uppercase|lowercase|capitalize)", "textTransform"), yt2("normal-case", { textTransform: "none" }), yt2("truncate", { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }), yt2("align-", "verticalAlign"), yt2("whitespace-", "whiteSpace"), yt2("break-normal", { wordBreak: "normal", overflowWrap: "normal" }), yt2("break-words", { overflowWrap: "break-word" }), yt2("break-all", { wordBreak: "break-all" }), mt2("caret-", { opacityVariable: false, opacitySection: "opacity" }), mt2("accent-", { opacityVariable: false, opacitySection: "opacity" }), yt2("bg-gradient-to-([trbl]|[tb][rl])", "backgroundImage", ({ 1: t5 }) => `linear-gradient(to ${p3(t5, " ")},var(--tw-gradient-stops))`), mt2("from-", { section: "gradientColorStops", opacityVariable: false, opacitySection: "opacity" }, ({ _: t5 }) => ({ "--tw-gradient-from": t5.value, "--tw-gradient-to": t5.color({ opacityValue: "0" }), "--tw-gradient-stops": "var(--tw-gradient-from),var(--tw-gradient-to)" })), mt2("via-", { section: "gradientColorStops", opacityVariable: false, opacitySection: "opacity" }, ({ _: t5 }) => ({ "--tw-gradient-to": t5.color({ opacityValue: "0" }), "--tw-gradient-stops": `var(--tw-gradient-from),${t5.value},var(--tw-gradient-to)` })), mt2("to-", { section: "gradientColorStops", property: "--tw-gradient-to", opacityVariable: false, opacitySection: "opacity" }), yt2("bg-(fixed|local|scroll)", "backgroundAttachment"), yt2("bg-origin-(border|padding|content)", "backgroundOrigin", ({ 1: t5 }) => t5 + "-box"), yt2(["bg-(no-repeat|repeat(-[xy])?)", "bg-repeat-(round|space)"], "backgroundRepeat"), yt2("bg-blend-", "backgroundBlendMode"), yt2("bg-clip-(border|padding|content|text)", "backgroundClip", ({ 1: t5 }) => t5 + (t5 == "text" ? "" : "-box")), gt("bg-opacity-", "backgroundOpacity", "--tw-bg-opacity"), mt2("bg-", { section: "backgroundColor" }), gt("bg-", "backgroundImage"), gt("bg-", "backgroundPosition"), yt2("bg-(top|bottom|center|(left|right)(-(top|bottom))?)", "backgroundPosition", u2), gt("bg-", "backgroundSize"), gt("rounded(?:$|-)", "borderRadius"), gt("rounded-([trbl]|[tb][rl])(?:$|-)", "borderRadius", ({ 1: t5, _: r }) => {
  let a5 = { t: ["tl", "tr"], r: ["tr", "br"], b: ["bl", "br"], l: ["bl", "tl"] }[t5] || [t5, t5];
  return { [`border-${p3(a5[0])}-radius`]: r, [`border-${p3(a5[1])}-radius`]: r };
}), yt2("border-(collapse|separate)", "borderCollapse"), gt("border-opacity(?:$|-)", "borderOpacity", "--tw-border-opacity"), yt2("border-(solid|dashed|dotted|double|none)", "borderStyle"), gt("border-spacing(-[xy])?(?:$|-)", "borderSpacing", ({ 1: t5, _: r }) => ({ "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-border-spacing-x": 0, "--tw-border-spacing-y": 0 } }, ["--tw-border-spacing" + (t5 || "-x")]: r, ["--tw-border-spacing" + (t5 || "-y")]: r, "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)" })), mt2("border-([xytrbl])-", { section: "borderColor" }, w5("border", "Color")), mt2("border-"), gt("border-([xytrbl])(?:$|-)", "borderWidth", w5("border", "Width")), gt("border(?:$|-)", "borderWidth"), gt("divide-opacity(?:$|-)", "divideOpacity", ({ _: t5 }) => ({ "&>:not([hidden])~:not([hidden])": { "--tw-divide-opacity": t5 } })), yt2("divide-(solid|dashed|dotted|double|none)", ({ 1: t5 }) => ({ "&>:not([hidden])~:not([hidden])": { borderStyle: t5 } })), yt2("divide-([xy]-reverse)", ({ 1: t5 }) => ({ "&>:not([hidden])~:not([hidden])": { ["--tw-divide-" + t5]: "1" } })), gt("divide-([xy])(?:$|-)", "divideWidth", ({ 1: t5, _: r }) => {
  let a5 = { x: "lr", y: "tb" }[t5];
  return { "&>:not([hidden])~:not([hidden])": { [`--tw-divide-${t5}-reverse`]: "0", [`border-${p3(a5[0])}Width`]: `calc(${r} * calc(1 - var(--tw-divide-${t5}-reverse)))`, [`border-${p3(a5[1])}Width`]: `calc(${r} * var(--tw-divide-${t5}-reverse))` } };
}), mt2("divide-", { property: "borderColor", selector: "&>:not([hidden])~:not([hidden])" }), gt("ring-opacity(?:$|-)", "ringOpacity", "--tw-ring-opacity"), mt2("ring-offset-", { property: "--tw-ring-offset-color", opacityVariable: false }), gt("ring-offset(?:$|-)", "ringOffsetWidth", "--tw-ring-offset-width"), yt2("ring-inset", { "--tw-ring-inset": "inset" }), mt2("ring-", { property: "--tw-ring-color" }), gt("ring(?:$|-)", "ringWidth", ({ _: t5 }, { theme: r }) => ({ "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)", "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${t5} + var(--tw-ring-offset-width)) var(--tw-ring-color)`, boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000", "&": { "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)", "--tw-ring-offset-width": r("ringOffsetWidth", "", "0px"), "--tw-ring-offset-color": P3(r("ringOffsetColor", "", "#fff")), "--tw-ring-color": P3(r("ringColor", "", "#93c5fd"), { opacityVariable: "--tw-ring-opacity" }), "--tw-ring-opacity": r("ringOpacity", "", "0.5") } } } })), mt2("shadow-", { section: "boxShadowColor", opacityVariable: false, opacitySection: "opacity" }, ({ _: t5 }) => ({ "--tw-shadow-color": t5.value, "--tw-shadow": "var(--tw-shadow-colored)" })), gt("shadow(?:$|-)", "boxShadow", ({ _: t5 }) => ({ "--tw-shadow": s4(t5), "--tw-shadow-colored": s4(t5).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g, "$1var(--tw-shadow-color)$2"), boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000" } } })), gt("(opacity)-"), yt2("mix-blend-", "mixBlendMode"), ...k3(), ...k3("backdrop-"), gt("transition(?:$|-)", "transitionProperty", (t5, { theme: r }) => ({ transitionProperty: s4(t5), transitionTimingFunction: t5._ == "none" ? void 0 : s4(r("transitionTimingFunction", "")), transitionDuration: t5._ == "none" ? void 0 : s4(r("transitionDuration", "")) })), gt("duration(?:$|-)", "transitionDuration", "transitionDuration", s4), gt("ease(?:$|-)", "transitionTimingFunction", "transitionTimingFunction", s4), gt("delay(?:$|-)", "transitionDelay", "transitionDelay", s4), gt("animate(?:$|-)", "animation", (t5, { theme: r, h: a5 }) => {
  let i4 = s4(t5), l4 = i4.split(" "), d4 = r("keyframes", l4[0]);
  return d4 ? { ["@keyframes " + (l4[0] = a5(l4[0]))]: d4, animation: l4.join(" ") } : { animation: i4 };
}), "(transform)-(none)", yt2("transform", h2), yt2("transform-(cpu|gpu)", ({ 1: t5 }) => ({ "--tw-transform": C4(t5 == "gpu") })), gt("scale(-[xy])?-", "scale", ({ 1: t5, _: r }) => ({ ["--tw-scale" + (t5 || "-x")]: r, ["--tw-scale" + (t5 || "-y")]: r, ...h2() })), gt("-?(rotate)-", "rotate", y3), gt("-?(translate-[xy])-", "translate", y3), gt("-?(skew-[xy])-", "skew", y3), yt2("origin-(center|((top|bottom)(-(left|right))?)|left|right)", "transformOrigin", u2), "(appearance)-", gt("(columns)-"), "(columns)-(\\d+)", "(break-(?:before|after|inside))-", gt("(cursor)-"), "(cursor)-", yt2("snap-(none)", "scroll-snap-type"), yt2("snap-(x|y|both)", ({ 1: t5 }) => ({ "scroll-snap-type": t5 + " var(--tw-scroll-snap-strictness)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-scroll-snap-strictness": "proximity" } } })), yt2("snap-(mandatory|proximity)", "--tw-scroll-snap-strictness"), yt2("snap-(?:(start|end|center)|align-(none))", "scroll-snap-align"), yt2("snap-(normal|always)", "scroll-snap-stop"), yt2("scroll-(auto|smooth)", "scroll-behavior"), gt("scroll-p([xytrbl])?(?:$|-)", "padding", w5("scroll-padding")), gt("-?scroll-m([xytrbl])?(?:$|-)", "scroll-margin", w5("scroll-margin")), yt2("touch-(auto|none|manipulation)", "touch-action"), yt2("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))", ({ 1: t5, 2: r, 3: a5 }) => ({ [`--tw-${r ? "pan-x" : a5 ? "pan-y" : t5}`]: t5, "touch-action": "var(--tw-touch-action)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-pan-x": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pan-y": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pinch-zoom": "var(--tw-empty,/*!*/ /*!*/)", "--tw-touch-action": "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)" } } })), yt2("outline-none", { outline: "2px solid transparent", "outline-offset": "2px" }), yt2("outline", { outlineStyle: "solid" }), yt2("outline-(dashed|dotted|double|hidden)", "outlineStyle"), gt("(outline-offset)-"), mt2("outline-", { opacityVariable: false, opacitySection: "opacity" }), gt("outline-", "outlineWidth"), "(pointer-events)-", gt("(will-change)-"), "(will-change)-", ["resize(?:-(none|x|y))?", "resize", ({ 1: t5 }) => ({ x: "horizontal", y: "vertical" })[t5] || t5 || "both"], yt2("select-(none|text|all|auto)", "userSelect"), mt2("fill-", { section: "fill", opacityVariable: false, opacitySection: "opacity" }), mt2("stroke-", { section: "stroke", opacityVariable: false, opacitySection: "opacity" }), gt("stroke-", "strokeWidth"), yt2("sr-only", { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", whiteSpace: "nowrap", clip: "rect(0,0,0,0)", borderWidth: "0" }), yt2("not-sr-only", { position: "static", width: "auto", height: "auto", padding: "0", margin: "0", overflow: "visible", whiteSpace: "normal", clip: "auto" })];
function u2(t5) {
  return (typeof t5 == "string" ? t5 : t5[1]).replace(/-/g, " ").trim();
}
function v2(t5) {
  return (typeof t5 == "string" ? t5 : t5[1]).replace("col", "column");
}
function p3(t5, r = "-") {
  let a5 = [];
  for (let i4 of t5)
    a5.push({ t: "top", r: "right", b: "bottom", l: "left" }[i4]);
  return a5.join(r);
}
function s4(t5) {
  return t5 && "" + (t5._ || t5);
}
function x4({ $$: t5 }) {
  return ({ r: "flex-", "": "flex-", w: "space-", u: "space-", n: "space-" }[t5[3] || ""] || "") + t5;
}
function w5(t5, r = "") {
  return ({ 1: a5, _: i4 }) => {
    let l4 = { x: "lr", y: "tb" }[a5] || a5 + a5;
    return l4 ? { ...He(t5 + "-" + p3(l4[0]) + r, i4), ...He(t5 + "-" + p3(l4[1]) + r, i4) } : He(t5 + r, i4);
  };
}
function k3(t5 = "") {
  let r = ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", t5 && "opacity", "saturate", "sepia", !t5 && "drop-shadow"].filter(Boolean), a5 = {};
  for (let i4 of r)
    a5[`--tw-${t5}${i4}`] = "var(--tw-empty,/*!*/ /*!*/)";
  return a5 = { [`${t5}filter`]: r.map((i4) => `var(--tw-${t5}${i4})`).join(" "), "@layer defaults": { "*,::before,::after,::backdrop": a5 } }, [`(${t5}filter)-(none)`, yt2(`${t5}filter`, a5), ...r.map((i4) => gt(`${i4[0] == "h" ? "-?" : ""}(${t5}${i4})(?:$|-)`, i4, ({ 1: l4, _: d4 }) => ({ [`--tw-${l4}`]: b3(d4).map((g5) => `${i4}(${g5})`).join(" "), ...a5 })))];
}
function y3({ 1: t5, _: r }) {
  return { ["--tw-" + t5]: r, ...h2() };
}
function h2() {
  return { transform: "var(--tw-transform)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-translate-x": "0", "--tw-translate-y": "0", "--tw-rotate": "0", "--tw-skew-x": "0", "--tw-skew-y": "0", "--tw-scale-x": "1", "--tw-scale-y": "1", "--tw-transform": C4() } } };
}
function C4(t5) {
  return [t5 ? "translate3d(var(--tw-translate-x),var(--tw-translate-y),0)" : "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))", "rotate(var(--tw-rotate))", "skewX(var(--tw-skew-x))", "skewY(var(--tw-skew-y))", "scaleX(var(--tw-scale-x))", "scaleY(var(--tw-scale-y))"].join(" ");
}
function S5({ 1: t5, 2: r }) {
  return `${t5} ${r} / ${t5} ${r}`;
}
function $2({ 1: t5 }) {
  return `repeat(${t5},minmax(0,1fr))`;
}

// https://esm.sh/v103/@twind/preset-tailwind@1.0.1/deno/variants.js
var c2 = [["sticky", "@supports ((position: -webkit-sticky) or (position:sticky))"], ["motion-reduce", "@media (prefers-reduced-motion:reduce)"], ["motion-safe", "@media (prefers-reduced-motion:no-preference)"], ["print", "@media print"], ["portrait", "@media (orientation:portrait)"], ["landscape", "@media (orientation:landscape)"], ["contrast-more", "@media (prefers-contrast:more)"], ["contrast-less", "@media (prefers-contrast:less)"], ["marker", "& *::marker,&::marker"], ["selection", "& *::selection,&::selection"], ["first-letter", "&::first-letter"], ["first-line", "&::first-line"], ["file", "&::file-selector-button"], ["placeholder", "&::placeholder"], ["backdrop", "&::backdrop"], ["first", "&:first-child"], ["last", "&:last-child"], ["even", "&:nth-child(2n)"], ["odd", "&:nth-child(odd)"], ["open", "&[open]"], ["((group|peer)(~[^-[]+)?)(-[a-z-]+|-\\[(.+)]|\\[.+])", ({ 1: e3, 4: r, 5: i4 }, { e: s6, h: a5, v: l4 }) => {
  let t5 = i4 && se(i4) || (r[0] == "[" ? r : l4(r.slice(1)));
  return `${(t5.includes("&") ? t5 : "&" + t5).replace(/&/g, `:merge(.${s6(a5(e3))})`)}${e3[0] == "p" ? "~" : " "}&`;
}], ["(ltr|rtl)", ({ 1: e3 }) => `[dir="${e3}"] &`], [/^\[(.+)]$/, ({ 1: e3 }) => /[&@]/.test(e3) && se(e3).replace(/[}]+$/, "").split("{")]];

// https://esm.sh/v103/@twind/preset-tailwind@1.0.1/deno/preset-tailwind.js
function l3({ disablePreflight: r } = {}) {
  return { preflight: r ? void 0 : i3, theme: H3, variants: c2, rules: j3 };
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
      }, o4.d = function(b5, m4, ce4) {
        o4.o(b5, m4) || Object.defineProperty(b5, m4, { configurable: false, enumerable: true, get: ce4 });
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
        var m4, ce4, re4, V5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A4) {
          return typeof A4;
        } : function(A4) {
          return A4 && typeof Symbol == "function" && A4.constructor === Symbol && A4 !== Symbol.prototype ? "symbol" : typeof A4;
        };
        (function(A4, u4) {
          V5(o4) === "object" && V5(b5) === "object" ? b5.exports = u4() : (ce4 = [], m4 = u4, re4 = typeof m4 == "function" ? m4.apply(o4, ce4) : m4, re4 !== void 0 && (b5.exports = re4));
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
            }, u4.d = function(g5, T6, B6) {
              u4.o(g5, T6) || Object.defineProperty(g5, T6, { configurable: false, enumerable: true, get: B6 });
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
            function g5(t5, c4) {
              var s6 = {};
              for (var d4 in t5)
                c4.indexOf(d4) >= 0 || Object.prototype.hasOwnProperty.call(t5, d4) && (s6[d4] = t5[d4]);
              return s6;
            }
            Object.defineProperty(u4, "__esModule", { value: true });
            var T6 = typeof Symbol == "function" && V5(Symbol.iterator) === "symbol" ? function(t5) {
              return typeof t5 > "u" ? "undefined" : V5(t5);
            } : function(t5) {
              return t5 && typeof Symbol == "function" && t5.constructor === Symbol && t5 !== Symbol.prototype ? "symbol" : typeof t5 > "u" ? "undefined" : V5(t5);
            }, B6 = Object.assign || function(t5) {
              for (var c4 = 1; c4 < arguments.length; c4++) {
                var s6 = arguments[c4];
                for (var d4 in s6)
                  Object.prototype.hasOwnProperty.call(s6, d4) && (t5[d4] = s6[d4]);
              }
              return t5;
            }, J3 = { top: "top", bottom: "bottom" }, e3 = { alertTime: 3, dateMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], overlayClickDismiss: true, overlayOpacity: 0.75, transitionCurve: "ease", transitionDuration: 0.3, transitionSelector: "all", classes: { container: "notie-container", textbox: "notie-textbox", textboxInner: "notie-textbox-inner", button: "notie-button", element: "notie-element", elementHalf: "notie-element-half", elementThird: "notie-element-third", overlay: "notie-overlay", backgroundSuccess: "notie-background-success", backgroundWarning: "notie-background-warning", backgroundError: "notie-background-error", backgroundInfo: "notie-background-info", backgroundNeutral: "notie-background-neutral", backgroundOverlay: "notie-background-overlay", alert: "notie-alert", inputField: "notie-input-field", selectChoiceRepeated: "notie-select-choice-repeated", dateSelectorInner: "notie-date-selector-inner", dateSelectorUp: "notie-date-selector-up" }, ids: { overlay: "notie-overlay" }, positions: { alert: J3.top, force: J3.top, confirm: J3.top, input: J3.top, select: J3.bottom, date: J3.top } }, ge2 = u4.setOptions = function(t5) {
              e3 = B6({}, e3, t5, { classes: B6({}, e3.classes, t5.classes), ids: B6({}, e3.ids, t5.ids), positions: B6({}, e3.positions, t5.positions) });
            }, fe = function() {
              return new Promise(function(t5) {
                return setTimeout(t5, 0);
              });
            }, oe3 = function(t5) {
              return new Promise(function(c4) {
                return setTimeout(c4, 1e3 * t5);
              });
            }, R6 = function() {
              document.activeElement && document.activeElement.blur();
            }, W6 = function() {
              var t5 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c4) {
                var s6 = 16 * Math.random() | 0, d4 = c4 === "x" ? s6 : 3 & s6 | 8;
                return d4.toString(16);
              });
              return "notie-" + t5;
            }, le2 = { 1: e3.classes.backgroundSuccess, success: e3.classes.backgroundSuccess, 2: e3.classes.backgroundWarning, warning: e3.classes.backgroundWarning, 3: e3.classes.backgroundError, error: e3.classes.backgroundError, 4: e3.classes.backgroundInfo, info: e3.classes.backgroundInfo, 5: e3.classes.backgroundNeutral, neutral: e3.classes.backgroundNeutral }, me2 = function() {
              return e3.transitionSelector + " " + e3.transitionDuration + "s " + e3.transitionCurve;
            }, $4 = function(t5) {
              return t5.keyCode === 13;
            }, ee4 = function(t5) {
              return t5.keyCode === 27;
            }, K5 = function(t5, c4) {
              t5.classList.add(e3.classes.container), t5.style[c4] = "-10000px", document.body.appendChild(t5), t5.style[c4] = "-" + t5.offsetHeight + "px", t5.listener && window.addEventListener("keydown", t5.listener), fe().then(function() {
                t5.style.transition = me2(), t5.style[c4] = 0;
              });
            }, O4 = function(t5, c4) {
              var s6 = document.getElementById(t5);
              s6 && (s6.style[c4] = "-" + s6.offsetHeight + "px", s6.listener && window.removeEventListener("keydown", s6.listener), oe3(e3.transitionDuration).then(function() {
                s6.parentNode && s6.parentNode.removeChild(s6);
              }));
            }, te2 = function(t5, c4) {
              var s6 = document.createElement("div");
              s6.id = e3.ids.overlay, s6.classList.add(e3.classes.overlay), s6.classList.add(e3.classes.backgroundOverlay), s6.style.opacity = 0, t5 && e3.overlayClickDismiss && (s6.onclick = function() {
                O4(t5.id, c4), j5();
              }), document.body.appendChild(s6), fe().then(function() {
                s6.style.transition = me2(), s6.style.opacity = e3.overlayOpacity;
              });
            }, j5 = function() {
              var t5 = document.getElementById(e3.ids.overlay);
              t5.style.opacity = 0, oe3(e3.transitionDuration).then(function() {
                t5.parentNode && t5.parentNode.removeChild(t5);
              });
            }, F7 = u4.hideAlerts = function(t5) {
              var c4 = document.getElementsByClassName(e3.classes.alert);
              if (c4.length) {
                for (var s6 = 0; s6 < c4.length; s6++) {
                  var d4 = c4[s6];
                  O4(d4.id, d4.position);
                }
                t5 && oe3(e3.transitionDuration).then(function() {
                  return t5();
                });
              }
            }, he2 = u4.alert = function(t5) {
              var c4 = t5.type, s6 = c4 === void 0 ? 4 : c4, d4 = t5.text, i4 = t5.time, k5 = i4 === void 0 ? e3.alertTime : i4, H6 = t5.stay, S8 = H6 !== void 0 && H6, h3 = t5.position, p7 = h3 === void 0 ? e3.positions.alert || p7.top : h3;
              R6(), F7();
              var l4 = document.createElement("div"), f3 = W6();
              l4.id = f3, l4.position = p7, l4.classList.add(e3.classes.textbox), l4.classList.add(le2[s6]), l4.classList.add(e3.classes.alert), l4.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + d4 + "</div>", l4.onclick = function() {
                return O4(f3, p7);
              }, l4.listener = function(n3) {
                ($4(n3) || ee4(n3)) && F7();
              }, K5(l4, p7), k5 && k5 < 1 && (k5 = 1), !S8 && k5 && oe3(k5).then(function() {
                return O4(f3, p7);
              });
            }, ke2 = u4.force = function(t5, c4) {
              var s6 = t5.type, d4 = s6 === void 0 ? 5 : s6, i4 = t5.text, k5 = t5.buttonText, H6 = k5 === void 0 ? "OK" : k5, S8 = t5.callback, h3 = t5.position, p7 = h3 === void 0 ? e3.positions.force || p7.top : h3;
              R6(), F7();
              var l4 = document.createElement("div"), f3 = W6();
              l4.id = f3;
              var n3 = document.createElement("div");
              n3.classList.add(e3.classes.textbox), n3.classList.add(e3.classes.backgroundInfo), n3.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + i4 + "</div>";
              var r = document.createElement("div");
              r.classList.add(e3.classes.button), r.classList.add(le2[d4]), r.innerHTML = H6, r.onclick = function() {
                O4(f3, p7), j5(), S8 ? S8() : c4 && c4();
              }, l4.appendChild(n3), l4.appendChild(r), l4.listener = function(C6) {
                $4(C6) && r.click();
              }, K5(l4, p7), te2();
            }, Ce2 = u4.confirm = function(t5, c4, s6) {
              var d4 = t5.text, i4 = t5.submitText, k5 = i4 === void 0 ? "Yes" : i4, H6 = t5.cancelText, S8 = H6 === void 0 ? "Cancel" : H6, h3 = t5.submitCallback, p7 = t5.cancelCallback, l4 = t5.position, f3 = l4 === void 0 ? e3.positions.confirm || f3.top : l4;
              R6(), F7();
              var n3 = document.createElement("div"), r = W6();
              n3.id = r;
              var C6 = document.createElement("div");
              C6.classList.add(e3.classes.textbox), C6.classList.add(e3.classes.backgroundInfo), C6.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + d4 + "</div>";
              var x6 = document.createElement("div");
              x6.classList.add(e3.classes.button), x6.classList.add(e3.classes.elementHalf), x6.classList.add(e3.classes.backgroundSuccess), x6.innerHTML = k5, x6.onclick = function() {
                O4(r, f3), j5(), h3 ? h3() : c4 && c4();
              };
              var a5 = document.createElement("div");
              a5.classList.add(e3.classes.button), a5.classList.add(e3.classes.elementHalf), a5.classList.add(e3.classes.backgroundError), a5.innerHTML = S8, a5.onclick = function() {
                O4(r, f3), j5(), p7 ? p7() : s6 && s6();
              }, n3.appendChild(C6), n3.appendChild(x6), n3.appendChild(a5), n3.listener = function(E3) {
                $4(E3) ? x6.click() : ee4(E3) && a5.click();
              }, K5(n3, f3), te2(n3, f3);
            }, ve2 = function(t5, c4, s6) {
              var d4 = t5.text, i4 = t5.submitText, k5 = i4 === void 0 ? "Submit" : i4, H6 = t5.cancelText, S8 = H6 === void 0 ? "Cancel" : H6, h3 = t5.submitCallback, p7 = t5.cancelCallback, l4 = t5.position, f3 = l4 === void 0 ? e3.positions.input || f3.top : l4, n3 = g5(t5, ["text", "submitText", "cancelText", "submitCallback", "cancelCallback", "position"]);
              R6(), F7();
              var r = document.createElement("div"), C6 = W6();
              r.id = C6;
              var x6 = document.createElement("div");
              x6.classList.add(e3.classes.textbox), x6.classList.add(e3.classes.backgroundInfo), x6.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + d4 + "</div>";
              var a5 = document.createElement("input");
              a5.classList.add(e3.classes.inputField), a5.setAttribute("autocapitalize", n3.autocapitalize || "none"), a5.setAttribute("autocomplete", n3.autocomplete || "off"), a5.setAttribute("autocorrect", n3.autocorrect || "off"), a5.setAttribute("autofocus", n3.autofocus || "true"), a5.setAttribute("inputmode", n3.inputmode || "verbatim"), a5.setAttribute("max", n3.max || ""), a5.setAttribute("maxlength", n3.maxlength || ""), a5.setAttribute("min", n3.min || ""), a5.setAttribute("minlength", n3.minlength || ""), a5.setAttribute("placeholder", n3.placeholder || ""), a5.setAttribute("spellcheck", n3.spellcheck || "default"), a5.setAttribute("step", n3.step || "any"), a5.setAttribute("type", n3.type || "text"), a5.value = n3.value || "", n3.allowed && (a5.oninput = function() {
                var M5 = void 0;
                if (Array.isArray(n3.allowed)) {
                  for (var w6 = "", _2 = n3.allowed, P5 = 0; P5 < _2.length; P5++)
                    _2[P5] === "an" ? w6 += "0-9a-zA-Z" : _2[P5] === "a" ? w6 += "a-zA-Z" : _2[P5] === "n" && (w6 += "0-9"), _2[P5] === "s" && (w6 += " ");
                  M5 = new RegExp("[^" + w6 + "]", "g");
                } else
                  T6(n3.allowed) === "object" && (M5 = n3.allowed);
                a5.value = a5.value.replace(M5, "");
              });
              var E3 = document.createElement("div");
              E3.classList.add(e3.classes.button), E3.classList.add(e3.classes.elementHalf), E3.classList.add(e3.classes.backgroundSuccess), E3.innerHTML = k5, E3.onclick = function() {
                O4(C6, f3), j5(), h3 ? h3(a5.value) : c4 && c4(a5.value);
              };
              var D8 = document.createElement("div");
              D8.classList.add(e3.classes.button), D8.classList.add(e3.classes.elementHalf), D8.classList.add(e3.classes.backgroundError), D8.innerHTML = S8, D8.onclick = function() {
                O4(C6, f3), j5(), p7 ? p7(a5.value) : s6 && s6(a5.value);
              }, r.appendChild(x6), r.appendChild(a5), r.appendChild(E3), r.appendChild(D8), r.listener = function(M5) {
                $4(M5) ? E3.click() : ee4(M5) && D8.click();
              }, K5(r, f3), a5.focus(), te2(r, f3);
            };
            u4.input = ve2;
            var Ee2 = u4.select = function(t5, c4) {
              var s6 = t5.text, d4 = t5.cancelText, i4 = d4 === void 0 ? "Cancel" : d4, k5 = t5.cancelCallback, H6 = t5.choices, S8 = t5.position, h3 = S8 === void 0 ? e3.positions.select || h3.top : S8;
              R6(), F7();
              var p7 = document.createElement("div"), l4 = W6();
              p7.id = l4;
              var f3 = document.createElement("div");
              f3.classList.add(e3.classes.textbox), f3.classList.add(e3.classes.backgroundInfo), f3.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + s6 + "</div>", p7.appendChild(f3), H6.forEach(function(r, C6) {
                var x6 = r.type, a5 = x6 === void 0 ? 1 : x6, E3 = r.text, D8 = r.handler, M5 = document.createElement("div");
                M5.classList.add(le2[a5]), M5.classList.add(e3.classes.button), M5.classList.add(e3.classes.selectChoice);
                var w6 = H6[C6 + 1];
                w6 && !w6.type && (w6.type = 1), w6 && w6.type === a5 && M5.classList.add(e3.classes.selectChoiceRepeated), M5.innerHTML = E3, M5.onclick = function() {
                  O4(l4, h3), j5(), D8();
                }, p7.appendChild(M5);
              });
              var n3 = document.createElement("div");
              n3.classList.add(e3.classes.backgroundNeutral), n3.classList.add(e3.classes.button), n3.innerHTML = i4, n3.onclick = function() {
                O4(l4, h3), j5(), k5 ? k5() : c4 && c4();
              }, p7.appendChild(n3), p7.listener = function(r) {
                ee4(r) && n3.click();
              }, K5(p7, h3), te2(p7, h3);
            }, Te = u4.date = function(t5, c4, s6) {
              var d4 = t5.value, i4 = d4 === void 0 ? new Date() : d4, k5 = t5.submitText, H6 = k5 === void 0 ? "OK" : k5, S8 = t5.cancelText, h3 = S8 === void 0 ? "Cancel" : S8, p7 = t5.submitCallback, l4 = t5.cancelCallback, f3 = t5.position, n3 = f3 === void 0 ? e3.positions.date || n3.top : f3;
              R6(), F7();
              var r = "&#9662", C6 = document.createElement("div"), x6 = document.createElement("div"), a5 = document.createElement("div"), E3 = function(L5) {
                C6.innerHTML = e3.dateMonths[L5.getMonth()], x6.innerHTML = L5.getDate(), a5.innerHTML = L5.getFullYear();
              }, D8 = function(L5) {
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
              G5.classList.add(e3.classes.button), G5.classList.add(e3.classes.elementThird), G5.classList.add(e3.classes.dateSelectorUp), G5.innerHTML = r, C6.classList.add(e3.classes.element), C6.classList.add(e3.classes.elementThird), C6.innerHTML = e3.dateMonths[i4.getMonth()], x6.classList.add(e3.classes.element), x6.classList.add(e3.classes.elementThird), x6.setAttribute("contentEditable", true), x6.addEventListener("input", D8), x6.addEventListener("blur", w6), x6.innerHTML = i4.getDate(), a5.classList.add(e3.classes.element), a5.classList.add(e3.classes.elementThird), a5.setAttribute("contentEditable", true), a5.addEventListener("input", M5), a5.addEventListener("blur", w6), a5.innerHTML = i4.getFullYear();
              var ne4 = document.createElement("div");
              ne4.classList.add(e3.classes.button), ne4.classList.add(e3.classes.elementThird), ne4.innerHTML = r;
              var se2 = document.createElement("div");
              se2.classList.add(e3.classes.button), se2.classList.add(e3.classes.elementThird), se2.innerHTML = r;
              var ae3 = document.createElement("div");
              ae3.classList.add(e3.classes.button), ae3.classList.add(e3.classes.elementThird), ae3.innerHTML = r, Z4.onclick = function() {
                return _2(1);
              }, q5.onclick = function() {
                return P5(1);
              }, G5.onclick = function() {
                return be(1);
              }, ne4.onclick = function() {
                return _2(-1);
              }, se2.onclick = function() {
                return P5(-1);
              }, ae3.onclick = function() {
                return be(-1);
              };
              var z5 = document.createElement("div");
              z5.classList.add(e3.classes.button), z5.classList.add(e3.classes.elementHalf), z5.classList.add(e3.classes.backgroundSuccess), z5.innerHTML = H6, z5.onclick = function() {
                O4(de2, n3), j5(), p7 ? p7(i4) : c4 && c4(i4);
              };
              var U5 = document.createElement("div");
              U5.classList.add(e3.classes.button), U5.classList.add(e3.classes.elementHalf), U5.classList.add(e3.classes.backgroundError), U5.innerHTML = h3, U5.onclick = function() {
                O4(de2, n3), j5(), l4 ? l4(i4) : s6 && s6(i4);
              }, I5.appendChild(Z4), I5.appendChild(q5), I5.appendChild(G5), I5.appendChild(C6), I5.appendChild(x6), I5.appendChild(a5), I5.appendChild(ne4), I5.appendChild(se2), I5.appendChild(ae3), ue3.appendChild(I5), Y5.appendChild(ue3), Y5.appendChild(z5), Y5.appendChild(U5), Y5.listener = function(L5) {
                $4(L5) ? z5.click() : ee4(L5) && U5.click();
              }, K5(Y5, n3), te2(Y5, n3);
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
var c3 = Symbol();

// https://esm.sh/v103/@nanostores/i18n@0.7.1/deno/i18n.js
function g3(r, n3) {
  if (typeof r == "string")
    return n3(r);
  {
    let e3 = {};
    for (let t5 in r)
      e3[t5] = g3(r[t5], n3);
    return e3;
  }
}
function p5(r) {
  return (n3) => {
    if (n3.transform) {
      let e3 = n3.transform;
      return n3 = n3.input, { input: n3, transform(t5, o4, s6) {
        let f3 = r(t5, o4, ...s6);
        return (...l4) => e3(t5, f3, l4);
      } };
    } else
      return { input: n3, transform(e3, t5, o4) {
        return r(e3, t5, ...o4);
      } };
  };
}
var N4 = p5((r, n3, e3) => g3(n3, (t5) => {
  for (let o4 in e3)
    t5 = t5.replace(new RegExp(`{${o4}}`, "g"), e3[o4]);
  return t5;
}));
var R4 = p5((r, n3, e3) => {
  let t5 = new Intl.PluralRules(r).select(e3);
  return t5 in n3 || (t5 = "many"), g3(n3[t5], (o4) => o4.replace(/{count}/g, e3));
});

// https://esm.sh/v103/hotkeys-js@3.10.1/deno/hotkeys-js.js
var M4 = typeof navigator < "u" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : false;
function P4(e3, t5, i4, r) {
  e3.addEventListener ? e3.addEventListener(t5, i4, r) : e3.attachEvent && e3.attachEvent("on".concat(t5), function() {
    i4(window.event);
  });
}
function T5(e3, t5) {
  for (var i4 = t5.slice(0, t5.length - 1), r = 0; r < i4.length; r++)
    i4[r] = e3[i4[r].toLowerCase()];
  return i4;
}
function U4(e3) {
  typeof e3 != "string" && (e3 = ""), e3 = e3.replace(/\s/g, "");
  for (var t5 = e3.split(","), i4 = t5.lastIndexOf(""); i4 >= 0; )
    t5[i4 - 1] += ",", t5.splice(i4, 1), i4 = t5.lastIndexOf("");
  return t5;
}
function G4(e3, t5) {
  for (var i4 = e3.length >= t5.length ? e3 : t5, r = e3.length >= t5.length ? t5 : e3, n3 = true, a5 = 0; a5 < i4.length; a5++)
    r.indexOf(i4[a5]) === -1 && (n3 = false);
  return n3;
}
var b4 = { backspace: 8, "\u232B": 8, tab: 9, clear: 12, enter: 13, "\u21A9": 13, return: 13, esc: 27, escape: 27, space: 32, left: 37, up: 38, right: 39, down: 40, del: 46, delete: 46, ins: 45, insert: 45, home: 36, end: 35, pageup: 33, pagedown: 34, capslock: 20, num_0: 96, num_1: 97, num_2: 98, num_3: 99, num_4: 100, num_5: 101, num_6: 102, num_7: 103, num_8: 104, num_9: 105, num_multiply: 106, num_add: 107, num_enter: 108, num_subtract: 109, num_decimal: 110, num_divide: 111, "\u21EA": 20, ",": 188, ".": 190, "/": 191, "`": 192, "-": M4 ? 173 : 189, "=": M4 ? 61 : 187, ";": M4 ? 59 : 186, "'": 222, "[": 219, "]": 221, "\\": 220 };
var g4 = { "\u21E7": 16, shift: 16, "\u2325": 18, alt: 18, option: 18, "\u2303": 17, ctrl: 17, control: 17, "\u2318": 91, cmd: 91, command: 91 };
var L4 = { 16: "shiftKey", 18: "altKey", 17: "ctrlKey", 91: "metaKey", shiftKey: 16, ctrlKey: 17, altKey: 18, metaKey: 91 };
var u3 = { 16: false, 18: false, 17: false, 91: false };
var s5 = {};
for (O3 = 1; O3 < 20; O3++)
  b4["f".concat(O3)] = 111 + O3;
var O3;
var f2 = [];
var A3 = false;
var D6 = "all";
var H5 = [];
var C5 = function(t5) {
  return b4[t5.toLowerCase()] || g4[t5.toLowerCase()] || t5.toUpperCase().charCodeAt(0);
};
var R5 = function(t5) {
  return Object.keys(b4).find(function(i4) {
    return b4[i4] === t5;
  });
};
var V4 = function(t5) {
  return Object.keys(g4).find(function(i4) {
    return g4[i4] === t5;
  });
};
function F6(e3) {
  D6 = e3 || "all";
}
function E2() {
  return D6 || "all";
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
  var t5 = e3.target || e3.srcElement, i4 = t5.tagName, r = true;
  return (t5.isContentEditable || (i4 === "INPUT" || i4 === "TEXTAREA" || i4 === "SELECT") && !t5.readOnly) && (r = false), r;
}
function z4(e3) {
  return typeof e3 == "string" && (e3 = C5(e3)), f2.indexOf(e3) !== -1;
}
function J2(e3, t5) {
  var i4, r;
  e3 || (e3 = E2());
  for (var n3 in s5)
    if (Object.prototype.hasOwnProperty.call(s5, n3))
      for (i4 = s5[n3], r = 0; r < i4.length; )
        i4[r].scope === e3 ? i4.splice(r, 1) : r++;
  E2() === e3 && F6(t5 || "all");
}
function N5(e3) {
  var t5 = e3.keyCode || e3.which || e3.charCode, i4 = f2.indexOf(t5);
  if (i4 >= 0 && f2.splice(i4, 1), e3.key && e3.key.toLowerCase() === "meta" && f2.splice(0, f2.length), (t5 === 93 || t5 === 224) && (t5 = 91), t5 in u3) {
    u3[t5] = false;
    for (var r in g4)
      g4[r] === t5 && (v3[r] = false);
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
    for (var t5 = arguments.length, i4 = new Array(t5 > 1 ? t5 - 1 : 0), r = 1; r < t5; r++)
      i4[r - 1] = arguments[r];
    var n3 = i4[0], a5 = i4[1];
    typeof n3 == "function" && (a5 = n3, n3 = ""), S7({ key: e3, scope: n3, method: a5, splitKey: "+" });
  }
}
var S7 = function(t5) {
  var i4 = t5.key, r = t5.scope, n3 = t5.method, a5 = t5.splitKey, o4 = a5 === void 0 ? "+" : a5, l4 = U4(i4);
  l4.forEach(function(c4) {
    var p7 = c4.split(o4), m4 = p7.length, y4 = p7[m4 - 1], d4 = y4 === "*" ? "*" : C5(y4);
    if (s5[d4]) {
      r || (r = E2());
      var K5 = m4 > 1 ? T5(g4, p7) : [];
      s5[d4] = s5[d4].filter(function(h3) {
        var w6 = n3 ? h3.method === n3 : true;
        return !(w6 && h3.scope === r && G4(h3.mods, K5));
      });
    }
  });
};
function _(e3, t5, i4, r) {
  if (t5.element === r) {
    var n3;
    if (t5.scope === i4 || t5.scope === "all") {
      n3 = t5.mods.length > 0;
      for (var a5 in u3)
        Object.prototype.hasOwnProperty.call(u3, a5) && (!u3[a5] && t5.mods.indexOf(+a5) > -1 || u3[a5] && t5.mods.indexOf(+a5) === -1) && (n3 = false);
      (t5.mods.length === 0 && !u3[16] && !u3[18] && !u3[17] && !u3[91] || n3 || t5.shortcut === "*") && t5.method(e3, t5) === false && (e3.preventDefault ? e3.preventDefault() : e3.returnValue = false, e3.stopPropagation && e3.stopPropagation(), e3.cancelBubble && (e3.cancelBubble = true));
    }
  }
}
function k4(e3, t5) {
  var i4 = s5["*"], r = e3.keyCode || e3.which || e3.charCode;
  if (v3.filter.call(this, e3)) {
    if ((r === 93 || r === 224) && (r = 91), f2.indexOf(r) === -1 && r !== 229 && f2.push(r), ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach(function(h3) {
      var w6 = L4[h3];
      e3[h3] && f2.indexOf(w6) === -1 ? f2.push(w6) : !e3[h3] && f2.indexOf(w6) > -1 ? f2.splice(f2.indexOf(w6), 1) : h3 === "metaKey" && e3[h3] && f2.length === 3 && (e3.ctrlKey || e3.shiftKey || e3.altKey || (f2 = f2.slice(f2.indexOf(w6))));
    }), r in u3) {
      u3[r] = true;
      for (var n3 in g4)
        g4[n3] === r && (v3[n3] = true);
      if (!i4)
        return;
    }
    for (var a5 in u3)
      Object.prototype.hasOwnProperty.call(u3, a5) && (u3[a5] = e3[L4[a5]]);
    e3.getModifierState && !(e3.altKey && !e3.ctrlKey) && e3.getModifierState("AltGraph") && (f2.indexOf(17) === -1 && f2.push(17), f2.indexOf(18) === -1 && f2.push(18), u3[17] = true, u3[18] = true);
    var o4 = E2();
    if (i4)
      for (var l4 = 0; l4 < i4.length; l4++)
        i4[l4].scope === o4 && (e3.type === "keydown" && i4[l4].keydown || e3.type === "keyup" && i4[l4].keyup) && _(e3, i4[l4], o4, t5);
    if (r in s5) {
      for (var c4 = 0; c4 < s5[r].length; c4++)
        if ((e3.type === "keydown" && s5[r][c4].keydown || e3.type === "keyup" && s5[r][c4].keyup) && s5[r][c4].key) {
          for (var p7 = s5[r][c4], m4 = p7.splitKey, y4 = p7.key.split(m4), d4 = [], K5 = 0; K5 < y4.length; K5++)
            d4.push(C5(y4[K5]));
          d4.sort().join("") === f2.sort().join("") && _(e3, p7, o4, t5);
        }
    }
  }
}
function W5(e3) {
  return H5.indexOf(e3) > -1;
}
function v3(e3, t5, i4) {
  f2 = [];
  var r = U4(e3), n3 = [], a5 = "all", o4 = document, l4 = 0, c4 = false, p7 = true, m4 = "+", y4 = false;
  for (i4 === void 0 && typeof t5 == "function" && (i4 = t5), Object.prototype.toString.call(t5) === "[object Object]" && (t5.scope && (a5 = t5.scope), t5.element && (o4 = t5.element), t5.keyup && (c4 = t5.keyup), t5.keydown !== void 0 && (p7 = t5.keydown), t5.capture !== void 0 && (y4 = t5.capture), typeof t5.splitKey == "string" && (m4 = t5.splitKey)), typeof t5 == "string" && (a5 = t5); l4 < r.length; l4++)
    e3 = r[l4].split(m4), n3 = [], e3.length > 1 && (n3 = T5(g4, e3)), e3 = e3[e3.length - 1], e3 = e3 === "*" ? "*" : C5(e3), e3 in s5 || (s5[e3] = []), s5[e3].push({ keyup: c4, keydown: p7, scope: a5, mods: n3, shortcut: r[l4], method: i4, key: r[l4], splitKey: m4, element: o4 });
  typeof o4 < "u" && !W5(o4) && window && (H5.push(o4), P4(o4, "keydown", function(d4) {
    k4(d4, o4);
  }, y4), A3 || (A3 = true, P4(window, "focus", function() {
    f2 = [];
  }, y4)), P4(o4, "keyup", function(d4) {
    k4(d4, o4), N5(d4);
  }, y4));
}
function Y4(e3) {
  var t5 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
  Object.keys(s5).forEach(function(i4) {
    var r = s5[i4].filter(function(n3) {
      return n3.scope === t5 && n3.shortcut === e3;
    });
    r.forEach(function(n3) {
      n3 && n3.method && n3.method();
    });
  });
}
var j4 = { getPressedKeyString: $3, setScope: F6, getScope: E2, deleteScope: J2, getPressedKeyCodes: X4, isPressed: z4, filter: q4, trigger: Y4, unbind: Q4, keyMap: b4, modifier: g4, modifierMap: L4 };
for (x5 in j4)
  Object.prototype.hasOwnProperty.call(j4, x5) && (v3[x5] = j4[x5]);
var x5;
typeof document < "u" && (B5 = window.hotkeys, v3.noConflict = function(e3) {
  return e3 && window.hotkeys === v3 && (window.hotkeys = B5), v3;
}, window.hotkeys = v3);
var B5;

// deps.ts
var toast = Fe.alert;

// https://esm.sh/stable/preact@10.11.0/deno/jsx-runtime.js
var a4 = 0;
function p6(n3, s6, t5, f3, u4) {
  var r, o4, _2 = {};
  for (o4 in s6)
    o4 == "ref" ? r = s6[o4] : _2[o4] = s6[o4];
  var e3 = { type: n3, props: _2, key: t5, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --a4, __source: u4, __self: f3 };
  if (typeof n3 == "function" && (r = n3.defaultProps))
    for (o4 in r)
      _2[o4] === void 0 && (_2[o4] = r[o4]);
  return d.vnode && d.vnode(e3), e3;
}

// components/switch.tsx
function Switch({ value, defaultCase = null, cases }) {
  if (value == null)
    return null;
  return /* @__PURE__ */ p6(L, {
    children: cases[value] != null ? cases[value] : defaultCase
  });
}

// hooks/use_route.ts
function useRoute() {
  const [route, setRoute] = P2(location.hash);
  j2(() => {
    const updateRoute = () => setRoute(location.hash);
    globalThis.addEventListener("hashchange", updateRoute, false);
    return () => {
      globalThis.removeEventListener("hashchange", updateRoute);
    };
  }, []);
  return route;
}

// dom/toast.ts
function success(text) {
  toast({
    type: "success",
    text
  });
}
function error(text) {
  toast({
    type: "error",
    text
  });
}

// utils/platform.ts
var DENO = "DENO";
var CHROME = "CHROME";
var FIREFOX = "FIREFOX";
function isBrowser(toCheck) {
  let currentBrowser = CHROME;
  try {
    const userAgent = navigator?.userAgent || "";
    if (/firefox/i.test(userAgent)) {
      currentBrowser = FIREFOX;
    } else if (/deno/i.test(userAgent)) {
      currentBrowser = DENO;
    }
  } catch (_2) {
  }
  if (!toCheck)
    currentBrowser;
  if (toCheck === CHROME && currentBrowser === CHROME)
    return true;
  if (toCheck === FIREFOX && currentBrowser === FIREFOX)
    return true;
  if (toCheck === DENO && currentBrowser === DENO)
    return true;
  return false;
}
function isChrome() {
  return isBrowser(CHROME);
}
function isDeno() {
  return typeof Deno !== "undefined";
}
function isFirefox() {
  return isBrowser(FIREFOX);
}

// browser/mock_browser.ts
var listeners = {
  addListener: () => {
  },
  removeListener: () => {
  },
  hasListener: () => {
  }
};
var mock_browser_default = {
  permissions: {
    contains: () => {
    },
    request: () => {
    }
  },
  runtime: {
    onMessage: listeners,
    openOptionsPage: () => {
    },
    lastError: {
      message: ""
    }
  },
  storage: {
    sync: {
      get: () => {
      },
      set: () => {
      }
    }
  },
  tabs: {
    onUpdated: listeners,
    query: () => {
    },
    sendMessage: () => {
    }
  }
};

// browser/browser.ts
var browserAPI;
if (isDeno()) {
  browserAPI = mock_browser_default;
} else {
  browserAPI = globalThis.browser;
}

// libs/use-chrome-storage/storage.ts
var storage = {
  get: (key, defaultValue, storageArea) => {
    const keyObj = defaultValue === void 0 ? key : { [key]: defaultValue };
    return browserAPI.storage[storageArea].get(
      keyObj
    );
  },
  set: (key, value, storageArea) => {
    return browserAPI.storage[storageArea].set({ [key]: value });
  }
};

// constant.ts
var brandName = "Immersive Translate";
var brandId = "immersive-translate";
var brandIdForJs = "immersiveTranslate";
var targetContainerElementAttributeName = `${brandIdForJs}Container`;
var specifiedTargetContainerElementAttributeName = `${brandIdForJs}SpecifiedContainer`;
var buildinConfigStorageKey = "buildinConfig";
var contextOpenOptionsMenuId = `openOptionsPage`;
var contextTranslateLocalPdfFileMenuId = `translateLocalPdfFile`;
var hostname = "immersive-translate.owenyoung.com";
var homepage = `https://${hostname}/`;
var buildinConfigSyncUrl = `https://${hostname}/buildin_config.json`;
var sourceElementMarkAttributeName = `${brandIdForJs}Mark`;
var sourceElementEffectAttributeNameForJs = `immersiveTranslateEffect`;
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
var defaultPlaceholderDelimiters = ["@", "#"];
var titleDelimiters = " --- ";
var translationTextSeparator = "\n";
var translationTargetElementWrapperClass = `${brandId}-target-wrapper`;
var translationPdfTargetContainerClass = `${brandId}-pdf-target-container`;
var translationTargetInnerElementWrapperClass = `${brandId}-target-inner`;
var translationSourceElementsWrapperClass = `${brandId}-source-wrapper`;
var translationTargetTranslationElementBlockWrapperClass = `${brandId}-target-translation-block-wrapper`;
var translationTargetTranslationPdfElementBlockWrapperClass = `${brandId}-target-translation-pdf-block-wrapper`;
var translationTargetTranslationElementPreWhitespaceWrapperClass = `${brandId}-target-translation-pre-whitespace`;
var translationTargetTranslationElementInlineWrapperClass = `${brandId}-target-translation-inline-wrapper`;
var translationThemes = [
  "none",
  "dashed",
  "underline",
  "dashedBorder",
  "mask",
  "dotted",
  "highlight",
  "blockquote",
  "weakening",
  "paper",
  "italic",
  "bold",
  "thinDashed"
];
var languages = [
  "auto",
  "en",
  "zh-CN",
  "zh-TW",
  "ja",
  "af",
  "am",
  "ar",
  "az",
  "be",
  "bg",
  "bn",
  "bs",
  "ca",
  "ceb",
  "co",
  "cs",
  "cy",
  "da",
  "de",
  "el",
  "eo",
  "es",
  "et",
  "eu",
  "fa",
  "fi",
  "fil",
  "fj",
  "fr",
  "fy",
  "ga",
  "gd",
  "gl",
  "gu",
  "ha",
  "haw",
  "he",
  "hi",
  "hmn",
  "hr",
  "ht",
  "hu",
  "hy",
  "id",
  "ig",
  "is",
  "it",
  "jw",
  "ka",
  "kk",
  "km",
  "kn",
  "ko",
  "ku",
  "ky",
  "la",
  "lb",
  "lo",
  "lt",
  "lv",
  "mg",
  "mi",
  "mk",
  "ml",
  "mn",
  "mr",
  "ms",
  "mt",
  "mww",
  "my",
  "ne",
  "nl",
  "no",
  "ny",
  "otq",
  "pa",
  "pl",
  "ps",
  "pt",
  "ro",
  "ru",
  "sd",
  "si",
  "sk",
  "sl",
  "sm",
  "sn",
  "so",
  "sq",
  "sr",
  "sr-Cyrl",
  "sr-Latn",
  "st",
  "su",
  "sv",
  "sw",
  "ta",
  "te",
  "tg",
  "th",
  "tlh",
  "tlh-Qaak",
  "to",
  "tr",
  "ty",
  "ug",
  "uk",
  "ur",
  "uz",
  "vi",
  "wyw",
  "xh",
  "yi",
  "yo",
  "yua",
  "yue",
  "zu"
];
var allSupportedShortcuts = [
  "toggleTranslatePage",
  "toggleTranslateTheWholePage",
  "toggleTranslateToThePageEndImmediately",
  "toggleTranslateTheMainPage"
];
var buildinExcludeUrls = [
  "https://immersive-translate.owenyoung.com/options/",
  "http://localhost:8000/dist/userscript/options/",
  "https://www.deepl.com/translator",
  "translate.google.com"
];
var sampleSourceText = `Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post.`;
var sampleTargetText = `\u957F\u591C\u5C06\u81F3\uFF0C\u6211\u4ECE\u4ECA\u5F00\u59CB\u5B88\u671B\uFF0C\u81F3\u6B7B\u65B9\u4F11\u3002\u6211\u5C06\u4E0D\u5A36\u59BB\u3001\u4E0D\u5C01\u5730\u3001\u4E0D\u751F\u5B50\u3002\u6211\u5C06\u4E0D\u6234\u5B9D\u51A0\uFF0C\u4E0D\u4E89\u8363\u5BA0\u3002\u6211\u5C06\u5C3D\u5FE0\u804C\u5B88\uFF0C\u751F\u6B7B\u4E8E\u65AF\u3002`;
var fallbackLanguage = "zh-CN";

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

// libs/use-chrome-storage/useChromeStorage.ts
function useChromeStorage(key, initialValue, storageArea) {
  const [INITIAL_VALUE3] = P2(() => {
    return typeof initialValue === "function" ? initialValue() : initialValue;
  });
  const [STORAGE_AREA] = P2(storageArea);
  const [state, setState] = P2(INITIAL_VALUE3);
  const [isPersistent, setIsPersistent] = P2(true);
  const [error2, setError] = P2("");
  j2(() => {
    storage.get(key, INITIAL_VALUE3, STORAGE_AREA).then((res) => {
      if (res[key]) {
        setState(res[key]);
      }
      setIsPersistent(true);
      setError("");
    }).catch((error3) => {
      setIsPersistent(false);
      setError(error3);
    });
  }, [key, INITIAL_VALUE3, STORAGE_AREA]);
  const updateValue = L2(
    (newValue) => {
      const toStore = typeof newValue === "function" ? newValue(state) : newValue;
      log_default.debug(`new settings`, toStore);
      storage.set(key, toStore, STORAGE_AREA).then(() => {
        setState(toStore);
        setIsPersistent(true);
        setError("");
      }).catch((error3) => {
        setState(toStore);
        setIsPersistent(false);
        setError(error3);
      });
    },
    [STORAGE_AREA, key, state]
  );
  return [state, updateValue, isPersistent, error2];
}

// libs/use-chrome-storage/createChromeStorageStateHook.ts
function createChromeStorageStateHook(key, initialValue, storageArea) {
  const consumers = [];
  return function useCreateChromeStorageHook() {
    const [value, setValue, isPersistent, error2] = useChromeStorage(
      key,
      initialValue,
      storageArea
    );
    const setValueAll = L2((newValue) => {
      for (const consumer of consumers) {
        consumer(newValue);
      }
    }, []);
    j2(() => {
      consumers.push(setValue);
      return () => {
        consumers.splice(consumers.indexOf(setValue), 1);
      };
    }, [setValue]);
    return [value, setValueAll, isPersistent, error2];
  };
}

// libs/use-chrome-storage/mod.ts
function createChromeStorageStateHookLocal(key, initialValue) {
  return createChromeStorageStateHook(key, initialValue, "local");
}
function createChromeStorageStateHookSync(key, initialValue) {
  return createChromeStorageStateHook(key, initialValue, "sync");
}

// hooks/use_user_config.ts
var SETTINGS_KEY = "userConfig";
var INITIAL_VALUE = {};
var useUserConfig = createChromeStorageStateHookSync(
  SETTINGS_KEY,
  INITIAL_VALUE
);

// env.ts
function getEnv() {
  if (typeof process === "undefined") {
    if (typeof Deno !== "undefined") {
      const denoEnv = Deno.env.toObject();
      return denoEnv;
    }
  }
  const injectEnv = define_process_env_default;
  return injectEnv;
}
var env = getEnv();
function isMonkey() {
  return env.IMMERSIVE_TRANSLATE_USERSCRIPT === "1";
}
function isDeno2() {
  return typeof Deno !== "undefined";
}

// buildin_config.json
var buildin_config_default = {
  "minVersion": "0.0.20",
  "immediateTranslationTextCount": 4e3,
  "interval": 36e5,
  "cache": true,
  "donateUrl": "https://immersive-translate.owenyoung.com/donate.html",
  "feedbackUrl": "https://github.com/immersive-translate/next-immersive-translate/issues",
  "translationServices": {
    "volcAlpha": {
      "placeholderDelimiters": [
        "{",
        "}"
      ]
    },
    "volc": {
      "placeholderDelimiters": [
        "{",
        "}"
      ]
    },
    "tencent": {
      "placeholderDelimiters": [
        "{",
        "}"
      ]
    },
    "transmart": {
      "placeholderDelimiters": [
        "#",
        "#"
      ]
    },
    "baidu": {
      "placeholderDelimiters": [
        "#",
        "#"
      ]
    },
    "caiyun": {
      "placeholderDelimiters": [
        "{",
        "}"
      ]
    },
    "youdao": {
      "placeholderDelimiters": [
        "\u{1F6A0}",
        "\u{1F6A0}"
      ]
    }
  },
  "shortcuts": {
    "toggleTranslatePage": "Alt+A",
    "toggleTranslateTheWholePage": "Alt+W",
    "toggleTranslateToThePageEndImmediately": "Alt+S"
  },
  "translationParagraphLanguagePattern": {
    "matches": [
      "www.reddit.com",
      "old.reddit.com",
      "twitter.com",
      "*.twitter.com",
      "medium.com",
      "*.medium.com",
      "github.com",
      "gist.github.com",
      "www.facebook.com",
      "www.youtube.com",
      "m.youtube.com",
      "read.readwise.io",
      "www.inoreader.com",
      "mail.google.com",
      "google.com",
      "discord.com",
      "web.telegram.org",
      "*.slack.com"
    ],
    "excludeMatches": [],
    "selectorMatches": [
      "meta[property='al:ios:url'][content^='medium://']"
    ],
    "selectorExcludeMatches": []
  },
  "sourceLanguageUrlPattern": {},
  "generalRule": {
    "_comment": "",
    "normalizeBody": "",
    "wrapperPrefix": "smart",
    "wrapperSuffix": "smart",
    "isPdf": false,
    "isTransformPreTagNewLine": false,
    "urlChangeDelay": 20,
    "paragraphMinTextCount": 8,
    "paragraphMinWordCount": 2,
    "blockMinTextCount": 32,
    "blockMinWordCount": 5,
    "containerMinTextCount": 18,
    "lineBreakMaxTextCount": 0,
    "globalAttributes": {},
    "globalStyles": {
      ".sr-only": "display:none"
    },
    "selectors": [],
    "preWhitespaceDetectedTags": [
      "DIV",
      "SPAN"
    ],
    "stayOriginalSelectors": [],
    "additionalSelectors": [
      "h1",
      "section h2",
      "section h3",
      "section h4",
      "main h2",
      "main h3",
      "main h4",
      ".article-title",
      ".article-subtitle",
      ".article_title",
      ".article_subtitle",
      ".article__title",
      ".articleTitle",
      ".Article__content",
      ".title",
      ".abstract",
      ".titleLink",
      ".summary",
      ".content",
      ".headline",
      ".page-content"
    ],
    "atomicBlockTags": [],
    "excludeSelectors": [],
    "additionalExcludeSelectors": [
      ".social-share",
      ".breadcrumbs",
      ".post__footer",
      ".btn",
      ".reference-citations",
      ".share-nav",
      ".o-share",
      "[data-toolbar=share]"
    ],
    "translationClasses": [],
    "atomicBlockSelectors": [],
    "excludeTags": [
      "TITLE",
      "SCRIPT",
      "STYLE",
      "TEXTAREA",
      "SVG",
      "svg",
      "NOSCRIPT",
      "INPUT",
      "BUTTON",
      "BASE",
      "LABEL",
      "SELECT",
      "OPTION",
      "IMG",
      "SUB",
      "SUP",
      "HR",
      "PRE",
      "CODE",
      "KBD",
      "WBR",
      "TT",
      "META"
    ],
    "metaTags": [
      "META",
      "SCRIPT",
      "STYLE",
      "NOSCRIPT"
    ],
    "additionalExcludeTags": [],
    "stayOriginalTags": [
      "CODE",
      "TT",
      "IMG",
      "SUP"
    ],
    "additionalStayOriginalTags": [],
    "inlineTags": [
      "A",
      "ABBR",
      "FONT",
      "ACRONYM",
      "B",
      "INS",
      "DEL",
      "BDO",
      "MARK",
      "BIG",
      "NOBR",
      "CITE",
      "DFN",
      "EM",
      "I",
      "LABEL",
      "Q",
      "S",
      "SMALL",
      "SPAN",
      "STRONG",
      "SUB",
      "SUP",
      "U",
      "KBD",
      "TT",
      "VAR",
      "IMG",
      "CODE",
      "SCRIPT",
      "STYLE",
      "LINK",
      "TIME",
      "META"
    ],
    "additionalInlineTags": [],
    "extraInlineSelectors": [],
    "additionalInlineSelectors": [],
    "extraBlockSelectors": [],
    "allBlockTags": [
      "HGROUP",
      "CONTENT",
      "ADDRESS",
      "ARTICLE",
      "ASIDE",
      "BLOCKQUOTE",
      "CANVAS",
      "DD",
      "DL",
      "DT",
      "FIELDSET",
      "FIGCAPTION",
      "FIGURE",
      "FOOTER",
      "HEADER",
      "FORM",
      "HR",
      "MAIN",
      "NAV",
      "OL",
      "NOSCRIPT",
      "PRE",
      "SECTION",
      "TABLE",
      "TFOOT",
      "UL",
      "VIDEO",
      "P",
      "DIV",
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "UL",
      "LI",
      "OL",
      "BR",
      "PICTURE",
      "TBODY",
      "TR",
      "TD",
      "TH",
      "SOURCE"
    ]
  },
  "rules": [
    {
      "matches": [
        "moz-extension://*/pdf/index.html*"
      ],
      "isPdf": true,
      "wrapperPrefix": "",
      "wrapperSuffix": "",
      "urlChangeDelay": 0,
      "selectors": [
        ".textLayer"
      ],
      "excludeSelectors": [
        ".annotationLayer"
      ],
      "globalStyles": {
        "div.page": "width: 98%;",
        ".textLayer": "overflow:visible;opacity: 1;"
      }
    },
    {
      "matches": [
        "mail.jabber.org",
        "antirez.com"
      ],
      "excludeTags": [
        "TITLE",
        "SCRIPT",
        "STYLE",
        "TEXTAREA",
        "SVG",
        "svg",
        "INPUT",
        "LABEL",
        "IMG",
        "SUB",
        "SUP",
        "BR",
        "CODE",
        "KBD",
        "WBR",
        "TT"
      ]
    },
    {
      "matches": "*.wikipedia.org",
      "excludeSelectors": [
        ".mw-editsection",
        ".mw-cite-backlink"
      ],
      "wrapperSuffix": "<br><br>",
      "stayOriginalSelectors": [
        ".chemf",
        ".mwe-math-element",
        "[role=math]",
        ".nowrap"
      ],
      "extraInlineSelectors": [
        ".chemf",
        ".mwe-math-element",
        "[role=math]",
        ".nowrap"
      ]
    },
    {
      "matches": [
        "twitter.com",
        "mobile.twitter.com",
        "tweetdeck.twitter.com"
      ],
      "selectors": [
        '[data-testid="tweetText"]',
        ".tweet-text",
        ".js-quoted-tweet-text",
        "[data-testid='card.layoutSmall.detail'] > div:nth-child(2)",
        "[data-testid='developerBuiltCardContainer'] > div:nth-child(2)",
        "[data-testid='card.layoutLarge.detail'] > div:nth-child(2)"
      ],
      "extraInlineSelectors": [
        '[data-testid="tweetText"] div'
      ]
    },
    {
      "matches": [
        "stackoverflow.com",
        "*.stackexchange.com",
        "superuser.com",
        "askubuntu.com",
        "serverfault.com"
      ],
      "additionalSelectors": [
        ".comment-copy"
      ]
    },
    {
      "matches": "developer.apple.com/documentation/*",
      "selectors": [
        ".container",
        "h3.title"
      ]
    },
    {
      "matches": "news.ycombinator.com",
      "selectors": [
        ".titleline > a",
        ".comment > .commtext",
        ".toptext",
        "a.hn-item-title",
        ".hn-comment-text",
        ".hn-story-title"
      ],
      "excludeSelectors": [
        ".reply"
      ]
    },
    {
      "matches": [
        "*.quora.com",
        "quora.com"
      ],
      "additionalSelectors": [
        ".puppeteer_test_question_title",
        ".puppeteer_test_answer_content",
        ".q-text"
      ],
      "globalStyles": {
        ".qu-truncateLines--3": "-webkit-line-clamp: unset;"
      }
    },
    {
      "matches": [
        "old.reddit.com/*/.compact",
        "old.reddit.com/.compact",
        "www.reddit.com/*/.compact",
        "www.reddit.com/.compact"
      ],
      "selectors": [
        ".title > a",
        ".usertext-body"
      ],
      "detectParagraphLanguage": true
    },
    {
      "matches": "old.reddit.com",
      "selectors": [
        "p.title > a",
        "[role=main] .md-container"
      ],
      "detectParagraphLanguage": true
    },
    {
      "matches": "www.reddit.com",
      "selectors": [
        "h1",
        ".PostHeader__post-title-line",
        "[data-click-id=body] h3",
        "[data-click-id=background] h3",
        "[data-testid=comment]",
        "[data-adclicklocation=media]",
        ".PostContent",
        ".Comment__body",
        "faceplate-batch .md"
      ],
      "detectParagraphLanguage": true
    },
    {
      "matches": "www.reuters.com/",
      "excludeSelectors": [
        "header"
      ]
    },
    {
      "matches": "github.com",
      "selectors": [
        ".markdown-title",
        ".markdown-body",
        ".Layout-sidebar p"
      ],
      "excludeSelectors": [
        ".css-truncate",
        "[data-test-selector='commit-tease-commit-message']",
        "div.blob-wrapper-embedded"
      ],
      "detectParagraphLanguage": true
    },
    {
      "matches": "www.facebook.com",
      "selectors": [
        "div[dir=auto][style]",
        "div[dir=auto][class]",
        "span[lang]"
      ],
      "excludeSelectors": [
        "[role=button]"
      ],
      "translationClasses": "immersive-translate-text",
      "detectParagraphLanguage": true
    },
    {
      "matches": "m.youtube.com",
      "selectors": [
        ".comment-text"
      ],
      "atomicBlockSelectors": [
        ".comment-text"
      ],
      "globalStyles": {
        ".comment-text": "max-height:unset;"
      }
    },
    {
      "matches": "www.youtube.com",
      "selectors": [
        "yt-formatted-string[slot=content].ytd-comment-renderer",
        "yt-formatted-string.ytd-video-renderer",
        "h1 > yt-formatted-string.ytd-watch-metadata",
        "yt-formatted-string#video-title",
        "span#video-title"
      ],
      "wrapperPrefix": "<br>",
      "wrapperSuffix": "<br>",
      "globalStyles": {
        "ytd-expander.ytd-comment-renderer": "--ytd-expander-max-lines: 1000;",
        "h1.ytd-watch-metadata": "-webkit-line-clamp: unset;max-height: unset;",
        "yt-formatted-string#video-title": "-webkit-line-clamp: unset;max-height: unset;",
        "#video-title": "-webkit-line-clamp: unset;max-height: unset;"
      },
      "urlChangeDelay": 2e3,
      "atomicBlockSelectors": [
        "yt-formatted-string[slot=content].ytd-comment-renderer",
        "h1 > yt-formatted-string.ytd-watch-metadata",
        "yt-formatted-string#video-title",
        "span#video-title"
      ],
      "detectParagraphLanguage": true
    },
    {
      "matches": "1paragraph.app",
      "selectors": "#book"
    },
    {
      "matches": [
        "*.substack.com",
        "newsletter.rootsofprogress.org"
      ],
      "selectors": [
        ".post-preview-title",
        ".post-preview-description",
        ".post",
        ".comment-body"
      ],
      "excludeSelectors": [
        ".captioned-button-wrap",
        ".subscription-widget-wrap",
        ".tweet-header",
        ".tweet-link-bottom",
        ".expanded-link",
        ".meta-subheader"
      ],
      "extraBlockSelectors": [
        ".tweet-link-top",
        ".tweet-link-bottom",
        ".expanded-link"
      ]
    },
    {
      "matches": [
        "seekingalpha.com/article/*",
        "seekingalpha.com/news/*"
      ],
      "selectors": [
        "[data-test-id=card-container]"
      ],
      "excludeSelectors": [
        "[data-test-id=post-page-meta]",
        "header > div:first-child"
      ]
    },
    {
      "matches": "hn.algolia.com",
      "selectors": [
        ".Story_title > a:first-child",
        ".Story_comment > span"
      ]
    },
    {
      "matches": "read.readwise.io",
      "selectors": [
        'div[class^="_titleRow_"]',
        'div[class^="_description_"]',
        "#document-text-content"
      ],
      "detectParagraphLanguage": true
    },
    {
      "matches": "www.inoreader.com",
      "selectors": [
        ".article_title_link",
        ".article_content"
      ],
      "detectParagraphLanguage": true
    },
    {
      "matches": [
        "scholar.google.com"
      ],
      "wrapperPrefix": "\n",
      "selectors": [
        "h3 a[data-clk]",
        "div.gs_rs"
      ],
      "atomicBlockSelectors": [
        ".gs_rs",
        "h3 a[data-clk]"
      ]
    },
    {
      "matches": "mail.google.com",
      "selectors": [
        "h2[data-thread-perm-id]",
        "span[data-thread-id]",
        "div[data-message-id] div[class='']"
      ],
      "detectParagraphLanguage": true
    },
    {
      "matches": "www.producthunt.com",
      "selectors": [
        "h2",
        "div[class^='styles_htmlText__']",
        "[class^='styles_tagline']",
        "a[href^='/discussions/'].fontWeight-600",
        "button[class^='styles_textButton'] > div > span"
      ],
      "excludeTags": [
        "TITLE",
        "SCRIPT",
        "STYLE",
        "TEXTAREA",
        "SVG",
        "svg",
        "INPUT",
        "LABEL",
        "IMG",
        "SUB",
        "SUP",
        "BR",
        "CODE",
        "KBD",
        "WBR",
        "TT"
      ]
    },
    {
      "matches": "*.gitbook.io",
      "additionalSelectors": [
        "main"
      ],
      "_comment": "https://midjourney.gitbook.io/docs/user-manual"
    },
    {
      "matches": "arxiv.org",
      "additionalSelectors": [
        "h1",
        "blockquote.abstract"
      ]
    },
    {
      "matches": "https://discord.com/channels/*",
      "selectors": [
        "li[id^=chat-messages] div[id^=message-content]",
        "h3[data-text-variant='heading-lg/semibold']"
      ],
      "excludeSelectors": [
        "div[class^='repliedTextContent']"
      ],
      "globalStyles": {
        "div[class^=headerText]": "max-height: unset;",
        "h3[data-text-variant='heading-lg/semibold']": "-webkit-line-clamp: none;"
      },
      "detectParagraphLanguage": true,
      "wrapperPrefix": "<br>",
      "wrapperSuffix": "<br><br>"
    },
    {
      "matches": "web.telegram.org/z/*",
      "selectors": [
        ".text-content"
      ],
      "detectParagraphLanguage": true
    },
    {
      "matches": [
        "web.telegram.org/k/*",
        "web.telegram.org/k/"
      ],
      "selectors": [
        ".message"
      ],
      "detectParagraphLanguage": true
    },
    {
      "matches": "gist.github.com",
      "selectors": [
        ".markdown-body",
        ".readme"
      ],
      "detectParagraphLanguage": true
    },
    {
      "matches": "lobste.rs",
      "selectors": [
        ".u-repost-of",
        ".comment_text"
      ]
    },
    {
      "matches": "*.slack.com",
      "selectors": [
        ".p-rich_text_section"
      ],
      "detectParagraphLanguage": true
    },
    {
      "matches": "1paragraph.app",
      "additionalSelectors": [
        "#book"
      ]
    },
    {
      "matches": "www.google.*/search*",
      "selectors": [
        "h2",
        "a h3",
        "table h3",
        "table h3 + div",
        "div[data-content-feature='1'] > div",
        "a [aria-level='3']",
        "a [aria-level='3'] + div",
        ".Uroaid",
        "div[style='-webkit-line-clamp:2']",
        "div[style='-webkit-line-clamp: unset;max-height: unset;]"
      ],
      "detectParagraphLanguage": true,
      "wrapperSuffix": "",
      "globalStyles": {
        "div[data-content-feature='1'] > div": "-webkit-line-clamp: unset;max-height: unset;",
        "a h3 + div": "position: relative;",
        "div[style='-webkit-line-clamp:2']": "-webkit-line-clamp: unset;max-height: unset;"
      },
      "extraBlockSelectors": [
        ".MUFPAc"
      ]
    },
    {
      "matches": "lowendtalk.com",
      "selectors": [
        "[role=heading]",
        "h1",
        ".userContent"
      ]
    },
    {
      "matches": "www.linkedin.com/jobs/*",
      "selectors": [
        "#job-details > span"
      ]
    },
    {
      "matches": "www.linkedin.com",
      "addtionalSelectors": [
        "span.break-words > span > span[dir=ltr]"
      ]
    },
    {
      "matches": "www.indiehackers.com",
      "selectors": [
        ".content",
        "h1",
        ".feed-item__title-link"
      ]
    },
    {
      "matches": "libreddit.de",
      "selectors": [
        "h2.post_title",
        ".comment_body > .md"
      ]
    },
    {
      "matches": [
        "notion.site",
        "www.notion.so"
      ],
      "selectors": [
        "div[data-block-id]"
      ]
    },
    {
      "matches": "www.newyorker.com",
      "additionalSelectors": [
        "h1",
        "[data-testid=SummaryItemHed]"
      ]
    },
    {
      "matches": "start.me",
      "selectors": [
        ".rss-article__title",
        ".rss-articles-list__article-link",
        ".rss-showcase__title",
        ".rss-showcase__text"
      ]
    },
    {
      "matches": "www.scmp.com",
      "additionalSelectors": [
        ".info__subHeadline",
        ".section-content h2"
      ]
    },
    {
      "matches": "www.lesswrong.com",
      "extraBlockSelectors": [
        "span.commentOnSelection"
      ]
    },
    {
      "matches": [
        "mastodon.social",
        "mastodon.online",
        "kolektiva.social",
        "indieweb.social",
        "mastodon.world",
        "infosec.exchange"
      ],
      "selectorMatches": [
        "div#mastodon"
      ],
      "selectors": [
        "div.status__content__text"
      ],
      "detectLanguage": true
    },
    {
      "matches": "www.cnbc.com",
      "additionalSelectors": [
        "div.RenderKeyPoints-list"
      ]
    },
    {
      "matches": "app.daily.dev",
      "selectors": [
        "h1",
        ".typo-body",
        "article h3",
        "[class^=markdown_markdown]"
      ],
      "globalStyles": {
        ".line-clamp-3": "-webkit-line-clamp: unset"
      }
    },
    {
      "matches": "www.aljazeera.com",
      "addtionalSelectors": [
        "h1",
        ".article__subhead"
      ]
    },
    {
      "matches": [
        "*.pornhub.com",
        "pornhub.com"
      ],
      "selectors": [
        ".title >a",
        ".title > span",
        ".thumbnailTitle",
        ".commentMessage > span"
      ],
      "detectParagraphLanguage": true,
      "wrapperPrefix": "\n\n",
      "wrapperSuffix": "\n",
      "globalStyles": {
        ".title": "height: unset; max-height: unset;"
      }
    },
    {
      "matches": [
        "weibo.com"
      ],
      "selectors": [
        "div[class^='detail_wbtext']"
      ]
    },
    {
      "matches": [
        "medium.com",
        "*.medium.com"
      ],
      "selectorMatches": [
        "meta[property='al:ios:url'][content^='medium://']"
      ],
      "urlChangeDelay": 2e3,
      "selectors": [
        "article section",
        "h2",
        "[aria-hidden='false'] pre",
        "article p"
      ],
      "excludeSelectors": [
        "[aria-label='Post Preview Reading Time']"
      ],
      "globalStyles": {
        "h2": "-webkit-line-clamp: unset;max-height:unset;",
        "article p": "-webkit-line-clamp: unset;max-height:unset;"
      }
    },
    {
      "selectorMatches": [
        "meta[property='og:site_name'][content='Nitter']"
      ],
      "selectors": [
        ".tweet-content",
        ".quote-text"
      ]
    },
    {
      "matches": "*.fandom.com",
      "additionalSelectors": [
        ".mcf-card-article__title"
      ]
    },
    {
      "matches": [
        "www.washingtonpost.com"
      ],
      "additionalSelectors": [
        "[data-qa='article-body']"
      ]
    },
    {
      "matches": "www.economist.com",
      "extraInlineSelectors": "span[data-caps='initial']"
    },
    {
      "matches": "www.healthline.com",
      "excludeSelectors": ".icon-hl-trusted-source-after"
    },
    {
      "matches": "www.amazon.com",
      "selectors": [
        "h1",
        "h2 > a > span",
        "[data-a-expander-name='book_description_expander'] > div",
        "[data-feature-name='editorialReviews']",
        '[data-a-expander-name="review_text_read_more"] > div > span',
        '[data-feature-name="featurebullets"]',
        '[data-feature-name="aplus"'
      ],
      "excludeBlockSelectors": [
        "div.reviewText > span"
      ],
      "globalStyles": {
        ".s-line-clamp-2": "-webkit-line-clamp: unset;max-height: unset;",
        "[data-a-expander-name='review_text_read_more']": " max-height: unset;"
      }
    },
    {
      "matches": "www.bloomberg.com",
      "urlChangeDelay": 2e3
    },
    {
      "matches": "xueshu.baidu.com",
      "globalStyles": {
        ".abstract_wr": "height: unset; overflow: visible; max-height:unset;"
      }
    },
    {
      "matches": "www.sciencedirect.com",
      "urlChangeDelay": 2e3
    },
    {
      "matches": "www.thehighestofthemountains.com",
      "extraBlockSelectors": "div"
    },
    {
      "matches": "telegra.ph",
      "normalizeBody": "div.ql-editor[contenteditable='false']"
    },
    {
      "matches": [
        "*.annas-archive.org",
        "annas-archive.org"
      ],
      "selectors": [
        "div[class='truncate text-xl font-bold']",
        "div[class='truncate text-sm']"
      ],
      "globalStyles": {
        "div[id^='link-index-']": "height: unset; max-height: unset;"
      },
      "normalizeBody": "body"
    }
  ]
};

// utils/array.ts
function arrayOrGenericToArray(arrayOrGeneric) {
  if (Array.isArray(arrayOrGeneric)) {
    return arrayOrGeneric;
  } else if (arrayOrGeneric) {
    return [arrayOrGeneric];
  } else {
    return [];
  }
}
function addToUniqueArray(item, array) {
  if (!array) {
    return [item];
  }
  if (!Array.isArray(array)) {
    array = [array];
  }
  return Array.from(/* @__PURE__ */ new Set([...array, item]));
}
function removeFromArray(item, array) {
  if (!array) {
    return [];
  }
  if (!Array.isArray(item)) {
    item = [item];
  }
  if (!Array.isArray(array)) {
    array = [array];
  }
  return array.filter((i4) => !item.includes(i4));
}

// utils/merge_rule.ts
function mergeRule(generalRule, rule) {
  const arrayKeys = [];
  const allRuleKeys = Object.keys(
    generalRule
  );
  for (const key of allRuleKeys) {
    const value = generalRule[key];
    if (Array.isArray(value)) {
      arrayKeys.push(key);
    }
  }
  const finalRule = generalRule;
  const ruleKeys = Object.keys(rule);
  ruleKeys.forEach((key) => {
    const value = rule[key];
    if (value !== void 0) {
      if (!arrayKeys.includes(key)) {
        finalRule[key] = value;
      } else {
        if (key.startsWith("additional")) {
          const userValue = arrayOrGenericToArray(value);
          finalRule[key] = Array.from(
            /* @__PURE__ */ new Set([...finalRule[key], ...userValue])
          );
        } else {
          finalRule[key] = arrayOrGenericToArray(value);
        }
      }
    }
  });
  return finalRule;
}

// config.ts
function getEnvUserConfig() {
  if (env.PROD === "1") {
    return {};
  }
  const defaultUserConfig = {};
  if (env.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID && env.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY) {
    const tencentAuthConfig = {
      secretId: env.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,
      secretKey: env.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY
    };
    defaultUserConfig.translationServices = {};
    defaultUserConfig.translationServices.tencent = tencentAuthConfig;
  }
  if (env.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID && env.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY) {
    const baiduAuthConfig = {
      appid: env.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,
      key: env.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY
    };
    if (!defaultUserConfig.translationServices) {
      defaultUserConfig.translationServices = {};
    }
    defaultUserConfig.translationServices.baidu = baiduAuthConfig;
  }
  if (env.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN) {
    const caiyunAuthConfig = {
      token: env.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN
    };
    if (!defaultUserConfig.translationServices) {
      defaultUserConfig.translationServices = {};
    }
    defaultUserConfig.translationServices.caiyun = caiyunAuthConfig;
  }
  if (env.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY) {
    const openlAuthConfig = {
      apikey: env.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY
    };
    if (!defaultUserConfig.translationServices) {
      defaultUserConfig.translationServices = {};
    }
    defaultUserConfig.translationServices.openl = openlAuthConfig;
  }
  if (env.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID && env.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET) {
    const youdaoAuthConfig = {
      appId: env.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,
      appSecret: env.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET
    };
    if (!defaultUserConfig.translationServices) {
      defaultUserConfig.translationServices = {};
    }
    defaultUserConfig.translationServices.youdao = youdaoAuthConfig;
  }
  if (env.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID && env.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY) {
    const volcAuthConfig = {
      accessKeyId: env.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,
      secretAccessKey: env.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY
    };
    if (!defaultUserConfig.translationServices) {
      defaultUserConfig.translationServices = {};
    }
    defaultUserConfig.translationServices.volc = volcAuthConfig;
  }
  if (env.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY) {
    const deeplAuthConfig = {
      authKey: env.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY
    };
    if (!defaultUserConfig.translationServices) {
      defaultUserConfig.translationServices = {};
    }
    defaultUserConfig.translationServices.deepl = deeplAuthConfig;
  }
  if (env.IMMERSIVE_TRANSLATE_SERVICE) {
    defaultUserConfig.translationService = env.IMMERSIVE_TRANSLATE_SERVICE;
  }
  if (env.DEBUG === "1") {
    defaultUserConfig.debug = true;
    defaultUserConfig.cache = false;
    defaultUserConfig.alpha = true;
  }
  if (env.MOCK === "1") {
    defaultUserConfig.translationService = "mock";
  }
  return defaultUserConfig;
}
async function getConfig() {
  const storageBuildInConfig = await browserAPI.storage.local.get(
    buildinConfigStorageKey
  );
  let finalBuildInConfig = {
    ...buildin_config_default,
    buildinConfigUpdatedAt: env.BUILD_TIME
  };
  if (storageBuildInConfig[buildinConfigStorageKey]) {
    const storageBuildInConfigValue = storageBuildInConfig[buildinConfigStorageKey];
    const storageBuildinConfigUpdatedAt = new Date(
      storageBuildInConfigValue.buildinConfigUpdatedAt
    );
    const buildinConfigUpdatedAt = new Date(
      finalBuildInConfig.buildinConfigUpdatedAt
    );
    if (storageBuildinConfigUpdatedAt > buildinConfigUpdatedAt) {
      finalBuildInConfig = storageBuildInConfigValue;
    }
  }
  const shortcutsFromBrowser = {};
  if (!isMonkey()) {
    const commandResult = await browserAPI.commands.getAll();
    for (const command of commandResult) {
      if (command.name && command.shortcut) {
        shortcutsFromBrowser[command.name] = command.shortcut;
      }
    }
  }
  const defaultConfig = {
    ...finalBuildInConfig,
    "targetLanguage": fallbackLanguage,
    "interfaceLanguage": fallbackLanguage,
    debug: false,
    alpha: false,
    translationUrlPattern: {
      matches: [],
      excludeMatches: []
    },
    translationLanguagePattern: {
      matches: [],
      excludeMatches: []
    },
    translationThemePatterns: {},
    translationParagraphLanguagePattern: {
      matches: [],
      excludeMatches: [],
      selectorMatches: [],
      excludeSelectorMatches: []
    },
    translationBodyAreaPattern: {
      matches: [],
      excludeMatches: [],
      selectorMatches: [],
      excludeSelectorMatches: []
    },
    translationTheme: "none",
    translationService: "google",
    translationArea: "main",
    translationStartMode: "dynamic",
    translationServices: {},
    generalRule: finalBuildInConfig.generalRule,
    translationGeneralConfig: { engine: "google" },
    rules: []
  };
  const envUserConfig = getEnvUserConfig();
  const userConfigObject = await browserAPI.storage.sync.get("userConfig") || {};
  const userConfig = userConfigObject.userConfig || {};
  const globalUserConfig = globalThis.IMMERSIVE_TRANSLATE_CONFIG || {};
  const mergedUserConfig = Object.assign(
    {},
    globalUserConfig,
    envUserConfig,
    userConfig
  );
  const finalConfig = Object.assign(defaultConfig, finalBuildInConfig);
  const configKeys = Object.keys(finalConfig);
  const assignKeys = [
    "translationUrlPattern",
    "translationLanguagePattern",
    "translationBodyAreaPattern",
    "translationParagraphLanguagePattern",
    "translationThemePatterns",
    "translationGeneralConfig",
    "shortcuts"
  ];
  for (const key of configKeys) {
    const configKey = key;
    if (configKey === "generalRule") {
      if (typeof mergedUserConfig[configKey] === "object") {
        finalConfig[configKey] = mergeRule(
          defaultConfig[configKey],
          mergedUserConfig[configKey]
        );
      }
    } else if (configKey === "translationServices") {
      const userConfigValue = mergedUserConfig[configKey] || {};
      const buildInConfigValue = finalBuildInConfig[configKey] || {};
      const buildInConfigKeys = Object.keys(buildInConfigValue);
      const userConfigKeys = Object.keys(userConfigValue);
      const allUniqueKeys = [
        .../* @__PURE__ */ new Set([...buildInConfigKeys, ...userConfigKeys])
      ];
      const finalConfigValue = {};
      for (const key2 of allUniqueKeys) {
        finalConfigValue[key2] = {
          ...buildInConfigValue[key2],
          ...userConfigValue[key2]
        };
      }
      finalConfig[configKey] = finalConfigValue;
    } else if (typeof mergedUserConfig[configKey] !== "string" && typeof mergedUserConfig[configKey] !== "boolean" && typeof mergedUserConfig[configKey] !== "number" && assignKeys.includes(configKey)) {
      if (mergedUserConfig[configKey]) {
        finalConfig[configKey] = Object.assign(
          finalConfig[configKey],
          mergedUserConfig[configKey]
        );
      }
      if (configKey === "shortcuts") {
        finalConfig[configKey] = {
          ...finalConfig[configKey],
          ...shortcutsFromBrowser
        };
      }
    } else if (configKey === "rules") {
      if (Array.isArray(mergedUserConfig[configKey])) {
        finalConfig[configKey] = [
          ...mergedUserConfig[configKey],
          ...finalConfig[configKey]
        ];
      }
      if (env.PROD === "0") {
        if (env.DEV_RULES) {
          const devRules = JSON.parse(env.DEV_RULES);
          finalConfig[configKey] = [
            ...devRules,
            ...finalConfig[configKey]
          ];
        }
      }
    } else {
      if (mergedUserConfig[configKey] !== void 0) {
        finalConfig[configKey] = mergedUserConfig[configKey];
      }
    }
  }
  finalConfig.donateUrl = finalBuildInConfig.donateUrl;
  finalConfig.minVersion = finalBuildInConfig.minVersion;
  finalConfig.feedbackUrl = finalBuildInConfig.feedbackUrl;
  return finalConfig;
}

// utils/format_language.ts
function formatLanguage(langCode) {
  if (typeof langCode !== "string")
    return "auto";
  if (langCode === "zh" || langCode === "zh-Hans") {
    return "zh-CN";
  } else if (langCode === "zh-Hant" || langCode === "zh-HK") {
    return "zh-TW";
  } else if (langCode === "iw") {
    return "he";
  } else if (langCode === "jv") {
    return "jw";
  }
  if (languages.indexOf(langCode) === -1) {
    if (langCode.indexOf("-") !== -1) {
      langCode = langCode.split("-")[0];
      if (languages.indexOf(langCode) === -1) {
        return "auto";
      } else {
        return langCode;
      }
    } else {
      return "auto";
    }
  } else {
    return langCode;
  }
}

// services/util.ts
async function humanReadableSize(bytes) {
  const thresh = 1024;
  if (Math.abs(bytes) < thresh) {
    return bytes + " B";
  }
  const units = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let u4 = -1;
  do {
    bytes /= thresh;
    ++u4;
  } while (Math.abs(bytes) >= thresh && u4 < units.length - 1);
  return bytes.toFixed(1) + " " + units[u4];
}
function splitSentences(sentences, maxLength, maxGroupLength) {
  const tempSentences = splitStentenceWithMaxLength(sentences, maxLength);
  const tempSentenceGroups = [];
  let tempGroup = {
    from: sentences[0].from,
    to: sentences[0].to,
    tempSentences: [],
    url: sentences[0].url
  };
  for (const tempSentence of tempSentences) {
    const length = tempGroup.tempSentences.reduce(
      (acc, cur) => acc + cur.text.length,
      0
    );
    if (length + tempSentence.text.length > maxLength || tempGroup.tempSentences.length >= maxGroupLength) {
      tempSentenceGroups.push(tempGroup);
      tempGroup = {
        from: tempSentence.from,
        to: tempSentence.to,
        tempSentences: [],
        url: tempSentence.url
      };
    }
    if (tempGroup.from !== tempSentence.from || tempGroup.to !== tempSentence.to) {
      if (tempGroup.tempSentences.length > 0) {
        tempSentenceGroups.push(tempGroup);
        tempGroup = {
          from: tempSentence.from,
          to: tempSentence.to,
          tempSentences: [],
          url: tempSentence.url
        };
      } else {
        tempGroup.from = tempSentence.from;
        tempGroup.to = tempSentence.to;
      }
    }
    tempGroup.tempSentences.push(tempSentence);
  }
  if (tempGroup.tempSentences.length > 0) {
    tempSentenceGroups.push(tempGroup);
  }
  return tempSentenceGroups;
}
function splitStentenceWithMaxLength(sentences, maxLength) {
  const allTempSentences = [];
  for (let i4 = 0; i4 < sentences.length; i4++) {
    const currentSentence = sentences[i4];
    const { from, to, text, url } = currentSentence;
    const textArrSplitedByNewLine = text.split(/\r?\n/);
    const currentTempSentences = [];
    let currentPrefix = "";
    for (let j5 = 0; j5 < textArrSplitedByNewLine.length; j5++) {
      const currentText = textArrSplitedByNewLine[j5];
      if (currentText === "") {
        if (currentTempSentences.length > 0) {
          if (j5 < textArrSplitedByNewLine.length - 1) {
            currentTempSentences[currentTempSentences.length - 1].suffix += "\n";
          }
        } else {
          currentPrefix += "\n";
        }
        continue;
      } else {
        if (currentText.length > maxLength) {
          const tempSplitedSentences = [];
          splitSentence(currentText, maxLength, tempSplitedSentences);
          for (let k5 = 0; k5 < tempSplitedSentences.length; k5++) {
            const tempSentence = tempSplitedSentences[k5];
            const { text: text2, prefix, suffix } = tempSentence;
            currentTempSentences.push({
              from,
              to,
              text: text2,
              prefix,
              suffix,
              index: i4,
              url
            });
          }
        } else {
          currentTempSentences.push({
            text: currentText,
            prefix: currentPrefix,
            suffix: "",
            from,
            to,
            index: i4,
            url
          });
        }
      }
      if (currentTempSentences.length > 0 && j5 < textArrSplitedByNewLine.length - 1) {
        currentTempSentences[currentTempSentences.length - 1].suffix += "\n";
      }
    }
    allTempSentences.push(...currentTempSentences);
  }
  return allTempSentences;
}
function isSameTargetLanguage(sourceLanguage, targetLanguage) {
  const finalSourceLanguage = formatLanguage(sourceLanguage);
  const finalTargetLanguage = formatLanguage(targetLanguage);
  let isSame = finalSourceLanguage === finalTargetLanguage;
  if (isSame) {
    return true;
  }
  isSame = finalSourceLanguage.startsWith("zh") && finalTargetLanguage.startsWith("zh");
  return isSame;
}
function splitSentence(text, maxLength, sentences) {
  const boundaries = [".", "?", "!", "\u3002", "\uFF1F", "\uFF01"];
  const boundaryIndex = boundaries.reduce((acc, boundary) => {
    const index = text.lastIndexOf(boundary, maxLength);
    return index > acc ? index : acc;
  }, -1);
  if (boundaryIndex === -1) {
    sentences.push({
      text: text.slice(0, maxLength),
      prefix: "",
      suffix: ""
    });
    if (text.length > maxLength) {
      splitSentence(text.slice(maxLength), maxLength, sentences);
    }
  } else {
    const theText = text.slice(0, boundaryIndex + 1);
    if (theText.startsWith(" ")) {
      sentences.push({
        text: theText.slice(1),
        prefix: " ",
        suffix: ""
      });
    } else {
      sentences.push({
        text: theText,
        prefix: "",
        suffix: ""
      });
    }
    if (boundaryIndex + 1 < text.length) {
      splitSentence(text.slice(boundaryIndex + 1), maxLength, sentences);
    }
  }
  return sentences;
}

// errors.ts
var CommonError = class extends Error {
  constructor(name, message, details) {
    super(message);
    this.name = name;
    if (details) {
      this.details = details;
    }
  }
};

// browser/request.ts
async function request(options) {
  if (options.body) {
  }
  let { url, responseType, ...fetchOptions } = options;
  if (!responseType) {
    responseType = "json";
  }
  fetchOptions = {
    mode: "cors",
    ...fetchOptions
  };
  const fetchFn = options.fetchPolyfill || fetch;
  const response = await fetchFn(url, fetchOptions);
  if (response.ok && response.status >= 200 && response.status < 400) {
    if (responseType === "json") {
      const data = await response.json();
      return data;
    } else if (responseType === "text") {
      const data = await response.text();
      return data;
    } else if (responseType === "raw") {
      const data = await response.text();
      const responseHeaders = Object.fromEntries([
        ...response.headers.entries()
      ]);
      let finalUrl = response.url;
      if (!finalUrl) {
        if (response.headers.get("X-Final-URL")) {
          finalUrl = response.headers.get("X-Final-URL");
        } else {
          finalUrl = url;
        }
      }
      const result = {
        body: data,
        headers: responseHeaders,
        status: response.status,
        statusText: response.statusText,
        url: finalUrl
      };
      return result;
    }
  } else {
    let details;
    try {
      details = await response.text();
    } catch (_e3) {
      log_default.error("parse response failed", _e3);
    }
    throw new CommonError(
      "fetchError",
      response.status + ": " + response.statusText || "",
      details
    );
  }
}

// utils/md5.js
function safeAdd(x6, y4) {
  var lsw = (x6 & 65535) + (y4 & 65535);
  var msw = (x6 >> 16) + (y4 >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 65535;
}
function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
function md5cmn(q5, a5, b5, x6, s6, t5) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a5, q5), safeAdd(x6, t5)), s6), b5);
}
function md5ff(a5, b5, c4, d4, x6, s6, t5) {
  return md5cmn(b5 & c4 | ~b5 & d4, a5, b5, x6, s6, t5);
}
function md5gg(a5, b5, c4, d4, x6, s6, t5) {
  return md5cmn(b5 & d4 | c4 & ~d4, a5, b5, x6, s6, t5);
}
function md5hh(a5, b5, c4, d4, x6, s6, t5) {
  return md5cmn(b5 ^ c4 ^ d4, a5, b5, x6, s6, t5);
}
function md5ii(a5, b5, c4, d4, x6, s6, t5) {
  return md5cmn(c4 ^ (b5 | ~d4), a5, b5, x6, s6, t5);
}
function binlMD5(x6, len) {
  x6[len >> 5] |= 128 << len % 32;
  x6[(len + 64 >>> 9 << 4) + 14] = len;
  var i4;
  var olda;
  var oldb;
  var oldc;
  var oldd;
  var a5 = 1732584193;
  var b5 = -271733879;
  var c4 = -1732584194;
  var d4 = 271733878;
  for (i4 = 0; i4 < x6.length; i4 += 16) {
    olda = a5;
    oldb = b5;
    oldc = c4;
    oldd = d4;
    a5 = md5ff(a5, b5, c4, d4, x6[i4], 7, -680876936);
    d4 = md5ff(d4, a5, b5, c4, x6[i4 + 1], 12, -389564586);
    c4 = md5ff(c4, d4, a5, b5, x6[i4 + 2], 17, 606105819);
    b5 = md5ff(b5, c4, d4, a5, x6[i4 + 3], 22, -1044525330);
    a5 = md5ff(a5, b5, c4, d4, x6[i4 + 4], 7, -176418897);
    d4 = md5ff(d4, a5, b5, c4, x6[i4 + 5], 12, 1200080426);
    c4 = md5ff(c4, d4, a5, b5, x6[i4 + 6], 17, -1473231341);
    b5 = md5ff(b5, c4, d4, a5, x6[i4 + 7], 22, -45705983);
    a5 = md5ff(a5, b5, c4, d4, x6[i4 + 8], 7, 1770035416);
    d4 = md5ff(d4, a5, b5, c4, x6[i4 + 9], 12, -1958414417);
    c4 = md5ff(c4, d4, a5, b5, x6[i4 + 10], 17, -42063);
    b5 = md5ff(b5, c4, d4, a5, x6[i4 + 11], 22, -1990404162);
    a5 = md5ff(a5, b5, c4, d4, x6[i4 + 12], 7, 1804603682);
    d4 = md5ff(d4, a5, b5, c4, x6[i4 + 13], 12, -40341101);
    c4 = md5ff(c4, d4, a5, b5, x6[i4 + 14], 17, -1502002290);
    b5 = md5ff(b5, c4, d4, a5, x6[i4 + 15], 22, 1236535329);
    a5 = md5gg(a5, b5, c4, d4, x6[i4 + 1], 5, -165796510);
    d4 = md5gg(d4, a5, b5, c4, x6[i4 + 6], 9, -1069501632);
    c4 = md5gg(c4, d4, a5, b5, x6[i4 + 11], 14, 643717713);
    b5 = md5gg(b5, c4, d4, a5, x6[i4], 20, -373897302);
    a5 = md5gg(a5, b5, c4, d4, x6[i4 + 5], 5, -701558691);
    d4 = md5gg(d4, a5, b5, c4, x6[i4 + 10], 9, 38016083);
    c4 = md5gg(c4, d4, a5, b5, x6[i4 + 15], 14, -660478335);
    b5 = md5gg(b5, c4, d4, a5, x6[i4 + 4], 20, -405537848);
    a5 = md5gg(a5, b5, c4, d4, x6[i4 + 9], 5, 568446438);
    d4 = md5gg(d4, a5, b5, c4, x6[i4 + 14], 9, -1019803690);
    c4 = md5gg(c4, d4, a5, b5, x6[i4 + 3], 14, -187363961);
    b5 = md5gg(b5, c4, d4, a5, x6[i4 + 8], 20, 1163531501);
    a5 = md5gg(a5, b5, c4, d4, x6[i4 + 13], 5, -1444681467);
    d4 = md5gg(d4, a5, b5, c4, x6[i4 + 2], 9, -51403784);
    c4 = md5gg(c4, d4, a5, b5, x6[i4 + 7], 14, 1735328473);
    b5 = md5gg(b5, c4, d4, a5, x6[i4 + 12], 20, -1926607734);
    a5 = md5hh(a5, b5, c4, d4, x6[i4 + 5], 4, -378558);
    d4 = md5hh(d4, a5, b5, c4, x6[i4 + 8], 11, -2022574463);
    c4 = md5hh(c4, d4, a5, b5, x6[i4 + 11], 16, 1839030562);
    b5 = md5hh(b5, c4, d4, a5, x6[i4 + 14], 23, -35309556);
    a5 = md5hh(a5, b5, c4, d4, x6[i4 + 1], 4, -1530992060);
    d4 = md5hh(d4, a5, b5, c4, x6[i4 + 4], 11, 1272893353);
    c4 = md5hh(c4, d4, a5, b5, x6[i4 + 7], 16, -155497632);
    b5 = md5hh(b5, c4, d4, a5, x6[i4 + 10], 23, -1094730640);
    a5 = md5hh(a5, b5, c4, d4, x6[i4 + 13], 4, 681279174);
    d4 = md5hh(d4, a5, b5, c4, x6[i4], 11, -358537222);
    c4 = md5hh(c4, d4, a5, b5, x6[i4 + 3], 16, -722521979);
    b5 = md5hh(b5, c4, d4, a5, x6[i4 + 6], 23, 76029189);
    a5 = md5hh(a5, b5, c4, d4, x6[i4 + 9], 4, -640364487);
    d4 = md5hh(d4, a5, b5, c4, x6[i4 + 12], 11, -421815835);
    c4 = md5hh(c4, d4, a5, b5, x6[i4 + 15], 16, 530742520);
    b5 = md5hh(b5, c4, d4, a5, x6[i4 + 2], 23, -995338651);
    a5 = md5ii(a5, b5, c4, d4, x6[i4], 6, -198630844);
    d4 = md5ii(d4, a5, b5, c4, x6[i4 + 7], 10, 1126891415);
    c4 = md5ii(c4, d4, a5, b5, x6[i4 + 14], 15, -1416354905);
    b5 = md5ii(b5, c4, d4, a5, x6[i4 + 5], 21, -57434055);
    a5 = md5ii(a5, b5, c4, d4, x6[i4 + 12], 6, 1700485571);
    d4 = md5ii(d4, a5, b5, c4, x6[i4 + 3], 10, -1894986606);
    c4 = md5ii(c4, d4, a5, b5, x6[i4 + 10], 15, -1051523);
    b5 = md5ii(b5, c4, d4, a5, x6[i4 + 1], 21, -2054922799);
    a5 = md5ii(a5, b5, c4, d4, x6[i4 + 8], 6, 1873313359);
    d4 = md5ii(d4, a5, b5, c4, x6[i4 + 15], 10, -30611744);
    c4 = md5ii(c4, d4, a5, b5, x6[i4 + 6], 15, -1560198380);
    b5 = md5ii(b5, c4, d4, a5, x6[i4 + 13], 21, 1309151649);
    a5 = md5ii(a5, b5, c4, d4, x6[i4 + 4], 6, -145523070);
    d4 = md5ii(d4, a5, b5, c4, x6[i4 + 11], 10, -1120210379);
    c4 = md5ii(c4, d4, a5, b5, x6[i4 + 2], 15, 718787259);
    b5 = md5ii(b5, c4, d4, a5, x6[i4 + 9], 21, -343485551);
    a5 = safeAdd(a5, olda);
    b5 = safeAdd(b5, oldb);
    c4 = safeAdd(c4, oldc);
    d4 = safeAdd(d4, oldd);
  }
  return [a5, b5, c4, d4];
}
function binl2rstr(input) {
  var i4;
  var output = "";
  var length32 = input.length * 32;
  for (i4 = 0; i4 < length32; i4 += 8) {
    output += String.fromCharCode(input[i4 >> 5] >>> i4 % 32 & 255);
  }
  return output;
}
function rstr2binl(input) {
  var i4;
  var output = [];
  output[(input.length >> 2) - 1] = void 0;
  for (i4 = 0; i4 < output.length; i4 += 1) {
    output[i4] = 0;
  }
  var length8 = input.length * 8;
  for (i4 = 0; i4 < length8; i4 += 8) {
    output[i4 >> 5] |= (input.charCodeAt(i4 / 8) & 255) << i4 % 32;
  }
  return output;
}
function rstrMD5(s6) {
  return binl2rstr(binlMD5(rstr2binl(s6), s6.length * 8));
}
function rstrHMACMD5(key, data) {
  var i4;
  var bkey = rstr2binl(key);
  var ipad = [];
  var opad = [];
  var hash;
  ipad[15] = opad[15] = void 0;
  if (bkey.length > 16) {
    bkey = binlMD5(bkey, key.length * 8);
  }
  for (i4 = 0; i4 < 16; i4 += 1) {
    ipad[i4] = bkey[i4] ^ 909522486;
    opad[i4] = bkey[i4] ^ 1549556828;
  }
  hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
  return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
}
function rstr2hex(input) {
  var hexTab = "0123456789abcdef";
  var output = "";
  var x6;
  var i4;
  for (i4 = 0; i4 < input.length; i4 += 1) {
    x6 = input.charCodeAt(i4);
    output += hexTab.charAt(x6 >>> 4 & 15) + hexTab.charAt(x6 & 15);
  }
  return output;
}
function str2rstrUTF8(input) {
  return unescape(encodeURIComponent(input));
}
function rawMD5(s6) {
  return rstrMD5(str2rstrUTF8(s6));
}
function hexMD5(s6) {
  return rstr2hex(rawMD5(s6));
}
function rawHMACMD5(k5, d4) {
  return rstrHMACMD5(str2rstrUTF8(k5), str2rstrUTF8(d4));
}
function hexHMACMD5(k5, d4) {
  return rstr2hex(rawHMACMD5(k5, d4));
}
function md5(string, key, raw) {
  if (!key) {
    if (!raw) {
      return hexMD5(string);
    }
    return rawMD5(string);
  }
  if (!raw) {
    return hexHMACMD5(key, string);
  }
  return rawHMACMD5(key, string);
}

// services/cache.ts
var dbNames = [];
async function openIndexedDB(dbName, _storageName) {
  return await new Promise((resolve, reject) => {
    const name = dbName;
    const version2 = 1;
    const request3 = indexedDB.open(name, version2);
    request3.onsuccess = (_event) => {
      resolve(request3.result);
    };
    request3.onerror = (event) => {
      console.error(
        "onerror: Error opening the database, switching to non-database mode",
        event
      );
      reject();
    };
    request3.onupgradeneeded = (_event) => {
      const db = request3.result;
      const storageName = _storageName ? _storageName : "cache";
      db.createObjectStore(storageName, {
        keyPath: "key"
      });
    };
  });
}
async function setParagraphCache(payload) {
  const storageName = `${brandId}-${payload.service}@${payload.from}->${payload.to}`;
  const result = await addInDB(storageName, payload);
  return result;
}
async function queryParagraphCache(payload) {
  const payload_hash = md5(payload.originalText);
  const storageName = `${brandId}-${payload.service}@${payload.from}->${payload.to}`;
  const result = await queryInDB(storageName, payload_hash);
  return result;
}
async function queryInDB(dbName, origTextHash) {
  const db = await openIndexedDB(dbName);
  return await new Promise((resolve, reject) => {
    if (!db)
      return reject();
    const storageName = "cache";
    const objectStore = db.transaction([storageName], "readonly").objectStore(storageName);
    const request3 = objectStore.get(origTextHash);
    request3.onsuccess = (_event) => {
      db.close();
      const result = request3.result;
      resolve(result);
    };
    request3.onerror = (event) => {
      db.close();
      console.error("queryInDB->onerror:", event);
      reject();
    };
  });
}
async function addInDB(dbName, cacheEntry) {
  const db = await openIndexedDB(dbName);
  const names = await getAllDBNames();
  if (!names.includes(dbName)) {
    await addCacheList(dbName);
  }
  return await new Promise((resolve) => {
    if (!db)
      return resolve(false);
    const storageName = "cache";
    const objectStore = db.transaction([storageName], "readwrite").objectStore(storageName);
    const request3 = objectStore.put(cacheEntry);
    request3.onsuccess = (_event) => {
      db.close();
      resolve(true);
    };
    request3.onerror = (event) => {
      console.error("addInDB->onerror:", event);
      db.close();
      resolve(false);
    };
  });
}
async function addCacheList(dbName) {
  const storageName = "cache_list";
  const db = await openIndexedDB(brandId + "-cacheList", storageName);
  const objectStore = db.transaction([storageName], "readwrite").objectStore(storageName);
  const request3 = objectStore.put({ key: dbName });
  request3.onsuccess = (_event) => {
    db.close();
    dbNames.push(dbName);
  };
  request3.onerror = (event) => {
    db.close();
    console.error(event);
  };
}
async function getAllDBNames() {
  if (dbNames && dbNames.length > 0) {
    return dbNames;
  }
  const db = await openIndexedDB(brandId + "-cacheList", "cache_list");
  dbNames = await new Promise((resolve) => {
    const storageName = "cache_list";
    const objectStore = db.transaction([storageName], "readonly").objectStore(storageName);
    const request3 = objectStore.getAllKeys();
    request3.onsuccess = (_event) => {
      db.close();
      resolve(request3.result);
    };
    request3.onerror = (event) => {
      db.close();
      console.error(event);
      resolve([]);
    };
  });
  return dbNames;
}
async function calculateSize() {
  try {
    const promises = [];
    const dbnames = await getAllDBNames();
    dbnames.forEach((dbName) => {
      promises.push(getDatabaseSize(dbName));
    });
    const results = await Promise.all(promises);
    return humanReadableSize(
      results.reduce((total, size) => total + size, 0)
    );
  } catch (e3) {
    console.error(e3);
    return humanReadableSize(0);
  }
}
async function getDatabaseSize(dbName) {
  const db = await openIndexedDB(dbName);
  const tableNames = [...db.objectStoreNames];
  const tableSizeGetters = tableNames.reduce(
    (acc, tableName) => {
      const tmp = getTableSize(db, tableName);
      acc.push(tmp);
      return acc;
    },
    []
  );
  const sizes = await Promise.all(tableSizeGetters);
  db.close();
  const total = sizes.reduce((acc, val) => acc + val, 0);
  return total;
}
async function getTableSize(db, storageName) {
  return await new Promise((resolve, reject) => {
    if (db == null)
      return reject();
    let size = 0;
    const transaction = db.transaction([storageName]).objectStore(storageName).openCursor();
    transaction.onsuccess = (_event) => {
      const cursor = transaction.result;
      if (cursor) {
        const storedObject = cursor.value;
        const json = JSON.stringify(storedObject);
        size += json.length;
        cursor.continue();
      } else {
        resolve(size);
      }
    };
    transaction.onerror = (err) => reject("error in " + storageName + ": " + err);
  });
}
async function deleteAll() {
  try {
    const dbnames = await getAllDBNames();
    const promises = dbnames.map((dbName) => {
      return deleteDatabase(dbName);
    });
    const results = await Promise.all(promises);
    if (results.every((ok) => ok)) {
      return true;
    }
    return false;
  } catch (e3) {
    console.error("deleteAll error", e3);
    return false;
  }
}
async function deleteDatabase(dbName) {
  return await new Promise((resolve) => {
    const DBDeleteRequest = indexedDB.deleteDatabase(dbName);
    DBDeleteRequest.onsuccess = () => {
      resolve(true);
    };
    DBDeleteRequest.onerror = (err) => {
      resolve(false);
    };
  });
}

// utils/detect_chinese.ts
var chineseRegex = /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g;
var japaneseRegex = /[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g;
var koreanRegex = /[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g;
var punctuationRegex = /(\s+)|([\p{P}\p{S}])/gu;
var regexGroups = [
  ["zh-CN", chineseRegex],
  [
    "ja",
    japaneseRegex
  ],
  ["ko", koreanRegex]
];
function detectChinese(text) {
  if (!text) {
    return "auto";
  }
  let maxCountLang = "auto";
  let currentMaxCount = 0;
  let punctuationMatchesLength = 0;
  const punctuationMatches = text.match(punctuationRegex);
  if (punctuationMatches) {
    punctuationMatchesLength = punctuationMatches.reduce((sum, item) => {
      return sum + item.length;
    }, 0);
  }
  const allLettersLength = text.length - punctuationMatchesLength;
  for (const group of regexGroups) {
    const regex = group[1];
    const lang = group[0];
    const matches = text.match(regex);
    const langLength = matches ? matches.length : 0;
    if (langLength > currentMaxCount) {
      currentMaxCount = langLength;
      maxCountLang = lang;
    }
  }
  if (currentMaxCount * 2.5 / allLettersLength > 0.5) {
    return maxCountLang;
  }
  return "auto";
}

// dom/util.ts
var env2 = getEnv();
var isProd = env2.PROD === "1";
function duplicatedElements(root2, array, rule) {
  const footers = root2.querySelectorAll("footer");
  const allHeaders = root2.querySelectorAll("header");
  const main2 = root2.querySelectorAll("main");
  const headers2 = [];
  for (const header of allHeaders) {
    const isInMain = main2.length > 0 && main2[0].contains(header);
    if (!isInMain) {
      headers2.push(header);
    }
  }
  for (let i4 = 0; i4 < array.length; i4++) {
    const a5 = array[i4].element;
    for (let j5 = i4 + 1; j5 < array.length; j5++) {
      const b5 = array[j5].element;
      if (a5.contains(b5)) {
        array.splice(j5, 1);
        j5--;
      } else if (b5.contains(a5)) {
        array.splice(i4, 1);
        i4--;
        break;
      } else if (a5 === b5) {
        array.splice(j5, 1);
        j5--;
      }
    }
  }
  const finalArray = array.filter((container) => {
    const element = container.element;
    if (container.reserve) {
      return true;
    }
    let isFooter = false;
    let isHeader = false;
    for (const footer of footers) {
      if (element === footer || footer.contains(element)) {
        isFooter = true;
        break;
      }
    }
    if (isFooter) {
      return false;
    }
    for (const header of headers2) {
      if (element.nodeName === "H1") {
        continue;
      }
      const h1Container = header.querySelector("h1");
      if (h1Container && isValidTextByCount(
        h1Container.textContent || "",
        rule.paragraphMinTextCount,
        rule.paragraphMinWordCount
      )) {
        continue;
      }
      if (element === header || header.contains(element)) {
        isHeader = true;
        break;
      }
    }
    if (isHeader) {
      return false;
    }
    return true;
  });
  return finalArray.map((container) => container.element);
}
function getLastHTMLElement(elements) {
  for (let i4 = elements.length - 1; i4 >= 0; i4--) {
    const element = elements[i4].element || elements[i4];
    if (typeof element !== "string") {
      return element;
    }
  }
  return null;
}
function getHTMLElements(elements) {
  const result = [];
  for (let i4 = elements.length - 1; i4 >= 0; i4--) {
    const element = elements[i4].element || elements[i4];
    if (typeof element !== "string") {
      result.push(element);
    }
  }
  return result;
}
function getFirstHTMLElement(elements) {
  for (let i4 = 0; i4 < elements.length; i4++) {
    const element = elements[i4];
    if (typeof element !== "string") {
      return element;
    }
  }
  return null;
}
function getWhitespace(nextNode, isPreWhitespace) {
  if (nextNode && nextNode.nodeType === Node.TEXT_NODE && nextNode.textContent && nextNode.textContent?.length > 0) {
    if (isPreWhitespace) {
      return nextNode.textContent;
    } else {
      return " ";
    }
  } else {
    return null;
  }
}
function getElementsBySelectors(root2, selectors) {
  const elements = [];
  for (const selector of selectors) {
    const nodes = root2.querySelectorAll(selector);
    for (const node of nodes) {
      elements.push(node);
    }
  }
  return elements;
}
function isInlineElementByTreeWalker(element, rule) {
  const filterInlineElement = function(node) {
    if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (isExcludeElement(node, rule, true)) {
          return NodeFilter.FILTER_REJECT;
        }
      }
      return NodeFilter.FILTER_ACCEPT;
    } else {
      return NodeFilter.FILTER_REJECT;
    }
  };
  const treeWalker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_ELEMENT,
    filterInlineElement
  );
  let isInline = true;
  while (treeWalker.nextNode()) {
    const node = treeWalker.currentNode;
    if (node.nodeType === Node.ELEMENT_NODE) {
      const isHasInlineElement = isMarked(
        node,
        sourceInlineElementMarkAttributeName
      );
      if (isHasInlineElement) {
        if (isInline === true) {
          return true;
        } else {
          continue;
        }
      }
      const isBlockElement = !rule.inlineTags.includes(node.nodeName);
      if (isBlockElement) {
        return false;
      }
    }
  }
  return true;
}
function isInlineElement(element, rule) {
  const inlineTags = rule.inlineTags;
  if (element.nodeType === Node.ELEMENT_NODE) {
    if (inlineTags.includes(element.nodeName)) {
      if (isMarked(
        element,
        sourceBlockElementMarkAttributeName
      )) {
        return false;
      }
      if (element.nodeName === "BR") {
        return false;
      }
      if (isMarked(element, sourceInlineElementMarkAttributeName)) {
        return true;
      }
      return isInlineElementByTreeWalker(element, rule);
    } else {
      return isMarked(
        element,
        sourceInlineElementMarkAttributeName
      );
    }
  }
  return false;
}
function isDuplicateElement(element, elements) {
  for (const e3 of elements) {
    if (e3 === element) {
      return true;
    }
  }
  return false;
}
function isMetaElement(element, rule) {
  if (rule.metaTags.includes(element.nodeName)) {
    return true;
  }
  return false;
}
function isExcludeElement(element, rule, includeStayElements) {
  if (!(element.nodeType === Node.ELEMENT_NODE || element.nodeType === Node.TEXT_NODE)) {
    return true;
  }
  const { stayOriginalTags, excludeTags } = rule;
  let finalExcludeTags = [];
  if (includeStayElements && excludeTags && excludeTags.length > 0) {
    finalExcludeTags = excludeTags || [];
  } else {
    finalExcludeTags = excludeTags.filter((tag) => {
      return !stayOriginalTags.includes(tag);
    });
  }
  if (element.nodeType === Node.ELEMENT_NODE && element.isContentEditable) {
    return true;
  }
  if (element.nodeType === Node.ELEMENT_NODE) {
    if (isMarked(element, sourceElementExcludeAttributeName)) {
      return true;
    }
  }
  if (element.nodeType === Node.ELEMENT_NODE && isMarked(
    element,
    specifiedTargetContainerElementAttributeName
  )) {
    return false;
  }
  if (finalExcludeTags.includes(element.nodeName)) {
    return true;
  }
  return false;
}
function isNeedToTranslate(item, minTextCount, minWordCount, ctx) {
  const delimiters = getPlaceholderDelimiters(ctx);
  const stayInOriginalRegex = new RegExp(
    `^${delimiters[0]}(\\d+)${delimiters[1]}$`
  );
  const text = item.text;
  const trimedText = text.trim();
  if (trimedText === "" || trimedText.length === 1 && trimedText.charCodeAt(0) === 8203 || /^\d+(,\d+)*(\.\d+)?$/.test(text)) {
    return false;
  }
  if (trimedText.includes("</style>") || trimedText.includes("< styles>")) {
    return false;
  }
  if (isAtTag(trimedText)) {
    return false;
  }
  if (isUrl(trimedText)) {
    return false;
  }
  if (isHashTag(trimedText)) {
    return false;
  }
  if (stayInOriginalRegex.test(trimedText)) {
    return false;
  }
  return isValidTextByCount(text, minTextCount, minWordCount);
}
function isValidTextByCount(rawText, minTextCount, minWordCount) {
  const text = rawText.trim();
  if (text.length >= minTextCount) {
    return true;
  }
  if (text.split(" ").length >= minWordCount) {
    return true;
  }
  return false;
}
function isUrl(text) {
  if (text && text.includes("://")) {
    try {
      new URL(text);
      return true;
    } catch (_e3) {
      return false;
    }
  } else {
    return false;
  }
}
function isHashTag(text) {
  if (text && text.startsWith("#")) {
    if (text.indexOf(" ") === -1) {
      return true;
    }
  }
  return false;
}
function isAtTag(text) {
  if (text && text.startsWith("@")) {
    if (text.indexOf(" ") === -1) {
      return true;
    }
  }
  return false;
}
function isStockTag(text) {
  if (text && text.startsWith("$")) {
    if (text.indexOf(" ") === -1) {
      return true;
    }
  }
  return false;
}
function isMarked(element, markedAttribute) {
  return isMarkedWith(element, markedAttribute, "1");
}
function isMarkedWith(element, markedAttribute, value) {
  if (isProd) {
    if (!element[elementMarkRootKey]) {
      return false;
    }
    if (element[elementMarkRootKey] && element[elementMarkRootKey][markedAttribute] === value) {
      return true;
    } else {
      return false;
    }
  } else {
    return element.dataset[markedAttribute] === value;
  }
}
function hasMark(element, markedAttribute) {
  if (isProd) {
    if (!element[elementMarkRootKey]) {
      return false;
    }
    if (element[elementMarkRootKey] && element[elementMarkRootKey][markedAttribute]) {
      return true;
    } else {
      return false;
    }
  } else {
    return element.dataset[markedAttribute] !== void 0;
  }
}
function trimText(text) {
  return text.replace(/\s/g, " ");
}
function getMainText(root2) {
  const main2 = root2.querySelector("main");
  let text = "";
  if (main2) {
    text = trimText(main2.innerText || main2.textContent || "");
  }
  if (text.length >= 10) {
    return text;
  }
  const article = root2.querySelectorAll("article");
  if (article.length > 0) {
    for (const a5 of article) {
      text = trimText(a5.innerText || a5.textContent || "");
    }
  }
  if (text.length >= 10) {
    return text;
  }
  text = trimText(root2.innerText || root2.textContent || "");
  return text;
}
function isMatchSelectors(selectors) {
  if (!selectors) {
    return false;
  }
  if (typeof selectors === "string") {
    return document.querySelector(selectors) !== null;
  }
  return selectors.some((selector) => {
    return document.querySelector(selector);
  });
}
function setAttribute(element, name, value) {
  if (!element.isContentEditable) {
    if (!element.dataset[sourceElementEffectAttributeNameForJs]) {
      element.dataset[sourceElementEffectAttributeNameForJs] = "1";
    }
    if (isProd) {
      if (!element[elementMarkRootKey]) {
        element[elementMarkRootKey] = {};
      }
      if (!element[elementMarkRootKey][name]) {
        element[elementMarkRootKey][name] = value;
      }
    } else {
      if (element.dataset[name] !== value) {
        element.dataset[name] = value;
      }
    }
  }
}
function removeAttribute(element, name) {
  if (isProd) {
    if (!element[elementMarkRootKey]) {
      return void 0;
    }
    if (!element[elementMarkRootKey][name]) {
      return void 0;
    }
    delete element[elementMarkRootKey][name];
  } else {
    delete element.dataset[name];
  }
}
function getAttribute(element, name) {
  if (isProd) {
    if (!element[elementMarkRootKey]) {
      return void 0;
    }
    if (!element[elementMarkRootKey][name]) {
      return void 0;
    }
    return element[elementMarkRootKey][name];
  } else {
    return element.dataset[name];
  }
}
function isStayOriginalElement(element, rule) {
  let isStayOriginal = false;
  if (rule.stayOriginalTags.includes(element.nodeName)) {
    isStayOriginal = true;
  } else if (isMarked(element, sourceElementStayOriginalAttributeName)) {
    isStayOriginal = true;
  }
  return isStayOriginal;
}
function isUnknowTag(element, rule) {
  const allKnowTags = rule.allBlockTags.concat(rule.inlineTags).concat(
    rule.excludeTags
  );
  return !allKnowTags.includes(element.nodeName);
}
function getPlaceholderDelimiters(ctx) {
  const { config } = ctx;
  let delimiters = defaultPlaceholderDelimiters;
  if (config.translationServices[ctx.translationService] && config.translationServices[ctx.translationService].placeholderDelimiters) {
    delimiters = config.translationServices[ctx.translationService].placeholderDelimiters;
  }
  return delimiters;
}
function isContainsSelectors(element, selectors) {
  if (!selectors) {
    return false;
  }
  if (!Array.isArray(selectors)) {
    selectors = [selectors];
  }
  for (const selector of selectors) {
    if (element.querySelector(selector)) {
      return true;
    }
  }
  return false;
}
function getTheLastTextNodeParentElement(element) {
  const treeWalker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    (node) => {
      if (node.textContent && node.textContent.trim()) {
        return NodeFilter.FILTER_ACCEPT;
      }
      return NodeFilter.FILTER_REJECT;
    }
  );
  let lastTextNode = null;
  while (treeWalker.nextNode()) {
    lastTextNode = treeWalker.currentNode;
  }
  if (lastTextNode) {
    return lastTextNode.parentElement;
  }
  return null;
}

// dom/mark_containers.ts
function markContainers(containers, rule) {
  const {
    excludeSelectors,
    additionalExcludeSelectors,
    extraInlineSelectors,
    additionalInlineSelectors,
    extraBlockSelectors,
    atomicBlockSelectors,
    atomicBlockTags,
    globalStyles,
    stayOriginalTags,
    stayOriginalSelectors,
    globalAttributes
  } = rule;
  const globalStyleSelectors = Object.keys(globalStyles);
  if (globalStyleSelectors.length > 0) {
    for (const selector of globalStyleSelectors) {
      const elements = getElementsBySelectors(document.body, [selector]);
      for (const element of elements) {
        if (!isMarked(element, sourceElementWithGlobalStyleMarkAttributeName)) {
          setAttribute(
            element,
            sourceElementWithGlobalStyleMarkAttributeName,
            "1"
          );
          const cssText = globalStyles[selector];
          element.style.cssText += cssText;
        }
      }
    }
  }
  const globalAttributesSelectors = Object.keys(globalAttributes);
  if (globalAttributesSelectors.length > 0) {
    for (const selector of globalAttributesSelectors) {
      const attributes = globalAttributes[selector];
      const attributesKeys = Object.keys(attributes);
      const elements = getElementsBySelectors(document.body, [selector]);
      for (const element of elements) {
        for (const key of attributesKeys) {
          const value = attributes[key];
          const currentValue = element.getAttribute(key);
          if (currentValue !== value) {
            if (value === null) {
              element.removeAttribute(key);
            } else {
              element.setAttribute(key, value);
            }
          }
        }
      }
    }
  }
  const allExcludeSelectors = [
    ...excludeSelectors,
    ...additionalExcludeSelectors
  ];
  const allInlineSelectors = [
    ...extraInlineSelectors,
    ...additionalInlineSelectors
  ];
  const allAtomicBlockSelectors = [...atomicBlockSelectors];
  const allAtomicBlockTagsSelectors = atomicBlockTags.map(
    (item) => item.toLowerCase()
  );
  const allBlockSelectos = extraBlockSelectors;
  const excludeElements = getElementsBySelectors(
    document.body,
    allExcludeSelectors
  );
  excludeElements.forEach((element) => {
    if (!isMarked(element, sourceElementExcludeAttributeName)) {
      setAttribute(element, sourceElementExcludeAttributeName, "1");
    }
  });
  let atomicBlockElements = [];
  if (allAtomicBlockSelectors.length > 0) {
    atomicBlockElements = getElementsBySelectors(
      document.body,
      allAtomicBlockSelectors
    ).filter((element) => !isMarked(element, sourceAtomicBlockElementMarkAttributeName));
  }
  if (allAtomicBlockTagsSelectors.length > 0) {
    const stayOriginalTagsHTMLStringArr = stayOriginalTags.reduce(
      (arr, item) => {
        const tagLower = item.toLowerCase();
        arr.push(`<${tagLower}>`, `</${tagLower}>`, `<${tagLower} />`);
        return arr;
      },
      []
    );
    const httpLinkTags = [">http://", ">https://"];
    stayOriginalTagsHTMLStringArr.push(...httpLinkTags);
    const atomicBlockTagsElements = getElementsBySelectors(
      document.body,
      allAtomicBlockTagsSelectors
    ).filter((element) => {
      const isMark = isMarked(
        element,
        sourceAtomicBlockElementMarkAttributeName
      );
      if (isMark) {
        return false;
      } else {
        const htmlString = element.innerHTML;
        const isStayOriginal = stayOriginalTagsHTMLStringArr.some(
          (item) => htmlString.includes(item)
        );
        return !isStayOriginal;
      }
    });
    atomicBlockElements.push(...atomicBlockTagsElements);
  }
  atomicBlockElements.forEach((element) => {
    if (!isMarked(element, sourceAtomicBlockElementMarkAttributeName)) {
      setAttribute(element, sourceAtomicBlockElementMarkAttributeName, "1");
    }
  });
  const extraInlineElements = [];
  if (allInlineSelectors.length > 0) {
    for (const container of containers) {
      extraInlineElements.push(
        ...getElementsBySelectors(container, allInlineSelectors)
      );
    }
  }
  extraInlineElements.forEach((element) => {
    setAttribute(element, sourceInlineElementMarkAttributeName, "1");
  });
  const extraBlockElements = [];
  if (allBlockSelectos.length > 0) {
    for (const container of containers) {
      extraBlockElements.push(
        ...getElementsBySelectors(container, allBlockSelectos)
      );
    }
  }
  extraBlockElements.forEach((element) => {
    setAttribute(element, sourceBlockElementMarkAttributeName, "1");
  });
  const stayOriginalElements = [];
  if (stayOriginalSelectors.length > 0) {
    for (const container of containers) {
      stayOriginalElements.push(
        ...getElementsBySelectors(container, stayOriginalSelectors)
      );
    }
  }
  stayOriginalElements.forEach((element) => {
    setAttribute(element, sourceElementStayOriginalAttributeName, "1");
  });
}

// utils/language_match.ts
function isMatchLanguage(lang, matchPattern) {
  let matches = matchPattern.matches || [];
  if (matches && !Array.isArray(matches)) {
    matches = [matches];
  }
  if (matches.length === 0) {
    return false;
  }
  if (matches.length > 0) {
    if (matches.includes(lang)) {
      return true;
    } else {
      for (const match of matches) {
        if (match.includes("*")) {
          const reg = new RegExp(match);
          if (reg.test(lang)) {
            return true;
          }
        }
      }
    }
  }
  return false;
}

// dom/detect_page_language.ts
async function detectPageLanguage() {
  let lang = "auto";
  if (document.body && document.body.textContent && document.body.textContent.trim()) {
    lang = await detectLanguage({
      text: getMainText(document.body)
    });
  }
  if (lang === "auto" && document.documentElement && document.documentElement.lang) {
    lang = formatLanguage(document.documentElement.lang);
  }
  return lang;
}

// dom/get_containers.ts
function getContainers(root2, ctx) {
  if (!(root2 && root2.textContent && root2.textContent.trim())) {
    return [];
  }
  const { rule, state: { translationArea } } = ctx;
  let contentContainers = [];
  if (translationArea === "body") {
    return [root2];
  }
  if (rule && rule.selectors.length > 0) {
    const containers = rule.selectors.map((selector) => {
      const isMatch = root2.matches(selector);
      let elements = [];
      if (isMatch) {
        elements = [root2];
      } else {
        elements = root2.querySelectorAll(selector);
      }
      for (const element of elements) {
        if (!isMarked(element, specifiedTargetContainerElementAttributeName)) {
          setAttribute(
            element,
            specifiedTargetContainerElementAttributeName,
            "1"
          );
        }
      }
      return Array.from(elements);
    }).flat();
    contentContainers.push(
      ...containers.map((container) => ({
        element: container,
        reserve: true
      }))
    );
  } else {
    if (rule && rule.additionalSelectors.length > 0) {
      const additionalElements = getElementsBySelectors(
        root2,
        rule.additionalSelectors
      );
      for (const element of additionalElements) {
        if (!isMarked(element, specifiedTargetContainerElementAttributeName)) {
          setAttribute(
            element,
            specifiedTargetContainerElementAttributeName,
            "1"
          );
        }
      }
      contentContainers.push(
        ...additionalElements.map((element) => ({
          element,
          reserve: true
        }))
      );
    }
    const articleElements = getElementsBySelectors(root2, ["article"]);
    contentContainers.push(
      ...articleElements.map((element) => ({
        element,
        reserve: true
      }))
    );
    let mains;
    if (contentContainers.length === 0) {
      mains = root2.querySelectorAll("[role=main]");
      if (mains.length === 0) {
        mains = root2.querySelectorAll("main");
      }
      if (mains.length === 0) {
        mains = root2.querySelectorAll(".main");
      }
      if (mains.length > 0) {
        const mainsArray = Array.from(mains);
        contentContainers = contentContainers.concat(
          mainsArray.map((main2) => ({
            element: main2,
            reserve: true
          }))
        );
      }
    }
    const detectedContainers = [];
    const treeFilter = (node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (isExcludeElement(node, ctx.rule, false)) {
          return NodeFilter.FILTER_REJECT;
        }
      }
      if (node.nodeType === Node.TEXT_NODE) {
        const trimedText = node.textContent ? node.textContent.trim() : "";
        if (trimedText.length >= rule.containerMinTextCount) {
          let parentNode = node.parentNode;
          if (parentNode && parentNode.parentNode) {
            parentNode = parentNode.parentNode;
          }
          if (parentNode && parentNode.nodeType === Node.ELEMENT_NODE) {
            if (!detectedContainers.includes(parentNode)) {
              detectedContainers.push(parentNode);
            }
          }
        }
      }
      return NodeFilter.FILTER_ACCEPT;
    };
    const walk = document.createTreeWalker(
      root2,
      NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
      treeFilter
    );
    while (walk.nextNode()) {
    }
    contentContainers.push(
      ...detectedContainers.map((element) => ({
        element,
        reserve: false
      }))
    );
  }
  const finalContainers = duplicatedElements(root2, contentContainers, rule);
  finalContainers.sort(function(a5, b5) {
    return a5.compareDocumentPosition(b5) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
  });
  return finalContainers;
}

// dom/unmount.ts
var cleanQueue = [];
function addToUnmountQueue(fn) {
  cleanQueue.push(fn);
}
function clean() {
  cleanQueue.forEach((fn) => fn());
  cleanQueue = [];
}

// dom/current_language.ts
var currentPageLanguage = "auto";
var currentPageLanguageByClient = "auto";
var currentPageLanguageByRemote = "auto";
function setCurrentPageLanguage(lang) {
  currentPageLanguage = lang;
}
function setCurrentPageLanguageByClient(lang) {
  currentPageLanguageByClient = lang;
}
function getCurrentPageLanguage() {
  if (currentPageLanguageByClient !== "auto") {
    return currentPageLanguageByClient;
  }
  if (currentPageLanguageByRemote !== "auto") {
    return currentPageLanguageByRemote;
  }
  return currentPageLanguage;
}
function getCurrentPageLanguageByClient() {
  return currentPageLanguageByClient;
}

// dom/elements_to_paragraph.ts
function elementsToParagraph(elements, isPreWhitespace, ctx) {
  const variables = [];
  const { rule } = ctx;
  const delimiters = getPlaceholderDelimiters(ctx);
  if (elements.length === 0) {
    return null;
  }
  elements = elements.map(
    (element) => {
      if (element.element) {
        return element;
      } else {
        return {
          element
        };
      }
    }
  );
  let text = "";
  let isHasMeaningfulText = false;
  for (let i4 = 0; i4 < elements.length; i4++) {
    const elementState = elements[i4];
    const element = elementState.element;
    if (typeof element === "string") {
      text += element;
      continue;
    }
    let rawText = "";
    if (isContainsSelectors(element, `[${sourceElementExcludeAttributeName}]`)) {
      rawText = getTextWithExcludeElement(element);
    } else {
      rawText = element.innerText;
    }
    let isStartWithSpace = rawText.startsWith(" ");
    let isEndWithSpace = rawText.endsWith(" ");
    if (element.tagName === "A") {
      isStartWithSpace = true;
      isEndWithSpace = true;
    }
    const isStayOriginal = isStayOriginalElement(element, rule);
    if (rawText === "" || isStayOriginal) {
      if (isStayOriginal) {
        isStartWithSpace = true;
        isEndWithSpace = true;
      }
      const variable = {
        type: "element",
        value: element
      };
      variables.push(variable);
      const index = variables.length - 1;
      const delimiter = `${delimiters[0]}${index}${delimiters[1]}`;
      text += (isStartWithSpace ? " " : "") + delimiter + (isEndWithSpace ? " " : "");
      continue;
    }
    if (isExcludeElement(element, rule, true)) {
      continue;
    } else {
      const finalText = isPreWhitespace ? rawText : rawText.trim().replace(/\n/g, " ");
      if (isUrl(finalText) || isHashTag(finalText) || isAtTag(finalText) || isStockTag(finalText)) {
        const variable = {
          type: "element",
          value: element
        };
        variables.push(variable);
        const index = variables.length - 1;
        const delimiter = `${delimiters[0]}${index}${delimiters[1]}`;
        text += (isStartWithSpace ? " " : "") + delimiter + (isEndWithSpace ? " " : "");
      } else {
        isHasMeaningfulText = true;
        text += (isStartWithSpace ? " " : "") + finalText + (isEndWithSpace ? " " : "");
      }
    }
    if (typeof element !== "string") {
      const whitespace = getWhitespace(
        element.nextSibling,
        isPreWhitespace
      );
      if (whitespace) {
        text += whitespace;
      }
    }
  }
  if (!isHasMeaningfulText) {
    return null;
  }
  let inline = false;
  const wordCount = text.split(" ").length;
  const lineCount = text.split("\n").length;
  if (wordCount <= rule.blockMinWordCount && text.length <= rule.blockMinTextCount && lineCount < 2) {
    inline = true;
  }
  const paragraph = {
    elements: elements.map((element) => element.element),
    text,
    variables,
    inline,
    preWhitespace: isPreWhitespace
  };
  if (isNeedToTranslate(
    paragraph,
    ctx.state.translationArea === "body" ? 2 : rule.paragraphMinTextCount,
    ctx.state.translationArea === "body" ? 1 : rule.paragraphMinWordCount,
    ctx
  )) {
    return paragraph;
  }
  return null;
}
function getTextWithExcludeElement(element) {
  let finalText = "";
  const filterExcludeElement = (node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      if (isMarked(node, sourceElementExcludeAttributeName)) {
        return NodeFilter.FILTER_REJECT;
      } else {
        return NodeFilter.FILTER_ACCEPT;
      }
    } else if (node.nodeType === Node.TEXT_NODE) {
      if (node.textContent && node.textContent.trim() !== "") {
        finalText += node.textContent.replace(/\s+/g, " ");
      }
      return NodeFilter.FILTER_REJECT;
    }
    return NodeFilter.FILTER_ACCEPT;
  };
  const treeWalker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
    filterExcludeElement
  );
  while (treeWalker.nextNode()) {
  }
  return finalText;
}

// dom/get_paragraphs.ts
var paragraphAutoIncreaceId = 1;
var paragraphEntities = /* @__PURE__ */ new Map();
function getParagraphEntities() {
  return paragraphEntities;
}
function getParagraph(id) {
  return paragraphEntities.get(id);
}
function setParagraph(id, paragraph) {
  paragraphEntities.set(id, paragraph);
}
function cleanParagraphs() {
  paragraphEntities.clear();
}
function isMarkedByParagraph(targetElement) {
  if (!isMarked(targetElement, sourceElementMarkAttributeName)) {
    return false;
  }
  if (isMarked(targetElement, sourceElementTranslatedMarkAttributeName)) {
    return true;
  }
  const markId = getAttribute(
    targetElement,
    sourceElementParagraphAttributeName
  );
  if (!markId) {
    return false;
  }
  const paragraphId = parseInt(markId);
  const isExist = paragraphEntities.has(paragraphId);
  if (!isExist) {
    const maybeTargetElement = document.getElementById(
      `${translationTargetElementWrapperClass}-${paragraphId}`
    );
    if (maybeTargetElement) {
      maybeTargetElement.remove();
    }
  }
  return isExist;
}
function addToParagraphs(paragraph, allParagraphs) {
  const newParagraph = {
    ...paragraph,
    id: paragraphAutoIncreaceId++
  };
  newParagraph.elements.forEach((element) => {
    if (element instanceof HTMLElement) {
      setAttribute(element, sourceElementMarkAttributeName, "1");
      setAttribute(
        element,
        sourceElementParagraphAttributeName,
        `${newParagraph.id}`
      );
    }
  });
  allParagraphs.push(newParagraph);
  paragraphEntities.set(newParagraph.id, {
    ...newParagraph,
    state: "Original",
    observers: []
  });
}
async function getParagraphs(_root, containers, ctx) {
  let allParagraphs = [];
  const { targetLanguage, rule, isDetectParagraphLanguage } = ctx;
  for (const container of containers) {
    if (isExcludeElement(container, rule, false)) {
      continue;
    }
    const isPreWhitespaceContainer = isMarked(
      container,
      sourcePreWhitespaceMarkAttributeName
    );
    const inlineElementGroups = [];
    if (isMarked(container, sourceAtomicBlockElementMarkAttributeName)) {
      if (!isMarkedByParagraph(container)) {
        const paragraph = elementsToParagraph(
          [container],
          isPreWhitespaceContainer,
          ctx
        );
        if (paragraph) {
          addToParagraphs(paragraph, allParagraphs);
        }
      }
      continue;
    }
    const filter = (node2) => {
      if (!(node2.nodeType === Node.TEXT_NODE || node2.nodeType === Node.ELEMENT_NODE)) {
        return NodeFilter.FILTER_REJECT;
      }
      if (node2.nodeType === Node.ELEMENT_NODE) {
        const element = node2;
        if (element.isContentEditable) {
          return NodeFilter.FILTER_REJECT;
        }
        if (isMarkedByParagraph(
          node2
        )) {
          return NodeFilter.FILTER_REJECT;
        } else {
          setAttribute(element, sourceElementMarkAttributeName, "1");
        }
        if (isMarked(element, sourceAtomicBlockElementMarkAttributeName)) {
          if (inlineElementGroups.length > 0) {
            const paragraph2 = elementsToParagraph(
              [...inlineElementGroups],
              isPreWhitespaceContainer,
              ctx
            );
            if (paragraph2) {
              addToParagraphs(paragraph2, allParagraphs);
            }
            inlineElementGroups.length = 0;
          }
          inlineElementGroups.push(element);
          const paragraph = elementsToParagraph(
            [...inlineElementGroups],
            isPreWhitespaceContainer,
            ctx
          );
          if (paragraph) {
            addToParagraphs(paragraph, allParagraphs);
          }
          inlineElementGroups.length = 0;
          return NodeFilter.FILTER_REJECT;
        }
      }
      if (isExcludeElement(node2, rule, true)) {
        if ((node2.nodeName === "CODE" || node2.nodeName === "TT") && node2.parentNode?.nodeName === "PRE") {
          return NodeFilter.FILTER_REJECT;
        }
        if (isInlineElement(
          node2,
          rule
        )) {
          handleInlineElement(
            node2,
            inlineElementGroups,
            allParagraphs,
            isPreWhitespaceContainer,
            ctx
          );
          return NodeFilter.FILTER_REJECT;
        } else {
          if (inlineElementGroups.length > 0) {
            const paragraph = elementsToParagraph(
              [...inlineElementGroups],
              isPreWhitespaceContainer,
              ctx
            );
            if (paragraph) {
              addToParagraphs(paragraph, allParagraphs);
            }
            inlineElementGroups.length = 0;
          }
        }
        return NodeFilter.FILTER_REJECT;
      }
      if (node2.nodeName === "PRE") {
        if (node2.classList.contains("code")) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_REJECT;
      }
      if (isInlineElement(
        node2,
        rule
      )) {
        handleInlineElement(
          node2,
          inlineElementGroups,
          allParagraphs,
          isPreWhitespaceContainer,
          ctx
        );
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    };
    const elementIter = document.createTreeWalker(
      container,
      NodeFilter.SHOW_ELEMENT,
      filter
    );
    let node = elementIter.nextNode();
    while (node) {
      if (inlineElementGroups.length > 0) {
        const paragraph = elementsToParagraph(
          [...inlineElementGroups],
          isPreWhitespaceContainer,
          ctx
        );
        if (paragraph) {
          addToParagraphs(paragraph, allParagraphs);
        }
        inlineElementGroups.length = 0;
      }
      node = elementIter.nextNode();
    }
    if (inlineElementGroups.length > 0) {
      const paragraph = elementsToParagraph(
        [...inlineElementGroups],
        isPreWhitespaceContainer,
        ctx
      );
      if (paragraph) {
        addToParagraphs(paragraph, allParagraphs);
      }
      inlineElementGroups.length = 0;
    }
  }
  if (isDetectParagraphLanguage) {
    const promises = allParagraphs.map((paragraph) => {
      const { text } = paragraph;
      return detectLanguage({
        text
      });
    });
    const results = await Promise.all(promises);
    const filterdParagraphs = [];
    results.forEach((result, index) => {
      const isSame = isSameTargetLanguage(result, targetLanguage);
      if (!isSame) {
        filterdParagraphs.push(allParagraphs[index]);
      }
    });
    allParagraphs = filterdParagraphs;
  }
  return allParagraphs;
}
function getInlineElementsOfInlineElement(root2, isPreWhitespaceContainer) {
  const elements = [];
  const treeWalker = document.createTreeWalker(
    root2,
    NodeFilter.SHOW_TEXT,
    null
  );
  let node = null;
  let isWhiteSpaceNodeOfLastElement = false;
  while (node = treeWalker.nextNode()) {
    const rawText = node.textContent || "";
    const textContent = rawText.trim();
    if (!isWhiteSpaceNodeOfLastElement && rawText.length > 0 && textContent.length === 0) {
      isWhiteSpaceNodeOfLastElement = true;
      elements.push(" ");
      continue;
    }
    if (textContent.length > 0) {
      elements.push(node.parentElement);
      isWhiteSpaceNodeOfLastElement = false;
    }
  }
  const lastElement = elements[elements.length - 1];
  if (lastElement && typeof lastElement !== "string") {
    const whitespace = getWhitespace(
      lastElement.nextSibling,
      isPreWhitespaceContainer
    );
    if (whitespace) {
      elements.push(whitespace);
    }
  }
  if (typeof elements[elements.length - 1] !== "string") {
    const whitespace = getWhitespace(
      root2.nextSibling,
      isPreWhitespaceContainer
    );
    if (whitespace) {
      elements.push(whitespace);
    }
  }
  return elements;
}
function handleInlineElement(node, inlineElementGroups, allParagraphs, isPreWhitespaceContainer, ctx) {
  const previouseElement = node.previousElementSibling;
  if (previouseElement && !isInlineElement(
    previouseElement,
    ctx.rule
  )) {
    if (inlineElementGroups.length > 0) {
      const paragraph = elementsToParagraph(
        [...inlineElementGroups],
        isPreWhitespaceContainer,
        ctx
      );
      if (paragraph) {
        addToParagraphs(paragraph, allParagraphs);
      }
      inlineElementGroups.length = 0;
    }
  }
  const isExcludeElementBool = isExcludeElement(
    node,
    ctx.rule,
    false
  );
  if (isExcludeElementBool) {
    if (!isMetaElement(node, ctx.rule)) {
      inlineElementGroups.push(node);
    }
  } else if (!isStayOriginalElement(node, ctx.rule)) {
    if (isContainsSelectors(node, ["code", "tt"])) {
      inlineElementGroups.push(
        ...getInlineElementsOfInlineElement(
          node,
          isPreWhitespaceContainer
        )
      );
    } else {
      inlineElementGroups.push(node);
    }
  } else {
    inlineElementGroups.push(node);
  }
}

// dom/get_pdf_paragraphs.ts
async function getParagraphs2(_root, containers, ctx, targetContainers) {
  const allParagraphs = [];
  const { targetLanguage, rule, isDetectParagraphLanguage } = ctx;
  for (let i4 = 0; i4 < containers.length; i4++) {
    const container = containers[i4];
    const targetContainer = targetContainers[i4];
    if (!targetContainer) {
      throw new Error("targetContainer is null");
    }
    const inlineElementGroups = [];
    let isFirstElementOfParagraph = true;
    let lastLineFirstElementInfo = null;
    const pdfContainerFilter = function(node2) {
      const element = node2;
      if (["DIV", "BR"].includes(element.nodeName)) {
        isFirstElementOfParagraph = true;
        return NodeFilter.FILTER_REJECT;
      }
      if (element.classList.contains("markedContent")) {
        return NodeFilter.FILTER_ACCEPT;
      }
      if (isMarkedByParagraph2(
        node2
      )) {
        return NodeFilter.FILTER_REJECT;
      } else {
        setAttribute(element, sourceElementMarkAttributeName, "1");
      }
      if (isInlineElement(element, rule)) {
        const lastElement = getLastHTMLElement(inlineElementGroups);
        const currentElementStyle = globalThis.getComputedStyle(element);
        if (!lastElement) {
          inlineElementGroups.push(formatElement(element, currentElementStyle));
        } else {
          const lastElementStyle = globalThis.getComputedStyle(lastElement);
          const lastElementInfo = getElementInfoByComputedStyle(
            lastElementStyle
          );
          const currentElementInfo = getElementInfoByComputedStyle(
            currentElementStyle
          );
          const distanceInfo = getDistance(currentElementInfo, lastElementInfo);
          let isNewParagraph = false;
          if (isFirstElementOfParagraph && lastLineFirstElementInfo) {
            const firstElementBetweenThisLineAndLastLineDistanceInfo = getDistance(currentElementInfo, lastLineFirstElementInfo);
            if (firstElementBetweenThisLineAndLastLineDistanceInfo.left >= 1.2) {
              isNewParagraph = true;
            }
          }
          if (isFirstElementOfParagraph) {
            lastLineFirstElementInfo = currentElementInfo;
            isFirstElementOfParagraph = false;
          }
          if (!isNewParagraph) {
            isNewParagraph = getIsNewParagraph(distanceInfo);
          }
          if (isNewParagraph) {
            tryToAddToParagraph(
              inlineElementGroups,
              allParagraphs,
              ctx,
              targetContainer
            );
          }
          inlineElementGroups.push(formatElement(element, currentElementStyle));
          inlineElementGroups.push(" ");
        }
        return NodeFilter.FILTER_REJECT;
      } else {
      }
      return NodeFilter.FILTER_ACCEPT;
    };
    const elementIter = document.createTreeWalker(
      container,
      NodeFilter.SHOW_ELEMENT,
      pdfContainerFilter
    );
    let node = elementIter.nextNode();
    while (node) {
      node = elementIter.nextNode();
    }
    tryToAddToParagraph(
      inlineElementGroups,
      allParagraphs,
      ctx,
      targetContainer
    );
  }
  return allParagraphs;
}
function tryToAddToParagraph(inlineElementGroups, allParagraphs, ctx, targetContainer) {
  if (inlineElementGroups.length > 0) {
    const paragraph = elementsToParagraph(
      [...inlineElementGroups],
      false,
      ctx
    );
    if (paragraph) {
      paragraph.isPdf = true;
      paragraph.targetContainer = targetContainer;
      paragraph.inline = false;
      addToParagraphs(paragraph, allParagraphs);
    }
    inlineElementGroups.length = 0;
  }
}
function getElementInfoByComputedStyle(style) {
  return {
    top: parseFloat(style.top.slice(0, -2)),
    left: parseFloat(style.left.slice(0, -2)),
    fontSize: parseFloat(style.fontSize.slice(0, -2))
  };
}
function getIsNewParagraph(distance) {
  if (distance.fontSize > 10 || distance.fontSize < -10) {
    return true;
  }
  if (distance.top >= 1.9 || distance.top < 0) {
    return true;
  }
  return false;
}
function getDistance(elementInfo1, elementInfo2) {
  const elementBasedFontSize = elementInfo2.fontSize;
  const currentElementFontSize = elementInfo1.fontSize;
  return {
    top: (elementInfo1.top - elementInfo2.top) / elementBasedFontSize,
    left: (elementInfo1.left - elementInfo2.left) / elementBasedFontSize,
    fontSize: currentElementFontSize - elementBasedFontSize
  };
}
function formatElement(element, style) {
  const fontFamily = style.fontFamily;
  if (fontFamily === "monospace") {
    return {
      element,
      isStayOriginal: true,
      targetTagName: "code"
    };
  } else {
    return element;
  }
}
function isMarkedByParagraph2(targetElement) {
  if (!isMarked(targetElement, sourceElementMarkAttributeName)) {
    return false;
  }
  if (isMarked(targetElement, sourceElementTranslatedMarkAttributeName)) {
    return true;
  }
  const markId = getAttribute(
    targetElement,
    sourceElementParagraphAttributeName
  );
  if (!markId) {
    return false;
  }
  const paragraphId = parseInt(markId);
  const paragraphEntities2 = getParagraphEntities();
  const isExist = paragraphEntities2.has(paragraphId);
  if (!isExist) {
    const maybeTargetElement = document.getElementById(
      `${translationTargetElementWrapperClass}-${paragraphId}`
    );
    if (maybeTargetElement) {
      maybeTargetElement.remove();
    }
  }
  return isExist;
}

// utils/escape_html.ts
function escapeHTML(htmlStr) {
  return htmlStr.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

// dom/paragraph_to_html.ts
function getTranslationWrapperClassNames(translationTheme, isInline, additonalClassNames = [], isPreWhitespace, isPdf) {
  const classList = ["notranslate"];
  if (isPreWhitespace) {
    classList.push(
      translationTargetTranslationElementPreWhitespaceWrapperClass
    );
  }
  if (translationTheme) {
    classList.push(
      `${brandId}-target-translation-theme-${translationTheme}`
    );
    if (isInline) {
      classList.push(
        `${translationTargetTranslationElementInlineWrapperClass}-theme-${translationTheme}`
      );
    } else {
      classList.push(
        `${translationTargetTranslationElementBlockWrapperClass}-theme-${translationTheme}`
      );
    }
  }
  if (additonalClassNames.length > 0) {
    classList.push(...additonalClassNames);
  }
  if (isInline) {
    classList.push(translationTargetTranslationElementInlineWrapperClass);
  } else {
    classList.push(translationTargetTranslationElementBlockWrapperClass);
    if (isPdf) {
      classList.push(translationTargetTranslationPdfElementBlockWrapperClass);
    }
  }
  return classList;
}
function getTranslationInnerClassNames(translationTheme) {
  const innerClassList = [
    "notranslate",
    translationTargetInnerElementWrapperClass
  ];
  if (translationTheme) {
    innerClassList.push(
      `${brandId}-target-translation-theme-${translationTheme}-inner`
    );
  }
  return innerClassList;
}
function paragraphToHtml(sourceItem, sentence, ctx) {
  const { rule, translationTheme } = ctx;
  let { variables } = sourceItem;
  variables = variables || [];
  const { text: targetText } = sentence;
  const { wrapperPrefix, wrapperSuffix } = rule;
  const delimiters = getPlaceholderDelimiters(ctx);
  const position = "afterend";
  const regex = new RegExp(`${delimiters[0]}(\\d+)${delimiters[1]}`, "g");
  let matchIndex = 0;
  let html = escapeHTML(targetText);
  if (variables.length > 0) {
    html = html.replace(regex, (match) => {
      const matchPositonAtHtml = html.indexOf(match);
      const isStartWhiteSpace = html[matchPositonAtHtml - 1] === " ";
      const isEndWhiteSpace = html[matchPositonAtHtml + match.length] === " ";
      const variable = variables[Number(matchIndex)];
      matchIndex++;
      if (variable.type === "element") {
        let variableHtml = variable.value.outerHTML;
        if (!isStartWhiteSpace) {
          variableHtml = " " + variableHtml;
        }
        if (!isEndWhiteSpace) {
          variableHtml = variableHtml + " ";
        }
        return variableHtml;
      } else {
        log_default.error("variable type not supported", variable);
      }
      return match;
    });
  }
  const classList = getTranslationWrapperClassNames(
    translationTheme,
    sourceItem.inline,
    rule.translationClasses || [],
    sourceItem.preWhitespace,
    ctx.rule.isPdf
  );
  const innerClassList = getTranslationInnerClassNames(
    translationTheme
  );
  html = `<span class="${classList.join(" ")}"><span class="${innerClassList.join(" ")}">${html}</span></span>`;
  if (!sourceItem.inline) {
    if (wrapperPrefix === "smart") {
      html = `<br>${html}`;
    } else {
      html = `${wrapperPrefix}${html}`;
    }
    if (wrapperPrefix === "smart") {
    }
    if (wrapperSuffix === "smart") {
      html = `${html}`;
    } else {
      html = `${html}${wrapperSuffix}`;
    }
  }
  if (sourceItem.inline) {
    html = `<span class="notranslate">&nbsp;</span>${html}`;
  }
  return {
    html,
    position
  };
}

// dom/normalize_container.ts
function normalizeContainer(containers, rule) {
  const hiddenElements = [];
  for (const container of containers) {
    if (isMarked(container, sourceAtomicBlockElementMarkAttributeName)) {
      continue;
    }
    setAttribute(container, targetContainerElementAttributeName, "1");
    container.normalize();
    if (rule.lineBreakMaxTextCount > 0) {
      const treeFilter = (node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (isExcludeElement(node, rule, true)) {
            return NodeFilter.FILTER_REJECT;
          }
        }
        if (node.nodeType === Node.TEXT_NODE) {
          const trimedText = node.textContent ? node.textContent.trim() : "";
          if (trimedText.length >= rule.lineBreakMaxTextCount) {
            addLineBreakToText(node, rule.lineBreakMaxTextCount);
          }
        }
        return NodeFilter.FILTER_ACCEPT;
      };
      const walk = document.createTreeWalker(
        container,
        NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
        treeFilter
      );
      while (walk.nextNode()) {
      }
    }
    const isExcludePre = rule.excludeTags.includes("PRE") || rule.additionalExcludeTags.includes("PRE");
    if (!isExcludePre && rule.isTransformPreTagNewLine) {
      const preTags = container.querySelectorAll("pre");
      for (const preTag of preTags) {
        formatPreHtml(preTag);
      }
    }
    if (rule.preWhitespaceDetectedTags.includes(container.tagName)) {
      if (!hasMark(container, sourcePreWhitespaceMarkAttributeName)) {
        if (isPreElementByStyle(container)) {
          setAttribute(container, sourcePreWhitespaceMarkAttributeName, "1");
          if (rule.isTransformPreTagNewLine) {
            formatPreHtml(container);
          }
        } else {
          setAttribute(container, sourcePreWhitespaceMarkAttributeName, "0");
        }
      }
    }
    wrapTextNode(
      0,
      container,
      rule,
      hiddenElements
    );
  }
  return {
    hiddenElements
  };
}
function wrapTextNode(depth, root2, rule, displayNoneElements = []) {
  if (isMarked(root2, sourceAtomicBlockElementMarkAttributeName)) {
    return;
  }
  let isSingleInlineElement = false;
  if (depth === 0) {
    const isStayOriginal = isStayOriginalElement(root2, rule);
    if (root2.childNodes && root2.childNodes.length === 1 && root2.nodeType === Node.ELEMENT_NODE && isInlineElement(
      root2,
      rule
    ) && !isStayOriginal) {
      isSingleInlineElement = true;
    }
  }
  if (root2 && root2.childNodes && root2.childNodes.length > 0) {
    for (const node of root2.childNodes) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (!isExcludeElement(node, rule, false)) {
          const computedStyle = globalThis.getComputedStyle(
            node
          );
          let tempIsExcludeElement = false;
          if (computedStyle.display === "none") {
            displayNoneElements.push(node);
            tempIsExcludeElement = true;
          }
          if (!tempIsExcludeElement) {
            const clip = computedStyle.clip;
            const zIndex = computedStyle.zIndex;
            const height = computedStyle.height;
            const width = computedStyle.width;
            let formatedZIndex = 0;
            if (zIndex.startsWith("-")) {
              const zIndexNumber = parseInt(zIndex);
              if (!isNaN(zIndexNumber)) {
                formatedZIndex = zIndexNumber;
              }
            }
            if (clip === "rect(1px, 1px, 1px, 1px)" || formatedZIndex < 0) {
              tempIsExcludeElement = true;
            }
            if (!tempIsExcludeElement && node.nodeName !== "BR") {
              const heightNumber = parseInt(height);
              const widthNumber = parseInt(width);
              if (!isNaN(heightNumber) && !isNaN(widthNumber) && (heightNumber > 0 && heightNumber < 8 || widthNumber > 0 && widthNumber <= 8)) {
                tempIsExcludeElement = true;
              }
            }
          }
          if (tempIsExcludeElement) {
            setAttribute(
              node,
              sourceElementExcludeAttributeName,
              "1"
            );
            continue;
          } else {
            if (node.nodeName === "DIV" || isUnknowTag(node, rule)) {
              if (computedStyle.display === "inline" || computedStyle.display === "inline-flex") {
                if (!isMarked(
                  node,
                  sourceBlockElementMarkAttributeName
                )) {
                  setAttribute(
                    node,
                    sourceInlineElementMarkAttributeName,
                    "1"
                  );
                  continue;
                }
              }
            } else if (node.nodeName === "SPAN" || node.nodeName === "A") {
              if (!computedStyle.display.startsWith("inline")) {
                if (!isMarked(
                  node,
                  sourceInlineElementMarkAttributeName
                )) {
                  setAttribute(
                    node,
                    sourceBlockElementMarkAttributeName,
                    "1"
                  );
                  wrapTextNode(
                    depth + 1,
                    node,
                    rule,
                    displayNoneElements
                  );
                }
                continue;
              }
            }
            if (isInlineElement(node, rule) && !isSingleInlineElement) {
              continue;
            }
            wrapTextNode(
              depth + 1,
              node,
              rule,
              displayNoneElements
            );
          }
        } else {
          continue;
        }
      } else if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent;
        if (text && text.trim().length > 0) {
          const span = document.createElement("span");
          node.after(span);
          span.appendChild(node);
        }
      }
    }
  }
}
function isPreElementByStyle(element) {
  const style = window.getComputedStyle(element);
  return style.whiteSpace.startsWith("pre") || style.whiteSpace === "break-spaces";
}
function formatPreHtml(preElement) {
  const html = preElement.innerHTML;
  const newHtml = html.replace(/\n/g, "<br>");
  preElement.innerHTML = newHtml;
}
function addLineBreakToText(textNode, maxLength) {
  const text = textNode.textContent || "";
  const trimedText = text.trim();
  if (trimedText.length <= maxLength) {
    return;
  }
  const boundaries = [".", "?", "!", "\u3002", "\uFF1F", "\uFF01"];
  let boundaryIndex = boundaries.reduce((acc, boundary) => {
    const index = text.lastIndexOf(boundary, maxLength);
    return index > acc ? index : acc;
  }, -1);
  if (boundaryIndex === -1) {
    if (text.length <= maxLength) {
      addLineBreakToText(textNode, maxLength + 20);
    }
  } else {
    const theText = text.slice(boundaryIndex + 1);
    boundaryIndex++;
    if (theText.startsWith(" ")) {
      boundaryIndex++;
    }
    const theLastTextNode = textNode.splitText(boundaryIndex);
    const br = document.createElement("br");
    theLastTextNode.parentNode?.insertBefore(br, theLastTextNode);
    if (boundaryIndex + 1 < text.length) {
      addLineBreakToText(theLastTextNode, maxLength);
    }
  }
}

// dom/normalize_pdf_container.ts
function normalizeContainer2(containers, rule) {
  let targetContainers = [];
  for (const container of containers) {
    let maxRight = 0;
    let minLeft = 1e5;
    const rightContainer = document.createElement("div");
    const treeFilter = (node) => {
      const element = node;
      if (["DIV", "BR"].includes(element.nodeName)) {
        return NodeFilter.FILTER_REJECT;
      }
      if (element.classList.contains("markedContent")) {
        return NodeFilter.FILTER_ACCEPT;
      }
      if (element.nodeName === "SPAN") {
        const rect = element.getBoundingClientRect();
        const style = globalThis.getComputedStyle(element);
        const right = rect.right;
        const left = rect.left;
        const top = style.top.slice(0, -2);
        const fontsize = style.fontSize.slice(0, -2);
        if (right > maxRight) {
          maxRight = right;
        }
        if (left < minLeft) {
          minLeft = left;
        }
        setAttribute(element, sourceElementLeft, `${left}`);
        setAttribute(element, sourceElementRight, `${right}`);
        setAttribute(element, sourceElementTop, top);
        setAttribute(element, sourceElementFontSize, fontsize);
        return NodeFilter.FILTER_ACCEPT;
      } else {
        return NodeFilter.FILTER_ACCEPT;
      }
    };
    const walk = document.createTreeWalker(
      container,
      NodeFilter.SHOW_ELEMENT,
      treeFilter
    );
    while (walk.nextNode()) {
    }
    let realWidth = maxRight - minLeft;
    if (realWidth < 600) {
      realWidth = 600;
    }
    targetContainers.push(rightContainer);
    rightContainer.style.left = maxRight + "px";
    rightContainer.style.width = realWidth + "px";
    rightContainer.classList.add(translationPdfTargetContainerClass);
    if (container.childNodes.length > 0) {
      container.insertBefore(rightContainer, container.childNodes[0]);
    }
  }
  return { targetContainers };
}

// utils/url_match.ts
var matchAll = ["*://*/*", "*", "*://*"];
var placeholder = "immersive-translate-wildcard-placeholder.com";
function getMatchedUrl(rawUrl, rawMatches) {
  let matches = [];
  if (!rawMatches) {
    return null;
  }
  if (rawMatches && !Array.isArray(rawMatches)) {
    matches = [rawMatches];
  } else {
    matches = rawMatches;
  }
  if (matches.length === 0) {
    return null;
  }
  if (matches.some((m4) => matchAll.includes(m4))) {
    return rawUrl;
  }
  const urlObj = new URL(rawUrl);
  urlObj.hash = "";
  urlObj.search = "";
  const url = urlObj.href;
  const hostname2 = urlObj.hostname;
  if (matches && matches.length > 0) {
    const matched = matches.find((match) => {
      if (match === hostname2) {
        return true;
      } else if (matchAll.includes(match)) {
        return true;
      } else if (!match.includes("*") && match.includes("://")) {
        try {
          const matchUrl = new URL(match);
          if (matchUrl.pathname === "/" && !match.endsWith("/")) {
            return matchUrl.hostname === hostname2;
          } else {
            return isTwoUrlMatched(url, match);
          }
        } catch (_e3) {
        }
        return false;
      } else {
        let scheme;
        const rawMatch = match;
        if (match.includes("://")) {
          scheme = match.split("://")[0];
        } else {
          scheme = "*";
          match = "https://" + match;
        }
        const validUrlMatch = match.replace(
          /\*/g,
          placeholder
        );
        const validUrlObj = new URL(validUrlMatch);
        const hostname3 = validUrlObj.hostname;
        let pathname = validUrlObj.pathname;
        if (pathname === "/") {
          if (!rawMatch.includes("/")) {
            pathname = "/*";
          }
        }
        const regex = makeRegExp(
          scheme + ":",
          restorePlaceholderToWildcard(hostname3),
          restorePlaceholderToWildcard(pathname)
        );
        if (regex) {
          const clonedUrl = new URL(url);
          clonedUrl.port = "";
          return regex.test(clonedUrl.href);
        } else {
          return false;
        }
      }
    });
    if (matched) {
      return matched;
    }
  }
  return null;
}
function restorePlaceholderToWildcard(str) {
  return str.replace(placeholder, "*");
}
function makeRegExp(scheme, host, path) {
  let regex = "^";
  if (scheme === "*:") {
    regex += "(http:|https:|file:)";
  } else {
    regex += scheme;
  }
  regex += "//";
  if (host) {
    if (host === "*") {
      regex += "[^/]+?";
    } else {
      if (host.match(/^\*\./)) {
        regex += "[^/]*?";
        host = host.substring(2);
      }
      regex += host.replace(/\./g, "\\.").replace(/\*/g, "[^/]*");
    }
  }
  if (path) {
    if (path === "*" || path === "/*") {
      regex += "(/.*)?";
    } else if (path.includes("*")) {
      regex += path.replace(/\*/g, ".*?");
      regex += "/?";
    } else {
      regex += path.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    }
  } else {
    regex += "/?";
  }
  regex += "$";
  return new RegExp(regex);
}
function isMatchUrl(url, rawMatches) {
  return getMatchedUrl(url, rawMatches) !== null;
}
function isTwoUrlMatched(url1, url2) {
  const urlObj1 = new URL(url1);
  const urlObj2 = new URL(url2);
  return urlObj1.hostname === urlObj2.hostname && urlObj1.pathname === urlObj2.pathname && urlObj1.protocol === urlObj2.protocol && urlObj1.port === urlObj2.port;
}

// libs/sha256.js
var ERROR = "input is invalid type";
var WINDOW = typeof window === "object";
var root = WINDOW ? window : {};
if (root.JS_SHA256_NO_WINDOW) {
  WINDOW = false;
}
var WEB_WORKER = !WINDOW && typeof self === "object";
var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
if (NODE_JS) {
  root = global;
} else if (WEB_WORKER) {
  root = self;
}
var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && typeof module === "object" && module.exports;
var AMD = typeof define === "function" && define.amd;
var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
var HEX_CHARS = "0123456789abcdef".split("");
var EXTRA = [-2147483648, 8388608, 32768, 128];
var SHIFT = [24, 16, 8, 0];
var K4 = [
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
];
var OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"];
var blocks = [];
if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
  Array.isArray = function(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };
}
if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
  ArrayBuffer.isView = function(obj) {
    return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
  };
}
var createOutputMethod = function(outputType, is224) {
  return function(message) {
    return new Sha256(is224, true).update(message)[outputType]();
  };
};
var createMethod = function(is224) {
  var method = createOutputMethod("hex", is224);
  method.create = function() {
    return new Sha256(is224);
  };
  method.update = function(message) {
    return method.create().update(message);
  };
  for (var i4 = 0; i4 < OUTPUT_TYPES.length; ++i4) {
    var type = OUTPUT_TYPES[i4];
    method[type] = createOutputMethod(type, is224);
  }
  return method;
};
var createHmacOutputMethod = function(outputType, is224) {
  return function(key, message) {
    return new HmacSha256(key, is224, true).update(message)[outputType]();
  };
};
var createHmacMethod = function(is224) {
  var method = createHmacOutputMethod("hex", is224);
  method.create = function(key) {
    return new HmacSha256(key, is224);
  };
  method.update = function(key, message) {
    return method.create(key).update(message);
  };
  for (var i4 = 0; i4 < OUTPUT_TYPES.length; ++i4) {
    var type = OUTPUT_TYPES[i4];
    method[type] = createHmacOutputMethod(type, is224);
  }
  return method;
};
function Sha256(is224, sharedMemory) {
  if (sharedMemory) {
    blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    this.blocks = blocks;
  } else {
    this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
  if (is224) {
    this.h0 = 3238371032;
    this.h1 = 914150663;
    this.h2 = 812702999;
    this.h3 = 4144912697;
    this.h4 = 4290775857;
    this.h5 = 1750603025;
    this.h6 = 1694076839;
    this.h7 = 3204075428;
  } else {
    this.h0 = 1779033703;
    this.h1 = 3144134277;
    this.h2 = 1013904242;
    this.h3 = 2773480762;
    this.h4 = 1359893119;
    this.h5 = 2600822924;
    this.h6 = 528734635;
    this.h7 = 1541459225;
  }
  this.block = this.start = this.bytes = this.hBytes = 0;
  this.finalized = this.hashed = false;
  this.first = true;
  this.is224 = is224;
}
Sha256.prototype.update = function(message) {
  if (this.finalized) {
    return;
  }
  var notString, type = typeof message;
  if (type !== "string") {
    if (type === "object") {
      if (message === null) {
        throw new Error(ERROR);
      } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
        message = new Uint8Array(message);
      } else if (!Array.isArray(message)) {
        if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
          throw new Error(ERROR);
        }
      }
    } else {
      throw new Error(ERROR);
    }
    notString = true;
  }
  var code2, index = 0, i4, length = message.length, blocks2 = this.blocks;
  while (index < length) {
    if (this.hashed) {
      this.hashed = false;
      blocks2[0] = this.block;
      blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
    }
    if (notString) {
      for (i4 = this.start; index < length && i4 < 64; ++index) {
        blocks2[i4 >> 2] |= message[index] << SHIFT[i4++ & 3];
      }
    } else {
      for (i4 = this.start; index < length && i4 < 64; ++index) {
        code2 = message.charCodeAt(index);
        if (code2 < 128) {
          blocks2[i4 >> 2] |= code2 << SHIFT[i4++ & 3];
        } else if (code2 < 2048) {
          blocks2[i4 >> 2] |= (192 | code2 >> 6) << SHIFT[i4++ & 3];
          blocks2[i4 >> 2] |= (128 | code2 & 63) << SHIFT[i4++ & 3];
        } else if (code2 < 55296 || code2 >= 57344) {
          blocks2[i4 >> 2] |= (224 | code2 >> 12) << SHIFT[i4++ & 3];
          blocks2[i4 >> 2] |= (128 | code2 >> 6 & 63) << SHIFT[i4++ & 3];
          blocks2[i4 >> 2] |= (128 | code2 & 63) << SHIFT[i4++ & 3];
        } else {
          code2 = 65536 + ((code2 & 1023) << 10 | message.charCodeAt(++index) & 1023);
          blocks2[i4 >> 2] |= (240 | code2 >> 18) << SHIFT[i4++ & 3];
          blocks2[i4 >> 2] |= (128 | code2 >> 12 & 63) << SHIFT[i4++ & 3];
          blocks2[i4 >> 2] |= (128 | code2 >> 6 & 63) << SHIFT[i4++ & 3];
          blocks2[i4 >> 2] |= (128 | code2 & 63) << SHIFT[i4++ & 3];
        }
      }
    }
    this.lastByteIndex = i4;
    this.bytes += i4 - this.start;
    if (i4 >= 64) {
      this.block = blocks2[16];
      this.start = i4 - 64;
      this.hash();
      this.hashed = true;
    } else {
      this.start = i4;
    }
  }
  if (this.bytes > 4294967295) {
    this.hBytes += this.bytes / 4294967296 << 0;
    this.bytes = this.bytes % 4294967296;
  }
  return this;
};
Sha256.prototype.finalize = function() {
  if (this.finalized) {
    return;
  }
  this.finalized = true;
  var blocks2 = this.blocks, i4 = this.lastByteIndex;
  blocks2[16] = this.block;
  blocks2[i4 >> 2] |= EXTRA[i4 & 3];
  this.block = blocks2[16];
  if (i4 >= 56) {
    if (!this.hashed) {
      this.hash();
    }
    blocks2[0] = this.block;
    blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
  }
  blocks2[14] = this.hBytes << 3 | this.bytes >>> 29;
  blocks2[15] = this.bytes << 3;
  this.hash();
};
Sha256.prototype.hash = function() {
  var a5 = this.h0, b5 = this.h1, c4 = this.h2, d4 = this.h3, e3 = this.h4, f3 = this.h5, g5 = this.h6, h3 = this.h7, blocks2 = this.blocks, j5, s0, s1, maj, t1, t22, ch, ab, da, cd, bc;
  for (j5 = 16; j5 < 64; ++j5) {
    t1 = blocks2[j5 - 15];
    s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3;
    t1 = blocks2[j5 - 2];
    s1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10;
    blocks2[j5] = blocks2[j5 - 16] + s0 + blocks2[j5 - 7] + s1 << 0;
  }
  bc = b5 & c4;
  for (j5 = 0; j5 < 64; j5 += 4) {
    if (this.first) {
      if (this.is224) {
        ab = 300032;
        t1 = blocks2[0] - 1413257819;
        h3 = t1 - 150054599 << 0;
        d4 = t1 + 24177077 << 0;
      } else {
        ab = 704751109;
        t1 = blocks2[0] - 210244248;
        h3 = t1 - 1521486534 << 0;
        d4 = t1 + 143694565 << 0;
      }
      this.first = false;
    } else {
      s0 = (a5 >>> 2 | a5 << 30) ^ (a5 >>> 13 | a5 << 19) ^ (a5 >>> 22 | a5 << 10);
      s1 = (e3 >>> 6 | e3 << 26) ^ (e3 >>> 11 | e3 << 21) ^ (e3 >>> 25 | e3 << 7);
      ab = a5 & b5;
      maj = ab ^ a5 & c4 ^ bc;
      ch = e3 & f3 ^ ~e3 & g5;
      t1 = h3 + s1 + ch + K4[j5] + blocks2[j5];
      t22 = s0 + maj;
      h3 = d4 + t1 << 0;
      d4 = t1 + t22 << 0;
    }
    s0 = (d4 >>> 2 | d4 << 30) ^ (d4 >>> 13 | d4 << 19) ^ (d4 >>> 22 | d4 << 10);
    s1 = (h3 >>> 6 | h3 << 26) ^ (h3 >>> 11 | h3 << 21) ^ (h3 >>> 25 | h3 << 7);
    da = d4 & a5;
    maj = da ^ d4 & b5 ^ ab;
    ch = h3 & e3 ^ ~h3 & f3;
    t1 = g5 + s1 + ch + K4[j5 + 1] + blocks2[j5 + 1];
    t22 = s0 + maj;
    g5 = c4 + t1 << 0;
    c4 = t1 + t22 << 0;
    s0 = (c4 >>> 2 | c4 << 30) ^ (c4 >>> 13 | c4 << 19) ^ (c4 >>> 22 | c4 << 10);
    s1 = (g5 >>> 6 | g5 << 26) ^ (g5 >>> 11 | g5 << 21) ^ (g5 >>> 25 | g5 << 7);
    cd = c4 & d4;
    maj = cd ^ c4 & a5 ^ da;
    ch = g5 & h3 ^ ~g5 & e3;
    t1 = f3 + s1 + ch + K4[j5 + 2] + blocks2[j5 + 2];
    t22 = s0 + maj;
    f3 = b5 + t1 << 0;
    b5 = t1 + t22 << 0;
    s0 = (b5 >>> 2 | b5 << 30) ^ (b5 >>> 13 | b5 << 19) ^ (b5 >>> 22 | b5 << 10);
    s1 = (f3 >>> 6 | f3 << 26) ^ (f3 >>> 11 | f3 << 21) ^ (f3 >>> 25 | f3 << 7);
    bc = b5 & c4;
    maj = bc ^ b5 & d4 ^ cd;
    ch = f3 & g5 ^ ~f3 & h3;
    t1 = e3 + s1 + ch + K4[j5 + 3] + blocks2[j5 + 3];
    t22 = s0 + maj;
    e3 = a5 + t1 << 0;
    a5 = t1 + t22 << 0;
  }
  this.h0 = this.h0 + a5 << 0;
  this.h1 = this.h1 + b5 << 0;
  this.h2 = this.h2 + c4 << 0;
  this.h3 = this.h3 + d4 << 0;
  this.h4 = this.h4 + e3 << 0;
  this.h5 = this.h5 + f3 << 0;
  this.h6 = this.h6 + g5 << 0;
  this.h7 = this.h7 + h3 << 0;
};
Sha256.prototype.hex = function() {
  this.finalize();
  var h0 = this.h0, h1 = this.h1, h22 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7;
  var hex2 = HEX_CHARS[h0 >> 28 & 15] + HEX_CHARS[h0 >> 24 & 15] + HEX_CHARS[h0 >> 20 & 15] + HEX_CHARS[h0 >> 16 & 15] + HEX_CHARS[h0 >> 12 & 15] + HEX_CHARS[h0 >> 8 & 15] + HEX_CHARS[h0 >> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h1 >> 28 & 15] + HEX_CHARS[h1 >> 24 & 15] + HEX_CHARS[h1 >> 20 & 15] + HEX_CHARS[h1 >> 16 & 15] + HEX_CHARS[h1 >> 12 & 15] + HEX_CHARS[h1 >> 8 & 15] + HEX_CHARS[h1 >> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h22 >> 28 & 15] + HEX_CHARS[h22 >> 24 & 15] + HEX_CHARS[h22 >> 20 & 15] + HEX_CHARS[h22 >> 16 & 15] + HEX_CHARS[h22 >> 12 & 15] + HEX_CHARS[h22 >> 8 & 15] + HEX_CHARS[h22 >> 4 & 15] + HEX_CHARS[h22 & 15] + HEX_CHARS[h3 >> 28 & 15] + HEX_CHARS[h3 >> 24 & 15] + HEX_CHARS[h3 >> 20 & 15] + HEX_CHARS[h3 >> 16 & 15] + HEX_CHARS[h3 >> 12 & 15] + HEX_CHARS[h3 >> 8 & 15] + HEX_CHARS[h3 >> 4 & 15] + HEX_CHARS[h3 & 15] + HEX_CHARS[h4 >> 28 & 15] + HEX_CHARS[h4 >> 24 & 15] + HEX_CHARS[h4 >> 20 & 15] + HEX_CHARS[h4 >> 16 & 15] + HEX_CHARS[h4 >> 12 & 15] + HEX_CHARS[h4 >> 8 & 15] + HEX_CHARS[h4 >> 4 & 15] + HEX_CHARS[h4 & 15] + HEX_CHARS[h5 >> 28 & 15] + HEX_CHARS[h5 >> 24 & 15] + HEX_CHARS[h5 >> 20 & 15] + HEX_CHARS[h5 >> 16 & 15] + HEX_CHARS[h5 >> 12 & 15] + HEX_CHARS[h5 >> 8 & 15] + HEX_CHARS[h5 >> 4 & 15] + HEX_CHARS[h5 & 15] + HEX_CHARS[h6 >> 28 & 15] + HEX_CHARS[h6 >> 24 & 15] + HEX_CHARS[h6 >> 20 & 15] + HEX_CHARS[h6 >> 16 & 15] + HEX_CHARS[h6 >> 12 & 15] + HEX_CHARS[h6 >> 8 & 15] + HEX_CHARS[h6 >> 4 & 15] + HEX_CHARS[h6 & 15];
  if (!this.is224) {
    hex2 += HEX_CHARS[h7 >> 28 & 15] + HEX_CHARS[h7 >> 24 & 15] + HEX_CHARS[h7 >> 20 & 15] + HEX_CHARS[h7 >> 16 & 15] + HEX_CHARS[h7 >> 12 & 15] + HEX_CHARS[h7 >> 8 & 15] + HEX_CHARS[h7 >> 4 & 15] + HEX_CHARS[h7 & 15];
  }
  return hex2;
};
Sha256.prototype.toString = Sha256.prototype.hex;
Sha256.prototype.digest = function() {
  this.finalize();
  var h0 = this.h0, h1 = this.h1, h22 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7;
  var arr = [
    h0 >> 24 & 255,
    h0 >> 16 & 255,
    h0 >> 8 & 255,
    h0 & 255,
    h1 >> 24 & 255,
    h1 >> 16 & 255,
    h1 >> 8 & 255,
    h1 & 255,
    h22 >> 24 & 255,
    h22 >> 16 & 255,
    h22 >> 8 & 255,
    h22 & 255,
    h3 >> 24 & 255,
    h3 >> 16 & 255,
    h3 >> 8 & 255,
    h3 & 255,
    h4 >> 24 & 255,
    h4 >> 16 & 255,
    h4 >> 8 & 255,
    h4 & 255,
    h5 >> 24 & 255,
    h5 >> 16 & 255,
    h5 >> 8 & 255,
    h5 & 255,
    h6 >> 24 & 255,
    h6 >> 16 & 255,
    h6 >> 8 & 255,
    h6 & 255
  ];
  if (!this.is224) {
    arr.push(h7 >> 24 & 255, h7 >> 16 & 255, h7 >> 8 & 255, h7 & 255);
  }
  return arr;
};
Sha256.prototype.array = Sha256.prototype.digest;
Sha256.prototype.arrayBuffer = function() {
  this.finalize();
  var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
  var dataView = new DataView(buffer);
  dataView.setUint32(0, this.h0);
  dataView.setUint32(4, this.h1);
  dataView.setUint32(8, this.h2);
  dataView.setUint32(12, this.h3);
  dataView.setUint32(16, this.h4);
  dataView.setUint32(20, this.h5);
  dataView.setUint32(24, this.h6);
  if (!this.is224) {
    dataView.setUint32(28, this.h7);
  }
  return buffer;
};
function HmacSha256(key, is224, sharedMemory) {
  var i4, type = typeof key;
  if (type === "string") {
    var bytes = [], length = key.length, index = 0, code2;
    for (i4 = 0; i4 < length; ++i4) {
      code2 = key.charCodeAt(i4);
      if (code2 < 128) {
        bytes[index++] = code2;
      } else if (code2 < 2048) {
        bytes[index++] = 192 | code2 >> 6;
        bytes[index++] = 128 | code2 & 63;
      } else if (code2 < 55296 || code2 >= 57344) {
        bytes[index++] = 224 | code2 >> 12;
        bytes[index++] = 128 | code2 >> 6 & 63;
        bytes[index++] = 128 | code2 & 63;
      } else {
        code2 = 65536 + ((code2 & 1023) << 10 | key.charCodeAt(++i4) & 1023);
        bytes[index++] = 240 | code2 >> 18;
        bytes[index++] = 128 | code2 >> 12 & 63;
        bytes[index++] = 128 | code2 >> 6 & 63;
        bytes[index++] = 128 | code2 & 63;
      }
    }
    key = bytes;
  } else {
    if (type === "object") {
      if (key === null) {
        throw new Error(ERROR);
      } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
        key = new Uint8Array(key);
      } else if (!Array.isArray(key)) {
        if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
          throw new Error(ERROR);
        }
      }
    } else {
      throw new Error(ERROR);
    }
  }
  if (key.length > 64) {
    key = new Sha256(is224, true).update(key).array();
  }
  var oKeyPad = [], iKeyPad = [];
  for (i4 = 0; i4 < 64; ++i4) {
    var b5 = key[i4] || 0;
    oKeyPad[i4] = 92 ^ b5;
    iKeyPad[i4] = 54 ^ b5;
  }
  Sha256.call(this, is224, sharedMemory);
  this.update(iKeyPad);
  this.oKeyPad = oKeyPad;
  this.inner = true;
  this.sharedMemory = sharedMemory;
}
HmacSha256.prototype = new Sha256();
HmacSha256.prototype.finalize = function() {
  Sha256.prototype.finalize.call(this);
  if (this.inner) {
    this.inner = false;
    var innerHash = this.array();
    Sha256.call(this, this.is224, this.sharedMemory);
    this.update(this.oKeyPad);
    this.update(innerHash);
    Sha256.prototype.finalize.call(this);
  }
};
var exports = createMethod();
exports.sha256 = exports;
exports.sha224 = createMethod(true);
exports.sha256.hmac = createHmacMethod();
exports.sha224.hmac = createHmacMethod(true);
var sha256_default = exports;

// utils/sha256.ts
var sha256Fn = sha256_default.sha256;
function sha256(message) {
  return Promise.resolve(sha256Fn(message));
}
function hex(hashBuffer) {
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b5) => b5.toString(16).padStart(2, "0")).join(
    ""
  );
  return hashHex;
}
function hmacSha256(str, keyString) {
  const hash = sha256Fn.hmac.create(keyString);
  hash.update(str);
  return Promise.resolve(hash.array());
}
async function hmacSha256ByString(str, keyString) {
  const sig = await hmacSha256(str, keyString);
  return hex(sig);
}
async function hmacSha256ByArrayBuffer(str, keyString) {
  const buffer = decodeHex(keyString);
  const sig = await hmacSha256(str, buffer);
  return hex(sig);
}
function decodeHex(string) {
  const bytes = [];
  string.replace(/../g, function(pair) {
    bytes.push(parseInt(pair, 16));
    return "";
  });
  return new Uint8Array(bytes).buffer;
}

// dom/context.ts
async function getContext(options) {
  const { url, config, state } = options;
  const urlObj = new URL(url);
  let sourceLanguage = "auto";
  const {
    translationParagraphLanguagePattern,
    translationService,
    translationServices,
    translationTheme,
    translationThemePatterns,
    translationUrlPattern,
    targetLanguage,
    sourceLanguageUrlPattern
  } = config;
  let isDetectParagraphLanguage = isMatchUrl(
    url,
    translationParagraphLanguagePattern.matches
  );
  if (!isDetectParagraphLanguage) {
    const selectorMatches = translationParagraphLanguagePattern.selectorMatches;
    isDetectParagraphLanguage = isMatchSelectors(selectorMatches);
  }
  let defaultTranslationService = translationService;
  const services = Object.keys(translationServices);
  for (const service of services) {
    const serviceConfig = translationServices[service];
    if (isMatchUrl(url, serviceConfig.matches)) {
      defaultTranslationService = service;
      break;
    }
  }
  let defaultTheme = translationTheme;
  const themes = Object.keys(translationThemePatterns);
  for (const theme of themes) {
    const themeConfig = translationThemePatterns[theme];
    if (isMatchUrl(url, themeConfig.matches)) {
      defaultTheme = theme;
      break;
    }
  }
  const isTranslateUrl = isMatchUrl(url, translationUrlPattern.matches);
  let isTranslateExcludeUrl = isMatchUrl(
    url,
    translationUrlPattern.excludeMatches
  );
  if (!isTranslateExcludeUrl) {
    isTranslateExcludeUrl = isMatchUrl(url, buildinExcludeUrls);
  }
  const sourceConfigLanguages = Object.keys(sourceLanguageUrlPattern);
  const sourceLanguageReverseMap = {};
  for (const language of sourceConfigLanguages) {
    const matchPattern = sourceLanguageUrlPattern[language];
    if (matchPattern && matchPattern.matches) {
      for (const match of matchPattern.matches) {
        sourceLanguageReverseMap[match] = language;
      }
    }
  }
  const sourceUrlMatches = Object.keys(sourceLanguageReverseMap);
  const sourceUrlMatched = getMatchedUrl(url, sourceUrlMatches);
  if (sourceUrlMatched) {
    sourceLanguage = sourceLanguageReverseMap[sourceUrlMatched] ?? "auto";
  }
  const defaultTargetLanguage = targetLanguage || "zh-CN";
  const hostname2 = urlObj.hostname;
  const encryptedHostname = await sha256(hostname2);
  const pathAndQueryAndHash = urlObj.pathname + urlObj.search + urlObj.hash;
  const encryptedPath = await sha256(pathAndQueryAndHash);
  const encryptedUrl = `https://${encryptedHostname}.com/${encryptedPath}`;
  const ctx = {
    targetLanguage: defaultTargetLanguage,
    config,
    isDetectParagraphLanguage,
    translationService: defaultTranslationService,
    translationTheme: defaultTheme,
    isTranslateUrl,
    sourceLanguage,
    isTranslateExcludeUrl,
    rule: config.generalRule,
    url,
    encryptedUrl,
    state: state ? state : {
      translationArea: config.translationArea,
      translationStartMode: config.translationStartMode,
      isAutoTranslate: false,
      isNeedClean: false
    }
  };
  if (ctx.translationService === "d") {
    config.immediateTranslationTextCount = 0;
  }
  const rules = config.rules;
  let rule;
  if (globalThis.PDFViewerApplication) {
    rule = rules.find((rule2) => rule2.isPdf);
  } else {
    rule = rules.find((rule2) => {
      let isMatched = isMatchUrl(url, rule2.matches);
      if (!isMatched) {
        const selectorMatches = rule2.selectorMatches;
        if (selectorMatches && selectorMatches.length > 0) {
          isMatched = isMatchSelectors(selectorMatches);
        }
      }
      return isMatched;
    });
  }
  const generalRule = config.generalRule;
  if (rule) {
    ctx.rule = mergeRule(generalRule, rule);
  }
  if (ctx.rule.isPdf) {
    ctx.state.translationArea = "main";
  }
  if (ctx.state.translationArea === "body") {
    ctx.rule.paragraphMinTextCount = 1;
    ctx.rule.paragraphMinWordCount = 1;
  }
  return ctx;
}

// dom/translate_page.ts
var pageStatus = "Original";
var currentParagraphIds = [];
var waitToTranslateParagraphIds = /* @__PURE__ */ new Set();
var allNewDynamicElements = [];
var allIntersectionObserver = [];
var allResizebleObserver = [];
var currentNewDynamicElements = [];
var oldUrl = globalThis.location.href.split("#")[0];
var currentTranslatedTextLength = 0;
var globalContext;
var debounceTranslateCurrentQueue = debounce(translateCurrentQueue, 300);
var debounceTranslateNewDynamicNodes = debounce(
  translateNewDynamicNodes,
  200
);
var env3 = getEnv();
var isProd2 = env3.PROD === "1";
var mutationObserver;
var titleMutationObserver;
var originalPageTitle = "";
async function toggleTranslatePage() {
  if (getPageStatus() === "Original") {
    await translatePage();
  } else if (getPageStatus() === "Translated" || getPageStatus() === "Error") {
    restorePage();
  }
}
function showTranslationOnly() {
  const allTranslatedElements = document.querySelectorAll(
    `[${sourceElementTranslatedMarkAttributeName}="1"]`
  );
  for (const element of allTranslatedElements) {
    element.style.display = "none";
  }
}
function restorePage() {
  clean();
  disableMutatinObserver();
  setPageTranslatedStatus("Translating");
  if (originalPageTitle) {
    document.title = originalPageTitle;
  }
  const elements = document.querySelectorAll(
    "." + translationTargetElementWrapperClass
  );
  elements.forEach((element) => {
    element.remove();
  });
  const pdfElements = document.querySelectorAll(
    "." + translationPdfTargetContainerClass
  );
  pdfElements.forEach((element) => {
    element.remove();
  });
  const elementsEffected = document.querySelectorAll(
    "[" + sourceElementEffectAttributeName + "]"
  );
  elementsEffected.forEach((element) => {
    if (isProd2) {
      delete element[elementMarkRootKey];
    } else {
      const allKeys = Object.keys(element.dataset);
      const keys = allKeys.filter((key) => key.startsWith(brandIdForJs));
      for (const key of keys) {
        delete element.dataset[key];
      }
    }
    element.removeAttribute(sourceElementEffectAttributeName);
  });
  setPageTranslatedStatus("Original");
}
function onElementVisible(paragraph, callback) {
  let isCalled = false;
  const firstElement = getFirstHTMLElement(paragraph.elements);
  const lastElement = getLastHTMLElement(paragraph.elements);
  waitToTranslateParagraphIds.add(paragraph.id);
  const observers = [];
  if (firstElement) {
    const observe = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          observer.disconnect();
          if (!isCalled) {
            isCalled = true;
            callback(paragraph);
          }
        }
      });
    });
    allIntersectionObserver.push(observe);
    observers.push(observe);
    observe.observe(firstElement);
  }
  if (lastElement && lastElement !== firstElement) {
    const observe = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          observer.disconnect();
          if (!isCalled) {
            isCalled = true;
            callback(paragraph);
          }
        }
      });
    });
    allIntersectionObserver.push(observe);
    observers.push(observe);
    observe.observe(lastElement);
  }
  const paragraphEntiry = getParagraph(paragraph.id);
  if (paragraphEntiry) {
    paragraphEntiry.observers = observers;
    setParagraph(paragraph.id, paragraphEntiry);
  }
}
function onHiddenElementVisible(element, callback) {
  if (element) {
    const resizewatcher = new ResizeObserver((entries, observer) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 10) {
          observer.disconnect();
          callback(entry.target);
        }
      }
    });
    resizewatcher.observe(element);
    allResizebleObserver.push(resizewatcher);
  }
}
async function translateNewDynamicNodes(ctx) {
  const currentNewDynamicNodes = [...currentNewDynamicElements];
  currentNewDynamicElements = [];
  try {
    const allContainers = [];
    for (const element of currentNewDynamicNodes) {
      const rawContainers = getContainers(element, ctx);
      if (rawContainers.length === 0) {
        continue;
      }
      const containers = rawContainers;
      allContainers.push(...containers);
    }
    await translateContainers(allContainers, ctx);
  } catch (e3) {
    log_default.error(`translateNewDynamicNodes error: ${e3.message}`);
  }
}
function translationParagraph(visibleParagraph, ctx) {
  waitToTranslateParagraphIds.delete(visibleParagraph.id);
  const paragraphWithState = getParagraph(visibleParagraph.id);
  if (paragraphWithState) {
    if (paragraphWithState.observers && paragraphWithState.observers.length > 0) {
      paragraphWithState.observers.forEach((observer) => {
        observer.disconnect();
      });
    }
    paragraphWithState.observers = [];
    paragraphWithState.state = "Translating";
    setParagraph(visibleParagraph.id, paragraphWithState);
  }
  const id = visibleParagraph.id;
  currentTranslatedTextLength += visibleParagraph.text.length;
  const realElements = getHTMLElements(visibleParagraph.elements);
  if (!visibleParagraph.isPdf) {
    const lastElement = getLastHTMLElement(visibleParagraph.elements);
    let position = "afterend";
    if (visibleParagraph.elements.length > 0 && lastElement) {
      if (realElements.length === 1) {
        position = "beforeend";
      } else {
        if (!isInlineElement(
          visibleParagraph.elements[0],
          ctx.rule
        )) {
          position = "beforeend";
        }
      }
    }
    const targetTranslationWrapper = document.createElement("span");
    targetTranslationWrapper.classList.add(
      "notranslate",
      translationTargetElementWrapperClass
    );
    targetTranslationWrapper.id = `${translationTargetElementWrapperClass}-${id}`;
    targetTranslationWrapper.innerHTML = getLoadingHTML();
    if (position === "beforeend") {
      const innerElement = getTheLastTextNodeParentElement(lastElement);
      if (innerElement) {
        innerElement.appendChild(targetTranslationWrapper);
      } else {
        lastElement.appendChild(targetTranslationWrapper);
      }
    } else if (position === "afterend") {
      lastElement.insertAdjacentElement(position, targetTranslationWrapper);
    } else {
      throw new Error("not support position");
    }
  } else {
    const firstElement = getFirstHTMLElement(visibleParagraph.elements);
    const elementStyle = window.getComputedStyle(firstElement);
    const top = elementStyle.top;
    let fontSize = elementStyle.fontSize;
    const fontSizeNumber = parseFloat(fontSize.slice(0, -2));
    if (!isNaN(fontSizeNumber)) {
      if (fontSizeNumber > 28) {
        fontSize = "28px";
      }
    }
    const targetContainer = visibleParagraph.targetContainer;
    const paragraphTarget = document.createElement("span");
    if (realElements.length === 1) {
      paragraphTarget.style.fontSize = fontSize;
    }
    paragraphTarget.id = `${translationTargetElementWrapperClass}-${id}`;
    paragraphTarget.style.top = top;
    let firstElementLeft = getAttribute(firstElement, sourceElementLeft);
    const minLeft = realElements.reduce((prev, current) => {
      const left = getAttribute(current, sourceElementLeft);
      if (left && left < prev) {
        return left;
      }
      return prev;
    }, 1e3);
    const maxRight = realElements.reduce((prev, current) => {
      const right = getAttribute(current, sourceElementRight);
      if (right && right > prev) {
        return right;
      }
      return prev;
    }, 0);
    let width = maxRight - minLeft;
    if (width < 30) {
    }
    if (width > 600) {
      width = 600;
    }
    if (firstElementLeft < 200) {
      firstElementLeft = 10;
    }
    if (firstElementLeft) {
      if (firstElementLeft < 0) {
        firstElementLeft = 0;
      }
    }
    paragraphTarget.style.left = `${firstElementLeft || 10}px`;
    if (minLeft < 400) {
      paragraphTarget.style.width = width + "px";
    } else {
      paragraphTarget.style.width = `calc(100% - ${minLeft}px)`;
    }
    paragraphTarget.classList.add(
      `notranslate`,
      `${translationTargetElementWrapperClass}`
    ), targetContainer.appendChild(paragraphTarget);
  }
  currentParagraphIds.push(id);
  debounceTranslateCurrentQueue(ctx);
}
function addParagraphToQueue(paragraph, ctx) {
  if (ctx.state.translationStartMode === "dynamic") {
    if (currentTranslatedTextLength > ctx.config.immediateTranslationTextCount) {
      onElementVisible(paragraph, (visibleParagraph) => {
        translationParagraph(visibleParagraph, ctx);
      });
    } else {
      translationParagraph(paragraph, ctx);
    }
  } else {
    translationParagraph(paragraph, ctx);
  }
}
async function translatePage() {
  if (pageStatus === "Translating") {
    return;
  }
  setPageTranslatedStatus("Translating");
  const ctx = await getGlobalContext(globalThis.location.href);
  log_default.debug("ctx", ctx);
  if (ctx.state.isNeedClean) {
    restorePage();
  } else {
    globalContext.state.isNeedClean = true;
  }
  if (ctx.rule.normalizeBody) {
    const element = document.querySelector(ctx.rule.normalizeBody);
    if (element) {
      document.body = document.body.cloneNode(true);
    }
  }
  addToUnmountQueue(() => {
    currentTranslatedTextLength = 0;
    cleanParagraphs();
    allIntersectionObserver.forEach((observer) => {
      observer.disconnect();
    });
    allResizebleObserver.forEach((observer) => {
      observer.disconnect();
    });
    allIntersectionObserver = [];
    waitToTranslateParagraphIds.clear();
  });
  setPageTranslatedStatus("Translating");
  try {
    const containers = getContainers(document.body, ctx);
    log_default.debug("detect containers", containers);
    setPageTranslatedStatus("Translating");
    const { rule } = ctx;
    if (containers.length > 0) {
      await translateContainers(containers, ctx);
    }
    translateTitle(ctx).catch((e3) => {
      log_default.error(`translateTitle error:`, e3.name, e3.message, e3.details || "");
    });
    enableMutatinObserver(rule, ctx);
    if (containers.length === 0) {
      setPageTranslatedStatus("Translated");
    }
  } catch (e3) {
    setPageTranslatedStatus("Error");
    log_default.error(e3);
  }
}
async function getGlobalContext(url) {
  const config = await getConfig2();
  if (!globalContext) {
    const options = {
      url,
      config
    };
    const ctx = await getContext(options);
    globalContext = ctx;
  } else {
    const options = {
      url,
      config,
      state: globalContext.state
    };
    const ctx = await getContext(options);
    globalContext = ctx;
  }
  return globalContext;
}
async function toggleTranslateTheMainPage() {
  if (getPageStatus() === "Original") {
    await translateTheMainPage();
  } else if (getPageStatus() === "Translated" || getPageStatus() === "Error") {
    globalContext = await getGlobalContext(globalThis.location.href);
    if (globalContext.state.translationArea !== "main") {
      await translateTheMainPage();
    } else {
      restorePage();
    }
  }
}
async function translateTheMainPage() {
  globalContext = await getGlobalContext(globalThis.location.href);
  globalContext.state.translationArea = "main";
  await translatePage();
}
async function translateTheWholePage() {
  globalContext = await getGlobalContext(globalThis.location.href);
  globalContext.state.translationArea = "body";
  await translatePage();
}
async function toggleTranslateTheWholePage() {
  if (getPageStatus() === "Original") {
    await translateTheWholePage();
  } else if (getPageStatus() === "Translated" || getPageStatus() === "Error") {
    globalContext = await getGlobalContext(globalThis.location.href);
    if (globalContext.state.translationArea !== "body") {
      globalContext.state.translationArea = "body";
      await translatePage();
    } else {
      restorePage();
    }
  }
}
async function translateToThePageEndImmediately() {
  globalContext = await getGlobalContext(globalThis.location.href);
  globalContext.state.translationArea = "body";
  globalContext.state.translationStartMode = "immediate";
  await translatePage();
  await translateNewDynamicNodes(globalContext);
}
async function translateTitle(ctx) {
  const pageTitle = document.title;
  if (!pageTitle) {
    return;
  }
  if (pageTitle.includes(titleDelimiters)) {
    return;
  }
  if (originalPageTitle !== pageTitle) {
    originalPageTitle = pageTitle;
  }
  let currentLang = "auto";
  if (!ctx.isDetectParagraphLanguage) {
    currentLang = getCurrentPageLanguageByClient();
  }
  if (currentLang === "auto") {
    const detectedLang = await detectLanguage({
      text: pageTitle
    });
    if (isSameTargetLanguage(detectedLang, ctx.targetLanguage)) {
      return;
    }
  }
  try {
    const result = await translateSingleSentence({
      text: pageTitle,
      from: currentLang,
      to: ctx.targetLanguage
    }, ctx);
    if (result && result.text) {
      document.title = originalPageTitle + titleDelimiters + result.text;
    }
  } catch (e3) {
    throw e3;
  }
}
function getLoadingHTML() {
  return `<span class="${brandId}-loading notranslate"></span>`;
}
async function translateContainers(containers, ctx) {
  const { rule } = ctx;
  markContainers(containers, rule);
  let targetContainers = [];
  if (!ctx.rule.isPdf) {
    setPageTranslatedStatus("Translating");
    const normalizeResult = normalizeContainer(
      containers,
      rule
    );
    const { hiddenElements } = normalizeResult;
    for (const element of hiddenElements) {
      onHiddenElementVisible(element, () => {
        removeAttribute(element, sourceElementExcludeAttributeName);
        translateContainers([element], ctx);
      });
    }
    setPageTranslatedStatus("Translating");
  } else {
    if (containers.length > 0) {
      setPageTranslatedStatus("Translating");
      const normalizeResult = normalizeContainer2(
        containers,
        rule
      );
      targetContainers = normalizeResult.targetContainers;
    }
  }
  let paragraphs = [];
  if (ctx.rule.isPdf) {
    paragraphs = await getParagraphs2(
      document.body,
      containers,
      ctx,
      targetContainers
    );
  } else {
    containers = containers.filter((container) => {
      return !isExcludeElement(container, rule, false);
    });
    paragraphs = await getParagraphs(
      document.body,
      containers,
      ctx
    );
  }
  setPageTranslatedStatus("Translating");
  if (paragraphs.length === 0) {
    setPageTranslatedStatus("Translated");
    return;
  }
  log_default.debug("detect paragraphs", paragraphs);
  for (const paragraph of paragraphs) {
    addParagraphToQueue(paragraph, ctx);
  }
  setPageTranslatedStatus("Translated");
}
function onParagraphTranslated(err, translatedSentence, sentenceRequest, ctx) {
  const paragraphWithState = getParagraph(sentenceRequest.id);
  if (err || !translatedSentence) {
    if (!err) {
      log_default.error(`translate error`, translatedSentence);
      err = new Error("no response from server");
    }
    const wrapperId = sentenceRequest.id;
    const wrapper = document.getElementById(
      `${translationTargetElementWrapperClass}-${wrapperId}`
    );
    let errorMessage = err.message.replaceAll("\n", "");
    errorMessage = errorMessage.replaceAll('"', "&quot;");
    if (paragraphWithState) {
      paragraphWithState.state = "Error";
      setParagraph(paragraphWithState.id, paragraphWithState);
    }
    const errorHtml = `<span class="${brandId}-error notranslate"> <span class="immersive-translate-tooltip" data-immersive-translate-tooltip-text="${errorMessage}"><button class="${brandId}-clickable-button notranslate" title="${errorMessage}">\u2757</button></span> <button class="${brandId}-clickable-button notranslate" data-${brandId}-paragraph-id="${wrapperId}" data-${brandId}-action="retry">\u{1F504}</button></span>`;
    if (wrapper) {
      wrapper.innerHTML = errorHtml;
    }
  } else {
    const paragraph = getParagraph(sentenceRequest.id);
    if (paragraph) {
      paragraph.state = "Translated";
      setParagraph(paragraph.id, paragraph);
      const targetItem = paragraphToHtml(
        paragraph,
        translatedSentence,
        ctx
      );
      const wrapperId = translatedSentence.id;
      const wrapper = document.getElementById(
        `${translationTargetElementWrapperClass}-${wrapperId}`
      );
      if (wrapper) {
        wrapper.innerHTML = targetItem.html;
        const originalElements = document.querySelectorAll(
          `[${sourceElementParagraphAttributeName}="${wrapperId}"]`
        );
        originalElements.forEach((element) => {
          setAttribute(
            element,
            sourceElementTranslatedMarkAttributeName,
            "1"
          );
        });
      }
    } else {
      log_default.error(`paragraph not found`, sentenceRequest.id);
    }
  }
}
async function translateCurrentQueue(ctx) {
  if (currentParagraphIds.length === 0) {
    return Promise.resolve();
  }
  const ids = [...currentParagraphIds];
  currentParagraphIds = [];
  let currentParagraphLang = "auto";
  if (!ctx.isDetectParagraphLanguage) {
    currentParagraphLang = getCurrentPageLanguage();
  }
  const payload = {
    sentences: ids.filter((id) => getParagraph(id)).map((id) => {
      const paragraph = getParagraph(id);
      return {
        id: paragraph.id,
        url: ctx.encryptedUrl,
        text: paragraph.text,
        from: currentParagraphLang,
        to: ctx.targetLanguage
      };
    })
  };
  const sentenceLength = payload.sentences.length;
  if (sentenceLength > 0) {
    setPageTranslatedStatus("Translating");
    try {
      await translateMultipleSentences(
        payload,
        ctx,
        (err, translatedSentence, sentenceRequest) => {
          onParagraphTranslated(err, translatedSentence, sentenceRequest, ctx);
        }
      );
    } catch (e3) {
      setPageTranslatedStatus("Error");
      log_default.error(
        `translateCurrentQueue error`,
        e3.name,
        e3.message,
        e3.details || " "
      );
      return;
    }
  }
  setPageTranslatedStatus("Translated");
}
function setPageTranslatedStatus(_pageStatus) {
  pageStatus = _pageStatus;
  sendPageTranslatedStatus(pageStatus);
}
function enableMutatinObserver(rule, ctx) {
  disableMutatinObserver();
  allNewDynamicElements = [];
  currentNewDynamicElements = [];
  const inlineAndIgnoreAndTextTags = rule.inlineTags.concat(rule.excludeTags).concat("#text", "BR");
  mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach((mutation) => {
      const currentUrl = globalThis.location.href;
      const currentUrlWithoutHash = currentUrl.split("#")[0];
      if (currentUrlWithoutHash !== oldUrl) {
        oldUrl = currentUrl.split("#")[0];
        clean();
        disableMutatinObserver();
        setTimeout(() => {
          log_default.debug(`url changed, reinit page`);
          initPage();
        }, rule.urlChangeDelay);
        const event = new Event("urlChange");
        document.dispatchEvent(event);
        return;
      }
      mutation.addedNodes.forEach((addedNode) => {
        if (addedNode.nodeType === Node.ELEMENT_NODE) {
          const element = addedNode;
          if (!inlineAndIgnoreAndTextTags.includes(
            element.nodeName
          )) {
            if (element.classList.contains("notranslate")) {
            } else {
              if (!isDuplicateElement(element, allNewDynamicElements)) {
                currentNewDynamicElements.push(element);
                allNewDynamicElements.push(element);
                debounceTranslateNewDynamicNodes(ctx);
              }
            }
          }
        }
      });
    });
  });
  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
  });
  const titleElement = document.querySelector("title");
  if (titleElement) {
    titleMutationObserver = new MutationObserver(function(mutations) {
      if (mutations.length > 0) {
        const title = mutations[0].target.text;
        if (!title.includes(titleDelimiters)) {
          translateTitle(ctx).catch((e3) => {
            log_default.error(
              `translateTitle error:`,
              e3.name,
              e3.message,
              e3.details || ""
            );
          });
        }
      }
    });
    titleMutationObserver.observe(titleElement, {
      subtree: true,
      characterData: true,
      childList: true
    });
  }
}
async function initPage() {
  const ctx = await getGlobalContext(globalThis.location.href);
  log_default.debug(`context`, ctx);
  if (ctx.rule.urlChangeDelay) {
    await delay(ctx.rule.urlChangeDelay);
  }
  let lang = ctx.sourceLanguage;
  if (lang === "auto") {
    if (!isMonkey()) {
      lang = await detectTabLanguage();
    } else {
      lang = await detectLanguage({
        text: getMainText(document.body).slice(0, 1e3)
      });
    }
    if (lang === "auto") {
      lang = await detectPageLanguage();
    }
    setCurrentPageLanguage(lang);
  } else {
    setCurrentPageLanguageByClient(lang);
  }
  let isAutoTranslate = ctx.state.isAutoTranslate || ctx.isTranslateUrl || ctx.rule.isPdf;
  if (!isAutoTranslate && !ctx.isTranslateExcludeUrl) {
    log_default.debug(`detect page language: ${lang}`);
    if (isMatchLanguage(lang, ctx.config.translationLanguagePattern)) {
      isAutoTranslate = true;
      log_default.debug(`match language pattern ${lang}, auto translate`);
    }
  }
  if (isAutoTranslate) {
    globalContext.state.isAutoTranslate = true;
    await translatePage();
  } else {
    log_default.debug(`do not auto translate`);
  }
}
function disableMutatinObserver() {
  if (mutationObserver) {
    mutationObserver.disconnect();
    mutationObserver.takeRecords();
  }
  if (titleMutationObserver) {
    titleMutationObserver.disconnect();
    titleMutationObserver.takeRecords();
  }
}
function getPageStatus() {
  return pageStatus;
}

// messager.ts
var listeners2 = /* @__PURE__ */ new Map();
var Messager = class {
  constructor(fromType, debug = false) {
    this.logger = new Logger();
    if (debug) {
      this.logger.setLevel("debug");
    }
    this.fromType = fromType;
    if (!listeners2.has(fromType)) {
      listeners2.set(fromType, /* @__PURE__ */ new Map());
      browserAPI.runtime.onMessage.addListener(
        (message, sender, sendResponse) => {
          let from = message.from;
          const to = message.to;
          let tabId;
          let tabUrl;
          let tabActive;
          if (sender.tab && sender.tab.id) {
            tabId = sender.tab.id;
            from = `${from}:${tabId}`;
            tabUrl = sender.tab.url;
            tabActive = sender.tab.active;
          }
          this.logger.debug(
            `${message.to} received message [${message.payload.method}] from ${message.from}`,
            message.payload.data ? message.payload.data : " "
          );
          const parsedTo = parseType(to);
          const { type: toType, name: toName } = parsedTo;
          if (toType !== fromType) {
            return false;
          }
          const parsedMessageFrom = parseType(from);
          const currentListener = listeners2.get(toType);
          const connectionInfo = currentListener.get(toName);
          if (!connectionInfo) {
            this.logger.debug(`no message handler for ${toType}:${to}`);
            sendResponse({
              ok: false,
              errorName: "notActive",
              errorMessage: `${to} is not active, from ${from} ${message.payload.method}`
            });
            return false;
          }
          const { messageHandler, sync } = connectionInfo;
          const messageAuthor = {
            type: fromType,
            name: parsedMessageFrom.name,
            id: tabId,
            url: tabUrl,
            active: tabActive
          };
          if (sync) {
            try {
              const handlerResult = messageHandler(
                message.payload,
                messageAuthor
              );
              sendResponse({
                ok: true,
                data: handlerResult
              });
            } catch (e3) {
              sendResponse({
                ok: false,
                errorName: e3.name,
                errorMessage: e3.message,
                errorDetails: e3.details
              });
            }
            return false;
          } else {
            messageHandler(
              message.payload,
              messageAuthor
            ).then((data) => {
              sendResponse({
                ok: true,
                data
              });
            }).catch(
              (e3) => {
                sendResponse({
                  ok: false,
                  errorName: e3.name,
                  errorMessage: e3.message,
                  errorDetails: e3.details
                });
              }
            );
            return true;
          }
        }
      );
    }
  }
  getConnection(name, messageHandler, options) {
    let sync = false;
    if (options && options.sync) {
      sync = true;
    }
    const fromType = this.fromType;
    const currentListeners = listeners2.get(fromType);
    if (!currentListeners.has(name)) {
      const connection2 = new Connection(`${fromType}:${name}`, this.logger);
      listeners2.get(fromType).set(name, {
        messageHandler,
        sync,
        connectionInstance: connection2
      });
      return connection2;
    } else {
      return currentListeners.get(name).connectionInstance;
    }
  }
};
var Connection = class {
  constructor(from, logger) {
    this.from = from;
    this.logger = logger;
  }
  async sendMessage(to, messagePayload) {
    const parsedTo = parseType(to);
    const { type, id } = parsedTo;
    if (type !== "content_script") {
      const message = {
        to,
        from: this.from,
        payload: messagePayload
      };
      this.logger.debug(
        `${message.from} send message [${message.payload.method}] to ${message.to}`,
        message.payload.data ? message.payload.data : " "
      );
      const response = await browserAPI.runtime.sendMessage(message);
      return handleResponse(message, response, this.logger);
    } else {
      const message = {
        from: this.from,
        to,
        payload: messagePayload
      };
      this.logger.debug(
        `${message.from} send message [${message.payload.method}] to ${message.to}`,
        message.payload.data ? message.payload.data : " "
      );
      const response = await browserAPI.tabs.sendMessage(id, message);
      return handleResponse(message, response, this.logger);
    }
  }
};
function handleResponse(message, response, logger) {
  if (response.ok) {
    logger.debug(
      `${message.from} received response from ${message.to}:`,
      response.data ? response.data : " "
    );
    return response.data;
  } else {
    throw new CommonError(
      response.errorName || "UnknownError",
      response.errorMessage || "Unknown error",
      response.errorDetails
    );
  }
}
function parseType(str) {
  const parts = str.split(":");
  if (parts.length < 2) {
    throw new Error("not a valid to string");
  }
  const messageTo = {
    type: parts[0],
    name: parts[1]
  };
  if (parts[0] === "content_script") {
    const tabId = parseInt(parts[2]);
    if (!isNaN(tabId)) {
      messageTo.id = tabId;
    } else {
      throw new Error("tab id not a valid number");
    }
  }
  return messageTo;
}

// content_message_listeners.ts
var asyncMessageHandler = async function(payload, _author) {
  const { method, data } = payload;
  if (method === "translateTheWholePage") {
    await translateTheWholePage();
  } else if (method === "translateTheMainPage") {
    await translateTheMainPage();
  } else if (method === "translateToThePageEndImmediately") {
    await translateToThePageEndImmediately();
  } else if (method === "toggleTranslatePage") {
    await toggleTranslatePage();
  } else if (method === "toggleTranslateTheWholePage") {
    await toggleTranslateTheWholePage();
  } else if (method === "toggleTranslateTheMainPage") {
    await toggleTranslateTheMainPage();
  } else if (method === "translatePage") {
    await translatePage();
  } else if (method === "restorePage") {
    restorePage();
  } else if (method === "showTranslationOnly") {
    showTranslationOnly();
  } else if (method === "setCurrentPageLanguageByClient") {
    const { language } = data;
    setCurrentPageLanguageByClient(language);
  }
};
var connection;
function getConnection() {
  if (connection) {
    return connection;
  }
  const messenger = new Messager("content_script", false);
  connection = messenger.getConnection("main", asyncMessageHandler);
  return connection;
}

// browser_proxy.ts
async function sendMessage(options) {
  const c4 = getConnection();
  const response = await c4.sendMessage(
    "background:main",
    options
  );
  return response;
}
function request2(options) {
  if (isMonkey() || isDeno2()) {
    options.fetchPolyfill = globalThis.GM_fetch;
    return request(options);
  }
  return sendMessage({
    method: "fetch",
    data: options
  });
}
function getConfig2() {
  if (isMonkey()) {
    return getConfig();
  }
  return sendMessage(
    {
      method: "getConfig"
    }
  );
}
function detectLanguage(options) {
  if (options.text) {
    const chineseLike = detectChinese(options.text);
    if (chineseLike !== "auto") {
      return Promise.resolve(chineseLike);
    }
  } else {
    return Promise.resolve("auto");
  }
  if (isMonkey()) {
    const result = browserAPI.extra.detectLanguage(options.text);
    return Promise.resolve(result);
  }
  return sendMessage(
    {
      method: "detectLanguage",
      data: options
    }
  );
}
function detectTabLanguage() {
  return sendMessage(
    {
      method: "detectTabLanguage"
    }
  );
}
function sendPageTranslatedStatus(status) {
  if (isMonkey()) {
    const event = new CustomEvent("pageTranslatedStatus", {
      detail: status
    });
    document.dispatchEvent(event);
    return;
  }
  const c4 = getConnection();
  c4.sendMessage("popup:main_sync", {
    method: "setPageStatus",
    data: status
  }).catch((_e3) => {
  });
}
function queryDb(query) {
  if (isMonkey()) {
    return queryParagraphCache(query);
  }
  return sendMessage(
    {
      method: "queryParagraphCache",
      data: query
    }
  );
}
async function setDbStore(params) {
  if (isMonkey()) {
    await setParagraphCache(params);
    return;
  }
  return sendMessage(
    {
      method: "setParagraphCache",
      data: params
    }
  );
}
async function mockRequest() {
  if (isMonkey()) {
    return Promise.resolve();
  }
  await sendMessage({
    method: "mockRequest"
  });
  return;
}

// services/translation.ts
var Translation = class {
  constructor(serviceConfig, generalConfig) {
    this.maxTextLength = 1800;
    this.throttleLimit = 3;
    this.isSupportList = true;
    this.maxTextGroupLength = 200;
    this.serviceConfig = serviceConfig;
    this.generalConfig = generalConfig;
  }
  static getAllProps() {
    return [];
  }
  static getProps() {
    return [];
  }
  async init() {
  }
  getMaxTextGroupLength() {
    return this.maxTextGroupLength;
  }
  translate(_payload) {
    throw new Error("Not implemented");
  }
  translateList(_payload) {
    throw new Error("Not implemented");
  }
  async multipleTranslate(payload, everySentenceCallback) {
    if (payload.sentences.length === 0) {
      return {
        sentences: []
      };
    }
    const { sentences } = payload;
    const respondedSentences = [];
    let tempSentenceGroups = [];
    let currentSentenceIndex = 0;
    const sent = /* @__PURE__ */ new Set();
    let globalError = null;
    try {
      tempSentenceGroups = splitSentences(
        sentences,
        this.maxTextLength,
        this.maxTextGroupLength
      );
      log_default.debug(`tempSentenceGroups`, tempSentenceGroups);
    } catch (e3) {
      if (everySentenceCallback) {
        if (sent.has(currentSentenceIndex)) {
          currentSentenceIndex++;
        }
        for (let i4 = currentSentenceIndex; i4 < sentences.length; i4++) {
          const sentence = sentences[i4];
          everySentenceCallback(e3, null, sentence);
        }
        globalError = e3;
      } else {
        globalError = e3;
      }
    }
    const throttle = m2({
      limit: this.throttleLimit,
      interval: 1e3
    });
    for (let i4 = 0; i4 < tempSentenceGroups.length; i4++) {
      const tempSentenceGroup = tempSentenceGroups[i4];
      const url = tempSentenceGroup.url;
      const throttled = throttle(async () => {
        if (this.isSupportList) {
          const result2 = await this.translateList({
            text: tempSentenceGroup.tempSentences.map((item) => item.text),
            from: tempSentenceGroup.from,
            to: tempSentenceGroup.to,
            url
          });
          return result2;
        } else {
          const mergedText = tempSentenceGroup.tempSentences.map(
            (item) => item.text
          ).join(translationTextSeparator);
          const result2 = await this.translate({
            text: mergedText,
            from: tempSentenceGroup.from,
            to: tempSentenceGroup.to,
            url
          });
          const { text } = result2;
          const translatedTexts2 = text.split(
            translationTextSeparator
          );
          return {
            text: translatedTexts2,
            from: result2.from,
            to: result2.to
          };
        }
      });
      let result;
      try {
        result = await throttled();
      } catch (e3) {
        if (everySentenceCallback) {
          if (sent.has(currentSentenceIndex)) {
            currentSentenceIndex++;
          }
          for (let i5 = currentSentenceIndex; i5 < sentences.length; i5++) {
            const sentence = sentences[i5];
            everySentenceCallback(e3, null, sentence);
          }
          globalError = e3;
          continue;
        } else {
          globalError = e3;
          continue;
        }
      }
      const { text: translatedTexts } = result;
      for (let j5 = 0; j5 < translatedTexts.length; j5++) {
        try {
          const translatedText = translatedTexts[j5];
          const tempSentence = tempSentenceGroup.tempSentences[j5];
          const { index, prefix, suffix } = tempSentence;
          if (respondedSentences[index] === void 0) {
            respondedSentences[index] = {
              ...sentences[index],
              from: tempSentenceGroup.from,
              to: tempSentenceGroup.to,
              text: prefix + translatedText + suffix
            };
          } else {
            respondedSentences[index].text += prefix + translatedText + suffix;
          }
          if (index !== currentSentenceIndex) {
            if (everySentenceCallback) {
              sent.add(currentSentenceIndex);
              everySentenceCallback(
                null,
                respondedSentences[currentSentenceIndex],
                sentences[currentSentenceIndex]
              );
            }
          }
          currentSentenceIndex = index;
        } catch (e3) {
          if (everySentenceCallback) {
            if (sent.has(currentSentenceIndex)) {
              currentSentenceIndex++;
            }
            for (let i5 = currentSentenceIndex; i5 < sentences.length; i5++) {
              const sentence = sentences[i5];
              everySentenceCallback(e3, null, sentence);
            }
            throw e3;
          } else {
            throw e3;
          }
        }
      }
    }
    if (everySentenceCallback && !sent.has(currentSentenceIndex) && respondedSentences[currentSentenceIndex] && sentences[currentSentenceIndex]) {
      everySentenceCallback(
        null,
        respondedSentences[currentSentenceIndex],
        sentences[currentSentenceIndex]
      );
    }
    if (globalError) {
      throw globalError;
    }
    return {
      sentences: respondedSentences
    };
  }
  detectLanguageLocally(text) {
    return detectLanguage({
      text
    });
  }
  detectLanguageRemotely(_text) {
    return Promise.resolve("auto");
  }
  detectLanguage(text) {
    if (text.length >= 32) {
      return this.detectLanguageLocally(text);
    } else {
      return this.detectLanguageRemotely(text);
    }
  }
};

// services/tencent.ts
var langMap = [
  ["auto", "auto"],
  ["zh-CN", "zh"],
  ["zh-TW", "zh-TW"],
  ["de", "de"],
  ["en", "en"],
  ["es", "es"],
  ["fr", "fr"],
  ["id", "id"],
  ["it", "it"],
  ["ja", "jp"],
  ["ko", "kr"],
  ["ms", "ms"],
  ["pt", "pt"],
  ["ru", "ru"],
  ["th", "th"],
  ["tr", "tr"],
  ["vi", "vi"]
];
var _Tencent = class extends Translation {
  constructor(serviceConfig, generalConfig) {
    super(serviceConfig, generalConfig);
    this.secretId = "";
    this.secretKey = "";
    this.isSupportList = true;
    if (!serviceConfig || !serviceConfig.secretId || !serviceConfig.secretKey) {
      throw new Error("secretId and secretKey are required");
    }
    this.secretId = serviceConfig.secretId;
    this.secretKey = serviceConfig.secretKey;
  }
  static getUTCDate(dateObj) {
    const year = dateObj.getUTCFullYear();
    const month = `${dateObj.getUTCMonth() + 1}`.padStart(2, "0");
    const date = `${dateObj.getUTCDate()}`.padStart(2, "0");
    return `${year}-${month}-${date}`;
  }
  static getAllProps() {
    return [{
      name: "secretId",
      required: true,
      type: "text"
    }, {
      name: "secretKey",
      required: true,
      type: "password"
    }];
  }
  async translate(payload) {
    const { text, from, to } = payload;
    const RequestPayload = JSON.stringify({
      ProjectId: 0,
      Source: _Tencent.langMap.get(from),
      SourceText: text,
      Target: _Tencent.langMap.get(to)
    });
    const data = await this.signedRequest({
      secretId: this.secretId,
      secretKey: this.secretKey,
      action: "TextTranslate",
      payload: RequestPayload,
      service: "tmt",
      version: "2018-03-21"
    });
    return {
      text: data.Response.TargetText,
      from: _Tencent.langMapReverse.get(data.Response.Source) || from,
      to: _Tencent.langMapReverse.get(data.Response.Target) || to
    };
  }
  async translateList(payload) {
    const { text, from, to } = payload;
    const RequestPayload = JSON.stringify({
      ProjectId: 0,
      Source: _Tencent.langMap.get(from),
      SourceTextList: text,
      Target: _Tencent.langMap.get(to)
    });
    const data = await this.signedRequest({
      secretId: this.secretId,
      secretKey: this.secretKey,
      action: "TextTranslateBatch",
      payload: RequestPayload,
      service: "tmt",
      version: "2018-03-21"
    });
    return {
      text: data.Response.TargetTextList,
      from: _Tencent.langMapReverse.get(data.Response.Source) || from,
      to: _Tencent.langMapReverse.get(data.Response.Target) || to
    };
  }
  async signedRequest({
    secretId,
    secretKey,
    action,
    payload,
    service,
    version: version2
  }) {
    const host = `${service}.tencentcloudapi.com`;
    const now = new Date();
    const timestamp = `${new Date().valueOf()}`.slice(0, 10);
    const CanonicalRequest = [
      "POST",
      "/",
      "",
      "content-type:application/json; charset=utf-8",
      `host:${host}`,
      "",
      "content-type;host",
      await sha256(payload)
    ].join("\n");
    const datestamp = _Tencent.getUTCDate(now);
    const StringToSign = [
      "TC3-HMAC-SHA256",
      timestamp,
      `${datestamp}/${service}/tc3_request`,
      await sha256(CanonicalRequest)
    ].join("\n");
    const SecretDate = await hmacSha256ByString(datestamp, `TC3${secretKey}`);
    const SecretService = await hmacSha256ByArrayBuffer(
      service,
      SecretDate
    );
    const SecretSigning = await hmacSha256ByArrayBuffer(
      "tc3_request",
      SecretService
    );
    const Signature = await hmacSha256ByArrayBuffer(
      StringToSign,
      SecretSigning
    );
    const response = await request2({
      url: `https://${service}.tencentcloudapi.com`,
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Host: host,
        "X-TC-Action": action,
        "X-TC-Timestamp": timestamp,
        "X-TC-Region": "ap-beijing",
        "X-TC-Version": version2,
        Authorization: `TC3-HMAC-SHA256 Credential=${secretId}/${datestamp}/${service}/tc3_request, SignedHeaders=content-type;host, Signature=${Signature}`
      },
      body: payload
    });
    if (response instanceof Error) {
      throw response;
    } else {
      if (response.Response && response.Response.Error && response.Response.Error.Message) {
        throw new Error(
          response.Response.Error.Message
        );
      } else {
        return response;
      }
    }
  }
};
var Tencent = _Tencent;
Tencent.langMap = new Map(langMap);
Tencent.langMapReverse = new Map(
  langMap.map(([translatorLang, lang]) => [lang, translatorLang])
);

// services/google.ts
var langMap2 = [
  ["auto", "auto"],
  ["zh-CN", "zh-CN"],
  ["zh-TW", "zh-TW"],
  ["en", "en"],
  ["af", "af"],
  ["am", "am"],
  ["ar", "ar"],
  ["az", "az"],
  ["be", "be"],
  ["bg", "bg"],
  ["bn", "bn"],
  ["bs", "bs"],
  ["ca", "ca"],
  ["ceb", "ceb"],
  ["co", "co"],
  ["cs", "cs"],
  ["cy", "cy"],
  ["da", "da"],
  ["de", "de"],
  ["el", "el"],
  ["eo", "eo"],
  ["es", "es"],
  ["et", "et"],
  ["eu", "eu"],
  ["fa", "fa"],
  ["fi", "fi"],
  ["fr", "fr"],
  ["fy", "fy"],
  ["ga", "ga"],
  ["gd", "gd"],
  ["gl", "gl"],
  ["gu", "gu"],
  ["ha", "ha"],
  ["haw", "haw"],
  ["he", "he"],
  ["hi", "hi"],
  ["hmn", "hmn"],
  ["hr", "hr"],
  ["ht", "ht"],
  ["hu", "hu"],
  ["hy", "hy"],
  ["id", "id"],
  ["ig", "ig"],
  ["is", "is"],
  ["it", "it"],
  ["ja", "ja"],
  ["jw", "jw"],
  ["ka", "ka"],
  ["kk", "kk"],
  ["km", "km"],
  ["kn", "kn"],
  ["ko", "ko"],
  ["ku", "ku"],
  ["ky", "ky"],
  ["la", "la"],
  ["lb", "lb"],
  ["lo", "lo"],
  ["lt", "lt"],
  ["lv", "lv"],
  ["mg", "mg"],
  ["mi", "mi"],
  ["mk", "mk"],
  ["ml", "ml"],
  ["mn", "mn"],
  ["mr", "mr"],
  ["ms", "ms"],
  ["mt", "mt"],
  ["my", "my"],
  ["ne", "ne"],
  ["nl", "nl"],
  ["no", "no"],
  ["ny", "ny"],
  ["pa", "pa"],
  ["pl", "pl"],
  ["ps", "ps"],
  ["pt", "pt"],
  ["ro", "ro"],
  ["ru", "ru"],
  ["sd", "sd"],
  ["si", "si"],
  ["sk", "sk"],
  ["sl", "sl"],
  ["sm", "sm"],
  ["sn", "sn"],
  ["so", "so"],
  ["sq", "sq"],
  ["sr", "sr"],
  ["st", "st"],
  ["su", "su"],
  ["sv", "sv"],
  ["sw", "sw"],
  ["ta", "ta"],
  ["te", "te"],
  ["tg", "tg"],
  ["th", "th"],
  ["fil", "tl"],
  ["tr", "tr"],
  ["ug", "ug"],
  ["uk", "uk"],
  ["ur", "ur"],
  ["uz", "uz"],
  ["vi", "vi"],
  ["xh", "xh"],
  ["yi", "yi"],
  ["yo", "yo"],
  ["zu", "zu"]
];
var _Google = class extends Translation {
  constructor(serviceConfig, generalConfig) {
    super(serviceConfig, generalConfig);
    this.isSupportList = false;
    this.throttleLimit = 100;
  }
  async translate(payload) {
    const { text, from, to } = payload;
    if (!text)
      return { ...payload };
    const adaptedFrom = _Google.langMap.get(from) || "auto";
    const adaptedTo = _Google.langMap.get(to) || "zh-CN";
    const result = await this.fetchWithoutToken(text, adaptedFrom, adaptedTo);
    if (!result) {
      throw new Error("google translate NETWORK_ERROR");
    }
    if (!result.data[0] || result.data[0].length <= 0) {
      throw new Error("google translate API_SERVER_ERROR");
    }
    const transText = result.data[0].map((item) => item[0]).filter(Boolean).join("");
    return {
      text: transText,
      from: _Google.langMapReverse.get(result.data[2]) || "auto",
      to
    };
  }
  async fetchWithoutToken(text, from, to) {
    const url = `https://translate.googleapis.com/translate_a/single?` + new URLSearchParams({
      client: "gtx",
      dt: "t",
      sl: from,
      tl: to,
      q: text
    });
    const response = await request2({ url });
    return { data: response };
  }
};
var Google = _Google;
Google.langMap = new Map(langMap2);
Google.langMapReverse = new Map(
  langMap2.map(([translatorLang, lang]) => [lang, translatorLang])
);

// services/d/extractors.ts
function extractSplitSentences(response) {
  return response.result.texts;
}

// services/d/hacks.ts
function calculateValidTimestamp(timestamp, iCount) {
  return iCount ? timestamp + (iCount - timestamp % iCount) : timestamp;
}
function count(sentence, part) {
  return sentence.split(part).length - 1;
}
function generateTimestamp(sentences) {
  const now = Date.now();
  let iCount = 1;
  for (const sentence of sentences) {
    iCount += count(sentence, "i");
  }
  return calculateValidTimestamp(now, iCount);
}
function randRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateId() {
  const MIN = 1e6;
  const MAX = 1e8;
  return randRange(MIN, MAX);
}

// services/d/settings.ts
var API_URL = "https://www2.deepl.com/jsonrpc";
var AUTO = "auto";
var SUPPORTED_LANGUAGES = [
  { code: "BG", language: "Bulgarian" },
  { code: "ZH", language: "Chinese" },
  { code: "CS", language: "Czech" },
  { code: "DA", language: "Danish" },
  { code: "NL", language: "Dutch" },
  { code: "EN", language: "English" },
  { code: "ET", language: "Estonian" },
  { code: "FI", language: "Finnish" },
  { code: "FR", language: "French" },
  { code: "DE", language: "German" },
  { code: "EL", language: "Greek" },
  { code: "HU", language: "Hungarian" },
  { code: "IT", language: "Italian" },
  { code: "JA", language: "Japanese" },
  { code: "LV", language: "Latvian" },
  { code: "LT", language: "Lithuanian" },
  { code: "PL", language: "Polish" },
  { code: "PT", language: "Portuguese" },
  { code: "RO", language: "Romanian" },
  { code: "RU", language: "Russian" },
  { code: "SK", language: "Slovak" },
  { code: "SL", language: "Slovenian" },
  { code: "ES", language: "Spanish" },
  { code: "SV", language: "Swedish" }
];
var SUPPORTED_FORMALITY_TONES = ["formal", "informal"];

// services/d/generators.ts
function generateSplitSentencesRequestData(text, sourceLanguage = AUTO, identifier = generateId()) {
  return {
    jsonrpc: "2.0",
    method: "LMT_split_text",
    params: {
      commonJobParams: { "mode": "translate" },
      lang: {
        lang_user_selected: sourceLanguage,
        user_preferred_langs: []
      },
      texts: text
    },
    id: identifier
  };
}
function generateJobs(sentences, beams = 1) {
  const jobs = [];
  let id = 0;
  for (let i4 = 0; i4 < sentences.length; i4++) {
    const chunks = sentences[i4].chunks;
    for (let j5 = 0; j5 < chunks.length; j5++) {
      const chunk = chunks[j5];
      jobs.push({
        kind: "default",
        _index: i4,
        sentences: [{
          id,
          text: chunk.sentences[0].text,
          prefix: chunk.sentences[0].prefix
        }],
        raw_en_context_before: chunks.slice(0, id).map(
          (chunk2) => chunk2.sentences[0].text
        ),
        raw_en_context_after: id + 1 < chunks.length ? [chunks[id + 1].sentences[0].text] : [],
        preferred_num_beams: beams
      });
      id++;
    }
  }
  return jobs;
}
function splitedResultToArray(sentences) {
  return sentences.reduce((jobs, sentence) => {
    const chunks = sentence.chunks;
    for (const chunk of chunks) {
      jobs.push(chunk.sentences[0].text);
    }
    return jobs;
  }, []);
}
function generateCommonJobParams(formality) {
  if (!formality) {
    return {};
  }
  if (!SUPPORTED_FORMALITY_TONES.includes(formality)) {
    throw new Error("Formality tone '{formality_tone}' not supported.");
  }
  return { formality };
}
function generateTranslationRequestData(sourceLanguage, targetLanguage, sentences, identifier = generateId(), alternatives = 1, formality) {
  const allSentences = splitedResultToArray(sentences);
  return {
    jsonrpc: "2.0",
    method: "LMT_handle_jobs",
    params: {
      jobs: generateJobs(sentences, alternatives),
      lang: {
        user_preferred_langs: [targetLanguage, sourceLanguage],
        source_lang_computed: sourceLanguage,
        target_lang: targetLanguage
      },
      priority: 1,
      commonJobParams: generateCommonJobParams(formality),
      timestamp: generateTimestamp(splitedResultToArray(sentences))
    },
    id: identifier
  };
}

// services/d/utils.ts
function createAbbreviationsDictionary(languages5 = SUPPORTED_LANGUAGES) {
  return languages5.reduce((acc, lang) => {
    acc[lang.code.toLowerCase()] = lang.code;
    acc[lang.language.toLowerCase()] = lang.code;
    return acc;
  }, {});
}
function abbreviateLanguage(language) {
  return createAbbreviationsDictionary()[language.toLowerCase()];
}

// services/d/api.ts
var headers = {
  Accept: "*/*",
  "Accept-Language": "en-US;q=0.8,en;q=0.7",
  Authority: "www2.deepl.com",
  "Content-Type": "application/json",
  Origin: "https://www.deepl.com",
  Referer: "https://www.deepl.com/translator",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-site"
};
function stringifyJson(object) {
  return JSON.stringify(object).replace('"method":"', () => {
    const self2 = object;
    if ((self2.id + 3) % 13 === 0 || (self2.id + 5) % 29 === 0) {
      return '"method" : "';
    }
    return '"method": "';
  });
}
async function splitSentences2(text, sourceLanguage, identifier) {
  const data = generateSplitSentencesRequestData(
    text,
    sourceLanguage,
    identifier
  );
  return await request2(
    {
      method: "POST",
      url: API_URL + "?method=LMT_split_text",
      headers,
      body: stringifyJson(data)
    }
  );
}
async function requestTranslation(text, targetLanguage, sourceLanguage, identifier, alternatives, formalityTone) {
  const splitResult = await splitSentences2(
    text,
    sourceLanguage,
    identifier
  );
  const data = generateTranslationRequestData(
    sourceLanguage === "auto" ? splitResult.result.lang.detected : sourceLanguage,
    targetLanguage,
    extractSplitSentences(splitResult),
    identifier,
    alternatives,
    formalityTone
  );
  const jobsIndexes = data.params.jobs.map((job) => job._index);
  data.params.jobs = data.params.jobs.map((job) => {
    const newJob = { ...job };
    delete newJob._index;
    return newJob;
  });
  const response = await request2({
    method: "POST",
    url: API_URL + "?method=LMT_handle_jobs",
    body: stringifyJson(data),
    headers
  });
  const finalResult = {
    from: splitResult.result.lang.detected,
    to: targetLanguage,
    text: []
  };
  response.result.translations.forEach((translation, index) => {
    const jobIndex = jobsIndexes[index];
    if (finalResult.text[jobIndex] === void 0) {
      finalResult.text[jobIndex] = "";
    }
    const originalSentencePrefix = data.params.jobs[index].sentences[0].prefix;
    const originalSentencePre = data.params.jobs[index].sentences[0].prefix;
    finalResult.text[jobIndex] = finalResult.text[jobIndex] + originalSentencePrefix + translation.beams[0].sentences[0].text;
  });
  return finalResult;
}
async function translate(text, targetLanguage, sourceLanguage = AUTO, identifier, alternatives, formalityTone) {
  if (!text) {
    return {
      text: [],
      from: sourceLanguage,
      to: targetLanguage
    };
  }
  if (text && text.length === 1) {
    if (text[0] === "") {
      return {
        text: [""],
        from: sourceLanguage,
        to: targetLanguage
      };
    }
  }
  const response = requestTranslation(
    text,
    abbreviateLanguage(targetLanguage),
    abbreviateLanguage(sourceLanguage) ?? "auto",
    identifier,
    alternatives,
    formalityTone
  );
  return response;
}

// services/d/mod.ts
var langMap3 = [
  ["auto", "auto"],
  ["zh-CN", "ZH"],
  ["zh-TW", "ZH"],
  ["de", "DE"],
  ["en", "EN"],
  ["es", "ES"],
  ["fr", "FR"],
  ["it", "IT"],
  ["ja", "JA"],
  ["pt", "PT"],
  ["ru", "RU"],
  ["tr", "tr"]
];
var _D = class extends Translation {
  constructor(serviceConfig, generalConfig) {
    super(serviceConfig, generalConfig);
    this.maxTextGroupLength = 3;
    this.maxTextLength = 800;
    this.isSupportList = true;
  }
  async translateList(payload) {
    const { text, to, from } = payload;
    const result = await translate(
      text,
      _D.langMap.get(to),
      _D.langMap.get(from)
    );
    return {
      text: result.text,
      from: _D.langMapReverse.get(result.from),
      to: _D.langMapReverse.get(result.to)
    };
  }
};
var D7 = _D;
D7.langMap = new Map(langMap3);
D7.langMapReverse = new Map(
  langMap3.map(([translatorLang, lang]) => [lang, translatorLang])
);

// services/bai.ts
var RAW_LANGUAGES = [
  ["auto", "auto"],
  ["zh-CN", "zh"],
  ["en", "en"],
  ["yue", "yue"],
  ["wyw", "wyw"],
  ["ja", "jp"],
  ["ko", "kor"],
  ["fr", "fra"],
  ["es", "spa"],
  ["th", "th"],
  ["ar", "ara"],
  ["ru", "ru"],
  ["pt", "pt"],
  ["de", "de"],
  ["it", "it"],
  ["el", "el"],
  ["nl", "nl"],
  ["pl", "pl"],
  ["bg", "bul"],
  ["et", "est"],
  ["da", "dan"],
  ["fi", "fin"],
  ["cs", "cs"],
  ["ro", "rom"],
  ["sl", "slo"],
  ["sv", "swe"],
  ["hu", "hu"],
  ["zh-TW", "cht"],
  ["vi", "vie"]
];
var langMap4 = new Map(RAW_LANGUAGES);
var langMapReverse = new Map(
  RAW_LANGUAGES.map(([translatorLang, lang]) => [lang, translatorLang])
);

// services/transmart.ts
var langMap5 = [
  ["auto", "auto"],
  ["zh-CN", "zh"],
  ["zh-TW", "zh-TW"],
  ["de", "de"],
  ["en", "en"],
  ["es", "es"],
  ["fr", "fr"],
  ["id", "id"],
  ["it", "it"],
  ["ja", "jp"],
  ["ko", "kr"],
  ["ms", "ms"],
  ["pt", "pt"],
  ["ru", "ru"],
  ["th", "th"],
  ["tr", "tr"],
  ["vi", "vi"]
];
var API = "https://transmart.qq.com/api/imt";
var _Transmart = class extends Translation {
  constructor(serviceConfig, generalConfig) {
    super(serviceConfig, generalConfig);
    this.maxTextGroupLength = 50;
    this.maxTextLength = 1e3;
    this.throttleLimit = 1e3;
    this.isSupportList = false;
    this.clientKey = btoa(
      "transmart_crx_" + navigator.userAgent
    ).slice(0, 100);
  }
  async translate(payload) {
    const { text, to } = payload;
    const sourceLanguage = await this.detectLanguage(text);
    const remoteSourceLanguage = _Transmart.langMap.get(sourceLanguage) || sourceLanguage;
    const remoteTargetLanguage = _Transmart.langMap.get(to) || to;
    if (sourceLanguage === to) {
      return {
        text,
        from: sourceLanguage,
        to
      };
    }
    const requestPayload = JSON.stringify(
      {
        "header": {
          "fn": "auto_translation_block",
          "client_key": this.clientKey
        },
        "source": {
          "text_block": text,
          "lang": remoteSourceLanguage,
          "orig_url": payload.url
        },
        "target": { "lang": remoteTargetLanguage }
      }
    );
    const data = await request2({
      url: API,
      body: requestPayload,
      method: "POST"
    });
    if (data.header.ret_code !== "succ") {
      throw new Error(data.message || data.header.ret_code);
    }
    return {
      text: data.auto_translation,
      from: sourceLanguage || "auto",
      to
    };
  }
  async translateList(payload) {
    const { from, text, to } = payload;
    if (text.length === 1) {
      const result = await this.translate({
        from,
        text: text[0],
        to,
        url: payload.url
      });
      return {
        text: [result.text],
        from: result.from,
        to: result.to
      };
    }
    const sourceLanguage = await this.detectLanguage(text.join("\n"));
    if (sourceLanguage === to) {
      return {
        text,
        from: sourceLanguage,
        to
      };
    }
    const remoteSourceLanguage = _Transmart.langMap.get(sourceLanguage) || sourceLanguage;
    const remoteTargetLanguage = _Transmart.langMap.get(to) || to;
    const requestPayload = JSON.stringify(
      {
        "header": {
          "fn": "auto_translation",
          "client_key": this.clientKey
        },
        "source": {
          "text_list": text,
          "lang": remoteSourceLanguage,
          "orig_url": payload.url
        },
        "target": { "lang": remoteTargetLanguage },
        "type": "plain"
      }
    );
    const data = await request2({
      url: API,
      body: requestPayload,
      method: "POST"
    });
    if (data.header.ret_code !== "succ") {
      throw new Error(data.message || data.header.ret_code);
    }
    return {
      text: data.auto_translation,
      from: sourceLanguage || "auto",
      to
    };
  }
  detectLanguageLocally(text) {
    return this.detectLanguageRemotely(text);
  }
  async detectLanguageRemotely(text) {
    const payload = {
      "header": {
        "fn": "text_analysis",
        "client_key": this.clientKey
      },
      text: text.slice(0, 280)
    };
    const response = await request2({
      url: API,
      method: "POST",
      body: JSON.stringify(payload)
    });
    if (response.header.ret_code !== "succ") {
      throw new Error(response.message || response.header.ret_code);
    }
    const remoteLanguage = response.language;
    const language = _Transmart.langMapReverse.get(remoteLanguage);
    if (language) {
      return language;
    }
    return remoteLanguage;
  }
};
var Transmart = _Transmart;
Transmart.langMap = new Map(langMap5);
Transmart.langMapReverse = new Map(
  langMap5.map(([translatorLang, lang]) => [lang, translatorLang])
);

// utils/random.ts
function getRandomBoolean() {
  return Math.random() >= 0;
}

// services/mock.ts
var Mock = class extends Translation {
  constructor() {
    super(...arguments);
    this.isSupportList = true;
  }
  async translate(payload) {
    const { text } = payload;
    await mockRequest();
    await delay(5e3);
    const startSpaceLength = text.match(/^\s*/)[0].length;
    const mockText = text.slice(0, startSpaceLength) + "\u6A21\u62DF\uFF1A" + text.slice(startSpaceLength, -6);
    return {
      text: mockText,
      from: payload.from,
      to: payload.to
    };
  }
  async translateList(payload) {
    const { text: textList, from, to } = payload;
    await mockRequest();
    if (!getRandomBoolean()) {
      throw new Error("\u6A21\u62DF\u9519\u8BEF");
    }
    if (textList.length === 0) {
      return {
        from,
        to,
        text: [""]
      };
    }
    return {
      from,
      to,
      text: textList.map((text) => {
        const startSpaceLength = text.match(/^\s*/)[0].length;
        const mockText = text.slice(0, startSpaceLength) + "\u6A21\u62DF\uFF1A" + text.slice(startSpaceLength, -6);
        return mockText;
      })
    };
  }
};

// services/openl.ts
var rawLangMap = [
  ["auto", "auto"],
  ["zh-CN", "zh"],
  ["en", "en"],
  ["ja", "ja"],
  ["de", "de"],
  ["fr", "fr"],
  ["it", "it"],
  ["es", "es"],
  ["nl", "nl"],
  ["pl", "pl"],
  ["pt", "pt"],
  ["ru", "ru"]
];
var langMap6 = new Map(rawLangMap);
var langMapReverse2 = new Map(
  rawLangMap.map(([translatorLang, lang]) => [lang, translatorLang])
);
var _Openl = class extends Translation {
  constructor(serviceConfig, generalConfig) {
    super(serviceConfig, generalConfig);
    this.apikey = "";
    this.codename = _Openl.DEFAULT_CODENAME;
    this.isSupportList = false;
    this.maxTextGroupLength = 1;
    if (!serviceConfig || !serviceConfig.apikey) {
      throw new Error("apikey are required");
    }
    this.apikey = serviceConfig.apikey;
    if (serviceConfig.codename) {
      this.codename = serviceConfig.codename;
    }
  }
  static getAllProps() {
    const props = _Openl.getProps();
    return [
      ...props,
      {
        type: "password",
        name: "apikey",
        required: true
      }
    ];
  }
  static getProps() {
    return [{
      type: "select",
      name: "codename",
      label: "translationEngine",
      default: _Openl.DEFAULT_CODENAME,
      required: false,
      options: [
        {
          label: "translationServices.deepl",
          value: "deepl"
        },
        {
          label: "translationServices.youdao",
          value: "youdao"
        },
        {
          label: "translationServices.tencent",
          value: "tencent"
        },
        {
          label: "translationServices.aliyun",
          value: "aliyun"
        },
        {
          label: "translationServices.baidu",
          value: "baidu"
        },
        {
          label: "translationServices.caiyun",
          value: "caiyun"
        },
        {
          label: "translationServices.wechat",
          value: "wechat"
        },
        {
          label: "translationServices.azure",
          value: "azure"
        },
        {
          label: "translationServices.ibm",
          value: "ibm"
        },
        {
          label: "translationServices.aws",
          value: "aws"
        },
        {
          label: "translationServices.google",
          value: "google"
        }
      ]
    }];
  }
  async translate(payload) {
    const { text, from, to } = payload;
    const response = await request2(
      {
        url: `https://api.openl.club/services/${this.codename}/translate`,
        headers: {
          "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          apikey: this.apikey,
          text,
          source_lang: langMap6.get(from) || "auto",
          target_lang: langMap6.get(to)
        })
      }
    );
    if (response.status) {
      const result = response;
      return {
        text: result.result,
        from: langMapReverse2.get(result.source_lang),
        to: langMapReverse2.get(result.target_lang)
      };
    } else {
      throw new Error(response.msg);
    }
  }
};
var Openl = _Openl;
Openl.DEFAULT_CODENAME = "deepl";
var openl_default = Openl;

// services/deepl.ts
var rawLangMap2 = [
  ["auto", ""],
  ["zh-CN", "ZH"],
  ["zh-TW", "ZH"],
  ["en", "EN"],
  ["de", "DE"],
  ["fr", "FR"],
  ["it", "IT"],
  ["ja", "JA"],
  ["es", "ES"],
  ["nl", "NL"],
  ["pl", "PL"],
  ["pt", "PT"],
  ["ru", "RU"]
];
var langMap7 = new Map(rawLangMap2);
var langMapReverse3 = new Map(
  rawLangMap2.map(([translatorLang, lang]) => [lang, translatorLang])
);
var Deepl = class extends Translation {
  constructor(serviceConfig, generalConfig) {
    super(serviceConfig, generalConfig);
    this.authKey = "";
    this.maxTextGroupLength = 10;
    this.maxTextLength = 1200;
    if (!serviceConfig || !serviceConfig.authKey) {
      throw new Error("authKey are required");
    }
    this.authKey = serviceConfig.authKey;
  }
  static getAllProps() {
    return [{
      name: "authKey",
      required: true,
      type: "password"
    }];
  }
  async translateList(payload) {
    const { from, to, text } = payload;
    const bodyParams = {
      ["source_lang"]: langMap7.get(from),
      ["target_lang"]: langMap7.get(to)
    };
    const bodySearchParams = new URLSearchParams(bodyParams);
    text.forEach((item) => {
      bodySearchParams.append("text", item);
    });
    const body = bodySearchParams.toString();
    let deeplEndpoint = "https://api-free.deepl.com/v2/translate";
    if (!this.authKey.includes(":fx")) {
      deeplEndpoint = "https://api.deepl.com/v2/translate";
    }
    const response = await request2(
      {
        url: deeplEndpoint,
        method: "POST",
        body,
        headers: {
          Authorization: "DeepL-Auth-Key " + this.authKey,
          "content-type": "application/x-www-form-urlencoded"
        }
      }
    );
    const { translations: translations2 } = response;
    const resultText = translations2.map((t5) => t5.text);
    return {
      text: resultText,
      from: translations2[0] && langMapReverse3.get(translations2[0].detected_source_language) || from,
      to
    };
  }
};
var deepl_default = Deepl;

// services/volc/sign.ts
var unsignableHeaders = [
  "authorization",
  "content-type",
  "content-length",
  "user-agent",
  "presigned-expires",
  "expect"
];
var constant = {
  algorithm: "HMAC-SHA256",
  v4Identifier: "request",
  dateHeader: "X-Date",
  tokenHeader: "X-Security-Token",
  contentSha256Header: "X-Content-Sha256",
  notSignBody: "X-NotSignBody",
  kDatePrefix: "",
  credential: "X-Credential",
  algorithmKey: "X-Algorithm",
  signHeadersKey: "X-SignedHeaders",
  signQueriesKey: "X-SignedQueries",
  signatureKey: "X-Signature"
};
var uriEscape = (str) => {
  try {
    return encodeURIComponent(str).replace(/[^A-Za-z0-9_.~\-%]+/g, escape).replace(
      /[*]/g,
      (ch) => `%${ch.charCodeAt(0).toString(16).toUpperCase()}`
    );
  } catch (e3) {
    return "";
  }
};
var queryParamsToString = (params) => Object.keys(params).map((key) => {
  const val = params[key];
  if (typeof val === "undefined" || val === null) {
    return;
  }
  const escapedKey = uriEscape(key);
  if (!escapedKey) {
    return;
  }
  if (Array.isArray(val)) {
    return `${escapedKey}=${val.map(uriEscape).sort().join(`&${escapedKey}=`)}`;
  }
  return `${escapedKey}=${uriEscape(val)}`;
}).filter((v4) => v4).join("&");
var Signer = class {
  constructor(request3, serviceName, options) {
    this.request = request3;
    this.request.headers = request3.headers || {};
    this.serviceName = serviceName;
    options = options || {};
    this.bodySha256 = options.bodySha256;
    this.request.params = this.sortParams(this.request.params);
  }
  sortParams(params) {
    const newParams = {};
    if (params) {
      Object.keys(params).filter((key) => {
        const value = params[key];
        return typeof value !== "undefined" && value !== null;
      }).sort().map((key) => {
        newParams[key] = params[key];
      });
    }
    return newParams;
  }
  async addAuthorization(credentials, date) {
    const datetime = this.getDateTime(date);
    await this.addHeaders(credentials, datetime);
    this.request.headers["Authorization"] = await this.authorization(
      credentials,
      datetime
    );
  }
  async authorization(credentials, datetime) {
    const parts = [];
    const credString = this.credentialString(datetime);
    parts.push(
      `${constant.algorithm} Credential=${credentials.accessKeyId}/${credString}`
    );
    parts.push(`SignedHeaders=${this.signedHeaders()}`);
    parts.push(`Signature=${await this.signature(credentials, datetime)}`);
    return parts.join(", ");
  }
  async getSignUrl(credentials, date) {
    const datetime = this.getDateTime(date);
    let query = { ...this.request.params };
    const params = this.request.params;
    const headers2 = this.request.headers;
    if (credentials.sessionToken) {
      query[constant.tokenHeader] = credentials.sessionToken;
    }
    query[constant.dateHeader] = datetime;
    query[constant.notSignBody] = "";
    query[constant.credential] = `${credentials.accessKeyId}/${this.credentialString(datetime)}`;
    query[constant.algorithmKey] = constant.algorithm;
    query[constant.signHeadersKey] = "";
    query[constant.signQueriesKey] = void 0;
    query[constant.signatureKey] = void 0;
    query = this.sortParams(query);
    this.request.params = query;
    this.request.headers = {};
    const sig = await this.signature(credentials, datetime);
    this.request.params = params;
    this.request.headers = headers2;
    query[constant.signQueriesKey] = Object.keys(query).sort().join(";");
    query[constant.signatureKey] = sig;
    return queryParamsToString(query);
  }
  getDateTime(date) {
    return this.iso8601(date).replace(/[:\-]|\.\d{3}/g, "");
  }
  async addHeaders(credentials, datetime) {
    this.request.headers[constant.dateHeader] = datetime;
    if (credentials.sessionToken) {
      this.request.headers[constant.tokenHeader] = credentials.sessionToken;
    }
    if (this.request.body) {
      let body = this.request.body;
      this.request.headers[constant.contentSha256Header] = await sha256(body);
    }
  }
  async signature(credentials, datetime) {
    const signingKey = await this.getSigningKey(
      credentials,
      datetime.substr(0, 8),
      this.request.region,
      this.serviceName
    );
    return hex(await hmacSha256(await this.stringToSign(datetime), signingKey));
  }
  async stringToSign(datetime) {
    const parts = [];
    parts.push(constant.algorithm);
    parts.push(datetime);
    parts.push(this.credentialString(datetime));
    const x6 = await this.canonicalString();
    parts.push(
      await this.hexEncodedHash(x6)
    );
    const result = parts.join("\n");
    return result;
  }
  async canonicalString() {
    const parts = [], pathname = this.request.pathname || "/";
    parts.push(this.request.method.toUpperCase());
    parts.push(pathname);
    const queryString = queryParamsToString(this.request.params) || "";
    parts.push(queryString);
    parts.push(`${this.canonicalHeaders()}
`);
    parts.push(this.signedHeaders());
    parts.push(await this.hexEncodedBodyHash());
    const result = parts.join("\n");
    return result;
  }
  canonicalHeaders() {
    const headers2 = [];
    Object.keys(this.request.headers).forEach((key) => {
      headers2.push([key, this.request.headers[key]]);
    });
    headers2.sort((a5, b5) => a5[0].toLowerCase() < b5[0].toLowerCase() ? -1 : 1);
    const parts = [];
    headers2.forEach((item) => {
      const key = item[0].toLowerCase();
      if (this.isSignableHeader(key)) {
        const value = item[1];
        if (typeof value === "undefined" || value === null || typeof value.toString !== "function") {
          throw new Error(`Header ${key} contains invalid value`);
        }
        parts.push(`${key}:${this.canonicalHeaderValues(value.toString())}`);
      }
    });
    return parts.join("\n");
  }
  canonicalHeaderValues(values) {
    return values.replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "");
  }
  signedHeaders() {
    const keys = [];
    Object.keys(this.request.headers).forEach((key) => {
      key = key.toLowerCase();
      if (this.isSignableHeader(key)) {
        keys.push(key);
      }
    });
    return keys.sort().join(";");
  }
  signedQueries() {
    return Object.keys(this.request.params).join(";");
  }
  credentialString(datetime) {
    return this.createScope(
      datetime.substr(0, 8),
      this.request.region,
      this.serviceName
    );
  }
  async hexEncodedHash(str) {
    return await sha256(str);
  }
  async hexEncodedBodyHash() {
    if (this.request.headers[constant.contentSha256Header]) {
      return this.request.headers[constant.contentSha256Header];
    }
    if (this.request.body) {
      return await this.hexEncodedHash(queryParamsToString(this.request.body));
    }
    return await this.hexEncodedHash("");
  }
  isSignableHeader(key) {
    return unsignableHeaders.indexOf(key) < 0;
  }
  iso8601(date) {
    if (date === void 0) {
      date = new Date();
    }
    return date.toISOString().replace(/\.\d{3}Z$/, "Z");
  }
  async getSigningKey(credentials, date, region, service) {
    const kDate = await hmacSha256(
      date,
      `${constant.kDatePrefix}${credentials.secretKey}`
    );
    const kRegion = await hmacSha256(region, kDate);
    const kService = await hmacSha256(service, kRegion);
    return hmacSha256(constant.v4Identifier, kService);
  }
  createScope(date, region, serviceName) {
    return [date.substr(0, 8), region, serviceName, constant.v4Identifier].join(
      "/"
    );
  }
};

// services/volc/mod.ts
var rawLangMap3 = [
  ["af", "af"],
  ["am", "am"],
  ["ar", "ar"],
  ["az", "az"],
  ["be", "be"],
  ["bg", "bg"],
  ["bn", "bn"],
  ["bs", "bs"],
  ["ca", "ca"],
  ["co", "co"],
  ["cs", "cs"],
  ["cy", "cy"],
  ["da", "da"],
  ["de", "de"],
  ["el", "el"],
  ["en", "en"],
  ["eo", "eo"],
  ["es", "es"],
  ["et", "et"],
  ["eu", "eu"],
  ["fa", "fa"],
  ["fi", "fi"],
  ["fj", "fj"],
  ["fr", "fr"],
  ["fy", "fy"],
  ["ga", "ga"],
  ["gd", "gd"],
  ["gl", "gl"],
  ["gu", "gu"],
  ["ha", "ha"],
  ["he", "he"],
  ["hi", "hi"],
  ["hr", "hr"],
  ["ht", "ht"],
  ["hu", "hu"],
  ["hy", "hy"],
  ["id", "id"],
  ["ig", "ig"],
  ["is", "is"],
  ["it", "it"],
  ["ja", "ja"],
  ["ka", "ka"],
  ["kk", "kk"],
  ["km", "km"],
  ["kn", "kn"],
  ["ko", "ko"],
  ["ku", "ku"],
  ["ky", "ky"],
  ["la", "la"],
  ["lb", "lb"],
  ["lo", "lo"],
  ["lt", "lt"],
  ["lv", "lv"],
  ["mg", "mg"],
  ["mi", "mi"],
  ["mk", "mk"],
  ["ml", "ml"],
  ["mn", "mn"],
  ["mr", "mr"],
  ["ms", "ms"],
  ["mt", "mt"],
  ["my", "my"],
  ["ne", "ne"],
  ["nl", "nl"],
  ["no", "no"],
  ["ny", "ny"],
  ["pa", "pa"],
  ["pl", "pl"],
  ["ps", "ps"],
  ["pt", "pt"],
  ["ro", "ro"],
  ["ru", "ru"],
  ["sd", "sd"],
  ["si", "si"],
  ["sk", "sk"],
  ["sl", "sl"],
  ["sm", "sm"],
  ["sn", "sn"],
  ["so", "so"],
  ["sq", "sq"],
  ["sr", "sr"],
  ["st", "st"],
  ["su", "su"],
  ["sv", "sv"],
  ["sw", "sw"],
  ["ta", "ta"],
  ["te", "te"],
  ["tg", "tg"],
  ["th", "th"],
  ["tn", "tn"],
  ["to", "to"],
  ["tr", "tr"],
  ["ty", "ty"],
  ["ug", "ug"],
  ["uk", "uk"],
  ["ur", "ur"],
  ["uz", "uz"],
  ["vi", "vi"],
  ["xh", "xh"],
  ["yi", "yi"],
  ["yo", "yo"],
  ["zh-CN", "zh"],
  ["zh-TW", "zh-Hans"],
  ["zu", "zu"]
];
var langMap8 = new Map(rawLangMap3);
var langMapReverse4 = new Map(
  rawLangMap3.map(([translatorLang, lang]) => [lang, translatorLang])
);
var Volc = class extends Translation {
  constructor(serviceConfig, generalConfig) {
    super(serviceConfig, generalConfig);
    this.accessKeyId = "";
    this.secretAccessKey = "";
    this.maxTextGroupLength = 8;
    if (!serviceConfig || !serviceConfig.accessKeyId || !serviceConfig.secretAccessKey) {
      throw new Error("accessKeyId and secretAccessKey are required");
    }
    this.accessKeyId = serviceConfig.accessKeyId;
    this.secretAccessKey = serviceConfig.secretAccessKey;
  }
  static getAllProps() {
    return [{
      name: "accessKeyId",
      required: true,
      type: "text"
    }, {
      name: "secretAccessKey",
      required: true,
      type: "password"
    }];
  }
  async translateList(payload) {
    const { text, from, to } = payload;
    const remoteFrom = langMap8.get(from);
    const bodyParams = {
      "TargetLanguage": langMap8.get(to) || to,
      "TextList": text
    };
    if (remoteFrom) {
      bodyParams.SourceLanguage = remoteFrom;
    }
    const requestObj = {
      region: "cn-north-1",
      method: "POST",
      params: {
        "Action": "TranslateText",
        "Version": "2020-06-01"
      },
      pathname: "/",
      headers: {
        "Content-Type": "application/json",
        "host": "open.volcengineapi.com"
      },
      body: JSON.stringify(bodyParams)
    };
    const signer = new Signer(requestObj, "translate");
    await signer.addAuthorization({
      accessKeyId: this.accessKeyId,
      secretKey: this.secretAccessKey
    });
    const urlSearchParams = new URLSearchParams(requestObj.params);
    const response = await request2(
      {
        url: "https://open.volcengineapi.com" + requestObj.pathname + "?" + urlSearchParams.toString(),
        headers: signer.request.headers,
        method: requestObj.method,
        body: requestObj.body
      }
    );
    if (response.TranslationList) {
      const resultText = response.TranslationList.map((item) => item.Translation);
      let remoteFrom2 = from;
      if (response.TranslationList.length > 0) {
        if (response.TranslationList[0].DetectedSourceLanguage) {
          remoteFrom2 = langMapReverse4.get(
            response.TranslationList[0].DetectedSourceLanguage
          ) || from;
        }
      }
      return {
        text: resultText,
        from: remoteFrom2,
        to
      };
    } else {
      const error2 = response.ResponseMetaData.Error;
      throw new CommonError(error2.Code, error2.Message);
    }
  }
};
var mod_default = Volc;

// services/volc_alpha.ts
var rawLangMap4 = [
  ["auto", "detect"],
  ["af", "af"],
  ["am", "am"],
  ["ar", "ar"],
  ["az", "az"],
  ["be", "be"],
  ["bg", "bg"],
  ["bn", "bn"],
  ["bs", "bs"],
  ["ca", "ca"],
  ["co", "co"],
  ["cs", "cs"],
  ["cy", "cy"],
  ["da", "da"],
  ["de", "de"],
  ["el", "el"],
  ["en", "en"],
  ["eo", "eo"],
  ["es", "es"],
  ["et", "et"],
  ["eu", "eu"],
  ["fa", "fa"],
  ["fi", "fi"],
  ["fj", "fj"],
  ["fr", "fr"],
  ["fy", "fy"],
  ["ga", "ga"],
  ["gd", "gd"],
  ["gl", "gl"],
  ["gu", "gu"],
  ["ha", "ha"],
  ["he", "he"],
  ["hi", "hi"],
  ["hr", "hr"],
  ["ht", "ht"],
  ["hu", "hu"],
  ["hy", "hy"],
  ["id", "id"],
  ["ig", "ig"],
  ["is", "is"],
  ["it", "it"],
  ["ja", "ja"],
  ["ka", "ka"],
  ["kk", "kk"],
  ["km", "km"],
  ["kn", "kn"],
  ["ko", "ko"],
  ["ku", "ku"],
  ["ky", "ky"],
  ["la", "la"],
  ["lb", "lb"],
  ["lo", "lo"],
  ["lt", "lt"],
  ["lv", "lv"],
  ["mg", "mg"],
  ["mi", "mi"],
  ["mk", "mk"],
  ["ml", "ml"],
  ["mn", "mn"],
  ["mr", "mr"],
  ["ms", "ms"],
  ["mt", "mt"],
  ["my", "my"],
  ["ne", "ne"],
  ["nl", "nl"],
  ["no", "no"],
  ["ny", "ny"],
  ["pa", "pa"],
  ["pl", "pl"],
  ["ps", "ps"],
  ["pt", "pt"],
  ["ro", "ro"],
  ["ru", "ru"],
  ["sd", "sd"],
  ["si", "si"],
  ["sk", "sk"],
  ["sl", "sl"],
  ["sm", "sm"],
  ["sn", "sn"],
  ["so", "so"],
  ["sq", "sq"],
  ["sr", "sr"],
  ["st", "st"],
  ["su", "su"],
  ["sv", "sv"],
  ["sw", "sw"],
  ["ta", "ta"],
  ["te", "te"],
  ["tg", "tg"],
  ["th", "th"],
  ["tn", "tn"],
  ["to", "to"],
  ["tr", "tr"],
  ["ty", "ty"],
  ["ug", "ug"],
  ["uk", "uk"],
  ["ur", "ur"],
  ["uz", "uz"],
  ["vi", "vi"],
  ["xh", "xh"],
  ["yi", "yi"],
  ["yo", "yo"],
  ["zh-CN", "zh"],
  ["zh-TW", "zh-Hans"],
  ["zu", "zu"]
];
var langMap9 = new Map(rawLangMap4);
var langMapReverse5 = new Map(
  rawLangMap4.map(([translatorLang, lang]) => [lang, translatorLang])
);
var VolcAlpha = class extends Translation {
  constructor() {
    super(...arguments);
    this.maxTextGroupLength = 50;
    this.isSupportList = false;
  }
  async translate(payload) {
    const { text, from, to } = payload;
    const remoteFrom = langMap9.get(from) || "detect";
    const bodyParams = {
      "source_language": remoteFrom,
      "target_language": "zh",
      "text": text
    };
    const response = await request2(
      {
        url: "https://translate.volcengine.com/crx/translate/v1/",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyParams)
      }
    );
    if (response.base_resp && response.base_resp.status_code === 0) {
      const resultText = response.translation;
      let remoteFrom2 = from;
      if (response.detected_language) {
        remoteFrom2 = langMapReverse5.get(response.detected_language) || from;
      }
      return {
        text: resultText,
        from: remoteFrom2,
        to
      };
    } else {
      const error2 = response.base_resp;
      throw new CommonError(error2.status_code.toString(), error2.status_message);
    }
  }
};

// services/deeplx.ts
var rawLangMap5 = [
  ["auto", "auto"],
  ["zh-CN", "ZH"],
  ["zh-TW", "ZH"],
  ["de", "DE"],
  ["en", "EN"],
  ["es", "ES"],
  ["fr", "FR"],
  ["it", "IT"],
  ["ja", "JA"],
  ["pt", "PT"],
  ["ru", "RU"],
  ["tr", "tr"]
];
var langMap10 = new Map(rawLangMap5);
var Deeplx = class extends Translation {
  constructor(serviceConfig, generalConfig) {
    super(serviceConfig, generalConfig);
    this.url = "";
    this.isSupportList = false;
    this.maxTextGroupLength = 1;
    if (!serviceConfig || !serviceConfig.url) {
      throw new Error(
        "deeplx custom url are required, please check your settings."
      );
    }
    this.url = serviceConfig.url;
  }
  static getAllProps() {
    return [{
      name: "url",
      required: true,
      type: "text"
    }];
  }
  async translate(payload) {
    const { text, from, to } = payload;
    const response = await request2(
      {
        url: this.url,
        headers: {
          "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          source_lang: langMap10.get(from) || from,
          target_lang: langMap10.get(to) || to,
          text
        })
      }
    );
    const result = response;
    if (result.code === 200) {
      return {
        text: result.data,
        from,
        to
      };
    } else {
      throw new Error(result.message || result.message || "API Error");
    }
  }
};

// services/bing/api.js
var TRANSLATE_API_ROOT = "https://{s}bing.com";
var TRANSLATE_WEBSITE = TRANSLATE_API_ROOT + "/translator";
var TRANSLATE_API = TRANSLATE_API_ROOT + "/ttranslatev3";
var TRANSLATE_SPELL_CHECK_API = TRANSLATE_API_ROOT + "/tspellcheckv3";
var globalConfigStorageKey = "bingGlobalConfig";
var rawLangMap6 = [
  ["auto", "auto-detect"],
  ["ar", "ar"],
  ["ga", "ga"],
  ["et", "et"],
  ["bg", "bg"],
  ["is", "is"],
  ["pl", "pl"],
  ["bs", "bs-Latn"],
  ["fa", "fa"],
  ["da", "da"],
  ["de", "de"],
  ["ru", "ru"],
  ["fr", "fr"],
  ["zh-TW", "zh-Hant"],
  ["fil", "fil"],
  ["fj", "fj"],
  ["fi", "fi"],
  ["gu", "gu"],
  ["kk", "kk"],
  ["ht", "ht"],
  ["ko", "ko"],
  ["nl", "nl"],
  ["ca", "ca"],
  ["zh-CN", "zh-Hans"],
  ["cs", "cs"],
  ["kn", "kn"],
  ["otq", "otq"],
  ["tlh", "tlh"],
  ["hr", "hr"],
  ["lv", "lv"],
  ["lt", "lt"],
  ["ro", "ro"],
  ["mg", "mg"],
  ["mt", "mt"],
  ["mr", "mr"],
  ["ml", "ml"],
  ["ms", "ms"],
  ["mi", "mi"],
  ["bn", "bn-BD"],
  ["hmn", "mww"],
  ["af", "af"],
  ["pa", "pa"],
  ["pt", "pt"],
  ["ps", "ps"],
  ["ja", "ja"],
  ["sv", "sv"],
  ["sm", "sm"],
  ["sr-Latn", "sr-Latn"],
  ["sr-Cyrl", "sr-Cyrl"],
  ["no", "nb"],
  ["sk", "sk"],
  ["sl", "sl"],
  ["sw", "sw"],
  ["ty", "ty"],
  ["te", "te"],
  ["ta", "ta"],
  ["th", "th"],
  ["to", "to"],
  ["tr", "tr"],
  ["cy", "cy"],
  ["ur", "ur"],
  ["uk", "uk"],
  ["es", "es"],
  ["he", "iw"],
  ["el", "el"],
  ["hu", "hu"],
  ["it", "it"],
  ["hi", "hi"],
  ["id", "id"],
  ["en", "en"],
  ["yua", "yua"],
  ["yue", "yua"],
  ["vi", "vi"],
  ["ku", "ku"],
  ["km", "kmr"]
];
var langMap11 = new Map(rawLangMap6);
var langMapReverse6 = new Map(
  rawLangMap6.map(([translatorLang, lang]) => [lang, translatorLang])
);
var MAX_TEXT_LEN = 1e3;
var globalConfig;
var globalConfigPromise;
function replaceSubdomain(url, subdomain) {
  return url.replace("{s}", subdomain ? subdomain + "." : "");
}
async function isTokenExpired() {
  if (!globalConfig) {
    const storageValue = await browserAPI.storage.local.get(
      globalConfigStorageKey
    );
    if (storageValue) {
      globalConfig = storageValue[globalConfigStorageKey];
    }
    return true;
  }
  const { tokenTs, tokenExpiryInterval } = globalConfig;
  return Date.now() - tokenTs > tokenExpiryInterval;
}
async function fetchGlobalConfig() {
  let subdomain;
  let IG;
  let IID;
  let token;
  let key;
  let tokenExpiryInterval;
  let isVertical;
  let frontDoorBotClassification;
  let isSignedInOrCorporateUser;
  let cookie;
  try {
    const finalUrl = replaceSubdomain(TRANSLATE_WEBSITE, subdomain);
    const response = await request2({
      url: finalUrl,
      responseType: "raw"
    });
    const { body, headers: headers2, url } = response;
    subdomain = url.match(/^https?:\/\/(\w+)\.bing\.com/)[1];
    cookie = headers2["set-cookie"];
    IG = body.match(/IG:"([^"]+)"/)[1];
    IID = body.match(/data-iid="([^"]+)"/)[1];
    [
      key,
      token,
      tokenExpiryInterval,
      isVertical,
      frontDoorBotClassification,
      isSignedInOrCorporateUser
    ] = JSON.parse(
      body.match(/params_AbusePreventionHelper\s?=\s?([^\]]+\])/)[1]
    );
  } catch (e3) {
    console.error("failed to fetch global config", e3);
    throw e3;
  }
  globalConfig = {
    subdomain,
    IG,
    IID,
    key,
    token,
    tokenTs: key,
    tokenExpiryInterval,
    isVertical,
    frontDoorBotClassification,
    isSignedInOrCorporateUser,
    cookie,
    count: 0
  };
  await browserAPI.storage.local.set({
    [globalConfigStorageKey]: globalConfig
  });
  return globalConfig;
}
function makeRequestURL(isSpellCheck) {
  const { IG, IID, subdomain, isVertical } = globalConfig;
  return replaceSubdomain(
    isSpellCheck ? TRANSLATE_SPELL_CHECK_API : TRANSLATE_API,
    subdomain
  ) + "?isVertical=1" + (IG && IG.length ? "&IG=" + IG : "") + (IID && IID.length ? "&IID=" + IID + "." + globalConfig.count++ : "");
}
function makeRequestBody(isSpellCheck, text, fromLang, toLang) {
  const { token, key } = globalConfig;
  const body = {
    fromLang,
    text,
    token,
    key
  };
  if (!isSpellCheck && toLang) {
    body.to = toLang;
  }
  return body;
}
async function translate2(text, from, to) {
  if (!text || !(text = text.trim())) {
    return;
  }
  if (text.length > MAX_TEXT_LEN) {
    throw new Error(
      `The supported maximum length of text is ${MAX_TEXT_LEN}. Please shorten the text.`
    );
  }
  if (!globalConfigPromise) {
    globalConfigPromise = fetchGlobalConfig();
  }
  await globalConfigPromise;
  const isTokenExpiredValue = await isTokenExpired();
  if (isTokenExpiredValue) {
    globalConfigPromise = fetchGlobalConfig();
    await globalConfigPromise;
  }
  from = from || "auto";
  to = to || "zh-CN";
  from = langMap11.get(from) || from;
  to = langMap11.get(to) || to;
  const requestURL = makeRequestURL(false);
  const requestBody = makeRequestBody(
    false,
    text,
    from,
    to === "auto-detect" ? "zh-Hans" : to
  );
  const requestHeaders = {
    referer: replaceSubdomain(TRANSLATE_WEBSITE, globalConfig.subdomain),
    "content-type": "application/x-www-form-urlencoded"
  };
  const searchParams = new URLSearchParams(requestBody);
  const finalUrl = requestURL;
  const requestBodyString = searchParams.toString();
  const body = await request2({
    url: finalUrl,
    headers: requestHeaders,
    method: "POST",
    body: requestBodyString
  });
  if (body.ShowCaptcha || body.StatusCode === 401 || body.statusCode) {
    globalConfig = null;
    globalConfigPromise = null;
    await browserAPI.storage.local.remove(globalConfigStorageKey);
    if (body.ShowCaptcha) {
      throw new Error(`
      Sorry that bing translator seems to be asking for the captcha,
      Please take care not to request too frequently.
      The response code is ${body.StatusCode}.
    `);
    }
    if (body.StatusCode === 401) {
      throw new Error(`
      Max count of translation exceeded. Please try it again later.
      The response code is 401.
    `);
    }
    if (body.statusCode) {
      throw new Error(
        `Something went wrong! The response is ${JSON.stringify(body)}.`
      );
    }
  }
  const translation = body[0].translations[0];
  const detectedLang = body[0].detectedLanguage;
  const res = {
    text: translation.text,
    from: langMapReverse6.get(detectedLang.language),
    to: langMapReverse6.get(translation.to)
  };
  return res;
}

// services/bing/mod.ts
var Bing = class extends Translation {
  constructor(serviceConfig, generalConfig) {
    super(serviceConfig, generalConfig);
    this.isSupportList = false;
    this.maxTextLength = 1e3;
  }
  async translate(payload) {
    const { text, from, to } = payload;
    if (!text)
      return { ...payload };
    const result = await translate2(text, from, to);
    return result;
  }
};

// services/baidu.ts
var rawLangMap7 = [
  ["auto", "auto"],
  ["zh-CN", "zh"],
  ["en", "en"],
  ["yue", "yue"],
  ["wyw", "wyw"],
  ["ja", "jp"],
  ["ko", "kor"],
  ["fr", "fra"],
  ["es", "spa"],
  ["th", "th"],
  ["ar", "ara"],
  ["ru", "ru"],
  ["pt", "pt"],
  ["de", "de"],
  ["it", "it"],
  ["el", "el"],
  ["nl", "nl"],
  ["pl", "pl"],
  ["bg", "bul"],
  ["et", "est"],
  ["da", "dan"],
  ["fi", "fin"],
  ["cs", "cs"],
  ["ro", "rom"],
  ["sl", "slo"],
  ["sv", "swe"],
  ["hu", "hu"],
  ["zh-TW", "cht"],
  ["vi", "vie"]
];
var langMap12 = new Map(rawLangMap7);
var langMapReverse7 = new Map(
  rawLangMap7.map(([translatorLang, lang]) => [lang, translatorLang])
);
var Baidu = class extends Translation {
  constructor(serviceConfig, generalConfig) {
    super(serviceConfig, generalConfig);
    this.endpoint = "https://api.fanyi.baidu.com/api/trans/vip/translate";
    this.appid = "";
    this.key = "";
    this.isSupportList = false;
    if (!serviceConfig || !serviceConfig.appid || !serviceConfig.key) {
      throw new Error("appid and key are required");
    }
    this.appid = serviceConfig.appid;
    this.key = serviceConfig.key;
  }
  static getAllProps() {
    return [{
      name: "appid",
      required: true,
      type: "text"
    }, {
      name: "key",
      required: true,
      type: "password"
    }];
  }
  async translate(payload) {
    const salt = Date.now().toString();
    const { endpoint } = this;
    const { appid, key } = this;
    const { text, from, to } = payload;
    const params = new URLSearchParams({
      from: langMap12.get(from),
      to: langMap12.get(to),
      q: text,
      salt,
      appid,
      sign: md5(appid + text + salt + key)
    });
    const urlObj = new URL(endpoint);
    urlObj.search = params.toString();
    const data = await request2(
      {
        url: urlObj.toString()
      }
    );
    if (data.error_code) {
      console.error(
        new Error("[Baidu service]" + data.error_msg)
      );
      throw new CommonError(
        "API_SERVER_ERROR",
        data.error_msg
      );
    }
    const {
      trans_result: transResult,
      from: langDetected
    } = data;
    const transParagraphs = transResult.map(({ dst }) => dst);
    const detectedFrom = langMapReverse7.get(langDetected);
    return {
      from: detectedFrom,
      to,
      text: transParagraphs.join("\n")
    };
  }
};
var baidu_default = Baidu;

// services/caiyun.ts
var rawLangMap8 = [
  ["auto", "auto"],
  ["zh-CN", "zh"],
  ["en", "en"],
  ["ja", "ja"]
];
var langMap13 = new Map(rawLangMap8);
var Caiyun = class extends Translation {
  constructor(serviceConfig, generalConfig) {
    super(serviceConfig, generalConfig);
    this.token = "";
    if (!serviceConfig || !serviceConfig.token) {
      throw new Error("token are required");
    }
    this.token = serviceConfig.token;
  }
  static getAllProps() {
    return [{
      name: "token",
      required: true,
      type: "password"
    }];
  }
  async translateList(payload) {
    let { text, from, to } = payload;
    if (from === "auto") {
      from = await detectLanguage({ text: text.join(" ") });
    }
    const source = text;
    const response = await request2(
      {
        url: "https://api.interpreter.caiyunai.com/v1/translator",
        headers: {
          "content-type": "application/json",
          "x-authorization": "token " + this.token
        },
        method: "POST",
        body: JSON.stringify({
          source,
          trans_type: `${langMap13.get(from)}2${langMap13.get(to)}`
        })
      }
    );
    const result = response;
    return {
      text: result.target,
      from,
      to
    };
  }
};
var caiyun_default = Caiyun;

// services/youdao.ts
var rawLangMap9 = [
  ["auto", "auto"],
  ["en", "en"],
  ["ru", "ru"],
  ["pt", "pt"],
  ["es", "es"],
  ["zh-CN", "zh-CHS"],
  ["ja", "ja"],
  ["ko", "ko"],
  ["fr", "fr"],
  ["ar", "ar"],
  ["id", "id"],
  ["vi", "vi"],
  ["it", "it"]
];
var langMap14 = new Map(rawLangMap9);
var langMapReverse8 = new Map(
  rawLangMap9.map(([translatorLang, lang]) => [lang, translatorLang])
);
function truncate(q5) {
  const len = q5.length;
  if (len <= 20)
    return q5;
  return q5.substring(0, 10) + len + q5.substring(len - 10, len);
}
var Youdao = class extends Translation {
  constructor(serviceConfig, generalConfig) {
    super(serviceConfig, generalConfig);
    this.isSupportList = false;
    this.appId = "";
    this.appSecret = "";
    if (!serviceConfig || !serviceConfig.appId || !serviceConfig.appSecret) {
      throw new Error("appId and appSecret are required");
    }
    this.appId = serviceConfig.appId;
    this.appSecret = serviceConfig.appSecret;
  }
  static getAllProps() {
    return [{
      name: "appId",
      required: true,
      type: "text"
    }, {
      name: "appSecret",
      required: true,
      type: "password"
    }];
  }
  async translate(payload) {
    const { text, from, to } = payload;
    const salt = new Date().getTime();
    const curTime = Math.round(new Date().getTime() / 1e3);
    const str1 = this.appId + truncate(text) + salt + curTime + this.appSecret;
    const sign = await sha256(str1);
    const params = {
      q: text,
      appKey: this.appId,
      salt: salt.toString(),
      from: langMap14.get(from),
      to: langMap14.get(to),
      sign,
      signType: "v3",
      curtime: curTime.toString()
    };
    const urlSearchParams = new URLSearchParams(params);
    const res = await request2(
      {
        url: "https://openapi.youdao.com/api",
        method: "POST",
        body: urlSearchParams.toString(),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );
    const result = res;
    const l4 = result.l;
    const [remoteFrom, _2] = l4.split("2");
    return {
      text: result.translation.join("\n"),
      from: langMapReverse8.get(remoteFrom),
      to
    };
  }
};
var youdao_default = Youdao;

// services/mod.ts
var TranslationServices = {
  mock: {
    class: Mock,
    name: "Mock",
    homepage: "https://www.google.com"
  },
  mock2: {
    class: Mock,
    name: "Mock2",
    homepage: "https://www.google.com"
  },
  google: {
    class: Google,
    name: "Google",
    homepage: "https://translate.google.com/"
  },
  transmart: {
    class: Transmart,
    name: "Transmart",
    homepage: "https://transmart.qq.com/"
  },
  deepl: {
    class: deepl_default,
    name: "DeepL",
    homepage: "https://www.deepl.com/translator",
    docUrl: "https://hcfy.app/docs/services/deepl"
  },
  volc: {
    class: mod_default,
    name: "Volc",
    homepage: "https://www.volcengine.com/",
    docUrl: "https://hcfy.app/docs/services/hs-api"
  },
  volcAlpha: {
    class: VolcAlpha,
    name: "Volc Alpha",
    alpha: true,
    homepage: "https://www.volcengine.com/"
  },
  bing: {
    class: Bing,
    name: "Bing",
    homepage: "https://www.bing.com/translator"
  },
  tencent: {
    class: Tencent,
    name: "Tencent",
    homepage: "https://fanyi.qq.com/",
    docUrl: "https://hcfy.app/docs/services/qq-api"
  },
  baidu: {
    class: baidu_default,
    name: "Baidu",
    homepage: "https://fanyi.baidu.com/",
    docUrl: "https://hcfy.app/docs/services/baidu-api"
  },
  caiyun: {
    class: caiyun_default,
    name: "Caiyun",
    homepage: "https://fanyi.caiyunapp.com/",
    docUrl: "https://hcfy.app/docs/services/caiyun-api"
  },
  openl: {
    class: openl_default,
    name: "Openl",
    homepage: "https://openl.club/",
    docUrl: "https://docs.openl.club/"
  },
  youdao: {
    class: youdao_default,
    name: "Youdao",
    homepage: "https://fanyi.youdao.com/",
    docUrl: "https://hcfy.app/docs/services/youdao-api"
  },
  d: {
    class: D7,
    name: "Deepl(Alpha) ",
    alpha: true,
    homepage: "https://www.deepl.com/translator"
  },
  deeplx: {
    class: Deeplx,
    name: "DeepLX(Alpha)",
    alpha: true,
    homepage: "https://www.deepl.com/translator"
  }
};
function formatTranslationService(key, ctx) {
  const service = TranslationServices[key];
  const translationConfig = ctx.config.translationServices[key] || {};
  let ok = true;
  const allProps = service.class.getAllProps();
  if (allProps.length > 0) {
    const requiredProps = allProps.filter((prop) => prop.required);
    if (requiredProps.length > 0) {
      for (const prop of requiredProps) {
        if (!translationConfig[prop.name]) {
          ok = false;
          break;
        }
      }
    }
  }
  return {
    ...service,
    id: key,
    selected: ctx.translationService === key,
    ok,
    config: translationConfig,
    props: service.class.getProps(),
    allProps
  };
}
var allServiceKeys = Object.keys(
  TranslationServices
);
var getTranslationServices = (ctx) => {
  const { config } = ctx;
  const alpha = config.alpha;
  const debug = config.debug;
  return allServiceKeys.filter((key) => {
    const service = TranslationServices[key];
    if (key.startsWith("mock")) {
      if (debug) {
        return true;
      } else {
        return false;
      }
    }
    return !service.alpha || alpha || key === ctx.translationService;
  }).map((key) => {
    return formatTranslationService(key, ctx);
  });
};
async function translateSingleSentence(sentence, ctx) {
  if (!sentence.text) {
    return sentence;
  }
  const result = await translateMultipleSentences(
    {
      sentences: [sentence]
    },
    ctx
  );
  if (result.sentences.length > 0) {
    return {
      ...sentence,
      ...result.sentences[0]
    };
  }
  throw new CommonError("translateFailed", "translate failed");
}
async function translateMultipleSentences(payload, ctx, everySentenceCallback) {
  if (!payload.sentences.length) {
    return {
      ...payload
    };
  }
  const { config, translationService } = ctx;
  const generalConfig = config.translationGeneralConfig;
  const services = config.translationServices;
  const defaultTranslationEngine = translationService;
  const serviceConfig = services[defaultTranslationEngine] || {};
  payload.sentences = payload.sentences.map((sentence) => {
    return sentence;
  });
  const noCacheSentences = [];
  const finalResult = {
    sentences: Array(payload.sentences.length)
  };
  const sourceLength = payload.sentences.length;
  let sentenceIndex = -1;
  if (config.cache) {
    for (const sentence of payload.sentences) {
      sentenceIndex++;
      let cacheServiceKey = defaultTranslationEngine;
      if (defaultTranslationEngine === "openl") {
        cacheServiceKey = defaultTranslationEngine + "-" + serviceConfig.codename || openl_default.DEFAULT_CODENAME;
      }
      let res = null;
      try {
        res = await deadline(
          queryDb({
            originalText: sentence.text,
            from: sentence.from,
            to: sentence.to,
            service: cacheServiceKey
          }),
          1e3
        );
      } catch (e3) {
        log_default.warn("query cache DB error, but it's ok", e3);
      }
      if (res) {
        const result = {
          ...sentence,
          text: res.translatedText
        };
        finalResult.sentences[sentenceIndex] = result;
        if (everySentenceCallback) {
          everySentenceCallback(null, result, sentence);
        }
      } else {
        noCacheSentences.push(sentence);
      }
    }
  } else {
    noCacheSentences.push(...payload.sentences);
  }
  const resultLength = noCacheSentences.length;
  if (sourceLength - resultLength > 0) {
    log_default.debug(`use ${sourceLength - resultLength} sentences from cache`);
  }
  if (!noCacheSentences.length) {
    return finalResult;
  }
  let translator;
  try {
    translator = new TranslationServices[defaultTranslationEngine].class(
      serviceConfig,
      generalConfig
    );
    await translator.init();
  } catch (e3) {
    if (everySentenceCallback) {
      for (const sentence of noCacheSentences) {
        everySentenceCallback(e3, null, sentence);
      }
    }
    throw e3;
  }
  const noCacheResult = await translator.multipleTranslate(
    {
      sentences: noCacheSentences
    },
    (err, a5, b5) => {
      if (everySentenceCallback) {
        everySentenceCallback(err, a5, b5);
        if (!err && a5 && !defaultTranslationEngine.startsWith("mock") && config.cache) {
          let cacheServiceKey = defaultTranslationEngine;
          if (defaultTranslationEngine === "openl") {
            cacheServiceKey = defaultTranslationEngine + "-" + serviceConfig.codename || openl_default.DEFAULT_CODENAME;
          }
          if (config.cache) {
            deadline(
              setDbStore(
                {
                  translatedText: a5.text,
                  from: b5.from,
                  to: b5.to,
                  detectedFrom: a5.from,
                  key: md5(b5.text),
                  service: cacheServiceKey
                }
              ),
              3e3
            ).catch((e3) => {
              log_default.warn("set cache DB error", e3);
            });
          }
        }
      }
    }
  );
  for (const sentence of noCacheResult.sentences) {
    const index = finalResult.sentences.findIndex((s6) => !s6);
    if (index === -1) {
      throw new CommonError("translateFailed", "can not match the result");
    }
    finalResult.sentences[index] = sentence;
  }
  return finalResult;
}

// libs/preact-translation/utils.ts
function getResourceUrl(root2, lang) {
  return [root2, !root2 || root2.endsWith("/") ? "" : "/", lang, ".json"].join("");
}
function format(str, params) {
  let result = str;
  if (params) {
    Object.keys(params).forEach((key) => {
      const value = params[key];
      const template = new RegExp("{" + key + "}", "gm");
      result = result.replace(template, value.toString());
    });
  }
  return result;
}
function getValue(languageData, lang, key) {
  let localeData = languageData[lang];
  if (!localeData) {
    return key;
  }
  const keys = key.split(".");
  let propKey = "";
  do {
    propKey += keys.shift();
    const value = localeData[propKey];
    if (value !== void 0 && (typeof value === "object" || !keys.length)) {
      localeData = value;
      propKey = "";
    } else if (!keys.length) {
      localeData = key;
    } else {
      propKey += ".";
    }
  } while (keys.length);
  return localeData;
}
function t3(data, key, lang, fallbackLang, params) {
  if (!data.hasOwnProperty(lang)) {
    return key;
  }
  let value = getValue(data, lang, key);
  if (value === key && lang !== fallbackLang) {
    value = getValue(data, fallbackLang, key);
  }
  return format(value, params);
}

// libs/preact-translation/useTranslate.tsx
var cache = {};
var defaultOptions = {
  root: "",
  lang: "en",
  fallbackLang: "en"
};
function useTranslate(rawOptions, translations2) {
  const options = Object.assign(
    {},
    defaultOptions,
    rawOptions
  );
  cache = translations2 || cache;
  const [lang, setLang] = P2(options.lang);
  const [data, setData] = P2(cache);
  const [isReady, setReady] = P2(false);
  const loadData = (langKey) => {
    if (data.hasOwnProperty(langKey)) {
      return;
    }
    setReady(false);
    let url = getResourceUrl(options.root || "", langKey);
    if (options.getUrl) {
      url = options.getUrl(options.root || "", langKey);
      fetch(url).then((results) => results.json()).then((resource) => {
        cache[langKey] = resource;
        setData({ ...cache });
        setReady(true);
      }).catch((error2) => {
        setData({ ...cache });
        setReady(true);
      });
    }
  };
  j2(() => {
    loadData(options.fallbackLang || "en");
    loadData(lang);
  }, [lang]);
  const t5 = (key, params) => {
    if (!data.hasOwnProperty(lang)) {
      return key;
    }
    let value = getValue(data, lang, key);
    if (value === key && lang !== options.fallbackLang) {
      value = getValue(data, options.fallbackLang, key);
    }
    return format(value, params);
  };
  return { lang, setLang, t: t5, isReady };
}

// libs/preact-translation/translateProvider.tsx
var TranslateContext = ce(null);
var defaultOptions2 = {
  root: "assets",
  lang: "en",
  fallbackLang: "en"
};
var TranslateProvider = (props) => {
  const { t: t5, setLang, lang, isReady } = useTranslate(
    {
      root: props.root || defaultOptions2.root,
      lang: props.lang || defaultOptions2.lang,
      fallbackLang: props.fallbackLang || defaultOptions2.fallbackLang,
      getUrl: props.getUrl
    },
    props.translations
  );
  return /* @__PURE__ */ p6(TranslateContext.Provider, {
    value: {
      t: t5,
      setLang,
      lang,
      isReady
    },
    children: props.children
  });
};

// hooks/use_i18n.ts
function useI18n() {
  return M2(TranslateContext);
}

// utils/languages.ts
var getLanguages = () => {
  return languages.filter((lang) => {
    return lang !== "auto";
  });
};

// components/nav_left.tsx
function NavLeft(props) {
  return /* @__PURE__ */ p6("div", {
    class: "nav-left",
    children: [
      /* @__PURE__ */ p6("div", {
        class: "title",
        children: props.title
      }),
      /* @__PURE__ */ p6("div", {
        class: "description",
        children: props.description
      })
    ]
  });
}

// components/select_link.tsx
function SelectLink(props) {
  let { items, maxWidth } = props;
  maxWidth = maxWidth || 128;
  return /* @__PURE__ */ p6("select", {
    autoComplete: "off",
    class: "min-select",
    style: { maxWidth: `${maxWidth}px` },
    value: items.find((item) => item.selected)?.value,
    onChange: (e3) => {
      const value = e3.target.value;
      const item = items.find((item2) => item2.value === value);
      if (item) {
        item.onSelected(item);
      }
    },
    children: items.map((item) => /* @__PURE__ */ p6("option", {
      value: item.value,
      selected: item.selected,
      children: item.label
    }))
  });
}

// components/input_row.tsx
function InputRow(props) {
  const { t: t5 } = useI18n();
  return /* @__PURE__ */ p6("div", {
    class: "input-row",
    children: [
      /* @__PURE__ */ p6("div", {
        class: "input-left",
        children: /* @__PURE__ */ p6("label", {
          for: props.field.name,
          children: [
            props.field.label ? t5(props.field.label) : props.field.name,
            "\uFF1A"
          ]
        })
      }),
      /* @__PURE__ */ p6("div", {
        class: "input-right",
        children: /* @__PURE__ */ p6("input", {
          required: props.field.required,
          placeholder: props.field.name,
          class: "input",
          value: props.value,
          type: props.type,
          onChange: (e3) => {
            props.onChange(e3.target.value);
          }
        })
      })
    ]
  });
}

// components/option_field.tsx
function OptionField(props) {
  let { field, root: root2, onChange, value } = props;
  value = value || field.default || "";
  const { t: t5 } = useI18n();
  if (field.type === "select") {
    return /* @__PURE__ */ p6("div", {
      class: "flex justify-end mb-2",
      children: [
        /* @__PURE__ */ p6("label", {
          class: "engine",
          children: [
            field.label ? t5(field.label) : field.name,
            "\uFF1A"
          ]
        }),
        /* @__PURE__ */ p6(SelectLink, {
          items: field.options.map(
            (fieldOption) => {
              return {
                label: `${fieldOption.label ? t5(fieldOption.label) : fieldOption.value}`,
                value: value ?? "",
                selected: value === fieldOption.value,
                onSelected: () => {
                  onChange(fieldOption.value);
                }
              };
            }
          )
        })
      ]
    });
  } else if (field.type === "text") {
    return /* @__PURE__ */ p6("div", {
      children: /* @__PURE__ */ p6(InputRow, {
        field,
        value,
        type: field.type,
        onChange
      })
    });
  } else if (field.type === "password") {
    return /* @__PURE__ */ p6("div", {
      children: /* @__PURE__ */ p6(InputRow, {
        field,
        value,
        type: field.type,
        onChange
      })
    });
  } else {
    return null;
  }
}

// components/always_lang.tsx
function AlwaysLang(props) {
  const { t: t5 } = useI18n();
  return /* @__PURE__ */ p6("details", {
    role: "list",
    class: "nav-right",
    children: [
      /* @__PURE__ */ p6("summary", {
        "aria-haspopup": "listbox",
        children: t5("edit")
      }),
      /* @__PURE__ */ p6("ul", {
        role: "listbox",
        class: "option-list",
        children: props.options.map((item) => {
          return /* @__PURE__ */ p6("li", {
            children: /* @__PURE__ */ p6("label", {
              children: [
                /* @__PURE__ */ p6("input", {
                  type: "checkbox",
                  onChange: () => {
                    props.onToggleAlwaysLangs(item.checked, item.value);
                  },
                  value: item.value,
                  checked: item.checked
                }),
                t5(`languages.${item.value}`)
              ]
            })
          });
        })
      })
    ]
  });
}

// components/url_list.tsx
function UrlList(props) {
  const { t: t5 } = useI18n();
  return /* @__PURE__ */ p6("div", {
    children: props.urls.map((item, i4) => {
      return /* @__PURE__ */ p6("div", {
        class: "url-list",
        children: [
          /* @__PURE__ */ p6("div", {
            class: "url-left",
            children: [
              /* @__PURE__ */ p6("div", {
                class: "url-name height-tight",
                children: item
              }),
              /* @__PURE__ */ p6("div", {
                class: "description text-1 height-tight",
                children: item
              })
            ]
          }),
          /* @__PURE__ */ p6("nav", {
            children: /* @__PURE__ */ p6("ul", {
              children: /* @__PURE__ */ p6("li", {
                children: /* @__PURE__ */ p6("details", {
                  role: "list",
                  dir: "rtl",
                  children: [
                    /* @__PURE__ */ p6("summary", {
                      "aria-haspopup": "listbox",
                      role: "link"
                    }),
                    /* @__PURE__ */ p6("ul", {
                      class: "delete",
                      role: "listbox",
                      children: [
                        /* @__PURE__ */ p6("li", {
                          children: /* @__PURE__ */ p6("a", {
                            onClick: (e3) => {
                              props.onEditUrl(item, props.type, i4);
                            },
                            children: t5("edit")
                          })
                        }),
                        /* @__PURE__ */ p6("li", {
                          children: /* @__PURE__ */ p6("a", {
                            onClick: (e3) => {
                              props.onDeleteUrl(item, props.type);
                            },
                            children: t5("delete")
                          })
                        })
                      ]
                    })
                  ]
                })
              })
            })
          })
        ]
      }, "menu" + i4);
    })
  });
}

// components/add_url_modal.tsx
function AddUrlModal(props) {
  const { t: t5 } = useI18n();
  const textInput = w2(null);
  const validURL = (str) => {
  };
  return /* @__PURE__ */ p6("dialog", {
    id: "modal-example",
    open: true,
    children: /* @__PURE__ */ p6("article", {
      class: "add-modal",
      children: [
        /* @__PURE__ */ p6("a", {
          href: "#close",
          "aria-label": "Close",
          class: "close",
          "data-target": "modal-example",
          onClick: props.toggleModal
        }),
        /* @__PURE__ */ p6("div", {
          class: "add-text",
          children: t5("add url")
        }),
        /* @__PURE__ */ p6("input", {
          placeholder: "URL",
          ref: textInput,
          value: props.urlValue
        }),
        /* @__PURE__ */ p6("div", {
          class: "flex",
          children: [
            /* @__PURE__ */ p6("div", {
              class: "footer-button",
              children: /* @__PURE__ */ p6("a", {
                href: "#cancel",
                role: "button",
                class: "full-button secondary margin-right",
                "data-target": "modal-example",
                onClick: props.toggleModal,
                children: t5("cancel")
              })
            }),
            /* @__PURE__ */ p6("div", {
              class: "footer-button",
              children: /* @__PURE__ */ p6("a", {
                href: "#confirm",
                role: "button",
                class: "full-button margin-left",
                "data-target": "modal-example",
                onClick: (e3) => {
                  e3.preventDefault();
                  if (textInput.current && textInput.current.value) {
                    if (props.onSubmitAddUrl) {
                      if (props.urlValue !== "") {
                        props.onSubmitAddUrl(
                          textInput.current.value,
                          props.index,
                          props.type,
                          "edit"
                        );
                        return;
                      }
                      props.onSubmitAddUrl(
                        textInput.current.value,
                        props.index,
                        props.type
                      );
                      return;
                    } else if (props.onAddInterfaceUrl) {
                      if (props.urlValue !== "") {
                        props.onAddInterfaceUrl(
                          textInput.current.value,
                          "edit"
                        );
                        return;
                      }
                      props.onAddInterfaceUrl(
                        textInput.current.value
                      );
                    }
                  }
                },
                children: t5("confirm")
              })
            })
          ]
        })
      ]
    })
  });
}

// pages/general.tsx
var languages2 = getLanguages();
function General() {
  const { t: t5 } = useI18n();
  const [settings, setSettings, _isPersistent, _error] = useUserConfig();
  const [config, setConfig] = P2(null);
  const [ctx, setContext] = P2(null);
  const [matchesIndex, setMatchesIndex] = P2(0);
  const [isShowAddUrlModal, setIsShowAddUrlModal] = P2(
    false
  );
  const [isShowNeverUrlModal, setIsShowNeverUrlModal] = P2(
    false
  );
  const [urlValue, setUrlValue] = P2("");
  const [langsArr, setLangsArr] = P2([]);
  let translationServiceItems = [];
  if (ctx) {
    translationServiceItems = getTranslationServices(ctx);
  }
  let currentTranslationServiceConfig = null;
  let curentTranslationServiceItem = null;
  let alwaysTranslatedLangs = [];
  if (config && ctx) {
    const { translationService, translationServices } = config;
    if (TranslationServices[translationService]) {
      curentTranslationServiceItem = formatTranslationService(
        translationService,
        ctx
      );
    }
    if (translationServices && translationServices[translationService]) {
      currentTranslationServiceConfig = translationServices[translationService] || {};
    } else {
      currentTranslationServiceConfig = {};
    }
    alwaysTranslatedLangs = languages2.map((lang) => {
      if (config.translationLanguagePattern.matches.includes(lang)) {
        return {
          checked: true,
          value: lang
        };
      } else {
        return {
          checked: false,
          value: lang
        };
      }
    });
  }
  j2(() => {
    v3("esc", () => {
      setIsShowAddUrlModal(false);
      setIsShowNeverUrlModal(false);
    });
    getConfig().then((config2) => {
      setConfig(config2);
      log_default.debug(config2);
      setLangsArr(() => {
        return [...config2.translationLanguagePattern.matches];
      });
    });
    return () => {
      v3.unbind("esc");
    };
  }, []);
  j2(() => {
    getConfig().then((config2) => {
      setConfig(config2);
    });
  }, [settings]);
  j2(() => {
    if (config) {
      getContext({
        url: "http://localhost",
        config
      }).then((ctx2) => {
        setContext(ctx2);
      });
    }
  }, [config]);
  const selectService = (service) => {
    setSettings((state) => {
      return { ...state, translationService: service };
    });
  };
  const handleChangeValue = (value) => {
    setSettings(() => {
      return {
        ...value
      };
    });
  };
  const handleReset = (e3) => {
    e3.preventDefault();
    setLangsArr([]);
    handleChangeValue(getEnvUserConfig());
    success(t5("resetSuccess"));
  };
  const selectTargetLanguage = (lang) => {
    setSettings((state) => {
      return { ...state, targetLanguage: lang };
    });
  };
  const onToggleAlwaysLangs = (checked, value) => {
    let currentMatches = [];
    const pattern = settings.translationLanguagePattern;
    if (pattern && pattern.matches) {
      currentMatches = pattern.matches;
    }
    let newMatches = [...currentMatches];
    if (checked) {
      newMatches = removeFromArray(value, currentMatches);
    } else {
      newMatches = addToUniqueArray(value, currentMatches);
    }
    setLangsArr(() => {
      return [...newMatches];
    });
    setSettings((state) => {
      return {
        ...state,
        translationLanguagePattern: {
          ...state.translationLanguagePattern,
          matches: newMatches
        }
      };
    });
  };
  const toggleAddUrlModal = (type) => {
    if (type === "matches") {
      setIsShowAddUrlModal(!isShowAddUrlModal);
    } else {
      setIsShowNeverUrlModal(!isShowNeverUrlModal);
    }
  };
  const onSubmitAddUrl = (url, index, type, action) => {
    toggleAddUrlModal(type);
    setSettings((state) => {
      const pattern = settings.translationUrlPattern;
      let currentMatches = [];
      let currentExcludeMatches = [];
      if (pattern && pattern.matches && pattern.excludeMatches) {
        currentMatches = pattern.matches;
        currentExcludeMatches = pattern.excludeMatches;
      }
      let newMatches = [...currentMatches];
      let newExcludeMatches = [...currentExcludeMatches];
      if (action === "edit") {
        if (type === "matches") {
          newMatches[index] = url;
        } else {
          newExcludeMatches[index] = url;
        }
      }
      if (type === "matches") {
        newMatches = addToUniqueArray(url, newMatches);
        newExcludeMatches = removeFromArray(url, currentExcludeMatches);
      } else {
        newMatches = removeFromArray(url, currentMatches);
        newExcludeMatches = addToUniqueArray(url, newExcludeMatches);
      }
      return {
        ...state,
        translationUrlPattern: {
          ...state.translationUrlPattern,
          matches: newMatches,
          excludeMatches: newExcludeMatches
        }
      };
    });
  };
  const onDeleteUrl = (url, type) => {
    setSettings((state) => {
      const pattern = settings.translationUrlPattern;
      let currentMatches = [];
      if (type === "matches") {
        if (pattern && pattern.matches) {
          currentMatches = pattern.matches;
        }
      } else {
        if (pattern && pattern.excludeMatches) {
          currentMatches = pattern.excludeMatches;
        }
      }
      let newMatches = [...currentMatches];
      newMatches = removeFromArray(url, newMatches);
      return {
        ...state,
        translationUrlPattern: {
          ...state.translationUrlPattern,
          [type]: newMatches
        }
      };
    });
  };
  const onEditUrl = (url, type, index) => {
    toggleAddUrlModal(type);
    setUrlValue(url);
    setMatchesIndex(index);
  };
  if (!config) {
    return /* @__PURE__ */ p6("div", {
      children: "loading"
    });
  }
  return /* @__PURE__ */ p6("div", {
    children: [
      /* @__PURE__ */ p6("div", {
        class: "nav",
        children: [
          /* @__PURE__ */ p6("strong", {
            class: "text-lg",
            children: t5("general")
          }),
          /* @__PURE__ */ p6("a", {
            class: "text-sm",
            href: "#",
            onClick: handleReset,
            children: t5("reset")
          })
        ]
      }),
      /* @__PURE__ */ p6("div", {
        class: "nav",
        children: [
          /* @__PURE__ */ p6(NavLeft, {
            title: t5("target"),
            description: t5("translate other languages into specific language")
          }),
          /* @__PURE__ */ p6("select", {
            class: "select",
            onChange: (e3) => {
              e3.preventDefault();
              selectTargetLanguage(e3.target.value);
            },
            children: languages2.filter((code2) => code2 !== "auto").map((item) => {
              return /* @__PURE__ */ p6("option", {
                value: item,
                selected: item === config.targetLanguage,
                children: t5(`languages.${item}`)
              });
            })
          })
        ]
      }),
      /* @__PURE__ */ p6("div", {
        class: "nav",
        children: [
          /* @__PURE__ */ p6(NavLeft, {
            title: t5("service"),
            description: t5("select translation service")
          }),
          /* @__PURE__ */ p6("select", {
            class: "select",
            onChange: (e3) => {
              e3.preventDefault();
              selectService(e3.target.value);
            },
            children: translationServiceItems.map((item) => {
              return /* @__PURE__ */ p6("option", {
                value: item.id,
                selected: item.id === config.translationService,
                children: `${t5("translationServices." + item.id)}`
              });
            })
          })
        ]
      }),
      curentTranslationServiceItem && curentTranslationServiceItem.docUrl ? /* @__PURE__ */ p6("div", {
        class: "flex",
        children: [
          /* @__PURE__ */ p6("a", {
            class: "pb-1 docUrl",
            href: curentTranslationServiceItem.homepage,
            children: t5(`translationServices.${curentTranslationServiceItem.id}`)
          }),
          "\xA0",
          /* @__PURE__ */ p6("div", {
            class: "description pb-1",
            children: t5("please refer to")
          }),
          /* @__PURE__ */ p6("a", {
            class: "pb-1 docUrl",
            href: curentTranslationServiceItem.docUrl,
            children: t5("Key Application and Configuration Tutorial")
          }),
          /* @__PURE__ */ p6("div", {
            class: "description pb-1",
            children: t5("for details")
          })
        ]
      }) : null,
      currentTranslationServiceConfig && curentTranslationServiceItem && curentTranslationServiceItem.allProps.length > 0 && curentTranslationServiceItem.allProps.map((prop) => {
        return /* @__PURE__ */ p6(OptionField, {
          field: prop,
          value: currentTranslationServiceConfig[prop.name],
          onChange: (value) => {
            setSettings((state) => {
              const currentServices = state.translationServices || {};
              const currentServiceConfig = currentServices[curentTranslationServiceItem.id] || {};
              return {
                ...state,
                translationServices: {
                  ...currentServices,
                  [curentTranslationServiceItem.id]: {
                    ...currentServiceConfig,
                    [prop.name]: value
                  }
                }
              };
            });
          }
        });
      }),
      /* @__PURE__ */ p6("div", {
        class: "nav",
        children: [
          /* @__PURE__ */ p6(NavLeft, {
            title: t5("always languages"),
            description: t5(
              "always translate the following languages"
            )
          }),
          /* @__PURE__ */ p6(AlwaysLang, {
            options: alwaysTranslatedLangs,
            onToggleAlwaysLangs
          })
        ]
      }),
      /* @__PURE__ */ p6("div", {
        class: "langs-list",
        children: langsArr.map((item, i4) => {
          return /* @__PURE__ */ p6("div", {
            class: "lang-card",
            children: [
              /* @__PURE__ */ p6("div", {
                id: `${item}`,
                children: t5(`languages.${item}`)
              }),
              /* @__PURE__ */ p6("a", {
                href: "#close",
                class: "close",
                target: "_blank",
                "aria-label": "Close",
                "data-target": `${item}`,
                onClick: (e3) => {
                  e3.preventDefault();
                  onToggleAlwaysLangs(true, langsArr[i4]);
                }
              })
            ]
          });
        })
      }),
      /* @__PURE__ */ p6("div", {
        class: "nav",
        children: [
          /* @__PURE__ */ p6(NavLeft, {
            title: t5("always sites"),
            description: t5(
              "always translate the following sites"
            )
          }),
          /* @__PURE__ */ p6("div", {
            class: "nav-right",
            children: /* @__PURE__ */ p6("a", {
              href: "#",
              role: "button",
              class: "add-button secondary outline",
              onClick: (e3) => {
                e3.preventDefault();
                toggleAddUrlModal("matches");
              },
              children: t5("add")
            })
          }),
          isShowAddUrlModal ? /* @__PURE__ */ p6(AddUrlModal, {
            toggleModal: (e3) => {
              e3.preventDefault();
              toggleAddUrlModal("matches");
            },
            onSubmitAddUrl,
            type: "matches",
            urlValue,
            index: matchesIndex
          }) : null
        ]
      }),
      /* @__PURE__ */ p6(UrlList, {
        urls: config.translationUrlPattern.matches,
        type: "matches",
        onDeleteUrl,
        onEditUrl
      }),
      /* @__PURE__ */ p6("div", {
        class: "nav",
        children: [
          /* @__PURE__ */ p6(NavLeft, {
            title: t5("never sites"),
            description: t5(
              "never translate the following sites"
            )
          }),
          /* @__PURE__ */ p6("div", {
            class: "nav-right",
            children: /* @__PURE__ */ p6("a", {
              href: "#",
              role: "button",
              class: "add-button secondary outline",
              onClick: (e3) => {
                e3.preventDefault();
                toggleAddUrlModal("excludeMatches");
              },
              children: t5("add")
            })
          }),
          isShowNeverUrlModal ? /* @__PURE__ */ p6(AddUrlModal, {
            toggleModal: (e3) => {
              e3.preventDefault();
              toggleAddUrlModal("excludeMatches");
            },
            onSubmitAddUrl,
            type: "excludeMatches",
            urlValue,
            index: matchesIndex
          }) : null
        ]
      }),
      /* @__PURE__ */ p6(UrlList, {
        urls: config.translationUrlPattern.excludeMatches,
        type: "excludeMatches",
        onDeleteUrl,
        onEditUrl
      }),
      /* @__PURE__ */ p6("div", {
        class: "nav",
        children: [
          /* @__PURE__ */ p6(NavLeft, {
            title: t5("advanced"),
            description: t5(
              "advancedDescription"
            )
          }),
          /* @__PURE__ */ p6("a", {
            class: "text-sm",
            href: "#advanced",
            children: t5("goAdvancedSettings")
          })
        ]
      })
    ]
  });
}

// components/shortcuts.tsx
function ShortcutsModal(props) {
  const { t: t5 } = useI18n();
  const { corfirmText, onChange, onClose, shortcuts } = props;
  const inputRefs = {};
  for (let i4 = 0; i4 < shortcuts.length; i4++) {
    inputRefs[shortcuts[i4].name] = w2(null);
  }
  j2(() => {
  }, []);
  return /* @__PURE__ */ p6("dialog", {
    id: "modal-example",
    open: true,
    children: /* @__PURE__ */ p6("article", {
      class: "add-modal",
      children: [
        /* @__PURE__ */ p6("a", {
          href: "#close",
          "aria-label": "Close",
          class: "close",
          "data-target": "modal-example",
          onClick: (e3) => {
            e3.preventDefault();
            onClose();
          }
        }),
        shortcuts.map((item, index) => {
          const { name, description, shortcut } = item;
          return /* @__PURE__ */ p6("div", {
            class: "flex justify-between items-center",
            children: [
              /* @__PURE__ */ p6("label", {
                class: "mb-2 text-sm",
                for: name,
                children: [
                  description,
                  ":"
                ]
              }),
              /* @__PURE__ */ p6("input", {
                type: "text",
                class: "!w-36",
                ref: inputRefs[name],
                disabled: item.disabled,
                id: name,
                name,
                value: shortcut
              })
            ]
          }, `key-${index}`);
        }),
        props.note && /* @__PURE__ */ p6(props.note, {}),
        /* @__PURE__ */ p6("div", {
          class: "flex",
          children: [
            /* @__PURE__ */ p6("div", {
              class: "footer-button",
              children: /* @__PURE__ */ p6("a", {
                href: "#cancel",
                role: "button",
                class: "full-button secondary margin-right",
                "data-target": "modal-example",
                onClick: (e3) => {
                  e3.preventDefault();
                  onClose();
                },
                children: t5("cancel")
              })
            }),
            corfirmText && /* @__PURE__ */ p6("div", {
              class: "footer-button",
              children: /* @__PURE__ */ p6("a", {
                href: "#confirm",
                role: "button",
                class: "full-button margin-left",
                "data-target": "modal-example",
                onClick: (e3) => {
                  e3.preventDefault();
                  const newShortcuts = [];
                  for (let i4 = 0; i4 < shortcuts.length; i4++) {
                    const item = shortcuts[i4];
                    const inputRef = inputRefs[item.name];
                    if (inputRef.current) {
                      const value = inputRef.current.value;
                      newShortcuts.push({
                        ...item,
                        shortcut: value
                      });
                    }
                  }
                  onChange(newShortcuts);
                },
                children: corfirmText
              })
            })
          ]
        })
      ]
    })
  });
}

// locales/zh-CN.json
var zh_CN_default = {
  "lineBreakMaxTextCount": "\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF",
  "translate-pdf": "\u70B9\u51FB\u7FFB\u8BD1 PDF",
  "translate-firefox-local-pdf": "\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",
  "enableLineBreak": "\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",
  "sponsorLabel": "$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",
  "help": "\u5E2E\u52A9",
  "browserShortcutsNoteForFirefox": "Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",
  "browserShortcutsNoteForChrome": "\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",
  "browserShortcutsSucks": "\u4FEE\u6539\u5FEB\u6377\u952E\u8BF7\u624B\u52A8\u8F93\u5165\uFF0C\u683C\u5F0F\u4E3A\uFF1A",
  "enableLineBreakDescription": "\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB",
  "browser.brandName": "\u6C89\u6D78\u5F0F\u7FFB\u8BD1",
  "browser.brandDescription": "\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u817E\u8BAF/\u706B\u5C71\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002",
  "browser.toggleTranslatePage": "\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",
  "browser.toggleTranslateTheWholePage": "\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587",
  "browser.toggleTranslateToThePageEndImmediately": "\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587",
  "browser.toggleTranslateTheMainPage": "\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587",
  "browser.openOptionsPage": "\u6253\u5F00\u8BBE\u7F6E\u9875",
  "browser.translateLocalPdfFile": "\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6",
  "changelog": "\u66F4\u65B0\u65E5\u5FD7",
  "general": "\u57FA\u672C\u8BBE\u7F6E",
  "toggleDebug": "\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7",
  "document": "\u6587\u6863",
  "resetSuccess": "\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",
  "goAdvancedSettings": "\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",
  "advanced": "\u8FDB\u9636\u8BBE\u7F6E",
  "advancedDescription": "\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",
  "developer": "\u5F00\u53D1\u8005\u8BBE\u7F6E",
  "donateCafe": "\u8BF7\u5F00\u53D1\u8005\u559D\u676F\u5496\u5561",
  "translate to the bottom of the page": "\u6253\u5F00\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",
  "feedback": "\u95EE\u9898\u53CD\u9988",
  "toggleTranslatePage": "\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",
  "translateToThePageEndImmediatelyDescription": "\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u7ACB\u5373\u7FFB\u8BD1\u7F51\u9875\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09",
  "translate all areas of the page": "\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",
  "translationAreaDescription": "\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\u53BB\u7FFB\u8BD1\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09",
  "the number of characters to be translated first": "\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF1F",
  "interface language": "\u754C\u9762\u8BED\u8A00",
  "display both the original text and the translation": "\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587",
  "keyboard shortcuts": "\u952E\u76D8\u5FEB\u6377\u952E",
  "modify": "\u4FEE\u6539\u5FEB\u6377\u952E",
  "reset": "\u91CD\u7F6E",
  "close": "\u5173\u95ED",
  "homepage": "\u4E3B\u9875",
  "more": "\u66F4\u591A",
  "translateTheWholePage": "\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",
  "translateToThePageEndImmediately": "\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF08\u533A\u522B\u4E8E\u6EDA\u52A8\u7FFB\u8BD1\uFF09",
  "translateTheMainPage": "\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",
  "The local rules are up to date": "\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:",
  "Successfully synchronized with the latest official rules:": "\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:",
  "Checking for updates": "\u6B63\u5728\u68C0\u67E5\u66F4\u65B0",
  "Rules are being synchronized": "\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",
  "localVersionIsTooOld": "\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u4E4B\u540E\u5230\u7248\u672C\u540E\u518D\u5C1D\u8BD5\u540C\u6B65",
  "foundNewVersion": "\u53D1\u73B0\u65B0\u7248\u672C",
  "theLocalExtensionIsUpToUpdate": "\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",
  "failToSyncRules": "\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",
  "retry": "\u70B9\u6B64\u91CD\u8BD5",
  "failedReason": "\u5931\u8D25\u539F\u56E0",
  "currentRuleVersion": "\u5F53\u524D\u89C4\u5219\u7248\u672C",
  "calculating": "\u8BA1\u7B97\u4E2D",
  "unknownError": "\u672A\u77E5\u9519\u8BEF",
  "canNotFetchRemoteRule": "\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",
  "enableAlphaSuccess": "\u5DF2\u5F00\u542FAlpha\u529F\u80FD",
  "disableAlphaSuccess": "\u5DF2\u5173\u95EDAlpha\u529F\u80FD",
  "cacheSize": "\u7F13\u5B58\u5927\u5C0F\uFF1A",
  "cleaning": "\u6E05\u7406\u4E2D",
  "cleanCache": "\u6E05\u9664\u7F13\u5B58",
  "options": "\u8BBE\u7F6E",
  "about": "\u5173\u4E8E",
  "service": "\u7FFB\u8BD1\u670D\u52A1",
  "needAction": "(\u53BB\u8BBE\u7F6E)",
  "goSettings": "\u53BB\u8BBE\u7F6E",
  "translationEngine": "\u5F15\u64CE\u9009\u9879",
  "sourceLanguage": "\u539F\u6587\u8BED\u8A00",
  "target": "\u76EE\u6807\u8BED\u8A00",
  "forThisSite": "\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",
  "alwaysTranslateSomeLanguage": "\u603B\u662F\u7FFB\u8BD1{language}",
  "neverTranslateSomeLanguage": "\u6C38\u4E0D\u7FFB\u8BD1{language}",
  "alwaysTranslateSomeSite": "\u603B\u662F\u7FFB\u8BD1 {hostname}",
  "neverTranslateSomeSite": "\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",
  "add": "\u6DFB\u52A0",
  "default": "\u9ED8\u8BA4",
  "forThisLanguage": "\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A",
  "add url": "\u8F93\u5165URL",
  "edit": "\u7F16\u8F91",
  "translate other languages into specific language": "\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00",
  "select translation service": "\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",
  "language": "\u8BED\u8A00",
  "show-original": "\u663E\u793A\u539F\u6587",
  "translate": "\u7FFB\u8BD1",
  "Translated": "\u5DF2\u7FFB\u8BD1",
  "Translating": "\u7FFB\u8BD1\u4E2D",
  "Error": "\u9519\u8BEF",
  "allowCacheTranslations": "\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09",
  "translation display": "\u8BD1\u6587\u663E\u793A\u6837\u5F0F",
  "select diplay style": "\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",
  "interface": "\u754C\u9762\u8BBE\u7F6E",
  "import_export": "\u5BFC\u5165/\u5BFC\u51FA",
  "translationTheme.none": "\u65E0",
  "translationTheme.dashed": "\u865A\u7EBF\u4E0B\u5212\u7EBF",
  "translationTheme.dotted": "\u70B9\u72B6\u4E0B\u5212\u7EBF",
  "translationTheme.dashedBorder": "\u865A\u7EBF\u8FB9\u6846",
  "translationTheme.underline": "\u76F4\u7EBF\u4E0B\u5212\u7EBF",
  "translationTheme.mask": "\u6A21\u7CCA\u6548\u679C",
  "translationTheme.paper": "\u767D\u7EB8\u9634\u5F71\u6548\u679C",
  "translationTheme.highlight": "\u9AD8\u4EAE",
  "translationTheme.blockquote": "\u5F15\u7528\u6837\u5F0F",
  "translationTheme.weakening": "\u5F31\u5316",
  "translationTheme.italic": "\u659C\u4F53",
  "translationTheme.bold": "\u52A0\u7C97",
  "translationTheme.thinDashed": "\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF",
  "translationServices.tencent": "\u817E\u8BAF\u7FFB\u8BD1\u541B",
  "translationServices.google": "\u8C37\u6B4C\u7FFB\u8BD1",
  "translationServices.bai": "\u767E\u5EA6(Alpha)",
  "translationServices.baidu": "\u767E\u5EA6\u7FFB\u8BD1",
  "translationServices.aliyun": "\u963F\u91CC\u4E91\u7FFB\u8BD1",
  "translationServices.volc": "\u706B\u5C71\u7FFB\u8BD1",
  "translationServices.deeplx": "DeeplX(Alpha)",
  "translationServices.bing": "\u5FC5\u5E94\u7FFB\u8BD1",
  "translationServices.deepl": "Deepl",
  "translationServices.wechat": "\u5FAE\u4FE1\u7FFB\u8BD1",
  "translationServices.azure": "\u5FAE\u8F6F\u7FFB\u8BD1",
  "translationServices.ibm": "IBM Watson",
  "translationServices.aws": "\u4E9A\u9A6C\u900A\u7FFB\u8BD1",
  "translationServices.mock": "\u6A21\u62DF\u7FFB\u8BD1",
  "translationServices.mock2": "\u6A21\u62DF\u7FFB\u8BD12",
  "translationServices.caiyun": "\u5F69\u4E91\u5C0F\u8BD1",
  "translationServices.volcAlpha": "\u706B\u5C71\u7FFB\u8BD1(Alpha)",
  "translationServices.openl": "OpenL",
  "translationServices.youdao": "\u6709\u9053\u7FFB\u8BD1",
  "translationServices.transmart": "\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1",
  "translationServices.d": "Deepl(Alpha)",
  "translate title": "\u7FFB\u8BD1\u9875\u9762\u6807\u9898",
  "always languages": "\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",
  "always translate the following languages": "\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00",
  "always sites": "\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740",
  "always translate the following sites": "\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00",
  "never sites": "\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740",
  "never translate the following sites": "\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1",
  "please refer to": "\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",
  "Key Application and Configuration Tutorial": "\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",
  "for details": "",
  "use the above style for the following sites": "\u5F53\u524D\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\u4E3A\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u8BA9\u67D0\u4E9B\u7F51\u7AD9\u4F7F\u7528\u8BE5\u6837\u5F0F\uFF0C\u70B9\u51FB\u53F3\u8FB9\u7684\u6309\u94AE\u6DFB\u52A0\u540E\uFF0C\u518D\u5207\u6362\u5230\u53E6\u4E00\u79CD\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\uFF0C\u8FD9\u6837\u5373\u53EF\u5B9E\u73B0\u4E0D\u540C\u7F51\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8BD1\u6587\u6837\u5F0F\u3002",
  "confirm": "\u4FDD\u5B58",
  "cancel": "\u53D6\u6D88",
  "delete": "\u5220\u9664",
  "languages.af": "\u5357\u975E\u8377\u5170\u8BED",
  "languages.am": "\u963F\u59C6\u54C8\u62C9\u8BED",
  "languages.ar": "\u963F\u62C9\u4F2F\u8BED",
  "languages.auto": "\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00",
  "languages.az": "\u963F\u585E\u62DC\u7586\u8BED",
  "languages.be": "\u767D\u4FC4\u7F57\u65AF\u8BED",
  "languages.bg": "\u4FDD\u52A0\u5229\u4E9A\u8BED",
  "languages.tn": "\u672D\u90A3\u8BED",
  "languages.bn": "\u5B5F\u52A0\u62C9\u8BED",
  "languages.bs": "\u6CE2\u65AF\u5C3C\u4E9A\u8BED",
  "languages.ca": "\u52A0\u6CF0\u7F57\u5C3C\u4E9A\u8BED",
  "languages.ceb": "\u5BBF\u52A1\u8BED",
  "languages.co": "\u79D1\u897F\u5609\u8BED",
  "languages.cs": "\u6377\u514B\u8BED",
  "languages.cy": "\u5A01\u5C14\u58EB\u8BED",
  "languages.da": "\u4E39\u9EA6\u8BED",
  "languages.de": "\u5FB7\u8BED",
  "languages.el": "\u5E0C\u814A\u8BED",
  "languages.en": "\u82F1\u8BED",
  "languages.eo": "\u4E16\u754C\u8BED",
  "languages.es": "\u897F\u73ED\u7259\u8BED",
  "languages.et": "\u7231\u6C99\u5C3C\u4E9A\u8BED",
  "languages.eu": "\u5DF4\u65AF\u514B\u8BED",
  "languages.fa": "\u6CE2\u65AF\u8BED",
  "languages.fi": "\u82AC\u5170\u8BED",
  "languages.fil": "\u83F2\u5F8B\u5BBE\u8BED",
  "languages.fj": "\u6590\u6D4E\u8BED",
  "languages.fr": "\u6CD5\u8BED",
  "languages.fy": "\u5F17\u91CC\u65AF\u5170\u8BED",
  "languages.ga": "\u7231\u5C14\u5170\u8BED",
  "languages.gd": "\u82CF\u683C\u5170\u76D6\u5C14\u8BED",
  "languages.gl": "\u52A0\u5229\u897F\u4E9A\u8BED",
  "languages.gu": "\u53E4\u5409\u62C9\u7279\u8BED",
  "languages.ha": "\u8C6A\u8428\u8BED",
  "languages.haw": "\u590F\u5A01\u5937\u8BED",
  "languages.he": "\u5E0C\u4F2F\u6765\u8BED",
  "languages.hi": "\u5370\u5730\u8BED",
  "languages.hmn": "\u82D7\u8BED",
  "languages.hr": "\u514B\u7F57\u5730\u4E9A\u8BED",
  "languages.ht": "\u6D77\u5730\u514B\u91CC\u5965\u5C14\u8BED",
  "languages.hu": "\u5308\u7259\u5229\u8BED",
  "languages.hy": "\u4E9A\u7F8E\u5C3C\u4E9A\u8BED",
  "languages.id": "\u5370\u5EA6\u5C3C\u897F\u4E9A\u8BED",
  "languages.ig": "\u4F0A\u535A\u8BED",
  "languages.is": "\u51B0\u5C9B\u8BED",
  "languages.it": "\u610F\u5927\u5229\u8BED",
  "languages.ja": "\u65E5\u8BED",
  "languages.jw": "\u722A\u54C7\u8BED",
  "languages.ka": "\u683C\u9C81\u5409\u4E9A\u8BED",
  "languages.kk": "\u54C8\u8428\u514B\u8BED",
  "languages.km": "\u9AD8\u68C9\u8BED",
  "languages.kn": "\u5361\u7EB3\u8FBE\u8BED",
  "languages.ko": "\u97E9\u8BED",
  "languages.ku": "\u5E93\u5C14\u5FB7\u8BED",
  "languages.ky": "\u5409\u5C14\u5409\u65AF\u8BED",
  "languages.la": "\u62C9\u4E01\u8BED",
  "languages.lb": "\u5362\u68EE\u5821\u8BED",
  "languages.lo": "\u8001\u631D\u8BED",
  "languages.lt": "\u7ACB\u9676\u5B9B\u8BED",
  "languages.lv": "\u62C9\u8131\u7EF4\u4E9A\u8BED",
  "languages.mg": "\u9A6C\u5C14\u52A0\u4EC0\u8BED",
  "languages.mi": "\u6BDB\u5229\u8BED",
  "languages.mk": "\u9A6C\u5176\u987F\u8BED",
  "languages.ml": "\u9A6C\u62C9\u96C5\u62C9\u59C6\u8BED",
  "languages.mn": "\u8499\u53E4\u8BED",
  "languages.mr": "\u9A6C\u62C9\u5730\u8BED",
  "languages.ms": "\u9A6C\u6765\u8BED",
  "languages.mt": "\u9A6C\u8033\u4ED6\u8BED",
  "languages.mww": "\u767D\u82D7\u6587",
  "languages.my": "\u7F05\u7538\u8BED",
  "languages.ne": "\u5C3C\u6CCA\u5C14\u8BED",
  "languages.nl": "\u8377\u5170\u8BED",
  "languages.no": "\u632A\u5A01\u8BED",
  "languages.ny": "\u5C3C\u6768\u624E\u8BED\uFF08\u9F50\u5207\u74E6\u8BED\uFF09",
  "languages.otq": "\u514B\u96F7\u5854\u7F57\u5965\u6258\u7C73\u8BED",
  "languages.pa": "\u65C1\u906E\u666E\u8BED",
  "languages.pl": "\u6CE2\u5170\u8BED",
  "languages.ps": "\u666E\u4EC0\u56FE\u8BED",
  "languages.pt": "\u8461\u8404\u7259\u8BED\uFF08\u8461\u8404\u7259\u3001\u5DF4\u897F\uFF09",
  "languages.ro": "\u7F57\u9A6C\u5C3C\u4E9A\u8BED",
  "languages.ru": "\u4FC4\u8BED",
  "languages.sd": "\u4FE1\u5FB7\u8BED",
  "languages.si": "\u50E7\u4F3D\u7F57\u8BED",
  "languages.sk": "\u65AF\u6D1B\u4F10\u514B\u8BED",
  "languages.sl": "\u65AF\u6D1B\u6587\u5C3C\u4E9A\u8BED",
  "languages.sm": "\u8428\u6469\u4E9A\u8BED",
  "languages.sn": "\u4FEE\u7EB3\u8BED",
  "languages.so": "\u7D22\u9A6C\u91CC\u8BED",
  "languages.sq": "\u963F\u5C14\u5DF4\u5C3C\u4E9A\u8BED",
  "languages.sr": "\u585E\u5C14\u7EF4\u4E9A\u8BED",
  "languages.sr-Cyrl": "\u585E\u5C14\u7EF4\u4E9A\u8BED(\u897F\u91CC\u5C14\u6587)",
  "languages.sr-Latn": "\u585E\u5C14\u7EF4\u4E9A\u8BED(\u62C9\u4E01\u6587)",
  "languages.st": "\u585E\u7D22\u6258\u8BED",
  "languages.su": "\u5DFD\u4ED6\u8BED",
  "languages.sv": "\u745E\u5178\u8BED",
  "languages.sw": "\u65AF\u74E6\u5E0C\u91CC\u8BED",
  "languages.ta": "\u6CF0\u7C73\u5C14\u8BED",
  "languages.te": "\u6CF0\u5362\u56FA\u8BED",
  "languages.tg": "\u5854\u5409\u514B\u8BED",
  "languages.th": "\u6CF0\u8BED",
  "languages.tlh": "\u514B\u6797\u8D21\u8BED",
  "languages.tlh-Qaak": "\u514B\u6797\u8D21\u8BED(piqaD)",
  "languages.to": "\u6C64\u52A0\u8BED",
  "languages.tr": "\u571F\u8033\u5176\u8BED",
  "languages.ty": "\u5854\u5E0C\u63D0\u8BED",
  "languages.ug": "\u7EF4\u543E\u5C14\u8BED",
  "languages.uk": "\u4E4C\u514B\u5170\u8BED",
  "languages.ur": "\u4E4C\u5C14\u90FD\u8BED",
  "languages.uz": "\u4E4C\u5179\u522B\u514B\u8BED",
  "languages.vi": "\u8D8A\u5357\u8BED",
  "languages.wyw": "\u6587\u8A00\u6587",
  "languages.xh": "\u73ED\u56FE\u8BED",
  "languages.yi": "\u610F\u7B2C\u7EEA\u8BED",
  "languages.yo": "\u7EA6\u9C81\u5DF4\u8BED",
  "languages.yua": "\u5C24\u5361\u5766\u739B\u96C5\u8BED",
  "languages.yue": "\u7CA4\u8BED\uFF08\u7E41\u4F53\uFF09",
  "languages.zh-CN": "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09",
  "languages.zh-TW": "\u4E2D\u6587\uFF08\u7E41\u4F53\uFF09",
  "languages.zu": "\u7956\u9C81\u8BED"
};

// locales/zh-TW.json
var zh_TW_default = {
  "lineBreakMaxTextCount": "\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF",
  "enableLineBreak": "\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",
  "sponsorLabel": "$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",
  "enableLineBreakDescription": "\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB",
  "browser.brandName": "\u6C89\u6D78\u5F0F\u7FFB\u8B6F",
  "browser.brandDescription": "\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002",
  "browser.toggleTranslatePage": "\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",
  "browser.toggleTranslateTheWholePage": "\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587",
  "browser.toggleTranslateToThePageEndImmediately": "\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587",
  "browser.toggleTranslateTheMainPage": "\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587",
  "browser.openOptionsPage": "\u6253\u958B\u8A2D\u7F6E\u9801",
  "browser.translateLocalPdfFile": "\u7FFB\u8B6F\u672C\u5730 PDF \u6587\u4EF6",
  "changelog": "\u66F4\u65B0\u65E5\u5FD7",
  "general": "\u57FA\u672C\u8A2D\u7F6E",
  "toggleDebug": "\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7",
  "document": "\u6587\u6863",
  "resetSuccess": "\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",
  "goAdvancedSettings": "\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",
  "advanced": "\u9032\u968E\u8A2D\u7F6E",
  "advancedDescription": "\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",
  "developer": "\u958B\u767C\u8005\u8A2D\u7F6E",
  "donateCafe": "\u8ACB\u958B\u767C\u8005\u559D\u676F\u5496\u5561",
  "translate to the bottom of the page": "\u6253\u958B\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",
  "feedback": "\u95EE\u9898\u53CD\u9988",
  "toggleTranslatePage": "\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",
  "openOptionsPage": "\u6253\u958B\u8A2D\u7F6E\u9801",
  "translateToThePageEndImmediatelyDescription": "\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u7ACB\u5373\u7FFB\u8BD1\u7F51\u9875\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09",
  "translate all areas of the page": "\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",
  "translationAreaDescription": "\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\u53BB\u7FFB\u8BD1\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09",
  "the number of characters to be translated first": "\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF1F",
  "interface language": "\u754C\u9762\u8A9E\u8A00",
  "display both the original text and the translation": "\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587",
  "keyboard shortcuts": "\u9375\u76E4\u5FEB\u6377\u9375",
  "modify": "\u4FEE\u6539\u5FEB\u6377\u9375",
  "reset": "\u91CD\u8A2D",
  "close": "\u95DC\u9589",
  "homepage": "\u4E3B\u9801",
  "more": "\u66F4\u591A",
  "translateTheWholePage": "\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",
  "translateToThePageEndImmediately": "\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",
  "The local rules are up to date": "\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:",
  "Successfully synchronized with the latest official rules:": "\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:",
  "Checking for updates": "\u6B63\u5728\u68C0\u67E5\u66F4\u65B0",
  "Rules are being synchronized": "\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",
  "localVersionIsTooOld": "\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u4E4B\u540E\u5230\u7248\u672C\u540E\u518D\u5C1D\u8BD5\u540C\u6B65",
  "foundNewVersion": "\u53D1\u73B0\u65B0\u7248\u672C",
  "theLocalExtensionIsUpToUpdate": "\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",
  "failToSyncRules": "\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",
  "retry": "\u70B9\u6B64\u91CD\u8BD5",
  "failedReason": "\u5931\u8D25\u539F\u56E0",
  "currentRuleVersion": "\u5F53\u524D\u89C4\u5219\u7248\u672C",
  "calculating": "\u8BA1\u7B97\u4E2D",
  "unknownError": "\u672A\u77E5\u9519\u8BEF",
  "canNotFetchRemoteRule": "\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",
  "enableAlphaSuccess": "\u5DF2\u5F00\u542FAlpha\u529F\u80FD",
  "disableAlphaSuccess": "\u5DF2\u5173\u95EDAlpha\u529F\u80FD",
  "cacheSize": "\u7F13\u5B58\u5927\u5C0F\uFF1A",
  "cleaning": "\u6E05\u7406\u4E2D",
  "cleanCache": "\u6E05\u9664\u7F13\u5B58",
  "options": "\u9078\u9805",
  "about": "\u95DC\u65BC",
  "service": "\u7FFB\u8B6F\u670D\u52D9",
  "needAction": "(\u53BB\u8BBE\u7F6E)",
  "translationEngine": "\u5F15\u64CE\u9078\u9805",
  "sourceLanguage": "\u539F\u6587\u8BED\u8A00",
  "target": "\u76EE\u6A19\u8A9E\u8A00",
  "forThisSite": "\u5C0D\u65BC\u8A72\u7DB2\u7AD9\uFF1A",
  "alwaysTranslateSomeLanguage": "\u7E3D\u662F\u7FFB\u8B6F{language}",
  "neverTranslateSomeLanguage": "\u6C38\u4E0D\u7FFB\u8B6F{language}",
  "alwaysTranslateSomeSite": "\u7E3D\u662F\u7FFB\u8B6F {hostname}",
  "neverTranslateSomeSite": "\u6C38\u4E0D\u7FFB\u8B6F {hostname}",
  "add": "\u589E\u52A0",
  "default": "\u9ED8\u8A8D",
  "forThisLanguage": "\u5C0D\u65BC\u8A72\u8A9E\u8A00\uFF1A",
  "add url": "\u8F38\u5165URL",
  "edit": "\u7DE8\u8F2F",
  "translate other languages into specific language": "\u5C07\u5176\u4ED6\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u7F6E\u7684\u8A9E\u8A00",
  "select translation service": "\u9078\u64C7\u4E00\u9805\u7FFB\u8B6F\u670D\u52D9",
  "language": "\u8A9E\u8A00",
  "show-original": "\u986F\u793A\u539F\u6587",
  "translate": "\u7FFB\u8B6F",
  "Translated": "\u5DF2\u7FFB\u8B6F",
  "Translating": "\u7FFB\u8B6F\u4E2D",
  "Error": "\u932F\u8AA4",
  "allowCacheTranslations": "\u958B\u555F\u672C\u5730\u7FFB\u8B6F\u7DE9\u5B58\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8ACB\u6C42\uFF09",
  "translation display": "\u8B6F\u6587\u986F\u793A\u6A23\u5F0F",
  "select diplay style": "\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u793A\u4F8B",
  "interface": "\u754C\u9762\u8A2D\u7F6E",
  "import_export": "\u5C0E\u5165/\u5C0E\u51FA",
  "translationTheme.none": "\u7121",
  "translationTheme.dashed": "\u865B\u7DDA\u4E0B\u5283\u7DDA",
  "translationTheme.dotted": "\u9EDE\u72C0\u4E0B\u5283\u7DDA",
  "translationTheme.dashedBorder": "\u865B\u7DDA\u908A\u6846",
  "translationTheme.underline": "\u76F4\u7DDA\u4E0B\u5283\u7DDA",
  "translationTheme.mask": "\u6A21\u7CCA\u6548\u679C",
  "translationTheme.paper": "\u767D\u7D19\u9670\u5F71\u6548\u679C",
  "translationTheme.highlight": "\u9AD8\u4EAE",
  "translationTheme.blockquote": "\u5F15\u7528\u6A23\u5F0F",
  "translationTheme.weakening": "\u5F31\u5316",
  "translationTheme.italic": "\u659C\u9AD4",
  "translationTheme.bold": "\u7C97\u9AD4",
  "translationTheme.thinDashed": "\u7D30\u865B\u7DDA\u4E0B\u5283\u7DDA",
  "translationServices.tencent": "\u9A30\u8A0A\u7FFB\u8B6F\u541B",
  "translationServices.google": "\u8C37\u6B4C\u7FFB\u8B6F",
  "translationServices.bai": "\u767E\u5EA6(Alpha)",
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
  "translationServices.mock2": "\u6A21\u62DF\u7FFB\u8BD12",
  "translationServices.caiyun": "\u5F69\u96F2\u5C0F\u8B6F",
  "translationServices.volcAlpha": "\u706B\u5C71\u7FFB\u8B6F(Alpha)",
  "translationServices.openl": "OpenL",
  "translationServices.youdao": "\u6709\u9053\u7FFB\u8B6F",
  "translationServices.transmart": "\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F",
  "translationServices.d": "Deepl(Alpha)",
  "translate title": "\u7FFB\u8B6F\u9801\u9762\u6A19\u984C",
  "always languages": "\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00",
  "always translate the following languages": "\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00",
  "always sites": "\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740",
  "always translate the following sites": "\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00",
  "never sites": "\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740",
  "never translate the following sites": "\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F",
  "please refer to": "\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",
  "Key Application and Configuration Tutorial": "\u300A\u5BC6\u9470\u7533\u8ACB\u548C\u914D\u7F6E\u6559\u7A0B\u300B",
  "for details": "",
  "use the above style for the following sites": "\u5C07\u4E0A\u9762\u7684\u6A23\u5F0F\u7528\u65BC\u4EE5\u4E0B\u7DB2\u7AD9",
  "confirm": "\u5132\u5B58",
  "cancel": "\u53D6\u6D88",
  "delete": "\u522A\u9664",
  "languages.af": "\u5357\u975E\u8377\u862D\u8A9E",
  "languages.am": "\u963F\u59C6\u54C8\u62C9\u8A9E",
  "languages.ar": "\u963F\u62C9\u4F2F\u8A9E",
  "languages.auto": "\u6AA2\u6E2C\u8A9E\u8A00",
  "languages.az": "\u963F\u585E\u62DC\u7586\u8A9E",
  "languages.be": "\u767D\u4FC4\u7F85\u65AF\u8A9E",
  "languages.bg": "\u4FDD\u52A0\u5229\u4E9E\u8A9E",
  "languages.tn": "\u672D\u90A3\u8A9E",
  "languages.bn": "\u5B5F\u52A0\u62C9\u8A9E",
  "languages.bs": "\u6CE2\u65AF\u5C3C\u4E9E\u8A9E",
  "languages.ca": "\u52A0\u6CF0\u7F85\u5C3C\u4E9E\u8A9E",
  "languages.ceb": "\u5BBF\u52D9\u8A9E",
  "languages.co": "\u79D1\u897F\u5609\u8A9E",
  "languages.cs": "\u6377\u514B\u8A9E",
  "languages.cy": "\u5A01\u723E\u58EB\u8A9E",
  "languages.da": "\u4E39\u9EA5\u8A9E",
  "languages.de": "\u5FB7\u8A9E",
  "languages.el": "\u5E0C\u81D8\u8A9E",
  "languages.en": "\u82F1\u8A9E",
  "languages.eo": "\u4E16\u754C\u8A9E",
  "languages.es": "\u897F\u73ED\u7259\u8A9E",
  "languages.et": "\u611B\u6C99\u5C3C\u4E9E\u8A9E",
  "languages.eu": "\u5DF4\u65AF\u514B\u8A9E",
  "languages.fa": "\u6CE2\u65AF\u8A9E",
  "languages.fi": "\u82AC\u862D\u8A9E",
  "languages.fil": "\u83F2\u5F8B\u8CD3\u8A9E",
  "languages.fj": "\u6590\u6FDF\u8A9E",
  "languages.fr": "\u6CD5\u8A9E",
  "languages.fy": "\u5F17\u91CC\u65AF\u862D\u8A9E",
  "languages.ga": "\u611B\u723E\u862D\u8A9E",
  "languages.gd": "\u8607\u683C\u862D\u84CB\u723E\u8A9E",
  "languages.gl": "\u52A0\u5229\u897F\u4E9E\u8A9E",
  "languages.gu": "\u53E4\u5409\u62C9\u7279\u8A9E",
  "languages.ha": "\u8C6A\u85A9\u8A9E",
  "languages.haw": "\u590F\u5A01\u5937\u8A9E",
  "languages.he": "\u5E0C\u4F2F\u4F86\u8A9E",
  "languages.hi": "\u5370\u5730\u8A9E",
  "languages.hmn": "\u82D7\u8A9E",
  "languages.hr": "\u514B\u7F85\u5730\u4E9E\u8A9E",
  "languages.ht": "\u6D77\u5730\u514B\u91CC\u5967\u723E\u8A9E",
  "languages.hu": "\u5308\u7259\u5229\u8A9E",
  "languages.hy": "\u4E9E\u7F8E\u5C3C\u4E9E\u8A9E",
  "languages.id": "\u5370\u5EA6\u5C3C\u897F\u4E9E\u8A9E",
  "languages.ig": "\u4F0A\u535A\u8A9E",
  "languages.is": "\u51B0\u5CF6\u8A9E",
  "languages.it": "\u610F\u5927\u5229\u8A9E",
  "languages.ja": "\u65E5\u8A9E",
  "languages.jw": "\u722A\u54C7\u8A9E",
  "languages.ka": "\u683C\u9B6F\u5409\u4E9E\u8A9E",
  "languages.kk": "\u54C8\u85A9\u514B\u8A9E",
  "languages.km": "\u9AD8\u68C9\u8A9E",
  "languages.kn": "\u5361\u7D0D\u9054\u8A9E",
  "languages.ko": "\u97D3\u8A9E",
  "languages.ku": "\u5EAB\u723E\u5FB7\u8A9E",
  "languages.ky": "\u5409\u723E\u5409\u65AF\u8A9E",
  "languages.la": "\u62C9\u4E01\u8A9E",
  "languages.lb": "\u76E7\u68EE\u5821\u8A9E",
  "languages.lo": "\u8001\u64BE\u8A9E",
  "languages.lt": "\u7ACB\u9676\u5B9B\u8A9E",
  "languages.lv": "\u62C9\u812B\u7DAD\u4E9E\u8A9E",
  "languages.mg": "\u99AC\u723E\u52A0\u4EC0\u8A9E",
  "languages.mi": "\u6BDB\u5229\u8A9E",
  "languages.mk": "\u99AC\u5176\u9813\u8A9E",
  "languages.ml": "\u99AC\u62C9\u96C5\u62C9\u59C6\u8A9E",
  "languages.mn": "\u8499\u53E4\u8A9E",
  "languages.mr": "\u99AC\u62C9\u5730\u8A9E",
  "languages.ms": "\u99AC\u4F86\u8A9E",
  "languages.mt": "\u99AC\u8033\u4ED6\u8A9E",
  "languages.mww": "\u767D\u82D7\u6587",
  "languages.my": "\u7DEC\u7538\u8A9E",
  "languages.ne": "\u5C3C\u6CCA\u723E\u8A9E",
  "languages.nl": "\u8377\u862D\u8A9E",
  "languages.no": "\u632A\u5A01\u8A9E",
  "languages.ny": "\u5C3C\u694A\u624E\u8A9E\uFF08\u9F4A\u5207\u74E6\u8A9E\uFF09",
  "languages.otq": "\u514B\u96F7\u5854\u7F85\u5967\u6258\u7C73\u8A9E",
  "languages.pa": "\u65C1\u906E\u666E\u8A9E",
  "languages.pl": "\u6CE2\u862D\u8A9E",
  "languages.ps": "\u666E\u4EC0\u5716\u8A9E",
  "languages.pt": "\u8461\u8404\u7259\u8A9E\uFF08\u8461\u8404\u7259\u3001\u5DF4\u897F\uFF09",
  "languages.ro": "\u7F85\u99AC\u5C3C\u4E9E\u8A9E",
  "languages.ru": "\u4FC4\u8A9E",
  "languages.sd": "\u4FE1\u5FB7\u8A9E",
  "languages.si": "\u50E7\u4F3D\u7F85\u8A9E",
  "languages.sk": "\u65AF\u6D1B\u4F10\u514B\u8A9E",
  "languages.sl": "\u65AF\u6D1B\u6587\u5C3C\u4E9E\u8A9E",
  "languages.sm": "\u85A9\u6469\u4E9E\u8A9E",
  "languages.sn": "\u4FEE\u7D0D\u8A9E",
  "languages.so": "\u7D22\u99AC\u91CC\u8A9E",
  "languages.sq": "\u963F\u723E\u5DF4\u5C3C\u4E9E\u8A9E",
  "languages.sr": "\u585E\u723E\u7DAD\u4E9E\u8A9E",
  "languages.sr-Cyrl": "\u585E\u723E\u7DAD\u4E9E\u8A9E(\u897F\u91CC\u723E\u6587)",
  "languages.sr-Latn": "\u585E\u723E\u7DAD\u4E9E\u8A9E(\u62C9\u4E01\u6587)",
  "languages.st": "\u585E\u7D22\u6258\u8A9E",
  "languages.su": "\u5DFD\u4ED6\u8A9E",
  "languages.sv": "\u745E\u5178\u8A9E",
  "languages.sw": "\u65AF\u74E6\u5E0C\u91CC\u8A9E",
  "languages.ta": "\u6CF0\u7C73\u723E\u8A9E",
  "languages.te": "\u6CF0\u76E7\u56FA\u8A9E",
  "languages.tg": "\u5854\u5409\u514B\u8A9E",
  "languages.th": "\u6CF0\u8A9E",
  "languages.tlh": "\u514B\u6797\u8CA2\u8A9E",
  "languages.tlh-Qaak": "\u514B\u6797\u8CA2\u8A9E(piqaD)",
  "languages.to": "\u6E6F\u52A0\u8A9E",
  "languages.tr": "\u571F\u8033\u5176\u8A9E",
  "languages.ty": "\u5854\u5E0C\u63D0\u8A9E",
  "languages.ug": "\u7DAD\u543E\u723E\u8A9E",
  "languages.uk": "\u70CF\u514B\u862D\u8A9E",
  "languages.ur": "\u70CF\u723E\u90FD\u8A9E",
  "languages.uz": "\u70CF\u8332\u5225\u514B\u8A9E",
  "languages.vi": "\u8D8A\u5357\u8A9E",
  "languages.wyw": "\u6587\u8A00\u6587",
  "languages.xh": "\u73ED\u5716\u8A9E",
  "languages.yi": "\u610F\u7B2C\u7DD2\u8A9E",
  "languages.yo": "\u7D04\u9B6F\u5DF4\u8A9E",
  "languages.yua": "\u5C24\u5361\u5766\u746A\u96C5\u8A9E",
  "languages.yue": "\u7CB5\u8A9E\uFF08\u7E41\u9AD4\uFF09",
  "languages.zh-CN": "\u4E2D\u6587\uFF08\u7C21\u9AD4\uFF09",
  "languages.zh-TW": "\u4E2D\u6587\uFF08\u7E41\u9AD4\uFF09",
  "languages.zu": "\u7956\u9B6F\u8A9E"
};

// locales/en.json
var en_default = {
  "lineBreakMaxTextCount": "\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF",
  "enableLineBreak": "\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",
  "sponsorLabel": "$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",
  "enableLineBreakDescription": "\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB",
  "browser.brandName": "Immersive Translate",
  "browser.brandDescription": "Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.",
  "browser.toggleTranslatePage": "Toggle translate webpage ",
  "browser.toggleTranslateTheWholePage": "Toggle translate the whole page",
  "browser.toggleTranslateToThePageEndImmediately": "Toggle translate to the bottom of the page immediately",
  "browser.toggleTranslateTheMainPage": "Toggle translate the main page",
  "browser.openOptionsPage": "Open Settings Page",
  "browser.translateLocalPdfFile": "Translate local PDF files",
  "changelog": "\u66F4\u65B0\u65E5\u5FD7",
  "general": "General",
  "toggleDebug": "\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7",
  "document": "\u6587\u6863",
  "resetSuccess": "\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",
  "goAdvancedSettings": "\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",
  "advanced": "Advanced",
  "advancedDescription": "\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",
  "developer": "\u5F00\u53D1\u8005\u8BBE\u7F6E",
  "donateCafe": "Buy Me a Coffee",
  "translate to the bottom of the page": "Whether translate to the bottom of the page once you open the page?",
  "feedback": "Feedback",
  "toggleTranslatePage": "Toggle Translate",
  "openOptionsPage": "Open Options",
  "translateToThePageEndImmediatelyDescription": "When turned on, it will immediately translate the page from the top to the bottom, instead of translating as you read. (Not recommended to turn on)",
  "translate all areas of the page": "Whether to translate all areas of the web page",
  "translationAreaDescription": "When enabled, the entire area of the page will be translated, not the default intelligent recognition main area to translate ( not recommended)",
  "the number of characters to be translated first": "How many characters are translated directly without waiting to scroll to the visible area for the first few characters?",
  "interface language": "Interface language",
  "display both the original text and the translation": "Display both the original text and the translation",
  "keyboard shortcuts": "Keyboard shortcuts",
  "modify": "Modify shortcut key",
  "reset": "Reset",
  "close": "Close",
  "homepage": "Home Page",
  "more": "More",
  "translateTheWholePage": "Translate the whole page area (different from only the main area)",
  "translateToThePageEndImmediately": "Immediately translate to the bottom (different from behold translate which)",
  "The local rules are up to date": "Local  rules are up to date:",
  "Successfully synchronized with the latest official rules:": "Successfully synced latest official rules:",
  "Checking for updates": "Checking for update",
  "Rules are being synchronized": "Syncing official rules",
  "localVersionIsTooOld": "The local extension is too old. Please upgrade to {minVersion} or then try syncing again",
  "foundNewVersion": "New version available",
  "theLocalExtensionIsUpToUpdate": "The current extension version is up to date.",
  "failToSyncRules": "Failed to sync latest adaptive rules",
  "retry": "Retry",
  "failedReason": "Failure reason",
  "currentRuleVersion": "Current Rule Version",
  "calculating": "Calculating",
  "unknownError": "Unknown Error",
  "canNotFetchRemoteRule": "Unable to fetch remote rule",
  "enableAlphaSuccess": "Alpha enabled successfully",
  "disableAlphaSuccess": "Alpha has been disabled",
  "cacheSize": "Cache size:",
  "cleaning": "Cleaning",
  "cleanCache": "Clear cache",
  "options": "Options",
  "about": "About",
  "service": "Translation Service",
  "needAction": "(to set up)",
  "translationEngine": "Engine Options",
  "sourceLanguage": "Original language",
  "target": "Target Language",
  "forThisSite": "For This Site:",
  "alwaysTranslateSomeLanguage": "Always translate {language}",
  "neverTranslateSomeLanguage": "Never translate {language}",
  "alwaysTranslateSomeSite": "Always translate {hostname}",
  "neverTranslateSomeSite": "Never translate {hostname}",
  "add": "Add",
  "default": "Default",
  "forThisLanguage": "For This Language:",
  "add url": "Add URL",
  "edit": "Edit",
  "translate other languages into specific language": "Translate other languages into the language you set",
  "select translation service": "Select a translation service",
  "language": "Language",
  "show-original": "Show original text",
  "translate": "Translate",
  "Translated": "Translated",
  "Translating": "Translating",
  "Error": "Error",
  "allowCacheTranslations": "Enable local translation caching (reduce translation requests for duplicate paragraphs)",
  "translation display": "Translation display style",
  "select diplay style": "Please refer to the following examples",
  "interface": "Interface Settings",
  "import_export": "Import/Export",
  "translationTheme.none": "None",
  "translationTheme.dashed": "Dashed underline",
  "translationTheme.dotted": "Dotted Underline",
  "translationTheme.dashedBorder": "Dashed Border",
  "translationTheme.underline": "Straight underline",
  "translationTheme.mask": "Blur effect",
  "translationTheme.paper": "White paper shadow effect",
  "translationTheme.highlight": "Highlight",
  "translationTheme.blockquote": "quote style",
  "translationTheme.weakening": "Weakening",
  "translationTheme.italic": "Italic",
  "translationTheme.bold": "Bold",
  "translationTheme.thinDashed": "Thin dashed underline",
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
  "translationServices.d": "DeeplX (Alpha)",
  "translate title": "Translate page title",
  "always languages": "Always translate the following languages",
  "always translate the following languages": "The following languages will always be translated",
  "always sites": "Always translate the following sites",
  "always translate the following sites": "The following sites will always be translated",
  "never sites": "Never translate the following sites",
  "never translate the following sites": "The following sites will never be translated",
  "please refer to": "\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",
  "Key Application and Configuration Tutorial": " 'Key Application and Configuration Tutorial' ",
  "for details": "",
  "use the above style for the following sites": "use the above style for the following sites",
  "confirm": "Save",
  "cancel": "Cancel",
  "delete": "Delete",
  "languages.af": "Afrikaans",
  "languages.am": "Amharic",
  "languages.ar": "Arabic",
  "languages.auto": "Detect Language",
  "languages.az": "Azerbaijani",
  "languages.be": "Belarusian",
  "languages.bg": "Bulgarian",
  "languages.tn": "Zana",
  "languages.bn": "Bengali",
  "languages.bs": "Bosnian",
  "languages.ca": "Catalan",
  "languages.ceb": "Cebuano",
  "languages.co": "Corsican",
  "languages.cs": "Czech",
  "languages.cy": "Welsh",
  "languages.da": "Danish",
  "languages.de": "German",
  "languages.el": "Greek",
  "languages.en": "English",
  "languages.eo": "Esperanto",
  "languages.es": "Spanish",
  "languages.et": "Estonian",
  "languages.eu": "Basque",
  "languages.fa": "Farsi",
  "languages.fi": "Finnish",
  "languages.fil": "Filipino",
  "languages.fj": "Fijian",
  "languages.fr": "French",
  "languages.fy": "Frisian",
  "languages.ga": "Irish",
  "languages.gd": "Scottish Gaelic",
  "languages.gl": "Galician",
  "languages.gu": "Gujarati",
  "languages.ha": "Hausa",
  "languages.haw": "Hawaiian",
  "languages.he": "Hebrew",
  "languages.hi": "Hindi",
  "languages.hmn": "Hmong",
  "languages.hr": "Croatian",
  "languages.ht": "Haitian Creole",
  "languages.hu": "Hungarian",
  "languages.hy": "Armenian",
  "languages.id": "Indonesian",
  "languages.ig": "Igbo",
  "languages.is": "Icelandic",
  "languages.it": "Italian",
  "languages.ja": "Japanese",
  "languages.jw": "Javanese",
  "languages.ka": "Georgian",
  "languages.kk": "Kazakh",
  "languages.km": "Khmer",
  "languages.kn": "Kannada",
  "languages.ko": "Korean",
  "languages.ku": "Kurdish",
  "languages.ky": "Kyrgyz",
  "languages.la": "Latin",
  "languages.lb": "Luxembourgish",
  "languages.lo": "Lao",
  "languages.lt": "Lithuanian",
  "languages.lv": "Latvian",
  "languages.mg": "Malagash",
  "languages.mi": "Maori",
  "languages.mk": "Macedonian",
  "languages.ml": "Malayalam",
  "languages.mn": "Mongolian",
  "languages.mr": "Marathi",
  "languages.ms": "Malay",
  "languages.mt": "Maltese",
  "languages.mww": "Bai Miao",
  "languages.my": "Burmese",
  "languages.ne": "Nepali",
  "languages.nl": "Dutch",
  "languages.no": "Norwegian",
  "languages.ny": "Nyanza (Chichewa)",
  "languages.otq": "Quer\xE9taro Otomi",
  "languages.pa": "Punjabi",
  "languages.pl": "Polish",
  "languages.ps": "Pashto",
  "languages.pt": "Portuguese (Portugal, Brazil)",
  "languages.ro": "Romanian",
  "languages.ru": "Russian",
  "languages.sd": "Sindhi",
  "languages.si": "Sinhala",
  "languages.sk": "Slovak",
  "languages.sl": "Slovenian",
  "languages.sm": "Samoan",
  "languages.sn": "Shona",
  "languages.so": "Somali",
  "languages.sq": "Albanian",
  "languages.sr": "Serbian",
  "languages.sr-Cyrl": "Serbian (Cyrillic)",
  "languages.sr-Latn": "Serbian (Latin)",
  "languages.st": "Sesotho",
  "languages.su": "Sundanese",
  "languages.sv": "Swedish",
  "languages.sw": "Swahili",
  "languages.ta": "Tamil",
  "languages.te": "Telugu",
  "languages.tg": "Tajik",
  "languages.th": "Thai",
  "languages.tlh": "Klingon",
  "languages.tlh-Qaak": "Klingon (piqaD)",
  "languages.to": "Tongan",
  "languages.tr": "Turkish",
  "languages.ty": "Tahiti",
  "languages.ug": "Uyghur",
  "languages.uk": "Ukrainian",
  "languages.ur": "Urdu",
  "languages.uz": "Uzbek",
  "languages.vi": "Vietnamese",
  "languages.wyw": "Classical Chinese",
  "languages.xh": "Bantu",
  "languages.yi": "Yiddish",
  "languages.yo": "Yoruba",
  "languages.yua": "Yucatan Mayan",
  "languages.yue": "Cantonese (Traditional)",
  "languages.zh-CN": "Chinese (Simplified)",
  "languages.zh-TW": "Chinese (Traditional)",
  "languages.zu": "Zulu"
};

// locales.ts
var translations = {
  "zh-CN": zh_CN_default,
  "en": en_default,
  "zh-TW": zh_TW_default
};
var locales_default = translations;
function t4(key, config, params) {
  return t3(
    translations,
    key,
    config.interfaceLanguage,
    fallbackLanguage,
    params
  );
}

// menu.ts
var actions = isChrome() ? ["action"] : ["browser_action", "page_action"];
var menus = [
  {
    id: "toggleTranslatePage",
    contexts: ["page", "frame", ...actions]
  },
  {
    id: contextOpenOptionsMenuId,
    contexts: actions
  },
  {
    id: contextTranslateLocalPdfFileMenuId,
    contexts: actions
  }
];
async function updateContextMenu() {
  const config = await getConfig();
  log_default.debug(`update ContextMenu`, config);
  for (const menu of menus) {
    const newTitle = t4(`browser.${menu.id}`, config);
    browserAPI.contextMenus.update(
      menu.id,
      {
        title: newTitle
      }
    );
  }
}

// pages/interface.tsx
var allLocales = Object.keys(locales_default);
var languages3 = getLanguages();
var getUrlArr = (config) => {
  const theme = config.translationTheme;
  if (!config.translationThemePatterns[theme]) {
    return [];
  }
  return [...config.translationThemePatterns[theme].matches];
};
function Options() {
  const [settings, setSettings, _isPersistent, error2] = useUserConfig();
  const [isShowAddUrlModal, setIsShowAddUrlModal] = P2(
    false
  );
  const [isShowShortcutsModal, setIsShowShortcutsModal] = P2(
    false
  );
  const [matchesIndex, setMatchesIndex] = P2(0);
  const [ctx, setCtx] = P2(null);
  const { t: t5, setLang } = useI18n();
  const [urlValue, setUrlValue] = P2("");
  j2(() => {
    v3("esc", () => {
      setIsShowAddUrlModal(false);
      setIsShowShortcutsModal(false);
    });
    return () => {
      v3.unbind("esc");
    };
  }, []);
  j2(() => {
    getConfig().then((config2) => {
      getContext({
        config: config2,
        url: globalThis.location.href
      }).then((ctx2) => {
        setCtx(ctx2);
      });
    });
  }, [settings]);
  const selectDisplay = (theme) => {
    setSettings((state) => {
      return { ...state, translationTheme: theme };
    });
  };
  const selectInterfaceLanguage = (lang) => {
    setSettings((state) => {
      return { ...state, interfaceLanguage: lang };
    });
  };
  const onAddInterfaceUrl = (url, theme, action) => {
    setIsShowAddUrlModal(!isShowAddUrlModal);
    setSettings((state) => {
      const currentPatterns = state.translationThemePatterns || {};
      const currentThemeObj = currentPatterns[theme] || {};
      const currentMatches = currentThemeObj.matches || [];
      let newMatches = [...currentMatches];
      if (action === "edit") {
        newMatches = removeFromArray(urlValue, currentMatches);
      }
      newMatches = addToUniqueArray(url, newMatches);
      return {
        ...state,
        translationThemePatterns: {
          ...currentPatterns,
          [theme]: {
            ...currentThemeObj,
            matches: newMatches
          }
        }
      };
    });
  };
  const onDeleteUrl = (url, theme) => {
    setSettings((state) => {
      const currentPatterns = state.translationThemePatterns || {};
      const currentThemeObj = currentPatterns[theme] || {};
      const currentMatches = currentThemeObj.matches || [];
      let newMatches = [...currentMatches];
      newMatches = removeFromArray(url, newMatches);
      return {
        ...state,
        translationThemePatterns: {
          ...currentPatterns,
          [theme]: {
            ...currentThemeObj,
            matches: newMatches
          }
        }
      };
    });
  };
  const onEditUrl = (url, type, index) => {
    setIsShowAddUrlModal(!isShowAddUrlModal);
    setUrlValue(url);
    setMatchesIndex(index);
  };
  if (!ctx) {
    return /* @__PURE__ */ p6("div", {
      children: "loading"
    });
  }
  const config = ctx.config;
  let corfirmText = t5("confirm");
  let note = () => /* @__PURE__ */ p6("blockquote", {
    class: "text-sm",
    children: [
      t5("browserShortcutsSucks"),
      " ",
      /* @__PURE__ */ p6("kbd", {
        children: "Ctrl+A"
      }),
      "\xA0",
      /* @__PURE__ */ p6("kbd", {
        children: "Alt+B"
      }),
      "\xA0",
      /* @__PURE__ */ p6("kbd", {
        children: "Command+C"
      }),
      "\xA0 ",
      /* @__PURE__ */ p6("kbd", {
        children: "Ctrl+Shift+D"
      }),
      " ",
      /* @__PURE__ */ p6("a", {
        href: "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#shortcut_values",
        children: [
          t5("help"),
          "?"
        ]
      })
    ]
  });
  if (!isMonkey()) {
    if (isFirefox()) {
      note = () => /* @__PURE__ */ p6("blockquote", {
        class: "text-sm",
        children: [
          t5("browserShortcutsNoteForFirefox"),
          "  ",
          /* @__PURE__ */ p6("a", {
            href: "https://support.mozilla.org/zh-CN/kb/%E7%AE%A1%E7%90%86Firefox%E7%9A%84%E6%89%A9%E5%B1%95%E5%BF%AB%E6%8D%B7%E6%96%B9%E5%BC%8F",
            children: [
              t5("help"),
              "?"
            ]
          }),
          " "
        ]
      });
      corfirmText = "";
    } else {
      note = () => /* @__PURE__ */ p6("blockquote", {
        class: "text-sm",
        children: t5("browserShortcutsNoteForChrome")
      });
      corfirmText = t5("goSettings");
    }
  }
  return /* @__PURE__ */ p6("div", {
    children: [
      /* @__PURE__ */ p6("div", {
        class: "nav",
        children: /* @__PURE__ */ p6("strong", {
          class: "text-lg",
          children: t5("interface")
        })
      }),
      /* @__PURE__ */ p6("div", {
        class: "nav",
        children: [
          /* @__PURE__ */ p6(NavLeft, {
            title: t5("interface language")
          }),
          /* @__PURE__ */ p6("select", {
            class: "select",
            onChange: (e3) => {
              setLang(e3.target.value);
              selectInterfaceLanguage(e3.target.value);
              if (!isMonkey()) {
                setTimeout(() => {
                  updateContextMenu();
                }, 200);
              }
            },
            children: allLocales.map((item) => {
              return /* @__PURE__ */ p6("option", {
                value: item,
                selected: item === config.interfaceLanguage,
                children: t5(`languages.${item}`)
              });
            })
          })
        ]
      }),
      /* @__PURE__ */ p6("div", {
        class: "nav !hidden",
        children: [
          /* @__PURE__ */ p6(NavLeft, {
            title: t5("display both the original text and the translation"),
            description: t5(
              "select diplay style"
            )
          }),
          /* @__PURE__ */ p6("label", {
            for: "switch",
            children: /* @__PURE__ */ p6("input", {
              type: "checkbox",
              id: "switch",
              name: "switch",
              role: "switch",
              checked: true
            })
          })
        ]
      }),
      /* @__PURE__ */ p6("div", {
        class: "nav",
        children: [
          /* @__PURE__ */ p6(NavLeft, {
            title: t5("keyboard shortcuts")
          }),
          /* @__PURE__ */ p6("div", {
            class: "nav-right",
            children: /* @__PURE__ */ p6("a", {
              href: "#",
              role: "button",
              class: "add-button secondary outline",
              onClick: (e3) => {
                e3.preventDefault();
                setIsShowShortcutsModal(!isShowShortcutsModal);
              },
              children: t5("modify")
            })
          })
        ]
      }),
      /* @__PURE__ */ p6("div", {
        class: "nav",
        children: [
          /* @__PURE__ */ p6(NavLeft, {
            title: t5("enableLineBreak"),
            description: t5("enableLineBreakDescription")
          }),
          /* @__PURE__ */ p6("label", {
            for: "switch",
            children: /* @__PURE__ */ p6("input", {
              type: "checkbox",
              onChange: (e3) => {
                const checked = e3.target.checked;
                setSettings((state) => {
                  const currentGeneralRule = state.generalRule || {};
                  return {
                    ...state,
                    generalRule: {
                      ...currentGeneralRule,
                      lineBreakMaxTextCount: checked ? 280 : 0
                    }
                  };
                });
              },
              checked: ctx.rule.lineBreakMaxTextCount > 0,
              id: "switch",
              name: "switch",
              role: "switch"
            })
          })
        ]
      }),
      ctx.rule.lineBreakMaxTextCount > 0 && /* @__PURE__ */ p6("div", {
        class: "nav",
        children: [
          /* @__PURE__ */ p6(NavLeft, {
            title: t5("lineBreakMaxTextCount")
          }),
          /* @__PURE__ */ p6("label", {
            for: "count",
            children: /* @__PURE__ */ p6("input", {
              type: "number",
              id: "count",
              onChange: (e3) => {
                const count2 = e3.target.value;
                setSettings((state) => {
                  const currentGeneralRule = state.generalRule || {};
                  return {
                    ...state,
                    generalRule: {
                      ...currentGeneralRule,
                      lineBreakMaxTextCount: parseInt(count2)
                    }
                  };
                });
              },
              name: "count",
              value: ctx.rule.lineBreakMaxTextCount,
              placeholder: "Text Length",
              required: true
            })
          })
        ]
      }),
      /* @__PURE__ */ p6("div", {
        class: "nav",
        children: [
          /* @__PURE__ */ p6(NavLeft, {
            title: t5("translation display"),
            description: t5(
              "select diplay style"
            )
          }),
          /* @__PURE__ */ p6("select", {
            class: "select",
            onChange: (e3) => {
              selectDisplay(e3.target.value);
            },
            children: translationThemes.map((item) => {
              return /* @__PURE__ */ p6("option", {
                value: item,
                selected: item === config.translationTheme,
                children: t5(`translationTheme.${item}`)
              });
            })
          })
        ]
      }),
      /* @__PURE__ */ p6("div", {
        class: "pt-2 text-sm",
        children: /* @__PURE__ */ p6("p", {
          children: [
            sampleSourceText,
            /* @__PURE__ */ p6("br", {}),
            /* @__PURE__ */ p6("br", {}),
            /* @__PURE__ */ p6("span", {
              class: getTranslationWrapperClassNames(
                config.translationTheme,
                false,
                [],
                false,
                false
              ).join(
                " "
              ),
              children: /* @__PURE__ */ p6("span", {
                class: getTranslationInnerClassNames(
                  config.translationTheme
                ).join(" "),
                children: sampleTargetText
              })
            })
          ]
        })
      }),
      /* @__PURE__ */ p6("div", {
        class: "nav",
        children: [
          /* @__PURE__ */ p6(NavLeft, {
            title: "",
            description: t5("use the above style for the following sites", {
              theme: t5(`translationTheme.${config.translationTheme}`)
            })
          }),
          /* @__PURE__ */ p6("div", {
            class: "nav-right",
            children: /* @__PURE__ */ p6("a", {
              href: "#",
              role: "button",
              class: "add-button secondary outline",
              onClick: (e3) => {
                e3.preventDefault();
                setIsShowAddUrlModal(!isShowAddUrlModal);
              },
              children: t5("add")
            })
          })
        ]
      }),
      isShowAddUrlModal ? /* @__PURE__ */ p6(AddUrlModal, {
        toggleModal: (e3) => {
          e3.preventDefault();
          setIsShowAddUrlModal(!isShowAddUrlModal);
        },
        onAddInterfaceUrl: (url, action) => {
          onAddInterfaceUrl(url, config.translationTheme, action);
        },
        urlValue,
        index: matchesIndex
      }) : null,
      /* @__PURE__ */ p6(UrlList, {
        urls: getUrlArr(config),
        type: "matches",
        onDeleteUrl: (url) => {
          onDeleteUrl(url, config.translationTheme);
        },
        onEditUrl
      }),
      isShowShortcutsModal ? /* @__PURE__ */ p6(ShortcutsModal, {
        note,
        corfirmText,
        shortcuts: allSupportedShortcuts.map((item) => {
          return {
            name: item,
            shortcut: config.shortcuts[item],
            description: t5(`browser.${item}`),
            disabled: isMonkey() ? false : true
          };
        }),
        onChange: (newShortcuts) => {
          if (!isMonkey()) {
            browserAPI.tabs.create({
              url: "chrome://extensions/shortcuts"
            });
          } else {
            setSettings((state) => {
              const shortcutsMap = newShortcuts.reduce(
                (acc, item) => {
                  acc[item.name] = item.shortcut;
                  return acc;
                },
                { ...state.shortcuts }
              );
              return {
                ...state,
                shortcuts: shortcutsMap
              };
            });
          }
          setIsShowShortcutsModal(false);
        },
        onClose: () => {
          setIsShowShortcutsModal(false);
        }
      }) : null
    ]
  });
}

// pages/developer.tsx
function Options2() {
  const [settings, setSettings, _isPersistent, _error] = useUserConfig();
  const [config, setConfig] = P2(null);
  const { t: t5 } = useI18n();
  j2(() => {
    getConfig().then((config2) => {
      setConfig(config2);
    });
  }, [settings]);
  const handleToggleDebug = (value) => {
    setSettings((state) => {
      return {
        ...state,
        debug: value
      };
    });
  };
  if (!config) {
    return /* @__PURE__ */ p6("div", {
      children: "loading"
    });
  }
  return /* @__PURE__ */ p6("div", {
    children: [
      /* @__PURE__ */ p6("div", {
        class: "nav",
        children: /* @__PURE__ */ p6("strong", {
          class: "text-lg",
          children: t5("developer")
        })
      }),
      /* @__PURE__ */ p6("fieldset", {
        children: /* @__PURE__ */ p6("label", {
          for: "switch",
          children: [
            /* @__PURE__ */ p6("input", {
              type: "checkbox",
              id: "cache",
              name: "cache",
              role: "switch",
              onChange: () => {
                handleToggleDebug(!config.debug);
              },
              checked: config.debug
            }),
            t5("toggleDebug")
          ]
        })
      })
    ]
  });
}

// pages/import_export.tsx
function ImportExport() {
  const [settings, setSettings, _isPersistent, error2] = useUserConfig();
  const [config, setConfig] = P2(null);
  const { t: t5 } = useI18n();
  j2(() => {
    getConfig().then((config2) => {
      setConfig(config2);
    });
  }, []);
  const handleChangeValue = (value) => {
    setSettings(() => {
      return {
        ...value
      };
    });
  };
  const handleChange = (e3) => {
    try {
      const newSettings = JSON.parse(
        e3.target.value
      );
      handleChangeValue(newSettings);
    } catch (e4) {
    }
  };
  const handleReset = (e3) => {
    e3.preventDefault();
    handleChangeValue(getEnvUserConfig());
  };
  return /* @__PURE__ */ p6("div", {
    children: [
      /* @__PURE__ */ p6("div", {
        class: "nav",
        children: /* @__PURE__ */ p6("strong", {
          class: "text-lg",
          children: t5("import_export")
        })
      }),
      /* @__PURE__ */ p6("p", {
        children: error2
      }),
      /* @__PURE__ */ p6("textarea", {
        rows: 10,
        onChange: handleChange,
        value: JSON.stringify(settings, null, 2)
      }),
      /* @__PURE__ */ p6("a", {
        onClick: handleReset,
        children: "Reset"
      }),
      /* @__PURE__ */ p6("h3", {
        children: "Current Config"
      }),
      /* @__PURE__ */ p6("pre", {
        children: /* @__PURE__ */ p6("code", {
          children: JSON.stringify(config, null, 2)
        })
      })
    ]
  });
}

// browser/version.ts
function getVersion() {
  return browserAPI.runtime.getManifest().version;
}

// hooks/use_buildin_config.ts
var SETTINGS_KEY2 = "buildinConfig";
var INITIAL_VALUE2 = {};
var useBuildinConfig = createChromeStorageStateHookLocal(
  SETTINGS_KEY2,
  INITIAL_VALUE2
);

// utils/compare_version.ts
function isAVersionGreaterOrEqualWithB(a5, b5) {
  const result = a5.localeCompare(b5, void 0, {
    numeric: true,
    sensitivity: "base"
  });
  return result >= 0;
}

// utils/click-multiple-times.ts
function onClickMultipleTimes(requiredClicks, timeLimit = 2e3) {
  return (cb) => {
    let timer;
    let clicked = 0;
    return (e3) => {
      if (++clicked == requiredClicks) {
        cb(e3);
        clicked = 0;
      }
      clearTimeout(timer);
      timer = setTimeout(
        () => clicked = 0,
        timeLimit
      );
    };
  };
}

// browser/cache_manager.ts
async function cleanCache() {
  const keys = ["bingGlobalConfig", "baiduGlobalConfig"];
  for (const key of keys) {
    await browserAPI.storage.local.remove(key);
  }
  if (!isMonkey()) {
    await deleteAll();
  }
}
function getCacheSize() {
  if (!isMonkey()) {
    return calculateSize();
  } else {
    return Promise.resolve("0 B");
  }
}

// pages/about.tsx
var AlreadyLatest = ({ date }) => {
  const { t: t5 } = useI18n();
  return /* @__PURE__ */ p6("p", {
    class: "text-sm",
    children: [
      t5("The local rules are up to date"),
      " ",
      new Date(date).toLocaleString()
    ]
  });
};
var SyncSuccess = ({ date }) => {
  const { t: t5 } = useI18n();
  return /* @__PURE__ */ p6("p", {
    class: "text-sm",
    children: [
      t5("Successfully synchronized with the latest official rules:"),
      " ",
      new Date(date).toLocaleString()
    ]
  });
};
var Checking = () => {
  const { t: t5 } = useI18n();
  return /* @__PURE__ */ p6("p", {
    class: "text-sm",
    "aria-busy": true,
    children: [
      t5("Checking for updates"),
      "..."
    ]
  });
};
var Syncing = () => {
  const { t: t5 } = useI18n();
  return /* @__PURE__ */ p6("p", {
    class: "text-sm",
    children: [
      t5("Rules are being synchronized"),
      "..."
    ]
  });
};
var LocalVersionIsTooOld = ({ minVersion }) => {
  const { t: t5 } = useI18n();
  return /* @__PURE__ */ p6("p", {
    class: "text-sm",
    children: t5(
      "localVersionIsTooOld",
      {
        minVersion
      }
    )
  });
};
var NewVersion = ({ latestVersion }) => {
  const { t: t5 } = useI18n();
  return /* @__PURE__ */ p6("p", {
    class: "text-sm",
    children: [
      t5("foundNewVersion"),
      ":",
      " ",
      /* @__PURE__ */ p6("a", {
        href: "https://github.com/immersive-translate/next-immersive-translate/releases",
        children: latestVersion
      })
    ]
  });
};
var CurrentLatestVersion = () => {
  const { t: t5 } = useI18n();
  return /* @__PURE__ */ p6("p", {
    class: "text-sm",
    children: t5("theLocalExtensionIsUpToUpdate")
  });
};
var SyncFailed = ({ message, handleSyncing, date }) => {
  const { t: t5 } = useI18n();
  return /* @__PURE__ */ p6("p", {
    class: "text-sm",
    children: [
      t5("failToSyncRules"),
      " ",
      /* @__PURE__ */ p6("a", {
        onClick: handleSyncing,
        children: t5("retry")
      }),
      /* @__PURE__ */ p6("br", {}),
      t5("failedReason"),
      "\uFF1A",
      message,
      /* @__PURE__ */ p6("br", {}),
      t5("currentRuleVersion"),
      "\uFF1A",
      date
    ]
  });
};
function About() {
  const [localBuildinConfigUpdatedAt, setLocalBuildinConfigUpdatedAt] = P2(null);
  const { t: t5 } = useI18n();
  const [cacheSize, setCacheSize] = P2(t5("calculating") + "...");
  const [remoteConfig, setRemoteConfig] = P2(null);
  const [_2, setStorageBuildinConfig] = useBuildinConfig();
  const [isNeedUpdate, setIsNeedUpdate] = P2(null);
  const [syncErrorMessage, setSyncErrorMessage] = P2("");
  const [isSyncSuccess, setIsSyncSuccess] = P2(false);
  const [isInvalidLocalVersion, setIsInvalidLocalVersion] = P2(
    false
  );
  const [config, setConfig] = P2(null);
  const [isLatestVersion, setIsLatestVersion] = P2(null);
  const [settings, setSettings, _isPersistent, _error] = useUserConfig();
  const [isCleaning, setIsCleaning] = P2(false);
  const version2 = getVersion();
  const handleSyncing = async () => {
    setSyncErrorMessage("");
    let finalRemoteConfig = remoteConfig;
    if (remoteConfig === null) {
      try {
        const response = await request({ url: buildinConfigSyncUrl });
        if (response) {
          setRemoteConfig(response);
          finalRemoteConfig = response;
          setIsSyncSuccess(true);
        } else {
          setSyncErrorMessage(t5("unknownError"));
          setIsNeedUpdate(null);
        }
      } catch (e3) {
        setIsNeedUpdate(null);
        setSyncErrorMessage(e3.message);
        return;
      }
    }
    if (finalRemoteConfig !== null) {
      setStorageBuildinConfig(finalRemoteConfig);
      setIsNeedUpdate(false);
      setLocalBuildinConfigUpdatedAt(
        finalRemoteConfig.buildinConfigUpdatedAt
      );
    } else {
      setSyncErrorMessage(t5("canNotFetchRemoteRule"));
      setIsNeedUpdate(null);
    }
  };
  j2(() => {
    getConfig().then((localConfig) => {
      const localConfigUpdatedAtIsoString = localConfig.buildinConfigUpdatedAt;
      setConfig(localConfig);
      const localConfigUpdatedAt = new Date(localConfigUpdatedAtIsoString);
      setLocalBuildinConfigUpdatedAt(localConfigUpdatedAtIsoString);
      request({
        url: buildinConfigSyncUrl
      }).then((data) => {
        const remoteMinVersion = data.minVersion;
        const localVersion = version2;
        setRemoteConfig(data);
        const remoteVersion = data.latestVersion;
        if (remoteVersion) {
          if (!isAVersionGreaterOrEqualWithB(localVersion, remoteVersion)) {
            setIsLatestVersion(false);
          } else {
            setIsLatestVersion(true);
          }
        }
        if (isAVersionGreaterOrEqualWithB(localVersion, remoteMinVersion)) {
          const latestIsoTime = data.buildinConfigUpdatedAt;
          const latest = new Date(latestIsoTime);
          if (latest > localConfigUpdatedAt) {
            setIsNeedUpdate(true);
            handleSyncing();
          } else {
            setIsNeedUpdate(false);
          }
        } else {
          setIsInvalidLocalVersion(true);
          setIsNeedUpdate(null);
        }
      }).catch((e3) => {
        setIsNeedUpdate(null);
        setSyncErrorMessage(e3.message);
      });
    });
    getCacheSize().then((size) => {
      setCacheSize(size);
    });
  }, []);
  j2(() => {
    getConfig().then((config2) => {
      setConfig(config2);
    });
  }, [settings, localBuildinConfigUpdatedAt]);
  const handleToggleAlpha = (_e3) => {
    setSettings((state) => {
      const action = !state.alpha;
      if (action) {
        success(t5("enableAlphaSuccess"));
      } else {
        success(t5("disableAlphaSuccess"));
      }
      return {
        ...state,
        alpha: action
      };
    });
  };
  const handleCleanCache = (e3) => {
    e3.preventDefault();
    e3.stopPropagation();
    setIsCleaning(true);
    cleanCache().then(() => {
      setIsCleaning(false);
      success("\u6E05\u7406\u6210\u529F");
      setCacheSize("0 B");
    }).catch((e4) => {
      setIsCleaning(false);
      error(e4.message);
    });
  };
  const handleCacheOption = (checked) => {
    setSettings((state) => {
      return {
        ...state,
        cache: checked
      };
    });
  };
  if (!config) {
    return null;
  }
  return /* @__PURE__ */ p6("div", {
    class: "text-sm",
    children: [
      /* @__PURE__ */ p6("div", {
        class: "nav",
        children: /* @__PURE__ */ p6("strong", {
          onClick: onClickMultipleTimes(7)(handleToggleAlpha),
          class: "text-lg immersive-translate-no-select",
          children: t5("about")
        })
      }),
      /* @__PURE__ */ p6("p", {
        onClick: onClickMultipleTimes(7)(handleToggleAlpha),
        class: "mb-2 immersive-translate-no-select",
        children: [
          "V",
          version2
        ]
      }),
      isLatestVersion === false && /* @__PURE__ */ p6(NewVersion, {
        latestVersion: remoteConfig?.latestVersion
      }),
      isLatestVersion === true && /* @__PURE__ */ p6(CurrentLatestVersion, {}),
      /* @__PURE__ */ p6("fieldset", {
        children: /* @__PURE__ */ p6("label", {
          for: "switch",
          children: [
            /* @__PURE__ */ p6("input", {
              type: "checkbox",
              id: "cache",
              name: "cache",
              role: "switch",
              onChange: () => {
                handleCacheOption(!config.cache);
              },
              checked: config.cache
            }),
            t5("allowCacheTranslations")
          ]
        })
      }),
      !isMonkey() && cacheSize && /* @__PURE__ */ p6("p", {
        class: "text-sm",
        children: [
          t5("cacheSize"),
          "\xA0",
          cacheSize,
          " \xA0 ",
          isCleaning ? /* @__PURE__ */ p6("span", {
            children: [
              t5("cleaning"),
              "..."
            ]
          }) : /* @__PURE__ */ p6("a", {
            class: "text-sm",
            href: "#",
            onClick: handleCleanCache,
            children: t5("cleanCache")
          })
        ]
      }),
      syncErrorMessage ? /* @__PURE__ */ p6(SyncFailed, {
        handleSyncing,
        message: syncErrorMessage,
        date: localBuildinConfigUpdatedAt || ""
      }) : isInvalidLocalVersion ? /* @__PURE__ */ p6(LocalVersionIsTooOld, {
        minVersion: remoteConfig.minVersion
      }) : isNeedUpdate === null ? /* @__PURE__ */ p6(Checking, {}) : isNeedUpdate === true ? /* @__PURE__ */ p6(Syncing, {}) : isSyncSuccess ? /* @__PURE__ */ p6(SyncSuccess, {
        date: localBuildinConfigUpdatedAt
      }) : /* @__PURE__ */ p6(AlreadyLatest, {
        date: localBuildinConfigUpdatedAt
      })
    ]
  });
}

// pages/advanced.tsx
var allLocales2 = Object.keys(locales_default);
var languages4 = getLanguages();
function Options3() {
  const [settings, setSettings, _isPersistent, error2] = useUserConfig();
  const [ctx, setCtx] = P2(null);
  const { t: t5 } = useI18n();
  j2(() => {
    getConfig().then((config2) => {
      getContext({
        config: config2,
        url: globalThis.location.href
      }).then((ctx2) => {
        setCtx(ctx2);
      });
    });
  }, [settings]);
  const selectDisplay = (theme) => {
    setSettings((state) => {
      return { ...state, translationTheme: theme };
    });
  };
  const selectInterfaceLanguage = (lang) => {
    setSettings((state) => {
      return { ...state, interfaceLanguage: lang };
    });
  };
  if (!ctx) {
    return /* @__PURE__ */ p6("div", {
      children: "loading"
    });
  }
  const config = ctx.config;
  return /* @__PURE__ */ p6("div", {
    children: [
      /* @__PURE__ */ p6("div", {
        class: "nav",
        children: /* @__PURE__ */ p6("strong", {
          class: "text-lg",
          children: t5("advanced")
        })
      }),
      /* @__PURE__ */ p6("div", {
        class: "nav",
        children: [
          /* @__PURE__ */ p6(NavLeft, {
            title: t5("translate all areas of the page"),
            description: t5("translationAreaDescription")
          }),
          /* @__PURE__ */ p6("label", {
            for: "switch",
            children: /* @__PURE__ */ p6("input", {
              type: "checkbox",
              id: "switch",
              name: "switch",
              role: "switch",
              onChange: (e3) => {
                const checked = e3.target.checked;
                setSettings((state) => {
                  return {
                    ...state,
                    translationArea: checked ? "body" : "main"
                  };
                });
              },
              checked: config.translationArea === "body"
            })
          })
        ]
      }),
      /* @__PURE__ */ p6("div", {
        class: "nav",
        children: [
          /* @__PURE__ */ p6(NavLeft, {
            title: t5("translate to the bottom of the page"),
            description: t5("translateToThePageEndImmediatelyDescription")
          }),
          /* @__PURE__ */ p6("label", {
            for: "switch",
            children: /* @__PURE__ */ p6("input", {
              type: "checkbox",
              onChange: (e3) => {
                const checked = e3.target.checked;
                setSettings((state) => {
                  return {
                    ...state,
                    translationStartMode: checked ? "immediate" : "dynamic"
                  };
                });
              },
              checked: config.translationStartMode === "immediate",
              id: "switch",
              name: "switch",
              role: "switch"
            })
          })
        ]
      }),
      /* @__PURE__ */ p6("div", {
        class: "nav",
        children: [
          /* @__PURE__ */ p6(NavLeft, {
            title: t5("the number of characters to be translated first")
          }),
          /* @__PURE__ */ p6("label", {
            for: "count",
            children: /* @__PURE__ */ p6("input", {
              type: "number",
              id: "count",
              onChange: (e3) => {
                const count2 = e3.target.value;
                setSettings((state) => {
                  return {
                    ...state,
                    immediateTranslationTextCount: parseInt(count2)
                  };
                });
              },
              name: "count",
              value: config.immediateTranslationTextCount,
              placeholder: "Text Length",
              required: true
            })
          })
        ]
      })
    ]
  });
}

// twind_config.ts
var twind_config_default = Rt({
  presets: [y(), l3()]
});

// pages/options.tsx
var version = getVersion();
function main() {
  const mountPoint = document.getElementById("mount");
  if (mountPoint) {
    (async () => {
      $e(twind_config_default);
      const config = await getConfig();
      if (config.debug) {
        log_default.setLevel("debug");
      }
      re(
        /* @__PURE__ */ p6(TranslateProvider, {
          lang: config.interfaceLanguage,
          fallbackLang: "zh-CN",
          translations: locales_default,
          children: /* @__PURE__ */ p6(App, {
            donateUrl: config.donateUrl
          })
        }),
        mountPoint
      );
    })();
  }
}
function App(props) {
  const route = useRoute();
  const { t: t5 } = useI18n();
  async () => {
    const config = await getConfig();
  };
  const navs = [
    {
      name: t5("general"),
      props: {
        href: "#general",
        className: "secondary"
      }
    },
    {
      name: t5("interface"),
      props: {
        href: "#interface",
        className: "secondary"
      }
    },
    {
      name: t5("import_export"),
      props: {
        href: "#import_export",
        className: "secondary"
      }
    },
    {
      name: t5("about"),
      props: {
        href: "#about",
        className: "secondary"
      }
    }
  ];
  navs.forEach((nav) => {
    if (route === nav.props.href) {
      nav.props.className = "primary";
      nav.props["aria-current"] = "page";
    }
  });
  return /* @__PURE__ */ p6(L, {
    children: /* @__PURE__ */ p6("main", {
      class: "container-fluid",
      children: [
        /* @__PURE__ */ p6("aside", {
          children: /* @__PURE__ */ p6("nav", {
            class: "flex flex-col h-full justify-between",
            children: [
              /* @__PURE__ */ p6("div", {
                children: [
                  /* @__PURE__ */ p6("hgroup", {
                    children: [
                      /* @__PURE__ */ p6("h4", {
                        class: "cursor-pointer p-0 m-0",
                        onClick: () => {
                          globalThis.location.hash = "#general";
                        },
                        children: t5("browser.brandName")
                      }),
                      /* @__PURE__ */ p6("h6", {
                        class: "!text-sm",
                        children: version
                      })
                    ]
                  }),
                  /* @__PURE__ */ p6("ul", {
                    children: navs.map((nav, index) => /* @__PURE__ */ p6("li", {
                      class: "li",
                      children: /* @__PURE__ */ p6("a", {
                        ...nav.props,
                        children: nav.name
                      })
                    }, `nav-${index}`))
                  })
                ]
              }),
              /* @__PURE__ */ p6("div", {
                class: "m-0 p-0 flex flex-col",
                children: [
                  /* @__PURE__ */ p6("a", {
                    class: "py-3 text-xs no-focus secondary",
                    href: props.donateUrl,
                    children: [
                      t5("donateCafe"),
                      "\u2615\uFE0F"
                    ]
                  }),
                  /* @__PURE__ */ p6("a", {
                    class: "py-3 text-xs no-focus secondary",
                    href: "https://immersive-translate.owenyoung.com/CHANGELOG.html",
                    children: t5("changelog")
                  }),
                  /* @__PURE__ */ p6("a", {
                    class: "py-3 text-xs no-focus secondary",
                    href: "https://immersive-translate.owenyoung.com/",
                    children: t5("document")
                  }),
                  /* @__PURE__ */ p6("a", {
                    class: "py-3 text-xs no-focus secondary",
                    href: "#developer",
                    children: t5("developer")
                  })
                ]
              })
            ]
          })
        }),
        /* @__PURE__ */ p6("div", {
          role: "main",
          children: /* @__PURE__ */ p6(Switch, {
            value: route,
            defaultCase: /* @__PURE__ */ p6(General, {}),
            cases: {
              "#general": /* @__PURE__ */ p6(General, {}),
              "#interface": /* @__PURE__ */ p6(Options, {}),
              "#import_export": /* @__PURE__ */ p6(ImportExport, {}),
              "#about": /* @__PURE__ */ p6(About, {}),
              "#advanced": /* @__PURE__ */ p6(Options3, {}),
              "#developer": /* @__PURE__ */ p6(Options2, {})
            }
          })
        })
      ]
    })
  });
}

// options.tsx
main();
