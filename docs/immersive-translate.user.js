// ==UserScript==
// @name         Immersive Translate
// @namespace    https://immersive-translate.owenyoung.com/
// @version      0.0.15
// @description  沉浸式网页翻译，支持多种翻译引擎，双语对照显示
// @author       Owen Young
// @homepageURL    https://immersive-translate.owenyoung.com/
// @supportURL    https://github.com/immersive-translate/next-immersive-translate/
// @match      *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=userscript.net
// @downloadURL https://immersive-translate.owenyoung.com/immersive-translate.user.js
// @updateURL https://immersive-translate.owenyoung.com/immersive-translate.user.js
// @inject-into    content
// @grant       GM.getValue
// @grant       GM.setValue
// @grant       GM.xmlHttpRequest
// @grant       GM.registerMenuCommand
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_xmlhttpRequest
// @grant       GM_registerMenuCommand
// @connect    translate.googleapis.com
// @connect    transmart.qq.com
// @connect    tmt.tencentcloudapi.com
// @connect    www2.deepl.com
// @connect    immersive-translate.owenyoung.com
// @run-at       document-end
// @require   https://unpkg.com/immersive-translate@0.0.15/immersive-translate.lib.js
// ==/UserScript==
(function () {
  "use strict";

  // you can put your config here.
  globalThis.IMMERSIVE_TRANSLATE_CONFIG = {};

  if (globalThis.IMMERSIVE_TRANSLATE_ENTRY) {
    globalThis.IMMERSIVE_TRANSLATE_ENTRY().catch((e) => {
      console.error(`immersive translate error`, e);
    });
  } else {
    console.error("immersive-translate not found");
  }
})();
