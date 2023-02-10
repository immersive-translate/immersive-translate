// ==UserScript==
// @name         Immersive Translate
// @description  Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.
// @version      0.2.56
// @namespace    https://immersive-translate.owenyoung.com/
// @author       Owen Young
// @homepageURL    https://immersive-translate.owenyoung.com/
// @supportURL    https://github.com/immersive-translate/immersive-translate/
// @match      *://*/*
// @include    *
// @icon        https://immersive-translate.owenyoung.com/favicon.png
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
// @connect    api.niutrans.com
// @connect    immersivetranslate.com
// @connect    api.immersivetranslate.com
// @connect    www.googleapis.com
// @run-at       document-end
// @name:zh-TW     沉浸式翻譯
// @description:zh-TW     沉浸式網頁雙語翻譯擴展，完全免費使用，支持 Deepl/Google/騰訊/火山翻譯等多個翻譯服務，支持 Firefox/Chrome/油猴腳本，亦可在 iOS Safari 上使用。
// @name:zh-CN     沉浸式翻译
// @description:zh-CN     沉浸式网页双语翻译扩展，免费使用，支持 Deepl/Google/腾讯/火山翻译等多个翻译服务，支持 Firefox/Chrome/油猴脚本，亦可在 iOS Safari 上使用。
// @name:fa     ترجمه همه‌جانبه
// @description:fa     افزونه برگرداننده همه‌جانبه دوزبانه تارنما، کاملاً رایگان برای استفاده است. از چندین سرویس برگرداننده مانند Deepl/Google/Tencent/Volcano Translation پشتیبانی می کند، از پردازه‌نویس Firefox/Chrome/Grease Monkey پشتیبانی می‌کند و همچنین می‌تواند در Safari iOS استفاده شود.
// ==/UserScript==
(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: !0 });
  };

  // <define:process.env>
  var define_process_env_default = { BUILD_TIME: "2023-02-10T09:47:07.409Z", VERSION: "0.2.56", PROD: "1", REDIRECT_URL: "https://immersive-translate.owenyoung.com/auth-done/", IMMERSIVE_TRANSLATE_INJECTED_CSS: `.immersive-translate-target-translation-pre-whitespace {
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

.immersive-translate-target-translation-theme-nativeUnderline-inner {
  text-decoration: underline #72ece9 !important;
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

.immersive-translate-target-translation-theme-nativeDashed-inner {
  text-decoration: dashed underline #72ece9 !important;
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
.immersive-translate-target-translation-theme-nativeDotted-inner {
  text-decoration: dotted underline #72ece9 !important;
}

.immersive-translate-target-translation-theme-wavy-inner {
  text-decoration: wavy underline #59c1bd !important;
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

.immersive-translate-target-translation-block-wrapper-theme-dividingLine::before {
  content: "";
  display: block;
  max-width: 80px;
  width: 10%;
  border-top: 1px dashed currentColor;
  padding-top: 0.5em;
}

.immersive-translate-target-translation-theme-highlight-inner {
  background: rgb(255, 255, 0);
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}
.immersive-translate-target-translation-block-wrapper-theme-marker {
  line-height: 1.5em;
}

.immersive-translate-target-translation-theme-marker-inner {
  /* TODO: add more texture */
  background: linear-gradient(
    to right,
    rgba(255, 225, 0, 0.1),
    rgba(251, 218, 65, 0.9) 3%,
    rgba(252, 210, 23, 0.9) 35%,
    rgba(251, 218, 65, 0.9) 70%,
    rgba(251, 218, 65, 0.8) 95%,
    rgba(255, 225, 0, 0.3)
  );
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

[data-immersive-translate-root-translation-theme="none"]
  .immersive-translate-target-translation-theme-mask-inner {
  filter: none !important;
}
[data-immersive-translate-root-translation-theme="mask"]
  .immersive-translate-target-inner {
  filter: blur(5px) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

.immersive-translate-target-translation-theme-mask-inner:hover {
  filter: none !important;
}

[data-immersive-translate-root-translation-theme="mask"]
  .immersive-translate-target-inner:hover {
  filter: none !important;
}

/* vertical css , please remain it in the last one. */
.immersive-translate-target-translation-vertical-block-wrapper {
  margin: 0px 8px !important;
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

.immersive-translate-loading-spinner {
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

.immersive-translate-loading-text:before {
  content: "...";
}

.immersive-translate-loading-none {
}
/* dark mode for loading */

@media only screen and (prefers-color-scheme: dark) {
  .immersive-translate-loading {
    border: 2px rgba(255, 255, 255, 0.25) solid !important;
    border-top: 2px rgba(255, 255, 255, 1) solid !important;
  }

  .immersive-translate-target-translation-theme-marker-inner {
    background: linear-gradient(
      to right,
      rgba(255, 225, 0, 0.1),
      rgba(102, 99, 78, 0.9) 3%,
      rgba(102, 99, 78, 0.8) 97%,
      rgba(255, 225, 0, 0.3)
    );
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
`, IMMERSIVE_TRANSLATE_PICO_CSS: `@charset "UTF-8";
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
`, IMMERSIVE_TRANSLATE_COMMON_CSS: `#mount#mount {
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
`, IMMERSIVE_TRANSLATE_POPUP_CSS: `html {
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
  border-radius: 10px;
  border: 1px solid var(--muted-border-color);
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
`, IMMERSIVE_TRANSLATE_POPUP_HTML: `<style>
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
`, OPTIONS_URL: "https://immersive-translate.owenyoung.com/options/", MOCK: "0", DEBUG: "0", IMMERSIVE_TRANSLATE_USERSCRIPT: "1" };

  // https://esm.sh/v106/n-gram@2.0.2/deno/n-gram.js
  var c = o(2), f = o(3);
  function o(r2) {
    if (typeof r2 != "number" || Number.isNaN(r2) || r2 < 1 || r2 === Number.POSITIVE_INFINITY)
      throw new Error("`" + r2 + "` is not a valid argument for `n-gram`");
    return s6;
    function s6(t5) {
      let e3 = [];
      if (t5 == null)
        return e3;
      let i3 = typeof t5.slice == "function" ? t5 : String(t5), n3 = i3.length - r2 + 1;
      if (n3 < 1)
        return e3;
      for (; n3--; )
        e3[n3] = i3.slice(n3, n3 + r2);
      return e3;
    }
  }

  // https://esm.sh/v106/collapse-white-space@2.1.0/deno/collapse-white-space.js
  var l = /\s+/g, a = /[\t\n\v\f\r ]+/g;
  function i(r2, e3) {
    e3 ? typeof e3 == "string" && (e3 = { style: e3 }) : e3 = {};
    let n3 = e3.preserveLineEndings ? f2 : u;
    return String(r2).replace(e3.style === "html" ? a : l, e3.trim ? g(n3) : n3);
  }
  function f2(r2) {
    let e3 = /\r?\n|\r/.exec(r2);
    return e3 ? e3[0] : " ";
  }
  function u() {
    return " ";
  }
  function g(r2) {
    return e3;
    function e3(n3, t5, c5) {
      return t5 === 0 || t5 + n3.length === c5.length ? "" : r2(n3);
    }
  }

  // https://esm.sh/v106/trigram-utils@2.0.1/deno/trigram-utils.js
  var o2 = {}.hasOwnProperty;
  function s(t5) {
    return t5 == null ? "" : i(String(t5).replace(/[\u0021-\u0040]+/g, " ")).trim().toLowerCase();
  }
  function l2(t5) {
    return f(" " + s(t5) + " ");
  }
  function u2(t5) {
    let r2 = l2(t5), n3 = {}, e3 = -1;
    for (; ++e3 < r2.length; )
      o2.call(n3, r2[e3]) ? n3[r2[e3]]++ : n3[r2[e3]] = 1;
    return n3;
  }
  function m(t5) {
    let r2 = u2(t5), n3 = [], e3;
    for (e3 in r2)
      o2.call(r2, e3) && n3.push([e3, r2[e3]]);
    return n3.sort(a2), n3;
  }
  function a2(t5, r2) {
    return t5[1] - r2[1];
  }

  // https://esm.sh/v106/franc-min@6.1.0/deno/franc-min.js
  var k = { cmn: /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g, Latin: /[A-Za-z\u00AA\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uAB66-\uAB69\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A]|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]/g, Cyrillic: /[\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F]|\uD838[\uDC30-\uDC6D\uDC8F]/g, Arabic: /[\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C-\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u0870-\u088E\u0890\u0891\u0898-\u08E1\u08E3-\u08FF\uFB50-\uFBC2\uFBD3-\uFD3D\uFD40-\uFD8F\uFD92-\uFDC7\uFDCF\uFDF0-\uFDFF\uFE70-\uFE74\uFE76-\uFEFC]|\uD803[\uDE60-\uDE7E\uDEFD-\uDEFF]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]/g, ben: /[\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FE]/g, Devanagari: /[\u0900-\u0950\u0955-\u0963\u0966-\u097F\uA8E0-\uA8FF]|\uD806[\uDF00-\uDF09]/g, jpn: /[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g, jav: /[\uA980-\uA9CD\uA9D0-\uA9D9\uA9DE\uA9DF]/g, kor: /[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g, tel: /[\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C77-\u0C7F]/g, tam: /[\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA]|\uD807[\uDFC0-\uDFF1\uDFFF]/g, guj: /[\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9-\u0AFF]/g, kan: /[\u0C80-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3]/g, mal: /[\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4F\u0D54-\u0D63\u0D66-\u0D7F]/g, mya: /[\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F]/g, pan: /[\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A76]/g, amh: /[\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]/g, tha: /[\u0E01-\u0E3A\u0E40-\u0E5B]/g, sin: /[\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4]|\uD804[\uDDE1-\uDDF4]/g, ell: /[\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65]|\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]/g }, s2 = { Latin: { spa: " de|de |os | la| a |la | y |\xF3n |i\xF3n|es |ere|rec|ien|o a|der|ci\xF3|a p|cho|ech|en |ent|a l|aci|e d|el |ona|na | co|as |al |da | to|ene|e l| en| el| pe|nte|tod|ho | su|per|ad | ti|a t|ers|tie| se|rso| pr|son|e s|te |oda|cia|n d|o d|dad|ida| in|ne | es|ion|cio|s d|con|est|a e| po|men| li|res|nci|su |to |tra| re|n e| lo|tad| na|los|a s| o |ia |que| pa|r\xE1 |pro| un|s y|ual|s e|lib|nac|do |ra |er |nal|ue | qu|e e|a d|ar |nes|ica|a c|sta|ser|or |ter|se |por|cci|io |des|ado|les|one|a a|del|l d|ndi| so| cu|s p|ale|s n|ame|par|ici|oci|una|ber|s t|rta|com| di|e a|imi|o s|e c|ert|o e|dos|las|o p|ant|dic|nto| al|ara|ibe|enc|cas| as|e p|ten|ali|o t|soc|y l|n c|s l|l t|pre|nta|so |tos|y a|ria|n t|die|a u| fu|no |l p|ial|qui|dis|s o|hos|gua|igu| ig| ca|sar| ma|l e| ac|tiv|s a|re |nad|vid|era| tr|ier|cua|n p|cla|ade|bre|s s|esa|ntr|ecc|a i| le|lid|das|d d|ido|ari|ind|ada|nda|fun|mie|ca |tic|eli|ta |y d|nid|e i|n l|ios|o y|esp|iva|y e|mat|bli|r a|dr\xE1|tri|cti|tal|rim|ont|er\xE1|us |sus|end|pen|tor|ito|ond|ori|uie|lig|n a|ist|rac|lar|rse|tar|mo |omo|ibr|odo|edi|med| me|nio|a y|eda|isf|lo |aso|l m|ias|ico|lic|ple|ste|act|tec|ote|rot|ele|ura| ni|ie |adi|u p|seg|s i|un |und|a n|lqu|alq|o i|inc|sti| si|n s|ern", eng: "the| th| an|he |nd |ion|and| to|to |tio| of|on |of | in|al |ati|or |ght|igh|rig| ri|ne |ent|one|ll |is |as |ver|ed | be|e r|in |t t|all|eve|ht | or|ery|s t|ty | ev|e h|yon| ha|ryo|e a|be |his| fr|ng |d t|has| sh|ing| hi|sha| pr| co| re|hal|nal|y a|s a|n t|ce |men|ree|fre|e s|l b|nat|for|ts |nt |n a|ity|ry |her|nce|ect|d i| pe|pro|n o|cti| fo|e e|ly |es | no|ona|ny |any|er |re |f t|e o| de|s o| wi|ter|nte|e i|ons| en| ar|res|ers|y t|per|d f| a | on|ith|l a|e t|oci|soc|lit| as| se|dom|edo|eed|nti|s e|t o|oth|wit| di|equ|t a|ted|st |y o|int|e p| ma| so| na|l o|e c|ch |d a|enc|th |are|ns |ic | un| fu|tat|ial|cia| ac|hts|nit|qua| eq| al|om |e w|d o|f h|ali|ote|n e| wh|r t|sta|ge |thi|o a|tit|ual|an |te |ess| ch|le |ary|e f|by | by|y i|tec|uni|o t|o o| li|no | la|s r| su|inc|led|rot|con| pu| he|ere|imi|r a|ntr| st| ot|eli|age|dis|s d|tle|itl|hou|son|duc|edu| wo|ate|ble|ces|at | at| fa|com|ive|o s|eme|o e|aw |law|tra|und|pen|nde|unt|oun|n s|s f|f a|tho|ms | is|act|cie|cat|uca| ed|anc|wor|ral|t i| me|o f|ily|pri|ren|ose|s c|en |d n|l c|ful|rar|nta|nst| ag|l p|min|din|sec|y e| tr|rso|ich|hic|whi|cou|ern|uri|r o|tic|iti|igi|lig|rat|rth|t f|oms|rit|d r|ee |e b|era|rou|se |ay |rs | ho|abl|e u", por: "de | de| se|\xE3o |os |to |em | e |do |o d| di|er |ito|eit|ser|ent|\xE7\xE3o| a |dir|ire|rei|o s|ade|dad|uma|as |no |e d| to|nte| co|o t|tod| ou|men|que|s e|man| pr| in| qu|es | te|hum|odo|e a|da | hu|ano|te |al |tem|o e|s d|ida|m d| pe| re|o a|ou |r h|e s|cia|a e| li|o p| es|res| do| da| \xE0 |ual| em| su|a\xE7\xE3|dos|a p|tra|est|ia |con|pro|ar |e p|is | na|r\xE1 |qua|a d| pa|com|ais|o c|ame|er\xE1| po|uer|sta|ber|ter| o |ess|ra |e e|das|o \xE0|nto|nal|o o|a c|ido|rda|erd| as|nci|sua|ona|des|ibe|lib|e t|ado|s n|ua |s t|ue | so|ica|ma |lqu|alq|tos|m s|a l|per|ada|oci|soc|cio|a n|par|aci|s a|pre|ont|m o|ura|a s| um|ion|e o|or |e r|pel|nta|ntr|a i|io |nac|\xEAnc|str|ali|ria|nst| tr|a q|int|o n|a o|ca |ela|u\xE7\xE3|lid|e l| at|sen|ese|r d|s p|egu|seg|vid|pri|sso|\xE9m |ime|tic|dis|ra\xE7|eci|ara| ca|nid|tru|\xF5es|ass|seu|por|a a|m p| ex|so |r i|e\xE7\xE3|te\xE7|ote|rot| le| ma|ing|a t|ran|era|rio|l d|eli|\xE7a |sti| ne|cid|ern|utr|out|r e|e c|tad|gua|igu| ig| os|s o|ru\xE7|ins|\xE7\xF5e|ios| fa|e n|sse| no|re |art|r p|rar|u p|inc|lei|cas|ico|u\xE9m|gu\xE9|ngu|nin| ni|gur|la |pen|n\xE7a|na |i\xE7\xE3|i\xE3o|cie|ist|sem|ta |ele|e f|om |tro| ao|rel|m a|s s|tar|eda|ied|uni|e m|s i|a f|ias| cu| ac|r a|\xE1 a|rem|ei |omo|rec|for|s f|esc|ant|\xE0 s| vi|o q|ver|a u|nda|und|fun", ind: "an |ang|ng | da|ak | pe|ata| se| ke| me|dan| di| be|ber|kan|ran|hak|per|yan| ya|nga|nya|gan| at|ara| ha|eng|asa|ora|men|n p|n k|erh|rha|n d|ya |ap |at |as |tan|n b|ala|a d| or|a s|san|tas|eti|uk |pen|g b|set|ntu|n y|tia|iap|k m|eba|aan| un|n s|tuk|k a|p o|am |lam| ma|unt| de|ter|bas|beb|dak|end|i d|pun|mem|tau|dal|ama|keb|aka|ika|n m| ba|di |ma | sa|den|au |nda|n h|eri| ti|ela|k d|un |n a|ebe|ana|ah |ra |ida|uka| te|al |ada|ri |ole|tid|ngg|lak|leh|dap|a p|dil|g d|ena|eh |gar|na |ert|apa|um |tu |atu|a m|sam|ila|har|n t|asi|ban|erl|t d|bat|uat|ta |lan|adi|h d|neg| ne|kum|mas|nan|pat|aha| in|l d|emp|sem|rus|sua|ser|uan|era|ari|erb|kat|man|a b|g s|rta|ai |nny|n u|ung|ndi|han|uku|huk| hu|sa |ers|in | la|ka | su|ann|car|kes|aku|dip|i s|a a|erk|n i|lai|rga|aru|k h|i m|rka|a u|us |nak|emb|gga|nta|iba| pu|ind|s p|ent|mel|ina|min|ian|dar|ni |rma|lua|rik|ndu|lin|sia|rbu|g p|k s|da |aya|ese|u d|ega|nas|ar |ipe|yar|sya|ik |aga| ta|ain|ua |arg|uar|iny|pem|ut |si |dun|eor|seo|rak|ngs|ami|kel|ini|g t|dik|mer|emu|aks|rat|uru|ewa|il |enu|any|kep|pel|asu|rli|ia |dir|jam|mba|mat|pan|g m|ses|sar|das|kuk|bol|ili|u k|gsa|u p|a k|ern|ant|raa|t p|ema|mua|idi|did|t s|i k|rin|erm|esu|ger|elu|nja|enj|ga |dit", fra: " de|es |de |ion|nt |tio|et |ne |on | et|ent|le |oit|e d| la|e p|la |it | \xE0 |t d|roi|dro| dr| le|t\xE9 |e s|ati|te |re | to|s d|men|tou|e l|ns | pe| co|son|que| au| so|e a|onn|out| un| qu| sa| pr|ute|eme| l\u2019|t \xE0| a |e e|con|des| pa|ue |ers|e c| li|a d|per|ont|s e|t l|les|ts |tre|s l|ant| ou|cti|rso|ou |ce |ux |\xE0 l|nne|ons|it\xE9|en |un | en|er |une|n d|sa |lle| in|nte|e t| se|lib|res|a l|ire| d\u2019| re|\xE9 d|nat|iqu|ur |r l|t a|s s|aux|par|nal|a p|ans|dan|qui|t p| d\xE9|pro|s p|air| ne| fo|ert|s a|nce|au |ui |ect|du |ond|ale|lit| po|san| ch|\xE9s | na|us |com|our|ali|tra| ce|al |e o|e n|rt\xE9|ber|ibe|tes|r d|e r|its| di|\xEAtr|pou|\xE9t\xE9|s c|\xE0 u|ell|int|fon|oci|soc|ut |ter| da|aut|ien|rai| do|iss|s n| ma|bli|ge |est|s o| du|ona|n p|pri|rs |\xE9ga| \xEAt|ous|ens|ar |age|s t| su|cia|u d|cun|rat| es|ir |n c|e m| \xE9t|t \xEA|a c| ac|ote|n t|ein| tr|a s|ndi|e q|sur|\xE9e |ser|l n| pl|anc|lig|t s|n e|s i|t e| \xE9g|ain|omm|act|ntr|tec|gal|ul | nu| vi|me |nda|ind|soi|st | te|pay|tat|era|il |rel|n a|dis|n s|pr\xE9|peu|rit|\xE9 e|t \xE9|bre|sen|ill|l\u2019a|d\u2019a| mo|ass|lic|art| pu|abl|nta|t c|rot| on| lo|ure|l\u2019e|ava|ten|nul|ivi|t i|ess|ys |ays| fa|ine|eur|r\xE9s|cla|t\xE9s|oir|eut|e f|utr|doi|ibr|ais|ins|\xE9ra|\u2019en|i\xE9t|l e|s \xE9|nt\xE9| r\xE9|ssi| as|nse|ces|\xE9 a", deu: "en |er |der|ein| un|nd |und|ung|cht|ich| de|sch|ng | ge|ine|ech|gen|rec|che|ie | re|eit| au|ht |die| di| ha|ch | da|ver| zu|lic|t d|in |auf| ei| in| be|hen|nde|n d|uf |ede| ve|it |ten|n s|sei|at |jed| je| se|and|rei|s r|den|ter|ne |hat|t a|r h|zu |das|ode| od|as |es | an|fre|nge| we|n u|run| fr|ere|e u|lle|ner|nte|hei|ese| so|rde|wer|ige| al|ers|n g|hte|d d| st|n j|lei|all|n a|nen|ege|ent|bei|g d|erd|t u|ren|nsc|chu| gr|kei|ens|le |ben|aft|haf|cha|tli|ges|e s| si|men| vo|lun|em |r s|ion|te |len|gru|gun|tig|unt|uch|spr|n e|ft |ei |e f| wi| sc|r d|n n|geh|r g|dar|sta|erk| er|r e|sen|eic|gle| gl|lie|e e|tz |fen|n i|nie|f g|t w|des|chl|ite|ihe|eih|ies|ruc|st |ist|n w|h a|n z|e a| ni|ang|rf |arf|gem|ale|ati|on |he |t s|ach| na|end|n o|pru|ans|sse|ern|aat|taa|ehe|e d|hli|hre|int|tio|her|nsp|de |mei| ar|r a|ffe|e b|wie|erf|abe|hab|ndl|n v|sic|t i|han|ema|nat|ber|ied|geg|d s|nun|d f|ind| me|gke|igk|ie\xDF| fa|igu|hul|r v|dig|rch|urc|dur| du|utz|hut|tra|aus|alt|bes|str|ell|ste|ger|r o|esc|e g|rbe|arb|ohn|r b|mit|d g|r w|ntl|sow|n h|nne|etz|raf|dlu| ih|lte|man|iem|erh|eru| is|dem|lan|rt |son|isc|eli|rel|n r|e i|rli|r i| mi|e m|ild|bil| bi|eme| en|ins|f\xFCr| f\xFC|gel|\xF6ff| \xF6f|owi|ill|wil|e v|ric|f e", jav: "ng |an | ka|ang|ing|kan| sa|ak |lan| la|hak| pa| ha|ara|ne |abe| in|n k|ngg|ong|ane|nga|ant|won|uwo| an| uw|nin|ata|n u|en |ra |tan| da|ran|ana| ma|nth|ake|ben|beb|hi |ke |sab|nda| ng|adi|thi|nan|a k| ba|san|asa|ni |e h|e k|g k| ut|pan|awa| be|eba|gan|g p|dan| wa|bas|aka|dha|yan|sa |arb|man| di|wa |g d| na|g n|ban| tu|n s|ung|wen|g s|rbe|dar|dak|di |g u|ora|aya|be |ah |a s|eni| or|han|as | pr|a n|na |iya|a a|kar|at |a l|mar|uwe|duw|uta|und|n p|asi|pa | si|ala|n n| un|kab|oni|ya |i h|gar|g b|yat|tum|ta |n m|i k|apa|taw| li|ani| ke|al |ka |kal|ngk|ega| ne|nal|n i|g a|ggo|ina|we |ena|dad|iba|awi|aga|a p| ta|sar|adh|awe|and|uju|ind|min|sin|ndu|uwa|gge|n l|ggu|ngs|n b|a b|pra|iji|n a|ha | bi|kat|go | ku|e p|ron|kak|ngu|a u|gsa|war|nya|g t|pad|bis|k b|i w|ae |wae| nd|ali|a m|er |sak|e s|ku |liy|ama|i l|eh |isa|arg|n t|a d|kap|i s|ayo|gay| pe|ndh|bad|pri|neg|tow|uto|eda|bed|il |ih | ik|ur |k k|rta|art|i p|rga|lak|ami|ro |aro|yom|r k|e d|a w|kon|rib|eng|ger|g l|ras|dil| ti|k l|rap|mra|uma| pi|k h|n d|gaw|wat|ga |k n|ar |per| we|oma|k p|jro|ajr|saj|ase|ini|ken|saw|ona|nas|kas|h k|i t| um|tin|wo | me|aba|rak|pag|yar|sya|t k| te| mu|ngl| ni|i b|men|ate|a i|aku|ebu|a t| du|g m|owo|mat| lu|amp", vie: "ng |\u0323c |\u0301c | qu|a\u0300 | th|nh | ng|\u0323i |\u0300n |va\u0300| va| nh|uy\xEA| ph|quy| ca|\xEA\u0300n|y\xEA\u0300|\u0300nh|\u0300i |\u0323t | ch|o\u0301 | tr|ng\u01B0|i n| gi|g\u01B0\u01A1|\u01A1\u0300i|\u01B0\u01A1\u0300|\u0301t | co|\u01B0\u01A1\u0323| cu|a\u0301c|\u01B0\u0323 |\u01A1\u0323c| kh| \u0111\u01B0|\u0111\u01B0\u01A1| t\u01B0|co\u0301| ha|\xF4ng|c t| \u0111\xEA|n t|i \u0111|i\u0300n|\u0300u |ca\u0301|gia|\u0301i |o\u0323i|mo\u0323| mo|\xEA\u0300u|i\xEA\u0323|\u0111\xEA\u0300|u c|nh\u01B0|pha| ba| bi|\xE2\u0301t|\u0309a |u\u0309a|cu\u0309|h\xF4n| \u0111\xF4|g t|\u0301 q|\u0303ng| ti|t\u01B0\u0323|t c|\u0323n | la|n \u0111|n c|n n|hi\xEA|ch |ay |hay| vi|\xE2n | \u0111i| na|ba\u0309| ho|do | do| t\xF4| hi|\xF4\u0323i|ha\u0301|i\u0323 |na\u0300|\u0300 t|\u01A1\u0301i|h\xE2n| m\xF4|\u0301p |a\u0300n|\u0323 d|\u0301ch|\u0323p |\u0300o |a\u0300o|kh\xF4|\u0301n |\xF4\u0323t|m\xF4\u0323| h\xF4|ia |\xF4\u0301c|c h|h\u01B0\u0303|i v|g n|\u0301ng|u\xF4\u0301|qu\xF4|h t|\xF4n |\xEAn |n v|nh\xE2|\u0323 t| b\xE2|i c|g v|\u0309ng|i\xEA\u0301|c c|\xE2\u0323t|th\u01B0|h\u01B0 |\u01B0\u01A1\u0301|\u0309n | v\u01A1| c\xF4|c \u0111| \u0111o| s\u01B0|t t|\xF4\u0323c|\u01B0\u0303n|v\u01A1\u0301| v\xEA|a\u0309 |\u0323ng|g \u0111|\u0309o |a\u0309o|u\xE2\u0323| \u0111a|bi\u0323|la\u0300|s\u01B0\u0323|b\xE2\u0301|ha\u0300|h\xF4\u0323|i t|a\u0309n|h\u01B0\u01A1|\u0300ng|tro|\u0309m |o v| mi|\xEA\u0309 |u\u0323c|i h|\u01B0\u0301c|a\u0301p|g c|\u0303 h|ia\u0301|n b|\u0309i |a m|h c|c\xF4n|\xEA\u0323n|\u01A1\u0301c|ha\u0323|\u0111\xF4\u0323| du| c\u01B0|a c|n h|tha|a\u0303 | xa|\u0301o |a\u0301o|i\u0301n|\u0300y |g b| h\u01B0|g h|ong|ron|\u0300 c|cho|\u0300 n|mi\u0300|\u01B0\u0323c|h v|c b| lu|i b|\xEA\u0323 |ai |\xEA\u0301 |\u0323 c|xa\u0303|kha|c q|i\xEA\u0309|t\xF4\u0323|\xF4\u0301i|\u0111\xF4\u0301|a\u0301 |hoa|o h|h \u0111|ca\u0309|n l|ho\u0323|ti\xEA|y t|\u0309 c|a\u0323i|a\u0301n|\u0300 \u0111|oa\u0300|y \u0111|chi|\u0309 n|ph\xE2|\xEA\u0300 |thu|i\xEAn|du\u0323|o c|i m|lu\xE2|c p|\xF4\u0301n|c l|\u0301 c|u\u0303n|cu\u0303|c g|c n|qua|n g|c m|o n|a\u0309i|ha\u0309|\u0301 t|ho |v\xEA\u0300| t\xE2| h\u01A1|o t|\u01A1\u0309 |h\u01B0\u0301|hi\u0300|vi\xEA|\u0300m |\u0309 t|\u0111o\u0301|th\xF4|\u01B0\u0301 |c\u01B0\u0301|hi\u0301|\u0301nh|a\u0300y|\u01A1\u0309n|\u01B0\u01A1\u0309| b\u0103|tri| ta|m v|c v|\u01A1\u0323p|h\u01A1\u0323|h m| n\u01B0|\xEA\u0301t|thi|\u0103\u0323c|ngh|uy ", ita: " di|to | in|ion|la | de|di |re |e d|ne | e |zio|rit|a d|one|o d|ni |le |lla|itt|ess| al|iri|dir|tto|ent|ell|i i|del|ndi|ere|ind|o a| co|te |t\xE0 |ti |a s|uo |e e|gni|azi| pr|idu|ivi|duo|vid|div|ogn| og| es|i e| ha|all|ale|nte|e a|men|ser| su| ne|e l|za |i d|per|a p|ha | pe| un|con|no |sse|li |e i| o | so| li| la|pro|ia |o i|e p|o s|i s|in |ato|o h|na |e s|a l|e o|nza|ali|tti|o p|ta |so |ber|ibe|lib|o e|un | a | ri|ua |il | il|nto|pri|el | po|una|are|ame| qu|a c|ro |oni|nel|e n| ad|ual|gli|sua|ond| re|a a|i c|ri |o o|sta|ita|i o| le|ad |i a|ers|enz|ssi|\xE0 e|it\xE0|gua|i p|e c|io | pa|ter|soc|nal|ona|naz|ist|cia|rso|ver|a e|i r|tat|lle|sia| si|rio|tra|che| se|rt\xE0|ert|anz|eri|tut|\xE0 d|he | da|al |ant|qua|on |ari|o c| st|oci|er |dis|tri|si |ed | ed|ono| tu|ei |dei|uzi|com|att|a n|opr|rop|par|nes|i l|zza|ese|res|ien|son| eg|n c|ont|nti|pos|int|ico|r\xE0 |sun|ial|lit|sen|pre|tta|dev|nit|era|eve|ll |l i| l |nda|ina|non| no|o n|ria|str|d a|art|se |ssu|ica|raz|ett|sci|gio|ati|egu| na|i u|utt|ve | ma|do |e r|ssa|sa |a f|n p|fon| ch|d u|rim| fo|a t| sc|tr\xE0|otr|pot|n i| cu|l p|ra |ezz|a o|ini|sso|dic|ltr|uni|cie| ra|i n|ruz|tru|ste| is|der|l m|a r|pie|lia|est|dal|nta| at|tal|ntr| pu|nno|ann|ten|vit|a v", tur: " ve| ha|ve |ir |ler|hak| he|her|in |lar|r h|bir|ya |er |ak |kk\u0131|akk|eti| ka| bi|eya|an |eri|iye|yet|ara|ek | ol|de |vey|\u0131n |\u0131r |nda|ar\u0131|esi|\u0131n\u0131|d\u0131r| ta|tle|e h|as\u0131|etl|e k| va|\u0131 v|s\u0131n|ile|ne |rke|erk|ard|ine| sa|\u0131nd|ini|k h|k\u0131n|ama|le |tin|rd\u0131|var|a v| me|e m|na |sin|ere|k v| \u015Fa| bu|lan|kes|dir|rin|dan| ma|k\u0131 |mak|\u015Fah|da | te|mek| ge|n\u0131 | hi|nin|en |n h| se|lik|rle|ana|lma|e a|\u0131 h|r \u015F|ill|si | de|aya|zdi|izd|aiz|hai|ret|hi\xE7|\u0131na| i\u015F|e b| ba|kla|et | h\xFC|r\u0131n|n k|ola|nma|e t| ya|eme|riy|n v|e i|a h|li |mil|eli|ket|ik |kar|irl|h\xFCr|im |evl|mes|e d|ahs|ma |rak|ala|let|lle|un | ed|rri|\xFCrr|bu | mi|i v|dil| il| e\u015F|n i|la |el |mal| m\xFC| ko|e g|se | ki|mas|lek|mle|mem|n b|ili|e e|ser| i\xE7|n s|din| di|es |mel|eke|tir|\u015Fit|e\u015Fi|r b|akl|yla|n m|len| ke|edi|oru|nde|re |ele|ni |t\xFCr|a k|eye|\u0131k |ken|u\u011Fu| uy|eml|erd|ede|ame| g\xF6|e s|i m|tim|i b|rde|r\u015F\u0131|ar\u015F|a s|it |t v|siy|ar |rme|est|bes|rbe|erb|te |al\u0131| an|ndi|end|hs\u0131|unm|r\u0131 |kor|n\u0131n| ce|maz|mse|ims|kim|i\xE7 | ay|a m|lam|ri |s\u0131z|a b|ade|n t|nam|lme|ilm|k g|il |tme|etm|r v|e v|n e|\u011Fre|\xF6\u011Fr| \xF6\u011F|al |\u0131yl|olm|vle|\u015Fma|i s|ger|me | da|ind|lem|i o|may|cak|\xE7in|i\xE7i|nun|kan|ye |e y|r t|az |\xE7 k|ece|s\u0131 |eni| mu|ulu|und|den|lun| fa|\u015F\u0131 |ahi|l v|r a|san|kat| so|enm| ev|i\u015F ", pol: " pr|nie|pra| i |nia|ie |go |ani|raw|ia | po|ego| do|wie|iek|awo| ni|owi|ch |ek |do | ma|wo |a p|\u015Bci|ci |ej | cz| za| w |ych|o\u015Bc|rze|prz| ka|wa |eni| na| je|a\u017Cd|ka\u017C|ma |z\u0142o|cz\u0142|no\u015B|o d|\u0142ow|y c|dy |\u017Cdy|i p|wol| lu|ny |oln| wy|stw| wo|ub |lub|lno|rod|k m|twa|dzi|na | sw|rzy|aj\u0105|ecz|czn|sta| sp|owa|o p|spo|i w|kie|a w|zys|obo|est|neg|a\u0107 |mi |cze|e w|nyc|nic|jak| ja|wsz| z |jeg|wan|\u0144st|o s|a i|awa|e p|yst|pos|pow| r\xF3|o o|j\u0105c|ony|nej|owo|dow|\xF3w | ko|kol|aki|bez|rac|sze|iej| in|zen|pod|i i|ni | ro|cy |o w|zan|e\u0144s|no |zne|a s|lwi|olw|ez |odn|r\xF3w|odz|o u|ne |i n|i k|czy| be|acj|wob|inn| ob|\xF3wn|zie| ws|aln|orz|nik|o n|icz|zyn|\u0142ec|o\u0142e|po\u0142|aro|nar|a j|i z|t\u0119p|st\u0119|ien|cza|o z|ym |zec|ron|i l|ami| os|kra| kr|owe| od|ji |cji|mie|a z|bod|swo|dni|zes|e\u0142n|pe\u0142|iu |edn|iko|a n|raj| st|odo|zna|wyc|em |lni|szy|wia|nym|\u0105 p|j\u0105 |ze\u0144|iec|pie|st |jes| to|sob|kt\xF3|ale|y w|ieg|och|du |ini|war|zaw|nny|roz|i o|wej|i\u0119 |si\u0119| si|nau| or|o r|kor|e s|pop|zas|niu|z p|owy|w k|ywa| ta|ymi|hro|chr| oc|jed|ki |o t|ogo|oby|ran|any|oso|a o|t\xF3r| kt|w z|dne|to |tan|h i|nan|ejs|ada|a k|iem|aw |h p|wni|ucz|ora|a d| w\u0142|ian| dz| mo|e m|awi|\u0107 s|gan|zez|mu |taw|dst|wi\u0105|w c|y p|kow|o j|i m|y s|bow|kog|by |j o|ier|mow|sza|b o|ju |yna", swh: "a k| ya|na |wa |ya | ku|a m| na| ha|i y| wa|a h|a n|ana|aki|ki |la |hak| ka|kwa|tu | kw| ma|li |a a|ila|i k| ki|ni |a w|ali|a u| an| mt|ke |mtu|a y|ake|ati|kil|ka |ika|kat|ili|te |ote|we |a s|e k|ia |zi |u a|za |azi|ifa|ma |yak|yo |i n|ama| yo|au | au|e a|kut|amb|o y|ha |asi|fa |u w|hal|ara|sha|ish|ata|ayo| as|tik|u k| za|i z|ina|u n|mba|uhu|hi |hur|cha|yot|ru |uru|wat| ch|eri|ngi|e y|u y|i a|aif|tai| sh|nay|chi|ra |ani| bi| uh|sa | hi|i h|awa|iwa|a j|ti |mu |o k|ja |kan|uli|iwe|any|i w| am|e n|end|atu|kaz|o h|ria|her|she|shi|nch| nc|uta|ye |wak|ii |ele|ami|adh|eza| wo|iki|oja|moj|jam| ja|aka|bu |kam|kul|mat|fan|a l|agu|ind|ne |iri|lim|wen|da |kup|uto|i m|a b|ini|wan|bil| ta|sta|dha| sa| ni|ao | hu|e w|wot| zi|rik|kuf|aji|ta |wez|nya|har| ye|e m|si |lin| ut|ine|gin|ing| la|a t|zim|imu|ima|tak|e b|uni|ibu|azo|kos|yan|nye|uba|ari|ahi|nde|asa|ri |ham|dhi|eli|hir|ush|pat| nd|kus|maa|di |nda|oa |bar|bo |mbo|oka|tok|ndw|ala|wal| si|uzi|hii|tah|i s|o n|liw| el|upa|zin|hag|a c|ndi|ais|mai|eny|mwe|aa |ewe| al|ndo|e h|lo |umi|kuh|jib|osa|mam|a z|ufu|dwa|u i| in|iyo|nyi| ny|u m|sil|ang|o w|guz|zwa|uwa|kuw|hil|saw|uch|ufa|laz|und|aha|ua | mw|bal| lo|o l|a i|del|nun|anu|nji| ba|lik|le |uku|i i", sun: "an |na |eun|ng | ka|ana| sa| di|ang|ung|un |nga|ak | ha|keu| ba|a b| an|nu |hak| bo|anu|ata|nan|a h|ina| je|aha|ga |ah |awa|jeu| na|ara|ing|oga|bog|gan| ng|asa|kan|a s|ha |ae |bae|n k|a k| pa|a p|sah|g s|sar| si|sin|a n|din|n s|ma | at|aga|a a|tan| ku| ma|n a|san|man|wa |lah|pan|taw|u d|ra |ari|eu | pi|gar| pe|kat| te|n p|sa |per|a d|a m|e b|aan|ban|ran|ala|ike|n n|kum| ti|ama|a j|pik|ima|n d|al |at | ja|ila|ta |nda|bas|rim|teu|n b|eba|beb|udu|aya|ika|ngg|nag|kab|rta|art| me|ola|k n|uma|atu|aba|g k|adi|aca| po|ngt|nar|una|ate|oh |boh|awe|di |tin|asi|uku|n h|dan|aka|iba|car|sac|gaw|are|ent|um |jen|abe|u s|dil|pol|ar |ku |kud|u m|upa|han| hu|ake|bar|ur |hna|aru|h s|a t|sak|wat|kaw| so|n t|pa |mpa|du |ngk|g d|ena|huk| mi|mas|ngs|ti |n j|ka |aku|ren|n m| ta|law|isa| tu|und|a u|h a|tay|ula|aja|ali|nte|gsa|en |gam| wa|ieu|ere|k h|jal|h b|il |dit|ngu|lan|asu|yun|ayu|gta|k d|a r|g n|mah|uda|dip|kas|rup|geu| be|ter|sej|min|ri |ern|u p|k k|amp|ura|kal|e a|k a|ut |g b|nak|bis| bi|k p|tes|end|we |h k|tun|uan| un| de|u n|h t|ksa|u k|ian|wil|u b|ona|nas|uka|rak|eje| se|ami| ke|war| ra| ie|k j|eh |ya |lma|alm|pen|tur|wan|lak|h j|g a|ean|up |rga|arg|r k|u t| ne|deu|gal|gke|e t|h p| ge|g t| da|i n", ron: " de|re | \xEEn|\u0219i |are|de | \u0219i|te |ul | sa|rep|e d|ea |ept|dre|tul|e a| dr|ie |\xEEn |ptu|le |ate|la |e p| la| pe|ori| pr|ce |e s| or|au |tat| ar|ice|ii |or |a s| fi| a |ric|ale|per| co|n\u0103 |\u0103 a|rea|ers|i s| li|sau| ca|rso|ent|lor|a\u021Bi|al |a d|e o|men|l l|ei |e c|pri|an\u0103| ac| re|uri|ber|ibe|lib|a p|oan|soa| in|i l|ter| al| s\u0103|tea|l\u0103 |car|t\u0103\u021B|s\u0103 |tur|i a|i d|nal| ni|ri |ita|e \xEE|e \u0219|se |ilo|in |ia |\u021Bie|pre|fie|\u021Bii|\u0103\u021Bi|con|ere|e f|a o|eni|nte| nu| se|ace|ire|ici| cu|i \xEE|a c|i n|a l|pen|ui |nu |\u0103ri|al\u0103|ona|l d|r\u0103 |ert|ril| su|ntr|n c|rin| as|ni |i o|eri|t\u0103 |c\u0103 |ile|\u0103 d|i c|e n|ele|sa | mo|i p|fi |sal|tor|va |oci|soc|nic|pro| un| tr|est|in\u021B|a \xEE|uni|n m|a a| di|ecu|lui|sta|lit| po|tre|gal|ega|oat|ra |act|\u0103 \xEE|leg|u d|e l|nde|int|a f|n a| so|na\u021B|ara|i f|uie|iun| to|tar|ste|ces|rar|at | ce|eme|i \u0219|rec|dep| c\u0103| o | \xEEm|bui|ebu|reb| eg| na|m\xE2n|ntu|ili|v\u0103\u021B|\xE2nd|iei|r \u0219|bil|pli|od |mod|res|din|e e|c\u021Bi| au|ali|\u0103 p|\u0103 f|\xEEmp|ial|cia|ion|\u0103 c|dec|nta| om|it\u0103| fa|\u021B\u0103 |cu |tra|\u0103\u021B\u0103|nv\u0103|\xEEnv|\xE2t |ite|i i|lic| pu| ex|riv|tri|rot|\u021Ba |\u021Bi |l c|rta|imi|ulu|\u021Bio|ic\u0103|lig|rel|ta |cla|t \xEE|nt |nit|e m|\xE2nt|\u0103m\xE2|\u021B\u0103m|ger|n\u021Ba|ru |tru|gur|u c|bli|abi|at\u0103|art|par|ar |rim|iva|l \u0219| sc|ime|nim|era|sup|ind|u a|dic|ic | st| va|ini|igi|e r", hau: "da | da|in |a k|ya |a d| ya|an |a a| ko| wa|na | a |sa | ha|kin|wan|ta | ba|a s| ta|a y|a h|wa |ko | na|n d|a t|ba |ma |n a| ma|iya|hak|asa| sa|ar |ata|yan| za|akk|a w|ama| ka|i d|iki|a m|owa|a b| ci| mu| sh|anc|nci|kow|a z|ai |nsa|a c|shi| \u0199a|cik|ne |ana|i k|ci |kki|e d|a \u0199| ku|su |n y|uma|ka |uwa|kum|hi |a n|utu| yi|ani| ga| ra|aka|ali|mut|\u2018ya|tar| do|\u0257an|ars| \u2018y|sam|\u0199as|nda|ane|man|tum|i a|yi |ni | du|ada| su|and|a g|cin| ad|a i|ke | \u0257a|n k|yin|um |e m| ab|ins|nan|ki |mi |ami|yar|min|oka|re |i b|kam|mas|i y|mat|za |ann|en |a\u0257a| ja|m n|li |duk|dai|e s|n s|ra |n w|n h|aik| ai|ida|ga |san|rsa|aba|sar|ce |nin| la|o n|ban|nna|kan|abi|una|dam|me |ara|i m|hal|a r|add|are|n j|abu| ne|zai|a \u0257|wat|ari| \u0199u|on |ans|wa\u0257|ame|ake|kar|din|zam| fa|a l|\u0199un|buw|r d| hu|oki|kok|a \u2018|u d|n t|abb|aur| id|rin|yak|dok|kiy|ray|jam|n b|ubu|bub|n m|i s| an|am |ili|bba|omi|dan|gam|ayu|ash|nce|tsa|ayi|har|yya|ika|bin|han|kko|rsu|aif|imi|fa | am|i i|dom| ki|yuw|dun|o a|fan|n \u0199|aya|fi |n r|she|uni|bay|riy|n \u2018|sab| iy|bat|tab|aga| ir|mar|o w|i w|sha|awa| ak|uns|unc|tun|u k| il|\u0257in|mfa|amf|aci|ewa|kas|lin|n n|don|n i|ure|ifi|lai|dda| ts|iri|aye|un |tan|wad|gwa|afi| ay|ace|mba|amb|aid|nta|ant|war|lim|kya| al|a\u0257i", fuv: "de | e |e n| ha|nde|la | wa|ina| ka|akk| nd|\u0257o |na | in|e e|hak|al |di |i h|kke|ii |um |ko |ala|ndi| mu| ne|lla| jo|wal|e\u0257\u0257|ne\u0257|all|mum| fo|kal|jog|ke |aaw|taa| ko|eed|\u0257\u0257o|aa | le|ji |ade|aad|laa|o k| ng|e h| ta|re |ogi|a j|e w|e m|nnd|gii|e l|ley|awa|aag|ede|waa|e k|gu |e d| go|gal|\u0253e |ti |fot|aan|eyd|ydi|\u0257e |ee | re|ol |oto|i e|oti|m e|taw|nga|a i|kee|to |ann|eji|am |ni | wo|een|goo|eej|e f| he|enn|gol|agu|pot| po|dee|ay | fa|ka |a k|ond|oot| de|a f|o f|a n|wa |maa|ota|le |hay|i k|o n|ngo|e j|o t| ja|\xF1aa|hee|nka|i w|awi|a w|ngu|der| to|e t|dim|i n|fof|i f|e g|tee|naa|aak| do|too|a e|ndo|ren|dii|oor|er |o e|i m|of | sa| so|gaa|ani|kam| ma| \xF1a|o w|i l|u m|kaa|ima|dir| ba|igg|lig| li|aar| \u0253e|o i|e s| o |e r|so |ooj| nj| la|won|awo|dow|woo|faw|and|e i|ore|nge|nan|are|a t|tin|aam| mo|\u0257ee|ita|ira|aa\u0257|e p|nng|ma |ank|yan|nda|oo |e \u0253|njo|ude|nee|e y|e a|je | ya|en |ine|iin| di|ral| na|\u0257i |und| hu|inn|\u014Bde|a\u014Bd|ja\u014B|a d|den| fe| te|go | su|a h|haa|tal|e\u0257e|e b|y g|baa|tde| yi|\u0257\u0257a|o h|ii\u0257|ow | da|do |l n|alt| ho|l e|aga|mii| aa|a a|ama|nna|m t| ke|edd|oga|m w|l m|o j|a\u0257e|ree|oje|yee| no|ele|ne |ago| pa| al|guu|wi |ge |aa\u0253|daa|ind|dew|i j|jey| je|ent|tan|o \u0257|ge\u0257| ge|\xF1ee|a l| \u0257u|kko|mak|a s| ga", bos: " pr| i |je |rav|na |ma |pra| na|ima| sv|a s|da |a p|vo |nje|ko |ako|anj|o i| po|avo|ja |e s|a i|ti | im| da| u |sva|no |ju | za|o n|va |i p|ili|vak|li | ko|ne | il|koj| ne|nja| dr|ost| sl|van|im |i s|u s|i i|a n|ava|ije|a u| bi|stv|se |a d|om |jed|bod|obo|lob|slo| se| ra|ih |sti| ob| je|pri|enj|dru|u i|o d|iti|voj|raz|ova|dje| os|e i|lo |e p| nj|uje|i d|bra|tre| tr| su|jeg|i n|u z|a k|og |u p|oje|cij|reb|a o|a b|lju|i u|ran|mij|ni |nos|jen|ba |edn|svo| iz|jel|pro|e d|\u017Eav|bit| ni|i o|sta|a z|avn|vje| ka|bil|ovo|a j|aju|ist|nih|tu |red|gov| od|e o|oji| sm|lje|o k|ilo|ji |aci|e u|e n|pre|o p|eba|u o|su |vim|i\u010Dn| sa|u n| dj|a t|ija|\u010Dno|jem|r\u017Ea|dr\u017E|elj|stu|dna|odn|eni|za |iva|olj|\u0161ti|nom|em |du |vno|smi|jer|e b|de |pos|m i| do|u d|nak|a r|obr| mo|lja|nim|ego| kr|tit|kri|ve |nju|an |iko|nik|nu |i m|nog|eno|sno| st|e k|tup|rug|ka |oda|riv|vol|aln|m s|itu|a\u0161t|za\u0161|ani|sam|akv|ovi|osn|rod|aro| mi|tva|dno|nst|jan|ak |ite|vi\u010D|rad|u m| ta|dst|tiv|nac|rim|kon|ku |odu|\u017Eiv|amo|tvo|tel|pod|g p|nov|ina|nar| vj|o s|i b|oj | ov|ave|vu |ans|oja|zov|azo|ude|bud| bu|e t|i v|din|edi|nic|tan|nap|mje| is|jal|slu|pun|eds|o o|zak|jav|i k|m p|tno|ivo|ere|ni\u010D|m n|jim|kak|ada|vni|ugi| ro|mov|ven|pol|to |te | vr", hrv: " pr| i |ma |rav|ima|pra|je |na | sv|ti | na|a p|vo |vat|ko |a s|nje| po|anj|avo|o i|tko| im|a i|sva|no |i p|e s|ja |o n| za|ju |ili| u |va |li | bi|ne |i s|atk| il|iti|da | ne| ko| dr| sl|van|nja|koj|ije| ra|ova| os|u s|i i|ost|bod|obo|lob|slo|pri|a n|om |jed|ati|ih |im |voj|ava| ob|stv|se | mo|i u|bit|dru| je| se|dje|i o|enj| ka|i n|sti|lo |u i|svo|mij|ni |e i|raz|a o|e n|bra|o p| su|a b|u p|ran|a k|og |i d|bil|ako|e p|a d|edn|aju|mor|eni| nj|iva|jel|\u017Eav| ni|a z|avn|ovi|eno|ra |oje|a j| da|a u|ora|jeg| iz|nih|r\u017Ea|dr\u017E|oji|sno|nit|jen|vje|ilo|cij|oda|nim| dj|pro|tit|u z|e d|red|nom|jem| od|nos|sta|nov|osn| sm|lje|o s|ji |ovo|stu|pos|vim| do|odn|rad|ist| sa|e o|tu |nju|em |gov|o d|rod|i m|jer|aci|oj |pre|m i|nak|dna|a r|lju|uje|e m|obr|za |olj|ve |o o|m s|an |nu |du |aro|vno|smi|aln|e k|o k|i b|e u|tva|u u|tup|rug|dno|u o|su |u d|ka |vol| ta|ija|itu|\u0161ti|a\u0161t|za\u0161|itk|\u017Eiv|ani|sam|elj| st|sob|oso|nar|akv|ada| mi|te |ona|nst|jan|lja|i v|ite|ego|elo|rim|ku |odu|amo|tvo|tel|jim|pod|nog|vi |ina| vj|to |e b|ans|zov|azo|ak | sk|edi|tan|oju|pun|pot|oti|kon|zak|i k|m p|tno|ivo|ere|ni\u010D|kak|vni|ugi| ro|mov|ven|\u0161tv| be|ara|kla|ave|u b|avi|oja|jal|u m|dni|mje|rak|din|\u0107i |ju\u010D|klj|nic|u k|nap|obi|atn", nld: "en |an |de | de| he|ing|cht| en|der|van| va|ng |een|et |ech| ge| ee|n e|rec| re|n v|n d|nde|ver| be|er |ede|den| op|het|n i| te|lij|gen|zij| zi|ht |ijk|eli| in|t o| ve|op |and|ten|ke |ijn|e v|jn |ied| on|eft| ie|sch|n z|n o|aan|ft |eid|te |oor| we|ond|eef|ere|hee|id |in |rde|n w|t r|aar|rij|ord|wor|ens|of | of|hei|n g| vr| vo| aa|r h|hte| wo|n h|al |nd |vri|e o|ren|le |or |n a|jke|lle|eni|n b|ij |e e|g v| st|ige|die|e g|men|nge|t h|e b| za|e s|om |t e|ati|wel|erk|sta|ers| al| om|n t|zal|dig| me|ste|voo|ter|gin|re |ege|ge |g e|bes|nat| na|eke|che|ig |gel|nie|nst|e a|nig|est|e w|erw|r d|end|ona|d v|jhe|ijh|d e|ele| di|ie | do|del|n n|at |it | da|tie|e r|elk|ich|jk |vol|ijd|tel|min|len|str|lin|n s|per|t d|han| zo|hap|cha|wet| to|ven| ni|aat|ion|tio|taa|lke|eze|met|ard|waa|uit|sti|e n|doo|pen|eve|el |toe|ale|ien|ach|st |ns | wa|eme|nin|e d|bij| gr|n m|p v|esc|t w|ont|ite|man|ema| ma|nal|g o|rin|hed|t a|t v|beg|all|ijs|wij|rwi|e h| bi|gro|p d|rmi|erm|her|oon| pe|eit|kin|t z|iet|iem|e i|gem|igi| an|d o|r e|ete|e m|js | hu|oep|g z|edi|arb|zen|tin|ron|daa|teg|g t|raf|tra|eri|soo|nsc|t b| er|lan| la|ern|ar |lit|zon|d z|ze |dez|eho|d m|tig|loo|mee|ger|ali|gev|ije|ezi|gez|nli|l v|tij|eer| ar", srp: " pr| i |rav|na |pra| na|ma | sv|ima|da |ja |a p|vo |je |ko |ti |avo| po|a i|ako|a s| za| u |ju |o i| im|nje|i p|va |sva|anj|vak| da|o n|nja|e s|ost| ko|a n|li |ili|ne |om | ne|i s| sl| il| dr|no |koj|u s|ava| ra|og |slo|im |enj|sti|bod|obo|lob|iti|a o|stv|i u|a d|ni |jed|u p|pri|edn| bi|i i|a k|o d|sta|ih |dru|a u| je| os| ni|nos|pro|aju|i o|ran| de| su|u i|se |van|ova|i d|cij| ob|uje|red|\u017Eav|e i|i n|voj|e p|a j|dna| se| od|ve | ka|eni|r\u017Ea|dr\u017E|a z|avn|aci|ovo|u u|m i|oja| iz|lja| nj|ija|u z|e o|rod|jen|lje|e b|raz|jan|lju|svo|za |gov|i\u010Dn| st|nov|sno|osn|du |ji |pre| tr|su |vu |odn|a b|jeg|nim|nih|tu |tit|\u0161ti|ku |nom|bit|e d|me |iko|\u010Dno|oji|lo |vno|nik|e n|\u0111en|ika|bez|ara|de |u o|vim|nak| sa|u n|riv|ave|an |olj|vol| kr|o p|sme|e k|nog| ov|e u|tva|bra|rug|reb|tre|u d|oda| mo| vr|vlj|avl|ego|jav|del|m s|kri|o k|a\u0161t|za\u0161|nju| sm|ani| li|dno|e\u0111u|aln|la |akv|oj |\u0161en|kom|stu|ugi|avi|a r|ka |rad|oju|tan|odi|vi\u010D|tav|itu|ude|bud| bu|pot|odu|\u017Eiv|ere|m n|tvo|ilo|bil|aro|ovi|por|eno|\u0161tv|nac|ove|m p|tup|pos|rem|dni|ba |nst|a t|ast|iva|e m|vre|nu |be\u0111|ist|pun|en |te |dst|rot|zak|ao |kao|i k|ju\u0107|o s|st |sam|ter|nar| me|i m|kol|e r|u\u0161t|ru\u0161|ver|kak| be|i b|kla|ada|eba|ena|ona| on|tvu|ans| do|rak|slu", ckb: " he| \xFB |\xEAn | bi| ma|na |in |maf| di|an |xwe| xw|ku | ku|kes| de| ji|her|kir|iya|ya |rin|iri|ji |bi |es | ne|ye |y\xEAn|e b|er |af\xEA|tin|ke | an|iy\xEA|eye|rke|erk|we | be|e h|de | we|hey|f\xEA |i b|y\xEA |ina| b\xEA| li|diy|ber|li |re |\xEE \xFB|n\xEA |\xEA d| se| ci|eke|di |w\xEE | na|\xEE y|af |ete|hem| w\xEE|sti| ki|r\xEE |k\xEE |\xEE a|yek|n d|kar| te|ne |y\xEE |i h|e k|t\xEE |t\xEA |a w|e d|\xEE b|s m|ast|n b|be |yan|ser|tew|net| tu| ew|hev|aza|ara|\xFB b|n k|adi|ev |zad| az|ras|est|an\xEA| ya|n h|n \xFB|wed| t\xEA|wek|bat|bo | bo| y\xEA|st |n n|\xEA k|dan|\xEA h|ema|\xEA b|iye|\xEE h|din|b\xFBn|r k|ek\xEE| me|par|\xFBna|ta |wle|ewl|\xEE m| ke|nav|ewe|man|\xEA t|d\xEE |\xFB m|m\xFB |em\xFB|a m|ika|e \xFB|n w|a x|\xEA m|e n| ta|ela|n j|ey\xEA|n x|civ|wey|ana| re|khe|ekh|bik|k\xEA |j\xEE |f h|er\xEE| pa|\xEEna|bin|erb|vak|iva|a s| ni|cih|v\xEA |e j|ari| p\xEA|\xEE d|n\xEAn|ike|e t|a k|\xEA x| ye|n a|ey\xEE|n e|ama|b\xEA |ar |ewa|at\xEA|bes|rbe|av |ibe|ist|m\xEE |tem|awa|are|h\xEE |geh|nge|ing|nek|n\xFBn|an\xFB|qan| qa|v\xEE |rti|uke|tuk| \u015Fe|eza| da|u d|\xFB a|f \xFB|edi| ra|tu |tiy|t\xEAn| mi|xeb| ge|h\xEEn| h\xEE|et\xEA|\xEE j|st\xEE|mal|bib|ra |i d|e m|mam|i a|nik|i m|\xEE k| wi|\xFBn | ko|a \u015F|\xEA j|riy|lat|wel|e e|ine|ane|\xFB h|\xEEn |a d|siy|end|aye| za|ija|a n|\xEE n|ek |tek|yet|mbe|emb|\xFB d|rov|iro|mir|eba| xe|m\xEAn| \xEAn| hu|n\xEEn|an\xEE|t \xFB|ten|n m|dem|\xEA \xFB|en\xEA|te |art|i r| j\xEE|u j|ek\xEA|dew", yor: " n\xED|ti |\u1ECD\u0301 |n\xED | l\xE1| \u1EB9\u0300|\xE0n |\u1EB9\u0301 |kan|t\xED | t\xED|an |\u1EB9\u0300 |t\u1ECD\u0301|\u1ECD\u0300 | \u1EB9n|\u1ECDn |w\u1ECDn|\xED \u1EB9|b\xED |\xE1ti|l\xE1t|\u0300t\u1ECD|\u1EB9\u0300t| gb| \xE0t| \xE0w|n l|\xE0ti| a |l\u1EB9\u0300|\u1EB9n\xEC| \xF3 |k\u1ECD\u0300| l\xF3|\xEC k|s\xED |\u1ECD\u0300k| k\u1ECD|ra |ni |\xE0b\xED|t\xE0b| t\xE0|n\xEC | s\xED|\u0300ka|\u1ECD\u0300\u1ECD|n \u1EB9|\xE0w\u1ECD|n t|\xF3 n|\u0300\u1ECD\u0300|\xEDl\u1EB9|or\xED|l\xF3 | w\u1ECD|t\xF3 |d\xE8 |\xECy\xE0|\xFAn | t\xF3| or|\xED \xEC|\xE8d\xE8|k\xF2 |\u2010\xE8d|\u0300\u2010\xE8|\u1EB9\u0300\u2010|r\xEDl|\xED \xF3|r\u1EB9\u0300|\xED \xE0| s\xEC|y\xE0n|gbo|\u1E63e | k\xF2|\xED a| r\u1EB9| j\u1EB9|s\xEC | b\xE1|r\xE0n| \u1E63e|w\u1ECD\u0301|n\xECy|f\xFAn| f\xFA|n \xE0|ba |n n|gb\xE0|gb\u1ECD|j\u1EB9\u0301|un |\xEC\xED | k\xED|gba|\xE8n\xEC| \xE8n|b\xE1 |\u0301 l|a k| ka|d\u1ECD\u0300|k\xED | \xF2m|in | fi|b\xF2 |fi |b\u1EB9\u0301|\u1ECDd\u1ECD|b\u1ECDd|\u0301 s|hun|n\xFA |n\xEDn|w\xE0 |ira|nir|\xF2m\xEC|\xECgb| \xECg|\u0301 t|\u1EB9ni|\xEDn\xFA|i l|\xECni|m\xECn|b\xE0 |\xE1\xE0 |i \xEC|ohu| oh|\xED i|ara| ti|bo |\xF2 l| p\xE9|r\xFA |\xEDr\xE0| \u1ECD\u0300|\xED \xF2|ogb|k\u1ECD\u0301|p\u1ECD\u0300|\xF3 b|\xE0 t|i n|l\u1ECD\u0301|\u1EB9\u0301n| \xECb|y\xEC\xED|gb\xE9|g\u1EB9\u0301|bog|\xF3\xF2 |y\xF3\xF2| y\xF3|n k|p\xE9 |d\xE1 |\u0301w\u1ECD|\u1ECD\u0301w|\xE0 l|\xED k| w\xE0|n o|j\u1ECD | ir|\u1ECD\u0300r|\xFA \xEC|\u0301 \xE0|\xF3 s|i t|\u1E63\u1EB9\u0301|\u0300k\u1ECD|\xED t|y\xE9 |l\xE8 | l\xE8|fin|\xE0b\xF2| l\u1ECD|\xE0 n|\xF9j\u1ECD|w\xF9j|ir\xFA|\xF3 j| ar|\xED w|a w| \xECm|\xFA \xE0|\u0300 t|\xF2fi| \xF2f| \xE0\xE0|f\u1EB9\u0301|\xE0w\xF9|\u0301ni|w\xF9 |\xEC\xEDr|m\xEC\xED| m\xEC|l\xE1\xEC| y\xEC|\xED g|\u1ECD\u0301n|n s|i \u1EB9|\u1EB9\u0300k|\xE0gb|\xEDgb|n\xEDg|a n| k\xFA|l\xE1\xE0|\xED o|n\xE1\xE0| n\xE1|k\u1EB9\u0301|\xEDpa|n\xEDp|\xECn | \xECk|b\xE9 |i g|\u1ECDm\u1ECD| \u1ECDm|i \xE0|i\u1E63\u1EB9|\u0300 \xE0|\xECm\u1ECD|n a|n f|j\u1EB9 |y\xED |\u0301 \u1ECD|\xF3 d|\u0301 \xF2| d\xE1| m\xFA|\xE0\xE0b|\xE1b\u1EB9|l\xE1b|\xECb\xE1|\xF2 g|j\xFA |i o|l\xFA | \xE8t|\u0300 \u1EB9|t\u1ECD\u0300|de |\u0300 n|i \xF2| \xECy|k\xE0n|\u0301n | b\xED| i\u1E63|m\u1ECD\u0300|e \u1EB9|\u0300 l| f\xE0|\xE8y\xED| \xE8y| \xECd|m\u1ECD\u0301|d\xE9 |\u0300 k|\u0301 p|\xF2 t|m\xFA | f\u1EB9| \xECj|r\xED |\xECk\u1EB9|n\xECk|\xECn\xED|n \xEC|n \xE8|s\xECn|\xE8 \u1EB9| i |r\u1ECD\u0300| \xE0n|\u0301 b|\xF9n |\u0301gb|\u1ECD\u0301g|d\u1ECD\u0301| d\u1ECD|\xED n|rin|\u0300 j", uzn: "ish|an |lar|ga |ir | bi|ar | va|da |iga| hu|va |bir|sh |uqu|quq|huq| ha|shi| bo|r b|gan|a e|ida| ta|ini|lis|adi|ng |dir|lik|iy |ili|o\u02BBl|har|ari| o\u02BB|uqi|ins|lan|hi |ing|dan|nin|kin| yo|son|nso| in| mu|on |qig| ma|ega|r i|bo\u02BB| eg|o\u02BBz|ni |gad|ash|i b|ki |oki|ila|yok|a b|n b|osh|ala|at |in |r h|erk| er|lga| qa|rki|h h| sh|i h|ara|n m| ba|nis|ik |igi|lig|bos|ri |qil|a t|bil|las|eti| et|n o|ani|nli|kla|i v|a q|a h|a o|yat| qo|im |a s|i m|iya|atl|oli|osi|siy|qla|cha|til| ol|ati|a y|mas|qar|inl|lat| qi|ta\u02BC|ham|gi |ib |\u02BBli|mla|h v|\u02BBz |hun|n e|mum| da| bu| to|un |mki|umk|sha|tla|ris|iro|ha |rch|bar|iri|oya|ali| be|i o|asi|aro| ke|i t|rla| te|arc|hda|shu|tis|n h|tga| sa| xa|rak|lin|ada|ola|imo|hqa|shq|li | tu|aml|lla|sid| as|nid|a i| ki|ch |n t|nda|k b|era|siz|or |hla|a m|r v|eng|ten|mat|mda|amd|lim|miy|y t|ayo|i a|ino|ilg|tni| is|ana|as |ema| em|ech|a a|tar|kat|aka|ak |rat| de|aza|ill| si| so|g\u02BBi|uql|n q|oda|\u02BCli|a\u02BCl|nik| ni|tda|uch|gin|a u|him|uni|sit|ay |qon| ja|atn|kim|h k|hec| he|\u02BBzi|lak|ker|ikl| ch|liy|lli|chi|ur |zar|shl|rig|irl|dam|koh|iko|a d|am |n v|rti|tib|yot|tal|chu| uc|sla|rin|sos|aso| un|na | ka|muh|dig|asl|lma|ra |bu |ush|xal|\u02BBlg|i k|ekl|r d|qat|aga|i q|oiy|mil| mi|qa |i s|jin", zlm: "an |ang| ke|ng | se| da|ada|ara|dan| pe|ran| be|ak |ber|hak|ata|ala|a s|ah |nya| me|da |per|n s|ya | di|kan|lah|n k|aan|gan|dal|pad|kep|a p|n d|erh|eba|nga|yan|rha| ya|nda|ora|tia|asa| ha|ama|epa| or|iap|ap |a b| at| ma|eti|ra |tau|n a|set|au | ba|pa | ad|n p|tan|p o|eng|a d|men|apa|h b|h d|dak|man|a a|ter| te|k k| sa|n b|ana|g a|end|leh|ole|a k|am |n y|aka|eh |lam|bas|beb|n m| un|pen|sa |keb|sam|n t| ti|ela|san|car|uan|ma |di |han|ega|ban|eri|at |sia|a m|ika|kes|ian|gar|seb|ta |mas|und|neg|nan|ngs|i d|erl|na |epe|emb|bar| la|atu|kla|pem|mem|emu|eca|sec|ngg|nny|any|bol|al |aha|gsa|ebe|ind|akl|n h|erk|ung|ena| bo|a t| ap|ers| de|in |tu |pun|as |agi|ann|g b|bag| ne|ain|hen| he|era|rat|sem| su|adi|lan|g s|dia|mat|ses|iad| ta|iha|g t|tin|k m|k h|i k|gi |i s|ing|uka|enu|den|lai|k d|ert|ti |rka|aja|rga|lua|ker|mel|dun|ndu|lin|rli|nak|ntu|esi|aya|un |uat|jua| in|rma|erm|ai |emp|kem|ri |dil|ua |uk |h m|l d|g m|mba|kat|ese|tik|ni |ini| an|mpu|ka |dar|mar|rja|erj|arg|u k|sua| ol|esa|dap|ar |g u|si |ent|g d| pu|awa|iri|dir|sal|gam|mbe|n i|har|a h|raa|ema|tar|i a|saa|ira|ari|pel|jar|laj|uju|tuj|rak|ura|uar|elu|t d|unt|il |wen|asi|gga|ipa|ksa|tuk|ula|sek|sas|ibu|rta|sep|rsa|nta|ati|ila|mua|yar", ibo: "a n|e n|ke | na| \u1ECD |na | b\u1EE5|\u1ECD b|nwe|nye|ere|re | n |ya |la | nk|ye | nw| ma|e \u1ECD| ya| ik|a o|a \u1ECD|ma |\u1EE5la|b\u1EE5l|ike| on|nke|e i|a m|ony|\u1EE5 n|kik|iki|b\u1EE5 | a |ka |wer|ta |i n|do |di | nd| ga|a a|e a|a i|he |kwa| ok| ob|e o|hi |any|ga\u2010|ha |d\u1EE5 | mm|ndi|\u1ECD n|wa |r\u1EE5 |e m|che|a e|oke|wu |aka|ite|o n|a g|odo|bod|obo| d\u1ECB| ez|ara|we | ih|a\u2010e|h\u1ECB |ri |n o|zi |mma|chi|d\u1ECB |ghi|\u1EE5ta|iri|ihe| an| oh|a y|gba|\u1EE5 \u1ECD| \u1ECDz| ak| iw|nya|te |iwu| nt|ro |oro|e \u1ECB|z\u1ECD |ezi|me |e e|u n|her|ohe| si|a\u2010a|i m|ala|\u1EE5 i| ka|akw| in|gh\u1ECB|kpe|n e|p\u1EE5t| e |i i|i o|ide|inw|\u1EE5 o|h\u1EE5 |ah\u1EE5|weg|ra |o i|kpa|ad\u1EE5|mad|si |sit|a s| me|sor|i \u1ECD|gid|edo|u o|e y|n a| en|tar|ozu|toz|bi |be |\u1EE5 m|\u1EE5r\u1EE5|\u1ECDr\u1EE5| \u1ECDr|mak|uso|ama|de |\u1ECB o| \u1ECDn|\u1ECDz\u1ECD|ch\u1ECB|egh|enw|ap\u1EE5|ru | to|i a|a \u1EE5|osi|r\u1ECB |wet|hed|nch| nc| eb| al|n\u1ECDd|\u1ECDn\u1ECD|uru|sir| kw|yer|ji |eny| mk|\u1ECBr\u1ECB|eta| us|tu |\u1ECD d|u \u1ECD| o |ba | mb|\u1ECDd\u1EE5|\u1ECBch| ch|a d|pa | ag|kwe| ha|a u|e s|mkp|n u|nta|ebe|n \u1ECD|o m|kwu|nkw|nwa|obi| \u1ECBk|esi|i e|nha| nh|le |ile|nil| ni|eme| og|e k|n i|ch\u1ECD|o y|as\u1ECB|otu| ot|ram|u m|\u1ECBgh|d\u1ECBg|zu |n\u1ECD |mba| gb|e g|\u1ECB m|\u1ECDch|ich|pe |agb|i \u1ECB|uch|z\u1EE5z|uny|wun|\u1ECDr\u1ECD| nn|na\u2010| di|ge |oge|iji| ij|\u1ECDha| \u1ECDh|ikp|egi|meg|o o|\u1EE5h\u1EE5|h\u1EE5h|mah|n \u1EE5|\u1ECD g|\u1ECDta|ek\u1ECD|\u1ECB n|kw\u1EE5|agh|\u1EE5m\u1EE5|ban|kpu|okp| ah|\u1ECBkp|a k|ime| im|z\u1EE5 |\u1EE5z\u1EE5|\u1ECDz\u1EE5| \u1EE5z|lit|ali|nat", ceb: "sa | sa|ng |ang| ka| pa|an |ga |nga| ma|pag| ng|on |a p|od |kat|ay | an|g m|a k|ug |ana| ug|ung|ata|ngo|atu|n s|ala|san|d s|tun|ag |a m|god|g s|a a|a s|g k|g p|yon|n u|ong|tag|usa|pan|ing|una|mat|g u|mga| mg|y k| us|ali|syo| o |aga|tan|iya|kin|dun|nay|man|nan|a i| na|ina|nsa|isa|bis|a b|adu| ad|n n| bi|asy|asa|lay|awa|lan|non|a n|nas|o s|al |agp|lin|nal|wal| wa|ili|was|gaw|han| iy| ki|nah|ban|nag|yan|ahi|n k|gan| gi|him| di|a u| ba| un|ini|ama|ya |kas|asu|n a|g a|gka|agk|kan|ags|agt|l n|a g|kag| ta|imo|uns|sam| su|g n|n o|gal|kal|og |taw|aho|uka|gpa|ipo|ika|o p|a t| og| si|gsa|g t|aba|ano|gla|y s|o a|aki|hat|kau|sud|gpi|a w|g i|aha|ot |ran|i s|n m|bal|lip|gon|ud | ga|li |uba|ig |ara|g d|na |kab|aka|gba|ngl|ayo| la| hu|a h|ati|d a|d n| pu| in|uga|ok |ihi|d u|ma |may|awo|agb|ami|say|apa|pod|uha|t n|agh|buh|ins|ad | ub| bu|at |iin|a d|ip |uta|sal|hon|wo |ho |tra|lak|iko|as |aod|bah|mo |aug|ona|dil|gik|sos|lih|pin| pi|k s|nin|oon|abu|la |rab|hun| ti|mah|tar|t s|ngb|uma|hin|bat|lao|mak|it | at|s s|sno|asn|ni |aan|ahu| hi|agi|n p|inu|ulo|y p| ni|iha|mag|o n|duk|edu| ed|a e|til|ura|tin|kip|agl|gay|g h|g b|ato|ghi|nab|kon|in |ter|o u|o o|yal|sya|osy| so|tik| re| tr|hig|a o|ha |but|pak|aya", tgl: "ng |ang| pa|an |sa | ka| sa|at | ma| ng|apa|ala|ata|g p|pan|pag|ay | an| na|ara| at|tan|a p|pat|n a| ba|ga |awa|rap|kar|g k|aya|lan|g m|n n|g b|nga|mga| mg|a k|na |ama|n s|a a|gan|yan|gka| ta|may|tao|agk|asa|man|aka|ao |y m|ana|g a|nan|aha|kan|y k|baw|kal|a m|g n|ing|wat| y |t t|pam|a n|o y|ban| la|ali|san|wal|mag| o |g i|aga|lay|any|g s|in |nya|yon|kas|a s|isa|una|ong|aan|kat|t p| wa|ina|tay|ya |on |o m|ila|ag |nta|t n|aba|ili| ay|o a| ga|no |a i|gal|ant|han|t s|kap|kak|lah|ari|agt|agp|ran|g l|lin|as |lal|gaw|ans|to |ito| it|hay|wa |t m| is|pap|mam|nsa|ahi|nag|bat|lip|gta| di|gay|gpa|pin| si|ngk|ung|aki|y n|iti|tat|ano|yaa|y s|mal|hat|kai|sal|hin|uma|mak|di |agi|pun|ihi|a l|i a|ira|gga|nah|s n|ap | ha|usa|nin|o p|gin|ipu|ika|ngi|i n|lag|la |y p|ini|g t|uka|nap| tu|a g|tas|aru|ipa| ip|li |al |n o|a o|t k|alo| pi|sin|syo|asy|ita|aho|nar|par|o s|pak|t a|uha|sas|gsa|ags|kin|a h|iba|lit|ula|o n|nak|a t| bu|duk|kab|sam|g e|ain|ami|mas|lab|ani|kil|it | al|agb|buh|a b|g g|ba | ib|iyo|ri |yag|ad | da|edu| ed|anl|ma |ais|iga|mba|tun|ipi| ki|od |ayu| li|lih|sar|gi |g w|pah|wir|oob|loo|agg|nli|bay|map|git|mil|ok |hon|ngg|sah|iya|pas|g h|agl|tar|ngu|amb|uku|ayo|s a|p n|n m|rus|i m|l a|abu| aa", hun: "en | sz| va| a |\xE9s |min|ek | \xE9s| mi|jog| jo|an |ind|nek|sze|s\xE1g|nde|a v|den|oga|sza|val|ga |m\xE9l|ala|em\xE9|gy |n a|van|zem|ele| me|egy|\xE9ly| eg|zab|t\xE1s| az|n s|bad|aba|ni |az |gye| el|ak | se|meg|sen|\xE9ny|s\xE9g|k j|yne|lyn| ne|ben|lam|tt |t a|et |agy|oz |hoz|vag|zet| te|n m|ez |nak|int|re |et\xE9|tet|mel|tel|s a|em |ely|let|hez| al|s s| ki|ete|at\xE1|z a| le|yen|es |ra |t\xE9s|ell|nt |sem|t s|len|nem|a s|ese|nki|enk|a m|\xE1s\xE1|i m|ban|kin|k m|szt| \xE1l|ame|k\xF6z|k a|ds\xE1|ads|l\xF3 | k\xF6|\xE1s |ly |on |\xE9be|tat|a t|n v|\xE1ll|m\xE9n| v\xE9|nye|k\xFCl|l\u0151 |a n| cs|i \xE9|ok |\xE9sz|\xE9rt|lla|lap|\xE1go|gok|nyi|tek| ke|nd |\xE9te|ami|z\xE9s|yes|szo|t m|a a|het|fel|lat|lem|lle|el |z e|s e|k \xE9|mbe|emb|el\xE9|ot |lis|vet|kor|\xE1g |olg| am|sz\xE1|ehe|leh|ogo|ott|\xFCl |nte|\xE9le|i v|ogy|hog| ho|kel|n k|tes|nl\u0151|enl|ss\xE1|\xE1za|h\xE1z|\xE9g |vel|\xE1ba|lek|\xE9ge| ha|a h|r\xE9s| fe|\xE1ny|del|el\u0151|\xE1t |al\xE1|art|tar|zto|z\xE1s|t\u0151 |yil|koz|tko|al\xF3|s k|i e|\xE1rs|t\xE1r|mze|emz| ny|m\xE1s|ett|ny |fej|ass|zas| h\xE1|d a|t \xE9|is |\xE9s\xE9|ez\xE9|t\xE9b| mu|\xE1so|s\xEDt|lye|elm|\xE9de|v\xE9d|ine|t k|os |it |izt|biz| bi|y a|m l|tot|a j|atk|n\xE9l|t n|ti | m\xE1|ai |l\xE1s|eve|nev|zte| b\xE1|sel|ll |al |ere|n e|unk|mun|t e| ak|ife|kif|ako|s \xE9| \xE9r|\xE1na| es|s t|got|s\xFCl| be|v\xE1l|csa|se |\xE9se|ad |ges|tos|ja | gy|asz|ten|lm\xE9| t\xE1|eze|\xE1rm|b\xE1r|ess|l s|\xFCle", azj: " v\u0259|v\u0259 |\u0259r |ir | h\u0259| bi| h\xFC| ol|\xFCqu|h\xFCq|quq|na |in |lar|h\u0259r|d\u0259 | \u015F\u0259|bir|l\u0259r|lik|mal|r b|lma|r h| t\u0259|\u0259xs|\u015F\u0259x|\u0259n |dir|uqu|una|an |ali|a m| ma|ikd|ini|r \u015F|d\u0259n|ar |il\u0259|qun|aq |as\u0131| ya|m\u0259k|y\u0259t| m\u0259| m\xFC|kdi|\u0259si|\u0259k |ilm|nin|nd\u0259|olm|\u0259ti|\u0259 y|sin|xs |nda|lm\u0259|yy\u0259|i v| qa| az|olu|iyy|ya |ind|zad|qla|\xFCn |ni |l\u0259 |tin|n m|aza|ar\u0131|\u0259t |n t|maq|lun|l\u0131q|\u0259 b|un |nun|q v|n h|dan|\u0131n | et|tm\u0259|\u0259r\u0259| \xF6z|da |\u0259 v| on|\u0259 a|\u0131na|\u0131n\u0131|bil|a b|s\u0131 |il |\u0259mi|ara|si | di|\u0259 m|\u0259ri|rl\u0259| va|\u0259 h|etm|\u0131\u011F\u0131|ama|dl\u0131|adl|rin|b\u0259r|r\u0131n|n i|m\xFCd|n\u0131n| he|mas|ik |n a|dil|al\u0131|irl|\u0259l\u0259|\xFCda|s\u0131n|\u0131nd|xsi|li |\u0259 d|n\u0259 | b\u0259|\u0259ya| in|\u0259 i|l\u0259t| s\u0259|n\u0131 | i\u015F|an\u0131|e\xE7 |he\xE7|q h|eyn|\u0259 e|d\u0131r| da|asi|r\u0131 |i\u015F |ifa|l\u0131\u011F|i s|fi\u0259|afi|daf| ed|m\u0259z|u v|kil| ha|ola|n v|\u0259ni|\u0131r |uq |unm| bu| as|sia|osi|sos|ili|\u0131d\u0131|l\u0131d|nma|\u0131q |in\u0259|\u0259ra|sil|xil|axi|dax|ad\u0259|man|a h|\u0259 o|onu|a q|\u0259z | ki|se\xE7| se|\u0131 h|min|lan|\u0259d\u0259|bu |raq|l\u0131 |\u0131l\u0131|al |\u0259 q|r v|nla|hsi|\u0259hs|t\u0259h|\xF6z |ist| is|m\u0259s| \u0259s|ina|\u0259 t|\u0259tl|a v|i\u0259 |n b|t\u0259r| ta| c\u0259|edi|ala|kim|qu |i t|ulm|m\u0259h|n o|aya|\u0131 o|ial| so|ill|siy| d\u0259|var|ins|mi |\u011F\u0131 |nik|r i|aql|k h|t\u0259m|tam|\xE7\xFCn|\xFC\xE7\xFC| \xFC\xE7|\u011F\u0131n|sas|\u0259sa|z h|\u0259m\u0259|zam| za|sti|r\u0259f|n e|r a|ild|h\u0259m|\u0131ql|yan|may|n \u0259|m\u0259n|mil| mi|\u0259qi|din|n d|t\xFCn| d\xF6|miy|kah|ika| ni|fad|tif|l o|s\u0259r|yni| ey|ana|l\u0259n|am |ril|ay\u0259|a\u015F\u0131", ces: " pr|n\xED | a | ne|pr\xE1|r\xE1v|na |ost| po|ho | sv|o n| na|vo |neb|\xE1vo|bo |ebo|nos|m\xE1 | m\xE1|a\u017Ed|ka\u017E| ka| ro|ch |d\xFD |\u017Ed\xFD|ti |ou |a s| p\u0159| za|\xE1n\xED|\xE1 p| je| v |svo|\xE9ho| st|\xFD m|sti|n\u011B | by|obo|vob|ter|pro|en\xED|bod| z\xE1| sp|\xED a|rod|kte|by |mu |u p|o p| n\xE1|v\xE1n|jak| ja|a p|o v|\xED n|ov\xE1|oli|v\xED |spo|roz| kt|mi |\xED p|ny | ma|\xEDm |i a|do | so|odn|\xE1ro|n\xE1r|li |n\xE9 |tv\xED|at |\xFDch|a z| vy|byl|vol|en |\xFDt |b\xFDt| b\xFD|t s|tn\xED|stn|o s|\xED b|to | do|sv\xE9|v\xE9 |ran|ejn|z\xE1k|eho|jeh|nes|p\u0159\xED|m\xED |\u010Din|kol|aj\xED|sou| v\u0161|\xEDch|it |n\xFDm|\xFDm |nu |hra|nou|u s|\xE9mu| k |du |\u017Een|pod| ze|kla|a v|stv|pol|dn\xED|er\xE9|m p|st\xE1|je |ci |e\u010Dn| ni|n\xE9h|a n|ak\xE9|\xE1va|maj|em |rov|\xED m|k\xE9 |ole|n\xFDc|ova| ve|ako| ta|i k|chr|och| oc|kon|i p|\xED v|sm\xED|esm|kdo|st |i n|o z|ave|odu|bez| to|sta|ech|j\xED |o d|sob|se | se|\xED s|\xFDmi|i s| i |i v| vz|n\xEDm|pra|ln\u011B|p\u0159i|t\xE1t|ste|a j|aby| ab| s |oln|a o|m n|\u010Den|slu|\u0159\xEDs| os|zem|mez| \u010Di|ln\xED|\xE1ln|oci|jin| ji|y b|\xED z|y s|va |v\u0161e|t v|ovn|chn|d\u011Bl|n\xEDc|le\u010D| pl|vat| vo|vin|rav|vou|lad|inn|\xE9 v|anu|tej|u k|stu|est| tr|ky |ikd|nik|ivo|nit|zen|u o|n\xE9m|nez|i\xE1l|\xEDho|len|ens|o\u017Ee|oko|k\xE9h|rac|ven|\xED k|e s|l\xE1n|\u011Bl\xE1|zd\u011B|vzd|t k|din|odi|t\xED | od|r\xE9 |tup|pov|pln|\u0161t\u011B|\xE1kl|nno|tak|er\xE1|\u0159ed|o a|a t|res|j\xEDc| mu|u z|rok| ob|\u010Dno|u a|y k|i j|\xE9 n|lu\u0161|\xEDsl|oso|ci\xE1|soc|n\xEDh|o j|ck\xE9", run: "ra |we |wa |e a| mu|a k|se | n | um| ku|ira|ash|tu |ntu|a i|mu |umu|mun|unt|ere|zwa|ege|ye |ora|teg|a n|a a|ing|ko | bi|sho|iri| ar| we|shi|aba|e n|ese|go |a m|o a|gu |uba|ngo|nga|hir| ca|ugu|obo|hob|za |ndi|ish|gih| at|ara|wes| kw|ger|ate|a b| ba| gu|e k|can|ama|ung|bor|u w|mwe|di | ab|nke|ke |kwi|ka |ank|yo |ezw|n u|na |iwe|e m|rez|ri |a g|gir| am|igi|e i|ro |a u|ngi|e b|ban| ak| in|ari|n i|hug|ihu|e u|riz|ang|nta| vy|ata| ub|and|aka|rwa| nt|kur|ta |iki|kan|iza|u b|ran|sha|o n|i n| ig|ivy| iv|ahi|bah|u n|ana| bu| as|aku|ga |uko|o u|ho | ka|ose|ubu|ako|guk|ite|o y|ba |i b|any|kir|o k|aho|iye|kub|amw|nye|aha| ng|o m|nya| it|re | im|o b|izw|kun|hin|e c|vyo|o i|vyi|ngu|uri|imi|imw|gin|ene|u m|zi |ha |kug|bur|uru|jwe| zi|u g|era|aga|ron|abi| y |e y| uk|gek|ani| gi|eye|ind|wo |u a|i a| ib|i i|ras|bat|gan|amb|n a|onk|rik|ne |ihe|agi|kor| ic|ze |tun|ibi|wub|nge|o z|tse|nka|he |rek|twa|gen|eko|mat|ber| ah|ni |ush|umw| bw|mak|bik|ury|yiw|bwo| nk|ma |no |kiz|uro|gis|aro|ika| ya|gus|y i|wir|ugi|uki| ki|a c|ryo|bir| ma| yi|iro|bwa|mur|eng|ukw|hat|tan|utu|wit|w i| mw|y a|mbe| ha|uza|ham|rah| is|irw|o v|umv|ura|eny|him|eka|bak|bun| ny|bo |yig|kuv|wab|key|eke|yer|vye|i y|ita|ya |a r| ko|kwa|o c", plt: "ny |na |ana| ny|a n|sy |y f|a a|aha|ra | ma|nan|n n|any|y n|a m|y m|y a| fi|an |tra|han|ara| fa| am|ka | ts| na|in |ami| mi|a t|olo|min|man|iza|lon| iz|fan| ol| ha| sy|aka|a i|reh|ay |ian|tsy|ina| ar|on |o a|etr|het|ona|y o|o h|zan|y t|a h|ala| hi|a f|y h|ehe|ira|a s|zo |y i|ndr|jo | jo|n j| an| az|ran|dia| dr|y s|fah|ena|ire|tan|dre| zo|mba| ka|m p|afa| di|n d|and|azo|zy |amp|ia |ren|iny|rah|y z|ry |ika|oan|ao |amb|lal|ho | ho|isy|ony|tsa|asa|a d|ha |fia|mis|ava|ray| pi|am |dra| to|rin| ta|ant|eo |zay|rai|tsi|itr|sa | fo| ra|van|ova|nen|azy| vo|mpi|ari|o f|tok|a k| ir|kan|oto|mah|ly |sia| la|n i|voa|haf|a r|ito|y k|oka|y r|y l|ano|ita|ene|its|ial|zon|aza|ain| re| as|fot|aro|fit|nat|nin|aly|har| ko|ham| no|fa |ary|atr|ila|ata|iha|nam|kon|oko| sa|elo|nja|anj|ive|isa|oa |dy |y d|o m|nto|ank|o n|otr|pan|fir|air|sir|ty |a v|sam|o s|tov|mit|rak|reo|o t|pia|tao| ao|no |y v|iar|a e|a z|hit|hoa| it|to |za |ton|eha|end|vy |idi|tin|ati|adi|lna|aln|rov|ban| za|nga|hah|oni|osi|sos|vah|ino|ity| at|hia|pir|ifa|omb|ame|era|vel|kar|va |tso|jak|fid|ifi|ais|o i|idy|la |ama|ba | pa|tot|ani|rar|mpa|haz|kam| eo| il|iva|aho|nao|n k|ato|lah|ovy| te|dro|lan|ela| mo| si|fin|miv|san|koa| he|aso| mb|sak|kav", qug: "ta | ka|ka |na |una|cha|ash|ari|a k|ana|pak|ish|ach|hka|shk|mi |kta|hay|man| ch|apa|ak |rin|ata|kun|har|akt|ita| ha|ami|lla| pa|ama|pas|shp| ma|tak|ay\xF1|y\xF1i|in |sh |ina|uku|nka|chi|aka|a c|yta|kuy|all|tap|a h|kan| tu|\xF1it|tuk| ru|run|chu|an |pay|ayt|ris| ki|aku|hpa|ank|a p|kam| sh|nam|a s|uy |i k|ayp|nak|pi |nta|a m| li|ay |lia|hin|kaw|nap|ant|tam|a t|iri|nat| wa|y r|kay|aws| ya|n t|ypa|wsa|pa |lak|shi|a a|lli|iku|hu |n k|iak|yay|kis| al|shu|a w|ipa| sa| il|api|kas|yku|yac|kat|a r|huk|i c|wan|hik|a i|ill|ush| ti|ayk|hpi| ku|kac|say|hun|uya|ila|ika|yuy|pir|ich|mac|ima|a y|yll|ayl|i p|kin|a l| wi|kus| yu|lan|tan|llu|kpi| ta| pi|aya|la |yan|awa| ni|kak|lat|rik|war|ull|kll|li |ink|nch|un |akp|n s|may| ay|uch|i s|nac|sha|iki|kik|h m|ukt|pip|tin|n p|iya|nal|aki| ri|ura|tik|mak|ypi|i m|i w|n m|his|k i|riy|iwa|y h| hu|han|akl|k t|mas|pik|kap| \xF1a|u t|nmi|nis|k a|i y|k l|kar| im|i i|wil|yma|aym|ksi|iks|uma| su|h k|has| ak|unk|huc|kir|anc|k m|pal|k k|ik |i\xF1i| i\xF1|ma |n y|mun| mu|mam|tac|a n|i t|k r|sam|ian|asi|k h|was|ywa|iyt|llp|san|sum|ray|si |pan|nki|tar| ii|u k|\xF1ik|uk |i\xF1a|kuk|wpa|awp|akk|a u|wat|uri| mi|yar|uyk|ayw|h c|ha |tay|rmi|arm|uta|las|yka|llk|kul|wi\xF1|ati|ska| ll|kit|n h|uti|kic|mat", mad: "an |eng|ng |ban| sa| ka|dha|ren| se| ba|ak | ha|adh|hak| dh|ang|se | pa|aba|a s|na |aga|ha | or|n s|ore|ara| ag|gad|are|ana|n o|ngg|ale|gan|a k|ala|dhu|tab|sar|ota|asa|eba| ot| ke|sab|ba |wi |uwi|abb|i h|huw|aan|n k|a b|bba| ta| ma|pan|hal|bas|ako|dhi|ra |kab|em |beb|ka |lak|gi |lem|g a|eka|n b|ama|nga|san|at |ong|ran|nge|a o|ggu|sa |a d|ane|n p|ken|par|aja|man|gar|ata|nek|apa| na|agi|abe| ga|e e|sal|a a|tan|g s|al |kal|gen|ta |i s|aka|e a|a p|a e| la| pe|nan| an|era|e d| e | be|n a| al|ena|uy |guy|n n|ate| bi|mas|e k|kat|uan|oan|kon|k k|a m|i d|g e|n t|g k|ada|koa|lan|ela| da|bad|ma |ne |as |lab|ega| mo|ar |car|one|i p|bi |kaa|bat|ri |on |pon| so|e b|le |ah |abi|ase|adi|epa| ep|k h|and|pam|te |ok |ste|aon|om |oko|aha|ari|ona|asi|ter| di|di |pad|e s|sad|yar|neg|ton|set|rga|ost|mos|gap|nda|a l|har|i k|ina| a | ng|kom|isa|si |a t|a h| kl|jan|daj|iga|hig|idh|hid|ndh|n m|ngs|tto|ett|arg|la |k b|ler|k d|nna| to|nao|n d|mat| ca|tad|bis|aya|epo|aen| po|bin|nya|kas|k s|n h|sya|nta|gsa|en |ant|n g|kar|i e|das|e t|e p|iba| pr|g p| ho| el|i a|hi |os |sao|uwa|tes| ja|nag|nas|lae|sia|t s|k o|nto|int|yat|arn|m p|duw|adu|eta| ko|i b|ni |g n|kla|rak|ame|mpo|jua|sok|aso|ggi|eja|pel|jam|ele| et|dil", nya: "ali|ndi|a m|a k| nd|wa |na | al|yen| ku|nth|ra |di |se |nse| mu|a n|thu|hu |nga| wa|la |mun|u a|unt|iye| ka|ce |ace| lo|a l|ang|e a| la| pa|liy|a u|ens| ma|idw|ons|dwa|e m|i n|ala|kha|lo |li |ira|era|ene|ga |ana|za |o m| mo|yo |o w| ci|we |dzi|ko |o l|and|dan|hal|zik|chi|oyo|pa |ner|ulu|ena|moy| um|a p| da|ape|kap|ka |iko| an|pen|a c|to |ito|hit|nch| nc|iri|lir|wac|umo|e k|lu |a a|aye| dz|kuk|a z|dwe|tha|mal| za|ing|ufu|mu |ro |ful| uf|o c|i d|lin|e l|zo |edw| zo|o a|mwa|u w|iro|o n|lan|amu|ere| mw|nzi|dza|alo|ri | li|fun|lid|gan|so | ca|kul|ofu|nso|o z|ulo|unz|o k|mul|lam|i c|san|a b|kwa| na|a d| a |una|u k|i l|nkh|ant|aku|ca |cit|oli|ipo|dip|ama|lac|wir|han|yan|osa|uli|tsa|i m|pon|kup|u d|ti |gwi|ukh|ung|hun|lon|ank|nda|iki|ina| ko|ao |diz|phu|ati|oma|i a|tsi|pat|iya|siy|kut| ya|zid|eze|ma |i k|mer|ome|mol|u n|u o|aph|ogw|izo|mba|sid|ku |sam|awi|adz| ad|izi|ula|say|e n|khu| kh|rez|vom|bvo|okh|lok|win|akh|o o| am| on|zir|map| zi|eza|ja |go |ngo|ika|its|ats|osi|gwe| co|isa|ya |haw|ani|o p|zi |ndu|kho|ezo|kir|uni|i u| ay|lal|gal|sa |bom| bo|ola|amb|wak|ha |ba |nja|anj|ban| ba|iza| bu|udz|ngw|bun|oye|o d|nal|kus|i p|i o|i y|wi | nt|e p| si|aka|ne |men|jir|nji|sed|ets|end|eka|uma|du ", zyb: "bou|iz |aeu|enz|eng|uz | bo|ih |oux|nz | di|ing|z g|ux |uq |dih|ngh| ca|ng |gen|ung|z c| mi|miz|ij |cae|z d| gi| de| ge|euq|you| ci|ngz|ouj|aen|uj | yi|ien|gya| gu|ngj|mbo| mb|zli|dae|gij|cin|ang|j d|nae| se| ba|z y|euz| cu|de |x m|oz |j g|ouz|x b|li |z b|h g| da| yo|nj |xna|oxn|rox| ro|h c|nzl|vei|yau|wz |z m|ix | si|i c|iq |gh |j b| cw|nda|yin| hi| nd|dan|vun|inh| ga|can|ei |cun|yie|q g|hoz|bau| li| gy|wyo|cwy|z h|gue|gz |gun|faz|unz|yen|uh |den|ciz| go|q c|gj | bi|ej |aej| fa|hin|zci| wn|j n|goz|gai|au |z s|q d| vu|h m|gva|hu |auj|ouq|az |h d|ya |uek|ci |nh |u d|ou |sou|jso|gjs|din|awz|enj| do|h s|eve|sev|z r|nq |sin|nhy|g g|g b|liz|kgy|ekg|sen|eix|wng|lij|ngq|bin|i d|ghc| ha|bae|hix|h y|j c|ghg|i b|ouh|en |n d|h f|j s|z v|j y|law|hci|anh|inz|q y|nei|anj|ozc|ez |enh|q s|aiq|uen|zsi|zda|hye|ujc|e c|siz|eiz|anz|g y|i g|q n|bie| ne| ae|giz|u c|hgy|g d|gda|ngd|cou| la|z l|auy|ai |in |iuz|zdi|jhu|ujh|yuz| du|j m| fu|cuz|eiq|g c|gzd| co|uyu|coz|zbi|biu| dw|i s|i n|aw |dun|yun|izy|daw| he|nho| ho|enq|x l|cie|q b|cij|uzl|x d|iuj|awj| ya|eij|dei|nde|sae|izc|wnq|wnh|sei|h b|aih|gzs|bwn|a d|u g|ngg|jca|e b|ran| ra|hcu| me|iet|van| bu|guh|hen|si |wnj| ve|u b|azl|inj|gak|gan|ozg|siu|yaw|i m", kin: "ra | ku|se | mu|a k|ntu|tu |nga|umu|ye | um|unt|mun|e n| gu|we |ira|a n| n |wa |ere|mu |ko |gom|a b|e a| ab|li |e k|mba|a a|e b|aba|ga |e u|ba |omb|o k| ba|a u|ose|u b|o a| cy|ash|eng| ag|kwi| bu|za |gih|ren|ndi| ub|ang|yo |aka|gu |igi| ib|a g|a m| nt|uli|o b|ama|ihu|e i|nta| ak|ago|ro |ora| ka|ugu|hug|di |iye|ban| am|cya|ku |ta | bw|and|sha|re | ig|gan|ubu|na | kw|obo| by| bi|a i|yan|ka |sho|kub|era|ese| we|kan|aga|hob|bor|ana|byo|ura|uru|ibi|rwa|wes|u w|no |uko|i m|mo |u a|ure|ili|uba|o n|uha|uga|n a| im|ish|bwa|bwo|wiy|ali|ber|ze |ne |ush|are|o i|u m|ger|bur|ran| ki| no|ane|bye| y |ege|teg|guh| uk|n i|rag|i a|ya |u g|e m|anz|bo |abo|gar|wo |y i|ho |age|ind|o m|eke|a s|ara|zir|ite|kug|kim|aci| as|u n|ani|kir|mbe| gi|yos|kur|ugo|gir|e c|iza|aho|i b|tur|ata|o u| se|u u|zo |i i|aha|nge|mwe|iro|akw|any|eza|uki|imi|o y|ate|u k|iki|atu|bat| in|go |tan|n u|bos| bo| na|hak|iby| at|ihe|ung|ha |bul|kar|eye|eko|gek|nya|o g|shy|e y|awe|ngo|bit|mul|nzi|rer|bag|ge |imw|bah|cir|gac|bak|je |gez|imu|eze|tse|ets|mat| ru|irw|he | ni| ur| yi|ako|ngi| ng|i n|rez|ubi|gus|fit|afi|ugi|uka|amb|o c|utu|ufa|ruk|mug|bas|bis|uku|hin|e g|ige|amo|ing| af|yem|ni | ry|a r|gaz|te |erw|bwe|ubw|hwa|iko| al|ant|zi ", zul: "nge|oku| ng|a n|lo |ung|nga|la |le | no|elo|lun| um|e n|wa |we |gel|e u|ele|nel|thi|ke |nom|ezi|ma |ntu|oma|hi |o n|ngo|tu |nke|onk|o l|uth|ni |a u|lek|unt| wo|o e| lo|mun|umu|pha| ku|ang|ho |kwe|ulu| ne|won|une|lul|elu| un|a i|gok|kul|ath|hla|lok|khe|eni|tho|ela|zwe|akh|kel|a k|enz|ana|ban|aka|u u|ing|ule|elw|kho|uku|ala|lwa|gen| uk|wen|ama|na |e k|ko |gan|a e|he |zin|enk|o y| ez|kat| kw|lan|eth|het|o o| ok|okw|i n|nzi|aba|e a|hak|lel|lwe|eko|ane|ka |so |yo |ayo|o a|uhl|nku|nye| na|thu|mph|do |ben|ise|kut|ike|kun| is| im|hol|obu|fan|i k|e w|nhl|nok|ini|and|kuh|ukh|kuk| ak|e i|isi|aph|zi |ile|eki|ekh| ba|eka|the|a a| le| ye|kwa|e e|fut| fu|za |mal| ab|ebe|isa| em|o w|kub|mth|i w|ndl|emp|any|olo|ga | ko|nen|nis|alu|ith|eli|ndo|seb|nda| ya|i i|eke|vik|ake|uba|abe|ezw|yok|ba |ale|zo |olu|ume|ye |esi|kil|khu|yen|emi|nez|hlo|a l|ase|ula|kek|a o|iph|o u|no |azw|kan|mel|uny|ne |ufa|ahl|lin|hul|ant|und|sa |enh|kus|kuv|lak| in|o i|din|kom|amb|zis|ind|ola|uph|wez|eng|yez|phe|phi|mba|nya|han|kuf|nem|isw|ani|iyo| iy|fun| yo|uvi|i a|ene|izi| el|cal|i e|eze|ano|nay|hwe|kup|lal|uyo|ubu|kol|oko|ulo| la|e l|tha|nan|mfu|hon|nza|hin| ey|omp|da |bo |ilu|wak|lon|iso|kug|nka|ink|i l|sek|eku| ek|thw|gez", swe: "ar |er |tt |ch |och| oc|ing|\xE4tt|ill|r\xE4t|en | ti|til|f\xF6r|ll | r\xE4|nde| f\xF6|var|et |and| en|ell| ha|om |het|lle|lig|de |nin| de|ng | in| fr|as |ler| el|gen|nva|und|att|env|r h| i |r r|ska|fri| so|har|der| at|\xF6r |ter|all|t t| ut|den|ka |lla|som|av |sam|ghe|ga | sk| vi| av|ete|la |ens|t a| si|r s|iga|igh|tig| va|ig |a s| st|ion|ra |tti|a o| \xE4r|ten|ns |t e|na | be|han| un| an| sa|a f| la| gr| m\xE5|nge|n s|vis|lan|m\xE5 |ati|nat| \xE5t|an |nna| li| al|t f|ans|nsk|sni|gru|\xE4ll|tio|ad | me|isk|kli|s f|t i|st\xE4|t s|ri |med|sta|h r|lik|da |dig|ta |r o|run|on | re|lag|tta|\xE4r |kap|a i|a r|\xE4nd|erv|n e|kte|n f|rvi|nom|itt|id | mo|sky|r e|ver|\xE4ns|vil|gt |igt| na|tan|uta|dra|t o|ro |isn| fa|kal|ihe|rih|erk|r u|e s|per|l v|vid|one|rel|ber|ran|ot |mot|ndl|d f|ed |ika|m\xE4n|l s|bet|t b|dd |ydd|kyd|n o|s s|str|n m|tet|sin|r f| om|rna|int|r i|end|nad|l a|ap |ers|nda|t v|ent|rbe|arb| h\xE4|ets|h\xE4l|amh|ckl|gar|nga|r m|je |rje|arj|n i|s e|lin|r t|i s|r\xE4n| pe|ilk|t l|ern|p\xE5 | p\xE5|t\xE4l|d e|dom|ege|g e|tni|r a|lit|ras| s\xE5|lln|kil|ski|enn|i o|a d|er\xE4|n a|ara| ge|\xE4ro|a m| ar|t d|ilj|els|yck| ve|g o|fr\xE5|nas|tra|ess|del|m s|liv|l l|in |v s|g a|ast|e e|val|son|rso|e t|age|nd | eg|ial|cia|oci|soc|upp|igi|eli|g s|rkl|gad|ndr|nte|\xF6ra", lin: "na | na| ya|ya |a m| mo|to | ko|li |a b| li|o n| bo|i n|a y|a n|ki |a l|kok|la | ma|zal|i y|oki| pe|ngo|ali|pe |so |nso|oto|ons| ba|ala|mot|a k|eng|nyo|eko|o e|nge|yon| ny|kol|lik|iko|a e|o y|ang|ye | ye|oko|ma |o a|go | ek|ko |e m|aza|te |olo|sal|ama|si | az|mak|e b|lo | te|ta |isa|ako|amb|sen|ong|e n|ela|oyo|i k|ani| es|o m|ni |osa| to|ban|bat|a t|mba|ing|yo | oy|eli|a p|mbo|o p|mi | mi| nd|ba |i m|bok|i p|isi|mok|lis|nga|ge |nde|koz|bo |gel|ato|o t|mos|aka|oba|ese|lam|kop| ez|lon|den|omb|o b|ota|sa |ga |e a|e y|eza|kos|lin|esa|e e|kob|e k|sam|kot|kan|bot|ika|ngi|kam|ka | po|gom|oli|ope|yan|elo| lo|ata| el|bon|oka|po |bik|ate| bi|a s|i t|i b|omi|pes|wa | se|oza|lok|bom|oke|som|zwa|mis|i e|bek|iki| at|ola|ti |ozw|lib|o l|osu|oso|e t|nda|ase|ele|kel|omo|bos|su |usu|sus|bal|i l|ami|o o|bak| nz|pon|tel|mob|mu | ep|nza|asi|mbi|ati|kat|le |gi |ana|oti|ndi|tan|a o|wan|obe|kum|nya|mab|bis|nis|opo|tal|mat| ka|bol|and|aye|baz|u y|eta| ta|ne |ene|emb|sem|e l|gis|ben| ak| en|mal|obo|gob|ike|se |ibo|\u2019te| \u2019t|umb| so|mik|oku|be |mbe|bi |i a|eni|i o| mb|tey|san| et|abo|ebe|geb|eba|yeb|bu | as|ote|sik|ema|eya|ibe|mib|ai |pai|mwa|kes|da |may|boz|amu|a a|kom|mel|ona|ebi|ia |ina|tin| ti|bwa|sol|son", som: " ka|ka |ay |uu |an |yo |oo |aan|aha| wa|da | qo| in| u |sha| xa|a i|ada|iyo| iy|ma |ama| ah| la|qof|aa |hay|ga |a a|a w|ah | dh|a s| da|in |xaq| oo|a d|aad|yah|eey| le|isa|lee|u l|q u|aq | si|taa|eya|ast|la |of |iya|sa |y i|u x|sta|kas|xuu|uxu|wux| wu|iis|nuu|inu|ro | am| ma|a q|wax|dha|ala|kal|nay|f k|a k|le |ku | ku| sh|o i|a l|ta |maa|a u|dii|loo| lo|o a|ale|ara|ana|iga|o d| uu|ha |lo |o m|o x|doo|aro|kar|yaa|gu |si |ima|na | xo| fa|adk|do |a x|ad |aas| qa| so|a o| ba|lag| aa| he|dka|adi|soo|o k|aqa| is|ash|u d|had| ga|eed|san|u k|a m|iin|i k| ca|u s|n l|yad|rka|axa|elo|hel|aga|hii|o h|o q| ha|id |n k| mi|baa| xu|har|xor|aar|ax |mad|add|nta|mid|aal|waa|haa|ina|qaa|daa|agu|ark|o w|nka|u h|dad|ihi| bu| ho|naa|n a|ays|haq|a h|o l| gu|o s|aya|saa|lka| ee| sa|dda|ab |nim|quu|gga|ank|kii|rci|arc|n s|a g| ji|gel| ge|eli|ysa|a f|siy|int|laa|uuq|uqu|xuq| mu|i a|uur|mar|ra |iri|o u| ci|riy|ya |ado|alk|dal|ee |al |rri|ayn|asa| di|ooc|aam|ofk|oon|to |ayo|dar| xi|dhi|jee|a c| ay|yih|a j|ban|caa|lad|sho|d k|ida|uqd|agg|sag|ras|bar|ar | ko| ra|o f|gaa|gal|fal|u a| de| ya|o c|ii |xay|eel|aab|sig|aba|orr|hoo|u q|y d|ed |ho |sad|qda|h q|fka|n i|xag|n x|qay|lsh|uls|bul|u w|jin| do|raa| ug|ido|ood", hms: "ang|gd |ngd|ib | na|nan|ex | ji|eb |id |d n|b n|ud | li|nl |ad | le|jid|leb|l l| ga|ot | me|x n|anl|aot|mex|d g|b l|d d|ob |gs |ngs|jan| ne|ul | ni|nja| nj|lib|ong|nd | zh|jex| je|b j| sh|ngb| gh|gb | gu|gao|l n|han| ad|gan| da|t n| wu|il |x g|nb |b m| nh|she|is |l j|d l|nha|l g|d j|b g|el |end|wud|nex|gho|d s|d z|oul|hob|ub |nis| ch| ya|it |b y|eib| gi|s g|lie| yo| zi|oud|s j|d b|nx | de|es |d y| hu|uel|gue|ies|aob|you| ba|d m|chu|gia|dao|b d|s n|zib| go|zha|eit|hei|al |hud| do|nt |ol | fa|t g|hen|ut |gx |ngx|ab |fal|x j|b z|ian|d h|don|b w|t j|iad|nen| xi|gou|d c|b h|hao|x z|nib|anx|ant|gua| mi|s z|dan|ox |inl|hib|lil|uan|and| xa|b x| se|x m|uib|hui|d x|anb|enl| we|od |enb| du|at |ix |s m|bao| ho|hub| ng|zhi|jil|l s|yad|t m|t l|yan| ze| ju|heb|had|os |aos|t h|l d|nga| he|b a|xan|b s|sen|xin|dud|jul|d a|lou| lo|dei|d w| bi|b c| di|zhe|gt |ngt|x l|bad|x b| ja|hon|zho|blo| bl|d k| ma|deb|l z|wei| yi| qi|b b|x d|d p|eud| ge|x a|can| ca|t w|lol| si|hol|s w|aod|pao| pa|ren| re|x s|eut|pud| pu|aox|mis|gl |ngl|x w|zei|gon|enx|gha|s a|b f|l y|oub|eab|hea| to|did| ko|unb|ghu|t p|x c|geu|t s|x x|jao|ed |t c|l m|l h|jib|ax |l c|d f|nia| pi|eul|d r| no|min|l t|heu|ux |tou|ns |s y|iel|s l|hun", hnj: "it | zh| ni|ab |at |ang| sh|nit| do|uat|os |ax |ox |ol |nx |ob | nd|t d|zhi|nf |x n|if |uax| mu|d n|tab| ta| cu|mua|cua|as |ad |ef |uf |id |dos|gd |ngd|hit|ib |us |enx|f n|she|s d|t l|nb |ux |x z|ed |inf|b n|l n|t n|aob|b z| lo|ong|ix |dol| go|zhe|f g| ho| yi|t z|d z|b d| le|euf|d s|ut |yao| yo| zi|gb |ngb|ndo|enb|len| dr|zha|uab|dro|hox| ge|nen| ne|han| ja|das|x d|x c|x j|f z|shi|f h|il | da|oux|nda|s n|nd |s z|b g| ny|heu| de|gf |ngf| du|od |gox| na|uad| gu|inx|b c| ya|uef| xa| ji|ous| ua| hu|xan|hen|zhu|nil|jai|rou|t g|f d| la|enf|ged|ik | bu|nya|you|f y|lob|af |bua|uk |is |yin|out|of |l m|ud |hua| qi|ot |t s| ba|ait| kh|s s|nad| di|aib|x l|lol| id|dou|ex |aod|bao| re| ga|d d|b y|las|hed|b h|b s|f b|t y|jua| ju| dl|x s|hue|b l| xi|zif|dus|b b|x g|hif|x y|hai| nz|sha| li|x t| be|d j|und|hun|ren|d y|hef|xin| ib|b t|l d|aos|s l| ha|gai|nzh|gx |ngx| ao|s b|s x|el |gt |ngt|hik|aid|s t|x m|f l|f t| pi|aof|t r|eb | gh|s y|d l|gua| bi| za| fu|t h| zu|hou|deu|lb | lb|d g| mo|b k| bo|iao|ros|gon|eut|x h|al |uaf|hab|t t|k n|f x|hix|pin|yua| no|t b|ak | zo|s m| nb| we|d b|gha|f s|mol|euk|dax|l b|nof| ko|lou|guk|end|uas|t k|dis|dan|yol|uan|d t|x b|lan|t m| ch|jix|x x| hl|aox|zis|x i|et | ro", ilo: "ti |iti|an |nga|ga | ng| it| pa|en | ma| ka| a | ke| ti|ana|pan|ken|ang|a n|agi|a k|n a|gan|a m|a a|lin|ali|aya|man|int|teg|n t|i p|nte| na|awa|a p|na |kal|ng |dag|git|ega|sa |da |add|way|n i|n n|no |ysa|al |dda|n k|ada|aba|nag|nna|ngg|eys| me|a i|i a|mey|ann|pag|wen|i k|gal|gga| tu|enn| da| sa|nno| we|ung| ad|tun|mai| ba|l m| ag|ya |i s|i n|yan|nan|ata|nak| si|aka|kad|aan|kas|asa|wan|ami|aki|ay |li |i m|apa|yaw|a t|mak| an|i t|g k|a s|ina|eng|ala|ika|ama|ong|ara|ili|dad| aw|gpa|nai|et |yon|ani|aik|on |at |oma|sin|bal|ipa|n d|uma|g i|ket|ag |in |aen|n p|ram|sab|aga|nom|ino|lya|ily|syo|i b| ki|nia|agp|gim|kab|asi|kin|iam|ags|bab|oy |toy|n m|agt| ta|bag|sia|g a|gil|mil| um|o p|ngi|n w|i i|pad|pap|daa|iwa|naa|eg |ias|ed |nat|bae|o k|saa|san|pam|gsa|ta |kit|ma |dum|yto|tan|i e|t n|uka|t k|apu|lan|sta|sal| li|a b|ari|g n|den|mid|ad |o i|y a|ida|ar |aar|y n|dey| de| wa|a d|ak |bia|ao |tao|min|asy|mon|imo| gi|maa|sap|abi|i u|aib|kni|i l|gin|ged|o a| ar|kap|pul|eyt|abs|ibi| am|akn|i g|kip|isu|g t|bas|nay|ing|i d|kar|ban|iba|nib|t i|as |d n|y i|ura|a w|nal|aad|i w|lak|adu|kai|bsa|duk|edu| ed|may|agb|agk|tra|gge|sol|aso|agr|ngs|ian|ila|dde|edd|tal|aip|kua|umi|pay|sas|ita|pak|g d|ulo|inn|aw " }, Cyrillic: { rus: " \u043F\u0440| \u0438 |\u0440\u0430\u0432| \u043D\u0430|\u043F\u0440\u0430|\u0441\u0442\u0432|\u0433\u043E |\u0435\u043D\u0438|\u0432\u043E |\u043E\u0432\u0435| \u043A\u0430|\u043D\u0430 |\u0442\u044C | \u043F\u043E|\u0438\u044F |\u043E \u043D| \u043E\u0431|\u0435\u0442 | \u0432 |\u0441\u0432\u043E| \u0441\u0432|\u0430\u0432\u043E|\u0430\u043D\u0438|\u043E\u0441\u0442|\u043E\u0433\u043E|\u044B\u0439 |\u0430\u0436\u0434|\u043B\u043E\u0432|\u0442 \u043F| \u0438\u043C|\u043D\u0438\u044F| \u0447\u0435| \u0441\u043E|\u0435\u043B\u043E|\u0438\u043C\u0435| \u043D\u0435|\u043B\u044C\u043D|\u043B\u0438 |\u0447\u0435\u043B|\u043A\u0430\u0436|\u0435\u0441\u0442|\u0432\u0435\u043A|\u0430\u0442\u044C|\u043E\u0432\u0430|\u0438\u043B\u0438| \u0440\u0430|\u0435\u043A |\u0439 \u0447|\u0434\u044B\u0439|\u0436\u0434\u044B| \u0434\u043E|\u0438\u0435 |\u0435\u0435\u0442|\u043C\u0435\u0435|\u043D\u043E | \u0438\u043B|\u0438\u0438 |\u0441\u044F |\u0435\u0433\u043E|\u043E\u0431\u043E|\u0438 \u043F|\u043D\u0438\u0435|\u043A \u0438| \u0431\u044B|\u0438 \u0441|\u0438 \u0438|\u043C\u0438 |\u0431\u043E\u0434|\u0432\u043E\u0431|\u0432\u0430\u043D| \u0437\u0430|\u043E\u0439 |\u044B\u0445 |\u043E\u043C |\u043B\u0435\u043D|\u0430\u0446\u0438|\u0435\u043D\u043D|\u043E \u0441|\u043E \u043F|\u044C\u043D\u043E|\u0442\u0432\u0430|\u0442\u0432\u043E|\u043F\u0440\u0438|\u043D\u043E\u0433|\u0430\u043B\u044C|\u0430\u043A\u043E|\u0432\u0430 |\u0438 \u043D|\u0441\u0442\u0438|\u043D\u044B\u0445|\u0442\u043E |\u0431\u0440\u0430|\u043E\u043B\u0436|\u0434\u043E\u043B|\u0441\u0442\u043E|\u0438 \u0432|\u043D\u044B\u043C|\u043E\u0435 | \u0435\u0433|\u043D\u043E\u0432|\u0438\u0445 |\u0435\u043B\u044C|\u0442\u0435\u043B|\u0442\u0438 |\u043D\u043E\u0441|\u043D\u0435 |\u043F\u043E\u043B|\u0440\u0430\u0437| \u0432\u0441|\u0438 \u043E| \u043B\u0438|\u0438 \u0440|\u044B\u0442\u044C|\u0431\u044B\u0442|\u0432\u043B\u0435|\u0440\u0435\u0434|\u0438\u044E |\u0442\u043E\u0440| \u043E\u0441|\u044C\u0441\u044F|\u0442\u044C\u0441|\u043E\u0434\u0438|\u0449\u0435\u0441|\u044F \u0438|\u043A\u0430\u043A|\u043F\u0440\u043E|\u0436\u0435\u043D|\u044B\u043C |\u043F\u0440\u0435|\u0430 \u0441|\u0441\u043D\u043E|\u0435 \u0434|\u043D\u043D\u043E|\u043E \u0438|\u0438\u0439 | \u043A\u043E|\u043E \u0432| \u043D\u0438| \u0434\u0435|\u0441\u0442\u0443|\u043B\u0436\u043D|\u0441\u043E\u0432|\u0435 \u0432|\u043D\u043E\u043C|\u043E\u043B\u044C|\u0440\u0430\u043D|\u043E\u0436\u0435|\u0438\u0447\u0435|\u0435\u0439 |\u0430\u0441\u0442|\u043D\u043D\u044B| \u043E\u0442|\u0442\u0443\u043F|\u043C \u0438|\u043E\u0434\u043D|\u0437\u043E\u0432|\u0440\u0435\u0441| \u043C\u043E|\u043E\u0441\u0443|\u043B\u044F |\u043E\u0441\u043D|\u0430 \u043E|\u0432\u0435\u043D| \u0442\u043E|\u043E \u0431|\u0448\u0435\u043D|\u0442\u0432\u0435|\u043E\u0431\u0449|\u0430 \u0438|\u0435 \u043C|\u044C\u043D\u044B|\u043E\u0431\u0440|\u0432\u0435\u0440|\u0447\u0435\u043D|\u044F \u043D|\u0436\u043D\u043E|\u0447\u0435\u0441|\u0430\u043A |\u043B\u0438\u0447|\u043D\u0438\u0438|\u0435 \u0438|\u0432\u0441\u0435|\u0431\u0449\u0435|\u0432\u0430\u0442|\u0435\u0441\u043F|\u043C\u043E\u0436|\u0439 \u0438|\u043D\u043E\u0435|\u043E \u0434|\u0431\u0435\u0441| \u0432\u043E|\u044F \u0432|\u0434\u0443 | \u0441\u0442|\u0434\u043D\u043E|\u043E\u043D\u0430|\u043D\u0430\u0446|\u0434\u0435\u043D|\u0435\u0436\u0434|\u0445 \u0438| \u0431\u0435|\u0438 \u0434|\u043D\u044B |\u0434\u043E\u0441|\u0434\u043B\u044F| \u0434\u043B| \u0442\u0430|\u043B\u044C\u0441|\u0430\u0442\u0435|\u0446\u0438\u0438|\u044F \u043F|\u0443\u044E |\u0438\u0442\u0435|\u0435 \u043E|\u043D\u043E\u0439|\u043F\u043E\u0434|\u043E\u0442\u043E|\u0441\u0442\u0440|\u0441\u0442\u0430| \u043C\u0435|\u0435\u043B\u0438| \u0440\u0435|\u044F \u043A|\u0442\u043E\u044F|\u0430\u043C\u0438|\u0435\u043D |\u044C \u0432|\u044E \u0438|\u0430\u0437\u043E|\u0433\u043E\u0441|\u043C \u043F|\u044C \u043F|\u0442 \u0431|\u0436\u0435\u0442|\u0443\u0447\u0430|\u0441\u0443\u0434|\u044C\u0441\u0442|\u0434\u0441\u0442|\u0449\u0438\u0442|\u0430\u0449\u0438|\u0437\u0430\u0449|\u043A\u043E\u043D|\u043D\u0438\u044E|\u0430\u043C |\u043E\u0434\u0443|\u0435\u0440\u0435|\u0433\u0440\u0430|\u043F\u0435\u0447|\u043E \u043E|\u043E\u0440\u043E|\u043A\u043E\u0442|\u0438 \u043A|\u0442\u0440\u0430|\u043D\u0438\u043A|\u0443\u0449\u0435|\u0446\u0438\u0430|\u043E\u0446\u0438|\u0441\u043E\u0446|\u043D\u0430\u043B|\u0435\u0441\u043A|\u043E \u0440|\u043A\u043E\u0433|\u0434\u0440\u0443| \u0434\u0440|\u043D\u0438 |\u0430\u0432\u0430|\u043D\u0441\u0442|\u0435\u043C |\u0430\u0432\u043D|\u044B\u043C\u0438|\u0435\u0434\u0441|\u0434\u0438\u043D|\u0434\u043E\u0432| \u0433\u043E| \u0432\u044B|\u0432 \u043A|\u044B\u0435 |\u043E\u0431\u0435|\u043C\u0443 |\u044F \u0435|\u0441\u043B\u0443|\u0443\u0434\u0430|\u0442\u0430\u043A|\u043A\u043E\u0439|\u0442\u0443 |\u0438\u0442\u0443|\u0437\u0430\u043A|\u0445\u043E\u0434|\u0432\u043E\u043B|\u0440\u0430\u0431|\u043A\u0442\u043E|\u0438\u043A\u0442|\u0438\u0447\u043D|\u043D\u0438\u0447|\u043E\u0442 |\u0438\u043D\u0430| \u043A |\u0442\u0435\u0440|\u0440\u043E\u0434|\u043D\u0430\u0440", ukr: "\u043D\u0430 | \u043F\u0440|\u043F\u0440\u0430| \u0456 |\u0440\u0430\u0432| \u043D\u0430| \u043F\u043E|\u043D\u044F |\u043D\u043D\u044F| \u0437\u0430|\u043E\u0433\u043E|\u0442\u0438 |\u0432\u043E |\u0433\u043E | \u043A\u043E|\u0430\u0432\u043E| \u043C\u0430|\u043B\u044E\u0434|\u043E \u043D| \u043D\u0435| \u043B\u044E|\u044E\u0434\u0438|\u043E\u0436\u043D|\u043A\u043E\u0436|\u043B\u044C\u043D|\u0436\u043D\u0430|\u0434\u0438\u043D|\u0430\u0442\u0438|\u0430\u0454 |\u0438\u0445 |\u0438\u043D\u0430|\u043F\u043E\u0432|\u0441\u0432\u043E| \u0441\u0432|\u0430\u043D\u043D|\u0454 \u043F|\u043C\u0430\u0454|\u0430\u0431\u043E|\u0430 \u043B| \u0431\u0443|\u043D\u0435 |\u0435\u043D\u043D|\u0431\u043E | \u0430\u0431|\u0430 \u043C|\u043E\u0432\u0438|\u043D\u0456 | \u0432\u0438| \u043E\u0441|\u0430\u0446\u0456|\u0432\u0438\u043D| \u0442\u0430|\u0431\u0435\u0437|\u043E\u0431\u043E| \u0432\u0456| \u044F\u043A|\u0435\u0440\u0435| \u0434\u043E|\u0456 \u043F|\u0443\u0432\u0430|\u043E \u043F|\u0430\u043B\u044C|\u043D\u0438\u0445|\u043E\u043C |\u043C\u0438 |\u0456\u043B\u044C|\u043D\u043E\u0433|\u0442\u0430 |\u0438\u0439 |\u043F\u0440\u0438|\u043E\u044E |\u0442\u044C |\u0441\u0442\u0430| \u043E\u0431|\u0432\u0430\u043D|\u0438\u043D\u043D|\u0442\u0456 |\u043E\u0441\u0442| \u0443 |\u0441\u044F |\u0432\u0430\u0442|\u0431\u0443\u0442|\u0438\u0441\u0442| \u043C\u043E|\u0435\u0437\u043F|\u0443\u0442\u0438|\u043D\u043E\u0432|\u043F\u0435\u0440|\u0456\u0457 |\u0438 \u043F|\u0431\u043E\u0434|\u0432\u043E\u0431|\u0441\u0442\u0432| \u0432 |\u043E \u0432|\u0432\u0456\u0434| \u0431\u0435|\u0430\u043A\u043E|\u043F\u0456\u0434|\u0442\u0438\u0441|\u043A\u043E\u043D|\u043D\u043E |\u0432\u0430 |\u043D\u043D\u0456|\u0456 \u0441|\u0430 \u043F|\u0441\u0442\u0456| \u0441\u043F|\u043D\u0438\u0439|\u0434\u0443 |\u044C\u043D\u043E|\u043E\u043D\u0430| \u0456\u043D|\u0434\u043D\u043E|\u043D\u0438\u043C|\u0456\u0439 |\u0430 \u0437|\u043D\u0443 |\u043C\u043E\u0436|\u0457\u0457 | \u0457\u0457|\u043B\u044F |\u0441\u043E\u0431|\u043C\u0443 |\u043E\u0457 |\u044F\u043A\u043E| \u043F\u0435| \u0440\u0430|\u0456\u0434 | \u0434\u0435|\u0456 \u0432|\u0438 \u0456|\u0447\u0438\u043D|\u0432\u043D\u043E|\u043E\u043C\u0443|\u043D\u043E\u043C|\u0443 \u043F|\u0456 \u043D|\u0430 \u0441| \u0441\u0443|\u0430 \u043E|\u043D\u0435\u043D|\u0438\u0441\u044F|\u043E\u0432\u043E|\u043D\u0430\u043D|\u043E\u0434\u043D|\u0443 \u0432|\u0456 \u0434|\u0430\u0432\u0430|\u0456\u0434\u043D|\u0440\u0456\u0432| \u0440\u0456|\u0456 \u0440|\u0438\u043C\u0438|\u0432\u0456\u043B|\u0438\u043C |\u0446\u0456\u0457|\u043E \u0434|\u0430 \u0432|\u0441\u0442\u0443|\u043E\u0434\u0443|\u0431\u0443\u0434|\u043E\u0432\u0430| \u043F\u0456| \u043D\u0456|\u044F \u043D|\u0435 \u043F|\u043D\u0430\u0446|\u0438 \u0441|\u043D\u043D\u0430| \u043E\u0434| \u0440\u043E|\u043D\u043E\u0441|\u044C\u043D\u0438|\u044E\u0442\u044C|\u0438 \u0437|\u043A\u0438 |\u0456 \u0437|\u0430 \u0431|\u0441\u043F\u0440|\u0447\u0435\u043D|\u0436\u0435 |\u043E\u0436\u0435|\u0435 \u043C|\u043E\u0432\u043D|\u0440\u0438\u043C|\u0435 \u0431|\u0442\u043E |\u043D\u0456\u0445|\u043E\u0441\u043E|\u0443\u0434\u044C|\u0432\u0456 | \u0440\u0435| \u0441\u0442|\u0440\u0430\u0446|\u0434\u043E | \u0441\u043E|\u0440\u043E\u0437|\u043B\u0435\u043D|\u0432\u043D\u0438|\u0456\u0432\u043D|\u0440\u043E\u0434| \u0432\u0441|\u0441\u043F\u0456|\u043A\u043E\u0432|\u0437\u043F\u0435|\u0456\u0432 |\u0434\u043B\u044F| \u0434\u043B|\u0457 \u043E|\u0445\u0438\u0441|\u0430\u0445\u0438|\u0437\u0430\u0445|\u2010\u044F\u043A|\u044C\u2010\u044F|\u0434\u044C\u2010|\u044F \u0456|\u0442\u0430\u043A|\u0437\u043D\u0430|\u0437\u0430\u0431|\u0441\u0442\u044C|\u0442\u0443 |\u043D\u043E\u044E|\u0430 \u043D|\u0442\u043E\u0440|\u0441\u043D\u043E|\u043E \u0441|\u0436\u0435\u043D|\u0446\u0456\u0430|\u043E\u0446\u0456|\u0441\u043E\u0446|\u0456\u043D\u0448|\u0456 \u043C|\u043A\u043B\u0430|\u0438 \u0432|\u0442\u0435\u0440| \u0434\u0456|\u0456\u0441\u0442|\u043E\u0432\u0456|\u0443 \u0441|\u044F \u0432|\u0430\u0440\u043E|\u0441\u0456 |\u0432\u0456\u0442|\u0441\u0432\u0456|\u043E\u0441\u0432|\u0440\u043E\u0431|\u043F\u0456\u043B|\u0440\u0435\u0441|\u0437\u0430 |\u043F\u0435\u0447|\u0430\u0431\u0435|\u043A\u0443 |\u043B\u0438\u0432|\u0435\u0440\u0436|\u0434\u0435\u0440|\u0432 \u0456|\u0430\u0432\u043D|\u0442\u0430\u0432|\u0430\u0432 |\u0430\u043C\u0438|\u043A\u043E\u043C|\u0432\u043B\u0435|\u043E \u0431|\u044C \u043F| \u0449\u043E|\u0457\u0445 |\u0442\u0432\u043E|\u0445\u0442\u043E|\u0456\u0445\u0442|\u043A\u043E\u0433| \u043A\u0440|\u0430\u043D\u043E|\u0442\u0430\u043D|\u0456\u0430\u043B|\u043D\u0430\u043B|\u043D\u044C |\u0445 \u043F|\u0436\u043D\u043E|\u043B\u0435\u0436|\u0430\u043B\u0435|\u043F\u0440\u043E|\u0442\u0432\u0430|\u0440\u0430\u0442|\u043E \u043E|\u0445 \u0432|\u043D\u0430\u0440|\u043B\u044C\u0441|\u0446\u0456\u0439|\u043A\u043E\u0440|\u0447\u0430\u0441|\u0440\u0436\u0430|\u0457 \u0441|\u0438\u043D\u0443|\u0434\u0441\u0442|\u043E \u0437|\u0440\u0430\u0437|\u043C\u0456\u043D|\u0430 \u0440|\u0437\u0430\u043A", bos: " \u043F\u0440| \u0438 |\u0440\u0430\u0432|\u043D\u0430 |\u043C\u0430 |\u043F\u0440\u0430| \u043D\u0430|\u0438\u043C\u0430| \u0441\u0432|\u0430 \u0441|\u0434\u0430 |\u0430 \u043F|\u0432\u043E |\u0458\u0435 |\u043A\u043E |\u0430\u043A\u043E|\u043E \u0438| \u043F\u043E|\u0430\u0432\u043E|\u0435 \u0441|\u0430 \u0438|\u0442\u0438 | \u0438\u043C| \u0434\u0430| \u0443 |\u0441\u0432\u0430|\u043D\u043E | \u0437\u0430|\u043E \u043D|\u0432\u0430 |\u0438 \u043F|\u0438\u043B\u0438|\u0432\u0430\u043A|\u043B\u0438 | \u043A\u043E|\u043D\u0435 | \u0438\u043B|\u043A\u043E\u0458| \u043D\u0435| \u0434\u0440|\u043E\u0441\u0442| \u0441\u043B|\u045A\u0430 |\u0438\u043C |\u0438 \u0441|\u0443 \u0441|\u0438 \u0438|\u0430\u0432\u0430|\u0438\u0458\u0435|\u0430 \u0443| \u0431\u0438|\u0441\u0442\u0432|\u0441\u0435 |\u0432\u0430\u045A|\u0430 \u0434|\u043E\u043C |\u0458\u0435\u0434|\u0431\u043E\u0434|\u043E\u0431\u043E|\u043B\u043E\u0431|\u0441\u043B\u043E| \u0441\u0435| \u0440\u0430|\u0438\u0445 |\u0441\u0442\u0438|\u0430 \u043D|\u045A\u0435 | \u043E\u0431| \u0458\u0435|\u043F\u0440\u0438|\u0434\u0440\u0443|\u0443 \u0438|\u0458\u0443 |\u043E \u0434|\u0438\u0442\u0438|\u0432\u043E\u0458|\u0440\u0430\u0437|\u0430\u045A\u0435|\u043E\u0432\u0430|\u0434\u0458\u0435| \u043E\u0441|\u0435 \u0438|\u043B\u043E |\u0435 \u043F|\u0430\u045A\u0430|\u0443\u0458\u0435|\u0438 \u0434|\u0431\u0440\u0430|\u0442\u0440\u0435| \u0442\u0440| \u0441\u0443|\u0443 \u0437|\u0430 \u043A|\u043E\u0433 |\u0443 \u043F|\u043E\u0458\u0435|\u0446\u0438\u0458|\u0440\u0435\u0431|\u0430 \u043E|\u0430 \u0431| \u045A\u0435|\u0438 \u0443|\u043C\u0438\u0458|\u043D\u0438 |\u043D\u043E\u0441|\u0431\u0430 |\u0435\u0434\u043D|\u0441\u0432\u043E|\u045A\u0435\u0433| \u0438\u0437|\u043F\u0440\u043E|\u0435 \u0434|\u0436\u0430\u0432|\u0431\u0438\u0442| \u043D\u0438|\u0438 \u043E|\u0441\u0442\u0430|\u0430 \u0437|\u0430\u0432\u043D|\u0432\u0458\u0435| \u043A\u0430|\u0431\u0438\u043B|\u043E\u0432\u043E|\u0430 \u0458|\u0430\u0458\u0443|\u0438\u0441\u0442|\u0438 \u043D|\u043D\u0438\u0445|\u0458\u0435\u043B|\u0442\u0443 |\u0440\u0435\u0434|\u0433\u043E\u0432| \u043E\u0434|\u0435 \u043E|\u043E\u0458\u0438| \u0441\u043C|\u0458\u0430 |\u043E \u043A|\u0438\u043B\u043E|\u0430\u0446\u0438|\u0435 \u0443|\u043F\u0440\u0435|\u043E \u043F|\u0435\u0431\u0430|\u0443 \u043E|\u0441\u0443 |\u0432\u0438\u043C|\u0438\u0447\u043D| \u0441\u0430| \u0434\u0458|\u0430 \u0442|\u0438\u0458\u0430|\u0448\u0442\u0438|\u0447\u043D\u043E|\u0440\u0436\u0430|\u0434\u0440\u0436|\u0441\u0442\u0443|\u0434\u043D\u0430|\u043E\u0434\u043D|\u0435\u043D\u0438|\u0437\u0430 |\u0438\u0432\u0430|\u043D\u043E\u043C|\u0435\u043C |\u0434\u0443 |\u0440\u0430\u043D|\u0432\u043D\u043E|\u0441\u043C\u0438|\u0458\u0435\u0440|\u0435 \u0431|\u0435 \u043D|\u0434\u0435 |\u043F\u043E\u0441|\u043C \u0438| \u0434\u043E|\u0443 \u0434|\u043D\u0430\u043A|\u0430 \u0440|\u043E\u0431\u0440| \u043C\u043E|\u043D\u0438\u043C|\u0435\u0433\u043E| \u043A\u0440|\u0442\u0438\u0442|\u043A\u0440\u0438|\u0432\u0435 |\u0430\u043D |\u0438\u043A\u043E|\u043D\u0438\u043A|\u043D\u0443 |\u0438 \u043C|\u043D\u043E\u0433|\u0435\u043D\u043E|\u0441\u043D\u043E|\u0435 \u043A|\u0442\u0443\u043F|\u0440\u0443\u0433|\u043A\u0430 |\u043E\u0434\u0430|\u0440\u0438\u0432|\u0432\u043E\u0459|\u0430\u043B\u043D|\u043C \u0441|\u0438\u0442\u0443|\u0430\u0448\u0442|\u0437\u0430\u0448|\u0430\u043D\u0438|\u0441\u0430\u043C| \u0441\u0442|\u0430\u043A\u0432|\u043E\u0432\u0438|\u043E\u0441\u043D|\u0440\u043E\u0434|\u0430\u0440\u043E| \u043C\u0438|\u0458\u0438 |\u0442\u0432\u0430|\u0434\u043D\u043E|\u043D\u0441\u0442|\u0430\u043A |\u0438\u0442\u0435|\u0459\u0443 |\u0432\u0438\u0447|\u0440\u0430\u0434|\u0443 \u043D|\u0443 \u043C| \u0442\u0430|\u0434\u0441\u0442|\u0442\u0438\u0432|\u043D\u0430\u0446|\u0440\u0438\u043C|\u043A\u043E\u043D|\u043A\u0443 |\u045A\u0443 |\u043E\u0434\u0443|\u0436\u0438\u0432|\u0430\u043C\u043E|\u0442\u0432\u043E|\u0442\u0435\u0459|\u043F\u043E\u0434|\u0435\u0452\u0443|\u0433 \u043F|\u043D\u043E\u0432|\u0438\u043D\u0430|\u043D\u0430\u0440| \u0432\u0458|\u0438 \u0431|\u043E\u0458 | \u043E\u0432|\u0430\u0432\u0435|\u0432\u0443 |\u0430\u043D\u0441|\u043E\u0458\u0430|\u0437\u043E\u0432|\u0430\u0437\u043E|\u0443\u0434\u0435|\u0431\u0443\u0434| \u0431\u0443|\u0435 \u0442|\u0438 \u0432|\u0435\u045A\u0430|\u0435\u0434\u0438|\u043D\u0438\u0446|\u043D\u0430\u043F|\u043C\u0458\u0435| \u0438\u0441|\u0441\u043B\u0443|\u0435\u0434\u0441|\u043E \u043E|\u0437\u0430\u043A|\u0438 \u043A|\u043C \u043F|\u0442\u043D\u043E|\u0438\u0432\u043E|\u0435\u0440\u0435|\u043D\u0438\u0447|\u043A\u0430\u043A|\u0430\u0434\u0430|\u0432\u043D\u0438|\u0443\u0433\u0438| \u0440\u043E|\u043C\u043E\u0432|\u0432\u0435\u043D|\u043E \u0441|\u0442\u043E |\u0442\u0435 | \u0432\u0440| \u0431\u0435|\u0430\u0440\u0430|\u043A\u043B\u0430| \u0431\u0440|\u0443 \u0431|\u0443 \u0443|\u0438 \u0442|\u043E\u043D\u0430| \u043E\u043D|\u0430\u0432\u0438|\u0458\u0430\u043B|\u0434\u043D\u0438| \u0441\u043A", srp: " \u043F\u0440| \u0438 |\u0440\u0430\u0432|\u043D\u0430 |\u043F\u0440\u0430| \u043D\u0430|\u043C\u0430 | \u0441\u0432|\u0438\u043C\u0430|\u0434\u0430 |\u0430 \u043F|\u0432\u043E |\u043A\u043E |\u0442\u0438 |\u0430\u0432\u043E| \u043F\u043E|\u0430 \u0438|\u0430\u043A\u043E|\u0430 \u0441| \u0437\u0430| \u0443 |\u043E \u0438| \u0438\u043C|\u0438 \u043F|\u0432\u0430 |\u0441\u0432\u0430|\u0432\u0430\u043A| \u0434\u0430|\u043E \u043D|\u0435 \u0441|\u043E\u0441\u0442| \u043A\u043E|\u045A\u0430 |\u043B\u0438 |\u0438\u043B\u0438|\u043D\u0435 |\u043E\u043C | \u043D\u0435|\u0430 \u043D| \u0441\u043B| \u0438\u043B|\u0458\u0435 | \u0434\u0440|\u0438 \u0441|\u043D\u043E |\u043A\u043E\u0458|\u0443 \u0441|\u0430\u0432\u0430| \u0440\u0430|\u043E\u0433 |\u0441\u043B\u043E|\u0458\u0443 |\u0438\u043C |\u0441\u0442\u0438|\u0431\u043E\u0434|\u043E\u0431\u043E|\u043B\u043E\u0431|\u0438\u0442\u0438|\u0430 \u043E|\u0441\u0442\u0432|\u0438 \u0443|\u0430 \u0434|\u043D\u0438 |\u0458\u0435\u0434|\u0443 \u043F|\u043F\u0440\u0438|\u0435\u0434\u043D| \u0431\u0438|\u0438 \u0438|\u0430 \u043A|\u043E \u0434|\u0441\u0442\u0430|\u0438\u0445 |\u0434\u0440\u0443|\u0430 \u0443| \u0458\u0435|\u0430\u045A\u0430| \u043E\u0441| \u043D\u0438|\u043D\u043E\u0441|\u043F\u0440\u043E|\u0430\u0458\u0443|\u0438 \u043E| \u0434\u0435| \u0441\u0443|\u0443 \u0438|\u0441\u0435 |\u045A\u0435 |\u0458\u0430 |\u043E\u0432\u0430|\u0438 \u0434|\u0446\u0438\u0458| \u043E\u0431|\u0443\u0458\u0435|\u0440\u0435\u0434|\u0436\u0430\u0432|\u0435 \u0438|\u0435 \u043F|\u0430 \u0458|\u0434\u043D\u0430| \u0441\u0435| \u043E\u0434|\u0432\u0435 | \u043A\u0430|\u0435\u043D\u0438|\u0440\u0436\u0430|\u0434\u0440\u0436|\u0430 \u0437|\u0430\u0432\u043D|\u0435\u045A\u0430|\u0430\u0446\u0438|\u0432\u043E\u0458|\u043E\u0432\u043E|\u0443 \u0443|\u043C \u0438|\u043E\u0458\u0430|\u0432\u0430\u045A| \u0438\u0437|\u0438\u0458\u0430|\u0443 \u0437|\u0430\u045A\u0435|\u0440\u0430\u043D|\u0435 \u043E|\u0440\u043E\u0434|\u0438 \u043D|\u0435 \u0431|\u0440\u0430\u0437|\u0437\u0430 | \u045A\u0435|\u0433\u043E\u0432|\u0438\u0447\u043D| \u0441\u0442|\u043D\u043E\u0432|\u0441\u043D\u043E|\u043E\u0441\u043D|\u0434\u0443 |\u043F\u0440\u0435| \u0442\u0440|\u0441\u0443 |\u0432\u0443 |\u043E\u0434\u043D|\u0430 \u0431|\u0441\u0432\u043E|\u045A\u0435\u0433|\u043D\u0438\u043C|\u043D\u0438\u0445|\u0442\u0443 |\u0442\u0438\u0442|\u0448\u0442\u0438|\u043A\u0443 |\u043D\u043E\u043C|\u0431\u0438\u0442|\u0435 \u0434|\u043C\u0435 |\u0438\u043A\u043E|\u0447\u043D\u043E|\u043E\u0458\u0438|\u043B\u043E |\u0432\u043D\u043E|\u043D\u0438\u043A|\u0438\u043A\u0430|\u0431\u0435\u0437|\u0430\u0440\u0430|\u0434\u0435 |\u0443 \u043E|\u0432\u0438\u043C|\u043D\u0430\u043A| \u0441\u0430|\u0440\u0438\u0432|\u0430\u0432\u0435|\u0430\u043D |\u0432\u043E\u0459| \u043A\u0440|\u043E \u043F|\u0441\u043C\u0435|\u0435 \u043A|\u043D\u043E\u0433|\u0458\u0438 | \u043E\u0432|\u0435 \u0443|\u0442\u0432\u0430|\u0431\u0440\u0430|\u0440\u0443\u0433|\u0440\u0435\u0431|\u0442\u0440\u0435|\u0443 \u0434|\u043E\u0434\u0430| \u043C\u043E| \u0432\u0440|\u0430\u0432\u0459|\u0443 \u043D|\u0435\u0433\u043E|\u0434\u0435\u043B|\u043C \u0441|\u043A\u0440\u0438|\u043E \u043A|\u0430\u0448\u0442|\u0437\u0430\u0448|\u045A\u0443 | \u0441\u043C|\u0430\u043D\u0438| \u043B\u0438|\u0434\u043D\u043E|\u0435\u0452\u0443|\u0430\u043B\u043D|\u043B\u0430 |\u0430\u043A\u0432|\u043E\u0458 |\u043A\u043E\u043C|\u0441\u0442\u0443|\u0443\u0433\u0438|\u0430\u0432\u0438|\u0430 \u0440|\u043A\u0430 |\u0440\u0430\u0434|\u043E\u0434\u0438|\u0432\u0438\u0447|\u0442\u0430\u0432|\u0438\u0442\u0443|\u0443\u0434\u0435|\u0431\u0443\u0434| \u0431\u0443|\u043F\u043E\u0442|\u043E\u0434\u0443|\u0436\u0438\u0432|\u0435\u0440\u0435|\u0442\u0432\u043E|\u0438\u043B\u043E|\u0431\u0438\u043B|\u0430\u0440\u043E|\u0435 \u043D|\u043E\u0432\u0438|\u043F\u043E\u0440|\u0435\u043D\u043E|\u0448\u0442\u0432|\u043D\u0430\u0446|\u043E\u0432\u0435|\u043C \u043F|\u0442\u0443\u043F|\u043F\u043E\u0441|\u0440\u0435\u043C|\u0434\u043D\u0438|\u0431\u0430 |\u043D\u0441\u0442|\u0430 \u0442|\u043E\u0458\u0443|\u0430\u0441\u0442|\u0438\u0432\u0430|\u0435 \u043C|\u0432\u0440\u0435|\u0432\u0459\u0430|\u043D\u0443 |\u0431\u0435\u0452|\u0438\u0441\u0442|\u0435\u043D |\u0442\u0435 |\u0434\u0441\u0442|\u0440\u043E\u0442|\u0437\u0430\u043A|\u0430\u043E |\u043A\u0430\u043E|\u0438 \u043A|\u0458\u0443\u045B|\u043E \u0441|\u0441\u0442 |\u0441\u0430\u043C|\u043C \u043D|\u0442\u0435\u0440|\u043D\u0430\u0440| \u043C\u0435|\u0438 \u043C|\u043A\u043E\u043B|\u0435 \u0440|\u0443\u0448\u0442|\u0440\u0443\u0448|\u0432\u0435\u0440|\u043A\u0430\u043A| \u0431\u0435|\u0438 \u0431|\u043A\u043B\u0430|\u0430\u0434\u0430|\u0435\u0431\u0430|\u0435\u043D\u0430|\u043E\u043D\u0430| \u043E\u043D|\u0442\u0432\u0443|\u0430\u043D\u0441| \u0434\u043E|\u0440\u0430\u043A|\u0441\u043B\u0443|\u0438 \u0432|\u043D\u0438\u0446|\u0443 \u043A|\u043C\u0435\u043D|\u0432\u0440\u0448|\u0435\u043C\u0435|\u0435\u0434\u0441|\u0438\u0432\u0438|\u043E \u043E|\u0458\u0430\u0432", uzn: "\u0430\u043D |\u043B\u0430\u0440|\u0433\u0430 |\u0438\u0440 | \u0431\u0438|\u0430\u0440 | \u0432\u0430|\u0434\u0430 |\u0438\u0433\u0430| \u04B3\u0443|\u0432\u0430 |\u0431\u0438\u0440|\u0443\u049B\u0443|\u049B\u0443\u049B|\u04B3\u0443\u049B| \u04B3\u0430|\u0440 \u0431|\u0433\u0430\u043D|\u0438\u0448 |\u0438\u0434\u0430| \u0442\u0430|\u0430 \u044D|\u0438\u043D\u0438|\u0430\u0434\u0438|\u043D\u0433 |\u0434\u0438\u0440|\u0438\u0448\u0438|\u043B\u0438\u043A|\u043B\u0438\u0448|\u0438\u0439 |\u0438\u043B\u0438|\u0430\u0440\u0438|\u0443\u049B\u0438|\u04B3\u0430\u0440|\u043B\u0430\u043D|\u0438\u043D\u0433|\u0448\u0438 |\u0434\u0430\u043D|\u043D\u0438\u043D|\u0438\u043D\u0441|\u043A\u0438\u043D|\u0441\u043E\u043D|\u043D\u0441\u043E| \u0438\u043D| \u043C\u0443|\u049B\u0438\u0433| \u043C\u0430|\u043E\u043D |\u0440 \u0438| \u0431\u045E|\u044D\u0433\u0430| \u044D\u0433| \u045E\u0437|\u043D\u0438 |\u0431\u045E\u043B|\u0433\u0430\u0434|\u0438 \u0431|\u043A\u0438 |\u0438\u043B\u0430|\u0451\u043A\u0438| \u0451\u043A|\u0430 \u0431|\u043D \u0431|\u0438\u043D |\u0440 \u04B3|\u0430\u043B\u0430|\u044D\u0440\u043A| \u044D\u0440|\u043B\u0433\u0430| \u049B\u0430|\u0440\u043A\u0438|\u0448 \u04B3|\u0438 \u04B3|\u043D \u043C| \u0431\u043E| \u0431\u0430|\u0438\u043A |\u0430\u0440\u0430|\u0438\u0433\u0438|\u043B\u0438\u0433|\u0440\u0438 |\u049B\u0438\u043B|\u0430 \u0442|\u0431\u0438\u043B| \u044D\u0442|\u043D\u0438\u0448|\u043D\u043B\u0438|\u043A\u043B\u0430|\u0438 \u0432|\u0431\u043E\u0448|\u044D\u0442\u0438|\u0430\u043D\u0438|\u0438\u043C |\u0438 \u043C|\u043E\u043B\u0438|\u049B\u043B\u0430|\u0430 \u04B3|\u043B\u0430\u0448|\u0430\u0442\u043B|\u0442\u0438\u043B|\u0430 \u049B| \u043E\u043B|\u043E\u0441\u0438|\u043C\u0430\u0441|\u049B\u0430\u0440|\u0438\u043D\u043B|\u043B\u0430\u0442| \u049B\u0438|\u0442\u0430\u044A|\u04B3\u0430\u043C|\u0433\u0438 |\u0438\u0431 |\u043C\u043B\u0430|\u045E\u0437 |\u043D \u044D|\u043C\u0443\u043C| \u0434\u0430| \u0431\u0443|\u0430\u0442 |\u0448 \u0432|\u0443\u043D |\u0430\u0442\u0438|\u043C\u043A\u0438|\u0443\u043C\u043A|\u0442\u043B\u0430|\u0438\u0440\u043E|\u045E\u043B\u0438|\u0431\u0430\u0440|\u0438\u0440\u0438|\u0440\u0438\u0448|\u0438\u044F\u0442|\u0430\u043B\u0438| \u0431\u0435| \u049B\u043E|\u0430 \u0448|\u0430\u0440\u043E| \u043A\u0435|\u0438 \u0442|\u0440\u043B\u0430| \u0442\u0435|\u0447\u0430 |\u0440\u0447\u0430|\u0430\u0440\u0447|\u0430 \u045E| \u0448\u0443|\u0442\u0438\u0448|\u043D \u04B3|\u0442\u0433\u0430| \u0441\u0430|\u0430\u0441\u0438| \u0445\u0430|\u0440\u0430\u043A|\u043B\u0438\u043D|\u043E\u043B\u0430|\u0438\u043C\u043E|\u0448\u049B\u0430|\u043B\u0438 | \u0442\u0443|\u0430\u043C\u043B|\u043B\u043B\u0430|\u0441\u0438\u0434|\u043D \u045E| \u0430\u0441|\u043D\u0438\u0434|\u0430 \u0438| \u043A\u0438|\u043D \u0442|\u043D\u0434\u0430|\u043A \u0431|\u0435\u0440\u0430|\u043E\u0448\u049B|\u0441\u0438\u0437|\u043E\u0440 |\u0430 \u043C|\u0440 \u0432|\u0435\u043D\u0433|\u0442\u0435\u043D|\u043C\u0430\u0442|\u043C\u0434\u0430|\u0430\u043C\u0434|\u043B\u0438\u043C|\u0439 \u0442|\u044F\u0442 |\u0438 \u0430|\u0438\u043D\u043E|\u0438\u043B\u0433| \u0442\u043E|\u0442\u043D\u0438|\u0430\u043D\u0430|\u0430\u0441 |\u044D\u043C\u0430| \u044D\u043C|\u0430 \u0451| \u0448\u0430|\u0430\u0448 |\u0430 \u0430|\u0442\u0430\u0440|\u043A\u0430\u0442|\u0430\u043A\u0430|\u0430\u043A | \u0434\u0435|\u0430\u0437\u0430|\u0438\u043B\u043B|\u0441\u0438\u0439| \u0441\u0438| \u0441\u043E|\u0443\u049B\u043B|\u043D \u049B|\u043E\u0434\u0430|\u044A\u043B\u0438|\u0430\u044A\u043B|\u043D\u0438\u043A|\u0430\u0434\u0430| \u043D\u0438|\u0442\u0434\u0430|\u0433\u0438\u043D|\u0443\u043D\u0438|\u0441\u0438\u0442|\u0430\u0439 |\u049B\u043E\u043D|\u043D \u043E| \u0436\u0430|\u043A\u0438\u043C|\u0435\u0447 |\u04B3\u0435\u0447| \u04B3\u0435|\u045E\u0437\u0438|\u043B\u0430\u043A|\u043A\u0435\u0440|\u0438\u043A\u043B|\u043B\u043B\u0438|\u0443\u0440 |\u0437\u0430\u0440|\u0448\u043B\u0430|\u0440\u0438\u0433|\u0438\u0440\u043B|\u0434\u0430\u043C|\u043A\u043E\u04B3|\u0438\u043A\u043E|\u0430 \u0434|\u0430\u043C |\u043D \u0432|\u0440\u0442\u0438|\u0442\u0438\u0431|\u0442\u0430\u043B| \u0438\u0448|\u0447\u0443\u043D|\u0443\u0447\u0443| \u0443\u0447|\u0441\u043B\u0430|\u0430 \u0443|\u0440\u0438\u043D|\u0441\u043E\u0441|\u0430\u0441\u043E| \u0443\u043D|\u043D\u0430 | \u043A\u0430|\u043C\u0443\u04B3|\u0434\u0438\u0433|\u0447 \u043A|\u0430\u0441\u043B|\u043B\u043C\u0430|\u0440\u0430 |\u0431\u0443 |\u0445\u0430\u043B|\u045E\u043B\u0433|\u0438 \u043A|\u0435\u043A\u043B|\u0440 \u0434|\u049B\u0430\u0442|\u0430\u0433\u0430|\u0438 \u049B|\u043E\u0438\u0439|\u043C\u0438\u043B| \u043C\u0438|\u049B\u0430 |\u0438 \u0441|\u0436\u0438\u043D| \u0436\u0438|\u0441\u0438\u043D|\u0440\u043E\u0440|\u0430 \u0432|\u043B\u0430\u0434|\u0430 \u043E|\u0442\u043B\u0438|\u043C\u0438\u044F|\u043D \u0438|\u0430\u0431 |\u0442\u0438\u0440|\u0437 \u043C|\u0434\u0430\u0432|\u0440\u0433\u0430|\u0430\u0433\u0438|\u0430 \u043A|\u043D\u043B\u0430|\u0430\u049B\u0442|\u0432\u0430\u049B|\u0430\u0440\u0442|\u0430\u0451\u0442|\u043B\u0430\u0431", azj: " \u0432\u04D9|\u0432\u04D9 |\u04D9\u0440 |\u0438\u0440 | \u04BB\u04D9| \u0431\u0438| \u04BB\u04AF| \u043E\u043B|\u04AF\u0433\u0443|\u04BB\u04AF\u0433|\u0433\u0443\u0433|\u043D\u0430 |\u0438\u043D |\u043B\u0430\u0440|\u04BB\u04D9\u0440|\u0434\u04D9 | \u0448\u04D9|\u0431\u0438\u0440|\u043B\u04D9\u0440|\u043B\u0438\u043A|\u043C\u0430\u043B|\u0440 \u0431|\u043B\u043C\u0430|\u0440 \u04BB| \u0442\u04D9|\u04D9\u0445\u0441|\u0448\u04D9\u0445|\u04D9\u043D |\u0434\u0438\u0440|\u0443\u0433\u0443|\u0443\u043D\u0430|\u0430\u043D |\u0430\u043B\u0438|\u0430 \u043C| \u043C\u0430|\u0438\u043A\u0434|\u0438\u043D\u0438|\u0440 \u0448|\u0434\u04D9\u043D|\u0430\u0440 |\u0438\u043B\u04D9|\u0433\u0443\u043D|\u0430\u0433 |\u0430\u0441\u044B| \u0458\u0430|\u043C\u04D9\u043A|\u0458\u04D9\u0442| \u043C\u04D9| \u043C\u04AF|\u043A\u0434\u0438|\u04D9\u0441\u0438|\u04D9\u043A |\u0438\u043B\u043C|\u043D\u0438\u043D|\u043D\u0434\u04D9|\u043E\u043B\u043C|\u04D9\u0442\u0438|\u04D9 \u0458|\u0441\u0438\u043D|\u0445\u0441 |\u043D\u0434\u0430|\u043B\u043C\u04D9|\u0458\u0458\u04D9|\u0438 \u0432| \u0433\u0430| \u0430\u0437|\u043E\u043B\u0443|\u0438\u0458\u0458|\u0458\u0430 |\u0438\u043D\u0434|\u0437\u0430\u0434|\u0433\u043B\u0430|\u04AF\u043D |\u043D\u0438 |\u043B\u04D9 |\u0442\u0438\u043D|\u043D \u043C|\u0430\u0437\u0430|\u0430\u0440\u044B|\u04D9\u0442 |\u043D \u0442|\u043C\u0430\u0433|\u043B\u0443\u043D|\u043B\u044B\u0433|\u04D9 \u0431|\u0443\u043D |\u043D\u0443\u043D|\u0433 \u0432|\u043D \u04BB|\u0434\u0430\u043D|\u044B\u043D | \u0435\u0442|\u0442\u043C\u04D9|\u04D9\u0440\u04D9| \u04E9\u0437|\u0434\u0430 |\u04D9 \u0432| \u043E\u043D|\u04D9 \u0430|\u044B\u043D\u0430|\u044B\u043D\u044B|\u0431\u0438\u043B|\u0430 \u0431|\u0441\u044B |\u0438\u043B |\u04D9\u043C\u0438|\u0430\u0440\u0430|\u0441\u0438 | \u0434\u0438|\u04D9 \u043C|\u04D9\u0440\u0438|\u0440\u043B\u04D9| \u0432\u0430|\u04D9 \u04BB|\u0435\u0442\u043C|\u044B\u0493\u044B|\u0430\u043C\u0430|\u0434\u043B\u044B|\u0430\u0434\u043B|\u0440\u0438\u043D|\u0431\u04D9\u0440|\u0440\u044B\u043D|\u043D \u0438|\u043C\u04AF\u0434|\u043D\u044B\u043D| \u04BB\u0435|\u043C\u0430\u0441|\u0438\u043A |\u043D \u0430|\u0434\u0438\u043B|\u0430\u043B\u044B|\u0438\u0440\u043B|\u04D9\u043B\u04D9|\u04AF\u0434\u0430|\u0441\u044B\u043D|\u044B\u043D\u0434|\u0445\u0441\u0438|\u043B\u0438 |\u04D9 \u0434|\u043D\u04D9 | \u0431\u04D9|\u04D9\u0458\u0430| \u0438\u043D|\u04D9 \u0438|\u043B\u04D9\u0442| \u0441\u04D9|\u043D\u044B | \u0438\u0448|\u0430\u043D\u044B|\u0435\u0447 |\u04BB\u0435\u0447|\u0433 \u04BB|\u0435\u0458\u043D|\u04D9 \u0435|\u0434\u044B\u0440| \u0434\u0430|\u0430\u0441\u0438|\u0440\u044B |\u0438\u0448 |\u0438\u0444\u0430|\u043B\u044B\u0493|\u0438 \u0441|\u0444\u0438\u04D9|\u0430\u0444\u0438|\u0434\u0430\u0444| \u0435\u0434|\u043C\u04D9\u0437|\u0443 \u0432|\u043A\u0438\u043B| \u04BB\u0430|\u043E\u043B\u0430|\u043D \u0432|\u04D9\u043D\u0438|\u044B\u0440 |\u0443\u0433 |\u0443\u043D\u043C| \u0431\u0443| \u0430\u0441|\u0441\u0438\u0430|\u043E\u0441\u0438|\u0441\u043E\u0441|\u0438\u043B\u0438|\u044B\u0434\u044B|\u043B\u044B\u0434|\u043D\u043C\u0430|\u044B\u0433 |\u0438\u043D\u04D9|\u04D9\u0440\u0430|\u0441\u0438\u043B|\u0445\u0438\u043B|\u0430\u0445\u0438|\u0434\u0430\u0445|\u0430\u0434\u04D9|\u043C\u0430\u043D|\u0430 \u04BB|\u04D9 \u043E|\u043E\u043D\u0443|\u0430 \u0433|\u04D9\u0437 | \u043A\u0438|\u0441\u0435\u0447| \u0441\u0435|\u044B \u04BB|\u043C\u0438\u043D|\u043B\u0430\u043D|\u04D9\u0434\u04D9|\u0431\u0443 |\u0440\u0430\u0433|\u043B\u044B |\u044B\u043B\u044B|\u0430\u043B |\u04D9 \u0433|\u0440 \u0432|\u043D\u043B\u0430|\u04BB\u0441\u0438|\u04D9\u04BB\u0441|\u0442\u04D9\u04BB|\u04E9\u0437 |\u0438\u0441\u0442| \u0438\u0441|\u043C\u04D9\u0441| \u04D9\u0441|\u0438\u043D\u0430|\u04D9 \u0442|\u04D9\u0442\u043B|\u0430 \u0432|\u0438\u04D9 |\u043D \u0431|\u0442\u04D9\u0440| \u0442\u0430| \u04B9\u04D9|\u0435\u0434\u0438|\u0430\u043B\u0430|\u043A\u0438\u043C|\u0433\u0443 |\u0438 \u0442|\u0443\u043B\u043C|\u043C\u04D9\u04BB|\u043D \u043E|\u0430\u0458\u0430|\u044B \u043E|\u0438\u0430\u043B| \u0441\u043E|\u0438\u043B\u043B|\u0441\u0438\u0458| \u0434\u04D9|\u0432\u0430\u0440|\u0438\u043D\u0441|\u043C\u0438 |\u0493\u044B |\u043D\u0438\u043A|\u0440 \u0438|\u0430\u0433\u043B|\u043A \u04BB|\u0442\u04D9\u043C|\u0442\u0430\u043C|\u0447\u04AF\u043D|\u04AF\u0447\u04AF| \u04AF\u0447|\u0493\u044B\u043D|\u0441\u0430\u0441|\u04D9\u0441\u0430|\u0437 \u04BB|\u04D9\u043C\u04D9|\u0437\u0430\u043C| \u0437\u0430|\u0441\u0442\u0438|\u0440\u04D9\u0444|\u043D \u0435|\u0440 \u0430|\u0438\u043B\u0434|\u04BB\u04D9\u043C|\u044B\u0433\u043B|\u0458\u0430\u043D|\u043C\u0430\u0458|\u043D \u04D9|\u043C\u04D9\u043D|\u043C\u0438\u043B| \u043C\u0438|\u04D9\u0433\u0438|\u0434\u0438\u043D|\u043D \u0434|\u0442\u04AF\u043D| \u0434\u04E9|\u043C\u0438\u0458|\u043A\u0430\u04BB|\u0438\u043A\u0430| \u043D\u0438|\u0444\u0430\u0434|\u0442\u0438\u0444|\u043B \u043E|\u0441\u04D9\u0440|\u0458\u043D\u0438| \u0435\u0458|\u0430\u043D\u0430|\u043B\u04D9\u043D|\u0430\u043C |\u0440\u0438\u043B|\u0430\u0458\u04D9|\u0430\u0448\u044B", koi: "\u043D\u044B |\u04E7\u043D | \u0431\u044B|\u0434\u0430 | \u043F\u0440|\u043B\u04E7\u043D|\u0440\u0430\u0432| \u043C\u043E|\u043F\u0440\u0430| \u0434\u0430|\u0431\u044B\u0434| \u0432\u0435|\u043E\u0440\u0442|\u043B\u04E7 |\u04E7\u0439 |\u043C\u043E\u0440|\u04E7\u043C |\u0430\u0432\u043E| \u043D\u0435|\u0432\u043E |\u044B\u0434 |\u044B\u0441 |\u043D\u04E7\u0439|\u044B\u043D |\u043C \u043F|\u0434 \u043C|\u044B\u043D\u044B|\u0442\u043D\u044B| \u0430\u0441|\u0442\u04E7\u043C|\u043B\u044C\u043D| \u044D\u043C|\u0432\u0435\u0440|\u0441\u044C |\u044C\u043D\u04E7|\u044D\u043C |\u043D \u044D|\u0442\u043B\u04E7| \u043A\u044B|\u0441\u04E7 | \u043F\u043E|\u0435\u0440\u043C|\u0441\u044C\u04E7|\u0440\u0442\u043B|\u0430\u043B\u044C| \u043A\u04E7|\u044D\u0437 | \u04E7\u0442|\u04E7 \u0432|\u0442\u043E |\u0435\u0442\u043E|\u043D\u0435\u0442|\u044B\u043B\u04E7| \u043A\u043E|\u0442\u0448\u04E7| \u043E\u0442| \u0438 |\u044B \u0441|\u0431\u044B |\u04E7 \u0431|\u0441\u0442\u0432|\u043A\u04E7\u0440| \u0432\u04E7|\u0448\u04E7\u043C|\u043A\u044B\u0442|\u0442\u0430 |\u043D\u0430 |\u0437 \u0432| \u0441\u0435| \u0434\u043E|\u0432\u043E\u043B|\u04E7\u0441 | \u0441\u044B|\u044B \u0430|\u043E\u043B\u0430|\u0440\u043C\u04E7|\u0430\u0441 |\u043E\u0437 | \u043E\u0437| \u0441\u0456|\u0430 \u0441|\u0442\u0432\u043E|\u0441 \u043E| \u0432\u044B|\u043B\u0456\u0441|\u04E7 \u043A|\u044B\u0442\u0448|\u04E7 \u0434|\u0438\u0441 |\u0456\u0441\u044C|\u04E7\u0442\u043D|\u0430\u0441\u044C| \u043E\u043B| \u043D\u0430|\u0430\u0446\u0438| \u044D\u0442|\u0430 \u0432|\u0437\u043B\u04E7|\u0441\u0435\u0442| \u0432\u043E| \u0447\u0443|\u043B\u0430\u0441|\u043B\u0430\u043D|\u043C\u04E7 |\u0442\u044B\u0441|\u0440\u0442\u044B|\u04E7\u0440\u0442|\u044B \u043F|\u04E7\u0442\u043B|\u043E \u0441|\u044D\u0442\u0430|\u0434\u0437 |\u043A\u04E7\u0442|\u04E7\u0434\u043D|\u0432\u043D\u044B| \u043C\u044B|\u043D \u043D|\u0443\u0434\u0436| \u0443\u0434|\u0432\u044B\u043B|\u04E7 \u043C|\u0440\u0442\u0456|\u043E\u0440\u0439|\u0438\u0441\u044C| \u0441\u043E|\u0432\u043E\u044D|\u044B\u0434\u04E7|\u0439 \u043E|\u043A\u043E\u043B| \u0433\u043E|\u0441 \u0441|\u0441\u0441\u0438|\u0441\u044B\u043B|\u044B\u0441\u043B|\u0439\u044B\u043D|\u043A\u0438\u043D|\u043E\u043B\u04E7|\u0442\u04E7\u043D| \u0441\u044C|\u0430\u043D\u0430|\u04E7\u0440 |\u0446\u0438\u044F|\u0430 \u0434|\u04E7\u043C\u04E7| \u0432\u0438|\u0437 \u043A| \u044D\u0437|\u044B \u0431|\u0442\u04E7\u0433|\u04E7\u0442 |\u043C\u04E7\u0434|\u0435\u0441\u0442|\u043E\u0441\u0442|\u04E7\u043D\u044B|\u0442\u0438\u0440|\u043E\u0442\u0438|\u0443\u043A\u04E7|\u0447\u0443\u043A|\u043D \u043F|\u043E\u043D\u0434|\u043F\u043E\u043D|\u0441\u043B\u04E7|\u043A\u0435\u0440| \u043A\u0435| \u043E\u0431|\u0441\u0438\u0441|\u0441\u0443\u0434|\u0430 \u043D|\u0434\u043E\u0440|\u043A\u043E\u043D|\u043D\u0435\u043A|\u043D \u0431|\u043B\u04E7\u0442|\u0441 \u0432|\u0442\u0456 |\u044C\u04E7\u0440|\u0442\u0440\u0430| \u0441\u0442|\u043D\u0430\u043B|\u043E\u043D\u0430|\u043D\u0430\u0446|\u043D \u043A|\u043A\u04E7\u0434|\u04E7\u0433 |\u0441\u043A\u04E7|\u0442\u044C |\u0435\u0442\u04E7|\u0434\u04E7\u0441|\u0431\u044B\u0442|\u0440\u043D\u044B|\u04E7 \u043D|\u0442\u0441\u04E7|\u0440\u0440\u0435|\u0430 \u0431|\u043D\u0434\u0430|\u0441 \u0434|\u0430\u0441\u0441|\u044B \u043A|\u0430\u0441\u043B| \u043B\u043E|\u044C\u043D\u044B|\u0441\u044C\u043D|\u044B \u043C|\u0435\u043A\u0438|\u044B \u0434| \u043C\u04E7|\u044C \u043C|\u044B \u043D|\u044B\u0442\u04E7| \u043C\u0435|\u0440\u0439\u04E7|\u0438\u0430\u043B|\u0439 \u0434|\u0438\u0442\u04E7|\u0430 \u043A|\u04E7\u0441\u044C|\u043C\u04E7\u0441|\u043E\u0432\u043D|\u0437\u044B\u043D|\u0430 \u043F|\u043E\u0442\u0441| \u043B\u0438|\u043E\u043B\u044F|\u04E7 \u0430|\u043E\u0441\u0443|\u04E7\u044F |\u043D\u04E7\u044F|\u0435\u0437\u043B|\u0440\u0435\u0437|\u043C\u0435\u0434|\u0441 \u043C| \u0441\u044D|\u044C \u043A|\u0440\u0439\u044B|\u0430\u043A\u043E|\u0437\u0430\u043A| \u0437\u0430|\u044C\u044B\u043D|\u043D\u043D\u0451|\u043C\u04E7\u043B|\u0443\u043C\u04E7| \u0443\u043C|\u044B \u0443|\u043D \u0432|\u043C \u0434|\u043D \u0441| \u0434\u0437|\u043D \u043E|\u0440\u0430\u043D|\u0441\u0442\u0440|\u043E\u0437\u044C|\u043F\u043E\u0437|\u0437 \u043F|\u043E \u0434|\u0446\u0438\u0430|\u043E\u0446\u0438|\u0441\u043E\u0446|\u0438\u043E\u043D|\u0430 \u043C|\u0435\u0441\u043A|\u0447\u0435\u0441|\u043D\u04E7 |\u0437 \u0434|\u0442\u0441\u044C|\u0431\u04E7\u0440| \u0431\u04E7| \u043E\u0432|\u0432\u0435\u0441|\u043A\u044B\u0434|\u04E7 \u0441|\u0432\u043E\u044B|\u043A\u043E\u0434|\u0442\u043A\u043E|\u04E7\u0442\u043A|\u043E\u043B\u044C|\u0434\u0431\u044B|\u0435\u0434\u0431|\u0441\u044C\u044B|\u0447\u044B\u043D|\u0442\u0447\u044B|\u04E7\u0442\u0447|\u0442\u043B\u0430|\u043C\u04E7\u043D|\u0441\u043B\u0430|\u0439\u04E7\u0437| \u0439\u04E7|\u0442 \u0432|\u044B \u0438|\u0435\u0437 |\u043E \u0432|\u043E\u043D\u044B|\u0439\u04E7 |\u0430\u043D\u043D|\u04E7\u043B\u044C| \u043F\u044B|\u0430\u043D |\u043D\u04E7\u0441|\u043D\u0438\u0442| \u0441\u0443|\u043C \u0441", bel: " \u043F\u0440|\u043F\u0440\u0430| \u0456 |\u0430\u0432\u0430|\u043D\u0430 |\u0440\u0430\u0432| \u043D\u0430| \u043F\u0430|\u043D\u044B |\u0432\u0430 |\u0430\u0431\u043E|\u0446\u044C | \u0430\u0431|\u0430\u0435 | \u043C\u0430|\u0430\u0432\u0435|\u0430\u043D\u043D|\u0430\u0446\u044B|\u0441\u0432\u0430| \u0441\u0432|\u0435 \u043F|\u043B\u044C\u043D| \u0447\u0430|\u043D\u0435 |\u043D\u043D\u044F|\u0430\u043B\u0430|\u0430 \u043D|\u0430\u0439 |\u043B\u0430\u0432|\u0447\u0430\u043B| \u043A\u043E| \u0430\u0434| \u043D\u0435|\u0433\u0430 |\u043E\u0436\u043D|\u043A\u043E\u0436|\u0432\u0435\u043A|\u043D\u044F | \u044F\u043A|\u0436\u043D\u044B|\u044B \u0447|\u043C\u0430\u0435|\u0430 \u043F|\u0430\u0433\u0430|\u0431\u043E |\u0435\u043A |\u0430 \u0430|\u0446\u0430 |\u0446\u0446\u0430| \u045E | \u0437\u0430|\u044B\u0445 |\u043F\u0430\u0432|\u0430 \u0441|\u0433\u043E |\u0432\u0456\u043D|\u0434\u043D\u0430|\u0431\u043E\u0434|\u043C\u0456 |\u0432\u0430\u0431|\u0432\u0430\u043D|\u0430\u043C | \u0432\u044B| \u0441\u0430| \u0434\u0430|\u0441\u0442\u0430|\u0430\u0432\u0456|\u043D\u043D\u0435|\u0430\u0441\u0446|\u043D\u0430\u0439|\u0446\u044B\u044F|\u043D\u0430\u0433|\u0430\u0440\u0430|\u0456 \u043D|\u043A \u043C|\u044F\u0433\u043E| \u044F\u0433|\u044C\u043D\u0430|\u043F\u0440\u044B|\u0430\u0446\u044C|\u0456 \u043F|\u043E\u0434\u043D|\u0441\u0442\u0432|\u0430\u043C\u0430|\u043D\u044B\u0445| \u0431\u044B|\u0442\u0432\u0430|\u0434\u0437\u0435|\u0430\u043B\u044C| \u0440\u0430|\u043D\u0456 |\u0456 \u0441|\u0456 \u0430|\u044B\u0446\u044C|\u0430 \u0431|\u0435\u043D\u043D|\u043B\u0435\u043D|\u0446\u0456 |\u043E\u045E\u043D|\u044B\u043C |\u0440\u0430\u0446|\u0456\u043D\u043D|\u0456\u0445 | \u0430\u0441| \u0442\u0430|\u0442\u043E |\u043D\u0430\u0441|\u044F\u043A\u0456| \u0434\u0437|\u0447\u044B\u043D|\u043E\u043B\u044C|\u0456 \u0434|\u0430\u0432\u043E|\u0430\u0434 | \u043D\u0456|\u0441\u0446\u0456|\u044B\u043C\u0456|\u043D\u044B\u043C|\u0431\u044B\u0446|\u044F \u043F|\u044C\u043D\u044B|\u044B\u044F |\u0430\u0440\u043E|\u0430\u043D\u0430|\u0456\u043D\u0430|\u0456 \u0456|\u0440\u0430\u0434| \u0433\u0440|\u043B\u044F |\u045E\u043B\u0435|\u043E \u043F|\u0430 \u045E|\u0440\u044B\u043C|\u043F\u0430\u0434|\u044B\u0456 | \u0456\u043D|\u0430\u043C\u0456|\u0434\u0437\u044F|\u0440\u0430\u043C|\u0446\u044B\u0456|\u0430\u0431\u0430|\u0430 \u0456|\u0434\u0443 |\u0436\u043D\u0430|\u045E\u043D\u0430|\u043D\u0430\u043B|\u043D\u0430\u0446|\u0440\u044B |\u044D\u0442\u0430|\u0433\u044D\u0442| \u0433\u044D|\u043D\u0435\u043D|\u0434\u0430 |\u0430\u0445 |\u0433\u0440\u0430|\u043A\u0430\u0446|\u0443\u043A\u0430|\u0430 \u0437|\u043A\u0456 |\u0430\u0434\u0441|\u045E \u0456|\u043D\u0441\u0442|\u044D\u043D\u043D|\u044F \u0430|\u043D\u043D\u0456|\u043E\u0434\u0443|\u0430 \u0440|\u043D\u043D\u0430|\u0445\u043E\u0434|\u043D\u0430\u043D|\u043F\u0435\u0440|\u0445 \u043F| \u0443 |\u0430\u0434\u0437|\u0456 \u0440|\u043C\u0430\u0434|\u043C \u043F|\u0435 \u043C|\u0430\u0434\u0443|\u0434\u0441\u0442|\u0434\u043B\u044F| \u0434\u043B|\u043E\u045E |\u043D\u0430\u0435|\u0456 \u043C|\u0430\u043A\u043E| \u043A\u0430|\u044B \u045E|\u0431\u0430\u0440|\u0435 \u0430|\u0430\u0446\u0446|\u0443\u044E |\u044B\u0446\u0446|\u0441\u0430\u043C|\u044F\u045E\u043B|\u0430\u043B\u0435|\u0440\u043E\u0434|\u0440\u0430\u0431| \u043F\u0435|\u0448\u0442\u043E| \u045E\u0441|\u0430\u0434\u043D| \u0441\u0443|\u0440\u043E\u045E| \u0440\u043E|\u0434\u0443\u043A|\u043B\u044E\u0431|\u044C \u0441| \u0448\u043B|\u0440\u0430\u0437|\u043D\u0430\u0432|\u0437\u043D\u0430|\u0432\u043E\u043B|\u0443\u0434\u0437|\u0430\u0434\u0430|\u0436\u044B\u0446|\u0447\u043D\u0430|\u0432\u0435 |\u0430 \u0442|\u0430\u0441\u043D|\u0441\u0430\u0446|\u0435\u0440\u0430| \u0440\u044D|\u044F\u043A\u043E|\u043A\u043B\u0430|\u0430\u043D\u044B| \u0448\u0442|\u044C \u0443|\u0430\u044E\u0446|\u043D\u0430\u0440| \u0443\u0441|\u0441\u043E\u0431|\u0430\u0441\u043E|\u043F\u0430\u043C|\u044F \u045E|\u0430\u0432\u044F|\u0447\u044D\u043D|\u0432\u043E\u045E|\u0442\u0430\u043A|\u043D\u0443 |\u044E \u0430|\u044C \u043F|\u0437\u0430\u043A|\u043A\u0430\u0440|\u0435 \u0456|\u044C \u0430|\u0431\u0435\u0441|\u0456\u044F |\u043A\u0456\u044F|\u0445 \u0456|\u0437\u0430\u0431|\u0430\u0441\u0430|\u0456\u043C |\u0436\u0430\u0432|\u0456 \u0437|\u043B\u0435\u0436|\u0442\u0430\u043D|\u0430\u0445\u043E|\u044F\u043B\u044C|\u044B\u044F\u043B|\u043E \u0441|\u044F\u043D\u0430|\u043A\u0430\u043D|\u0430\u043A\u0430|\u0456\u043D\u0448|\u0430\u043B\u0456|\u0432\u044B | \u043C\u043E|\u043D\u0430\u0445|\u044F \u044F|\u043C \u043D|\u043E\u0433\u0430| \u0431\u0435|\u0439 \u0434|\u043E \u0430| \u0441\u0442|\u0435\u043D\u044B|\u0456 \u045E|\u0430 \u0434|\u0435\u0441\u043F|\u0448\u043B\u044E|\u0446\u0446\u044F|\u044B \u0456|\u044B\u0441\u0442|\u0440\u044B\u0441|\u043B\u044E\u0447|\u043A\u043B\u044E|\u0442\u0430\u0446|\u0443\u043B\u044C|\u044B\u043D\u0441|\u0430\u0447\u044B|\u0441\u043F\u0440| \u0441\u043F|\u0430\u045E |\u044B\u043C\u0430|\u0430\u0440\u044B|\u043A\u0430\u043C|\u0435 \u045E|\u0456 \u043A|\u043A\u043E\u043D", bul: " \u043D\u0430|\u043D\u0430 | \u043F\u0440|\u0442\u043E | \u0438 |\u0440\u0430\u0432|\u0434\u0430 | \u0434\u0430|\u043F\u0440\u0430|\u0441\u0442\u0432|\u0432\u0430 |\u0430 \u0441|\u0430 \u043F|\u0432\u043E |\u043D\u043E |\u0438\u0442\u0435|\u0442\u0430 |\u043E \u0438|\u0435\u043D\u0438| \u0437\u0430|\u043D\u0435 | \u043D\u0435| \u0432\u0441|\u0432\u0430\u043D|\u0430\u0432\u043E|\u0430 \u043D|\u043E\u0442\u043E|\u0435 \u043D|\u043E \u043D|\u0430 \u0438|\u043A\u0438 |\u0438\u0435 |\u0442\u0435 |\u043D\u0438 |\u0438\u043C\u0430| \u0438\u043C|\u043B\u0438 |\u0438\u043B\u0438|\u0438\u044F | \u043F\u043E|\u043E\u0432\u0435|\u0430\u043D\u0435|\u0447\u043E\u0432|\u043C\u0430 | \u0447\u043E|\u0438 \u0447|\u0430 \u0434|\u043D\u0438\u0435|\u0430\u043D\u0438|\u0438 \u0434|\u0435\u0441\u0442| \u0438\u043B|\u0432\u0435\u043A|\u0432\u0441\u0435| \u043E\u0431|\u0435\u043A |\u0435\u043A\u0438|\u0441\u0435\u043A|\u0430\u0432\u0430|\u0442\u0432\u043E|\u0441\u0432\u043E| \u0441\u0432|\u0432\u043E\u0442|\u0430 \u0432|\u0438 \u0441|\u043E\u0441\u0442| \u0440\u0430|\u043E\u0432\u0430|\u0430 \u043E|\u0435 \u0438|\u0432\u0430\u0442|\u0438 \u043D|\u0435 \u043F|\u043A \u0438|\u0430 \u0431| \u0432 |\u0438 \u043F|\u043B\u043D\u043E|\u043E \u0434| \u0441\u0435| \u0431\u044A|\u043F\u0440\u0438|\u0440\u0430\u0437|\u0435\u0442\u043E|\u044A\u0434\u0435|\u0431\u044A\u0434|\u0430\u0442\u0430| \u043A\u043E| \u0442\u0440| \u043E\u0441|\u0430\u0446\u0438| \u0441\u044A|\u0431\u043E\u0434|\u043E\u0431\u043E|\u0432\u043E\u0431|\u0430\u0442 |\u0437\u0430 |\u0442\u0435\u043B| \u0435 |\u043E \u0441|\u0434\u0435 |\u043E \u043F|\u0435\u043D |\u0438 \u0432| \u043E\u0442|\u0441\u0435 |\u043D\u0438\u044F|\u0440\u0430\u043D|\u0430\u043B\u043D| \u0434\u0435|\u0431\u0440\u0430|\u0435\u0433\u043E|\u043D\u0435\u0433| \u0438\u0437|\u043E\u0442 |\u044F\u0442\u0430|\u043A\u0430\u043A|\u043E\u0434\u0438|\u0435 \u0441|\u0438 \u0438|\u0434\u0435\u043D|\u043F\u0440\u0435|\u0431\u0432\u0430|\u044F\u0431\u0432|\u0440\u044F\u0431|\u0442\u0440\u044F|\u043D\u0438\u0442| \u043A\u0430|\u044F\u0432\u0430|\u043F\u0440\u043E|\u0441\u0442 |\u0430 \u0437|\u0433\u043E\u0432|\u0432\u0435\u043D|\u0442\u0432\u0435|\u043E \u043E|\u0430 \u0440|\u0430\u043A\u0432|\u043E \u0432|\u0438 \u0437|\u0440\u0435\u0434|\u043D\u043E\u0441|\u0438\u044F\u0442|\u0435 \u0434|\u0449\u0435\u0441|\u043D\u043E\u0432| \u043D\u0438|\u0446\u0438\u044F| \u0434\u043E|\u0439\u0441\u0442|\u043E \u0442|\u0435 \u0442|\u0440\u0436\u0430|\u044A\u0440\u0436|\u0434\u044A\u0440|\u0435\u043D\u043E|\u043F\u043E\u043B| \u0441 |\u043E\u0431\u0440|\u0442\u0432\u0430|\u043D\u043E\u0442|\u0440\u0435\u0441|\u0435\u0439\u0441|\u0438 \u043E|\u0435 \u0432|\u043A\u043E\u0439|\u043E\u0431\u0449|\u043B\u0435\u043D|\u043E\u043D\u0430|\u043D\u0430\u0446|\u0438\u0447\u0435|\u0435\u0437 |\u0431\u0435\u0437| \u0431\u0435|\u0435\u0436\u0434|\u0443\u0432\u0430|\u0432\u0438\u0442|\u0440\u0438 |\u0437\u0430\u043A|\u0438 \u043A| \u043B\u0438|\u0430 \u0435|\u043F\u043E\u0434|\u0435\u043B\u0438|\u043D\u0438\u043A|\u0441\u0438 |\u0435 \u043E|\u0430 \u0442|\u0438 \u0440|\u0442 \u0441|\u043A\u0430 |\u043E\u0435\u0442|\u0435\u043B\u043D|\u043D\u0435\u043D|\u043E\u0439 |\u0433\u0440\u0430|\u0436\u0435\u043D|\u0434\u0440\u0443| \u0440\u0435|\u0430 \u043A|\u0441\u043D\u043E|\u043E\u0441\u043D|\u043B\u0438\u0447|\u0437\u0438 | \u0442\u0430|\u0441\u0430 |\u043D\u0441\u0442|\u0430\u0432\u043D|\u0447\u043A\u0438|\u0438\u0447\u043A|\u0441\u0438\u0447|\u0432\u0441\u0438|\u043B\u044E\u0447|\u043A\u043B\u044E|\u0434\u043D\u043E| \u043C\u043E|\u0435\u043C\u0435|\u0442\u044A\u043F|\u0430 \u0443|\u0438\u0437\u0432|\u0442\u0432\u0438|\u0434\u0435\u0439|\u044F \u043D|\u043A\u0440\u0438|\u0430\u0442\u043E|\u043E \u0440|\u0439 \u043D|\u0438\u043A\u043E|\u0438\u0447\u043D|\u0436\u0430\u0432| \u0434\u044A| \u0442\u043E|\u0431\u0449\u0435| \u0441\u043E|\u043B\u0438\u0442|\u0442 \u043D| \u0441\u0438|\u0442 \u0438|\u0432\u043D\u0438|\u043E\u0434\u043D|\u0436\u0434\u0430|\u0437\u043E\u0432|\u0430\u0437\u043E|\u0443\u0447\u0430| \u0433\u0440|\u043A\u043E\u0435|\u0441\u0442\u044A|\u0432\u043E\u043B|\u043B\u043D\u0438|\u0441\u0440\u0435| \u0441\u0440|\u043A\u0432\u0430|\u043A\u043E\u043D|\u0442\u043D\u043E|\u0430\u043A\u0430|\u0438 \u0443|\u043A\u043E |\u0433\u0430\u043D|\u043E\u0434\u0430|\u0447\u0435\u043D|\u043B\u0441\u0442|\u0435\u043B\u0441|\u0441\u0442\u0440| \u043A\u044A|\u0441\u0442\u0430|\u0440\u043E\u0434|\u043D\u0430\u0440|\u0438 \u043C|\u0438\u0430\u043B|\u043D\u0430\u043B|\u0440\u0443\u0433| \u0434\u0440|\u0447\u0435\u0441|\u0434\u0438 | \u0441\u0430| \u0442\u0435|\u0441\u0442\u043E|\u0434\u043E\u0441|\u0440\u0430\u0436|\u0440\u0435\u0437|\u0447\u0440\u0435|\u0433\u0430\u0442|\u0435\u043E\u0431|\u0430 \u043C|\u043E \u0435|\u0438\u043D\u0435|\u0430\u0441\u0442|\u043E\u0432\u043E|\u0447\u043D\u043E|\u0430\u0432\u0435|\u043C\u0443 | \u043C\u0443|\u0430\u043D\u043E|\u0438\u0442\u0430|\u0438\u043C\u0438|\u0430\u043A\u043E|\u043D\u0430\u043A|\u043B\u0430\u0433|\u043E\u0432\u0438|\u0430\u043D ", kaz: "\u043D\u0435 | \u049B\u04B1|\u0435\u043D |\u04B1\u049B\u044B| \u0431\u0430| \u049B\u0430|\u049B\u04B1\u049B|\u044B\u049B |\u0493\u0430 | \u0436\u04D9|\u04D9\u043D\u0435|\u0436\u04D9\u043D| \u043D\u0435| \u0431\u043E|\u0434\u0435 |\u0434\u0430\u043C|\u0430\u0434\u0430|\u0430 \u049B|\u0442\u0430\u0440|\u044B\u043D\u0430| \u0430\u0434|\u044B\u043B\u044B| \u04D9\u0440|\u044B\u04A3 |\u0430\u043D |\u0456\u043D |\u049B\u044B\u043B|\u0430\u0440 |\u0435\u043C\u0435|\u043D\u0430 |\u0440 \u0430|\u043B\u044B\u049B|\u0443\u0493\u0430|\u0430\u043B\u0430|\u044B\u049B\u0442| \u04E9\u0437|\u043C\u0435\u0441|\u04D9\u0440 | \u0436\u0430|\u043C\u0435\u043D|\u044B\u0493\u044B|\u043B\u044B | \u0434\u0435|\u049B\u0442\u0430|\u043D\u044B\u04A3|\u043D \u049B|\u0493\u0430\u043D|\u0456\u043D\u0435|\u0431\u0430\u0441|\u0430\u0440\u044B| \u043C\u0435| \u049B\u043E|\u0435\u043A\u0435|\u044B\u043D |\u0434\u0430 |\u0435 \u049B|\u0434\u044B |\u0430\u0441\u044B|\u0441\u0435 |\u0435\u0441\u0435|\u0430\u043C |\u0431\u043E\u043B|\u0430\u043D\u0434|\u043D\u0435\u043C| \u0431\u0456|\u0430\u0440\u0430|\u044B \u0431|\u0441\u0442\u0430|\u0442\u0430\u043D|\u043D\u0434\u044B|\u043D \u0431|\u0456\u04A3 |\u0435 \u0431|\u0456\u043B\u0456|\u0442\u0438\u0456| \u0442\u0438|\u0431\u0430\u0440|\u0493\u044B |\u043D\u0434\u0435|\u0435\u0442\u0442|\u0438\u0456\u0441|\u049B\u044B\u0493|\u0456\u0441 |\u043B\u0430\u0440|\u0433\u0435 |\u044B \u0442|\u0456\u043D\u0434|\u0456\u043A |\u0431\u0456\u0440| \u0431\u0435| \u043A\u0435|\u0430\u043B\u0443|\u0435 \u0430|\u0430\u043B\u044B|\u043B\u0443\u044B|\u0430 \u0436|\u0435\u0440\u0456|\u043E\u043B\u044B| \u0442\u0435|\u049B\u044B\u049B|\u043D \u043A| \u0442\u0430|\u043D \u0436|\u0493\u044B\u043D|\u0442\u0442\u0456|\u0456\u043D\u0456|\u0442\u044B\u043D| \u0435\u0440|\u043D\u0434\u0430|\u0456\u043C | \u0441\u0430|\u0435 \u0436|\u0430\u0442\u044B| \u0430\u0440|\u0440\u0493\u0430|\u0435\u0442\u0456|\u0430\u043D\u0430|\u044B \u04D9|\u0443\u044B\u043D|\u043B\u0493\u0430|\u04E9\u0437\u0456|\u043E\u0441\u0442|\u0435\u0433\u0456|\u0442\u0456\u043A|\u049B\u0430 |\u0441\u049B\u0430|\u0440\u044B\u043D|\u043A\u0456\u043D|\u043B\u0443\u0493|\u04A3 \u049B|\u043D\u0456\u04A3|\u0443\u044B |\u0431\u043E\u0441|\u0430\u0441\u049B|\u049B\u0430\u0440|\u0434\u044B\u049B|\u043D\u0430\u043D|\u043C\u044B\u0441|\u043C\u043D\u044B|\u0430\u043C\u043D|\u044B \u043C|\u0430\u0439\u0434|\u043A\u0435 | \u0436\u0435|\u0437\u0456\u043D|\u0440\u0434\u0435|\u0440\u0456\u043D|\u0435 \u0442|\u0433\u0435\u043D|\u044B\u043F |\u0440\u044B |\u0442\u0456 |\u0441\u044B\u043D|\u049B\u0430\u043C|\u0434\u0435\u043D|\u0456 \u0431|\u0433\u0456\u0437|\u0440\u0430\u043B|\u0435 \u04E9|\u043B\u0430\u043D|\u0441\u044B |\u0430\u043C\u0430|\u0442\u0442\u0430|\u0442\u044B\u049B|\u0431\u0435\u0440|\u0434\u0456 |\u0431\u0456\u043B|\u0440\u043A\u0456|\u04E9\u0437 |\u0437\u0434\u0435|\u043A\u0435\u0442|\u049B\u043E\u0440|\u0434\u0430\u0439|\u0443\u0433\u0435|\u044B \u0435|\u044B\u043D\u0434|\u043D\u0435\u0433|\u043E\u043D\u044B|\u0435\u0439 |\u043C\u0435\u0442|\u0430\u043D\u044B|\u0430 \u0442|\u0436\u0430\u0441|\u0430\u0443\u044B|\u043B\u0433\u0435|\u0430\u0441\u0430|\u0435\u0433\u0435|\u0434\u0430\u0440|\u0440\u0443 |\u0430\u0443 |\u0435\u0440\u043A|\u044B \u0436|\u0440\u044B\u043B| \u0442\u043E|\u043D \u043D|\u0435 \u043D|\u0442\u0456\u043D|\u0456\u0440 |\u0441\u0456\u0437|\u0442\u0435\u0440|\u043B\u043C\u0430|\u0456 \u0442|\u043A\u0456\u043C| \u0430\u043B|\u0440 \u043C|\u043B\u0456\u043A| \u043C\u04AF|\u0435 \u043C|\u0442\u04AF\u0440| \u0442\u04AF|\u043A\u0435\u043B|\u043B\u044B\u043F|\u0435\u04A3 |\u0442\u0435\u04A3|\u0440\u043B\u044B|\u043B\u0456\u043C|\u0440\u0434\u044B|\u0430\u0440\u0434|\u0430\u0442\u0442|\u0441 \u0431|\u044B\u0440\u044B|\u0441\u044B\u0437|\u044B\u0441 |\u0435\u043B\u0433|\u0434\u0430\u043B|\u0439\u0434\u0430|\u043E\u0440\u0493|\u0440\u049B\u044B|\u0430\u0440\u049B| \u0436\u04AF|\u0442\u0430\u043B|\u044B\u043B\u043C|\u0430 \u0431|\u0456\u0433\u0456|\u043B\u0434\u0435|\u0456\u0437 |\u049B\u0442\u044B| \u0435\u0448|\u0434\u0435\u0439|\u0430\u0439 |\u0436\u0430\u0493|\u043A\u0442\u0456|\u0456\u043A\u0442|\u0433\u0456\u043D| \u04D9\u043B|\u0442\u0442\u044B|\u04B1\u043B\u0442| \u04B1\u043B|\u0435 \u0434|\u044B\u043D\u044B|\u043B\u0456\u043D|\u0440 \u0431|\u0435\u043B\u0435|\u043A\u04B1\u049B| \u043A\u04B1|\u0430\u043C\u0434|\u043C \u0431| \u0435\u0442|\u043E\u0493\u0430|\u049B\u04B1\u0440| \u043A\u04E9|\u0430\u0493\u0430|\u0442\u043E\u043B|\u0448\u0456\u043D|\u0430\u0439\u044B| \u049B\u044B|\u049B\u0430\u043B|\u0436\u0435\u043A|\u0456 \u043D|\u0435\u0441 |\u0430\u0493\u044B|\u0435 \u043E|\u0435\u043B\u0456| \u0435\u043B|\u043D \u0435|\u0437\u0456 |\u0448\u043A\u0456|\u0435\u0448\u043A|\u043E\u043B\u0443|\u0446\u0438\u044F|\u043C\u0430\u0441|\u0493\u0434\u0430|\u0430\u0493\u0434|\u043B\u0442\u0442|\u0456\u043C\u0434|\u043D\u044B\u043C| \u0434\u0430|\u0430 \u0434|\u04D9\u0441\u0456|\u0441 \u04D9|\u049B\u0430\u0442|\u0456\u0440\u0456| \u0441\u043E|\u04A3 \u0431|\u0430\u0437\u0430|\u043C\u0434\u0430|\u0430\u0439\u043B| \u0430\u0441|\u0493\u0430\u043C|\u049B\u043E\u0493" }, Arabic: { arb: " \u0627\u0644|\u064A\u0629 |\u0641\u064A | \u0641\u064A|\u0627\u0644\u062D| \u0623\u0648|\u0623\u0648 | \u0648\u0627|\u0648\u0627\u0644|\u062D\u0642 |\u0629 \u0627|\u0644\u062D\u0642|\u0627\u0644\u062A|\u0643\u0644 |\u0627\u0644\u0645|\u0644\u0643\u0644| \u0644\u0643|\u0644\u0649 |\u0642 \u0641|\u062A\u0647 |\u0648 \u0627|\u0629 \u0648|\u0634\u062E\u0635|\u0629 \u0644|\u0627\u062A |\u0627\u0644\u0623|\u064A \u0623|\u0648\u0646 | \u0634\u062E|\u0645 \u0627|\u0623\u064A | \u0623\u064A|\u0627\u0646 |\u0623\u0646 |\u0645\u0629 |\u064A \u0627|\u0627\u0644\u0627|\u0644\u0627 |\u0647\u0627 |\u0627\u0621 | \u0623\u0646| \u0639\u0644|\u062E\u0635 |\u0646 \u0627| \u0644\u0644|\u062F \u0627|\u0645\u0646 |\u0641\u0631\u062F|\u0645\u0627 |\u0627\u0644\u0639|\u062A \u0627|\u062D\u0631\u064A|\u0639\u0644\u0649|\u0644 \u0641|\u0631\u062F |\u0644 \u0634| \u0644\u0627|\u0631\u064A\u0629| \u0625\u0644|\u0629 \u0623|\u0627 \u0627|\u0646 \u064A| \u0648\u0644|\u0627 \u0644|\u0627 \u064A| \u0641\u0631| \u0645\u0646|\u0629 \u0645|\u0627\u0644\u0642|\u062C\u062A\u0645|\u0646 \u0623|\u0642 \u0627|\u0627\u0644\u0625| \u062D\u0631|\u0644\u0647 |\u0647 \u0644|\u0627\u064A\u0629|\u0644\u0643 |\u0647 \u0627| \u062F\u0648|\u062F\u0629 |\u0627\u064B |\u064A\u0646 |\u0647 \u0648|\u0644\u0629 |\u064A \u062D| \u0639\u0646|\u0645\u0627\u0639|\u064A \u062A|\u0630\u0627 | \u062D\u0642|\u0642\u0648\u0642|\u062D\u0642\u0648|\u060C \u0648|\u0646 \u062A|\u0645\u0639 |\u0635 \u0627|\u0627\u0645 |\u062F \u0623| \u0643\u0627|\u0647\u0630\u0627|\u0627\u0644\u0648| \u0625\u0646|\u0645\u0644 |\u0627\u0645\u0629|\u0639 \u0627|\u0625\u0644\u0649|\u0629 \u0639|\u0645\u0627\u064A|\u062D\u0645\u0627|\u0646 \u0648|\u0644\u062A\u0639| \u0648\u064A|\u064A\u0631 |\u0646\u0648\u0646|\u064A \u0648|\u0627\u0633\u064A|\u0627\u0644\u062C| \u0647\u0630|\u0646\u0633\u0627|\u0648\u0642 |\u062A\u0631\u0627|\u0639\u064A\u0629|\u0647 \u0623| \u0644\u0647|\u0633\u064A\u0629| \u064A\u062C| \u0628\u0627|\u062F\u0648\u0644|\u0627\u0646\u0648|\u0642\u0627\u0646|\u0644\u0642\u0627|\u0629 \u0628|\u0629 \u062A|\u062A\u0645\u0627|\u0627\u0644\u062F|\u064A\u0627\u062A|\u0639 \u0628|\u0633\u0627\u0646|\u0625\u0646\u0633|\u0647\u0645 |\u0639\u0644\u064A| \u0645\u062A|\u0644\u0645\u062C|\u0630\u0644\u0643|\u0639\u0645\u0644|\u0644\u0623\u0633|\u0648\u0632 |\u062C\u0648\u0632|\u064A\u062C\u0648|\u0628\u0627\u0644|\u063A\u064A\u0631|\u0643 \u0627|\u0643\u0627\u0646|\u0633\u0627\u0633|\u0623\u0633\u0627|\u062F\u0645 |\u0644\u0627\u062F|\u0627\u0639\u064A|\u0627\u0644\u0631|\u062A\u0645\u064A|\u062F\u0648\u0646|\u062A\u0645\u062A|\u0644\u062A\u0645| \u064A\u0639|\u0644\u064A\u0647|\u0633\u0627\u0648|\u0627\u062C\u062A|\u064A \u0645|\u0644\u0639\u0627|\u0644\u062C\u0645|\u062A\u0639\u0644|\u0631 \u0648|\u062A\u0645\u0639|\u0645\u062C\u062A| \u0645\u0639|\u064A\u0647 |\u0649 \u0623|\u0641\u064A\u0647|\u0649 \u0627| \u0643\u0644|\u0644\u0627\u062A|\u0645\u0644\u0627|\u0648\u062F |\u0627\u0646\u062A|\u0627\u0644\u0641|\u064A\u0647\u0627|\u064A \u0625|\u062A\u064A |\u0627\u0644\u0628|\u0644\u064A |\u0642\u062F\u0645|\u0627\u0644 |\u0627\u062F |\u0644 \u0627|\u064A\u0632 |\u064A\u064A\u0632|\u0645\u064A\u064A| \u062A\u0645|\u0644\u062D\u0631|\u062A\u0639 |\u0645\u062A\u0639|\u0627 \u0628|\u0639\u0627\u0645|\u0627 \u0648|\u0642 \u0648|\u0631\u0627\u0645|\u0644 \u0644|\u0644\u0627\u062C|\u0631\u0627 |\u0627\u0644\u0634| \u0648\u0625|\u064A\u0645 |\u0644\u064A\u0645|\u0634\u062A\u0631|\u0627 \u062D|\u0648\u0627\u062C|\u0644\u0632\u0648|\u0648\u0644 |\u0627 \u0641|\u0648\u0644\u0629|\u0644\u062D\u0645|\u0623\u0633\u0631| \u0630\u0644|\u0647 \u0641|\u0627\u062A\u0647|\u0645\u0633\u0627|\u0644\u0645\u0633| \u062A\u0639|\u0639\u0646 |\u0647 \u0639|\u0648\u0644\u0647|\u064A\u062A\u0647|\u0646 \u0644|\u0631\u0629 | \u0648\u0633|\u0627\u0629 |\u064A\u062F | \u062A\u062D| \u0645\u0633|\u064A \u064A|\u0644\u062A\u064A|\u0639\u0629 |\u0648\u0644\u064A|\u0644\u062F\u0648| \u0623\u0633| \u0648\u0641|\u0644 \u0648|\u0623\u064A\u0629|\u0646\u064A |\u0627\u0644\u0633|\u0644\u0627\u0646|\u0644\u0625\u0639|\u0629 \u0641|\u0631\u064A\u0627|\u0644 \u0625|\u0645 \u0628|\u0627\u0645\u0644|\u0643\u0631\u0627|\u062A\u0633\u0627|\u0645\u064A\u0639|\u062C\u0645\u064A| \u062C\u0645|\u0623\u0648\u0644|\u0628\u064A\u0629|\u0639\u064A\u0634|\u062A\u062D\u0642|\u0627\u062F\u0629|\u0633 \u0627| \u0645\u0645|\u0645\u0639\u064A|\u062C\u0645\u0627|\u0639\u0627\u062A|\u0627\u0639\u0627|\u0627\u0631\u0633|\u0645\u0627\u0631|\u0645\u0645\u0627|\u0645 \u0648|\u0631\u0627\u0643|\u0627\u0634\u062A|\u0627\u0644\u0637|\u0627\u062C |\u0632\u0648\u0627|\u0627\u0644\u0632| \u0648\u0645|\u062D\u062F\u0629|\u062A\u062D\u062F|\u0644\u0645\u062A|\u0645\u0645 |\u0644\u0623\u0645|\u062F\u0647 |\u0628\u0644\u0627| \u0628\u0644|\u0627\u0631 |\u064A\u0627\u0631|\u062A\u064A\u0627|\u062E\u062A\u064A|\u0627\u062E\u062A|\u0646 \u0645| \u0645\u0631", urd: "\u0648\u0631 | \u0627\u0648|\u0627\u0648\u0631|\u06A9\u06D2 | \u06A9\u06D2| \u06A9\u06CC| \u06A9\u0627|\u06CC\u06BA | \u062D\u0642|\u06A9\u06CC |\u06A9\u0627 | \u06A9\u0648|\u0626\u06D2 |\u06D2 \u06A9|\u06CC\u0627 |\u0633\u06D2 |\u06A9\u0648 |\u0634\u062E\u0635| \u0634\u062E|\u0646\u06D2 | \u0627\u0633| \u06C1\u06D2|\u0645\u06CC\u06BA|\u062D\u0642 | \u06C1\u0648| \u0645\u06CC|\u062E\u0635 |\u06D2 \u0627| \u062C\u0627|\u0627\u0633 | \u0633\u06D2| \u06CC\u0627|\u06C1\u0631 |\u06CC \u0627| \u06A9\u0631| \u06C1\u0631|\u06D2\u06D4 |\u0633\u06CC |\u06C1\u06CC\u06BA|\u0627 \u062D|\u0635 \u06A9|\u0648\u06BA |\u06D2 \u0645| \u0627\u0646|\u0631 \u0634|\u06D4 \u06C1|\u0627\u0626\u06D2|\u0632\u0627\u062F|\u0622\u0632\u0627| \u0622\u0632|\u0627\u0645 |\u0631 \u0627|\u0642 \u06C1|\u0627\u062F\u06CC|\u062C\u0627\u0626|\u06BA \u06A9|\u06C1\u06D2\u06D4|\u0645 \u06A9| \u06A9\u0633|\u0627 \u062C|\u06CC \u06A9|\u0633 \u06A9|\u06A9\u0633\u06CC| \u067E\u0631|\u06D2 \u06AF|\u06C1\u06D2 |\u0627\u0631 |\u062A \u06A9|\u062F\u06CC |\u067E\u0631 |\u0648 \u0627| \u062D\u0627| \u062C\u0648| \u06C1\u06CC|\u0627\u0646 |\u06CC \u062C|\u0631\u06CC | \u0646\u06C1| \u0645\u0639|\u062C\u0648 |\u0644 \u06A9|\u06CC \u062A|\u0646 \u06A9|\u06A9\u0631\u0646|\u0626\u06CC |\u0644 \u06C1|\u062A\u06CC |\u06C1\u0648 |\u06C1 \u0627| \u0627\u06CC|\u0635\u0644 |\u0627\u0635\u0644|\u062D\u0627\u0635|\u0631\u0646\u06D2|\u06CC \u0634|\u0646\u06C1 |\u06D4 \u0627|\u06BA\u06D4 |\u06CC\u06BA\u06D4|\u0631 \u06A9|\u0631 \u0645| \u0645\u0644|\u0648\u06C1 |\u0645\u0639\u0627|\u0631\u06D2 |\u06BA \u0627|\u0646\u06C1\u06CC|\u06D2 \u06C1|\u06D2 \u0628|\u0627\u06CC\u0633|\u06D2 \u0644| \u062A\u0639| \u06AF\u0627|\u06CC\u062A |\u06CC \u062D|\u0627 \u0627|\u06CC \u0645|\u0627\u067E\u0646| \u0627\u067E|\u06A9\u06CC\u0627|\u0645\u06CC |\u06CC \u0633| \u062C\u0633|\u06C1 \u06A9|\u0646\u06CC |\u0627\u0634\u0631|\u0639\u0627\u0634| \u062F\u0648|\u0644\u0626\u06D2| \u0644\u0626|\u0627\u0646\u06C1|\u0648\u0642 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0645\u0644 | \u0642\u0627|\u06A9\u06C1 | \u06AF\u06CC|\u0631 \u0628|\u06C1 \u0645| \u0648\u06C1| \u0628\u0646|\u06CC \u0628|\u0645\u0644\u06A9|\u062C\u0633 |\u0627\u06D4 |\u0631\u06CC\u0642|\u0631 \u0646|\u06D2 \u062C|\u0627\u062F |\u0627\u062A |\u06AF\u06CC |\u062F \u06A9|\u06D2 \u062D|\u062F\u0627\u0631|\u0631 \u06C1|\u06AF\u0627\u06D4|\u0642\u0648\u0645| \u0642\u0648|\u06D2\u060C |\u0627 \u0633|\u062F\u0648\u0633|\u0631 \u067E| \u0648 | \u0634\u0627|\u06CC \u0622|\u06BA \u0645|\u0642 \u062D| \u067E\u0648| \u0628\u0627|\u062E\u0644\u0627|\u0627\u0646\u06D2|\u06CC\u0645 |\u0644\u06CC\u0645|\u0648 \u062A|\u0648\u0646 | \u06A9\u06C1|\u06CC\u060C |\u06D4 \u06A9|\u0627 \u067E|\u0646 \u0627|\u0644\u06A9 |\u0639\u0644\u0627|\u0627 \u0645|\u0642 \u06A9|\u0627\u0626\u06CC|\u0648\u0633\u0631|\u06CC \u06C1|\u0648\u0626\u06CC|\u06CC\u0631 |\u0627 \u06C1|\u0639\u0644\u06CC|\u0648 \u06AF|\u0648\u0631\u06CC|\u062F\u06AF\u06CC|\u0646\u062F\u06AF|\u0648 \u06A9|\u06CC\u0633\u06D2| \u0645\u0646|\u0627\u0626\u062F|\u0631\u0627\u0626| \u0645\u0631|\u067E\u0648\u0631| \u0637\u0631|\u0648\u0645\u06CC|\u06D2 \u062E|\u0633\u0628 |\u0646\u0648\u0646|\u0627\u0646\u0648|\u0642\u0627\u0646| \u0633\u06A9|\u0648\u0627\u0645|\u06CC\u0646 | \u0631\u06A9|\u062A\u0639\u0644|\u0644\u0627\u0642|\u063A\u06CC\u0631|\u062F\u0627\u0646|\u060C \u0627| \u0628\u06CC| \u0645\u0633|\u06CC\u0648\u06BA|\u0646\u0627 | \u0628\u06BE| \u0628\u0631|\u0631\u062A\u06CC|\u0627\u062F\u0627|\u0627\u0645\u0644|\u06CC\u06C1 | \u06CC\u06C1|\u06C1 \u0648| \u0639\u0627|\u06CC \u067E| \u0628\u0686|\u0627\u0641 |\u0644\u0627\u0641| \u062E\u0644|\u06CC\u06D4 |\u06AF\u06CC\u06D4| \u062F\u06CC|\u06BE\u06CC |\u0628\u06BE\u06CC|\u062F\u06C1 |\u062C\u0627 |\u067E\u0646\u06CC|\u0642\u0648\u0627|\u0627\u0642\u0648|\u0631\u06A9\u06BE|\u06D2 \u06CC| \u0639\u0644|\u06A9\u0648\u0626|\u060C \u0645| \u0686\u0627|\u06D2 \u0633|\u0631 \u0639| \u067E\u06CC|\u0628\u0631\u0627|\u0631 \u0633|\u0631 \u062D|\u0633\u0627\u0646|\u0645 \u0627|\u06A9\u0627\u0645|\u0634\u0631\u062A| \u0631\u0627|\u0634\u0627\u0645|\u0645\u0646 |\u0632\u0646\u062F| \u0632\u0646|\u0628 \u06A9|\u062A \u0645|\u0627\u06C1 |\u0627\u0631\u06CC|\u0633 \u0645|\u0631 \u062C| \u0645\u062D|\u0648\u0631\u0627|\u06D2 \u067E|\u0637\u0631\u06CC|\u06C1\u0648\u06BA|\u0627\u0644 |\u06BA \u0633|\u06CC \u0646|\u06A9\u0631\u06D2| \u0645\u0642|\u062A \u0633|\u062A\u062D\u0641| \u062A\u062D|\u0648\u06D4 |\u06C1\u0648\u06D4|\u0628\u0646\u062F| \u0627\u0642|\u062F \u06C1| \u0627\u0645|\u0627\u0645\u06CC|\u0627\u0644\u0627|\u0644\u062A |\u0634\u0631\u06D2|\u06D2 \u0639|\u0627 \u06A9|\u0641\u0631\u06CC", pes: " \u0648 | \u062D\u0642| \u0628\u0627|\u0646\u062F |\u0631\u062F |\u062F\u0627\u0631| \u062F\u0627|\u06A9\u0647 |\u0647\u0631 | \u062F\u0631| \u06A9\u0647|\u062F\u0631 | \u0647\u0631|\u0631 \u06A9|\u062D\u0642 |\u062F \u0647|\u0627\u0632 |\u06CC\u062A | \u0627\u0632|\u06CC\u0627 |\u06A9\u0633 |\u0648\u062F |\u0627\u0631\u062F| \u06CC\u0627| \u06A9\u0633|\u0627\u06CC |\u062F \u0648| \u0628\u0631| \u062E\u0648|\u0642 \u062F|\u0628\u0627\u0634|\u0634\u062F |\u062F \u06A9|\u0627\u0631 |\u062F \u0628| \u0631\u0627|\u0647 \u0628|\u0627\u0646 |\u0622\u0632\u0627| \u0622\u0632|\u0631\u0627 |\u0627\u0634\u062F|\u06CC \u0648|\u0647 \u0627|\u06CC\u0646 |\u06CC\u062F |\u0632\u0627\u062F|\u0633 \u062D|\u062E\u0648\u062F|\u06CC \u0628| \u0627\u0633|\u062F\u0647 |\u062F\u06CC |\u0648\u0631 |\u0627\u06CC\u062F|\u0647 \u062F|\u0631\u06CC |\u0648 \u0627|\u062A\u0645\u0627|\u0627\u062A | \u0646\u0645|\u06CC \u06A9|\u0627\u062F\u06CC|\u0646\u0647 |\u0631\u0627\u06CC|\u062F \u0627| \u0622\u0646|\u0627\u0633\u062A|\u0631 \u0627|\u0631 \u0645| \u0627\u062C|\u0645\u0627\u06CC|\u0648\u0646 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0648 \u0645| \u0627\u0646|\u0627\u0646\u0647| \u0647\u0645|\u0648\u0642 |\u0627\u06CC\u062A| \u0634\u0648|\u06CC \u0627| \u0645\u0648| \u0628\u06CC|\u0628\u0627 | \u062A\u0627|\u0648\u0631\u062F|\u0627\u0646\u0648|\u0633\u062A |\u0648\u0627\u0646|\u0628\u0631\u0627|\u0627\u0645 |\u0634\u0648\u062F|\u0622\u0646 |\u062C\u062A\u0645|\u06CC \u06CC| \u06A9\u0646|\u0631 \u0628|\u06A9\u0646\u062F| \u0645\u0631|\u062A \u0645|\u0647\u0627\u06CC|\u062A \u0627| \u0645\u0633|\u06CC\u060C |\u0645\u0627\u0639|\u0627\u062C\u062A|\u062A\u0648\u0627|\u06CC\u06AF\u0631|\u0648 \u0628|\u062F\u0627\u0646|\u062A \u0648|\u0627 \u0645| \u0628\u062F|\u0639\u06CC |\u06A9\u0627\u0631| \u0645\u0646|\u0645\u0648\u0631| \u0645\u0642|\u06CC \u062F| \u0632\u0646|\u06CC \u0645|\u0646 \u0628|\u0631 \u062E|\u0627\u0647 |\u0627 \u0628|\u0627\u0631\u06CC|\u062F \u0622|\u0645\u0644 | \u0628\u0647|\u0627\u0639\u06CC|\u062F\u060C |\u062F\u06CC\u06AF|\u062A \u0628|\u0628\u0627\u06CC|\u0627\u06CC\u0646| \u0645\u06CC|\u0646 \u0648|\u0642 \u0645| \u0639\u0645| \u06A9\u0627|\u0646 \u0627|\u0648 \u0622| \u062D\u0645|\u0646\u0648\u0646|\u0647 \u0648|\u0648 \u062F|\u062F \u0634| \u0627\u06CC|\u0634\u0648\u0631|\u06A9\u0634\u0648| \u06A9\u0634|\u0644\u06CC |\u0646\u06CC |\u0647 \u0645|\u0628\u0639\u06CC|\u0631 \u0634|\u06CC\u0647 | \u0645\u0644|\u0645\u06CC\u062A|\u06CC \u0631|\u0631\u0646\u062F| \u0634\u0631|\u0645\u06CC |\u0648\u06CC |\u0633\u0627\u0648|\u0642\u0627\u0646| \u0642\u0627|\u0645\u0642\u0627|\u0627\u0648 | \u0627\u0648|\u062F \u0645|\u06AF\u06CC |\u0646\u0645\u06CC| \u0627\u062D| \u0645\u062D|\u0645\u06CC\u0646|\u0626\u06CC |\u0627\u062F\u0627| \u0622\u0645|\u062E\u0648\u0627|\u06AF\u0631\u062F| \u06AF\u0631|\u0645\u0646\u062F| \u0634\u062F|\u0627\u0626\u06CC| \u062F\u06CC|\u0632 \u062D|\u0647\u06CC\u0686| \u0647\u06CC|\u0627\u062F\u0647| \u0645\u062A|\u0646\u0645\u0627|\u062A \u06A9|\u0631\u0627\u0646| \u0628\u0645|\u0646 \u062D|\u0631 \u062A|\u062D\u0645\u0627|\u0627\u0631\u0646|\u0645\u0633\u0627|\u062F\u06AF\u06CC|\u0648\u0645\u06CC|\u0646 \u062A|\u0645\u0644\u0644|\u0628\u0631 |\u0647\u062F |\u0648\u0627\u0647|\u0628\u0647\u0631| \u0627\u0639|\u200C\u0647\u0627|\u0642 \u0648|\u060C \u0627|\u0639\u06CC\u062A|\u06CC\u062A\u0648|\u0627 \u0631|\u0646 \u0645| \u0639\u0642|\u0647\u0645\u0647|\u0627 \u0647|\u0632\u0634 |\u0648\u0632\u0634|\u0645\u0648\u0632|\u0622\u0645\u0648|\u0627\u0646\u062A|\u062A\u06CC |\u062C\u0627\u0645|\u0645\u0648\u0645|\u0639\u0645\u0648|\u062A\u062E\u0627| \u0641\u0631|\u0637\u0648\u0631|\u062F \u062F|\u0647 \u062D|\u0631\u062F\u0627|\u0627\u0648\u06CC|\u0646\u0648\u0627|\u0627\u0646\u06CC|\u0631\u0627\u0631| \u0645\u062C|\u06CC \u0646|\u062D\u062F\u06CC|\u0627\u062D\u062F|\u0646\u062F\u06AF|\u0632\u0646\u062F|\u0634\u062E\u0635| \u0634\u062E|\u200C\u0645\u0646|\u0647\u200C\u0645|\u0631\u0647\u200C|\u0647\u0631\u0647|\u0634\u062F\u0647|\u0639 \u0627|\u0648 \u0647|\u0627\u0633\u06CC|\u0647\u0654 |\u06CC\u062F\u0647|\u0639\u0642\u06CC|\u0627 \u0627|\u0645\u0647 | \u0628\u0634|\u0627\u062F |\u062F\u06CC\u0647|\u0627 \u062F|\u062F\u0648\u0627|\u06CC \u062D|\u0627\u0628\u0639|\u06CC \u062A|\u062E\u0627\u0628|\u0646\u062A\u062E|\u0631\u0648\u0631|\u0648 \u0631|\u0634\u0631\u0627| \u062E\u0627|\u0654\u0645\u06CC|\u0627\u0654\u0645|\u062A\u0627\u0654|\u0627\u064B |\u0627\u0645\u0644|\u0644\u0647 |\u062F \u0631|\u0627\u0633\u0627|\u062E\u0648\u0631|\u0628\u0644 |\u0627\u0628\u0644|\u0642\u0627\u0628|\u06CC\u06A9 |\u0633\u0627\u0646|\u0642\u0631\u0627|\u0627 \u0646|\u062E\u0635\u06CC| \u0627\u0645| \u0628\u0648|\u06CC\u0631 |\u0627\u0644\u0645|\u0628\u06CC\u0646|\u0627\u0647\u062F|\u062A\u0628\u0639| \u062A\u0628", zlm: " \u062F\u0627|\u0627\u0646 |\u062F\u0627\u0646| \u0628\u0631| \u0627\u0648|\u0646 \u0633|\u0631\u06A0 |\u062F\u0627\u0644| \u06A4\u0631|\u0644\u0647 |\u0643\u0646 | \u0643\u06A4|\u0646 \u0627|\u0646 \u0643|\u0646 \u062F|\u064A\u06A0 | \u064A\u06A0|\u06A4\u062F |\u062D\u0642 |\u0648\u0631\u06A0|\u062A\u064A\u0627|\u064A\u0627\u06A4|\u0627\u0631\u0627|\u0643\u06A4\u062F|\u0627\u0648\u0631|\u0631\u062D\u0642|\u0628\u0631\u062D|\u0627\u0644\u0647|\u0623\u0646 |\u0648\u0644\u064A| \u0627\u062A|\u0627\u062A\u0627|\u06A0\u0646 |\u062A\u0627\u0648|\u0627\u06A4 |\u0633\u062A\u064A|\u0644\u064A\u0647|\u0627\u0648 | \u0633\u062A|\u06A4 \u0627|\u064A\u0647 |\u0631\u0627 |\u0647 \u0628|\u0647 \u062F|\u0639\u062F\u0627| \u0639\u062F|\u0646 \u06A4|\u0646 \u0628|\u064A\u0646 | \u062A\u0631|\u0642 \u0643|\u0646 \u064A|\u064A\u0628\u0633|\u0628\u064A\u0628| \u062A\u064A| \u0633\u0648| \u0643\u0628| \u0633\u0627|\u0646 \u0645|\u0646 \u062A|\u0644\u0645 |\u0627\u0644\u0645|\u062F \u0633|\u06A0 \u0639| \u0645\u0646|\u0686\u0627\u0631|\u062F \u06A4|\u0631\u0646 |\u0633\u0627\u0645| \u0645\u0627|\u06BD \u0633|\u0646\u060C | \u0628\u0648| \u0627\u064A|\u0646\u062F\u0642| \u062D\u0642|\u06AC\u0627\u0631|\u0646\u06AC\u0627|\u0628\u0648\u0644|\u0633\u0628\u0627| \u0633\u0628|\u0627\u062A\u0648|\u0627 \u0633|\u0642\u0644\u0647| \u06A4\u0645| \u0645\u0645|\u0648\u0627\u0646|\u0633\u0686\u0627| \u0633\u0686| \u0643\u0633|\u0627 \u0628|\u0633\u0646 | \u0633\u0645|\u06A4\u0631\u0644|\u0627\u0648\u0646|\u0646\u06BD |\u062A\u0646 | \u0628\u0627|\u0647\u0646 |\u0633\u064A\u0627|\u0627 \u06A4|\u0627\u0631\u06A0|\u0628\u0627\u0631|\u06A4\u0627 |\u0628\u0633\u0646|\u0643\u0628\u064A|\u0627\u0645 |\u064A\u0646\u062F|\u064A \u062F|\u0627\u06AC\u064A|\u06A0 \u0628|\u0628\u0627\u06AC|\u064A \u0627|\u0645\u0627\u0646| \u0644\u0627| \u062F |\u062F\u0642\u0644|\u0647\u0646\u062F| \u0647\u0646|\u062A \u062F|\u0627\u062F\u064A|\u0648\u064A\u0646|\u064A\u0643\u0646| \u0646\u06AC|\u060C \u0643|\u0646\u0662 | \u06A4\u0648|\u0628\u06A0\u0633|\u0642\u0662 |\u0627\u062A |\u0627\u0648\u0644|\u0627\u0643\u0646|\u0627\u06BD | \u0633\u0633|\u0648\u0646 |\u0627\u062F | \u0643\u0648|\u0627\u064A\u0646|\u062F\u06A0\u0646| \u062F\u06A0|\u0627\u0626\u0646|\u062A\u0648 |\u062A\u064A |\u0646 \u0647|\u06AC\u064A |\u0633\u064A |\u0642 \u0645|\u0648\u06A0\u0646|\u062F\u0648\u06A0|\u0646\u062F\u0648|\u0644\u064A\u0646|\u0631\u0644\u064A|\u0646\u062A\u0648|\u06A4\u0648\u0646|\u0648\u0627\u062A|\u064A\u0627\u062F|\u062A\u064A\u0643|\u06A0\u0633\u0627|\u06A4\u0645\u0628|\u062A\u0631\u0645|\u0662 \u062F|\u062D\u0642\u0662|\u0648\u0627 |\u0644\u0648\u0627|\u0645\u0627\u0633|\u0648\u0642 |\u0647 \u0645|\u0644 \u062F| \u0645\u0644|\u0648\u0646\u062F| \u06A4\u06A0|\u0627\u060C |\u060C \u062A|\u0644\u0627\u0626|\u0627\u064A |\u0645\u06A4\u0648|\u064A\u0643 |\u064A \u0643|\u0631\u0627\u062A|\u0645\u0631\u0627| \u0628\u064A|\u0633\u0645\u0648|\u0648 \u0643|\u060C \u062F|\u0633\u0648\u0627|\u06A0 \u0645|\u06A0 \u0633|\u06A0\u0662 |\u06A4\u0631\u064A|\u064A\u0631\u064A|\u062F\u064A\u0631|\u0627 \u0627|\u0627\u0633\u0627|\u06A4\u0662 |\u062A\u0627 |\u0633\u0648\u0633|\u060C \u0633|\u062C\u0648\u0627|\u06A0 \u062A|\u0631\u0623\u0646| \u0627\u0646|\u0633\u0623\u0646|\u0631\u064A\u0643|\u064A\u0623\u0646|\u0631\u064A | \u062F\u0631|\u0627\u0645\u0631|\u0643\u0631\u062C| \u06A4\u0644|\u0627 \u062F|\u062C\u0631\u0646|\u0627\u062C\u0631|\u0627\u0631\u0643|\u0644\u0627\u062C|\u062F \u0643|\u0648\u0627\u0631|\u0628\u0631\u0633|\u0648\u0646\u062A|\u0645\u0646\u0648|\u0633\u0627\u0644|\u064A\u0646\u06A0|\u062F\u06A0\u0662|\u0646\u062F\u06A0| \u0645\u06A0|\u0627\u06A4\u0627|\u0633\u0633\u064A|\u0633\u0627\u0633|\u0646\u0646 |\u06A4\u0648\u0644|\u0627\u06AC\u0627| \u0628\u06A0| \u0633\u06A4|\u0645\u0628\u064A| \u0627\u06A4|\u06A0 \u0627|\u0627\u0631\u0623|\u06A4\u0631\u0627|\u064A \u0633|\u0628\u0633 | \u062F\u0644|\u0627 \u0645|\u0645\u0648\u0627|\u06A4\u0644\u0627|\u0645\u0644\u0627|\u06A4\u0631\u0643|\u0643\u0648\u0631|\u0648\u0628\u0648| \u0643\u0623|\u0648\u0643\u0646|\u0623\u0646\u06BD|\u0643\u0633\u0627|\u06A0\u06AC\u0648|\u0627\u062F\u06A4|\u0647\u0627\u062F|\u0631\u0647\u0627|\u062A\u0631\u0647|\u0643\u0648\u0645|\u062A\u0648\u0642|\u0645 \u0633|\u06A0 \u062F|\u062F\u064A | \u062F\u064A|\u0662 \u0633|\u0646\u062F\u064A|\u0627\u0633 |\u0627\u062F\u0627|\u0628\u0648\u0627| \u062F\u0628|\u06A0 \u06A4|\u06BD\u060C |\u0627\u06A4\u0662|\u0631\u062A\u0627|\u0627\u0644 |\u064A\u0627\u0644|\u0648\u0633\u064A| \u0643\u062A|\u0623\u0646\u060C|\u0646\u06A4\u0627|\u062A\u0646\u06A4| \u062A\u0646|\u0645 \u06A4|\u0631\u0633\u0627|\u0645\u0645\u06A4| \u0645\u0631|\u0646 \u062D| \u0643\u0645|\u0646\u0633\u064A|\u062C\u0623\u0646|\u0624\u064A |\u0644\u0624\u064A|\u0627\u0644\u0624|\u0644\u0627\u0644|\u0643\u06A4\u0631|\u0643\u062A |\u0631\u0643\u062A|\u0634\u0627\u0631|\u0645\u0634\u0627| \u0645\u0634|\u062C\u0627\u062F|\u0631\u06AC\u0627", skr: "\u062A\u06D2 |\u0627\u06BA |\u062F\u06CC |\u062F\u06D2 | \u06D4 |\u0648\u06BA | \u062A\u06D2| \u062F\u0627| \u06A9\u0648|\u06A9\u0648\u06BA| \u062D\u0642|\u062F\u0627 | \u062F\u06CC|\u06CC\u0627\u06BA| \u062F\u06D2|\u06CC\u06BA |\u06D2 \u0627|\u0634\u062E\u0635| \u0634\u062E|\u06C1\u0631 |\u06D2 \u06D4|\u0627\u0635\u0644| \u062D\u0627|\u062D\u0642 |\u062E\u0635 | \u06C1\u0631|\u0635\u0644 |\u062D\u0627\u0635|\u06C1\u06D2 | \u06C1\u06D2|\u0627\u0644 |\u0642 \u062D|\u0644 \u06C1| \u0646\u0627| \u06A9\u06CC| \u0648\u0686|\u06D4 \u06C1|\u06CC\u0627 |\u0633\u06CC |\u06D2 \u0645| \u0627\u0648|\u0648\u0686 |\u0627\u062A\u06D2|\u06A9\u06CC\u062A|\u0627 \u062D|\u0627\u062F\u06CC|\u0646\u0627\u0644|\u0635 \u06A9| \u0627\u062A|\u0631 \u0634|\u06C1\u06CC\u06BA| \u06CC\u0627|\u06BA \u062F| \u0627\u06CC|\u06CC\u0633\u06CC| \u0645\u0644|\u0648\u0646\u062F|\u06A9\u06C1\u06CC| \u06A9\u06C1|\u06CC \u062A|\u0632\u0627\u062F|\u0627\u0632\u0627| \u0627\u0632|\u0646\u062F\u06D2|\u06BA \u06A9|\u0627\u0631 | \u0648\u06CC|\u06D2 \u06A9|\u0626\u06D2 | \u0627\u0646|\u06BB \u062F|\u0646\u06C1 | \u06A9\u0631|\u0627\u0648\u0646|\u06D2 \u0648|\u062F\u06CC\u0627|\u06CC \u062F|\u06BA \u0627|\u06D2 \u0628|\u0648\u06CC\u0633|\u0648\u06BB |\u06CC \u0646| \u06C1\u0648|\u062A\u06CC |\u06CC \u06D4| \u0646\u06C1|\u06CC \u0627|\u06CC\u0646\u062F|\u0648 \u0684|\u0622\u067E\u06BB| \u0622\u067E|\u0627 \u0648|\u06D2 \u062C| \u06A9\u0646|\u06D2 \u0646|\u0646\u062F\u06CC|\u062A \u062F|\u06D2 \u062D|\u06CC \u06A9|\u0626\u06CC |\u0645\u0644\u06A9|\u06CC\u062A\u06D2|\u0646 \u06D4|\u062A\u06BE\u06CC| \u062A\u06BE|\u0648\u0646 |\u06BA \u0645| \u0628\u0686|\u06D4 \u0627|\u0646\u0648\u06BA|\u06A9\u0646\u0648|\u06BB\u06D2 |\u0627\u0631\u06CC|\u0627 \u0627|\u06D2 \u06C1|\u0644 \u062A| \u0684\u0626|\u0648\u0642 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0644 \u06A9|\u062E\u0644\u0627| \u062C\u06CC|\u0644\u06A9 |\u062F\u0627\u0631|\u06CC\u062A |\u06A9\u0631\u06BB|\u0627\u0646\u06C1|\u06A9\u0648 |\u06C1\u06A9\u0648| \u06C1\u06A9|\u0646 \u0627|\u0645\u0644 | \u0648\u0633|\u06BA \u0648|\u067E\u06BB\u06D2| \u062A\u0639|\u06CC \u0645|\u0627\u0641 |\u06D2 \u062E|\u0646\u0648\u0646|\u0642\u0646\u0648| \u0642\u0646| \u0644\u0648|\u06D4 \u06A9|\u0631\u06CC |\u0644\u06D2 |\u062A\u0627 |\u06CC\u062A\u0627| \u0642\u0648| \u0686\u0627|\u06C1\u0627\u06BA|\u0684\u0626\u06D2|\u0642 \u062A|\u0627\u06CC\u06C1|\u0631\u06BB |\u06D2 \u062F|\u0631 \u06A9| \u0648 |\u0644\u0627\u0641| \u062E\u0644| \u062C\u0648|\u06CC \u0648|\u0627\u0648 |\u06C1\u0648 |\u0626\u0648 |\u0686\u0626\u0648|\u0628\u0686\u0626|\u06CC\u0631 |\u06C1\u0648\u0648|\u0627 \u0645|\u06CC \u062C|\u0627\u0644\u0627|\u06CC\u0646 | \u062C\u0627|\u0645\u06CC |\u0646\u06C1\u0627|\u0627\u0646 |\u0627\u062A |\u0633\u06B1\u062F| \u0633\u06B1|\u06CC\u0628 |\u0633\u06CC\u0628|\u0648\u0633\u06CC| \u0634\u0627|\u0628 \u062F|\u06CC\u0648\u06BB|\u0627\u0645 |\u0627\u0648\u06BB|\u06D2 \u062A|\u06BB \u06A9| \u0645\u0637|\u06BA \u062A| \u0648\u0646| \u06A9\u0645|\u0646 \u062F|\u0631\u06A9\u06BE| \u0631\u06A9|\u06BB\u06CC |\u06BA \u0622|\u0631\u06CC\u0627|\u06CC \u06C1|\u0627\u062F |\u06CC\u0627\u062F|\u0639\u0644\u0627|\u0631 \u06C1|\u06BA \u0633|\u06CC \u062D|\u062C\u06BE\u06CC|\u0627\u0626\u062F|\u06C1\u06CC |\u0644\u0648\u06A9| \u068B\u0648| \u0633\u0645| \u0633\u0627| \u0645\u0646| \u0645\u0639|\u0628\u0642 |\u0627\u0628\u0642|\u0637\u0627\u0628|\u0645\u0637\u0627|\u06BE\u06CC\u0648|\u06BA \u0641|\u06C1\u0646 | \u06C1\u0646|\u062C\u0648 |\u0648 \u06A9|\u06BA \u0634|\u0631 \u062A|\u06A9\u0627\u0631|\u0645 \u062F|\u06BE\u06CC\u0627| \u067B\u0627|\u063A\u06CC\u0631|\u0648 \u0644|\u0648\u0626\u06CC|\u062C\u06CC\u0627|\u0648\u0627\u0645|\u0642\u0648\u0627|\u06CC \u0633| \u062C\u06BE|\u0644 \u0627|\u0642\u0648\u0645| \u0633\u06CC|\u0630\u06C1\u0628|\u0645\u0630\u06C1| \u0645\u0630|\u0627\u06D2 | \u0627\u06D2|\u062F\u0646 |\u0627 \u062A|\u0633\u0627\u0646|\u0646\u0633\u0627|\u0627\u0646\u0633|\u0631\u06D2 |\u0644\u06CC\u0645|\u0639\u0644\u06CC|\u062A\u0639\u0644|\u0627\u0645\u0644|\u06C1 \u062F|\u06D2 \u0631|\u062F \u0627|\u06A9\u0645 |\u06CC\u06C1\u0648|\u0641\u0627\u0626|\u0686 \u0627| \u06A9\u06BE|\u0645 \u062A|\u0631\u0627 |\u0648\u0631\u0627|\u067E\u0648\u0631|\u06BA \u0628|\u0642 \u062F|\u06D2 \u0642|\u0648\u06A9\u0648|\u06A9\u06BE\u06CC|\u0627 \u06A9|\u0648 \u062F|\u06D2 \u0630|\u067E\u06BB\u06CC|\u0628\u0646\u062F| \u0641\u0631|\u06A9\u0648\u0626|\u0627\u0645\u06CC|\u06CC \u06CC|\u0627\u0626\u06CC|\u0644\u0627\u0642|\u0627\u06CC\u06BA|\u06C1 \u0627| \u0646\u0638|\u0633\u0645\u0627|\u0648\u0645\u06CC|\u06CC\u060C |\u06D2 \u0633|\u062A \u0648|\u06BE\u06CC\u0646|\u06D2 \u0639|\u06CC\u0645 |\u0633\u06C1\u0648| \u0633\u06C1", pbu: " \u062F | \u0627\u0648|\u0627\u0648 |\u067E\u0647 | \u067E\u0647|\u064A\u06D4 | \u062D\u0642|\u0686\u06D0 | \u0686\u06D0|\u0631\u0647 |\u064A \u0627|\u06D0 \u062F| \u0647\u0631|\u0646\u0647 |\u0647\u0631 |\u062D\u0642 | \u0685\u0648|\u0648\u06A9 |\u0685\u0648\u06A9|\u0648 \u0627|\u0647 \u062F|\u0647 \u0627|\u06D4 \u0647|\u0647 \u0648| \u0634\u064A| \u0644\u0631|\u064A \u0686|\u0648 \u062F|\u0631\u064A |\u0644\u0631\u064A|\u0642 \u0644| \u06A9\u069A|\u0648\u064A |\u069A\u06D0 |\u06A9\u069A\u06D0|\u0647 \u06A9|\u063A\u0647 |\u0644\u0648 |\u0631 \u0685|\u0633\u0631\u0647| \u0633\u0631|\u0647 \u067E| \u067C\u0648|\u0648 \u067E|\u0644\u0647 |\u064A\u062A |\u067C\u0648\u0644|\u064A\u0627 |\u06A9\u0693\u064A| \u06A9\u0648|\u062E\u0647 |\u064A\u060C |\u062F\u064A | \u0644\u0647| \u0627\u0632|\u062F \u0645| \u0647\u064A| \u0648\u0627| \u064A\u0627| \u0685\u062E|\u0627\u0632\u0627|\u062F \u0627|\u0648\u0644\u0648|\u0647 \u062A|\u0685\u062E\u0647| \u06A9\u0693|\u0648\u0644 |\u0647\u063A\u0647|\u0647 \u0634|\u064A \u062F| \u0647\u063A|\u06A9\u0648\u0644|\u0632\u0627\u062F|\u0646\u0648 | \u0648\u064A|\u0648 \u064A|\u0647 \u0628|\u0634\u064A\u06D4|\u062F\u06D0 |\u064A\u0648 | \u062F\u064A|\u062A\u0647 |\u062E\u067E\u0644| \u067E\u0631|\u0627\u062F |\u062F \u062F|\u06A9 \u062D| \u062A\u0648|\u0647 \u0645|\u06AB\u0647 |\u0647 \u0647|\u0642\u0648\u0642|\u062D\u0642\u0648|\u0648 \u0645|\u0647 \u062D|\u062F \u0647| \u062A\u0631| \u0645\u0633|\u0634\u064A | \u0646\u0647|\u0693\u064A\u06D4|\u0646\u064A |\u062F \u067E|\u0648\u0627\u062F|\u06D0 \u067E|\u0627\u062F\u064A|\u0648\u0644\u0646| \u064A\u0648|\u062F \u062A|\u0648\u0646\u0648|\u0648\u06AB\u0647|\u064A \u0648|\u0644\u064A | \u062F\u0627|\u064A\u062F | \u0628\u0627|\u062A\u0648\u0646| \u062E\u067E|\u064A \u067E|\u062A\u0648\u06AB|\u0627\u0631 |\u0627\u0646\u062F|\u064A\u0648\u0627|\u06D0 \u0648|\u062F\u0627\u0646| \u0628\u0631|\u0693\u064A | \u0639\u0645|\u0627\u0646\u0647| \u062F\u0647|\u064A\u0685 |\u0647\u064A\u0685|\u0627\u0645\u064A|\u0644\u0646\u064A|\u0628\u0639\u064A|\u0689\u0648\u0644| \u0689\u0648|\u0647 \u0644|\u0627\u064A\u062F|\u0628\u0627\u064A|\u0627\u062A\u0648|\u0647 \u06AB| \u062A\u0627|\u067E\u0644 | \u0645\u0644|\u0627\u064A\u062A|\u0648\u0645 |\u0648\u0646 | \u0644\u0627|\u0647\u064A\u0648| \u0634\u0648| \u062F\u063A|\u0645 \u062F|\u062F\u0647 |\u06D0 \u0627|\u0627\u0646 | \u062A\u0647|\u06A9\u0627\u0631|\u062A\u0648 |\u0645\u064A |\u0627\u0631\u0647|\u0627\u0648\u064A|\u0633\u0627\u0648|\u0645\u0633\u0627|\u0646\u0648\u0646|\u062F\u0647\u063A|\u0648 \u062A|\u064A \u0634|\u0627\u0646\u0648| \u0645\u062D|\u064A\u0646 |\u0627\u062E\u0644| \u06AB\u067C|\u0634\u0648\u064A|\u062F\u063A\u0647|\u0648 \u062D|\u0648\u064A\u060C|\u0646\u064A\u0632|\u0633\u064A |\u0627\u0633\u064A|\u0648\u0646\u062F|\u0642\u0648 |\u0648\u0642\u0648|\u0648 \u06A9|\u0648\u0646\u0647|\u0648\u0645\u064A| \u0648\u06A9|\u064A \u062A| \u0627\u0646|\u0642\u0627\u0646|\u0646\u062F\u06D0|\u0648 \u0631|\u06A9 \u062F|\u0647 \u064A|\u0645\u064A\u0646|\u067E\u0631 |\u067C\u0647 |\u0644\u0627\u0645|\u063A\u0648 |\u0647\u063A\u0648|\u062F \u067C|\u0648 \u0647|\u0644 \u062A|\u0644\u06D2 |\u0648\u0644\u06D2|\u0648\u0648\u0646|\u06A9\u064A |\u0631\u0648 |\u0646 \u06A9|\u0645\u0648\u0645|\u0648\u06A9\u0693|\u067E\u0627\u0631|\u0646 \u0634|\u0645\u0646 | \u0646\u0648| \u0648\u0693| \u0642\u0627|\u06D0 \u0686| \u0648\u0633|\u0685 \u0685|\u0634\u062E\u0635| \u0634\u062E|\u0698\u0648\u0646| \u0698\u0648|\u062A\u0631 |\u06AB\u067C\u0647|\u0648 \u0685|\u0647\u0645 |\u0639\u0642\u064A|\u0631\u062A\u0647| \u0648\u0631|\u0628\u0644 | \u0628\u0644|\u0648 \u0628|\u0647 \u0633|\u069A\u0648\u0648| \u069A\u0648| \u06A9\u0627|\u06D0 \u06A9|\u0648 \u0633|\u0627\u062F\u0647|\u0648\u0646\u06A9| \u063A\u0648|\u062F\u0648 |\u0648 \u0646|\u062A \u06A9|\u0645\u0644 |\u0639\u0645\u0648|\u0644 \u0647| \u067E\u064A|\u0648\u0633\u064A|\u0693\u0627\u0646|\u0648\u0693\u0627|\u064A\u0632 |\u062E\u0635\u064A|\u064A \u0645|\u0627 \u0628|\u0627\u062F\u0627|\u0647 \u0646|\u062E\u0644\u064A|\u0648\u0627\u062E|\u062F\u064A\u0648|\u060C \u062F|\u062F \u0642| \u0647\u0645|\u0627 \u062F| \u0628\u064A|\u062A\u0628\u0639| \u062A\u0628|\u0647 \u0686| \u0639\u0642|\u067E\u0644\u0648|\u0648 \u0644| \u0631\u0627|\u062F \u0628|\u0631\u0627\u064A| \u062F\u062E|\u0646\u06D0 |\u0646\u06A9\u064A|\u062A \u062F|\u0627\u0628\u0639| \u0645\u0642|\u062F \u062E|\u0648\u0631\u0647|\u0634\u0631\u0627| \u0634\u0631|\u0631 \u0645|\u0631\u0633\u0631|\u062A\u0627\u0645|\u0647 \u067C| \u0645\u0646|\u0637\u0647 |\u0633\u0637\u0647|\u0627\u0633\u0637|\u0648\u0627\u0633|\u0644\u06D0 | \u0627\u0633|\u06D4 \u062F|\u0628\u0631\u062E|\u06D0 \u0646" }, Devanagari: { hin: "\u0915\u0947 |\u092A\u094D\u0930| \u092A\u094D| \u0915\u093E| \u0915\u0947| \u0964 |\u0914\u0930 | \u0914\u0930|\u0915\u093E | \u0915\u094B|\u0915\u093E\u0930|\u093E\u0930 |\u0924\u093F |\u092F\u093E |\u0915\u094B |\u0928\u0947 |\u094B\u0902 |\u093F\u0915\u093E|\u094D\u0930\u0924| \u0939\u0948| \u0915\u093F|\u0902 \u0915|\u0939\u0948 |\u0927\u093F\u0915|\u0935\u094D\u092F|\u0905\u0927\u093F| \u0905\u0927|\u094D\u0924\u093F| \u0938\u092E|\u094D\u092F\u0915|\u093F \u0915|\u0915\u094D\u0924|\u093E \u0905|\u0915\u0940 |\u093E \u0915| \u0935\u094D|\u0947\u0902 | \u0939\u094B|\u092F\u0915\u094D|\u0938\u0940 |\u0938\u0947 |\u0947 \u0915| \u092F\u093E| \u0915\u0940|\u092E\u0947\u0902|\u0928\u094D\u0924| \u092E\u0947|\u0924\u094D\u092F|\u0948 \u0964|\u0924\u093E |\u0930\u0924\u094D|\u0915\u094D\u0937|\u0947\u0915 |\u092F\u0947\u0915|\u094D\u092F\u0947|\u093F\u0915 |\u0930 \u0939|\u092D\u0940 |\u0915\u093F\u0938| \u091C\u093E| \u0938\u094D|\u0915 \u0935|\u093E \u091C|\u093F\u0938\u0940|\u092E\u093E\u0928| \u0935\u093F|\u0930 \u0938|\u0924\u094D\u0930|\u0940 \u0938|\u0964 \u092A| \u0915\u0930|\u094D\u0930\u093E|\u0917\u093E |\u093F\u0924 | \u0905\u092A| \u092A\u0930|\u0938\u094D\u0935|\u0940 \u0915| \u0938\u0947|\u093E \u0938|\u094D\u092F | \u0905\u0928|\u094D\u0924\u094D|\u093F\u092F\u093E|\u093E \u0939| \u0938\u093E|\u0928\u093E |\u094D\u0924 |\u092A\u094D\u0924|\u0938\u092E\u093E|\u093E\u0928 |\u0930 \u0915|\u093E\u092A\u094D|\u0924\u0928\u094D| \u092D\u0940| \u0909\u0938|\u0930\u093E\u092A|\u0935\u0924\u0928|\u094D\u0935\u0924|\u0930\u094B\u0902|\u0935\u093E\u0930|\u0947 \u0938|\u0925\u093E |\u0939\u094B |\u0947 \u0905|\u093E \u0964|\u0928 \u0915| \u0928 |\u0926\u0947\u0936| \u0930\u093E|\u0937\u093E |\u0905\u0928\u094D|\u0924 \u0939|\u094D\u0937\u093E|\u094D\u0935\u093E|\u091C\u093E\u090F|\u0940 \u092A|\u0915\u0930\u0928|\u093E \u092A|\u0905\u092A\u0928|\u0937\u094D\u091F| \u0938\u0902|\u0947 \u0935|\u0939\u094B\u0917|\u093F\u0935\u093E|\u091F\u094D\u0930|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0938\u0915\u0947| \u092E\u093E|\u0913\u0902 |\u093E\u0913\u0902|\u0930\u0940 |\u0915 \u0938|\u0947 \u092A| \u0928\u093F|\u0940\u092F |\u0930\u0915\u094D|\u094B \u0938|\u093E\u090F\u0917|\u0930\u0928\u0947| \u0907\u0938|\u0935 \u0915|\u092A\u0930 |\u0930\u0924\u093E|\u0930 \u0905| \u0938\u092D|\u0924\u0925\u093E| \u0924\u0925| \u0910\u0938|\u0930\u093E |\u092A\u0928\u0947|\u094D\u0930\u0940|\u093F\u0915\u094D|\u0915\u093F\u092F|\u093E \u0935|\u092E\u093E\u091C|\u0902 \u0914|\u0930 \u0909|\u0926\u094D\u0927|\u0938\u092D\u0940|\u0936\u094D\u092F| \u091C\u093F|\u093E\u0928\u0947|\u093E\u0930\u094D|\u093E\u0930\u093E|\u0926\u094D\u0935| \u0926\u094D|\u090F\u0917\u093E|\u0938\u092E\u094D|\u0947\u0936 |\u093F\u090F |\u093E\u0935 |\u0930 \u092A| \u0926\u0947|\u094D\u0924\u0930|\u093E \u0914|\u093E\u0930\u094B|\u092F\u094B\u0902|\u092A\u0930\u093E|\u092A\u0942\u0930|\u091A\u093F\u0924|\u094D\u0927 |\u0930\u0942\u092A| \u0930\u0942| \u0938\u0941| \u0932\u093F|\u0924 \u0915|\u094B \u092A|\u0902 \u0938|\u0947 \u0932|\u0936\u093F\u0915| \u0936\u093F|\u0935\u093E\u0939|\u0947 \u0914|\u091C\u094B |\u0930\u093E\u0927|\u091C\u093F\u0938|\u0942\u0930\u094D|\u0940 \u092D|\u0942\u092A |\u094B\u0917\u093E|\u0938\u094D\u0925|\u0930\u0940\u092F|\u0924\u093F\u0915|\u094D\u0930 |\u0964 \u0907|\u0907\u0938 | \u0909\u0928|\u0932\u0947 |\u0947 \u092E|\u0932\u093F\u090F|\u092E \u0915|\u0915\u0924\u093E|\u0947 \u092F| \u091C\u094B|\u0928 \u092E|\u0905\u092A\u0930| \u092A\u0942|\u094B \u0915|\u093E \u0909|\u093E\u0939 |\u0928\u0942\u0928|\u093E\u0928\u0942|\u0917\u0940 |\u0926\u0940 |\u093E\u0930\u0940|\u0902 \u092E|\u0964 \u0915|\u0924\u0930\u094D|\u0940 \u0930|\u0936 \u0915|\u092A\u0930\u093F|\u0938\u094D\u0924|\u094B\u0908 |\u0915\u094B\u0908|\u0930\u094D\u092F|\u0940 \u0905|\u0939\u093F\u0924|\u092D\u093E\u0935| \u092D\u093E|\u0924\u093E\u0913|\u093E\u0938 |\u0938\u093E\u092E|\u0935\u093F\u0915|\u0935\u093F\u0935|\u092E\u094D\u092E| \u0938\u0915|\u0915\u0930 |\u093E\u0928\u093E|\u0927 \u0915|\u0928\u093F\u0915|\u092F \u0915|\u0909\u0938\u0915|\u0915\u0943\u0924| \u0958\u093E|\u0928 \u0938|\u091C\u0940\u0935|\u094D\u092F\u093E|\u0930\u0915\u093E|\u094D\u0930\u0915|\u093E\u091C |\u0928\u094D\u092F|\u094D\u092E |\u0930\u094D\u0923|\u0958 \u0939|\u0939\u0958 | \u0939\u0958|\u0940 \u092E|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093E\u092E\u093E|\u0915 \u0914|\u092E\u093F\u0932|\u0947\u0928\u0947|\u0932\u0947\u0928| \u0932\u0947|\u092F\u0947 |\u094B \u0905|\u0947 \u091C|\u0930\u093F\u0935|\u092E\u092F |\u0938\u092E\u092F|\u0935\u0936\u094D|\u0906\u0935\u0936| \u0906\u0935|\u0910\u0938\u0940|\u093E\u0927 |\u0930 \u0926|\u0930\u094D\u0935|\u0938\u093E\u0930|\u092A \u0938|\u092C\u0928\u094D| \u0938\u0939|\u093F\u0927\u093E|\u0935\u093F\u0927|\u0940 \u0928|\u0942\u0928 |\u0958\u093E\u0928", mar: "\u094D\u092F\u093E|\u092F\u093E |\u0924\u094D\u092F|\u092F\u093E\u091A|\u091A\u093E |\u0923\u094D\u092F|\u093E\u091A\u093E| \u0935 |\u0915\u093E\u0930|\u092A\u094D\u0930| \u092A\u094D|\u093F\u0915\u093E|\u0927\u093F\u0915|\u093E\u0930 | \u0905\u0927|\u0905\u0927\u093F|\u091A\u094D\u092F|\u0906\u0939\u0947| \u0906\u0939|\u093E \u0905|\u0939\u0947 |\u093E \u0915|\u093E\u0938 |\u0935\u093E |\u094D\u092F\u0947|\u094D\u0930\u0924| \u0938\u094D|\u0924\u093E |\u093E \u0938| \u0905\u0938| \u0915\u0930|\u0938\u094D\u0935| \u0915\u093E|\u0932\u094D\u092F|\u0930\u0924\u094D|\u093E\u0939\u093F|\u0915\u094B\u0923| \u0915\u094B|\u093F\u0915 |\u092F\u0947\u0915|\u094D\u0935\u093E|\u093E \u0935| \u0924\u094D|\u0930 \u0906|\u094D\u092F |\u0924\u094D\u0930|\u0947\u0915\u093E|\u0915\u094D\u0937|\u093E \u0928| \u0938\u0902|\u093E\u092E\u093E|\u093E\u091A\u094D|\u0902\u0935\u093E|\u093F\u0902\u0935|\u0915\u093F\u0902| \u0915\u093F|\u093E\u0924 |\u0937\u094D\u091F|\u0915\u093E\u0938| \u092F\u093E|\u092F\u093E\u0902|\u093E\u0902\u091A|\u0930\u094D\u092F|\u092E\u093F\u0933| \u092E\u093F| \u0938\u093E|\u0935\u094D\u092F|\u094B\u0923\u0924|\u0928\u0947 |\u0947 \u092A|\u0915\u093E\u092E| \u0938\u092E|\u0902\u0924\u094D|\u092F\u0947 | \u0930\u093E|\u0938\u092E\u093E|\u0924\u0902\u0924|\u0915\u0930\u0923|\u093E \u0906|\u0947 \u0915|\u0939\u093F |\u0947 \u0938|\u0928\u093E |\u093F\u0933\u0923|\u0942\u0928 |\u093E \u092A|\u091F\u094D\u0930|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0940\u092F |\u0935 \u0938|\u0915\u094D\u0924|\u092E\u093E\u0928|\u0930\u094D\u0935| \u0906\u092A|\u0933\u0923\u094D|\u094D\u0930\u094D|\u093E\u0924\u0902|\u0935\u093E\u0924|\u091A\u0947 | \u0935\u093F|\u094D\u0937\u0923|\u0930\u0923\u094D| \u0926\u0947| \u0935\u094D|\u0906\u092A\u0932|\u0939\u0940 |\u093E\u0930\u094D|\u0928\u092F\u0947| \u0928\u092F|\u092E\u093E |\u092F\u093E\u0938| \u091C\u093E|\u0932\u0947\u0932| \u0928\u093F|\u0947 \u0905| \u092A\u093E|\u093E \u092E|\u0932\u0947 |\u093E\u0939\u0940|\u092C\u0902\u0927|\u0947 \u0935|\u094D\u092F\u0915| \u092E\u093E|\u0936\u093F\u0915| \u0936\u093F|\u0926\u0947\u0936|\u093E \u0926|\u092E\u093E\u091C|\u094D\u0930\u0940|\u0932\u0940 |\u093E\u0928 |\u093E\u0902\u0928|\u092A\u0932\u094D| \u0939\u094B|\u093E \u0939|\u0937\u0923 |\u091C\u0947 |\u093F\u091C\u0947|\u0939\u093F\u091C|\u092A\u093E\u0939|\u093E\u0930\u093E|\u092F\u093E\u0924|\u0938\u0930\u094D| \u0938\u0930|\u0930\u093E\u0902|\u0905\u0938\u0932|\u0902\u092C\u0902|\u0938\u0902\u092C|\u093F\u0915\u094D|\u0940 \u092A|\u0902\u091A\u094D|\u0930\u0915\u094D|\u0923\u0924\u094D| \u0906\u0923|\u0932\u093E |\u0938\u094D\u0925|\u0930\u0940\u092F|\u0940\u0924 |\u0902\u0928\u093E|\u0924 \u0935|\u094D\u0935 |\u0915 \u0935|\u0923\u0947 |\u093E\u091A\u0947|\u0928 \u0915|\u0924 \u0915|\u0930\u0924\u093E|\u094D\u0930\u093E|\u092F\u093E\u0939|\u094D\u0924 |\u091A\u0940 |\u092F \u0915|\u0926\u094D\u0927|\u094D\u0935\u0924|\u092F\u0915\u094D|\u0923\u093F |\u0906\u0923\u093F|\u0938 \u0938|\u0902\u0927\u093E|\u0915 \u0938|\u091A\u094D\u091B|\u092F \u0905|\u0924 \u0938|\u0940\u0928\u0947|\u094B\u0923\u093E|\u0915\u0930\u0924|\u0924\u094D\u0935|\u0940\u0932 |\u0940 \u0905|\u0938\u093E\u0930|\u0930 \u0935|\u092D\u093E\u0935|\u0935 \u0924|\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u0947 \u0924|\u0947 \u091C|\u092F\u093E\u092F|\u0902\u091A\u093E|\u0947\u0932\u094D|\u093E\u0928\u0947|\u0947\u0923\u094D|\u0915 \u0906|\u0915\u094D\u0915|\u0939\u0915\u094D| \u0939\u0915|\u0923 \u092E|\u0902\u0930\u0915|\u0938\u0902\u0930|\u0928\u094D\u092F|\u093E\u092F\u0926|\u093E \u0924|\u0924 \u0906| \u0909\u092A|\u0935\u0938\u094D|\u093F\u0935\u093E|\u0947\u0936\u093E|\u0938\u093E\u092E|\u0947 \u092F|\u0947 \u0906|\u0940 \u0935|\u0935 \u092E|\u0924\u0940\u0928|\u0935 \u0906|\u0927\u094D\u092F| \u0905\u0936|\u0927\u093E\u0924|\u0915\u0943\u0924|\u094D\u0915 |\u0926\u094D\u092F|\u093F\u0924 |\u0938\u0932\u0947|\u0947\u0936 |\u0924\u094B |\u0947\u0932 |\u0924\u0940 |\u094D\u0924\u0940|\u0905\u0938\u0947|\u0907\u0924\u0930| \u0907\u0924|\u0938\u094D\u0924|\u0930\u094D\u0923|\u093E \u092C|\u0947\u0932\u0947| \u0915\u0947|\u0939\u0940\u0930|\u091C\u093E\u0939|\u093E \u091C|\u0947\u0924 |\u0942\u0930\u094D|\u092A\u0942\u0930|\u0947\u091A | \u0935\u093E|\u093E\u091C\u093E|\u0940 \u0938|\u0936\u093E |\u092F \u0935| \u0928\u094D|\u092F\u093E\u0935|\u0926\u094D\u0926|\u094D\u0927 |\u0930\u0942\u0928|\u092F\u0926\u094D|\u0915\u093E\u092F|\u093E \u0936|\u0917\u0923\u094D|\u0915 \u0915|\u0930\u093E\u0927| \u0936\u093E|\u092F\u0924\u094D|\u0932 \u0905|\u094D\u092F\u0935|\u0940 \u0915|\u093E\u0935 |\u093E \u092F|\u0924\u094D\u0924|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0930\u0923\u093E| \u0927\u0930|\u093E \u0927|\u092D\u0947\u0926| \u092C\u093E|\u0930\u0915\u093E|\u094D\u0930\u0915|\u0915\u0947\u0932|\u093F \u0935|\u093F\u0937\u094D|\u0924\u0940\u0932|\u092F\u094B\u0917|\u0938\u093E\u0927|\u093E\u0902\u0924|\u0935\u093F\u0935|\u0936\u094D\u0930| \u0927\u0947| \u092E\u0941|\u0935\u0924\u0903", mai: "\u093E\u0915 |\u092A\u094D\u0930|\u0915\u093E\u0930| \u092A\u094D|\u093E\u0930 |\u093F\u0915\u093E|\u094D\u092F\u0915|\u0927\u093F\u0915|\u0915 \u0905|\u094D\u0930\u0924|\u094D\u0924\u093F|\u0935\u094D\u092F| \u0905\u0927|\u0947\u0901 |\u0905\u0927\u093F|\u093F\u0915 | \u0935\u094D|\u0906\u02BC | \u0906\u02BC|\u0915\u094D\u0924|\u092F\u0915\u094D|\u0924\u093F\u0915|\u0915\u0947\u0901|\u0915 \u0935|\u092C\u093E\u0915|\u0915 \u0938|\u091B\u0948\u0915| \u091B\u0948|\u0924\u094D\u092F|\u092E\u0947 |\u0947\u0915 | \u0938\u092E|\u0915\u094D\u0937|\u0939\u093F |\u0930\u0924\u094D|\u0930 \u091B|\u092F\u0947\u0915|\u094D\u092F\u0947|\u0928\u094D\u0924|\u0935\u093E |\u093F\u0915\u0947|\u0915\u0964 |\u0948\u0915\u0964|\u0964 \u092A| \u0905\u092A| \u0938\u094D| \u0935\u093F| \u091C\u093E|\u093F\u0924 |\u0938\u0901 | \u0939\u094B|\u0915\u094B\u0928| \u0915\u094B|\u0924\u094D\u0930|\u0938\u094D\u0935| \u0935\u093E|\u0915 \u0906|\u0937\u094D\u091F| \u0915\u0930|\u0905\u092A\u0928|\u092E\u093E\u0928| \u0915\u093E| \u0905\u0928|\u0924\u093F |\u094D\u0924\u094D|\u0928\u094B |\u0928\u0939\u093F| \u092A\u0930|\u091F\u094D\u0930|\u094D\u092F | \u090F\u0939|\u093F \u0915|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937| \u0930\u093E|\u0938\u092E\u093E|\u094B\u0928\u094B|\u0932 \u091C| \u0928\u0939|\u0924\u093E\u0915|\u093E\u0930\u094D|\u092A\u0928 |\u0924\u0928\u094D|\u0935\u0924\u0928|\u094D\u0935\u0924|\u094D\u0937\u093E| \u0915\u090F| \u0938\u093E|\u094D\u0930\u0940| \u0928\u093F|\u093E \u0906|\u093F\u0935\u093E| \u0938\u0902| \u0926\u0947|\u091C\u093E\u090F|\u0940\u092F |\u0915\u0930\u092C|\u0925\u093E |\u090F\u092C\u093E|\u093E \u092A|\u0928\u093E |\u094D\u0935\u093E|\u0926\u0947\u0936|\u0924\u0964 |\u0930\u0915 |\u0915 \u0939|\u0901 \u0905| \u0938\u092D| \u0906 |\u0924 \u0915|\u091A\u093F\u0924|\u094D\u0924 |\u0935\u093E\u0930|\u0924\u093E |\u093E\u0930\u0915|\u092E\u093E\u091C|\u093E \u0938|\u0930\u0940\u092F|\u0928\u094D\u092F|\u0930\u0924\u093E|\u093E\u0928 |\u094D\u0930\u093E|\u094D\u092F\u093E|\u0930\u0915\u094D|\u093E\u0930\u0923|\u092A\u0930\u093F|\u090F\u0932 |\u0915\u090F\u0932|\u0905\u0928\u094D|\u0930\u092C\u093E|\u0915 \u092A|\u0913\u0930 |\u0906\u0913\u0930| \u0906\u0913|\u0905\u091B\u093F| \u0905\u091B|\u093F\u0930\u094D|\u093E\u0928\u094D|\u0928\u0915 |\u0939\u094B\u090F|\u0915\u0930 |\u0927\u093E\u0930|\u0938\u094D\u0925|\u093E \u0905|\u093F\u092E\u0947|\u0930 \u0906|\u090F\u0939\u093F| \u090F\u0915|\u0947 \u0938|\u0924\u0925\u093E| \u0924\u0925| \u092E\u093E|\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u092A\u094D\u0924|\u0930\u094D\u0935|\u0928\u093F\u0930|\u091A\u094D\u091B|\u0930\u094D\u092F|\u0901 \u0938|\u0915 \u0915|\u0939\u094B |\u093E\u0939\u093F|\u090F\u0924\u0964|\u0930 \u092A|\u093E\u092E\u093E|\u0938\u093E\u092E|\u0937\u093E |\u02BC \u0938|\u0901 \u090F|\u0948\u0915 |\u0926\u094D\u0927|\u0930 \u0905|\u0915 \u091C|\u0938\u094D\u0924|\u093E\u092A\u094D|\u0901 \u0915| \u0938\u0915|\u092F\u0915 |\u0915\u093E\u0928|\u0939\u0928 |\u090F\u0939\u0928|\u0947\u0932 |\u094B\u090F\u0924|\u0924 \u0906|\u093E \u0935|\u0964 \u0915|\u094D\u0924\u0930|\u093E\u090F\u0924|\u094D\u0930\u0915|\u0939\u0941 |\u0915 \u0909|\u092A\u0942\u0930|\u0935\u093F\u0935|\u02BC \u0905|\u091B\u093F | \u0932\u0947|\u0928 \u092A|\u093E\u0938 |\u0930\u093E\u092A|\u0927\u0915 |\u092A\u090F\u092C| \u092A\u090F|\u0930\u093E |\u092F\u0924\u093E|\u0930\u0942\u092A|\u0928 \u0935| \u0915\u0947|\u0937\u093E\u0915|\u092F \u092A|\u0924 \u0939|\u091C\u093E\u0939| \u0913 |\u092D\u093E\u0935|\u092A\u0930 |\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u0938\u092E\u094D|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0942\u0930\u094D|\u0930\u0924\u093F| \u0926\u094B|\u0938\u092D\u0915|\u0964 \u0938| \u091C\u0928|\u0938\u092D |\u092C\u093E\u0927|\u0905\u0928\u0941|\u093F\u0938\u0901| \u0938\u0939|\u0901 \u0935|\u090F \u0938|\u0930\u093F\u0935|\u0924\u0941 |\u0947\u0924\u0941|\u0939\u0947\u0924| \u0939\u0947|\u093E\u0927 |\u0947\u092C\u093E|\u0928 \u0938|\u093F\u0937\u094D|\u0930\u093E\u0927| \u0905\u0935|\u093F\u0924\u094D|\u0935\u093E\u0938|\u091A\u093E\u0930| \u0909\u091A|\u093E\u0930\u093E|\u0928 \u0915|\u0935\u0915 |\u093E \u0915|\u0928\u0942\u0928|\u093E\u0928\u0942|\u090F\u0924 |\u0930\u0940 |\u0947\u0913 |\u0915\u0947\u0913|\u0930\u0923 |\u094D\u0930\u0938|\u093F \u0926|\u0913 \u0935| \u092D\u0947|\u0928\u0939\u0941|\u094B\u0928\u0939|\u094D\u0925\u093F|\u092A\u0924\u094D|\u092E\u094D\u092A|\u0930\u093E\u091C| \u092D\u093E|\u0939\u093F\u092E| \u0939\u0915|\u093E\u092E\u0947|\u094D\u0923 |\u0930\u094D\u0923|\u0939\u093E\u0930|\u093F \u0938|\u0915 \u0926|\u0928 \u0905|\u0924 \u0905|\u0932\u0947\u092C| \u0905\u092D|\u093F\u0936\u094D|\u091C\u0915 |\u093E\u091C\u0915|\u0928 \u0906|\u0935\u093E\u0939|\u0915\u093E\u091C|\u0936\u094D\u092F|\u0935\u0938\u094D|\u0913\u0939\u093F| \u0913\u0939|\u092F\u094B\u0917|\u0964 \u090F|\u0915\u090F |\u0947 \u0913|\u0905\u092A\u0930", bho: " \u0915\u0947|\u0915\u0947 |\u0947 \u0915|\u093E\u0930 |\u0915\u093E\u0930|\u093F\u0915\u093E|\u0927\u093F\u0915|\u0905\u0927\u093F| \u0905\u0927|\u0913\u0930 |\u0906\u0913\u0930| \u0906\u0913|\u0947 \u0905|\u0947 \u0938|\u093E \u0915| \u0938\u0902|\u093F\u0915 |\u0930 \u0939|\u093E \u0938| \u0939\u094B|\u0930 \u0938|\u0947\u0902 |\u092E\u0947\u0902| \u092E\u0947| \u0915\u0930| \u0938\u0947|\u0928\u094B |\u0915\u094D\u0937|\u0938\u0947 | \u0915\u093E|\u0964 \u0938|\u0916\u0947 |\u093E\u0964 |\u0930\u093E | \u0938\u092E| \u0938\u092C|\u094D\u0930\u093E| \u0938\u0915|\u0930 \u0915|\u0928 \u0915|\u0935\u0947 |\u094C\u0928\u094B|\u0915\u094C\u0928| \u0915\u094C|\u091A\u093E\u0939| \u091A\u093E| \u092C\u093E|\u092A\u094D\u0930| \u092A\u094D|\u0925\u093E |\u093F \u0915|\u0924\u093F | \u091C\u093E| \u0938\u093E|\u0947 \u0906|\u092A\u0928 |\u0915\u0930\u0947|\u0924\u093E |\u0939\u094B\u0916|\u0924 \u0915|\u0947\u0964 |\u0947 \u092C|\u0924\u0925\u093E| \u0924\u0925| \u0906\u092A|\u0915\u0947\u0932|\u0938\u0915\u0947| \u0938\u094D|\u0930\u0947 |\u0938\u092C\u0939|\u0915\u0930 |\u0906\u092A\u0928|\u0947 \u0913|\u091C\u093E | \u092A\u0930|\u0937\u094D\u091F| \u0930\u093E|\u0928\u093E |\u0939\u0935\u0947| \u0939\u0935|\u0932\u093E |\u0947\u0932\u093E|\u092C\u0939\u093F| \u0913\u0915|\u094B\u0916\u0947|\u0930 \u092C|\u0939\u0964 | \u0939\u0964|\u0928 \u0938|\u093E\u0937\u094D|\u0930\u093E\u0937|\u094D\u0924 | \u0914\u0930|\u0947 \u091A|\u0964 \u0915|\u0938\u0902\u0917|\u0930 \u0906|\u091F\u094D\u0930|\u094D\u091F\u094D|\u0937\u093E |\u092E\u093E\u0928|\u093E \u0906|\u0902 \u0915|\u093E \u092A|\u094D\u0937\u093E|\u0930\u0915\u094D|\u0939\u0947 |\u093E\u0939\u0947|\u093E\u0924\u093F|\u093E\u0935\u0947| \u091C\u0947|\u0939\u0940 |\u0913\u0915\u0930|\u092E\u093F\u0932|\u093F\u0924 |\u094B \u0938|\u0932 \u091C|\u0907\u0916\u0947|\u0928\u0907\u0916| \u0928\u0907|\u0924\u094D\u0930|\u092E\u093E\u091C| \u092C\u093F|\u0935\u0947\u0964|\u0947 \u091C|\u0915 \u0938|\u093F\u0902 |\u0939\u093F\u0902|\u0915\u0930\u093E|\u0914\u0930 |\u0947 \u092E|\u0938\u092E\u093E|\u0939\u0941 | \u0913 |\u092A\u0930 |\u0947 \u0928|\u0938\u094D\u0925|\u0930\u0940\u092F|\u094D\u0930\u0940|\u0932\u093E\u0964|\u093E\u091C |\u093E\u0928 |\u0915\u093E\u0928|\u0947 \u0924|\u093F\u0930 |\u0924\u093F\u0930|\u0916\u093E\u0924| \u0916\u093E|\u0947 \u0909|\u0928\u0942\u0928|\u093E\u0928\u0942|\u093E\u092E | \u0938\u0941| \u0926\u0947|\u0940 \u0915| \u092E\u093E|\u0930 \u092E|\u092A\u094D\u0924|\u093F\u092F\u093E|\u093E\u0939\u0940|\u092C\u093E\u0964|\u092F\u094B\u0917|\u0940 \u0938|\u0932 \u0939|\u0942\u0928 |\u0935\u094D\u092F|\u0941 \u0915|\u090F \u0915|\u0947 \u0935|\u0902\u0924\u094D|\u0938\u094D\u0935|\u0915\u0947\u0939|\u0940\u092F |\u0916\u0932 |\u0938\u093E\u092E|\u092F\u0924\u093E|\u0924\u093F\u0915|\u0947 \u0939|\u093E\u092A\u094D|\u0930\u093E\u092A|\u0930 \u092A|\u0930 \u0905| \u0932\u094B| \u0938\u0939|\u091C\u0947 |\u094B\u0917 |\u092E \u0915|\u0932\u0947 | \u0928\u093F|\u0947\u0915\u0930|\u093E \u0939|\u092A\u0942\u0930|\u0930 \u0928|\u0947\u0939\u0941|\u094D\u092F |\u092F\u093E | \u092F\u093E|\u0926\u0947\u0936|\u0926\u0940 |\u093E \u092E|\u093E\u0935 | \u0926\u094B|\u0947 \u0926| \u092A\u093E|\u0939\u093F |\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u092C\u093E |\u093F\u0932 | \u0909\u092A|\u094D\u0930\u0924| \u0935\u093F| \u0939\u0940| \u0932\u0947|\u0930\u094B |\u0947 \u0916|\u0920\u0928 |\u0917\u0920\u0928|\u0902\u0917\u0920| \u092E\u093F|\u0937\u0923 |\u094D\u0937\u0923|\u0902\u0930\u0915|\u0938\u0902\u0930| \u0906\u0926| \u090F\u0915|\u0928\u0947 | \u0905\u092A|\u0924\u0902\u0924|\u0935\u0924\u0902|\u094D\u0935\u0924|\u094D\u0924\u0930|\u094D\u092F\u093E|\u0947\u0936 |\u093E\u0926\u0940|\u094D\u0924\u093F|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0915 \u0906|\u094D\u092E |\u091A\u093E\u0930| \u0909\u091A| \u0936\u093E|\u0930\u0940 |\u093E\u0939 |\u092F\u093E\u0939|\u092C\u093F\u092F|\u091A\u093F\u0924|\u0915\u094D\u0924|\u092A\u092F\u094B|\u0909\u092A\u092F|\u0930\u0924\u093E|\u0930 \u0935|\u0928 \u092E|\u0932\u094B\u0917|\u0939 \u0915|\u0928 \u092A|\u0915\u093E\u092E| \u092A\u0942| \u0907 |\u0906\u0926\u093F|\u0908\u0932 | \u0915\u0908| \u0935\u094D|\u092E\u0940 |\u0941\u0930\u0915|\u0938\u0941\u0930| \u091C\u0940|\u0927\u093E\u0930|\u092F \u0938|\u0924\u0930\u094D|\u092D\u0947 |\u0938\u092D\u0947| \u0938\u092D|\u092D\u093E\u0935|\u094D\u0925\u093F|\u093E\u092E\u093E|\u0938\u0930 |\u0930\u094D\u092E| \u0915\u094B| \u092C\u0947|\u094B\u0938\u0930|\u0926\u094B\u0938|\u0923 \u0915|\u093E\u0938 |\u0947 \u092A|\u091C\u093E\u0926|\u0906\u091C\u093E| \u0906\u091C|\u0909\u091A\u093F|\u0917 \u0915|\u093E\u0930\u0940| \u091C\u0930|\u0917\u0947 |\u091C \u0915|\u0940 \u092C|\u0938\u0928 |\u0939\u094B |\u093E \u0924", npi: "\u0915\u094B |\u0928\u0947 | \u0930 |\u093E\u0930 |\u0915\u094D\u0924|\u0915\u093E\u0930|\u092A\u094D\u0930| \u092A\u094D|\u094D\u092F\u0915|\u0935\u094D\u092F| \u0917\u0930|\u093F\u0915\u093E| \u0935\u094D|\u094D\u0930\u0924|\u0927\u093F\u0915|\u094D\u0924\u093F|\u092F\u0915\u094D|\u0905\u0927\u093F| \u0905\u0927|\u093E\u0908 |\u092E\u093E |\u0932\u093E\u0908|\u0924\u094D\u092F|\u093F\u0915 | \u0964 | \u0938\u092E|\u0935\u093E | \u0935\u093E|\u0915 \u0935|\u094D\u0928\u0947|\u0930\u094D\u0928|\u0917\u0930\u094D|\u0928\u094D\u0924|\u091B \u0964|\u0924\u093F\u0932|\u0930\u0924\u094D|\u0924\u094D\u0930|\u0947\u0915 |\u092F\u0947\u0915|\u094D\u092F\u0947|\u093F\u0932\u093E|\u0930 \u0938|\u094B \u0938| \u0938\u094D|\u092E\u093E\u0928|\u0915\u094D\u0937| \u0935\u093F|\u0939\u0941\u0928|\u093E \u0938| \u0939\u0941| \u091B |\u0930 \u091B|\u094D\u0924\u094D|\u0938\u092E\u093E|\u0938\u094D\u0935|\u0964 \u092A| \u0938\u0902|\u0928\u0947\u091B|\u0941\u0928\u0947|\u0939\u0930\u0941|\u0924\u0928\u094D|\u0935\u0924\u0928|\u0947 \u0905|\u093F\u0928\u0947|\u094B \u0905|\u094D\u0935\u0924| \u0915\u093E|\u0947 \u091B|\u0917\u0930\u093F| \u0930\u093E|\u094D\u0930 |\u0924\u093F |\u093E\u0915\u094B| \u0915\u0941|\u0937\u094D\u091F|\u0928\u093E |\u0938\u094D\u0924|\u0915 \u0938|\u0941\u0928\u0948|\u0915\u0941\u0928|\u091F\u094D\u0930|\u0932\u0947 | \u0928\u093F|\u093E\u0928 |\u091B\u0948\u0928| \u091B\u0948|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0924\u093F\u0915|\u091B\u0964 |\u093E\u0930\u094D|\u0924\u093E |\u093F\u0924 |\u0928\u0948 |\u093E \u0905| \u0938\u093E|\u093E \u0935|\u0930\u0941 | \u092E\u093E| \u0905\u0928|\u093E \u0930|\u0930\u0924\u093E|\u0930 \u0930|\u0939\u0930\u0942|\u0947\u091B |\u093E \u092A|\u0930\u0915\u094D|\u094D\u0924 | \u092A\u0930|\u0925\u093E | \u0932\u093E|\u092A\u0930\u093F|\u0926\u0947\u0936|\u0938\u0915\u094B| \u092F\u0938|\u092E\u093E\u091C|\u093E\u092E\u093E|\u094D\u0930\u093E|\u093F\u0935\u093E|\u093E\u0939\u0930|\u094B \u092A|\u094D\u092F |\u0935\u093E\u0930|\u0928 \u0938|\u0964 \u0915|\u0928\u093F |\u094D\u0937\u093E| \u0924\u094D|\u0926\u094D\u0927|\u0930 \u0939|\u0924\u0925\u093E| \u0924\u0925|\u092F\u0938\u094D|\u094D\u092F\u0938|\u0930\u0940 |\u0930 \u0935|\u092A\u0928\u093F|\u0930\u093F\u0928|\u0902\u0930\u0915|\u0938\u0902\u0930|\u092D\u093E\u0935|\u0948 \u0935|\u0938\u092C\u0948| \u0938\u092C| \u0936\u093F| \u0938\u0939|\u0924\u093E\u0915|\u0947 \u0930|\u0924 \u0930|\u0932\u093E\u0917| \u0938\u0941|\u094D\u0937\u0923|\u0926\u094D\u0926| \u0905\u092A|\u0948\u0928 |\u094B \u0935|\u093F\u0915\u094D|\u093E\u0935 |\u0927\u093E\u0930|\u094D\u092F\u093E|\u094D\u0930\u093F|\u093E \u092D|\u090F\u0915\u094B|\u0930 \u092E|\u0928 \u0905|\u094B \u0932| \u0909\u0938|\u0936\u093F\u0915|\u093E\u0924\u094D|\u0938\u094D\u0925|\u0935\u093E\u0939|\u0942\u0930\u094D|\u0936\u094D\u092F|\u093F\u0924\u094D|\u0930\u0915\u094B|\u093E\u0930\u0915|\u0941\u0926\u094D|\u0924\u094B |\u094D\u0924\u094B|\u093E\u0909\u0928|\u0915\u093E\u0928|\u093F\u090F\u0915|\u093E \u0928| \u092A\u0928|\u0928\u0964 |\u0948\u0928\u0964|\u0915\u093E |\u0947\u091B\u0964| \u092D\u0947|\u0930\u094D\u092F|\u0938\u092E\u094D|\u0924\u094D\u092A|\u0938\u093E\u092E|\u0930\u093F\u092F|\u091A\u093E\u0930|\u0928\u093F\u091C|\u0941\u0928 |\u0917\u093F |\u093E\u0917\u093F|\u0909\u0938\u0915| \u092E\u0924| \u0905\u092D|\u092A\u0942\u0930|\u0930 \u0924| \u0938\u0915|\u0938\u093E\u0930|\u0930\u093E\u0927|\u092A\u0930\u093E|\u0905\u092A\u0930|\u0941\u0915\u094D|\u091C\u0915\u094B| \u0909\u092A|\u0930\u093E |\u093E\u0930\u093E|\u094D\u0935\u093E|\u0935\u093F\u0927|\u094D\u0928 |\u093E \u0924|\u0928 \u0917|\u0923\u0915\u094B| \u092A\u093E| \u0926\u093F|\u0915 \u0930|\u0930 \u092A|\u0905\u0928\u094D|\u092D\u0947\u0926|\u093E\u0930\u092E|\u094B \u0906| \u0905\u0930|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093F\u092F |\u0937\u093E |\u093E\u091F |\u092C\u093E\u091F| \u092C\u093E|\u093F \u0930| \u091B\u0964|\u0924\u094D\u0935|\u0924 \u0938|\u0930\u0942 |\u091B \u0930|\u0930\u0915\u093E|\u0935\u093F\u0915|\u0930 \u0909|\u094B\u0917 |\u094D\u0926\u0947|\u0930\u093F\u0935|\u0938\u0915\u093F|\u0948 \u092A|\u0930\u0924\u093F|\u0905\u0928\u0941| \u0906\u0935|\u092F\u0941\u0915|\u093E \u0917|\u0928\u092E\u093E|\u092F\u094B\u0917|\u0917 \u0917|\u0915 \u0905|\u0926\u094D\u0935|\u094D\u0927 |\u0930\u0941\u0926| \u092C\u093F|\u0964 \u0938|\u0909\u0928\u0947|\u093E\u0928\u094D|\u093E \u092E|\u093F\u0915\u094B|\u0930\u094D\u0926|\u093E\u0930\u0940|\u094D\u0924\u0930|\u094B \u0939|\u0939\u093F\u0924| \u0926\u0947|\u0930\u093F\u0915|\u093E \u0915| \u0906\u0927|\u0930\u093E\u091C|\u0930\u094D\u092E|\u094D\u0923 |\u0930\u094D\u0923|\u093F \u0935|\u094D\u092F\u0935|\u0935\u093F\u091A|\u092C\u0948 |\u0938\u0939\u093F|\u0930\u094B\u091C|\u0930\u094D\u0938|\u0908 \u0909|\u094D\u092A |\u0930\u093E\u0924|\u0928\u093F\u0915|\u092E\u093F\u0915|\u091A\u094D\u091B|\u094D\u0925\u093E|\u0935\u093F\u0935|\u0915\u0924\u093E|\u0905\u092D\u093F|\u094D\u0927\u093E", mag: " \u0915\u0947|\u0915\u0947 |\u093E\u0930 | \u0939\u0908|\u0915\u093E\u0930|\u0908\u0964 |\u0939\u0908\u0964|\u093F\u0915\u093E|\u0947 \u0905|\u0927\u093F\u0915|\u0905\u0927\u093F| \u0905\u0927|\u0930 \u0939|\u0947 \u0915|\u0914\u0930 | \u0914\u0930|\u093E \u0915|\u0947 \u0938|\u0938\u092C | \u0938\u092C| \u0915\u0930|\u0947\u0902 |\u0925\u093E |\u092E\u0947\u0902| \u092E\u0947|\u0924\u0925\u093E| \u0924\u0925|\u093F\u0915 | \u0939\u094B| \u0938\u092E|\u0915\u094D\u0937|\u0928\u093E |\u092C \u0915|\u0930 \u0938| \u0938\u0902|\u093E \u0938|\u0915\u0930 | \u092D\u0940|\u0964 \u0938| \u0938\u093E| \u0938\u0947| \u0915\u093E| \u0905\u092A|\u094D\u0930\u093E|\u092A\u094D\u0930| \u092A\u094D|\u0938\u0947 |\u092D\u0940 | \u0915\u094B|\u0924 \u0915| \u092A\u0930|\u0930\u093E |\u0915 \u0939|\u092A\u0928 |\u0905\u092A\u0928| \u0938\u0915|\u092F\u093E |\u0924\u093F |\u0930 \u0915|\u0940 \u0915| \u092F\u093E|\u0915\u0930\u0947| \u091C\u093E|\u0930\u0947 | \u0913\u0915|\u094D\u0924 |\u0938\u0915 |\u0928\u094B |\u093E\u0928 |\u092E\u093E\u0928|\u0913\u0915\u0930|\u093E \u092A|\u0928 \u0915|\u0947\u0932 | \u0928\u093E|\u0964 \u0915|\u0930\u0915\u094D| \u0938\u094D|\u0939\u0940 |\u0939\u094B\u090F| \u090F\u0915|\u092A\u0930 |\u0926\u0940 |\u091F\u094D\u0930|\u0924\u093E |\u0935\u094D\u092F|\u0939\u0908 | \u0936\u093E|\u0947 \u0909| \u0926\u0947|\u0924\u094D\u0930|\u093E\u0926\u0940| \u0930\u093E| \u0939\u0940|\u0915\u093E\u0928|\u093F\u0924 |\u092E \u0915|\u0932 \u091C|\u093E\u092E |\u0940 \u0938|\u0947 \u092D|\u0928 \u0938|\u092E\u093E\u091C|\u0937\u094D\u091F|\u0937\u093E | \u0932\u0947|\u0915 \u0938|\u092C\u0947 |\u0935\u0947 |\u093E\u0935\u0947|\u092E\u093F\u0932|\u0930 \u092E|\u094D\u092F |\u093E \u0939|\u0932\u093E |\u092A\u094D\u0924|\u0928\u0942\u0928|\u093E\u0928\u0942|\u091C\u093E |\u0947\u0915\u0930|\u094D\u0937\u093E|\u094D\u0930\u0924|\u0902\u0924\u094D|\u0930 \u0914|\u094B\u0908 |\u0915\u094B\u0908|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937| \u092E\u093E|\u0930\u094B | \u091C\u0947|\u0915\u0930\u093E|\u094B\u090F |\u093E\u092A\u094D|\u0930\u093E\u092A|\u0938\u092E\u093E|\u0942\u0928 |\u094B \u0938|\u0938\u094D\u0935|\u094D\u0924\u093F|\u0938\u093E\u092E|\u094B\u0928\u094B|\u0915\u094B\u0928| \u0935\u094D|\u0930 \u0905|\u094D\u092E | \u0935\u093F| \u0938\u0939|\u0947 \u092E|\u0915\u094D\u0924|\u092F\u094B\u0917|\u0930 \u0935|\u0915\u093E\u092E|\u0932 \u0939| \u0928\u093F|\u0926\u0947\u0936|\u092A\u0942\u0930|\u0935\u093E\u0930| \u0907 |\u0902\u0930\u0915|\u0938\u0902\u0930|\u090F \u0915|\u0930 \u092A| \u0938\u0941|\u0924\u0902\u0924|\u0935\u0924\u0902|\u094D\u0935\u0924|\u093E \u092E|\u0935 \u0915|\u0947 \u0935|\u093E\u0925 |\u0938\u093E\u0925| \u0926\u094B|\u0939\u094B\u092C| \u092A\u093E|\u094B \u0915|\u0947 \u092C|\u094B\u0917 | \u0909\u092A|\u0938\u094D\u0924|\u092A\u0930\u093F|\u0928 \u092A|\u0947 \u0924|\u094D\u0924\u0930|\u0932\u0947\u0932|\u0947 \u0913|\u091A\u093E\u0939| \u091A\u093E|\u092F \u0915|\u0935\u093E |\u0947\u0936 |\u092F \u0938|\u0928 \u0939|\u0937\u0923 |\u093E \u092C|\u0964 \u0924|\u090F\u0915 |\u090F\u0932 |\u0940\u092F |\u0915\u0947\u0915|\u0947 \u0939|\u0930 \u0906|\u093F \u0915|\u0938\u094D\u0925|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093E\u092E\u093E|\u0930\u0940\u092F|\u094D\u0930\u0940|\u0924\u093F\u0915|\u093E\u0924\u093F| \u092C\u093F|\u091A\u093E\u0930|\u0947 \u0906|\u093E\u0938 | \u0909\u091A|\u093E \u0924|\u092F\u0915\u094D|\u094D\u092F\u0915|\u093F\u0932 |\u092E\u092F |\u0938\u092E\u092F|\u0936\u093E\u0926|\u092A\u092F\u094B|\u0909\u092A\u092F|\u0947 \u0916|\u0930\u093F\u0935| \u092A\u0942|\u0947 \u0932|\u0947 \u091A|\u094C\u0928\u094B|\u0915\u094C\u0928| \u0915\u094C|\u0902 \u0915|\u0938\u0902\u0917|\u0928 \u0926|\u0902 \u0938|\u0923 \u092A|\u094D\u0937\u0923|\u0930 \u0928|\u0947 \u0928|\u094B \u092D|\u0915\u0930\u094B|\u093E \u0914|\u0930\u0924\u093E|\u093E\u0935 |\u092D\u093E\u0935|\u0915 \u0914|\u0930\u094D\u092E|\u094B\u0938\u0930|\u0926\u094B\u0938|\u0923 \u0915|\u0947 \u092A|\u0928 \u0914|\u092C \u0939|\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u093E\u092C\u0947|\u0928\u093F\u092F|\u091A\u093F\u0924|\u0909\u091A\u093F|\u093F\u0924\u094D|\u0917 \u0915|\u0947\u0964 |\u0924 \u0938|\u0940 \u0936|\u0902 \u0936|\u090F\u0915\u0930|\u0964 \u090F|\u0924\u0928 | \u0913 |\u0930\u0940 |\u094D\u0930 |\u091C\u0947 |\u0915 \u0915| \u0938\u0940|\u0938\u0928 |\u093F\u0935\u093E| \u0905\u0928|\u0942\u0930\u093E| \u092C\u091A|\u090F\u0964 | \u092C\u0947|\u0924 \u0939| \u0924\u0915| \u092E\u093F|\u0927\u093E\u0930|\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u093F\u0932\u093E|\u094D\u0935\u093E|\u093F \u092E| \u0906\u0926|\u0928\u0947 |\u0915\u090F\u0932| \u0915\u090F|\u094D\u092F\u093E" } }, y = 2048, p = 10, m2 = 300, r = {}.hasOwnProperty, t, l3 = {};
  for (t in s2)
    if (r.call(s2, t)) {
      let n3 = s2[t], a6;
      l3[t] = {};
      for (a6 in n3)
        if (r.call(n3, a6)) {
          let e3 = n3[a6].split("|"), o5 = {}, i3 = e3.length;
          for (; i3--; )
            o5[e3[i3]] = i3;
          l3[t][a6] = o5;
        }
    }
  function c2(n3, a6 = {}) {
    let e3 = [...a6.whitelist || [], ...a6.only || []], o5 = [...a6.blacklist || [], ...a6.ignore || []], i3 = a6.minLength !== null && a6.minLength !== void 0 ? a6.minLength : p;
    if (!n3 || n3.length < i3)
      return d();
    n3 = n3.slice(0, y);
    let u5 = z(n3, k);
    return !u5[0] || !(u5[0] in l3) ? !u5[0] || u5[1] === 0 || !g2(u5[0], e3, o5) ? d() : h(u5[0]) : w(n3, j(m(n3), l3[u5[0]], e3, o5));
  }
  function w(n3, a6) {
    let e3 = a6[0][1], o5 = n3.length * m2 - e3, i3 = -1;
    for (; ++i3 < a6.length; )
      a6[i3][1] = 1 - (a6[i3][1] - e3) / o5 || 0;
    return a6;
  }
  function z(n3, a6) {
    let e3 = -1, o5, i3;
    for (i3 in a6)
      if (r.call(a6, i3)) {
        let u5 = D(n3, a6[i3]);
        u5 > e3 && (e3 = u5, o5 = i3);
      }
    return [o5, e3];
  }
  function D(n3, a6) {
    let e3 = n3.match(a6);
    return (e3 ? e3.length : 0) / n3.length || 0;
  }
  function j(n3, a6, e3, o5) {
    a6 = f3(a6, e3, o5);
    let i3 = [], u5;
    if (a6)
      for (u5 in a6)
        r.call(a6, u5) && i3.push([u5, v(n3, a6[u5])]);
    return i3.length === 0 ? d() : i3.sort(F);
  }
  function v(n3, a6) {
    let e3 = 0, o5 = -1;
    for (; ++o5 < n3.length; ) {
      let i3 = n3[o5], u5 = m2;
      i3[0] in a6 && (u5 = i3[1] - a6[i3[0]] - 1, u5 < 0 && (u5 = -u5)), e3 += u5;
    }
    return e3;
  }
  function f3(n3, a6, e3) {
    if (a6.length === 0 && e3.length === 0)
      return n3;
    let o5 = {}, i3;
    for (i3 in n3)
      g2(i3, a6, e3) && (o5[i3] = n3[i3]);
    return o5;
  }
  function g2(n3, a6, e3) {
    return a6.length === 0 && e3.length === 0 ? !0 : (a6.length === 0 || a6.includes(n3)) && !e3.includes(n3);
  }
  function d() {
    return h("und");
  }
  function h(n3) {
    return [[n3, 1]];
  }
  function F(n3, a6) {
    return n3[1] - a6[1];
  }

  // utils/detect_chinese.ts
  var chineseRegex = /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g, japaneseRegex = /[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g, koreanRegex = /[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g, punctuationRegex = /(\s+)|([\p{P}\p{S}])/gu, regexGroups = [
    ["zh-CN", chineseRegex],
    [
      "ja",
      japaneseRegex
    ],
    ["ko", koreanRegex]
  ];
  function detectChinese(text) {
    if (!text)
      return "auto";
    let maxCountLang = "auto", currentMaxCount = 0, punctuationMatchesLength = 0, punctuationMatches = text.match(punctuationRegex);
    punctuationMatches && (punctuationMatchesLength = punctuationMatches.reduce((sum, item) => sum + item.length, 0));
    let allLettersLength = text.length - punctuationMatchesLength;
    for (let group of regexGroups) {
      let regex = group[1], lang = group[0], matches = text.match(regex), langLength = matches ? matches.length : 0;
      langLength > currentMaxCount && (currentMaxCount = langLength, maxCountLang = lang);
    }
    return currentMaxCount * 2.5 / allLettersLength > 0.5 ? maxCountLang : "auto";
  }

  // utils/language_detect.ts
  var langMap = /* @__PURE__ */ new Map([
    ["afr", "af"],
    ["amh", "am"],
    ["arb", "ar"],
    ["azj", "az"],
    ["bel", "be"],
    ["bul", "bg"],
    ["ben", "bn"],
    ["bos", "bs"],
    ["cat", "ca"],
    ["ceb", "ceb"],
    ["ces", "cs"],
    ["dan", "da"],
    ["deu", "de"],
    ["ell", "el"],
    ["eng", "en"],
    ["epo", "eo"],
    ["spa", "es"],
    ["est", "et"],
    ["fas", "fa"],
    ["fin", "fi"],
    ["fra", "fr"],
    ["gax", "ga"],
    ["glg", "gl"],
    ["guj", "gu"],
    ["hau", "ha"],
    ["heb", "he"],
    ["hin", "hi"],
    ["hrv", "hr"],
    ["hun", "hu"],
    ["hye", "hy"],
    ["ind", "id"],
    ["ibo", "ig"],
    ["ita", "it"],
    ["jpn", "ja"],
    ["jav", "jw"],
    ["kat", "ka"],
    ["kaz", "kk"],
    ["khm", "km"],
    ["kan", "kn"],
    ["kor", "ko"],
    ["ckb", "ku"],
    ["lao", "lo"],
    ["lit", "lt"],
    ["lav", "lv"],
    ["min", "mi"],
    ["mkd", "mk"],
    ["mal", "ml"],
    ["mar", "mr"],
    ["mya", "my"],
    ["nep", "ne"],
    ["nld", "nl"],
    ["nob", "no"],
    ["nya", "ny"],
    ["pan", "pa"],
    ["pol", "pl"],
    ["pbu", "ps"],
    ["por", "pt"],
    ["ron", "ro"],
    ["rus", "ru"],
    ["sin", "si"],
    ["slk", "sk"],
    ["slv", "sl"],
    ["sna", "sn"],
    ["som", "so"],
    ["als", "sq"],
    ["srp", "sr"],
    ["sun", "su"],
    ["swe", "sv"],
    ["swh", "sw"],
    ["tam", "ta"],
    ["tel", "te"],
    ["tgk", "tg"],
    ["tha", "th"],
    ["toi", "to"],
    ["tur", "tr"],
    ["ukr", "uk"],
    ["urd", "ur"],
    ["uzn", "uz"],
    ["vie", "vi"],
    ["xho", "xh"],
    ["ydd", "yi"],
    ["yor", "yo"],
    ["cmn", "zh-CN"],
    ["zul", "zu"]
  ]);
  function languageDetect(text, minLength) {
    if (!text)
      return "auto";
    !minLength && minLength !== 0 && (minLength = 50);
    let chineseLike = detectChinese(text);
    if (chineseLike !== "auto")
      return chineseLike;
    let options2 = { minLength, whitelist: [...langMap.keys()] }, result = c2(text, options2);
    if (result && result.length > 0) {
      if (result.length > 1 && result[0][0] !== "eng" && result[1][0] === "eng" && result[1][1] > 0.6)
        return "en";
      let [lang] = result[0], language = langMap.get(lang);
      if (language)
        return language;
    }
    return "auto";
  }

  // env.ts
  function getEnv() {
    return typeof process > "u" && typeof Deno < "u" ? Deno.env.toObject() : define_process_env_default;
  }
  var env = getEnv();
  function isMonkey() {
    return env.IMMERSIVE_TRANSLATE_USERSCRIPT === "1";
  }
  function isDeno() {
    return typeof Deno < "u";
  }

  // browser/userscript_polyfill.ts
  if (
    // @ts-ignore: it's ok
    typeof GM > "u" && typeof GM_info < "u" && // @ts-ignore: it's ok
    typeof GM_getValue < "u"
  ) {
    let xmlHttpRequest = null;
    typeof GM_xmlhttpRequest < "u" ? xmlHttpRequest = GM_xmlhttpRequest : typeof GM_xmlHttpRequest < "u" && (xmlHttpRequest = GM_xmlHttpRequest);
    let registerMenuCommand = null;
    typeof GM_registerMenuCommand < "u" && (registerMenuCommand = GM_registerMenuCommand), globalThis.GM = {
      // @ts-ignore: it's ok
      info: GM_info,
      // @ts-ignore: it's ok
      getValue: GM_getValue,
      // @ts-ignore: it's ok
      setValue: GM_setValue,
      // @ts-ignore: it's ok
      deleteValue: GM_deleteValue,
      // @ts-ignore: it's ok
      listValues: GM_listValues,
      // @ts-ignore: it's ok
      xmlHttpRequest,
      // @ts-ignore: it's ok
      registerMenuCommand
    };
  }
  var storageApi = {
    get: async (key) => {
      if (key === null) {
        let keys = await GM.listValues();
        Array.isArray(keys) || keys && isObject(keys) && (keys = Object.keys(keys));
        let result2 = {};
        for (let key2 of keys)
          result2[key2] = await GM.getValue(key2);
        return result2;
      }
      let allKeys = [];
      typeof key == "string" ? allKeys = [key] : Array.isArray(key) ? allKeys = key : allKeys = Object.keys(key);
      let result = {};
      for (let key2 of allKeys)
        result[key2] = await GM.getValue(key2);
      return result;
    },
    set: async (obj) => {
      for (let key in obj)
        await GM.setValue(key, obj[key]);
    },
    remove: async (key) => {
      if (typeof key == "string")
        await GM.deleteValue(key);
      else if (Array.isArray(key))
        for (let k5 of key)
          await GM.deleteValue(k5);
    }
  };
  function getManifest() {
    if (typeof GM < "u" && GM && GM.info && GM.info.script) {
      let info = GM.info.script || {};
      return info._isUserscript = !0, info;
    } else
      return {
        _isUserscript: !0,
        version: "0.0.0"
      };
  }
  function openOptionsPage(newTab = !0) {
    let env4 = getEnv();
    GM && GM.info && GM.info.scriptHandler && GM.info.scriptHandler === "Stay" ? newTab = !1 : newTab = !0;
    let optionsUrl = env4.OPTIONS_URL;
    if (optionsUrl)
      newTab ? globalThis.open(optionsUrl, "_blank") : globalThis.location.href = optionsUrl;
    else
      throw new Error("options url not found");
  }
  function openAboutPage(newTab = !1) {
    let optionsUrl = getEnv().OPTIONS_URL;
    if (optionsUrl)
      newTab ? globalThis.open(optionsUrl, "_blank") : globalThis.location.href = optionsUrl + "#about";
    else
      throw new Error("options url not found");
  }
  function getAcceptLanguages() {
    return globalThis.navigator.languages || // @ts-ignore: it's ok
    [globalThis.navigator.language || globalThis.navigator.userLanguage];
  }
  var browser = {
    storage: {
      local: storageApi,
      sync: storageApi
    },
    runtime: {
      getManifest,
      lastError: null,
      openOptionsPage
    },
    extra: {
      detectLanguage: languageDetect,
      openAboutPage
    },
    i18n: {
      getAcceptLanguages,
      detectLanguage: languageDetect
    }
  };
  function isObject(obj) {
    return obj !== null && typeof obj == "object";
  }
  globalThis.immersiveTranslateBrowserAPI = browser;

  // browser/userscript_fetch_polifill.js
  (function() {
    "use strict";
    var Promise2 = window.Bluebird || window.Promise;
    if (self.GM_fetch)
      return;
    let httpRequest;
    if (typeof GM < "u" && GM.xmlHttpRequest)
      httpRequest = GM.xmlHttpRequest;
    else if (typeof GM < "u" && GM_xmlhttpRequest)
      httpRequest = GM_xmlhttpRequest;
    else if (typeof GM_xmlhttpRequest < "u")
      httpRequest = GM_xmlhttpRequest;
    else if (typeof GM < "u" && GM.xmlHttpRequest)
      httpRequest = GM.xmlHttpRequest;
    else {
      console.error(
        "GM_xmlhttpRequest or GM.xmlHttpRequest not found, do not use it"
      );
      return;
    }
    function normalizeName(name) {
      if (typeof name != "string" && (name = name.toString()), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name))
        throw new TypeError("Invalid character in header field name");
      return name.toLowerCase();
    }
    function normalizeValue(value) {
      return typeof value != "string" && (value = value.toString()), value;
    }
    function consumed(body) {
      if (body.bodyUsed)
        return Promise2.reject(new TypeError("Already read"));
      body.bodyUsed = !0;
    }
    function fileReaderReady(reader) {
      return new Promise2(function(resolve, reject) {
        reader.onload = function() {
          resolve(reader.result);
        }, reader.onerror = function() {
          reject(reader.error);
        };
      });
    }
    function readBlobAsArrayBuffer(blob) {
      var reader = new FileReader();
      return reader.readAsArrayBuffer(blob), fileReaderReady(reader);
    }
    function readBlobAsText(blob) {
      var reader = new FileReader();
      return reader.readAsText(blob), fileReaderReady(reader);
    }
    var support = {
      blob: "FileReader" in self && "Blob" in self && function() {
        try {
          return new Blob(), !0;
        } catch {
          return !1;
        }
      }(),
      formData: "FormData" in self
    }, methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
    function normalizeMethod(method) {
      var upcased = method.toUpperCase();
      return methods.indexOf(upcased) > -1 ? upcased : method;
    }
    function decode(body) {
      var form = new FormData();
      return body.trim().split("&").forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split("="), name = split.shift().replace(/\+/g, " "), value = split.join("=").replace(/\+/g, " ");
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      }), form;
    }
    function headers2(responseHeaders) {
      var head = new Headers();
      if (typeof responseHeaders == "string") {
        var pairs = responseHeaders.trim().split(`
`);
        pairs.forEach(function(header) {
          var split = header.trim().split(":"), key2 = split.shift().trim(), value = split.join(":").trim();
          head.append(key2, value);
        });
      } else if (typeof responseHeaders == "object")
        for (var key in responseHeaders)
          Array.isArray(responseHeaders[key]) && responseHeaders[key].forEach(function(value) {
            head.append(key, value);
          });
      return head;
    }
    self.Headers = Headers, self.Request = Request, self.Response = Response, self.GM_fetch = function(input, init) {
      var request3, theFinalBody;
      return init || (typeof input == "string" ? init = {} : input = init.url), Request && Request.prototype && Request.prototype.isPrototypeOf && Request.prototype.isPrototypeOf(init) ? request3 = init : (init.body && (theFinalBody = init.body), request3 = new Request(input, init)), new Promise2(function(resolve, reject) {
        var xhr_details = {};
        init && init.extra && (xhr_details = init.extra);
        var _parsedRespHeaders;
        function responseURL(finalUrl, respHeaders) {
          if (finalUrl)
            return finalUrl;
          if (respHeaders.get("X-Request-URL"))
            return respHeaders.get("X-Request-URL");
        }
        xhr_details.method = request3.method || "GET", xhr_details.url = request3.url, xhr_details.synchronous = !1, xhr_details.onload = function(resp) {
          var status = resp.status;
          if (status < 100 || status > 599) {
            reject(new TypeError("Network request failed"));
            return;
          }
          var rawRespHeaders = resp.responseHeaders;
          _parsedRespHeaders = headers2(rawRespHeaders);
          var finalUrl = responseURL(
            resp.finalUrl || resp.responseURL,
            _parsedRespHeaders
          );
          _parsedRespHeaders.set("X-Final-URL", finalUrl);
          var options2 = {
            status,
            statusText: resp.statusText,
            headers: _parsedRespHeaders,
            url: finalUrl
          }, body = resp.responseText;
          let finalResponse = new Response(body, options2);
          resolve(finalResponse);
        }, xhr_details.onerror = function(err) {
          console.error("fetch error", err), reject(new TypeError("Network request failed"));
        }, xhr_details.headers = {}, request3.headers.forEach(function(value, name) {
          xhr_details.headers[name] = value;
        }), theFinalBody && (xhr_details.data = theFinalBody), httpRequest(xhr_details);
      });
    }, self.GM_fetch.polyfill = !0;
  })();

  // locales/zh-CN.json
  var zh_CN_default = {
    lineBreakMaxTextCount: "\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF",
    "translate-pdf": "\u70B9\u51FB\u7FFB\u8BD1 PDF",
    "translate-firefox-local-pdf": "\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",
    enableLineBreak: "\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",
    sponsorLabel: "$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",
    help: "\u5E2E\u52A9",
    browserShortcutsNoteForFirefox: "Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",
    browserShortcutsNoteForChrome: "\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",
    browserShortcutsSucks: "\u4FEE\u6539\u5FEB\u6377\u952E\u8BF7\u624B\u52A8\u8F93\u5165\uFF0C\u683C\u5F0F\u4E3A\uFF1A",
    enableLineBreakDescription: "\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB",
    "browser.brandName": "\u6C89\u6D78\u5F0F\u7FFB\u8BD1",
    "browser.brandDescription": "\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u817E\u8BAF/\u706B\u5C71\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002",
    "browser.toggleTranslatePage": "\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",
    "browser.toggleTranslateTheWholePage": "\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587",
    "browser.toggleTranslateToThePageEndImmediately": "\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587",
    "browser.toggleTranslateTheMainPage": "\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587",
    "browser.openOptionsPage": "\u6253\u5F00\u8BBE\u7F6E\u9875",
    "browser.toggleTranslationMask": "\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",
    "browser.translateLocalPdfFile": "\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6",
    confirmResetConfig: "\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",
    translationLineBreakSettingTitle: "\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",
    smartLineBreak: "\u667A\u80FD\u6362\u884C",
    alwaysLineBreak: "\u603B\u662F\u6362\u884C",
    toggleBeta: "\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",
    betaDescription: "\u5F00\u542F\u540E\u4F1A\u542F\u7528\u4E00\u4E9B\u5B9E\u9A8C\u6027\u529F\u80FD\uFF0C\u4EE5\u53CA\u8FD8\u5728\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1, \u53EF\u4EE5<1>\u52A0Telegram \u7FA4\u7EC4</1>\u4E86\u89E3",
    translationLineBreakSettingDescription: "\u5BF9\u4E8E\u8BD1\u6587\u7684\u4F4D\u7F6E\uFF1A\u603B\u662F\u6362\u884C(\u66F4\u6574\u9F50)/\u667A\u80FD\u6362\u884C\uFF08\u5F53\u6BB5\u843D\u591A\u4E8E{count}\u4E2A\u5B57\u7B26\u624D\u6362\u884C\u663E\u793A\u8BD1\u6587\uFF0C\u66F4\u7701\u7A7A\u95F4\uFF09",
    tempTranslateDomainTitle: "\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",
    tempTranslateDomainDescription: "\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1",
    xMinutes: "{count} \u5206\u949F",
    disabled: "\u7981\u7528",
    changelog: "\u66F4\u65B0\u65E5\u5FD7",
    toggleTranslatePageWhenThreeFingersOnTheScreen: "\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",
    toggleTranslationMaskWhenThreeFingersOnTheScreen: "\u591A\u6307\u540C\u65F6\u89E6\u6478\u5219\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",
    addUrlDescription: "\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",
    general: "\u57FA\u672C\u8BBE\u7F6E",
    clickToExpandConfig: "\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",
    import: "\u4ECE\u6587\u4EF6\u5BFC\u5165",
    export: "\u5BFC\u51FA\u5230\u6587\u4EF6",
    toggleDebug: "\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7",
    "fingers.0": "\u5173\u95ED",
    "fingers.2": "\u53CC\u6307\u89E6\u6478",
    "fingers.3": "\u4E09\u6307\u89E6\u6478",
    "fingers.4": "\u56DB\u6307\u89E6\u6478",
    "fingers.5": "\u4E94\u6307\u89E6\u6478",
    document: "\u6587\u6863",
    resetSuccess: "\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",
    resetThisSuccess: "\u91CD\u7F6E\u6210\u529F",
    saved: "\u4FDD\u5B58\u6210\u529F",
    successImportConfig: "\u6210\u529F\u5BFC\u5165\u914D\u7F6E",
    goAdvancedSettings: "\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",
    goAdvancedInterfaceSettings: "\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",
    advanced: "\u8FDB\u9636\u8BBE\u7F6E",
    advancedDescription: "\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",
    developer: "\u5F00\u53D1\u8005\u8BBE\u7F6E",
    donateCafe: "\u8BF7\u5F00\u53D1\u8005\u559D\u676F\u5496\u5561",
    "translate to the bottom of the page": "\u6253\u5F00\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",
    feedback: "\u95EE\u9898\u53CD\u9988",
    toggleTranslatePage: "\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",
    translateToThePageEndImmediatelyDescription: "\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u7ACB\u5373\u7FFB\u8BD1\u7F51\u9875\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09",
    "translate all areas of the page": "\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",
    translationAreaDescription: "\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\u53BB\u7FFB\u8BD1\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09",
    "the number of characters to be translated first": "\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF1F",
    "interface language": "\u754C\u9762\u8BED\u8A00",
    "display both the original text and the translation": "\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587",
    "keyboard shortcuts": "\u952E\u76D8\u5FEB\u6377\u952E",
    modify: "\u4FEE\u6539\u5FEB\u6377\u952E",
    reset: "\u91CD\u7F6E",
    close: "\u5173\u95ED",
    homepage: "\u4E3B\u9875",
    more: "\u66F4\u591A",
    translateTheWholePage: "\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",
    changeToTranslateTheWholePage: "\u5207\u6362\u4E3A\u7FFB\u8BD1\u6240\u6709\u533A\u57DF",
    changeToTranslateTheMainPage: "\u5207\u6362\u4E3A\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",
    translateToThePageEndImmediately: "\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8",
    translateTheMainPage: "\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",
    "The local rules are up to date": "\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:",
    "Successfully synchronized with the latest official rules:": "\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:",
    "Checking for updates": "\u6B63\u5728\u68C0\u67E5\u66F4\u65B0",
    "Rules are being synchronized": "\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",
    localVersionIsTooOld: "\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u4E4B\u540E\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",
    badUserscriptBrowser: "\u8BE5\u6D4F\u89C8\u5668\u672A\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u7684\u63A5\u53E3\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334</1>\u7684\u6D4F\u89C8\u5668\u5982(Firefox Nightly \u7248\u672C)",
    foundNewVersion: "\u53D1\u73B0\u65B0\u7248\u672C",
    theLocalExtensionIsUpToUpdate: "\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",
    failToSyncRules: "\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",
    retry: "\u70B9\u6B64\u91CD\u8BD5",
    failedReason: "\u5931\u8D25\u539F\u56E0",
    currentRuleVersion: "\u5F53\u524D\u89C4\u5219\u7248\u672C",
    calculating: "\u8BA1\u7B97\u4E2D",
    unknownError: "\u672A\u77E5\u9519\u8BEF",
    canNotFetchRemoteRule: "\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",
    enableAlphaSuccess: "\u5DF2\u5F00\u542FAlpha\u529F\u80FD",
    disableAlphaSuccess: "\u5DF2\u5173\u95EDAlpha\u529F\u80FD",
    cacheSize: "\u7F13\u5B58\u5927\u5C0F\uFF1A",
    cleaning: "\u6E05\u7406\u4E2D",
    cleanCache: "\u6E05\u9664\u7F13\u5B58",
    options: "\u8BBE\u7F6E",
    about: "\u5173\u4E8E",
    service: "\u7FFB\u8BD1\u670D\u52A1",
    needAction: "(\u53BB\u8BBE\u7F6E)",
    goSettings: "\u53BB\u8BBE\u7F6E",
    needActionForOptions: "(\u9700\u8BBE\u7F6E)",
    translationEngine: "\u5F15\u64CE\u9009\u9879",
    sourceLanguage: "\u539F\u6587\u8BED\u8A00",
    target: "\u76EE\u6807\u8BED\u8A00",
    popupSourceLanguage: "\u539F\u6587\u8BED\u8A00",
    popupTarget: "\u76EE\u6807\u8BED\u8A00",
    popupService: "\u7FFB\u8BD1\u670D\u52A1",
    forThisSite: "\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",
    alwaysTranslateSomeLanguage: "\u603B\u662F\u7FFB\u8BD1{language}",
    neverTranslateSomeLanguage: "\u6C38\u4E0D\u7FFB\u8BD1{language}",
    alwaysTranslateSomeSite: "\u603B\u662F\u7FFB\u8BD1 {hostname}",
    neverTranslateSomeSite: "\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",
    add: "\u6DFB\u52A0",
    default: "\u9ED8\u8BA4",
    forThisLanguage: "\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A",
    "add url": "\u8F93\u5165URL",
    edit: "\u7F16\u8F91",
    "translate other languages into specific language": "\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00",
    "select translation service": "\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",
    language: "\u8BED\u8A00",
    "show-original": "\u663E\u793A\u539F\u6587",
    translate: "\u7FFB\u8BD1",
    Translated: "\u5DF2\u7FFB\u8BD1",
    Translating: "\u7FFB\u8BD1\u4E2D",
    Error: "\u9519\u8BEF",
    allowCacheTranslations: "\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09",
    "translation display": "\u8BD1\u6587\u663E\u793A\u6837\u5F0F",
    "select diplay style": "\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",
    interface: "\u754C\u9762\u8BBE\u7F6E",
    import_export: "\u5BFC\u5165/\u5BFC\u51FA",
    import_export_title: "\u5BFC\u5165/\u5BFC\u51FA\u914D\u7F6E",
    syncToGoogleDrive: "\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65",
    previewAllThemes: "\u9884\u89C8\u5168\u90E8\u6837\u5F0F",
    "translationTheme.none": "\u65E0",
    "translationTheme.dashed": "\u865A\u7EBF\u4E0B\u5212\u7EBF",
    "translationTheme.dotted": "\u70B9\u72B6\u4E0B\u5212\u7EBF",
    "translationTheme.dashedBorder": "\u865A\u7EBF\u8FB9\u6846",
    "translationTheme.underline": "\u76F4\u7EBF\u4E0B\u5212\u7EBF",
    "translationTheme.mask": "\u6A21\u7CCA\u6548\u679C",
    "translationTheme.paper": "\u767D\u7EB8\u9634\u5F71\u6548\u679C",
    "translationTheme.dividingLine": "\u5206\u5272\u7EBF",
    "translationTheme.highlight": "\u9AD8\u4EAE",
    "translationTheme.marker": "\u9A6C\u514B\u7B14",
    "translationTheme.blockquote": "\u5F15\u7528\u6837\u5F0F",
    "translationTheme.weakening": "\u5F31\u5316",
    "translationTheme.italic": "\u659C\u4F53",
    "translationTheme.bold": "\u52A0\u7C97",
    "translationTheme.thinDashed": "\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF",
    "translationTheme.nativeDashed": "\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF",
    "translationTheme.nativeDotted": "\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF",
    "translationTheme.nativeUnderline": "\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF",
    "translationTheme.wavy": "\u6CE2\u6D6A\u7EBF",
    "translationServices.tencent": "\u817E\u8BAF\u7FFB\u8BD1\u541B",
    "translationServices.google": "\u8C37\u6B4C\u7FFB\u8BD1",
    "translationServices.bai": "\u767E\u5EA6(Alpha)",
    "translationServices.baidu": "\u767E\u5EA6\u7FFB\u8BD1",
    "translationServices.aliyun": "\u963F\u91CC\u4E91\u7FFB\u8BD1",
    "translationServices.volc": "\u706B\u5C71\u7FFB\u8BD1",
    "translationServices.deeplx": "DeeplX(Beta)",
    "translationServices.bing": "\u5FC5\u5E94\u7FFB\u8BD1",
    "translationServices.deepl": "Deepl",
    "translationServices.wechat": "\u5FAE\u4FE1\u7FFB\u8BD1",
    "translationServices.azure": "\u5FAE\u8F6F\u7FFB\u8BD1",
    "translationServices.ibm": "IBM Watson",
    "translationServices.aws": "\u4E9A\u9A6C\u900A\u7FFB\u8BD1",
    "translationServices.mock": "\u6A21\u62DF\u7FFB\u8BD1",
    "translationServices.mock2": "\u6A21\u62DF\u7FFB\u8BD12",
    "translationServices.caiyun": "\u5F69\u4E91\u5C0F\u8BD1",
    "translationServices.volcAlpha": "\u706B\u5C71 (Alpha)",
    "translationServices.openl": "OpenL",
    "translationServices.youdao": "\u6709\u9053\u7FFB\u8BD1",
    "translationServices.transmart": "\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1",
    "translationServices.niu": "\u5C0F\u725B\u7FFB\u8BD1",
    "translationServices.d": "D (Alpha)",
    "translationServices.dpro": "D Pro (Canary)",
    "translate title": "\u7FFB\u8BD1\u9875\u9762\u6807\u9898",
    "always languages": "\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",
    neverTranslateLanguagesLabel: "\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",
    neverTranslateTheFollowingLanguagesDescription: "\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u7FFB\u8BD1\u8BE5\u6BB5\u843D",
    enableUserscriptPagePopup: "\u603B\u662F\u5728\u9875\u9762\u4E0A\u5C55\u793A Popup \u6D6E\u7A97",
    enableUserscriptPagePopupDescription: "\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875",
    "always translate the following languages": "\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00",
    "always sites": "\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740",
    "always translate the following sites": "\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00",
    "never sites": "\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740",
    "never translate the following sites": "\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1",
    "please refer to": "\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",
    KeyAndConfigurationTutorial: "\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",
    useAboveStyleForTheseSites: "\u5F53\u524D\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\u4E3A\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u8BA9\u67D0\u4E9B\u7F51\u7AD9\u4F7F\u7528\u8BE5\u6837\u5F0F\uFF0C\u70B9\u51FB\u53F3\u8FB9\u7684\u6309\u94AE\u6DFB\u52A0\u540E\uFF0C\u518D\u5207\u6362\u5230\u53E6\u4E00\u79CD\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\uFF0C\u8FD9\u6837\u5373\u53EF\u5B9E\u73B0\u4E0D\u540C\u7F51\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8BD1\u6587\u6837\u5F0F\u3002",
    currentUrl: "\u5F53\u524D\u7F51\u5740",
    confirm: "\u4FDD\u5B58",
    cancel: "\u53D6\u6D88",
    delete: "\u5220\u9664",
    "languages.auto": "\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00",
    syncToCloud: "\u540C\u6B65\u5230\u4E91\u7AEF",
    syncToCloudDescription: "\u5F00\u542F\u540E\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668/\u6CB9\u7334\u811A\u672C\u4E4B\u95F4\u540C\u6B65\u914D\u7F6E,\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",
    authFail: "\u6388\u6743\u5931\u8D25",
    syncTitle: "\u624B\u52A8\u5907\u4EFD\u7BA1\u7406",
    import_hint: "\u5BFC\u5165",
    upload: "\u4E0A\u4F20",
    revokeAuth: "\u64A4\u9500\u6388\u6743",
    uploadFail: "\u4E0A\u4F20\u5931\u8D25",
    download: "\u4E0B\u8F7D",
    importSuccess: "\u5BFC\u5165\u6210\u529F",
    importFail: "\u5BFC\u5165\u5931\u8D25",
    deleteFail: "\u5220\u9664\u5931\u8D25",
    isShowContextMenu: "\u521B\u5EFA\u53F3\u952E\u83DC\u5355",
    backupToCloud: "\u624B\u52A8\u7BA1\u7406\u5907\u4EFD\u6587\u4EF6",
    create_new_backup: "\u65B0\u589E\u5907\u4EFD\u8282\u70B9",
    maxBackupFiles: "\u6700\u591A\u53EF\u4EE5\u5907\u4EFD{count}\u4E2A\u4E0D\u540C\u7684\u8282\u70B9, \u8BF7\u5220\u9664\u4E0D\u9700\u8981\u7684\u8282\u70B9",
    backupToCloudDescription: "\u624B\u52A8\u4E0A\u4F20\u6216\u6062\u590D\u5907\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8BB83\u4E2A\u4E0D\u540C\u7684\u5907\u4EFD",
    successSyncConfig: "\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",
    syncFail: "\u540C\u6B65\u5931\u8D25",
    updatedAt: "\u66F4\u65B0\u4E8E {date}",
    lastSyncedAt: "\u4E0A\u6B21\u68C0\u67E5\u4E8E {date}",
    downloadFail: "\u4E0B\u8F7D\u5931\u8D25",
    clickToDownload: "\u70B9\u51FB\u4E0B\u8F7D",
    aboutLabel: "\u5173\u4E8E - \u53CD\u9988 - \u8D5E\u52A9",
    "browser.openAboutPage": "\u5173\u4E8E/\u53CD\u9988/\u8D5E\u52A9",
    aboutIntro: "\u8BE5\u6269\u5C55\u514D\u8D39\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F <br/><br/>\u611F\u8C22\u8FD9\u4E9B<1>\u8D5E\u52A9\u8005\u4EEC</1>, \u7531\u4E8E\u4ED6/\u5979\u4EEC\u7684\u652F\u6301\uFF0C\u66F4\u591A\u7684\u4EBA\u53EF\u4EE5\u514D\u8D39\u5730\u4F7F\u7528\u8FD9\u4E2A\u5DE5\u5177\u3002\u5982\u679C\u6709\u4F59\u529B\uFF0C\u4F60\u53EF\u4EE5<2>\u70B9\u51FB\u8FD9\u91CC\u8D5E\u52A9</2> \u6211\u7684\u5DE5\u4F5C\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u5173\u6CE8\u6211\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\u4EE5\u53CA\u4E0B\u65B9\u7684\u90AE\u4EF6\u8BA2\u9605\u8FFD\u8E2A\u66F4\u65B0\u3002",
    projectHomepage: "\u9879\u76EE\u4E3B\u9875",
    joinTelegramGroup: "\u52A0\u5165 Telegram \u7FA4\u53C2\u4E0E\u529F\u80FD\u8BA8\u8BBA",
    joinTelegramChannel: "\u5173\u6CE8 Telegram \u9891\u9053\u83B7\u53D6\u6700\u65B0\u66F4\u65B0",
    feedbackAndJoin: "\u95EE\u9898\u53CD\u9988/\u52A0\u7FA4",
    autoSync: "\u81EA\u52A8\u5B9A\u65F6\u540C\u6B65",
    loadingThemeTitle: "Loading \u6837\u5F0F",
    loadingThemeDescription: "\u8BBE\u7F6E\u7B49\u5F85\u8BD1\u6587\u52A0\u8F7D\u65F6\u7684\u6837\u5F0F",
    "loadingTheme.spinner": "\u8F6C\u5708\u52A8\u753B Spinner",
    "loadingTheme.text": "\u9759\u6001\u6587\u5B57 ... ",
    "loadingTheme.none": "\u4E0D\u663E\u793A",
    developerDescription: "\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863",
    successSyncButNoChange: "\u5F53\u524D\u914D\u7F6E\u4E0E\u4E91\u7AEF\u4E00\u81F4"
  };

  // locales/zh-TW.json
  var zh_TW_default = {
    lineBreakMaxTextCount: "\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u7B26\u6578\u91CF",
    "translate-pdf": "\u9EDE\u64CA\u7FFB\u8B6FPDF",
    "translate-firefox-local-pdf": "\u9EDE\u64CA\u4E0A\u50B3PDF",
    enableLineBreak: "\u662F\u5426\u958B\u5553\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",
    sponsorLabel: "$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",
    help: "\u5E6B\u52A9",
    browserShortcutsNoteForFirefox: "Firefox\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u6377\u9375\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762`about:addons`\uFF0C\u7136\u5F8C\u9EDE\u64CA\u300C\u8A2D\u7F6E\u300D\uFF0C\u518D\u9EDE\u64CA\u300C\u7BA1\u7406\u5FEB\u6377\u9375\u300D\u5373\u53EF\u8A2D\u7F6E",
    browserShortcutsNoteForChrome: "\u985EChrome\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u7D50\u75C2\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u2019\u7BA1\u7406\u5FEB\u6377\u9375\u2018\u9762\u677F\uFF08\u2019chrome://extensions/shortcuts\u2018\uFF09\u8A2D\u7F6E\uFF0C\u9EDE\u64CA\u4E0B\u65B9\u6309\u9215\u8DF3\u8F49\u5230\u5FEB\u6377\u9375\u7BA1\u7406\u9801\u9762\u3002",
    browserShortcutsSucks: "\u4FEE\u6539\u5FEB\u6377\u9375\u8ACB\u624B\u52D5\u8F38\u5165\uFF0C\u683C\u5F0F\u7232\uFF1A",
    enableLineBreakDescription: "\u958B\u5553\u5F8C\uFF0C\u8B1B\u6703\u5728\u9577\u77ED\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u7B26\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80",
    "browser.brandName": "\u6C89\u6D78\u5F0F\u7FFB\u8B6F",
    "browser.brandDescription": "\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002",
    "browser.toggleTranslatePage": "\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",
    "browser.toggleTranslateTheWholePage": "\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587",
    "browser.toggleTranslateToThePageEndImmediately": "\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587",
    "browser.toggleTranslateTheMainPage": "\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587",
    "browser.openOptionsPage": "\u6253\u958B\u8A2D\u7F6E\u9801",
    "browser.toggleTranslationMask": "\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",
    "browser.translateLocalPdfFile": "\u7FFB\u8B6F\u672C\u5730 PDF \u6587\u4EF6",
    confirmResetConfig: "\u4F60\u78BA\u5B9A\u8981\u91CD\u8F09\u8A2D\u7F6E\u55CE?",
    translationLineBreakSettingTitle: "\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",
    smartLineBreak: "\u667A\u80FD\u6362\u884C",
    alwaysLineBreak: "\u603B\u662F\u6362\u884C",
    toggleBeta: "\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",
    betaDescription: "\u5F00\u542F\u540E\u4F1A\u542F\u7528\u4E00\u4E9B\u5B9E\u9A8C\u6027\u529F\u80FD\uFF0C\u4EE5\u53CA\u8FD8\u5728\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1, \u53EF\u4EE5<1>\u52A0Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u5185\u6D4B\u7684\u7279\u6027\u3002",
    translationLineBreakSettingDescription: "\u5BF9\u4E8E\u8BD1\u6587\u7684\u4F4D\u7F6E\uFF1A\u603B\u662F\u6362\u884C/\u667A\u80FD\u6362\u884C\uFF08\u5F53\u6BB5\u843D\u591A\u4E8E{count}\u4E2A\u5B57\u7B26\u624D\u6362\u884C\u663E\u793A\u8BD1\u6587\uFF09",
    tempTranslateDomainTitle: "\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",
    tempTranslateDomainDescription: "\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1",
    xMinutes: "{count} \u5206\u949F",
    disabled: "\u505C\u7528",
    changelog: "\u66F4\u65B0\u65E5\u8A8C",
    toggleTranslatePageWhenThreeFingersOnTheScreen: "\u4E09\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",
    addUrlDescription: "\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",
    general: "\u57FA\u672C\u8A2D\u7F6E",
    clickToExpandConfig: "\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",
    import: "\u4ECE\u6587\u4EF6\u5BFC\u5165\u914D\u7F6E",
    export: "\u5BFC\u51FA\u5230\u6587\u4EF6",
    toggleDebug: "\u5728\u63A7\u5236\u6AAF\u6253\u5370\u8ABF\u8A66\u65E5\u8A8C",
    "fingers.0": "\u5173\u95ED",
    "fingers.2": "\u53CC\u6307\u89E6\u6478",
    "fingers.3": "\u4E09\u6307\u89E6\u6478",
    "fingers.4": "\u56DB\u6307\u89E6\u6478",
    "fingers.5": "\u4E94\u6307\u89E6\u6478",
    document: "\u6587\u6A94",
    resetSuccess: "\u885D\u7F6E\u6240\u6709\u8A2D\u7F6E\u6210\u529F",
    saved: "\u6210\u529F\u5132\u5B58",
    successImportConfig: "\u6210\u529F\u532F\u5165\u8A2D\u5B9A",
    goAdvancedSettings: "\u53BB\u9032\u968E\u8A2D\u7F6E\u9801",
    goAdvancedInterfaceSettings: "\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",
    advanced: "\u9032\u968E\u8A2D\u7F6E",
    advancedDescription: "\u4E00\u4E9B\u96E3\u4EE5\u7406\u89E3\u7684\u8A2D\u7F6E\u9805\uFF08\u4E00\u822C\u7121\u9700\u8A2D\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8A8D\u5373\u53EF\uFF09",
    developer: "\u958B\u767C\u8005\u8A2D\u7F6E",
    donateCafe: "\u8ACB\u958B\u767C\u8005\u559D\u676F\u5496\u5561",
    "translate to the bottom of the page": "\u6253\u958B\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",
    feedback: "\u554F\u984C\u53CD\u994B",
    toggleTranslatePage: "\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",
    translateToThePageEndImmediatelyDescription: "\u958B\u5553\u5F8C\uFF0C\u5C07\u6703\u7ACB\u5373\u7FFB\u8B6F\u7DB2\u9801\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\uFF0C\u800C\u4E0D\u662F\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09",
    "translate all areas of the page": "\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",
    translationAreaDescription: "\u958B\u5553\u5F8C\uFF0C\u6574\u500B\u7DB2\u9801\u7684\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\uFF0C\u800C\u4E0D\u662F\u9ED8\u8A8D\u7684\u667A\u80FD\u8B58\u5225\u4E3B\u8981\u5340\u57DF\u53BB\u7FFB\u8B6F\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09",
    "the number of characters to be translated first": "\u524D\u591A\u5C11\u500B\u5B57\u7B26\u7121\u9700\u7B49\u5F85\u6EFE\u52D5\u5230\u53EF\u8996\u5340\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8B6F\uFF1F",
    "interface language": "\u754C\u9762\u8A9E\u8A00",
    "display both the original text and the translation": "\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587",
    "keyboard shortcuts": "\u9375\u76E4\u5FEB\u6377\u9375",
    modify: "\u4FEE\u6539\u5FEB\u6377\u9375",
    reset: "\u91CD\u8A2D",
    close: "\u95DC\u9589",
    homepage: "\u4E3B\u9801",
    more: "\u66F4\u591A",
    translateTheWholePage: "\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",
    changeToTranslateTheWholePage: "\u5207\u6362\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF",
    changeToTranslateTheMainPage: "\u5207\u6362\u4E3A\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",
    translateToThePageEndImmediately: "\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",
    translateTheMainPage: "\u667A\u80FD\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF",
    "The local rules are up to date": "\u672C\u5730\u9069\u914D\u898F\u5247\u5DF2\u662F\u6700\u65B0\uFF1A",
    "Successfully synchronized with the latest official rules:": "\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9069\u914D\u898F\u5247\uFF1A",
    "Checking for updates": "\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0",
    "Rules are being synchronized": "\u6B63\u5728\u540C\u6B65\u9069\u914D\u898F\u5247",
    localVersionIsTooOld: "\u672C\u5730\u64F4\u5C55\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u64F4\u5C55\u5230{minVersion} \u6216\u4E4B\u5F8C\u7684\u7248\u672C\u5F8C\u518D\u5617\u8A66\u540C\u6B65",
    badUserscriptBrowser: "\u8BE5\u6D4F\u89C8\u5668\u672A\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u7684\u63A5\u53E3\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334</1>\u7684\u6D4F\u89C8\u5668\u5982(Firefox Nightly \u7248\u672C)",
    foundNewVersion: "\u767C\u73FE\u65B0\u7248\u672C",
    theLocalExtensionIsUpToUpdate: "\u7576\u524D\u64F4\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C",
    failToSyncRules: "\u540C\u6B65\u6700\u65B0\u9069\u914D\u898F\u5247\u5931\u6557",
    retry: "\u9EDE\u6B64\u885D\u8A66",
    failedReason: "\u5931\u6557\u539F\u56E0",
    currentRuleVersion: "\u7576\u524D\u898F\u5247\u7248\u672C",
    calculating: "\u8A08\u7B97\u4E2D",
    unknownError: "\u672A\u77E5\u932F\u8AA4",
    canNotFetchRemoteRule: "\u7121\u6CD5\u7372\u53D6\u9060\u7A0B\u898F\u5247",
    enableAlphaSuccess: "\u5DF2\u958B\u5553Alpha\u529F\u80FD",
    disableAlphaSuccess: "\u5DF2\u95DC\u9589Alpha\u529F\u80FD",
    cacheSize: "\u7DE9\u5B58\u5927\u5C0F\uFF1A",
    cleaning: "\u6E05\u7406\u4E2D",
    cleanCache: "\u6E05\u9664\u7DE9\u5B58",
    options: "\u9078\u9805",
    about: "\u95DC\u65BC",
    service: "\u7FFB\u8B6F\u670D\u52D9",
    needAction: "\uFF08\u53BB\u8A2D\u7F6E\uFF09",
    goSettings: "\u53BB\u8A2D\u7F6E",
    needActionForOptions: "\uFF08\u53BB\u8A2D\u7F6E\uFF09",
    translationEngine: "\u5F15\u64CE\u9078\u9805",
    sourceLanguage: "\u539F\u6587\u8A9E\u8A00",
    target: "\u76EE\u6A19\u8A9E\u8A00",
    popupSourceLanguage: "\u539F\u6587\u8A9E\u8A00",
    popupTarget: "\u76EE\u6A19\u8A9E\u8A00",
    popupService: "\u7FFB\u8B6F\u670D\u52D9",
    forThisSite: "\u5C0D\u65BC\u8A72\u7DB2\u7AD9\uFF1A",
    alwaysTranslateSomeLanguage: "\u7E3D\u662F\u7FFB\u8B6F{language}",
    neverTranslateSomeLanguage: "\u6C38\u4E0D\u7FFB\u8B6F{language}",
    alwaysTranslateSomeSite: "\u7E3D\u662F\u7FFB\u8B6F {hostname}",
    neverTranslateSomeSite: "\u6C38\u4E0D\u7FFB\u8B6F {hostname}",
    add: "\u589E\u52A0",
    default: "\u9ED8\u8A8D",
    forThisLanguage: "\u5C0D\u65BC\u8A72\u8A9E\u8A00\uFF1A",
    "add url": "\u8F38\u5165URL",
    edit: "\u7DE8\u8F2F",
    "translate other languages into specific language": "\u5C07\u5176\u4ED6\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u7F6E\u7684\u8A9E\u8A00",
    "select translation service": "\u9078\u64C7\u4E00\u9805\u7FFB\u8B6F\u670D\u52D9",
    language: "\u8A9E\u8A00",
    "show-original": "\u986F\u793A\u539F\u6587",
    translate: "\u7FFB\u8B6F",
    Translated: "\u5DF2\u7FFB\u8B6F",
    Translating: "\u7FFB\u8B6F\u4E2D",
    Error: "\u932F\u8AA4",
    allowCacheTranslations: "\u958B\u555F\u672C\u5730\u7FFB\u8B6F\u7DE9\u5B58\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8ACB\u6C42\uFF09",
    "translation display": "\u8B6F\u6587\u986F\u793A\u6A23\u5F0F",
    "select diplay style": "\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u793A\u4F8B",
    interface: "\u754C\u9762\u8A2D\u7F6E",
    import_export: "\u5C0E\u5165/\u5C0E\u51FA",
    import_export_title: "\u5C0E\u5165/\u5C0E\u51FA",
    syncToGoogleDrive: "\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65",
    previewAllThemes: "\u9810\u89BD\u5168\u90E8\u6A23\u5F0F",
    "translationTheme.none": "\u7121",
    "translationTheme.dashed": "\u865B\u7DDA\u4E0B\u5283\u7DDA",
    "translationTheme.dotted": "\u9EDE\u72C0\u4E0B\u5283\u7DDA",
    "translationTheme.dashedBorder": "\u865B\u7DDA\u908A\u6846",
    "translationTheme.underline": "\u76F4\u7DDA\u4E0B\u5283\u7DDA",
    "translationTheme.mask": "\u6A21\u7CCA\u6548\u679C",
    "translationTheme.paper": "\u767D\u7D19\u9670\u5F71\u6548\u679C",
    "translationTheme.dividingLine": "\u5206\u5272\u7DDA",
    "translationTheme.highlight": "\u9AD8\u4EAE",
    "translationTheme.marker": "\u99AC\u514B\u7B46",
    "translationTheme.blockquote": "\u5F15\u7528\u6A23\u5F0F",
    "translationTheme.weakening": "\u5F31\u5316",
    "translationTheme.italic": "\u659C\u9AD4",
    "translationTheme.bold": "\u7C97\u9AD4",
    "translationTheme.thinDashed": "\u7D30\u865B\u7DDA\u4E0B\u5283\u7DDA",
    "translationTheme.nativeDashed": "\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF",
    "translationTheme.nativeDotted": "\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF",
    "translationTheme.nativeUnderline": "\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF",
    "translationTheme.wavy": "\u6CE2\u6D6A\u7DDA",
    "translationServices.tencent": "\u9A30\u8A0A\u7FFB\u8B6F\u541B",
    "translationServices.google": "\u8C37\u6B4C\u7FFB\u8B6F",
    "translationServices.bai": "\u767E\u5EA6\uFF08Alpha\uFF09",
    "translationServices.baidu": "\u767E\u5EA6\u7FFB\u8B6F",
    "translationServices.aliyun": "\u963F\u91CC\u96F2\u7FFB\u8B6F",
    "translationServices.volc": "\u706B\u5C71\u7FFB\u8B6F",
    "translationServices.deeplx": "DeeplX(Alpha)",
    "translationServices.bing": "\u5FC5\u61C9\u7FFB\u8B6F",
    "translationServices.deepl": "Deepl",
    "translationServices.wechat": "\u5FAE\u4FE1\u7FFB\u8B6F",
    "translationServices.azure": "\u5FAE\u8EDF\u7FFB\u8B6F",
    "translationServices.ibm": "IBM Watson",
    "translationServices.aws": "\u4E9E\u99AC\u905C\u7FFB\u8B6F",
    "translationServices.mock": "\u6A21\u64EC\u7FFB\u8B6F",
    "translationServices.mock2": "\u6A21\u64EC\u7FFB\u8B6F2",
    "translationServices.caiyun": "\u5F69\u96F2\u5C0F\u8B6F",
    "translationServices.volcAlpha": "\u706B\u5C71\u7FFB\u8B6F(Alpha)",
    "translationServices.openl": "OpenL",
    "translationServices.youdao": "\u6709\u9053\u7FFB\u8B6F",
    "translationServices.transmart": "\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F",
    "translationServices.niu": "\u5C0F\u725B\u7FFB\u8B6F",
    "translationServices.d": "Deepl(Alpha)",
    "translate title": "\u7FFB\u8B6F\u9801\u9762\u6A19\u984C",
    "always languages": "\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00",
    neverTranslateLanguagesLabel: "\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740",
    neverTranslateTheFollowingLanguagesDescription: "\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u7FFB\u8BD1\u8BE5\u6BB5\u843D",
    enableUserscriptPagePopup: "\u603B\u662F\u5728\u9875\u9762\u4E0A\u5C55\u793A Popup \u6D6E\u7A97",
    enableUserscriptPagePopupDescription: "\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/\u4E09\u6307\u89E6\u5C4F\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875",
    "always translate the following languages": "\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00",
    "always sites": "\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740",
    "always translate the following sites": "\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00",
    "never sites": "\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740",
    "never translate the following sites": "\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F",
    "please refer to": "\u9700\u8981\u586B\u5BEB\u5BC6\u9470\u5F8C\u624D\u53EF\u7528\uFF0C\u8A73\u60C5\u53C3\u8003",
    KeyAndConfigurationTutorial: "\u300A\u5BC6\u9470\u7533\u8ACB\u548C\u914D\u7F6E\u6559\u7A0B\u300B",
    useAboveStyleForTheseSites: "\u7576\u524D\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\u70BA\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8A2D\u7F6E\u70BA\u8B93\u67D0\u4E9B\u7DB2\u7AD9\u4F7F\u7528\u8A72\u6A23\u5F0F\uFF0C\u9EDE\u64CA\u53F3\u908A\u7684\u6309\u9215\u6DFB\u52A0\u5F8C\uFF0C\u518D\u5207\u63DB\u5230\u53E6\u4E00\u7A2E\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\uFF0C\u9019\u6A23\u5373\u53EF\u5BE6\u73FE\u4E0D\u540C\u7DB2\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8B6F\u6587\u6A23\u5F0F\u3002",
    currentUrl: "\u7576\u524D\u7DB2\u5740",
    confirm: "\u5132\u5B58",
    cancel: "\u53D6\u6D88",
    delete: "\u522A\u9664",
    "languages.auto": "\u81EA\u52D5\u5075\u6E2C\u8A9E\u8A00",
    isShowContextMenu: "\u5275\u5EFA\u53F3\u9375\u83DC\u55AE",
    syncToCloud: "\u540C\u6B65\u5230\u96F2\u7AEF",
    syncToCloudDescription: "\u540C\u6B65\u65F6\u4F1A\u6BD4\u8F83\u672C\u5730\u548C\u4E91\u7AEF\u914D\u7F6E\u7684\u6700\u540E\u4FEE\u6539\u65F6\u95F4\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",
    authFail: "\u6388\u6B0A\u5931\u6557",
    syncTitle: "\u8ACB\u9078\u64C7\u6587\u4EF6\u64CD\u4F5C",
    import_hint: "\u5C0E\u5165",
    upload: "\u4E0A\u50B3",
    revokeAuth: "\u64A4\u92B7\u6388\u6B0A",
    uploadFail: "\u4E0A\u50B3\u5931\u6557",
    download: "\u4E0B\u8F09",
    importSuccess: "\u5C0E\u5165\u6210\u529F",
    importFail: "\u5C0E\u5165\u5931\u6557",
    deleteFail: "\u522A\u9664\u5931\u6557",
    backupToCloud: "\u624B\u52D5\u7BA1\u7406\u5099\u4EFD\u6587\u4EF6",
    create_new_backup: "\u65B0\u589E\u5099\u4EFD\u7BC0\u9EDE",
    maxBackupFiles: "\u6700\u591A\u53EF\u4EE5\u5099\u4EFD{count}\u500B\u4E0D\u540C\u7684\u7BC0\u9EDE, \u8ACB\u522A\u9664\u4E0D\u9700\u8981\u7684\u7BC0\u9EDE",
    backupToCloudDescription: "\u624B\u52D5\u4E0A\u50B3\u6216\u6062\u5FA9\u5099\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8A313\u500B\u4E0D\u540C\u7684\u5099\u4EFD",
    successSyncConfig: "\u6210\u529F\u8207\u96F2\u7AEF\u4FDD\u6301\u540C\u6B65",
    syncFail: "\u540C\u6B65\u5931\u6557",
    updatedAt: "\u66F4\u65B0\u65BC {date}",
    lastSyncedAt: "\u4E0A\u6B21\u6AA2\u67E5\u65BC {date}",
    downloadFail: "\u4E0B\u8F09\u5931\u6557",
    clickToDownload: "\u9EDE\u64CA\u4E0B\u8F09",
    aboutLabel: "\u95DC\u65BC - \u53CD\u994B - \u8D0A\u52A9",
    "browser.openAboutPage": "\u95DC\u65BC/\u53CD\u994B/\u8D0A\u52A9",
    aboutIntro: "\u8A72\u64F4\u5C55\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u4E92\u806F\u7DB2\u4E0A\u5DE8\u5927\u7684\u5916\u8A9E\u4FE1\u606F \u2764\uFE0F <br/><br/>\u611F\u8B1D\u9019\u4E9B<1>\u8D0A\u52A9\u8005\u5011</1>, \u7531\u65BC\u4ED6/\u5979\u5011\u7684\u652F\u6301\uFF0C\u66F4\u591A\u7684\u4EBA\u53EF\u4EE5\u5B8C\u5168\u514D\u8CBB\u5730\u4F7F\u7528\u9019\u500B\u5DE5\u5177\u3002\u5982\u679C\u6709\u9918\u529B\uFF0C\u4F60\u53EF\u4EE5<2>\u9EDE\u64CA\u9019\u88E1\u8D0A\u52A9</2> \u6211\u7684\u5DE5\u4F5C\uFF0C\u4F60\u9084\u53EF\u4EE5\u95DC\u6CE8\u6211\u7684<3>\u63A8\u7279</3>\u548C<4>Telegram \u983B\u9053</4>\u7372\u53D6\u6700\u65B0\u66F4\u65B0\u3002",
    projectHomepage: "\u9805\u76EE\u4E3B\u9801",
    joinTelegramGroup: "\u52A0\u5165 Telegram \u7FA4\u53C3\u8207\u529F\u80FD\u8A0E\u8AD6",
    feedbackAndJoin: "\u554F\u984C\u53CD\u994B/\u52A0\u7FA4",
    autoSync: "\u81EA\u52D5\u5B9A\u6642\u540C\u6B65",
    loadingThemeTitle: "Loading \u6A23\u5F0F",
    loadingThemeDescription: "\u8A2D\u7F6E\u7B49\u5F85\u8B6F\u6587\u52A0\u8F09\u6642\u7684\u6A23\u5F0F",
    "loadingTheme.spinner": "\u8F49\u5708\u52D5\u756B Spinner",
    "loadingTheme.text": "\u975C\u614B\u6587\u5B57 ... ",
    "loadingTheme.none": "\u4E0D\u986F\u793A",
    developerDescription: "\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863"
  };

  // locales/en.json
  var en_default = {
    lineBreakMaxTextCount: "Maximum number of characters allowed per sentence after line break",
    "translate-pdf": "Click to translate PDF",
    "translate-firefox-local-pdf": "Click to upload Pdf",
    enableLineBreak: "Whether to turn on automatic line wrapping for long paragraphs",
    sponsorLabel: "Sponsoring developers from $1 (monthly or one-time)",
    help: "Help",
    browserShortcutsNoteForFirefox: `To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,
    browserShortcutsNoteForChrome: "To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",
    browserShortcutsSucks: "Please enter the shortcut key manually in the format:",
    enableLineBreakDescription: "After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading",
    "browser.brandName": "Immersive Translate",
    "browser.brandDescription": "Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.",
    "browser.toggleTranslatePage": "Toggle translate webpage ",
    "browser.toggleTranslateTheWholePage": "Toggle translate the whole page",
    "browser.toggleTranslateToThePageEndImmediately": "Toggle translate to the bottom of the page immediately",
    "browser.toggleTranslateTheMainPage": "Toggle translate the main page",
    "browser.openOptionsPage": "Open Settings Page",
    "browser.toggleTranslationMask": "Toggle translation mask style",
    "browser.translateLocalPdfFile": "Translate local PDF files",
    confirmResetConfig: "Are you sure you want to reset the settings?",
    translationLineBreakSettingTitle: "Line break setting",
    smartLineBreak: "Smart Wrap",
    alwaysLineBreak: "Always Wrap",
    toggleBeta: "\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",
    betaDescription: "\u5F00\u542F\u540E\u4F1A\u542F\u7528\u4E00\u4E9B\u5B9E\u9A8C\u6027\u529F\u80FD\uFF0C\u4EE5\u53CA\u8FD8\u5728\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1, \u53EF\u4EE5<1>\u52A0Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u5185\u6D4B\u7684\u7279\u6027\u3002",
    translationLineBreakSettingDescription: "The position of the translation\uFF1AAlways wrap / smart wrap (the translation is displayed only when the paragraph is more than {count} characters)",
    tempTranslateDomainTitle: "Open the translation time temporarily",
    tempTranslateDomainDescription: "When a page is translated manually, turn it temporarily on as automatic translation",
    xMinutes: "{count} minutes",
    disabled: "Disable",
    changelog: "Change Log",
    toggleTranslatePageWhenThreeFingersOnTheScreen: "\u4E09\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",
    addUrlDescription: "The domain name is available and wildcard is supported e.g.\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",
    general: "General",
    clickToExpandConfig: "Expand current configuration",
    import: "Import configuration from file",
    export: "Export to file",
    toggleDebug: "Print debug logs on the console",
    "fingers.0": "Close",
    "fingers.2": "Two-finger touch",
    "fingers.3": "Three-finger touch",
    "fingers.4": "Four-finger touch",
    "fingers.5": "Five-finger touch",
    document: "Document",
    resetSuccess: "All settings reset successful",
    saved: "Saved successfully",
    successImportConfig: "Configuration imported successfully",
    goAdvancedSettings: "Go to Advanced Settings Page",
    goAdvancedInterfaceSettings: "Go to Advanced Custom Settings Page",
    advanced: "Advanced",
    advancedDescription: "Some unintelligible settings (normally set without setting to default)",
    developer: "Developer settings",
    donateCafe: "Buy Me a Coffee",
    "translate to the bottom of the page": "Whether translate to the bottom of the page once you open the page?",
    feedback: "Feedback",
    toggleTranslatePage: "Toggle Translate",
    translateToThePageEndImmediatelyDescription: "When turned on, it will immediately translate the page from the top to the bottom, instead of translating as you read. (Not recommended to turn on)",
    "translate all areas of the page": "Whether to translate all areas of the web page",
    translationAreaDescription: "When enabled, the entire area of the page will be translated, not the default intelligent recognition main area to translate ( not recommended)",
    "the number of characters to be translated first": "How many characters are translated directly without waiting to scroll to the visible area for the first few characters?",
    "interface language": "Interface language",
    "display both the original text and the translation": "Display both the original text and the translation",
    "keyboard shortcuts": "Keyboard shortcuts",
    modify: "Edit",
    reset: "Reset",
    close: "Close",
    homepage: "Home Page",
    more: "More",
    translateTheWholePage: "Translate the whole page area (different from only the main area)",
    changeToTranslateTheWholePage: "\u5207\u6362\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF",
    changeToTranslateTheMainPage: "\u5207\u6362\u4E3A\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",
    translateToThePageEndImmediately: "Immediately translate to the bottom (different from translating the current visible area)",
    translateTheMainPage: "Main areas of intelligent translation",
    "The local rules are up to date": "Local  rules are up to date:",
    "Successfully synchronized with the latest official rules:": "Successfully synced latest official rules:",
    "Checking for updates": "Checking for update",
    "Rules are being synchronized": "Syncing official rules",
    localVersionIsTooOld: "The local extension is too old. Please upgrade to {minVersion} or then try syncing again",
    badUserscriptBrowser: "This browser does not correctly implement the interface of Tampermonkey. Please use other < 1 > browsers that support Tampermonkey < / 1 >, such as (Firefox Nightly version)",
    foundNewVersion: "New version available",
    theLocalExtensionIsUpToUpdate: "The current extension version is up to date.",
    failToSyncRules: "Failed to sync latest adaptive rules",
    retry: "Retry",
    failedReason: "Failure reason",
    currentRuleVersion: "Current Rule Version",
    calculating: "Calculating",
    unknownError: "Unknown Error",
    canNotFetchRemoteRule: "Unable to fetch remote rule",
    enableAlphaSuccess: "Alpha enabled successfully",
    disableAlphaSuccess: "Alpha has been disabled",
    cacheSize: "Cache size:",
    cleaning: "Cleaning",
    cleanCache: "Clear cache",
    options: "Options",
    about: "About",
    service: "Translation Service",
    needAction: "(to set up)",
    goSettings: "to set up",
    needActionForOptions: "(need to set)",
    translationEngine: "Engine Options",
    sourceLanguage: "Original language",
    target: "Target Language",
    popupSourceLanguage: "Source",
    popupTarget: "Target",
    popupService: "Service",
    forThisSite: "For This Site:",
    alwaysTranslateSomeLanguage: "Always translate {language}",
    neverTranslateSomeLanguage: "Never translate {language}",
    alwaysTranslateSomeSite: "Always translate {hostname}",
    neverTranslateSomeSite: "Never translate {hostname}",
    add: "Add",
    default: "Default",
    forThisLanguage: "For This Language:",
    "add url": "Add URL",
    edit: "Edit",
    "translate other languages into specific language": "Translate other languages into the language you set",
    "select translation service": "Select a translation service",
    language: "Language",
    "show-original": "Show Original",
    translate: "Translate",
    Translated: "Translated",
    Translating: "Translating",
    Error: "Error",
    allowCacheTranslations: "Enable local translation caching (reduce translation requests for duplicate paragraphs)",
    "translation display": "Translation display style",
    "select diplay style": "Please refer to the following examples",
    interface: "Interface Settings",
    import_export: "Import/Export",
    import_export_title: "Import/Export Configuration",
    syncToGoogleDrive: "Sync Now with Google Drive",
    previewAllThemes: "Preview all themes",
    "translationTheme.none": "None",
    "translationTheme.dashed": "Dashed underline",
    "translationTheme.dotted": "Dotted Underline",
    "translationTheme.dashedBorder": "Dashed Border",
    "translationTheme.underline": "Straight underline",
    "translationTheme.mask": "Blur effect",
    "translationTheme.paper": "White paper shadow effect",
    "translationTheme.dividingLine": "Dividing line",
    "translationTheme.highlight": "Highlight",
    "translationTheme.marker": "Maker",
    "translationTheme.blockquote": "quote style",
    "translationTheme.weakening": "Weakening",
    "translationTheme.italic": "Italic",
    "translationTheme.bold": "Bold",
    "translationTheme.thinDashed": "Thin dashed underline",
    "translationTheme.nativeDashed": "System Dash Underline",
    "translationTheme.nativeDotted": "System Dotted Underline",
    "translationTheme.nativeUnderline": "System Straight Line Underline",
    "translationTheme.wavy": "Squiggle",
    "translationServices.tencent": "Tencent Translator",
    "translationServices.google": "Google Translate",
    "translationServices.bai": "Baidu (Alpha)",
    "translationServices.baidu": "Baidu translation",
    "translationServices.aliyun": "Aliyun Translator",
    "translationServices.volc": "Volcano Translation",
    "translationServices.deeplx": "DeeplX (Alpha)",
    "translationServices.bing": "Bing translate",
    "translationServices.deepl": "DeepL",
    "translationServices.wechat": "Wechat translation",
    "translationServices.azure": "Microsoft Translator",
    "translationServices.ibm": "IBM Watson",
    "translationServices.aws": "Amazon Translate",
    "translationServices.mock": "Mock translation",
    "translationServices.mock2": "Mock Translation2",
    "translationServices.caiyun": "Caiyun Translation",
    "translationServices.volcAlpha": "Volcano Translation (Alpha)",
    "translationServices.openl": "OpenL",
    "translationServices.youdao": "Youdao Translation",
    "translationServices.transmart": "Tencent Smart Translation",
    "translationServices.niu": "Niu Translation",
    "translationServices.d": "DeeplX (Alpha)",
    "translate title": "Translate page title",
    "always languages": "Always translate the following languages",
    neverTranslateLanguagesLabel: "Never Translated Languages",
    neverTranslateTheFollowingLanguagesDescription: "Automatically skip translating the paragraph when languages are the followings",
    enableUserscriptPagePopup: "Always show Popup windows on the page",
    enableUserscriptPagePopupDescription: "\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/\u4E09\u6307\u89E6\u5C4F\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875",
    "always translate the following languages": "The following languages will always be translated",
    "always sites": "Always translate the following sites",
    "always translate the following sites": "The following sites will always be translated",
    "never sites": "Never translate the following sites",
    "never translate the following sites": "The following sites will never be translated",
    "please refer to": "It can only be used after filling in the key. For details, please refer to",
    KeyAndConfigurationTutorial: "Key Application and Configuration Tutorial",
    useAboveStyleForTheseSites: "The current default translation style is \u300C{theme}\u300D, you can also set it to let some websites use this style, click the button on the right to add it, and then switch to another default translation style, so that you can use different translation styles for different websites.",
    currentUrl: "Current URL",
    confirm: "Save",
    cancel: "Cancel",
    delete: "Delete",
    "languages.auto": "Detect Language",
    isShowContextMenu: "Create right button menu",
    syncToCloud: "Sync to cloud",
    syncToCloudDescription: "When syncing it will compare the last modification time of the local and cloud configurations, whichever is the last.",
    authFail: "Authorization Failed",
    syncTitle: "Please select a file operation",
    import_hint: "Import",
    upload: "Upload",
    revokeAuth: "Revoke Authorization",
    uploadFail: "Upload Failed",
    download: "Download",
    importSuccess: "Upload Success",
    importFail: "Import Failed",
    deleteFail: "Delete Failed",
    backupToCloud: "Manage backup files manually",
    create_new_backup: "Add backup node",
    maxBackupFiles: "Up to{count}different nodes can be backed up. Please delete unneeded nodes",
    backupToCloudDescription: "Upload or restore backup files manually, up to 3 different backups",
    successSyncConfig: "Successfully synced with cloud",
    syncFail: "Synchronization failed",
    updatedAt: "Updated at {date}",
    lastSyncedAt: "Last checked at {date}",
    downloadFail: "Download failed",
    clickToDownload: "Click to download",
    aboutLabel: "About - Feedback - Sponsor",
    "browser.openAboutPage": "About / Feedback/Sponsor",
    aboutIntro: `This extension is completely free. I hope we can get foreign information on the Internet more easily and happily. Thanks to these <1>sponsors</1>, more people can use this tool completely free of charge because of their support. 
If you have spare time, you can click here to <2>sponsor</2> my work, and you can follow my <3>Twitter</3> and <4>Telegram channels </4> for the latest updates.`,
    projectHomepage: "Project Homepage",
    joinTelegramGroup: "Join Telegram group for feature discussion",
    feedbackAndJoin: "Issue feedback/group",
    autoSync: "Auto-Time Sync",
    loadingThemeTitle: "Loading Style",
    loadingThemeDescription: "Set the style of waiting for the translation to load",
    "loadingTheme.spinner": "Animate Spinner",
    "loadingTheme.text": "Static Text... ",
    "loadingTheme.none": "Disabled",
    developerDescription: "\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863"
  };

  // constant.ts
  var interfaceTranslations = [
    {
      code: "zh-CN",
      messages: zh_CN_default
    },
    {
      code: "zh-TW",
      messages: zh_TW_default
    },
    {
      code: "en",
      messages: en_default
    }
  ], translations = {};
  for (let translation of interfaceTranslations)
    translations[translation.code] = translation.messages;
  var brandName = "Immersive Translate", brandId = "immersive-translate";
  var brandIdForJs = "immersiveTranslate";
  var GOOGLE_ACCESS_TOKEN_KEY = brandIdForJs + "GoogleAccessToken", AUTH_FLOW_FLAG = brandIdForJs + "AuthFlow";
  var AUTH_STATE_FLAG = brandIdForJs + "AuthState", iframeMessageIdentifier = brandIdForJs + "IframeMessage", targetContainerElementAttributeName = `${brandIdForJs}Container`, specifiedTargetContainerElementAttributeName = `${brandIdForJs}SpecifiedContainer`, buildinConfigStorageKey = "buildinConfig", localConfigStorageKey = "localConfig", contextOpenOptionsMenuId = "openOptionsPage", contextOpenAboutMenuId = "openAboutPage";
  var pageTranslatedStatusEventName = `${brandIdForJs}PageTranslatedStatus`, pageUrlChangedEventName = `${brandIdForJs}PageUrlChanged`, userscriptCommandEventName = `${brandIdForJs}ReceiveCommand`, popupReceiveMessageEventName = `${brandIdForJs}PopupReceiveMessage`, hostname = "immersive-translate.owenyoung.com", homepage = `https://${hostname}/`, buildinConfigSyncUrl = `https://${hostname}/buildin_config.json`, sourceElementMarkAttributeName = `${brandIdForJs}Mark`, sourceElementEffectAttributeNameForJs = "immersiveTranslateEffect", elementMarkRootKey = `${brandIdForJs}Root`, sourceElementEffectAttributeName = `data-${brandId}-effect`, sourceElementTranslatedMarkAttributeName = `${brandIdForJs}TranslatedMark`, sourceElementParagraphAttributeName = `${brandIdForJs}ParagraphId`, sourceAtomicBlockElementMarkAttributeName = `${brandIdForJs}AtomicBlockMark`, sourceElementExcludeAttributeName = `${brandIdForJs}ExcludeMark`, sourceElementExcludeAttributeNameForSelector = `data-${brandId}-exclude-mark`, sourceElementStayOriginalAttributeName = `${brandIdForJs}StayOriginalMark`, sourcePreWhitespaceMarkAttributeName = `${brandIdForJs}PreWhitespaceMark`, sourceInlineElementMarkAttributeName = `${brandIdForJs}InlineMark`, sourceBlockElementMarkAttributeName = `${brandIdForJs}BlockMark`, sourceElementLeft = `${brandIdForJs}Left`, sourceElementRight = `${brandIdForJs}Right`, sourceElementWidth = `${brandIdForJs}Width`, sourceElementHeight = `${brandIdForJs}Height`, sourceElementTop = `${brandIdForJs}Top`, sourceElementFontSize = `${brandIdForJs}FontSize`, lastRunTimeStorageKey = "lastRunTime", sourceElementWithGlobalStyleMarkAttributeName = `${brandIdForJs}GlobalStyleMark`, defaultPlaceholderDelimiters = ["@", "#"], titleDelimiters = " --- ", translationTextSeparator = `
`, translationTargetElementWrapperClass = `${brandId}-target-wrapper`, translationPdfTargetContainerClass = `${brandId}-pdf-target-container`, translationTargetInnerElementWrapperClass = `${brandId}-target-inner`, translationSourceElementsWrapperClass = `${brandId}-source-wrapper`, translationTargetTranslationElementBlockWrapperClass = `${brandId}-target-translation-block-wrapper`, translationFrameRootThemeAttributeName = `${brandId}-root-translation-theme`, translationFrameRootThemeAttributeNameForJs = `${brandIdForJs}RootTranslationTheme`, translationTargetTranslationElementVerticalBlockClass = `${brandId}-target-translation-vertical-block-wrapper`, translationTargetTranslationPdfElementBlockWrapperClass = `${brandId}-target-translation-pdf-block-wrapper`, translationTargetTranslationElementPreWhitespaceWrapperClass = `${brandId}-target-translation-pre-whitespace`, translationTargetTranslationElementInlineWrapperClass = `${brandId}-target-translation-inline-wrapper`;
  var languages = [
    "auto",
    "en",
    "zh-CN",
    "zh-TW",
    "ja",
    "af",
    "am",
    "ar",
    "az",
    "be",
    "bg",
    "bn",
    "bs",
    "ca",
    "ceb",
    "co",
    "cs",
    "cy",
    "da",
    "de",
    "el",
    "eo",
    "es",
    "et",
    "eu",
    "fa",
    "fi",
    "fil",
    "fj",
    "fr",
    "fy",
    "ga",
    "gd",
    "gl",
    "gu",
    "ha",
    "haw",
    "he",
    "hi",
    "hmn",
    "hr",
    "ht",
    "hu",
    "hy",
    "id",
    "ig",
    "is",
    "it",
    "jw",
    "ka",
    "kk",
    "km",
    "kn",
    "ko",
    "ku",
    "ky",
    "la",
    "lb",
    "lo",
    "lt",
    "lv",
    "mg",
    "mi",
    "mk",
    "ml",
    "mn",
    "mr",
    "ms",
    "mt",
    "mww",
    "my",
    "ne",
    "nl",
    "no",
    "ny",
    "otq",
    "pa",
    "pl",
    "ps",
    "pt",
    "ro",
    "ru",
    "sd",
    "si",
    "sk",
    "sl",
    "sm",
    "sn",
    "so",
    "sq",
    "sr",
    "sr-Cyrl",
    "sr-Latn",
    "st",
    "su",
    "sv",
    "sw",
    "ta",
    "te",
    "tg",
    "th",
    "tlh",
    "tlh-Qaak",
    "to",
    "tr",
    "ty",
    "ug",
    "uk",
    "ur",
    "uz",
    "vi",
    "wyw",
    "xh",
    "yi",
    "yo",
    "yua",
    "yue",
    "zu"
  ], langMap2 = {
    af: "Afrikaans",
    am: "Amharic",
    ar: "Arabic",
    auto: "Detect Language",
    az: "Azerbaijani",
    be: "Belarusian",
    bg: "Bulgarian",
    tn: "Zana",
    bn: "Bengali",
    bs: "Bosnian",
    ca: "Catalan",
    ceb: "Cebuano",
    co: "Corsican",
    cs: "Czech",
    cy: "Welsh",
    da: "Danish",
    de: "German",
    el: "Greek",
    en: "English",
    eo: "Esperanto",
    es: "Spanish",
    et: "Estonian",
    eu: "Basque",
    fa: "Farsi",
    fi: "Finnish",
    fil: "Filipino",
    fj: "Fijian",
    fr: "French",
    fy: "Frisian",
    ga: "Irish",
    gd: "Scottish Gaelic",
    gl: "Galician",
    gu: "Gujarati",
    ha: "Hausa",
    haw: "Hawaiian",
    he: "Hebrew",
    hi: "Hindi",
    hmn: "Hmong",
    hr: "Croatian",
    ht: "Haitian Creole",
    hu: "Hungarian",
    hy: "Armenian",
    id: "Indonesian",
    ig: "Igbo",
    is: "Icelandic",
    it: "Italian",
    ja: "\u65E5\u672C\u8A9E",
    jw: "Javanese",
    ka: "Georgian",
    kk: "Kazakh",
    km: "Khmer",
    kn: "Kannada",
    ko: "Korean",
    ku: "Kurdish",
    ky: "Kyrgyz",
    la: "Latin",
    lb: "Luxembourgish",
    lo: "Lao",
    lt: "Lithuanian",
    lv: "Latvian",
    mg: "Malagash",
    mi: "Maori",
    mk: "Macedonian",
    ml: "Malayalam",
    mn: "Mongolian",
    mr: "Marathi",
    ms: "Malay",
    mt: "Maltese",
    mww: "Bai Miao",
    my: "Burmese",
    ne: "Nepali",
    nl: "Dutch",
    no: "Norwegian",
    ny: "Nyanza (Chichewa)",
    otq: "Quer\xE9taro Otomi",
    pa: "Punjabi",
    pl: "Polish",
    ps: "Pashto",
    pt: "Portuguese (Portugal, Brazil)",
    ro: "Romanian",
    ru: "Russian",
    sd: "Sindhi",
    si: "Sinhala",
    sk: "Slovak",
    sl: "Slovenian",
    sm: "Samoan",
    sn: "Shona",
    so: "Somali",
    sq: "Albanian",
    sr: "Serbian",
    "sr-Cyrl": "Serbian (Cyrillic)",
    "sr-Latn": "Serbian (Latin)",
    st: "Sesotho",
    su: "Sundanese",
    sv: "Swedish",
    sw: "Swahili",
    ta: "Tamil",
    te: "Telugu",
    tg: "Tajik",
    th: "Thai",
    tlh: "Klingon",
    "tlh-Qaak": "Klingon (piqaD)",
    to: "Tongan",
    tr: "Turkish",
    ty: "Tahiti",
    ug: "Uyghur",
    uk: "Ukrainian",
    ur: "Urdu",
    uz: "Uzbek",
    vi: "Vietnamese",
    wyw: "Classical Chinese",
    xh: "Bantu",
    yi: "Yiddish",
    yo: "Yoruba",
    yua: "Yucatan Mayan",
    yue: "Cantonese (Traditional)",
    "zh-CN": "\u7B80\u4F53\u4E2D\u6587",
    "zh-TW": "\u7E41\u9AD4\u4E2D\u6587",
    zu: "Zulu"
  };
  var buildinExcludeUrls = [
    "https://immersive-translate.owenyoung.com/options/",
    "https://immersive-translate.owenyoung.com/auth-done/",
    "http://localhost:8000/dist/userscript/options/",
    "http://localhost:8000/auth-done/",
    "http://192.168.50.9:8000/dist/userscript/options/",
    "https://www.deepl.com/translator",
    "translate.google.com"
  ];
  var fallbackLanguage = "zh-CN";

  // utils/iframe.ts
  function getIsInIframe() {
    try {
      return globalThis.self !== globalThis.top;
    } catch {
      return !0;
    }
  }

  // dom/util.ts
  var env2 = getEnv(), isProd = env2.PROD === "1";
  function duplicatedElements(root2, array, rule) {
    let allHeaders = root2.querySelectorAll("header"), main3 = root2.querySelectorAll("main"), headers2 = [];
    for (let header of allHeaders)
      main3.length > 0 && main3[0].contains(header) || headers2.push(header);
    for (let i3 = 0; i3 < array.length; i3++) {
      let a6 = array[i3].element;
      for (let j6 = i3 + 1; j6 < array.length; j6++) {
        let b4 = array[j6].element;
        if (a6.contains(b4))
          array.splice(j6, 1), j6--;
        else if (b4.contains(a6)) {
          array.splice(i3, 1), i3--;
          break;
        } else
          a6 === b4 && (array.splice(j6, 1), j6--);
      }
    }
    return array.filter((container) => {
      let element = container.element;
      if (container.reserve)
        return !0;
      let isHeader = !1;
      for (let header of headers2) {
        if (isMatchTags(element.nodeName, ["H1"]))
          continue;
        let h1Container = header.querySelector("h1");
        if (!(h1Container && isValidTextByCount(
          h1Container.textContent || "",
          rule.paragraphMinTextCount,
          rule.paragraphMinWordCount
        )) && (element === header || header.contains(element))) {
          isHeader = !0;
          break;
        }
      }
      return !isHeader;
    }).map((container) => container.element);
  }
  function getLastHTMLElement(elements) {
    for (let i3 = elements.length - 1; i3 >= 0; i3--) {
      let element = elements[i3].element || elements[i3];
      if (typeof element != "string")
        return element;
    }
    return null;
  }
  function getHTMLElements(elements) {
    let result = [];
    for (let i3 = elements.length - 1; i3 >= 0; i3--) {
      let element = elements[i3].element || elements[i3];
      (typeof element != "string" || element !== " ") && result.push(element);
    }
    return result;
  }
  function getFirstHTMLElement(elements) {
    for (let i3 = 0; i3 < elements.length; i3++) {
      let element = elements[i3];
      if (typeof element != "string")
        return element;
    }
    return null;
  }
  function getWhitespace(nextNode, isPreWhitespace) {
    return nextNode && nextNode.nodeType === Node.TEXT_NODE && nextNode.textContent && nextNode.textContent?.length > 0 ? isPreWhitespace ? nextNode.textContent : " " : null;
  }
  function getElementsBySelectors(root2, selectors) {
    let elements = [];
    for (let selector of selectors) {
      let nodes = root2.querySelectorAll(selector);
      for (let node of nodes)
        elements.push(node);
    }
    return elements;
  }
  function isInlineElementByTreeWalker(element, rule) {
    let filterInlineElement = function(node) {
      return node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE ? node.nodeType === Node.ELEMENT_NODE && isExcludeElement(node, rule, !0) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }, treeWalker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_ELEMENT,
      filterInlineElement
    ), isInline = !0;
    for (; treeWalker.nextNode(); ) {
      let node = treeWalker.currentNode;
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (isMarked(
          node,
          sourceInlineElementMarkAttributeName
        )) {
          if (isInline === !0)
            return !0;
          continue;
        }
        if (!isMatchTags(node.nodeName, rule.inlineTags))
          return !1;
      }
    }
    return !0;
  }
  function isInlineElement(element, rule) {
    let inlineTags = rule.inlineTags;
    return element.nodeType === Node.ELEMENT_NODE ? isMatchTags(element.nodeName, inlineTags) ? isMarked(
      element,
      sourceBlockElementMarkAttributeName
    ) || isMatchTags(element.nodeName, ["BR"]) ? !1 : isMarked(element, sourceInlineElementMarkAttributeName) ? !0 : isInlineElementByTreeWalker(element, rule) : isMarked(
      element,
      sourceInlineElementMarkAttributeName
    ) : !1;
  }
  function isDuplicateElement(element, elements) {
    for (let e3 of elements)
      if (e3 === element)
        return !0;
    return !1;
  }
  function isMetaElement(element, rule) {
    return !!isMatchTags(element.nodeName, rule.metaTags);
  }
  function isExcludeElement(element, rule, includeStayElements) {
    if (!(element.nodeType === Node.ELEMENT_NODE || element.nodeType === Node.TEXT_NODE))
      return !0;
    let { stayOriginalTags, excludeTags } = rule, finalExcludeTags = [];
    return includeStayElements && excludeTags && excludeTags.length > 0 ? finalExcludeTags = excludeTags || [] : finalExcludeTags = excludeTags.filter((tag) => !stayOriginalTags.includes(tag)), element.nodeType === Node.ELEMENT_NODE && element.isContentEditable || element.nodeType === Node.ELEMENT_NODE && (element.getAttribute("translate") === "no" || element.classList.contains("notranslate") || isMarked(element, sourceElementExcludeAttributeName, !0)) ? !0 : element.nodeType === Node.ELEMENT_NODE && isMarked(
      element,
      specifiedTargetContainerElementAttributeName
    ) ? !1 : !!isMatchTags(element.nodeName, finalExcludeTags);
  }
  function isNeedToTranslate(item, minTextCount, minWordCount, ctx) {
    let delimiters = getPlaceholderDelimiters(ctx), stayInOriginalRegex = new RegExp(
      `^${delimiters[0]}(\\d+)${delimiters[1]}$`
    ), text = item.text, trimedText = text.trim();
    return trimedText === "" || trimedText.length === 1 && trimedText.charCodeAt(0) === 8203 || /^\d+(,\d+)*(\.\d+)?$/.test(text) || trimedText.includes("</style>") || trimedText.includes("< styles>") || isAtTag(trimedText) || isUrl(trimedText) || isHashTag(trimedText) || stayInOriginalRegex.test(trimedText) ? !1 : isValidTextByCount(text, minTextCount, minWordCount);
  }
  function isValidTextByCount(rawText, minTextCount, minWordCount) {
    let text = rawText.trim();
    return text.length >= minTextCount || text.split(" ").length >= minWordCount;
  }
  function isUrl(text) {
    if (text && text.includes("://"))
      try {
        return new URL(text), !0;
      } catch {
        return !1;
      }
    else
      return !1;
  }
  function isHashTag(text) {
    return !!(text && text.startsWith("#") && text.indexOf(" ") === -1);
  }
  function isAtTag(text) {
    return !!(text && text.startsWith("@") && text.indexOf(" ") === -1);
  }
  function isStockTag(text) {
    return !!(text && text.startsWith("$") && text.indexOf(" ") === -1);
  }
  function isMarked(element, markedAttribute, explicit = !1) {
    return isMarkedWith(element, markedAttribute, "1", explicit);
  }
  function isMarkedWith(element, markedAttribute, value, explicit = !1) {
    return isProd && !explicit ? element[elementMarkRootKey] ? (
      // @ts-ignore: it's ok
      !!(element[elementMarkRootKey] && // @ts-ignore: it's ok
      element[elementMarkRootKey][markedAttribute] === value)
    ) : !1 : element.dataset[markedAttribute] === value;
  }
  function hasMark(element, markedAttribute, explicit = !1) {
    return isProd && !explicit ? element[elementMarkRootKey] ? (
      // @ts-ignore: it's ok
      !!(element[elementMarkRootKey] && // @ts-ignore: it's ok
      element[elementMarkRootKey][markedAttribute])
    ) : !1 : element.dataset[markedAttribute] !== void 0;
  }
  function getMainText(root2) {
    return (root2.innerText || root2.textContent || "").trim();
  }
  function isMatchSelectors(selectors) {
    return selectors ? typeof selectors == "string" ? document.querySelector(selectors) !== null : selectors.some((selector) => document.querySelector(selector)) : !1;
  }
  function setAttribute(element, name, value, explicit = !1) {
    element.isContentEditable || (isProd && !explicit ? (element.dataset[sourceElementEffectAttributeNameForJs] || (element.dataset[sourceElementEffectAttributeNameForJs] = "1"), element[elementMarkRootKey] || (element[elementMarkRootKey] = {}), element[elementMarkRootKey][name] || (element[elementMarkRootKey][name] = value)) : (element.dataset[sourceElementEffectAttributeNameForJs] || (element.dataset[sourceElementEffectAttributeNameForJs] = "1"), element.dataset[name] !== value && (element.dataset[name] = value)));
  }
  function removeAttribute(element, name, explicit = !1) {
    if (isProd && !explicit) {
      if (!element[elementMarkRootKey] || !element[elementMarkRootKey][name])
        return;
      delete element[elementMarkRootKey][name];
    } else
      delete element.dataset[name];
  }
  function getAttribute(element, name, explicit = !1) {
    return isProd && !explicit ? !element[elementMarkRootKey] || !element[elementMarkRootKey][name] ? void 0 : element[elementMarkRootKey][name] : element.dataset[name];
  }
  function isStayOriginalElement(element, rule) {
    let isStayOriginal = !1;
    return (isMatchTags(element.nodeName, rule.stayOriginalTags) || isMarked(element, sourceElementStayOriginalAttributeName)) && (isStayOriginal = !0), isStayOriginal;
  }
  function isUnknowTag(element, rule) {
    let allKnowTags = rule.allBlockTags.concat(rule.inlineTags).concat(
      rule.excludeTags
    );
    return !isMatchTags(element.nodeName, allKnowTags);
  }
  function getPlaceholderDelimiters(ctx) {
    let { config } = ctx, delimiters = defaultPlaceholderDelimiters;
    return config.translationServices[ctx.translationService] && config.translationServices[ctx.translationService].placeholderDelimiters && (delimiters = config.translationServices[ctx.translationService].placeholderDelimiters), delimiters;
  }
  function isContainsSelectors(element, selectors) {
    if (!selectors)
      return !1;
    Array.isArray(selectors) || (selectors = [selectors]);
    for (let selector of selectors)
      if (element.querySelector(selector))
        return !0;
    return !1;
  }
  function getTheLastTextNodeParentElement(element) {
    let treeWalker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      (node) => node.textContent && node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
    ), lastTextNode = null;
    for (; treeWalker.nextNode(); )
      lastTextNode = treeWalker.currentNode;
    return lastTextNode ? lastTextNode.parentElement : null;
  }
  function getRealUrl() {
    if (!getIsInIframe())
      return globalThis.location.href;
    try {
      let currentUrl = globalThis.location.href;
      if (new URL(currentUrl).protocol === "about:") {
        if (globalThis.location.ancestorOrigins && globalThis.location.ancestorOrigins.length > 0)
          return globalThis.location.ancestorOrigins[0];
        let href = "";
        try {
          href = globalThis.parent.location.href;
        } catch {
        }
        return href || (globalThis.location != globalThis.parent.location ? document.referrer : document.location.href);
      } else
        return currentUrl;
    } catch {
    }
    return globalThis.location.href;
  }
  function injectCSS(rootDocument, css) {
    rootDocument.head.appendChild(rootDocument.createElement("style")).innerHTML = css;
  }
  function isInlineIframe(frame) {
    return frame.getAttribute("src") ? !1 : !!(frame.getAttribute("srcdoc") && frame.contentDocument && frame.contentDocument.body);
  }
  function isMatchTags(nodeName, tags) {
    if (!nodeName || !tags)
      return !1;
    Array.isArray(tags) || (tags = [tags]), nodeName = nodeName.toUpperCase();
    for (let tag of tags)
      if (nodeName === tag)
        return !0;
    return !1;
  }

  // dom/mark_containers.ts
  function markContainers(container, rule) {
    let {
      excludeSelectors,
      additionalExcludeSelectors,
      extraInlineSelectors,
      additionalInlineSelectors,
      extraBlockSelectors,
      atomicBlockSelectors,
      atomicBlockTags,
      globalStyles,
      stayOriginalTags,
      stayOriginalSelectors,
      globalAttributes
    } = rule, globalStyleSelectors = Object.keys(globalStyles);
    if (globalStyleSelectors.length > 0)
      for (let selector of globalStyleSelectors) {
        let elements = getElementsBySelectors(container, [selector]);
        for (let element of elements)
          if (!isMarked(element, sourceElementWithGlobalStyleMarkAttributeName)) {
            setAttribute(
              element,
              sourceElementWithGlobalStyleMarkAttributeName,
              "1"
            );
            let cssText = globalStyles[selector];
            element.style.cssText += cssText;
          }
      }
    let globalAttributesSelectors = Object.keys(globalAttributes);
    if (globalAttributesSelectors.length > 0)
      for (let selector of globalAttributesSelectors) {
        let attributes = globalAttributes[selector], attributesKeys = Object.keys(attributes), elements = getElementsBySelectors(container, [selector]);
        for (let element of elements)
          for (let key of attributesKeys) {
            let value = attributes[key];
            element.getAttribute(key) !== value && (value === null ? element.removeAttribute(key) : element.setAttribute(key, value));
          }
      }
    let allExcludeSelectors = [
      ...excludeSelectors,
      ...additionalExcludeSelectors
    ], allInlineSelectors = [
      ...extraInlineSelectors,
      ...additionalInlineSelectors
    ], allAtomicBlockSelectors = [...atomicBlockSelectors], allAtomicBlockTagsSelectors = atomicBlockTags.map(
      (item) => item.toLowerCase()
    ), allBlockSelectos = extraBlockSelectors;
    getElementsBySelectors(
      container,
      allExcludeSelectors
    ).forEach((element) => {
      isMarked(element, sourceElementExcludeAttributeName, !0) || setAttribute(element, sourceElementExcludeAttributeName, "1", !0);
    });
    let atomicBlockElements = [];
    if (allAtomicBlockSelectors.length > 0 && (atomicBlockElements = getElementsBySelectors(
      container,
      allAtomicBlockSelectors
    ).filter((element) => !isMarked(element, sourceAtomicBlockElementMarkAttributeName))), allAtomicBlockTagsSelectors.length > 0) {
      let stayOriginalTagsHTMLStringArr = stayOriginalTags.reduce(
        (arr, item) => {
          let tagLower = item.toLowerCase();
          return arr.push(`<${tagLower}>`, `</${tagLower}>`, `<${tagLower} />`), arr;
        },
        []
      ), httpLinkTags = [">http://", ">https://"];
      stayOriginalTagsHTMLStringArr.push(...httpLinkTags);
      let atomicBlockTagsElements = getElementsBySelectors(
        container,
        allAtomicBlockTagsSelectors
      ).filter((element) => {
        if (isMarked(
          element,
          sourceAtomicBlockElementMarkAttributeName
        ))
          return !1;
        {
          let htmlString = element.innerHTML;
          return !stayOriginalTagsHTMLStringArr.some(
            (item) => htmlString.includes(item)
          );
        }
      });
      atomicBlockElements.push(...atomicBlockTagsElements);
    }
    atomicBlockElements.forEach((element) => {
      isMarked(element, sourceAtomicBlockElementMarkAttributeName) || setAttribute(element, sourceAtomicBlockElementMarkAttributeName, "1");
    });
    let extraInlineElements = [];
    allInlineSelectors.length > 0 && extraInlineElements.push(
      ...getElementsBySelectors(container, allInlineSelectors)
    ), extraInlineElements.forEach((element) => {
      setAttribute(element, sourceInlineElementMarkAttributeName, "1");
    });
    let extraBlockElements = [];
    allBlockSelectos.length > 0 && extraBlockElements.push(
      ...getElementsBySelectors(container, allBlockSelectos)
    ), extraBlockElements.forEach((element) => {
      setAttribute(element, sourceBlockElementMarkAttributeName, "1");
    });
    let stayOriginalElements = [];
    stayOriginalSelectors.length > 0 && stayOriginalElements.push(
      ...getElementsBySelectors(container, stayOriginalSelectors)
    ), stayOriginalElements.forEach((element) => {
      setAttribute(element, sourceElementStayOriginalAttributeName, "1");
    });
  }

  // utils/language_match.ts
  function isMatchLanguage(lang, matchPattern) {
    let matches = matchPattern.matches || [];
    if (matches && !Array.isArray(matches) && (matches = [matches]), matches.length === 0)
      return !1;
    if (matches.length > 0) {
      if (matches.includes(lang))
        return !0;
      for (let match of matches)
        if (match.includes("*") && new RegExp(match).test(lang))
          return !0;
    }
    return !1;
  }

  // utils/format_language.ts
  function formatLanguage(rawLangCode) {
    if (typeof rawLangCode != "string")
      return "auto";
    let lowerCaseLangCode = rawLangCode.toLowerCase();
    if (lowerCaseLangCode === "zh" || lowerCaseLangCode === "zh-hans")
      return "zh-CN";
    if (lowerCaseLangCode === "zh-hant" || lowerCaseLangCode === "zh-hk")
      return "zh-TW";
    if (lowerCaseLangCode === "iw")
      return "he";
    if (lowerCaseLangCode === "jv")
      return "jw";
    let lowerCaseLanguages = languages.map((lang) => lang.toLowerCase()), indexOfLanguages = lowerCaseLanguages.indexOf(
      lowerCaseLangCode
    );
    if (indexOfLanguages === -1)
      if (lowerCaseLangCode.indexOf("-") >= 0) {
        lowerCaseLangCode = lowerCaseLangCode.split("-")[0];
        let firstPartIndex = lowerCaseLanguages.indexOf(lowerCaseLangCode);
        return firstPartIndex === -1 ? "auto" : languages[firstPartIndex];
      } else
        return "auto";
    else
      return languages[indexOfLanguages];
  }

  // https://deno.land/std@0.171.0/async/deferred.ts
  function deferred() {
    let methods, state = "pending", promise = new Promise((resolve, reject) => {
      methods = {
        async resolve(value) {
          await value, state = "fulfilled", resolve(value);
        },
        // deno-lint-ignore no-explicit-any
        reject(reason) {
          state = "rejected", reject(reason);
        }
      };
    });
    return Object.defineProperty(promise, "state", { get: () => state }), Object.assign(promise, methods);
  }

  // https://deno.land/std@0.171.0/async/deadline.ts
  var DeadlineError = class extends Error {
    constructor() {
      super("Deadline"), this.name = "DeadlineError";
    }
  };
  function deadline(p7, delay2) {
    let d4 = deferred(), t5 = setTimeout(() => d4.reject(new DeadlineError()), delay2);
    return Promise.race([p7, d4]).finally(() => clearTimeout(t5));
  }

  // https://deno.land/std@0.171.0/async/delay.ts
  function delay(ms, options2 = {}) {
    let { signal, persistent } = options2;
    return signal?.aborted ? Promise.reject(new DOMException("Delay was aborted.", "AbortError")) : new Promise((resolve, reject) => {
      let abort = () => {
        clearTimeout(i3), reject(new DOMException("Delay was aborted.", "AbortError"));
      }, i3 = setTimeout(() => {
        signal?.removeEventListener("abort", abort), resolve();
      }, ms);
      if (signal?.addEventListener("abort", abort, { once: !0 }), persistent === !1)
        try {
          Deno.unrefTimer(i3);
        } catch (error) {
          if (!(error instanceof ReferenceError))
            throw error;
          console.error("`persistent` option is only available in Deno");
        }
    });
  }

  // https://deno.land/std@0.171.0/async/mux_async_iterator.ts
  var MuxAsyncIterator = class {
    #iteratorCount = 0;
    #yields = [];
    // deno-lint-ignore no-explicit-any
    #throws = [];
    #signal = deferred();
    add(iterable) {
      ++this.#iteratorCount, this.#callIteratorNext(iterable[Symbol.asyncIterator]());
    }
    async #callIteratorNext(iterator) {
      try {
        let { value, done } = await iterator.next();
        done ? --this.#iteratorCount : this.#yields.push({ iterator, value });
      } catch (e3) {
        this.#throws.push(e3);
      }
      this.#signal.resolve();
    }
    async *iterate() {
      for (; this.#iteratorCount > 0; ) {
        await this.#signal;
        for (let i3 = 0; i3 < this.#yields.length; i3++) {
          let { iterator, value } = this.#yields[i3];
          yield value, this.#callIteratorNext(iterator);
        }
        if (this.#throws.length) {
          for (let e3 of this.#throws)
            throw e3;
          this.#throws.length = 0;
        }
        this.#yields.length = 0, this.#signal = deferred();
      }
    }
    [Symbol.asyncIterator]() {
      return this.iterate();
    }
  };

  // https://deno.land/std@0.167.0/fmt/colors.ts
  var colors_exports = {};
  __export(colors_exports, {
    bgBlack: () => bgBlack,
    bgBlue: () => bgBlue,
    bgBrightBlack: () => bgBrightBlack,
    bgBrightBlue: () => bgBrightBlue,
    bgBrightCyan: () => bgBrightCyan,
    bgBrightGreen: () => bgBrightGreen,
    bgBrightMagenta: () => bgBrightMagenta,
    bgBrightRed: () => bgBrightRed,
    bgBrightWhite: () => bgBrightWhite,
    bgBrightYellow: () => bgBrightYellow,
    bgCyan: () => bgCyan,
    bgGreen: () => bgGreen,
    bgMagenta: () => bgMagenta,
    bgRed: () => bgRed,
    bgRgb24: () => bgRgb24,
    bgRgb8: () => bgRgb8,
    bgWhite: () => bgWhite,
    bgYellow: () => bgYellow,
    black: () => black,
    blue: () => blue,
    bold: () => bold,
    brightBlack: () => brightBlack,
    brightBlue: () => brightBlue,
    brightCyan: () => brightCyan,
    brightGreen: () => brightGreen,
    brightMagenta: () => brightMagenta,
    brightRed: () => brightRed,
    brightWhite: () => brightWhite,
    brightYellow: () => brightYellow,
    cyan: () => cyan,
    dim: () => dim,
    getColorEnabled: () => getColorEnabled,
    gray: () => gray,
    green: () => green,
    hidden: () => hidden,
    inverse: () => inverse,
    italic: () => italic,
    magenta: () => magenta,
    red: () => red,
    reset: () => reset,
    rgb24: () => rgb24,
    rgb8: () => rgb8,
    setColorEnabled: () => setColorEnabled,
    strikethrough: () => strikethrough,
    stripColor: () => stripColor,
    underline: () => underline,
    white: () => white,
    yellow: () => yellow
  });
  var { Deno: Deno2 } = globalThis, noColor = typeof Deno2?.noColor == "boolean" ? Deno2.noColor : !0, enabled = !noColor;
  function setColorEnabled(value) {
    noColor || (enabled = value);
  }
  function getColorEnabled() {
    return enabled;
  }
  function code(open, close) {
    return {
      open: `\x1B[${open.join(";")}m`,
      close: `\x1B[${close}m`,
      regexp: new RegExp(`\\x1b\\[${close}m`, "g")
    };
  }
  function run(str, code2) {
    return enabled ? `${code2.open}${str.replace(code2.regexp, code2.open)}${code2.close}` : str;
  }
  function reset(str) {
    return run(str, code([0], 0));
  }
  function bold(str) {
    return run(str, code([1], 22));
  }
  function dim(str) {
    return run(str, code([2], 22));
  }
  function italic(str) {
    return run(str, code([3], 23));
  }
  function underline(str) {
    return run(str, code([4], 24));
  }
  function inverse(str) {
    return run(str, code([7], 27));
  }
  function hidden(str) {
    return run(str, code([8], 28));
  }
  function strikethrough(str) {
    return run(str, code([9], 29));
  }
  function black(str) {
    return run(str, code([30], 39));
  }
  function red(str) {
    return run(str, code([31], 39));
  }
  function green(str) {
    return run(str, code([32], 39));
  }
  function yellow(str) {
    return run(str, code([33], 39));
  }
  function blue(str) {
    return run(str, code([34], 39));
  }
  function magenta(str) {
    return run(str, code([35], 39));
  }
  function cyan(str) {
    return run(str, code([36], 39));
  }
  function white(str) {
    return run(str, code([37], 39));
  }
  function gray(str) {
    return brightBlack(str);
  }
  function brightBlack(str) {
    return run(str, code([90], 39));
  }
  function brightRed(str) {
    return run(str, code([91], 39));
  }
  function brightGreen(str) {
    return run(str, code([92], 39));
  }
  function brightYellow(str) {
    return run(str, code([93], 39));
  }
  function brightBlue(str) {
    return run(str, code([94], 39));
  }
  function brightMagenta(str) {
    return run(str, code([95], 39));
  }
  function brightCyan(str) {
    return run(str, code([96], 39));
  }
  function brightWhite(str) {
    return run(str, code([97], 39));
  }
  function bgBlack(str) {
    return run(str, code([40], 49));
  }
  function bgRed(str) {
    return run(str, code([41], 49));
  }
  function bgGreen(str) {
    return run(str, code([42], 49));
  }
  function bgYellow(str) {
    return run(str, code([43], 49));
  }
  function bgBlue(str) {
    return run(str, code([44], 49));
  }
  function bgMagenta(str) {
    return run(str, code([45], 49));
  }
  function bgCyan(str) {
    return run(str, code([46], 49));
  }
  function bgWhite(str) {
    return run(str, code([47], 49));
  }
  function bgBrightBlack(str) {
    return run(str, code([100], 49));
  }
  function bgBrightRed(str) {
    return run(str, code([101], 49));
  }
  function bgBrightGreen(str) {
    return run(str, code([102], 49));
  }
  function bgBrightYellow(str) {
    return run(str, code([103], 49));
  }
  function bgBrightBlue(str) {
    return run(str, code([104], 49));
  }
  function bgBrightMagenta(str) {
    return run(str, code([105], 49));
  }
  function bgBrightCyan(str) {
    return run(str, code([106], 49));
  }
  function bgBrightWhite(str) {
    return run(str, code([107], 49));
  }
  function clampAndTruncate(n3, max = 255, min = 0) {
    return Math.trunc(Math.max(Math.min(n3, max), min));
  }
  function rgb8(str, color) {
    return run(str, code([38, 5, clampAndTruncate(color)], 39));
  }
  function bgRgb8(str, color) {
    return run(str, code([48, 5, clampAndTruncate(color)], 49));
  }
  function rgb24(str, color) {
    return typeof color == "number" ? run(
      str,
      code(
        [38, 2, color >> 16 & 255, color >> 8 & 255, color & 255],
        39
      )
    ) : run(
      str,
      code(
        [
          38,
          2,
          clampAndTruncate(color.r),
          clampAndTruncate(color.g),
          clampAndTruncate(color.b)
        ],
        39
      )
    );
  }
  function bgRgb24(str, color) {
    return typeof color == "number" ? run(
      str,
      code(
        [48, 2, color >> 16 & 255, color >> 8 & 255, color & 255],
        49
      )
    ) : run(
      str,
      code(
        [
          48,
          2,
          clampAndTruncate(color.r),
          clampAndTruncate(color.g),
          clampAndTruncate(color.b)
        ],
        49
      )
    );
  }
  var ANSI_PATTERN = new RegExp(
    [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
    ].join("|"),
    "g"
  );
  function stripColor(string) {
    return string.replace(ANSI_PATTERN, "");
  }

  // https://deno.land/std@0.167.0/async/debounce.ts
  function debounce(fn, wait) {
    let timeout = null, flush = null, debounced = (...args) => {
      debounced.clear(), flush = () => {
        debounced.clear(), fn.call(debounced, ...args);
      }, timeout = setTimeout(flush, wait);
    };
    return debounced.clear = () => {
      typeof timeout == "number" && (clearTimeout(timeout), timeout = null, flush = null);
    }, debounced.flush = () => {
      flush?.();
    }, Object.defineProperty(debounced, "pending", {
      get: () => typeof timeout == "number"
    }), debounced;
  }

  // https://deno.land/std@0.170.0/async/retry.ts
  var RetryError = class extends Error {
    constructor(cause, count2) {
      super(`Exceeded max retry count (${count2})`), this.name = "RetryError", this.cause = cause;
    }
  }, defaultRetryOptions = {
    multiplier: 2,
    maxTimeout: 6e4,
    maxAttempts: 5,
    minTimeout: 1e3
  };
  async function retry(fn, opts) {
    let options2 = {
      ...defaultRetryOptions,
      ...opts
    };
    if (options2.maxTimeout >= 0 && options2.minTimeout > options2.maxTimeout)
      throw new RangeError("minTimeout is greater than maxTimeout");
    let timeout = options2.minTimeout, error;
    for (let i3 = 0; i3 < options2.maxAttempts; i3++)
      try {
        return await fn();
      } catch (err) {
        await new Promise((r2) => setTimeout(r2, timeout)), timeout *= options2.multiplier, timeout = Math.max(timeout, options2.minTimeout), options2.maxTimeout >= 0 && (timeout = Math.min(timeout, options2.maxTimeout)), error = err;
      }
    throw new RetryError(error, options2.maxAttempts);
  }

  // https://esm.sh/stable/preact@10.11.0/deno/preact.js
  var P, d2, $, Y, S, F2, B, T = {}, V = [], Z = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function k2(e3, t5) {
    for (var _2 in t5)
      e3[_2] = t5[_2];
    return e3;
  }
  function j2(e3) {
    var t5 = e3.parentNode;
    t5 && t5.removeChild(e3);
  }
  function ee(e3, t5, _2) {
    var r2, l5, o5, s6 = {};
    for (o5 in t5)
      o5 == "key" ? r2 = t5[o5] : o5 == "ref" ? l5 = t5[o5] : s6[o5] = t5[o5];
    if (arguments.length > 2 && (s6.children = arguments.length > 3 ? P.call(arguments, 2) : _2), typeof e3 == "function" && e3.defaultProps != null)
      for (o5 in e3.defaultProps)
        s6[o5] === void 0 && (s6[o5] = e3.defaultProps[o5]);
    return w2(e3, s6, r2, l5, null);
  }
  function w2(e3, t5, _2, r2, l5) {
    var o5 = { type: e3, props: t5, key: _2, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: l5 ?? ++$ };
    return l5 == null && d2.vnode != null && d2.vnode(o5), o5;
  }
  function L(e3) {
    return e3.children;
  }
  function U(e3, t5) {
    this.props = e3, this.context = t5;
  }
  function C(e3, t5) {
    if (t5 == null)
      return e3.__ ? C(e3.__, e3.__.__k.indexOf(e3) + 1) : null;
    for (var _2; t5 < e3.__k.length; t5++)
      if ((_2 = e3.__k[t5]) != null && _2.__e != null)
        return _2.__e;
    return typeof e3.type == "function" ? C(e3) : null;
  }
  function z2(e3) {
    var t5, _2;
    if ((e3 = e3.__) != null && e3.__c != null) {
      for (e3.__e = e3.__c.base = null, t5 = 0; t5 < e3.__k.length; t5++)
        if ((_2 = e3.__k[t5]) != null && _2.__e != null) {
          e3.__e = e3.__c.base = _2.__e;
          break;
        }
      return z2(e3);
    }
  }
  function M(e3) {
    (!e3.__d && (e3.__d = !0) && S.push(e3) && !D2.__r++ || F2 !== d2.debounceRendering) && ((F2 = d2.debounceRendering) || setTimeout)(D2);
  }
  function D2() {
    for (var e3; D2.__r = S.length; )
      e3 = S.sort(function(t5, _2) {
        return t5.__v.__b - _2.__v.__b;
      }), S = [], e3.some(function(t5) {
        var _2, r2, l5, o5, s6, f7;
        t5.__d && (s6 = (o5 = (_2 = t5).__v).__e, (f7 = _2.__P) && (r2 = [], (l5 = k2({}, o5)).__v = o5.__v + 1, W(f7, o5, l5, _2.__n, f7.ownerSVGElement !== void 0, o5.__h != null ? [s6] : null, r2, s6 ?? C(o5), o5.__h), K(r2, o5), o5.__e != s6 && z2(o5)));
      });
  }
  function G(e3, t5, _2, r2, l5, o5, s6, f7, p7, a6) {
    var n3, h4, c5, i3, u5, b4, v3, y4 = r2 && r2.__k || V, g7 = y4.length;
    for (_2.__k = [], n3 = 0; n3 < t5.length; n3++)
      if ((i3 = _2.__k[n3] = (i3 = t5[n3]) == null || typeof i3 == "boolean" ? null : typeof i3 == "string" || typeof i3 == "number" || typeof i3 == "bigint" ? w2(null, i3, null, null, i3) : Array.isArray(i3) ? w2(L, { children: i3 }, null, null, null) : i3.__b > 0 ? w2(i3.type, i3.props, i3.key, i3.ref ? i3.ref : null, i3.__v) : i3) != null) {
        if (i3.__ = _2, i3.__b = _2.__b + 1, (c5 = y4[n3]) === null || c5 && i3.key == c5.key && i3.type === c5.type)
          y4[n3] = void 0;
        else
          for (h4 = 0; h4 < g7; h4++) {
            if ((c5 = y4[h4]) && i3.key == c5.key && i3.type === c5.type) {
              y4[h4] = void 0;
              break;
            }
            c5 = null;
          }
        W(e3, i3, c5 = c5 || T, l5, o5, s6, f7, p7, a6), u5 = i3.__e, (h4 = i3.ref) && c5.ref != h4 && (v3 || (v3 = []), c5.ref && v3.push(c5.ref, null, i3), v3.push(h4, i3.__c || u5, i3)), u5 != null ? (b4 == null && (b4 = u5), typeof i3.type == "function" && i3.__k === c5.__k ? i3.__d = p7 = q(i3, p7, e3) : p7 = J(e3, i3, c5, y4, u5, p7), typeof _2.type == "function" && (_2.__d = p7)) : p7 && c5.__e == p7 && p7.parentNode != e3 && (p7 = C(c5));
      }
    for (_2.__e = b4, n3 = g7; n3--; )
      y4[n3] != null && (typeof _2.type == "function" && y4[n3].__e != null && y4[n3].__e == _2.__d && (_2.__d = C(r2, n3 + 1)), X(y4[n3], y4[n3]));
    if (v3)
      for (n3 = 0; n3 < v3.length; n3++)
        Q(v3[n3], v3[++n3], v3[++n3]);
  }
  function q(e3, t5, _2) {
    for (var r2, l5 = e3.__k, o5 = 0; l5 && o5 < l5.length; o5++)
      (r2 = l5[o5]) && (r2.__ = e3, t5 = typeof r2.type == "function" ? q(r2, t5, _2) : J(_2, r2, r2, l5, r2.__e, t5));
    return t5;
  }
  function J(e3, t5, _2, r2, l5, o5) {
    var s6, f7, p7;
    if (t5.__d !== void 0)
      s6 = t5.__d, t5.__d = void 0;
    else if (_2 == null || l5 != o5 || l5.parentNode == null)
      e:
        if (o5 == null || o5.parentNode !== e3)
          e3.appendChild(l5), s6 = null;
        else {
          for (f7 = o5, p7 = 0; (f7 = f7.nextSibling) && p7 < r2.length; p7 += 2)
            if (f7 == l5)
              break e;
          e3.insertBefore(l5, o5), s6 = o5;
        }
    return s6 !== void 0 ? s6 : l5.nextSibling;
  }
  function _e(e3, t5, _2, r2, l5) {
    var o5;
    for (o5 in _2)
      o5 === "children" || o5 === "key" || o5 in t5 || N(e3, o5, null, _2[o5], r2);
    for (o5 in t5)
      l5 && typeof t5[o5] != "function" || o5 === "children" || o5 === "key" || o5 === "value" || o5 === "checked" || _2[o5] === t5[o5] || N(e3, o5, t5[o5], _2[o5], r2);
  }
  function I(e3, t5, _2) {
    t5[0] === "-" ? e3.setProperty(t5, _2) : e3[t5] = _2 == null ? "" : typeof _2 != "number" || Z.test(t5) ? _2 : _2 + "px";
  }
  function N(e3, t5, _2, r2, l5) {
    var o5;
    e:
      if (t5 === "style")
        if (typeof _2 == "string")
          e3.style.cssText = _2;
        else {
          if (typeof r2 == "string" && (e3.style.cssText = r2 = ""), r2)
            for (t5 in r2)
              _2 && t5 in _2 || I(e3.style, t5, "");
          if (_2)
            for (t5 in _2)
              r2 && _2[t5] === r2[t5] || I(e3.style, t5, _2[t5]);
        }
      else if (t5[0] === "o" && t5[1] === "n")
        o5 = t5 !== (t5 = t5.replace(/Capture$/, "")), t5 = t5.toLowerCase() in e3 ? t5.toLowerCase().slice(2) : t5.slice(2), e3.l || (e3.l = {}), e3.l[t5 + o5] = _2, _2 ? r2 || e3.addEventListener(t5, o5 ? R : O, o5) : e3.removeEventListener(t5, o5 ? R : O, o5);
      else if (t5 !== "dangerouslySetInnerHTML") {
        if (l5)
          t5 = t5.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t5 !== "href" && t5 !== "list" && t5 !== "form" && t5 !== "tabIndex" && t5 !== "download" && t5 in e3)
          try {
            e3[t5] = _2 ?? "";
            break e;
          } catch {
          }
        typeof _2 == "function" || (_2 != null && (_2 !== !1 || t5[0] === "a" && t5[1] === "r") ? e3.setAttribute(t5, _2) : e3.removeAttribute(t5));
      }
  }
  function O(e3) {
    this.l[e3.type + !1](d2.event ? d2.event(e3) : e3);
  }
  function R(e3) {
    this.l[e3.type + !0](d2.event ? d2.event(e3) : e3);
  }
  function W(e3, t5, _2, r2, l5, o5, s6, f7, p7) {
    var a6, n3, h4, c5, i3, u5, b4, v3, y4, g7, x5, H7, E3, m6 = t5.type;
    if (t5.constructor !== void 0)
      return null;
    _2.__h != null && (p7 = _2.__h, f7 = t5.__e = _2.__e, t5.__h = null, o5 = [f7]), (a6 = d2.__b) && a6(t5);
    try {
      e:
        if (typeof m6 == "function") {
          if (v3 = t5.props, y4 = (a6 = m6.contextType) && r2[a6.__c], g7 = a6 ? y4 ? y4.props.value : a6.__ : r2, _2.__c ? b4 = (n3 = t5.__c = _2.__c).__ = n3.__E : ("prototype" in m6 && m6.prototype.render ? t5.__c = n3 = new m6(v3, g7) : (t5.__c = n3 = new U(v3, g7), n3.constructor = m6, n3.render = oe), y4 && y4.sub(n3), n3.props = v3, n3.state || (n3.state = {}), n3.context = g7, n3.__n = r2, h4 = n3.__d = !0, n3.__h = []), n3.__s == null && (n3.__s = n3.state), m6.getDerivedStateFromProps != null && (n3.__s == n3.state && (n3.__s = k2({}, n3.__s)), k2(n3.__s, m6.getDerivedStateFromProps(v3, n3.__s))), c5 = n3.props, i3 = n3.state, h4)
            m6.getDerivedStateFromProps == null && n3.componentWillMount != null && n3.componentWillMount(), n3.componentDidMount != null && n3.__h.push(n3.componentDidMount);
          else {
            if (m6.getDerivedStateFromProps == null && v3 !== c5 && n3.componentWillReceiveProps != null && n3.componentWillReceiveProps(v3, g7), !n3.__e && n3.shouldComponentUpdate != null && n3.shouldComponentUpdate(v3, n3.__s, g7) === !1 || t5.__v === _2.__v) {
              n3.props = v3, n3.state = n3.__s, t5.__v !== _2.__v && (n3.__d = !1), n3.__v = t5, t5.__e = _2.__e, t5.__k = _2.__k, t5.__k.forEach(function(A5) {
                A5 && (A5.__ = t5);
              }), n3.__h.length && s6.push(n3);
              break e;
            }
            n3.componentWillUpdate != null && n3.componentWillUpdate(v3, n3.__s, g7), n3.componentDidUpdate != null && n3.__h.push(function() {
              n3.componentDidUpdate(c5, i3, u5);
            });
          }
          if (n3.context = g7, n3.props = v3, n3.__v = t5, n3.__P = e3, x5 = d2.__r, H7 = 0, "prototype" in m6 && m6.prototype.render)
            n3.state = n3.__s, n3.__d = !1, x5 && x5(t5), a6 = n3.render(n3.props, n3.state, n3.context);
          else
            do
              n3.__d = !1, x5 && x5(t5), a6 = n3.render(n3.props, n3.state, n3.context), n3.state = n3.__s;
            while (n3.__d && ++H7 < 25);
          n3.state = n3.__s, n3.getChildContext != null && (r2 = k2(k2({}, r2), n3.getChildContext())), h4 || n3.getSnapshotBeforeUpdate == null || (u5 = n3.getSnapshotBeforeUpdate(c5, i3)), E3 = a6 != null && a6.type === L && a6.key == null ? a6.props.children : a6, G(e3, Array.isArray(E3) ? E3 : [E3], t5, _2, r2, l5, o5, s6, f7, p7), n3.base = t5.__e, t5.__h = null, n3.__h.length && s6.push(n3), b4 && (n3.__E = n3.__ = null), n3.__e = !1;
        } else
          o5 == null && t5.__v === _2.__v ? (t5.__k = _2.__k, t5.__e = _2.__e) : t5.__e = ne(_2.__e, t5, _2, r2, l5, o5, s6, p7);
      (a6 = d2.diffed) && a6(t5);
    } catch (A5) {
      t5.__v = null, (p7 || o5 != null) && (t5.__e = f7, t5.__h = !!p7, o5[o5.indexOf(f7)] = null), d2.__e(A5, t5, _2);
    }
  }
  function K(e3, t5) {
    d2.__c && d2.__c(t5, e3), e3.some(function(_2) {
      try {
        e3 = _2.__h, _2.__h = [], e3.some(function(r2) {
          r2.call(_2);
        });
      } catch (r2) {
        d2.__e(r2, _2.__v);
      }
    });
  }
  function ne(e3, t5, _2, r2, l5, o5, s6, f7) {
    var p7, a6, n3, h4 = _2.props, c5 = t5.props, i3 = t5.type, u5 = 0;
    if (i3 === "svg" && (l5 = !0), o5 != null) {
      for (; u5 < o5.length; u5++)
        if ((p7 = o5[u5]) && "setAttribute" in p7 == !!i3 && (i3 ? p7.localName === i3 : p7.nodeType === 3)) {
          e3 = p7, o5[u5] = null;
          break;
        }
    }
    if (e3 == null) {
      if (i3 === null)
        return document.createTextNode(c5);
      e3 = l5 ? document.createElementNS("http://www.w3.org/2000/svg", i3) : document.createElement(i3, c5.is && c5), o5 = null, f7 = !1;
    }
    if (i3 === null)
      h4 === c5 || f7 && e3.data === c5 || (e3.data = c5);
    else {
      if (o5 = o5 && P.call(e3.childNodes), a6 = (h4 = _2.props || T).dangerouslySetInnerHTML, n3 = c5.dangerouslySetInnerHTML, !f7) {
        if (o5 != null)
          for (h4 = {}, u5 = 0; u5 < e3.attributes.length; u5++)
            h4[e3.attributes[u5].name] = e3.attributes[u5].value;
        (n3 || a6) && (n3 && (a6 && n3.__html == a6.__html || n3.__html === e3.innerHTML) || (e3.innerHTML = n3 && n3.__html || ""));
      }
      if (_e(e3, c5, h4, l5, f7), n3)
        t5.__k = [];
      else if (u5 = t5.props.children, G(e3, Array.isArray(u5) ? u5 : [u5], t5, _2, r2, l5 && i3 !== "foreignObject", o5, s6, o5 ? o5[0] : _2.__k && C(_2, 0), f7), o5 != null)
        for (u5 = o5.length; u5--; )
          o5[u5] != null && j2(o5[u5]);
      f7 || ("value" in c5 && (u5 = c5.value) !== void 0 && (u5 !== e3.value || i3 === "progress" && !u5 || i3 === "option" && u5 !== h4.value) && N(e3, "value", u5, h4.value, !1), "checked" in c5 && (u5 = c5.checked) !== void 0 && u5 !== e3.checked && N(e3, "checked", u5, h4.checked, !1));
    }
    return e3;
  }
  function Q(e3, t5, _2) {
    try {
      typeof e3 == "function" ? e3(t5) : e3.current = t5;
    } catch (r2) {
      d2.__e(r2, _2);
    }
  }
  function X(e3, t5, _2) {
    var r2, l5;
    if (d2.unmount && d2.unmount(e3), (r2 = e3.ref) && (r2.current && r2.current !== e3.__e || Q(r2, null, t5)), (r2 = e3.__c) != null) {
      if (r2.componentWillUnmount)
        try {
          r2.componentWillUnmount();
        } catch (o5) {
          d2.__e(o5, t5);
        }
      r2.base = r2.__P = null, e3.__c = void 0;
    }
    if (r2 = e3.__k)
      for (l5 = 0; l5 < r2.length; l5++)
        r2[l5] && X(r2[l5], t5, typeof e3.type != "function");
    _2 || e3.__e == null || j2(e3.__e), e3.__ = e3.__e = e3.__d = void 0;
  }
  function oe(e3, t5, _2) {
    return this.constructor(e3, _2);
  }
  function re(e3, t5, _2) {
    var r2, l5, o5;
    d2.__ && d2.__(e3, t5), l5 = (r2 = typeof _2 == "function") ? null : _2 && _2.__k || t5.__k, o5 = [], W(t5, e3 = (!r2 && _2 || t5).__k = ee(L, null, [e3]), l5 || T, T, t5.ownerSVGElement !== void 0, !r2 && _2 ? [_2] : l5 ? null : t5.firstChild ? P.call(t5.childNodes) : null, o5, !r2 && _2 ? _2 : l5 ? l5.__e : t5.firstChild, r2), K(o5, e3);
  }
  function ce(e3, t5) {
    var _2 = { __c: t5 = "__cC" + B++, __: e3, Consumer: function(r2, l5) {
      return r2.children(l5);
    }, Provider: function(r2) {
      var l5, o5;
      return this.getChildContext || (l5 = [], (o5 = {})[t5] = this, this.getChildContext = function() {
        return o5;
      }, this.shouldComponentUpdate = function(s6) {
        this.props.value !== s6.value && l5.some(M);
      }, this.sub = function(s6) {
        l5.push(s6);
        var f7 = s6.componentWillUnmount;
        s6.componentWillUnmount = function() {
          l5.splice(l5.indexOf(s6), 1), f7 && f7.call(s6);
        };
      }), r2.children;
    } };
    return _2.Provider.__ = _2.Consumer.contextType = _2;
  }
  P = V.slice, d2 = { __e: function(e3, t5, _2, r2) {
    for (var l5, o5, s6; t5 = t5.__; )
      if ((l5 = t5.__c) && !l5.__)
        try {
          if ((o5 = l5.constructor) && o5.getDerivedStateFromError != null && (l5.setState(o5.getDerivedStateFromError(e3)), s6 = l5.__d), l5.componentDidCatch != null && (l5.componentDidCatch(e3, r2 || {}), s6 = l5.__d), s6)
            return l5.__E = l5;
        } catch (f7) {
          e3 = f7;
        }
    throw e3;
  } }, $ = 0, Y = function(e3) {
    return e3 != null && e3.constructor === void 0;
  }, U.prototype.setState = function(e3, t5) {
    var _2;
    _2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k2({}, this.state), typeof e3 == "function" && (e3 = e3(k2({}, _2), this.props)), e3 && k2(_2, e3), e3 != null && this.__v && (t5 && this.__h.push(t5), M(this));
  }, U.prototype.forceUpdate = function(e3) {
    this.__v && (this.__e = !0, e3 && this.__h.push(e3), M(this));
  }, U.prototype.render = L, S = [], D2.__r = 0, B = 0;

  // https://esm.sh/stable/preact@10.11.0/deno/hooks.js
  var i2, n, d3, N2, f4 = 0, q2 = [], l4 = [], V2 = d2.__b, g3 = d2.__r, b = d2.diffed, C2 = d2.__c, A = d2.unmount;
  function a3(_2, t5) {
    d2.__h && d2.__h(n, _2, f4 || t5), f4 = 0;
    var u5 = n.__H || (n.__H = { __: [], __h: [] });
    return _2 >= u5.__.length && u5.__.push({ __V: l4 }), u5.__[_2];
  }
  function P2(_2) {
    return f4 = 1, B2(D3, _2);
  }
  function B2(_2, t5, u5) {
    var o5 = a3(i2++, 2);
    if (o5.t = _2, !o5.__c && (o5.__ = [u5 ? u5(t5) : D3(void 0, t5), function(v3) {
      var s6 = o5.__N ? o5.__N[0] : o5.__[0], h4 = o5.t(s6, v3);
      s6 !== h4 && (o5.__N = [h4, o5.__[1]], o5.__c.setState({}));
    }], o5.__c = n, !n.u)) {
      n.u = !0;
      var r2 = n.shouldComponentUpdate;
      n.shouldComponentUpdate = function(v3, s6, h4) {
        if (!o5.__c.__H)
          return !0;
        var y4 = o5.__c.__H.__.filter(function(c5) {
          return c5.__c;
        });
        if (y4.every(function(c5) {
          return !c5.__N;
        }))
          return !r2 || r2.call(this, v3, s6, h4);
        var E3 = !1;
        return y4.forEach(function(c5) {
          if (c5.__N) {
            var k5 = c5.__[0];
            c5.__ = c5.__N, c5.__N = void 0, k5 !== c5.__[0] && (E3 = !0);
          }
        }), !!E3 && (!r2 || r2.call(this, v3, s6, h4));
      };
    }
    return o5.__N || o5.__;
  }
  function j3(_2, t5) {
    var u5 = a3(i2++, 3);
    !d2.__s && H(u5.__H, t5) && (u5.__ = _2, u5.i = t5, n.__H.__h.push(u5));
  }
  function w3(_2) {
    return f4 = 5, x(function() {
      return { current: _2 };
    }, []);
  }
  function x(_2, t5) {
    var u5 = a3(i2++, 7);
    return H(u5.__H, t5) ? (u5.__V = _2(), u5.i = t5, u5.__h = _2, u5.__V) : u5.__;
  }
  function L2(_2, t5) {
    return f4 = 8, x(function() {
      return _2;
    }, t5);
  }
  function M2(_2) {
    var t5 = n.context[_2.__c], u5 = a3(i2++, 9);
    return u5.c = _2, t5 ? (u5.__ == null && (u5.__ = !0, t5.sub(n)), t5.props.value) : _2.__;
  }
  function R2() {
    for (var _2; _2 = q2.shift(); )
      if (_2.__P && _2.__H)
        try {
          _2.__H.__h.forEach(m3), _2.__H.__h.forEach(p2), _2.__H.__h = [];
        } catch (t5) {
          _2.__H.__h = [], d2.__e(t5, _2.__v);
        }
  }
  d2.__b = function(_2) {
    typeof _2.type != "function" || _2.o || _2.type === L ? _2.o || (_2.o = _2.__ && _2.__.o ? _2.__.o : "") : _2.o = (_2.__ && _2.__.o ? _2.__.o : "") + (_2.__ && _2.__.__k ? _2.__.__k.indexOf(_2) : 0), n = null, V2 && V2(_2);
  }, d2.__r = function(_2) {
    g3 && g3(_2), i2 = 0;
    var t5 = (n = _2.__c).__H;
    t5 && (d3 === n ? (t5.__h = [], n.__h = [], t5.__.forEach(function(u5) {
      u5.__N && (u5.__ = u5.__N), u5.__V = l4, u5.__N = u5.i = void 0;
    })) : (t5.__h.forEach(m3), t5.__h.forEach(p2), t5.__h = [])), d3 = n;
  }, d2.diffed = function(_2) {
    b && b(_2);
    var t5 = _2.__c;
    t5 && t5.__H && (t5.__H.__h.length && (q2.push(t5) !== 1 && N2 === d2.requestAnimationFrame || ((N2 = d2.requestAnimationFrame) || S2)(R2)), t5.__H.__.forEach(function(u5) {
      u5.i && (u5.__H = u5.i), u5.__V !== l4 && (u5.__ = u5.__V), u5.i = void 0, u5.__V = l4;
    })), d3 = n = null;
  }, d2.__c = function(_2, t5) {
    t5.some(function(u5) {
      try {
        u5.__h.forEach(m3), u5.__h = u5.__h.filter(function(o5) {
          return !o5.__ || p2(o5);
        });
      } catch (o5) {
        t5.some(function(r2) {
          r2.__h && (r2.__h = []);
        }), t5 = [], d2.__e(o5, u5.__v);
      }
    }), C2 && C2(_2, t5);
  }, d2.unmount = function(_2) {
    A && A(_2);
    var t5, u5 = _2.__c;
    u5 && u5.__H && (u5.__H.__.forEach(function(o5) {
      try {
        m3(o5);
      } catch (r2) {
        t5 = r2;
      }
    }), u5.__H = void 0, t5 && d2.__e(t5, u5.__v));
  };
  var F3 = typeof requestAnimationFrame == "function";
  function S2(_2) {
    var t5, u5 = function() {
      clearTimeout(o5), F3 && cancelAnimationFrame(t5), setTimeout(_2);
    }, o5 = setTimeout(u5, 100);
    F3 && (t5 = requestAnimationFrame(u5));
  }
  function m3(_2) {
    var t5 = n, u5 = _2.__c;
    typeof u5 == "function" && (_2.__c = void 0, u5()), n = t5;
  }
  function p2(_2) {
    var t5 = n;
    _2.__c = _2.__(), n = t5;
  }
  function H(_2, t5) {
    return !_2 || _2.length !== t5.length || t5.some(function(u5, o5) {
      return u5 !== _2[o5];
    });
  }
  function D3(_2, t5) {
    return typeof t5 == "function" ? t5(_2) : t5;
  }

  // https://esm.sh/v106/memoize-one@6.0.0/deno/memoize-one.js
  var s3 = Number.isNaN || function(r2) {
    return typeof r2 == "number" && r2 !== r2;
  };

  // https://esm.sh/v106/p-throttle@5.0.0/deno/p-throttle.js
  var a4 = class extends Error {
    constructor() {
      super("Throttled function aborted"), this.name = "AbortError";
    }
  };
  function m4({ limit: i3, interval: s6, strict: f7 }) {
    if (!Number.isFinite(i3))
      throw new TypeError("Expected `limit` to be a finite number");
    if (!Number.isFinite(s6))
      throw new TypeError("Expected `interval` to be a finite number");
    let r2 = /* @__PURE__ */ new Map(), u5 = 0, c5 = 0;
    function p7() {
      let e3 = Date.now();
      return e3 - u5 > s6 ? (c5 = 1, u5 = e3, 0) : (c5 < i3 ? c5++ : (u5 += s6, c5 = 1), u5 - e3);
    }
    let n3 = [];
    function h4() {
      let e3 = Date.now();
      if (n3.length < i3)
        return n3.push(e3), 0;
      let t5 = n3.shift() + s6;
      return e3 >= t5 ? (n3.push(e3), 0) : (n3.push(t5), t5 - e3);
    }
    let w5 = f7 ? h4 : p7;
    return (e3) => {
      let t5 = function(...o5) {
        if (!t5.isEnabled)
          return (async () => e3.apply(this, o5))();
        let l5;
        return new Promise((d4, b4) => {
          l5 = setTimeout(() => {
            d4(e3.apply(this, o5)), r2.delete(l5);
          }, w5()), r2.set(l5, b4);
        });
      };
      return t5.abort = () => {
        for (let o5 of r2.keys())
          clearTimeout(o5), r2.get(o5)(new a4());
        r2.clear(), n3.splice(0, n3.length);
      }, t5.isEnabled = !0, t5;
    };
  }

  // https://esm.sh/v106/lodash.throttle@4.1.1/deno/lodash.throttle.js
  var __global$ = globalThis || (typeof window < "u" ? window : self), A2 = Object.create, h2 = Object.defineProperty, B3 = Object.getOwnPropertyDescriptor, F4 = Object.getOwnPropertyNames, R3 = Object.getPrototypeOf, P3 = Object.prototype.hasOwnProperty, D4 = (e3, n3) => () => (n3 || e3((n3 = { exports: {} }).exports, n3), n3.exports), G2 = (e3, n3, t5, f7) => {
    if (n3 && typeof n3 == "object" || typeof n3 == "function")
      for (let i3 of F4(n3))
        !P3.call(e3, i3) && i3 !== t5 && h2(e3, i3, { get: () => n3[i3], enumerable: !(f7 = B3(n3, i3)) || f7.enumerable });
    return e3;
  }, H2 = (e3, n3, t5) => (t5 = e3 != null ? A2(R3(e3)) : {}, G2(n3 || !e3 || !e3.__esModule ? h2(t5, "default", { value: e3, enumerable: !0 }) : t5, e3)), L3 = D4((ce4, k5) => {
    var _2 = "Expected a function", S7 = NaN, U5 = "[object Symbol]", X6 = /^\s+|\s+$/g, q6 = /^[-+]0x[0-9a-f]+$/i, z5 = /^0b[01]+$/i, J4 = /^0o[0-7]+$/i, K6 = parseInt, Q6 = typeof __global$ == "object" && __global$ && __global$.Object === Object && __global$, V6 = typeof self == "object" && self && self.Object === Object && self, Y6 = Q6 || V6 || Function("return this")(), Z5 = Object.prototype, w5 = Z5.toString, ee4 = Math.max, ne4 = Math.min, j6 = function() {
      return Y6.Date.now();
    };
    function te2(e3, n3, t5) {
      var f7, i3, g7, c5, a6, u5, l5 = 0, v3 = !1, s6 = !1, y4 = !0;
      if (typeof e3 != "function")
        throw new TypeError(_2);
      n3 = E3(n3) || 0, b4(t5) && (v3 = !!t5.leading, s6 = "maxWait" in t5, g7 = s6 ? ee4(E3(t5.maxWait) || 0, n3) : g7, y4 = "trailing" in t5 ? !!t5.trailing : y4);
      function p7(r2) {
        var o5 = f7, d4 = i3;
        return f7 = i3 = void 0, l5 = r2, c5 = e3.apply(d4, o5), c5;
      }
      function C5(r2) {
        return l5 = r2, a6 = setTimeout(m6, n3), v3 ? p7(r2) : c5;
      }
      function M5(r2) {
        var o5 = r2 - u5, d4 = r2 - l5, O4 = n3 - o5;
        return s6 ? ne4(O4, g7 - d4) : O4;
      }
      function x5(r2) {
        var o5 = r2 - u5, d4 = r2 - l5;
        return u5 === void 0 || o5 >= n3 || o5 < 0 || s6 && d4 >= g7;
      }
      function m6() {
        var r2 = j6();
        if (x5(r2))
          return I5(r2);
        a6 = setTimeout(m6, M5(r2));
      }
      function I5(r2) {
        return a6 = void 0, y4 && f7 ? p7(r2) : (f7 = i3 = void 0, c5);
      }
      function N7() {
        a6 !== void 0 && clearTimeout(a6), l5 = 0, f7 = u5 = i3 = a6 = void 0;
      }
      function $4() {
        return a6 === void 0 ? c5 : I5(j6());
      }
      function T6() {
        var r2 = j6(), o5 = x5(r2);
        if (f7 = arguments, i3 = this, u5 = r2, o5) {
          if (a6 === void 0)
            return C5(u5);
          if (s6)
            return a6 = setTimeout(m6, n3), p7(u5);
        }
        return a6 === void 0 && (a6 = setTimeout(m6, n3)), c5;
      }
      return T6.cancel = N7, T6.flush = $4, T6;
    }
    function re4(e3, n3, t5) {
      var f7 = !0, i3 = !0;
      if (typeof e3 != "function")
        throw new TypeError(_2);
      return b4(t5) && (f7 = "leading" in t5 ? !!t5.leading : f7, i3 = "trailing" in t5 ? !!t5.trailing : i3), te2(e3, n3, { leading: f7, maxWait: n3, trailing: i3 });
    }
    function b4(e3) {
      var n3 = typeof e3;
      return !!e3 && (n3 == "object" || n3 == "function");
    }
    function ie4(e3) {
      return !!e3 && typeof e3 == "object";
    }
    function fe(e3) {
      return typeof e3 == "symbol" || ie4(e3) && w5.call(e3) == U5;
    }
    function E3(e3) {
      if (typeof e3 == "number")
        return e3;
      if (fe(e3))
        return S7;
      if (b4(e3)) {
        var n3 = typeof e3.valueOf == "function" ? e3.valueOf() : e3;
        e3 = b4(n3) ? n3 + "" : n3;
      }
      if (typeof e3 != "string")
        return e3 === 0 ? e3 : +e3;
      e3 = e3.replace(X6, "");
      var t5 = z5.test(e3);
      return t5 || J4.test(e3) ? K6(e3.slice(2), t5 ? 2 : 8) : q6.test(e3) ? S7 : +e3;
    }
    k5.exports = re4;
  }), ae = H2(L3()), { default: W2, ...oe2 } = ae, le = W2 !== void 0 ? W2 : oe2;

  // https://esm.sh/v106/@twind/core@1.0.1/deno/core.js
  var F5;
  function lt(t5) {
    return [...t5.v, (t5.i ? "!" : "") + t5.n].join(":");
  }
  function st(t5, e3 = ",") {
    return t5.map(lt).join(e3);
  }
  var W3 = typeof CSS < "u" && CSS.escape || ((t5) => t5.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
  function V3(t5) {
    for (var e3 = 9, r2 = t5.length; r2--; )
      e3 = Math.imul(e3 ^ t5.charCodeAt(r2), 1597334677);
    return "#" + ((e3 ^ e3 >>> 9) >>> 0).toString(36);
  }
  function kt(t5, e3 = "@media ") {
    return e3 + x2(t5).map((r2) => (typeof r2 == "string" && (r2 = { min: r2 }), r2.raw || Object.keys(r2).map((n3) => `(${n3}-width:${r2[n3]})`).join(" and "))).join(",");
  }
  function x2(t5 = []) {
    return Array.isArray(t5) ? t5 : t5 == null ? [] : [t5];
  }
  function D5() {
  }
  var w4 = { d: 0, b: 134217728, c: 268435456, a: 671088640, u: 805306368, o: 939524096 };
  function jt(t5) {
    var e3;
    return ((e3 = t5.match(/[-=:;]/g)) == null ? void 0 : e3.length) || 0;
  }
  function X2(t5) {
    return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(t5) ? +RegExp.$1 / (RegExp.$2 ? 15 : 1) / 10 : 0, 15) << 22 | Math.min(jt(t5), 15) << 18;
  }
  var qt = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
  function at({ n: t5, i: e3, v: r2 = [] }, n3, i3, l5) {
    for (let a6 of (t5 && (t5 = lt({ n: t5, i: e3, v: r2 })), l5 = [...x2(l5)], r2)) {
      let s6 = n3.theme("screens", a6);
      for (let u5 of x2(s6 && kt(s6) || n3.v(a6))) {
        var o5;
        l5.push(u5), i3 |= s6 ? 67108864 | X2(u5) : a6 == "dark" ? 1073741824 : u5[0] == "@" ? X2(u5) : (o5 = u5, 1 << ~(/:([a-z-]+)/.test(o5) && ~qt.indexOf(RegExp.$1.slice(2, 7)) || -18));
      }
    }
    return { n: t5, p: i3, r: l5, i: e3 };
  }
  var ut = /* @__PURE__ */ new Map();
  function tt(t5) {
    if (t5.d) {
      let e3 = [], r2 = Y2(t5.r.reduce((n3, i3) => i3[0] == "@" ? (e3.push(i3), n3) : i3 ? Y2(n3, (l5) => Y2(i3, (o5) => {
        let a6 = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o5);
        if (a6) {
          let s6 = l5.indexOf(a6[1]);
          return ~s6 ? l5.slice(0, s6) + a6[0] + l5.slice(s6 + a6[1].length) : Z2(l5, o5);
        }
        return Z2(o5, l5);
      })) : n3, "&"), (n3) => Z2(n3, t5.n ? "." + W3(t5.n) : ""));
      return r2 && e3.push(r2.replace(/:merge\((.+?)\)/g, "$1")), e3.reduceRight((n3, i3) => i3 + "{" + n3 + "}", t5.d);
    }
  }
  function Y2(t5, e3) {
    return t5.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r2, n3, i3) => e3(n3) + i3);
  }
  function Z2(t5, e3) {
    return t5.replace(/&/g, e3);
  }
  var Dt = new Intl.Collator("en", { numeric: !0 });
  function St(t5, e3) {
    for (var r2 = 0, n3 = t5.length; r2 < n3; ) {
      let i3 = n3 + r2 >> 1;
      0 >= Mt(t5[i3], e3) ? r2 = i3 + 1 : n3 = i3;
    }
    return n3;
  }
  function Mt(t5, e3) {
    let r2 = t5.p & w4.o;
    return r2 == (e3.p & w4.o) && (r2 == w4.b || r2 == w4.o) ? 0 : t5.p - e3.p || t5.o - e3.o || Dt.compare(t5.n, e3.n);
  }
  function H3(t5, e3) {
    return Math.round(parseInt(t5, 16) * e3);
  }
  function T2(t5, e3 = {}) {
    if (typeof t5 == "function")
      return t5(e3);
    let { opacityValue: r2 = "1", opacityVariable: n3 } = e3, i3 = n3 ? `var(${n3})` : r2;
    if (t5.includes("<alpha-value>"))
      return t5.replace("<alpha-value>", i3);
    if (t5[0] == "#" && (t5.length == 4 || t5.length == 7)) {
      let l5 = (t5.length - 1) / 3, o5 = [17, 1, 0.062272][l5 - 1];
      return `rgba(${[H3(t5.substr(1, l5), o5), H3(t5.substr(1 + l5, l5), o5), H3(t5.substr(1 + 2 * l5, l5), o5), i3]})`;
    }
    return i3 == "1" ? t5 : i3 == "0" ? "#0000" : t5.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${i3})`);
  }
  function ct(t5, e3, r2, n3, i3 = []) {
    return function l5(o5, { n: a6, p: s6, r: u5 = [], i: f7 }, c5) {
      let p7 = [], d4 = "", v3 = 0, g7 = 0;
      for (let h4 in o5 || {}) {
        var y4, A5;
        let b4 = o5[h4];
        if (h4[0] == "@") {
          if (!b4)
            continue;
          if (h4[1] == "a") {
            p7.push(...ht(a6, s6, N3("" + b4), c5, s6, u5, f7, !0));
            continue;
          }
          if (h4[1] == "l") {
            for (let m6 of x2(b4))
              p7.push(...l5(m6, { n: a6, p: (y4 = w4[h4[7]], s6 & ~w4.o | y4), r: u5, i: f7 }, c5));
            continue;
          }
          if (h4[1] == "i") {
            p7.push(...x2(b4).map((m6) => ({ p: -1, o: 0, r: [], d: h4 + " " + m6 })));
            continue;
          }
          if (h4[1] == "k") {
            p7.push({ p: w4.d, o: 0, r: [h4], d: l5(b4, { p: w4.d }, c5).map(tt).join("") });
            continue;
          }
          if (h4[1] == "f") {
            p7.push(...x2(b4).map((m6) => ({ p: w4.d, o: 0, r: [h4], d: l5(m6, { p: w4.d }, c5).map(tt).join("") })));
            continue;
          }
        }
        if (typeof b4 != "object" || Array.isArray(b4))
          h4 == "label" && b4 ? a6 = b4 + V3(JSON.stringify([s6, f7, o5])) : (b4 || b4 === 0) && (h4 = h4.replace(/[A-Z]/g, (m6) => "-" + m6.toLowerCase()), g7 += 1, v3 = Math.max(v3, (A5 = h4)[0] == "-" ? 0 : jt(A5) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(A5) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), d4 += (d4 ? ";" : "") + x2(b4).map((m6) => c5.s(h4, ft("" + m6, c5.theme) + (f7 ? " !important" : ""))).join(";"));
        else if (h4[0] == "@" || h4.includes("&")) {
          let m6 = s6;
          h4[0] == "@" && (h4 = h4.replace(/\bscreen\(([^)]+)\)/g, (C5, $4) => {
            let j6 = c5.theme("screens", $4);
            return j6 ? (m6 |= 67108864, kt(j6, "")) : C5;
          }), m6 |= X2(h4)), p7.push(...l5(b4, { n: a6, p: m6, r: [...u5, h4], i: f7 }, c5));
        } else
          p7.push(...l5(b4, { p: s6, r: [...u5, h4] }, c5));
      }
      return p7.unshift({ n: a6, p: s6, o: Math.max(0, 15 - g7) + 1.5 * Math.min(v3 || 15, 15), r: u5, d: d4 }), p7.sort(Mt);
    }(t5, at(e3, r2, n3, i3), r2);
  }
  function ft(t5, e3) {
    return t5.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r2, n3, i3, l5, o5) => {
      let a6 = e3(i3, o5);
      return typeof a6 == "function" && /color|fill|stroke/i.test(i3) ? T2(a6) : "" + a6;
    });
  }
  function pt(t5, e3) {
    let r2, n3 = [];
    for (let i3 of t5)
      i3.d && i3.n ? r2?.p == i3.p && "" + r2.r == "" + i3.r ? (r2.c = [r2.c, i3.c].filter(Boolean).join(" "), r2.d = r2.d + ";" + i3.d) : n3.push(r2 = { ...i3, n: i3.n && e3 }) : n3.push({ ...i3, n: i3.n && e3 });
    return n3;
  }
  function B4(t5, e3, r2 = w4.u, n3, i3) {
    let l5 = [];
    for (let o5 of t5)
      for (let a6 of function(s6, u5, f7, c5, p7) {
        var d4;
        s6 = { ...s6, i: s6.i || p7 };
        let v3 = function(g7, y4) {
          let A5 = ut.get(g7.n);
          return A5 ? A5(g7, y4) : y4.r(g7.n, g7.v[0] == "dark");
        }(s6, u5);
        return v3 ? typeof v3 == "string" ? ({ r: c5, p: f7 } = at(s6, u5, f7, c5), pt(B4(N3(v3), u5, f7, c5, s6.i), s6.n)) : Array.isArray(v3) ? v3.map((g7) => {
          var y4, A5;
          return { o: 0, ...g7, r: [...x2(c5), ...x2(g7.r)], p: (y4 = f7, A5 = (d4 = g7.p) != null ? d4 : f7, y4 & ~w4.o | A5) };
        }) : ct(v3, s6, u5, f7, c5) : [{ c: lt(s6), p: 0, o: 0, r: [] }];
      }(o5, e3, r2, n3, i3))
        l5.splice(St(l5, a6), 0, a6);
    return l5;
  }
  function ht(t5, e3, r2, n3, i3, l5, o5, a6) {
    return pt((a6 ? r2.flatMap((s6) => B4([s6], n3, i3, l5, o5)) : B4(r2, n3, i3, l5, o5)).map((s6) => s6.p & w4.o && (s6.n || e3 == w4.b) ? { ...s6, p: s6.p & ~w4.o | e3, o: 0 } : s6), t5);
  }
  function Ot(t5, e3, r2, n3) {
    var i3;
    return i3 = (l5, o5) => {
      let { n: a6, p: s6, r: u5, i: f7 } = at(l5, o5, e3);
      return r2 && ht(a6, e3, r2, o5, s6, u5, f7, n3);
    }, ut.set(t5, i3), t5;
  }
  function K2(t5, e3) {
    if (t5[t5.length - 1] != "(") {
      let r2 = [], n3 = !1, i3 = !1, l5 = "";
      for (let o5 of t5)
        if (!(o5 == "(" || /[~@]$/.test(o5))) {
          if (o5[0] == "!" && (o5 = o5.slice(1), n3 = !n3), o5.endsWith(":")) {
            r2[o5 == "dark:" ? "unshift" : "push"](o5.slice(0, -1));
            continue;
          }
          o5[0] == "-" && (o5 = o5.slice(1), i3 = !i3), o5.endsWith("-") && (o5 = o5.slice(0, -1)), o5 && o5 != "&" && (l5 += (l5 && "-") + o5);
        }
      l5 && (i3 && (l5 = "-" + l5), e3[0].push({ n: l5, v: r2.filter(Jt), i: n3 }));
    }
  }
  function Jt(t5, e3, r2) {
    return r2.indexOf(t5) == e3;
  }
  var yt = /* @__PURE__ */ new Map();
  function N3(t5) {
    let e3 = yt.get(t5);
    if (!e3) {
      let r2 = [], n3 = [[]], i3 = 0, l5 = 0, o5 = null, a6 = 0, s6 = (u5, f7 = 0) => {
        i3 != a6 && (r2.push(t5.slice(i3, a6 + f7)), u5 && K2(r2, n3)), i3 = a6 + 1;
      };
      for (; a6 < t5.length; a6++) {
        let u5 = t5[a6];
        if (l5)
          t5[a6 - 1] != "\\" && (l5 += +(u5 == "[") || -(u5 == "]"));
        else if (u5 == "[")
          l5 += 1;
        else if (o5)
          t5[a6 - 1] != "\\" && o5.test(t5.slice(a6)) && (o5 = null, i3 = a6 + RegExp.lastMatch.length);
        else if (u5 == "/" && t5[a6 - 1] != "\\" && (t5[a6 + 1] == "*" || t5[a6 + 1] == "/"))
          o5 = t5[a6 + 1] == "*" ? /^\*\// : /^[\r\n]/;
        else if (u5 == "(")
          s6(), r2.push(u5);
        else if (u5 == ":")
          t5[a6 + 1] != ":" && s6(!1, 1);
        else if (/[\s,)]/.test(u5)) {
          s6(!0);
          let f7 = r2.lastIndexOf("(");
          if (u5 == ")") {
            let c5 = r2[f7 - 1];
            if (/[~@]$/.test(c5)) {
              let p7 = n3.shift();
              r2.length = f7, K2([...r2, "#"], n3);
              let { v: d4 } = n3[0].pop();
              for (let v3 of p7)
                v3.v.splice(+(v3.v[0] == "dark") - +(d4[0] == "dark"), d4.length);
              K2([...r2, Ot(c5.length > 1 ? c5.slice(0, -1) + V3(JSON.stringify([c5, p7])) : c5 + "(" + st(p7) + ")", w4.a, p7, /@$/.test(c5))], n3);
            }
            f7 = r2.lastIndexOf("(", f7 - 1);
          }
          r2.length = f7 + 1;
        } else
          /[~@]/.test(u5) && t5[a6 + 1] == "(" && n3.unshift([]);
      }
      s6(!0), yt.set(t5, e3 = n3[0]);
    }
    return e3;
  }
  function Ct(t5, e3, r2) {
    return e3.reduce((n3, i3, l5) => n3 + r2(i3) + t5[l5 + 1], t5[0]);
  }
  function G3(t5, e3) {
    return Array.isArray(t5) && Array.isArray(t5.raw) ? Ct(t5, e3, (r2) => Q2(r2).trim()) : e3.filter(Boolean).reduce((r2, n3) => r2 + Q2(n3), t5 ? Q2(t5) : "");
  }
  function Q2(t5) {
    let e3, r2 = "";
    if (t5 && typeof t5 == "object")
      if (Array.isArray(t5))
        (e3 = G3(t5[0], t5.slice(1))) && (r2 += " " + e3);
      else
        for (let n3 in t5)
          t5[n3] && (r2 += " " + n3);
    else
      t5 != null && typeof t5 != "boolean" && (r2 += " " + t5);
    return r2;
  }
  var ae2 = Et("@"), ue = Et("~");
  function Et(t5) {
    return new Proxy(function(r2, ...n3) {
      return e3("", r2, n3);
    }, { get: (r2, n3) => n3 in r2 ? r2[n3] : function(i3, ...l5) {
      return e3(n3, i3, l5);
    } });
    function e3(r2, n3, i3) {
      return st(N3(r2 + t5 + "(" + G3(n3, i3) + ")"));
    }
  }
  function U2(t5, e3) {
    return Array.isArray(t5) ? mt(Ct(t5, e3, (r2) => r2 != null && typeof r2 != "boolean" ? r2 : "")) : typeof t5 == "string" ? mt(t5) : [t5];
  }
  var Bt = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
  function mt(t5) {
    let e3;
    t5 = t5.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
    let r2 = [{}], n3 = [r2[0]], i3 = [];
    for (; e3 = Bt.exec(t5); )
      e3[4] && (r2.shift(), i3.shift()), e3[3] ? (i3.unshift(e3[3]), r2.unshift({}), n3.push(i3.reduce((l5, o5) => ({ [o5]: l5 }), r2[0]))) : e3[4] || (r2[0][e3[1]] && (r2.unshift({}), n3.push(i3.reduce((l5, o5) => ({ [o5]: l5 }), r2[0]))), r2[0][e3[1]] = e3[2]);
    return n3;
  }
  function dt(t5, ...e3) {
    var r2, n3;
    let i3 = U2(t5, e3), l5 = (((r2 = i3.find((o5) => o5.label)) == null ? void 0 : r2.label) || "css") + V3(JSON.stringify(i3));
    return n3 = (o5, a6) => pt(i3.flatMap((s6) => ct(s6, o5, a6, w4.o)), l5), ut.set(l5, n3), l5;
  }
  var ce2 = new Proxy(function(t5, e3) {
    return bt("animation", t5, e3);
  }, { get: (t5, e3) => e3 in t5 ? t5[e3] : function(r2, n3) {
    return bt(e3, r2, n3);
  } });
  function bt(t5, e3, r2) {
    return { toString: () => dt({ label: t5, "@layer components": { ...typeof e3 == "object" ? e3 : { animation: e3 }, animationName: "" + r2 } }) };
  }
  var Ut = Symbol();
  var z3 = new Proxy(D5, { apply: (t5, e3, r2) => F5(r2[0]), get(t5, e3) {
    let r2 = F5[e3];
    return typeof r2 == "function" ? function() {
      return r2.apply(F5, arguments);
    } : r2;
  } });
  var xe = function t2(e3) {
    return new Proxy(function(r2, ...n3) {
      return xt(e3, "", r2, n3);
    }, { get: (r2, n3) => n3 === "bind" ? t2 : n3 in r2 ? r2[n3] : function(i3, ...l5) {
      return xt(e3, n3, i3, l5);
    } });
  }();
  function xt(t5, e3, r2, n3) {
    return { toString() {
      let i3 = U2(r2, n3), l5 = W3(e3 + V3(JSON.stringify([e3, i3])));
      return (typeof t5 == "function" ? t5 : z3)(dt({ [`@keyframes ${l5}`]: U2(r2, n3) })), l5;
    } };
  }

  // https://esm.sh/v106/@twind/core@1.1.3/deno/core.js
  var B5;
  function ae3(e3) {
    return [...e3.v, (e3.i ? "!" : "") + e3.n].join(":");
  }
  function ue2(e3, t5 = ",") {
    return e3.map(ae3).join(t5);
  }
  var Y3 = typeof CSS < "u" && CSS.escape || ((e3) => e3.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
  function T3(e3) {
    for (var t5 = 9, r2 = e3.length; r2--; )
      t5 = Math.imul(t5 ^ e3.charCodeAt(r2), 1597334677);
    return "#" + ((t5 ^ t5 >>> 9) >>> 0).toString(36);
  }
  function Ce(e3, t5 = "@media ") {
    return t5 + b2(e3).map((r2) => (typeof r2 == "string" && (r2 = { min: r2 }), r2.raw || Object.keys(r2).map((i3) => `(${i3}-width:${r2[i3]})`).join(" and "))).join(",");
  }
  function b2(e3 = []) {
    return Array.isArray(e3) ? e3 : e3 == null ? [] : [e3];
  }
  function F6() {
  }
  var S3 = { d: 0, b: 134217728, c: 268435456, a: 671088640, u: 805306368, o: 939524096 };
  function Ee(e3) {
    return e3.match(/[-=:;]/g)?.length || 0;
  }
  function re2(e3) {
    return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e3) ? Math.max(0, 29.63 * (+RegExp.$1 / (RegExp.$2 ? 15 : 1)) ** 0.137 - 43) : 0, 15) << 22 | Math.min(Ee(e3), 15) << 18;
  }
  var Ue = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
  function ce3({ n: e3, i: t5, v: r2 = [] }, i3, n3, l5) {
    e3 && (e3 = ae3({ n: e3, i: t5, v: r2 })), l5 = [...b2(l5)];
    for (let s6 of r2) {
      let f7 = i3.theme("screens", s6);
      for (let a6 of b2(f7 && Ce(f7) || i3.v(s6))) {
        var o5;
        l5.push(a6), n3 |= f7 ? 67108864 | re2(a6) : s6 == "dark" ? 1073741824 : a6[0] == "@" ? re2(a6) : (o5 = a6, 1 << ~(/:([a-z-]+)/.test(o5) && ~Ue.indexOf(RegExp.$1.slice(2, 7)) || -18));
      }
    }
    return { n: e3, p: n3, r: l5, i: t5 };
  }
  var pe = /* @__PURE__ */ new Map();
  function ne2(e3) {
    if (e3.d) {
      let t5 = [], r2 = H4(e3.r.reduce((i3, n3) => n3[0] == "@" ? (t5.push(n3), i3) : n3 ? H4(i3, (l5) => H4(n3, (o5) => {
        let s6 = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o5);
        if (s6) {
          let f7 = l5.indexOf(s6[1]);
          return ~f7 ? l5.slice(0, f7) + s6[0] + l5.slice(f7 + s6[1].length) : Q3(l5, o5);
        }
        return Q3(o5, l5);
      })) : i3, "&"), (i3) => Q3(i3, e3.n ? "." + Y3(e3.n) : ""));
      return r2 && t5.push(r2.replace(/:merge\((.+?)\)/g, "$1")), t5.reduceRight((i3, n3) => n3 + "{" + i3 + "}", e3.d);
    }
  }
  function H4(e3, t5) {
    return e3.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r2, i3, n3) => t5(i3) + n3);
  }
  function Q3(e3, t5) {
    return e3.replace(/&/g, t5);
  }
  var $e = new Intl.Collator("en", { numeric: !0 });
  function Me(e3, t5) {
    for (var r2 = 0, i3 = e3.length; r2 < i3; ) {
      let n3 = i3 + r2 >> 1;
      0 >= Ne(e3[n3], t5) ? r2 = n3 + 1 : i3 = n3;
    }
    return i3;
  }
  function Ne(e3, t5) {
    let r2 = e3.p & S3.o;
    return r2 == (t5.p & S3.o) && (r2 == S3.b || r2 == S3.o) ? 0 : e3.p - t5.p || e3.o - t5.o || $e.compare(we(e3.n), we(t5.n)) || $e.compare(Ae(e3.n), Ae(t5.n));
  }
  function we(e3) {
    return (e3 || "").split(/:/).pop().split("/").pop() || "\0";
  }
  function Ae(e3) {
    return (e3 || "").replace(/\W/g, (t5) => String.fromCharCode(127 + t5.charCodeAt(0))) + "\0";
  }
  function X3(e3, t5) {
    return Math.round(parseInt(e3, 16) * t5);
  }
  function P4(e3, t5 = {}) {
    if (typeof e3 == "function")
      return e3(t5);
    let { opacityValue: r2 = "1", opacityVariable: i3 } = t5, n3 = i3 ? `var(${i3})` : r2;
    if (e3.includes("<alpha-value>"))
      return e3.replace("<alpha-value>", n3);
    if (e3[0] == "#" && (e3.length == 4 || e3.length == 7)) {
      let l5 = (e3.length - 1) / 3, o5 = [17, 1, 0.062272][l5 - 1];
      return `rgba(${[X3(e3.substr(1, l5), o5), X3(e3.substr(1 + l5, l5), o5), X3(e3.substr(1 + 2 * l5, l5), o5), n3]})`;
    }
    return n3 == "1" ? e3 : n3 == "0" ? "#0000" : e3.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${n3})`);
  }
  function de(e3, t5, r2, i3, n3 = []) {
    return function l5(o5, { n: s6, p: f7, r: a6 = [], i: c5 }, u5) {
      let p7 = [], g7 = "", y4 = 0, $4 = 0;
      for (let h4 in o5 || {}) {
        var A5, R6;
        let d4 = o5[h4];
        if (h4[0] == "@") {
          if (!d4)
            continue;
          if (h4[1] == "a") {
            p7.push(...ge(s6, f7, I2("" + d4), u5, f7, a6, c5, !0));
            continue;
          }
          if (h4[1] == "l") {
            for (let w5 of b2(d4))
              p7.push(...l5(w5, { n: s6, p: (A5 = S3[h4[7]], f7 & ~S3.o | A5), r: h4[7] == "d" ? [] : a6, i: c5 }, u5));
            continue;
          }
          if (h4[1] == "i") {
            p7.push(...b2(d4).map((w5) => ({ p: -1, o: 0, r: [], d: h4 + " " + w5 })));
            continue;
          }
          if (h4[1] == "k") {
            p7.push({ p: S3.d, o: 0, r: [h4], d: l5(d4, { p: S3.d }, u5).map(ne2).join("") });
            continue;
          }
          if (h4[1] == "f") {
            p7.push(...b2(d4).map((w5) => ({ p: S3.d, o: 0, r: [h4], d: l5(w5, { p: S3.d }, u5).map(ne2).join("") })));
            continue;
          }
        }
        if (typeof d4 != "object" || Array.isArray(d4))
          h4 == "label" && d4 ? s6 = d4 + T3(JSON.stringify([f7, c5, o5])) : (d4 || d4 === 0) && (h4 = h4.replace(/[A-Z]/g, (w5) => "-" + w5.toLowerCase()), $4 += 1, y4 = Math.max(y4, (R6 = h4)[0] == "-" ? 0 : Ee(R6) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(R6) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), g7 += (g7 ? ";" : "") + b2(d4).map((w5) => u5.s(h4, he("" + w5, u5.theme) + (c5 ? " !important" : ""))).join(";"));
        else if (h4[0] == "@" || h4.includes("&")) {
          let w5 = f7;
          h4[0] == "@" && (h4 = h4.replace(/\bscreen\(([^)]+)\)/g, (j6, M5) => {
            let N7 = u5.theme("screens", M5);
            return N7 ? (w5 |= 67108864, Ce(N7, "")) : j6;
          }), w5 |= re2(h4)), p7.push(...l5(d4, { n: s6, p: w5, r: [...a6, h4], i: c5 }, u5));
        } else
          p7.push(...l5(d4, { p: f7, r: [...a6, h4] }, u5));
      }
      return p7.unshift({ n: s6, p: f7, o: Math.max(0, 15 - $4) + 1.5 * Math.min(y4 || 15, 15), r: a6, d: g7 }), p7.sort(Ne);
    }(e3, ce3(t5, r2, i3, n3), r2);
  }
  function he(e3, t5) {
    return e3.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r2, i3, n3, l5, o5 = "") => {
      let s6 = t5(n3, o5);
      return typeof s6 == "function" && /color|fill|stroke/i.test(n3) ? P4(s6) : "" + b2(s6).filter((f7) => Object(f7) !== f7);
    });
  }
  function ye(e3, t5) {
    let r2, i3 = [];
    for (let n3 of e3)
      n3.d && n3.n ? r2?.p == n3.p && "" + r2.r == "" + n3.r ? (r2.c = [r2.c, n3.c].filter(Boolean).join(" "), r2.d = r2.d + ";" + n3.d) : i3.push(r2 = { ...n3, n: n3.n && t5 }) : i3.push({ ...n3, n: n3.n && t5 });
    return i3;
  }
  function W4(e3, t5, r2 = S3.u, i3, n3) {
    let l5 = [];
    for (let o5 of e3)
      for (let s6 of function(f7, a6, c5, u5, p7) {
        f7 = { ...f7, i: f7.i || p7 };
        let g7 = function(y4, $4) {
          let A5 = pe.get(y4.n);
          return A5 ? A5(y4, $4) : $4.r(y4.n, y4.v[0] == "dark");
        }(f7, a6);
        return g7 ? typeof g7 == "string" ? ({ r: u5, p: c5 } = ce3(f7, a6, c5, u5), ye(W4(I2(g7), a6, c5, u5, f7.i), f7.n)) : Array.isArray(g7) ? g7.map((y4) => {
          var $4, A5;
          return { o: 0, ...y4, r: [...b2(u5), ...b2(y4.r)], p: ($4 = c5, A5 = y4.p ?? c5, $4 & ~S3.o | A5) };
        }) : de(g7, f7, a6, c5, u5) : [{ c: ae3(f7), p: 0, o: 0, r: [] }];
      }(o5, t5, r2, i3, n3))
        l5.splice(Me(l5, s6), 0, s6);
    return l5;
  }
  function ge(e3, t5, r2, i3, n3, l5, o5, s6) {
    return ye((s6 ? r2.flatMap((f7) => W4([f7], i3, n3, l5, o5)) : W4(r2, i3, n3, l5, o5)).map((f7) => f7.p & S3.o && (f7.n || t5 == S3.b) ? { ...f7, p: f7.p & ~S3.o | t5, o: 0 } : f7), e3);
  }
  function _e2(e3, t5, r2, i3) {
    var n3;
    return n3 = (l5, o5) => {
      let { n: s6, p: f7, r: a6, i: c5 } = ce3(l5, o5, t5);
      return r2 && ge(s6, t5, r2, o5, f7, a6, c5, i3);
    }, pe.set(e3, n3), e3;
  }
  function K3(e3, t5, r2) {
    if (e3[e3.length - 1] != "(") {
      let i3 = [], n3 = !1, l5 = !1, o5 = "";
      for (let s6 of e3)
        if (!(s6 == "(" || /[~@]$/.test(s6))) {
          if (s6[0] == "!" && (s6 = s6.slice(1), n3 = !n3), s6.endsWith(":")) {
            i3[s6 == "dark:" ? "unshift" : "push"](s6.slice(0, -1));
            continue;
          }
          s6[0] == "-" && (s6 = s6.slice(1), l5 = !l5), s6.endsWith("-") && (s6 = s6.slice(0, -1)), s6 && s6 != "&" && (o5 += (o5 && "-") + s6);
        }
      o5 && (l5 && (o5 = "-" + o5), t5[0].push({ n: o5, v: i3.filter(Be), i: n3 }));
    }
  }
  function Be(e3, t5, r2) {
    return r2.indexOf(e3) == t5;
  }
  var Se = /* @__PURE__ */ new Map();
  function I2(e3) {
    let t5 = Se.get(e3);
    if (!t5) {
      let r2 = [], i3 = [[]], n3 = 0, l5 = 0, o5 = null, s6 = 0, f7 = (a6, c5 = 0) => {
        n3 != s6 && (r2.push(e3.slice(n3, s6 + c5)), a6 && K3(r2, i3)), n3 = s6 + 1;
      };
      for (; s6 < e3.length; s6++) {
        let a6 = e3[s6];
        if (l5)
          e3[s6 - 1] != "\\" && (l5 += +(a6 == "[") || -(a6 == "]"));
        else if (a6 == "[")
          l5 += 1;
        else if (o5)
          e3[s6 - 1] != "\\" && o5.test(e3.slice(s6)) && (o5 = null, n3 = s6 + RegExp.lastMatch.length);
        else if (a6 == "/" && e3[s6 - 1] != "\\" && (e3[s6 + 1] == "*" || e3[s6 + 1] == "/"))
          o5 = e3[s6 + 1] == "*" ? /^\*\// : /^[\r\n]/;
        else if (a6 == "(")
          f7(), r2.push(a6);
        else if (a6 == ":")
          e3[s6 + 1] != ":" && f7(!1, 1);
        else if (/[\s,)]/.test(a6)) {
          f7(!0);
          let c5 = r2.lastIndexOf("(");
          if (a6 == ")") {
            let u5 = r2[c5 - 1];
            if (/[~@]$/.test(u5)) {
              let p7 = i3.shift();
              r2.length = c5, K3([...r2, "#"], i3);
              let { v: g7 } = i3[0].pop();
              for (let y4 of p7)
                y4.v.splice(+(y4.v[0] == "dark") - +(g7[0] == "dark"), g7.length);
              K3([...r2, _e2(u5.length > 1 ? u5.slice(0, -1) + T3(JSON.stringify([u5, p7])) : u5 + "(" + ue2(p7) + ")", S3.a, p7, /@$/.test(u5))], i3);
            }
            c5 = r2.lastIndexOf("(", c5 - 1);
          }
          r2.length = c5 + 1;
        } else
          /[~@]/.test(a6) && e3[s6 + 1] == "(" && i3.unshift([]);
      }
      f7(!0), Se.set(e3, t5 = i3[0]);
    }
    return t5;
  }
  function Ve(e3, t5, r2) {
    return t5.reduce((i3, n3, l5) => i3 + r2(n3) + e3[l5 + 1], e3[0]);
  }
  function Z3(e3, t5) {
    return Array.isArray(e3) && Array.isArray(e3.raw) ? Ve(e3, t5, (r2) => ee2(r2).trim()) : t5.filter(Boolean).reduce((r2, i3) => r2 + ee2(i3), e3 ? ee2(e3) : "");
  }
  function ee2(e3) {
    let t5, r2 = "";
    if (e3 && typeof e3 == "object")
      if (Array.isArray(e3))
        (t5 = Z3(e3[0], e3.slice(1))) && (r2 += " " + t5);
      else
        for (let i3 in e3)
          e3[i3] && (r2 += " " + i3);
    else
      e3 != null && typeof e3 != "boolean" && (r2 += " " + e3);
    return r2;
  }
  var pt2 = ze("@"), dt2 = ze("~");
  function ze(e3) {
    return new Proxy(function(i3, ...n3) {
      return t5("", i3, n3);
    }, { get(r2, i3) {
      return i3 in r2 ? r2[i3] : function(l5, ...o5) {
        return t5(i3, l5, o5);
      };
    } });
    function t5(r2, i3, n3) {
      return ue2(I2(r2 + e3 + "(" + Z3(i3, n3) + ")"));
    }
  }
  function G4(e3, t5) {
    return Array.isArray(e3) ? ve(Ve(e3, t5, (r2) => r2 != null && typeof r2 != "boolean" ? r2 : "")) : typeof e3 == "string" ? ve(e3) : [e3];
  }
  var We = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
  function ve(e3) {
    let t5;
    e3 = e3.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
    let r2 = [{}], i3 = [r2[0]], n3 = [];
    for (; t5 = We.exec(e3); )
      t5[4] && (r2.shift(), n3.shift()), t5[3] ? (n3.unshift(t5[3]), r2.unshift({}), i3.push(n3.reduce((l5, o5) => ({ [o5]: l5 }), r2[0]))) : t5[4] || (r2[0][t5[1]] && (r2.unshift({}), i3.push(n3.reduce((l5, o5) => ({ [o5]: l5 }), r2[0]))), r2[0][t5[1]] = t5[2]);
    return i3;
  }
  function me(e3, ...t5) {
    var r2;
    let i3 = G4(e3, t5), n3 = (i3.find((l5) => l5.label)?.label || "css") + T3(JSON.stringify(i3));
    return r2 = (l5, o5) => ye(i3.flatMap((s6) => de(s6, l5, o5, S3.o)), n3), pe.set(n3, r2), n3;
  }
  var ht2 = new Proxy(function(e3, t5) {
    return Re("animation", e3, t5);
  }, { get(e3, t5) {
    return t5 in e3 ? e3[t5] : function(i3, n3) {
      return Re(t5, i3, n3);
    };
  } });
  function Re(e3, t5, r2) {
    return { toString() {
      return me({ label: e3, "@layer components": { ...typeof t5 == "object" ? t5 : { animation: t5 }, animationName: "" + r2 } });
    } };
  }
  function yt2(e3, t5, r2) {
    return [e3, ie(t5, r2)];
  }
  function ie(e3, t5) {
    return typeof e3 == "function" ? e3 : typeof e3 == "string" && /^[\w-]+$/.test(e3) ? (r2, i3) => ({ [e3]: t5 ? t5(r2, i3) : le2(r2, 1) }) : (r2) => e3 || { [r2[1]]: le2(r2, 2) };
  }
  function le2(e3, t5, r2 = e3.slice(t5).find(Boolean) || e3.$$ || e3.input) {
    return e3.input[0] == "-" ? `calc(${r2} * -1)` : r2;
  }
  function gt(e3, t5, r2, i3) {
    return [e3, Ge(t5, r2, i3)];
  }
  function Ge(e3, t5, r2) {
    let i3 = typeof t5 == "string" ? (n3, l5) => ({ [t5]: r2 ? r2(n3, l5) : n3._ }) : t5 || (({ 1: n3, _: l5 }, o5, s6) => ({ [n3 || s6]: l5 }));
    return (n3, l5) => {
      let o5 = ke(e3 || n3[1]), s6 = l5.theme(o5, n3.$$) ?? oe3(n3.$$, o5, l5);
      if (s6 != null)
        return n3._ = le2(n3, 0, s6), i3(n3, l5, o5);
    };
  }
  function mt2(e3, t5 = {}, r2) {
    return [e3, Ye(t5, r2)];
  }
  function Ye(e3 = {}, t5) {
    return (r2, i3) => {
      let { section: n3 = ke(r2[0]).replace("-", "") + "Color" } = e3, [l5, o5] = Ze(r2.$$);
      if (!l5)
        return;
      let s6 = i3.theme(n3, l5) || oe3(l5, n3, i3);
      if (!s6 || typeof s6 == "object")
        return;
      let { opacityVariable: f7 = `--tw-${r2[0].replace(/-$/, "")}-opacity`, opacitySection: a6 = n3.replace("Color", "Opacity"), property: c5 = n3, selector: u5 } = e3, p7 = i3.theme(a6, o5 || "DEFAULT") || o5 && oe3(o5, a6, i3), g7 = t5 || (({ _: $4 }) => {
        let A5 = He(c5, $4);
        return u5 ? { [u5]: A5 } : A5;
      });
      r2._ = { value: P4(s6, { opacityVariable: f7 || void 0, opacityValue: p7 || void 0 }), color: ($4) => P4(s6, $4), opacityVariable: f7 || void 0, opacityValue: p7 || void 0 };
      let y4 = g7(r2, i3);
      if (!r2.dark) {
        let $4 = i3.d(n3, l5, s6);
        $4 && $4 !== s6 && (r2._ = { value: P4($4, { opacityVariable: f7 || void 0, opacityValue: p7 || "1" }), color: (A5) => P4($4, A5), opacityVariable: f7 || void 0, opacityValue: p7 || void 0 }, y4 = { "&": y4, [i3.v("dark")]: g7(r2, i3) });
      }
      return y4;
    };
  }
  function Ze(e3) {
    return (e3.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/) || []).slice(1);
  }
  function He(e3, t5) {
    let r2 = {};
    return typeof t5 == "string" ? r2[e3] = t5 : (t5.opacityVariable && t5.value.includes(t5.opacityVariable) && (r2[t5.opacityVariable] = t5.opacityValue || "1"), r2[e3] = t5.value), r2;
  }
  function oe3(e3, t5, r2) {
    if (e3[0] == "[" && e3.slice(-1) == "]") {
      if (e3 = se(he(e3.slice(1, -1), r2.theme)), !t5)
        return e3;
      if (!(/color|fill|stroke/i.test(t5) && !(/^color:/.test(e3) || /^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e3)) || /image/i.test(t5) && !(/^image:/.test(e3) || /^[a-z-]+\(/.test(e3)) || /weight/i.test(t5) && !(/^(number|any):/.test(e3) || /^\d+$/.test(e3)) || /position/i.test(t5) && /^(length|size):/.test(e3)))
        return e3.replace(/^[a-z-]+:/, "");
    }
  }
  function ke(e3) {
    return e3.replace(/-./g, (t5) => t5[1].toUpperCase());
  }
  function se(e3) {
    return e3.includes("url(") ? e3.replace(/(.*?)(url\(.*?\))(.*?)/g, (t5, r2 = "", i3, n3 = "") => se(r2) + i3 + se(n3)) : e3.replace(/(^|[^\\])_+/g, (t5, r2) => r2 + " ".repeat(t5.length - r2.length)).replace(/\\_/g, "_").replace(/(calc|min|max|clamp)\(.+\)/g, (t5) => t5.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 "));
  }
  var Qe = Symbol();
  var D6 = new Proxy(F6, { apply(e3, t5, r2) {
    return B5(r2[0]);
  }, get(e3, t5) {
    let r2 = B5[t5];
    return typeof r2 == "function" ? function() {
      return r2.apply(B5, arguments);
    } : r2;
  } });
  var Rt = function e2(t5) {
    return new Proxy(function(i3, ...n3) {
      return xe2(t5, "", i3, n3);
    }, { get(r2, i3) {
      return i3 === "bind" ? e2 : i3 in r2 ? r2[i3] : function(l5, ...o5) {
        return xe2(t5, i3, l5, o5);
      };
    } });
  }();
  function xe2(e3, t5, r2, i3) {
    return { toString() {
      let n3 = G4(r2, i3), l5 = Y3(t5 + T3(JSON.stringify([t5, n3])));
      return (typeof e3 == "function" ? e3 : D6)(me({ [`@keyframes ${l5}`]: G4(r2, i3) })), l5;
    } };
  }

  // https://esm.sh/v106/@twind/preset-tailwind@1.0.1/deno/preset-tailwind.js
  var L4 = "inherit", U3 = "currentColor", j4 = "transparent", V4 = "#000", B6 = "#fff", H5 = { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a" }, I3 = { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827" }, M3 = { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b" }, P5 = { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717" }, N4 = { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917" }, G5 = { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d" }, q3 = { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12" }, Y4 = { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f" }, X4 = { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12" }, J2 = { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314" }, K4 = { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d" }, Q4 = { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b" }, Z4 = { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a" }, ee3 = { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63" }, te = { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e" }, oe4 = { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" }, re3 = { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81" }, ae4 = { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95" }, ie2 = { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87" }, ne3 = { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75" }, le3 = { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843" }, se2 = { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337" }, S4 = { __proto__: null, inherit: L4, current: U3, transparent: j4, black: V4, white: B6, slate: H5, gray: I3, zinc: M3, neutral: P5, stone: N4, red: G5, orange: q3, amber: Y4, yellow: X4, lime: J2, green: K4, emerald: Q4, teal: Z4, cyan: ee3, sky: te, blue: oe4, indigo: re3, violet: ae4, purple: ie2, fuchsia: ne3, pink: le3, rose: se2 }, h3 = { screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" }, colors: S4, columns: { auto: "auto", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem" }, spacing: { px: "1px", 0: "0px", ...c3(4, "rem", 4, 0.5, 0.5), ...c3(12, "rem", 4, 5), 14: "3.5rem", ...c3(64, "rem", 4, 16, 4), 72: "18rem", 80: "20rem", 96: "24rem" }, durations: { 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0,0,0.2,1) infinite", pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite", bounce: "bounce 1s infinite" }, aspectRatio: { auto: "auto", square: "1/1", video: "16/9" }, backdropBlur: n2("blur"), backdropBrightness: n2("brightness"), backdropContrast: n2("contrast"), backdropGrayscale: n2("grayscale"), backdropHueRotate: n2("hueRotate"), backdropInvert: n2("invert"), backdropOpacity: n2("opacity"), backdropSaturate: n2("saturate"), backdropSepia: n2("sepia"), backgroundColor: n2("colors"), backgroundImage: { none: "none" }, backgroundOpacity: n2("opacity"), backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { none: "none", 0: "0", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, brightness: { ...c3(200, "", 100, 0, 50), ...c3(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, borderColor: ({ theme: e3 }) => ({ DEFAULT: e3("colors.gray.200", "currentColor"), ...e3("colors") }), borderOpacity: n2("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", "1/2": "50%", full: "9999px" }, borderSpacing: n2("spacing"), borderWidth: { DEFAULT: "1px", ...f5(8, "px") }, boxShadow: { sm: "0 1px 2px 0 rgba(0,0,0,0.05)", DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)", md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)", lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)", xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)", "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)", inner: "inset 0 2px 4px 0 rgba(0,0,0,0.05)", none: "0 0 #0000" }, boxShadowColor: n2("colors"), caretColor: n2("colors"), accentColor: ({ theme: e3 }) => ({ auto: "auto", ...e3("colors") }), contrast: { ...c3(200, "", 100, 0, 50), 75: "0.75", 125: "1.25" }, content: { none: "none" }, divideColor: n2("borderColor"), divideOpacity: n2("borderOpacity"), divideWidth: n2("borderWidth"), dropShadow: { sm: "0 1px 1px rgba(0,0,0,0.05)", DEFAULT: ["0 1px 2px rgba(0,0,0,0.1)", "0 1px 1px rgba(0,0,0,0.06)"], md: ["0 4px 3px rgba(0,0,0,0.07)", "0 2px 2px rgba(0,0,0,0.06)"], lg: ["0 10px 8px rgba(0,0,0,0.04)", "0 4px 3px rgba(0,0,0,0.1)"], xl: ["0 20px 13px rgba(0,0,0,0.03)", "0 8px 5px rgba(0,0,0,0.08)"], "2xl": "0 25px 25px rgba(0,0,0,0.15)", none: "0 0 #0000" }, fill: n2("colors"), grayscale: { DEFAULT: "100%", 0: "0" }, hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg" }, invert: { DEFAULT: "100%", 0: "0" }, flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: e3 }) => ({ ...e3("spacing"), ...x3(2, 6), ...x3(12, 12), auto: "auto", full: "100%" }), flexGrow: { DEFAULT: 1, 0: 0 }, flexShrink: { DEFAULT: 1, 0: 0 }, fontFamily: { sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","), serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","), mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",") }, fontSize: { xs: ["0.75rem", "1rem"], sm: ["0.875rem", "1.25rem"], base: ["1rem", "1.5rem"], lg: ["1.125rem", "1.75rem"], xl: ["1.25rem", "1.75rem"], "2xl": ["1.5rem", "2rem"], "3xl": ["1.875rem", "2.25rem"], "4xl": ["2.25rem", "2.5rem"], "5xl": ["3rem", "1"], "6xl": ["3.75rem", "1"], "7xl": ["4.5rem", "1"], "8xl": ["6rem", "1"], "9xl": ["8rem", "1"] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: n2("spacing"), gradientColorStops: n2("colors"), gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridColumn: { auto: "auto", "span-full": "1 / -1" }, gridRow: { auto: "auto", "span-full": "1 / -1" }, gridTemplateColumns: { none: "none" }, gridTemplateRows: { none: "none" }, height: ({ theme: e3 }) => ({ ...e3("spacing"), ...x3(2, 6), min: "min-content", max: "max-content", fit: "fit-content", auto: "auto", full: "100%", screen: "100vh" }), inset: ({ theme: e3 }) => ({ ...e3("spacing"), ...x3(2, 4), auto: "auto", full: "100%" }), keyframes: { spin: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } }, ping: { "0%": { transform: "scale(1)", opacity: "1" }, "75%,100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { ...c3(10, "rem", 4, 3), none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2" }, margin: ({ theme: e3 }) => ({ auto: "auto", ...e3("spacing") }), maxHeight: ({ theme: e3 }) => ({ full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh", ...e3("spacing") }), maxWidth: ({ theme: e3, breakpoints: r2 }) => ({ ...r2(e3("screens")), none: "none", 0: "0rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch" }), minHeight: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh" }, minWidth: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content" }, opacity: { ...c3(100, "", 100, 0, 10), 5: "0.05", 25: "0.25", 75: "0.75", 95: "0.95" }, order: { first: "-9999", last: "9999", none: "0" }, padding: n2("spacing"), placeholderColor: n2("colors"), placeholderOpacity: n2("opacity"), outlineColor: n2("colors"), outlineOffset: f5(8, "px"), outlineWidth: f5(8, "px"), ringColor: ({ theme: e3 }) => ({ ...e3("colors"), DEFAULT: e3("colors.blue.500", "#3b82f6") }), ringOffsetColor: n2("colors"), ringOffsetWidth: f5(8, "px"), ringOpacity: ({ theme: e3 }) => ({ ...e3("opacity"), DEFAULT: "0.5" }), ringWidth: { DEFAULT: "3px", ...f5(8, "px") }, rotate: { ...f5(2, "deg"), ...f5(12, "deg", 3), ...f5(180, "deg", 45) }, saturate: c3(200, "", 100, 0, 50), scale: { ...c3(150, "", 100, 0, 50), ...c3(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, scrollMargin: n2("spacing"), scrollPadding: n2("spacing"), sepia: { 0: "0", DEFAULT: "100%" }, skew: { ...f5(2, "deg"), ...f5(12, "deg", 3) }, space: n2("spacing"), stroke: n2("colors"), strokeWidth: c3(2), textColor: n2("colors"), textDecorationColor: n2("colors"), textDecorationThickness: { "from-font": "from-font", auto: "auto", ...f5(8, "px") }, textUnderlineOffset: { auto: "auto", ...f5(8, "px") }, textIndent: n2("spacing"), textOpacity: n2("opacity"), transitionDuration: ({ theme: e3 }) => ({ ...e3("durations"), DEFAULT: "150ms" }), transitionDelay: n2("durations"), transitionProperty: { none: "none", all: "all", DEFAULT: "color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter", colors: "color,background-color,border-color,text-decoration-color,fill,stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4,0,0.2,1)", linear: "linear", in: "cubic-bezier(0.4,0,1,1)", out: "cubic-bezier(0,0,0.2,1)", "in-out": "cubic-bezier(0.4,0,0.2,1)" }, translate: ({ theme: e3 }) => ({ ...e3("spacing"), ...x3(2, 4), full: "100%" }), width: ({ theme: e3 }) => ({ min: "min-content", max: "max-content", fit: "fit-content", screen: "100vw", ...e3("flexBasis") }), willChange: { scroll: "scroll-position" }, zIndex: { ...c3(50, "", 1, 0, 10), auto: "auto" } };
  function x3(e3, r2) {
    let a6 = {};
    do
      for (var i3 = 1; i3 < e3; i3++)
        a6[`${i3}/${e3}`] = Number((i3 / e3 * 100).toFixed(6)) + "%";
    while (++e3 <= r2);
    return a6;
  }
  function f5(e3, r2, a6 = 0) {
    let i3 = {};
    for (; a6 <= e3; a6 = 2 * a6 || 1)
      i3[a6] = a6 + r2;
    return i3;
  }
  function c3(e3, r2 = "", a6 = 1, i3 = 0, l5 = 1, d4 = {}) {
    for (; i3 <= e3; i3 += l5)
      d4[i3] = i3 / a6 + r2;
    return d4;
  }
  function n2(e3) {
    return ({ theme: r2 }) => r2(e3);
  }
  var C3 = { "*,::before,::after": { boxSizing: "border-box", borderWidth: "0", borderStyle: "solid", borderColor: "theme(borderColor.DEFAULT, currentColor)" }, "::before,::after": { "--tw-content": "''" }, html: { lineHeight: 1.5, WebkitTextSizeAdjust: "100%", MozTabSize: "4", tabSize: 4, fontFamily: `theme(fontFamily.sans, ${h3.fontFamily.sans})` }, body: { margin: "0", lineHeight: "inherit" }, hr: { height: "0", color: "inherit", borderTopWidth: "1px" }, "abbr:where([title])": { textDecoration: "underline dotted" }, "h1,h2,h3,h4,h5,h6": { fontSize: "inherit", fontWeight: "inherit" }, a: { color: "inherit", textDecoration: "inherit" }, "b,strong": { fontWeight: "bolder" }, "code,kbd,samp,pre": { fontFamily: `theme(fontFamily.mono, ${h3.fontFamily.mono})`, fontSize: "1em" }, small: { fontSize: "80%" }, "sub,sup": { fontSize: "75%", lineHeight: 0, position: "relative", verticalAlign: "baseline" }, sub: { bottom: "-0.25em" }, sup: { top: "-0.5em" }, table: { textIndent: "0", borderColor: "inherit", borderCollapse: "collapse" }, "button,input,optgroup,select,textarea": { fontFamily: "inherit", fontSize: "100%", lineHeight: "inherit", color: "inherit", margin: "0", padding: "0" }, "button,select": { textTransform: "none" }, "button,[type='button'],[type='reset'],[type='submit']": { WebkitAppearance: "button", backgroundColor: "transparent", backgroundImage: "none" }, ":-moz-focusring": { outline: "auto" }, ":-moz-ui-invalid": { boxShadow: "none" }, progress: { verticalAlign: "baseline" }, "::-webkit-inner-spin-button,::-webkit-outer-spin-button": { height: "auto" }, "[type='search']": { WebkitAppearance: "textfield", outlineOffset: "-2px" }, "::-webkit-search-decoration": { WebkitAppearance: "none" }, "::-webkit-file-upload-button": { WebkitAppearance: "button", font: "inherit" }, summary: { display: "list-item" }, "blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre": { margin: "0" }, fieldset: { margin: "0", padding: "0" }, legend: { padding: "0" }, "ol,ul,menu": { listStyle: "none", margin: "0", padding: "0" }, textarea: { resize: "vertical" }, "input::placeholder,textarea::placeholder": { opacity: 1, color: "theme(colors.gray.400, #9ca3af)" }, 'button,[role="button"]': { cursor: "pointer" }, ":disabled": { cursor: "default" }, "img,svg,video,canvas,audio,iframe,embed,object": { display: "block", verticalAlign: "middle" }, "img,video": { maxWidth: "100%", height: "auto" }, "[hidden]": { display: "none" } }, O2 = [yt2("\\[([-\\w]+):(.+)]", ({ 1: e3, 2: r2 }, a6) => ({ "@layer overrides": { "&": { [e3]: oe3(`[${r2}]`, e3, a6) } } })), yt2("(group|peer)(~[^-[]+)?", ({ input: e3 }, { h: r2 }) => [{ c: r2(e3) }]), gt("aspect-", "aspectRatio"), yt2("container", (e3, { theme: r2 }) => {
    let { screens: a6 = r2("screens"), center: i3, padding: l5 } = r2("container"), d4 = { width: "100%", marginRight: i3 && "auto", marginLeft: i3 && "auto", ...m6("xs") };
    for (let w5 in a6) {
      let b4 = a6[w5];
      typeof b4 == "string" && (d4[Ce(b4)] = { "&": { maxWidth: b4, ...m6(w5) } });
    }
    return d4;
    function m6(w5) {
      let b4 = l5 && (typeof l5 == "string" ? l5 : l5[w5] || l5.DEFAULT);
      if (b4)
        return { paddingRight: b4, paddingLeft: b4 };
    }
  }), gt("content-", "content", ({ _: e3 }) => ({ "--tw-content": e3, content: "var(--tw-content)" })), yt2("(?:box-)?decoration-(slice|clone)", "boxDecorationBreak"), yt2("box-(border|content)", "boxSizing", ({ 1: e3 }) => e3 + "-box"), yt2("hidden", { display: "none" }), yt2("table-(auto|fixed)", "tableLayout"), yt2(["(block|flex|table|grid|inline|contents|flow-root|list-item)", "(inline-(block|flex|table|grid))", "(table-(caption|cell|column|row|(column|row|footer|header)-group))"], "display"), "(float)-(left|right|none)", "(clear)-(left|right|none|both)", "(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)", "(isolation)-(auto)", yt2("isolate", "isolation"), yt2("object-(contain|cover|fill|none|scale-down)", "objectFit"), gt("object-", "objectPosition"), yt2("object-(top|bottom|center|(left|right)(-(top|bottom))?)", "objectPosition", y3), yt2("overscroll(-[xy])?-(auto|contain|none)", ({ 1: e3 = "", 2: r2 }) => ({ ["overscroll-behavior" + e3]: r2 })), yt2("(static|fixed|absolute|relative|sticky)", "position"), gt("-?inset(-[xy])?(?:$|-)", "inset", ({ 1: e3, _: r2 }) => ({ top: e3 != "-x" && r2, right: e3 != "-y" && r2, bottom: e3 != "-x" && r2, left: e3 != "-y" && r2 })), gt("-?(top|bottom|left|right)(?:$|-)", "inset"), yt2("visible", "visibility"), yt2("invisible", { visibility: "hidden" }), gt("-?z-", "zIndex"), yt2("flex-((row|col)(-reverse)?)", "flexDirection", F7), yt2("flex-(wrap|wrap-reverse|nowrap)", "flexWrap"), gt("(flex-(?:grow|shrink))(?:$|-)"), gt("(flex)-"), gt("grow(?:$|-)", "flexGrow"), gt("shrink(?:$|-)", "flexShrink"), gt("basis-", "flexBasis"), gt("-?(order)-"), "-?(order)-(\\d+)", gt("grid-cols-", "gridTemplateColumns"), yt2("grid-cols-(\\d+)", "gridTemplateColumns", D7), gt("col-", "gridColumn"), yt2("col-(span)-(\\d+)", "gridColumn", W5), gt("col-start-", "gridColumnStart"), yt2("col-start-(auto|\\d+)", "gridColumnStart"), gt("col-end-", "gridColumnEnd"), yt2("col-end-(auto|\\d+)", "gridColumnEnd"), gt("grid-rows-", "gridTemplateRows"), yt2("grid-rows-(\\d+)", "gridTemplateRows", D7), gt("row-", "gridRow"), yt2("row-(span)-(\\d+)", "gridRow", W5), gt("row-start-", "gridRowStart"), yt2("row-start-(auto|\\d+)", "gridRowStart"), gt("row-end-", "gridRowEnd"), yt2("row-end-(auto|\\d+)", "gridRowEnd"), yt2("grid-flow-((row|col)(-dense)?)", "gridAutoFlow", (e3) => y3(F7(e3))), yt2("grid-flow-(dense)", "gridAutoFlow"), gt("auto-cols-", "gridAutoColumns"), gt("auto-rows-", "gridAutoRows"), gt("gap-x(?:$|-)", "gap", "columnGap"), gt("gap-y(?:$|-)", "gap", "rowGap"), gt("gap(?:$|-)", "gap"), "(justify-(?:items|self))-", yt2("justify-", "justifyContent", T4), yt2("(content|items|self)-", (e3) => ({ ["align-" + e3[1]]: T4(e3) })), yt2("(place-(content|items|self))-", ({ 1: e3, $$: r2 }) => ({ [e3]: ("wun".includes(r2[3]) ? "space-" : "") + r2 })), gt("p([xytrbl])?(?:$|-)", "padding", u3("padding")), gt("-?m([xytrbl])?(?:$|-)", "margin", u3("margin")), gt("-?space-(x|y)(?:$|-)", "space", ({ 1: e3, _: r2 }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${e3}-reverse`]: "0", ["margin-" + { y: "top", x: "left" }[e3]]: `calc(${r2} * calc(1 - var(--tw-space-${e3}-reverse)))`, ["margin-" + { y: "bottom", x: "right" }[e3]]: `calc(${r2} * var(--tw-space-${e3}-reverse))` } })), yt2("space-(x|y)-reverse", ({ 1: e3 }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${e3}-reverse`]: "1" } })), gt("w-", "width"), gt("min-w-", "minWidth"), gt("max-w-", "maxWidth"), gt("h-", "height"), gt("min-h-", "minHeight"), gt("max-h-", "maxHeight"), gt("font-", "fontWeight"), gt("font-", "fontFamily", "fontFamily", p3), yt2("antialiased", { WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }), yt2("subpixel-antialiased", { WebkitFontSmoothing: "auto", MozOsxFontSmoothing: "auto" }), yt2("italic", "fontStyle"), yt2("not-italic", { fontStyle: "normal" }), yt2("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)", ({ 1: e3, 2: r2 = "", 3: a6 }) => r2 == "normal" ? { fontVariantNumeric: "normal" } : { ["--tw-" + (a6 ? "numeric-fraction" : "pt".includes(r2[0]) ? "numeric-spacing" : r2 ? "numeric-figure" : e3)]: e3, fontVariantNumeric: "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ordinal": "var(--tw-empty,/*!*/ /*!*/)", "--tw-slashed-zero": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-figure": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-spacing": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-fraction": "var(--tw-empty,/*!*/ /*!*/)" } } }), gt("tracking-", "letterSpacing"), gt("leading-", "lineHeight"), yt2("list-(inside|outside)", "listStylePosition"), gt("list-", "listStyleType"), yt2("list-", "listStyleType"), gt("placeholder-opacity-", "placeholderOpacity", ({ _: e3 }) => ({ "&::placeholder": { "--tw-placeholder-opacity": e3 } })), mt2("placeholder-", { property: "color", selector: "&::placeholder" }), yt2("text-(left|center|right|justify|start|end)", "textAlign"), yt2("text-(ellipsis|clip)", "textOverflow"), gt("text-opacity-", "textOpacity", "--tw-text-opacity"), mt2("text-", { property: "color" }), gt("text-", "fontSize", ({ _: e3 }) => typeof e3 == "string" ? { fontSize: e3 } : { fontSize: e3[0], ...typeof e3[1] == "string" ? { lineHeight: e3[1] } : e3[1] }), gt("indent-", "textIndent"), yt2("(overline|underline|line-through)", "textDecorationLine"), yt2("no-underline", { textDecorationLine: "none" }), gt("underline-offset-", "textUnderlineOffset"), mt2("decoration-", { section: "textDecorationColor", opacityVariable: !1, opacitySection: "opacity" }), gt("decoration-", "textDecorationThickness"), yt2("decoration-", "textDecorationStyle"), yt2("(uppercase|lowercase|capitalize)", "textTransform"), yt2("normal-case", { textTransform: "none" }), yt2("truncate", { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }), yt2("align-", "verticalAlign"), yt2("whitespace-", "whiteSpace"), yt2("break-normal", { wordBreak: "normal", overflowWrap: "normal" }), yt2("break-words", { overflowWrap: "break-word" }), yt2("break-all", { wordBreak: "break-all" }), mt2("caret-", { opacityVariable: !1, opacitySection: "opacity" }), mt2("accent-", { opacityVariable: !1, opacitySection: "opacity" }), yt2("bg-gradient-to-([trbl]|[tb][rl])", "backgroundImage", ({ 1: e3 }) => `linear-gradient(to ${g4(e3, " ")},var(--tw-gradient-stops))`), mt2("from-", { section: "gradientColorStops", opacityVariable: !1, opacitySection: "opacity" }, ({ _: e3 }) => ({ "--tw-gradient-from": e3.value, "--tw-gradient-to": e3.color({ opacityValue: "0" }), "--tw-gradient-stops": "var(--tw-gradient-from),var(--tw-gradient-to)" })), mt2("via-", { section: "gradientColorStops", opacityVariable: !1, opacitySection: "opacity" }, ({ _: e3 }) => ({ "--tw-gradient-to": e3.color({ opacityValue: "0" }), "--tw-gradient-stops": `var(--tw-gradient-from),${e3.value},var(--tw-gradient-to)` })), mt2("to-", { section: "gradientColorStops", property: "--tw-gradient-to", opacityVariable: !1, opacitySection: "opacity" }), yt2("bg-(fixed|local|scroll)", "backgroundAttachment"), yt2("bg-origin-(border|padding|content)", "backgroundOrigin", ({ 1: e3 }) => e3 + "-box"), yt2(["bg-(no-repeat|repeat(-[xy])?)", "bg-repeat-(round|space)"], "backgroundRepeat"), yt2("bg-blend-", "backgroundBlendMode"), yt2("bg-clip-(border|padding|content|text)", "backgroundClip", ({ 1: e3 }) => e3 + (e3 == "text" ? "" : "-box")), gt("bg-opacity-", "backgroundOpacity", "--tw-bg-opacity"), mt2("bg-", { section: "backgroundColor" }), gt("bg-", "backgroundImage"), gt("bg-", "backgroundPosition"), yt2("bg-(top|bottom|center|(left|right)(-(top|bottom))?)", "backgroundPosition", y3), gt("bg-", "backgroundSize"), gt("rounded(?:$|-)", "borderRadius"), gt("rounded-([trbl]|[tb][rl])(?:$|-)", "borderRadius", ({ 1: e3, _: r2 }) => {
    let a6 = { t: ["tl", "tr"], r: ["tr", "br"], b: ["bl", "br"], l: ["bl", "tl"] }[e3] || [e3, e3];
    return { [`border-${g4(a6[0])}-radius`]: r2, [`border-${g4(a6[1])}-radius`]: r2 };
  }), yt2("border-(collapse|separate)", "borderCollapse"), gt("border-opacity(?:$|-)", "borderOpacity", "--tw-border-opacity"), yt2("border-(solid|dashed|dotted|double|none)", "borderStyle"), gt("border-spacing(-[xy])?(?:$|-)", "borderSpacing", ({ 1: e3, _: r2 }) => ({ "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-border-spacing-x": 0, "--tw-border-spacing-y": 0 } }, ["--tw-border-spacing" + (e3 || "-x")]: r2, ["--tw-border-spacing" + (e3 || "-y")]: r2, "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)" })), mt2("border-([xytrbl])-", { section: "borderColor" }, u3("border", "Color")), mt2("border-"), gt("border-([xytrbl])(?:$|-)", "borderWidth", u3("border", "Width")), gt("border(?:$|-)", "borderWidth"), gt("divide-opacity(?:$|-)", "divideOpacity", ({ _: e3 }) => ({ "&>:not([hidden])~:not([hidden])": { "--tw-divide-opacity": e3 } })), yt2("divide-(solid|dashed|dotted|double|none)", ({ 1: e3 }) => ({ "&>:not([hidden])~:not([hidden])": { borderStyle: e3 } })), yt2("divide-([xy]-reverse)", ({ 1: e3 }) => ({ "&>:not([hidden])~:not([hidden])": { ["--tw-divide-" + e3]: "1" } })), gt("divide-([xy])(?:$|-)", "divideWidth", ({ 1: e3, _: r2 }) => {
    let a6 = { x: "lr", y: "tb" }[e3];
    return { "&>:not([hidden])~:not([hidden])": { [`--tw-divide-${e3}-reverse`]: "0", [`border-${g4(a6[0])}Width`]: `calc(${r2} * calc(1 - var(--tw-divide-${e3}-reverse)))`, [`border-${g4(a6[1])}Width`]: `calc(${r2} * var(--tw-divide-${e3}-reverse))` } };
  }), mt2("divide-", { property: "borderColor", selector: "&>:not([hidden])~:not([hidden])" }), gt("ring-opacity(?:$|-)", "ringOpacity", "--tw-ring-opacity"), mt2("ring-offset-", { property: "--tw-ring-offset-color", opacityVariable: !1 }), gt("ring-offset(?:$|-)", "ringOffsetWidth", "--tw-ring-offset-width"), yt2("ring-inset", { "--tw-ring-inset": "inset" }), mt2("ring-", { property: "--tw-ring-color" }), gt("ring(?:$|-)", "ringWidth", ({ _: e3 }, { theme: r2 }) => ({ "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)", "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${e3} + var(--tw-ring-offset-width)) var(--tw-ring-color)`, boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000", "&": { "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)", "--tw-ring-offset-width": r2("ringOffsetWidth", "", "0px"), "--tw-ring-offset-color": P4(r2("ringOffsetColor", "", "#fff")), "--tw-ring-color": P4(r2("ringColor", "", "#93c5fd"), { opacityVariable: "--tw-ring-opacity" }), "--tw-ring-opacity": r2("ringOpacity", "", "0.5") } } } })), mt2("shadow-", { section: "boxShadowColor", opacityVariable: !1, opacitySection: "opacity" }, ({ _: e3 }) => ({ "--tw-shadow-color": e3.value, "--tw-shadow": "var(--tw-shadow-colored)" })), gt("shadow(?:$|-)", "boxShadow", ({ _: e3 }) => ({ "--tw-shadow": p3(e3), "--tw-shadow-colored": p3(e3).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g, "$1var(--tw-shadow-color)$2"), boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000" } } })), gt("(opacity)-"), yt2("mix-blend-", "mixBlendMode"), ...A3(), ...A3("backdrop-"), gt("transition(?:$|-)", "transitionProperty", (e3, { theme: r2 }) => ({ transitionProperty: p3(e3), transitionTimingFunction: e3._ == "none" ? void 0 : p3(r2("transitionTimingFunction", "")), transitionDuration: e3._ == "none" ? void 0 : p3(r2("transitionDuration", "")) })), gt("duration(?:$|-)", "transitionDuration", "transitionDuration", p3), gt("ease(?:$|-)", "transitionTimingFunction", "transitionTimingFunction", p3), gt("delay(?:$|-)", "transitionDelay", "transitionDelay", p3), gt("animate(?:$|-)", "animation", (e3, { theme: r2, h: a6 }) => {
    let i3 = p3(e3), l5 = i3.split(" "), d4 = r2("keyframes", l5[0]);
    return d4 ? { ["@keyframes " + (l5[0] = a6(l5[0]))]: d4, animation: l5.join(" ") } : { animation: i3 };
  }), "(transform)-(none)", yt2("transform", $2), yt2("transform-(cpu|gpu)", ({ 1: e3 }) => ({ "--tw-transform": E(e3 == "gpu") })), gt("scale(-[xy])?-", "scale", ({ 1: e3, _: r2 }) => ({ ["--tw-scale" + (e3 || "-x")]: r2, ["--tw-scale" + (e3 || "-y")]: r2, ...$2() })), gt("-?(rotate)-", "rotate", k3), gt("-?(translate-[xy])-", "translate", k3), gt("-?(skew-[xy])-", "skew", k3), yt2("origin-(center|((top|bottom)(-(left|right))?)|left|right)", "transformOrigin", y3), "(appearance)-", gt("(columns)-"), "(columns)-(\\d+)", "(break-(?:before|after|inside))-", gt("(cursor)-"), "(cursor)-", yt2("snap-(none)", "scroll-snap-type"), yt2("snap-(x|y|both)", ({ 1: e3 }) => ({ "scroll-snap-type": e3 + " var(--tw-scroll-snap-strictness)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-scroll-snap-strictness": "proximity" } } })), yt2("snap-(mandatory|proximity)", "--tw-scroll-snap-strictness"), yt2("snap-(?:(start|end|center)|align-(none))", "scroll-snap-align"), yt2("snap-(normal|always)", "scroll-snap-stop"), yt2("scroll-(auto|smooth)", "scroll-behavior"), gt("scroll-p([xytrbl])?(?:$|-)", "padding", u3("scroll-padding")), gt("-?scroll-m([xytrbl])?(?:$|-)", "scroll-margin", u3("scroll-margin")), yt2("touch-(auto|none|manipulation)", "touch-action"), yt2("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))", ({ 1: e3, 2: r2, 3: a6 }) => ({ [`--tw-${r2 ? "pan-x" : a6 ? "pan-y" : e3}`]: e3, "touch-action": "var(--tw-touch-action)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-pan-x": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pan-y": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pinch-zoom": "var(--tw-empty,/*!*/ /*!*/)", "--tw-touch-action": "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)" } } })), yt2("outline-none", { outline: "2px solid transparent", "outline-offset": "2px" }), yt2("outline", { outlineStyle: "solid" }), yt2("outline-(dashed|dotted|double|hidden)", "outlineStyle"), gt("(outline-offset)-"), mt2("outline-", { opacityVariable: !1, opacitySection: "opacity" }), gt("outline-", "outlineWidth"), "(pointer-events)-", gt("(will-change)-"), "(will-change)-", ["resize(?:-(none|x|y))?", "resize", ({ 1: e3 }) => ({ x: "horizontal", y: "vertical" })[e3] || e3 || "both"], yt2("select-(none|text|all|auto)", "userSelect"), mt2("fill-", { section: "fill", opacityVariable: !1, opacitySection: "opacity" }), mt2("stroke-", { section: "stroke", opacityVariable: !1, opacitySection: "opacity" }), gt("stroke-", "strokeWidth"), yt2("sr-only", { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", whiteSpace: "nowrap", clip: "rect(0,0,0,0)", borderWidth: "0" }), yt2("not-sr-only", { position: "static", width: "auto", height: "auto", padding: "0", margin: "0", overflow: "visible", whiteSpace: "normal", clip: "auto" })];
  function y3(e3) {
    return (typeof e3 == "string" ? e3 : e3[1]).replace(/-/g, " ").trim();
  }
  function F7(e3) {
    return (typeof e3 == "string" ? e3 : e3[1]).replace("col", "column");
  }
  function g4(e3, r2 = "-") {
    let a6 = [];
    for (let i3 of e3)
      a6.push({ t: "top", r: "right", b: "bottom", l: "left" }[i3]);
    return a6.join(r2);
  }
  function p3(e3) {
    return e3 && "" + (e3._ || e3);
  }
  function T4({ $$: e3 }) {
    return ({ r: "flex-", "": "flex-", w: "space-", u: "space-", n: "space-" }[e3[3] || ""] || "") + e3;
  }
  function u3(e3, r2 = "") {
    return ({ 1: a6, _: i3 }) => {
      let l5 = { x: "lr", y: "tb" }[a6] || a6 + a6;
      return l5 ? { ...He(e3 + "-" + g4(l5[0]) + r2, i3), ...He(e3 + "-" + g4(l5[1]) + r2, i3) } : He(e3 + r2, i3);
    };
  }
  function A3(e3 = "") {
    let r2 = ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", e3 && "opacity", "saturate", "sepia", !e3 && "drop-shadow"].filter(Boolean), a6 = {};
    for (let i3 of r2)
      a6[`--tw-${e3}${i3}`] = "var(--tw-empty,/*!*/ /*!*/)";
    return a6 = { [`${e3}filter`]: r2.map((i3) => `var(--tw-${e3}${i3})`).join(" "), "@layer defaults": { "*,::before,::after,::backdrop": a6 } }, [`(${e3}filter)-(none)`, yt2(`${e3}filter`, a6), ...r2.map((i3) => gt(`${i3[0] == "h" ? "-?" : ""}(${e3}${i3})(?:$|-)`, i3, ({ 1: l5, _: d4 }) => ({ [`--tw-${l5}`]: b2(d4).map((m6) => `${i3}(${m6})`).join(" "), ...a6 })))];
  }
  function k3({ 1: e3, _: r2 }) {
    return { ["--tw-" + e3]: r2, ...$2() };
  }
  function $2() {
    return { transform: "var(--tw-transform)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-translate-x": "0", "--tw-translate-y": "0", "--tw-rotate": "0", "--tw-skew-x": "0", "--tw-skew-y": "0", "--tw-scale-x": "1", "--tw-scale-y": "1", "--tw-transform": E() } } };
  }
  function E(e3) {
    return [e3 ? "translate3d(var(--tw-translate-x),var(--tw-translate-y),0)" : "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))", "rotate(var(--tw-rotate))", "skewX(var(--tw-skew-x))", "skewY(var(--tw-skew-y))", "scaleX(var(--tw-scale-x))", "scaleY(var(--tw-scale-y))"].join(" ");
  }
  function W5({ 1: e3, 2: r2 }) {
    return `${e3} ${r2} / ${e3} ${r2}`;
  }
  function D7({ 1: e3 }) {
    return `repeat(${e3},minmax(0,1fr))`;
  }

  // https://esm.sh/v106/notie@4.3.1/deno/notie.js
  var Me2 = Object.create, xe3 = Object.defineProperty, He2 = Object.getOwnPropertyDescriptor, Se2 = Object.getOwnPropertyNames, we2 = Object.getPrototypeOf, Oe = Object.prototype.hasOwnProperty, Ae2 = (y4, o5) => () => (o5 || y4((o5 = { exports: {} }).exports, o5), o5.exports), De = (y4, o5, v3, b4) => {
    if (o5 && typeof o5 == "object" || typeof o5 == "function")
      for (let m6 of Se2(o5))
        !Oe.call(y4, m6) && m6 !== v3 && xe3(y4, m6, { get: () => o5[m6], enumerable: !(b4 = He2(o5, m6)) || b4.enumerable });
    return y4;
  }, Ie = (y4, o5, v3) => (v3 = y4 != null ? Me2(we2(y4)) : {}, De(o5 || !y4 || !y4.__esModule ? xe3(v3, "default", { value: y4, enumerable: !0 }) : v3, y4)), ye2 = Ae2((ie4, pe2) => {
    (function(y4, o5) {
      typeof ie4 == "object" && typeof pe2 == "object" ? pe2.exports = o5() : typeof define == "function" && define.amd ? define([], o5) : typeof ie4 == "object" ? ie4.notie = o5() : y4.notie = o5();
    })(ie4, function() {
      return function(y4) {
        function o5(b4) {
          if (v3[b4])
            return v3[b4].exports;
          var m6 = v3[b4] = { i: b4, l: !1, exports: {} };
          return y4[b4].call(m6.exports, m6, m6.exports, o5), m6.l = !0, m6.exports;
        }
        var v3 = {};
        return o5.m = y4, o5.c = v3, o5.i = function(b4) {
          return b4;
        }, o5.d = function(b4, m6, ce4) {
          o5.o(b4, m6) || Object.defineProperty(b4, m6, { configurable: !1, enumerable: !0, get: ce4 });
        }, o5.n = function(b4) {
          var m6 = b4 && b4.__esModule ? function() {
            return b4.default;
          } : function() {
            return b4;
          };
          return o5.d(m6, "a", m6), m6;
        }, o5.o = function(b4, m6) {
          return Object.prototype.hasOwnProperty.call(b4, m6);
        }, o5.p = "", o5(o5.s = 1);
      }([function(y4, o5) {
        y4.exports = function(v3) {
          return v3.webpackPolyfill || (v3.deprecate = function() {
          }, v3.paths = [], v3.children || (v3.children = []), Object.defineProperty(v3, "loaded", { enumerable: !0, get: function() {
            return v3.l;
          } }), Object.defineProperty(v3, "id", { enumerable: !0, get: function() {
            return v3.i;
          } }), v3.webpackPolyfill = 1), v3;
        };
      }, function(y4, o5, v3) {
        "use strict";
        (function(b4) {
          var m6, ce4, re4, V6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A5) {
            return typeof A5;
          } : function(A5) {
            return A5 && typeof Symbol == "function" && A5.constructor === Symbol && A5 !== Symbol.prototype ? "symbol" : typeof A5;
          };
          (function(A5, u5) {
            V6(o5) === "object" && V6(b4) === "object" ? b4.exports = u5() : (ce4 = [], m6 = u5, re4 = typeof m6 == "function" ? m6.apply(o5, ce4) : m6, re4 !== void 0 && (b4.exports = re4));
          })(void 0, function() {
            return function(A5) {
              function u5(g7) {
                if (X6[g7])
                  return X6[g7].exports;
                var T6 = X6[g7] = { i: g7, l: !1, exports: {} };
                return A5[g7].call(T6.exports, T6, T6.exports, u5), T6.l = !0, T6.exports;
              }
              var X6 = {};
              return u5.m = A5, u5.c = X6, u5.i = function(g7) {
                return g7;
              }, u5.d = function(g7, T6, B8) {
                u5.o(g7, T6) || Object.defineProperty(g7, T6, { configurable: !1, enumerable: !0, get: B8 });
              }, u5.n = function(g7) {
                var T6 = g7 && g7.__esModule ? function() {
                  return g7.default;
                } : function() {
                  return g7;
                };
                return u5.d(T6, "a", T6), T6;
              }, u5.o = function(g7, T6) {
                return Object.prototype.hasOwnProperty.call(g7, T6);
              }, u5.p = "", u5(u5.s = 0);
            }([function(A5, u5, X6) {
              function g7(t5, c5) {
                var s6 = {};
                for (var d4 in t5)
                  c5.indexOf(d4) >= 0 || Object.prototype.hasOwnProperty.call(t5, d4) && (s6[d4] = t5[d4]);
                return s6;
              }
              Object.defineProperty(u5, "__esModule", { value: !0 });
              var T6 = typeof Symbol == "function" && V6(Symbol.iterator) === "symbol" ? function(t5) {
                return typeof t5 > "u" ? "undefined" : V6(t5);
              } : function(t5) {
                return t5 && typeof Symbol == "function" && t5.constructor === Symbol && t5 !== Symbol.prototype ? "symbol" : typeof t5 > "u" ? "undefined" : V6(t5);
              }, B8 = Object.assign || function(t5) {
                for (var c5 = 1; c5 < arguments.length; c5++) {
                  var s6 = arguments[c5];
                  for (var d4 in s6)
                    Object.prototype.hasOwnProperty.call(s6, d4) && (t5[d4] = s6[d4]);
                }
                return t5;
              }, J4 = { top: "top", bottom: "bottom" }, e3 = { alertTime: 3, dateMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], overlayClickDismiss: !0, overlayOpacity: 0.75, transitionCurve: "ease", transitionDuration: 0.3, transitionSelector: "all", classes: { container: "notie-container", textbox: "notie-textbox", textboxInner: "notie-textbox-inner", button: "notie-button", element: "notie-element", elementHalf: "notie-element-half", elementThird: "notie-element-third", overlay: "notie-overlay", backgroundSuccess: "notie-background-success", backgroundWarning: "notie-background-warning", backgroundError: "notie-background-error", backgroundInfo: "notie-background-info", backgroundNeutral: "notie-background-neutral", backgroundOverlay: "notie-background-overlay", alert: "notie-alert", inputField: "notie-input-field", selectChoiceRepeated: "notie-select-choice-repeated", dateSelectorInner: "notie-date-selector-inner", dateSelectorUp: "notie-date-selector-up" }, ids: { overlay: "notie-overlay" }, positions: { alert: J4.top, force: J4.top, confirm: J4.top, input: J4.top, select: J4.bottom, date: J4.top } }, ge2 = u5.setOptions = function(t5) {
                e3 = B8({}, e3, t5, { classes: B8({}, e3.classes, t5.classes), ids: B8({}, e3.ids, t5.ids), positions: B8({}, e3.positions, t5.positions) });
              }, fe = function() {
                return new Promise(function(t5) {
                  return setTimeout(t5, 0);
                });
              }, oe5 = function(t5) {
                return new Promise(function(c5) {
                  return setTimeout(c5, 1e3 * t5);
                });
              }, R6 = function() {
                document.activeElement && document.activeElement.blur();
              }, W7 = function() {
                var t5 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c5) {
                  var s6 = 16 * Math.random() | 0, d4 = c5 === "x" ? s6 : 3 & s6 | 8;
                  return d4.toString(16);
                });
                return "notie-" + t5;
              }, le4 = { 1: e3.classes.backgroundSuccess, success: e3.classes.backgroundSuccess, 2: e3.classes.backgroundWarning, warning: e3.classes.backgroundWarning, 3: e3.classes.backgroundError, error: e3.classes.backgroundError, 4: e3.classes.backgroundInfo, info: e3.classes.backgroundInfo, 5: e3.classes.backgroundNeutral, neutral: e3.classes.backgroundNeutral }, me2 = function() {
                return e3.transitionSelector + " " + e3.transitionDuration + "s " + e3.transitionCurve;
              }, $4 = function(t5) {
                return t5.keyCode === 13;
              }, ee4 = function(t5) {
                return t5.keyCode === 27;
              }, K6 = function(t5, c5) {
                t5.classList.add(e3.classes.container), t5.style[c5] = "-10000px", document.body.appendChild(t5), t5.style[c5] = "-" + t5.offsetHeight + "px", t5.listener && window.addEventListener("keydown", t5.listener), fe().then(function() {
                  t5.style.transition = me2(), t5.style[c5] = 0;
                });
              }, O4 = function(t5, c5) {
                var s6 = document.getElementById(t5);
                s6 && (s6.style[c5] = "-" + s6.offsetHeight + "px", s6.listener && window.removeEventListener("keydown", s6.listener), oe5(e3.transitionDuration).then(function() {
                  s6.parentNode && s6.parentNode.removeChild(s6);
                }));
              }, te2 = function(t5, c5) {
                var s6 = document.createElement("div");
                s6.id = e3.ids.overlay, s6.classList.add(e3.classes.overlay), s6.classList.add(e3.classes.backgroundOverlay), s6.style.opacity = 0, t5 && e3.overlayClickDismiss && (s6.onclick = function() {
                  O4(t5.id, c5), j6();
                }), document.body.appendChild(s6), fe().then(function() {
                  s6.style.transition = me2(), s6.style.opacity = e3.overlayOpacity;
                });
              }, j6 = function() {
                var t5 = document.getElementById(e3.ids.overlay);
                t5.style.opacity = 0, oe5(e3.transitionDuration).then(function() {
                  t5.parentNode && t5.parentNode.removeChild(t5);
                });
              }, F9 = u5.hideAlerts = function(t5) {
                var c5 = document.getElementsByClassName(e3.classes.alert);
                if (c5.length) {
                  for (var s6 = 0; s6 < c5.length; s6++) {
                    var d4 = c5[s6];
                    O4(d4.id, d4.position);
                  }
                  t5 && oe5(e3.transitionDuration).then(function() {
                    return t5();
                  });
                }
              }, he2 = u5.alert = function(t5) {
                var c5 = t5.type, s6 = c5 === void 0 ? 4 : c5, d4 = t5.text, i3 = t5.time, k5 = i3 === void 0 ? e3.alertTime : i3, H7 = t5.stay, S7 = H7 !== void 0 && H7, h4 = t5.position, p7 = h4 === void 0 ? e3.positions.alert || p7.top : h4;
                R6(), F9();
                var l5 = document.createElement("div"), f7 = W7();
                l5.id = f7, l5.position = p7, l5.classList.add(e3.classes.textbox), l5.classList.add(le4[s6]), l5.classList.add(e3.classes.alert), l5.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + d4 + "</div>", l5.onclick = function() {
                  return O4(f7, p7);
                }, l5.listener = function(n3) {
                  ($4(n3) || ee4(n3)) && F9();
                }, K6(l5, p7), k5 && k5 < 1 && (k5 = 1), !S7 && k5 && oe5(k5).then(function() {
                  return O4(f7, p7);
                });
              }, ke2 = u5.force = function(t5, c5) {
                var s6 = t5.type, d4 = s6 === void 0 ? 5 : s6, i3 = t5.text, k5 = t5.buttonText, H7 = k5 === void 0 ? "OK" : k5, S7 = t5.callback, h4 = t5.position, p7 = h4 === void 0 ? e3.positions.force || p7.top : h4;
                R6(), F9();
                var l5 = document.createElement("div"), f7 = W7();
                l5.id = f7;
                var n3 = document.createElement("div");
                n3.classList.add(e3.classes.textbox), n3.classList.add(e3.classes.backgroundInfo), n3.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + i3 + "</div>";
                var r2 = document.createElement("div");
                r2.classList.add(e3.classes.button), r2.classList.add(le4[d4]), r2.innerHTML = H7, r2.onclick = function() {
                  O4(f7, p7), j6(), S7 ? S7() : c5 && c5();
                }, l5.appendChild(n3), l5.appendChild(r2), l5.listener = function(C5) {
                  $4(C5) && r2.click();
                }, K6(l5, p7), te2();
              }, Ce3 = u5.confirm = function(t5, c5, s6) {
                var d4 = t5.text, i3 = t5.submitText, k5 = i3 === void 0 ? "Yes" : i3, H7 = t5.cancelText, S7 = H7 === void 0 ? "Cancel" : H7, h4 = t5.submitCallback, p7 = t5.cancelCallback, l5 = t5.position, f7 = l5 === void 0 ? e3.positions.confirm || f7.top : l5;
                R6(), F9();
                var n3 = document.createElement("div"), r2 = W7();
                n3.id = r2;
                var C5 = document.createElement("div");
                C5.classList.add(e3.classes.textbox), C5.classList.add(e3.classes.backgroundInfo), C5.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + d4 + "</div>";
                var x5 = document.createElement("div");
                x5.classList.add(e3.classes.button), x5.classList.add(e3.classes.elementHalf), x5.classList.add(e3.classes.backgroundSuccess), x5.innerHTML = k5, x5.onclick = function() {
                  O4(r2, f7), j6(), h4 ? h4() : c5 && c5();
                };
                var a6 = document.createElement("div");
                a6.classList.add(e3.classes.button), a6.classList.add(e3.classes.elementHalf), a6.classList.add(e3.classes.backgroundError), a6.innerHTML = S7, a6.onclick = function() {
                  O4(r2, f7), j6(), p7 ? p7() : s6 && s6();
                }, n3.appendChild(C5), n3.appendChild(x5), n3.appendChild(a6), n3.listener = function(E3) {
                  $4(E3) ? x5.click() : ee4(E3) && a6.click();
                }, K6(n3, f7), te2(n3, f7);
              }, ve2 = function(t5, c5, s6) {
                var d4 = t5.text, i3 = t5.submitText, k5 = i3 === void 0 ? "Submit" : i3, H7 = t5.cancelText, S7 = H7 === void 0 ? "Cancel" : H7, h4 = t5.submitCallback, p7 = t5.cancelCallback, l5 = t5.position, f7 = l5 === void 0 ? e3.positions.input || f7.top : l5, n3 = g7(t5, ["text", "submitText", "cancelText", "submitCallback", "cancelCallback", "position"]);
                R6(), F9();
                var r2 = document.createElement("div"), C5 = W7();
                r2.id = C5;
                var x5 = document.createElement("div");
                x5.classList.add(e3.classes.textbox), x5.classList.add(e3.classes.backgroundInfo), x5.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + d4 + "</div>";
                var a6 = document.createElement("input");
                a6.classList.add(e3.classes.inputField), a6.setAttribute("autocapitalize", n3.autocapitalize || "none"), a6.setAttribute("autocomplete", n3.autocomplete || "off"), a6.setAttribute("autocorrect", n3.autocorrect || "off"), a6.setAttribute("autofocus", n3.autofocus || "true"), a6.setAttribute("inputmode", n3.inputmode || "verbatim"), a6.setAttribute("max", n3.max || ""), a6.setAttribute("maxlength", n3.maxlength || ""), a6.setAttribute("min", n3.min || ""), a6.setAttribute("minlength", n3.minlength || ""), a6.setAttribute("placeholder", n3.placeholder || ""), a6.setAttribute("spellcheck", n3.spellcheck || "default"), a6.setAttribute("step", n3.step || "any"), a6.setAttribute("type", n3.type || "text"), a6.value = n3.value || "", n3.allowed && (a6.oninput = function() {
                  var M5 = void 0;
                  if (Array.isArray(n3.allowed)) {
                    for (var w5 = "", _2 = n3.allowed, P7 = 0; P7 < _2.length; P7++)
                      _2[P7] === "an" ? w5 += "0-9a-zA-Z" : _2[P7] === "a" ? w5 += "a-zA-Z" : _2[P7] === "n" && (w5 += "0-9"), _2[P7] === "s" && (w5 += " ");
                    M5 = new RegExp("[^" + w5 + "]", "g");
                  } else
                    T6(n3.allowed) === "object" && (M5 = n3.allowed);
                  a6.value = a6.value.replace(M5, "");
                });
                var E3 = document.createElement("div");
                E3.classList.add(e3.classes.button), E3.classList.add(e3.classes.elementHalf), E3.classList.add(e3.classes.backgroundSuccess), E3.innerHTML = k5, E3.onclick = function() {
                  O4(C5, f7), j6(), h4 ? h4(a6.value) : c5 && c5(a6.value);
                };
                var D10 = document.createElement("div");
                D10.classList.add(e3.classes.button), D10.classList.add(e3.classes.elementHalf), D10.classList.add(e3.classes.backgroundError), D10.innerHTML = S7, D10.onclick = function() {
                  O4(C5, f7), j6(), p7 ? p7(a6.value) : s6 && s6(a6.value);
                }, r2.appendChild(x5), r2.appendChild(a6), r2.appendChild(E3), r2.appendChild(D10), r2.listener = function(M5) {
                  $4(M5) ? E3.click() : ee4(M5) && D10.click();
                }, K6(r2, f7), a6.focus(), te2(r2, f7);
              };
              u5.input = ve2;
              var Ee2 = u5.select = function(t5, c5) {
                var s6 = t5.text, d4 = t5.cancelText, i3 = d4 === void 0 ? "Cancel" : d4, k5 = t5.cancelCallback, H7 = t5.choices, S7 = t5.position, h4 = S7 === void 0 ? e3.positions.select || h4.top : S7;
                R6(), F9();
                var p7 = document.createElement("div"), l5 = W7();
                p7.id = l5;
                var f7 = document.createElement("div");
                f7.classList.add(e3.classes.textbox), f7.classList.add(e3.classes.backgroundInfo), f7.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + s6 + "</div>", p7.appendChild(f7), H7.forEach(function(r2, C5) {
                  var x5 = r2.type, a6 = x5 === void 0 ? 1 : x5, E3 = r2.text, D10 = r2.handler, M5 = document.createElement("div");
                  M5.classList.add(le4[a6]), M5.classList.add(e3.classes.button), M5.classList.add(e3.classes.selectChoice);
                  var w5 = H7[C5 + 1];
                  w5 && !w5.type && (w5.type = 1), w5 && w5.type === a6 && M5.classList.add(e3.classes.selectChoiceRepeated), M5.innerHTML = E3, M5.onclick = function() {
                    O4(l5, h4), j6(), D10();
                  }, p7.appendChild(M5);
                });
                var n3 = document.createElement("div");
                n3.classList.add(e3.classes.backgroundNeutral), n3.classList.add(e3.classes.button), n3.innerHTML = i3, n3.onclick = function() {
                  O4(l5, h4), j6(), k5 ? k5() : c5 && c5();
                }, p7.appendChild(n3), p7.listener = function(r2) {
                  ee4(r2) && n3.click();
                }, K6(p7, h4), te2(p7, h4);
              }, Te = u5.date = function(t5, c5, s6) {
                var d4 = t5.value, i3 = d4 === void 0 ? /* @__PURE__ */ new Date() : d4, k5 = t5.submitText, H7 = k5 === void 0 ? "OK" : k5, S7 = t5.cancelText, h4 = S7 === void 0 ? "Cancel" : S7, p7 = t5.submitCallback, l5 = t5.cancelCallback, f7 = t5.position, n3 = f7 === void 0 ? e3.positions.date || n3.top : f7;
                R6(), F9();
                var r2 = "&#9662", C5 = document.createElement("div"), x5 = document.createElement("div"), a6 = document.createElement("div"), E3 = function(L6) {
                  C5.innerHTML = e3.dateMonths[L6.getMonth()], x5.innerHTML = L6.getDate(), a6.innerHTML = L6.getFullYear();
                }, D10 = function(L6) {
                  var N7 = new Date(i3.getFullYear(), i3.getMonth() + 1, 0).getDate(), Q6 = L6.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 2);
                  Number(Q6) > N7 && (Q6 = N7.toString()), L6.target.textContent = Q6, Number(Q6) < 1 && (Q6 = "1"), i3.setDate(Number(Q6));
                }, M5 = function(L6) {
                  var N7 = L6.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 4);
                  L6.target.textContent = N7, i3.setFullYear(Number(N7));
                }, w5 = function(L6) {
                  E3(i3);
                }, _2 = function(L6) {
                  var N7 = new Date(i3.getFullYear(), i3.getMonth() + L6 + 1, 0).getDate();
                  i3.getDate() > N7 && i3.setDate(N7), i3.setMonth(i3.getMonth() + L6), E3(i3);
                }, P7 = function(L6) {
                  i3.setDate(i3.getDate() + L6), E3(i3);
                }, be = function(L6) {
                  var N7 = i3.getFullYear() + L6;
                  N7 < 0 ? i3.setFullYear(0) : i3.setFullYear(i3.getFullYear() + L6), E3(i3);
                }, Y6 = document.createElement("div"), de2 = W7();
                Y6.id = de2;
                var ue3 = document.createElement("div");
                ue3.classList.add(e3.classes.backgroundInfo);
                var I5 = document.createElement("div");
                I5.classList.add(e3.classes.dateSelectorInner);
                var Z5 = document.createElement("div");
                Z5.classList.add(e3.classes.button), Z5.classList.add(e3.classes.elementThird), Z5.classList.add(e3.classes.dateSelectorUp), Z5.innerHTML = r2;
                var q6 = document.createElement("div");
                q6.classList.add(e3.classes.button), q6.classList.add(e3.classes.elementThird), q6.classList.add(e3.classes.dateSelectorUp), q6.innerHTML = r2;
                var G7 = document.createElement("div");
                G7.classList.add(e3.classes.button), G7.classList.add(e3.classes.elementThird), G7.classList.add(e3.classes.dateSelectorUp), G7.innerHTML = r2, C5.classList.add(e3.classes.element), C5.classList.add(e3.classes.elementThird), C5.innerHTML = e3.dateMonths[i3.getMonth()], x5.classList.add(e3.classes.element), x5.classList.add(e3.classes.elementThird), x5.setAttribute("contentEditable", !0), x5.addEventListener("input", D10), x5.addEventListener("blur", w5), x5.innerHTML = i3.getDate(), a6.classList.add(e3.classes.element), a6.classList.add(e3.classes.elementThird), a6.setAttribute("contentEditable", !0), a6.addEventListener("input", M5), a6.addEventListener("blur", w5), a6.innerHTML = i3.getFullYear();
                var ne4 = document.createElement("div");
                ne4.classList.add(e3.classes.button), ne4.classList.add(e3.classes.elementThird), ne4.innerHTML = r2;
                var se3 = document.createElement("div");
                se3.classList.add(e3.classes.button), se3.classList.add(e3.classes.elementThird), se3.innerHTML = r2;
                var ae5 = document.createElement("div");
                ae5.classList.add(e3.classes.button), ae5.classList.add(e3.classes.elementThird), ae5.innerHTML = r2, Z5.onclick = function() {
                  return _2(1);
                }, q6.onclick = function() {
                  return P7(1);
                }, G7.onclick = function() {
                  return be(1);
                }, ne4.onclick = function() {
                  return _2(-1);
                }, se3.onclick = function() {
                  return P7(-1);
                }, ae5.onclick = function() {
                  return be(-1);
                };
                var z5 = document.createElement("div");
                z5.classList.add(e3.classes.button), z5.classList.add(e3.classes.elementHalf), z5.classList.add(e3.classes.backgroundSuccess), z5.innerHTML = H7, z5.onclick = function() {
                  O4(de2, n3), j6(), p7 ? p7(i3) : c5 && c5(i3);
                };
                var U5 = document.createElement("div");
                U5.classList.add(e3.classes.button), U5.classList.add(e3.classes.elementHalf), U5.classList.add(e3.classes.backgroundError), U5.innerHTML = h4, U5.onclick = function() {
                  O4(de2, n3), j6(), l5 ? l5(i3) : s6 && s6(i3);
                }, I5.appendChild(Z5), I5.appendChild(q6), I5.appendChild(G7), I5.appendChild(C5), I5.appendChild(x5), I5.appendChild(a6), I5.appendChild(ne4), I5.appendChild(se3), I5.appendChild(ae5), ue3.appendChild(I5), Y6.appendChild(ue3), Y6.appendChild(z5), Y6.appendChild(U5), Y6.listener = function(L6) {
                  $4(L6) ? z5.click() : ee4(L6) && U5.click();
                }, K6(Y6, n3), te2(Y6, n3);
              };
              u5.default = { alert: he2, force: ke2, confirm: Ce3, input: ve2, select: Ee2, date: Te, setOptions: ge2, hideAlerts: F9 };
            }]);
          });
        }).call(o5, v3(0)(y4));
      }]);
    });
  }), je = Ie(ye2()), { default: Le, ...Ne2 } = je, Fe = Le !== void 0 ? Le : Ne2;

  // https://esm.sh/v106/nanostores@0.7.1/deno/nanostores.js
  var S5 = Symbol("clean");
  var c4 = Symbol();

  // https://esm.sh/v106/@nanostores/i18n@0.7.1/deno/i18n.js
  function g5(r2, n3) {
    if (typeof r2 == "string")
      return n3(r2);
    {
      let e3 = {};
      for (let t5 in r2)
        e3[t5] = g5(r2[t5], n3);
      return e3;
    }
  }
  function p5(r2) {
    return (n3) => {
      if (n3.transform) {
        let e3 = n3.transform;
        return n3 = n3.input, { input: n3, transform(t5, o5, s6) {
          let f7 = r2(t5, o5, ...s6);
          return (...l5) => e3(t5, f7, l5);
        } };
      } else
        return { input: n3, transform(e3, t5, o5) {
          return r2(e3, t5, ...o5);
        } };
    };
  }
  var N5 = p5((r2, n3, e3) => g5(n3, (t5) => {
    for (let o5 in e3)
      t5 = t5.replace(new RegExp(`{${o5}}`, "g"), e3[o5]);
    return t5;
  })), R4 = p5((r2, n3, e3) => {
    let t5 = new Intl.PluralRules(r2).select(e3);
    return t5 in n3 || (t5 = "many"), g5(n3[t5], (o5) => o5.replace(/{count}/g, e3));
  });

  // https://esm.sh/v106/hotkeys-js@3.10.1/deno/hotkeys-js.js
  var M4 = typeof navigator < "u" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : !1;
  function P6(e3, t5, i3, r2) {
    e3.addEventListener ? e3.addEventListener(t5, i3, r2) : e3.attachEvent && e3.attachEvent("on".concat(t5), function() {
      i3(window.event);
    });
  }
  function T5(e3, t5) {
    for (var i3 = t5.slice(0, t5.length - 1), r2 = 0; r2 < i3.length; r2++)
      i3[r2] = e3[i3[r2].toLowerCase()];
    return i3;
  }
  function U4(e3) {
    typeof e3 != "string" && (e3 = ""), e3 = e3.replace(/\s/g, "");
    for (var t5 = e3.split(","), i3 = t5.lastIndexOf(""); i3 >= 0; )
      t5[i3 - 1] += ",", t5.splice(i3, 1), i3 = t5.lastIndexOf("");
    return t5;
  }
  function G6(e3, t5) {
    for (var i3 = e3.length >= t5.length ? e3 : t5, r2 = e3.length >= t5.length ? t5 : e3, n3 = !0, a6 = 0; a6 < i3.length; a6++)
      r2.indexOf(i3[a6]) === -1 && (n3 = !1);
    return n3;
  }
  var b3 = { backspace: 8, "\u232B": 8, tab: 9, clear: 12, enter: 13, "\u21A9": 13, return: 13, esc: 27, escape: 27, space: 32, left: 37, up: 38, right: 39, down: 40, del: 46, delete: 46, ins: 45, insert: 45, home: 36, end: 35, pageup: 33, pagedown: 34, capslock: 20, num_0: 96, num_1: 97, num_2: 98, num_3: 99, num_4: 100, num_5: 101, num_6: 102, num_7: 103, num_8: 104, num_9: 105, num_multiply: 106, num_add: 107, num_enter: 108, num_subtract: 109, num_decimal: 110, num_divide: 111, "\u21EA": 20, ",": 188, ".": 190, "/": 191, "`": 192, "-": M4 ? 173 : 189, "=": M4 ? 61 : 187, ";": M4 ? 59 : 186, "'": 222, "[": 219, "]": 221, "\\": 220 }, g6 = { "\u21E7": 16, shift: 16, "\u2325": 18, alt: 18, option: 18, "\u2303": 17, ctrl: 17, control: 17, "\u2318": 91, cmd: 91, command: 91 }, L5 = { 16: "shiftKey", 18: "altKey", 17: "ctrlKey", 91: "metaKey", shiftKey: 16, ctrlKey: 17, altKey: 18, metaKey: 91 }, u4 = { 16: !1, 18: !1, 17: !1, 91: !1 }, s5 = {};
  for (O3 = 1; O3 < 20; O3++)
    b3["f".concat(O3)] = 111 + O3;
  var O3, f6 = [], A4 = !1, D8 = "all", H6 = [], C4 = function(t5) {
    return b3[t5.toLowerCase()] || g6[t5.toLowerCase()] || t5.toUpperCase().charCodeAt(0);
  }, R5 = function(t5) {
    return Object.keys(b3).find(function(i3) {
      return b3[i3] === t5;
    });
  }, V5 = function(t5) {
    return Object.keys(g6).find(function(i3) {
      return g6[i3] === t5;
    });
  };
  function F8(e3) {
    D8 = e3 || "all";
  }
  function E2() {
    return D8 || "all";
  }
  function X5() {
    return f6.slice(0);
  }
  function $3() {
    return f6.map(function(e3) {
      return R5(e3) || V5(e3) || String.fromCharCode(e3);
    });
  }
  function q5(e3) {
    var t5 = e3.target || e3.srcElement, i3 = t5.tagName, r2 = !0;
    return (t5.isContentEditable || (i3 === "INPUT" || i3 === "TEXTAREA" || i3 === "SELECT") && !t5.readOnly) && (r2 = !1), r2;
  }
  function z4(e3) {
    return typeof e3 == "string" && (e3 = C4(e3)), f6.indexOf(e3) !== -1;
  }
  function J3(e3, t5) {
    var i3, r2;
    e3 || (e3 = E2());
    for (var n3 in s5)
      if (Object.prototype.hasOwnProperty.call(s5, n3))
        for (i3 = s5[n3], r2 = 0; r2 < i3.length; )
          i3[r2].scope === e3 ? i3.splice(r2, 1) : r2++;
    E2() === e3 && F8(t5 || "all");
  }
  function N6(e3) {
    var t5 = e3.keyCode || e3.which || e3.charCode, i3 = f6.indexOf(t5);
    if (i3 >= 0 && f6.splice(i3, 1), e3.key && e3.key.toLowerCase() === "meta" && f6.splice(0, f6.length), (t5 === 93 || t5 === 224) && (t5 = 91), t5 in u4) {
      u4[t5] = !1;
      for (var r2 in g6)
        g6[r2] === t5 && (v2[r2] = !1);
    }
  }
  function Q5(e3) {
    if (typeof e3 > "u")
      Object.keys(s5).forEach(function(o5) {
        return delete s5[o5];
      });
    else if (Array.isArray(e3))
      e3.forEach(function(o5) {
        o5.key && S6(o5);
      });
    else if (typeof e3 == "object")
      e3.key && S6(e3);
    else if (typeof e3 == "string") {
      for (var t5 = arguments.length, i3 = new Array(t5 > 1 ? t5 - 1 : 0), r2 = 1; r2 < t5; r2++)
        i3[r2 - 1] = arguments[r2];
      var n3 = i3[0], a6 = i3[1];
      typeof n3 == "function" && (a6 = n3, n3 = ""), S6({ key: e3, scope: n3, method: a6, splitKey: "+" });
    }
  }
  var S6 = function(t5) {
    var i3 = t5.key, r2 = t5.scope, n3 = t5.method, a6 = t5.splitKey, o5 = a6 === void 0 ? "+" : a6, l5 = U4(i3);
    l5.forEach(function(c5) {
      var p7 = c5.split(o5), m6 = p7.length, y4 = p7[m6 - 1], d4 = y4 === "*" ? "*" : C4(y4);
      if (s5[d4]) {
        r2 || (r2 = E2());
        var K6 = m6 > 1 ? T5(g6, p7) : [];
        s5[d4] = s5[d4].filter(function(h4) {
          var w5 = n3 ? h4.method === n3 : !0;
          return !(w5 && h4.scope === r2 && G6(h4.mods, K6));
        });
      }
    });
  };
  function _(e3, t5, i3, r2) {
    if (t5.element === r2) {
      var n3;
      if (t5.scope === i3 || t5.scope === "all") {
        n3 = t5.mods.length > 0;
        for (var a6 in u4)
          Object.prototype.hasOwnProperty.call(u4, a6) && (!u4[a6] && t5.mods.indexOf(+a6) > -1 || u4[a6] && t5.mods.indexOf(+a6) === -1) && (n3 = !1);
        (t5.mods.length === 0 && !u4[16] && !u4[18] && !u4[17] && !u4[91] || n3 || t5.shortcut === "*") && t5.method(e3, t5) === !1 && (e3.preventDefault ? e3.preventDefault() : e3.returnValue = !1, e3.stopPropagation && e3.stopPropagation(), e3.cancelBubble && (e3.cancelBubble = !0));
      }
    }
  }
  function k4(e3, t5) {
    var i3 = s5["*"], r2 = e3.keyCode || e3.which || e3.charCode;
    if (v2.filter.call(this, e3)) {
      if ((r2 === 93 || r2 === 224) && (r2 = 91), f6.indexOf(r2) === -1 && r2 !== 229 && f6.push(r2), ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach(function(h4) {
        var w5 = L5[h4];
        e3[h4] && f6.indexOf(w5) === -1 ? f6.push(w5) : !e3[h4] && f6.indexOf(w5) > -1 ? f6.splice(f6.indexOf(w5), 1) : h4 === "metaKey" && e3[h4] && f6.length === 3 && (e3.ctrlKey || e3.shiftKey || e3.altKey || (f6 = f6.slice(f6.indexOf(w5))));
      }), r2 in u4) {
        u4[r2] = !0;
        for (var n3 in g6)
          g6[n3] === r2 && (v2[n3] = !0);
        if (!i3)
          return;
      }
      for (var a6 in u4)
        Object.prototype.hasOwnProperty.call(u4, a6) && (u4[a6] = e3[L5[a6]]);
      e3.getModifierState && !(e3.altKey && !e3.ctrlKey) && e3.getModifierState("AltGraph") && (f6.indexOf(17) === -1 && f6.push(17), f6.indexOf(18) === -1 && f6.push(18), u4[17] = !0, u4[18] = !0);
      var o5 = E2();
      if (i3)
        for (var l5 = 0; l5 < i3.length; l5++)
          i3[l5].scope === o5 && (e3.type === "keydown" && i3[l5].keydown || e3.type === "keyup" && i3[l5].keyup) && _(e3, i3[l5], o5, t5);
      if (r2 in s5) {
        for (var c5 = 0; c5 < s5[r2].length; c5++)
          if ((e3.type === "keydown" && s5[r2][c5].keydown || e3.type === "keyup" && s5[r2][c5].keyup) && s5[r2][c5].key) {
            for (var p7 = s5[r2][c5], m6 = p7.splitKey, y4 = p7.key.split(m6), d4 = [], K6 = 0; K6 < y4.length; K6++)
              d4.push(C4(y4[K6]));
            d4.sort().join("") === f6.sort().join("") && _(e3, p7, o5, t5);
          }
      }
    }
  }
  function W6(e3) {
    return H6.indexOf(e3) > -1;
  }
  function v2(e3, t5, i3) {
    f6 = [];
    var r2 = U4(e3), n3 = [], a6 = "all", o5 = document, l5 = 0, c5 = !1, p7 = !0, m6 = "+", y4 = !1;
    for (i3 === void 0 && typeof t5 == "function" && (i3 = t5), Object.prototype.toString.call(t5) === "[object Object]" && (t5.scope && (a6 = t5.scope), t5.element && (o5 = t5.element), t5.keyup && (c5 = t5.keyup), t5.keydown !== void 0 && (p7 = t5.keydown), t5.capture !== void 0 && (y4 = t5.capture), typeof t5.splitKey == "string" && (m6 = t5.splitKey)), typeof t5 == "string" && (a6 = t5); l5 < r2.length; l5++)
      e3 = r2[l5].split(m6), n3 = [], e3.length > 1 && (n3 = T5(g6, e3)), e3 = e3[e3.length - 1], e3 = e3 === "*" ? "*" : C4(e3), e3 in s5 || (s5[e3] = []), s5[e3].push({ keyup: c5, keydown: p7, scope: a6, mods: n3, shortcut: r2[l5], method: i3, key: r2[l5], splitKey: m6, element: o5 });
    typeof o5 < "u" && !W6(o5) && window && (H6.push(o5), P6(o5, "keydown", function(d4) {
      k4(d4, o5);
    }, y4), A4 || (A4 = !0, P6(window, "focus", function() {
      f6 = [];
    }, y4)), P6(o5, "keyup", function(d4) {
      k4(d4, o5), N6(d4);
    }, y4));
  }
  function Y5(e3) {
    var t5 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
    Object.keys(s5).forEach(function(i3) {
      var r2 = s5[i3].filter(function(n3) {
        return n3.scope === t5 && n3.shortcut === e3;
      });
      r2.forEach(function(n3) {
        n3 && n3.method && n3.method();
      });
    });
  }
  var j5 = { getPressedKeyString: $3, setScope: F8, getScope: E2, deleteScope: J3, getPressedKeyCodes: X5, isPressed: z4, filter: q5, trigger: Y5, unbind: Q5, keyMap: b3, modifier: g6, modifierMap: L5 };
  for (x4 in j5)
    Object.prototype.hasOwnProperty.call(j5, x4) && (v2[x4] = j5[x4]);
  var x4;
  typeof document < "u" && (B7 = window.hotkeys, v2.noConflict = function(e3) {
    return e3 && window.hotkeys === v2 && (window.hotkeys = B7), v2;
  }, window.hotkeys = v2);
  var B7;

  // deps.ts
  var toast = Fe.alert;

  // log.ts
  var Timing = class {
    #t = performance.now();
    reset() {
      this.#t = performance.now();
    }
    stop(message) {
      let now = performance.now(), d4 = Math.round(now - this.#t), cf = colors_exports.green;
      d4 > 1e4 ? cf = colors_exports.red : d4 > 1e3 && (cf = colors_exports.yellow), console.debug(
        colors_exports.dim(brandName + " TIMING:"),
        message,
        "in",
        cf(d4 + "ms")
      ), this.#t = now;
    }
  }, Logger = class {
    #level = 1 /* Info */;
    get level() {
      return this.#level;
    }
    setLevel(level) {
      switch (level) {
        case "debug":
          this.#level = 0 /* Debug */;
          break;
        case "info":
          this.#level = 1 /* Info */;
          break;
        case "warn":
          this.#level = 2 /* Warn */;
          break;
        case "error":
          this.#level = 3 /* Error */;
          break;
        case "fatal":
          this.#level = 4 /* Fatal */;
          break;
      }
    }
    debug(...args) {
      this.#level <= 0 /* Debug */ && console.log(colors_exports.dim(brandName + " DEBUG:"), ...args);
    }
    v(...args) {
      this.#level <= 0 /* Debug */ && console.log(colors_exports.dim(brandName + " VERBOSE:"), ...args);
    }
    info(...args) {
      this.#level <= 1 /* Info */ && console.log(colors_exports.green(brandName + " INFO:"), ...args);
    }
    l(...args) {
      this.#level <= 1 /* Info */ && console.log(colors_exports.green(brandName + " TEMP INFO:"), ...args);
    }
    warn(...args) {
      this.#level <= 2 /* Warn */ && console.warn(colors_exports.yellow(brandName + " WARN:"), ...args);
    }
    error(...args) {
      this.#level <= 3 /* Error */ && console.error(colors_exports.red(brandName + " ERROR:"), ...args);
    }
    fatal(...args) {
      this.#level <= 4 /* Fatal */ && console.error(colors_exports.red(brandName + " FATAL:"), ...args);
    }
    timing() {
      return this.level === 0 /* Debug */ ? new Timing() : { reset: () => {
      }, stop: () => {
      } };
    }
  }, log_default = new Logger();

  // utils/is_mobile.ts
  var appleIphone = /iPhone/i, appleIpod = /iPod/i, appleTablet = /iPad/i, appleUniversal = /\biOS-universal(?:.+)Mac\b/i, androidPhone = /\bAndroid(?:.+)Mobile\b/i, androidTablet = /Android/i, amazonPhone = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i, amazonTablet = /Silk/i, windowsPhone = /Windows Phone/i, windowsTablet = /\bWindows(?:.+)ARM\b/i, otherBlackBerry = /BlackBerry/i, otherBlackBerry10 = /BB10/i, otherOpera = /Opera Mini/i, otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i, otherFirefox = /Mobile(?:.+)Firefox\b/i, isAppleTabletOnIos13 = (navigator2) => typeof navigator2 < "u" && navigator2.platform === "MacIntel" && typeof navigator2.maxTouchPoints == "number" && // @ts-ignore: it's ok
  navigator2.maxTouchPoints > 1 && typeof globalThis.MSStream > "u";
  function createMatch(userAgent) {
    return (regex) => regex.test(userAgent);
  }
  function isMobile(param) {
    let nav = {
      userAgent: "",
      platform: "",
      maxTouchPoints: 0
    };
    !param && typeof navigator < "u" ? nav = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      maxTouchPoints: navigator.maxTouchPoints || 0
    } : typeof param == "string" ? nav.userAgent = param : param && param.userAgent && (nav = {
      userAgent: param.userAgent,
      platform: param.platform,
      maxTouchPoints: param.maxTouchPoints || 0
    });
    let userAgent = nav.userAgent, tmp = userAgent.split("[FBAN");
    typeof tmp[1] < "u" && (userAgent = tmp[0]), tmp = userAgent.split("Twitter"), typeof tmp[1] < "u" && (userAgent = tmp[0]);
    let match = createMatch(userAgent), result = {
      apple: {
        phone: match(appleIphone) && !match(windowsPhone),
        ipod: match(appleIpod),
        tablet: !match(appleIphone) && (match(appleTablet) || isAppleTabletOnIos13(nav)) && !match(windowsPhone),
        universal: match(appleUniversal),
        device: (match(appleIphone) || match(appleIpod) || match(appleTablet) || match(appleUniversal) || isAppleTabletOnIos13(nav)) && !match(windowsPhone)
      },
      amazon: {
        phone: match(amazonPhone),
        tablet: !match(amazonPhone) && match(amazonTablet),
        device: match(amazonPhone) || match(amazonTablet)
      },
      android: {
        phone: !match(windowsPhone) && match(amazonPhone) || !match(windowsPhone) && match(androidPhone),
        tablet: !match(windowsPhone) && !match(amazonPhone) && !match(androidPhone) && (match(amazonTablet) || match(androidTablet)),
        device: !match(windowsPhone) && (match(amazonPhone) || match(amazonTablet) || match(androidPhone) || match(androidTablet)) || match(/\bokhttp\b/i)
      },
      windows: {
        phone: match(windowsPhone),
        tablet: match(windowsTablet),
        device: match(windowsPhone) || match(windowsTablet)
      },
      other: {
        blackberry: match(otherBlackBerry),
        blackberry10: match(otherBlackBerry10),
        opera: match(otherOpera),
        firefox: match(otherFirefox),
        chrome: match(otherChrome),
        device: match(otherBlackBerry) || match(otherBlackBerry10) || match(otherOpera) || match(otherFirefox) || match(otherChrome)
      },
      any: !1,
      phone: !1,
      tablet: !1
    };
    return result.any = result.apple.device || result.android.device || result.windows.device || result.other.device, result.phone = result.apple.phone || result.android.phone || result.windows.phone, result.tablet = result.apple.tablet || result.android.tablet || result.windows.tablet, result;
  }

  // utils/platform.ts
  var DENO = "DENO", CHROME = "CHROME", FIREFOX = "FIREFOX";
  function isBrowser(toCheck) {
    let currentBrowser = CHROME;
    try {
      let userAgent = navigator?.userAgent || "";
      /firefox/i.test(userAgent) ? currentBrowser = FIREFOX : /deno/i.test(userAgent) && (currentBrowser = DENO);
    } catch {
    }
    return toCheck === CHROME && currentBrowser === CHROME || toCheck === FIREFOX && currentBrowser === FIREFOX || toCheck === DENO && currentBrowser === DENO;
  }
  function isDeno2() {
    return typeof Deno < "u";
  }
  function isFirefox() {
    return isBrowser(FIREFOX);
  }
  function isTouchDevice() {
    return !!navigator.maxTouchPoints || "ontouchstart" in document.documentElement;
  }

  // browser/mock_browser.ts
  var listeners = {
    addListener: () => {
    },
    removeListener: () => {
    },
    hasListener: () => {
    }
  }, mock_browser_default = {
    permissions: {
      contains: () => {
      },
      request: () => {
      }
    },
    runtime: {
      onMessage: listeners,
      openOptionsPage: () => {
      },
      lastError: {
        message: ""
      }
    },
    storage: {
      sync: {
        get: () => {
        },
        set: () => {
        }
      }
    },
    tabs: {
      onUpdated: listeners,
      query: () => {
      },
      sendMessage: () => {
      }
    }
  };

  // browser/browser.ts
  var browserAPI;
  isDeno2() ? browserAPI = mock_browser_default : browserAPI = globalThis.immersiveTranslateBrowserAPI;

  // buildin_config.json
  var buildin_config_default = {
    minVersion: "0.0.20",
    immediateTranslationTextCount: 5e3,
    interval: 36e5,
    beta: !1,
    cache: !0,
    donateUrl: "https://immersive-translate.owenyoung.com/donate.html",
    feedbackUrl: "https://github.com/immersive-translate/immersive-translate/issues",
    isShowContextMenu: !0,
    loadingTheme: "spinner",
    canary: !1,
    translationServices: {
      volcAlpha: {
        placeholderDelimiters: ["{", "}"]
      },
      volc: {
        placeholderDelimiters: ["{", "}"]
      },
      tencent: {
        placeholderDelimiters: ["{", "}"]
      },
      transmart: {
        placeholderDelimiters: ["#", "#"]
      },
      baidu: {
        placeholderDelimiters: ["#", "#"]
      },
      caiyun: {
        placeholderDelimiters: ["{", "}"]
      },
      youdao: {
        placeholderDelimiters: ["\u{1F6A0}", "\u{1F6A0}"]
      },
      deepl: {},
      dpro: {
        apiUrl: "https://api.deepl.com/jsonrpc"
      }
    },
    shortcuts: {
      toggleTranslatePage: "Alt+A",
      toggleTranslateTheWholePage: "Alt+W",
      toggleTranslateToThePageEndImmediately: "Alt+S",
      toggleTranslationMask: "Alt+D"
    },
    tempTranslateDomainMinutes: 0,
    immediateTranslationPattern: {
      matches: [
        "www.tumblr.com",
        "twitter.com",
        "*.twitter.com",
        "medium.com",
        "*.medium.com",
        "github.com",
        "gist.github.com",
        "www.facebook.com",
        "www.youtube.com",
        "m.youtube.com",
        "mail.google.com",
        "discord.com",
        "web.telegram.org",
        "instagram.com",
        "*.slack.com",
        "https://old.reddit.com/",
        "https://www.reddit.com/r/popular/",
        "https://www.reddit.com/",
        "https://www.reddit.com/hot/",
        "https://www.reddit.com/new/",
        "https://www.reddit.com/top/",
        "https://www.reddit.com/.compact"
      ],
      excludeMatches: [],
      selectorMatches: [
        "meta[property='al:ios:url'][content^='medium://']"
      ],
      selectorExcludeMatches: []
    },
    translationParagraphLanguagePattern: {
      matches: [
        "www.reddit.com",
        "old.reddit.com",
        "twitter.com",
        "www.tumblr.com",
        "*.twitter.com",
        "medium.com",
        "*.medium.com",
        "github.com",
        "gist.github.com",
        "www.facebook.com",
        "www.youtube.com",
        "m.youtube.com",
        "read.readwise.io",
        "www.inoreader.com",
        "mail.google.com",
        "google.com",
        "discord.com",
        "instagram.com",
        "web.telegram.org",
        "*.slack.com"
      ],
      excludeMatches: [],
      selectorMatches: [
        "meta[property='al:ios:url'][content^='medium://']"
      ],
      selectorExcludeMatches: []
    },
    sourceLanguageUrlPattern: {},
    generalRule: {
      _comment: "",
      normalizeBody: "",
      injectedCss: [],
      additionalInjectedCss: [],
      languageDetectMinTextCount: 50,
      wrapperPrefix: "smart",
      wrapperSuffix: "smart",
      isPdf: !1,
      isTransformPreTagNewLine: !1,
      urlChangeDelay: 20,
      translationBlockStyle: "",
      isShowUserscriptPagePopup: !0,
      observeUrlChange: !1,
      paragraphMinTextCount: 8,
      paragraphMinWordCount: 2,
      shadowRootSelectors: [],
      blockMinTextCount: 32,
      blockMinWordCount: 5,
      containerMinTextCount: 18,
      lineBreakMaxTextCount: 0,
      globalAttributes: {},
      globalStyles: {
        ".sr-only": "display:none"
      },
      selectors: [],
      preWhitespaceDetectedTags: ["DIV", "SPAN"],
      stayOriginalSelectors: [],
      additionalSelectors: [
        "h1",
        "section h2",
        "section h3",
        "section h4",
        "main h2",
        "main h3",
        "main h4",
        ".article-title",
        ".article-subtitle",
        ".article_title",
        ".article_subtitle",
        ".article__title",
        ".articleTitle",
        ".Article__content",
        ".title",
        ".abstract",
        ".titleLink",
        ".summary",
        ".content",
        ".headline",
        ".page-content"
      ],
      atomicBlockTags: [],
      excludeSelectors: [],
      additionalExcludeSelectors: [
        ".social-share",
        ".breadcrumbs",
        ".post__footer",
        ".btn",
        ".reference-citations",
        ".share-nav",
        ".o-share",
        "[data-toolbar=share]",
        "rp",
        "rt"
      ],
      translationClasses: [],
      atomicBlockSelectors: [],
      excludeTags: [
        "TITLE",
        "SCRIPT",
        "STYLE",
        "TEXTAREA",
        "SVG",
        "svg",
        "NOSCRIPT",
        "INPUT",
        "BUTTON",
        "BASE",
        "SELECT",
        "OPTION",
        "IMG",
        "SUB",
        "SUP",
        "HR",
        "PRE",
        "CODE",
        "KBD",
        "WBR",
        "TT",
        "RT",
        "RP",
        "META",
        "ASIDE",
        "FOOTER",
        "MATH"
      ],
      bodyTranslateTags: [
        "FOOTER",
        "ADIDE",
        "BUTTON",
        "NAV"
      ],
      forceTranslateTags: [],
      metaTags: [
        "META",
        "SCRIPT",
        "STYLE",
        "NOSCRIPT"
      ],
      additionalExcludeTags: [],
      stayOriginalTags: ["CODE", "TT", "IMG", "SUP", "SUB"],
      additionalStayOriginalTags: [],
      inlineTags: [
        "A",
        "ABBR",
        "FONT",
        "ACRONYM",
        "B",
        "INS",
        "DEL",
        "RUBY",
        "RP",
        "RB",
        "BDO",
        "MARK",
        "BIG",
        "RT",
        "NOBR",
        "CITE",
        "DFN",
        "EM",
        "I",
        "LABEL",
        "Q",
        "S",
        "SMALL",
        "SPAN",
        "STRONG",
        "SUB",
        "SUP",
        "U",
        "KBD",
        "TT",
        "VAR",
        "IMG",
        "CODE",
        "SCRIPT",
        "STYLE",
        "LINK",
        "TIME",
        "META",
        "WBR"
      ],
      additionalInlineTags: [],
      extraInlineSelectors: [],
      additionalInlineSelectors: [],
      extraBlockSelectors: ["turbo-frame", "readme-toc"],
      allBlockTags: [
        "HGROUP",
        "CONTENT",
        "ADDRESS",
        "ARTICLE",
        "ASIDE",
        "BLOCKQUOTE",
        "CANVAS",
        "DD",
        "DL",
        "DT",
        "FIELDSET",
        "FIGCAPTION",
        "FIGURE",
        "FOOTER",
        "HEADER",
        "FORM",
        "HR",
        "MAIN",
        "SUMMARY",
        "NAV",
        "OL",
        "NOSCRIPT",
        "PRE",
        "SECTION",
        "TABLE",
        "TFOOT",
        "UL",
        "VIDEO",
        "P",
        "DIV",
        "H1",
        "H2",
        "H3",
        "H4",
        "H5",
        "H6",
        "UL",
        "LI",
        "OL",
        "BR",
        "PICTURE",
        "TBODY",
        "TR",
        "TD",
        "TH",
        "SOURCE",
        "C-WIZ",
        "BUTTON",
        "TURBO-FRAME",
        "README-TOC"
      ],
      pdfNewParagraphLineHeight: 2.4,
      pdfNewParagraphIndent: 1.2,
      pdfNewParagraphIndentRightIndentPx: 130,
      fingerCountToToggleTranslagePageWhenTouching: 4,
      fingerCountToToggleTranslationMaskWhenTouching: 0
    },
    rules: [
      {
        matches: [
          "moz-extension://*/pdf/index.html*"
        ],
        isPdf: !0,
        wrapperPrefix: "",
        wrapperSuffix: "",
        urlChangeDelay: 0,
        selectors: [".textLayer"],
        excludeSelectors: [".annotationLayer"],
        globalStyles: {
          "div.page": "width: 98%;",
          ".textLayer": "overflow:visible;opacity: 1;"
        }
      },
      {
        matches: ["mail.jabber.org", "antirez.com"],
        excludeTags: [
          "TITLE",
          "SCRIPT",
          "STYLE",
          "TEXTAREA",
          "SVG",
          "svg",
          "INPUT",
          "LABEL",
          "IMG",
          "SUB",
          "SUP",
          "BR",
          "CODE",
          "KBD",
          "WBR",
          "TT"
        ]
      },
      {
        matches: "*.wikipedia.org",
        excludeSelectors: [
          ".mw-editsection",
          ".mw-cite-backlink",
          "#mw-panel-toc"
        ],
        stayOriginalSelectors: [
          ".chemf",
          ".mwe-math-element",
          "[role=math]",
          ".nowrap"
        ],
        extraInlineSelectors: [
          ".chemf",
          ".mwe-math-element",
          "[role=math]",
          ".nowrap"
        ]
      },
      {
        matches: [
          "twitter.com",
          "mobile.twitter.com",
          "tweetdeck.twitter.com",
          "https://platform.twitter.com/embed*"
        ],
        selectors: [
          '[data-testid="tweetText"]',
          ".tweet-text",
          ".js-quoted-tweet-text",
          "[data-testid='card.layoutSmall.detail'] > div:nth-child(2)",
          "[data-testid='developerBuiltCardContainer'] > div:nth-child(2)",
          "[data-testid='card.layoutLarge.detail'] > div:nth-child(2)"
        ],
        observeUrlChange: !1,
        extraInlineSelectors: ['[data-testid="tweetText"] div']
      },
      {
        matches: [
          "stackoverflow.com",
          "*.stackexchange.com",
          "superuser.com",
          "askubuntu.com",
          "serverfault.com"
        ],
        extraBlockSelectors: ["span.comment-copy"],
        excludeSelectors: [
          "a.comment-user",
          "span.comment-date",
          "div.s-prose.js-post-body + div",
          ".bottom-notice",
          "div[data-campaign-name=stk]"
        ]
      },
      {
        matches: "developer.apple.com/documentation/*",
        selectors: [".container", "h3.title"]
      },
      {
        matches: "news.ycombinator.com",
        selectors: [
          ".titleline > a",
          ".comment > .commtext",
          ".toptext",
          "a.hn-item-title",
          ".hn-comment-text",
          ".hn-story-title"
        ],
        excludeSelectors: [".reply"]
      },
      {
        matches: ["*.quora.com", "quora.com"],
        additionalSelectors: [
          ".puppeteer_test_question_title",
          ".puppeteer_test_answer_content",
          ".q-text"
        ],
        globalStyles: {
          ".qu-truncateLines--3": "-webkit-line-clamp: unset;"
        }
      },
      {
        matches: [
          "old.reddit.com/*/.compact",
          "old.reddit.com/.compact",
          "www.reddit.com/*/.compact",
          "www.reddit.com/.compact"
        ],
        selectors: [".title > a", ".usertext-body"],
        detectParagraphLanguage: !0
      },
      {
        matches: "old.reddit.com",
        selectors: ["p.title > a", "[role=main] .md-container"],
        detectParagraphLanguage: !0
      },
      {
        matches: "www.reddit.com",
        selectors: [
          "h1",
          ".PostHeader__post-title-line",
          "[data-click-id=body] h3",
          "[data-click-id=background] h3",
          "[data-testid=comment]",
          "[data-adclicklocation='title']",
          "[data-adclicklocation=media]",
          ".PostContent",
          ".post-content",
          ".Comment__body",
          "faceplate-batch .md"
        ],
        detectParagraphLanguage: !0,
        globalStyles: {
          "div.XPromoBottomBar": "display:none"
        }
      },
      {
        matches: "www.reuters.com/",
        excludeSelectors: ["header"]
      },
      {
        matches: "github.com",
        selectors: [
          ".markdown-title",
          ".markdown-body",
          ".Layout-sidebar p",
          "div > span.search-match",
          "li.repo-list-item p",
          "#responsive-meta-container p"
        ],
        excludeSelectors: [
          ".css-truncate",
          "[data-test-selector='commit-tease-commit-message']",
          "div.blob-wrapper-embedded",
          "div.Box.Box--condensed.my-2"
        ],
        extraBlockSelectors: [],
        extraInlineSelectors: [
          "g-emoji"
        ],
        stayOriginalTags: ["CODE", "TT", "G-EMOJI", "IMG", "SUP", "SUB"],
        detectParagraphLanguage: !0
      },
      {
        matches: "www.facebook.com",
        selectors: [
          "div[dir=auto][style]",
          "div[dir=auto][class]",
          "span[lang]"
        ],
        atomicBlockSelectors: [
          "div[dir=auto][style]",
          "div[dir=auto][class]",
          "span[lang]"
        ],
        insertPosition: "afterend",
        preWhitespaceDetectedTags: ["DIV", "SPAN"],
        extraBlockSelectors: ["span.x1vvkbs"],
        excludeSelectors: ["[role=button]"],
        translationClasses: [
          "immersive-translate-text"
        ],
        detectParagraphLanguage: !0
      },
      {
        matches: "m.youtube.com",
        selectors: [
          ".comment-text"
        ],
        observeUrlChange: !0,
        atomicBlockSelectors: [
          ".comment-text"
        ],
        globalStyles: {
          ".comment-text": "max-height:unset;"
        },
        injectedCss: [
          ".immersive-translate-target-wrapper img { width: 16px; height: 16px }"
        ]
      },
      {
        matches: "www.youtube.com",
        observeUrlChange: !0,
        selectors: [
          "yt-formatted-string[slot=content].ytd-comment-renderer",
          "yt-formatted-string.ytd-video-renderer",
          "h1 > yt-formatted-string.ytd-watch-metadata",
          "yt-formatted-string#video-title",
          "span#video-title",
          "a#video-title",
          "yt-formatted-string.ytd-transcript-segment-renderer"
        ],
        wrapperPrefix: "",
        wrapperSuffix: "",
        globalStyles: {
          "ytd-expander.ytd-comment-renderer": "--ytd-expander-max-lines: 1000;",
          "h1.ytd-watch-metadata": "-webkit-line-clamp: unset;max-height: unset;",
          "yt-formatted-string#video-title": "-webkit-line-clamp: unset;max-height: unset;",
          "#video-title": "-webkit-line-clamp: unset;max-height: unset;"
        },
        urlChangeDelay: 2e3,
        atomicBlockSelectors: [
          "yt-formatted-string[slot=content].ytd-comment-renderer",
          "h1 > yt-formatted-string.ytd-watch-metadata",
          "yt-formatted-string#video-title",
          "span#video-title"
        ],
        excludeSelectors: [
          "[class^='lln-']"
        ],
        extraBlockSelectors: [
          "yt-formatted-string.ytd-transcript-segment-renderer"
        ],
        detectParagraphLanguage: !0,
        injectedCss: [
          ".immersive-translate-target-wrapper img { width: 16px; height: 16px }"
        ]
      },
      {
        matches: "https://www.instagram.com/*",
        globalStyles: {
          "._ab05": "min-height:150px"
        },
        wrapperPrefix: "",
        wrapperSuffix: "",
        selectors: [
          "div._aa_c h1",
          "div._a9zs h1",
          "div._a9zr > div._a9zs > span",
          "div._ab5z._ab5_",
          'div._ac72 div[role="button"] > div:last-child',
          'li._acaz div[role="menuitem"]'
        ],
        atomicBlockSelectors: [
          "div._aa_c h1",
          'li._acaz div[role="menuitem"]'
        ]
      },
      {
        matches: "1paragraph.app",
        selectors: "#book"
      },
      {
        matches: "https://poeditor.com/projects/*",
        selectors: [
          ".comment-body",
          ".reference_language .source-string"
        ]
      },
      {
        matches: ["*.substack.com", "newsletter.rootsofprogress.org"],
        selectors: [
          ".post-preview-title",
          ".post-preview-description",
          ".post",
          ".comment-body"
        ],
        excludeSelectors: [
          ".captioned-button-wrap",
          ".subscription-widget-wrap",
          ".tweet-header",
          ".tweet-link-bottom",
          ".expanded-link",
          ".meta-subheader"
        ],
        extraBlockSelectors: [
          ".tweet-link-top",
          ".tweet-link-bottom",
          ".expanded-link"
        ]
      },
      {
        matches: ["seekingalpha.com/article/*", "seekingalpha.com/news/*"],
        selectors: ["[data-test-id=card-container]"],
        excludeSelectors: [
          "[data-test-id=post-page-meta]",
          "header > div:first-child"
        ]
      },
      {
        matches: "hn.algolia.com",
        selectors: [".Story_title > a:first-child", ".Story_comment > span"]
      },
      {
        matches: "read.readwise.io",
        selectors: [
          'div[class^="_titleRow_"]',
          'div[class^="_description_"]',
          "#document-text-content"
        ],
        detectParagraphLanguage: !0
      },
      {
        matches: ["www.inoreader.com", "*.inoreader.com"],
        selectors: [
          ".article_header_title",
          ".article_title_link",
          ".article_content",
          ".article_magazine_title_link"
        ],
        observeUrlChange: !1,
        globalStyles: {
          ".article_title_link": "-webkit-line-clamp: unset;max-height: unset;"
        }
      },
      {
        matches: ["scholar.google.com"],
        wrapperPrefix: `
`,
        selectors: ["h3 a[data-clk]", "div.gs_rs"],
        atomicBlockSelectors: [".gs_rs", "h3 a[data-clk]"]
      },
      {
        matches: "mail.google.com",
        selectors: [
          "h2[data-thread-perm-id]",
          "span[data-thread-id]",
          "div[data-message-id] div[class='']"
        ],
        detectParagraphLanguage: !0
      },
      {
        matches: "www.producthunt.com",
        excludeMatches: "https://www.producthunt.com/stories/*",
        selectors: [
          "h2",
          "div[class^='styles_htmlText__']",
          "[class^='styles_tagline']",
          "a[href^='/discussions/'].fontWeight-600",
          "button[class^='styles_textButton'] > div > span",
          "h5 + p"
        ],
        globalStyles: {
          "h5 + p": "height:unset;"
        },
        excludeTags: [
          "TITLE",
          "SCRIPT",
          "STYLE",
          "TEXTAREA",
          "SVG",
          "svg",
          "INPUT",
          "LABEL",
          "IMG",
          "SUB",
          "SUP",
          "BR",
          "CODE",
          "KBD",
          "WBR",
          "TT"
        ]
      },
      {
        matches: "*.gitbook.io",
        additionalSelectors: ["main"],
        _comment: "https://midjourney.gitbook.io/docs/user-manual"
      },
      {
        matches: "arxiv.org",
        additionalSelectors: ["h1", "blockquote.abstract"]
      },
      {
        matches: "https://discord.com/channels/*",
        selectors: [
          "li[id^=chat-messages] div[id^=message-content]",
          "h3[data-text-variant='heading-lg/semibold']",
          "section[aria-label='Search Results'] div[id^=message-content]"
        ],
        excludeSelectors: [
          "div[class^='repliedTextContent']"
        ],
        globalStyles: {
          "div[class^=headerText]": "max-height: unset;",
          "h3[data-text-variant='heading-lg/semibold']": "-webkit-line-clamp: none;"
        },
        detectParagraphLanguage: !0,
        wrapperPrefix: "<br />",
        wrapperSuffix: ""
      },
      {
        matches: "web.telegram.org/z/*",
        selectors: [".text-content"],
        detectParagraphLanguage: !0
      },
      {
        matches: ["web.telegram.org/k/*", "web.telegram.org/k/"],
        selectors: [".message"],
        detectParagraphLanguage: !0
      },
      {
        matches: "gist.github.com",
        selectors: [".markdown-body", ".readme"],
        detectParagraphLanguage: !0
      },
      {
        matches: "lobste.rs",
        selectors: [".u-repost-of", ".comment_text"]
      },
      {
        matches: "*.slack.com",
        selectors: [".p-rich_text_block"],
        detectParagraphLanguage: !0
      },
      {
        matches: "1paragraph.app",
        additionalSelectors: ["#book"]
      },
      {
        matches: "www.google.*/search*",
        detectParagraphLanguage: !0,
        excludeSelectors: ["a h3 + div", "div#sfooter"],
        wrapperSuffix: "",
        globalStyles: {
          "div[data-content-feature='1'] > div": "-webkit-line-clamp: unset;max-height: unset;",
          "div[style='-webkit-line-clamp:2']": "-webkit-line-clamp: unset;max-height: unset;"
        },
        extraBlockSelectors: [
          ".MUFPAc"
        ]
      },
      {
        matches: "lowendtalk.com",
        selectors: ["[role=heading]", "h1", ".userContent"]
      },
      {
        matches: "www.linkedin.com/jobs/*",
        selectors: ["#job-details > span"]
      },
      {
        matches: "www.linkedin.com",
        addtionalSelectors: ["span.break-words > span > span[dir=ltr]"]
      },
      {
        matches: "www.indiehackers.com",
        selectors: [".content", "h1", ".feed-item__title-link"]
      },
      {
        matches: "libreddit.de",
        selectors: ["h2.post_title", ".comment_body > .md"]
      },
      {
        matches: ["notion.site", "www.notion.so"],
        selectors: ["div[data-block-id]"]
      },
      {
        matches: "www.newyorker.com",
        additionalSelectors: ["h1", "[data-testid=SummaryItemHed]"]
      },
      {
        matches: "start.me",
        selectors: [
          ".rss-article__title",
          ".rss-articles-list__article-link",
          ".rss-showcase__title",
          ".rss-showcase__text"
        ]
      },
      {
        matches: "www.scmp.com",
        additionalSelectors: [".info__subHeadline", ".section-content h2"]
      },
      {
        matches: "www.lesswrong.com",
        extraBlockSelectors: ["span.commentOnSelection"]
      },
      {
        matches: [
          "mastodon.social",
          "mastodon.online",
          "kolektiva.social",
          "indieweb.social",
          "mastodon.world",
          "infosec.exchange"
        ],
        selectorMatches: ["div#mastodon"],
        selectors: ["div.status__content__text"],
        detectLanguage: !0
      },
      {
        matches: "www.cnbc.com",
        additionalSelectors: ["div.RenderKeyPoints-list"]
      },
      {
        matches: "app.daily.dev",
        selectors: [
          "h1",
          ".typo-body",
          "article h3",
          "[class^=markdown_markdown]"
        ],
        globalStyles: {
          ".line-clamp-3": "-webkit-line-clamp: unset"
        }
      },
      {
        matches: "www.aljazeera.com",
        addtionalSelectors: ["h1", ".article__subhead"]
      },
      {
        matches: ["*.pornhub.com", "pornhub.com"],
        selectors: [
          ".title >a",
          ".title > span",
          ".thumbnailTitle",
          ".commentMessage > span"
        ],
        detectParagraphLanguage: !0,
        wrapperPrefix: `

`,
        wrapperSuffix: `
`,
        globalStyles: {
          ".title": "height: unset; max-height: unset;"
        }
      },
      {
        matches: ["weibo.com"],
        selectors: ["div[class^='detail_wbtext']"]
      },
      {
        matches: ["medium.com", "*.medium.com"],
        selectorMatches: [
          "meta[property='al:ios:url'][content^='medium://']"
        ],
        urlChangeDelay: 2e3,
        selectors: [
          "article section",
          "h2",
          "[aria-hidden='false'] pre",
          "article p"
        ],
        excludeSelectors: ["[aria-label='Post Preview Reading Time']"],
        globalStyles: {
          h2: "-webkit-line-clamp: unset;max-height:unset;",
          "article p": "-webkit-line-clamp: unset;max-height:unset;"
        }
      },
      {
        selectorMatches: [
          "meta[property='og:site_name'][content='Nitter']"
        ],
        selectors: [".tweet-content", ".quote-text"]
      },
      {
        matches: "*.fandom.com",
        additionalSelectors: [".mcf-card-article__title"]
      },
      {
        matches: ["www.washingtonpost.com"],
        additionalSelectors: ["[data-qa='article-body']"]
      },
      {
        matches: "www.economist.com",
        extraInlineSelectors: "span[data-caps='initial']"
      },
      {
        matches: "www.healthline.com",
        excludeSelectors: ".icon-hl-trusted-source-after"
      },
      {
        matches: "www.amazon.com",
        selectors: [
          "h1",
          "h2 > a > span",
          "[data-a-expander-name='book_description_expander'] > div",
          "[data-feature-name='editorialReviews']",
          '[data-a-expander-name="review_text_read_more"] > div > span',
          '[data-feature-name="featurebullets"]',
          '[data-feature-name="aplus"'
        ],
        excludeBlockSelectors: [
          "div.reviewText > span"
        ],
        globalStyles: {
          ".s-line-clamp-2": "-webkit-line-clamp: unset;max-height: unset;",
          "[data-a-expander-name='review_text_read_more']": " max-height: unset;"
        }
      },
      {
        matches: "www.bloomberg.com",
        urlChangeDelay: 2e3
      },
      {
        matches: "xueshu.baidu.com",
        globalStyles: {
          ".abstract_wr": "height: unset; overflow: visible; max-height:unset;"
        }
      },
      {
        matches: "www.sciencedirect.com",
        urlChangeDelay: 2e3,
        stayOriginalSelectors: ["span.display"]
      },
      {
        matches: "www.thehighestofthemountains.com",
        extraBlockSelectors: "div"
      },
      {
        matches: "telegra.ph",
        normalizeBody: "div.ql-editor[contenteditable='false']"
      },
      {
        matches: ["*.annas-archive.org", "annas-archive.org"],
        selectors: [
          "h3.text-xl.font-bold",
          "div[class='truncate text-sm']"
        ],
        globalStyles: {
          "div[id^='link-index-']": "height: unset; max-height: unset;"
        },
        normalizeBody: "body",
        extraBlockSelectors: ["a.custom-a"]
      },
      {
        matches: [
          "explainshell.com"
        ],
        selectors: [
          "[class='help-box']"
        ]
      },
      {
        matches: ["apnews.com"],
        urlChangeDelay: 2e3
      },
      {
        matches: "play.google.com",
        additionalSelectors: ["header[data-review-id] + div"]
      },
      {
        matches: ["www.tumblr.com"],
        selectors: [
          "article h1",
          "article > header + div",
          "[data-testid=notes-root] p",
          "div.k31gt",
          "p",
          "article ul",
          "article h2",
          "article h3",
          "article h4",
          "article h5",
          "article h6",
          "article blockquote",
          "article ol"
        ],
        excludeSelectors: ["div.fAAi8", "div.wvu3V"],
        preWhitespaceDetectedTags: ["DIV", "SPAN", "P"]
      },
      {
        matches: ["mail.qq.com/cgi-bin/frame_html"],
        selectors: ["#thisiddoesnotexists"]
      },
      {
        matches: "www.foxnews.com",
        shadowRootSelectors: [
          "[data-spot-im-module-default-area='conversation'] > div"
        ],
        excludeSelectors: [
          ".components-MessageDetails-index__message-details-wrapper",
          "div[class^=SlideDown__container]",
          ".components-MessageActions-index__messageActionsWrapper",
          "span[data-openweb-allow-amp]",
          "div.spcv_typing-users"
        ]
      },
      {
        matches: "www.afreecatv.com",
        globalStyles: {
          "a.title": "max-height:unset;-webkit-line-clamp:unset;"
        }
      },
      {
        matches: "opennet.ru",
        excludeTags: [
          "TITLE",
          "SCRIPT",
          "STYLE",
          "TEXTAREA",
          "SVG",
          "svg",
          "NOSCRIPT",
          "INPUT",
          "BUTTON",
          "BASE",
          "LABEL",
          "SELECT",
          "OPTION",
          "IMG",
          "SUB",
          "SUP",
          "HR",
          "PRE",
          "CODE",
          "KBD",
          "WBR",
          "TT",
          "RT",
          "RP",
          "META"
        ]
      },
      {
        matches: "getpocket.com",
        selectors: ["h2.title", "div.excerpt p", "main > article"],
        globalStyles: {
          "h2.title": "max-height:unset;-webkit-line-clamp:unset;",
          "div.excerpt p": "max-height:unset;-webkit-line-clamp:unset;"
        }
      },
      {
        matches: "huggingface.co",
        globalStyles: {
          ".line-clamp-2": "-webkit-line-clamp:unset;max-height:unset;"
        }
      },
      {
        matches: "www.statista.com",
        globalStyles: {
          ".itemContent__text": "height:unset;max-height:unset;",
          ".itemContent__subline": "height:unset;max-height:unset;"
        }
      },
      {
        matches: "epub-reader.online",
        globalStyles: {
          "span.slide-contents-item-label": "overflow:visible;max-height:unset;white-space:normal;"
        },
        atomicBlockSelectors: "div.slide-contents-item"
      },
      {
        matches: "https://you.com/search",
        globalStyles: {
          h3: "max-height:unset;-webkit-line-clamp:unset;",
          ".caKYaC": "max-height:unset;-webkit-line-clamp:unset;",
          ".dDwDsu": "max-height:unset;-webkit-line-clamp:unset;"
        },
        excludeSelectors: "div.hpIWZO"
      },
      {
        matches: "chat.openai.com",
        excludeSelectors: [
          "div.absolute.bottom-0.left-0.w-full",
          "h1",
          "div#headlessui-portal-root"
        ]
      },
      {
        matches: "glasp.co",
        excludeSelectors: [
          ".home_overview_list_content_wrapper"
        ]
      },
      {
        matches: "developer.chrome.com",
        excludeSelectors: ["web-tabs", "ul.code-sections--summary"]
      },
      {
        matches: "https://rarbg.to/*",
        wrapperPrefix: "",
        wrapperSuffix: "",
        globalStyles: {
          ".lista2 h2": "line-height: 14px;"
        },
        selectors: [
          "#news_content",
          "#top_news > table > tbody > tr > td:nth-child(1) > table > tbody > tr > td > table > tbody > tr > td",
          "#top_news > table > tbody > tr > td > table > tbody > tr > td > h2",
          "body > table > tbody > tr > td > div > table > tbody > tr > td > b",
          "#newsRight > table> tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td",
          "#newsRight > table > tbody > tr > td:nth-child(2) > table > tbody > tr > td > span > b"
        ]
      },
      {
        matches: ["developer.android.google.cn", "developer.android.com"],
        additionalSelectors: ["aside.note"]
      }
    ]
  };

  // utils/array.ts
  function arrayOrGenericToArray(arrayOrGeneric) {
    return Array.isArray(arrayOrGeneric) ? arrayOrGeneric : arrayOrGeneric ? [arrayOrGeneric] : [];
  }
  function addToUniqueArray(item, array) {
    return array ? (Array.isArray(array) || (array = [array]), Array.from(/* @__PURE__ */ new Set([...array, item]))) : [item];
  }
  function removeFromArray(item, array) {
    return array ? (Array.isArray(item) || (item = [item]), Array.isArray(array) || (array = [array]), array.filter((i3) => !item.includes(i3))) : [];
  }

  // utils/merge_rule.ts
  function mergeRule(generalRule, rule) {
    let arrayKeys = [], allRuleKeys = Object.keys(
      generalRule
    );
    for (let key of allRuleKeys) {
      let value = generalRule[key];
      Array.isArray(value) && arrayKeys.push(key);
    }
    let finalRule = {
      ...generalRule
    };
    return Object.keys(rule).forEach((key) => {
      let value = rule[key];
      if (value !== void 0)
        if (!arrayKeys.includes(key))
          finalRule[key] = value;
        else if (key.startsWith("additional")) {
          let userValue = arrayOrGenericToArray(value);
          finalRule[key] = Array.from(
            // @ts-ignore: ignore type error
            /* @__PURE__ */ new Set([...finalRule[key], ...userValue])
          );
        } else
          finalRule[key] = arrayOrGenericToArray(value);
    }), finalRule;
  }

  // config.ts
  function getEnvUserConfig() {
    if (env.PROD === "1")
      return {};
    let defaultUserConfig = {};
    if (env.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID && env.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY) {
      let tencentAuthConfig = {
        secretId: env.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,
        secretKey: env.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY
      };
      defaultUserConfig.translationServices = {}, defaultUserConfig.translationServices.tencent = tencentAuthConfig;
    }
    if (env.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID && env.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY) {
      let baiduAuthConfig = {
        appid: env.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,
        key: env.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY
      };
      defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.baidu = baiduAuthConfig;
    }
    if (env.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN) {
      let caiyunAuthConfig = {
        token: env.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN
      };
      defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.caiyun = caiyunAuthConfig;
    }
    if (env.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY) {
      let openlAuthConfig = {
        apikey: env.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY
      };
      defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.openl = openlAuthConfig;
    }
    if (env.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID && env.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET) {
      let youdaoAuthConfig = {
        appId: env.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,
        appSecret: env.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET
      };
      defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.youdao = youdaoAuthConfig;
    }
    if (env.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID && env.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY) {
      let volcAuthConfig = {
        accessKeyId: env.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,
        secretAccessKey: env.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY
      };
      defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.volc = volcAuthConfig;
    }
    if (env.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY) {
      let deeplAuthConfig = {
        authKey: env.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY
      };
      defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.deepl = deeplAuthConfig;
    }
    return env.IMMERSIVE_TRANSLATE_SERVICE && (defaultUserConfig.translationService = env.IMMERSIVE_TRANSLATE_SERVICE), env.DEEPL_PROXY_ENDPOINT && (defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.deepl || (defaultUserConfig.translationServices.deepl = {}), defaultUserConfig.translationServices.deepl.immersiveTranslateApiUrl = env.DEEPL_PROXY_ENDPOINT), env.DEBUG === "1" && (defaultUserConfig.debug = !0, defaultUserConfig.cache = !1, defaultUserConfig.alpha = !0), env.MOCK === "1" && (defaultUserConfig.translationService = "mock"), defaultUserConfig;
  }
  async function getLocalConfig() {
    let localConfig2 = await browserAPI.storage.local.get(localConfigStorageKey);
    if (localConfig2[localConfigStorageKey]) {
      let currentConfig = localConfig2[localConfigStorageKey], currentTempTranslationDomains = currentConfig.tempTranslationUrlMatches || [], newDomains = currentTempTranslationDomains.filter(
        (item) => item.expiredAt > Date.now()
      ), isChanged = !1;
      newDomains.length !== currentTempTranslationDomains.length && (currentTempTranslationDomains = newDomains, isChanged = !0);
      let newLocalConfig = {
        ...currentConfig,
        tempTranslationUrlMatches: [
          ...currentTempTranslationDomains
        ]
      };
      return isChanged && await setLocalConfig(newLocalConfig), newLocalConfig;
    } else
      return {};
  }
  async function setLocalConfig(localConfig2) {
    await browserAPI.storage.local.set({ [localConfigStorageKey]: localConfig2 });
  }
  async function setBuildinConfig(buildinConfig) {
    await browserAPI.storage.local.set({ [buildinConfigStorageKey]: buildinConfig });
  }
  async function getConfig() {
    let storageBuildInConfig = await browserAPI.storage.local.get(
      buildinConfigStorageKey
    ), finalBuildInConfig = {
      ...buildin_config_default,
      buildinConfigUpdatedAt: env.BUILD_TIME
    };
    if (storageBuildInConfig[buildinConfigStorageKey]) {
      let storageBuildInConfigValue = storageBuildInConfig[buildinConfigStorageKey];
      if (storageBuildInConfigValue && storageBuildInConfigValue.buildinConfigUpdatedAt) {
        let storageBuildinConfigUpdatedAt = new Date(
          storageBuildInConfigValue.buildinConfigUpdatedAt
        ), buildinConfigUpdatedAt = new Date(
          finalBuildInConfig.buildinConfigUpdatedAt
        );
        storageBuildinConfigUpdatedAt > buildinConfigUpdatedAt && (finalBuildInConfig = storageBuildInConfigValue);
      }
    }
    let shortcutsFromBrowser = {};
    if (!isMonkey() && browserAPI.commands && browserAPI.commands.getAll) {
      let commandResult = await browserAPI.commands.getAll();
      for (let command of commandResult)
        command.name && command.shortcut && (shortcutsFromBrowser[command.name] = command.shortcut);
    }
    let defaultConfig = getBuildInConfig(), envUserConfig = getEnvUserConfig(), userConfig = await getUserConfig(), globalUserConfig = globalThis.IMMERSIVE_TRANSLATE_CONFIG || {}, localConfig2 = await getLocalConfig(), now = /* @__PURE__ */ new Date();
    if (localConfig2 && localConfig2.tempTranslationUrlMatches && localConfig2.tempTranslationUrlMatches.length > 0) {
      let validUrlMatches = localConfig2.tempTranslationUrlMatches.filter(
        (urlMatch) => new Date(urlMatch.expiredAt) > now
      );
      if (validUrlMatches.length > 0) {
        let currentMatches = userConfig.translationUrlPattern ? userConfig.translationUrlPattern?.matches || [] : [], currentMatchesArray = Array.isArray(currentMatches) ? currentMatches : [currentMatches], finalMatches = Array.from(
          new Set(
            currentMatchesArray.concat(
              validUrlMatches.map((urlMatch) => urlMatch.match)
            )
          )
        );
        userConfig.translationUrlPattern = {
          ...userConfig.translationUrlPattern,
          matches: finalMatches
        };
      }
    }
    let mergedUserConfig = Object.assign(
      {},
      globalUserConfig,
      envUserConfig,
      userConfig
    );
    if (!mergedUserConfig.interfaceLanguage) {
      let defaultInterfaceLanguage = await getBrowserIntefaceLanguage();
      mergedUserConfig.interfaceLanguage = defaultInterfaceLanguage;
    }
    let finalConfig = Object.assign(defaultConfig, finalBuildInConfig), configKeys = Object.keys(finalConfig), assignKeys = [
      "translationUrlPattern",
      "translationLanguagePattern",
      "immediateTranslationPattern",
      "translationBodyAreaPattern",
      "translationParagraphLanguagePattern",
      "translationThemePatterns",
      "translationGeneralConfig",
      "shortcuts"
    ];
    for (let key of configKeys) {
      let configKey = key;
      if (configKey === "generalRule")
        typeof mergedUserConfig[configKey] == "object" && (finalConfig[configKey] = mergeRule(
          defaultConfig[configKey],
          mergedUserConfig[configKey]
        ));
      else if (configKey === "translationServices") {
        let userConfigValue = mergedUserConfig[configKey] || {}, buildInConfigValue = finalBuildInConfig[configKey] || {}, buildInConfigKeys = Object.keys(buildInConfigValue), userConfigKeys = Object.keys(userConfigValue), allUniqueKeys = [
          .../* @__PURE__ */ new Set([...buildInConfigKeys, ...userConfigKeys])
        ], finalConfigValue = {};
        for (let key2 of allUniqueKeys)
          finalConfigValue[key2] = {
            // @ts-ignore: it's ok
            ...buildInConfigValue[key2],
            ...userConfigValue[key2]
          };
        finalConfig[configKey] = finalConfigValue;
      } else if (typeof mergedUserConfig[configKey] != "string" && typeof mergedUserConfig[configKey] != "boolean" && typeof mergedUserConfig[configKey] != "number" && assignKeys.includes(configKey))
        mergedUserConfig[configKey] && (finalConfig[configKey] = Object.assign(
          // @ts-ignore: ignore type error
          finalConfig[configKey],
          mergedUserConfig[configKey]
        )), configKey === "shortcuts" && (finalConfig[configKey] = {
          ...finalConfig[configKey],
          ...shortcutsFromBrowser
        });
      else if (configKey === "rules") {
        if (Array.isArray(mergedUserConfig[configKey]) && (finalConfig[configKey] = [
          ...mergedUserConfig[configKey],
          ...finalConfig[configKey]
        ]), env.PROD === "0" && env.DEV_RULES) {
          let devRules = JSON.parse(env.DEV_RULES);
          finalConfig[configKey] = [
            ...devRules,
            ...finalConfig[configKey]
          ];
        }
      } else
        mergedUserConfig[configKey] !== void 0 && (finalConfig[configKey] = mergedUserConfig[configKey]);
    }
    return finalConfig.donateUrl = finalBuildInConfig.donateUrl, finalConfig.minVersion = finalBuildInConfig.minVersion, finalConfig.feedbackUrl = finalBuildInConfig.feedbackUrl, finalConfig;
  }
  async function getUserConfig() {
    return (await browserAPI.storage.sync.get("userConfig") || {}).userConfig || {};
  }
  var getBrowserIntefaceLanguage = async () => {
    let defaultInterfaceLanguage = (await browserAPI.i18n.getAcceptLanguages()).map((lang) => formatLanguage(lang)).find((lang) => translations[lang]);
    return defaultInterfaceLanguage || "en";
  }, getBuildInConfig = () => {
    let finalBuildInConfig = {
      ...buildin_config_default,
      buildinConfigUpdatedAt: env.BUILD_TIME
    };
    return {
      ...finalBuildInConfig,
      targetLanguage: fallbackLanguage,
      interfaceLanguage: "en",
      debug: !1,
      alpha: !1,
      translationUrlPattern: {
        matches: [],
        excludeMatches: []
      },
      translationLanguagePattern: {
        matches: [],
        excludeMatches: []
      },
      translationThemePatterns: {},
      translationParagraphLanguagePattern: {
        matches: [],
        excludeMatches: [],
        selectorMatches: [],
        excludeSelectorMatches: []
      },
      translationBodyAreaPattern: {
        matches: [],
        excludeMatches: [],
        selectorMatches: [],
        excludeSelectorMatches: []
      },
      translationTheme: "none",
      translationService: "google",
      translationArea: "main",
      translationStartMode: "dynamic",
      translationServices: {},
      generalRule: {
        ...finalBuildInConfig.generalRule
      },
      translationGeneralConfig: { engine: "google" },
      rules: []
    };
  };

  // errors.ts
  var CommonError = class extends Error {
    constructor(name, message, details) {
      super(message);
      this.name = name, details && (this.details = details);
    }
  };

  // browser/request.ts
  async function request(options2) {
    let response;
    if (options2 && options2.retry && options2.retry > 0)
      try {
        response = await retry(rawRequest.bind(null, options2), {
          multiplier: 2,
          maxAttempts: options2.retry
        });
      } catch (e3) {
        throw e3 && e3.name === "RetryError" && e3.cause ? e3.cause : e3;
      }
    else
      response = await rawRequest(options2);
    return response;
  }
  async function rawRequest(options2) {
    options2.body;
    let { url, responseType, ...fetchOptions } = options2;
    responseType || (responseType = "json"), fetchOptions = {
      mode: "cors",
      ...fetchOptions
    };
    let response = await (options2.fetchPolyfill || fetch)(url, fetchOptions);
    if (response.ok && response.status >= 200 && response.status < 400) {
      if (responseType === "json")
        return await response.json();
      if (responseType === "text")
        return await response.text();
      if (responseType === "raw") {
        let data = await response.text(), responseHeaders = Object.fromEntries([
          ...response.headers.entries()
        ]), finalUrl = response.url;
        return finalUrl || (response.headers.get("X-Final-URL") ? finalUrl = response.headers.get("X-Final-URL") : finalUrl = url), {
          body: data,
          headers: responseHeaders,
          status: response.status,
          statusText: response.statusText,
          url: finalUrl
        };
      }
    } else {
      let details;
      try {
        details = await response.text();
      } catch (_e3) {
        log_default.error("parse response failed", _e3);
      }
      throw details && log_default.error("fail response", details), new CommonError(
        "fetchError",
        response.status + ": " + response.statusText || "",
        details
      );
    }
  }

  // utils/md5.js
  function safeAdd(x5, y4) {
    var lsw = (x5 & 65535) + (y4 & 65535), msw = (x5 >> 16) + (y4 >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 65535;
  }
  function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  }
  function md5cmn(q6, a6, b4, x5, s6, t5) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a6, q6), safeAdd(x5, t5)), s6), b4);
  }
  function md5ff(a6, b4, c5, d4, x5, s6, t5) {
    return md5cmn(b4 & c5 | ~b4 & d4, a6, b4, x5, s6, t5);
  }
  function md5gg(a6, b4, c5, d4, x5, s6, t5) {
    return md5cmn(b4 & d4 | c5 & ~d4, a6, b4, x5, s6, t5);
  }
  function md5hh(a6, b4, c5, d4, x5, s6, t5) {
    return md5cmn(b4 ^ c5 ^ d4, a6, b4, x5, s6, t5);
  }
  function md5ii(a6, b4, c5, d4, x5, s6, t5) {
    return md5cmn(c5 ^ (b4 | ~d4), a6, b4, x5, s6, t5);
  }
  function binlMD5(x5, len) {
    x5[len >> 5] |= 128 << len % 32, x5[(len + 64 >>> 9 << 4) + 14] = len;
    var i3, olda, oldb, oldc, oldd, a6 = 1732584193, b4 = -271733879, c5 = -1732584194, d4 = 271733878;
    for (i3 = 0; i3 < x5.length; i3 += 16)
      olda = a6, oldb = b4, oldc = c5, oldd = d4, a6 = md5ff(a6, b4, c5, d4, x5[i3], 7, -680876936), d4 = md5ff(d4, a6, b4, c5, x5[i3 + 1], 12, -389564586), c5 = md5ff(c5, d4, a6, b4, x5[i3 + 2], 17, 606105819), b4 = md5ff(b4, c5, d4, a6, x5[i3 + 3], 22, -1044525330), a6 = md5ff(a6, b4, c5, d4, x5[i3 + 4], 7, -176418897), d4 = md5ff(d4, a6, b4, c5, x5[i3 + 5], 12, 1200080426), c5 = md5ff(c5, d4, a6, b4, x5[i3 + 6], 17, -1473231341), b4 = md5ff(b4, c5, d4, a6, x5[i3 + 7], 22, -45705983), a6 = md5ff(a6, b4, c5, d4, x5[i3 + 8], 7, 1770035416), d4 = md5ff(d4, a6, b4, c5, x5[i3 + 9], 12, -1958414417), c5 = md5ff(c5, d4, a6, b4, x5[i3 + 10], 17, -42063), b4 = md5ff(b4, c5, d4, a6, x5[i3 + 11], 22, -1990404162), a6 = md5ff(a6, b4, c5, d4, x5[i3 + 12], 7, 1804603682), d4 = md5ff(d4, a6, b4, c5, x5[i3 + 13], 12, -40341101), c5 = md5ff(c5, d4, a6, b4, x5[i3 + 14], 17, -1502002290), b4 = md5ff(b4, c5, d4, a6, x5[i3 + 15], 22, 1236535329), a6 = md5gg(a6, b4, c5, d4, x5[i3 + 1], 5, -165796510), d4 = md5gg(d4, a6, b4, c5, x5[i3 + 6], 9, -1069501632), c5 = md5gg(c5, d4, a6, b4, x5[i3 + 11], 14, 643717713), b4 = md5gg(b4, c5, d4, a6, x5[i3], 20, -373897302), a6 = md5gg(a6, b4, c5, d4, x5[i3 + 5], 5, -701558691), d4 = md5gg(d4, a6, b4, c5, x5[i3 + 10], 9, 38016083), c5 = md5gg(c5, d4, a6, b4, x5[i3 + 15], 14, -660478335), b4 = md5gg(b4, c5, d4, a6, x5[i3 + 4], 20, -405537848), a6 = md5gg(a6, b4, c5, d4, x5[i3 + 9], 5, 568446438), d4 = md5gg(d4, a6, b4, c5, x5[i3 + 14], 9, -1019803690), c5 = md5gg(c5, d4, a6, b4, x5[i3 + 3], 14, -187363961), b4 = md5gg(b4, c5, d4, a6, x5[i3 + 8], 20, 1163531501), a6 = md5gg(a6, b4, c5, d4, x5[i3 + 13], 5, -1444681467), d4 = md5gg(d4, a6, b4, c5, x5[i3 + 2], 9, -51403784), c5 = md5gg(c5, d4, a6, b4, x5[i3 + 7], 14, 1735328473), b4 = md5gg(b4, c5, d4, a6, x5[i3 + 12], 20, -1926607734), a6 = md5hh(a6, b4, c5, d4, x5[i3 + 5], 4, -378558), d4 = md5hh(d4, a6, b4, c5, x5[i3 + 8], 11, -2022574463), c5 = md5hh(c5, d4, a6, b4, x5[i3 + 11], 16, 1839030562), b4 = md5hh(b4, c5, d4, a6, x5[i3 + 14], 23, -35309556), a6 = md5hh(a6, b4, c5, d4, x5[i3 + 1], 4, -1530992060), d4 = md5hh(d4, a6, b4, c5, x5[i3 + 4], 11, 1272893353), c5 = md5hh(c5, d4, a6, b4, x5[i3 + 7], 16, -155497632), b4 = md5hh(b4, c5, d4, a6, x5[i3 + 10], 23, -1094730640), a6 = md5hh(a6, b4, c5, d4, x5[i3 + 13], 4, 681279174), d4 = md5hh(d4, a6, b4, c5, x5[i3], 11, -358537222), c5 = md5hh(c5, d4, a6, b4, x5[i3 + 3], 16, -722521979), b4 = md5hh(b4, c5, d4, a6, x5[i3 + 6], 23, 76029189), a6 = md5hh(a6, b4, c5, d4, x5[i3 + 9], 4, -640364487), d4 = md5hh(d4, a6, b4, c5, x5[i3 + 12], 11, -421815835), c5 = md5hh(c5, d4, a6, b4, x5[i3 + 15], 16, 530742520), b4 = md5hh(b4, c5, d4, a6, x5[i3 + 2], 23, -995338651), a6 = md5ii(a6, b4, c5, d4, x5[i3], 6, -198630844), d4 = md5ii(d4, a6, b4, c5, x5[i3 + 7], 10, 1126891415), c5 = md5ii(c5, d4, a6, b4, x5[i3 + 14], 15, -1416354905), b4 = md5ii(b4, c5, d4, a6, x5[i3 + 5], 21, -57434055), a6 = md5ii(a6, b4, c5, d4, x5[i3 + 12], 6, 1700485571), d4 = md5ii(d4, a6, b4, c5, x5[i3 + 3], 10, -1894986606), c5 = md5ii(c5, d4, a6, b4, x5[i3 + 10], 15, -1051523), b4 = md5ii(b4, c5, d4, a6, x5[i3 + 1], 21, -2054922799), a6 = md5ii(a6, b4, c5, d4, x5[i3 + 8], 6, 1873313359), d4 = md5ii(d4, a6, b4, c5, x5[i3 + 15], 10, -30611744), c5 = md5ii(c5, d4, a6, b4, x5[i3 + 6], 15, -1560198380), b4 = md5ii(b4, c5, d4, a6, x5[i3 + 13], 21, 1309151649), a6 = md5ii(a6, b4, c5, d4, x5[i3 + 4], 6, -145523070), d4 = md5ii(d4, a6, b4, c5, x5[i3 + 11], 10, -1120210379), c5 = md5ii(c5, d4, a6, b4, x5[i3 + 2], 15, 718787259), b4 = md5ii(b4, c5, d4, a6, x5[i3 + 9], 21, -343485551), a6 = safeAdd(a6, olda), b4 = safeAdd(b4, oldb), c5 = safeAdd(c5, oldc), d4 = safeAdd(d4, oldd);
    return [a6, b4, c5, d4];
  }
  function binl2rstr(input) {
    var i3, output = "", length32 = input.length * 32;
    for (i3 = 0; i3 < length32; i3 += 8)
      output += String.fromCharCode(input[i3 >> 5] >>> i3 % 32 & 255);
    return output;
  }
  function rstr2binl(input) {
    var i3, output = [];
    for (output[(input.length >> 2) - 1] = void 0, i3 = 0; i3 < output.length; i3 += 1)
      output[i3] = 0;
    var length8 = input.length * 8;
    for (i3 = 0; i3 < length8; i3 += 8)
      output[i3 >> 5] |= (input.charCodeAt(i3 / 8) & 255) << i3 % 32;
    return output;
  }
  function rstrMD5(s6) {
    return binl2rstr(binlMD5(rstr2binl(s6), s6.length * 8));
  }
  function rstrHMACMD5(key, data) {
    var i3, bkey = rstr2binl(key), ipad = [], opad = [], hash;
    for (ipad[15] = opad[15] = void 0, bkey.length > 16 && (bkey = binlMD5(bkey, key.length * 8)), i3 = 0; i3 < 16; i3 += 1)
      ipad[i3] = bkey[i3] ^ 909522486, opad[i3] = bkey[i3] ^ 1549556828;
    return hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8), binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
  }
  function rstr2hex(input) {
    var hexTab = "0123456789abcdef", output = "", x5, i3;
    for (i3 = 0; i3 < input.length; i3 += 1)
      x5 = input.charCodeAt(i3), output += hexTab.charAt(x5 >>> 4 & 15) + hexTab.charAt(x5 & 15);
    return output;
  }
  function str2rstrUTF8(input) {
    return unescape(encodeURIComponent(input));
  }
  function rawMD5(s6) {
    return rstrMD5(str2rstrUTF8(s6));
  }
  function hexMD5(s6) {
    return rstr2hex(rawMD5(s6));
  }
  function rawHMACMD5(k5, d4) {
    return rstrHMACMD5(str2rstrUTF8(k5), str2rstrUTF8(d4));
  }
  function hexHMACMD5(k5, d4) {
    return rstr2hex(rawHMACMD5(k5, d4));
  }
  function md5(string, key, raw) {
    return key ? raw ? rawHMACMD5(key, string) : hexHMACMD5(key, string) : raw ? rawMD5(string) : hexMD5(string);
  }

  // services/util.ts
  function splitSentences(sentences, maxLength, maxGroupLength) {
    let tempSentences = splitStentenceWithMaxLength(sentences, maxLength), tempSentenceGroups = [], tempGroup = {
      from: sentences[0].from,
      fromByClient: sentences[0].fromByClient,
      to: sentences[0].to,
      tempSentences: [],
      url: sentences[0].url
    };
    for (let tempSentence of tempSentences)
      (tempGroup.tempSentences.reduce(
        (acc, cur) => acc + cur.text.length,
        0
      ) + tempSentence.text.length > maxLength || tempGroup.tempSentences.length >= maxGroupLength) && (tempSentenceGroups.push(tempGroup), tempGroup = {
        fromByClient: tempGroup.fromByClient,
        from: tempSentence.from,
        to: tempSentence.to,
        tempSentences: [],
        url: tempSentence.url
      }), (tempGroup.from !== tempSentence.from || tempGroup.to !== tempSentence.to) && (tempGroup.tempSentences.length > 0 ? (tempSentenceGroups.push(tempGroup), tempGroup = {
        fromByClient: tempGroup.fromByClient,
        from: tempSentence.from,
        to: tempSentence.to,
        tempSentences: [],
        url: tempSentence.url
      }) : (tempGroup.from = tempSentence.from, tempGroup.to = tempSentence.to)), tempGroup.tempSentences.push(tempSentence);
    return tempGroup.tempSentences.length > 0 && tempSentenceGroups.push(tempGroup), tempSentenceGroups;
  }
  function splitStentenceWithMaxLength(sentences, maxLength) {
    let allTempSentences = [];
    for (let i3 = 0; i3 < sentences.length; i3++) {
      let currentSentence = sentences[i3], { from, to, text, url } = currentSentence, textArrSplitedByNewLine = text.split(/\r?\n/), currentTempSentences = [], currentPrefix = "";
      for (let j6 = 0; j6 < textArrSplitedByNewLine.length; j6++) {
        let currentText = textArrSplitedByNewLine[j6];
        if (currentText === "") {
          currentTempSentences.length > 0 ? j6 < textArrSplitedByNewLine.length - 1 && (currentTempSentences[currentTempSentences.length - 1].suffix += `
`) : currentPrefix += `
`;
          continue;
        } else if (currentText.length > maxLength) {
          let tempSplitedSentences = [];
          splitSentence(currentText, maxLength, tempSplitedSentences);
          for (let k5 = 0; k5 < tempSplitedSentences.length; k5++) {
            let tempSentence = tempSplitedSentences[k5], { text: text2, prefix, suffix } = tempSentence;
            currentTempSentences.push({
              from,
              to,
              text: text2,
              prefix,
              suffix,
              index: i3,
              url
            });
          }
        } else
          currentTempSentences.push({
            text: currentText,
            prefix: currentPrefix,
            suffix: "",
            from,
            to,
            index: i3,
            url
          });
        currentTempSentences.length > 0 && j6 < textArrSplitedByNewLine.length - 1 && (currentTempSentences[currentTempSentences.length - 1].suffix += `
`);
      }
      allTempSentences.push(...currentTempSentences);
    }
    return allTempSentences;
  }
  function isSameTargetLanguage(sourceLanguage, targetLanguage) {
    let finalSourceLanguage = formatLanguage(sourceLanguage), finalTargetLanguage = formatLanguage(targetLanguage), isSame = finalSourceLanguage === finalTargetLanguage;
    return isSame ? !0 : (isSame = finalSourceLanguage.startsWith("zh") && finalTargetLanguage.startsWith("zh"), isSame);
  }
  function splitSentence(text, maxLength, sentences) {
    let boundaryIndex = [".", "?", "!", "\u3002", "\uFF1F", "\uFF01"].reduce((acc, boundary) => {
      let index = text.lastIndexOf(boundary, maxLength);
      return index > acc ? index : acc;
    }, -1);
    if (boundaryIndex === -1)
      sentences.push({
        text: text.slice(0, maxLength),
        prefix: "",
        suffix: ""
      }), text.length > maxLength && splitSentence(text.slice(maxLength), maxLength, sentences);
    else {
      let theText = text.slice(0, boundaryIndex + 1);
      theText.startsWith(" ") ? sentences.push({
        text: theText.slice(1),
        prefix: " ",
        suffix: ""
      }) : sentences.push({
        text: theText,
        prefix: "",
        suffix: ""
      }), boundaryIndex + 1 < text.length && splitSentence(text.slice(boundaryIndex + 1), maxLength, sentences);
    }
    return sentences;
  }
  function mergeUrl(defaultUrl, customUrl) {
    let defaultUrlObj = new URL(defaultUrl);
    customUrl.startsWith("http") || (customUrl = "https://" + customUrl);
    let customUrlObj = new URL(customUrl);
    return customUrlObj.pathname !== "/" ? customUrlObj.toString() : (defaultUrlObj.host = customUrlObj.host, customUrlObj.port && (defaultUrlObj.port = customUrlObj.port), customUrlObj.protocol && (defaultUrlObj.protocol = customUrlObj.protocol), customUrlObj.username && (defaultUrlObj.username = customUrlObj.username), customUrlObj.password && (defaultUrlObj.password = customUrlObj.password), defaultUrlObj.toString());
  }

  // services/cache.ts
  var dbNames = [];
  async function openIndexedDB(dbName, _storageName) {
    return await new Promise((resolve, reject) => {
      let name = dbName, version = 1, request3 = indexedDB.open(name, version);
      request3.onsuccess = (_event) => {
        resolve(request3.result);
      }, request3.onerror = (event) => {
        console.error(
          "onerror: Error opening the database, switching to non-database mode",
          event
        ), reject();
      }, request3.onupgradeneeded = (_event) => {
        let db = request3.result, storageName = _storageName || "cache";
        db.createObjectStore(storageName, {
          keyPath: "key"
        });
      };
    });
  }
  async function setParagraphCache(payload) {
    let storageName = `${brandId}-${payload.service}@${payload.from}->${payload.to}`;
    return await addInDB(storageName, payload);
  }
  async function queryParagraphCache(payload) {
    let payload_hash = md5(payload.originalText), storageName = `${brandId}-${payload.service}@${payload.from}->${payload.to}`;
    return await queryInDB(storageName, payload_hash);
  }
  async function queryInDB(dbName, origTextHash) {
    let db = await openIndexedDB(dbName);
    return await new Promise((resolve, reject) => {
      if (!db)
        return reject();
      let storageName = "cache", request3 = db.transaction([storageName], "readonly").objectStore(storageName).get(origTextHash);
      request3.onsuccess = (_event) => {
        db.close();
        let result = request3.result;
        resolve(result);
      }, request3.onerror = (event) => {
        db.close(), console.error("queryInDB->onerror:", event), reject();
      };
    });
  }
  async function addInDB(dbName, cacheEntry) {
    let db = await openIndexedDB(dbName);
    return (await getAllDBNames()).includes(dbName) || await addCacheList(dbName), await new Promise((resolve) => {
      if (!db)
        return resolve(!1);
      let storageName = "cache", request3 = db.transaction([storageName], "readwrite").objectStore(storageName).put(cacheEntry);
      request3.onsuccess = (_event) => {
        db.close(), resolve(!0);
      }, request3.onerror = (event) => {
        console.error("addInDB->onerror:", event), db.close(), resolve(!1);
      };
    });
  }
  async function addCacheList(dbName) {
    let storageName = "cache_list", db = await openIndexedDB(brandId + "-cacheList", storageName), request3 = db.transaction([storageName], "readwrite").objectStore(storageName).put({ key: dbName });
    request3.onsuccess = (_event) => {
      db.close(), dbNames.push(dbName);
    }, request3.onerror = (event) => {
      db.close(), console.error(event);
    };
  }
  async function getAllDBNames() {
    if (dbNames && dbNames.length > 0)
      return dbNames;
    let db = await openIndexedDB(brandId + "-cacheList", "cache_list");
    return dbNames = await new Promise((resolve) => {
      let storageName = "cache_list", request3 = db.transaction([storageName], "readonly").objectStore(storageName).getAllKeys();
      request3.onsuccess = (_event) => {
        db.close(), resolve(request3.result);
      }, request3.onerror = (event) => {
        db.close(), console.error(event), resolve([]);
      };
    }), dbNames;
  }

  // dom/current_language.ts
  var currentPageLanguage = "auto", currentPageLanguageByClient = "auto", currentPageLanguageByRemote = "auto";
  function setCurrentPageLanguage(lang) {
    currentPageLanguage = lang;
  }
  function setCurrentPageLanguageByClient(lang) {
    currentPageLanguageByClient = lang;
  }
  function getCurrentPageLanguage() {
    return currentPageLanguageByClient !== "auto" ? currentPageLanguageByClient : currentPageLanguageByRemote !== "auto" ? currentPageLanguageByRemote : currentPageLanguage;
  }
  function getCurrentPageLanguageByClient() {
    return currentPageLanguageByClient;
  }

  // messager.ts
  var listeners2 = /* @__PURE__ */ new Map(), Messager = class {
    constructor(fromType, debug = !1) {
      this.logger = new Logger(), debug && this.logger.setLevel("debug"), this.fromType = fromType, listeners2.has(fromType) || (listeners2.set(fromType, /* @__PURE__ */ new Map()), browserAPI.runtime.onMessage.addListener(
        // @ts-ignore: it's ok
        (message, sender, sendResponse) => {
          let from = message.from, to = message.to, tabId, tabUrl, tabActive;
          sender.tab && sender.tab.id && (tabId = sender.tab.id, from = `${from}:${tabId}`, tabUrl = sender.tab.url, tabActive = sender.tab.active), this.logger.debug(
            `${message.to} received message [${message.payload.method}] from ${message.from}`,
            message.payload.data ? message.payload.data : " "
          );
          let parsedTo = parseType(to), { type: toType, name: toName } = parsedTo;
          if (toType !== fromType)
            return !1;
          let parsedMessageFrom = parseType(from), connectionInfo = listeners2.get(toType).get(toName);
          if (!connectionInfo)
            return this.logger.debug(
              `no message handler for ${toType}:${to}, but it's ok`
            ), !1;
          let { messageHandler, sync } = connectionInfo, messageAuthor = {
            type: fromType,
            name: parsedMessageFrom.name,
            id: tabId,
            url: tabUrl,
            active: tabActive
          };
          if (sync) {
            try {
              let handlerResult = messageHandler(
                message.payload,
                messageAuthor
              );
              sendResponse({
                ok: !0,
                data: handlerResult
              });
            } catch (e3) {
              sendResponse({
                ok: !1,
                errorName: e3.name,
                errorMessage: e3.message,
                errorDetails: e3.details
              });
            }
            return !1;
          } else
            return messageHandler(
              message.payload,
              messageAuthor
            ).then((data) => {
              sendResponse({
                ok: !0,
                data
              });
            }).catch(
              (e3) => {
                sendResponse({
                  ok: !1,
                  errorName: e3.name,
                  errorMessage: e3.message,
                  errorDetails: e3.details
                });
              }
            ), !0;
        }
      ));
    }
    getConnection(name, messageHandler, options2) {
      let sync = !1;
      options2 && options2.sync && (sync = !0);
      let fromType = this.fromType, currentListeners = listeners2.get(fromType);
      if (currentListeners.has(name))
        return currentListeners.get(name).connectionInstance;
      {
        let connection2 = new Connection(`${fromType}:${name}`, this.logger);
        return listeners2.get(fromType).set(name, {
          messageHandler,
          sync,
          connectionInstance: connection2
        }), connection2;
      }
    }
  }, Connection = class {
    constructor(from, logger) {
      this.from = from, this.logger = logger;
    }
    async sendMessage(to, messagePayload) {
      let parsedTo = parseType(to), { type, id } = parsedTo;
      if (type !== "content_script") {
        let message = {
          to,
          from: this.from,
          payload: messagePayload
        };
        this.logger.debug(
          `${message.from} send message [${message.payload.method}] to ${message.to}`,
          message.payload.data ? message.payload.data : " "
        );
        try {
          let response = await browserAPI.runtime.sendMessage(message);
          return handleResponse(message, response, this.logger);
        } catch (e3) {
          if (type === "popup") {
            let errorMessage = `popup ${to} is not active, so the message does not send, ignore this error, ${JSON.stringify(messagePayload)}`;
            return this.logger.debug(
              errorMessage,
              messagePayload,
              to,
              e3
            ), Promise.resolve({
              message: errorMessage
            });
          } else
            throw e3;
        }
      } else {
        let message = {
          from: this.from,
          to,
          payload: messagePayload
        };
        this.logger.debug(
          `${message.from} send message [${message.payload.method}] to ${message.to}`,
          message.payload.data ? message.payload.data : " "
        );
        let response = await browserAPI.tabs.sendMessage(id, message);
        return handleResponse(message, response, this.logger);
      }
    }
  };
  function handleResponse(message, response, logger) {
    if (response.ok)
      return logger.debug(
        `${message.from} received response from ${message.to}:`,
        response.data ? response.data : " "
      ), response.data;
    throw new CommonError(
      response.errorName || "UnknownError",
      response.errorMessage || "Unknown error",
      response.errorDetails
    );
  }
  function parseType(str) {
    let parts = str.split(":");
    if (parts.length < 2)
      throw new Error("not a valid to string");
    let messageTo = {
      type: parts[0],
      name: parts[1]
    };
    if (parts[0] === "content_script") {
      let tabId = parseInt(parts[2]);
      if (!isNaN(tabId))
        messageTo.id = tabId;
      else
        throw new Error("tab id not a valid number");
    }
    return messageTo;
  }

  // content_message_listeners.ts
  var asyncMessageHandler = async function(payload, _author) {
    let { method, data } = payload;
    method === "translateTheWholePage" ? await translateTheWholePage() : method === "translateTheMainPage" ? await translateTheMainPage() : method === "translateToThePageEndImmediately" ? await translateToThePageEndImmediately() : method === "toggleTranslatePage" ? await toggleTranslatePage() : method === "toggleTranslateTheWholePage" ? await toggleTranslateTheWholePage() : method === "toggleTranslateTheMainPage" ? await toggleTranslateTheMainPage() : method === "translatePage" ? await translatePage() : method === "toggleTranslationMask" ? await toggleTranslationMask() : method === "restorePage" ? restorePage() : method === "showTranslationOnly" ? void 0 : method === "setCurrentPageLanguageByClient" && setCurrentPageLanguageByClient(data);
  }, syncMessageHandler = function(payload, _author) {
    let { method, data } = payload;
    if (log_default.debug(
      `content script received sync message: ${method}`,
      data || " "
    ), method === "ping")
      return "pong";
    if (method === "getPageStatus")
      return getPageStatus();
    if (method === "getCurrentPageLanguage")
      return getCurrentPageLanguage();
  }, connection, syncConnection;
  function setupMessageListeners() {
    let asyncConnection = getConnection();
    getIsInIframe() || getSyncConnection(), asyncConnection.sendMessage("popup:main_sync", { method: "ready" }).catch(
      (_e3) => {
      }
    );
  }
  function getConnection() {
    return connection || (connection = new Messager("content_script", !1).getConnection("main", asyncMessageHandler), connection);
  }
  function getSyncConnection() {
    return syncConnection || (syncConnection = new Messager("content_script", !1).getConnection("main_sync", syncMessageHandler, {
      sync: !0
    }), syncConnection);
  }

  // browser_proxy.ts
  async function sendMessage(options2) {
    return await getConnection().sendMessage(
      "background:main",
      options2
    );
  }
  function request2(options2) {
    return isMonkey() || isDeno() ? (options2.fetchPolyfill = globalThis.GM_fetch, request(options2)) : sendMessage({
      method: "fetch",
      data: options2
    });
  }
  function getConfig2() {
    return isMonkey() ? getConfig() : sendMessage(
      {
        method: "getConfig"
      }
    );
  }
  function getLocalConfig2() {
    return isMonkey() ? getLocalConfig() : sendMessage(
      {
        method: "getLocalConfig"
      }
    );
  }
  function setLocalConfig2(config) {
    return isMonkey() ? setLocalConfig(config) : sendMessage(
      {
        method: "setLocalConfig",
        data: config
      }
    );
  }
  function setBuildinConfig2(config) {
    return isMonkey() ? setBuildinConfig(config) : sendMessage(
      {
        method: "setBuildinConfig",
        data: config
      }
    );
  }
  function detectLanguage(options2) {
    if (options2.text) {
      let chineseLike = detectChinese(options2.text);
      if (chineseLike !== "auto")
        return Promise.resolve(chineseLike);
    }
    if (isMonkey()) {
      let result = browserAPI.extra.detectLanguage(
        options2.text,
        options2.minLength
      );
      return Promise.resolve(result);
    }
    return sendMessage(
      {
        method: "detectLanguage",
        data: options2
      }
    );
  }
  function detectTabLanguage() {
    return sendMessage(
      {
        method: "detectTabLanguage"
      }
    );
  }
  function sendPageTranslatedStatus(status) {
    if (isMonkey()) {
      let event = new CustomEvent(pageTranslatedStatusEventName, {
        detail: status
      });
      document.dispatchEvent(event);
      return;
    }
    getConnection().sendMessage("popup:main_sync", {
      method: "setPageStatus",
      data: status
    }).catch((_e3) => {
    });
  }
  function queryDb(query) {
    return isMonkey() ? queryParagraphCache(query) : sendMessage(
      {
        method: "queryParagraphCache",
        data: query
      }
    );
  }
  async function setDbStore(params) {
    if (isMonkey()) {
      await setParagraphCache(params);
      return;
    }
    return sendMessage(
      {
        method: "setParagraphCache",
        data: params
      }
    );
  }
  async function mockRequest() {
    if (isMonkey())
      return Promise.resolve();
    await sendMessage({
      method: "mockRequest"
    });
  }
  function openOptionsPage2(newTab = !1) {
    return isMonkey() ? (browserAPI.runtime.openOptionsPage(newTab), Promise.resolve()) : sendMessage({
      method: "openOptionsPage"
    });
  }
  function openAboutPage2(newTab = !1) {
    return isMonkey() ? (browserAPI.extra.openAboutPage(newTab), Promise.resolve()) : sendMessage({
      method: "openAboutPage"
    });
  }
  function autoSyncLatestConfig() {
    return isMonkey() ? (log_default.warn("autoSyncLatestConfig is not support in monkey"), Promise.resolve()) : sendMessage({
      method: "autoSyncLatestConfig"
    });
  }

  // dom/detect_page_language.ts
  async function detectPageLanguage() {
    let lang = "auto";
    return document.body && document.body.textContent && document.body.textContent.trim() && (lang = await detectLanguage({
      text: getMainText(document.body)
    })), lang === "auto" && document.documentElement && document.documentElement.lang && (lang = formatLanguage(document.documentElement.lang)), lang;
  }

  // dom/get_containers.ts
  function getContainers(root2, ctx) {
    if (!(root2 && root2.textContent && root2.textContent.trim()))
      return [];
    let { rule, state: { translationArea } } = ctx, contentContainers = [];
    if (translationArea === "body")
      return [root2];
    if (rule && rule.selectors.length > 0) {
      let containers = rule.selectors.map((selector) => {
        let isMatch = root2.matches(selector), elements = [];
        isMatch ? elements = [root2] : elements = root2.querySelectorAll(
          selector
        );
        for (let element of elements)
          isMarked(element, specifiedTargetContainerElementAttributeName) || setAttribute(
            element,
            specifiedTargetContainerElementAttributeName,
            "1"
          );
        return Array.from(elements);
      }).flat();
      contentContainers.push(
        ...containers.map((container) => ({
          element: container,
          reserve: !0
        }))
      );
    } else {
      if (rule && rule.additionalSelectors.length > 0) {
        let additionalElements = getElementsBySelectors(
          root2,
          rule.additionalSelectors
        );
        for (let element of additionalElements)
          isMarked(element, specifiedTargetContainerElementAttributeName) || setAttribute(
            element,
            specifiedTargetContainerElementAttributeName,
            "1"
          );
        contentContainers.push(
          ...additionalElements.map((element) => ({
            element,
            reserve: !0
          }))
        );
      }
      let articleElements = getElementsBySelectors(root2, ["article"]);
      contentContainers.push(
        ...articleElements.map((element) => ({
          element,
          reserve: !0
        }))
      );
      let mains;
      if (contentContainers.length === 0 && (mains = root2.querySelectorAll("[role=main]"), mains.length === 0 && (mains = root2.querySelectorAll("main")), mains.length === 0 && (mains = root2.querySelectorAll(".main")), mains.length > 0)) {
        let mainsArray = Array.from(mains);
        contentContainers = contentContainers.concat(
          mainsArray.map((main3) => ({
            element: main3,
            reserve: !0
          }))
        );
      }
      let detectedContainers = [], treeFilter = (node) => {
        if (node.nodeType === Node.ELEMENT_NODE && isExcludeElement(node, ctx.rule, !1))
          return NodeFilter.FILTER_REJECT;
        if (node.nodeType === Node.TEXT_NODE && (node.textContent ? node.textContent.trim() : "").length >= rule.containerMinTextCount) {
          let parentNode = node.parentNode;
          parentNode && parentNode.parentNode && (parentNode = parentNode.parentNode), parentNode && parentNode.nodeType === Node.ELEMENT_NODE && (detectedContainers.includes(parentNode) || detectedContainers.push(parentNode));
        }
        return NodeFilter.FILTER_ACCEPT;
      }, walk = document.createTreeWalker(
        root2,
        NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
        treeFilter
      );
      for (; walk.nextNode(); )
        ;
      contentContainers.push(
        ...detectedContainers.map((element) => ({
          element,
          reserve: !1
        }))
      );
    }
    let finalContainers = duplicatedElements(root2, contentContainers, rule);
    return finalContainers.sort(function(a6, b4) {
      return a6.compareDocumentPosition(b4) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    }), finalContainers;
  }

  // dom/unmount.ts
  var cleanQueue = [];
  function addToUnmountQueue(fn) {
    cleanQueue.push(fn);
  }
  function clean() {
    cleanQueue.forEach((fn) => fn()), cleanQueue = [];
  }

  // dom/elements_to_paragraph.ts
  function elementsToParagraph(elements, isPreWhitespace, rootFrame, ctx) {
    let variables = [], { rule } = ctx, delimiters = getPlaceholderDelimiters(ctx);
    if (elements.length === 0)
      return null;
    elements = elements.map(
      (element) => element.element ? element : {
        element
      }
    );
    let isForceTranslate = elements.some(
      (element) => element.forceTranslate
    ), text = "", isHasMeaningfulText = isForceTranslate;
    for (let i3 = 0; i3 < elements.length; i3++) {
      let elementState = elements[i3], element = elementState.element;
      if (elementState.text) {
        text += elementState.text, elementState.variables && elementState.variables.length > 0 && variables.push(...elementState.variables);
        continue;
      }
      if (typeof element == "string") {
        text += element;
        continue;
      }
      let rawText = "";
      isContainsSelectors(
        element,
        `[${sourceElementExcludeAttributeNameForSelector}]`
      ) ? rawText = getTextWithExcludeElement(element) || "" : rawText = element.innerText || "";
      let isStartWithSpace = rawText.startsWith(" "), isEndWithSpace = rawText.endsWith(" ");
      element.tagName === "A" && (isStartWithSpace = !0, isEndWithSpace = !0);
      let isStayOriginal = isStayOriginalElement(element, rule);
      if (rawText === "" || isStayOriginal) {
        isStayOriginal && (isStartWithSpace = !0, isEndWithSpace = !0);
        let variable = {
          type: "element",
          value: element
        };
        variables.push(variable);
        let index = variables.length - 1, delimiter = `${delimiters[0]}${index}${delimiters[1]}`;
        text += (isStartWithSpace ? " " : "") + delimiter + (isEndWithSpace ? " " : "");
        continue;
      }
      if (!isExcludeElement(element, rule, !0)) {
        {
          let finalText = isPreWhitespace ? rawText : rawText.trim().replace(/\n/g, " ");
          if (isUrl(finalText) || isHashTag(finalText) || isAtTag(finalText) || isStockTag(finalText)) {
            let variable = {
              type: "element",
              value: element
            };
            variables.push(variable);
            let index = variables.length - 1, delimiter = `${delimiters[0]}${index}${delimiters[1]}`;
            text += (isStartWithSpace ? " " : "") + delimiter + (isEndWithSpace ? " " : "");
          } else
            isHasMeaningfulText = !0, text += (isStartWithSpace ? " " : "") + finalText + (isEndWithSpace ? " " : "");
        }
        if (typeof element != "string") {
          let whitespace = getWhitespace(
            element.nextSibling,
            isPreWhitespace
          );
          whitespace && (text += whitespace);
        }
      }
    }
    if (!isHasMeaningfulText)
      return null;
    let inline = !1, wordCount = text.split(" ").length, lineCount = text.split(`
`).length;
    wordCount <= rule.blockMinWordCount && text.length <= rule.blockMinTextCount && lineCount < 2 && (inline = !0);
    let finalElements = elements.map(
      (element) => element.element
    ), lastElement = getLastHTMLElement(elements), isVertical = !1;
    if (lastElement) {
      let writtingMode = globalThis.getComputedStyle(lastElement).writingMode;
      isVertical = writtingMode ? writtingMode.includes("vertical") : !1;
    }
    let paragraph = {
      rootFrame,
      isVertical,
      elements: finalElements,
      text,
      variables,
      inline,
      preWhitespace: isPreWhitespace
    };
    return isForceTranslate || isNeedToTranslate(
      paragraph,
      ctx.state.translationArea === "body" ? 2 : rule.paragraphMinTextCount,
      ctx.state.translationArea === "body" ? 1 : rule.paragraphMinWordCount,
      ctx
    ) ? paragraph : null;
  }
  function getTextWithExcludeElement(element) {
    let finalText = "", filterExcludeElement = (node) => node.nodeType === Node.ELEMENT_NODE ? isMarked(node, sourceElementExcludeAttributeName, !0) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT : node.nodeType === Node.TEXT_NODE ? (node.textContent && node.textContent.trim() !== "" && (finalText += node.textContent.replace(/\s+/g, " ")), NodeFilter.FILTER_REJECT) : NodeFilter.FILTER_ACCEPT, treeWalker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
      filterExcludeElement
    );
    for (; treeWalker.nextNode(); )
      ;
    return finalText;
  }

  // dom/get_paragraphs.ts
  var paragraphAutoIncreaceId = 1, paragraphEntities = /* @__PURE__ */ new Map();
  function getParagraphEntities() {
    return paragraphEntities;
  }
  function getParagraph(id) {
    return paragraphEntities.get(id);
  }
  function setParagraph(id, paragraph) {
    paragraphEntities.set(id, paragraph);
  }
  function cleanParagraphs() {
    paragraphEntities.clear();
  }
  function isMarkedByParagraph(targetElement) {
    if (!isMarked(targetElement, sourceElementMarkAttributeName))
      return !1;
    if (isMarked(targetElement, sourceElementTranslatedMarkAttributeName))
      return !0;
    let markId = getAttribute(
      targetElement,
      sourceElementParagraphAttributeName
    );
    if (!markId)
      return !1;
    let paragraphId = parseInt(markId), isExist = paragraphEntities.has(paragraphId);
    if (!isExist) {
      let maybeTargetElement = document.getElementById(
        `${translationTargetElementWrapperClass}-${paragraphId}`
      );
      maybeTargetElement && maybeTargetElement.remove();
    }
    return isExist;
  }
  function addToParagraphs(paragraph, allParagraphs) {
    let newParagraph = {
      ...paragraph,
      id: paragraphAutoIncreaceId++,
      languageByClient: "auto",
      languageByLocal: "auto"
    };
    newParagraph.elements.forEach((element) => {
      element instanceof HTMLElement && (setAttribute(element, sourceElementMarkAttributeName, "1"), setAttribute(
        element,
        sourceElementParagraphAttributeName,
        `${newParagraph.id}`
      ));
    }), allParagraphs.push(newParagraph), paragraphEntities.set(newParagraph.id, {
      ...newParagraph,
      state: "Original",
      observers: []
    });
  }
  async function getParagraphs(rootFrame, containers, ctx) {
    let allParagraphs = [], { targetLanguage, rule } = ctx;
    for (let container of containers) {
      if (isExcludeElement(container, rule, !1))
        continue;
      let isPreWhitespaceContainer = isMarked(
        container,
        sourcePreWhitespaceMarkAttributeName
      ), inlineElementGroups = [];
      if (isMarked(container, sourceAtomicBlockElementMarkAttributeName)) {
        if (!isMarkedByParagraph(container)) {
          let paragraph = elementsToParagraph(
            [container],
            !0,
            rootFrame,
            ctx
          );
          paragraph && addToParagraphs(paragraph, allParagraphs);
        }
        continue;
      }
      let filter = (node2) => {
        if (!(node2.nodeType === Node.TEXT_NODE || node2.nodeType === Node.ELEMENT_NODE))
          return NodeFilter.FILTER_REJECT;
        if (node2.nodeType === Node.ELEMENT_NODE) {
          let element = node2;
          if (element.isContentEditable || isMarkedByParagraph(
            node2
          ))
            return NodeFilter.FILTER_REJECT;
          if (setAttribute(element, sourceElementMarkAttributeName, "1"), isMarked(element, sourceAtomicBlockElementMarkAttributeName)) {
            if (inlineElementGroups.length > 0) {
              let paragraph2 = elementsToParagraph(
                [...inlineElementGroups],
                isPreWhitespaceContainer,
                rootFrame,
                ctx
              );
              paragraph2 && addToParagraphs(paragraph2, allParagraphs), inlineElementGroups.length = 0;
            }
            inlineElementGroups.push(element);
            let paragraph = elementsToParagraph(
              [...inlineElementGroups],
              isPreWhitespaceContainer,
              rootFrame,
              ctx
            );
            return paragraph && addToParagraphs(paragraph, allParagraphs), inlineElementGroups.length = 0, NodeFilter.FILTER_REJECT;
          }
        }
        if (isExcludeElement(node2, rule, !0)) {
          if (isMatchTags(node2.nodeName, ["CODE", "TT"]) && isMatchTags(node2.parentNode?.nodeName, ["PRE"]))
            return NodeFilter.FILTER_REJECT;
          if (isInlineElement(
            node2,
            rule
          ))
            return handleInlineElement(
              node2,
              inlineElementGroups,
              allParagraphs,
              isPreWhitespaceContainer,
              rootFrame,
              ctx
            ), NodeFilter.FILTER_REJECT;
          if (inlineElementGroups.length > 0) {
            let paragraph = elementsToParagraph(
              [...inlineElementGroups],
              isPreWhitespaceContainer,
              rootFrame,
              ctx
            );
            paragraph && addToParagraphs(paragraph, allParagraphs), inlineElementGroups.length = 0;
          }
          return NodeFilter.FILTER_REJECT;
        }
        return isMatchTags(node2.nodeName, ["PRE"]) ? (node2.classList.contains("code"), NodeFilter.FILTER_REJECT) : isInlineElement(
          node2,
          rule
        ) ? (handleInlineElement(
          node2,
          inlineElementGroups,
          allParagraphs,
          isPreWhitespaceContainer,
          rootFrame,
          ctx
        ), NodeFilter.FILTER_REJECT) : NodeFilter.FILTER_ACCEPT;
      }, elementIter = document.createTreeWalker(
        container,
        NodeFilter.SHOW_ELEMENT,
        filter
      ), node = elementIter.nextNode();
      for (; node; ) {
        if (inlineElementGroups.length > 0) {
          let paragraph = elementsToParagraph(
            [...inlineElementGroups],
            isPreWhitespaceContainer,
            rootFrame,
            ctx
          );
          paragraph && addToParagraphs(paragraph, allParagraphs), inlineElementGroups.length = 0;
        }
        node = elementIter.nextNode();
      }
      if (inlineElementGroups.length > 0) {
        let paragraph = elementsToParagraph(
          [...inlineElementGroups],
          isPreWhitespaceContainer,
          rootFrame,
          ctx
        );
        paragraph && addToParagraphs(paragraph, allParagraphs), inlineElementGroups.length = 0;
      }
    }
    let promises = allParagraphs.map((paragraph) => {
      let { text } = paragraph;
      return detectLanguage({
        text,
        minLength: 10
      });
    }), results = await Promise.all(promises), filterdParagraphs = [], excludeLanguages = ctx?.config?.translationLanguagePattern?.excludeMatches || [], currentPageLanguageByClient2 = "auto";
    ctx.state.isDetectParagraphLanguage || (currentPageLanguageByClient2 = getCurrentPageLanguageByClient());
    let currentPageLanguageByLocal = getCurrentPageLanguage();
    return results.forEach((result, index) => {
      let currentLanguageByLocal = result;
      currentLanguageByLocal === "auto" && (currentLanguageByLocal = currentPageLanguageByLocal);
      let newParagraph = {
        ...allParagraphs[index],
        languageByLocal: currentLanguageByLocal,
        languageByClient: currentPageLanguageByClient2 || "auto"
      };
      if (newParagraph.text.length < ctx.rule.languageDetectMinTextCount && (newParagraph.languageByLocal = "auto"), paragraphEntities.set(newParagraph.id, {
        ...newParagraph,
        state: "Original",
        observers: []
      }), !isSameTargetLanguage(result, targetLanguage)) {
        if (excludeLanguages.length > 0 && excludeLanguages.some((language) => isSameTargetLanguage(result, language)))
          return;
        filterdParagraphs.push(newParagraph);
      }
    }), filterdParagraphs;
  }
  function getInlineElementsOfInlineElement(root2, isPreWhitespaceContainer, rootFrame, ctx) {
    let elementState = {
      element: root2
    }, treeWalker = document.createTreeWalker(
      root2,
      NodeFilter.SHOW_TEXT,
      null
    ), node = null, isWhiteSpaceNodeOfLastElement = !1, fullText = "", variables = [], elements = [];
    for (; node = treeWalker.nextNode(); ) {
      let rawText = node.textContent || "", textContent = rawText.trim();
      if (!isWhiteSpaceNodeOfLastElement && rawText.length > 0 && textContent.length === 0) {
        isWhiteSpaceNodeOfLastElement = !0, fullText += " ", elements.push(" ");
        continue;
      }
      if (textContent.length > 0) {
        let parent = node.parentElement;
        if (parent === root2) {
          let text = textContent.replace(/\s+/g, " ");
          fullText += text, elements.push(text);
        } else {
          elements.push(parent);
          let parentElementParagraph = elementsToParagraph(
            [{
              element: parent,
              forceTranslate: !0
            }],
            isPreWhitespaceContainer,
            rootFrame,
            ctx
          );
          parentElementParagraph && (fullText += parentElementParagraph.text, parentElementParagraph && parentElementParagraph.variables && (variables = variables.concat(parentElementParagraph.variables)));
        }
        isWhiteSpaceNodeOfLastElement = !1;
      }
    }
    let lastElement = elements[elements.length - 1];
    if (lastElement && typeof lastElement != "string") {
      let whitespace = getWhitespace(
        lastElement.nextSibling,
        isPreWhitespaceContainer
      );
      whitespace && (elements.push(whitespace), fullText += " ");
    }
    if (typeof elements[elements.length - 1] != "string") {
      let whitespace = getWhitespace(
        root2.nextSibling,
        isPreWhitespaceContainer
      );
      whitespace && (elements.push(whitespace), fullText += " ");
    }
    return elementState.text = fullText, elementState.variables = variables, elementState;
  }
  function handleInlineElement(node, inlineElementGroups, allParagraphs, isPreWhitespaceContainer, rootFrame, ctx) {
    let previouseElement = node.previousElementSibling;
    if (previouseElement && !isInlineElement(
      previouseElement,
      ctx.rule
    ) && inlineElementGroups.length > 0) {
      let paragraph = elementsToParagraph(
        [...inlineElementGroups],
        isPreWhitespaceContainer,
        rootFrame,
        ctx
      );
      paragraph && addToParagraphs(paragraph, allParagraphs), inlineElementGroups.length = 0;
    }
    isExcludeElement(
      node,
      ctx.rule,
      !1
    ) ? isMetaElement(node, ctx.rule) || inlineElementGroups.push(node) : isStayOriginalElement(node, ctx.rule) ? inlineElementGroups.push(node) : isContainsSelectors(node, ["code", "tt"]) ? inlineElementGroups.push(
      getInlineElementsOfInlineElement(
        node,
        isPreWhitespaceContainer,
        rootFrame,
        ctx
      )
    ) : inlineElementGroups.push(node);
  }

  // dom/get_pdf_paragraphs.ts
  async function getParagraphs2(rootFrame, containers, ctx, targetContainers) {
    let allParagraphs = [], { rule } = ctx;
    for (let i3 = 0; i3 < containers.length; i3++) {
      let container = containers[i3], targetContainer = targetContainers[i3];
      if (!targetContainer)
        throw new Error("targetContainer is null");
      let inlineElementGroups = [], isFirstElementOfParagraph = !0, lastLineFirstElementInfo = null, pdfContainerFilter = function(node2) {
        let element = node2;
        if (isMatchTags(element.nodeName, ["DIV", "BR"]))
          return isFirstElementOfParagraph = !0, NodeFilter.FILTER_REJECT;
        if (element.classList.contains("markedContent"))
          return NodeFilter.FILTER_ACCEPT;
        if (isMarkedByParagraph2(
          node2
        ))
          return NodeFilter.FILTER_REJECT;
        if (setAttribute(element, sourceElementMarkAttributeName, "1"), isInlineElement(element, rule)) {
          let lastElement = getLastHTMLElement(inlineElementGroups), currentElementStyle = globalThis.getComputedStyle(element);
          if (!lastElement)
            inlineElementGroups.push(formatElement(element, currentElementStyle));
          else {
            let lastElementStyle = globalThis.getComputedStyle(lastElement), lastElementInfo = getElementInfoByComputedStyle(
              lastElementStyle
            ), currentElementInfo = getElementInfoByComputedStyle(
              currentElementStyle
            ), distanceInfo = getDistance(currentElementInfo, lastElementInfo), isNewParagraph = !1;
            if (isFirstElementOfParagraph && lastLineFirstElementInfo && getDistance(currentElementInfo, lastLineFirstElementInfo).left >= 1.5 && lastLineFirstElementInfo.left > -3 && (isNewParagraph = !0), !isNewParagraph && isFirstElementOfParagraph) {
              let trimedText = (element.innerText || element.textContent || "").trim();
              (trimedText.startsWith("\u2022") || trimedText.charCodeAt(0) === 61623 || /^\d+\./.test(trimedText)) && (isNewParagraph = !0);
            }
            !isNewParagraph && isFirstElementOfParagraph && getLastHTMLElement(inlineElementGroups) && getHTMLElements(inlineElementGroups).reduce(
              (max, element2) => {
                let elementInfo = getElementInfoByComputedStyle(
                  globalThis.getComputedStyle(element2)
                );
                return Math.max(max, elementInfo.right);
              },
              0
            ) - lastElementInfo.right > rule.pdfNewParagraphIndentRightIndentPx && (isNewParagraph = !0), isFirstElementOfParagraph && (lastLineFirstElementInfo = currentElementInfo, isFirstElementOfParagraph = !1), isNewParagraph || (isNewParagraph = getIsNewParagraph(distanceInfo, rule)), isNewParagraph && tryToAddToParagraph(
              inlineElementGroups,
              allParagraphs,
              rootFrame,
              ctx,
              targetContainer
            ), inlineElementGroups.push(formatElement(element, currentElementStyle)), inlineElementGroups.push(" ");
          }
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }, elementIter = document.createTreeWalker(
        container,
        NodeFilter.SHOW_ELEMENT,
        pdfContainerFilter
      ), node = elementIter.nextNode();
      for (; node; )
        node = elementIter.nextNode();
      tryToAddToParagraph(
        inlineElementGroups,
        allParagraphs,
        rootFrame,
        ctx,
        targetContainer
      );
    }
    return allParagraphs;
  }
  function tryToAddToParagraph(inlineElementGroups, allParagraphs, rootFrame, ctx, targetContainer) {
    if (inlineElementGroups.length > 0) {
      let paragraph = elementsToParagraph(
        [...inlineElementGroups],
        !1,
        rootFrame,
        ctx
      );
      paragraph && (paragraph.isPdf = !0, paragraph.targetContainer = targetContainer, paragraph.inline = !1, addToParagraphs(paragraph, allParagraphs)), inlineElementGroups.length = 0;
    }
  }
  function getElementInfoByComputedStyle(style) {
    return {
      top: parseFloat(style.top.slice(0, -2)),
      left: parseFloat(style.left.slice(0, -2)),
      right: parseFloat(style.left.slice(0, -2)) + parseFloat(style.width.slice(0, -2)),
      fontSize: parseFloat(style.fontSize.slice(0, -2))
    };
  }
  function getIsNewParagraph(distance, rule) {
    return distance.fontSize > 2 || distance.fontSize < -2 || distance.top >= rule.pdfNewParagraphLineHeight || distance.top <= rule.pdfNewParagraphLineHeight * -1;
  }
  function getDistance(elementInfo1, elementInfo2) {
    let elementBasedFontSize = elementInfo2.fontSize, currentElementFontSize = elementInfo1.fontSize;
    return {
      top: (elementInfo1.top - elementInfo2.top) / elementBasedFontSize,
      left: (elementInfo1.left - elementInfo2.left) / elementBasedFontSize,
      fontSize: currentElementFontSize - elementBasedFontSize
    };
  }
  function formatElement(element, style) {
    return style.fontFamily === "monospace" ? {
      element,
      isStayOriginal: !0,
      targetTagName: "code"
    } : element;
  }
  function isMarkedByParagraph2(targetElement) {
    if (!isMarked(targetElement, sourceElementMarkAttributeName))
      return !1;
    if (isMarked(targetElement, sourceElementTranslatedMarkAttributeName))
      return !0;
    let markId = getAttribute(
      targetElement,
      sourceElementParagraphAttributeName
    );
    if (!markId)
      return !1;
    let paragraphId = parseInt(markId), isExist = getParagraphEntities().has(paragraphId);
    if (!isExist) {
      let maybeTargetElement = document.getElementById(
        `${translationTargetElementWrapperClass}-${paragraphId}`
      );
      maybeTargetElement && maybeTargetElement.remove();
    }
    return isExist;
  }

  // utils/escape_html.ts
  function escapeHTML(htmlStr) {
    return htmlStr.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // dom/paragraph_to_html.ts
  function getTranslationWrapperClassNames(translationTheme, isInline, additonalClassNames = [], isPreWhitespace, isPdf) {
    let classList = ["notranslate"];
    return isPreWhitespace && classList.push(
      translationTargetTranslationElementPreWhitespaceWrapperClass
    ), translationTheme && (classList.push(
      `${brandId}-target-translation-theme-${translationTheme}`
    ), isInline ? classList.push(
      `${translationTargetTranslationElementInlineWrapperClass}-theme-${translationTheme}`
    ) : classList.push(
      `${translationTargetTranslationElementBlockWrapperClass}-theme-${translationTheme}`
    )), additonalClassNames.length > 0 && classList.push(...additonalClassNames), isInline ? classList.push(translationTargetTranslationElementInlineWrapperClass) : (classList.push(translationTargetTranslationElementBlockWrapperClass), isPdf && classList.push(translationTargetTranslationPdfElementBlockWrapperClass)), classList;
  }
  function getTranslationInnerClassNames(translationTheme) {
    let innerClassList = [
      "notranslate",
      translationTargetInnerElementWrapperClass
    ];
    return translationTheme && innerClassList.push(
      `${brandId}-target-translation-theme-${translationTheme}-inner`
    ), innerClassList;
  }
  function paragraphToHtml(sourceItem, sentence, ctx) {
    let { rule, state } = ctx, { translationTheme } = state, { variables, isVertical } = sourceItem;
    variables = variables || [];
    let { text: targetText } = sentence, { wrapperPrefix, wrapperSuffix } = rule, delimiters = getPlaceholderDelimiters(ctx), position = "afterend", regex = new RegExp(`${delimiters[0]}(\\d+)${delimiters[1]}`, "g"), html = escapeHTML(targetText);
    variables.length > 0 && (html = html.replace(regex, (match) => {
      let matchPositonAtHtml = html.indexOf(match), isStartWhiteSpace = html[matchPositonAtHtml - 1] === " ", isEndWhiteSpace = html[matchPositonAtHtml + match.length] === " ", matchNumberStr = match.slice(
        delimiters[0].length,
        -delimiters[1].length
      ), matchNumber = Number(matchNumberStr);
      if (isNaN(matchNumber))
        return match;
      let variable = variables[Number(matchNumber)];
      if (variable && variable.type === "element") {
        let variableHtml = variable.value.outerHTML;
        return isStartWhiteSpace || (variableHtml = " " + variableHtml), isEndWhiteSpace || (variableHtml = variableHtml + " "), variableHtml;
      } else
        log_default.error("variable type not supported", variable, match);
      return match;
    }));
    let classList = getTranslationWrapperClassNames(
      translationTheme,
      sourceItem.inline,
      rule.translationClasses || [],
      sourceItem.preWhitespace,
      ctx.rule.isPdf
    );
    isVertical && classList.push(translationTargetTranslationElementVerticalBlockClass);
    let innerClassList = getTranslationInnerClassNames(
      translationTheme
    ), blockStyleStr = "";
    return rule.translationBlockStyle && (blockStyleStr = `style="${rule.translationBlockStyle}"`), html = `<span ${blockStyleStr} class="${classList.join(" ")}"><span class="${innerClassList.join(" ")}">${html}</span></span>`, sourceItem.inline || (wrapperPrefix === "smart" ? html = `<br />${html}` : html = `${wrapperPrefix}${html}`, wrapperSuffix === "smart" ? html = `${html}` : html = `${html}${wrapperSuffix}`), sourceItem.inline && (html = `<span class="notranslate">&#160;</span>${html}`), {
      html,
      position
    };
  }

  // dom/normalize_container.ts
  function normalizeContainer(containers, rule) {
    let hiddenElements = [];
    for (let container of containers) {
      if (isMarked(container, sourceAtomicBlockElementMarkAttributeName))
        continue;
      if (setAttribute(container, targetContainerElementAttributeName, "1"), container.normalize(), rule.lineBreakMaxTextCount > 0) {
        let treeFilter = (node) => node.nodeType === Node.ELEMENT_NODE && isExcludeElement(node, rule, !0) ? NodeFilter.FILTER_REJECT : (node.nodeType === Node.TEXT_NODE && (node.textContent ? node.textContent.trim() : "").length >= rule.lineBreakMaxTextCount && addLineBreakToText(node, rule.lineBreakMaxTextCount), NodeFilter.FILTER_ACCEPT), walk = document.createTreeWalker(
          container,
          NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
          treeFilter
        );
        for (; walk.nextNode(); )
          ;
      }
      if (!(rule.excludeTags.includes("PRE") || rule.additionalExcludeTags.includes("PRE")) && rule.isTransformPreTagNewLine) {
        let preTags = container.querySelectorAll("pre");
        for (let preTag of preTags)
          formatPreHtml(preTag);
      }
      rule.preWhitespaceDetectedTags.includes(container.tagName) && (hasMark(container, sourcePreWhitespaceMarkAttributeName) || (isPreElementByStyle(container) ? (setAttribute(container, sourcePreWhitespaceMarkAttributeName, "1"), rule.isTransformPreTagNewLine && formatPreHtml(container)) : setAttribute(container, sourcePreWhitespaceMarkAttributeName, "0"))), wrapTextNode(
        0,
        container,
        rule,
        hiddenElements
      );
    }
    return {
      hiddenElements
    };
  }
  function wrapTextNode(depth, root2, rule, displayNoneElements = []) {
    if (isMarked(root2, sourceAtomicBlockElementMarkAttributeName))
      return;
    let isSingleInlineElement = !1;
    if (depth === 0) {
      let isStayOriginal = isStayOriginalElement(root2, rule);
      root2.childNodes && root2.childNodes.length === 1 && root2.nodeType === Node.ELEMENT_NODE && isInlineElement(
        root2,
        rule
      ) && !isStayOriginal && (isSingleInlineElement = !0);
    }
    if (root2 && root2.childNodes && root2.childNodes.length > 0) {
      for (let node of root2.childNodes)
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (isExcludeElement(node, rule, !1))
            continue;
          {
            let computedStyle = globalThis.getComputedStyle(
              node
            ), tempIsExcludeElement = !1;
            if (computedStyle.display === "none" && (displayNoneElements.push(node), tempIsExcludeElement = !0), !tempIsExcludeElement) {
              let clip = computedStyle.clip, zIndex = computedStyle.zIndex, height = computedStyle.height, width = computedStyle.width, formatedZIndex = 0;
              if (zIndex.startsWith("-")) {
                let zIndexNumber = parseInt(zIndex);
                isNaN(zIndexNumber) || (formatedZIndex = zIndexNumber);
              }
              if ((clip === "rect(1px, 1px, 1px, 1px)" || formatedZIndex < 0) && (tempIsExcludeElement = !0), !tempIsExcludeElement && node.nodeName !== "BR") {
                let heightNumber = parseInt(height), widthNumber = parseInt(width);
                !isNaN(heightNumber) && !isNaN(widthNumber) && (heightNumber > 0 && heightNumber < 8 || widthNumber > 0 && widthNumber <= 8) && (tempIsExcludeElement = !0);
              }
            }
            if (tempIsExcludeElement) {
              setAttribute(
                node,
                sourceElementExcludeAttributeName,
                "1",
                !0
              );
              continue;
            } else {
              if (isMatchTags(node.nodeName, ["DIV"])) {
                let nodeElement = node;
                if (node && nodeElement.style && nodeElement.style.display && nodeElement.style.display === "initial")
                  continue;
                if ((computedStyle.display === "inline" || computedStyle.display === "inline-flex") && !isMarked(
                  node,
                  sourceBlockElementMarkAttributeName
                )) {
                  setAttribute(
                    node,
                    sourceInlineElementMarkAttributeName,
                    "1"
                  );
                  continue;
                }
              } else if (isMatchTags(node.nodeName, ["SPAN", "A"])) {
                if (!computedStyle.display.startsWith("inline")) {
                  isMarked(
                    node,
                    sourceInlineElementMarkAttributeName
                  ) || (setAttribute(
                    node,
                    sourceBlockElementMarkAttributeName,
                    "1"
                  ), wrapTextNode(
                    depth + 1,
                    node,
                    rule,
                    displayNoneElements
                  ));
                  continue;
                }
              } else if (isUnknowTag(node, rule))
                if (isInlineElement(
                  node,
                  rule
                )) {
                  if (!isMarked(
                    node,
                    sourceBlockElementMarkAttributeName
                  ) && !isMarked(
                    node,
                    sourceInlineElementMarkAttributeName
                  )) {
                    setAttribute(
                      node,
                      sourceInlineElementMarkAttributeName,
                      "1"
                    );
                    continue;
                  }
                } else {
                  !isMarked(
                    node,
                    sourceBlockElementMarkAttributeName
                  ) && !isMarked(
                    node,
                    sourceInlineElementMarkAttributeName
                  ) && setAttribute(
                    node,
                    sourceBlockElementMarkAttributeName,
                    "1"
                  );
                  continue;
                }
              if (isInlineElement(node, rule) && !isSingleInlineElement)
                continue;
              wrapTextNode(
                depth + 1,
                node,
                rule,
                displayNoneElements
              );
            }
          }
        } else if (node.nodeType === Node.TEXT_NODE) {
          let text = node.textContent;
          if (text && text.trim().length > 0) {
            let span = document.createElement("span");
            node.after(span), span.appendChild(node);
          }
        }
    }
  }
  function isPreElementByStyle(element) {
    let style = window.getComputedStyle(element);
    return style.whiteSpace.startsWith("pre") || style.whiteSpace === "break-spaces";
  }
  function formatPreHtml(preElement) {
    let newHtml = preElement.innerHTML.replace(/\n/g, "<br />");
    preElement.innerHTML = newHtml;
  }
  function addLineBreakToText(textNode, maxLength) {
    let text = textNode.textContent || "";
    if (text.trim().length <= maxLength)
      return;
    let boundaryIndex = [".", "?", "!", "\u3002", "\uFF1F", "\uFF01"].reduce((acc, boundary) => {
      let index = text.lastIndexOf(boundary, maxLength);
      return index > acc ? index : acc;
    }, -1);
    if (boundaryIndex === -1)
      text.length > maxLength + 20 && addLineBreakToText(textNode, maxLength + 20);
    else {
      let theText = text.slice(boundaryIndex + 1);
      boundaryIndex++, theText.startsWith(" ") && boundaryIndex++;
      let theLastTextNode = textNode.splitText(boundaryIndex), br = document.createElement("br");
      theLastTextNode.parentNode?.insertBefore(br, theLastTextNode), boundaryIndex + 1 < text.length && addLineBreakToText(theLastTextNode, maxLength);
    }
  }

  // dom/normalize_pdf_container.ts
  function normalizeContainer2(containers, _rule) {
    let targetContainers = [];
    for (let container of containers) {
      let maxRight = 0, minLeft = 1e5, rightContainer = document.createElement("div"), treeFilter = (node) => {
        let element = node;
        if (isMatchTags(element.nodeName, ["DIV", "BR"]))
          return NodeFilter.FILTER_REJECT;
        if (element.classList.contains("markedContent"))
          return NodeFilter.FILTER_ACCEPT;
        if (isMatchTags(element.nodeName, ["SPAN"])) {
          let rect = element.getBoundingClientRect(), style = globalThis.getComputedStyle(element), right = rect.right, left = rect.left, top = style.top.slice(0, -2), fontsize = style.fontSize.slice(0, -2);
          return right > maxRight && (maxRight = right), left < minLeft && (minLeft = left), setAttribute(element, sourceElementLeft, `${left}`), setAttribute(element, sourceElementRight, `${right}`), setAttribute(element, sourceElementTop, top), setAttribute(element, sourceElementFontSize, fontsize), NodeFilter.FILTER_ACCEPT;
        } else
          return NodeFilter.FILTER_ACCEPT;
      }, walk = document.createTreeWalker(
        container,
        NodeFilter.SHOW_ELEMENT,
        treeFilter
      );
      for (; walk.nextNode(); )
        ;
      let realWidth = maxRight - minLeft;
      realWidth < 600 && (realWidth = 600), targetContainers.push(rightContainer), rightContainer.style.left = maxRight + "px", rightContainer.style.width = maxRight + "px", rightContainer.classList.add(translationPdfTargetContainerClass), container.childNodes.length > 0 && container.insertBefore(rightContainer, container.childNodes[0]);
    }
    return { targetContainers };
  }

  // services/translation.ts
  var Translation = class {
    constructor(serviceConfig, generalConfig) {
      this.maxTextLength = 1800;
      this.throttleLimit = 3;
      this.isSupportList = !0;
      this.maxTextGroupLength = 200;
      this.serviceConfig = serviceConfig, this.generalConfig = generalConfig;
    }
    static getAllProps() {
      return [];
    }
    static getProps() {
      return [];
    }
    async init() {
    }
    getMaxTextGroupLength() {
      return this.maxTextGroupLength;
    }
    translate(_payload) {
      throw new Error("Not implemented");
    }
    translateList(_payload) {
      throw new Error("Not implemented");
    }
    async multipleTranslate(payload, options2, everySentenceCallback) {
      if (payload.sentences.length === 0)
        return {
          sentences: []
        };
      let { sentences } = payload, respondedSentences = [], tempSentenceGroups = [], currentSentenceIndex = 0, sent = /* @__PURE__ */ new Set(), globalError = null, languages2 = /* @__PURE__ */ new Set();
      for (let sentence of sentences)
        sentence.from && sentence.from !== "auto" && languages2.add(sentence.from);
      let isMultipleLanguage = !1;
      languages2.size > 1 && (isMultipleLanguage = !0);
      try {
        tempSentenceGroups = splitSentences(
          sentences,
          this.maxTextLength,
          this.maxTextGroupLength
        );
      } catch (e3) {
        if (everySentenceCallback) {
          sent.has(currentSentenceIndex) && currentSentenceIndex++;
          for (let i3 = currentSentenceIndex; i3 < sentences.length; i3++) {
            let sentence = sentences[i3];
            everySentenceCallback(e3, null, sentence);
          }
          globalError = e3;
        } else
          globalError = e3;
      }
      let throttle = m4({
        limit: this.throttleLimit,
        interval: 1e3
      });
      log_default.debug(
        "tempSentenceGroups",
        tempSentenceGroups.map((item) => item)
      );
      for (let i3 = 0; i3 < tempSentenceGroups.length; i3++) {
        let tempSentenceGroup = tempSentenceGroups[i3], url = tempSentenceGroup.url, throttled = throttle(async () => {
          let finalFrom = tempSentenceGroup.from;
          if (isMultipleLanguage && (finalFrom = "auto"), tempSentenceGroup.fromByClient && tempSentenceGroup.fromByClient !== "auto" && (finalFrom = tempSentenceGroup.fromByClient), this.isSupportList)
            return await this.translateList({
              text: tempSentenceGroup.tempSentences.map((item) => item.text),
              from: finalFrom,
              to: tempSentenceGroup.to,
              url,
              options: options2
            });
          {
            let mergedText = tempSentenceGroup.tempSentences.map(
              (item) => item.text
            ).join(translationTextSeparator), result2 = await this.translate({
              text: mergedText,
              from: finalFrom,
              to: tempSentenceGroup.to,
              url,
              options: options2
            }), { text } = result2;
            return {
              text: text.split(
                translationTextSeparator
              ),
              from: result2.from,
              to: result2.to
            };
          }
        }), result;
        try {
          result = await throttled();
        } catch (e3) {
          if (everySentenceCallback) {
            sent.has(currentSentenceIndex) && currentSentenceIndex++;
            for (let i4 = currentSentenceIndex; i4 < sentences.length; i4++) {
              let sentence = sentences[i4];
              everySentenceCallback(e3, null, sentence);
            }
            globalError = e3;
            continue;
          } else {
            globalError = e3;
            continue;
          }
        }
        let { text: translatedTexts } = result;
        for (let j6 = 0; j6 < translatedTexts.length; j6++)
          try {
            let translatedText = translatedTexts[j6], tempSentence = tempSentenceGroup.tempSentences[j6], { index, prefix, suffix } = tempSentence;
            respondedSentences[index] === void 0 ? respondedSentences[index] = {
              ...sentences[index],
              from: tempSentenceGroup.from,
              to: tempSentenceGroup.to,
              text: prefix + translatedText + suffix
            } : respondedSentences[index].text += prefix + translatedText + suffix, index !== currentSentenceIndex && everySentenceCallback && (sent.add(currentSentenceIndex), everySentenceCallback(
              null,
              respondedSentences[currentSentenceIndex],
              sentences[currentSentenceIndex]
            )), currentSentenceIndex = index;
          } catch (e3) {
            if (everySentenceCallback) {
              sent.has(currentSentenceIndex) && currentSentenceIndex++;
              for (let i4 = currentSentenceIndex; i4 < sentences.length; i4++) {
                let sentence = sentences[i4];
                everySentenceCallback(e3, null, sentence);
              }
              throw e3;
            } else
              throw e3;
          }
      }
      if (everySentenceCallback && !sent.has(currentSentenceIndex) && respondedSentences[currentSentenceIndex] && sentences[currentSentenceIndex] && everySentenceCallback(
        null,
        respondedSentences[currentSentenceIndex],
        sentences[currentSentenceIndex]
      ), globalError)
        throw globalError;
      return {
        sentences: respondedSentences
      };
    }
    detectLanguageLocally(text) {
      return detectLanguage({
        text,
        minLength: 18
      });
    }
    detectLanguageRemotely(_text) {
      return Promise.resolve("auto");
    }
    detectLanguage(text) {
      return text.length >= 50 ? this.detectLanguageLocally(text) : this.detectLanguageRemotely(text);
    }
  };

  // libs/sha256.js
  var ERROR = "input is invalid type", WINDOW = typeof window == "object", root = WINDOW ? window : {};
  root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
  var WEB_WORKER = !WINDOW && typeof self == "object", NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
  NODE_JS ? root = global : WEB_WORKER && (root = self);
  var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && typeof module == "object" && module.exports, AMD = typeof define == "function" && define.amd, ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", HEX_CHARS = "0123456789abcdef".split(""), EXTRA = [-2147483648, 8388608, 32768, 128], SHIFT = [24, 16, 8, 0], K5 = [
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ], OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"], blocks = [];
  (root.JS_SHA256_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  });
  ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(obj) {
    return typeof obj == "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
  });
  var createOutputMethod = function(outputType, is224) {
    return function(message) {
      return new Sha256(is224, !0).update(message)[outputType]();
    };
  }, createMethod = function(is224) {
    var method = createOutputMethod("hex", is224);
    method.create = function() {
      return new Sha256(is224);
    }, method.update = function(message) {
      return method.create().update(message);
    };
    for (var i3 = 0; i3 < OUTPUT_TYPES.length; ++i3) {
      var type = OUTPUT_TYPES[i3];
      method[type] = createOutputMethod(type, is224);
    }
    return method;
  }, createHmacOutputMethod = function(outputType, is224) {
    return function(key, message) {
      return new HmacSha256(key, is224, !0).update(message)[outputType]();
    };
  }, createHmacMethod = function(is224) {
    var method = createHmacOutputMethod("hex", is224);
    method.create = function(key) {
      return new HmacSha256(key, is224);
    }, method.update = function(key, message) {
      return method.create(key).update(message);
    };
    for (var i3 = 0; i3 < OUTPUT_TYPES.length; ++i3) {
      var type = OUTPUT_TYPES[i3];
      method[type] = createHmacOutputMethod(type, is224);
    }
    return method;
  };
  function Sha256(is224, sharedMemory) {
    sharedMemory ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], is224 ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0, this.is224 = is224;
  }
  Sha256.prototype.update = function(message) {
    if (!this.finalized) {
      var notString, type = typeof message;
      if (type !== "string") {
        if (type === "object") {
          if (message === null)
            throw new Error(ERROR);
          if (ARRAY_BUFFER && message.constructor === ArrayBuffer)
            message = new Uint8Array(message);
          else if (!Array.isArray(message) && (!ARRAY_BUFFER || !ArrayBuffer.isView(message)))
            throw new Error(ERROR);
        } else
          throw new Error(ERROR);
        notString = !0;
      }
      for (var code2, index = 0, i3, length = message.length, blocks2 = this.blocks; index < length; ) {
        if (this.hashed && (this.hashed = !1, blocks2[0] = this.block, blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0), notString)
          for (i3 = this.start; index < length && i3 < 64; ++index)
            blocks2[i3 >> 2] |= message[index] << SHIFT[i3++ & 3];
        else
          for (i3 = this.start; index < length && i3 < 64; ++index)
            code2 = message.charCodeAt(index), code2 < 128 ? blocks2[i3 >> 2] |= code2 << SHIFT[i3++ & 3] : code2 < 2048 ? (blocks2[i3 >> 2] |= (192 | code2 >> 6) << SHIFT[i3++ & 3], blocks2[i3 >> 2] |= (128 | code2 & 63) << SHIFT[i3++ & 3]) : code2 < 55296 || code2 >= 57344 ? (blocks2[i3 >> 2] |= (224 | code2 >> 12) << SHIFT[i3++ & 3], blocks2[i3 >> 2] |= (128 | code2 >> 6 & 63) << SHIFT[i3++ & 3], blocks2[i3 >> 2] |= (128 | code2 & 63) << SHIFT[i3++ & 3]) : (code2 = 65536 + ((code2 & 1023) << 10 | message.charCodeAt(++index) & 1023), blocks2[i3 >> 2] |= (240 | code2 >> 18) << SHIFT[i3++ & 3], blocks2[i3 >> 2] |= (128 | code2 >> 12 & 63) << SHIFT[i3++ & 3], blocks2[i3 >> 2] |= (128 | code2 >> 6 & 63) << SHIFT[i3++ & 3], blocks2[i3 >> 2] |= (128 | code2 & 63) << SHIFT[i3++ & 3]);
        this.lastByteIndex = i3, this.bytes += i3 - this.start, i3 >= 64 ? (this.block = blocks2[16], this.start = i3 - 64, this.hash(), this.hashed = !0) : this.start = i3;
      }
      return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
    }
  };
  Sha256.prototype.finalize = function() {
    if (!this.finalized) {
      this.finalized = !0;
      var blocks2 = this.blocks, i3 = this.lastByteIndex;
      blocks2[16] = this.block, blocks2[i3 >> 2] |= EXTRA[i3 & 3], this.block = blocks2[16], i3 >= 56 && (this.hashed || this.hash(), blocks2[0] = this.block, blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0), blocks2[14] = this.hBytes << 3 | this.bytes >>> 29, blocks2[15] = this.bytes << 3, this.hash();
    }
  };
  Sha256.prototype.hash = function() {
    var a6 = this.h0, b4 = this.h1, c5 = this.h2, d4 = this.h3, e3 = this.h4, f7 = this.h5, g7 = this.h6, h4 = this.h7, blocks2 = this.blocks, j6, s0, s1, maj, t1, t22, ch, ab, da, cd, bc;
    for (j6 = 16; j6 < 64; ++j6)
      t1 = blocks2[j6 - 15], s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3, t1 = blocks2[j6 - 2], s1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10, blocks2[j6] = blocks2[j6 - 16] + s0 + blocks2[j6 - 7] + s1 << 0;
    for (bc = b4 & c5, j6 = 0; j6 < 64; j6 += 4)
      this.first ? (this.is224 ? (ab = 300032, t1 = blocks2[0] - 1413257819, h4 = t1 - 150054599 << 0, d4 = t1 + 24177077 << 0) : (ab = 704751109, t1 = blocks2[0] - 210244248, h4 = t1 - 1521486534 << 0, d4 = t1 + 143694565 << 0), this.first = !1) : (s0 = (a6 >>> 2 | a6 << 30) ^ (a6 >>> 13 | a6 << 19) ^ (a6 >>> 22 | a6 << 10), s1 = (e3 >>> 6 | e3 << 26) ^ (e3 >>> 11 | e3 << 21) ^ (e3 >>> 25 | e3 << 7), ab = a6 & b4, maj = ab ^ a6 & c5 ^ bc, ch = e3 & f7 ^ ~e3 & g7, t1 = h4 + s1 + ch + K5[j6] + blocks2[j6], t22 = s0 + maj, h4 = d4 + t1 << 0, d4 = t1 + t22 << 0), s0 = (d4 >>> 2 | d4 << 30) ^ (d4 >>> 13 | d4 << 19) ^ (d4 >>> 22 | d4 << 10), s1 = (h4 >>> 6 | h4 << 26) ^ (h4 >>> 11 | h4 << 21) ^ (h4 >>> 25 | h4 << 7), da = d4 & a6, maj = da ^ d4 & b4 ^ ab, ch = h4 & e3 ^ ~h4 & f7, t1 = g7 + s1 + ch + K5[j6 + 1] + blocks2[j6 + 1], t22 = s0 + maj, g7 = c5 + t1 << 0, c5 = t1 + t22 << 0, s0 = (c5 >>> 2 | c5 << 30) ^ (c5 >>> 13 | c5 << 19) ^ (c5 >>> 22 | c5 << 10), s1 = (g7 >>> 6 | g7 << 26) ^ (g7 >>> 11 | g7 << 21) ^ (g7 >>> 25 | g7 << 7), cd = c5 & d4, maj = cd ^ c5 & a6 ^ da, ch = g7 & h4 ^ ~g7 & e3, t1 = f7 + s1 + ch + K5[j6 + 2] + blocks2[j6 + 2], t22 = s0 + maj, f7 = b4 + t1 << 0, b4 = t1 + t22 << 0, s0 = (b4 >>> 2 | b4 << 30) ^ (b4 >>> 13 | b4 << 19) ^ (b4 >>> 22 | b4 << 10), s1 = (f7 >>> 6 | f7 << 26) ^ (f7 >>> 11 | f7 << 21) ^ (f7 >>> 25 | f7 << 7), bc = b4 & c5, maj = bc ^ b4 & d4 ^ cd, ch = f7 & g7 ^ ~f7 & h4, t1 = e3 + s1 + ch + K5[j6 + 3] + blocks2[j6 + 3], t22 = s0 + maj, e3 = a6 + t1 << 0, a6 = t1 + t22 << 0;
    this.h0 = this.h0 + a6 << 0, this.h1 = this.h1 + b4 << 0, this.h2 = this.h2 + c5 << 0, this.h3 = this.h3 + d4 << 0, this.h4 = this.h4 + e3 << 0, this.h5 = this.h5 + f7 << 0, this.h6 = this.h6 + g7 << 0, this.h7 = this.h7 + h4 << 0;
  };
  Sha256.prototype.hex = function() {
    this.finalize();
    var h0 = this.h0, h1 = this.h1, h22 = this.h2, h32 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7, hex2 = HEX_CHARS[h0 >> 28 & 15] + HEX_CHARS[h0 >> 24 & 15] + HEX_CHARS[h0 >> 20 & 15] + HEX_CHARS[h0 >> 16 & 15] + HEX_CHARS[h0 >> 12 & 15] + HEX_CHARS[h0 >> 8 & 15] + HEX_CHARS[h0 >> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h1 >> 28 & 15] + HEX_CHARS[h1 >> 24 & 15] + HEX_CHARS[h1 >> 20 & 15] + HEX_CHARS[h1 >> 16 & 15] + HEX_CHARS[h1 >> 12 & 15] + HEX_CHARS[h1 >> 8 & 15] + HEX_CHARS[h1 >> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h22 >> 28 & 15] + HEX_CHARS[h22 >> 24 & 15] + HEX_CHARS[h22 >> 20 & 15] + HEX_CHARS[h22 >> 16 & 15] + HEX_CHARS[h22 >> 12 & 15] + HEX_CHARS[h22 >> 8 & 15] + HEX_CHARS[h22 >> 4 & 15] + HEX_CHARS[h22 & 15] + HEX_CHARS[h32 >> 28 & 15] + HEX_CHARS[h32 >> 24 & 15] + HEX_CHARS[h32 >> 20 & 15] + HEX_CHARS[h32 >> 16 & 15] + HEX_CHARS[h32 >> 12 & 15] + HEX_CHARS[h32 >> 8 & 15] + HEX_CHARS[h32 >> 4 & 15] + HEX_CHARS[h32 & 15] + HEX_CHARS[h4 >> 28 & 15] + HEX_CHARS[h4 >> 24 & 15] + HEX_CHARS[h4 >> 20 & 15] + HEX_CHARS[h4 >> 16 & 15] + HEX_CHARS[h4 >> 12 & 15] + HEX_CHARS[h4 >> 8 & 15] + HEX_CHARS[h4 >> 4 & 15] + HEX_CHARS[h4 & 15] + HEX_CHARS[h5 >> 28 & 15] + HEX_CHARS[h5 >> 24 & 15] + HEX_CHARS[h5 >> 20 & 15] + HEX_CHARS[h5 >> 16 & 15] + HEX_CHARS[h5 >> 12 & 15] + HEX_CHARS[h5 >> 8 & 15] + HEX_CHARS[h5 >> 4 & 15] + HEX_CHARS[h5 & 15] + HEX_CHARS[h6 >> 28 & 15] + HEX_CHARS[h6 >> 24 & 15] + HEX_CHARS[h6 >> 20 & 15] + HEX_CHARS[h6 >> 16 & 15] + HEX_CHARS[h6 >> 12 & 15] + HEX_CHARS[h6 >> 8 & 15] + HEX_CHARS[h6 >> 4 & 15] + HEX_CHARS[h6 & 15];
    return this.is224 || (hex2 += HEX_CHARS[h7 >> 28 & 15] + HEX_CHARS[h7 >> 24 & 15] + HEX_CHARS[h7 >> 20 & 15] + HEX_CHARS[h7 >> 16 & 15] + HEX_CHARS[h7 >> 12 & 15] + HEX_CHARS[h7 >> 8 & 15] + HEX_CHARS[h7 >> 4 & 15] + HEX_CHARS[h7 & 15]), hex2;
  };
  Sha256.prototype.toString = Sha256.prototype.hex;
  Sha256.prototype.digest = function() {
    this.finalize();
    var h0 = this.h0, h1 = this.h1, h22 = this.h2, h32 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7, arr = [
      h0 >> 24 & 255,
      h0 >> 16 & 255,
      h0 >> 8 & 255,
      h0 & 255,
      h1 >> 24 & 255,
      h1 >> 16 & 255,
      h1 >> 8 & 255,
      h1 & 255,
      h22 >> 24 & 255,
      h22 >> 16 & 255,
      h22 >> 8 & 255,
      h22 & 255,
      h32 >> 24 & 255,
      h32 >> 16 & 255,
      h32 >> 8 & 255,
      h32 & 255,
      h4 >> 24 & 255,
      h4 >> 16 & 255,
      h4 >> 8 & 255,
      h4 & 255,
      h5 >> 24 & 255,
      h5 >> 16 & 255,
      h5 >> 8 & 255,
      h5 & 255,
      h6 >> 24 & 255,
      h6 >> 16 & 255,
      h6 >> 8 & 255,
      h6 & 255
    ];
    return this.is224 || arr.push(h7 >> 24 & 255, h7 >> 16 & 255, h7 >> 8 & 255, h7 & 255), arr;
  };
  Sha256.prototype.array = Sha256.prototype.digest;
  Sha256.prototype.arrayBuffer = function() {
    this.finalize();
    var buffer = new ArrayBuffer(this.is224 ? 28 : 32), dataView = new DataView(buffer);
    return dataView.setUint32(0, this.h0), dataView.setUint32(4, this.h1), dataView.setUint32(8, this.h2), dataView.setUint32(12, this.h3), dataView.setUint32(16, this.h4), dataView.setUint32(20, this.h5), dataView.setUint32(24, this.h6), this.is224 || dataView.setUint32(28, this.h7), buffer;
  };
  function HmacSha256(key, is224, sharedMemory) {
    var i3, type = typeof key;
    if (type === "string") {
      var bytes = [], length = key.length, index = 0, code2;
      for (i3 = 0; i3 < length; ++i3)
        code2 = key.charCodeAt(i3), code2 < 128 ? bytes[index++] = code2 : code2 < 2048 ? (bytes[index++] = 192 | code2 >> 6, bytes[index++] = 128 | code2 & 63) : code2 < 55296 || code2 >= 57344 ? (bytes[index++] = 224 | code2 >> 12, bytes[index++] = 128 | code2 >> 6 & 63, bytes[index++] = 128 | code2 & 63) : (code2 = 65536 + ((code2 & 1023) << 10 | key.charCodeAt(++i3) & 1023), bytes[index++] = 240 | code2 >> 18, bytes[index++] = 128 | code2 >> 12 & 63, bytes[index++] = 128 | code2 >> 6 & 63, bytes[index++] = 128 | code2 & 63);
      key = bytes;
    } else if (type === "object") {
      if (key === null)
        throw new Error(ERROR);
      if (ARRAY_BUFFER && key.constructor === ArrayBuffer)
        key = new Uint8Array(key);
      else if (!Array.isArray(key) && (!ARRAY_BUFFER || !ArrayBuffer.isView(key)))
        throw new Error(ERROR);
    } else
      throw new Error(ERROR);
    key.length > 64 && (key = new Sha256(is224, !0).update(key).array());
    var oKeyPad = [], iKeyPad = [];
    for (i3 = 0; i3 < 64; ++i3) {
      var b4 = key[i3] || 0;
      oKeyPad[i3] = 92 ^ b4, iKeyPad[i3] = 54 ^ b4;
    }
    Sha256.call(this, is224, sharedMemory), this.update(iKeyPad), this.oKeyPad = oKeyPad, this.inner = !0, this.sharedMemory = sharedMemory;
  }
  HmacSha256.prototype = new Sha256();
  HmacSha256.prototype.finalize = function() {
    if (Sha256.prototype.finalize.call(this), this.inner) {
      this.inner = !1;
      var innerHash = this.array();
      Sha256.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(innerHash), Sha256.prototype.finalize.call(this);
    }
  };
  var exports = createMethod();
  exports.sha256 = exports;
  exports.sha224 = createMethod(!0);
  exports.sha256.hmac = createHmacMethod();
  exports.sha224.hmac = createHmacMethod(!0);
  var sha256_default = exports;

  // utils/sha256.ts
  var sha256Fn = sha256_default.sha256;
  function sha256(message) {
    return Promise.resolve(sha256Fn(message));
  }
  function hex(hashBuffer) {
    return Array.from(new Uint8Array(hashBuffer)).map((b4) => b4.toString(16).padStart(2, "0")).join(
      ""
    );
  }
  function hmacSha256(str, keyString) {
    let hash = sha256Fn.hmac.create(keyString);
    return hash.update(str), Promise.resolve(hash.array());
  }
  async function hmacSha256ByString(str, keyString) {
    let sig = await hmacSha256(str, keyString);
    return hex(sig);
  }
  async function hmacSha256ByArrayBuffer(str, keyString) {
    let buffer = decodeHex(keyString), sig = await hmacSha256(str, buffer);
    return hex(sig);
  }
  function decodeHex(string) {
    let bytes = [];
    return string.replace(/../g, function(pair) {
      return bytes.push(parseInt(pair, 16)), "";
    }), new Uint8Array(bytes).buffer;
  }

  // services/tencent.ts
  var langMap3 = [
    ["auto", "auto"],
    ["zh-CN", "zh"],
    ["zh-TW", "zh-TW"],
    ["de", "de"],
    ["en", "en"],
    ["es", "es"],
    ["fr", "fr"],
    ["id", "id"],
    ["it", "it"],
    ["ja", "jp"],
    ["ko", "kr"],
    ["ms", "ms"],
    ["pt", "pt"],
    ["ru", "ru"],
    ["th", "th"],
    ["tr", "tr"],
    ["vi", "vi"]
  ], _Tencent = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.secretId = "";
      this.secretKey = "";
      this.isSupportList = !0;
      if (!serviceConfig || !serviceConfig.secretId || !serviceConfig.secretKey)
        throw new Error("secretId and secretKey are required");
      this.secretId = serviceConfig.secretId?.trim(), this.secretKey = serviceConfig.secretKey?.trim();
    }
    static getUTCDate(dateObj) {
      let year = dateObj.getUTCFullYear(), month = `${dateObj.getUTCMonth() + 1}`.padStart(2, "0"), date = `${dateObj.getUTCDate()}`.padStart(2, "0");
      return `${year}-${month}-${date}`;
    }
    static getAllProps() {
      return [{
        name: "secretId",
        required: !0,
        type: "text"
      }, {
        name: "secretKey",
        required: !0,
        type: "password"
      }];
    }
    async translate(payload) {
      let { text, from, to } = payload, RequestPayload = JSON.stringify({
        ProjectId: 0,
        Source: _Tencent.langMap.get(from) || "auto",
        SourceText: text,
        Target: _Tencent.langMap.get(to) || to
      }), data = await this.signedRequest({
        secretId: this.secretId,
        secretKey: this.secretKey,
        action: "TextTranslate",
        payload: RequestPayload,
        service: "tmt",
        version: "2018-03-21"
      });
      return {
        text: data.Response.TargetText,
        from: _Tencent.langMapReverse.get(data.Response.Source) || from,
        to: _Tencent.langMapReverse.get(data.Response.Target) || to
      };
    }
    async translateList(payload) {
      let { text, from, to } = payload, RequestPayload = JSON.stringify({
        ProjectId: 0,
        Source: _Tencent.langMap.get(from) || "auto",
        SourceTextList: text,
        Target: _Tencent.langMap.get(to) || to
      }), data = await this.signedRequest({
        secretId: this.secretId,
        secretKey: this.secretKey,
        action: "TextTranslateBatch",
        payload: RequestPayload,
        service: "tmt",
        version: "2018-03-21"
      });
      return {
        text: data.Response.TargetTextList,
        from: _Tencent.langMapReverse.get(data.Response.Source) || from,
        to: _Tencent.langMapReverse.get(data.Response.Target) || to
      };
    }
    async signedRequest({
      secretId,
      secretKey,
      action,
      payload,
      service,
      version
    }) {
      let host = `${service}.tencentcloudapi.com`, now = /* @__PURE__ */ new Date(), timestamp = `${(/* @__PURE__ */ new Date()).valueOf()}`.slice(0, 10), CanonicalRequest = [
        "POST",
        "/",
        "",
        "content-type:application/json; charset=utf-8",
        `host:${host}`,
        "",
        "content-type;host",
        await sha256(payload)
      ].join(`
`), datestamp = _Tencent.getUTCDate(now), StringToSign = [
        "TC3-HMAC-SHA256",
        timestamp,
        `${datestamp}/${service}/tc3_request`,
        await sha256(CanonicalRequest)
      ].join(`
`), SecretDate = await hmacSha256ByString(datestamp, `TC3${secretKey}`), SecretService = await hmacSha256ByArrayBuffer(
        service,
        SecretDate
      ), SecretSigning = await hmacSha256ByArrayBuffer(
        "tc3_request",
        SecretService
      ), Signature = await hmacSha256ByArrayBuffer(
        StringToSign,
        SecretSigning
      ), response = await request2({
        retry: 2,
        url: `https://${service}.tencentcloudapi.com`,
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Host: host,
          "X-TC-Action": action,
          "X-TC-Timestamp": timestamp,
          "X-TC-Region": "ap-beijing",
          "X-TC-Version": version,
          Authorization: `TC3-HMAC-SHA256 Credential=${secretId}/${datestamp}/${service}/tc3_request, SignedHeaders=content-type;host, Signature=${Signature}`
        },
        body: payload
      });
      if (response instanceof Error)
        throw response;
      if (response.Response && response.Response.Error && response.Response.Error.Message)
        throw new Error(
          response.Response.Error.Message
        );
      return response;
    }
  }, Tencent = _Tencent;
  /** Translator lang to custom lang */
  Tencent.langMap = new Map(langMap3), /** Custom lang to translator lang */
  Tencent.langMapReverse = new Map(
    langMap3.map(([translatorLang, lang]) => [lang, translatorLang])
  );

  // services/google.ts
  var langMap4 = [
    ["auto", "auto"],
    ["zh-CN", "zh-CN"],
    ["zh-TW", "zh-TW"],
    ["en", "en"],
    ["af", "af"],
    ["am", "am"],
    ["ar", "ar"],
    ["az", "az"],
    ["be", "be"],
    ["bg", "bg"],
    ["bn", "bn"],
    ["bs", "bs"],
    ["ca", "ca"],
    ["ceb", "ceb"],
    ["co", "co"],
    ["cs", "cs"],
    ["cy", "cy"],
    ["da", "da"],
    ["de", "de"],
    ["el", "el"],
    ["eo", "eo"],
    ["es", "es"],
    ["et", "et"],
    ["eu", "eu"],
    ["fa", "fa"],
    ["fi", "fi"],
    ["fr", "fr"],
    ["fy", "fy"],
    ["ga", "ga"],
    ["gd", "gd"],
    ["gl", "gl"],
    ["gu", "gu"],
    ["ha", "ha"],
    ["haw", "haw"],
    ["he", "he"],
    ["hi", "hi"],
    ["hmn", "hmn"],
    ["hr", "hr"],
    ["ht", "ht"],
    ["hu", "hu"],
    ["hy", "hy"],
    ["id", "id"],
    ["ig", "ig"],
    ["is", "is"],
    ["it", "it"],
    ["ja", "ja"],
    ["jw", "jw"],
    ["ka", "ka"],
    ["kk", "kk"],
    ["km", "km"],
    ["kn", "kn"],
    ["ko", "ko"],
    ["ku", "ku"],
    ["ky", "ky"],
    ["la", "la"],
    ["lb", "lb"],
    ["lo", "lo"],
    ["lt", "lt"],
    ["lv", "lv"],
    ["mg", "mg"],
    ["mi", "mi"],
    ["mk", "mk"],
    ["ml", "ml"],
    ["mn", "mn"],
    ["mr", "mr"],
    ["ms", "ms"],
    ["mt", "mt"],
    ["my", "my"],
    ["ne", "ne"],
    ["nl", "nl"],
    ["no", "no"],
    ["ny", "ny"],
    ["pa", "pa"],
    ["pl", "pl"],
    ["ps", "ps"],
    ["pt", "pt"],
    ["ro", "ro"],
    ["ru", "ru"],
    ["sd", "sd"],
    ["si", "si"],
    ["sk", "sk"],
    ["sl", "sl"],
    ["sm", "sm"],
    ["sn", "sn"],
    ["so", "so"],
    ["sq", "sq"],
    ["sr", "sr"],
    ["st", "st"],
    ["su", "su"],
    ["sv", "sv"],
    ["sw", "sw"],
    ["ta", "ta"],
    ["te", "te"],
    ["tg", "tg"],
    ["th", "th"],
    ["fil", "tl"],
    ["tr", "tr"],
    ["ug", "ug"],
    ["uk", "uk"],
    ["ur", "ur"],
    ["uz", "uz"],
    ["vi", "vi"],
    ["xh", "xh"],
    ["yi", "yi"],
    ["yo", "yo"],
    ["zu", "zu"]
  ], _Google = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.isSupportList = !1;
      this.throttleLimit = 100;
      this.apiUrl = "https://translate.googleapis.com/translate_a/single";
      serviceConfig && serviceConfig.apiUrl && (this.apiUrl = mergeUrl(this.apiUrl, serviceConfig.apiUrl));
    }
    async translate(payload) {
      let { text, from, to } = payload;
      if (!text)
        return { ...payload };
      let adaptedFrom = _Google.langMap.get(from) || "auto", adaptedTo = _Google.langMap.get(to) || to, result = await this.fetchWithoutToken(text, adaptedFrom, adaptedTo);
      if (!result)
        throw new Error("google translate NETWORK_ERROR");
      if (!result.data[0] || result.data[0].length <= 0)
        throw new Error("google translate API_SERVER_ERROR");
      return {
        text: result.data[0].map((item) => item[0]).filter(Boolean).join(""),
        from: _Google.langMapReverse.get(result.data[2]) || "auto",
        to
      };
    }
    async fetchWithoutToken(text, from, to) {
      let url = "https://translate.googleapis.com/translate_a/single?" + new URLSearchParams({
        client: "gtx",
        dt: "t",
        sl: from,
        tl: to,
        q: text
      }).toString();
      return { data: await request2({
        retry: 2,
        url
      }) };
    }
  }, Google = _Google;
  Google.langMap = new Map(langMap4), Google.langMapReverse = new Map(
    langMap4.map(([translatorLang, lang]) => [lang, translatorLang])
  );

  // services/d/extractors.ts
  function extractSplitSentences(response) {
    return response.result.texts;
  }

  // services/d/hacks.ts
  function calculateValidTimestamp(timestamp, iCount) {
    return iCount ? timestamp + (iCount - timestamp % iCount) : timestamp;
  }
  function count(sentence, part) {
    return sentence.split(part).length - 1;
  }
  function generateTimestamp(sentences) {
    let now = Date.now(), iCount = 1;
    for (let sentence of sentences)
      iCount += count(sentence, "i");
    return calculateValidTimestamp(now, iCount);
  }
  function randRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function generateId() {
    return randRange(1e6, 1e8);
  }

  // services/d/settings.ts
  var API_URL = "https://www2.deepl.com/jsonrpc", AUTO = "auto", SUPPORTED_LANGUAGES = [
    { code: "BG", language: "Bulgarian" },
    { code: "ZH", language: "Chinese" },
    { code: "CS", language: "Czech" },
    { code: "DA", language: "Danish" },
    { code: "NL", language: "Dutch" },
    { code: "EN", language: "English" },
    { code: "ET", language: "Estonian" },
    { code: "FI", language: "Finnish" },
    { code: "FR", language: "French" },
    { code: "DE", language: "German" },
    { code: "EL", language: "Greek" },
    { code: "HU", language: "Hungarian" },
    { code: "IT", language: "Italian" },
    { code: "JA", language: "Japanese" },
    { code: "LV", language: "Latvian" },
    { code: "LT", language: "Lithuanian" },
    { code: "PL", language: "Polish" },
    { code: "PT", language: "Portuguese" },
    { code: "RO", language: "Romanian" },
    { code: "RU", language: "Russian" },
    { code: "SK", language: "Slovak" },
    { code: "SL", language: "Slovenian" },
    { code: "ES", language: "Spanish" },
    { code: "SV", language: "Swedish" }
  ], SUPPORTED_FORMALITY_TONES = ["formal", "informal"];

  // services/d/generators.ts
  function generateSplitSentencesRequestData(text, sourceLanguage = AUTO, identifier = generateId()) {
    return {
      jsonrpc: "2.0",
      method: "LMT_split_text",
      params: {
        commonJobParams: { mode: "translate" },
        lang: {
          lang_user_selected: sourceLanguage,
          user_preferred_langs: []
        },
        texts: text
      },
      id: identifier
    };
  }
  function generateJobs(sentences, beams = 1) {
    let jobs = [], id = 0;
    for (let i3 = 0; i3 < sentences.length; i3++) {
      let chunks = sentences[i3].chunks;
      for (let j6 = 0; j6 < chunks.length; j6++) {
        let chunk = chunks[j6];
        jobs.push({
          kind: "default",
          _index: i3,
          // raw_en_sentence: sentence,
          sentences: [{
            id,
            text: chunk.sentences[0].text,
            prefix: chunk.sentences[0].prefix
          }],
          raw_en_context_before: chunks.slice(0, id).map(
            (chunk2) => chunk2.sentences[0].text
          ),
          raw_en_context_after: id + 1 < chunks.length ? [chunks[id + 1].sentences[0].text] : [],
          preferred_num_beams: beams
        }), id++;
      }
    }
    return jobs;
  }
  function splitedResultToArray(sentences) {
    return sentences.reduce((jobs, sentence) => {
      let chunks = sentence.chunks;
      for (let chunk of chunks)
        jobs.push(chunk.sentences[0].text);
      return jobs;
    }, []);
  }
  function generateCommonJobParams(formality) {
    if (!formality)
      return {};
    if (!SUPPORTED_FORMALITY_TONES.includes(formality))
      throw new Error("Formality tone '{formality_tone}' not supported.");
    return { formality };
  }
  function generateTranslationRequestData(sourceLanguage, targetLanguage, sentences, identifier = generateId(), alternatives = 1, formality) {
    let allSentences = splitedResultToArray(sentences);
    return {
      jsonrpc: "2.0",
      method: "LMT_handle_jobs",
      params: {
        jobs: generateJobs(sentences, alternatives),
        lang: {
          user_preferred_langs: [targetLanguage, sourceLanguage],
          source_lang_computed: sourceLanguage,
          target_lang: targetLanguage
        },
        priority: 1,
        commonJobParams: generateCommonJobParams(formality),
        timestamp: generateTimestamp(splitedResultToArray(sentences))
      },
      id: identifier
    };
  }

  // services/d/utils.ts
  function createAbbreviationsDictionary(languages2 = SUPPORTED_LANGUAGES) {
    return languages2.reduce((acc, lang) => (acc[lang.code.toLowerCase()] = lang.code, acc[lang.language.toLowerCase()] = lang.code, acc), {});
  }
  function abbreviateLanguage(language) {
    return createAbbreviationsDictionary()[language.toLowerCase()];
  }

  // services/d/api.ts
  var headers = {
    Accept: "*/*",
    "Accept-Language": "en-US;q=0.8,en;q=0.7",
    "Content-Type": "application/json",
    Origin: "https://www.deepl.com",
    Referer: "https://www.deepl.com/translator",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site"
  };
  function stringifyJson(object) {
    return JSON.stringify(object).replace('"method":"', () => {
      let self2 = object;
      return (self2.id + 3) % 13 === 0 || (self2.id + 5) % 29 === 0 ? '"method" : "' : '"method": "';
    });
  }
  async function splitSentences2(API_URL2, text, sourceLanguage, identifier) {
    let data = generateSplitSentencesRequestData(
      text,
      sourceLanguage,
      identifier
    );
    return await request2(
      {
        retry: 2,
        method: "POST",
        url: API_URL2 + "?method=LMT_split_text",
        headers,
        body: stringifyJson(data)
      }
    );
  }
  async function requestTranslation(API_URL2, text, targetLanguage, sourceLanguage, identifier, alternatives, formalityTone) {
    let splitResult = await splitSentences2(
      API_URL2,
      text,
      sourceLanguage,
      identifier
    ), data = generateTranslationRequestData(
      sourceLanguage === "auto" ? splitResult.result.lang.detected : sourceLanguage,
      targetLanguage,
      extractSplitSentences(splitResult),
      identifier,
      alternatives,
      formalityTone
    ), jobsIndexes = data.params.jobs.map((job) => job._index);
    data.params.jobs = data.params.jobs.map((job) => {
      let newJob = { ...job };
      return delete newJob._index, newJob;
    });
    let response = await request2({
      retry: 2,
      method: "POST",
      url: API_URL2 + "?method=LMT_handle_jobs",
      body: stringifyJson(data),
      headers
    }), finalResult = {
      from: splitResult.result.lang.detected,
      to: targetLanguage,
      text: []
    };
    return response.result.translations.forEach((translation, index) => {
      let jobIndex = jobsIndexes[index];
      finalResult.text[jobIndex] === void 0 && (finalResult.text[jobIndex] = "");
      let originalSentencePrefix = data.params.jobs[index].sentences[0].prefix, originalSentencePre = data.params.jobs[index].sentences[0].prefix;
      finalResult.text[jobIndex] = finalResult.text[jobIndex] + originalSentencePrefix + translation.beams[0].sentences[0].text;
    }), finalResult;
  }
  async function translate(API_URL2, text, targetLanguage, sourceLanguage = AUTO, identifier, alternatives, formalityTone) {
    return text ? text && text.length === 1 && text[0] === "" ? {
      text: [""],
      from: sourceLanguage,
      to: targetLanguage
    } : requestTranslation(
      API_URL2,
      text,
      abbreviateLanguage(targetLanguage),
      abbreviateLanguage(sourceLanguage) ?? "auto",
      identifier,
      alternatives,
      formalityTone
    ) : {
      text: [],
      from: sourceLanguage,
      to: targetLanguage
    };
  }

  // services/d/mod.ts
  var langMap5 = [
    ["auto", "auto"],
    ["zh-CN", "ZH"],
    ["zh-TW", "ZH"],
    ["de", "DE"],
    ["en", "EN"],
    ["es", "ES"],
    ["fr", "FR"],
    ["it", "IT"],
    ["ja", "JA"],
    ["pt", "PT"],
    ["ru", "RU"],
    ["tr", "tr"]
  ], _D = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.maxTextGroupLength = 3;
      this.maxTextLength = 800;
      this.isSupportList = !0;
      this.API_URL = API_URL;
      serviceConfig && serviceConfig.apiUrl && (this.API_URL = mergeUrl(API_URL, serviceConfig.apiUrl));
    }
    async translateList(payload) {
      let { text, to, from } = payload, result = await translate(
        this.API_URL,
        text,
        _D.langMap.get(to) || to,
        _D.langMap.get(from) || "auto"
      );
      return {
        text: result.text,
        from: _D.langMapReverse.get(result.from),
        to: _D.langMapReverse.get(result.to)
      };
    }
  }, D9 = _D;
  /** Translator lang to custom lang */
  D9.langMap = new Map(langMap5), /** Custom lang to translator lang */
  D9.langMapReverse = new Map(
    langMap5.map(([translatorLang, lang]) => [lang, translatorLang])
  );

  // services/transmart.ts
  var langMap6 = [
    ["auto", "auto"],
    ["zh-CN", "zh"],
    ["zh-TW", "zh-TW"],
    ["de", "de"],
    ["en", "en"],
    ["es", "es"],
    ["fr", "fr"],
    ["id", "id"],
    ["it", "it"],
    ["ja", "ja"],
    ["ko", "kr"],
    ["ms", "ms"],
    ["pt", "pt"],
    ["ru", "ru"],
    ["th", "th"],
    ["tr", "tr"],
    ["vi", "vi"]
  ], API = "https://transmart.qq.com/api/imt", _Transmart = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.maxTextGroupLength = 50;
      this.maxTextLength = 1e3;
      this.throttleLimit = 1e3;
      this.isSupportList = !1;
      this.clientKey = btoa(
        "transmart_crx_" + navigator.userAgent
      ).slice(0, 100);
    }
    async translate(payload) {
      let { text, to } = payload, sourceLanguage = await this.detectLanguage(text), remoteSourceLanguage = _Transmart.langMap.get(sourceLanguage) || sourceLanguage, remoteTargetLanguage = _Transmart.langMap.get(to) || to;
      if (sourceLanguage === to)
        return {
          text,
          from: sourceLanguage,
          to
        };
      let requestPayload = JSON.stringify(
        {
          header: {
            fn: "auto_translation_block",
            client_key: this.clientKey
          },
          source: {
            text_block: text,
            lang: remoteSourceLanguage,
            orig_url: payload.url
          },
          target: { lang: remoteTargetLanguage }
        }
      ), data = await request2({
        url: API,
        body: requestPayload,
        method: "POST",
        retry: 2
      });
      if (data.header.ret_code !== "succ")
        throw new Error(data.message || data.header.ret_code);
      return {
        text: data.auto_translation,
        from: sourceLanguage || "auto",
        to
      };
    }
    async translateList(payload) {
      let { from, text, to } = payload;
      if (text.length === 1) {
        let result = await this.translate({
          from,
          text: text[0],
          to,
          url: payload.url,
          options: payload.options
        });
        return {
          text: [result.text],
          from: result.from,
          to: result.to
        };
      }
      let sourceLanguage = await this.detectLanguage(text.join(`
`));
      if (sourceLanguage === to)
        return {
          text,
          from: sourceLanguage,
          to
        };
      let remoteSourceLanguage = _Transmart.langMap.get(sourceLanguage) || sourceLanguage, remoteTargetLanguage = _Transmart.langMap.get(to) || to, requestPayload = JSON.stringify(
        {
          header: {
            fn: "auto_translation",
            client_key: this.clientKey
          },
          source: {
            text_list: text,
            lang: remoteSourceLanguage,
            orig_url: payload.url
          },
          target: { lang: remoteTargetLanguage },
          type: "plain"
        }
      ), data = await request2({
        url: API,
        body: requestPayload,
        method: "POST"
      });
      if (data.header.ret_code !== "succ")
        throw new Error(data.message || data.header.ret_code);
      return {
        text: data.auto_translation,
        from: sourceLanguage || "auto",
        to
      };
    }
    detectLanguageLocally(text) {
      return this.detectLanguageRemotely(text);
    }
    async detectLanguageRemotely(text) {
      let payload = {
        header: {
          fn: "text_analysis",
          client_key: this.clientKey
        },
        text: text.slice(0, 280)
      }, response = await request2({
        url: API,
        method: "POST",
        body: JSON.stringify(payload)
      });
      if (response.header.ret_code !== "succ")
        throw new Error(response.message || response.header.ret_code);
      let remoteLanguage = response.language, language = _Transmart.langMapReverse.get(remoteLanguage);
      return language || remoteLanguage;
    }
  }, Transmart = _Transmart;
  /** Translator lang to custom lang */
  Transmart.langMap = new Map(langMap6), /** Custom lang to translator lang */
  Transmart.langMapReverse = new Map(
    langMap6.map(([translatorLang, lang]) => [lang, translatorLang])
  );

  // utils/random.ts
  function getRandomBoolean() {
    return Math.random() >= 0;
  }

  // services/mock.ts
  var Mock = class extends Translation {
    constructor() {
      super(...arguments);
      this.isSupportList = !0;
    }
    async translate(payload) {
      let { text } = payload;
      await mockRequest(), await delay(5e3);
      let startSpaceLength = text.match(/^\s*/)[0].length;
      return {
        text: text.slice(0, startSpaceLength) + "\u6A21\u62DF\uFF1A" + text.slice(startSpaceLength, -6),
        from: payload.from,
        to: payload.to
      };
    }
    async translateList(payload) {
      let { text: textList, from, to } = payload;
      if (await mockRequest(), !getRandomBoolean())
        throw new Error("\u6A21\u62DF\u9519\u8BEF");
      return textList.length === 0 ? {
        from,
        to,
        text: [""]
      } : {
        from,
        to,
        text: textList.map((text) => {
          let startSpaceLength = text.match(/^\s*/)[0].length;
          return text.slice(0, startSpaceLength) + "\u6A21\u62DF\uFF1A" + text.slice(startSpaceLength, -6);
        })
      };
    }
  };

  // services/openl.ts
  var rawLangMap = [
    ["auto", "auto"],
    ["zh-CN", "zh"],
    ["en", "en"],
    ["ja", "ja"],
    ["de", "de"],
    ["fr", "fr"],
    ["it", "it"],
    ["es", "es"],
    ["nl", "nl"],
    ["pl", "pl"],
    ["pt", "pt"],
    ["ru", "ru"]
  ], langMap7 = new Map(rawLangMap), langMapReverse = new Map(
    rawLangMap.map(([translatorLang, lang]) => [lang, translatorLang])
  ), _Openl = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.apikey = "";
      this.codename = _Openl.DEFAULT_CODENAME;
      this.isSupportList = !1;
      this.maxTextGroupLength = 1;
      if (!serviceConfig || !serviceConfig.apikey)
        throw new Error("apikey are required");
      this.apikey = serviceConfig.apikey?.trim(), serviceConfig.codename && (this.codename = serviceConfig.codename);
    }
    static getAllProps() {
      return [
        ..._Openl.getProps(),
        {
          type: "password",
          name: "apikey",
          required: !0
        }
      ];
    }
    static getProps() {
      return [{
        type: "select",
        name: "codename",
        label: "translationEngine",
        default: _Openl.DEFAULT_CODENAME,
        required: !1,
        options: [
          {
            label: "translationServices.deepl",
            value: "deepl"
          },
          {
            label: "translationServices.youdao",
            value: "youdao"
          },
          {
            label: "translationServices.tencent",
            value: "tencent"
          },
          {
            label: "translationServices.aliyun",
            value: "aliyun"
          },
          {
            label: "translationServices.baidu",
            value: "baidu"
          },
          {
            label: "translationServices.caiyun",
            value: "caiyun"
          },
          {
            label: "translationServices.wechat",
            value: "wechat"
          },
          {
            label: "translationServices.azure",
            value: "azure"
          },
          {
            label: "translationServices.ibm",
            value: "ibm"
          },
          {
            label: "translationServices.aws",
            value: "aws"
          },
          {
            label: "translationServices.google",
            value: "google"
          }
        ]
      }];
    }
    async translate(payload) {
      let { text, from, to } = payload, response = await request2(
        {
          retry: 2,
          url: `https://api.openl.club/services/${this.codename}/translate`,
          headers: {
            "content-type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({
            apikey: this.apikey,
            text,
            source_lang: langMap7.get(from) || "auto",
            target_lang: langMap7.get(to) || to
          })
        }
      );
      if (response.status) {
        let result = response;
        return {
          text: result.result,
          from: langMapReverse.get(result.source_lang),
          to: langMapReverse.get(result.target_lang)
        };
      } else
        throw new Error(response.msg);
    }
  }, Openl = _Openl;
  Openl.DEFAULT_CODENAME = "deepl";
  var openl_default = Openl;

  // services/deepl.ts
  var rawLangMap2 = [
    ["auto", ""],
    ["zh-CN", "ZH"],
    ["zh-TW", "ZH"],
    ["en", "EN"],
    ["de", "DE"],
    ["fr", "FR"],
    ["it", "IT"],
    ["ja", "JA"],
    ["es", "ES"],
    ["nl", "NL"],
    ["pl", "PL"],
    ["pt", "PT"],
    ["ru", "RU"]
  ], langMap8 = new Map(rawLangMap2), langMapReverse2 = new Map(
    rawLangMap2.map(([translatorLang, lang]) => [lang, translatorLang])
  ), Deepl = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.authKey = "";
      this.maxTextGroupLength = 10;
      this.maxTextLength = 1200;
      this.freeApiUrl = "https://api-free.deepl.com/v2/translate";
      this.proApiUrl = "https://api.deepl.com/v2/translate";
      this.immersiveTranslateApiUrl = "https://deepl.immersivetranslate.com/v2/translate";
      if (!serviceConfig || !serviceConfig.authKey)
        throw new Error("authKey are required");
      serviceConfig && serviceConfig.freeApiUrl && (this.freeApiUrl = mergeUrl(this.freeApiUrl, serviceConfig.freeApiUrl)), serviceConfig && serviceConfig.proApiUrl && (this.proApiUrl = mergeUrl(this.proApiUrl, serviceConfig.proApiUrl)), serviceConfig && serviceConfig.immersiveTranslateApiUrl && (this.immersiveTranslateApiUrl = mergeUrl(
        this.immersiveTranslateApiUrl,
        serviceConfig.immersiveTranslateApiUrl
      )), this.authKey = serviceConfig.authKey?.trim();
    }
    static getAllProps() {
      return [{
        name: "authKey",
        required: !0,
        type: "password"
      }];
    }
    async translateList(payload) {
      let { from, to, text } = payload, bodyParams = {
        source_lang: langMap8.get(from) || "",
        target_lang: langMap8.get(to) || to
      }, bodySearchParams = new URLSearchParams(bodyParams);
      text.forEach((item) => {
        bodySearchParams.append("text", item);
      });
      let body = bodySearchParams.toString(), deeplEndpoint = this.freeApiUrl;
      this.authKey.endsWith(":im") ? deeplEndpoint = this.immersiveTranslateApiUrl : this.authKey.endsWith(":fx") || (deeplEndpoint = this.proApiUrl);
      let response = await request2(
        {
          retry: 2,
          url: deeplEndpoint,
          method: "POST",
          body,
          headers: {
            Authorization: "DeepL-Auth-Key " + this.authKey,
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          extra: {
            overrideMimeType: "application/json; charset=utf-8"
          }
        }
      ), { translations: translations2 } = response;
      return {
        text: translations2.map((t5) => t5.text),
        from: translations2[0] && langMapReverse2.get(translations2[0].detected_source_language) || from,
        to
      };
    }
  }, deepl_default = Deepl;

  // services/niu.ts
  var rawLangMap3 = [
    ["auto", "auto"],
    ["zh-CN", "zh"],
    ["zh-TW", "cht"],
    ["en", "en"],
    ["ja", "ja"],
    ["ru", "ru"],
    ["es", "es"],
    ["de", "de"],
    ["ko", "ko"],
    ["fr", "fr"]
  ], langMap9 = new Map(rawLangMap3), Niu = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.APIKEY = "";
      this.isSupportList = !1;
      if (!serviceConfig || !serviceConfig.APIKEY)
        throw new Error("APIKEY are required");
      this.APIKEY = serviceConfig.APIKEY?.trim();
    }
    static getAllProps() {
      return [{
        name: "APIKEY",
        required: !0,
        type: "password"
      }];
    }
    async translate(payload) {
      let { text, from, to } = payload, options2 = {
        url: "https://api.niutrans.com/NiuTransServer/translation",
        retry: 2,
        headers: {
          "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          src_text: text,
          from: langMap9.get(from) || from,
          to: langMap9.get(to) || to,
          apikey: this.APIKEY
        })
      }, response = await request2(
        options2
      );
      if (response.tgt_text) {
        let result = response.tgt_text;
        return result.endsWith(`
`) && (result = result.slice(0, -1)), {
          text: result,
          from,
          to
        };
      } else
        throw new Error(JSON.stringify(response));
    }
  }, niu_default = Niu;

  // services/volc/sign.ts
  var unsignableHeaders = [
    "authorization",
    "content-type",
    "content-length",
    "user-agent",
    "presigned-expires",
    "expect"
  ], constant = {
    algorithm: "HMAC-SHA256",
    v4Identifier: "request",
    dateHeader: "X-Date",
    tokenHeader: "X-Security-Token",
    contentSha256Header: "X-Content-Sha256",
    notSignBody: "X-NotSignBody",
    kDatePrefix: "",
    credential: "X-Credential",
    algorithmKey: "X-Algorithm",
    signHeadersKey: "X-SignedHeaders",
    signQueriesKey: "X-SignedQueries",
    signatureKey: "X-Signature"
  }, uriEscape = (str) => {
    try {
      return encodeURIComponent(str).replace(/[^A-Za-z0-9_.~\-%]+/g, escape).replace(
        /[*]/g,
        (ch) => `%${ch.charCodeAt(0).toString(16).toUpperCase()}`
      );
    } catch {
      return "";
    }
  }, queryParamsToString = (params) => Object.keys(params).map((key) => {
    let val = params[key];
    if (typeof val > "u" || val === null)
      return;
    let escapedKey = uriEscape(key);
    if (escapedKey)
      return Array.isArray(val) ? `${escapedKey}=${val.map(uriEscape).sort().join(`&${escapedKey}=`)}` : `${escapedKey}=${uriEscape(val)}`;
  }).filter((v3) => v3).join("&"), Signer = class {
    constructor(request3, serviceName, options2) {
      this.request = request3, this.request.headers = request3.headers || {}, this.serviceName = serviceName, options2 = options2 || {}, this.bodySha256 = options2.bodySha256, this.request.params = this.sortParams(this.request.params);
    }
    sortParams(params) {
      let newParams = {};
      return params && Object.keys(params).filter((key) => {
        let value = params[key];
        return typeof value < "u" && value !== null;
      }).sort().map((key) => {
        newParams[key] = params[key];
      }), newParams;
    }
    async addAuthorization(credentials, date) {
      let datetime = this.getDateTime(date);
      await this.addHeaders(credentials, datetime), this.request.headers.Authorization = await this.authorization(
        credentials,
        datetime
      );
    }
    async authorization(credentials, datetime) {
      let parts = [], credString = this.credentialString(datetime);
      return parts.push(
        `${constant.algorithm} Credential=${credentials.accessKeyId}/${credString}`
      ), parts.push(`SignedHeaders=${this.signedHeaders()}`), parts.push(`Signature=${await this.signature(credentials, datetime)}`), parts.join(", ");
    }
    async getSignUrl(credentials, date) {
      let datetime = this.getDateTime(date), query = { ...this.request.params }, params = this.request.params, headers2 = this.request.headers;
      credentials.sessionToken && (query[constant.tokenHeader] = credentials.sessionToken), query[constant.dateHeader] = datetime, query[constant.notSignBody] = "", query[constant.credential] = `${credentials.accessKeyId}/${this.credentialString(datetime)}`, query[constant.algorithmKey] = constant.algorithm, query[constant.signHeadersKey] = "", query[constant.signQueriesKey] = void 0, query[constant.signatureKey] = void 0, query = this.sortParams(query), this.request.params = query, this.request.headers = {};
      let sig = await this.signature(credentials, datetime);
      return this.request.params = params, this.request.headers = headers2, query[constant.signQueriesKey] = Object.keys(query).sort().join(";"), query[constant.signatureKey] = sig, queryParamsToString(query);
    }
    getDateTime(date) {
      return this.iso8601(date).replace(/[:\-]|\.\d{3}/g, "");
    }
    async addHeaders(credentials, datetime) {
      if (this.request.headers[constant.dateHeader] = datetime, credentials.sessionToken && (this.request.headers[constant.tokenHeader] = credentials.sessionToken), this.request.body) {
        let body = this.request.body;
        this.request.headers[constant.contentSha256Header] = await sha256(body);
      }
    }
    async signature(credentials, datetime) {
      let signingKey = await this.getSigningKey(
        credentials,
        datetime.substr(0, 8),
        this.request.region,
        this.serviceName
      );
      return hex(await hmacSha256(await this.stringToSign(datetime), signingKey));
    }
    async stringToSign(datetime) {
      let parts = [];
      parts.push(constant.algorithm), parts.push(datetime), parts.push(this.credentialString(datetime));
      let x5 = await this.canonicalString();
      return parts.push(
        await this.hexEncodedHash(x5)
      ), parts.join(`
`);
    }
    async canonicalString() {
      let parts = [], pathname = this.request.pathname || "/";
      parts.push(this.request.method.toUpperCase()), parts.push(pathname);
      let queryString = queryParamsToString(this.request.params) || "";
      return parts.push(queryString), parts.push(`${this.canonicalHeaders()}
`), parts.push(this.signedHeaders()), parts.push(await this.hexEncodedBodyHash()), parts.join(`
`);
    }
    canonicalHeaders() {
      let headers2 = [];
      Object.keys(this.request.headers).forEach((key) => {
        headers2.push([key, this.request.headers[key]]);
      }), headers2.sort((a6, b4) => a6[0].toLowerCase() < b4[0].toLowerCase() ? -1 : 1);
      let parts = [];
      return headers2.forEach((item) => {
        let key = item[0].toLowerCase();
        if (this.isSignableHeader(key)) {
          let value = item[1];
          if (typeof value > "u" || value === null || typeof value.toString != "function")
            throw new Error(`Header ${key} contains invalid value`);
          parts.push(`${key}:${this.canonicalHeaderValues(value.toString())}`);
        }
      }), parts.join(`
`);
    }
    canonicalHeaderValues(values) {
      return values.replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "");
    }
    signedHeaders() {
      let keys = [];
      return Object.keys(this.request.headers).forEach((key) => {
        key = key.toLowerCase(), this.isSignableHeader(key) && keys.push(key);
      }), keys.sort().join(";");
    }
    signedQueries() {
      return Object.keys(this.request.params).join(";");
    }
    credentialString(datetime) {
      return this.createScope(
        datetime.substr(0, 8),
        this.request.region,
        this.serviceName
      );
    }
    async hexEncodedHash(str) {
      return await sha256(str);
    }
    async hexEncodedBodyHash() {
      return this.request.headers[constant.contentSha256Header] ? this.request.headers[constant.contentSha256Header] : this.request.body ? await this.hexEncodedHash(queryParamsToString(this.request.body)) : await this.hexEncodedHash("");
    }
    isSignableHeader(key) {
      return unsignableHeaders.indexOf(key) < 0;
    }
    iso8601(date) {
      return date === void 0 && (date = /* @__PURE__ */ new Date()), date.toISOString().replace(/\.\d{3}Z$/, "Z");
    }
    async getSigningKey(credentials, date, region, service) {
      let kDate = await hmacSha256(
        date,
        `${constant.kDatePrefix}${credentials.secretKey}`
      ), kRegion = await hmacSha256(region, kDate), kService = await hmacSha256(service, kRegion);
      return hmacSha256(constant.v4Identifier, kService);
    }
    createScope(date, region, serviceName) {
      return [date.substr(0, 8), region, serviceName, constant.v4Identifier].join(
        "/"
      );
    }
  };

  // services/volc/mod.ts
  var rawLangMap4 = [
    ["af", "af"],
    ["am", "am"],
    ["ar", "ar"],
    ["az", "az"],
    ["be", "be"],
    ["bg", "bg"],
    ["bn", "bn"],
    ["bs", "bs"],
    ["ca", "ca"],
    ["co", "co"],
    ["cs", "cs"],
    ["cy", "cy"],
    ["da", "da"],
    ["de", "de"],
    ["el", "el"],
    ["en", "en"],
    ["eo", "eo"],
    ["es", "es"],
    ["et", "et"],
    ["eu", "eu"],
    ["fa", "fa"],
    ["fi", "fi"],
    ["fj", "fj"],
    ["fr", "fr"],
    ["fy", "fy"],
    ["ga", "ga"],
    ["gd", "gd"],
    ["gl", "gl"],
    ["gu", "gu"],
    ["ha", "ha"],
    ["he", "he"],
    ["hi", "hi"],
    ["hr", "hr"],
    ["ht", "ht"],
    ["hu", "hu"],
    ["hy", "hy"],
    ["id", "id"],
    ["ig", "ig"],
    ["is", "is"],
    ["it", "it"],
    ["ja", "ja"],
    ["ka", "ka"],
    ["kk", "kk"],
    ["km", "km"],
    ["kn", "kn"],
    ["ko", "ko"],
    ["ku", "ku"],
    ["ky", "ky"],
    ["la", "la"],
    ["lb", "lb"],
    ["lo", "lo"],
    ["lt", "lt"],
    ["lv", "lv"],
    ["mg", "mg"],
    ["mi", "mi"],
    ["mk", "mk"],
    ["ml", "ml"],
    ["mn", "mn"],
    ["mr", "mr"],
    ["ms", "ms"],
    ["mt", "mt"],
    ["my", "my"],
    ["ne", "ne"],
    ["nl", "nl"],
    ["no", "no"],
    ["ny", "ny"],
    ["pa", "pa"],
    ["pl", "pl"],
    ["ps", "ps"],
    ["pt", "pt"],
    ["ro", "ro"],
    ["ru", "ru"],
    ["sd", "sd"],
    ["si", "si"],
    ["sk", "sk"],
    ["sl", "sl"],
    ["sm", "sm"],
    ["sn", "sn"],
    ["so", "so"],
    ["sq", "sq"],
    ["sr", "sr"],
    ["st", "st"],
    ["su", "su"],
    ["sv", "sv"],
    ["sw", "sw"],
    ["ta", "ta"],
    ["te", "te"],
    ["tg", "tg"],
    ["th", "th"],
    ["tn", "tn"],
    ["to", "to"],
    ["tr", "tr"],
    ["ty", "ty"],
    ["ug", "ug"],
    ["uk", "uk"],
    ["ur", "ur"],
    ["uz", "uz"],
    ["vi", "vi"],
    ["xh", "xh"],
    ["yi", "yi"],
    ["yo", "yo"],
    ["zh-CN", "zh"],
    ["zh-TW", "zh-Hans"],
    ["zu", "zu"]
  ], langMap10 = new Map(rawLangMap4), langMapReverse3 = new Map(
    rawLangMap4.map(([translatorLang, lang]) => [lang, translatorLang])
  ), Volc = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.accessKeyId = "";
      this.secretAccessKey = "";
      this.maxTextGroupLength = 8;
      if (!serviceConfig || !serviceConfig.accessKeyId || !serviceConfig.secretAccessKey)
        throw new Error("accessKeyId and secretAccessKey are required");
      this.accessKeyId = serviceConfig.accessKeyId?.trim(), this.secretAccessKey = serviceConfig.secretAccessKey?.trim();
    }
    static getAllProps() {
      return [{
        name: "accessKeyId",
        required: !0,
        type: "text"
      }, {
        name: "secretAccessKey",
        required: !0,
        type: "password"
      }];
    }
    async remoteDetectLanguage(text) {
      let requestObj = {
        region: "cn-north-1",
        method: "POST",
        params: {
          Action: "LangDetect",
          Version: "2020-06-01"
        },
        pathname: "/",
        headers: {
          "Content-Type": "application/json",
          host: "open.volcengineapi.com"
        },
        body: JSON.stringify({
          TextList: [text]
        })
      }, signer = new Signer(requestObj, "translate");
      await signer.addAuthorization({
        accessKeyId: this.accessKeyId,
        secretKey: this.secretAccessKey
      });
      let urlSearchParams = new URLSearchParams(requestObj.params), response = await request2(
        {
          retry: 2,
          url: "https://open.volcengineapi.com" + requestObj.pathname + "?" + urlSearchParams.toString(),
          headers: signer.request.headers,
          method: requestObj.method,
          body: requestObj.body
        }
      );
      if (response.DetectedLanguageList && response.DetectedLanguageList.length > 0)
        return response.DetectedLanguageList[0].Language;
      if (response.ResponseMetadata && response.ResponseMetadata.Error) {
        let error = response.ResponseMetadata.Error;
        throw new CommonError(error.Code, error.Message);
      } else if (response.ResponseMetaData && response.ResponseMetaData.Error) {
        let error = response.ResponseMetaData.Error;
        throw new CommonError(error.Code, error.Message);
      } else
        throw new Error("response: " + JSON.stringify(response));
    }
    async translateList(payload) {
      let { text, from, to } = payload, remoteFrom = langMap10.get(from), bodyParams = {
        TargetLanguage: langMap10.get(to) || to,
        TextList: text
      };
      remoteFrom ? bodyParams.SourceLanguage = remoteFrom : bodyParams.SourceLanguage = await this.remoteDetectLanguage(
        text.join(`
`).slice(0, 1e3)
      );
      let requestObj = {
        region: "cn-north-1",
        method: "POST",
        params: {
          Action: "TranslateText",
          Version: "2020-06-01"
        },
        pathname: "/",
        headers: {
          "Content-Type": "application/json",
          host: "open.volcengineapi.com"
        },
        body: JSON.stringify(bodyParams)
      }, signer = new Signer(requestObj, "translate");
      await signer.addAuthorization({
        accessKeyId: this.accessKeyId,
        secretKey: this.secretAccessKey
      });
      let urlSearchParams = new URLSearchParams(requestObj.params), response = await request2(
        {
          retry: 2,
          url: "https://open.volcengineapi.com" + requestObj.pathname + "?" + urlSearchParams.toString(),
          headers: signer.request.headers,
          method: requestObj.method,
          body: requestObj.body
        }
      );
      if (response.TranslationList) {
        let resultText = response.TranslationList.map((item) => item.Translation), remoteFrom2 = from;
        return response.TranslationList.length > 0 && response.TranslationList[0].DetectedSourceLanguage && (remoteFrom2 = langMapReverse3.get(
          response.TranslationList[0].DetectedSourceLanguage
        ) || from), {
          text: resultText,
          from: remoteFrom2,
          to
        };
      } else if (response.ResponseMetadata && response.ResponseMetadata.Error) {
        let error = response.ResponseMetadata.Error;
        throw new CommonError(error.Code, error.Message);
      } else if (response.ResponseMetaData && response.ResponseMetaData.Error) {
        let error = response.ResponseMetaData.Error;
        throw new CommonError(error.Code, error.Message);
      } else
        throw new Error("response: " + JSON.stringify(response));
    }
  }, mod_default = Volc;

  // services/volc_alpha.ts
  var rawLangMap5 = [
    ["auto", "detect"],
    ["af", "af"],
    ["am", "am"],
    ["ar", "ar"],
    ["az", "az"],
    ["be", "be"],
    ["bg", "bg"],
    ["bn", "bn"],
    ["bs", "bs"],
    ["ca", "ca"],
    ["co", "co"],
    ["cs", "cs"],
    ["cy", "cy"],
    ["da", "da"],
    ["de", "de"],
    ["el", "el"],
    ["en", "en"],
    ["eo", "eo"],
    ["es", "es"],
    ["et", "et"],
    ["eu", "eu"],
    ["fa", "fa"],
    ["fi", "fi"],
    ["fj", "fj"],
    ["fr", "fr"],
    ["fy", "fy"],
    ["ga", "ga"],
    ["gd", "gd"],
    ["gl", "gl"],
    ["gu", "gu"],
    ["ha", "ha"],
    ["he", "he"],
    ["hi", "hi"],
    ["hr", "hr"],
    ["ht", "ht"],
    ["hu", "hu"],
    ["hy", "hy"],
    ["id", "id"],
    ["ig", "ig"],
    ["is", "is"],
    ["it", "it"],
    ["ja", "ja"],
    ["ka", "ka"],
    ["kk", "kk"],
    ["km", "km"],
    ["kn", "kn"],
    ["ko", "ko"],
    ["ku", "ku"],
    ["ky", "ky"],
    ["la", "la"],
    ["lb", "lb"],
    ["lo", "lo"],
    ["lt", "lt"],
    ["lv", "lv"],
    ["mg", "mg"],
    ["mi", "mi"],
    ["mk", "mk"],
    ["ml", "ml"],
    ["mn", "mn"],
    ["mr", "mr"],
    ["ms", "ms"],
    ["mt", "mt"],
    ["my", "my"],
    ["ne", "ne"],
    ["nl", "nl"],
    ["no", "no"],
    ["ny", "ny"],
    ["pa", "pa"],
    ["pl", "pl"],
    ["ps", "ps"],
    ["pt", "pt"],
    ["ro", "ro"],
    ["ru", "ru"],
    ["sd", "sd"],
    ["si", "si"],
    ["sk", "sk"],
    ["sl", "sl"],
    ["sm", "sm"],
    ["sn", "sn"],
    ["so", "so"],
    ["sq", "sq"],
    ["sr", "sr"],
    ["st", "st"],
    ["su", "su"],
    ["sv", "sv"],
    ["sw", "sw"],
    ["ta", "ta"],
    ["te", "te"],
    ["tg", "tg"],
    ["th", "th"],
    ["tn", "tn"],
    ["to", "to"],
    ["tr", "tr"],
    ["ty", "ty"],
    ["ug", "ug"],
    ["uk", "uk"],
    ["ur", "ur"],
    ["uz", "uz"],
    ["vi", "vi"],
    ["xh", "xh"],
    ["yi", "yi"],
    ["yo", "yo"],
    ["zh-CN", "zh"],
    ["zh-TW", "zh-Hans"],
    ["zu", "zu"]
  ], langMap11 = new Map(rawLangMap5), langMapReverse4 = new Map(
    rawLangMap5.map(([translatorLang, lang]) => [lang, translatorLang])
  ), VolcAlpha = class extends Translation {
    constructor() {
      super(...arguments);
      this.maxTextGroupLength = 50;
      this.isSupportList = !1;
    }
    async translate(payload) {
      let { text, from, to } = payload, remoteFrom = langMap11.get(from) || "detect", remoteTo = langMap11.get(to) || to, response = await request2(
        {
          url: "https://translate.volcengine.com/crx/translate/v1/",
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            source_language: remoteFrom,
            target_language: remoteTo,
            text
          })
        }
      );
      if (response.base_resp && response.base_resp.status_code === 0) {
        let resultText = response.translation, remoteFrom2 = from;
        return response.detected_language && (remoteFrom2 = langMapReverse4.get(response.detected_language) || from), {
          text: resultText,
          from: remoteFrom2,
          to
        };
      } else {
        let error = response.base_resp;
        throw new CommonError(error.status_code.toString(), error.status_message);
      }
    }
  };

  // services/deeplx.ts
  var rawLangMap6 = [
    ["auto", "auto"],
    ["zh-CN", "ZH"],
    ["zh-TW", "ZH"],
    ["de", "DE"],
    ["en", "EN"],
    ["es", "ES"],
    ["fr", "FR"],
    ["it", "IT"],
    ["ja", "JA"],
    ["pt", "PT"],
    ["ru", "RU"],
    ["tr", "tr"]
  ], langMap12 = new Map(rawLangMap6), Deeplx = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.url = "";
      this.isSupportList = !1;
      this.maxTextGroupLength = 1;
      if (!serviceConfig || !serviceConfig.url)
        throw new Error(
          "deeplx custom url are required, please check your settings."
        );
      this.url = serviceConfig.url;
    }
    static getAllProps() {
      return [{
        name: "url",
        required: !0,
        type: "text"
      }];
    }
    async translate(payload) {
      let { text, from, to } = payload, result = await request2(
        {
          retry: 2,
          url: this.url,
          headers: {
            "content-type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({
            source_lang: langMap12.get(from) || from,
            target_lang: langMap12.get(to) || to,
            text
          })
        }
      );
      if (result.code === 200)
        return {
          text: result.data,
          from,
          to
        };
      throw new Error(result.message || result.message || "API Error");
    }
  };

  // services/bing/api.js
  var TRANSLATE_API_ROOT = "https://{s}bing.com", TRANSLATE_WEBSITE = TRANSLATE_API_ROOT + "/translator", TRANSLATE_API = TRANSLATE_API_ROOT + "/ttranslatev3", TRANSLATE_SPELL_CHECK_API = TRANSLATE_API_ROOT + "/tspellcheckv3", globalConfigStorageKey = "bingGlobalConfig", rawLangMap7 = [
    ["auto", "auto-detect"],
    ["ar", "ar"],
    ["ga", "ga"],
    ["et", "et"],
    ["bg", "bg"],
    ["is", "is"],
    ["pl", "pl"],
    ["bs", "bs-Latn"],
    ["fa", "fa"],
    ["da", "da"],
    ["de", "de"],
    ["ru", "ru"],
    ["fr", "fr"],
    ["zh-TW", "zh-Hant"],
    ["fil", "fil"],
    ["fj", "fj"],
    ["fi", "fi"],
    ["gu", "gu"],
    ["kk", "kk"],
    ["ht", "ht"],
    ["ko", "ko"],
    ["nl", "nl"],
    ["ca", "ca"],
    ["zh-CN", "zh-Hans"],
    ["cs", "cs"],
    ["kn", "kn"],
    ["otq", "otq"],
    ["tlh", "tlh"],
    ["hr", "hr"],
    ["lv", "lv"],
    ["lt", "lt"],
    ["ro", "ro"],
    ["mg", "mg"],
    ["mt", "mt"],
    ["mr", "mr"],
    ["ml", "ml"],
    ["ms", "ms"],
    ["mi", "mi"],
    ["bn", "bn-BD"],
    ["hmn", "mww"],
    ["af", "af"],
    ["pa", "pa"],
    ["pt", "pt"],
    ["ps", "ps"],
    ["ja", "ja"],
    ["sv", "sv"],
    ["sm", "sm"],
    ["sr-Latn", "sr-Latn"],
    ["sr-Cyrl", "sr-Cyrl"],
    ["no", "nb"],
    ["sk", "sk"],
    ["sl", "sl"],
    ["sw", "sw"],
    ["ty", "ty"],
    ["te", "te"],
    ["ta", "ta"],
    ["th", "th"],
    ["to", "to"],
    ["tr", "tr"],
    ["cy", "cy"],
    ["ur", "ur"],
    ["uk", "uk"],
    ["es", "es"],
    ["he", "iw"],
    ["el", "el"],
    ["hu", "hu"],
    ["it", "it"],
    ["hi", "hi"],
    ["id", "id"],
    ["en", "en"],
    ["yua", "yua"],
    ["yue", "yua"],
    ["vi", "vi"],
    ["ku", "ku"],
    ["km", "kmr"]
  ], langMap13 = new Map(rawLangMap7), langMapReverse5 = new Map(
    rawLangMap7.map(([translatorLang, lang]) => [lang, translatorLang])
  ), MAX_TEXT_LEN = 1e3, globalConfig, globalConfigPromise;
  function replaceSubdomain(url, subdomain) {
    return url.replace("{s}", subdomain ? subdomain + "." : "");
  }
  async function isTokenExpired() {
    if (!globalConfig) {
      let storageValue = await browserAPI.storage.local.get(
        globalConfigStorageKey
      );
      return storageValue && (globalConfig = storageValue[globalConfigStorageKey]), !0;
    }
    let { tokenTs, tokenExpiryInterval } = globalConfig;
    return Date.now() - tokenTs > tokenExpiryInterval;
  }
  async function fetchGlobalConfig() {
    let subdomain, IG, IID, token, key, tokenExpiryInterval, isVertical, frontDoorBotClassification, isSignedInOrCorporateUser, cookie;
    try {
      let finalUrl = replaceSubdomain(TRANSLATE_WEBSITE, subdomain), response = await request2({
        retry: 2,
        url: finalUrl,
        responseType: "raw"
      }), { body, headers: headers2, url } = response;
      subdomain = url.match(/^https?:\/\/(\w+)\.bing\.com/)[1], cookie = headers2["set-cookie"], IG = body.match(/IG:"([^"]+)"/)[1], IID = body.match(/data-iid="([^"]+)"/)[1], [
        key,
        token,
        tokenExpiryInterval,
        isVertical,
        frontDoorBotClassification,
        isSignedInOrCorporateUser
      ] = JSON.parse(
        body.match(/params_AbusePreventionHelper\s?=\s?([^\]]+\])/)[1]
      );
    } catch (e3) {
      throw console.error("failed to fetch global config", e3), e3;
    }
    return globalConfig = {
      subdomain,
      IG,
      IID,
      key,
      token,
      tokenTs: key,
      tokenExpiryInterval,
      isVertical,
      frontDoorBotClassification,
      isSignedInOrCorporateUser,
      cookie,
      // PENDING: reset count if count value is large?
      count: 0
    }, await browserAPI.storage.local.set({
      [globalConfigStorageKey]: globalConfig
    }), globalConfig;
  }
  function makeRequestURL(isSpellCheck) {
    let { IG, IID, subdomain, isVertical } = globalConfig;
    return replaceSubdomain(
      isSpellCheck ? TRANSLATE_SPELL_CHECK_API : TRANSLATE_API,
      subdomain
    ) + "?isVertical=1" + (IG && IG.length ? "&IG=" + IG : "") + (IID && IID.length ? "&IID=" + IID + "." + globalConfig.count++ : "");
  }
  function makeRequestBody(isSpellCheck, text, fromLang, toLang) {
    let { token, key } = globalConfig, body = {
      fromLang,
      text,
      token,
      key
    };
    return !isSpellCheck && toLang && (body.to = toLang), body;
  }
  async function translate2(text, from, to) {
    if (!text || !(text = text.trim()))
      return;
    if (text.length > MAX_TEXT_LEN)
      throw new Error(
        `The supported maximum length of text is ${MAX_TEXT_LEN}. Please shorten the text.`
      );
    globalConfigPromise || (globalConfigPromise = fetchGlobalConfig()), await globalConfigPromise, await isTokenExpired() && (globalConfigPromise = fetchGlobalConfig(), await globalConfigPromise), from = from || "auto", to = to || "zh-CN", from = langMap13.get(from) || from, to = langMap13.get(to) || to;
    let requestURL = makeRequestURL(!1), requestBody = makeRequestBody(
      !1,
      text,
      from,
      to === "auto-detect" ? "zh-Hans" : to
    ), requestHeaders = {
      referer: replaceSubdomain(TRANSLATE_WEBSITE, globalConfig.subdomain),
      // cookie: globalConfig.cookie,
      "content-type": "application/x-www-form-urlencoded"
    }, searchParams = new URLSearchParams(requestBody), finalUrl = requestURL, requestBodyString = searchParams.toString(), body = await request2({
      retry: 2,
      url: finalUrl,
      headers: requestHeaders,
      method: "POST",
      body: requestBodyString
    });
    if (body.ShowCaptcha || body.StatusCode === 401 || body.statusCode) {
      if (globalConfig = null, globalConfigPromise = null, await browserAPI.storage.local.remove(globalConfigStorageKey), body.ShowCaptcha)
        throw new Error(`
      Sorry that bing translator seems to be asking for the captcha,
      Please take care not to request too frequently.
      The response code is ${body.StatusCode}.
    `);
      if (body.StatusCode === 401)
        throw new Error(`
      Max count of translation exceeded. Please try it again later.
      The response code is 401.
    `);
      if (body.statusCode)
        throw new Error(
          `Something went wrong! The response is ${JSON.stringify(body)}.`
        );
    }
    let translation = body[0].translations[0], detectedLang = body[0].detectedLanguage;
    return {
      text: translation.text,
      from: langMapReverse5.get(detectedLang.language),
      to: langMapReverse5.get(translation.to)
    };
  }

  // services/bing/mod.ts
  var Bing = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.isSupportList = !1;
      this.maxTextLength = 1e3;
    }
    async translate(payload) {
      let { text, from, to } = payload;
      return text ? await translate2(text, from, to) : { ...payload };
    }
  };

  // services/baidu.ts
  var rawLangMap8 = [
    ["auto", "auto"],
    ["zh-CN", "zh"],
    ["en", "en"],
    ["yue", "yue"],
    ["wyw", "wyw"],
    ["ja", "jp"],
    ["ko", "kor"],
    ["fr", "fra"],
    ["es", "spa"],
    ["th", "th"],
    ["ar", "ara"],
    ["ru", "ru"],
    ["pt", "pt"],
    ["de", "de"],
    ["it", "it"],
    ["el", "el"],
    ["nl", "nl"],
    ["pl", "pl"],
    ["bg", "bul"],
    ["et", "est"],
    ["da", "dan"],
    ["fi", "fin"],
    ["cs", "cs"],
    ["ro", "rom"],
    ["sl", "slo"],
    ["sv", "swe"],
    ["hu", "hu"],
    ["zh-TW", "cht"],
    ["vi", "vie"]
  ], langMap14 = new Map(rawLangMap8), langMapReverse6 = new Map(
    rawLangMap8.map(([translatorLang, lang]) => [lang, translatorLang])
  ), Baidu = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.endpoint = "https://api.fanyi.baidu.com/api/trans/vip/translate";
      this.appid = "";
      this.key = "";
      this.isSupportList = !1;
      if (!serviceConfig || !serviceConfig.appid || !serviceConfig.key)
        throw new Error("appid and key are required");
      this.appid = serviceConfig.appid?.trim(), this.key = serviceConfig.key?.trim();
    }
    static getAllProps() {
      return [{
        name: "appid",
        required: !0,
        type: "text"
      }, {
        name: "key",
        required: !0,
        type: "password"
      }];
    }
    async translate(payload) {
      let salt = Date.now().toString(), { endpoint } = this, { appid, key } = this, { text, from, to } = payload, params = new URLSearchParams({
        from: langMap14.get(from) || "auto",
        to: langMap14.get(to) || to,
        q: text,
        salt,
        appid,
        sign: md5(appid + text + salt + key)
      }), urlObj = new URL(endpoint);
      urlObj.search = params.toString();
      let data = await request2(
        {
          url: urlObj.toString()
        }
      );
      if (data.error_code)
        throw console.error(
          new Error("[Baidu service]" + data.error_msg)
        ), new CommonError(
          "API_SERVER_ERROR",
          data.error_msg
        );
      let {
        trans_result: transResult,
        from: langDetected
      } = data, transParagraphs = transResult.map(({ dst }) => dst);
      return {
        from: langMapReverse6.get(langDetected) || langDetected,
        to,
        text: transParagraphs.join(`
`)
      };
    }
  }, baidu_default = Baidu;

  // services/caiyun.ts
  var rawLangMap9 = [
    ["auto", "auto"],
    ["zh-CN", "zh"],
    ["en", "en"],
    ["ja", "ja"]
  ], langMap15 = new Map(rawLangMap9), Caiyun = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.token = "";
      if (!serviceConfig || !serviceConfig.token)
        throw new Error("token are required");
      this.token = serviceConfig.token?.trim();
    }
    static getAllProps() {
      return [{
        name: "token",
        required: !0,
        type: "password"
      }];
    }
    async translateList(payload) {
      let { text, from, to } = payload;
      if (!langMap15.get(to))
        throw new Error(`Unsupported language: ${to}`);
      from === "auto" && (from = await detectLanguage({ text: text.join(" "), minLength: 10 }));
      let source = text;
      return {
        text: (await request2(
          {
            retry: 2,
            url: "https://api.interpreter.caiyunai.com/v1/translator",
            headers: {
              "content-type": "application/json",
              "x-authorization": "token " + this.token
            },
            method: "POST",
            body: JSON.stringify({
              source,
              trans_type: `${langMap15.get(from) || "auto"}2${langMap15.get(to)}`
            })
          }
        )).target,
        from,
        to
      };
    }
  }, caiyun_default = Caiyun;

  // services/youdao.ts
  var rawLangMap10 = [
    ["auto", "auto"],
    ["en", "en"],
    ["ru", "ru"],
    ["pt", "pt"],
    ["es", "es"],
    ["zh-CN", "zh-CHS"],
    ["ja", "ja"],
    ["ko", "ko"],
    ["fr", "fr"],
    ["ar", "ar"],
    ["id", "id"],
    ["vi", "vi"],
    ["it", "it"]
  ], langMap16 = new Map(rawLangMap10), langMapReverse7 = new Map(
    rawLangMap10.map(([translatorLang, lang]) => [lang, translatorLang])
  );
  function truncate(q6) {
    let len = q6.length;
    return len <= 20 ? q6 : q6.substring(0, 10) + len + q6.substring(len - 10, len);
  }
  var Youdao = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.isSupportList = !1;
      this.appId = "";
      this.appSecret = "";
      if (!serviceConfig || !serviceConfig.appId || !serviceConfig.appSecret)
        throw new Error("appId and appSecret are required");
      this.appId = serviceConfig.appId?.trim(), this.appSecret = serviceConfig.appSecret?.trim();
    }
    static getAllProps() {
      return [{
        name: "appId",
        required: !0,
        type: "text"
      }, {
        name: "appSecret",
        required: !0,
        type: "password"
      }];
    }
    async translate(payload) {
      let { text, from, to } = payload, salt = (/* @__PURE__ */ new Date()).getTime(), curTime = Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3), str1 = this.appId + truncate(text) + salt + curTime + this.appSecret, sign = await sha256(str1), params = {
        q: text,
        appKey: this.appId,
        salt: salt.toString(),
        from: langMap16.get(from) || "auto",
        to: langMap16.get(to) || to,
        sign,
        signType: "v3",
        curtime: curTime.toString()
      }, urlSearchParams = new URLSearchParams(params), result = await request2(
        {
          url: "https://openapi.youdao.com/api",
          method: "POST",
          body: urlSearchParams.toString(),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      ), l5 = result.l, [remoteFrom, _2] = l5.split("2");
      return {
        text: result.translation.join(`
`),
        from: langMapReverse7.get(remoteFrom),
        to
      };
    }
  }, youdao_default = Youdao;

  // services/mod.ts
  var TranslationServices = {
    mock: {
      class: Mock,
      name: "Mock",
      homepage: "https://www.google.com"
    },
    mock2: {
      class: Mock,
      name: "Mock2",
      homepage: "https://www.google.com"
    },
    google: {
      class: Google,
      name: "Google",
      homepage: "https://translate.google.com/"
    },
    transmart: {
      class: Transmart,
      name: "Transmart",
      homepage: "https://transmart.qq.com/"
    },
    deepl: {
      class: deepl_default,
      name: "DeepL",
      homepage: "https://www.deepl.com/translator",
      docUrl: "https://immersive-translate.owenyoung.com/services/deepL"
    },
    volc: {
      class: mod_default,
      name: "Volc",
      homepage: "https://www.volcengine.com/",
      docUrl: "https://immersive-translate.owenyoung.com/services/volcano"
    },
    volcAlpha: {
      class: VolcAlpha,
      name: "Volc Alpha",
      alpha: !0,
      homepage: "https://www.volcengine.com/"
    },
    bing: {
      class: Bing,
      name: "Bing",
      homepage: "https://www.bing.com/translator"
    },
    // bai: {
    //   class: Bai,
    //   name: "Baidu(Alapa)",
    //   homepage: "https://fanyi.baidu.com/",
    //   alpha: true,
    // },
    tencent: {
      class: Tencent,
      name: "Tencent",
      homepage: "https://fanyi.qq.com/",
      docUrl: "https://immersive-translate.owenyoung.com/services/tencent"
    },
    baidu: {
      class: baidu_default,
      name: "Baidu",
      homepage: "https://fanyi.baidu.com/",
      docUrl: "https://immersive-translate.owenyoung.com/services/baidu"
    },
    caiyun: {
      class: caiyun_default,
      name: "Caiyun",
      homepage: "https://fanyi.caiyunapp.com/",
      docUrl: "https://immersive-translate.owenyoung.com/services/caiyun"
    },
    openl: {
      class: openl_default,
      name: "Openl",
      homepage: "https://openl.club/",
      docUrl: "https://immersive-translate.owenyoung.com/services/openL"
    },
    youdao: {
      class: youdao_default,
      name: "Youdao",
      homepage: "https://immersive-translate.owenyoung.com/services/youdao",
      docUrl: "https://hcfy.app/docs/services/youdao-api"
    },
    d: {
      class: D9,
      name: "D () ",
      alpha: !0,
      homepage: "https://www.deepl.com/translator"
    },
    dpro: {
      class: D9,
      name: "DPro (Canary) ",
      canary: !0,
      homepage: "https://www.deepl.com/translator"
    },
    deeplx: {
      class: Deeplx,
      name: "DeepLX (Beta)",
      beta: !0,
      homepage: "https://www.deepl.com/translator"
    },
    niu: {
      class: niu_default,
      name: "niutrans",
      homepage: "https://niutrans.com/",
      docUrl: "https://immersive-translate.owenyoung.com/services/niu"
    }
  };
  function formatTranslationService(key, ctx) {
    let service = TranslationServices[key], translationConfig = ctx.config.translationServices[key] || {}, ok = !0, allProps = service.class.getAllProps();
    if (allProps.length > 0) {
      let requiredProps = allProps.filter((prop) => prop.required);
      if (requiredProps.length > 0) {
        for (let prop of requiredProps)
          if (!translationConfig[prop.name]) {
            ok = !1;
            break;
          }
      }
    }
    return {
      ...service,
      id: key,
      selected: ctx.translationService === key,
      ok,
      config: translationConfig,
      props: service.class.getProps(),
      allProps
    };
  }
  var allServiceKeys = Object.keys(
    TranslationServices
  ), getTranslationServices = (ctx) => {
    let { config } = ctx, alpha = config.alpha, beta = config.beta, canary = config.canary, debug = config.debug;
    return allServiceKeys.filter((key) => {
      let service = TranslationServices[key];
      if (key.startsWith("mock"))
        return !!debug;
      let isCanaryFeature = !!service.canary, isAlphaFeature = !!service.alpha, isBetaFeature = !!service.beta;
      return isCanaryFeature && canary || isAlphaFeature && (alpha || canary) || isBetaFeature && (beta || alpha || canary) || key === ctx.translationService ? !0 : !isAlphaFeature && !isBetaFeature && !isCanaryFeature;
    }).map((key) => formatTranslationService(key, ctx));
  };
  async function translateSingleSentence(sentence, ctx) {
    if (!sentence.text)
      return sentence;
    let result = await translateMultipleSentences(
      {
        sentences: [sentence]
      },
      ctx
    );
    if (result.sentences.length > 0)
      return {
        ...sentence,
        ...result.sentences[0]
      };
    throw new CommonError("translateFailed", "translate failed");
  }
  async function translateMultipleSentences(payload, ctx, everySentenceCallback) {
    if (!payload.sentences.length)
      return {
        ...payload
      };
    let { config, translationService } = ctx, generalConfig = config.translationGeneralConfig, services = config.translationServices, defaultTranslationEngine = translationService, serviceConfig = services[defaultTranslationEngine] || {}, noCacheSentences = [], finalResult = {
      sentences: Array(payload.sentences.length)
    }, sourceLength = payload.sentences.length, sentenceIndex = -1;
    if (config.cache)
      for (let sentence of payload.sentences) {
        sentenceIndex++;
        let cacheServiceKey = defaultTranslationEngine;
        defaultTranslationEngine === "openl" && (cacheServiceKey = defaultTranslationEngine + "-" + serviceConfig.codename || openl_default.DEFAULT_CODENAME);
        let res = null;
        try {
          res = await deadline(
            queryDb({
              originalText: sentence.text,
              from: sentence.from,
              to: sentence.to,
              service: cacheServiceKey
            }),
            1e3
          );
        } catch (e3) {
          log_default.warn("query cache DB error, but it's ok", e3);
        }
        if (res) {
          let result = {
            ...sentence,
            text: res.translatedText
          };
          finalResult.sentences[sentenceIndex] = result, everySentenceCallback && everySentenceCallback(null, result, sentence);
        } else
          noCacheSentences.push(sentence);
      }
    else
      noCacheSentences.push(...payload.sentences);
    let resultLength = noCacheSentences.length;
    if (sourceLength - resultLength > 0 && log_default.debug(`use ${sourceLength - resultLength} sentences from cache`), !noCacheSentences.length)
      return finalResult;
    let translator;
    try {
      translator = new TranslationServices[defaultTranslationEngine].class(
        serviceConfig,
        generalConfig
      ), await translator.init();
    } catch (e3) {
      if (everySentenceCallback)
        for (let sentence of noCacheSentences)
          everySentenceCallback(e3, null, sentence);
      throw e3;
    }
    let noCacheResult = await translator.multipleTranslate(
      {
        sentences: noCacheSentences
      },
      serviceConfig,
      (err, a6, b4) => {
        if (everySentenceCallback && (everySentenceCallback(err, a6, b4), !err && a6 && !defaultTranslationEngine.startsWith("mock") && config.cache)) {
          let cacheServiceKey = defaultTranslationEngine;
          defaultTranslationEngine === "openl" && (cacheServiceKey = defaultTranslationEngine + "-" + serviceConfig.codename || openl_default.DEFAULT_CODENAME), config.cache && deadline(
            setDbStore(
              {
                translatedText: a6.text,
                from: b4.from,
                to: b4.to,
                detectedFrom: a6.from,
                key: md5(b4.text),
                service: cacheServiceKey
              }
            ),
            3e3
          ).catch((e3) => {
            log_default.warn("set cache DB error", e3);
          });
        }
      }
    );
    for (let sentence of noCacheResult.sentences) {
      let index = finalResult.sentences.findIndex((s6) => !s6);
      if (index === -1)
        throw new CommonError("translateFailed", "can not match the result");
      finalResult.sentences[index] = sentence;
    }
    return finalResult;
  }

  // utils/url_match.ts
  var matchAll = ["*://*/*", "*", "*://*"], placeholder = "immersive-translate-wildcard-placeholder.com";
  function getMatchedUrl(rawUrl, rawMatches) {
    let matches = [];
    if (!rawMatches || (rawMatches && !Array.isArray(rawMatches) ? matches = [rawMatches] : matches = rawMatches, matches.length === 0))
      return null;
    if (matches.some((m6) => matchAll.includes(m6)))
      return rawUrl;
    let urlObj = new URL(rawUrl);
    urlObj.hash = "", urlObj.search = "";
    let url = urlObj.href, hostname2 = urlObj.hostname;
    if (matches && matches.length > 0) {
      let matched = matches.find((match) => {
        let rawMatch = match;
        if (match === hostname2)
          return !0;
        if (matchAll.includes(match))
          return !0;
        if (!match.includes("*") && match.includes("://")) {
          try {
            let matchUrl = new URL(match);
            return matchUrl.pathname === "/" && !match.endsWith("/") ? matchUrl.hostname === hostname2 : isTwoUrlMatched(url, match);
          } catch {
          }
          return !1;
        } else {
          let scheme, rawMatch2 = match;
          match.includes("://") ? scheme = match.split("://")[0] : (scheme = "*", match = "https://" + match);
          let validUrlMatch = match.replace(
            /\*/g,
            placeholder
          ), validUrlObj;
          try {
            validUrlObj = new URL(validUrlMatch);
          } catch {
            return log_default.debug(
              "invalid match pattern",
              validUrlMatch,
              "raw match value:",
              rawMatch2
            ), !1;
          }
          let hostname3 = validUrlObj.hostname, pathname = validUrlObj.pathname;
          pathname === "/" && (rawMatch2.replace("://", "").includes("/") || (pathname = "/*"));
          let regex = makeRegExp(
            scheme + ":",
            restorePlaceholderToWildcard(hostname3),
            restorePlaceholderToWildcard(pathname)
          );
          if (regex) {
            let clonedUrl = new URL(url);
            return clonedUrl.port = "", regex.test(clonedUrl.href);
          } else
            return !1;
        }
      });
      if (matched)
        return matched;
    }
    return null;
  }
  function restorePlaceholderToWildcard(str) {
    return str.replace(placeholder, "*");
  }
  function makeRegExp(scheme, host, path) {
    let regex = "^";
    return scheme === "*:" ? regex += "(http:|https:|file:)" : regex += scheme, regex += "//", host && (scheme === "file:" || (host === "*" ? regex += "[^/]+?" : (host.match(/^\*\./) && (regex += "[^/]*?", host = host.substring(2)), regex += host.replace(/\./g, "\\.").replace(/\*/g, "[^/]*")))), path ? path === "*" || path === "/*" ? regex += "(/.*)?" : path.includes("*") ? (regex += path.replace(/\*/g, ".*?"), regex += "/?") : regex += path.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : regex += "/?", regex += "$", new RegExp(regex);
  }
  function isMatchUrl(url, rawMatches) {
    return getMatchedUrl(url, rawMatches) !== null;
  }
  function isTwoUrlMatched(url1, url2) {
    let urlObj1 = new URL(url1), urlObj2 = new URL(url2);
    return urlObj1.hostname === urlObj2.hostname && urlObj1.pathname === urlObj2.pathname && urlObj1.protocol === urlObj2.protocol && urlObj1.port === urlObj2.port;
  }

  // dom/context.ts
  async function getContext(options2) {
    let { url, config, state } = options2, urlObj = new URL(url), sourceLanguage = "auto", {
      translationParagraphLanguagePattern,
      translationService,
      translationServices,
      translationTheme,
      translationThemePatterns,
      translationUrlPattern,
      targetLanguage,
      sourceLanguageUrlPattern,
      immediateTranslationPattern
    } = config, isDetectParagraphLanguage = isMatched(
      url,
      translationParagraphLanguagePattern
    ), isImmediateTranslate = isMatched(url, immediateTranslationPattern), defaultTranslationService = translationService, services = Object.keys(translationServices);
    for (let service of services) {
      let serviceConfig = translationServices[service];
      if (isMatched(url, serviceConfig)) {
        defaultTranslationService = service;
        break;
      }
    }
    let defaultTheme = translationTheme, themes = Object.keys(translationThemePatterns);
    for (let theme of themes) {
      let themeConfig = translationThemePatterns[theme];
      if (isMatched(url, themeConfig)) {
        defaultTheme = theme;
        break;
      }
    }
    let isTranslateUrl = isMatched(url, translationUrlPattern), isTranslateExcludeUrl = isMatchedExclude(
      url,
      translationUrlPattern
    );
    isTranslateExcludeUrl || (isTranslateExcludeUrl = isMatchUrl(url, buildinExcludeUrls));
    let sourceConfigLanguages = Object.keys(sourceLanguageUrlPattern), sourceLanguageReverseMap = {};
    for (let language of sourceConfigLanguages) {
      let matchPattern = sourceLanguageUrlPattern[language];
      if (matchPattern && matchPattern.matches)
        for (let match of matchPattern.matches)
          sourceLanguageReverseMap[match] = language;
    }
    let sourceUrlMatches = Object.keys(sourceLanguageReverseMap), sourceUrlMatched = getMatchedUrl(url, sourceUrlMatches);
    sourceUrlMatched && (sourceLanguage = sourceLanguageReverseMap[sourceUrlMatched] ?? "auto", sourceLanguageReverseMap[sourceUrlMatched] && sourceLanguageReverseMap[sourceUrlMatched] !== "auto" && setCurrentPageLanguageByClient(
      sourceLanguageReverseMap[sourceUrlMatched]
    ));
    let defaultTargetLanguage = targetLanguage || "zh-CN", hostname2 = urlObj.hostname, encryptedHostname = await sha256(hostname2), pathAndQueryAndHash = urlObj.pathname + urlObj.search + urlObj.hash, encryptedPath = await sha256(pathAndQueryAndHash), encryptedUrl = `https://${encryptedHostname}.com/${encryptedPath}`, localConfig2 = await getLocalConfig(), translationStartMode = config.translationStartMode;
    translationStartMode === "dynamic" && isImmediateTranslate && (translationStartMode = "immediate");
    let ctx = {
      targetLanguage: defaultTargetLanguage,
      config,
      translationService: defaultTranslationService,
      isTranslateUrl,
      sourceLanguage,
      isTranslateExcludeUrl,
      rule: config.generalRule,
      url,
      encryptedUrl,
      state: state ? Object.assign({
        translationArea: config.translationArea,
        translationStartMode,
        isAutoTranslate: !1,
        isNeedClean: !1,
        isDetectParagraphLanguage,
        translationTheme: defaultTheme
      }, state) : {
        translationArea: config.translationArea,
        translationStartMode,
        isAutoTranslate: !1,
        isNeedClean: !1,
        isDetectParagraphLanguage,
        translationTheme: defaultTheme
      },
      localConfig: localConfig2
    };
    ctx.state.translationArea === "body" && (ctx.config.generalRule.excludeTags = ctx.config.generalRule.excludeTags.filter((tag) => !ctx.config.generalRule.bodyTranslateTags.includes(tag)), ctx.config.generalRule.additionalExcludeSelectors = ctx.config.generalRule.additionalExcludeSelectors.filter(
      (selector) => selector !== ".btn"
    )), ctx.translationService === "d" && (config.immediateTranslationTextCount = 0);
    let rules = config.rules, rule;
    globalThis.PDFViewerApplication ? rule = rules.find((rule2) => rule2.isPdf) : rule = rules.find((rule2) => isMatched(url, rule2)), ctx.rule.isPdf && (ctx.state.translationArea = "main"), ctx.state.translationArea === "body" && (ctx.rule.paragraphMinTextCount = 1, ctx.rule.paragraphMinWordCount = 1);
    let generalRule = config.generalRule;
    return rule && (ctx.rule = mergeRule(generalRule, rule)), ctx.state.translationArea === "body" && ctx.rule.excludeTags && (ctx.rule.excludeTags = ctx.rule.excludeTags.filter((tag) => !ctx.rule.bodyTranslateTags.includes(tag) && !ctx.rule.forceTranslateTags.includes(tag))), ctx;
  }
  function isMatched(url, matchPattern) {
    if (!matchPattern)
      return !1;
    let { matches, excludeMatches, selectorMatches, excludeSelectorMatches } = matchPattern;
    return excludeMatches && excludeMatches.length > 0 && isMatchUrl(url, excludeMatches) ? !1 : matches && matches.length > 0 && isMatchUrl(url, matches) ? !0 : excludeSelectorMatches && excludeSelectorMatches.length > 0 && isMatchSelectors(excludeSelectorMatches) ? !1 : !!(selectorMatches && selectorMatches.length > 0 && isMatchSelectors(selectorMatches));
  }
  function isMatchedExclude(url, matchPattern) {
    if (!matchPattern)
      return !1;
    let { excludeMatches, excludeSelectorMatches } = matchPattern;
    return !!(excludeMatches && excludeMatches.length > 0 && isMatchUrl(url, excludeMatches) || excludeSelectorMatches && excludeSelectorMatches.length > 0 && isMatchSelectors(excludeSelectorMatches));
  }

  // dom/translate_page.ts
  var pageStatus = "Original", currentParagraphIds = [], waitToTranslateParagraphIds = /* @__PURE__ */ new Set(), allNewDynamicElements = [], allIntersectionObserver = [], allResizebleObserver = [], currentNewDynamicElements = [], oldUrl = getRealUrl().split("#")[0], currentTranslatedTextLength = 0, globalContext, debounceTranslateCurrentQueue = le(translateCurrentQueue, 300), debounceTranslateNewDynamicNodes = debounce(
    translateNewDynamicNodes,
    200
  ), env3 = getEnv(), isProd2 = env3.PROD === "1", titleMutationObserver, mutationObserverMap = /* @__PURE__ */ new Map(), mainMutaionObserver, originalPageTitle = "";
  async function toggleTranslatePage() {
    if (getPageStatus() === "Original") {
      let ctx = await getGlobalContext(getRealUrl(), {});
      ctx.state.translationTheme = ctx.config.translationTheme, ctx = await getGlobalContext(getRealUrl(), {}), await translatePage(globalContext);
    } else
      (getPageStatus() === "Translated" || getPageStatus() === "Error") && restorePage();
  }
  async function toggleTranslationMask() {
    if (getPageStatus() === "Original")
      globalContext = await getGlobalContext(getRealUrl(), {
        translationTheme: "mask"
      }), await translatePage(globalContext);
    else if (getPageStatus() === "Translated") {
      let allFrames = [
        document.body,
        ...mutationObserverMap.keys()
      ], currentTranslationTheme = globalContext?.state.translationTheme;
      for (let frame of allFrames) {
        let currentRootTheme = getAttribute(
          frame,
          translationFrameRootThemeAttributeNameForJs,
          !0
        );
        currentTranslationTheme === "mask" ? currentRootTheme !== "none" ? setAttribute(
          frame,
          translationFrameRootThemeAttributeNameForJs,
          "none",
          !0
        ) : setAttribute(
          frame,
          translationFrameRootThemeAttributeNameForJs,
          "mask",
          !0
        ) : currentRootTheme !== "mask" ? setAttribute(
          frame,
          translationFrameRootThemeAttributeNameForJs,
          "mask",
          !0
        ) : setAttribute(
          frame,
          translationFrameRootThemeAttributeNameForJs,
          "none",
          !0
        );
      }
    }
  }
  function restorePage() {
    clean();
    let allFrames = [
      document.body,
      ...mutationObserverMap.keys()
    ];
    for (let rootFrame of allFrames)
      disableMutatinObserver(rootFrame), rootFrame.querySelectorAll(
        "." + translationTargetElementWrapperClass
      ).forEach((element) => {
        element.remove();
      }), rootFrame.querySelectorAll(
        "." + translationPdfTargetContainerClass
      ).forEach((element) => {
        element.remove();
      }), rootFrame.querySelectorAll(
        "[" + sourceElementEffectAttributeName + "]"
      ).forEach((element) => {
        if (isProd2) {
          delete element[elementMarkRootKey];
          let keys = Object.keys(element.dataset).filter((key) => key.startsWith(brandIdForJs));
          for (let key of keys)
            delete element.dataset[key];
        } else {
          let keys = Object.keys(element.dataset).filter((key) => key.startsWith(brandIdForJs));
          for (let key of keys)
            delete element.dataset[key];
        }
        element.removeAttribute(sourceElementEffectAttributeName);
      });
    disableTitleMutationObserver(), setPageTranslatedStatus("Translating"), originalPageTitle && (document.title = originalPageTitle), setPageTranslatedStatus("Original");
  }
  function onElementVisible(paragraph, callback) {
    let isCalled = !1, firstElement = getFirstHTMLElement(paragraph.elements), lastElement = getLastHTMLElement(paragraph.elements);
    waitToTranslateParagraphIds.add(paragraph.id);
    let observers = [];
    if (firstElement) {
      let observe = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          entry.intersectionRatio > 0 && (observer.disconnect(), isCalled || (isCalled = !0, callback(paragraph)));
        });
      });
      allIntersectionObserver.push(observe), observers.push(observe), observe.observe(firstElement);
    }
    if (lastElement && lastElement !== firstElement) {
      let observe = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          entry.intersectionRatio > 0 && (observer.disconnect(), isCalled || (isCalled = !0, callback(paragraph)));
        });
      });
      allIntersectionObserver.push(observe), observers.push(observe), observe.observe(lastElement);
    }
    let paragraphEntiry = getParagraph(paragraph.id);
    paragraphEntiry && (paragraphEntiry.observers = observers, setParagraph(paragraph.id, paragraphEntiry));
  }
  function onHiddenElementVisible(element, callback) {
    if (element) {
      let resizewatcher = new ResizeObserver((entries, observer) => {
        for (let entry of entries)
          entry.contentRect.width > 10 && (observer.disconnect(), callback(entry.target));
      });
      resizewatcher.observe(element), allResizebleObserver.push(resizewatcher);
    }
  }
  async function translateNewDynamicNodes(ctx) {
    let currentNewDynamicNodes = [...currentNewDynamicElements];
    currentNewDynamicElements = [];
    let frameMap = /* @__PURE__ */ new Map();
    currentNewDynamicNodes.forEach((node) => {
      frameMap.has(node.rootFrame) || frameMap.set(node.rootFrame, []), frameMap.get(node.rootFrame)?.push(node.element);
    });
    for (let [rootFrame, elements] of frameMap)
      try {
        let allContainers = [];
        for (let element of elements) {
          let rawContainers = getContainers(
            element,
            ctx
          );
          if (rawContainers.length === 0)
            continue;
          let containers = rawContainers;
          allContainers.push(...containers);
        }
        await translateContainers(allContainers, rootFrame, ctx);
      } catch (e3) {
        log_default.error(`translateNewDynamicNodes error: ${e3.message}`);
      }
  }
  function translationParagraph(visibleParagraph, ctx) {
    waitToTranslateParagraphIds.delete(visibleParagraph.id);
    let paragraphWithState = getParagraph(visibleParagraph.id);
    paragraphWithState && (paragraphWithState.observers && paragraphWithState.observers.length > 0 && paragraphWithState.observers.forEach((observer) => {
      observer.disconnect();
    }), paragraphWithState.observers = [], paragraphWithState.state = "Translating", setParagraph(visibleParagraph.id, paragraphWithState));
    let id = visibleParagraph.id;
    currentTranslatedTextLength += visibleParagraph.text.length;
    let realElements = getHTMLElements(visibleParagraph.elements);
    if (visibleParagraph.isPdf) {
      let firstElement = getFirstHTMLElement(visibleParagraph.elements), elementStyle = globalThis.getComputedStyle(firstElement), top = elementStyle.top, fontSize = elementStyle.fontSize, fontSizeNumber = parseFloat(fontSize.slice(0, -2));
      isNaN(fontSizeNumber) || fontSizeNumber > 20 && (fontSize = "20px");
      let targetContainer = visibleParagraph.targetContainer, paragraphTarget = document.createElement("span");
      realElements.length === 1 && (paragraphTarget.style.fontSize = fontSize), paragraphTarget.id = `${translationTargetElementWrapperClass}-${id}`, paragraphTarget.style.top = top;
      let firstElementLeft = getAttribute(firstElement, sourceElementLeft), minLeft = realElements.reduce((prev, current) => {
        let left = getAttribute(current, sourceElementLeft);
        return left && left < prev ? left : prev;
      }, 1e3), width = realElements.reduce((prev, current) => {
        let right = getAttribute(current, sourceElementRight);
        return right && right > prev ? right : prev;
      }, 0) - minLeft;
      width < 30, width > 600 && (width = 600), firstElementLeft < 200 && (firstElementLeft = 10), firstElementLeft && firstElementLeft < 0 && (firstElementLeft = 0), paragraphTarget.style.left = `${minLeft || 10}px`, minLeft < 400 ? paragraphTarget.style.width = width + "px" : paragraphTarget.style.width = `calc(100% - ${minLeft}px)`, paragraphTarget.classList.add(
        "notranslate",
        `${translationTargetElementWrapperClass}`
      ), targetContainer.appendChild(paragraphTarget);
    } else {
      let lastElement = getLastHTMLElement(visibleParagraph.elements), position = "afterend";
      visibleParagraph.elements.length > 0 && lastElement && (realElements.length === 1 ? position = "beforeend" : isInlineElement(
        visibleParagraph.elements[0],
        ctx.rule
      ) || (position = "beforeend")), ctx.rule.insertPosition && (position = ctx.rule.insertPosition);
      let targetTranslationWrapper = document.createElement("span");
      targetTranslationWrapper.classList.add(
        "notranslate",
        translationTargetElementWrapperClass
      ), targetTranslationWrapper.id = `${translationTargetElementWrapperClass}-${id}`;
      let loadingHtml = getLoadingHTML(
        ctx.config.loadingTheme
      );
      if (targetTranslationWrapper.innerHTML = loadingHtml, position === "beforeend") {
        let innerElement = getTheLastTextNodeParentElement(lastElement);
        innerElement ? innerElement.appendChild(targetTranslationWrapper) : lastElement.appendChild(targetTranslationWrapper);
      } else if (position === "afterend")
        lastElement.insertAdjacentElement(position, targetTranslationWrapper);
      else
        throw new Error("not support position");
    }
    currentParagraphIds.push(id), debounceTranslateCurrentQueue(ctx);
  }
  function addParagraphToQueue(paragraph, ctx) {
    ctx.state.translationStartMode === "dynamic" && currentTranslatedTextLength > ctx.config.immediateTranslationTextCount ? onElementVisible(paragraph, (visibleParagraph) => {
      translationParagraph(visibleParagraph, ctx);
    }) : translationParagraph(paragraph, ctx);
  }
  async function translatePage(ctx) {
    if (pageStatus === "Translating")
      return;
    if (setPageTranslatedStatus("Translating"), ctx || (ctx = await getGlobalContext(getRealUrl(), {})), !ctx.state.isAutoTranslate && ctx.config.tempTranslateDomainMinutes > 0) {
      let now = Date.now(), currentDomain = new URL(ctx.url).hostname, currentTempTranslationDomains = ctx.localConfig.tempTranslationUrlMatches || [], index = currentTempTranslationDomains.findIndex(
        (item) => item.match === currentDomain && item.expiredAt > now
      ), isChanged = !1;
      index > -1 || (currentTempTranslationDomains.push({
        match: currentDomain,
        expiredAt: now + ctx.config.tempTranslateDomainMinutes * 60 * 1e3
      }), isChanged = !0), isChanged && await setLocalConfig({
        ...ctx.localConfig,
        tempTranslationUrlMatches: [
          ...currentTempTranslationDomains
        ]
      });
    }
    ctx.state.isAutoTranslate = !0;
    let currentScrollOffset = globalThis.scrollY, currentWindowHeight = globalThis.innerHeight;
    currentScrollOffset >= currentWindowHeight && (ctx.config.immediateTranslationTextCount = 0), log_default.debug("ctx", ctx), ctx.state.isNeedClean ? restorePage() : globalContext.state.isNeedClean = !0, ctx.rule.normalizeBody && document.querySelector(ctx.rule.normalizeBody) && (document.body = document.body.cloneNode(!0)), addToUnmountQueue(() => {
      currentTranslatedTextLength = 0, cleanParagraphs(), allIntersectionObserver.forEach((observer) => {
        observer.disconnect();
      }), allResizebleObserver.forEach((observer) => {
        observer.disconnect();
      }), allIntersectionObserver = [], waitToTranslateParagraphIds.clear();
    }), setPageTranslatedStatus("Translating");
    try {
      let allFrames = [document.body];
      document.querySelectorAll("iframe").forEach((frame) => {
        isInlineIframe(frame) && (allFrames.push(frame.contentDocument.body), injectCSS(frame.contentDocument, env3.IMMERSIVE_TRANSLATE_INJECTED_CSS));
      }), ctx.rule.shadowRootSelectors && ctx.rule.shadowRootSelectors.length > 0 && getElementsBySelectors(
        document.body,
        ctx.rule.shadowRootSelectors
      ).forEach((host) => {
        host.shadowRoot && host.shadowRoot.mode === "open" && allFrames.push(host.shadowRoot);
      });
      let containersCount = 0;
      setPageTranslatedStatus("Translating"), log_default.debug("allFrames", allFrames);
      for (let rootFrame of allFrames) {
        let containerCount = await translateFrame(rootFrame, ctx);
        containersCount += containerCount;
      }
      containersCount === 0 && setPageTranslatedStatus("Translated"), translateTitle(ctx).catch((e3) => {
        log_default.error(
          "translateTitle error:",
          e3.name,
          e3.message,
          e3.details || ""
        );
      }), enableTitleMutationObserver(ctx);
    } catch (e3) {
      setPageTranslatedStatus("Error"), log_default.error(e3);
    }
  }
  async function translateFrame(rootFrame, ctx) {
    markContainers(rootFrame, ctx.rule);
    let containers = getContainers(rootFrame, ctx);
    log_default.debug("detect containers", containers);
    let { rule } = ctx;
    containers.length > 0 && await translateContainers(containers, rootFrame, ctx);
    let observer = enableMutatinObserver(rootFrame, rule, ctx);
    return rootFrame === document.body ? mainMutaionObserver = observer : mutationObserverMap.set(rootFrame, observer), containers.length;
  }
  async function getGlobalContext(url, state) {
    let config = await getConfig2();
    if (!globalContext)
      globalContext = await getContext({
        url,
        config,
        state
      });
    else {
      let options2 = {
        url,
        config,
        state: { ...globalContext.state, ...state }
      };
      globalContext = await getContext(options2);
    }
    return globalContext;
  }
  async function toggleTranslateTheMainPage() {
    getPageStatus() === "Original" ? await translateTheMainPage() : (getPageStatus() === "Translated" || getPageStatus() === "Error") && (globalContext = await getGlobalContext(getRealUrl(), {}), globalContext.state.translationArea !== "main" ? await translateTheMainPage() : restorePage());
  }
  async function translateTheMainPage() {
    globalContext = await getGlobalContext(getRealUrl(), {
      translationArea: "main"
    }), await translatePage(globalContext);
  }
  async function translateTheWholePage() {
    globalContext = await getGlobalContext(getRealUrl(), {
      translationArea: "body"
    }), await translatePage(globalContext);
  }
  async function toggleTranslateTheWholePage() {
    getPageStatus() === "Original" ? await translateTheWholePage() : (getPageStatus() === "Translated" || getPageStatus() === "Error") && (globalContext = await getGlobalContext(getRealUrl(), {}), globalContext.state.translationArea !== "body" ? (globalContext.state.translationArea = "body", globalContext = await getGlobalContext(getRealUrl(), {}), await translatePage(globalContext)) : restorePage());
  }
  async function translateToThePageEndImmediately() {
    globalContext = await getGlobalContext(getRealUrl(), {
      translationArea: "body",
      translationStartMode: "immediate"
    }), await translatePage(globalContext), await translateNewDynamicNodes(globalContext);
  }
  async function translateTitle(ctx) {
    let pageTitle = document.title;
    if (!pageTitle || pageTitle.includes(titleDelimiters))
      return;
    originalPageTitle !== pageTitle && (originalPageTitle = pageTitle);
    let currentLang = "auto";
    if (ctx.state.isDetectParagraphLanguage || (currentLang = getCurrentPageLanguageByClient()), currentLang === "auto") {
      let detectedLang = await detectLanguage({
        text: pageTitle,
        minLength: 10
      });
      if (isSameTargetLanguage(detectedLang, ctx.targetLanguage))
        return;
    }
    try {
      let result = await translateSingleSentence({
        id: 0,
        url: ctx.url,
        text: pageTitle,
        from: currentLang,
        to: ctx.targetLanguage,
        fromByClient: currentLang
      }, ctx);
      result && result.text && (document.title = originalPageTitle + titleDelimiters + result.text);
    } catch (e3) {
      throw e3;
    }
  }
  function setLoadingToParagraph(rootFrame, id, ctx) {
    let element = rootFrame.querySelector(
      "#" + translationTargetElementWrapperClass + "-" + id
    );
    element && (element.innerHTML = getLoadingHTML(ctx.config.loadingTheme));
  }
  function getLoadingHTML(theme) {
    return `&#160;<span class="${brandId}-loading-${theme} notranslate"></span>`;
  }
  async function translateContainers(containers, rootFrame, ctx) {
    let { rule } = ctx;
    for (let container of containers)
      markContainers(container, rule);
    let targetContainers = [];
    if (ctx.rule.isPdf)
      containers.length > 0 && (setPageTranslatedStatus("Translating"), targetContainers = normalizeContainer2(
        containers,
        rule
      ).targetContainers);
    else {
      setPageTranslatedStatus("Translating");
      let normalizeResult = normalizeContainer(
        containers,
        rule
      ), { hiddenElements } = normalizeResult;
      for (let element of hiddenElements)
        onHiddenElementVisible(element, () => {
          removeAttribute(element, sourceElementExcludeAttributeName, !0), translateContainers([element], rootFrame, ctx);
        });
      setPageTranslatedStatus("Translating");
    }
    let paragraphs = [];
    if (ctx.rule.isPdf ? paragraphs = await getParagraphs2(
      rootFrame,
      containers,
      ctx,
      targetContainers
    ) : (containers = containers.filter((container) => !isExcludeElement(container, rule, !1)), paragraphs = await getParagraphs(
      rootFrame,
      containers,
      ctx
    )), setPageTranslatedStatus("Translating"), paragraphs.length === 0) {
      setPageTranslatedStatus("Translated");
      return;
    }
    log_default.debug("detect paragraphs", paragraphs);
    for (let paragraph of paragraphs)
      addParagraphToQueue(paragraph, ctx);
    setPageTranslatedStatus("Translated");
  }
  async function translateParagraphById(id) {
    let paragraph = getParagraph(id);
    if (!paragraph)
      throw new Error("paragraph not found");
    let ctx = await getGlobalContext(getRealUrl(), {});
    setLoadingToParagraph(paragraph.rootFrame, id, ctx);
    let sentence = {
      id: paragraph.id,
      text: paragraph.text,
      from: paragraph.languageByLocal,
      fromByClient: paragraph.languageByClient,
      to: ctx.targetLanguage,
      url: ctx.encryptedUrl
    };
    try {
      let result = await translateSingleSentence(sentence, ctx);
      onParagraphTranslated(null, result, sentence, ctx);
    } catch (e3) {
      onParagraphTranslated(e3, null, sentence, ctx);
    }
  }
  function onParagraphTranslated(err, translatedSentence, sentenceRequest, ctx) {
    let paragraphWithState = getParagraph(sentenceRequest.id);
    if (paragraphWithState && (err || !translatedSentence)) {
      err || (log_default.error("translate error", translatedSentence), err = new Error("no response from server"));
      let wrapperId = sentenceRequest.id, wrapper = paragraphWithState.rootFrame.querySelector(
        `#${translationTargetElementWrapperClass}-${wrapperId}`
      ), errorMessage = err.message.replaceAll(`
`, "");
      errorMessage = errorMessage.replaceAll('"', "&quot;"), paragraphWithState && (paragraphWithState.state = "Error", setParagraph(paragraphWithState.id, paragraphWithState));
      let errorHtml = `<span class="${brandId}-error notranslate"> <span class="immersive-translate-tooltip" data-immersive-translate-tooltip-text="${errorMessage}"><button class="${brandId}-clickable-button notranslate" title="${errorMessage}">\u2757</button></span> <button class="${brandId}-clickable-button notranslate" data-${brandId}-paragraph-id="${wrapperId}" data-${brandId}-action="retry">\u{1F504}</button></span>`;
      wrapper && (wrapper.innerHTML = errorHtml);
    } else {
      let paragraph = getParagraph(sentenceRequest.id);
      if (paragraph) {
        paragraph.state = "Translated", setParagraph(paragraph.id, paragraph);
        let targetItem = paragraphToHtml(
          paragraph,
          translatedSentence,
          ctx
        ), wrapperId = translatedSentence.id, wrapper = paragraph.rootFrame.querySelector(
          `#${translationTargetElementWrapperClass}-${wrapperId}`
        );
        wrapper && (wrapper.innerHTML = targetItem.html, paragraph.rootFrame.querySelectorAll(
          `[${sourceElementParagraphAttributeName}="${wrapperId}"]`
        ).forEach((element) => {
          setAttribute(
            element,
            sourceElementTranslatedMarkAttributeName,
            "1"
          );
        }));
      } else
        log_default.error("paragraph not found", sentenceRequest.id);
    }
  }
  async function translateCurrentQueue(ctx) {
    if (currentParagraphIds.length === 0)
      return Promise.resolve();
    let ids = [...currentParagraphIds];
    currentParagraphIds = [];
    let currentParagraphLang = "auto";
    ctx.state.isDetectParagraphLanguage || (currentParagraphLang = getCurrentPageLanguage());
    let payload = {
      sentences: ids.filter((id) => getParagraph(id)).map((id) => {
        let paragraph = getParagraph(id), from = paragraph.languageByLocal;
        return from === "auto" && (from = currentParagraphLang), {
          id: paragraph.id,
          url: ctx.encryptedUrl,
          text: paragraph.text,
          from,
          fromByClient: paragraph.languageByClient,
          to: ctx.targetLanguage
        };
      })
    };
    if (payload.sentences.length > 0) {
      setPageTranslatedStatus("Translating");
      try {
        await translateMultipleSentences(
          payload,
          ctx,
          (err, translatedSentence, sentenceRequest) => {
            onParagraphTranslated(err, translatedSentence, sentenceRequest, ctx);
          }
        );
      } catch (e3) {
        setPageTranslatedStatus("Error"), log_default.error(
          "translateCurrentQueue error",
          e3.name,
          e3.message,
          e3.details || " "
        );
        return;
      }
    }
    setPageTranslatedStatus("Translated");
  }
  function setPageTranslatedStatus(_pageStatus) {
    pageStatus = _pageStatus, sendPageTranslatedStatus(pageStatus);
  }
  function enableMutatinObserver(rootFrame, rule, ctx) {
    log_default.debug("enableMutatinObserver for ", rootFrame), disableMutatinObserver(rootFrame), allNewDynamicElements = [], currentNewDynamicElements = [];
    let inlineAndIgnoreAndTextTags = rule.inlineTags.concat(rule.excludeTags).concat("#text", "BR"), mutationObserver = new MutationObserver(function(mutations) {
      mutations.forEach((mutation) => {
        if (rootFrame === document.body) {
          let currentUrl = getRealUrl();
          if (currentUrl.split("#")[0] !== oldUrl && rule.observeUrlChange) {
            oldUrl = currentUrl.split("#")[0], clean(), disableMutatinObserver(rootFrame), disableTitleMutationObserver(), setTimeout(() => {
              log_default.debug("url changed, reinit page"), initPage();
            }, rule.urlChangeDelay);
            let event = new Event(pageUrlChangedEventName);
            document.dispatchEvent(event);
            return;
          }
        }
        mutation.addedNodes.forEach((addedNode) => {
          if (addedNode.nodeType === Node.ELEMENT_NODE) {
            let element = addedNode;
            if (element.nodeName === "IFRAME")
              isInlineIframe(element) && setTimeout(() => {
                injectCSS(
                  element.contentDocument,
                  env3.IMMERSIVE_TRANSLATE_INJECTED_CSS
                ), translateFrame(
                  element.contentDocument.body,
                  ctx
                ).catch((e3) => {
                  log_default.error(
                    "translateFrame error",
                    e3.details || " ",
                    e3
                  );
                });
              }, ctx.rule.urlChangeDelay);
            else if (mutationElementIsInline(rule, element) || !inlineAndIgnoreAndTextTags.includes(
              element.nodeName
            )) {
              if (element.classList.contains("notranslate") || element.getAttribute("translate") === "no")
                return;
              isDuplicateElement(element, allNewDynamicElements) || (currentNewDynamicElements.push({
                element,
                rootFrame
              }), allNewDynamicElements.push(element), debounceTranslateNewDynamicNodes(ctx));
            }
          }
        });
      });
    });
    return mutationObserver.observe(rootFrame, {
      childList: !0,
      subtree: !0
    }), mutationObserver;
  }
  function enableTitleMutationObserver(ctx) {
    let titleElement = document.querySelector("title");
    titleElement && (titleMutationObserver = new MutationObserver(function(mutations) {
      mutations.length > 0 && (mutations[0].target.text.includes(titleDelimiters) || translateTitle(ctx).catch((e3) => {
        log_default.error(
          "translateTitle error:",
          e3.name,
          e3.message,
          e3.details || ""
        );
      }));
    }), titleMutationObserver.observe(titleElement, {
      subtree: !0,
      characterData: !0,
      childList: !0
    }));
  }
  function mutationElementIsInline(rule, element) {
    if (rule.extraBlockSelectors) {
      for (let match of rule.extraBlockSelectors)
        if (element.matches(match))
          return !0;
    }
    return !1;
  }
  async function initPage() {
    let isInIframe = getIsInIframe(), ctx = await getGlobalContext(getRealUrl(), {});
    ctx.rule.urlChangeDelay && await delay(ctx.rule.urlChangeDelay);
    let lang = ctx.sourceLanguage;
    lang === "auto" ? (isMonkey() ? lang = await detectLanguage({
      text: getMainText(document.body).slice(0, 1e3)
    }) : isInIframe ? lang = await detectLanguage({
      text: getMainText(document.body).slice(0, 1e3)
    }) : lang = await detectTabLanguage(), lang === "auto" && (lang = await detectPageLanguage()), setCurrentPageLanguage(lang)) : setCurrentPageLanguageByClient(lang);
    let isAutoTranslate = ctx.state.isAutoTranslate || ctx.isTranslateUrl || ctx.rule.isPdf;
    !isAutoTranslate && !ctx.isTranslateExcludeUrl && (log_default.debug(`detect page language: ${lang}`), isMatchLanguage(lang, ctx.config.translationLanguagePattern) && (isAutoTranslate = !0, log_default.debug(`match language pattern ${lang}, auto translate`))), isAutoTranslate ? (globalContext.state.isAutoTranslate = !0, await translatePage(globalContext)) : log_default.debug("do not auto translate", ctx);
  }
  function disableMutatinObserver(rootFrame) {
    if (mutationObserverMap.has(rootFrame)) {
      let mutationObserver = mutationObserverMap.get(rootFrame);
      mutationObserver.disconnect(), mutationObserver.takeRecords(), mutationObserverMap.delete(rootFrame);
    } else if (rootFrame === document.body) {
      let mutationObserver = mainMutaionObserver;
      mutationObserver && (mutationObserver.disconnect(), mutationObserver.takeRecords());
    }
  }
  function disableTitleMutationObserver() {
    titleMutationObserver && (titleMutationObserver.disconnect(), titleMutationObserver.takeRecords(), titleMutationObserver = void 0);
  }
  function getPageStatus() {
    return pageStatus;
  }

  // libs/preact-translation/utils.ts
  function getResourceUrl(root2, lang) {
    return [root2, !root2 || root2.endsWith("/") ? "" : "/", lang, ".json"].join("");
  }
  function format(str, params) {
    let result = str;
    return params && Object.keys(params).forEach((key) => {
      let rawValue = params[key], keyIsNumber = isNumber(key);
      if (typeof rawValue == "object" || keyIsNumber) {
        let value = rawValue;
        keyIsNumber && typeof value == "string" && (value = {
          tag: "a",
          href: value
        });
        let tag = `<${key}>`, tagIndex = result.indexOf(tag);
        if (tagIndex !== -1) {
          let actualTag = value.tag || "a", endIndex = result.indexOf(`</${key}>`);
          if (endIndex !== -1) {
            let html = result.substring(tagIndex + tag.length, endIndex), attrs = Object.keys(value).filter((attr) => attr !== "tag").map((attr) => `${attr}="${value[attr]}"`).join(" ");
            result = result.replace(
              `${tag}${html}</${key}>`,
              `<${actualTag} ${attrs}>${html}</${actualTag}>`
            );
          }
        }
      } else {
        let template = new RegExp("{" + key + "}", "gm");
        result = result.replace(template, rawValue.toString());
      }
    }), result;
  }
  function getValue(languageData, lang, key) {
    let localeData = languageData[lang];
    if (!localeData)
      return key;
    let keys = key.split("."), propKey = "";
    do {
      propKey += keys.shift();
      let value = localeData[propKey];
      value !== void 0 && (typeof value == "object" || !keys.length) ? (localeData = value, propKey = "") : keys.length ? propKey += "." : localeData = key;
    } while (keys.length);
    return localeData;
  }
  function t3(data, key, lang, fallbackLang, params) {
    if (!data.hasOwnProperty(lang))
      return key;
    let value = getValue(data, lang, key);
    return value === key && lang !== fallbackLang && (value = getValue(data, fallbackLang, key)), format(value, params);
  }
  function isNumber(value) {
    if (typeof value == "number")
      return !0;
    if (value) {
      let num = parseInt(value);
      return !isNaN(num);
    } else
      return !1;
  }

  // locales.ts
  var internalLocaleMap = {
    "zh-CN": {
      "languages.en": "\u82F1\u8BED",
      "languages.ja": "\u65E5\u8BED",
      "languages.ko": "\u97E9\u8BED",
      "languages.es": "\u897F\u73ED\u7259\u8BED",
      "languages.fr": "\u6CD5\u8BED",
      "languages.de": "\u5FB7\u8BED",
      "languages.it": "\u610F\u5927\u5229\u8BED",
      "languages.pt": "\u8461\u8404\u7259\u8BED",
      "languages.ru": "\u4FC4\u8BED"
    },
    "zh-TW": {
      "languages.en": "\u82F1\u8A9E",
      "languages.ja": "\u65E5\u8A9E",
      "languages.ko": "\u97D3\u8A9E",
      "languages.es": "\u897F\u73ED\u7259\u8A9E",
      "languages.fr": "\u6CD5\u8A9E",
      "languages.de": "\u5FB7\u8A9E",
      "languages.it": "\u610F\u5927\u5229\u8A9E",
      "languages.pt": "\u8461\u8404\u7259\u8A9E",
      "languages.ru": "\u4FC4\u8A9E"
    }
  }, finalTranslations = {
    ...translations,
    "zh-CN": {
      ...internalLocaleMap["zh-CN"],
      ...translations["zh-CN"]
    },
    "zh-TW": {
      ...internalLocaleMap["zh-TW"],
      ...translations["zh-TW"]
    }
  }, locales_default = finalTranslations;
  function t4(key, interfaceLanguage, params) {
    return t3(
      finalTranslations,
      key,
      interfaceLanguage,
      fallbackLanguage,
      params
    );
  }
  var getLanguageName = (lang, interfaceLanguage, useOriginal) => {
    let translation = t3(
      finalTranslations,
      `languages.${lang}`,
      interfaceLanguage,
      "en"
    );
    return useOriginal ? langMap2[lang] || lang : translation !== `languages.${lang}` ? translation : langMap2[lang];
  };

  // content_dom_listeners.ts
  var throttleToggleTranslatePage = le(() => {
    toggleTranslatePage();
    let event = new CustomEvent(userscriptCommandEventName, {
      detail: {
        method: "toggleTranslatePage"
      }
    });
    globalThis.document.dispatchEvent(event);
  }, 200), throttleToggleTranslationMask = le(() => {
    toggleTranslationMask();
    let event = new CustomEvent(userscriptCommandEventName, {
      detail: {
        method: "toggleTranslationMask"
      }
    });
    globalThis.document.dispatchEvent(event);
  }, 200);
  function setupDomListeners(ctx) {
    document.addEventListener("click", (e3) => {
      let target = e3.target, action = target.getAttribute("data-immersive-translate-action");
      if (action && action === "retry") {
        let paragraphId = target.getAttribute(
          "data-immersive-translate-paragraph-id"
        );
        paragraphId && translateParagraphById(Number(paragraphId));
      }
    }), ctx.rule.fingerCountToToggleTranslagePageWhenTouching >= 2 && document.addEventListener("touchstart", (e3) => {
      e3.touches.length == ctx.rule.fingerCountToToggleTranslagePageWhenTouching ? throttleToggleTranslatePage() : e3.touches.length === ctx.rule.fingerCountToToggleTranslationMaskWhenTouching && throttleToggleTranslationMask();
    }), isMonkey() && globalThis.top != globalThis.self && globalThis.addEventListener("message", (event) => {
      event && event.data && event.data.payload && event.data.author === iframeMessageIdentifier && asyncMessageHandler(event.data.payload, {
        // @ts-ignore: it's ok
        tab: {
          id: 1,
          url: "https://www.fake-iframe.com",
          active: !0
        }
      });
    }, !1);
  }

  // utils/compare_version.ts
  function isAVersionGreaterOrEqualWithB(a6, b4) {
    return a6.localeCompare(b4, void 0, {
      numeric: !0,
      sensitivity: "base"
    }) >= 0;
  }

  // cron.ts
  async function runCron(interval) {
    try {
      let now = /* @__PURE__ */ new Date();
      log_default.debug(
        "cron task start, next will run at",
        new Date(now.getTime() + interval).toLocaleString()
      ), await browserAPI.storage.local.set({
        [lastRunTimeStorageKey]: now.toISOString()
      }), await syncRules(), isMonkey() || await autoSyncLatestConfig();
    } catch (e3) {
      log_default.error("run cron task failed", e3);
    }
  }
  async function checkCronAndRunOnce() {
    let interval = (await getConfig2()).interval;
    if (interval) {
      let lastRunTimeResult = await browserAPI.storage.local.get(
        lastRunTimeStorageKey
      );
      if (lastRunTimeResult && lastRunTimeResult[lastRunTimeStorageKey]) {
        let lastRunTime = lastRunTimeResult[lastRunTimeStorageKey];
        if (Date.now() - new Date(lastRunTime).getTime() < interval) {
          let nextRunAt = new Date(new Date(lastRunTime).getTime() + interval);
          log_default.debug(`cron task not run, next will run at ${nextRunAt}`);
          return;
        } else
          runCron(interval);
      } else
        runCron(interval);
    }
  }
  async function syncRules() {
    try {
      let localConfig2 = await getConfig2(), data = await request2({ url: buildinConfigSyncUrl }), localConfigUpdatedAtIsoString = localConfig2.buildinConfigUpdatedAt, localConfigUpdatedAt = new Date(localConfigUpdatedAtIsoString), latestIsoTime = data.buildinConfigUpdatedAt, latest = new Date(latestIsoTime), remoteMinVersion = data.minVersion, localVersion = browserAPI.runtime.getManifest().version;
      isAVersionGreaterOrEqualWithB(localVersion, remoteMinVersion) ? latest > localConfigUpdatedAt ? (await browserAPI.storage.local.set({
        buildinConfig: data
      }), log_default.info(
        `sync remote rules success, latest: ${new Date(latestIsoTime).toLocaleString()}`
      )) : log_default.debug(`no need to sync rules, latest: ${localConfigUpdatedAt}`) : log_default.info(
        `local version is too old, please update to ${remoteMinVersion} or later`
      );
    } catch (e3) {
      log_default.error("sync rules error: ", e3);
    }
  }

  // web-options/is_web_options_page.ts
  function isWebOptionsPage() {
    let optionsHostnames = ["localhost", hostname], optionsPaths = ["/dist/userscript/options/", "/options/", "/options"], url = getRealUrl(), urlObj = new URL(url), currentHostname = urlObj.hostname, currentPath = urlObj.pathname;
    if ((optionsHostnames.includes(currentHostname) || currentHostname.startsWith("192.168")) && optionsPaths.includes(currentPath)) {
      let optionsMetaElement = document.querySelector(
        "meta[name=immersive-translate-options]"
      );
      if (optionsMetaElement && optionsMetaElement.getAttribute("content") === "true")
        return !0;
    }
    return !1;
  }

  // web-options/setup_web_options_page.ts
  async function setupWebOptionsPage() {
    if (!document.getElementById(
      "immersive-translate-status"
    )) {
      log_default.error("Could not find status element");
      return;
    }
    await initStorage("local"), await initStorage("sync"), initOther();
    let pageReadyElement = document.getElementById(
      "immersive-translate-page-ready"
    );
    pageReadyElement && setTimeout(() => {
      pageReadyElement.value = "true", pageReadyElement.dispatchEvent(new Event("change"));
    }, 100);
  }
  function initOther() {
    let manifestElement = document.getElementById(
      "immersive-translate-manifest"
    );
    if (!manifestElement) {
      log_default.error("Could not find manifest element");
      return;
    }
    manifestElement.value = JSON.stringify(browserAPI.runtime.getManifest()), manifestElement.dispatchEvent(new Event("change")), document.getElementById(
      "immersive-translate-message"
    ).addEventListener(
      "change",
      (event) => {
        try {
          let messageObj = JSON.parse(
            event.target.value
          );
          messageObj && messageObj.method === "removeStorageKey" && messageObj.data && messageObj.data.area && messageObj.data.keys && browserAPI.storage[messageObj.data.area].remove(
            messageObj.data.keys
          );
        } catch (e3) {
          log_default.error("parse message error", e3);
        }
      }
    );
  }
  async function initStorage(area) {
    let statusElement = document.getElementById(
      "immersive-translate-status"
    ), storageInputElement = document.getElementById(
      `immersive-translate-${area}-storage`
    );
    if (storageInputElement) {
      log_default.debug("init storage");
      let browserStorageObj = await browserAPI.storage[area].get(null);
      storageInputElement.value = JSON.stringify(browserStorageObj), storageInputElement.dispatchEvent(new Event("change")), storageInputElement.addEventListener("change", (event) => {
        try {
          let storageObj = JSON.parse(event.target.value);
          browserAPI.storage[area].set(storageObj);
        } catch (e3) {
          log_default.error("save to storage error", e3);
        }
      });
    } else {
      log_default.error(`Could not find storage ${area} element`), statusElement.innerText = "Could not find storage local input element";
      return;
    }
  }

  // userscript_message.ts
  function sendMessageToContent(request3) {
    asyncMessageHandler(request3, {
      // @ts-ignore: it's ok
      tab: {
        id: 1,
        url: "https://www.fake.com",
        active: !0
      }
    }).catch((e3) => {
      log_default.error("send content message request failed", request3, e3);
    }), document.querySelectorAll("iframe").forEach((iframe) => {
      iframe.contentWindow && iframe.contentWindow.postMessage(
        {
          author: iframeMessageIdentifier,
          payload: request3
        },
        "*"
      );
    });
    let event = new CustomEvent(userscriptCommandEventName, {
      detail: request3
    });
    globalThis.document.dispatchEvent(event);
  }

  // userscript_command_listeners.ts
  function setupCommandListeners(config) {
    let shortcuts = config.shortcuts || {}, keyMap = Object.keys(shortcuts).reduce((acc, key) => (acc[shortcuts[key]] = key, acc), {}), shortcutsKeys = Object.keys(keyMap);
    for (let key of shortcutsKeys) {
      let realKey = key.replace(/MacCtrl/ig, "Ctrl");
      v2(realKey, (e3) => {
        e3.preventDefault(), sendMessageToContent({
          method: keyMap[key]
        });
      });
    }
  }

  // libs/preact-translation/useTranslate.tsx
  var cache = {}, defaultOptions = {
    root: "",
    lang: "en",
    fallbackLang: "en"
  };
  function useTranslate(rawOptions, translations2) {
    let options2 = Object.assign(
      {},
      defaultOptions,
      rawOptions
    );
    cache = translations2 || cache;
    let [lang, setLang] = P2(options2.lang), [data, setData] = P2(cache), [isReady2, setReady] = P2(!1), loadData = (langKey) => {
      if (data.hasOwnProperty(langKey))
        return;
      setReady(!1);
      let url = getResourceUrl(options2.root || "", langKey);
      options2.getUrl && (url = options2.getUrl(options2.root || "", langKey), fetch(url).then((results) => results.json()).then((resource) => {
        cache[langKey] = resource, setData({ ...cache }), setReady(!0);
      }).catch((error) => {
        setData({ ...cache }), setReady(!0);
      }));
    };
    return j3(() => {
      loadData(options2.fallbackLang || "en"), loadData(lang);
    }, [lang]), { lang, setLang, t: (key, params) => {
      if (!data.hasOwnProperty(lang))
        return key;
      let value = getValue(data, lang, key);
      return value === key && lang !== options2.fallbackLang && (value = getValue(data, options2.fallbackLang, key)), format(value, params);
    }, isReady: isReady2 };
  }

  // https://esm.sh/stable/preact@10.11.0/deno/jsx-runtime.js
  var a5 = 0;
  function p6(n3, s6, t5, f7, u5) {
    var r2, o5, _2 = {};
    for (o5 in s6)
      o5 == "ref" ? r2 = s6[o5] : _2[o5] = s6[o5];
    var e3 = { type: n3, props: _2, key: t5, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --a5, __source: u5, __self: f7 };
    if (typeof n3 == "function" && (r2 = n3.defaultProps))
      for (o5 in r2)
        _2[o5] === void 0 && (_2[o5] = r2[o5]);
    return d2.vnode && d2.vnode(e3), e3;
  }

  // libs/preact-translation/translateProvider.tsx
  var TranslateContext = ce(null), defaultOptions2 = {
    root: "assets",
    lang: "en",
    fallbackLang: "en"
  }, TranslateProvider = (props) => {
    let { t: t5, setLang, lang, isReady: isReady2 } = useTranslate(
      {
        root: props.root || defaultOptions2.root,
        lang: props.lang || defaultOptions2.lang,
        fallbackLang: props.fallbackLang || defaultOptions2.fallbackLang,
        getUrl: props.getUrl
      },
      props.translations
    );
    return /* @__PURE__ */ p6(
      TranslateContext.Provider,
      {
        value: {
          t: t5,
          setLang,
          lang,
          isReady: isReady2
        },
        children: props.children
      }
    );
  };

  // utils/source_language_url_pattern.ts
  function handleSourceLanguageUrlPattern(url, language, currentSourceLanguageUrlPattern) {
    let currentMatches = [];
    currentSourceLanguageUrlPattern || (currentSourceLanguageUrlPattern = {}), language !== "auto" && !currentSourceLanguageUrlPattern[language] && (currentSourceLanguageUrlPattern[language] = {
      matches: [],
      excludeMatches: []
    }), currentMatches = language !== "auto" ? currentSourceLanguageUrlPattern[language].matches : [];
    let urlToLanguage = {}, allKeys = Object.keys(currentSourceLanguageUrlPattern);
    for (let key of allKeys) {
      let urlKeys = currentSourceLanguageUrlPattern[key].matches;
      for (let urlKey of urlKeys)
        urlToLanguage[urlKey] || (urlToLanguage[urlKey] = []), urlToLanguage[urlKey].push(key);
    }
    let currentMatchedlanguages = urlToLanguage[url];
    if (currentMatchedlanguages && currentMatchedlanguages.length > 0)
      for (let currentMatchedlanguage of currentMatchedlanguages)
        currentSourceLanguageUrlPattern[currentMatchedlanguage].matches.indexOf(url) > -1 && (currentSourceLanguageUrlPattern[currentMatchedlanguage] = {
          ...currentSourceLanguageUrlPattern[currentMatchedlanguage],
          matches: currentSourceLanguageUrlPattern[currentMatchedlanguage].matches.filter(
            (item) => item !== url
          )
        });
    let currentMatchSet = new Set(currentMatches);
    if (language === "auto")
      return {
        ...currentSourceLanguageUrlPattern
      };
    currentMatchSet.add(url);
    let newMatches = Array.from(currentMatchSet);
    return {
      ...currentSourceLanguageUrlPattern,
      [language]: {
        ...currentSourceLanguageUrlPattern[language],
        matches: newMatches
      }
    };
  }

  // utils/click-multiple-times.ts
  function onClickMultipleTimes(requiredClicks, timeLimit = 2e3) {
    return (cb) => {
      let timer2, clicked = 0;
      return (e3) => {
        ++clicked == requiredClicks && (cb(e3), clicked = 0), clearTimeout(timer2), timer2 = setTimeout(
          () => clicked = 0,
          // reset the number of clicks after a traditional 300ms duration
          timeLimit
        );
      };
    };
  }

  // utils/is_valid_html_url.ts
  function isValidHtmlUrl(url) {
    let urlObj;
    try {
      urlObj = new URL(url);
    } catch {
      return !1;
    }
    let pathname = urlObj.pathname;
    return pathname.endsWith(".html") || pathname.endsWith(".htm") ? !0 : !(urlObj.protocol !== "http:" && urlObj.protocol !== "https:" && urlObj.protocol !== "file:" && urlObj.protocol !== "data:");
  }

  // utils/hostname_to_wild_hostname.ts
  function hostnameToWildHostname(hostname2) {
    let parts = hostname2.split(".");
    return parts.length > 2 ? (parts[0] = "*", parts.join(".")) : null;
  }

  // utils/url_without_hash.ts
  function getUrlWithoutHash(url) {
    let hashIndex = url.indexOf("#");
    return hashIndex === -1 ? url : url.slice(0, hashIndex);
  }

  // browser/version.ts
  function getVersion() {
    return browserAPI.runtime.getManifest().version;
  }

  // components/select_link.tsx
  function SelectLink(props) {
    let { items, maxWidth } = props;
    return maxWidth = maxWidth || 128, /* @__PURE__ */ p6(
      "select",
      {
        autoComplete: "off",
        class: "min-select",
        style: { maxWidth: `${maxWidth}px` },
        value: items.find((item) => item.selected)?.value,
        onChange: (e3) => {
          let value = e3.target.value, item = items.find((item2) => item2.value === value);
          item && item.onSelected(item);
        },
        children: items.map((item) => /* @__PURE__ */ p6("option", { value: item.value, selected: item.selected, children: item.label }))
      }
    );
  }

  // components/button_drop_down.tsx
  var DEFAULT_VALUE = "DROP_DOWN_DEFAULT_VALUE";
  function SelectDropDown(props) {
    let { showArrow, onSelected, className, menus, maxWidth } = props;
    className = className || "", showArrow = showArrow ?? !0, maxWidth = maxWidth || 60;
    let ref = w3(null);
    return /* @__PURE__ */ p6(
      "select",
      {
        ref,
        autoComplete: "off",
        class: `min-select ${showArrow ? "" : "min-select-no-arrow"} ${className || ""}`,
        value: DEFAULT_VALUE,
        style: { maxWidth: `${maxWidth}px` },
        onChange: (e3) => {
          e3.preventDefault();
          let value = e3.target.value;
          if (ref.current && value !== DEFAULT_VALUE) {
            ref.current.value = DEFAULT_VALUE, ref.current?.dispatchEvent(new Event("change"));
            let item = menus.find((item2) => item2.value === value);
            item && onSelected(item);
          }
        },
        children: [{
          value: DEFAULT_VALUE,
          label: props.label
        }].concat(menus).map((item) => /* @__PURE__ */ p6("option", { value: item.value, children: item.label }))
      }
    );
  }

  // hooks/use_i18n.ts
  function useI18n() {
    return M2(TranslateContext);
  }

  // components/popup_field.tsx
  function PopupField(props) {
    let { field, onChange, value } = props;
    value = value || field.default || "";
    let { t: t5 } = useI18n();
    return field.type === "select" ? /* @__PURE__ */ p6("div", { class: "flex justify-between mb-2", children: [
      /* @__PURE__ */ p6("label", { class: "inline-block", children: [
        field.label ? t5(field.label) : field.name,
        "\uFF1A"
      ] }),
      /* @__PURE__ */ p6(
        SelectLink,
        {
          items: field.options.map(
            (fieldOption) => ({
              label: `${fieldOption.label ? t5(fieldOption.label) : fieldOption.value}`,
              value,
              selected: value === fieldOption.value,
              onSelected: () => {
                onChange(fieldOption.value);
              }
            })
          )
        }
      )
    ] }) : null;
  }

  // components/sync_latest.tsx
  var SyncSuccess = ({ date }) => {
    let { t: t5 } = useI18n(), [isHide, setIsHide] = P2(!1);
    return j3(() => {
      setTimeout(() => {
        setIsHide(!0);
      }, 5e3);
    }, []), isHide ? null : /* @__PURE__ */ p6("p", { class: "text-sm", children: [
      t5("Successfully synchronized with the latest official rules:"),
      " ",
      new Date(date).toLocaleString()
    ] });
  }, LocalVersionIsTooOld = ({ minVersion }) => {
    let { t: t5 } = useI18n();
    return /* @__PURE__ */ p6("p", { class: "text-sm", children: t5(
      "localVersionIsTooOld",
      {
        minVersion
      }
    ) });
  }, BadUserscriptBrowser = () => {
    let { t: t5 } = useI18n();
    return /* @__PURE__ */ p6(
      "p",
      {
        class: "text-sm",
        dangerouslySetInnerHTML: {
          __html: t5(
            "badUserscriptBrowser",
            {
              1: "https://immersive-translate.owenyoung.com/installation.html"
            }
          )
        }
      }
    );
  }, SyncFailed = ({ message, handleSyncing, date }) => {
    let { t: t5 } = useI18n();
    return /* @__PURE__ */ p6("p", { class: "text-sm", children: [
      t5("failToSyncRules"),
      " ",
      /* @__PURE__ */ p6("a", { onClick: handleSyncing, children: t5("retry") }),
      /* @__PURE__ */ p6("br", {}),
      t5("failedReason"),
      "\uFF1A",
      message,
      /* @__PURE__ */ p6("br", {}),
      t5("currentRuleVersion"),
      "\uFF1A",
      date
    ] });
  };
  function SyncLatest(props) {
    let { request: request3 } = props, [localBuildinConfigUpdatedAt, setLocalBuildinConfigUpdatedAt] = P2(null), { t: t5 } = useI18n(), [remoteConfig, setRemoteConfig] = P2(null), [isNeedUpdate, setIsNeedUpdate] = P2(null), [syncErrorMessage, setSyncErrorMessage] = P2(""), [isSyncSuccess, setIsSyncSuccess] = P2(!1), [isInvalidLocalVersion, setIsInvalidLocalVersion] = P2(
      !1
    ), [isBadUserscriptBrowser, setIsBadUserscriptBrowser] = P2(
      !1
    ), [config, setConfig] = P2(null), [_isLatestVersion, setIsLatestVersion] = P2(null), version = getVersion(), handleSyncing = async () => {
      setSyncErrorMessage("");
      let finalRemoteConfig = remoteConfig;
      if (remoteConfig === null)
        try {
          let response = await request3({ url: buildinConfigSyncUrl });
          response ? (setRemoteConfig(response), finalRemoteConfig = response, setIsSyncSuccess(!0)) : (setSyncErrorMessage(t5("unknownError")), setIsNeedUpdate(null));
        } catch (e3) {
          setIsNeedUpdate(null), setSyncErrorMessage(e3.message);
          return;
        }
      finalRemoteConfig !== null ? (props.setStorageBuildinConfig(finalRemoteConfig), setIsNeedUpdate(!1), setLocalBuildinConfigUpdatedAt(
        finalRemoteConfig.buildinConfigUpdatedAt
      )) : (setSyncErrorMessage(t5("canNotFetchRemoteRule")), setIsNeedUpdate(null));
    };
    return j3(() => {
      getConfig().then((localConfig2) => {
        let localConfigUpdatedAtIsoString = localConfig2.buildinConfigUpdatedAt;
        setConfig(localConfig2);
        let localConfigUpdatedAt = new Date(localConfigUpdatedAtIsoString);
        if (setLocalBuildinConfigUpdatedAt(localConfigUpdatedAtIsoString), version === "0.0.0") {
          setIsBadUserscriptBrowser(!0);
          return;
        }
        request3({
          url: buildinConfigSyncUrl
        }).then((response) => {
          let data = response, remoteMinVersion = data.minVersion, localVersion = version;
          setRemoteConfig(data);
          let remoteVersion = data.latestVersion;
          if (remoteVersion && (isAVersionGreaterOrEqualWithB(localVersion, remoteVersion) ? setIsLatestVersion(!0) : setIsLatestVersion(!1)), isAVersionGreaterOrEqualWithB(localVersion, remoteMinVersion)) {
            let latestIsoTime = data.buildinConfigUpdatedAt;
            new Date(latestIsoTime) > localConfigUpdatedAt ? (setIsNeedUpdate(!0), handleSyncing()) : setIsNeedUpdate(!1);
          } else
            setIsInvalidLocalVersion(!0), setIsNeedUpdate(null);
        }).catch((e3) => {
          setIsNeedUpdate(null), setSyncErrorMessage(e3.message);
        });
      });
    }, []), j3(() => {
      getConfig().then((config2) => {
        setConfig(config2);
      });
    }, [localBuildinConfigUpdatedAt]), config ? /* @__PURE__ */ p6("div", { class: "text-sm mt-2", style: { maxWidth: 218 }, children: isBadUserscriptBrowser ? /* @__PURE__ */ p6(BadUserscriptBrowser, {}) : syncErrorMessage ? /* @__PURE__ */ p6(
      SyncFailed,
      {
        handleSyncing,
        message: syncErrorMessage,
        date: localBuildinConfigUpdatedAt || ""
      }
    ) : isInvalidLocalVersion ? /* @__PURE__ */ p6(LocalVersionIsTooOld, { minVersion: remoteConfig.minVersion }) : isNeedUpdate === null || isNeedUpdate === !0 ? null : isSyncSuccess ? /* @__PURE__ */ p6(SyncSuccess, { date: localBuildinConfigUpdatedAt }) : null }) : null;
  }

  // components/popup.tsx
  function Popup(props) {
    let version = getVersion(), {
      onTranslateTheMainPage,
      onUserConfigChange,
      request: request3,
      onSetBuildinConfig,
      pageStatus: pageStatus2,
      config,
      openAboutPage: openAboutPage3,
      onTranslateTheWholePage,
      openOptionsPage: openOptionsPage3,
      ontranslateToThePageEndImmediately,
      onSetPageLanguage,
      onToggleTranslate,
      onTranslateLocalPdfFile,
      onTranslatePdf,
      onRestorePage,
      ctx,
      currentUrl,
      currentLang,
      onClose,
      onTranslatePage,
      onSetLocalConfig
    } = props, setSettings = onUserConfigChange, [message, setMessage] = P2(""), [errorMessage, _setErrorMessage] = P2(""), { t: t5 } = useI18n(), isAlwaysTranslateDomain = null, isAlwaysTranslateWildDomain = null, isNeverTranslaateDomain = null, isNeverTranslateWildDomain = null, isAlwaysTranslateLang = null, isAlwaysTranslateUrl = null, isNeverTranslateUrl = null, curentTranslationServiceItem = null, currentUrlObj = null, currentWildHostname = null, currentUrlWithoutHash = null, currentTranslationServiceConfig = null;
    if (config) {
      let { translationService, translationServices, translationUrlPattern } = config;
      if (TranslationServices[translationService] && (curentTranslationServiceItem = formatTranslationService(
        translationService,
        ctx
      )), translationServices && translationServices[translationService] ? currentTranslationServiceConfig = translationServices[translationService] || {} : currentTranslationServiceConfig = {}, currentUrl && isValidHtmlUrl(currentUrl)) {
        currentUrlObj = new URL(currentUrl), currentWildHostname = hostnameToWildHostname(currentUrlObj.hostname), currentUrlWithoutHash = getUrlWithoutHash(currentUrl);
        let { matches, excludeMatches } = translationUrlPattern;
        isAlwaysTranslateWildDomain = matches.includes(currentWildHostname), isAlwaysTranslateDomain = matches.includes(currentUrlObj.hostname), isNeverTranslateWildDomain = excludeMatches.includes(
          currentWildHostname
        ), isNeverTranslaateDomain = excludeMatches.includes(
          currentUrlObj.hostname
        ), isAlwaysTranslateUrl = matches.includes(currentUrlWithoutHash), isNeverTranslateUrl = excludeMatches.includes(currentUrlWithoutHash);
      }
    }
    if (config && currentLang && currentLang !== "auto") {
      let { translationLanguagePattern } = config, { matches } = translationLanguagePattern;
      matches.includes(currentLang) ? isAlwaysTranslateLang = !0 : isAlwaysTranslateLang = !1;
    }
    let handleOpenOptions = (e3) => {
      e3.preventDefault(), openOptionsPage3();
    }, handleToggleAlpha = (_e3) => {
      setSettings((settings) => (settings.alpha ? setMessage("Success disable alpha!") : setMessage("Success enable alpha!"), {
        ...settings,
        alpha: !settings.alpha
      }));
    }, handleChangeToTranslateTheWholePage = () => {
      setSettings((state) => ({
        ...state,
        translationArea: "body"
      })), onTranslateTheWholePage();
    }, handleChangeToTranslateTheMainPage = () => {
      setSettings((state) => ({
        ...state,
        translationArea: "main"
      })), onTranslateTheMainPage();
    }, handleTranslationUrlPatternSelected = (value, matchString, reverseRemoveStrings, removeStrings) => {
      if (value === "default") {
        setSettings((state) => {
          let translationUrlPattern = { ...state.translationUrlPattern };
          return {
            ...state,
            translationUrlPattern: {
              ...state.translationUrlPattern,
              matches: removeFromArray(
                [currentUrlObj?.hostname, currentWildHostname, currentUrl],
                translationUrlPattern.matches
              ),
              excludeMatches: removeFromArray(
                [currentUrlObj?.hostname, currentWildHostname, currentUrl],
                translationUrlPattern.excludeMatches
              )
            }
          };
        });
        return;
      }
      let name = value, reverseName = name === "matches" ? "excludeMatches" : "matches";
      currentUrlObj && setSettings((state) => {
        let translationUrlPattern = { ...state.translationUrlPattern };
        return translationUrlPattern[name] = addToUniqueArray(
          matchString,
          translationUrlPattern[name]
        ), removeStrings.length > 0 && (translationUrlPattern[name] = removeFromArray(
          removeStrings,
          translationUrlPattern[name]
        )), translationUrlPattern[reverseName] = removeFromArray(
          reverseRemoveStrings,
          translationUrlPattern[reverseName]
        ), {
          ...state,
          translationUrlPattern: {
            ...state.translationUrlPattern,
            ...translationUrlPattern
          }
        };
      }), name === "matches" && pageStatus2 === "Original" ? setTimeout(() => {
        onTranslatePage(), onClose();
      }, 100) : name === "excludeMatches" && pageStatus2 === "Translated" && setTimeout(() => {
        onRestorePage(), onClose();
      }, 100);
    }, handleTranslationLanguagePatternSelected = (value) => {
      if (!value) {
        setSettings((state) => {
          let translationLanguagePattern = {
            ...state.translationLanguagePattern
          };
          return {
            ...state,
            translationLanguagePattern: {
              ...state.translationLanguagePattern,
              matches: removeFromArray(
                currentLang,
                translationLanguagePattern.matches
              ),
              excludeMatches: removeFromArray(
                currentLang,
                translationLanguagePattern.excludeMatches
              )
            }
          };
        });
        return;
      }
      let name = value, reverseName = name === "matches" ? "excludeMatches" : "matches";
      currentLang && setSettings((state) => {
        let translationLanguagePattern = {
          ...state.translationLanguagePattern
        };
        return translationLanguagePattern[name] = addToUniqueArray(
          currentLang,
          translationLanguagePattern[name]
        ), translationLanguagePattern[reverseName] = removeFromArray(
          currentLang,
          translationLanguagePattern[reverseName]
        ), {
          ...state,
          translationLanguagePattern: {
            ...state.translationLanguagePattern,
            ...translationLanguagePattern
          }
        };
      }), name === "matches" && pageStatus2 === "Original" && setTimeout(() => {
        onTranslatePage(), onClose();
      }, 100);
    }, isPdfUrl = currentUrlObj?.pathname.toLowerCase().endsWith(".pdf"), buttonLabel = t5("translate");
    pageStatus2 === "Translated" ? buttonLabel = t5("show-original") : pageStatus2 === "Original" ? isPdfUrl ? isFirefox() && currentUrlObj.protocol === "file:" ? buttonLabel = t5("translate-firefox-local-pdf") : buttonLabel = t5("translate-pdf") : buttonLabel = t5("translate") : buttonLabel = t5(pageStatus2);
    let translateToThePageEndImmediatelyLabel = t5(
      "translateToThePageEndImmediately"
    );
    (pageStatus2 === "Original" || pageStatus2 === "Translated") && (config.shortcuts.toggleTranslatePage && (isTouchDevice() && ctx.rule.fingerCountToToggleTranslagePageWhenTouching >= 2 ? buttonLabel += ` (${t5(`fingers.${ctx.rule.fingerCountToToggleTranslagePageWhenTouching}`)})` : buttonLabel += ` (${config.shortcuts.toggleTranslatePage})`), config.shortcuts.toggleTranslateToThePageEndImmediately && (translateToThePageEndImmediatelyLabel += ` (${config.shortcuts.toggleTranslateToThePageEndImmediately})`));
    let translationServiceItems = [];
    ctx && (translationServiceItems = getTranslationServices(ctx));
    let handleClosePopup = (e3) => {
      e3.preventDefault(), onClose();
    };
    return /* @__PURE__ */ p6("div", { class: "p-3", children: [
      /* @__PURE__ */ p6("div", { class: "text-sm", children: [
        /* @__PURE__ */ p6("div", { class: "flex justify-between mb-2", children: [
          /* @__PURE__ */ p6("label", { class: "inline-block", children: [
            t5("popupSourceLanguage"),
            "\uFF1A"
          ] }),
          /* @__PURE__ */ p6(
            SelectLink,
            {
              items: languages.map((code2) => ({
                label: getLanguageName(code2, config.interfaceLanguage),
                value: code2,
                selected: code2 === currentLang,
                onSelected: (item) => {
                  onSetPageLanguage(item.value);
                }
              }))
            }
          )
        ] }),
        config && config.targetLanguage && /* @__PURE__ */ p6("div", { class: "flex justify-between mb-2", children: [
          /* @__PURE__ */ p6("label", { class: "inline-block", children: [
            t5("popupTarget"),
            "\uFF1A"
          ] }),
          /* @__PURE__ */ p6(
            SelectLink,
            {
              items: languages.filter((code2) => code2 !== "auto").map((code2) => ({
                label: getLanguageName(code2, config.interfaceLanguage),
                value: code2,
                selected: code2 === config.targetLanguage,
                onSelected: (item) => {
                  setSettings((state) => ({
                    ...state,
                    targetLanguage: item.value
                  }));
                }
              }))
            }
          )
        ] }),
        curentTranslationServiceItem && translationServiceItems.length > 0 && /* @__PURE__ */ p6(L, { children: [
          /* @__PURE__ */ p6("div", { class: "flex justify-between mb-2", children: [
            /* @__PURE__ */ p6("label", { class: "inline-block", children: [
              t5("popupService"),
              "\uFF1A"
            ] }),
            /* @__PURE__ */ p6(
              SelectLink,
              {
                items: translationServiceItems.map(
                  (translationServiceItem) => ({
                    label: `${t5("translationServices." + translationServiceItem.id)}${translationServiceItem.ok ? "" : " " + t5("needAction")}`,
                    value: translationServiceItem.id,
                    selected: translationServiceItem.selected,
                    onSelected: (option) => {
                      let selectedItem = translationServiceItems.find(
                        (item) => item.id === option.value
                      );
                      selectedItem.ok ? (setSettings((state) => ({
                        ...state,
                        translationService: selectedItem.id
                      })), selectedItem.props.length === 0 ? setTimeout(() => {
                        onTranslatePage();
                      }, 1) : setTimeout(() => {
                        onRestorePage();
                      }, 1)) : (setSettings((state) => ({
                        ...state,
                        translationService: selectedItem.id
                      })), setTimeout(() => {
                        openOptionsPage3();
                      }, 100));
                    }
                  })
                )
              }
            )
          ] }),
          currentTranslationServiceConfig && curentTranslationServiceItem.props.length > 0 && curentTranslationServiceItem.props.map((prop, index) => /* @__PURE__ */ p6("div", { class: "pl-4 text-sm", children: /* @__PURE__ */ p6(
            PopupField,
            {
              field: prop,
              value: currentTranslationServiceConfig[prop.name],
              onChange: (value) => {
                setSettings((state) => {
                  let currentServices = state.translationServices || {}, currentServiceConfig = currentServices[curentTranslationServiceItem.id] || {};
                  return setTimeout(() => {
                    onRestorePage();
                  }, 1), {
                    ...state,
                    translationServices: {
                      ...currentServices,
                      [curentTranslationServiceItem.id]: {
                        ...currentServiceConfig,
                        [prop.name]: value
                      }
                    }
                  };
                });
              }
            },
            "field-" + index
          ) }))
        ] }),
        currentUrlObj && /* @__PURE__ */ p6("div", { class: "flex justify-between mb-2", children: [
          /* @__PURE__ */ p6("label", { class: "inline-block", children: t5("forThisSite") }),
          /* @__PURE__ */ p6(
            SelectLink,
            {
              items: [
                {
                  label: t5("default"),
                  value: "default",
                  selected: isAlwaysTranslateDomain === !1 && isNeverTranslaateDomain === !1 && !isAlwaysTranslateWildDomain && !isNeverTranslateWildDomain && !isAlwaysTranslateUrl && !isNeverTranslateUrl,
                  onSelected: () => {
                    handleTranslationUrlPatternSelected(
                      "default",
                      currentUrlObj.hostname,
                      [],
                      []
                    );
                    let currentDomain = currentUrlObj.hostname, currentTempTranslationDomains = ctx.localConfig.tempTranslationUrlMatches || [], filteredDomains = currentTempTranslationDomains.filter(
                      (item) => item.match !== currentDomain
                    ), isChanged = !1;
                    filteredDomains.length !== currentTempTranslationDomains.length && (isChanged = !0), isChanged && onSetLocalConfig({
                      ...ctx.localConfig,
                      tempTranslationUrlMatches: [
                        ...filteredDomains
                      ]
                    });
                  }
                },
                currentUrlWithoutHash && {
                  label: t5("alwaysTranslateSomeSite", {
                    hostname: t5("currentUrl")
                  }),
                  value: "matchesUrl",
                  selected: isAlwaysTranslateUrl,
                  onSelected: () => {
                    handleTranslationUrlPatternSelected(
                      "matches",
                      currentUrlWithoutHash,
                      [currentUrlWithoutHash],
                      []
                    );
                  }
                },
                {
                  label: t5("alwaysTranslateSomeSite", {
                    hostname: currentUrlObj.hostname
                  }),
                  value: "matches",
                  selected: isAlwaysTranslateDomain,
                  onSelected: (item) => {
                    handleTranslationUrlPatternSelected(
                      item.value,
                      currentUrlObj.hostname,
                      [
                        currentUrlObj.hostname,
                        currentWildHostname,
                        currentUrlWithoutHash
                      ],
                      [currentWildHostname]
                    );
                  }
                },
                currentWildHostname && {
                  label: t5("alwaysTranslateSomeSite", {
                    hostname: currentWildHostname
                  }),
                  value: "matchesWild",
                  selected: isAlwaysTranslateWildDomain,
                  onSelected: () => {
                    handleTranslationUrlPatternSelected(
                      "matches",
                      currentWildHostname,
                      [
                        currentUrlWithoutHash,
                        currentUrlObj.hostname,
                        currentWildHostname
                      ],
                      [currentUrlObj.hostname]
                    );
                  }
                },
                currentUrlWithoutHash && {
                  label: t5("neverTranslateSomeSite", {
                    hostname: t5("currentUrl")
                  }),
                  value: "excludeMatchesUrl",
                  selected: isNeverTranslateUrl,
                  onSelected: () => {
                    handleTranslationUrlPatternSelected(
                      "excludeMatches",
                      currentUrlWithoutHash,
                      [currentUrlWithoutHash],
                      []
                    );
                  }
                },
                {
                  label: t5("neverTranslateSomeSite", {
                    hostname: currentUrlObj.hostname
                  }),
                  value: "excludeMatches",
                  selected: isNeverTranslaateDomain,
                  onSelected: (item) => {
                    handleTranslationUrlPatternSelected(
                      item.value,
                      currentUrlObj.hostname,
                      [
                        currentUrlObj.hostname,
                        currentWildHostname,
                        currentUrlWithoutHash
                      ],
                      [currentWildHostname]
                    );
                  }
                },
                currentWildHostname && {
                  label: t5("neverTranslateSomeSite", {
                    hostname: currentWildHostname
                  }),
                  value: "excludeMatchesWild",
                  selected: isNeverTranslateWildDomain,
                  onSelected: () => {
                    handleTranslationUrlPatternSelected(
                      "excludeMatches",
                      currentWildHostname,
                      [
                        currentUrlObj.hostname,
                        currentUrlWithoutHash,
                        currentWildHostname
                      ],
                      [currentUrlObj.hostname]
                    );
                  }
                }
              ].filter(Boolean)
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ p6("div", { class: "", children: /* @__PURE__ */ p6(
        "button",
        {
          class: "py-2 mt-1 mb-2 main-button ",
          onClick: () => {
            isPdfUrl ? onTranslatePdf && onTranslatePdf() : onToggleTranslate();
          },
          "aria-busy": pageStatus2 === "Translating",
          disabled: pageStatus2 === "Translating",
          children: buttonLabel
        }
      ) }),
      /* @__PURE__ */ p6("div", { class: "flex justify-between", children: [
        currentLang && currentLang !== "auto" ? /* @__PURE__ */ p6("label", { for: "alwaysTranslateThisLanugage", class: "text-sm", children: [
          /* @__PURE__ */ p6(
            "input",
            {
              type: "checkbox",
              id: "alwaysTranslateThisLanugage",
              name: "alwaysTranslateThisLanugage",
              checked: !!isAlwaysTranslateLang,
              onChange: (e3) => {
                let checked = e3.target.checked;
                handleTranslationLanguagePatternSelected(
                  checked ? "matches" : void 0
                );
              }
            }
          ),
          t5("alwaysTranslateSomeLanguage", {
            language: getLanguageName(
              currentLang,
              config.interfaceLanguage
            )
          })
        ] }) : /* @__PURE__ */ p6("span", {}),
        /* @__PURE__ */ p6(
          SelectDropDown,
          {
            label: t5("more"),
            showArrow: !0,
            onSelected: (item) => {
              item.value === "translateTheWholePage" ? onTranslateTheWholePage() : item.value === "translateToThePageEndImmediately" ? ontranslateToThePageEndImmediately() : item.value === "translateTheMainPage" ? onTranslateTheMainPage() : item.value === "showTranslationOnly" || (item.value === "translateLocalPdfFile" ? onTranslateLocalPdfFile && onTranslateLocalPdfFile() : item.value === "donate" ? (globalThis.open(config.donateUrl), onClose()) : item.value === "feedback" ? (globalThis.open(config.feedbackUrl), onClose()) : item.value === "options" ? (openOptionsPage3(), onClose()) : item.value === "changeToTranslateTheWholePage" ? handleChangeToTranslateTheWholePage() : item.value === "changeToTranslateTheMainPage" ? handleChangeToTranslateTheMainPage() : item.value === "about" && openAboutPage3());
            },
            menus: [
              config.translationArea === "main" && {
                label: "\u{1F480} " + t5("changeToTranslateTheWholePage"),
                value: "changeToTranslateTheWholePage"
              },
              config.translationArea === "body" && {
                label: "\u{1F4D6} " + t5("changeToTranslateTheMainPage"),
                value: "changeToTranslateTheMainPage"
              },
              {
                label: "\u26A1 " + translateToThePageEndImmediatelyLabel,
                value: "translateToThePageEndImmediately"
              },
              !isMonkey() && {
                label: "\u{1F4C1} " + t5("browser.translateLocalPdfFile"),
                value: "translateLocalPdfFile"
              },
              {
                label: "\u2764\uFE0F " + t5("aboutLabel"),
                value: "about"
              }
            ].filter(Boolean)
          }
        )
      ] }),
      /* @__PURE__ */ p6("div", { class: "text-sm", children: message }),
      /* @__PURE__ */ p6("div", { class: "text-sm", children: errorMessage }),
      /* @__PURE__ */ p6("footer", { children: [
        /* @__PURE__ */ p6(
          SyncLatest,
          {
            request: request3,
            setStorageBuildinConfig: onSetBuildinConfig
          }
        ),
        /* @__PURE__ */ p6("div", { class: "mt-3 text-sm flex justify-between", children: [
          /* @__PURE__ */ p6("a", { href: "#", class: "secondary", onClick: handleOpenOptions, children: t5("options") }),
          isMonkey() && /* @__PURE__ */ p6("a", { href: "#", class: "secondary", onClick: handleClosePopup, children: t5("close") }),
          /* @__PURE__ */ p6(
            "span",
            {
              class: "immersive-translate-no-select muted",
              onClick: onClickMultipleTimes(7)(handleToggleAlpha),
              children: [
                "V",
                version
              ]
            }
          )
        ] })
      ] })
    ] });
  }

  // libs/use-chrome-storage/storage.ts
  var storage = {
    get: (key, defaultValue, storageArea) => {
      let keyObj = defaultValue === void 0 ? key : { [key]: defaultValue };
      return browserAPI.storage[storageArea].get(
        keyObj
      );
    },
    set: (key, value, storageArea) => browserAPI.storage[storageArea].set({ [key]: value })
  };

  // libs/use-chrome-storage/useChromeStorage.ts
  function useChromeStorage(key, initialValue, storageArea) {
    let [INITIAL_VALUE2] = P2(() => typeof initialValue == "function" ? initialValue() : initialValue), [STORAGE_AREA] = P2(storageArea), [state, setState] = P2(INITIAL_VALUE2), [isPersistent, setIsPersistent] = P2(!1), [error, setError] = P2("");
    j3(() => {
      storage.get(key, INITIAL_VALUE2, STORAGE_AREA).then((res) => {
        res[key] && setState(res[key]), setIsPersistent(!0), setError("");
      }).catch((error2) => {
        setIsPersistent(!1), setError(error2);
      });
    }, [key, INITIAL_VALUE2, STORAGE_AREA]);
    let updateValue = L2(
      // @ts-ignore: npm package is not typed
      (newValue) => {
        let toStore = typeof newValue == "function" ? newValue(state) : newValue;
        log_default.debug("new settings", toStore), storage.set(key, toStore, STORAGE_AREA).then(() => {
          setState(toStore), setIsPersistent(!0), setError("");
        }).catch((error2) => {
          setState(toStore), setIsPersistent(!1), setError(error2);
        });
      },
      [STORAGE_AREA, key, state]
    );
    return [state, updateValue, isPersistent, error];
  }

  // libs/use-chrome-storage/createChromeStorageStateHook.ts
  function createChromeStorageStateHook(key, initialValue, storageArea) {
    let consumers = [];
    return function() {
      let [value, setValue, isPersistent, error] = useChromeStorage(
        key,
        initialValue,
        storageArea
      ), setValueAll = L2((newValue) => {
        for (let consumer of consumers)
          consumer(newValue);
      }, []);
      return j3(() => (consumers.push(setValue), () => {
        consumers.splice(consumers.indexOf(setValue), 1);
      }), [setValue]), [value, setValueAll, isPersistent, error];
    };
  }

  // libs/use-chrome-storage/mod.ts
  function createChromeStorageStateHookSync(key, initialValue) {
    return createChromeStorageStateHook(key, initialValue, "sync");
  }

  // hooks/use_user_config.ts
  var SETTINGS_KEY = "userConfig", INITIAL_VALUE = {}, rawUseUserConfig = createChromeStorageStateHookSync(
    SETTINGS_KEY,
    INITIAL_VALUE
  );
  function useUserConfig() {
    let [value, setValue, isPersistent, error] = rawUseUserConfig();
    return [value, function(newValue) {
      let toStore = typeof newValue == "function" ? newValue(value) : newValue;
      toStore && (toStore.updatedAt = (/* @__PURE__ */ new Date()).toISOString()), setValue(toStore);
    }, isPersistent, error, setValue];
  }

  // userscript/popup_app.tsx
  function PopupApp(props) {
    let { onClose } = props, [pageStatus2, setPageStatus] = P2("Original"), [settings, setSettings, _isPersistent, _error] = useUserConfig(), [config, setConfig] = P2(null), [currentUrl, setCurrentUrl] = P2(
      globalThis.location.href
    ), [currentLang, setCurrentLang] = P2("auto"), [ctx, setContext] = P2(null), onToggleTranslate = (event) => {
      setPageStatus(event.detail);
    }, onSetPageLanguage = (lang) => {
      setCurrentLang(lang);
      let newSourceLanguageUrlPattern = handleSourceLanguageUrlPattern(
        currentUrl,
        lang,
        config.sourceLanguageUrlPattern
      );
      setSettings((state) => ({
        ...state,
        sourceLanguageUrlPattern: newSourceLanguageUrlPattern
      })), setCurrentPageLanguageByClient(lang);
    }, onUrlChange = () => {
      setCurrentUrl(globalThis.location.href);
    };
    j3(() => (document.addEventListener(
      pageTranslatedStatusEventName,
      onToggleTranslate,
      !1
    ), getConfig2().then((result) => {
      setConfig(result);
      let currentLanguage = getCurrentPageLanguage();
      setCurrentLang(currentLanguage);
      let currentPageStatus = getPageStatus();
      setPageStatus(currentPageStatus), runCron(result.interval);
    }), document.addEventListener("urlChange", onUrlChange), () => {
      document.removeEventListener("pageTranslatedStatus", onToggleTranslate), document.removeEventListener("urlChange", onUrlChange);
    }), []), j3(() => {
      getConfig2().then((config2) => {
        setConfig(config2);
      });
    }, [settings]), j3(() => {
      currentUrl && config && getContext({
        url: currentUrl,
        config
      }).then((ctx2) => {
        setContext(ctx2);
      });
    }, [currentUrl, config]);
    let handleSendMessageToContent = (method, isClose) => () => {
      sendMessageToContent({
        method
      }), isClose && onClose();
    }, handleClose = () => {
      onClose();
    }, handleTranslatePdf = () => {
      globalThis.alert("Not implemented yet"), onClose();
    }, handleTranslateLocalPdfFile = () => {
      globalThis.alert("Not implemented yet"), onClose();
    }, handleOpenOptionsPage = () => {
      openOptionsPage2(!0), setTimeout(() => {
        onClose();
      }, 50);
    }, handleOpenAboutPage = () => {
      openAboutPage2(), setTimeout(() => {
        onClose();
      }, 50);
    };
    return !config || !ctx ? null : /* @__PURE__ */ p6(
      Popup,
      {
        request: request2,
        onClose: handleClose,
        onTranslateTheWholePage: handleSendMessageToContent(
          "translateTheWholePage",
          !0
        ),
        openOptionsPage: handleOpenOptionsPage,
        onToggleTranslate: handleSendMessageToContent(
          "toggleTranslatePage",
          !0
        ),
        onTranslateTheMainPage: handleSendMessageToContent(
          "translateTheMainPage",
          !0
        ),
        ontranslateToThePageEndImmediately: handleSendMessageToContent(
          "translateToThePageEndImmediately",
          !0
        ),
        onTranslatePage: handleSendMessageToContent("translatePage", !0),
        onRestorePage: handleSendMessageToContent("restorePage", !1),
        onTranslatePdf: handleTranslatePdf,
        openAboutPage: handleOpenAboutPage,
        onTranslateLocalPdfFile: handleTranslateLocalPdfFile,
        onSetPageLanguage,
        onUserConfigChange: setSettings,
        config,
        pageStatus: pageStatus2,
        ctx,
        currentUrl,
        currentLang,
        onSetLocalConfig: setLocalConfig2,
        onSetBuildinConfig: setBuildinConfig2
      }
    );
  }

  // userscript/popup_entry.tsx
  function addCSSLegacy(root2, csses) {
    for (let css of csses)
      root2.appendChild(document.createElement("style")).innerHTML = css;
  }
  var currentPagePopupConfig = {
    position: "right",
    right: 0,
    top: 335
  }, positionChanged = !1, rootRef = null, btnRef = null, mountPointRef = null, shadowRef = null, timer = null, localConfig = null, delta = 6, startX, startY, lastBtnStyle = null, lastRootStyle = null;
  async function initPopup() {
    let env4 = getEnv();
    localConfig = await getLocalConfig2(), currentPagePopupConfig = localConfig.pagePopupConfig || currentPagePopupConfig;
    let popup = document.createElement("div");
    popup.id = "immersive-translate-popup", popup.setAttribute("style", "all: initial"), document.documentElement.appendChild(popup);
    let shadow = popup.attachShadow({ mode: "open" });
    shadowRef = shadow;
    let csses = [
      env4.IMMERSIVE_TRANSLATE_PICO_CSS,
      env4.IMMERSIVE_TRANSLATE_COMMON_CSS,
      env4.IMMERSIVE_TRANSLATE_POPUP_CSS
    ];
    addCSSLegacy(shadow, csses);
    let mountRoot = document.createElement("div");
    mountRoot.innerHTML = env4.IMMERSIVE_TRANSLATE_POPUP_HTML, shadow.appendChild(mountRoot), rootRef = shadow.querySelector(
      "#immersive-translate-popup-container"
    );
    let btn = shadow.querySelector(
      "#immersive-translate-popup-btn"
    );
    btnRef = btn, mountPointRef = shadow.querySelector("#mount"), rootRef.setAttribute(
      "style",
      objToStyle(currentPagePopupConfig)
    ), setBtnTransform(), btn.addEventListener("mousedown", onMouseDown), btn.addEventListener("touchstart", onTouchStart), globalThis.addEventListener("resize", (_e3) => {
      rootRef.setAttribute(
        "style",
        objToStyle(currentPagePopupConfig)
      );
    });
  }
  function showButton() {
    re(null, mountPointRef), mountPointRef.style.display = "none", btnRef.style.display = "block", timer = setTimeout(() => {
      setBtnTransform(!0);
    }, 2e3);
  }
  function renderPopup(shadow) {
    let mountPoint = shadow.querySelector("#mount"), handleOnClose = () => {
      showButton();
    }, handleClickOverLay = (e3) => {
      e3 && e3.target && e3.target.id === "immersive-translate-popup-overlay" && handleOnClose();
    };
    (async () => {
      let config = await getConfig2();
      re(
        /* @__PURE__ */ p6(
          TranslateProvider,
          {
            lang: config.interfaceLanguage,
            fallbackLang: "zh-CN",
            translations: locales_default,
            children: /* @__PURE__ */ p6(
              "div",
              {
                onClick: handleClickOverLay,
                id: "immersive-translate-popup-overlay",
                class: "immersive-translate-popup-overlay",
                children: /* @__PURE__ */ p6(
                  "div",
                  {
                    class: "immersive-translate-popup-wrapper",
                    style: calculateMountPointPosition(),
                    children: /* @__PURE__ */ p6(PopupApp, { onClose: handleOnClose })
                  }
                )
              }
            )
          }
        ),
        mountPoint
      );
    })().then(() => {
      btnRef.style.display = "none", mountPointRef.style.display = "block";
    });
  }
  function calculateMountPointPosition() {
    let screenSize = getScreenSize(), windowHeight = screenSize.height, { position, top, left } = currentPagePopupConfig, style = {
      position: "fixed"
    }, popupHeight = 300, popupWidth = 300, offset = 100;
    return position === "right" || position === "left" ? (style.top = top - offset, style.top + popupHeight >= windowHeight ? (style.bottom = 30, delete style.top) : style.top <= 10 && (style.top = 10), position === "right" ? style.right = 0 : position === "left" && (style.left = 0)) : (position === "top" || position === "bottom") && (style.left = left - offset, style.left + popupWidth >= screenSize.width ? (style.right = 0, delete style.left) : style.left <= 10 && (style.left = 0), position === "top" ? style.top = 0 : position === "bottom" && (style.bottom = 0)), style;
  }
  function getScreenSize() {
    return {
      width: Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      ),
      height: Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      )
    };
  }
  function onMouseDown(e3) {
    lastRootStyle = rootRef.getAttribute("style"), startX = e3.pageX, startY = e3.pageY, timer && clearTimeout(timer), positionChanged = !1, btnRef.style.opacity = "1", btnRef.style.transform = "none", lastBtnStyle = btnRef.getAttribute("style"), globalThis.addEventListener("mousemove", onMouseMove), globalThis.addEventListener("mouseup", onMouseUp), globalThis.addEventListener("touchmove", onTouchMove), globalThis.addEventListener("touchend", onTouchEnd), globalThis.addEventListener("touchcancel", onTouchEnd);
  }
  function onTouchStart(e3) {
    e3.preventDefault && e3.preventDefault(), onMouseDown(e3.changedTouches[0]);
  }
  function onTouchMove(e3) {
    onMouseMove(e3.changedTouches[0]);
  }
  function onTouchEnd(e3) {
    e3.preventDefault && e3.preventDefault(), onMouseUp(e3.changedTouches[0]);
  }
  function onMouseMove(e3) {
    e3.preventDefault && e3.preventDefault(), positionChanged = !0, rootRef.setAttribute(
      "style",
      `left:${e3.clientX}px;top:${e3.clientY}px;transform:scale(1.6);`
    );
  }
  function onMouseUp(e3) {
    e3.preventDefault && e3.preventDefault(), removeListeners(), timer && clearTimeout(timer), startX = startX || 0, startY = startY || 0;
    let diffX = Math.abs(e3.pageX - startX), diffY = Math.abs(e3.pageY - startY);
    diffX < delta && diffY < delta ? (rootRef.setAttribute("style", lastRootStyle), btnRef.setAttribute("style", lastBtnStyle), renderPopup(shadowRef)) : positionChanged ? snapToSide(e3) : renderPopup(shadowRef), positionChanged = !1;
  }
  function snapToSide(e3) {
    let screenSize = getScreenSize(), left = e3.clientX, top = e3.clientY, toTop = top, toBottom = screenSize.height - top, toLeft = left, toRight = screenSize.width - left;
    toTop < toBottom && toTop < toLeft && toTop < toRight ? currentPagePopupConfig = {
      position: "top",
      left,
      top: 0
    } : toBottom < toTop && toBottom < toLeft && toBottom < toRight ? currentPagePopupConfig = {
      position: "bottom",
      bottom: 0,
      left: e3.clientX
    } : toLeft < toTop && toLeft < toBottom && toLeft < toRight ? currentPagePopupConfig = {
      position: "left",
      left: 0,
      top: e3.clientY
    } : toRight < toTop && toRight < toBottom && toRight < toLeft && (currentPagePopupConfig = {
      position: "right",
      right: 0,
      top: e3.clientY
    });
    let finalStyle = objToStyle(currentPagePopupConfig);
    rootRef.setAttribute(
      "style",
      finalStyle
    ), setLocalConfig2({
      ...localConfig,
      pagePopupConfig: currentPagePopupConfig
    }), timer = setTimeout(() => {
      setBtnTransform(!0);
    }, 2e3);
  }
  function setBtnTransform(transition = !1) {
    btnRef.style.opacity = "0.4";
    let transform = "";
    currentPagePopupConfig.position === "left" ? transform = "translateX(-40%)" : currentPagePopupConfig.position === "right" ? transform = "translateX(40%)" : currentPagePopupConfig.position === "top" ? transform = "translateY(-40%)" : currentPagePopupConfig.position === "bottom" && (transform = "translateY(40%)"), btnRef.style.transform = transform, transition && (btnRef.style.transition = "transform 0.2s ease-in-out, opacity 0.2s ease-in-out");
  }
  function removeListeners() {
    globalThis.removeEventListener("mousemove", onMouseMove), globalThis.removeEventListener("mouseup", onMouseUp), globalThis.removeEventListener("touchmove", onTouchMove), globalThis.removeEventListener("touchend", onTouchEnd), globalThis.removeEventListener("touchcancel", onTouchEnd);
  }
  function objToStyle(rawObj) {
    let obj = getValidStyleObj(rawObj);
    return Object.keys(obj).map((key) => typeof obj[key] == "number" ? `${key}:${obj[key]}px;` : "").join("");
  }
  function getValidStyleObj(positionConfig) {
    let { position, ...rest } = positionConfig, screenSize = getScreenSize(), styleObj = {};
    return position === "left" ? (styleObj.left = 0, rest.top > screenSize.height ? styleObj.top = screenSize.height - 100 : styleObj.top = rest.top) : position === "right" ? (styleObj.right = 0, rest.top > screenSize.height ? styleObj.top = screenSize.height - 100 : styleObj.top = rest.top) : position === "top" ? (styleObj.top = 0, rest.left > screenSize.width ? styleObj.left = screenSize.width - 100 : styleObj.left = rest.left) : position === "bottom" && (styleObj.bottom = 0, rest.left > screenSize.width ? styleObj.left = screenSize.width - 100 : styleObj.left = rest.left), styleObj;
  }

  // page_popup.tsx
  var isInit = !1;
  async function main() {
    let config = await getConfig2(), options2 = {
      url: globalThis.location.href,
      config
    }, ctx = await getContext(options2);
    config.debug && log_default.setLevel("debug"), globalThis.document.addEventListener(
      userscriptCommandEventName,
      // @ts-ignore: hard to type
      (_e3) => {
        isInit || (isInit = !0, initPopup().catch((e3) => {
          log_default.error("init popup error", e3);
        }));
      }
    ), ctx.isTranslateExcludeUrl ? log_default.debug("detect exclude url, do not inject anything.") : (isMobile().any || isMonkey()) && ctx.rule.isShowUserscriptPagePopup && (isInit || (isInit = !0, initPopup().catch((e3) => {
      log_default.error("init popup error", e3);
    })));
  }

  // userscript/inject_css.ts
  var addCSS = (css) => document.head.appendChild(document.createElement("style")).innerHTML = css;
  function injectCss() {
    let injectedCss = getEnv().IMMERSIVE_TRANSLATE_INJECTED_CSS;
    injectedCss && addCSS(injectedCss);
  }
  function injectCssWithSpecialCssString(css) {
    css && addCSS(css);
  }

  // manifest.json
  var manifest_default = {
    manifest_version: 3,
    name: "__MSG_brandName__",
    description: "__MSG_brandDescription__",
    version: "0.2.56",
    default_locale: "en",
    background: {
      service_worker: "background.js"
    },
    web_accessible_resources: ["styles/inject.css", "pdf/index.html"],
    content_scripts: [
      {
        matches: [
          "<all_urls>",
          "file:///*",
          "*://*/*"
        ],
        js: [
          "content_script.js"
        ],
        run_at: "document_end",
        all_frames: !0
      }
    ],
    commands: {
      toggleTranslatePage: {
        suggested_key: {
          default: "Alt+A"
        },
        description: "__MSG_toggleTranslatePage__"
      },
      toggleTranslateTheWholePage: {
        suggested_key: {
          default: "Alt+W"
        },
        description: "__MSG_toggleTranslateTheWholePage__"
      },
      toggleTranslateToThePageEndImmediately: {
        description: "__MSG_toggleTranslateToThePageEndImmediately__"
      },
      toggleTranslateTheMainPage: {
        description: "__MSG_toggleTranslateTheMainPage__"
      },
      toggleTranslationMask: {
        description: "__MSG_toggleTranslationMask__"
      }
    },
    options_page: "options.html",
    options_ui: {
      page: "options.html",
      open_in_tab: !0,
      browser_style: !1
    },
    permissions: [
      "storage",
      "activeTab",
      "contextMenus",
      "webRequest",
      "webRequestBlocking",
      "declarativeNetRequestWithHostAccess",
      "declarativeNetRequestFeedback",
      "declarativeNetRequest"
    ],
    host_permissions: [
      "<all_urls>"
    ],
    declarative_net_request: {
      rule_resources: [{
        id: "ruleset_1",
        enabled: !0,
        path: "rules/request_modifier_rule.json"
      }]
    },
    action: {
      default_popup: "popup.html",
      default_icon: {
        "32": "icons/32.png",
        "48": "icons/48.png",
        "64": "icons/64.png",
        "128": "icons/128.png",
        "256": "icons/256.png"
      }
    },
    browser_action: {
      default_icon: "icons/32.png",
      default_popup: "popup.html"
    },
    icons: {
      "32": "icons/32.png",
      "48": "icons/48.png",
      "64": "icons/64.png",
      "128": "icons/128.png",
      "256": "icons/256.png"
    },
    browser_specific_settings: {
      gecko: {
        id: "{5efceaa7-f3a2-4e59-a54b-85319448e305}",
        strict_min_version: "63.0"
      }
    },
    key: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7JPn78UfqI3xIIOPPLPS74UTzLfJL1gQM8hlk/deKWvFP/WqUBnPJPdhQeF45sFpI1OjO70nFqdATT4/RwYAiZK7G/E6m27MDVnhHjszfzReOuoAEn9J3RnE2xEx5pFhRFcelhnwTTLrrn90aaPcaMtNsgXtZA1Ggz/SnX9I4ZygqpJYjx3Ql2t6SyNK222oRQiKMT93Rrjgyc8RFA7FKXsWglG0TvseRjbmG5Jk5gDx+2/YTcWGqCDotQnWnkPj/dBO23UAX7IpyJK3FGYdkvWFih6OVClHIIWY8mfCjjwSGbXNQNesaa9F2hrzBZ5MRTj4m7yj76mGxuPHPIE8mwIDAQAB"
  };

  // dom/main.ts
  async function main2() {
    let config = await getConfig2(), ctx = await getContext({
      config,
      url: getRealUrl()
    });
    if (injectCss(), ctx.isTranslateExcludeUrl && isWebOptionsPage())
      log_default.debug("detect web options page"), setupWebOptionsPage();
    else {
      setupDomListeners(ctx), isMonkey() ? (setupCommandListeners(config), registerCommands(config)) : setupMessageListeners();
      let injectedCss = "";
      if ((ctx.rule.injectedCss || ctx.rule.additionalInjectedCss) && (ctx.rule.injectedCss && ctx.rule.injectedCss.length > 0 && (injectedCss += ctx.rule.injectedCss.join(`
`)), ctx.rule.additionalInjectedCss && ctx.rule.additionalInjectedCss.length > 0 && (injectedCss += `
` + ctx.rule.additionalInjectedCss.join(`
`))), log_default.v("injectedCss", injectedCss), injectedCss && injectCssWithSpecialCssString(injectedCss), config.debug ? log_default.setLevel("debug") : log_default.setLevel("info"), globalThis.top != globalThis.self || await main().catch((e3) => {
        log_default.error(`init popup page error: ${e3}`);
      }), !ctx.isTranslateExcludeUrl) {
        if (ctx.rule.isPdf) {
          let isFirstTextRendered = !1;
          globalThis.PDFViewerApplication && globalThis.PDFViewerApplication.initializedPromise.then(() => {
            let pdfViewer = globalThis.PDFViewerApplication;
            pdfViewer.eventBus.on("pagesdestroy", () => {
              restorePage();
            }), pdfViewer.eventBus.on("textlayerrendered", async () => {
              isFirstTextRendered || (isFirstTextRendered = !0, await initPage());
            }), pdfViewer.eventBus.on("fileinputchange", () => {
              isFirstTextRendered = !1;
            });
          });
        } else
          await initPage();
        checkCronAndRunOnce();
      }
    }
  }
  var debounceOpenOptionsPage = le(async () => {
    await openOptionsPage2();
  }, 50), debounceOpenAboutPage = le(async () => {
    await openAboutPage2();
  }, 50), debounceToggleTranslatePage = le((id) => {
    sendMessageToContent2({
      method: id
    });
  }, 50);
  function registerCommands(config) {
    if (isMonkey() && typeof GM < "u" && GM && GM.registerMenuCommand) {
      let commandsMap = manifest_default.commands, menus = [
        ...Object.keys(commandsMap).filter((item) => item === "toggleTranslatePage").map((command) => {
          let titlePlaceholder = commandsMap[command].description, title = titlePlaceholder;
          return titlePlaceholder.startsWith("__MSG_") && titlePlaceholder.endsWith("__") && (title = t4(
            `browser.${titlePlaceholder.slice(6, -2)}`,
            config.interfaceLanguage
          )), {
            id: command,
            title
          };
        }),
        {
          id: contextOpenOptionsMenuId,
          title: t4("browser.openOptionsPage", config.interfaceLanguage),
          key: "o"
        },
        {
          id: contextOpenAboutMenuId,
          title: t4("browser.openAboutPage", config.interfaceLanguage),
          key: "o"
        }
      ];
      for (let menu of menus)
        GM.registerMenuCommand(
          menu.title,
          () => {
            menu.id === contextOpenOptionsMenuId ? debounceOpenOptionsPage() : menu.id === contextOpenAboutMenuId ? debounceOpenAboutPage() : debounceToggleTranslatePage(menu.id);
          },
          menu.key
        );
    }
  }
  function sendMessageToContent2(request3) {
    asyncMessageHandler(request3, {
      // @ts-ignore: it's ok
      tab: {
        id: 1,
        url: "https://www.fake.com",
        active: !0
      }
    }).catch((e3) => {
      log_default.error("send content message request failed", request3, e3);
    });
    let event = new CustomEvent(userscriptCommandEventName, {
      detail: request3
    });
    globalThis.document.dispatchEvent(event);
  }

  // dom/ready_state.js
  var options = {
    capture: !0,
    once: !0,
    passive: !0
  }, isReady = () => document.readyState === "interactive" || document.readyState === "complete", isCurrentState = (state) => document.readyState === state, resolveState = (state, fn) => isCurrentState(state) || isReady() ? (fn(state), !0) : !1, loading = () => new Promise((resolve) => {
    resolveState("loading", resolve) || document.addEventListener(
      "readystatechange",
      () => {
        document.readyState === "loading" && resolve("loading");
      },
      options
    );
  }), interactive = () => new Promise((resolve) => {
    resolveState("interactive", resolve) || document.addEventListener(
      "readystatechange",
      () => {
        document.readyState === "interactive" && resolve("interactive");
      },
      options
    );
  }), complete = () => new Promise((resolve) => {
    resolveState("complete", resolve) || document.addEventListener(
      "readystatechange",
      () => {
        document.readyState === "complete" && resolve("complete");
      },
      options
    );
  }), domready = () => new Promise((resolve) => {
    resolveState("domready", resolve) || document.addEventListener(
      "DOMContentLoaded",
      () => {
        resolve("domready");
      },
      options
    );
  }), load = () => new Promise((resolve) => {
    resolveState("load", resolve) || window.addEventListener(
      "load",
      () => {
        resolve("load");
      },
      options
    );
  }), readyState = {};
  Object.defineProperties(readyState, {
    state: {
      get: function() {
        return document.readyState;
      }
    },
    loading: {
      get: function() {
        return loading();
      }
    },
    interactive: {
      get: function() {
        return interactive();
      }
    },
    complete: {
      get: function() {
        return complete();
      }
    },
    window: {
      get: function() {
        return load();
      }
    },
    load: {
      get: function() {
        return load();
      }
    },
    domready: {
      get: function() {
        return domready();
      }
    },
    dom: {
      get: function() {
        return domready();
      }
    },
    ready: {
      get: function() {
        return isReady();
      }
    }
  });
  var ready_state_default = readyState;

  // utils/wait_for.ts
  var ERRORS = {
    NOT_FUNCTION: "Your executor is not a function. functions and promises are valid.",
    FAILED_TO_WAIT: "Failed to wait"
  };
  function promisify(fn) {
    return async () => await fn();
  }
  function validateExecution(executeFn) {
    if (typeof executeFn != "function")
      throw new Error(ERRORS.NOT_FUNCTION);
  }
  var PollUntil = class {
    constructor({
      interval = 100,
      timeout = 1e3,
      stopOnFailure = !1,
      verbose = !1,
      backoffFactor = 1,
      backoffMaxInterval,
      message = ""
    } = {}) {
      this._interval = interval, this._timeout = timeout, this._stopOnFailure = stopOnFailure, this._isWaiting = !1, this._isResolved = !1, this._verbose = verbose, this._userMessage = message, this.originalStacktraceError = new Error(), this._Console = console, this._backoffFactor = backoffFactor, this._backoffMaxInterval = backoffMaxInterval || timeout, this.start = +Date.now();
    }
    tryEvery(interval) {
      return this._interval = interval, this;
    }
    stopAfter(timeout) {
      return this._timeout = timeout, this;
    }
    execute(executeFn) {
      return this._applyPromiseHandlers(), validateExecution(executeFn), this._executeFn = promisify(executeFn), this.start = Date.now(), this._isWaiting = !0, this._log("starting to execute"), this._runFunction(), this.promise;
    }
    getPromise() {
      return this.promise;
    }
    isResolved() {
      return this._isResolved;
    }
    isWaiting() {
      return this._isWaiting;
    }
    stopOnFailure(stop) {
      return this._stopOnFailure = stop, this;
    }
    _applyPromiseHandlers() {
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve, this.reject = reject;
      });
    }
    _timeFromStart() {
      return Date.now() - this.start;
    }
    _shouldStopTrying() {
      return this._timeFromStart() > this._timeout;
    }
    _executeAgain() {
      this._log("executing again");
      let currentInterval = this._interval, nextInterval = currentInterval * this._backoffFactor;
      this._interval = nextInterval > this._backoffMaxInterval ? this._backoffMaxInterval : nextInterval, setTimeout(this._runFunction.bind(this), currentInterval);
    }
    _failedToWait() {
      let waitErrorText = `${ERRORS.FAILED_TO_WAIT} after ${this._timeFromStart()}ms`;
      if (this._userMessage && (waitErrorText = `${waitErrorText}: ${this._userMessage}`), this._lastError) {
        this._lastError.message = `${waitErrorText}
${this._lastError.message}`;
        let originalStack = this.originalStacktraceError.stack;
        originalStack && (this._lastError.stack += originalStack.substring(
          originalStack.indexOf(`
`) + 1
        ));
      } else
        this._lastError = this.originalStacktraceError, this._lastError.message = waitErrorText;
      return this._log(this._lastError), this._lastError;
    }
    _runFunction() {
      if (this._shouldStopTrying()) {
        this._isWaiting = !1, this.reject?.(this._failedToWait());
        return;
      }
      this._executeFn().then((result) => {
        if (result === !1) {
          this._log(`then execute again with result: ${result}`), this._executeAgain();
          return;
        }
        this.resolve?.(result), this._isWaiting = !1, this._isResolved = !0, this._log(`then done waiting with result: ${result}`);
      }).catch((err) => this._stopOnFailure ? (this._log(`stopped on failure with err: ${err}`), this.reject?.(err)) : (this._lastError = err, this._log(`catch with err: ${err}`), this._executeAgain()));
    }
    _log(message) {
      this._verbose && this._Console && this._Console.log && this._Console.log(message);
    }
  }, waitFor = (waitForFunction, options2) => new PollUntil(options2).execute(waitForFunction);

  // dom/wait_for_dom.ts
  async function waitForDomElementReady() {
    try {
      return await waitFor(() => {
        let mainText = getMainText(document.body);
        if (mainText && mainText.length >= 10)
          return !0;
        throw new Error("there is no main text");
      }, { timeout: 1e4 }), !0;
    } catch (e3) {
      throw e3;
    }
  }

  // content_main.ts
  ready_state_default.domready.then(() => {
    waitForDomElementReady().then(() => {
      main2().catch((e3) => {
        e3 && log_default.error(
          "translate page error",
          e3.name,
          e3.message,
          e3.details || "",
          e3
        );
      });
    }).catch((e3) => {
      log_default.debug("can not detect a valid body: ", e3);
    });
  }).catch((e3) => {
    e3 && log_default.error(
      "translate dom ready detect error",
      e3
    );
  });
})();
