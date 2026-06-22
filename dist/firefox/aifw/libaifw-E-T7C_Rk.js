var Fe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _n(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function wn(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var n = e.default;
  if (typeof n == "function") {
    var r = function o() {
      var i = !1;
      try {
        i = this instanceof o;
      } catch {
      }
      return i ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    r.prototype = n.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(o) {
    var i = Object.getOwnPropertyDescriptor(e, o);
    Object.defineProperty(r, o, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[o];
      }
    });
  }), r;
}
var re = { exports: {} };
var Ae;
function Ce() {
  return Ae || (Ae = 1, (function(e) {
    (function() {
      var n = "input is invalid type", r = "finalize already called", o = typeof window == "object", i = o ? window : {};
      i.JS_SHA3_NO_WINDOW && (o = !1);
      var f = !o && typeof self == "object", d = !i.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
      d ? i = Fe : f && (i = self);
      for (var S = !i.JS_SHA3_NO_COMMON_JS && !0 && e.exports, _ = !i.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", E = "0123456789abcdef".split(""), I = [31, 7936, 2031616, 520093696], O = [4, 1024, 262144, 67108864], b = [1, 256, 65536, 16777216], v = [6, 1536, 393216, 100663296], p = [0, 8, 16, 24], y = [
        1,
        0,
        32898,
        0,
        32906,
        2147483648,
        2147516416,
        2147483648,
        32907,
        0,
        2147483649,
        0,
        2147516545,
        2147483648,
        32777,
        2147483648,
        138,
        0,
        136,
        0,
        2147516425,
        0,
        2147483658,
        0,
        2147516555,
        0,
        139,
        2147483648,
        32905,
        2147483648,
        32771,
        2147483648,
        32770,
        2147483648,
        128,
        2147483648,
        32778,
        0,
        2147483658,
        2147483648,
        2147516545,
        2147483648,
        32896,
        2147483648,
        2147483649,
        0,
        2147516424,
        2147483648
      ], g = [224, 256, 384, 512], x = [128, 256], L = ["hex", "buffer", "arrayBuffer", "array", "digest"], B = {
        128: 168,
        256: 136
      }, z = i.JS_SHA3_NO_NODE_JS || !Array.isArray ? function(t) {
        return Object.prototype.toString.call(t) === "[object Array]";
      } : Array.isArray, T = _ && (i.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) ? function(t) {
        return typeof t == "object" && t.buffer && t.buffer.constructor === ArrayBuffer;
      } : ArrayBuffer.isView, F = function(t) {
        var a = typeof t;
        if (a === "string")
          return [t, !0];
        if (a !== "object" || t === null)
          throw new Error(n);
        if (_ && t.constructor === ArrayBuffer)
          return [new Uint8Array(t), !1];
        if (!z(t) && !T(t))
          throw new Error(n);
        return [t, !1];
      }, C = function(t) {
        return F(t)[0].length === 0;
      }, U = function(t) {
        for (var a = [], s = 0; s < t.length; ++s)
          a[s] = t[s];
        return a;
      }, V = function(t, a, s) {
        return function(c) {
          return new N(t, a, t).update(c)[s]();
        };
      }, ue = function(t, a, s) {
        return function(c, l) {
          return new N(t, a, l).update(c)[s]();
        };
      }, he = function(t, a, s) {
        return function(c, l, u, w) {
          return K["cshake" + t].update(c, l, u, w)[s]();
        };
      }, de = function(t, a, s) {
        return function(c, l, u, w) {
          return K["kmac" + t].update(c, l, u, w)[s]();
        };
      }, X = function(t, a, s, c) {
        for (var l = 0; l < L.length; ++l) {
          var u = L[l];
          t[u] = a(s, c, u);
        }
        return t;
      }, _e = function(t, a) {
        var s = V(t, a, "hex");
        return s.create = function() {
          return new N(t, a, t);
        }, s.update = function(c) {
          return s.create().update(c);
        }, X(s, V, t, a);
      }, Ie = function(t, a) {
        var s = ue(t, a, "hex");
        return s.create = function(c) {
          return new N(t, a, c);
        }, s.update = function(c, l) {
          return s.create(l).update(c);
        }, X(s, ue, t, a);
      }, ze = function(t, a) {
        var s = B[t], c = he(t, a, "hex");
        return c.create = function(l, u, w) {
          return C(u) && C(w) ? K["shake" + t].create(l) : new N(t, a, l).bytepad([u, w], s);
        }, c.update = function(l, u, w, h) {
          return c.create(u, w, h).update(l);
        }, X(c, he, t, a);
      }, Re = function(t, a) {
        var s = B[t], c = de(t, a, "hex");
        return c.create = function(l, u, w) {
          return new ne(t, a, u).bytepad(["KMAC", w], s).bytepad([l], s);
        }, c.update = function(l, u, w, h) {
          return c.create(l, w, h).update(u);
        }, X(c, de, t, a);
      }, we = [
        { name: "keccak", padding: b, bits: g, createMethod: _e },
        { name: "sha3", padding: v, bits: g, createMethod: _e },
        { name: "shake", padding: I, bits: x, createMethod: Ie },
        { name: "cshake", padding: O, bits: x, createMethod: ze },
        { name: "kmac", padding: O, bits: x, createMethod: Re }
      ], K = {}, Y = [], j = 0; j < we.length; ++j)
        for (var q = we[j], tt = q.bits, J = 0; J < tt.length; ++J) {
          var ee = q.name + "_" + tt[J];
          if (Y.push(ee), K[ee] = q.createMethod(tt[J], q.padding), q.name !== "sha3") {
            var me = q.name + tt[J];
            Y.push(me), K[me] = K[ee];
          }
        }
      function N(t, a, s) {
        this.blocks = [], this.s = [], this.padding = a, this.outputBits = s, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (t << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = s >> 5, this.extraBytes = (s & 31) >> 3;
        for (var c = 0; c < 50; ++c)
          this.s[c] = 0;
      }
      N.prototype.update = function(t) {
        if (this.finalized)
          throw new Error(r);
        var a = F(t);
        t = a[0];
        for (var s = a[1], c = this.blocks, l = this.byteCount, u = t.length, w = this.blockCount, h = 0, k = this.s, m, M; h < u; ) {
          if (this.reset)
            for (this.reset = !1, c[0] = this.block, m = 1; m < w + 1; ++m)
              c[m] = 0;
          if (s)
            for (m = this.start; h < u && m < l; ++h)
              M = t.charCodeAt(h), M < 128 ? c[m >> 2] |= M << p[m++ & 3] : M < 2048 ? (c[m >> 2] |= (192 | M >> 6) << p[m++ & 3], c[m >> 2] |= (128 | M & 63) << p[m++ & 3]) : M < 55296 || M >= 57344 ? (c[m >> 2] |= (224 | M >> 12) << p[m++ & 3], c[m >> 2] |= (128 | M >> 6 & 63) << p[m++ & 3], c[m >> 2] |= (128 | M & 63) << p[m++ & 3]) : (M = 65536 + ((M & 1023) << 10 | t.charCodeAt(++h) & 1023), c[m >> 2] |= (240 | M >> 18) << p[m++ & 3], c[m >> 2] |= (128 | M >> 12 & 63) << p[m++ & 3], c[m >> 2] |= (128 | M >> 6 & 63) << p[m++ & 3], c[m >> 2] |= (128 | M & 63) << p[m++ & 3]);
          else
            for (m = this.start; h < u && m < l; ++h)
              c[m >> 2] |= t[h] << p[m++ & 3];
          if (this.lastByteIndex = m, m >= l) {
            for (this.start = m - l, this.block = c[w], m = 0; m < w; ++m)
              k[m] ^= c[m];
            Z(k), this.reset = !0;
          } else
            this.start = m;
        }
        return this;
      }, N.prototype.encode = function(t, a) {
        var s = t & 255, c = 1, l = [s];
        for (t = t >> 8, s = t & 255; s > 0; )
          l.unshift(s), t = t >> 8, s = t & 255, ++c;
        return a ? l.push(c) : l.unshift(c), this.update(l), l.length;
      }, N.prototype.encodeString = function(t) {
        var a = F(t);
        t = a[0];
        var s = a[1], c = 0, l = t.length;
        if (s)
          for (var u = 0; u < t.length; ++u) {
            var w = t.charCodeAt(u);
            w < 128 ? c += 1 : w < 2048 ? c += 2 : w < 55296 || w >= 57344 ? c += 3 : (w = 65536 + ((w & 1023) << 10 | t.charCodeAt(++u) & 1023), c += 4);
          }
        else
          c = l;
        return c += this.encode(c * 8), this.update(t), c;
      }, N.prototype.bytepad = function(t, a) {
        for (var s = this.encode(a), c = 0; c < t.length; ++c)
          s += this.encodeString(t[c]);
        var l = (a - s % a) % a, u = [];
        return u.length = l, this.update(u), this;
      }, N.prototype.finalize = function() {
        if (!this.finalized) {
          this.finalized = !0;
          var t = this.blocks, a = this.lastByteIndex, s = this.blockCount, c = this.s;
          if (t[a >> 2] |= this.padding[a & 3], this.lastByteIndex === this.byteCount)
            for (t[0] = t[s], a = 1; a < s + 1; ++a)
              t[a] = 0;
          for (t[s - 1] |= 2147483648, a = 0; a < s; ++a)
            c[a] ^= t[a];
          Z(c);
        }
      }, N.prototype.toString = N.prototype.hex = function() {
        this.finalize();
        for (var t = this.blockCount, a = this.s, s = this.outputBlocks, c = this.extraBytes, l = 0, u = 0, w = "", h; u < s; ) {
          for (l = 0; l < t && u < s; ++l, ++u)
            h = a[l], w += E[h >> 4 & 15] + E[h & 15] + E[h >> 12 & 15] + E[h >> 8 & 15] + E[h >> 20 & 15] + E[h >> 16 & 15] + E[h >> 28 & 15] + E[h >> 24 & 15];
          u % t === 0 && (a = U(a), Z(a), l = 0);
        }
        return c && (h = a[l], w += E[h >> 4 & 15] + E[h & 15], c > 1 && (w += E[h >> 12 & 15] + E[h >> 8 & 15]), c > 2 && (w += E[h >> 20 & 15] + E[h >> 16 & 15])), w;
      }, N.prototype.arrayBuffer = function() {
        this.finalize();
        var t = this.blockCount, a = this.s, s = this.outputBlocks, c = this.extraBytes, l = 0, u = 0, w = this.outputBits >> 3, h;
        c ? h = new ArrayBuffer(s + 1 << 2) : h = new ArrayBuffer(w);
        for (var k = new Uint32Array(h); u < s; ) {
          for (l = 0; l < t && u < s; ++l, ++u)
            k[u] = a[l];
          u % t === 0 && (a = U(a), Z(a));
        }
        return c && (k[u] = a[l], h = h.slice(0, w)), h;
      }, N.prototype.buffer = N.prototype.arrayBuffer, N.prototype.digest = N.prototype.array = function() {
        this.finalize();
        for (var t = this.blockCount, a = this.s, s = this.outputBlocks, c = this.extraBytes, l = 0, u = 0, w = [], h, k; u < s; ) {
          for (l = 0; l < t && u < s; ++l, ++u)
            h = u << 2, k = a[l], w[h] = k & 255, w[h + 1] = k >> 8 & 255, w[h + 2] = k >> 16 & 255, w[h + 3] = k >> 24 & 255;
          u % t === 0 && (a = U(a), Z(a));
        }
        return c && (h = u << 2, k = a[l], w[h] = k & 255, c > 1 && (w[h + 1] = k >> 8 & 255), c > 2 && (w[h + 2] = k >> 16 & 255)), w;
      };
      function ne(t, a, s) {
        N.call(this, t, a, s);
      }
      ne.prototype = new N(), ne.prototype.finalize = function() {
        return this.encode(this.outputBits, !0), N.prototype.finalize.call(this);
      };
      var Z = function(t) {
        var a, s, c, l, u, w, h, k, m, M, et, nt, rt, at, ot, it, st, ct, ft, lt, ut, ht, dt, _t, wt, mt, At, Et, pt, yt, St, Bt, bt, gt, vt, Mt, Nt, kt, xt, Tt, Ot, Lt, Dt, It, zt, Rt, Ft, Ct, Ut, Pt, $t, Kt, jt, Wt, Ht, Vt, qt, Gt, Yt, Jt, Zt, Qt, Xt;
        for (c = 0; c < 48; c += 2)
          l = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], u = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], w = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], h = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], k = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], m = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], M = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], et = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], nt = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48], rt = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49], a = nt ^ (w << 1 | h >>> 31), s = rt ^ (h << 1 | w >>> 31), t[0] ^= a, t[1] ^= s, t[10] ^= a, t[11] ^= s, t[20] ^= a, t[21] ^= s, t[30] ^= a, t[31] ^= s, t[40] ^= a, t[41] ^= s, a = l ^ (k << 1 | m >>> 31), s = u ^ (m << 1 | k >>> 31), t[2] ^= a, t[3] ^= s, t[12] ^= a, t[13] ^= s, t[22] ^= a, t[23] ^= s, t[32] ^= a, t[33] ^= s, t[42] ^= a, t[43] ^= s, a = w ^ (M << 1 | et >>> 31), s = h ^ (et << 1 | M >>> 31), t[4] ^= a, t[5] ^= s, t[14] ^= a, t[15] ^= s, t[24] ^= a, t[25] ^= s, t[34] ^= a, t[35] ^= s, t[44] ^= a, t[45] ^= s, a = k ^ (nt << 1 | rt >>> 31), s = m ^ (rt << 1 | nt >>> 31), t[6] ^= a, t[7] ^= s, t[16] ^= a, t[17] ^= s, t[26] ^= a, t[27] ^= s, t[36] ^= a, t[37] ^= s, t[46] ^= a, t[47] ^= s, a = M ^ (l << 1 | u >>> 31), s = et ^ (u << 1 | l >>> 31), t[8] ^= a, t[9] ^= s, t[18] ^= a, t[19] ^= s, t[28] ^= a, t[29] ^= s, t[38] ^= a, t[39] ^= s, t[48] ^= a, t[49] ^= s, at = t[0], ot = t[1], Rt = t[11] << 4 | t[10] >>> 28, Ft = t[10] << 4 | t[11] >>> 28, Et = t[20] << 3 | t[21] >>> 29, pt = t[21] << 3 | t[20] >>> 29, Jt = t[31] << 9 | t[30] >>> 23, Zt = t[30] << 9 | t[31] >>> 23, Lt = t[40] << 18 | t[41] >>> 14, Dt = t[41] << 18 | t[40] >>> 14, gt = t[2] << 1 | t[3] >>> 31, vt = t[3] << 1 | t[2] >>> 31, it = t[13] << 12 | t[12] >>> 20, st = t[12] << 12 | t[13] >>> 20, Ct = t[22] << 10 | t[23] >>> 22, Ut = t[23] << 10 | t[22] >>> 22, yt = t[33] << 13 | t[32] >>> 19, St = t[32] << 13 | t[33] >>> 19, Qt = t[42] << 2 | t[43] >>> 30, Xt = t[43] << 2 | t[42] >>> 30, Wt = t[5] << 30 | t[4] >>> 2, Ht = t[4] << 30 | t[5] >>> 2, Mt = t[14] << 6 | t[15] >>> 26, Nt = t[15] << 6 | t[14] >>> 26, ct = t[25] << 11 | t[24] >>> 21, ft = t[24] << 11 | t[25] >>> 21, Pt = t[34] << 15 | t[35] >>> 17, $t = t[35] << 15 | t[34] >>> 17, Bt = t[45] << 29 | t[44] >>> 3, bt = t[44] << 29 | t[45] >>> 3, _t = t[6] << 28 | t[7] >>> 4, wt = t[7] << 28 | t[6] >>> 4, Vt = t[17] << 23 | t[16] >>> 9, qt = t[16] << 23 | t[17] >>> 9, kt = t[26] << 25 | t[27] >>> 7, xt = t[27] << 25 | t[26] >>> 7, lt = t[36] << 21 | t[37] >>> 11, ut = t[37] << 21 | t[36] >>> 11, Kt = t[47] << 24 | t[46] >>> 8, jt = t[46] << 24 | t[47] >>> 8, It = t[8] << 27 | t[9] >>> 5, zt = t[9] << 27 | t[8] >>> 5, mt = t[18] << 20 | t[19] >>> 12, At = t[19] << 20 | t[18] >>> 12, Gt = t[29] << 7 | t[28] >>> 25, Yt = t[28] << 7 | t[29] >>> 25, Tt = t[38] << 8 | t[39] >>> 24, Ot = t[39] << 8 | t[38] >>> 24, ht = t[48] << 14 | t[49] >>> 18, dt = t[49] << 14 | t[48] >>> 18, t[0] = at ^ ~it & ct, t[1] = ot ^ ~st & ft, t[10] = _t ^ ~mt & Et, t[11] = wt ^ ~At & pt, t[20] = gt ^ ~Mt & kt, t[21] = vt ^ ~Nt & xt, t[30] = It ^ ~Rt & Ct, t[31] = zt ^ ~Ft & Ut, t[40] = Wt ^ ~Vt & Gt, t[41] = Ht ^ ~qt & Yt, t[2] = it ^ ~ct & lt, t[3] = st ^ ~ft & ut, t[12] = mt ^ ~Et & yt, t[13] = At ^ ~pt & St, t[22] = Mt ^ ~kt & Tt, t[23] = Nt ^ ~xt & Ot, t[32] = Rt ^ ~Ct & Pt, t[33] = Ft ^ ~Ut & $t, t[42] = Vt ^ ~Gt & Jt, t[43] = qt ^ ~Yt & Zt, t[4] = ct ^ ~lt & ht, t[5] = ft ^ ~ut & dt, t[14] = Et ^ ~yt & Bt, t[15] = pt ^ ~St & bt, t[24] = kt ^ ~Tt & Lt, t[25] = xt ^ ~Ot & Dt, t[34] = Ct ^ ~Pt & Kt, t[35] = Ut ^ ~$t & jt, t[44] = Gt ^ ~Jt & Qt, t[45] = Yt ^ ~Zt & Xt, t[6] = lt ^ ~ht & at, t[7] = ut ^ ~dt & ot, t[16] = yt ^ ~Bt & _t, t[17] = St ^ ~bt & wt, t[26] = Tt ^ ~Lt & gt, t[27] = Ot ^ ~Dt & vt, t[36] = Pt ^ ~Kt & It, t[37] = $t ^ ~jt & zt, t[46] = Jt ^ ~Qt & Wt, t[47] = Zt ^ ~Xt & Ht, t[8] = ht ^ ~at & it, t[9] = dt ^ ~ot & st, t[18] = Bt ^ ~_t & mt, t[19] = bt ^ ~wt & At, t[28] = Lt ^ ~gt & Mt, t[29] = Dt ^ ~vt & Nt, t[38] = Kt ^ ~It & Rt, t[39] = jt ^ ~zt & Ft, t[48] = Qt ^ ~Wt & Vt, t[49] = Xt ^ ~Ht & qt, t[0] ^= y[c], t[1] ^= y[c + 1];
      };
      if (S)
        e.exports = K;
      else
        for (j = 0; j < Y.length; ++j)
          i[Y[j]] = K[Y[j]];
    })();
  })(re)), re.exports;
}
var Ue = Ce();
let P = null, A = null, H = null, $ = {
  default: null,
  zh: null
}, W = { s2t: null, t2s: null };
const Pe = 32, G = { s2t: /* @__PURE__ */ new Map(), t2s: /* @__PURE__ */ new Map() };
function se(e, n) {
  return e.get(n);
}
function ce(e, n, r) {
  if (e.size >= Pe && !e.has(n)) {
    const o = e.keys().next();
    o.done || e.delete(o.value);
  }
  e.set(n, r);
}
async function fe(e) {
  const n = se(G.s2t, e);
  if (n !== void 0) return n;
  const { s2t: r } = await xe(), o = r(e);
  return ce(G.s2t, e, o), o;
}
async function $e(e) {
  const n = se(G.t2s, e);
  if (n !== void 0) return n;
  const { t2s: r } = await xe(), o = r(e);
  return ce(G.t2s, e, o), o;
}
function ke(e) {
  if (!W.t2s) return e;
  const n = se(G.t2s, e);
  if (n !== void 0) return n;
  const r = W.t2s(e);
  return ce(G.t2s, e, r), r;
}
async function xe() {
  if (W.s2t && W.t2s) return W;
  try {
    const e = await import("./full-BL_hSXNm.js"), n = e?.default || e, r = await n.Converter({ from: "cn", to: "tw" }), o = await n.Converter({ from: "tw", to: "cn" });
    W = { s2t: r, t2s: o };
  } catch (e) {
    console.warn("[aifw] opencc-js not available, fallback to identity conversion", e), W = { s2t: (n) => n, t2s: (n) => n };
  }
  return W;
}
function Te(e) {
  const n = String(e || "").toLowerCase();
  return n === "zh" || n === "zh-cn" ? !0 : !(!n.startsWith("zh-") || n.includes("hant") || n.includes("tw") || n.includes("hk"));
}
function Ke(e) {
  if (!e) return 0;
  let n = 0, r = 0;
  for (let o = 0; o < e.length; ) {
    const i = e.codePointAt(o), f = i > 65535 ? 2 : 1;
    r += 1, (i >= 19968 && i <= 40959 || i >= 13312 && i <= 19903 || i >= 63744 && i <= 64255) && (n += 1), o += f;
  }
  return r ? n / r : 0;
}
function je(e) {
  if (!e) return 0;
  let n = 0, r = 0;
  for (let o = 0; o < e.length; o++) {
    const i = e.charCodeAt(o);
    r += 1, (i >= 65 && i <= 90 || i >= 97 && i <= 122) && (n += 1);
  }
  return r ? n / r : 0;
}
function We(e) {
  const n = Ke(e), r = je(e);
  return n >= 0.3 ? "zh" : r >= 0.5 ? "en" : "other";
}
const He = /* @__PURE__ */ new Set([
  "后",
  "发",
  "台",
  "里",
  "复",
  "面",
  "余",
  "划",
  "钟",
  "观",
  "厂",
  "广",
  "圆",
  "国",
  "东",
  "乐",
  "云",
  "内",
  "两",
  "丢",
  "为",
  "价",
  "众",
  "优",
  "冲",
  "况",
  "刘",
  "师",
  "于",
  "亏",
  "仅",
  "从",
  "兴",
  "举",
  "义",
  "乌",
  "专"
]), Ve = /* @__PURE__ */ new Set([
  "後",
  "發",
  "臺",
  "裡",
  "複",
  "麵",
  "餘",
  "劃",
  "鐘",
  "觀",
  "廠",
  "廣",
  "圓",
  "國",
  "東",
  "樂",
  "雲",
  "內",
  "兩",
  "丟",
  "為",
  "價",
  "眾",
  "優",
  "衝",
  "況",
  "劉",
  "師",
  "於",
  "虧",
  "僅",
  "從",
  "興",
  "舉",
  "義",
  "烏",
  "專"
]), qe = ["开发", "软件", "后端", "互联网", "应用", "运维", "里程", "联系", "台阶", "复用"], Ge = ["開發", "軟體", "後端", "網際網路", "應用", "運維", "聯繫", "臺階", "複用"];
function Ye(e) {
  let n = 0, r = 0;
  for (const o of e)
    He.has(o) && n++, Ve.has(o) && r++;
  for (const o of qe) e.includes(o) && (n += 2);
  for (const o of Ge) e.includes(o) && (r += 2);
  return { sScore: n, tScore: r };
}
function Je(e) {
  const { sScore: n, tScore: r } = Ye(e);
  return n - r >= 2 ? "Hans" : r - n >= 2 ? "Hant" : null;
}
function Ee(e, n) {
  if (e === n) return 0;
  const r = Math.min(e.length, n.length);
  let o = Math.abs(e.length - n.length);
  for (let i = 0; i < r; i++) e[i] !== n[i] && o++;
  return r ? o / Math.max(e.length, n.length) : 1;
}
async function Ze(e) {
  const n = await fe(e), r = await $e(e), o = n !== e, i = r !== e;
  if (o && !i) return "Hans";
  if (!o && i) return "Hant";
  const f = Ee(e, r), d = Ee(e, n);
  return f <= d ? "Hans" : "Hant";
}
async function Oe(e) {
  const n = We(e || "");
  if (n !== "zh") return { lang: n, script: null, confidence: n === "en" ? 0.9 : 0.6, method: "heuristic" };
  const r = Je(e || "");
  return r ? { lang: "zh", script: r, confidence: 0.8, method: "heuristic" } : { lang: "zh", script: await Ze(e || ""), confidence: 0.95, method: "opencc" };
}
class Qe {
  constructor(n, r, o, i) {
    this.entity_id = n >>> 0, this.entity_type = r >>> 0, this.matched_start = o >>> 0, this.matched_end = i >>> 0;
  }
}
function le(e) {
  const r = new TextEncoder().encode(e || ""), o = r.length + 1, i = A.aifw_malloc(o);
  if (!i) throw new Error("aifw_malloc failed");
  const f = new Uint8Array(A.memory.buffer, i, o);
  return f.set(r, 0), f[r.length] = 0, { ptr: i, size: o };
}
function Le(e) {
  const n = new Uint8Array(A.memory.buffer);
  let r = e;
  for (; n[r] !== 0; ) r++;
  return new TextDecoder().decode(n.subarray(e, r));
}
function R(e, n) {
  !e || !n || A.aifw_free_sized(e, n);
}
async function Xe() {
  const e = {
    env: {
      js_log(S, _, E) {
        try {
          const I = new Uint8Array(A.memory?.buffer || new ArrayBuffer(0)), O = new Uint8Array(I.buffer, _, E), b = new TextDecoder().decode(O), v = ["ERR", "WRN", "INF", "DBG"][S] || "LOG";
          console.log(`[aifw_core:${v}]`, b);
        } catch {
        }
      }
    }
  }, n = new URL(
    /* @vite-ignore */
    "./wasm/liboneaifw_core.wasm",
    import.meta.url
  ).toString(), r = (n.includes("?") ? "&" : "?") + "v=" + Date.now(), o = await fetch(n + r, { cache: "no-store" });
  if (!o.ok) throw new Error(`fetch core wasm failed: ${o.status}`);
  const i = await o.arrayBuffer(), { instance: f } = await WebAssembly.instantiate(i, e), d = f.exports;
  return (!d.aifw_malloc || !d.aifw_free_sized) && console.warn("alloc exports missing; available exports:", Object.keys(d)), d;
}
const tn = "https://raw.githubusercontent.com/funstory-ai/OneAIFW-Assets/main/", en = "https://huggingface.co/immersiveL/OneAIFW-Assets/resolve/main/", nn = "https://www.modelscope.cn/models/awwaawwa/OneAIFW-Assets/resolve/master/", oe = "0.3.1", D = "models/", rn = "managed", an = "managed", on = "managed", pe = "funstory-ai/neurobert-mini", ye = "0xa7c4bfc5e2b7cfdfce2012b38e6eca712b433c4ed47ffc973ee9e3964056834a", Se = "ckiplab/bert-tiny-chinese-ner", Be = "0x0d723d495d0365236e12e51abbcb97407e8d1f51ec3154656e9267de31fc9ce6", te = "wasm/", be = "ort-wasm-simd.wasm", ge = 1, ve = !0, Me = "0x0c1482593eb573d11e6e6c5539cf5436a323e4d49b843135317f053ab0523277";
function ie(e, n) {
  const r = String(e || "").split(".").map((f) => parseInt(f, 10) || 0), o = String(n || "").split(".").map((f) => parseInt(f, 10) || 0), i = Math.max(r.length, o.length);
  for (let f = 0; f < i; f++) {
    const d = r[f] || 0, S = o[f] || 0;
    if (d > S) return 1;
    if (d < S) return -1;
  }
  return 0;
}
async function ae(e) {
  const n = e instanceof ArrayBuffer ? new Uint8Array(e) : e instanceof Uint8Array ? e : new Uint8Array(e), r = Ue.sha3_256.create();
  return r.update(n), "0x" + r.hex();
}
async function Q(e, n) {
  try {
    if (typeof caches < "u" && caches?.open) {
      const o = await caches.open(n);
      let i = await o.match(e);
      if (i && i.ok) return i.clone();
      if (i = await fetch(e, { cache: "no-store" }), !i.ok) throw new Error(`fetch ${e} failed: ${i.status}`);
      return await o.put(e, i.clone()), i.clone();
    }
  } catch (o) {
    console.warn("[aifw-js] CacheStorage not available or failed, fallback to network", o);
  }
  const r = await fetch(e, { cache: "no-store" });
  if (!r.ok) throw new Error(`fetch ${e} failed: ${r.status}`);
  return r;
}
async function sn({ assetsBase: e, enModelId: n, zhModelId: r, ortName: o, remoteVersion: i }) {
  if (!i) throw new Error("[aifw-js] invalid assets source: missing version in hello.json");
  if (ie(oe, i) > 0)
    throw new Error(`[aifw-js] assets version too old: required<=${oe}, got ${i}`);
  const f = `oneaifw-assets-v${i}`;
  try {
    await Q(e + "hello.json", f);
  } catch {
  }
  const d = e + `${D}${n}/onnx/model_quantized.onnx`, _ = await (await Q(d, f)).arrayBuffer(), E = await ae(_);
  if (E.toLowerCase() !== ye.toLowerCase())
    throw new Error(`[aifw-js] EN model hash mismatch: got ${E}, expected ${ye}`);
  const I = e + `${D}${r}/onnx/model_quantized.onnx`, b = await (await Q(I, f)).arrayBuffer(), v = await ae(b);
  if (v.toLowerCase() !== Be.toLowerCase())
    throw new Error(`[aifw-js] ZH model hash mismatch: got ${v}, expected ${Be}`);
  const p = e + `${te}${o}`, g = await (await Q(p, f)).arrayBuffer(), x = await ae(g);
  if (x.toLowerCase() !== Me.toLowerCase())
    throw new Error(`[aifw-js] ORT wasm hash mismatch: got ${x}, expected ${Me}`);
  async function L(B) {
    const z = e + `${D}${B}/`, T = [
      "tokenizer.json",
      "tokenizer_config.json",
      "config.json",
      "special_tokens_map.json",
      "vocab.txt"
    ];
    for (const F of T) {
      const C = z + F, U = await Q(C, f);
      if (!U.ok) throw new Error(`[aifw-js] prefetch failed: ${C} status=${U.status}`);
    }
  }
  return await L(n), await L(r), { remoteVersion: i, cacheName: f };
}
async function cn(e, n, r) {
  if (typeof caches > "u" || !caches?.keys) return null;
  const f = (await caches.keys()).filter((_) => typeof _ == "string" && _.startsWith("oneaifw-assets-v")).sort((_, E) => ie(E.slice(18), _.slice(18))).filter((_) => ie(_.slice(18), oe) >= 0), d = [
    `${D}${e}/onnx/model_quantized.onnx`,
    `${D}${n}/onnx/model_quantized.onnx`,
    `${te}${r}`
  ], S = [
    `${D}${e}/tokenizer.json`,
    `${D}${e}/tokenizer_config.json`,
    `${D}${e}/config.json`,
    `${D}${e}/special_tokens_map.json`,
    `${D}${e}/vocab.txt`,
    `${D}${n}/tokenizer.json`,
    `${D}${n}/tokenizer_config.json`,
    `${D}${n}/config.json`,
    `${D}${n}/special_tokens_map.json`,
    `${D}${n}/vocab.txt`
  ];
  for (const _ of f)
    try {
      const E = await caches.open(_), I = await E.keys();
      if (!I?.length) continue;
      const O = /* @__PURE__ */ new Map();
      for (const b of I) {
        const v = b.url;
        for (const p of d)
          if (v.endsWith(p)) {
            const y = v.slice(0, v.length - p.length);
            O.has(p) || O.set(p, y);
          }
      }
      if (d.every((b) => O.has(b))) {
        const b = d.map((g) => O.get(g));
        if (!b.every((g) => g === b[0])) continue;
        const p = b[0];
        if (!await (async () => {
          for (const g of S)
            if (!await E.match(new Request(p + g))) return !1;
          return !0;
        })()) continue;
        return { assetsBase: p, cacheName: _ };
      }
    } catch {
    }
  return null;
}
async function fn() {
  const n = [
    en,
    tn,
    nn
  ].map((r) => (async () => {
    const o = r + "hello.json", i = await fetch(o, { cache: "no-store" });
    if (!i.ok) throw new Error(`hello.json not ok from ${o}: ${i.status}`);
    const f = await i.json().catch(() => {
      throw new Error(`invalid hello.json from ${o}`);
    }), d = String(f?.version || "");
    if (!d) throw new Error(`missing version in hello.json from ${o}`);
    return { assetsBase: r, remoteVersion: d };
  })());
  try {
    return await Promise.any(n);
  } catch {
    throw new Error("[aifw-js] all managed asset sources failed for hello.json");
  }
}
function ln(e) {
  let p = 0;
  typeof A.aifw_default_mask_bits == "function" && (p = A.aifw_default_mask_bits() >>> 0);
  function y(g, x) {
    g === !0 ? p |= x : g === !1 && (p &= ~x);
  }
  return y(e.maskAddress, 1), y(e.maskEmail, 2), y(e.maskOrganization, 4), y(e.maskUserName, 8), y(e.maskPhoneNumber, 16), y(e.maskBankNumber, 32), y(e.maskPayment, 64), y(e.maskVerificationCode, 128), y(e.maskPassword, 256), y(e.maskRandomSeed, 512), y(e.maskPrivateKey, 1024), y(e.maskUrl, 2048), y(e.maskAll, 4095), p >>> 0;
}
async function mn(e = {}) {
  let n = e.wasmBase, r = e.modelsBase;
  const o = e.mode || rn, i = e.models || { mode: an }, f = e.ort || { mode: on };
  o === "managed" && (n || r) && (console.warn("[aifw-js] mode=managed is not compatible with legacy wasmBase or modelsBase, ignoring legacy settings."), n = void 0, r = void 0), o === "managed" && (i.mode === "customize" || f.mode === "customize") && (console.warn("[aifw-js] mode=managed is not compatible with customize mode, ignoring customize settings."), i.mode = "managed", f.mode = "managed");
  const d = i.mode || o, S = f.mode || o;
  let _ = f.wasmBase;
  const E = S === "managed" ? be : f.ortName || be, I = S === "managed" ? ge : f.threads || ge, O = S === "managed" ? ve : f.simd || ve;
  if (S === "customize" && !_)
    throw new Error("[aifw-js] ort.mode=customize requires ort.wasmBase");
  let b = i.modelsBase;
  const v = d === "managed" ? pe : i.enModelId || pe, p = d === "managed" ? Se : i.zhModelId || Se;
  if (d === "customize" && !b)
    throw new Error("[aifw-js] models.mode=customize requires models.modelsBase");
  let y = null;
  if (d === "managed" || S === "managed") {
    const T = await cn(v, p, E);
    if (T?.assetsBase && T?.cacheName) {
      const F = T.assetsBase;
      d === "managed" && (b = F + D), S === "managed" && (_ = F + te), y = T.cacheName;
    } else {
      const F = await fn(), C = F.assetsBase, U = F.remoteVersion;
      d === "managed" && (b = C + D), S === "managed" && (_ = C + te);
      const { cacheName: V } = await sn({
        assetsBase: C,
        enModelId: v,
        zhModelId: p,
        ortName: E,
        remoteVersion: U
      });
      y = V;
    }
  }
  console.info("[aifw-js] modelsBase:", b), console.info("[aifw-js] ortWasmBase:", _), A = await Xe();
  const g = e.maskConfig || {}, x = ln(g);
  H = await import("./libner-CQY3y5GO.js");
  const L = {};
  L.wasmBase = _, L.modelsBase = b, L.threads = I, L.simd = O, y && (L.customCache = { name: y }), H.initEnv(L);
  const [B, z] = await Promise.all([
    H.buildNerPipeline(v, { quantized: !0 }).catch((T) => (console.warn("load EN model failed", T), null)),
    H.buildNerPipeline(p, { quantized: !0 }).catch((T) => (console.warn("load ZH model failed", T), null))
  ]);
  $.default = B, $.zh = z || B, z || console.warn("load zh NER model failed, using en model instead."), P = await un(x);
}
async function An() {
  P && await hn(P), A.aifw_shutdown(), P = null, $ = { default: null, zh: null }, H = null, A = null;
}
async function un(e) {
  if (!A) throw new Error("AIFW not initialized");
  const n = 8, r = new Uint8Array(n), o = A.aifw_malloc(r.length);
  if (!o) throw new Error("aifw_malloc failed for SessionInitArgs");
  new Uint8Array(A.memory.buffer, o, r.length).set(r);
  const f = new DataView(A.memory.buffer);
  f.setUint32(o + 0, e >>> 0, !0), f.setUint8(o + 4, 0);
  let d = {};
  try {
    if (d.handle = A.aifw_session_create(o), !d.handle) throw new Error("session_create failed");
  } finally {
    R(o, r.length);
  }
  return d;
}
async function hn(e) {
  if (!A || !e?.handle) throw new Error("invalid session handle");
  try {
    A.aifw_session_destroy(e.handle);
  } finally {
    e.handle = 0;
  }
}
function De(e) {
  const n = String(e || "").toLowerCase();
  return n === "zh" || n.startsWith("zh-") ? (console.debug("[aifw-js] select zh NER pipeline."), $.zh || $.default) : (console.debug("[aifw-js] select en NER pipeline.", $.default), $.default);
}
async function Ne(e, n) {
  if (!A || !P?.handle) throw new Error("invalid session handle");
  let r = n;
  if (r == null || r === "" || r === "auto") {
    const _ = await Oe(e || "");
    _.lang === "zh" ? r = _.script === "Hant" ? "zh-TW" : "zh-CN" : r = _.lang || "en";
  }
  const o = De(r);
  if (!o) throw new Error("NER pipeline not ready");
  let i = null, f = null, d = 0, S = 0;
  try {
    i = le(e);
    let _ = e, E;
    o === $.zh && Te(r) && (_ = await fe(e), E = { offsetText: e, tokenTransform: (z) => ke(z) });
    const I = await o.run(_, E);
    f = H.buildNerEntitiesBuffer(A, I, e), d = A.aifw_malloc(4), S = A.aifw_malloc(4);
    const O = (() => {
      const B = String(r || "").toLowerCase();
      return B.startsWith("en") ? 1 : B.startsWith("ja") ? 2 : B.startsWith("ko") ? 3 : B === "zh" ? 4 : B === "zh-cn" ? 5 : B === "zh-tw" ? 6 : B === "zh-hk" ? 7 : B === "zh-hans" ? 8 : B === "zh-hant" ? 9 : B.startsWith("fr") ? 10 : B.startsWith("de") ? 11 : B.startsWith("ru") ? 12 : B.startsWith("es") ? 13 : B.startsWith("it") ? 14 : B.startsWith("ar") ? 15 : B.startsWith("pt") ? 16 : 0;
    })(), b = A.aifw_session_mask_and_out_meta(P.handle, i.ptr, f.ptr, f.count >>> 0, O >>> 0, d, S);
    if (b !== 0) throw new Error(`mask failed rc=${b}`);
    const v = new DataView(A.memory.buffer).getUint32(d, !0), p = Le(v);
    A.aifw_string_free(v);
    const y = new DataView(A.memory.buffer).getUint32(S, !0), g = new DataView(A.memory.buffer).getUint32(y, !0), x = new Uint8Array(g), L = new Uint8Array(A.memory.buffer, y, g);
    return x.set(L), R(y, g), [p, x];
  } finally {
    if (d && R(d, 4), S && R(S, 4), f?.ptr && R(f.ptr, f.byteSize), f?.owned) for (const _ of f.owned) R(_.ptr, _.size);
    i && R(i.ptr, i.size);
  }
}
async function dn(e, n) {
  if (!A || !P?.handle) throw new Error("invalid session");
  let r = null, o = 0, i = 0, f = 0;
  try {
    r = le(e);
    const d = n instanceof Uint8Array ? n : new Uint8Array(n);
    if (d.length < 4) throw new Error("invalid maskMeta");
    if (f = d.length, i = A.aifw_malloc(f), !i) throw new Error("aifw_malloc failed (meta)");
    new Uint8Array(A.memory.buffer, i, f).set(d), o = A.aifw_malloc(4);
    const S = A.aifw_session_restore_with_meta(P.handle, r.ptr, i, o);
    if (S !== 0) throw new Error(`restore failed rc=${S}`);
    const _ = new DataView(A.memory.buffer).getUint32(o, !0), E = _ ? Le(_) : "";
    return _ && A.aifw_string_free(_), E;
  } finally {
    o && R(o, 4), r && R(r.ptr, r.size);
  }
}
async function En(e) {
  if (!Array.isArray(e)) throw new Error("maskTextBatch: textAndLanguageArray must be an array");
  const n = e.map(async (o) => {
    if (typeof o == "string") return Ne(String(o || ""), null);
    const { text: i, language: f } = o || {}, d = f == null || f === "" || f === "auto" ? null : f;
    return Ne(String(i || ""), d);
  });
  return (await Promise.all(n)).map(([o, i]) => ({ text: o, maskMeta: i }));
}
async function pn(e) {
  if (!Array.isArray(e)) throw new Error("restoreTextBatch: textAndMaskMetaArray must be an array");
  const n = e.map((o) => {
    const i = o || {};
    return dn(String(i.text || ""), i.maskMeta);
  });
  return (await Promise.all(n)).map((o) => ({ text: o }));
}
async function yn(e, n) {
  if (!A || !P?.handle) throw new Error("invalid session handle");
  let r = n;
  if (r == null || r === "" || r === "auto") {
    const _ = await Oe(e || "");
    _.lang === "zh" ? r = _.script === "Hant" ? "zh-TW" : "zh-CN" : r = _.lang || "en";
  }
  const o = De(r);
  if (!o) throw new Error("NER pipeline not ready");
  let i = null, f = null, d = 0, S = 0;
  try {
    i = le(e);
    let _ = e, E;
    o === $.zh && Te(r) && (_ = await fe(e), E = { offsetText: e, tokenTransform: (T) => ke(T) });
    const I = await o.run(_, E);
    f = H.buildNerEntitiesBuffer(A, I, e), d = A.aifw_malloc(4), S = A.aifw_malloc(4);
    const O = (() => {
      const z = String(r || "").toLowerCase();
      return z.startsWith("zh") ? 1 : z.startsWith("en") ? 2 : 0;
    })(), b = A.aifw_session_get_pii_spans(P.handle, i.ptr, f.ptr, f.count >>> 0, O >>> 0, d, S);
    if (b !== 0) throw new Error(`get_pii_spans failed rc=${b}`);
    const v = new DataView(A.memory.buffer), p = v.getUint32(d, !0), y = v.getUint32(S, !0), g = 16, x = new Uint8Array(A.memory.buffer, p, y * g), L = [], B = new DataView(x.buffer, x.byteOffset, x.byteLength);
    for (let z = 0; z < y; z++) {
      const T = z * g, F = B.getUint32(T + 0, !0), C = B.getUint8(T + 4), U = B.getUint32(T + 8, !0), V = B.getUint32(T + 12, !0);
      L.push(new Qe(F, C, U, V));
    }
    return p && y && R(p, y * g), L;
  } finally {
    if (d && R(d, 4), S && R(S, 4), f?.ptr && R(f.ptr, f.byteSize), f?.owned) for (const _ of f.owned) R(_.ptr, _.size);
    i && R(i.ptr, i.size);
  }
}
export {
  Qe as M,
  _n as a,
  An as b,
  En as c,
  Oe as d,
  pn as e,
  yn as f,
  wn as g,
  mn as i,
  Ne as m,
  dn as r
};
