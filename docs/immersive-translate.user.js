// ==UserScript==
// @name         Immersive Translate
// @namespace    https://immersive-translate.owenyoung.com/
// @version      0.0.22
// @description  沉浸式网页翻译，支持多种翻译引擎，双语对照显示
// @author       Owen Young
// @homepageURL    https://immersive-translate.owenyoung.com/
// @supportURL    https://github.com/immersive-translate/next-immersive-translate/
// @match      *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=userscript.net
// @downloadURL https://immersive-translate.owenyoung.com/immersive-translate.user.js
// @updateURL https://immersive-translate.owenyoung.com/immersive-translate.user.js
// @inject-into    content
// @license      AGPL License
// @grant       GM.getValue
// @grant       GM.setValue
// @grant       GM.xmlHttpRequest
// @grant       GM.registerMenuCommand
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_listValues
// @grant       GM_deleteValue
// @grant       GM.listValues
// @grant       GM.deleteValue
// @grant       GM_xmlhttpRequest
// @grant       GM_registerMenuCommand
// @connect    translate.googleapis.com
// @connect    transmart.qq.com
// @connect    tmt.tencentcloudapi.com
// @connect    www2.deepl.com
// @connect    immersive-translate.owenyoung.com
// @connect    bing.com
// @connect    www.bing.com
// @connect    open.volcengineapi.com
// @connect    fanyi.baidu.com
// @connect    api.fanyi.baidu.com
// @connect    api.interpreter.caiyunai.com
// @connect    api-free.deepl.com
// @connect    api.deepl.com
// @connect    api.openl.club
// @connect    openapi.youdao.com
// @noframes
// @run-at       document-end
// @require   https://unpkg.com/immersive-translate@0.0.22/immersive-translate.lib.js
// ==/UserScript==
(function () {
  "use strict";
  if (globalThis.top != globalThis.self) {
    return;
  }
  globalThis.IMMERSIVE_TRANSLATE_CONFIG = {};

  if (globalThis.IMMERSIVE_TRANSLATE_ENTRY) {
    globalThis.IMMERSIVE_TRANSLATE_ENTRY().catch((e) => {
      console.error(`immersive translate error`, e);
    });
  } else {
    console.error("immersive-translate not found");
  }
})();
