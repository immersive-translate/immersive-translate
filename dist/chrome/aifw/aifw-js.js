let d = null, o = null, z = null, h = {
  default: null,
  zh: null
}, y = { s2t: null, t2s: null };
const Z = 32, k = { s2t: /* @__PURE__ */ new Map(), t2s: /* @__PURE__ */ new Map() };
function U(t, e) {
  return t.get(e);
}
function M(t, e, n) {
  if (t.size >= Z && !t.has(e)) {
    const r = t.keys().next();
    r.done || t.delete(r.value);
  }
  t.set(e, n);
}
async function T(t) {
  const e = U(k.s2t, t);
  if (e !== void 0) return e;
  const { s2t: n } = await F(), r = n(t);
  return M(k.s2t, t, r), r;
}
async function $(t) {
  const e = U(k.t2s, t);
  if (e !== void 0) return e;
  const { t2s: n } = await F(), r = n(t);
  return M(k.t2s, t, r), r;
}
function D(t) {
  if (!y.t2s) return t;
  const e = U(k.t2s, t);
  if (e !== void 0) return e;
  const n = y.t2s(t);
  return M(k.t2s, t, n), n;
}
async function F() {
  if (y.s2t && y.t2s) return y;
  try {
    const t = await import("./full-BL_hSXNm.js"), e = t?.default || t, n = await e.Converter({ from: "cn", to: "tw" }), r = await e.Converter({ from: "tw", to: "cn" });
    y = { s2t: n, t2s: r };
  } catch (t) {
    console.warn("[aifw] opencc-js not available, fallback to identity conversion", t), y = { s2t: (e) => e, t2s: (e) => e };
  }
  return y;
}
function L(t) {
  const e = String(t || "").toLowerCase();
  return e === "zh" || e === "zh-cn" ? !0 : !(!e.startsWith("zh-") || e.includes("hant") || e.includes("tw") || e.includes("hk"));
}
function j(t) {
  if (!t) return 0;
  let e = 0, n = 0;
  for (let r = 0; r < t.length; ) {
    const i = t.codePointAt(r), s = i > 65535 ? 2 : 1;
    n += 1, (i >= 19968 && i <= 40959 || i >= 13312 && i <= 19903 || i >= 63744 && i <= 64255) && (e += 1), r += s;
  }
  return n ? e / n : 0;
}
function q(t) {
  if (!t) return 0;
  let e = 0, n = 0;
  for (let r = 0; r < t.length; r++) {
    const i = t.charCodeAt(r);
    n += 1, (i >= 65 && i <= 90 || i >= 97 && i <= 122) && (e += 1);
  }
  return n ? e / n : 0;
}
function G(t) {
  const e = j(t), n = q(t);
  return e >= 0.3 ? "zh" : n >= 0.5 ? "en" : "other";
}
const Y = /* @__PURE__ */ new Set([
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
]), J = /* @__PURE__ */ new Set([
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
]), Q = ["开发", "软件", "后端", "互联网", "应用", "运维", "里程", "联系", "台阶", "复用"], K = ["開發", "軟體", "後端", "網際網路", "應用", "運維", "聯繫", "臺階", "複用"];
function X(t) {
  let e = 0, n = 0;
  for (const r of t)
    Y.has(r) && e++, J.has(r) && n++;
  for (const r of Q) t.includes(r) && (e += 2);
  for (const r of K) t.includes(r) && (n += 2);
  return { sScore: e, tScore: n };
}
function tt(t) {
  const { sScore: e, tScore: n } = X(t);
  return e - n >= 2 ? "Hans" : n - e >= 2 ? "Hant" : null;
}
function I(t, e) {
  if (t === e) return 0;
  const n = Math.min(t.length, e.length);
  let r = Math.abs(t.length - e.length);
  for (let i = 0; i < n; i++) t[i] !== e[i] && r++;
  return n ? r / Math.max(t.length, e.length) : 1;
}
async function et(t) {
  const e = await T(t), n = await $(t), r = e !== t, i = n !== t;
  if (r && !i) return "Hans";
  if (!r && i) return "Hant";
  const s = I(t, n), c = I(t, e);
  return s <= c ? "Hans" : "Hant";
}
async function O(t) {
  const e = G(t || "");
  if (e !== "zh") return { lang: e, script: null, confidence: e === "en" ? 0.9 : 0.6, method: "heuristic" };
  const n = tt(t || "");
  return n ? { lang: "zh", script: n, confidence: 0.8, method: "heuristic" } : { lang: "zh", script: await et(t || ""), confidence: 0.95, method: "opencc" };
}
class nt {
  constructor(e, n, r, i) {
    this.entity_id = e >>> 0, this.entity_type = n >>> 0, this.matched_start = r >>> 0, this.matched_end = i >>> 0;
  }
}
function v(t) {
  const n = new TextEncoder().encode(t || ""), r = n.length + 1, i = o.aifw_malloc(r);
  if (!i) throw new Error("aifw_malloc failed");
  const s = new Uint8Array(o.memory.buffer, i, r);
  return s.set(n, 0), s[n.length] = 0, { ptr: i, size: r };
}
function R(t) {
  const e = new Uint8Array(o.memory.buffer);
  let n = t;
  for (; e[n] !== 0; ) n++;
  return new TextDecoder().decode(e.subarray(t, n));
}
function f(t, e) {
  !t || !e || o.aifw_free_sized(t, e);
}
async function rt(t) {
  const e = {
    env: {
      js_log(a, w, A) {
        try {
          const m = new Uint8Array(o.memory?.buffer || new ArrayBuffer(0)), g = new Uint8Array(m.buffer, w, A), p = new TextDecoder().decode(g), u = ["ERR", "WRN", "INF", "DBG"][a] || "LOG";
          console.log(`[aifw_core:${u}]`, p);
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
  const s = await i.arrayBuffer(), { instance: c } = await WebAssembly.instantiate(s, e), l = c.exports;
  return (!l.aifw_malloc || !l.aifw_free_sized) && console.warn("alloc exports missing; available exports:", Object.keys(l)), l;
}
async function at({ wasmBase: t = "/wasm/", modelsBase: e = "/models/" }) {
  o = await rt(t), z = await import("./libner-CYAxsZCS.js");
  const n = typeof navigator < "u" && navigator.hardwareConcurrency ? Math.max(1, navigator.hardwareConcurrency) : 1;
  z.initEnv({ wasmBase: t, modelsBase: e, threads: n, simd: !0 });
  const r = "funstory-ai/neurobert-mini", i = "ckiplab/bert-tiny-chinese-ner", [s, c] = await Promise.all([
    z.buildNerPipeline(r, { quantized: !0 }).catch((l) => (console.warn("load EN model failed", l), null)),
    z.buildNerPipeline(i, { quantized: !0 }).catch((l) => (console.warn("load ZH model failed", l), null))
  ]);
  h.default = s, h.zh = c || s, c || console.warn("load zh NER model failed, using en model instead."), d = await it();
}
async function ct() {
  d && await ot(d), o.aifw_shutdown(), d = null, h = { default: null, zh: null }, z = null, o = null;
}
async function it() {
  if (!o) throw new Error("AIFW not initialized");
  const t = new Uint8Array(4), e = o.aifw_malloc(t.length);
  new Uint8Array(o.memory.buffer, e, t.length).set(t), new DataView(o.memory.buffer).setUint32(e + 0, 0, !0);
  let n = {};
  try {
    if (n.handle = o.aifw_session_create(e), !n.handle) throw new Error("session_create failed");
  } finally {
    f(e, t.length);
  }
  return n;
}
async function ot(t) {
  if (!o || !t?.handle) throw new Error("invalid session handle");
  try {
    o.aifw_session_destroy(t.handle);
  } finally {
    t.handle = 0;
  }
}
function B(t) {
  const e = String(t || "").toLowerCase();
  return e === "zh" || e.startsWith("zh-") ? (console.log("select zh NER pipeline."), h.zh || h.default) : (console.log("select en NER pipeline.", h.default), h.default);
}
async function N(t, e) {
  if (!o || !d?.handle) throw new Error("invalid session handle");
  let n = e;
  if (n == null || n === "" || n === "auto") {
    const a = await O(t || "");
    a.lang === "zh" ? n = a.script === "Hant" ? "zh-TW" : "zh-CN" : n = a.lang || "en";
  }
  const r = B(n);
  if (!r) throw new Error("NER pipeline not ready");
  let i = null, s = null, c = 0, l = 0;
  try {
    i = v(t);
    let a = t, w;
    r === h.zh && L(n) && (a = await T(t), w = { offsetText: t, tokenTransform: (b) => D(b) });
    const A = await r.run(a, w);
    s = z.buildNerEntitiesBuffer(o, A, t), c = o.aifw_malloc(4), l = o.aifw_malloc(4);
    const m = o.aifw_session_mask_and_out_meta(d.handle, i.ptr, s.ptr, s.count >>> 0, c, l);
    if (m !== 0) throw new Error(`mask failed rc=${m}`);
    const g = new DataView(o.memory.buffer).getUint32(c, !0), p = R(g);
    o.aifw_string_free(g);
    const u = new DataView(o.memory.buffer).getUint32(l, !0), _ = new DataView(o.memory.buffer).getUint32(u, !0), S = new Uint8Array(_), C = new Uint8Array(o.memory.buffer, u, _);
    return S.set(C), f(u, _), [p, S];
  } finally {
    if (c && f(c, 4), l && f(l, 4), s?.ptr && f(s.ptr, s.byteSize), s?.owned) for (const a of s.owned) f(a.ptr, a.size);
    i && f(i.ptr, i.size);
  }
}
async function st(t, e) {
  if (!o || !d?.handle) throw new Error("invalid session");
  let n = null, r = 0, i = 0, s = 0;
  try {
    n = v(t);
    const c = e instanceof Uint8Array ? e : new Uint8Array(e);
    if (c.length < 4) throw new Error("invalid maskMeta");
    if (s = c.length, i = o.aifw_malloc(s), !i) throw new Error("aifw_malloc failed (meta)");
    new Uint8Array(o.memory.buffer, i, s).set(c), r = o.aifw_malloc(4);
    const l = o.aifw_session_restore_with_meta(d.handle, n.ptr, i, r);
    if (l !== 0) throw new Error(`restore failed rc=${l}`);
    const a = new DataView(o.memory.buffer).getUint32(r, !0), w = a ? R(a) : "";
    return a && o.aifw_string_free(a), w;
  } finally {
    r && f(r, 4), n && f(n.ptr, n.size);
  }
}
async function lt(t) {
  if (!Array.isArray(t)) throw new Error("maskTextBatch: textAndLanguageArray must be an array");
  const e = t.map(async (r) => {
    if (typeof r == "string") return N(String(r || ""), null);
    const { text: i, language: s } = r || {}, c = s == null || s === "" || s === "auto" ? null : s;
    return N(String(i || ""), c);
  });
  return (await Promise.all(e)).map(([r, i]) => ({ text: r, maskMeta: i }));
}
async function ft(t) {
  if (!Array.isArray(t)) throw new Error("restoreTextBatch: textAndMaskMetaArray must be an array");
  const e = t.map((r) => {
    const i = r || {};
    return st(String(i.text || ""), i.maskMeta);
  });
  return (await Promise.all(e)).map((r) => ({ text: r }));
}
async function ut(t, e) {
  if (!o || !d?.handle) throw new Error("invalid session handle");
  let n = e;
  if (n == null || n === "" || n === "auto") {
    const a = await O(t || "");
    a.lang === "zh" ? n = a.script === "Hant" ? "zh-TW" : "zh-CN" : n = a.lang || "en";
  }
  const r = B(n);
  if (!r) throw new Error("NER pipeline not ready");
  let i = null, s = null, c = 0, l = 0;
  try {
    i = v(t);
    let a = t, w;
    r === h.zh && L(n) && (a = await T(t), w = { offsetText: t, tokenTransform: (E) => D(E) });
    const A = await r.run(a, w);
    s = z.buildNerEntitiesBuffer(o, A, t), c = o.aifw_malloc(4), l = o.aifw_malloc(4);
    const m = o.aifw_session_get_pii_spans(d.handle, i.ptr, s.ptr, s.count >>> 0, c, l);
    if (m !== 0) throw new Error(`get_pii_spans failed rc=${m}`);
    const g = new DataView(o.memory.buffer), p = g.getUint32(c, !0), u = g.getUint32(l, !0), _ = 16, S = new Uint8Array(o.memory.buffer, p, u * _), C = [], P = new DataView(S.buffer, S.byteOffset, S.byteLength);
    for (let b = 0; b < u; b++) {
      const E = b * _, H = P.getUint32(E + 0, !0), W = P.getUint8(E + 4), x = P.getUint32(E + 8, !0), V = P.getUint32(E + 12, !0);
      C.push(new nt(H, W, x, V));
    }
    return p && u && f(p, u * _), C;
  } finally {
    if (c && f(c, 4), l && f(l, 4), s?.ptr && f(s.ptr, s.byteSize), s?.owned) for (const a of s.owned) f(a.ptr, a.size);
    i && f(i.ptr, i.size);
  }
}
export {
  nt as MatchedPIISpan,
  ct as deinit,
  O as detectLanguage,
  ut as getPiiSpans,
  at as init,
  N as maskText,
  lt as maskTextBatch,
  st as restoreText,
  ft as restoreTextBatch
};
