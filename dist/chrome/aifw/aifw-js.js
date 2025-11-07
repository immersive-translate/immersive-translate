let h = null, s = null, b = null, m = {
  default: null,
  zh: null
}, g = { s2t: null, t2s: null };
const Z = 32, C = { s2t: /* @__PURE__ */ new Map(), t2s: /* @__PURE__ */ new Map() };
function M(t, e) {
  return t.get(e);
}
function T(t, e, n) {
  if (t.size >= Z && !t.has(e)) {
    const r = t.keys().next();
    r.done || t.delete(r.value);
  }
  t.set(e, n);
}
async function W(t) {
  const e = M(C.s2t, t);
  if (e !== void 0) return e;
  const { s2t: n } = await D(), r = n(t);
  return T(C.s2t, t, r), r;
}
async function $(t) {
  const e = M(C.t2s, t);
  if (e !== void 0) return e;
  const { t2s: n } = await D(), r = n(t);
  return T(C.t2s, t, r), r;
}
function L(t) {
  if (!g.t2s) return t;
  const e = M(C.t2s, t);
  if (e !== void 0) return e;
  const n = g.t2s(t);
  return T(C.t2s, t, n), n;
}
async function D() {
  if (g.s2t && g.t2s) return g;
  try {
    const t = await import("./full-BL_hSXNm.js"), e = t?.default || t, n = await e.Converter({ from: "cn", to: "tw" }), r = await e.Converter({ from: "tw", to: "cn" });
    g = { s2t: n, t2s: r };
  } catch (t) {
    console.warn("[aifw] opencc-js not available, fallback to identity conversion", t), g = { s2t: (e) => e, t2s: (e) => e };
  }
  return g;
}
function F(t) {
  const e = String(t || "").toLowerCase();
  return e === "zh" || e === "zh-cn" ? !0 : !(!e.startsWith("zh-") || e.includes("hant") || e.includes("tw") || e.includes("hk"));
}
function q(t) {
  if (!t) return 0;
  let e = 0, n = 0;
  for (let r = 0; r < t.length; ) {
    const i = t.codePointAt(r), o = i > 65535 ? 2 : 1;
    n += 1, (i >= 19968 && i <= 40959 || i >= 13312 && i <= 19903 || i >= 63744 && i <= 64255) && (e += 1), r += o;
  }
  return n ? e / n : 0;
}
function G(t) {
  if (!t) return 0;
  let e = 0, n = 0;
  for (let r = 0; r < t.length; r++) {
    const i = t.charCodeAt(r);
    n += 1, (i >= 65 && i <= 90 || i >= 97 && i <= 122) && (e += 1);
  }
  return n ? e / n : 0;
}
function Y(t) {
  const e = q(t), n = G(t);
  return e >= 0.3 ? "zh" : n >= 0.5 ? "en" : "other";
}
const J = /* @__PURE__ */ new Set([
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
]), Q = /* @__PURE__ */ new Set([
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
]), K = ["开发", "软件", "后端", "互联网", "应用", "运维", "里程", "联系", "台阶", "复用"], X = ["開發", "軟體", "後端", "網際網路", "應用", "運維", "聯繫", "臺階", "複用"];
function tt(t) {
  let e = 0, n = 0;
  for (const r of t)
    J.has(r) && e++, Q.has(r) && n++;
  for (const r of K) t.includes(r) && (e += 2);
  for (const r of X) t.includes(r) && (n += 2);
  return { sScore: e, tScore: n };
}
function et(t) {
  const { sScore: e, tScore: n } = tt(t);
  return e - n >= 2 ? "Hans" : n - e >= 2 ? "Hant" : null;
}
function I(t, e) {
  if (t === e) return 0;
  const n = Math.min(t.length, e.length);
  let r = Math.abs(t.length - e.length);
  for (let i = 0; i < n; i++) t[i] !== e[i] && r++;
  return n ? r / Math.max(t.length, e.length) : 1;
}
async function nt(t) {
  const e = await W(t), n = await $(t), r = e !== t, i = n !== t;
  if (r && !i) return "Hans";
  if (!r && i) return "Hant";
  const o = I(t, n), c = I(t, e);
  return o <= c ? "Hans" : "Hant";
}
async function O(t) {
  const e = Y(t || "");
  if (e !== "zh") return { lang: e, script: null, confidence: e === "en" ? 0.9 : 0.6, method: "heuristic" };
  const n = et(t || "");
  return n ? { lang: "zh", script: n, confidence: 0.8, method: "heuristic" } : { lang: "zh", script: await nt(t || ""), confidence: 0.95, method: "opencc" };
}
class rt {
  constructor(e, n, r, i) {
    this.entity_id = e >>> 0, this.entity_type = n >>> 0, this.matched_start = r >>> 0, this.matched_end = i >>> 0;
  }
}
function v(t) {
  const n = new TextEncoder().encode(t || ""), r = n.length + 1, i = s.aifw_malloc(r);
  if (!i) throw new Error("aifw_malloc failed");
  const o = new Uint8Array(s.memory.buffer, i, r);
  return o.set(n, 0), o[n.length] = 0, { ptr: i, size: r };
}
function R(t) {
  const e = new Uint8Array(s.memory.buffer);
  let n = t;
  for (; e[n] !== 0; ) n++;
  return new TextDecoder().decode(e.subarray(t, n));
}
function u(t, e) {
  !t || !e || s.aifw_free_sized(t, e);
}
async function it(t) {
  const e = {
    env: {
      js_log(a, d, P) {
        try {
          const E = new Uint8Array(s.memory?.buffer || new ArrayBuffer(0)), p = new Uint8Array(E.buffer, d, P), _ = new TextDecoder().decode(p), z = ["ERR", "WRN", "INF", "DBG"][a] || "LOG";
          console.log(`[aifw_core:${z}]`, _);
        } catch {
        }
      }
    }
  };
  let n;
  t ? n = (t.endsWith("/") ? t : t + "/") + "liboneaifw_core.wasm" : n = new URL(
    /* @vite-ignore */
    "./wasm/liboneaifw_core.wasm",
    import.meta.url
  ).toString();
  const r = (n.includes("?") ? "&" : "?") + "v=" + Date.now(), i = await fetch(n + r, { cache: "no-store" });
  if (!i.ok) throw new Error(`fetch core wasm failed: ${i.status}`);
  const o = await i.arrayBuffer(), { instance: c } = await WebAssembly.instantiate(o, e), l = c.exports;
  return (!l.aifw_malloc || !l.aifw_free_sized) && console.warn("alloc exports missing; available exports:", Object.keys(l)), l;
}
async function ct({ wasmBase: t = "/wasm/", modelsBase: e = "/models/" }) {
  s = await it(t), b = await import("./libner-7ZLUu1gH.js");
  const n = typeof navigator < "u" && navigator.hardwareConcurrency ? Math.max(1, navigator.hardwareConcurrency) : 1;
  b.initEnv({ wasmBase: t, modelsBase: e, threads: n, simd: !0 });
  const r = "funstory-ai/neurobert-mini", i = "ckiplab/bert-tiny-chinese-ner", [o, c] = await Promise.all([
    b.buildNerPipeline(r, { quantized: !0 }).catch((l) => (console.warn("load EN model failed", l), null)),
    b.buildNerPipeline(i, { quantized: !0 }).catch((l) => (console.warn("load ZH model failed", l), null))
  ]);
  m.default = o, m.zh = c || o, c || console.warn("load zh NER model failed, using en model instead."), h = await st();
}
async function lt() {
  h && await ot(h), s.aifw_shutdown(), h = null, m = { default: null, zh: null }, b = null, s = null;
}
async function st() {
  if (!s) throw new Error("AIFW not initialized");
  const t = new Uint8Array(4), e = s.aifw_malloc(t.length);
  new Uint8Array(s.memory.buffer, e, t.length).set(t), new DataView(s.memory.buffer).setUint32(e + 0, 0, !0);
  let n = {};
  try {
    if (n.handle = s.aifw_session_create(e), !n.handle) throw new Error("session_create failed");
  } finally {
    u(e, t.length);
  }
  return n;
}
async function ot(t) {
  if (!s || !t?.handle) throw new Error("invalid session handle");
  try {
    s.aifw_session_destroy(t.handle);
  } finally {
    t.handle = 0;
  }
}
function B(t) {
  const e = String(t || "").toLowerCase();
  return e === "zh" || e.startsWith("zh-") ? (console.log("select zh NER pipeline."), m.zh || m.default) : (console.log("select en NER pipeline.", m.default), m.default);
}
async function N(t, e) {
  if (!s || !h?.handle) throw new Error("invalid session handle");
  let n = e;
  if (n == null || n === "" || n === "auto") {
    const a = await O(t || "");
    a.lang === "zh" ? n = a.script === "Hant" ? "zh-TW" : "zh-CN" : n = a.lang || "en";
  }
  const r = B(n);
  if (!r) throw new Error("NER pipeline not ready");
  let i = null, o = null, c = 0, l = 0;
  try {
    i = v(t);
    let a = t, d;
    r === m.zh && F(n) && (a = await W(t), d = { offsetText: t, tokenTransform: (w) => L(w) });
    const P = await r.run(a, d);
    o = b.buildNerEntitiesBuffer(s, P, t), c = s.aifw_malloc(4), l = s.aifw_malloc(4);
    const E = (() => {
      const f = String(n || "").toLowerCase();
      return f.startsWith("en") ? 1 : f.startsWith("ja") ? 2 : f.startsWith("ko") ? 3 : f === "zh" ? 4 : f === "zh-cn" ? 5 : f === "zh-tw" ? 6 : f === "zh-hk" ? 7 : f === "zh-hans" ? 8 : f === "zh-hant" ? 9 : f.startsWith("fr") ? 10 : f.startsWith("de") ? 11 : f.startsWith("ru") ? 12 : f.startsWith("es") ? 13 : f.startsWith("it") ? 14 : f.startsWith("ar") ? 15 : f.startsWith("pt") ? 16 : 0;
    })(), p = s.aifw_session_mask_and_out_meta(h.handle, i.ptr, o.ptr, o.count >>> 0, E >>> 0, c, l);
    if (p !== 0) throw new Error(`mask failed rc=${p}`);
    const _ = new DataView(s.memory.buffer).getUint32(c, !0), z = R(_);
    s.aifw_string_free(_);
    const y = new DataView(s.memory.buffer).getUint32(l, !0), S = new DataView(s.memory.buffer).getUint32(y, !0), k = new Uint8Array(S), U = new Uint8Array(s.memory.buffer, y, S);
    return k.set(U), u(y, S), [z, k];
  } finally {
    if (c && u(c, 4), l && u(l, 4), o?.ptr && u(o.ptr, o.byteSize), o?.owned) for (const a of o.owned) u(a.ptr, a.size);
    i && u(i.ptr, i.size);
  }
}
async function at(t, e) {
  if (!s || !h?.handle) throw new Error("invalid session");
  let n = null, r = 0, i = 0, o = 0;
  try {
    n = v(t);
    const c = e instanceof Uint8Array ? e : new Uint8Array(e);
    if (c.length < 4) throw new Error("invalid maskMeta");
    if (o = c.length, i = s.aifw_malloc(o), !i) throw new Error("aifw_malloc failed (meta)");
    new Uint8Array(s.memory.buffer, i, o).set(c), r = s.aifw_malloc(4);
    const l = s.aifw_session_restore_with_meta(h.handle, n.ptr, i, r);
    if (l !== 0) throw new Error(`restore failed rc=${l}`);
    const a = new DataView(s.memory.buffer).getUint32(r, !0), d = a ? R(a) : "";
    return a && s.aifw_string_free(a), d;
  } finally {
    r && u(r, 4), n && u(n.ptr, n.size);
  }
}
async function ft(t) {
  if (!Array.isArray(t)) throw new Error("maskTextBatch: textAndLanguageArray must be an array");
  const e = t.map(async (r) => {
    if (typeof r == "string") return N(String(r || ""), null);
    const { text: i, language: o } = r || {}, c = o == null || o === "" || o === "auto" ? null : o;
    return N(String(i || ""), c);
  });
  return (await Promise.all(e)).map(([r, i]) => ({ text: r, maskMeta: i }));
}
async function ut(t) {
  if (!Array.isArray(t)) throw new Error("restoreTextBatch: textAndMaskMetaArray must be an array");
  const e = t.map((r) => {
    const i = r || {};
    return at(String(i.text || ""), i.maskMeta);
  });
  return (await Promise.all(e)).map((r) => ({ text: r }));
}
async function ht(t, e) {
  if (!s || !h?.handle) throw new Error("invalid session handle");
  let n = e;
  if (n == null || n === "" || n === "auto") {
    const a = await O(t || "");
    a.lang === "zh" ? n = a.script === "Hant" ? "zh-TW" : "zh-CN" : n = a.lang || "en";
  }
  const r = B(n);
  if (!r) throw new Error("NER pipeline not ready");
  let i = null, o = null, c = 0, l = 0;
  try {
    i = v(t);
    let a = t, d;
    r === m.zh && F(n) && (a = await W(t), d = { offsetText: t, tokenTransform: (A) => L(A) });
    const P = await r.run(a, d);
    o = b.buildNerEntitiesBuffer(s, P, t), c = s.aifw_malloc(4), l = s.aifw_malloc(4);
    const E = (() => {
      const w = String(n || "").toLowerCase();
      return w.startsWith("zh") ? 1 : w.startsWith("en") ? 2 : 0;
    })(), p = s.aifw_session_get_pii_spans(h.handle, i.ptr, o.ptr, o.count >>> 0, E >>> 0, c, l);
    if (p !== 0) throw new Error(`get_pii_spans failed rc=${p}`);
    const _ = new DataView(s.memory.buffer), z = _.getUint32(c, !0), y = _.getUint32(l, !0), S = 16, k = new Uint8Array(s.memory.buffer, z, y * S), U = [], f = new DataView(k.buffer, k.byteOffset, k.byteLength);
    for (let w = 0; w < y; w++) {
      const A = w * S, H = f.getUint32(A + 0, !0), x = f.getUint8(A + 4), V = f.getUint32(A + 8, !0), j = f.getUint32(A + 12, !0);
      U.push(new rt(H, x, V, j));
    }
    return z && y && u(z, y * S), U;
  } finally {
    if (c && u(c, 4), l && u(l, 4), o?.ptr && u(o.ptr, o.byteSize), o?.owned) for (const a of o.owned) u(a.ptr, a.size);
    i && u(i.ptr, i.size);
  }
}
export {
  rt as MatchedPIISpan,
  lt as deinit,
  O as detectLanguage,
  ht as getPiiSpans,
  ct as init,
  N as maskText,
  ft as maskTextBatch,
  at as restoreText,
  ut as restoreTextBatch
};
