// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fosstodon.org
// @grant        GM.addStyle
// @grant        GM.getValue
// @grant        GM.setValue
// @run-at       document-start
// ==/UserScript==

(function () {
  "use strict";

  if (window.self === window.top) {
    let globalId = 0;
    window.addEventListener("message", (e) => {
      console.log("e", e);
      const data = JSON.parse(e.data);
      if (data && data.id === "increaseOne") {
        globalId++;
        console.log("globalId", globalId);
      }
    });
  } else {
    // child iframe
    // get root window
    // check is root window

    setTimeout(() => {
      window.top.postMessage('{"id":"increaseOne"}', "https://arad.hange.jp");
    }, 1000);
  }
})();
