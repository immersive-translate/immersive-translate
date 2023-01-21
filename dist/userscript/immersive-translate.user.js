// ==UserScript==
// @name         Immersive Translate
// @description  Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.
// @version      0.2.16
// @namespace    https://immersive-translate.owenyoung.com/
// @author       Owen Young
// @homepageURL    https://immersive-translate.owenyoung.com/
// @supportURL    https://github.com/immersive-translate/immersive-translate/
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
// @name:zh-TW     沉浸式翻譯
// @description:zh-TW     沉浸式網頁雙語翻譯擴展，完全免費使用，支持 Deepl/Google/騰訊/火山翻譯等多個翻譯服務，支持 Firefox/Chrome/油猴腳本，亦可在 iOS Safari 上使用。
// @name:zh-CN     沉浸式翻译
// @description:zh-CN     沉浸式网页双语翻译扩展，完全免费使用，支持 Deepl/Google/腾讯/火山翻译等多个翻译服务，支持 Firefox/Chrome/油猴脚本，亦可在 iOS Safari 上使用。
// ==/UserScript==
(()=>{var Hl=Object.defineProperty;var $l=(e,u)=>{for(var t in u)Hl(e,t,{get:u[t],enumerable:!0})};var E={BUILD_TIME:"2023-01-21T04:04:45.110Z",VERSION:"0.2.16",PROD:"1",IMMERSIVE_TRANSLATE_INJECTED_CSS:`.immersive-translate-target-translation-pre-whitespace {
  white-space: pre-wrap !important;
}

.immersive-translate-pdf-target-container {
  position: absolute;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    sans-serif;
  top: 0;
  width: 600px;
  height: 100%;
  z-index: 2;
  line-height: 1.3;
  font-size: 16px;
}
.immersive-translate-pdf-target-container
  span.immersive-translate-target-wrapper {
  color: rgb(0, 0, 0);
  white-space: normal;
  position: absolute;
}

.immersive-translate-pdf-target-container
  span.immersive-translate-target-wrapper
  span {
  color: inherit;
  white-space: inherit;
  position: unset;
}

.immersive-translate-target-translation-block-wrapper {
  margin: 8px 0 !important;
  display: block;
}
.immersive-translate-target-translation-pdf-block-wrapper {
  margin: 0 !important;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper {
}
.immersive-translate-target-translation-theme-underline-inner {
  border-bottom: 1px solid #72ece9 !important;
}

.immersive-translate-target-translation-block-wrapper-theme-dashedBorder {
  border: 1px dashed rgb(148 163 184) !important;
  padding: 6px;
  margin-top: 2px;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper-theme-dashedBorder {
  border: 1px dashed rgb(148 163 184) !important;
  padding: 2px;
}

.immersive-translate-target-translation-theme-thinDashed-inner {
  border-bottom: 1px dashed #ff374f !important;
}

.immersive-translate-target-translation-theme-dotted-inner {
  background-repeat: repeat-x;
  background-image: linear-gradient(
    to right,
    currentColor 10%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 5px 1px;
  background-repeat: repeat-x;
  padding-bottom: 3px;
}

.immersive-translate-target-translation-theme-dashed-inner {
  background-repeat: repeat-x !important;
  background: linear-gradient(
      to right,
      #59c1bd 0%,
      #59c1bd 50%,
      transparent 50%,
      transparent 100%
    )
    repeat-x left bottom;
  background-size: 8px 2px;
  padding-bottom: 2px;
}
.immersive-translate-target-translation-theme-highlight-inner {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='480' height='42' preserveAspectRatio='none' viewBox='0 0 480 42'%3E%3Cpath fill='%23FFE200' fill-opacity='.75' d='m.7884025 41.3449275c15.8171024-1.6206809 71.8777185-.9529412 87.8950374-1.5331327 16.0173191-.5801915 83.3901661-.745318 100.1082431-.667414 16.718076.0779039 83.089842-.0805484 99.607702.4720956s171.593663-4.1777204 188.411848-.5026041c3.203464.64141 4.604979-37.03709852 1.301407-37.67784118-16.217535-3.4897587-170.292256 1.04456951-186.710008.30189599s-84.391249-.1001373-101.509758.0139905c-17.11851.1141278-84.191033.7506573-101.2094341 1.7162471-17.0184014.9655898-47.6903594-.51449033-88.09525389.58732435-.90097419.38473091-.7007577 37.29511244.20021649 37.28943844z'/%3E%3C/svg%3E")
      bottom center/97% 78% no-repeat,
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='479' height='47' preserveAspectRatio='none' viewBox='0 0 479 47'%3E%3Cpath fill='%23FFE200' fill-opacity='.3' d='m478.156709 8.7824162c-15.838938 1.2871448-71.877674-.56274795-87.900678-.3203145-16.023003.24243345-83.384536-1.01313476-100.097964-1.44357365-16.713429-.43043889-83.073982-1.67157136-99.579885-2.57252834-16.505903-.90095697-171.7612979-2.11020331-188.38083741-3.47061103-1.44382456 9.18867382-1.72962966 27.64863472-1.88448384 37.65056312 49.37498245 2.5658616 109.46343725.852584 186.67624025 3.6352676s84.372323 1.8796999 101.489075 2.126551 84.185321 1.0246833 101.215168.4179614 47.672574 1.5201394 88.086209 1.2703448c.906745-.365732 1.278032-37.28033554.377156-37.2936604z'/%3E%3C/svg%3E")
      top left/96% 100% no-repeat;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}
.immersive-translate-target-translation-theme-weakening {
  opacity: 0.4 !important;
}
.immersive-translate-target-translation-theme-italic {
  font-style: italic !important;
}

.immersive-translate-target-translation-theme-bold {
  font-weight: bold !important;
}

.immersive-translate-target-translation-block-wrapper-theme-paper {
  margin: 8px 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 16px 32px;
  display: block;
}

.immersive-translate-target-translation-block-wrapper-theme-blockquote {
  border-left: 4px solid #cc3355 !important;
  padding-left: 12px !important;
  margin-top: 4px;
  margin-bottom: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  display: block;
}

.immersive-translate-target-translation-theme-mask-inner {
  filter: blur(5px) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}
.immersive-translate-target-translation-theme-mask-inner:hover {
  filter: none !important;
}
.immersive-translate-text {
  font-size: 15px !important;
}

.immersive-translate-error {
  color: red;
}
.immersive-translate-clickable-button {
  align-items: normal;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(0, 0, 238);
  border-style: none;
  box-sizing: content-box;
  color: rgb(0, 0, 238);
  cursor: pointer;
  display: inline;
  font: inherit;
  height: auto;
  padding: 0;
  perspective-origin: 0 0;
  text-align: start;
  transform-origin: 0 0;
  width: auto;
  -moz-appearance: none;
  appearance: none;
  -webkit-logical-height: 1em; /* Chrome ignores auto, so we have to use this hack to set the correct height  */
  -webkit-logical-width: auto; /* Chrome ignores auto, but here for completeness */
}

.immersive-translate-loading {
  vertical-align: middle !important;
  width: 10px !important;
  height: 10px !important;
  display: inline-block !important;
  margin: 0 4px !important;
  border: 2px rgba(0, 0, 0, 0.25) solid !important;
  border-top: 2px rgba(0, 0, 0, 1) solid !important;
  border-radius: 50% !important;
  padding: 0 !important;
  -webkit-animation: immersive-translate-loading-animation 0.6s infinite linear !important;
  animation: immersive-translate-loading-animation 0.6s infinite linear !important;
}
/* dark mode for loading */

@media only screen and (prefers-color-scheme: dark) {
  .immersive-translate-loading {
    border: 2px rgba(255, 255, 255, 0.25) solid !important;
    border-top: 2px rgba(255, 255, 255, 1) solid !important;
  }
}

.immersive-translate-tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dashed #000; /* little indicater to indicate it's hoverable */
}
.immersive-translate-tooltip:before {
  content: attr(data-immersive-translate-tooltip-text); /* here's the magic */
  position: absolute;
  z-index: 100000000000;

  /* vertically center */
  top: 50%;
  transform: translateY(-50%);

  /* move to right */
  left: 100%;
  margin-left: 15px; /* and add a small left margin */

  /* basic styles */
  width: max-content;
  max-width: 250px;
  word-wrap: break-word;
  white-space: pre-line;
  padding: 10px;
  border-radius: 10px;
  background: #000;
  color: #fff;
  text-align: center;

  display: none; /* hide by default */
}
.immersive-translate-tooltip:hover:before {
  display: block;
}

@-webkit-keyframes immersive-translate-loading-animation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}
@keyframes immersive-translate-loading-animation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`,IMMERSIVE_TRANSLATE_PICO_CSS:`@charset "UTF-8";
/*!
 * Pico.css v1.5.6 (https://picocss.com)
 * Copyright 2019-2022 - Licensed under MIT
 */
/**
 * Theme: default
 */
#mount {
  --font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  --line-height: 1.5;
  --font-weight: 400;
  --font-size: 16px;
  --border-radius: 0.25rem;
  --border-width: 1px;
  --outline-width: 3px;
  --spacing: 1rem;
  --typography-spacing-vertical: 1.5rem;
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
  --grid-spacing-vertical: 0;
  --grid-spacing-horizontal: var(--spacing);
  --form-element-spacing-vertical: 0.75rem;
  --form-element-spacing-horizontal: 1rem;
  --nav-element-spacing-vertical: 1rem;
  --nav-element-spacing-horizontal: 0.5rem;
  --nav-link-spacing-vertical: 0.5rem;
  --nav-link-spacing-horizontal: 0.5rem;
  --form-label-font-weight: var(--font-weight);
  --transition: 0.2s ease-in-out;
  --modal-overlay-backdrop-filter: blur(0.25rem);
}
@media (min-width: 576px) {
  #mount {
    --font-size: 17px;
  }
}
@media (min-width: 768px) {
  #mount {
    --font-size: 18px;
  }
}
@media (min-width: 992px) {
  #mount {
    --font-size: 19px;
  }
}
@media (min-width: 1200px) {
  #mount {
    --font-size: 20px;
  }
}

@media (min-width: 576px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 2.5);
  }
}
@media (min-width: 768px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 3);
  }
}
@media (min-width: 992px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 3.5);
  }
}
@media (min-width: 1200px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 4);
  }
}

@media (min-width: 576px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.25);
  }
}
@media (min-width: 768px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.5);
  }
}
@media (min-width: 992px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.75);
  }
}
@media (min-width: 1200px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 2);
  }
}

dialog > article {
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
}
@media (min-width: 576px) {
  dialog > article {
    --block-spacing-vertical: calc(var(--spacing) * 2.5);
    --block-spacing-horizontal: calc(var(--spacing) * 1.25);
  }
}
@media (min-width: 768px) {
  dialog > article {
    --block-spacing-vertical: calc(var(--spacing) * 3);
    --block-spacing-horizontal: calc(var(--spacing) * 1.5);
  }
}

a {
  --text-decoration: none;
}
a.secondary,
a.contrast {
  --text-decoration: underline;
}

small {
  --font-size: 0.875em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  --font-weight: 700;
}

h1 {
  --font-size: 2rem;
  --typography-spacing-vertical: 3rem;
}

h2 {
  --font-size: 1.75rem;
  --typography-spacing-vertical: 2.625rem;
}

h3 {
  --font-size: 1.5rem;
  --typography-spacing-vertical: 2.25rem;
}

h4 {
  --font-size: 1.25rem;
  --typography-spacing-vertical: 1.874rem;
}

h5 {
  --font-size: 1.125rem;
  --typography-spacing-vertical: 1.6875rem;
}

[type="checkbox"],
[type="radio"] {
  --border-width: 2px;
}

[type="checkbox"][role="switch"] {
  --border-width: 3px;
}

thead th,
thead td,
tfoot th,
tfoot td {
  --border-width: 3px;
}

:not(thead, tfoot) > * > td {
  --font-size: 0.875em;
}

pre,
code,
kbd,
samp {
  --font-family: "Menlo", "Consolas", "Roboto Mono", "Ubuntu Monospace",
    "Noto Mono", "Oxygen Mono", "Liberation Mono", monospace,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

kbd {
  --font-weight: bolder;
}

[data-theme="light"],
#mount:not([data-theme="dark"]) {
  --background-color: #fff;
  --color: hsl(205deg, 20%, 32%);
  --h1-color: hsl(205deg, 30%, 15%);
  --h2-color: #24333e;
  --h3-color: hsl(205deg, 25%, 23%);
  --h4-color: #374956;
  --h5-color: hsl(205deg, 20%, 32%);
  --h6-color: #4d606d;
  --muted-color: hsl(205deg, 10%, 50%);
  --muted-border-color: hsl(205deg, 20%, 94%);
  --primary: hsl(195deg, 85%, 41%);
  --primary-hover: hsl(195deg, 90%, 32%);
  --primary-focus: rgba(16, 149, 193, 0.125);
  --primary-inverse: #fff;
  --secondary: hsl(205deg, 15%, 41%);
  --secondary-hover: hsl(205deg, 20%, 32%);
  --secondary-focus: rgba(89, 107, 120, 0.125);
  --secondary-inverse: #fff;
  --contrast: hsl(205deg, 30%, 15%);
  --contrast-hover: #000;
  --contrast-focus: rgba(89, 107, 120, 0.125);
  --contrast-inverse: #fff;
  --mark-background-color: #fff2ca;
  --mark-color: #543a26;
  --ins-color: #388e3c;
  --del-color: #c62828;
  --blockquote-border-color: var(--muted-border-color);
  --blockquote-footer-color: var(--muted-color);
  --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --form-element-background-color: transparent;
  --form-element-border-color: hsl(205deg, 14%, 68%);
  --form-element-color: var(--color);
  --form-element-placeholder-color: var(--muted-color);
  --form-element-active-background-color: transparent;
  --form-element-active-border-color: var(--primary);
  --form-element-focus-color: var(--primary-focus);
  --form-element-disabled-background-color: hsl(205deg, 18%, 86%);
  --form-element-disabled-border-color: hsl(205deg, 14%, 68%);
  --form-element-disabled-opacity: 0.5;
  --form-element-invalid-border-color: #c62828;
  --form-element-invalid-active-border-color: #d32f2f;
  --form-element-invalid-focus-color: rgba(211, 47, 47, 0.125);
  --form-element-valid-border-color: #388e3c;
  --form-element-valid-active-border-color: #43a047;
  --form-element-valid-focus-color: rgba(67, 160, 71, 0.125);
  --switch-background-color: hsl(205deg, 16%, 77%);
  --switch-color: var(--primary-inverse);
  --switch-checked-background-color: var(--primary);
  --range-border-color: hsl(205deg, 18%, 86%);
  --range-active-border-color: hsl(205deg, 16%, 77%);
  --range-thumb-border-color: var(--background-color);
  --range-thumb-color: var(--secondary);
  --range-thumb-hover-color: var(--secondary-hover);
  --range-thumb-active-color: var(--primary);
  --table-border-color: var(--muted-border-color);
  --table-row-stripped-background-color: #f6f8f9;
  --code-background-color: hsl(205deg, 20%, 94%);
  --code-color: var(--muted-color);
  --code-kbd-background-color: var(--contrast);
  --code-kbd-color: var(--contrast-inverse);
  --code-tag-color: hsl(330deg, 40%, 50%);
  --code-property-color: hsl(185deg, 40%, 40%);
  --code-value-color: hsl(40deg, 20%, 50%);
  --code-comment-color: hsl(205deg, 14%, 68%);
  --accordion-border-color: var(--muted-border-color);
  --accordion-close-summary-color: var(--color);
  --accordion-open-summary-color: var(--muted-color);
  --card-background-color: var(--background-color);
  --card-border-color: var(--muted-border-color);
  --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(27, 40, 50, 0.01698),
    0.0335rem 0.067rem 0.402rem rgba(27, 40, 50, 0.024),
    0.0625rem 0.125rem 0.75rem rgba(27, 40, 50, 0.03),
    0.1125rem 0.225rem 1.35rem rgba(27, 40, 50, 0.036),
    0.2085rem 0.417rem 2.502rem rgba(27, 40, 50, 0.04302),
    0.5rem 1rem 6rem rgba(27, 40, 50, 0.06),
    0 0 0 0.0625rem rgba(27, 40, 50, 0.015);
  --card-sectionning-background-color: #fbfbfc;
  --dropdown-background-color: #fbfbfc;
  --dropdown-border-color: #e1e6eb;
  --dropdown-box-shadow: var(--card-box-shadow);
  --dropdown-color: var(--color);
  --dropdown-hover-background-color: hsl(205deg, 20%, 94%);
  --modal-overlay-background-color: rgba(213, 220, 226, 0.7);
  --progress-background-color: hsl(205deg, 18%, 86%);
  --progress-color: var(--primary);
  --loading-spinner-opacity: 0.5;
  --tooltip-background-color: var(--contrast);
  --tooltip-color: var(--contrast-inverse);
  --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
  --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(198, 40, 40)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
  --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(56, 142, 60)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  color-scheme: light;
}

@media only screen and (prefers-color-scheme: dark) {
  #mount:not([data-theme="light"]) {
    --background-color: #11191f;
    --color: hsl(205deg, 16%, 77%);
    --h1-color: hsl(205deg, 20%, 94%);
    --h2-color: #e1e6eb;
    --h3-color: hsl(205deg, 18%, 86%);
    --h4-color: #c8d1d8;
    --h5-color: hsl(205deg, 16%, 77%);
    --h6-color: #afbbc4;
    --muted-color: hsl(205deg, 10%, 50%);
    --muted-border-color: #1f2d38;
    --primary: hsl(195deg, 85%, 41%);
    --primary-hover: hsl(195deg, 80%, 50%);
    --primary-focus: rgba(16, 149, 193, 0.25);
    --primary-inverse: #fff;
    --secondary: hsl(205deg, 15%, 41%);
    --secondary-hover: hsl(205deg, 10%, 50%);
    --secondary-focus: rgba(115, 130, 140, 0.25);
    --secondary-inverse: #fff;
    --contrast: hsl(205deg, 20%, 94%);
    --contrast-hover: #fff;
    --contrast-focus: rgba(115, 130, 140, 0.25);
    --contrast-inverse: #000;
    --mark-background-color: #d1c284;
    --mark-color: #11191f;
    --ins-color: #388e3c;
    --del-color: #c62828;
    --blockquote-border-color: var(--muted-border-color);
    --blockquote-footer-color: var(--muted-color);
    --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --form-element-background-color: #11191f;
    --form-element-border-color: #374956;
    --form-element-color: var(--color);
    --form-element-placeholder-color: var(--muted-color);
    --form-element-active-background-color: var(
      --form-element-background-color
    );
    --form-element-active-border-color: var(--primary);
    --form-element-focus-color: var(--primary-focus);
    --form-element-disabled-background-color: hsl(205deg, 25%, 23%);
    --form-element-disabled-border-color: hsl(205deg, 20%, 32%);
    --form-element-disabled-opacity: 0.5;
    --form-element-invalid-border-color: #b71c1c;
    --form-element-invalid-active-border-color: #c62828;
    --form-element-invalid-focus-color: rgba(198, 40, 40, 0.25);
    --form-element-valid-border-color: #2e7d32;
    --form-element-valid-active-border-color: #388e3c;
    --form-element-valid-focus-color: rgba(56, 142, 60, 0.25);
    --switch-background-color: #374956;
    --switch-color: var(--primary-inverse);
    --switch-checked-background-color: var(--primary);
    --range-border-color: #24333e;
    --range-active-border-color: hsl(205deg, 25%, 23%);
    --range-thumb-border-color: var(--background-color);
    --range-thumb-color: var(--secondary);
    --range-thumb-hover-color: var(--secondary-hover);
    --range-thumb-active-color: var(--primary);
    --table-border-color: var(--muted-border-color);
    --table-row-stripped-background-color: rgba(115, 130, 140, 0.05);
    --code-background-color: #18232c;
    --code-color: var(--muted-color);
    --code-kbd-background-color: var(--contrast);
    --code-kbd-color: var(--contrast-inverse);
    --code-tag-color: hsl(330deg, 30%, 50%);
    --code-property-color: hsl(185deg, 30%, 50%);
    --code-value-color: hsl(40deg, 10%, 50%);
    --code-comment-color: #4d606d;
    --accordion-border-color: var(--muted-border-color);
    --accordion-active-summary-color: var(--primary);
    --accordion-close-summary-color: var(--color);
    --accordion-open-summary-color: var(--muted-color);
    --card-background-color: #141e26;
    --card-border-color: var(--card-background-color);
    --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(0, 0, 0, 0.01698),
      0.0335rem 0.067rem 0.402rem rgba(0, 0, 0, 0.024),
      0.0625rem 0.125rem 0.75rem rgba(0, 0, 0, 0.03),
      0.1125rem 0.225rem 1.35rem rgba(0, 0, 0, 0.036),
      0.2085rem 0.417rem 2.502rem rgba(0, 0, 0, 0.04302),
      0.5rem 1rem 6rem rgba(0, 0, 0, 0.06), 0 0 0 0.0625rem rgba(0, 0, 0, 0.015);
    --card-sectionning-background-color: #18232c;
    --dropdown-background-color: hsl(205deg, 30%, 15%);
    --dropdown-border-color: #24333e;
    --dropdown-box-shadow: var(--card-box-shadow);
    --dropdown-color: var(--color);
    --dropdown-hover-background-color: rgba(36, 51, 62, 0.75);
    --modal-overlay-background-color: rgba(36, 51, 62, 0.8);
    --progress-background-color: #24333e;
    --progress-color: var(--primary);
    --loading-spinner-opacity: 0.5;
    --tooltip-background-color: var(--contrast);
    --tooltip-color: var(--contrast-inverse);
    --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(0, 0, 0)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
    --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
    --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(183, 28, 28)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
    --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
    --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
    --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(46, 125, 50)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
    color-scheme: dark;
  }
}
[data-theme="dark"] {
  --background-color: #11191f;
  --color: hsl(205deg, 16%, 77%);
  --h1-color: hsl(205deg, 20%, 94%);
  --h2-color: #e1e6eb;
  --h3-color: hsl(205deg, 18%, 86%);
  --h4-color: #c8d1d8;
  --h5-color: hsl(205deg, 16%, 77%);
  --h6-color: #afbbc4;
  --muted-color: hsl(205deg, 10%, 50%);
  --muted-border-color: #1f2d38;
  --primary: hsl(195deg, 85%, 41%);
  --primary-hover: hsl(195deg, 80%, 50%);
  --primary-focus: rgba(16, 149, 193, 0.25);
  --primary-inverse: #fff;
  --secondary: hsl(205deg, 15%, 41%);
  --secondary-hover: hsl(205deg, 10%, 50%);
  --secondary-focus: rgba(115, 130, 140, 0.25);
  --secondary-inverse: #fff;
  --contrast: hsl(205deg, 20%, 94%);
  --contrast-hover: #fff;
  --contrast-focus: rgba(115, 130, 140, 0.25);
  --contrast-inverse: #000;
  --mark-background-color: #d1c284;
  --mark-color: #11191f;
  --ins-color: #388e3c;
  --del-color: #c62828;
  --blockquote-border-color: var(--muted-border-color);
  --blockquote-footer-color: var(--muted-color);
  --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --form-element-background-color: #11191f;
  --form-element-border-color: #374956;
  --form-element-color: var(--color);
  --form-element-placeholder-color: var(--muted-color);
  --form-element-active-background-color: var(--form-element-background-color);
  --form-element-active-border-color: var(--primary);
  --form-element-focus-color: var(--primary-focus);
  --form-element-disabled-background-color: hsl(205deg, 25%, 23%);
  --form-element-disabled-border-color: hsl(205deg, 20%, 32%);
  --form-element-disabled-opacity: 0.5;
  --form-element-invalid-border-color: #b71c1c;
  --form-element-invalid-active-border-color: #c62828;
  --form-element-invalid-focus-color: rgba(198, 40, 40, 0.25);
  --form-element-valid-border-color: #2e7d32;
  --form-element-valid-active-border-color: #388e3c;
  --form-element-valid-focus-color: rgba(56, 142, 60, 0.25);
  --switch-background-color: #374956;
  --switch-color: var(--primary-inverse);
  --switch-checked-background-color: var(--primary);
  --range-border-color: #24333e;
  --range-active-border-color: hsl(205deg, 25%, 23%);
  --range-thumb-border-color: var(--background-color);
  --range-thumb-color: var(--secondary);
  --range-thumb-hover-color: var(--secondary-hover);
  --range-thumb-active-color: var(--primary);
  --table-border-color: var(--muted-border-color);
  --table-row-stripped-background-color: rgba(115, 130, 140, 0.05);
  --code-background-color: #18232c;
  --code-color: var(--muted-color);
  --code-kbd-background-color: var(--contrast);
  --code-kbd-color: var(--contrast-inverse);
  --code-tag-color: hsl(330deg, 30%, 50%);
  --code-property-color: hsl(185deg, 30%, 50%);
  --code-value-color: hsl(40deg, 10%, 50%);
  --code-comment-color: #4d606d;
  --accordion-border-color: var(--muted-border-color);
  --accordion-active-summary-color: var(--primary);
  --accordion-close-summary-color: var(--color);
  --accordion-open-summary-color: var(--muted-color);
  --card-background-color: #141e26;
  --card-border-color: var(--card-background-color);
  --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(0, 0, 0, 0.01698),
    0.0335rem 0.067rem 0.402rem rgba(0, 0, 0, 0.024),
    0.0625rem 0.125rem 0.75rem rgba(0, 0, 0, 0.03),
    0.1125rem 0.225rem 1.35rem rgba(0, 0, 0, 0.036),
    0.2085rem 0.417rem 2.502rem rgba(0, 0, 0, 0.04302),
    0.5rem 1rem 6rem rgba(0, 0, 0, 0.06), 0 0 0 0.0625rem rgba(0, 0, 0, 0.015);
  --card-sectionning-background-color: #18232c;
  --dropdown-background-color: hsl(205deg, 30%, 15%);
  --dropdown-border-color: #24333e;
  --dropdown-box-shadow: var(--card-box-shadow);
  --dropdown-color: var(--color);
  --dropdown-hover-background-color: rgba(36, 51, 62, 0.75);
  --modal-overlay-background-color: rgba(36, 51, 62, 0.8);
  --progress-background-color: #24333e;
  --progress-color: var(--primary);
  --loading-spinner-opacity: 0.5;
  --tooltip-background-color: var(--contrast);
  --tooltip-color: var(--contrast-inverse);
  --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(0, 0, 0)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
  --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(183, 28, 28)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
  --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(46, 125, 50)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  color-scheme: dark;
}

progress,
[type="checkbox"],
[type="radio"],
[type="range"] {
  accent-color: var(--primary);
}

/**
 * Document
 * Content-box & Responsive typography
 */
*,
*::before,
*::after {
  box-sizing: border-box;
  background-repeat: no-repeat;
}

::before,
::after {
  text-decoration: inherit;
  vertical-align: inherit;
}

:where(#mount) {
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
  background-color: var(--background-color);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  line-height: var(--line-height);
  font-family: var(--font-family);
  text-rendering: optimizeLegibility;
  overflow-wrap: break-word;
  cursor: default;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
}

/**
 * Sectioning
 * Container and responsive spacings for header, main, footer
 */
main {
  display: block;
}

#mount {
  width: 100%;
  margin: 0;
}
#mount > header,
#mount > main,
#mount > footer {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
}
@media (min-width: 576px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 510px;
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 768px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 700px;
  }
}
@media (min-width: 992px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 920px;
  }
}
@media (min-width: 1200px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 1130px;
  }
}

/**
* Container
*/
.container,
.container-fluid {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--spacing);
  padding-left: var(--spacing);
}

@media (min-width: 576px) {
  .container {
    max-width: 510px;
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 700px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 920px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1130px;
  }
}

/**
 * Section
 * Responsive spacings for section
 */
section {
  margin-bottom: var(--block-spacing-vertical);
}

/**
* Grid
* Minimal grid system with auto-layout columns
*/
.grid {
  grid-column-gap: var(--grid-spacing-horizontal);
  grid-row-gap: var(--grid-spacing-vertical);
  display: grid;
  grid-template-columns: 1fr;
  margin: 0;
}
@media (min-width: 992px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(0%, 1fr));
  }
}
.grid > * {
  min-width: 0;
}

/**
 * Horizontal scroller (<figure>)
 */
figure {
  display: block;
  margin: 0;
  padding: 0;
  overflow-x: auto;
}
figure figcaption {
  padding: calc(var(--spacing) * 0.5) 0;
  color: var(--muted-color);
}

/**
 * Typography
 */
b,
strong {
  font-weight: bolder;
}

sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

address,
blockquote,
dl,
figure,
form,
ol,
p,
pre,
table,
ul {
  margin-top: 0;
  margin-bottom: var(--typography-spacing-vertical);
  color: var(--color);
  font-style: normal;
  font-weight: var(--font-weight);
  font-size: var(--font-size);
}

a,
[role="link"] {
  --color: var(--primary);
  --background-color: transparent;
  outline: none;
  background-color: var(--background-color);
  color: var(--color);
  -webkit-text-decoration: var(--text-decoration);
  text-decoration: var(--text-decoration);
  transition: background-color var(--transition), color var(--transition),
    box-shadow var(--transition), -webkit-text-decoration var(--transition);
  transition: background-color var(--transition), color var(--transition),
    text-decoration var(--transition), box-shadow var(--transition);
  transition: background-color var(--transition), color var(--transition),
    text-decoration var(--transition), box-shadow var(--transition),
    -webkit-text-decoration var(--transition);
}
a:is([aria-current], :hover, :active, :focus),
[role="link"]:is([aria-current], :hover, :active, :focus) {
  --color: var(--primary-hover);
  --text-decoration: underline;
}
a:focus,
[role="link"]:focus {
  --background-color: var(--primary-focus);
}
a.secondary,
[role="link"].secondary {
  --color: var(--secondary);
}
a.secondary:is([aria-current], :hover, :active, :focus),
[role="link"].secondary:is([aria-current], :hover, :active, :focus) {
  --color: var(--secondary-hover);
}
a.secondary:focus,
[role="link"].secondary:focus {
  --background-color: var(--secondary-focus);
}
a.contrast,
[role="link"].contrast {
  --color: var(--contrast);
}
a.contrast:is([aria-current], :hover, :active, :focus),
[role="link"].contrast:is([aria-current], :hover, :active, :focus) {
  --color: var(--contrast-hover);
}
a.contrast:focus,
[role="link"].contrast:focus {
  --background-color: var(--contrast-focus);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: var(--typography-spacing-vertical);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  font-family: var(--font-family);
}

h1 {
  --color: var(--h1-color);
}

h2 {
  --color: var(--h2-color);
}

h3 {
  --color: var(--h3-color);
}

h4 {
  --color: var(--h4-color);
}

h5 {
  --color: var(--h5-color);
}

h6 {
  --color: var(--h6-color);
}

:where(address, blockquote, dl, figure, form, ol, p, pre, table, ul)
  ~ :is(h1, h2, h3, h4, h5, h6) {
  margin-top: var(--typography-spacing-vertical);
}

hgroup,
.headings {
  margin-bottom: var(--typography-spacing-vertical);
}
hgroup > *,
.headings > * {
  margin-bottom: 0;
}
hgroup > *:last-child,
.headings > *:last-child {
  --color: var(--muted-color);
  --font-weight: unset;
  font-size: 1rem;
  font-family: unset;
}

p {
  margin-bottom: var(--typography-spacing-vertical);
}

small {
  font-size: var(--font-size);
}

:where(dl, ol, ul) {
  padding-right: 0;
  padding-left: var(--spacing);
  -webkit-padding-start: var(--spacing);
  padding-inline-start: var(--spacing);
  -webkit-padding-end: 0;
  padding-inline-end: 0;
}
:where(dl, ol, ul) li {
  margin-bottom: calc(var(--typography-spacing-vertical) * 0.25);
}

:where(dl, ol, ul) :is(dl, ol, ul) {
  margin: 0;
  margin-top: calc(var(--typography-spacing-vertical) * 0.25);
}

ul li {
  list-style: square;
}

mark {
  padding: 0.125rem 0.25rem;
  background-color: var(--mark-background-color);
  color: var(--mark-color);
  vertical-align: baseline;
}

blockquote {
  display: block;
  margin: var(--typography-spacing-vertical) 0;
  padding: var(--spacing);
  border-right: none;
  border-left: 0.25rem solid var(--blockquote-border-color);
  -webkit-border-start: 0.25rem solid var(--blockquote-border-color);
  border-inline-start: 0.25rem solid var(--blockquote-border-color);
  -webkit-border-end: none;
  border-inline-end: none;
}
blockquote footer {
  margin-top: calc(var(--typography-spacing-vertical) * 0.5);
  color: var(--blockquote-footer-color);
}

abbr[title] {
  border-bottom: 1px dotted;
  text-decoration: none;
  cursor: help;
}

ins {
  color: var(--ins-color);
  text-decoration: none;
}

del {
  color: var(--del-color);
}

::-moz-selection {
  background-color: var(--primary-focus);
}

::selection {
  background-color: var(--primary-focus);
}

/**
 * Embedded content
 */
:where(audio, canvas, iframe, img, svg, video) {
  vertical-align: middle;
}

audio,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

:where(iframe) {
  border-style: none;
}

img {
  max-width: 100%;
  height: auto;
  border-style: none;
}

:where(svg:not([fill])) {
  fill: currentColor;
}

svg:not(#mount) {
  overflow: hidden;
}

/**
 * Button
 */
button {
  margin: 0;
  overflow: visible;
  font-family: inherit;
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button {
  display: block;
  width: 100%;
  margin-bottom: var(--spacing);
}

[role="button"] {
  display: inline-block;
  text-decoration: none;
}

button,
input[type="submit"],
input[type="button"],
input[type="reset"],
[role="button"] {
  --background-color: var(--primary);
  --border-color: var(--primary);
  --color: var(--primary-inverse);
  --box-shadow: var(--button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
button:is([aria-current], :hover, :active, :focus),
input[type="submit"]:is([aria-current], :hover, :active, :focus),
input[type="button"]:is([aria-current], :hover, :active, :focus),
input[type="reset"]:is([aria-current], :hover, :active, :focus),
[role="button"]:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--primary-hover);
  --border-color: var(--primary-hover);
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  --color: var(--primary-inverse);
}
button:focus,
input[type="submit"]:focus,
input[type="button"]:focus,
input[type="reset"]:focus,
[role="button"]:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--primary-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary,
input[type="reset"] {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  cursor: pointer;
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary:is([aria-current], :hover, :active, :focus),
input[type="reset"]:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
  --color: var(--secondary-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary:focus,
input[type="reset"]:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--secondary-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast {
  --background-color: var(--contrast);
  --border-color: var(--contrast);
  --color: var(--contrast-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--contrast-hover);
  --border-color: var(--contrast-hover);
  --color: var(--contrast-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--contrast-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline,
input[type="reset"].outline {
  --background-color: transparent;
  --color: var(--primary);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline:is([aria-current], :hover, :active, :focus),
input[type="reset"].outline:is([aria-current], :hover, :active, :focus) {
  --background-color: transparent;
  --color: var(--primary-hover);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.secondary,
input[type="reset"].outline {
  --color: var(--secondary);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.secondary:is([aria-current], :hover, :active, :focus),
input[type="reset"].outline:is([aria-current], :hover, :active, :focus) {
  --color: var(--secondary-hover);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.contrast {
  --color: var(--contrast);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.contrast:is([aria-current], :hover, :active, :focus) {
  --color: var(--contrast-hover);
}

:where(
    button,
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="button"]
  )[disabled],
:where(fieldset[disabled])
  :is(
    button,
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="button"]
  ),
a[role="button"]:not([href]) {
  opacity: 0.5;
  pointer-events: none;
}

/**
 * Form elements
 */
input,
optgroup,
select,
textarea {
  margin: 0;
  font-size: 1rem;
  line-height: var(--line-height);
  font-family: inherit;
  letter-spacing: inherit;
}

input {
  overflow: visible;
}

select {
  text-transform: none;
}

legend {
  max-width: 100%;
  padding: 0;
  color: inherit;
  white-space: normal;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  padding: 0;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

:-moz-focusring {
  outline: none;
}

:-moz-ui-invalid {
  box-shadow: none;
}

::-ms-expand {
  display: none;
}

[type="file"],
[type="range"] {
  padding: 0;
  border-width: 0;
}

input:not([type="checkbox"], [type="radio"], [type="range"]) {
  height: calc(
    1rem * var(--line-height) + var(--form-element-spacing-vertical) * 2 +
      var(--border-width) * 2
  );
}

fieldset {
  margin: 0;
  margin-bottom: var(--spacing);
  padding: 0;
  border: 0;
}

label,
fieldset legend {
  display: block;
  margin-bottom: calc(var(--spacing) * 0.25);
  font-weight: var(--form-label-font-weight, var(--font-weight));
}

input:not([type="checkbox"], [type="radio"]),
select,
textarea {
  width: 100%;
}

input:not([type="checkbox"], [type="radio"], [type="range"], [type="file"]),
select,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
}

input,
select,
textarea {
  --background-color: var(--form-element-background-color);
  --border-color: var(--form-element-border-color);
  --color: var(--form-element-color);
  --box-shadow: none;
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [type="checkbox"],
    [type="radio"],
    [readonly]
  ):is(:active, :focus),
:where(select, textarea):is(:active, :focus) {
  --background-color: var(--form-element-active-background-color);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="switch"],
    [readonly]
  ):is(:active, :focus),
:where(select, textarea):is(:active, :focus) {
  --border-color: var(--form-element-active-border-color);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [type="range"],
    [type="file"],
    [readonly]
  ):focus,
select:focus,
textarea:focus {
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-focus-color);
}

input:not([type="submit"], [type="button"], [type="reset"])[disabled],
select[disabled],
textarea[disabled],
:where(fieldset[disabled])
  :is(
    input:not([type="submit"], [type="button"], [type="reset"]),
    select,
    textarea
  ) {
  --background-color: var(--form-element-disabled-background-color);
  --border-color: var(--form-element-disabled-border-color);
  opacity: var(--form-element-disabled-opacity);
  pointer-events: none;
}

:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid] {
  padding-right: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  padding-left: var(--form-element-spacing-horizontal);
  -webkit-padding-start: var(--form-element-spacing-horizontal) !important;
  padding-inline-start: var(--form-element-spacing-horizontal) !important;
  -webkit-padding-end: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  padding-inline-end: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  background-position: center right 0.75rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}
:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid="false"] {
  background-image: var(--icon-valid);
}
:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid="true"] {
  background-image: var(--icon-invalid);
}
:where(input, select, textarea)[aria-invalid="false"] {
  --border-color: var(--form-element-valid-border-color);
}
:where(input, select, textarea)[aria-invalid="false"]:is(:active, :focus) {
  --border-color: var(--form-element-valid-active-border-color) !important;
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-valid-focus-color) !important;
}
:where(input, select, textarea)[aria-invalid="true"] {
  --border-color: var(--form-element-invalid-border-color);
}
:where(input, select, textarea)[aria-invalid="true"]:is(:active, :focus) {
  --border-color: var(--form-element-invalid-active-border-color) !important;
  --box-shadow: 0 0 0 var(--outline-width)
    var(--form-element-invalid-focus-color) !important;
}

[dir="rtl"]
  :where(input, select, textarea):not([type="checkbox"], [type="radio"]):is(
    [aria-invalid],
    [aria-invalid="true"],
    [aria-invalid="false"]
  ) {
  background-position: center left 0.75rem;
}

input::placeholder,
input::-webkit-input-placeholder,
textarea::placeholder,
textarea::-webkit-input-placeholder,
select:invalid {
  color: var(--form-element-placeholder-color);
  opacity: 1;
}

input:not([type="checkbox"], [type="radio"]),
select,
textarea {
  margin-bottom: var(--spacing);
}

select::-ms-expand {
  border: 0;
  background-color: transparent;
}
select:not([multiple], [size]) {
  padding-right: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  padding-left: var(--form-element-spacing-horizontal);
  -webkit-padding-start: var(--form-element-spacing-horizontal);
  padding-inline-start: var(--form-element-spacing-horizontal);
  -webkit-padding-end: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  padding-inline-end: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  background-image: var(--icon-chevron);
  background-position: center right 0.75rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}

[dir="rtl"] select:not([multiple], [size]) {
  background-position: center left 0.75rem;
}

:where(input, select, textarea) + small {
  display: block;
  width: 100%;
  margin-top: calc(var(--spacing) * -0.75);
  margin-bottom: var(--spacing);
  color: var(--muted-color);
}

label > :where(input, select, textarea) {
  margin-top: calc(var(--spacing) * 0.25);
}

/**
 * Form elements
 * Checkboxes & Radios
 */
[type="checkbox"],
[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 1.25em;
  height: 1.25em;
  margin-top: -0.125em;
  margin-right: 0.375em;
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: 0.375em;
  margin-inline-end: 0.375em;
  border-width: var(--border-width);
  font-size: inherit;
  vertical-align: middle;
  cursor: pointer;
}
[type="checkbox"]::-ms-check,
[type="radio"]::-ms-check {
  display: none;
}
[type="checkbox"]:checked,
[type="checkbox"]:checked:active,
[type="checkbox"]:checked:focus,
[type="radio"]:checked,
[type="radio"]:checked:active,
[type="radio"]:checked:focus {
  --background-color: var(--primary);
  --border-color: var(--primary);
  background-image: var(--icon-checkbox);
  background-position: center;
  background-size: 0.75em auto;
  background-repeat: no-repeat;
}
[type="checkbox"] ~ label,
[type="radio"] ~ label {
  display: inline-block;
  margin-right: 0.375em;
  margin-bottom: 0;
  cursor: pointer;
}

[type="checkbox"]:indeterminate {
  --background-color: var(--primary);
  --border-color: var(--primary);
  background-image: var(--icon-minus);
  background-position: center;
  background-size: 0.75em auto;
  background-repeat: no-repeat;
}

[type="radio"] {
  border-radius: 50%;
}
[type="radio"]:checked,
[type="radio"]:checked:active,
[type="radio"]:checked:focus {
  --background-color: var(--primary-inverse);
  border-width: 0.35em;
  background-image: none;
}

[type="checkbox"][role="switch"] {
  --background-color: var(--switch-background-color);
  --border-color: var(--switch-background-color);
  --color: var(--switch-color);
  width: 2.25em;
  height: 1.25em;
  border: var(--border-width) solid var(--border-color);
  border-radius: 1.25em;
  background-color: var(--background-color);
  line-height: 1.25em;
}
[type="checkbox"][role="switch"]:focus {
  --background-color: var(--switch-background-color);
  --border-color: var(--switch-background-color);
}
[type="checkbox"][role="switch"]:checked {
  --background-color: var(--switch-checked-background-color);
  --border-color: var(--switch-checked-background-color);
}
[type="checkbox"][role="switch"]:before {
  display: block;
  width: calc(1.25em - (var(--border-width) * 2));
  height: 100%;
  border-radius: 50%;
  background-color: var(--color);
  content: "";
  transition: margin 0.1s ease-in-out;
}
[type="checkbox"][role="switch"]:checked {
  background-image: none;
}
[type="checkbox"][role="switch"]:checked::before {
  margin-left: calc(1.125em - var(--border-width));
  -webkit-margin-start: calc(1.125em - var(--border-width));
  margin-inline-start: calc(1.125em - var(--border-width));
}

[type="checkbox"][aria-invalid="false"],
[type="checkbox"]:checked[aria-invalid="false"],
[type="radio"][aria-invalid="false"],
[type="radio"]:checked[aria-invalid="false"],
[type="checkbox"][role="switch"][aria-invalid="false"],
[type="checkbox"][role="switch"]:checked[aria-invalid="false"] {
  --border-color: var(--form-element-valid-border-color);
}
[type="checkbox"][aria-invalid="true"],
[type="checkbox"]:checked[aria-invalid="true"],
[type="radio"][aria-invalid="true"],
[type="radio"]:checked[aria-invalid="true"],
[type="checkbox"][role="switch"][aria-invalid="true"],
[type="checkbox"][role="switch"]:checked[aria-invalid="true"] {
  --border-color: var(--form-element-invalid-border-color);
}

/**
 * Form elements
 * Alternatives input types (Not Checkboxes & Radios)
 */
[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}
[type="color"]::-moz-focus-inner {
  padding: 0;
}
[type="color"]::-webkit-color-swatch {
  border: 0;
  border-radius: calc(var(--border-radius) * 0.5);
}
[type="color"]::-moz-color-swatch {
  border: 0;
  border-radius: calc(var(--border-radius) * 0.5);
}

input:not([type="checkbox"], [type="radio"], [type="range"], [type="file"]):is(
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  ) {
  --icon-position: 0.75rem;
  --icon-width: 1rem;
  padding-right: calc(var(--icon-width) + var(--icon-position));
  background-image: var(--icon-date);
  background-position: center right var(--icon-position);
  background-size: var(--icon-width) auto;
  background-repeat: no-repeat;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="time"] {
  background-image: var(--icon-time);
}

[type="date"]::-webkit-calendar-picker-indicator,
[type="datetime-local"]::-webkit-calendar-picker-indicator,
[type="month"]::-webkit-calendar-picker-indicator,
[type="time"]::-webkit-calendar-picker-indicator,
[type="week"]::-webkit-calendar-picker-indicator {
  width: var(--icon-width);
  margin-right: calc(var(--icon-width) * -1);
  margin-left: var(--icon-position);
  opacity: 0;
}

[dir="rtl"]
  :is(
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  ) {
  text-align: right;
}

[type="file"] {
  --color: var(--muted-color);
  padding: calc(var(--form-element-spacing-vertical) * 0.5) 0;
  border: 0;
  border-radius: 0;
  background: none;
}
[type="file"]::file-selector-button {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) / 2);
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::file-selector-button:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
[type="file"]::-webkit-file-upload-button {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) / 2);
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  -webkit-transition: background-color var(--transition),
    border-color var(--transition), color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::-webkit-file-upload-button:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
[type="file"]::-ms-browse {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  margin-inline-start: 0;
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  -ms-transition: background-color var(--transition),
    border-color var(--transition), color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::-ms-browse:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}

[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 1.25rem;
  background: none;
}
[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -webkit-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-moz-range-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -moz-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-ms-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -ms-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -webkit-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -moz-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]::-ms-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -ms-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]:hover,
[type="range"]:focus {
  --range-border-color: var(--range-active-border-color);
  --range-thumb-color: var(--range-thumb-hover-color);
}
[type="range"]:active {
  --range-thumb-color: var(--range-thumb-active-color);
}
[type="range"]:active::-webkit-slider-thumb {
  transform: scale(1.25);
}
[type="range"]:active::-moz-range-thumb {
  transform: scale(1.25);
}
[type="range"]:active::-ms-thumb {
  transform: scale(1.25);
}

input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"] {
  -webkit-padding-start: calc(var(--form-element-spacing-horizontal) + 1.75rem);
  padding-inline-start: calc(var(--form-element-spacing-horizontal) + 1.75rem);
  border-radius: 5rem;
  background-image: var(--icon-search);
  background-position: center left 1.125rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid] {
  -webkit-padding-start: calc(
    var(--form-element-spacing-horizontal) + 1.75rem
  ) !important;
  padding-inline-start: calc(
    var(--form-element-spacing-horizontal) + 1.75rem
  ) !important;
  background-position: center left 1.125rem, center right 0.75rem;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid="false"] {
  background-image: var(--icon-search), var(--icon-valid);
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid="true"] {
  background-image: var(--icon-search), var(--icon-invalid);
}

[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  display: none;
}

[dir="rtl"]
  :where(input):not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"] {
  background-position: center right 1.125rem;
}
[dir="rtl"]
  :where(input):not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid] {
  background-position: center right 1.125rem, center left 0.75rem;
}

/**
 * Table
 */
:where(table) {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  text-indent: 0;
}

th,
td {
  padding: calc(var(--spacing) / 2) var(--spacing);
  border-bottom: var(--border-width) solid var(--table-border-color);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  text-align: left;
  text-align: start;
}

tfoot th,
tfoot td {
  border-top: var(--border-width) solid var(--table-border-color);
  border-bottom: 0;
}

table[role="grid"] tbody tr:nth-child(odd) {
  background-color: var(--table-row-stripped-background-color);
}

/**
 * Code
 */
pre,
code,
kbd,
samp {
  font-size: 0.875em;
  font-family: var(--font-family);
}

pre {
  -ms-overflow-style: scrollbar;
  overflow: auto;
}

pre,
code,
kbd {
  border-radius: var(--border-radius);
  background: var(--code-background-color);
  color: var(--code-color);
  font-weight: var(--font-weight);
  line-height: initial;
}

code,
kbd {
  display: inline-block;
  padding: 0.375rem 0.5rem;
}

pre {
  display: block;
  margin-bottom: var(--spacing);
  overflow-x: auto;
}
pre > code {
  display: block;
  padding: var(--spacing);
  background: none;
  font-size: 14px;
  line-height: var(--line-height);
}

code b {
  color: var(--code-tag-color);
  font-weight: var(--font-weight);
}
code i {
  color: var(--code-property-color);
  font-style: normal;
}
code u {
  color: var(--code-value-color);
  text-decoration: none;
}
code em {
  color: var(--code-comment-color);
  font-style: normal;
}

kbd {
  background-color: var(--code-kbd-background-color);
  color: var(--code-kbd-color);
  vertical-align: baseline;
}

/**
 * Miscs
 */
hr {
  height: 0;
  border: 0;
  border-top: 1px solid var(--muted-border-color);
  color: inherit;
}

[hidden],
template {
  display: none !important;
}

canvas {
  display: inline-block;
}

/**
 * Accordion (<details>)
 */
details {
  display: block;
  margin-bottom: var(--spacing);
  padding-bottom: var(--spacing);
  border-bottom: var(--border-width) solid var(--accordion-border-color);
}
details summary {
  line-height: 1rem;
  list-style-type: none;
  cursor: pointer;
  transition: color var(--transition);
}
details summary:not([role]) {
  color: var(--accordion-close-summary-color);
}
details summary::-webkit-details-marker {
  display: none;
}
details summary::marker {
  display: none;
}
details summary::-moz-list-bullet {
  list-style-type: none;
}
details summary::after {
  display: block;
  width: 1rem;
  height: 1rem;
  -webkit-margin-start: calc(var(--spacing, 1rem) * 0.5);
  margin-inline-start: calc(var(--spacing, 1rem) * 0.5);
  float: right;
  transform: rotate(-90deg);
  background-image: var(--icon-chevron);
  background-position: right center;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  content: "";
  transition: transform var(--transition);
}
details summary:focus {
  outline: none;
}
details summary:focus:not([role="button"]) {
  color: var(--accordion-active-summary-color);
}
details summary[role="button"] {
  width: 100%;
  text-align: left;
}
details summary[role="button"]::after {
  height: calc(1rem * var(--line-height, 1.5));
  background-image: var(--icon-chevron-button);
}
details summary[role="button"]:not(.outline).contrast::after {
  background-image: var(--icon-chevron-button-inverse);
}
details[open] > summary {
  margin-bottom: calc(var(--spacing));
}
details[open] > summary:not([role]):not(:focus) {
  color: var(--accordion-open-summary-color);
}
details[open] > summary::after {
  transform: rotate(0);
}

[dir="rtl"] details summary {
  text-align: right;
}
[dir="rtl"] details summary::after {
  float: left;
  background-position: left center;
}

/**
 * Card (<article>)
 */
article {
  margin: var(--block-spacing-vertical) 0;
  padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
  border-radius: var(--border-radius);
  background: var(--card-background-color);
  box-shadow: var(--card-box-shadow);
}
article > header,
article > footer {
  margin-right: calc(var(--block-spacing-horizontal) * -1);
  margin-left: calc(var(--block-spacing-horizontal) * -1);
  padding: calc(var(--block-spacing-vertical) * 0.66)
    var(--block-spacing-horizontal);
  background-color: var(--card-sectionning-background-color);
}
article > header {
  margin-top: calc(var(--block-spacing-vertical) * -1);
  margin-bottom: var(--block-spacing-vertical);
  border-bottom: var(--border-width) solid var(--card-border-color);
  border-top-right-radius: var(--border-radius);
  border-top-left-radius: var(--border-radius);
}
article > footer {
  margin-top: var(--block-spacing-vertical);
  margin-bottom: calc(var(--block-spacing-vertical) * -1);
  border-top: var(--border-width) solid var(--card-border-color);
  border-bottom-right-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
}

/**
 * Modal (<dialog>)
 */
#mount {
  --scrollbar-width: 0px;
}

dialog {
  display: flex;
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: inherit;
  min-width: 100%;
  height: inherit;
  min-height: 100%;
  padding: var(--spacing);
  border: 0;
  -webkit-backdrop-filter: var(--modal-overlay-backdrop-filter);
  backdrop-filter: var(--modal-overlay-backdrop-filter);
  background-color: var(--modal-overlay-background-color);
  color: var(--color);
}
dialog article {
  max-height: calc(100vh - var(--spacing) * 2);
  overflow: auto;
}
@media (min-width: 576px) {
  dialog article {
    max-width: 510px;
  }
}
@media (min-width: 768px) {
  dialog article {
    max-width: 700px;
  }
}
dialog article > header,
dialog article > footer {
  padding: calc(var(--block-spacing-vertical) * 0.5)
    var(--block-spacing-horizontal);
}
dialog article > header .close {
  margin: 0;
  margin-left: var(--spacing);
  float: right;
}
dialog article > footer {
  text-align: right;
}
dialog article > footer [role="button"] {
  margin-bottom: 0;
}
dialog article > footer [role="button"]:not(:first-of-type) {
  margin-left: calc(var(--spacing) * 0.5);
}
dialog article p:last-of-type {
  margin: 0;
}
dialog article .close {
  display: block;
  width: 1rem;
  height: 1rem;
  margin-top: calc(var(--block-spacing-vertical) * -0.5);
  margin-bottom: var(--typography-spacing-vertical);
  margin-left: auto;
  background-image: var(--icon-close);
  background-position: center;
  background-size: auto 1rem;
  background-repeat: no-repeat;
  opacity: 0.5;
  transition: opacity var(--transition);
}
dialog article .close:is([aria-current], :hover, :active, :focus) {
  opacity: 1;
}
dialog:not([open]),
dialog[open="false"] {
  display: none;
}

.modal-is-open {
  padding-right: var(--scrollbar-width, 0px);
  overflow: hidden;
  pointer-events: none;
}
.modal-is-open dialog {
  pointer-events: auto;
}

:where(.modal-is-opening, .modal-is-closing) dialog,
:where(.modal-is-opening, .modal-is-closing) dialog > article {
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
}
:where(.modal-is-opening, .modal-is-closing) dialog {
  animation-duration: 0.8s;
  animation-name: modal-overlay;
}
:where(.modal-is-opening, .modal-is-closing) dialog > article {
  animation-delay: 0.2s;
  animation-name: modal;
}

.modal-is-closing dialog,
.modal-is-closing dialog > article {
  animation-delay: 0s;
  animation-direction: reverse;
}

@keyframes modal-overlay {
  from {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    background-color: transparent;
  }
}
@keyframes modal {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
}
/**
 * Nav
 */
:where(nav li)::before {
  float: left;
  content: "\u200B";
}

nav,
nav ul {
  display: flex;
}

nav {
  justify-content: space-between;
}
nav ol,
nav ul {
  align-items: center;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
}
nav ol:first-of-type,
nav ul:first-of-type {
  margin-left: calc(var(--nav-element-spacing-horizontal) * -1);
}
nav ol:last-of-type,
nav ul:last-of-type {
  margin-right: calc(var(--nav-element-spacing-horizontal) * -1);
}
nav li {
  display: inline-block;
  margin: 0;
  padding: var(--nav-element-spacing-vertical)
    var(--nav-element-spacing-horizontal);
}
nav li > * {
  --spacing: 0;
}
nav :where(a, [role="link"]) {
  display: inline-block;
  margin: calc(var(--nav-link-spacing-vertical) * -1)
    calc(var(--nav-link-spacing-horizontal) * -1);
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
  border-radius: var(--border-radius);
  text-decoration: none;
}
nav :where(a, [role="link"]):is([aria-current], :hover, :active, :focus) {
  text-decoration: none;
}
nav[aria-label="breadcrumb"] {
  align-items: center;
  justify-content: start;
}
nav[aria-label="breadcrumb"] ul li:not(:first-child) {
  -webkit-margin-start: var(--nav-link-spacing-horizontal);
  margin-inline-start: var(--nav-link-spacing-horizontal);
}
nav[aria-label="breadcrumb"] ul li:not(:last-child) ::after {
  position: absolute;
  width: calc(var(--nav-link-spacing-horizontal) * 2);
  -webkit-margin-start: calc(var(--nav-link-spacing-horizontal) / 2);
  margin-inline-start: calc(var(--nav-link-spacing-horizontal) / 2);
  content: "/";
  color: var(--muted-color);
  text-align: center;
}
nav[aria-label="breadcrumb"] a[aria-current] {
  background-color: transparent;
  color: inherit;
  text-decoration: none;
  pointer-events: none;
}
nav [role="button"] {
  margin-right: inherit;
  margin-left: inherit;
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
}

aside nav,
aside ol,
aside ul,
aside li {
  display: block;
}
aside li {
  padding: calc(var(--nav-element-spacing-vertical) * 0.5)
    var(--nav-element-spacing-horizontal);
}
aside li a {
  display: block;
}
aside li [role="button"] {
  margin: inherit;
}

[dir="rtl"] nav[aria-label="breadcrumb"] ul li:not(:last-child) ::after {
  content: "\\\\";
}

/**
 * Progress
 */
progress {
  display: inline-block;
  vertical-align: baseline;
}

progress {
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  appearance: none;
  width: 100%;
  height: 0.5rem;
  margin-bottom: calc(var(--spacing) * 0.5);
  overflow: hidden;
  border: 0;
  border-radius: var(--border-radius);
  background-color: var(--progress-background-color);
  color: var(--progress-color);
}
progress::-webkit-progress-bar {
  border-radius: var(--border-radius);
  background: none;
}
progress[value]::-webkit-progress-value {
  background-color: var(--progress-color);
}
progress::-moz-progress-bar {
  background-color: var(--progress-color);
}
@media (prefers-reduced-motion: no-preference) {
  progress:indeterminate {
    background: var(--progress-background-color)
      linear-gradient(
        to right,
        var(--progress-color) 30%,
        var(--progress-background-color) 30%
      )
      top left/150% 150% no-repeat;
    animation: progress-indeterminate 1s linear infinite;
  }
  progress:indeterminate[value]::-webkit-progress-value {
    background-color: transparent;
  }
  progress:indeterminate::-moz-progress-bar {
    background-color: transparent;
  }
}

@media (prefers-reduced-motion: no-preference) {
  [dir="rtl"] progress:indeterminate {
    animation-direction: reverse;
  }
}

@keyframes progress-indeterminate {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
/**
 * Dropdown ([role="list"])
 */
details[role="list"],
li[role="list"] {
  position: relative;
}

details[role="list"] summary + ul,
li[role="list"] > ul {
  display: flex;
  z-index: 99;
  position: absolute;
  top: auto;
  right: 0;
  left: 0;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border: var(--border-width) solid var(--dropdown-border-color);
  border-radius: var(--border-radius);
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  background-color: var(--dropdown-background-color);
  box-shadow: var(--card-box-shadow);
  color: var(--dropdown-color);
  white-space: nowrap;
}
details[role="list"] summary + ul li,
li[role="list"] > ul li {
  width: 100%;
  margin-bottom: 0;
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    var(--form-element-spacing-horizontal);
  list-style: none;
}
details[role="list"] summary + ul li:first-of-type,
li[role="list"] > ul li:first-of-type {
  margin-top: calc(var(--form-element-spacing-vertical) * 0.5);
}
details[role="list"] summary + ul li:last-of-type,
li[role="list"] > ul li:last-of-type {
  margin-bottom: calc(var(--form-element-spacing-vertical) * 0.5);
}
details[role="list"] summary + ul li a,
li[role="list"] > ul li a {
  display: block;
  margin: calc(var(--form-element-spacing-vertical) * -0.5)
    calc(var(--form-element-spacing-horizontal) * -1);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    var(--form-element-spacing-horizontal);
  overflow: hidden;
  color: var(--dropdown-color);
  text-decoration: none;
  text-overflow: ellipsis;
}
details[role="list"] summary + ul li a:hover,
li[role="list"] > ul li a:hover {
  background-color: var(--dropdown-hover-background-color);
}

details[role="list"] summary::after,
li[role="list"] > a::after {
  display: block;
  width: 1rem;
  height: calc(1rem * var(--line-height, 1.5));
  -webkit-margin-start: 0.5rem;
  margin-inline-start: 0.5rem;
  float: right;
  transform: rotate(0deg);
  background-position: right center;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  content: "";
}

details[role="list"] {
  padding: 0;
  border-bottom: none;
}
details[role="list"] summary {
  margin-bottom: 0;
}
details[role="list"] summary:not([role]) {
  height: calc(
    1rem * var(--line-height) + var(--form-element-spacing-vertical) * 2 +
      var(--border-width) * 2
  );
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--form-element-border-color);
  border-radius: var(--border-radius);
  background-color: var(--form-element-background-color);
  color: var(--form-element-placeholder-color);
  line-height: inherit;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
details[role="list"] summary:not([role]):active,
details[role="list"] summary:not([role]):focus {
  border-color: var(--form-element-active-border-color);
  background-color: var(--form-element-active-background-color);
}
details[role="list"] summary:not([role]):focus {
  box-shadow: 0 0 0 var(--outline-width) var(--form-element-focus-color);
}
details[role="list"][open] summary {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
details[role="list"][open] summary::before {
  display: block;
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: none;
  content: "";
  cursor: default;
}

nav details[role="list"] summary,
nav li[role="list"] a {
  display: flex;
  direction: ltr;
}

nav details[role="list"] summary + ul,
nav li[role="list"] > ul {
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: var(--border-radius);
}
nav details[role="list"] summary + ul li a,
nav li[role="list"] > ul li a {
  border-radius: 0;
}

nav details[role="list"] summary,
nav details[role="list"] summary:not([role]) {
  height: auto;
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
}
nav details[role="list"][open] summary {
  border-radius: var(--border-radius);
}
nav details[role="list"] summary + ul {
  margin-top: var(--outline-width);
  -webkit-margin-start: 0;
  margin-inline-start: 0;
}
nav details[role="list"] summary[role="link"] {
  margin-bottom: calc(var(--nav-link-spacing-vertical) * -1);
  line-height: var(--line-height);
}
nav details[role="list"] summary[role="link"] + ul {
  margin-top: calc(var(--nav-link-spacing-vertical) + var(--outline-width));
  -webkit-margin-start: calc(var(--nav-link-spacing-horizontal) * -1);
  margin-inline-start: calc(var(--nav-link-spacing-horizontal) * -1);
}

li[role="list"]:hover > ul,
li[role="list"] a:active ~ ul,
li[role="list"] a:focus ~ ul {
  display: flex;
}
li[role="list"] > ul {
  display: none;
  margin-top: calc(var(--nav-link-spacing-vertical) + var(--outline-width));
  -webkit-margin-start: calc(
    var(--nav-element-spacing-horizontal) - var(--nav-link-spacing-horizontal)
  );
  margin-inline-start: calc(
    var(--nav-element-spacing-horizontal) - var(--nav-link-spacing-horizontal)
  );
}
li[role="list"] > a::after {
  background-image: var(--icon-chevron);
}

/**
 * Loading ([aria-busy=true])
 */
[aria-busy="true"] {
  cursor: progress;
}

[aria-busy="true"]:not(input, select, textarea)::before {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 0.1875em solid currentColor;
  border-radius: 1em;
  border-right-color: transparent;
  content: "";
  vertical-align: text-bottom;
  vertical-align: -0.125em;
  animation: spinner 0.75s linear infinite;
  opacity: var(--loading-spinner-opacity);
}
[aria-busy="true"]:not(input, select, textarea):not(:empty)::before {
  margin-right: calc(var(--spacing) * 0.5);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) * 0.5);
  margin-inline-end: calc(var(--spacing) * 0.5);
}
[aria-busy="true"]:not(input, select, textarea):empty {
  text-align: center;
}

button[aria-busy="true"],
input[type="submit"][aria-busy="true"],
input[type="button"][aria-busy="true"],
input[type="reset"][aria-busy="true"],
a[aria-busy="true"] {
  pointer-events: none;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
/**
 * Tooltip ([data-tooltip])
 */
[data-tooltip] {
  position: relative;
}
[data-tooltip]:not(a, button, input) {
  border-bottom: 1px dotted;
  text-decoration: none;
  cursor: help;
}
[data-tooltip][data-placement="top"]::before,
[data-tooltip][data-placement="top"]::after,
[data-tooltip]::before,
[data-tooltip]::after {
  display: block;
  z-index: 99;
  position: absolute;
  bottom: 100%;
  left: 50%;
  padding: 0.25rem 0.5rem;
  overflow: hidden;
  transform: translate(-50%, -0.25rem);
  border-radius: var(--border-radius);
  background: var(--tooltip-background-color);
  content: attr(data-tooltip);
  color: var(--tooltip-color);
  font-style: normal;
  font-weight: var(--font-weight);
  font-size: 0.875rem;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
}
[data-tooltip][data-placement="top"]::after,
[data-tooltip]::after {
  padding: 0;
  transform: translate(-50%, 0rem);
  border-top: 0.3rem solid;
  border-right: 0.3rem solid transparent;
  border-left: 0.3rem solid transparent;
  border-radius: 0;
  background-color: transparent;
  content: "";
  color: var(--tooltip-background-color);
}
[data-tooltip][data-placement="bottom"]::before,
[data-tooltip][data-placement="bottom"]::after {
  top: 100%;
  bottom: auto;
  transform: translate(-50%, 0.25rem);
}
[data-tooltip][data-placement="bottom"]:after {
  transform: translate(-50%, -0.3rem);
  border: 0.3rem solid transparent;
  border-bottom: 0.3rem solid;
}
[data-tooltip][data-placement="left"]::before,
[data-tooltip][data-placement="left"]::after {
  top: 50%;
  right: 100%;
  bottom: auto;
  left: auto;
  transform: translate(-0.25rem, -50%);
}
[data-tooltip][data-placement="left"]:after {
  transform: translate(0.3rem, -50%);
  border: 0.3rem solid transparent;
  border-left: 0.3rem solid;
}
[data-tooltip][data-placement="right"]::before,
[data-tooltip][data-placement="right"]::after {
  top: 50%;
  right: auto;
  bottom: auto;
  left: 100%;
  transform: translate(0.25rem, -50%);
}
[data-tooltip][data-placement="right"]:after {
  transform: translate(-0.3rem, -50%);
  border: 0.3rem solid transparent;
  border-right: 0.3rem solid;
}
[data-tooltip]:focus::before,
[data-tooltip]:focus::after,
[data-tooltip]:hover::before,
[data-tooltip]:hover::after {
  opacity: 1;
}
@media (hover: hover) and (pointer: fine) {
  [data-tooltip][data-placement="bottom"]:focus::before,
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::before,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::after,
  [data-tooltip]:hover::before,
  [data-tooltip]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-top;
  }
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::after,
  [data-tooltip]:hover::after {
    animation-name: tooltip-caret-slide-top;
  }
  [data-tooltip][data-placement="bottom"]:focus::before,
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover::before,
  [data-tooltip][data-placement="bottom"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-bottom;
  }
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover::after {
    animation-name: tooltip-caret-slide-bottom;
  }
  [data-tooltip][data-placement="left"]:focus::before,
  [data-tooltip][data-placement="left"]:focus::after,
  [data-tooltip][data-placement="left"]:hover::before,
  [data-tooltip][data-placement="left"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-left;
  }
  [data-tooltip][data-placement="left"]:focus::after,
  [data-tooltip][data-placement="left"]:hover::after {
    animation-name: tooltip-caret-slide-left;
  }
  [data-tooltip][data-placement="right"]:focus::before,
  [data-tooltip][data-placement="right"]:focus::after,
  [data-tooltip][data-placement="right"]:hover::before,
  [data-tooltip][data-placement="right"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-right;
  }
  [data-tooltip][data-placement="right"]:focus::after,
  [data-tooltip][data-placement="right"]:hover::after {
    animation-name: tooltip-caret-slide-right;
  }
}
@keyframes tooltip-slide-top {
  from {
    transform: translate(-50%, 0.75rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -0.25rem);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-top {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -0.25rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0rem);
    opacity: 1;
  }
}
@keyframes tooltip-slide-bottom {
  from {
    transform: translate(-50%, -0.75rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0.25rem);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-bottom {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -0.5rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -0.3rem);
    opacity: 1;
  }
}
@keyframes tooltip-slide-left {
  from {
    transform: translate(0.75rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(-0.25rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-left {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(0.05rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(0.3rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-slide-right {
  from {
    transform: translate(-0.75rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(0.25rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-right {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-0.05rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(-0.3rem, -50%);
    opacity: 1;
  }
}

/**
 * Accessibility & User interaction
 */
[aria-controls] {
  cursor: pointer;
}

[aria-disabled="true"],
[disabled] {
  cursor: not-allowed;
}

[aria-hidden="false"][hidden] {
  display: initial;
}

[aria-hidden="false"][hidden]:not(:focus) {
  clip: rect(0, 0, 0, 0);
  position: absolute;
}

a,
area,
button,
input,
label,
select,
summary,
textarea,
[tabindex] {
  -ms-touch-action: manipulation;
}

[dir="rtl"] {
  direction: rtl;
}

/**
* Reduce Motion Features
*/
@media (prefers-reduced-motion: reduce) {
  *:not([aria-busy="true"]),
  :not([aria-busy="true"])::before,
  :not([aria-busy="true"])::after {
    background-attachment: initial !important;
    animation-duration: 1ms !important;
    animation-delay: -1ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-delay: 0s !important;
    transition-duration: 0s !important;
  }
}

/*# sourceMappingURL=custom.css.map */
`,IMMERSIVE_TRANSLATE_COMMON_CSS:`#mount#mount {
  /* --primary: rgb(227, 59, 126); */
  --primary: #ea4c89;
  --primary-hover: #f082ac;
}

li.select-link.select-link:hover > ul {
  display: none;
}
li.select-link.select-link > ul {
  display: none;
}
li.select-link.select-link a:focus ~ ul {
  display: none;
}

li.select-link.select-link a:active ~ ul {
  display: none;
}
li.select-link-active.select-link-active > ul {
  display: flex;
}
li.select-link-active.select-link-active:hover > ul {
  display: flex;
}

li.select-link-active.select-link-active a:focus ~ ul {
  display: flex;
}

li.select-link-active.select-link-active a:active ~ ul {
  display: flex;
}
ul.select-link-ul.select-link-ul {
  right: 0px;
  left: auto;
}

a.select-link-selected {
  background-color: var(--primary-focus);
}
.immersive-translate-no-select {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

/* li[role="list"].no-arrow > a::after { */
/*   background-image: none; */
/*   width: 0; */
/*   color: var(--color); */
/* } */
li[role="list"].no-arrow {
  margin-left: 8px;
  padding-right: 0;
}
li[role="list"] > a::after {
  -webkit-margin-start: 0.2rem;
  margin-inline-start: 0.2rem;
}

li[role="list"].no-arrow > a,
li[role="list"].no-arrow > a:link,
li[role="list"].no-arrow > a:visited {
  color: var(--secondary);
}

select.min-select {
  --form-element-spacing-horizontal: 0;
  margin-bottom: 0;
  max-width: 128px;
  color: var(--primary);
  font-size: 14px;
  border: none;
  padding: 0;
  padding-right: 20px;
  background-position: center right 0;
  background-size: 16px auto;
  text-overflow: ellipsis;
  text-align: right;
  color: var(--color);
}
select.min-select-secondary {
  color: var(--color);
}
select.min-select:focus {
  outline: none;
  border: none;
  --box-shadow: none;
}
select.min-select-no-arrow {
  background-image: none;
  padding-right: 0;
}

select.min-select-left {
  padding-right: 0px;
  /* padding-left: 24px; */
  /* background-position: center left 0; */
  text-overflow: ellipsis;
  text-align: left;
}

.muted {
  color: var(--muted-color);
}

.select.button-select {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
  --color: var(--secondary-inverse);
  cursor: pointer;
  --box-shadow: var(--button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 16px;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
  -webkit-appearance: button;
  margin: 0;
  margin-bottom: 0px;
  overflow: visible;
  font-family: inherit;
  text-transform: none;
}
`,IMMERSIVE_TRANSLATE_POPUP_CSS:`html {
  font-size: 17px;
  --font-size: 17px;
}

body {
  max-width: 100%;
  padding: 0;
  margin: 0;
  min-width: 250px;
  border-radius: 10px;
}
.immersive-translate-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  touch-action: none;
}
.immersive-translate-popup-wrapper {
  background: var(--background-color);
}

#mount#mount {
  --font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  --line-height: 1.5;
  --font-weight: 400;
  --font-size: 16px;
  --border-radius: 4px;
  --border-width: 1px;
  --outline-width: 3px;
  --spacing: 16px;
  --typography-spacing-vertical: 24px;
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
  --grid-spacing-vertical: 0;
  --grid-spacing-horizontal: var(--spacing);
  --form-element-spacing-vertical: 12px;
  --form-element-spacing-horizontal: 16px;
  --nav-element-spacing-vertical: 16px;
  --nav-element-spacing-horizontal: 8px;
  --nav-link-spacing-vertical: 8px;
  --nav-link-spacing-horizontal: 8px;
  --form-label-font-weight: var(--font-weight);
  --transition: 0.2s ease-in-out;
  --modal-overlay-backdrop-filter: blur(4px);
}
#mount {
  min-width: 250px;
}
.main-button {
  font-size: 14px;
  vertical-align: middle;
}

.pt-4 {
  padding-top: 24px;
}
.p-2 {
  padding: 8px;
}
.pl-5 {
  padding-left: 48px;
}
.p-0 {
  padding: 0;
}
.pl-2 {
  padding-left: 8px;
}
.pl-4 {
  padding-left: 24px;
}
.pt-2 {
  padding-top: 8px;
}

.pb-2 {
  padding-bottom: 8px;
}

.pr-5 {
  padding-right: 48px;
}
.text-sm {
  font-size: 14px;
}

.flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}

.mb-2 {
  margin-bottom: 8px;
}
.inline-block {
  display: inline-block;
}

.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}

.mt-2 {
  margin-top: 8px;
}
.mt-0 {
  margin-top: 0;
}

.mb-1 {
  margin-bottom: 4px;
}
.ml-4 {
  margin-left: 24px;
}
.ml-3 {
  margin-left: 16px;
}
.ml-2 {
  margin-left: 8px;
}
.mr-1 {
  margin-right: 4px;
}
.pl-3 {
  padding-left: 12px;
}
.pr-3 {
  padding-right: 12px;
}
.p-3 {
  padding: 12px;
}
.mt-4 {
  margin-top: 24px;
}
.py-0 {
  padding-top: 0;
  padding-bottom: 0;
}

.left-auto {
  left: auto !important;
}

.max-h-28 {
  max-height: 112px;
}
.max-h-30 {
  max-height: 120px;
}
.overflow-y-scroll {
  overflow-y: scroll;
}
.text-xs {
  font-size: 12px;
}

.flex-1 {
  flex: 1;
}
.flex-3 {
  flex: 3;
}
.flex-4 {
  flex: 4;
}
.flex-2 {
  flex: 2;
}
.mt-3 {
  margin-top: 16px;
}
.items-center {
  align-items: center;
}
.items-end {
  align-items: flex-end;
}
.items-baseline {
  align-items: baseline;
}

.my-5 {
  margin-top: 48px;
  margin-bottom: 48px;
}
.my-4 {
  margin-top: 24px;
  margin-bottom: 24px;
}
.my-3 {
  margin-top: 16px;
  margin-bottom: 16px;
}
.pt-3 {
  padding-top: 12px;
}
.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}
.pt-2 {
  padding-top: 8px;
}
.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}
.pt-1 {
  padding-top: 4px;
}
.px-1 {
  padding-left: 4px;
  padding-right: 4px;
}
.pb-2 {
  padding-bottom: 8px;
}
.justify-end {
  justify-content: flex-end;
}
.w-auto {
  width: auto;
}
`,IMMERSIVE_TRANSLATE_POPUP_HTML:`<style>
  html {
    font-size: 17px;
  }
  .immersive-translate-popup-container {
    position: fixed;
    padding: 0;
    z-index: 999999;
  }
  .immersive-translate-popup-btn {
    background-color: #ea4c89;
    font-size: 18px;
    opacity: 0.5;
    width: 36px;
    height: 36px;
    border-radius: 9999999px;
  }
  .immersive-translate-popup-btn > svg {
  }
  #mount#mount {
    position: absolute;
    display: none;
    min-width: 250px;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    --font-size: 17px;
    font-size: 17px;
  }
</style>

<div
  id="immersive-translate-popup-container"
  class="immersive-translate-popup-container"
>
  <button
    id="immersive-translate-popup-btn"
    class="immersive-translate-popup-btn"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M5 15v2a2 2 0 0 0 1.85 1.995L7 19h3v2H7a4 4 0 0 1-4-4v-2h2zm13-5l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16 10h2zm-1 2.885L15.753 16h2.492L17 12.885zM8 2v2h4v7H8v3H6v-3H2V4h4V2h2zm9 1a4 4 0 0 1 4 4v2h-2V7a2 2 0 0 0-2-2h-3V3h3zM6 6H4v3h2V6zm4 0H8v3h2V6z"
        fill="rgba(255,255,255,1)"
      />
    </svg>
  </button>
  <div class="immersive-translate-popup-mount" id="mount"></div>
</div>
`,IMMERSIVE_TRANSLATE_POPUP_JS:`const immersivePopupRoot = document.getElementById("immersive-translate-popup");
const shadowRoot = immersivePopupRoot.shadowRoot;

const root = shadowRoot.getElementById("immersive-translate-popup-container");

const btn = root.querySelector("#immersive-translate-popup-btn");

// btn.addEventListener("click", handleButtonClick);

const mountContainer = root.querySelector("#mount");

function showButton() {
  // hidden mount container, and show btn
  mountContainer.style.display = "none";
  btn.style.display = "block";
}

document.addEventListener("click", (e) => {
  if (e.target.id !== "immersive-translate-popup") {
    showButton();
  }
});
`,OPTIONS_URL:"https://immersive-translate.owenyoung.com/options/",MOCK:"0",DEBUG:"0",IMMERSIVE_TRANSLATE_USERSCRIPT:"1"};var vf=ro(2),ao=ro(3);function ro(e){if(typeof e!="number"||Number.isNaN(e)||e<1||e===Number.POSITIVE_INFINITY)throw new Error("`"+e+"` is not a valid argument for `n-gram`");return u;function u(t){let n=[];if(t==null)return n;let a=typeof t.slice=="function"?t:String(t),r=a.length-e+1;if(r<1)return n;for(;r--;)n[r]=a.slice(r,r+e);return n}}var ql=/\s+/g,Wl=/[\t\n\v\f\r ]+/g;function oo(e,u){u?typeof u=="string"&&(u={style:u}):u={};let t=u.preserveLineEndings?Vl:Kl;return String(e).replace(u.style==="html"?Wl:ql,u.trim?Gl(t):t)}function Vl(e){let u=/\r?\n|\r/.exec(e);return u?u[0]:" "}function Kl(){return" "}function Gl(e){return u;function u(t,n,a){return n===0||n+t.length===a.length?"":e(t)}}var io={}.hasOwnProperty;function Jl(e){return e==null?"":oo(String(e).replace(/[\u0021-\u0040]+/g," ")).trim().toLowerCase()}function Yl(e){return ao(" "+Jl(e)+" ")}function Xl(e){let u=Yl(e),t={},n=-1;for(;++n<u.length;)io.call(t,u[n])?t[u[n]]++:t[u[n]]=1;return t}function so(e){let u=Xl(e),t=[],n;for(n in u)io.call(u,n)&&t.push([n,u[n]]);return t.sort(Ql),t}function Ql(e,u){return e[1]-u[1]}var Zl={cmn:/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,Latin:/[A-Za-z\u00AA\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uAB66-\uAB69\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A]|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]/g,Cyrillic:/[\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F]|\uD838[\uDC30-\uDC6D\uDC8F]/g,Arabic:/[\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C-\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u0870-\u088E\u0890\u0891\u0898-\u08E1\u08E3-\u08FF\uFB50-\uFBC2\uFBD3-\uFD3D\uFD40-\uFD8F\uFD92-\uFDC7\uFDCF\uFDF0-\uFDFF\uFE70-\uFE74\uFE76-\uFEFC]|\uD803[\uDE60-\uDE7E\uDEFD-\uDEFF]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]/g,ben:/[\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FE]/g,Devanagari:/[\u0900-\u0950\u0955-\u0963\u0966-\u097F\uA8E0-\uA8FF]|\uD806[\uDF00-\uDF09]/g,jpn:/[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g,jav:/[\uA980-\uA9CD\uA9D0-\uA9D9\uA9DE\uA9DF]/g,kor:/[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,tel:/[\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C77-\u0C7F]/g,tam:/[\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA]|\uD807[\uDFC0-\uDFF1\uDFFF]/g,guj:/[\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9-\u0AFF]/g,kan:/[\u0C80-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3]/g,mal:/[\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4F\u0D54-\u0D63\u0D66-\u0D7F]/g,mya:/[\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F]/g,pan:/[\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A76]/g,amh:/[\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]/g,tha:/[\u0E01-\u0E3A\u0E40-\u0E5B]/g,sin:/[\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4]|\uD804[\uDDE1-\uDDF4]/g,ell:/[\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65]|\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]/g},Rn={Latin:{spa:" de|de |os | la| a |la | y |\xF3n |i\xF3n|es |ere|rec|ien|o a|der|ci\xF3|a p|cho|ech|en |ent|a l|aci|e d|el |ona|na | co|as |al |da | to|ene|e l| en| el| pe|nte|tod|ho | su|per|ad | ti|a t|ers|tie| se|rso| pr|son|e s|te |oda|cia|n d|o d|dad|ida| in|ne | es|ion|cio|s d|con|est|a e| po|men| li|res|nci|su |to |tra| re|n e| lo|tad| na|los|a s| o |ia |que| pa|r\xE1 |pro| un|s y|ual|s e|lib|nac|do |ra |er |nal|ue | qu|e e|a d|ar |nes|ica|a c|sta|ser|or |ter|se |por|cci|io |des|ado|les|one|a a|del|l d|ndi| so| cu|s p|ale|s n|ame|par|ici|oci|una|ber|s t|rta|com| di|e a|imi|o s|e c|ert|o e|dos|las|o p|ant|dic|nto| al|ara|ibe|enc|cas| as|e p|ten|ali|o t|soc|y l|n c|s l|l t|pre|nta|so |tos|y a|ria|n t|die|a u| fu|no |l p|ial|qui|dis|s o|hos|gua|igu| ig| ca|sar| ma|l e| ac|tiv|s a|re |nad|vid|era| tr|ier|cua|n p|cla|ade|bre|s s|esa|ntr|ecc|a i| le|lid|das|d d|ido|ari|ind|ada|nda|fun|mie|ca |tic|eli|ta |y d|nid|e i|n l|ios|o y|esp|iva|y e|mat|bli|r a|dr\xE1|tri|cti|tal|rim|ont|er\xE1|us |sus|end|pen|tor|ito|ond|ori|uie|lig|n a|ist|rac|lar|rse|tar|mo |omo|ibr|odo|edi|med| me|nio|a y|eda|isf|lo |aso|l m|ias|ico|lic|ple|ste|act|tec|ote|rot|ele|ura| ni|ie |adi|u p|seg|s i|un |und|a n|lqu|alq|o i|inc|sti| si|n s|ern",eng:"the| th| an|he |nd |ion|and| to|to |tio| of|on |of | in|al |ati|or |ght|igh|rig| ri|ne |ent|one|ll |is |as |ver|ed | be|e r|in |t t|all|eve|ht | or|ery|s t|ty | ev|e h|yon| ha|ryo|e a|be |his| fr|ng |d t|has| sh|ing| hi|sha| pr| co| re|hal|nal|y a|s a|n t|ce |men|ree|fre|e s|l b|nat|for|ts |nt |n a|ity|ry |her|nce|ect|d i| pe|pro|n o|cti| fo|e e|ly |es | no|ona|ny |any|er |re |f t|e o| de|s o| wi|ter|nte|e i|ons| en| ar|res|ers|y t|per|d f| a | on|ith|l a|e t|oci|soc|lit| as| se|dom|edo|eed|nti|s e|t o|oth|wit| di|equ|t a|ted|st |y o|int|e p| ma| so| na|l o|e c|ch |d a|enc|th |are|ns |ic | un| fu|tat|ial|cia| ac|hts|nit|qua| eq| al|om |e w|d o|f h|ali|ote|n e| wh|r t|sta|ge |thi|o a|tit|ual|an |te |ess| ch|le |ary|e f|by | by|y i|tec|uni|o t|o o| li|no | la|s r| su|inc|led|rot|con| pu| he|ere|imi|r a|ntr| st| ot|eli|age|dis|s d|tle|itl|hou|son|duc|edu| wo|ate|ble|ces|at | at| fa|com|ive|o s|eme|o e|aw |law|tra|und|pen|nde|unt|oun|n s|s f|f a|tho|ms | is|act|cie|cat|uca| ed|anc|wor|ral|t i| me|o f|ily|pri|ren|ose|s c|en |d n|l c|ful|rar|nta|nst| ag|l p|min|din|sec|y e| tr|rso|ich|hic|whi|cou|ern|uri|r o|tic|iti|igi|lig|rat|rth|t f|oms|rit|d r|ee |e b|era|rou|se |ay |rs | ho|abl|e u",por:"de | de| se|\xE3o |os |to |em | e |do |o d| di|er |ito|eit|ser|ent|\xE7\xE3o| a |dir|ire|rei|o s|ade|dad|uma|as |no |e d| to|nte| co|o t|tod| ou|men|que|s e|man| pr| in| qu|es | te|hum|odo|e a|da | hu|ano|te |al |tem|o e|s d|ida|m d| pe| re|o a|ou |r h|e s|cia|a e| li|o p| es|res| do| da| \xE0 |ual| em| su|a\xE7\xE3|dos|a p|tra|est|ia |con|pro|ar |e p|is | na|r\xE1 |qua|a d| pa|com|ais|o c|ame|er\xE1| po|uer|sta|ber|ter| o |ess|ra |e e|das|o \xE0|nto|nal|o o|a c|ido|rda|erd| as|nci|sua|ona|des|ibe|lib|e t|ado|s n|ua |s t|ue | so|ica|ma |lqu|alq|tos|m s|a l|per|ada|oci|soc|cio|a n|par|aci|s a|pre|ont|m o|ura|a s| um|ion|e o|or |e r|pel|nta|ntr|a i|io |nac|\xEAnc|str|ali|ria|nst| tr|a q|int|o n|a o|ca |ela|u\xE7\xE3|lid|e l| at|sen|ese|r d|s p|egu|seg|vid|pri|sso|\xE9m |ime|tic|dis|ra\xE7|eci|ara| ca|nid|tru|\xF5es|ass|seu|por|a a|m p| ex|so |r i|e\xE7\xE3|te\xE7|ote|rot| le| ma|ing|a t|ran|era|rio|l d|eli|\xE7a |sti| ne|cid|ern|utr|out|r e|e c|tad|gua|igu| ig| os|s o|ru\xE7|ins|\xE7\xF5e|ios| fa|e n|sse| no|re |art|r p|rar|u p|inc|lei|cas|ico|u\xE9m|gu\xE9|ngu|nin| ni|gur|la |pen|n\xE7a|na |i\xE7\xE3|i\xE3o|cie|ist|sem|ta |ele|e f|om |tro| ao|rel|m a|s s|tar|eda|ied|uni|e m|s i|a f|ias| cu| ac|r a|\xE1 a|rem|ei |omo|rec|for|s f|esc|ant|\xE0 s| vi|o q|ver|a u|nda|und|fun",ind:"an |ang|ng | da|ak | pe|ata| se| ke| me|dan| di| be|ber|kan|ran|hak|per|yan| ya|nga|nya|gan| at|ara| ha|eng|asa|ora|men|n p|n k|erh|rha|n d|ya |ap |at |as |tan|n b|ala|a d| or|a s|san|tas|eti|uk |pen|g b|set|ntu|n y|tia|iap|k m|eba|aan| un|n s|tuk|k a|p o|am |lam| ma|unt| de|ter|bas|beb|dak|end|i d|pun|mem|tau|dal|ama|keb|aka|ika|n m| ba|di |ma | sa|den|au |nda|n h|eri| ti|ela|k d|un |n a|ebe|ana|ah |ra |ida|uka| te|al |ada|ri |ole|tid|ngg|lak|leh|dap|a p|dil|g d|ena|eh |gar|na |ert|apa|um |tu |atu|a m|sam|ila|har|n t|asi|ban|erl|t d|bat|uat|ta |lan|adi|h d|neg| ne|kum|mas|nan|pat|aha| in|l d|emp|sem|rus|sua|ser|uan|era|ari|erb|kat|man|a b|g s|rta|ai |nny|n u|ung|ndi|han|uku|huk| hu|sa |ers|in | la|ka | su|ann|car|kes|aku|dip|i s|a a|erk|n i|lai|rga|aru|k h|i m|rka|a u|us |nak|emb|gga|nta|iba| pu|ind|s p|ent|mel|ina|min|ian|dar|ni |rma|lua|rik|ndu|lin|sia|rbu|g p|k s|da |aya|ese|u d|ega|nas|ar |ipe|yar|sya|ik |aga| ta|ain|ua |arg|uar|iny|pem|ut |si |dun|eor|seo|rak|ngs|ami|kel|ini|g t|dik|mer|emu|aks|rat|uru|ewa|il |enu|any|kep|pel|asu|rli|ia |dir|jam|mba|mat|pan|g m|ses|sar|das|kuk|bol|ili|u k|gsa|u p|a k|ern|ant|raa|t p|ema|mua|idi|did|t s|i k|rin|erm|esu|ger|elu|nja|enj|ga |dit",fra:" de|es |de |ion|nt |tio|et |ne |on | et|ent|le |oit|e d| la|e p|la |it | \xE0 |t d|roi|dro| dr| le|t\xE9 |e s|ati|te |re | to|s d|men|tou|e l|ns | pe| co|son|que| au| so|e a|onn|out| un| qu| sa| pr|ute|eme| l\u2019|t \xE0| a |e e|con|des| pa|ue |ers|e c| li|a d|per|ont|s e|t l|les|ts |tre|s l|ant| ou|cti|rso|ou |ce |ux |\xE0 l|nne|ons|it\xE9|en |un | en|er |une|n d|sa |lle| in|nte|e t| se|lib|res|a l|ire| d\u2019| re|\xE9 d|nat|iqu|ur |r l|t a|s s|aux|par|nal|a p|ans|dan|qui|t p| d\xE9|pro|s p|air| ne| fo|ert|s a|nce|au |ui |ect|du |ond|ale|lit| po|san| ch|\xE9s | na|us |com|our|ali|tra| ce|al |e o|e n|rt\xE9|ber|ibe|tes|r d|e r|its| di|\xEAtr|pou|\xE9t\xE9|s c|\xE0 u|ell|int|fon|oci|soc|ut |ter| da|aut|ien|rai| do|iss|s n| ma|bli|ge |est|s o| du|ona|n p|pri|rs |\xE9ga| \xEAt|ous|ens|ar |age|s t| su|cia|u d|cun|rat| es|ir |n c|e m| \xE9t|t \xEA|a c| ac|ote|n t|ein| tr|a s|ndi|e q|sur|\xE9e |ser|l n| pl|anc|lig|t s|n e|s i|t e| \xE9g|ain|omm|act|ntr|tec|gal|ul | nu| vi|me |nda|ind|soi|st | te|pay|tat|era|il |rel|n a|dis|n s|pr\xE9|peu|rit|\xE9 e|t \xE9|bre|sen|ill|l\u2019a|d\u2019a| mo|ass|lic|art| pu|abl|nta|t c|rot| on| lo|ure|l\u2019e|ava|ten|nul|ivi|t i|ess|ys |ays| fa|ine|eur|r\xE9s|cla|t\xE9s|oir|eut|e f|utr|doi|ibr|ais|ins|\xE9ra|\u2019en|i\xE9t|l e|s \xE9|nt\xE9| r\xE9|ssi| as|nse|ces|\xE9 a",deu:"en |er |der|ein| un|nd |und|ung|cht|ich| de|sch|ng | ge|ine|ech|gen|rec|che|ie | re|eit| au|ht |die| di| ha|ch | da|ver| zu|lic|t d|in |auf| ei| in| be|hen|nde|n d|uf |ede| ve|it |ten|n s|sei|at |jed| je| se|and|rei|s r|den|ter|ne |hat|t a|r h|zu |das|ode| od|as |es | an|fre|nge| we|n u|run| fr|ere|e u|lle|ner|nte|hei|ese| so|rde|wer|ige| al|ers|n g|hte|d d| st|n j|lei|all|n a|nen|ege|ent|bei|g d|erd|t u|ren|nsc|chu| gr|kei|ens|le |ben|aft|haf|cha|tli|ges|e s| si|men| vo|lun|em |r s|ion|te |len|gru|gun|tig|unt|uch|spr|n e|ft |ei |e f| wi| sc|r d|n n|geh|r g|dar|sta|erk| er|r e|sen|eic|gle| gl|lie|e e|tz |fen|n i|nie|f g|t w|des|chl|ite|ihe|eih|ies|ruc|st |ist|n w|h a|n z|e a| ni|ang|rf |arf|gem|ale|ati|on |he |t s|ach| na|end|n o|pru|ans|sse|ern|aat|taa|ehe|e d|hli|hre|int|tio|her|nsp|de |mei| ar|r a|ffe|e b|wie|erf|abe|hab|ndl|n v|sic|t i|han|ema|nat|ber|ied|geg|d s|nun|d f|ind| me|gke|igk|ie\xDF| fa|igu|hul|r v|dig|rch|urc|dur| du|utz|hut|tra|aus|alt|bes|str|ell|ste|ger|r o|esc|e g|rbe|arb|ohn|r b|mit|d g|r w|ntl|sow|n h|nne|etz|raf|dlu| ih|lte|man|iem|erh|eru| is|dem|lan|rt |son|isc|eli|rel|n r|e i|rli|r i| mi|e m|ild|bil| bi|eme| en|ins|f\xFCr| f\xFC|gel|\xF6ff| \xF6f|owi|ill|wil|e v|ric|f e",jav:"ng |an | ka|ang|ing|kan| sa|ak |lan| la|hak| pa| ha|ara|ne |abe| in|n k|ngg|ong|ane|nga|ant|won|uwo| an| uw|nin|ata|n u|en |ra |tan| da|ran|ana| ma|nth|ake|ben|beb|hi |ke |sab|nda| ng|adi|thi|nan|a k| ba|san|asa|ni |e h|e k|g k| ut|pan|awa| be|eba|gan|g p|dan| wa|bas|aka|dha|yan|sa |arb|man| di|wa |g d| na|g n|ban| tu|n s|ung|wen|g s|rbe|dar|dak|di |g u|ora|aya|be |ah |a s|eni| or|han|as | pr|a n|na |iya|a a|kar|at |a l|mar|uwe|duw|uta|und|n p|asi|pa | si|ala|n n| un|kab|oni|ya |i h|gar|g b|yat|tum|ta |n m|i k|apa|taw| li|ani| ke|al |ka |kal|ngk|ega| ne|nal|n i|g a|ggo|ina|we |ena|dad|iba|awi|aga|a p| ta|sar|adh|awe|and|uju|ind|min|sin|ndu|uwa|gge|n l|ggu|ngs|n b|a b|pra|iji|n a|ha | bi|kat|go | ku|e p|ron|kak|ngu|a u|gsa|war|nya|g t|pad|bis|k b|i w|ae |wae| nd|ali|a m|er |sak|e s|ku |liy|ama|i l|eh |isa|arg|n t|a d|kap|i s|ayo|gay| pe|ndh|bad|pri|neg|tow|uto|eda|bed|il |ih | ik|ur |k k|rta|art|i p|rga|lak|ami|ro |aro|yom|r k|e d|a w|kon|rib|eng|ger|g l|ras|dil| ti|k l|rap|mra|uma| pi|k h|n d|gaw|wat|ga |k n|ar |per| we|oma|k p|jro|ajr|saj|ase|ini|ken|saw|ona|nas|kas|h k|i t| um|tin|wo | me|aba|rak|pag|yar|sya|t k| te| mu|ngl| ni|i b|men|ate|a i|aku|ebu|a t| du|g m|owo|mat| lu|amp",vie:"ng |\u0323c |\u0301c | qu|a\u0300 | th|nh | ng|\u0323i |\u0300n |va\u0300| va| nh|uy\xEA| ph|quy| ca|\xEA\u0300n|y\xEA\u0300|\u0300nh|\u0300i |\u0323t | ch|o\u0301 | tr|ng\u01B0|i n| gi|g\u01B0\u01A1|\u01A1\u0300i|\u01B0\u01A1\u0300|\u0301t | co|\u01B0\u01A1\u0323| cu|a\u0301c|\u01B0\u0323 |\u01A1\u0323c| kh| \u0111\u01B0|\u0111\u01B0\u01A1| t\u01B0|co\u0301| ha|\xF4ng|c t| \u0111\xEA|n t|i \u0111|i\u0300n|\u0300u |ca\u0301|gia|\u0301i |o\u0323i|mo\u0323| mo|\xEA\u0300u|i\xEA\u0323|\u0111\xEA\u0300|u c|nh\u01B0|pha| ba| bi|\xE2\u0301t|\u0309a |u\u0309a|cu\u0309|h\xF4n| \u0111\xF4|g t|\u0301 q|\u0303ng| ti|t\u01B0\u0323|t c|\u0323n | la|n \u0111|n c|n n|hi\xEA|ch |ay |hay| vi|\xE2n | \u0111i| na|ba\u0309| ho|do | do| t\xF4| hi|\xF4\u0323i|ha\u0301|i\u0323 |na\u0300|\u0300 t|\u01A1\u0301i|h\xE2n| m\xF4|\u0301p |a\u0300n|\u0323 d|\u0301ch|\u0323p |\u0300o |a\u0300o|kh\xF4|\u0301n |\xF4\u0323t|m\xF4\u0323| h\xF4|ia |\xF4\u0301c|c h|h\u01B0\u0303|i v|g n|\u0301ng|u\xF4\u0301|qu\xF4|h t|\xF4n |\xEAn |n v|nh\xE2|\u0323 t| b\xE2|i c|g v|\u0309ng|i\xEA\u0301|c c|\xE2\u0323t|th\u01B0|h\u01B0 |\u01B0\u01A1\u0301|\u0309n | v\u01A1| c\xF4|c \u0111| \u0111o| s\u01B0|t t|\xF4\u0323c|\u01B0\u0303n|v\u01A1\u0301| v\xEA|a\u0309 |\u0323ng|g \u0111|\u0309o |a\u0309o|u\xE2\u0323| \u0111a|bi\u0323|la\u0300|s\u01B0\u0323|b\xE2\u0301|ha\u0300|h\xF4\u0323|i t|a\u0309n|h\u01B0\u01A1|\u0300ng|tro|\u0309m |o v| mi|\xEA\u0309 |u\u0323c|i h|\u01B0\u0301c|a\u0301p|g c|\u0303 h|ia\u0301|n b|\u0309i |a m|h c|c\xF4n|\xEA\u0323n|\u01A1\u0301c|ha\u0323|\u0111\xF4\u0323| du| c\u01B0|a c|n h|tha|a\u0303 | xa|\u0301o |a\u0301o|i\u0301n|\u0300y |g b| h\u01B0|g h|ong|ron|\u0300 c|cho|\u0300 n|mi\u0300|\u01B0\u0323c|h v|c b| lu|i b|\xEA\u0323 |ai |\xEA\u0301 |\u0323 c|xa\u0303|kha|c q|i\xEA\u0309|t\xF4\u0323|\xF4\u0301i|\u0111\xF4\u0301|a\u0301 |hoa|o h|h \u0111|ca\u0309|n l|ho\u0323|ti\xEA|y t|\u0309 c|a\u0323i|a\u0301n|\u0300 \u0111|oa\u0300|y \u0111|chi|\u0309 n|ph\xE2|\xEA\u0300 |thu|i\xEAn|du\u0323|o c|i m|lu\xE2|c p|\xF4\u0301n|c l|\u0301 c|u\u0303n|cu\u0303|c g|c n|qua|n g|c m|o n|a\u0309i|ha\u0309|\u0301 t|ho |v\xEA\u0300| t\xE2| h\u01A1|o t|\u01A1\u0309 |h\u01B0\u0301|hi\u0300|vi\xEA|\u0300m |\u0309 t|\u0111o\u0301|th\xF4|\u01B0\u0301 |c\u01B0\u0301|hi\u0301|\u0301nh|a\u0300y|\u01A1\u0309n|\u01B0\u01A1\u0309| b\u0103|tri| ta|m v|c v|\u01A1\u0323p|h\u01A1\u0323|h m| n\u01B0|\xEA\u0301t|thi|\u0103\u0323c|ngh|uy ",ita:" di|to | in|ion|la | de|di |re |e d|ne | e |zio|rit|a d|one|o d|ni |le |lla|itt|ess| al|iri|dir|tto|ent|ell|i i|del|ndi|ere|ind|o a| co|te |t\xE0 |ti |a s|uo |e e|gni|azi| pr|idu|ivi|duo|vid|div|ogn| og| es|i e| ha|all|ale|nte|e a|men|ser| su| ne|e l|za |i d|per|a p|ha | pe| un|con|no |sse|li |e i| o | so| li| la|pro|ia |o i|e p|o s|i s|in |ato|o h|na |e s|a l|e o|nza|ali|tti|o p|ta |so |ber|ibe|lib|o e|un | a | ri|ua |il | il|nto|pri|el | po|una|are|ame| qu|a c|ro |oni|nel|e n| ad|ual|gli|sua|ond| re|a a|i c|ri |o o|sta|ita|i o| le|ad |i a|ers|enz|ssi|\xE0 e|it\xE0|gua|i p|e c|io | pa|ter|soc|nal|ona|naz|ist|cia|rso|ver|a e|i r|tat|lle|sia| si|rio|tra|che| se|rt\xE0|ert|anz|eri|tut|\xE0 d|he | da|al |ant|qua|on |ari|o c| st|oci|er |dis|tri|si |ed | ed|ono| tu|ei |dei|uzi|com|att|a n|opr|rop|par|nes|i l|zza|ese|res|ien|son| eg|n c|ont|nti|pos|int|ico|r\xE0 |sun|ial|lit|sen|pre|tta|dev|nit|era|eve|ll |l i| l |nda|ina|non| no|o n|ria|str|d a|art|se |ssu|ica|raz|ett|sci|gio|ati|egu| na|i u|utt|ve | ma|do |e r|ssa|sa |a f|n p|fon| ch|d u|rim| fo|a t| sc|tr\xE0|otr|pot|n i| cu|l p|ra |ezz|a o|ini|sso|dic|ltr|uni|cie| ra|i n|ruz|tru|ste| is|der|l m|a r|pie|lia|est|dal|nta| at|tal|ntr| pu|nno|ann|ten|vit|a v",tur:" ve| ha|ve |ir |ler|hak| he|her|in |lar|r h|bir|ya |er |ak |kk\u0131|akk|eti| ka| bi|eya|an |eri|iye|yet|ara|ek | ol|de |vey|\u0131n |\u0131r |nda|ar\u0131|esi|\u0131n\u0131|d\u0131r| ta|tle|e h|as\u0131|etl|e k| va|\u0131 v|s\u0131n|ile|ne |rke|erk|ard|ine| sa|\u0131nd|ini|k h|k\u0131n|ama|le |tin|rd\u0131|var|a v| me|e m|na |sin|ere|k v| \u015Fa| bu|lan|kes|dir|rin|dan| ma|k\u0131 |mak|\u015Fah|da | te|mek| ge|n\u0131 | hi|nin|en |n h| se|lik|rle|ana|lma|e a|\u0131 h|r \u015F|ill|si | de|aya|zdi|izd|aiz|hai|ret|hi\xE7|\u0131na| i\u015F|e b| ba|kla|et | h\xFC|r\u0131n|n k|ola|nma|e t| ya|eme|riy|n v|e i|a h|li |mil|eli|ket|ik |kar|irl|h\xFCr|im |evl|mes|e d|ahs|ma |rak|ala|let|lle|un | ed|rri|\xFCrr|bu | mi|i v|dil| il| e\u015F|n i|la |el |mal| m\xFC| ko|e g|se | ki|mas|lek|mle|mem|n b|ili|e e|ser| i\xE7|n s|din| di|es |mel|eke|tir|\u015Fit|e\u015Fi|r b|akl|yla|n m|len| ke|edi|oru|nde|re |ele|ni |t\xFCr|a k|eye|\u0131k |ken|u\u011Fu| uy|eml|erd|ede|ame| g\xF6|e s|i m|tim|i b|rde|r\u015F\u0131|ar\u015F|a s|it |t v|siy|ar |rme|est|bes|rbe|erb|te |al\u0131| an|ndi|end|hs\u0131|unm|r\u0131 |kor|n\u0131n| ce|maz|mse|ims|kim|i\xE7 | ay|a m|lam|ri |s\u0131z|a b|ade|n t|nam|lme|ilm|k g|il |tme|etm|r v|e v|n e|\u011Fre|\xF6\u011Fr| \xF6\u011F|al |\u0131yl|olm|vle|\u015Fma|i s|ger|me | da|ind|lem|i o|may|cak|\xE7in|i\xE7i|nun|kan|ye |e y|r t|az |\xE7 k|ece|s\u0131 |eni| mu|ulu|und|den|lun| fa|\u015F\u0131 |ahi|l v|r a|san|kat| so|enm| ev|i\u015F ",pol:" pr|nie|pra| i |nia|ie |go |ani|raw|ia | po|ego| do|wie|iek|awo| ni|owi|ch |ek |do | ma|wo |a p|\u015Bci|ci |ej | cz| za| w |ych|o\u015Bc|rze|prz| ka|wa |eni| na| je|a\u017Cd|ka\u017C|ma |z\u0142o|cz\u0142|no\u015B|o d|\u0142ow|y c|dy |\u017Cdy|i p|wol| lu|ny |oln| wy|stw| wo|ub |lub|lno|rod|k m|twa|dzi|na | sw|rzy|aj\u0105|ecz|czn|sta| sp|owa|o p|spo|i w|kie|a w|zys|obo|est|neg|a\u0107 |mi |cze|e w|nyc|nic|jak| ja|wsz| z |jeg|wan|\u0144st|o s|a i|awa|e p|yst|pos|pow| r\xF3|o o|j\u0105c|ony|nej|owo|dow|\xF3w | ko|kol|aki|bez|rac|sze|iej| in|zen|pod|i i|ni | ro|cy |o w|zan|e\u0144s|no |zne|a s|lwi|olw|ez |odn|r\xF3w|odz|o u|ne |i n|i k|czy| be|acj|wob|inn| ob|\xF3wn|zie| ws|aln|orz|nik|o n|icz|zyn|\u0142ec|o\u0142e|po\u0142|aro|nar|a j|i z|t\u0119p|st\u0119|ien|cza|o z|ym |zec|ron|i l|ami| os|kra| kr|owe| od|ji |cji|mie|a z|bod|swo|dni|zes|e\u0142n|pe\u0142|iu |edn|iko|a n|raj| st|odo|zna|wyc|em |lni|szy|wia|nym|\u0105 p|j\u0105 |ze\u0144|iec|pie|st |jes| to|sob|kt\xF3|ale|y w|ieg|och|du |ini|war|zaw|nny|roz|i o|wej|i\u0119 |si\u0119| si|nau| or|o r|kor|e s|pop|zas|niu|z p|owy|w k|ywa| ta|ymi|hro|chr| oc|jed|ki |o t|ogo|oby|ran|any|oso|a o|t\xF3r| kt|w z|dne|to |tan|h i|nan|ejs|ada|a k|iem|aw |h p|wni|ucz|ora|a d| w\u0142|ian| dz| mo|e m|awi|\u0107 s|gan|zez|mu |taw|dst|wi\u0105|w c|y p|kow|o j|i m|y s|bow|kog|by |j o|ier|mow|sza|b o|ju |yna",swh:"a k| ya|na |wa |ya | ku|a m| na| ha|i y| wa|a h|a n|ana|aki|ki |la |hak| ka|kwa|tu | kw| ma|li |a a|ila|i k| ki|ni |a w|ali|a u| an| mt|ke |mtu|a y|ake|ati|kil|ka |ika|kat|ili|te |ote|we |a s|e k|ia |zi |u a|za |azi|ifa|ma |yak|yo |i n|ama| yo|au | au|e a|kut|amb|o y|ha |asi|fa |u w|hal|ara|sha|ish|ata|ayo| as|tik|u k| za|i z|ina|u n|mba|uhu|hi |hur|cha|yot|ru |uru|wat| ch|eri|ngi|e y|u y|i a|aif|tai| sh|nay|chi|ra |ani| bi| uh|sa | hi|i h|awa|iwa|a j|ti |mu |o k|ja |kan|uli|iwe|any|i w| am|e n|end|atu|kaz|o h|ria|her|she|shi|nch| nc|uta|ye |wak|ii |ele|ami|adh|eza| wo|iki|oja|moj|jam| ja|aka|bu |kam|kul|mat|fan|a l|agu|ind|ne |iri|lim|wen|da |kup|uto|i m|a b|ini|wan|bil| ta|sta|dha| sa| ni|ao | hu|e w|wot| zi|rik|kuf|aji|ta |wez|nya|har| ye|e m|si |lin| ut|ine|gin|ing| la|a t|zim|imu|ima|tak|e b|uni|ibu|azo|kos|yan|nye|uba|ari|ahi|nde|asa|ri |ham|dhi|eli|hir|ush|pat| nd|kus|maa|di |nda|oa |bar|bo |mbo|oka|tok|ndw|ala|wal| si|uzi|hii|tah|i s|o n|liw| el|upa|zin|hag|a c|ndi|ais|mai|eny|mwe|aa |ewe| al|ndo|e h|lo |umi|kuh|jib|osa|mam|a z|ufu|dwa|u i| in|iyo|nyi| ny|u m|sil|ang|o w|guz|zwa|uwa|kuw|hil|saw|uch|ufa|laz|und|aha|ua | mw|bal| lo|o l|a i|del|nun|anu|nji| ba|lik|le |uku|i i",sun:"an |na |eun|ng | ka|ana| sa| di|ang|ung|un |nga|ak | ha|keu| ba|a b| an|nu |hak| bo|anu|ata|nan|a h|ina| je|aha|ga |ah |awa|jeu| na|ara|ing|oga|bog|gan| ng|asa|kan|a s|ha |ae |bae|n k|a k| pa|a p|sah|g s|sar| si|sin|a n|din|n s|ma | at|aga|a a|tan| ku| ma|n a|san|man|wa |lah|pan|taw|u d|ra |ari|eu | pi|gar| pe|kat| te|n p|sa |per|a d|a m|e b|aan|ban|ran|ala|ike|n n|kum| ti|ama|a j|pik|ima|n d|al |at | ja|ila|ta |nda|bas|rim|teu|n b|eba|beb|udu|aya|ika|ngg|nag|kab|rta|art| me|ola|k n|uma|atu|aba|g k|adi|aca| po|ngt|nar|una|ate|oh |boh|awe|di |tin|asi|uku|n h|dan|aka|iba|car|sac|gaw|are|ent|um |jen|abe|u s|dil|pol|ar |ku |kud|u m|upa|han| hu|ake|bar|ur |hna|aru|h s|a t|sak|wat|kaw| so|n t|pa |mpa|du |ngk|g d|ena|huk| mi|mas|ngs|ti |n j|ka |aku|ren|n m| ta|law|isa| tu|und|a u|h a|tay|ula|aja|ali|nte|gsa|en |gam| wa|ieu|ere|k h|jal|h b|il |dit|ngu|lan|asu|yun|ayu|gta|k d|a r|g n|mah|uda|dip|kas|rup|geu| be|ter|sej|min|ri |ern|u p|k k|amp|ura|kal|e a|k a|ut |g b|nak|bis| bi|k p|tes|end|we |h k|tun|uan| un| de|u n|h t|ksa|u k|ian|wil|u b|ona|nas|uka|rak|eje| se|ami| ke|war| ra| ie|k j|eh |ya |lma|alm|pen|tur|wan|lak|h j|g a|ean|up |rga|arg|r k|u t| ne|deu|gal|gke|e t|h p| ge|g t| da|i n",ron:" de|re | \xEEn|\u0219i |are|de | \u0219i|te |ul | sa|rep|e d|ea |ept|dre|tul|e a| dr|ie |\xEEn |ptu|le |ate|la |e p| la| pe|ori| pr|ce |e s| or|au |tat| ar|ice|ii |or |a s| fi| a |ric|ale|per| co|n\u0103 |\u0103 a|rea|ers|i s| li|sau| ca|rso|ent|lor|a\u021Bi|al |a d|e o|men|l l|ei |e c|pri|an\u0103| ac| re|uri|ber|ibe|lib|a p|oan|soa| in|i l|ter| al| s\u0103|tea|l\u0103 |car|t\u0103\u021B|s\u0103 |tur|i a|i d|nal| ni|ri |ita|e \xEE|e \u0219|se |ilo|in |ia |\u021Bie|pre|fie|\u021Bii|\u0103\u021Bi|con|ere|e f|a o|eni|nte| nu| se|ace|ire|ici| cu|i \xEE|a c|i n|a l|pen|ui |nu |\u0103ri|al\u0103|ona|l d|r\u0103 |ert|ril| su|ntr|n c|rin| as|ni |i o|eri|t\u0103 |c\u0103 |ile|\u0103 d|i c|e n|ele|sa | mo|i p|fi |sal|tor|va |oci|soc|nic|pro| un| tr|est|in\u021B|a \xEE|uni|n m|a a| di|ecu|lui|sta|lit| po|tre|gal|ega|oat|ra |act|\u0103 \xEE|leg|u d|e l|nde|int|a f|n a| so|na\u021B|ara|i f|uie|iun| to|tar|ste|ces|rar|at | ce|eme|i \u0219|rec|dep| c\u0103| o | \xEEm|bui|ebu|reb| eg| na|m\xE2n|ntu|ili|v\u0103\u021B|\xE2nd|iei|r \u0219|bil|pli|od |mod|res|din|e e|c\u021Bi| au|ali|\u0103 p|\u0103 f|\xEEmp|ial|cia|ion|\u0103 c|dec|nta| om|it\u0103| fa|\u021B\u0103 |cu |tra|\u0103\u021B\u0103|nv\u0103|\xEEnv|\xE2t |ite|i i|lic| pu| ex|riv|tri|rot|\u021Ba |\u021Bi |l c|rta|imi|ulu|\u021Bio|ic\u0103|lig|rel|ta |cla|t \xEE|nt |nit|e m|\xE2nt|\u0103m\xE2|\u021B\u0103m|ger|n\u021Ba|ru |tru|gur|u c|bli|abi|at\u0103|art|par|ar |rim|iva|l \u0219| sc|ime|nim|era|sup|ind|u a|dic|ic | st| va|ini|igi|e r",hau:"da | da|in |a k|ya |a d| ya|an |a a| ko| wa|na | a |sa | ha|kin|wan|ta | ba|a s| ta|a y|a h|wa |ko | na|n d|a t|ba |ma |n a| ma|iya|hak|asa| sa|ar |ata|yan| za|akk|a w|ama| ka|i d|iki|a m|owa|a b| ci| mu| sh|anc|nci|kow|a z|ai |nsa|a c|shi| \u0199a|cik|ne |ana|i k|ci |kki|e d|a \u0199| ku|su |n y|uma|ka |uwa|kum|hi |a n|utu| yi|ani| ga| ra|aka|ali|mut|\u2018ya|tar| do|\u0257an|ars| \u2018y|sam|\u0199as|nda|ane|man|tum|i a|yi |ni | du|ada| su|and|a g|cin| ad|a i|ke | \u0257a|n k|yin|um |e m| ab|ins|nan|ki |mi |ami|yar|min|oka|re |i b|kam|mas|i y|mat|za |ann|en |a\u0257a| ja|m n|li |duk|dai|e s|n s|ra |n w|n h|aik| ai|ida|ga |san|rsa|aba|sar|ce |nin| la|o n|ban|nna|kan|abi|una|dam|me |ara|i m|hal|a r|add|are|n j|abu| ne|zai|a \u0257|wat|ari| \u0199u|on |ans|wa\u0257|ame|ake|kar|din|zam| fa|a l|\u0199un|buw|r d| hu|oki|kok|a \u2018|u d|n t|abb|aur| id|rin|yak|dok|kiy|ray|jam|n b|ubu|bub|n m|i s| an|am |ili|bba|omi|dan|gam|ayu|ash|nce|tsa|ayi|har|yya|ika|bin|han|kko|rsu|aif|imi|fa | am|i i|dom| ki|yuw|dun|o a|fan|n \u0199|aya|fi |n r|she|uni|bay|riy|n \u2018|sab| iy|bat|tab|aga| ir|mar|o w|i w|sha|awa| ak|uns|unc|tun|u k| il|\u0257in|mfa|amf|aci|ewa|kas|lin|n n|don|n i|ure|ifi|lai|dda| ts|iri|aye|un |tan|wad|gwa|afi| ay|ace|mba|amb|aid|nta|ant|war|lim|kya| al|a\u0257i",fuv:"de | e |e n| ha|nde|la | wa|ina| ka|akk| nd|\u0257o |na | in|e e|hak|al |di |i h|kke|ii |um |ko |ala|ndi| mu| ne|lla| jo|wal|e\u0257\u0257|ne\u0257|all|mum| fo|kal|jog|ke |aaw|taa| ko|eed|\u0257\u0257o|aa | le|ji |ade|aad|laa|o k| ng|e h| ta|re |ogi|a j|e w|e m|nnd|gii|e l|ley|awa|aag|ede|waa|e k|gu |e d| go|gal|\u0253e |ti |fot|aan|eyd|ydi|\u0257e |ee | re|ol |oto|i e|oti|m e|taw|nga|a i|kee|to |ann|eji|am |ni | wo|een|goo|eej|e f| he|enn|gol|agu|pot| po|dee|ay | fa|ka |a k|ond|oot| de|a f|o f|a n|wa |maa|ota|le |hay|i k|o n|ngo|e j|o t| ja|\xF1aa|hee|nka|i w|awi|a w|ngu|der| to|e t|dim|i n|fof|i f|e g|tee|naa|aak| do|too|a e|ndo|ren|dii|oor|er |o e|i m|of | sa| so|gaa|ani|kam| ma| \xF1a|o w|i l|u m|kaa|ima|dir| ba|igg|lig| li|aar| \u0253e|o i|e s| o |e r|so |ooj| nj| la|won|awo|dow|woo|faw|and|e i|ore|nge|nan|are|a t|tin|aam| mo|\u0257ee|ita|ira|aa\u0257|e p|nng|ma |ank|yan|nda|oo |e \u0253|njo|ude|nee|e y|e a|je | ya|en |ine|iin| di|ral| na|\u0257i |und| hu|inn|\u014Bde|a\u014Bd|ja\u014B|a d|den| fe| te|go | su|a h|haa|tal|e\u0257e|e b|y g|baa|tde| yi|\u0257\u0257a|o h|ii\u0257|ow | da|do |l n|alt| ho|l e|aga|mii| aa|a a|ama|nna|m t| ke|edd|oga|m w|l m|o j|a\u0257e|ree|oje|yee| no|ele|ne |ago| pa| al|guu|wi |ge |aa\u0253|daa|ind|dew|i j|jey| je|ent|tan|o \u0257|ge\u0257| ge|\xF1ee|a l| \u0257u|kko|mak|a s| ga",bos:" pr| i |je |rav|na |ma |pra| na|ima| sv|a s|da |a p|vo |nje|ko |ako|anj|o i| po|avo|ja |e s|a i|ti | im| da| u |sva|no |ju | za|o n|va |i p|ili|vak|li | ko|ne | il|koj| ne|nja| dr|ost| sl|van|im |i s|u s|i i|a n|ava|ije|a u| bi|stv|se |a d|om |jed|bod|obo|lob|slo| se| ra|ih |sti| ob| je|pri|enj|dru|u i|o d|iti|voj|raz|ova|dje| os|e i|lo |e p| nj|uje|i d|bra|tre| tr| su|jeg|i n|u z|a k|og |u p|oje|cij|reb|a o|a b|lju|i u|ran|mij|ni |nos|jen|ba |edn|svo| iz|jel|pro|e d|\u017Eav|bit| ni|i o|sta|a z|avn|vje| ka|bil|ovo|a j|aju|ist|nih|tu |red|gov| od|e o|oji| sm|lje|o k|ilo|ji |aci|e u|e n|pre|o p|eba|u o|su |vim|i\u010Dn| sa|u n| dj|a t|ija|\u010Dno|jem|r\u017Ea|dr\u017E|elj|stu|dna|odn|eni|za |iva|olj|\u0161ti|nom|em |du |vno|smi|jer|e b|de |pos|m i| do|u d|nak|a r|obr| mo|lja|nim|ego| kr|tit|kri|ve |nju|an |iko|nik|nu |i m|nog|eno|sno| st|e k|tup|rug|ka |oda|riv|vol|aln|m s|itu|a\u0161t|za\u0161|ani|sam|akv|ovi|osn|rod|aro| mi|tva|dno|nst|jan|ak |ite|vi\u010D|rad|u m| ta|dst|tiv|nac|rim|kon|ku |odu|\u017Eiv|amo|tvo|tel|pod|g p|nov|ina|nar| vj|o s|i b|oj | ov|ave|vu |ans|oja|zov|azo|ude|bud| bu|e t|i v|din|edi|nic|tan|nap|mje| is|jal|slu|pun|eds|o o|zak|jav|i k|m p|tno|ivo|ere|ni\u010D|m n|jim|kak|ada|vni|ugi| ro|mov|ven|pol|to |te | vr",hrv:" pr| i |ma |rav|ima|pra|je |na | sv|ti | na|a p|vo |vat|ko |a s|nje| po|anj|avo|o i|tko| im|a i|sva|no |i p|e s|ja |o n| za|ju |ili| u |va |li | bi|ne |i s|atk| il|iti|da | ne| ko| dr| sl|van|nja|koj|ije| ra|ova| os|u s|i i|ost|bod|obo|lob|slo|pri|a n|om |jed|ati|ih |im |voj|ava| ob|stv|se | mo|i u|bit|dru| je| se|dje|i o|enj| ka|i n|sti|lo |u i|svo|mij|ni |e i|raz|a o|e n|bra|o p| su|a b|u p|ran|a k|og |i d|bil|ako|e p|a d|edn|aju|mor|eni| nj|iva|jel|\u017Eav| ni|a z|avn|ovi|eno|ra |oje|a j| da|a u|ora|jeg| iz|nih|r\u017Ea|dr\u017E|oji|sno|nit|jen|vje|ilo|cij|oda|nim| dj|pro|tit|u z|e d|red|nom|jem| od|nos|sta|nov|osn| sm|lje|o s|ji |ovo|stu|pos|vim| do|odn|rad|ist| sa|e o|tu |nju|em |gov|o d|rod|i m|jer|aci|oj |pre|m i|nak|dna|a r|lju|uje|e m|obr|za |olj|ve |o o|m s|an |nu |du |aro|vno|smi|aln|e k|o k|i b|e u|tva|u u|tup|rug|dno|u o|su |u d|ka |vol| ta|ija|itu|\u0161ti|a\u0161t|za\u0161|itk|\u017Eiv|ani|sam|elj| st|sob|oso|nar|akv|ada| mi|te |ona|nst|jan|lja|i v|ite|ego|elo|rim|ku |odu|amo|tvo|tel|jim|pod|nog|vi |ina| vj|to |e b|ans|zov|azo|ak | sk|edi|tan|oju|pun|pot|oti|kon|zak|i k|m p|tno|ivo|ere|ni\u010D|kak|vni|ugi| ro|mov|ven|\u0161tv| be|ara|kla|ave|u b|avi|oja|jal|u m|dni|mje|rak|din|\u0107i |ju\u010D|klj|nic|u k|nap|obi|atn",nld:"en |an |de | de| he|ing|cht| en|der|van| va|ng |een|et |ech| ge| ee|n e|rec| re|n v|n d|nde|ver| be|er |ede|den| op|het|n i| te|lij|gen|zij| zi|ht |ijk|eli| in|t o| ve|op |and|ten|ke |ijn|e v|jn |ied| on|eft| ie|sch|n z|n o|aan|ft |eid|te |oor| we|ond|eef|ere|hee|id |in |rde|n w|t r|aar|rij|ord|wor|ens|of | of|hei|n g| vr| vo| aa|r h|hte| wo|n h|al |nd |vri|e o|ren|le |or |n a|jke|lle|eni|n b|ij |e e|g v| st|ige|die|e g|men|nge|t h|e b| za|e s|om |t e|ati|wel|erk|sta|ers| al| om|n t|zal|dig| me|ste|voo|ter|gin|re |ege|ge |g e|bes|nat| na|eke|che|ig |gel|nie|nst|e a|nig|est|e w|erw|r d|end|ona|d v|jhe|ijh|d e|ele| di|ie | do|del|n n|at |it | da|tie|e r|elk|ich|jk |vol|ijd|tel|min|len|str|lin|n s|per|t d|han| zo|hap|cha|wet| to|ven| ni|aat|ion|tio|taa|lke|eze|met|ard|waa|uit|sti|e n|doo|pen|eve|el |toe|ale|ien|ach|st |ns | wa|eme|nin|e d|bij| gr|n m|p v|esc|t w|ont|ite|man|ema| ma|nal|g o|rin|hed|t a|t v|beg|all|ijs|wij|rwi|e h| bi|gro|p d|rmi|erm|her|oon| pe|eit|kin|t z|iet|iem|e i|gem|igi| an|d o|r e|ete|e m|js | hu|oep|g z|edi|arb|zen|tin|ron|daa|teg|g t|raf|tra|eri|soo|nsc|t b| er|lan| la|ern|ar |lit|zon|d z|ze |dez|eho|d m|tig|loo|mee|ger|ali|gev|ije|ezi|gez|nli|l v|tij|eer| ar",srp:" pr| i |rav|na |pra| na|ma | sv|ima|da |ja |a p|vo |je |ko |ti |avo| po|a i|ako|a s| za| u |ju |o i| im|nje|i p|va |sva|anj|vak| da|o n|nja|e s|ost| ko|a n|li |ili|ne |om | ne|i s| sl| il| dr|no |koj|u s|ava| ra|og |slo|im |enj|sti|bod|obo|lob|iti|a o|stv|i u|a d|ni |jed|u p|pri|edn| bi|i i|a k|o d|sta|ih |dru|a u| je| os| ni|nos|pro|aju|i o|ran| de| su|u i|se |van|ova|i d|cij| ob|uje|red|\u017Eav|e i|i n|voj|e p|a j|dna| se| od|ve | ka|eni|r\u017Ea|dr\u017E|a z|avn|aci|ovo|u u|m i|oja| iz|lja| nj|ija|u z|e o|rod|jen|lje|e b|raz|jan|lju|svo|za |gov|i\u010Dn| st|nov|sno|osn|du |ji |pre| tr|su |vu |odn|a b|jeg|nim|nih|tu |tit|\u0161ti|ku |nom|bit|e d|me |iko|\u010Dno|oji|lo |vno|nik|e n|\u0111en|ika|bez|ara|de |u o|vim|nak| sa|u n|riv|ave|an |olj|vol| kr|o p|sme|e k|nog| ov|e u|tva|bra|rug|reb|tre|u d|oda| mo| vr|vlj|avl|ego|jav|del|m s|kri|o k|a\u0161t|za\u0161|nju| sm|ani| li|dno|e\u0111u|aln|la |akv|oj |\u0161en|kom|stu|ugi|avi|a r|ka |rad|oju|tan|odi|vi\u010D|tav|itu|ude|bud| bu|pot|odu|\u017Eiv|ere|m n|tvo|ilo|bil|aro|ovi|por|eno|\u0161tv|nac|ove|m p|tup|pos|rem|dni|ba |nst|a t|ast|iva|e m|vre|nu |be\u0111|ist|pun|en |te |dst|rot|zak|ao |kao|i k|ju\u0107|o s|st |sam|ter|nar| me|i m|kol|e r|u\u0161t|ru\u0161|ver|kak| be|i b|kla|ada|eba|ena|ona| on|tvu|ans| do|rak|slu",ckb:" he| \xFB |\xEAn | bi| ma|na |in |maf| di|an |xwe| xw|ku | ku|kes| de| ji|her|kir|iya|ya |rin|iri|ji |bi |es | ne|ye |y\xEAn|e b|er |af\xEA|tin|ke | an|iy\xEA|eye|rke|erk|we | be|e h|de | we|hey|f\xEA |i b|y\xEA |ina| b\xEA| li|diy|ber|li |re |\xEE \xFB|n\xEA |\xEA d| se| ci|eke|di |w\xEE | na|\xEE y|af |ete|hem| w\xEE|sti| ki|r\xEE |k\xEE |\xEE a|yek|n d|kar| te|ne |y\xEE |i h|e k|t\xEE |t\xEA |a w|e d|\xEE b|s m|ast|n b|be |yan|ser|tew|net| tu| ew|hev|aza|ara|\xFB b|n k|adi|ev |zad| az|ras|est|an\xEA| ya|n h|n \xFB|wed| t\xEA|wek|bat|bo | bo| y\xEA|st |n n|\xEA k|dan|\xEA h|ema|\xEA b|iye|\xEE h|din|b\xFBn|r k|ek\xEE| me|par|\xFBna|ta |wle|ewl|\xEE m| ke|nav|ewe|man|\xEA t|d\xEE |\xFB m|m\xFB |em\xFB|a m|ika|e \xFB|n w|a x|\xEA m|e n| ta|ela|n j|ey\xEA|n x|civ|wey|ana| re|khe|ekh|bik|k\xEA |j\xEE |f h|er\xEE| pa|\xEEna|bin|erb|vak|iva|a s| ni|cih|v\xEA |e j|ari| p\xEA|\xEE d|n\xEAn|ike|e t|a k|\xEA x| ye|n a|ey\xEE|n e|ama|b\xEA |ar |ewa|at\xEA|bes|rbe|av |ibe|ist|m\xEE |tem|awa|are|h\xEE |geh|nge|ing|nek|n\xFBn|an\xFB|qan| qa|v\xEE |rti|uke|tuk| \u015Fe|eza| da|u d|\xFB a|f \xFB|edi| ra|tu |tiy|t\xEAn| mi|xeb| ge|h\xEEn| h\xEE|et\xEA|\xEE j|st\xEE|mal|bib|ra |i d|e m|mam|i a|nik|i m|\xEE k| wi|\xFBn | ko|a \u015F|\xEA j|riy|lat|wel|e e|ine|ane|\xFB h|\xEEn |a d|siy|end|aye| za|ija|a n|\xEE n|ek |tek|yet|mbe|emb|\xFB d|rov|iro|mir|eba| xe|m\xEAn| \xEAn| hu|n\xEEn|an\xEE|t \xFB|ten|n m|dem|\xEA \xFB|en\xEA|te |art|i r| j\xEE|u j|ek\xEA|dew",yor:" n\xED|ti |\u1ECD\u0301 |n\xED | l\xE1| \u1EB9\u0300|\xE0n |\u1EB9\u0301 |kan|t\xED | t\xED|an |\u1EB9\u0300 |t\u1ECD\u0301|\u1ECD\u0300 | \u1EB9n|\u1ECDn |w\u1ECDn|\xED \u1EB9|b\xED |\xE1ti|l\xE1t|\u0300t\u1ECD|\u1EB9\u0300t| gb| \xE0t| \xE0w|n l|\xE0ti| a |l\u1EB9\u0300|\u1EB9n\xEC| \xF3 |k\u1ECD\u0300| l\xF3|\xEC k|s\xED |\u1ECD\u0300k| k\u1ECD|ra |ni |\xE0b\xED|t\xE0b| t\xE0|n\xEC | s\xED|\u0300ka|\u1ECD\u0300\u1ECD|n \u1EB9|\xE0w\u1ECD|n t|\xF3 n|\u0300\u1ECD\u0300|\xEDl\u1EB9|or\xED|l\xF3 | w\u1ECD|t\xF3 |d\xE8 |\xECy\xE0|\xFAn | t\xF3| or|\xED \xEC|\xE8d\xE8|k\xF2 |\u2010\xE8d|\u0300\u2010\xE8|\u1EB9\u0300\u2010|r\xEDl|\xED \xF3|r\u1EB9\u0300|\xED \xE0| s\xEC|y\xE0n|gbo|\u1E63e | k\xF2|\xED a| r\u1EB9| j\u1EB9|s\xEC | b\xE1|r\xE0n| \u1E63e|w\u1ECD\u0301|n\xECy|f\xFAn| f\xFA|n \xE0|ba |n n|gb\xE0|gb\u1ECD|j\u1EB9\u0301|un |\xEC\xED | k\xED|gba|\xE8n\xEC| \xE8n|b\xE1 |\u0301 l|a k| ka|d\u1ECD\u0300|k\xED | \xF2m|in | fi|b\xF2 |fi |b\u1EB9\u0301|\u1ECDd\u1ECD|b\u1ECDd|\u0301 s|hun|n\xFA |n\xEDn|w\xE0 |ira|nir|\xF2m\xEC|\xECgb| \xECg|\u0301 t|\u1EB9ni|\xEDn\xFA|i l|\xECni|m\xECn|b\xE0 |\xE1\xE0 |i \xEC|ohu| oh|\xED i|ara| ti|bo |\xF2 l| p\xE9|r\xFA |\xEDr\xE0| \u1ECD\u0300|\xED \xF2|ogb|k\u1ECD\u0301|p\u1ECD\u0300|\xF3 b|\xE0 t|i n|l\u1ECD\u0301|\u1EB9\u0301n| \xECb|y\xEC\xED|gb\xE9|g\u1EB9\u0301|bog|\xF3\xF2 |y\xF3\xF2| y\xF3|n k|p\xE9 |d\xE1 |\u0301w\u1ECD|\u1ECD\u0301w|\xE0 l|\xED k| w\xE0|n o|j\u1ECD | ir|\u1ECD\u0300r|\xFA \xEC|\u0301 \xE0|\xF3 s|i t|\u1E63\u1EB9\u0301|\u0300k\u1ECD|\xED t|y\xE9 |l\xE8 | l\xE8|fin|\xE0b\xF2| l\u1ECD|\xE0 n|\xF9j\u1ECD|w\xF9j|ir\xFA|\xF3 j| ar|\xED w|a w| \xECm|\xFA \xE0|\u0300 t|\xF2fi| \xF2f| \xE0\xE0|f\u1EB9\u0301|\xE0w\xF9|\u0301ni|w\xF9 |\xEC\xEDr|m\xEC\xED| m\xEC|l\xE1\xEC| y\xEC|\xED g|\u1ECD\u0301n|n s|i \u1EB9|\u1EB9\u0300k|\xE0gb|\xEDgb|n\xEDg|a n| k\xFA|l\xE1\xE0|\xED o|n\xE1\xE0| n\xE1|k\u1EB9\u0301|\xEDpa|n\xEDp|\xECn | \xECk|b\xE9 |i g|\u1ECDm\u1ECD| \u1ECDm|i \xE0|i\u1E63\u1EB9|\u0300 \xE0|\xECm\u1ECD|n a|n f|j\u1EB9 |y\xED |\u0301 \u1ECD|\xF3 d|\u0301 \xF2| d\xE1| m\xFA|\xE0\xE0b|\xE1b\u1EB9|l\xE1b|\xECb\xE1|\xF2 g|j\xFA |i o|l\xFA | \xE8t|\u0300 \u1EB9|t\u1ECD\u0300|de |\u0300 n|i \xF2| \xECy|k\xE0n|\u0301n | b\xED| i\u1E63|m\u1ECD\u0300|e \u1EB9|\u0300 l| f\xE0|\xE8y\xED| \xE8y| \xECd|m\u1ECD\u0301|d\xE9 |\u0300 k|\u0301 p|\xF2 t|m\xFA | f\u1EB9| \xECj|r\xED |\xECk\u1EB9|n\xECk|\xECn\xED|n \xEC|n \xE8|s\xECn|\xE8 \u1EB9| i |r\u1ECD\u0300| \xE0n|\u0301 b|\xF9n |\u0301gb|\u1ECD\u0301g|d\u1ECD\u0301| d\u1ECD|\xED n|rin|\u0300 j",uzn:"ish|an |lar|ga |ir | bi|ar | va|da |iga| hu|va |bir|sh |uqu|quq|huq| ha|shi| bo|r b|gan|a e|ida| ta|ini|lis|adi|ng |dir|lik|iy |ili|o\u02BBl|har|ari| o\u02BB|uqi|ins|lan|hi |ing|dan|nin|kin| yo|son|nso| in| mu|on |qig| ma|ega|r i|bo\u02BB| eg|o\u02BBz|ni |gad|ash|i b|ki |oki|ila|yok|a b|n b|osh|ala|at |in |r h|erk| er|lga| qa|rki|h h| sh|i h|ara|n m| ba|nis|ik |igi|lig|bos|ri |qil|a t|bil|las|eti| et|n o|ani|nli|kla|i v|a q|a h|a o|yat| qo|im |a s|i m|iya|atl|oli|osi|siy|qla|cha|til| ol|ati|a y|mas|qar|inl|lat| qi|ta\u02BC|ham|gi |ib |\u02BBli|mla|h v|\u02BBz |hun|n e|mum| da| bu| to|un |mki|umk|sha|tla|ris|iro|ha |rch|bar|iri|oya|ali| be|i o|asi|aro| ke|i t|rla| te|arc|hda|shu|tis|n h|tga| sa| xa|rak|lin|ada|ola|imo|hqa|shq|li | tu|aml|lla|sid| as|nid|a i| ki|ch |n t|nda|k b|era|siz|or |hla|a m|r v|eng|ten|mat|mda|amd|lim|miy|y t|ayo|i a|ino|ilg|tni| is|ana|as |ema| em|ech|a a|tar|kat|aka|ak |rat| de|aza|ill| si| so|g\u02BBi|uql|n q|oda|\u02BCli|a\u02BCl|nik| ni|tda|uch|gin|a u|him|uni|sit|ay |qon| ja|atn|kim|h k|hec| he|\u02BBzi|lak|ker|ikl| ch|liy|lli|chi|ur |zar|shl|rig|irl|dam|koh|iko|a d|am |n v|rti|tib|yot|tal|chu| uc|sla|rin|sos|aso| un|na | ka|muh|dig|asl|lma|ra |bu |ush|xal|\u02BBlg|i k|ekl|r d|qat|aga|i q|oiy|mil| mi|qa |i s|jin",zlm:"an |ang| ke|ng | se| da|ada|ara|dan| pe|ran| be|ak |ber|hak|ata|ala|a s|ah |nya| me|da |per|n s|ya | di|kan|lah|n k|aan|gan|dal|pad|kep|a p|n d|erh|eba|nga|yan|rha| ya|nda|ora|tia|asa| ha|ama|epa| or|iap|ap |a b| at| ma|eti|ra |tau|n a|set|au | ba|pa | ad|n p|tan|p o|eng|a d|men|apa|h b|h d|dak|man|a a|ter| te|k k| sa|n b|ana|g a|end|leh|ole|a k|am |n y|aka|eh |lam|bas|beb|n m| un|pen|sa |keb|sam|n t| ti|ela|san|car|uan|ma |di |han|ega|ban|eri|at |sia|a m|ika|kes|ian|gar|seb|ta |mas|und|neg|nan|ngs|i d|erl|na |epe|emb|bar| la|atu|kla|pem|mem|emu|eca|sec|ngg|nny|any|bol|al |aha|gsa|ebe|ind|akl|n h|erk|ung|ena| bo|a t| ap|ers| de|in |tu |pun|as |agi|ann|g b|bag| ne|ain|hen| he|era|rat|sem| su|adi|lan|g s|dia|mat|ses|iad| ta|iha|g t|tin|k m|k h|i k|gi |i s|ing|uka|enu|den|lai|k d|ert|ti |rka|aja|rga|lua|ker|mel|dun|ndu|lin|rli|nak|ntu|esi|aya|un |uat|jua| in|rma|erm|ai |emp|kem|ri |dil|ua |uk |h m|l d|g m|mba|kat|ese|tik|ni |ini| an|mpu|ka |dar|mar|rja|erj|arg|u k|sua| ol|esa|dap|ar |g u|si |ent|g d| pu|awa|iri|dir|sal|gam|mbe|n i|har|a h|raa|ema|tar|i a|saa|ira|ari|pel|jar|laj|uju|tuj|rak|ura|uar|elu|t d|unt|il |wen|asi|gga|ipa|ksa|tuk|ula|sek|sas|ibu|rta|sep|rsa|nta|ati|ila|mua|yar",ibo:"a n|e n|ke | na| \u1ECD |na | b\u1EE5|\u1ECD b|nwe|nye|ere|re | n |ya |la | nk|ye | nw| ma|e \u1ECD| ya| ik|a o|a \u1ECD|ma |\u1EE5la|b\u1EE5l|ike| on|nke|e i|a m|ony|\u1EE5 n|kik|iki|b\u1EE5 | a |ka |wer|ta |i n|do |di | nd| ga|a a|e a|a i|he |kwa| ok| ob|e o|hi |any|ga\u2010|ha |d\u1EE5 | mm|ndi|\u1ECD n|wa |r\u1EE5 |e m|che|a e|oke|wu |aka|ite|o n|a g|odo|bod|obo| d\u1ECB| ez|ara|we | ih|a\u2010e|h\u1ECB |ri |n o|zi |mma|chi|d\u1ECB |ghi|\u1EE5ta|iri|ihe| an| oh|a y|gba|\u1EE5 \u1ECD| \u1ECDz| ak| iw|nya|te |iwu| nt|ro |oro|e \u1ECB|z\u1ECD |ezi|me |e e|u n|her|ohe| si|a\u2010a|i m|ala|\u1EE5 i| ka|akw| in|gh\u1ECB|kpe|n e|p\u1EE5t| e |i i|i o|ide|inw|\u1EE5 o|h\u1EE5 |ah\u1EE5|weg|ra |o i|kpa|ad\u1EE5|mad|si |sit|a s| me|sor|i \u1ECD|gid|edo|u o|e y|n a| en|tar|ozu|toz|bi |be |\u1EE5 m|\u1EE5r\u1EE5|\u1ECDr\u1EE5| \u1ECDr|mak|uso|ama|de |\u1ECB o| \u1ECDn|\u1ECDz\u1ECD|ch\u1ECB|egh|enw|ap\u1EE5|ru | to|i a|a \u1EE5|osi|r\u1ECB |wet|hed|nch| nc| eb| al|n\u1ECDd|\u1ECDn\u1ECD|uru|sir| kw|yer|ji |eny| mk|\u1ECBr\u1ECB|eta| us|tu |\u1ECD d|u \u1ECD| o |ba | mb|\u1ECDd\u1EE5|\u1ECBch| ch|a d|pa | ag|kwe| ha|a u|e s|mkp|n u|nta|ebe|n \u1ECD|o m|kwu|nkw|nwa|obi| \u1ECBk|esi|i e|nha| nh|le |ile|nil| ni|eme| og|e k|n i|ch\u1ECD|o y|as\u1ECB|otu| ot|ram|u m|\u1ECBgh|d\u1ECBg|zu |n\u1ECD |mba| gb|e g|\u1ECB m|\u1ECDch|ich|pe |agb|i \u1ECB|uch|z\u1EE5z|uny|wun|\u1ECDr\u1ECD| nn|na\u2010| di|ge |oge|iji| ij|\u1ECDha| \u1ECDh|ikp|egi|meg|o o|\u1EE5h\u1EE5|h\u1EE5h|mah|n \u1EE5|\u1ECD g|\u1ECDta|ek\u1ECD|\u1ECB n|kw\u1EE5|agh|\u1EE5m\u1EE5|ban|kpu|okp| ah|\u1ECBkp|a k|ime| im|z\u1EE5 |\u1EE5z\u1EE5|\u1ECDz\u1EE5| \u1EE5z|lit|ali|nat",ceb:"sa | sa|ng |ang| ka| pa|an |ga |nga| ma|pag| ng|on |a p|od |kat|ay | an|g m|a k|ug |ana| ug|ung|ata|ngo|atu|n s|ala|san|d s|tun|ag |a m|god|g s|a a|a s|g k|g p|yon|n u|ong|tag|usa|pan|ing|una|mat|g u|mga| mg|y k| us|ali|syo| o |aga|tan|iya|kin|dun|nay|man|nan|a i| na|ina|nsa|isa|bis|a b|adu| ad|n n| bi|asy|asa|lay|awa|lan|non|a n|nas|o s|al |agp|lin|nal|wal| wa|ili|was|gaw|han| iy| ki|nah|ban|nag|yan|ahi|n k|gan| gi|him| di|a u| ba| un|ini|ama|ya |kas|asu|n a|g a|gka|agk|kan|ags|agt|l n|a g|kag| ta|imo|uns|sam| su|g n|n o|gal|kal|og |taw|aho|uka|gpa|ipo|ika|o p|a t| og| si|gsa|g t|aba|ano|gla|y s|o a|aki|hat|kau|sud|gpi|a w|g i|aha|ot |ran|i s|n m|bal|lip|gon|ud | ga|li |uba|ig |ara|g d|na |kab|aka|gba|ngl|ayo| la| hu|a h|ati|d a|d n| pu| in|uga|ok |ihi|d u|ma |may|awo|agb|ami|say|apa|pod|uha|t n|agh|buh|ins|ad | ub| bu|at |iin|a d|ip |uta|sal|hon|wo |ho |tra|lak|iko|as |aod|bah|mo |aug|ona|dil|gik|sos|lih|pin| pi|k s|nin|oon|abu|la |rab|hun| ti|mah|tar|t s|ngb|uma|hin|bat|lao|mak|it | at|s s|sno|asn|ni |aan|ahu| hi|agi|n p|inu|ulo|y p| ni|iha|mag|o n|duk|edu| ed|a e|til|ura|tin|kip|agl|gay|g h|g b|ato|ghi|nab|kon|in |ter|o u|o o|yal|sya|osy| so|tik| re| tr|hig|a o|ha |but|pak|aya",tgl:"ng |ang| pa|an |sa | ka| sa|at | ma| ng|apa|ala|ata|g p|pan|pag|ay | an| na|ara| at|tan|a p|pat|n a| ba|ga |awa|rap|kar|g k|aya|lan|g m|n n|g b|nga|mga| mg|a k|na |ama|n s|a a|gan|yan|gka| ta|may|tao|agk|asa|man|aka|ao |y m|ana|g a|nan|aha|kan|y k|baw|kal|a m|g n|ing|wat| y |t t|pam|a n|o y|ban| la|ali|san|wal|mag| o |g i|aga|lay|any|g s|in |nya|yon|kas|a s|isa|una|ong|aan|kat|t p| wa|ina|tay|ya |on |o m|ila|ag |nta|t n|aba|ili| ay|o a| ga|no |a i|gal|ant|han|t s|kap|kak|lah|ari|agt|agp|ran|g l|lin|as |lal|gaw|ans|to |ito| it|hay|wa |t m| is|pap|mam|nsa|ahi|nag|bat|lip|gta| di|gay|gpa|pin| si|ngk|ung|aki|y n|iti|tat|ano|yaa|y s|mal|hat|kai|sal|hin|uma|mak|di |agi|pun|ihi|a l|i a|ira|gga|nah|s n|ap | ha|usa|nin|o p|gin|ipu|ika|ngi|i n|lag|la |y p|ini|g t|uka|nap| tu|a g|tas|aru|ipa| ip|li |al |n o|a o|t k|alo| pi|sin|syo|asy|ita|aho|nar|par|o s|pak|t a|uha|sas|gsa|ags|kin|a h|iba|lit|ula|o n|nak|a t| bu|duk|kab|sam|g e|ain|ami|mas|lab|ani|kil|it | al|agb|buh|a b|g g|ba | ib|iyo|ri |yag|ad | da|edu| ed|anl|ma |ais|iga|mba|tun|ipi| ki|od |ayu| li|lih|sar|gi |g w|pah|wir|oob|loo|agg|nli|bay|map|git|mil|ok |hon|ngg|sah|iya|pas|g h|agl|tar|ngu|amb|uku|ayo|s a|p n|n m|rus|i m|l a|abu| aa",hun:"en | sz| va| a |\xE9s |min|ek | \xE9s| mi|jog| jo|an |ind|nek|sze|s\xE1g|nde|a v|den|oga|sza|val|ga |m\xE9l|ala|em\xE9|gy |n a|van|zem|ele| me|egy|\xE9ly| eg|zab|t\xE1s| az|n s|bad|aba|ni |az |gye| el|ak | se|meg|sen|\xE9ny|s\xE9g|k j|yne|lyn| ne|ben|lam|tt |t a|et |agy|oz |hoz|vag|zet| te|n m|ez |nak|int|re |et\xE9|tet|mel|tel|s a|em |ely|let|hez| al|s s| ki|ete|at\xE1|z a| le|yen|es |ra |t\xE9s|ell|nt |sem|t s|len|nem|a s|ese|nki|enk|a m|\xE1s\xE1|i m|ban|kin|k m|szt| \xE1l|ame|k\xF6z|k a|ds\xE1|ads|l\xF3 | k\xF6|\xE1s |ly |on |\xE9be|tat|a t|n v|\xE1ll|m\xE9n| v\xE9|nye|k\xFCl|l\u0151 |a n| cs|i \xE9|ok |\xE9sz|\xE9rt|lla|lap|\xE1go|gok|nyi|tek| ke|nd |\xE9te|ami|z\xE9s|yes|szo|t m|a a|het|fel|lat|lem|lle|el |z e|s e|k \xE9|mbe|emb|el\xE9|ot |lis|vet|kor|\xE1g |olg| am|sz\xE1|ehe|leh|ogo|ott|\xFCl |nte|\xE9le|i v|ogy|hog| ho|kel|n k|tes|nl\u0151|enl|ss\xE1|\xE1za|h\xE1z|\xE9g |vel|\xE1ba|lek|\xE9ge| ha|a h|r\xE9s| fe|\xE1ny|del|el\u0151|\xE1t |al\xE1|art|tar|zto|z\xE1s|t\u0151 |yil|koz|tko|al\xF3|s k|i e|\xE1rs|t\xE1r|mze|emz| ny|m\xE1s|ett|ny |fej|ass|zas| h\xE1|d a|t \xE9|is |\xE9s\xE9|ez\xE9|t\xE9b| mu|\xE1so|s\xEDt|lye|elm|\xE9de|v\xE9d|ine|t k|os |it |izt|biz| bi|y a|m l|tot|a j|atk|n\xE9l|t n|ti | m\xE1|ai |l\xE1s|eve|nev|zte| b\xE1|sel|ll |al |ere|n e|unk|mun|t e| ak|ife|kif|ako|s \xE9| \xE9r|\xE1na| es|s t|got|s\xFCl| be|v\xE1l|csa|se |\xE9se|ad |ges|tos|ja | gy|asz|ten|lm\xE9| t\xE1|eze|\xE1rm|b\xE1r|ess|l s|\xFCle",azj:" v\u0259|v\u0259 |\u0259r |ir | h\u0259| bi| h\xFC| ol|\xFCqu|h\xFCq|quq|na |in |lar|h\u0259r|d\u0259 | \u015F\u0259|bir|l\u0259r|lik|mal|r b|lma|r h| t\u0259|\u0259xs|\u015F\u0259x|\u0259n |dir|uqu|una|an |ali|a m| ma|ikd|ini|r \u015F|d\u0259n|ar |il\u0259|qun|aq |as\u0131| ya|m\u0259k|y\u0259t| m\u0259| m\xFC|kdi|\u0259si|\u0259k |ilm|nin|nd\u0259|olm|\u0259ti|\u0259 y|sin|xs |nda|lm\u0259|yy\u0259|i v| qa| az|olu|iyy|ya |ind|zad|qla|\xFCn |ni |l\u0259 |tin|n m|aza|ar\u0131|\u0259t |n t|maq|lun|l\u0131q|\u0259 b|un |nun|q v|n h|dan|\u0131n | et|tm\u0259|\u0259r\u0259| \xF6z|da |\u0259 v| on|\u0259 a|\u0131na|\u0131n\u0131|bil|a b|s\u0131 |il |\u0259mi|ara|si | di|\u0259 m|\u0259ri|rl\u0259| va|\u0259 h|etm|\u0131\u011F\u0131|ama|dl\u0131|adl|rin|b\u0259r|r\u0131n|n i|m\xFCd|n\u0131n| he|mas|ik |n a|dil|al\u0131|irl|\u0259l\u0259|\xFCda|s\u0131n|\u0131nd|xsi|li |\u0259 d|n\u0259 | b\u0259|\u0259ya| in|\u0259 i|l\u0259t| s\u0259|n\u0131 | i\u015F|an\u0131|e\xE7 |he\xE7|q h|eyn|\u0259 e|d\u0131r| da|asi|r\u0131 |i\u015F |ifa|l\u0131\u011F|i s|fi\u0259|afi|daf| ed|m\u0259z|u v|kil| ha|ola|n v|\u0259ni|\u0131r |uq |unm| bu| as|sia|osi|sos|ili|\u0131d\u0131|l\u0131d|nma|\u0131q |in\u0259|\u0259ra|sil|xil|axi|dax|ad\u0259|man|a h|\u0259 o|onu|a q|\u0259z | ki|se\xE7| se|\u0131 h|min|lan|\u0259d\u0259|bu |raq|l\u0131 |\u0131l\u0131|al |\u0259 q|r v|nla|hsi|\u0259hs|t\u0259h|\xF6z |ist| is|m\u0259s| \u0259s|ina|\u0259 t|\u0259tl|a v|i\u0259 |n b|t\u0259r| ta| c\u0259|edi|ala|kim|qu |i t|ulm|m\u0259h|n o|aya|\u0131 o|ial| so|ill|siy| d\u0259|var|ins|mi |\u011F\u0131 |nik|r i|aql|k h|t\u0259m|tam|\xE7\xFCn|\xFC\xE7\xFC| \xFC\xE7|\u011F\u0131n|sas|\u0259sa|z h|\u0259m\u0259|zam| za|sti|r\u0259f|n e|r a|ild|h\u0259m|\u0131ql|yan|may|n \u0259|m\u0259n|mil| mi|\u0259qi|din|n d|t\xFCn| d\xF6|miy|kah|ika| ni|fad|tif|l o|s\u0259r|yni| ey|ana|l\u0259n|am |ril|ay\u0259|a\u015F\u0131",ces:" pr|n\xED | a | ne|pr\xE1|r\xE1v|na |ost| po|ho | sv|o n| na|vo |neb|\xE1vo|bo |ebo|nos|m\xE1 | m\xE1|a\u017Ed|ka\u017E| ka| ro|ch |d\xFD |\u017Ed\xFD|ti |ou |a s| p\u0159| za|\xE1n\xED|\xE1 p| je| v |svo|\xE9ho| st|\xFD m|sti|n\u011B | by|obo|vob|ter|pro|en\xED|bod| z\xE1| sp|\xED a|rod|kte|by |mu |u p|o p| n\xE1|v\xE1n|jak| ja|a p|o v|\xED n|ov\xE1|oli|v\xED |spo|roz| kt|mi |\xED p|ny | ma|\xEDm |i a|do | so|odn|\xE1ro|n\xE1r|li |n\xE9 |tv\xED|at |\xFDch|a z| vy|byl|vol|en |\xFDt |b\xFDt| b\xFD|t s|tn\xED|stn|o s|\xED b|to | do|sv\xE9|v\xE9 |ran|ejn|z\xE1k|eho|jeh|nes|p\u0159\xED|m\xED |\u010Din|kol|aj\xED|sou| v\u0161|\xEDch|it |n\xFDm|\xFDm |nu |hra|nou|u s|\xE9mu| k |du |\u017Een|pod| ze|kla|a v|stv|pol|dn\xED|er\xE9|m p|st\xE1|je |ci |e\u010Dn| ni|n\xE9h|a n|ak\xE9|\xE1va|maj|em |rov|\xED m|k\xE9 |ole|n\xFDc|ova| ve|ako| ta|i k|chr|och| oc|kon|i p|\xED v|sm\xED|esm|kdo|st |i n|o z|ave|odu|bez| to|sta|ech|j\xED |o d|sob|se | se|\xED s|\xFDmi|i s| i |i v| vz|n\xEDm|pra|ln\u011B|p\u0159i|t\xE1t|ste|a j|aby| ab| s |oln|a o|m n|\u010Den|slu|\u0159\xEDs| os|zem|mez| \u010Di|ln\xED|\xE1ln|oci|jin| ji|y b|\xED z|y s|va |v\u0161e|t v|ovn|chn|d\u011Bl|n\xEDc|le\u010D| pl|vat| vo|vin|rav|vou|lad|inn|\xE9 v|anu|tej|u k|stu|est| tr|ky |ikd|nik|ivo|nit|zen|u o|n\xE9m|nez|i\xE1l|\xEDho|len|ens|o\u017Ee|oko|k\xE9h|rac|ven|\xED k|e s|l\xE1n|\u011Bl\xE1|zd\u011B|vzd|t k|din|odi|t\xED | od|r\xE9 |tup|pov|pln|\u0161t\u011B|\xE1kl|nno|tak|er\xE1|\u0159ed|o a|a t|res|j\xEDc| mu|u z|rok| ob|\u010Dno|u a|y k|i j|\xE9 n|lu\u0161|\xEDsl|oso|ci\xE1|soc|n\xEDh|o j|ck\xE9",run:"ra |we |wa |e a| mu|a k|se | n | um| ku|ira|ash|tu |ntu|a i|mu |umu|mun|unt|ere|zwa|ege|ye |ora|teg|a n|a a|ing|ko | bi|sho|iri| ar| we|shi|aba|e n|ese|go |a m|o a|gu |uba|ngo|nga|hir| ca|ugu|obo|hob|za |ndi|ish|gih| at|ara|wes| kw|ger|ate|a b| ba| gu|e k|can|ama|ung|bor|u w|mwe|di | ab|nke|ke |kwi|ka |ank|yo |ezw|n u|na |iwe|e m|rez|ri |a g|gir| am|igi|e i|ro |a u|ngi|e b|ban| ak| in|ari|n i|hug|ihu|e u|riz|ang|nta| vy|ata| ub|and|aka|rwa| nt|kur|ta |iki|kan|iza|u b|ran|sha|o n|i n| ig|ivy| iv|ahi|bah|u n|ana| bu| as|aku|ga |uko|o u|ho | ka|ose|ubu|ako|guk|ite|o y|ba |i b|any|kir|o k|aho|iye|kub|amw|nye|aha| ng|o m|nya| it|re | im|o b|izw|kun|hin|e c|vyo|o i|vyi|ngu|uri|imi|imw|gin|ene|u m|zi |ha |kug|bur|uru|jwe| zi|u g|era|aga|ron|abi| y |e y| uk|gek|ani| gi|eye|ind|wo |u a|i a| ib|i i|ras|bat|gan|amb|n a|onk|rik|ne |ihe|agi|kor| ic|ze |tun|ibi|wub|nge|o z|tse|nka|he |rek|twa|gen|eko|mat|ber| ah|ni |ush|umw| bw|mak|bik|ury|yiw|bwo| nk|ma |no |kiz|uro|gis|aro|ika| ya|gus|y i|wir|ugi|uki| ki|a c|ryo|bir| ma| yi|iro|bwa|mur|eng|ukw|hat|tan|utu|wit|w i| mw|y a|mbe| ha|uza|ham|rah| is|irw|o v|umv|ura|eny|him|eka|bak|bun| ny|bo |yig|kuv|wab|key|eke|yer|vye|i y|ita|ya |a r| ko|kwa|o c",plt:"ny |na |ana| ny|a n|sy |y f|a a|aha|ra | ma|nan|n n|any|y n|a m|y m|y a| fi|an |tra|han|ara| fa| am|ka | ts| na|in |ami| mi|a t|olo|min|man|iza|lon| iz|fan| ol| ha| sy|aka|a i|reh|ay |ian|tsy|ina| ar|on |o a|etr|het|ona|y o|o h|zan|y t|a h|ala| hi|a f|y h|ehe|ira|a s|zo |y i|ndr|jo | jo|n j| an| az|ran|dia| dr|y s|fah|ena|ire|tan|dre| zo|mba| ka|m p|afa| di|n d|and|azo|zy |amp|ia |ren|iny|rah|y z|ry |ika|oan|ao |amb|lal|ho | ho|isy|ony|tsa|asa|a d|ha |fia|mis|ava|ray| pi|am |dra| to|rin| ta|ant|eo |zay|rai|tsi|itr|sa | fo| ra|van|ova|nen|azy| vo|mpi|ari|o f|tok|a k| ir|kan|oto|mah|ly |sia| la|n i|voa|haf|a r|ito|y k|oka|y r|y l|ano|ita|ene|its|ial|zon|aza|ain| re| as|fot|aro|fit|nat|nin|aly|har| ko|ham| no|fa |ary|atr|ila|ata|iha|nam|kon|oko| sa|elo|nja|anj|ive|isa|oa |dy |y d|o m|nto|ank|o n|otr|pan|fir|air|sir|ty |a v|sam|o s|tov|mit|rak|reo|o t|pia|tao| ao|no |y v|iar|a e|a z|hit|hoa| it|to |za |ton|eha|end|vy |idi|tin|ati|adi|lna|aln|rov|ban| za|nga|hah|oni|osi|sos|vah|ino|ity| at|hia|pir|ifa|omb|ame|era|vel|kar|va |tso|jak|fid|ifi|ais|o i|idy|la |ama|ba | pa|tot|ani|rar|mpa|haz|kam| eo| il|iva|aho|nao|n k|ato|lah|ovy| te|dro|lan|ela| mo| si|fin|miv|san|koa| he|aso| mb|sak|kav",qug:"ta | ka|ka |na |una|cha|ash|ari|a k|ana|pak|ish|ach|hka|shk|mi |kta|hay|man| ch|apa|ak |rin|ata|kun|har|akt|ita| ha|ami|lla| pa|ama|pas|shp| ma|tak|ay\xF1|y\xF1i|in |sh |ina|uku|nka|chi|aka|a c|yta|kuy|all|tap|a h|kan| tu|\xF1it|tuk| ru|run|chu|an |pay|ayt|ris| ki|aku|hpa|ank|a p|kam| sh|nam|a s|uy |i k|ayp|nak|pi |nta|a m| li|ay |lia|hin|kaw|nap|ant|tam|a t|iri|nat| wa|y r|kay|aws| ya|n t|ypa|wsa|pa |lak|shi|a a|lli|iku|hu |n k|iak|yay|kis| al|shu|a w|ipa| sa| il|api|kas|yku|yac|kat|a r|huk|i c|wan|hik|a i|ill|ush| ti|ayk|hpi| ku|kac|say|hun|uya|ila|ika|yuy|pir|ich|mac|ima|a y|yll|ayl|i p|kin|a l| wi|kus| yu|lan|tan|llu|kpi| ta| pi|aya|la |yan|awa| ni|kak|lat|rik|war|ull|kll|li |ink|nch|un |akp|n s|may| ay|uch|i s|nac|sha|iki|kik|h m|ukt|pip|tin|n p|iya|nal|aki| ri|ura|tik|mak|ypi|i m|i w|n m|his|k i|riy|iwa|y h| hu|han|akl|k t|mas|pik|kap| \xF1a|u t|nmi|nis|k a|i y|k l|kar| im|i i|wil|yma|aym|ksi|iks|uma| su|h k|has| ak|unk|huc|kir|anc|k m|pal|k k|ik |i\xF1i| i\xF1|ma |n y|mun| mu|mam|tac|a n|i t|k r|sam|ian|asi|k h|was|ywa|iyt|llp|san|sum|ray|si |pan|nki|tar| ii|u k|\xF1ik|uk |i\xF1a|kuk|wpa|awp|akk|a u|wat|uri| mi|yar|uyk|ayw|h c|ha |tay|rmi|arm|uta|las|yka|llk|kul|wi\xF1|ati|ska| ll|kit|n h|uti|kic|mat",mad:"an |eng|ng |ban| sa| ka|dha|ren| se| ba|ak | ha|adh|hak| dh|ang|se | pa|aba|a s|na |aga|ha | or|n s|ore|ara| ag|gad|are|ana|n o|ngg|ale|gan|a k|ala|dhu|tab|sar|ota|asa|eba| ot| ke|sab|ba |wi |uwi|abb|i h|huw|aan|n k|a b|bba| ta| ma|pan|hal|bas|ako|dhi|ra |kab|em |beb|ka |lak|gi |lem|g a|eka|n b|ama|nga|san|at |ong|ran|nge|a o|ggu|sa |a d|ane|n p|ken|par|aja|man|gar|ata|nek|apa| na|agi|abe| ga|e e|sal|a a|tan|g s|al |kal|gen|ta |i s|aka|e a|a p|a e| la| pe|nan| an|era|e d| e | be|n a| al|ena|uy |guy|n n|ate| bi|mas|e k|kat|uan|oan|kon|k k|a m|i d|g e|n t|g k|ada|koa|lan|ela| da|bad|ma |ne |as |lab|ega| mo|ar |car|one|i p|bi |kaa|bat|ri |on |pon| so|e b|le |ah |abi|ase|adi|epa| ep|k h|and|pam|te |ok |ste|aon|om |oko|aha|ari|ona|asi|ter| di|di |pad|e s|sad|yar|neg|ton|set|rga|ost|mos|gap|nda|a l|har|i k|ina| a | ng|kom|isa|si |a t|a h| kl|jan|daj|iga|hig|idh|hid|ndh|n m|ngs|tto|ett|arg|la |k b|ler|k d|nna| to|nao|n d|mat| ca|tad|bis|aya|epo|aen| po|bin|nya|kas|k s|n h|sya|nta|gsa|en |ant|n g|kar|i e|das|e t|e p|iba| pr|g p| ho| el|i a|hi |os |sao|uwa|tes| ja|nag|nas|lae|sia|t s|k o|nto|int|yat|arn|m p|duw|adu|eta| ko|i b|ni |g n|kla|rak|ame|mpo|jua|sok|aso|ggi|eja|pel|jam|ele| et|dil",nya:"ali|ndi|a m|a k| nd|wa |na | al|yen| ku|nth|ra |di |se |nse| mu|a n|thu|hu |nga| wa|la |mun|u a|unt|iye| ka|ce |ace| lo|a l|ang|e a| la| pa|liy|a u|ens| ma|idw|ons|dwa|e m|i n|ala|kha|lo |li |ira|era|ene|ga |ana|za |o m| mo|yo |o w| ci|we |dzi|ko |o l|and|dan|hal|zik|chi|oyo|pa |ner|ulu|ena|moy| um|a p| da|ape|kap|ka |iko| an|pen|a c|to |ito|hit|nch| nc|iri|lir|wac|umo|e k|lu |a a|aye| dz|kuk|a z|dwe|tha|mal| za|ing|ufu|mu |ro |ful| uf|o c|i d|lin|e l|zo |edw| zo|o a|mwa|u w|iro|o n|lan|amu|ere| mw|nzi|dza|alo|ri | li|fun|lid|gan|so | ca|kul|ofu|nso|o z|ulo|unz|o k|mul|lam|i c|san|a b|kwa| na|a d| a |una|u k|i l|nkh|ant|aku|ca |cit|oli|ipo|dip|ama|lac|wir|han|yan|osa|uli|tsa|i m|pon|kup|u d|ti |gwi|ukh|ung|hun|lon|ank|nda|iki|ina| ko|ao |diz|phu|ati|oma|i a|tsi|pat|iya|siy|kut| ya|zid|eze|ma |i k|mer|ome|mol|u n|u o|aph|ogw|izo|mba|sid|ku |sam|awi|adz| ad|izi|ula|say|e n|khu| kh|rez|vom|bvo|okh|lok|win|akh|o o| am| on|zir|map| zi|eza|ja |go |ngo|ika|its|ats|osi|gwe| co|isa|ya |haw|ani|o p|zi |ndu|kho|ezo|kir|uni|i u| ay|lal|gal|sa |bom| bo|ola|amb|wak|ha |ba |nja|anj|ban| ba|iza| bu|udz|ngw|bun|oye|o d|nal|kus|i p|i o|i y|wi | nt|e p| si|aka|ne |men|jir|nji|sed|ets|end|eka|uma|du ",zyb:"bou|iz |aeu|enz|eng|uz | bo|ih |oux|nz | di|ing|z g|ux |uq |dih|ngh| ca|ng |gen|ung|z c| mi|miz|ij |cae|z d| gi| de| ge|euq|you| ci|ngz|ouj|aen|uj | yi|ien|gya| gu|ngj|mbo| mb|zli|dae|gij|cin|ang|j d|nae| se| ba|z y|euz| cu|de |x m|oz |j g|ouz|x b|li |z b|h g| da| yo|nj |xna|oxn|rox| ro|h c|nzl|vei|yau|wz |z m|ix | si|i c|iq |gh |j b| cw|nda|yin| hi| nd|dan|vun|inh| ga|can|ei |cun|yie|q g|hoz|bau| li| gy|wyo|cwy|z h|gue|gz |gun|faz|unz|yen|uh |den|ciz| go|q c|gj | bi|ej |aej| fa|hin|zci| wn|j n|goz|gai|au |z s|q d| vu|h m|gva|hu |auj|ouq|az |h d|ya |uek|ci |nh |u d|ou |sou|jso|gjs|din|awz|enj| do|h s|eve|sev|z r|nq |sin|nhy|g g|g b|liz|kgy|ekg|sen|eix|wng|lij|ngq|bin|i d|ghc| ha|bae|hix|h y|j c|ghg|i b|ouh|en |n d|h f|j s|z v|j y|law|hci|anh|inz|q y|nei|anj|ozc|ez |enh|q s|aiq|uen|zsi|zda|hye|ujc|e c|siz|eiz|anz|g y|i g|q n|bie| ne| ae|giz|u c|hgy|g d|gda|ngd|cou| la|z l|auy|ai |in |iuz|zdi|jhu|ujh|yuz| du|j m| fu|cuz|eiq|g c|gzd| co|uyu|coz|zbi|biu| dw|i s|i n|aw |dun|yun|izy|daw| he|nho| ho|enq|x l|cie|q b|cij|uzl|x d|iuj|awj| ya|eij|dei|nde|sae|izc|wnq|wnh|sei|h b|aih|gzs|bwn|a d|u g|ngg|jca|e b|ran| ra|hcu| me|iet|van| bu|guh|hen|si |wnj| ve|u b|azl|inj|gak|gan|ozg|siu|yaw|i m",kin:"ra | ku|se | mu|a k|ntu|tu |nga|umu|ye | um|unt|mun|e n| gu|we |ira|a n| n |wa |ere|mu |ko |gom|a b|e a| ab|li |e k|mba|a a|e b|aba|ga |e u|ba |omb|o k| ba|a u|ose|u b|o a| cy|ash|eng| ag|kwi| bu|za |gih|ren|ndi| ub|ang|yo |aka|gu |igi| ib|a g|a m| nt|uli|o b|ama|ihu|e i|nta| ak|ago|ro |ora| ka|ugu|hug|di |iye|ban| am|cya|ku |ta | bw|and|sha|re | ig|gan|ubu|na | kw|obo| by| bi|a i|yan|ka |sho|kub|era|ese| we|kan|aga|hob|bor|ana|byo|ura|uru|ibi|rwa|wes|u w|no |uko|i m|mo |u a|ure|ili|uba|o n|uha|uga|n a| im|ish|bwa|bwo|wiy|ali|ber|ze |ne |ush|are|o i|u m|ger|bur|ran| ki| no|ane|bye| y |ege|teg|guh| uk|n i|rag|i a|ya |u g|e m|anz|bo |abo|gar|wo |y i|ho |age|ind|o m|eke|a s|ara|zir|ite|kug|kim|aci| as|u n|ani|kir|mbe| gi|yos|kur|ugo|gir|e c|iza|aho|i b|tur|ata|o u| se|u u|zo |i i|aha|nge|mwe|iro|akw|any|eza|uki|imi|o y|ate|u k|iki|atu|bat| in|go |tan|n u|bos| bo| na|hak|iby| at|ihe|ung|ha |bul|kar|eye|eko|gek|nya|o g|shy|e y|awe|ngo|bit|mul|nzi|rer|bag|ge |imw|bah|cir|gac|bak|je |gez|imu|eze|tse|ets|mat| ru|irw|he | ni| ur| yi|ako|ngi| ng|i n|rez|ubi|gus|fit|afi|ugi|uka|amb|o c|utu|ufa|ruk|mug|bas|bis|uku|hin|e g|ige|amo|ing| af|yem|ni | ry|a r|gaz|te |erw|bwe|ubw|hwa|iko| al|ant|zi ",zul:"nge|oku| ng|a n|lo |ung|nga|la |le | no|elo|lun| um|e n|wa |we |gel|e u|ele|nel|thi|ke |nom|ezi|ma |ntu|oma|hi |o n|ngo|tu |nke|onk|o l|uth|ni |a u|lek|unt| wo|o e| lo|mun|umu|pha| ku|ang|ho |kwe|ulu| ne|won|une|lul|elu| un|a i|gok|kul|ath|hla|lok|khe|eni|tho|ela|zwe|akh|kel|a k|enz|ana|ban|aka|u u|ing|ule|elw|kho|uku|ala|lwa|gen| uk|wen|ama|na |e k|ko |gan|a e|he |zin|enk|o y| ez|kat| kw|lan|eth|het|o o| ok|okw|i n|nzi|aba|e a|hak|lel|lwe|eko|ane|ka |so |yo |ayo|o a|uhl|nku|nye| na|thu|mph|do |ben|ise|kut|ike|kun| is| im|hol|obu|fan|i k|e w|nhl|nok|ini|and|kuh|ukh|kuk| ak|e i|isi|aph|zi |ile|eki|ekh| ba|eka|the|a a| le| ye|kwa|e e|fut| fu|za |mal| ab|ebe|isa| em|o w|kub|mth|i w|ndl|emp|any|olo|ga | ko|nen|nis|alu|ith|eli|ndo|seb|nda| ya|i i|eke|vik|ake|uba|abe|ezw|yok|ba |ale|zo |olu|ume|ye |esi|kil|khu|yen|emi|nez|hlo|a l|ase|ula|kek|a o|iph|o u|no |azw|kan|mel|uny|ne |ufa|ahl|lin|hul|ant|und|sa |enh|kus|kuv|lak| in|o i|din|kom|amb|zis|ind|ola|uph|wez|eng|yez|phe|phi|mba|nya|han|kuf|nem|isw|ani|iyo| iy|fun| yo|uvi|i a|ene|izi| el|cal|i e|eze|ano|nay|hwe|kup|lal|uyo|ubu|kol|oko|ulo| la|e l|tha|nan|mfu|hon|nza|hin| ey|omp|da |bo |ilu|wak|lon|iso|kug|nka|ink|i l|sek|eku| ek|thw|gez",swe:"ar |er |tt |ch |och| oc|ing|\xE4tt|ill|r\xE4t|en | ti|til|f\xF6r|ll | r\xE4|nde| f\xF6|var|et |and| en|ell| ha|om |het|lle|lig|de |nin| de|ng | in| fr|as |ler| el|gen|nva|und|att|env|r h| i |r r|ska|fri| so|har|der| at|\xF6r |ter|all|t t| ut|den|ka |lla|som|av |sam|ghe|ga | sk| vi| av|ete|la |ens|t a| si|r s|iga|igh|tig| va|ig |a s| st|ion|ra |tti|a o| \xE4r|ten|ns |t e|na | be|han| un| an| sa|a f| la| gr| m\xE5|nge|n s|vis|lan|m\xE5 |ati|nat| \xE5t|an |nna| li| al|t f|ans|nsk|sni|gru|\xE4ll|tio|ad | me|isk|kli|s f|t i|st\xE4|t s|ri |med|sta|h r|lik|da |dig|ta |r o|run|on | re|lag|tta|\xE4r |kap|a i|a r|\xE4nd|erv|n e|kte|n f|rvi|nom|itt|id | mo|sky|r e|ver|\xE4ns|vil|gt |igt| na|tan|uta|dra|t o|ro |isn| fa|kal|ihe|rih|erk|r u|e s|per|l v|vid|one|rel|ber|ran|ot |mot|ndl|d f|ed |ika|m\xE4n|l s|bet|t b|dd |ydd|kyd|n o|s s|str|n m|tet|sin|r f| om|rna|int|r i|end|nad|l a|ap |ers|nda|t v|ent|rbe|arb| h\xE4|ets|h\xE4l|amh|ckl|gar|nga|r m|je |rje|arj|n i|s e|lin|r t|i s|r\xE4n| pe|ilk|t l|ern|p\xE5 | p\xE5|t\xE4l|d e|dom|ege|g e|tni|r a|lit|ras| s\xE5|lln|kil|ski|enn|i o|a d|er\xE4|n a|ara| ge|\xE4ro|a m| ar|t d|ilj|els|yck| ve|g o|fr\xE5|nas|tra|ess|del|m s|liv|l l|in |v s|g a|ast|e e|val|son|rso|e t|age|nd | eg|ial|cia|oci|soc|upp|igi|eli|g s|rkl|gad|ndr|nte|\xF6ra",lin:"na | na| ya|ya |a m| mo|to | ko|li |a b| li|o n| bo|i n|a y|a n|ki |a l|kok|la | ma|zal|i y|oki| pe|ngo|ali|pe |so |nso|oto|ons| ba|ala|mot|a k|eng|nyo|eko|o e|nge|yon| ny|kol|lik|iko|a e|o y|ang|ye | ye|oko|ma |o a|go | ek|ko |e m|aza|te |olo|sal|ama|si | az|mak|e b|lo | te|ta |isa|ako|amb|sen|ong|e n|ela|oyo|i k|ani| es|o m|ni |osa| to|ban|bat|a t|mba|ing|yo | oy|eli|a p|mbo|o p|mi | mi| nd|ba |i m|bok|i p|isi|mok|lis|nga|ge |nde|koz|bo |gel|ato|o t|mos|aka|oba|ese|lam|kop| ez|lon|den|omb|o b|ota|sa |ga |e a|e y|eza|kos|lin|esa|e e|kob|e k|sam|kot|kan|bot|ika|ngi|kam|ka | po|gom|oli|ope|yan|elo| lo|ata| el|bon|oka|po |bik|ate| bi|a s|i t|i b|omi|pes|wa | se|oza|lok|bom|oke|som|zwa|mis|i e|bek|iki| at|ola|ti |ozw|lib|o l|osu|oso|e t|nda|ase|ele|kel|omo|bos|su |usu|sus|bal|i l|ami|o o|bak| nz|pon|tel|mob|mu | ep|nza|asi|mbi|ati|kat|le |gi |ana|oti|ndi|tan|a o|wan|obe|kum|nya|mab|bis|nis|opo|tal|mat| ka|bol|and|aye|baz|u y|eta| ta|ne |ene|emb|sem|e l|gis|ben| ak| en|mal|obo|gob|ike|se |ibo|\u2019te| \u2019t|umb| so|mik|oku|be |mbe|bi |i a|eni|i o| mb|tey|san| et|abo|ebe|geb|eba|yeb|bu | as|ote|sik|ema|eya|ibe|mib|ai |pai|mwa|kes|da |may|boz|amu|a a|kom|mel|ona|ebi|ia |ina|tin| ti|bwa|sol|son",som:" ka|ka |ay |uu |an |yo |oo |aan|aha| wa|da | qo| in| u |sha| xa|a i|ada|iyo| iy|ma |ama| ah| la|qof|aa |hay|ga |a a|a w|ah | dh|a s| da|in |xaq| oo|a d|aad|yah|eey| le|isa|lee|u l|q u|aq | si|taa|eya|ast|la |of |iya|sa |y i|u x|sta|kas|xuu|uxu|wux| wu|iis|nuu|inu|ro | am| ma|a q|wax|dha|ala|kal|nay|f k|a k|le |ku | ku| sh|o i|a l|ta |maa|a u|dii|loo| lo|o a|ale|ara|ana|iga|o d| uu|ha |lo |o m|o x|doo|aro|kar|yaa|gu |si |ima|na | xo| fa|adk|do |a x|ad |aas| qa| so|a o| ba|lag| aa| he|dka|adi|soo|o k|aqa| is|ash|u d|had| ga|eed|san|u k|a m|iin|i k| ca|u s|n l|yad|rka|axa|elo|hel|aga|hii|o h|o q| ha|id |n k| mi|baa| xu|har|xor|aar|ax |mad|add|nta|mid|aal|waa|haa|ina|qaa|daa|agu|ark|o w|nka|u h|dad|ihi| bu| ho|naa|n a|ays|haq|a h|o l| gu|o s|aya|saa|lka| ee| sa|dda|ab |nim|quu|gga|ank|kii|rci|arc|n s|a g| ji|gel| ge|eli|ysa|a f|siy|int|laa|uuq|uqu|xuq| mu|i a|uur|mar|ra |iri|o u| ci|riy|ya |ado|alk|dal|ee |al |rri|ayn|asa| di|ooc|aam|ofk|oon|to |ayo|dar| xi|dhi|jee|a c| ay|yih|a j|ban|caa|lad|sho|d k|ida|uqd|agg|sag|ras|bar|ar | ko| ra|o f|gaa|gal|fal|u a| de| ya|o c|ii |xay|eel|aab|sig|aba|orr|hoo|u q|y d|ed |ho |sad|qda|h q|fka|n i|xag|n x|qay|lsh|uls|bul|u w|jin| do|raa| ug|ido|ood",hms:"ang|gd |ngd|ib | na|nan|ex | ji|eb |id |d n|b n|ud | li|nl |ad | le|jid|leb|l l| ga|ot | me|x n|anl|aot|mex|d g|b l|d d|ob |gs |ngs|jan| ne|ul | ni|nja| nj|lib|ong|nd | zh|jex| je|b j| sh|ngb| gh|gb | gu|gao|l n|han| ad|gan| da|t n| wu|il |x g|nb |b m| nh|she|is |l j|d l|nha|l g|d j|b g|el |end|wud|nex|gho|d s|d z|oul|hob|ub |nis| ch| ya|it |b y|eib| gi|s g|lie| yo| zi|oud|s j|d b|nx | de|es |d y| hu|uel|gue|ies|aob|you| ba|d m|chu|gia|dao|b d|s n|zib| go|zha|eit|hei|al |hud| do|nt |ol | fa|t g|hen|ut |gx |ngx|ab |fal|x j|b z|ian|d h|don|b w|t j|iad|nen| xi|gou|d c|b h|hao|x z|nib|anx|ant|gua| mi|s z|dan|ox |inl|hib|lil|uan|and| xa|b x| se|x m|uib|hui|d x|anb|enl| we|od |enb| du|at |ix |s m|bao| ho|hub| ng|zhi|jil|l s|yad|t m|t l|yan| ze| ju|heb|had|os |aos|t h|l d|nga| he|b a|xan|b s|sen|xin|dud|jul|d a|lou| lo|dei|d w| bi|b c| di|zhe|gt |ngt|x l|bad|x b| ja|hon|zho|blo| bl|d k| ma|deb|l z|wei| yi| qi|b b|x d|d p|eud| ge|x a|can| ca|t w|lol| si|hol|s w|aod|pao| pa|ren| re|x s|eut|pud| pu|aox|mis|gl |ngl|x w|zei|gon|enx|gha|s a|b f|l y|oub|eab|hea| to|did| ko|unb|ghu|t p|x c|geu|t s|x x|jao|ed |t c|l m|l h|jib|ax |l c|d f|nia| pi|eul|d r| no|min|l t|heu|ux |tou|ns |s y|iel|s l|hun",hnj:"it | zh| ni|ab |at |ang| sh|nit| do|uat|os |ax |ox |ol |nx |ob | nd|t d|zhi|nf |x n|if |uax| mu|d n|tab| ta| cu|mua|cua|as |ad |ef |uf |id |dos|gd |ngd|hit|ib |us |enx|f n|she|s d|t l|nb |ux |x z|ed |inf|b n|l n|t n|aob|b z| lo|ong|ix |dol| go|zhe|f g| ho| yi|t z|d z|b d| le|euf|d s|ut |yao| yo| zi|gb |ngb|ndo|enb|len| dr|zha|uab|dro|hox| ge|nen| ne|han| ja|das|x d|x c|x j|f z|shi|f h|il | da|oux|nda|s n|nd |s z|b g| ny|heu| de|gf |ngf| du|od |gox| na|uad| gu|inx|b c| ya|uef| xa| ji|ous| ua| hu|xan|hen|zhu|nil|jai|rou|t g|f d| la|enf|ged|ik | bu|nya|you|f y|lob|af |bua|uk |is |yin|out|of |l m|ud |hua| qi|ot |t s| ba|ait| kh|s s|nad| di|aib|x l|lol| id|dou|ex |aod|bao| re| ga|d d|b y|las|hed|b h|b s|f b|t y|jua| ju| dl|x s|hue|b l| xi|zif|dus|b b|x g|hif|x y|hai| nz|sha| li|x t| be|d j|und|hun|ren|d y|hef|xin| ib|b t|l d|aos|s l| ha|gai|nzh|gx |ngx| ao|s b|s x|el |gt |ngt|hik|aid|s t|x m|f l|f t| pi|aof|t r|eb | gh|s y|d l|gua| bi| za| fu|t h| zu|hou|deu|lb | lb|d g| mo|b k| bo|iao|ros|gon|eut|x h|al |uaf|hab|t t|k n|f x|hix|pin|yua| no|t b|ak | zo|s m| nb| we|d b|gha|f s|mol|euk|dax|l b|nof| ko|lou|guk|end|uas|t k|dis|dan|yol|uan|d t|x b|lan|t m| ch|jix|x x| hl|aox|zis|x i|et | ro",ilo:"ti |iti|an |nga|ga | ng| it| pa|en | ma| ka| a | ke| ti|ana|pan|ken|ang|a n|agi|a k|n a|gan|a m|a a|lin|ali|aya|man|int|teg|n t|i p|nte| na|awa|a p|na |kal|ng |dag|git|ega|sa |da |add|way|n i|n n|no |ysa|al |dda|n k|ada|aba|nag|nna|ngg|eys| me|a i|i a|mey|ann|pag|wen|i k|gal|gga| tu|enn| da| sa|nno| we|ung| ad|tun|mai| ba|l m| ag|ya |i s|i n|yan|nan|ata|nak| si|aka|kad|aan|kas|asa|wan|ami|aki|ay |li |i m|apa|yaw|a t|mak| an|i t|g k|a s|ina|eng|ala|ika|ama|ong|ara|ili|dad| aw|gpa|nai|et |yon|ani|aik|on |at |oma|sin|bal|ipa|n d|uma|g i|ket|ag |in |aen|n p|ram|sab|aga|nom|ino|lya|ily|syo|i b| ki|nia|agp|gim|kab|asi|kin|iam|ags|bab|oy |toy|n m|agt| ta|bag|sia|g a|gil|mil| um|o p|ngi|n w|i i|pad|pap|daa|iwa|naa|eg |ias|ed |nat|bae|o k|saa|san|pam|gsa|ta |kit|ma |dum|yto|tan|i e|t n|uka|t k|apu|lan|sta|sal| li|a b|ari|g n|den|mid|ad |o i|y a|ida|ar |aar|y n|dey| de| wa|a d|ak |bia|ao |tao|min|asy|mon|imo| gi|maa|sap|abi|i u|aib|kni|i l|gin|ged|o a| ar|kap|pul|eyt|abs|ibi| am|akn|i g|kip|isu|g t|bas|nay|ing|i d|kar|ban|iba|nib|t i|as |d n|y i|ura|a w|nal|aad|i w|lak|adu|kai|bsa|duk|edu| ed|may|agb|agk|tra|gge|sol|aso|agr|ngs|ian|ila|dde|edd|tal|aip|kua|umi|pay|sas|ita|pak|g d|ulo|inn|aw "},Cyrillic:{rus:" \u043F\u0440| \u0438 |\u0440\u0430\u0432| \u043D\u0430|\u043F\u0440\u0430|\u0441\u0442\u0432|\u0433\u043E |\u0435\u043D\u0438|\u0432\u043E |\u043E\u0432\u0435| \u043A\u0430|\u043D\u0430 |\u0442\u044C | \u043F\u043E|\u0438\u044F |\u043E \u043D| \u043E\u0431|\u0435\u0442 | \u0432 |\u0441\u0432\u043E| \u0441\u0432|\u0430\u0432\u043E|\u0430\u043D\u0438|\u043E\u0441\u0442|\u043E\u0433\u043E|\u044B\u0439 |\u0430\u0436\u0434|\u043B\u043E\u0432|\u0442 \u043F| \u0438\u043C|\u043D\u0438\u044F| \u0447\u0435| \u0441\u043E|\u0435\u043B\u043E|\u0438\u043C\u0435| \u043D\u0435|\u043B\u044C\u043D|\u043B\u0438 |\u0447\u0435\u043B|\u043A\u0430\u0436|\u0435\u0441\u0442|\u0432\u0435\u043A|\u0430\u0442\u044C|\u043E\u0432\u0430|\u0438\u043B\u0438| \u0440\u0430|\u0435\u043A |\u0439 \u0447|\u0434\u044B\u0439|\u0436\u0434\u044B| \u0434\u043E|\u0438\u0435 |\u0435\u0435\u0442|\u043C\u0435\u0435|\u043D\u043E | \u0438\u043B|\u0438\u0438 |\u0441\u044F |\u0435\u0433\u043E|\u043E\u0431\u043E|\u0438 \u043F|\u043D\u0438\u0435|\u043A \u0438| \u0431\u044B|\u0438 \u0441|\u0438 \u0438|\u043C\u0438 |\u0431\u043E\u0434|\u0432\u043E\u0431|\u0432\u0430\u043D| \u0437\u0430|\u043E\u0439 |\u044B\u0445 |\u043E\u043C |\u043B\u0435\u043D|\u0430\u0446\u0438|\u0435\u043D\u043D|\u043E \u0441|\u043E \u043F|\u044C\u043D\u043E|\u0442\u0432\u0430|\u0442\u0432\u043E|\u043F\u0440\u0438|\u043D\u043E\u0433|\u0430\u043B\u044C|\u0430\u043A\u043E|\u0432\u0430 |\u0438 \u043D|\u0441\u0442\u0438|\u043D\u044B\u0445|\u0442\u043E |\u0431\u0440\u0430|\u043E\u043B\u0436|\u0434\u043E\u043B|\u0441\u0442\u043E|\u0438 \u0432|\u043D\u044B\u043C|\u043E\u0435 | \u0435\u0433|\u043D\u043E\u0432|\u0438\u0445 |\u0435\u043B\u044C|\u0442\u0435\u043B|\u0442\u0438 |\u043D\u043E\u0441|\u043D\u0435 |\u043F\u043E\u043B|\u0440\u0430\u0437| \u0432\u0441|\u0438 \u043E| \u043B\u0438|\u0438 \u0440|\u044B\u0442\u044C|\u0431\u044B\u0442|\u0432\u043B\u0435|\u0440\u0435\u0434|\u0438\u044E |\u0442\u043E\u0440| \u043E\u0441|\u044C\u0441\u044F|\u0442\u044C\u0441|\u043E\u0434\u0438|\u0449\u0435\u0441|\u044F \u0438|\u043A\u0430\u043A|\u043F\u0440\u043E|\u0436\u0435\u043D|\u044B\u043C |\u043F\u0440\u0435|\u0430 \u0441|\u0441\u043D\u043E|\u0435 \u0434|\u043D\u043D\u043E|\u043E \u0438|\u0438\u0439 | \u043A\u043E|\u043E \u0432| \u043D\u0438| \u0434\u0435|\u0441\u0442\u0443|\u043B\u0436\u043D|\u0441\u043E\u0432|\u0435 \u0432|\u043D\u043E\u043C|\u043E\u043B\u044C|\u0440\u0430\u043D|\u043E\u0436\u0435|\u0438\u0447\u0435|\u0435\u0439 |\u0430\u0441\u0442|\u043D\u043D\u044B| \u043E\u0442|\u0442\u0443\u043F|\u043C \u0438|\u043E\u0434\u043D|\u0437\u043E\u0432|\u0440\u0435\u0441| \u043C\u043E|\u043E\u0441\u0443|\u043B\u044F |\u043E\u0441\u043D|\u0430 \u043E|\u0432\u0435\u043D| \u0442\u043E|\u043E \u0431|\u0448\u0435\u043D|\u0442\u0432\u0435|\u043E\u0431\u0449|\u0430 \u0438|\u0435 \u043C|\u044C\u043D\u044B|\u043E\u0431\u0440|\u0432\u0435\u0440|\u0447\u0435\u043D|\u044F \u043D|\u0436\u043D\u043E|\u0447\u0435\u0441|\u0430\u043A |\u043B\u0438\u0447|\u043D\u0438\u0438|\u0435 \u0438|\u0432\u0441\u0435|\u0431\u0449\u0435|\u0432\u0430\u0442|\u0435\u0441\u043F|\u043C\u043E\u0436|\u0439 \u0438|\u043D\u043E\u0435|\u043E \u0434|\u0431\u0435\u0441| \u0432\u043E|\u044F \u0432|\u0434\u0443 | \u0441\u0442|\u0434\u043D\u043E|\u043E\u043D\u0430|\u043D\u0430\u0446|\u0434\u0435\u043D|\u0435\u0436\u0434|\u0445 \u0438| \u0431\u0435|\u0438 \u0434|\u043D\u044B |\u0434\u043E\u0441|\u0434\u043B\u044F| \u0434\u043B| \u0442\u0430|\u043B\u044C\u0441|\u0430\u0442\u0435|\u0446\u0438\u0438|\u044F \u043F|\u0443\u044E |\u0438\u0442\u0435|\u0435 \u043E|\u043D\u043E\u0439|\u043F\u043E\u0434|\u043E\u0442\u043E|\u0441\u0442\u0440|\u0441\u0442\u0430| \u043C\u0435|\u0435\u043B\u0438| \u0440\u0435|\u044F \u043A|\u0442\u043E\u044F|\u0430\u043C\u0438|\u0435\u043D |\u044C \u0432|\u044E \u0438|\u0430\u0437\u043E|\u0433\u043E\u0441|\u043C \u043F|\u044C \u043F|\u0442 \u0431|\u0436\u0435\u0442|\u0443\u0447\u0430|\u0441\u0443\u0434|\u044C\u0441\u0442|\u0434\u0441\u0442|\u0449\u0438\u0442|\u0430\u0449\u0438|\u0437\u0430\u0449|\u043A\u043E\u043D|\u043D\u0438\u044E|\u0430\u043C |\u043E\u0434\u0443|\u0435\u0440\u0435|\u0433\u0440\u0430|\u043F\u0435\u0447|\u043E \u043E|\u043E\u0440\u043E|\u043A\u043E\u0442|\u0438 \u043A|\u0442\u0440\u0430|\u043D\u0438\u043A|\u0443\u0449\u0435|\u0446\u0438\u0430|\u043E\u0446\u0438|\u0441\u043E\u0446|\u043D\u0430\u043B|\u0435\u0441\u043A|\u043E \u0440|\u043A\u043E\u0433|\u0434\u0440\u0443| \u0434\u0440|\u043D\u0438 |\u0430\u0432\u0430|\u043D\u0441\u0442|\u0435\u043C |\u0430\u0432\u043D|\u044B\u043C\u0438|\u0435\u0434\u0441|\u0434\u0438\u043D|\u0434\u043E\u0432| \u0433\u043E| \u0432\u044B|\u0432 \u043A|\u044B\u0435 |\u043E\u0431\u0435|\u043C\u0443 |\u044F \u0435|\u0441\u043B\u0443|\u0443\u0434\u0430|\u0442\u0430\u043A|\u043A\u043E\u0439|\u0442\u0443 |\u0438\u0442\u0443|\u0437\u0430\u043A|\u0445\u043E\u0434|\u0432\u043E\u043B|\u0440\u0430\u0431|\u043A\u0442\u043E|\u0438\u043A\u0442|\u0438\u0447\u043D|\u043D\u0438\u0447|\u043E\u0442 |\u0438\u043D\u0430| \u043A |\u0442\u0435\u0440|\u0440\u043E\u0434|\u043D\u0430\u0440",ukr:"\u043D\u0430 | \u043F\u0440|\u043F\u0440\u0430| \u0456 |\u0440\u0430\u0432| \u043D\u0430| \u043F\u043E|\u043D\u044F |\u043D\u043D\u044F| \u0437\u0430|\u043E\u0433\u043E|\u0442\u0438 |\u0432\u043E |\u0433\u043E | \u043A\u043E|\u0430\u0432\u043E| \u043C\u0430|\u043B\u044E\u0434|\u043E \u043D| \u043D\u0435| \u043B\u044E|\u044E\u0434\u0438|\u043E\u0436\u043D|\u043A\u043E\u0436|\u043B\u044C\u043D|\u0436\u043D\u0430|\u0434\u0438\u043D|\u0430\u0442\u0438|\u0430\u0454 |\u0438\u0445 |\u0438\u043D\u0430|\u043F\u043E\u0432|\u0441\u0432\u043E| \u0441\u0432|\u0430\u043D\u043D|\u0454 \u043F|\u043C\u0430\u0454|\u0430\u0431\u043E|\u0430 \u043B| \u0431\u0443|\u043D\u0435 |\u0435\u043D\u043D|\u0431\u043E | \u0430\u0431|\u0430 \u043C|\u043E\u0432\u0438|\u043D\u0456 | \u0432\u0438| \u043E\u0441|\u0430\u0446\u0456|\u0432\u0438\u043D| \u0442\u0430|\u0431\u0435\u0437|\u043E\u0431\u043E| \u0432\u0456| \u044F\u043A|\u0435\u0440\u0435| \u0434\u043E|\u0456 \u043F|\u0443\u0432\u0430|\u043E \u043F|\u0430\u043B\u044C|\u043D\u0438\u0445|\u043E\u043C |\u043C\u0438 |\u0456\u043B\u044C|\u043D\u043E\u0433|\u0442\u0430 |\u0438\u0439 |\u043F\u0440\u0438|\u043E\u044E |\u0442\u044C |\u0441\u0442\u0430| \u043E\u0431|\u0432\u0430\u043D|\u0438\u043D\u043D|\u0442\u0456 |\u043E\u0441\u0442| \u0443 |\u0441\u044F |\u0432\u0430\u0442|\u0431\u0443\u0442|\u0438\u0441\u0442| \u043C\u043E|\u0435\u0437\u043F|\u0443\u0442\u0438|\u043D\u043E\u0432|\u043F\u0435\u0440|\u0456\u0457 |\u0438 \u043F|\u0431\u043E\u0434|\u0432\u043E\u0431|\u0441\u0442\u0432| \u0432 |\u043E \u0432|\u0432\u0456\u0434| \u0431\u0435|\u0430\u043A\u043E|\u043F\u0456\u0434|\u0442\u0438\u0441|\u043A\u043E\u043D|\u043D\u043E |\u0432\u0430 |\u043D\u043D\u0456|\u0456 \u0441|\u0430 \u043F|\u0441\u0442\u0456| \u0441\u043F|\u043D\u0438\u0439|\u0434\u0443 |\u044C\u043D\u043E|\u043E\u043D\u0430| \u0456\u043D|\u0434\u043D\u043E|\u043D\u0438\u043C|\u0456\u0439 |\u0430 \u0437|\u043D\u0443 |\u043C\u043E\u0436|\u0457\u0457 | \u0457\u0457|\u043B\u044F |\u0441\u043E\u0431|\u043C\u0443 |\u043E\u0457 |\u044F\u043A\u043E| \u043F\u0435| \u0440\u0430|\u0456\u0434 | \u0434\u0435|\u0456 \u0432|\u0438 \u0456|\u0447\u0438\u043D|\u0432\u043D\u043E|\u043E\u043C\u0443|\u043D\u043E\u043C|\u0443 \u043F|\u0456 \u043D|\u0430 \u0441| \u0441\u0443|\u0430 \u043E|\u043D\u0435\u043D|\u0438\u0441\u044F|\u043E\u0432\u043E|\u043D\u0430\u043D|\u043E\u0434\u043D|\u0443 \u0432|\u0456 \u0434|\u0430\u0432\u0430|\u0456\u0434\u043D|\u0440\u0456\u0432| \u0440\u0456|\u0456 \u0440|\u0438\u043C\u0438|\u0432\u0456\u043B|\u0438\u043C |\u0446\u0456\u0457|\u043E \u0434|\u0430 \u0432|\u0441\u0442\u0443|\u043E\u0434\u0443|\u0431\u0443\u0434|\u043E\u0432\u0430| \u043F\u0456| \u043D\u0456|\u044F \u043D|\u0435 \u043F|\u043D\u0430\u0446|\u0438 \u0441|\u043D\u043D\u0430| \u043E\u0434| \u0440\u043E|\u043D\u043E\u0441|\u044C\u043D\u0438|\u044E\u0442\u044C|\u0438 \u0437|\u043A\u0438 |\u0456 \u0437|\u0430 \u0431|\u0441\u043F\u0440|\u0447\u0435\u043D|\u0436\u0435 |\u043E\u0436\u0435|\u0435 \u043C|\u043E\u0432\u043D|\u0440\u0438\u043C|\u0435 \u0431|\u0442\u043E |\u043D\u0456\u0445|\u043E\u0441\u043E|\u0443\u0434\u044C|\u0432\u0456 | \u0440\u0435| \u0441\u0442|\u0440\u0430\u0446|\u0434\u043E | \u0441\u043E|\u0440\u043E\u0437|\u043B\u0435\u043D|\u0432\u043D\u0438|\u0456\u0432\u043D|\u0440\u043E\u0434| \u0432\u0441|\u0441\u043F\u0456|\u043A\u043E\u0432|\u0437\u043F\u0435|\u0456\u0432 |\u0434\u043B\u044F| \u0434\u043B|\u0457 \u043E|\u0445\u0438\u0441|\u0430\u0445\u0438|\u0437\u0430\u0445|\u2010\u044F\u043A|\u044C\u2010\u044F|\u0434\u044C\u2010|\u044F \u0456|\u0442\u0430\u043A|\u0437\u043D\u0430|\u0437\u0430\u0431|\u0441\u0442\u044C|\u0442\u0443 |\u043D\u043E\u044E|\u0430 \u043D|\u0442\u043E\u0440|\u0441\u043D\u043E|\u043E \u0441|\u0436\u0435\u043D|\u0446\u0456\u0430|\u043E\u0446\u0456|\u0441\u043E\u0446|\u0456\u043D\u0448|\u0456 \u043C|\u043A\u043B\u0430|\u0438 \u0432|\u0442\u0435\u0440| \u0434\u0456|\u0456\u0441\u0442|\u043E\u0432\u0456|\u0443 \u0441|\u044F \u0432|\u0430\u0440\u043E|\u0441\u0456 |\u0432\u0456\u0442|\u0441\u0432\u0456|\u043E\u0441\u0432|\u0440\u043E\u0431|\u043F\u0456\u043B|\u0440\u0435\u0441|\u0437\u0430 |\u043F\u0435\u0447|\u0430\u0431\u0435|\u043A\u0443 |\u043B\u0438\u0432|\u0435\u0440\u0436|\u0434\u0435\u0440|\u0432 \u0456|\u0430\u0432\u043D|\u0442\u0430\u0432|\u0430\u0432 |\u0430\u043C\u0438|\u043A\u043E\u043C|\u0432\u043B\u0435|\u043E \u0431|\u044C \u043F| \u0449\u043E|\u0457\u0445 |\u0442\u0432\u043E|\u0445\u0442\u043E|\u0456\u0445\u0442|\u043A\u043E\u0433| \u043A\u0440|\u0430\u043D\u043E|\u0442\u0430\u043D|\u0456\u0430\u043B|\u043D\u0430\u043B|\u043D\u044C |\u0445 \u043F|\u0436\u043D\u043E|\u043B\u0435\u0436|\u0430\u043B\u0435|\u043F\u0440\u043E|\u0442\u0432\u0430|\u0440\u0430\u0442|\u043E \u043E|\u0445 \u0432|\u043D\u0430\u0440|\u043B\u044C\u0441|\u0446\u0456\u0439|\u043A\u043E\u0440|\u0447\u0430\u0441|\u0440\u0436\u0430|\u0457 \u0441|\u0438\u043D\u0443|\u0434\u0441\u0442|\u043E \u0437|\u0440\u0430\u0437|\u043C\u0456\u043D|\u0430 \u0440|\u0437\u0430\u043A",bos:" \u043F\u0440| \u0438 |\u0440\u0430\u0432|\u043D\u0430 |\u043C\u0430 |\u043F\u0440\u0430| \u043D\u0430|\u0438\u043C\u0430| \u0441\u0432|\u0430 \u0441|\u0434\u0430 |\u0430 \u043F|\u0432\u043E |\u0458\u0435 |\u043A\u043E |\u0430\u043A\u043E|\u043E \u0438| \u043F\u043E|\u0430\u0432\u043E|\u0435 \u0441|\u0430 \u0438|\u0442\u0438 | \u0438\u043C| \u0434\u0430| \u0443 |\u0441\u0432\u0430|\u043D\u043E | \u0437\u0430|\u043E \u043D|\u0432\u0430 |\u0438 \u043F|\u0438\u043B\u0438|\u0432\u0430\u043A|\u043B\u0438 | \u043A\u043E|\u043D\u0435 | \u0438\u043B|\u043A\u043E\u0458| \u043D\u0435| \u0434\u0440|\u043E\u0441\u0442| \u0441\u043B|\u045A\u0430 |\u0438\u043C |\u0438 \u0441|\u0443 \u0441|\u0438 \u0438|\u0430\u0432\u0430|\u0438\u0458\u0435|\u0430 \u0443| \u0431\u0438|\u0441\u0442\u0432|\u0441\u0435 |\u0432\u0430\u045A|\u0430 \u0434|\u043E\u043C |\u0458\u0435\u0434|\u0431\u043E\u0434|\u043E\u0431\u043E|\u043B\u043E\u0431|\u0441\u043B\u043E| \u0441\u0435| \u0440\u0430|\u0438\u0445 |\u0441\u0442\u0438|\u0430 \u043D|\u045A\u0435 | \u043E\u0431| \u0458\u0435|\u043F\u0440\u0438|\u0434\u0440\u0443|\u0443 \u0438|\u0458\u0443 |\u043E \u0434|\u0438\u0442\u0438|\u0432\u043E\u0458|\u0440\u0430\u0437|\u0430\u045A\u0435|\u043E\u0432\u0430|\u0434\u0458\u0435| \u043E\u0441|\u0435 \u0438|\u043B\u043E |\u0435 \u043F|\u0430\u045A\u0430|\u0443\u0458\u0435|\u0438 \u0434|\u0431\u0440\u0430|\u0442\u0440\u0435| \u0442\u0440| \u0441\u0443|\u0443 \u0437|\u0430 \u043A|\u043E\u0433 |\u0443 \u043F|\u043E\u0458\u0435|\u0446\u0438\u0458|\u0440\u0435\u0431|\u0430 \u043E|\u0430 \u0431| \u045A\u0435|\u0438 \u0443|\u043C\u0438\u0458|\u043D\u0438 |\u043D\u043E\u0441|\u0431\u0430 |\u0435\u0434\u043D|\u0441\u0432\u043E|\u045A\u0435\u0433| \u0438\u0437|\u043F\u0440\u043E|\u0435 \u0434|\u0436\u0430\u0432|\u0431\u0438\u0442| \u043D\u0438|\u0438 \u043E|\u0441\u0442\u0430|\u0430 \u0437|\u0430\u0432\u043D|\u0432\u0458\u0435| \u043A\u0430|\u0431\u0438\u043B|\u043E\u0432\u043E|\u0430 \u0458|\u0430\u0458\u0443|\u0438\u0441\u0442|\u0438 \u043D|\u043D\u0438\u0445|\u0458\u0435\u043B|\u0442\u0443 |\u0440\u0435\u0434|\u0433\u043E\u0432| \u043E\u0434|\u0435 \u043E|\u043E\u0458\u0438| \u0441\u043C|\u0458\u0430 |\u043E \u043A|\u0438\u043B\u043E|\u0430\u0446\u0438|\u0435 \u0443|\u043F\u0440\u0435|\u043E \u043F|\u0435\u0431\u0430|\u0443 \u043E|\u0441\u0443 |\u0432\u0438\u043C|\u0438\u0447\u043D| \u0441\u0430| \u0434\u0458|\u0430 \u0442|\u0438\u0458\u0430|\u0448\u0442\u0438|\u0447\u043D\u043E|\u0440\u0436\u0430|\u0434\u0440\u0436|\u0441\u0442\u0443|\u0434\u043D\u0430|\u043E\u0434\u043D|\u0435\u043D\u0438|\u0437\u0430 |\u0438\u0432\u0430|\u043D\u043E\u043C|\u0435\u043C |\u0434\u0443 |\u0440\u0430\u043D|\u0432\u043D\u043E|\u0441\u043C\u0438|\u0458\u0435\u0440|\u0435 \u0431|\u0435 \u043D|\u0434\u0435 |\u043F\u043E\u0441|\u043C \u0438| \u0434\u043E|\u0443 \u0434|\u043D\u0430\u043A|\u0430 \u0440|\u043E\u0431\u0440| \u043C\u043E|\u043D\u0438\u043C|\u0435\u0433\u043E| \u043A\u0440|\u0442\u0438\u0442|\u043A\u0440\u0438|\u0432\u0435 |\u0430\u043D |\u0438\u043A\u043E|\u043D\u0438\u043A|\u043D\u0443 |\u0438 \u043C|\u043D\u043E\u0433|\u0435\u043D\u043E|\u0441\u043D\u043E|\u0435 \u043A|\u0442\u0443\u043F|\u0440\u0443\u0433|\u043A\u0430 |\u043E\u0434\u0430|\u0440\u0438\u0432|\u0432\u043E\u0459|\u0430\u043B\u043D|\u043C \u0441|\u0438\u0442\u0443|\u0430\u0448\u0442|\u0437\u0430\u0448|\u0430\u043D\u0438|\u0441\u0430\u043C| \u0441\u0442|\u0430\u043A\u0432|\u043E\u0432\u0438|\u043E\u0441\u043D|\u0440\u043E\u0434|\u0430\u0440\u043E| \u043C\u0438|\u0458\u0438 |\u0442\u0432\u0430|\u0434\u043D\u043E|\u043D\u0441\u0442|\u0430\u043A |\u0438\u0442\u0435|\u0459\u0443 |\u0432\u0438\u0447|\u0440\u0430\u0434|\u0443 \u043D|\u0443 \u043C| \u0442\u0430|\u0434\u0441\u0442|\u0442\u0438\u0432|\u043D\u0430\u0446|\u0440\u0438\u043C|\u043A\u043E\u043D|\u043A\u0443 |\u045A\u0443 |\u043E\u0434\u0443|\u0436\u0438\u0432|\u0430\u043C\u043E|\u0442\u0432\u043E|\u0442\u0435\u0459|\u043F\u043E\u0434|\u0435\u0452\u0443|\u0433 \u043F|\u043D\u043E\u0432|\u0438\u043D\u0430|\u043D\u0430\u0440| \u0432\u0458|\u0438 \u0431|\u043E\u0458 | \u043E\u0432|\u0430\u0432\u0435|\u0432\u0443 |\u0430\u043D\u0441|\u043E\u0458\u0430|\u0437\u043E\u0432|\u0430\u0437\u043E|\u0443\u0434\u0435|\u0431\u0443\u0434| \u0431\u0443|\u0435 \u0442|\u0438 \u0432|\u0435\u045A\u0430|\u0435\u0434\u0438|\u043D\u0438\u0446|\u043D\u0430\u043F|\u043C\u0458\u0435| \u0438\u0441|\u0441\u043B\u0443|\u0435\u0434\u0441|\u043E \u043E|\u0437\u0430\u043A|\u0438 \u043A|\u043C \u043F|\u0442\u043D\u043E|\u0438\u0432\u043E|\u0435\u0440\u0435|\u043D\u0438\u0447|\u043A\u0430\u043A|\u0430\u0434\u0430|\u0432\u043D\u0438|\u0443\u0433\u0438| \u0440\u043E|\u043C\u043E\u0432|\u0432\u0435\u043D|\u043E \u0441|\u0442\u043E |\u0442\u0435 | \u0432\u0440| \u0431\u0435|\u0430\u0440\u0430|\u043A\u043B\u0430| \u0431\u0440|\u0443 \u0431|\u0443 \u0443|\u0438 \u0442|\u043E\u043D\u0430| \u043E\u043D|\u0430\u0432\u0438|\u0458\u0430\u043B|\u0434\u043D\u0438| \u0441\u043A",srp:" \u043F\u0440| \u0438 |\u0440\u0430\u0432|\u043D\u0430 |\u043F\u0440\u0430| \u043D\u0430|\u043C\u0430 | \u0441\u0432|\u0438\u043C\u0430|\u0434\u0430 |\u0430 \u043F|\u0432\u043E |\u043A\u043E |\u0442\u0438 |\u0430\u0432\u043E| \u043F\u043E|\u0430 \u0438|\u0430\u043A\u043E|\u0430 \u0441| \u0437\u0430| \u0443 |\u043E \u0438| \u0438\u043C|\u0438 \u043F|\u0432\u0430 |\u0441\u0432\u0430|\u0432\u0430\u043A| \u0434\u0430|\u043E \u043D|\u0435 \u0441|\u043E\u0441\u0442| \u043A\u043E|\u045A\u0430 |\u043B\u0438 |\u0438\u043B\u0438|\u043D\u0435 |\u043E\u043C | \u043D\u0435|\u0430 \u043D| \u0441\u043B| \u0438\u043B|\u0458\u0435 | \u0434\u0440|\u0438 \u0441|\u043D\u043E |\u043A\u043E\u0458|\u0443 \u0441|\u0430\u0432\u0430| \u0440\u0430|\u043E\u0433 |\u0441\u043B\u043E|\u0458\u0443 |\u0438\u043C |\u0441\u0442\u0438|\u0431\u043E\u0434|\u043E\u0431\u043E|\u043B\u043E\u0431|\u0438\u0442\u0438|\u0430 \u043E|\u0441\u0442\u0432|\u0438 \u0443|\u0430 \u0434|\u043D\u0438 |\u0458\u0435\u0434|\u0443 \u043F|\u043F\u0440\u0438|\u0435\u0434\u043D| \u0431\u0438|\u0438 \u0438|\u0430 \u043A|\u043E \u0434|\u0441\u0442\u0430|\u0438\u0445 |\u0434\u0440\u0443|\u0430 \u0443| \u0458\u0435|\u0430\u045A\u0430| \u043E\u0441| \u043D\u0438|\u043D\u043E\u0441|\u043F\u0440\u043E|\u0430\u0458\u0443|\u0438 \u043E| \u0434\u0435| \u0441\u0443|\u0443 \u0438|\u0441\u0435 |\u045A\u0435 |\u0458\u0430 |\u043E\u0432\u0430|\u0438 \u0434|\u0446\u0438\u0458| \u043E\u0431|\u0443\u0458\u0435|\u0440\u0435\u0434|\u0436\u0430\u0432|\u0435 \u0438|\u0435 \u043F|\u0430 \u0458|\u0434\u043D\u0430| \u0441\u0435| \u043E\u0434|\u0432\u0435 | \u043A\u0430|\u0435\u043D\u0438|\u0440\u0436\u0430|\u0434\u0440\u0436|\u0430 \u0437|\u0430\u0432\u043D|\u0435\u045A\u0430|\u0430\u0446\u0438|\u0432\u043E\u0458|\u043E\u0432\u043E|\u0443 \u0443|\u043C \u0438|\u043E\u0458\u0430|\u0432\u0430\u045A| \u0438\u0437|\u0438\u0458\u0430|\u0443 \u0437|\u0430\u045A\u0435|\u0440\u0430\u043D|\u0435 \u043E|\u0440\u043E\u0434|\u0438 \u043D|\u0435 \u0431|\u0440\u0430\u0437|\u0437\u0430 | \u045A\u0435|\u0433\u043E\u0432|\u0438\u0447\u043D| \u0441\u0442|\u043D\u043E\u0432|\u0441\u043D\u043E|\u043E\u0441\u043D|\u0434\u0443 |\u043F\u0440\u0435| \u0442\u0440|\u0441\u0443 |\u0432\u0443 |\u043E\u0434\u043D|\u0430 \u0431|\u0441\u0432\u043E|\u045A\u0435\u0433|\u043D\u0438\u043C|\u043D\u0438\u0445|\u0442\u0443 |\u0442\u0438\u0442|\u0448\u0442\u0438|\u043A\u0443 |\u043D\u043E\u043C|\u0431\u0438\u0442|\u0435 \u0434|\u043C\u0435 |\u0438\u043A\u043E|\u0447\u043D\u043E|\u043E\u0458\u0438|\u043B\u043E |\u0432\u043D\u043E|\u043D\u0438\u043A|\u0438\u043A\u0430|\u0431\u0435\u0437|\u0430\u0440\u0430|\u0434\u0435 |\u0443 \u043E|\u0432\u0438\u043C|\u043D\u0430\u043A| \u0441\u0430|\u0440\u0438\u0432|\u0430\u0432\u0435|\u0430\u043D |\u0432\u043E\u0459| \u043A\u0440|\u043E \u043F|\u0441\u043C\u0435|\u0435 \u043A|\u043D\u043E\u0433|\u0458\u0438 | \u043E\u0432|\u0435 \u0443|\u0442\u0432\u0430|\u0431\u0440\u0430|\u0440\u0443\u0433|\u0440\u0435\u0431|\u0442\u0440\u0435|\u0443 \u0434|\u043E\u0434\u0430| \u043C\u043E| \u0432\u0440|\u0430\u0432\u0459|\u0443 \u043D|\u0435\u0433\u043E|\u0434\u0435\u043B|\u043C \u0441|\u043A\u0440\u0438|\u043E \u043A|\u0430\u0448\u0442|\u0437\u0430\u0448|\u045A\u0443 | \u0441\u043C|\u0430\u043D\u0438| \u043B\u0438|\u0434\u043D\u043E|\u0435\u0452\u0443|\u0430\u043B\u043D|\u043B\u0430 |\u0430\u043A\u0432|\u043E\u0458 |\u043A\u043E\u043C|\u0441\u0442\u0443|\u0443\u0433\u0438|\u0430\u0432\u0438|\u0430 \u0440|\u043A\u0430 |\u0440\u0430\u0434|\u043E\u0434\u0438|\u0432\u0438\u0447|\u0442\u0430\u0432|\u0438\u0442\u0443|\u0443\u0434\u0435|\u0431\u0443\u0434| \u0431\u0443|\u043F\u043E\u0442|\u043E\u0434\u0443|\u0436\u0438\u0432|\u0435\u0440\u0435|\u0442\u0432\u043E|\u0438\u043B\u043E|\u0431\u0438\u043B|\u0430\u0440\u043E|\u0435 \u043D|\u043E\u0432\u0438|\u043F\u043E\u0440|\u0435\u043D\u043E|\u0448\u0442\u0432|\u043D\u0430\u0446|\u043E\u0432\u0435|\u043C \u043F|\u0442\u0443\u043F|\u043F\u043E\u0441|\u0440\u0435\u043C|\u0434\u043D\u0438|\u0431\u0430 |\u043D\u0441\u0442|\u0430 \u0442|\u043E\u0458\u0443|\u0430\u0441\u0442|\u0438\u0432\u0430|\u0435 \u043C|\u0432\u0440\u0435|\u0432\u0459\u0430|\u043D\u0443 |\u0431\u0435\u0452|\u0438\u0441\u0442|\u0435\u043D |\u0442\u0435 |\u0434\u0441\u0442|\u0440\u043E\u0442|\u0437\u0430\u043A|\u0430\u043E |\u043A\u0430\u043E|\u0438 \u043A|\u0458\u0443\u045B|\u043E \u0441|\u0441\u0442 |\u0441\u0430\u043C|\u043C \u043D|\u0442\u0435\u0440|\u043D\u0430\u0440| \u043C\u0435|\u0438 \u043C|\u043A\u043E\u043B|\u0435 \u0440|\u0443\u0448\u0442|\u0440\u0443\u0448|\u0432\u0435\u0440|\u043A\u0430\u043A| \u0431\u0435|\u0438 \u0431|\u043A\u043B\u0430|\u0430\u0434\u0430|\u0435\u0431\u0430|\u0435\u043D\u0430|\u043E\u043D\u0430| \u043E\u043D|\u0442\u0432\u0443|\u0430\u043D\u0441| \u0434\u043E|\u0440\u0430\u043A|\u0441\u043B\u0443|\u0438 \u0432|\u043D\u0438\u0446|\u0443 \u043A|\u043C\u0435\u043D|\u0432\u0440\u0448|\u0435\u043C\u0435|\u0435\u0434\u0441|\u0438\u0432\u0438|\u043E \u043E|\u0458\u0430\u0432",uzn:"\u0430\u043D |\u043B\u0430\u0440|\u0433\u0430 |\u0438\u0440 | \u0431\u0438|\u0430\u0440 | \u0432\u0430|\u0434\u0430 |\u0438\u0433\u0430| \u04B3\u0443|\u0432\u0430 |\u0431\u0438\u0440|\u0443\u049B\u0443|\u049B\u0443\u049B|\u04B3\u0443\u049B| \u04B3\u0430|\u0440 \u0431|\u0433\u0430\u043D|\u0438\u0448 |\u0438\u0434\u0430| \u0442\u0430|\u0430 \u044D|\u0438\u043D\u0438|\u0430\u0434\u0438|\u043D\u0433 |\u0434\u0438\u0440|\u0438\u0448\u0438|\u043B\u0438\u043A|\u043B\u0438\u0448|\u0438\u0439 |\u0438\u043B\u0438|\u0430\u0440\u0438|\u0443\u049B\u0438|\u04B3\u0430\u0440|\u043B\u0430\u043D|\u0438\u043D\u0433|\u0448\u0438 |\u0434\u0430\u043D|\u043D\u0438\u043D|\u0438\u043D\u0441|\u043A\u0438\u043D|\u0441\u043E\u043D|\u043D\u0441\u043E| \u0438\u043D| \u043C\u0443|\u049B\u0438\u0433| \u043C\u0430|\u043E\u043D |\u0440 \u0438| \u0431\u045E|\u044D\u0433\u0430| \u044D\u0433| \u045E\u0437|\u043D\u0438 |\u0431\u045E\u043B|\u0433\u0430\u0434|\u0438 \u0431|\u043A\u0438 |\u0438\u043B\u0430|\u0451\u043A\u0438| \u0451\u043A|\u0430 \u0431|\u043D \u0431|\u0438\u043D |\u0440 \u04B3|\u0430\u043B\u0430|\u044D\u0440\u043A| \u044D\u0440|\u043B\u0433\u0430| \u049B\u0430|\u0440\u043A\u0438|\u0448 \u04B3|\u0438 \u04B3|\u043D \u043C| \u0431\u043E| \u0431\u0430|\u0438\u043A |\u0430\u0440\u0430|\u0438\u0433\u0438|\u043B\u0438\u0433|\u0440\u0438 |\u049B\u0438\u043B|\u0430 \u0442|\u0431\u0438\u043B| \u044D\u0442|\u043D\u0438\u0448|\u043D\u043B\u0438|\u043A\u043B\u0430|\u0438 \u0432|\u0431\u043E\u0448|\u044D\u0442\u0438|\u0430\u043D\u0438|\u0438\u043C |\u0438 \u043C|\u043E\u043B\u0438|\u049B\u043B\u0430|\u0430 \u04B3|\u043B\u0430\u0448|\u0430\u0442\u043B|\u0442\u0438\u043B|\u0430 \u049B| \u043E\u043B|\u043E\u0441\u0438|\u043C\u0430\u0441|\u049B\u0430\u0440|\u0438\u043D\u043B|\u043B\u0430\u0442| \u049B\u0438|\u0442\u0430\u044A|\u04B3\u0430\u043C|\u0433\u0438 |\u0438\u0431 |\u043C\u043B\u0430|\u045E\u0437 |\u043D \u044D|\u043C\u0443\u043C| \u0434\u0430| \u0431\u0443|\u0430\u0442 |\u0448 \u0432|\u0443\u043D |\u0430\u0442\u0438|\u043C\u043A\u0438|\u0443\u043C\u043A|\u0442\u043B\u0430|\u0438\u0440\u043E|\u045E\u043B\u0438|\u0431\u0430\u0440|\u0438\u0440\u0438|\u0440\u0438\u0448|\u0438\u044F\u0442|\u0430\u043B\u0438| \u0431\u0435| \u049B\u043E|\u0430 \u0448|\u0430\u0440\u043E| \u043A\u0435|\u0438 \u0442|\u0440\u043B\u0430| \u0442\u0435|\u0447\u0430 |\u0440\u0447\u0430|\u0430\u0440\u0447|\u0430 \u045E| \u0448\u0443|\u0442\u0438\u0448|\u043D \u04B3|\u0442\u0433\u0430| \u0441\u0430|\u0430\u0441\u0438| \u0445\u0430|\u0440\u0430\u043A|\u043B\u0438\u043D|\u043E\u043B\u0430|\u0438\u043C\u043E|\u0448\u049B\u0430|\u043B\u0438 | \u0442\u0443|\u0430\u043C\u043B|\u043B\u043B\u0430|\u0441\u0438\u0434|\u043D \u045E| \u0430\u0441|\u043D\u0438\u0434|\u0430 \u0438| \u043A\u0438|\u043D \u0442|\u043D\u0434\u0430|\u043A \u0431|\u0435\u0440\u0430|\u043E\u0448\u049B|\u0441\u0438\u0437|\u043E\u0440 |\u0430 \u043C|\u0440 \u0432|\u0435\u043D\u0433|\u0442\u0435\u043D|\u043C\u0430\u0442|\u043C\u0434\u0430|\u0430\u043C\u0434|\u043B\u0438\u043C|\u0439 \u0442|\u044F\u0442 |\u0438 \u0430|\u0438\u043D\u043E|\u0438\u043B\u0433| \u0442\u043E|\u0442\u043D\u0438|\u0430\u043D\u0430|\u0430\u0441 |\u044D\u043C\u0430| \u044D\u043C|\u0430 \u0451| \u0448\u0430|\u0430\u0448 |\u0430 \u0430|\u0442\u0430\u0440|\u043A\u0430\u0442|\u0430\u043A\u0430|\u0430\u043A | \u0434\u0435|\u0430\u0437\u0430|\u0438\u043B\u043B|\u0441\u0438\u0439| \u0441\u0438| \u0441\u043E|\u0443\u049B\u043B|\u043D \u049B|\u043E\u0434\u0430|\u044A\u043B\u0438|\u0430\u044A\u043B|\u043D\u0438\u043A|\u0430\u0434\u0430| \u043D\u0438|\u0442\u0434\u0430|\u0433\u0438\u043D|\u0443\u043D\u0438|\u0441\u0438\u0442|\u0430\u0439 |\u049B\u043E\u043D|\u043D \u043E| \u0436\u0430|\u043A\u0438\u043C|\u0435\u0447 |\u04B3\u0435\u0447| \u04B3\u0435|\u045E\u0437\u0438|\u043B\u0430\u043A|\u043A\u0435\u0440|\u0438\u043A\u043B|\u043B\u043B\u0438|\u0443\u0440 |\u0437\u0430\u0440|\u0448\u043B\u0430|\u0440\u0438\u0433|\u0438\u0440\u043B|\u0434\u0430\u043C|\u043A\u043E\u04B3|\u0438\u043A\u043E|\u0430 \u0434|\u0430\u043C |\u043D \u0432|\u0440\u0442\u0438|\u0442\u0438\u0431|\u0442\u0430\u043B| \u0438\u0448|\u0447\u0443\u043D|\u0443\u0447\u0443| \u0443\u0447|\u0441\u043B\u0430|\u0430 \u0443|\u0440\u0438\u043D|\u0441\u043E\u0441|\u0430\u0441\u043E| \u0443\u043D|\u043D\u0430 | \u043A\u0430|\u043C\u0443\u04B3|\u0434\u0438\u0433|\u0447 \u043A|\u0430\u0441\u043B|\u043B\u043C\u0430|\u0440\u0430 |\u0431\u0443 |\u0445\u0430\u043B|\u045E\u043B\u0433|\u0438 \u043A|\u0435\u043A\u043B|\u0440 \u0434|\u049B\u0430\u0442|\u0430\u0433\u0430|\u0438 \u049B|\u043E\u0438\u0439|\u043C\u0438\u043B| \u043C\u0438|\u049B\u0430 |\u0438 \u0441|\u0436\u0438\u043D| \u0436\u0438|\u0441\u0438\u043D|\u0440\u043E\u0440|\u0430 \u0432|\u043B\u0430\u0434|\u0430 \u043E|\u0442\u043B\u0438|\u043C\u0438\u044F|\u043D \u0438|\u0430\u0431 |\u0442\u0438\u0440|\u0437 \u043C|\u0434\u0430\u0432|\u0440\u0433\u0430|\u0430\u0433\u0438|\u0430 \u043A|\u043D\u043B\u0430|\u0430\u049B\u0442|\u0432\u0430\u049B|\u0430\u0440\u0442|\u0430\u0451\u0442|\u043B\u0430\u0431",azj:" \u0432\u04D9|\u0432\u04D9 |\u04D9\u0440 |\u0438\u0440 | \u04BB\u04D9| \u0431\u0438| \u04BB\u04AF| \u043E\u043B|\u04AF\u0433\u0443|\u04BB\u04AF\u0433|\u0433\u0443\u0433|\u043D\u0430 |\u0438\u043D |\u043B\u0430\u0440|\u04BB\u04D9\u0440|\u0434\u04D9 | \u0448\u04D9|\u0431\u0438\u0440|\u043B\u04D9\u0440|\u043B\u0438\u043A|\u043C\u0430\u043B|\u0440 \u0431|\u043B\u043C\u0430|\u0440 \u04BB| \u0442\u04D9|\u04D9\u0445\u0441|\u0448\u04D9\u0445|\u04D9\u043D |\u0434\u0438\u0440|\u0443\u0433\u0443|\u0443\u043D\u0430|\u0430\u043D |\u0430\u043B\u0438|\u0430 \u043C| \u043C\u0430|\u0438\u043A\u0434|\u0438\u043D\u0438|\u0440 \u0448|\u0434\u04D9\u043D|\u0430\u0440 |\u0438\u043B\u04D9|\u0433\u0443\u043D|\u0430\u0433 |\u0430\u0441\u044B| \u0458\u0430|\u043C\u04D9\u043A|\u0458\u04D9\u0442| \u043C\u04D9| \u043C\u04AF|\u043A\u0434\u0438|\u04D9\u0441\u0438|\u04D9\u043A |\u0438\u043B\u043C|\u043D\u0438\u043D|\u043D\u0434\u04D9|\u043E\u043B\u043C|\u04D9\u0442\u0438|\u04D9 \u0458|\u0441\u0438\u043D|\u0445\u0441 |\u043D\u0434\u0430|\u043B\u043C\u04D9|\u0458\u0458\u04D9|\u0438 \u0432| \u0433\u0430| \u0430\u0437|\u043E\u043B\u0443|\u0438\u0458\u0458|\u0458\u0430 |\u0438\u043D\u0434|\u0437\u0430\u0434|\u0433\u043B\u0430|\u04AF\u043D |\u043D\u0438 |\u043B\u04D9 |\u0442\u0438\u043D|\u043D \u043C|\u0430\u0437\u0430|\u0430\u0440\u044B|\u04D9\u0442 |\u043D \u0442|\u043C\u0430\u0433|\u043B\u0443\u043D|\u043B\u044B\u0433|\u04D9 \u0431|\u0443\u043D |\u043D\u0443\u043D|\u0433 \u0432|\u043D \u04BB|\u0434\u0430\u043D|\u044B\u043D | \u0435\u0442|\u0442\u043C\u04D9|\u04D9\u0440\u04D9| \u04E9\u0437|\u0434\u0430 |\u04D9 \u0432| \u043E\u043D|\u04D9 \u0430|\u044B\u043D\u0430|\u044B\u043D\u044B|\u0431\u0438\u043B|\u0430 \u0431|\u0441\u044B |\u0438\u043B |\u04D9\u043C\u0438|\u0430\u0440\u0430|\u0441\u0438 | \u0434\u0438|\u04D9 \u043C|\u04D9\u0440\u0438|\u0440\u043B\u04D9| \u0432\u0430|\u04D9 \u04BB|\u0435\u0442\u043C|\u044B\u0493\u044B|\u0430\u043C\u0430|\u0434\u043B\u044B|\u0430\u0434\u043B|\u0440\u0438\u043D|\u0431\u04D9\u0440|\u0440\u044B\u043D|\u043D \u0438|\u043C\u04AF\u0434|\u043D\u044B\u043D| \u04BB\u0435|\u043C\u0430\u0441|\u0438\u043A |\u043D \u0430|\u0434\u0438\u043B|\u0430\u043B\u044B|\u0438\u0440\u043B|\u04D9\u043B\u04D9|\u04AF\u0434\u0430|\u0441\u044B\u043D|\u044B\u043D\u0434|\u0445\u0441\u0438|\u043B\u0438 |\u04D9 \u0434|\u043D\u04D9 | \u0431\u04D9|\u04D9\u0458\u0430| \u0438\u043D|\u04D9 \u0438|\u043B\u04D9\u0442| \u0441\u04D9|\u043D\u044B | \u0438\u0448|\u0430\u043D\u044B|\u0435\u0447 |\u04BB\u0435\u0447|\u0433 \u04BB|\u0435\u0458\u043D|\u04D9 \u0435|\u0434\u044B\u0440| \u0434\u0430|\u0430\u0441\u0438|\u0440\u044B |\u0438\u0448 |\u0438\u0444\u0430|\u043B\u044B\u0493|\u0438 \u0441|\u0444\u0438\u04D9|\u0430\u0444\u0438|\u0434\u0430\u0444| \u0435\u0434|\u043C\u04D9\u0437|\u0443 \u0432|\u043A\u0438\u043B| \u04BB\u0430|\u043E\u043B\u0430|\u043D \u0432|\u04D9\u043D\u0438|\u044B\u0440 |\u0443\u0433 |\u0443\u043D\u043C| \u0431\u0443| \u0430\u0441|\u0441\u0438\u0430|\u043E\u0441\u0438|\u0441\u043E\u0441|\u0438\u043B\u0438|\u044B\u0434\u044B|\u043B\u044B\u0434|\u043D\u043C\u0430|\u044B\u0433 |\u0438\u043D\u04D9|\u04D9\u0440\u0430|\u0441\u0438\u043B|\u0445\u0438\u043B|\u0430\u0445\u0438|\u0434\u0430\u0445|\u0430\u0434\u04D9|\u043C\u0430\u043D|\u0430 \u04BB|\u04D9 \u043E|\u043E\u043D\u0443|\u0430 \u0433|\u04D9\u0437 | \u043A\u0438|\u0441\u0435\u0447| \u0441\u0435|\u044B \u04BB|\u043C\u0438\u043D|\u043B\u0430\u043D|\u04D9\u0434\u04D9|\u0431\u0443 |\u0440\u0430\u0433|\u043B\u044B |\u044B\u043B\u044B|\u0430\u043B |\u04D9 \u0433|\u0440 \u0432|\u043D\u043B\u0430|\u04BB\u0441\u0438|\u04D9\u04BB\u0441|\u0442\u04D9\u04BB|\u04E9\u0437 |\u0438\u0441\u0442| \u0438\u0441|\u043C\u04D9\u0441| \u04D9\u0441|\u0438\u043D\u0430|\u04D9 \u0442|\u04D9\u0442\u043B|\u0430 \u0432|\u0438\u04D9 |\u043D \u0431|\u0442\u04D9\u0440| \u0442\u0430| \u04B9\u04D9|\u0435\u0434\u0438|\u0430\u043B\u0430|\u043A\u0438\u043C|\u0433\u0443 |\u0438 \u0442|\u0443\u043B\u043C|\u043C\u04D9\u04BB|\u043D \u043E|\u0430\u0458\u0430|\u044B \u043E|\u0438\u0430\u043B| \u0441\u043E|\u0438\u043B\u043B|\u0441\u0438\u0458| \u0434\u04D9|\u0432\u0430\u0440|\u0438\u043D\u0441|\u043C\u0438 |\u0493\u044B |\u043D\u0438\u043A|\u0440 \u0438|\u0430\u0433\u043B|\u043A \u04BB|\u0442\u04D9\u043C|\u0442\u0430\u043C|\u0447\u04AF\u043D|\u04AF\u0447\u04AF| \u04AF\u0447|\u0493\u044B\u043D|\u0441\u0430\u0441|\u04D9\u0441\u0430|\u0437 \u04BB|\u04D9\u043C\u04D9|\u0437\u0430\u043C| \u0437\u0430|\u0441\u0442\u0438|\u0440\u04D9\u0444|\u043D \u0435|\u0440 \u0430|\u0438\u043B\u0434|\u04BB\u04D9\u043C|\u044B\u0433\u043B|\u0458\u0430\u043D|\u043C\u0430\u0458|\u043D \u04D9|\u043C\u04D9\u043D|\u043C\u0438\u043B| \u043C\u0438|\u04D9\u0433\u0438|\u0434\u0438\u043D|\u043D \u0434|\u0442\u04AF\u043D| \u0434\u04E9|\u043C\u0438\u0458|\u043A\u0430\u04BB|\u0438\u043A\u0430| \u043D\u0438|\u0444\u0430\u0434|\u0442\u0438\u0444|\u043B \u043E|\u0441\u04D9\u0440|\u0458\u043D\u0438| \u0435\u0458|\u0430\u043D\u0430|\u043B\u04D9\u043D|\u0430\u043C |\u0440\u0438\u043B|\u0430\u0458\u04D9|\u0430\u0448\u044B",koi:"\u043D\u044B |\u04E7\u043D | \u0431\u044B|\u0434\u0430 | \u043F\u0440|\u043B\u04E7\u043D|\u0440\u0430\u0432| \u043C\u043E|\u043F\u0440\u0430| \u0434\u0430|\u0431\u044B\u0434| \u0432\u0435|\u043E\u0440\u0442|\u043B\u04E7 |\u04E7\u0439 |\u043C\u043E\u0440|\u04E7\u043C |\u0430\u0432\u043E| \u043D\u0435|\u0432\u043E |\u044B\u0434 |\u044B\u0441 |\u043D\u04E7\u0439|\u044B\u043D |\u043C \u043F|\u0434 \u043C|\u044B\u043D\u044B|\u0442\u043D\u044B| \u0430\u0441|\u0442\u04E7\u043C|\u043B\u044C\u043D| \u044D\u043C|\u0432\u0435\u0440|\u0441\u044C |\u044C\u043D\u04E7|\u044D\u043C |\u043D \u044D|\u0442\u043B\u04E7| \u043A\u044B|\u0441\u04E7 | \u043F\u043E|\u0435\u0440\u043C|\u0441\u044C\u04E7|\u0440\u0442\u043B|\u0430\u043B\u044C| \u043A\u04E7|\u044D\u0437 | \u04E7\u0442|\u04E7 \u0432|\u0442\u043E |\u0435\u0442\u043E|\u043D\u0435\u0442|\u044B\u043B\u04E7| \u043A\u043E|\u0442\u0448\u04E7| \u043E\u0442| \u0438 |\u044B \u0441|\u0431\u044B |\u04E7 \u0431|\u0441\u0442\u0432|\u043A\u04E7\u0440| \u0432\u04E7|\u0448\u04E7\u043C|\u043A\u044B\u0442|\u0442\u0430 |\u043D\u0430 |\u0437 \u0432| \u0441\u0435| \u0434\u043E|\u0432\u043E\u043B|\u04E7\u0441 | \u0441\u044B|\u044B \u0430|\u043E\u043B\u0430|\u0440\u043C\u04E7|\u0430\u0441 |\u043E\u0437 | \u043E\u0437| \u0441\u0456|\u0430 \u0441|\u0442\u0432\u043E|\u0441 \u043E| \u0432\u044B|\u043B\u0456\u0441|\u04E7 \u043A|\u044B\u0442\u0448|\u04E7 \u0434|\u0438\u0441 |\u0456\u0441\u044C|\u04E7\u0442\u043D|\u0430\u0441\u044C| \u043E\u043B| \u043D\u0430|\u0430\u0446\u0438| \u044D\u0442|\u0430 \u0432|\u0437\u043B\u04E7|\u0441\u0435\u0442| \u0432\u043E| \u0447\u0443|\u043B\u0430\u0441|\u043B\u0430\u043D|\u043C\u04E7 |\u0442\u044B\u0441|\u0440\u0442\u044B|\u04E7\u0440\u0442|\u044B \u043F|\u04E7\u0442\u043B|\u043E \u0441|\u044D\u0442\u0430|\u0434\u0437 |\u043A\u04E7\u0442|\u04E7\u0434\u043D|\u0432\u043D\u044B| \u043C\u044B|\u043D \u043D|\u0443\u0434\u0436| \u0443\u0434|\u0432\u044B\u043B|\u04E7 \u043C|\u0440\u0442\u0456|\u043E\u0440\u0439|\u0438\u0441\u044C| \u0441\u043E|\u0432\u043E\u044D|\u044B\u0434\u04E7|\u0439 \u043E|\u043A\u043E\u043B| \u0433\u043E|\u0441 \u0441|\u0441\u0441\u0438|\u0441\u044B\u043B|\u044B\u0441\u043B|\u0439\u044B\u043D|\u043A\u0438\u043D|\u043E\u043B\u04E7|\u0442\u04E7\u043D| \u0441\u044C|\u0430\u043D\u0430|\u04E7\u0440 |\u0446\u0438\u044F|\u0430 \u0434|\u04E7\u043C\u04E7| \u0432\u0438|\u0437 \u043A| \u044D\u0437|\u044B \u0431|\u0442\u04E7\u0433|\u04E7\u0442 |\u043C\u04E7\u0434|\u0435\u0441\u0442|\u043E\u0441\u0442|\u04E7\u043D\u044B|\u0442\u0438\u0440|\u043E\u0442\u0438|\u0443\u043A\u04E7|\u0447\u0443\u043A|\u043D \u043F|\u043E\u043D\u0434|\u043F\u043E\u043D|\u0441\u043B\u04E7|\u043A\u0435\u0440| \u043A\u0435| \u043E\u0431|\u0441\u0438\u0441|\u0441\u0443\u0434|\u0430 \u043D|\u0434\u043E\u0440|\u043A\u043E\u043D|\u043D\u0435\u043A|\u043D \u0431|\u043B\u04E7\u0442|\u0441 \u0432|\u0442\u0456 |\u044C\u04E7\u0440|\u0442\u0440\u0430| \u0441\u0442|\u043D\u0430\u043B|\u043E\u043D\u0430|\u043D\u0430\u0446|\u043D \u043A|\u043A\u04E7\u0434|\u04E7\u0433 |\u0441\u043A\u04E7|\u0442\u044C |\u0435\u0442\u04E7|\u0434\u04E7\u0441|\u0431\u044B\u0442|\u0440\u043D\u044B|\u04E7 \u043D|\u0442\u0441\u04E7|\u0440\u0440\u0435|\u0430 \u0431|\u043D\u0434\u0430|\u0441 \u0434|\u0430\u0441\u0441|\u044B \u043A|\u0430\u0441\u043B| \u043B\u043E|\u044C\u043D\u044B|\u0441\u044C\u043D|\u044B \u043C|\u0435\u043A\u0438|\u044B \u0434| \u043C\u04E7|\u044C \u043C|\u044B \u043D|\u044B\u0442\u04E7| \u043C\u0435|\u0440\u0439\u04E7|\u0438\u0430\u043B|\u0439 \u0434|\u0438\u0442\u04E7|\u0430 \u043A|\u04E7\u0441\u044C|\u043C\u04E7\u0441|\u043E\u0432\u043D|\u0437\u044B\u043D|\u0430 \u043F|\u043E\u0442\u0441| \u043B\u0438|\u043E\u043B\u044F|\u04E7 \u0430|\u043E\u0441\u0443|\u04E7\u044F |\u043D\u04E7\u044F|\u0435\u0437\u043B|\u0440\u0435\u0437|\u043C\u0435\u0434|\u0441 \u043C| \u0441\u044D|\u044C \u043A|\u0440\u0439\u044B|\u0430\u043A\u043E|\u0437\u0430\u043A| \u0437\u0430|\u044C\u044B\u043D|\u043D\u043D\u0451|\u043C\u04E7\u043B|\u0443\u043C\u04E7| \u0443\u043C|\u044B \u0443|\u043D \u0432|\u043C \u0434|\u043D \u0441| \u0434\u0437|\u043D \u043E|\u0440\u0430\u043D|\u0441\u0442\u0440|\u043E\u0437\u044C|\u043F\u043E\u0437|\u0437 \u043F|\u043E \u0434|\u0446\u0438\u0430|\u043E\u0446\u0438|\u0441\u043E\u0446|\u0438\u043E\u043D|\u0430 \u043C|\u0435\u0441\u043A|\u0447\u0435\u0441|\u043D\u04E7 |\u0437 \u0434|\u0442\u0441\u044C|\u0431\u04E7\u0440| \u0431\u04E7| \u043E\u0432|\u0432\u0435\u0441|\u043A\u044B\u0434|\u04E7 \u0441|\u0432\u043E\u044B|\u043A\u043E\u0434|\u0442\u043A\u043E|\u04E7\u0442\u043A|\u043E\u043B\u044C|\u0434\u0431\u044B|\u0435\u0434\u0431|\u0441\u044C\u044B|\u0447\u044B\u043D|\u0442\u0447\u044B|\u04E7\u0442\u0447|\u0442\u043B\u0430|\u043C\u04E7\u043D|\u0441\u043B\u0430|\u0439\u04E7\u0437| \u0439\u04E7|\u0442 \u0432|\u044B \u0438|\u0435\u0437 |\u043E \u0432|\u043E\u043D\u044B|\u0439\u04E7 |\u0430\u043D\u043D|\u04E7\u043B\u044C| \u043F\u044B|\u0430\u043D |\u043D\u04E7\u0441|\u043D\u0438\u0442| \u0441\u0443|\u043C \u0441",bel:" \u043F\u0440|\u043F\u0440\u0430| \u0456 |\u0430\u0432\u0430|\u043D\u0430 |\u0440\u0430\u0432| \u043D\u0430| \u043F\u0430|\u043D\u044B |\u0432\u0430 |\u0430\u0431\u043E|\u0446\u044C | \u0430\u0431|\u0430\u0435 | \u043C\u0430|\u0430\u0432\u0435|\u0430\u043D\u043D|\u0430\u0446\u044B|\u0441\u0432\u0430| \u0441\u0432|\u0435 \u043F|\u043B\u044C\u043D| \u0447\u0430|\u043D\u0435 |\u043D\u043D\u044F|\u0430\u043B\u0430|\u0430 \u043D|\u0430\u0439 |\u043B\u0430\u0432|\u0447\u0430\u043B| \u043A\u043E| \u0430\u0434| \u043D\u0435|\u0433\u0430 |\u043E\u0436\u043D|\u043A\u043E\u0436|\u0432\u0435\u043A|\u043D\u044F | \u044F\u043A|\u0436\u043D\u044B|\u044B \u0447|\u043C\u0430\u0435|\u0430 \u043F|\u0430\u0433\u0430|\u0431\u043E |\u0435\u043A |\u0430 \u0430|\u0446\u0430 |\u0446\u0446\u0430| \u045E | \u0437\u0430|\u044B\u0445 |\u043F\u0430\u0432|\u0430 \u0441|\u0433\u043E |\u0432\u0456\u043D|\u0434\u043D\u0430|\u0431\u043E\u0434|\u043C\u0456 |\u0432\u0430\u0431|\u0432\u0430\u043D|\u0430\u043C | \u0432\u044B| \u0441\u0430| \u0434\u0430|\u0441\u0442\u0430|\u0430\u0432\u0456|\u043D\u043D\u0435|\u0430\u0441\u0446|\u043D\u0430\u0439|\u0446\u044B\u044F|\u043D\u0430\u0433|\u0430\u0440\u0430|\u0456 \u043D|\u043A \u043C|\u044F\u0433\u043E| \u044F\u0433|\u044C\u043D\u0430|\u043F\u0440\u044B|\u0430\u0446\u044C|\u0456 \u043F|\u043E\u0434\u043D|\u0441\u0442\u0432|\u0430\u043C\u0430|\u043D\u044B\u0445| \u0431\u044B|\u0442\u0432\u0430|\u0434\u0437\u0435|\u0430\u043B\u044C| \u0440\u0430|\u043D\u0456 |\u0456 \u0441|\u0456 \u0430|\u044B\u0446\u044C|\u0430 \u0431|\u0435\u043D\u043D|\u043B\u0435\u043D|\u0446\u0456 |\u043E\u045E\u043D|\u044B\u043C |\u0440\u0430\u0446|\u0456\u043D\u043D|\u0456\u0445 | \u0430\u0441| \u0442\u0430|\u0442\u043E |\u043D\u0430\u0441|\u044F\u043A\u0456| \u0434\u0437|\u0447\u044B\u043D|\u043E\u043B\u044C|\u0456 \u0434|\u0430\u0432\u043E|\u0430\u0434 | \u043D\u0456|\u0441\u0446\u0456|\u044B\u043C\u0456|\u043D\u044B\u043C|\u0431\u044B\u0446|\u044F \u043F|\u044C\u043D\u044B|\u044B\u044F |\u0430\u0440\u043E|\u0430\u043D\u0430|\u0456\u043D\u0430|\u0456 \u0456|\u0440\u0430\u0434| \u0433\u0440|\u043B\u044F |\u045E\u043B\u0435|\u043E \u043F|\u0430 \u045E|\u0440\u044B\u043C|\u043F\u0430\u0434|\u044B\u0456 | \u0456\u043D|\u0430\u043C\u0456|\u0434\u0437\u044F|\u0440\u0430\u043C|\u0446\u044B\u0456|\u0430\u0431\u0430|\u0430 \u0456|\u0434\u0443 |\u0436\u043D\u0430|\u045E\u043D\u0430|\u043D\u0430\u043B|\u043D\u0430\u0446|\u0440\u044B |\u044D\u0442\u0430|\u0433\u044D\u0442| \u0433\u044D|\u043D\u0435\u043D|\u0434\u0430 |\u0430\u0445 |\u0433\u0440\u0430|\u043A\u0430\u0446|\u0443\u043A\u0430|\u0430 \u0437|\u043A\u0456 |\u0430\u0434\u0441|\u045E \u0456|\u043D\u0441\u0442|\u044D\u043D\u043D|\u044F \u0430|\u043D\u043D\u0456|\u043E\u0434\u0443|\u0430 \u0440|\u043D\u043D\u0430|\u0445\u043E\u0434|\u043D\u0430\u043D|\u043F\u0435\u0440|\u0445 \u043F| \u0443 |\u0430\u0434\u0437|\u0456 \u0440|\u043C\u0430\u0434|\u043C \u043F|\u0435 \u043C|\u0430\u0434\u0443|\u0434\u0441\u0442|\u0434\u043B\u044F| \u0434\u043B|\u043E\u045E |\u043D\u0430\u0435|\u0456 \u043C|\u0430\u043A\u043E| \u043A\u0430|\u044B \u045E|\u0431\u0430\u0440|\u0435 \u0430|\u0430\u0446\u0446|\u0443\u044E |\u044B\u0446\u0446|\u0441\u0430\u043C|\u044F\u045E\u043B|\u0430\u043B\u0435|\u0440\u043E\u0434|\u0440\u0430\u0431| \u043F\u0435|\u0448\u0442\u043E| \u045E\u0441|\u0430\u0434\u043D| \u0441\u0443|\u0440\u043E\u045E| \u0440\u043E|\u0434\u0443\u043A|\u043B\u044E\u0431|\u044C \u0441| \u0448\u043B|\u0440\u0430\u0437|\u043D\u0430\u0432|\u0437\u043D\u0430|\u0432\u043E\u043B|\u0443\u0434\u0437|\u0430\u0434\u0430|\u0436\u044B\u0446|\u0447\u043D\u0430|\u0432\u0435 |\u0430 \u0442|\u0430\u0441\u043D|\u0441\u0430\u0446|\u0435\u0440\u0430| \u0440\u044D|\u044F\u043A\u043E|\u043A\u043B\u0430|\u0430\u043D\u044B| \u0448\u0442|\u044C \u0443|\u0430\u044E\u0446|\u043D\u0430\u0440| \u0443\u0441|\u0441\u043E\u0431|\u0430\u0441\u043E|\u043F\u0430\u043C|\u044F \u045E|\u0430\u0432\u044F|\u0447\u044D\u043D|\u0432\u043E\u045E|\u0442\u0430\u043A|\u043D\u0443 |\u044E \u0430|\u044C \u043F|\u0437\u0430\u043A|\u043A\u0430\u0440|\u0435 \u0456|\u044C \u0430|\u0431\u0435\u0441|\u0456\u044F |\u043A\u0456\u044F|\u0445 \u0456|\u0437\u0430\u0431|\u0430\u0441\u0430|\u0456\u043C |\u0436\u0430\u0432|\u0456 \u0437|\u043B\u0435\u0436|\u0442\u0430\u043D|\u0430\u0445\u043E|\u044F\u043B\u044C|\u044B\u044F\u043B|\u043E \u0441|\u044F\u043D\u0430|\u043A\u0430\u043D|\u0430\u043A\u0430|\u0456\u043D\u0448|\u0430\u043B\u0456|\u0432\u044B | \u043C\u043E|\u043D\u0430\u0445|\u044F \u044F|\u043C \u043D|\u043E\u0433\u0430| \u0431\u0435|\u0439 \u0434|\u043E \u0430| \u0441\u0442|\u0435\u043D\u044B|\u0456 \u045E|\u0430 \u0434|\u0435\u0441\u043F|\u0448\u043B\u044E|\u0446\u0446\u044F|\u044B \u0456|\u044B\u0441\u0442|\u0440\u044B\u0441|\u043B\u044E\u0447|\u043A\u043B\u044E|\u0442\u0430\u0446|\u0443\u043B\u044C|\u044B\u043D\u0441|\u0430\u0447\u044B|\u0441\u043F\u0440| \u0441\u043F|\u0430\u045E |\u044B\u043C\u0430|\u0430\u0440\u044B|\u043A\u0430\u043C|\u0435 \u045E|\u0456 \u043A|\u043A\u043E\u043D",bul:" \u043D\u0430|\u043D\u0430 | \u043F\u0440|\u0442\u043E | \u0438 |\u0440\u0430\u0432|\u0434\u0430 | \u0434\u0430|\u043F\u0440\u0430|\u0441\u0442\u0432|\u0432\u0430 |\u0430 \u0441|\u0430 \u043F|\u0432\u043E |\u043D\u043E |\u0438\u0442\u0435|\u0442\u0430 |\u043E \u0438|\u0435\u043D\u0438| \u0437\u0430|\u043D\u0435 | \u043D\u0435| \u0432\u0441|\u0432\u0430\u043D|\u0430\u0432\u043E|\u0430 \u043D|\u043E\u0442\u043E|\u0435 \u043D|\u043E \u043D|\u0430 \u0438|\u043A\u0438 |\u0438\u0435 |\u0442\u0435 |\u043D\u0438 |\u0438\u043C\u0430| \u0438\u043C|\u043B\u0438 |\u0438\u043B\u0438|\u0438\u044F | \u043F\u043E|\u043E\u0432\u0435|\u0430\u043D\u0435|\u0447\u043E\u0432|\u043C\u0430 | \u0447\u043E|\u0438 \u0447|\u0430 \u0434|\u043D\u0438\u0435|\u0430\u043D\u0438|\u0438 \u0434|\u0435\u0441\u0442| \u0438\u043B|\u0432\u0435\u043A|\u0432\u0441\u0435| \u043E\u0431|\u0435\u043A |\u0435\u043A\u0438|\u0441\u0435\u043A|\u0430\u0432\u0430|\u0442\u0432\u043E|\u0441\u0432\u043E| \u0441\u0432|\u0432\u043E\u0442|\u0430 \u0432|\u0438 \u0441|\u043E\u0441\u0442| \u0440\u0430|\u043E\u0432\u0430|\u0430 \u043E|\u0435 \u0438|\u0432\u0430\u0442|\u0438 \u043D|\u0435 \u043F|\u043A \u0438|\u0430 \u0431| \u0432 |\u0438 \u043F|\u043B\u043D\u043E|\u043E \u0434| \u0441\u0435| \u0431\u044A|\u043F\u0440\u0438|\u0440\u0430\u0437|\u0435\u0442\u043E|\u044A\u0434\u0435|\u0431\u044A\u0434|\u0430\u0442\u0430| \u043A\u043E| \u0442\u0440| \u043E\u0441|\u0430\u0446\u0438| \u0441\u044A|\u0431\u043E\u0434|\u043E\u0431\u043E|\u0432\u043E\u0431|\u0430\u0442 |\u0437\u0430 |\u0442\u0435\u043B| \u0435 |\u043E \u0441|\u0434\u0435 |\u043E \u043F|\u0435\u043D |\u0438 \u0432| \u043E\u0442|\u0441\u0435 |\u043D\u0438\u044F|\u0440\u0430\u043D|\u0430\u043B\u043D| \u0434\u0435|\u0431\u0440\u0430|\u0435\u0433\u043E|\u043D\u0435\u0433| \u0438\u0437|\u043E\u0442 |\u044F\u0442\u0430|\u043A\u0430\u043A|\u043E\u0434\u0438|\u0435 \u0441|\u0438 \u0438|\u0434\u0435\u043D|\u043F\u0440\u0435|\u0431\u0432\u0430|\u044F\u0431\u0432|\u0440\u044F\u0431|\u0442\u0440\u044F|\u043D\u0438\u0442| \u043A\u0430|\u044F\u0432\u0430|\u043F\u0440\u043E|\u0441\u0442 |\u0430 \u0437|\u0433\u043E\u0432|\u0432\u0435\u043D|\u0442\u0432\u0435|\u043E \u043E|\u0430 \u0440|\u0430\u043A\u0432|\u043E \u0432|\u0438 \u0437|\u0440\u0435\u0434|\u043D\u043E\u0441|\u0438\u044F\u0442|\u0435 \u0434|\u0449\u0435\u0441|\u043D\u043E\u0432| \u043D\u0438|\u0446\u0438\u044F| \u0434\u043E|\u0439\u0441\u0442|\u043E \u0442|\u0435 \u0442|\u0440\u0436\u0430|\u044A\u0440\u0436|\u0434\u044A\u0440|\u0435\u043D\u043E|\u043F\u043E\u043B| \u0441 |\u043E\u0431\u0440|\u0442\u0432\u0430|\u043D\u043E\u0442|\u0440\u0435\u0441|\u0435\u0439\u0441|\u0438 \u043E|\u0435 \u0432|\u043A\u043E\u0439|\u043E\u0431\u0449|\u043B\u0435\u043D|\u043E\u043D\u0430|\u043D\u0430\u0446|\u0438\u0447\u0435|\u0435\u0437 |\u0431\u0435\u0437| \u0431\u0435|\u0435\u0436\u0434|\u0443\u0432\u0430|\u0432\u0438\u0442|\u0440\u0438 |\u0437\u0430\u043A|\u0438 \u043A| \u043B\u0438|\u0430 \u0435|\u043F\u043E\u0434|\u0435\u043B\u0438|\u043D\u0438\u043A|\u0441\u0438 |\u0435 \u043E|\u0430 \u0442|\u0438 \u0440|\u0442 \u0441|\u043A\u0430 |\u043E\u0435\u0442|\u0435\u043B\u043D|\u043D\u0435\u043D|\u043E\u0439 |\u0433\u0440\u0430|\u0436\u0435\u043D|\u0434\u0440\u0443| \u0440\u0435|\u0430 \u043A|\u0441\u043D\u043E|\u043E\u0441\u043D|\u043B\u0438\u0447|\u0437\u0438 | \u0442\u0430|\u0441\u0430 |\u043D\u0441\u0442|\u0430\u0432\u043D|\u0447\u043A\u0438|\u0438\u0447\u043A|\u0441\u0438\u0447|\u0432\u0441\u0438|\u043B\u044E\u0447|\u043A\u043B\u044E|\u0434\u043D\u043E| \u043C\u043E|\u0435\u043C\u0435|\u0442\u044A\u043F|\u0430 \u0443|\u0438\u0437\u0432|\u0442\u0432\u0438|\u0434\u0435\u0439|\u044F \u043D|\u043A\u0440\u0438|\u0430\u0442\u043E|\u043E \u0440|\u0439 \u043D|\u0438\u043A\u043E|\u0438\u0447\u043D|\u0436\u0430\u0432| \u0434\u044A| \u0442\u043E|\u0431\u0449\u0435| \u0441\u043E|\u043B\u0438\u0442|\u0442 \u043D| \u0441\u0438|\u0442 \u0438|\u0432\u043D\u0438|\u043E\u0434\u043D|\u0436\u0434\u0430|\u0437\u043E\u0432|\u0430\u0437\u043E|\u0443\u0447\u0430| \u0433\u0440|\u043A\u043E\u0435|\u0441\u0442\u044A|\u0432\u043E\u043B|\u043B\u043D\u0438|\u0441\u0440\u0435| \u0441\u0440|\u043A\u0432\u0430|\u043A\u043E\u043D|\u0442\u043D\u043E|\u0430\u043A\u0430|\u0438 \u0443|\u043A\u043E |\u0433\u0430\u043D|\u043E\u0434\u0430|\u0447\u0435\u043D|\u043B\u0441\u0442|\u0435\u043B\u0441|\u0441\u0442\u0440| \u043A\u044A|\u0441\u0442\u0430|\u0440\u043E\u0434|\u043D\u0430\u0440|\u0438 \u043C|\u0438\u0430\u043B|\u043D\u0430\u043B|\u0440\u0443\u0433| \u0434\u0440|\u0447\u0435\u0441|\u0434\u0438 | \u0441\u0430| \u0442\u0435|\u0441\u0442\u043E|\u0434\u043E\u0441|\u0440\u0430\u0436|\u0440\u0435\u0437|\u0447\u0440\u0435|\u0433\u0430\u0442|\u0435\u043E\u0431|\u0430 \u043C|\u043E \u0435|\u0438\u043D\u0435|\u0430\u0441\u0442|\u043E\u0432\u043E|\u0447\u043D\u043E|\u0430\u0432\u0435|\u043C\u0443 | \u043C\u0443|\u0430\u043D\u043E|\u0438\u0442\u0430|\u0438\u043C\u0438|\u0430\u043A\u043E|\u043D\u0430\u043A|\u043B\u0430\u0433|\u043E\u0432\u0438|\u0430\u043D ",kaz:"\u043D\u0435 | \u049B\u04B1|\u0435\u043D |\u04B1\u049B\u044B| \u0431\u0430| \u049B\u0430|\u049B\u04B1\u049B|\u044B\u049B |\u0493\u0430 | \u0436\u04D9|\u04D9\u043D\u0435|\u0436\u04D9\u043D| \u043D\u0435| \u0431\u043E|\u0434\u0435 |\u0434\u0430\u043C|\u0430\u0434\u0430|\u0430 \u049B|\u0442\u0430\u0440|\u044B\u043D\u0430| \u0430\u0434|\u044B\u043B\u044B| \u04D9\u0440|\u044B\u04A3 |\u0430\u043D |\u0456\u043D |\u049B\u044B\u043B|\u0430\u0440 |\u0435\u043C\u0435|\u043D\u0430 |\u0440 \u0430|\u043B\u044B\u049B|\u0443\u0493\u0430|\u0430\u043B\u0430|\u044B\u049B\u0442| \u04E9\u0437|\u043C\u0435\u0441|\u04D9\u0440 | \u0436\u0430|\u043C\u0435\u043D|\u044B\u0493\u044B|\u043B\u044B | \u0434\u0435|\u049B\u0442\u0430|\u043D\u044B\u04A3|\u043D \u049B|\u0493\u0430\u043D|\u0456\u043D\u0435|\u0431\u0430\u0441|\u0430\u0440\u044B| \u043C\u0435| \u049B\u043E|\u0435\u043A\u0435|\u044B\u043D |\u0434\u0430 |\u0435 \u049B|\u0434\u044B |\u0430\u0441\u044B|\u0441\u0435 |\u0435\u0441\u0435|\u0430\u043C |\u0431\u043E\u043B|\u0430\u043D\u0434|\u043D\u0435\u043C| \u0431\u0456|\u0430\u0440\u0430|\u044B \u0431|\u0441\u0442\u0430|\u0442\u0430\u043D|\u043D\u0434\u044B|\u043D \u0431|\u0456\u04A3 |\u0435 \u0431|\u0456\u043B\u0456|\u0442\u0438\u0456| \u0442\u0438|\u0431\u0430\u0440|\u0493\u044B |\u043D\u0434\u0435|\u0435\u0442\u0442|\u0438\u0456\u0441|\u049B\u044B\u0493|\u0456\u0441 |\u043B\u0430\u0440|\u0433\u0435 |\u044B \u0442|\u0456\u043D\u0434|\u0456\u043A |\u0431\u0456\u0440| \u0431\u0435| \u043A\u0435|\u0430\u043B\u0443|\u0435 \u0430|\u0430\u043B\u044B|\u043B\u0443\u044B|\u0430 \u0436|\u0435\u0440\u0456|\u043E\u043B\u044B| \u0442\u0435|\u049B\u044B\u049B|\u043D \u043A| \u0442\u0430|\u043D \u0436|\u0493\u044B\u043D|\u0442\u0442\u0456|\u0456\u043D\u0456|\u0442\u044B\u043D| \u0435\u0440|\u043D\u0434\u0430|\u0456\u043C | \u0441\u0430|\u0435 \u0436|\u0430\u0442\u044B| \u0430\u0440|\u0440\u0493\u0430|\u0435\u0442\u0456|\u0430\u043D\u0430|\u044B \u04D9|\u0443\u044B\u043D|\u043B\u0493\u0430|\u04E9\u0437\u0456|\u043E\u0441\u0442|\u0435\u0433\u0456|\u0442\u0456\u043A|\u049B\u0430 |\u0441\u049B\u0430|\u0440\u044B\u043D|\u043A\u0456\u043D|\u043B\u0443\u0493|\u04A3 \u049B|\u043D\u0456\u04A3|\u0443\u044B |\u0431\u043E\u0441|\u0430\u0441\u049B|\u049B\u0430\u0440|\u0434\u044B\u049B|\u043D\u0430\u043D|\u043C\u044B\u0441|\u043C\u043D\u044B|\u0430\u043C\u043D|\u044B \u043C|\u0430\u0439\u0434|\u043A\u0435 | \u0436\u0435|\u0437\u0456\u043D|\u0440\u0434\u0435|\u0440\u0456\u043D|\u0435 \u0442|\u0433\u0435\u043D|\u044B\u043F |\u0440\u044B |\u0442\u0456 |\u0441\u044B\u043D|\u049B\u0430\u043C|\u0434\u0435\u043D|\u0456 \u0431|\u0433\u0456\u0437|\u0440\u0430\u043B|\u0435 \u04E9|\u043B\u0430\u043D|\u0441\u044B |\u0430\u043C\u0430|\u0442\u0442\u0430|\u0442\u044B\u049B|\u0431\u0435\u0440|\u0434\u0456 |\u0431\u0456\u043B|\u0440\u043A\u0456|\u04E9\u0437 |\u0437\u0434\u0435|\u043A\u0435\u0442|\u049B\u043E\u0440|\u0434\u0430\u0439|\u0443\u0433\u0435|\u044B \u0435|\u044B\u043D\u0434|\u043D\u0435\u0433|\u043E\u043D\u044B|\u0435\u0439 |\u043C\u0435\u0442|\u0430\u043D\u044B|\u0430 \u0442|\u0436\u0430\u0441|\u0430\u0443\u044B|\u043B\u0433\u0435|\u0430\u0441\u0430|\u0435\u0433\u0435|\u0434\u0430\u0440|\u0440\u0443 |\u0430\u0443 |\u0435\u0440\u043A|\u044B \u0436|\u0440\u044B\u043B| \u0442\u043E|\u043D \u043D|\u0435 \u043D|\u0442\u0456\u043D|\u0456\u0440 |\u0441\u0456\u0437|\u0442\u0435\u0440|\u043B\u043C\u0430|\u0456 \u0442|\u043A\u0456\u043C| \u0430\u043B|\u0440 \u043C|\u043B\u0456\u043A| \u043C\u04AF|\u0435 \u043C|\u0442\u04AF\u0440| \u0442\u04AF|\u043A\u0435\u043B|\u043B\u044B\u043F|\u0435\u04A3 |\u0442\u0435\u04A3|\u0440\u043B\u044B|\u043B\u0456\u043C|\u0440\u0434\u044B|\u0430\u0440\u0434|\u0430\u0442\u0442|\u0441 \u0431|\u044B\u0440\u044B|\u0441\u044B\u0437|\u044B\u0441 |\u0435\u043B\u0433|\u0434\u0430\u043B|\u0439\u0434\u0430|\u043E\u0440\u0493|\u0440\u049B\u044B|\u0430\u0440\u049B| \u0436\u04AF|\u0442\u0430\u043B|\u044B\u043B\u043C|\u0430 \u0431|\u0456\u0433\u0456|\u043B\u0434\u0435|\u0456\u0437 |\u049B\u0442\u044B| \u0435\u0448|\u0434\u0435\u0439|\u0430\u0439 |\u0436\u0430\u0493|\u043A\u0442\u0456|\u0456\u043A\u0442|\u0433\u0456\u043D| \u04D9\u043B|\u0442\u0442\u044B|\u04B1\u043B\u0442| \u04B1\u043B|\u0435 \u0434|\u044B\u043D\u044B|\u043B\u0456\u043D|\u0440 \u0431|\u0435\u043B\u0435|\u043A\u04B1\u049B| \u043A\u04B1|\u0430\u043C\u0434|\u043C \u0431| \u0435\u0442|\u043E\u0493\u0430|\u049B\u04B1\u0440| \u043A\u04E9|\u0430\u0493\u0430|\u0442\u043E\u043B|\u0448\u0456\u043D|\u0430\u0439\u044B| \u049B\u044B|\u049B\u0430\u043B|\u0436\u0435\u043A|\u0456 \u043D|\u0435\u0441 |\u0430\u0493\u044B|\u0435 \u043E|\u0435\u043B\u0456| \u0435\u043B|\u043D \u0435|\u0437\u0456 |\u0448\u043A\u0456|\u0435\u0448\u043A|\u043E\u043B\u0443|\u0446\u0438\u044F|\u043C\u0430\u0441|\u0493\u0434\u0430|\u0430\u0493\u0434|\u043B\u0442\u0442|\u0456\u043C\u0434|\u043D\u044B\u043C| \u0434\u0430|\u0430 \u0434|\u04D9\u0441\u0456|\u0441 \u04D9|\u049B\u0430\u0442|\u0456\u0440\u0456| \u0441\u043E|\u04A3 \u0431|\u0430\u0437\u0430|\u043C\u0434\u0430|\u0430\u0439\u043B| \u0430\u0441|\u0493\u0430\u043C|\u049B\u043E\u0493"},Arabic:{arb:" \u0627\u0644|\u064A\u0629 |\u0641\u064A | \u0641\u064A|\u0627\u0644\u062D| \u0623\u0648|\u0623\u0648 | \u0648\u0627|\u0648\u0627\u0644|\u062D\u0642 |\u0629 \u0627|\u0644\u062D\u0642|\u0627\u0644\u062A|\u0643\u0644 |\u0627\u0644\u0645|\u0644\u0643\u0644| \u0644\u0643|\u0644\u0649 |\u0642 \u0641|\u062A\u0647 |\u0648 \u0627|\u0629 \u0648|\u0634\u062E\u0635|\u0629 \u0644|\u0627\u062A |\u0627\u0644\u0623|\u064A \u0623|\u0648\u0646 | \u0634\u062E|\u0645 \u0627|\u0623\u064A | \u0623\u064A|\u0627\u0646 |\u0623\u0646 |\u0645\u0629 |\u064A \u0627|\u0627\u0644\u0627|\u0644\u0627 |\u0647\u0627 |\u0627\u0621 | \u0623\u0646| \u0639\u0644|\u062E\u0635 |\u0646 \u0627| \u0644\u0644|\u062F \u0627|\u0645\u0646 |\u0641\u0631\u062F|\u0645\u0627 |\u0627\u0644\u0639|\u062A \u0627|\u062D\u0631\u064A|\u0639\u0644\u0649|\u0644 \u0641|\u0631\u062F |\u0644 \u0634| \u0644\u0627|\u0631\u064A\u0629| \u0625\u0644|\u0629 \u0623|\u0627 \u0627|\u0646 \u064A| \u0648\u0644|\u0627 \u0644|\u0627 \u064A| \u0641\u0631| \u0645\u0646|\u0629 \u0645|\u0627\u0644\u0642|\u062C\u062A\u0645|\u0646 \u0623|\u0642 \u0627|\u0627\u0644\u0625| \u062D\u0631|\u0644\u0647 |\u0647 \u0644|\u0627\u064A\u0629|\u0644\u0643 |\u0647 \u0627| \u062F\u0648|\u062F\u0629 |\u0627\u064B |\u064A\u0646 |\u0647 \u0648|\u0644\u0629 |\u064A \u062D| \u0639\u0646|\u0645\u0627\u0639|\u064A \u062A|\u0630\u0627 | \u062D\u0642|\u0642\u0648\u0642|\u062D\u0642\u0648|\u060C \u0648|\u0646 \u062A|\u0645\u0639 |\u0635 \u0627|\u0627\u0645 |\u062F \u0623| \u0643\u0627|\u0647\u0630\u0627|\u0627\u0644\u0648| \u0625\u0646|\u0645\u0644 |\u0627\u0645\u0629|\u0639 \u0627|\u0625\u0644\u0649|\u0629 \u0639|\u0645\u0627\u064A|\u062D\u0645\u0627|\u0646 \u0648|\u0644\u062A\u0639| \u0648\u064A|\u064A\u0631 |\u0646\u0648\u0646|\u064A \u0648|\u0627\u0633\u064A|\u0627\u0644\u062C| \u0647\u0630|\u0646\u0633\u0627|\u0648\u0642 |\u062A\u0631\u0627|\u0639\u064A\u0629|\u0647 \u0623| \u0644\u0647|\u0633\u064A\u0629| \u064A\u062C| \u0628\u0627|\u062F\u0648\u0644|\u0627\u0646\u0648|\u0642\u0627\u0646|\u0644\u0642\u0627|\u0629 \u0628|\u0629 \u062A|\u062A\u0645\u0627|\u0627\u0644\u062F|\u064A\u0627\u062A|\u0639 \u0628|\u0633\u0627\u0646|\u0625\u0646\u0633|\u0647\u0645 |\u0639\u0644\u064A| \u0645\u062A|\u0644\u0645\u062C|\u0630\u0644\u0643|\u0639\u0645\u0644|\u0644\u0623\u0633|\u0648\u0632 |\u062C\u0648\u0632|\u064A\u062C\u0648|\u0628\u0627\u0644|\u063A\u064A\u0631|\u0643 \u0627|\u0643\u0627\u0646|\u0633\u0627\u0633|\u0623\u0633\u0627|\u062F\u0645 |\u0644\u0627\u062F|\u0627\u0639\u064A|\u0627\u0644\u0631|\u062A\u0645\u064A|\u062F\u0648\u0646|\u062A\u0645\u062A|\u0644\u062A\u0645| \u064A\u0639|\u0644\u064A\u0647|\u0633\u0627\u0648|\u0627\u062C\u062A|\u064A \u0645|\u0644\u0639\u0627|\u0644\u062C\u0645|\u062A\u0639\u0644|\u0631 \u0648|\u062A\u0645\u0639|\u0645\u062C\u062A| \u0645\u0639|\u064A\u0647 |\u0649 \u0623|\u0641\u064A\u0647|\u0649 \u0627| \u0643\u0644|\u0644\u0627\u062A|\u0645\u0644\u0627|\u0648\u062F |\u0627\u0646\u062A|\u0627\u0644\u0641|\u064A\u0647\u0627|\u064A \u0625|\u062A\u064A |\u0627\u0644\u0628|\u0644\u064A |\u0642\u062F\u0645|\u0627\u0644 |\u0627\u062F |\u0644 \u0627|\u064A\u0632 |\u064A\u064A\u0632|\u0645\u064A\u064A| \u062A\u0645|\u0644\u062D\u0631|\u062A\u0639 |\u0645\u062A\u0639|\u0627 \u0628|\u0639\u0627\u0645|\u0627 \u0648|\u0642 \u0648|\u0631\u0627\u0645|\u0644 \u0644|\u0644\u0627\u062C|\u0631\u0627 |\u0627\u0644\u0634| \u0648\u0625|\u064A\u0645 |\u0644\u064A\u0645|\u0634\u062A\u0631|\u0627 \u062D|\u0648\u0627\u062C|\u0644\u0632\u0648|\u0648\u0644 |\u0627 \u0641|\u0648\u0644\u0629|\u0644\u062D\u0645|\u0623\u0633\u0631| \u0630\u0644|\u0647 \u0641|\u0627\u062A\u0647|\u0645\u0633\u0627|\u0644\u0645\u0633| \u062A\u0639|\u0639\u0646 |\u0647 \u0639|\u0648\u0644\u0647|\u064A\u062A\u0647|\u0646 \u0644|\u0631\u0629 | \u0648\u0633|\u0627\u0629 |\u064A\u062F | \u062A\u062D| \u0645\u0633|\u064A \u064A|\u0644\u062A\u064A|\u0639\u0629 |\u0648\u0644\u064A|\u0644\u062F\u0648| \u0623\u0633| \u0648\u0641|\u0644 \u0648|\u0623\u064A\u0629|\u0646\u064A |\u0627\u0644\u0633|\u0644\u0627\u0646|\u0644\u0625\u0639|\u0629 \u0641|\u0631\u064A\u0627|\u0644 \u0625|\u0645 \u0628|\u0627\u0645\u0644|\u0643\u0631\u0627|\u062A\u0633\u0627|\u0645\u064A\u0639|\u062C\u0645\u064A| \u062C\u0645|\u0623\u0648\u0644|\u0628\u064A\u0629|\u0639\u064A\u0634|\u062A\u062D\u0642|\u0627\u062F\u0629|\u0633 \u0627| \u0645\u0645|\u0645\u0639\u064A|\u062C\u0645\u0627|\u0639\u0627\u062A|\u0627\u0639\u0627|\u0627\u0631\u0633|\u0645\u0627\u0631|\u0645\u0645\u0627|\u0645 \u0648|\u0631\u0627\u0643|\u0627\u0634\u062A|\u0627\u0644\u0637|\u0627\u062C |\u0632\u0648\u0627|\u0627\u0644\u0632| \u0648\u0645|\u062D\u062F\u0629|\u062A\u062D\u062F|\u0644\u0645\u062A|\u0645\u0645 |\u0644\u0623\u0645|\u062F\u0647 |\u0628\u0644\u0627| \u0628\u0644|\u0627\u0631 |\u064A\u0627\u0631|\u062A\u064A\u0627|\u062E\u062A\u064A|\u0627\u062E\u062A|\u0646 \u0645| \u0645\u0631",urd:"\u0648\u0631 | \u0627\u0648|\u0627\u0648\u0631|\u06A9\u06D2 | \u06A9\u06D2| \u06A9\u06CC| \u06A9\u0627|\u06CC\u06BA | \u062D\u0642|\u06A9\u06CC |\u06A9\u0627 | \u06A9\u0648|\u0626\u06D2 |\u06D2 \u06A9|\u06CC\u0627 |\u0633\u06D2 |\u06A9\u0648 |\u0634\u062E\u0635| \u0634\u062E|\u0646\u06D2 | \u0627\u0633| \u06C1\u06D2|\u0645\u06CC\u06BA|\u062D\u0642 | \u06C1\u0648| \u0645\u06CC|\u062E\u0635 |\u06D2 \u0627| \u062C\u0627|\u0627\u0633 | \u0633\u06D2| \u06CC\u0627|\u06C1\u0631 |\u06CC \u0627| \u06A9\u0631| \u06C1\u0631|\u06D2\u06D4 |\u0633\u06CC |\u06C1\u06CC\u06BA|\u0627 \u062D|\u0635 \u06A9|\u0648\u06BA |\u06D2 \u0645| \u0627\u0646|\u0631 \u0634|\u06D4 \u06C1|\u0627\u0626\u06D2|\u0632\u0627\u062F|\u0622\u0632\u0627| \u0622\u0632|\u0627\u0645 |\u0631 \u0627|\u0642 \u06C1|\u0627\u062F\u06CC|\u062C\u0627\u0626|\u06BA \u06A9|\u06C1\u06D2\u06D4|\u0645 \u06A9| \u06A9\u0633|\u0627 \u062C|\u06CC \u06A9|\u0633 \u06A9|\u06A9\u0633\u06CC| \u067E\u0631|\u06D2 \u06AF|\u06C1\u06D2 |\u0627\u0631 |\u062A \u06A9|\u062F\u06CC |\u067E\u0631 |\u0648 \u0627| \u062D\u0627| \u062C\u0648| \u06C1\u06CC|\u0627\u0646 |\u06CC \u062C|\u0631\u06CC | \u0646\u06C1| \u0645\u0639|\u062C\u0648 |\u0644 \u06A9|\u06CC \u062A|\u0646 \u06A9|\u06A9\u0631\u0646|\u0626\u06CC |\u0644 \u06C1|\u062A\u06CC |\u06C1\u0648 |\u06C1 \u0627| \u0627\u06CC|\u0635\u0644 |\u0627\u0635\u0644|\u062D\u0627\u0635|\u0631\u0646\u06D2|\u06CC \u0634|\u0646\u06C1 |\u06D4 \u0627|\u06BA\u06D4 |\u06CC\u06BA\u06D4|\u0631 \u06A9|\u0631 \u0645| \u0645\u0644|\u0648\u06C1 |\u0645\u0639\u0627|\u0631\u06D2 |\u06BA \u0627|\u0646\u06C1\u06CC|\u06D2 \u06C1|\u06D2 \u0628|\u0627\u06CC\u0633|\u06D2 \u0644| \u062A\u0639| \u06AF\u0627|\u06CC\u062A |\u06CC \u062D|\u0627 \u0627|\u06CC \u0645|\u0627\u067E\u0646| \u0627\u067E|\u06A9\u06CC\u0627|\u0645\u06CC |\u06CC \u0633| \u062C\u0633|\u06C1 \u06A9|\u0646\u06CC |\u0627\u0634\u0631|\u0639\u0627\u0634| \u062F\u0648|\u0644\u0626\u06D2| \u0644\u0626|\u0627\u0646\u06C1|\u0648\u0642 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0645\u0644 | \u0642\u0627|\u06A9\u06C1 | \u06AF\u06CC|\u0631 \u0628|\u06C1 \u0645| \u0648\u06C1| \u0628\u0646|\u06CC \u0628|\u0645\u0644\u06A9|\u062C\u0633 |\u0627\u06D4 |\u0631\u06CC\u0642|\u0631 \u0646|\u06D2 \u062C|\u0627\u062F |\u0627\u062A |\u06AF\u06CC |\u062F \u06A9|\u06D2 \u062D|\u062F\u0627\u0631|\u0631 \u06C1|\u06AF\u0627\u06D4|\u0642\u0648\u0645| \u0642\u0648|\u06D2\u060C |\u0627 \u0633|\u062F\u0648\u0633|\u0631 \u067E| \u0648 | \u0634\u0627|\u06CC \u0622|\u06BA \u0645|\u0642 \u062D| \u067E\u0648| \u0628\u0627|\u062E\u0644\u0627|\u0627\u0646\u06D2|\u06CC\u0645 |\u0644\u06CC\u0645|\u0648 \u062A|\u0648\u0646 | \u06A9\u06C1|\u06CC\u060C |\u06D4 \u06A9|\u0627 \u067E|\u0646 \u0627|\u0644\u06A9 |\u0639\u0644\u0627|\u0627 \u0645|\u0642 \u06A9|\u0627\u0626\u06CC|\u0648\u0633\u0631|\u06CC \u06C1|\u0648\u0626\u06CC|\u06CC\u0631 |\u0627 \u06C1|\u0639\u0644\u06CC|\u0648 \u06AF|\u0648\u0631\u06CC|\u062F\u06AF\u06CC|\u0646\u062F\u06AF|\u0648 \u06A9|\u06CC\u0633\u06D2| \u0645\u0646|\u0627\u0626\u062F|\u0631\u0627\u0626| \u0645\u0631|\u067E\u0648\u0631| \u0637\u0631|\u0648\u0645\u06CC|\u06D2 \u062E|\u0633\u0628 |\u0646\u0648\u0646|\u0627\u0646\u0648|\u0642\u0627\u0646| \u0633\u06A9|\u0648\u0627\u0645|\u06CC\u0646 | \u0631\u06A9|\u062A\u0639\u0644|\u0644\u0627\u0642|\u063A\u06CC\u0631|\u062F\u0627\u0646|\u060C \u0627| \u0628\u06CC| \u0645\u0633|\u06CC\u0648\u06BA|\u0646\u0627 | \u0628\u06BE| \u0628\u0631|\u0631\u062A\u06CC|\u0627\u062F\u0627|\u0627\u0645\u0644|\u06CC\u06C1 | \u06CC\u06C1|\u06C1 \u0648| \u0639\u0627|\u06CC \u067E| \u0628\u0686|\u0627\u0641 |\u0644\u0627\u0641| \u062E\u0644|\u06CC\u06D4 |\u06AF\u06CC\u06D4| \u062F\u06CC|\u06BE\u06CC |\u0628\u06BE\u06CC|\u062F\u06C1 |\u062C\u0627 |\u067E\u0646\u06CC|\u0642\u0648\u0627|\u0627\u0642\u0648|\u0631\u06A9\u06BE|\u06D2 \u06CC| \u0639\u0644|\u06A9\u0648\u0626|\u060C \u0645| \u0686\u0627|\u06D2 \u0633|\u0631 \u0639| \u067E\u06CC|\u0628\u0631\u0627|\u0631 \u0633|\u0631 \u062D|\u0633\u0627\u0646|\u0645 \u0627|\u06A9\u0627\u0645|\u0634\u0631\u062A| \u0631\u0627|\u0634\u0627\u0645|\u0645\u0646 |\u0632\u0646\u062F| \u0632\u0646|\u0628 \u06A9|\u062A \u0645|\u0627\u06C1 |\u0627\u0631\u06CC|\u0633 \u0645|\u0631 \u062C| \u0645\u062D|\u0648\u0631\u0627|\u06D2 \u067E|\u0637\u0631\u06CC|\u06C1\u0648\u06BA|\u0627\u0644 |\u06BA \u0633|\u06CC \u0646|\u06A9\u0631\u06D2| \u0645\u0642|\u062A \u0633|\u062A\u062D\u0641| \u062A\u062D|\u0648\u06D4 |\u06C1\u0648\u06D4|\u0628\u0646\u062F| \u0627\u0642|\u062F \u06C1| \u0627\u0645|\u0627\u0645\u06CC|\u0627\u0644\u0627|\u0644\u062A |\u0634\u0631\u06D2|\u06D2 \u0639|\u0627 \u06A9|\u0641\u0631\u06CC",pes:" \u0648 | \u062D\u0642| \u0628\u0627|\u0646\u062F |\u0631\u062F |\u062F\u0627\u0631| \u062F\u0627|\u06A9\u0647 |\u0647\u0631 | \u062F\u0631| \u06A9\u0647|\u062F\u0631 | \u0647\u0631|\u0631 \u06A9|\u062D\u0642 |\u062F \u0647|\u0627\u0632 |\u06CC\u062A | \u0627\u0632|\u06CC\u0627 |\u06A9\u0633 |\u0648\u062F |\u0627\u0631\u062F| \u06CC\u0627| \u06A9\u0633|\u0627\u06CC |\u062F \u0648| \u0628\u0631| \u062E\u0648|\u0642 \u062F|\u0628\u0627\u0634|\u0634\u062F |\u062F \u06A9|\u0627\u0631 |\u062F \u0628| \u0631\u0627|\u0647 \u0628|\u0627\u0646 |\u0622\u0632\u0627| \u0622\u0632|\u0631\u0627 |\u0627\u0634\u062F|\u06CC \u0648|\u0647 \u0627|\u06CC\u0646 |\u06CC\u062F |\u0632\u0627\u062F|\u0633 \u062D|\u062E\u0648\u062F|\u06CC \u0628| \u0627\u0633|\u062F\u0647 |\u062F\u06CC |\u0648\u0631 |\u0627\u06CC\u062F|\u0647 \u062F|\u0631\u06CC |\u0648 \u0627|\u062A\u0645\u0627|\u0627\u062A | \u0646\u0645|\u06CC \u06A9|\u0627\u062F\u06CC|\u0646\u0647 |\u0631\u0627\u06CC|\u062F \u0627| \u0622\u0646|\u0627\u0633\u062A|\u0631 \u0627|\u0631 \u0645| \u0627\u062C|\u0645\u0627\u06CC|\u0648\u0646 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0648 \u0645| \u0627\u0646|\u0627\u0646\u0647| \u0647\u0645|\u0648\u0642 |\u0627\u06CC\u062A| \u0634\u0648|\u06CC \u0627| \u0645\u0648| \u0628\u06CC|\u0628\u0627 | \u062A\u0627|\u0648\u0631\u062F|\u0627\u0646\u0648|\u0633\u062A |\u0648\u0627\u0646|\u0628\u0631\u0627|\u0627\u0645 |\u0634\u0648\u062F|\u0622\u0646 |\u062C\u062A\u0645|\u06CC \u06CC| \u06A9\u0646|\u0631 \u0628|\u06A9\u0646\u062F| \u0645\u0631|\u062A \u0645|\u0647\u0627\u06CC|\u062A \u0627| \u0645\u0633|\u06CC\u060C |\u0645\u0627\u0639|\u0627\u062C\u062A|\u062A\u0648\u0627|\u06CC\u06AF\u0631|\u0648 \u0628|\u062F\u0627\u0646|\u062A \u0648|\u0627 \u0645| \u0628\u062F|\u0639\u06CC |\u06A9\u0627\u0631| \u0645\u0646|\u0645\u0648\u0631| \u0645\u0642|\u06CC \u062F| \u0632\u0646|\u06CC \u0645|\u0646 \u0628|\u0631 \u062E|\u0627\u0647 |\u0627 \u0628|\u0627\u0631\u06CC|\u062F \u0622|\u0645\u0644 | \u0628\u0647|\u0627\u0639\u06CC|\u062F\u060C |\u062F\u06CC\u06AF|\u062A \u0628|\u0628\u0627\u06CC|\u0627\u06CC\u0646| \u0645\u06CC|\u0646 \u0648|\u0642 \u0645| \u0639\u0645| \u06A9\u0627|\u0646 \u0627|\u0648 \u0622| \u062D\u0645|\u0646\u0648\u0646|\u0647 \u0648|\u0648 \u062F|\u062F \u0634| \u0627\u06CC|\u0634\u0648\u0631|\u06A9\u0634\u0648| \u06A9\u0634|\u0644\u06CC |\u0646\u06CC |\u0647 \u0645|\u0628\u0639\u06CC|\u0631 \u0634|\u06CC\u0647 | \u0645\u0644|\u0645\u06CC\u062A|\u06CC \u0631|\u0631\u0646\u062F| \u0634\u0631|\u0645\u06CC |\u0648\u06CC |\u0633\u0627\u0648|\u0642\u0627\u0646| \u0642\u0627|\u0645\u0642\u0627|\u0627\u0648 | \u0627\u0648|\u062F \u0645|\u06AF\u06CC |\u0646\u0645\u06CC| \u0627\u062D| \u0645\u062D|\u0645\u06CC\u0646|\u0626\u06CC |\u0627\u062F\u0627| \u0622\u0645|\u062E\u0648\u0627|\u06AF\u0631\u062F| \u06AF\u0631|\u0645\u0646\u062F| \u0634\u062F|\u0627\u0626\u06CC| \u062F\u06CC|\u0632 \u062D|\u0647\u06CC\u0686| \u0647\u06CC|\u0627\u062F\u0647| \u0645\u062A|\u0646\u0645\u0627|\u062A \u06A9|\u0631\u0627\u0646| \u0628\u0645|\u0646 \u062D|\u0631 \u062A|\u062D\u0645\u0627|\u0627\u0631\u0646|\u0645\u0633\u0627|\u062F\u06AF\u06CC|\u0648\u0645\u06CC|\u0646 \u062A|\u0645\u0644\u0644|\u0628\u0631 |\u0647\u062F |\u0648\u0627\u0647|\u0628\u0647\u0631| \u0627\u0639|\u200C\u0647\u0627|\u0642 \u0648|\u060C \u0627|\u0639\u06CC\u062A|\u06CC\u062A\u0648|\u0627 \u0631|\u0646 \u0645| \u0639\u0642|\u0647\u0645\u0647|\u0627 \u0647|\u0632\u0634 |\u0648\u0632\u0634|\u0645\u0648\u0632|\u0622\u0645\u0648|\u0627\u0646\u062A|\u062A\u06CC |\u062C\u0627\u0645|\u0645\u0648\u0645|\u0639\u0645\u0648|\u062A\u062E\u0627| \u0641\u0631|\u0637\u0648\u0631|\u062F \u062F|\u0647 \u062D|\u0631\u062F\u0627|\u0627\u0648\u06CC|\u0646\u0648\u0627|\u0627\u0646\u06CC|\u0631\u0627\u0631| \u0645\u062C|\u06CC \u0646|\u062D\u062F\u06CC|\u0627\u062D\u062F|\u0646\u062F\u06AF|\u0632\u0646\u062F|\u0634\u062E\u0635| \u0634\u062E|\u200C\u0645\u0646|\u0647\u200C\u0645|\u0631\u0647\u200C|\u0647\u0631\u0647|\u0634\u062F\u0647|\u0639 \u0627|\u0648 \u0647|\u0627\u0633\u06CC|\u0647\u0654 |\u06CC\u062F\u0647|\u0639\u0642\u06CC|\u0627 \u0627|\u0645\u0647 | \u0628\u0634|\u0627\u062F |\u062F\u06CC\u0647|\u0627 \u062F|\u062F\u0648\u0627|\u06CC \u062D|\u0627\u0628\u0639|\u06CC \u062A|\u062E\u0627\u0628|\u0646\u062A\u062E|\u0631\u0648\u0631|\u0648 \u0631|\u0634\u0631\u0627| \u062E\u0627|\u0654\u0645\u06CC|\u0627\u0654\u0645|\u062A\u0627\u0654|\u0627\u064B |\u0627\u0645\u0644|\u0644\u0647 |\u062F \u0631|\u0627\u0633\u0627|\u062E\u0648\u0631|\u0628\u0644 |\u0627\u0628\u0644|\u0642\u0627\u0628|\u06CC\u06A9 |\u0633\u0627\u0646|\u0642\u0631\u0627|\u0627 \u0646|\u062E\u0635\u06CC| \u0627\u0645| \u0628\u0648|\u06CC\u0631 |\u0627\u0644\u0645|\u0628\u06CC\u0646|\u0627\u0647\u062F|\u062A\u0628\u0639| \u062A\u0628",zlm:" \u062F\u0627|\u0627\u0646 |\u062F\u0627\u0646| \u0628\u0631| \u0627\u0648|\u0646 \u0633|\u0631\u06A0 |\u062F\u0627\u0644| \u06A4\u0631|\u0644\u0647 |\u0643\u0646 | \u0643\u06A4|\u0646 \u0627|\u0646 \u0643|\u0646 \u062F|\u064A\u06A0 | \u064A\u06A0|\u06A4\u062F |\u062D\u0642 |\u0648\u0631\u06A0|\u062A\u064A\u0627|\u064A\u0627\u06A4|\u0627\u0631\u0627|\u0643\u06A4\u062F|\u0627\u0648\u0631|\u0631\u062D\u0642|\u0628\u0631\u062D|\u0627\u0644\u0647|\u0623\u0646 |\u0648\u0644\u064A| \u0627\u062A|\u0627\u062A\u0627|\u06A0\u0646 |\u062A\u0627\u0648|\u0627\u06A4 |\u0633\u062A\u064A|\u0644\u064A\u0647|\u0627\u0648 | \u0633\u062A|\u06A4 \u0627|\u064A\u0647 |\u0631\u0627 |\u0647 \u0628|\u0647 \u062F|\u0639\u062F\u0627| \u0639\u062F|\u0646 \u06A4|\u0646 \u0628|\u064A\u0646 | \u062A\u0631|\u0642 \u0643|\u0646 \u064A|\u064A\u0628\u0633|\u0628\u064A\u0628| \u062A\u064A| \u0633\u0648| \u0643\u0628| \u0633\u0627|\u0646 \u0645|\u0646 \u062A|\u0644\u0645 |\u0627\u0644\u0645|\u062F \u0633|\u06A0 \u0639| \u0645\u0646|\u0686\u0627\u0631|\u062F \u06A4|\u0631\u0646 |\u0633\u0627\u0645| \u0645\u0627|\u06BD \u0633|\u0646\u060C | \u0628\u0648| \u0627\u064A|\u0646\u062F\u0642| \u062D\u0642|\u06AC\u0627\u0631|\u0646\u06AC\u0627|\u0628\u0648\u0644|\u0633\u0628\u0627| \u0633\u0628|\u0627\u062A\u0648|\u0627 \u0633|\u0642\u0644\u0647| \u06A4\u0645| \u0645\u0645|\u0648\u0627\u0646|\u0633\u0686\u0627| \u0633\u0686| \u0643\u0633|\u0627 \u0628|\u0633\u0646 | \u0633\u0645|\u06A4\u0631\u0644|\u0627\u0648\u0646|\u0646\u06BD |\u062A\u0646 | \u0628\u0627|\u0647\u0646 |\u0633\u064A\u0627|\u0627 \u06A4|\u0627\u0631\u06A0|\u0628\u0627\u0631|\u06A4\u0627 |\u0628\u0633\u0646|\u0643\u0628\u064A|\u0627\u0645 |\u064A\u0646\u062F|\u064A \u062F|\u0627\u06AC\u064A|\u06A0 \u0628|\u0628\u0627\u06AC|\u064A \u0627|\u0645\u0627\u0646| \u0644\u0627| \u062F |\u062F\u0642\u0644|\u0647\u0646\u062F| \u0647\u0646|\u062A \u062F|\u0627\u062F\u064A|\u0648\u064A\u0646|\u064A\u0643\u0646| \u0646\u06AC|\u060C \u0643|\u0646\u0662 | \u06A4\u0648|\u0628\u06A0\u0633|\u0642\u0662 |\u0627\u062A |\u0627\u0648\u0644|\u0627\u0643\u0646|\u0627\u06BD | \u0633\u0633|\u0648\u0646 |\u0627\u062F | \u0643\u0648|\u0627\u064A\u0646|\u062F\u06A0\u0646| \u062F\u06A0|\u0627\u0626\u0646|\u062A\u0648 |\u062A\u064A |\u0646 \u0647|\u06AC\u064A |\u0633\u064A |\u0642 \u0645|\u0648\u06A0\u0646|\u062F\u0648\u06A0|\u0646\u062F\u0648|\u0644\u064A\u0646|\u0631\u0644\u064A|\u0646\u062A\u0648|\u06A4\u0648\u0646|\u0648\u0627\u062A|\u064A\u0627\u062F|\u062A\u064A\u0643|\u06A0\u0633\u0627|\u06A4\u0645\u0628|\u062A\u0631\u0645|\u0662 \u062F|\u062D\u0642\u0662|\u0648\u0627 |\u0644\u0648\u0627|\u0645\u0627\u0633|\u0648\u0642 |\u0647 \u0645|\u0644 \u062F| \u0645\u0644|\u0648\u0646\u062F| \u06A4\u06A0|\u0627\u060C |\u060C \u062A|\u0644\u0627\u0626|\u0627\u064A |\u0645\u06A4\u0648|\u064A\u0643 |\u064A \u0643|\u0631\u0627\u062A|\u0645\u0631\u0627| \u0628\u064A|\u0633\u0645\u0648|\u0648 \u0643|\u060C \u062F|\u0633\u0648\u0627|\u06A0 \u0645|\u06A0 \u0633|\u06A0\u0662 |\u06A4\u0631\u064A|\u064A\u0631\u064A|\u062F\u064A\u0631|\u0627 \u0627|\u0627\u0633\u0627|\u06A4\u0662 |\u062A\u0627 |\u0633\u0648\u0633|\u060C \u0633|\u062C\u0648\u0627|\u06A0 \u062A|\u0631\u0623\u0646| \u0627\u0646|\u0633\u0623\u0646|\u0631\u064A\u0643|\u064A\u0623\u0646|\u0631\u064A | \u062F\u0631|\u0627\u0645\u0631|\u0643\u0631\u062C| \u06A4\u0644|\u0627 \u062F|\u062C\u0631\u0646|\u0627\u062C\u0631|\u0627\u0631\u0643|\u0644\u0627\u062C|\u062F \u0643|\u0648\u0627\u0631|\u0628\u0631\u0633|\u0648\u0646\u062A|\u0645\u0646\u0648|\u0633\u0627\u0644|\u064A\u0646\u06A0|\u062F\u06A0\u0662|\u0646\u062F\u06A0| \u0645\u06A0|\u0627\u06A4\u0627|\u0633\u0633\u064A|\u0633\u0627\u0633|\u0646\u0646 |\u06A4\u0648\u0644|\u0627\u06AC\u0627| \u0628\u06A0| \u0633\u06A4|\u0645\u0628\u064A| \u0627\u06A4|\u06A0 \u0627|\u0627\u0631\u0623|\u06A4\u0631\u0627|\u064A \u0633|\u0628\u0633 | \u062F\u0644|\u0627 \u0645|\u0645\u0648\u0627|\u06A4\u0644\u0627|\u0645\u0644\u0627|\u06A4\u0631\u0643|\u0643\u0648\u0631|\u0648\u0628\u0648| \u0643\u0623|\u0648\u0643\u0646|\u0623\u0646\u06BD|\u0643\u0633\u0627|\u06A0\u06AC\u0648|\u0627\u062F\u06A4|\u0647\u0627\u062F|\u0631\u0647\u0627|\u062A\u0631\u0647|\u0643\u0648\u0645|\u062A\u0648\u0642|\u0645 \u0633|\u06A0 \u062F|\u062F\u064A | \u062F\u064A|\u0662 \u0633|\u0646\u062F\u064A|\u0627\u0633 |\u0627\u062F\u0627|\u0628\u0648\u0627| \u062F\u0628|\u06A0 \u06A4|\u06BD\u060C |\u0627\u06A4\u0662|\u0631\u062A\u0627|\u0627\u0644 |\u064A\u0627\u0644|\u0648\u0633\u064A| \u0643\u062A|\u0623\u0646\u060C|\u0646\u06A4\u0627|\u062A\u0646\u06A4| \u062A\u0646|\u0645 \u06A4|\u0631\u0633\u0627|\u0645\u0645\u06A4| \u0645\u0631|\u0646 \u062D| \u0643\u0645|\u0646\u0633\u064A|\u062C\u0623\u0646|\u0624\u064A |\u0644\u0624\u064A|\u0627\u0644\u0624|\u0644\u0627\u0644|\u0643\u06A4\u0631|\u0643\u062A |\u0631\u0643\u062A|\u0634\u0627\u0631|\u0645\u0634\u0627| \u0645\u0634|\u062C\u0627\u062F|\u0631\u06AC\u0627",skr:"\u062A\u06D2 |\u0627\u06BA |\u062F\u06CC |\u062F\u06D2 | \u06D4 |\u0648\u06BA | \u062A\u06D2| \u062F\u0627| \u06A9\u0648|\u06A9\u0648\u06BA| \u062D\u0642|\u062F\u0627 | \u062F\u06CC|\u06CC\u0627\u06BA| \u062F\u06D2|\u06CC\u06BA |\u06D2 \u0627|\u0634\u062E\u0635| \u0634\u062E|\u06C1\u0631 |\u06D2 \u06D4|\u0627\u0635\u0644| \u062D\u0627|\u062D\u0642 |\u062E\u0635 | \u06C1\u0631|\u0635\u0644 |\u062D\u0627\u0635|\u06C1\u06D2 | \u06C1\u06D2|\u0627\u0644 |\u0642 \u062D|\u0644 \u06C1| \u0646\u0627| \u06A9\u06CC| \u0648\u0686|\u06D4 \u06C1|\u06CC\u0627 |\u0633\u06CC |\u06D2 \u0645| \u0627\u0648|\u0648\u0686 |\u0627\u062A\u06D2|\u06A9\u06CC\u062A|\u0627 \u062D|\u0627\u062F\u06CC|\u0646\u0627\u0644|\u0635 \u06A9| \u0627\u062A|\u0631 \u0634|\u06C1\u06CC\u06BA| \u06CC\u0627|\u06BA \u062F| \u0627\u06CC|\u06CC\u0633\u06CC| \u0645\u0644|\u0648\u0646\u062F|\u06A9\u06C1\u06CC| \u06A9\u06C1|\u06CC \u062A|\u0632\u0627\u062F|\u0627\u0632\u0627| \u0627\u0632|\u0646\u062F\u06D2|\u06BA \u06A9|\u0627\u0631 | \u0648\u06CC|\u06D2 \u06A9|\u0626\u06D2 | \u0627\u0646|\u06BB \u062F|\u0646\u06C1 | \u06A9\u0631|\u0627\u0648\u0646|\u06D2 \u0648|\u062F\u06CC\u0627|\u06CC \u062F|\u06BA \u0627|\u06D2 \u0628|\u0648\u06CC\u0633|\u0648\u06BB |\u06CC \u0646| \u06C1\u0648|\u062A\u06CC |\u06CC \u06D4| \u0646\u06C1|\u06CC \u0627|\u06CC\u0646\u062F|\u0648 \u0684|\u0622\u067E\u06BB| \u0622\u067E|\u0627 \u0648|\u06D2 \u062C| \u06A9\u0646|\u06D2 \u0646|\u0646\u062F\u06CC|\u062A \u062F|\u06D2 \u062D|\u06CC \u06A9|\u0626\u06CC |\u0645\u0644\u06A9|\u06CC\u062A\u06D2|\u0646 \u06D4|\u062A\u06BE\u06CC| \u062A\u06BE|\u0648\u0646 |\u06BA \u0645| \u0628\u0686|\u06D4 \u0627|\u0646\u0648\u06BA|\u06A9\u0646\u0648|\u06BB\u06D2 |\u0627\u0631\u06CC|\u0627 \u0627|\u06D2 \u06C1|\u0644 \u062A| \u0684\u0626|\u0648\u0642 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0644 \u06A9|\u062E\u0644\u0627| \u062C\u06CC|\u0644\u06A9 |\u062F\u0627\u0631|\u06CC\u062A |\u06A9\u0631\u06BB|\u0627\u0646\u06C1|\u06A9\u0648 |\u06C1\u06A9\u0648| \u06C1\u06A9|\u0646 \u0627|\u0645\u0644 | \u0648\u0633|\u06BA \u0648|\u067E\u06BB\u06D2| \u062A\u0639|\u06CC \u0645|\u0627\u0641 |\u06D2 \u062E|\u0646\u0648\u0646|\u0642\u0646\u0648| \u0642\u0646| \u0644\u0648|\u06D4 \u06A9|\u0631\u06CC |\u0644\u06D2 |\u062A\u0627 |\u06CC\u062A\u0627| \u0642\u0648| \u0686\u0627|\u06C1\u0627\u06BA|\u0684\u0626\u06D2|\u0642 \u062A|\u0627\u06CC\u06C1|\u0631\u06BB |\u06D2 \u062F|\u0631 \u06A9| \u0648 |\u0644\u0627\u0641| \u062E\u0644| \u062C\u0648|\u06CC \u0648|\u0627\u0648 |\u06C1\u0648 |\u0626\u0648 |\u0686\u0626\u0648|\u0628\u0686\u0626|\u06CC\u0631 |\u06C1\u0648\u0648|\u0627 \u0645|\u06CC \u062C|\u0627\u0644\u0627|\u06CC\u0646 | \u062C\u0627|\u0645\u06CC |\u0646\u06C1\u0627|\u0627\u0646 |\u0627\u062A |\u0633\u06B1\u062F| \u0633\u06B1|\u06CC\u0628 |\u0633\u06CC\u0628|\u0648\u0633\u06CC| \u0634\u0627|\u0628 \u062F|\u06CC\u0648\u06BB|\u0627\u0645 |\u0627\u0648\u06BB|\u06D2 \u062A|\u06BB \u06A9| \u0645\u0637|\u06BA \u062A| \u0648\u0646| \u06A9\u0645|\u0646 \u062F|\u0631\u06A9\u06BE| \u0631\u06A9|\u06BB\u06CC |\u06BA \u0622|\u0631\u06CC\u0627|\u06CC \u06C1|\u0627\u062F |\u06CC\u0627\u062F|\u0639\u0644\u0627|\u0631 \u06C1|\u06BA \u0633|\u06CC \u062D|\u062C\u06BE\u06CC|\u0627\u0626\u062F|\u06C1\u06CC |\u0644\u0648\u06A9| \u068B\u0648| \u0633\u0645| \u0633\u0627| \u0645\u0646| \u0645\u0639|\u0628\u0642 |\u0627\u0628\u0642|\u0637\u0627\u0628|\u0645\u0637\u0627|\u06BE\u06CC\u0648|\u06BA \u0641|\u06C1\u0646 | \u06C1\u0646|\u062C\u0648 |\u0648 \u06A9|\u06BA \u0634|\u0631 \u062A|\u06A9\u0627\u0631|\u0645 \u062F|\u06BE\u06CC\u0627| \u067B\u0627|\u063A\u06CC\u0631|\u0648 \u0644|\u0648\u0626\u06CC|\u062C\u06CC\u0627|\u0648\u0627\u0645|\u0642\u0648\u0627|\u06CC \u0633| \u062C\u06BE|\u0644 \u0627|\u0642\u0648\u0645| \u0633\u06CC|\u0630\u06C1\u0628|\u0645\u0630\u06C1| \u0645\u0630|\u0627\u06D2 | \u0627\u06D2|\u062F\u0646 |\u0627 \u062A|\u0633\u0627\u0646|\u0646\u0633\u0627|\u0627\u0646\u0633|\u0631\u06D2 |\u0644\u06CC\u0645|\u0639\u0644\u06CC|\u062A\u0639\u0644|\u0627\u0645\u0644|\u06C1 \u062F|\u06D2 \u0631|\u062F \u0627|\u06A9\u0645 |\u06CC\u06C1\u0648|\u0641\u0627\u0626|\u0686 \u0627| \u06A9\u06BE|\u0645 \u062A|\u0631\u0627 |\u0648\u0631\u0627|\u067E\u0648\u0631|\u06BA \u0628|\u0642 \u062F|\u06D2 \u0642|\u0648\u06A9\u0648|\u06A9\u06BE\u06CC|\u0627 \u06A9|\u0648 \u062F|\u06D2 \u0630|\u067E\u06BB\u06CC|\u0628\u0646\u062F| \u0641\u0631|\u06A9\u0648\u0626|\u0627\u0645\u06CC|\u06CC \u06CC|\u0627\u0626\u06CC|\u0644\u0627\u0642|\u0627\u06CC\u06BA|\u06C1 \u0627| \u0646\u0638|\u0633\u0645\u0627|\u0648\u0645\u06CC|\u06CC\u060C |\u06D2 \u0633|\u062A \u0648|\u06BE\u06CC\u0646|\u06D2 \u0639|\u06CC\u0645 |\u0633\u06C1\u0648| \u0633\u06C1",pbu:" \u062F | \u0627\u0648|\u0627\u0648 |\u067E\u0647 | \u067E\u0647|\u064A\u06D4 | \u062D\u0642|\u0686\u06D0 | \u0686\u06D0|\u0631\u0647 |\u064A \u0627|\u06D0 \u062F| \u0647\u0631|\u0646\u0647 |\u0647\u0631 |\u062D\u0642 | \u0685\u0648|\u0648\u06A9 |\u0685\u0648\u06A9|\u0648 \u0627|\u0647 \u062F|\u0647 \u0627|\u06D4 \u0647|\u0647 \u0648| \u0634\u064A| \u0644\u0631|\u064A \u0686|\u0648 \u062F|\u0631\u064A |\u0644\u0631\u064A|\u0642 \u0644| \u06A9\u069A|\u0648\u064A |\u069A\u06D0 |\u06A9\u069A\u06D0|\u0647 \u06A9|\u063A\u0647 |\u0644\u0648 |\u0631 \u0685|\u0633\u0631\u0647| \u0633\u0631|\u0647 \u067E| \u067C\u0648|\u0648 \u067E|\u0644\u0647 |\u064A\u062A |\u067C\u0648\u0644|\u064A\u0627 |\u06A9\u0693\u064A| \u06A9\u0648|\u062E\u0647 |\u064A\u060C |\u062F\u064A | \u0644\u0647| \u0627\u0632|\u062F \u0645| \u0647\u064A| \u0648\u0627| \u064A\u0627| \u0685\u062E|\u0627\u0632\u0627|\u062F \u0627|\u0648\u0644\u0648|\u0647 \u062A|\u0685\u062E\u0647| \u06A9\u0693|\u0648\u0644 |\u0647\u063A\u0647|\u0647 \u0634|\u064A \u062F| \u0647\u063A|\u06A9\u0648\u0644|\u0632\u0627\u062F|\u0646\u0648 | \u0648\u064A|\u0648 \u064A|\u0647 \u0628|\u0634\u064A\u06D4|\u062F\u06D0 |\u064A\u0648 | \u062F\u064A|\u062A\u0647 |\u062E\u067E\u0644| \u067E\u0631|\u0627\u062F |\u062F \u062F|\u06A9 \u062D| \u062A\u0648|\u0647 \u0645|\u06AB\u0647 |\u0647 \u0647|\u0642\u0648\u0642|\u062D\u0642\u0648|\u0648 \u0645|\u0647 \u062D|\u062F \u0647| \u062A\u0631| \u0645\u0633|\u0634\u064A | \u0646\u0647|\u0693\u064A\u06D4|\u0646\u064A |\u062F \u067E|\u0648\u0627\u062F|\u06D0 \u067E|\u0627\u062F\u064A|\u0648\u0644\u0646| \u064A\u0648|\u062F \u062A|\u0648\u0646\u0648|\u0648\u06AB\u0647|\u064A \u0648|\u0644\u064A | \u062F\u0627|\u064A\u062F | \u0628\u0627|\u062A\u0648\u0646| \u062E\u067E|\u064A \u067E|\u062A\u0648\u06AB|\u0627\u0631 |\u0627\u0646\u062F|\u064A\u0648\u0627|\u06D0 \u0648|\u062F\u0627\u0646| \u0628\u0631|\u0693\u064A | \u0639\u0645|\u0627\u0646\u0647| \u062F\u0647|\u064A\u0685 |\u0647\u064A\u0685|\u0627\u0645\u064A|\u0644\u0646\u064A|\u0628\u0639\u064A|\u0689\u0648\u0644| \u0689\u0648|\u0647 \u0644|\u0627\u064A\u062F|\u0628\u0627\u064A|\u0627\u062A\u0648|\u0647 \u06AB| \u062A\u0627|\u067E\u0644 | \u0645\u0644|\u0627\u064A\u062A|\u0648\u0645 |\u0648\u0646 | \u0644\u0627|\u0647\u064A\u0648| \u0634\u0648| \u062F\u063A|\u0645 \u062F|\u062F\u0647 |\u06D0 \u0627|\u0627\u0646 | \u062A\u0647|\u06A9\u0627\u0631|\u062A\u0648 |\u0645\u064A |\u0627\u0631\u0647|\u0627\u0648\u064A|\u0633\u0627\u0648|\u0645\u0633\u0627|\u0646\u0648\u0646|\u062F\u0647\u063A|\u0648 \u062A|\u064A \u0634|\u0627\u0646\u0648| \u0645\u062D|\u064A\u0646 |\u0627\u062E\u0644| \u06AB\u067C|\u0634\u0648\u064A|\u062F\u063A\u0647|\u0648 \u062D|\u0648\u064A\u060C|\u0646\u064A\u0632|\u0633\u064A |\u0627\u0633\u064A|\u0648\u0646\u062F|\u0642\u0648 |\u0648\u0642\u0648|\u0648 \u06A9|\u0648\u0646\u0647|\u0648\u0645\u064A| \u0648\u06A9|\u064A \u062A| \u0627\u0646|\u0642\u0627\u0646|\u0646\u062F\u06D0|\u0648 \u0631|\u06A9 \u062F|\u0647 \u064A|\u0645\u064A\u0646|\u067E\u0631 |\u067C\u0647 |\u0644\u0627\u0645|\u063A\u0648 |\u0647\u063A\u0648|\u062F \u067C|\u0648 \u0647|\u0644 \u062A|\u0644\u06D2 |\u0648\u0644\u06D2|\u0648\u0648\u0646|\u06A9\u064A |\u0631\u0648 |\u0646 \u06A9|\u0645\u0648\u0645|\u0648\u06A9\u0693|\u067E\u0627\u0631|\u0646 \u0634|\u0645\u0646 | \u0646\u0648| \u0648\u0693| \u0642\u0627|\u06D0 \u0686| \u0648\u0633|\u0685 \u0685|\u0634\u062E\u0635| \u0634\u062E|\u0698\u0648\u0646| \u0698\u0648|\u062A\u0631 |\u06AB\u067C\u0647|\u0648 \u0685|\u0647\u0645 |\u0639\u0642\u064A|\u0631\u062A\u0647| \u0648\u0631|\u0628\u0644 | \u0628\u0644|\u0648 \u0628|\u0647 \u0633|\u069A\u0648\u0648| \u069A\u0648| \u06A9\u0627|\u06D0 \u06A9|\u0648 \u0633|\u0627\u062F\u0647|\u0648\u0646\u06A9| \u063A\u0648|\u062F\u0648 |\u0648 \u0646|\u062A \u06A9|\u0645\u0644 |\u0639\u0645\u0648|\u0644 \u0647| \u067E\u064A|\u0648\u0633\u064A|\u0693\u0627\u0646|\u0648\u0693\u0627|\u064A\u0632 |\u062E\u0635\u064A|\u064A \u0645|\u0627 \u0628|\u0627\u062F\u0627|\u0647 \u0646|\u062E\u0644\u064A|\u0648\u0627\u062E|\u062F\u064A\u0648|\u060C \u062F|\u062F \u0642| \u0647\u0645|\u0627 \u062F| \u0628\u064A|\u062A\u0628\u0639| \u062A\u0628|\u0647 \u0686| \u0639\u0642|\u067E\u0644\u0648|\u0648 \u0644| \u0631\u0627|\u062F \u0628|\u0631\u0627\u064A| \u062F\u062E|\u0646\u06D0 |\u0646\u06A9\u064A|\u062A \u062F|\u0627\u0628\u0639| \u0645\u0642|\u062F \u062E|\u0648\u0631\u0647|\u0634\u0631\u0627| \u0634\u0631|\u0631 \u0645|\u0631\u0633\u0631|\u062A\u0627\u0645|\u0647 \u067C| \u0645\u0646|\u0637\u0647 |\u0633\u0637\u0647|\u0627\u0633\u0637|\u0648\u0627\u0633|\u0644\u06D0 | \u0627\u0633|\u06D4 \u062F|\u0628\u0631\u062E|\u06D0 \u0646"},Devanagari:{hin:"\u0915\u0947 |\u092A\u094D\u0930| \u092A\u094D| \u0915\u093E| \u0915\u0947| \u0964 |\u0914\u0930 | \u0914\u0930|\u0915\u093E | \u0915\u094B|\u0915\u093E\u0930|\u093E\u0930 |\u0924\u093F |\u092F\u093E |\u0915\u094B |\u0928\u0947 |\u094B\u0902 |\u093F\u0915\u093E|\u094D\u0930\u0924| \u0939\u0948| \u0915\u093F|\u0902 \u0915|\u0939\u0948 |\u0927\u093F\u0915|\u0935\u094D\u092F|\u0905\u0927\u093F| \u0905\u0927|\u094D\u0924\u093F| \u0938\u092E|\u094D\u092F\u0915|\u093F \u0915|\u0915\u094D\u0924|\u093E \u0905|\u0915\u0940 |\u093E \u0915| \u0935\u094D|\u0947\u0902 | \u0939\u094B|\u092F\u0915\u094D|\u0938\u0940 |\u0938\u0947 |\u0947 \u0915| \u092F\u093E| \u0915\u0940|\u092E\u0947\u0902|\u0928\u094D\u0924| \u092E\u0947|\u0924\u094D\u092F|\u0948 \u0964|\u0924\u093E |\u0930\u0924\u094D|\u0915\u094D\u0937|\u0947\u0915 |\u092F\u0947\u0915|\u094D\u092F\u0947|\u093F\u0915 |\u0930 \u0939|\u092D\u0940 |\u0915\u093F\u0938| \u091C\u093E| \u0938\u094D|\u0915 \u0935|\u093E \u091C|\u093F\u0938\u0940|\u092E\u093E\u0928| \u0935\u093F|\u0930 \u0938|\u0924\u094D\u0930|\u0940 \u0938|\u0964 \u092A| \u0915\u0930|\u094D\u0930\u093E|\u0917\u093E |\u093F\u0924 | \u0905\u092A| \u092A\u0930|\u0938\u094D\u0935|\u0940 \u0915| \u0938\u0947|\u093E \u0938|\u094D\u092F | \u0905\u0928|\u094D\u0924\u094D|\u093F\u092F\u093E|\u093E \u0939| \u0938\u093E|\u0928\u093E |\u094D\u0924 |\u092A\u094D\u0924|\u0938\u092E\u093E|\u093E\u0928 |\u0930 \u0915|\u093E\u092A\u094D|\u0924\u0928\u094D| \u092D\u0940| \u0909\u0938|\u0930\u093E\u092A|\u0935\u0924\u0928|\u094D\u0935\u0924|\u0930\u094B\u0902|\u0935\u093E\u0930|\u0947 \u0938|\u0925\u093E |\u0939\u094B |\u0947 \u0905|\u093E \u0964|\u0928 \u0915| \u0928 |\u0926\u0947\u0936| \u0930\u093E|\u0937\u093E |\u0905\u0928\u094D|\u0924 \u0939|\u094D\u0937\u093E|\u094D\u0935\u093E|\u091C\u093E\u090F|\u0940 \u092A|\u0915\u0930\u0928|\u093E \u092A|\u0905\u092A\u0928|\u0937\u094D\u091F| \u0938\u0902|\u0947 \u0935|\u0939\u094B\u0917|\u093F\u0935\u093E|\u091F\u094D\u0930|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0938\u0915\u0947| \u092E\u093E|\u0913\u0902 |\u093E\u0913\u0902|\u0930\u0940 |\u0915 \u0938|\u0947 \u092A| \u0928\u093F|\u0940\u092F |\u0930\u0915\u094D|\u094B \u0938|\u093E\u090F\u0917|\u0930\u0928\u0947| \u0907\u0938|\u0935 \u0915|\u092A\u0930 |\u0930\u0924\u093E|\u0930 \u0905| \u0938\u092D|\u0924\u0925\u093E| \u0924\u0925| \u0910\u0938|\u0930\u093E |\u092A\u0928\u0947|\u094D\u0930\u0940|\u093F\u0915\u094D|\u0915\u093F\u092F|\u093E \u0935|\u092E\u093E\u091C|\u0902 \u0914|\u0930 \u0909|\u0926\u094D\u0927|\u0938\u092D\u0940|\u0936\u094D\u092F| \u091C\u093F|\u093E\u0928\u0947|\u093E\u0930\u094D|\u093E\u0930\u093E|\u0926\u094D\u0935| \u0926\u094D|\u090F\u0917\u093E|\u0938\u092E\u094D|\u0947\u0936 |\u093F\u090F |\u093E\u0935 |\u0930 \u092A| \u0926\u0947|\u094D\u0924\u0930|\u093E \u0914|\u093E\u0930\u094B|\u092F\u094B\u0902|\u092A\u0930\u093E|\u092A\u0942\u0930|\u091A\u093F\u0924|\u094D\u0927 |\u0930\u0942\u092A| \u0930\u0942| \u0938\u0941| \u0932\u093F|\u0924 \u0915|\u094B \u092A|\u0902 \u0938|\u0947 \u0932|\u0936\u093F\u0915| \u0936\u093F|\u0935\u093E\u0939|\u0947 \u0914|\u091C\u094B |\u0930\u093E\u0927|\u091C\u093F\u0938|\u0942\u0930\u094D|\u0940 \u092D|\u0942\u092A |\u094B\u0917\u093E|\u0938\u094D\u0925|\u0930\u0940\u092F|\u0924\u093F\u0915|\u094D\u0930 |\u0964 \u0907|\u0907\u0938 | \u0909\u0928|\u0932\u0947 |\u0947 \u092E|\u0932\u093F\u090F|\u092E \u0915|\u0915\u0924\u093E|\u0947 \u092F| \u091C\u094B|\u0928 \u092E|\u0905\u092A\u0930| \u092A\u0942|\u094B \u0915|\u093E \u0909|\u093E\u0939 |\u0928\u0942\u0928|\u093E\u0928\u0942|\u0917\u0940 |\u0926\u0940 |\u093E\u0930\u0940|\u0902 \u092E|\u0964 \u0915|\u0924\u0930\u094D|\u0940 \u0930|\u0936 \u0915|\u092A\u0930\u093F|\u0938\u094D\u0924|\u094B\u0908 |\u0915\u094B\u0908|\u0930\u094D\u092F|\u0940 \u0905|\u0939\u093F\u0924|\u092D\u093E\u0935| \u092D\u093E|\u0924\u093E\u0913|\u093E\u0938 |\u0938\u093E\u092E|\u0935\u093F\u0915|\u0935\u093F\u0935|\u092E\u094D\u092E| \u0938\u0915|\u0915\u0930 |\u093E\u0928\u093E|\u0927 \u0915|\u0928\u093F\u0915|\u092F \u0915|\u0909\u0938\u0915|\u0915\u0943\u0924| \u0958\u093E|\u0928 \u0938|\u091C\u0940\u0935|\u094D\u092F\u093E|\u0930\u0915\u093E|\u094D\u0930\u0915|\u093E\u091C |\u0928\u094D\u092F|\u094D\u092E |\u0930\u094D\u0923|\u0958 \u0939|\u0939\u0958 | \u0939\u0958|\u0940 \u092E|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093E\u092E\u093E|\u0915 \u0914|\u092E\u093F\u0932|\u0947\u0928\u0947|\u0932\u0947\u0928| \u0932\u0947|\u092F\u0947 |\u094B \u0905|\u0947 \u091C|\u0930\u093F\u0935|\u092E\u092F |\u0938\u092E\u092F|\u0935\u0936\u094D|\u0906\u0935\u0936| \u0906\u0935|\u0910\u0938\u0940|\u093E\u0927 |\u0930 \u0926|\u0930\u094D\u0935|\u0938\u093E\u0930|\u092A \u0938|\u092C\u0928\u094D| \u0938\u0939|\u093F\u0927\u093E|\u0935\u093F\u0927|\u0940 \u0928|\u0942\u0928 |\u0958\u093E\u0928",mar:"\u094D\u092F\u093E|\u092F\u093E |\u0924\u094D\u092F|\u092F\u093E\u091A|\u091A\u093E |\u0923\u094D\u092F|\u093E\u091A\u093E| \u0935 |\u0915\u093E\u0930|\u092A\u094D\u0930| \u092A\u094D|\u093F\u0915\u093E|\u0927\u093F\u0915|\u093E\u0930 | \u0905\u0927|\u0905\u0927\u093F|\u091A\u094D\u092F|\u0906\u0939\u0947| \u0906\u0939|\u093E \u0905|\u0939\u0947 |\u093E \u0915|\u093E\u0938 |\u0935\u093E |\u094D\u092F\u0947|\u094D\u0930\u0924| \u0938\u094D|\u0924\u093E |\u093E \u0938| \u0905\u0938| \u0915\u0930|\u0938\u094D\u0935| \u0915\u093E|\u0932\u094D\u092F|\u0930\u0924\u094D|\u093E\u0939\u093F|\u0915\u094B\u0923| \u0915\u094B|\u093F\u0915 |\u092F\u0947\u0915|\u094D\u0935\u093E|\u093E \u0935| \u0924\u094D|\u0930 \u0906|\u094D\u092F |\u0924\u094D\u0930|\u0947\u0915\u093E|\u0915\u094D\u0937|\u093E \u0928| \u0938\u0902|\u093E\u092E\u093E|\u093E\u091A\u094D|\u0902\u0935\u093E|\u093F\u0902\u0935|\u0915\u093F\u0902| \u0915\u093F|\u093E\u0924 |\u0937\u094D\u091F|\u0915\u093E\u0938| \u092F\u093E|\u092F\u093E\u0902|\u093E\u0902\u091A|\u0930\u094D\u092F|\u092E\u093F\u0933| \u092E\u093F| \u0938\u093E|\u0935\u094D\u092F|\u094B\u0923\u0924|\u0928\u0947 |\u0947 \u092A|\u0915\u093E\u092E| \u0938\u092E|\u0902\u0924\u094D|\u092F\u0947 | \u0930\u093E|\u0938\u092E\u093E|\u0924\u0902\u0924|\u0915\u0930\u0923|\u093E \u0906|\u0947 \u0915|\u0939\u093F |\u0947 \u0938|\u0928\u093E |\u093F\u0933\u0923|\u0942\u0928 |\u093E \u092A|\u091F\u094D\u0930|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0940\u092F |\u0935 \u0938|\u0915\u094D\u0924|\u092E\u093E\u0928|\u0930\u094D\u0935| \u0906\u092A|\u0933\u0923\u094D|\u094D\u0930\u094D|\u093E\u0924\u0902|\u0935\u093E\u0924|\u091A\u0947 | \u0935\u093F|\u094D\u0937\u0923|\u0930\u0923\u094D| \u0926\u0947| \u0935\u094D|\u0906\u092A\u0932|\u0939\u0940 |\u093E\u0930\u094D|\u0928\u092F\u0947| \u0928\u092F|\u092E\u093E |\u092F\u093E\u0938| \u091C\u093E|\u0932\u0947\u0932| \u0928\u093F|\u0947 \u0905| \u092A\u093E|\u093E \u092E|\u0932\u0947 |\u093E\u0939\u0940|\u092C\u0902\u0927|\u0947 \u0935|\u094D\u092F\u0915| \u092E\u093E|\u0936\u093F\u0915| \u0936\u093F|\u0926\u0947\u0936|\u093E \u0926|\u092E\u093E\u091C|\u094D\u0930\u0940|\u0932\u0940 |\u093E\u0928 |\u093E\u0902\u0928|\u092A\u0932\u094D| \u0939\u094B|\u093E \u0939|\u0937\u0923 |\u091C\u0947 |\u093F\u091C\u0947|\u0939\u093F\u091C|\u092A\u093E\u0939|\u093E\u0930\u093E|\u092F\u093E\u0924|\u0938\u0930\u094D| \u0938\u0930|\u0930\u093E\u0902|\u0905\u0938\u0932|\u0902\u092C\u0902|\u0938\u0902\u092C|\u093F\u0915\u094D|\u0940 \u092A|\u0902\u091A\u094D|\u0930\u0915\u094D|\u0923\u0924\u094D| \u0906\u0923|\u0932\u093E |\u0938\u094D\u0925|\u0930\u0940\u092F|\u0940\u0924 |\u0902\u0928\u093E|\u0924 \u0935|\u094D\u0935 |\u0915 \u0935|\u0923\u0947 |\u093E\u091A\u0947|\u0928 \u0915|\u0924 \u0915|\u0930\u0924\u093E|\u094D\u0930\u093E|\u092F\u093E\u0939|\u094D\u0924 |\u091A\u0940 |\u092F \u0915|\u0926\u094D\u0927|\u094D\u0935\u0924|\u092F\u0915\u094D|\u0923\u093F |\u0906\u0923\u093F|\u0938 \u0938|\u0902\u0927\u093E|\u0915 \u0938|\u091A\u094D\u091B|\u092F \u0905|\u0924 \u0938|\u0940\u0928\u0947|\u094B\u0923\u093E|\u0915\u0930\u0924|\u0924\u094D\u0935|\u0940\u0932 |\u0940 \u0905|\u0938\u093E\u0930|\u0930 \u0935|\u092D\u093E\u0935|\u0935 \u0924|\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u0947 \u0924|\u0947 \u091C|\u092F\u093E\u092F|\u0902\u091A\u093E|\u0947\u0932\u094D|\u093E\u0928\u0947|\u0947\u0923\u094D|\u0915 \u0906|\u0915\u094D\u0915|\u0939\u0915\u094D| \u0939\u0915|\u0923 \u092E|\u0902\u0930\u0915|\u0938\u0902\u0930|\u0928\u094D\u092F|\u093E\u092F\u0926|\u093E \u0924|\u0924 \u0906| \u0909\u092A|\u0935\u0938\u094D|\u093F\u0935\u093E|\u0947\u0936\u093E|\u0938\u093E\u092E|\u0947 \u092F|\u0947 \u0906|\u0940 \u0935|\u0935 \u092E|\u0924\u0940\u0928|\u0935 \u0906|\u0927\u094D\u092F| \u0905\u0936|\u0927\u093E\u0924|\u0915\u0943\u0924|\u094D\u0915 |\u0926\u094D\u092F|\u093F\u0924 |\u0938\u0932\u0947|\u0947\u0936 |\u0924\u094B |\u0947\u0932 |\u0924\u0940 |\u094D\u0924\u0940|\u0905\u0938\u0947|\u0907\u0924\u0930| \u0907\u0924|\u0938\u094D\u0924|\u0930\u094D\u0923|\u093E \u092C|\u0947\u0932\u0947| \u0915\u0947|\u0939\u0940\u0930|\u091C\u093E\u0939|\u093E \u091C|\u0947\u0924 |\u0942\u0930\u094D|\u092A\u0942\u0930|\u0947\u091A | \u0935\u093E|\u093E\u091C\u093E|\u0940 \u0938|\u0936\u093E |\u092F \u0935| \u0928\u094D|\u092F\u093E\u0935|\u0926\u094D\u0926|\u094D\u0927 |\u0930\u0942\u0928|\u092F\u0926\u094D|\u0915\u093E\u092F|\u093E \u0936|\u0917\u0923\u094D|\u0915 \u0915|\u0930\u093E\u0927| \u0936\u093E|\u092F\u0924\u094D|\u0932 \u0905|\u094D\u092F\u0935|\u0940 \u0915|\u093E\u0935 |\u093E \u092F|\u0924\u094D\u0924|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0930\u0923\u093E| \u0927\u0930|\u093E \u0927|\u092D\u0947\u0926| \u092C\u093E|\u0930\u0915\u093E|\u094D\u0930\u0915|\u0915\u0947\u0932|\u093F \u0935|\u093F\u0937\u094D|\u0924\u0940\u0932|\u092F\u094B\u0917|\u0938\u093E\u0927|\u093E\u0902\u0924|\u0935\u093F\u0935|\u0936\u094D\u0930| \u0927\u0947| \u092E\u0941|\u0935\u0924\u0903",mai:"\u093E\u0915 |\u092A\u094D\u0930|\u0915\u093E\u0930| \u092A\u094D|\u093E\u0930 |\u093F\u0915\u093E|\u094D\u092F\u0915|\u0927\u093F\u0915|\u0915 \u0905|\u094D\u0930\u0924|\u094D\u0924\u093F|\u0935\u094D\u092F| \u0905\u0927|\u0947\u0901 |\u0905\u0927\u093F|\u093F\u0915 | \u0935\u094D|\u0906\u02BC | \u0906\u02BC|\u0915\u094D\u0924|\u092F\u0915\u094D|\u0924\u093F\u0915|\u0915\u0947\u0901|\u0915 \u0935|\u092C\u093E\u0915|\u0915 \u0938|\u091B\u0948\u0915| \u091B\u0948|\u0924\u094D\u092F|\u092E\u0947 |\u0947\u0915 | \u0938\u092E|\u0915\u094D\u0937|\u0939\u093F |\u0930\u0924\u094D|\u0930 \u091B|\u092F\u0947\u0915|\u094D\u092F\u0947|\u0928\u094D\u0924|\u0935\u093E |\u093F\u0915\u0947|\u0915\u0964 |\u0948\u0915\u0964|\u0964 \u092A| \u0905\u092A| \u0938\u094D| \u0935\u093F| \u091C\u093E|\u093F\u0924 |\u0938\u0901 | \u0939\u094B|\u0915\u094B\u0928| \u0915\u094B|\u0924\u094D\u0930|\u0938\u094D\u0935| \u0935\u093E|\u0915 \u0906|\u0937\u094D\u091F| \u0915\u0930|\u0905\u092A\u0928|\u092E\u093E\u0928| \u0915\u093E| \u0905\u0928|\u0924\u093F |\u094D\u0924\u094D|\u0928\u094B |\u0928\u0939\u093F| \u092A\u0930|\u091F\u094D\u0930|\u094D\u092F | \u090F\u0939|\u093F \u0915|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937| \u0930\u093E|\u0938\u092E\u093E|\u094B\u0928\u094B|\u0932 \u091C| \u0928\u0939|\u0924\u093E\u0915|\u093E\u0930\u094D|\u092A\u0928 |\u0924\u0928\u094D|\u0935\u0924\u0928|\u094D\u0935\u0924|\u094D\u0937\u093E| \u0915\u090F| \u0938\u093E|\u094D\u0930\u0940| \u0928\u093F|\u093E \u0906|\u093F\u0935\u093E| \u0938\u0902| \u0926\u0947|\u091C\u093E\u090F|\u0940\u092F |\u0915\u0930\u092C|\u0925\u093E |\u090F\u092C\u093E|\u093E \u092A|\u0928\u093E |\u094D\u0935\u093E|\u0926\u0947\u0936|\u0924\u0964 |\u0930\u0915 |\u0915 \u0939|\u0901 \u0905| \u0938\u092D| \u0906 |\u0924 \u0915|\u091A\u093F\u0924|\u094D\u0924 |\u0935\u093E\u0930|\u0924\u093E |\u093E\u0930\u0915|\u092E\u093E\u091C|\u093E \u0938|\u0930\u0940\u092F|\u0928\u094D\u092F|\u0930\u0924\u093E|\u093E\u0928 |\u094D\u0930\u093E|\u094D\u092F\u093E|\u0930\u0915\u094D|\u093E\u0930\u0923|\u092A\u0930\u093F|\u090F\u0932 |\u0915\u090F\u0932|\u0905\u0928\u094D|\u0930\u092C\u093E|\u0915 \u092A|\u0913\u0930 |\u0906\u0913\u0930| \u0906\u0913|\u0905\u091B\u093F| \u0905\u091B|\u093F\u0930\u094D|\u093E\u0928\u094D|\u0928\u0915 |\u0939\u094B\u090F|\u0915\u0930 |\u0927\u093E\u0930|\u0938\u094D\u0925|\u093E \u0905|\u093F\u092E\u0947|\u0930 \u0906|\u090F\u0939\u093F| \u090F\u0915|\u0947 \u0938|\u0924\u0925\u093E| \u0924\u0925| \u092E\u093E|\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u092A\u094D\u0924|\u0930\u094D\u0935|\u0928\u093F\u0930|\u091A\u094D\u091B|\u0930\u094D\u092F|\u0901 \u0938|\u0915 \u0915|\u0939\u094B |\u093E\u0939\u093F|\u090F\u0924\u0964|\u0930 \u092A|\u093E\u092E\u093E|\u0938\u093E\u092E|\u0937\u093E |\u02BC \u0938|\u0901 \u090F|\u0948\u0915 |\u0926\u094D\u0927|\u0930 \u0905|\u0915 \u091C|\u0938\u094D\u0924|\u093E\u092A\u094D|\u0901 \u0915| \u0938\u0915|\u092F\u0915 |\u0915\u093E\u0928|\u0939\u0928 |\u090F\u0939\u0928|\u0947\u0932 |\u094B\u090F\u0924|\u0924 \u0906|\u093E \u0935|\u0964 \u0915|\u094D\u0924\u0930|\u093E\u090F\u0924|\u094D\u0930\u0915|\u0939\u0941 |\u0915 \u0909|\u092A\u0942\u0930|\u0935\u093F\u0935|\u02BC \u0905|\u091B\u093F | \u0932\u0947|\u0928 \u092A|\u093E\u0938 |\u0930\u093E\u092A|\u0927\u0915 |\u092A\u090F\u092C| \u092A\u090F|\u0930\u093E |\u092F\u0924\u093E|\u0930\u0942\u092A|\u0928 \u0935| \u0915\u0947|\u0937\u093E\u0915|\u092F \u092A|\u0924 \u0939|\u091C\u093E\u0939| \u0913 |\u092D\u093E\u0935|\u092A\u0930 |\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u0938\u092E\u094D|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0942\u0930\u094D|\u0930\u0924\u093F| \u0926\u094B|\u0938\u092D\u0915|\u0964 \u0938| \u091C\u0928|\u0938\u092D |\u092C\u093E\u0927|\u0905\u0928\u0941|\u093F\u0938\u0901| \u0938\u0939|\u0901 \u0935|\u090F \u0938|\u0930\u093F\u0935|\u0924\u0941 |\u0947\u0924\u0941|\u0939\u0947\u0924| \u0939\u0947|\u093E\u0927 |\u0947\u092C\u093E|\u0928 \u0938|\u093F\u0937\u094D|\u0930\u093E\u0927| \u0905\u0935|\u093F\u0924\u094D|\u0935\u093E\u0938|\u091A\u093E\u0930| \u0909\u091A|\u093E\u0930\u093E|\u0928 \u0915|\u0935\u0915 |\u093E \u0915|\u0928\u0942\u0928|\u093E\u0928\u0942|\u090F\u0924 |\u0930\u0940 |\u0947\u0913 |\u0915\u0947\u0913|\u0930\u0923 |\u094D\u0930\u0938|\u093F \u0926|\u0913 \u0935| \u092D\u0947|\u0928\u0939\u0941|\u094B\u0928\u0939|\u094D\u0925\u093F|\u092A\u0924\u094D|\u092E\u094D\u092A|\u0930\u093E\u091C| \u092D\u093E|\u0939\u093F\u092E| \u0939\u0915|\u093E\u092E\u0947|\u094D\u0923 |\u0930\u094D\u0923|\u0939\u093E\u0930|\u093F \u0938|\u0915 \u0926|\u0928 \u0905|\u0924 \u0905|\u0932\u0947\u092C| \u0905\u092D|\u093F\u0936\u094D|\u091C\u0915 |\u093E\u091C\u0915|\u0928 \u0906|\u0935\u093E\u0939|\u0915\u093E\u091C|\u0936\u094D\u092F|\u0935\u0938\u094D|\u0913\u0939\u093F| \u0913\u0939|\u092F\u094B\u0917|\u0964 \u090F|\u0915\u090F |\u0947 \u0913|\u0905\u092A\u0930",bho:" \u0915\u0947|\u0915\u0947 |\u0947 \u0915|\u093E\u0930 |\u0915\u093E\u0930|\u093F\u0915\u093E|\u0927\u093F\u0915|\u0905\u0927\u093F| \u0905\u0927|\u0913\u0930 |\u0906\u0913\u0930| \u0906\u0913|\u0947 \u0905|\u0947 \u0938|\u093E \u0915| \u0938\u0902|\u093F\u0915 |\u0930 \u0939|\u093E \u0938| \u0939\u094B|\u0930 \u0938|\u0947\u0902 |\u092E\u0947\u0902| \u092E\u0947| \u0915\u0930| \u0938\u0947|\u0928\u094B |\u0915\u094D\u0937|\u0938\u0947 | \u0915\u093E|\u0964 \u0938|\u0916\u0947 |\u093E\u0964 |\u0930\u093E | \u0938\u092E| \u0938\u092C|\u094D\u0930\u093E| \u0938\u0915|\u0930 \u0915|\u0928 \u0915|\u0935\u0947 |\u094C\u0928\u094B|\u0915\u094C\u0928| \u0915\u094C|\u091A\u093E\u0939| \u091A\u093E| \u092C\u093E|\u092A\u094D\u0930| \u092A\u094D|\u0925\u093E |\u093F \u0915|\u0924\u093F | \u091C\u093E| \u0938\u093E|\u0947 \u0906|\u092A\u0928 |\u0915\u0930\u0947|\u0924\u093E |\u0939\u094B\u0916|\u0924 \u0915|\u0947\u0964 |\u0947 \u092C|\u0924\u0925\u093E| \u0924\u0925| \u0906\u092A|\u0915\u0947\u0932|\u0938\u0915\u0947| \u0938\u094D|\u0930\u0947 |\u0938\u092C\u0939|\u0915\u0930 |\u0906\u092A\u0928|\u0947 \u0913|\u091C\u093E | \u092A\u0930|\u0937\u094D\u091F| \u0930\u093E|\u0928\u093E |\u0939\u0935\u0947| \u0939\u0935|\u0932\u093E |\u0947\u0932\u093E|\u092C\u0939\u093F| \u0913\u0915|\u094B\u0916\u0947|\u0930 \u092C|\u0939\u0964 | \u0939\u0964|\u0928 \u0938|\u093E\u0937\u094D|\u0930\u093E\u0937|\u094D\u0924 | \u0914\u0930|\u0947 \u091A|\u0964 \u0915|\u0938\u0902\u0917|\u0930 \u0906|\u091F\u094D\u0930|\u094D\u091F\u094D|\u0937\u093E |\u092E\u093E\u0928|\u093E \u0906|\u0902 \u0915|\u093E \u092A|\u094D\u0937\u093E|\u0930\u0915\u094D|\u0939\u0947 |\u093E\u0939\u0947|\u093E\u0924\u093F|\u093E\u0935\u0947| \u091C\u0947|\u0939\u0940 |\u0913\u0915\u0930|\u092E\u093F\u0932|\u093F\u0924 |\u094B \u0938|\u0932 \u091C|\u0907\u0916\u0947|\u0928\u0907\u0916| \u0928\u0907|\u0924\u094D\u0930|\u092E\u093E\u091C| \u092C\u093F|\u0935\u0947\u0964|\u0947 \u091C|\u0915 \u0938|\u093F\u0902 |\u0939\u093F\u0902|\u0915\u0930\u093E|\u0914\u0930 |\u0947 \u092E|\u0938\u092E\u093E|\u0939\u0941 | \u0913 |\u092A\u0930 |\u0947 \u0928|\u0938\u094D\u0925|\u0930\u0940\u092F|\u094D\u0930\u0940|\u0932\u093E\u0964|\u093E\u091C |\u093E\u0928 |\u0915\u093E\u0928|\u0947 \u0924|\u093F\u0930 |\u0924\u093F\u0930|\u0916\u093E\u0924| \u0916\u093E|\u0947 \u0909|\u0928\u0942\u0928|\u093E\u0928\u0942|\u093E\u092E | \u0938\u0941| \u0926\u0947|\u0940 \u0915| \u092E\u093E|\u0930 \u092E|\u092A\u094D\u0924|\u093F\u092F\u093E|\u093E\u0939\u0940|\u092C\u093E\u0964|\u092F\u094B\u0917|\u0940 \u0938|\u0932 \u0939|\u0942\u0928 |\u0935\u094D\u092F|\u0941 \u0915|\u090F \u0915|\u0947 \u0935|\u0902\u0924\u094D|\u0938\u094D\u0935|\u0915\u0947\u0939|\u0940\u092F |\u0916\u0932 |\u0938\u093E\u092E|\u092F\u0924\u093E|\u0924\u093F\u0915|\u0947 \u0939|\u093E\u092A\u094D|\u0930\u093E\u092A|\u0930 \u092A|\u0930 \u0905| \u0932\u094B| \u0938\u0939|\u091C\u0947 |\u094B\u0917 |\u092E \u0915|\u0932\u0947 | \u0928\u093F|\u0947\u0915\u0930|\u093E \u0939|\u092A\u0942\u0930|\u0930 \u0928|\u0947\u0939\u0941|\u094D\u092F |\u092F\u093E | \u092F\u093E|\u0926\u0947\u0936|\u0926\u0940 |\u093E \u092E|\u093E\u0935 | \u0926\u094B|\u0947 \u0926| \u092A\u093E|\u0939\u093F |\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u092C\u093E |\u093F\u0932 | \u0909\u092A|\u094D\u0930\u0924| \u0935\u093F| \u0939\u0940| \u0932\u0947|\u0930\u094B |\u0947 \u0916|\u0920\u0928 |\u0917\u0920\u0928|\u0902\u0917\u0920| \u092E\u093F|\u0937\u0923 |\u094D\u0937\u0923|\u0902\u0930\u0915|\u0938\u0902\u0930| \u0906\u0926| \u090F\u0915|\u0928\u0947 | \u0905\u092A|\u0924\u0902\u0924|\u0935\u0924\u0902|\u094D\u0935\u0924|\u094D\u0924\u0930|\u094D\u092F\u093E|\u0947\u0936 |\u093E\u0926\u0940|\u094D\u0924\u093F|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0915 \u0906|\u094D\u092E |\u091A\u093E\u0930| \u0909\u091A| \u0936\u093E|\u0930\u0940 |\u093E\u0939 |\u092F\u093E\u0939|\u092C\u093F\u092F|\u091A\u093F\u0924|\u0915\u094D\u0924|\u092A\u092F\u094B|\u0909\u092A\u092F|\u0930\u0924\u093E|\u0930 \u0935|\u0928 \u092E|\u0932\u094B\u0917|\u0939 \u0915|\u0928 \u092A|\u0915\u093E\u092E| \u092A\u0942| \u0907 |\u0906\u0926\u093F|\u0908\u0932 | \u0915\u0908| \u0935\u094D|\u092E\u0940 |\u0941\u0930\u0915|\u0938\u0941\u0930| \u091C\u0940|\u0927\u093E\u0930|\u092F \u0938|\u0924\u0930\u094D|\u092D\u0947 |\u0938\u092D\u0947| \u0938\u092D|\u092D\u093E\u0935|\u094D\u0925\u093F|\u093E\u092E\u093E|\u0938\u0930 |\u0930\u094D\u092E| \u0915\u094B| \u092C\u0947|\u094B\u0938\u0930|\u0926\u094B\u0938|\u0923 \u0915|\u093E\u0938 |\u0947 \u092A|\u091C\u093E\u0926|\u0906\u091C\u093E| \u0906\u091C|\u0909\u091A\u093F|\u0917 \u0915|\u093E\u0930\u0940| \u091C\u0930|\u0917\u0947 |\u091C \u0915|\u0940 \u092C|\u0938\u0928 |\u0939\u094B |\u093E \u0924",npi:"\u0915\u094B |\u0928\u0947 | \u0930 |\u093E\u0930 |\u0915\u094D\u0924|\u0915\u093E\u0930|\u092A\u094D\u0930| \u092A\u094D|\u094D\u092F\u0915|\u0935\u094D\u092F| \u0917\u0930|\u093F\u0915\u093E| \u0935\u094D|\u094D\u0930\u0924|\u0927\u093F\u0915|\u094D\u0924\u093F|\u092F\u0915\u094D|\u0905\u0927\u093F| \u0905\u0927|\u093E\u0908 |\u092E\u093E |\u0932\u093E\u0908|\u0924\u094D\u092F|\u093F\u0915 | \u0964 | \u0938\u092E|\u0935\u093E | \u0935\u093E|\u0915 \u0935|\u094D\u0928\u0947|\u0930\u094D\u0928|\u0917\u0930\u094D|\u0928\u094D\u0924|\u091B \u0964|\u0924\u093F\u0932|\u0930\u0924\u094D|\u0924\u094D\u0930|\u0947\u0915 |\u092F\u0947\u0915|\u094D\u092F\u0947|\u093F\u0932\u093E|\u0930 \u0938|\u094B \u0938| \u0938\u094D|\u092E\u093E\u0928|\u0915\u094D\u0937| \u0935\u093F|\u0939\u0941\u0928|\u093E \u0938| \u0939\u0941| \u091B |\u0930 \u091B|\u094D\u0924\u094D|\u0938\u092E\u093E|\u0938\u094D\u0935|\u0964 \u092A| \u0938\u0902|\u0928\u0947\u091B|\u0941\u0928\u0947|\u0939\u0930\u0941|\u0924\u0928\u094D|\u0935\u0924\u0928|\u0947 \u0905|\u093F\u0928\u0947|\u094B \u0905|\u094D\u0935\u0924| \u0915\u093E|\u0947 \u091B|\u0917\u0930\u093F| \u0930\u093E|\u094D\u0930 |\u0924\u093F |\u093E\u0915\u094B| \u0915\u0941|\u0937\u094D\u091F|\u0928\u093E |\u0938\u094D\u0924|\u0915 \u0938|\u0941\u0928\u0948|\u0915\u0941\u0928|\u091F\u094D\u0930|\u0932\u0947 | \u0928\u093F|\u093E\u0928 |\u091B\u0948\u0928| \u091B\u0948|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0924\u093F\u0915|\u091B\u0964 |\u093E\u0930\u094D|\u0924\u093E |\u093F\u0924 |\u0928\u0948 |\u093E \u0905| \u0938\u093E|\u093E \u0935|\u0930\u0941 | \u092E\u093E| \u0905\u0928|\u093E \u0930|\u0930\u0924\u093E|\u0930 \u0930|\u0939\u0930\u0942|\u0947\u091B |\u093E \u092A|\u0930\u0915\u094D|\u094D\u0924 | \u092A\u0930|\u0925\u093E | \u0932\u093E|\u092A\u0930\u093F|\u0926\u0947\u0936|\u0938\u0915\u094B| \u092F\u0938|\u092E\u093E\u091C|\u093E\u092E\u093E|\u094D\u0930\u093E|\u093F\u0935\u093E|\u093E\u0939\u0930|\u094B \u092A|\u094D\u092F |\u0935\u093E\u0930|\u0928 \u0938|\u0964 \u0915|\u0928\u093F |\u094D\u0937\u093E| \u0924\u094D|\u0926\u094D\u0927|\u0930 \u0939|\u0924\u0925\u093E| \u0924\u0925|\u092F\u0938\u094D|\u094D\u092F\u0938|\u0930\u0940 |\u0930 \u0935|\u092A\u0928\u093F|\u0930\u093F\u0928|\u0902\u0930\u0915|\u0938\u0902\u0930|\u092D\u093E\u0935|\u0948 \u0935|\u0938\u092C\u0948| \u0938\u092C| \u0936\u093F| \u0938\u0939|\u0924\u093E\u0915|\u0947 \u0930|\u0924 \u0930|\u0932\u093E\u0917| \u0938\u0941|\u094D\u0937\u0923|\u0926\u094D\u0926| \u0905\u092A|\u0948\u0928 |\u094B \u0935|\u093F\u0915\u094D|\u093E\u0935 |\u0927\u093E\u0930|\u094D\u092F\u093E|\u094D\u0930\u093F|\u093E \u092D|\u090F\u0915\u094B|\u0930 \u092E|\u0928 \u0905|\u094B \u0932| \u0909\u0938|\u0936\u093F\u0915|\u093E\u0924\u094D|\u0938\u094D\u0925|\u0935\u093E\u0939|\u0942\u0930\u094D|\u0936\u094D\u092F|\u093F\u0924\u094D|\u0930\u0915\u094B|\u093E\u0930\u0915|\u0941\u0926\u094D|\u0924\u094B |\u094D\u0924\u094B|\u093E\u0909\u0928|\u0915\u093E\u0928|\u093F\u090F\u0915|\u093E \u0928| \u092A\u0928|\u0928\u0964 |\u0948\u0928\u0964|\u0915\u093E |\u0947\u091B\u0964| \u092D\u0947|\u0930\u094D\u092F|\u0938\u092E\u094D|\u0924\u094D\u092A|\u0938\u093E\u092E|\u0930\u093F\u092F|\u091A\u093E\u0930|\u0928\u093F\u091C|\u0941\u0928 |\u0917\u093F |\u093E\u0917\u093F|\u0909\u0938\u0915| \u092E\u0924| \u0905\u092D|\u092A\u0942\u0930|\u0930 \u0924| \u0938\u0915|\u0938\u093E\u0930|\u0930\u093E\u0927|\u092A\u0930\u093E|\u0905\u092A\u0930|\u0941\u0915\u094D|\u091C\u0915\u094B| \u0909\u092A|\u0930\u093E |\u093E\u0930\u093E|\u094D\u0935\u093E|\u0935\u093F\u0927|\u094D\u0928 |\u093E \u0924|\u0928 \u0917|\u0923\u0915\u094B| \u092A\u093E| \u0926\u093F|\u0915 \u0930|\u0930 \u092A|\u0905\u0928\u094D|\u092D\u0947\u0926|\u093E\u0930\u092E|\u094B \u0906| \u0905\u0930|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093F\u092F |\u0937\u093E |\u093E\u091F |\u092C\u093E\u091F| \u092C\u093E|\u093F \u0930| \u091B\u0964|\u0924\u094D\u0935|\u0924 \u0938|\u0930\u0942 |\u091B \u0930|\u0930\u0915\u093E|\u0935\u093F\u0915|\u0930 \u0909|\u094B\u0917 |\u094D\u0926\u0947|\u0930\u093F\u0935|\u0938\u0915\u093F|\u0948 \u092A|\u0930\u0924\u093F|\u0905\u0928\u0941| \u0906\u0935|\u092F\u0941\u0915|\u093E \u0917|\u0928\u092E\u093E|\u092F\u094B\u0917|\u0917 \u0917|\u0915 \u0905|\u0926\u094D\u0935|\u094D\u0927 |\u0930\u0941\u0926| \u092C\u093F|\u0964 \u0938|\u0909\u0928\u0947|\u093E\u0928\u094D|\u093E \u092E|\u093F\u0915\u094B|\u0930\u094D\u0926|\u093E\u0930\u0940|\u094D\u0924\u0930|\u094B \u0939|\u0939\u093F\u0924| \u0926\u0947|\u0930\u093F\u0915|\u093E \u0915| \u0906\u0927|\u0930\u093E\u091C|\u0930\u094D\u092E|\u094D\u0923 |\u0930\u094D\u0923|\u093F \u0935|\u094D\u092F\u0935|\u0935\u093F\u091A|\u092C\u0948 |\u0938\u0939\u093F|\u0930\u094B\u091C|\u0930\u094D\u0938|\u0908 \u0909|\u094D\u092A |\u0930\u093E\u0924|\u0928\u093F\u0915|\u092E\u093F\u0915|\u091A\u094D\u091B|\u094D\u0925\u093E|\u0935\u093F\u0935|\u0915\u0924\u093E|\u0905\u092D\u093F|\u094D\u0927\u093E",mag:" \u0915\u0947|\u0915\u0947 |\u093E\u0930 | \u0939\u0908|\u0915\u093E\u0930|\u0908\u0964 |\u0939\u0908\u0964|\u093F\u0915\u093E|\u0947 \u0905|\u0927\u093F\u0915|\u0905\u0927\u093F| \u0905\u0927|\u0930 \u0939|\u0947 \u0915|\u0914\u0930 | \u0914\u0930|\u093E \u0915|\u0947 \u0938|\u0938\u092C | \u0938\u092C| \u0915\u0930|\u0947\u0902 |\u0925\u093E |\u092E\u0947\u0902| \u092E\u0947|\u0924\u0925\u093E| \u0924\u0925|\u093F\u0915 | \u0939\u094B| \u0938\u092E|\u0915\u094D\u0937|\u0928\u093E |\u092C \u0915|\u0930 \u0938| \u0938\u0902|\u093E \u0938|\u0915\u0930 | \u092D\u0940|\u0964 \u0938| \u0938\u093E| \u0938\u0947| \u0915\u093E| \u0905\u092A|\u094D\u0930\u093E|\u092A\u094D\u0930| \u092A\u094D|\u0938\u0947 |\u092D\u0940 | \u0915\u094B|\u0924 \u0915| \u092A\u0930|\u0930\u093E |\u0915 \u0939|\u092A\u0928 |\u0905\u092A\u0928| \u0938\u0915|\u092F\u093E |\u0924\u093F |\u0930 \u0915|\u0940 \u0915| \u092F\u093E|\u0915\u0930\u0947| \u091C\u093E|\u0930\u0947 | \u0913\u0915|\u094D\u0924 |\u0938\u0915 |\u0928\u094B |\u093E\u0928 |\u092E\u093E\u0928|\u0913\u0915\u0930|\u093E \u092A|\u0928 \u0915|\u0947\u0932 | \u0928\u093E|\u0964 \u0915|\u0930\u0915\u094D| \u0938\u094D|\u0939\u0940 |\u0939\u094B\u090F| \u090F\u0915|\u092A\u0930 |\u0926\u0940 |\u091F\u094D\u0930|\u0924\u093E |\u0935\u094D\u092F|\u0939\u0908 | \u0936\u093E|\u0947 \u0909| \u0926\u0947|\u0924\u094D\u0930|\u093E\u0926\u0940| \u0930\u093E| \u0939\u0940|\u0915\u093E\u0928|\u093F\u0924 |\u092E \u0915|\u0932 \u091C|\u093E\u092E |\u0940 \u0938|\u0947 \u092D|\u0928 \u0938|\u092E\u093E\u091C|\u0937\u094D\u091F|\u0937\u093E | \u0932\u0947|\u0915 \u0938|\u092C\u0947 |\u0935\u0947 |\u093E\u0935\u0947|\u092E\u093F\u0932|\u0930 \u092E|\u094D\u092F |\u093E \u0939|\u0932\u093E |\u092A\u094D\u0924|\u0928\u0942\u0928|\u093E\u0928\u0942|\u091C\u093E |\u0947\u0915\u0930|\u094D\u0937\u093E|\u094D\u0930\u0924|\u0902\u0924\u094D|\u0930 \u0914|\u094B\u0908 |\u0915\u094B\u0908|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937| \u092E\u093E|\u0930\u094B | \u091C\u0947|\u0915\u0930\u093E|\u094B\u090F |\u093E\u092A\u094D|\u0930\u093E\u092A|\u0938\u092E\u093E|\u0942\u0928 |\u094B \u0938|\u0938\u094D\u0935|\u094D\u0924\u093F|\u0938\u093E\u092E|\u094B\u0928\u094B|\u0915\u094B\u0928| \u0935\u094D|\u0930 \u0905|\u094D\u092E | \u0935\u093F| \u0938\u0939|\u0947 \u092E|\u0915\u094D\u0924|\u092F\u094B\u0917|\u0930 \u0935|\u0915\u093E\u092E|\u0932 \u0939| \u0928\u093F|\u0926\u0947\u0936|\u092A\u0942\u0930|\u0935\u093E\u0930| \u0907 |\u0902\u0930\u0915|\u0938\u0902\u0930|\u090F \u0915|\u0930 \u092A| \u0938\u0941|\u0924\u0902\u0924|\u0935\u0924\u0902|\u094D\u0935\u0924|\u093E \u092E|\u0935 \u0915|\u0947 \u0935|\u093E\u0925 |\u0938\u093E\u0925| \u0926\u094B|\u0939\u094B\u092C| \u092A\u093E|\u094B \u0915|\u0947 \u092C|\u094B\u0917 | \u0909\u092A|\u0938\u094D\u0924|\u092A\u0930\u093F|\u0928 \u092A|\u0947 \u0924|\u094D\u0924\u0930|\u0932\u0947\u0932|\u0947 \u0913|\u091A\u093E\u0939| \u091A\u093E|\u092F \u0915|\u0935\u093E |\u0947\u0936 |\u092F \u0938|\u0928 \u0939|\u0937\u0923 |\u093E \u092C|\u0964 \u0924|\u090F\u0915 |\u090F\u0932 |\u0940\u092F |\u0915\u0947\u0915|\u0947 \u0939|\u0930 \u0906|\u093F \u0915|\u0938\u094D\u0925|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093E\u092E\u093E|\u0930\u0940\u092F|\u094D\u0930\u0940|\u0924\u093F\u0915|\u093E\u0924\u093F| \u092C\u093F|\u091A\u093E\u0930|\u0947 \u0906|\u093E\u0938 | \u0909\u091A|\u093E \u0924|\u092F\u0915\u094D|\u094D\u092F\u0915|\u093F\u0932 |\u092E\u092F |\u0938\u092E\u092F|\u0936\u093E\u0926|\u092A\u092F\u094B|\u0909\u092A\u092F|\u0947 \u0916|\u0930\u093F\u0935| \u092A\u0942|\u0947 \u0932|\u0947 \u091A|\u094C\u0928\u094B|\u0915\u094C\u0928| \u0915\u094C|\u0902 \u0915|\u0938\u0902\u0917|\u0928 \u0926|\u0902 \u0938|\u0923 \u092A|\u094D\u0937\u0923|\u0930 \u0928|\u0947 \u0928|\u094B \u092D|\u0915\u0930\u094B|\u093E \u0914|\u0930\u0924\u093E|\u093E\u0935 |\u092D\u093E\u0935|\u0915 \u0914|\u0930\u094D\u092E|\u094B\u0938\u0930|\u0926\u094B\u0938|\u0923 \u0915|\u0947 \u092A|\u0928 \u0914|\u092C \u0939|\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u093E\u092C\u0947|\u0928\u093F\u092F|\u091A\u093F\u0924|\u0909\u091A\u093F|\u093F\u0924\u094D|\u0917 \u0915|\u0947\u0964 |\u0924 \u0938|\u0940 \u0936|\u0902 \u0936|\u090F\u0915\u0930|\u0964 \u090F|\u0924\u0928 | \u0913 |\u0930\u0940 |\u094D\u0930 |\u091C\u0947 |\u0915 \u0915| \u0938\u0940|\u0938\u0928 |\u093F\u0935\u093E| \u0905\u0928|\u0942\u0930\u093E| \u092C\u091A|\u090F\u0964 | \u092C\u0947|\u0924 \u0939| \u0924\u0915| \u092E\u093F|\u0927\u093E\u0930|\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u093F\u0932\u093E|\u094D\u0935\u093E|\u093F \u092E| \u0906\u0926|\u0928\u0947 |\u0915\u090F\u0932| \u0915\u090F|\u094D\u092F\u093E"}},e3=2048,u3=10,lo=300,h0={}.hasOwnProperty,Rt,E0={};for(Rt in Rn)if(h0.call(Rn,Rt)){let e=Rn[Rt],u;E0[Rt]={};for(u in e)if(h0.call(e,u)){let t=e[u].split("|"),n={},a=t.length;for(;a--;)n[t[a]]=a;E0[Rt][u]=n}}function co(e,u={}){let t=[...u.whitelist||[],...u.only||[]],n=[...u.blacklist||[],...u.ignore||[]],a=u.minLength!==null&&u.minLength!==void 0?u.minLength:u3;if(!e||e.length<a)return jn();e=e.slice(0,e3);let r=n3(e,Zl);return!r[0]||!(r[0]in E0)?!r[0]||r[1]===0||!go(r[0],t,n)?jn():fo(r[0]):t3(e,r3(so(e),E0[r[0]],t,n))}function t3(e,u){let t=u[0][1],n=e.length*lo-t,a=-1;for(;++a<u.length;)u[a][1]=1-(u[a][1]-t)/n||0;return u}function n3(e,u){let t=-1,n,a;for(a in u)if(h0.call(u,a)){let r=a3(e,u[a]);r>t&&(t=r,n=a)}return[n,t]}function a3(e,u){let t=e.match(u);return(t?t.length:0)/e.length||0}function r3(e,u,t,n){u=i3(u,t,n);let a=[],r;if(u)for(r in u)h0.call(u,r)&&a.push([r,o3(e,u[r])]);return a.length===0?jn():a.sort(s3)}function o3(e,u){let t=0,n=-1;for(;++n<e.length;){let a=e[n],r=lo;a[0]in u&&(r=a[1]-u[a[0]]-1,r<0&&(r=-r)),t+=r}return t}function i3(e,u,t){if(u.length===0&&t.length===0)return e;let n={},a;for(a in e)go(a,u,t)&&(n[a]=e[a]);return n}function go(e,u,t){return u.length===0&&t.length===0?!0:(u.length===0||u.includes(e))&&!t.includes(e)}function jn(){return fo("und")}function fo(e){return[[e,1]]}function s3(e,u){return e[1]-u[1]}var l3=/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,c3=/[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g,d3=/[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,g3=/(\s+)|([\p{P}\p{S}])/gu,f3=[["zh-CN",l3],["ja",c3],["ko",d3]];function b0(e){if(!e)return"auto";let u="auto",t=0,n=0,a=e.match(g3);a&&(n=a.reduce((i,o)=>i+o.length,0));let r=e.length-n;for(let i of f3){let o=i[1],s=i[0],c=e.match(o),l=c?c.length:0;l>t&&(t=l,u=s)}return t*2.5/r>.5?u:"auto"}var mo=new Map([["afr","af"],["amh","am"],["arb","ar"],["azj","az"],["bel","be"],["bul","bg"],["ben","bn"],["bos","bs"],["cat","ca"],["ceb","ceb"],["ces","cs"],["dan","da"],["deu","de"],["ell","el"],["eng","en"],["epo","eo"],["spa","es"],["est","et"],["fas","fa"],["fin","fi"],["fra","fr"],["gax","ga"],["glg","gl"],["guj","gu"],["hau","ha"],["heb","he"],["hin","hi"],["hrv","hr"],["hun","hu"],["hye","hy"],["ind","id"],["ibo","ig"],["ita","it"],["jpn","ja"],["jav","jw"],["kat","ka"],["kaz","kk"],["khm","km"],["kan","kn"],["kor","ko"],["ckb","ku"],["lao","lo"],["lit","lt"],["lav","lv"],["min","mi"],["mkd","mk"],["mal","ml"],["mar","mr"],["mya","my"],["nep","ne"],["nld","nl"],["nob","no"],["nya","ny"],["pan","pa"],["pol","pl"],["pbu","ps"],["por","pt"],["ron","ro"],["rus","ru"],["sin","si"],["slk","sk"],["slv","sl"],["sna","sn"],["som","so"],["als","sq"],["srp","sr"],["sun","su"],["swe","sv"],["swh","sw"],["tam","ta"],["tel","te"],["tgk","tg"],["tha","th"],["toi","to"],["tur","tr"],["ukr","uk"],["urd","ur"],["uzn","uz"],["vie","vi"],["xho","xh"],["ydd","yi"],["yor","yo"],["cmn","zh-CN"],["zul","zu"]]),m3={minLength:1,whitelist:[...mo.keys()]};function po(e){if(!e)return"auto";let u=b0(e);if(u!=="auto")return u;let t=co(e,m3);if(t&&t.length>0){if(t.length>1&&t[0][0]!=="eng"&&t[1][0]==="eng"&&t[1][1]>.6)return"en";let[n]=t[0],a=mo.get(n);if(a)return a}return"auto"}function tu(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():E}var X=tu();function Fe(){return X.IMMERSIVE_TRANSLATE_USERSCRIPT==="1"}function ho(){return typeof Deno<"u"}if(typeof GM>"u"&&typeof GM_info<"u"&&typeof GM_getValue<"u"){let e=null;typeof GM_xmlhttpRequest<"u"?e=GM_xmlhttpRequest:typeof GM_xmlHttpRequest<"u"&&(e=GM_xmlHttpRequest);let u=null;typeof GM_registerMenuCommand<"u"&&(u=GM_registerMenuCommand),globalThis.GM={info:GM_info,getValue:GM_getValue,setValue:GM_setValue,deleteValue:GM_deleteValue,listValues:GM_listValues,xmlHttpRequest:e,registerMenuCommand:u}}var Eo={get:async e=>{if(e===null){let n=await GM.listValues(),a={};for(let r of n)a[r]=await GM.getValue(r);return a}let u=[];typeof e=="string"?u=[e]:Array.isArray(e)?u=e:u=Object.keys(e);let t={};for(let n of u)t[n]=await GM.getValue(n);return t},set:async e=>{for(let u in e)await GM.setValue(u,e[u])},remove:async e=>{if(typeof e=="string")await GM.deleteValue(e);else if(Array.isArray(e))for(let u of e)await GM.deleteValue(u)}};function p3(){if(typeof GM<"u"&&GM&&GM.info&&GM.info.script){let e=GM.info.script||{};return e._isUserscript=!0,e}else return{_isUserscript:!0,version:"0.0.0"}}function h3(){let u=tu().OPTIONS_URL;if(u)globalThis.open(u,"_blank");else throw new Error("options url not found")}function E3(){return globalThis.navigator.languages||[globalThis.navigator.language||globalThis.navigator.userLanguage]}var b3={storage:{local:Eo,sync:Eo},runtime:{getManifest:p3,lastError:null,openOptionsPage:h3},extra:{detectLanguage:po},i18n:{getAcceptLanguages:E3}};globalThis.browser=b3;function bo(e,u){return[e,!e||e.endsWith("/")?"":"/",u,".json"].join("")}function zn(e,u){let t=e;return u&&Object.keys(u).forEach(n=>{let a=u[n],r=new RegExp("{"+n+"}","gm");t=t.replace(r,a.toString())}),t}function jt(e,u,t){let n=e[u];if(!n)return t;let a=t.split("."),r="";do{r+=a.shift();let i=n[r];i!==void 0&&(typeof i=="object"||!a.length)?(n=i,r=""):a.length?r+=".":n=t}while(a.length);return n}function Nn(e,u,t,n,a){if(!e.hasOwnProperty(t))return u;let r=jt(e,t,u);return r===u&&t!==n&&(r=jt(e,n,u)),zn(r,a)}var yo={lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",enableLineBreak:"\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u952E\u8BF7\u624B\u52A8\u8F93\u5165\uFF0C\u683C\u5F0F\u4E3A\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u817E\u8BAF/\u706B\u5C71\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u8BF7\u5F00\u53D1\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u5F00\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u7ACB\u5373\u7FFB\u8BD1\u7F51\u9875\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\u53BB\u7FFB\u8BD1\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF1F","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF08\u533A\u522B\u4E8E\u6EDA\u52A8\u7FFB\u8BD1\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u4E4B\u540E\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1{language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA","translationTheme.none":"\u65E0","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u5E94\u7FFB\u8BD1","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8BD1(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u7FFB\u8BD1\u8BE5\u6BB5\u843D",enableUserscriptPagePopup:"\u603B\u662F\u5728\u9875\u9762\u4E0A\u5C55\u793A Popup \u6D6E\u7A97",enableUserscriptPagePopupDescription:"\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/\u4E09\u6307\u89E6\u5C4F\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u524D\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\u4E3A\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u8BA9\u67D0\u4E9B\u7F51\u7AD9\u4F7F\u7528\u8BE5\u6837\u5F0F\uFF0C\u70B9\u51FB\u53F3\u8FB9\u7684\u6309\u94AE\u6DFB\u52A0\u540E\uFF0C\u518D\u5207\u6362\u5230\u53E6\u4E00\u79CD\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\uFF0C\u8FD9\u6837\u5373\u53EF\u5B9E\u73B0\u4E0D\u540C\u7F51\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8BD1\u6587\u6837\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00"};var xo={lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u7B26\u6578\u91CF","translate-pdf":"\u9EDE\u64CA\u7FFB\u8B6FPDF","translate-firefox-local-pdf":"\u9EDE\u64CA\u4E0A\u50B3PDF",enableLineBreak:"\u662F\u5426\u958B\u5553\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",help:"\u5E6B\u52A9",browserShortcutsNoteForFirefox:"Firefox\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u6377\u9375\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762`about:addons`\uFF0C\u7136\u5F8C\u9EDE\u64CA\u300C\u8A2D\u7F6E\u300D\uFF0C\u518D\u9EDE\u64CA\u300C\u7BA1\u7406\u5FEB\u6377\u9375\u300D\u5373\u53EF\u8A2D\u7F6E",browserShortcutsNoteForChrome:"\u985EChrome\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u7D50\u75C2\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u2019\u7BA1\u7406\u5FEB\u6377\u9375\u2018\u9762\u677F\uFF08\u2019chrome://extensions/shortcuts\u2018\uFF09\u8A2D\u7F6E\uFF0C\u9EDE\u64CA\u4E0B\u65B9\u6309\u9215\u8DF3\u8F49\u5230\u5FEB\u6377\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u9375\u8ACB\u624B\u52D5\u8F38\u5165\uFF0C\u683C\u5F0F\u7232\uFF1A",enableLineBreakDescription:"\u958B\u5553\u5F8C\uFF0C\u8B1B\u6703\u5728\u9577\u77ED\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u7B26\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u958B\u8A2D\u7F6E\u9801","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u5730 PDF \u6587\u4EF6",changelog:"\u66F4\u65B0\u65E5\u8A8C",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u7F6E",toggleDebug:"\u5728\u63A7\u5236\u6AAF\u6253\u5370\u8ABF\u8A66\u65E5\u8A8C",document:"\u6587\u6A94",resetSuccess:"\u885D\u7F6E\u6240\u6709\u8A2D\u7F6E\u6210\u529F",goAdvancedSettings:"\u53BB\u9032\u968E\u8A2D\u7F6E\u9801",advanced:"\u9032\u968E\u8A2D\u7F6E",advancedDescription:"\u4E00\u4E9B\u96E3\u4EE5\u7406\u89E3\u7684\u8A2D\u7F6E\u9805\uFF08\u4E00\u822C\u7121\u9700\u8A2D\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8A8D\u5373\u53EF\uFF09",developer:"\u958B\u767C\u8005\u8A2D\u7F6E",donateCafe:"\u8ACB\u958B\u767C\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u958B\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u53CD\u994B",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u958B\u5553\u5F8C\uFF0C\u5C07\u6703\u7ACB\u5373\u7FFB\u8B6F\u7DB2\u9801\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\uFF0C\u800C\u4E0D\u662F\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u958B\u5553\u5F8C\uFF0C\u6574\u500B\u7DB2\u9801\u7684\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\uFF0C\u800C\u4E0D\u662F\u9ED8\u8A8D\u7684\u667A\u80FD\u8B58\u5225\u4E3B\u8981\u5340\u57DF\u53BB\u7FFB\u8B6F\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u500B\u5B57\u7B26\u7121\u9700\u7B49\u5F85\u6EFE\u52D5\u5230\u53EF\u8996\u5340\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8B6F\uFF1F","interface language":"\u754C\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u6377\u9375",modify:"\u4FEE\u6539\u5FEB\u6377\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u4E3B\u9801",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u5730\u9069\u914D\u898F\u5247\u5DF2\u662F\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9069\u914D\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9069\u914D\u898F\u5247",localVersionIsTooOld:"\u672C\u5730\u64F4\u5C55\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u64F4\u5C55\u5230{minVersion} \u6216\u4E4B\u5F8C\u7684\u7248\u672C\u5F8C\u518D\u5617\u8A66\u540C\u6B65",foundNewVersion:"\u767C\u73FE\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u7576\u524D\u64F4\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9069\u914D\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u885D\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u7576\u524D\u898F\u5247\u7248\u672C",calculating:"\u8A08\u7B97\u4E2D",unknownError:"\u672A\u77E5\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u7372\u53D6\u9060\u7A0B\u898F\u5247",enableAlphaSuccess:"\u5DF2\u958B\u5553Alpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u95DC\u9589Alpha\u529F\u80FD",cacheSize:"\u7DE9\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7DE9\u5B58",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"\uFF08\u53BB\u8A2D\u7F6E\uFF09",goSettings:"\u53BB\u8A2D\u7F6E",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u5C0D\u65BC\u8A72\u7DB2\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F{language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",add:"\u589E\u52A0",default:"\u9ED8\u8A8D",forThisLanguage:"\u5C0D\u65BC\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u4ED6\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u7F6E\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4E00\u9805\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u7FFB\u8B6F\u4E2D",Error:"\u932F\u8AA4",allowCacheTranslations:"\u958B\u555F\u672C\u5730\u7FFB\u8B6F\u7DE9\u5B58\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8ACB\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8A2D\u7F6E",import_export:"\u5C0E\u5165/\u5C0E\u51FA","translationTheme.none":"\u7121","translationTheme.dashed":"\u865B\u7DDA\u4E0B\u5283\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u4E0B\u5283\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u908A\u6846","translationTheme.underline":"\u76F4\u7DDA\u4E0B\u5283\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u865B\u7DDA\u4E0B\u5283\u7DDA","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6\uFF08Alpha\uFF09","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u61C9\u7FFB\u8B6F","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"\u5FAE\u8EDF\u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u5BC6\u9470\u5F8C\u624D\u53EF\u7528\uFF0C\u8A73\u60C5\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u9470\u7533\u8ACB\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u7576\u524D\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\u70BA\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8A2D\u7F6E\u70BA\u8B93\u67D0\u4E9B\u7DB2\u7AD9\u4F7F\u7528\u8A72\u6A23\u5F0F\uFF0C\u9EDE\u64CA\u53F3\u908A\u7684\u6309\u9215\u6DFB\u52A0\u5F8C\uFF0C\u518D\u5207\u63DB\u5230\u53E6\u4E00\u7A2E\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\uFF0C\u9019\u6A23\u5373\u53EF\u5BE6\u73FE\u4E0D\u540C\u7DB2\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8B6F\u6587\u6A23\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C\u8A9E\u8A00"};var Co={lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","translate-firefox-local-pdf":"Click to upload Pdf",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.brandName":"Immersive Translate","browser.brandDescription":"Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.","browser.toggleTranslatePage":"Toggle translate webpage ","browser.toggleTranslateTheWholePage":"Toggle translate the whole page","browser.toggleTranslateToThePageEndImmediately":"Toggle translate to the bottom of the page immediately","browser.toggleTranslateTheMainPage":"Toggle translate the main page","browser.openOptionsPage":"Open Settings Page","browser.translateLocalPdfFile":"Translate local PDF files",changelog:"Change Log",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"General",toggleDebug:"Print debug logs on the console",document:"Document",resetSuccess:"All settings reset successful",goAdvancedSettings:"Go to Advanced Settings Page",advanced:"Advanced",advancedDescription:"Some unintelligible settings (normally set without setting to default)",developer:"Developer settings",donateCafe:"Buy Me a Coffee","translate to the bottom of the page":"Whether translate to the bottom of the page once you open the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate",currentUrl:"Current URL",translateToThePageEndImmediatelyDescription:"When turned on, it will immediately translate the page from the top to the bottom, instead of translating as you read. (Not recommended to turn on)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, the entire area of the page will be translated, not the default intelligent recognition main area to translate ( not recommended)","the number of characters to be translated first":"How many characters are translated directly without waiting to scroll to the visible area for the first few characters?","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",translateTheWholePage:"Translate the whole page area (different from only the main area)",translateToThePageEndImmediately:"Immediately translate to the bottom (different from translating the current visible area)",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension is too old. Please upgrade to {minVersion} or then try syncing again",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",translationEngine:"Engine Options",sourceLanguage:"Original language",popupTarget:"Target",popupService:"Service",target:"Target Language",popupSourceLanguage:"Source",forThisSite:"For This Site:",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export","translationTheme.none":"None","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.paper":"White paper shadow effect","translationTheme.highlight":"Highlight","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationServices.tencent":"Tencent Translator","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeeplX (Alpha)","translationServices.bing":"Bing translate","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Microsoft Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.transmart":"Tencent Smart Translation","translationServices.d":"DeeplX (Alpha)","translate title":"Translate page title","always languages":"Always translate the following languages","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"The current default translation style is \u300C{theme}\u300D, you can also set it to let some websites use this style, click the button on the right to add it, and then switch to another default translation style, so that you can use different translation styles for different websites.",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language"};var y3=[{code:"zh-CN",messages:yo},{code:"zh-TW",messages:xo},{code:"en",messages:Co}],Hu={};for(let e of y3)Hu[e.code]=e.messages;var $u="Immersive Translate",le="immersive-translate";var oe="immersiveTranslate",On=`${oe}Container`,Uu=`${oe}SpecifiedContainer`,y0="buildinConfig",zt="localConfig",In="openOptionsPage";var x0=`${oe}PageTranslatedStatus`,Do=`${oe}PageUrlChanged`,qu=`${oe}ReceiveCommand`,cm=`${oe}PopupReceiveMessage`,C0="immersive-translate.owenyoung.com",dm=`https://${C0}/`,ko=`https://${C0}/buildin_config.json`,Wu=`${oe}Mark`,Hn="immersiveTranslateEffect",De=`${oe}Root`,$n=`data-${le}-effect`,Vu=`${oe}TranslatedMark`,Ku=`${oe}ParagraphId`,Ve=`${oe}AtomicBlockMark`,Ke=`${oe}ExcludeMark`,D0=`${oe}StayOriginalMark`,ct=`${oe}PreWhitespaceMark`,bu=`${oe}InlineMark`,Gu=`${oe}BlockMark`,Nt=`${oe}Left`,k0=`${oe}Right`,gm=`${oe}Width`,fm=`${oe}Height`,Ao=`${oe}Top`,To=`${oe}FontSize`,Ot="lastRunTime",Un=`${oe}GlobalStyleMark`,wo=["@","#"],A0=" --- ",qn=`
`,Ue=`${le}-target-wrapper`,T0=`${le}-pdf-target-container`,vo=`${le}-target-inner`,mm=`${le}-source-wrapper`,Wn=`${le}-target-translation-block-wrapper`,Fo=`${le}-target-translation-pdf-block-wrapper`,So=`${le}-target-translation-pre-whitespace`,Vn=`${le}-target-translation-inline-wrapper`;var Tu=["auto","en","zh-CN","zh-TW","ja","af","am","ar","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","de","el","eo","es","et","eu","fa","fi","fil","fj","fr","fy","ga","gd","gl","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","id","ig","is","it","jw","ka","kk","km","kn","ko","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","ms","mt","mww","my","ne","nl","no","ny","otq","pa","pl","ps","pt","ro","ru","sd","si","sk","sl","sm","sn","so","sq","sr","sr-Cyrl","sr-Latn","st","su","sv","sw","ta","te","tg","th","tlh","tlh-Qaak","to","tr","ty","ug","uk","ur","uz","vi","wyw","xh","yi","yo","yua","yue","zu"],Kn={af:"Afrikaans",am:"Amharic",ar:"Arabic",auto:"Detect Language",az:"Azerbaijani",be:"Belarusian",bg:"Bulgarian",tn:"Zana",bn:"Bengali",bs:"Bosnian",ca:"Catalan",ceb:"Cebuano",co:"Corsican",cs:"Czech",cy:"Welsh",da:"Danish",de:"German",el:"Greek",en:"English",eo:"Esperanto",es:"Spanish",et:"Estonian",eu:"Basque",fa:"Farsi",fi:"Finnish",fil:"Filipino",fj:"Fijian",fr:"French",fy:"Frisian",ga:"Irish",gd:"Scottish Gaelic",gl:"Galician",gu:"Gujarati",ha:"Hausa",haw:"Hawaiian",he:"Hebrew",hi:"Hindi",hmn:"Hmong",hr:"Croatian",ht:"Haitian Creole",hu:"Hungarian",hy:"Armenian",id:"Indonesian",ig:"Igbo",is:"Icelandic",it:"Italian",ja:"\u65E5\u672C\u8A9E",jw:"Javanese",ka:"Georgian",kk:"Kazakh",km:"Khmer",kn:"Kannada",ko:"Korean",ku:"Kurdish",ky:"Kyrgyz",la:"Latin",lb:"Luxembourgish",lo:"Lao",lt:"Lithuanian",lv:"Latvian",mg:"Malagash",mi:"Maori",mk:"Macedonian",ml:"Malayalam",mn:"Mongolian",mr:"Marathi",ms:"Malay",mt:"Maltese",mww:"Bai Miao",my:"Burmese",ne:"Nepali",nl:"Dutch",no:"Norwegian",ny:"Nyanza (Chichewa)",otq:"Quer\xE9taro Otomi",pa:"Punjabi",pl:"Polish",ps:"Pashto",pt:"Portuguese (Portugal, Brazil)",ro:"Romanian",ru:"Russian",sd:"Sindhi",si:"Sinhala",sk:"Slovak",sl:"Slovenian",sm:"Samoan",sn:"Shona",so:"Somali",sq:"Albanian",sr:"Serbian","sr-Cyrl":"Serbian (Cyrillic)","sr-Latn":"Serbian (Latin)",st:"Sesotho",su:"Sundanese",sv:"Swedish",sw:"Swahili",ta:"Tamil",te:"Telugu",tg:"Tajik",th:"Thai",tlh:"Klingon","tlh-Qaak":"Klingon (piqaD)",to:"Tongan",tr:"Turkish",ty:"Tahiti",ug:"Uyghur",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",vi:"Vietnamese",wyw:"Classical Chinese",xh:"Bantu",yi:"Yiddish",yo:"Yoruba",yua:"Yucatan Mayan",yue:"Cantonese (Traditional)","zh-CN":"\u7B80\u4F53\u4E2D\u6587","zh-TW":"\u7E41\u9AD4\u4E2D\u6587",zu:"Zulu"};var Bo=["https://immersive-translate.owenyoung.com/options/","http://localhost:8000/dist/userscript/options/","http://192.168.50.9:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com"];var w0="zh-CN";var Lo={"zh-CN":{"languages.en":"\u82F1\u8BED","languages.ja":"\u65E5\u8BED","languages.ko":"\u97E9\u8BED","languages.es":"\u897F\u73ED\u7259\u8BED","languages.fr":"\u6CD5\u8BED","languages.de":"\u5FB7\u8BED","languages.it":"\u610F\u5927\u5229\u8BED","languages.pt":"\u8461\u8404\u7259\u8BED","languages.ru":"\u4FC4\u8BED"},"zh-TW":{"languages.en":"\u82F1\u8A9E","languages.ja":"\u65E5\u8A9E","languages.ko":"\u97D3\u8A9E","languages.es":"\u897F\u73ED\u7259\u8A9E","languages.fr":"\u6CD5\u8A9E","languages.de":"\u5FB7\u8A9E","languages.it":"\u610F\u5927\u5229\u8A9E","languages.pt":"\u8461\u8404\u7259\u8A9E","languages.ru":"\u4FC4\u8A9E"}},Gn={...Hu,"zh-CN":{...Lo["zh-CN"],...Hu["zh-CN"]},"zh-TW":{...Lo["zh-TW"],...Hu["zh-TW"]}},_o=Gn;function Jn(e,u,t){return Nn(Gn,e,u,w0,t)}var v0=(e,u,t)=>{let n=Nn(Gn,`languages.${e}`,u,"en");return t?Kn[e]||e:n!==`languages.${e}`?n:Kn[e]};(function(){"use strict";var e=window.Bluebird||window.Promise;if(self.GM_fetch)return;let u=GM.xmlHttpRequest||GM.xmlhttpRequest;function t(d){if(typeof d!="string"&&(d=d.toString()),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(d))throw new TypeError("Invalid character in header field name");return d.toLowerCase()}function n(d){return typeof d!="string"&&(d=d.toString()),d}function a(d){if(d.bodyUsed)return e.reject(new TypeError("Already read"));d.bodyUsed=!0}function r(d){return new e(function(p,y){d.onload=function(){p(d.result)},d.onerror=function(){y(d.error)}})}function i(d){var p=new FileReader;return p.readAsArrayBuffer(d),r(p)}function o(d){var p=new FileReader;return p.readAsText(d),r(p)}var s={blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in self},c=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function l(d){var p=d.toUpperCase();return c.indexOf(p)>-1?p:d}function g(d){var p=new FormData;return d.trim().split("&").forEach(function(y){if(y){var h=y.split("="),m=h.shift().replace(/\+/g," "),b=h.join("=").replace(/\+/g," ");p.append(decodeURIComponent(m),decodeURIComponent(b))}}),p}function f(d){var p=new Headers,y=d.trim().split(`
`);return y.forEach(function(h){var m=h.trim().split(":"),b=m.shift().trim(),x=m.join(":").trim();p.append(b,x)}),p}self.Headers=Headers,self.Request=Request,self.Response=Response,self.GM_fetch=function(d,p){var y,h;return p||(typeof d=="string"?p={}:d=p.url),Request&&Request.prototype&&Request.prototype.isPrototypeOf(p)?y=p:(p.body&&(h=p.body),y=new Request(d,p)),new e(function(m,b){var x={},D;function H(A,W,de){if(A)return A;if(/^X-Request-URL:/m.test(W))return de.get("X-Request-URL")}x.method=y.method,x.url=y.url,x.synchronous=!1,x.onload=function(A){var W=A.status;if(W<100||W>599){b(new TypeError("Network request failed"));return}var de=A.responseHeaders;D=f(de);var P=H(A.finalUrl||A.responseURL,de,D);D.set("X-Final-URL",P);var ce={status:W,statusText:A.statusText,headers:D,url:P},ae=A.responseText;let R=new Response(ae,ce);m(R)},x.onerror=function(){b(new TypeError("Network request failed"))},x.headers={},y.headers.forEach(function(A,W){x.headers[W]=A}),h&&(x.data=h),u(x)})},self.GM_fetch.polyfill=!0})();var x3=tu(),It=x3.PROD==="1";function Mo(e,u,t){let n=e.querySelectorAll("footer"),a=e.querySelectorAll("header"),r=e.querySelectorAll("main"),i=[];for(let s of a)r.length>0&&r[0].contains(s)||i.push(s);for(let s=0;s<u.length;s++){let c=u[s].element;for(let l=s+1;l<u.length;l++){let g=u[l].element;if(c.contains(g))u.splice(l,1),l--;else if(g.contains(c)){u.splice(s,1),s--;break}else c===g&&(u.splice(l,1),l--)}}return u.filter(s=>{let c=s.element;if(s.reserve)return!0;let l=!1,g=!1;for(let f of n)if(c===f||f.contains(c)){l=!0;break}if(l)return!1;for(let f of i){if(c.nodeName==="H1")continue;let d=f.querySelector("h1");if(!(d&&zo(d.textContent||"",t.paragraphMinTextCount,t.paragraphMinWordCount))&&(c===f||f.contains(c))){g=!0;break}}return!g}).map(s=>s.element)}function dt(e){for(let u=e.length-1;u>=0;u--){let t=e[u].element||e[u];if(typeof t!="string")return t}return null}function F0(e){let u=[];for(let t=e.length-1;t>=0;t--){let n=e[t].element||e[t];typeof n!="string"&&u.push(n)}return u}function Xn(e){for(let u=0;u<e.length;u++){let t=e[u];if(typeof t!="string")return t}return null}function Ht(e,u){return e&&e.nodeType===Node.TEXT_NODE&&e.textContent&&e.textContent?.length>0?u?e.textContent:" ":null}function Ge(e,u){let t=[];for(let n of u){let a=e.querySelectorAll(n);for(let r of a)t.push(r)}return t}function C3(e,u){let t=function(r){return r.nodeType===Node.ELEMENT_NODE||r.nodeType===Node.TEXT_NODE?r.nodeType===Node.ELEMENT_NODE&&$e(r,u,!0)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,t),a=!0;for(;n.nextNode();){let r=n.currentNode;if(r.nodeType===Node.ELEMENT_NODE){if(Z(r,bu)){if(a===!0)return!0;continue}if(!u.inlineTags.includes(r.nodeName))return!1}}return!0}function nu(e,u){let t=u.inlineTags;return e.nodeType===Node.ELEMENT_NODE?t.includes(e.nodeName)?Z(e,Gu)||e.nodeName==="BR"?!1:Z(e,bu)?!0:C3(e,u):Z(e,bu):!1}function Po(e,u){for(let t of u)if(t===e)return!0;return!1}function Ro(e,u){return!!u.metaTags.includes(e.nodeName)}function $e(e,u,t){if(!(e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE))return!0;let{stayOriginalTags:n,excludeTags:a}=u,r=[];return t&&a&&a.length>0?r=a||[]:r=a.filter(i=>!n.includes(i)),e.nodeType===Node.ELEMENT_NODE&&e.isContentEditable||e.nodeType===Node.ELEMENT_NODE&&Z(e,Ke)?!0:e.nodeType===Node.ELEMENT_NODE&&Z(e,Uu)?!1:!!r.includes(e.nodeName)}function jo(e,u,t,n){let a=$t(n),r=new RegExp(`^${a[0]}(\\d+)${a[1]}$`),i=e.text,o=i.trim();return o===""||o.length===1&&o.charCodeAt(0)===8203||/^\d+(,\d+)*(\.\d+)?$/.test(i)||o.includes("</style>")||o.includes("< styles>")||ea(o)||Qn(o)||Zn(o)||r.test(o)?!1:zo(i,u,t)}function zo(e,u,t){let n=e.trim();return n.length>=u||n.split(" ").length>=t}function Qn(e){if(e&&e.includes("://"))try{return new URL(e),!0}catch{return!1}else return!1}function Zn(e){return!!(e&&e.startsWith("#")&&e.indexOf(" ")===-1)}function ea(e){return!!(e&&e.startsWith("@")&&e.indexOf(" ")===-1)}function No(e){return!!(e&&e.startsWith("$")&&e.indexOf(" ")===-1)}function Z(e,u){return D3(e,u,"1")}function D3(e,u,t){return It?e[De]?!!(e[De]&&e[De][u]===t):!1:e.dataset[u]===t}function Oo(e,u){return It?e[De]?!!(e[De]&&e[De][u]):!1:e.dataset[u]!==void 0}function Yn(e){return e.replace(/\s/g," ")}function S0(e){let u=e.querySelector("main"),t="";if(u&&(t=Yn(u.innerText||u.textContent||"")),t.length>=10)return t;let n=e.querySelectorAll("article");if(n.length>0)for(let a of n)t=Yn(a.innerText||a.textContent||"");return t.length>=10||(t=Yn(e.innerText||e.textContent||"")),t}function ua(e){return e?typeof e=="string"?document.querySelector(e)!==null:e.some(u=>document.querySelector(u)):!1}function ne(e,u,t){e.isContentEditable||(e.dataset[Hn]||(e.dataset[Hn]="1"),It?(e[De]||(e[De]={}),e[De][u]||(e[De][u]=t)):e.dataset[u]!==t&&(e.dataset[u]=t))}function Io(e,u){if(It){if(!e[De]||!e[De][u])return;delete e[De][u]}else delete e.dataset[u]}function wu(e,u){return It?!e[De]||!e[De][u]?void 0:e[De][u]:e.dataset[u]}function gt(e,u){let t=!1;return(u.stayOriginalTags.includes(e.nodeName)||Z(e,D0))&&(t=!0),t}function Ho(e,u){return!u.allBlockTags.concat(u.inlineTags).concat(u.excludeTags).includes(e.nodeName)}function $t(e){let{config:u}=e,t=wo;return u.translationServices[e.translationService]&&u.translationServices[e.translationService].placeholderDelimiters&&(t=u.translationServices[e.translationService].placeholderDelimiters),t}function B0(e,u){if(!u)return!1;Array.isArray(u)||(u=[u]);for(let t of u)if(e.querySelector(t))return!0;return!1}function $o(e){let u=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,n=>n.textContent&&n.textContent.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT),t=null;for(;u.nextNode();)t=u.currentNode;return t?t.parentElement:null}function ta(e,u){let{excludeSelectors:t,additionalExcludeSelectors:n,extraInlineSelectors:a,additionalInlineSelectors:r,extraBlockSelectors:i,atomicBlockSelectors:o,atomicBlockTags:s,globalStyles:c,stayOriginalTags:l,stayOriginalSelectors:g,globalAttributes:f}=u,d=Object.keys(c);if(d.length>0)for(let P of d){let ce=Ge(document.body,[P]);for(let ae of ce)if(!Z(ae,Un)){ne(ae,Un,"1");let R=c[P];ae.style.cssText+=R}}let p=Object.keys(f);if(p.length>0)for(let P of p){let ce=f[P],ae=Object.keys(ce),R=Ge(document.body,[P]);for(let se of R)for(let Y of ae){let K=ce[Y];se.getAttribute(Y)!==K&&(K===null?se.removeAttribute(Y):se.setAttribute(Y,K))}}let y=[...t,...n],h=[...a,...r],m=[...o],b=s.map(P=>P.toLowerCase()),x=i;Ge(document.body,y).forEach(P=>{Z(P,Ke)||ne(P,Ke,"1")});let H=[];if(m.length>0&&(H=Ge(document.body,m).filter(P=>!Z(P,Ve))),b.length>0){let P=l.reduce((R,se)=>{let Y=se.toLowerCase();return R.push(`<${Y}>`,`</${Y}>`,`<${Y} />`),R},[]),ce=[">http://",">https://"];P.push(...ce);let ae=Ge(document.body,b).filter(R=>{if(Z(R,Ve))return!1;{let Y=R.innerHTML;return!P.some(ue=>Y.includes(ue))}});H.push(...ae)}H.forEach(P=>{Z(P,Ve)||ne(P,Ve,"1")});let A=[];if(h.length>0)for(let P of e)A.push(...Ge(P,h));A.forEach(P=>{ne(P,bu,"1")});let W=[];if(x.length>0)for(let P of e)W.push(...Ge(P,x));W.forEach(P=>{ne(P,Gu,"1")});let de=[];if(g.length>0)for(let P of e)de.push(...Ge(P,g));de.forEach(P=>{ne(P,D0,"1")})}function Uo(e,u){let t=u.matches||[];if(t&&!Array.isArray(t)&&(t=[t]),t.length===0)return!1;if(t.length>0){if(t.includes(e))return!0;for(let n of t)if(n.includes("*")&&new RegExp(n).test(e))return!0}return!1}function Ju(e){if(typeof e!="string")return"auto";let u=e.toLowerCase();if(u==="zh"||u==="zh-hans")return"zh-CN";if(u==="zh-hant"||u==="zh-hk")return"zh-TW";if(u==="iw")return"he";if(u==="jv")return"jw";let t=Tu.map(a=>a.toLowerCase()),n=t.indexOf(u);if(n===-1)if(u.indexOf("-")>=0){u=u.split("-")[0];let a=t.indexOf(u);return a===-1?"auto":Tu[a]}else return"auto";else return Tu[n]}var na="DENO",aa="CHROME",L0="FIREFOX";function k3(e){let u=aa;try{let t=navigator?.userAgent||"";/firefox/i.test(t)?u=L0:/deno/i.test(t)&&(u=na)}catch{}return e===aa&&u===aa||e===L0&&u===L0||e===na&&u===na}function qo(){return typeof Deno<"u"}function Wo(){return k3(L0)}function Vo(){return!!navigator.maxTouchPoints||"ontouchstart"in document.documentElement}var Ko={addListener:()=>{},removeListener:()=>{},hasListener:()=>{}},Go={permissions:{contains:()=>{},request:()=>{}},runtime:{onMessage:Ko,openOptionsPage:()=>{},lastError:{message:""}},storage:{sync:{get:()=>{},set:()=>{}}},tabs:{onUpdated:Ko,query:()=>{},sendMessage:()=>{}}};var q;qo()?q=Go:q=globalThis.browser;var Jo={minVersion:"0.0.20",immediateTranslationTextCount:4e3,interval:36e5,cache:!0,donateUrl:"https://immersive-translate.owenyoung.com/donate.html",feedbackUrl:"https://github.com/immersive-translate/immersive-translate/issues",translationServices:{volcAlpha:{placeholderDelimiters:["{","}"]},volc:{placeholderDelimiters:["{","}"]},tencent:{placeholderDelimiters:["{","}"]},transmart:{placeholderDelimiters:["#","#"]},baidu:{placeholderDelimiters:["#","#"]},caiyun:{placeholderDelimiters:["{","}"]},youdao:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}"]}},shortcuts:{toggleTranslatePage:"Alt+A",toggleTranslateTheWholePage:"Alt+W",toggleTranslateToThePageEndImmediately:"Alt+S"},translationParagraphLanguagePattern:{matches:["www.reddit.com","old.reddit.com","twitter.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","read.readwise.io","www.inoreader.com","mail.google.com","google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},sourceLanguageUrlPattern:{},generalRule:{_comment:"",normalizeBody:"",wrapperPrefix:"smart",wrapperSuffix:"smart",isPdf:!1,isTransformPreTagNewLine:!1,urlChangeDelay:20,isShowUserscriptPagePopup:!0,observeUrlChange:!0,paragraphMinTextCount:8,paragraphMinWordCount:2,blockMinTextCount:32,blockMinWordCount:5,containerMinTextCount:18,lineBreakMaxTextCount:0,globalAttributes:{},globalStyles:{".sr-only":"display:none"},selectors:[],preWhitespaceDetectedTags:["DIV","SPAN"],stayOriginalSelectors:[],additionalSelectors:["h1","section h2","section h3","section h4","main h2","main h3","main h4",".article-title",".article-subtitle",".article_title",".article_subtitle",".article__title",".articleTitle",".Article__content",".title",".abstract",".titleLink",".summary",".content",".headline",".page-content"],atomicBlockTags:[],excludeSelectors:[],additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]"],translationClasses:[],atomicBlockSelectors:[],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","LABEL","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","META"],metaTags:["META","SCRIPT","STYLE","NOSCRIPT"],additionalExcludeTags:[],stayOriginalTags:["CODE","TT","IMG","SUP"],additionalStayOriginalTags:[],inlineTags:["A","ABBR","FONT","ACRONYM","B","INS","DEL","BDO","MARK","BIG","NOBR","CITE","DFN","EM","I","LABEL","Q","S","SMALL","SPAN","STRONG","SUB","SUP","U","KBD","TT","VAR","IMG","CODE","SCRIPT","STYLE","LINK","TIME","META"],additionalInlineTags:[],extraInlineSelectors:[],additionalInlineSelectors:[],extraBlockSelectors:[],allBlockTags:["HGROUP","CONTENT","ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","CANVAS","DD","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","HEADER","FORM","HR","MAIN","NAV","OL","NOSCRIPT","PRE","SECTION","TABLE","TFOOT","UL","VIDEO","P","DIV","H1","H2","H3","H4","H5","H6","UL","LI","OL","BR","PICTURE","TBODY","TR","TD","TH","SOURCE"],pdfNewParagraphLineHeight:2.4,pdfNewParagraphIndent:1.2,pdfNewParagraphIndentRightIndentPx:130,fingerCountToToggleTranslagePageWhenTouching:3},rules:[{matches:["moz-extension://*/pdf/index.html*"],isPdf:!0,wrapperPrefix:"",wrapperSuffix:"",urlChangeDelay:0,selectors:[".textLayer"],excludeSelectors:[".annotationLayer"],globalStyles:{"div.page":"width: 98%;",".textLayer":"overflow:visible;opacity: 1;"}},{matches:["mail.jabber.org","antirez.com"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.wikipedia.org",excludeSelectors:[".mw-editsection",".mw-cite-backlink","#mw-panel-toc"],stayOriginalSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],extraInlineSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"]},{matches:["twitter.com","mobile.twitter.com","tweetdeck.twitter.com"],selectors:['[data-testid="tweetText"]',".tweet-text",".js-quoted-tweet-text","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)","[data-testid='developerBuiltCardContainer'] > div:nth-child(2)","[data-testid='card.layoutLarge.detail'] > div:nth-child(2)"],extraInlineSelectors:['[data-testid="tweetText"] div']},{matches:["stackoverflow.com","*.stackexchange.com","superuser.com","askubuntu.com","serverfault.com"],additionalSelectors:[".comment-copy"]},{matches:"developer.apple.com/documentation/*",selectors:[".container","h3.title"]},{matches:"news.ycombinator.com",selectors:[".titleline > a",".comment > .commtext",".toptext","a.hn-item-title",".hn-comment-text",".hn-story-title"],excludeSelectors:[".reply"]},{matches:["*.quora.com","quora.com"],additionalSelectors:[".puppeteer_test_question_title",".puppeteer_test_answer_content",".q-text"],globalStyles:{".qu-truncateLines--3":"-webkit-line-clamp: unset;"}},{matches:["old.reddit.com/*/.compact","old.reddit.com/.compact","www.reddit.com/*/.compact","www.reddit.com/.compact"],selectors:[".title > a",".usertext-body"],detectParagraphLanguage:!0},{matches:"old.reddit.com",selectors:["p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0},{matches:"www.reddit.com",selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation=media]",".PostContent",".Comment__body","faceplate-batch .md"],detectParagraphLanguage:!0},{matches:"www.reuters.com/",excludeSelectors:["header"]},{matches:"github.com",selectors:[".markdown-title",".markdown-body",".Layout-sidebar p"],excludeSelectors:[".css-truncate","[data-test-selector='commit-tease-commit-message']","div.blob-wrapper-embedded"],detectParagraphLanguage:!0},{matches:"www.facebook.com",selectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],excludeSelectors:["[role=button]"],translationClasses:"immersive-translate-text",detectParagraphLanguage:!0},{matches:"m.youtube.com",selectors:[".comment-text"],atomicBlockSelectors:[".comment-text"],globalStyles:{".comment-text":"max-height:unset;"}},{matches:"www.youtube.com",selectors:["yt-formatted-string[slot=content].ytd-comment-renderer","yt-formatted-string.ytd-video-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title"],wrapperPrefix:"<br>",wrapperSuffix:"<br>",globalStyles:{"ytd-expander.ytd-comment-renderer":"--ytd-expander-max-lines: 1000;","h1.ytd-watch-metadata":"-webkit-line-clamp: unset;max-height: unset;","yt-formatted-string#video-title":"-webkit-line-clamp: unset;max-height: unset;","#video-title":"-webkit-line-clamp: unset;max-height: unset;"},urlChangeDelay:2e3,atomicBlockSelectors:["yt-formatted-string[slot=content].ytd-comment-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title"],detectParagraphLanguage:!0},{matches:"1paragraph.app",selectors:"#book"},{matches:["*.substack.com","newsletter.rootsofprogress.org"],selectors:[".post-preview-title",".post-preview-description",".post",".comment-body"],excludeSelectors:[".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader"],extraBlockSelectors:[".tweet-link-top",".tweet-link-bottom",".expanded-link"]},{matches:["seekingalpha.com/article/*","seekingalpha.com/news/*"],selectors:["[data-test-id=card-container]"],excludeSelectors:["[data-test-id=post-page-meta]","header > div:first-child"]},{matches:"hn.algolia.com",selectors:[".Story_title > a:first-child",".Story_comment > span"]},{matches:"read.readwise.io",selectors:['div[class^="_titleRow_"]','div[class^="_description_"]',"#document-text-content"],detectParagraphLanguage:!0},{matches:["www.inoreader.com","*.inoreader.com"],selectors:[".article_header_title",".article_title_link",".article_content",".article_magazine_title_link"],observeUrlChange:!1,globalStyles:{".article_title_link":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:["scholar.google.com"],wrapperPrefix:`
`,selectors:["h3 a[data-clk]","div.gs_rs"],atomicBlockSelectors:[".gs_rs","h3 a[data-clk]"]},{matches:"mail.google.com",selectors:["h2[data-thread-perm-id]","span[data-thread-id]","div[data-message-id] div[class='']"],detectParagraphLanguage:!0},{matches:"www.producthunt.com",selectors:["h2","div[class^='styles_htmlText__']","[class^='styles_tagline']","a[href^='/discussions/'].fontWeight-600","button[class^='styles_textButton'] > div > span"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.gitbook.io",additionalSelectors:["main"],_comment:"https://midjourney.gitbook.io/docs/user-manual"},{matches:"arxiv.org",additionalSelectors:["h1","blockquote.abstract"]},{matches:"https://discord.com/channels/*",selectors:["li[id^=chat-messages] div[id^=message-content]","h3[data-text-variant='heading-lg/semibold']"],excludeSelectors:["div[class^='repliedTextContent']"],globalStyles:{"div[class^=headerText]":"max-height: unset;","h3[data-text-variant='heading-lg/semibold']":"-webkit-line-clamp: none;"},detectParagraphLanguage:!0,wrapperPrefix:"<br>",wrapperSuffix:"<br><br>"},{matches:"web.telegram.org/z/*",selectors:[".text-content"],detectParagraphLanguage:!0},{matches:["web.telegram.org/k/*","web.telegram.org/k/"],selectors:[".message"],detectParagraphLanguage:!0},{matches:"gist.github.com",selectors:[".markdown-body",".readme"],detectParagraphLanguage:!0},{matches:"lobste.rs",selectors:[".u-repost-of",".comment_text"]},{matches:"*.slack.com",selectors:[".p-rich_text_section"],detectParagraphLanguage:!0},{matches:"1paragraph.app",additionalSelectors:["#book"]},{matches:"www.google.*/search*",selectors:["h2","a h3","table h3","table h3 + div","div[data-content-feature='1'] > div","a [aria-level='3']","a [aria-level='3'] + div",".Uroaid","div[style='-webkit-line-clamp:2']","div[style='-webkit-line-clamp: unset;max-height: unset;]"],detectParagraphLanguage:!0,wrapperSuffix:"",globalStyles:{"div[data-content-feature='1'] > div":"-webkit-line-clamp: unset;max-height: unset;","a h3 + div":"position: relative;","div[style='-webkit-line-clamp:2']":"-webkit-line-clamp: unset;max-height: unset;"},extraBlockSelectors:[".MUFPAc"]},{matches:"lowendtalk.com",selectors:["[role=heading]","h1",".userContent"]},{matches:"www.linkedin.com/jobs/*",selectors:["#job-details > span"]},{matches:"www.linkedin.com",addtionalSelectors:["span.break-words > span > span[dir=ltr]"]},{matches:"www.indiehackers.com",selectors:[".content","h1",".feed-item__title-link"]},{matches:"libreddit.de",selectors:["h2.post_title",".comment_body > .md"]},{matches:["notion.site","www.notion.so"],selectors:["div[data-block-id]"]},{matches:"www.newyorker.com",additionalSelectors:["h1","[data-testid=SummaryItemHed]"]},{matches:"start.me",selectors:[".rss-article__title",".rss-articles-list__article-link",".rss-showcase__title",".rss-showcase__text"]},{matches:"www.scmp.com",additionalSelectors:[".info__subHeadline",".section-content h2"]},{matches:"www.lesswrong.com",extraBlockSelectors:["span.commentOnSelection"]},{matches:["mastodon.social","mastodon.online","kolektiva.social","indieweb.social","mastodon.world","infosec.exchange"],selectorMatches:["div#mastodon"],selectors:["div.status__content__text"],detectLanguage:!0},{matches:"www.cnbc.com",additionalSelectors:["div.RenderKeyPoints-list"]},{matches:"app.daily.dev",selectors:["h1",".typo-body","article h3","[class^=markdown_markdown]"],globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset"}},{matches:"www.aljazeera.com",addtionalSelectors:["h1",".article__subhead"]},{matches:["*.pornhub.com","pornhub.com"],selectors:[".title >a",".title > span",".thumbnailTitle",".commentMessage > span"],detectParagraphLanguage:!0,wrapperPrefix:`

`,wrapperSuffix:`
`,globalStyles:{".title":"height: unset; max-height: unset;"}},{matches:["weibo.com"],selectors:["div[class^='detail_wbtext']"]},{matches:["medium.com","*.medium.com"],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],urlChangeDelay:2e3,selectors:["article section","h2","[aria-hidden='false'] pre","article p"],excludeSelectors:["[aria-label='Post Preview Reading Time']"],globalStyles:{h2:"-webkit-line-clamp: unset;max-height:unset;","article p":"-webkit-line-clamp: unset;max-height:unset;"}},{selectorMatches:["meta[property='og:site_name'][content='Nitter']"],selectors:[".tweet-content",".quote-text"]},{matches:"*.fandom.com",additionalSelectors:[".mcf-card-article__title"]},{matches:["www.washingtonpost.com"],additionalSelectors:["[data-qa='article-body']"]},{matches:"www.economist.com",extraInlineSelectors:"span[data-caps='initial']"},{matches:"www.healthline.com",excludeSelectors:".icon-hl-trusted-source-after"},{matches:"www.amazon.com",selectors:["h1","h2 > a > span","[data-a-expander-name='book_description_expander'] > div","[data-feature-name='editorialReviews']",'[data-a-expander-name="review_text_read_more"] > div > span','[data-feature-name="featurebullets"]','[data-feature-name="aplus"'],excludeBlockSelectors:["div.reviewText > span"],globalStyles:{".s-line-clamp-2":"-webkit-line-clamp: unset;max-height: unset;","[data-a-expander-name='review_text_read_more']":" max-height: unset;"}},{matches:"www.bloomberg.com",urlChangeDelay:2e3},{matches:"xueshu.baidu.com",globalStyles:{".abstract_wr":"height: unset; overflow: visible; max-height:unset;"}},{matches:"www.sciencedirect.com",urlChangeDelay:2e3},{matches:"www.thehighestofthemountains.com",extraBlockSelectors:"div"},{matches:"telegra.ph",normalizeBody:"div.ql-editor[contenteditable='false']"},{matches:["*.annas-archive.org","annas-archive.org"],selectors:["div[class='truncate text-xl font-bold']","div[class='truncate text-sm']"],globalStyles:{"div[id^='link-index-']":"height: unset; max-height: unset;"},normalizeBody:"body",extraBlockSelectors:["a.custom-a"]},{matches:["explainshell.com"],selectors:["[class='help-box']"]}]};function ra(e){return Array.isArray(e)?e:e?[e]:[]}function oa(e,u){return u?(Array.isArray(u)||(u=[u]),Array.from(new Set([...u,e]))):[e]}function vu(e,u){return u?(Array.isArray(e)||(e=[e]),Array.isArray(u)||(u=[u]),u.filter(t=>!e.includes(t))):[]}function _0(e,u){let t=[],n=Object.keys(e);for(let i of n){let o=e[i];Array.isArray(o)&&t.push(i)}let a=e;return Object.keys(u).forEach(i=>{let o=u[i];if(o!==void 0)if(!t.includes(i))a[i]=o;else if(i.startsWith("additional")){let s=ra(o);a[i]=Array.from(new Set([...a[i],...s]))}else a[i]=ra(o)}),a}function A3(){if(X.PROD==="1")return{};let e={};if(X.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID&&X.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY){let u={secretId:X.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,secretKey:X.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY};e.translationServices={},e.translationServices.tencent=u}if(X.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID&&X.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY){let u={appid:X.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,key:X.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY};e.translationServices||(e.translationServices={}),e.translationServices.baidu=u}if(X.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN){let u={token:X.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN};e.translationServices||(e.translationServices={}),e.translationServices.caiyun=u}if(X.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY){let u={apikey:X.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY};e.translationServices||(e.translationServices={}),e.translationServices.openl=u}if(X.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID&&X.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET){let u={appId:X.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,appSecret:X.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET};e.translationServices||(e.translationServices={}),e.translationServices.youdao=u}if(X.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID&&X.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY){let u={accessKeyId:X.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,secretAccessKey:X.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY};e.translationServices||(e.translationServices={}),e.translationServices.volc=u}if(X.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY){let u={authKey:X.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY};e.translationServices||(e.translationServices={}),e.translationServices.deepl=u}return X.IMMERSIVE_TRANSLATE_SERVICE&&(e.translationService=X.IMMERSIVE_TRANSLATE_SERVICE),X.DEBUG==="1"&&(e.debug=!0,e.cache=!1,e.alpha=!0),X.MOCK==="1"&&(e.translationService="mock"),e}async function M0(){let e=await q.storage.local.get(zt);return e[zt]?e[zt]:{}}async function Yo(e){await q.storage.local.set({[zt]:e})}async function yu(){let e=await q.storage.local.get(y0),u={...Jo,buildinConfigUpdatedAt:X.BUILD_TIME};if(e[y0]){let f=e[y0],d=new Date(f.buildinConfigUpdatedAt),p=new Date(u.buildinConfigUpdatedAt);d>p&&(u=f)}let t={};if(!Fe()){let f=await q.commands.getAll();for(let d of f)d.name&&d.shortcut&&(t[d.name]=d.shortcut)}let n={...u,targetLanguage:w0,interfaceLanguage:"en",debug:!1,alpha:!1,translationUrlPattern:{matches:[],excludeMatches:[]},translationLanguagePattern:{matches:[],excludeMatches:[]},translationThemePatterns:{},translationParagraphLanguagePattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationBodyAreaPattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationTheme:"none",translationService:"google",translationArea:"main",translationStartMode:"dynamic",translationServices:{},generalRule:u.generalRule,translationGeneralConfig:{engine:"google"},rules:[]},a=A3(),i=(await q.storage.sync.get("userConfig")||{}).userConfig||{},o=globalThis.IMMERSIVE_TRANSLATE_CONFIG||{},s=Object.assign({},o,a,i);if(!s.interfaceLanguage){let f=await T3();s.interfaceLanguage=f}let c=Object.assign(n,u),l=Object.keys(c),g=["translationUrlPattern","translationLanguagePattern","translationBodyAreaPattern","translationParagraphLanguagePattern","translationThemePatterns","translationGeneralConfig","shortcuts"];for(let f of l){let d=f;if(d==="generalRule")typeof s[d]=="object"&&(c[d]=_0(n[d],s[d]));else if(d==="translationServices"){let p=s[d]||{},y=u[d]||{},h=Object.keys(y),m=Object.keys(p),b=[...new Set([...h,...m])],x={};for(let D of b)x[D]={...y[D],...p[D]};c[d]=x}else if(typeof s[d]!="string"&&typeof s[d]!="boolean"&&typeof s[d]!="number"&&g.includes(d))s[d]&&(c[d]=Object.assign(c[d],s[d])),d==="shortcuts"&&(c[d]={...c[d],...t});else if(d==="rules"){if(Array.isArray(s[d])&&(c[d]=[...s[d],...c[d]]),X.PROD==="0"&&X.DEV_RULES){let p=JSON.parse(X.DEV_RULES);c[d]=[...p,...c[d]]}}else s[d]!==void 0&&(c[d]=s[d])}return c.donateUrl=u.donateUrl,c.minVersion=u.minVersion,c.feedbackUrl=u.feedbackUrl,c}var T3=async()=>{let t=(await q.i18n.getAcceptLanguages()).map(n=>Ju(n)).find(n=>Hu[n]);return t||"en"};function ft(){let e,u="pending",t=new Promise((n,a)=>{e={async resolve(r){await r,u="fulfilled",n(r)},reject(r){u="rejected",a(r)}}});return Object.defineProperty(t,"state",{get:()=>u}),Object.assign(t,e)}var ia=class extends Error{constructor(){super("Deadline"),this.name="DeadlineError"}};function P0(e,u){let t=ft(),n=setTimeout(()=>t.reject(new ia),u);return Promise.race([e,t]).finally(()=>clearTimeout(n))}function Ut(e,u={}){let{signal:t,persistent:n}=u;return t?.aborted?Promise.reject(new DOMException("Delay was aborted.","AbortError")):new Promise((a,r)=>{let i=()=>{clearTimeout(s),r(new DOMException("Delay was aborted.","AbortError"))},s=setTimeout(()=>{t?.removeEventListener("abort",i),a()},e);if(t?.addEventListener("abort",i,{once:!0}),n===!1)try{Deno.unrefTimer(s)}catch(c){if(!(c instanceof ReferenceError))throw c;console.error("`persistent` option is only available in Deno")}})}var Xo=class{#e=0;#u=[];#t=[];#n=ft();add(u){++this.#e,this.#a(u[Symbol.asyncIterator]())}async#a(u){try{let{value:t,done:n}=await u.next();n?--this.#e:this.#u.push({iterator:u,value:t})}catch(t){this.#t.push(t)}this.#n.resolve()}async*iterate(){for(;this.#e>0;){await this.#n;for(let u=0;u<this.#u.length;u++){let{iterator:t,value:n}=this.#u[u];yield n,this.#a(t)}if(this.#t.length){for(let u of this.#t)throw u;this.#t.length=0}this.#u.length=0,this.#n=ft()}}[Symbol.asyncIterator](){return this.iterate()}};var Je={};$l(Je,{bgBlack:()=>Q3,bgBlue:()=>tc,bgBrightBlack:()=>oc,bgBrightBlue:()=>cc,bgBrightCyan:()=>gc,bgBrightGreen:()=>sc,bgBrightMagenta:()=>dc,bgBrightRed:()=>ic,bgBrightWhite:()=>fc,bgBrightYellow:()=>lc,bgCyan:()=>ac,bgGreen:()=>ec,bgMagenta:()=>nc,bgRed:()=>Z3,bgRgb24:()=>Ec,bgRgb8:()=>pc,bgWhite:()=>rc,bgYellow:()=>uc,black:()=>j3,blue:()=>I3,bold:()=>S3,brightBlack:()=>ei,brightBlue:()=>G3,brightCyan:()=>Y3,brightGreen:()=>V3,brightMagenta:()=>J3,brightRed:()=>W3,brightWhite:()=>X3,brightYellow:()=>K3,cyan:()=>$3,dim:()=>B3,getColorEnabled:()=>v3,gray:()=>q3,green:()=>N3,hidden:()=>P3,inverse:()=>M3,italic:()=>L3,magenta:()=>H3,red:()=>z3,reset:()=>F3,rgb24:()=>hc,rgb8:()=>mc,setColorEnabled:()=>w3,strikethrough:()=>R3,stripColor:()=>yc,underline:()=>_3,white:()=>U3,yellow:()=>O3});var{Deno:Qo}=globalThis,Zo=typeof Qo?.noColor=="boolean"?Qo.noColor:!0,sa=!Zo;function w3(e){Zo||(sa=e)}function v3(){return sa}function z(e,u){return{open:`\x1B[${e.join(";")}m`,close:`\x1B[${u}m`,regexp:new RegExp(`\\x1b\\[${u}m`,"g")}}function N(e,u){return sa?`${u.open}${e.replace(u.regexp,u.open)}${u.close}`:e}function F3(e){return N(e,z([0],0))}function S3(e){return N(e,z([1],22))}function B3(e){return N(e,z([2],22))}function L3(e){return N(e,z([3],23))}function _3(e){return N(e,z([4],24))}function M3(e){return N(e,z([7],27))}function P3(e){return N(e,z([8],28))}function R3(e){return N(e,z([9],29))}function j3(e){return N(e,z([30],39))}function z3(e){return N(e,z([31],39))}function N3(e){return N(e,z([32],39))}function O3(e){return N(e,z([33],39))}function I3(e){return N(e,z([34],39))}function H3(e){return N(e,z([35],39))}function $3(e){return N(e,z([36],39))}function U3(e){return N(e,z([37],39))}function q3(e){return ei(e)}function ei(e){return N(e,z([90],39))}function W3(e){return N(e,z([91],39))}function V3(e){return N(e,z([92],39))}function K3(e){return N(e,z([93],39))}function G3(e){return N(e,z([94],39))}function J3(e){return N(e,z([95],39))}function Y3(e){return N(e,z([96],39))}function X3(e){return N(e,z([97],39))}function Q3(e){return N(e,z([40],49))}function Z3(e){return N(e,z([41],49))}function ec(e){return N(e,z([42],49))}function uc(e){return N(e,z([43],49))}function tc(e){return N(e,z([44],49))}function nc(e){return N(e,z([45],49))}function ac(e){return N(e,z([46],49))}function rc(e){return N(e,z([47],49))}function oc(e){return N(e,z([100],49))}function ic(e){return N(e,z([101],49))}function sc(e){return N(e,z([102],49))}function lc(e){return N(e,z([103],49))}function cc(e){return N(e,z([104],49))}function dc(e){return N(e,z([105],49))}function gc(e){return N(e,z([106],49))}function fc(e){return N(e,z([107],49))}function Fu(e,u=255,t=0){return Math.trunc(Math.max(Math.min(e,u),t))}function mc(e,u){return N(e,z([38,5,Fu(u)],39))}function pc(e,u){return N(e,z([48,5,Fu(u)],49))}function hc(e,u){return typeof u=="number"?N(e,z([38,2,u>>16&255,u>>8&255,u&255],39)):N(e,z([38,2,Fu(u.r),Fu(u.g),Fu(u.b)],39))}function Ec(e,u){return typeof u=="number"?N(e,z([48,2,u>>16&255,u>>8&255,u&255],49)):N(e,z([48,2,Fu(u.r),Fu(u.g),Fu(u.b)],49))}var bc=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function yc(e){return e.replace(bc,"")}function R0(e,u){let t=null,n=null,a=(...r)=>{a.clear(),n=()=>{a.clear(),e.call(a,...r)},t=setTimeout(n,u)};return a.clear=()=>{typeof t=="number"&&(clearTimeout(t),t=null,n=null)},a.flush=()=>{n?.()},Object.defineProperty(a,"pending",{get:()=>typeof t=="number"}),a}var H0,I,ri,xc,qt,ui,oi,N0={},ii=[],Cc=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Su(e,u){for(var t in u)e[t]=u[t];return e}function si(e){var u=e.parentNode;u&&u.removeChild(e)}function li(e,u,t){var n,a,r,i={};for(r in u)r=="key"?n=u[r]:r=="ref"?a=u[r]:i[r]=u[r];if(arguments.length>2&&(i.children=arguments.length>3?H0.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)i[r]===void 0&&(i[r]=e.defaultProps[r]);return j0(e,i,n,a,null)}function j0(e,u,t,n,a){var r={type:e,props:u,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a??++ri};return a==null&&I.vnode!=null&&I.vnode(r),r}function gu(e){return e.children}function z0(e,u){this.props=e,this.context=u}function mt(e,u){if(u==null)return e.__?mt(e.__,e.__.__k.indexOf(e)+1):null;for(var t;u<e.__k.length;u++)if((t=e.__k[u])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?mt(e):null}function ci(e){var u,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,u=0;u<e.__k.length;u++)if((t=e.__k[u])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return ci(e)}}function la(e){(!e.__d&&(e.__d=!0)&&qt.push(e)&&!O0.__r++||ui!==I.debounceRendering)&&((ui=I.debounceRendering)||setTimeout)(O0)}function O0(){for(var e;O0.__r=qt.length;)e=qt.sort(function(u,t){return u.__v.__b-t.__v.__b}),qt=[],e.some(function(u){var t,n,a,r,i,o;u.__d&&(i=(r=(t=u).__v).__e,(o=t.__P)&&(n=[],(a=Su({},r)).__v=r.__v+1,ca(o,r,a,t.__n,o.ownerSVGElement!==void 0,r.__h!=null?[i]:null,n,i??mt(r),r.__h),mi(n,r),r.__e!=i&&ci(r)))})}function di(e,u,t,n,a,r,i,o,s,c){var l,g,f,d,p,y,h,m=n&&n.__k||ii,b=m.length;for(t.__k=[],l=0;l<u.length;l++)if((d=t.__k[l]=(d=u[l])==null||typeof d=="boolean"?null:typeof d=="string"||typeof d=="number"||typeof d=="bigint"?j0(null,d,null,null,d):Array.isArray(d)?j0(gu,{children:d},null,null,null):d.__b>0?j0(d.type,d.props,d.key,d.ref?d.ref:null,d.__v):d)!=null){if(d.__=t,d.__b=t.__b+1,(f=m[l])===null||f&&d.key==f.key&&d.type===f.type)m[l]=void 0;else for(g=0;g<b;g++){if((f=m[g])&&d.key==f.key&&d.type===f.type){m[g]=void 0;break}f=null}ca(e,d,f=f||N0,a,r,i,o,s,c),p=d.__e,(g=d.ref)&&f.ref!=g&&(h||(h=[]),f.ref&&h.push(f.ref,null,d),h.push(g,d.__c||p,d)),p!=null?(y==null&&(y=p),typeof d.type=="function"&&d.__k===f.__k?d.__d=s=gi(d,s,e):s=fi(e,d,f,m,p,s),typeof t.type=="function"&&(t.__d=s)):s&&f.__e==s&&s.parentNode!=e&&(s=mt(f))}for(t.__e=y,l=b;l--;)m[l]!=null&&(typeof t.type=="function"&&m[l].__e!=null&&m[l].__e==t.__d&&(t.__d=mt(n,l+1)),hi(m[l],m[l]));if(h)for(l=0;l<h.length;l++)pi(h[l],h[++l],h[++l])}function gi(e,u,t){for(var n,a=e.__k,r=0;a&&r<a.length;r++)(n=a[r])&&(n.__=e,u=typeof n.type=="function"?gi(n,u,t):fi(t,n,n,a,n.__e,u));return u}function fi(e,u,t,n,a,r){var i,o,s;if(u.__d!==void 0)i=u.__d,u.__d=void 0;else if(t==null||a!=r||a.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(a),i=null;else{for(o=r,s=0;(o=o.nextSibling)&&s<n.length;s+=2)if(o==a)break e;e.insertBefore(a,r),i=r}return i!==void 0?i:a.nextSibling}function Dc(e,u,t,n,a){var r;for(r in t)r==="children"||r==="key"||r in u||I0(e,r,null,t[r],n);for(r in u)a&&typeof u[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||t[r]===u[r]||I0(e,r,u[r],t[r],n)}function ti(e,u,t){u[0]==="-"?e.setProperty(u,t):e[u]=t==null?"":typeof t!="number"||Cc.test(u)?t:t+"px"}function I0(e,u,t,n,a){var r;e:if(u==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(u in n)t&&u in t||ti(e.style,u,"");if(t)for(u in t)n&&t[u]===n[u]||ti(e.style,u,t[u])}else if(u[0]==="o"&&u[1]==="n")r=u!==(u=u.replace(/Capture$/,"")),u=u.toLowerCase()in e?u.toLowerCase().slice(2):u.slice(2),e.l||(e.l={}),e.l[u+r]=t,t?n||e.addEventListener(u,r?ai:ni,r):e.removeEventListener(u,r?ai:ni,r);else if(u!=="dangerouslySetInnerHTML"){if(a)u=u.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(u!=="href"&&u!=="list"&&u!=="form"&&u!=="tabIndex"&&u!=="download"&&u in e)try{e[u]=t??"";break e}catch{}typeof t=="function"||(t!=null&&(t!==!1||u[0]==="a"&&u[1]==="r")?e.setAttribute(u,t):e.removeAttribute(u))}}function ni(e){this.l[e.type+!1](I.event?I.event(e):e)}function ai(e){this.l[e.type+!0](I.event?I.event(e):e)}function ca(e,u,t,n,a,r,i,o,s){var c,l,g,f,d,p,y,h,m,b,x,D,H,A=u.type;if(u.constructor!==void 0)return null;t.__h!=null&&(s=t.__h,o=u.__e=t.__e,u.__h=null,r=[o]),(c=I.__b)&&c(u);try{e:if(typeof A=="function"){if(h=u.props,m=(c=A.contextType)&&n[c.__c],b=c?m?m.props.value:c.__:n,t.__c?y=(l=u.__c=t.__c).__=l.__E:("prototype"in A&&A.prototype.render?u.__c=l=new A(h,b):(u.__c=l=new z0(h,b),l.constructor=A,l.render=Ac),m&&m.sub(l),l.props=h,l.state||(l.state={}),l.context=b,l.__n=n,g=l.__d=!0,l.__h=[]),l.__s==null&&(l.__s=l.state),A.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=Su({},l.__s)),Su(l.__s,A.getDerivedStateFromProps(h,l.__s))),f=l.props,d=l.state,g)A.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(A.getDerivedStateFromProps==null&&h!==f&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(h,b),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(h,l.__s,b)===!1||u.__v===t.__v){l.props=h,l.state=l.__s,u.__v!==t.__v&&(l.__d=!1),l.__v=u,u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(W){W&&(W.__=u)}),l.__h.length&&i.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(h,l.__s,b),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(f,d,p)})}if(l.context=b,l.props=h,l.__v=u,l.__P=e,x=I.__r,D=0,"prototype"in A&&A.prototype.render)l.state=l.__s,l.__d=!1,x&&x(u),c=l.render(l.props,l.state,l.context);else do l.__d=!1,x&&x(u),c=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++D<25);l.state=l.__s,l.getChildContext!=null&&(n=Su(Su({},n),l.getChildContext())),g||l.getSnapshotBeforeUpdate==null||(p=l.getSnapshotBeforeUpdate(f,d)),H=c!=null&&c.type===gu&&c.key==null?c.props.children:c,di(e,Array.isArray(H)?H:[H],u,t,n,a,r,i,o,s),l.base=u.__e,u.__h=null,l.__h.length&&i.push(l),y&&(l.__E=l.__=null),l.__e=!1}else r==null&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=kc(t.__e,u,t,n,a,r,i,s);(c=I.diffed)&&c(u)}catch(W){u.__v=null,(s||r!=null)&&(u.__e=o,u.__h=!!s,r[r.indexOf(o)]=null),I.__e(W,u,t)}}function mi(e,u){I.__c&&I.__c(u,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(n){n.call(t)})}catch(n){I.__e(n,t.__v)}})}function kc(e,u,t,n,a,r,i,o){var s,c,l,g=t.props,f=u.props,d=u.type,p=0;if(d==="svg"&&(a=!0),r!=null){for(;p<r.length;p++)if((s=r[p])&&"setAttribute"in s==!!d&&(d?s.localName===d:s.nodeType===3)){e=s,r[p]=null;break}}if(e==null){if(d===null)return document.createTextNode(f);e=a?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,f.is&&f),r=null,o=!1}if(d===null)g===f||o&&e.data===f||(e.data=f);else{if(r=r&&H0.call(e.childNodes),c=(g=t.props||N0).dangerouslySetInnerHTML,l=f.dangerouslySetInnerHTML,!o){if(r!=null)for(g={},p=0;p<e.attributes.length;p++)g[e.attributes[p].name]=e.attributes[p].value;(l||c)&&(l&&(c&&l.__html==c.__html||l.__html===e.innerHTML)||(e.innerHTML=l&&l.__html||""))}if(Dc(e,f,g,a,o),l)u.__k=[];else if(p=u.props.children,di(e,Array.isArray(p)?p:[p],u,t,n,a&&d!=="foreignObject",r,i,r?r[0]:t.__k&&mt(t,0),o),r!=null)for(p=r.length;p--;)r[p]!=null&&si(r[p]);o||("value"in f&&(p=f.value)!==void 0&&(p!==e.value||d==="progress"&&!p||d==="option"&&p!==g.value)&&I0(e,"value",p,g.value,!1),"checked"in f&&(p=f.checked)!==void 0&&p!==e.checked&&I0(e,"checked",p,g.checked,!1))}return e}function pi(e,u,t){try{typeof e=="function"?e(u):e.current=u}catch(n){I.__e(n,t)}}function hi(e,u,t){var n,a;if(I.unmount&&I.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||pi(n,null,u)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(r){I.__e(r,u)}n.base=n.__P=null,e.__c=void 0}if(n=e.__k)for(a=0;a<n.length;a++)n[a]&&hi(n[a],u,typeof e.type!="function");t||e.__e==null||si(e.__e),e.__=e.__e=e.__d=void 0}function Ac(e,u,t){return this.constructor(e,t)}function $0(e,u,t){var n,a,r;I.__&&I.__(e,u),a=(n=typeof t=="function")?null:t&&t.__k||u.__k,r=[],ca(u,e=(!n&&t||u).__k=li(gu,null,[e]),a||N0,N0,u.ownerSVGElement!==void 0,!n&&t?[t]:a?null:u.firstChild?H0.call(u.childNodes):null,r,!n&&t?t:a?a.__e:u.firstChild,n),mi(r,e)}function da(e,u){var t={__c:u="__cC"+oi++,__:e,Consumer:function(n,a){return n.children(a)},Provider:function(n){var a,r;return this.getChildContext||(a=[],(r={})[u]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&a.some(la)},this.sub=function(i){a.push(i);var o=i.componentWillUnmount;i.componentWillUnmount=function(){a.splice(a.indexOf(i),1),o&&o.call(i)}}),n.children}};return t.Provider.__=t.Consumer.contextType=t}H0=ii.slice,I={__e:function(e,u,t,n){for(var a,r,i;u=u.__;)if((a=u.__c)&&!a.__)try{if((r=a.constructor)&&r.getDerivedStateFromError!=null&&(a.setState(r.getDerivedStateFromError(e)),i=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,n||{}),i=a.__d),i)return a.__E=a}catch(o){e=o}throw e}},ri=0,xc=function(e){return e!=null&&e.constructor===void 0},z0.prototype.setState=function(e,u){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Su({},this.state),typeof e=="function"&&(e=e(Su({},t),this.props)),e&&Su(t,e),e!=null&&this.__v&&(u&&this.__h.push(u),la(this))},z0.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),la(this))},z0.prototype.render=gu,qt=[],O0.__r=0,oi=0;var Vt,pe,ga,Ei,Wt=0,Ai=[],U0=[],bi=I.__b,yi=I.__r,xi=I.diffed,Ci=I.__c,Di=I.unmount;function W0(e,u){I.__h&&I.__h(pe,e,Wt||u),Wt=0;var t=pe.__H||(pe.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:U0}),t.__[e]}function be(e){return Wt=1,Tc(vi,e)}function Tc(e,u,t){var n=W0(Vt++,2);if(n.t=e,!n.__c&&(n.__=[t?t(u):vi(void 0,u),function(r){var i=n.__N?n.__N[0]:n.__[0],o=n.t(i,r);i!==o&&(n.__N=[o,n.__[1]],n.__c.setState({}))}],n.__c=pe,!pe.u)){pe.u=!0;var a=pe.shouldComponentUpdate;pe.shouldComponentUpdate=function(r,i,o){if(!n.__c.__H)return!0;var s=n.__c.__H.__.filter(function(l){return l.__c});if(s.every(function(l){return!l.__N}))return!a||a.call(this,r,i,o);var c=!1;return s.forEach(function(l){if(l.__N){var g=l.__[0];l.__=l.__N,l.__N=void 0,g!==l.__[0]&&(c=!0)}}),!!c&&(!a||a.call(this,r,i,o))}}return n.__N||n.__}function au(e,u){var t=W0(Vt++,3);!I.__s&&wi(t.__H,u)&&(t.__=e,t.i=u,pe.__H.__h.push(t))}function ma(e){return Wt=5,Ti(function(){return{current:e}},[])}function Ti(e,u){var t=W0(Vt++,7);return wi(t.__H,u)?(t.__V=e(),t.i=u,t.__h=e,t.__V):t.__}function Kt(e,u){return Wt=8,Ti(function(){return e},u)}function pa(e){var u=pe.context[e.__c],t=W0(Vt++,9);return t.c=e,u?(t.__==null&&(t.__=!0,u.sub(pe)),u.props.value):e.__}function wc(){for(var e;e=Ai.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(q0),e.__H.__h.forEach(fa),e.__H.__h=[]}catch(u){e.__H.__h=[],I.__e(u,e.__v)}}I.__b=function(e){typeof e.type!="function"||e.o||e.type===gu?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),pe=null,bi&&bi(e)},I.__r=function(e){yi&&yi(e),Vt=0;var u=(pe=e.__c).__H;u&&(ga===pe?(u.__h=[],pe.__h=[],u.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=U0,t.__N=t.i=void 0})):(u.__h.forEach(q0),u.__h.forEach(fa),u.__h=[])),ga=pe},I.diffed=function(e){xi&&xi(e);var u=e.__c;u&&u.__H&&(u.__H.__h.length&&(Ai.push(u)!==1&&Ei===I.requestAnimationFrame||((Ei=I.requestAnimationFrame)||vc)(wc)),u.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==U0&&(t.__=t.__V),t.i=void 0,t.__V=U0})),ga=pe=null},I.__c=function(e,u){u.some(function(t){try{t.__h.forEach(q0),t.__h=t.__h.filter(function(n){return!n.__||fa(n)})}catch(n){u.some(function(a){a.__h&&(a.__h=[])}),u=[],I.__e(n,t.__v)}}),Ci&&Ci(e,u)},I.unmount=function(e){Di&&Di(e);var u,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{q0(n)}catch(a){u=a}}),t.__H=void 0,u&&I.__e(u,t.__v))};var ki=typeof requestAnimationFrame=="function";function vc(e){var u,t=function(){clearTimeout(n),ki&&cancelAnimationFrame(u),setTimeout(e)},n=setTimeout(t,100);ki&&(u=requestAnimationFrame(t))}function q0(e){var u=pe,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),pe=u}function fa(e){var u=pe;e.__c=e.__(),pe=u}function wi(e,u){return!e||e.length!==u.length||u.some(function(t,n){return t!==e[n]})}function vi(e,u){return typeof u=="function"?u(e):u}var Zp=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var Sc=class extends Error{constructor(){super("Throttled function aborted"),this.name="AbortError"}};function V0({limit:e,interval:u,strict:t}){if(!Number.isFinite(e))throw new TypeError("Expected `limit` to be a finite number");if(!Number.isFinite(u))throw new TypeError("Expected `interval` to be a finite number");let n=new Map,a=0,r=0;function i(){let l=Date.now();return l-a>u?(r=1,a=l,0):(r<e?r++:(a+=u,r=1),a-l)}let o=[];function s(){let l=Date.now();if(o.length<e)return o.push(l),0;let g=o.shift()+u;return l>=g?(o.push(l),0):(o.push(g),g-l)}let c=t?s:i;return l=>{let g=function(...f){if(!g.isEnabled)return(async()=>l.apply(this,f))();let d;return new Promise((p,y)=>{d=setTimeout(()=>{p(l.apply(this,f)),n.delete(d)},c()),n.set(d,y)})};return g.abort=()=>{for(let f of n.keys())clearTimeout(f),n.get(f)(new Sc);n.clear(),o.splice(0,o.length)},g.isEnabled=!0,g}}var ha;function Ta(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function Mi(e,u=","){return e.map(Ta).join(u)}var Pi=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function K0(e){for(var u=9,t=e.length;t--;)u=Math.imul(u^e.charCodeAt(t),1597334677);return"#"+((u^u>>>9)>>>0).toString(36)}function Ri(e,u="@media "){return u+xu(e).map(t=>(typeof t=="string"&&(t={min:t}),t.raw||Object.keys(t).map(n=>`(${n}-width:${t[n]})`).join(" and "))).join(",")}function xu(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function Bc(){}var Se={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function ji(e){var u;return((u=e.match(/[-=:;]/g))==null?void 0:u.length)||0}function Da(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?+RegExp.$1/(RegExp.$2?15:1)/10:0,15)<<22|Math.min(ji(e),15)<<18}var Lc=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function wa({n:e,i:u,v:t=[]},n,a,r){for(let o of(e&&(e=Ta({n:e,i:u,v:t})),r=[...xu(r)],t)){let s=n.theme("screens",o);for(let c of xu(s&&Ri(s)||n.v(o))){var i;r.push(c),a|=s?67108864|Da(c):o=="dark"?1073741824:c[0]=="@"?Da(c):(i=c,1<<~(/:([a-z-]+)/.test(i)&&~Lc.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:a,r,i:u}}var va=new Map;function Fi(e){if(e.d){let u=[],t=Ea(e.r.reduce((n,a)=>a[0]=="@"?(u.push(a),n):a?Ea(n,r=>Ea(a,i=>{let o=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(o){let s=r.indexOf(o[1]);return~s?r.slice(0,s)+o[0]+r.slice(s+o[1].length):ba(r,i)}return ba(i,r)})):n,"&"),n=>ba(n,e.n?"."+Pi(e.n):""));return t&&u.push(t.replace(/:merge\((.+?)\)/g,"$1")),u.reduceRight((n,a)=>a+"{"+n+"}",e.d)}}function Ea(e,u){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(t,n,a)=>u(n)+a)}function ba(e,u){return e.replace(/&/g,u)}var _c=new Intl.Collator("en",{numeric:!0});function Mc(e,u){for(var t=0,n=e.length;t<n;){let a=n+t>>1;0>=zi(e[a],u)?t=a+1:n=a}return n}function zi(e,u){let t=e.p&Se.o;return t==(u.p&Se.o)&&(t==Se.b||t==Se.o)?0:e.p-u.p||e.o-u.o||_c.compare(e.n,u.n)}function ya(e,u){return Math.round(parseInt(e,16)*u)}function Pc(e,u={}){if(typeof e=="function")return e(u);let{opacityValue:t="1",opacityVariable:n}=u,a=n?`var(${n})`:t;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",a);if(e[0]=="#"&&(e.length==4||e.length==7)){let r=(e.length-1)/3,i=[17,1,.062272][r-1];return`rgba(${[ya(e.substr(1,r),i),ya(e.substr(1+r,r),i),ya(e.substr(1+2*r,r),i),a]})`}return a=="1"?e:a=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${a})`)}function Ni(e,u,t,n,a=[]){return function r(i,{n:o,p:s,r:c=[],i:l},g){let f=[],d="",p=0,y=0;for(let b in i||{}){var h,m;let x=i[b];if(b[0]=="@"){if(!x)continue;if(b[1]=="a"){f.push(...Oi(o,s,Sa(""+x),g,s,c,l,!0));continue}if(b[1]=="l"){for(let D of xu(x))f.push(...r(D,{n:o,p:(h=Se[b[7]],s&~Se.o|h),r:c,i:l},g));continue}if(b[1]=="i"){f.push(...xu(x).map(D=>({p:-1,o:0,r:[],d:b+" "+D})));continue}if(b[1]=="k"){f.push({p:Se.d,o:0,r:[b],d:r(x,{p:Se.d},g).map(Fi).join("")});continue}if(b[1]=="f"){f.push(...xu(x).map(D=>({p:Se.d,o:0,r:[b],d:r(D,{p:Se.d},g).map(Fi).join("")})));continue}}if(typeof x!="object"||Array.isArray(x))b=="label"&&x?o=x+K0(JSON.stringify([s,l,i])):(x||x===0)&&(b=b.replace(/[A-Z]/g,D=>"-"+D.toLowerCase()),y+=1,p=Math.max(p,(m=b)[0]=="-"?0:ji(m)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(m)?+!!RegExp.$1||-!!RegExp.$2:0)+1),d+=(d?";":"")+xu(x).map(D=>g.s(b,Rc(""+D,g.theme)+(l?" !important":""))).join(";"));else if(b[0]=="@"||b.includes("&")){let D=s;b[0]=="@"&&(b=b.replace(/\bscreen\(([^)]+)\)/g,(H,A)=>{let W=g.theme("screens",A);return W?(D|=67108864,Ri(W,"")):H}),D|=Da(b)),f.push(...r(x,{n:o,p:D,r:[...c,b],i:l},g))}else f.push(...r(x,{p:s,r:[...c,b]},g))}return f.unshift({n:o,p:s,o:Math.max(0,15-y)+1.5*Math.min(p||15,15),r:c,d}),f.sort(zi)}(e,wa(u,t,n,a),t)}function Rc(e,u){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(t,n,a,r,i)=>{let o=u(a,i);return typeof o=="function"&&/color|fill|stroke/i.test(a)?Pc(o):""+o})}function Fa(e,u){let t,n=[];for(let a of e)a.d&&a.n?t?.p==a.p&&""+t.r==""+a.r?(t.c=[t.c,a.c].filter(Boolean).join(" "),t.d=t.d+";"+a.d):n.push(t={...a,n:a.n&&u}):n.push({...a,n:a.n&&u});return n}function ka(e,u,t=Se.u,n,a){let r=[];for(let i of e)for(let o of function(s,c,l,g,f){var d;s={...s,i:s.i||f};let p=function(y,h){let m=va.get(y.n);return m?m(y,h):h.r(y.n,y.v[0]=="dark")}(s,c);return p?typeof p=="string"?({r:g,p:l}=wa(s,c,l,g),Fa(ka(Sa(p),c,l,g,s.i),s.n)):Array.isArray(p)?p.map(y=>{var h,m;return{o:0,...y,r:[...xu(g),...xu(y.r)],p:(h=l,m=(d=y.p)!=null?d:l,h&~Se.o|m)}}):Ni(p,s,c,l,g):[{c:Ta(s),p:0,o:0,r:[]}]}(i,u,t,n,a))r.splice(Mc(r,o),0,o);return r}function Oi(e,u,t,n,a,r,i,o){return Fa((o?t.flatMap(s=>ka([s],n,a,r,i)):ka(t,n,a,r,i)).map(s=>s.p&Se.o&&(s.n||u==Se.b)?{...s,p:s.p&~Se.o|u,o:0}:s),e)}function jc(e,u,t,n){var a;return a=(r,i)=>{let{n:o,p:s,r:c,i:l}=wa(r,i,u);return t&&Oi(o,u,t,i,s,c,l,n)},va.set(e,a),e}function xa(e,u){if(e[e.length-1]!="("){let t=[],n=!1,a=!1,r="";for(let i of e)if(!(i=="("||/[~@]$/.test(i))){if(i[0]=="!"&&(i=i.slice(1),n=!n),i.endsWith(":")){t[i=="dark:"?"unshift":"push"](i.slice(0,-1));continue}i[0]=="-"&&(i=i.slice(1),a=!a),i.endsWith("-")&&(i=i.slice(0,-1)),i&&i!="&"&&(r+=(r&&"-")+i)}r&&(a&&(r="-"+r),u[0].push({n:r,v:t.filter(zc),i:n}))}}function zc(e,u,t){return t.indexOf(e)==u}var Si=new Map;function Sa(e){let u=Si.get(e);if(!u){let t=[],n=[[]],a=0,r=0,i=null,o=0,s=(c,l=0)=>{a!=o&&(t.push(e.slice(a,o+l)),c&&xa(t,n)),a=o+1};for(;o<e.length;o++){let c=e[o];if(r)e[o-1]!="\\"&&(r+=+(c=="[")||-(c=="]"));else if(c=="[")r+=1;else if(i)e[o-1]!="\\"&&i.test(e.slice(o))&&(i=null,a=o+RegExp.lastMatch.length);else if(c=="/"&&e[o-1]!="\\"&&(e[o+1]=="*"||e[o+1]=="/"))i=e[o+1]=="*"?/^\*\//:/^[\r\n]/;else if(c=="(")s(),t.push(c);else if(c==":")e[o+1]!=":"&&s(!1,1);else if(/[\s,)]/.test(c)){s(!0);let l=t.lastIndexOf("(");if(c==")"){let g=t[l-1];if(/[~@]$/.test(g)){let f=n.shift();t.length=l,xa([...t,"#"],n);let{v:d}=n[0].pop();for(let p of f)p.v.splice(+(p.v[0]=="dark")-+(d[0]=="dark"),d.length);xa([...t,jc(g.length>1?g.slice(0,-1)+K0(JSON.stringify([g,f])):g+"("+Mi(f)+")",Se.a,f,/@$/.test(g))],n)}l=t.lastIndexOf("(",l-1)}t.length=l+1}else/[~@]/.test(c)&&e[o+1]=="("&&n.unshift([])}s(!0),Si.set(e,u=n[0])}return u}function Ii(e,u,t){return u.reduce((n,a,r)=>n+t(a)+e[r+1],e[0])}function Hi(e,u){return Array.isArray(e)&&Array.isArray(e.raw)?Ii(e,u,t=>Ca(t).trim()):u.filter(Boolean).reduce((t,n)=>t+Ca(n),e?Ca(e):"")}function Ca(e){let u,t="";if(e&&typeof e=="object")if(Array.isArray(e))(u=Hi(e[0],e.slice(1)))&&(t+=" "+u);else for(let n in e)e[n]&&(t+=" "+n);else e!=null&&typeof e!="boolean"&&(t+=" "+e);return t}var f9=$i("@"),m9=$i("~");function $i(e){return new Proxy(function(t,...n){return u("",t,n)},{get:(t,n)=>n in t?t[n]:function(a,...r){return u(n,a,r)}});function u(t,n,a){return Mi(Sa(t+e+"("+Hi(n,a)+")"))}}function Aa(e,u){return Array.isArray(e)?Bi(Ii(e,u,t=>t!=null&&typeof t!="boolean"?t:"")):typeof e=="string"?Bi(e):[e]}var Nc=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function Bi(e){let u;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let t=[{}],n=[t[0]],a=[];for(;u=Nc.exec(e);)u[4]&&(t.shift(),a.shift()),u[3]?(a.unshift(u[3]),t.unshift({}),n.push(a.reduce((r,i)=>({[i]:r}),t[0]))):u[4]||(t[0][u[1]]&&(t.unshift({}),n.push(a.reduce((r,i)=>({[i]:r}),t[0]))),t[0][u[1]]=u[2]);return n}function Ui(e,...u){var t,n;let a=Aa(e,u),r=(((t=a.find(i=>i.label))==null?void 0:t.label)||"css")+K0(JSON.stringify(a));return n=(i,o)=>Fa(a.flatMap(s=>Ni(s,i,o,Se.o)),r),va.set(r,n),r}var p9=new Proxy(function(e,u){return Li("animation",e,u)},{get:(e,u)=>u in e?e[u]:function(t,n){return Li(u,t,n)}});function Li(e,u,t){return{toString:()=>Ui({label:e,"@layer components":{...typeof u=="object"?u:{animation:u},animationName:""+t}})}}var h9=Symbol();var qi=new Proxy(Bc,{apply:(e,u,t)=>ha(t[0]),get(e,u){let t=ha[u];return typeof t=="function"?function(){return t.apply(ha,arguments)}:t}});var E9=function e(u){return new Proxy(function(t,...n){return _i(u,"",t,n)},{get:(t,n)=>n==="bind"?e:n in t?t[n]:function(a,...r){return _i(u,n,a,r)}})}();function _i(e,u,t,n){return{toString(){let a=Aa(t,n),r=Pi(u+K0(JSON.stringify([u,a])));return(typeof e=="function"?e:qi)(Ui({[`@keyframes ${r}`]:Aa(t,n)})),r}}}var Ic="inherit",Hc="currentColor",$c="transparent",Uc="#000",qc="#fff",Wc={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},Vc={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},Kc={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},Gc={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},Jc={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},Yc={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},Xc={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},Qc={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},Zc={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},ed={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},ud={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},td={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},nd={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},ad={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},rd={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},od={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},id={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},sd={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},ld={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},cd={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},dd={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},gd={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},fd={__proto__:null,inherit:Ic,current:Hc,transparent:$c,black:Uc,white:qc,slate:Wc,gray:Vc,zinc:Kc,neutral:Gc,stone:Jc,red:Yc,orange:Xc,amber:Qc,yellow:Zc,lime:ed,green:ud,emerald:td,teal:nd,cyan:ad,sky:rd,blue:od,indigo:id,violet:sd,purple:ld,fuchsia:cd,pink:dd,rose:gd},G0={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},colors:fd,columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...qe(4,"rem",4,.5,.5),...qe(12,"rem",4,5),14:"3.5rem",...qe(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:J("blur"),backdropBrightness:J("brightness"),backdropContrast:J("contrast"),backdropGrayscale:J("grayscale"),backdropHueRotate:J("hueRotate"),backdropInvert:J("invert"),backdropOpacity:J("opacity"),backdropSaturate:J("saturate"),backdropSepia:J("sepia"),backgroundColor:J("colors"),backgroundImage:{none:"none"},backgroundOpacity:J("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...qe(200,"",100,0,50),...qe(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:e})=>({DEFAULT:e("colors.gray.200","currentColor"),...e("colors")}),borderOpacity:J("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:J("spacing"),borderWidth:{DEFAULT:"1px",...Ye(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:J("colors"),caretColor:J("colors"),accentColor:({theme:e})=>({auto:"auto",...e("colors")}),contrast:{...qe(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:J("borderColor"),divideOpacity:J("borderOpacity"),divideWidth:J("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:J("colors"),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({...e("spacing"),...Gt(2,6),...Gt(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:J("spacing"),gradientColorStops:J("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:e})=>({...e("spacing"),...Gt(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:e})=>({...e("spacing"),...Gt(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...qe(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),maxHeight:({theme:e})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...e("spacing")}),maxWidth:({theme:e,breakpoints:u})=>({...u(e("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...qe(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:J("spacing"),placeholderColor:J("colors"),placeholderOpacity:J("opacity"),outlineColor:J("colors"),outlineOffset:Ye(8,"px"),outlineWidth:Ye(8,"px"),ringColor:({theme:e})=>({...e("colors"),DEFAULT:e("colors.blue.500","#3b82f6")}),ringOffsetColor:J("colors"),ringOffsetWidth:Ye(8,"px"),ringOpacity:({theme:e})=>({...e("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...Ye(8,"px")},rotate:{...Ye(2,"deg"),...Ye(12,"deg",3),...Ye(180,"deg",45)},saturate:qe(200,"",100,0,50),scale:{...qe(150,"",100,0,50),...qe(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:J("spacing"),scrollPadding:J("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...Ye(2,"deg"),...Ye(12,"deg",3)},space:J("spacing"),stroke:J("colors"),strokeWidth:qe(2),textColor:J("colors"),textDecorationColor:J("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...Ye(8,"px")},textUnderlineOffset:{auto:"auto",...Ye(8,"px")},textIndent:J("spacing"),textOpacity:J("opacity"),transitionDuration:({theme:e})=>({...e("durations"),DEFAULT:"150ms"}),transitionDelay:J("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:e})=>({...e("spacing"),...Gt(2,4),full:"100%"}),width:({theme:e})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...e("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...qe(50,"",1,0,10),auto:"auto"}};function Gt(e,u){let t={};do for(var n=1;n<e;n++)t[`${n}/${e}`]=Number((n/e*100).toFixed(6))+"%";while(++e<=u);return t}function Ye(e,u,t=0){let n={};for(;t<=e;t=2*t||1)n[t]=t+u;return n}function qe(e,u="",t=1,n=0,a=1,r={}){for(;n<=e;n+=a)r[n]=n/t+u;return r}function J(e){return({theme:u})=>u(e)}var md={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${G0.fontFamily.sans})`},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${G0.fontFamily.mono})`,fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}};var Ba;function Ia(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function Zi(e,u=","){return e.map(Ia).join(u)}var es=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function Y0(e){for(var u=9,t=e.length;t--;)u=Math.imul(u^e.charCodeAt(t),1597334677);return"#"+((u^u>>>9)>>>0).toString(36)}function X0(e,u="@media "){return u+Xe(e).map(t=>(typeof t=="string"&&(t={min:t}),t.raw||Object.keys(t).map(n=>`(${n}-width:${t[n]})`).join(" and "))).join(",")}function Xe(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function pd(){}var Be={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function us(e){return e.match(/[-=:;]/g)?.length||0}function ja(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(us(e),15)<<18}var hd=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Ha({n:e,i:u,v:t=[]},n,a,r){e&&(e=Ia({n:e,i:u,v:t})),r=[...Xe(r)];for(let o of t){let s=n.theme("screens",o);for(let c of Xe(s&&X0(s)||n.v(o))){var i;r.push(c),a|=s?67108864|ja(c):o=="dark"?1073741824:c[0]=="@"?ja(c):(i=c,1<<~(/:([a-z-]+)/.test(i)&&~hd.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:a,r,i:u}}var $a=new Map;function Wi(e){if(e.d){let u=[],t=La(e.r.reduce((n,a)=>a[0]=="@"?(u.push(a),n):a?La(n,r=>La(a,i=>{let o=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(o){let s=r.indexOf(o[1]);return~s?r.slice(0,s)+o[0]+r.slice(s+o[1].length):_a(r,i)}return _a(i,r)})):n,"&"),n=>_a(n,e.n?"."+es(e.n):""));return t&&u.push(t.replace(/:merge\((.+?)\)/g,"$1")),u.reduceRight((n,a)=>a+"{"+n+"}",e.d)}}function La(e,u){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(t,n,a)=>u(n)+a)}function _a(e,u){return e.replace(/&/g,u)}var Vi=new Intl.Collator("en",{numeric:!0});function Ed(e,u){for(var t=0,n=e.length;t<n;){let a=n+t>>1;0>=ts(e[a],u)?t=a+1:n=a}return n}function ts(e,u){let t=e.p&Be.o;return t==(u.p&Be.o)&&(t==Be.b||t==Be.o)?0:e.p-u.p||e.o-u.o||Vi.compare(Ki(e.n),Ki(u.n))||Vi.compare(Gi(e.n),Gi(u.n))}function Ki(e){return(e||"").split(/:/).pop().split("/").pop()||"\0"}function Gi(e){return(e||"").replace(/\W/g,u=>String.fromCharCode(127+u.charCodeAt(0)))+"\0"}function Ma(e,u){return Math.round(parseInt(e,16)*u)}function Bu(e,u={}){if(typeof e=="function")return e(u);let{opacityValue:t="1",opacityVariable:n}=u,a=n?`var(${n})`:t;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",a);if(e[0]=="#"&&(e.length==4||e.length==7)){let r=(e.length-1)/3,i=[17,1,.062272][r-1];return`rgba(${[Ma(e.substr(1,r),i),Ma(e.substr(1+r,r),i),Ma(e.substr(1+2*r,r),i),a]})`}return a=="1"?e:a=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${a})`)}function ns(e,u,t,n,a=[]){return function r(i,{n:o,p:s,r:c=[],i:l},g){let f=[],d="",p=0,y=0;for(let b in i||{}){var h,m;let x=i[b];if(b[0]=="@"){if(!x)continue;if(b[1]=="a"){f.push(...rs(o,s,qa(""+x),g,s,c,l,!0));continue}if(b[1]=="l"){for(let D of Xe(x))f.push(...r(D,{n:o,p:(h=Be[b[7]],s&~Be.o|h),r:c,i:l},g));continue}if(b[1]=="i"){f.push(...Xe(x).map(D=>({p:-1,o:0,r:[],d:b+" "+D})));continue}if(b[1]=="k"){f.push({p:Be.d,o:0,r:[b],d:r(x,{p:Be.d},g).map(Wi).join("")});continue}if(b[1]=="f"){f.push(...Xe(x).map(D=>({p:Be.d,o:0,r:[b],d:r(D,{p:Be.d},g).map(Wi).join("")})));continue}}if(typeof x!="object"||Array.isArray(x))b=="label"&&x?o=x+Y0(JSON.stringify([s,l,i])):(x||x===0)&&(b=b.replace(/[A-Z]/g,D=>"-"+D.toLowerCase()),y+=1,p=Math.max(p,(m=b)[0]=="-"?0:us(m)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(m)?+!!RegExp.$1||-!!RegExp.$2:0)+1),d+=(d?";":"")+Xe(x).map(D=>g.s(b,as(""+D,g.theme)+(l?" !important":""))).join(";"));else if(b[0]=="@"||b.includes("&")){let D=s;b[0]=="@"&&(b=b.replace(/\bscreen\(([^)]+)\)/g,(H,A)=>{let W=g.theme("screens",A);return W?(D|=67108864,X0(W,"")):H}),D|=ja(b)),f.push(...r(x,{n:o,p:D,r:[...c,b],i:l},g))}else f.push(...r(x,{p:s,r:[...c,b]},g))}return f.unshift({n:o,p:s,o:Math.max(0,15-y)+1.5*Math.min(p||15,15),r:c,d}),f.sort(ts)}(e,Ha(u,t,n,a),t)}function as(e,u){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(t,n,a,r,i="")=>{let o=u(a,i);return typeof o=="function"&&/color|fill|stroke/i.test(a)?Bu(o):""+Xe(o).filter(s=>Object(s)!==s)})}function Ua(e,u){let t,n=[];for(let a of e)a.d&&a.n?t?.p==a.p&&""+t.r==""+a.r?(t.c=[t.c,a.c].filter(Boolean).join(" "),t.d=t.d+";"+a.d):n.push(t={...a,n:a.n&&u}):n.push({...a,n:a.n&&u});return n}function za(e,u,t=Be.u,n,a){let r=[];for(let i of e)for(let o of function(s,c,l,g,f){s={...s,i:s.i||f};let d=function(p,y){let h=$a.get(p.n);return h?h(p,y):y.r(p.n,p.v[0]=="dark")}(s,c);return d?typeof d=="string"?({r:g,p:l}=Ha(s,c,l,g),Ua(za(qa(d),c,l,g,s.i),s.n)):Array.isArray(d)?d.map(p=>{var y,h;return{o:0,...p,r:[...Xe(g),...Xe(p.r)],p:(y=l,h=p.p??l,y&~Be.o|h)}}):ns(d,s,c,l,g):[{c:Ia(s),p:0,o:0,r:[]}]}(i,u,t,n,a))r.splice(Ed(r,o),0,o);return r}function rs(e,u,t,n,a,r,i,o){return Ua((o?t.flatMap(s=>za([s],n,a,r,i)):za(t,n,a,r,i)).map(s=>s.p&Be.o&&(s.n||u==Be.b)?{...s,p:s.p&~Be.o|u,o:0}:s),e)}function bd(e,u,t,n){var a;return a=(r,i)=>{let{n:o,p:s,r:c,i:l}=Ha(r,i,u);return t&&rs(o,u,t,i,s,c,l,n)},$a.set(e,a),e}function Pa(e,u,t){if(e[e.length-1]!="("){let n=[],a=!1,r=!1,i="";for(let o of e)if(!(o=="("||/[~@]$/.test(o))){if(o[0]=="!"&&(o=o.slice(1),a=!a),o.endsWith(":")){n[o=="dark:"?"unshift":"push"](o.slice(0,-1));continue}o[0]=="-"&&(o=o.slice(1),r=!r),o.endsWith("-")&&(o=o.slice(0,-1)),o&&o!="&"&&(i+=(i&&"-")+o)}i&&(r&&(i="-"+i),u[0].push({n:i,v:n.filter(yd),i:a}))}}function yd(e,u,t){return t.indexOf(e)==u}var Ji=new Map;function qa(e){let u=Ji.get(e);if(!u){let t=[],n=[[]],a=0,r=0,i=null,o=0,s=(c,l=0)=>{a!=o&&(t.push(e.slice(a,o+l)),c&&Pa(t,n)),a=o+1};for(;o<e.length;o++){let c=e[o];if(r)e[o-1]!="\\"&&(r+=+(c=="[")||-(c=="]"));else if(c=="[")r+=1;else if(i)e[o-1]!="\\"&&i.test(e.slice(o))&&(i=null,a=o+RegExp.lastMatch.length);else if(c=="/"&&e[o-1]!="\\"&&(e[o+1]=="*"||e[o+1]=="/"))i=e[o+1]=="*"?/^\*\//:/^[\r\n]/;else if(c=="(")s(),t.push(c);else if(c==":")e[o+1]!=":"&&s(!1,1);else if(/[\s,)]/.test(c)){s(!0);let l=t.lastIndexOf("(");if(c==")"){let g=t[l-1];if(/[~@]$/.test(g)){let f=n.shift();t.length=l,Pa([...t,"#"],n);let{v:d}=n[0].pop();for(let p of f)p.v.splice(+(p.v[0]=="dark")-+(d[0]=="dark"),d.length);Pa([...t,bd(g.length>1?g.slice(0,-1)+Y0(JSON.stringify([g,f])):g+"("+Zi(f)+")",Be.a,f,/@$/.test(g))],n)}l=t.lastIndexOf("(",l-1)}t.length=l+1}else/[~@]/.test(c)&&e[o+1]=="("&&n.unshift([])}s(!0),Ji.set(e,u=n[0])}return u}function os(e,u,t){return u.reduce((n,a,r)=>n+t(a)+e[r+1],e[0])}function is(e,u){return Array.isArray(e)&&Array.isArray(e.raw)?os(e,u,t=>Ra(t).trim()):u.filter(Boolean).reduce((t,n)=>t+Ra(n),e?Ra(e):"")}function Ra(e){let u,t="";if(e&&typeof e=="object")if(Array.isArray(e))(u=is(e[0],e.slice(1)))&&(t+=" "+u);else for(let n in e)e[n]&&(t+=" "+n);else e!=null&&typeof e!="boolean"&&(t+=" "+e);return t}var I9=ss("@"),H9=ss("~");function ss(e){return new Proxy(function(t,...n){return u("",t,n)},{get(t,n){return n in t?t[n]:function(a,...r){return u(n,a,r)}}});function u(t,n,a){return Zi(qa(t+e+"("+is(n,a)+")"))}}function Na(e,u){return Array.isArray(e)?Yi(os(e,u,t=>t!=null&&typeof t!="boolean"?t:"")):typeof e=="string"?Yi(e):[e]}var xd=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function Yi(e){let u;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let t=[{}],n=[t[0]],a=[];for(;u=xd.exec(e);)u[4]&&(t.shift(),a.shift()),u[3]?(a.unshift(u[3]),t.unshift({}),n.push(a.reduce((r,i)=>({[i]:r}),t[0]))):u[4]||(t[0][u[1]]&&(t.unshift({}),n.push(a.reduce((r,i)=>({[i]:r}),t[0]))),t[0][u[1]]=u[2]);return n}function ls(e,...u){var t;let n=Na(e,u),a=(n.find(r=>r.label)?.label||"css")+Y0(JSON.stringify(n));return t=(r,i)=>Ua(n.flatMap(o=>ns(o,r,i,Be.o)),a),$a.set(a,t),a}var $9=new Proxy(function(e,u){return Xi("animation",e,u)},{get(e,u){return u in e?e[u]:function(t,n){return Xi(u,t,n)}}});function Xi(e,u,t){return{toString(){return ls({label:e,"@layer components":{...typeof u=="object"?u:{animation:u},animationName:""+t}})}}}function k(e,u,t){return[e,Cd(u,t)]}function Cd(e,u){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?(t,n)=>({[e]:u?u(t,n):Oa(t,1)}):t=>e||{[t[1]]:Oa(t,2)}}function Oa(e,u,t=e.slice(u).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${t} * -1)`:t}function T(e,u,t,n){return[e,Dd(u,t,n)]}function Dd(e,u,t){let n=typeof u=="string"?(a,r)=>({[u]:t?t(a,r):a._}):u||(({1:a,_:r},i,o)=>({[a||o]:r}));return(a,r)=>{let i=cs(e||a[1]),o=r.theme(i,a.$$)??Jt(a.$$,i,r);if(o!=null)return a._=Oa(a,0,o),n(a,r,i)}}function ke(e,u={},t){return[e,kd(u,t)]}function kd(e={},u){return(t,n)=>{let{section:a=cs(t[0]).replace("-","")+"Color"}=e,[r,i]=Ad(t.$$);if(!r)return;let o=n.theme(a,r)||Jt(r,a,n);if(!o||typeof o=="object")return;let{opacityVariable:s=`--tw-${t[0].replace(/-$/,"")}-opacity`,opacitySection:c=a.replace("Color","Opacity"),property:l=a,selector:g}=e,f=n.theme(c,i||"DEFAULT")||i&&Jt(i,c,n),d=u||(({_:y})=>{let h=Yt(l,y);return g?{[g]:h}:h});t._={value:Bu(o,{opacityVariable:s||void 0,opacityValue:f||void 0}),color:y=>Bu(o,y),opacityVariable:s||void 0,opacityValue:f||void 0};let p=d(t,n);if(!t.dark){let y=n.d(a,r,o);y&&y!==o&&(t._={value:Bu(y,{opacityVariable:s||void 0,opacityValue:f||"1"}),color:h=>Bu(y,h),opacityVariable:s||void 0,opacityValue:f||void 0},p={"&":p,[n.v("dark")]:d(t,n)})}return p}}function Ad(e){return(e.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function Yt(e,u){let t={};return typeof u=="string"?t[e]=u:(u.opacityVariable&&u.value.includes(u.opacityVariable)&&(t[u.opacityVariable]=u.opacityValue||"1"),t[e]=u.value),t}function Jt(e,u,t){if(e[0]=="["&&e.slice(-1)=="]"){if(e=J0(as(e.slice(1,-1),t.theme)),!u)return e;if(!(/color|fill|stroke/i.test(u)&&!(/^color:/.test(e)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e))||/image/i.test(u)&&!(/^image:/.test(e)||/^[a-z-]+\(/.test(e))||/weight/i.test(u)&&!(/^(number|any):/.test(e)||/^\d+$/.test(e))||/position/i.test(u)&&/^(length|size):/.test(e)))return e.replace(/^[a-z-]+:/,"")}}function cs(e){return e.replace(/-./g,u=>u[1].toUpperCase())}function J0(e){return e.includes("url(")?e.replace(/(.*?)(url\(.*?\))(.*?)/g,(u,t="",n,a="")=>J0(t)+n+J0(a)):e.replace(/(^|[^\\])_+/g,(u,t)=>t+" ".repeat(u.length-t.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,u=>u.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}var U9=Symbol();var Td=new Proxy(pd,{apply(e,u,t){return Ba(t[0])},get(e,u){let t=Ba[u];return typeof t=="function"?function(){return t.apply(Ba,arguments)}:t}});var q9=function e(u){return new Proxy(function(t,...n){return Qi(u,"",t,n)},{get(t,n){return n==="bind"?e:n in t?t[n]:function(a,...r){return Qi(u,n,a,r)}}})}();function Qi(e,u,t,n){return{toString(){let a=Na(t,n),r=es(u+Y0(JSON.stringify([u,a])));return(typeof e=="function"?e:Td)(ls({[`@keyframes ${r}`]:Na(t,n)})),r}}}var wd=[k("\\[([-\\w]+):(.+)]",({1:e,2:u},t)=>({"@layer overrides":{"&":{[e]:Jt(`[${u}]`,e,t)}}})),k("(group|peer)(~[^-[]+)?",({input:e},{h:u})=>[{c:u(e)}]),T("aspect-","aspectRatio"),k("container",(e,{theme:u})=>{let{screens:t=u("screens"),center:n,padding:a}=u("container"),r={width:"100%",marginRight:n&&"auto",marginLeft:n&&"auto",...i("xs")};for(let o in t){let s=t[o];typeof s=="string"&&(r[X0(s)]={"&":{maxWidth:s,...i(o)}})}return r;function i(o){let s=a&&(typeof a=="string"?a:a[o]||a.DEFAULT);if(s)return{paddingRight:s,paddingLeft:s}}}),T("content-","content",({_:e})=>({"--tw-content":e,content:"var(--tw-content)"})),k("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),k("box-(border|content)","boxSizing",({1:e})=>e+"-box"),k("hidden",{display:"none"}),k("table-(auto|fixed)","tableLayout"),k(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",k("isolate","isolation"),k("object-(contain|cover|fill|none|scale-down)","objectFit"),T("object-","objectPosition"),k("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",Q0),k("overscroll(-[xy])?-(auto|contain|none)",({1:e="",2:u})=>({["overscroll-behavior"+e]:u})),k("(static|fixed|absolute|relative|sticky)","position"),T("-?inset(-[xy])?(?:$|-)","inset",({1:e,_:u})=>({top:e!="-x"&&u,right:e!="-y"&&u,bottom:e!="-x"&&u,left:e!="-y"&&u})),T("-?(top|bottom|left|right)(?:$|-)","inset"),k("visible","visibility"),k("invisible",{visibility:"hidden"}),T("-?z-","zIndex"),k("flex-((row|col)(-reverse)?)","flexDirection",ds),k("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),T("(flex-(?:grow|shrink))(?:$|-)"),T("(flex)-"),T("grow(?:$|-)","flexGrow"),T("shrink(?:$|-)","flexShrink"),T("basis-","flexBasis"),T("-?(order)-"),"-?(order)-(\\d+)",T("grid-cols-","gridTemplateColumns"),k("grid-cols-(\\d+)","gridTemplateColumns",ps),T("col-","gridColumn"),k("col-(span)-(\\d+)","gridColumn",ms),T("col-start-","gridColumnStart"),k("col-start-(auto|\\d+)","gridColumnStart"),T("col-end-","gridColumnEnd"),k("col-end-(auto|\\d+)","gridColumnEnd"),T("grid-rows-","gridTemplateRows"),k("grid-rows-(\\d+)","gridTemplateRows",ps),T("row-","gridRow"),k("row-(span)-(\\d+)","gridRow",ms),T("row-start-","gridRowStart"),k("row-start-(auto|\\d+)","gridRowStart"),T("row-end-","gridRowEnd"),k("row-end-(auto|\\d+)","gridRowEnd"),k("grid-flow-((row|col)(-dense)?)","gridAutoFlow",e=>Q0(ds(e))),k("grid-flow-(dense)","gridAutoFlow"),T("auto-cols-","gridAutoColumns"),T("auto-rows-","gridAutoRows"),T("gap-x(?:$|-)","gap","columnGap"),T("gap-y(?:$|-)","gap","rowGap"),T("gap(?:$|-)","gap"),"(justify-(?:items|self))-",k("justify-","justifyContent",gs),k("(content|items|self)-",e=>({["align-"+e[1]]:gs(e)})),k("(place-(content|items|self))-",({1:e,$$:u})=>({[e]:("wun".includes(u[3])?"space-":"")+u})),T("p([xytrbl])?(?:$|-)","padding",pt("padding")),T("-?m([xytrbl])?(?:$|-)","margin",pt("margin")),T("-?space-(x|y)(?:$|-)","space",({1:e,_:u})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[e]]:`calc(${u} * calc(1 - var(--tw-space-${e}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[e]]:`calc(${u} * var(--tw-space-${e}-reverse))`}})),k("space-(x|y)-reverse",({1:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"1"}})),T("w-","width"),T("min-w-","minWidth"),T("max-w-","maxWidth"),T("h-","height"),T("min-h-","minHeight"),T("max-h-","maxHeight"),T("font-","fontWeight"),T("font-","fontFamily","fontFamily",fu),k("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),k("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),k("italic","fontStyle"),k("not-italic",{fontStyle:"normal"}),k("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:e,2:u="",3:t})=>u=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(t?"numeric-fraction":"pt".includes(u[0])?"numeric-spacing":u?"numeric-figure":e)]:e,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"}}}),T("tracking-","letterSpacing"),T("leading-","lineHeight"),k("list-(inside|outside)","listStylePosition"),T("list-","listStyleType"),k("list-","listStyleType"),T("placeholder-opacity-","placeholderOpacity",({_:e})=>({"&::placeholder":{"--tw-placeholder-opacity":e}})),ke("placeholder-",{property:"color",selector:"&::placeholder"}),k("text-(left|center|right|justify|start|end)","textAlign"),k("text-(ellipsis|clip)","textOverflow"),T("text-opacity-","textOpacity","--tw-text-opacity"),ke("text-",{property:"color"}),T("text-","fontSize",({_:e})=>typeof e=="string"?{fontSize:e}:{fontSize:e[0],...typeof e[1]=="string"?{lineHeight:e[1]}:e[1]}),T("indent-","textIndent"),k("(overline|underline|line-through)","textDecorationLine"),k("no-underline",{textDecorationLine:"none"}),T("underline-offset-","textUnderlineOffset"),ke("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),T("decoration-","textDecorationThickness"),k("decoration-","textDecorationStyle"),k("(uppercase|lowercase|capitalize)","textTransform"),k("normal-case",{textTransform:"none"}),k("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),k("align-","verticalAlign"),k("whitespace-","whiteSpace"),k("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),k("break-words",{overflowWrap:"break-word"}),k("break-all",{wordBreak:"break-all"}),ke("caret-",{opacityVariable:!1,opacitySection:"opacity"}),ke("accent-",{opacityVariable:!1,opacitySection:"opacity"}),k("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:e})=>`linear-gradient(to ${Yu(e," ")},var(--tw-gradient-stops))`),ke("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-from":e.value,"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),ke("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`})),ke("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),k("bg-(fixed|local|scroll)","backgroundAttachment"),k("bg-origin-(border|padding|content)","backgroundOrigin",({1:e})=>e+"-box"),k(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),k("bg-blend-","backgroundBlendMode"),k("bg-clip-(border|padding|content|text)","backgroundClip",({1:e})=>e+(e=="text"?"":"-box")),T("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),ke("bg-",{section:"backgroundColor"}),T("bg-","backgroundImage"),T("bg-","backgroundPosition"),k("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",Q0),T("bg-","backgroundSize"),T("rounded(?:$|-)","borderRadius"),T("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:e,_:u})=>{let t={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[e]||[e,e];return{[`border-${Yu(t[0])}-radius`]:u,[`border-${Yu(t[1])}-radius`]:u}}),k("border-(collapse|separate)","borderCollapse"),T("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),k("border-(solid|dashed|dotted|double|none)","borderStyle"),T("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:e,_:u})=>({"@layer defaults":{"*,::before,::after,::backdrop":{"--tw-border-spacing-x":0,"--tw-border-spacing-y":0}},["--tw-border-spacing"+(e||"-x")]:u,["--tw-border-spacing"+(e||"-y")]:u,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),ke("border-([xytrbl])-",{section:"borderColor"},pt("border","Color")),ke("border-"),T("border-([xytrbl])(?:$|-)","borderWidth",pt("border","Width")),T("border(?:$|-)","borderWidth"),T("divide-opacity(?:$|-)","divideOpacity",({_:e})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":e}})),k("divide-(solid|dashed|dotted|double|none)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:e}})),k("divide-([xy]-reverse)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+e]:"1"}})),T("divide-([xy])(?:$|-)","divideWidth",({1:e,_:u})=>{let t={x:"lr",y:"tb"}[e];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${e}-reverse`]:"0",[`border-${Yu(t[0])}Width`]:`calc(${u} * calc(1 - var(--tw-divide-${e}-reverse)))`,[`border-${Yu(t[1])}Width`]:`calc(${u} * var(--tw-divide-${e}-reverse))`}}}),ke("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),T("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),ke("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),T("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),k("ring-inset",{"--tw-ring-inset":"inset"}),ke("ring-",{property:"--tw-ring-color"}),T("ring(?:$|-)","ringWidth",({_:e},{theme:u})=>({"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":u("ringOffsetWidth","","0px"),"--tw-ring-offset-color":Bu(u("ringOffsetColor","","#fff")),"--tw-ring-color":Bu(u("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":u("ringOpacity","","0.5")}}}})),ke("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-shadow-color":e.value,"--tw-shadow":"var(--tw-shadow-colored)"})),T("shadow(?:$|-)","boxShadow",({_:e})=>({"--tw-shadow":fu(e),"--tw-shadow-colored":fu(e).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}}})),T("(opacity)-"),k("mix-blend-","mixBlendMode"),...fs(),...fs("backdrop-"),T("transition(?:$|-)","transitionProperty",(e,{theme:u})=>({transitionProperty:fu(e),transitionTimingFunction:e._=="none"?void 0:fu(u("transitionTimingFunction","")),transitionDuration:e._=="none"?void 0:fu(u("transitionDuration",""))})),T("duration(?:$|-)","transitionDuration","transitionDuration",fu),T("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",fu),T("delay(?:$|-)","transitionDelay","transitionDelay",fu),T("animate(?:$|-)","animation",(e,{theme:u,h:t})=>{let n=fu(e),a=n.split(" "),r=u("keyframes",a[0]);return r?{["@keyframes "+(a[0]=t(a[0]))]:r,animation:a.join(" ")}:{animation:n}}),"(transform)-(none)",k("transform",Va),k("transform-(cpu|gpu)",({1:e})=>({"--tw-transform":hs(e=="gpu")})),T("scale(-[xy])?-","scale",({1:e,_:u})=>({["--tw-scale"+(e||"-x")]:u,["--tw-scale"+(e||"-y")]:u,...Va()})),T("-?(rotate)-","rotate",Wa),T("-?(translate-[xy])-","translate",Wa),T("-?(skew-[xy])-","skew",Wa),k("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",Q0),"(appearance)-",T("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",T("(cursor)-"),"(cursor)-",k("snap-(none)","scroll-snap-type"),k("snap-(x|y|both)",({1:e})=>({"scroll-snap-type":e+" var(--tw-scroll-snap-strictness)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-scroll-snap-strictness":"proximity"}}})),k("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),k("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),k("snap-(normal|always)","scroll-snap-stop"),k("scroll-(auto|smooth)","scroll-behavior"),T("scroll-p([xytrbl])?(?:$|-)","padding",pt("scroll-padding")),T("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",pt("scroll-margin")),k("touch-(auto|none|manipulation)","touch-action"),k("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:e,2:u,3:t})=>({[`--tw-${u?"pan-x":t?"pan-y":e}`]:e,"touch-action":"var(--tw-touch-action)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}}})),k("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),k("outline",{outlineStyle:"solid"}),k("outline-(dashed|dotted|double|hidden)","outlineStyle"),T("(outline-offset)-"),ke("outline-",{opacityVariable:!1,opacitySection:"opacity"}),T("outline-","outlineWidth"),"(pointer-events)-",T("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:e})=>({x:"horizontal",y:"vertical"})[e]||e||"both"],k("select-(none|text|all|auto)","userSelect"),ke("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),ke("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),T("stroke-","strokeWidth"),k("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),k("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function Q0(e){return(typeof e=="string"?e:e[1]).replace(/-/g," ").trim()}function ds(e){return(typeof e=="string"?e:e[1]).replace("col","column")}function Yu(e,u="-"){let t=[];for(let n of e)t.push({t:"top",r:"right",b:"bottom",l:"left"}[n]);return t.join(u)}function fu(e){return e&&""+(e._||e)}function gs({$$:e}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[e[3]||""]||"")+e}function pt(e,u=""){return({1:t,_:n})=>{let a={x:"lr",y:"tb"}[t]||t+t;return a?{...Yt(e+"-"+Yu(a[0])+u,n),...Yt(e+"-"+Yu(a[1])+u,n)}:Yt(e+u,n)}}function fs(e=""){let u=["blur","brightness","contrast","grayscale","hue-rotate","invert",e&&"opacity","saturate","sepia",!e&&"drop-shadow"].filter(Boolean),t={};for(let n of u)t[`--tw-${e}${n}`]="var(--tw-empty,/*!*/ /*!*/)";return t={[`${e}filter`]:u.map(n=>`var(--tw-${e}${n})`).join(" "),"@layer defaults":{"*,::before,::after,::backdrop":t}},[`(${e}filter)-(none)`,k(`${e}filter`,t),...u.map(n=>T(`${n[0]=="h"?"-?":""}(${e}${n})(?:$|-)`,n,({1:a,_:r})=>({[`--tw-${a}`]:Xe(r).map(i=>`${n}(${i})`).join(" "),...t})))]}function Wa({1:e,_:u}){return{["--tw-"+e]:u,...Va()}}function Va(){return{transform:"var(--tw-transform)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":hs()}}}}function hs(e){return[e?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function ms({1:e,2:u}){return`${e} ${u} / ${e} ${u}`}function ps({1:e}){return`repeat(${e},minmax(0,1fr))`}var Fd=Object.create,bs=Object.defineProperty,Sd=Object.getOwnPropertyDescriptor,Bd=Object.getOwnPropertyNames,Ld=Object.getPrototypeOf,_d=Object.prototype.hasOwnProperty,Md=(e,u)=>()=>(u||e((u={exports:{}}).exports,u),u.exports),Pd=(e,u,t,n)=>{if(u&&typeof u=="object"||typeof u=="function")for(let a of Bd(u))!_d.call(e,a)&&a!==t&&bs(e,a,{get:()=>u[a],enumerable:!(n=Sd(u,a))||n.enumerable});return e},Rd=(e,u,t)=>(t=e!=null?Fd(Ld(e)):{},Pd(u||!e||!e.__esModule?bs(t,"default",{value:e,enumerable:!0}):t,e)),jd=Md((e,u)=>{(function(t,n){typeof e=="object"&&typeof u=="object"?u.exports=n():typeof define=="function"&&define.amd?define([],n):typeof e=="object"?e.notie=n():t.notie=n()})(e,function(){return function(t){function n(r){if(a[r])return a[r].exports;var i=a[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var a={};return n.m=t,n.c=a,n.i=function(r){return r},n.d=function(r,i,o){n.o(r,i)||Object.defineProperty(r,i,{configurable:!1,enumerable:!0,get:o})},n.n=function(r){var i=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(i,"a",i),i},n.o=function(r,i){return Object.prototype.hasOwnProperty.call(r,i)},n.p="",n(n.s=1)}([function(t,n){t.exports=function(a){return a.webpackPolyfill||(a.deprecate=function(){},a.paths=[],a.children||(a.children=[]),Object.defineProperty(a,"loaded",{enumerable:!0,get:function(){return a.l}}),Object.defineProperty(a,"id",{enumerable:!0,get:function(){return a.i}}),a.webpackPolyfill=1),a}},function(t,n,a){"use strict";(function(r){var i,o,s,c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l};(function(l,g){c(n)==="object"&&c(r)==="object"?r.exports=g():(o=[],i=g,s=typeof i=="function"?i.apply(n,o):i,s!==void 0&&(r.exports=s))})(void 0,function(){return function(l){function g(d){if(f[d])return f[d].exports;var p=f[d]={i:d,l:!1,exports:{}};return l[d].call(p.exports,p,p.exports,g),p.l=!0,p.exports}var f={};return g.m=l,g.c=f,g.i=function(d){return d},g.d=function(d,p,y){g.o(d,p)||Object.defineProperty(d,p,{configurable:!1,enumerable:!0,get:y})},g.n=function(d){var p=d&&d.__esModule?function(){return d.default}:function(){return d};return g.d(p,"a",p),p},g.o=function(d,p){return Object.prototype.hasOwnProperty.call(d,p)},g.p="",g(g.s=0)}([function(l,g,f){function d(C,U){var B={};for(var te in C)U.indexOf(te)>=0||Object.prototype.hasOwnProperty.call(C,te)&&(B[te]=C[te]);return B}Object.defineProperty(g,"__esModule",{value:!0});var p=typeof Symbol=="function"&&c(Symbol.iterator)==="symbol"?function(C){return typeof C>"u"?"undefined":c(C)}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C>"u"?"undefined":c(C)},y=Object.assign||function(C){for(var U=1;U<arguments.length;U++){var B=arguments[U];for(var te in B)Object.prototype.hasOwnProperty.call(B,te)&&(C[te]=B[te])}return C},h={top:"top",bottom:"bottom"},m={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:h.top,force:h.top,confirm:h.top,input:h.top,select:h.bottom,date:h.top}},b=g.setOptions=function(C){m=y({},m,C,{classes:y({},m.classes,C.classes),ids:y({},m.ids,C.ids),positions:y({},m.positions,C.positions)})},x=function(){return new Promise(function(C){return setTimeout(C,0)})},D=function(C){return new Promise(function(U){return setTimeout(U,1e3*C)})},H=function(){document.activeElement&&document.activeElement.blur()},A=function(){var C="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(U){var B=16*Math.random()|0,te=U==="x"?B:3&B|8;return te.toString(16)});return"notie-"+C},W={1:m.classes.backgroundSuccess,success:m.classes.backgroundSuccess,2:m.classes.backgroundWarning,warning:m.classes.backgroundWarning,3:m.classes.backgroundError,error:m.classes.backgroundError,4:m.classes.backgroundInfo,info:m.classes.backgroundInfo,5:m.classes.backgroundNeutral,neutral:m.classes.backgroundNeutral},de=function(){return m.transitionSelector+" "+m.transitionDuration+"s "+m.transitionCurve},P=function(C){return C.keyCode===13},ce=function(C){return C.keyCode===27},ae=function(C,U){C.classList.add(m.classes.container),C.style[U]="-10000px",document.body.appendChild(C),C.style[U]="-"+C.offsetHeight+"px",C.listener&&window.addEventListener("keydown",C.listener),x().then(function(){C.style.transition=de(),C.style[U]=0})},R=function(C,U){var B=document.getElementById(C);B&&(B.style[U]="-"+B.offsetHeight+"px",B.listener&&window.removeEventListener("keydown",B.listener),D(m.transitionDuration).then(function(){B.parentNode&&B.parentNode.removeChild(B)}))},se=function(C,U){var B=document.createElement("div");B.id=m.ids.overlay,B.classList.add(m.classes.overlay),B.classList.add(m.classes.backgroundOverlay),B.style.opacity=0,C&&m.overlayClickDismiss&&(B.onclick=function(){R(C.id,U),Y()}),document.body.appendChild(B),x().then(function(){B.style.transition=de(),B.style.opacity=m.overlayOpacity})},Y=function(){var C=document.getElementById(m.ids.overlay);C.style.opacity=0,D(m.transitionDuration).then(function(){C.parentNode&&C.parentNode.removeChild(C)})},K=g.hideAlerts=function(C){var U=document.getElementsByClassName(m.classes.alert);if(U.length){for(var B=0;B<U.length;B++){var te=U[B];R(te.id,te.position)}C&&D(m.transitionDuration).then(function(){return C()})}},ue=g.alert=function(C){var U=C.type,B=U===void 0?4:U,te=C.text,$=C.time,fe=$===void 0?m.alertTime:$,Ee=C.stay,_e=Ee!==void 0&&Ee,v=C.position,L=v===void 0?m.positions.alert||L.top:v;H(),K();var O=document.createElement("div"),M=A();O.id=M,O.position=L,O.classList.add(m.classes.textbox),O.classList.add(W[B]),O.classList.add(m.classes.alert),O.innerHTML='<div class="'+m.classes.textboxInner+'">'+te+"</div>",O.onclick=function(){return R(M,L)},O.listener=function(w){(P(w)||ce(w))&&K()},ae(O,L),fe&&fe<1&&(fe=1),!_e&&fe&&D(fe).then(function(){return R(M,L)})},Ae=g.force=function(C,U){var B=C.type,te=B===void 0?5:B,$=C.text,fe=C.buttonText,Ee=fe===void 0?"OK":fe,_e=C.callback,v=C.position,L=v===void 0?m.positions.force||L.top:v;H(),K();var O=document.createElement("div"),M=A();O.id=M;var w=document.createElement("div");w.classList.add(m.classes.textbox),w.classList.add(m.classes.backgroundInfo),w.innerHTML='<div class="'+m.classes.textboxInner+'">'+$+"</div>";var V=document.createElement("div");V.classList.add(m.classes.button),V.classList.add(W[te]),V.innerHTML=Ee,V.onclick=function(){R(M,L),Y(),_e?_e():U&&U()},O.appendChild(w),O.appendChild(V),O.listener=function(re){P(re)&&V.click()},ae(O,L),se()},Ze=g.confirm=function(C,U,B){var te=C.text,$=C.submitText,fe=$===void 0?"Yes":$,Ee=C.cancelText,_e=Ee===void 0?"Cancel":Ee,v=C.submitCallback,L=C.cancelCallback,O=C.position,M=O===void 0?m.positions.confirm||M.top:O;H(),K();var w=document.createElement("div"),V=A();w.id=V;var re=document.createElement("div");re.classList.add(m.classes.textbox),re.classList.add(m.classes.backgroundInfo),re.innerHTML='<div class="'+m.classes.textboxInner+'">'+te+"</div>";var G=document.createElement("div");G.classList.add(m.classes.button),G.classList.add(m.classes.elementHalf),G.classList.add(m.classes.backgroundSuccess),G.innerHTML=fe,G.onclick=function(){R(V,M),Y(),v?v():U&&U()};var j=document.createElement("div");j.classList.add(m.classes.button),j.classList.add(m.classes.elementHalf),j.classList.add(m.classes.backgroundError),j.innerHTML=_e,j.onclick=function(){R(V,M),Y(),L?L():B&&B()},w.appendChild(re),w.appendChild(G),w.appendChild(j),w.listener=function(ve){P(ve)?G.click():ce(ve)&&j.click()},ae(w,M),se(w,M)},rt=function(C,U,B){var te=C.text,$=C.submitText,fe=$===void 0?"Submit":$,Ee=C.cancelText,_e=Ee===void 0?"Cancel":Ee,v=C.submitCallback,L=C.cancelCallback,O=C.position,M=O===void 0?m.positions.input||M.top:O,w=d(C,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);H(),K();var V=document.createElement("div"),re=A();V.id=re;var G=document.createElement("div");G.classList.add(m.classes.textbox),G.classList.add(m.classes.backgroundInfo),G.innerHTML='<div class="'+m.classes.textboxInner+'">'+te+"</div>";var j=document.createElement("input");j.classList.add(m.classes.inputField),j.setAttribute("autocapitalize",w.autocapitalize||"none"),j.setAttribute("autocomplete",w.autocomplete||"off"),j.setAttribute("autocorrect",w.autocorrect||"off"),j.setAttribute("autofocus",w.autofocus||"true"),j.setAttribute("inputmode",w.inputmode||"verbatim"),j.setAttribute("max",w.max||""),j.setAttribute("maxlength",w.maxlength||""),j.setAttribute("min",w.min||""),j.setAttribute("minlength",w.minlength||""),j.setAttribute("placeholder",w.placeholder||""),j.setAttribute("spellcheck",w.spellcheck||"default"),j.setAttribute("step",w.step||"any"),j.setAttribute("type",w.type||"text"),j.value=w.value||"",w.allowed&&(j.oninput=function(){var Me=void 0;if(Array.isArray(w.allowed)){for(var He="",Au=w.allowed,Eu=0;Eu<Au.length;Eu++)Au[Eu]==="an"?He+="0-9a-zA-Z":Au[Eu]==="a"?He+="a-zA-Z":Au[Eu]==="n"&&(He+="0-9"),Au[Eu]==="s"&&(He+=" ");Me=new RegExp("[^"+He+"]","g")}else p(w.allowed)==="object"&&(Me=w.allowed);j.value=j.value.replace(Me,"")});var ve=document.createElement("div");ve.classList.add(m.classes.button),ve.classList.add(m.classes.elementHalf),ve.classList.add(m.classes.backgroundSuccess),ve.innerHTML=fe,ve.onclick=function(){R(re,M),Y(),v?v(j.value):U&&U(j.value)};var eu=document.createElement("div");eu.classList.add(m.classes.button),eu.classList.add(m.classes.elementHalf),eu.classList.add(m.classes.backgroundError),eu.innerHTML=_e,eu.onclick=function(){R(re,M),Y(),L?L(j.value):B&&B(j.value)},V.appendChild(G),V.appendChild(j),V.appendChild(ve),V.appendChild(eu),V.listener=function(Me){P(Me)?ve.click():ce(Me)&&eu.click()},ae(V,M),j.focus(),se(V,M)};g.input=rt;var Ce=g.select=function(C,U){var B=C.text,te=C.cancelText,$=te===void 0?"Cancel":te,fe=C.cancelCallback,Ee=C.choices,_e=C.position,v=_e===void 0?m.positions.select||v.top:_e;H(),K();var L=document.createElement("div"),O=A();L.id=O;var M=document.createElement("div");M.classList.add(m.classes.textbox),M.classList.add(m.classes.backgroundInfo),M.innerHTML='<div class="'+m.classes.textboxInner+'">'+B+"</div>",L.appendChild(M),Ee.forEach(function(V,re){var G=V.type,j=G===void 0?1:G,ve=V.text,eu=V.handler,Me=document.createElement("div");Me.classList.add(W[j]),Me.classList.add(m.classes.button),Me.classList.add(m.classes.selectChoice);var He=Ee[re+1];He&&!He.type&&(He.type=1),He&&He.type===j&&Me.classList.add(m.classes.selectChoiceRepeated),Me.innerHTML=ve,Me.onclick=function(){R(O,v),Y(),eu()},L.appendChild(Me)});var w=document.createElement("div");w.classList.add(m.classes.backgroundNeutral),w.classList.add(m.classes.button),w.innerHTML=$,w.onclick=function(){R(O,v),Y(),fe?fe():U&&U()},L.appendChild(w),L.listener=function(V){ce(V)&&w.click()},ae(L,v),se(L,v)},ge=g.date=function(C,U,B){var te=C.value,$=te===void 0?new Date:te,fe=C.submitText,Ee=fe===void 0?"OK":fe,_e=C.cancelText,v=_e===void 0?"Cancel":_e,L=C.submitCallback,O=C.cancelCallback,M=C.position,w=M===void 0?m.positions.date||w.top:M;H(),K();var V="&#9662",re=document.createElement("div"),G=document.createElement("div"),j=document.createElement("div"),ve=function(me){re.innerHTML=m.dateMonths[me.getMonth()],G.innerHTML=me.getDate(),j.innerHTML=me.getFullYear()},eu=function(me){var du=new Date($.getFullYear(),$.getMonth()+1,0).getDate(),lt=me.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(lt)>du&&(lt=du.toString()),me.target.textContent=lt,Number(lt)<1&&(lt="1"),$.setDate(Number(lt))},Me=function(me){var du=me.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);me.target.textContent=du,$.setFullYear(Number(du))},He=function(me){ve($)},Au=function(me){var du=new Date($.getFullYear(),$.getMonth()+me+1,0).getDate();$.getDate()>du&&$.setDate(du),$.setMonth($.getMonth()+me),ve($)},Eu=function(me){$.setDate($.getDate()+me),ve($)},no=function(me){var du=$.getFullYear()+me;du<0?$.setFullYear(0):$.setFullYear($.getFullYear()+me),ve($)},Nu=document.createElement("div"),Mn=A();Nu.id=Mn;var Pn=document.createElement("div");Pn.classList.add(m.classes.backgroundInfo);var uu=document.createElement("div");uu.classList.add(m.classes.dateSelectorInner);var ot=document.createElement("div");ot.classList.add(m.classes.button),ot.classList.add(m.classes.elementThird),ot.classList.add(m.classes.dateSelectorUp),ot.innerHTML=V;var it=document.createElement("div");it.classList.add(m.classes.button),it.classList.add(m.classes.elementThird),it.classList.add(m.classes.dateSelectorUp),it.innerHTML=V;var st=document.createElement("div");st.classList.add(m.classes.button),st.classList.add(m.classes.elementThird),st.classList.add(m.classes.dateSelectorUp),st.innerHTML=V,re.classList.add(m.classes.element),re.classList.add(m.classes.elementThird),re.innerHTML=m.dateMonths[$.getMonth()],G.classList.add(m.classes.element),G.classList.add(m.classes.elementThird),G.setAttribute("contentEditable",!0),G.addEventListener("input",eu),G.addEventListener("blur",He),G.innerHTML=$.getDate(),j.classList.add(m.classes.element),j.classList.add(m.classes.elementThird),j.setAttribute("contentEditable",!0),j.addEventListener("input",Me),j.addEventListener("blur",He),j.innerHTML=$.getFullYear();var _t=document.createElement("div");_t.classList.add(m.classes.button),_t.classList.add(m.classes.elementThird),_t.innerHTML=V;var Mt=document.createElement("div");Mt.classList.add(m.classes.button),Mt.classList.add(m.classes.elementThird),Mt.innerHTML=V;var Pt=document.createElement("div");Pt.classList.add(m.classes.button),Pt.classList.add(m.classes.elementThird),Pt.innerHTML=V,ot.onclick=function(){return Au(1)},it.onclick=function(){return Eu(1)},st.onclick=function(){return no(1)},_t.onclick=function(){return Au(-1)},Mt.onclick=function(){return Eu(-1)},Pt.onclick=function(){return no(-1)};var Ou=document.createElement("div");Ou.classList.add(m.classes.button),Ou.classList.add(m.classes.elementHalf),Ou.classList.add(m.classes.backgroundSuccess),Ou.innerHTML=Ee,Ou.onclick=function(){R(Mn,w),Y(),L?L($):U&&U($)};var Iu=document.createElement("div");Iu.classList.add(m.classes.button),Iu.classList.add(m.classes.elementHalf),Iu.classList.add(m.classes.backgroundError),Iu.innerHTML=v,Iu.onclick=function(){R(Mn,w),Y(),O?O($):B&&B($)},uu.appendChild(ot),uu.appendChild(it),uu.appendChild(st),uu.appendChild(re),uu.appendChild(G),uu.appendChild(j),uu.appendChild(_t),uu.appendChild(Mt),uu.appendChild(Pt),Pn.appendChild(uu),Nu.appendChild(Pn),Nu.appendChild(Ou),Nu.appendChild(Iu),Nu.listener=function(me){P(me)?Ou.click():ce(me)&&Iu.click()},ae(Nu,w),se(Nu,w)};g.default={alert:ue,force:Ae,confirm:Ze,input:rt,select:Ce,date:ge,setOptions:b,hideAlerts:K}}])})}).call(n,a(0)(t))}])})}),zd=Rd(jd()),{default:Es,...Nd}=zd,Ka=Es!==void 0?Es:Nd;var h6=Symbol("clean");var E6=Symbol();function Ga(e,u){if(typeof e=="string")return u(e);{let t={};for(let n in e)t[n]=Ga(e[n],u);return t}}function xs(e){return u=>{if(u.transform){let t=u.transform;return u=u.input,{input:u,transform(n,a,r){let i=e(n,a,...r);return(...o)=>t(n,i,o)}}}else return{input:u,transform(t,n,a){return e(t,n,...a)}}}}var w6=xs((e,u,t)=>Ga(u,n=>{for(let a in t)n=n.replace(new RegExp(`{${a}}`,"g"),t[a]);return n})),v6=xs((e,u,t)=>{let n=new Intl.PluralRules(e).select(t);return n in u||(n="many"),Ga(u[n],a=>a.replace(/{count}/g,t))});var Ja=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Ya(e,u,t,n){e.addEventListener?e.addEventListener(u,t,n):e.attachEvent&&e.attachEvent("on".concat(u),function(){t(window.event)})}function Ts(e,u){for(var t=u.slice(0,u.length-1),n=0;n<t.length;n++)t[n]=e[t[n].toLowerCase()];return t}function ws(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var u=e.split(","),t=u.lastIndexOf("");t>=0;)u[t-1]+=",",u.splice(t,1),t=u.lastIndexOf("");return u}function Hd(e,u){for(var t=e.length>=u.length?e:u,n=e.length>=u.length?u:e,a=!0,r=0;r<t.length;r++)n.indexOf(t[r])===-1&&(a=!1);return a}var Qt={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":Ja?173:189,"=":Ja?61:187,";":Ja?59:186,"'":222,"[":219,"]":221,"\\":220},mu={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},Za={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Le={16:!1,18:!1,17:!1,91:!1},ye={};for(Xt=1;Xt<20;Xt++)Qt["f".concat(Xt)]=111+Xt;var Xt,ie=[],Cs=!1,vs="all",Fs=[],en=function(e){return Qt[e.toLowerCase()]||mu[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},$d=function(e){return Object.keys(Qt).find(function(u){return Qt[u]===e})},Ud=function(e){return Object.keys(mu).find(function(u){return mu[u]===e})};function Ss(e){vs=e||"all"}function Zt(){return vs||"all"}function qd(){return ie.slice(0)}function Wd(){return ie.map(function(e){return $d(e)||Ud(e)||String.fromCharCode(e)})}function Vd(e){var u=e.target||e.srcElement,t=u.tagName,n=!0;return(u.isContentEditable||(t==="INPUT"||t==="TEXTAREA"||t==="SELECT")&&!u.readOnly)&&(n=!1),n}function Kd(e){return typeof e=="string"&&(e=en(e)),ie.indexOf(e)!==-1}function Gd(e,u){var t,n;e||(e=Zt());for(var a in ye)if(Object.prototype.hasOwnProperty.call(ye,a))for(t=ye[a],n=0;n<t.length;)t[n].scope===e?t.splice(n,1):n++;Zt()===e&&Ss(u||"all")}function Jd(e){var u=e.keyCode||e.which||e.charCode,t=ie.indexOf(u);if(t>=0&&ie.splice(t,1),e.key&&e.key.toLowerCase()==="meta"&&ie.splice(0,ie.length),(u===93||u===224)&&(u=91),u in Le){Le[u]=!1;for(var n in mu)mu[n]===u&&(Qe[n]=!1)}}function Yd(e){if(typeof e>"u")Object.keys(ye).forEach(function(i){return delete ye[i]});else if(Array.isArray(e))e.forEach(function(i){i.key&&Xa(i)});else if(typeof e=="object")e.key&&Xa(e);else if(typeof e=="string"){for(var u=arguments.length,t=new Array(u>1?u-1:0),n=1;n<u;n++)t[n-1]=arguments[n];var a=t[0],r=t[1];typeof a=="function"&&(r=a,a=""),Xa({key:e,scope:a,method:r,splitKey:"+"})}}var Xa=function(e){var u=e.key,t=e.scope,n=e.method,a=e.splitKey,r=a===void 0?"+":a,i=ws(u);i.forEach(function(o){var s=o.split(r),c=s.length,l=s[c-1],g=l==="*"?"*":en(l);if(ye[g]){t||(t=Zt());var f=c>1?Ts(mu,s):[];ye[g]=ye[g].filter(function(d){var p=n?d.method===n:!0;return!(p&&d.scope===t&&Hd(d.mods,f))})}})};function Ds(e,u,t,n){if(u.element===n){var a;if(u.scope===t||u.scope==="all"){a=u.mods.length>0;for(var r in Le)Object.prototype.hasOwnProperty.call(Le,r)&&(!Le[r]&&u.mods.indexOf(+r)>-1||Le[r]&&u.mods.indexOf(+r)===-1)&&(a=!1);(u.mods.length===0&&!Le[16]&&!Le[18]&&!Le[17]&&!Le[91]||a||u.shortcut==="*")&&u.method(e,u)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function ks(e,u){var t=ye["*"],n=e.keyCode||e.which||e.charCode;if(Qe.filter.call(this,e)){if((n===93||n===224)&&(n=91),ie.indexOf(n)===-1&&n!==229&&ie.push(n),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(p){var y=Za[p];e[p]&&ie.indexOf(y)===-1?ie.push(y):!e[p]&&ie.indexOf(y)>-1?ie.splice(ie.indexOf(y),1):p==="metaKey"&&e[p]&&ie.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(ie=ie.slice(ie.indexOf(y))))}),n in Le){Le[n]=!0;for(var a in mu)mu[a]===n&&(Qe[a]=!0);if(!t)return}for(var r in Le)Object.prototype.hasOwnProperty.call(Le,r)&&(Le[r]=e[Za[r]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(ie.indexOf(17)===-1&&ie.push(17),ie.indexOf(18)===-1&&ie.push(18),Le[17]=!0,Le[18]=!0);var i=Zt();if(t)for(var o=0;o<t.length;o++)t[o].scope===i&&(e.type==="keydown"&&t[o].keydown||e.type==="keyup"&&t[o].keyup)&&Ds(e,t[o],i,u);if(n in ye){for(var s=0;s<ye[n].length;s++)if((e.type==="keydown"&&ye[n][s].keydown||e.type==="keyup"&&ye[n][s].keyup)&&ye[n][s].key){for(var c=ye[n][s],l=c.splitKey,g=c.key.split(l),f=[],d=0;d<g.length;d++)f.push(en(g[d]));f.sort().join("")===ie.sort().join("")&&Ds(e,c,i,u)}}}}function Xd(e){return Fs.indexOf(e)>-1}function Qe(e,u,t){ie=[];var n=ws(e),a=[],r="all",i=document,o=0,s=!1,c=!0,l="+",g=!1;for(t===void 0&&typeof u=="function"&&(t=u),Object.prototype.toString.call(u)==="[object Object]"&&(u.scope&&(r=u.scope),u.element&&(i=u.element),u.keyup&&(s=u.keyup),u.keydown!==void 0&&(c=u.keydown),u.capture!==void 0&&(g=u.capture),typeof u.splitKey=="string"&&(l=u.splitKey)),typeof u=="string"&&(r=u);o<n.length;o++)e=n[o].split(l),a=[],e.length>1&&(a=Ts(mu,e)),e=e[e.length-1],e=e==="*"?"*":en(e),e in ye||(ye[e]=[]),ye[e].push({keyup:s,keydown:c,scope:r,mods:a,shortcut:n[o],method:t,key:n[o],splitKey:l,element:i});typeof i<"u"&&!Xd(i)&&window&&(Fs.push(i),Ya(i,"keydown",function(f){ks(f,i)},g),Cs||(Cs=!0,Ya(window,"focus",function(){ie=[]},g)),Ya(i,"keyup",function(f){ks(f,i),Jd(f)},g))}function Qd(e){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(ye).forEach(function(t){var n=ye[t].filter(function(a){return a.scope===u&&a.shortcut===e});n.forEach(function(a){a&&a.method&&a.method()})})}var Qa={getPressedKeyString:Wd,setScope:Ss,getScope:Zt,deleteScope:Gd,getPressedKeyCodes:qd,isPressed:Kd,filter:Vd,trigger:Qd,unbind:Yd,keyMap:Qt,modifier:mu,modifierMap:Za};for(Z0 in Qa)Object.prototype.hasOwnProperty.call(Qa,Z0)&&(Qe[Z0]=Qa[Z0]);var Z0;typeof document<"u"&&(As=window.hotkeys,Qe.noConflict=function(e){return e&&window.hotkeys===Qe&&(window.hotkeys=As),Qe},window.hotkeys=Qe);var As;var U6=Ka.alert;var er=class{#e=performance.now();reset(){this.#e=performance.now()}stop(u){let t=performance.now(),n=Math.round(t-this.#e),a=Je.green;n>1e4?a=Je.red:n>1e3&&(a=Je.yellow),console.debug(Je.dim($u+" TIMING:"),u,"in",a(n+"ms")),this.#e=t}},e0=class{#e=1;get level(){return this.#e}setLevel(u){switch(u){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...u){this.#e<=0&&console.log(Je.dim($u+" DEBUG:"),...u)}info(...u){this.#e<=1&&console.log(Je.green($u+" INFO:"),...u)}warn(...u){this.#e<=2&&console.warn(Je.yellow($u+" WARN:"),...u)}error(...u){this.#e<=3&&console.error(Je.red($u+" ERROR:"),...u)}fatal(...u){this.#e<=4&&console.error(Je.red($u+" FATAL:"),...u)}timing(){return this.level===0?new er:{reset:()=>{},stop:()=>{}}}},S=new e0;var Pe=class extends Error{constructor(t,n,a){super(n);this.name=t,a&&(this.details=a)}};async function Bs(e){e.body;let{url:u,responseType:t,...n}=e;t||(t="json"),n={mode:"cors",...n};let r=await(e.fetchPolyfill||fetch)(u,n);if(r.ok&&r.status>=200&&r.status<400){if(t==="json")return await r.json();if(t==="text")return await r.text();if(t==="raw"){let i=await r.text(),o=Object.fromEntries([...r.headers.entries()]),s=r.url;return s||(r.headers.get("X-Final-URL")?s=r.headers.get("X-Final-URL"):s=u),{body:i,headers:o,status:r.status,statusText:r.statusText,url:s}}}else{let i;try{i=await r.text()}catch(o){S.error("parse response failed",o)}throw new Pe("fetchError",r.status+": "+r.statusText||"",i)}}function Lu(e,u){var t=(e&65535)+(u&65535),n=(e>>16)+(u>>16)+(t>>16);return n<<16|t&65535}function Zd(e,u){return e<<u|e>>>32-u}function tn(e,u,t,n,a,r){return Lu(Zd(Lu(Lu(u,e),Lu(n,r)),a),t)}function Re(e,u,t,n,a,r,i){return tn(u&t|~u&n,e,u,a,r,i)}function je(e,u,t,n,a,r,i){return tn(u&n|t&~n,e,u,a,r,i)}function ze(e,u,t,n,a,r,i){return tn(u^t^n,e,u,a,r,i)}function Ne(e,u,t,n,a,r,i){return tn(t^(u|~n),e,u,a,r,i)}function un(e,u){e[u>>5]|=128<<u%32,e[(u+64>>>9<<4)+14]=u;var t,n,a,r,i,o=1732584193,s=-271733879,c=-1732584194,l=271733878;for(t=0;t<e.length;t+=16)n=o,a=s,r=c,i=l,o=Re(o,s,c,l,e[t],7,-680876936),l=Re(l,o,s,c,e[t+1],12,-389564586),c=Re(c,l,o,s,e[t+2],17,606105819),s=Re(s,c,l,o,e[t+3],22,-1044525330),o=Re(o,s,c,l,e[t+4],7,-176418897),l=Re(l,o,s,c,e[t+5],12,1200080426),c=Re(c,l,o,s,e[t+6],17,-1473231341),s=Re(s,c,l,o,e[t+7],22,-45705983),o=Re(o,s,c,l,e[t+8],7,1770035416),l=Re(l,o,s,c,e[t+9],12,-1958414417),c=Re(c,l,o,s,e[t+10],17,-42063),s=Re(s,c,l,o,e[t+11],22,-1990404162),o=Re(o,s,c,l,e[t+12],7,1804603682),l=Re(l,o,s,c,e[t+13],12,-40341101),c=Re(c,l,o,s,e[t+14],17,-1502002290),s=Re(s,c,l,o,e[t+15],22,1236535329),o=je(o,s,c,l,e[t+1],5,-165796510),l=je(l,o,s,c,e[t+6],9,-1069501632),c=je(c,l,o,s,e[t+11],14,643717713),s=je(s,c,l,o,e[t],20,-373897302),o=je(o,s,c,l,e[t+5],5,-701558691),l=je(l,o,s,c,e[t+10],9,38016083),c=je(c,l,o,s,e[t+15],14,-660478335),s=je(s,c,l,o,e[t+4],20,-405537848),o=je(o,s,c,l,e[t+9],5,568446438),l=je(l,o,s,c,e[t+14],9,-1019803690),c=je(c,l,o,s,e[t+3],14,-187363961),s=je(s,c,l,o,e[t+8],20,1163531501),o=je(o,s,c,l,e[t+13],5,-1444681467),l=je(l,o,s,c,e[t+2],9,-51403784),c=je(c,l,o,s,e[t+7],14,1735328473),s=je(s,c,l,o,e[t+12],20,-1926607734),o=ze(o,s,c,l,e[t+5],4,-378558),l=ze(l,o,s,c,e[t+8],11,-2022574463),c=ze(c,l,o,s,e[t+11],16,1839030562),s=ze(s,c,l,o,e[t+14],23,-35309556),o=ze(o,s,c,l,e[t+1],4,-1530992060),l=ze(l,o,s,c,e[t+4],11,1272893353),c=ze(c,l,o,s,e[t+7],16,-155497632),s=ze(s,c,l,o,e[t+10],23,-1094730640),o=ze(o,s,c,l,e[t+13],4,681279174),l=ze(l,o,s,c,e[t],11,-358537222),c=ze(c,l,o,s,e[t+3],16,-722521979),s=ze(s,c,l,o,e[t+6],23,76029189),o=ze(o,s,c,l,e[t+9],4,-640364487),l=ze(l,o,s,c,e[t+12],11,-421815835),c=ze(c,l,o,s,e[t+15],16,530742520),s=ze(s,c,l,o,e[t+2],23,-995338651),o=Ne(o,s,c,l,e[t],6,-198630844),l=Ne(l,o,s,c,e[t+7],10,1126891415),c=Ne(c,l,o,s,e[t+14],15,-1416354905),s=Ne(s,c,l,o,e[t+5],21,-57434055),o=Ne(o,s,c,l,e[t+12],6,1700485571),l=Ne(l,o,s,c,e[t+3],10,-1894986606),c=Ne(c,l,o,s,e[t+10],15,-1051523),s=Ne(s,c,l,o,e[t+1],21,-2054922799),o=Ne(o,s,c,l,e[t+8],6,1873313359),l=Ne(l,o,s,c,e[t+15],10,-30611744),c=Ne(c,l,o,s,e[t+6],15,-1560198380),s=Ne(s,c,l,o,e[t+13],21,1309151649),o=Ne(o,s,c,l,e[t+4],6,-145523070),l=Ne(l,o,s,c,e[t+11],10,-1120210379),c=Ne(c,l,o,s,e[t+2],15,718787259),s=Ne(s,c,l,o,e[t+9],21,-343485551),o=Lu(o,n),s=Lu(s,a),c=Lu(c,r),l=Lu(l,i);return[o,s,c,l]}function Ls(e){var u,t="",n=e.length*32;for(u=0;u<n;u+=8)t+=String.fromCharCode(e[u>>5]>>>u%32&255);return t}function ur(e){var u,t=[];for(t[(e.length>>2)-1]=void 0,u=0;u<t.length;u+=1)t[u]=0;var n=e.length*8;for(u=0;u<n;u+=8)t[u>>5]|=(e.charCodeAt(u/8)&255)<<u%32;return t}function eg(e){return Ls(un(ur(e),e.length*8))}function ug(e,u){var t,n=ur(e),a=[],r=[],i;for(a[15]=r[15]=void 0,n.length>16&&(n=un(n,e.length*8)),t=0;t<16;t+=1)a[t]=n[t]^909522486,r[t]=n[t]^1549556828;return i=un(a.concat(ur(u)),512+u.length*8),Ls(un(r.concat(i),512+128))}function _s(e){var u="0123456789abcdef",t="",n,a;for(a=0;a<e.length;a+=1)n=e.charCodeAt(a),t+=u.charAt(n>>>4&15)+u.charAt(n&15);return t}function tr(e){return unescape(encodeURIComponent(e))}function Ms(e){return eg(tr(e))}function tg(e){return _s(Ms(e))}function Ps(e,u){return ug(tr(e),tr(u))}function ng(e,u){return _s(Ps(e,u))}function ht(e,u,t){return u?t?Ps(u,e):ng(u,e):t?Ms(e):tg(e)}function Rs(e,u,t){let n=ag(e,u),a=[],r={from:e[0].from,to:e[0].to,tempSentences:[],url:e[0].url};for(let i of n)(r.tempSentences.reduce((s,c)=>s+c.text.length,0)+i.text.length>u||r.tempSentences.length>=t)&&(a.push(r),r={from:i.from,to:i.to,tempSentences:[],url:i.url}),(r.from!==i.from||r.to!==i.to)&&(r.tempSentences.length>0?(a.push(r),r={from:i.from,to:i.to,tempSentences:[],url:i.url}):(r.from=i.from,r.to=i.to)),r.tempSentences.push(i);return r.tempSentences.length>0&&a.push(r),a}function ag(e,u){let t=[];for(let n=0;n<e.length;n++){let a=e[n],{from:r,to:i,text:o,url:s}=a,c=o.split(/\r?\n/),l=[],g="";for(let f=0;f<c.length;f++){let d=c[f];if(d===""){l.length>0?f<c.length-1&&(l[l.length-1].suffix+=`
`):g+=`
`;continue}else if(d.length>u){let p=[];nr(d,u,p);for(let y=0;y<p.length;y++){let h=p[y],{text:m,prefix:b,suffix:x}=h;l.push({from:r,to:i,text:m,prefix:b,suffix:x,index:n,url:s})}}else l.push({text:d,prefix:g,suffix:"",from:r,to:i,index:n,url:s});l.length>0&&f<c.length-1&&(l[l.length-1].suffix+=`
`)}t.push(...l)}return t}function u0(e,u){let t=Ju(e),n=Ju(u),a=t===n;return a?!0:(a=t.startsWith("zh")&&n.startsWith("zh"),a)}function nr(e,u,t){let a=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((r,i)=>{let o=e.lastIndexOf(i,u);return o>r?o:r},-1);if(a===-1)t.push({text:e.slice(0,u),prefix:"",suffix:""}),e.length>u&&nr(e.slice(u),u,t);else{let r=e.slice(0,a+1);r.startsWith(" ")?t.push({text:r.slice(1),prefix:" ",suffix:""}):t.push({text:r,prefix:"",suffix:""}),a+1<e.length&&nr(e.slice(a+1),u,t)}return t}var Et=[];async function nn(e,u){return await new Promise((t,n)=>{let a=e,r=1,i=indexedDB.open(a,r);i.onsuccess=o=>{t(i.result)},i.onerror=o=>{console.error("onerror: Error opening the database, switching to non-database mode",o),n()},i.onupgradeneeded=o=>{let s=i.result,c=u||"cache";s.createObjectStore(c,{keyPath:"key"})}})}async function js(e){let u=`${le}-${e.service}@${e.from}->${e.to}`;return await og(u,e)}async function zs(e){let u=ht(e.originalText),t=`${le}-${e.service}@${e.from}->${e.to}`;return await rg(t,u)}async function rg(e,u){let t=await nn(e);return await new Promise((n,a)=>{if(!t)return a();let r="cache",o=t.transaction([r],"readonly").objectStore(r).get(u);o.onsuccess=s=>{t.close();let c=o.result;n(c)},o.onerror=s=>{t.close(),console.error("queryInDB->onerror:",s),a()}})}async function og(e,u){let t=await nn(e);return(await sg()).includes(e)||await ig(e),await new Promise(a=>{if(!t)return a(!1);let r="cache",o=t.transaction([r],"readwrite").objectStore(r).put(u);o.onsuccess=s=>{t.close(),a(!0)},o.onerror=s=>{console.error("addInDB->onerror:",s),t.close(),a(!1)}})}async function ig(e){let u="cache_list",t=await nn(le+"-cacheList",u),a=t.transaction([u],"readwrite").objectStore(u).put({key:e});a.onsuccess=r=>{t.close(),Et.push(e)},a.onerror=r=>{t.close(),console.error(r)}}async function sg(){if(Et&&Et.length>0)return Et;let e=await nn(le+"-cacheList","cache_list");return Et=await new Promise(u=>{let t="cache_list",a=e.transaction([t],"readonly").objectStore(t).getAllKeys();a.onsuccess=r=>{e.close(),u(a.result)},a.onerror=r=>{e.close(),console.error(r),u([])}}),Et}var Os="auto",an="auto",Ns="auto";function Is(e){Os=e}function bt(e){an=e}function yt(){return an!=="auto"?an:Ns!=="auto"?Ns:Os}function ar(){return an}var t0=new Map,xt=class{constructor(u,t=!1){this.logger=new e0,t&&this.logger.setLevel("debug"),this.fromType=u,t0.has(u)||(t0.set(u,new Map),q.runtime.onMessage.addListener((n,a,r)=>{let i=n.from,o=n.to,s,c,l;a.tab&&a.tab.id&&(s=a.tab.id,i=`${i}:${s}`,c=a.tab.url,l=a.tab.active),this.logger.debug(`${n.to} received message [${n.payload.method}] from ${n.from}`,n.payload.data?n.payload.data:" ");let g=or(o),{type:f,name:d}=g;if(f!==u)return!1;let p=or(i),h=t0.get(f).get(d);if(!h)return this.logger.debug(`no message handler for ${f}:${o}`),r({ok:!1,errorName:"notActive",errorMessage:`${o} is not active, from ${i} ${n.payload.method}`}),!1;let{messageHandler:m,sync:b}=h,x={type:u,name:p.name,id:s,url:c,active:l};if(b){try{let D=m(n.payload,x);r({ok:!0,data:D})}catch(D){r({ok:!1,errorName:D.name,errorMessage:D.message,errorDetails:D.details})}return!1}else return m(n.payload,x).then(D=>{r({ok:!0,data:D})}).catch(D=>{r({ok:!1,errorName:D.name,errorMessage:D.message,errorDetails:D.details})}),!0}))}getConnection(u,t,n){let a=!1;n&&n.sync&&(a=!0);let r=this.fromType,i=t0.get(r);if(i.has(u))return i.get(u).connectionInstance;{let o=new rr(`${r}:${u}`,this.logger);return t0.get(r).set(u,{messageHandler:t,sync:a,connectionInstance:o}),o}}},rr=class{constructor(u,t){this.from=u,this.logger=t}async sendMessage(u,t){let n=or(u),{type:a,id:r}=n;if(a!=="content_script"){let i={to:u,from:this.from,payload:t};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");try{let o=await q.runtime.sendMessage(i);return Hs(i,o,this.logger)}catch(o){if(a==="popup"){let s=`popup ${u} is not active, so the message does not send, ignore this error, ${JSON.stringify(t)}`;return this.logger.debug(s,t,u,o),Promise.resolve({message:s})}else throw o}}else{let i={from:this.from,to:u,payload:t};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");let o=await q.tabs.sendMessage(r,i);return Hs(i,o,this.logger)}}};function Hs(e,u,t){if(u.ok)return t.debug(`${e.from} received response from ${e.to}:`,u.data?u.data:" "),u.data;throw new Pe(u.errorName||"UnknownError",u.errorMessage||"Unknown error",u.errorDetails)}function or(e){let u=e.split(":");if(u.length<2)throw new Error("not a valid to string");let t={type:u[0],name:u[1]};if(u[0]==="content_script"){let n=parseInt(u[2]);if(!isNaN(n))t.id=n;else throw new Error("tab id not a valid number")}return t}var n0=async function(e,u){let{method:t,data:n}=e;t==="translateTheWholePage"?await a0():t==="translateTheMainPage"?await Dt():t==="translateToThePageEndImmediately"?await ln():t==="toggleTranslatePage"?await Ct():t==="toggleTranslateTheWholePage"?await Ws():t==="toggleTranslateTheMainPage"?await qs():t==="translatePage"?await hu():t==="restorePage"?pu():t==="showTranslationOnly"?Us():t==="setCurrentPageLanguageByClient"&&bt(n)},lg=function(e,u){let{method:t,data:n}=e;if(S.debug(`content script received sync message: ${t}`,n||" "),t==="ping")return"pong";if(t==="getPageStatus")return We();if(t==="getCurrentPageLanguage")return yt()},rn,on;function $s(){let e=sn();cg(),e.sendMessage("popup:main_sync",{method:"ready"}).catch(u=>{})}function sn(){return rn||(rn=new xt("content_script",!1).getConnection("main",n0),rn)}function cg(){return on||(on=new xt("content_script",!1).getConnection("main_sync",lg,{sync:!0}),on)}async function Xu(e){return await sn().sendMessage("background:main",e)}function Q(e){return Fe()||ho()?(e.fetchPolyfill=globalThis.GM_fetch,Bs(e)):Xu({method:"fetch",data:e})}function Qu(){return Fe()?yu():Xu({method:"getConfig"})}function ru(e){if(e.text){let u=b0(e.text);if(u!=="auto")return Promise.resolve(u)}else return Promise.resolve("auto");if(Fe()){let u=q.extra.detectLanguage(e.text);return Promise.resolve(u)}return Xu({method:"detectLanguage",data:e})}function Vs(){return Xu({method:"detectTabLanguage"})}function Ks(e){if(Fe()){let t=new CustomEvent(x0,{detail:e});document.dispatchEvent(t);return}sn().sendMessage("popup:main_sync",{method:"setPageStatus",data:e}).catch(t=>{})}function Gs(e){return Fe()?zs(e):Xu({method:"queryParagraphCache",data:e})}async function Js(e){if(Fe()){await js(e);return}return Xu({method:"setParagraphCache",data:e})}async function ir(){if(Fe())return Promise.resolve();await Xu({method:"mockRequest"})}async function Ys(){let e="auto";return document.body&&document.body.textContent&&document.body.textContent.trim()&&(e=await ru({text:S0(document.body)})),e==="auto"&&document.documentElement&&document.documentElement.lang&&(e=Ju(document.documentElement.lang)),e}function sr(e,u){if(!(e&&e.textContent&&e.textContent.trim()))return[];let{rule:t,state:{translationArea:n}}=u,a=[];if(n==="body")return[e];if(t&&t.selectors.length>0){let i=t.selectors.map(o=>{let s=e.matches(o),c=[];s?c=[e]:c=e.querySelectorAll(o);for(let l of c)Z(l,Uu)||ne(l,Uu,"1");return Array.from(c)}).flat();a.push(...i.map(o=>({element:o,reserve:!0})))}else{if(t&&t.additionalSelectors.length>0){let g=Ge(e,t.additionalSelectors);for(let f of g)Z(f,Uu)||ne(f,Uu,"1");a.push(...g.map(f=>({element:f,reserve:!0})))}let i=Ge(e,["article"]);a.push(...i.map(g=>({element:g,reserve:!0})));let o;if(a.length===0&&(o=e.querySelectorAll("[role=main]"),o.length===0&&(o=e.querySelectorAll("main")),o.length===0&&(o=e.querySelectorAll(".main")),o.length>0)){let g=Array.from(o);a=a.concat(g.map(f=>({element:f,reserve:!0})))}let s=[],c=g=>{if(g.nodeType===Node.ELEMENT_NODE&&$e(g,u.rule,!1))return NodeFilter.FILTER_REJECT;if(g.nodeType===Node.TEXT_NODE&&(g.textContent?g.textContent.trim():"").length>=t.containerMinTextCount){let d=g.parentNode;d&&d.parentNode&&(d=d.parentNode),d&&d.nodeType===Node.ELEMENT_NODE&&(s.includes(d)||s.push(d))}return NodeFilter.FILTER_ACCEPT},l=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,c);for(;l.nextNode(););a.push(...s.map(g=>({element:g,reserve:!1})))}let r=Mo(e,a,t);return r.sort(function(i,o){return i.compareDocumentPosition(o)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}),r}var lr=[];function Xs(e){lr.push(e)}function cr(){lr.forEach(e=>e()),lr=[]}function ou(e,u,t){let n=[],{rule:a}=t,r=$t(t);if(e.length===0)return null;e=e.map(f=>f.element?f:{element:f});let i="",o=!1;for(let f=0;f<e.length;f++){let p=e[f].element;if(typeof p=="string"){i+=p;continue}let y="";B0(p,`[${Ke}]`)?y=dg(p):y=p.innerText;let h=y.startsWith(" "),m=y.endsWith(" ");p.tagName==="A"&&(h=!0,m=!0);let b=gt(p,a);if(y===""||b){b&&(h=!0,m=!0);let x={type:"element",value:p};n.push(x);let D=n.length-1,H=`${r[0]}${D}${r[1]}`;i+=(h?" ":"")+H+(m?" ":"");continue}if(!$e(p,a,!0)){{let x=u?y:y.trim().replace(/\n/g," ");if(Qn(x)||Zn(x)||ea(x)||No(x)){let D={type:"element",value:p};n.push(D);let H=n.length-1,A=`${r[0]}${H}${r[1]}`;i+=(h?" ":"")+A+(m?" ":"")}else o=!0,i+=(h?" ":"")+x+(m?" ":"")}if(typeof p!="string"){let x=Ht(p.nextSibling,u);x&&(i+=x)}}}if(!o)return null;let s=!1,c=i.split(" ").length,l=i.split(`
`).length;c<=a.blockMinWordCount&&i.length<=a.blockMinTextCount&&l<2&&(s=!0);let g={elements:e.map(f=>f.element),text:i,variables:n,inline:s,preWhitespace:u};return jo(g,t.state.translationArea==="body"?2:a.paragraphMinTextCount,t.state.translationArea==="body"?1:a.paragraphMinWordCount,t)?g:null}function dg(e){let u="",t=a=>a.nodeType===Node.ELEMENT_NODE?Z(a,Ke)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:a.nodeType===Node.TEXT_NODE?(a.textContent&&a.textContent.trim()!==""&&(u+=a.textContent.replace(/\s+/g," ")),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT,n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,t);for(;n.nextNode(););return u}var gg=1,kt=new Map;function e4(){return kt}function _u(e){return kt.get(e)}function r0(e,u){kt.set(e,u)}function u4(){kt.clear()}function Qs(e){if(!Z(e,Wu))return!1;if(Z(e,Vu))return!0;let u=wu(e,Ku);if(!u)return!1;let t=parseInt(u),n=kt.has(t);if(!n){let a=document.getElementById(`${Ue}-${t}`);a&&a.remove()}return n}function Cu(e,u){let t={...e,id:gg++};t.elements.forEach(n=>{n instanceof HTMLElement&&(ne(n,Wu,"1"),ne(n,Ku,`${t.id}`))}),u.push(t),kt.set(t.id,{...t,state:"Original",observers:[]})}async function t4(e,u,t){let n=[],{targetLanguage:a,rule:r}=t;for(let l of u){if($e(l,r,!1))continue;let g=Z(l,ct),f=[];if(Z(l,Ve)){if(!Qs(l)){let h=ou([l],g,t);h&&Cu(h,n)}continue}let d=h=>{if(!(h.nodeType===Node.TEXT_NODE||h.nodeType===Node.ELEMENT_NODE))return NodeFilter.FILTER_REJECT;if(h.nodeType===Node.ELEMENT_NODE){let m=h;if(m.isContentEditable||Qs(h))return NodeFilter.FILTER_REJECT;if(ne(m,Wu,"1"),Z(m,Ve)){if(f.length>0){let x=ou([...f],g,t);x&&Cu(x,n),f.length=0}f.push(m);let b=ou([...f],g,t);return b&&Cu(b,n),f.length=0,NodeFilter.FILTER_REJECT}}if($e(h,r,!0)){if((h.nodeName==="CODE"||h.nodeName==="TT")&&h.parentNode?.nodeName==="PRE")return NodeFilter.FILTER_REJECT;if(nu(h,r))return Zs(h,f,n,g,t),NodeFilter.FILTER_REJECT;if(f.length>0){let m=ou([...f],g,t);m&&Cu(m,n),f.length=0}return NodeFilter.FILTER_REJECT}return h.nodeName==="PRE"?(h.classList.contains("code"),NodeFilter.FILTER_REJECT):nu(h,r)?(Zs(h,f,n,g,t),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT},p=document.createTreeWalker(l,NodeFilter.SHOW_ELEMENT,d),y=p.nextNode();for(;y;){if(f.length>0){let h=ou([...f],g,t);h&&Cu(h,n),f.length=0}y=p.nextNode()}if(f.length>0){let h=ou([...f],g,t);h&&Cu(h,n),f.length=0}}let i=n.map(l=>{let{text:g}=l;return ru({text:g})}),o=await Promise.all(i),s=[],c=t?.config?.translationLanguagePattern?.excludeMatches||[];return o.forEach((l,g)=>{if(!u0(l,a)){if(c.length>0&&c.some(p=>u0(l,p)))return;s.push(n[g])}}),n=s,n}function fg(e,u){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null),a=null,r=!1;for(;a=n.nextNode();){let o=a.textContent||"",s=o.trim();if(!r&&o.length>0&&s.length===0){r=!0,t.push(" ");continue}s.length>0&&(t.push(a.parentElement),r=!1)}let i=t[t.length-1];if(i&&typeof i!="string"){let o=Ht(i.nextSibling,u);o&&t.push(o)}if(typeof t[t.length-1]!="string"){let o=Ht(e.nextSibling,u);o&&t.push(o)}return t}function Zs(e,u,t,n,a){let r=e.previousElementSibling;if(r&&!nu(r,a.rule)&&u.length>0){let o=ou([...u],n,a);o&&Cu(o,t),u.length=0}$e(e,a.rule,!1)?Ro(e,a.rule)||u.push(e):gt(e,a.rule)?u.push(e):B0(e,["code","tt"])?u.push(...fg(e,n)):u.push(e)}async function o4(e,u,t,n){let a=[],{rule:r}=t;for(let i=0;i<u.length;i++){let o=u[i],s=n[i];if(!s)throw new Error("targetContainer is null");let c=[],l=!0,g=null,f=function(y){let h=y;if(["DIV","BR"].includes(h.nodeName))return l=!0,NodeFilter.FILTER_REJECT;if(h.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(pg(y))return NodeFilter.FILTER_REJECT;if(ne(h,Wu,"1"),nu(h,r)){let m=dt(c),b=globalThis.getComputedStyle(h);if(!m)c.push(r4(h,b));else{let x=globalThis.getComputedStyle(m),D=dr(x),H=dr(b),A=a4(H,D),W=!1;l&&g&&a4(H,g).left>=1.2&&(W=!0),!W&&l&&dt(c)&&F0(c).reduce((ae,R)=>{let se=dr(globalThis.getComputedStyle(R));return Math.max(ae,se.right)},0)-D.right>r.pdfNewParagraphIndentRightIndentPx&&(W=!0),l&&(g=H,l=!1),W||(W=mg(A,r)),W&&n4(c,a,t,s),c.push(r4(h,b)),c.push(" ")}return NodeFilter.FILTER_REJECT}return NodeFilter.FILTER_ACCEPT},d=document.createTreeWalker(o,NodeFilter.SHOW_ELEMENT,f),p=d.nextNode();for(;p;)p=d.nextNode();n4(c,a,t,s)}return a}function n4(e,u,t,n){if(e.length>0){let a=ou([...e],!1,t);a&&(a.isPdf=!0,a.targetContainer=n,a.inline=!1,Cu(a,u)),e.length=0}}function dr(e){return{top:parseFloat(e.top.slice(0,-2)),left:parseFloat(e.left.slice(0,-2)),right:parseFloat(e.left.slice(0,-2))+parseFloat(e.width.slice(0,-2)),fontSize:parseFloat(e.fontSize.slice(0,-2))}}function mg(e,u){return e.fontSize>2||e.fontSize<-2||e.top>=u.pdfNewParagraphLineHeight||e.top<0}function a4(e,u){let t=u.fontSize,n=e.fontSize;return{top:(e.top-u.top)/t,left:(e.left-u.left)/t,fontSize:n-t}}function r4(e,u){return u.fontFamily==="monospace"?{element:e,isStayOriginal:!0,targetTagName:"code"}:e}function pg(e){if(!Z(e,Wu))return!1;if(Z(e,Vu))return!0;let u=wu(e,Ku);if(!u)return!1;let t=parseInt(u),a=e4().has(t);if(!a){let r=document.getElementById(`${Ue}-${t}`);r&&r.remove()}return a}function i4(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function hg(e,u,t=[],n,a){let r=["notranslate"];return n&&r.push(So),e&&(r.push(`${le}-target-translation-theme-${e}`),u?r.push(`${Vn}-theme-${e}`):r.push(`${Wn}-theme-${e}`)),t.length>0&&r.push(...t),u?r.push(Vn):(r.push(Wn),a&&r.push(Fo)),r}function Eg(e){let u=["notranslate",vo];return e&&u.push(`${le}-target-translation-theme-${e}-inner`),u}function s4(e,u,t){let{rule:n,translationTheme:a}=t,{variables:r}=e;r=r||[];let{text:i}=u,{wrapperPrefix:o,wrapperSuffix:s}=n,c=$t(t),l="afterend",g=new RegExp(`${c[0]}(\\d+)${c[1]}`,"g"),f=0,d=i4(i);r.length>0&&(d=d.replace(g,h=>{let m=d.indexOf(h),b=d[m-1]===" ",x=d[m+h.length]===" ",D=r[Number(f)];if(f++,D.type==="element"){let H=D.value.outerHTML;return b||(H=" "+H),x||(H=H+" "),H}else S.error("variable type not supported",D);return h}));let p=hg(a,e.inline,n.translationClasses||[],e.preWhitespace,t.rule.isPdf),y=Eg(a);return d=`<span class="${p.join(" ")}"><span class="${y.join(" ")}">${d}</span></span>`,e.inline||(o==="smart"?d=`<br>${d}`:d=`${o}${d}`,s==="smart"?d=`${d}`:d=`${d}${s}`),e.inline&&(d=`<span class="notranslate">&nbsp;</span>${d}`),{html:d,position:l}}function c4(e,u){let t=[];for(let n of e){if(Z(n,Ve))continue;if(ne(n,On,"1"),n.normalize(),u.lineBreakMaxTextCount>0){let r=o=>o.nodeType===Node.ELEMENT_NODE&&$e(o,u,!0)?NodeFilter.FILTER_REJECT:(o.nodeType===Node.TEXT_NODE&&(o.textContent?o.textContent.trim():"").length>=u.lineBreakMaxTextCount&&fr(o,u.lineBreakMaxTextCount),NodeFilter.FILTER_ACCEPT),i=document.createTreeWalker(n,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,r);for(;i.nextNode(););}if(!(u.excludeTags.includes("PRE")||u.additionalExcludeTags.includes("PRE"))&&u.isTransformPreTagNewLine){let r=n.querySelectorAll("pre");for(let i of r)l4(i)}u.preWhitespaceDetectedTags.includes(n.tagName)&&(Oo(n,ct)||(bg(n)?(ne(n,ct,"1"),u.isTransformPreTagNewLine&&l4(n)):ne(n,ct,"0"))),gr(0,n,u,t)}return{hiddenElements:t}}function gr(e,u,t,n=[]){if(Z(u,Ve))return;let a=!1;if(e===0){let r=gt(u,t);u.childNodes&&u.childNodes.length===1&&u.nodeType===Node.ELEMENT_NODE&&nu(u,t)&&!r&&(a=!0)}if(u&&u.childNodes&&u.childNodes.length>0){for(let r of u.childNodes)if(r.nodeType===Node.ELEMENT_NODE){if($e(r,t,!1))continue;{let i=globalThis.getComputedStyle(r),o=!1;if(i.display==="none"&&(n.push(r),o=!0),!o){let s=i.clip,c=i.zIndex,l=i.height,g=i.width,f=0;if(c.startsWith("-")){let d=parseInt(c);isNaN(d)||(f=d)}if((s==="rect(1px, 1px, 1px, 1px)"||f<0)&&(o=!0),!o&&r.nodeName!=="BR"){let d=parseInt(l),p=parseInt(g);!isNaN(d)&&!isNaN(p)&&(d>0&&d<8||p>0&&p<=8)&&(o=!0)}}if(o){ne(r,Ke,"1");continue}else{if(r.nodeName==="DIV"||Ho(r,t)){if((i.display==="inline"||i.display==="inline-flex")&&!Z(r,Gu)){ne(r,bu,"1");continue}}else if((r.nodeName==="SPAN"||r.nodeName==="A")&&!i.display.startsWith("inline")){Z(r,bu)||(ne(r,Gu,"1"),gr(e+1,r,t,n));continue}if(nu(r,t)&&!a)continue;gr(e+1,r,t,n)}}}else if(r.nodeType===Node.TEXT_NODE){let i=r.textContent;if(i&&i.trim().length>0){let o=document.createElement("span");r.after(o),o.appendChild(r)}}}}function bg(e){let u=window.getComputedStyle(e);return u.whiteSpace.startsWith("pre")||u.whiteSpace==="break-spaces"}function l4(e){let t=e.innerHTML.replace(/\n/g,"<br>");e.innerHTML=t}function fr(e,u){let t=e.textContent||"";if(t.trim().length<=u)return;let r=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((i,o)=>{let s=t.lastIndexOf(o,u);return s>i?s:i},-1);if(r===-1)t.length>u+20&&fr(e,u+20);else{let i=t.slice(r+1);r++,i.startsWith(" ")&&r++;let o=e.splitText(r),s=document.createElement("br");o.parentNode?.insertBefore(s,o),r+1<t.length&&fr(o,u)}}function d4(e,u){let t=[];for(let n of e){let a=0,r=1e5,i=document.createElement("div"),o=l=>{let g=l;if(["DIV","BR"].includes(g.nodeName))return NodeFilter.FILTER_REJECT;if(g.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(g.nodeName==="SPAN"){let f=g.getBoundingClientRect(),d=globalThis.getComputedStyle(g),p=f.right,y=f.left,h=d.top.slice(0,-2),m=d.fontSize.slice(0,-2);return p>a&&(a=p),y<r&&(r=y),ne(g,Nt,`${y}`),ne(g,k0,`${p}`),ne(g,Ao,h),ne(g,To,m),NodeFilter.FILTER_ACCEPT}else return NodeFilter.FILTER_ACCEPT},s=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,o);for(;s.nextNode(););let c=a-r;c<600&&(c=600),t.push(i),i.style.left=a+"px",i.style.width=c+"px",i.classList.add(T0),n.childNodes.length>0&&n.insertBefore(i,n.childNodes[0])}return{targetContainers:t}}var ee=class{constructor(u,t){this.maxTextLength=1800;this.throttleLimit=3;this.isSupportList=!0;this.maxTextGroupLength=200;this.serviceConfig=u,this.generalConfig=t}static getAllProps(){return[]}static getProps(){return[]}async init(){}getMaxTextGroupLength(){return this.maxTextGroupLength}translate(u){throw new Error("Not implemented")}translateList(u){throw new Error("Not implemented")}async multipleTranslate(u,t){if(u.sentences.length===0)return{sentences:[]};let{sentences:n}=u,a=[],r=[],i=0,o=new Set,s=null;try{r=Rs(n,this.maxTextLength,this.maxTextGroupLength),S.debug("tempSentenceGroups",r)}catch(l){if(t){o.has(i)&&i++;for(let g=i;g<n.length;g++){let f=n[g];t(l,null,f)}s=l}else s=l}let c=V0({limit:this.throttleLimit,interval:1e3});for(let l=0;l<r.length;l++){let g=r[l],f=g.url,d=c(async()=>{if(this.isSupportList)return await this.translateList({text:g.tempSentences.map(m=>m.text),from:g.from,to:g.to,url:f});{let h=g.tempSentences.map(D=>D.text).join(qn),m=await this.translate({text:h,from:g.from,to:g.to,url:f}),{text:b}=m;return{text:b.split(qn),from:m.from,to:m.to}}}),p;try{p=await d()}catch(h){if(t){o.has(i)&&i++;for(let m=i;m<n.length;m++){let b=n[m];t(h,null,b)}s=h;continue}else{s=h;continue}}let{text:y}=p;for(let h=0;h<y.length;h++)try{let m=y[h],b=g.tempSentences[h],{index:x,prefix:D,suffix:H}=b;a[x]===void 0?a[x]={...n[x],from:g.from,to:g.to,text:D+m+H}:a[x].text+=D+m+H,x!==i&&t&&(o.add(i),t(null,a[i],n[i])),i=x}catch(m){if(t){o.has(i)&&i++;for(let b=i;b<n.length;b++){let x=n[b];t(m,null,x)}throw m}else throw m}}if(t&&!o.has(i)&&a[i]&&n[i]&&t(null,a[i],n[i]),s)throw s;return{sentences:a}}detectLanguageLocally(u){return ru({text:u})}detectLanguageRemotely(u){return Promise.resolve("auto")}detectLanguage(u){return u.length>=32?this.detectLanguageLocally(u):this.detectLanguageRemotely(u)}};var At="input is invalid type",mr=typeof window=="object",Mu=mr?window:{};Mu.JS_SHA256_NO_WINDOW&&(mr=!1);var yg=!mr&&typeof self=="object",xg=!Mu.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;xg?Mu=global:yg&&(Mu=self);var u1=!Mu.JS_SHA256_NO_COMMON_JS&&typeof module=="object"&&module.exports,t1=typeof define=="function"&&define.amd,o0=!Mu.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",F="0123456789abcdef".split(""),Cg=[-2147483648,8388608,32768,128],iu=[24,16,8,0],cn=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],dn=["hex","array","digest","arrayBuffer"],Te=[];(Mu.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"});o0&&(Mu.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return typeof e=="object"&&e.buffer&&e.buffer.constructor===ArrayBuffer});var g4=function(e,u){return function(t){return new we(u,!0).update(t)[e]()}},m4=function(e){var u=g4("hex",e);u.create=function(){return new we(e)},u.update=function(a){return u.create().update(a)};for(var t=0;t<dn.length;++t){var n=dn[t];u[n]=g4(n,e)}return u},f4=function(e,u){return function(t,n){return new gn(t,u,!0).update(n)[e]()}},p4=function(e){var u=f4("hex",e);u.create=function(a){return new gn(a,e)},u.update=function(a,r){return u.create(a).update(r)};for(var t=0;t<dn.length;++t){var n=dn[t];u[n]=f4(n,e)}return u};function we(e,u){u?(Te[0]=Te[16]=Te[1]=Te[2]=Te[3]=Te[4]=Te[5]=Te[6]=Te[7]=Te[8]=Te[9]=Te[10]=Te[11]=Te[12]=Te[13]=Te[14]=Te[15]=0,this.blocks=Te):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}we.prototype.update=function(e){if(!this.finalized){var u,t=typeof e;if(t!=="string"){if(t==="object"){if(e===null)throw new Error(At);if(o0&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!o0||!ArrayBuffer.isView(e)))throw new Error(At)}else throw new Error(At);u=!0}for(var n,a=0,r,i=e.length,o=this.blocks;a<i;){if(this.hashed&&(this.hashed=!1,o[0]=this.block,o[16]=o[1]=o[2]=o[3]=o[4]=o[5]=o[6]=o[7]=o[8]=o[9]=o[10]=o[11]=o[12]=o[13]=o[14]=o[15]=0),u)for(r=this.start;a<i&&r<64;++a)o[r>>2]|=e[a]<<iu[r++&3];else for(r=this.start;a<i&&r<64;++a)n=e.charCodeAt(a),n<128?o[r>>2]|=n<<iu[r++&3]:n<2048?(o[r>>2]|=(192|n>>6)<<iu[r++&3],o[r>>2]|=(128|n&63)<<iu[r++&3]):n<55296||n>=57344?(o[r>>2]|=(224|n>>12)<<iu[r++&3],o[r>>2]|=(128|n>>6&63)<<iu[r++&3],o[r>>2]|=(128|n&63)<<iu[r++&3]):(n=65536+((n&1023)<<10|e.charCodeAt(++a)&1023),o[r>>2]|=(240|n>>18)<<iu[r++&3],o[r>>2]|=(128|n>>12&63)<<iu[r++&3],o[r>>2]|=(128|n>>6&63)<<iu[r++&3],o[r>>2]|=(128|n&63)<<iu[r++&3]);this.lastByteIndex=r,this.bytes+=r-this.start,r>=64?(this.block=o[16],this.start=r-64,this.hash(),this.hashed=!0):this.start=r}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}};we.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,u=this.lastByteIndex;e[16]=this.block,e[u>>2]|=Cg[u&3],this.block=e[16],u>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}};we.prototype.hash=function(){var e=this.h0,u=this.h1,t=this.h2,n=this.h3,a=this.h4,r=this.h5,i=this.h6,o=this.h7,s=this.blocks,c,l,g,f,d,p,y,h,m,b,x;for(c=16;c<64;++c)d=s[c-15],l=(d>>>7|d<<25)^(d>>>18|d<<14)^d>>>3,d=s[c-2],g=(d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10,s[c]=s[c-16]+l+s[c-7]+g<<0;for(x=u&t,c=0;c<64;c+=4)this.first?(this.is224?(h=300032,d=s[0]-1413257819,o=d-150054599<<0,n=d+24177077<<0):(h=704751109,d=s[0]-210244248,o=d-1521486534<<0,n=d+143694565<<0),this.first=!1):(l=(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10),g=(a>>>6|a<<26)^(a>>>11|a<<21)^(a>>>25|a<<7),h=e&u,f=h^e&t^x,y=a&r^~a&i,d=o+g+y+cn[c]+s[c],p=l+f,o=n+d<<0,n=d+p<<0),l=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),g=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7),m=n&e,f=m^n&u^h,y=o&a^~o&r,d=i+g+y+cn[c+1]+s[c+1],p=l+f,i=t+d<<0,t=d+p<<0,l=(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),g=(i>>>6|i<<26)^(i>>>11|i<<21)^(i>>>25|i<<7),b=t&n,f=b^t&e^m,y=i&o^~i&a,d=r+g+y+cn[c+2]+s[c+2],p=l+f,r=u+d<<0,u=d+p<<0,l=(u>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10),g=(r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7),x=u&t,f=x^u&n^b,y=r&i^~r&o,d=a+g+y+cn[c+3]+s[c+3],p=l+f,a=e+d<<0,e=d+p<<0;this.h0=this.h0+e<<0,this.h1=this.h1+u<<0,this.h2=this.h2+t<<0,this.h3=this.h3+n<<0,this.h4=this.h4+a<<0,this.h5=this.h5+r<<0,this.h6=this.h6+i<<0,this.h7=this.h7+o<<0};we.prototype.hex=function(){this.finalize();var e=this.h0,u=this.h1,t=this.h2,n=this.h3,a=this.h4,r=this.h5,i=this.h6,o=this.h7,s=F[e>>28&15]+F[e>>24&15]+F[e>>20&15]+F[e>>16&15]+F[e>>12&15]+F[e>>8&15]+F[e>>4&15]+F[e&15]+F[u>>28&15]+F[u>>24&15]+F[u>>20&15]+F[u>>16&15]+F[u>>12&15]+F[u>>8&15]+F[u>>4&15]+F[u&15]+F[t>>28&15]+F[t>>24&15]+F[t>>20&15]+F[t>>16&15]+F[t>>12&15]+F[t>>8&15]+F[t>>4&15]+F[t&15]+F[n>>28&15]+F[n>>24&15]+F[n>>20&15]+F[n>>16&15]+F[n>>12&15]+F[n>>8&15]+F[n>>4&15]+F[n&15]+F[a>>28&15]+F[a>>24&15]+F[a>>20&15]+F[a>>16&15]+F[a>>12&15]+F[a>>8&15]+F[a>>4&15]+F[a&15]+F[r>>28&15]+F[r>>24&15]+F[r>>20&15]+F[r>>16&15]+F[r>>12&15]+F[r>>8&15]+F[r>>4&15]+F[r&15]+F[i>>28&15]+F[i>>24&15]+F[i>>20&15]+F[i>>16&15]+F[i>>12&15]+F[i>>8&15]+F[i>>4&15]+F[i&15];return this.is224||(s+=F[o>>28&15]+F[o>>24&15]+F[o>>20&15]+F[o>>16&15]+F[o>>12&15]+F[o>>8&15]+F[o>>4&15]+F[o&15]),s};we.prototype.toString=we.prototype.hex;we.prototype.digest=function(){this.finalize();var e=this.h0,u=this.h1,t=this.h2,n=this.h3,a=this.h4,r=this.h5,i=this.h6,o=this.h7,s=[e>>24&255,e>>16&255,e>>8&255,e&255,u>>24&255,u>>16&255,u>>8&255,u&255,t>>24&255,t>>16&255,t>>8&255,t&255,n>>24&255,n>>16&255,n>>8&255,n&255,a>>24&255,a>>16&255,a>>8&255,a&255,r>>24&255,r>>16&255,r>>8&255,r&255,i>>24&255,i>>16&255,i>>8&255,i&255];return this.is224||s.push(o>>24&255,o>>16&255,o>>8&255,o&255),s};we.prototype.array=we.prototype.digest;we.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),u=new DataView(e);return u.setUint32(0,this.h0),u.setUint32(4,this.h1),u.setUint32(8,this.h2),u.setUint32(12,this.h3),u.setUint32(16,this.h4),u.setUint32(20,this.h5),u.setUint32(24,this.h6),this.is224||u.setUint32(28,this.h7),e};function gn(e,u,t){var n,a=typeof e;if(a==="string"){var r=[],i=e.length,o=0,s;for(n=0;n<i;++n)s=e.charCodeAt(n),s<128?r[o++]=s:s<2048?(r[o++]=192|s>>6,r[o++]=128|s&63):s<55296||s>=57344?(r[o++]=224|s>>12,r[o++]=128|s>>6&63,r[o++]=128|s&63):(s=65536+((s&1023)<<10|e.charCodeAt(++n)&1023),r[o++]=240|s>>18,r[o++]=128|s>>12&63,r[o++]=128|s>>6&63,r[o++]=128|s&63);e=r}else if(a==="object"){if(e===null)throw new Error(At);if(o0&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!o0||!ArrayBuffer.isView(e)))throw new Error(At)}else throw new Error(At);e.length>64&&(e=new we(u,!0).update(e).array());var c=[],l=[];for(n=0;n<64;++n){var g=e[n]||0;c[n]=92^g,l[n]=54^g}we.call(this,u,t),this.update(l),this.oKeyPad=c,this.inner=!0,this.sharedMemory=t}gn.prototype=new we;gn.prototype.finalize=function(){if(we.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();we.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),we.prototype.finalize.call(this)}};var Tt=m4();Tt.sha256=Tt;Tt.sha224=m4(!0);Tt.sha256.hmac=p4();Tt.sha224.hmac=p4(!0);var h4=Tt;var E4=h4.sha256;function su(e){return Promise.resolve(E4(e))}function fn(e){return Array.from(new Uint8Array(e)).map(n=>n.toString(16).padStart(2,"0")).join("")}function Pu(e,u){let t=E4.hmac.create(u);return t.update(e),Promise.resolve(t.array())}async function b4(e,u){let t=await Pu(e,u);return fn(t)}async function mn(e,u){let t=Dg(u),n=await Pu(e,t);return fn(n)}function Dg(e){let u=[];return e.replace(/../g,function(t){return u.push(parseInt(t,16)),""}),new Uint8Array(u).buffer}var y4=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","jp"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],lu=class extends ee{constructor(t,n){super(t,n);this.secretId="";this.secretKey="";this.isSupportList=!0;if(!t||!t.secretId||!t.secretKey)throw new Error("secretId and secretKey are required");this.secretId=t.secretId,this.secretKey=t.secretKey}static getUTCDate(t){let n=t.getUTCFullYear(),a=`${t.getUTCMonth()+1}`.padStart(2,"0"),r=`${t.getUTCDate()}`.padStart(2,"0");return`${n}-${a}-${r}`}static getAllProps(){return[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]}async translate(t){let{text:n,from:a,to:r}=t,i=JSON.stringify({ProjectId:0,Source:lu.langMap.get(a),SourceText:n,Target:lu.langMap.get(r)}),o=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslate",payload:i,service:"tmt",version:"2018-03-21"});return{text:o.Response.TargetText,from:lu.langMapReverse.get(o.Response.Source)||a,to:lu.langMapReverse.get(o.Response.Target)||r}}async translateList(t){let{text:n,from:a,to:r}=t,i=JSON.stringify({ProjectId:0,Source:lu.langMap.get(a),SourceTextList:n,Target:lu.langMap.get(r)}),o=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslateBatch",payload:i,service:"tmt",version:"2018-03-21"});return{text:o.Response.TargetTextList,from:lu.langMapReverse.get(o.Response.Source)||a,to:lu.langMapReverse.get(o.Response.Target)||r}}async signedRequest({secretId:t,secretKey:n,action:a,payload:r,service:i,version:o}){let s=`${i}.tencentcloudapi.com`,c=new Date,l=`${new Date().valueOf()}`.slice(0,10),g=["POST","/","","content-type:application/json; charset=utf-8",`host:${s}`,"","content-type;host",await su(r)].join(`
`),f=lu.getUTCDate(c),d=["TC3-HMAC-SHA256",l,`${f}/${i}/tc3_request`,await su(g)].join(`
`),p=await b4(f,`TC3${n}`),y=await mn(i,p),h=await mn("tc3_request",y),m=await mn(d,h),b=await Q({url:`https://${i}.tencentcloudapi.com`,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Host:s,"X-TC-Action":a,"X-TC-Timestamp":l,"X-TC-Region":"ap-beijing","X-TC-Version":o,Authorization:`TC3-HMAC-SHA256 Credential=${t}/${f}/${i}/tc3_request, SignedHeaders=content-type;host, Signature=${m}`},body:r});if(b instanceof Error)throw b;if(b.Response&&b.Response.Error&&b.Response.Error.Message)throw new Error(b.Response.Error.Message);return b}},Zu=lu;Zu.langMap=new Map(y4),Zu.langMapReverse=new Map(y4.map(([t,n])=>[n,t]));var x4=[["auto","auto"],["zh-CN","zh-CN"],["zh-TW","zh-TW"],["en","en"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["ceb","ceb"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["haw","haw"],["he","he"],["hi","hi"],["hmn","hmn"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["jw","jw"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["fil","tl"],["tr","tr"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zu","zu"]],i0=class extends ee{constructor(t,n){super(t,n);this.isSupportList=!1;this.throttleLimit=100}async translate(t){let{text:n,from:a,to:r}=t;if(!n)return{...t};let i=i0.langMap.get(a)||"auto",o=i0.langMap.get(r)||"zh-CN",s=await this.fetchWithoutToken(n,i,o);if(!s)throw new Error("google translate NETWORK_ERROR");if(!s.data[0]||s.data[0].length<=0)throw new Error("google translate API_SERVER_ERROR");return{text:s.data[0].map(l=>l[0]).filter(Boolean).join(""),from:i0.langMapReverse.get(s.data[2])||"auto",to:r}}async fetchWithoutToken(t,n,a){let r="https://translate.googleapis.com/translate_a/single?"+new URLSearchParams({client:"gtx",dt:"t",sl:n,tl:a,q:t});return{data:await Q({url:r})}}},et=i0;et.langMap=new Map(x4),et.langMapReverse=new Map(x4.map(([t,n])=>[n,t]));function C4(e){return e.result.texts}function kg(e,u){return u?e+(u-e%u):e}function Ag(e,u){return e.split(u).length-1}function D4(e){let u=Date.now(),t=1;for(let n of e)t+=Ag(n,"i");return kg(u,t)}function Tg(e,u){return Math.floor(Math.random()*(u-e+1))+e}function pr(){return Tg(1e6,1e8)}var hr="https://www2.deepl.com/jsonrpc",pn="auto",k4=[{code:"BG",language:"Bulgarian"},{code:"ZH",language:"Chinese"},{code:"CS",language:"Czech"},{code:"DA",language:"Danish"},{code:"NL",language:"Dutch"},{code:"EN",language:"English"},{code:"ET",language:"Estonian"},{code:"FI",language:"Finnish"},{code:"FR",language:"French"},{code:"DE",language:"German"},{code:"EL",language:"Greek"},{code:"HU",language:"Hungarian"},{code:"IT",language:"Italian"},{code:"JA",language:"Japanese"},{code:"LV",language:"Latvian"},{code:"LT",language:"Lithuanian"},{code:"PL",language:"Polish"},{code:"PT",language:"Portuguese"},{code:"RO",language:"Romanian"},{code:"RU",language:"Russian"},{code:"SK",language:"Slovak"},{code:"SL",language:"Slovenian"},{code:"ES",language:"Spanish"},{code:"SV",language:"Swedish"}],A4=["formal","informal"];function w4(e,u=pn,t=pr()){return{jsonrpc:"2.0",method:"LMT_split_text",params:{commonJobParams:{mode:"translate"},lang:{lang_user_selected:u,user_preferred_langs:[]},texts:e},id:t}}function wg(e,u=1){let t=[],n=0;for(let a=0;a<e.length;a++){let r=e[a].chunks;for(let i=0;i<r.length;i++){let o=r[i];t.push({kind:"default",_index:a,sentences:[{id:n,text:o.sentences[0].text,prefix:o.sentences[0].prefix}],raw_en_context_before:r.slice(0,n).map(s=>s.sentences[0].text),raw_en_context_after:n+1<r.length?[r[n+1].sentences[0].text]:[],preferred_num_beams:u}),n++}}return t}function T4(e){return e.reduce((u,t)=>{let n=t.chunks;for(let a of n)u.push(a.sentences[0].text);return u},[])}function vg(e){if(!e)return{};if(!A4.includes(e))throw new Error("Formality tone '{formality_tone}' not supported.");return{formality:e}}function v4(e,u,t,n=pr(),a=1,r){let i=T4(t);return{jsonrpc:"2.0",method:"LMT_handle_jobs",params:{jobs:wg(t,a),lang:{user_preferred_langs:[u,e],source_lang_computed:e,target_lang:u},priority:1,commonJobParams:vg(r),timestamp:D4(T4(t))},id:n}}function Fg(e=k4){return e.reduce((u,t)=>(u[t.code.toLowerCase()]=t.code,u[t.language.toLowerCase()]=t.code,u),{})}function Er(e){return Fg()[e.toLowerCase()]}var F4={Accept:"*/*","Accept-Language":"en-US;q=0.8,en;q=0.7",Authority:"www2.deepl.com","Content-Type":"application/json",Origin:"https://www.deepl.com",Referer:"https://www.deepl.com/translator","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-site"};function S4(e){return JSON.stringify(e).replace('"method":"',()=>{let u=e;return(u.id+3)%13===0||(u.id+5)%29===0?'"method" : "':'"method": "'})}async function Sg(e,u,t){let n=w4(e,u,t);return await Q({method:"POST",url:hr+"?method=LMT_split_text",headers:F4,body:S4(n)})}async function Bg(e,u,t,n,a,r){let i=await Sg(e,t,n),o=v4(t==="auto"?i.result.lang.detected:t,u,C4(i),n,a,r),s=o.params.jobs.map(g=>g._index);o.params.jobs=o.params.jobs.map(g=>{let f={...g};return delete f._index,f});let c=await Q({method:"POST",url:hr+"?method=LMT_handle_jobs",body:S4(o),headers:F4}),l={from:i.result.lang.detected,to:u,text:[]};return c.result.translations.forEach((g,f)=>{let d=s[f];l.text[d]===void 0&&(l.text[d]="");let p=o.params.jobs[f].sentences[0].prefix,y=o.params.jobs[f].sentences[0].prefix;l.text[d]=l.text[d]+p+g.beams[0].sentences[0].text}),l}async function B4(e,u,t=pn,n,a,r){return e?e&&e.length===1&&e[0]===""?{text:[""],from:t,to:u}:Bg(e,Er(u),Er(t)??"auto",n,a,r):{text:[],from:t,to:u}}var L4=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],wt=class extends ee{constructor(t,n){super(t,n);this.maxTextGroupLength=3;this.maxTextLength=800;this.isSupportList=!0}async translateList(t){let{text:n,to:a,from:r}=t,i=await B4(n,wt.langMap.get(a),wt.langMap.get(r));return{text:i.text,from:wt.langMapReverse.get(i.from),to:wt.langMapReverse.get(i.to)}}},ut=wt;ut.langMap=new Map(L4),ut.langMapReverse=new Map(L4.map(([t,n])=>[n,t]));var _4=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],Q1=new Map(_4),Z1=new Map(_4.map(([e,u])=>[u,e]));var M4=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","jp"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],br="https://transmart.qq.com/api/imt",tt=class extends ee{constructor(t,n){super(t,n);this.maxTextGroupLength=50;this.maxTextLength=1e3;this.throttleLimit=1e3;this.isSupportList=!1;this.clientKey=btoa("transmart_crx_"+navigator.userAgent).slice(0,100)}async translate(t){let{text:n,to:a}=t,r=await this.detectLanguage(n),i=tt.langMap.get(r)||r,o=tt.langMap.get(a)||a;if(r===a)return{text:n,from:r,to:a};let s=JSON.stringify({header:{fn:"auto_translation_block",client_key:this.clientKey},source:{text_block:n,lang:i,orig_url:t.url},target:{lang:o}}),c=await Q({url:br,body:s,method:"POST"});if(c.header.ret_code!=="succ")throw new Error(c.message||c.header.ret_code);return{text:c.auto_translation,from:r||"auto",to:a}}async translateList(t){let{from:n,text:a,to:r}=t;if(a.length===1){let g=await this.translate({from:n,text:a[0],to:r,url:t.url});return{text:[g.text],from:g.from,to:g.to}}let i=await this.detectLanguage(a.join(`
`));if(i===r)return{text:a,from:i,to:r};let o=tt.langMap.get(i)||i,s=tt.langMap.get(r)||r,c=JSON.stringify({header:{fn:"auto_translation",client_key:this.clientKey},source:{text_list:a,lang:o,orig_url:t.url},target:{lang:s},type:"plain"}),l=await Q({url:br,body:c,method:"POST"});if(l.header.ret_code!=="succ")throw new Error(l.message||l.header.ret_code);return{text:l.auto_translation,from:i||"auto",to:r}}detectLanguageLocally(t){return this.detectLanguageRemotely(t)}async detectLanguageRemotely(t){let n={header:{fn:"text_analysis",client_key:this.clientKey},text:t.slice(0,280)},a=await Q({url:br,method:"POST",body:JSON.stringify(n)});if(a.header.ret_code!=="succ")throw new Error(a.message||a.header.ret_code);let r=a.language,i=tt.langMapReverse.get(r);return i||r}},nt=tt;nt.langMap=new Map(M4),nt.langMapReverse=new Map(M4.map(([t,n])=>[n,t]));function P4(){return Math.random()>=0}var vt=class extends ee{constructor(){super(...arguments);this.isSupportList=!0}async translate(t){let{text:n}=t;await ir(),await Ut(5e3);let a=n.match(/^\s*/)[0].length;return{text:n.slice(0,a)+"\u6A21\u62DF\uFF1A"+n.slice(a,-6),from:t.from,to:t.to}}async translateList(t){let{text:n,from:a,to:r}=t;if(await ir(),!P4())throw new Error("\u6A21\u62DF\u9519\u8BEF");return n.length===0?{from:a,to:r,text:[""]}:{from:a,to:r,text:n.map(i=>{let o=i.match(/^\s*/)[0].length;return i.slice(0,o)+"\u6A21\u62DF\uFF1A"+i.slice(o,-6)})}}};var z4=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"],["de","de"],["fr","fr"],["it","it"],["es","es"],["nl","nl"],["pl","pl"],["pt","pt"],["ru","ru"]],R4=new Map(z4),j4=new Map(z4.map(([e,u])=>[u,e])),s0=class extends ee{constructor(t,n){super(t,n);this.apikey="";this.codename=s0.DEFAULT_CODENAME;this.isSupportList=!1;this.maxTextGroupLength=1;if(!t||!t.apikey)throw new Error("apikey are required");this.apikey=t.apikey,t.codename&&(this.codename=t.codename)}static getAllProps(){return[...s0.getProps(),{type:"password",name:"apikey",required:!0}]}static getProps(){return[{type:"select",name:"codename",label:"translationEngine",default:s0.DEFAULT_CODENAME,required:!1,options:[{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.aws",value:"aws"},{label:"translationServices.google",value:"google"}]}]}async translate(t){let{text:n,from:a,to:r}=t,i=await Q({url:`https://api.openl.club/services/${this.codename}/translate`,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({apikey:this.apikey,text:n,source_lang:R4.get(a)||"auto",target_lang:R4.get(r)})});if(i.status){let o=i;return{text:o.result,from:j4.get(o.source_lang),to:j4.get(o.target_lang)}}else throw new Error(i.msg)}},hn=s0;hn.DEFAULT_CODENAME="deepl";var En=hn;var O4=[["auto",""],["zh-CN","ZH"],["zh-TW","ZH"],["en","EN"],["de","DE"],["fr","FR"],["it","IT"],["ja","JA"],["es","ES"],["nl","NL"],["pl","PL"],["pt","PT"],["ru","RU"]],N4=new Map(O4),Lg=new Map(O4.map(([e,u])=>[u,e])),yr=class extends ee{constructor(t,n){super(t,n);this.authKey="";this.maxTextGroupLength=10;this.maxTextLength=1200;if(!t||!t.authKey)throw new Error("authKey are required");this.authKey=t.authKey}static getAllProps(){return[{name:"authKey",required:!0,type:"password"}]}async translateList(t){let{from:n,to:a,text:r}=t,i={source_lang:N4.get(n),target_lang:N4.get(a)},o=new URLSearchParams(i);r.forEach(d=>{o.append("text",d)});let s=o.toString(),c="https://api-free.deepl.com/v2/translate";this.authKey.includes(":fx")||(c="https://api.deepl.com/v2/translate");let l=await Q({url:c,method:"POST",body:s,headers:{Authorization:"DeepL-Auth-Key "+this.authKey,"content-type":"application/x-www-form-urlencoded"}}),{translations:g}=l;return{text:g.map(d=>d.text),from:g[0]&&Lg.get(g[0].detected_source_language)||n,to:a}}},I4=yr;var _g=["authorization","content-type","content-length","user-agent","presigned-expires","expect"],he={algorithm:"HMAC-SHA256",v4Identifier:"request",dateHeader:"X-Date",tokenHeader:"X-Security-Token",contentSha256Header:"X-Content-Sha256",notSignBody:"X-NotSignBody",kDatePrefix:"",credential:"X-Credential",algorithmKey:"X-Algorithm",signHeadersKey:"X-SignedHeaders",signQueriesKey:"X-SignedQueries",signatureKey:"X-Signature"},xr=e=>{try{return encodeURIComponent(e).replace(/[^A-Za-z0-9_.~\-%]+/g,escape).replace(/[*]/g,u=>`%${u.charCodeAt(0).toString(16).toUpperCase()}`)}catch{return""}},Cr=e=>Object.keys(e).map(u=>{let t=e[u];if(typeof t>"u"||t===null)return;let n=xr(u);if(!!n)return Array.isArray(t)?`${n}=${t.map(xr).sort().join(`&${n}=`)}`:`${n}=${xr(t)}`}).filter(u=>u).join("&"),l0=class{constructor(u,t,n){this.request=u,this.request.headers=u.headers||{},this.serviceName=t,n=n||{},this.bodySha256=n.bodySha256,this.request.params=this.sortParams(this.request.params)}sortParams(u){let t={};return u&&Object.keys(u).filter(n=>{let a=u[n];return typeof a<"u"&&a!==null}).sort().map(n=>{t[n]=u[n]}),t}async addAuthorization(u,t){let n=this.getDateTime(t);await this.addHeaders(u,n),this.request.headers.Authorization=await this.authorization(u,n)}async authorization(u,t){let n=[],a=this.credentialString(t);return n.push(`${he.algorithm} Credential=${u.accessKeyId}/${a}`),n.push(`SignedHeaders=${this.signedHeaders()}`),n.push(`Signature=${await this.signature(u,t)}`),n.join(", ")}async getSignUrl(u,t){let n=this.getDateTime(t),a={...this.request.params},r=this.request.params,i=this.request.headers;u.sessionToken&&(a[he.tokenHeader]=u.sessionToken),a[he.dateHeader]=n,a[he.notSignBody]="",a[he.credential]=`${u.accessKeyId}/${this.credentialString(n)}`,a[he.algorithmKey]=he.algorithm,a[he.signHeadersKey]="",a[he.signQueriesKey]=void 0,a[he.signatureKey]=void 0,a=this.sortParams(a),this.request.params=a,this.request.headers={};let o=await this.signature(u,n);return this.request.params=r,this.request.headers=i,a[he.signQueriesKey]=Object.keys(a).sort().join(";"),a[he.signatureKey]=o,Cr(a)}getDateTime(u){return this.iso8601(u).replace(/[:\-]|\.\d{3}/g,"")}async addHeaders(u,t){if(this.request.headers[he.dateHeader]=t,u.sessionToken&&(this.request.headers[he.tokenHeader]=u.sessionToken),this.request.body){let n=this.request.body;this.request.headers[he.contentSha256Header]=await su(n)}}async signature(u,t){let n=await this.getSigningKey(u,t.substr(0,8),this.request.region,this.serviceName);return fn(await Pu(await this.stringToSign(t),n))}async stringToSign(u){let t=[];t.push(he.algorithm),t.push(u),t.push(this.credentialString(u));let n=await this.canonicalString();return t.push(await this.hexEncodedHash(n)),t.join(`
`)}async canonicalString(){let u=[],t=this.request.pathname||"/";u.push(this.request.method.toUpperCase()),u.push(t);let n=Cr(this.request.params)||"";return u.push(n),u.push(`${this.canonicalHeaders()}
`),u.push(this.signedHeaders()),u.push(await this.hexEncodedBodyHash()),u.join(`
`)}canonicalHeaders(){let u=[];Object.keys(this.request.headers).forEach(n=>{u.push([n,this.request.headers[n]])}),u.sort((n,a)=>n[0].toLowerCase()<a[0].toLowerCase()?-1:1);let t=[];return u.forEach(n=>{let a=n[0].toLowerCase();if(this.isSignableHeader(a)){let r=n[1];if(typeof r>"u"||r===null||typeof r.toString!="function")throw new Error(`Header ${a} contains invalid value`);t.push(`${a}:${this.canonicalHeaderValues(r.toString())}`)}}),t.join(`
`)}canonicalHeaderValues(u){return u.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")}signedHeaders(){let u=[];return Object.keys(this.request.headers).forEach(t=>{t=t.toLowerCase(),this.isSignableHeader(t)&&u.push(t)}),u.sort().join(";")}signedQueries(){return Object.keys(this.request.params).join(";")}credentialString(u){return this.createScope(u.substr(0,8),this.request.region,this.serviceName)}async hexEncodedHash(u){return await su(u)}async hexEncodedBodyHash(){return this.request.headers[he.contentSha256Header]?this.request.headers[he.contentSha256Header]:this.request.body?await this.hexEncodedHash(Cr(this.request.body)):await this.hexEncodedHash("")}isSignableHeader(u){return _g.indexOf(u)<0}iso8601(u){return u===void 0&&(u=new Date),u.toISOString().replace(/\.\d{3}Z$/,"Z")}async getSigningKey(u,t,n,a){let r=await Pu(t,`${he.kDatePrefix}${u.secretKey}`),i=await Pu(n,r),o=await Pu(a,i);return Pu(he.v4Identifier,o)}createScope(u,t,n){return[u.substr(0,8),t,n,he.v4Identifier].join("/")}};var $4=[["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],H4=new Map($4),Mg=new Map($4.map(([e,u])=>[u,e])),Dr=class extends ee{constructor(t,n){super(t,n);this.accessKeyId="";this.secretAccessKey="";this.maxTextGroupLength=8;if(!t||!t.accessKeyId||!t.secretAccessKey)throw new Error("accessKeyId and secretAccessKey are required");this.accessKeyId=t.accessKeyId,this.secretAccessKey=t.secretAccessKey}static getAllProps(){return[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"}]}async translateList(t){let{text:n,from:a,to:r}=t,i=H4.get(a),o={TargetLanguage:H4.get(r)||r,TextList:n};i&&(o.SourceLanguage=i);let s={region:"cn-north-1",method:"POST",params:{Action:"TranslateText",Version:"2020-06-01"},pathname:"/",headers:{"Content-Type":"application/json",host:"open.volcengineapi.com"},body:JSON.stringify(o)},c=new l0(s,"translate");await c.addAuthorization({accessKeyId:this.accessKeyId,secretKey:this.secretAccessKey});let l=new URLSearchParams(s.params),g=await Q({url:"https://open.volcengineapi.com"+s.pathname+"?"+l.toString(),headers:c.request.headers,method:s.method,body:s.body});if(g.TranslationList){let f=g.TranslationList.map(p=>p.Translation),d=a;return g.TranslationList.length>0&&g.TranslationList[0].DetectedSourceLanguage&&(d=Mg.get(g.TranslationList[0].DetectedSourceLanguage)||a),{text:f,from:d,to:r}}else{let f=g.ResponseMetaData.Error;throw new Pe(f.Code,f.Message)}}},U4=Dr;var q4=[["auto","detect"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],Pg=new Map(q4),Rg=new Map(q4.map(([e,u])=>[u,e])),c0=class extends ee{constructor(){super(...arguments);this.maxTextGroupLength=50;this.isSupportList=!1}async translate(t){let{text:n,from:a,to:r}=t,o={source_language:Pg.get(a)||"detect",target_language:"zh",text:n},s=await Q({url:"https://translate.volcengine.com/crx/translate/v1/",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(s.base_resp&&s.base_resp.status_code===0){let c=s.translation,l=a;return s.detected_language&&(l=Rg.get(s.detected_language)||a),{text:c,from:l,to:r}}else{let c=s.base_resp;throw new Pe(c.status_code.toString(),c.status_message)}}};var jg=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],W4=new Map(jg),d0=class extends ee{constructor(t,n){super(t,n);this.url="";this.isSupportList=!1;this.maxTextGroupLength=1;if(!t||!t.url)throw new Error("deeplx custom url are required, please check your settings.");this.url=t.url}static getAllProps(){return[{name:"url",required:!0,type:"text"}]}async translate(t){let{text:n,from:a,to:r}=t,o=await Q({url:this.url,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({source_lang:W4.get(a)||a,target_lang:W4.get(r)||r,text:n})});if(o.code===200)return{text:o.data,from:a,to:r};throw new Error(o.message||o.message||"API Error")}};var kr="https://{s}bing.com",Y4=kr+"/translator",zg=kr+"/ttranslatev3",Ng=kr+"/tspellcheckv3",bn="bingGlobalConfig",X4=[["auto","auto-detect"],["ar","ar"],["ga","ga"],["et","et"],["bg","bg"],["is","is"],["pl","pl"],["bs","bs-Latn"],["fa","fa"],["da","da"],["de","de"],["ru","ru"],["fr","fr"],["zh-TW","zh-Hant"],["fil","fil"],["fj","fj"],["fi","fi"],["gu","gu"],["kk","kk"],["ht","ht"],["ko","ko"],["nl","nl"],["ca","ca"],["zh-CN","zh-Hans"],["cs","cs"],["kn","kn"],["otq","otq"],["tlh","tlh"],["hr","hr"],["lv","lv"],["lt","lt"],["ro","ro"],["mg","mg"],["mt","mt"],["mr","mr"],["ml","ml"],["ms","ms"],["mi","mi"],["bn","bn-BD"],["hmn","mww"],["af","af"],["pa","pa"],["pt","pt"],["ps","ps"],["ja","ja"],["sv","sv"],["sm","sm"],["sr-Latn","sr-Latn"],["sr-Cyrl","sr-Cyrl"],["no","nb"],["sk","sk"],["sl","sl"],["sw","sw"],["ty","ty"],["te","te"],["ta","ta"],["th","th"],["to","to"],["tr","tr"],["cy","cy"],["ur","ur"],["uk","uk"],["es","es"],["he","iw"],["el","el"],["hu","hu"],["it","it"],["hi","hi"],["id","id"],["en","en"],["yua","yua"],["yue","yua"],["vi","vi"],["ku","ku"],["km","kmr"]],V4=new Map(X4),K4=new Map(X4.map(([e,u])=>[u,e])),G4=1e3,cu,Ft;function Ar(e,u){return e.replace("{s}",u?u+".":"")}async function Og(){if(!cu){let t=await q.storage.local.get(bn);return t&&(cu=t[bn]),!0}let{tokenTs:e,tokenExpiryInterval:u}=cu;return Date.now()-e>u}async function J4(){let e,u,t,n,a,r,i,o,s,c;try{let l=Ar(Y4,e),g=await Q({url:l,responseType:"raw"}),{body:f,headers:d,url:p}=g;e=p.match(/^https?:\/\/(\w+)\.bing\.com/)[1],c=d["set-cookie"],u=f.match(/IG:"([^"]+)"/)[1],t=f.match(/data-iid="([^"]+)"/)[1],[a,n,r,i,o,s]=JSON.parse(f.match(/params_AbusePreventionHelper\s?=\s?([^\]]+\])/)[1])}catch(l){throw console.error("failed to fetch global config",l),l}return cu={subdomain:e,IG:u,IID:t,key:a,token:n,tokenTs:a,tokenExpiryInterval:r,isVertical:i,frontDoorBotClassification:o,isSignedInOrCorporateUser:s,cookie:c,count:0},await q.storage.local.set({[bn]:cu}),cu}function Ig(e){let{IG:u,IID:t,subdomain:n,isVertical:a}=cu;return Ar(e?Ng:zg,n)+"?isVertical=1"+(u&&u.length?"&IG="+u:"")+(t&&t.length?"&IID="+t+"."+cu.count++:"")}function Hg(e,u,t,n){let{token:a,key:r}=cu,i={fromLang:t,text:u,token:a,key:r};return!e&&n&&(i.to=n),i}async function Q4(e,u,t){if(!e||!(e=e.trim()))return;if(e.length>G4)throw new Error(`The supported maximum length of text is ${G4}. Please shorten the text.`);Ft||(Ft=J4()),await Ft,await Og()&&(Ft=J4(),await Ft),u=u||"auto",t=t||"zh-CN",u=V4.get(u)||u,t=V4.get(t)||t;let a=Ig(!1),r=Hg(!1,e,u,t==="auto-detect"?"zh-Hans":t),i={referer:Ar(Y4,cu.subdomain),"content-type":"application/x-www-form-urlencoded"},o=new URLSearchParams(r),s=a,c=o.toString(),l=await Q({url:s,headers:i,method:"POST",body:c});if(l.ShowCaptcha||l.StatusCode===401||l.statusCode){if(cu=null,Ft=null,await q.storage.local.remove(bn),l.ShowCaptcha)throw new Error(`
      Sorry that bing translator seems to be asking for the captcha,
      Please take care not to request too frequently.
      The response code is ${l.StatusCode}.
    `);if(l.StatusCode===401)throw new Error(`
      Max count of translation exceeded. Please try it again later.
      The response code is 401.
    `);if(l.statusCode)throw new Error(`Something went wrong! The response is ${JSON.stringify(l)}.`)}let g=l[0].translations[0],f=l[0].detectedLanguage;return{text:g.text,from:K4.get(f.language),to:K4.get(g.to)}}var g0=class extends ee{constructor(t,n){super(t,n);this.isSupportList=!1;this.maxTextLength=1e3}async translate(t){let{text:n,from:a,to:r}=t;return n?await Q4(n,a,r):{...t}}};var el=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],Z4=new Map(el),$g=new Map(el.map(([e,u])=>[u,e])),Tr=class extends ee{constructor(t,n){super(t,n);this.endpoint="https://api.fanyi.baidu.com/api/trans/vip/translate";this.appid="";this.key="";this.isSupportList=!1;if(!t||!t.appid||!t.key)throw new Error("appid and key are required");this.appid=t.appid,this.key=t.key}static getAllProps(){return[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"}]}async translate(t){let n=Date.now().toString(),{endpoint:a}=this,{appid:r,key:i}=this,{text:o,from:s,to:c}=t,l=new URLSearchParams({from:Z4.get(s),to:Z4.get(c),q:o,salt:n,appid:r,sign:ht(r+o+n+i)}),g=new URL(a);g.search=l.toString();let f=await Q({url:g.toString()});if(f.error_code)throw console.error(new Error("[Baidu service]"+f.error_msg)),new Pe("API_SERVER_ERROR",f.error_msg);let{trans_result:d,from:p}=f,y=d.map(({dst:m})=>m);return{from:$g.get(p),to:c,text:y.join(`
`)}}},ul=Tr;var Ug=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"]],tl=new Map(Ug),wr=class extends ee{constructor(t,n){super(t,n);this.token="";if(!t||!t.token)throw new Error("token are required");this.token=t.token}static getAllProps(){return[{name:"token",required:!0,type:"password"}]}async translateList(t){let{text:n,from:a,to:r}=t;a==="auto"&&(a=await ru({text:n.join(" ")}));let i=n;return{text:(await Q({url:"https://api.interpreter.caiyunai.com/v1/translator",headers:{"content-type":"application/json","x-authorization":"token "+this.token},method:"POST",body:JSON.stringify({source:i,trans_type:`${tl.get(a)}2${tl.get(r)}`})})).target,from:a,to:r}}},nl=wr;var rl=[["auto","auto"],["en","en"],["ru","ru"],["pt","pt"],["es","es"],["zh-CN","zh-CHS"],["ja","ja"],["ko","ko"],["fr","fr"],["ar","ar"],["id","id"],["vi","vi"],["it","it"]],al=new Map(rl),qg=new Map(rl.map(([e,u])=>[u,e]));function Wg(e){let u=e.length;return u<=20?e:e.substring(0,10)+u+e.substring(u-10,u)}var vr=class extends ee{constructor(t,n){super(t,n);this.isSupportList=!1;this.appId="";this.appSecret="";if(!t||!t.appId||!t.appSecret)throw new Error("appId and appSecret are required");this.appId=t.appId,this.appSecret=t.appSecret}static getAllProps(){return[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"}]}async translate(t){let{text:n,from:a,to:r}=t,i=new Date().getTime(),o=Math.round(new Date().getTime()/1e3),s=this.appId+Wg(n)+i+o+this.appSecret,c=await su(s),l={q:n,appKey:this.appId,salt:i.toString(),from:al.get(a),to:al.get(r),sign:c,signType:"v3",curtime:o.toString()},g=new URLSearchParams(l),d=await Q({url:"https://openapi.youdao.com/api",method:"POST",body:g.toString(),headers:{"Content-Type":"application/x-www-form-urlencoded"}}),p=d.l,[y,h]=p.split("2");return{text:d.translation.join(`
`),from:qg.get(y),to:r}}},ol=vr;var St={mock:{class:vt,name:"Mock",homepage:"https://www.google.com"},mock2:{class:vt,name:"Mock2",homepage:"https://www.google.com"},google:{class:et,name:"Google",homepage:"https://translate.google.com/"},transmart:{class:nt,name:"Transmart",homepage:"https://transmart.qq.com/"},deepl:{class:I4,name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://hcfy.app/docs/services/deepl"},volc:{class:U4,name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://hcfy.app/docs/services/hs-api"},volcAlpha:{class:c0,name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},bing:{class:g0,name:"Bing",homepage:"https://www.bing.com/translator"},tencent:{class:Zu,name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://hcfy.app/docs/services/qq-api"},baidu:{class:ul,name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://hcfy.app/docs/services/baidu-api"},caiyun:{class:nl,name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://hcfy.app/docs/services/caiyun-api"},openl:{class:En,name:"Openl",homepage:"https://openl.club/",docUrl:"https://docs.openl.club/"},youdao:{class:ol,name:"Youdao",homepage:"https://fanyi.youdao.com/",docUrl:"https://hcfy.app/docs/services/youdao-api"},d:{class:ut,name:"Deepl(Alpha) ",alpha:!0,homepage:"https://www.deepl.com/translator"},deeplx:{class:d0,name:"DeepLX(Alpha)",alpha:!0,homepage:"https://www.deepl.com/translator"}};function Fr(e,u){let t=St[e],n=u.config.translationServices[e]||{},a=!0,r=t.class.getAllProps();if(r.length>0){let i=r.filter(o=>o.required);if(i.length>0){for(let o of i)if(!n[o.name]){a=!1;break}}}return{...t,id:e,selected:u.translationService===e,ok:a,config:n,props:t.class.getProps(),allProps:r}}var Vg=Object.keys(St),il=e=>{let{config:u}=e,t=u.alpha,n=u.debug;return Vg.filter(a=>{let r=St[a];return a.startsWith("mock")?!!n:!r.alpha||t||a===e.translationService}).map(a=>Fr(a,e))};async function Sr(e,u){if(!e.text)return e;let t=await Br({sentences:[e]},u);if(t.sentences.length>0)return{...e,...t.sentences[0]};throw new Pe("translateFailed","translate failed")}async function Br(e,u,t){if(!e.sentences.length)return{...e};let{config:n,translationService:a}=u,r=n.translationGeneralConfig,i=n.translationServices,o=a,s=i[o]||{};e.sentences=e.sentences.map(h=>h);let c=[],l={sentences:Array(e.sentences.length)},g=e.sentences.length,f=-1;if(n.cache)for(let h of e.sentences){f++;let m=o;o==="openl"&&(m=o+"-"+s.codename||En.DEFAULT_CODENAME);let b=null;try{b=await P0(Gs({originalText:h.text,from:h.from,to:h.to,service:m}),1e3)}catch(x){S.warn("query cache DB error, but it's ok",x)}if(b){let x={...h,text:b.translatedText};l.sentences[f]=x,t&&t(null,x,h)}else c.push(h)}else c.push(...e.sentences);let d=c.length;if(g-d>0&&S.debug(`use ${g-d} sentences from cache`),!c.length)return l;let p;try{p=new St[o].class(s,r),await p.init()}catch(h){if(t)for(let m of c)t(h,null,m);throw h}let y=await p.multipleTranslate({sentences:c},(h,m,b)=>{if(t&&(t(h,m,b),!h&&m&&!o.startsWith("mock")&&n.cache)){let x=o;o==="openl"&&(x=o+"-"+s.codename||En.DEFAULT_CODENAME),n.cache&&P0(Js({translatedText:m.text,from:b.from,to:b.to,detectedFrom:m.from,key:ht(b.text),service:x}),3e3).catch(D=>{S.warn("set cache DB error",D)})}});for(let h of y.sentences){let m=l.sentences.findIndex(b=>!b);if(m===-1)throw new Pe("translateFailed","can not match the result");l.sentences[m]=h}return l}var sl=["*://*/*","*","*://*"],cl="immersive-translate-wildcard-placeholder.com";function Lr(e,u){let t=[];if(!u||(u&&!Array.isArray(u)?t=[u]:t=u,t.length===0))return null;if(t.some(i=>sl.includes(i)))return e;let n=new URL(e);n.hash="",n.search="";let a=n.href,r=n.hostname;if(t&&t.length>0){let i=t.find(o=>{let s=o;if(o===r)return!0;if(sl.includes(o))return!0;if(!o.includes("*")&&o.includes("://")){try{let c=new URL(o);return c.pathname==="/"&&!o.endsWith("/")?c.hostname===r:Gg(a,o)}catch{}return!1}else{let c,l=o;o.includes("://")?c=o.split("://")[0]:(c="*",o="https://"+o);let g=o.replace(/\*/g,cl),f;try{f=new URL(g)}catch{return S.debug("invalid match pattern",g,"raw match value:",l),!1}let d=f.hostname,p=f.pathname;p==="/"&&(l.replace("://","").includes("/")||(p="/*"));let y=Kg(c+":",ll(d),ll(p));if(y){let h=new URL(a);return h.port="",y.test(h.href)}else return!1}});if(i)return i}return null}function ll(e){return e.replace(cl,"*")}function Kg(e,u,t){let n="^";return e==="*:"?n+="(http:|https:|file:)":n+=e,n+="//",u&&(e==="file:"||(u==="*"?n+="[^/]+?":(u.match(/^\*\./)&&(n+="[^/]*?",u=u.substring(2)),n+=u.replace(/\./g,"\\.").replace(/\*/g,"[^/]*")))),t?t==="*"||t==="/*"?n+="(/.*)?":t.includes("*")?(n+=t.replace(/\*/g,".*?"),n+="/?"):n+=t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):n+="/?",n+="$",new RegExp(n)}function Ru(e,u){return Lr(e,u)!==null}function Gg(e,u){let t=new URL(e),n=new URL(u);return t.hostname===n.hostname&&t.pathname===n.pathname&&t.protocol===n.protocol&&t.port===n.port}async function Du(e){let{url:u,config:t,state:n}=e,a=new URL(u),r="auto",{translationParagraphLanguagePattern:i,translationService:o,translationServices:s,translationTheme:c,translationThemePatterns:l,translationUrlPattern:g,targetLanguage:f,sourceLanguageUrlPattern:d}=t,p=Ru(u,i.matches);if(!p){let Ce=i.selectorMatches;p=ua(Ce)}let y=o,h=Object.keys(s);for(let Ce of h){let ge=s[Ce];if(Ru(u,ge.matches)){y=Ce;break}}let m=c,b=Object.keys(l);for(let Ce of b){let ge=l[Ce];if(Ru(u,ge.matches)){m=Ce;break}}let x=Ru(u,g.matches),D=Ru(u,g.excludeMatches);D||(D=Ru(u,Bo));let H=Object.keys(d),A={};for(let Ce of H){let ge=d[Ce];if(ge&&ge.matches)for(let C of ge.matches)A[C]=Ce}let W=Object.keys(A),de=Lr(u,W);de&&(r=A[de]??"auto");let P=f||"zh-CN",ce=a.hostname,ae=await su(ce),R=a.pathname+a.search+a.hash,se=await su(R),Y=`https://${ae}.com/${se}`,K=await M0(),ue={targetLanguage:P,config:t,isDetectParagraphLanguage:p,translationService:y,translationTheme:m,isTranslateUrl:x,sourceLanguage:r,isTranslateExcludeUrl:D,rule:t.generalRule,url:u,encryptedUrl:Y,state:n||{translationArea:t.translationArea,translationStartMode:t.translationStartMode,isAutoTranslate:!1,isNeedClean:!1},localConfig:K};ue.translationService==="d"&&(t.immediateTranslationTextCount=0);let Ae=t.rules,Ze;globalThis.PDFViewerApplication?Ze=Ae.find(Ce=>Ce.isPdf):Ze=Ae.find(Ce=>{let ge=Ru(u,Ce.matches);if(!ge){let C=Ce.selectorMatches;C&&C.length>0&&(ge=ua(C))}return ge});let rt=t.generalRule;return Ze&&(ue.rule=_0(rt,Ze)),ue.rule.isPdf&&(ue.state.translationArea="main"),ue.state.translationArea==="body"&&(ue.rule.paragraphMinTextCount=1,ue.rule.paragraphMinWordCount=1),ue}var xn="Original",yn=[],jr=new Set,_r=[],Cn=[],gl=[],Dn=[],dl=globalThis.location.href.split("#")[0],zr=0,xe,Jg=R0(nf,300),Yg=R0(fl,200),Xg=tu(),Qg=Xg.PROD==="1",f0,m0,p0="";async function Ct(){We()==="Original"?await hu():(We()==="Translated"||We()==="Error")&&pu()}function Us(){let e=document.querySelectorAll(`[${Vu}="1"]`);for(let u of e)u.style.display="none"}function pu(){cr(),Rr(),Oe("Translating"),p0&&(document.title=p0),document.querySelectorAll("."+Ue).forEach(n=>{n.remove()}),document.querySelectorAll("."+T0).forEach(n=>{n.remove()}),document.querySelectorAll("["+$n+"]").forEach(n=>{if(Qg)delete n[De];else{let r=Object.keys(n.dataset).filter(i=>i.startsWith(oe));for(let i of r)delete n.dataset[i]}n.removeAttribute($n)}),Oe("Original")}function Zg(e,u){let t=!1,n=Xn(e.elements),a=dt(e.elements);jr.add(e.id);let r=[];if(n){let o=new IntersectionObserver((s,c)=>{s.forEach(l=>{l.intersectionRatio>0&&(c.disconnect(),t||(t=!0,u(e)))})});Cn.push(o),r.push(o),o.observe(n)}if(a&&a!==n){let o=new IntersectionObserver((s,c)=>{s.forEach(l=>{l.intersectionRatio>0&&(c.disconnect(),t||(t=!0,u(e)))})});Cn.push(o),r.push(o),o.observe(a)}let i=_u(e.id);i&&(i.observers=r,r0(e.id,i))}function ef(e,u){if(e){let t=new ResizeObserver((n,a)=>{for(let r of n)r.contentRect.width>10&&(a.disconnect(),u(r.target))});t.observe(e),gl.push(t)}}async function fl(e){let u=[...Dn];Dn=[];try{let t=[];for(let n of u){let a=sr(n,e);if(a.length===0)continue;let r=a;t.push(...r)}await Nr(t,e)}catch(t){S.error(`translateNewDynamicNodes error: ${t.message}`)}}function Mr(e,u){jr.delete(e.id);let t=_u(e.id);t&&(t.observers&&t.observers.length>0&&t.observers.forEach(r=>{r.disconnect()}),t.observers=[],t.state="Translating",r0(e.id,t));let n=e.id;zr+=e.text.length;let a=F0(e.elements);if(e.isPdf){let r=Xn(e.elements),i=window.getComputedStyle(r),o=i.top,s=i.fontSize,c=parseFloat(s.slice(0,-2));isNaN(c)||c>28&&(s="28px");let l=e.targetContainer,g=document.createElement("span");a.length===1&&(g.style.fontSize=s),g.id=`${Ue}-${n}`,g.style.top=o;let f=wu(r,Nt),d=a.reduce((h,m)=>{let b=wu(m,Nt);return b&&b<h?b:h},1e3),y=a.reduce((h,m)=>{let b=wu(m,k0);return b&&b>h?b:h},0)-d;y<30,y>600&&(y=600),f<200&&(f=10),f&&f<0&&(f=0),g.style.left=`${f||10}px`,d<400?g.style.width=y+"px":g.style.width=`calc(100% - ${d}px)`,g.classList.add("notranslate",`${Ue}`),l.appendChild(g)}else{let r=dt(e.elements),i="afterend";e.elements.length>0&&r&&(a.length===1?i="beforeend":nu(e.elements[0],u.rule)||(i="beforeend"));let o=document.createElement("span");if(o.classList.add("notranslate",Ue),o.id=`${Ue}-${n}`,o.innerHTML=pl(),i==="beforeend"){let s=$o(r);s?s.appendChild(o):r.appendChild(o)}else if(i==="afterend")r.insertAdjacentElement(i,o);else throw new Error("not support position")}yn.push(n),Jg(u)}function uf(e,u){u.state.translationStartMode==="dynamic"&&zr>u.config.immediateTranslationTextCount?Zg(e,t=>{Mr(t,u)}):Mr(e,u)}async function hu(){if(xn==="Translating")return;Oe("Translating");let e=await ju(globalThis.location.href);S.debug("ctx",e),e.state.isNeedClean?pu():xe.state.isNeedClean=!0,e.rule.normalizeBody&&document.querySelector(e.rule.normalizeBody)&&(document.body=document.body.cloneNode(!0)),Xs(()=>{zr=0,u4(),Cn.forEach(u=>{u.disconnect()}),gl.forEach(u=>{u.disconnect()}),Cn=[],jr.clear()}),Oe("Translating");try{ta([document.body],e.rule);let u=sr(document.body,e);S.debug("detect containers",u),Oe("Translating");let{rule:t}=e;u.length>0&&await Nr(u,e),ml(e).catch(n=>{S.error("translateTitle error:",n.name,n.message,n.details||"")}),af(t,e),u.length===0&&Oe("Translated")}catch(u){Oe("Error"),S.error(u)}}async function ju(e){let u=await Qu();if(!xe)xe=await Du({url:e,config:u});else{let t={url:e,config:u,state:xe.state};xe=await Du(t)}return xe}async function qs(){We()==="Original"?await Dt():(We()==="Translated"||We()==="Error")&&(xe=await ju(globalThis.location.href),xe.state.translationArea!=="main"?await Dt():pu())}async function Dt(){xe=await ju(globalThis.location.href),xe.state.translationArea="main",await hu()}async function a0(){xe=await ju(globalThis.location.href),xe.state.translationArea="body",await hu()}async function Ws(){We()==="Original"?await a0():(We()==="Translated"||We()==="Error")&&(xe=await ju(globalThis.location.href),xe.state.translationArea!=="body"?(xe.state.translationArea="body",await hu()):pu())}async function ln(){xe=await ju(globalThis.location.href),xe.state.translationArea="body",xe.state.translationStartMode="immediate",await hu(),await fl(xe)}async function ml(e){let u=document.title;if(!u||u.includes(A0))return;p0!==u&&(p0=u);let t="auto";if(e.isDetectParagraphLanguage||(t=ar()),t==="auto"){let n=await ru({text:u});if(u0(n,e.targetLanguage))return}try{let n=await Sr({text:u,from:t,to:e.targetLanguage},e);n&&n.text&&(document.title=p0+A0+n.text)}catch(n){throw n}}function tf(e){let u=document.getElementById(Ue+"-"+e);u&&(u.innerHTML=pl())}function pl(){return`&nbsp;<span class="${le}-loading notranslate"></span>`}async function Nr(e,u){let{rule:t}=u;ta(e,t);let n=[];if(u.rule.isPdf)e.length>0&&(Oe("Translating"),n=d4(e,t).targetContainers);else{Oe("Translating");let r=c4(e,t),{hiddenElements:i}=r;for(let o of i)ef(o,()=>{Io(o,Ke),Nr([o],u)});Oe("Translating")}let a=[];if(u.rule.isPdf?a=await o4(document.body,e,u,n):(e=e.filter(r=>!$e(r,t,!1)),a=await t4(document.body,e,u)),Oe("Translating"),a.length===0){Oe("Translated");return}S.debug("detect paragraphs",a);for(let r of a)uf(r,u);Oe("Translated")}async function hl(e){let u=_u(e);if(!u)throw new Error("paragraph not found");tf(e);let t=await ju(globalThis.location.href),n=ar();t.isDetectParagraphLanguage&&(n="auto");let a={id:u.id,text:u.text,from:n,to:t.targetLanguage,url:t.encryptedUrl};try{let r=await Sr(a,t);Pr(null,r,a,t)}catch(r){Pr(r,null,a,t)}}function Pr(e,u,t,n){let a=_u(t.id);if(e||!u){e||(S.error("translate error",u),e=new Error("no response from server"));let r=t.id,i=document.getElementById(`${Ue}-${r}`),o=e.message.replaceAll(`
`,"");o=o.replaceAll('"',"&quot;"),a&&(a.state="Error",r0(a.id,a));let s=`<span class="${le}-error notranslate"> <span class="immersive-translate-tooltip" data-immersive-translate-tooltip-text="${o}"><button class="${le}-clickable-button notranslate" title="${o}">\u2757</button></span> <button class="${le}-clickable-button notranslate" data-${le}-paragraph-id="${r}" data-${le}-action="retry">\u{1F504}</button></span>`;i&&(i.innerHTML=s)}else{let r=_u(t.id);if(r){r.state="Translated",r0(r.id,r);let i=s4(r,u,n),o=u.id,s=document.getElementById(`${Ue}-${o}`);s&&(s.innerHTML=i.html,document.querySelectorAll(`[${Ku}="${o}"]`).forEach(l=>{ne(l,Vu,"1")}))}else S.error("paragraph not found",t.id)}}async function nf(e){if(yn.length===0)return Promise.resolve();let u=[...yn];yn=[];let t="auto";e.isDetectParagraphLanguage||(t=yt());let n={sentences:u.filter(r=>_u(r)).map(r=>{let i=_u(r);return{id:i.id,url:e.encryptedUrl,text:i.text,from:t,to:e.targetLanguage}})};if(n.sentences.length>0){Oe("Translating");try{await Br(n,e,(r,i,o)=>{Pr(r,i,o,e)})}catch(r){Oe("Error"),S.error("translateCurrentQueue error",r.name,r.message,r.details||" ");return}}Oe("Translated")}function Oe(e){xn=e,Ks(xn)}function af(e,u){Rr(),_r=[],Dn=[];let t=e.inlineTags.concat(e.excludeTags).concat("#text","BR");f0=new MutationObserver(function(a){a.forEach(r=>{let i=globalThis.location.href;if(i.split("#")[0]!==dl&&e.observeUrlChange){dl=i.split("#")[0],cr(),Rr(),setTimeout(()=>{S.debug("url changed, reinit page"),kn()},e.urlChangeDelay);let s=new Event(Do);document.dispatchEvent(s);return}r.addedNodes.forEach(s=>{if(s.nodeType===Node.ELEMENT_NODE){let c=s;if(rf(e,c)||!t.includes(c.nodeName)){if(c.classList.contains("notranslate"))return;Po(c,_r)||(Dn.push(c),_r.push(c),Yg(u))}}})})}),f0.observe(document.body,{childList:!0,subtree:!0});let n=document.querySelector("title");n&&(m0=new MutationObserver(function(a){a.length>0&&(a[0].target.text.includes(A0)||ml(u).catch(i=>{S.error("translateTitle error:",i.name,i.message,i.details||"")}))}),m0.observe(n,{subtree:!0,characterData:!0,childList:!0}))}function rf(e,u){if(e.extraBlockSelectors){for(let t of e.extraBlockSelectors)if(u.matches(t))return!0}return!1}async function kn(){let e=await ju(globalThis.location.href);S.debug("context",e),e.rule.urlChangeDelay&&await Ut(e.rule.urlChangeDelay);let u=e.sourceLanguage;u==="auto"?(Fe()?u=await ru({text:S0(document.body).slice(0,1e3)}):u=await Vs(),u==="auto"&&(u=await Ys()),Is(u)):bt(u);let t=e.state.isAutoTranslate||e.isTranslateUrl||e.rule.isPdf;!t&&!e.isTranslateExcludeUrl&&(S.debug(`detect page language: ${u}`),Uo(u,e.config.translationLanguagePattern)&&(t=!0,S.debug(`match language pattern ${u}, auto translate`))),t?(xe.state.isAutoTranslate=!0,await hu()):S.debug("do not auto translate")}function Rr(){f0&&(f0.disconnect(),f0.takeRecords()),m0&&(m0.disconnect(),m0.takeRecords())}function We(){return xn}function El(e){document.addEventListener("click",u=>{let t=u.target,n=t.getAttribute("data-immersive-translate-action");if(n&&n==="retry"){let a=t.getAttribute("data-immersive-translate-paragraph-id");a&&hl(Number(a))}}),e.rule.fingerCountToToggleTranslagePageWhenTouching>=2&&globalThis.addEventListener("touchstart",u=>{if(u.touches.length==e.rule.fingerCountToToggleTranslagePageWhenTouching){Ct();let t=new CustomEvent(qu,{detail:{method:"toggleTranslatePage"}});globalThis.document.dispatchEvent(t)}})}function bl(e,u){return e.localeCompare(u,void 0,{numeric:!0,sensitivity:"base"})>=0}async function An(e){try{let u=new Date;S.debug("cron task start, next will run at",new Date(u.getTime()+e).toLocaleString()),await q.storage.local.set({[Ot]:u.toISOString()}),await of()}catch(u){S.error("run cron task failed",u)}}async function yl(){let u=(await Qu()).interval;if(u){let t=await q.storage.local.get(Ot);if(t&&t[Ot]){let n=t[Ot];if(Date.now()-new Date(n).getTime()<u){let a=new Date(new Date(n).getTime()+u);S.debug(`cron task not run, next will run at ${a}`);return}else An(u)}else An(u)}}async function of(){try{let e=await Qu(),u=await Q({url:ko}),t=e.buildinConfigUpdatedAt,n=new Date(t),a=u.buildinConfigUpdatedAt,r=new Date(a),i=u.minVersion,o=q.runtime.getManifest().version;bl(o,i)?r>n?(await q.storage.local.set({buildinConfig:u}),S.info(`sync remote rules success, latest: ${new Date(a).toLocaleString()}`)):S.debug(`no need to sync rules, latest: ${n}`):S.info(`local version is too old, please update to ${i} or later`)}catch(e){S.error("sync rules error: ",e)}}function xl(){let e=["localhost",C0],u=["/dist/userscript/options/","/options/","/options"],t=globalThis.location.href,n=new URL(t),a=n.hostname,r=n.pathname;if((e.includes(a)||a.startsWith("192.168"))&&u.includes(r)){let i=document.querySelector("meta[name=immersive-translate-options]");if(i&&i.getAttribute("content")==="true")return!0}return!1}async function Dl(){if(!document.getElementById("immersive-translate-status")){S.error("Could not find status element");return}await Cl("local"),await Cl("sync"),sf();let u=document.getElementById("immersive-translate-page-ready");u&&setTimeout(()=>{u.value="true",u.dispatchEvent(new Event("change"))},100)}function sf(){let e=document.getElementById("immersive-translate-manifest");if(!e){S.error("Could not find manifest element");return}e.value=JSON.stringify(q.runtime.getManifest()),e.dispatchEvent(new Event("change"))}async function Cl(e){let u=document.getElementById("immersive-translate-status"),t=document.getElementById(`immersive-translate-${e}-storage`);if(t){S.debug("init storage");let n=await q.storage[e].get(null);t.value=JSON.stringify(n),t.dispatchEvent(new Event("change")),t.addEventListener("change",a=>{try{let r=JSON.parse(a.target.value);q.storage[e].set(r)}catch(r){S.error("save to storage error",r)}})}else{S.error(`Could not find storage ${e} element`),u.innerText="Could not find storage local input element";return}}function kl(e){let u=e.shortcuts||{},n=Object.keys(u).reduce((r,i)=>(r[u[i]]=i,r),{}),a=Object.keys(n);for(let r of a){let i=r.replace(/MacCtrl/ig,"Ctrl");Qe(i,o=>{o.preventDefault(),lf({method:n[r]})})}}function lf(e){n0(e,{tab:{id:1,url:"https://www.fake.com",active:!0}}).catch(t=>{S.error("send content message request failed",e,t)});let u=new CustomEvent(qu,{detail:e});globalThis.document.dispatchEvent(u)}async function Al(){let e=await Qu(),u=await Du({config:e,url:globalThis.location.href});if(u.isTranslateExcludeUrl&&xl())S.debug("detect web options page"),Dl();else if(El(u),Fe()?kl(e):$s(),e.debug?S.setLevel("debug"):S.setLevel("info"),!u.isTranslateExcludeUrl){if(u.rule.isPdf){let a=!1;globalThis.PDFViewerApplication&&globalThis.PDFViewerApplication.initializedPromise.then(()=>{let r=globalThis.PDFViewerApplication;r.eventBus.on("pagesdestroy",()=>{pu()}),r.eventBus.on("textlayerrendered",async()=>{a||(a=!0,await kn())}),r.eventBus.on("fileinputchange",()=>{a=!1})})}else await kn();yl()}}var Bt={},cf={root:"",lang:"en",fallbackLang:"en"};function Or(e,u){let t=Object.assign({},cf,e);Bt=u||Bt;let[n,a]=be(t.lang),[r,i]=be(Bt),[o,s]=be(!1),c=g=>{if(r.hasOwnProperty(g))return;s(!1);let f=bo(t.root||"",g);t.getUrl&&(f=t.getUrl(t.root||"",g),fetch(f).then(d=>d.json()).then(d=>{Bt[g]=d,i({...Bt}),s(!0)}).catch(d=>{i({...Bt}),s(!0)}))};return au(()=>{c(t.fallbackLang||"en"),c(n)},[n]),{lang:n,setLang:a,t:(g,f)=>{if(!r.hasOwnProperty(n))return g;let d=jt(r,n,g);return d===g&&n!==t.fallbackLang&&(d=jt(r,t.fallbackLang,g)),zn(d,f)},isReady:o}}var df=0;function _(e,u,t,n,a){var r,i,o={};for(i in u)i=="ref"?r=u[i]:o[i]=u[i];var s={type:e,props:o,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--df,__source:a,__self:n};if(typeof e=="function"&&(r=e.defaultProps))for(i in r)o[i]===void 0&&(o[i]=r[i]);return I.vnode&&I.vnode(s),s}var Hr=da(null),Ir={root:"assets",lang:"en",fallbackLang:"en"},Tl=e=>{let{t:u,setLang:t,lang:n,isReady:a}=Or({root:e.root||Ir.root,lang:e.lang||Ir.lang,fallbackLang:e.fallbackLang||Ir.fallbackLang,getUrl:e.getUrl},e.translations);return _(Hr.Provider,{value:{t:u,setLang:t,lang:n,isReady:a},children:e.children})};function wl(e,u,t){let n=[];t||(t={}),u!=="auto"&&!t[u]&&(t[u]={matches:[],excludeMatches:[]}),n=u!=="auto"?t[u].matches:[];let a={},r=Object.keys(t);for(let c of r){let g=t[c].matches;for(let f of g)a[f]||(a[f]=[]),a[f].push(c)}let i=a[e];if(i&&i.length>0)for(let c of i)t[c].matches.indexOf(e)>-1&&(t[c]={...t[c],matches:t[c].matches.filter(g=>g!==e)});let o=new Set(n);if(u==="auto")return{...t};o.add(e);let s=Array.from(o);return{...t,[u]:{...t[u],matches:s}}}function vl(e,u=2e3){return t=>{let n,a=0;return r=>{++a==e&&(t(r),a=0),clearTimeout(n),n=setTimeout(()=>a=0,u)}}}function Fl(e){let u;try{u=new URL(e)}catch{return!1}let t=u.pathname;return t.endsWith(".html")||t.endsWith(".htm")?!0:!(u.protocol!=="http:"&&u.protocol!=="https:"&&u.protocol!=="file:"&&u.protocol!=="data:")}function Sl(e){let u=e.split(".");return u.length>2?(u[0]="*",u.join(".")):null}function Bl(e){let u=e.indexOf("#");return u===-1?e:e.slice(0,u)}function Ll(){return q.runtime.getManifest().version}function zu(e){let{items:u,maxWidth:t}=e;return t=t||128,_("select",{autoComplete:"off",class:"min-select",style:{maxWidth:`${t}px`},value:u.find(n=>n.selected)?.value,onChange:n=>{let a=n.target.value,r=u.find(i=>i.value===a);r&&r.onSelected(r)},children:u.map(n=>_("option",{value:n.value,selected:n.selected,children:n.label}))})}var Tn="DROP_DOWN_DEFAULT_VALUE";function $r(e){let{showArrow:u,onSelected:t,className:n,menus:a,maxWidth:r}=e;n=n||"",u=u??!0,r=r||60;let i=ma(null);return _("select",{ref:i,autoComplete:"off",class:`min-select ${u?"":"min-select-no-arrow"} ${n||""}`,value:Tn,style:{maxWidth:`${r}px`},onChange:o=>{o.preventDefault();let s=o.target.value;if(i.current&&s!==Tn){i.current.value=Tn,i.current?.dispatchEvent(new Event("change"));let c=a.find(l=>l.value===s);c&&t(c)}},children:[{value:Tn,label:e.label}].concat(a).map(o=>_("option",{value:o.value,children:o.label}))})}function wn(){return pa(Hr)}function Ur(e){let{field:u,onChange:t,value:n}=e;n=n||u.default||"";let{t:a}=wn();return u.type==="select"?_("div",{class:"flex justify-between mb-2",children:[_("label",{class:"inline-block",children:[u.label?a(u.label):u.name,"\uFF1A"]}),_(zu,{items:u.options.map(r=>({label:`${r.label?a(r.label):r.value}`,value:n,selected:n===r.value,onSelected:()=>{t(r.value)}}))})]}):null}var gf=Ll();function qr(e){let{onTranslateTheMainPage:u,onUserConfigChange:t,pageStatus:n,config:a,onTranslateTheWholePage:r,ontranslateToThePageEndImmediately:i,onSetPageLanguage:o,onToggleTranslate:s,onTranslateLocalPdfFile:c,onTranslatePdf:l,onRestorePage:g,ctx:f,currentUrl:d,currentLang:p,onClose:y,onTranslatePage:h}=e,m=t,[b,x]=be(""),[D,H]=be(""),{t:A}=wn(),W=null,de=null,P=null,ce=null,ae=null,R=null,se=null,Y=null,K=null,ue=null,Ae=null,Ze=null;if(a){let{translationService:v,translationServices:L,translationUrlPattern:O}=a;if(St[v]&&(Y=Fr(v,f)),L&&L[v]?Ze=L[v]||{}:Ze={},d&&Fl(d)){K=new URL(d),ue=Sl(K.hostname),Ae=Bl(d);let{matches:M,excludeMatches:w}=O;de=M.includes(ue),W=M.includes(K.hostname),ce=w.includes(ue),P=w.includes(K.hostname),R=M.includes(Ae),se=w.includes(Ae)}}if(a&&p&&p!=="auto"){let{translationLanguagePattern:v}=a,{matches:L}=v;L.includes(p)?ae=!0:ae=!1}let rt=v=>{v.preventDefault(),q.runtime.openOptionsPage(),y()},Ce=v=>{m(L=>(setTimeout(()=>{x("")},3e3),L.alpha?x("Success disable alpha!"):x("Success enable alpha!"),{...L,alpha:!L.alpha}))},ge=(v,L,O,M)=>{if(v==="default"){m(re=>{let G={...re.translationUrlPattern};return{...re,translationUrlPattern:{...re.translationUrlPattern,matches:vu([K?.hostname,ue,d],G.matches),excludeMatches:vu([K?.hostname,ue,d],G.excludeMatches)}}});return}let w=v,V=w==="matches"?"excludeMatches":"matches";K&&m(re=>{let G={...re.translationUrlPattern};return G[w]=oa(L,G[w]),M.length>0&&(G[w]=vu(M,G[w])),G[V]=vu(O,G[V]),{...re,translationUrlPattern:{...re.translationUrlPattern,...G}}}),w==="matches"&&n==="Original"?setTimeout(()=>{h(),y()},100):w==="excludeMatches"&&n==="Translated"&&setTimeout(()=>{g(),y()},100)},C=v=>{if(!v){m(M=>{let w={...M.translationLanguagePattern};return{...M,translationLanguagePattern:{...M.translationLanguagePattern,matches:vu(p,w.matches),excludeMatches:vu(p,w.excludeMatches)}}});return}let L=v,O=L==="matches"?"excludeMatches":"matches";p&&m(M=>{let w={...M.translationLanguagePattern};return w[L]=oa(p,w[L]),w[O]=vu(p,w[O]),{...M,translationLanguagePattern:{...M.translationLanguagePattern,...w}}}),L==="matches"&&n==="Original"&&setTimeout(()=>{h(),y()},100)},U=K?.pathname.toLowerCase().endsWith(".pdf"),B=A("translate");n==="Translated"?B=A("show-original"):n==="Original"?U?Wo()&&K.protocol==="file:"?B=A("translate-firefox-local-pdf"):B=A("translate-pdf"):B=A("translate"):B=A(n);let te=A("translateTheWholePage"),$=A("translateToThePageEndImmediately"),fe=A("translateTheMainPage");(n==="Original"||n==="Translated")&&(a.shortcuts.toggleTranslatePage&&(Vo()&&f.rule.fingerCountToToggleTranslagePageWhenTouching>=2?B+=` (${A(`fingers.${f.rule.fingerCountToToggleTranslagePageWhenTouching}`)})`:B+=` (${a.shortcuts.toggleTranslatePage})`),a.shortcuts.toggleTranslateTheWholePage&&(te+=` (${a.shortcuts.toggleTranslateTheWholePage})`),a.shortcuts.toggleTranslateToThePageEndImmediately&&($+=` (${a.shortcuts.toggleTranslateToThePageEndImmediately})`),a.shortcuts.toggleTranslateTheMainPage&&(fe+=` (${a.shortcuts.toggleTranslateTheMainPage})`));let Ee=[];f&&(Ee=il(f));let _e=v=>{v.preventDefault(),y()};return _("div",{class:"p-3",children:[_("div",{class:"text-sm",children:[_("div",{class:"flex justify-between mb-2",children:[_("label",{class:"inline-block",children:[A("popupSourceLanguage"),"\uFF1A"]}),_(zu,{items:Tu.map(v=>({label:v0(v,a.interfaceLanguage),value:v,selected:v===p,onSelected:L=>{o(L.value)}}))})]}),a&&a.targetLanguage&&_("div",{class:"flex justify-between mb-2",children:[_("label",{class:"inline-block",children:[A("popupTarget"),"\uFF1A"]}),_(zu,{items:Tu.filter(v=>v!=="auto").map(v=>({label:v0(v,a.interfaceLanguage),value:v,selected:v===a.targetLanguage,onSelected:L=>{m(O=>({...O,targetLanguage:L.value}))}}))})]}),Y&&Ee.length>0&&_(gu,{children:[_("div",{class:"flex justify-between mb-2",children:[_("label",{class:"inline-block",children:[A("popupService"),"\uFF1A"]}),_(zu,{items:Ee.map(v=>({label:`${A("translationServices."+v.id)}${v.ok?"":" "+A("needAction")}`,value:v.id,selected:v.selected,onSelected:L=>{let O=Ee.find(M=>M.id===L.value);O.ok?(m(M=>({...M,translationService:O.id})),O.props.length===0?setTimeout(()=>{h()},1):setTimeout(()=>{g()},1)):(m(M=>({...M,translationService:O.id})),setTimeout(()=>{g()},1),setTimeout(()=>{q.runtime.openOptionsPage(),y()},100))}}))})]}),Ze&&Y.props.length>0&&Y.props.map((v,L)=>_("div",{class:"pl-4 text-sm",children:_(Ur,{field:v,value:Ze[v.name],onChange:O=>{m(M=>{let w=M.translationServices||{},V=w[Y.id]||{};return setTimeout(()=>{g()},1),{...M,translationServices:{...w,[Y.id]:{...V,[v.name]:O}}}})}},"field-"+L)}))]}),K&&_("div",{class:"flex justify-between mb-2",children:[_("label",{class:"inline-block",children:A("forThisSite")}),_(zu,{items:[{label:A("default"),value:"default",selected:W===!1&&P===!1&&!de&&!ce&&!R&&!se,onSelected:()=>{ge("default",K.hostname,[],[])}},{label:A("alwaysTranslateSomeSite",{hostname:K.hostname}),value:"matches",selected:W,onSelected:v=>{ge(v.value,K.hostname,[K.hostname,ue,Ae],[ue])}},{label:A("neverTranslateSomeSite",{hostname:K.hostname}),value:"excludeMatches",selected:P,onSelected:v=>{ge(v.value,K.hostname,[K.hostname,ue,Ae],[ue])}},ue&&{label:A("alwaysTranslateSomeSite",{hostname:ue}),value:"matchesWild",selected:de,onSelected:()=>{ge("matches",ue,[Ae,K.hostname,ue],[K.hostname])}},ue&&{label:A("neverTranslateSomeSite",{hostname:ue}),value:"excludeMatchesWild",selected:ce,onSelected:()=>{ge("excludeMatches",ue,[K.hostname,Ae,ue],[K.hostname])}},Ae&&{label:A("alwaysTranslateSomeSite",{hostname:A("currentUrl")}),value:"matchesUrl",selected:R,onSelected:()=>{ge("matches",Ae,[Ae],[])}},Ae&&{label:A("neverTranslateSomeSite",{hostname:A("currentUrl")}),value:"excludeMatchesUrl",selected:se,onSelected:()=>{ge("excludeMatches",Ae,[Ae],[])}}].filter(Boolean)})]})]}),_("div",{class:"",children:_("button",{class:"py-2 mt-1 mb-2 main-button ",onClick:()=>{U?l&&l():s()},"aria-busy":n==="Translating",disabled:n==="Translating",children:B})}),_("div",{class:"flex justify-between",children:[p&&p!=="auto"?_("label",{for:"alwaysTranslateThisLanugage",class:"text-sm",children:[_("input",{type:"checkbox",id:"alwaysTranslateThisLanugage",name:"alwaysTranslateThisLanugage",checked:!!ae,onChange:v=>{let L=v.target.checked;C(L?"matches":void 0)}}),A("alwaysTranslateSomeLanguage",{language:v0(p,a.interfaceLanguage)})]}):_("span",{}),_($r,{label:A("more"),showArrow:!0,onSelected:v=>{v.value==="translateTheWholePage"?r():v.value==="translateToThePageEndImmediately"?i():v.value==="translateTheMainPage"?u():v.value==="showTranslationOnly"||(v.value==="translateLocalPdfFile"?c&&c():v.value==="donate"?(globalThis.open(a.donateUrl),y()):v.value==="feedback"?(globalThis.open(a.feedbackUrl),y()):v.value==="options"&&(q.runtime.openOptionsPage(),y()))},menus:[a.translationArea==="main"&&{label:te,value:"translateTheWholePage"},a.translationArea==="body"&&{label:fe,value:"translateTheMainPage"},{label:$,value:"translateToThePageEndImmediately"},!Fe()&&{label:A("browser.translateLocalPdfFile"),value:"translateLocalPdfFile"},{label:"\u2615\uFE0F "+A("sponsorLabel"),value:"donate"},{label:"\u{1F41B} "+A("feedback"),value:"feedback"},{label:"\u2699\uFE0F "+A("browser.openOptionsPage"),value:"options"}].filter(Boolean)})]}),_("div",{class:"text-sm",children:b}),_("div",{class:"text-sm",children:D}),_("footer",{class:"mt-3 text-sm flex justify-between",children:[_("a",{href:"#",class:"secondary",onClick:rt,children:A("options")}),Fe()&&_("a",{href:"#",class:"secondary",onClick:_e,children:A("close")}),_("span",{class:"immersive-translate-no-select muted",onClick:vl(7)(Ce),children:["V",gf]})]})]})}var Wr={get:(e,u,t)=>{let n=u===void 0?e:{[e]:u};return q.storage[t].get(n)},set:(e,u,t)=>q.storage[t].set({[e]:u})};function vn(e,u,t){let[n]=be(()=>typeof u=="function"?u():u),[a]=be(t),[r,i]=be(n),[o,s]=be(!0),[c,l]=be("");au(()=>{Wr.get(e,n,a).then(f=>{f[e]&&i(f[e]),s(!0),l("")}).catch(f=>{s(!1),l(f)})},[e,n,a]);let g=Kt(f=>{let d=typeof f=="function"?f(r):f;S.debug("new settings",d),Wr.set(e,d,a).then(()=>{i(d),s(!0),l("")}).catch(p=>{i(d),s(!1),l(p)})},[a,e,r]);return[r,g,o,c]}function Vr(e,u,t){let n=[];return function(){let[r,i,o,s]=vn(e,u,t),c=Kt(l=>{for(let g of n)g(l)},[]);return au(()=>(n.push(i),()=>{n.splice(n.indexOf(i),1)}),[i]),[r,c,o,s]}}function _l(e,u){return Vr(e,u,"sync")}var ff="userConfig",mf={},Ml=_l(ff,mf);function Kr(e){let{onClose:u}=e,[t,n]=be("Original"),[a,r,i,o]=Ml(),[s,c]=be(null),[l,g]=be(globalThis.location.href),[f,d]=be("auto"),[p,y]=be(null),h=R=>{n(R.detail)},m=R=>{d(R);let se=wl(l,R,s.sourceLanguageUrlPattern);r(Y=>({...Y,sourceLanguageUrlPattern:se})),bt(R)},b=()=>{g(globalThis.location.href)};au(()=>(document.addEventListener(x0,h,!1),yu().then(R=>{c(R);let se=yt();d(se);let Y=We();n(Y),An(R.interval)}),document.addEventListener("urlChange",b),()=>{document.removeEventListener("pageTranslatedStatus",h),document.removeEventListener("urlChange",b)}),[]),au(()=>{yu().then(R=>{c(R)})},[a]),au(()=>{l&&s&&Du({url:l,config:s}).then(R=>{y(R)})},[l,s]);let x=()=>{hu(),u()},D=()=>{pu()},H=()=>{Ct(),u()},A=()=>{a0(),u()},W=()=>{ln(),u()},de=()=>{Dt(),u()},P=()=>{u()},ce=()=>{globalThis.alert("Not implemented yet"),u()},ae=()=>{globalThis.alert("Not implemented yet"),u()};return!s||!p?null:_(qr,{onClose:P,onTranslateTheWholePage:A,onToggleTranslate:H,onTranslateTheMainPage:de,ontranslateToThePageEndImmediately:W,onTranslatePage:x,onRestorePage:D,onTranslatePdf:ce,onTranslateLocalPdfFile:ae,onSetPageLanguage:m,onUserConfigChange:r,config:s,pageStatus:t,ctx:p,currentUrl:l,currentLang:f})}function pf(e,u){for(let t of u)e.appendChild(document.createElement("style")).innerHTML=t}var Ie={position:"right",right:0,top:335},Bn=!1,at=null,ku=null,Gr=null,Jr=null,Lt=null,Yr=null,Pl=6,Fn,Sn,jl=null,zl=null;async function Qr(){let e=tu();Yr=await M0(),Ie=Yr.pagePopupConfig||Ie;let u=document.createElement("div");u.id="immersive-translate-popup",u.setAttribute("style","all: initial"),document.body.appendChild(u);let t=u.attachShadow({mode:"open"});Jr=t;let n=[e.IMMERSIVE_TRANSLATE_PICO_CSS,e.IMMERSIVE_TRANSLATE_COMMON_CSS,e.IMMERSIVE_TRANSLATE_POPUP_CSS];pf(t,n);let a=document.createElement("div");a.innerHTML=e.IMMERSIVE_TRANSLATE_POPUP_HTML,t.appendChild(a);let r=document.createElement("script");r.textContent=e.IMMERSIVE_TRANSLATE_POPUP_JS,t.appendChild(r),at=t.querySelector("#immersive-translate-popup-container");let o=t.querySelector("#immersive-translate-popup-btn");ku=o,Gr=t.querySelector("#mount"),at.setAttribute("style",Xr(Ie)),to(),o.addEventListener("mousedown",Nl),o.addEventListener("touchstart",bf),globalThis.addEventListener("resize",c=>{at.setAttribute("style",Xr(Ie))})}function hf(){$0(null,Gr),Gr.style.display="none",ku.style.display="block",Lt=setTimeout(()=>{to(!0)},2e3)}function Rl(e){let u=e.querySelector("#mount"),t=e.querySelector("#immersive-translate-popup-btn"),n=()=>{hf()},a=r=>{r&&r.target&&r.target.id==="immersive-translate-popup-overlay"&&n()};(async()=>{let r=await yu();$0(_(Tl,{lang:r.interfaceLanguage,fallbackLang:"zh-CN",translations:_o,children:_("div",{onClick:a,id:"immersive-translate-popup-overlay",class:"immersive-translate-popup-overlay",children:_("div",{class:"immersive-translate-popup-wrapper",style:Ef(),children:_(Kr,{onClose:n})})})}),u)})().then(()=>{t.style.display="none",u.style.display="block"})}function Ef(){let e=Zr(),u=e.height,{position:t,top:n,left:a}=Ie,r={position:"absolute"};return t==="right"||t==="left"?(t==="right"?r.right=0:r.left=0,n+500>u?r.top=u-500:r.top=n):(t==="bottom"?r.bottom=0:r.top=0,a+300>e.width?r.left=e.width-300:r.left=a),r}function Zr(){return{width:Math.max(document.documentElement.clientWidth,window.innerWidth||0),height:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}function Nl(e){jl=ku.getAttribute("style"),zl=at.getAttribute("style"),e.preventDefault&&e.preventDefault(),Fn=e.pageX,Sn=e.pageY,Lt&&clearTimeout(Lt),Bn=!1,ku.style.opacity="1",ku.style.transform="none",globalThis.addEventListener("mousemove",eo),globalThis.addEventListener("mouseup",uo),globalThis.addEventListener("touchmove",Ol),globalThis.addEventListener("touchend",Ln),globalThis.addEventListener("touchcancel",Ln)}function bf(e){e.preventDefault(),Nl(e.changedTouches[0])}function Ol(e){e.preventDefault(),eo(e.changedTouches[0])}function Ln(e){e.preventDefault(),uo(e.changedTouches[0])}function eo(e){e.preventDefault&&e.preventDefault(),Bn=!0,at.setAttribute("style",`left:${e.clientX}px;top:${e.clientY}px;transform:scale(1.6);`)}function uo(e){e.preventDefault&&e.preventDefault(),xf(),Lt&&clearTimeout(Lt),Fn=Fn||0,Sn=Sn||0;let u=Math.abs(e.pageX-Fn),t=Math.abs(e.pageY-Sn);u<Pl&&t<Pl?(at.setAttribute("style",zl),ku.setAttribute("style",jl),Rl(Jr)):Bn?yf(e):Rl(Jr),Bn=!1}function yf(e){let u=Zr(),t=e.clientX,n=e.clientY,a=n,r=u.height-n,i=t,o=u.width-t;a<r&&a<i&&a<o?Ie={position:"top",left:t,top:0}:r<a&&r<i&&r<o?Ie={position:"bottom",bottom:0,left:e.clientX}:i<a&&i<r&&i<o?Ie={position:"left",left:0,top:e.clientY}:o<a&&o<r&&o<i&&(Ie={position:"right",right:0,top:e.clientY});let s=Xr(Ie);at.setAttribute("style",s),Yo({...Yr,pagePopupConfig:Ie}),Lt=setTimeout(()=>{to(!0)},2e3)}function to(e=!1){ku.style.opacity="0.4";let u="";Ie.position==="left"?u="translateX(-40%)":Ie.position==="right"?u="translateX(40%)":Ie.position==="top"?u="translateY(-40%)":Ie.position==="bottom"&&(u="translateY(40%)"),ku.style.transform=u,e&&(ku.style.transition="transform 0.2s ease-in-out, opacity 0.2s ease-in-out")}function xf(){globalThis.removeEventListener("mousemove",eo),globalThis.removeEventListener("mouseup",uo),globalThis.removeEventListener("touchmove",Ol),globalThis.removeEventListener("touchend",Ln),globalThis.removeEventListener("touchcancel",Ln)}function Xr(e){let u=Cf(e);return Object.keys(u).map(t=>typeof u[t]=="number"?`${t}:${u[t]}px;`:"").join("")}function Cf(e){let{position:u,...t}=e,n=Zr(),a={};return u==="left"?(a.left=0,t.top>n.height?a.top=n.height-100:a.top=t.top):u==="right"?(a.right=0,t.top>n.height?a.top=n.height-100:a.top=t.top):u==="top"?(a.top=0,t.left>n.width?a.left=n.width-100:a.left=t.left):u==="bottom"&&(a.bottom=0,t.left>n.width?a.left=n.width-100:a.left=t.left),a}var Il={manifest_version:3,name:"__MSG_brandName__",description:"__MSG_brandDescription__",version:"0.2.16",default_locale:"en",background:{service_worker:"background.js"},web_accessible_resources:["styles/inject.css","pdf/index.html"],content_scripts:[{matches:["<all_urls>","file:///*","*://*/*"],js:["js/browser-polyfill.js","content_script.js"],css:["styles/inject.css"],run_at:"document_end"}],commands:{toggleTranslatePage:{suggested_key:{default:"Alt+A"},description:"__MSG_toggleTranslatePage__"},toggleTranslateTheWholePage:{suggested_key:{default:"Alt+W"},description:"__MSG_toggleTranslateTheWholePage__"},toggleTranslateToThePageEndImmediately:{suggested_key:{default:"Alt+S"},description:"__MSG_toggleTranslateToThePageEndImmediately__"},toggleTranslateTheMainPage:{description:"__MSG_toggleTranslateTheMainPage__"}},options_page:"options.html",options_ui:{page:"options.html",open_in_tab:!0,browser_style:!1},permissions:["storage","activeTab","contextMenus","webRequest","webRequestBlocking","declarativeNetRequestWithHostAccess","declarativeNetRequestFeedback","declarativeNetRequest"],host_permissions:["<all_urls>"],declarative_net_request:{rule_resources:[{id:"ruleset_1",enabled:!0,path:"rules/request_modifier_rule.json"}]},action:{default_popup:"popup.html",default_icon:{32:"icons/32.png",48:"icons/48.png",64:"icons/64.png",128:"icons/128.png",256:"icons/256.png"}},browser_action:{default_icon:"icons/32.png",default_popup:"popup.html"},icons:{32:"icons/32.png",48:"icons/48.png",64:"icons/64.png",128:"icons/128.png",256:"icons/256.png"},browser_specific_settings:{gecko:{id:"{5efceaa7-f3a2-4e59-a54b-85319448e305}",strict_min_version:"63.0"}}};var _n=!1,Df=e=>document.head.appendChild(document.createElement("style")).innerHTML=e;async function kf(){let e=await yu(),u={url:globalThis.location.href,config:e},t=await Du(u);if(e.debug&&S.setLevel("debug"),globalThis.document.addEventListener(qu,n=>{_n||(_n=!0,Qr().catch(a=>{S.error("init popup error",a)}))}),typeof GM<"u"&&GM&&GM.registerMenuCommand){let n=Il.commands,i=[...Object.keys(n).filter(o=>o==="toggleTranslatePage").map(o=>{let s=n[o].description,c=s;return s.startsWith("__MSG_")&&s.endsWith("__")&&(c=Jn(`browser.${s.slice(6,-2)}`,e.interfaceLanguage)),{id:o,title:c}}),{id:In,title:Jn("browser.openOptionsPage",e.interfaceLanguage),key:"o"}];for(let o of i)GM.registerMenuCommand(o.title,()=>{o.id===In?q.runtime.openOptionsPage():Af({method:o.id})},o.key)}if(t.isTranslateExcludeUrl)S.debug("detect exclude url, do not inject anything.");else{let a=tu().IMMERSIVE_TRANSLATE_INJECTED_CSS;a&&Df(a),t.rule.isShowUserscriptPagePopup&&(_n||(_n=!0,Qr().catch(r=>{S.error("init popup error",r)})))}await Al()}function Af(e){n0(e,{tab:{id:1,url:"https://www.fake.com",active:!0}}).catch(t=>{S.error("send content message request failed",e,t)});let u=new CustomEvent(qu,{detail:e});globalThis.document.dispatchEvent(u)}globalThis.IMMERSIVE_TRANSLATE_ENTRY=kf;})();
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
