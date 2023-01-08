// ==UserScript==
// @name         沉浸式翻译
// @description  沉浸式网页双语翻译扩展，完全免费使用，支持 Deepl/Google/腾讯/火山翻译等多个翻译服务，支持 Firefox/Chrome/油猴脚本，亦可在 iOS Safari 上使用。
// @version      0.0.43
// @namespace    https://immersive-translate.owenyoung.com/
// @author       Owen Young
// @homepageURL    https://immersive-translate.owenyoung.com/
// @supportURL    https://github.com/immersive-translate/next-immersive-translate/
// @match      *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=userscript.net
// @downloadURL https://immersive-translate.owenyoung.com/immersive-translate.user.js
// @updateURL https://immersive-translate.owenyoung.com/immersive-translate.user.js
// @inject-into    content
// @license     AGPL-3.0-or-later 
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
// @connect    translate.volcengine.com
// @noframes
// @run-at       document-end
// @name:en     Immersive Translate
// @description:en     Immersive web bilingual translation extension, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao translation and many other translation services, supports Firefox/Chrome/Grease Monkey script, also works on iOS Safari.
// @name:zh-TW     沉浸式翻譯
// @description:zh-TW     沉浸式網頁雙語翻譯擴展，完全免費使用，支持 Deepl/Google/騰訊/火山翻譯等多個翻譯服務，支持 Firefox/Chrome/油猴腳本，亦可在 iOS Safari 上使用。
// @require   https://unpkg.com/immersive-translate@0.0.43/immersive-translate.lib.js
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
