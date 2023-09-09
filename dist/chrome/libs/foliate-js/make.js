(()=>{var Up=Object.defineProperty;var $p=(t,e)=>{for(var n in e)Up(t,n,{get:e[n],enumerable:!0})};var ne={BUILD_TIME:"2023-09-09T14:10:49.831Z",VERSION:"0.9.2",PROD:"1",REDIRECT_URL:"https://dash.immersivetranslate.com/auth-done/",PROD_API:"0",BETA:"0",IMMERSIVE_TRANSLATE_INJECTED_CSS:`:root {
  --immersive-translate-theme-underline-borderColor: #72ece9;
  --immersive-translate-theme-nativeUnderline-borderColor: #72ece9;
  --immersive-translate-theme-nativeDashed-borderColor: #72ece9;
  --immersive-translate-theme-nativeDotted-borderColor: #72ece9;
  --immersive-translate-theme-highlight-backgroundColor: #ffff00;
  --immersive-translate-theme-dashed-borderColor: #59c1bd;
  --immersive-translate-theme-blockquote-borderColor: #cc3355;
  --immersive-translate-theme-thinDashed-borderColor: #ff374f;
  --immersive-translate-theme-dashedBorder-borderColor: #94a3b8;
  --immersive-translate-theme-dashedBorder-borderRadius: 0;
  --immersive-translate-theme-solidBorder-borderColor: #94a3b8;
  --immersive-translate-theme-solidBorder-borderRadius: 0;
  --immersive-translate-theme-dotted-borderColor: #94a3b8;
  --immersive-translate-theme-wavy-borderColor: #72ece9;
  --immersive-translate-theme-dividingLine-borderColor: #94a3b8;
  --immersive-translate-theme-grey-textColor: #2f4f4f;
  --immersive-translate-theme-marker-backgroundColor: #fbda41;
  --immersive-translate-theme-marker-backgroundColor-rgb: 251, 218, 65;
  --immersive-translate-theme-marker2-backgroundColor: #ffff00;
  --immersive-translate-theme-opacity-opacity: 10;
}

.immersive-translate-target-translation-pre-whitespace {
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

.immersive-translate-pdf-target-container .immersive-translate-target-wrapper {
  color: rgb(0, 0, 0);
  white-space: normal;
  position: absolute;
}

.immersive-translate-pdf-target-container .immersive-translate-target-wrapper font {
  color: inherit;
  white-space: inherit;
  position: unset;
}

.immersive-translate-state-dual>br {
  display: none;
}

.immersive-translate-target-translation-block-wrapper {
  margin: 8px 0 !important;
  display: inline-block;
}

.immersive-translate-target-translation-pdf-block-wrapper {
  margin: 0 !important;
  display: block;
}

.immersive-translate-target-translation-theme-grey-inner {
  color: var(--immersive-translate-theme-grey-textColor);
}

.immersive-translate-target-translation-inline-wrapper {}

.immersive-translate-target-translation-theme-underline-inner {
  border-bottom: 1px solid var(--immersive-translate-theme-underline-borderColor) !important;
}

.immersive-translate-target-translation-theme-nativeUnderline-inner {
  text-decoration: underline var(--immersive-translate-theme-nativeUnderline-borderColor) !important;
}

.immersive-translate-target-translation-block-wrapper-theme-dashedBorder {
  border: 1px dashed var(--immersive-translate-theme-dashedBorder-borderColor) !important;
  border-radius: var(--immersive-translate-theme-dashedBorder-borderRadius) !important;
  padding: 6px;
  margin-top: 2px;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper-theme-dashedBorder {
  border: 1px dashed var(--immersive-translate-theme-dashedBorder-borderColor) !important;
  border-radius: var(--immersive-translate-theme-dashedBorder-borderRadius) !important;
  padding: 2px;
}

.immersive-translate-target-translation-block-wrapper-theme-solidBorder {
  border: 1px solid var(--immersive-translate-theme-solidBorder-borderColor) !important;
  border-radius: var(--immersive-translate-theme-solidBorder-borderRadius) !important;
  padding: 6px;
  margin-top: 2px;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper-theme-solidBorder {
  border: 1px solid var(--immersive-translate-theme-solidBorder-borderColor) !important;
  border-radius: var(--immersive-translate-theme-solidBorder-borderRadius) !important;
  padding: 2px;
}

.immersive-translate-target-translation-theme-nativeDashed-inner {
  text-decoration: dashed underline var(--immersive-translate-theme-nativeDashed-borderColor) !important;
}

.immersive-translate-target-translation-theme-thinDashed-inner {
  border-bottom: 1px dashed var(--immersive-translate-theme-thinDashed-borderColor) !important;
}

.immersive-translate-target-translation-theme-dotted-inner {
  background-repeat: repeat-x;
  background-image: linear-gradient(to right,
      var(--immersive-translate-theme-dotted-borderColor) 30%,
      rgba(255, 255, 255, 0) 0%);
  background-position: bottom;
  background-size: 5px 1px;
  background-repeat: repeat-x;
  padding-bottom: 3px;
}

.immersive-translate-target-translation-theme-nativeDotted-inner {
  text-decoration: dotted underline var(--immersive-translate-theme-nativeDotted-borderColor) !important;
}

.immersive-translate-target-translation-theme-wavy-inner {
  text-decoration: wavy underline var(--immersive-translate-theme-wavy-borderColor) !important;
}

.immersive-translate-target-translation-theme-dashed-inner {
  background-repeat: repeat-x !important;
  background: linear-gradient(to right,
      var(--immersive-translate-theme-dashed-borderColor) 0%,
      var(--immersive-translate-theme-dashed-borderColor) 50%,
      transparent 50%,
      transparent 100%) repeat-x left bottom;
  background-size: 8px 2px;
  padding-bottom: 2px;
}

.immersive-translate-target-translation-block-wrapper-theme-dividingLine::before {
  content: "";
  display: block;
  max-width: 80px;
  width: 10%;
  border-top: 1px dashed var(--immersive-translate-theme-dividingLine-borderColor);
  padding-top: 8px;
}

.immersive-translate-target-translation-inline-wrapper-theme-dividingLine::before {
  content: "";
  border-left: 1px dashed var(--immersive-translate-theme-dividingLine-borderColor);
  max-height: 16px;
  height: 16px;
  padding-left: 8px;
}

.immersive-translate-target-translation-theme-highlight-inner {
  background: var(--immersive-translate-theme-highlight-backgroundColor);
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.immersive-translate-target-translation-block-wrapper-theme-marker {
  line-height: 1.5em;
}

.immersive-translate-target-translation-theme-marker2-inner {
  font-weight: bold;
  text-shadow: 10px 0px 3px var(--immersive-translate-theme-marker2-backgroundColor),
    16px 3px 9px var(--immersive-translate-theme-marker2-backgroundColor),
    2px 0px 6px var(--immersive-translate-theme-marker2-backgroundColor),
    -12px 0px 12px var(--immersive-translate-theme-marker2-backgroundColor) !important;
}

.immersive-translate-target-translation-theme-marker-inner {
  /* TODO: add more texture */
  background: linear-gradient(to right,
      rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.1),
      rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.9) 3%,
      rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.9) 35%,
      rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.9) 70%,
      rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.8) 95%,
      rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.3));
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.immersive-translate-target-translation-theme-weakening {
  opacity: 0.618 !important;
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
  border-left: 4px solid var(--immersive-translate-theme-blockquote-borderColor) !important;
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

[data-immersive-translate-root-translation-theme="none"] .immersive-translate-target-translation-theme-mask-inner {
  filter: none !important;
}

[data-immersive-translate-root-translation-theme="mask"] .immersive-translate-target-inner {
  filter: blur(5px) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

.immersive-translate-target-translation-theme-mask-inner:hover {
  filter: none !important;
}

[data-immersive-translate-root-translation-theme="mask"] .immersive-translate-target-inner:hover {
  filter: none !important;
}

/* opacity theme start */

.immersive-translate-target-translation-theme-opacity-inner {
  filter: opacity(calc(var(--immersive-translate-theme-opacity-opacity) * 1%)) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

[data-immersive-translate-root-translation-theme="none"] .immersive-translate-target-translation-theme-opacity-inner {
  filter: none !important;
}

[data-immersive-translate-root-translation-theme="opacity"] .immersive-translate-target-inner {
  filter: opacity(calc(var(--immersive-translate-theme-opacity-opacity) * 1%)) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

.immersive-translate-target-translation-theme-opacity-inner:hover {
  filter: none !important;
}

[data-immersive-translate-root-translation-theme="opacity"] .immersive-translate-target-inner:hover {
  filter: none !important;
}

/* opacity theme end */

/* vertical css , please remain it in the last one. */
.immersive-translate-target-translation-vertical-block-wrapper {
  margin: 0px 8px !important;
}

.immersive-translate-text {
  font-size: 15px !important;
}

.immersive-translate-error-toast {
  position: fixed;
  top: 5%;
  z-index: 99999999;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 300px;
  padding: 16px;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media all and (min-width: 750px) {
  .immersive-translate-error-toast {
    max-width: 400px;
  }
}

.immersive-translate-error {}

.immersive-translate-clickable-button {
  cursor: pointer;
}

.immersive-translate-help-button {
  cursor: help;
}

.immersive-translate-loading-spinner {
  vertical-align: middle !important;
  width: 10px !important;
  height: 10px !important;
  display: inline-block !important;
  margin: 0 4px !important;
  border: 2px rgba(221, 244, 255, 0.6) solid !important;
  border-top: 2px rgba(0, 0, 0, 0.375) solid !important;
  border-left: 2px rgba(0, 0, 0, 0.375) solid !important;
  border-radius: 50% !important;
  padding: 0 !important;
  -webkit-animation: immersive-translate-loading-animation 0.6s infinite linear !important;
  animation: immersive-translate-loading-animation 0.6s infinite linear !important;
}

.immersive-translate-loading-text:before {
  content: "...";
}

.immersive-translate-loading-none {}

/* dark mode for loading */

@media only screen and (prefers-color-scheme: dark) {
  .immersive-translate-loading {
    border: 2px rgba(255, 255, 255, 0.25) solid !important;
    border-top: 2px rgba(255, 255, 255, 1) solid !important;
  }
}

.immersive-translate-error-wrapper {
  position: relative;
  display: inline-flex;
  padding: 6px;
  margin: 0 12px;
}

.immersive-translate-tooltip {
  position: relative;
  display: inline-flex;
  /* little indicater to indicate it's hoverable */
}

.immersive-translate-tooltip:hover .immersive-translate-tooltip-content {
  display: block;
}

.immersive-translate-tooltip:hover+.immersive-translate-tooltip-content {
  display: block;
}

.immersive-translate-tooltip-content-table {
  left: unset !important;
  bottom: unset !important;
  transform: translate(-10%, 50%) !important;
}

.immersive-translate-tooltip-content {
  /* here's the magic */
  position: absolute;
  z-index: 100000000000;

  left: 50%;
  bottom: 0;
  transform: translate(-50%, 110%);
  line-height: 1;
  /* and add a small left margin */

  /* basic styles */
  width: max-content;
  max-width: 250px;
  word-wrap: break-word;
  white-space: pre-line;
  padding: 10px;
  border-radius: 10px;
  background: #000C;
  color: #fff;
  text-align: center;
  font-size: 14px;
  display: none;
  /* hide by default */
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
}`,IMMERSIVE_TRANSLATE_INPUT_INJECTED_CSS:`.immersive-translate-input {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2147483647;
  display: flex;
  justify-content: center;
  align-items: center;
}

.immersive-translate-input-loading {
  --loading-color: #f78fb6;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: block;
  margin: 12px auto;
  position: relative;
  color: white;
  left: -100px;
  box-sizing: border-box;
  animation: immersiveTranslateShadowRolling 1.5s linear infinite;
}

@keyframes immersiveTranslateShadowRolling {
  0% {
    box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }

  12% {
    box-shadow: 100px 0 var(--loading-color), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }

  25% {
    box-shadow: 110px 0 var(--loading-color), 100px 0 var(--loading-color), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }

  36% {
    box-shadow: 120px 0 var(--loading-color), 110px 0 var(--loading-color), 100px 0 var(--loading-color), 0px 0 rgba(255, 255, 255, 0);
  }

  50% {
    box-shadow: 130px 0 var(--loading-color), 120px 0 var(--loading-color), 110px 0 var(--loading-color), 100px 0 var(--loading-color);
  }

  62% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 var(--loading-color), 120px 0 var(--loading-color), 110px 0 var(--loading-color);
  }

  75% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 var(--loading-color), 120px 0 var(--loading-color);
  }

  87% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 var(--loading-color);
  }

  100% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);
  }
}


.immersive-translate-search-recomend {
  border: 1px solid #dadce0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  position: relative;
  font-size: 16px;
}
.immersive-translate-search-enhancement-en-title {
  color: #4d5156;
}
/* dark */
@media (prefers-color-scheme: dark) {
  .immersive-translate-search-recomend {
    border: 1px solid #3c4043;
  }
  .immersive-translate-close-action svg {
    fill: #bdc1c6;
  }

.immersive-translate-search-enhancement-en-title {
  color: #bdc1c6;
}
}


.immersive-translate-search-settings {
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
}

.immersive-translate-search-recomend::before {
  /* content: " "; */
  /* width: 20px; */
  /* height: 20px; */
  /* top: 16px; */
  /* position: absolute; */
  /* background: center / contain url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAxlBMVEUAAADpTInqTIjpSofnSIfqS4nfS4XqS4nqTIjsTYnrTInqTIroS4jvQIDqTIn////+/v7rSYjpTIn8/v7uaZzrTIr9/f3wfansWJL88/b85e73qc39+/v3xNnylrvrVI/98fb62Obva5/8+fr76vH4y9zpSIj74e353Oj1ocTzm77xhK/veKbtYpjsXJTqU47oTInxjrXyh7L99fj40eH2ttH1udD3sc31ssz1rMnykLXucqPtbqD85e/1xdn2u9DzqcXrUY6FaJb8AAAADnRSTlMA34BgIM8Q37/fz7+/EGOHcVQAAAGhSURBVDjLhZPncuowEEZFTW7bXVU7xsYYTO/p7bb3f6lICIOYJOT4h7/VnFmvrBFjrF3/CR/SajBHswafctG0Qg3O8O0Xa8BZ6uw7eLjqr30SofCDVSkemMinfL1ecy20r5ygR5zz3ArcAqJExPTPKhDENEmS30Q9+yo4lEQkqVTiIEAHCT10xWERRdH0Bq0aCOPZNDV3s0xaYce1lHEoDHU8wEh3qRJypNcTAeKUIjgKMeGLDoRCLVLTVf+Ownj8Kk6H9HM6QXPgYjQSB0F00EJEu10ILQrs/QeP77BSSr0MzLOyuJJQbnUoOOIUI/A8EeJk9E4YUHUWiRyTVKGgQUB8/3e/NpdGlfI+FMQyWsCBWyz4A/ZyHXyiiz0Ne5aGZssoxRmcChw8/EFKQ5JwwkUo3FRT5yXS7q+Y/rHDZmFktzpGMvO+5QofA4FPpEmGw+EWRCFvnaof7Zhe8NuYSLR0xErKLThUSs8gnODh87ssy6438yzbLzxl012HS19vfCf3CNhnbWOL1eEsDda+gDPUvri8tSZzNFrwIZf1NmNvqC1I/t8j7nYAAAAASUVORK5CYII='); */
}

.immersive-translate-search-title {}

.immersive-translate-search-title-wrapper {}

.immersive-translate-search-time {
  font-size: 12px;
  margin: 4px 0 24px;
  color: #70757a;
}

.immersive-translate-expand-items {
  display: none;
}

.immersive-translate-search-more {
  margin-top: 16px;
  font-size: 14px;
}

.immersive-translate-modal {
  display: none;
  position: fixed;
  z-index: 1000000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.immersive-translate-modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}

.immersive-translate-modal-title {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 20px;
  color: hsl(205, 20%, 32%);
}

.immersive-translate-modal-body {
  color: hsl(205, 20%, 32%)
}

.immersive-translate-close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.immersive-translate-close:hover,
.immersive-translate-close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.immersive-translate-modal-footer {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-top: 20px;
}

.immersive-translate-btn {
  color: #fff;
  background-color: #ea4c89;
  border: none;
  font-size: 14px;
  margin: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.immersive-translate-cancel-btn {
  /* gray color */
  background-color: rgb(89, 107, 120);
}

.immersive-translate-btn:hover {
  background-color: #f082ac;
}

.immersive-translate-cancel-btn:hover {
  background-color: hsl(205, 20%, 32%);
}


.immersive-translate-btn svg {
  margin-right: 5px;
}

.immersive-translate-link {
  cursor: pointer;
  user-select: none;
  -webkit-user-drag: none;
  text-decoration: none;
  color: #007bff;
  -webkit-tap-highlight-color: rgba(0, 0, 0, .1);
}

.immersive-translate-modal input[type="radio"] {
  margin: 0 6px 16px;
  cursor: pointer;
}

.immersive-translate-modal label {
  cursor: pointer;
}

.immersive-translate-close-action {
  position: absolute;
  top: 2px;
  right: 0px;
  cursor: pointer;
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
`,IMMERSIVE_TRANSLATE_COMMON_CSS:`#mount#mount {
  /* --primary: rgb(227, 59, 126); */
  --primary: #ea4c89;
  --primary-hover: #f082ac;
  --icon-xia: url("data:image/svg+xml,%3Csvg%20width%3D%2222%22%20height%3D%2214%22%20viewBox%3D%220%200%2022%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M9.4392%2013.1554L1.18789%203.96259C0.85064%203.5869%200.664086%203.09986%200.664062%202.59501C0.664062%201.46382%201.58164%200.546875%202.71353%200.546875H19.2161C19.7212%200.546847%2020.2085%200.733262%2020.5846%201.07037C21.4272%201.82567%2021.4976%203.12055%2020.7418%203.96256L12.4905%2013.1554C12.441%2013.2106%2012.3885%2013.263%2012.3333%2013.3124C11.4907%2014.0678%2010.195%2013.9974%209.4392%2013.1554Z%22%20fill%3D%22%23999999%22%2F%3E%3C%2Fsvg%3E");

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
  margin-bottom: 4px;
  max-width: 128px;
  overflow: hidden;
  color: var(--primary);
  font-size: 14px;
  border: none;
  padding: 0;
  padding-right: 20px;
  padding-left: 8px;
  text-overflow: ellipsis;
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
  font-size: 16px;
  --font-size: 16px;
}

body {
  padding: 0;
  margin: 0 auto;
  min-width: 268px;
  border-radius: 10px;
}
.popup-container {
  color: #666
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
  min-width: 268px;
}
.main-button {
  font-size: 14px;
  vertical-align: middle;
  border-radius: 8px;
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
.w-full {
  width: 100%;
}

.flex {
  display: flex;
}
.flex-wrap {
  flex-wrap: wrap;
}
.flex-end {
  justify-content: flex-end;
}
.flex-grow {
  flex-grow: 1;
}
.justify-between {
  justify-content: space-between;
}
.mb-2 {
  margin-bottom: 8px;
}
.mb-4 {
  margin-bottom: 16px;
}
.mb-3 {
  margin-bottom: 12px;
}
.inline-block {
  display: inline-block;
}

.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}

.py-2-5 {
  padding-top: 6px;
  padding-bottom: 6px;
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
.ml-1 {
  margin-left: 4px;
}
.mr-1 {
  margin-right: 4px;
}
.mr-3 {
  margin-right: 16px;
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
.px-3{
  padding-left: 12px;
  padding-right: 12px;
}
.pt-3{
  padding-top: 12px;
}
.px-6{
  padding-left: 18px;
  padding-right: 18px;
}
.pt-6{
  padding-top: 20px;
}
.py-3 {
  padding-top: 12px;
  padding-bottom: 12px;
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
.max-content {
  width: max-content;
}
.justify-center {
  justify-content: center;
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


select.min-select {
  --form-element-spacing-horizontal: 0;
  margin-bottom: 0px;
  max-width: unset;
  flex:1;
  overflow: hidden;
  color: var(--primary);
  font-size: 14px;
  border: none;
  border-radius: 8px;
  padding: 6px 24px 6px 16px;
  background-color: #F5F7F9;
  background-position: center right 12px;
  background-size: 8px auto;
  background-image: var(--icon-xia);
  text-overflow: ellipsis;
  color: var(--color);

}
.text-overflow-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
}
.max-w-20 {
  max-width: 180px;
  white-space: nowrap;
}
@media (prefers-color-scheme: dark) {
  select.min-select {
    background-color: #141e26;
  }
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
.popup-footer  {
  background-color: #F5F7F9;
}



.clickable {
  cursor: pointer;
}

.close {
    cursor: pointer;
    width: 16px;
    height: 16px;
    background-image: var(--icon-close);
    background-position: center;
    background-size: auto 1rem;
    background-repeat: no-repeat;
    opacity: 0.5;
    transition: opacity var(--transition);
}

.padding-two-column {
  padding-left: 40px;
  padding-right: 40px;
}

.muted {
  color: #999;
}
.text-label {
  color: #666;
}




select.text-label {
  color: #666;
}
.display-none {
  display: none;
}


/* dark use #18232c */

@media (prefers-color-scheme: dark) {
  .popup-footer  {
    background-color: #141e26;
  }

  .text-label{
    color: #9ca3af;
  }
select.text-label {

    color: #9ca3af;
}
}
`,IMMERSIVE_TRANSLATE_PAGE_POPUP_CSS:`html {
  font-size: 17px;
}
.immersive-translate-popup-container {
  position: fixed;
  padding: 0;
  z-index: 2147483647;
  right: 0;
  top: 335px;
  width: 36px;
}
.immersive-translate-popup-btn {
  display: inline-block;
  background-color: #ea4c89;
  font-size: 18px;
  opacity: 0.5;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transition: -webkit-transform ease-out 250ms;
  transition: -webkit-transform ease-out 250ms;
  transition: transform ease-out 250ms;
  transition: transform ease-out 250ms, -webkit-transform ease-out 250ms;
  border: none;
  padding: 0;
}
.immersive-translate-popup-btn > svg {
}
#mount#mount {
  position: absolute;
  display: none;
  min-width: 250px;
  height: auto;
  --font-size: 17px;
  font-size: 17px;
}
`,IMMERSIVE_TRANSLATE_POPUP_HTML:`<div
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
`,PDF_VIEWER_URL:"https://app.immersivetranslate.com/pdf/",MOCK:"0",DEBUG:"0",INSTALL_FROM:"dev"};var jp=(t,e)=>t.map((n,r,i)=>e(n,r,i)?r:null).filter(n=>n!=null),Cs=(t,e)=>[-1,...e,t.length].reduce(({xs:n,a:r},i)=>({xs:n?.concat([t.slice(r+1,i)])??[],a:i}),{}).xs,Wp=(t,e)=>t.slice(0,-1).concat([t[t.length-1].concat(e[0])]).concat(e.slice(1)),ra=/\d/,tr=/^epubcfi\((.*)\)$/,As=t=>t.replace(/[\^[\](),;=]/g,"^$&"),qp=t=>tr.test(t)?t:`epubcfi(${t})`,Kp=t=>t.match(tr)?.[1]??t,Vp=t=>(...e)=>`epubcfi(${t(...e.map(n=>n.match(tr)?.[1]??n))})`,Ls=Vp((...t)=>t.join("!")),Gp=t=>{let e=[],n,r,i="",a=s=>(e.push(s),n=null,i=""),o=s=>(i+=s,r=!1);for(let s of Array.from(t.trim()).concat("")){if(s==="^"&&!r){r=!0;continue}if(n==="!")a(["!"]);else if(n===",")a([","]);else if(n==="/"||n===":")if(ra.test(s)){o(s);continue}else a([n,parseInt(i)]);else if(n==="~")if(ra.test(s)||s==="."){o(s);continue}else a(["~",parseFloat(i)]);else if(n==="@"){if(s===":"){a(["@",parseFloat(i)]),n="@";continue}if(ra.test(s)||s==="."){o(s);continue}else a(["@",parseFloat(i)])}else if(n==="["){s===";"&&!r?(a(["[",i]),n=";"):s===","&&!r?(a(["[",i]),n="["):s==="]"&&!r?a(["[",i]):o(s);continue}else if(n?.startsWith(";")){s==="="&&!r?(n=`;${i}`,i=""):s===";"&&!r?(a([n,i]),n=";"):s==="]"&&!r?a([n,i]):o(s);continue}(s==="/"||s===":"||s==="~"||s==="@"||s==="["||s==="!"||s===",")&&(n=s)}return e},Rs=(t,e)=>jp(t,([n])=>n===e),Xp=t=>{let e=[],n;for(let[r,i]of t){if(r==="/")e.push({index:i});else{let a=e[e.length-1];if(r===":")a.offset=i;else if(r==="~")a.temporal=i;else if(r==="@")a.spatial=(a.spatial??[]).concat(i);else if(r===";s")a.side=i;else if(r==="[")if(n==="/"&&i)a.id=i;else{a.text=(a.text??[]).concat(i);continue}}n=r}return e},Es=t=>Cs(t,Rs(t,"!")).map(Xp),Zt=t=>{let e=Gp(Kp(t)),n=Rs(e,",");if(!n.length)return Es(e);let[r,i,a]=Cs(e,n).map(Es);return{parent:r,start:i,end:a}},Yp=({index:t,id:e,offset:n,temporal:r,spatial:i,text:a,side:o})=>{let s=o?`;s=${o}`:"";return`/${t}`+(e?`[${As(e)}${s}]`:"")+(n!=null&&t%2?`:${n}`:"")+(r?`~${r}`:"")+(i?`@${i.join(":")}`:"")+(a||!e&&o?"["+(a?.map(As)?.join(",")??"")+s+"]":"")},Ds=t=>t.parent?[t.parent,t.start,t.end].map(Ds).join(","):t.map(e=>e.map(Yp).join("")).join("!"),Nr=t=>qp(Ds(t)),Ut=(t,e)=>typeof t=="string"?Nr(Ut(Zt(t),e)):t.parent?Wp(t.parent,t[e?"end":"start"]):t,Zp=(t,e)=>{typeof t=="string"&&(t=Zt(t)),typeof e=="string"&&(e=Zt(e)),t=Ut(t),e=Ut(e,!0);let n=t[t.length-1],r=e[e.length-1],i=[],a=[],o=[],s=!0,l=Math.max(n.length,r.length);for(let c=0;c<l;c++){let d=n[c],p=r[c];s&&=d?.index===p?.index&&!d?.offset&&!p?.offset,s?i.push(d):(d&&a.push(d),p&&o.push(p))}let u=t.slice(0,-1).concat([i]);return Nr({parent:u,start:[a],end:[o]})},er=(t,e)=>{if(typeof t=="string"&&(t=Zt(t)),typeof e=="string"&&(e=Zt(e)),t.start||e.start)return er(Ut(t),Ut(e))||er(Ut(t,!0),Ut(e,!0));for(let n=0;n<Math.max(t.length,e.length);n++){let r=t[n],i=e[n],a=Math.max(r.length,i.length)-1;for(let o=0;o<=a;o++){let s=r[o],l=i[o];if(!s)return-1;if(!l||s.index>l.index)return 1;if(s.index<l.index)return-1;if(o===a){if(s.offset>l.offset)return 1;if(s.offset<l.offset)return-1}}}return 0},ia=({nodeType:t})=>t===3||t===4,Fr=({nodeType:t})=>t===1,oa=t=>{let e=Array.from(t.childNodes).filter(n=>ia(n)||Fr(n)).reduce((n,r)=>{let i=n[n.length-1];return i?ia(r)?Array.isArray(i)?i.push(r):ia(i)?n[n.length-1]=[i,r]:n.push(r):Fr(i)?n.push(null,r):n.push(r):n.push(r),n},[]);return Fr(e[0])&&e.unshift("first"),Fr(e[e.length-1])&&e.push("last"),e.unshift("before"),e.push("after"),e},Jp=(t,e)=>t?oa(t)[e]:null,aa=(t,e)=>{let{id:n}=e[e.length-1];if(n){let a=t.ownerDocument.getElementById(n);if(a)return{node:a,offset:0}}for(let{index:a}of e){let o=Jp(t,a);if(o==="first")return{node:t.firstChild??t};if(o==="last")return{node:t.lastChild??t};if(o==="before")return{node:t,before:!0};if(o==="after")return{node:t,after:!0};t=o}let{offset:r}=e[e.length-1];if(!Array.isArray(t))return{node:t,offset:r};let i=0;for(let a of t){let{length:o}=a.nodeValue;if(i+o>=r)return{node:a,offset:r-i};i+=o}},Ir=(t,e)=>{let{parentNode:n,id:r}=t,i=oa(n),a=i.findIndex(l=>Array.isArray(l)?l.some(u=>u===t):l===t),o=i[a];if(Array.isArray(o)){let l=0;for(let u of o)if(u===t){l+=e;break}else l+=u.nodeValue.length;e=l}let s={id:r,index:a,offset:e};return n!==t.ownerDocument.documentElement?Ir(n).concat(s):[s]},Ms=t=>{let{startContainer:e,startOffset:n,endContainer:r,endOffset:i}=t,a=Ir(e,n);if(t.collapsed)return Nr([a]);let o=Ir(r,i);return Zp([a],[o])},zr=(t,e)=>{let n=Ut(e),r=Ut(e,!0),i=t.documentElement,a=aa(i,n[0]),o=aa(i,r[0]),s=t.createRange();return a.before?s.setStartBefore(a.node):a.after?s.setStartAfter(a.node):s.setStart(a.node,a.offset),o.before?s.setEndBefore(o.node):o.after?s.setEndAfter(o.node):s.setEnd(o.node,o.offset),s},Ps=t=>{let e=[],{parentNode:n}=t[0],r=Ir(n);for(let[i,a]of oa(n).entries()){let o=t[e.length];a===o&&e.push(Nr([r.concat({id:o.id,index:i})]))}return e},sa=(t,e)=>aa(t.documentElement,Ut(e)).node,la={fromIndex:t=>`/6/${(t+1)*2}`,toIndex:t=>t?.at(-1).index/2-1};var Qp=t=>{let e=0,n=r=>{if(r.id=e++,r.subitems)for(let i of r.subitems)n(i)};for(let r of t)n(r);return t},Fs=t=>t.map(e=>e.subitems?.length?[e,Fs(e.subitems)].flat():e).flat(),nr=class{constructor({toc:e,ids:n,splitHref:r,getFragment:i}){Qp(e);let a=Fs(e),o=new Map;for(let[l,u]of a.entries()){let[c,d]=r(u?.href)??[],p={fragment:d,item:u};o.has(c)?o.get(c).items.push(p):o.set(c,{prev:a[l-1],items:[p]})}let s=new Map;for(let[l,u]of n.entries())o.has(u)?s.set(u,o.get(u)):s.set(u,s.get(n[l-1]));this.ids=n,this.map=s,this.getFragment=i}getProgress(e,n){let r=this.ids[e],i=this.map.get(r);if(!i)return null;let{prev:a,items:o}=i;if(!o)return a;if(!n||o.length===1&&!o[0].fragment)return o[0].item;let s=n.startContainer.getRootNode();for(let[l,{fragment:u}]of o.entries()){let c=this.getFragment(s,u);if(c&&n.comparePoint(c,0)>0)return o[l-1]?.item??a}return o[o.length-1].item}},Br=class{constructor(e,n,r){this.sizes=e.map(i=>i.linear==="no"?0:i.size),this.sizePerLoc=n,this.sizePerTimeUnit=r,this.sizeTotal=this.sizes.reduce((i,a)=>i+a,0)}getProgress(e,n){let{sizes:r,sizePerLoc:i,sizePerTimeUnit:a,sizeTotal:o}=this,s=r[e]??0,u=r.slice(0,e).reduce((p,h)=>p+h,0)+n*s,c=o-u,d=(1-n)*s;return{fraction:u/o,section:{current:e,total:r.length},location:{current:Math.floor(u/i),total:Math.ceil(o/i)},time:{section:d/a,total:c/a}}}getSection(e){let{sizes:n,sizeTotal:r}=this,i=e*r,a=-1,o=0,s=0;for(let[l,u]of n.entries()){let c=s+u;if(c>i){a=l,o=(i-s)/u;break}s=c}return[a,o]}};var Dn=t=>document.createElementNS("http://www.w3.org/2000/svg",t),Ur=class{#e=Dn("svg");#t=new Map;constructor(){Object.assign(this.#e.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none"});let e=matchMedia("(prefers-color-scheme: dark)"),n=()=>this.#e.style.mixBlendMode=e.matches?"normal":"multiply";e.addEventListener("change",n),n()}get element(){return this.#e}add(e,n,r,i){this.#t.has(e)&&this.remove(e),typeof n=="function"&&(n=n(this.#e.getRootNode()));let a=n.getClientRects(),o=r(a,i);this.#e.append(o),this.#t.set(e,{range:n,draw:r,options:i,element:o,rects:a})}remove(e){this.#t.has(e)&&(this.#e.removeChild(this.#t.get(e).element),this.#t.delete(e))}redraw(){for(let e of this.#t.values()){let{range:n,draw:r,options:i,element:a}=e;this.#e.removeChild(a);let o=n.getClientRects(),s=r(o,i);this.#e.append(s),e.element=s,e.rects=o}}hitTest({x:e,y:n}){let r=Array.from(this.#t.entries());for(let i=r.length-1;i>=0;i--){let[a,o]=r[i];for(let{left:s,top:l,right:u,bottom:c}of o.rects)if(l<=n&&s<=e&&c>n&&u>e)return[a,o.range]}return[]}static underline(e,n={}){let{color:r="red",width:i=2}=n,a=Dn("g");a.setAttribute("fill",r);for(let{left:o,bottom:s,width:l}of e){let u=Dn("rect");u.setAttribute("x",o),u.setAttribute("y",s-i),u.setAttribute("height",i),u.setAttribute("width",l),a.append(u)}return a}static highlight(e,n={}){let{color:r="red"}=n,i=Dn("g");i.setAttribute("fill",r),i.setAttribute("fill-opacity",.3);for(let{left:a,top:o,height:s,width:l}of e){let u=Dn("rect");u.setAttribute("x",a),u.setAttribute("y",o),u.setAttribute("height",s),u.setAttribute("width",l),i.append(u)}return i}static copyImage([e],n={}){let{src:r}=n,i=Dn("image"),{left:a,top:o,height:s,width:l}=e;return i.setAttribute("href",r),i.setAttribute("x",a),i.setAttribute("y",o),i.setAttribute("height",s),i.setAttribute("width",l),i}};var $r=class{#e=new Map;#t=new Map;#n=new Map;#r=new Map;constructor({resolve:e,compare:n,onAdd:r,onDelete:i,onUpdate:a}){this.resolve=e,this.compare=n,this.onAdd=r,this.onDelete=i,this.onUpdate=a}async add(e,n){let{value:r}=e;if(this.#t.has(r))return;let{index:i,anchor:a}=await this.resolve(r);if(this.#t.set(r,e),this.#r.set(r,i),this.#n.set(r,a),this.#e.has(i)){let o=this.#e.get(i);if(n)o.push(e),this.onAdd?.(e,i,o.length-1);else{let s=0;for(let l=0;l<o.length;l++){let u=o[l].value;if(this.compare(r,u)<=0)break;s=l+1}o.splice(s,0,e),this.onAdd?.(e,i,s)}}else this.#e.set(i,[e]),this.onAdd?.(e,i,0)}update(e){let n=this.#r.get(e.value),r=this.#t.get(e.value);Object.assign(r,e),this.onUpdate?.(e,n)}delete(e){let n=this.#r.get(e),r=this.#e.get(n),i=r.findIndex(a=>a.value===e);r.splice(i,1),this.#t.delete(e),this.#r.delete(e),this.#n.delete(e),this.onDelete?.(e,n,i)}getByIndex(e){return this.#e.get(e)??[]}getAnchor(e){return this.#n.get(e)}};var ef=t=>new Promise(e=>setTimeout(e,t)),tf=(t,e,n)=>{let r;return(...i)=>{let a=()=>{r=null,n||t(...i)},o=n&&!r;r&&clearTimeout(r),r=setTimeout(a,e),o&&t(...i)}},nf=t=>{if(!t?.collapsed)return t;let{endOffset:e,endContainer:n}=t;if(n.nodeType===1)return n;if(e+1<n.length)t.setEnd(n,e+1);else if(e>1)t.setStart(n,e-1);else return n.parentNode;return t},Hr=(t,e,n,r=n)=>{let i=t.createRange();return i.setStart(e,n),i.setEnd(e,r),i},jr=(t,e,n,r=0,i=e.nodeValue.length)=>{if(i-r===1)return n(Hr(t,e,r),Hr(t,e,i))<0?r:i;let a=Math.floor(r+(i-r)/2),o=n(Hr(t,e,r,a),Hr(t,e,a,i));return o<0?jr(t,e,n,r,a):o>0?jr(t,e,n,a,i):a},{SHOW_ELEMENT:rf,SHOW_TEXT:af,SHOW_CDATA_SECTION:of,FILTER_ACCEPT:Is,FILTER_REJECT:Ns,FILTER_SKIP:zs}=NodeFilter,sf=rf|af|of,lf=(t,e,n,r)=>{let i=p=>{let h=p.localName?.toLowerCase();if(h==="script"||h==="style")return Ns;if(p.nodeType===1){let{left:b,right:g}=r(p.getBoundingClientRect());if(g<e||b>n)return Ns;if(b>=e&&g<=n)return Is}else{if(!p.nodeValue?.trim())return zs;let b=t.createRange();b.selectNodeContents(p);let{left:g,right:m}=r(b.getBoundingClientRect());if(m>=e&&g<=n)return Is}return zs},a=t.createTreeWalker(t.body,sf,{acceptNode:i}),o=[];for(let p=a.nextNode();p;p=a.nextNode())o.push(p);let s=o[0]??t.body,l=o[o.length-1]??s,u=s.nodeType===1?0:jr(t,s,(p,h)=>{let b=r(p.getBoundingClientRect()),g=r(h.getBoundingClientRect());return b.right<e&&g.left>e?0:g.left>e?-1:1}),c=l.nodeType===1?0:jr(t,l,(p,h)=>{let b=r(p.getBoundingClientRect()),g=r(h.getBoundingClientRect());return b.right<n&&g.left>n?0:g.left>n?-1:1}),d=t.createRange();return d.setStart(s,u),d.setEnd(l,c),d},cf=t=>{let{defaultView:e}=t,{writingMode:n,direction:r}=e.getComputedStyle(t.body),i=n==="vertical-rl"||n==="vertical-lr",a=t.body.dir==="rtl"||r==="rtl"||t.documentElement.dir==="rtl";return{vertical:i,rtl:a}},uf=t=>{let e=t.defaultView.getComputedStyle(t.body);return e.backgroundColor==="rgba(0, 0, 0, 0)"&&e.backgroundImage==="none"?t.defaultView.getComputedStyle(t.documentElement).background:e.background},ca=class{#e=document.createElement("div");#t=document.createElement("iframe");#n=document.createRange();#r;#i=!1;#a=!1;#o=!0;#s;#l={};constructor({container:e}){this.container=e,this.#t.classList.add("filter"),this.#e.append(this.#t),Object.assign(this.#e.style,{position:"relative",overflow:"hidden",flex:"0 0 auto",width:"100%",height:"100%"}),Object.assign(this.#t.style,{overflow:"hidden",border:"0",display:"none",width:"100%",height:"100%"}),this.#t.setAttribute("sandbox","allow-same-origin allow-scripts"),this.#t.setAttribute("scrolling","no")}get element(){return this.#e}get document(){return this.#t.contentDocument}async load(e,n,r){if(typeof e!="string")throw new Error(`${e} is not string`);return new Promise(i=>{this.#t.addEventListener("load",()=>{let a=this.document;n?.(a),this.#t.style.display="block";let{vertical:o,rtl:s}=cf(a),l=uf(a);this.#t.style.display="none",this.#i=o,this.#a=s,this.#n.selectNodeContents(a.body);let u=r?.({vertical:o,rtl:s,background:l});this.#t.style.display="block",this.render(u),new ResizeObserver(()=>this.expand()).observe(a.body),i()},{once:!0}),this.#t.src=e})}render(e){this.#o=e.flow!=="scrolled",this.#l=e,this.#o?this.columnize(e):this.scrolled(e)}scrolled({gap:e,columnWidth:n}){let r=this.#i,i=this.document;Object.assign(i.documentElement.style,{boxSizing:"border-box",padding:r?`${e}px 0`:`0 ${e}px`,columnWidth:"auto",height:"auto",width:"auto"}),Object.assign(i.body.style,{[r?"maxHeight":"maxWidth"]:`${n}px`,margin:"auto"}),this.setImageSize(),this.expand()}columnize({width:e,height:n,gap:r,columnWidth:i}){let a=this.#i;this.#s=a?n:e;let o=this.document;Object.assign(o.documentElement.style,{boxSizing:"border-box",columnWidth:`${i}px`,columnGap:`${r}px`,columnFill:"auto",...a?{width:`${e}px`}:{height:`${n}px`},padding:a?`${r/2}px 0`:`0 ${r/2}px`,overflow:"hidden",overflowWrap:"anywhere",position:"static",border:"0",margin:"0",maxHeight:"none",maxWidth:"none",minHeight:"none",minWidth:"none",webkitLineBoxContain:"block glyphs replaced"}),Object.assign(o.body.style,{maxHeight:"none",maxWidth:"none",margin:"0"}),this.setImageSize(),this.expand()}setImageSize(){let{width:e,height:n,margin:r}=this.#l,i=this.#i,a=this.document;for(let o of a.body.querySelectorAll("img, svg, video")){let{maxHeight:s,maxWidth:l}=a.defaultView.getComputedStyle(o);Object.assign(o.style,{maxHeight:i?s!=="none"&&s!=="0px"?s:"100%":`${n-r*2}px`,maxWidth:i?`${e-r*2}px`:l!=="none"&&l!=="0px"?l:"100%",objectFit:"contain",pageBreakInside:"avoid",breakInside:"avoid",boxSizing:"border-box"})}}expand(){if(this.#o){let e=this.#i?"height":"width",n=this.#i?"width":"height",r=this.#n.getBoundingClientRect()[e],a=Math.ceil(r/this.#s)*this.#s;this.#e.style.padding="0",this.#t.style[e]=`${a}px`,this.#e.style[e]=`${a}px`,this.#t.style[n]="100%",this.#e.style[n]="100%",this.document&&(this.document.documentElement.style[e]=`${a}px`),this.#r&&(this.#r.element.style.margin="0",this.#r.element.style[e]=`${a}px`,this.#r.redraw())}else{let e=this.#i?"width":"height",n=this.#i?"height":"width",a=this.document?.documentElement?.getBoundingClientRect()?.[e],{margin:o}=this.#l,s=this.#i?`0 ${o}px`:`${o}px 0`;this.#e.style.padding=s,this.#t.style[e]=`${a}px`,this.#e.style[e]=`${a}px`,this.#t.style[n]="100%",this.#e.style[n]="100%",this.#r&&(this.#r.element.style.margin=s,this.#r.element.style[e]=`${a}px`,this.#r.redraw())}}set overlayer(e){this.#r=e,this.#e.append(e.element)}get overlayer(){return this.#r}},Wr=class{#e=document.createElement("div");#t=document.createElement("div");#n;#r=!1;#i=!1;#a=-1;#o=0;#s=!1;#l=new WeakMap;layout={margin:48,gap:40,maxColumnWidth:700};constructor({book:e,onLoad:n,onRelocated:r,createOverlayer:i}){this.sections=e.sections,this.onLoad=n,this.onRelocated=r,this.createOverlayer=i,Object.assign(this.#e.style,{boxSizing:"border-box",width:"100%",height:"100%",position:"absolute"}),this.#e.append(this.#t),Object.assign(this.#t.style,{width:"100%",height:"100%"}),new ResizeObserver(()=>this.render()).observe(this.#e),this.#t.addEventListener("scroll",tf(()=>{this.scrolled&&this.#b("scroll")},250))}get element(){return this.#e}#d(){return this.#n&&this.#t.removeChild(this.#n.element),this.#n=new ca({container:this.#e}),this.#t.append(this.#n.element),this.#n}#c({vertical:e,rtl:n,background:r}){this.#r=e,this.#i=n,this.#e.style.background=r;let{flow:i,margin:a,gap:o,maxColumnWidth:s}=this.layout;if(i==="scrolled"){this.#e.setAttribute("dir",e?"rtl":"ltr"),this.#e.style.padding="0",this.#t.style.overflow="scroll";let g=this.layout.maxColumnWidth;return{flow:i,margin:a,gap:o,columnWidth:g}}let{width:l,height:u}=this.#t.getBoundingClientRect(),c=e?u:l,d=Math.ceil(c/s),p=c/d-o;this.#e.setAttribute("dir",n?"rtl":"ltr");let h=`${e?o:o/2}px`,b=`${e?a-o/2:a}px`;return this.#e.style.padding=`${b} ${h}`,this.#t.style.overflow="hidden",{height:u,width:l,margin:a,gap:o,columnWidth:p}}render(){this.#n&&(this.#n.render(this.#c({vertical:this.#r,rtl:this.#i})),this.#g())}get scrolled(){return this.layout.flow==="scrolled"}get scrollProp(){let{scrolled:e}=this;return this.#r?e?"scrollLeft":"scrollTop":e?"scrollTop":"scrollLeft"}get sideProp(){let{scrolled:e}=this;return this.#r?e?"width":"height":e?"height":"width"}get size(){return this.#t.getBoundingClientRect()[this.sideProp]}get viewSize(){return this.#n.element.getBoundingClientRect()[this.sideProp]}get start(){return Math.abs(this.#t[this.scrollProp])}get end(){return this.start+this.size}get page(){return Math.floor((this.start+this.end)/2/this.size)}get pages(){return Math.round(this.viewSize/this.size)}#u(){if(this.scrolled){let n=this.viewSize,r=this.layout.margin;return this.#r?({left:i,right:a})=>({left:n-a-r,right:n-i-r}):({top:i,bottom:a})=>({left:i+r,right:a+r})}let e=this.pages*this.size;return this.#i?({left:n,right:r})=>({left:e-r,right:e-n}):this.#r?({top:n,bottom:r})=>({left:n,right:r}):n=>n}async#f(e,n){if(this.scrolled){let i=this.#u()(e).left;return this.#p(i,n)}let r=this.#u()(e).left+this.layout.margin/2;return this.#h(Math.floor(r/this.size),n)}async#p(e,n){let r=this.#t,{scrollProp:i}=this;if(r[i]===e){this.#b(n);return}this.scrolled&&this.#r&&(e=-e),r[i]=e,this.#b(n)}async#h(e,n){let r=this.size*(this.#i?-e:e);return this.#p(r,n)}async#g(e){let n=nf(this.#o).getBoundingClientRect?.();if(n){await this.#f(n,"anchor"),e&&this.#T();return}if(this.scrolled){await this.#p(this.#o*this.viewSize,"anchor");return}let{pages:r}=this;if(!r)return;let i=Math.round(this.#o*(r-1));await this.#h(i,"anchor")}#T(){let{defaultView:e}=this.#n.document;if(this.#o instanceof e.Range){let n=e.getSelection();n.removeAllRanges(),n.addRange(this.#o)}}#_(){return lf(this.#n.document,this.start,this.end,this.#u(),this.scrolled)}#b(e){let n=this.#_();e!=="anchor"&&(this.#o=n);let r=this.#a;this.scrolled?this.onRelocated?.(n,r,this.end/this.viewSize):this.pages>0&&this.onRelocated?.(n,r,(this.page+1)/this.pages)}async#w(e){let{index:n,src:r,anchor:i,onLoad:a,select:o}=await e;if(this.#a=n,r){let s=this.#d(),l=d=>{if(d.head){let p=d.createElement("style");d.head.append(p),this.#l.set(d,p)}a?.(d,n)},u=this.#c.bind(this);await s.load(r,l,u);let c=this.createOverlayer?.(s.document,n);c&&(s.overlayer=c),this.#n=s}this.#o=(typeof i=="function"?i(this.#n.document):i)??0,await this.#g(o)}#v(e){return e>-1&&e<this.pages}scrollPrev(){if(!this.#n)return null;if(this.scrolled)return this.start>0?this.#p(Math.max(0,this.start-this.size)):null;let e=this.page-1;return this.#v(e)?this.#h(e):null}scrollNext(){if(!this.#n)return null;if(this.scrolled)return this.viewSize-this.end>60?this.#p(Math.min(this.viewSize,this.end)):null;let e=this.page+1;return this.#v(e)?this.#h(e):null}#x(e){return e>=0&&e<=this.sections.length-1}async#y(e,n,r){if(this.#s)return;r&&(this.#s=!0);let i=e?.();if(i)await i;else{let{index:a,anchor:o,select:s}=await n;if(!this.#x(a))return this.#s=!1,null;if(a===this.#a)await this.#w({index:a,anchor:o,select:s});else{let l=this.#a,u=(...c)=>{this.sections[l]?.unload?.(),this.onLoad?.(...c)};await this.#w(Promise.resolve(this.sections[a].load()).then(c=>({index:a,src:c,anchor:o,onLoad:u,select:s})).catch(c=>({})))}}r&&(await ef(100),this.#s=!1)}async goTo(e){return this.#y(null,e)}#m(e){for(let n=this.#a+e;this.#x(n);n+=e)if(this.sections[n]?.linear!=="no")return n}prev(){let e=this.#m(-1);return this.#y(()=>this.scrollPrev(),{index:e,anchor:()=>1},!0)}next(){let e=this.#m(1);return this.#y(()=>this.scrollNext(),{index:e},!0)}prevSection(){return this.goTo({index:this.#m(-1)})}nextSection(){return this.goTo({index:this.#m(1)})}firstSection(){let e=this.sections.findIndex(n=>n.linear!=="no");return this.goTo({index:e})}lastSection(){let e=this.sections.findLastIndex(n=>n.linear!=="no");return this.goTo({index:e})}getOverlayer(){if(this.#n)return{index:this.#a,overlayer:this.#n.overlayer,doc:this.#n.document}}setStyle(e){let n=this.#l.get(this.#n?.document);n&&(n.textContent=e)}async#S(e,n){this.#o=e,await this.#g(n)}};var Bs=t=>t?.split(/[,;\s]/)?.filter(e=>e)?.map(e=>e.split("=").map(n=>n.trim())),df=(t,e)=>{if(t.documentElement.nodeName==="svg"){let[,,i,a]=t.documentElement.getAttribute("viewBox")?.split(/\s/)??[];return{width:i,height:a}}let n=Bs(t.querySelector('meta[name="viewport"]')?.getAttribute("content"));if(n)return Object.fromEntries(n);if(typeof e=="string")return Bs(e);if(e)return e;let r=t.querySelector("img");return r?{width:r.naturalWidth,height:r.naturalHeight}:{width:1e3,height:2e3}},ua=class{#e=document.createElement("div");defaultViewport;spread;#t=!1;#n;#r;#i;#a;constructor(){Object.assign(this.#e.style,{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}),new ResizeObserver(()=>this.render()).observe(this.#e)}get element(){return this.#e}get side(){return this.#a}async#o(e){let n=document.createElement("div"),r=document.createElement("iframe");return n.append(r),Object.assign(r.style,{border:"0",display:"none",overflow:"hidden"}),r.setAttribute("scrolling","no"),r.classList.add("filter"),this.#e.append(n),e?new Promise(i=>{let a=()=>{r.removeEventListener("load",a),this.onLoad?.(r);let o=r.contentDocument,{width:s,height:l}=df(o,this.defaultViewport);i({element:n,iframe:r,width:parseFloat(s),height:parseFloat(l)})};r.addEventListener("load",a),r.src=e}):{blank:!0,element:n,iframe:r}}render(e=this.#a){if(!e)return;let n=this.#n??{},r=this.#i??this.#r,i=e==="left"?n:r,{width:a,height:o}=this.#e.getBoundingClientRect(),s=this.spread!=="both"&&this.spread!=="portrait"&&o>a;this.#t=s;let l=n.width??r.width,u=n.height??r.height,c=s?Math.min(a/(i.width??l),o/(i.height??u)):Math.min(a/((n.width??l)+(r.width??l)),o/Math.max(n.height??u,r.height??u)),d=p=>{let{element:h,iframe:b,width:g,height:m}=p;Object.assign(b.style,{width:`${g}px`,height:`${m}px`,transform:`scale(${c})`,transformOrigin:"top left",display:"block"}),Object.assign(h.style,{width:`${(g??l)*c}px`,height:`${(m??u)*c}px`,overflow:"hidden",display:"block"}),s&&p!==i&&(h.style.display="none")};this.#i?d(this.#i):(d(n),d(r))}async showSpread({left:e,right:n,center:r,side:i}){this.#e.replaceChildren(),this.#n=null,this.#r=null,this.#i=null,r?(this.#i=await this.#o(r),this.#a="center",this.render()):(this.#n=await this.#o(e),this.#r=await this.#o(n),this.#a=i,this.render())}goLeft(){if(!this.#i){if(this.#n?.blank)return!0;if(this.#t&&this.#n?.element?.style?.display==="none")return this.#r.element.style.display="none",this.#n.element.style.display="block",this.#a="left",!0}}goRight(){if(!this.#i){if(this.#r?.blank)return!0;if(this.#t&&this.#r?.element?.style?.display==="none")return this.#n.element.style.display="none",this.#r.element.style.display="block",this.#a="right",!0}}},qr=class{#e;#t=-1;#n=new ua;constructor({book:e,onLoad:n,onRelocated:r}){this.book=e,this.onLoad=n,this.onRelocated=r;let{rendition:i}=e;this.#n.spread=i?.spread,this.#n.defaultViewport=i?.viewport;let a=e.dir==="rtl",o=!a;this.rtl=a,i?.spread==="none"?this.#e=e.sections.map(s=>({center:s})):this.#e=e.sections.reduce((s,l)=>{let u=s[s.length-1],{linear:c,pageSpread:d}=l;if(c==="no")return s;let p=()=>{let h={};return s.push(h),h};if(d==="center")p().center=l;else if(d==="left"){let h=u.center||u.left||o?p():u;h.left=l}else if(d==="right"){let h=u.center||u.right||a?p():u;h.right=l}else o?u.center||u.right?p().left=l:u.left?u.right=l:u.left=l:u.center||u.left?p().right=l:u.right?u.left=l:u.right=l;return s},[{}])}get element(){return this.#n.element}get index(){let e=this.#e[this.#t],n=e?.center??(this.#n.side==="left"?e.left??e.right:e.right??e.left);return this.book.sections.indexOf(n)}getSpreadOf(e){let n=this.#e;for(let r=0;r<n.length;r++){let{left:i,right:a,center:o}=n[r];if(i===e)return{index:r,side:"left"};if(a===e)return{index:r,side:"right"};if(o===e)return{index:r,side:"center"}}}async goToSpread(e,n){if(e<0||e>this.#e.length-1)return;if(e===this.#t){this.#n.render(n);return}this.#t=e;let r=this.#e[e];if(r.center){let i=await r.center?.load?.();await this.#n.showSpread({center:i})}else{let i=await r.left?.load?.(),a=await r.right?.load?.();await this.#n.showSpread({left:i,right:a,side:n})}this.onRelocated?.(null,this.index,0,1)}async select(e){await this.goTo(e)}async goTo(e){let{book:n}=this,r=await e,i=n.sections[r.index];if(!i)return;let{index:a,side:o}=this.getSpreadOf(i);await this.goToSpread(a,o)}async next(){if(this.rtl?this.#n.goLeft():this.#n.goRight())this.onRelocated?.(null,this.index,0,1);else return this.goToSpread(this.#t+1,this.rtl?"right":"left")}async prev(){if(this.rtl?this.#n.goRight():this.#n.goLeft())this.onRelocated?.(null,this.index,0,1);else return this.goToSpread(this.#t-1,this.rtl?"left":"right")}};var Us=t=>t.replace(/\s+/g," "),pf=(t,{startIndex:e,startOffset:n,endIndex:r,endOffset:i})=>{let a=t[e],o=t[r],s=a===o?a.slice(n,i):a.slice(n)+t.slice(a+1,o).join("")+o.slice(0,i),l=Us(a.slice(0,n)).trimStart(),u=Us(o.slice(i)).trimEnd(),c=l.length<50?"":"\u2026",d=u.length<50?"":"\u2026",p=`${c}${l.slice(-50)}`,h=`${u.slice(0,50)}${d}`;return{pre:p,match:s,post:h}},ff=function*(t,e,n={}){let{locales:r="en",granularity:i="word",sensitivity:a="base"}=n,o,s;try{o=new Intl.Segmenter(r,{usage:"search",granularity:i}),s=new Intl.Collator(r,{sensitivity:a})}catch{o=new Intl.Segmenter("en",{usage:"search",granularity:i}),s=new Intl.Collator("en",{sensitivity:a})}let l=Array.from(o.segment(e)).length,u=[],c=0,d=o.segment(t[c])[Symbol.iterator]();e:for(;c<t.length;){for(;u.length<l;){let{done:h,value:b}=d.next();if(h)if(c++,c<t.length){d=o.segment(t[c])[Symbol.iterator]();continue}else break e;let{index:g,segment:m}=b;if(/[^\p{Format}]/u.test(m)){if(/\s/u.test(m)){/\s/u.test(u[u.length-1]?.segment)||u.push({strIndex:c,index:g,segment:" "});continue}b.strIndex=c,u.push(b)}}let p=u.map(h=>h.segment).join("");if(s.compare(e,p)===0){let h=c,b=u[u.length-1],g=b.index+b.segment.length,m=u[0].strIndex,f=u[0].index,y={startIndex:m,startOffset:f,endIndex:h,endOffset:g};yield{range:y,excerpt:pf(t,y)}}u.shift()}},$s=(t,e)=>{let{defalutLocale:n,matchCase:r,matchDiacritics:i,matchWholeWords:a}=e;return function*(o,s){let l=t(o,function*(u,c){for(let d of ff(u,s,{locales:o.body.lang||o.documentElement.lang||n||"en",granularity:a?"word":"grapheme",sensitivity:i&&r?"variant":i&&!r?"accent":!i&&r?"case":"base"})){let{startIndex:p,startOffset:h,endIndex:b,endOffset:g}=d.range;d.range=c(p,h,b,g),yield d}});for(let u of l)yield u}};var hf=function*(t,e){let n=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT|NodeFilter.SHOW_CDATA_SECTION,{FILTER_ACCEPT:r,FILTER_REJECT:i,FILTER_SKIP:a}=NodeFilter,o=d=>{let p=d.localName?.toLowerCase();return p==="script"||p==="style"?i:d.nodeType===1?a:r},s=t.createTreeWalker(t.body,n,{acceptNode:o}),l=[];for(let d=s.nextNode();d;d=s.nextNode())l.push(d);let u=l.map(d=>d.nodeValue),c=(d,p,h,b)=>{let g=t.createRange();return g.setStart(l[d],p),g.setEnd(l[h],b),g};for(let d of e(u,c))yield d};var Hs=Object.fromEntries(Array.from(Object.entries({isRef:["annoref","biblioref","glossref","noteref"],isLink:["backlink"],isNote:["annotation","note","footnote","endnote","rearnote"]}),([t,e])=>[t,n=>n.getAttributeNS("http://www.idpf.org/2007/ops","type")?.split(/s/)?.some(r=>e.includes(r))])),Kr=class{#e;#t;#n;#r;language="en";textDirection="";isCJK=!1;isFixedLayout=!1;annotations=new $r({resolve:e=>this.resolveCFI(e),compare:er,onAdd:(e,n,r)=>{let i=this.#s(n);i&&this.#o(i.doc,i.overlayer,e);let a=this.#t.getProgress(n)?.label??"";this?.emit({type:"add-annotation",annotation:e,label:a,index:n,position:r})},onDelete:(e,n,r)=>{this.#s(n)?.overlayer?.remove(e),this?.emit({type:"delete-annotation",index:n,position:r})},onUpdate:(e,n)=>{let r=this.#s(n);r&&(r.overlayer.remove(e.value),this.#o(r.doc,r.overlayer,e))}});constructor(e,n){if(this.book=e,this.emit=n,e.metadata?.language)try{let r=e.metadata.language;e.metadata.language=Intl.getCanonicalLocales(r)[0];let i=typeof r=="string"?r:r[0],a=new Intl.Locale(i);this.isCJK=["zh","ja","kr"].includes(a.language),a.textInfo&&a.textInfo.direction&&(this.textDirection=a.textInfo.direction)}catch{}if(e.splitTOCHref&&e.getTOCFragment){let r=e.sections.map(o=>o.id);this.#e=new Br(e.sections,150,1600);let i=e.splitTOCHref.bind(e),a=e.getTOCFragment.bind(e);this.#t=new nr({toc:e.toc??[],ids:r,splitHref:i,getFragment:a}),this.#n=new nr({toc:e.pageList??[],ids:r,splitHref:i,getFragment:a})}}async display(){let e={book:this.book,onLoad:this.#a.bind(this),onRelocated:this.#i.bind(this),createOverlayer:this.#l.bind(this)};return this.isFixedLayout=this.book.rendition?.layout==="pre-paginated",this.isFixedLayout?this.renderer=new qr(e):this.renderer=new Wr(e),this.renderer.element}async init({lastLocation:e,annotations:n}){if(e){let r=this.resolveNavigation(e);r?await this.renderer.goTo(r):await this.renderer.next()}else await this.renderer.next();if(n){n.sort((r,i)=>er(r.value,i.value));for(let r of n)await this.annotations.add(r,!0)}}#i(e,n,r){if(!this.#e)return;let i=this.#e.getProgress(n,r),a=this.#t.getProgress(n,e),o=this.#n.getProgress(n,e),s=this.getCFI(n,e);this.emit?.({type:"relocated",...i,tocItem:a,pageItem:o,cfi:s})}#a(e,n){let{book:r}=this;e.documentElement.lang||=this.language,e.documentElement.dir||=this.isCJK?"":this.textDirection,this.renderer.setStyle(this.#r);let i=r.sections[n];for(let a of e.querySelectorAll("a[href]"))a.addEventListener("click",o=>{o.preventDefault();let s=a.getAttribute("href"),l=i?.resolveHref?.(s)??s;if(r?.isExternal?.(l))this.emit?.({type:"external-link",uri:l});else if(Hs.isRef(a)){let{index:u,anchor:c}=r.resolveHref(l);Promise.resolve(r.sections[u].createDocument()).then(d=>[c(d),d.contentType]).then(([d,p])=>[d?.innerHTML,p,Hs.isNote(d)]).then(([d,p,h])=>d?this.emit?.({type:"reference",href:h?null:l,content:d,contentType:p,element:a}):null).catch(d=>{});return}else this.goTo(l)});this.emit?.({type:"loaded",doc:e,index:n})}#o(e,n,r){let{value:i}=r,a=this.annotations.getAnchor(i),o=e?a(e):a,[s,l]=this.emit({type:"draw-annotation",annotation:r});n.add(i,o,s,l)}#s(e){let n=this.renderer.getOverlayer();if(n.index===e)return n}#l(e,n){let r=new Ur;for(let i of this.annotations.getByIndex(n))this.#o(e,r,i);return e.addEventListener("click",i=>{let[a,o]=r.hitTest(i);a&&this.emit?.({type:"show-annotation",value:a,range:o})},!1),r}async showAnnotation(e){let{value:n}=e,{index:r,anchor:i}=await this.goTo(n),{doc:a}=this.#s(r),o=i(a);this.emit?.({type:"show-annotation",value:n,range:o})}getCFI(e,n){if(!n)return"";let r=this.book.sections[e].cfi??la.fromIndex(e);return Ls(r,Ms(n))}resolveCFI(e){if(this.book.resolveCFI)return this.book.resolveCFI(e);{let n=Zt(e);return{index:la.toIndex((n.parent??n).shift()),anchor:a=>zr(a,n)}}}resolveNavigation(e){try{return typeof e=="number"?{index:e}:tr.test(e)?this.resolveCFI(e):this.book.resolveHref(e)}catch{}}async goTo(e){let n=this.resolveNavigation(e);try{return await this.renderer.goTo(n),n}catch{}}async goToFraction(e){let[n,r]=this.#e.getSection(e);return this.renderer.goTo({index:n,anchor:r})}async select(e){try{let n=await this.resolveNavigation(e);await this.renderer.goTo({...n,select:!0})}catch{}}goLeft(){return this.book.dir==="rtl"?this.renderer.next():this.renderer.prev()}goRight(){return this.book.dir==="rtl"?this.renderer.prev():this.renderer.next()}setAppearance({layout:e,css:n}){this.isFixedLayout||(Object.assign(this.renderer.layout,e),this.#r=n,this.renderer.setStyle(n),this.renderer.render())}async*#d(e,n,r){let i=await this.book.sections[r].createDocument();for(let{range:a,excerpt:o}of e(i,n))yield{cfi:this.getCFI(r,a),excerpt:o}}async*#c(e,n){let{sections:r}=this.book;for(let[i,{createDocument:a}]of r.entries()){if(!a)continue;let o=await a(),s=Array.from(e(o,n),({range:u,excerpt:c})=>({cfi:this.getCFI(i,u),excerpt:c}));yield{progress:(i+1)/r.length},s.length&&(yield{index:i,subitems:s})}}async*search(e){let{query:n,index:r}=e,i=$s(hf,{defaultLocale:this.language,...e}),a=r!=null?this.#d(i,n,r):this.#c(i,n);for await(let o of a)yield"subitems"in o?{label:this.#t.getProgress(o.index)?.label??"",subitems:o.subitems}:o}};var mf=(t,e,n)=>{let r=document.createElement("ul");r.setAttribute("role","group"),r.setAttribute("aria-label",t);let i=new Map,a=o=>{n(o);let s=i.get(o);for(let l of r.children)l.setAttribute("aria-checked",l===s?"true":"false")};for(let[o,s]of e){let l=document.createElement("li");l.setAttribute("role","menuitemradio"),l.innerText=o,l.onclick=()=>a(s),i.set(s,l),r.append(l)}return{element:r,select:a}},js=t=>{let e={},n=document.createElement("ul");n.setAttribute("role","menu");let r=()=>n.classList.remove("show"),i=a=>(...o)=>(r(),a(...o));for(let{name:a,label:o,type:s,items:l,onclick:u}of t){let c=s==="radio"?mf(o,l,i(u)):null;a&&(e[a]=c),n.append(c.element)}return window.addEventListener("blur",()=>r()),window.addEventListener("click",a=>{n.parentNode.contains(a.target)||r()}),{element:n,groups:e}};function rr(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():ne}var Ws=rr();function vn(){return Ws.PROD==="1"}function xn(){return Ws.PROD_API==="1"}var Ry=rr().PROD==="1",Dy=rr().PROD!=="1";var qs=({entries:t,loadBlob:e,getSize:n},r)=>{let i=new Map,a=new Map,o=async d=>{if(i.has(d))return i.get(d);let p=URL.createObjectURL(await e(d)),h=URL.createObjectURL(new Blob([`<img src="${p}">`],{type:"text/html"}));return a.set(d,[p,h]),i.set(d,h),h},s=d=>{a.get(d)?.forEach?.(p=>URL.revokeObjectURL(p)),a.delete(d),i.delete(d)},l=[".jpg",".jpeg",".png",".gif",".bmp",".webp",".svg"],u=t.map(d=>d.filename).filter(d=>l.some(p=>d.endsWith(p))).sort(),c={};return c.getCover=()=>e(u[0]),c.metadata={title:r.name},c.sections=u.map(d=>({id:d,load:()=>o(d),unload:()=>s(d),size:n(d)})),c.toc=u.map(d=>({label:d,href:d})),c.rendition={layout:"pre-paginated"},c.resolveHref=d=>({index:c.sections.findIndex(p=>p.id===d)}),c.splitTOCHref=d=>[d,null],c.getTOCFragment=d=>d.documentElement,c};var Ks=t=>t?.trim()?.replace(/\s{2,}/g," "),_t=t=>Ks(t?.textContent),Vr={XLINK:"http://www.w3.org/1999/xlink",EPUB:"http://www.idpf.org/2007/ops"},Gr={XML:"application/xml",XHTML:"application/xhtml+xml"},Mt={strong:["strong","self"],emphasis:["em","self"],style:["span","self"],a:"anchor",strikethrough:["s","self"],sub:["sub","self"],sup:["sup","self"],code:["code","self"],image:"image"},gf={tr:["tr",["align"]],th:["th",["colspan","rowspan","align","valign"]],td:["td",["colspan","rowspan","align","valign"]]},Vs={epigraph:["blockquote"],subtitle:["h2",Mt],"text-author":["p",Mt],date:["p",Mt],stanza:"stanza"},Xr={title:["header",{p:["h1",Mt],"empty-line":["br"]}],epigraph:["blockquote","self"],image:"image",annotation:["aside"],section:["section","self"],p:["p",Mt],poem:["blockquote",Vs],subtitle:["h2",Mt],cite:["blockquote","self"],"empty-line":["br"],table:["table",gf],"text-author":["p",Mt]};Vs.epigraph.push(Xr);var bf={image:"image",title:["section",{p:["h1",Mt],"empty-line":["br"]}],epigraph:["section",Xr],section:["section",Xr]},Gs=t=>{let e=t.getAttributeNS(Vr.XLINK,"href"),[,n]=e.split("#"),r=t.getRootNode().getElementById(n);return r?`data:${r.getAttribute("content-type")};base64,${r.textContent}`:e},pa=class{constructor(e){this.fb2=e,this.doc=document.implementation.createDocument(Vr.XHTML,"html")}image(e){let n=this.doc.createElement("img");return n.alt=e.getAttribute("alt"),n.title=e.getAttribute("title"),n.setAttribute("src",Gs(e)),n}anchor(e){let n=this.convert(e,{a:["a",Mt]});return n.setAttribute("href",e.getAttributeNS(Vr.XLINK,"href")),e.getAttribute("type")==="note"&&n.setAttributeNS(Vr.EPUB,"epub:type","noteref"),n}stanza(e){let n=this.convert(e,{stanza:["p",{title:["header",{p:["strong",Mt],"empty-line":["br"]}],subtitle:["p",Mt]}]});for(let r of e.children)r.nodeName==="v"&&(n.append(this.doc.createTextNode(r.textContent)),n.append(this.doc.createElement("br")));return n}convert(e,n){if(e.nodeType===3)return this.doc.createTextNode(e.textContent);if(e.nodeType===4)return this.doc.createCDATASection(e.textContent);if(e.nodeType===8)return this.doc.createComment(e.textContent);let r=n?.[e.nodeName];if(!r)return null;if(typeof r=="string")return this[r](e);let[i,a]=r,o=this.doc.createElement(i);if(e.id&&(o.id=e.id),o.classList.add(e.nodeName),Array.isArray(a))for(let u of a)o.setAttribute(u,e.getAttribute(u));let s=a==="self"?n:Array.isArray(a)?null:a,l=e.firstChild;for(;l;){let u=this.convert(l,s);u&&o.append(u),l=l.nextSibling}return o}},yf=async t=>{let e=await t.arrayBuffer(),n=new TextDecoder("utf-8").decode(e),r=new DOMParser,i=r.parseFromString(n,Gr.XML),a=i.xmlEncoding||n.match(/^<\?xml\s+version\s*=\s*["']1.\d+"\s+encoding\s*=\s*["']([A-Za-z0-9._-]*)["']/)?.[1];if(a&&a.toLowerCase()!=="utf-8"){let o=new TextDecoder(a).decode(e);return r.parseFromString(o,Gr.XML)}return i},wf=URL.createObjectURL(new Blob([`
@namespace epub "http://www.idpf.org/2007/ops";
body > img, section > img {
    display: block;
    margin: auto;
}
.title {
    text-align: center;
}
body > section > .title, body.notesBodyType > .title {
    margin: 3em 0;
}
body.notesBodyType > section .title {
    text-align: left;
    margin: 1em 0;
}
p {
    text-indent: 1em;
    margin: 0;
}
:not(p) + p, p:first-child {
    text-indent: 0;
}
.poem p {
    text-indent: 0;
    margin: 1em 0;
}
.text-author, .date {
    text-align: end;
}
.text-author:before {
    content: "\u2014";
}
table {
    border-collapse: collapse;
}
td, th {
    padding: .25em;
}
a[epub|type~="noteref"] {
    font-size: .75em;
    vertical-align: super;
}
body:not(.notesBodyType) > .title, body:not(.notesBodyType) > .epigraph {
    margin: 3em 0;
}
`],{type:"text/css"})),vf=t=>`<?xml version="1.0" encoding="utf-8"?>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head><link href="${wf}" rel="stylesheet" type="text/css"/></head>
    <body>${t}</body>
</html>`,da="data-foliate-id",fa=async t=>{let e={},n=await yf(t),r=new pa(n),i=p=>n.querySelector(p),a=p=>[...n.querySelectorAll(p)],o=p=>{let h=_t(p.querySelector("nickname"));if(h)return h;let b=_t(p.querySelector("first-name")),g=_t(p.querySelector("middle-name")),m=_t(p.querySelector("last-name")),f=[b,g,m].filter(w=>w).join(" "),y=m?[m,[b,g].filter(w=>w).join(" ")].join(", "):null;return{name:f,sortAs:y}},s=p=>p?.getAttribute("value")??_t(p),l=i("title-info annotation");e.metadata={title:_t(i("title-info book-title")),identifier:_t(i("document-info id")),language:_t(i("title-info lang")),author:a("title-info author").map(o),translator:a("title-info translator").map(o),producer:a("document-info author").map(o).concat(a("document-info program-used").map(_t)),publisher:_t(i("publish-info publisher")),published:s(i("title-info date")),modified:s(i("document-info date")),description:l?r.convert(l,{annotation:["div",Xr]}).innerHTML:null,subject:a("title-info genre").map(_t)},e.getCover=()=>fetch(Gs(i("coverpage image"))).then(p=>p.blob());let u=Array.from(n.querySelectorAll("body"),p=>{let h=r.convert(p,{body:["body",bf]});return[Array.from(h.children,b=>{let g=[b,...b.querySelectorAll("[id]")].map(m=>m.id);return{el:b,ids:g}}),h]}),c=u[0][0].map(({el:p,ids:h})=>{let b=Array.from(p.querySelectorAll(":scope > section > .title"),(g,m)=>(g.setAttribute(da,m),{title:_t(g),index:m}));return{ids:h,titles:b,el:p}}).concat(u.slice(1).map(([p,h])=>{let b=p.map(g=>g.ids).flat();return h.classList.add("notesBodyType"),{ids:b,el:h,linear:"no"}})).map(({ids:p,titles:h,el:b,linear:g})=>{let m=vf(b.outerHTML),f=new Blob([m],{type:Gr.XHTML}),y=URL.createObjectURL(f),w=Ks(b.querySelector(".title, .subtitle, p")?.textContent??(b.classList.contains("title")?b.textContent:""));return{ids:p,title:w,titles:h,load:()=>y,createDocument:()=>new DOMParser().parseFromString(m,Gr.XHTML),size:f.size-Array.from(b.querySelectorAll("[src]"),A=>A.getAttribute("src")?.length??0).reduce((A,S)=>A+S,0),linear:g}}),d=new Map;return e.sections=c.map((p,h)=>{let{ids:b,load:g,createDocument:m,size:f,linear:y}=p;for(let w of b)w&&d.set(w,h);return{id:h,load:g,createDocument:m,size:f,linear:y}}),e.toc=c.map(({title:p,titles:h},b)=>{let g=b.toString();return{label:p,href:g,subitems:h?.length?h.map(({title:m,index:f})=>({label:m,href:`${g}#${f}`})):null}}).filter(p=>p),e.resolveHref=p=>{let[h,b]=p.split("#");return h?{index:Number(h),anchor:g=>g.querySelector(`[${da}="${b}"]`)}:{index:d.get(b),anchor:g=>g.getElementById(b)}},e.splitTOCHref=p=>p?.split("#")?.map(h=>Number(h))??[],e.getTOCFragment=(p,h)=>p.querySelector(`[${da}="${h}"]`),e};var an=t=>{if(!t)return"";let e=document.createElement("textarea");return e.innerHTML=t,e.value},Tn={XML:"application/xml",XHTML:"application/xhtml+xml",HTML:"text/html",CSS:"text/css",SVG:"image/svg+xml"},xf={name:[0,32,"string"],type:[60,4,"string"],creator:[64,4,"string"],numRecords:[76,2,"uint"]},Tf={compression:[0,2,"uint"],numTextRecords:[8,2,"uint"],recordSize:[10,2,"uint"],encryption:[12,2,"uint"]},_f={magic:[16,4,"string"],length:[20,4,"uint"],type:[24,4,"uint"],encoding:[28,4,"uint"],uid:[32,4,"uint"],version:[36,4,"uint"],titleOffset:[84,4,"uint"],titleLength:[88,4,"uint"],localeRegion:[94,1,"uint"],localeLanguage:[95,1,"uint"],resourceStart:[108,4,"uint"],huffcdic:[112,4,"uint"],numHuffcdic:[116,4,"uint"],exthFlag:[128,4,"uint"],trailingFlags:[240,4,"uint"],indx:[244,4,"uint"]},Sf={resourceStart:[108,4,"uint"],fdst:[192,4,"uint"],numFdst:[196,4,"uint"],frag:[248,4,"uint"],skel:[252,4,"uint"],guide:[260,4,"uint"]},kf={magic:[0,4,"string"],length:[4,4,"uint"],count:[8,4,"uint"]},Xs={magic:[0,4,"string"],length:[4,4,"uint"],type:[8,4,"uint"],idxt:[20,4,"uint"],numRecords:[24,4,"uint"],encoding:[28,4,"uint"],language:[32,4,"uint"],total:[36,4,"uint"],ordt:[40,4,"uint"],ligt:[44,4,"uint"],numLigt:[48,4,"uint"],numCncx:[52,4,"uint"]},Af={magic:[0,4,"string"],length:[4,4,"uint"],numControlBytes:[8,4,"uint"]},Ef={magic:[0,4,"string"],offset1:[8,4,"uint"],offset2:[12,4,"uint"]},Cf={magic:[0,4,"string"],length:[4,4,"uint"],numEntries:[8,4,"uint"],codeLength:[12,4,"uint"]},Lf={magic:[0,4,"string"],numEntries:[8,4,"uint"]},Rf={flags:[8,4,"uint"],dataStart:[12,4,"uint"],keyLength:[16,4,"uint"],keyStart:[20,4,"uint"]},Df={1252:"windows-1252",65001:"utf-8"},Ys={100:["creator","string",!0],101:["publisher"],103:["description"],104:["isbn"],105:["subject","string",!0],106:["date"],108:["contributor","string",!0],109:["rights"],110:["subjectCode","string",!0],112:["source","string",!0],113:["asin"],121:["boundary","uint"],122:["fixedLayout"],125:["numResources","uint"],126:["originalResolution"],127:["zeroGutter"],128:["zeroMargin"],129:["coverURI"],132:["regionMagnification"],201:["coverOffset","uint"],202:["thumbnailOffset","uint"],503:["title"],524:["language","string",!0],527:["pageProgressionDirection"]},Mf={1:["ar","ar-SA","ar-IQ","ar-EG","ar-LY","ar-DZ","ar-MA","ar-TN","ar-OM","ar-YE","ar-SY","ar-JO","ar-LB","ar-KW","ar-AE","ar-BH","ar-QA"],2:["bg"],3:["ca"],4:["zh","zh-TW","zh-CN","zh-HK","zh-SG"],5:["cs"],6:["da"],7:["de","de-DE","de-CH","de-AT","de-LU","de-LI"],8:["el"],9:["en","en-US","en-GB","en-AU","en-CA","en-NZ","en-IE","en-ZA","en-JM",null,"en-BZ","en-TT","en-ZW","en-PH"],10:["es","es-ES","es-MX",null,"es-GT","es-CR","es-PA","es-DO","es-VE","es-CO","es-PE","es-AR","es-EC","es-CL","es-UY","es-PY","es-BO","es-SV","es-HN","es-NI","es-PR"],11:["fi"],12:["fr","fr-FR","fr-BE","fr-CA","fr-CH","fr-LU","fr-MC"],13:["he"],14:["hu"],15:["is"],16:["it","it-IT","it-CH"],17:["ja"],18:["ko"],19:["nl","nl-NL","nl-BE"],20:["no","nb","nn"],21:["pl"],22:["pt","pt-BR","pt-PT"],23:["rm"],24:["ro"],25:["ru"],26:["hr",null,"sr"],27:["sk"],28:["sq"],29:["sv","sv-SE","sv-FI"],30:["th"],31:["tr"],32:["ur"],33:["id"],34:["uk"],35:["be"],36:["sl"],37:["et"],38:["lv"],39:["lt"],41:["fa"],42:["vi"],43:["hy"],44:["az"],45:["eu"],46:["hsb"],47:["mk"],48:["st"],49:["ts"],50:["tn"],52:["xh"],53:["zu"],54:["af"],55:["ka"],56:["fo"],57:["hi"],58:["mt"],59:["se"],62:["ms"],63:["kk"],65:["sw"],67:["uz",null,"uz-UZ"],68:["tt"],69:["bn"],70:["pa"],71:["gu"],72:["or"],73:["ta"],74:["te"],75:["kn"],76:["ml"],77:["as"],78:["mr"],79:["sa"],82:["cy","cy-GB"],83:["gl","gl-ES"],87:["kok"],97:["ne"],98:["fy"]},Jr=(t,e)=>{let n=new t.constructor(t.length+e.length);return n.set(t),n.set(e,t.length),n},tl=(t,e,n)=>{let r=new t.constructor(t.length+e.length+n.length);return r.set(t),r.set(e,t.length),r.set(n,t.length+e.length),r},Pf=new TextDecoder,ir=t=>Pf.decode(t),it=t=>{if(!t)return;let e=t.byteLength,n=e===4?"getUint32":e===2?"getUint16":"getUint8";return new DataView(t)[n](0)},St=(t,e)=>Object.fromEntries(Array.from(Object.entries(t)).map(([n,[r,i,a]])=>[n,(a==="string"?ir:it)(e.slice(r,r+i))])),ba=t=>new TextDecoder(Df[t]),Yr=(t,e=0)=>{let n=0,r=0;for(let i of t.subarray(e,e+4))if(n=n<<7|(i&127)>>>0,r++,i&128)break;return{value:n,length:r}},Of=t=>{let e=0;for(let n of t.subarray(-4))n&128&&(e=0),e=e<<7|n&127;return e},nl=t=>{let e=0;for(;t>0;t=t>>1)(t&1)===1&&e++;return e},Ff=t=>{let e=0;for(;!(t&1);)t=t>>1,e++;return e},If=t=>{let e=[];for(let n=0;n<t.length;n++){let r=t[n];if(r===0)e.push(0);else if(r<=8)for(let i of t.subarray(n+1,(n+=r)+1))e.push(i);else if(r<=127)e.push(r);else if(r<=191){let i=r<<8|t[n+++1],a=(i&16383)>>>3,o=(i&7)+3;for(let s=0;s<o;s++)e.push(e[e.length-a])}else e.push(32,r^128)}return Uint8Array.from(e)},Nf=(t,e)=>{let n=e>>3,r=e+32,i=r>>3,a=0n;for(let o=n;o<=i;o++)a=a<<8n|BigInt(t[o]??0);return a>>8n-BigInt(r&7)&0xffffffffn},zf=async(t,e)=>{let n=await e(t.huffcdic),{magic:r,offset1:i,offset2:a}=St(Ef,n);if(r!=="HUFF")throw new Error("Invalid HUFF record");let o=Array.from({length:256},(c,d)=>i+d*4).map(c=>it(n.slice(c,c+4))).map(c=>[c&128,c&31,c>>>8]),s=[null].concat(Array.from({length:32},(c,d)=>a+d*8).map(c=>[it(n.slice(c,c+4)),it(n.slice(c+4,c+8))])),l=[];for(let c=1;c<t.numHuffcdic;c++){let d=await e(t.huffcdic+c),p=St(Cf,d);if(p.magic!=="CDIC")throw new Error("Invalid CDIC record");let h=Math.min(1<<p.codeLength,p.numEntries-l.length),b=d.slice(p.length);for(let g=0;g<h;g++){let m=it(b.slice(g*2,g*2+2)),f=it(b.slice(m,m+2)),y=f&32767,w=f&32768,A=new Uint8Array(b.slice(m+2,m+2+y));l.push([A,w])}}let u=c=>{let d=new Uint8Array,p=c.byteLength*8;for(let h=0;h<p;){let b=Number(Nf(c,h)),[g,m,f]=o[b>>>24];if(!g){for(;b>>>32-m<s[m][0];)m+=1;f=s[m][1]}if((h+=m)>p)break;let y=f-(b>>>32-m),[w,A]=l[y];A||(w=u(w),l[y]=[w,!0]),d=Jr(d,w)}return d};return u},Zr=async(t,e)=>{let n=await e(t),r=St(Xs,n);if(r.magic!=="INDX")throw new Error("Invalid INDX record");let i=ba(r.encoding),a=n.slice(r.length),o=St(Af,a);if(o.magic!=="TAGX")throw new Error("Invalid TAGX section");let s=(o.length-12)/4,l=Array.from({length:s},(p,h)=>new Uint8Array(a.slice(12+h*4,12+h*4+4))),u={},c=0;for(let p=0;p<r.numCncx;p++){let h=await e(t+r.numRecords+p+1),b=new Uint8Array(h);for(let g=0;g<b.byteLength;){let m=g,{value:f,length:y}=Yr(b,g);g+=y;let w=h.slice(g,g+f);g+=f,u[c+m]=i.decode(w)}c+=65536}let d=[];for(let p=0;p<r.numRecords;p++){let h=await e(t+1+p),b=new Uint8Array(h),g=St(Xs,h);if(g.magic!=="INDX")throw new Error("Invalid INDX record");for(let m=0;m<g.numRecords;m++){let f=g.idxt+4+2*m,y=it(h.slice(f,f+2)),w=it(h.slice(y,y+1)),A=ir(h.slice(y+1,y+1+w)),S=[],x=y+1+w,k=0,v=x+o.numControlBytes;for(let[_,C,R,D]of l){if(D&1){k++;continue}let I=x+k,M=it(h.slice(I,I+1))&R;if(M===R)if(nl(R)>1){let{value:N,length:z}=Yr(b,v);S.push([_,null,N,C]),v+=z}else S.push([_,1,null,C]);else S.push([_,M>>Ff(R),null,C])}let E={};for(let[_,C,R,D]of S){let I=[];if(C!=null)for(let M=0;M<C*D;M++){let{value:N,length:z}=Yr(b,v);I.push(N),v+=z}else{let M=0;for(;M<R;){let{value:N,length:z}=Yr(b,v);I.push(N),v+=z,M+=z}}E[_]=I}d.push({name:A,tagMap:E})}}return{table:d,cncx:u}},Bf=async(t,e)=>{let{table:n,cncx:r}=await Zr(t,e),i=n.map(({tagMap:o},s)=>({index:s,offset:o[1]?.[0],size:o[2]?.[0],label:r[o[3]]??"",headingLevel:o[4]?.[0],pos:o[6],parent:o[21]?.[0],firstChild:o[22]?.[0],lastChild:o[23]?.[0]})),a=o=>(o.firstChild==null||(o.children=i.filter(s=>s.parent===o.index).map(a)),o);return i.filter(o=>o.headingLevel===0).map(a)},Uf=(t,e)=>{let{magic:n,count:r}=St(kf,t);if(n!=="EXTH")throw new Error("Invalid EXTH header");let i=ba(e),a={},o=12;for(let s=0;s<r;s++){let l=it(t.slice(o,o+4)),u=it(t.slice(o+4,o+8));if(l in Ys){let[c,d,p]=Ys[l],h=t.slice(o+8,o+u),b=d==="uint"?it(h):i.decode(h);p?(a[c]??=[],a[c].push(b)):a[c]=b}o+=u}return a},$f=async(t,e)=>{let{flags:n,dataStart:r,keyLength:i,keyStart:a}=St(Rf,t),o=new Uint8Array(t.slice(r));if(n&2){let l=i===16?1024:1040,u=new Uint8Array(t.slice(a,a+i)),c=Math.min(l,o.length);for(var s=0;s<c;s++)o[s]=o[s]^u[s%u.length]}if(n&1)try{return await e(o)}catch{}return o},rl=async t=>ir(await t.slice(60,68).arrayBuffer())==="BOOKMOBI",ha=class{#e;#t;pdb;async open(e){this.#e=e;let n=St(xf,await e.slice(0,78).arrayBuffer());this.pdb=n;let r=await e.slice(78,78+n.numRecords*8).arrayBuffer();this.#t=Array.from({length:n.numRecords},(i,a)=>it(r.slice(a*8,a*8+4))).map((i,a,o)=>[i,o[a+1]])}loadRecord(e){let n=this.#t[e];if(!n)throw new RangeError("Record index out of bounds");return this.#e.slice(...n).arrayBuffer()}async loadMagic(e){let n=this.#t[e][0];return ir(await this.#e.slice(n,n+4).arrayBuffer())}},Qr=class extends ha{#e=0;#t;#n;#r;#i;#a;constructor({unzlib:e}){super(),this.unzlib=e}async open(e){await super.open(e),this.headers=this.#o(await super.loadRecord(0)),this.#t=this.headers.mobi.resourceStart;let n=this.headers.mobi.version>=8;if(!n){let r=this.headers.exth?.boundary;if(r<4294967295)try{this.headers=this.#o(await super.loadRecord(r)),this.#e=r,n=!0}catch{}}return await this.#s(),n?new ga(this).init():new ma(this).init()}#o(e){let n=St(Tf,e),r=St(_f,e);if(r.magic!=="MOBI")throw new Error("Missing MOBI header");let{titleOffset:i,titleLength:a,localeLanguage:o,localeRegion:s}=r;r.title=e.slice(i,i+a);let l=Mf[o];r.language=l?.[s>>2]??l?.[0];let u=r.exthFlag&64?Uf(e.slice(r.length+16),r.encoding):null,c=r.version>=8?St(Sf,e):null;return{palmdoc:n,mobi:r,exth:u,kf8:c}}async#s(){let{palmdoc:e,mobi:n}=this.headers;this.#n=ba(n.encoding),this.#r=new TextEncoder;let{compression:r}=e;if(this.#i=r===1?s=>s:r===2?If:r===17480?await zf(n,this.loadRecord.bind(this)):null,!this.#i)throw new Error("Unknown compression type");let{trailingFlags:i}=n,a=i&1,o=nl(i>>>1);this.#a=s=>{for(let l=0;l<o;l++){let u=Of(s);s=s.subarray(0,-u)}if(a){let l=(s[s.length-1]&3)+1;s=s.subarray(0,-l)}return s}}decode(...e){return this.#n.decode(...e)}encode(...e){return this.#r.encode(...e)}loadRecord(e){return super.loadRecord(this.#e+e)}loadMagic(e){return super.loadMagic(this.#e+e)}loadText(e){return this.loadRecord(e+1).then(n=>new Uint8Array(n)).then(this.#a).then(this.#i)}async loadResource(e){let n=await super.loadRecord(this.#t+e),r=ir(n.slice(0,4));return r==="FONT"?$f(n,this.unzlib):r==="VIDE"||r==="AUDI"?n.slice(12):n}getNCX(){let e=this.headers.mobi.indx;if(e<4294967295)return Bf(e,this.loadRecord.bind(this))}getMetadata(){let{mobi:e,exth:n}=this.headers;return{identifier:e.uid.toString(),title:an(n?.title||this.decode(e.title)),author:n?.creator?.map(an),publisher:an(n?.publisher),language:n?.language??e.language,published:n?.date,description:an(n?.description),subject:n?.subject?.map(an),rights:an(n?.rights)}}async getCover(){let{exth:e}=this.headers,n=e?.coverOffset<4294967295?e?.coverOffset:e?.thumbnailOffset<4294967295?e?.thumbnailOffset:null;if(n!=null){let r=await this.loadResource(n);return new Blob([r])}}},Zs=/<\s*(?:mbp:)?pagebreak[^>]*>/gi,Hf=/<[^<>]+filepos=['"]{0,1}(\d+)[^<>]*>/gi,ma=class{parser=new DOMParser;serializer=new XMLSerializer;#e=new Map;#t=new Map;#n=new Map;#r;#i=[];#a=Tn.HTML;constructor(e){this.mobi=e}async init(){let e=new Uint8Array;for(let i=0;i<this.mobi.headers.palmdoc.numTextRecords;i++)e=Jr(e,await this.mobi.loadText(i));let n=Array.from(new Uint8Array(e),i=>String.fromCharCode(i)).join("");this.#r=[0].concat(Array.from(n.matchAll(Zs),i=>i.index)).map((i,a,o)=>n.slice(i,o[a+1])).map(i=>Uint8Array.from(i,a=>a.charCodeAt(0))).map(i=>({book:this,raw:i})).reduce((i,a)=>{let o=i[i.length-1];return a.start=o?.end??0,a.end=a.start+a.raw.byteLength,i.concat(a)},[]),this.sections=this.#r.map((i,a)=>({id:a,load:()=>this.loadSection(i),createDocument:()=>this.createDocument(i),size:i.end-i.start}));let r=[];try{let i=await this.mobi.getNCX(),a=({label:o,offset:s,children:l})=>{let u=s.toString().padStart(10,"0"),c=`filepos:${u}`;return r.push(u),o=an(o),{label:o,href:c,subitems:l?.map(a)}};if(this.toc=i?.map(a),this.landmarks=await this.getGuide(),!this.toc){let o=this.landmarks.find(({type:s})=>s?.includes("toc"))?.href;if(o){let{index:s}=this.resolveHref(o),l=await this.sections[s].createDocument();this.toc=Array.from(l.querySelectorAll("a[filepos]"),u=>({label:u.innerText?.trim(),href:`filepos:${u.getAttribute("filepos")}`}))}}}catch{}return this.#i=[...new Set(r.concat(Array.from(n.matchAll(Hf),i=>i[1])))].map(i=>({filepos:i,number:Number(i)})).sort((i,a)=>i.number-a.number),this.metadata=this.mobi.getMetadata(),this.getCover=this.mobi.getCover.bind(this.mobi),this}async getGuide(){let e=await this.createDocument(this.#r[0]);return Array.from(e.getElementsByTagName("reference"),n=>({label:n.getAttribute("title"),type:n.getAttribute("type")?.split(/\s/),href:`filepos:${n.getAttribute("filepos")}`}))}async loadResource(e){if(this.#e.has(e))return this.#e.get(e);let n=await this.mobi.loadResource(e),r=URL.createObjectURL(new Blob([n]));return this.#e.set(e,r),r}async loadRecindex(e){return this.loadResource(Number(e)-1)}async replaceResources(e){for(let n of e.querySelectorAll("img[recindex]")){let r=n.getAttribute("recindex");try{n.src=await this.loadRecindex(r)}catch{}}for(let n of e.querySelectorAll("[mediarecindex]")){let r=n.getAttribute("mediarecindex"),i=n.getAttribute("recindex");try{n.src=await this.loadRecindex(r),i&&(n.poster=await this.loadRecindex(i))}catch{}}for(let n of e.querySelectorAll("[filepos]")){let r=n.getAttribute("filepos");n.href=`filepos:${r}`}}async loadText(e){if(this.#t.has(e))return this.#t.get(e);let{raw:n}=e,r=this.#i.filter(({number:o})=>o>=e.start&&o<e.end).map(o=>({...o,offset:o.number-e.start})),i=n;r.length&&(i=n.subarray(0,r[0].offset),r.forEach(({filepos:o,offset:s},l)=>{let u=r[l+1],c=this.mobi.encode(`<a id="filepos${o}"></a>`);i=tl(i,c,n.subarray(s,u?.offset))}));let a=this.mobi.decode(i).replaceAll(Zs,"");return this.#t.set(e,a),a}async createDocument(e){let n=await this.loadText(e);return this.parser.parseFromString(n,this.#a)}async loadSection(e){if(this.#n.has(e))return this.#n.get(e);let n=await this.createDocument(e),r=n.createElement("style");n.head.append(r),r.append(n.createTextNode(`blockquote {
            margin-block-start: 0;
            margin-block-end: 0;
            margin-inline-start: 1em;
            margin-inline-end: 0;
        }`)),await this.replaceResources(n);let i=this.serializer.serializeToString(n),a=URL.createObjectURL(new Blob([i],{type:this.#a}));return this.#n.set(e,a),a}resolveHref(e){let n=e.match(/filepos:(.*)/)[1],r=Number(n);return{index:this.#r.findIndex(o=>o.end>r),anchor:o=>o.getElementById(`filepos${n}`)}}splitTOCHref(e){let n=e.match(/filepos:(.*)/)[1],r=Number(n);return[this.#r.findIndex(a=>a.end>r),`filepos${n}`]}getTOCFragment(e,n){return e.getElementById(n)}isExternal(e){return/^(?!blob|filepos)\w+:/i.test(e)}},il=/kindle:(flow|embed):(\w+)(?:\?mime=(\w+\/[-+.\w]+))?/,jf=/kindle:pos:fid:(\w+):off:(\w+)/,Wf=t=>{let[e,n,r]=t.match(il).slice(1);return{resourceType:e,id:parseInt(n,32),type:r}},Js=t=>{let[e,n]=t.match(jf).slice(1);return{fid:parseInt(e,32),off:parseInt(n,32)}},Qs=(t=0,e=0)=>`kindle:pos:fid:${t.toString(32).toUpperCase().padStart(4,"0")}:off:${e.toString(32).toUpperCase().padStart(10,"0")}`,el=t=>{let e=t.match(/\s(id|name|aid)\s*=\s*['"]([^'"]*)['"]/i);if(!e)return;let[,n,r]=e;return`[${n}="${CSS.escape(r)}"]`},qf=async(t,e,n)=>{let r=[];t.replace(e,(...a)=>(r.push(a),null));let i=[];for(let a of r)i.push(await n(...a));return t.replace(e,()=>i.shift())},ga=class{parser=new DOMParser;#e=new Map;#t=new Map;#n=new Map;#r={};#i;#a;#o=new Uint8Array;#s=new Uint8Array;#l=-1;#d=-1;#c=!0;#u=Tn.XHTML;constructor(e){this.mobi=e}async init(){let e=this.mobi.loadRecord.bind(this.mobi),{kf8:n}=this.mobi.headers;try{let s=await e(n.fdst),l=St(Lf,s);if(l.magic!=="FDST")throw new Error("Missing FDST record");let u=Array.from({length:l.numEntries},(c,d)=>12+d*8).map(c=>[it(s.slice(c,c+4)),it(s.slice(c+4,c+8))]);this.#r.fdstTable=u,this.#a=u[u.length-1][1]}catch{}let r=(await Zr(n.skel,e)).table.map(({name:s,tagMap:l},u)=>({index:u,name:s,numFrag:l[1][0],offset:l[6][0],length:l[6][1]})),i=await Zr(n.frag,e),a=i.table.map(({name:s,tagMap:l})=>({insertOffset:parseInt(s),selector:i.cncx[l[2][0]],index:l[4][0],offset:l[6][0],length:l[6][1]}));this.#r.skelTable=r,this.#r.fragTable=a,this.#i=r.reduce((s,l)=>{let u=s[s.length-1],c=u?.fragEnd??0,d=c+l.numFrag,p=a.slice(c,d),h=l.length+p.map(g=>g.length).reduce((g,m)=>g+m),b=(u?.totalLength??0)+h;return s.concat({skel:l,frags:p,fragEnd:d,length:h,totalLength:b})},[]),this.#i.unshift({frags:[]}),this.sections=this.#i.map((s,l)=>s.frags.length?{id:l,load:()=>this.loadSection(s),createDocument:()=>this.createDocument(s),size:s.length}:{linear:"no"});try{let s=await this.mobi.getNCX(),l=({label:u,pos:c,children:d})=>{let[p,h]=c,b=Qs(p,h),g=this.#t.get(p);return g?g.push(h):this.#t.set(p,[h]),{label:an(u),href:b,subitems:d?.map(l)}};this.toc=s?.map(l),this.landmarks=await this.getGuide()}catch{}let{exth:o}=this.mobi.headers;return this.dir=o.pageProgressionDirection,this.rendition={layout:o.fixedLayout==="true"?"pre-paginated":"reflowable",viewport:Object.fromEntries(o.originalResolution?.split("x")?.slice(0,2)?.map((s,l)=>[l?"height":"width",s])??[])},this.metadata=this.mobi.getMetadata(),this.getCover=this.mobi.getCover.bind(this.mobi),this}async getResourcesByMagic(e){let n={},r=this.mobi.headers.kf8.resourceStart,i=this.mobi.pdb.numRecords;for(let a=r;a<i;a++)try{let o=await this.mobi.loadMagic(a),s=e.find(l=>l===o);s&&(n[s]=a)}catch{}return n}async getGuide(){let e=this.mobi.headers.kf8.guide;if(e<4294967295){let n=this.mobi.loadRecord.bind(this.mobi),{table:r,cncx:i}=await Zr(e,n);return r.map(({name:a,tagMap:o})=>({label:i[o[1][0]]??"",type:a?.split(/\s/),href:Qs(o[6]?.[0]??o[3]?.[0])}))}}async loadResourceBlob(e){let{resourceType:n,id:r,type:i}=Wf(e),a=n==="flow"?await this.loadFlow(r):await this.mobi.loadResource(r-1),o=[Tn.XHTML,Tn.HTML,Tn.CSS,Tn.SVG].includes(i)?await this.replaceResources(this.mobi.decode(a)):a;return new Blob([o],{type:i})}async loadResource(e){if(this.#e.has(e))return this.#e.get(e);let n=await this.loadResourceBlob(e),r=URL.createObjectURL(n);return this.#e.set(e,r),r}replaceResources(e){let n=new RegExp(il,"g");return qf(e,n,this.loadResource.bind(this))}async loadRaw(e,n){let r=n-this.#o.length,i=this.#a==null?1/0:this.#a-this.#s.length-e;if(r<0||r<i){for(;this.#o.length<n;){let o=++this.#l,s=await this.mobi.loadText(o);this.#o=Jr(this.#o,s)}return this.#o.slice(e,n)}for(;this.#a-this.#s.length>e;){let o=this.mobi.headers.palmdoc.numTextRecords-1-++this.#d,s=await this.mobi.loadText(o);this.#s=Jr(s,this.#s)}let a=this.#a-this.#s.length;return this.#s.slice(e-a,n-a)}loadFlow(e){if(e<4294967295)return this.loadRaw(...this.#r.fdstTable[e])}async loadText(e){let{skel:n,frags:r,length:i}=e,a=await this.loadRaw(n.offset,n.offset+i),o=a.slice(0,n.length);for(let s of r){let l=s.insertOffset-n.offset,u=n.length+s.offset,c=a.slice(u,u+s.length);o=tl(o.slice(0,l),c,o.slice(l));let d=this.#t.get(s.index);if(d)for(let p of d){let h=this.mobi.decode(c).slice(p),b=el(h);this.#f(s.index,p,b)}}return this.mobi.decode(o)}async createDocument(e){let n=await this.loadText(e);return this.parser.parseFromString(n,this.#u)}async loadSection(e){if(this.#e.has(e))return this.#e.get(e);let n=await this.loadText(e);this.#c&&this.parser.parseFromString(n,this.#u).querySelector("parsererror")&&(this.#u=Tn.HTML),this.#c&&(this.#c=!1);let r=await this.replaceResources(n),i=URL.createObjectURL(new Blob([r],{type:this.#u}));return this.#e.set(e,i),i}getIndexByFID(e){return this.#i.findIndex(n=>n.frags.some(r=>r.index===e))}#f(e,n,r){let i=this.#n.get(e);if(i)i.set(n,r);else{let a=new Map;this.#n.set(e,a),a.set(n,r)}}async resolveHref(e){let{fid:n,off:r}=Js(e),i=this.getIndexByFID(n);if(i<0)return;let a=this.#n.get(n)?.get(r);if(a)return{index:i,anchor:b=>b.querySelector(a)};let{skel:o,frags:s}=this.#i[i],l=s.find(b=>b.index===n),u=o.offset+o.length+l.offset,c=await this.loadRaw(u,u+l.length),d=this.mobi.decode(c).slice(r),p=el(d);return this.#f(n,r,p),{index:i,anchor:b=>b.querySelector(p)}}splitTOCHref(e){let n=Js(e);return[this.getIndexByFID(n.fid),n]}getTOCFragment(e,{fid:n,off:r}){let i=this.#n.get(n)?.get(r);return e.querySelector(i)}isExternal(e){return/^(?!blob|kindle)\w+:/i.test(e)}};var Ge={CONTAINER:"urn:oasis:names:tc:opendocument:xmlns:container",XHTML:"http://www.w3.org/1999/xhtml",OPF:"http://www.idpf.org/2007/opf",EPUB:"http://www.idpf.org/2007/ops",DC:"http://purl.org/dc/elements/1.1/",DCTERMS:"http://purl.org/dc/terms/",ENC:"http://www.w3.org/2001/04/xmlenc#",NCX:"http://www.daisy.org/z3986/2005/ncx/",XLINK:"http://www.w3.org/1999/xlink",SMIL:"http://www.w3.org/ns/SMIL"},at={XML:"application/xml",NCX:"application/x-dtbncx+xml",XHTML:"application/xhtml+xml",HTML:"text/html",CSS:"text/css",SVG:"image/svg+xml",JS:/\/(x-)?(javascript|ecmascript)/},ti=t=>t.toLowerCase().replace(/[-:](.)/g,(e,n)=>n.toUpperCase()),Kf=t=>t?t.trim().replace(/\s{2,}/g," "):"",ar=(t,e,n)=>n?r=>r.getAttribute(t)?.split(/\s/)?.includes(e):typeof e=="function"?r=>e(r.getAttribute(t)):r=>r.getAttribute(t)===e,ni=(...t)=>e=>e?Object.fromEntries(t.map(n=>[ti(n),e.getAttribute(n)])):null,sn=t=>Kf(t?.textContent),sr=(t,e)=>{let n=t.lookupNamespaceURI(null)===e||t.lookupPrefix(e),r=n?(i,a)=>o=>o.namespaceURI===e&&o.localName===a:(i,a)=>o=>o.localName===a;return{$:(i,a)=>[...i.children].find(r(i,a)),$$:(i,a)=>[...i.children].filter(r(i,a)),$$$:n?(i,a)=>[...i.getElementsByTagNameNS(e,a)]:(i,a)=>[...i.getElementsByTagName(e,a)]}},Mn=(t,e)=>{try{if(e.includes(":"))return new URL(t,e);let n="file:///";return decodeURI(new URL(t,n+e).href.replace(n,""))}catch{return t}},sl=t=>/^(?!blob)\w+:/i.test(t),Vf=(t,e)=>{if(!t)return e;let n=t.replace(/\/$/,"").split("/"),r=e.replace(/\/$/,"").split("/"),i=(n.length>r.length?n:r).findIndex((a,o)=>n[o]!==r[o]);return i<0?"":Array(n.length-i).fill("..").concat(r.slice(i)).join("/")},Gf=t=>t.slice(0,t.lastIndexOf("/")+1),ei=async(t,e,n)=>{let r=[];t.replace(e,(...a)=>(r.push(a),null));let i=[];for(let a of r)i.push(await n(...a));return t.replace(e,()=>i.shift())},Xf=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),on={attrs:["dir","xml:lang"]},_n={name:"alternate-script",many:!0,...on,props:["file-as"]},al={many:!0,...on,props:[{name:"role",many:!0,attrs:["scheme"]},"file-as",_n]},Yf=[{name:"title",many:!0,...on,props:["title-type","display-seq","file-as",_n]},{name:"identifier",many:!0,props:[{name:"identifier-type",attrs:["scheme"]}]},{name:"language",many:!0},{name:"creator",...al},{name:"contributor",...al},{name:"publisher",...on,props:["file-as",_n]},{name:"description",...on,props:[_n]},{name:"rights",...on,props:[_n]},{name:"date"},{name:"dcterms:modified",type:"meta"},{name:"subject",many:!0,...on,props:["term","authority",_n]},{name:"belongs-to-collection",type:"meta",many:!0,...on,props:["collection-type","group-position","dcterms:identifier","file-as",_n,{name:"belongs-to-collection",recursive:!0}]}],Zf=t=>{let{$:e,$$:n}=sr(t,Ge.OPF),r=e(t.documentElement,"metadata"),i=Array.from(r.children),a=(d,p)=>{if(!p)return null;let{props:h=[],attrs:b=[]}=d,g=sn(p);if(!h.length&&!b.length)return g;let m=p.getAttribute("id"),f=m?i.filter(ar("refines","#"+m)):[];return Object.fromEntries([["value",g]].concat(h.map(y=>{let{many:w,recursive:A}=y,S=typeof y=="string"?y:y.name,x=ar("property",S),k=A?d:y;return[ti(S),w?f.filter(x).map(v=>a(k,v)):a(k,f.find(x))]})).concat(b.map(y=>[ti(y),p.getAttribute(y)])))},o=i.filter(ar("refines",null)),s=Object.fromEntries(Yf.map(d=>{let{type:p,name:h,many:b}=d,g=p==="meta"?m=>m.namespaceURI===Ge.OPF&&m.getAttribute("property")===h:m=>m.namespaceURI===Ge.DC&&m.localName===h;return[ti(h),b?o.filter(g).map(m=>a(d,m)):a(d,o.find(g))]})),l=d=>Object.fromEntries(n(r,"meta").filter(ar("property",p=>p?.startsWith(d))).map(p=>[p.getAttribute("property").replace(d,""),sn(p)])),u=l("rendition:"),c=l("media:");return{metadata:s,rendition:u,media:c}},Jf=(t,e=n=>n)=>{let{$:n,$$:r,$$$:i}=sr(t,Ge.XHTML),a=b=>b?decodeURI(e(b)):null,o=b=>g=>{let m=n(g,"a")??n(g,"span"),f=n(g,"ol"),y=a(m?.getAttribute("href")),A={label:sn(m)||m?.getAttribute("title"),href:y,subitems:s(f)};return b&&(A.type=m?.getAttributeNS(Ge.EPUB,"type")?.split(/\s/)),A},s=(b,g)=>b?r(b,"li").map(o(g)):null,l=(b,g)=>s(n(b,"ol"),g),u=i(t,"nav"),c=null,d=null,p=null,h=[];for(let b of u){let g=b.getAttributeNS(Ge.EPUB,"type")?.split(/\s/)??[];g.includes("toc")?c??=l(b):g.includes("page-list")?d??=l(b):g.includes("landmarks")?p??=l(b,!0):h.push({label:sn(b.firstElementChild),type:g,list:l(b)})}return{toc:c,pageList:d,landmarks:p,others:h}},Qf=(t,e=n=>n)=>{let{$:n,$$:r}=sr(t,Ge.NCX),i=l=>l?decodeURI(e(l)):null,a=l=>{let u=n(l,"navLabel"),c=n(l,"content"),d=sn(u),p=i(c.getAttribute("src"));if(l.localName==="navPoint"){let h=r(l,"navPoint");return{label:d,href:p,subitems:h.length?h.map(a):null}}return{label:d,href:p}},o=(l,u)=>r(l,u).map(a),s=(l,u)=>{let c=n(t.documentElement,l);return c?o(c,u):null};return{toc:s("navMap","navPoint"),pageList:s("pageList","pageTarget"),others:r(t.documentElement,"navList").map(l=>({label:sn(n(l,"navLabel")),list:o(l,"navTarget")}))}},ya=t=>{if(!t)return;let e=t.split(":").map(o=>parseFloat(o));if(e.length===3){let[o,s,l]=e;return o*60*60+s*60+l}if(e.length===2){let[o,s]=e;return o*60+s}let[n,r]=t.split(/(?=[^\d.])/),i=parseFloat(n),a=r==="h"?60*60:r==="min"?60:r==="ms"?.001:1;return i*a},eh=(t,e=n=>n)=>{let{$:n,$$$:r}=sr(t,Ge.SMIL),i=a=>a?decodeURI(e(a)):null;return r(t,"par").map(a=>{let o=n(a,"text")?.getAttribute("src")?.split("#")?.[1],s=n(a,"audio");return s?{id:o,audio:{src:i(s.getAttribute("src")),clipBegin:ya(s.getAttribute("clipBegin")),clipEnd:ya(s.getAttribute("clipEnd"))}}:{id:o}})},th=/([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})/,nh=t=>{for(let e of t.getElementsByTagNameNS(Ge.DC,"identifier")){let[n]=sn(e).split(":").slice(-1);if(th.test(n))return n}return""},ll=t=>sn(t.getElementById(t.documentElement.getAttribute("unique-identifier"))??t.getElementsByTagNameNS(Ge.DC,"identifier")[0]),ol=async(t,e,n)=>{let r=new Uint8Array(await n.slice(0,e).arrayBuffer());e=Math.min(e,r.length);for(var i=0;i<e;i++)r[i]=r[i]^t[i%t.length];return new Blob([r,n.slice(e)],{type:n.type})},rh=async t=>{let e=new TextEncoder().encode(t),n=await globalThis.crypto.subtle.digest("SHA-1",e);return new Uint8Array(n)},ih=(t=rh)=>({"http://www.idpf.org/2008/embedding":{key:e=>t(ll(e).replaceAll(/[\u0020\u0009\u000d\u000a]/g,"")),decode:(e,n)=>ol(e,1040,n)},"http://ns.adobe.com/pdf/enc#RC":{key:e=>{let n=nh(e).replaceAll("-","");return Uint8Array.from({length:16},(r,i)=>parseInt(n.slice(i*2,i*2+2),16))},decode:(e,n)=>ol(e,1024,n)}}),wa=class{#e=new Map;#t=new Map;#n;constructor(e){this.#n=e}async init(e,n){if(!e)return;let r=Array.from(e.getElementsByTagNameNS(Ge.ENC,"EncryptedData"),i=>({algorithm:i.getElementsByTagNameNS(Ge.ENC,"EncryptionMethod")[0]?.getAttribute("Algorithm"),uri:i.getElementsByTagNameNS(Ge.ENC,"CipherReference")[0]?.getAttribute("URI")}));for(let{algorithm:i,uri:a}of r){if(!this.#t.has(i)){let o=this.#n[i];if(!o)continue;let s=await o.key(n);this.#t.set(i,l=>o.decode(s,l))}this.#e.set(a,i)}}getDecoder(e){return this.#t.get(this.#e.get(e))??(n=>n)}},va=class{constructor({opf:e,resolveHref:n}){this.opf=e;let{$:r,$$:i,$$$:a}=sr(e,Ge.OPF),o=r(e.documentElement,"manifest"),s=r(e.documentElement,"spine"),l=i(s,"itemref");this.manifest=i(o,"item").map(ni("href","id","media-type","properties","media-overlay")).map(c=>(c.href=n(c.href),c.properties=c.properties?.split(/\s/),c)),this.spine=l.map(ni("idref","id","linear","properties")).map(c=>(c.properties=c.properties?.split(/\s/),c)),this.pageProgressionDirection=s.getAttribute("page-progression-direction"),this.navPath=this.getItemByProperty("nav")?.href,this.ncxPath=(this.getItemByID(s.getAttribute("toc"))??this.manifest.find(c=>c.mediaType===at.NCX))?.href;let u=r(e.documentElement,"guide");u&&(this.guide=i(u,"reference").map(ni("type","title","href")).map(({type:c,title:d,href:p})=>({label:d,type:c.split(/\s/),href:n(p)}))),this.cover=this.getItemByProperty("cover-image")??this.getItemByID(a(e,"meta").find(ar("name","cover"))?.getAttribute("content"))??this.getItemByHref(this.guide?.find(c=>c.type.includes("cover"))?.href),this.cfis=Ps(l)}getItemByID(e){return this.manifest.find(n=>n.id===e)}getItemByHref(e){return this.manifest.find(n=>n.href===e)}getItemByProperty(e){return this.manifest.find(n=>n.properties?.includes(e))}resolveCFI(e){let n=Zt(e),r=(n.parent??n).shift(),i=sa(this.opf,r);i&&i.nodeName!=="idref"&&(r.at(-1).id=null,i=sa(this.opf,r));let a=i?.getAttribute("idref");return{index:this.spine.findIndex(l=>l.idref===a),anchor:l=>zr(l,n)}}},xa=class{#e=new Map;#t=new Map;#n=new Map;allowScript=!1;constructor({loadText:e,loadBlob:n,resources:r}){this.loadText=e,this.loadBlob=n,this.manifest=r.manifest,this.assets=r.manifest}createURL(e,n,r,i){if(!n)return"";let a=URL.createObjectURL(new Blob([n],{type:r}));if(this.#e.set(e,a),this.#n.set(e,1),i){let o=this.#t.get(i);o?o.push(e):this.#t.set(i,[e])}return a}ref(e,n){let r=this.#t.get(n);return r?.includes(e)||(this.#n.set(e,this.#n.get(e)+1),r?r.push(e):this.#t.set(n,[e])),this.#e.get(e)}unref(e){if(!this.#n.has(e))return;let n=this.#n.get(e)-1;if(n<1){URL.revokeObjectURL(this.#e.get(e)),this.#e.delete(e),this.#n.delete(e);let r=this.#t.get(e);if(r)for(;r.length;)this.unref(r.pop());this.#t.delete(e)}else this.#n.set(e,n)}async loadItem(e,n=[]){if(!e)return null;let{href:r,mediaType:i}=e,a=at.JS.test(e.mediaType);if(a&&!this.allowScript)return null;let o=n.at(-1);return this.#e.has(r)?this.ref(r,o):(a||[at.XHTML,at.HTML,at.CSS,at.SVG].includes(i))&&n.every(l=>l!==r)?this.loadReplaced(e,n):this.createURL(r,await this.loadBlob(r),i,o)}async loadHref(e,n,r=[]){if(sl(e))return e;let i=Mn(e,n),a=this.manifest.find(o=>o.href===i);return a?this.loadItem(a,r.concat(n)):e}async loadReplaced(e,n=[]){let{href:r,mediaType:i}=e,a=n.at(-1),o=await this.loadText(r);if(!o)return null;if([at.XHTML,at.HTML,at.SVG].includes(i)){let l=new DOMParser().parseFromString(o,i);if(i===at.XHTML&&l.querySelector("parsererror")&&(e.mediaType=at.HTML,l=new DOMParser().parseFromString(o,e.mediaType)),[at.XHTML,at.SVG].includes(e.mediaType)){let d=l.firstChild;for(;d instanceof ProcessingInstruction;){if(d.data){let p=await ei(d.data,/(?:^|\s*)(href\s*=\s*['"])([^'"]*)(['"])/i,(h,b,g,m)=>this.loadHref(g,r,n).then(f=>`${b}${f}${m}`));d.replaceWith(l.createProcessingInstruction(d.target,p))}d=d.nextSibling}}let u=async(d,p)=>d.setAttribute(p,await this.loadHref(d.getAttribute(p),r,n));for(let d of l.querySelectorAll("link[href]"))await u(d,"href");for(let d of l.querySelectorAll("[src]"))await u(d,"src");for(let d of l.querySelectorAll("[poster]"))await u(d,"poster");for(let d of l.querySelectorAll("object[data]"))await u(d,"data");for(let d of l.querySelectorAll("[*|href]:not([href]"))d.setAttributeNS(Ge.XLINK,"href",await this.loadHref(d.getAttributeNS(Ge.XLINK,"href"),r,n));for(let d of l.querySelectorAll("style"))d.textContent&&(d.textContent=await this.replaceCSS(d.textContent,r,n));for(let d of l.querySelectorAll("[style]"))d.setAttribute("style",await this.replaceCSS(d.getAttribute("style"),r,n));let c=new XMLSerializer().serializeToString(l);return this.createURL(r,c,e.mediaType,a)}let s=i===at.CSS?await this.replaceCSS(o,r,n):await this.replaceString(o,r,n);return this.createURL(r,s,i,a)}async replaceCSS(e,n,r=[]){let i=await ei(e,/url\(\s*["']?([^'"\n]*?)\s*["']?\s*\)/gi,(l,u)=>this.loadHref(u,n,r).then(c=>`url("${c}")`)),a=await ei(i,/@import\s*["']([^"'\n]*?)["']/gi,(l,u)=>this.loadHref(u,n,r).then(c=>`@import "${c}"`)),o=window?.innerWidth??800,s=window?.innerHeight??600;return a.replace(/-epub-/gi,"").replace(/(\d*\.?\d+)vw/gi,(l,u)=>parseFloat(u)*o/100+"px").replace(/(\d*\.?\d+)vh/gi,(l,u)=>parseFloat(u)*s/100+"px").replace(/page-break-(after|before|inside)/gi,(l,u)=>`-webkit-column-break-${u}`)}replaceString(e,n,r=[]){let i=new Map,a=this.assets.map(s=>{if(s.href===n)return;let l=Vf(Gf(n),s.href),u=encodeURI(l),c="/"+s.href,d=encodeURI(c),p=new Set([l,u,c,d]);for(let h of p)i.set(h,s);return Array.from(p)}).flat().filter(s=>s);if(!a.length)return e;let o=new RegExp(a.map(Xf).join("|"),"g");return ei(e,o,async s=>this.loadItem(i.get(s.replace(/^\//,"")),r.concat(n)))}unloadItem(e){this.unref(e?.href)}},ah=(t,e)=>t.getElementById(e)??t.querySelector(`[name="${CSS.escape(e)}"]`),oh=t=>{for(let e of t){if(e==="page-spread-left"||e==="rendition:page-spread-left")return"left";if(e==="page-spread-right"||e==="rendition:page-spread-right")return"right";if(e==="rendition:page-spread-center")return"center"}},or=class{parser=new DOMParser;#e;constructor({loadText:e,loadBlob:n,getSize:r,sha1:i}){this.loadText=e,this.loadBlob=n,this.getSize=r,this.#e=new wa(ih(i))}#t(e){return e?this.parser.parseFromString(e,at.XML):null}async#n(e){return this.#t(await this.loadText(e))}opfPath=null;async init(){let e=await this.#n("META-INF/container.xml");if(!e)throw new Error("Failed to load container file");let n=Array.from(e.getElementsByTagNameNS(Ge.CONTAINER,"rootfile"),ni("full-path","media-type")).filter(g=>g.mediaType==="application/oebps-package+xml");if(!n.length)throw new Error("No package document defined in container");let r=n[0].fullPath;this.opfPath=r;let i=await this.#n(r);if(!i)throw new Error("Failed to load package document");let a=await this.#n("META-INF/encryption.xml");await this.#e.init(a,i),this.resources=new va({opf:i,resolveHref:g=>Mn(g,r)});let o=new xa({loadText:this.loadText,loadBlob:g=>Promise.resolve(this.loadBlob(g)).then(this.#e.getDecoder(g)),resources:this.resources});this.sections=this.resources.spine.map((g,m)=>{let{idref:f,linear:y,properties:w=[]}=g,A=this.resources.getItemByID(f);return A?{id:this.resources.getItemByID(f)?.href,load:()=>o.loadItem(A),unload:()=>o.unloadItem(A),createDocument:()=>this.loadDocument(A),size:this.getSize(A.href),cfi:this.resources.cfis[m],linear:y,pageSpread:oh(w),resolveHref:S=>Mn(S,A.href),loadMediaOverlay:()=>this.loadMediaOverlay(A)}:null}).filter(g=>g);let{navPath:s,ncxPath:l}=this.resources;if(s)try{let g=f=>Mn(f,s),m=Jf(await this.#n(s),g);this.toc=m.toc,this.pageList=m.pageList,this.landmarks=m.landmarks}catch{}if(!this.toc&&l)try{let g=f=>Mn(f,l),m=Qf(await this.#n(l),g);this.toc=m.toc,this.pageList=m.pageList}catch{}this.landmarks??=this.resources.guide;let{metadata:u,rendition:c,media:d}=Zf(i);this.rendition=c,this.media=d,d.duration=ya(d.duration),this.dir=this.resources.pageProgressionDirection,this.rawMetadata=u;let p=u?.title?.[0];this.metadata={title:p?.value,sortAs:p?.fileAs,language:u?.language,identifier:ll(i),description:u?.description?.value,publisher:u?.publisher?.value,published:u?.date,modified:u?.dctermsModified,subject:u?.subject?.filter(({value:g,code:m})=>g||m)?.map(({value:g,code:m,scheme:f})=>({name:g,code:m,scheme:f})),rights:u?.rights?.value};let h={art:"artist",aut:"author",bkp:"producer",clr:"colorist",edt:"editor",ill:"illustrator",trl:"translator",pbl:"publisher"},b=g=>m=>{let f=[...new Set(m.role?.map(({value:w,scheme:A})=>(!A||A==="marc:relators"?h[w]:null)??g))],y={name:m.value,sortAs:m.fileAs};return[f?.length?f:[g],y]};return u?.creator?.map(b("author"))?.concat(u?.contributor?.map?.(b("contributor")))?.forEach(([g,m])=>g.forEach(f=>{this.metadata[f]?this.metadata[f].push(m):this.metadata[f]=[m]})),this}async loadDocument(e){let n=await this.loadText(e.href);return this.parser.parseFromString(n,e.mediaType)}async loadMediaOverlay(e){let n=e.mediaOverlay;if(!n)return null;let r=this.resources.getItemByID(n),i=await this.#n(r.href);return eh(i,o=>Mn(o,r.href))}resolveCFI(e){return this.resources.resolveCFI(e)}resolveHref(e){let[n,r]=e.split("#"),i=this.resources.getItemByHref(decodeURI(n));return i?{index:this.resources.spine.findIndex(({idref:s})=>s===i.id),anchor:r?s=>ah(s,r):()=>0}:null}splitTOCHref(e){return e?.split("#")??[]}getTOCFragment(e,n){return e.getElementById(n)??e.querySelector(`[name="${CSS.escape(n)}"]`)}isExternal(e){return sl(e)}async getCover(){let e=this.resources?.cover;return e?.href?new Blob([await this.loadBlob(e.href)],{type:e.mediaType}):null}async getCalibreBookmarks(){let e=await this.loadText("META-INF/calibre_bookmarks.txt"),n="encoding=json+base64:";if(e?.startsWith(n)){let r=atob(e.slice(n.length));return JSON.parse(r)}}};var co={};$p(co,{BlobReader:()=>eo,BlobWriter:()=>to,Data64URIReader:()=>Mm,Data64URIWriter:()=>Pm,ERR_BAD_FORMAT:()=>hi,ERR_CENTRAL_DIRECTORY_NOT_FOUND:()=>Yc,ERR_DUPLICATED_NAME:()=>ru,ERR_ENCRYPTED:()=>Qc,ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND:()=>Xc,ERR_EOCDR_NOT_FOUND:()=>Vc,ERR_EOCDR_ZIP64_NOT_FOUND:()=>Gc,ERR_EXTRAFIELD_ZIP64_NOT_FOUND:()=>Jc,ERR_HTTP_RANGE:()=>br,ERR_INVALID_COMMENT:()=>iu,ERR_INVALID_ENCRYPTION_STRENGTH:()=>su,ERR_INVALID_ENTRY_COMMENT:()=>au,ERR_INVALID_ENTRY_NAME:()=>ou,ERR_INVALID_EXTRAFIELD_DATA:()=>cu,ERR_INVALID_EXTRAFIELD_TYPE:()=>lu,ERR_INVALID_PASSWORD:()=>Va,ERR_INVALID_SIGNATURE:()=>Ga,ERR_INVALID_VERSION:()=>qa,ERR_ITERATOR_COMPLETED_TOO_SOON:()=>Ac,ERR_LOCAL_FILE_HEADER_NOT_FOUND:()=>Zc,ERR_SPLIT_ZIP_FILE:()=>Wa,ERR_UNSUPPORTED_COMPRESSION:()=>ja,ERR_UNSUPPORTED_ENCRYPTION:()=>eu,ERR_UNSUPPORTED_FORMAT:()=>Ai,HttpRangeReader:()=>zm,HttpReader:()=>Pc,Reader:()=>hn,SplitDataReader:()=>ro,SplitDataWriter:()=>mr,SplitZipReader:()=>Hm,SplitZipWriter:()=>jm,TextReader:()=>Om,TextWriter:()=>Fm,Uint8ArrayReader:()=>Bm,Uint8ArrayWriter:()=>Um,Writer:()=>Qa,ZipReader:()=>Zm,ZipWriter:()=>og,configure:()=>_i,getMimeType:()=>Bh,initReader:()=>io,initStream:()=>Jt,initWriter:()=>ao,readUint8Array:()=>et,terminateWorkers:()=>_m});function xi(t){return Ti(t.map(([e,n])=>new Array(e).fill(n,0,e)))}function Ti(t){return t.reduce((e,n)=>e.concat(Array.isArray(n)?Ti(n):n),[])}var cl=[0,1,2,3].concat(...xi([[2,4],[2,5],[4,6],[4,7],[8,8],[8,9],[16,10],[16,11],[32,12],[32,13],[64,14],[64,15],[2,0],[1,16],[1,17],[2,18],[2,19],[4,20],[4,21],[8,22],[8,23],[16,24],[16,25],[32,26],[32,27],[64,28],[64,29]]));function Ce(){let t=this;function e(i){let a=t.dyn_tree,o=t.stat_desc.static_tree,s=t.stat_desc.extra_bits,l=t.stat_desc.extra_base,u=t.stat_desc.max_length,c,d,p,h,b,g,m=0;for(h=0;h<=15;h++)i.bl_count[h]=0;for(a[i.heap[i.heap_max]*2+1]=0,c=i.heap_max+1;c<573;c++)d=i.heap[c],h=a[a[d*2+1]*2+1]+1,h>u&&(h=u,m++),a[d*2+1]=h,!(d>t.max_code)&&(i.bl_count[h]++,b=0,d>=l&&(b=s[d-l]),g=a[d*2],i.opt_len+=g*(h+b),o&&(i.static_len+=g*(o[d*2+1]+b)));if(m!==0){do{for(h=u-1;i.bl_count[h]===0;)h--;i.bl_count[h]--,i.bl_count[h+1]+=2,i.bl_count[u]--,m-=2}while(m>0);for(h=u;h!==0;h--)for(d=i.bl_count[h];d!==0;)p=i.heap[--c],!(p>t.max_code)&&(a[p*2+1]!=h&&(i.opt_len+=(h-a[p*2+1])*a[p*2],a[p*2+1]=h),d--)}}function n(i,a){let o=0;do o|=i&1,i>>>=1,o<<=1;while(--a>0);return o>>>1}function r(i,a,o){let s=[],l=0,u,c,d;for(u=1;u<=15;u++)s[u]=l=l+o[u-1]<<1;for(c=0;c<=a;c++)d=i[c*2+1],d!==0&&(i[c*2]=n(s[d]++,d))}t.build_tree=function(i){let a=t.dyn_tree,o=t.stat_desc.static_tree,s=t.stat_desc.elems,l,u,c=-1,d;for(i.heap_len=0,i.heap_max=573,l=0;l<s;l++)a[l*2]!==0?(i.heap[++i.heap_len]=c=l,i.depth[l]=0):a[l*2+1]=0;for(;i.heap_len<2;)d=i.heap[++i.heap_len]=c<2?++c:0,a[d*2]=1,i.depth[d]=0,i.opt_len--,o&&(i.static_len-=o[d*2+1]);for(t.max_code=c,l=Math.floor(i.heap_len/2);l>=1;l--)i.pqdownheap(a,l);d=s;do l=i.heap[1],i.heap[1]=i.heap[i.heap_len--],i.pqdownheap(a,1),u=i.heap[1],i.heap[--i.heap_max]=l,i.heap[--i.heap_max]=u,a[d*2]=a[l*2]+a[u*2],i.depth[d]=Math.max(i.depth[l],i.depth[u])+1,a[l*2+1]=a[u*2+1]=d,i.heap[1]=d++,i.pqdownheap(a,1);while(i.heap_len>=2);i.heap[--i.heap_max]=i.heap[1],e(i),r(a,t.max_code,i.bl_count)}}Ce._length_code=[0,1,2,3,4,5,6,7].concat(...xi([[2,8],[2,9],[2,10],[2,11],[4,12],[4,13],[4,14],[4,15],[8,16],[8,17],[8,18],[8,19],[16,20],[16,21],[16,22],[16,23],[32,24],[32,25],[32,26],[31,27],[1,28]]));Ce.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0];Ce.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576];Ce.d_code=function(t){return t<256?cl[t]:cl[256+(t>>>7)]};Ce.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];Ce.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];Ce.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];Ce.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function Xe(t,e,n,r,i){let a=this;a.static_tree=t,a.extra_bits=e,a.extra_base=n,a.elems=r,a.max_length=i}var sh=[12,140,76,204,44,172,108,236,28,156,92,220,60,188,124,252,2,130,66,194,34,162,98,226,18,146,82,210,50,178,114,242,10,138,74,202,42,170,106,234,26,154,90,218,58,186,122,250,6,134,70,198,38,166,102,230,22,150,86,214,54,182,118,246,14,142,78,206,46,174,110,238,30,158,94,222,62,190,126,254,1,129,65,193,33,161,97,225,17,145,81,209,49,177,113,241,9,137,73,201,41,169,105,233,25,153,89,217,57,185,121,249,5,133,69,197,37,165,101,229,21,149,85,213,53,181,117,245,13,141,77,205,45,173,109,237,29,157,93,221,61,189,125,253,19,275,147,403,83,339,211,467,51,307,179,435,115,371,243,499,11,267,139,395,75,331,203,459,43,299,171,427,107,363,235,491,27,283,155,411,91,347,219,475,59,315,187,443,123,379,251,507,7,263,135,391,71,327,199,455,39,295,167,423,103,359,231,487,23,279,151,407,87,343,215,471,55,311,183,439,119,375,247,503,15,271,143,399,79,335,207,463,47,303,175,431,111,367,239,495,31,287,159,415,95,351,223,479,63,319,191,447,127,383,255,511,0,64,32,96,16,80,48,112,8,72,40,104,24,88,56,120,4,68,36,100,20,84,52,116,3,131,67,195,35,163,99,227],lh=xi([[144,8],[112,9],[24,7],[8,8]]);Xe.static_ltree=Ti(sh.map((t,e)=>[t,lh[e]]));var ch=[0,16,8,24,4,20,12,28,2,18,10,26,6,22,14,30,1,17,9,25,5,21,13,29,3,19,11,27,7,23],uh=xi([[30,5]]);Xe.static_dtree=Ti(ch.map((t,e)=>[t,uh[e]]));Xe.static_l_desc=new Xe(Xe.static_ltree,Ce.extra_lbits,256+1,286,15);Xe.static_d_desc=new Xe(Xe.static_dtree,Ce.extra_dbits,0,30,15);Xe.static_bl_desc=new Xe(null,Ce.extra_blbits,0,19,7);var dh=9,ph=8;function $t(t,e,n,r,i){let a=this;a.good_length=t,a.max_lazy=e,a.nice_length=n,a.max_chain=r,a.func=i}var Zl=0,di=1,kn=2,Pt=[new $t(0,0,0,0,Zl),new $t(4,4,8,4,di),new $t(4,5,16,8,di),new $t(4,6,32,32,di),new $t(4,4,16,16,kn),new $t(8,16,32,32,kn),new $t(8,16,128,128,kn),new $t(8,32,128,256,kn),new $t(32,128,258,1024,kn),new $t(32,258,258,4096,kn)],ri=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],Ot=0,ii=1,lr=2,ai=3,fh=32,Ta=42,oi=113,cr=666,_a=8,hh=0,Sa=1,mh=2,Me=3,pi=258,mt=pi+Me+1;function ul(t,e,n,r){let i=t[e*2],a=t[n*2];return i<a||i==a&&r[e]<=r[n]}function gh(){let t=this,e,n,r,i,a,o,s,l,u,c,d,p,h,b,g,m,f,y,w,A,S,x,k,v,E,_,C,R,D,I,M,N,z,Y=new Ce,te=new Ce,V=new Ce;t.depth=[];let ee,L,F,$,q,G;t.bl_count=[],t.heap=[],M=[],N=[],z=[];function ue(){u=2*a,d[h-1]=0;for(let P=0;P<h-1;P++)d[P]=0;_=Pt[C].max_lazy,D=Pt[C].good_length,I=Pt[C].nice_length,E=Pt[C].max_chain,S=0,f=0,k=0,y=v=Me-1,A=0,p=0}function he(){let P;for(P=0;P<286;P++)M[P*2]=0;for(P=0;P<30;P++)N[P*2]=0;for(P=0;P<19;P++)z[P*2]=0;M[256*2]=1,t.opt_len=t.static_len=0,L=F=0}function me(){Y.dyn_tree=M,Y.stat_desc=Xe.static_l_desc,te.dyn_tree=N,te.stat_desc=Xe.static_d_desc,V.dyn_tree=z,V.stat_desc=Xe.static_bl_desc,q=0,G=0,$=8,he()}t.pqdownheap=function(P,B){let O=t.heap,U=O[B],H=B<<1;for(;H<=t.heap_len&&(H<t.heap_len&&ul(P,O[H+1],O[H],t.depth)&&H++,!ul(P,U,O[H],t.depth));)O[B]=O[H],B=H,H<<=1;O[B]=U};function Z(P,B){let O=-1,U,H=P[0*2+1],X=0,se=7,Ve=4;H===0&&(se=138,Ve=3),P[(B+1)*2+1]=65535;for(let dt=0;dt<=B;dt++)U=H,H=P[(dt+1)*2+1],!(++X<se&&U==H)&&(X<Ve?z[U*2]+=X:U!==0?(U!=O&&z[U*2]++,z[16*2]++):X<=10?z[17*2]++:z[18*2]++,X=0,O=U,H===0?(se=138,Ve=3):U==H?(se=6,Ve=3):(se=7,Ve=4))}function ie(){let P;for(Z(M,Y.max_code),Z(N,te.max_code),V.build_tree(t),P=19-1;P>=3&&z[Ce.bl_order[P]*2+1]===0;P--);return t.opt_len+=3*(P+1)+5+5+4,P}function oe(P){t.pending_buf[t.pending++]=P}function le(P){oe(P&255),oe(P>>>8&255)}function J(P){oe(P>>8&255),oe(P&255&255)}function ae(P,B){let O,U=B;G>16-U?(O=P,q|=O<<G&65535,le(q),q=O>>>16-G,G+=U-16):(q|=P<<G&65535,G+=U)}function de(P,B){let O=P*2;ae(B[O]&65535,B[O+1]&65535)}function be(P,B){let O,U=-1,H,X=P[0*2+1],se=0,Ve=7,dt=4;for(X===0&&(Ve=138,dt=3),O=0;O<=B;O++)if(H=X,X=P[(O+1)*2+1],!(++se<Ve&&H==X)){if(se<dt)do de(H,z);while(--se!==0);else H!==0?(H!=U&&(de(H,z),se--),de(16,z),ae(se-3,2)):se<=10?(de(17,z),ae(se-3,3)):(de(18,z),ae(se-11,7));se=0,U=H,X===0?(Ve=138,dt=3):H==X?(Ve=6,dt=3):(Ve=7,dt=4)}}function re(P,B,O){let U;for(ae(P-257,5),ae(B-1,5),ae(O-4,4),U=0;U<O;U++)ae(z[Ce.bl_order[U]*2+1],3);be(M,P-1),be(N,B-1)}function Re(){G==16?(le(q),q=0,G=0):G>=8&&(oe(q&255),q>>>=8,G-=8)}function Ie(){ae(Sa<<1,3),de(256,Xe.static_ltree),Re(),1+$+10-G<9&&(ae(Sa<<1,3),de(256,Xe.static_ltree),Re()),$=7}function ve(P,B){let O,U,H;if(t.dist_buf[L]=P,t.lc_buf[L]=B&255,L++,P===0?M[B*2]++:(F++,P--,M[(Ce._length_code[B]+256+1)*2]++,N[Ce.d_code(P)*2]++),!(L&8191)&&C>2){for(O=L*8,U=S-f,H=0;H<30;H++)O+=N[H*2]*(5+Ce.extra_dbits[H]);if(O>>>=3,F<Math.floor(L/2)&&O<Math.floor(U/2))return!0}return L==ee-1}function De(P,B){let O,U,H=0,X,se;if(L!==0)do O=t.dist_buf[H],U=t.lc_buf[H],H++,O===0?de(U,P):(X=Ce._length_code[U],de(X+256+1,P),se=Ce.extra_lbits[X],se!==0&&(U-=Ce.base_length[X],ae(U,se)),O--,X=Ce.d_code(O),de(X,B),se=Ce.extra_dbits[X],se!==0&&(O-=Ce.base_dist[X],ae(O,se)));while(H<L);de(256,P),$=P[256*2+1]}function $e(){G>8?le(q):G>0&&oe(q&255),q=0,G=0}function ct(P,B,O){$e(),$=8,O&&(le(B),le(~B)),t.pending_buf.set(l.subarray(P,P+B),t.pending),t.pending+=B}function rn(P,B,O){ae((hh<<1)+(O?1:0),3),ct(P,B,!0)}function Tt(P,B,O){let U,H,X=0;C>0?(Y.build_tree(t),te.build_tree(t),X=ie(),U=t.opt_len+3+7>>>3,H=t.static_len+3+7>>>3,H<=U&&(U=H)):U=H=B+5,B+4<=U&&P!=-1?rn(P,B,O):H==U?(ae((Sa<<1)+(O?1:0),3),De(Xe.static_ltree,Xe.static_dtree)):(ae((mh<<1)+(O?1:0),3),re(Y.max_code+1,te.max_code+1,X+1),De(M,N)),he(),O&&$e()}function Qe(P){Tt(f>=0?f:-1,S-f,P),f=S,e.flush_pending()}function Bt(){let P,B,O,U;do{if(U=u-k-S,U===0&&S===0&&k===0)U=a;else if(U==-1)U--;else if(S>=a+a-mt){l.set(l.subarray(a,a+a),0),x-=a,S-=a,f-=a,P=h,O=P;do B=d[--O]&65535,d[O]=B>=a?B-a:0;while(--P!==0);P=a,O=P;do B=c[--O]&65535,c[O]=B>=a?B-a:0;while(--P!==0);U+=a}if(e.avail_in===0)return;P=e.read_buf(l,S+k,U),k+=P,k>=Me&&(p=l[S]&255,p=(p<<m^l[S+1]&255)&g)}while(k<mt&&e.avail_in!==0)}function He(P){let B=65535,O;for(B>r-5&&(B=r-5);;){if(k<=1){if(Bt(),k===0&&P==0)return Ot;if(k===0)break}if(S+=k,k=0,O=f+B,(S===0||S>=O)&&(k=S-O,S=O,Qe(!1),e.avail_out===0)||S-f>=a-mt&&(Qe(!1),e.avail_out===0))return Ot}return Qe(P==4),e.avail_out===0?P==4?lr:Ot:P==4?ai:ii}function ut(P){let B=E,O=S,U,H,X=v,se=S>a-mt?S-(a-mt):0,Ve=I,dt=s,wn=S+pi,Jn=l[O+X-1],Qn=l[O+X];v>=D&&(B>>=2),Ve>k&&(Ve=k);do if(U=P,!(l[U+X]!=Qn||l[U+X-1]!=Jn||l[U]!=l[O]||l[++U]!=l[O+1])){O+=2,U++;do;while(l[++O]==l[++U]&&l[++O]==l[++U]&&l[++O]==l[++U]&&l[++O]==l[++U]&&l[++O]==l[++U]&&l[++O]==l[++U]&&l[++O]==l[++U]&&l[++O]==l[++U]&&O<wn);if(H=pi-(wn-O),O=wn-pi,H>X){if(x=P,X=H,H>=Ve)break;Jn=l[O+X-1],Qn=l[O+X]}}while((P=c[P&dt]&65535)>se&&--B!==0);return X<=k?X:k}function je(P){let B=0,O;for(;;){if(k<mt){if(Bt(),k<mt&&P==0)return Ot;if(k===0)break}if(k>=Me&&(p=(p<<m^l[S+(Me-1)]&255)&g,B=d[p]&65535,c[S&s]=d[p],d[p]=S),B!==0&&(S-B&65535)<=a-mt&&R!=2&&(y=ut(B)),y>=Me)if(O=ve(S-x,y-Me),k-=y,y<=_&&k>=Me){y--;do S++,p=(p<<m^l[S+(Me-1)]&255)&g,B=d[p]&65535,c[S&s]=d[p],d[p]=S;while(--y!==0);S++}else S+=y,y=0,p=l[S]&255,p=(p<<m^l[S+1]&255)&g;else O=ve(0,l[S]&255),k--,S++;if(O&&(Qe(!1),e.avail_out===0))return Ot}return Qe(P==4),e.avail_out===0?P==4?lr:Ot:P==4?ai:ii}function nt(P){let B=0,O,U;for(;;){if(k<mt){if(Bt(),k<mt&&P==0)return Ot;if(k===0)break}if(k>=Me&&(p=(p<<m^l[S+(Me-1)]&255)&g,B=d[p]&65535,c[S&s]=d[p],d[p]=S),v=y,w=x,y=Me-1,B!==0&&v<_&&(S-B&65535)<=a-mt&&(R!=2&&(y=ut(B)),y<=5&&(R==1||y==Me&&S-x>4096)&&(y=Me-1)),v>=Me&&y<=v){U=S+k-Me,O=ve(S-1-w,v-Me),k-=v-1,v-=2;do++S<=U&&(p=(p<<m^l[S+(Me-1)]&255)&g,B=d[p]&65535,c[S&s]=d[p],d[p]=S);while(--v!==0);if(A=0,y=Me-1,S++,O&&(Qe(!1),e.avail_out===0))return Ot}else if(A!==0){if(O=ve(0,l[S-1]&255),O&&Qe(!1),S++,k--,e.avail_out===0)return Ot}else A=1,S++,k--}return A!==0&&(O=ve(0,l[S-1]&255),A=0),Qe(P==4),e.avail_out===0?P==4?lr:Ot:P==4?ai:ii}function Dt(P){return P.total_in=P.total_out=0,P.msg=null,t.pending=0,t.pending_out=0,n=oi,i=0,me(),ue(),0}t.deflateInit=function(P,B,O,U,H,X){return U||(U=_a),H||(H=ph),X||(X=0),P.msg=null,B==-1&&(B=6),H<1||H>dh||U!=_a||O<9||O>15||B<0||B>9||X<0||X>2?-2:(P.dstate=t,o=O,a=1<<o,s=a-1,b=H+7,h=1<<b,g=h-1,m=Math.floor((b+Me-1)/Me),l=new Uint8Array(a*2),c=[],d=[],ee=1<<H+6,t.pending_buf=new Uint8Array(ee*4),r=ee*4,t.dist_buf=new Uint16Array(ee),t.lc_buf=new Uint8Array(ee),C=B,R=X,Dt(P))},t.deflateEnd=function(){return n!=Ta&&n!=oi&&n!=cr?-2:(t.lc_buf=null,t.dist_buf=null,t.pending_buf=null,d=null,c=null,l=null,t.dstate=null,n==oi?-3:0)},t.deflateParams=function(P,B,O){let U=0;return B==-1&&(B=6),B<0||B>9||O<0||O>2?-2:(Pt[C].func!=Pt[B].func&&P.total_in!==0&&(U=P.deflate(1)),C!=B&&(C=B,_=Pt[C].max_lazy,D=Pt[C].good_length,I=Pt[C].nice_length,E=Pt[C].max_chain),R=O,U)},t.deflateSetDictionary=function(P,B,O){let U=O,H,X=0;if(!B||n!=Ta)return-2;if(U<Me)return 0;for(U>a-mt&&(U=a-mt,X=O-U),l.set(B.subarray(X,X+U),0),S=U,f=U,p=l[0]&255,p=(p<<m^l[1]&255)&g,H=0;H<=U-Me;H++)p=(p<<m^l[H+(Me-1)]&255)&g,c[H&s]=d[p],d[p]=H;return 0},t.deflate=function(P,B){let O,U,H,X,se;if(B>4||B<0)return-2;if(!P.next_out||!P.next_in&&P.avail_in!==0||n==cr&&B!=4)return P.msg=ri[2- -2],-2;if(P.avail_out===0)return P.msg=ri[2- -5],-5;if(e=P,X=i,i=B,n==Ta&&(U=_a+(o-8<<4)<<8,H=(C-1&255)>>1,H>3&&(H=3),U|=H<<6,S!==0&&(U|=fh),U+=31-U%31,n=oi,J(U)),t.pending!==0){if(e.flush_pending(),e.avail_out===0)return i=-1,0}else if(e.avail_in===0&&B<=X&&B!=4)return e.msg=ri[2- -5],-5;if(n==cr&&e.avail_in!==0)return P.msg=ri[2- -5],-5;if(e.avail_in!==0||k!==0||B!=0&&n!=cr){switch(se=-1,Pt[C].func){case Zl:se=He(B);break;case di:se=je(B);break;case kn:se=nt(B);break;default:}if((se==lr||se==ai)&&(n=cr),se==Ot||se==lr)return e.avail_out===0&&(i=-1),0;if(se==ii){if(B==1)Ie();else if(rn(0,0,!1),B==3)for(O=0;O<h;O++)d[O]=0;if(e.flush_pending(),e.avail_out===0)return i=-1,0}}return B!=4?0:1}}function Jl(){let t=this;t.next_in_index=0,t.next_out_index=0,t.avail_in=0,t.total_in=0,t.avail_out=0,t.total_out=0}Jl.prototype={deflateInit(t,e){let n=this;return n.dstate=new gh,e||(e=15),n.dstate.deflateInit(n,t,e)},deflate(t){let e=this;return e.dstate?e.dstate.deflate(e,t):-2},deflateEnd(){let t=this;if(!t.dstate)return-2;let e=t.dstate.deflateEnd();return t.dstate=null,e},deflateParams(t,e){let n=this;return n.dstate?n.dstate.deflateParams(n,t,e):-2},deflateSetDictionary(t,e){let n=this;return n.dstate?n.dstate.deflateSetDictionary(n,t,e):-2},read_buf(t,e,n){let r=this,i=r.avail_in;return i>n&&(i=n),i===0?0:(r.avail_in-=i,t.set(r.next_in.subarray(r.next_in_index,r.next_in_index+i),e),r.next_in_index+=i,r.total_in+=i,i)},flush_pending(){let t=this,e=t.dstate.pending;e>t.avail_out&&(e=t.avail_out),e!==0&&(t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out,t.dstate.pending_out+e),t.next_out_index),t.next_out_index+=e,t.dstate.pending_out+=e,t.total_out+=e,t.avail_out-=e,t.dstate.pending-=e,t.dstate.pending===0&&(t.dstate.pending_out=0))}};function bh(t){let e=this,n=new Jl,r=yh(t&&t.chunkSize?t.chunkSize:64*1024),i=0,a=new Uint8Array(r),o=t?t.level:-1;typeof o>"u"&&(o=-1),n.deflateInit(o),n.next_out=a,e.append=function(s,l){let u,c,d=0,p=0,h=0,b=[];if(s.length){n.next_in_index=0,n.next_in=s,n.avail_in=s.length;do{if(n.next_out_index=0,n.avail_out=r,u=n.deflate(i),u!=0)throw new Error("deflating: "+n.msg);n.next_out_index&&(n.next_out_index==r?b.push(new Uint8Array(a)):b.push(a.slice(0,n.next_out_index))),h+=n.next_out_index,l&&n.next_in_index>0&&n.next_in_index!=d&&(l(n.next_in_index),d=n.next_in_index)}while(n.avail_in>0||n.avail_out===0);return b.length>1?(c=new Uint8Array(h),b.forEach(function(g){c.set(g,p),p+=g.length})):c=b[0]||new Uint8Array,c}},e.flush=function(){let s,l,u=0,c=0,d=[];do{if(n.next_out_index=0,n.avail_out=r,s=n.deflate(4),s!=1&&s!=0)throw new Error("deflating: "+n.msg);r-n.avail_out>0&&d.push(a.slice(0,n.next_out_index)),c+=n.next_out_index}while(n.avail_in>0||n.avail_out===0);return n.deflateEnd(),l=new Uint8Array(c),d.forEach(function(p){l.set(p,u),u+=p.length}),l}}function yh(t){return t+5*(Math.floor(t/16383)+1)}var gt=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],Ql=1440,wh=0,vh=4,xh=9,Th=5,_h=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],Sh=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],kh=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],Ah=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],Eh=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],Ch=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],ln=15;function Oa(){let t=this,e,n,r,i,a,o;function s(u,c,d,p,h,b,g,m,f,y,w){let A,S,x,k,v,E,_,C,R,D,I,M,N,z,Y;D=0,v=d;do r[u[c+D]]++,D++,v--;while(v!==0);if(r[0]==d)return g[0]=-1,m[0]=0,0;for(C=m[0],E=1;E<=ln&&r[E]===0;E++);for(_=E,C<E&&(C=E),v=ln;v!==0&&r[v]===0;v--);for(x=v,C>v&&(C=v),m[0]=C,z=1<<E;E<v;E++,z<<=1)if((z-=r[E])<0)return-3;if((z-=r[v])<0)return-3;for(r[v]+=z,o[1]=E=0,D=1,N=2;--v!==0;)o[N]=E+=r[D],N++,D++;v=0,D=0;do(E=u[c+D])!==0&&(w[o[E]++]=v),D++;while(++v<d);for(d=o[x],o[0]=v=0,D=0,k=-1,M=-C,a[0]=0,I=0,Y=0;_<=x;_++)for(A=r[_];A--!==0;){for(;_>M+C;){if(k++,M+=C,Y=x-M,Y=Y>C?C:Y,(S=1<<(E=_-M))>A+1&&(S-=A+1,N=_,E<Y))for(;++E<Y&&!((S<<=1)<=r[++N]);)S-=r[N];if(Y=1<<E,y[0]+Y>Ql)return-3;a[k]=I=y[0],y[0]+=Y,k!==0?(o[k]=v,i[0]=E,i[1]=C,E=v>>>M-C,i[2]=I-a[k-1]-E,f.set(i,(a[k-1]+E)*3)):g[0]=I}for(i[1]=_-M,D>=d?i[0]=128+64:w[D]<p?(i[0]=w[D]<256?0:32+64,i[2]=w[D++]):(i[0]=b[w[D]-p]+16+64,i[2]=h[w[D++]-p]),S=1<<_-M,E=v>>>M;E<Y;E+=S)f.set(i,(I+E)*3);for(E=1<<_-1;v&E;E>>>=1)v^=E;for(v^=E,R=(1<<M)-1;(v&R)!=o[k];)k--,M-=C,R=(1<<M)-1}return z!==0&&x!=1?-5:0}function l(u){let c;for(e||(e=[],n=[],r=new Int32Array(ln+1),i=[],a=new Int32Array(ln),o=new Int32Array(ln+1)),n.length<u&&(n=[]),c=0;c<u;c++)n[c]=0;for(c=0;c<ln+1;c++)r[c]=0;for(c=0;c<3;c++)i[c]=0;a.set(r.subarray(0,ln),0),o.set(r.subarray(0,ln+1),0)}t.inflate_trees_bits=function(u,c,d,p,h){let b;return l(19),e[0]=0,b=s(u,0,19,19,null,null,d,c,p,e,n),b==-3?h.msg="oversubscribed dynamic bit lengths tree":(b==-5||c[0]===0)&&(h.msg="incomplete dynamic bit lengths tree",b=-3),b},t.inflate_trees_dynamic=function(u,c,d,p,h,b,g,m,f){let y;return l(288),e[0]=0,y=s(d,0,u,257,kh,Ah,b,p,m,e,n),y!=0||p[0]===0?(y==-3?f.msg="oversubscribed literal/length tree":y!=-4&&(f.msg="incomplete literal/length tree",y=-3),y):(l(288),y=s(d,u,c,0,Eh,Ch,g,h,m,e,n),y!=0||h[0]===0&&u>257?(y==-3?f.msg="oversubscribed distance tree":y==-5?(f.msg="incomplete distance tree",y=-3):y!=-4&&(f.msg="empty distance tree with lengths",y=-3),y):0)}}Oa.inflate_trees_fixed=function(t,e,n,r){return t[0]=xh,e[0]=Th,n[0]=_h,r[0]=Sh,0};var si=0,dl=1,pl=2,fl=3,hl=4,ml=5,gl=6,ka=7,bl=8,li=9;function Lh(){let t=this,e,n=0,r,i=0,a=0,o=0,s=0,l=0,u=0,c=0,d,p=0,h,b=0;function g(m,f,y,w,A,S,x,k){let v,E,_,C,R,D,I,M,N,z,Y,te,V,ee,L,F;I=k.next_in_index,M=k.avail_in,R=x.bitb,D=x.bitk,N=x.write,z=N<x.read?x.read-N-1:x.end-N,Y=gt[m],te=gt[f];do{for(;D<20;)M--,R|=(k.read_byte(I++)&255)<<D,D+=8;if(v=R&Y,E=y,_=w,F=(_+v)*3,(C=E[F])===0){R>>=E[F+1],D-=E[F+1],x.win[N++]=E[F+2],z--;continue}do{if(R>>=E[F+1],D-=E[F+1],C&16){for(C&=15,V=E[F+2]+(R&gt[C]),R>>=C,D-=C;D<15;)M--,R|=(k.read_byte(I++)&255)<<D,D+=8;v=R&te,E=A,_=S,F=(_+v)*3,C=E[F];do if(R>>=E[F+1],D-=E[F+1],C&16){for(C&=15;D<C;)M--,R|=(k.read_byte(I++)&255)<<D,D+=8;if(ee=E[F+2]+(R&gt[C]),R>>=C,D-=C,z-=V,N>=ee)L=N-ee,N-L>0&&2>N-L?(x.win[N++]=x.win[L++],x.win[N++]=x.win[L++],V-=2):(x.win.set(x.win.subarray(L,L+2),N),N+=2,L+=2,V-=2);else{L=N-ee;do L+=x.end;while(L<0);if(C=x.end-L,V>C){if(V-=C,N-L>0&&C>N-L)do x.win[N++]=x.win[L++];while(--C!==0);else x.win.set(x.win.subarray(L,L+C),N),N+=C,L+=C,C=0;L=0}}if(N-L>0&&V>N-L)do x.win[N++]=x.win[L++];while(--V!==0);else x.win.set(x.win.subarray(L,L+V),N),N+=V,L+=V,V=0;break}else if(!(C&64))v+=E[F+2],v+=R&gt[C],F=(_+v)*3,C=E[F];else return k.msg="invalid distance code",V=k.avail_in-M,V=D>>3<V?D>>3:V,M+=V,I-=V,D-=V<<3,x.bitb=R,x.bitk=D,k.avail_in=M,k.total_in+=I-k.next_in_index,k.next_in_index=I,x.write=N,-3;while(!0);break}if(C&64)return C&32?(V=k.avail_in-M,V=D>>3<V?D>>3:V,M+=V,I-=V,D-=V<<3,x.bitb=R,x.bitk=D,k.avail_in=M,k.total_in+=I-k.next_in_index,k.next_in_index=I,x.write=N,1):(k.msg="invalid literal/length code",V=k.avail_in-M,V=D>>3<V?D>>3:V,M+=V,I-=V,D-=V<<3,x.bitb=R,x.bitk=D,k.avail_in=M,k.total_in+=I-k.next_in_index,k.next_in_index=I,x.write=N,-3);if(v+=E[F+2],v+=R&gt[C],F=(_+v)*3,(C=E[F])===0){R>>=E[F+1],D-=E[F+1],x.win[N++]=E[F+2],z--;break}}while(!0)}while(z>=258&&M>=10);return V=k.avail_in-M,V=D>>3<V?D>>3:V,M+=V,I-=V,D-=V<<3,x.bitb=R,x.bitk=D,k.avail_in=M,k.total_in+=I-k.next_in_index,k.next_in_index=I,x.write=N,0}t.init=function(m,f,y,w,A,S){e=si,u=m,c=f,d=y,p=w,h=A,b=S,r=null},t.proc=function(m,f,y){let w,A,S,x=0,k=0,v=0,E,_,C,R;for(v=f.next_in_index,E=f.avail_in,x=m.bitb,k=m.bitk,_=m.write,C=_<m.read?m.read-_-1:m.end-_;;)switch(e){case si:if(C>=258&&E>=10&&(m.bitb=x,m.bitk=k,f.avail_in=E,f.total_in+=v-f.next_in_index,f.next_in_index=v,m.write=_,y=g(u,c,d,p,h,b,m,f),v=f.next_in_index,E=f.avail_in,x=m.bitb,k=m.bitk,_=m.write,C=_<m.read?m.read-_-1:m.end-_,y!=0)){e=y==1?ka:li;break}a=u,r=d,i=p,e=dl;case dl:for(w=a;k<w;){if(E!==0)y=0;else return m.bitb=x,m.bitk=k,f.avail_in=E,f.total_in+=v-f.next_in_index,f.next_in_index=v,m.write=_,m.inflate_flush(f,y);E--,x|=(f.read_byte(v++)&255)<<k,k+=8}if(A=(i+(x&gt[w]))*3,x>>>=r[A+1],k-=r[A+1],S=r[A],S===0){o=r[A+2],e=gl;break}if(S&16){s=S&15,n=r[A+2],e=pl;break}if(!(S&64)){a=S,i=A/3+r[A+2];break}if(S&32){e=ka;break}return e=li,f.msg="invalid literal/length code",y=-3,m.bitb=x,m.bitk=k,f.avail_in=E,f.total_in+=v-f.next_in_index,f.next_in_index=v,m.write=_,m.inflate_flush(f,y);case pl:for(w=s;k<w;){if(E!==0)y=0;else return m.bitb=x,m.bitk=k,f.avail_in=E,f.total_in+=v-f.next_in_index,f.next_in_index=v,m.write=_,m.inflate_flush(f,y);E--,x|=(f.read_byte(v++)&255)<<k,k+=8}n+=x&gt[w],x>>=w,k-=w,a=c,r=h,i=b,e=fl;case fl:for(w=a;k<w;){if(E!==0)y=0;else return m.bitb=x,m.bitk=k,f.avail_in=E,f.total_in+=v-f.next_in_index,f.next_in_index=v,m.write=_,m.inflate_flush(f,y);E--,x|=(f.read_byte(v++)&255)<<k,k+=8}if(A=(i+(x&gt[w]))*3,x>>=r[A+1],k-=r[A+1],S=r[A],S&16){s=S&15,l=r[A+2],e=hl;break}if(!(S&64)){a=S,i=A/3+r[A+2];break}return e=li,f.msg="invalid distance code",y=-3,m.bitb=x,m.bitk=k,f.avail_in=E,f.total_in+=v-f.next_in_index,f.next_in_index=v,m.write=_,m.inflate_flush(f,y);case hl:for(w=s;k<w;){if(E!==0)y=0;else return m.bitb=x,m.bitk=k,f.avail_in=E,f.total_in+=v-f.next_in_index,f.next_in_index=v,m.write=_,m.inflate_flush(f,y);E--,x|=(f.read_byte(v++)&255)<<k,k+=8}l+=x&gt[w],x>>=w,k-=w,e=ml;case ml:for(R=_-l;R<0;)R+=m.end;for(;n!==0;){if(C===0&&(_==m.end&&m.read!==0&&(_=0,C=_<m.read?m.read-_-1:m.end-_),C===0&&(m.write=_,y=m.inflate_flush(f,y),_=m.write,C=_<m.read?m.read-_-1:m.end-_,_==m.end&&m.read!==0&&(_=0,C=_<m.read?m.read-_-1:m.end-_),C===0)))return m.bitb=x,m.bitk=k,f.avail_in=E,f.total_in+=v-f.next_in_index,f.next_in_index=v,m.write=_,m.inflate_flush(f,y);m.win[_++]=m.win[R++],C--,R==m.end&&(R=0),n--}e=si;break;case gl:if(C===0&&(_==m.end&&m.read!==0&&(_=0,C=_<m.read?m.read-_-1:m.end-_),C===0&&(m.write=_,y=m.inflate_flush(f,y),_=m.write,C=_<m.read?m.read-_-1:m.end-_,_==m.end&&m.read!==0&&(_=0,C=_<m.read?m.read-_-1:m.end-_),C===0)))return m.bitb=x,m.bitk=k,f.avail_in=E,f.total_in+=v-f.next_in_index,f.next_in_index=v,m.write=_,m.inflate_flush(f,y);y=0,m.win[_++]=o,C--,e=si;break;case ka:if(k>7&&(k-=8,E++,v--),m.write=_,y=m.inflate_flush(f,y),_=m.write,C=_<m.read?m.read-_-1:m.end-_,m.read!=m.write)return m.bitb=x,m.bitk=k,f.avail_in=E,f.total_in+=v-f.next_in_index,f.next_in_index=v,m.write=_,m.inflate_flush(f,y);e=bl;case bl:return y=1,m.bitb=x,m.bitk=k,f.avail_in=E,f.total_in+=v-f.next_in_index,f.next_in_index=v,m.write=_,m.inflate_flush(f,y);case li:return y=-3,m.bitb=x,m.bitk=k,f.avail_in=E,f.total_in+=v-f.next_in_index,f.next_in_index=v,m.write=_,m.inflate_flush(f,y);default:return y=-2,m.bitb=x,m.bitk=k,f.avail_in=E,f.total_in+=v-f.next_in_index,f.next_in_index=v,m.write=_,m.inflate_flush(f,y)}},t.free=function(){}}var yl=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Pn=0,Aa=1,wl=2,vl=3,xl=4,Tl=5,ci=6,ui=7,_l=8,Sn=9;function Rh(t,e){let n=this,r=Pn,i=0,a=0,o=0,s,l=[0],u=[0],c=new Lh,d=0,p=new Int32Array(Ql*3),h=0,b=new Oa;n.bitk=0,n.bitb=0,n.win=new Uint8Array(e),n.end=e,n.read=0,n.write=0,n.reset=function(g,m){m&&(m[0]=h),r==ci&&c.free(g),r=Pn,n.bitk=0,n.bitb=0,n.read=n.write=0},n.reset(t,null),n.inflate_flush=function(g,m){let f,y,w;return y=g.next_out_index,w=n.read,f=(w<=n.write?n.write:n.end)-w,f>g.avail_out&&(f=g.avail_out),f!==0&&m==-5&&(m=0),g.avail_out-=f,g.total_out+=f,g.next_out.set(n.win.subarray(w,w+f),y),y+=f,w+=f,w==n.end&&(w=0,n.write==n.end&&(n.write=0),f=n.write-w,f>g.avail_out&&(f=g.avail_out),f!==0&&m==-5&&(m=0),g.avail_out-=f,g.total_out+=f,g.next_out.set(n.win.subarray(w,w+f),y),y+=f,w+=f),g.next_out_index=y,n.read=w,m},n.proc=function(g,m){let f,y,w,A,S,x,k,v;for(A=g.next_in_index,S=g.avail_in,y=n.bitb,w=n.bitk,x=n.write,k=x<n.read?n.read-x-1:n.end-x;;){let E,_,C,R,D,I,M,N;switch(r){case Pn:for(;w<3;){if(S!==0)m=0;else return n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,m);S--,y|=(g.read_byte(A++)&255)<<w,w+=8}switch(f=y&7,d=f&1,f>>>1){case 0:y>>>=3,w-=3,f=w&7,y>>>=f,w-=f,r=Aa;break;case 1:E=[],_=[],C=[[]],R=[[]],Oa.inflate_trees_fixed(E,_,C,R),c.init(E[0],_[0],C[0],0,R[0],0),y>>>=3,w-=3,r=ci;break;case 2:y>>>=3,w-=3,r=vl;break;case 3:return y>>>=3,w-=3,r=Sn,g.msg="invalid block type",m=-3,n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,m)}break;case Aa:for(;w<32;){if(S!==0)m=0;else return n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,m);S--,y|=(g.read_byte(A++)&255)<<w,w+=8}if((~y>>>16&65535)!=(y&65535))return r=Sn,g.msg="invalid stored block lengths",m=-3,n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,m);i=y&65535,y=w=0,r=i!==0?wl:d!==0?ui:Pn;break;case wl:if(S===0||k===0&&(x==n.end&&n.read!==0&&(x=0,k=x<n.read?n.read-x-1:n.end-x),k===0&&(n.write=x,m=n.inflate_flush(g,m),x=n.write,k=x<n.read?n.read-x-1:n.end-x,x==n.end&&n.read!==0&&(x=0,k=x<n.read?n.read-x-1:n.end-x),k===0)))return n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,m);if(m=0,f=i,f>S&&(f=S),f>k&&(f=k),n.win.set(g.read_buf(A,f),x),A+=f,S-=f,x+=f,k-=f,(i-=f)!==0)break;r=d!==0?ui:Pn;break;case vl:for(;w<14;){if(S!==0)m=0;else return n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,m);S--,y|=(g.read_byte(A++)&255)<<w,w+=8}if(a=f=y&16383,(f&31)>29||(f>>5&31)>29)return r=Sn,g.msg="too many length or distance symbols",m=-3,n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,m);if(f=258+(f&31)+(f>>5&31),!s||s.length<f)s=[];else for(v=0;v<f;v++)s[v]=0;y>>>=14,w-=14,o=0,r=xl;case xl:for(;o<4+(a>>>10);){for(;w<3;){if(S!==0)m=0;else return n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,m);S--,y|=(g.read_byte(A++)&255)<<w,w+=8}s[yl[o++]]=y&7,y>>>=3,w-=3}for(;o<19;)s[yl[o++]]=0;if(l[0]=7,f=b.inflate_trees_bits(s,l,u,p,g),f!=0)return m=f,m==-3&&(s=null,r=Sn),n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,m);o=0,r=Tl;case Tl:for(;f=a,!(o>=258+(f&31)+(f>>5&31));){let z,Y;for(f=l[0];w<f;){if(S!==0)m=0;else return n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,m);S--,y|=(g.read_byte(A++)&255)<<w,w+=8}if(f=p[(u[0]+(y&gt[f]))*3+1],Y=p[(u[0]+(y&gt[f]))*3+2],Y<16)y>>>=f,w-=f,s[o++]=Y;else{for(v=Y==18?7:Y-14,z=Y==18?11:3;w<f+v;){if(S!==0)m=0;else return n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,m);S--,y|=(g.read_byte(A++)&255)<<w,w+=8}if(y>>>=f,w-=f,z+=y&gt[v],y>>>=v,w-=v,v=o,f=a,v+z>258+(f&31)+(f>>5&31)||Y==16&&v<1)return s=null,r=Sn,g.msg="invalid bit length repeat",m=-3,n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,m);Y=Y==16?s[v-1]:0;do s[v++]=Y;while(--z!==0);o=v}}if(u[0]=-1,D=[],I=[],M=[],N=[],D[0]=9,I[0]=6,f=a,f=b.inflate_trees_dynamic(257+(f&31),1+(f>>5&31),s,D,I,M,N,p,g),f!=0)return f==-3&&(s=null,r=Sn),m=f,n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,m);c.init(D[0],I[0],p,M[0],p,N[0]),r=ci;case ci:if(n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,(m=c.proc(n,g,m))!=1)return n.inflate_flush(g,m);if(m=0,c.free(g),A=g.next_in_index,S=g.avail_in,y=n.bitb,w=n.bitk,x=n.write,k=x<n.read?n.read-x-1:n.end-x,d===0){r=Pn;break}r=ui;case ui:if(n.write=x,m=n.inflate_flush(g,m),x=n.write,k=x<n.read?n.read-x-1:n.end-x,n.read!=n.write)return n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,m);r=_l;case _l:return m=1,n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,m);case Sn:return m=-3,n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,m);default:return m=-2,n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,m)}}},n.free=function(g){n.reset(g,null),n.win=null,p=null},n.set_dictionary=function(g,m,f){n.win.set(g.subarray(m,m+f),0),n.read=n.write=f},n.sync_point=function(){return r==Aa?1:0}}var Dh=32,Mh=8,Ph=0,Sl=1,kl=2,Al=3,El=4,Cl=5,Ea=6,ur=7,Ll=12,cn=13,Oh=[0,0,255,255];function Fh(){let t=this;t.mode=0,t.method=0,t.was=[0],t.need=0,t.marker=0,t.wbits=0;function e(n){return!n||!n.istate?-2:(n.total_in=n.total_out=0,n.msg=null,n.istate.mode=ur,n.istate.blocks.reset(n,null),0)}t.inflateEnd=function(n){return t.blocks&&t.blocks.free(n),t.blocks=null,0},t.inflateInit=function(n,r){return n.msg=null,t.blocks=null,r<8||r>15?(t.inflateEnd(n),-2):(t.wbits=r,n.istate.blocks=new Rh(n,1<<r),e(n),0)},t.inflate=function(n,r){let i,a;if(!n||!n.istate||!n.next_in)return-2;let o=n.istate;for(r=r==vh?-5:0,i=-5;;)switch(o.mode){case Ph:if(n.avail_in===0)return i;if(i=r,n.avail_in--,n.total_in++,((o.method=n.read_byte(n.next_in_index++))&15)!=Mh){o.mode=cn,n.msg="unknown compression method",o.marker=5;break}if((o.method>>4)+8>o.wbits){o.mode=cn,n.msg="invalid win size",o.marker=5;break}o.mode=Sl;case Sl:if(n.avail_in===0)return i;if(i=r,n.avail_in--,n.total_in++,a=n.read_byte(n.next_in_index++)&255,((o.method<<8)+a)%31!==0){o.mode=cn,n.msg="incorrect header check",o.marker=5;break}if(!(a&Dh)){o.mode=ur;break}o.mode=kl;case kl:if(n.avail_in===0)return i;i=r,n.avail_in--,n.total_in++,o.need=(n.read_byte(n.next_in_index++)&255)<<24&4278190080,o.mode=Al;case Al:if(n.avail_in===0)return i;i=r,n.avail_in--,n.total_in++,o.need+=(n.read_byte(n.next_in_index++)&255)<<16&16711680,o.mode=El;case El:if(n.avail_in===0)return i;i=r,n.avail_in--,n.total_in++,o.need+=(n.read_byte(n.next_in_index++)&255)<<8&65280,o.mode=Cl;case Cl:return n.avail_in===0?i:(i=r,n.avail_in--,n.total_in++,o.need+=n.read_byte(n.next_in_index++)&255,o.mode=Ea,2);case Ea:return o.mode=cn,n.msg="need dictionary",o.marker=0,-2;case ur:if(i=o.blocks.proc(n,i),i==-3){o.mode=cn,o.marker=0;break}if(i==0&&(i=r),i!=1)return i;i=r,o.blocks.reset(n,o.was),o.mode=Ll;case Ll:return n.avail_in=0,1;case cn:return-3;default:return-2}},t.inflateSetDictionary=function(n,r,i){let a=0,o=i;if(!n||!n.istate||n.istate.mode!=Ea)return-2;let s=n.istate;return o>=1<<s.wbits&&(o=(1<<s.wbits)-1,a=i-o),s.blocks.set_dictionary(r,a,o),s.mode=ur,0},t.inflateSync=function(n){let r,i,a,o,s;if(!n||!n.istate)return-2;let l=n.istate;if(l.mode!=cn&&(l.mode=cn,l.marker=0),(r=n.avail_in)===0)return-5;for(i=n.next_in_index,a=l.marker;r!==0&&a<4;)n.read_byte(i)==Oh[a]?a++:n.read_byte(i)!==0?a=0:a=4-a,i++,r--;return n.total_in+=i-n.next_in_index,n.next_in_index=i,n.avail_in=r,l.marker=a,a!=4?-3:(o=n.total_in,s=n.total_out,e(n),n.total_in=o,n.total_out=s,l.mode=ur,0)},t.inflateSyncPoint=function(n){return!n||!n.istate||!n.istate.blocks?-2:n.istate.blocks.sync_point()}}function ec(){}ec.prototype={inflateInit(t){let e=this;return e.istate=new Fh,t||(t=15),e.istate.inflateInit(e,t)},inflate(t){let e=this;return e.istate?e.istate.inflate(e,t):-2},inflateEnd(){let t=this;if(!t.istate)return-2;let e=t.istate.inflateEnd(t);return t.istate=null,e},inflateSync(){let t=this;return t.istate?t.istate.inflateSync(t):-2},inflateSetDictionary(t,e){let n=this;return n.istate?n.istate.inflateSetDictionary(n,t,e):-2},read_byte(t){return this.next_in[t]},read_buf(t,e){return this.next_in.subarray(t,t+e)}};function Ih(t){let e=this,n=new ec,r=t&&t.chunkSize?Math.floor(t.chunkSize*2):128*1024,i=wh,a=new Uint8Array(r),o=!1;n.inflateInit(),n.next_out=a,e.append=function(s,l){let u=[],c,d,p=0,h=0,b=0;if(s.length!==0){n.next_in_index=0,n.next_in=s,n.avail_in=s.length;do{if(n.next_out_index=0,n.avail_out=r,n.avail_in===0&&!o&&(n.next_in_index=0,o=!0),c=n.inflate(i),o&&c===-5){if(n.avail_in!==0)throw new Error("inflating: bad input")}else if(c!==0&&c!==1)throw new Error("inflating: "+n.msg);if((o||c===1)&&n.avail_in===s.length)throw new Error("inflating: bad input");n.next_out_index&&(n.next_out_index===r?u.push(new Uint8Array(a)):u.push(a.slice(0,n.next_out_index))),b+=n.next_out_index,l&&n.next_in_index>0&&n.next_in_index!=p&&(l(n.next_in_index),p=n.next_in_index)}while(n.avail_in>0||n.avail_out===0);return u.length>1?(d=new Uint8Array(b),u.forEach(function(g){d.set(g,h),h+=g.length})):d=u[0]||new Uint8Array,d}},e.flush=function(){n.inflateEnd()}}var fi="/",Rl=new Date(2107,11,31),Dl=new Date(1980,0,1),ze=void 0,gi="undefined",tc="function",Ml=class{constructor(t){return class extends TransformStream{constructor(e,n){let r=new t(n);super({transform(i,a){a.enqueue(r.append(i))},flush(i){let a=r.flush();a&&i.enqueue(a)}})}}}},Nh=64,nc=2;try{typeof navigator!=gi&&navigator.hardwareConcurrency&&(nc=navigator.hardwareConcurrency)}catch{}var zh={chunkSize:512*1024,maxWorkers:nc,terminateWorkerTimeout:5e3,useWebWorkers:!0,useCompressionStream:!0,workerScripts:ze,CompressionStreamNative:typeof CompressionStream!=gi&&CompressionStream,DecompressionStreamNative:typeof DecompressionStream!=gi&&DecompressionStream},fn=Object.assign({},zh);function Ka(){return fn}function rc(t){return Math.max(t.chunkSize,Nh)}function _i(t){let{baseURL:e,chunkSize:n,maxWorkers:r,terminateWorkerTimeout:i,useCompressionStream:a,useWebWorkers:o,Deflate:s,Inflate:l,CompressionStream:u,DecompressionStream:c,workerScripts:d}=t;if(un("baseURL",e),un("chunkSize",n),un("maxWorkers",r),un("terminateWorkerTimeout",i),un("useCompressionStream",a),un("useWebWorkers",o),s&&(fn.CompressionStream=new Ml(s)),l&&(fn.DecompressionStream=new Ml(l)),un("CompressionStream",u),un("DecompressionStream",c),d!==ze){let{deflate:p,inflate:h}=d;if((p||h)&&(fn.workerScripts||(fn.workerScripts={})),p){if(!Array.isArray(p))throw new Error("workerScripts.deflate must be an array");fn.workerScripts.deflate=p}if(h){if(!Array.isArray(h))throw new Error("workerScripts.inflate must be an array");fn.workerScripts.inflate=h}}}function un(t,e){e!==ze&&(fn[t]=e)}function Bh(){return"application/octet-stream"}var ic=[];for(let t=0;t<256;t++){let e=t;for(let n=0;n<8;n++)e&1?e=e>>>1^3988292384:e=e>>>1;ic[t]=e}var bi=class{constructor(t){this.crc=t||-1}append(t){let e=this.crc|0;for(let n=0,r=t.length|0;n<r;n++)e=e>>>8^ic[(e^t[n])&255];this.crc=e}get(){return~this.crc}},ac=class extends TransformStream{constructor(){let t=new bi;super({transform(e){t.append(e)},flush(e){let n=new Uint8Array(4);new DataView(n.buffer).setUint32(0,t.get()),e.enqueue(n)}})}};function Fa(t){if(typeof TextEncoder>"u"){t=unescape(encodeURIComponent(t));let e=new Uint8Array(t.length);for(let n=0;n<e.length;n++)e[n]=t.charCodeAt(n);return e}else return new TextEncoder().encode(t)}var ot={concat(t,e){if(t.length===0||e.length===0)return t.concat(e);let n=t[t.length-1],r=ot.getPartial(n);return r===32?t.concat(e):ot._shiftRight(e,r,n|0,t.slice(0,t.length-1))},bitLength(t){let e=t.length;if(e===0)return 0;let n=t[e-1];return(e-1)*32+ot.getPartial(n)},clamp(t,e){if(t.length*32<e)return t;t=t.slice(0,Math.ceil(e/32));let n=t.length;return e=e&31,n>0&&e&&(t[n-1]=ot.partial(e,t[n-1]&2147483648>>e-1,1)),t},partial(t,e,n){return t===32?e:(n?e|0:e<<32-t)+t*1099511627776},getPartial(t){return Math.round(t/1099511627776)||32},_shiftRight(t,e,n,r){for(r===void 0&&(r=[]);e>=32;e-=32)r.push(n),n=0;if(e===0)return r.concat(t);for(let o=0;o<t.length;o++)r.push(n|t[o]>>>e),n=t[o]<<32-e;let i=t.length?t[t.length-1]:0,a=ot.getPartial(i);return r.push(ot.partial(e+a&31,e+a>32?n:r.pop(),1)),r}},yi={bytes:{fromBits(t){let e=ot.bitLength(t)/8,n=new Uint8Array(e),r;for(let i=0;i<e;i++)i&3||(r=t[i/4]),n[i]=r>>>24,r<<=8;return n},toBits(t){let e=[],n,r=0;for(n=0;n<t.length;n++)r=r<<8|t[n],(n&3)===3&&(e.push(r),r=0);return n&3&&e.push(ot.partial(8*(n&3),r)),e}}},oc={};oc.sha1=class{constructor(t){let e=this;e.blockSize=512,e._init=[1732584193,4023233417,2562383102,271733878,3285377520],e._key=[1518500249,1859775393,2400959708,3395469782],t?(e._h=t._h.slice(0),e._buffer=t._buffer.slice(0),e._length=t._length):e.reset()}reset(){let t=this;return t._h=t._init.slice(0),t._buffer=[],t._length=0,t}update(t){let e=this;typeof t=="string"&&(t=yi.utf8String.toBits(t));let n=e._buffer=ot.concat(e._buffer,t),r=e._length,i=e._length=r+ot.bitLength(t);if(i>9007199254740991)throw new Error("Cannot hash more than 2^53 - 1 bits");let a=new Uint32Array(n),o=0;for(let s=e.blockSize+r-(e.blockSize+r&e.blockSize-1);s<=i;s+=e.blockSize)e._block(a.subarray(16*o,16*(o+1))),o+=1;return n.splice(0,16*o),e}finalize(){let t=this,e=t._buffer,n=t._h;e=ot.concat(e,[ot.partial(1,1)]);for(let r=e.length+2;r&15;r++)e.push(0);for(e.push(Math.floor(t._length/4294967296)),e.push(t._length|0);e.length;)t._block(e.splice(0,16));return t.reset(),n}_f(t,e,n,r){if(t<=19)return e&n|~e&r;if(t<=39)return e^n^r;if(t<=59)return e&n|e&r|n&r;if(t<=79)return e^n^r}_S(t,e){return e<<t|e>>>32-t}_block(t){let e=this,n=e._h,r=Array(80);for(let u=0;u<16;u++)r[u]=t[u];let i=n[0],a=n[1],o=n[2],s=n[3],l=n[4];for(let u=0;u<=79;u++){u>=16&&(r[u]=e._S(1,r[u-3]^r[u-8]^r[u-14]^r[u-16]));let c=e._S(5,i)+e._f(u,a,o,s)+l+r[u]+e._key[Math.floor(u/20)]|0;l=s,s=o,o=e._S(30,a),a=i,i=c}n[0]=n[0]+i|0,n[1]=n[1]+a|0,n[2]=n[2]+o|0,n[3]=n[3]+s|0,n[4]=n[4]+l|0}};var sc={};sc.aes=class{constructor(t){let e=this;e._tables=[[[],[],[],[],[]],[[],[],[],[],[]]],e._tables[0][0][0]||e._precompute();let n=e._tables[0][4],r=e._tables[1],i=t.length,a,o,s,l=1;if(i!==4&&i!==6&&i!==8)throw new Error("invalid aes key size");for(e._key=[o=t.slice(0),s=[]],a=i;a<4*i+28;a++){let u=o[a-1];(a%i===0||i===8&&a%i===4)&&(u=n[u>>>24]<<24^n[u>>16&255]<<16^n[u>>8&255]<<8^n[u&255],a%i===0&&(u=u<<8^u>>>24^l<<24,l=l<<1^(l>>7)*283)),o[a]=o[a-i]^u}for(let u=0;a;u++,a--){let c=o[u&3?a:a-4];a<=4||u<4?s[u]=c:s[u]=r[0][n[c>>>24]]^r[1][n[c>>16&255]]^r[2][n[c>>8&255]]^r[3][n[c&255]]}}encrypt(t){return this._crypt(t,0)}decrypt(t){return this._crypt(t,1)}_precompute(){let t=this._tables[0],e=this._tables[1],n=t[4],r=e[4],i=[],a=[],o,s,l,u;for(let c=0;c<256;c++)a[(i[c]=c<<1^(c>>7)*283)^c]=c;for(let c=o=0;!n[c];c^=s||1,o=a[o]||1){let d=o^o<<1^o<<2^o<<3^o<<4;d=d>>8^d&255^99,n[c]=d,r[d]=c,u=i[l=i[s=i[c]]];let p=u*16843009^l*65537^s*257^c*16843008,h=i[d]*257^d*16843008;for(let b=0;b<4;b++)t[b][c]=h=h<<24^h>>>8,e[b][d]=p=p<<24^p>>>8}for(let c=0;c<5;c++)t[c]=t[c].slice(0),e[c]=e[c].slice(0)}_crypt(t,e){if(t.length!==4)throw new Error("invalid aes block size");let n=this._key[e],r=n.length/4-2,i=[0,0,0,0],a=this._tables[e],o=a[0],s=a[1],l=a[2],u=a[3],c=a[4],d=t[0]^n[0],p=t[e?3:1]^n[1],h=t[2]^n[2],b=t[e?1:3]^n[3],g=4,m,f,y;for(let w=0;w<r;w++)m=o[d>>>24]^s[p>>16&255]^l[h>>8&255]^u[b&255]^n[g],f=o[p>>>24]^s[h>>16&255]^l[b>>8&255]^u[d&255]^n[g+1],y=o[h>>>24]^s[b>>16&255]^l[d>>8&255]^u[p&255]^n[g+2],b=o[b>>>24]^s[d>>16&255]^l[p>>8&255]^u[h&255]^n[g+3],g+=4,d=m,p=f,h=y;for(let w=0;w<4;w++)i[e?3&-w:w]=c[d>>>24]<<24^c[p>>16&255]<<16^c[h>>8&255]<<8^c[b&255]^n[g++],m=d,d=p,p=h,h=b,b=m;return i}};var Uh={getRandomValues(t){let e=new Uint32Array(t.buffer),n=r=>{let i=987654321,a=4294967295;return function(){return i=36969*(i&65535)+(i>>16)&a,r=18e3*(r&65535)+(r>>16)&a,(((i<<16)+r&a)/4294967296+.5)*(Math.random()>.5?1:-1)}};for(let r=0,i;r<t.length;r+=4){let a=n((i||Math.random())*4294967296);i=a()*987654071,e[r/4]=a()*4294967296|0}return t}},lc={};lc.ctrGladman=class{constructor(t,e){this._prf=t,this._initIv=e,this._iv=e}reset(){this._iv=this._initIv}update(t){return this.calculate(this._prf,t,this._iv)}incWord(t){if((t>>24&255)===255){let e=t>>16&255,n=t>>8&255,r=t&255;e===255?(e=0,n===255?(n=0,r===255?r=0:++r):++n):++e,t=0,t+=e<<16,t+=n<<8,t+=r}else t+=1<<24;return t}incCounter(t){(t[0]=this.incWord(t[0]))===0&&(t[1]=this.incWord(t[1]))}calculate(t,e,n){let r;if(!(r=e.length))return[];let i=ot.bitLength(e);for(let a=0;a<r;a+=4){this.incCounter(n);let o=t.encrypt(n);e[a]^=o[0],e[a+1]^=o[1],e[a+2]^=o[2],e[a+3]^=o[3]}return ot.clamp(e,i)}};var An={importKey(t){return new An.hmacSha1(yi.bytes.toBits(t))},pbkdf2(t,e,n,r){if(n=n||1e4,r<0||n<0)throw new Error("invalid params to pbkdf2");let i=(r>>5)+1<<2,a,o,s,l,u,c=new ArrayBuffer(i),d=new DataView(c),p=0,h=ot;for(e=yi.bytes.toBits(e),u=1;p<(i||1);u++){for(a=o=t.encrypt(h.concat(e,[u])),s=1;s<n;s++)for(o=t.encrypt(o),l=0;l<o.length;l++)a[l]^=o[l];for(s=0;p<(i||1)&&s<a.length;s++)d.setInt32(p,a[s]),p+=4}return c.slice(0,r/8)}};An.hmacSha1=class{constructor(t){let e=this,n=e._hash=oc.sha1,r=[[],[]];e._baseHash=[new n,new n];let i=e._baseHash[0].blockSize/32;t.length>i&&(t=new n().update(t).finalize());for(let a=0;a<i;a++)r[0][a]=t[a]^909522486,r[1][a]=t[a]^1549556828;e._baseHash[0].update(r[0]),e._baseHash[1].update(r[1]),e._resultHash=new n(e._baseHash[0])}reset(){let t=this;t._resultHash=new t._hash(t._baseHash[0]),t._updated=!1}update(t){let e=this;e._updated=!0,e._resultHash.update(t)}digest(){let t=this,e=t._resultHash.finalize(),n=new t._hash(t._baseHash[1]).update(e).finalize();return t.reset(),n}encrypt(t){if(this._updated)throw new Error("encrypt on already updated hmac called!");return this.update(t),this.digest(t)}};var $h=typeof crypto<"u"&&typeof crypto.getRandomValues=="function",Va="Invalid password",Ga="Invalid signature";function cc(t){return $h?crypto.getRandomValues(t):Uh.getRandomValues(t)}var On=16,Hh="raw",uc={name:"PBKDF2"},jh={name:"HMAC"},Wh="SHA-1",qh=Object.assign({hash:jh},uc),Ia=Object.assign({iterations:1e3,hash:{name:Wh}},uc),Kh=["deriveBits"],pr=[8,12,16],dr=[16,24,32],dn=10,Vh=[0,0,0,0],dc="undefined",pc="function",Si=typeof crypto!=dc,gr=Si&&crypto.subtle,fc=Si&&typeof gr!=dc,jt=yi.bytes,Gh=sc.aes,Xh=lc.ctrGladman,Yh=An.hmacSha1,Pl=Si&&fc&&typeof gr.importKey==pc,Ol=Si&&fc&&typeof gr.deriveBits==pc,Zh=class extends TransformStream{constructor({password:t,signed:e,encryptionStrength:n}){super({start(){Object.assign(this,{ready:new Promise(r=>this.resolveReady=r),password:t,signed:e,strength:n-1,pending:new Uint8Array})},async transform(r,i){let a=this,{password:o,strength:s,resolveReady:l,ready:u}=a;o?(await Qh(a,s,o,kt(r,0,pr[s]+2)),r=kt(r,pr[s]+2),l()):await u;let c=new Uint8Array(r.length-dn-(r.length-dn)%On);i.enqueue(hc(a,r,c,0,dn,!0))},async flush(r){let{signed:i,ctr:a,hmac:o,pending:s,ready:l}=this;await l;let u=kt(s,0,s.length-dn),c=kt(s,s.length-dn),d=new Uint8Array;if(u.length){let p=hr(jt,u);o.update(p);let h=a.update(p);d=fr(jt,h)}if(i){let p=kt(fr(jt,o.digest()),0,dn);for(let h=0;h<dn;h++)if(p[h]!=c[h])throw new Error(Ga)}r.enqueue(d)}})}},Jh=class extends TransformStream{constructor({password:t,encryptionStrength:e}){let n;super({start(){Object.assign(this,{ready:new Promise(r=>this.resolveReady=r),password:t,strength:e-1,pending:new Uint8Array})},async transform(r,i){let a=this,{password:o,strength:s,resolveReady:l,ready:u}=a,c=new Uint8Array;o?(c=await em(a,s,o),l()):await u;let d=new Uint8Array(c.length+r.length-r.length%On);d.set(c,0),i.enqueue(hc(a,r,d,c.length,0))},async flush(r){let{ctr:i,hmac:a,pending:o,ready:s}=this;await s;let l=new Uint8Array;if(o.length){let u=i.update(hr(jt,o));a.update(u),l=fr(jt,u)}n.signature=fr(jt,a.digest()).slice(0,dn),r.enqueue(Xa(l,n.signature))}}),n=this}};function hc(t,e,n,r,i,a){let{ctr:o,hmac:s,pending:l}=t,u=e.length-i;l.length&&(e=Xa(l,e),n=rm(n,u-u%On));let c;for(c=0;c<=u-On;c+=On){let d=hr(jt,kt(e,c,c+On));a&&s.update(d);let p=o.update(d);a||s.update(p),n.set(fr(jt,p),c+r)}return t.pending=kt(e,c),n}async function Qh(t,e,n,r){let i=await mc(t,e,n,kt(r,0,pr[e])),a=kt(r,pr[e]);if(i[0]!=a[0]||i[1]!=a[1])throw new Error(Va)}async function em(t,e,n){let r=cc(new Uint8Array(pr[e])),i=await mc(t,e,n,r);return Xa(r,i)}async function mc(t,e,n,r){t.password=null;let i=Fa(n),a=await tm(Hh,i,qh,!1,Kh),o=await nm(Object.assign({salt:r},Ia),a,8*(dr[e]*2+2)),s=new Uint8Array(o),l=hr(jt,kt(s,0,dr[e])),u=hr(jt,kt(s,dr[e],dr[e]*2)),c=kt(s,dr[e]*2);return Object.assign(t,{keys:{key:l,authentication:u,passwordVerification:c},ctr:new Xh(new Gh(l),Array.from(Vh)),hmac:new Yh(u)}),c}async function tm(t,e,n,r,i){if(Pl)try{return await gr.importKey(t,e,n,r,i)}catch{return Pl=!1,An.importKey(e)}else return An.importKey(e)}async function nm(t,e,n){if(Ol)try{return await gr.deriveBits(t,e,n)}catch{return Ol=!1,An.pbkdf2(e,t.salt,Ia.iterations,n)}else return An.pbkdf2(e,t.salt,Ia.iterations,n)}function Xa(t,e){let n=t;return t.length+e.length&&(n=new Uint8Array(t.length+e.length),n.set(t,0),n.set(e,t.length)),n}function rm(t,e){if(e&&e>t.length){let n=t;t=new Uint8Array(e),t.set(n,0)}return t}function kt(t,e,n){return t.subarray(e,n)}function fr(t,e){return t.fromBits(e)}function hr(t,e){return t.toBits(e)}var Fn=12,im=class extends TransformStream{constructor({password:t,passwordVerification:e}){super({start(){Object.assign(this,{password:t,passwordVerification:e}),gc(this,t)},transform(n,r){let i=this;if(i.password){let a=Fl(i,n.subarray(0,Fn));if(i.password=null,a[Fn-1]!=i.passwordVerification)throw new Error(Va);n=n.subarray(Fn)}r.enqueue(Fl(i,n))}})}},am=class extends TransformStream{constructor({password:t,passwordVerification:e}){super({start(){Object.assign(this,{password:t,passwordVerification:e}),gc(this,t)},transform(n,r){let i=this,a,o;if(i.password){i.password=null;let s=cc(new Uint8Array(Fn));s[Fn-1]=i.passwordVerification,a=new Uint8Array(n.length+s.length),a.set(Il(i,s),0),o=Fn}else a=new Uint8Array(n.length),o=0;a.set(Il(i,n),o),r.enqueue(a)}})}};function Fl(t,e){let n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=bc(t)^e[r],Ya(t,n[r]);return n}function Il(t,e){let n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=bc(t)^e[r],Ya(t,e[r]);return n}function gc(t,e){let n=[305419896,591751049,878082192];Object.assign(t,{keys:n,crcKey0:new bi(n[0]),crcKey2:new bi(n[2])});for(let r=0;r<e.length;r++)Ya(t,e.charCodeAt(r))}function Ya(t,e){let[n,r,i]=t.keys;t.crcKey0.append([e]),n=~t.crcKey0.get(),r=Nl(Math.imul(Nl(r+yc(n)),134775813)+1),t.crcKey2.append([r>>>24]),i=~t.crcKey2.get(),t.keys=[n,r,i]}function bc(t){let e=t.keys[2]|2;return yc(Math.imul(e,e^1)>>>8)}function yc(t){return t&255}function Nl(t){return t&4294967295}var zl="deflate-raw",om=class extends TransformStream{constructor(t,{chunkSize:e,CompressionStream:n,CompressionStreamNative:r}){super({});let{compressed:i,encrypted:a,useCompressionStream:o,zipCrypto:s,signed:l,level:u}=t,c=this,d,p,h=wc(super.readable);(!a||s)&&l&&([h,d]=h.tee(),d=Wt(d,new ac)),i&&(h=xc(h,o,{level:u,chunkSize:e},r,n)),a&&(s?h=Wt(h,new am(t)):(p=new Jh(t),h=Wt(h,p))),vc(c,h,async()=>{let b;a&&!s&&(b=p.signature),(!a||s)&&l&&(b=await d.getReader().read(),b=new DataView(b.value.buffer).getUint32(0)),c.signature=b})}},sm=class extends TransformStream{constructor(t,{chunkSize:e,DecompressionStream:n,DecompressionStreamNative:r}){super({});let{zipCrypto:i,encrypted:a,signed:o,signature:s,compressed:l,useCompressionStream:u}=t,c,d,p=wc(super.readable);a&&(i?p=Wt(p,new im(t)):(d=new Zh(t),p=Wt(p,d))),l&&(p=xc(p,u,{chunkSize:e},r,n)),(!a||i)&&o&&([p,c]=p.tee(),c=Wt(c,new ac)),vc(this,p,async()=>{if((!a||i)&&o){let h=await c.getReader().read(),b=new DataView(h.value.buffer);if(s!=b.getUint32(0,!1))throw new Error(Ga)}})}};function wc(t){return Wt(t,new TransformStream({transform(e,n){e&&e.length&&n.enqueue(e)}}))}function vc(t,e,n){e=Wt(e,new TransformStream({flush:n})),Object.defineProperty(t,"readable",{get(){return e}})}function xc(t,e,n,r,i){try{let a=e&&r?r:i;t=Wt(t,new a(zl,n))}catch(a){if(e)t=Wt(t,new i(zl,n));else throw a}return t}function Wt(t,e){return t.pipeThrough(e)}var lm="message",cm="start",um="pull",Bl="data",dm="ack",pm="close",Tc="deflate",_c="inflate",fm=class extends TransformStream{constructor(t,e){super({});let n=this,{codecType:r}=t,i;r.startsWith(Tc)?i=om:r.startsWith(_c)&&(i=sm);let a=0,o=new i(t,e),s=super.readable,l=new TransformStream({transform(u,c){u&&u.length&&(a+=u.length,c.enqueue(u))},flush(){let{signature:u}=o;Object.assign(n,{signature:u,size:a})}});Object.defineProperty(n,"readable",{get(){return s.pipeThrough(o).pipeThrough(l)}})}},hm=typeof Worker!=gi,Ca=class{constructor(t,{readable:e,writable:n},{options:r,config:i,streamOptions:a,useWebWorkers:o,transferStreams:s,scripts:l},u){let{signal:c}=a;return Object.assign(t,{busy:!0,readable:e.pipeThrough(new mm(e,a,i),{signal:c}),writable:n,options:Object.assign({},r),scripts:l,transferStreams:s,terminate(){let{worker:d,busy:p}=t;d&&!p&&(d.terminate(),t.interface=null)},onTaskFinished(){t.busy=!1,u(t)}}),(o&&hm?bm:gm)(t,i)}},mm=class extends TransformStream{constructor(t,{onstart:e,onprogress:n,size:r,onend:i},{chunkSize:a}){let o=0;super({start(){e&&La(e,r)},async transform(s,l){o+=s.length,n&&await La(n,o,r),l.enqueue(s)},flush(){t.size=o,i&&La(i,o)}},{highWaterMark:1,size:()=>a})}};async function La(t,...e){try{await t(...e)}catch{}}function gm(t,e){return{run:()=>ym(t,e)}}function bm(t,{baseURL:e,chunkSize:n}){return t.interface||Object.assign(t,{worker:xm(t.scripts[0],e,t),interface:{run:()=>wm(t,{chunkSize:n})}}),t.interface}async function ym({options:t,readable:e,writable:n,onTaskFinished:r},i){let a=new fm(t,i);try{await e.pipeThrough(a).pipeTo(n,{preventClose:!0,preventAbort:!0});let{signature:o,size:s}=a;return{signature:o,size:s}}finally{r()}}async function wm(t,e){let n,r,i=new Promise((d,p)=>{n=d,r=p});Object.assign(t,{reader:null,writer:null,resolveResult:n,rejectResult:r,result:i});let{readable:a,options:o,scripts:s}=t,{writable:l,closed:u}=vm(t.writable);Na({type:cm,scripts:s.slice(1),options:o,config:e,readable:a,writable:l},t)||Object.assign(t,{reader:a.getReader(),writer:l.getWriter()});let c=await i;try{await l.close()}catch{}return await u,c}function vm(t){let e=t.getWriter(),n,r=new Promise(i=>n=i);return{writable:new WritableStream({async write(i){await e.ready,await e.write(i)},close(){e.releaseLock(),n()},abort(i){return e.abort(i)}}),closed:r}}var Ul=!0,$l=!0;function xm(t,e,n){let r={type:"module"},i,a;typeof t==tc&&(t=t());try{i=new URL(t,e)}catch{i=t}if(Ul)try{a=new Worker(i)}catch{Ul=!1,a=new Worker(i,r)}else a=new Worker(i,r);return a.addEventListener(lm,o=>Tm(o,n)),a}function Na(t,{worker:e,writer:n,onTaskFinished:r,transferStreams:i}){try{let{value:a,readable:o,writable:s}=t,l=[];if(a){let{buffer:u,length:c}=a;c!=u.byteLength&&(a=new Uint8Array(a)),t.value=a.buffer,l.push(t.value)}if(i&&$l?(o&&l.push(o),s&&l.push(s)):t.readable=t.writable=null,l.length)try{return e.postMessage(t,l),!0}catch{$l=!1,t.readable=t.writable=null,e.postMessage(t)}else e.postMessage(t)}catch(a){throw n&&n.releaseLock(),r(),a}}async function Tm({data:t},e){let{type:n,value:r,messageId:i,result:a,error:o}=t,{reader:s,writer:l,resolveResult:u,rejectResult:c,onTaskFinished:d}=e;try{if(o){let{message:h,stack:b,code:g,name:m}=o,f=new Error(h);Object.assign(f,{stack:b,code:g,name:m}),p(f)}else{if(n==um){let{value:h,done:b}=await s.read();Na({type:Bl,value:h,done:b,messageId:i},e)}n==Bl&&(await l.ready,await l.write(new Uint8Array(r)),Na({type:dm,messageId:i},e)),n==pm&&p(null,a)}}catch(h){p(h)}function p(h,b){h?c(h):u(b),l&&l.releaseLock(),d()}}var pn=[],Ra=[],Hl=0;async function Sc(t,e){let{options:n,config:r}=e,{transferStreams:i,useWebWorkers:a,useCompressionStream:o,codecType:s,compressed:l,signed:u,encrypted:c}=n,{workerScripts:d,maxWorkers:p,terminateWorkerTimeout:h}=r;e.transferStreams=i||i===ze;let b=!l&&!u&&!c&&!e.transferStreams;e.useWebWorkers=!b&&(a||a===ze&&r.useWebWorkers),e.scripts=e.useWebWorkers&&d?d[s]:[],n.useCompressionStream=o||o===ze&&r.useCompressionStream;let g,m=pn.find(y=>!y.busy);if(m)za(m),g=new Ca(m,t,e,f);else if(pn.length<p){let y={indexWorker:Hl};Hl++,pn.push(y),g=new Ca(y,t,e,f)}else g=await new Promise(y=>Ra.push({resolve:y,stream:t,workerOptions:e}));return g.run();function f(y){if(Ra.length){let[{resolve:w,stream:A,workerOptions:S}]=Ra.splice(0,1);w(new Ca(y,A,S,f))}else y.worker?(za(y),Number.isFinite(h)&&h>=0&&(y.terminateTimeout=setTimeout(()=>{pn=pn.filter(w=>w!=y),y.terminate()},h))):pn=pn.filter(w=>w!=y)}}function za(t){let{terminateTimeout:e}=t;e&&(clearTimeout(e),t.terminateTimeout=null)}function _m(){pn.forEach(t=>{za(t),t.terminate()})}var kc="HTTP error ",br="HTTP Range not supported",Ac="Writer iterator completed too soon",Sm="text/plain",km="Content-Length",Am="Content-Range",Em="Accept-Ranges",Cm="Range",Lm="Content-Type",Rm="HEAD",Za="GET",Ec="bytes",Dm=64*1024,Ja="writable",ki=class{constructor(){this.size=0}init(){this.initialized=!0}},hn=class extends ki{get readable(){let t=this,{chunkSize:e=Dm}=t,n=new ReadableStream({start(){this.chunkOffset=0},async pull(r){let{offset:i=0,size:a,diskNumberStart:o}=n,{chunkOffset:s}=this;r.enqueue(await et(t,i+s,Math.min(e,a-s),o)),s+e>a?r.close():this.chunkOffset+=e}});return n}},Qa=class extends ki{constructor(){super();let t=this,e=new WritableStream({write(n){return t.writeUint8Array(n)}});Object.defineProperty(t,Ja,{get(){return e}})}writeUint8Array(){}},Mm=class extends hn{constructor(t){super();let e=t.length;for(;t.charAt(e-1)=="=";)e--;let n=t.indexOf(",")+1;Object.assign(this,{dataURI:t,dataStart:n,size:Math.floor((e-n)*.75)})}readUint8Array(t,e){let{dataStart:n,dataURI:r}=this,i=new Uint8Array(e),a=Math.floor(t/3)*4,o=atob(r.substring(a+n,Math.ceil((t+e)/3)*4+n)),s=t-Math.floor(a/4)*3;for(let l=s;l<s+e;l++)i[l-s]=o.charCodeAt(l);return i}},Pm=class extends Qa{constructor(t){super(),Object.assign(this,{data:"data:"+(t||"")+";base64,",pending:[]})}writeUint8Array(t){let e=this,n=0,r=e.pending,i=e.pending.length;for(e.pending="",n=0;n<Math.floor((i+t.length)/3)*3-i;n++)r+=String.fromCharCode(t[n]);for(;n<t.length;n++)e.pending+=String.fromCharCode(t[n]);r.length>2?e.data+=btoa(r):e.pending=r}getData(){return this.data+btoa(this.pending)}},eo=class extends hn{constructor(t){super(),Object.assign(this,{blob:t,size:t.size})}async readUint8Array(t,e){let n=this,r=t+e,i=t||r<n.size?n.blob.slice(t,r):n.blob;return new Uint8Array(await i.arrayBuffer())}},to=class extends ki{constructor(t){super();let e=this,n=new TransformStream,r=[];t&&r.push([Lm,t]),Object.defineProperty(e,Ja,{get(){return n.writable}}),e.blob=new Response(n.readable,{headers:r}).blob()}getData(){return this.blob}},Om=class extends eo{constructor(t){super(new Blob([t],{type:Sm}))}},Fm=class extends to{constructor(t){super(t),Object.assign(this,{encoding:t,utf8:!t||t.toLowerCase()=="utf-8"})}async getData(){let{encoding:t,utf8:e}=this,n=await super.getData();if(n.text&&e)return n.text();{let r=new FileReader;return new Promise((i,a)=>{Object.assign(r,{onload:({target:o})=>i(o.result),onerror:()=>a(r.error)}),r.readAsText(n,t)})}}},Im=class extends hn{constructor(t,e){super(),Cc(this,t,e)}async init(){await Lc(this,Ba,jl),super.init()}readUint8Array(t,e){return Rc(this,t,e,Ba,jl)}},Nm=class extends hn{constructor(t,e){super(),Cc(this,t,e)}async init(){await Lc(this,Ua,Wl),super.init()}readUint8Array(t,e){return Rc(this,t,e,Ua,Wl)}};function Cc(t,e,n){let{preventHeadRequest:r,useRangeHeader:i,forceRangeRequests:a}=n;n=Object.assign({},n),delete n.preventHeadRequest,delete n.useRangeHeader,delete n.forceRangeRequests,delete n.useXHR,Object.assign(t,{url:e,options:n,preventHeadRequest:r,useRangeHeader:i,forceRangeRequests:a})}async function Lc(t,e,n){let{url:r,useRangeHeader:i,forceRangeRequests:a}=t;if($m(r)&&(i||a)){let{headers:o}=await e(Za,t,Dc(t));if(!a&&o.get(Em)!=Ec)throw new Error(br);{let s,l=o.get(Am);if(l){let u=l.trim().split(/\s*\/\s*/);if(u.length){let c=u[1];c&&c!="*"&&(s=Number(c))}}s===ze?await ql(t,e,n):t.size=s}}else await ql(t,e,n)}async function Rc(t,e,n,r,i){let{useRangeHeader:a,forceRangeRequests:o,options:s}=t;if(a||o){let l=await r(Za,t,Dc(t,e,n));if(l.status!=206)throw new Error(br);return new Uint8Array(await l.arrayBuffer())}else{let{data:l}=t;return l||await i(t,s),new Uint8Array(t.data.subarray(e,e+n))}}function Dc(t,e=0,n=1){return Object.assign({},no(t),{[Cm]:Ec+"="+e+"-"+(e+n-1)})}function no({options:t}){let{headers:e}=t;if(e)return Symbol.iterator in e?Object.fromEntries(e):e}async function jl(t){await Mc(t,Ba)}async function Wl(t){await Mc(t,Ua)}async function Mc(t,e){let n=await e(Za,t,no(t));t.data=new Uint8Array(await n.arrayBuffer()),t.size||(t.size=t.data.length)}async function ql(t,e,n){if(t.preventHeadRequest)await n(t,t.options);else{let r=(await e(Rm,t,no(t))).headers.get(km);r?t.size=Number(r):await n(t,t.options)}}async function Ba(t,{options:e,url:n},r){let i=await fetch(n,Object.assign({},e,{method:t,headers:r}));if(i.status<400)return i;throw i.status==416?new Error(br):new Error(kc+(i.statusText||i.status))}function Ua(t,{url:e},n){return new Promise((r,i)=>{let a=new XMLHttpRequest;if(a.addEventListener("load",()=>{if(a.status<400){let o=[];a.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach(s=>{let l=s.trim().split(/\s*:\s*/);l[0]=l[0].trim().replace(/^[a-z]|-[a-z]/g,u=>u.toUpperCase()),o.push(l)}),r({status:a.status,arrayBuffer:()=>a.response,headers:new Map(o)})}else i(a.status==416?new Error(br):new Error(kc+(a.statusText||a.status)))},!1),a.addEventListener("error",o=>i(o.detail.error),!1),a.open(t,e),n)for(let o of Object.entries(n))a.setRequestHeader(o[0],o[1]);a.responseType="arraybuffer",a.send()})}var Pc=class extends hn{constructor(t,e={}){super(),Object.assign(this,{url:t,reader:e.useXHR?new Nm(t,e):new Im(t,e)})}set size(t){}get size(){return this.reader.size}async init(){await this.reader.init(),super.init()}readUint8Array(t,e){return this.reader.readUint8Array(t,e)}},zm=class extends Pc{constructor(t,e={}){e.useRangeHeader=!0,super(t,e)}},Bm=class extends hn{constructor(t){super(),Object.assign(this,{array:t,size:t.length})}readUint8Array(t,e){return this.array.slice(t,t+e)}},Um=class extends Qa{init(t=0){Object.assign(this,{offset:0,array:new Uint8Array(t)}),super.init()}writeUint8Array(t){let e=this;if(e.offset+t.length>e.array.length){let n=e.array;e.array=new Uint8Array(n.length+t.length),e.array.set(n)}e.array.set(t,e.offset),e.offset+=t.length}getData(){return this.array}},ro=class extends hn{constructor(t){super(),this.readers=t}async init(){let t=this,{readers:e}=t;t.lastDiskNumber=0,await Promise.all(e.map(async n=>{await n.init(),t.size+=n.size})),super.init()}async readUint8Array(t,e,n=0){let r=this,{readers:i}=this,a,o=n;o==-1&&(o=i.length-1);let s=t;for(;s>=i[o].size;)s-=i[o].size,o++;let l=i[o],u=l.size;if(s+e<=u)a=await et(l,s,e);else{let c=u-s;a=new Uint8Array(e),a.set(await et(l,s,c)),a.set(await r.readUint8Array(t+c,e-c,n),c)}return r.lastDiskNumber=Math.max(o,r.lastDiskNumber),a}},mr=class extends ki{constructor(t,e=4294967295){super();let n=this;Object.assign(n,{diskNumber:0,diskOffset:0,size:0,maxSize:e,availableSize:e});let r,i,a,o=new WritableStream({async write(u){let{availableSize:c}=n;if(a)u.length>=c?(await s(u.slice(0,c)),await l(),n.diskOffset+=r.size,n.diskNumber++,a=null,await this.write(u.slice(c))):await s(u);else{let{value:d,done:p}=await t.next();if(p&&!d)throw new Error(Ac);r=d,r.size=0,r.maxSize&&(n.maxSize=r.maxSize),n.availableSize=n.maxSize,await Jt(r),i=d.writable,a=i.getWriter(),await this.write(u)}},async close(){await a.ready,await l()}});Object.defineProperty(n,Ja,{get(){return o}});async function s(u){let c=u.length;c&&(await a.ready,await a.write(u),r.size+=c,n.size+=c,n.availableSize-=c)}async function l(){i.size=r.size,await a.close()}}};function $m(t){let{baseURL:e}=Ka(),{protocol:n}=new URL(t,e);return n=="http:"||n=="https:"}async function Jt(t,e){t.init&&!t.initialized&&await t.init(e)}function io(t){return Array.isArray(t)&&(t=new ro(t)),t instanceof ReadableStream&&(t={readable:t}),t}function ao(t){t.writable===ze&&typeof t.next==tc&&(t=new mr(t)),t instanceof WritableStream&&(t={writable:t});let{writable:e}=t;return e.size===ze&&(e.size=0),t instanceof mr||Object.assign(t,{diskNumber:0,diskOffset:0,availableSize:1/0,maxSize:1/0}),t}function et(t,e,n,r){return t.readUint8Array(e,n,r)}var Hm=ro,jm=mr,Oc="\0\u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0 ".split(""),Wm=Oc.length==256;function qm(t){if(Wm){let e="";for(let n=0;n<t.length;n++)e+=Oc[t[n]];return e}else return new TextDecoder().decode(t)}function $a(t,e){return e&&e.trim().toLowerCase()=="cp437"?qm(t):new TextDecoder(e).decode(t)}var Fc="filename",Ic="rawFilename",Nc="comment",zc="rawComment",Bc="uncompressedSize",Uc="compressedSize",$c="offset",Ha="diskNumberStart",oo="lastModDate",Hc="rawLastModDate",so="lastAccessDate",Km="rawLastAccessDate",lo="creationDate",Vm="rawCreationDate",jc="internalFileAttribute",Wc="externalFileAttribute",qc="msDosCompatible",Kc="zip64",Gm=[Fc,Ic,Uc,Bc,oo,Hc,Nc,zc,so,lo,$c,Ha,Ha,jc,Wc,qc,Kc,"directory","bitFlag","encrypted","signature","filenameUTF8","commentUTF8","compressionMethod","version","versionMadeBy","extraField","rawExtraField","extraFieldZip64","extraFieldUnicodePath","extraFieldUnicodeComment","extraFieldAES","extraFieldNTFS","extraFieldExtendedTimestamp"],wi=class{constructor(t){Gm.forEach(e=>this[e]=t[e])}},hi="File format is not recognized",Vc="End of central directory not found",Gc="End of Zip64 central directory not found",Xc="End of Zip64 central directory locator not found",Yc="Central directory header not found",Zc="Local file header not found",Jc="Zip64 extra field not found",Qc="File contains encrypted entry",eu="Encryption method not supported",ja="Compression method not supported",Wa="Split zip file",Kl="utf-8",Vl="cp437",Xm=[[Bc,4294967295],[Uc,4294967295],[$c,4294967295],[Ha,65535]],Ym={65535:{getValue:Pe,bytes:4},4294967295:{getValue:mi,bytes:8}},Zm=class{constructor(t,e={}){Object.assign(this,{reader:io(t),options:e,config:Ka()})}async*getEntriesGenerator(t={}){let e=this,{reader:n}=e,{config:r}=e;if(await Jt(n),(n.size===ze||!n.readUint8Array)&&(n=new eo(await new Response(n.readable).blob()),await Jt(n)),n.size<22)throw new Error(hi);n.chunkSize=rc(r);let i=await rg(n,101010256,n.size,22,65535*16);if(!i){let v=await et(n,0,4),E=Ye(v);throw Pe(E)==134695760?new Error(Wa):new Error(Vc)}let a=Ye(i),o=Pe(a,12),s=Pe(a,16),l=i.offset,u=qe(a,20),c=l+22+u,d=qe(a,4),p=n.lastDiskNumber||0,h=qe(a,6),b=qe(a,8),g=0,m=0;if(s==4294967295||o==4294967295||b==65535||h==65535){let v=await et(n,i.offset-20,20),E=Ye(v);if(Pe(E,0)!=117853008)throw new Error(Gc);s=mi(E,8);let _=await et(n,s,56,-1),C=Ye(_),R=i.offset-20-56;if(Pe(C,0)!=101075792&&s!=R){let D=s;s=R,g=s-D,_=await et(n,s,56,-1),C=Ye(_)}if(Pe(C,0)!=101075792)throw new Error(Xc);d==65535&&(d=Pe(C,16)),h==65535&&(h=Pe(C,20)),b==65535&&(b=mi(C,32)),o==4294967295&&(o=mi(C,40)),s-=o}if(p!=d)throw new Error(Wa);if(s<0||s>=n.size)throw new Error(hi);let f=0,y=await et(n,s,o,h),w=Ye(y);if(o){let v=i.offset-o;if(Pe(w,f)!=33639248&&s!=v){let E=s;s=v,g=s-E,y=await et(n,s,o,h),w=Ye(y)}}if(s<0||s>=n.size)throw new Error(hi);let A=Ft(e,t,"filenameEncoding"),S=Ft(e,t,"commentEncoding");for(let v=0;v<b;v++){let E=new Jm(n,r,e.options);if(Pe(w,f)!=33639248)throw new Error(Yc);tu(E,w,f+6);let _=!!E.bitFlag.languageEncodingFlag,C=f+46,R=C+E.filenameLength,D=R+E.extraFieldLength,I=qe(w,f+4),M=(I&0)==0,N=y.subarray(C,R),z=qe(w,f+32),Y=D+z,te=y.subarray(D,Y),V=_,ee=_,L=M&&(In(w,f+38)&16)==16,F=Pe(w,f+42)+g;Object.assign(E,{versionMadeBy:I,msDosCompatible:M,compressedSize:0,uncompressedSize:0,commentLength:z,directory:L,offset:F,diskNumberStart:qe(w,f+34),internalFileAttribute:qe(w,f+36),externalFileAttribute:Pe(w,f+38),rawFilename:N,filenameUTF8:V,commentUTF8:ee,rawExtraField:y.subarray(R,D)});let[$,q]=await Promise.all([$a(N,V?Kl:A||Vl),$a(te,ee?Kl:S||Vl)]);Object.assign(E,{rawComment:te,filename:$,comment:q,directory:L||$.endsWith(fi)}),m=Math.max(F,m),await nu(E,E,w,f+6);let G=new wi(E);G.getData=(he,me)=>E.getData(he,G,me),f=Y;let{onprogress:ue}=t;if(ue)try{await ue(v+1,b,new wi(E))}catch{}yield G}let x=Ft(e,t,"extractPrependedData"),k=Ft(e,t,"extractAppendedData");return x&&(e.prependedData=m>0?await et(n,0,m):new Uint8Array),e.comment=u?await et(n,l+22,u):new Uint8Array,k&&(e.appendedData=c<n.size?await et(n,c,n.size-c):new Uint8Array),!0}async getEntries(t={}){let e=[];for await(let n of this.getEntriesGenerator(t))e.push(n);return e}async close(){}},Jm=class{constructor(t,e,n){Object.assign(this,{reader:t,config:e,options:n})}async getData(t,e,n={}){let r=this,{reader:i,offset:a,diskNumberStart:o,extraFieldAES:s,compressionMethod:l,config:u,bitFlag:c,signature:d,rawLastModDate:p,uncompressedSize:h,compressedSize:b}=r,g=r.localDirectory={},m=await et(i,a,30,o),f=Ye(m),y=Ft(r,n,"password");if(y=y&&y.length&&y,s&&s.originalCompressionMethod!=99)throw new Error(ja);if(l!=0&&l!=8)throw new Error(ja);if(Pe(f,0)!=67324752)throw new Error(Zc);tu(g,f,4),g.rawExtraField=g.extraFieldLength?await et(i,a+30+g.filenameLength,g.extraFieldLength,o):new Uint8Array,await nu(r,g,f,4),Object.assign(e,{lastAccessDate:g.lastAccessDate,creationDate:g.creationDate});let w=r.encrypted&&g.encrypted,A=w&&!s;if(w){if(!A&&s.strength===ze)throw new Error(eu);if(!y)throw new Error(Qc)}let S=a+30+g.filenameLength+g.extraFieldLength,x=i.readable;x.diskNumberStart=o,x.offset=S;let k=x.size=b,v=Ft(r,n,"signal");t=ao(t),await Jt(t,h);let{writable:E}=t,{onstart:_,onprogress:C,onend:R}=n,D={options:{codecType:_c,password:y,zipCrypto:A,encryptionStrength:s&&s.strength,signed:Ft(r,n,"checkSignature"),passwordVerification:A&&(c.dataDescriptor?p>>>8&255:d>>>24&255),signature:d,compressed:l!=0,encrypted:w,useWebWorkers:Ft(r,n,"useWebWorkers"),useCompressionStream:Ft(r,n,"useCompressionStream"),transferStreams:Ft(r,n,"transferStreams")},config:u,streamOptions:{signal:v,size:k,onstart:_,onprogress:C,onend:R}};return E.size+=(await Sc({readable:x,writable:E},D)).size,Ft(r,n,"preventClose")||await E.close(),t.getData?t.getData():E}};function tu(t,e,n){let r=t.rawBitFlag=qe(e,n+2),i=(r&1)==1,a=Pe(e,n+6);Object.assign(t,{encrypted:i,version:qe(e,n),bitFlag:{level:(r&6)>>1,dataDescriptor:(r&8)==8,languageEncodingFlag:(r&2048)==2048},rawLastModDate:a,lastModDate:ig(a),filenameLength:qe(e,n+22),extraFieldLength:qe(e,n+24)})}async function nu(t,e,n,r){let{rawExtraField:i}=e,a=e.extraField=new Map,o=Ye(new Uint8Array(i)),s=0;try{for(;s<i.length;){let g=qe(o,s),m=qe(o,s+2);a.set(g,{type:g,data:i.slice(s+4,s+4+m)}),s+=4+m}}catch{}let l=qe(n,r+4);Object.assign(e,{signature:Pe(n,r+10),uncompressedSize:Pe(n,r+18),compressedSize:Pe(n,r+14)});let u=a.get(1);u&&(Qm(u,e),e.extraFieldZip64=u);let c=a.get(28789);c&&(await Gl(c,Fc,Ic,e,t),e.extraFieldUnicodePath=c);let d=a.get(25461);d&&(await Gl(d,Nc,zc,e,t),e.extraFieldUnicodeComment=d);let p=a.get(39169);p?(eg(p,e,l),e.extraFieldAES=p):e.compressionMethod=l;let h=a.get(10);h&&(tg(h,e),e.extraFieldNTFS=h);let b=a.get(21589);b&&(ng(b,e),e.extraFieldExtendedTimestamp=b)}function Qm(t,e){e.zip64=!0;let n=Ye(t.data),r=Xm.filter(([i,a])=>e[i]==a);for(let i=0,a=0;i<r.length;i++){let[o,s]=r[i];if(e[o]==s){let l=Ym[s];e[o]=t[o]=l.getValue(n,a),a+=l.bytes}else if(t[o])throw new Error(Jc)}}async function Gl(t,e,n,r,i){let a=Ye(t.data),o=new bi;o.append(i[n]);let s=Ye(new Uint8Array(4));s.setUint32(0,o.get(),!0),Object.assign(t,{version:In(a,0),signature:Pe(a,1),[e]:await $a(t.data.subarray(5)),valid:!i.bitFlag.languageEncodingFlag&&t.signature==Pe(s,0)}),t.valid&&(r[e]=t[e],r[e+"UTF8"]=!0)}function eg(t,e,n){let r=Ye(t.data),i=In(r,4);Object.assign(t,{vendorVersion:In(r,0),vendorId:In(r,2),strength:i,originalCompressionMethod:n,compressionMethod:qe(r,5)}),e.compressionMethod=t.compressionMethod}function tg(t,e){let n=Ye(t.data),r=4,i;try{for(;r<t.data.length&&!i;){let a=qe(n,r),o=qe(n,r+2);a==1&&(i=t.data.slice(r+4,r+4+o)),r+=4+o}}catch{}try{if(i&&i.length==24){let a=Ye(i),o=a.getBigUint64(0,!0),s=a.getBigUint64(8,!0),l=a.getBigUint64(16,!0);Object.assign(t,{rawLastModDate:o,rawLastAccessDate:s,rawCreationDate:l});let u=Da(o),c=Da(s),d=Da(l),p={lastModDate:u,lastAccessDate:c,creationDate:d};Object.assign(t,p),Object.assign(e,p)}}catch{}}function ng(t,e){let n=Ye(t.data),r=In(n,0),i=[],a=[];(r&1)==1&&(i.push(oo),a.push(Hc)),(r&2)==2&&(i.push(so),a.push(Km)),(r&4)==4&&(i.push(lo),a.push(Vm));let o=1;i.forEach((s,l)=>{if(t.data.length>=o+4){let u=Pe(n,o);e[s]=t[s]=new Date(u*1e3);let c=a[l];t[c]=u}o+=4})}async function rg(t,e,n,r,i){let a=new Uint8Array(4),o=Ye(a);ag(o,0,e);let s=r+i;return await l(r)||await l(Math.min(s,n));async function l(u){let c=n-u,d=await et(t,c,u);for(let p=d.length-r;p>=0;p--)if(d[p]==a[0]&&d[p+1]==a[1]&&d[p+2]==a[2]&&d[p+3]==a[3])return{offset:c+p,buffer:d.slice(p,p+r).buffer}}}function Ft(t,e,n){return e[n]===ze?t.options[n]:e[n]}function ig(t){let e=(t&4294901760)>>16,n=t&65535;try{return new Date(1980+((e&65024)>>9),((e&480)>>5)-1,e&31,(n&63488)>>11,(n&2016)>>5,(n&31)*2,0)}catch{}}function Da(t){return new Date(Number(t/BigInt(1e4)-BigInt(116444736e5)))}function In(t,e){return t.getUint8(e)}function qe(t,e){return t.getUint16(e,!0)}function Pe(t,e){return t.getUint32(e,!0)}function mi(t,e){return Number(t.getBigUint64(e,!0))}function ag(t,e,n){t.setUint32(e,n,!0)}function Ye(t){return new DataView(t.buffer)}var ru="File already exists",iu="Zip file comment exceeds 64KB",au="File entry comment exceeds 64KB",ou="File entry name exceeds 64KB",qa="Version exceeds 65535",su="The strength must equal 1, 2, or 3",lu="Extra field type exceeds 65535",cu="Extra field data exceeds 64KB",Ai="Zip64 is not supported (make sure 'keepOrder' is set to 'true')",Xl=new Uint8Array([7,0,2,0,65,69,3,0,0]),Ma=0,Yl=[],og=class{constructor(t,e={}){t=ao(t),Object.assign(this,{writer:t,addSplitZipSignature:t instanceof mr,options:e,config:Ka(),files:new Map,filenames:new Set,offset:t.writable.size,pendingEntriesSize:0,pendingAddFileCalls:new Set,bufferedWrites:0})}async add(t="",e,n={}){let r=this,{pendingAddFileCalls:i,config:a}=r;Ma<a.maxWorkers?Ma++:await new Promise(s=>Yl.push(s));let o;try{if(t=t.trim(),r.filenames.has(t))throw new Error(ru);return r.filenames.add(t),o=sg(r,t,e,n),i.add(o),await o}catch(s){throw r.filenames.delete(t),s}finally{i.delete(o);let s=Yl.shift();s?s():Ma--}}async close(t=new Uint8Array,e={}){let n=this,{pendingAddFileCalls:r,writer:i}=this,{writable:a}=i;for(;r.size;)await Promise.all(Array.from(r));return await mg(this,t,e),Ee(n,e,"preventClose")||await a.close(),i.getData?i.getData():a}};async function sg(t,e,n,r){e=e.trim(),r.directory&&!e.endsWith(fi)?e+=fi:r.directory=e.endsWith(fi);let i=Fa(e);if(Te(i)>65535)throw new Error(ou);let a=r.comment||"",o=Fa(a);if(Te(o)>65535)throw new Error(au);let s=Ee(t,r,"version",20);if(s>65535)throw new Error(qa);let l=Ee(t,r,"versionMadeBy",20);if(l>65535)throw new Error(qa);let u=Ee(t,r,oo,new Date),c=Ee(t,r,so),d=Ee(t,r,lo),p=Ee(t,r,qc,!0),h=Ee(t,r,jc,0),b=Ee(t,r,Wc,0),g=Ee(t,r,"password"),m=Ee(t,r,"encryptionStrength",3),f=Ee(t,r,"zipCrypto"),y=Ee(t,r,"extendedTimestamp",!0),w=Ee(t,r,"keepOrder",!0),A=Ee(t,r,"level"),S=Ee(t,r,"useWebWorkers"),x=Ee(t,r,"bufferedWrite"),k=Ee(t,r,"dataDescriptorSignature",!1),v=Ee(t,r,"signal"),E=Ee(t,r,"useCompressionStream"),_=Ee(t,r,"dataDescriptor",!0),C=Ee(t,r,Kc);if(g!==ze&&m!==ze&&(m<1||m>3))throw new Error(su);let R=new Uint8Array,{extraField:D}=r;if(D){let he=0,me=0;D.forEach(Z=>he+=4+Te(Z)),R=new Uint8Array(he),D.forEach((Z,ie)=>{if(ie>65535)throw new Error(lu);if(Te(Z)>65535)throw new Error(cu);Ke(R,new Uint16Array([ie]),me),Ke(R,new Uint16Array([Te(Z)]),me+2),Ke(R,Z,me+4),me+=4+Te(Z)})}let I=0,M=0,N=0,z=C===!0;n&&(n=io(n),await Jt(n),n.size===ze?(_=!0,(C||C===ze)&&(C=!0,I=4294967295)):(N=n.size,I=bg(N)));let{diskOffset:Y,diskNumber:te,maxSize:V}=t.writer,ee=z||N>=4294967295,L=z||I>=4294967295,F=z||t.offset+t.pendingEntriesSize-Y>=4294967295,$=Ee(t,r,"supportZip64SplitFile",!0)&&z||te+Math.ceil(t.pendingEntriesSize/V)>=65535;if(F||ee||L||$){if(C===!1||!w)throw new Error(Ai);C=!0}C=C||!1,r=Object.assign({},r,{rawFilename:i,rawComment:o,version:s,versionMadeBy:l,lastModDate:u,lastAccessDate:c,creationDate:d,rawExtraField:R,zip64:C,zip64UncompressedSize:ee,zip64CompressedSize:L,zip64Offset:F,zip64DiskNumberStart:$,password:g,level:A,useWebWorkers:S,encryptionStrength:m,extendedTimestamp:y,zipCrypto:f,bufferedWrite:x,keepOrder:w,dataDescriptor:_,dataDescriptorSignature:k,signal:v,msDosCompatible:p,internalFileAttribute:h,externalFileAttribute:b,useCompressionStream:E});let q=ug(r),G=dg(r);M=Te(q.localHeaderArray,G.dataDescriptorArray)+I,t.pendingEntriesSize+=M;let ue;try{ue=await lg(t,e,n,{headerInfo:q,dataDescriptorInfo:G},r)}finally{t.pendingEntriesSize-=M}return Object.assign(ue,{name:e,comment:a,extraField:D}),new wi(ue)}async function lg(t,e,n,r,i){let{files:a,writer:o}=t,{keepOrder:s,dataDescriptor:l,signal:u}=i,{headerInfo:c}=r,d=Array.from(a.values()).pop(),p={},h,b,g,m,f,y;a.set(e,p);try{let x;s&&(x=d&&d.lock,w()),i.bufferedWrite||t.writerLocked||t.bufferedWrites&&s||!l?(y=new to,y.writable.size=0,h=!0,t.bufferedWrites++,await Jt(o)):(y=o,await A()),await Jt(y);let{writable:k}=o,{diskOffset:v}=o;if(t.addSplitZipSignature){delete t.addSplitZipSignature;let _=new Uint8Array(4),C=ht(_);ye(C,0,134695760),await Ht(k,_),t.offset+=4}h||(await x,await S(k));let{diskNumber:E}=o;if(f=!0,p.diskNumberStart=E,p=await cg(n,y,p,r,t.config,i),f=!1,a.set(e,p),p.filename=e,h){await y.writable.close();let _=await y.getData();await x,await A(),m=!0,l||(_=await fg(p,_,k,i)),await S(k),p.diskNumberStart=o.diskNumber,v=o.diskOffset,await _.stream().pipeTo(k,{preventClose:!0,preventAbort:!0,signal:u}),k.size+=_.size,m=!1}if(p.offset=t.offset-v,p.zip64)hg(p,i);else if(p.offset>=4294967295)throw new Error(Ai);return t.offset+=p.length,p}catch(x){if(h&&m||!h&&f){if(t.hasCorruptedEntries=!0,x)try{x.corruptedEntry=!0}catch{}h?t.offset+=y.writable.size:t.offset=y.writable.size}throw a.delete(e),x}finally{h&&t.bufferedWrites--,g&&g(),b&&b()}function w(){p.lock=new Promise(x=>g=x)}async function A(){t.writerLocked=!0;let{lockWriter:x}=t;t.lockWriter=new Promise(k=>b=()=>{t.writerLocked=!1,k()}),await x}async function S(x){c.localHeaderArray.length>o.availableSize&&(o.availableSize=0,await Ht(x,new Uint8Array))}}async function cg(t,e,{diskNumberStart:n,lock:r},i,a,o){let{headerInfo:s,dataDescriptorInfo:l}=i,{localHeaderArray:u,headerArray:c,lastModDate:d,rawLastModDate:p,encrypted:h,compressed:b,version:g,compressionMethod:m,rawExtraFieldExtendedTimestamp:f,rawExtraFieldNTFS:y,rawExtraFieldAES:w}=s,{dataDescriptorArray:A}=l,{rawFilename:S,lastAccessDate:x,creationDate:k,password:v,level:E,zip64:_,zip64UncompressedSize:C,zip64CompressedSize:R,zip64Offset:D,zip64DiskNumberStart:I,zipCrypto:M,dataDescriptor:N,directory:z,versionMadeBy:Y,rawComment:te,rawExtraField:V,useWebWorkers:ee,onstart:L,onprogress:F,onend:$,signal:q,encryptionStrength:G,extendedTimestamp:ue,msDosCompatible:he,internalFileAttribute:me,externalFileAttribute:Z,useCompressionStream:ie}=o,oe={lock:r,versionMadeBy:Y,zip64:_,directory:!!z,filenameUTF8:!0,rawFilename:S,commentUTF8:!0,rawComment:te,rawExtraFieldExtendedTimestamp:f,rawExtraFieldNTFS:y,rawExtraFieldAES:w,rawExtraField:V,extendedTimestamp:ue,msDosCompatible:he,internalFileAttribute:me,externalFileAttribute:Z,diskNumberStart:n},le=0,J=0,ae,{writable:de}=e;if(t){t.chunkSize=rc(a),await Ht(de,u);let re=t.readable,Re=re.size=t.size,Ie={options:{codecType:Tc,level:E,password:v,encryptionStrength:G,zipCrypto:h&&M,passwordVerification:h&&M&&p>>8&255,signed:!0,compressed:b,encrypted:h,useWebWorkers:ee,useCompressionStream:ie,transferStreams:!1},config:a,streamOptions:{signal:q,size:Re,onstart:L,onprogress:F,onend:$}},ve=await Sc({readable:re,writable:de},Ie);de.size+=ve.size,ae=ve.signature,J=t.size=re.size,le=ve.size}else await Ht(de,u);let be;if(_){let re=4;C&&(re+=8),R&&(re+=8),D&&(re+=8),I&&(re+=4),be=new Uint8Array(re)}else be=new Uint8Array;return t&&pg({signature:ae,rawExtraFieldZip64:be,compressedSize:le,uncompressedSize:J,headerInfo:s,dataDescriptorInfo:l},o),N&&await Ht(de,A),Object.assign(oe,{uncompressedSize:J,compressedSize:le,lastModDate:d,rawLastModDate:p,creationDate:k,lastAccessDate:x,encrypted:h,length:Te(u,A)+le,compressionMethod:m,version:g,headerArray:c,signature:ae,rawExtraFieldZip64:be,zip64UncompressedSize:C,zip64CompressedSize:R,zip64Offset:D,zip64DiskNumberStart:I}),oe}function ug(t){let{rawFilename:e,lastModDate:n,lastAccessDate:r,creationDate:i,password:a,level:o,zip64:s,zipCrypto:l,dataDescriptor:u,directory:c,rawExtraField:d,encryptionStrength:p,extendedTimestamp:h}=t,b=o!==0&&!c,g=!!(a&&Te(a)),m=t.version,f;if(g&&!l){f=new Uint8Array(Te(Xl)+2);let M=ht(f);Se(M,0,39169),Ke(f,Xl,2),vi(M,8,p)}else f=new Uint8Array;let y,w;if(h){w=new Uint8Array(9+(r?4:0)+(i?4:0));let M=ht(w);Se(M,0,21589),Se(M,2,Te(w)-4);let N=1+(r?2:0)+(i?4:0);vi(M,4,N),ye(M,5,Math.floor(n.getTime()/1e3)),r&&ye(M,9,Math.floor(r.getTime()/1e3)),i&&ye(M,13,Math.floor(i.getTime()/1e3));try{y=new Uint8Array(36);let z=ht(y),Y=Pa(n);Se(z,0,10),Se(z,2,32),Se(z,8,1),Se(z,10,24),ft(z,12,Y),ft(z,20,Pa(r)||Y),ft(z,28,Pa(i)||Y)}catch{y=new Uint8Array}}else y=w=new Uint8Array;let A=2048;u&&(A=A|8);let S=0;b&&(S=8),s&&(m=m>45?m:45),g&&(A=A|1,l||(m=m>51?m:51,S=99,b&&(f[9]=8)));let x=new Uint8Array(26),k=ht(x);Se(k,0,m),Se(k,2,A),Se(k,4,S);let v=new Uint32Array(1),E=ht(v),_;n<Dl?_=Dl:n>Rl?_=Rl:_=n,Se(E,0,(_.getHours()<<6|_.getMinutes())<<5|_.getSeconds()/2),Se(E,2,(_.getFullYear()-1980<<4|_.getMonth()+1)<<5|_.getDate());let C=v[0];ye(k,6,C),Se(k,22,Te(e));let R=Te(f,w,y,d);Se(k,24,R);let D=new Uint8Array(30+Te(e)+R),I=ht(D);return ye(I,0,67324752),Ke(D,x,4),Ke(D,e,30),Ke(D,f,30+Te(e)),Ke(D,w,30+Te(e,f)),Ke(D,y,30+Te(e,f,w)),Ke(D,d,30+Te(e,f,w,y)),{localHeaderArray:D,headerArray:x,headerView:k,lastModDate:n,rawLastModDate:C,encrypted:g,compressed:b,version:m,compressionMethod:S,rawExtraFieldExtendedTimestamp:w,rawExtraFieldNTFS:y,rawExtraFieldAES:f}}function dg(t){let{zip64:e,dataDescriptor:n,dataDescriptorSignature:r}=t,i=new Uint8Array,a,o=0;return n&&(i=new Uint8Array(e?r?24:20:r?16:12),a=ht(i),r&&(o=4,ye(a,0,134695760))),{dataDescriptorArray:i,dataDescriptorView:a,dataDescriptorOffset:o}}function pg(t,e){let{signature:n,rawExtraFieldZip64:r,compressedSize:i,uncompressedSize:a,headerInfo:o,dataDescriptorInfo:s}=t,{headerView:l,encrypted:u}=o,{dataDescriptorView:c,dataDescriptorOffset:d}=s,{zip64:p,zip64UncompressedSize:h,zip64CompressedSize:b,zipCrypto:g,dataDescriptor:m}=e;if((!u||g)&&n!==ze&&(ye(l,10,n),m&&ye(c,d,n)),p){let f=ht(r);Se(f,0,1),Se(f,2,r.length-4);let y=4;h&&(ye(l,18,4294967295),ft(f,y,BigInt(a)),y+=8),b&&(ye(l,14,4294967295),ft(f,y,BigInt(i))),m&&(ft(c,d+4,BigInt(i)),ft(c,d+12,BigInt(a)))}else ye(l,14,i),ye(l,18,a),m&&(ye(c,d+4,i),ye(c,d+8,a))}async function fg(t,e,n,{zipCrypto:r}){let i=await gg(e,0,26),a=new DataView(i);return(!t.encrypted||r)&&ye(a,14,t.signature),t.zip64?(ye(a,18,4294967295),ye(a,22,4294967295)):(ye(a,18,t.compressedSize),ye(a,22,t.uncompressedSize)),await Ht(n,new Uint8Array(i)),e.slice(i.byteLength)}function hg(t,e){let{rawExtraFieldZip64:n,offset:r,diskNumberStart:i}=t,{zip64UncompressedSize:a,zip64CompressedSize:o,zip64Offset:s,zip64DiskNumberStart:l}=e,u=ht(n),c=4;a&&(c+=8),o&&(c+=8),s&&(ft(u,c,BigInt(r)),c+=8),l&&ye(u,c,i)}async function mg(t,e,n){let{files:r,writer:i}=t,{diskOffset:a,writable:o}=i,{diskNumber:s}=i,l=0,u=0,c=t.offset-a,d=r.size;for(let[,{rawFilename:S,rawExtraFieldZip64:x,rawExtraFieldAES:k,rawExtraField:v,rawComment:E,rawExtraFieldExtendedTimestamp:_,rawExtraFieldNTFS:C}]of r)u+=46+Te(S,E,x,k,_,C,v);let p=new Uint8Array(u),h=ht(p);await Jt(i);let b=0;for(let[S,x]of Array.from(r.values()).entries()){let{offset:k,rawFilename:v,rawExtraFieldZip64:E,rawExtraFieldAES:_,rawExtraFieldNTFS:C,rawExtraField:R,rawComment:D,versionMadeBy:I,headerArray:M,directory:N,zip64:z,zip64UncompressedSize:Y,zip64CompressedSize:te,zip64DiskNumberStart:V,zip64Offset:ee,msDosCompatible:L,internalFileAttribute:F,externalFileAttribute:$,extendedTimestamp:q,lastModDate:G,diskNumberStart:ue,uncompressedSize:he,compressedSize:me}=x,Z;if(q){Z=new Uint8Array(9);let J=ht(Z);Se(J,0,21589),Se(J,2,Te(Z)-4),vi(J,4,1),ye(J,5,Math.floor(G.getTime()/1e3))}else Z=new Uint8Array;let ie=Te(E,_,Z,C,R);ye(h,l,33639248),Se(h,l+4,I);let oe=ht(M);Y||ye(oe,18,he),te||ye(oe,14,me),Ke(p,M,l+6),Se(h,l+30,ie),Se(h,l+32,Te(D)),Se(h,l+34,z&&V?65535:ue),Se(h,l+36,F),$?ye(h,l+38,$):N&&L&&vi(h,l+38,16),ye(h,l+42,z&&ee?4294967295:k),Ke(p,v,l+46),Ke(p,E,l+46+Te(v)),Ke(p,_,l+46+Te(v,E)),Ke(p,Z,l+46+Te(v,E,_)),Ke(p,C,l+46+Te(v,E,_,Z)),Ke(p,R,l+46+Te(v,E,_,Z,C)),Ke(p,D,l+46+Te(v)+ie);let le=46+Te(v,D)+ie;if(l-b>i.availableSize&&(i.availableSize=0,await Ht(o,p.slice(b,l)),b=l),l+=le,n.onprogress)try{await n.onprogress(S+1,r.size,new wi(x))}catch{}}await Ht(o,b?p.slice(b):p);let g=i.diskNumber,{availableSize:m}=i;m<22&&g++;let f=Ee(t,n,"zip64");if(c>=4294967295||u>=4294967295||d>=65535||g>=65535){if(f===!1)throw new Error(Ai);f=!0}let y=new Uint8Array(f?98:22),w=ht(y);l=0,f&&(ye(w,0,101075792),ft(w,4,BigInt(44)),Se(w,12,45),Se(w,14,45),ye(w,16,g),ye(w,20,s),ft(w,24,BigInt(d)),ft(w,32,BigInt(d)),ft(w,40,BigInt(u)),ft(w,48,BigInt(c)),ye(w,56,117853008),ft(w,64,BigInt(c)+BigInt(u)),ye(w,72,g+1),Ee(t,n,"supportZip64SplitFile",!0)&&(g=65535,s=65535),d=65535,c=4294967295,u=4294967295,l+=56+20),ye(w,l,101010256),Se(w,l+4,g),Se(w,l+6,s),Se(w,l+8,d),Se(w,l+10,d),ye(w,l+12,u),ye(w,l+16,c);let A=Te(e);if(A)if(A<=65535)Se(w,l+20,A);else throw new Error(iu);await Ht(o,y),A&&await Ht(o,e)}function gg(t,e,n){return e||n?t.slice(e,n).arrayBuffer():t.arrayBuffer()}async function Ht(t,e){let n=t.getWriter();await n.ready,t.size+=Te(e),await n.write(e),n.releaseLock()}function Pa(t){if(t)return(BigInt(t.getTime())+BigInt(116444736e5))*BigInt(1e4)}function Ee(t,e,n,r){let i=e[n]===ze?t.options[n]:e[n];return i===ze?r:i}function bg(t){return t+5*(Math.floor(t/16383)+1)}function vi(t,e,n){t.setUint8(e,n)}function Se(t,e,n){t.setUint16(e,n,!0)}function ye(t,e,n){t.setUint32(e,n,!0)}function ft(t,e,n){t.setBigUint64(e,n,!0)}function Ke(t,e,n){t.set(e,n)}function ht(t){return new DataView(t.buffer)}function Te(...t){let e=0;return t.forEach(n=>n&&(e+=n.length)),e}_i({Deflate:bh,Inflate:Ih});var uu={},yg=function(t,e,n,r,i){var a=new Worker(uu[e]||(uu[e]=URL.createObjectURL(new Blob([t+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return a.onmessage=function(o){var s=o.data,l=s.$e$;if(l){var u=new Error(l[0]);u.code=l[1],u.stack=l[2],i(u,null)}else i(null,s)},a.postMessage(n,r),a},ke=Uint8Array,tt=Uint16Array,Hn=Uint32Array,jn=new ke([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Wn=new ke([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),yr=new ke([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),gu=function(t,e){for(var n=new tt(31),r=0;r<31;++r)n[r]=e+=1<<t[r-1];for(var i=new Hn(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return[n,i]},bu=gu(jn,2),wo=bu[0],Mi=bu[1];wo[28]=258,Mi[258]=28;var yu=gu(Wn,0),wu=yu[0],po=yu[1],wr=new tt(32768);for(_e=0;_e<32768;++_e)Qt=(_e&43690)>>>1|(_e&21845)<<1,Qt=(Qt&52428)>>>2|(Qt&13107)<<2,Qt=(Qt&61680)>>>4|(Qt&3855)<<4,wr[_e]=((Qt&65280)>>>8|(Qt&255)<<8)>>>1;var Qt,_e,Et=function(t,e,n){for(var r=t.length,i=0,a=new tt(e);i<r;++i)t[i]&&++a[t[i]-1];var o=new tt(e);for(i=0;i<e;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new tt(1<<e);var l=15-e;for(i=0;i<r;++i)if(t[i])for(var u=i<<4|t[i],c=e-t[i],d=o[t[i]-1]++<<c,p=d|(1<<c)-1;d<=p;++d)s[wr[d]>>>l]=u}else for(s=new tt(r),i=0;i<r;++i)t[i]&&(s[i]=wr[o[t[i]-1]++]>>>15-t[i]);return s},tn=new ke(288);for(_e=0;_e<144;++_e)tn[_e]=8;var _e;for(_e=144;_e<256;++_e)tn[_e]=9;var _e;for(_e=256;_e<280;++_e)tn[_e]=7;var _e;for(_e=280;_e<288;++_e)tn[_e]=8;var _e,$n=new ke(32);for(_e=0;_e<32;++_e)$n[_e]=5;var _e,vu=Et(tn,9,0),xu=Et(tn,9,1),Tu=Et($n,5,0),_u=Et($n,5,1),Ci=function(t){for(var e=t[0],n=1;n<t.length;++n)t[n]>e&&(e=t[n]);return e},At=function(t,e,n){var r=e/8|0;return(t[r]|t[r+1]<<8)>>(e&7)&n},Li=function(t,e){var n=e/8|0;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>(e&7)},vr=function(t){return(t+7)/8|0},Kt=function(t,e,n){(e==null||e<0)&&(e=0),(n==null||n>t.length)&&(n=t.length);var r=new(t.BYTES_PER_ELEMENT==2?tt:t.BYTES_PER_ELEMENT==4?Hn:ke)(n-e);return r.set(t.subarray(e,n)),r};var Su=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],pe=function(t,e,n){var r=new Error(e||Su[t]);if(r.code=t,Error.captureStackTrace&&Error.captureStackTrace(r,pe),!n)throw r;return r},Ii=function(t,e,n){var r=t.length;if(!r||n&&n.f&&!n.l)return e||new ke(0);var i=!e||n,a=!n||n.i;n||(n={}),e||(e=new ke(r*3));var o=function(G){var ue=e.length;if(G>ue){var he=new ke(Math.max(ue*2,G));he.set(e),e=he}},s=n.f||0,l=n.p||0,u=n.b||0,c=n.l,d=n.d,p=n.m,h=n.n,b=r*8;do{if(!c){s=At(t,l,1);var g=At(t,l+1,3);if(l+=3,g)if(g==1)c=xu,d=_u,p=9,h=5;else if(g==2){var m=At(t,l,31)+257,f=At(t,l+10,15)+4,y=m+At(t,l+5,31)+1;l+=14;for(var w=new ke(y),A=new ke(19),S=0;S<f;++S)A[yr[S]]=At(t,l+S*3,7);l+=f*3;for(var x=Ci(A),k=(1<<x)-1,v=Et(A,x,1),S=0;S<y;){var E=v[At(t,l,k)];l+=E&15;var _=E>>>4;if(_<16)w[S++]=_;else{var C=0,R=0;for(_==16?(R=3+At(t,l,3),l+=2,C=w[S-1]):_==17?(R=3+At(t,l,7),l+=3):_==18&&(R=11+At(t,l,127),l+=7);R--;)w[S++]=C}}var D=w.subarray(0,m),I=w.subarray(m);p=Ci(D),h=Ci(I),c=Et(D,p,1),d=Et(I,h,1)}else pe(1);else{var _=vr(l)+4,M=t[_-4]|t[_-3]<<8,N=_+M;if(N>r){a&&pe(0);break}i&&o(u+M),e.set(t.subarray(_,N),u),n.b=u+=M,n.p=l=N*8,n.f=s;continue}if(l>b){a&&pe(0);break}}i&&o(u+131072);for(var z=(1<<p)-1,Y=(1<<h)-1,te=l;;te=l){var C=c[Li(t,l)&z],V=C>>>4;if(l+=C&15,l>b){a&&pe(0);break}if(C||pe(2),V<256)e[u++]=V;else if(V==256){te=l,c=null;break}else{var ee=V-254;if(V>264){var S=V-257,L=jn[S];ee=At(t,l,(1<<L)-1)+wo[S],l+=L}var F=d[Li(t,l)&Y],$=F>>>4;F||pe(3),l+=F&15;var I=wu[$];if($>3){var L=Wn[$];I+=Li(t,l)&(1<<L)-1,l+=L}if(l>b){a&&pe(0);break}i&&o(u+131072);for(var q=u+ee;u<q;u+=4)e[u]=e[u-I],e[u+1]=e[u+1-I],e[u+2]=e[u+2-I],e[u+3]=e[u+3-I];u=q}}n.l=c,n.p=te,n.b=u,n.f=s,c&&(s=1,n.m=p,n.d=d,n.n=h)}while(!s);return u==e.length?e:Kt(e,0,u)},qt=function(t,e,n){n<<=e&7;var r=e/8|0;t[r]|=n,t[r+1]|=n>>>8},Nn=function(t,e,n){n<<=e&7;var r=e/8|0;t[r]|=n,t[r+1]|=n>>>8,t[r+2]|=n>>>16},Ri=function(t,e){for(var n=[],r=0;r<t.length;++r)t[r]&&n.push({s:r,f:t[r]});var i=n.length,a=n.slice();if(!i)return[en,0];if(i==1){var o=new ke(n[0].s+1);return o[n[0].s]=1,[o,1]}n.sort(function(S,x){return S.f-x.f}),n.push({s:-1,f:25001});var s=n[0],l=n[1],u=0,c=1,d=2;for(n[0]={s:-1,f:s.f+l.f,l:s,r:l};c!=i-1;)s=n[n[u].f<n[d].f?u++:d++],l=n[u!=c&&n[u].f<n[d].f?u++:d++],n[c++]={s:-1,f:s.f+l.f,l:s,r:l};for(var p=a[0].s,r=1;r<i;++r)a[r].s>p&&(p=a[r].s);var h=new tt(p+1),b=Pi(n[c-1],h,0);if(b>e){var r=0,g=0,m=b-e,f=1<<m;for(a.sort(function(x,k){return h[k.s]-h[x.s]||x.f-k.f});r<i;++r){var y=a[r].s;if(h[y]>e)g+=f-(1<<b-h[y]),h[y]=e;else break}for(g>>>=m;g>0;){var w=a[r].s;h[w]<e?g-=1<<e-h[w]++-1:++r}for(;r>=0&&g;--r){var A=a[r].s;h[A]==e&&(--h[A],++g)}b=e}return[new ke(h),b]},Pi=function(t,e,n){return t.s==-1?Math.max(Pi(t.l,e,n+1),Pi(t.r,e,n+1)):e[t.s]=n},fo=function(t){for(var e=t.length;e&&!t[--e];);for(var n=new tt(++e),r=0,i=t[0],a=1,o=function(l){n[r++]=l},s=1;s<=e;++s)if(t[s]==i&&s!=e)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=t[s]}return[n.subarray(0,r),e]},zn=function(t,e){for(var n=0,r=0;r<e.length;++r)n+=t[r]*e[r];return n},Oi=function(t,e,n){var r=n.length,i=vr(e+2);t[i]=r&255,t[i+1]=r>>>8,t[i+2]=t[i]^255,t[i+3]=t[i+1]^255;for(var a=0;a<r;++a)t[i+a+4]=n[a];return(i+4+r)*8},ho=function(t,e,n,r,i,a,o,s,l,u,c){qt(e,c++,n),++i[256];for(var d=Ri(i,15),p=d[0],h=d[1],b=Ri(a,15),g=b[0],m=b[1],f=fo(p),y=f[0],w=f[1],A=fo(g),S=A[0],x=A[1],k=new tt(19),v=0;v<y.length;++v)k[y[v]&31]++;for(var v=0;v<S.length;++v)k[S[v]&31]++;for(var E=Ri(k,7),_=E[0],C=E[1],R=19;R>4&&!_[yr[R-1]];--R);var D=u+5<<3,I=zn(i,tn)+zn(a,$n)+o,M=zn(i,p)+zn(a,g)+o+14+3*R+zn(k,_)+(2*k[16]+3*k[17]+7*k[18]);if(D<=I&&D<=M)return Oi(e,c,t.subarray(l,l+u));var N,z,Y,te;if(qt(e,c,1+(M<I)),c+=2,M<I){N=Et(p,h,0),z=p,Y=Et(g,m,0),te=g;var V=Et(_,C,0);qt(e,c,w-257),qt(e,c+5,x-1),qt(e,c+10,R-4),c+=14;for(var v=0;v<R;++v)qt(e,c+3*v,_[yr[v]]);c+=3*R;for(var ee=[y,S],L=0;L<2;++L)for(var F=ee[L],v=0;v<F.length;++v){var $=F[v]&31;qt(e,c,V[$]),c+=_[$],$>15&&(qt(e,c,F[v]>>>5&127),c+=F[v]>>>12)}}else N=vu,z=tn,Y=Tu,te=$n;for(var v=0;v<s;++v)if(r[v]>255){var $=r[v]>>>18&31;Nn(e,c,N[$+257]),c+=z[$+257],$>7&&(qt(e,c,r[v]>>>23&31),c+=jn[$]);var q=r[v]&31;Nn(e,c,Y[q]),c+=te[q],q>3&&(Nn(e,c,r[v]>>>5&8191),c+=Wn[q])}else Nn(e,c,N[r[v]]),c+=z[r[v]];return Nn(e,c,N[256]),c+z[256]},ku=new Hn([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),en=new ke(0),Au=function(t,e,n,r,i,a){var o=t.length,s=new ke(r+o+5*(1+Math.ceil(o/7e3))+i),l=s.subarray(r,s.length-i),u=0;if(!e||o<8)for(var c=0;c<=o;c+=65535){var d=c+65535;d>=o&&(l[u>>3]=a),u=Oi(l,u+1,t.subarray(c,d))}else{for(var p=ku[e-1],h=p>>>13,b=p&8191,g=(1<<n)-1,m=new tt(32768),f=new tt(g+1),y=Math.ceil(n/3),w=2*y,A=function(J){return(t[J]^t[J+1]<<y^t[J+2]<<w)&g},S=new Hn(25e3),x=new tt(288),k=new tt(32),v=0,E=0,c=0,_=0,C=0,R=0;c<o;++c){var D=A(c),I=c&32767,M=f[D];if(m[I]=M,f[D]=I,C<=c){var N=o-c;if((v>7e3||_>24576)&&N>423){u=ho(t,l,0,S,x,k,E,_,R,c-R,u),_=v=E=0,R=c;for(var z=0;z<286;++z)x[z]=0;for(var z=0;z<30;++z)k[z]=0}var Y=2,te=0,V=b,ee=I-M&32767;if(N>2&&D==A(c-ee))for(var L=Math.min(h,N)-1,F=Math.min(32767,c),$=Math.min(258,N);ee<=F&&--V&&I!=M;){if(t[c+Y]==t[c+Y-ee]){for(var q=0;q<$&&t[c+q]==t[c+q-ee];++q);if(q>Y){if(Y=q,te=ee,q>L)break;for(var G=Math.min(ee,q-2),ue=0,z=0;z<G;++z){var he=c-ee+z+32768&32767,me=m[he],Z=he-me+32768&32767;Z>ue&&(ue=Z,M=he)}}}I=M,M=m[I],ee+=I-M+32768&32767}if(te){S[_++]=268435456|Mi[Y]<<18|po[te];var ie=Mi[Y]&31,oe=po[te]&31;E+=jn[ie]+Wn[oe],++x[257+ie],++k[oe],C=c+Y,++v}else S[_++]=t[c],++x[t[c]]}}u=ho(t,l,a,S,x,k,E,_,R,c-R,u),!a&&u&7&&(u=Oi(l,u+1,en))}return Kt(s,0,r+vr(u)+i)},Eu=function(){for(var t=new Int32Array(256),e=0;e<256;++e){for(var n=e,r=9;--r;)n=(n&1&&-306674912)^n>>>1;t[e]=n}return t}(),vo=function(){var t=-1;return{p:function(e){for(var n=t,r=0;r<e.length;++r)n=Eu[n&255^e[r]]^n>>>8;t=n},d:function(){return~t}}},Cu=function(){var t=1,e=0;return{p:function(n){for(var r=t,i=e,a=n.length|0,o=0;o!=a;){for(var s=Math.min(o+2655,a);o<s;++o)i+=r+=n[o];r=(r&65535)+15*(r>>16),i=(i&65535)+15*(i>>16)}t=r,e=i},d:function(){return t%=65521,e%=65521,(t&255)<<24|t>>>8<<16|(e&255)<<8|e>>>8}}},xr=function(t,e,n,r,i){return Au(t,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(t.length)))*1.5):12+e.mem,n,r,!i)},Lu=function(t,e){var n={};for(var r in t)n[r]=t[r];for(var r in e)n[r]=e[r];return n},du=function(t,e,n){for(var r=t(),i=t.toString(),a=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),o=0;o<r.length;++o){var s=r[o],l=a[o];if(typeof s=="function"){e+=";"+l+"=";var u=s.toString();if(s.prototype)if(u.indexOf("[native code]")!=-1){var c=u.indexOf(" ",8)+1;e+=u.slice(c,u.indexOf("(",c))}else{e+=u;for(var d in s.prototype)e+=";"+l+".prototype."+d+"="+s.prototype[d].toString()}else e+=u}else n[l]=s}return[e,n]},Ei=[],wg=function(t){var e=[];for(var n in t)t[n].buffer&&e.push((t[n]=new t[n].constructor(t[n])).buffer);return e},vg=function(t,e,n,r){var i;if(!Ei[n]){for(var a="",o={},s=t.length-1,l=0;l<s;++l)i=du(t[l],a,o),a=i[0],o=i[1];Ei[n]=du(t[s],a,o)}var u=Lu({},Ei[n][1]);return yg(Ei[n][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",n,u,wg(u),r)},xo=function(){return[ke,tt,Hn,jn,Wn,yr,wo,wu,xu,_u,wr,Su,Et,Ci,At,Li,vr,Kt,pe,Ii,Lg,Ru,kg]},To=function(){return[ke,tt,Hn,jn,Wn,yr,Mi,po,vu,tn,Tu,$n,wr,ku,en,Et,qt,Nn,Ri,Pi,fo,zn,Oi,ho,vr,Kt,Au,xr,Cg,Ru]},xg=function(){return[Du,Pu,Ae,vo,Eu]},Tg=function(){return[Mu,Ag]},_g=function(){return[Ou,Ae,Cu]},Sg=function(){return[Fu]},Ru=function(t){return postMessage(t,[t.buffer])},kg=function(t){return t&&t.size&&new ke(t.size)};var Ct=function(t){return t.ondata=function(e,n){return postMessage([e,n],[e.buffer])},function(e){return t.push(e.data[0],e.data[1])}},qn=function(t,e,n,r,i){var a,o=vg(t,r,i,function(s,l){s?(o.terminate(),e.ondata.call(e,s)):(l[1]&&o.terminate(),e.ondata.call(e,s,l[0],l[1]))});o.postMessage(n),e.push=function(s,l){e.ondata||pe(5),a&&e.ondata(pe(4,0,1),null,!!l),o.postMessage([s,a=l],[s.buffer])},e.terminate=function(){o.terminate()}},Bn=function(t,e){return t[e]|t[e+1]<<8},Un=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},uo=function(t,e){return Un(t,e)+Un(t,e+4)*4294967296},Ae=function(t,e,n){for(;n;++e)t[e]=n,n>>>=8},Du=function(t,e){var n=e.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=e.level<2?4:e.level==9?2:0,t[9]=3,e.mtime!=0&&Ae(t,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),n){t[3]=8;for(var r=0;r<=n.length;++r)t[r+10]=n.charCodeAt(r)}},Mu=function(t){(t[0]!=31||t[1]!=139||t[2]!=8)&&pe(6,"invalid gzip data");var e=t[3],n=10;e&4&&(n+=t[10]|(t[11]<<8)+2);for(var r=(e>>3&1)+(e>>4&1);r>0;r-=!t[n++]);return n+(e&2)},Ag=function(t){var e=t.length;return(t[e-4]|t[e-3]<<8|t[e-2]<<16|t[e-1]<<24)>>>0},Pu=function(t){return 10+(t.filename&&t.filename.length+1||0)},Ou=function(t,e){var n=e.level,r=n==0?0:n<6?1:n==9?3:2;t[0]=120,t[1]=r<<6|(r?32-2*r:1)},Fu=function(t){((t[0]&15)!=8||t[0]>>>4>7||(t[0]<<8|t[1])%31)&&pe(6,"invalid zlib data"),t[1]&32&&pe(6,"invalid zlib data: preset dictionaries not supported")};function _o(t,e){return!e&&typeof t=="function"&&(e=t,t={}),this.ondata=e,t}var nn=function(){function t(e,n){!n&&typeof e=="function"&&(n=e,e={}),this.ondata=n,this.o=e||{}}return t.prototype.p=function(e,n){this.ondata(xr(e,this.o,0,0,!n),n)},t.prototype.push=function(e,n){this.ondata||pe(5),this.d&&pe(4),this.d=n,this.p(e,n||!1)},t}(),Eg=function(){function t(e,n){qn([To,function(){return[Ct,nn]}],this,_o.call(this,e,n),function(r){var i=new nn(r.data);onmessage=Ct(i)},6)}return t}();function Cg(t,e){return xr(t,e||{},0,0)}var bt=function(){function t(e){this.s={},this.p=new ke(0),this.ondata=e}return t.prototype.e=function(e){this.ondata||pe(5),this.d&&pe(4);var n=this.p.length,r=new ke(n+e.length);r.set(this.p),r.set(e,n),this.p=r},t.prototype.c=function(e){this.d=this.s.i=e||!1;var n=this.s.b,r=Ii(this.p,this.o,this.s);this.ondata(Kt(r,n,this.s.b),this.d),this.o=Kt(r,this.s.b-32768),this.s.b=this.o.length,this.p=Kt(this.p,this.s.p/8|0),this.s.p&=7},t.prototype.push=function(e,n){this.e(e),this.c(n)},t}(),Iu=function(){function t(e){this.ondata=e,qn([xo,function(){return[Ct,bt]}],this,0,function(){var n=new bt;onmessage=Ct(n)},7)}return t}();function Lg(t,e){return Ii(t,e)}var pu=function(){function t(e,n){this.c=vo(),this.l=0,this.v=1,nn.call(this,e,n)}return t.prototype.push=function(e,n){nn.prototype.push.call(this,e,n)},t.prototype.p=function(e,n){this.c.p(e),this.l+=e.length;var r=xr(e,this.o,this.v&&Pu(this.o),n&&8,!n);this.v&&(Du(r,this.o),this.v=0),n&&(Ae(r,r.length-8,this.c.d()),Ae(r,r.length-4,this.l)),this.ondata(r,n)},t}(),R1=function(){function t(e,n){qn([To,xg,function(){return[Ct,nn,pu]}],this,_o.call(this,e,n),function(r){var i=new pu(r.data);onmessage=Ct(i)},8)}return t}();var mo=function(){function t(e){this.v=1,bt.call(this,e)}return t.prototype.push=function(e,n){if(bt.prototype.e.call(this,e),this.v){var r=this.p.length>3?Mu(this.p):4;if(r>=this.p.length&&!n)return;this.p=this.p.subarray(r),this.v=0}n&&(this.p.length<8&&pe(6,"invalid gzip data"),this.p=this.p.subarray(0,-8)),bt.prototype.c.call(this,n)},t}(),Rg=function(){function t(e){this.ondata=e,qn([xo,Tg,function(){return[Ct,bt,mo]}],this,0,function(){var n=new mo;onmessage=Ct(n)},9)}return t}();var fu=function(){function t(e,n){this.c=Cu(),this.v=1,nn.call(this,e,n)}return t.prototype.push=function(e,n){nn.prototype.push.call(this,e,n)},t.prototype.p=function(e,n){this.c.p(e);var r=xr(e,this.o,this.v&&2,n&&4,!n);this.v&&(Ou(r,this.o),this.v=0),n&&Ae(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),D1=function(){function t(e,n){qn([To,_g,function(){return[Ct,nn,fu]}],this,_o.call(this,e,n),function(r){var i=new fu(r.data);onmessage=Ct(i)},10)}return t}();var go=function(){function t(e){this.v=1,bt.call(this,e)}return t.prototype.push=function(e,n){if(bt.prototype.e.call(this,e),this.v){if(this.p.length<2&&!n)return;this.p=this.p.subarray(2),this.v=0}n&&(this.p.length<4&&pe(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),bt.prototype.c.call(this,n)},t}(),Dg=function(){function t(e){this.ondata=e,qn([xo,Sg,function(){return[Ct,bt,go]}],this,0,function(){var n=new go;onmessage=Ct(n)},11)}return t}();function Nu(t,e){return Ii((Fu(t),t.subarray(2,-4)),e)}var Mg=function(){function t(e){this.G=mo,this.I=bt,this.Z=go,this.ondata=e}return t.prototype.push=function(e,n){if(this.ondata||pe(5),this.s)this.s.push(e,n);else{if(this.p&&this.p.length){var r=new ke(this.p.length+e.length);r.set(this.p),r.set(e,this.p.length)}else this.p=e;if(this.p.length>2){var i=this,a=function(){i.ondata.apply(i,arguments)};this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(a):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(a):new this.Z(a),this.s.push(this.p,n),this.p=null}}},t}(),M1=function(){function t(e){this.G=Rg,this.I=Iu,this.Z=Dg,this.ondata=e}return t.prototype.push=function(e,n){Mg.prototype.push.call(this,e,n)},t}();var hu=typeof TextEncoder<"u"&&new TextEncoder,bo=typeof TextDecoder<"u"&&new TextDecoder,zu=0;try{bo.decode(en,{stream:!0}),zu=1}catch{}var Bu=function(t){for(var e="",n=0;;){var r=t[n++],i=(r>127)+(r>223)+(r>239);if(n+i>t.length)return[e,Kt(t,n-1)];i?i==3?(r=((r&15)<<18|(t[n++]&63)<<12|(t[n++]&63)<<6|t[n++]&63)-65536,e+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?e+=String.fromCharCode((r&31)<<6|t[n++]&63):e+=String.fromCharCode((r&15)<<12|(t[n++]&63)<<6|t[n++]&63):e+=String.fromCharCode(r)}},P1=function(){function t(e){this.ondata=e,zu?this.t=new TextDecoder:this.p=en}return t.prototype.push=function(e,n){if(this.ondata||pe(5),n=!!n,this.t){this.ondata(this.t.decode(e,{stream:!0}),n),n&&(this.t.decode().length&&pe(8),this.t=null);return}this.p||pe(4);var r=new ke(this.p.length+e.length);r.set(this.p),r.set(e,this.p.length);var i=Bu(r),a=i[0],o=i[1];n?(o.length&&pe(8),this.p=null):this.p=o,this.ondata(a,n)},t}(),O1=function(){function t(e){this.ondata=e}return t.prototype.push=function(e,n){this.ondata||pe(5),this.d&&pe(4),this.ondata(yo(e),this.d=n||!1)},t}();function yo(t,e){if(e){for(var n=new ke(t.length),r=0;r<t.length;++r)n[r]=t.charCodeAt(r);return n}if(hu)return hu.encode(t);for(var i=t.length,a=new ke(t.length+(t.length>>1)),o=0,s=function(d){a[o++]=d},r=0;r<i;++r){if(o+5>a.length){var l=new ke(o+8+(i-r<<1));l.set(a),a=l}var u=t.charCodeAt(r);u<128||e?s(u):u<2048?(s(192|u>>6),s(128|u&63)):u>55295&&u<57344?(u=65536+(u&1047552)|t.charCodeAt(++r)&1023,s(240|u>>18),s(128|u>>12&63),s(128|u>>6&63),s(128|u&63)):(s(224|u>>12),s(128|u>>6&63),s(128|u&63))}return Kt(a,0,o)}function Pg(t,e){if(e){for(var n="",r=0;r<t.length;r+=16384)n+=String.fromCharCode.apply(null,t.subarray(r,r+16384));return n}else{if(bo)return bo.decode(t);var i=Bu(t),a=i[0],o=i[1];return o.length&&pe(8),a}}var Uu=function(t){return t==1?3:t<6?2:t==9?1:0};var Og=function(t,e){for(;Bn(t,e)!=1;e+=4+Bn(t,e+2));return[uo(t,e+12),uo(t,e+4),uo(t,e+20)]},Di=function(t){var e=0;if(t)for(var n in t){var r=t[n].length;r>65535&&pe(9),e+=r+4}return e},mu=function(t,e,n,r,i,a,o,s){var l=r.length,u=n.extra,c=s&&s.length,d=Di(u);Ae(t,e,o!=null?33639248:67324752),e+=4,o!=null&&(t[e++]=20,t[e++]=n.os),t[e]=20,e+=2,t[e++]=n.flag<<1|(a<0&&8),t[e++]=i&&8,t[e++]=n.compression&255,t[e++]=n.compression>>8;var p=new Date(n.mtime==null?Date.now():n.mtime),h=p.getFullYear()-1980;if((h<0||h>119)&&pe(10),Ae(t,e,h<<25|p.getMonth()+1<<21|p.getDate()<<16|p.getHours()<<11|p.getMinutes()<<5|p.getSeconds()>>>1),e+=4,a!=-1&&(Ae(t,e,n.crc),Ae(t,e+4,a<0?-a-2:a),Ae(t,e+8,n.size)),Ae(t,e+12,l),Ae(t,e+14,d),e+=16,o!=null&&(Ae(t,e,c),Ae(t,e+6,n.attrs),Ae(t,e+10,o),e+=14),t.set(r,e),e+=l,d)for(var b in u){var g=u[b],m=g.length;Ae(t,e,+b),Ae(t,e+2,m),t.set(g,e+4),e+=4+m}return c&&(t.set(s,e),e+=c),e},Fg=function(t,e,n,r,i){Ae(t,e,101010256),Ae(t,e+8,n),Ae(t,e+10,n),Ae(t,e+12,r),Ae(t,e+16,i)},Fi=function(){function t(e){this.filename=e,this.c=vo(),this.size=0,this.compression=0}return t.prototype.process=function(e,n){this.ondata(null,e,n)},t.prototype.push=function(e,n){this.ondata||pe(5),this.c.p(e),this.size+=e.length,n&&(this.crc=this.c.d()),this.process(e,n||!1)},t}(),F1=function(){function t(e,n){var r=this;n||(n={}),Fi.call(this,e),this.d=new nn(n,function(i,a){r.ondata(null,i,a)}),this.compression=8,this.flag=Uu(n.level)}return t.prototype.process=function(e,n){try{this.d.push(e,n)}catch(r){this.ondata(r,null,n)}},t.prototype.push=function(e,n){Fi.prototype.push.call(this,e,n)},t}(),I1=function(){function t(e,n){var r=this;n||(n={}),Fi.call(this,e),this.d=new Eg(n,function(i,a,o){r.ondata(i,a,o)}),this.compression=8,this.flag=Uu(n.level),this.terminate=this.d.terminate}return t.prototype.process=function(e,n){this.d.push(e,n)},t.prototype.push=function(e,n){Fi.prototype.push.call(this,e,n)},t}(),N1=function(){function t(e){this.ondata=e,this.u=[],this.d=1}return t.prototype.add=function(e){var n=this;if(this.ondata||pe(5),this.d&2)this.ondata(pe(4+(this.d&1)*8,0,1),null,!1);else{var r=yo(e.filename),i=r.length,a=e.comment,o=a&&yo(a),s=i!=e.filename.length||o&&a.length!=o.length,l=i+Di(e.extra)+30;i>65535&&this.ondata(pe(11,0,1),null,!1);var u=new ke(l);mu(u,0,e,r,s,-1);var c=[u],d=function(){for(var m=0,f=c;m<f.length;m++){var y=f[m];n.ondata(null,y,!1)}c=[]},p=this.d;this.d=0;var h=this.u.length,b=Lu(e,{f:r,u:s,o,t:function(){e.terminate&&e.terminate()},r:function(){if(d(),p){var m=n.u[h+1];m?m.r():n.d=1}p=1}}),g=0;e.ondata=function(m,f,y){if(m)n.ondata(m,f,y),n.terminate();else if(g+=f.length,c.push(f),y){var w=new ke(16);Ae(w,0,134695760),Ae(w,4,e.crc),Ae(w,8,g),Ae(w,12,e.size),c.push(w),b.c=g,b.b=l+g+16,b.crc=e.crc,b.size=e.size,p&&b.r(),p=1}else p&&d()},this.u.push(b)}},t.prototype.end=function(){var e=this;if(this.d&2){this.ondata(pe(4+(this.d&1)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},t.prototype.e=function(){for(var e=0,n=0,r=0,i=0,a=this.u;i<a.length;i++){var o=a[i];r+=46+o.f.length+Di(o.extra)+(o.o?o.o.length:0)}for(var s=new ke(r+22),l=0,u=this.u;l<u.length;l++){var o=u[l];mu(s,e,o,o.f,o.u,-o.c-2,n,o.o),e+=46+o.f.length+Di(o.extra)+(o.o?o.o.length:0),n+=o.b}Fg(s,e,this.u.length,r,n),this.ondata(null,s,!0),this.d=2},t.prototype.terminate=function(){for(var e=0,n=this.u;e<n.length;e++){var r=n[e];r.t()}this.d=2},t}();var Ig=function(){function t(){}return t.prototype.push=function(e,n){this.ondata(null,e,n)},t.compression=0,t}(),z1=function(){function t(){var e=this;this.i=new bt(function(n,r){e.ondata(null,n,r)})}return t.prototype.push=function(e,n){try{this.i.push(e,n)}catch(r){this.ondata(r,null,n)}},t.compression=8,t}(),B1=function(){function t(e,n){var r=this;n<32e4?this.i=new bt(function(i,a){r.ondata(null,i,a)}):(this.i=new Iu(function(i,a,o){r.ondata(i,a,o)}),this.terminate=this.i.terminate)}return t.prototype.push=function(e,n){this.i.terminate&&(e=Kt(e,0)),this.i.push(e,n)},t.compression=8,t}(),U1=function(){function t(e){this.onfile=e,this.k=[],this.o={0:Ig},this.p=en}return t.prototype.push=function(e,n){var r=this;if(this.onfile||pe(5),this.p||pe(4),this.c>0){var i=Math.min(this.c,e.length),a=e.subarray(0,i);if(this.c-=i,this.d?this.d.push(a,!this.c):this.k[0].push(a),e=e.subarray(i),e.length)return this.push(e,n)}else{var o=0,s=0,l=void 0,u=void 0;this.p.length?e.length?(u=new ke(this.p.length+e.length),u.set(this.p),u.set(e,this.p.length)):u=this.p:u=e;for(var c=u.length,d=this.c,p=d&&this.d,h=function(){var f,y=Un(u,s);if(y==67324752){o=1,l=s,b.d=null,b.c=0;var w=Bn(u,s+6),A=Bn(u,s+8),S=w&2048,x=w&8,k=Bn(u,s+26),v=Bn(u,s+28);if(c>s+30+k+v){var E=[];b.k.unshift(E),o=2;var _=Un(u,s+18),C=Un(u,s+22),R=Pg(u.subarray(s+30,s+=30+k),!S);_==4294967295?(f=x?[-2]:Og(u,s),_=f[0],C=f[1]):x&&(_=-1),s+=v,b.c=_;var D,I={name:R,compression:A,start:function(){if(I.ondata||pe(5),!_)I.ondata(null,en,!0);else{var M=r.o[A];M||I.ondata(pe(14,"unknown compression type "+A,1),null,!1),D=_<0?new M(R):new M(R,_,C),D.ondata=function(te,V,ee){I.ondata(te,V,ee)};for(var N=0,z=E;N<z.length;N++){var Y=z[N];D.push(Y,!1)}r.k[0]==E&&r.c?r.d=D:D.push(en,!0)}},terminate:function(){D&&D.terminate&&D.terminate()}};_>=0&&(I.size=_,I.originalSize=C),b.onfile(I)}return"break"}else if(d){if(y==134695760)return l=s+=12+(d==-2&&8),o=3,b.c=0,"break";if(y==33639248)return l=s-=4,o=3,b.c=0,"break"}},b=this;s<c-4;++s){var g=h();if(g==="break")break}if(this.p=en,d<0){var m=o?u.subarray(0,l-12-(d==-2&&8)-(Un(u,l-16)==134695760&&4)):u.subarray(0,s);p?p.push(m,!!o):this.k[+(o==2)].push(m)}if(o&2)return this.push(u.subarray(s),n);this.p=u.subarray(s)}n&&(this.c&&pe(13),this.p=null)},t.prototype.register=function(e){this.o[e.compression]=e},t}();var So;function Oo(t){return[...t.v,(t.i?"!":"")+t.n].join(":")}function Xu(t,e=","){return t.map(Oo).join(e)}var Yu=typeof CSS<"u"&&CSS.escape||(t=>t.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function zi(t){for(var e=9,n=t.length;n--;)e=Math.imul(e^t.charCodeAt(n),1597334677);return"#"+((e^e>>>9)>>>0).toString(36)}function Bi(t,e="@media "){return e+yt(t).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function yt(t=[]){return Array.isArray(t)?t:t==null?[]:[t]}function zg(){}var Ze={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function Zu(t){return t.match(/[-=:;]/g)?.length||0}function Ro(t){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(t)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(Zu(t),15)<<18}var Bg=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Fo({n:t,i:e,v:n=[]},r,i,a){t&&(t=Oo({n:t,i:e,v:n})),a=[...yt(a)];for(let s of n){let l=r.theme("screens",s);for(let u of yt(l&&Bi(l)||r.v(s))){var o;a.push(u),i|=l?67108864|Ro(u):s=="dark"?1073741824:u[0]=="@"?Ro(u):(o=u,1<<~(/:([a-z-]+)/.test(o)&&~Bg.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:t,p:i,r:a,i:e}}var Io=new Map;function $u(t){if(t.d){let e=[],n=ko(t.r.reduce((r,i)=>i[0]=="@"?(e.push(i),r):i?ko(r,a=>ko(i,o=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o);if(s){let l=a.indexOf(s[1]);return~l?a.slice(0,l)+s[0]+a.slice(l+s[1].length):Ao(a,o)}return Ao(o,a)})):r,"&"),r=>Ao(r,t.n?"."+Yu(t.n):""));return n&&e.push(n.replace(/:merge\((.+?)\)/g,"$1")),e.reduceRight((r,i)=>i+"{"+r+"}",t.d)}}function ko(t,e){return t.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,i)=>e(r)+i)}function Ao(t,e){return t.replace(/&/g,e)}var Hu=new Intl.Collator("en",{numeric:!0});function Ug(t,e){for(var n=0,r=t.length;n<r;){let i=r+n>>1;0>=Ju(t[i],e)?n=i+1:r=i}return r}function Ju(t,e){let n=t.p&Ze.o;return n==(e.p&Ze.o)&&(n==Ze.b||n==Ze.o)?0:t.p-e.p||t.o-e.o||Hu.compare(ju(t.n),ju(e.n))||Hu.compare(Wu(t.n),Wu(e.n))}function ju(t){return(t||"").split(/:/).pop().split("/").pop()||"\0"}function Wu(t){return(t||"").replace(/\W/g,e=>String.fromCharCode(127+e.charCodeAt(0)))+"\0"}function Eo(t,e){return Math.round(parseInt(t,16)*e)}function mn(t,e={}){if(typeof t=="function")return t(e);let{opacityValue:n="1",opacityVariable:r}=e,i=r?`var(${r})`:n;if(t.includes("<alpha-value>"))return t.replace("<alpha-value>",i);if(t[0]=="#"&&(t.length==4||t.length==7)){let a=(t.length-1)/3,o=[17,1,.062272][a-1];return`rgba(${[Eo(t.substr(1,a),o),Eo(t.substr(1+a,a),o),Eo(t.substr(1+2*a,a),o),i]})`}return i=="1"?t:i=="0"?"#0000":t.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${i})`)}function Qu(t,e,n,r,i=[]){return function a(o,{n:s,p:l,r:u=[],i:c},d){let p=[],h="",b=0,g=0;for(let y in o||{}){var m,f;let w=o[y];if(y[0]=="@"){if(!w)continue;if(y[1]=="a"){p.push(...td(s,l,zo(""+w),d,l,u,c,!0));continue}if(y[1]=="l"){for(let A of yt(w))p.push(...a(A,{n:s,p:(m=Ze[y[7]],l&~Ze.o|m),r:y[7]=="d"?[]:u,i:c},d));continue}if(y[1]=="i"){p.push(...yt(w).map(A=>({p:-1,o:0,r:[],d:y+" "+A})));continue}if(y[1]=="k"){p.push({p:Ze.d,o:0,r:[y],d:a(w,{p:Ze.d},d).map($u).join("")});continue}if(y[1]=="f"){p.push(...yt(w).map(A=>({p:Ze.d,o:0,r:[y],d:a(A,{p:Ze.d},d).map($u).join("")})));continue}}if(typeof w!="object"||Array.isArray(w))y=="label"&&w?s=w+zi(JSON.stringify([l,c,o])):(w||w===0)&&(y=y.replace(/[A-Z]/g,A=>"-"+A.toLowerCase()),g+=1,b=Math.max(b,(f=y)[0]=="-"?0:Zu(f)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(f)?+!!RegExp.$1||-!!RegExp.$2:0)+1),h+=(h?";":"")+yt(w).map(A=>d.s(y,ed(""+A,d.theme)+(c?" !important":""))).join(";"));else if(y[0]=="@"||y.includes("&")){let A=l;y[0]=="@"&&(y=y.replace(/\bscreen\(([^)]+)\)/g,(S,x)=>{let k=d.theme("screens",x);return k?(A|=67108864,Bi(k,"")):S}),A|=Ro(y)),p.push(...a(w,{n:s,p:A,r:[...u,y],i:c},d))}else p.push(...a(w,{p:l,r:[...u,y]},d))}return p.unshift({n:s,p:l,o:Math.max(0,15-g)+1.5*Math.min(b||15,15),r:u,d:h}),p.sort(Ju)}(t,Fo(e,n,r,i),n)}function ed(t,e){return t.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,i,a,o="")=>{let s=e(i,o);return typeof s=="function"&&/color|fill|stroke/i.test(i)?mn(s):""+yt(s).filter(l=>Object(l)!==l)})}function No(t,e){let n,r=[];for(let i of t)i.d&&i.n?n?.p==i.p&&""+n.r==""+i.r?(n.c=[n.c,i.c].filter(Boolean).join(" "),n.d=n.d+";"+i.d):r.push(n={...i,n:i.n&&e}):r.push({...i,n:i.n&&e});return r}function Do(t,e,n=Ze.u,r,i){let a=[];for(let o of t)for(let s of function(l,u,c,d,p){l={...l,i:l.i||p};let h=function(b,g){let m=Io.get(b.n);return m?m(b,g):g.r(b.n,b.v[0]=="dark")}(l,u);return h?typeof h=="string"?({r:d,p:c}=Fo(l,u,c,d),No(Do(zo(h),u,c,d,l.i),l.n)):Array.isArray(h)?h.map(b=>{var g,m;return{o:0,...b,r:[...yt(d),...yt(b.r)],p:(g=c,m=b.p??c,g&~Ze.o|m)}}):Qu(h,l,u,c,d):[{c:Oo(l),p:0,o:0,r:[]}]}(o,e,n,r,i))a.splice(Ug(a,s),0,s);return a}function td(t,e,n,r,i,a,o,s){return No((s?n.flatMap(l=>Do([l],r,i,a,o)):Do(n,r,i,a,o)).map(l=>l.p&Ze.o&&(l.n||e==Ze.b)?{...l,p:l.p&~Ze.o|e,o:0}:l),t)}function $g(t,e,n,r){var i;return i=(a,o)=>{let{n:s,p:l,r:u,i:c}=Fo(a,o,e);return n&&td(s,e,n,o,l,u,c,r)},Io.set(t,i),t}function Co(t,e,n){if(t[t.length-1]!="("){let r=[],i=!1,a=!1,o="";for(let s of t)if(!(s=="("||/[~@]$/.test(s))){if(s[0]=="!"&&(s=s.slice(1),i=!i),s.endsWith(":")){r[s=="dark:"?"unshift":"push"](s.slice(0,-1));continue}s[0]=="-"&&(s=s.slice(1),a=!a),s.endsWith("-")&&(s=s.slice(0,-1)),s&&s!="&"&&(o+=(o&&"-")+s)}o&&(a&&(o="-"+o),e[0].push({n:o,v:r.filter(Hg),i}))}}function Hg(t,e,n){return n.indexOf(t)==e}var qu=new Map;function zo(t){let e=qu.get(t);if(!e){let n=[],r=[[]],i=0,a=0,o=null,s=0,l=(u,c=0)=>{i!=s&&(n.push(t.slice(i,s+c)),u&&Co(n,r)),i=s+1};for(;s<t.length;s++){let u=t[s];if(a)t[s-1]!="\\"&&(a+=+(u=="[")||-(u=="]"));else if(u=="[")a+=1;else if(o)t[s-1]!="\\"&&o.test(t.slice(s))&&(o=null,i=s+RegExp.lastMatch.length);else if(u=="/"&&t[s-1]!="\\"&&(t[s+1]=="*"||t[s+1]=="/"))o=t[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")l(),n.push(u);else if(u==":")t[s+1]!=":"&&l(!1,1);else if(/[\s,)]/.test(u)){l(!0);let c=n.lastIndexOf("(");if(u==")"){let d=n[c-1];if(/[~@]$/.test(d)){let p=r.shift();n.length=c,Co([...n,"#"],r);let{v:h}=r[0].pop();for(let b of p)b.v.splice(+(b.v[0]=="dark")-+(h[0]=="dark"),h.length);Co([...n,$g(d.length>1?d.slice(0,-1)+zi(JSON.stringify([d,p])):d+"("+Xu(p)+")",Ze.a,p,/@$/.test(d))],r)}c=n.lastIndexOf("(",c-1)}n.length=c+1}else/[~@]/.test(u)&&t[s+1]=="("&&r.unshift([])}l(!0),qu.set(t,e=r[0])}return e}function nd(t,e,n){return e.reduce((r,i,a)=>r+n(i)+t[a+1],t[0])}function rd(t,e){return Array.isArray(t)&&Array.isArray(t.raw)?nd(t,e,n=>Lo(n).trim()):e.filter(Boolean).reduce((n,r)=>n+Lo(r),t?Lo(t):"")}function Lo(t){let e,n="";if(t&&typeof t=="object")if(Array.isArray(t))(e=rd(t[0],t.slice(1)))&&(n+=" "+e);else for(let r in t)t[r]&&(n+=" "+r);else t!=null&&typeof t!="boolean"&&(n+=" "+t);return n}var q1=id("@"),K1=id("~");function id(t){return new Proxy(function(n,...r){return e("",n,r)},{get(n,r){return r in n?n[r]:function(i,...a){return e(r,i,a)}}});function e(n,r,i){return Xu(zo(n+t+"("+rd(r,i)+")"))}}function Mo(t,e){return Array.isArray(t)?Ku(nd(t,e,n=>n!=null&&typeof n!="boolean"?n:"")):typeof t=="string"?Ku(t):[t]}var jg=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function Ku(t){let e;t=t.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],i=[];for(;e=jg.exec(t);)e[4]&&(n.shift(),i.shift()),e[3]?(i.unshift(e[3]),n.unshift({}),r.push(i.reduce((a,o)=>({[o]:a}),n[0]))):e[4]||(n[0][e[1]]&&(n.unshift({}),r.push(i.reduce((a,o)=>({[o]:a}),n[0]))),n[0][e[1]]=e[2]);return r}function ad(t,...e){var n;let r=Mo(t,e),i=(r.find(a=>a.label)?.label||"css")+zi(JSON.stringify(r));return n=(a,o)=>No(r.flatMap(s=>Qu(s,a,o,Ze.o)),i),Io.set(i,n),i}var V1=new Proxy(function(t,e){return Vu("animation",t,e)},{get(t,e){return e in t?t[e]:function(n,r){return Vu(e,n,r)}}});function Vu(t,e,n){return{toString(){return ad({label:t,"@layer components":{...typeof e=="object"?e:{animation:e},animationName:""+n}})}}}function W(t,e,n){return[t,Wg(e,n)]}function Wg(t,e){return typeof t=="function"?t:typeof t=="string"&&/^[\w-]+$/.test(t)?(n,r)=>({[t]:e?e(n,r):Po(n,1)}):n=>t||{[n[1]]:Po(n,2)}}function Po(t,e,n=t.slice(e).find(Boolean)||t.$$||t.input){return t.input[0]=="-"?`calc(${n} * -1)`:n}function K(t,e,n,r){return[t,qg(e,n,r)]}function qg(t,e,n){let r=typeof e=="string"?(i,a)=>({[e]:n?n(i,a):i._}):e||(({1:i,_:a},o,s)=>({[i||s]:a}));return(i,a)=>{let o=od(t||i[1]),s=a.theme(o,i.$$)??Kn(i.$$,o,a);if(s!=null)return i._=Po(i,0,s),r(i,a,o)}}function Be(t,e={},n){return[t,Kg(e,n)]}function Kg(t={},e){return(n,r)=>{let{section:i=od(n[0]).replace("-","")+"Color"}=t,[a,o]=Vg(n.$$);if(!a)return;let s=r.theme(i,a)||Kn(a,i,r);if(!s||typeof s=="object")return;let{opacityVariable:l=`--tw-${n[0].replace(/-$/,"")}-opacity`,opacitySection:u=i.replace("Color","Opacity"),property:c=i,selector:d}=t,p=r.theme(u,o||"DEFAULT")||o&&Kn(o,u,r),h=e||(({_:g})=>{let m=Tr(c,g);return d?{[d]:m}:m});n._={value:mn(s,{opacityVariable:l||void 0,opacityValue:p||void 0}),color:g=>mn(s,g),opacityVariable:l||void 0,opacityValue:p||void 0};let b=h(n,r);if(!n.dark){let g=r.d(i,a,s);g&&g!==s&&(n._={value:mn(g,{opacityVariable:l||void 0,opacityValue:p||"1"}),color:m=>mn(g,m),opacityVariable:l||void 0,opacityValue:p||void 0},b={"&":b,[r.v("dark")]:h(n,r)})}return b}}function Vg(t){return(t.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function Tr(t,e){let n={};return typeof e=="string"?n[t]=e:(e.opacityVariable&&e.value.includes(e.opacityVariable)&&(n[e.opacityVariable]=e.opacityValue||"1"),n[t]=e.value),n}function Kn(t,e,n){if(t[0]=="["&&t.slice(-1)=="]"){if(t=Ni(ed(t.slice(1,-1),n.theme)),!e)return t;if(!(/color|fill|stroke/i.test(e)&&!(/^color:/.test(t)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(t))||/image/i.test(e)&&!(/^image:/.test(t)||/^[a-z-]+\(/.test(t))||/weight/i.test(e)&&!(/^(number|any):/.test(t)||/^\d+$/.test(t))||/position/i.test(e)&&/^(length|size):/.test(t)))return t.replace(/^[a-z-]+:/,"")}}function od(t){return t.replace(/-./g,e=>e[1].toUpperCase())}function Ni(t){return t.includes("url(")?t.replace(/(.*?)(url\(.*?\))(.*?)/g,(e,n="",r,i="")=>Ni(n)+r+Ni(i)):t.replace(/(^|[^\\])_+/g,(e,n)=>n+" ".repeat(e.length-n.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,e=>e.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}var G1=Symbol();var sd=new Proxy(zg,{apply(t,e,n){return So(n[0])},get(t,e){let n=So[e];return typeof n=="function"?function(){return n.apply(So,arguments)}:n}});var X1=function t(e){return new Proxy(function(n,...r){return Gu(e,"",n,r)},{get(n,r){return r==="bind"?t:r in n?n[r]:function(i,...a){return Gu(e,r,i,a)}}})}();function Gu(t,e,n,r){return{toString(){let i=Mo(n,r),a=Yu(e+zi(JSON.stringify([e,i])));return(typeof t=="function"?t:sd)(ad({[`@keyframes ${a}`]:Mo(n,r)})),a}}}var ld={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...wt(4,"rem",4,.5,.5),...wt(12,"rem",4,5),14:"3.5rem",...wt(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:we("blur"),backdropBrightness:we("brightness"),backdropContrast:we("contrast"),backdropGrayscale:we("grayscale"),backdropHueRotate:we("hueRotate"),backdropInvert:we("invert"),backdropOpacity:we("opacity"),backdropSaturate:we("saturate"),backdropSepia:we("sepia"),backgroundColor:we("colors"),backgroundImage:{none:"none"},backgroundOpacity:we("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...wt(200,"",100,0,50),...wt(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:t})=>({DEFAULT:t("colors.gray.200","currentColor"),...t("colors")}),borderOpacity:we("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:we("spacing"),borderWidth:{DEFAULT:"1px",...Lt(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:we("colors"),caretColor:we("colors"),accentColor:({theme:t})=>({auto:"auto",...t("colors")}),contrast:{...wt(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:we("borderColor"),divideOpacity:we("borderOpacity"),divideWidth:we("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:({theme:t})=>({...t("colors"),none:"none"}),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:t})=>({...t("spacing"),..._r(2,6),..._r(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:we("spacing"),gradientColorStops:we("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:t})=>({...t("spacing"),..._r(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:t})=>({...t("spacing"),..._r(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...wt(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:t})=>({auto:"auto",...t("spacing")}),maxHeight:({theme:t})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...t("spacing")}),maxWidth:({theme:t,breakpoints:e})=>({...e(t("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...wt(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:we("spacing"),placeholderColor:we("colors"),placeholderOpacity:we("opacity"),outlineColor:we("colors"),outlineOffset:Lt(8,"px"),outlineWidth:Lt(8,"px"),ringColor:({theme:t})=>({...t("colors"),DEFAULT:"#3b82f6"}),ringOffsetColor:we("colors"),ringOffsetWidth:Lt(8,"px"),ringOpacity:({theme:t})=>({...t("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...Lt(8,"px")},rotate:{...Lt(2,"deg"),...Lt(12,"deg",3),...Lt(180,"deg",45)},saturate:wt(200,"",100,0,50),scale:{...wt(150,"",100,0,50),...wt(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:we("spacing"),scrollPadding:we("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...Lt(2,"deg"),...Lt(12,"deg",3)},space:we("spacing"),stroke:({theme:t})=>({...t("colors"),none:"none"}),strokeWidth:wt(2),textColor:we("colors"),textDecorationColor:we("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...Lt(8,"px")},textUnderlineOffset:{auto:"auto",...Lt(8,"px")},textIndent:we("spacing"),textOpacity:we("opacity"),transitionDuration:({theme:t})=>({...t("durations"),DEFAULT:"150ms"}),transitionDelay:we("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:t})=>({...t("spacing"),..._r(2,4),full:"100%"}),width:({theme:t})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...t("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...wt(50,"",1,0,10),auto:"auto"}};function _r(t,e){let n={};do for(var r=1;r<t;r++)n[`${r}/${t}`]=Number((r/t*100).toFixed(6))+"%";while(++t<=e);return n}function Lt(t,e,n=0){let r={};for(;n<=t;n=2*n||1)r[n]=n+e;return r}function wt(t,e="",n=1,r=0,i=1,a={}){for(;r<=t;r+=i)a[r]=r/n+e;return a}function we(t){return({theme:e})=>e(t)}var fw={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${ld.fontFamily.sans})`,fontFeatureSettings:"theme(fontFamily.sans[1].fontFeatureSettings, normal)"},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${ld.fontFamily.mono})`,fontFeatureSettings:"theme(fontFamily.mono[1].fontFeatureSettings, normal)",fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},mw=[W("\\[([-\\w]+):(.+)]",({1:t,2:e},n)=>({"@layer overrides":{"&":{[t]:Kn(`[${e}]`,"",n)}}})),W("(group|peer)([~/][^-[]+)?",({input:t},{h:e})=>[{c:e(t)}]),K("aspect-","aspectRatio"),W("container",(t,{theme:e})=>{let{screens:n=e("screens"),center:r,padding:i}=e("container"),a={width:"100%",marginRight:r&&"auto",marginLeft:r&&"auto",...o("xs")};for(let s in n){let l=n[s];typeof l=="string"&&(a[Bi(l)]={"&":{maxWidth:l,...o(s)}})}return a;function o(s){let l=i&&(typeof i=="string"?i:i[s]||i.DEFAULT);if(l)return{paddingRight:l,paddingLeft:l}}}),K("content-","content",({_:t})=>({"--tw-content":t,content:"var(--tw-content)"})),W("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),W("box-(border|content)","boxSizing",({1:t})=>t+"-box"),W("hidden",{display:"none"}),W("table-(auto|fixed)","tableLayout"),W(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",W("isolate","isolation"),W("object-(contain|cover|fill|none|scale-down)","objectFit"),K("object-","objectPosition"),W("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",Ui),W("overscroll(-[xy])?-(auto|contain|none)",({1:t="",2:e})=>({["overscroll-behavior"+t]:e})),W("(static|fixed|absolute|relative|sticky)","position"),K("-?inset(-[xy])?(?:$|-)","inset",({1:t,_:e})=>({top:t!="-x"&&e,right:t!="-y"&&e,bottom:t!="-x"&&e,left:t!="-y"&&e})),K("-?(top|bottom|left|right)(?:$|-)","inset"),W("(visible|collapse)","visibility"),W("invisible",{visibility:"hidden"}),K("-?z-","zIndex"),W("flex-((row|col)(-reverse)?)","flexDirection",cd),W("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),K("(flex-(?:grow|shrink))(?:$|-)"),K("(flex)-"),K("grow(?:$|-)","flexGrow"),K("shrink(?:$|-)","flexShrink"),K("basis-","flexBasis"),K("-?(order)-"),"-?(order)-(\\d+)",K("grid-cols-","gridTemplateColumns"),W("grid-cols-(\\d+)","gridTemplateColumns",fd),K("col-","gridColumn"),W("col-(span)-(\\d+)","gridColumn",pd),K("col-start-","gridColumnStart"),W("col-start-(auto|\\d+)","gridColumnStart"),K("col-end-","gridColumnEnd"),W("col-end-(auto|\\d+)","gridColumnEnd"),K("grid-rows-","gridTemplateRows"),W("grid-rows-(\\d+)","gridTemplateRows",fd),K("row-","gridRow"),W("row-(span)-(\\d+)","gridRow",pd),K("row-start-","gridRowStart"),W("row-start-(auto|\\d+)","gridRowStart"),K("row-end-","gridRowEnd"),W("row-end-(auto|\\d+)","gridRowEnd"),W("grid-flow-((row|col)(-dense)?)","gridAutoFlow",t=>Ui(cd(t))),W("grid-flow-(dense)","gridAutoFlow"),K("auto-cols-","gridAutoColumns"),K("auto-rows-","gridAutoRows"),K("gap-x(?:$|-)","gap","columnGap"),K("gap-y(?:$|-)","gap","rowGap"),K("gap(?:$|-)","gap"),"(justify-(?:items|self))-",W("justify-","justifyContent",ud),W("(content|items|self)-",t=>({["align-"+t[1]]:ud(t)})),W("(place-(content|items|self))-",({1:t,$$:e})=>({[t]:("wun".includes(e[3])?"space-":"")+e})),K("p([xytrbl])?(?:$|-)","padding",Vn("padding")),K("-?m([xytrbl])?(?:$|-)","margin",Vn("margin")),K("-?space-(x|y)(?:$|-)","space",({1:t,_:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${t}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[t]]:`calc(${e} * calc(1 - var(--tw-space-${t}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[t]]:`calc(${e} * var(--tw-space-${t}-reverse))`}})),W("space-(x|y)-reverse",({1:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${t}-reverse`]:"1"}})),K("w-","width"),K("min-w-","minWidth"),K("max-w-","maxWidth"),K("h-","height"),K("min-h-","minHeight"),K("max-h-","maxHeight"),K("font-","fontWeight"),K("font-","fontFamily",({_:t})=>typeof(t=yt(t))[1]=="string"?{fontFamily:It(t)}:{fontFamily:It(t[0]),...t[1]}),W("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),W("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),W("italic","fontStyle"),W("not-italic",{fontStyle:"normal"}),W("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:t,2:e="",3:n})=>e=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(n?"numeric-fraction":"pt".includes(e[0])?"numeric-spacing":e?"numeric-figure":t)]:t,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)",...gn({"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"})}),K("tracking-","letterSpacing"),K("leading-","lineHeight"),W("list-(inside|outside)","listStylePosition"),K("list-","listStyleType"),W("list-","listStyleType"),K("placeholder-opacity-","placeholderOpacity",({_:t})=>({"&::placeholder":{"--tw-placeholder-opacity":t}})),Be("placeholder-",{property:"color",selector:"&::placeholder"}),W("text-(left|center|right|justify|start|end)","textAlign"),W("text-(ellipsis|clip)","textOverflow"),K("text-opacity-","textOpacity","--tw-text-opacity"),Be("text-",{property:"color"}),K("text-","fontSize",({_:t})=>typeof t=="string"?{fontSize:t}:{fontSize:t[0],...typeof t[1]=="string"?{lineHeight:t[1]}:t[1]}),K("indent-","textIndent"),W("(overline|underline|line-through)","textDecorationLine"),W("no-underline",{textDecorationLine:"none"}),K("underline-offset-","textUnderlineOffset"),Be("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),K("decoration-","textDecorationThickness"),W("decoration-","textDecorationStyle"),W("(uppercase|lowercase|capitalize)","textTransform"),W("normal-case",{textTransform:"none"}),W("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),W("align-","verticalAlign"),W("whitespace-","whiteSpace"),W("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),W("break-words",{overflowWrap:"break-word"}),W("break-all",{wordBreak:"break-all"}),W("break-keep",{wordBreak:"keep-all"}),Be("caret-",{opacityVariable:!1,opacitySection:"opacity"}),Be("accent-",{opacityVariable:!1,opacitySection:"opacity"}),W("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:t})=>`linear-gradient(to ${En(t," ")},var(--tw-gradient-stops))`),Be("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:t})=>({"--tw-gradient-from":t.value,"--tw-gradient-to":t.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),Be("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:t})=>({"--tw-gradient-to":t.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${t.value},var(--tw-gradient-to)`})),Be("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),W("bg-(fixed|local|scroll)","backgroundAttachment"),W("bg-origin-(border|padding|content)","backgroundOrigin",({1:t})=>t+"-box"),W(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),W("bg-blend-","backgroundBlendMode"),W("bg-clip-(border|padding|content|text)","backgroundClip",({1:t})=>t+(t=="text"?"":"-box")),K("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),Be("bg-",{section:"backgroundColor"}),K("bg-","backgroundImage"),K("bg-","backgroundPosition"),W("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",Ui),K("bg-","backgroundSize"),K("rounded(?:$|-)","borderRadius"),K("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:t,_:e})=>{let n={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[t]||[t,t];return{[`border-${En(n[0])}-radius`]:e,[`border-${En(n[1])}-radius`]:e}}),W("border-(collapse|separate)","borderCollapse"),K("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),W("border-(solid|dashed|dotted|double|none)","borderStyle"),K("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:t,_:e})=>({...gn({"--tw-border-spacing-x":"0","--tw-border-spacing-y":"0"}),["--tw-border-spacing"+(t||"-x")]:e,["--tw-border-spacing"+(t||"-y")]:e,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),Be("border-([xytrbl])-",{section:"borderColor"},Vn("border","Color")),Be("border-"),K("border-([xytrbl])(?:$|-)","borderWidth",Vn("border","Width")),K("border(?:$|-)","borderWidth"),K("divide-opacity(?:$|-)","divideOpacity",({_:t})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":t}})),W("divide-(solid|dashed|dotted|double|none)",({1:t})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:t}})),W("divide-([xy]-reverse)",({1:t})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+t]:"1"}})),K("divide-([xy])(?:$|-)","divideWidth",({1:t,_:e})=>{let n={x:"lr",y:"tb"}[t];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${t}-reverse`]:"0",[`border-${En(n[0])}Width`]:`calc(${e} * calc(1 - var(--tw-divide-${t}-reverse)))`,[`border-${En(n[1])}Width`]:`calc(${e} * var(--tw-divide-${t}-reverse))`}}}),Be("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),K("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),Be("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),K("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),W("ring-inset",{"--tw-ring-inset":"inset"}),Be("ring-",{property:"--tw-ring-color"}),K("ring(?:$|-)","ringWidth",({_:t},{theme:e})=>({...gn({"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":e("ringOffsetWidth","","0px"),"--tw-ring-offset-color":mn(e("ringOffsetColor","","#fff")),"--tw-ring-color":mn(e("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":e("ringOpacity","","0.5")}}),"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${t} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"})),Be("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:t})=>({"--tw-shadow-color":t.value,"--tw-shadow":"var(--tw-shadow-colored)"})),K("shadow(?:$|-)","boxShadow",({_:t})=>({...gn({"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}),"--tw-shadow":It(t),"--tw-shadow-colored":It(t).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"})),K("(opacity)-"),W("mix-blend-","mixBlendMode"),...dd(),...dd("backdrop-"),K("transition(?:$|-)","transitionProperty",(t,{theme:e})=>({transitionProperty:It(t),transitionTimingFunction:t._=="none"?void 0:It(e("transitionTimingFunction","")),transitionDuration:t._=="none"?void 0:It(e("transitionDuration",""))})),K("duration(?:$|-)","transitionDuration","transitionDuration",It),K("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",It),K("delay(?:$|-)","transitionDelay","transitionDelay",It),K("animate(?:$|-)","animation",(t,{theme:e,h:n,e:r})=>{let i=It(t),a=i.split(" "),o=e("keyframes",a[0]);return o?{["@keyframes "+(a[0]=r(n(a[0])))]:o,animation:a.join(" ")}:{animation:i}}),"(transform)-(none)",W("transform",Uo),W("transform-(cpu|gpu)",({1:t})=>({"--tw-transform":hd(t=="gpu")})),K("scale(-[xy])?-","scale",({1:t,_:e})=>({["--tw-scale"+(t||"-x")]:e,["--tw-scale"+(t||"-y")]:e,...Uo()})),K("-?(rotate)-","rotate",Bo),K("-?(translate-[xy])-","translate",Bo),K("-?(skew-[xy])-","skew",Bo),W("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",Ui),"(appearance)-",K("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",K("(cursor)-"),"(cursor)-",W("snap-(none)","scroll-snap-type"),W("snap-(x|y|both)",({1:t})=>({...gn({"--tw-scroll-snap-strictness":"proximity"}),"scroll-snap-type":t+" var(--tw-scroll-snap-strictness)"})),W("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),W("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),W("snap-(normal|always)","scroll-snap-stop"),W("scroll-(auto|smooth)","scroll-behavior"),K("scroll-p([xytrbl])?(?:$|-)","padding",Vn("scroll-padding")),K("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",Vn("scroll-margin")),W("touch-(auto|none|manipulation)","touch-action"),W("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:t,2:e,3:n})=>({...gn({"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}),[`--tw-${e?"pan-x":n?"pan-y":t}`]:t,"touch-action":"var(--tw-touch-action)"})),W("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),W("outline",{outlineStyle:"solid"}),W("outline-(dashed|dotted|double)","outlineStyle"),K("-?(outline-offset)-"),Be("outline-",{opacityVariable:!1,opacitySection:"opacity"}),K("outline-","outlineWidth"),"(pointer-events)-",K("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:t})=>({x:"horizontal",y:"vertical"})[t]||t||"both"],W("select-(none|text|all|auto)","userSelect"),Be("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),Be("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),K("stroke-","strokeWidth"),W("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),W("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function Ui(t){return(typeof t=="string"?t:t[1]).replace(/-/g," ").trim()}function cd(t){return(typeof t=="string"?t:t[1]).replace("col","column")}function En(t,e="-"){let n=[];for(let r of t)n.push({t:"top",r:"right",b:"bottom",l:"left"}[r]);return n.join(e)}function It(t){return t&&""+(t._||t)}function ud({$$:t}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[t[3]||""]||"")+t}function Vn(t,e=""){return({1:n,_:r})=>{let i={x:"lr",y:"tb"}[n]||n+n;return i?{...Tr(t+"-"+En(i[0])+e,r),...Tr(t+"-"+En(i[1])+e,r)}:Tr(t+e,r)}}function dd(t=""){let e=["blur","brightness","contrast","grayscale","hue-rotate","invert",t&&"opacity","saturate","sepia",!t&&"drop-shadow"].filter(Boolean),n={};for(let r of e)n[`--tw-${t}${r}`]="var(--tw-empty,/*!*/ /*!*/)";return n={...gn(n),[`${t}filter`]:e.map(r=>`var(--tw-${t}${r})`).join(" ")},[`(${t}filter)-(none)`,W(`${t}filter`,n),...e.map(r=>K(`${r[0]=="h"?"-?":""}(${t}${r})(?:$|-)`,r,({1:i,_:a})=>({[`--tw-${i}`]:yt(a).map(o=>`${r}(${o})`).join(" "),...n})))]}function Bo({1:t,_:e}){return{["--tw-"+t]:e,...Uo()}}function Uo(){return{...gn({"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":hd()}),transform:"var(--tw-transform)"}}function hd(t){return[t?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function pd({1:t,2:e}){return`${t} ${e} / ${t} ${e}`}function fd({1:t}){return`repeat(${t},minmax(0,1fr))`}function gn(t){return{"@layer defaults":{"*,::before,::after":t,"::backdrop":t}}}var vd,ge,xd,Yg,Sr,md,Zg,Td={},_d=[],Jg=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function bn(t,e){for(var n in e)t[n]=e[n];return t}function Sd(t){var e=t.parentNode;e&&e.removeChild(t)}function $o(t,e,n,r,i){var a={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++xd};return i==null&&ge.vnode!=null&&ge.vnode(a),a}function Xn(t){return t.children}function $i(t,e){this.props=t,this.context=e}function Gn(t,e){if(e==null)return t.__?Gn(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?Gn(t):null}function kd(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return kd(t)}}function gd(t){(!t.__d&&(t.__d=!0)&&Sr.push(t)&&!Hi.__r++||md!==ge.debounceRendering)&&((md=ge.debounceRendering)||setTimeout)(Hi)}function Hi(){for(var t;Hi.__r=Sr.length;)t=Sr.sort(function(e,n){return e.__v.__b-n.__v.__b}),Sr=[],t.some(function(e){var n,r,i,a,o,s;e.__d&&(o=(a=(n=e).__v).__e,(s=n.__P)&&(r=[],(i=bn({},a)).__v=a.__v+1,Ld(s,a,i,n.__n,s.ownerSVGElement!==void 0,a.__h!=null?[o]:null,r,o??Gn(a),a.__h),e0(r,a),a.__e!=o&&kd(a)))})}function Ad(t,e,n,r,i,a,o,s,l,u){var c,d,p,h,b,g,m,f=r&&r.__k||_d,y=f.length;for(n.__k=[],c=0;c<e.length;c++)if((h=n.__k[c]=(h=e[c])==null||typeof h=="boolean"?null:typeof h=="string"||typeof h=="number"||typeof h=="bigint"?$o(null,h,null,null,h):Array.isArray(h)?$o(Xn,{children:h},null,null,null):h.__b>0?$o(h.type,h.props,h.key,h.ref?h.ref:null,h.__v):h)!=null){if(h.__=n,h.__b=n.__b+1,(p=f[c])===null||p&&h.key==p.key&&h.type===p.type)f[c]=void 0;else for(d=0;d<y;d++){if((p=f[d])&&h.key==p.key&&h.type===p.type){f[d]=void 0;break}p=null}Ld(t,h,p=p||Td,i,a,o,s,l,u),b=h.__e,(d=h.ref)&&p.ref!=d&&(m||(m=[]),p.ref&&m.push(p.ref,null,h),m.push(d,h.__c||b,h)),b!=null?(g==null&&(g=b),typeof h.type=="function"&&h.__k===p.__k?h.__d=l=Ed(h,l,t):l=Cd(t,h,p,f,b,l),typeof n.type=="function"&&(n.__d=l)):l&&p.__e==l&&l.parentNode!=t&&(l=Gn(p))}for(n.__e=g,c=y;c--;)f[c]!=null&&(typeof n.type=="function"&&f[c].__e!=null&&f[c].__e==n.__d&&(n.__d=Gn(r,c+1)),Dd(f[c],f[c]));if(m)for(c=0;c<m.length;c++)Rd(m[c],m[++c],m[++c])}function Ed(t,e,n){for(var r,i=t.__k,a=0;i&&a<i.length;a++)(r=i[a])&&(r.__=t,e=typeof r.type=="function"?Ed(r,e,n):Cd(n,r,r,i,r.__e,e));return e}function Cd(t,e,n,r,i,a){var o,s,l;if(e.__d!==void 0)o=e.__d,e.__d=void 0;else if(n==null||i!=a||i.parentNode==null)e:if(a==null||a.parentNode!==t)t.appendChild(i),o=null;else{for(s=a,l=0;(s=s.nextSibling)&&l<r.length;l+=2)if(s==i)break e;t.insertBefore(i,a),o=a}return o!==void 0?o:i.nextSibling}function Qg(t,e,n,r,i){var a;for(a in n)a==="children"||a==="key"||a in e||ji(t,a,null,n[a],r);for(a in e)i&&typeof e[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===e[a]||ji(t,a,e[a],n[a],r)}function bd(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||Jg.test(e)?n:n+"px"}function ji(t,e,n,r,i){var a;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||bd(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||bd(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")a=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+a]=n,n?r||t.addEventListener(e,a?wd:yd,a):t.removeEventListener(e,a?wd:yd,a);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function yd(t){this.l[t.type+!1](ge.event?ge.event(t):t)}function wd(t){this.l[t.type+!0](ge.event?ge.event(t):t)}function Ld(t,e,n,r,i,a,o,s,l){var u,c,d,p,h,b,g,m,f,y,w,A,S,x=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,s=e.__e=n.__e,e.__h=null,a=[s]),(u=ge.__b)&&u(e);try{e:if(typeof x=="function"){if(m=e.props,f=(u=x.contextType)&&r[u.__c],y=u?f?f.props.value:u.__:r,n.__c?g=(c=e.__c=n.__c).__=c.__E:("prototype"in x&&x.prototype.render?e.__c=c=new x(m,y):(e.__c=c=new $i(m,y),c.constructor=x,c.render=n0),f&&f.sub(c),c.props=m,c.state||(c.state={}),c.context=y,c.__n=r,d=c.__d=!0,c.__h=[]),c.__s==null&&(c.__s=c.state),x.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=bn({},c.__s)),bn(c.__s,x.getDerivedStateFromProps(m,c.__s))),p=c.props,h=c.state,d)x.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(x.getDerivedStateFromProps==null&&m!==p&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(m,y),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(m,c.__s,y)===!1||e.__v===n.__v){c.props=m,c.state=c.__s,e.__v!==n.__v&&(c.__d=!1),c.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(k){k&&(k.__=e)}),c.__h.length&&o.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(m,c.__s,y),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(p,h,b)})}if(c.context=y,c.props=m,c.__v=e,c.__P=t,w=ge.__r,A=0,"prototype"in x&&x.prototype.render)c.state=c.__s,c.__d=!1,w&&w(e),u=c.render(c.props,c.state,c.context);else do c.__d=!1,w&&w(e),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++A<25);c.state=c.__s,c.getChildContext!=null&&(r=bn(bn({},r),c.getChildContext())),d||c.getSnapshotBeforeUpdate==null||(b=c.getSnapshotBeforeUpdate(p,h)),S=u!=null&&u.type===Xn&&u.key==null?u.props.children:u,Ad(t,Array.isArray(S)?S:[S],e,n,r,i,a,o,s,l),c.base=e.__e,e.__h=null,c.__h.length&&o.push(c),g&&(c.__E=c.__=null),c.__e=!1}else a==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=t0(n.__e,e,n,r,i,a,o,l);(u=ge.diffed)&&u(e)}catch(k){e.__v=null,(l||a!=null)&&(e.__e=s,e.__h=!!l,a[a.indexOf(s)]=null),ge.__e(k,e,n)}}function e0(t,e){ge.__c&&ge.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){ge.__e(r,n.__v)}})}function t0(t,e,n,r,i,a,o,s){var l,u,c,d=n.props,p=e.props,h=e.type,b=0;if(h==="svg"&&(i=!0),a!=null){for(;b<a.length;b++)if((l=a[b])&&"setAttribute"in l==!!h&&(h?l.localName===h:l.nodeType===3)){t=l,a[b]=null;break}}if(t==null){if(h===null)return document.createTextNode(p);t=i?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,p.is&&p),a=null,s=!1}if(h===null)d===p||s&&t.data===p||(t.data=p);else{if(a=a&&vd.call(t.childNodes),u=(d=n.props||Td).dangerouslySetInnerHTML,c=p.dangerouslySetInnerHTML,!s){if(a!=null)for(d={},b=0;b<t.attributes.length;b++)d[t.attributes[b].name]=t.attributes[b].value;(c||u)&&(c&&(u&&c.__html==u.__html||c.__html===t.innerHTML)||(t.innerHTML=c&&c.__html||""))}if(Qg(t,p,d,i,s),c)e.__k=[];else if(b=e.props.children,Ad(t,Array.isArray(b)?b:[b],e,n,r,i&&h!=="foreignObject",a,o,a?a[0]:n.__k&&Gn(n,0),s),a!=null)for(b=a.length;b--;)a[b]!=null&&Sd(a[b]);s||("value"in p&&(b=p.value)!==void 0&&(b!==t.value||h==="progress"&&!b||h==="option"&&b!==d.value)&&ji(t,"value",b,d.value,!1),"checked"in p&&(b=p.checked)!==void 0&&b!==t.checked&&ji(t,"checked",b,d.checked,!1))}return t}function Rd(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){ge.__e(r,n)}}function Dd(t,e,n){var r,i;if(ge.unmount&&ge.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||Rd(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){ge.__e(a,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&Dd(r[i],e,typeof t.type!="function");n||t.__e==null||Sd(t.__e),t.__=t.__e=t.__d=void 0}function n0(t,e,n){return this.constructor(t,n)}vd=_d.slice,ge={__e:function(t,e,n,r){for(var i,a,o;e=e.__;)if((i=e.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(t)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,r||{}),o=i.__d),o)return i.__E=i}catch(s){t=s}throw t}},xd=0,Yg=function(t){return t!=null&&t.constructor===void 0},$i.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=bn({},this.state),typeof t=="function"&&(t=t(bn({},n),this.props)),t&&bn(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),gd(this))},$i.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),gd(this))},$i.prototype.render=Xn,Sr=[],Hi.__r=0,Zg=0;var r0,Vt,Ho,Md;var Bd=[],jo=[],Pd=ge.__b,Od=ge.__r,Fd=ge.diffed,Id=ge.__c,Nd=ge.unmount;function i0(){for(var t;t=Bd.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Wi),t.__H.__h.forEach(Wo),t.__H.__h=[]}catch(e){t.__H.__h=[],ge.__e(e,t.__v)}}ge.__b=function(t){typeof t.type!="function"||t.o||t.type===Xn?t.o||(t.o=t.__&&t.__.o?t.__.o:""):t.o=(t.__&&t.__.o?t.__.o:"")+(t.__&&t.__.__k?t.__.__k.indexOf(t):0),Vt=null,Pd&&Pd(t)},ge.__r=function(t){Od&&Od(t),r0=0;var e=(Vt=t.__c).__H;e&&(Ho===Vt?(e.__h=[],Vt.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=jo,n.__N=n.i=void 0})):(e.__h.forEach(Wi),e.__h.forEach(Wo),e.__h=[])),Ho=Vt},ge.diffed=function(t){Fd&&Fd(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Bd.push(e)!==1&&Md===ge.requestAnimationFrame||((Md=ge.requestAnimationFrame)||a0)(i0)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==jo&&(n.__=n.__V),n.i=void 0,n.__V=jo})),Ho=Vt=null},ge.__c=function(t,e){e.some(function(n){try{n.__h.forEach(Wi),n.__h=n.__h.filter(function(r){return!r.__||Wo(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],ge.__e(r,n.__v)}}),Id&&Id(t,e)},ge.unmount=function(t){Nd&&Nd(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Wi(r)}catch(i){e=i}}),n.__H=void 0,e&&ge.__e(e,n.__v))};var zd=typeof requestAnimationFrame=="function";function a0(t){var e,n=function(){clearTimeout(r),zd&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);zd&&(e=requestAnimationFrame(n))}function Wi(t){var e=Vt,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),Vt=e}function Wo(t){var e=Vt;t.__c=t.__(),Vt=e}var qi=globalThis||(typeof window<"u"?window:self),o0=Object.create,Ko=Object.defineProperty,s0=Object.getOwnPropertyDescriptor,l0=Object.getOwnPropertyNames,c0=Object.getPrototypeOf,u0=Object.prototype.hasOwnProperty,d0=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),p0=(t,e)=>{for(var n in e)Ko(t,n,{get:e[n],enumerable:!0})},qo=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of l0(e))!u0.call(t,i)&&i!==n&&Ko(t,i,{get:()=>e[i],enumerable:!(r=s0(e,i))||r.enumerable});return t},f0=(t,e,n)=>(qo(t,e,"default"),n&&qo(n,e,"default")),$d=(t,e,n)=>(n=t!=null?o0(c0(t)):{},qo(e||!t||!t.__esModule?Ko(n,"default",{value:t,enumerable:!0}):n,t)),Hd=d0((t,e)=>{(function(n,r){typeof define=="function"&&define.amd?define([],r):typeof t<"u"?r():(r(),n.FileSaver={})})(t,function(){"use strict";function n(u,c){return typeof c>"u"?c={autoBom:!1}:typeof c!="object"&&(c={autoBom:!c}),c.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(u.type)?new Blob(["\uFEFF",u],{type:u.type}):u}function r(u,c,d){var p=new XMLHttpRequest;p.open("GET",u),p.responseType="blob",p.onload=function(){l(p.response,c,d)},p.onerror=function(){},p.send()}function i(u){var c=new XMLHttpRequest;c.open("HEAD",u,!1);try{c.send()}catch{}return 200<=c.status&&299>=c.status}function a(u){try{u.dispatchEvent(new MouseEvent("click"))}catch{var c=document.createEvent("MouseEvents");c.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),u.dispatchEvent(c)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof qi=="object"&&qi.global===qi?qi:void 0,s=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(u,c,d){var p=o.URL||o.webkitURL,h=document.createElement("a");c=c||u.name||"download",h.download=c,h.rel="noopener",typeof u=="string"?(h.href=u,h.origin===location.origin?a(h):i(h.href)?r(u,c,d):a(h,h.target="_blank")):(h.href=p.createObjectURL(u),setTimeout(function(){p.revokeObjectURL(h.href)},4e4),setTimeout(function(){a(h)},0))}:"msSaveOrOpenBlob"in navigator?function(u,c,d){if(c=c||u.name||"download",typeof u!="string")navigator.msSaveOrOpenBlob(n(u,d),c);else if(i(u))r(u,c,d);else{var p=document.createElement("a");p.href=u,p.target="_blank",setTimeout(function(){a(p)})}}:function(u,c,d,p){if(p=p||open("","_blank"),p&&(p.document.title=p.document.body.innerText="downloading..."),typeof u=="string")return r(u,c,d);var h=u.type==="application/octet-stream",b=/constructor/i.test(o.HTMLElement)||o.safari,g=/CriOS\/[\d]+/.test(navigator.userAgent);if((g||h&&b||s)&&typeof FileReader<"u"){var m=new FileReader;m.onloadend=function(){var w=m.result;w=g?w:w.replace(/^data:[^;]*;/,"data:attachment/file;"),p?p.location.href=w:location=w,p=null},m.readAsDataURL(u)}else{var f=o.URL||o.webkitURL,y=f.createObjectURL(u);p?p.location=y:location.href=y,p=null,setTimeout(function(){f.revokeObjectURL(y)},4e4)}});o.saveAs=l.saveAs=l,typeof e<"u"&&(e.exports=l)})}),jd={};p0(jd,{default:()=>kr});var h0=$d(Hd());f0(jd,$d(Hd()));var{default:Ud,...m0}=h0,kr=Ud!==void 0?Ud:m0;var vt=window,qd=!1,Kd=!!(vt.Worker&&vt.Blob&&vt.Promise&&vt.OffscreenCanvas&&vt.OffscreenCanvasRenderingContext2D&&vt.HTMLCanvasElement&&vt.HTMLCanvasElement.prototype.transferControlToOffscreen&&vt.URL&&vt.URL.createObjectURL);function Wd(){}function Yo(t){var e=vt.Promise,n=e!==void 0?e:vt.Promise;return typeof n=="function"?new n(t):(t(Wd,Wd),null)}var Vo=function(){var t=Math.floor(16.666666666666668),e,n,r={},i=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(a){var o=Math.random();return r[o]=requestAnimationFrame(function s(l){i===l||i+t-1<l?(i=l,delete r[o],a()):r[o]=requestAnimationFrame(s)}),o},n=function(a){r[a]&&cancelAnimationFrame(r[a])}):(e=function(a){return setTimeout(a,t)},n=function(a){return clearTimeout(a)}),{frame:e,cancel:n}}(),g0=function(){var t,e,n={};function r(i){function a(o,s){i.postMessage({options:o||{},callback:s})}i.init=function(s){var l=s.transferControlToOffscreen();i.postMessage({canvas:l},[l])},i.fire=function(s,l,u){if(e)return a(s,null),e;var c=Math.random().toString(36).slice(2);return e=Yo(function(d){function p(h){h.data.callback===c&&(delete n[c],i.removeEventListener("message",p),e=null,u(),d())}i.addEventListener("message",p),a(s,c),n[c]=p.bind(null,{data:{callback:c}})}),e},i.reset=function(){i.postMessage({reset:!0});for(var s in n)n[s](),delete n[s]}}return function(){if(t)return t;if(!qd&&Kd){var i=["var CONFETTI, SIZE = {}, module = {};","("+main.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([i])))}catch{return null}r(t)}return t}}(),b0={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function y0(t,e){return e?e(t):t}function w0(t){return t!=null}function Ue(t,e,n){return y0(t&&w0(t[e])?t[e]:b0[e],n)}function v0(t){return t<0?0:Math.floor(t)}function x0(t,e){return Math.floor(Math.random()*(e-t))+t}function Go(t){return parseInt(t,16)}function T0(t){return t.map(_0)}function _0(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:Go(e.substring(0,2)),g:Go(e.substring(2,4)),b:Go(e.substring(4,6))}}function S0(t){var e=Ue(t,"origin",Object);return e.x=Ue(e,"x",Number),e.y=Ue(e,"y",Number),e}function k0(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function A0(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function E0(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}function C0(t,e,n,r,i,a,o,s,l){t.save(),t.translate(e,n),t.rotate(a),t.scale(r,i),t.arc(0,0,1,o,s,l),t.restore()}function L0(t){var e=t.angle*(Math.PI/180),n=t.spread*(Math.PI/180);return{x:t.x,y:t.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:t.startVelocity*.5+Math.random()*t.startVelocity,angle2D:-e+(.5*n-Math.random()*n),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:t.color,shape:t.shape,tick:0,totalTicks:t.ticks,decay:t.decay,drift:t.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:t.gravity*3,ovalScalar:.6,scalar:t.scalar}}function R0(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=e.wobbleSpeed,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var n=e.tick++/e.totalTicks,r=e.x+e.random*e.tiltCos,i=e.y+e.random*e.tiltSin,a=e.wobbleX+e.random*e.tiltCos,o=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",t.beginPath(),e.shape==="circle")t.ellipse?t.ellipse(e.x,e.y,Math.abs(a-r)*e.ovalScalar,Math.abs(o-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):C0(t,e.x,e.y,Math.abs(a-r)*e.ovalScalar,Math.abs(o-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var s=Math.PI/2*3,l=4*e.scalar,u=8*e.scalar,c=e.x,d=e.y,p=5,h=Math.PI/p;p--;)c=e.x+Math.cos(s)*u,d=e.y+Math.sin(s)*u,t.lineTo(c,d),s+=h,c=e.x+Math.cos(s)*l,d=e.y+Math.sin(s)*l,t.lineTo(c,d),s+=h;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(i)),t.lineTo(Math.floor(a),Math.floor(o)),t.lineTo(Math.floor(r),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}function D0(t,e,n,r,i){var a=e.slice(),o=t.getContext("2d"),s,l,u=Yo(function(c){function d(){s=l=null,o.clearRect(0,0,r.width,r.height),i(),c()}function p(){qd&&!(r.width===workerSize.width&&r.height===workerSize.height)&&(r.width=t.width=workerSize.width,r.height=t.height=workerSize.height),!r.width&&!r.height&&(n(t),r.width=t.width,r.height=t.height),o.clearRect(0,0,r.width,r.height),a=a.filter(function(h){return R0(o,h)}),a.length?s=Vo.frame(p):d()}s=Vo.frame(p),l=d});return{addFettis:function(c){return a=a.concat(c),u},canvas:t,promise:u,reset:function(){s&&Vo.cancel(s),l&&l()}}}function M0(t,e){var n=!t,r=!!Ue(e||{},"resize"),i=Ue(e,"disableForReducedMotion",Boolean),a=Kd&&!!Ue(e||{},"useWorker"),o=a?g0():null,s=n?k0:A0,l=t&&o?!!t.__confetti_initialized:!1,u=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,c;function d(h,b,g){for(var m=Ue(h,"particleCount",v0),f=Ue(h,"angle",Number),y=Ue(h,"spread",Number),w=Ue(h,"startVelocity",Number),A=Ue(h,"decay",Number),S=Ue(h,"gravity",Number),x=Ue(h,"drift",Number),k=Ue(h,"colors",T0),v=Ue(h,"ticks",Number),E=Ue(h,"shapes"),_=Ue(h,"scalar"),C=S0(h),R=m,D=[],I=t.width*C.x,M=t.height*C.y;R--;)D.push(L0({x:I,y:M,angle:f,spread:y,startVelocity:w,color:k[R%k.length],shape:E[x0(0,E.length)],ticks:v,decay:A,gravity:S,drift:x,scalar:_}));return c?c.addFettis(D):(c=D0(t,D,s,b,g),c.promise)}function p(h){var b=i||Ue(h,"disableForReducedMotion",Boolean),g=Ue(h,"zIndex",Number);if(b&&u)return Yo(function(w){w()});n&&c?t=c.canvas:n&&!t&&(t=E0(g),document.body.appendChild(t)),r&&!l&&s(t);var m={width:t.width,height:t.height};o&&!l&&o.init(t),l=!0,o&&(t.__confetti_initialized=!0);function f(){if(o){var w={getBoundingClientRect:function(){if(!n)return t.getBoundingClientRect()}};s(w),o.postMessage({resize:{width:w.width,height:w.height}});return}m.width=m.height=null}function y(){c=null,r&&vt.removeEventListener("resize",f),n&&t&&(document.body.removeChild(t),t=null,l=!1)}return r&&vt.addEventListener("resize",f,!1),o?o.fire(h,m,y):d(h,m,y)}return p.reset=function(){o&&o.reset(),c&&c.reset()},p}var Xo;function P0(){return Xo||(Xo=M0(null,{useWorker:!1,resize:!0})),Xo}function Zo(){return P0().apply(this,arguments)}function Ar(){let t,e="pending",n=new Promise((r,i)=>{t={async resolve(a){await a,e="fulfilled",r(a)},reject(a){e="rejected",i(a)}}});return Object.defineProperty(n,"state",{get:()=>e}),Object.assign(n,t)}var Vd=class{#e=0;#t=[];#n=[];#r=Ar();add(e){++this.#e,this.#i(e[Symbol.asyncIterator]())}async#i(e){try{let{value:n,done:r}=await e.next();r?--this.#e:this.#t.push({iterator:e,value:n})}catch(n){this.#n.push(n)}this.#r.resolve()}async*iterate(){for(;this.#e>0;){await this.#r;for(let e=0;e<this.#t.length;e++){let{iterator:n,value:r}=this.#t[e];yield r,this.#i(n)}if(this.#n.length){for(let e of this.#n)throw e;this.#n.length=0}this.#t.length=0,this.#r=Ar()}}[Symbol.asyncIterator](){return this.iterate()}};var{Deno:Gd}=globalThis,Hv=typeof Gd?.noColor=="boolean"?Gd.noColor:!0;var jv=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");var Zv=Number.isNaN||function(t){return typeof t=="number"&&t!==t};var Ki=globalThis||(typeof window<"u"?window:self),I0=Object.create,Qo=Object.defineProperty,N0=Object.getOwnPropertyDescriptor,z0=Object.getOwnPropertyNames,B0=Object.getPrototypeOf,U0=Object.prototype.hasOwnProperty,$0=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),H0=(t,e)=>{for(var n in e)Qo(t,n,{get:e[n],enumerable:!0})},Jo=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of z0(e))!U0.call(t,i)&&i!==n&&Qo(t,i,{get:()=>e[i],enumerable:!(r=N0(e,i))||r.enumerable});return t},j0=(t,e,n)=>(Jo(t,e,"default"),n&&Jo(n,e,"default")),Yd=(t,e,n)=>(n=t!=null?I0(B0(t)):{},Jo(e||!t||!t.__esModule?Qo(n,"default",{value:t,enumerable:!0}):n,t)),Zd=$0((t,e)=>{var n="Expected a function",r=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,c=typeof Ki=="object"&&Ki&&Ki.Object===Object&&Ki,d=typeof self=="object"&&self&&self.Object===Object&&self,p=c||d||Function("return this")(),h=Object.prototype,b=h.toString,g=Math.max,m=Math.min,f=function(){return p.Date.now()};function y(v,E,_){var C,R,D,I,M,N,z=0,Y=!1,te=!1,V=!0;if(typeof v!="function")throw new TypeError(n);E=k(E)||0,A(_)&&(Y=!!_.leading,te="maxWait"in _,D=te?g(k(_.maxWait)||0,E):D,V="trailing"in _?!!_.trailing:V);function ee(Z){var ie=C,oe=R;return C=R=void 0,z=Z,I=v.apply(oe,ie),I}function L(Z){return z=Z,M=setTimeout(q,E),Y?ee(Z):I}function F(Z){var ie=Z-N,oe=Z-z,le=E-ie;return te?m(le,D-oe):le}function $(Z){var ie=Z-N,oe=Z-z;return N===void 0||ie>=E||ie<0||te&&oe>=D}function q(){var Z=f();if($(Z))return G(Z);M=setTimeout(q,F(Z))}function G(Z){return M=void 0,V&&C?ee(Z):(C=R=void 0,I)}function ue(){M!==void 0&&clearTimeout(M),z=0,C=N=R=M=void 0}function he(){return M===void 0?I:G(f())}function me(){var Z=f(),ie=$(Z);if(C=arguments,R=this,N=Z,ie){if(M===void 0)return L(N);if(te)return M=setTimeout(q,E),ee(N)}return M===void 0&&(M=setTimeout(q,E)),I}return me.cancel=ue,me.flush=he,me}function w(v,E,_){var C=!0,R=!0;if(typeof v!="function")throw new TypeError(n);return A(_)&&(C="leading"in _?!!_.leading:C,R="trailing"in _?!!_.trailing:R),y(v,E,{leading:C,maxWait:E,trailing:R})}function A(v){var E=typeof v;return!!v&&(E=="object"||E=="function")}function S(v){return!!v&&typeof v=="object"}function x(v){return typeof v=="symbol"||S(v)&&b.call(v)==i}function k(v){if(typeof v=="number")return v;if(x(v))return r;if(A(v)){var E=typeof v.valueOf=="function"?v.valueOf():v;v=A(E)?E+"":E}if(typeof v!="string")return v===0?v:+v;v=v.replace(a,"");var _=s.test(v);return _||l.test(v)?u(v.slice(2),_?2:8):o.test(v)?r:+v}e.exports=w}),Jd={};H0(Jd,{default:()=>es});var W0=Yd(Zd());j0(Jd,Yd(Zd()));var{default:Xd,...q0}=W0,es=Xd!==void 0?Xd:q0;var K0=Object.create,ns=Object.defineProperty,V0=Object.getOwnPropertyDescriptor,G0=Object.getOwnPropertyNames,X0=Object.getPrototypeOf,Y0=Object.prototype.hasOwnProperty,Z0=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),J0=(t,e)=>{for(var n in e)ns(t,n,{get:e[n],enumerable:!0})},ts=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of G0(e))!Y0.call(t,i)&&i!==n&&ns(t,i,{get:()=>e[i],enumerable:!(r=V0(e,i))||r.enumerable});return t},Q0=(t,e,n)=>(ts(t,e,"default"),n&&ts(n,e,"default")),ep=(t,e,n)=>(n=t!=null?K0(X0(t)):{},ts(e||!t||!t.__esModule?ns(n,"default",{value:t,enumerable:!0}):n,t)),tp=Z0((t,e)=>{(function(n,r){typeof t=="object"&&typeof e=="object"?e.exports=r():typeof define=="function"&&define.amd?define([],r):typeof t=="object"?t.notie=r():n.notie=r()})(t,function(){return function(n){function r(a){if(i[a])return i[a].exports;var o=i[a]={i:a,l:!1,exports:{}};return n[a].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var i={};return r.m=n,r.c=i,r.i=function(a){return a},r.d=function(a,o,s){r.o(a,o)||Object.defineProperty(a,o,{configurable:!1,enumerable:!0,get:s})},r.n=function(a){var o=a&&a.__esModule?function(){return a.default}:function(){return a};return r.d(o,"a",o),o},r.o=function(a,o){return Object.prototype.hasOwnProperty.call(a,o)},r.p="",r(r.s=1)}([function(n,r){n.exports=function(i){return i.webpackPolyfill||(i.deprecate=function(){},i.paths=[],i.children||(i.children=[]),Object.defineProperty(i,"loaded",{enumerable:!0,get:function(){return i.l}}),Object.defineProperty(i,"id",{enumerable:!0,get:function(){return i.i}}),i.webpackPolyfill=1),i}},function(n,r,i){"use strict";(function(a){var o,s,l,u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c};(function(c,d){u(r)==="object"&&u(a)==="object"?a.exports=d():(s=[],o=d,l=typeof o=="function"?o.apply(r,s):o,l!==void 0&&(a.exports=l))})(void 0,function(){return function(c){function d(h){if(p[h])return p[h].exports;var b=p[h]={i:h,l:!1,exports:{}};return c[h].call(b.exports,b,b.exports,d),b.l=!0,b.exports}var p={};return d.m=c,d.c=p,d.i=function(h){return h},d.d=function(h,b,g){d.o(h,b)||Object.defineProperty(h,b,{configurable:!1,enumerable:!0,get:g})},d.n=function(h){var b=h&&h.__esModule?function(){return h.default}:function(){return h};return d.d(b,"a",b),b},d.o=function(h,b){return Object.prototype.hasOwnProperty.call(h,b)},d.p="",d(d.s=0)}([function(c,d,p){function h(L,F){var $={};for(var q in L)F.indexOf(q)>=0||Object.prototype.hasOwnProperty.call(L,q)&&($[q]=L[q]);return $}Object.defineProperty(d,"__esModule",{value:!0});var b=typeof Symbol=="function"&&u(Symbol.iterator)==="symbol"?function(L){return typeof L>"u"?"undefined":u(L)}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L>"u"?"undefined":u(L)},g=Object.assign||function(L){for(var F=1;F<arguments.length;F++){var $=arguments[F];for(var q in $)Object.prototype.hasOwnProperty.call($,q)&&(L[q]=$[q])}return L},m={top:"top",bottom:"bottom"},f={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:m.top,force:m.top,confirm:m.top,input:m.top,select:m.bottom,date:m.top}},y=d.setOptions=function(L){f=g({},f,L,{classes:g({},f.classes,L.classes),ids:g({},f.ids,L.ids),positions:g({},f.positions,L.positions)})},w=function(){return new Promise(function(L){return setTimeout(L,0)})},A=function(L){return new Promise(function(F){return setTimeout(F,1e3*L)})},S=function(){document.activeElement&&document.activeElement.blur()},x=function(){var L="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(F){var $=16*Math.random()|0,q=F==="x"?$:3&$|8;return q.toString(16)});return"notie-"+L},k={1:f.classes.backgroundSuccess,success:f.classes.backgroundSuccess,2:f.classes.backgroundWarning,warning:f.classes.backgroundWarning,3:f.classes.backgroundError,error:f.classes.backgroundError,4:f.classes.backgroundInfo,info:f.classes.backgroundInfo,5:f.classes.backgroundNeutral,neutral:f.classes.backgroundNeutral},v=function(){return f.transitionSelector+" "+f.transitionDuration+"s "+f.transitionCurve},E=function(L){return L.keyCode===13},_=function(L){return L.keyCode===27},C=function(L,F){L.classList.add(f.classes.container),L.style[F]="-10000px",document.body.appendChild(L),L.style[F]="-"+L.offsetHeight+"px",L.listener&&window.addEventListener("keydown",L.listener),w().then(function(){L.style.transition=v(),L.style[F]=0})},R=function(L,F){var $=document.getElementById(L);$&&($.style[F]="-"+$.offsetHeight+"px",$.listener&&window.removeEventListener("keydown",$.listener),A(f.transitionDuration).then(function(){$.parentNode&&$.parentNode.removeChild($)}))},D=function(L,F){var $=document.createElement("div");$.id=f.ids.overlay,$.classList.add(f.classes.overlay),$.classList.add(f.classes.backgroundOverlay),$.style.opacity=0,L&&f.overlayClickDismiss&&($.onclick=function(){R(L.id,F),I()}),document.body.appendChild($),w().then(function(){$.style.transition=v(),$.style.opacity=f.overlayOpacity})},I=function(){var L=document.getElementById(f.ids.overlay);L.style.opacity=0,A(f.transitionDuration).then(function(){L.parentNode&&L.parentNode.removeChild(L)})},M=d.hideAlerts=function(L){var F=document.getElementsByClassName(f.classes.alert);if(F.length){for(var $=0;$<F.length;$++){var q=F[$];R(q.id,q.position)}L&&A(f.transitionDuration).then(function(){return L()})}},N=d.alert=function(L){var F=L.type,$=F===void 0?4:F,q=L.text,G=L.time,ue=G===void 0?f.alertTime:G,he=L.stay,me=he!==void 0&&he,Z=L.position,ie=Z===void 0?f.positions.alert||ie.top:Z;S(),M();var oe=document.createElement("div"),le=x();oe.id=le,oe.position=ie,oe.classList.add(f.classes.textbox),oe.classList.add(k[$]),oe.classList.add(f.classes.alert),oe.innerHTML='<div class="'+f.classes.textboxInner+'">'+q+"</div>",oe.onclick=function(){return R(le,ie)},oe.listener=function(J){(E(J)||_(J))&&M()},C(oe,ie),ue&&ue<1&&(ue=1),!me&&ue&&A(ue).then(function(){return R(le,ie)})},z=d.force=function(L,F){var $=L.type,q=$===void 0?5:$,G=L.text,ue=L.buttonText,he=ue===void 0?"OK":ue,me=L.callback,Z=L.position,ie=Z===void 0?f.positions.force||ie.top:Z;S(),M();var oe=document.createElement("div"),le=x();oe.id=le;var J=document.createElement("div");J.classList.add(f.classes.textbox),J.classList.add(f.classes.backgroundInfo),J.innerHTML='<div class="'+f.classes.textboxInner+'">'+G+"</div>";var ae=document.createElement("div");ae.classList.add(f.classes.button),ae.classList.add(k[q]),ae.innerHTML=he,ae.onclick=function(){R(le,ie),I(),me?me():F&&F()},oe.appendChild(J),oe.appendChild(ae),oe.listener=function(de){E(de)&&ae.click()},C(oe,ie),D()},Y=d.confirm=function(L,F,$){var q=L.text,G=L.submitText,ue=G===void 0?"Yes":G,he=L.cancelText,me=he===void 0?"Cancel":he,Z=L.submitCallback,ie=L.cancelCallback,oe=L.position,le=oe===void 0?f.positions.confirm||le.top:oe;S(),M();var J=document.createElement("div"),ae=x();J.id=ae;var de=document.createElement("div");de.classList.add(f.classes.textbox),de.classList.add(f.classes.backgroundInfo),de.innerHTML='<div class="'+f.classes.textboxInner+'">'+q+"</div>";var be=document.createElement("div");be.classList.add(f.classes.button),be.classList.add(f.classes.elementHalf),be.classList.add(f.classes.backgroundSuccess),be.innerHTML=ue,be.onclick=function(){R(ae,le),I(),Z?Z():F&&F()};var re=document.createElement("div");re.classList.add(f.classes.button),re.classList.add(f.classes.elementHalf),re.classList.add(f.classes.backgroundError),re.innerHTML=me,re.onclick=function(){R(ae,le),I(),ie?ie():$&&$()},J.appendChild(de),J.appendChild(be),J.appendChild(re),J.listener=function(Re){E(Re)?be.click():_(Re)&&re.click()},C(J,le),D(J,le)},te=function(L,F,$){var q=L.text,G=L.submitText,ue=G===void 0?"Submit":G,he=L.cancelText,me=he===void 0?"Cancel":he,Z=L.submitCallback,ie=L.cancelCallback,oe=L.position,le=oe===void 0?f.positions.input||le.top:oe,J=h(L,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);S(),M();var ae=document.createElement("div"),de=x();ae.id=de;var be=document.createElement("div");be.classList.add(f.classes.textbox),be.classList.add(f.classes.backgroundInfo),be.innerHTML='<div class="'+f.classes.textboxInner+'">'+q+"</div>";var re=document.createElement("input");re.classList.add(f.classes.inputField),re.setAttribute("autocapitalize",J.autocapitalize||"none"),re.setAttribute("autocomplete",J.autocomplete||"off"),re.setAttribute("autocorrect",J.autocorrect||"off"),re.setAttribute("autofocus",J.autofocus||"true"),re.setAttribute("inputmode",J.inputmode||"verbatim"),re.setAttribute("max",J.max||""),re.setAttribute("maxlength",J.maxlength||""),re.setAttribute("min",J.min||""),re.setAttribute("minlength",J.minlength||""),re.setAttribute("placeholder",J.placeholder||""),re.setAttribute("spellcheck",J.spellcheck||"default"),re.setAttribute("step",J.step||"any"),re.setAttribute("type",J.type||"text"),re.value=J.value||"",J.allowed&&(re.oninput=function(){var ve=void 0;if(Array.isArray(J.allowed)){for(var De="",$e=J.allowed,ct=0;ct<$e.length;ct++)$e[ct]==="an"?De+="0-9a-zA-Z":$e[ct]==="a"?De+="a-zA-Z":$e[ct]==="n"&&(De+="0-9"),$e[ct]==="s"&&(De+=" ");ve=new RegExp("[^"+De+"]","g")}else b(J.allowed)==="object"&&(ve=J.allowed);re.value=re.value.replace(ve,"")});var Re=document.createElement("div");Re.classList.add(f.classes.button),Re.classList.add(f.classes.elementHalf),Re.classList.add(f.classes.backgroundSuccess),Re.innerHTML=ue,Re.onclick=function(){R(de,le),I(),Z?Z(re.value):F&&F(re.value)};var Ie=document.createElement("div");Ie.classList.add(f.classes.button),Ie.classList.add(f.classes.elementHalf),Ie.classList.add(f.classes.backgroundError),Ie.innerHTML=me,Ie.onclick=function(){R(de,le),I(),ie?ie(re.value):$&&$(re.value)},ae.appendChild(be),ae.appendChild(re),ae.appendChild(Re),ae.appendChild(Ie),ae.listener=function(ve){E(ve)?Re.click():_(ve)&&Ie.click()},C(ae,le),re.focus(),D(ae,le)};d.input=te;var V=d.select=function(L,F){var $=L.text,q=L.cancelText,G=q===void 0?"Cancel":q,ue=L.cancelCallback,he=L.choices,me=L.position,Z=me===void 0?f.positions.select||Z.top:me;S(),M();var ie=document.createElement("div"),oe=x();ie.id=oe;var le=document.createElement("div");le.classList.add(f.classes.textbox),le.classList.add(f.classes.backgroundInfo),le.innerHTML='<div class="'+f.classes.textboxInner+'">'+$+"</div>",ie.appendChild(le),he.forEach(function(ae,de){var be=ae.type,re=be===void 0?1:be,Re=ae.text,Ie=ae.handler,ve=document.createElement("div");ve.classList.add(k[re]),ve.classList.add(f.classes.button),ve.classList.add(f.classes.selectChoice);var De=he[de+1];De&&!De.type&&(De.type=1),De&&De.type===re&&ve.classList.add(f.classes.selectChoiceRepeated),ve.innerHTML=Re,ve.onclick=function(){R(oe,Z),I(),Ie()},ie.appendChild(ve)});var J=document.createElement("div");J.classList.add(f.classes.backgroundNeutral),J.classList.add(f.classes.button),J.innerHTML=G,J.onclick=function(){R(oe,Z),I(),ue?ue():F&&F()},ie.appendChild(J),ie.listener=function(ae){_(ae)&&J.click()},C(ie,Z),D(ie,Z)},ee=d.date=function(L,F,$){var q=L.value,G=q===void 0?new Date:q,ue=L.submitText,he=ue===void 0?"OK":ue,me=L.cancelText,Z=me===void 0?"Cancel":me,ie=L.submitCallback,oe=L.cancelCallback,le=L.position,J=le===void 0?f.positions.date||J.top:le;S(),M();var ae="&#9662",de=document.createElement("div"),be=document.createElement("div"),re=document.createElement("div"),Re=function(H){de.innerHTML=f.dateMonths[H.getMonth()],be.innerHTML=H.getDate(),re.innerHTML=H.getFullYear()},Ie=function(H){var X=new Date(G.getFullYear(),G.getMonth()+1,0).getDate(),se=H.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(se)>X&&(se=X.toString()),H.target.textContent=se,Number(se)<1&&(se="1"),G.setDate(Number(se))},ve=function(H){var X=H.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);H.target.textContent=X,G.setFullYear(Number(X))},De=function(H){Re(G)},$e=function(H){var X=new Date(G.getFullYear(),G.getMonth()+H+1,0).getDate();G.getDate()>X&&G.setDate(X),G.setMonth(G.getMonth()+H),Re(G)},ct=function(H){G.setDate(G.getDate()+H),Re(G)},rn=function(H){var X=G.getFullYear()+H;X<0?G.setFullYear(0):G.setFullYear(G.getFullYear()+H),Re(G)},Tt=document.createElement("div"),Qe=x();Tt.id=Qe;var Bt=document.createElement("div");Bt.classList.add(f.classes.backgroundInfo);var He=document.createElement("div");He.classList.add(f.classes.dateSelectorInner);var ut=document.createElement("div");ut.classList.add(f.classes.button),ut.classList.add(f.classes.elementThird),ut.classList.add(f.classes.dateSelectorUp),ut.innerHTML=ae;var je=document.createElement("div");je.classList.add(f.classes.button),je.classList.add(f.classes.elementThird),je.classList.add(f.classes.dateSelectorUp),je.innerHTML=ae;var nt=document.createElement("div");nt.classList.add(f.classes.button),nt.classList.add(f.classes.elementThird),nt.classList.add(f.classes.dateSelectorUp),nt.innerHTML=ae,de.classList.add(f.classes.element),de.classList.add(f.classes.elementThird),de.innerHTML=f.dateMonths[G.getMonth()],be.classList.add(f.classes.element),be.classList.add(f.classes.elementThird),be.setAttribute("contentEditable",!0),be.addEventListener("input",Ie),be.addEventListener("blur",De),be.innerHTML=G.getDate(),re.classList.add(f.classes.element),re.classList.add(f.classes.elementThird),re.setAttribute("contentEditable",!0),re.addEventListener("input",ve),re.addEventListener("blur",De),re.innerHTML=G.getFullYear();var Dt=document.createElement("div");Dt.classList.add(f.classes.button),Dt.classList.add(f.classes.elementThird),Dt.innerHTML=ae;var P=document.createElement("div");P.classList.add(f.classes.button),P.classList.add(f.classes.elementThird),P.innerHTML=ae;var B=document.createElement("div");B.classList.add(f.classes.button),B.classList.add(f.classes.elementThird),B.innerHTML=ae,ut.onclick=function(){return $e(1)},je.onclick=function(){return ct(1)},nt.onclick=function(){return rn(1)},Dt.onclick=function(){return $e(-1)},P.onclick=function(){return ct(-1)},B.onclick=function(){return rn(-1)};var O=document.createElement("div");O.classList.add(f.classes.button),O.classList.add(f.classes.elementHalf),O.classList.add(f.classes.backgroundSuccess),O.innerHTML=he,O.onclick=function(){R(Qe,J),I(),ie?ie(G):F&&F(G)};var U=document.createElement("div");U.classList.add(f.classes.button),U.classList.add(f.classes.elementHalf),U.classList.add(f.classes.backgroundError),U.innerHTML=Z,U.onclick=function(){R(Qe,J),I(),oe?oe(G):$&&$(G)},He.appendChild(ut),He.appendChild(je),He.appendChild(nt),He.appendChild(de),He.appendChild(be),He.appendChild(re),He.appendChild(Dt),He.appendChild(P),He.appendChild(B),Bt.appendChild(He),Tt.appendChild(Bt),Tt.appendChild(O),Tt.appendChild(U),Tt.listener=function(H){E(H)?O.click():_(H)&&U.click()},C(Tt,J),D(Tt,J)};d.default={alert:N,force:z,confirm:Y,input:te,select:V,date:ee,setOptions:y,hideAlerts:M}}])})}).call(r,i(0)(n))}])})}),np={};J0(np,{default:()=>Vi});var eb=ep(tp());Q0(np,ep(tp()));var{default:Qd,...tb}=eb,Vi=Qd!==void 0?Qd:tb;var rs=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function is(t,e,n,r){t.addEventListener?t.addEventListener(e,n,r):t.attachEvent&&t.attachEvent("on".concat(e),function(){n(window.event)})}function sp(t,e){for(var n=e.slice(0,e.length-1),r=0;r<n.length;r++)n[r]=t[n[r].toLowerCase()];return n}function lp(t){typeof t!="string"&&(t=""),t=t.replace(/\s/g,"");for(var e=t.split(","),n=e.lastIndexOf("");n>=0;)e[n-1]+=",",e.splice(n,1),n=e.lastIndexOf("");return e}function nb(t,e){for(var n=t.length>=e.length?t:e,r=t.length>=e.length?e:t,i=!0,a=0;a<n.length;a++)r.indexOf(n[a])===-1&&(i=!1);return i}var Cr={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":rs?173:189,"=":rs?61:187,";":rs?59:186,"'":222,"[":219,"]":221,"\\":220},Xt={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},ss={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Je={16:!1,18:!1,17:!1,91:!1},Oe={};for(Er=1;Er<20;Er++)Cr["f".concat(Er)]=111+Er;var Er,Le=[],rp=!1,cp="all",up=[],Xi=function(t){return Cr[t.toLowerCase()]||Xt[t.toLowerCase()]||t.toUpperCase().charCodeAt(0)},rb=function(t){return Object.keys(Cr).find(function(e){return Cr[e]===t})},ib=function(t){return Object.keys(Xt).find(function(e){return Xt[e]===t})};function dp(t){cp=t||"all"}function Lr(){return cp||"all"}function ab(){return Le.slice(0)}function ob(){return Le.map(function(t){return rb(t)||ib(t)||String.fromCharCode(t)})}function sb(t){var e=t.target||t.srcElement,n=e.tagName,r=!0;return(e.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!e.readOnly)&&(r=!1),r}function lb(t){return typeof t=="string"&&(t=Xi(t)),Le.indexOf(t)!==-1}function cb(t,e){var n,r;t||(t=Lr());for(var i in Oe)if(Object.prototype.hasOwnProperty.call(Oe,i))for(n=Oe[i],r=0;r<n.length;)n[r].scope===t?n.splice(r,1):r++;Lr()===t&&dp(e||"all")}function ub(t){var e=t.keyCode||t.which||t.charCode,n=Le.indexOf(e);if(n>=0&&Le.splice(n,1),t.key&&t.key.toLowerCase()==="meta"&&Le.splice(0,Le.length),(e===93||e===224)&&(e=91),e in Je){Je[e]=!1;for(var r in Xt)Xt[r]===e&&(Gt[r]=!1)}}function db(t){if(typeof t>"u")Object.keys(Oe).forEach(function(o){return delete Oe[o]});else if(Array.isArray(t))t.forEach(function(o){o.key&&as(o)});else if(typeof t=="object")t.key&&as(t);else if(typeof t=="string"){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=n[0],a=n[1];typeof i=="function"&&(a=i,i=""),as({key:t,scope:i,method:a,splitKey:"+"})}}var as=function(t){var e=t.key,n=t.scope,r=t.method,i=t.splitKey,a=i===void 0?"+":i,o=lp(e);o.forEach(function(s){var l=s.split(a),u=l.length,c=l[u-1],d=c==="*"?"*":Xi(c);if(Oe[d]){n||(n=Lr());var p=u>1?sp(Xt,l):[];Oe[d]=Oe[d].filter(function(h){var b=r?h.method===r:!0;return!(b&&h.scope===n&&nb(h.mods,p))})}})};function ip(t,e,n,r){if(e.element===r){var i;if(e.scope===n||e.scope==="all"){i=e.mods.length>0;for(var a in Je)Object.prototype.hasOwnProperty.call(Je,a)&&(!Je[a]&&e.mods.indexOf(+a)>-1||Je[a]&&e.mods.indexOf(+a)===-1)&&(i=!1);(e.mods.length===0&&!Je[16]&&!Je[18]&&!Je[17]&&!Je[91]||i||e.shortcut==="*")&&e.method(t,e)===!1&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0))}}}function ap(t,e){var n=Oe["*"],r=t.keyCode||t.which||t.charCode;if(Gt.filter.call(this,t)){if((r===93||r===224)&&(r=91),Le.indexOf(r)===-1&&r!==229&&Le.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(b){var g=ss[b];t[b]&&Le.indexOf(g)===-1?Le.push(g):!t[b]&&Le.indexOf(g)>-1?Le.splice(Le.indexOf(g),1):b==="metaKey"&&t[b]&&Le.length===3&&(t.ctrlKey||t.shiftKey||t.altKey||(Le=Le.slice(Le.indexOf(g))))}),r in Je){Je[r]=!0;for(var i in Xt)Xt[i]===r&&(Gt[i]=!0);if(!n)return}for(var a in Je)Object.prototype.hasOwnProperty.call(Je,a)&&(Je[a]=t[ss[a]]);t.getModifierState&&!(t.altKey&&!t.ctrlKey)&&t.getModifierState("AltGraph")&&(Le.indexOf(17)===-1&&Le.push(17),Le.indexOf(18)===-1&&Le.push(18),Je[17]=!0,Je[18]=!0);var o=Lr();if(n)for(var s=0;s<n.length;s++)n[s].scope===o&&(t.type==="keydown"&&n[s].keydown||t.type==="keyup"&&n[s].keyup)&&ip(t,n[s],o,e);if(r in Oe){for(var l=0;l<Oe[r].length;l++)if((t.type==="keydown"&&Oe[r][l].keydown||t.type==="keyup"&&Oe[r][l].keyup)&&Oe[r][l].key){for(var u=Oe[r][l],c=u.splitKey,d=u.key.split(c),p=[],h=0;h<d.length;h++)p.push(Xi(d[h]));p.sort().join("")===Le.sort().join("")&&ip(t,u,o,e)}}}}function pb(t){return up.indexOf(t)>-1}function Gt(t,e,n){Le=[];var r=lp(t),i=[],a="all",o=document,s=0,l=!1,u=!0,c="+",d=!1;for(n===void 0&&typeof e=="function"&&(n=e),Object.prototype.toString.call(e)==="[object Object]"&&(e.scope&&(a=e.scope),e.element&&(o=e.element),e.keyup&&(l=e.keyup),e.keydown!==void 0&&(u=e.keydown),e.capture!==void 0&&(d=e.capture),typeof e.splitKey=="string"&&(c=e.splitKey)),typeof e=="string"&&(a=e);s<r.length;s++)t=r[s].split(c),i=[],t.length>1&&(i=sp(Xt,t)),t=t[t.length-1],t=t==="*"?"*":Xi(t),t in Oe||(Oe[t]=[]),Oe[t].push({keyup:l,keydown:u,scope:a,mods:i,shortcut:r[s],method:n,key:r[s],splitKey:c,element:o});typeof o<"u"&&!pb(o)&&window&&(up.push(o),is(o,"keydown",function(p){ap(p,o)},d),rp||(rp=!0,is(window,"focus",function(){Le=[]},d)),is(o,"keyup",function(p){ap(p,o),ub(p)},d))}function fb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(Oe).forEach(function(n){var r=Oe[n].filter(function(i){return i.scope===e&&i.shortcut===t});r.forEach(function(i){i&&i.method&&i.method()})})}var os={getPressedKeyString:ob,setScope:dp,getScope:Lr,deleteScope:cb,getPressedKeyCodes:ab,isPressed:lb,filter:sb,trigger:fb,unbind:db,keyMap:Cr,modifier:Xt,modifierMap:ss};for(Gi in os)Object.prototype.hasOwnProperty.call(os,Gi)&&(Gt[Gi]=os[Gi]);var Gi;typeof document<"u"&&(op=window.hotkeys,Gt.noConflict=function(t){return t&&window.hotkeys===Gt&&(window.hotkeys=op),Gt},window.hotkeys=Gt);var op;var{entries:wp,setPrototypeOf:pp,isFrozen:mb,getPrototypeOf:gb,getOwnPropertyDescriptor:bb}=Object,{freeze:st,seal:zt,create:yb}=Object,{apply:fs,construct:hs}=typeof Reflect<"u"&&Reflect;fs||(fs=function(t,e,n){return t.apply(e,n)});st||(st=function(t){return t});zt||(zt=function(t){return t});hs||(hs=function(t,e){return new t(...e)});var wb=Rt(Array.prototype.forEach),fp=Rt(Array.prototype.pop),Rr=Rt(Array.prototype.push),Ji=Rt(String.prototype.toLowerCase),ls=Rt(String.prototype.toString),vb=Rt(String.prototype.match),Nt=Rt(String.prototype.replace),xb=Rt(String.prototype.indexOf),Tb=Rt(String.prototype.trim),xt=Rt(RegExp.prototype.test),Dr=_b(TypeError);function Rt(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return fs(t,e,r)}}function _b(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return hs(t,n)}}function fe(t,e,n){var r;n=(r=n)!==null&&r!==void 0?r:Ji,pp&&pp(t,null);let i=e.length;for(;i--;){let a=e[i];if(typeof a=="string"){let o=n(a);o!==a&&(mb(e)||(e[i]=o),a=o)}t[a]=!0}return t}function Yn(t){let e=yb(null);for(let[n,r]of wp(t))e[n]=r;return e}function Yi(t,e){for(;t!==null;){let r=bb(t,e);if(r){if(r.get)return Rt(r.get);if(typeof r.value=="function")return Rt(r.value)}t=gb(t)}function n(r){return null}return n}var hp=st(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),cs=st(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),us=st(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Sb=st(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ds=st(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),kb=st(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),mp=st(["#text"]),gp=st(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),ps=st(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),bp=st(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Zi=st(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ab=zt(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Eb=zt(/<%[\w\W]*|[\w\W]*%>/gm),Cb=zt(/\${[\w\W]*}/gm),Lb=zt(/^data-[\-\w.\u00B7-\uFFFF]/),Rb=zt(/^aria-[\-\w]+$/),vp=zt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Db=zt(/^(?:\w+script|data):/i),Mb=zt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),xp=zt(/^html$/i),yp=Object.freeze({__proto__:null,MUSTACHE_EXPR:Ab,ERB_EXPR:Eb,TMPLIT_EXPR:Cb,DATA_ATTR:Lb,ARIA_ATTR:Rb,IS_ALLOWED_URI:vp,IS_SCRIPT_OR_DATA:Db,ATTR_WHITESPACE:Mb,DOCTYPE_NAME:xp}),Pb=()=>typeof window>"u"?null:window,Ob=function(t,e){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let n=null,r="data-tt-policy-suffix";e&&e.hasAttribute(r)&&(n=e.getAttribute(r));let i="dompurify"+(n?"#"+n:"");try{return t.createPolicy(i,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return null}};function Tp(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Pb(),e=T=>Tp(T);if(e.version="3.0.3",e.removed=[],!t||!t.document||t.document.nodeType!==9)return e.isSupported=!1,e;let n=t.document,r=n.currentScript,{document:i}=t,{DocumentFragment:a,HTMLTemplateElement:o,Node:s,Element:l,NodeFilter:u,NamedNodeMap:c=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:d,DOMParser:p,trustedTypes:h}=t,b=l.prototype,g=Yi(b,"cloneNode"),m=Yi(b,"nextSibling"),f=Yi(b,"childNodes"),y=Yi(b,"parentNode");if(typeof o=="function"){let T=i.createElement("template");T.content&&T.content.ownerDocument&&(i=T.content.ownerDocument)}let w,A="",{implementation:S,createNodeIterator:x,createDocumentFragment:k,getElementsByTagName:v}=i,{importNode:E}=n,_={};e.isSupported=typeof wp=="function"&&typeof y=="function"&&S&&S.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:C,ERB_EXPR:R,TMPLIT_EXPR:D,DATA_ATTR:I,ARIA_ATTR:M,IS_SCRIPT_OR_DATA:N,ATTR_WHITESPACE:z}=yp,{IS_ALLOWED_URI:Y}=yp,te=null,V=fe({},[...hp,...cs,...us,...ds,...mp]),ee=null,L=fe({},[...gp,...ps,...bp,...Zi]),F=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),$=null,q=null,G=!0,ue=!0,he=!1,me=!0,Z=!1,ie=!1,oe=!1,le=!1,J=!1,ae=!1,de=!1,be=!0,re=!1,Re="user-content-",Ie=!0,ve=!1,De={},$e=null,ct=fe({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),rn=null,Tt=fe({},["audio","video","img","source","image","track"]),Qe=null,Bt=fe({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),He="http://www.w3.org/1998/Math/MathML",ut="http://www.w3.org/2000/svg",je="http://www.w3.org/1999/xhtml",nt=je,Dt=!1,P=null,B=fe({},[He,ut,je],ls),O,U=["application/xhtml+xml","text/html"],H="text/html",X,se=null,Ve=i.createElement("form"),dt=function(T){return T instanceof RegExp||T instanceof Function},wn=function(T){if(!(se&&se===T)){if((!T||typeof T!="object")&&(T={}),T=Yn(T),O=U.indexOf(T.PARSER_MEDIA_TYPE)===-1?O=H:O=T.PARSER_MEDIA_TYPE,X=O==="application/xhtml+xml"?ls:Ji,te="ALLOWED_TAGS"in T?fe({},T.ALLOWED_TAGS,X):V,ee="ALLOWED_ATTR"in T?fe({},T.ALLOWED_ATTR,X):L,P="ALLOWED_NAMESPACES"in T?fe({},T.ALLOWED_NAMESPACES,ls):B,Qe="ADD_URI_SAFE_ATTR"in T?fe(Yn(Bt),T.ADD_URI_SAFE_ATTR,X):Bt,rn="ADD_DATA_URI_TAGS"in T?fe(Yn(Tt),T.ADD_DATA_URI_TAGS,X):Tt,$e="FORBID_CONTENTS"in T?fe({},T.FORBID_CONTENTS,X):ct,$="FORBID_TAGS"in T?fe({},T.FORBID_TAGS,X):{},q="FORBID_ATTR"in T?fe({},T.FORBID_ATTR,X):{},De="USE_PROFILES"in T?T.USE_PROFILES:!1,G=T.ALLOW_ARIA_ATTR!==!1,ue=T.ALLOW_DATA_ATTR!==!1,he=T.ALLOW_UNKNOWN_PROTOCOLS||!1,me=T.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Z=T.SAFE_FOR_TEMPLATES||!1,ie=T.WHOLE_DOCUMENT||!1,J=T.RETURN_DOM||!1,ae=T.RETURN_DOM_FRAGMENT||!1,de=T.RETURN_TRUSTED_TYPE||!1,le=T.FORCE_BODY||!1,be=T.SANITIZE_DOM!==!1,re=T.SANITIZE_NAMED_PROPS||!1,Ie=T.KEEP_CONTENT!==!1,ve=T.IN_PLACE||!1,Y=T.ALLOWED_URI_REGEXP||vp,nt=T.NAMESPACE||je,F=T.CUSTOM_ELEMENT_HANDLING||{},T.CUSTOM_ELEMENT_HANDLING&&dt(T.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(F.tagNameCheck=T.CUSTOM_ELEMENT_HANDLING.tagNameCheck),T.CUSTOM_ELEMENT_HANDLING&&dt(T.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(F.attributeNameCheck=T.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),T.CUSTOM_ELEMENT_HANDLING&&typeof T.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(F.allowCustomizedBuiltInElements=T.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Z&&(ue=!1),ae&&(J=!0),De&&(te=fe({},[...mp]),ee=[],De.html===!0&&(fe(te,hp),fe(ee,gp)),De.svg===!0&&(fe(te,cs),fe(ee,ps),fe(ee,Zi)),De.svgFilters===!0&&(fe(te,us),fe(ee,ps),fe(ee,Zi)),De.mathMl===!0&&(fe(te,ds),fe(ee,bp),fe(ee,Zi))),T.ADD_TAGS&&(te===V&&(te=Yn(te)),fe(te,T.ADD_TAGS,X)),T.ADD_ATTR&&(ee===L&&(ee=Yn(ee)),fe(ee,T.ADD_ATTR,X)),T.ADD_URI_SAFE_ATTR&&fe(Qe,T.ADD_URI_SAFE_ATTR,X),T.FORBID_CONTENTS&&($e===ct&&($e=Yn($e)),fe($e,T.FORBID_CONTENTS,X)),Ie&&(te["#text"]=!0),ie&&fe(te,["html","head","body"]),te.table&&(fe(te,["tbody"]),delete $.tbody),T.TRUSTED_TYPES_POLICY){if(typeof T.TRUSTED_TYPES_POLICY.createHTML!="function")throw Dr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof T.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Dr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');w=T.TRUSTED_TYPES_POLICY,A=w.createHTML("")}else w===void 0&&(w=Ob(h,r)),w!==null&&typeof A=="string"&&(A=w.createHTML(""));st&&st(T),se=T}},Jn=fe({},["mi","mo","mn","ms","mtext"]),Qn=fe({},["foreignobject","desc","title","annotation-xml"]),Ip=fe({},["title","style","font","a","script"]),Pr=fe({},cs);fe(Pr,us),fe(Pr,Sb);let ta=fe({},ds);fe(ta,kb);let Np=function(T){let Q=y(T);(!Q||!Q.tagName)&&(Q={namespaceURI:nt,tagName:"template"});let j=Ji(T.tagName),xe=Ji(Q.tagName);return P[T.namespaceURI]?T.namespaceURI===ut?Q.namespaceURI===je?j==="svg":Q.namespaceURI===He?j==="svg"&&(xe==="annotation-xml"||Jn[xe]):!!Pr[j]:T.namespaceURI===He?Q.namespaceURI===je?j==="math":Q.namespaceURI===ut?j==="math"&&Qn[xe]:!!ta[j]:T.namespaceURI===je?Q.namespaceURI===ut&&!Qn[xe]||Q.namespaceURI===He&&!Jn[xe]?!1:!ta[j]&&(Ip[j]||!Pr[j]):!!(O==="application/xhtml+xml"&&P[T.namespaceURI]):!1},Ln=function(T){Rr(e.removed,{element:T});try{T.parentNode.removeChild(T)}catch{T.remove()}},na=function(T,Q){try{Rr(e.removed,{attribute:Q.getAttributeNode(T),from:Q})}catch{Rr(e.removed,{attribute:null,from:Q})}if(Q.removeAttribute(T),T==="is"&&!ee[T])if(J||ae)try{Ln(Q)}catch{}else try{Q.setAttribute(T,"")}catch{}},ws=function(T){let Q,j;if(le)T="<remove></remove>"+T;else{let rt=vb(T,/^[\r\n\t ]+/);j=rt&&rt[0]}O==="application/xhtml+xml"&&nt===je&&(T='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+T+"</body></html>");let xe=w?w.createHTML(T):T;if(nt===je)try{Q=new p().parseFromString(xe,O)}catch{}if(!Q||!Q.documentElement){Q=S.createDocument(nt,"template",null);try{Q.documentElement.innerHTML=Dt?A:xe}catch{}}let Ne=Q.body||Q.documentElement;return T&&j&&Ne.insertBefore(i.createTextNode(j),Ne.childNodes[0]||null),nt===je?v.call(Q,ie?"html":"body")[0]:ie?Q.documentElement:Ne},vs=function(T){return x.call(T.ownerDocument||T,T,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null,!1)},zp=function(T){return T instanceof d&&(typeof T.nodeName!="string"||typeof T.textContent!="string"||typeof T.removeChild!="function"||!(T.attributes instanceof c)||typeof T.removeAttribute!="function"||typeof T.setAttribute!="function"||typeof T.namespaceURI!="string"||typeof T.insertBefore!="function"||typeof T.hasChildNodes!="function")},Or=function(T){return typeof s=="object"?T instanceof s:T&&typeof T=="object"&&typeof T.nodeType=="number"&&typeof T.nodeName=="string"},Yt=function(T,Q,j){_[T]&&wb(_[T],xe=>{xe.call(e,Q,j,se)})},xs=function(T){let Q;if(Yt("beforeSanitizeElements",T,null),zp(T))return Ln(T),!0;let j=X(T.nodeName);if(Yt("uponSanitizeElement",T,{tagName:j,allowedTags:te}),T.hasChildNodes()&&!Or(T.firstElementChild)&&(!Or(T.content)||!Or(T.content.firstElementChild))&&xt(/<[/\w]/g,T.innerHTML)&&xt(/<[/\w]/g,T.textContent))return Ln(T),!0;if(!te[j]||$[j]){if(!$[j]&&_s(j)&&(F.tagNameCheck instanceof RegExp&&xt(F.tagNameCheck,j)||F.tagNameCheck instanceof Function&&F.tagNameCheck(j)))return!1;if(Ie&&!$e[j]){let xe=y(T)||T.parentNode,Ne=f(T)||T.childNodes;if(Ne&&xe){let rt=Ne.length;for(let pt=rt-1;pt>=0;--pt)xe.insertBefore(g(Ne[pt],!0),m(T))}}return Ln(T),!0}return T instanceof l&&!Np(T)||(j==="noscript"||j==="noembed")&&xt(/<\/no(script|embed)/i,T.innerHTML)?(Ln(T),!0):(Z&&T.nodeType===3&&(Q=T.textContent,Q=Nt(Q,C," "),Q=Nt(Q,R," "),Q=Nt(Q,D," "),T.textContent!==Q&&(Rr(e.removed,{element:T.cloneNode()}),T.textContent=Q)),Yt("afterSanitizeElements",T,null),!1)},Ts=function(T,Q,j){if(be&&(Q==="id"||Q==="name")&&(j in i||j in Ve))return!1;if(!(ue&&!q[Q]&&xt(I,Q))&&!(G&&xt(M,Q))){if(!ee[Q]||q[Q]){if(!(_s(T)&&(F.tagNameCheck instanceof RegExp&&xt(F.tagNameCheck,T)||F.tagNameCheck instanceof Function&&F.tagNameCheck(T))&&(F.attributeNameCheck instanceof RegExp&&xt(F.attributeNameCheck,Q)||F.attributeNameCheck instanceof Function&&F.attributeNameCheck(Q))||Q==="is"&&F.allowCustomizedBuiltInElements&&(F.tagNameCheck instanceof RegExp&&xt(F.tagNameCheck,j)||F.tagNameCheck instanceof Function&&F.tagNameCheck(j))))return!1}else if(!Qe[Q]&&!xt(Y,Nt(j,z,""))&&!((Q==="src"||Q==="xlink:href"||Q==="href")&&T!=="script"&&xb(j,"data:")===0&&rn[T])&&!(he&&!xt(N,Nt(j,z,"")))&&j)return!1}return!0},_s=function(T){return T.indexOf("-")>0},Ss=function(T){let Q,j,xe,Ne;Yt("beforeSanitizeAttributes",T,null);let{attributes:rt}=T;if(!rt)return;let pt={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ee};for(Ne=rt.length;Ne--;){Q=rt[Ne];let{name:We,namespaceURI:Rn}=Q;if(j=We==="value"?Q.value:Tb(Q.value),xe=X(We),pt.attrName=xe,pt.attrValue=j,pt.keepAttr=!0,pt.forceKeepAttr=void 0,Yt("uponSanitizeAttribute",T,pt),j=pt.attrValue,pt.forceKeepAttr||(na(We,T),!pt.keepAttr))continue;if(!me&&xt(/\/>/i,j)){na(We,T);continue}Z&&(j=Nt(j,C," "),j=Nt(j,R," "),j=Nt(j,D," "));let ks=X(T.nodeName);if(Ts(ks,xe,j)){if(re&&(xe==="id"||xe==="name")&&(na(We,T),j=Re+j),w&&typeof h=="object"&&typeof h.getAttributeType=="function"&&!Rn)switch(h.getAttributeType(ks,xe)){case"TrustedHTML":{j=w.createHTML(j);break}case"TrustedScriptURL":{j=w.createScriptURL(j);break}}try{Rn?T.setAttributeNS(Rn,We,j):T.setAttribute(We,j),fp(e.removed)}catch{}}}Yt("afterSanitizeAttributes",T,null)},Bp=function T(Q){let j,xe=vs(Q);for(Yt("beforeSanitizeShadowDOM",Q,null);j=xe.nextNode();)Yt("uponSanitizeShadowNode",j,null),!xs(j)&&(j.content instanceof a&&T(j.content),Ss(j));Yt("afterSanitizeShadowDOM",Q,null)};return e.sanitize=function(T){let Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},j,xe,Ne,rt;if(Dt=!T,Dt&&(T="<!-->"),typeof T!="string"&&!Or(T))if(typeof T.toString=="function"){if(T=T.toString(),typeof T!="string")throw Dr("dirty is not a string, aborting")}else throw Dr("toString is not a function");if(!e.isSupported)return T;if(oe||wn(Q),e.removed=[],typeof T=="string"&&(ve=!1),ve){if(T.nodeName){let Rn=X(T.nodeName);if(!te[Rn]||$[Rn])throw Dr("root node is forbidden and cannot be sanitized in-place")}}else if(T instanceof s)j=ws("<!---->"),xe=j.ownerDocument.importNode(T,!0),xe.nodeType===1&&xe.nodeName==="BODY"||xe.nodeName==="HTML"?j=xe:j.appendChild(xe);else{if(!J&&!Z&&!ie&&T.indexOf("<")===-1)return w&&de?w.createHTML(T):T;if(j=ws(T),!j)return J?null:de?A:""}j&&le&&Ln(j.firstChild);let pt=vs(ve?T:j);for(;Ne=pt.nextNode();)xs(Ne)||(Ne.content instanceof a&&Bp(Ne.content),Ss(Ne));if(ve)return T;if(J){if(ae)for(rt=k.call(j.ownerDocument);j.firstChild;)rt.appendChild(j.firstChild);else rt=j;return(ee.shadowroot||ee.shadowrootmod)&&(rt=E.call(n,rt,!0)),rt}let We=ie?j.outerHTML:j.innerHTML;return ie&&te["!doctype"]&&j.ownerDocument&&j.ownerDocument.doctype&&j.ownerDocument.doctype.name&&xt(xp,j.ownerDocument.doctype.name)&&(We="<!DOCTYPE "+j.ownerDocument.doctype.name+`>
`+We),Z&&(We=Nt(We,C," "),We=Nt(We,R," "),We=Nt(We,D," ")),w&&de?w.createHTML(We):We},e.setConfig=function(T){wn(T),oe=!0},e.clearConfig=function(){se=null,oe=!1},e.isValidAttribute=function(T,Q,j){se||wn({});let xe=X(T),Ne=X(Q);return Ts(xe,Ne,j)},e.addHook=function(T,Q){typeof Q=="function"&&(_[T]=_[T]||[],Rr(_[T],Q))},e.removeHook=function(T){if(_[T])return fp(_[T])},e.removeHooks=function(T){_[T]&&(_[T]=[])},e.removeAllHooks=function(){_={}},e}var Mr=Tp();var Ux=Vi.alert;var _p={nologin:"\u672A\u767B\u5F55",loginForSafari:"\u767B\u5F55\u6216\u6CE8\u518C",login:"\u767B\u5F55\u540E\u53EF\u5F00\u901A\u4F1A\u5458",manageAccount:"\u7BA1\u7406\u8D26\u6237",openPremium:"\u5F00\u901A\u4F1A\u5458",logout:"\u9000\u51FA",curentPlan:"\u5F53\u524D\u5957\u9910",endAt:"\u5230\u671F",endAuto:"\u81EA\u52A8\u7EED\u671F",lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","noSupportTranslate-pdf":"\u811A\u672C\u4E0D\u652F\u6301\u8BF7\u4F7F\u7528\u63D2\u4EF6","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u5BFC\u5165PDF",enableLineBreak:"\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E\u683C\u5F0F\u4E3A (\u6CA1\u6709\u505A\u81EA\u52A8\u8BC6\u522B\uFF0C\u8BF7\u76F4\u63A5\u8F93\u5165)\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u540C\u65F6\u652F\u6301 PDF \u7FFB\u8BD1\uFF0C\u53CC\u8BED Epub \u7535\u5B50\u4E66\u5236\u4F5C\uFF0C\u652F\u6301 Deepl/Google/\u6709\u9053/\u817E\u8BAF\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u514D\u8D39\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8BD1\u5E76\u9690\u85CF\u539F\u6587/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.toggleTranslationMask":"\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6","browser.openEbookViewer":"\u9605\u8BFB\u672C\u5730\u7535\u5B50\u4E66","browser.openEbookBuilder":"\u5236\u4F5C\u53CC\u8BED EPUB \u7535\u5B50\u4E66","browser.translateLocalHtmlFile":"\u7FFB\u8BD1 HTML/txt \u6587\u4EF6","browser.donateContext":"\u4E86\u89E3\u8D5E\u52A9\u798F\u5229","browser.translateLocalSubtitleFile":"\u7FFB\u8BD1\u672C\u5730\u5B57\u5E55\u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",isShowContextMenu:"\u5C06\u7FFB\u8BD1\u7F51\u9875\u52A0\u5165\u53F3\u952E\u83DC\u5355\u9879",toggleBeta:"\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",betaDescription:"\u542F\u7528\u4ECD\u5728\u5B9E\u9A8C\u6027\u7684\u529F\u80FD\uFF0C\u4EE5\u53CA\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u603B\u662F\u6362\u884C\u9002\u7528\u4E8E\u8F83\u5C11\u5185\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F50\u3002\uFF08\u5728\u5185\u5BB9\u8F83\u591A\u7684\u957F\u6BB5\u843D(\u8D85\u8FC7{count}\u4E2A\u5B57\u7B26) \u4F7F\u7528\u667A\u80FD\u6362\u884C\uFF0C\u66F4\u7701\u7A7A\u95F4\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1\uFF0C\u53EF\u8BBE\u7F6E\u4E34\u65F6\u65F6\u957F",xMinutes:"{count} \u5206\u949F",disabled:"\u7981\u7528",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5219\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875(\u4EC5\u8BD1\u6587)/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",mouseHoldKey:"+ {key} \u7FFB\u8BD1\u8BE5\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8BD1\u8BE5\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E(\u6253\u5F00\u8BBE\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8BD1\u8BE5\u6BB5",mouseHoverHoldKey:"\u9F20\u6807\u60AC\u505C\u540C\u65F6\u6309\u4E0B\u5FEB\u6377\u952E\u7FFB\u8BD1\u6BB5\u843D","mouse-translate":"\u9F20\u6807\u60AC\u505C",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",resetThisSuccess:"\u91CD\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",goAdvancedInterfaceSettings:"\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\u3002\u4EC5\u5BF9\u4E8E\u66F4\u4E13\u4E1A\u7684\u7528\u6237\uFF0C\u63D0\u4F9B\u66F4\u4E2A\u6027\u5316\u7684\u8BBE\u7F6E\u9879\u3002",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u4EF7\u683C","translate to the bottom of the page":"\u8FDB\u5165\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u8FDB\u5165\u7F51\u9875\u5C06\u7ACB\u5373\u7FFB\u8BD1\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\u3002\u5173\u95ED\u5219\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u6240\u6709\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\u3002\u5173\u95ED\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\uFF0C\u4EC5\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8BD1\u9875\u9762\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\uFF0C\u800C\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",moreOptions:"\u5C55\u5F00\u66F4\u591A\u81EA\u5B9A\u4E49\u9009\u9879",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u6240\u6709\u533A\u57DF",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",changeToOnlyTranslationMode:"\u5207\u6362\u4E3A\u4EC5\u663E\u793A\u8BD1\u6587",changeToDualTranslationMode:"\u5207\u6362\u4E3A\u53CC\u8BED\u7FFB\u8BD1",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",badUserscriptBrowser:"\u5F53\u524D\u6D4F\u89C8\u5668\u6CA1\u6709\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u6269\u5C55\u7684\u63A5\u53E3\uFF08\u6BD4\u5982\u83B7\u53D6\u6CB9\u7334\u811A\u672C\u81EA\u8EAB\u7684\u7248\u672C\u53F7\u4FE1\u606F\uFF09\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334\u6269\u5C55</1>\u7684\u6D4F\u89C8\u5668\u5982 Firefox",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",needActionForOptions:"(\u9700\u8BBE\u7F6E)",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u5F53\u524D\u7F51\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1 {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1 {language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",alwaysTranslateSomeSiteOrWildSite:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u7AD9",alwaysTranslateSomePage:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u9875",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA",import_export_title:"\u5BFC\u5165/\u5BFC\u51FA\u914D\u7F6E",syncToGoogleDrive:"\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65",previewAllThemes:"\u9884\u89C8\u5168\u90E8\u6837\u5F0F","translationTheme.none":"\u65E0","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.solidBorder":"\u5B9E\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C\uFF08\u5B66\u4E60\u6A21\u5F0F\uFF09","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.marker2":"\u9A6C\u514B\u7B142","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDashed":"\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDotted":"\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.nativeUnderline":"\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.wavy":"\u6CE2\u6D6A\u7EBF","translationServices.custom":"\u81EA\u5B9A\u4E49API","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.tenAlpha":"\u817E\u8BAF\u7FFB\u8BD1\u541B(Alpha)","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeeplX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"Azure \u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.cai":"\u5F69\u4E91\u5C0F\u8BD1 (Alpha)","translationServices.volcAlpha":"\u706B\u5C71 (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.you":"\u6709\u9053\u7FFB\u8BD1 (Alpha)","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.niu":"\u5C0F\u725B\u7FFB\u8BD1","translationServices.papago":"Papago \u7FFB\u8BD1","translationServices.d":"D (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u5C06\u8DF3\u8FC7\u7FFB\u8BD1",enableUserscriptPagePopup:"\u5728\u9875\u9762\u4E0A\u663E\u793A\u60AC\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u5173\u95ED\u60AC\u6D6E\u7403\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u60AC\u6D6E\u7403\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u603B\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8BD1\u6587\u6837\u5F0F",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B",syncToCloud:"\u540C\u6B65\u5230 Google Drive",syncToCloudDescription:"\u4E0A\u4F20\u5230\u4E91\u7AEF\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668/\u6CB9\u7334\u811A\u672C\u4E4B\u95F4\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",syncToAccount:"\u540C\u6B65\u5230\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u4E91\u7AEF",syncToAccountButton:"\u7ACB\u5373\u4E0E\u4E91\u7AEF\u540C\u6B65",syncToAccountDescription:"\u5728\u4E0D\u540C\u7684\u8BBE\u5907\u4E4B\u95F4\u81EA\u52A8\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",successSyncConfigInAccount:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",successSyncConfigToAccount:"\u6210\u529F\u540C\u6B65\u5230\u4E91\u7AEF",syncConfigNoUpdate:"\u5DF2\u7ECF\u662F\u6700\u65B0\u7684\u4E86",authFail:"\u6388\u6743\u5931\u8D25",syncTitle:"\u624B\u52A8\u5907\u4EFD\u7BA1\u7406",import_hint:"\u5BFC\u5165",upload:"\u4E0A\u4F20",revokeAuth:"\u64A4\u9500\u6388\u6743",uploadFail:"\u4E0A\u4F20\u5931\u8D25",download:"\u4E0B\u8F7D",importSuccess:"\u5BFC\u5165\u6210\u529F",importFail:"\u5BFC\u5165\u5931\u8D25",deleteFail:"\u5220\u9664\u5931\u8D25",backupToCloud:"\u624B\u52A8\u7BA1\u7406\u5907\u4EFD\u6587\u4EF6",create_new_backup:"\u65B0\u589E\u5907\u4EFD\u8282\u70B9",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5907\u4EFD{count}\u4E2A\u4E0D\u540C\u7684\u8282\u70B9, \u8BF7\u5220\u9664\u4E0D\u9700\u8981\u7684\u8282\u70B9",backupToCloudDescription:"\u624B\u52A8\u4E0A\u4F20\u6216\u6062\u590D\u5907\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8BB83\u4E2A\u4E0D\u540C\u7684\u5907\u4EFD",successSyncConfig:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u8D25",updatedAt:"\u66F4\u65B0\u4E8E {date}",lastSyncedAt:"\u4E0A\u6B21\u68C0\u67E5\u4E8E {date}",downloadFail:"\u4E0B\u8F7D\u5931\u8D25",clickToDownload:"\u70B9\u51FB\u4E0B\u8F7D",aboutLabel:"\u5173\u4E8E - \u53CD\u9988","browser.openAboutPage":"\u5173\u4E8E/\u53CD\u9988",aboutLabelWithoutSponsor:"\u5173\u4E8E - \u53CD\u9988",aboutIntro:"\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F \u4F60\u53EF\u9009\u62E9\u5F00\u901A <6>Pro\u4F1A\u5458</6> \u6765\u4F7F\u7528\u5F00\u7BB1\u5373\u7528\u7684 DeepL \u548C OpenAI \u7FFB\u8BD1\u3002 <br/><br/>\u4F60\u53EF\u4EE5\u5173\u6CE8\u6211\u4EEC\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\uFF0C\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF0C\u6216\u8005\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002<br/> <7>Pro \u4F1A\u5458</7> \u53EF\u4EE5\u901A\u8FC7\u5FEB\u901F\u5BA2\u670D\u90AE\u7BB1 <8>support@immersivetranslate.com</8> \u548C\u6211\u4EEC\u53D6\u5F97\u8054\u7CFB\u3002",aboutIntroWithoutSponsor:"\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F  <br/><br/>\u4F60\u53EF\u4EE5\u5173\u6CE8\u6211\u4EEC\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\uFF0C\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF0C\u6216\u8005\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002",projectHomepage:"\u9879\u76EE\u4E3B\u9875",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u53C2\u4E0E\u529F\u80FD\u8BA8\u8BBA",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u4F17\u53F7",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",qqCommunities:"QQ \u4EA4\u6D41\u9891\u9053",joinTelegramChannel:"\u5173\u6CE8 Telegram \u9891\u9053\u83B7\u53D6\u6700\u65B0\u66F4\u65B0",feedbackAndJoin:"\u95EE\u9898\u53CD\u9988/\u52A0\u7FA4",autoSync:"\u81EA\u52A8\u5B9A\u65F6\u540C\u6B65",loadingThemeTitle:"Loading \u6837\u5F0F",loadingThemeDescription:"\u8BBE\u7F6E\u7B49\u5F85\u8BD1\u6587\u52A0\u8F7D\u65F6\u7684\u6837\u5F0F","loadingTheme.spinner":"\u8F6C\u5708\u52A8\u753B","loadingTheme.text":"\u9759\u6001\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u663E\u793A",developerDescription:"\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863","edit border color":"\u4FEE\u6539\u8FB9\u6846\u989C\u8272",successSyncButNoChange:"\u5F53\u524D\u914D\u7F6E\u4E0E\u4E91\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u8FB9\u6846\u989C\u8272","customThemeLabel.borderRadius":"\u8FB9\u6846\u5706\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u989C\u8272","customThemeLabel.backgroundColor":"\u80CC\u666F\u989C\u8272","customThemeLabel.zoom":"\u5B57\u4F53\u7F29\u653E\u6BD4\u4F8B (%)","customThemeLabel.opacity":"\u6587\u5B57\u4E0D\u900F\u660E\u5EA6 (%)",resetToDefaultColor:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u989C\u8272",resetToDefaultSettings:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u8BBE\u7F6E",isTranslateTitle:"\u5F00\u542F\u7FFB\u8BD1\u7F51\u9875\u6807\u9898",enableSubtitle:"\u5F00\u542F\u5B57\u5E55\u7FFB\u8BD1",enableSubtitleDescription:"\u9488\u5BF9 youtube \u7B49\u7F51\u7AD9\u7684\u5B57\u5E55\u533A\u57DF\u5F00\u542F\u7FFB\u8BD1",isTranslateTitleDescription:"\u5F00\u542F\u540E\uFF0C\u7F51\u9875\u6807\u9898\u4F1A\u88AB\u7FFB\u8BD1",enableSearchEnhancement:"\u542F\u7528\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A",enableSearchEnhancementDescription:"\u5F00\u542F\u540E\uFF0C\u5728\u652F\u6301\u7684\u7F51\u7AD9\uFF08\u8C37\u6B4C\u65B0\u95FB\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u5173\u952E\u8BCD\uFF09\uFF0C\u96EA\u7403\uFF0C\u4E1C\u65B9\u8D22\u5BCC\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\u793E\u533A\uFF09\u53F3\u8FB9\u680F\u81EA\u52A8\u663E\u793A\u5BF9\u5E94\u82F1\u6587\u5173\u952E\u8BCD\u7684\u201C\u8C37\u6B4C\u65B0\u95FB\u201D\u641C\u7D22\u7ED3\u679C\u3002",verifyService:"\u70B9\u6B64\u6D4B\u8BD5\u670D\u52A1",verified:"\u9A8C\u8BC1\u6210\u529F","field.langs":"\u652F\u6301\u7684\u8BED\u8A00\u4EE3\u7801","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8BD1\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u949F\u6700\u5927\u8BF7\u6C42\u6570","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8BF7\u6C42\u6570","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6587\u672C\u957F\u5EA6","field.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6BB5\u843D\u6570","field.apiUrl":"\u81EA\u5B9A\u4E49 API \u63A5\u53E3\u5730\u5740","field.placeholderDelimiters":"\u4FDD\u7559\u7684\u5360\u4F4D\u7B26","description.custom":"<a href='https://immersivetranslate.com/docs/services/custom/' target='_blank'>\u81EA\u5B9A\u4E49\u63A5\u53E3\u63A5\u5165</a> \u9700\u8981\u53C2\u8003\u6587\u6863","description.limitPerMinute":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u5206\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.generalLimitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002","description.prompt":"\u4EE5\u7528\u6237\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u8350\uFF09, \u5C06\u4F1A\u5728\u5355\u72EC\u4F5C\u4E3A\u4E00\u6BB5\u53D1\u9001\u7ED9 OpenAI","description.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u5B57\u7B26\u6570\uFF0C\u592A\u5927\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5C1D\u8BD5\u8C03\u6574\u8BE5\u9009\u9879\u6765\u4F18\u5316\u901F\u5EA6","description.systemPrompt":"\u4EE5\u7CFB\u7EDF\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00","field.domain":"\u9886\u57DF","description.domain":"\u9ED8\u8BA4\u4E3A\uFF1Ageneral\u3002\u4EC5\u5728\u6709\u9053API\u63A7\u5236\u53F0\u5F00\u901A\u9886\u57DF\u5316\u7FFB\u8BD1\u7684\u60C5\u51B5\u4E0B\u53EF\u8BBE\u7F6E\uFF0C\u652F\u6301\u9886\u57DF\u89C1<1>\u8FD9\u91CC</1>","field.scene":"\u573A\u666F","description.scene":"\u9ED8\u8BA4\u4E3A\uFF1Ageneral\u3002\u4EC5\u5728\u963F\u91CC\u4E91API\u63A7\u5236\u53F0\u5F00\u901A\u673A\u5668\u7FFB\u8BD1\u4E13\u4E1A\u7248\u7684\u60C5\u51B5\u4E0B\u53EF\u8BBE\u7F6E\uFF0C\u652F\u6301\u573A\u666F\u89C1<1>\u8FD9\u91CC</1>","field.vocabId":"\u7528\u6237\u8BCD\u5178 ID","description.vocabId":"\u6307\u5B9A\u7684\u8BCD\u5178 out_id\uFF0C\u76EE\u524D\u652F\u6301\u82F1\u8BD1\u4E2D","description.model":"OpenAI \u7684\u6A21\u578B\uFF0C\u53EF\u4EE5\u4E3A gpt-3.5-turbo, gpt-4 \u7B49","description.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u53D1\u9001\u7ED9\u7FFB\u8BD1\u670D\u52A1\u7684\u6BB5\u843D\u6570\u91CF\uFF0C\u5982\u679C\u6BB5\u843D\u6570\u91CF\u8FC7\u591A\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162","description.apiUrl":"\u8BF7\u6DFB\u52A0\u5177\u4F53\u5E26\u6709\u8DEF\u5F84\u7684\u7F51\u5740",enabledExtension:"\u542F\u7528\u6269\u5C55",clickToDisableExtension:"\u70B9\u51FB\u7981\u7528\u6269\u5C55",clickToEnableExtension:"\u70B9\u51FB\u542F\u7528\u6269\u5C55",hasBeenDisabled:"\u5DF2\u7981\u7528","show password":"\u663E\u793A\u5BC6\u7801",customContent:"\u8F93\u5165\u81EA\u5B9A\u4E49\u6A21\u578B\u540D\u79F0",inputOptions:"\u8F93\u5165\u6846\u589E\u5F3A",mouseHoverOptions:"\u9F20\u6807\u60AC\u505C",modifyMouseHoverKey:"\u4FEE\u6539\u9F20\u6807\u60AC\u505C\u5FEB\u6377\u952E",enableInputTranslation:"\u662F\u5426\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",enableInputTranslationDescription:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165 {startingKey}{startingKey} \u4F60\u597D\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165\uFF1A\u4F60\u597D\u4E16\u754C\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguage:"\u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguageDescription:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00\uFF0C\u4E5F\u5C31\u662F {startingKey}{startingKey} \u4F5C\u4E3A\u89E6\u53D1\u8BCD\u7684\u9ED8\u8BA4\u8BED\u8A00",inputTargetLanguageDescriptionForNoneKey:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputStartingTriggerKeyTitle:"\u8BBE\u7F6E\u8F93\u5165\u6846\u90E8\u5206\u7FFB\u8BD1\u7684\u5206\u5272\u5B57\u7B26",inputStartingTriggerKeyDescription:"\u5F53\u4F60\u4E0D\u9700\u8981\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u7684\u65F6\u5019\uFF0C\u5206\u5272\u7B26\u5141\u8BB8\u4F60\u53EA\u7FFB\u8BD1 {startingKey}{startingKey} \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u8BED\u8A00\u4EE3\u7801\uFF0C\u6BD4\u5982\uFF1A{startingKey}ja \u8868\u793A\u53EA\u7FFB\u8BD1 {startingKey}ja \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206",inputStartingTriggerKeyDescriptionForNoneKey:"\u5F53\u524D\u8BBE\u7F6E\u4E3A\u65E0\u9700\u524D\u7F00\uFF0C\u6682\u65E0\u6CD5\u4F7F\u7528\u8F93\u5165\u6846\u7684\u90E8\u5206\u6587\u672C\u7FFB\u8BD1\u529F\u80FD",inputTrailingTriggerKeyTitle:"\u9009\u62E9\u4E00\u4E2A\u8F93\u5165\u7ED3\u675F\u7684\u89E6\u53D1\u5B57\u7B26",inputTrailingTriggerKeyDescription:"\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey} \u5C06\u4F1A\u5F00\u59CB\u7FFB\u8BD1",inputTrailingTriggerKeyTimeout:"\u8F93\u5165\u7ED3\u675F\u8FDE\u51FB\u89E6\u53D1\u7684\u95F4\u9694\u65F6\u95F4",inputTrailingTriggerKeyTimeoutDescription:"\u8BBE\u7F6E\u8F93\u5165\u7ED3\u675F\u8FDE\u51FB\u89E6\u53D1\u7684\u95F4\u9694\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09",spaceKey:"<\u7A7A\u683C\u952E>",noneKey:"\u65E0\u9700\u524D\u7F00\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u6587\u672C\u6846",inputTranslationBlockUrlsTitle:"\u5207\u52FF\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",inputTranslationBlockUrlsDescription:"\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\uFF0C\u8F93\u5165\u6846\u589E\u5F3A\u5C06\u4E0D\u4F1A\u751F\u6548",clickToSeeQuickDemo:"\u70B9\u51FB\u5C55\u5F00 30 \u79D2\u5FEB\u901F\u6559\u5B66\u89C6\u9891",inputHelperInfo:"\u8BF4\u660E\uFF1A\u6211\u4EEC\u7279\u522B\u9488\u5BF9\u5728\u4E2D\u6587\u8F93\u5165\u6CD5\u4E0B\u90E8\u5206\u89E6\u53D1\u5B57\u7B26\u4F1A\u53D8\u6210\u4E2D\u6587\u6807\u70B9\u7B26\u53F7\u8FD9\u4EF6\u4E8B\u505A\u4E86\u4F18\u5316\uFF0C\u6BD4\u5982\u641C\u72D7\u8F93\u5165\u6CD5\u4E0B / \u4F1A\u53D8\u6210\u987F\u53F7 \u3001\uFF0C\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u652F\u6301\u6240\u6709\u89E6\u53D1\u7B26\u5BF9\u5E94\u7684\u4E2D\u6587\u7B26\u53F7\uFF0C\u4E5F\u5C31\u662F\u8BF4 // \u3001\u3001 \u90FD\u4F1A\u88AB\u8BC6\u522B\u4E3A\u89E6\u53D1\u5B57\u7B26\u3002<br/><br/>\u540C\u65F6\u6211\u4EEC\u4E5F\u652F\u6301\u8BED\u8A00\u4EE3\u7801\u7684\u4E2D\u6587\u522B\u540D\u4F5C\u4E3A\u547D\u4EE4\uFF0C\u6BD4\u5982 /\u65E5\u6587 \u4F60\u597D\u4E16\u754C \u4F1A\u88AB\u7FFB\u8BD1\u4E3A\u65E5\u6587\uFF0C<1>\u70B9\u6B64\u67E5\u770B\u6240\u6709\u652F\u6301\u7684\u8BED\u8A00\u4EE3\u7801</1>\u3002",reloadCurrentPage:"\u8BF7\u5148\u5237\u65B0\u5F53\u524D\u9875\u9762\uFF0C\u518D\u5F00\u59CB\u7FFB\u8BD1",noLocalFilePermissionForPDF:"\u6682\u65E0\u6743\u9650\u8BFB\u53D6\u672C\u5730\u6587\u4EF6\uFF0C\u8BF7\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\uFF0C\u7136\u540E\u5BFC\u5165\u672C\u5730\u6587\u4EF6",noPermissionForThisPage:"\u26A0\uFE0F \u6682\u65E0\u6743\u9650\u7FFB\u8BD1\u5F53\u524D\u9875\u9762",retryAllParagraphs:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",retryAllButton:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",errorTooltipTitle:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u539F\u56E0",errorModalTitle:"\u7FFB\u8BD1\u670D\u52A1\u6216\u7F51\u7EDC\u4F3C\u4E4E\u51FA\u4E86\u70B9\u95EE\u9898...",disableConfirm:"\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A\u8BBE\u7F6E",disableOnce:"\u672C\u6B21\u7981\u7528",disableGlobal:"\u6C38\u4E45\u7981\u7528",disableTint:"* \u4F60\u53EF\u4EE5\u5728 {option} \u4E2D\u91CD\u65B0\u542F\u7528\u3002",searchEnhancementNotes:"\u6211\u4EEC\u53D1\u73B0\uFF0C\u4E2D\u6587\u5173\u952E\u8BCD\u548C\u82F1\u6587\u5173\u952E\u8BCD\u7684\u65B0\u95FB\u7ED3\u679C\u6709\u975E\u5E38\u5927\u7684\u4E0D\u540C\uFF0C\u5728\u542F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A\u529F\u80FD\u540E\uFF0C\u6211\u4EEC\u4F1A\u5728\u652F\u6301\u7684\u7F51\u7AD9\uFF08\u8C37\u6B4C\u65B0\u95FB\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u5173\u952E\u8BCD\uFF09\uFF0C\u96EA\u7403\uFF0C\u4E1C\u65B9\u8D22\u5BCC\u7F51\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\uFF09\u81EA\u52A8\u7528\u82F1\u6587\u4E3A\u4F60\u641C\u7D22\u540C\u6837\u7684\u5173\u952E\u8BCD\u5E76\u5C55\u793A\u5728\u53F3\u4FA7\u3002\u5982\u679C\u4F60\u4E0D\u9700\u8981\u8BE5\u529F\u80FD\u7684\u8BDD\uFF0C\u53EF\u4EE5\u9009\u62E9\u7981\u7528\u5B83\u3002",option:"\u8BBE\u7F6E",saveSettings:"\u4FDD\u5B58\u8BBE\u7F6E",closeModal:"\u5173\u95ED\u7A97\u53E3",enableInputTranslationWithoutTriggerKeyTitle:"\u542F\u7528\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey}\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u4E3A{inputTargetLanguage}",enableInputTranslationWithoutTriggerKeyDescription:"\u5982\u9700\u6307\u5B9A\u76EE\u6807\u8BED\u8A00\uFF0C\u8BF7\u5728\u524D\u9762\u52A0\u4E0A\u8BED\u8A00\u4EE3\u7801\uFF0C\u5982\uFF1Aja \u4F60\u597D\u4E16\u754C",mouseHoverShortcutPlaceholder:"\u5982\uFF1AShift",deepLProName:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1 Pro \u4F1A\u5458 (\u63A8\u8350)",deepLProDescription:"\u5F53\u524D\u5957\u9910\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",deeplProDescriptionForNormal:"\u65E0\u9700\u4EFB\u4F55\u8BBE\u7F6E\uFF0C\u4F1A\u5458\u767B\u5F55\u540E\u5373\u53EF\u4F7F\u7528\uFF0C<1>\u70B9\u6B64\u5347\u7EA7\u4E3A\u4F1A\u5458</1>",deepLCustomDescription:"\u9700\u8981\u56FD\u5916\u4FE1\u7528\u5361\uFF0C\u5728 <1>DeepL</1> \u5B98\u65B9\u5F00\u901A\uFF0C\u70B9\u51FB\u67E5\u770B<2>\u6587\u6863</2>",deepLCustomName:"\u81EA\u5B9A\u4E49 Auth Key",chooseProviderLabel:"\u9009\u62E9\u4E00\u4E2A\u670D\u52A1\u63D0\u4F9B\u5546",openaiProName:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1 Pro \u4F1A\u5458 (\u63A8\u8350)",openaiProDescription:"\u5F53\u524D\u5957\u9910\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",openaiProDescriptionForNormal:"\u65E0\u9700\u4EFB\u4F55\u8BBE\u7F6E\uFF0C\u4F1A\u5458\u767B\u5F55\u540E\u5373\u53EF\u4F7F\u7528\uFF0C<1>\u70B9\u6B64\u5347\u7EA7\u4E3A\u4F1A\u5458</1>",openaiCustomDescription:"\u53EF\u5728 OpenAI, Azure OpenAI, \u6216\u5176\u4ED6\u7B2C\u4E09\u65B9\u670D\u52A1\u83B7\u53D6\uFF0C<1>\u70B9\u6B64\u67E5\u770B\u6587\u6863</1>",openaiCustomName:"\u81EA\u5B9A\u4E49 API Key",needLoginAction:"(\u5F00\u901A\u4F1A\u5458\u6216\u81EA\u5B9A\u4E49)",goLoginOrAction:"(\u5F00\u901A\u4F1A\u5458\u6216\u53BB\u8BBE\u7F6E)",yearly:"\u8FDE\u7EED\u5305\u5E74",quarterly:"\u8FDE\u7EED\u5305\u5B63",monthly:"\u8FDE\u7EED\u5305\u6708",yearlyForOnce:"\u4E00\u6B21\u6027\u5E74\u5EA6\u5957\u9910",monthlyForOnce:"\u4E00\u6B21\u6027\u6708\u5EA6\u5957\u9910",daily:"\u8FDE\u7EED\u5305\u65E5",year:"\u8FDE\u7EED\u5305\u5E74",quarter:"\u8FDE\u7EED\u5305\u5B63",month:"\u8FDE\u7EED\u5305\u6708",day:"\u8FDE\u7EED\u5305\u65E5",onetime_7day:"7 \u5929\u4F53\u9A8C\u5305",currentPlanDescriptionForFree:"\u5F53\u524D\u5957\u9910\uFF1A\u514D\u8D39",currentPlanDescriptionForContinuous:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u81EA\u52A8\u7EED\u8D39",currentPlanDescriptionForAutoRenewCaceling:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C\u5230\u671F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EED\u671F",currentYearlyPlanDescriptionForAutoRenewCacelingWithRealPaiedUser:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C\u5230\u671F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EED\u671F\u3002<br/><1>\u70B9\u6B64\u7BA1\u7406\u7EED\u8D39\u65B9\u6848</1>",currentYearlyPlanDescriptionForAutoRenewCacelingWithAdmin:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C\u5230\u671F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EED\u671F\u3002<br/><1>\u70B9\u6B64\u542F\u7528\u8FDE\u7EED\u5305\u5E74</1>",currentPlanDescriptionForOneTime:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C<1>\u70B9\u6B64\u5347\u7EA7\u4E3A\u5E74\u8D39</1>\u6216<2>\u6708\u8D39</2>\u4F1A\u5458",upgradePlan:"\u70B9\u6B64\u5347\u7EA7\u4E3A Pro \u4F1A\u5458",upgradeToPro:"\u5347\u7EA7\u4E3A Pro \u4F1A\u5458","popup.openPro":"\u5347\u7EA7\u4E3A Pro \u4F1A\u5458\u540E\u53EF\u4EE5\u7545\u4EAB DeepL \u548C OpenAI \u7FFB\u8BD1\uFF0C\u70B9\u6B64\u5347\u7EA7","popup.openProForPro":"\u60A8\u662F Pro \u4F1A\u5458\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528 DeepL \u548C OpenAI \u7FFB\u8BD1",currentAccount:"\u5F53\u524D\u8D26\u6237",enableAutoSyncUserSettings:"\u542F\u7528\u591A\u8BBE\u5907\u81EA\u52A8\u4E91\u540C\u6B65"};var Sp={nologin:"\u672A\u767B\u9304",login:"\u767B\u9304",manageAccount:"\u7BA1\u7406\u8CEC\u6236",logout:"\u9000\u51FA",curentPlan:"\u7576\u524D\u5957\u9910",endAt:"\u5230\u671F",endAuto:"\u81EA\u52D5\u7E8C\u671F",lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u5143\u6578\u91CF","translate-pdf":"\u9EDE\u9078\u7FFB\u8B6F PDF","noSupportTranslate-pdf":"\u8173\u672C\u4E0D\u652F\u63F4\uFF0C\u8ACB\u4F7F\u7528\u64F4\u5145\u5957\u4EF6","translate-firefox-local-pdf":"\u9EDE\u64CA\u53BB\u5C0E\u5165PDF",enableLineBreak:"\u958B\u555F\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D0A\u52A9\u958B\u767C\u8005 (\u6708\u4ED8\u6216\u50C5\u8D0A\u52A9\u4E00\u6B21\u5747\u53EF)",help:"\u8AAA\u660E",browserShortcutsNoteForFirefox:"Firefox \u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u9644\u52A0\u5143\u4EF6\u7BA1\u7406\u9801\u9762 \u300Cabout:addons\u300D\uFF0C\u7136\u5F8C\u9EDE\u9078\u300C\u8A2D\u5B9A\u5716\u793A\u300D\uFF0C\u518D\u9EDE\u9078\u300C\u7BA1\u7406\u64F4\u5145\u5957\u4EF6\u5FEB\u901F\u9375\u300D\u5373\u53EF\u8A2D\u5B9A",browserShortcutsNoteForChrome:"Chromium \u6838\u5FC3\u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u64F4\u5145\u529F\u80FD\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u300C\u9375\u76E4\u5FEB\u901F\u9375\u300D\u9801\u9762(chrome://extensions/shortcuts)\u8A2D\u5B9A\uFF0C\u9EDE\u9078\u4E0B\u65B9\u6309\u9215\u524D\u5F80\u5FEB\u901F\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u901F\u9375\u683C\u5F0F\u70BA\uFF1A (\u6CA1\u6709\u505A\u81EA\u52A8\u8BC6\u522B\uFF0C\u8BF7\u76F4\u63A5\u8F93\u5165)\uFF1A",enableLineBreakDescription:"\u555F\u7528\u5F8C\uFF0C\u5C07\u6703\u5728\u9577\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u5B57\u5143\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u540C\u6642\u652F\u6301 PDF \u7FFB\u8B6F\uFF0C\u96D9\u8A9E Epub \u96FB\u5B50\u66F8\u88FD\u4F5C\uFF0C\u652F\u6301 Deepl/Google/\u6709\u9053/\u9A30\u8A0A\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u514D\u8CBB\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8B6F\u4E26\u96B1\u85CF\u539F\u6587/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.openOptionsPage":"\u958B\u555F\u8A2D\u5B9A\u9801\u9762","browser.toggleTranslationMask":"\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u6A5F PDF \u6A94\u6848","browser.openEbookViewer":"\u95B1\u8B80\u672C\u6A5F\u96FB\u5B50\u66F8","browser.openEbookBuilder":"\u88FD\u4F5C\u96D9\u8A9E EPUB \u96FB\u5B50\u66F8","browser.translateLocalHtmlFile":"\u7FFB\u8B6F HTML/txt \u6A94\u6848","browser.donateContext":"\u4E86\u89E3\u8D0A\u52A9\u798F\u5229","browser.translateLocalSubtitleFile":"\u7FFB\u8B6F\u5B57\u5E55\u6A94\u6848",confirmResetConfig:"\u4F60\u78BA\u5B9A\u8981\u91CD\u8A2D\u8A2D\u5B9A\u55CE\uFF1F",translationLineBreakSettingTitle:"\u8B6F\u6587\u63DB\u884C\u8A2D\u5B9A",smartLineBreak:"\u667A\u6167\u63DB\u884C",alwaysLineBreak:"\u7E3D\u662F\u63DB\u884C",isShowContextMenu:"\u5C07\u7DB2\u9801\u7FFB\u8B6F\u529F\u80FD\u52A0\u5165\u53F3\u9375\u9078\u55AE",toggleBeta:"\u958B\u555F Beta \u6E2C\u8A66\u529F\u80FD",betaDescription:"\u555F\u7528\u4ECD\u5728\u5BE6\u9A57\u7684\u529F\u80FD\u4EE5\u53CA\u6E2C\u8A66\u4E2D\u7684\u7FFB\u8B6F\u670D\u52D9\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7D44</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u7E3D\u662F\u63DB\u884C\u9069\u7528\u65BC\u8F03\u5C11\u5167\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F4A\u3002(\u5728\u5167\u5BB9\u8F03\u591A\u7684\u9577\u6BB5\u843D(\u8D85\u904E {count} \u500B\u5B57\u5143) \u4F7F\u7528\u667A\u6167\u63DB\u884C\u6703\u66F4\u7701\u7A7A\u9593)",tempTranslateDomainTitle:"\u81E8\u6642\u958B\u555F\u7DB2\u7AD9\u7FFB\u8B6F\u7684\u6642\u9577",tempTranslateDomainDescription:"\u7576\u624B\u52D5\u7FFB\u8B6F\u67D0\u500B\u7DB2\u9801\u7684\u6642\u5019\uFF0C\u81E8\u6642\u958B\u555F\u8A72\u7DB2\u7AD9\u70BA\u81EA\u52D5\u7FFB\u8B6F",xMinutes:"{count} \u5206\u9418",disabled:"\u505C\u7528",changelog:"\u66F4\u65B0\u8A18\u9304",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u5247\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"\u591A\u6307\u540C\u6642\u89F8\u78B0\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801(\u50C5\u8B6F\u6587)/\u986F\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u70BA\u7DB2\u57DF\u540D\u7A31\uFF0C\u540C\u6642\u652F\u63F4\u842C\u7528\u5B57\u5143\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u5B9A",clickToExpandConfig:"\u5C55\u958B\u76EE\u524D\u8A2D\u5B9A",import:"\u5F9E\u6A94\u6848\u532F\u5165",export:"\u532F\u51FA\u70BA\u6A94\u6848",toggleDebug:"\u5728\u4E3B\u63A7\u53F0\u986F\u793A\u5075\u932F\u8A18\u9304","fingers.0":"\u95DC\u9589","fingers.2":"\u96D9\u6307\u89F8\u6478","fingers.3":"\u4E09\u6307\u89F8\u6478","fingers.4":"\u56DB\u6307\u89F8\u6478","fingers.5":"\u4E94\u6307\u89F8\u6478",mouseHoldKey:"+ {key} \u7FFB\u8B6F\u8A72\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8B6F\u8A72\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u7FA9\u5FEB\u6377\u9375(\u6253\u958B\u8A2D\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8B6F\u8A72\u6BB5",mouseHoverHoldKey:"\u9F20\u6A19\u6ED1\u904E\u540C\u6642\u6309\u4E0B X \u9375\u7FFB\u8B6F\u6BB5\u843D","mouse-translate":"\u9F20\u6A19\u6ED1\u904E",document:"\u8AAA\u660E\u6587\u4EF6",resetSuccess:"\u91CD\u8A2D\u6240\u6709\u8A2D\u5B9A\u6210\u529F",resetThisSuccess:"\u91CD\u8A2D\u6210\u529F",saved:"\u5132\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u532F\u5165\u8A2D\u5B9A",goAdvancedSettings:"\u524D\u5F80\u9032\u968E\u8A2D\u5B9A\u9801\u9762",goAdvancedInterfaceSettings:"\u524D\u5F80\u81EA\u8A02\u8A2D\u5B9A\u9801\u9762",advanced:"\u9032\u968E\u8A2D\u5B9A",advancedDescription:"\u6B63\u5E38\u60C5\u6CC1\u7121\u9700\u8A2D\u5B9A\uFF0C\u4FDD\u6301\u9810\u8A2D\u5373\u53EF\u3002\u50C5\u91DD\u5C0D\u66F4\u5C08\u696D\u7684\u4F7F\u7528\u8005\uFF0C\u63D0\u4F9B\u66F4\u500B\u4EBA\u5316\u7684\u8A2D\u5B9A\u9805\u76EE\u3002",developer:"\u958B\u767C\u8005\u8A2D\u5B9A",donateCafe:"\u50F9\u683C","translate to the bottom of the page":"\u9032\u5165\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u56DE\u5831",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u555F\u7528\u5F8C\uFF0C\u9032\u5165\u7DB2\u9801\u5C07\u7ACB\u5373\u7FFB\u8B6F\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\u3002\u95DC\u9589\u5247\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u555F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6240\u6709\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\u3002\u95DC\u9589\u5247\u4F7F\u7528\u9810\u8A2D\u7684\u667A\u6167\u8FA8\u8B58\uFF0C\u50C5\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\u3002(\u4E0D\u63A8\u85A6\u958B\u555F)","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8B6F\u9801\u9762\u524D\u591A\u5C11\u500B\u5B57\u5143\uFF0C\u800C\u7121\u9700\u7B49\u5F85\u6372\u52D5\u81F3\u53EF\u898B\u5340\u57DF","interface language":"\u4ECB\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u901F\u9375",modify:"\u8B8A\u66F4\u5FEB\u901F\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u9996\u9801",more:"\u66F4\u591A",moreOptions:"\u5C55\u958B\u66F4\u591A\u81EA\u8A02\u9078\u9805",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u6240\u6709\u5340\u57DF",changeToTranslateTheMainPage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF",changeToOnlyTranslationMode:"\u5207\u63DB\u70BA\u50C5\u986F\u793A\u8B6F\u6587",changeToDualTranslationMode:"\u5207\u63DB\u70BA\u96D9\u8A9E\u7FFB\u8B6F",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u6167\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u6A5F\u898F\u5247\u5DF2\u70BA\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u5B98\u65B9\u898F\u5247",localVersionIsTooOld:"\u672C\u6A5F\u5957\u4EF6\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u5957\u4EF6\u81F3 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5617\u8A66\u540C\u6B65",badUserscriptBrowser:"\u76EE\u524D\u700F\u89BD\u5668\u7121\u6CD5\u6B63\u78BA\u5BE6\u73FE\u6CB9\u7334\u5957\u4EF6\u7684\u4ECB\u9762\uFF0C\u8ACB\u4F7F\u7528\u5176\u4ED6<1>\u652F\u63F4\u6CB9\u7334\u5957\u4EF6</1>\u7684\u700F\u89BD\u5668\u5982(Firefox Nightly \u7248\u672C)",foundNewVersion:"\u6709\u65B0\u7248\u672C\u53EF\u7528",theLocalExtensionIsUpToUpdate:"\u76EE\u524D\u5957\u4EF6\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u91CD\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u76EE\u524D\u898F\u5247\u7248\u672C",calculating:"\u6B63\u5728\u8A08\u7B97",unknownError:"\u672A\u77E5\u7684\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u53D6\u5F97\u9060\u7AEF\u898F\u5247",enableAlphaSuccess:"\u5DF2\u555F\u7528 Alpha \u529F\u80FD",disableAlphaSuccess:"\u5DF2\u505C\u7528 Alpha \u529F\u80FD",cacheSize:"\u5FEB\u53D6\u5927\u5C0F\uFF1A",cleaning:"\u6B63\u5728\u6E05\u7406",cleanCache:"\u6E05\u9664\u5FEB\u53D6",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"(\u524D\u5F80\u8A2D\u5B9A)",goSettings:"\u524D\u5F80\u8A2D\u5B9A",needActionForOptions:"(\u9700\u8A2D\u5B9A)",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u7576\u524D\u7DB2\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F {language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",alwaysTranslateSomeSiteOrWildSite:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u7AD9",alwaysTranslateSomePage:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u9875",add:"\u65B0\u589E",default:"\u9810\u8A2D",forThisLanguage:"\u91DD\u5C0D\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165 URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u5B83\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u5B9A\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4F60\u60F3\u7528\u7684\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u6B63\u5728\u7FFB\u8B6F",Error:"\u932F\u8AA4",allowCacheTranslations:"\u555F\u7528\u672C\u6A5F\u7FFB\u8B6F\u5FEB\u53D6\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8981\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u7BC4\u4F8B",interface:"\u4ECB\u9762\u8A2D\u5B9A",import_export:"\u532F\u5165/\u532F\u51FA",import_export_title:"\u532F\u5165/\u532F\u51FA\u8A2D\u5B9A",syncToGoogleDrive:"\u7ACB\u5373\u8207 Google Drive \u540C\u6B65",syncToAccount:"\u540C\u6B65\u5230\u8CEC\u6236",syncToAccountButton:"\u7ACB\u5373\u4E0E\u4E91\u7AEF\u540C\u6B65",syncToAccountDescription:"\u4E0A\u50B3\u5230\u5DF2\u767B\u9304\u8CEC\u6236\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u8A2D\u5099\u4E4B\u9593\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u5F8C\u4FEE\u6539\u6642\u9593\u70BA\u6E96\u3002",successSyncConfigInAccount:"\u6210\u529F\u8207\u8CEC\u6236\u4FDD\u6301\u540C\u6B65",successSyncConfigToAccount:"\u6210\u529F\u540C\u6B65\u5230\u8CEC\u6236",syncConfigNoUpdate:"\u5DF2\u7D93\u662F\u6700\u65B0\u7684\u4E86",previewAllThemes:"\u9810\u89BD\u5168\u90E8\u6A23\u5F0F","translationTheme.none":"\u7121","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u5E95\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u6846\u7DDA","translationTheme.solidBorder":"\u5BE6\u7DDA\u6846\u7DDA","translationTheme.underline":"\u76F4\u7DDA\u5E95\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C\uFF08\u5B78\u7FD2\u6A21\u5F0F\uFF09","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u9694\u7DDA","translationTheme.highlight":"\u9192\u76EE\u63D0\u793A","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.marker2":"\u99AC\u514B\u7B462","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDashed":"\u7CFB\u7D71\u5167\u5EFA\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDotted":"\u7CFB\u7D71\u5167\u5EFA\u9EDE\u72C0\u5E95\u7DDA","translationTheme.nativeUnderline":"\u7CFB\u7D71\u5167\u5EFA\u76F4\u7DDA\u5E95\u7DDA","translationTheme.wavy":"\u6CE2\u5F62\u66F2\u7DDA","translationServices.custom":"\u81EA\u5B9A\u7FA9API","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.tenAlpha":"\u9A30\u8A0A\u7FFB\u8B6F\u541B(Alpha)","translationServices.google":"Google \u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeeplX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8B6F","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"Azure \u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.cai":"\u5F69\u96F2\u5C0F\u8B6F (Alpha)","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.you":"\u6709\u9053\u7FFB\u8B6F (Alpha)","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.niu":"\u5C0F\u725B\u7FFB\u8B6F","translationServices.papago":"Papago \u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u7576\u9801\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u5C07\u8DF3\u904E\u7FFB\u8B6F",enableUserscriptPagePopup:"\u5728\u9801\u9762\u4E0A\u986F\u793A\u61F8\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u95DC\u9589\u61F8\u6D6E\u7403\u5F8C\uFF0C\u53EF\u4EE5\u7528\u5FEB\u901F\u9375/{touch}\u518D\u6B21\u986F\u793A\u3002\u70BA\u9632\u6B62\u4E0D\u614E\u95DC\u9589\u8A72\u9078\u9805\u5F8C\u627E\u4E0D\u5230\u61F8\u6D6E\u7403\uFF0C\u5EFA\u8B70\u5C07\u672C\u8A2D\u5B9A\u9801\u9762\u52A0\u5165\u81F3\u6211\u7684\u6700\u611B","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u91D1\u9470\u5F8C\u624D\u53EF\u4F7F\u7528\uFF0C\u8A73\u7D30\u8CC7\u8A0A\u8ACB\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u91D1\u9470\u7533\u8ACB\u548C\u8A2D\u5B9A\u6559\u5B78\u300B",useAboveStyleForTheseSites:"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u7E3D\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8B6F\u6587\u6A23\u5F0F",currentUrl:"\u76EE\u524D\u7DB2\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C",syncToCloud:"\u540C\u6B65\u81F3\u96F2\u7AEF",syncToCloudDescription:"\u4E0A\u50B3\u81F3\u96F2\u7AEF\u5F8C\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u700F\u89BD\u5668/\u6CB9\u7334\u8173\u672C\u4E4B\u9593\u540C\u6B65\u8A2D\u5B9A\uFF0C\u4EE5\u6700\u5F8C\u8B8A\u66F4\u6642\u9593\u70BA\u6E96\u3002",authFail:"\u6388\u6B0A\u5931\u6557",syncTitle:"\u624B\u52D5\u5099\u4EFD\u7BA1\u7406",import_hint:"\u532F\u5165",upload:"\u4E0A\u50B3",revokeAuth:"\u64A4\u92B7\u6388\u6B0A",uploadFail:"\u4E0A\u50B3\u5931\u6557",download:"\u4E0B\u8F09",importSuccess:"\u532F\u5165\u6210\u529F",importFail:"\u532F\u5165\u5931\u6557",deleteFail:"\u522A\u9664\u5931\u6557",backupToCloud:"\u624B\u52D5\u7BA1\u7406\u5099\u4EFD\u6A94\u6848",create_new_backup:"\u65B0\u589E\u5099\u4EFD\u7BC0\u9EDE",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5099\u4EFD{count}\u500B\u4E0D\u540C\u7684\u7BC0\u9EDE\uFF0C\u8ACB\u522A\u9664\u4E0D\u9700\u8981\u7684\u7BC0\u9EDE",backupToCloudDescription:"\u624B\u52D5\u4E0A\u50B3\u6216\u9084\u539F\u5099\u4EFD\u6A94\u6848\uFF0C\u6700\u591A\u5141\u8A31 3 \u500B\u4E0D\u540C\u7684\u5099\u4EFD",successSyncConfig:"\u6210\u529F\u8207\u96F2\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u6557",updatedAt:"\u66F4\u65B0\u65BC {date}",lastSyncedAt:"\u4E0A\u6B21\u6AA2\u67E5\u65BC {date}",downloadFail:"\u4E0B\u8F09\u5931\u6557",clickToDownload:"\u9EDE\u9078\u4E0B\u8F09",aboutLabel:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831","browser.openAboutPage":"\u95DC\u65BC/\u554F\u984C\u56DE\u5831",aboutLabelWithoutSponsor:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831",aboutIntro:"\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F \u4F60\u53EF\u4EE5\u9078\u64C7\u958B\u901A <6>Pro\u6703\u54E1</6> \u4F86\u4F7F\u7528\u958B\u7BB1\u5373\u7528\u7684 DeepL \u548C OpenAI \u7FFB\u8B6F\u3002<br/><br/>\u4F60\u53EF\u4EE5\u95DC\u6CE8\u6211\u4EEC\u7684<3>Twitter</3>\uFF0C<4>Telegram \u983B\u9053</4>\u4EE5\u53CA\u4E0B\u65B9\u7684<5>\u90F5\u4EF6\u8A02\u95B1</5>\u8FFD\u8E64\u66F4\u65B0\u3002<br/> <7>Pro \u6703\u54E1</7> \u53EF\u4EE5\u901A\u904E\u5FEB\u901F\u5BA2\u670D\u90F5\u7BB1 <8>support@immersivetranslate.com</8> \u548C\u6211\u5011\u53D6\u5F97\u806F\u7E6B\u3002",aboutIntroWithoutSponsor:"\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F ",projectHomepage:"\u5C08\u6848\u9996\u9801",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u7D44\u53C3\u8207\u529F\u80FD\u8A0E\u8AD6",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u773E\u865F",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",qqCommunities:"QQ \u4EA4\u6D41\u983B\u9053",joinTelegramChannel:"\u95DC\u6CE8 Telegram \u983B\u9053\u77AD\u89E3\u66F4\u65B0\u8CC7\u8A0A",feedbackAndJoin:"\u554F\u984C\u56DE\u5831/\u52A0\u5165\u7FA4\u7D44",autoSync:"\u81EA\u52D5\u5B9A\u6642\u540C\u6B65",loadingThemeTitle:"Loading \u6A23\u5F0F",loadingThemeDescription:"\u8A2D\u5B9A\u7B49\u5F85\u8B6F\u6587\u8F09\u5165\u6642\u7684\u6A23\u5F0F","loadingTheme.spinner":"\u8F49\u5708\u52D5\u756B","loadingTheme.text":"\u975C\u614B\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u986F\u793A",developerDescription:"\u53EF\u4EE5\u9EDE\u9078<1>\u6B64\u8655</1>\u6AA2\u8996\u9032\u968E\u81EA\u8A02\u529F\u80FD\u76F8\u95DC\u7684\u8AAA\u660E\u6587\u4EF6","edit border color":"\u8B8A\u66F4\u908A\u6846\u8272\u5F69",successSyncButNoChange:"\u76EE\u524D\u8A2D\u5B9A\u8207\u96F2\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u8A02\u8272\u5F69\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u908A\u6846\u8272\u5F69","customThemeLabel.borderRadius":"\u908A\u6846\u5713\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u8272\u5F69","customThemeLabel.backgroundColor":"\u80CC\u666F\u8272\u5F69","customThemeLabel.zoom":"\u5B57\u578B\u7E2E\u653E\u6BD4\u4F8B (%)","customThemeLabel.opacity":"\u6587\u5B57\u4E0D\u900F\u660E\u5EA6 (%)",resetToDefaultColor:"\u9084\u539F\u70BA\u9810\u8A2D\u8272\u5F69",resetToDefaultSettings:"\u9084\u539F\u70BA\u9810\u8A2D\u8A2D\u5B9A",isTranslateTitle:"\u555F\u7528\u7DB2\u9801\u6A19\u984C\u7FFB\u8B6F",enableSubtitle:"\u958B\u555F\u5B57\u5E55\u7FFB\u8B6F",enableSubtitleDescription:"\u91DD\u5C0D youtube \u7B49\u7DB2\u7AD9\u7684\u5B57\u5E55\u5340\u57DF\u958B\u555F\u7FFB\u8B6F",isTranslateTitleDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6A19\u984C\u6703\u88AB\u7FFB\u8B6F",enableSearchEnhancement:"\u958B\u555F\u641C\u7D22\u589E\u5F37",enableSearchEnhancementDescription:"\u4E2D\u6587\u641C\u7D22\u8C37\u6B4C\u6703\u5728\u53F3\u908A\u51FA\u73FE\u82F1\u6587\u7248\u8C37\u6B4C\u65B0\u805E",verifyService:"\u9EDE\u6B64\u6E2C\u8A66\u670D\u52D9",verified:"\u9A57\u8B49\u6210\u529F","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8B6F\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u9418\u6700\u5927\u8981\u6C42\u6578","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8981\u6C42\u6578","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8981\u6C42\u7684\u6700\u5927\u6587\u5B57\u9577\u5EA6","field.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u8981\u6C42\u6700\u5927\u6BB5\u843D\u6578","field.apiUrl":"\u81EA\u8A02 API \u4F4D\u5740","field.placeholderDelimiters":"\u4FDD\u7559\u7684\u4F54\u4F4D\u7B26","description.custom":"<a href='https://immersivetranslate.com/docs/services/custom/' target='_blank'>\u81EA\u5B9A\u7FA9\u63A5\u53E3\u63A5\u5165</a> \u9700\u8981\u53C3\u8003\u6587\u6A94","description.limitPerMinute":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u5206\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u79D2\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.generalLimitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002","description.prompt":"\u4EE5\u4F7F\u7528\u8005\u8EAB\u4EFD\u50B3\u9001\u7D66 OpenAI \u7684\u5C0D\u8A71\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u5B57\u5167\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8A9E\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6A19\u8A9E\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u85A6\uFF09, \u5C07\u6703\u5728\u55AE\u7368\u4F5C\u70BA\u4E00\u6BB5\u767C\u9001\u7D66 OpenAI","description.maxTextLengthPerRequest":"\u9810\u8A2D\u6703\u5408\u4F75\u591A\u500B\u6BB5\u843D\uFF0C\u4EE5\u6E1B\u5C11\u8ACB\u8981\u6C42\u6578\uFF0C\u4F46\u662F\u5982\u679C\u6BB5\u843D\u7E3D\u9577\u5EA6\u904E\u9577\uFF0C\u4E5F\u53EF\u80FD\u6703\u5C0E\u81F4 API \u7684\u56DE\u61C9\u6642\u9593\u589E\u52A0\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5617\u8A66\u8ABF\u6574\u8A72\u9078\u9805\u4F86\u63D0\u5347\u901F\u5EA6","description.systemPrompt":"\u4EE5\u7CFB\u7D71\u50B3\u9001\u767C\u9001\u7D66 OpenAI \u7684\u5C0D\u8A71\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u5B57\u5167\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8A9E\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6A19\u8A9E\u8A00","field.domain":"\u9886\u57DF","description.domain":"\u9ED8\u8A8D\u70BA\uFF1Ageneral\u3002\u50C5\u5728\u6709\u9053API\u63A7\u5236\u53F0\u958B\u901A\u9818\u57DF\u5316\u7FFB\u8B6F\u7684\u60C5\u6CC1\u4E0B\u53EF\u8A2D\u7F6E\uFF0C\u652F\u6301\u9818\u57DF\u898B<1>\u9019\u88E1</1>","field.scene":"\u5834\u666F","description.scene":"\u9ED8\u8A8D\u70BA\uFF1Ageneral\u3002\u50C5\u5728\u963F\u91CC\u96F2API\u63A7\u5236\u53F0\u958B\u901A\u6A5F\u5668\u7FFB\u8B6F\u5C08\u696D\u7248\u7684\u60C5\u6CC1\u4E0B\u53EF\u8A2D\u7F6E\uFF0C\u652F\u6301\u5834\u666F\u898B<1>\u9019\u88E1</1>","field.vocabId":"\u7528\u6237\u8BCD\u5178 ID","description.vocabId":"\u6307\u5B9A\u7684\u8BCD\u5178 out_id\uFF0C\u76EE\u524D\u652F\u6301\u82F1\u8BD1\u4E2D","description.model":"OpenAI \u7684\u6A21\u578B\uFF0C\u53EF\u4EE5\u70BA gpt-3.5-turbo, gpt-4 \u7B49","description.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u50B3\u9001\u7D66\u7FFB\u8B6F\u670D\u52D9\u7684\u6BB5\u843D\u6578\u91CF\uFF0C\u5982\u679C\u6BB5\u843D\u6578\u91CF\u904E\u591A\uFF0C\u53EF\u80FD\u6703\u5C0E\u81F4\u56DE\u61C9\u901F\u5EA6\u8B8A\u6162","description.apiUrl":"\u8ACB\u52A0\u5165\u5177\u9AD4\u5305\u542B\u8DEF\u5F91\u7684\u7DB2\u5740",enabledExtension:"\u555F\u7528\u5957\u4EF6",clickToDisableExtension:"\u9EDE\u9078\u505C\u7528\u5957\u4EF6",clickToEnableExtension:"\u9EDE\u9078\u555F\u7528\u5957\u4EF6",hasBeenDisabled:"\u5DF2\u505C\u7528","show password":"\u986F\u793A\u5BC6\u78BC",customContent:"\u8F38\u5165\u81EA\u5B9A\u7FA9\u6A21\u578B",inputOptions:"\u8F38\u5165\u6846\u589E\u5F37",mouseHoverOptions:"\u9F20\u6A19\u6ED1\u904E",enableInputTranslation:"\u662F\u5426\u555F\u7528\u8F38\u5165\u6846\u589E\u5F37",enableInputTranslationDescription:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165 {startingKey}{startingKey} \u4F60\u597D\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165\uFF1A\u4F60\u597D\u4E16\u754C\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguage:"\u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguageDescription:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00\uFF0C\u4E5F\u5C31\u662F {startingKey}{startingKey} \u4F5C\u4E3A\u89E6\u53D1\u8BCD\u7684\u9ED8\u8BA4\u8BED\u8A00",inputTargetLanguageDescriptionForNoneKey:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputStartingTriggerKeyTitle:"\u8BBE\u7F6E\u8F93\u5165\u6846\u90E8\u5206\u7FFB\u8BD1\u7684\u5206\u5272\u5B57\u7B26",inputStartingTriggerKeyDescription:"\u5F53\u4F60\u4E0D\u9700\u8981\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u7684\u65F6\u5019\uFF0C\u5206\u5272\u7B26\u5141\u8BB8\u4F60\u53EA\u7FFB\u8BD1 {startingKey}{startingKey} \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u8BED\u8A00\u4EE3\u7801\uFF0C\u6BD4\u5982\uFF1A{startingKey}ja \u8868\u793A\u53EA\u7FFB\u8BD1 {startingKey}ja \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206",inputStartingTriggerKeyDescriptionForNoneKey:"\u5F53\u524D\u8BBE\u7F6E\u4E3A\u65E0\u9700\u524D\u7F00\uFF0C\u6682\u65E0\u6CD5\u4F7F\u7528\u8F93\u5165\u6846\u7684\u90E8\u5206\u6587\u672C\u7FFB\u8BD1\u529F\u80FD",inputTrailingTriggerKeyTitle:"\u9009\u62E9\u4E00\u4E2A\u8F93\u5165\u7ED3\u675F\u7684\u89E6\u53D1\u5B57\u7B26",inputTrailingTriggerKeyDescription:"\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey} \u5C06\u4F1A\u5F00\u59CB\u7FFB\u8BD1",inputTrailingTriggerKeyTimeout:"\u8F38\u5165\u7D50\u675F\u9023\u64CA\u89F8\u767C\u7684\u9593\u9694\u6642\u9593",inputTrailingTriggerKeyTimeoutDescription:"\u8A2D\u7F6E\u8F38\u5165\u7D50\u675F\u9023\u64CA\u89F8\u767C\u7684\u9593\u9694\u6642\u9593\uFF08\u6BEB\u79D2\uFF09",spaceKey:"<\u7A7A\u683C\u9375>",noneKey:"\u65E0\u9700\u524D\u7F00\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u6587\u672C\u6846",inputTranslationBlockUrlsTitle:"\u5207\u52FF\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",inputTranslationBlockUrlsDescription:"\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\uFF0C\u8F93\u5165\u6846\u589E\u5F3A\u5C06\u4E0D\u4F1A\u751F\u6548",clickToSeeQuickDemo:"\u70B9\u51FB\u5C55\u5F00 30 \u79D2\u5FEB\u901F\u6559\u5B66\u89C6\u9891",inputHelperInfo:"\u8AAA\u660E\uFF1A\u6211\u5011\u7279\u5225\u91DD\u5C0D\u5728\u4E2D\u6587\u8F38\u5165\u6CD5\u4E0B\u90E8\u5206\u89F8\u767C\u5B57\u7B26\u6703\u8B8A\u6210\u4E2D\u6587\u6A19\u9EDE\u7B26\u865F\u9019\u4EF6\u4E8B\u505A\u4E86\u512A\u5316\uFF0C\u6BD4\u5982\u641C\u72D7\u8F38\u5165\u6CD5\u4E0B / \u6703\u8B8A\u6210\u9813\u865F \u3001\uFF0C\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u652F\u6301\u6240\u6709\u89F8\u767C\u7B26\u5C0D\u61C9\u7684\u4E2D\u6587\u7B26\u865F\uFF0C\u4E5F\u5C31\u662F\u8AAA // \u3001\u3001 \u90FD\u6703\u88AB\u8B58\u5225\u70BA\u89F8\u767C\u5B57\u7B26\u3002<br/><br/>\u540C\u6642\u6211\u5011\u4E5F\u652F\u6301\u8A9E\u8A00\u4EE3\u78BC\u7684\u4E2D\u6587\u5225\u540D\u4F5C\u70BA\u547D\u4EE4\uFF0C\u6BD4\u5982 /\u65E5\u6587 \u4F60\u597D\u4E16\u754C \u6703\u88AB\u7FFB\u8B6F\u70BA\u65E5\u6587\uFF0C<1>\u9EDE\u6B64\u67E5\u770B\u6240\u6709\u652F\u63F4\u7684\u8A9E\u8A00\u4EE3\u78BC</1>\u3002",reloadCurrentPage:"\u8BF7\u5148\u5237\u65B0\u5F53\u524D\u9875\u9762\uFF0C\u518D\u5F00\u59CB\u7FFB\u8BD1",noLocalFilePermissionForPDF:"\u6682\u65E0\u6743\u9650\u8BFB\u53D6\u672C\u5730\u6587\u4EF6\uFF0C\u8BF7\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\uFF0C\u7136\u540E\u5BFC\u5165\u672C\u5730\u6587\u4EF6",noPermissionForThisPage:"\u26A0\uFE0F \u6682\u65E0\u6743\u9650\u7FFB\u8BD1\u5F53\u524D\u9875\u9762",retryAllParagraphs:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",retryAllButton:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",errorTooltipTitle:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u539F\u56E0",errorModalTitle:"\u7FFB\u8BD1\u670D\u52A1\u6216\u7F51\u7EDC\u4F3C\u4E4E\u51FA\u4E86\u70B9\u95EE\u9898...",disableConfirm:"\u7981\u7528\u78BA\u8A8D",disableOnce:"\u7981\u7528\u4E00\u6B21",disableGlobal:"\u5168\u5C40\u7981\u7528",disableTint:"* \u60A8\u53EF\u4EE5\u5728 {option} \u4E2D\u91CD\u65B0\u555F\u7528\u3002",searchEnhancementNotes:"\u6211\u5011\u767C\u73FE\uFF0C\u4E2D\u6587\u95DC\u9375\u8A5E\u548C\u82F1\u6587\u95DC\u9375\u8A5E\u7684\u65B0\u805E\u7D50\u679C\u6709\u975E\u5E38\u5927\u7684\u4E0D\u540C\uFF0C\u5728\u555F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u96D9\u8A9E\u4FE1\u606F\u589E\u5F37\u529F\u80FD\u5F8C\uFF0C\u6211\u5011\u6703\u5728\u652F\u6301\u7684\u7DB2\u7AD9\uFF08\u8C37\u6B4C\u65B0\u805E\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u95DC\u9375\u8A5E\uFF09\uFF0C\u96EA\u7403\uFF0C\u6771\u65B9\u8CA1\u5BCC\u7DB2\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\uFF09\u81EA\u52D5\u7528\u82F1\u6587\u70BA\u4F60\u641C\u7D22\u540C\u6A23\u7684\u95DC\u9375\u8A5E\u4E26\u5C55\u793A\u5728\u53F3\u5074\u3002\u5982\u679C\u4F60\u4E0D\u9700\u8981\u8A72\u529F\u80FD\u7684\u8A71\uFF0C\u53EF\u4EE5\u9078\u64C7\u7981\u7528\u5B83\u3002",option:"\u9078\u9805",saveSettings:"\u4FDD\u5B58\u8BBE\u7F6E",closeModal:"\u95DC\u9589\u8996\u7A97",enableInputTranslationWithoutTriggerKeyTitle:"\u542F\u7528\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey}\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u4E3A{inputTargetLanguage}",enableInputTranslationWithoutTriggerKeyDescription:"\u5982\u9700\u6307\u5B9A\u76EE\u6807\u8BED\u8A00\uFF0C\u8BF7\u5728\u524D\u9762\u52A0\u4E0A\u8BED\u8A00\u4EE3\u7801\uFF0C\u5982\uFF1Aja \u4F60\u597D\u4E16\u754C",mouseHoverShortcutPlaceholder:"\u5982\uFF1AShift",yearly:"\u5E74\u5EA6\u7E8C\u8A02",quarterly:"\u5B63\u5EA6\u7E8C\u8A02",monthly:"\u6BCF\u6708\u7E8C\u8A02",yearlyForOnce:"\u4E00\u6B21\u6027\u5E74\u5EA6\u5957\u9910",monthlyForOnce:"\u4E00\u6B21\u6027\u6708\u5EA6\u5957\u9910",daily:"\u6BCF\u65E5\u7E8C\u8A02",year:"\u5E74\u5EA6\u7E8C\u8A02",quarter:"\u5B63\u5EA6\u7E8C\u8A02",month:"\u6BCF\u6708\u7E8C\u8A02",day:"\u6BCF\u65E5\u7E8C\u8A02",upgradeToPro:"\u5347\u7D1A\u70BA Pro \u6703\u54E1","popup.openPro":"\u5347\u7D1A\u70BA Pro \u6703\u54E1\u5F8C\u53EF\u4EE5\u66A2\u4EAB DeepL \u548C OpenAI \u7FFB\u8B6F\uFF0C\u9EDE\u6B64\u5347\u7D1A","popup.openProForPro":"\u60A8\u662F Pro \u6703\u54E1\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528 DeepL \u548C OpenAI \u7FFB\u8B6F",currentAccount:"\u7576\u524D\u8CEC\u6236"};var kp={nologin:"Not logged in",login:"Login",manageAccount:"Manage Account",logout:"Logout",curentPlan:"Current Plan",endAt:"Expires",endAuto:"Auto Renew",lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","noSupportTranslate-pdf":"The script is not supported, please use a plugin.","translate-firefox-local-pdf":"Click to upload PDF",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.brandName":"Immersive Translate","browser.brandDescription":"Bilingual web page translation, also supports PDF translation, bilingual Epub eBook translation, free to use.","browser.toggleTranslatePage":"Toggle Translate Page","browser.toggleTranslateTheWholePage":"Toggle Translate the Whole Page","browser.toggleOnlyTransation":"Toggle Translate and Hide Original Text","browser.toggleTranslateToThePageEndImmediately":"Toggle Translate to the Bottom of the Page Immediately","browser.toggleTranslateTheMainPage":"Toggle Translate the Main Page","browser.openOptionsPage":"Open Settings Page","browser.toggleTranslationMask":"Toggle translation mask style","browser.translateLocalPdfFile":"Translate local PDF File","browser.openEbookViewer":"Read local e-book","browser.openEbookBuilder":"Make Dual EPUB ebook","browser.translateLocalHtmlFile":"Translate HTML/txt File","browser.donateContext":"Sponsor Benefits","browser.translateLocalSubtitleFile":"Translate Subtitle File",confirmResetConfig:"Are you sure you want to reset the settings?",translationLineBreakSettingTitle:"Line break setting",smartLineBreak:"Smart Wrap",alwaysLineBreak:"Always Wrap",isShowContextMenu:"Create right button menu",toggleBeta:"Enable Beta experimental features",betaDescription:"Enable features that are still experimental, and translation services that are in testing. Join the <1>Telegram group</1> to learn more.",translationLineBreakSettingDescription:"The always line break feature is suitable for layouts with less content, making the layout more neat and tidy. (Use smart line breaks for long paragraphs with more content (more than {count} characters) for saving space)",tempTranslateDomainTitle:"Open the translation time temporarily",tempTranslateDomainDescription:"When a page is translated manually, turn it temporarily on as automatic translation",xMinutes:"{count} minutes",disabled:"Disable",changelog:"Change Log",toggleTranslatePageWhenThreeFingersOnTheScreen:"Multi-finger touch to show/hide translation display",toggleTranslationMaskWhenThreeFingersOnTheScreen:"Multi-finger touch to show/hide the blur effect of the translation",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"Multi-finger touch to show/hide only translation display",addUrlDescription:"The domain name is available and wildcard is supported e.g.: *.google.com, google.com/mail/*, https://www.google.com/*",general:"General",clickToExpandConfig:"Expand current configuration",import:"Import configuration from file",export:"Export to file",toggleDebug:"Print debug logs on the console","fingers.0":"Close","fingers.2":"Two-finger touch","fingers.3":"Three-finger touch","fingers.4":"Four-finger touch","fingers.5":"Five-finger touch",mouseHoldKey:"+ {key} translate this paragraph",mouseHoldKeyAuto:"Translate the paragraph directly",mouseHoldKeyOff:"Do nothing",mouseHoldKeyOther:"Custom shortcut key (open settings)",mouseHoldKeyCustomKey:"{key} translate this paragraph",mouseHoverHoldKey:"Mouse over and press X key to translate paragraph","mouse-translate":"Hover",document:"Document",resetSuccess:"All settings reset successful",resetThisSuccess:"Reset successful",saved:"Saved successfully",successImportConfig:"Configuration imported successfully",goAdvancedSettings:"Go to Advanced Settings Page",goAdvancedInterfaceSettings:"Go to Advanced Custom Settings Page",advanced:"Advanced",advancedDescription:"Normally no settings are needed, keep the default. More personalized settings are provided for professional users only.",developer:"Developer settings",donateCafe:"Pricing","translate to the bottom of the page":"Translate to the bottom of the page immediately after opening the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate",translateToThePageEndImmediatelyDescription:"Enabled will translate from the top to the bottom of the page immediately after opening. Disable will translate while reading. (Not recommended to enable)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, all areas of the entire web page will be translated. Disabled will use the default smart recognition and translate only the main areas. (Not recommended to enable)","the number of characters to be translated first":"Directly translate the number of characters in front of the page without waiting to scroll to the visible area","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",moreOptions:"Expand more custom settings",translateTheWholePage:"Translate the whole page area",changeToTranslateTheWholePage:"Translate the Whole Page",changeToTranslateTheMainPage:"Translate the Main Content",changeToOnlyTranslationMode:"Show Translation only",changeToDualTranslationMode:"Show Dual Translation",translateToThePageEndImmediately:"Immediately translate to the bottom ",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension version is too old, please upgrade the extension to {minVersion} or a newer version and try to sync again.",badUserscriptBrowser:"The current browser does not correctly implement the interface of the Greasemonkey extension, please use another browser that <1>supports the Greasemonkey extension</1> such as (Firefox Nightly version)",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",needActionForOptions:"(need to set)",translationEngine:"Engine Options",sourceLanguage:"Original language",target:"Target Language",popupSourceLanguage:"Source",popupTarget:"Target",popupService:"Service",forThisSite:"Site:",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",alwaysTranslateSomeSiteOrWildSite:"Always translate this site",alwaysTranslateSomePage:"Always translate this page",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export",import_export_title:"Import/Export Configuration",syncToGoogleDrive:"Sync Now with Google Drive",syncToAccount:"Sync to account",syncToAccountButton:"Sync to account now",syncToAccountDescription:"Uploaded to the logged-in account, the configuration can be synchronized between different devices, and the last modification time shall prevail.",successSyncConfigInAccount:"Successfully synced with account",successSyncConfigToAccount:"Successfully synchronized to account",syncConfigNoUpdate:"Already up to date",previewAllThemes:"Preview all themes","translationTheme.none":"None","translationTheme.grey":"Black Gray","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.solidBorder":"Dashed Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.opacity":"Opacity effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Marker","translationTheme.marker2":"Maker2","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationTheme.nativeDashed":"System Dash Underline","translationTheme.nativeDotted":"System Dotted Underline","translationTheme.nativeUnderline":"System Straight Line Underline","translationTheme.wavy":"Squiggle","translationServices.custom":"Custom API","translationServices.tencent":"Tencent Translator","translationServices.tenAlpha":"Tencent Translator (Alpha)","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeeplX (Alpha)","translationServices.bing":"Microsoft Translator","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Azure Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.cai":"Caiyun Translation (Alpha)","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.you":"Youdao Translation (Alpha)","translationServices.transmart":"Tencent Smart Translation","translationServices.niu":"Niu Translation","translationServices.papago":"Papago Translation","translationServices.d":"DeeplX (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"Translate page title","always languages":"Always translate the following languages",neverTranslateLanguagesLabel:"Never Translated Languages",neverTranslateTheFollowingLanguagesDescription:"When a paragraph on a page is in one of the following languages, the translation will be skipped",enableUserscriptPagePopup:"Always show Popup windows on the page",enableUserscriptPagePopupDescription:"Three-finger touch to show the Popup.","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"Sites that always use the {theme} translation style",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language",syncToCloud:"Sync to cloud",syncToCloudDescription:"Upload the configuration to the cloud server, and you can synchronize the configuration between different browsers or Tampermonkey scripts, based on the last modification time.",authFail:"Authorization Failed",syncTitle:"Please select a file operation",import_hint:"Import",upload:"Upload",revokeAuth:"Revoke Authorization",uploadFail:"Upload Failed",download:"Download",importSuccess:"Upload Success",importFail:"Import Failed",deleteFail:"Delete Failed",backupToCloud:"Manage backup files manually",create_new_backup:"Add backup node",maxBackupFiles:"Up to{count}different nodes can be backed up. Please delete unneeded nodes",backupToCloudDescription:"Upload or restore backup files manually, up to 3 different backups",successSyncConfig:"Successfully synced with cloud",syncFail:"Synchronization failed",updatedAt:"Updated at {date}",lastSyncedAt:"Last checked at {date}",downloadFail:"Download failed",clickToDownload:"Click to download",aboutLabel:"About - Feedback ","browser.openAboutPage":"About / Feedback/Sponsor",aboutLabelWithoutSponsor:"About - Feedback",aboutIntro:"We hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. You can choose to subscribe to <6>Pro membership</6> to use the out-of-the-box DeepL and OpenAI translation.<br/><br/> You can also follow out <3>Twitter</3>, <4>Telegram Channel</4>, and <5>Email Subscription</5> below to track updates. <br/> <7>Pro members</7> can contact us through the fast customer service email <8>support@immersivetranslate.com</8>.",aboutIntroWithoutSponsor:"The extension is completely free and we hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. ",projectHomepage:"Project Homepage",joinTelegramGroup:"Join our communities for feature discussion",wechatPublicAccount:"Wechat Official Account",wechatCommunities:"Wechat Group",qqCommunities:"QQ Channel",joinTelegramChannel:"Subscribe to our Telegram channel to get the latest updates",feedbackAndJoin:"Feedback",autoSync:"Auto-Time Sync",loadingThemeTitle:"Loading Style",loadingThemeDescription:"Set the style of waiting for the translation to load","loadingTheme.spinner":"Spinning icon","loadingTheme.text":"Static Text... ","loadingTheme.none":"Disabled",developerDescription:"You can click <1>here</1> to see the documentation related to advanced customization","edit border color":"Edit border color",successSyncButNoChange:"The current configuration is consistent with that in the cloud server",customTheme:"Customize colors and sizes","customThemeLabel.borderColor":"Border color","customThemeLabel.borderRadius":"Border Round Corner","customThemeLabel.textColor":"Text color","customThemeLabel.backgroundColor":"Background color","customThemeLabel.zoom":"Font scale (%)","customThemeLabel.opacity":"Text opacity (%)",resetToDefaultColor:"Reset to default colors",resetToDefaultSettings:"Reset to default settings",isTranslateTitle:"Enable translate page title",enableSubtitle:"enableSubtitleTranslation",enableSubtitleDescription:"Enable translations for subtitle areas on sites like youtube",isTranslateTitleDescription:"When enabled, the page title will be translated",enableSearchEnhancement:"Enable Search Enhancement",enableSearchEnhancementDescription:'After enabling, the right sidebar will automatically display "Google News" search results for corresponding English keywords on supported websites (such as Google News, Google Search (partial keywords), Xueqiu, East Money, Futu, Tiger Community).',verifyService:"Verify service",verified:"Successful","field.model":"Model","field.translationEngine":"Translation engine","field.limitPerMinute":"Max requests per minute","field.limitPerSecond":"Max requests per second","field.maxTextLengthPerRequest":"Maximum text length per request","field.maxTextGroupLengthPerRequest":"Maximum number of paragraphs per request","field.apiUrl":"Custom API interface address","field.placeholderDelimiters":"Reserved placeholders","description.custom":"<a href='https://immersivetranslate.com/docs/services/custom/' target='_blank'>Custom interface access</a> requires reference documents","description.limitPerMinute":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next minute. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.limitPerSecond":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next second. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.generalLimitPerSecond":"Requests exceed this limit will be queued until the next seconds.","description.prompt":"Send as a user to OpenAI conversation, where {{text}} indicates the text of the paragraph,{{from}} indicates the language of the paragraph,{{to}} indicates the target language, you can omit {{text}}, if so, it'll be sent as a separated message","description.maxTextLengthPerRequest":"By default multiple paragraphs will be merged to reduce the number of requests, but if the total length of the paragraphs is too long, it may also cause the interface to respond slowly, so you can try to adjust this option to optimize speed","description.systemPrompt":"Send the conversation to OpenAI as a system, where {{text}} represents the text content of the paragraph, {{from}} represents the original language of the paragraph, and {{to}} represents the target language.","field.domain":"Domain","description.domain":"Default is\uFF1Ageneral. Only set up if there is an API console open domain translation, support fields see <1>Here </1>","field.scene":"Scene","description.scene":"Default is\uFF1Ageneral. Only set up if there is an API console open Machine Translation Professional, support fields see<1>Here</1>","field.vocabId":"User dictionary ID","description.vocabId":"Specified dictionary out_id, currently supported in English translation","description.model":"OpenAI's models, such as gpt-3.5-turbo, gpt-4, etc","description.maxTextGroupLengthPerRequest":"The number of paragraphs sent to translation service each time. Sending too many paragraphs to OpenAI at once can slow down the interface.","description.apiUrl":"Please provide a URL with the specific path.",enabledExtension:"Enable extensions",clickToDisableExtension:"Click to disable extension",clickToEnableExtension:"Click to enable the extension",hasBeenDisabled:"Disabled","show password":"Show password",customContent:"Enter customization content",inputOptions:"Writing",mouseHoverOptions:"Mouse Hover",enableInputTranslation:"enhanced input box?",enableInputTranslationDescription:"When enabled, enter {startingKey}{startingKey} direct in the input box and hit{inputTrailingTriggerKeyRepeatTimes}times{trailingKey}, translated into {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:'When enabled, simply enter "Hello World" in the input box, then quickly press {inputTrailingTriggerKeyRepeatTimes} times on {trailingKey}, and it will be translated into the default target language.',inputTargetLanguage:"Set the default target language for the input box",inputTargetLanguageDescription:"The default target language for the translation input box, which is {startingKey}{startingKey} as the default language for triggering words.",inputTargetLanguageDescriptionForNoneKey:"Default target language for translation input box",inputStartingTriggerKeyTitle:"Set the delimiter for translating part of the input box.",inputStartingTriggerKeyDescription:"When you don't need to translate the entire input box, the delimiter allows you to only translate the portion from {startingKey}{startingKey} to the end of the input box. You can also specify a language code, for example: {startingKey}ja means only translating the portion from {startingKey}ja to the end of the input box.",inputStartingTriggerKeyDescriptionForNoneKey:"The current setting is no prefix required, the partial text translation function of the input box cannot be used temporarily.",inputTrailingTriggerKeyTitle:"Select a trigger character to indicate the end of input.",inputTrailingTriggerKeyDescription:"Start the translation by quickly pressing 3 times {trailingKey}.",inputTrailingTriggerKeyTimeout:"Enter the interval time to end the trailing trigger",inputTrailingTriggerKeyTimeoutDescription:"Set the interval time (milliseconds) for the input to end the combo trigger",spaceKey:"<spacekey>",noneKey:"Translate the entire text box without prefixes",inputTranslationBlockUrlsTitle:"Do not enable input box enhancement in the following URL",inputTranslationBlockUrlsDescription:"The input box enhancement will not work in the following URL",clickToSeeQuickDemo:"Click to expand the 30s tutorial video",inputHelperInfo:`Note: We have optimized the system to address an issue where certain characters in Chinese input methods were being converted into Chinese punctuation marks. For instance, when using Sogou Input Method, "/" would be changed to "\u3001". We now recognizes all corresponding Chinese symbols as triggering characters, including "//" and "\u3001\u3001".

Additionally, we support using Chinese aliases of language codes as commands. For example, entering "/Japanense Hello World" will translate the text into Japanese. You can click here to see a list of all supported language codes.`,reloadCurrentPage:"Please refresh the current page before starting translation",noLocalFilePermissionForPDF:"No permission to read local files. Please click the button above and upload the local file.",noPermissionForThisPage:"\u26A0\uFE0F No permission to translate the current page",retryAllParagraphs:"Retry all paragraphs",retryAllButton:"Retry All",errorTooltipTitle:"Click to get the error details",errorModalTitle:"Noops, something went wrong",disableConfirm:"Search Enhancement Settings",disableOnce:"Disable Once",disableGlobal:"Disable Forever",disableTint:"* You can re-enable in {option}.",searchEnhancementNotes:"We have discovered notable disparities in news results between Chinese and English keywords. By activating the immersive translation Bilingual Display Enhancement feature, we will automatically search for equivalent English keywords and display them on the right side of supported websites (e.g., Google News, Google Search (partial keywords), xueqiu, East Money, Futu, Tiger). You can disable this feature if you don't need it.",option:"option",saveSettings:"Save",closeModal:"Close",enableInputTranslationWithoutTriggerKeyTitle:"Enable quick press 3 times {trailingKey}, directly translate the entire input box to {inputTargetLanguage}.",enableInputTranslationWithoutTriggerKeyDescription:"To specify the target language, please add a language code at the beginning, such as: ja Hello world",mouseHoverShortcutPlaceholder:"e.g. Shift",deepLProName:"Premium Membership (Recommended)",deepLProDescription:"You can directly use this service",deeplProDescriptionForNormal:"No setup required, available for premium members after login, <1>Upgrade</1>",deepLCustomDescription:"Requires an international credit card, activate at <1>DeepL</1> official site, click to see <2>documentation</2>",deepLCustomName:"Custom Auth Key",chooseProviderLabel:"Choose a service provider",openaiProName:"Premium Membership (Recommended)",openaiProDescription:"The current plan can be used directly",openaiProDescriptionForNormal:"No setup required, available for premium members after login, <1>Upgrade</1>",openaiCustomDescription:"Can be obtained from OpenAI, Azure OpenAI, or other third-party services, <1>Click here to view documentation</1>",openaiCustomName:"Custom API Key",needLoginAction:"(Premium or custom)",goLoginOrAction:"(Premium or go to setting)",yearly:"Annual Renewal",quarterly:"Quarterly Renewal",monthly:"Monthly Renewal",daily:"Daily Renewal",yearlyForOnce:"One-time Annual",monthlyForOnce:"One-time Monthly",profile:"Profile",billing:"Billing",onetime_7day:"7-day Trial Pack",currentPlanDescriptionForFree:"Current plan: Free",currentPlanDescriptionForContinuous:"Current plan: {plan}, will auto-renew on {endAt}",currentPlanDescriptionForAutoRenewCaceling:"Current plan: {plan}, will expire on {endAt} and will not auto-renew",currentPlanDescriptionForOneTime:"Current plan: {plan}, expiring on {endAt}. <1>Upgrade to annual</1> or <2>monthly</2> pro membership",currentYearlyPlanDescriptionForAutoRenewCacelingWithRealPaiedUser:"Current plan: {plan}, will expire on {endAt}, will not be auto-renewed after expiration <br/><1>Manage the renewal plan</1>",currentYearlyPlanDescriptionForAutoRenewCacelingWithAdmin:"Current plan: {plan}, will expire on {endAt}, will not auto-renew after expiration.<br/> <1>Enable consecutive annual plan</1>",upgradePlan:"Click here to upgrade to Pro membership",year:"Annual Renewal",quarter:"Quarterly Renewal",month:"Monthly Renewal",day:"Daily Renewal",upgradeToPro:"Upgrade to Pro","popup.openPro":"Enjoy unrestricted access to DeepL and OpenAI translations after upgrading to Pro Membership. Click here to upgrade","popup.openProForPro":"You are a Pro member, you can directly use DeepL and OpenAI translations",currentAccount:"Account",enableAutoSyncUserSettings:"Enable auto-sync user settings"};var zb=[{code:"zh-CN",messages:_p},{code:"zh-TW",messages:Sp},{code:"en",messages:kp}];var Bb={};for(let t of zb)Bb[t.code]=t.messages;var lt="immersive-translate";var ce="immersiveTranslate";var a2=ce+"GoogleAccessToken",o2=ce+"AuthFlow";var s2=ce+"AuthState",l2=ce+"IframeMessage",c2=ce+"WaitForRateLimit",u2=ce+"DocumentMessageAsk",Ep=ce+"DocumentMessageTellThirdParty",Cp=ce+"DocumentMessageThirdPartyTell",d2=ce+"DocumentMessageEventUpload",p2=ce+"DocumentMessageHandler",f2=`${ce}Container`,h2=`${ce}SpecifiedContainer`;var m2=`${ce}PageTranslatedStatus`,g2=`${ce}PageUrlChanged`,b2=`${ce}ReceiveCommand`,y2=ce+"LastUseMouseHoverTime",w2=ce+"LastUseInputTime",v2=ce+"LastUseManualTranslatePageTime",x2=`${ce}PopupReceiveMessage`,Ub="immersivetranslate.com",$b="config.immersivetranslate.com",T2=`https://${Ub}/`,_2=`https://${$b}/default_config.json`,S2=`${ce}Mark`;var Lp=`${ce}Root`,ms=`data-${lt}-effect`,k2=`data-${lt}-translation-element-mark`,A2=`${ce}TranslationElementMark`,E2=`${ce}TranslatedMark`,C2=`${ce}ParagraphId`,L2=`${ce}LoadingId`,R2=`data-${lt}-loading-id`,D2=`${ce}ErrorId`,M2=`data-${lt}-error-id`,P2=`${ce}AtomicBlockMark`,O2=`${ce}ExcludeMark`,F2=`data-${lt}-exclude-mark`,I2=`${ce}StayOriginalMark`,N2=`${ce}PreWhitespaceMark`,z2=`${ce}InlineMark`,B2=`${ce}BlockMark`,U2=`${ce}Left`,$2=`${ce}Right`,H2=`${ce}Width`,j2=`${ce}Height`,W2=`${ce}Top`,q2=`${ce}FontSize`;var K2=`${ce}GlobalStyleMark`,Hb=["@","#"];var V2=`${lt}-target-wrapper`,G2=`${lt}-pdf-target-container`,X2=`${lt}-target-inner`,Y2=`${lt}-source-wrapper`,Z2=`${lt}-target-translation-block-wrapper`,J2=`${lt}-root-translation-theme`,Q2=`${ce}RootTranslationTheme`,eT=`${lt}-target-translation-vertical-block-wrapper`,tT=`${lt}-target-translation-pdf-block-wrapper`,nT=`${lt}-target-translation-pre-whitespace`,rT=`${lt}-target-translation-inline-wrapper`;var Ap=[{type:"select",name:"codename",labelKey:"field.translationEngine",default:"youdao",required:!1,options:[{label:"translationServices.google",value:"google"},{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.aws",value:"aws"}]}],iT={bing:{name:"\u5FAE\u8F6F\u7FFB\u8BD1",homepage:"https://www.bing.com/translator"},google:{name:"Google",homepage:"https://translate.google.com/"},deepl:{name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://immersivetranslate.com/docs/services/deepL/",providers:[{name:"pro",nameKey:"deepLProName",descriptionKey:"deepLProDescription",descriptionKeyForNormal:"deeplProDescriptionForNormal",descriptionLink1:"https://immersivetranslate.com/pricing"},{name:"custom",nameKey:"deepLCustomName",descriptionKey:"deepLCustomDescription",descriptionLink1:"https://www.deepl.com/translator",descriptionLink2:"https://immersivetranslate.com/docs/services/deepL/"}],allProps:[{name:"authKey",providers:["custom"],label:"Auth Key",required:!0,type:"password"}]},openai:{name:"Open AI",homepage:"https://openai.com/api/",docUrl:"https://immersivetranslate.com/docs/services/openai/",providers:[{name:"pro",nameKey:"openaiProName",descriptionKey:"openaiProDescription",descriptionKeyForNormal:"openaiProDescriptionForNormal",descriptionLink1:"https://immersivetranslate.com/pricing"},{name:"custom",nameKey:"openaiCustomName",descriptionKey:"openaiCustomDescription",descriptionLink1:"https://immersivetranslate.com/docs/services/openai/"}],allProps:[{name:"APIKEY",providers:["custom"],required:!0,type:"password"},{name:"model",labelKey:"field.model",descriptionKey:"description.model",required:!1,type:"select",default:"gpt-3.5-turbo-0613",options:[{providers:["custom","pro"],label:"gpt-3.5-turbo",value:"gpt-3.5-turbo"},{providers:["custom","pro"],label:"gpt-3.5-turbo-0613",value:"gpt-3.5-turbo-0613"},{providers:["custom"],label:"gpt-4",value:"gpt-4"}]},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.limitPerSecond",descriptionLink1:"https://immersivetranslate.com/docs/services/openai/",type:"number",default:10},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0},{name:"apiUrl",labelKey:"field.apiUrl",required:!1,type:"text",default:"https://api.openai.com/v1/chat/completions",descriptionKey:"description.apiUrl",optional:!0},{name:"systemPrompt",label:"System Prompt",required:!1,descriptionKey:"description.systemPrompt",type:"text",optional:!0,default:"You are a translation engine, you can only translate text and cannot interpret it, and do not explain."},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:`Translate the text to {{to}}, please do not explain any sentences, just translate or leave them as they are.:

{{text}}`,optional:!0}]},transmart:{name:"Transmart",homepage:"https://transmart.qq.com/"},chatgpt:{name:"ChatGPT Web(3.5 mobile)",homepage:"https://chat.openai.com",beta:!0},youdao:{name:"Youdao",homepage:"https://youdao.com/",docUrl:"https://immersivetranslate.com/docs/services/youdao/",allProps:[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:200,optional:!0},{name:"domain",required:!1,labelKey:"field.domain",descriptionKey:"description.domain",descriptionLink1:"https://fanyi.youdao.com/openapi/",type:"text",default:"general",optional:!0},{name:"vocabId",required:!1,labelKey:"field.vocabId",descriptionKey:"description.vocabId",type:"text",default:"",optional:!0}]},tencent:{name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://immersivetranslate.com/docs/services/tencent/",allProps:[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]},aliyun:{name:"Aliyun",homepage:"https://translate.alibaba.com/",docUrl:"https://immersivetranslate.com/docs/services/aliyun/",allProps:[{name:"AccessKeyID",required:!0,type:"text"},{name:"AccessKeySecret",required:!0,type:"password"},{name:"scene",labelKey:"field.scene",descriptionKey:"description.scene",descriptionLink1:"https://help.aliyun.com/document_detail/158267.html",required:!1,optional:!0,type:"text",default:"general"}]},azure:{name:"azure",homepage:"https://learn.microsoft.com/en-us/azure/cognitive-services/translator/text-translation-overview",docUrl:"https://immersivetranslate.com/docs/services/azure/",allProps:[{name:"region",required:!0,default:"eastasia",type:"text"},{name:"APIKEY",required:!0,type:"password"}]},papago:{name:"Papago",homepage:"https://translate.google.com/",canary:!0},baidu:{name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://immersivetranslate.com/docs/services/baidu/",allProps:[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:1,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1800,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:8,optional:!0},{name:"domain",required:!1,labelKey:"field.domain",descriptionKey:"description.domain",descriptionLink1:"https://fanyi.youdao.com/openapi/",type:"text",default:"general",optional:!0}]},volc:{name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://immersivetranslate.com/docs/services/volcano/",allProps:[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1800,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:8,optional:!0}]},caiyun:{name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://immersivetranslate.com/docs/services/caiyun/",allProps:[{name:"token",required:!0,type:"password"}]},cai:{name:"Cai",homepage:"https://fanyi.caiyunapp.com/",alpha:!0},custom:{name:"Custom",beta:!0,homepage:"https://immersivetranslate.com/docs/services/custom/",titleKey:"description.custom",allProps:[{name:"url",label:"API URL",required:!0,type:"text"},{name:"langs",required:!1,labelKey:"field.langs",type:"textarea",default:"zh-CN,en",optional:!0},{name:"placeholderDelimiters",required:!1,labelKey:"field.placeholderDelimiters",type:"text",default:Hb,optional:!0},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0}]},mock:{name:"Mock",homepage:"https://www.google.com"},mock2:{name:"Mock2",homepage:"https://www.google.com"},tenAlpha:{name:"TenAlpha",homepage:"https://fanyi.qq.com/",alpha:!0},you:{name:"You",alpha:!0,homepage:"https://youdao.com/"},openl:{name:"Openl",homepage:"https://openl.club/",docUrl:"https://immersivetranslate.com/docs/services/openL/",allProps:[...Ap,{type:"password",name:"apikey",required:!0}],props:Ap},volcAlpha:{name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},d:{name:"D () ",alpha:!0,homepage:"https://www.deepl.com/translator"},dpro:{name:"DPro (Canary) ",canary:!0,homepage:"https://www.deepl.com/translator"},deeplx:{name:"DeepLX (Beta)",beta:!0,homepage:"https://www.deepl.com/translator",allProps:[{name:"url",label:"API URL",required:!0,type:"text"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0}]},niu:{name:"niutrans",homepage:"https://niutrans.com/",docUrl:"https://immersivetranslate.com/docs/services/niu",allProps:[{name:"APIKEY",required:!0,type:"password"}]}},aT={type:ce+"ChildFrameToRootFrameIdentifier"};var oT=vn()||xn()?"https://api2.immersivetranslate.com":"https://test-api2.immersivetranslate.com",sT=vn()||xn()?"https://immersivetranslate.com/accounts/login":"https://test.immersivetranslate.com/accounts/login",lT=vn()||xn()?"https://immersivetranslate.com/profile":"https://test.immersivetranslate.com/profile",cT=vn()||xn()?"https://immersivetranslate.com/pricing":"https://test.immersivetranslate.com/pricing",uT=vn()||xn()?"https://immersivetranslate.com/pricing/?utm_source=extension&utm_medium=extension&utm_campaign=popup_more":"https://test.immersivetranslate.com/pricing/?utm_source=extension&utm_medium=extension&utm_campaign=popup_more",dT=vn()||xn()?"https://immersivetranslate.com/pricing/?utm_source=extension&utm_medium=extension&utm_campaign=popup_footer":"https://test.immersivetranslate.com/pricing/?utm_source=extension&utm_medium=extension&utm_campaign=popup_footer";var{ZipReader:jb,BlobReader:bs,TextReader:gs,TextWriter:Wb,BlobWriter:Dp,ZipWriter:qb}=co;_i({useWebWorkers:!1});var Kb=async t=>{let e=new Uint8Array(await t.slice(0,4).arrayBuffer());return e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4},yn=null,Qi=0,ea=0,Zn=0,Rp=!1,Vb=rr(),Gb=Vb.PROD==="1",Xb=async t=>{let n=await new jb(new bs(t)).getEntries();t.name&&t.name.endsWith(".zip")&&n.every(u=>u.filename.startsWith(t.name.slice(0,-4)+"/"))&&(n=n.map(u=>(u.filename=u.filename.slice(t.name.length-3),u)));let r=new Map(n.map(l=>[l.filename,l])),i=l=>(u,...c)=>r.has(u)?l(r.get(u),...c):null,a=i(l=>l.getData(new Wb)),o=i((l,u)=>l.getData(new Dp(u)));return{entries:n,loadText:a,loadBlob:o,getSize:l=>r.get(l)?.uncompressedSize??0}},Mp=async t=>t.isFile?t:(await Promise.all(Array.from(await new Promise((e,n)=>t.createReader().readEntries(r=>e(r),r=>n(r))),Mp))).flat(),Yb=async t=>{let e=await Mp(t);e=e.map(d=>d);let n=[],r=await Promise.all(e.map(d=>new Promise((p,h)=>d.file(b=>p([b,d.fullPath]),b=>h(b))))),i=new Map(r.map(([d,p])=>{let h=p.replace(t.fullPath+"/","");return n.push({filename:h,...d}),[h,d]})),a=new TextDecoder,o=d=>d?a.decode(d):null,s=d=>i.get(d)?.arrayBuffer()??null;return{entries:n,loadText:async d=>o(await s(d)),loadBlob:async d=>i.get(d),getSize:d=>i.get(d)?.size??0}},Zb=({name:t,type:e})=>e==="application/vnd.comicbook+zip"||t.endsWith(".cbz"),Jb=({name:t,type:e})=>e==="application/x-fictionbook+xml"||t.endsWith(".fb2"),Qb=({name:t,type:e})=>e==="application/x-zip-compressed-fb2"||t.endsWith(".fb2.zip")||t.endsWith(".fbz"),ey=async(t,e)=>{let n;if(t.isDirectory){let a=await Yb(t);yn=a,n=await new or(a).init()}else if(t.size)if(await Kb(t)){let a=await Xb(t);if(yn=a,Zb(t))n=qs(a,t);else if(Qb(t)){let{entries:o}=a,s=o.find(u=>u.filename.endsWith(".fb2")),l=await a.loadBlob((s??o[0]).filename);n=await fa(l)}else n=await new or(a).init()}else await rl(t)?n=await new Qr({unzlib:Nu}).open(t):Jb(t)&&(n=await fa(t));else throw new Error("File not found");if(!n)throw new Error("File type not supported");let r=new Kr(n,e),i=await r.display();return document.body.append(i),r},Fe=document.querySelector.bind(document),Cn=!1;function Pp(){let t=document.querySelectorAll("iframe");for(let r=0;r<t.length;r++){let o=t[r].contentDocument.body;o&&o.setAttribute("contenteditable",!1)}Cn=!1;let e=document.getElementById("edit");e&&(e.innerText=Cn?"Preview (\u9884\u89C8)":"Edit (\u7F16\u8F91)");let n=document.querySelectorAll("[data-type='iframe-title']");for(let r=0;r<n.length;r++){let i=n[r];i.innerText=Cn?" \uFF08\u4EE5\u4E0B\u5185\u5BB9\u5F53\u524D\u53EF\u7F16\u8F91\uFF09":""}}function ty(){let t=document.querySelectorAll("iframe");for(let r=0;r<t.length;r++){let o=t[r].contentDocument.body;o&&o.setAttribute("contenteditable",!0)}Cn=!0;let e=document.getElementById("edit");e&&(e.innerText=Cn?"Preview (\u9884\u89C8)":"Edit (\u7F16\u8F91)");let n=document.querySelectorAll("[data-type='iframe-title']");for(let r=0;r<n.length;r++){let i=n[r];i.innerText=Cn?" \uFF08\u4EE5\u4E0B\u5185\u5BB9\u5F53\u524D\u53EF\u7F16\u8F91\uFF09":""}}function ny(){Cn?Pp():ty()}var ys=class{style={spacing:1.4,justify:!0,hyphenate:!0};layout={margin:48,gap:48,maxColumnWidth:720};closeSideBar(){Fe("#dimming-overlay").classList.remove("show"),Fe("#side-bar").classList.remove("show")}constructor(){Fe("#side-bar-button").addEventListener("click",()=>{Fe("#dimming-overlay").classList.add("show"),Fe("#side-bar").classList.add("show")}),Fe("#dimming-overlay").addEventListener("click",()=>this.closeSideBar());let e=js([{name:"layout",label:"Layout",type:"radio",items:[["Paginated","paginated"],["Scrolled","scrolled"]],onclick:n=>{this.layout.flow=n}}]);e.element.classList.add("menu"),Fe("#menu-button").append(e.element),Fe("#menu-button > button").addEventListener("click",()=>e.element.classList.toggle("show")),e.groups.layout.select("paginated")}async open(e){Fe("#progress").classList.remove("none");try{document.addEventListener(Ep,b=>{let{detail:g}=b;if(g)try{let m=JSON.parse(g);if(m&&m.type&&m.payload){if(m.type==="paragraphTranslated"){let{ok:f}=m.payload;if(f?ea++:Zn++,s&&Qi){let y=ea,w=ea+Zn,A=y/Qi*100,S=Math.floor(A),x=Math.floor(w/Qi*100);if(S>100&&(S=100),x>100&&(x=100),s.innerText=`${S}%`,x===100&&Zn>0){let k=document.querySelector("#error");k.innerHTML=Mr.sanitize(`${Zn} failed(\u5931\u8D25). <span class="link">Retry all (\u70B9\u6B64\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D)</span>`)}S===100&&(Rp||(Rp=!0,Zo({particleCount:100,spread:160})))}}else if(m.type==="totalParagraphsCount")m.payload.totalParagraphsCount&&(Qi=m.payload.totalParagraphsCount);else if(m.type==="translateStart")ea=0,Zn=0;else if(m.type==="restorePage"){let f=document.querySelector("#error"),y=document.querySelector("#progress-number");f&&(f.innerHTML=""),y&&(y.innerText="")}}}catch{}}),this.view=await ey(e,this.#e.bind(this));let{book:n}=this.view,r=n.sections,i=document.querySelector("#chapters"),a=n.resources,o=[];if(a&&a.guide&&a.guide.length)for(let b of a.guide)o.push(b.href);let s=document.querySelector("#progress-number"),l=document.querySelector("#error");l.addEventListener("click",b=>{for(b.preventDefault();l.firstChild;)l.removeChild(l.firstChild);Zn=0,document.dispatchEvent(new CustomEvent(Cp,{detail:JSON.stringify({type:"retryFailedParagraphs"})}))}),Fe("#open").addEventListener("click",()=>{window.location.reload()}),Fe("#export").addEventListener("click",async b=>{b.preventDefault(),yn||alert("Load failed");let g=document.querySelector("#export");g.classList.add("disabled");let m=document.querySelector("#exportAction");m&&m.classList.add("none");let f=document.querySelector("#exportStatus");f&&(f.innerText="Exporting..."),Pp();let y=yn.entries,w=new Dp,A=new qb(w),S=new gs("application/epub+zip");await A.add("mimetype",S,{level:0,extendedTimestamp:!1});for(let _=0;_<y.length;_++){let C=y[_],R=C.filename;if(R==="mimetype"||!R)continue;let D=R.replace(/\'/g,"\\'"),I=document.querySelector("iframe[id='"+D+"']");if(I){let M=I.contentDocument.cloneNode(!0);M.querySelectorAll("["+ms+"]").forEach(L=>{if(Gb){delete L[Lp];let $=Object.keys(L.dataset).filter(q=>q.startsWith(ce));for(let q of $)delete L.dataset[q]}else{let $=Object.keys(L.dataset).filter(q=>q.startsWith(ce));for(let q of $)delete L.dataset[q]}L.removeAttribute(ms)}),M.querySelectorAll("[data-id]").forEach(L=>{L.removeAttribute("data-id")}),M.querySelectorAll("[contenteditable]").forEach(L=>{L.removeAttribute("contenteditable")}),M.querySelectorAll("style").forEach(L=>{L.getAttribute("type")||L.setAttribute("type","text/css")});let V=new XMLSerializer().serializeToString(M),ee=new gs(V);try{await A.add(C.filename,ee)}catch{}}else{let M=n.metadata;if(C.filename===n.opfPath&&M&&M.identifier)try{let N=await yn.loadText(C.filename),z=new DOMParser().parseFromString(N,"text/xml"),Y=z.getElementById(z.documentElement.getAttribute("unique-identifier"))??z.getElementsByTagNameNS(NS.DC,"identifier")[0],te=Math.random().toString(10).slice(2,15);Y.textContent=te;let V=new XMLSerializer().serializeToString(z),ee=new gs(V);await A.add(C.filename,ee)}catch{let z=await yn.loadBlob(C.filename);await A.add(C.filename,new bs(z))}else try{let N=await yn.loadBlob(C.filename);await A.add(C.filename,new bs(N))}catch{}}}await A.close();let x=await w.getData(),k=e.name;e.name.endsWith(".epub.zip")&&(k=k.replace(".epub.zip",".epub"));let v=k.lastIndexOf("."),E=Math.min(160,v);k=k.substring(0,E)+" (Translated).epub",await kr.saveAs(x,k),g&&g.classList.remove("disabled"),m&&m.classList.remove("none"),f&&(f.textContent="")}),Fe("#edit").addEventListener("click",b=>{b.preventDefault(),yn||alert("Load failed"),ny()});let c=(n.metadata||{}).title||"Unknown",d=document.querySelector("#bookTitle");d.textContent=c;let p=!1,h=0;for(let b=0;b<r.length;b++){let m=r[b].id,f=await n.loadText(m),y=new DOMParser().parseFromString(f,"application/xhtml+xml"),w=document.createElement("div");w.classList.add("flex"),w.classList.add("justify-center"),w.classList.add("items-center"),i.append(w);let A=document.createElement("h2");A.classList.add("notranslate"),A.innerText=m,w.append(A);let S=document.createElement("span");S.dataset.type="iframe-title",S.classList.add("notranslate"),S.innerText="",w.append(S);let x=document.createElement("iframe");x.setAttribute("id",m),x.setAttribute("width","80%"),x.setAttribute("height","400px"),x.srcdoc=y.documentElement.outerHTML,i.append(x),x.onload=()=>{if(h++,h===r.length){p=!0,Fe("#progress").classList.add("none"),setTimeout(()=>{let R=document.createElement("blockquote");R.classList.add("notranslate");let D=`<p class="notranslate">1. Click on the Immersive Translate extension popup translation button to start translating.<br>\u9700\u8981\u624B\u52A8\u70B9\u51FB\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u6269\u5C55/\u811A\u672C\u6D6E\u7A97\u7684\u7FFB\u8BD1\u6309\u94AE\u5F00\u59CB\u7FFB\u8BD1\u3002<br><br>2. If the Epub contains images, it's fine for the edit box below not to show the images, the exported Epub will contain the images.<br>\u5982\u679C Epub \u91CC\u5305\u542B\u56FE\u7247\uFF0C\u4E0B\u9762\u7684\u7F16\u8F91\u6846\u4E0D\u663E\u793A\u56FE\u7247\u662F\u6B63\u5E38\u7684\uFF0C\u5BFC\u51FA\u540E\u7684 Epub \u91CC\u4F1A\u5305\u542B\u56FE\u7247\u3002<br><br>3. When the translation is finished, you can click the Edit button above to modify the translation.<br>\u7FFB\u8BD1\u5B8C\u6210\u540E\uFF0C\u4F60\u53EF\u4EE5\u70B9\u51FB\u4E0A\u65B9\u7684\u7F16\u8F91\u6309\u94AE\u6765\u4FEE\u6539\u8BD1\u6587\u3002<br><br>4. When there is a translation error, you can click Retry All above, or click Show Original and translate again. Or the whole page can be refreshed and started again, because the translated part is always cached and no further requests will be sent.<br>\u5F53\u51FA\u73B0\u7FFB\u8BD1\u9519\u8BEF\u65F6\uFF0C\u53EF\u4EE5\u70B9\u51FB\u4E0A\u65B9\u7684\u91CD\u8BD5\u5168\u90E8\uFF0C\u6216\u8005\u70B9\u51FB\u6D4F\u89C8\u5668\u6269\u5C55\u56FE\u6807\u5148\u663E\u793A\u539F\u6587\uFF0C\u518D\u7FFB\u8BD1\u3002\u6216\u8005\u6574\u4E2A\u5237\u65B0\u9875\u9762\u91CD\u65B0\u6765\u8FC7\u4E5F\u884C\uFF0C\u56E0\u4E3A\u5DF2\u7FFB\u8BD1\u7684\u90E8\u5206\u603B\u662F\u6709\u7F13\u5B58\u7684\uFF0C\u4E0D\u4F1A\u518D\u53D1\u51FA\u8BF7\u6C42\u3002</p>`,I=document.querySelector("meta[name='immersive-translate-ebook-tips']");if(I){let N=I.getAttribute("content");N&&(D+=N)}R.innerHTML=Mr.sanitize(D),document.querySelector("#tips").append(R)},1e3),document.dispatchEvent(new CustomEvent("immersiveTranslateEbookLoaded"));let v=document.querySelectorAll("iframe"),E=0;v.forEach(R=>{let M=R.contentDocument.body.innerText.length;E+=M});let _=document.createElement("p");_.classList.add("notranslate"),_.innerText=`The book is about ${E} characters in total (\u672C\u4E66\u5927\u7EA6 ${E} \u4E2A\u5B57\u7B26)`,Fe("#stats").append(_)}};let k=b/r.length*100;document.getElementById("progressBar").value=k}}catch(n){alert(n.message),window.location.reload()}}#e(e){}},Op=async t=>{document.body.removeChild(Fe("#drop-target"));let e=new ys;globalThis.reader=e,await e.open(t),Fe("#editor").classList.remove("none")},ry=t=>t.preventDefault(),iy=t=>{t.preventDefault();let e=Array.from(t.dataTransfer.items).find(n=>n.kind==="file");if(e){let n=e.webkitGetAsEntry();Op(n.isFile?e.getAsFile():n).catch(r=>{})}},Fp=Fe("#drop-target");Fp.addEventListener("drop",iy);Fp.addEventListener("dragover",ry);Fe("#file-input").addEventListener("change",t=>Op(t.target.files[0]).catch(e=>{}));Fe("#file-button").addEventListener("click",()=>Fe("#file-input").click());})();
/*! Bundled license information:

bowser/src/bowser.js:
  (*!
   * Bowser - a browser detector
   * https://github.com/lancedikson/bowser
   * MIT License | (c) Dustin Diaz 2012-2015
   * MIT License | (c) Denis Demchenko 2015-2019
   *)
*/
/*! Bundled license information:

dompurify/dist/purify.es.js:
  (*! @license DOMPurify 3.0.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.3/LICENSE *)
*/
