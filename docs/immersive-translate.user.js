// ==UserScript==
// @name         Next Immersive Translate
// @namespace    https://immersive-translate.owenyoung.com/
// @version      0.0.5.4
// @description  Web page translator
// @author       Owen Young
// @match      *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=userscript.net
// @grant       GM.getValue
// @grant       GM.setValue
// @grant       GM.xmlHttpRequest
// @grant       GM.registerMenuCommand
// @connect    translate.googleapis.com
// @connect    transmart.qq.com
// @connect    tmt.tencentcloudapi.com
// @connect    www2.deepl.com
// @run-at       document-end
// @require    https://immersive-translate.owenyoung.com/immersive-translate.lib.js#sha256=8e9308808d6de4e4aeb8ee1492b36d78f288e0bf004889c86373643a16b13e27
// ==/UserScript==

globalThis.IMMERSIVE_TRANSLATE_CONFIG = {
  debug: true,
  translationLanguagePattern: {
    matches: ["en"],
  },
  translationService: "mock",
  translationThemePatterns: {
    underline: {
      matches: ["discord.com"],
    },
  },
  translationUrlPattern: {
    excludeMatches: ["www.google.com", "*.buzzing.cc"],
  },
};

if (globalThis.IMMERSIVE_TRANSLATE_ENTRY) {
  console.log("yes");
  globalThis.IMMERSIVE_TRANSLATE_ENTRY().catch((e) => {
    console.error(`immersive translate error`, e);
  });
}
