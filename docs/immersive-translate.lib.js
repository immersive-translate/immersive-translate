(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // <define:process.env>
  var define_process_env_default = { BUILD_TIME: "2022-12-23T05:31:42.804Z", TRANSLATE_SERVICE: "google", MOCK: "0", DEBUG: "0", TRANSLATE_USERSCRIPT: "1" };

  // browser/userscript_polyfill.ts
  var storageApi = {
    get: async (key) => {
      const value = await GM.getValue(key);
      return { [key]: value };
    },
    set: async (obj) => {
      for (const key in obj) {
        await GM.setValue(key, obj[key]);
      }
    }
  };
  var browser = {
    storage: {
      local: storageApi,
      sync: storageApi
    }
  };
  globalThis.browser = browser;

  // browser/userscript_fetch_polifill.js
  (function() {
    "use strict";
    var Promise2 = window.Bluebird || window.Promise;
    if (self.GM_fetch) {
      return;
    }
    function normalizeName(name) {
      if (typeof name !== "string") {
        name = name.toString();
      }
      if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
        throw new TypeError("Invalid character in header field name");
      }
      return name.toLowerCase();
    }
    function normalizeValue(value) {
      if (typeof value !== "string") {
        value = value.toString();
      }
      return value;
    }
    function Headers(headers3) {
      this.map = {};
      if (headers3 instanceof Headers) {
        headers3.forEach(function(value, name) {
          this.append(name, value);
        }, this);
      } else if (headers3) {
        Object.getOwnPropertyNames(headers3).forEach(function(name) {
          this.append(name, headers3[name]);
        }, this);
      }
    }
    Headers.prototype.append = function(name, value) {
      name = normalizeName(name);
      value = normalizeValue(value);
      var list = this.map[name];
      if (!list) {
        list = [];
        this.map[name] = list;
      }
      list.push(value);
    };
    Headers.prototype["delete"] = function(name) {
      delete this.map[normalizeName(name)];
    };
    Headers.prototype.get = function(name) {
      var values = this.map[normalizeName(name)];
      return values ? values[0] : null;
    };
    Headers.prototype.getAll = function(name) {
      return this.map[normalizeName(name)] || [];
    };
    Headers.prototype.has = function(name) {
      return this.map.hasOwnProperty(normalizeName(name));
    };
    Headers.prototype.set = function(name, value) {
      this.map[normalizeName(name)] = [normalizeValue(value)];
    };
    Headers.prototype.forEach = function(callback, thisArg) {
      Object.getOwnPropertyNames(this.map).forEach(function(name) {
        this.map[name].forEach(function(value) {
          callback.call(thisArg, value, name, this);
        }, this);
      }, this);
    };
    function consumed(body) {
      if (body.bodyUsed) {
        return Promise2.reject(new TypeError("Already read"));
      }
      body.bodyUsed = true;
    }
    function fileReaderReady(reader) {
      return new Promise2(function(resolve, reject) {
        reader.onload = function() {
          resolve(reader.result);
        };
        reader.onerror = function() {
          reject(reader.error);
        };
      });
    }
    function readBlobAsArrayBuffer(blob) {
      var reader = new FileReader();
      reader.readAsArrayBuffer(blob);
      return fileReaderReady(reader);
    }
    function readBlobAsText(blob) {
      var reader = new FileReader();
      reader.readAsText(blob);
      return fileReaderReady(reader);
    }
    var support = {
      blob: "FileReader" in self && "Blob" in self && function() {
        try {
          new Blob();
          return true;
        } catch (e18) {
          return false;
        }
      }(),
      formData: "FormData" in self
    };
    function Body() {
      this.bodyUsed = false;
      this._initBody = function(body) {
        this._bodyInit = body;
        if (typeof body === "string") {
          this._bodyText = body;
        } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
          this._bodyBlob = body;
        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
          this._bodyFormData = body;
        } else if (!body) {
          this._bodyText = "";
        } else {
          throw new Error("unsupported BodyInit type");
        }
      };
      if (support.blob) {
        this.blob = function() {
          var rejected = consumed(this);
          if (rejected) {
            return rejected;
          }
          if (this._bodyBlob) {
            return Promise2.resolve(this._bodyBlob);
          } else if (this._bodyFormData) {
            throw new Error("could not read FormData body as blob");
          } else {
            return Promise2.resolve(new Blob([this._bodyText]));
          }
        };
        this.arrayBuffer = function() {
          return this.blob().then(readBlobAsArrayBuffer);
        };
        this.text = function() {
          var rejected = consumed(this);
          if (rejected) {
            return rejected;
          }
          if (this._bodyBlob) {
            return readBlobAsText(this._bodyBlob);
          } else if (this._bodyFormData) {
            throw new Error("could not read FormData body as text");
          } else {
            return Promise2.resolve(this._bodyText);
          }
        };
      } else {
        this.text = function() {
          var rejected = consumed(this);
          return rejected ? rejected : Promise2.resolve(this._bodyText);
        };
      }
      if (support.formData) {
        this.formData = function() {
          return this.text().then(decode);
        };
      }
      this.json = function() {
        return this.text().then(JSON.parse);
      };
      return this;
    }
    var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
    function normalizeMethod(method) {
      var upcased = method.toUpperCase();
      return methods.indexOf(upcased) > -1 ? upcased : method;
    }
    function Request(url, options) {
      options = options || {};
      this.url = url;
      this.credentials = options.credentials || "omit";
      this.headers = new Headers(options.headers);
      this.method = normalizeMethod(options.method || "GET");
      this.mode = options.mode || null;
      this.referrer = null;
      if ((this.method === "GET" || this.method === "HEAD") && options.body) {
        throw new TypeError("Body not allowed for GET or HEAD requests");
      }
      this._initBody(options.body);
    }
    function decode(body) {
      var form = new FormData();
      body.trim().split("&").forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split("=");
          var name = split.shift().replace(/\+/g, " ");
          var value = split.join("=").replace(/\+/g, " ");
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
      return form;
    }
    function headers2(responseHeaders) {
      var head = new Headers();
      var pairs = responseHeaders.trim().split("\n");
      pairs.forEach(function(header) {
        var split = header.trim().split(":");
        var key = split.shift().trim();
        var value = split.join(":").trim();
        head.append(key, value);
      });
      return head;
    }
    Body.call(Request.prototype);
    function Response(bodyInit, options) {
      if (!options) {
        options = {};
      }
      this._initBody(bodyInit);
      this.type = "default";
      this.url = null;
      this.status = options.status;
      this.ok = this.status >= 200 && this.status < 300;
      this.statusText = options.statusText;
      this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
      this.url = options.url || "";
    }
    Body.call(Response.prototype);
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
    self.GM_fetch = function(input, init) {
      var request3;
      if (Request.prototype.isPrototypeOf(input) && !init) {
        request3 = input;
      } else {
        request3 = new Request(input, init);
      }
      return new Promise2(function(resolve, reject) {
        var xhr_details = {};
        var _parsedRespHeaders;
        function responseURL(finalUrl, rawRespHeaders, respHeaders) {
          if (finalUrl) {
            return finalUrl;
          }
          if (/^X-Request-URL:/m.test(rawRespHeaders)) {
            return respHeaders.get("X-Request-URL");
          }
          return;
        }
        xhr_details.method = request3.method;
        xhr_details.url = request3.url;
        xhr_details.synchronous = false;
        xhr_details.onload = function(resp) {
          var status = resp.status;
          if (status < 100 || status > 599) {
            reject(new TypeError("Network request failed"));
            return;
          }
          var rawRespHeaders = resp.responseHeaders;
          _parsedRespHeaders = headers2(rawRespHeaders);
          var options = {
            status,
            statusText: resp.statusText,
            headers: _parsedRespHeaders,
            url: responseURL(resp.finalUrl, rawRespHeaders, _parsedRespHeaders)
          };
          var body = resp.responseText;
          resolve(new Response(body, options));
        };
        xhr_details.onerror = function() {
          reject(new TypeError("Network request failed"));
        };
        xhr_details.headers = {};
        request3.headers.forEach(function(value, name) {
          xhr_details.headers[name] = value;
        });
        if (typeof request3._bodyInit !== "undefined") {
          xhr_details.data = request3._bodyInit;
        }
        GM.xmlHttpRequest(xhr_details);
      });
    };
    self.GM_fetch.polyfill = true;
  })();

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
  function clampAndTruncate(n21, max = 255, min = 0) {
    return Math.trunc(Math.max(Math.min(n21, max), min));
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
  function k(e18, t15) {
    for (var _2 in t15)
      e18[_2] = t15[_2];
    return e18;
  }
  function j(e18) {
    var t15 = e18.parentNode;
    t15 && t15.removeChild(e18);
  }
  function w(e18, t15, _2, r13, l18) {
    var o21 = { type: e18, props: t15, key: _2, ref: r13, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: l18 ?? ++$ };
    return l18 == null && d.vnode != null && d.vnode(o21), o21;
  }
  function L(e18) {
    return e18.children;
  }
  function U(e18, t15) {
    this.props = e18, this.context = t15;
  }
  function C(e18, t15) {
    if (t15 == null)
      return e18.__ ? C(e18.__, e18.__.__k.indexOf(e18) + 1) : null;
    for (var _2; t15 < e18.__k.length; t15++)
      if ((_2 = e18.__k[t15]) != null && _2.__e != null)
        return _2.__e;
    return typeof e18.type == "function" ? C(e18) : null;
  }
  function z(e18) {
    var t15, _2;
    if ((e18 = e18.__) != null && e18.__c != null) {
      for (e18.__e = e18.__c.base = null, t15 = 0; t15 < e18.__k.length; t15++)
        if ((_2 = e18.__k[t15]) != null && _2.__e != null) {
          e18.__e = e18.__c.base = _2.__e;
          break;
        }
      return z(e18);
    }
  }
  function M(e18) {
    (!e18.__d && (e18.__d = true) && S.push(e18) && !D.__r++ || F !== d.debounceRendering) && ((F = d.debounceRendering) || setTimeout)(D);
  }
  function D() {
    for (var e18; D.__r = S.length; )
      e18 = S.sort(function(t15, _2) {
        return t15.__v.__b - _2.__v.__b;
      }), S = [], e18.some(function(t15) {
        var _2, r13, l18, o21, s19, f13;
        t15.__d && (s19 = (o21 = (_2 = t15).__v).__e, (f13 = _2.__P) && (r13 = [], (l18 = k({}, o21)).__v = o21.__v + 1, W(f13, o21, l18, _2.__n, f13.ownerSVGElement !== void 0, o21.__h != null ? [s19] : null, r13, s19 ?? C(o21), o21.__h), K(r13, o21), o21.__e != s19 && z(o21)));
      });
  }
  function G(e18, t15, _2, r13, l18, o21, s19, f13, p19, a18) {
    var n21, h11, c25, i21, u15, b10, v6, y7 = r13 && r13.__k || V, g8 = y7.length;
    for (_2.__k = [], n21 = 0; n21 < t15.length; n21++)
      if ((i21 = _2.__k[n21] = (i21 = t15[n21]) == null || typeof i21 == "boolean" ? null : typeof i21 == "string" || typeof i21 == "number" || typeof i21 == "bigint" ? w(null, i21, null, null, i21) : Array.isArray(i21) ? w(L, { children: i21 }, null, null, null) : i21.__b > 0 ? w(i21.type, i21.props, i21.key, i21.ref ? i21.ref : null, i21.__v) : i21) != null) {
        if (i21.__ = _2, i21.__b = _2.__b + 1, (c25 = y7[n21]) === null || c25 && i21.key == c25.key && i21.type === c25.type)
          y7[n21] = void 0;
        else
          for (h11 = 0; h11 < g8; h11++) {
            if ((c25 = y7[h11]) && i21.key == c25.key && i21.type === c25.type) {
              y7[h11] = void 0;
              break;
            }
            c25 = null;
          }
        W(e18, i21, c25 = c25 || T, l18, o21, s19, f13, p19, a18), u15 = i21.__e, (h11 = i21.ref) && c25.ref != h11 && (v6 || (v6 = []), c25.ref && v6.push(c25.ref, null, i21), v6.push(h11, i21.__c || u15, i21)), u15 != null ? (b10 == null && (b10 = u15), typeof i21.type == "function" && i21.__k === c25.__k ? i21.__d = p19 = q(i21, p19, e18) : p19 = J(e18, i21, c25, y7, u15, p19), typeof _2.type == "function" && (_2.__d = p19)) : p19 && c25.__e == p19 && p19.parentNode != e18 && (p19 = C(c25));
      }
    for (_2.__e = b10, n21 = g8; n21--; )
      y7[n21] != null && (typeof _2.type == "function" && y7[n21].__e != null && y7[n21].__e == _2.__d && (_2.__d = C(r13, n21 + 1)), X(y7[n21], y7[n21]));
    if (v6)
      for (n21 = 0; n21 < v6.length; n21++)
        Q(v6[n21], v6[++n21], v6[++n21]);
  }
  function q(e18, t15, _2) {
    for (var r13, l18 = e18.__k, o21 = 0; l18 && o21 < l18.length; o21++)
      (r13 = l18[o21]) && (r13.__ = e18, t15 = typeof r13.type == "function" ? q(r13, t15, _2) : J(_2, r13, r13, l18, r13.__e, t15));
    return t15;
  }
  function J(e18, t15, _2, r13, l18, o21) {
    var s19, f13, p19;
    if (t15.__d !== void 0)
      s19 = t15.__d, t15.__d = void 0;
    else if (_2 == null || l18 != o21 || l18.parentNode == null)
      e:
        if (o21 == null || o21.parentNode !== e18)
          e18.appendChild(l18), s19 = null;
        else {
          for (f13 = o21, p19 = 0; (f13 = f13.nextSibling) && p19 < r13.length; p19 += 2)
            if (f13 == l18)
              break e;
          e18.insertBefore(l18, o21), s19 = o21;
        }
    return s19 !== void 0 ? s19 : l18.nextSibling;
  }
  function _e(e18, t15, _2, r13, l18) {
    var o21;
    for (o21 in _2)
      o21 === "children" || o21 === "key" || o21 in t15 || N(e18, o21, null, _2[o21], r13);
    for (o21 in t15)
      l18 && typeof t15[o21] != "function" || o21 === "children" || o21 === "key" || o21 === "value" || o21 === "checked" || _2[o21] === t15[o21] || N(e18, o21, t15[o21], _2[o21], r13);
  }
  function I(e18, t15, _2) {
    t15[0] === "-" ? e18.setProperty(t15, _2) : e18[t15] = _2 == null ? "" : typeof _2 != "number" || Z.test(t15) ? _2 : _2 + "px";
  }
  function N(e18, t15, _2, r13, l18) {
    var o21;
    e:
      if (t15 === "style")
        if (typeof _2 == "string")
          e18.style.cssText = _2;
        else {
          if (typeof r13 == "string" && (e18.style.cssText = r13 = ""), r13)
            for (t15 in r13)
              _2 && t15 in _2 || I(e18.style, t15, "");
          if (_2)
            for (t15 in _2)
              r13 && _2[t15] === r13[t15] || I(e18.style, t15, _2[t15]);
        }
      else if (t15[0] === "o" && t15[1] === "n")
        o21 = t15 !== (t15 = t15.replace(/Capture$/, "")), t15 = t15.toLowerCase() in e18 ? t15.toLowerCase().slice(2) : t15.slice(2), e18.l || (e18.l = {}), e18.l[t15 + o21] = _2, _2 ? r13 || e18.addEventListener(t15, o21 ? R : O, o21) : e18.removeEventListener(t15, o21 ? R : O, o21);
      else if (t15 !== "dangerouslySetInnerHTML") {
        if (l18)
          t15 = t15.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t15 !== "href" && t15 !== "list" && t15 !== "form" && t15 !== "tabIndex" && t15 !== "download" && t15 in e18)
          try {
            e18[t15] = _2 ?? "";
            break e;
          } catch {
          }
        typeof _2 == "function" || (_2 != null && (_2 !== false || t15[0] === "a" && t15[1] === "r") ? e18.setAttribute(t15, _2) : e18.removeAttribute(t15));
      }
  }
  function O(e18) {
    this.l[e18.type + false](d.event ? d.event(e18) : e18);
  }
  function R(e18) {
    this.l[e18.type + true](d.event ? d.event(e18) : e18);
  }
  function W(e18, t15, _2, r13, l18, o21, s19, f13, p19) {
    var a18, n21, h11, c25, i21, u15, b10, v6, y7, g8, x9, H4, E5, m15 = t15.type;
    if (t15.constructor !== void 0)
      return null;
    _2.__h != null && (p19 = _2.__h, f13 = t15.__e = _2.__e, t15.__h = null, o21 = [f13]), (a18 = d.__b) && a18(t15);
    try {
      e:
        if (typeof m15 == "function") {
          if (v6 = t15.props, y7 = (a18 = m15.contextType) && r13[a18.__c], g8 = a18 ? y7 ? y7.props.value : a18.__ : r13, _2.__c ? b10 = (n21 = t15.__c = _2.__c).__ = n21.__E : ("prototype" in m15 && m15.prototype.render ? t15.__c = n21 = new m15(v6, g8) : (t15.__c = n21 = new U(v6, g8), n21.constructor = m15, n21.render = oe), y7 && y7.sub(n21), n21.props = v6, n21.state || (n21.state = {}), n21.context = g8, n21.__n = r13, h11 = n21.__d = true, n21.__h = []), n21.__s == null && (n21.__s = n21.state), m15.getDerivedStateFromProps != null && (n21.__s == n21.state && (n21.__s = k({}, n21.__s)), k(n21.__s, m15.getDerivedStateFromProps(v6, n21.__s))), c25 = n21.props, i21 = n21.state, h11)
            m15.getDerivedStateFromProps == null && n21.componentWillMount != null && n21.componentWillMount(), n21.componentDidMount != null && n21.__h.push(n21.componentDidMount);
          else {
            if (m15.getDerivedStateFromProps == null && v6 !== c25 && n21.componentWillReceiveProps != null && n21.componentWillReceiveProps(v6, g8), !n21.__e && n21.shouldComponentUpdate != null && n21.shouldComponentUpdate(v6, n21.__s, g8) === false || t15.__v === _2.__v) {
              n21.props = v6, n21.state = n21.__s, t15.__v !== _2.__v && (n21.__d = false), n21.__v = t15, t15.__e = _2.__e, t15.__k = _2.__k, t15.__k.forEach(function(A6) {
                A6 && (A6.__ = t15);
              }), n21.__h.length && s19.push(n21);
              break e;
            }
            n21.componentWillUpdate != null && n21.componentWillUpdate(v6, n21.__s, g8), n21.componentDidUpdate != null && n21.__h.push(function() {
              n21.componentDidUpdate(c25, i21, u15);
            });
          }
          if (n21.context = g8, n21.props = v6, n21.__v = t15, n21.__P = e18, x9 = d.__r, H4 = 0, "prototype" in m15 && m15.prototype.render)
            n21.state = n21.__s, n21.__d = false, x9 && x9(t15), a18 = n21.render(n21.props, n21.state, n21.context);
          else
            do
              n21.__d = false, x9 && x9(t15), a18 = n21.render(n21.props, n21.state, n21.context), n21.state = n21.__s;
            while (n21.__d && ++H4 < 25);
          n21.state = n21.__s, n21.getChildContext != null && (r13 = k(k({}, r13), n21.getChildContext())), h11 || n21.getSnapshotBeforeUpdate == null || (u15 = n21.getSnapshotBeforeUpdate(c25, i21)), E5 = a18 != null && a18.type === L && a18.key == null ? a18.props.children : a18, G(e18, Array.isArray(E5) ? E5 : [E5], t15, _2, r13, l18, o21, s19, f13, p19), n21.base = t15.__e, t15.__h = null, n21.__h.length && s19.push(n21), b10 && (n21.__E = n21.__ = null), n21.__e = false;
        } else
          o21 == null && t15.__v === _2.__v ? (t15.__k = _2.__k, t15.__e = _2.__e) : t15.__e = ne(_2.__e, t15, _2, r13, l18, o21, s19, p19);
      (a18 = d.diffed) && a18(t15);
    } catch (A6) {
      t15.__v = null, (p19 || o21 != null) && (t15.__e = f13, t15.__h = !!p19, o21[o21.indexOf(f13)] = null), d.__e(A6, t15, _2);
    }
  }
  function K(e18, t15) {
    d.__c && d.__c(t15, e18), e18.some(function(_2) {
      try {
        e18 = _2.__h, _2.__h = [], e18.some(function(r13) {
          r13.call(_2);
        });
      } catch (r13) {
        d.__e(r13, _2.__v);
      }
    });
  }
  function ne(e18, t15, _2, r13, l18, o21, s19, f13) {
    var p19, a18, n21, h11 = _2.props, c25 = t15.props, i21 = t15.type, u15 = 0;
    if (i21 === "svg" && (l18 = true), o21 != null) {
      for (; u15 < o21.length; u15++)
        if ((p19 = o21[u15]) && "setAttribute" in p19 == !!i21 && (i21 ? p19.localName === i21 : p19.nodeType === 3)) {
          e18 = p19, o21[u15] = null;
          break;
        }
    }
    if (e18 == null) {
      if (i21 === null)
        return document.createTextNode(c25);
      e18 = l18 ? document.createElementNS("http://www.w3.org/2000/svg", i21) : document.createElement(i21, c25.is && c25), o21 = null, f13 = false;
    }
    if (i21 === null)
      h11 === c25 || f13 && e18.data === c25 || (e18.data = c25);
    else {
      if (o21 = o21 && P.call(e18.childNodes), a18 = (h11 = _2.props || T).dangerouslySetInnerHTML, n21 = c25.dangerouslySetInnerHTML, !f13) {
        if (o21 != null)
          for (h11 = {}, u15 = 0; u15 < e18.attributes.length; u15++)
            h11[e18.attributes[u15].name] = e18.attributes[u15].value;
        (n21 || a18) && (n21 && (a18 && n21.__html == a18.__html || n21.__html === e18.innerHTML) || (e18.innerHTML = n21 && n21.__html || ""));
      }
      if (_e(e18, c25, h11, l18, f13), n21)
        t15.__k = [];
      else if (u15 = t15.props.children, G(e18, Array.isArray(u15) ? u15 : [u15], t15, _2, r13, l18 && i21 !== "foreignObject", o21, s19, o21 ? o21[0] : _2.__k && C(_2, 0), f13), o21 != null)
        for (u15 = o21.length; u15--; )
          o21[u15] != null && j(o21[u15]);
      f13 || ("value" in c25 && (u15 = c25.value) !== void 0 && (u15 !== e18.value || i21 === "progress" && !u15 || i21 === "option" && u15 !== h11.value) && N(e18, "value", u15, h11.value, false), "checked" in c25 && (u15 = c25.checked) !== void 0 && u15 !== e18.checked && N(e18, "checked", u15, h11.checked, false));
    }
    return e18;
  }
  function Q(e18, t15, _2) {
    try {
      typeof e18 == "function" ? e18(t15) : e18.current = t15;
    } catch (r13) {
      d.__e(r13, _2);
    }
  }
  function X(e18, t15, _2) {
    var r13, l18;
    if (d.unmount && d.unmount(e18), (r13 = e18.ref) && (r13.current && r13.current !== e18.__e || Q(r13, null, t15)), (r13 = e18.__c) != null) {
      if (r13.componentWillUnmount)
        try {
          r13.componentWillUnmount();
        } catch (o21) {
          d.__e(o21, t15);
        }
      r13.base = r13.__P = null, e18.__c = void 0;
    }
    if (r13 = e18.__k)
      for (l18 = 0; l18 < r13.length; l18++)
        r13[l18] && X(r13[l18], t15, typeof e18.type != "function");
    _2 || e18.__e == null || j(e18.__e), e18.__ = e18.__e = e18.__d = void 0;
  }
  function oe(e18, t15, _2) {
    return this.constructor(e18, _2);
  }
  P = V.slice, d = { __e: function(e18, t15, _2, r13) {
    for (var l18, o21, s19; t15 = t15.__; )
      if ((l18 = t15.__c) && !l18.__)
        try {
          if ((o21 = l18.constructor) && o21.getDerivedStateFromError != null && (l18.setState(o21.getDerivedStateFromError(e18)), s19 = l18.__d), l18.componentDidCatch != null && (l18.componentDidCatch(e18, r13 || {}), s19 = l18.__d), s19)
            return l18.__E = l18;
        } catch (f13) {
          e18 = f13;
        }
    throw e18;
  } }, $ = 0, Y = function(e18) {
    return e18 != null && e18.constructor === void 0;
  }, U.prototype.setState = function(e18, t15) {
    var _2;
    _2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k({}, this.state), typeof e18 == "function" && (e18 = e18(k({}, _2), this.props)), e18 && k(_2, e18), e18 != null && this.__v && (t15 && this.__h.push(t15), M(this));
  }, U.prototype.forceUpdate = function(e18) {
    this.__v && (this.__e = true, e18 && this.__h.push(e18), M(this));
  }, U.prototype.render = L, S = [], D.__r = 0, B = 0;

  // https://esm.sh/stable/preact@10.11.0/deno/hooks.js
  var i;
  var n;
  var d2;
  var N2;
  var q2 = [];
  var l = [];
  var V2 = d.__b;
  var g = d.__r;
  var b = d.diffed;
  var C2 = d.__c;
  var A = d.unmount;
  function R2() {
    for (var _2; _2 = q2.shift(); )
      if (_2.__P && _2.__H)
        try {
          _2.__H.__h.forEach(m), _2.__H.__h.forEach(p), _2.__H.__h = [];
        } catch (t15) {
          _2.__H.__h = [], d.__e(t15, _2.__v);
        }
  }
  d.__b = function(_2) {
    typeof _2.type != "function" || _2.o || _2.type === L ? _2.o || (_2.o = _2.__ && _2.__.o ? _2.__.o : "") : _2.o = (_2.__ && _2.__.o ? _2.__.o : "") + (_2.__ && _2.__.__k ? _2.__.__k.indexOf(_2) : 0), n = null, V2 && V2(_2);
  }, d.__r = function(_2) {
    g && g(_2), i = 0;
    var t15 = (n = _2.__c).__H;
    t15 && (d2 === n ? (t15.__h = [], n.__h = [], t15.__.forEach(function(u15) {
      u15.__N && (u15.__ = u15.__N), u15.__V = l, u15.__N = u15.i = void 0;
    })) : (t15.__h.forEach(m), t15.__h.forEach(p), t15.__h = [])), d2 = n;
  }, d.diffed = function(_2) {
    b && b(_2);
    var t15 = _2.__c;
    t15 && t15.__H && (t15.__H.__h.length && (q2.push(t15) !== 1 && N2 === d.requestAnimationFrame || ((N2 = d.requestAnimationFrame) || S2)(R2)), t15.__H.__.forEach(function(u15) {
      u15.i && (u15.__H = u15.i), u15.__V !== l && (u15.__ = u15.__V), u15.i = void 0, u15.__V = l;
    })), d2 = n = null;
  }, d.__c = function(_2, t15) {
    t15.some(function(u15) {
      try {
        u15.__h.forEach(m), u15.__h = u15.__h.filter(function(o21) {
          return !o21.__ || p(o21);
        });
      } catch (o21) {
        t15.some(function(r13) {
          r13.__h && (r13.__h = []);
        }), t15 = [], d.__e(o21, u15.__v);
      }
    }), C2 && C2(_2, t15);
  }, d.unmount = function(_2) {
    A && A(_2);
    var t15, u15 = _2.__c;
    u15 && u15.__H && (u15.__H.__.forEach(function(o21) {
      try {
        m(o21);
      } catch (r13) {
        t15 = r13;
      }
    }), u15.__H = void 0, t15 && d.__e(t15, u15.__v));
  };
  var F2 = typeof requestAnimationFrame == "function";
  function S2(_2) {
    var t15, u15 = function() {
      clearTimeout(o21), F2 && cancelAnimationFrame(t15), setTimeout(_2);
    }, o21 = setTimeout(u15, 100);
    F2 && (t15 = requestAnimationFrame(u15));
  }
  function m(_2) {
    var t15 = n, u15 = _2.__c;
    typeof u15 == "function" && (_2.__c = void 0, u15()), n = t15;
  }
  function p(_2) {
    var t15 = n;
    _2.__c = _2.__(), n = t15;
  }

  // https://esm.sh/v99/memoize-one@6.0.0/deno/memoize-one.js
  var s = Number.isNaN || function(r13) {
    return typeof r13 == "number" && r13 !== r13;
  };

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/isFunction.js
  function t(n21) {
    return typeof n21 == "function";
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/createErrorClass.js
  function e(o21) {
    let r13 = o21((t15) => {
      Error.call(t15), t15.stack = new Error().stack;
    });
    return r13.prototype = Object.create(Error.prototype), r13.prototype.constructor = r13, r13;
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/UnsubscriptionError.js
  var p2 = e((i21) => function(r13) {
    i21(this), this.message = r13 ? `${r13.length} errors occurred during unsubscription:
${r13.map((n21, s19) => `${s19 + 1}) ${n21.toString()}`).join(`
  `)}` : "", this.name = "UnsubscriptionError", this.errors = r13;
  });

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/arrRemove.js
  function o2(e18, n21) {
    if (e18) {
      let i21 = e18.indexOf(n21);
      0 <= i21 && e18.splice(i21, 1);
    }
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/Subscription.js
  var e2 = class {
    constructor(i21) {
      this.initialTeardown = i21, this.closed = false, this._parentage = null, this._finalizers = null;
    }
    unsubscribe() {
      let i21;
      if (!this.closed) {
        this.closed = true;
        let { _parentage: s19 } = this;
        if (s19)
          if (this._parentage = null, Array.isArray(s19))
            for (let t15 of s19)
              t15.remove(this);
          else
            s19.remove(this);
        let { initialTeardown: c25 } = this;
        if (t(c25))
          try {
            c25();
          } catch (t15) {
            i21 = t15 instanceof p2 ? t15.errors : [t15];
          }
        let { _finalizers: f13 } = this;
        if (f13) {
          this._finalizers = null;
          for (let t15 of f13)
            try {
              h(t15);
            } catch (o21) {
              i21 = i21 ?? [], o21 instanceof p2 ? i21 = [...i21, ...o21.errors] : i21.push(o21);
            }
        }
        if (i21)
          throw new p2(i21);
      }
    }
    add(i21) {
      var s19;
      if (i21 && i21 !== this)
        if (this.closed)
          h(i21);
        else {
          if (i21 instanceof e2) {
            if (i21.closed || i21._hasParent(this))
              return;
            i21._addParent(this);
          }
          (this._finalizers = (s19 = this._finalizers) !== null && s19 !== void 0 ? s19 : []).push(i21);
        }
    }
    _hasParent(i21) {
      let { _parentage: s19 } = this;
      return s19 === i21 || Array.isArray(s19) && s19.includes(i21);
    }
    _addParent(i21) {
      let { _parentage: s19 } = this;
      this._parentage = Array.isArray(s19) ? (s19.push(i21), s19) : s19 ? [s19, i21] : i21;
    }
    _removeParent(i21) {
      let { _parentage: s19 } = this;
      s19 === i21 ? this._parentage = null : Array.isArray(s19) && o2(s19, i21);
    }
    remove(i21) {
      let { _finalizers: s19 } = this;
      s19 && o2(s19, i21), i21 instanceof e2 && i21._removeParent(this);
    }
  };
  e2.EMPTY = (() => {
    let r13 = new e2();
    return r13.closed = true, r13;
  })();
  var p3 = e2.EMPTY;
  function d3(r13) {
    return r13 instanceof e2 || r13 && "closed" in r13 && t(r13.remove) && t(r13.add) && t(r13.unsubscribe);
  }
  function h(r13) {
    t(r13) ? r13() : r13.unsubscribe();
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/config.js
  var e3 = { onUnhandledError: null, onStoppedNotification: null, Promise: void 0, useDeprecatedSynchronousErrorHandling: false, useDeprecatedNextContext: false };

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduler/timeoutProvider.js
  var u = { setTimeout(t15, e18, ...i21) {
    let { delegate: o21 } = u;
    return o21?.setTimeout ? o21.setTimeout(t15, e18, ...i21) : setTimeout(t15, e18, ...i21);
  }, clearTimeout(t15) {
    let { delegate: e18 } = u;
    return (e18?.clearTimeout || clearTimeout)(t15);
  }, delegate: void 0 };

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/reportUnhandledError.js
  function m2(o21) {
    u.setTimeout(() => {
      let { onUnhandledError: r13 } = e3;
      if (r13)
        r13(o21);
      else
        throw o21;
    });
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/noop.js
  function o3() {
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/NotificationFactories.js
  var o4 = (() => e4("C", void 0, void 0))();
  function r(n21) {
    return e4("E", void 0, n21);
  }
  function f(n21) {
    return e4("N", n21, void 0);
  }
  function e4(n21, t15, i21) {
    return { kind: n21, value: t15, error: i21 };
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/errorContext.js
  var r2 = null;
  function u2(o21) {
    if (e3.useDeprecatedSynchronousErrorHandling) {
      let e18 = !r2;
      if (e18 && (r2 = { errorThrown: false, error: null }), o21(), e18) {
        let { errorThrown: t15, error: i21 } = r2;
        if (r2 = null, t15)
          throw i21;
      }
    } else
      o21();
  }
  function c(o21) {
    e3.useDeprecatedSynchronousErrorHandling && r2 && (r2.errorThrown = true, r2.error = o21);
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/Subscriber.js
  var l2 = class extends e2 {
    constructor(t15) {
      super(), this.isStopped = false, t15 ? (this.destination = t15, d3(t15) && t15.add(this)) : this.destination = I2;
    }
    static create(t15, i21, o21) {
      return new u3(t15, i21, o21);
    }
    next(t15) {
      this.isStopped ? p4(f(t15), this) : this._next(t15);
    }
    error(t15) {
      this.isStopped ? p4(r(t15), this) : (this.isStopped = true, this._error(t15));
    }
    complete() {
      this.isStopped ? p4(o4, this) : (this.isStopped = true, this._complete());
    }
    unsubscribe() {
      this.closed || (this.isStopped = true, super.unsubscribe(), this.destination = null);
    }
    _next(t15) {
      this.destination.next(t15);
    }
    _error(t15) {
      try {
        this.destination.error(t15);
      } finally {
        this.unsubscribe();
      }
    }
    _complete() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }
  };
  var w2 = Function.prototype.bind;
  function c2(e18, t15) {
    return w2.call(e18, t15);
  }
  var d4 = class {
    constructor(t15) {
      this.partialObserver = t15;
    }
    next(t15) {
      let { partialObserver: i21 } = this;
      if (i21.next)
        try {
          i21.next(t15);
        } catch (o21) {
          s2(o21);
        }
    }
    error(t15) {
      let { partialObserver: i21 } = this;
      if (i21.error)
        try {
          i21.error(t15);
        } catch (o21) {
          s2(o21);
        }
      else
        s2(t15);
    }
    complete() {
      let { partialObserver: t15 } = this;
      if (t15.complete)
        try {
          t15.complete();
        } catch (i21) {
          s2(i21);
        }
    }
  };
  var u3 = class extends l2 {
    constructor(t15, i21, o21) {
      super();
      let r13;
      if (t(t15) || !t15)
        r13 = { next: t15 ?? void 0, error: i21 ?? void 0, complete: o21 ?? void 0 };
      else {
        let n21;
        this && e3.useDeprecatedNextContext ? (n21 = Object.create(t15), n21.unsubscribe = () => this.unsubscribe(), r13 = { next: t15.next && c2(t15.next, n21), error: t15.error && c2(t15.error, n21), complete: t15.complete && c2(t15.complete, n21) }) : r13 = t15;
      }
      this.destination = new d4(r13);
    }
  };
  function s2(e18) {
    e3.useDeprecatedSynchronousErrorHandling ? c(e18) : m2(e18);
  }
  function F3(e18) {
    throw e18;
  }
  function p4(e18, t15) {
    let { onStoppedNotification: i21 } = e3;
    i21 && u.setTimeout(() => i21(e18, t15));
  }
  var I2 = { closed: true, next: o3, error: F3, complete: o3 };

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/symbol/observable.js
  var o5 = (() => typeof Symbol == "function" && Symbol.observable || "@@observable")();

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/identity.js
  function n2(t15) {
    return t15;
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/pipe.js
  function p5(r13) {
    return r13.length === 0 ? n2 : r13.length === 1 ? r13[0] : function(e18) {
      return r13.reduce((t15, i21) => i21(t15), e18);
    };
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/Observable.js
  var o6 = class {
    constructor(r13) {
      r13 && (this._subscribe = r13);
    }
    lift(r13) {
      let t15 = new o6();
      return t15.source = this, t15.operator = r13, t15;
    }
    subscribe(r13, t15, n21) {
      let s19 = w3(r13) ? r13 : new u3(r13, t15, n21);
      return u2(() => {
        let { operator: e18, source: c25 } = this;
        s19.add(e18 ? e18.call(s19, c25) : c25 ? this._subscribe(s19) : this._trySubscribe(s19));
      }), s19;
    }
    _trySubscribe(r13) {
      try {
        return this._subscribe(r13);
      } catch (t15) {
        r13.error(t15);
      }
    }
    forEach(r13, t15) {
      return t15 = f2(t15), new t15((n21, s19) => {
        let e18 = new u3({ next: (c25) => {
          try {
            r13(c25);
          } catch (m15) {
            s19(m15), e18.unsubscribe();
          }
        }, error: s19, complete: n21 });
        this.subscribe(e18);
      });
    }
    _subscribe(r13) {
      var t15;
      return (t15 = this.source) === null || t15 === void 0 ? void 0 : t15.subscribe(r13);
    }
    [o5]() {
      return this;
    }
    pipe(...r13) {
      return p5(r13)(this);
    }
    toPromise(r13) {
      return r13 = f2(r13), new r13((t15, n21) => {
        let s19;
        this.subscribe((e18) => s19 = e18, (e18) => n21(e18), () => t15(s19));
      });
    }
  };
  o6.create = (i21) => new o6(i21);
  function f2(i21) {
    var r13;
    return (r13 = i21 ?? e3.Promise) !== null && r13 !== void 0 ? r13 : Promise;
  }
  function d5(i21) {
    return i21 && t(i21.next) && t(i21.error) && t(i21.complete);
  }
  function w3(i21) {
    return i21 && i21 instanceof l2 || d5(i21) && d3(i21);
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/lift.js
  function o7(t15) {
    return t(t15?.lift);
  }
  function l3(t15) {
    return (r13) => {
      if (o7(r13))
        return r13.lift(function(n21) {
          try {
            return t15(n21, this);
          } catch (i21) {
            this.error(i21);
          }
        });
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/operators/OperatorSubscriber.js
  function a(n21, r13, s19, i21, c25) {
    return new u4(n21, r13, s19, i21, c25);
  }
  var u4 = class extends l2 {
    constructor(r13, s19, i21, c25, h11, o21) {
      super(r13), this.onFinalize = h11, this.shouldUnsubscribe = o21, this._next = s19 ? function(e18) {
        try {
          s19(e18);
        } catch (t15) {
          r13.error(t15);
        }
      } : super._next, this._error = c25 ? function(e18) {
        try {
          c25(e18);
        } catch (t15) {
          r13.error(t15);
        } finally {
          this.unsubscribe();
        }
      } : super._error, this._complete = i21 ? function() {
        try {
          i21();
        } catch (e18) {
          r13.error(e18);
        } finally {
          this.unsubscribe();
        }
      } : super._complete;
    }
    unsubscribe() {
      var r13;
      if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        let { closed: s19 } = this;
        super.unsubscribe(), !s19 && ((r13 = this.onFinalize) === null || r13 === void 0 || r13.call(this));
      }
    }
  };

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduler/performanceTimestampProvider.js
  var e5 = { now() {
    return (e5.delegate || performance).now();
  }, delegate: void 0 };

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduler/animationFrameProvider.js
  var t2 = { schedule(n21) {
    let e18 = requestAnimationFrame, i21 = cancelAnimationFrame, { delegate: a18 } = t2;
    a18 && (e18 = a18.requestAnimationFrame, i21 = a18.cancelAnimationFrame);
    let r13 = e18((o21) => {
      i21 = void 0, n21(o21);
    });
    return new e2(() => i21?.(r13));
  }, requestAnimationFrame(...n21) {
    let { delegate: e18 } = t2;
    return (e18?.requestAnimationFrame || requestAnimationFrame)(...n21);
  }, cancelAnimationFrame(...n21) {
    let { delegate: e18 } = t2;
    return (e18?.cancelAnimationFrame || cancelAnimationFrame)(...n21);
  }, delegate: void 0 };

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/observable/dom/animationFrames.js
  function m3(n21) {
    return new o6((r13) => {
      let t15 = n21 || e5, c25 = t15.now(), o21 = 0, e18 = () => {
        r13.closed || (o21 = t2.requestAnimationFrame((s19) => {
          o21 = 0;
          let a18 = t15.now();
          r13.next({ timestamp: n21 ? a18 : s19, elapsed: a18 - c25 }), e18();
        }));
      };
      return e18(), () => {
        o21 && t2.cancelAnimationFrame(o21);
      };
    });
  }
  var p6 = m3();

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/ObjectUnsubscribedError.js
  var t3 = e((r13) => function() {
    r13(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  });

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/Subject.js
  var i2 = class extends o6 {
    constructor() {
      super(), this.closed = false, this.currentObservers = null, this.observers = [], this.isStopped = false, this.hasError = false, this.thrownError = null;
    }
    lift(r13) {
      let e18 = new o8(this, this);
      return e18.operator = r13, e18;
    }
    _throwIfClosed() {
      if (this.closed)
        throw new t3();
    }
    next(r13) {
      u2(() => {
        if (this._throwIfClosed(), !this.isStopped) {
          this.currentObservers || (this.currentObservers = Array.from(this.observers));
          for (let e18 of this.currentObservers)
            e18.next(r13);
        }
      });
    }
    error(r13) {
      u2(() => {
        if (this._throwIfClosed(), !this.isStopped) {
          this.hasError = this.isStopped = true, this.thrownError = r13;
          let { observers: e18 } = this;
          for (; e18.length; )
            e18.shift().error(r13);
        }
      });
    }
    complete() {
      u2(() => {
        if (this._throwIfClosed(), !this.isStopped) {
          this.isStopped = true;
          let { observers: r13 } = this;
          for (; r13.length; )
            r13.shift().complete();
        }
      });
    }
    unsubscribe() {
      this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
    }
    get observed() {
      var r13;
      return ((r13 = this.observers) === null || r13 === void 0 ? void 0 : r13.length) > 0;
    }
    _trySubscribe(r13) {
      return this._throwIfClosed(), super._trySubscribe(r13);
    }
    _subscribe(r13) {
      return this._throwIfClosed(), this._checkFinalizedStatuses(r13), this._innerSubscribe(r13);
    }
    _innerSubscribe(r13) {
      let { hasError: e18, isStopped: s19, observers: t15 } = this;
      return e18 || s19 ? p3 : (this.currentObservers = null, t15.push(r13), new e2(() => {
        this.currentObservers = null, o2(t15, r13);
      }));
    }
    _checkFinalizedStatuses(r13) {
      let { hasError: e18, thrownError: s19, isStopped: t15 } = this;
      e18 ? r13.error(s19) : t15 && r13.complete();
    }
    asObservable() {
      let r13 = new o6();
      return r13.source = this, r13;
    }
  };
  i2.create = (n21, r13) => new o8(n21, r13);
  var o8 = class extends i2 {
    constructor(r13, e18) {
      super(), this.destination = r13, this.source = e18;
    }
    next(r13) {
      var e18, s19;
      (s19 = (e18 = this.destination) === null || e18 === void 0 ? void 0 : e18.next) === null || s19 === void 0 || s19.call(e18, r13);
    }
    error(r13) {
      var e18, s19;
      (s19 = (e18 = this.destination) === null || e18 === void 0 ? void 0 : e18.error) === null || s19 === void 0 || s19.call(e18, r13);
    }
    complete() {
      var r13, e18;
      (e18 = (r13 = this.destination) === null || r13 === void 0 ? void 0 : r13.complete) === null || e18 === void 0 || e18.call(r13);
    }
    _subscribe(r13) {
      var e18, s19;
      return (s19 = (e18 = this.source) === null || e18 === void 0 ? void 0 : e18.subscribe(r13)) !== null && s19 !== void 0 ? s19 : p3;
    }
  };

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduler/dateTimestampProvider.js
  var e6 = { now() {
    return (e6.delegate || Date).now();
  }, delegate: void 0 };

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduler/Action.js
  var e7 = class extends e2 {
    constructor(r13, s19) {
      super();
    }
    schedule(r13, s19 = 0) {
      return this;
    }
  };

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduler/intervalProvider.js
  var n3 = { setInterval(t15, e18, ...l18) {
    let { delegate: r13 } = n3;
    return r13?.setInterval ? r13.setInterval(t15, e18, ...l18) : setInterval(t15, e18, ...l18);
  }, clearInterval(t15) {
    let { delegate: e18 } = n3;
    return (e18?.clearInterval || clearInterval)(t15);
  }, delegate: void 0 };

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduler/AsyncAction.js
  var l5 = class extends e7 {
    constructor(t15, e18) {
      super(t15, e18), this.scheduler = t15, this.work = e18, this.pending = false;
    }
    schedule(t15, e18 = 0) {
      var s19;
      if (this.closed)
        return this;
      this.state = t15;
      let i21 = this.id, r13 = this.scheduler;
      return i21 != null && (this.id = this.recycleAsyncId(r13, i21, e18)), this.pending = true, this.delay = e18, this.id = (s19 = this.id) !== null && s19 !== void 0 ? s19 : this.requestAsyncId(r13, this.id, e18), this;
    }
    requestAsyncId(t15, e18, s19 = 0) {
      return n3.setInterval(t15.flush.bind(t15, this), s19);
    }
    recycleAsyncId(t15, e18, s19 = 0) {
      if (s19 != null && this.delay === s19 && this.pending === false)
        return e18;
      e18 != null && n3.clearInterval(e18);
    }
    execute(t15, e18) {
      if (this.closed)
        return new Error("executing a cancelled action");
      this.pending = false;
      let s19 = this._execute(t15, e18);
      if (s19)
        return s19;
      this.pending === false && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
    }
    _execute(t15, e18) {
      let s19 = false, i21;
      try {
        this.work(t15);
      } catch (r13) {
        s19 = true, i21 = r13 || new Error("Scheduled action threw falsy error");
      }
      if (s19)
        return this.unsubscribe(), i21;
    }
    unsubscribe() {
      if (!this.closed) {
        let { id: t15, scheduler: e18 } = this, { actions: s19 } = e18;
        this.work = this.state = this.scheduler = null, this.pending = false, o2(s19, this), t15 != null && (this.id = this.recycleAsyncId(e18, t15, null)), this.delay = null, super.unsubscribe();
      }
    }
  };

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/Immediate.js
  var s3 = 1;
  var r3;
  var t4 = {};
  function l6(e18) {
    return e18 in t4 ? (delete t4[e18], true) : false;
  }
  var o9 = { setImmediate(e18) {
    let n21 = s3++;
    return t4[n21] = true, r3 || (r3 = Promise.resolve()), r3.then(() => l6(n21) && e18()), n21;
  }, clearImmediate(e18) {
    l6(e18);
  } };

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduler/immediateProvider.js
  var { setImmediate: i3, clearImmediate: a2 } = o9;
  var d6 = { setImmediate(...t15) {
    let { delegate: e18 } = d6;
    return (e18?.setImmediate || i3)(...t15);
  }, clearImmediate(t15) {
    let { delegate: e18 } = d6;
    return (e18?.clearImmediate || a2)(t15);
  }, delegate: void 0 };

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduler/AsapAction.js
  var u5 = class extends l5 {
    constructor(n21, t15) {
      super(n21, t15), this.scheduler = n21, this.work = t15;
    }
    requestAsyncId(n21, t15, e18 = 0) {
      return e18 !== null && e18 > 0 ? super.requestAsyncId(n21, t15, e18) : (n21.actions.push(this), n21._scheduled || (n21._scheduled = d6.setImmediate(n21.flush.bind(n21, void 0))));
    }
    recycleAsyncId(n21, t15, e18 = 0) {
      var i21;
      if (e18 != null ? e18 > 0 : this.delay > 0)
        return super.recycleAsyncId(n21, t15, e18);
      let { actions: r13 } = n21;
      t15 != null && ((i21 = r13[r13.length - 1]) === null || i21 === void 0 ? void 0 : i21.id) !== t15 && (d6.clearImmediate(t15), n21._scheduled = void 0);
    }
  };

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/Scheduler.js
  var t5 = class {
    constructor(o21, s19 = t5.now) {
      this.schedulerActionCtor = o21, this.now = s19;
    }
    schedule(o21, s19 = 0, r13) {
      return new this.schedulerActionCtor(this, o21).schedule(r13, s19);
    }
  };
  t5.now = e6.now;

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduler/AsyncScheduler.js
  var r4 = class extends t5 {
    constructor(e18, s19 = t5.now) {
      super(e18, s19), this.actions = [], this._active = false;
    }
    flush(e18) {
      let { actions: s19 } = this;
      if (this._active) {
        s19.push(e18);
        return;
      }
      let t15;
      this._active = true;
      do
        if (t15 = e18.execute(e18.state, e18.delay))
          break;
      while (e18 = s19.shift());
      if (this._active = false, t15) {
        for (; e18 = s19.shift(); )
          e18.unsubscribe();
        throw t15;
      }
    }
  };

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduler/AsapScheduler.js
  var d7 = class extends r4 {
    flush(e18) {
      this._active = true;
      let t15 = this._scheduled;
      this._scheduled = void 0;
      let { actions: s19 } = this, h11;
      e18 = e18 || s19.shift();
      do
        if (h11 = e18.execute(e18.state, e18.delay))
          break;
      while ((e18 = s19[0]) && e18.id === t15 && s19.shift());
      if (this._active = false, h11) {
        for (; (e18 = s19[0]) && e18.id === t15 && s19.shift(); )
          e18.unsubscribe();
        throw h11;
      }
    }
  };

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduler/asap.js
  var r5 = new d7(u5);

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduler/async.js
  var n4 = new r4(l5);

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduler/QueueAction.js
  var r6 = class extends l5 {
    constructor(t15, s19) {
      super(t15, s19), this.scheduler = t15, this.work = s19;
    }
    schedule(t15, s19 = 0) {
      return s19 > 0 ? super.schedule(t15, s19) : (this.delay = s19, this.state = t15, this.scheduler.flush(this), this);
    }
    execute(t15, s19) {
      return s19 > 0 || this.closed ? super.execute(t15, s19) : this._execute(t15, s19);
    }
    requestAsyncId(t15, s19, e18 = 0) {
      return e18 != null && e18 > 0 || e18 == null && this.delay > 0 ? super.requestAsyncId(t15, s19, e18) : (t15.flush(this), 0);
    }
  };

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduler/QueueScheduler.js
  var s4 = class extends r4 {
  };

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduler/queue.js
  var o10 = new s4(r6);

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduler/AnimationFrameAction.js
  var u6 = class extends l5 {
    constructor(n21, t15) {
      super(n21, t15), this.scheduler = n21, this.work = t15;
    }
    requestAsyncId(n21, t15, e18 = 0) {
      return e18 !== null && e18 > 0 ? super.requestAsyncId(n21, t15, e18) : (n21.actions.push(this), n21._scheduled || (n21._scheduled = t2.requestAnimationFrame(() => n21.flush(void 0))));
    }
    recycleAsyncId(n21, t15, e18 = 0) {
      var r13;
      if (e18 != null ? e18 > 0 : this.delay > 0)
        return super.recycleAsyncId(n21, t15, e18);
      let { actions: s19 } = n21;
      t15 != null && ((r13 = s19[s19.length - 1]) === null || r13 === void 0 ? void 0 : r13.id) !== t15 && (t2.cancelAnimationFrame(t15), n21._scheduled = void 0);
    }
  };

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduler/AnimationFrameScheduler.js
  var t6 = class extends r4 {
    flush(e18) {
      this._active = true;
      let d16 = this._scheduled;
      this._scheduled = void 0;
      let { actions: s19 } = this, h11;
      e18 = e18 || s19.shift();
      do
        if (h11 = e18.execute(e18.state, e18.delay))
          break;
      while ((e18 = s19[0]) && e18.id === d16 && s19.shift());
      if (this._active = false, h11) {
        for (; (e18 = s19[0]) && e18.id === d16 && s19.shift(); )
          e18.unsubscribe();
        throw h11;
      }
    }
  };

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduler/animationFrame.js
  var n5 = new t6(u6);

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduler/VirtualTimeScheduler.js
  var n6 = class extends r4 {
    constructor(e18 = r7, t15 = 1 / 0) {
      super(e18, () => this.frame), this.maxFrames = t15, this.frame = 0, this.index = -1;
    }
    flush() {
      let { actions: e18, maxFrames: t15 } = this, s19, i21;
      for (; (i21 = e18[0]) && i21.delay <= t15 && (e18.shift(), this.frame = i21.delay, !(s19 = i21.execute(i21.state, i21.delay))); )
        ;
      if (s19) {
        for (; i21 = e18.shift(); )
          i21.unsubscribe();
        throw s19;
      }
    }
  };
  n6.frameTimeFactor = 10;
  var r7 = class extends l5 {
    constructor(e18, t15, s19 = e18.index += 1) {
      super(e18, t15), this.scheduler = e18, this.work = t15, this.index = s19, this.active = true, this.index = e18.index = s19;
    }
    schedule(e18, t15 = 0) {
      if (Number.isFinite(t15)) {
        if (!this.id)
          return super.schedule(e18, t15);
        this.active = false;
        let s19 = new r7(this.scheduler, this.work);
        return this.add(s19), s19.schedule(e18, t15);
      } else
        return e2.EMPTY;
    }
    requestAsyncId(e18, t15, s19 = 0) {
      this.delay = e18.frame + s19;
      let { actions: i21 } = e18;
      return i21.push(this), i21.sort(r7.sortActions), 1;
    }
    recycleAsyncId(e18, t15, s19 = 0) {
    }
    _execute(e18, t15) {
      if (this.active === true)
        return super._execute(e18, t15);
    }
    static sortActions(e18, t15) {
      return e18.delay === t15.delay ? e18.index === t15.index ? 0 : e18.index > t15.index ? 1 : -1 : e18.delay > t15.delay ? 1 : -1;
    }
  };

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/observable/empty.js
  var o11 = new o6((e18) => e18.complete());

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/isScheduler.js
  function n7(r13) {
    return r13 && t(r13.schedule);
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/args.js
  function n8(e18) {
    return e18[e18.length - 1];
  }
  function f3(e18) {
    return n7(n8(e18)) ? e18.pop() : void 0;
  }
  function c3(e18, o21) {
    return typeof n8(e18) == "number" ? e18.pop() : o21;
  }

  // https://esm.sh/v99/tslib@2.4.1/deno/tslib.js
  function T2(t15, e18, r13, n21) {
    function a18(o21) {
      return o21 instanceof r13 ? o21 : new r13(function(i21) {
        i21(o21);
      });
    }
    return new (r13 || (r13 = Promise))(function(o21, i21) {
      function f13(l18) {
        try {
          u15(n21.next(l18));
        } catch (y7) {
          i21(y7);
        }
      }
      function s19(l18) {
        try {
          u15(n21.throw(l18));
        } catch (y7) {
          i21(y7);
        }
      }
      function u15(l18) {
        l18.done ? o21(l18.value) : a18(l18.value).then(f13, s19);
      }
      u15((n21 = n21.apply(t15, e18 || [])).next());
    });
  }
  function d8(t15) {
    var e18 = typeof Symbol == "function" && Symbol.iterator, r13 = e18 && t15[e18], n21 = 0;
    if (r13)
      return r13.call(t15);
    if (t15 && typeof t15.length == "number")
      return { next: function() {
        return t15 && n21 >= t15.length && (t15 = void 0), { value: t15 && t15[n21++], done: !t15 };
      } };
    throw new TypeError(e18 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function h2(t15) {
    return this instanceof h2 ? (this.v = t15, this) : new h2(t15);
  }
  function M2(t15, e18, r13) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var n21 = r13.apply(t15, e18 || []), a18, o21 = [];
    return a18 = {}, i21("next"), i21("throw"), i21("return"), a18[Symbol.asyncIterator] = function() {
      return this;
    }, a18;
    function i21(c25) {
      n21[c25] && (a18[c25] = function(p19) {
        return new Promise(function(_2, x9) {
          o21.push([c25, p19, _2, x9]) > 1 || f13(c25, p19);
        });
      });
    }
    function f13(c25, p19) {
      try {
        s19(n21[c25](p19));
      } catch (_2) {
        y7(o21[0][3], _2);
      }
    }
    function s19(c25) {
      c25.value instanceof h2 ? Promise.resolve(c25.value.v).then(u15, l18) : y7(o21[0][2], c25);
    }
    function u15(c25) {
      f13("next", c25);
    }
    function l18(c25) {
      f13("throw", c25);
    }
    function y7(c25, p19) {
      c25(p19), o21.shift(), o21.length && f13(o21[0][0], o21[0][1]);
    }
  }
  function G2(t15) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var e18 = t15[Symbol.asyncIterator], r13;
    return e18 ? e18.call(t15) : (t15 = typeof d8 == "function" ? d8(t15) : t15[Symbol.iterator](), r13 = {}, n21("next"), n21("throw"), n21("return"), r13[Symbol.asyncIterator] = function() {
      return this;
    }, r13);
    function n21(o21) {
      r13[o21] = t15[o21] && function(i21) {
        return new Promise(function(f13, s19) {
          i21 = t15[o21](i21), a18(f13, s19, i21.done, i21.value);
        });
      };
    }
    function a18(o21, i21, f13, s19) {
      Promise.resolve(s19).then(function(u15) {
        o21({ value: u15, done: f13 });
      }, i21);
    }
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/isArrayLike.js
  var t7 = (e18) => e18 && typeof e18.length == "number" && typeof e18 != "function";

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/isPromise.js
  function r8(i21) {
    return t(i21?.then);
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/isInteropObservable.js
  function i4(o21) {
    return t(o21[o5]);
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/isAsyncIterable.js
  function o12(r13) {
    return Symbol.asyncIterator && t(r13?.[Symbol.asyncIterator]);
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/throwUnobservableError.js
  function r9(e18) {
    return new TypeError(`You provided ${e18 !== null && typeof e18 == "object" ? "an invalid object" : `'${e18}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/symbol/iterator.js
  function t8() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
  }
  var r10 = t8();

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/isIterable.js
  function m4(o21) {
    return t(o21?.[r10]);
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/isReadableStreamLike.js
  function c4(e18) {
    return M2(this, arguments, function* () {
      let t15 = e18.getReader();
      try {
        for (; ; ) {
          let { value: a18, done: i21 } = yield h2(t15.read());
          if (i21)
            return yield h2(void 0);
          yield yield h2(a18);
        }
      } finally {
        t15.releaseLock();
      }
    });
  }
  function s5(e18) {
    return t(e18?.getReader);
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/observable/innerFrom.js
  function B2(r13) {
    if (r13 instanceof o6)
      return r13;
    if (r13 != null) {
      if (i4(r13))
        return I3(r13);
      if (t7(r13))
        return k2(r13);
      if (r8(r13))
        return A2(r13);
      if (o12(r13))
        return m5(r13);
      if (m4(r13))
        return L2(r13);
      if (s5(r13))
        return S3(r13);
    }
    throw r9(r13);
  }
  function I3(r13) {
    return new o6((e18) => {
      let o21 = r13[o5]();
      if (t(o21.subscribe))
        return o21.subscribe(e18);
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
  }
  function k2(r13) {
    return new o6((e18) => {
      for (let o21 = 0; o21 < r13.length && !e18.closed; o21++)
        e18.next(r13[o21]);
      e18.complete();
    });
  }
  function A2(r13) {
    return new o6((e18) => {
      r13.then((o21) => {
        e18.closed || (e18.next(o21), e18.complete());
      }, (o21) => e18.error(o21)).then(null, m2);
    });
  }
  function L2(r13) {
    return new o6((e18) => {
      for (let o21 of r13)
        if (e18.next(o21), e18.closed)
          return;
      e18.complete();
    });
  }
  function m5(r13) {
    return new o6((e18) => {
      O2(r13, e18).catch((o21) => e18.error(o21));
    });
  }
  function S3(r13) {
    return m5(c4(r13));
  }
  function O2(r13, e18) {
    var o21, n21, f13, a18;
    return T2(this, void 0, void 0, function* () {
      try {
        for (o21 = G2(r13); n21 = yield o21.next(), !n21.done; ) {
          let l18 = n21.value;
          if (e18.next(l18), e18.closed)
            return;
        }
      } catch (l18) {
        f13 = { error: l18 };
      } finally {
        try {
          n21 && !n21.done && (a18 = o21.return) && (yield a18.call(o21));
        } finally {
          if (f13)
            throw f13.error;
        }
      }
      e18.complete();
    });
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/executeSchedule.js
  function l7(e18, d16, i21, u15 = 0, s19 = false) {
    let c25 = d16.schedule(function() {
      i21(), s19 ? e18.add(this.schedule(null, u15)) : this.unsubscribe();
    }, u15);
    if (e18.add(c25), !s19)
      return c25;
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/operators/observeOn.js
  function a3(t15, e18 = 0) {
    return l3((r13, o21) => {
      r13.subscribe(a(o21, (m15) => l7(o21, t15, () => o21.next(m15), e18), () => l7(o21, t15, () => o21.complete(), e18), (m15) => l7(o21, t15, () => o21.error(m15), e18)));
    });
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/operators/subscribeOn.js
  function c5(r13, o21 = 0) {
    return l3((t15, e18) => {
      e18.add(r13.schedule(() => t15.subscribe(e18), o21));
    });
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduled/scheduleObservable.js
  function b2(o21, r13) {
    return B2(o21).pipe(c5(r13), a3(r13));
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduled/schedulePromise.js
  function f4(o21, r13) {
    return B2(o21).pipe(c5(r13), a3(r13));
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduled/scheduleArray.js
  function c6(t15, n21) {
    return new o6((e18) => {
      let l18 = 0;
      return n21.schedule(function() {
        l18 === t15.length ? e18.complete() : (e18.next(t15[l18++]), e18.closed || this.schedule());
      });
    });
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduled/scheduleIterable.js
  function c7(m15, r13) {
    return new o6((t15) => {
      let e18;
      return l7(t15, r13, () => {
        e18 = m15[r10](), l7(t15, r13, () => {
          let o21, n21;
          try {
            ({ value: o21, done: n21 } = e18.next());
          } catch (i21) {
            t15.error(i21);
            return;
          }
          n21 ? t15.complete() : t15.next(o21);
        }, 0, true);
      }), () => t(e18?.return) && e18.return();
    });
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduled/scheduleAsyncIterable.js
  function f5(t15, o21) {
    if (!t15)
      throw new Error("Iterable cannot be null");
    return new o6((e18) => {
      l7(e18, o21, () => {
        let l18 = t15[Symbol.asyncIterator]();
        l7(e18, o21, () => {
          l18.next().then((n21) => {
            n21.done ? e18.complete() : e18.next(n21.value);
          });
        }, 0, true);
      });
    });
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduled/scheduleReadableStreamLike.js
  function n9(e18, r13) {
    return f5(c4(e18), r13);
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/scheduled/scheduled.js
  function T3(r13, e18) {
    if (r13 != null) {
      if (i4(r13))
        return b2(r13, e18);
      if (t7(r13))
        return c6(r13, e18);
      if (r8(r13))
        return f4(r13, e18);
      if (o12(r13))
        return f5(r13, e18);
      if (m4(r13))
        return c7(r13, e18);
      if (s5(r13))
        return n9(r13, e18);
    }
    throw r9(r13);
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/observable/from.js
  function e8(r13, o21) {
    return o21 ? T3(r13, o21) : B2(r13);
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/observable/of.js
  function p7(...o21) {
    let r13 = f3(o21);
    return e8(o21, r13);
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/observable/throwError.js
  function p8(n21, o21) {
    let e18 = t(n21) ? n21 : () => n21, i21 = (t15) => t15.error(e18());
    return new o6(o21 ? (t15) => o21.schedule(i21, 0, t15) : i21);
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/Notification.js
  var c8;
  (function(e18) {
    e18.NEXT = "N", e18.ERROR = "E", e18.COMPLETE = "C";
  })(c8 || (c8 = {}));
  var n10 = class {
    constructor(t15, o21, i21) {
      this.kind = t15, this.value = o21, this.error = i21, this.hasValue = t15 === "N";
    }
    observe(t15) {
      return E(this, t15);
    }
    do(t15, o21, i21) {
      let { kind: r13, value: l18, error: u15 } = this;
      return r13 === "N" ? t15?.(l18) : r13 === "E" ? o21?.(u15) : i21?.();
    }
    accept(t15, o21, i21) {
      var r13;
      return t((r13 = t15) === null || r13 === void 0 ? void 0 : r13.next) ? this.observe(t15) : this.do(t15, o21, i21);
    }
    toObservable() {
      let { kind: t15, value: o21, error: i21 } = this, r13 = t15 === "N" ? p7(o21) : t15 === "E" ? p8(() => i21) : t15 === "C" ? o11 : 0;
      if (!r13)
        throw new TypeError(`Unexpected notification kind ${t15}`);
      return r13;
    }
    static createNext(t15) {
      return new n10("N", t15);
    }
    static createError(t15) {
      return new n10("E", void 0, t15);
    }
    static createComplete() {
      return n10.completeNotification;
    }
  };
  n10.completeNotification = new n10("C");
  function E(e18, t15) {
    var o21, i21, r13;
    let { kind: l18, value: u15, error: s19 } = e18;
    if (typeof l18 != "string")
      throw new TypeError('Invalid notification, missing "kind"');
    l18 === "N" ? (o21 = t15.next) === null || o21 === void 0 || o21.call(t15, u15) : l18 === "E" ? (i21 = t15.error) === null || i21 === void 0 || i21.call(t15, s19) : (r13 = t15.complete) === null || r13 === void 0 || r13.call(t15);
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/EmptyError.js
  var s6 = e((r13) => function() {
    r13(this), this.name = "EmptyError", this.message = "no elements in sequence";
  });

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/ArgumentOutOfRangeError.js
  var o13 = e((r13) => function() {
    r13(this), this.name = "ArgumentOutOfRangeError", this.message = "argument out of range";
  });

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/NotFoundError.js
  var e9 = e((r13) => function(o21) {
    r13(this), this.name = "NotFoundError", this.message = o21;
  });

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/SequenceError.js
  var n11 = e((r13) => function(e18) {
    r13(this), this.name = "SequenceError", this.message = e18;
  });

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/operators/timeout.js
  var x = e((e18) => function(t15 = null) {
    e18(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = t15;
  });

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/operators/map.js
  function f6(e18, t15) {
    return l3((o21, r13) => {
      let p19 = 0;
      o21.subscribe(a(r13, (a18) => {
        r13.next(e18.call(t15, a18, p19++));
      }));
    });
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/mapOneOrManyArgs.js
  var { isArray: o14 } = Array;
  function p9(n21, r13) {
    return o14(r13) ? n21(...r13) : n21(r13);
  }
  function c9(n21) {
    return f6((r13) => p9(n21, r13));
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/argsArgArrayOrObject.js
  var { isArray: o15 } = Array;
  var { getPrototypeOf: s7, prototype: y, keys: c10 } = Object;

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/operators/mergeInternals.js
  function S4(v6, t15, x9, c25, m15, p19, h11, r13) {
    let l18 = [], o21 = 0, C7 = 0, i21 = false, s19 = () => {
      i21 && !l18.length && !o21 && t15.complete();
    }, u15 = (f13) => o21 < c25 ? n21(f13) : l18.push(f13), n21 = (f13) => {
      p19 && t15.next(f13), o21++;
      let d16 = false;
      B2(x9(f13, C7++)).subscribe(a(t15, (e18) => {
        m15?.(e18), p19 ? u15(e18) : t15.next(e18);
      }, () => {
        d16 = true;
      }, void 0, () => {
        if (d16)
          try {
            for (o21--; l18.length && o21 < c25; ) {
              let e18 = l18.shift();
              h11 ? l7(t15, h11, () => n21(e18)) : n21(e18);
            }
            s19();
          } catch (e18) {
            t15.error(e18);
          }
      }));
    };
    return v6.subscribe(a(t15, u15, () => {
      i21 = true, s19();
    })), () => {
      r13?.();
    };
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/operators/mergeMap.js
  function F4(o21, m15, f13 = 1 / 0) {
    return t(m15) ? F4((i21, r13) => f6((n21, p19) => m15(i21, n21, r13, p19))(B2(o21(i21, r13))), f13) : (typeof m15 == "number" && (f13 = m15), l3((i21, r13) => S4(i21, r13, o21, f13)));
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/operators/mergeAll.js
  function n12(r13 = 1 / 0) {
    return F4(n2, r13);
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/observable/fromEventPattern.js
  function s8(r13, n21, i21) {
    return i21 ? s8(r13, n21).pipe(c9(i21)) : new o6((f13) => {
      let o21 = (...t15) => f13.next(t15.length === 1 ? t15[0] : t15), p19 = r13(o21);
      return t(n21) ? () => n21(o21, p19) : void 0;
    });
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/observable/merge.js
  function g2(...o21) {
    let e18 = f3(o21), m15 = c3(o21, 1 / 0), r13 = o21;
    return r13.length ? r13.length === 1 ? B2(r13[0]) : n12(m15)(e8(r13, e18)) : o11;
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/observable/never.js
  var e10 = new o6(o3);

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/util/argsOrArgArray.js
  var { isArray: n13 } = Array;

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/operators/filter.js
  function a4(t15, o21) {
    return l3((i21, r13) => {
      let n21 = 0;
      i21.subscribe(a(r13, (e18) => t15.call(o21, e18, n21++) && r13.next(e18)));
    });
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/operators/defaultIfEmpty.js
  function n14(o21) {
    return l3((r13, e18) => {
      let t15 = false;
      r13.subscribe(a(e18, (a18) => {
        t15 = true, e18.next(a18);
      }, () => {
        t15 || e18.next(o21), e18.complete();
      }));
    });
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/operators/take.js
  function x3(e18) {
    return e18 <= 0 ? () => o11 : l3((o21, r13) => {
      let t15 = 0;
      o21.subscribe(a(r13, (m15) => {
        ++t15 <= e18 && (r13.next(m15), e18 <= t15 && r13.complete());
      }));
    });
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/operators/throwIfEmpty.js
  function i11(e18 = n16) {
    return l3((o21, r13) => {
      let t15 = false;
      o21.subscribe(a(r13, (m15) => {
        t15 = true, r13.next(m15);
      }, () => t15 ? r13.complete() : r13.error(e18())));
    });
  }
  function n16() {
    return new s6();
  }

  // https://esm.sh/v99/rxjs@7.5.7/deno/internal/operators/first.js
  function I4(t15, m15) {
    let o21 = arguments.length >= 2;
    return (r13) => r13.pipe(t15 ? a4((f13, i21) => t15(f13, i21, r13)) : n2, x3(1), o21 ? n14(m15) : i11(() => new s6()));
  }

  // https://esm.sh/v99/@extend-chrome/messages@1.2.2/deno/messages.js
  function A3(s19, r13) {
    var e18 = {};
    for (var n21 in s19)
      Object.prototype.hasOwnProperty.call(s19, n21) && r13.indexOf(n21) < 0 && (e18[n21] = s19[n21]);
    if (s19 != null && typeof Object.getOwnPropertySymbols == "function")
      for (var t15 = 0, n21 = Object.getOwnPropertySymbols(s19); t15 < n21.length; t15++)
        r13.indexOf(n21[t15]) < 0 && Object.prototype.propertyIsEnumerable.call(s19, n21[t15]) && (e18[n21[t15]] = s19[n21[t15]]);
    return e18;
  }
  var _ = /* @__PURE__ */ new Map();
  var F6 = (s19, r13) => {
    let e18 = _.get(s19);
    e18 && e18.delete(r13);
  };
  var T6 = (s19, r13) => {
    let e18 = _.get(s19);
    if (e18)
      return e18.get(r13);
  };
  var L3 = (s19, r13, e18) => {
    let n21 = _.get(s19) || /* @__PURE__ */ new Map();
    n21.set(r13, e18), _.has(s19) || _.set(s19, n21);
  };
  var k4 = (s19) => (r13) => {
    let e18 = (n21, t15) => {
      if (n21.async || n21.scope !== s19)
        return false;
      try {
        r13(n21.payload, t15);
      } catch (c25) {
        console.error("Uncaught error in chrome.runtime.onMessage listener"), console.error(c25);
      }
      return false;
    };
    chrome.runtime.onMessage.addListener(e18), L3(s19, r13, e18);
  };
  var q4 = (s19) => (r13) => {
    let e18 = (n21, t15, c25) => {
      if (n21.async && s19 === n21.scope)
        return o21(), true;
      return false;
      async function o21() {
        try {
          let i21 = (l18) => {
            c25({ success: true, payload: l18 });
          };
          await r13(n21.payload, t15, i21);
        } catch (i21) {
          let l18 = { success: false, payload: { greeting: i21.message } };
          console.error(i21), c25(l18);
        }
      }
    };
    chrome.runtime.onMessage.addListener(e18), L3(s19, r13, e18);
  };
  var N3 = (s19) => (r13) => {
    let e18 = T6(s19, r13);
    e18 && (F6(s19, r13), chrome.runtime.onMessage.removeListener(e18));
  };
  var w8 = class extends Error {
    constructor(r13) {
      var e18, n21, { coreMessage: t15 = null, coreResponse: c25 = null, message: o21 = ((n21 = (e18 = chrome.runtime) === null || e18 === void 0 ? void 0 : e18.lastError) === null || n21 === void 0 ? void 0 : n21.message) || c25?.payload.greeting || "chrome.runtime.lastError is undefined" } = r13;
      super(o21), this.coreMessage = t15, this.coreResponse = c25;
    }
  };
  var R3 = (s19) => (r13, { tabId: e18, frameId: n21 } = {}) => new Promise((t15, c25) => {
    let o21 = { async: false, tabId: e18 || null, payload: r13, scope: s19 }, i21 = (l18) => {
      if (chrome.runtime.lastError) {
        let y7 = chrome.runtime.lastError.message, b10 = "The message port closed before a response was received";
        y7 && y7.includes(b10) ? t15() : c25(new w8({ coreMessage: o21 }));
      } else
        l18 && !l18.success ? c25(l18.payload) : t15();
    };
    typeof e18 == "number" && typeof n21 == "number" ? chrome.tabs.sendMessage(e18, o21, { frameId: n21 }, i21) : typeof e18 == "number" ? chrome.tabs.sendMessage(e18, o21, i21) : chrome.runtime.sendMessage(o21, i21);
  });
  var U3 = (s19) => (r13, { tabId: e18, frameId: n21 } = {}) => new Promise((t15, c25) => {
    let o21 = { async: true, tabId: e18 || null, payload: r13, scope: s19 }, i21 = (l18) => {
      chrome.runtime.lastError || l18 === null || !l18.success ? c25(new w8({ coreMessage: o21, coreResponse: l18 })) : t15(l18.payload);
    };
    typeof e18 == "number" && typeof n21 == "number" ? chrome.tabs.sendMessage(e18, o21, { frameId: n21 }, i21) : typeof e18 == "number" ? chrome.tabs.sendMessage(e18, o21, i21) : chrome.runtime.sendMessage(o21, i21);
  });
  var S7 = (s19) => (r13 = () => true) => s19.pipe(I4(r13)).toPromise();
  function W2(s19) {
    let r13 = q4(s19), e18 = U3(s19), n21 = N3(s19), t15 = k4(s19), c25 = R3(s19);
    async function o21(a18, p19) {
      let m15 = p19 || {}, { async: g8 = false } = m15, h11 = A3(m15, ["async"]);
      return g8 ? e18(a18, h11) : c25(a18, h11);
    }
    function i21(a18) {
      p19(a18) ? t15(a18) : r13(a18);
      function p19(m15) {
        return m15.length < 3;
      }
    }
    function l18(a18) {
      return n21(a18);
    }
    let y7 = g2(s8(t15, n21), s8(r13, n21)), b10 = /* @__PURE__ */ new Set();
    function P3(a18, p19) {
      if (b10.has(a18))
        throw new Error("greeting is not unique");
      b10.add(a18);
      let { async: m15 } = p19 || {}, g8 = (u15, f13) => {
        f13 = f13 || {};
        let d16;
        typeof f13.tabId == "number" && (d16 = f13.tabId);
        let M6;
        return typeof f13.frameId == "number" && (M6 = f13.frameId), m15 ? o21({ greeting: a18, data: u15 }, { async: m15, tabId: d16, frameId: M6 }) : o21({ greeting: a18, data: u15 }, { tabId: d16, frameId: M6 });
      };
      if (g8.toTab = ({ tabId: u15 }) => m15 ? o21({ greeting: a18 }, { async: m15, tabId: u15 }) : o21({ greeting: a18 }, { tabId: u15 }), m15) {
        let u15 = y7.pipe(a4(h11), f6(([{ data: f13 }, d16, M6]) => [f13, d16, M6]), a4((f13) => f13.length === 3));
        return [g8, u15, S7(y7)];
      } else {
        let u15 = y7.pipe(a4(h11), f6(([{ data: f13 }, d16]) => [f13, d16]), a4((f13) => f13.length < 3));
        return [g8, u15, S7(u15)];
      }
      function h11([u15]) {
        return u15 && typeof u15 == "object" && u15.greeting === a18;
      }
    }
    return { send: o21, on: i21, off: l18, stream: y7, getMessage: P3 };
  }
  var z2 = "@extend-chrome/messages__root";
  var B4 = W2(z2);
  var { getMessage: H } = B4;

  // https://esm.sh/v96/p-throttle@5.0.0/deno/p-throttle.js
  var a16 = class extends Error {
    constructor() {
      super("Throttled function aborted"), this.name = "AbortError";
    }
  };
  function m13({ limit: i21, interval: s19, strict: f13 }) {
    if (!Number.isFinite(i21))
      throw new TypeError("Expected `limit` to be a finite number");
    if (!Number.isFinite(s19))
      throw new TypeError("Expected `interval` to be a finite number");
    let r13 = /* @__PURE__ */ new Map(), u15 = 0, c25 = 0;
    function p19() {
      let e18 = Date.now();
      return e18 - u15 > s19 ? (c25 = 1, u15 = e18, 0) : (c25 < i21 ? c25++ : (u15 += s19, c25 = 1), u15 - e18);
    }
    let n21 = [];
    function h11() {
      let e18 = Date.now();
      if (n21.length < i21)
        return n21.push(e18), 0;
      let t15 = n21.shift() + s19;
      return e18 >= t15 ? (n21.push(e18), 0) : (n21.push(t15), t15 - e18);
    }
    let w12 = f13 ? h11 : p19;
    return (e18) => {
      let t15 = function(...o21) {
        if (!t15.isEnabled)
          return (async () => e18.apply(this, o21))();
        let l18;
        return new Promise((d16, b10) => {
          l18 = setTimeout(() => {
            d16(e18.apply(this, o21)), r13.delete(l18);
          }, w12()), r13.set(l18, b10);
        });
      };
      return t15.abort = () => {
        for (let o21 of r13.keys())
          clearTimeout(o21), r13.get(o21)(new a16());
        r13.clear(), n21.splice(0, n21.length);
      }, t15.isEnabled = true, t15;
    };
  }

  // https://esm.sh/v99/@twind/core@1.0.1/deno/core.js
  var q5;
  function se(e18) {
    return [...e18.v, (e18.i ? "!" : "") + e18.n].join(":");
  }
  function oe2(e18, t15 = ",") {
    return e18.map(se).join(t15);
  }
  var W3 = typeof CSS < "u" && CSS.escape || ((e18) => e18.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
  function V4(e18) {
    for (var t15 = 9, r13 = e18.length; r13--; )
      t15 = Math.imul(t15 ^ e18.charCodeAt(r13), 1597334677);
    return "#" + ((t15 ^ t15 >>> 9) >>> 0).toString(36);
  }
  function ve(e18, t15 = "@media ") {
    return t15 + A4(e18).map((r13) => (typeof r13 == "string" && (r13 = { min: r13 }), r13.raw || Object.keys(r13).map((n21) => `(${n21}-width:${r13[n21]})`).join(" and "))).join(",");
  }
  function A4(e18 = []) {
    return Array.isArray(e18) ? e18 : e18 == null ? [] : [e18];
  }
  function J2() {
  }
  var S8 = { d: 0, b: 134217728, c: 268435456, a: 671088640, u: 805306368, o: 939524096 };
  function je(e18) {
    return e18.match(/[-=:;]/g)?.length || 0;
  }
  function K2(e18) {
    return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e18) ? +RegExp.$1 / (RegExp.$2 ? 15 : 1) / 10 : 0, 15) << 22 | Math.min(je(e18), 15) << 18;
  }
  var Fe = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
  function fe({ n: e18, i: t15, v: r13 = [] }, n21, i21, l18) {
    e18 && (e18 = se({ n: e18, i: t15, v: r13 })), l18 = [...A4(l18)];
    for (let o21 of r13) {
      let f13 = n21.theme("screens", o21);
      for (let a18 of A4(f13 && ve(f13) || n21.v(o21))) {
        var s19;
        l18.push(a18), i21 |= f13 ? 67108864 | K2(a18) : o21 == "dark" ? 1073741824 : a18[0] == "@" ? K2(a18) : (s19 = a18, 1 << ~(/:([a-z-]+)/.test(s19) && ~Fe.indexOf(RegExp.$1.slice(2, 7)) || -18));
      }
    }
    return { n: e18, p: i21, r: l18, i: t15 };
  }
  var ae = /* @__PURE__ */ new Map();
  function ee(e18) {
    if (e18.d) {
      let t15 = [], r13 = Y2(e18.r.reduce((n21, i21) => i21[0] == "@" ? (t15.push(i21), n21) : i21 ? Y2(n21, (l18) => Y2(i21, (s19) => {
        let o21 = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(s19);
        if (o21) {
          let f13 = l18.indexOf(o21[1]);
          return ~f13 ? l18.slice(0, f13) + o21[0] + l18.slice(f13 + o21[1].length) : Z2(l18, s19);
        }
        return Z2(s19, l18);
      })) : n21, "&"), (n21) => Z2(n21, e18.n ? "." + W3(e18.n) : ""));
      return r13 && t15.push(r13.replace(/:merge\((.+?)\)/g, "$1")), t15.reduceRight((n21, i21) => i21 + "{" + n21 + "}", e18.d);
    }
  }
  function Y2(e18, t15) {
    return e18.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r13, n21, i21) => t15(n21) + i21);
  }
  function Z2(e18, t15) {
    return e18.replace(/&/g, t15);
  }
  var Le = new Intl.Collator("en", { numeric: true });
  function Oe(e18, t15) {
    for (var r13 = 0, n21 = e18.length; r13 < n21; ) {
      let i21 = n21 + r13 >> 1;
      0 >= xe(e18[i21], t15) ? r13 = i21 + 1 : n21 = i21;
    }
    return n21;
  }
  function xe(e18, t15) {
    let r13 = e18.p & S8.o;
    return r13 == (t15.p & S8.o) && (r13 == S8.b || r13 == S8.o) ? 0 : e18.p - t15.p || e18.o - t15.o || Le.compare(e18.n, t15.n);
  }
  function H2(e18, t15) {
    return Math.round(parseInt(e18, 16) * t15);
  }
  function I6(e18, t15 = {}) {
    if (typeof e18 == "function")
      return e18(t15);
    let { opacityValue: r13 = "1", opacityVariable: n21 } = t15, i21 = n21 ? `var(${n21})` : r13;
    if (e18.includes("<alpha-value>"))
      return e18.replace("<alpha-value>", i21);
    if (e18[0] == "#" && (e18.length == 4 || e18.length == 7)) {
      let l18 = (e18.length - 1) / 3, s19 = [17, 1, 0.062272][l18 - 1];
      return `rgba(${[H2(e18.substr(1, l18), s19), H2(e18.substr(1 + l18, l18), s19), H2(e18.substr(1 + 2 * l18, l18), s19), i21]})`;
    }
    return i21 == "1" ? e18 : i21 == "0" ? "#0000" : e18.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${i21})`);
  }
  function ue(e18, t15, r13, n21, i21 = []) {
    return function l18(s19, { n: o21, p: f13, r: a18 = [], i: c25 }, u15) {
      let p19 = [], m15 = "", h11 = 0, b10 = 0;
      for (let d16 in s19 || {}) {
        var $3, j7;
        let y7 = s19[d16];
        if (d16[0] == "@") {
          if (!y7)
            continue;
          if (d16[1] == "a") {
            p19.push(...de(o21, f13, k5("" + y7), u15, f13, a18, c25, true));
            continue;
          }
          if (d16[1] == "l") {
            for (let w12 of A4(y7))
              p19.push(...l18(w12, { n: o21, p: ($3 = S8[d16[7]], f13 & ~S8.o | $3), r: a18, i: c25 }, u15));
            continue;
          }
          if (d16[1] == "i") {
            p19.push(...A4(y7).map((w12) => ({ p: -1, o: 0, r: [], d: d16 + " " + w12 })));
            continue;
          }
          if (d16[1] == "k") {
            p19.push({ p: S8.d, o: 0, r: [d16], d: l18(y7, { p: S8.d }, u15).map(ee).join("") });
            continue;
          }
          if (d16[1] == "f") {
            p19.push(...A4(y7).map((w12) => ({ p: S8.d, o: 0, r: [d16], d: l18(w12, { p: S8.d }, u15).map(ee).join("") })));
            continue;
          }
        }
        if (typeof y7 != "object" || Array.isArray(y7))
          d16 == "label" && y7 ? o21 = y7 + V4(JSON.stringify([f13, c25, s19])) : (y7 || y7 === 0) && (d16 = d16.replace(/[A-Z]/g, (w12) => "-" + w12.toLowerCase()), b10 += 1, h11 = Math.max(h11, (j7 = d16)[0] == "-" ? 0 : je(j7) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(j7) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), m15 += (m15 ? ";" : "") + A4(y7).map((w12) => u15.s(d16, ce("" + w12, u15.theme) + (c25 ? " !important" : ""))).join(";"));
        else if (d16[0] == "@" || d16.includes("&")) {
          let w12 = f13;
          d16[0] == "@" && (d16 = d16.replace(/\bscreen\(([^)]+)\)/g, (R6, g8) => {
            let O6 = u15.theme("screens", g8);
            return O6 ? (w12 |= 67108864, ve(O6, "")) : R6;
          }), w12 |= K2(d16)), p19.push(...l18(y7, { n: o21, p: w12, r: [...a18, d16], i: c25 }, u15));
        } else
          p19.push(...l18(y7, { p: f13, r: [...a18, d16] }, u15));
      }
      return p19.unshift({ n: o21, p: f13, o: Math.max(0, 15 - b10) + 1.5 * Math.min(h11 || 15, 15), r: a18, d: m15 }), p19.sort(xe);
    }(e18, fe(t15, r13, n21, i21), r13);
  }
  function ce(e18, t15) {
    return e18.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r13, n21, i21, l18, s19) => {
      let o21 = t15(i21, s19);
      return typeof o21 == "function" && /color|fill|stroke/i.test(i21) ? I6(o21) : "" + o21;
    });
  }
  function pe(e18, t15) {
    let r13, n21 = [];
    for (let i21 of e18)
      i21.d && i21.n ? r13?.p == i21.p && "" + r13.r == "" + i21.r ? (r13.c = [r13.c, i21.c].filter(Boolean).join(" "), r13.d = r13.d + ";" + i21.d) : n21.push(r13 = { ...i21, n: i21.n && t15 }) : n21.push({ ...i21, n: i21.n && t15 });
    return n21;
  }
  function U4(e18, t15, r13 = S8.u, n21, i21) {
    let l18 = [];
    for (let s19 of e18)
      for (let o21 of function(f13, a18, c25, u15, p19) {
        f13 = { ...f13, i: f13.i || p19 };
        let m15 = function(h11, b10) {
          let $3 = ae.get(h11.n);
          return $3 ? $3(h11, b10) : b10.r(h11.n, h11.v[0] == "dark");
        }(f13, a18);
        return m15 ? typeof m15 == "string" ? ({ r: u15, p: c25 } = fe(f13, a18, c25, u15), pe(U4(k5(m15), a18, c25, u15, f13.i), f13.n)) : Array.isArray(m15) ? m15.map((h11) => {
          var b10, $3;
          return { o: 0, ...h11, r: [...A4(u15), ...A4(h11.r)], p: (b10 = c25, $3 = h11.p ?? c25, b10 & ~S8.o | $3) };
        }) : ue(m15, f13, a18, c25, u15) : [{ c: se(f13), p: 0, o: 0, r: [] }];
      }(s19, t15, r13, n21, i21))
        l18.splice(Oe(l18, o21), 0, o21);
    return l18;
  }
  function de(e18, t15, r13, n21, i21, l18, s19, o21) {
    return pe((o21 ? r13.flatMap((f13) => U4([f13], n21, i21, l18, s19)) : U4(r13, n21, i21, l18, s19)).map((f13) => f13.p & S8.o && (f13.n || t15 == S8.b) ? { ...f13, p: f13.p & ~S8.o | t15, o: 0 } : f13), e18);
  }
  function Ee(e18, t15, r13, n21) {
    var i21;
    return i21 = (l18, s19) => {
      let { n: o21, p: f13, r: a18, i: c25 } = fe(l18, s19, t15);
      return r13 && de(o21, t15, r13, s19, f13, a18, c25, n21);
    }, ae.set(e18, i21), e18;
  }
  function Q2(e18, t15, r13) {
    if (e18[e18.length - 1] != "(") {
      let n21 = [], i21 = false, l18 = false, s19 = "";
      for (let o21 of e18)
        if (!(o21 == "(" || /[~@]$/.test(o21))) {
          if (o21[0] == "!" && (o21 = o21.slice(1), i21 = !i21), o21.endsWith(":")) {
            n21[o21 == "dark:" ? "unshift" : "push"](o21.slice(0, -1));
            continue;
          }
          o21[0] == "-" && (o21 = o21.slice(1), l18 = !l18), o21.endsWith("-") && (o21 = o21.slice(0, -1)), o21 && o21 != "&" && (s19 += (s19 && "-") + o21);
        }
      s19 && (l18 && (s19 = "-" + s19), t15[0].push({ n: s19, v: n21.filter(qe), i: i21 }));
    }
  }
  function qe(e18, t15, r13) {
    return r13.indexOf(e18) == t15;
  }
  var ge = /* @__PURE__ */ new Map();
  function k5(e18) {
    let t15 = ge.get(e18);
    if (!t15) {
      let r13 = [], n21 = [[]], i21 = 0, l18 = 0, s19 = null, o21 = 0, f13 = (a18, c25 = 0) => {
        i21 != o21 && (r13.push(e18.slice(i21, o21 + c25)), a18 && Q2(r13, n21)), i21 = o21 + 1;
      };
      for (; o21 < e18.length; o21++) {
        let a18 = e18[o21];
        if (l18)
          e18[o21 - 1] != "\\" && (l18 += +(a18 == "[") || -(a18 == "]"));
        else if (a18 == "[")
          l18 += 1;
        else if (s19)
          e18[o21 - 1] != "\\" && s19.test(e18.slice(o21)) && (s19 = null, i21 = o21 + RegExp.lastMatch.length);
        else if (a18 == "/" && e18[o21 - 1] != "\\" && (e18[o21 + 1] == "*" || e18[o21 + 1] == "/"))
          s19 = e18[o21 + 1] == "*" ? /^\*\// : /^[\r\n]/;
        else if (a18 == "(")
          f13(), r13.push(a18);
        else if (a18 == ":")
          e18[o21 + 1] != ":" && f13(false, 1);
        else if (/[\s,)]/.test(a18)) {
          f13(true);
          let c25 = r13.lastIndexOf("(");
          if (a18 == ")") {
            let u15 = r13[c25 - 1];
            if (/[~@]$/.test(u15)) {
              let p19 = n21.shift();
              r13.length = c25, Q2([...r13, "#"], n21);
              let { v: m15 } = n21[0].pop();
              for (let h11 of p19)
                h11.v.splice(+(h11.v[0] == "dark") - +(m15[0] == "dark"), m15.length);
              Q2([...r13, Ee(u15.length > 1 ? u15.slice(0, -1) + V4(JSON.stringify([u15, p19])) : u15 + "(" + oe2(p19) + ")", S8.a, p19, /@$/.test(u15))], n21);
            }
            c25 = r13.lastIndexOf("(", c25 - 1);
          }
          r13.length = c25 + 1;
        } else
          /[~@]/.test(a18) && e18[o21 + 1] == "(" && n21.unshift([]);
      }
      f13(true), ge.set(e18, t15 = n21[0]);
    }
    return t15;
  }
  function Me(e18, t15, r13) {
    return t15.reduce((n21, i21, l18) => n21 + r13(i21) + e18[l18 + 1], e18[0]);
  }
  function G3(e18, t15) {
    return Array.isArray(e18) && Array.isArray(e18.raw) ? Me(e18, t15, (r13) => X2(r13).trim()) : t15.filter(Boolean).reduce((r13, n21) => r13 + X2(n21), e18 ? X2(e18) : "");
  }
  function X2(e18) {
    let t15, r13 = "";
    if (e18 && typeof e18 == "object")
      if (Array.isArray(e18))
        (t15 = G3(e18[0], e18.slice(1))) && (r13 += " " + t15);
      else
        for (let n21 in e18)
          e18[n21] && (r13 += " " + n21);
    else
      e18 != null && typeof e18 != "boolean" && (r13 += " " + e18);
    return r13;
  }
  var ft = Ce("@");
  var at = Ce("~");
  function Ce(e18) {
    return new Proxy(function(n21, ...i21) {
      return t15("", n21, i21);
    }, { get(r13, n21) {
      return n21 in r13 ? r13[n21] : function(l18, ...s19) {
        return t15(n21, l18, s19);
      };
    } });
    function t15(r13, n21, i21) {
      return oe2(k5(r13 + e18 + "(" + G3(n21, i21) + ")"));
    }
  }
  function B5(e18, t15) {
    return Array.isArray(e18) ? me(Me(e18, t15, (r13) => r13 != null && typeof r13 != "boolean" ? r13 : "")) : typeof e18 == "string" ? me(e18) : [e18];
  }
  var Je = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
  function me(e18) {
    let t15;
    e18 = e18.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
    let r13 = [{}], n21 = [r13[0]], i21 = [];
    for (; t15 = Je.exec(e18); )
      t15[4] && (r13.shift(), i21.shift()), t15[3] ? (i21.unshift(t15[3]), r13.unshift({}), n21.push(i21.reduce((l18, s19) => ({ [s19]: l18 }), r13[0]))) : t15[4] || (r13[0][t15[1]] && (r13.unshift({}), n21.push(i21.reduce((l18, s19) => ({ [s19]: l18 }), r13[0]))), r13[0][t15[1]] = t15[2]);
    return n21;
  }
  function he(e18, ...t15) {
    var r13;
    let n21 = B5(e18, t15), i21 = (n21.find((l18) => l18.label)?.label || "css") + V4(JSON.stringify(n21));
    return r13 = (l18, s19) => pe(n21.flatMap((o21) => ue(o21, l18, s19, S8.o)), i21), ae.set(i21, r13), i21;
  }
  var ut = new Proxy(function(e18, t15) {
    return be("animation", e18, t15);
  }, { get(e18, t15) {
    return t15 in e18 ? e18[t15] : function(n21, i21) {
      return be(t15, n21, i21);
    };
  } });
  function be(e18, t15, r13) {
    return { toString() {
      return he({ label: e18, "@layer components": { ...typeof t15 == "object" ? t15 : { animation: t15 }, animationName: "" + r13 } });
    } };
  }
  function ct(e18, t15, r13) {
    return [e18, te(t15, r13)];
  }
  function te(e18, t15) {
    return typeof e18 == "function" ? e18 : typeof e18 == "string" && /^[\w-]+$/.test(e18) ? (r13, n21) => ({ [e18]: t15 ? t15(r13, n21) : re(r13, 1) }) : (r13) => e18 || { [r13[1]]: re(r13, 2) };
  }
  function re(e18, t15, r13 = e18.slice(t15).find(Boolean) || e18.$$ || e18.input) {
    return e18.input[0] == "-" ? `calc(${r13} * -1)` : r13;
  }
  function pt(e18, t15, r13, n21) {
    return [e18, Ue(t15, r13, n21)];
  }
  function Ue(e18, t15, r13) {
    let n21 = typeof t15 == "string" ? (i21, l18) => ({ [t15]: r13 ? r13(i21, l18) : i21._ }) : t15 || (({ 1: i21, _: l18 }, s19, o21) => ({ [i21 || o21]: l18 }));
    return (i21, l18) => {
      let s19 = _e2(e18 || i21[1]), o21 = l18.theme(s19, i21.$$) ?? ne2(i21.$$, s19, l18);
      if (o21 != null)
        return i21._ = re(i21, 0, o21), n21(i21, l18, s19);
    };
  }
  function dt(e18, t15 = {}, r13) {
    return [e18, Be(t15, r13)];
  }
  function Be(e18 = {}, t15) {
    return (r13, n21) => {
      let { section: i21 = _e2(r13[0]).replace("-", "") + "Color" } = e18;
      if (!/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/.test(r13.$$))
        return;
      let { $1: l18, $2: s19 } = RegExp, o21 = n21.theme(i21, l18) || ne2(l18, i21, n21);
      if (!o21 || typeof o21 == "object")
        return;
      let { opacityVariable: f13 = `--tw-${r13[0].replace(/-$/, "")}-opacity`, opacitySection: a18 = i21.replace("Color", "Opacity"), property: c25 = i21, selector: u15 } = e18, p19 = n21.theme(a18, s19 || "DEFAULT") || s19 && ne2(s19, a18, n21), m15 = t15 || (({ _: b10 }) => {
        let $3 = We(c25, b10);
        return u15 ? { [u15]: $3 } : $3;
      });
      r13._ = { value: I6(o21, { opacityVariable: f13 || void 0, opacityValue: p19 || void 0 }), color: (b10) => I6(o21, b10), opacityVariable: f13 || void 0, opacityValue: p19 || void 0 };
      let h11 = m15(r13, n21);
      if (!r13.dark) {
        let b10 = n21.d(i21, l18, o21);
        b10 && b10 !== o21 && (r13._ = { value: I6(b10, { opacityVariable: f13 || void 0, opacityValue: p19 || "1" }), color: ($3) => I6(b10, $3), opacityVariable: f13 || void 0, opacityValue: p19 || void 0 }, h11 = { "&": h11, [n21.v("dark")]: m15(r13, n21) });
      }
      return h11;
    };
  }
  function We(e18, t15) {
    let r13 = {};
    return typeof t15 == "string" ? r13[e18] = t15 : (t15.opacityVariable && t15.value.includes(t15.opacityVariable) && (r13[t15.opacityVariable] = t15.opacityValue || "1"), r13[e18] = t15.value), r13;
  }
  function ne2(e18, t15, r13) {
    if (e18[0] == "[" && e18.slice(-1) == "]" && (e18 = ie(ce(e18.slice(1, -1), r13.theme)), !(/color|fill|stroke/i.test(t15) && !(/^color:/.test(e18) || /^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e18)) || /image/i.test(t15) && !(/^image:/.test(e18) || /^[a-z-]+\(/.test(e18)) || /weight/i.test(t15) && !(/^(number|any):/.test(e18) || /^\d+$/.test(e18)) || /position/i.test(t15) && /^(length|size):/.test(e18))))
      return e18.replace(/^[a-z-]+:/, "");
  }
  function _e2(e18) {
    return e18.replace(/-./g, (t15) => t15[1].toUpperCase());
  }
  function ie(e18) {
    return e18.includes("url(") ? e18.replace(/(.*?)(url\(.*?\))(.*?)/g, (t15, r13 = "", n21, i21 = "") => ie(r13) + n21 + ie(i21)) : e18.replace(/(^|[^\\])_+/g, (t15, r13) => r13 + " ".repeat(t15.length - r13.length)).replace(/\\_/g, "_").replace(/(calc|min|max|clamp)\(.+\)/g, (t15) => t15.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 "));
  }
  var Ge = Symbol();
  var z3 = new Proxy(J2, { apply(e18, t15, r13) {
    return q5(r13[0]);
  }, get(e18, t15) {
    let r13 = q5[t15];
    return typeof r13 == "function" ? function() {
      return r13.apply(q5, arguments);
    } : r13;
  } });
  var wt = function e16(t15) {
    return new Proxy(function(n21, ...i21) {
      return Ae(t15, "", n21, i21);
    }, { get(r13, n21) {
      return n21 === "bind" ? e16 : n21 in r13 ? r13[n21] : function(l18, ...s19) {
        return Ae(t15, n21, l18, s19);
      };
    } });
  }();
  function Ae(e18, t15, r13, n21) {
    return { toString() {
      let i21 = B5(r13, n21), l18 = W3(t15 + V4(JSON.stringify([t15, i21])));
      return (typeof e18 == "function" ? e18 : z3)(he({ [`@keyframes ${l18}`]: B5(r13, n21) })), l18;
    } };
  }

  // https://esm.sh/v99/@twind/preset-tailwind@1.0.1/deno/defaultTheme.js
  var s17 = "inherit";
  var d15 = "currentColor";
  var p15 = "transparent";
  var x7 = "#000";
  var b9 = "#fff";
  var u13 = { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a" };
  var g6 = { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827" };
  var h9 = { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b" };
  var y5 = { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717" };
  var k6 = { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917" };
  var C5 = { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d" };
  var T7 = { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12" };
  var F7 = { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f" };
  var w9 = { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12" };
  var A5 = { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314" };
  var D2 = { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d" };
  var U5 = { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b" };
  var E4 = { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a" };
  var L4 = { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63" };
  var S9 = { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e" };
  var v4 = { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" };
  var z4 = { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81" };
  var O5 = { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95" };
  var R4 = { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87" };
  var W4 = { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75" };
  var I7 = { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843" };
  var M4 = { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337" };
  var l16 = { __proto__: null, inherit: s17, current: d15, transparent: p15, black: x7, white: b9, slate: u13, gray: g6, zinc: h9, neutral: y5, stone: k6, red: C5, orange: T7, amber: F7, yellow: w9, lime: A5, green: D2, emerald: U5, teal: E4, cyan: L4, sky: S9, blue: v4, indigo: z4, violet: O5, purple: R4, fuchsia: W4, pink: I7, rose: M4 };
  var H3 = { screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" }, colors: l16, columns: { auto: "auto", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem" }, spacing: { px: "1px", 0: "0px", ...a17(4, "rem", 4, 0.5, 0.5), ...a17(12, "rem", 4, 5), 14: "3.5rem", ...a17(64, "rem", 4, 16, 4), 72: "18rem", 80: "20rem", 96: "24rem" }, durations: { 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0,0,0.2,1) infinite", pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite", bounce: "bounce 1s infinite" }, aspectRatio: { auto: "auto", square: "1/1", video: "16/9" }, backdropBlur: o20("blur"), backdropBrightness: o20("brightness"), backdropContrast: o20("contrast"), backdropGrayscale: o20("grayscale"), backdropHueRotate: o20("hueRotate"), backdropInvert: o20("invert"), backdropOpacity: o20("opacity"), backdropSaturate: o20("saturate"), backdropSepia: o20("sepia"), backgroundColor: o20("colors"), backgroundImage: { none: "none" }, backgroundOpacity: o20("opacity"), backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { none: "none", 0: "0", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, brightness: { ...a17(200, "", 100, 0, 50), ...a17(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, borderColor: ({ theme: e18 }) => ({ DEFAULT: e18("colors.gray.200", "currentColor"), ...e18("colors") }), borderOpacity: o20("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", "1/2": "50%", full: "9999px" }, borderSpacing: o20("spacing"), borderWidth: { DEFAULT: "1px", ...n20(8, "px") }, boxShadow: { sm: "0 1px 2px 0 rgba(0,0,0,0.05)", DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)", md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)", lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)", xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)", "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)", inner: "inset 0 2px 4px 0 rgba(0,0,0,0.05)", none: "0 0 #0000" }, boxShadowColor: o20("colors"), caretColor: o20("colors"), accentColor: ({ theme: e18 }) => ({ auto: "auto", ...e18("colors") }), contrast: { ...a17(200, "", 100, 0, 50), 75: "0.75", 125: "1.25" }, content: { none: "none" }, divideColor: o20("borderColor"), divideOpacity: o20("borderOpacity"), divideWidth: o20("borderWidth"), dropShadow: { sm: "0 1px 1px rgba(0,0,0,0.05)", DEFAULT: ["0 1px 2px rgba(0,0,0,0.1)", "0 1px 1px rgba(0,0,0,0.06)"], md: ["0 4px 3px rgba(0,0,0,0.07)", "0 2px 2px rgba(0,0,0,0.06)"], lg: ["0 10px 8px rgba(0,0,0,0.04)", "0 4px 3px rgba(0,0,0,0.1)"], xl: ["0 20px 13px rgba(0,0,0,0.03)", "0 8px 5px rgba(0,0,0,0.08)"], "2xl": "0 25px 25px rgba(0,0,0,0.15)", none: "0 0 #0000" }, fill: o20("colors"), grayscale: { DEFAULT: "100%", 0: "0" }, hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg" }, invert: { DEFAULT: "100%", 0: "0" }, flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: e18 }) => ({ ...e18("spacing"), ...i19(2, 6), ...i19(12, 12), auto: "auto", full: "100%" }), flexGrow: { DEFAULT: 1, 0: 0 }, flexShrink: { DEFAULT: 1, 0: 0 }, fontFamily: { sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","), serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","), mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",") }, fontSize: { xs: ["0.75rem", "1rem"], sm: ["0.875rem", "1.25rem"], base: ["1rem", "1.5rem"], lg: ["1.125rem", "1.75rem"], xl: ["1.25rem", "1.75rem"], "2xl": ["1.5rem", "2rem"], "3xl": ["1.875rem", "2.25rem"], "4xl": ["2.25rem", "2.5rem"], "5xl": ["3rem", "1"], "6xl": ["3.75rem", "1"], "7xl": ["4.5rem", "1"], "8xl": ["6rem", "1"], "9xl": ["8rem", "1"] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: o20("spacing"), gradientColorStops: o20("colors"), gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridColumn: { auto: "auto", "span-full": "1 / -1" }, gridRow: { auto: "auto", "span-full": "1 / -1" }, gridTemplateColumns: { none: "none" }, gridTemplateRows: { none: "none" }, height: ({ theme: e18 }) => ({ ...e18("spacing"), ...i19(2, 6), min: "min-content", max: "max-content", fit: "fit-content", auto: "auto", full: "100%", screen: "100vh" }), inset: ({ theme: e18 }) => ({ ...e18("spacing"), ...i19(2, 4), auto: "auto", full: "100%" }), keyframes: { spin: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } }, ping: { "0%": { transform: "scale(1)", opacity: "1" }, "75%,100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { ...a17(10, "rem", 4, 3), none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2" }, margin: ({ theme: e18 }) => ({ auto: "auto", ...e18("spacing") }), maxHeight: ({ theme: e18 }) => ({ full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh", ...e18("spacing") }), maxWidth: ({ theme: e18, breakpoints: f13 }) => ({ ...f13(e18("screens")), none: "none", 0: "0rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch" }), minHeight: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh" }, minWidth: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content" }, opacity: { ...a17(100, "", 100, 0, 10), 5: "0.05", 25: "0.25", 75: "0.75", 95: "0.95" }, order: { first: "-9999", last: "9999", none: "0" }, padding: o20("spacing"), placeholderColor: o20("colors"), placeholderOpacity: o20("opacity"), outlineColor: o20("colors"), outlineOffset: n20(8, "px"), outlineWidth: n20(8, "px"), ringColor: ({ theme: e18 }) => ({ ...e18("colors"), DEFAULT: e18("colors.blue.500", "#3b82f6") }), ringOffsetColor: o20("colors"), ringOffsetWidth: n20(8, "px"), ringOpacity: ({ theme: e18 }) => ({ ...e18("opacity"), DEFAULT: "0.5" }), ringWidth: { DEFAULT: "3px", ...n20(8, "px") }, rotate: { ...n20(2, "deg"), ...n20(12, "deg", 3), ...n20(180, "deg", 45) }, saturate: a17(200, "", 100, 0, 50), scale: { ...a17(150, "", 100, 0, 50), ...a17(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, scrollMargin: o20("spacing"), scrollPadding: o20("spacing"), sepia: { 0: "0", DEFAULT: "100%" }, skew: { ...n20(2, "deg"), ...n20(12, "deg", 3) }, space: o20("spacing"), stroke: o20("colors"), strokeWidth: a17(2), textColor: o20("colors"), textDecorationColor: o20("colors"), textDecorationThickness: { "from-font": "from-font", auto: "auto", ...n20(8, "px") }, textUnderlineOffset: { auto: "auto", ...n20(8, "px") }, textIndent: o20("spacing"), textOpacity: o20("opacity"), transitionDuration: ({ theme: e18 }) => ({ ...e18("durations"), DEFAULT: "150ms" }), transitionDelay: o20("durations"), transitionProperty: { none: "none", all: "all", DEFAULT: "color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter", colors: "color,background-color,border-color,text-decoration-color,fill,stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4,0,0.2,1)", linear: "linear", in: "cubic-bezier(0.4,0,1,1)", out: "cubic-bezier(0,0,0.2,1)", "in-out": "cubic-bezier(0.4,0,0.2,1)" }, translate: ({ theme: e18 }) => ({ ...e18("spacing"), ...i19(2, 4), full: "100%" }), width: ({ theme: e18 }) => ({ min: "min-content", max: "max-content", fit: "fit-content", screen: "100vw", ...e18("flexBasis") }), willChange: { scroll: "scroll-position" }, zIndex: { ...a17(50, "", 1, 0, 10), auto: "auto" } };
  function i19(e18, f13) {
    let t15 = {};
    do
      for (var r13 = 1; r13 < e18; r13++)
        t15[`${r13}/${e18}`] = Number((r13 / e18 * 100).toFixed(6)) + "%";
    while (++e18 <= f13);
    return t15;
  }
  function n20(e18, f13, t15 = 0) {
    let r13 = {};
    for (; t15 <= e18; t15 = 2 * t15 || 1)
      r13[t15] = t15 + f13;
    return r13;
  }
  function a17(e18, f13 = "", t15 = 1, r13 = 0, m15 = 1, c25 = {}) {
    for (; r13 <= e18; r13 += m15)
      c25[r13] = r13 / t15 + f13;
    return c25;
  }
  function o20(e18) {
    return ({ theme: f13 }) => f13(e18);
  }

  // https://esm.sh/v99/@twind/preset-tailwind@1.0.1/deno/preflight.js
  var i20 = { "*,::before,::after": { boxSizing: "border-box", borderWidth: "0", borderStyle: "solid", borderColor: "theme(borderColor.DEFAULT, currentColor)" }, "::before,::after": { "--tw-content": "''" }, html: { lineHeight: 1.5, WebkitTextSizeAdjust: "100%", MozTabSize: "4", tabSize: 4, fontFamily: `theme(fontFamily.sans, ${H3.fontFamily.sans})` }, body: { margin: "0", lineHeight: "inherit" }, hr: { height: "0", color: "inherit", borderTopWidth: "1px" }, "abbr:where([title])": { textDecoration: "underline dotted" }, "h1,h2,h3,h4,h5,h6": { fontSize: "inherit", fontWeight: "inherit" }, a: { color: "inherit", textDecoration: "inherit" }, "b,strong": { fontWeight: "bolder" }, "code,kbd,samp,pre": { fontFamily: `theme(fontFamily.mono, ${H3.fontFamily.mono})`, fontSize: "1em" }, small: { fontSize: "80%" }, "sub,sup": { fontSize: "75%", lineHeight: 0, position: "relative", verticalAlign: "baseline" }, sub: { bottom: "-0.25em" }, sup: { top: "-0.5em" }, table: { textIndent: "0", borderColor: "inherit", borderCollapse: "collapse" }, "button,input,optgroup,select,textarea": { fontFamily: "inherit", fontSize: "100%", lineHeight: "inherit", color: "inherit", margin: "0", padding: "0" }, "button,select": { textTransform: "none" }, "button,[type='button'],[type='reset'],[type='submit']": { WebkitAppearance: "button", backgroundColor: "transparent", backgroundImage: "none" }, ":-moz-focusring": { outline: "auto" }, ":-moz-ui-invalid": { boxShadow: "none" }, progress: { verticalAlign: "baseline" }, "::-webkit-inner-spin-button,::-webkit-outer-spin-button": { height: "auto" }, "[type='search']": { WebkitAppearance: "textfield", outlineOffset: "-2px" }, "::-webkit-search-decoration": { WebkitAppearance: "none" }, "::-webkit-file-upload-button": { WebkitAppearance: "button", font: "inherit" }, summary: { display: "list-item" }, "blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre": { margin: "0" }, fieldset: { margin: "0", padding: "0" }, legend: { padding: "0" }, "ol,ul,menu": { listStyle: "none", margin: "0", padding: "0" }, textarea: { resize: "vertical" }, "input::placeholder,textarea::placeholder": { opacity: 1, color: "theme(colors.gray.400, #9ca3af)" }, 'button,[role="button"]': { cursor: "pointer" }, ":disabled": { cursor: "default" }, "img,svg,video,canvas,audio,iframe,embed,object": { display: "block", verticalAlign: "middle" }, "img,video": { maxWidth: "100%", height: "auto" }, "[hidden]": { display: "none" } };

  // https://esm.sh/v99/@twind/preset-tailwind@1.0.1/deno/rules.js
  var j5 = [ct("\\[([-\\w]+):(.+)]", ({ 1: t15, 2: r13 }, a18) => ({ "@layer overrides": { "&": { [t15]: ne2(`[${r13}]`, t15, a18) } } })), ct("(group|peer)(~[^-[]+)?", ({ input: t15 }, { h: r13 }) => [{ c: r13(t15) }]), pt("aspect-", "aspectRatio"), ct("container", (t15, { theme: r13 }) => {
    let { screens: a18 = r13("screens"), center: i21, padding: l18 } = r13("container"), d16 = { width: "100%", marginRight: i21 && "auto", marginLeft: i21 && "auto", ...g8("xs") };
    for (let f13 in a18) {
      let c25 = a18[f13];
      typeof c25 == "string" && (d16[ve(c25)] = { "&": { maxWidth: c25, ...g8(f13) } });
    }
    return d16;
    function g8(f13) {
      let c25 = l18 && (typeof l18 == "string" ? l18 : l18[f13] || l18.DEFAULT);
      if (c25)
        return { paddingRight: c25, paddingLeft: c25 };
    }
  }), pt("content-", "content", ({ _: t15 }) => ({ "--tw-content": t15, content: "var(--tw-content)" })), ct("(?:box-)?decoration-(slice|clone)", "boxDecorationBreak"), ct("box-(border|content)", "boxSizing", ({ 1: t15 }) => t15 + "-box"), ct("hidden", { display: "none" }), ct("table-(auto|fixed)", "tableLayout"), ct(["(block|flex|table|grid|inline|contents|flow-root|list-item)", "(inline-(block|flex|table|grid))", "(table-(caption|cell|column|row|(column|row|footer|header)-group))"], "display"), "(float)-(left|right|none)", "(clear)-(left|right|none|both)", "(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)", "(isolation)-(auto)", ct("isolate", "isolation"), ct("object-(contain|cover|fill|none|scale-down)", "objectFit"), pt("object-", "objectPosition"), ct("object-(top|bottom|center|(left|right)(-(top|bottom))?)", "objectPosition", u14), ct("overscroll(-[xy])?-(auto|contain|none)", ({ 1: t15 = "", 2: r13 }) => ({ ["overscroll-behavior" + t15]: r13 })), ct("(static|fixed|absolute|relative|sticky)", "position"), pt("-?inset(-[xy])?(?:$|-)", "inset", ({ 1: t15, _: r13 }) => ({ top: t15 != "-x" && r13, right: t15 != "-y" && r13, bottom: t15 != "-x" && r13, left: t15 != "-y" && r13 })), pt("-?(top|bottom|left|right)(?:$|-)", "inset"), ct("visible", "visibility"), ct("invisible", { visibility: "hidden" }), pt("-?z-", "zIndex"), ct("flex-((row|col)(-reverse)?)", "flexDirection", v5), ct("flex-(wrap|wrap-reverse|nowrap)", "flexWrap"), pt("(flex-(?:grow|shrink))(?:$|-)"), pt("(flex)-"), pt("grow(?:$|-)", "flexGrow"), pt("shrink(?:$|-)", "flexShrink"), pt("basis-", "flexBasis"), pt("-?(order)-"), "-?(order)-(\\d+)", pt("grid-cols-", "gridTemplateColumns"), ct("grid-cols-(\\d+)", "gridTemplateColumns", $2), pt("col-", "gridColumn"), ct("col-(span)-(\\d+)", "gridColumn", S10), pt("col-start-", "gridColumnStart"), ct("col-start-(auto|\\d+)", "gridColumnStart"), pt("col-end-", "gridColumnEnd"), ct("col-end-(auto|\\d+)", "gridColumnEnd"), pt("grid-rows-", "gridTemplateRows"), ct("grid-rows-(\\d+)", "gridTemplateRows", $2), pt("row-", "gridRow"), ct("row-(span)-(\\d+)", "gridRow", S10), pt("row-start-", "gridRowStart"), ct("row-start-(auto|\\d+)", "gridRowStart"), pt("row-end-", "gridRowEnd"), ct("row-end-(auto|\\d+)", "gridRowEnd"), ct("grid-flow-((row|col)(-dense)?)", "gridAutoFlow", (t15) => u14(v5(t15))), ct("grid-flow-(dense)", "gridAutoFlow"), pt("auto-cols-", "gridAutoColumns"), pt("auto-rows-", "gridAutoRows"), pt("gap-x(?:$|-)", "gap", "columnGap"), pt("gap-y(?:$|-)", "gap", "rowGap"), pt("gap(?:$|-)", "gap"), "(justify-(?:items|self))-", ct("justify-", "justifyContent", x8), ct("(content|items|self)-", (t15) => ({ ["align-" + t15[1]]: x8(t15) })), ct("(place-(content|items|self))-", ({ 1: t15, $$: r13 }) => ({ [t15]: ("wun".includes(r13[3]) ? "space-" : "") + r13 })), pt("p([xytrbl])?(?:$|-)", "padding", w10("padding")), pt("-?m([xytrbl])?(?:$|-)", "margin", w10("margin")), pt("-?space-(x|y)(?:$|-)", "space", ({ 1: t15, _: r13 }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${t15}-reverse`]: "0", ["margin-" + { y: "top", x: "left" }[t15]]: `calc(${r13} * calc(1 - var(--tw-space-${t15}-reverse)))`, ["margin-" + { y: "bottom", x: "right" }[t15]]: `calc(${r13} * var(--tw-space-${t15}-reverse))` } })), ct("space-(x|y)-reverse", ({ 1: t15 }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${t15}-reverse`]: "1" } })), pt("w-", "width"), pt("min-w-", "minWidth"), pt("max-w-", "maxWidth"), pt("h-", "height"), pt("min-h-", "minHeight"), pt("max-h-", "maxHeight"), pt("font-", "fontWeight"), pt("font-", "fontFamily", "fontFamily", s18), ct("antialiased", { WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }), ct("subpixel-antialiased", { WebkitFontSmoothing: "auto", MozOsxFontSmoothing: "auto" }), ct("italic", "fontStyle"), ct("not-italic", { fontStyle: "normal" }), ct("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)", ({ 1: t15, 2: r13 = "", 3: a18 }) => r13 == "normal" ? { fontVariantNumeric: "normal" } : { ["--tw-" + (a18 ? "numeric-fraction" : "pt".includes(r13[0]) ? "numeric-spacing" : r13 ? "numeric-figure" : t15)]: t15, fontVariantNumeric: "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ordinal": "var(--tw-empty,/*!*/ /*!*/)", "--tw-slashed-zero": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-figure": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-spacing": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-fraction": "var(--tw-empty,/*!*/ /*!*/)" } } }), pt("tracking-", "letterSpacing"), pt("leading-", "lineHeight"), ct("list-(inside|outside)", "listStylePosition"), pt("list-", "listStyleType"), ct("list-", "listStyleType"), pt("placeholder-opacity-", "placeholderOpacity", ({ _: t15 }) => ({ "&::placeholder": { "--tw-placeholder-opacity": t15 } })), dt("placeholder-", { property: "color", selector: "&::placeholder" }), ct("text-(left|center|right|justify|start|end)", "textAlign"), ct("text-(ellipsis|clip)", "textOverflow"), pt("text-opacity-", "textOpacity", "--tw-text-opacity"), dt("text-", { property: "color" }), pt("text-", "fontSize", ({ _: t15 }) => typeof t15 == "string" ? { fontSize: t15 } : { fontSize: t15[0], ...typeof t15[1] == "string" ? { lineHeight: t15[1] } : t15[1] }), pt("indent-", "textIndent"), ct("(overline|underline|line-through)", "textDecorationLine"), ct("no-underline", { textDecorationLine: "none" }), pt("underline-offset-", "textUnderlineOffset"), dt("decoration-", { section: "textDecorationColor", opacityVariable: false, opacitySection: "opacity" }), pt("decoration-", "textDecorationThickness"), ct("decoration-", "textDecorationStyle"), ct("(uppercase|lowercase|capitalize)", "textTransform"), ct("normal-case", { textTransform: "none" }), ct("truncate", { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }), ct("align-", "verticalAlign"), ct("whitespace-", "whiteSpace"), ct("break-normal", { wordBreak: "normal", overflowWrap: "normal" }), ct("break-words", { overflowWrap: "break-word" }), ct("break-all", { wordBreak: "break-all" }), dt("caret-", { opacityVariable: false, opacitySection: "opacity" }), dt("accent-", { opacityVariable: false, opacitySection: "opacity" }), ct("bg-gradient-to-([trbl]|[tb][rl])", "backgroundImage", ({ 1: t15 }) => `linear-gradient(to ${p16(t15, " ")},var(--tw-gradient-stops))`), dt("from-", { section: "gradientColorStops", opacityVariable: false, opacitySection: "opacity" }, ({ _: t15 }) => ({ "--tw-gradient-from": t15.value, "--tw-gradient-to": t15.color({ opacityValue: "0" }), "--tw-gradient-stops": "var(--tw-gradient-from),var(--tw-gradient-to)" })), dt("via-", { section: "gradientColorStops", opacityVariable: false, opacitySection: "opacity" }, ({ _: t15 }) => ({ "--tw-gradient-to": t15.color({ opacityValue: "0" }), "--tw-gradient-stops": `var(--tw-gradient-from),${t15.value},var(--tw-gradient-to)` })), dt("to-", { section: "gradientColorStops", property: "--tw-gradient-to", opacityVariable: false, opacitySection: "opacity" }), ct("bg-(fixed|local|scroll)", "backgroundAttachment"), ct("bg-origin-(border|padding|content)", "backgroundOrigin", ({ 1: t15 }) => t15 + "-box"), ct(["bg-(no-repeat|repeat(-[xy])?)", "bg-repeat-(round|space)"], "backgroundRepeat"), ct("bg-blend-", "backgroundBlendMode"), ct("bg-clip-(border|padding|content|text)", "backgroundClip", ({ 1: t15 }) => t15 + (t15 == "text" ? "" : "-box")), pt("bg-opacity-", "backgroundOpacity", "--tw-bg-opacity"), dt("bg-", { section: "backgroundColor" }), pt("bg-", "backgroundImage"), pt("bg-", "backgroundPosition"), ct("bg-(top|bottom|center|(left|right)(-(top|bottom))?)", "backgroundPosition", u14), pt("bg-", "backgroundSize"), pt("rounded(?:$|-)", "borderRadius"), pt("rounded-([trbl]|[tb][rl])(?:$|-)", "borderRadius", ({ 1: t15, _: r13 }) => {
    let a18 = { t: ["tl", "tr"], r: ["tr", "br"], b: ["bl", "br"], l: ["bl", "tl"] }[t15] || [t15, t15];
    return { [`border-${p16(a18[0])}-radius`]: r13, [`border-${p16(a18[1])}-radius`]: r13 };
  }), ct("border-(collapse|separate)", "borderCollapse"), pt("border-opacity(?:$|-)", "borderOpacity", "--tw-border-opacity"), ct("border-(solid|dashed|dotted|double|none)", "borderStyle"), pt("border-spacing(-[xy])?(?:$|-)", "borderSpacing", ({ 1: t15, _: r13 }) => ({ "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-border-spacing-x": 0, "--tw-border-spacing-y": 0 } }, ["--tw-border-spacing" + (t15 || "-x")]: r13, ["--tw-border-spacing" + (t15 || "-y")]: r13, "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)" })), dt("border-([xytrbl])-", { section: "borderColor" }, w10("border", "Color")), dt("border-"), pt("border-([xytrbl])(?:$|-)", "borderWidth", w10("border", "Width")), pt("border(?:$|-)", "borderWidth"), pt("divide-opacity(?:$|-)", "divideOpacity", ({ _: t15 }) => ({ "&>:not([hidden])~:not([hidden])": { "--tw-divide-opacity": t15 } })), ct("divide-(solid|dashed|dotted|double|none)", ({ 1: t15 }) => ({ "&>:not([hidden])~:not([hidden])": { borderStyle: t15 } })), ct("divide-([xy]-reverse)", ({ 1: t15 }) => ({ "&>:not([hidden])~:not([hidden])": { ["--tw-divide-" + t15]: "1" } })), pt("divide-([xy])(?:$|-)", "divideWidth", ({ 1: t15, _: r13 }) => {
    let a18 = { x: "lr", y: "tb" }[t15];
    return { "&>:not([hidden])~:not([hidden])": { [`--tw-divide-${t15}-reverse`]: "0", [`border-${p16(a18[0])}Width`]: `calc(${r13} * calc(1 - var(--tw-divide-${t15}-reverse)))`, [`border-${p16(a18[1])}Width`]: `calc(${r13} * var(--tw-divide-${t15}-reverse))` } };
  }), dt("divide-", { property: "borderColor", selector: "&>:not([hidden])~:not([hidden])" }), pt("ring-opacity(?:$|-)", "ringOpacity", "--tw-ring-opacity"), dt("ring-offset-", { property: "--tw-ring-offset-color", opacityVariable: false }), pt("ring-offset(?:$|-)", "ringOffsetWidth", "--tw-ring-offset-width"), ct("ring-inset", { "--tw-ring-inset": "inset" }), dt("ring-", { property: "--tw-ring-color" }), pt("ring(?:$|-)", "ringWidth", ({ _: t15 }, { theme: r13 }) => ({ "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)", "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${t15} + var(--tw-ring-offset-width)) var(--tw-ring-color)`, boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000", "&": { "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)", "--tw-ring-offset-width": r13("ringOffsetWidth", "", "0px"), "--tw-ring-offset-color": I6(r13("ringOffsetColor", "", "#fff")), "--tw-ring-color": I6(r13("ringColor", "", "#93c5fd"), { opacityVariable: "--tw-ring-opacity" }), "--tw-ring-opacity": r13("ringOpacity", "", "0.5") } } } })), dt("shadow-", { section: "boxShadowColor", opacityVariable: false, opacitySection: "opacity" }, ({ _: t15 }) => ({ "--tw-shadow-color": t15.value, "--tw-shadow": "var(--tw-shadow-colored)" })), pt("shadow(?:$|-)", "boxShadow", ({ _: t15 }) => ({ "--tw-shadow": s18(t15), "--tw-shadow-colored": s18(t15).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g, "$1var(--tw-shadow-color)$2"), boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000" } } })), pt("(opacity)-"), ct("mix-blend-", "mixBlendMode"), ...k7(), ...k7("backdrop-"), pt("transition(?:$|-)", "transitionProperty", (t15, { theme: r13 }) => ({ transitionProperty: s18(t15), transitionTimingFunction: t15._ == "none" ? void 0 : s18(r13("transitionTimingFunction", "")), transitionDuration: t15._ == "none" ? void 0 : s18(r13("transitionDuration", "")) })), pt("duration(?:$|-)", "transitionDuration", "transitionDuration", s18), pt("ease(?:$|-)", "transitionTimingFunction", "transitionTimingFunction", s18), pt("delay(?:$|-)", "transitionDelay", "transitionDelay", s18), pt("animate(?:$|-)", "animation", (t15, { theme: r13, h: a18 }) => {
    let i21 = s18(t15), l18 = i21.split(" "), d16 = r13("keyframes", l18[0]);
    return d16 ? { ["@keyframes " + (l18[0] = a18(l18[0]))]: d16, animation: l18.join(" ") } : { animation: i21 };
  }), "(transform)-(none)", ct("transform", h10), ct("transform-(cpu|gpu)", ({ 1: t15 }) => ({ "--tw-transform": C6(t15 == "gpu") })), pt("scale(-[xy])?-", "scale", ({ 1: t15, _: r13 }) => ({ ["--tw-scale" + (t15 || "-x")]: r13, ["--tw-scale" + (t15 || "-y")]: r13, ...h10() })), pt("-?(rotate)-", "rotate", y6), pt("-?(translate-[xy])-", "translate", y6), pt("-?(skew-[xy])-", "skew", y6), ct("origin-(center|((top|bottom)(-(left|right))?)|left|right)", "transformOrigin", u14), "(appearance)-", pt("(columns)-"), "(columns)-(\\d+)", "(break-(?:before|after|inside))-", pt("(cursor)-"), "(cursor)-", ct("snap-(none)", "scroll-snap-type"), ct("snap-(x|y|both)", ({ 1: t15 }) => ({ "scroll-snap-type": t15 + " var(--tw-scroll-snap-strictness)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-scroll-snap-strictness": "proximity" } } })), ct("snap-(mandatory|proximity)", "--tw-scroll-snap-strictness"), ct("snap-(?:(start|end|center)|align-(none))", "scroll-snap-align"), ct("snap-(normal|always)", "scroll-snap-stop"), ct("scroll-(auto|smooth)", "scroll-behavior"), pt("scroll-p([xytrbl])?(?:$|-)", "padding", w10("scroll-padding")), pt("-?scroll-m([xytrbl])?(?:$|-)", "scroll-margin", w10("scroll-margin")), ct("touch-(auto|none|manipulation)", "touch-action"), ct("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))", ({ 1: t15, 2: r13, 3: a18 }) => ({ [`--tw-${r13 ? "pan-x" : a18 ? "pan-y" : t15}`]: t15, "touch-action": "var(--tw-touch-action)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-pan-x": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pan-y": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pinch-zoom": "var(--tw-empty,/*!*/ /*!*/)", "--tw-touch-action": "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)" } } })), ct("outline-none", { outline: "2px solid transparent", "outline-offset": "2px" }), ct("outline", { outlineStyle: "solid" }), ct("outline-(dashed|dotted|double|hidden)", "outlineStyle"), pt("(outline-offset)-"), dt("outline-", { opacityVariable: false, opacitySection: "opacity" }), pt("outline-", "outlineWidth"), "(pointer-events)-", pt("(will-change)-"), "(will-change)-", ["resize(?:-(none|x|y))?", "resize", ({ 1: t15 }) => ({ x: "horizontal", y: "vertical" })[t15] || t15 || "both"], ct("select-(none|text|all|auto)", "userSelect"), dt("fill-", { section: "fill", opacityVariable: false, opacitySection: "opacity" }), dt("stroke-", { section: "stroke", opacityVariable: false, opacitySection: "opacity" }), pt("stroke-", "strokeWidth"), ct("sr-only", { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", whiteSpace: "nowrap", clip: "rect(0,0,0,0)", borderWidth: "0" }), ct("not-sr-only", { position: "static", width: "auto", height: "auto", padding: "0", margin: "0", overflow: "visible", whiteSpace: "normal", clip: "auto" })];
  function u14(t15) {
    return (typeof t15 == "string" ? t15 : t15[1]).replace(/-/g, " ").trim();
  }
  function v5(t15) {
    return (typeof t15 == "string" ? t15 : t15[1]).replace("col", "column");
  }
  function p16(t15, r13 = "-") {
    let a18 = [];
    for (let i21 of t15)
      a18.push({ t: "top", r: "right", b: "bottom", l: "left" }[i21]);
    return a18.join(r13);
  }
  function s18(t15) {
    return t15 && "" + (t15._ || t15);
  }
  function x8({ $$: t15 }) {
    return ({ r: "flex-", "": "flex-", w: "space-", u: "space-", n: "space-" }[t15[3] || ""] || "") + t15;
  }
  function w10(t15, r13 = "") {
    return ({ 1: a18, _: i21 }) => {
      let l18 = { x: "lr", y: "tb" }[a18] || a18 + a18;
      return l18 ? { ...We(t15 + "-" + p16(l18[0]) + r13, i21), ...We(t15 + "-" + p16(l18[1]) + r13, i21) } : We(t15 + r13, i21);
    };
  }
  function k7(t15 = "") {
    let r13 = ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", t15 && "opacity", "saturate", "sepia", !t15 && "drop-shadow"].filter(Boolean), a18 = {};
    for (let i21 of r13)
      a18[`--tw-${t15}${i21}`] = "var(--tw-empty,/*!*/ /*!*/)";
    return a18 = { [`${t15}filter`]: r13.map((i21) => `var(--tw-${t15}${i21})`).join(" "), "@layer defaults": { "*,::before,::after,::backdrop": a18 } }, [`(${t15}filter)-(none)`, ct(`${t15}filter`, a18), ...r13.map((i21) => pt(`${i21[0] == "h" ? "-?" : ""}(${t15}${i21})(?:$|-)`, i21, ({ 1: l18, _: d16 }) => ({ [`--tw-${l18}`]: A4(d16).map((g8) => `${i21}(${g8})`).join(" "), ...a18 })))];
  }
  function y6({ 1: t15, _: r13 }) {
    return { ["--tw-" + t15]: r13, ...h10() };
  }
  function h10() {
    return { transform: "var(--tw-transform)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-translate-x": "0", "--tw-translate-y": "0", "--tw-rotate": "0", "--tw-skew-x": "0", "--tw-skew-y": "0", "--tw-scale-x": "1", "--tw-scale-y": "1", "--tw-transform": C6() } } };
  }
  function C6(t15) {
    return [t15 ? "translate3d(var(--tw-translate-x),var(--tw-translate-y),0)" : "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))", "rotate(var(--tw-rotate))", "skewX(var(--tw-skew-x))", "skewY(var(--tw-skew-y))", "scaleX(var(--tw-scale-x))", "scaleY(var(--tw-scale-y))"].join(" ");
  }
  function S10({ 1: t15, 2: r13 }) {
    return `${t15} ${r13} / ${t15} ${r13}`;
  }
  function $2({ 1: t15 }) {
    return `repeat(${t15},minmax(0,1fr))`;
  }

  // https://esm.sh/v99/notie@4.3.1/deno/notie.js
  var Me2 = Object.create;
  var xe2 = Object.defineProperty;
  var He = Object.getOwnPropertyDescriptor;
  var Se = Object.getOwnPropertyNames;
  var we = Object.getPrototypeOf;
  var Oe2 = Object.prototype.hasOwnProperty;
  var Ae2 = (y7, o21) => () => (o21 || y7((o21 = { exports: {} }).exports, o21), o21.exports);
  var De = (y7, o21, v6, b10) => {
    if (o21 && typeof o21 == "object" || typeof o21 == "function")
      for (let m15 of Se(o21))
        !Oe2.call(y7, m15) && m15 !== v6 && xe2(y7, m15, { get: () => o21[m15], enumerable: !(b10 = He(o21, m15)) || b10.enumerable });
    return y7;
  };
  var Ie = (y7, o21, v6) => (v6 = y7 != null ? Me2(we(y7)) : {}, De(o21 || !y7 || !y7.__esModule ? xe2(v6, "default", { value: y7, enumerable: true }) : v6, y7));
  var ye = Ae2((ie2, pe2) => {
    (function(y7, o21) {
      typeof ie2 == "object" && typeof pe2 == "object" ? pe2.exports = o21() : typeof define == "function" && define.amd ? define([], o21) : typeof ie2 == "object" ? ie2.notie = o21() : y7.notie = o21();
    })(ie2, function() {
      return function(y7) {
        function o21(b10) {
          if (v6[b10])
            return v6[b10].exports;
          var m15 = v6[b10] = { i: b10, l: false, exports: {} };
          return y7[b10].call(m15.exports, m15, m15.exports, o21), m15.l = true, m15.exports;
        }
        var v6 = {};
        return o21.m = y7, o21.c = v6, o21.i = function(b10) {
          return b10;
        }, o21.d = function(b10, m15, ce2) {
          o21.o(b10, m15) || Object.defineProperty(b10, m15, { configurable: false, enumerable: true, get: ce2 });
        }, o21.n = function(b10) {
          var m15 = b10 && b10.__esModule ? function() {
            return b10.default;
          } : function() {
            return b10;
          };
          return o21.d(m15, "a", m15), m15;
        }, o21.o = function(b10, m15) {
          return Object.prototype.hasOwnProperty.call(b10, m15);
        }, o21.p = "", o21(o21.s = 1);
      }([function(y7, o21) {
        y7.exports = function(v6) {
          return v6.webpackPolyfill || (v6.deprecate = function() {
          }, v6.paths = [], v6.children || (v6.children = []), Object.defineProperty(v6, "loaded", { enumerable: true, get: function() {
            return v6.l;
          } }), Object.defineProperty(v6, "id", { enumerable: true, get: function() {
            return v6.i;
          } }), v6.webpackPolyfill = 1), v6;
        };
      }, function(y7, o21, v6) {
        "use strict";
        (function(b10) {
          var m15, ce2, re3, V5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A6) {
            return typeof A6;
          } : function(A6) {
            return A6 && typeof Symbol == "function" && A6.constructor === Symbol && A6 !== Symbol.prototype ? "symbol" : typeof A6;
          };
          (function(A6, u15) {
            V5(o21) === "object" && V5(b10) === "object" ? b10.exports = u15() : (ce2 = [], m15 = u15, re3 = typeof m15 == "function" ? m15.apply(o21, ce2) : m15, re3 !== void 0 && (b10.exports = re3));
          })(void 0, function() {
            return function(A6) {
              function u15(g8) {
                if (X3[g8])
                  return X3[g8].exports;
                var T8 = X3[g8] = { i: g8, l: false, exports: {} };
                return A6[g8].call(T8.exports, T8, T8.exports, u15), T8.l = true, T8.exports;
              }
              var X3 = {};
              return u15.m = A6, u15.c = X3, u15.i = function(g8) {
                return g8;
              }, u15.d = function(g8, T8, B6) {
                u15.o(g8, T8) || Object.defineProperty(g8, T8, { configurable: false, enumerable: true, get: B6 });
              }, u15.n = function(g8) {
                var T8 = g8 && g8.__esModule ? function() {
                  return g8.default;
                } : function() {
                  return g8;
                };
                return u15.d(T8, "a", T8), T8;
              }, u15.o = function(g8, T8) {
                return Object.prototype.hasOwnProperty.call(g8, T8);
              }, u15.p = "", u15(u15.s = 0);
            }([function(A6, u15, X3) {
              function g8(t15, c25) {
                var s19 = {};
                for (var d16 in t15)
                  c25.indexOf(d16) >= 0 || Object.prototype.hasOwnProperty.call(t15, d16) && (s19[d16] = t15[d16]);
                return s19;
              }
              Object.defineProperty(u15, "__esModule", { value: true });
              var T8 = typeof Symbol == "function" && V5(Symbol.iterator) === "symbol" ? function(t15) {
                return typeof t15 > "u" ? "undefined" : V5(t15);
              } : function(t15) {
                return t15 && typeof Symbol == "function" && t15.constructor === Symbol && t15 !== Symbol.prototype ? "symbol" : typeof t15 > "u" ? "undefined" : V5(t15);
              }, B6 = Object.assign || function(t15) {
                for (var c25 = 1; c25 < arguments.length; c25++) {
                  var s19 = arguments[c25];
                  for (var d16 in s19)
                    Object.prototype.hasOwnProperty.call(s19, d16) && (t15[d16] = s19[d16]);
                }
                return t15;
              }, J3 = { top: "top", bottom: "bottom" }, e18 = { alertTime: 3, dateMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], overlayClickDismiss: true, overlayOpacity: 0.75, transitionCurve: "ease", transitionDuration: 0.3, transitionSelector: "all", classes: { container: "notie-container", textbox: "notie-textbox", textboxInner: "notie-textbox-inner", button: "notie-button", element: "notie-element", elementHalf: "notie-element-half", elementThird: "notie-element-third", overlay: "notie-overlay", backgroundSuccess: "notie-background-success", backgroundWarning: "notie-background-warning", backgroundError: "notie-background-error", backgroundInfo: "notie-background-info", backgroundNeutral: "notie-background-neutral", backgroundOverlay: "notie-background-overlay", alert: "notie-alert", inputField: "notie-input-field", selectChoiceRepeated: "notie-select-choice-repeated", dateSelectorInner: "notie-date-selector-inner", dateSelectorUp: "notie-date-selector-up" }, ids: { overlay: "notie-overlay" }, positions: { alert: J3.top, force: J3.top, confirm: J3.top, input: J3.top, select: J3.bottom, date: J3.top } }, ge2 = u15.setOptions = function(t15) {
                e18 = B6({}, e18, t15, { classes: B6({}, e18.classes, t15.classes), ids: B6({}, e18.ids, t15.ids), positions: B6({}, e18.positions, t15.positions) });
              }, fe2 = function() {
                return new Promise(function(t15) {
                  return setTimeout(t15, 0);
                });
              }, oe3 = function(t15) {
                return new Promise(function(c25) {
                  return setTimeout(c25, 1e3 * t15);
                });
              }, R6 = function() {
                document.activeElement && document.activeElement.blur();
              }, W5 = function() {
                var t15 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c25) {
                  var s19 = 16 * Math.random() | 0, d16 = c25 === "x" ? s19 : 3 & s19 | 8;
                  return d16.toString(16);
                });
                return "notie-" + t15;
              }, le = { 1: e18.classes.backgroundSuccess, success: e18.classes.backgroundSuccess, 2: e18.classes.backgroundWarning, warning: e18.classes.backgroundWarning, 3: e18.classes.backgroundError, error: e18.classes.backgroundError, 4: e18.classes.backgroundInfo, info: e18.classes.backgroundInfo, 5: e18.classes.backgroundNeutral, neutral: e18.classes.backgroundNeutral }, me2 = function() {
                return e18.transitionSelector + " " + e18.transitionDuration + "s " + e18.transitionCurve;
              }, $3 = function(t15) {
                return t15.keyCode === 13;
              }, ee3 = function(t15) {
                return t15.keyCode === 27;
              }, K3 = function(t15, c25) {
                t15.classList.add(e18.classes.container), t15.style[c25] = "-10000px", document.body.appendChild(t15), t15.style[c25] = "-" + t15.offsetHeight + "px", t15.listener && window.addEventListener("keydown", t15.listener), fe2().then(function() {
                  t15.style.transition = me2(), t15.style[c25] = 0;
                });
              }, O6 = function(t15, c25) {
                var s19 = document.getElementById(t15);
                s19 && (s19.style[c25] = "-" + s19.offsetHeight + "px", s19.listener && window.removeEventListener("keydown", s19.listener), oe3(e18.transitionDuration).then(function() {
                  s19.parentNode && s19.parentNode.removeChild(s19);
                }));
              }, te2 = function(t15, c25) {
                var s19 = document.createElement("div");
                s19.id = e18.ids.overlay, s19.classList.add(e18.classes.overlay), s19.classList.add(e18.classes.backgroundOverlay), s19.style.opacity = 0, t15 && e18.overlayClickDismiss && (s19.onclick = function() {
                  O6(t15.id, c25), j7();
                }), document.body.appendChild(s19), fe2().then(function() {
                  s19.style.transition = me2(), s19.style.opacity = e18.overlayOpacity;
                });
              }, j7 = function() {
                var t15 = document.getElementById(e18.ids.overlay);
                t15.style.opacity = 0, oe3(e18.transitionDuration).then(function() {
                  t15.parentNode && t15.parentNode.removeChild(t15);
                });
              }, F8 = u15.hideAlerts = function(t15) {
                var c25 = document.getElementsByClassName(e18.classes.alert);
                if (c25.length) {
                  for (var s19 = 0; s19 < c25.length; s19++) {
                    var d16 = c25[s19];
                    O6(d16.id, d16.position);
                  }
                  t15 && oe3(e18.transitionDuration).then(function() {
                    return t15();
                  });
                }
              }, he2 = u15.alert = function(t15) {
                var c25 = t15.type, s19 = c25 === void 0 ? 4 : c25, d16 = t15.text, i21 = t15.time, k8 = i21 === void 0 ? e18.alertTime : i21, H4 = t15.stay, S12 = H4 !== void 0 && H4, h11 = t15.position, p19 = h11 === void 0 ? e18.positions.alert || p19.top : h11;
                R6(), F8();
                var l18 = document.createElement("div"), f13 = W5();
                l18.id = f13, l18.position = p19, l18.classList.add(e18.classes.textbox), l18.classList.add(le[s19]), l18.classList.add(e18.classes.alert), l18.innerHTML = '<div class="' + e18.classes.textboxInner + '">' + d16 + "</div>", l18.onclick = function() {
                  return O6(f13, p19);
                }, l18.listener = function(n21) {
                  ($3(n21) || ee3(n21)) && F8();
                }, K3(l18, p19), k8 && k8 < 1 && (k8 = 1), !S12 && k8 && oe3(k8).then(function() {
                  return O6(f13, p19);
                });
              }, ke = u15.force = function(t15, c25) {
                var s19 = t15.type, d16 = s19 === void 0 ? 5 : s19, i21 = t15.text, k8 = t15.buttonText, H4 = k8 === void 0 ? "OK" : k8, S12 = t15.callback, h11 = t15.position, p19 = h11 === void 0 ? e18.positions.force || p19.top : h11;
                R6(), F8();
                var l18 = document.createElement("div"), f13 = W5();
                l18.id = f13;
                var n21 = document.createElement("div");
                n21.classList.add(e18.classes.textbox), n21.classList.add(e18.classes.backgroundInfo), n21.innerHTML = '<div class="' + e18.classes.textboxInner + '">' + i21 + "</div>";
                var r13 = document.createElement("div");
                r13.classList.add(e18.classes.button), r13.classList.add(le[d16]), r13.innerHTML = H4, r13.onclick = function() {
                  O6(f13, p19), j7(), S12 ? S12() : c25 && c25();
                }, l18.appendChild(n21), l18.appendChild(r13), l18.listener = function(C7) {
                  $3(C7) && r13.click();
                }, K3(l18, p19), te2();
              }, Ce2 = u15.confirm = function(t15, c25, s19) {
                var d16 = t15.text, i21 = t15.submitText, k8 = i21 === void 0 ? "Yes" : i21, H4 = t15.cancelText, S12 = H4 === void 0 ? "Cancel" : H4, h11 = t15.submitCallback, p19 = t15.cancelCallback, l18 = t15.position, f13 = l18 === void 0 ? e18.positions.confirm || f13.top : l18;
                R6(), F8();
                var n21 = document.createElement("div"), r13 = W5();
                n21.id = r13;
                var C7 = document.createElement("div");
                C7.classList.add(e18.classes.textbox), C7.classList.add(e18.classes.backgroundInfo), C7.innerHTML = '<div class="' + e18.classes.textboxInner + '">' + d16 + "</div>";
                var x9 = document.createElement("div");
                x9.classList.add(e18.classes.button), x9.classList.add(e18.classes.elementHalf), x9.classList.add(e18.classes.backgroundSuccess), x9.innerHTML = k8, x9.onclick = function() {
                  O6(r13, f13), j7(), h11 ? h11() : c25 && c25();
                };
                var a18 = document.createElement("div");
                a18.classList.add(e18.classes.button), a18.classList.add(e18.classes.elementHalf), a18.classList.add(e18.classes.backgroundError), a18.innerHTML = S12, a18.onclick = function() {
                  O6(r13, f13), j7(), p19 ? p19() : s19 && s19();
                }, n21.appendChild(C7), n21.appendChild(x9), n21.appendChild(a18), n21.listener = function(E5) {
                  $3(E5) ? x9.click() : ee3(E5) && a18.click();
                }, K3(n21, f13), te2(n21, f13);
              }, ve2 = function(t15, c25, s19) {
                var d16 = t15.text, i21 = t15.submitText, k8 = i21 === void 0 ? "Submit" : i21, H4 = t15.cancelText, S12 = H4 === void 0 ? "Cancel" : H4, h11 = t15.submitCallback, p19 = t15.cancelCallback, l18 = t15.position, f13 = l18 === void 0 ? e18.positions.input || f13.top : l18, n21 = g8(t15, ["text", "submitText", "cancelText", "submitCallback", "cancelCallback", "position"]);
                R6(), F8();
                var r13 = document.createElement("div"), C7 = W5();
                r13.id = C7;
                var x9 = document.createElement("div");
                x9.classList.add(e18.classes.textbox), x9.classList.add(e18.classes.backgroundInfo), x9.innerHTML = '<div class="' + e18.classes.textboxInner + '">' + d16 + "</div>";
                var a18 = document.createElement("input");
                a18.classList.add(e18.classes.inputField), a18.setAttribute("autocapitalize", n21.autocapitalize || "none"), a18.setAttribute("autocomplete", n21.autocomplete || "off"), a18.setAttribute("autocorrect", n21.autocorrect || "off"), a18.setAttribute("autofocus", n21.autofocus || "true"), a18.setAttribute("inputmode", n21.inputmode || "verbatim"), a18.setAttribute("max", n21.max || ""), a18.setAttribute("maxlength", n21.maxlength || ""), a18.setAttribute("min", n21.min || ""), a18.setAttribute("minlength", n21.minlength || ""), a18.setAttribute("placeholder", n21.placeholder || ""), a18.setAttribute("spellcheck", n21.spellcheck || "default"), a18.setAttribute("step", n21.step || "any"), a18.setAttribute("type", n21.type || "text"), a18.value = n21.value || "", n21.allowed && (a18.oninput = function() {
                  var M6 = void 0;
                  if (Array.isArray(n21.allowed)) {
                    for (var w12 = "", _2 = n21.allowed, P3 = 0; P3 < _2.length; P3++)
                      _2[P3] === "an" ? w12 += "0-9a-zA-Z" : _2[P3] === "a" ? w12 += "a-zA-Z" : _2[P3] === "n" && (w12 += "0-9"), _2[P3] === "s" && (w12 += " ");
                    M6 = new RegExp("[^" + w12 + "]", "g");
                  } else
                    T8(n21.allowed) === "object" && (M6 = n21.allowed);
                  a18.value = a18.value.replace(M6, "");
                });
                var E5 = document.createElement("div");
                E5.classList.add(e18.classes.button), E5.classList.add(e18.classes.elementHalf), E5.classList.add(e18.classes.backgroundSuccess), E5.innerHTML = k8, E5.onclick = function() {
                  O6(C7, f13), j7(), h11 ? h11(a18.value) : c25 && c25(a18.value);
                };
                var D4 = document.createElement("div");
                D4.classList.add(e18.classes.button), D4.classList.add(e18.classes.elementHalf), D4.classList.add(e18.classes.backgroundError), D4.innerHTML = S12, D4.onclick = function() {
                  O6(C7, f13), j7(), p19 ? p19(a18.value) : s19 && s19(a18.value);
                }, r13.appendChild(x9), r13.appendChild(a18), r13.appendChild(E5), r13.appendChild(D4), r13.listener = function(M6) {
                  $3(M6) ? E5.click() : ee3(M6) && D4.click();
                }, K3(r13, f13), a18.focus(), te2(r13, f13);
              };
              u15.input = ve2;
              var Ee2 = u15.select = function(t15, c25) {
                var s19 = t15.text, d16 = t15.cancelText, i21 = d16 === void 0 ? "Cancel" : d16, k8 = t15.cancelCallback, H4 = t15.choices, S12 = t15.position, h11 = S12 === void 0 ? e18.positions.select || h11.top : S12;
                R6(), F8();
                var p19 = document.createElement("div"), l18 = W5();
                p19.id = l18;
                var f13 = document.createElement("div");
                f13.classList.add(e18.classes.textbox), f13.classList.add(e18.classes.backgroundInfo), f13.innerHTML = '<div class="' + e18.classes.textboxInner + '">' + s19 + "</div>", p19.appendChild(f13), H4.forEach(function(r13, C7) {
                  var x9 = r13.type, a18 = x9 === void 0 ? 1 : x9, E5 = r13.text, D4 = r13.handler, M6 = document.createElement("div");
                  M6.classList.add(le[a18]), M6.classList.add(e18.classes.button), M6.classList.add(e18.classes.selectChoice);
                  var w12 = H4[C7 + 1];
                  w12 && !w12.type && (w12.type = 1), w12 && w12.type === a18 && M6.classList.add(e18.classes.selectChoiceRepeated), M6.innerHTML = E5, M6.onclick = function() {
                    O6(l18, h11), j7(), D4();
                  }, p19.appendChild(M6);
                });
                var n21 = document.createElement("div");
                n21.classList.add(e18.classes.backgroundNeutral), n21.classList.add(e18.classes.button), n21.innerHTML = i21, n21.onclick = function() {
                  O6(l18, h11), j7(), k8 ? k8() : c25 && c25();
                }, p19.appendChild(n21), p19.listener = function(r13) {
                  ee3(r13) && n21.click();
                }, K3(p19, h11), te2(p19, h11);
              }, Te = u15.date = function(t15, c25, s19) {
                var d16 = t15.value, i21 = d16 === void 0 ? new Date() : d16, k8 = t15.submitText, H4 = k8 === void 0 ? "OK" : k8, S12 = t15.cancelText, h11 = S12 === void 0 ? "Cancel" : S12, p19 = t15.submitCallback, l18 = t15.cancelCallback, f13 = t15.position, n21 = f13 === void 0 ? e18.positions.date || n21.top : f13;
                R6(), F8();
                var r13 = "&#9662", C7 = document.createElement("div"), x9 = document.createElement("div"), a18 = document.createElement("div"), E5 = function(L6) {
                  C7.innerHTML = e18.dateMonths[L6.getMonth()], x9.innerHTML = L6.getDate(), a18.innerHTML = L6.getFullYear();
                }, D4 = function(L6) {
                  var N5 = new Date(i21.getFullYear(), i21.getMonth() + 1, 0).getDate(), Q3 = L6.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 2);
                  Number(Q3) > N5 && (Q3 = N5.toString()), L6.target.textContent = Q3, Number(Q3) < 1 && (Q3 = "1"), i21.setDate(Number(Q3));
                }, M6 = function(L6) {
                  var N5 = L6.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 4);
                  L6.target.textContent = N5, i21.setFullYear(Number(N5));
                }, w12 = function(L6) {
                  E5(i21);
                }, _2 = function(L6) {
                  var N5 = new Date(i21.getFullYear(), i21.getMonth() + L6 + 1, 0).getDate();
                  i21.getDate() > N5 && i21.setDate(N5), i21.setMonth(i21.getMonth() + L6), E5(i21);
                }, P3 = function(L6) {
                  i21.setDate(i21.getDate() + L6), E5(i21);
                }, be2 = function(L6) {
                  var N5 = i21.getFullYear() + L6;
                  N5 < 0 ? i21.setFullYear(0) : i21.setFullYear(i21.getFullYear() + L6), E5(i21);
                }, Y3 = document.createElement("div"), de2 = W5();
                Y3.id = de2;
                var ue2 = document.createElement("div");
                ue2.classList.add(e18.classes.backgroundInfo);
                var I9 = document.createElement("div");
                I9.classList.add(e18.classes.dateSelectorInner);
                var Z3 = document.createElement("div");
                Z3.classList.add(e18.classes.button), Z3.classList.add(e18.classes.elementThird), Z3.classList.add(e18.classes.dateSelectorUp), Z3.innerHTML = r13;
                var q7 = document.createElement("div");
                q7.classList.add(e18.classes.button), q7.classList.add(e18.classes.elementThird), q7.classList.add(e18.classes.dateSelectorUp), q7.innerHTML = r13;
                var G4 = document.createElement("div");
                G4.classList.add(e18.classes.button), G4.classList.add(e18.classes.elementThird), G4.classList.add(e18.classes.dateSelectorUp), G4.innerHTML = r13, C7.classList.add(e18.classes.element), C7.classList.add(e18.classes.elementThird), C7.innerHTML = e18.dateMonths[i21.getMonth()], x9.classList.add(e18.classes.element), x9.classList.add(e18.classes.elementThird), x9.setAttribute("contentEditable", true), x9.addEventListener("input", D4), x9.addEventListener("blur", w12), x9.innerHTML = i21.getDate(), a18.classList.add(e18.classes.element), a18.classList.add(e18.classes.elementThird), a18.setAttribute("contentEditable", true), a18.addEventListener("input", M6), a18.addEventListener("blur", w12), a18.innerHTML = i21.getFullYear();
                var ne3 = document.createElement("div");
                ne3.classList.add(e18.classes.button), ne3.classList.add(e18.classes.elementThird), ne3.innerHTML = r13;
                var se2 = document.createElement("div");
                se2.classList.add(e18.classes.button), se2.classList.add(e18.classes.elementThird), se2.innerHTML = r13;
                var ae2 = document.createElement("div");
                ae2.classList.add(e18.classes.button), ae2.classList.add(e18.classes.elementThird), ae2.innerHTML = r13, Z3.onclick = function() {
                  return _2(1);
                }, q7.onclick = function() {
                  return P3(1);
                }, G4.onclick = function() {
                  return be2(1);
                }, ne3.onclick = function() {
                  return _2(-1);
                }, se2.onclick = function() {
                  return P3(-1);
                }, ae2.onclick = function() {
                  return be2(-1);
                };
                var z5 = document.createElement("div");
                z5.classList.add(e18.classes.button), z5.classList.add(e18.classes.elementHalf), z5.classList.add(e18.classes.backgroundSuccess), z5.innerHTML = H4, z5.onclick = function() {
                  O6(de2, n21), j7(), p19 ? p19(i21) : c25 && c25(i21);
                };
                var U6 = document.createElement("div");
                U6.classList.add(e18.classes.button), U6.classList.add(e18.classes.elementHalf), U6.classList.add(e18.classes.backgroundError), U6.innerHTML = h11, U6.onclick = function() {
                  O6(de2, n21), j7(), l18 ? l18(i21) : s19 && s19(i21);
                }, I9.appendChild(Z3), I9.appendChild(q7), I9.appendChild(G4), I9.appendChild(C7), I9.appendChild(x9), I9.appendChild(a18), I9.appendChild(ne3), I9.appendChild(se2), I9.appendChild(ae2), ue2.appendChild(I9), Y3.appendChild(ue2), Y3.appendChild(z5), Y3.appendChild(U6), Y3.listener = function(L6) {
                  $3(L6) ? z5.click() : ee3(L6) && U6.click();
                }, K3(Y3, n21), te2(Y3, n21);
              };
              u15.default = { alert: he2, force: ke, confirm: Ce2, input: ve2, select: Ee2, date: Te, setOptions: ge2, hideAlerts: F8 };
            }]);
          });
        }).call(o21, v6(0)(y7));
      }]);
    });
  });
  var je2 = Ie(ye());
  var { default: Le2, ...Ne } = je2;
  var Fe2 = Le2 !== void 0 ? Le2 : Ne;

  // https://esm.sh/v99/nanostores@0.7.1/deno/nanostores.js
  var S11 = Symbol("clean");
  var c24 = Symbol();

  // https://esm.sh/v99/@nanostores/i18n@0.7.1/deno/i18n.js
  function g7(r13, n21) {
    if (typeof r13 == "string")
      return n21(r13);
    {
      let e18 = {};
      for (let t15 in r13)
        e18[t15] = g7(r13[t15], n21);
      return e18;
    }
  }
  function p18(r13) {
    return (n21) => {
      if (n21.transform) {
        let e18 = n21.transform;
        return n21 = n21.input, { input: n21, transform(t15, o21, s19) {
          let f13 = r13(t15, o21, ...s19);
          return (...l18) => e18(t15, f13, l18);
        } };
      } else
        return { input: n21, transform(e18, t15, o21) {
          return r13(e18, t15, ...o21);
        } };
    };
  }
  var N4 = p18((r13, n21, e18) => g7(n21, (t15) => {
    for (let o21 in e18)
      t15 = t15.replace(new RegExp(`{${o21}}`, "g"), e18[o21]);
    return t15;
  }));
  var R5 = p18((r13, n21, e18) => {
    let t15 = new Intl.PluralRules(r13).select(e18);
    return t15 in n21 || (t15 = "many"), g7(n21[t15], (o21) => o21.replace(/{count}/g, e18));
  });

  // deps.ts
  var toast = Fe2.alert;

  // constant.ts
  var brandName = "Next Translator";
  var brandId = "immersive-translate";
  var targetContainerElementAttributeName = `data-${brandId}-container`;
  var buildinConfigStorageKey = "buildinConfig";
  var contextMenuId = `${brandId}-context-menu`;
  var contextOpenOptionsMenuId = `${brandId}-open-options-menu`;
  var sourceElementMarkAttributeName = `data-${brandId}-mark`;
  var sourceAtomicBlockElementMarkAttributeName = `data-${brandId}-atomic-block-mark`;
  var sourceInlineElementMarkAttributeName = `data-${brandId}-inline-mark`;
  var sourceBlockElementMarkAttributeName = `data-${brandId}-block-mark`;
  var sourceElementWithGlobalStyleMarkAttributeName = `data-${brandId}-global-style-mark`;
  var delimiters = ["\u{1F6A0}\u{1F6A0}", "\u{1F69E}"];
  var translationTextSeparator = "\n@\u{1F6A0}\n";
  var translationTargetElementWrapperClass = `${brandId}-target-wrapper`;
  var translationTargetTranslationElementBlockWrapperClass = `${brandId}-target-translation-block-wrapper`;
  var translationTargetTranslationElementInlineWrapperClass = `${brandId}-target-translation-inline-wrapper`;
  var languages = [
    "af",
    "am",
    "ar",
    "auto",
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
    "en",
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
    "ja",
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
    "zh-CN",
    "zh-TW",
    "zu",
    "und"
  ];

  // log.ts
  var Timing = class {
    #t = performance.now();
    reset() {
      this.#t = performance.now();
    }
    stop(message) {
      const now = performance.now();
      const d16 = Math.round(now - this.#t);
      let cf = colors_exports.green;
      if (d16 > 1e4) {
        cf = colors_exports.red;
      } else if (d16 > 1e3) {
        cf = colors_exports.yellow;
      }
      console.debug(
        colors_exports.dim(brandName + " TIMING:"),
        message,
        "in",
        cf(d16 + "ms")
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
        Deno.exit(1);
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

  // utils/format_language.ts
  function formatLanguage(langCode) {
    if (typeof langCode !== "string")
      return "und";
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
          return "und";
        } else {
          return langCode;
        }
      } else {
        return "und";
      }
    } else {
      return langCode;
    }
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
    let { url, ...fetchOptions } = options;
    fetchOptions = {
      mode: "cors",
      ...fetchOptions
    };
    const fetchFn = options.fetchPolyfill || fetch;
    const response = await fetchFn(url, fetchOptions);
    if (response.ok && response.status >= 200 && response.status < 300) {
      const data = await response.json();
      return data;
    } else {
      let details;
      try {
        details = await response.text();
      } catch (_e3) {
      }
      throw new CommonError(
        "fetchError",
        response.status + ": " + response.statusText || "",
        details
      );
    }
  }

  // utils/platform.ts
  function isDeno() {
    return typeof Deno !== "undefined";
  }

  // messages.ts
  var [sendFetchFromChrome, fetchStream, waitforFetch] = H(
    "fetch",
    {
      async: true
    }
  );
  var sendFetch = (options) => {
    if (isDeno()) {
      return request(options);
    } else {
      return sendFetchFromChrome(options);
    }
  };
  var [
    sendToggleTranslate,
    toggleTranslateStream,
    waitForToggleTranslate
  ] = H(
    "toggleTranslate",
    {
      async: true
    }
  );
  var [
    sendPageTranslatedStatus,
    pageTranslatedStatusStream,
    waitForPageTranslatedStatus
  ] = H(
    "pageTranslatedStatus"
  );
  var [
    sendGetPageTranslatedStatus,
    getPageTranslatedStatusStream,
    waitForGetPageTranslatedStatus
  ] = H(
    "getPageTranslatedStatus",
    { async: true }
  );
  var [
    sendGetPageLanguage,
    getPageLanguageStream,
    waitForGetPageLanguage
  ] = H(
    "getPageLanguage",
    { async: true }
  );
  var [
    sendSetPageLanguage,
    setPageLanguageStream,
    waitForSetPageLanguage
  ] = H(
    "setPageLanguage",
    { async: true }
  );
  var [sendDetectLanguage, detectLanguageStream, waitforDetectLanguage] = H("detectLanguage", {
    async: true
  });
  var [
    sendDetectTabLanguage,
    detectTabLanguageStream,
    waitforDetectTabLanguage
  ] = H("detectTabLanguage", {
    async: true
  });
  var [sendGetConfig, configStream, waitforGetConfig] = H(
    "getConfig",
    {
      async: true
    }
  );
  var [
    sendBrowserApiRequest,
    browserApiRequestStream,
    waitforBrowserApiRequest
  ] = H("browswerApiRequest", {
    async: true
  });
  var [
    sendUtilsRequest,
    utilsRequestStream,
    waitforUtilsRequest
  ] = H("utils", {
    async: true
  });
  var [sendReady, readyStream, waitForReady] = H("READY");

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
    return env.TRANSLATE_USERSCRIPT === "1";
  }

  // buildin_config.json
  var buildin_config_default = {
    "minVersion": "0.0.4.2",
    "translationParagraphLanguagePattern": {
      "matches": [
        "www.reddit.com",
        "old.reddit.com",
        "twitter.com",
        "*.twitter.com",
        "github.com",
        "gist.github.com",
        "www.facebook.com",
        "www.youtube.com",
        "read.readwise.io",
        "www.inoreader.com",
        "mail.google.com",
        "google.com",
        "discord.com",
        "detectParagraphLanguage",
        "web.telegram.org",
        "*.slack.com"
      ]
    },
    "generalRule": {
      "wrapperPrefix": "smart",
      "wrapperSuffix": "smart",
      "globalStyles": {},
      "selectors": [],
      "additionalSelectors": [
        "h1",
        "section h2",
        "section h3",
        "main h2",
        "main h3",
        ".article-title",
        ".article-subtitle",
        ".article_title",
        ".article_subtitle",
        ".article__title",
        ".summary",
        ".content",
        ".headline"
      ],
      "excludeSelectors": [],
      "additionalExcludeSelectors": [
        ".social-share",
        ".breadcrumbs",
        ".post__footer",
        ".btn",
        ".reference-citations"
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
        "INPUT",
        "BUTTON",
        "LABEL",
        "IMG",
        "SUB",
        "SUP",
        "BR",
        "PRE",
        "CODE",
        "KBD",
        "WBR",
        "TT"
      ],
      "additionalExcludeTags": [],
      "stayOriginalTags": [
        "CODE",
        "TT"
      ],
      "additionalStayOriginalTags": [],
      "inlineTags": [
        "A",
        "ABBR",
        "ACRONYM",
        "B",
        "BDO",
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
        "TT",
        "VAR",
        "IMG",
        "CODE",
        "SCRIPT"
      ],
      "additionalInlineTags": [],
      "extraInlineSelectors": [],
      "additionalInlineSelectors": [],
      "extraBlockSelectors": []
    },
    "rules": [
      {
        "matches": [
          "http://localhost:8000/*"
        ],
        "excludeTags": [
          "TITLE",
          "SCRIPT",
          "STYLE",
          "TEXTAREA",
          "SVG",
          "svg",
          "INPUT",
          "BUTTON",
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
        "matches": [
          "mail.jabber.org",
          "antirez.com"
        ],
        "additionalExcludeTags": [
          "PRE"
        ]
      },
      {
        "matches": "*.wikipedia.org",
        "excludeSelectors": [
          ".mw-editsection",
          ".mw-cite-backlink"
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
        "matches": "www.reddit.com",
        "selectors": [
          "h1",
          "[data-click-id=body] h3",
          "[data-click-id=background] h3",
          "[data-testid=comment]",
          "[data-adclicklocation=media]",
          ".Comment__body",
          "faceplate-batch .md"
        ],
        "detectParagraphLanguage": true
      },
      {
        "matches": [
          "old.reddit.com/*/.compact",
          "old.reddit.com/.compact"
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
        "matches": "www.reuters.com/",
        "excludeSelectors": [
          "header"
        ]
      },
      {
        "matches": "github.com",
        "selectors": [
          ".markdown-title",
          ".markdown-body"
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
        "matches": "www.youtube.com",
        "selectors": [
          "yt-formatted-string[slot=content]",
          "yt-formatted-string[disable-attributed-string]"
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
        "matches": "discord.com",
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
        "wrapperPrefix": "\n",
        "wrapperSuffix": "\n"
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
          "div[data-content-feature='1'] > div",
          "a [aria-level='3']",
          "a [aria-level='3'] + div",
          ".Uroaid"
        ],
        "detectParagraphLanguage": true
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
          "mastodon.world"
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
      }
    ]
  };

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

  // utils/merge_rule.ts
  function mergeRule(generalRule, rule) {
    const genericRuleKeys = [
      "_comment",
      "globalStyles",
      "wrapperPrefix",
      "wrapperSuffix"
    ];
    const finalRule = generalRule;
    const ruleKeys = Object.keys(rule);
    ruleKeys.forEach((key) => {
      const value = rule[key];
      if (value !== void 0) {
        if (genericRuleKeys.includes(key)) {
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
    const defaultUserConfig = {};
    if (env.TRANSLATE_SECRET_TENCENT_SECRET_ID && env.TRANSLATE_SECRET_TENCENT_SECRET_KEY) {
      const tencentAuthConfig = {
        secretId: env.TRANSLATE_SECRET_TENCENT_SECRET_ID,
        secretKey: env.TRANSLATE_SECRET_TENCENT_SECRET_KEY
      };
      defaultUserConfig.translationServices = {};
      defaultUserConfig.translationServices.tencent = tencentAuthConfig;
    }
    if (env.TRANSLATE_SERVICE) {
      defaultUserConfig.translationService = env.TRANSLATE_SERVICE;
    }
    if (env.DEBUG === "1") {
      defaultUserConfig.debug = true;
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
    const defaultConfig = {
      buildinConfigUpdatedAt: finalBuildInConfig.buildinConfigUpdatedAt,
      minVersion: finalBuildInConfig.minVersion,
      interval: 1e3 * 60 * 60 * 1,
      debug: false,
      alpha: false,
      targetLanguage: "zh-CN",
      interfaceLanguage: "zh-CN",
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
        excludeMatches: []
      },
      translationTheme: "none",
      translationService: "google",
      translationServices: {},
      generalRule: finalBuildInConfig.generalRule,
      translationGeneralConfig: {},
      rules: []
    };
    const envUserConfig = getEnvUserConfig();
    const userConfigObject = await browserAPI.storage.sync.get("userConfig") || {};
    const userConfig = userConfigObject.userConfig || {};
    const globalUserConfig = globalThis.IMMERSIVE_TRANSLATE_CONFIG || {};
    const mergedUserConfig = Object.assign(
      {},
      envUserConfig,
      userConfig,
      globalUserConfig
    );
    const finalConfig = Object.assign(defaultConfig, finalBuildInConfig);
    const configKeys = Object.keys(finalConfig);
    const assignKeys = [
      "translationUrlPattern",
      "translationLanguagePattern",
      "translationServices",
      "translationParagraphLanguagePattern",
      "translationThemePatterns",
      "translationGeneralConfig"
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
      } else if (typeof mergedUserConfig[configKey] !== "string" && typeof mergedUserConfig[configKey] !== "boolean" && typeof mergedUserConfig[configKey] !== "number" && assignKeys.includes(configKey)) {
        if (mergedUserConfig[configKey]) {
          finalConfig[configKey] = Object.assign(
            finalConfig[configKey],
            mergedUserConfig[configKey]
          );
        }
      } else if (configKey === "rules") {
        if (Array.isArray(mergedUserConfig[configKey])) {
          finalConfig[configKey] = [
            ...mergedUserConfig[configKey],
            ...finalConfig[configKey]
          ];
        }
      } else {
        if (mergedUserConfig[configKey] !== void 0) {
          finalConfig[configKey] = mergedUserConfig[configKey];
        }
      }
    }
    return finalConfig;
  }

  // utils/sha256.ts
  async function sha256(message) {
    const msgUint8 = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
    const result = hex(hashBuffer);
    return result;
  }
  function hex(hashBuffer) {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b10) => b10.toString(16).padStart(2, "0")).join(
      ""
    );
    return hashHex;
  }

  // browser_proxy.ts
  async function sendMessage(fn, options) {
    try {
      const response = await fn(options);
      if (!response.ok) {
        throw new CommonError(
          response.error || "fetchError",
          response.message || "",
          response.details
        );
      } else {
        return response.data;
      }
    } catch (e18) {
      throw e18;
    }
  }
  function request2(options) {
    if (isMonkey()) {
      options.fetchPolyfill = globalThis.GM_fetch;
      return request(options);
    }
    return sendMessage(sendFetch, options);
  }
  function detectLanguage(options) {
    if (isMonkey()) {
      return Promise.resolve("und");
    }
    return sendMessage(
      sendDetectLanguage,
      options
    );
  }
  function detectTabLanguage() {
    return sendMessage(
      sendDetectTabLanguage,
      null
    );
  }
  function sendPageTranslatedStatus2(status) {
    if (isMonkey()) {
      return;
    }
    sendPageTranslatedStatus(status);
  }
  function sha2562(message) {
    if (isMonkey()) {
      return sha256(message);
    }
    return sendMessage(
      sendUtilsRequest,
      {
        method: "sha256",
        options: message
      }
    );
  }
  function hmacSha256ByArrayBuffer(message, key) {
    return sendMessage(
      sendUtilsRequest,
      {
        method: "hmacSha256ByArrayBuffer",
        options: {
          message,
          key
        }
      }
    );
  }
  function hmacSha256ByString(message, key) {
    return sendMessage(
      sendUtilsRequest,
      {
        method: "hmacSha256ByString",
        options: {
          message,
          key
        }
      }
    );
  }

  // dom/detect_page_language.ts
  async function detectPageLanguage() {
    if (document.documentElement && document.documentElement.lang) {
      return formatLanguage(document.documentElement.lang);
    } else {
      if (document.body && document.body.innerText) {
        const lang = await detectLanguage({
          text: document.body.innerText
        });
        return lang;
      } else {
        return "und";
      }
    }
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

  // dom/util.ts
  function duplicatedElements(root, array) {
    const footers = root.querySelectorAll("footer");
    const headers2 = root.querySelectorAll("header");
    for (let i21 = 0; i21 < array.length; i21++) {
      const a18 = array[i21];
      for (let j7 = i21 + 1; j7 < array.length; j7++) {
        const b10 = array[j7];
        if (a18.contains(b10)) {
          array.splice(j7, 1);
          j7--;
        } else if (b10.contains(a18)) {
          array.splice(i21, 1);
          i21--;
          break;
        } else if (a18 === b10) {
          array.splice(j7, 1);
          j7--;
        }
      }
    }
    const finalArray = array.filter((element) => {
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
        if (element.nodeName !== "H1" && (element === header || header.contains(element))) {
          isHeader = true;
          break;
        }
      }
      if (isHeader) {
        return false;
      }
      return true;
    });
    return finalArray;
  }
  function getLastHTMLElement(elements) {
    for (let i21 = elements.length - 1; i21 >= 0; i21--) {
      const element = elements[i21];
      if (typeof element !== "string") {
        return element;
      }
    }
    return null;
  }
  function getFirstHTMLElement(elements) {
    for (let i21 = 0; i21 < elements.length; i21++) {
      const element = elements[i21];
      if (typeof element !== "string") {
        return element;
      }
    }
    return null;
  }
  function getWhitespace(nextNode) {
    if (nextNode && nextNode.nodeType === Node.TEXT_NODE && nextNode.textContent && nextNode.textContent?.length > 0) {
      return " ";
    } else {
      return null;
    }
  }
  function hasHandled(element, _ctx) {
    return element.hasAttribute(targetContainerElementAttributeName);
  }
  function getElementsBySelectors(root, selectors) {
    const elements = [];
    for (const selector of selectors) {
      const nodes = root.querySelectorAll(selector);
      for (const node of nodes) {
        elements.push(node);
      }
    }
    return elements;
  }
  function isInlineElement(element, extraInlineElements, extraBlockElements, rule) {
    const inlineTags = rule.inlineTags;
    if (element.nodeType === Node.ELEMENT_NODE) {
      if (inlineTags.includes(element.nodeName)) {
        if (extraBlockElements.length > 0) {
          for (const blockElement of extraBlockElements) {
            if (element.contains(blockElement) || element.hasAttribute(
              sourceBlockElementMarkAttributeName
            )) {
              return false;
            }
          }
        }
        return true;
      } else if (extraInlineElements.length > 0) {
        for (const extraInlineElement of extraInlineElements) {
          if (extraInlineElement.contains(element) || element.hasAttribute(
            sourceInlineElementMarkAttributeName
          )) {
            return true;
          }
        }
      }
    }
    return false;
  }
  function isDuplicateElement(element, elements) {
    for (const e18 of elements) {
      if (e18 === element) {
        return true;
      }
    }
    return false;
  }
  function isExcludeElement(element, excludeElements, rule) {
    const { excludeTags } = rule;
    if (excludeTags.includes(element.nodeName)) {
      return true;
    }
    if (element.nodeType === Node.ELEMENT_NODE) {
      if (excludeElements.includes(element)) {
        return true;
      }
      for (const excludeElement of excludeElements) {
        if (excludeElement.contains(element)) {
          return true;
        }
      }
    }
    return false;
  }
  function isNeedToTranslate(item) {
    const text = item.text;
    const trimedText = text.trim();
    if (trimedText === "" || trimedText.length === 1 && trimedText.charCodeAt(0) === 8203 || /^\d+(,\d+)*(\.\d+)?$/.test(text)) {
      return false;
    }
    return true;
  }
  function isMarked(element, markedAttribute) {
    return element.hasAttribute(markedAttribute) && element.getAttribute(markedAttribute) === "1";
  }

  // dom/get_containers.ts
  function getContainers(root, ctx) {
    if (!(root && root.innerText)) {
      return [];
    }
    const { rule } = ctx;
    let contentContainers = [];
    if (rule && rule.selectors.length > 0) {
      const containers = rule.selectors.map((selector) => {
        const elements = root.querySelectorAll(selector);
        return Array.from(elements);
      }).flat();
      contentContainers.push(...containers);
    } else {
      if (rule && rule.additionalSelectors.length > 0) {
        const additionalElements = getElementsBySelectors(
          root,
          rule.additionalSelectors
        );
        contentContainers.push(...additionalElements);
      }
      const articleElements = getElementsBySelectors(root, ["article"]);
      contentContainers.push(...articleElements);
      const allPTags = root.querySelectorAll("p");
      if (allPTags.length > 0) {
        allPTags.forEach((p19) => {
          const myInnerText = p19.innerText.match(/\S+/g);
          if (myInnerText && myInnerText.length > 3) {
            if (p19.parentElement) {
              if (!contentContainers.includes(p19.parentElement)) {
                contentContainers.push(p19.parentElement);
              }
            }
          }
        });
      }
      const allBrTags = root.querySelectorAll("br");
      if (allBrTags.length > 0) {
        allBrTags.forEach((br) => {
          if (br.parentElement) {
            const parent = br.parentElement;
            const myInnerText = parent.innerText.match(/\S+/g);
            if (myInnerText && myInnerText.length > 3) {
              if (!contentContainers.includes(parent)) {
                contentContainers.push(parent);
              }
            }
          }
        });
      }
      if (contentContainers.length === 0) {
        let mains = root.querySelectorAll("[role=main]");
        if (mains.length === 0) {
          mains = root.querySelectorAll("main");
        }
        if (mains.length === 0) {
          mains = root.querySelectorAll(".main");
        }
        if (mains.length > 0) {
          const mainsArray = Array.from(mains);
          contentContainers = contentContainers.concat(mainsArray);
        }
      }
    }
    const finalContainers = duplicatedElements(root, contentContainers);
    finalContainers.sort(function(a18, b10) {
      return a18.compareDocumentPosition(b10) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });
    return finalContainers;
  }

  // dom/elements_to_paragraph.ts
  function elementsToParagraph(elements, excludeElements, ctx) {
    const variables = [];
    const { rule } = ctx;
    const { stayOriginalTags } = rule;
    let text = "";
    for (let i21 = 0; i21 < elements.length; i21++) {
      const element = elements[i21];
      if (typeof element === "string") {
        text += element;
        continue;
      }
      if (isExcludeElement(element, excludeElements, rule)) {
        if (stayOriginalTags.includes(element.nodeName)) {
          const codeText = element.innerText;
          const variable = {
            type: element.nodeName.toLowerCase(),
            value: codeText
          };
          variables.push(variable);
          const delimiter = `${delimiters[0]}`;
          text += delimiter;
        } else {
          continue;
        }
      } else {
        const rawText = element.innerText;
        const isStartWithSpace = rawText.startsWith(" ");
        const isEndWithSpace = rawText.endsWith(" ");
        text += (isStartWithSpace ? " " : "") + rawText.trim() + (isEndWithSpace ? " " : "");
      }
      if (typeof element !== "string") {
        const whitespace = getWhitespace(element.nextSibling);
        if (whitespace) {
          text += whitespace;
        }
      }
    }
    let inline = false;
    const wordCount = text.split(" ").length;
    if (wordCount < 4 && text.length < 12) {
      inline = true;
    }
    const paragraph = {
      elements,
      text,
      variables,
      inline
    };
    if (isNeedToTranslate(paragraph)) {
      return paragraph;
    }
    return null;
  }

  // services/util.ts
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
      if (length + tempSentence.text.length >= maxLength || tempGroup.tempSentences.length >= maxGroupLength) {
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
    for (let i21 = 0; i21 < sentences.length; i21++) {
      const currentSentence = sentences[i21];
      const { from, to, text, url } = currentSentence;
      const textArrSplitedByNewLine = text.split("\r?\n");
      const currentTempSentences = [];
      let currentPrefix = "";
      for (let j7 = 0; j7 < textArrSplitedByNewLine.length; j7++) {
        const currentText = textArrSplitedByNewLine[j7];
        if (currentText === "") {
          if (currentTempSentences.length > 0) {
            currentTempSentences[currentTempSentences.length - 1].suffix += "\n";
          } else {
            currentPrefix += "\n";
          }
        } else {
          if (currentText.length > maxLength) {
            const tempSplitedSentences = [];
            splitSentence(currentText, maxLength, tempSplitedSentences);
            for (let k8 = 0; k8 < tempSplitedSentences.length; k8++) {
              const tempSentence = tempSplitedSentences[k8];
              const { text: text2, prefix, suffix } = tempSentence;
              currentTempSentences.push({
                from,
                to,
                text: text2,
                prefix,
                suffix,
                index: i21,
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
              index: i21,
              url
            });
          }
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

  // dom/get_paragraphs.ts
  async function getParagraphs(_root, containers, excludeElements, extraInlineElements, extraBlockElements, ctx) {
    let allParagraphs = [];
    const { targetLanguage, rule, isDetectParagraphLanguage } = ctx;
    const { stayOriginalTags } = rule;
    for (const container of containers) {
      let inlineElementGroups = [];
      if (isMarked(container, sourceAtomicBlockElementMarkAttributeName)) {
        const paragraph = elementsToParagraph(
          [container],
          excludeElements,
          ctx
        );
        if (paragraph) {
          allParagraphs.push(paragraph);
        }
        continue;
      }
      const filter = (node2) => {
        if (node2.nodeType === Node.ELEMENT_NODE) {
          const element = node2;
          if (isMarked(node2, sourceElementMarkAttributeName)) {
            return NodeFilter.FILTER_REJECT;
          } else {
            element.setAttribute(sourceElementMarkAttributeName, "1");
          }
          if (isMarked(element, sourceAtomicBlockElementMarkAttributeName)) {
            if (inlineElementGroups.length > 0) {
              const paragraph2 = elementsToParagraph(
                inlineElementGroups,
                excludeElements,
                ctx
              );
              if (paragraph2) {
                allParagraphs.push(paragraph2);
              }
              inlineElementGroups = [];
            }
            inlineElementGroups.push(element);
            const paragraph = elementsToParagraph(
              inlineElementGroups,
              excludeElements,
              ctx
            );
            if (paragraph) {
              allParagraphs.push(paragraph);
            }
            inlineElementGroups = [];
            return NodeFilter.FILTER_REJECT;
          }
        }
        if (isExcludeElement(node2, excludeElements, rule)) {
          if ((node2.nodeName === "CODE" || node2.nodeName === "TT") && node2.parentNode?.nodeName === "PRE") {
            return NodeFilter.FILTER_REJECT;
          }
          if (isInlineElement(
            node2,
            extraInlineElements,
            extraBlockElements,
            rule
          )) {
            inlineElementGroups.push(node2);
          } else {
            if (inlineElementGroups.length > 0) {
              const paragraph = elementsToParagraph(
                inlineElementGroups,
                excludeElements,
                ctx
              );
              if (paragraph) {
                allParagraphs.push(paragraph);
              }
              inlineElementGroups = [];
            }
          }
          return NodeFilter.FILTER_REJECT;
        }
        if (node2.nodeName === "PRE") {
          if (node2.classList.contains("code")) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
        if (isInlineElement(
          node2,
          extraInlineElements,
          extraBlockElements,
          rule
        )) {
          const previouseElement = node2.previousElementSibling;
          if (previouseElement && !isInlineElement(
            previouseElement,
            extraInlineElements,
            extraBlockElements,
            rule
          )) {
            if (inlineElementGroups.length > 0) {
              const paragraph = elementsToParagraph(
                inlineElementGroups,
                excludeElements,
                ctx
              );
              if (paragraph) {
                allParagraphs.push(paragraph);
              }
              inlineElementGroups = [];
            }
          }
          if (!stayOriginalTags.includes(node2.nodeName)) {
            const innerHTML = node2.innerHTML;
            if (innerHTML.includes("<code>") || innerHTML.includes("<tt>")) {
              inlineElementGroups.push(
                ...getInlineElementsOfInlineElement(node2)
              );
              return NodeFilter.FILTER_REJECT;
            } else {
              inlineElementGroups.push(node2);
            }
          } else {
            inlineElementGroups.push(node2);
          }
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
            inlineElementGroups,
            excludeElements,
            ctx
          );
          if (paragraph) {
            allParagraphs.push(paragraph);
          }
          inlineElementGroups = [];
        }
        node = elementIter.nextNode();
      }
      if (inlineElementGroups.length > 0) {
        const paragraph = elementsToParagraph(
          inlineElementGroups,
          excludeElements,
          ctx
        );
        if (paragraph) {
          allParagraphs.push(paragraph);
        }
        inlineElementGroups = [];
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
  function getInlineElementsOfInlineElement(root) {
    const elements = [];
    const treeWalker = document.createTreeWalker(
      root,
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
      const whitespace = getWhitespace(lastElement.nextSibling);
      if (whitespace) {
        elements.push(whitespace);
      }
    }
    if (typeof elements[elements.length - 1] !== "string") {
      const whitespace = getWhitespace(root.nextSibling);
      if (whitespace) {
        elements.push(whitespace);
      }
    }
    return elements;
  }

  // utils/escape_html.ts
  function escapeHTML(htmlStr) {
    return htmlStr.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // dom/paragraph_to_html.ts
  var regex = new RegExp(`${delimiters[0]}`, "g");
  function paragraphToHtml(sourceItem, sentence, ctx) {
    const { rule, translationTheme } = ctx;
    let { variables, text } = sourceItem;
    variables = variables || [];
    const { text: targetText } = sentence;
    const { wrapperPrefix, wrapperSuffix } = rule;
    const position = "afterend";
    let matchIndex = 0;
    let html = targetText;
    if (variables.length > 0) {
      html = html.replace(regex, (match) => {
        const variable = variables[Number(matchIndex)];
        matchIndex++;
        if (variable.type) {
          return `<${variable.type}>${escapeHTML(variable.value)}</${variable.type}>`;
        }
        return match;
      });
    }
    const classList = ["notranslate"];
    if (translationTheme) {
      classList.push(
        `${brandId}-target-translation-theme-${translationTheme}`
      );
    }
    if (rule) {
      if (rule.translationClasses.length > 0) {
        classList.push(...rule.translationClasses);
      }
    }
    if (!sourceItem.inline) {
      classList.push(translationTargetTranslationElementBlockWrapperClass);
      if (wrapperPrefix === "smart") {
        html = `<br>${html}`;
      } else {
        html = `${wrapperPrefix}${html}`;
      }
      if (wrapperPrefix === "smart") {
        if (text.length >= 70) {
          html = `<br>${html}`;
        }
      }
      if (wrapperSuffix === "smart") {
        html = `${html}<br>`;
      } else {
        html = `${html}${wrapperSuffix}`;
      }
    } else {
      classList.push(translationTargetTranslationElementInlineWrapperClass);
    }
    html = `<span class="${classList.join(" ")}">${html}</span>`;
    if (sourceItem.inline) {
      html = `<span class="notranslate">&nbsp;<span>${html}`;
    }
    return {
      html,
      position
    };
  }

  // dom/normalize_container.ts
  function normalizeContainer(containers, excludeElements, extraInlineElements, extraBlockElements, rule) {
    for (const container of containers) {
      container.setAttribute(targetContainerElementAttributeName, "1");
      const preTags = container.querySelectorAll("pre");
      for (const preTag of preTags) {
        const html = preTag.innerHTML;
        preTag.innerHTML = html.replace(/\n/g, "<br>");
      }
      if (isPreElementByStyle(container)) {
        const html = container.innerHTML;
        container.innerHTML = html.replace(/\n/g, "<br>");
      }
      if (isMarked(container, sourceAtomicBlockElementMarkAttributeName)) {
        return;
      }
      wrapTextNode(
        0,
        container,
        excludeElements,
        extraInlineElements,
        extraBlockElements,
        rule
      );
    }
  }
  function wrapTextNode(depth, root, excludeElements, extraInlineElements, extraBlockElements, rule) {
    if (isMarked(root, sourceAtomicBlockElementMarkAttributeName)) {
      return;
    }
    const { stayOriginalTags } = rule;
    let isSingleInlineElement = false;
    if (depth === 0) {
      if (root.childNodes && root.childNodes.length === 1 && root.nodeType === Node.ELEMENT_NODE && isInlineElement(
        root,
        extraInlineElements,
        extraBlockElements,
        rule
      ) && !stayOriginalTags.includes(root.nodeName)) {
        isSingleInlineElement = true;
      }
    }
    if (root && root.childNodes && root.childNodes.length > 0) {
      for (const node of root.childNodes) {
        if ((isInlineElement(node, extraInlineElements, extraBlockElements, rule) || isExcludeElement(node, excludeElements, rule)) && !isSingleInlineElement) {
          continue;
        }
        if (node.nodeType === Node.ELEMENT_NODE) {
          wrapTextNode(
            depth + 1,
            node,
            excludeElements,
            extraInlineElements,
            extraBlockElements,
            rule
          );
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

  // content_message_listeners.ts
  var currentPageLanguage = "und";
  function setCurrentPageLanguage(lang) {
    currentPageLanguage = lang;
  }
  function getCurrentPageLanguage() {
    return currentPageLanguage;
  }
  function setupMessageListeners() {
    toggleTranslateStream.subscribe(async () => {
      log_default.debug(`received toggleTranslate`);
      await toggleTranslatePage();
    });
    getPageTranslatedStatusStream.subscribe(([_2, __, cb]) => {
      log_default.debug(`received getPageTranslatedStatus`);
      const pageStatus2 = getPageStatus();
      cb({
        ok: true,
        data: pageStatus2
      });
    });
    setPageLanguageStream.subscribe(([lang, __, cb]) => {
      log_default.debug(`received setPageLanguage`);
      setCurrentPageLanguage(lang);
      cb({
        ok: true,
        data: lang
      });
    });
    getPageLanguageStream.subscribe(([_2, __, cb]) => {
      log_default.debug(`received getPageLanguage`);
      cb({
        ok: true,
        data: currentPageLanguage
      });
    });
  }

  // services/translation.ts
  var Translation = class {
    constructor(serviceConfig, generalConfig) {
      this.maxTextLength = 1800;
      this.isSupportList = false;
      this.maxTextGroupLength = 1e3;
      this.serviceConfig = serviceConfig;
      this.generalConfig = generalConfig;
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
      const { sentences } = payload;
      if (sentences.length === 0) {
        return {
          ...payload
        };
      }
      const respondedSentences = [];
      const tempSentenceGroups = splitSentences(
        sentences,
        this.maxTextLength,
        this.maxTextGroupLength
      );
      log_default.debug(`tempSentenceGroups`, tempSentenceGroups);
      const throttle = m13({
        limit: 3,
        interval: 1e3
      });
      let currentSentenceIndex = 0;
      for (let i21 = 0; i21 < tempSentenceGroups.length; i21++) {
        const tempSentenceGroup = tempSentenceGroups[i21];
        const throttled = throttle(async () => {
          if (this.isSupportList) {
            const result2 = await this.translateList({
              text: tempSentenceGroup.tempSentences.map((item) => item.text),
              from: tempSentenceGroup.from,
              to: tempSentenceGroup.to,
              url: payload.url
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
              url: payload.url
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
        } catch (e18) {
          if (everySentenceCallback) {
            for (const sentence of sentences) {
              everySentenceCallback(e18, sentence);
            }
            throw e18;
          } else {
            throw e18;
          }
        }
        const { text: translatedTexts } = result;
        for (let j7 = 0; j7 < translatedTexts.length; j7++) {
          const translatedText = translatedTexts[j7];
          const tempSentence = tempSentenceGroup.tempSentences[j7];
          const { index, prefix, suffix } = tempSentence;
          if (respondedSentences[index] === void 0) {
            respondedSentences[index] = {
              ...sentences[index],
              from: tempSentenceGroup.from,
              to: tempSentenceGroup.to,
              text: translatedText
            };
          } else {
            respondedSentences[index].text += prefix + translatedText + suffix;
          }
          if (index !== currentSentenceIndex) {
            if (everySentenceCallback) {
              everySentenceCallback(
                null,
                respondedSentences[currentSentenceIndex]
              );
            }
          }
          currentSentenceIndex = index;
        }
      }
      if (everySentenceCallback) {
        everySentenceCallback(null, respondedSentences[currentSentenceIndex]);
      }
      return {
        sentences: respondedSentences,
        url: payload.url
      };
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
      version
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
        await sha2562(payload)
      ].join("\n");
      const datestamp = _Tencent.getUTCDate(now);
      const StringToSign = [
        "TC3-HMAC-SHA256",
        timestamp,
        `${datestamp}/${service}/tc3_request`,
        await sha2562(CanonicalRequest)
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
          "X-TC-Version": version,
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
    }
    async translate(payload) {
      const { text, from, to } = payload;
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
    for (let i21 = 0; i21 < sentences.length; i21++) {
      const chunks = sentences[i21].chunks;
      for (let j7 = 0; j7 < chunks.length; j7++) {
        const chunk = chunks[j7];
        jobs.push({
          kind: "default",
          _index: i21,
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
  function createAbbreviationsDictionary(languages2 = SUPPORTED_LANGUAGES) {
    return languages2.reduce((acc, lang) => {
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
        url: API_URL,
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
      url: API_URL,
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
      this.maxTextGroupLength = 1e4;
      this.maxTextLength = 1200;
      this.isSupportList = true;
    }
    async translate(payload) {
      const { text, to, from } = payload;
      const result = await translate(
        [text],
        _D.langMap.get(to),
        _D.langMap.get(from)
      );
      return {
        from: _D.langMapReverse.get(result.from),
        to,
        text: result.text[0]
      };
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
  var D3 = _D;
  D3.langMap = new Map(langMap3);
  D3.langMapReverse = new Map(
    langMap3.map(([translatorLang, lang]) => [lang, translatorLang])
  );

  // services/transmart.ts
  var langMap4 = [
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
      this.maxTextGroupLength = 5;
      this.clientKey = btoa(
        "transmart_crx_" + navigator.userAgent
      ).slice(0, 100);
    }
    async translate(payload) {
      const { text, to } = payload;
      const formatedTo = _Transmart.langMap.get(to);
      const sourceLanguage = await this.detectLanguage(text);
      const internalFrom = _Transmart.langMapReverse.get(sourceLanguage);
      if (sourceLanguage === formatedTo) {
        return {
          text,
          from: sourceLanguage,
          to: formatedTo
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
            "lang": sourceLanguage,
            "orig_url": payload.url
          },
          "target": { "lang": formatedTo }
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
        from: internalFrom || "auto",
        to
      };
    }
    async translateList(payload) {
      const { text, to } = payload;
      const sourceLanguage = await this.detectLanguage(text.join("\n"));
      const internalSourceLanguage = _Transmart.langMapReverse.get(
        sourceLanguage
      );
      const targetLanguage = _Transmart.langMap.get(to);
      if (sourceLanguage === targetLanguage) {
        return {
          text,
          from: internalSourceLanguage,
          to
        };
      }
      const requestPayload = JSON.stringify(
        {
          "header": {
            "fn": "auto_translation",
            "client_key": this.clientKey
          },
          "source": {
            "text_list": text,
            "lang": sourceLanguage,
            "orig_url": payload.url
          },
          "target": { "lang": targetLanguage },
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
        from: internalSourceLanguage,
        to
      };
    }
    async detectLanguage(text) {
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
      return response.language;
    }
  };
  var Transmart = _Transmart;
  Transmart.langMap = new Map(langMap4);
  Transmart.langMapReverse = new Map(
    langMap4.map(([translatorLang, lang]) => [lang, translatorLang])
  );

  // services/mock.ts
  var Mock = class extends Translation {
    constructor() {
      super(...arguments);
      this.isSupportList = true;
    }
    async translate(payload) {
      const { text } = payload;
      await new Promise((resolve) => setTimeout(resolve, 10));
      const startSpaceLength = text.match(/^\s*/)[0].length;
      const mockText = text.slice(0, startSpaceLength) + "\u6A21\u62DF\uFF1A" + text.slice(startSpaceLength);
      return {
        text: mockText,
        from: payload.from,
        to: payload.to
      };
    }
    async translateList(payload) {
      const { text: textList, from, to } = payload;
      await new Promise((resolve) => setTimeout(resolve, 10));
      return {
        from,
        to,
        text: textList.map((text) => {
          const startSpaceLength = text.match(/^\s*/)[0].length;
          const mockText = text.slice(0, startSpaceLength) + "\u6A21\u62DF\uFF1A" + text.slice(startSpaceLength);
          return mockText;
        })
      };
    }
  };

  // services/mod.ts
  var TranslationServices = {
    mock: {
      class: Mock,
      name: "Mock",
      homepage: "https://www.google.com"
    },
    tencent: {
      class: Tencent,
      name: "Tencent",
      homepage: "https://fanyi.qq.com/"
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
    d: {
      class: D3,
      name: "Deepl(Alpha) ",
      alpha: true,
      homepage: "https://www.deepl.com/translator"
    }
  };
  var allServiceKeys = Object.keys(
    TranslationServices
  );
  async function translateSingleSentence(sentence, ctx) {
    if (!sentence.text) {
      return sentence;
    }
    const { config, translationService } = ctx;
    const generalConfig = config.translationGeneralConfig;
    const services = config.translationServices;
    const defaultTranslationEngine = translationService;
    const serviceConfig = services[defaultTranslationEngine] || {};
    const translator = new TranslationServices[defaultTranslationEngine].class(
      serviceConfig,
      generalConfig
    );
    if (sentence.from === "und") {
      sentence.from = "auto";
    }
    await translator.init();
    const result = await translator.translate(
      sentence
    );
    return {
      ...sentence,
      ...result
    };
  }
  async function translateMultipleSentences(payload, ctx, everySentenceCallback) {
    const { config, translationService } = ctx;
    const generalConfig = config.translationGeneralConfig;
    const services = config.translationServices;
    const defaultTranslationEngine = translationService;
    const serviceConfig = services[defaultTranslationEngine] || {};
    payload.sentences = payload.sentences.map((sentence) => {
      if (sentence.from === "und") {
        sentence.from = "auto";
      }
      return sentence;
    });
    const translator = new TranslationServices[defaultTranslationEngine].class(
      serviceConfig,
      generalConfig
    );
    await translator.init();
    await translator.multipleTranslate(
      payload,
      everySentenceCallback
    );
  }

  // utils/url_match.ts
  var matchAll = ["*://*/*", "*", "*://*"];
  var placeholder = "immersive-translate-wildcard-placeholder.com";
  function getMatchedUrl(url, rawMatches) {
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
    const urlObj = new URL(url);
    const hostname = urlObj.hostname;
    if (matches && matches.length > 0) {
      const matched = matches.find((match) => {
        if (match === hostname) {
          return true;
        } else if (matchAll.includes(match)) {
          return true;
        } else if (!match.includes("*")) {
          try {
            const matchUrl = new URL(match);
            if (matchUrl.pathname === "/" && !match.endsWith("/")) {
              return matchUrl.hostname === hostname;
            } else {
              return match === url;
            }
          } catch (_e3) {
          }
          return false;
        } else {
          let scheme;
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
          const hostname2 = validUrlObj.hostname;
          const pathname = validUrlObj.pathname;
          const protocol = validUrlObj.protocol;
          const port = validUrlObj.port;
          const regex2 = makeRegExp(
            scheme + ":",
            restorePlaceholderToWildcard(hostname2),
            restorePlaceholderToWildcard(pathname)
          );
          if (regex2) {
            const clonedUrl = new URL(url);
            clonedUrl.port = "";
            return regex2.test(clonedUrl.href);
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
    let regex2 = "^";
    if (scheme === "*:") {
      regex2 += "(http:|https:|file:)";
    } else {
      regex2 += scheme;
    }
    regex2 += "//";
    if (host) {
      if (host === "*") {
        regex2 += "[^/]+?";
      } else {
        if (host.match(/^\*\./)) {
          regex2 += "[^/]*?";
          host = host.substring(2);
        }
        regex2 += host.replace(/\./g, "\\.").replace(/\*/g, "[^/]*");
      }
    }
    if (path) {
      if (path === "*" || path === "/*") {
        regex2 += "(/.*)?";
      } else if (path.includes("*")) {
        regex2 += path.replace(/\*/g, ".*?");
        regex2 += "/?";
      } else {
        regex2 += "/?";
      }
    } else {
      regex2 += "/?";
    }
    regex2 += "$";
    return new RegExp(regex2);
  }
  function isMatchUrl(url, rawMatches) {
    return getMatchedUrl(url, rawMatches) !== null;
  }

  // dom/context.ts
  async function getContext(options) {
    const { url, config } = options;
    const urlObj = new URL(url);
    const {
      translationParagraphLanguagePattern,
      translationService,
      translationServices,
      translationTheme,
      translationThemePatterns,
      translationUrlPattern,
      targetLanguage
    } = config;
    const isDetectParagraphLanguage = isMatchUrl(
      url,
      translationParagraphLanguagePattern.matches
    );
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
    const isTranslateExcludeUrl = isMatchUrl(
      url,
      translationUrlPattern.excludeMatches
    );
    const defaultTargetLanguage = targetLanguage || "zh-CN";
    const hostname = urlObj.hostname;
    const encryptedHostname = await sha2562(hostname);
    const pathAndQueryAndHash = urlObj.pathname + urlObj.search + urlObj.hash;
    const encryptedPath = await sha2562(pathAndQueryAndHash);
    const encryptedUrl = `https://${encryptedHostname}.com/${encryptedPath}`;
    const ctx = {
      targetLanguage: defaultTargetLanguage,
      config,
      isDetectParagraphLanguage,
      translationService: defaultTranslationService,
      translationTheme: defaultTheme,
      isTranslateUrl,
      isTranslateExcludeUrl,
      rule: config.generalRule,
      url,
      encryptedUrl
    };
    const rules = config.rules;
    const rule = rules.find((rule2) => {
      return isMatchUrl(url, rule2.matches);
    });
    const generalRule = config.generalRule;
    if (rule) {
      ctx.rule = mergeRule(generalRule, rule);
    }
    return ctx;
  }

  // dom/translate_page.ts
  var pageStatus = "Original";
  var paragraphAutoIncreaceId = 1;
  var currentParagraphIds = [];
  var paragraphEntities = /* @__PURE__ */ new Map();
  var allNewDynamicElements = [];
  var currentNewDynamicElements = [];
  var debounceTranslateCurrentQueue = debounce(translateCurrentQueue, 300);
  var debounceTranslateNewDynamicNodes = debounce(
    translateNewDynamicNodes,
    1e3
  );
  var mutationObserver;
  var originalPageTitle = "";
  async function toggleTranslatePage() {
    const options = {
      url: globalThis.location.href,
      config: await getConfig()
    };
    const ctx = await getContext(options);
    if (pageStatus === "Original") {
      await translatePage(ctx);
    } else if (pageStatus === "Translated") {
      restorePage();
    }
  }
  function restorePage() {
    disableMutatinObserver();
    pageStatus = "Translating";
    sendPageTranslatedStatus2(pageStatus);
    if (originalPageTitle) {
      document.title = originalPageTitle;
    }
    const elements = document.querySelectorAll(
      "." + translationTargetElementWrapperClass
    );
    elements.forEach((element) => {
      element.remove();
    });
    const containers = document.querySelectorAll(
      `[${targetContainerElementAttributeName}="1"]`
    );
    containers.forEach((container) => {
      container.removeAttribute(targetContainerElementAttributeName);
    });
    const scanedElements = document.querySelectorAll(
      `[${sourceElementMarkAttributeName}="1"]`
    );
    scanedElements.forEach((element) => {
      element.removeAttribute(sourceElementMarkAttributeName);
    });
    pageStatus = "Original";
    sendPageTranslatedStatus2(pageStatus);
  }
  function onElementVisible(paragraph, callback) {
    let isCalled = false;
    const firstElement = getFirstHTMLElement(paragraph.elements);
    const lastElement = getLastHTMLElement(paragraph.elements);
    if (firstElement) {
      new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            observer.disconnect();
            if (!isCalled) {
              isCalled = true;
              callback(paragraph);
            }
          }
        });
      }).observe(firstElement);
    }
    if (lastElement && lastElement !== firstElement) {
      new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            observer.disconnect();
            if (!isCalled) {
              isCalled = true;
              callback(paragraph);
            }
          }
        });
      }).observe(lastElement);
    }
  }
  async function translateNewDynamicNodes(ctx) {
    const currentNewDynamicNodes = [...currentNewDynamicElements];
    currentNewDynamicElements = [];
    try {
      const allContainers = [];
      for (const element of currentNewDynamicNodes) {
        const containers = getContainers(element, ctx).filter(
          (container) => hasHandled(container, ctx) === false
        );
        allContainers.push(...containers);
      }
      await translateContainers(allContainers, ctx);
    } catch (e18) {
      log_default.error(`translateNewDynamicNodes error: ${e18.message}`);
    }
  }
  function addParagraphToQueue(paragraph, ctx) {
    onElementVisible(paragraph, (visibleParagraph) => {
      const id = paragraphAutoIncreaceId++;
      const lastElement = getLastHTMLElement(visibleParagraph.elements);
      let position = "afterend";
      if (visibleParagraph.elements.length === 1 && lastElement) {
        position = "beforeend";
      }
      lastElement.insertAdjacentHTML(
        position,
        `<span id="${translationTargetElementWrapperClass}-${id}" class="notranslate ${translationTargetElementWrapperClass}"><span class="${brandId}-loading notranslate"></span></span>`
      );
      paragraphEntities.set(id, {
        id,
        state: "Original",
        ...visibleParagraph
      });
      currentParagraphIds.push(id);
      debounceTranslateCurrentQueue(ctx);
    });
  }
  async function translatePage(ctx) {
    log_default.debug("ctx", ctx);
    pageStatus = "Translating";
    sendPageTranslatedStatus2(pageStatus);
    try {
      const containers = getContainers(document.body, ctx).filter(
        (container) => hasHandled(container, ctx) === false
      );
      log_default.debug("detect containers", containers);
      const { rule } = ctx;
      if (containers.length > 0) {
        await translateContainers(containers, ctx);
      } else {
        pageStatus = "Original";
        sendPageTranslatedStatus2(pageStatus);
      }
      translateTitle(ctx).catch((e18) => {
        log_default.error(`translateTitle error:`, e18.name, e18.message, e18.details || "");
      });
      enableMutatinObserver(rule, ctx);
    } catch (e18) {
      pageStatus = "Error";
      log_default.error(e18);
    }
  }
  async function translateTitle(ctx) {
    const pageTitle = document.title;
    if (!originalPageTitle) {
      originalPageTitle = pageTitle;
    }
    if (!pageTitle) {
      return;
    }
    const currentLang = getCurrentPageLanguage();
    try {
      const result = await translateSingleSentence({
        text: pageTitle,
        from: currentLang,
        to: ctx.targetLanguage
      }, ctx);
      if (result && result.text) {
        document.title = originalPageTitle + " --- " + result.text;
      }
    } catch (e18) {
      throw e18;
    }
  }
  function setLoadingToParagraph(id) {
    const element = document.getElementById(
      translationTargetElementWrapperClass + "-" + id
    );
    if (element) {
      element.innerHTML = `<span class="${brandId}-loading notranslate"></span>`;
    }
  }
  async function translateContainers(containers, ctx) {
    const { rule } = ctx;
    const {
      excludeSelectors,
      additionalExcludeSelectors,
      extraInlineSelectors,
      additionalInlineSelectors,
      extraBlockSelectors,
      atomicBlockSelectors,
      globalStyles
    } = rule;
    const globalStyleSelectors = Object.keys(globalStyles);
    if (globalStyleSelectors.length > 0) {
      for (const selector of globalStyleSelectors) {
        const elements = getElementsBySelectors(document.body, [selector]);
        for (const element of elements) {
          if (!isMarked(element, sourceElementWithGlobalStyleMarkAttributeName)) {
            element.setAttribute(
              sourceElementWithGlobalStyleMarkAttributeName,
              "1"
            );
            const cssText = globalStyles[selector];
            element.style.cssText += cssText;
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
    const allBlockSelectos = extraBlockSelectors;
    const excludeElements = getElementsBySelectors(
      document.body,
      allExcludeSelectors
    );
    let atomicBlockElements = [];
    if (allAtomicBlockSelectors.length > 0) {
      atomicBlockElements = getElementsBySelectors(
        document.body,
        allAtomicBlockSelectors
      ).filter((element) => !isMarked(element, sourceAtomicBlockElementMarkAttributeName));
    }
    atomicBlockElements.forEach((element) => {
      element.setAttribute(sourceAtomicBlockElementMarkAttributeName, "1");
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
      element.setAttribute(sourceInlineElementMarkAttributeName, "1");
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
      element.setAttribute(sourceBlockElementMarkAttributeName, "1");
    });
    normalizeContainer(
      containers,
      excludeElements,
      extraInlineElements,
      extraBlockElements,
      rule
    );
    const paragraphs = await getParagraphs(
      document.body,
      containers,
      excludeElements,
      extraInlineElements,
      extraBlockElements,
      ctx
    );
    if (paragraphs.length === 0) {
      pageStatus = "Original";
      sendPageTranslatedStatus2(pageStatus);
      return;
    }
    log_default.debug("detect paragraphs", paragraphs);
    for (const paragraph of paragraphs) {
      addParagraphToQueue(paragraph, ctx);
    }
  }
  async function translateParagraphById(id) {
    const paragraph = paragraphEntities.get(id);
    if (!paragraph) {
      throw new Error(`paragraph not found`);
    }
    setLoadingToParagraph(id);
    const options = {
      url: globalThis.location.href,
      config: await getConfig()
    };
    const ctx = await getContext(options);
    const currentLang = getCurrentPageLanguage();
    const sentence = {
      id: paragraph.id,
      text: paragraph.text,
      from: currentLang,
      to: ctx.targetLanguage,
      url: ctx.encryptedUrl
    };
    try {
      const result = await translateSingleSentence(sentence, ctx);
      onParagraphTranslated(null, result, ctx);
    } catch (e18) {
      onParagraphTranslated(e18, sentence, ctx);
    }
  }
  function onParagraphTranslated(err, translatedSentence, ctx) {
    if (err) {
      const wrapperId = translatedSentence.id;
      const wrapper = document.getElementById(
        `${translationTargetElementWrapperClass}-${wrapperId}`
      );
      const errorHtml = `<span class="${brandId}-error notranslate"> <button class="${brandId}-clickable-button notranslate" title="${err.message}">\u2757</button> <button class="${brandId}-clickable-button notranslate" data-${brandId}-paragraph-id="${wrapperId}" data-${brandId}-action="retry">\u{1F504}</button></span>`;
      if (wrapper) {
        wrapper.innerHTML = errorHtml;
      }
    } else {
      const paragraph = paragraphEntities.get(translatedSentence.id);
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
      }
    }
  }
  async function translateCurrentQueue(ctx) {
    if (currentParagraphIds.length === 0) {
      return Promise.resolve();
    }
    const ids = [...currentParagraphIds];
    currentParagraphIds = [];
    const currentLang = getCurrentPageLanguage();
    const payload = {
      sentences: ids.map((id) => {
        const paragraph = paragraphEntities.get(id);
        return {
          id: paragraph.id,
          url: ctx.encryptedUrl,
          text: paragraph.text,
          from: currentLang,
          to: ctx.targetLanguage
        };
      }),
      url: ctx.encryptedUrl
    };
    const sentenceLength = payload.sentences.length;
    if (sentenceLength > 0) {
      pageStatus = "Translating";
      sendPageTranslatedStatus2(pageStatus);
      let index = -1;
      try {
        await new Promise((resolve, reject) => {
          translateMultipleSentences(
            payload,
            ctx,
            (err, translatedSentence) => {
              index++;
              onParagraphTranslated(err, translatedSentence, ctx);
              if (index === sentenceLength - 1) {
                resolve(null);
              }
            }
          ).catch((e18) => {
            payload.sentences.forEach((sentence) => {
              onParagraphTranslated(e18, sentence, ctx);
            });
            reject(e18);
          });
        });
        pageStatus = "Translated";
        sendPageTranslatedStatus2(pageStatus);
      } catch (e18) {
        pageStatus = "Error";
        sendPageTranslatedStatus2(pageStatus);
        log_default.error(
          `translateCurrentQueue error`,
          e18.name,
          e18.message,
          e18.details || ""
        );
      }
      return Promise.resolve();
    }
    pageStatus = "Translated";
    sendPageTranslatedStatus2(pageStatus);
    return Promise.resolve();
  }
  function enableMutatinObserver(rule, ctx) {
    disableMutatinObserver();
    const inlineAndIgnoreAndTextTags = rule.inlineTags.concat(rule.excludeTags).concat("#text");
    mutationObserver = new MutationObserver(function(mutations) {
      mutations.forEach((mutation) => {
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
  }
  function disableMutatinObserver() {
    if (mutationObserver) {
      mutationObserver.disconnect();
      mutationObserver.takeRecords();
    }
  }
  function getPageStatus() {
    return pageStatus;
  }

  // content_dom_listeners.ts
  function setupDomListeners() {
    document.addEventListener("click", (e18) => {
      const target = e18.target;
      const action = target.getAttribute("data-immersive-translate-action");
      if (action) {
        if (action === "retry") {
          const paragraphId = target.getAttribute(
            "data-immersive-translate-paragraph-id"
          );
          if (paragraphId) {
            translateParagraphById(Number(paragraphId));
          }
        }
      }
    });
  }

  // dom/main.ts
  async function main() {
    if (!isMonkey()) {
      setupMessageListeners();
    }
    setupDomListeners();
    if (!isMonkey()) {
      sendReady();
    }
    const options = {
      url: globalThis.location.href,
      config: await getConfig()
    };
    const ctx = await getContext(options);
    const { config } = ctx;
    const isDebug = config.debug;
    if (isDebug) {
      log_default.setLevel("debug");
    } else {
      log_default.setLevel("info");
    }
    log_default.debug(`context`, ctx);
    let lang = "und";
    if (!isMonkey()) {
      lang = await detectTabLanguage();
    }
    if (lang === "und") {
      lang = await detectPageLanguage();
    }
    setCurrentPageLanguage(lang);
    let isAutoTranslate = ctx.isTranslateUrl;
    if (!isAutoTranslate && !ctx.isTranslateExcludeUrl) {
      log_default.debug(`detect page language: ${lang}`);
      if (isMatchLanguage(lang, config.translationLanguagePattern)) {
        isAutoTranslate = true;
        log_default.debug(`match language pattern ${lang}, auto translate`);
      }
    }
    if (isAutoTranslate) {
      await toggleTranslatePage();
    } else {
      log_default.debug(`do not auto translate`);
    }
  }

  // immersive-translate.lib.ts
  function toggleTranslatePage2() {
    toggleTranslatePage().catch((e18) => {
      console.error(`Translate page error:`, e18);
    });
  }
  GM.registerMenuCommand("Toggle Translate", toggleTranslatePage2, "t");
  var addCSS = (css) => document.head.appendChild(document.createElement("style")).innerHTML = css;
  async function main2() {
    let injectedCss = "";
    if (globalThis.IMMERSIVE_TRANSLATE_INJECTED_CSS) {
      injectedCss = globalThis.IMMERSIVE_TRANSLATE_INJECTED_CSS;
    }
    if (injectedCss) {
      addCSS(injectedCss);
    }
    await main();
  }
  globalThis.IMMERSIVE_TRANSLATE_ENTRY = main2;
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
