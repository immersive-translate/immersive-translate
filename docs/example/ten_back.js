(() => {
  var e = {
      2295: (e, t, r) => {
        e.exports = r(3115);
      },
      3443: (e, t, r) => {
        "use strict";
        var n = r(7606),
          o = r(7310),
          s = r(2146),
          i = r(8475),
          a = r(9846),
          u = r(171),
          c = r(8694),
          f = r(3691),
          l = r(9873),
          p = r(7316),
          d = r(7491);
        e.exports = function (e) {
          return new Promise(function (t, r) {
            var h,
              m = e.data,
              v = e.headers,
              y = e.responseType;
            function g() {
              e.cancelToken && e.cancelToken.unsubscribe(h),
                e.signal && e.signal.removeEventListener("abort", h);
            }
            n.isFormData(m) &&
              n.isStandardBrowserEnv() &&
              delete v["Content-Type"];
            var E = new XMLHttpRequest();
            if (e.auth) {
              var b = e.auth.username || "",
                w = e.auth.password
                  ? unescape(encodeURIComponent(e.auth.password))
                  : "";
              v.Authorization = "Basic " + btoa(b + ":" + w);
            }
            var O = a(e.baseURL, e.url);
            function x() {
              if (E) {
                var n =
                    "getAllResponseHeaders" in E
                      ? u(E.getAllResponseHeaders())
                      : null,
                  s = {
                    data:
                      y && "text" !== y && "json" !== y
                        ? E.response
                        : E.responseText,
                    status: E.status,
                    statusText: E.statusText,
                    headers: n,
                    config: e,
                    request: E,
                  };
                o(
                  function (e) {
                    t(e), g();
                  },
                  function (e) {
                    r(e), g();
                  },
                  s
                ),
                  (E = null);
              }
            }
            if (
              (E.open(
                e.method.toUpperCase(),
                i(O, e.params, e.paramsSerializer),
                !0
              ),
              (E.timeout = e.timeout),
              "onloadend" in E
                ? (E.onloadend = x)
                : (E.onreadystatechange = function () {
                    E &&
                      4 === E.readyState &&
                      (0 !== E.status ||
                        (E.responseURL &&
                          0 === E.responseURL.indexOf("file:"))) &&
                      setTimeout(x);
                  }),
              (E.onabort = function () {
                E &&
                  (r(new l("Request aborted", l.ECONNABORTED, e, E)),
                  (E = null));
              }),
              (E.onerror = function () {
                r(new l("Network Error", l.ERR_NETWORK, e, E, E)), (E = null);
              }),
              (E.ontimeout = function () {
                var t = e.timeout
                    ? "timeout of " + e.timeout + "ms exceeded"
                    : "timeout exceeded",
                  n = e.transitional || f;
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                  r(
                    new l(
                      t,
                      n.clarifyTimeoutError ? l.ETIMEDOUT : l.ECONNABORTED,
                      e,
                      E
                    )
                  ),
                  (E = null);
              }),
              n.isStandardBrowserEnv())
            ) {
              var R =
                (e.withCredentials || c(O)) && e.xsrfCookieName
                  ? s.read(e.xsrfCookieName)
                  : void 0;
              R && (v[e.xsrfHeaderName] = R);
            }
            "setRequestHeader" in E &&
              n.forEach(v, function (e, t) {
                void 0 === m && "content-type" === t.toLowerCase()
                  ? delete v[t]
                  : E.setRequestHeader(t, e);
              }),
              n.isUndefined(e.withCredentials) ||
                (E.withCredentials = !!e.withCredentials),
              y && "json" !== y && (E.responseType = e.responseType),
              "function" == typeof e.onDownloadProgress &&
                E.addEventListener("progress", e.onDownloadProgress),
              "function" == typeof e.onUploadProgress &&
                E.upload &&
                E.upload.addEventListener("progress", e.onUploadProgress),
              (e.cancelToken || e.signal) &&
                ((h = function (e) {
                  E &&
                    (r(!e || (e && e.type) ? new p() : e),
                    E.abort(),
                    (E = null));
                }),
                e.cancelToken && e.cancelToken.subscribe(h),
                e.signal &&
                  (e.signal.aborted
                    ? h()
                    : e.signal.addEventListener("abort", h))),
              m || (m = null);
            var A = d(O);
            A && -1 === ["http", "https", "file"].indexOf(A)
              ? r(
                  new l("Unsupported protocol " + A + ":", l.ERR_BAD_REQUEST, e)
                )
              : E.send(m);
          });
        };
      },
      3115: (e, t, r) => {
        "use strict";
        var n = r(7606),
          o = r(1186),
          s = r(3309),
          i = r(6837);
        var a = (function e(t) {
          var r = new s(t),
            a = o(s.prototype.request, r);
          return (
            n.extend(a, s.prototype, r),
            n.extend(a, r),
            (a.create = function (r) {
              return e(i(t, r));
            }),
            a
          );
        })(r(9576));
        (a.Axios = s),
          (a.CanceledError = r(7316)),
          (a.CancelToken = r(2625)),
          (a.isCancel = r(9754)),
          (a.VERSION = r(5793).version),
          (a.toFormData = r(4044)),
          (a.AxiosError = r(9873)),
          (a.Cancel = a.CanceledError),
          (a.all = function (e) {
            return Promise.all(e);
          }),
          (a.spread = r(2764)),
          (a.isAxiosError = r(4547)),
          (e.exports = a),
          (e.exports.default = a);
      },
      2625: (e, t, r) => {
        "use strict";
        var n = r(7316);
        function o(e) {
          if ("function" != typeof e)
            throw new TypeError("executor must be a function.");
          var t;
          this.promise = new Promise(function (e) {
            t = e;
          });
          var r = this;
          this.promise.then(function (e) {
            if (r._listeners) {
              var t,
                n = r._listeners.length;
              for (t = 0; t < n; t++) r._listeners[t](e);
              r._listeners = null;
            }
          }),
            (this.promise.then = function (e) {
              var t,
                n = new Promise(function (e) {
                  r.subscribe(e), (t = e);
                }).then(e);
              return (
                (n.cancel = function () {
                  r.unsubscribe(t);
                }),
                n
              );
            }),
            e(function (e) {
              r.reason || ((r.reason = new n(e)), t(r.reason));
            });
        }
        (o.prototype.throwIfRequested = function () {
          if (this.reason) throw this.reason;
        }),
          (o.prototype.subscribe = function (e) {
            this.reason
              ? e(this.reason)
              : this._listeners
              ? this._listeners.push(e)
              : (this._listeners = [e]);
          }),
          (o.prototype.unsubscribe = function (e) {
            if (this._listeners) {
              var t = this._listeners.indexOf(e);
              -1 !== t && this._listeners.splice(t, 1);
            }
          }),
          (o.source = function () {
            var e;
            return {
              token: new o(function (t) {
                e = t;
              }),
              cancel: e,
            };
          }),
          (e.exports = o);
      },
      7316: (e, t, r) => {
        "use strict";
        var n = r(9873);
        function o(e) {
          n.call(this, null == e ? "canceled" : e, n.ERR_CANCELED),
            (this.name = "CanceledError");
        }
        r(7606).inherits(o, n, { __CANCEL__: !0 }), (e.exports = o);
      },
      9754: (e) => {
        "use strict";
        e.exports = function (e) {
          return !(!e || !e.__CANCEL__);
        };
      },
      3309: (e, t, r) => {
        "use strict";
        var n = r(7606),
          o = r(8475),
          s = r(5027),
          i = r(8760),
          a = r(6837),
          u = r(9846),
          c = r(6008),
          f = c.validators;
        function l(e) {
          (this.defaults = e),
            (this.interceptors = { request: new s(), response: new s() });
        }
        (l.prototype.request = function (e, t) {
          "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
            (t = a(this.defaults, t)).method
              ? (t.method = t.method.toLowerCase())
              : this.defaults.method
              ? (t.method = this.defaults.method.toLowerCase())
              : (t.method = "get");
          var r = t.transitional;
          void 0 !== r &&
            c.assertOptions(
              r,
              {
                silentJSONParsing: f.transitional(f.boolean),
                forcedJSONParsing: f.transitional(f.boolean),
                clarifyTimeoutError: f.transitional(f.boolean),
              },
              !1
            );
          var n = [],
            o = !0;
          this.interceptors.request.forEach(function (e) {
            ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
              ((o = o && e.synchronous), n.unshift(e.fulfilled, e.rejected));
          });
          var s,
            u = [];
          if (
            (this.interceptors.response.forEach(function (e) {
              u.push(e.fulfilled, e.rejected);
            }),
            !o)
          ) {
            var l = [i, void 0];
            for (
              Array.prototype.unshift.apply(l, n),
                l = l.concat(u),
                s = Promise.resolve(t);
              l.length;

            )
              s = s.then(l.shift(), l.shift());
            return s;
          }
          for (var p = t; n.length; ) {
            var d = n.shift(),
              h = n.shift();
            try {
              p = d(p);
            } catch (e) {
              h(e);
              break;
            }
          }
          try {
            s = i(p);
          } catch (e) {
            return Promise.reject(e);
          }
          for (; u.length; ) s = s.then(u.shift(), u.shift());
          return s;
        }),
          (l.prototype.getUri = function (e) {
            e = a(this.defaults, e);
            var t = u(e.baseURL, e.url);
            return o(t, e.params, e.paramsSerializer);
          }),
          n.forEach(["delete", "get", "head", "options"], function (e) {
            l.prototype[e] = function (t, r) {
              return this.request(
                a(r || {}, { method: e, url: t, data: (r || {}).data })
              );
            };
          }),
          n.forEach(["post", "put", "patch"], function (e) {
            function t(t) {
              return function (r, n, o) {
                return this.request(
                  a(o || {}, {
                    method: e,
                    headers: t ? { "Content-Type": "multipart/form-data" } : {},
                    url: r,
                    data: n,
                  })
                );
              };
            }
            (l.prototype[e] = t()), (l.prototype[e + "Form"] = t(!0));
          }),
          (e.exports = l);
      },
      9873: (e, t, r) => {
        "use strict";
        var n = r(7606);
        function o(e, t, r, n, o) {
          Error.call(this),
            (this.message = e),
            (this.name = "AxiosError"),
            t && (this.code = t),
            r && (this.config = r),
            n && (this.request = n),
            o && (this.response = o);
        }
        n.inherits(o, Error, {
          toJSON: function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
              status:
                this.response && this.response.status
                  ? this.response.status
                  : null,
            };
          },
        });
        var s = o.prototype,
          i = {};
        [
          "ERR_BAD_OPTION_VALUE",
          "ERR_BAD_OPTION",
          "ECONNABORTED",
          "ETIMEDOUT",
          "ERR_NETWORK",
          "ERR_FR_TOO_MANY_REDIRECTS",
          "ERR_DEPRECATED",
          "ERR_BAD_RESPONSE",
          "ERR_BAD_REQUEST",
          "ERR_CANCELED",
        ].forEach(function (e) {
          i[e] = { value: e };
        }),
          Object.defineProperties(o, i),
          Object.defineProperty(s, "isAxiosError", { value: !0 }),
          (o.from = function (e, t, r, i, a, u) {
            var c = Object.create(s);
            return (
              n.toFlatObject(e, c, function (e) {
                return e !== Error.prototype;
              }),
              o.call(c, e.message, t, r, i, a),
              (c.name = e.name),
              u && Object.assign(c, u),
              c
            );
          }),
          (e.exports = o);
      },
      5027: (e, t, r) => {
        "use strict";
        var n = r(7606);
        function o() {
          this.handlers = [];
        }
        (o.prototype.use = function (e, t, r) {
          return (
            this.handlers.push({
              fulfilled: e,
              rejected: t,
              synchronous: !!r && r.synchronous,
              runWhen: r ? r.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }),
          (o.prototype.eject = function (e) {
            this.handlers[e] && (this.handlers[e] = null);
          }),
          (o.prototype.forEach = function (e) {
            n.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }),
          (e.exports = o);
      },
      9846: (e, t, r) => {
        "use strict";
        var n = r(345),
          o = r(3707);
        e.exports = function (e, t) {
          return e && !n(t) ? o(e, t) : t;
        };
      },
      8760: (e, t, r) => {
        "use strict";
        var n = r(7606),
          o = r(791),
          s = r(9754),
          i = r(9576),
          a = r(7316);
        function u(e) {
          if (
            (e.cancelToken && e.cancelToken.throwIfRequested(),
            e.signal && e.signal.aborted)
          )
            throw new a();
        }
        e.exports = function (e) {
          return (
            u(e),
            (e.headers = e.headers || {}),
            (e.data = o.call(e, e.data, e.headers, e.transformRequest)),
            (e.headers = n.merge(
              e.headers.common || {},
              e.headers[e.method] || {},
              e.headers
            )),
            n.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              function (t) {
                delete e.headers[t];
              }
            ),
            (e.adapter || i.adapter)(e).then(
              function (t) {
                return (
                  u(e),
                  (t.data = o.call(e, t.data, t.headers, e.transformResponse)),
                  t
                );
              },
              function (t) {
                return (
                  s(t) ||
                    (u(e),
                    t &&
                      t.response &&
                      (t.response.data = o.call(
                        e,
                        t.response.data,
                        t.response.headers,
                        e.transformResponse
                      ))),
                  Promise.reject(t)
                );
              }
            )
          );
        };
      },
      6837: (e, t, r) => {
        "use strict";
        var n = r(7606);
        e.exports = function (e, t) {
          t = t || {};
          var r = {};
          function o(e, t) {
            return n.isPlainObject(e) && n.isPlainObject(t)
              ? n.merge(e, t)
              : n.isPlainObject(t)
              ? n.merge({}, t)
              : n.isArray(t)
              ? t.slice()
              : t;
          }
          function s(r) {
            return n.isUndefined(t[r])
              ? n.isUndefined(e[r])
                ? void 0
                : o(void 0, e[r])
              : o(e[r], t[r]);
          }
          function i(e) {
            if (!n.isUndefined(t[e])) return o(void 0, t[e]);
          }
          function a(r) {
            return n.isUndefined(t[r])
              ? n.isUndefined(e[r])
                ? void 0
                : o(void 0, e[r])
              : o(void 0, t[r]);
          }
          function u(r) {
            return r in t ? o(e[r], t[r]) : r in e ? o(void 0, e[r]) : void 0;
          }
          var c = {
            url: i,
            method: i,
            data: i,
            baseURL: a,
            transformRequest: a,
            transformResponse: a,
            paramsSerializer: a,
            timeout: a,
            timeoutMessage: a,
            withCredentials: a,
            adapter: a,
            responseType: a,
            xsrfCookieName: a,
            xsrfHeaderName: a,
            onUploadProgress: a,
            onDownloadProgress: a,
            decompress: a,
            maxContentLength: a,
            maxBodyLength: a,
            beforeRedirect: a,
            transport: a,
            httpAgent: a,
            httpsAgent: a,
            cancelToken: a,
            socketPath: a,
            responseEncoding: a,
            validateStatus: u,
          };
          return (
            n.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
              var t = c[e] || s,
                o = t(e);
              (n.isUndefined(o) && t !== u) || (r[e] = o);
            }),
            r
          );
        };
      },
      7310: (e, t, r) => {
        "use strict";
        var n = r(9873);
        e.exports = function (e, t, r) {
          var o = r.config.validateStatus;
          r.status && o && !o(r.status)
            ? t(
                new n(
                  "Request failed with status code " + r.status,
                  [n.ERR_BAD_REQUEST, n.ERR_BAD_RESPONSE][
                    Math.floor(r.status / 100) - 4
                  ],
                  r.config,
                  r.request,
                  r
                )
              )
            : e(r);
        };
      },
      791: (e, t, r) => {
        "use strict";
        var n = r(7606),
          o = r(9576);
        e.exports = function (e, t, r) {
          var s = this || o;
          return (
            n.forEach(r, function (r) {
              e = r.call(s, e, t);
            }),
            e
          );
        };
      },
      9576: (e, t, r) => {
        "use strict";
        var n = r(7606),
          o = r(1966),
          s = r(9873),
          i = r(3691),
          a = r(4044),
          u = { "Content-Type": "application/x-www-form-urlencoded" };
        function c(e, t) {
          !n.isUndefined(e) &&
            n.isUndefined(e["Content-Type"]) &&
            (e["Content-Type"] = t);
        }
        var f,
          l = {
            transitional: i,
            adapter:
              (("undefined" != typeof XMLHttpRequest ||
                ("undefined" != typeof process &&
                  "[object process]" ===
                    Object.prototype.toString.call(process))) &&
                (f = r(3443)),
              f),
            transformRequest: [
              function (e, t) {
                if (
                  (o(t, "Accept"),
                  o(t, "Content-Type"),
                  n.isFormData(e) ||
                    n.isArrayBuffer(e) ||
                    n.isBuffer(e) ||
                    n.isStream(e) ||
                    n.isFile(e) ||
                    n.isBlob(e))
                )
                  return e;
                if (n.isArrayBufferView(e)) return e.buffer;
                if (n.isURLSearchParams(e))
                  return (
                    c(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString()
                  );
                var r,
                  s = n.isObject(e),
                  i = t && t["Content-Type"];
                if (
                  (r = n.isFileList(e)) ||
                  (s && "multipart/form-data" === i)
                ) {
                  var u = this.env && this.env.FormData;
                  return a(r ? { "files[]": e } : e, u && new u());
                }
                return s || "application/json" === i
                  ? (c(t, "application/json"),
                    (function (e, t, r) {
                      if (n.isString(e))
                        try {
                          return (t || JSON.parse)(e), n.trim(e);
                        } catch (e) {
                          if ("SyntaxError" !== e.name) throw e;
                        }
                      return (r || JSON.stringify)(e);
                    })(e))
                  : e;
              },
            ],
            transformResponse: [
              function (e) {
                var t = this.transitional || l.transitional,
                  r = t && t.silentJSONParsing,
                  o = t && t.forcedJSONParsing,
                  i = !r && "json" === this.responseType;
                if (i || (o && n.isString(e) && e.length))
                  try {
                    return JSON.parse(e);
                  } catch (e) {
                    if (i) {
                      if ("SyntaxError" === e.name)
                        throw s.from(
                          e,
                          s.ERR_BAD_RESPONSE,
                          this,
                          null,
                          this.response
                        );
                      throw e;
                    }
                  }
                return e;
              },
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: { FormData: r(1879) },
            validateStatus: function (e) {
              return e >= 200 && e < 300;
            },
            headers: {
              common: { Accept: "application/json, text/plain, */*" },
            },
          };
        n.forEach(["delete", "get", "head"], function (e) {
          l.headers[e] = {};
        }),
          n.forEach(["post", "put", "patch"], function (e) {
            l.headers[e] = n.merge(u);
          }),
          (e.exports = l);
      },
      3691: (e) => {
        "use strict";
        e.exports = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        };
      },
      5793: (e) => {
        e.exports = { version: "0.27.2" };
      },
      1186: (e) => {
        "use strict";
        e.exports = function (e, t) {
          return function () {
            for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
              r[n] = arguments[n];
            return e.apply(t, r);
          };
        };
      },
      8475: (e, t, r) => {
        "use strict";
        var n = r(7606);
        function o(e) {
          return encodeURIComponent(e)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+")
            .replace(/%5B/gi, "[")
            .replace(/%5D/gi, "]");
        }
        e.exports = function (e, t, r) {
          if (!t) return e;
          var s;
          if (r) s = r(t);
          else if (n.isURLSearchParams(t)) s = t.toString();
          else {
            var i = [];
            n.forEach(t, function (e, t) {
              null != e &&
                (n.isArray(e) ? (t += "[]") : (e = [e]),
                n.forEach(e, function (e) {
                  n.isDate(e)
                    ? (e = e.toISOString())
                    : n.isObject(e) && (e = JSON.stringify(e)),
                    i.push(o(t) + "=" + o(e));
                }));
            }),
              (s = i.join("&"));
          }
          if (s) {
            var a = e.indexOf("#");
            -1 !== a && (e = e.slice(0, a)),
              (e += (-1 === e.indexOf("?") ? "?" : "&") + s);
          }
          return e;
        };
      },
      3707: (e) => {
        "use strict";
        e.exports = function (e, t) {
          return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
        };
      },
      2146: (e, t, r) => {
        "use strict";
        var n = r(7606);
        e.exports = n.isStandardBrowserEnv()
          ? {
              write: function (e, t, r, o, s, i) {
                var a = [];
                a.push(e + "=" + encodeURIComponent(t)),
                  n.isNumber(r) &&
                    a.push("expires=" + new Date(r).toGMTString()),
                  n.isString(o) && a.push("path=" + o),
                  n.isString(s) && a.push("domain=" + s),
                  !0 === i && a.push("secure"),
                  (document.cookie = a.join("; "));
              },
              read: function (e) {
                var t = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove: function (e) {
                this.write(e, "", Date.now() - 864e5);
              },
            }
          : {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
      },
      345: (e) => {
        "use strict";
        e.exports = function (e) {
          return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
        };
      },
      4547: (e, t, r) => {
        "use strict";
        var n = r(7606);
        e.exports = function (e) {
          return n.isObject(e) && !0 === e.isAxiosError;
        };
      },
      8694: (e, t, r) => {
        "use strict";
        var n = r(7606);
        e.exports = n.isStandardBrowserEnv()
          ? (function () {
              var e,
                t = /(msie|trident)/i.test(navigator.userAgent),
                r = document.createElement("a");
              function o(e) {
                var n = e;
                return (
                  t && (r.setAttribute("href", n), (n = r.href)),
                  r.setAttribute("href", n),
                  {
                    href: r.href,
                    protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                    host: r.host,
                    search: r.search ? r.search.replace(/^\?/, "") : "",
                    hash: r.hash ? r.hash.replace(/^#/, "") : "",
                    hostname: r.hostname,
                    port: r.port,
                    pathname:
                      "/" === r.pathname.charAt(0)
                        ? r.pathname
                        : "/" + r.pathname,
                  }
                );
              }
              return (
                (e = o(window.location.href)),
                function (t) {
                  var r = n.isString(t) ? o(t) : t;
                  return r.protocol === e.protocol && r.host === e.host;
                }
              );
            })()
          : function () {
              return !0;
            };
      },
      1966: (e, t, r) => {
        "use strict";
        var n = r(7606);
        e.exports = function (e, t) {
          n.forEach(e, function (r, n) {
            n !== t &&
              n.toUpperCase() === t.toUpperCase() &&
              ((e[t] = r), delete e[n]);
          });
        };
      },
      1879: (e) => {
        e.exports = null;
      },
      171: (e, t, r) => {
        "use strict";
        var n = r(7606),
          o = [
            "age",
            "authorization",
            "content-length",
            "content-type",
            "etag",
            "expires",
            "from",
            "host",
            "if-modified-since",
            "if-unmodified-since",
            "last-modified",
            "location",
            "max-forwards",
            "proxy-authorization",
            "referer",
            "retry-after",
            "user-agent",
          ];
        e.exports = function (e) {
          var t,
            r,
            s,
            i = {};
          return e
            ? (n.forEach(e.split("\n"), function (e) {
                if (
                  ((s = e.indexOf(":")),
                  (t = n.trim(e.substr(0, s)).toLowerCase()),
                  (r = n.trim(e.substr(s + 1))),
                  t)
                ) {
                  if (i[t] && o.indexOf(t) >= 0) return;
                  i[t] =
                    "set-cookie" === t
                      ? (i[t] ? i[t] : []).concat([r])
                      : i[t]
                      ? i[t] + ", " + r
                      : r;
                }
              }),
              i)
            : i;
        };
      },
      7491: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
          return (t && t[1]) || "";
        };
      },
      2764: (e) => {
        "use strict";
        e.exports = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        };
      },
      4044: (e, t, r) => {
        "use strict";
        var n = r(7606);
        e.exports = function (e, t) {
          t = t || new FormData();
          var r = [];
          function o(e) {
            return null === e
              ? ""
              : n.isDate(e)
              ? e.toISOString()
              : n.isArrayBuffer(e) || n.isTypedArray(e)
              ? "function" == typeof Blob
                ? new Blob([e])
                : Buffer.from(e)
              : e;
          }
          return (
            (function e(s, i) {
              if (n.isPlainObject(s) || n.isArray(s)) {
                if (-1 !== r.indexOf(s))
                  throw Error("Circular reference detected in " + i);
                r.push(s),
                  n.forEach(s, function (r, s) {
                    if (!n.isUndefined(r)) {
                      var a,
                        u = i ? i + "." + s : s;
                      if (r && !i && "object" == typeof r)
                        if (n.endsWith(s, "{}")) r = JSON.stringify(r);
                        else if (n.endsWith(s, "[]") && (a = n.toArray(r)))
                          return void a.forEach(function (e) {
                            !n.isUndefined(e) && t.append(u, o(e));
                          });
                      e(r, u);
                    }
                  }),
                  r.pop();
              } else t.append(i, o(s));
            })(e),
            t
          );
        };
      },
      6008: (e, t, r) => {
        "use strict";
        var n = r(5793).version,
          o = r(9873),
          s = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach(
          function (e, t) {
            s[e] = function (r) {
              return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
            };
          }
        );
        var i = {};
        (s.transitional = function (e, t, r) {
          return function (s, a, u) {
            if (!1 === e)
              throw new o(
                (function (e, t) {
                  return (
                    "[Axios v" +
                    n +
                    "] Transitional option '" +
                    e +
                    "'" +
                    t +
                    (r ? ". " + r : "")
                  );
                })(a, " has been removed" + (t ? " in " + t : "")),
                o.ERR_DEPRECATED
              );
            return t && !i[a] && (i[a] = !0), !e || e(s, a, u);
          };
        }),
          (e.exports = {
            assertOptions: function (e, t, r) {
              if ("object" != typeof e)
                throw new o(
                  "options must be an object",
                  o.ERR_BAD_OPTION_VALUE
                );
              for (var n = Object.keys(e), s = n.length; s-- > 0; ) {
                var i = n[s],
                  a = t[i];
                if (a) {
                  var u = e[i],
                    c = void 0 === u || a(u, i, e);
                  if (!0 !== c)
                    throw new o(
                      "option " + i + " must be " + c,
                      o.ERR_BAD_OPTION_VALUE
                    );
                } else if (!0 !== r)
                  throw new o("Unknown option " + i, o.ERR_BAD_OPTION);
              }
            },
            validators: s,
          });
      },
      7606: (e, t, r) => {
        "use strict";
        var n,
          o = r(1186),
          s = Object.prototype.toString,
          i =
            ((n = Object.create(null)),
            function (e) {
              var t = s.call(e);
              return n[t] || (n[t] = t.slice(8, -1).toLowerCase());
            });
        function a(e) {
          return (
            (e = e.toLowerCase()),
            function (t) {
              return i(t) === e;
            }
          );
        }
        function u(e) {
          return Array.isArray(e);
        }
        function c(e) {
          return void 0 === e;
        }
        var f = a("ArrayBuffer");
        function l(e) {
          return null !== e && "object" == typeof e;
        }
        function p(e) {
          if ("object" !== i(e)) return !1;
          var t = Object.getPrototypeOf(e);
          return null === t || t === Object.prototype;
        }
        var d = a("Date"),
          h = a("File"),
          m = a("Blob"),
          v = a("FileList");
        function y(e) {
          return "[object Function]" === s.call(e);
        }
        var g = a("URLSearchParams");
        function E(e, t) {
          if (null != e)
            if (("object" != typeof e && (e = [e]), u(e)))
              for (var r = 0, n = e.length; r < n; r++)
                t.call(null, e[r], r, e);
            else
              for (var o in e)
                Object.prototype.hasOwnProperty.call(e, o) &&
                  t.call(null, e[o], o, e);
        }
        var b,
          w =
            ((b =
              "undefined" != typeof Uint8Array &&
              Object.getPrototypeOf(Uint8Array)),
            function (e) {
              return b && e instanceof b;
            });
        e.exports = {
          isArray: u,
          isArrayBuffer: f,
          isBuffer: function (e) {
            return (
              null !== e &&
              !c(e) &&
              null !== e.constructor &&
              !c(e.constructor) &&
              "function" == typeof e.constructor.isBuffer &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: function (e) {
            var t = "[object FormData]";
            return (
              e &&
              (("function" == typeof FormData && e instanceof FormData) ||
                s.call(e) === t ||
                (y(e.toString) && e.toString() === t))
            );
          },
          isArrayBufferView: function (e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && f(e.buffer);
          },
          isString: function (e) {
            return "string" == typeof e;
          },
          isNumber: function (e) {
            return "number" == typeof e;
          },
          isObject: l,
          isPlainObject: p,
          isUndefined: c,
          isDate: d,
          isFile: h,
          isBlob: m,
          isFunction: y,
          isStream: function (e) {
            return l(e) && y(e.pipe);
          },
          isURLSearchParams: g,
          isStandardBrowserEnv: function () {
            return (
              ("undefined" == typeof navigator ||
                ("ReactNative" !== navigator.product &&
                  "NativeScript" !== navigator.product &&
                  "NS" !== navigator.product)) &&
              "undefined" != typeof window &&
              "undefined" != typeof document
            );
          },
          forEach: E,
          merge: function e() {
            var t = {};
            function r(r, n) {
              p(t[n]) && p(r)
                ? (t[n] = e(t[n], r))
                : p(r)
                ? (t[n] = e({}, r))
                : u(r)
                ? (t[n] = r.slice())
                : (t[n] = r);
            }
            for (var n = 0, o = arguments.length; n < o; n++)
              E(arguments[n], r);
            return t;
          },
          extend: function (e, t, r) {
            return (
              E(t, function (t, n) {
                e[n] = r && "function" == typeof t ? o(t, r) : t;
              }),
              e
            );
          },
          trim: function (e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
          },
          stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
          },
          inherits: function (e, t, r, n) {
            (e.prototype = Object.create(t.prototype, n)),
              (e.prototype.constructor = e),
              r && Object.assign(e.prototype, r);
          },
          toFlatObject: function (e, t, r) {
            var n,
              o,
              s,
              i = {};
            t = t || {};
            do {
              for (o = (n = Object.getOwnPropertyNames(e)).length; o-- > 0; )
                i[(s = n[o])] || ((t[s] = e[s]), (i[s] = !0));
              e = Object.getPrototypeOf(e);
            } while (e && (!r || r(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: i,
          kindOfTest: a,
          endsWith: function (e, t, r) {
            (e = String(e)),
              (void 0 === r || r > e.length) && (r = e.length),
              (r -= t.length);
            var n = e.indexOf(t, r);
            return -1 !== n && n === r;
          },
          toArray: function (e) {
            if (!e) return null;
            var t = e.length;
            if (c(t)) return null;
            for (var r = new Array(t); t-- > 0; ) r[t] = e[t];
            return r;
          },
          isTypedArray: w,
          isFileList: v,
        };
      },
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var s = (t[n] = { exports: {} });
    return e[n](s, s.exports, r), s.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      const e = () => {
          chrome.runtime.onInstalled.addListener(async (e) => {
            e.reason, chrome.runtime.OnInstalledReason.INSTALL;
          });
        },
        t = () => {
          chrome.contextMenus.removeAll(() => {
            chrome.contextMenus.create({
              id: "translate-selected",
              title: "翻译选中文本",
              contexts: ["selection"],
            }),
              chrome.contextMenus.create({
                id: "translate-selected-separator",
                type: "separator",
                contexts: ["selection"],
              }),
              chrome.contextMenus.create({
                id: "translate-page",
                title: "开启/关闭整页翻译",
                contexts: ["all"],
              });
          }),
            chrome.contextMenus.onClicked.addListener((e, t) => {
              chrome.tabs.sendMessage(t.id, e.menuItemId);
            });
        };
      var n = r(2295),
        o = r.n(n),
        s = r(7310),
        i = r.n(s),
        a = r(8475),
        u = r.n(a),
        c = r(9846),
        f = r.n(c),
        l = r(7606);
      async function p(e, t) {
        let r;
        try {
          r = await fetch(e);
        } catch (r) {
          return d("Network Error", t, "ERR_NETWORK", e);
        }
        const n = {
          ok: r.ok,
          status: r.status,
          statusText: r.statusText,
          headers: new Headers(r.headers),
          config: t,
          request: e,
        };
        if (r.status >= 200 && 204 !== r.status)
          switch (t.responseType) {
            case "arraybuffer":
              n.data = await r.arrayBuffer();
              break;
            case "blob":
              n.data = await r.blob();
              break;
            case "json":
              n.data = await r.json();
              break;
            case "formData":
              n.data = await r.formData();
              break;
            default:
              n.data = await r.text();
          }
        return n;
      }
      function d(e, t, r, n, s) {
        return o().AxiosError && "function" == typeof o().AxiosError
          ? new (o().AxiosError)(e, o().AxiosError[r], t, n, s)
          : (function (e, t, r, n, o) {
              (e.config = t), r && (e.code = r);
              return (
                (e.request = n),
                (e.response = o),
                (e.isAxiosError = !0),
                (e.toJSON = function () {
                  return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code,
                    status:
                      this.response && this.response.status
                        ? this.response.status
                        : null,
                  };
                }),
                e
              );
            })(new Error(e), t, r, n, s);
      }
      const h = o().create({
          adapter: async function (e) {
            const t = (function (e) {
                const t = new Headers(e.headers);
                if (e.auth) {
                  const r = e.auth.username || "",
                    n = e.auth.password
                      ? decodeURI(encodeURIComponent(e.auth.password))
                      : "";
                  t.set("Authorization", `Basic ${btoa(r + ":" + n)}`);
                }
                const r = e.method.toUpperCase(),
                  n = { headers: t, method: r };
                "GET" !== r &&
                  "HEAD" !== r &&
                  ((n.body = e.data),
                  (0, l.isFormData)(n.body) &&
                    (0, l.isStandardBrowserEnv)() &&
                    t.delete("Content-Type"));
                e.mode && (n.mode = e.mode);
                e.cache && (n.cache = e.cache);
                e.integrity && (n.integrity = e.integrity);
                e.redirect && (n.redirect = e.redirect);
                e.referrer && (n.referrer = e.referrer);
                (0, l.isUndefined)(e.withCredentials) ||
                  (n.credentials = e.withCredentials ? "include" : "omit");
                const o = f()(e.baseURL, e.url),
                  s = u()(o, e.params, e.paramsSerializer);
                return new Request(s, n);
              })(e),
              r = [p(t, e)];
            e.timeout &&
              e.timeout > 0 &&
              r.push(
                new Promise((r) => {
                  setTimeout(() => {
                    const n = e.timeoutErrorMessage
                      ? e.timeoutErrorMessage
                      : "timeout of " + e.timeout + "ms exceeded";
                    r(d(n, e, "ECONNABORTED", t));
                  }, e.timeout);
                })
              );
            const n = await Promise.race(r);
            return new Promise((t, r) => {
              n instanceof Error
                ? r(n)
                : "[object Function]" ===
                  Object.prototype.toString.call(e.settle)
                ? e.settle(t, r, n)
                : i()(t, r, n);
            });
          },
        }),
        m = h,
        v = () => {
          chrome.runtime.onMessage.addListener((e, t, r) => {
            const { message_type: n, ...o } = e;
            if ("fetch" === n)
              try {
                const e = () => {
                  m.request({
                    url: "https://transmart.qq.com/api/imt",
                    method: "POST",
                    data: o,
                  })
                    .then((e) => {
                      r(e.data);
                    })
                    .catch((t) => {
                      "ECONNABORTED" === t.code && e();
                    });
                };
                e();
              } catch (e) {}
            else
              "openOptionsPage" === n
                ? chrome.runtime.openOptionsPage(() => {})
                : "openPageTranslate" === n &&
                  chrome.tabs.query(
                    { currentWindow: !0, active: !0 },
                    function (e) {
                      chrome.tabs.sendMessage(e[0].id, "translate-page");
                    }
                  );
            return !0;
          });
        };
      e(), v(), t();
    })();
})();
