var Te = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function dn(e) {
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
var ye;
function Re() {
  return ye || (ye = 1, (function(e) {
    (function() {
      var n = "input is invalid type", r = "finalize already called", o = typeof window == "object", i = o ? window : {};
      i.JS_SHA3_NO_WINDOW && (o = !1);
      var f = !o && typeof self == "object", m = !i.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
      m ? i = Te : f && (i = self);
      for (var _ = !i.JS_SHA3_NO_COMMON_JS && !0 && e.exports, d = !i.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", b = "0123456789abcdef".split(""), M = [31, 7936, 2031616, 520093696], D = [4, 1024, 262144, 67108864], A = [1, 256, 65536, 16777216], x = [6, 1536, 393216, 100663296], v = [0, 8, 16, 24], k = [
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
      ], S = [224, 256, 384, 512], F = [128, 256], N = ["hex", "buffer", "arrayBuffer", "array", "digest"], g = {
        128: 168,
        256: 136
      }, O = i.JS_SHA3_NO_NODE_JS || !Array.isArray ? function(t) {
        return Object.prototype.toString.call(t) === "[object Array]";
      } : Array.isArray, j = d && (i.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) ? function(t) {
        return typeof t == "object" && t.buffer && t.buffer.constructor === ArrayBuffer;
      } : ArrayBuffer.isView, R = function(t) {
        var a = typeof t;
        if (a === "string")
          return [t, !0];
        if (a !== "object" || t === null)
          throw new Error(n);
        if (d && t.constructor === ArrayBuffer)
          return [new Uint8Array(t), !1];
        if (!O(t) && !j(t))
          throw new Error(n);
        return [t, !1];
      }, U = function(t) {
        return R(t)[0].length === 0;
      }, P = function(t) {
        for (var a = [], c = 0; c < t.length; ++c)
          a[c] = t[c];
        return a;
      }, Q = function(t, a, c) {
        return function(s) {
          return new B(t, a, t).update(s)[c]();
        };
      }, ue = function(t, a, c) {
        return function(s, l) {
          return new B(t, a, l).update(s)[c]();
        };
      }, he = function(t, a, c) {
        return function(s, l, u, w) {
          return I["cshake" + t].update(s, l, u, w)[c]();
        };
      }, de = function(t, a, c) {
        return function(s, l, u, w) {
          return I["kmac" + t].update(s, l, u, w)[c]();
        };
      }, X = function(t, a, c, s) {
        for (var l = 0; l < N.length; ++l) {
          var u = N[l];
          t[u] = a(c, s, u);
        }
        return t;
      }, we = function(t, a) {
        var c = Q(t, a, "hex");
        return c.create = function() {
          return new B(t, a, t);
        }, c.update = function(s) {
          return c.create().update(s);
        }, X(c, Q, t, a);
      }, $e = function(t, a) {
        var c = ue(t, a, "hex");
        return c.create = function(s) {
          return new B(t, a, s);
        }, c.update = function(s, l) {
          return c.create(l).update(s);
        }, X(c, ue, t, a);
      }, je = function(t, a) {
        var c = g[t], s = he(t, a, "hex");
        return s.create = function(l, u, w) {
          return U(u) && U(w) ? I["shake" + t].create(l) : new B(t, a, l).bytepad([u, w], c);
        }, s.update = function(l, u, w, h) {
          return s.create(u, w, h).update(l);
        }, X(s, he, t, a);
      }, Ne = function(t, a) {
        var c = g[t], s = de(t, a, "hex");
        return s.create = function(l, u, w) {
          return new ne(t, a, u).bytepad(["KMAC", w], c).bytepad([l], c);
        }, s.update = function(l, u, w, h) {
          return s.create(l, w, h).update(u);
        }, X(s, de, t, a);
      }, me = [
        { name: "keccak", padding: A, bits: S, createMethod: we },
        { name: "sha3", padding: x, bits: S, createMethod: we },
        { name: "shake", padding: M, bits: F, createMethod: $e },
        { name: "cshake", padding: D, bits: F, createMethod: je },
        { name: "kmac", padding: D, bits: F, createMethod: Ne }
      ], I = {}, J = [], W = 0; W < me.length; ++W)
        for (var V = me[W], tt = V.bits, K = 0; K < tt.length; ++K) {
          var ee = V.name + "_" + tt[K];
          if (J.push(ee), I[ee] = V.createMethod(tt[K], V.padding), V.name !== "sha3") {
            var pe = V.name + tt[K];
            J.push(pe), I[pe] = I[ee];
          }
        }
      function B(t, a, c) {
        this.blocks = [], this.s = [], this.padding = a, this.outputBits = c, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (t << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = c >> 5, this.extraBytes = (c & 31) >> 3;
        for (var s = 0; s < 50; ++s)
          this.s[s] = 0;
      }
      B.prototype.update = function(t) {
        if (this.finalized)
          throw new Error(r);
        var a = R(t);
        t = a[0];
        for (var c = a[1], s = this.blocks, l = this.byteCount, u = t.length, w = this.blockCount, h = 0, z = this.s, p, E; h < u; ) {
          if (this.reset)
            for (this.reset = !1, s[0] = this.block, p = 1; p < w + 1; ++p)
              s[p] = 0;
          if (c)
            for (p = this.start; h < u && p < l; ++h)
              E = t.charCodeAt(h), E < 128 ? s[p >> 2] |= E << v[p++ & 3] : E < 2048 ? (s[p >> 2] |= (192 | E >> 6) << v[p++ & 3], s[p >> 2] |= (128 | E & 63) << v[p++ & 3]) : E < 55296 || E >= 57344 ? (s[p >> 2] |= (224 | E >> 12) << v[p++ & 3], s[p >> 2] |= (128 | E >> 6 & 63) << v[p++ & 3], s[p >> 2] |= (128 | E & 63) << v[p++ & 3]) : (E = 65536 + ((E & 1023) << 10 | t.charCodeAt(++h) & 1023), s[p >> 2] |= (240 | E >> 18) << v[p++ & 3], s[p >> 2] |= (128 | E >> 12 & 63) << v[p++ & 3], s[p >> 2] |= (128 | E >> 6 & 63) << v[p++ & 3], s[p >> 2] |= (128 | E & 63) << v[p++ & 3]);
          else
            for (p = this.start; h < u && p < l; ++h)
              s[p >> 2] |= t[h] << v[p++ & 3];
          if (this.lastByteIndex = p, p >= l) {
            for (this.start = p - l, this.block = s[w], p = 0; p < w; ++p)
              z[p] ^= s[p];
            Z(z), this.reset = !0;
          } else
            this.start = p;
        }
        return this;
      }, B.prototype.encode = function(t, a) {
        var c = t & 255, s = 1, l = [c];
        for (t = t >> 8, c = t & 255; c > 0; )
          l.unshift(c), t = t >> 8, c = t & 255, ++s;
        return a ? l.push(s) : l.unshift(s), this.update(l), l.length;
      }, B.prototype.encodeString = function(t) {
        var a = R(t);
        t = a[0];
        var c = a[1], s = 0, l = t.length;
        if (c)
          for (var u = 0; u < t.length; ++u) {
            var w = t.charCodeAt(u);
            w < 128 ? s += 1 : w < 2048 ? s += 2 : w < 55296 || w >= 57344 ? s += 3 : (w = 65536 + ((w & 1023) << 10 | t.charCodeAt(++u) & 1023), s += 4);
          }
        else
          s = l;
        return s += this.encode(s * 8), this.update(t), s;
      }, B.prototype.bytepad = function(t, a) {
        for (var c = this.encode(a), s = 0; s < t.length; ++s)
          c += this.encodeString(t[s]);
        var l = (a - c % a) % a, u = [];
        return u.length = l, this.update(u), this;
      }, B.prototype.finalize = function() {
        if (!this.finalized) {
          this.finalized = !0;
          var t = this.blocks, a = this.lastByteIndex, c = this.blockCount, s = this.s;
          if (t[a >> 2] |= this.padding[a & 3], this.lastByteIndex === this.byteCount)
            for (t[0] = t[c], a = 1; a < c + 1; ++a)
              t[a] = 0;
          for (t[c - 1] |= 2147483648, a = 0; a < c; ++a)
            s[a] ^= t[a];
          Z(s);
        }
      }, B.prototype.toString = B.prototype.hex = function() {
        this.finalize();
        for (var t = this.blockCount, a = this.s, c = this.outputBlocks, s = this.extraBytes, l = 0, u = 0, w = "", h; u < c; ) {
          for (l = 0; l < t && u < c; ++l, ++u)
            h = a[l], w += b[h >> 4 & 15] + b[h & 15] + b[h >> 12 & 15] + b[h >> 8 & 15] + b[h >> 20 & 15] + b[h >> 16 & 15] + b[h >> 28 & 15] + b[h >> 24 & 15];
          u % t === 0 && (a = P(a), Z(a), l = 0);
        }
        return s && (h = a[l], w += b[h >> 4 & 15] + b[h & 15], s > 1 && (w += b[h >> 12 & 15] + b[h >> 8 & 15]), s > 2 && (w += b[h >> 20 & 15] + b[h >> 16 & 15])), w;
      }, B.prototype.arrayBuffer = function() {
        this.finalize();
        var t = this.blockCount, a = this.s, c = this.outputBlocks, s = this.extraBytes, l = 0, u = 0, w = this.outputBits >> 3, h;
        s ? h = new ArrayBuffer(c + 1 << 2) : h = new ArrayBuffer(w);
        for (var z = new Uint32Array(h); u < c; ) {
          for (l = 0; l < t && u < c; ++l, ++u)
            z[u] = a[l];
          u % t === 0 && (a = P(a), Z(a));
        }
        return s && (z[u] = a[l], h = h.slice(0, w)), h;
      }, B.prototype.buffer = B.prototype.arrayBuffer, B.prototype.digest = B.prototype.array = function() {
        this.finalize();
        for (var t = this.blockCount, a = this.s, c = this.outputBlocks, s = this.extraBytes, l = 0, u = 0, w = [], h, z; u < c; ) {
          for (l = 0; l < t && u < c; ++l, ++u)
            h = u << 2, z = a[l], w[h] = z & 255, w[h + 1] = z >> 8 & 255, w[h + 2] = z >> 16 & 255, w[h + 3] = z >> 24 & 255;
          u % t === 0 && (a = P(a), Z(a));
        }
        return s && (h = u << 2, z = a[l], w[h] = z & 255, s > 1 && (w[h + 1] = z >> 8 & 255), s > 2 && (w[h + 2] = z >> 16 & 255)), w;
      };
      function ne(t, a, c) {
        B.call(this, t, a, c);
      }
      ne.prototype = new B(), ne.prototype.finalize = function() {
        return this.encode(this.outputBits, !0), B.prototype.finalize.call(this);
      };
      var Z = function(t) {
        var a, c, s, l, u, w, h, z, p, E, et, nt, rt, at, ot, it, ct, st, ft, lt, ut, ht, dt, wt, mt, pt, yt, gt, bt, _t, vt, At, St, Et, xt, kt, Bt, zt, Ot, Ft, Ct, Dt, Mt, $t, jt, Nt, Tt, Rt, Ut, Lt, Pt, It, Wt, Ht, qt, Vt, Gt, Jt, Kt, Zt, Yt, Qt, Xt;
        for (s = 0; s < 48; s += 2)
          l = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], u = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], w = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], h = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], z = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], p = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], E = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], et = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], nt = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48], rt = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49], a = nt ^ (w << 1 | h >>> 31), c = rt ^ (h << 1 | w >>> 31), t[0] ^= a, t[1] ^= c, t[10] ^= a, t[11] ^= c, t[20] ^= a, t[21] ^= c, t[30] ^= a, t[31] ^= c, t[40] ^= a, t[41] ^= c, a = l ^ (z << 1 | p >>> 31), c = u ^ (p << 1 | z >>> 31), t[2] ^= a, t[3] ^= c, t[12] ^= a, t[13] ^= c, t[22] ^= a, t[23] ^= c, t[32] ^= a, t[33] ^= c, t[42] ^= a, t[43] ^= c, a = w ^ (E << 1 | et >>> 31), c = h ^ (et << 1 | E >>> 31), t[4] ^= a, t[5] ^= c, t[14] ^= a, t[15] ^= c, t[24] ^= a, t[25] ^= c, t[34] ^= a, t[35] ^= c, t[44] ^= a, t[45] ^= c, a = z ^ (nt << 1 | rt >>> 31), c = p ^ (rt << 1 | nt >>> 31), t[6] ^= a, t[7] ^= c, t[16] ^= a, t[17] ^= c, t[26] ^= a, t[27] ^= c, t[36] ^= a, t[37] ^= c, t[46] ^= a, t[47] ^= c, a = E ^ (l << 1 | u >>> 31), c = et ^ (u << 1 | l >>> 31), t[8] ^= a, t[9] ^= c, t[18] ^= a, t[19] ^= c, t[28] ^= a, t[29] ^= c, t[38] ^= a, t[39] ^= c, t[48] ^= a, t[49] ^= c, at = t[0], ot = t[1], Nt = t[11] << 4 | t[10] >>> 28, Tt = t[10] << 4 | t[11] >>> 28, gt = t[20] << 3 | t[21] >>> 29, bt = t[21] << 3 | t[20] >>> 29, Zt = t[31] << 9 | t[30] >>> 23, Yt = t[30] << 9 | t[31] >>> 23, Dt = t[40] << 18 | t[41] >>> 14, Mt = t[41] << 18 | t[40] >>> 14, Et = t[2] << 1 | t[3] >>> 31, xt = t[3] << 1 | t[2] >>> 31, it = t[13] << 12 | t[12] >>> 20, ct = t[12] << 12 | t[13] >>> 20, Rt = t[22] << 10 | t[23] >>> 22, Ut = t[23] << 10 | t[22] >>> 22, _t = t[33] << 13 | t[32] >>> 19, vt = t[32] << 13 | t[33] >>> 19, Qt = t[42] << 2 | t[43] >>> 30, Xt = t[43] << 2 | t[42] >>> 30, Ht = t[5] << 30 | t[4] >>> 2, qt = t[4] << 30 | t[5] >>> 2, kt = t[14] << 6 | t[15] >>> 26, Bt = t[15] << 6 | t[14] >>> 26, st = t[25] << 11 | t[24] >>> 21, ft = t[24] << 11 | t[25] >>> 21, Lt = t[34] << 15 | t[35] >>> 17, Pt = t[35] << 15 | t[34] >>> 17, At = t[45] << 29 | t[44] >>> 3, St = t[44] << 29 | t[45] >>> 3, wt = t[6] << 28 | t[7] >>> 4, mt = t[7] << 28 | t[6] >>> 4, Vt = t[17] << 23 | t[16] >>> 9, Gt = t[16] << 23 | t[17] >>> 9, zt = t[26] << 25 | t[27] >>> 7, Ot = t[27] << 25 | t[26] >>> 7, lt = t[36] << 21 | t[37] >>> 11, ut = t[37] << 21 | t[36] >>> 11, It = t[47] << 24 | t[46] >>> 8, Wt = t[46] << 24 | t[47] >>> 8, $t = t[8] << 27 | t[9] >>> 5, jt = t[9] << 27 | t[8] >>> 5, pt = t[18] << 20 | t[19] >>> 12, yt = t[19] << 20 | t[18] >>> 12, Jt = t[29] << 7 | t[28] >>> 25, Kt = t[28] << 7 | t[29] >>> 25, Ft = t[38] << 8 | t[39] >>> 24, Ct = t[39] << 8 | t[38] >>> 24, ht = t[48] << 14 | t[49] >>> 18, dt = t[49] << 14 | t[48] >>> 18, t[0] = at ^ ~it & st, t[1] = ot ^ ~ct & ft, t[10] = wt ^ ~pt & gt, t[11] = mt ^ ~yt & bt, t[20] = Et ^ ~kt & zt, t[21] = xt ^ ~Bt & Ot, t[30] = $t ^ ~Nt & Rt, t[31] = jt ^ ~Tt & Ut, t[40] = Ht ^ ~Vt & Jt, t[41] = qt ^ ~Gt & Kt, t[2] = it ^ ~st & lt, t[3] = ct ^ ~ft & ut, t[12] = pt ^ ~gt & _t, t[13] = yt ^ ~bt & vt, t[22] = kt ^ ~zt & Ft, t[23] = Bt ^ ~Ot & Ct, t[32] = Nt ^ ~Rt & Lt, t[33] = Tt ^ ~Ut & Pt, t[42] = Vt ^ ~Jt & Zt, t[43] = Gt ^ ~Kt & Yt, t[4] = st ^ ~lt & ht, t[5] = ft ^ ~ut & dt, t[14] = gt ^ ~_t & At, t[15] = bt ^ ~vt & St, t[24] = zt ^ ~Ft & Dt, t[25] = Ot ^ ~Ct & Mt, t[34] = Rt ^ ~Lt & It, t[35] = Ut ^ ~Pt & Wt, t[44] = Jt ^ ~Zt & Qt, t[45] = Kt ^ ~Yt & Xt, t[6] = lt ^ ~ht & at, t[7] = ut ^ ~dt & ot, t[16] = _t ^ ~At & wt, t[17] = vt ^ ~St & mt, t[26] = Ft ^ ~Dt & Et, t[27] = Ct ^ ~Mt & xt, t[36] = Lt ^ ~It & $t, t[37] = Pt ^ ~Wt & jt, t[46] = Zt ^ ~Qt & Ht, t[47] = Yt ^ ~Xt & qt, t[8] = ht ^ ~at & it, t[9] = dt ^ ~ot & ct, t[18] = At ^ ~wt & pt, t[19] = St ^ ~mt & yt, t[28] = Dt ^ ~Et & kt, t[29] = Mt ^ ~xt & Bt, t[38] = It ^ ~$t & Nt, t[39] = Wt ^ ~jt & Tt, t[48] = Qt ^ ~Ht & Vt, t[49] = Xt ^ ~qt & Gt, t[0] ^= k[s], t[1] ^= k[s + 1];
      };
      if (_)
        e.exports = I;
      else
        for (W = 0; W < J.length; ++W)
          i[J[W]] = I[J[W]];
    })();
  })(re)), re.exports;
}
var Ue = Re();
let T = null, y = null, q = null, L = {
  default: null,
  zh: null
}, H = { s2t: null, t2s: null };
const Le = 32, G = { s2t: /* @__PURE__ */ new Map(), t2s: /* @__PURE__ */ new Map() };
function ce(e, n) {
  return e.get(n);
}
function se(e, n, r) {
  if (e.size >= Le && !e.has(n)) {
    const o = e.keys().next();
    o.done || e.delete(o.value);
  }
  e.set(n, r);
}
async function fe(e) {
  const n = ce(G.s2t, e);
  if (n !== void 0) return n;
  const { s2t: r } = await Oe(), o = r(e);
  return se(G.s2t, e, o), o;
}
async function Pe(e) {
  const n = ce(G.t2s, e);
  if (n !== void 0) return n;
  const { t2s: r } = await Oe(), o = r(e);
  return se(G.t2s, e, o), o;
}
function ze(e) {
  if (!H.t2s) return e;
  const n = ce(G.t2s, e);
  if (n !== void 0) return n;
  const r = H.t2s(e);
  return se(G.t2s, e, r), r;
}
async function Oe() {
  if (H.s2t && H.t2s) return H;
  try {
    const e = await import("./full-BL_hSXNm.js"), n = e?.default || e, r = await n.Converter({ from: "cn", to: "tw" }), o = await n.Converter({ from: "tw", to: "cn" });
    H = { s2t: r, t2s: o };
  } catch (e) {
    console.warn("[aifw] opencc-js not available, fallback to identity conversion", e), H = { s2t: (n) => n, t2s: (n) => n };
  }
  return H;
}
function Fe(e) {
  const n = String(e || "").toLowerCase();
  return n === "zh" || n === "zh-cn" ? !0 : !(!n.startsWith("zh-") || n.includes("hant") || n.includes("tw") || n.includes("hk"));
}
function Ie(e) {
  if (!e) return 0;
  let n = 0, r = 0;
  for (let o = 0; o < e.length; ) {
    const i = e.codePointAt(o), f = i > 65535 ? 2 : 1;
    r += 1, (i >= 19968 && i <= 40959 || i >= 13312 && i <= 19903 || i >= 63744 && i <= 64255) && (n += 1), o += f;
  }
  return r ? n / r : 0;
}
function We(e) {
  if (!e) return 0;
  let n = 0, r = 0;
  for (let o = 0; o < e.length; o++) {
    const i = e.charCodeAt(o);
    r += 1, (i >= 65 && i <= 90 || i >= 97 && i <= 122) && (n += 1);
  }
  return r ? n / r : 0;
}
function He(e) {
  const n = Ie(e), r = We(e);
  return n >= 0.3 ? "zh" : r >= 0.5 ? "en" : "other";
}
const qe = /* @__PURE__ */ new Set([
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
]), Ge = ["开发", "软件", "后端", "互联网", "应用", "运维", "里程", "联系", "台阶", "复用"], Je = ["開發", "軟體", "後端", "網際網路", "應用", "運維", "聯繫", "臺階", "複用"];
function Ke(e) {
  let n = 0, r = 0;
  for (const o of e)
    qe.has(o) && n++, Ve.has(o) && r++;
  for (const o of Ge) e.includes(o) && (n += 2);
  for (const o of Je) e.includes(o) && (r += 2);
  return { sScore: n, tScore: r };
}
function Ze(e) {
  const { sScore: n, tScore: r } = Ke(e);
  return n - r >= 2 ? "Hans" : r - n >= 2 ? "Hant" : null;
}
function ge(e, n) {
  if (e === n) return 0;
  const r = Math.min(e.length, n.length);
  let o = Math.abs(e.length - n.length);
  for (let i = 0; i < r; i++) e[i] !== n[i] && o++;
  return r ? o / Math.max(e.length, n.length) : 1;
}
async function Ye(e) {
  const n = await fe(e), r = await Pe(e), o = n !== e, i = r !== e;
  if (o && !i) return "Hans";
  if (!o && i) return "Hant";
  const f = ge(e, r), m = ge(e, n);
  return f <= m ? "Hans" : "Hant";
}
async function Ce(e) {
  const n = He(e || "");
  if (n !== "zh") return { lang: n, script: null, confidence: n === "en" ? 0.9 : 0.6, method: "heuristic" };
  const r = Ze(e || "");
  return r ? { lang: "zh", script: r, confidence: 0.8, method: "heuristic" } : { lang: "zh", script: await Ye(e || ""), confidence: 0.95, method: "opencc" };
}
class Qe {
  constructor(n, r, o, i) {
    this.entity_id = n >>> 0, this.entity_type = r >>> 0, this.matched_start = o >>> 0, this.matched_end = i >>> 0;
  }
}
function le(e) {
  const r = new TextEncoder().encode(e || ""), o = r.length + 1, i = y.aifw_malloc(o);
  if (!i) throw new Error("aifw_malloc failed");
  const f = new Uint8Array(y.memory.buffer, i, o);
  return f.set(r, 0), f[r.length] = 0, { ptr: i, size: o };
}
function De(e) {
  const n = new Uint8Array(y.memory.buffer);
  let r = e;
  for (; n[r] !== 0; ) r++;
  return new TextDecoder().decode(n.subarray(e, r));
}
function $(e, n) {
  !e || !n || y.aifw_free_sized(e, n);
}
async function Xe() {
  const e = {
    env: {
      js_log(_, d, b) {
        try {
          const M = new Uint8Array(y.memory?.buffer || new ArrayBuffer(0)), D = new Uint8Array(M.buffer, d, b), A = new TextDecoder().decode(D), x = ["ERR", "WRN", "INF", "DBG"][_] || "LOG";
          console.log(`[aifw_core:${x}]`, A);
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
  const i = await o.arrayBuffer(), { instance: f } = await WebAssembly.instantiate(i, e), m = f.exports;
  return (!m.aifw_malloc || !m.aifw_free_sized) && console.warn("alloc exports missing; available exports:", Object.keys(m)), m;
}
const tn = "https://raw.githubusercontent.com/funstory-ai/OneAIFW-Assets/main/", en = "https://huggingface.co/immersiveL/OneAIFW-Assets/resolve/main/", nn = "https://www.modelscope.cn/models/awwaawwa/OneAIFW-Assets/resolve/master/", oe = "0.3.1", C = "models/", rn = "managed", an = "managed", on = "managed", be = "funstory-ai/neurobert-mini", _e = "0xa7c4bfc5e2b7cfdfce2012b38e6eca712b433c4ed47ffc973ee9e3964056834a", ve = "ckiplab/bert-tiny-chinese-ner", Ae = "0x0d723d495d0365236e12e51abbcb97407e8d1f51ec3154656e9267de31fc9ce6", te = "wasm/", Se = "ort-wasm-simd.wasm", Ee = 1, xe = !0, ke = "0x0c1482593eb573d11e6e6c5539cf5436a323e4d49b843135317f053ab0523277";
function ie(e, n) {
  const r = String(e || "").split(".").map((f) => parseInt(f, 10) || 0), o = String(n || "").split(".").map((f) => parseInt(f, 10) || 0), i = Math.max(r.length, o.length);
  for (let f = 0; f < i; f++) {
    const m = r[f] || 0, _ = o[f] || 0;
    if (m > _) return 1;
    if (m < _) return -1;
  }
  return 0;
}
async function ae(e) {
  const n = e instanceof ArrayBuffer ? new Uint8Array(e) : e instanceof Uint8Array ? e : new Uint8Array(e), r = Ue.sha3_256.create();
  return r.update(n), "0x" + r.hex();
}
async function Y(e, n) {
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
async function cn({ assetsBase: e, enModelId: n, zhModelId: r, ortName: o, remoteVersion: i }) {
  if (!i) throw new Error("[aifw-js] invalid assets source: missing version in hello.json");
  if (ie(oe, i) > 0)
    throw new Error(`[aifw-js] assets version too old: required<=${oe}, got ${i}`);
  const f = `oneaifw-assets-v${i}`;
  try {
    await Y(e + "hello.json", f);
  } catch {
  }
  const m = e + `${C}${n}/onnx/model_quantized.onnx`, d = await (await Y(m, f)).arrayBuffer(), b = await ae(d);
  if (b.toLowerCase() !== _e.toLowerCase())
    throw new Error(`[aifw-js] EN model hash mismatch: got ${b}, expected ${_e}`);
  const M = e + `${C}${r}/onnx/model_quantized.onnx`, A = await (await Y(M, f)).arrayBuffer(), x = await ae(A);
  if (x.toLowerCase() !== Ae.toLowerCase())
    throw new Error(`[aifw-js] ZH model hash mismatch: got ${x}, expected ${Ae}`);
  const v = e + `${te}${o}`, S = await (await Y(v, f)).arrayBuffer(), F = await ae(S);
  if (F.toLowerCase() !== ke.toLowerCase())
    throw new Error(`[aifw-js] ORT wasm hash mismatch: got ${F}, expected ${ke}`);
  async function N(g) {
    const O = e + `${C}${g}/`, j = [
      "tokenizer.json",
      "tokenizer_config.json",
      "config.json",
      "special_tokens_map.json",
      "vocab.txt"
    ];
    for (const R of j) {
      const U = O + R, P = await Y(U, f);
      if (!P.ok) throw new Error(`[aifw-js] prefetch failed: ${U} status=${P.status}`);
    }
  }
  return await N(n), await N(r), { remoteVersion: i, cacheName: f };
}
async function sn(e, n, r) {
  if (typeof caches > "u" || !caches?.keys) return null;
  const f = (await caches.keys()).filter((d) => typeof d == "string" && d.startsWith("oneaifw-assets-v")).sort((d, b) => ie(b.slice(18), d.slice(18))).filter((d) => ie(d.slice(18), oe) >= 0), m = [
    `${C}${e}/onnx/model_quantized.onnx`,
    `${C}${n}/onnx/model_quantized.onnx`,
    `${te}${r}`
  ], _ = [
    `${C}${e}/tokenizer.json`,
    `${C}${e}/tokenizer_config.json`,
    `${C}${e}/config.json`,
    `${C}${e}/special_tokens_map.json`,
    `${C}${e}/vocab.txt`,
    `${C}${n}/tokenizer.json`,
    `${C}${n}/tokenizer_config.json`,
    `${C}${n}/config.json`,
    `${C}${n}/special_tokens_map.json`,
    `${C}${n}/vocab.txt`
  ];
  for (const d of f)
    try {
      const b = await caches.open(d), M = await b.keys();
      if (!M?.length) continue;
      const D = /* @__PURE__ */ new Map();
      for (const A of M) {
        const x = A.url;
        for (const v of m)
          if (x.endsWith(v)) {
            const k = x.slice(0, x.length - v.length);
            D.has(v) || D.set(v, k);
          }
      }
      if (m.every((A) => D.has(A))) {
        const A = m.map((S) => D.get(S));
        if (!A.every((S) => S === A[0])) continue;
        const v = A[0];
        if (!await (async () => {
          for (const S of _)
            if (!await b.match(new Request(v + S))) return !1;
          return !0;
        })()) continue;
        return { assetsBase: v, cacheName: d };
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
    }), m = String(f?.version || "");
    if (!m) throw new Error(`missing version in hello.json from ${o}`);
    return { assetsBase: r, remoteVersion: m };
  })());
  try {
    return await Promise.any(n);
  } catch {
    throw new Error("[aifw-js] all managed asset sources failed for hello.json");
  }
}
async function mn(e = {}) {
  let n = e.wasmBase, r = e.modelsBase;
  const o = e.mode || rn, i = e.models || { mode: an }, f = e.ort || { mode: on };
  o === "managed" && (n || r) && (console.warn("[aifw-js] mode=managed is not compatible with legacy wasmBase or modelsBase, ignoring legacy settings."), n = void 0, r = void 0), o === "managed" && (i.mode === "customize" || f.mode === "customize") && (console.warn("[aifw-js] mode=managed is not compatible with customize mode, ignoring customize settings."), i.mode = "managed", f.mode = "managed");
  const m = i.mode || o, _ = f.mode || o;
  let d = f.wasmBase;
  const b = _ === "managed" ? Se : f.ortName || Se, M = _ === "managed" ? Ee : f.threads || Ee, D = _ === "managed" ? xe : f.simd || xe;
  if (_ === "customize" && !d)
    throw new Error("[aifw-js] ort.mode=customize requires ort.wasmBase");
  let A = i.modelsBase;
  const x = m === "managed" ? be : i.enModelId || be, v = m === "managed" ? ve : i.zhModelId || ve;
  if (m === "customize" && !A)
    throw new Error("[aifw-js] models.mode=customize requires models.modelsBase");
  let k = null;
  if (m === "managed" || _ === "managed") {
    const g = await sn(x, v, b);
    if (g?.assetsBase && g?.cacheName) {
      const O = g.assetsBase;
      m === "managed" && (A = O + C), _ === "managed" && (d = O + te), k = g.cacheName;
    } else {
      const O = await fn(), j = O.assetsBase, R = O.remoteVersion;
      m === "managed" && (A = j + C), _ === "managed" && (d = j + te);
      const { cacheName: U } = await cn({
        assetsBase: j,
        enModelId: x,
        zhModelId: v,
        ortName: b,
        remoteVersion: R
      });
      k = U;
    }
  }
  console.info("[aifw-js] modelsBase:", A), console.info("[aifw-js] ortWasmBase:", d), y = await Xe(), q = await import("./libner-CZXS6oo2.js");
  const S = {};
  S.wasmBase = d, S.modelsBase = A, S.threads = M, S.simd = D, k && (S.customCache = { name: k }), q.initEnv(S);
  const [F, N] = await Promise.all([
    q.buildNerPipeline(x, { quantized: !0 }).catch((g) => (console.warn("load EN model failed", g), null)),
    q.buildNerPipeline(v, { quantized: !0 }).catch((g) => (console.warn("load ZH model failed", g), null))
  ]);
  L.default = F, L.zh = N || F, N || console.warn("load zh NER model failed, using en model instead."), T = await ln();
}
async function pn() {
  T && await un(T), y.aifw_shutdown(), T = null, L = { default: null, zh: null }, q = null, y = null;
}
async function ln() {
  if (!y) throw new Error("AIFW not initialized");
  const e = new Uint8Array(4), n = y.aifw_malloc(e.length);
  new Uint8Array(y.memory.buffer, n, e.length).set(e), new DataView(y.memory.buffer).setUint32(n + 0, 0, !0);
  let r = {};
  try {
    if (r.handle = y.aifw_session_create(n), !r.handle) throw new Error("session_create failed");
  } finally {
    $(n, e.length);
  }
  return r;
}
async function un(e) {
  if (!y || !e?.handle) throw new Error("invalid session handle");
  try {
    y.aifw_session_destroy(e.handle);
  } finally {
    e.handle = 0;
  }
}
function Me(e) {
  const n = String(e || "").toLowerCase();
  return n === "zh" || n.startsWith("zh-") ? (console.debug("[aifw-js] select zh NER pipeline."), L.zh || L.default) : (console.debug("[aifw-js] select en NER pipeline.", L.default), L.default);
}
async function Be(e, n) {
  if (!y || !T?.handle) throw new Error("invalid session handle");
  let r = n;
  if (r == null || r === "" || r === "auto") {
    const d = await Ce(e || "");
    d.lang === "zh" ? r = d.script === "Hant" ? "zh-TW" : "zh-CN" : r = d.lang || "en";
  }
  const o = Me(r);
  if (!o) throw new Error("NER pipeline not ready");
  let i = null, f = null, m = 0, _ = 0;
  try {
    i = le(e);
    let d = e, b;
    o === L.zh && Fe(r) && (d = await fe(e), b = { offsetText: e, tokenTransform: (O) => ze(O) });
    const M = await o.run(d, b);
    f = q.buildNerEntitiesBuffer(y, M, e), m = y.aifw_malloc(4), _ = y.aifw_malloc(4);
    const D = (() => {
      const g = String(r || "").toLowerCase();
      return g.startsWith("en") ? 1 : g.startsWith("ja") ? 2 : g.startsWith("ko") ? 3 : g === "zh" ? 4 : g === "zh-cn" ? 5 : g === "zh-tw" ? 6 : g === "zh-hk" ? 7 : g === "zh-hans" ? 8 : g === "zh-hant" ? 9 : g.startsWith("fr") ? 10 : g.startsWith("de") ? 11 : g.startsWith("ru") ? 12 : g.startsWith("es") ? 13 : g.startsWith("it") ? 14 : g.startsWith("ar") ? 15 : g.startsWith("pt") ? 16 : 0;
    })(), A = y.aifw_session_mask_and_out_meta(T.handle, i.ptr, f.ptr, f.count >>> 0, D >>> 0, m, _);
    if (A !== 0) throw new Error(`mask failed rc=${A}`);
    const x = new DataView(y.memory.buffer).getUint32(m, !0), v = De(x);
    y.aifw_string_free(x);
    const k = new DataView(y.memory.buffer).getUint32(_, !0), S = new DataView(y.memory.buffer).getUint32(k, !0), F = new Uint8Array(S), N = new Uint8Array(y.memory.buffer, k, S);
    return F.set(N), $(k, S), [v, F];
  } finally {
    if (m && $(m, 4), _ && $(_, 4), f?.ptr && $(f.ptr, f.byteSize), f?.owned) for (const d of f.owned) $(d.ptr, d.size);
    i && $(i.ptr, i.size);
  }
}
async function hn(e, n) {
  if (!y || !T?.handle) throw new Error("invalid session");
  let r = null, o = 0, i = 0, f = 0;
  try {
    r = le(e);
    const m = n instanceof Uint8Array ? n : new Uint8Array(n);
    if (m.length < 4) throw new Error("invalid maskMeta");
    if (f = m.length, i = y.aifw_malloc(f), !i) throw new Error("aifw_malloc failed (meta)");
    new Uint8Array(y.memory.buffer, i, f).set(m), o = y.aifw_malloc(4);
    const _ = y.aifw_session_restore_with_meta(T.handle, r.ptr, i, o);
    if (_ !== 0) throw new Error(`restore failed rc=${_}`);
    const d = new DataView(y.memory.buffer).getUint32(o, !0), b = d ? De(d) : "";
    return d && y.aifw_string_free(d), b;
  } finally {
    o && $(o, 4), r && $(r.ptr, r.size);
  }
}
async function yn(e) {
  if (!Array.isArray(e)) throw new Error("maskTextBatch: textAndLanguageArray must be an array");
  const n = e.map(async (o) => {
    if (typeof o == "string") return Be(String(o || ""), null);
    const { text: i, language: f } = o || {}, m = f == null || f === "" || f === "auto" ? null : f;
    return Be(String(i || ""), m);
  });
  return (await Promise.all(n)).map(([o, i]) => ({ text: o, maskMeta: i }));
}
async function gn(e) {
  if (!Array.isArray(e)) throw new Error("restoreTextBatch: textAndMaskMetaArray must be an array");
  const n = e.map((o) => {
    const i = o || {};
    return hn(String(i.text || ""), i.maskMeta);
  });
  return (await Promise.all(n)).map((o) => ({ text: o }));
}
async function bn(e, n) {
  if (!y || !T?.handle) throw new Error("invalid session handle");
  let r = n;
  if (r == null || r === "" || r === "auto") {
    const d = await Ce(e || "");
    d.lang === "zh" ? r = d.script === "Hant" ? "zh-TW" : "zh-CN" : r = d.lang || "en";
  }
  const o = Me(r);
  if (!o) throw new Error("NER pipeline not ready");
  let i = null, f = null, m = 0, _ = 0;
  try {
    i = le(e);
    let d = e, b;
    o === L.zh && Fe(r) && (d = await fe(e), b = { offsetText: e, tokenTransform: (j) => ze(j) });
    const M = await o.run(d, b);
    f = q.buildNerEntitiesBuffer(y, M, e), m = y.aifw_malloc(4), _ = y.aifw_malloc(4);
    const D = (() => {
      const O = String(r || "").toLowerCase();
      return O.startsWith("zh") ? 1 : O.startsWith("en") ? 2 : 0;
    })(), A = y.aifw_session_get_pii_spans(T.handle, i.ptr, f.ptr, f.count >>> 0, D >>> 0, m, _);
    if (A !== 0) throw new Error(`get_pii_spans failed rc=${A}`);
    const x = new DataView(y.memory.buffer), v = x.getUint32(m, !0), k = x.getUint32(_, !0), S = 16, F = new Uint8Array(y.memory.buffer, v, k * S), N = [], g = new DataView(F.buffer, F.byteOffset, F.byteLength);
    for (let O = 0; O < k; O++) {
      const j = O * S, R = g.getUint32(j + 0, !0), U = g.getUint8(j + 4), P = g.getUint32(j + 8, !0), Q = g.getUint32(j + 12, !0);
      N.push(new Qe(R, U, P, Q));
    }
    return v && k && $(v, k * S), N;
  } finally {
    if (m && $(m, 4), _ && $(_, 4), f?.ptr && $(f.ptr, f.byteSize), f?.owned) for (const d of f.owned) $(d.ptr, d.size);
    i && $(i.ptr, i.size);
  }
}
export {
  Qe as M,
  dn as a,
  pn as b,
  yn as c,
  Ce as d,
  gn as e,
  bn as f,
  wn as g,
  mn as i,
  Be as m,
  hn as r
};
