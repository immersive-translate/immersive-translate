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
// @run-at       document-end
// ==/UserScript==

(function () {
  "use strict";

  //  injectCSS(document ,"body{background:red}")
  GM.addStyle("#myDiv2{background:red}#myDiv{position:fixed;top:0;left:0}");
  const src = "#myDiv2{background:red}#myDiv{position:fixed;top:0;left:0}";

  // str to sheet
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(str);
  // add sheet to shadow root

  // add div to body
  const div = document.createElement("div");
  div.id = "myDiv";
  // append to body
  document.body.appendChild(div);
  // add shadow root to div
  const shadow = div.attachShadow({ mode: "open" });
  // add div to shadow root
  const div2 = document.createElement("div");
  div2.id = "myDiv2";
  div2.textContent = "Hello Shadow DOM";
  shadow.appendChild(div2);
  const linkElem = document.createElement("link");
  linkElem.setAttribute("rel", "stylesheet");
  linkElem.setAttribute(
    "href",
    "https://immersive-translate.owenyoung.com/custom.css"
  );

  shadow.appendChild(linkElem);
})();
