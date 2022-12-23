// ==UserScript==
// @name         Next Immersive Translate
// @namespace    https://immersive-translate.owenyoung.com/
// @version      0.0.5.2
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
// @require    ./immersive-translate.lib.js#sha256=2c7afab4c8b4fecc845e4020a0386e49137b2bdc6bad56b5fbf1f3e2ba8d3945
// ==/UserScript==


globalThis.IMMERSIVE_TRANSLATE_INJECTED_CSS = ".immersive-translate-target-wrapper {\n  /* position: relative; */\n}\n.immersive-translate-target-translation-block-wrapper {\n  /* position: relative; */\n  /* top: 16px; */\n  white-space: pre-wrap !important;\n}\n\n.immersive-translate-target-translation-inline-wrapper {\n  white-space: pre-wrap !important;\n}\n.immersive-translate-target-translation-theme-underline {\n  border-bottom: 1px solid #72ece9 !important;\n}\n\n.immersive-translate-text {\n  font-size: 15px !important;\n}\n\n.immersive-translate-error {\n  color: red;\n}\n.immersive-translate-clickable-button {\n  align-items: normal;\n  background-color: rgba(0, 0, 0, 0);\n  border-color: rgb(0, 0, 238);\n  border-style: none;\n  box-sizing: content-box;\n  color: rgb(0, 0, 238);\n  cursor: pointer;\n  display: inline;\n  font: inherit;\n  height: auto;\n  padding: 0;\n  perspective-origin: 0 0;\n  text-align: start;\n  transform-origin: 0 0;\n  width: auto;\n  -moz-appearance: none;\n  -webkit-logical-height: 1em; /* Chrome ignores auto, so we have to use this hack to set the correct height  */\n  -webkit-logical-width: auto; /* Chrome ignores auto, but here for completeness */\n}\n.immersive-translate-loading {\n  margin-left: 6px;\n  top: 3px;\n  width: 10px;\n  height: 10px;\n  display: inline-block;\n  border: 2px rgba(0, 0, 0, 0.25) solid;\n  border-top: 2px rgba(0, 0, 0, 1) solid;\n  border-radius: 50%;\n  -webkit-animation: spCircRot 0.6s infinite linear;\n  animation: immersive-translate-loading-animation 0.6s infinite linear;\n  position: relative;\n}\n@-webkit-keyframes immersive-translate-loading-animation {\n  from {\n    -webkit-transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(359deg);\n  }\n}\n@keyframes immersive-translate-loading-animation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n";
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
