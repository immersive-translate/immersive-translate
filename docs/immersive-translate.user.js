// ==UserScript==
// @name         Immersive Translate
// @namespace    https://immersive-translate.owenyoung.com/
// @version      0.0.8
// @description  Web page translator
// @author       Owen Young
// @homepageURL    https://immersive-translate.owenyoung.com/
// @supportURL    https://github.com/immersive-translate/next-immersive-translate/
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
// @require   https://unpkg.com/immersive-translate@0.0.6/immersive-translate.lib.js
// ==/UserScript==
globalThis.IMMERSIVE_TRANSLATE_CONFIG = {
  debug: true,
  translationLanguagePattern: {
    matches: ["en"],
  },
  translationService: "google",
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
  globalThis.IMMERSIVE_TRANSLATE_ENTRY().catch((e) => {
    console.error(`immersive translate error`, e);
  });
}
