(()=>{var qn=Object.defineProperty;var Wn=(e,u)=>{for(var t in u)qn(e,t,{get:u[t],enumerable:!0})};var C={BUILD_TIME:"2023-07-18T16:38:32.000Z",VERSION:"0.7.10",PROD:"1",REDIRECT_URL:"https://dash.immersivetranslate.com/auth-done/",BETA:"0",IMMERSIVE_TRANSLATE_INJECTED_CSS:`:root {
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
  filter: opacity(10%) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

[data-immersive-translate-root-translation-theme="none"] .immersive-translate-target-translation-theme-opacity-inner {
  filter: none !important;
}

[data-immersive-translate-root-translation-theme="opacity"] .immersive-translate-target-inner {
  filter: opacity(10%) !important;
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
  --icon-xia: url("data:image/svg+xml,%3Csvg%20width%3D%2222%22%20height%3D%2214%22%20viewBox%3D%220%200%2022%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M9.4392%2013.1554L1.18789%203.96259C0.85064%203.5869%200.664086%203.09986%200.664062%202.59501C0.664062%201.46382%201.58164%200.546875%202.71353%200.546875H19.2161C19.7212%200.546847%2020.2085%200.733262%2020.5846%201.07037C21.4272%201.82567%2021.4976%203.12055%2020.7418%203.96256L12.4905%2013.1554C12.441%2013.2106%2012.3885%2013.263%2012.3333%2013.3124C11.4907%2014.0678%2010.195%2013.9974%209.4392%2013.1554Z%22%20fill%3D%22%23666666%22%2F%3E%3C%2Fsvg%3E");

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
  font-size: 17px;
  --font-size: 17px;
}

body {
  padding: 0;
  margin: 0 auto;
  min-width: 268px;
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
.inline-block {
  display: inline-block;
}

.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}

.py-2-5 {
  padding-top: 10px;
  padding-bottom: 10px;
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
  color: #6b7280;
}




select.text-label {
  color: #6b7280;
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
`,MOCK:"0",DEBUG:"0",INSTALL_FROM:"chrome_zip"};var Kn=Object.create,D0=Object.defineProperty,Gn=Object.getOwnPropertyDescriptor,Dt=Object.getOwnPropertyNames,Vn=Object.getPrototypeOf,$n=Object.prototype.hasOwnProperty,Yn=(e,u)=>function(){return u||(0,e[Dt(e)[0]])((u={exports:{}}).exports,u),u.exports},Jn=(e,u)=>{for(var t in u)D0(e,t,{get:u[t],enumerable:!0})},k0=(e,u,t,a)=>{if(u&&typeof u=="object"||typeof u=="function")for(let n of Dt(u))!$n.call(e,n)&&n!==t&&D0(e,n,{get:()=>u[n],enumerable:!(a=Gn(u,n))||a.enumerable});return e},Zn=(e,u,t)=>(k0(e,u,"default"),t&&k0(t,u,"default")),Tt=(e,u,t)=>(t=e!=null?Kn(Vn(e)):{},k0(u||!e||!e.__esModule?D0(t,"default",{value:e,enumerable:!0}):t,e)),vt=Yn({"../esmd/npm/webextension-polyfill@0.10.0/node_modules/webextension-polyfill/dist/browser-polyfill.js"(e,u){(function(t,a){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],a);else if(typeof e<"u")a(u);else{var n={exports:{}};a(n),t.browser=n.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:e,function(t){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let a="The message port closed before a response was received.",n=r=>{let o={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(o).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class i extends WeakMap{constructor(E,x=void 0){super(x),this.createItem=E}get(E){return this.has(E)||this.set(E,this.createItem(E)),super.get(E)}}let l=w=>w&&typeof w=="object"&&typeof w.then=="function",c=(w,E)=>(...x)=>{r.runtime.lastError?w.reject(new Error(r.runtime.lastError.message)):E.singleCallbackArg||x.length<=1&&E.singleCallbackArg!==!1?w.resolve(x[0]):w.resolve(x)},d=w=>w==1?"argument":"arguments",f=(w,E)=>function(B,...k){if(k.length<E.minArgs)throw new Error(`Expected at least ${E.minArgs} ${d(E.minArgs)} for ${w}(), got ${k.length}`);if(k.length>E.maxArgs)throw new Error(`Expected at most ${E.maxArgs} ${d(E.maxArgs)} for ${w}(), got ${k.length}`);return new Promise(($,W)=>{if(E.fallbackToNoCallback)try{B[w](...k,c({resolve:$,reject:W},E))}catch{B[w](...k),E.fallbackToNoCallback=!1,E.noCallback=!0,$()}else E.noCallback?(B[w](...k),$()):B[w](...k,c({resolve:$,reject:W},E))})},S=(w,E,x)=>new Proxy(E,{apply(B,k,$){return x.call(k,w,...$)}}),T=Function.call.bind(Object.prototype.hasOwnProperty),F=(w,E={},x={})=>{let B=Object.create(null),k={has(W,D){return D in w||D in B},get(W,D,y){if(D in B)return B[D];if(!(D in w))return;let L=w[D];if(typeof L=="function")if(typeof E[D]=="function")L=S(w,w[D],E[D]);else if(T(x,D)){let re=f(D,x[D]);L=S(w,w[D],re)}else L=L.bind(w);else if(typeof L=="object"&&L!==null&&(T(E,D)||T(x,D)))L=F(L,E[D],x[D]);else if(T(x,"*"))L=F(L,E[D],x["*"]);else return Object.defineProperty(B,D,{configurable:!0,enumerable:!0,get(){return w[D]},set(re){w[D]=re}}),L;return B[D]=L,L},set(W,D,y,L){return D in B?B[D]=y:w[D]=y,!0},defineProperty(W,D,y){return Reflect.defineProperty(B,D,y)},deleteProperty(W,D){return Reflect.deleteProperty(B,D)}},$=Object.create(w);return new Proxy($,k)},G=w=>({addListener(E,x,...B){E.addListener(w.get(x),...B)},hasListener(E,x){return E.hasListener(w.get(x))},removeListener(E,x){E.removeListener(w.get(x))}}),Z=new i(w=>typeof w!="function"?w:function(x){let B=F(x,{},{getContent:{minArgs:0,maxArgs:0}});w(B)}),m=new i(w=>typeof w!="function"?w:function(x,B,k){let $=!1,W,D=new Promise(me=>{W=function(te){$=!0,me(te)}}),y;try{y=w(x,B,W)}catch(me){y=Promise.reject(me)}let L=y!==!0&&l(y);if(y!==!0&&!L&&!$)return!1;let re=me=>{me.then(te=>{k(te)},te=>{let X;te&&(te instanceof Error||typeof te.message=="string")?X=te.message:X="An unexpected error occurred",k({__mozWebExtensionPolyfillReject__:!0,message:X})}).catch(te=>{})};return re(L?y:D),!0}),Te=({reject:w,resolve:E},x)=>{r.runtime.lastError?r.runtime.lastError.message===a?E():w(new Error(r.runtime.lastError.message)):x&&x.__mozWebExtensionPolyfillReject__?w(new Error(x.message)):E(x)},q=(w,E,x,...B)=>{if(B.length<E.minArgs)throw new Error(`Expected at least ${E.minArgs} ${d(E.minArgs)} for ${w}(), got ${B.length}`);if(B.length>E.maxArgs)throw new Error(`Expected at most ${E.maxArgs} ${d(E.maxArgs)} for ${w}(), got ${B.length}`);return new Promise((k,$)=>{let W=Te.bind(null,{resolve:k,reject:$});B.push(W),x.sendMessage(...B)})},Q={devtools:{network:{onRequestFinished:G(Z)}},runtime:{onMessage:G(m),onMessageExternal:G(m),sendMessage:q.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:q.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},be={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return o.privacy={network:{"*":be},services:{"*":be},websites:{"*":be}},F(r,Q,o)};t.exports=n(chrome)}else t.exports=globalThis.browser})}}),Ft={};Jn(Ft,{default:()=>Yu});var Qn=Tt(vt());Zn(Ft,Tt(vt()));var{default:kt,...Xn}=Qn,Yu=kt!==void 0?kt:Xn;globalThis.immersiveTranslateBrowserAPI=Yu;function Bu(){let e,u="pending",t=new Promise((a,n)=>{e={async resolve(r){await r,u="fulfilled",a(r)},reject(r){u="rejected",n(r)}}});return Object.defineProperty(t,"state",{get:()=>u}),Object.assign(t,e)}function T0(e,u={}){let{signal:t,persistent:a}=u;return t?.aborted?Promise.reject(new DOMException("Delay was aborted.","AbortError")):new Promise((n,r)=>{let o=()=>{clearTimeout(l),r(new DOMException("Delay was aborted.","AbortError"))},l=setTimeout(()=>{t?.removeEventListener("abort",o),n()},e);if(t?.addEventListener("abort",o,{once:!0}),a===!1)try{Deno.unrefTimer(l)}catch(c){if(!(c instanceof ReferenceError))throw c}})}var St=class{#e=0;#u=[];#t=[];#a=Bu();add(u){++this.#e,this.#n(u[Symbol.asyncIterator]())}async#n(u){try{let{value:t,done:a}=await u.next();a?--this.#e:this.#u.push({iterator:u,value:t})}catch(t){this.#t.push(t)}this.#a.resolve()}async*iterate(){for(;this.#e>0;){await this.#a;for(let u=0;u<this.#u.length;u++){let{iterator:t,value:a}=this.#u[u];yield a,this.#n(t)}if(this.#t.length){for(let u of this.#t)throw u;this.#t.length=0}this.#u.length=0,this.#a=Bu()}}[Symbol.asyncIterator](){return this.iterate()}};var Ke={};Wn(Ke,{bgBlack:()=>Tr,bgBlue:()=>Br,bgBrightBlack:()=>Pr,bgBrightBlue:()=>Or,bgBrightCyan:()=>Nr,bgBrightGreen:()=>Ir,bgBrightMagenta:()=>zr,bgBrightRed:()=>Rr,bgBrightWhite:()=>Ur,bgBrightYellow:()=>jr,bgCyan:()=>_r,bgGreen:()=>Fr,bgMagenta:()=>Mr,bgRed:()=>vr,bgRgb24:()=>Kr,bgRgb8:()=>Wr,bgWhite:()=>Lr,bgYellow:()=>Sr,black:()=>cr,blue:()=>pr,bold:()=>ar,brightBlack:()=>_t,brightBlue:()=>Ar,brightCyan:()=>kr,brightGreen:()=>yr,brightMagenta:()=>wr,brightRed:()=>Cr,brightWhite:()=>Dr,brightYellow:()=>xr,cyan:()=>fr,dim:()=>nr,getColorEnabled:()=>ur,gray:()=>Er,green:()=>mr,hidden:()=>sr,inverse:()=>or,italic:()=>rr,magenta:()=>hr,red:()=>dr,reset:()=>tr,rgb24:()=>Hr,rgb8:()=>qr,setColorEnabled:()=>er,strikethrough:()=>lr,stripColor:()=>Vr,underline:()=>ir,white:()=>br,yellow:()=>gr});var{Deno:Bt}=globalThis,Mt=typeof Bt?.noColor=="boolean"?Bt.noColor:!0,v0=!Mt;function er(e){Mt||(v0=e)}function ur(){return v0}function O(e,u){return{open:`\x1B[${e.join(";")}m`,close:`\x1B[${u}m`,regexp:new RegExp(`\\x1b\\[${u}m`,"g")}}function z(e,u){return v0?`${u.open}${e.replace(u.regexp,u.open)}${u.close}`:e}function tr(e){return z(e,O([0],0))}function ar(e){return z(e,O([1],22))}function nr(e){return z(e,O([2],22))}function rr(e){return z(e,O([3],23))}function ir(e){return z(e,O([4],24))}function or(e){return z(e,O([7],27))}function sr(e){return z(e,O([8],28))}function lr(e){return z(e,O([9],29))}function cr(e){return z(e,O([30],39))}function dr(e){return z(e,O([31],39))}function mr(e){return z(e,O([32],39))}function gr(e){return z(e,O([33],39))}function pr(e){return z(e,O([34],39))}function hr(e){return z(e,O([35],39))}function fr(e){return z(e,O([36],39))}function br(e){return z(e,O([37],39))}function Er(e){return _t(e)}function _t(e){return z(e,O([90],39))}function Cr(e){return z(e,O([91],39))}function yr(e){return z(e,O([92],39))}function xr(e){return z(e,O([93],39))}function Ar(e){return z(e,O([94],39))}function wr(e){return z(e,O([95],39))}function kr(e){return z(e,O([96],39))}function Dr(e){return z(e,O([97],39))}function Tr(e){return z(e,O([40],49))}function vr(e){return z(e,O([41],49))}function Fr(e){return z(e,O([42],49))}function Sr(e){return z(e,O([43],49))}function Br(e){return z(e,O([44],49))}function Mr(e){return z(e,O([45],49))}function _r(e){return z(e,O([46],49))}function Lr(e){return z(e,O([47],49))}function Pr(e){return z(e,O([100],49))}function Rr(e){return z(e,O([101],49))}function Ir(e){return z(e,O([102],49))}function jr(e){return z(e,O([103],49))}function Or(e){return z(e,O([104],49))}function zr(e){return z(e,O([105],49))}function Nr(e){return z(e,O([106],49))}function Ur(e){return z(e,O([107],49))}function nu(e,u=255,t=0){return Math.trunc(Math.max(Math.min(e,u),t))}function qr(e,u){return z(e,O([38,5,nu(u)],39))}function Wr(e,u){return z(e,O([48,5,nu(u)],49))}function Hr(e,u){return typeof u=="number"?z(e,O([38,2,u>>16&255,u>>8&255,u&255],39)):z(e,O([38,2,nu(u.r),nu(u.g),nu(u.b)],39))}function Kr(e,u){return typeof u=="number"?z(e,O([48,2,u>>16&255,u>>8&255,u&255],49)):z(e,O([48,2,nu(u.r),nu(u.g),nu(u.b)],49))}var Gr=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function Vr(e){return e.replace(Gr,"")}var F0=class extends Error{constructor(u,t){super(`Exceeded max retry count (${t})`),this.name="RetryError",this.cause=u}},$r={multiplier:2,maxTimeout:6e4,maxAttempts:5,minTimeout:1e3};async function S0(e,u){let t={...$r,...u};if(t.maxTimeout>=0&&t.minTimeout>t.maxTimeout)throw new RangeError("minTimeout is greater than maxTimeout");let a=t.minTimeout,n;for(let r=0;r<t.maxAttempts;r++)try{return await e()}catch(o){await new Promise(i=>setTimeout(i,a)),a*=t.multiplier,a=Math.max(a,t.minTimeout),t.maxTimeout>=0&&(a=Math.min(a,t.maxTimeout)),n=o}throw new F0(n,t.maxAttempts)}var vs=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var Ju=globalThis||(typeof window<"u"?window:self),Jr=Object.create,M0=Object.defineProperty,Zr=Object.getOwnPropertyDescriptor,Qr=Object.getOwnPropertyNames,Xr=Object.getPrototypeOf,ei=Object.prototype.hasOwnProperty,ui=(e,u)=>()=>(u||e((u={exports:{}}).exports,u),u.exports),ti=(e,u)=>{for(var t in u)M0(e,t,{get:u[t],enumerable:!0})},B0=(e,u,t,a)=>{if(u&&typeof u=="object"||typeof u=="function")for(let n of Qr(u))!ei.call(e,n)&&n!==t&&M0(e,n,{get:()=>u[n],enumerable:!(a=Zr(u,n))||a.enumerable});return e},ai=(e,u,t)=>(B0(e,u,"default"),t&&B0(t,u,"default")),Pt=(e,u,t)=>(t=e!=null?Jr(Xr(e)):{},B0(u||!e||!e.__esModule?M0(t,"default",{value:e,enumerable:!0}):t,e)),Rt=ui((e,u)=>{var t="Expected a function",a=NaN,n="[object Symbol]",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,d=typeof Ju=="object"&&Ju&&Ju.Object===Object&&Ju,f=typeof self=="object"&&self&&self.Object===Object&&self,S=d||f||Function("return this")(),T=Object.prototype,F=T.toString,G=Math.max,Z=Math.min,m=function(){return S.Date.now()};function Te(x,B,k){var $,W,D,y,L,re,me=0,te=!1,X=!1,Ve=!0;if(typeof x!="function")throw new TypeError(t);B=E(B)||0,Q(k)&&(te=!!k.leading,X="maxWait"in k,D=X?G(E(k.maxWait)||0,B):D,Ve="trailing"in k?!!k.trailing:Ve);function ne(j){var U=$,V=W;return $=W=void 0,me=j,y=x.apply(V,U),y}function h(j){return me=j,L=setTimeout(J,B),te?ne(j):y}function v(j){var U=j-re,V=j-me,ee=B-U;return X?Z(ee,D-V):ee}function M(j){var U=j-re,V=j-me;return re===void 0||U>=B||U<0||X&&V>=D}function J(){var j=m();if(M(j))return I(j);L=setTimeout(J,v(j))}function I(j){return L=void 0,Ve&&$?ne(j):($=W=void 0,y)}function le(){L!==void 0&&clearTimeout(L),me=0,$=re=W=L=void 0}function Ee(){return L===void 0?y:I(m())}function pe(){var j=m(),U=M(j);if($=arguments,W=this,re=j,U){if(L===void 0)return h(re);if(X)return L=setTimeout(J,B),ne(re)}return L===void 0&&(L=setTimeout(J,B)),y}return pe.cancel=le,pe.flush=Ee,pe}function q(x,B,k){var $=!0,W=!0;if(typeof x!="function")throw new TypeError(t);return Q(k)&&($="leading"in k?!!k.leading:$,W="trailing"in k?!!k.trailing:W),Te(x,B,{leading:$,maxWait:B,trailing:W})}function Q(x){var B=typeof x;return!!x&&(B=="object"||B=="function")}function be(x){return!!x&&typeof x=="object"}function w(x){return typeof x=="symbol"||be(x)&&F.call(x)==n}function E(x){if(typeof x=="number")return x;if(w(x))return a;if(Q(x)){var B=typeof x.valueOf=="function"?x.valueOf():x;x=Q(B)?B+"":B}if(typeof x!="string")return x===0?x:+x;x=x.replace(r,"");var k=i.test(x);return k||l.test(x)?c(x.slice(2),k?2:8):o.test(x)?a:+x}u.exports=q}),It={};ti(It,{default:()=>_0});var ni=Pt(Rt());ai(It,Pt(Rt()));var{default:Lt,...ri}=ni,_0=Lt!==void 0?Lt:ri;var ii=Object.create,P0=Object.defineProperty,oi=Object.getOwnPropertyDescriptor,si=Object.getOwnPropertyNames,li=Object.getPrototypeOf,ci=Object.prototype.hasOwnProperty,di=(e,u)=>()=>(u||e((u={exports:{}}).exports,u),u.exports),mi=(e,u)=>{for(var t in u)P0(e,t,{get:u[t],enumerable:!0})},L0=(e,u,t,a)=>{if(u&&typeof u=="object"||typeof u=="function")for(let n of si(u))!ci.call(e,n)&&n!==t&&P0(e,n,{get:()=>u[n],enumerable:!(a=oi(u,n))||a.enumerable});return e},gi=(e,u,t)=>(L0(e,u,"default"),t&&L0(t,u,"default")),Ot=(e,u,t)=>(t=e!=null?ii(li(e)):{},L0(u||!e||!e.__esModule?P0(t,"default",{value:e,enumerable:!0}):t,e)),zt=di((e,u)=>{(function(t,a){typeof e=="object"&&typeof u=="object"?u.exports=a():typeof define=="function"&&define.amd?define([],a):typeof e=="object"?e.notie=a():t.notie=a()})(e,function(){return function(t){function a(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,a),o.l=!0,o.exports}var n={};return a.m=t,a.c=n,a.i=function(r){return r},a.d=function(r,o,i){a.o(r,o)||Object.defineProperty(r,o,{configurable:!1,enumerable:!0,get:i})},a.n=function(r){var o=r&&r.__esModule?function(){return r.default}:function(){return r};return a.d(o,"a",o),o},a.o=function(r,o){return Object.prototype.hasOwnProperty.call(r,o)},a.p="",a(a.s=1)}([function(t,a){t.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},function(t,a,n){"use strict";(function(r){var o,i,l,c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d};(function(d,f){c(a)==="object"&&c(r)==="object"?r.exports=f():(i=[],o=f,l=typeof o=="function"?o.apply(a,i):o,l!==void 0&&(r.exports=l))})(void 0,function(){return function(d){function f(T){if(S[T])return S[T].exports;var F=S[T]={i:T,l:!1,exports:{}};return d[T].call(F.exports,F,F.exports,f),F.l=!0,F.exports}var S={};return f.m=d,f.c=S,f.i=function(T){return T},f.d=function(T,F,G){f.o(T,F)||Object.defineProperty(T,F,{configurable:!1,enumerable:!0,get:G})},f.n=function(T){var F=T&&T.__esModule?function(){return T.default}:function(){return T};return f.d(F,"a",F),F},f.o=function(T,F){return Object.prototype.hasOwnProperty.call(T,F)},f.p="",f(f.s=0)}([function(d,f,S){function T(h,v){var M={};for(var J in h)v.indexOf(J)>=0||Object.prototype.hasOwnProperty.call(h,J)&&(M[J]=h[J]);return M}Object.defineProperty(f,"__esModule",{value:!0});var F=typeof Symbol=="function"&&c(Symbol.iterator)==="symbol"?function(h){return typeof h>"u"?"undefined":c(h)}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h>"u"?"undefined":c(h)},G=Object.assign||function(h){for(var v=1;v<arguments.length;v++){var M=arguments[v];for(var J in M)Object.prototype.hasOwnProperty.call(M,J)&&(h[J]=M[J])}return h},Z={top:"top",bottom:"bottom"},m={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:Z.top,force:Z.top,confirm:Z.top,input:Z.top,select:Z.bottom,date:Z.top}},Te=f.setOptions=function(h){m=G({},m,h,{classes:G({},m.classes,h.classes),ids:G({},m.ids,h.ids),positions:G({},m.positions,h.positions)})},q=function(){return new Promise(function(h){return setTimeout(h,0)})},Q=function(h){return new Promise(function(v){return setTimeout(v,1e3*h)})},be=function(){document.activeElement&&document.activeElement.blur()},w=function(){var h="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(v){var M=16*Math.random()|0,J=v==="x"?M:3&M|8;return J.toString(16)});return"notie-"+h},E={1:m.classes.backgroundSuccess,success:m.classes.backgroundSuccess,2:m.classes.backgroundWarning,warning:m.classes.backgroundWarning,3:m.classes.backgroundError,error:m.classes.backgroundError,4:m.classes.backgroundInfo,info:m.classes.backgroundInfo,5:m.classes.backgroundNeutral,neutral:m.classes.backgroundNeutral},x=function(){return m.transitionSelector+" "+m.transitionDuration+"s "+m.transitionCurve},B=function(h){return h.keyCode===13},k=function(h){return h.keyCode===27},$=function(h,v){h.classList.add(m.classes.container),h.style[v]="-10000px",document.body.appendChild(h),h.style[v]="-"+h.offsetHeight+"px",h.listener&&window.addEventListener("keydown",h.listener),q().then(function(){h.style.transition=x(),h.style[v]=0})},W=function(h,v){var M=document.getElementById(h);M&&(M.style[v]="-"+M.offsetHeight+"px",M.listener&&window.removeEventListener("keydown",M.listener),Q(m.transitionDuration).then(function(){M.parentNode&&M.parentNode.removeChild(M)}))},D=function(h,v){var M=document.createElement("div");M.id=m.ids.overlay,M.classList.add(m.classes.overlay),M.classList.add(m.classes.backgroundOverlay),M.style.opacity=0,h&&m.overlayClickDismiss&&(M.onclick=function(){W(h.id,v),y()}),document.body.appendChild(M),q().then(function(){M.style.transition=x(),M.style.opacity=m.overlayOpacity})},y=function(){var h=document.getElementById(m.ids.overlay);h.style.opacity=0,Q(m.transitionDuration).then(function(){h.parentNode&&h.parentNode.removeChild(h)})},L=f.hideAlerts=function(h){var v=document.getElementsByClassName(m.classes.alert);if(v.length){for(var M=0;M<v.length;M++){var J=v[M];W(J.id,J.position)}h&&Q(m.transitionDuration).then(function(){return h()})}},re=f.alert=function(h){var v=h.type,M=v===void 0?4:v,J=h.text,I=h.time,le=I===void 0?m.alertTime:I,Ee=h.stay,pe=Ee!==void 0&&Ee,j=h.position,U=j===void 0?m.positions.alert||U.top:j;be(),L();var V=document.createElement("div"),ee=w();V.id=ee,V.position=U,V.classList.add(m.classes.textbox),V.classList.add(E[M]),V.classList.add(m.classes.alert),V.innerHTML='<div class="'+m.classes.textboxInner+'">'+J+"</div>",V.onclick=function(){return W(ee,U)},V.listener=function(_){(B(_)||k(_))&&L()},$(V,U),le&&le<1&&(le=1),!pe&&le&&Q(le).then(function(){return W(ee,U)})},me=f.force=function(h,v){var M=h.type,J=M===void 0?5:M,I=h.text,le=h.buttonText,Ee=le===void 0?"OK":le,pe=h.callback,j=h.position,U=j===void 0?m.positions.force||U.top:j;be(),L();var V=document.createElement("div"),ee=w();V.id=ee;var _=document.createElement("div");_.classList.add(m.classes.textbox),_.classList.add(m.classes.backgroundInfo),_.innerHTML='<div class="'+m.classes.textboxInner+'">'+I+"</div>";var Y=document.createElement("div");Y.classList.add(m.classes.button),Y.classList.add(E[J]),Y.innerHTML=Ee,Y.onclick=function(){W(ee,U),y(),pe?pe():v&&v()},V.appendChild(_),V.appendChild(Y),V.listener=function(ce){B(ce)&&Y.click()},$(V,U),D()},te=f.confirm=function(h,v,M){var J=h.text,I=h.submitText,le=I===void 0?"Yes":I,Ee=h.cancelText,pe=Ee===void 0?"Cancel":Ee,j=h.submitCallback,U=h.cancelCallback,V=h.position,ee=V===void 0?m.positions.confirm||ee.top:V;be(),L();var _=document.createElement("div"),Y=w();_.id=Y;var ce=document.createElement("div");ce.classList.add(m.classes.textbox),ce.classList.add(m.classes.backgroundInfo),ce.innerHTML='<div class="'+m.classes.textboxInner+'">'+J+"</div>";var ie=document.createElement("div");ie.classList.add(m.classes.button),ie.classList.add(m.classes.elementHalf),ie.classList.add(m.classes.backgroundSuccess),ie.innerHTML=le,ie.onclick=function(){W(Y,ee),y(),j?j():v&&v()};var R=document.createElement("div");R.classList.add(m.classes.button),R.classList.add(m.classes.elementHalf),R.classList.add(m.classes.backgroundError),R.innerHTML=pe,R.onclick=function(){W(Y,ee),y(),U?U():M&&M()},_.appendChild(ce),_.appendChild(ie),_.appendChild(R),_.listener=function(xe){B(xe)?ie.click():k(xe)&&R.click()},$(_,ee),D(_,ee)},X=function(h,v,M){var J=h.text,I=h.submitText,le=I===void 0?"Submit":I,Ee=h.cancelText,pe=Ee===void 0?"Cancel":Ee,j=h.submitCallback,U=h.cancelCallback,V=h.position,ee=V===void 0?m.positions.input||ee.top:V,_=T(h,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);be(),L();var Y=document.createElement("div"),ce=w();Y.id=ce;var ie=document.createElement("div");ie.classList.add(m.classes.textbox),ie.classList.add(m.classes.backgroundInfo),ie.innerHTML='<div class="'+m.classes.textboxInner+'">'+J+"</div>";var R=document.createElement("input");R.classList.add(m.classes.inputField),R.setAttribute("autocapitalize",_.autocapitalize||"none"),R.setAttribute("autocomplete",_.autocomplete||"off"),R.setAttribute("autocorrect",_.autocorrect||"off"),R.setAttribute("autofocus",_.autofocus||"true"),R.setAttribute("inputmode",_.inputmode||"verbatim"),R.setAttribute("max",_.max||""),R.setAttribute("maxlength",_.maxlength||""),R.setAttribute("min",_.min||""),R.setAttribute("minlength",_.minlength||""),R.setAttribute("placeholder",_.placeholder||""),R.setAttribute("spellcheck",_.spellcheck||"default"),R.setAttribute("step",_.step||"any"),R.setAttribute("type",_.type||"text"),R.value=_.value||"",_.allowed&&(R.oninput=function(){var ge=void 0;if(Array.isArray(_.allowed)){for(var he="",Pe=_.allowed,He=0;He<Pe.length;He++)Pe[He]==="an"?he+="0-9a-zA-Z":Pe[He]==="a"?he+="a-zA-Z":Pe[He]==="n"&&(he+="0-9"),Pe[He]==="s"&&(he+=" ");ge=new RegExp("[^"+he+"]","g")}else F(_.allowed)==="object"&&(ge=_.allowed);R.value=R.value.replace(ge,"")});var xe=document.createElement("div");xe.classList.add(m.classes.button),xe.classList.add(m.classes.elementHalf),xe.classList.add(m.classes.backgroundSuccess),xe.innerHTML=le,xe.onclick=function(){W(ce,ee),y(),j?j(R.value):v&&v(R.value)};var Le=document.createElement("div");Le.classList.add(m.classes.button),Le.classList.add(m.classes.elementHalf),Le.classList.add(m.classes.backgroundError),Le.innerHTML=pe,Le.onclick=function(){W(ce,ee),y(),U?U(R.value):M&&M(R.value)},Y.appendChild(ie),Y.appendChild(R),Y.appendChild(xe),Y.appendChild(Le),Y.listener=function(ge){B(ge)?xe.click():k(ge)&&Le.click()},$(Y,ee),R.focus(),D(Y,ee)};f.input=X;var Ve=f.select=function(h,v){var M=h.text,J=h.cancelText,I=J===void 0?"Cancel":J,le=h.cancelCallback,Ee=h.choices,pe=h.position,j=pe===void 0?m.positions.select||j.top:pe;be(),L();var U=document.createElement("div"),V=w();U.id=V;var ee=document.createElement("div");ee.classList.add(m.classes.textbox),ee.classList.add(m.classes.backgroundInfo),ee.innerHTML='<div class="'+m.classes.textboxInner+'">'+M+"</div>",U.appendChild(ee),Ee.forEach(function(Y,ce){var ie=Y.type,R=ie===void 0?1:ie,xe=Y.text,Le=Y.handler,ge=document.createElement("div");ge.classList.add(E[R]),ge.classList.add(m.classes.button),ge.classList.add(m.classes.selectChoice);var he=Ee[ce+1];he&&!he.type&&(he.type=1),he&&he.type===R&&ge.classList.add(m.classes.selectChoiceRepeated),ge.innerHTML=xe,ge.onclick=function(){W(V,j),y(),Le()},U.appendChild(ge)});var _=document.createElement("div");_.classList.add(m.classes.backgroundNeutral),_.classList.add(m.classes.button),_.innerHTML=I,_.onclick=function(){W(V,j),y(),le?le():v&&v()},U.appendChild(_),U.listener=function(Y){k(Y)&&_.click()},$(U,j),D(U,j)},ne=f.date=function(h,v,M){var J=h.value,I=J===void 0?new Date:J,le=h.submitText,Ee=le===void 0?"OK":le,pe=h.cancelText,j=pe===void 0?"Cancel":pe,U=h.submitCallback,V=h.cancelCallback,ee=h.position,_=ee===void 0?m.positions.date||_.top:ee;be(),L();var Y="&#9662",ce=document.createElement("div"),ie=document.createElement("div"),R=document.createElement("div"),xe=function(de){ce.innerHTML=m.dateMonths[de.getMonth()],ie.innerHTML=de.getDate(),R.innerHTML=de.getFullYear()},Le=function(de){var ae=new Date(I.getFullYear(),I.getMonth()+1,0).getDate(),Ue=de.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(Ue)>ae&&(Ue=ae.toString()),de.target.textContent=Ue,Number(Ue)<1&&(Ue="1"),I.setDate(Number(Ue))},ge=function(de){var ae=de.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);de.target.textContent=ae,I.setFullYear(Number(ae))},he=function(de){xe(I)},Pe=function(de){var ae=new Date(I.getFullYear(),I.getMonth()+de+1,0).getDate();I.getDate()>ae&&I.setDate(ae),I.setMonth(I.getMonth()+de),xe(I)},He=function(de){I.setDate(I.getDate()+de),xe(I)},Su=function(de){var ae=I.getFullYear()+de;ae<0?I.setFullYear(0):I.setFullYear(I.getFullYear()+de),xe(I)},Ze=document.createElement("div"),lu=w();Ze.id=lu;var bu=document.createElement("div");bu.classList.add(m.classes.backgroundInfo);var ve=document.createElement("div");ve.classList.add(m.classes.dateSelectorInner);var $e=document.createElement("div");$e.classList.add(m.classes.button),$e.classList.add(m.classes.elementThird),$e.classList.add(m.classes.dateSelectorUp),$e.innerHTML=Y;var Fe=document.createElement("div");Fe.classList.add(m.classes.button),Fe.classList.add(m.classes.elementThird),Fe.classList.add(m.classes.dateSelectorUp),Fe.innerHTML=Y;var Ne=document.createElement("div");Ne.classList.add(m.classes.button),Ne.classList.add(m.classes.elementThird),Ne.classList.add(m.classes.dateSelectorUp),Ne.innerHTML=Y,ce.classList.add(m.classes.element),ce.classList.add(m.classes.elementThird),ce.innerHTML=m.dateMonths[I.getMonth()],ie.classList.add(m.classes.element),ie.classList.add(m.classes.elementThird),ie.setAttribute("contentEditable",!0),ie.addEventListener("input",Le),ie.addEventListener("blur",he),ie.innerHTML=I.getDate(),R.classList.add(m.classes.element),R.classList.add(m.classes.elementThird),R.setAttribute("contentEditable",!0),R.addEventListener("input",ge),R.addEventListener("blur",he),R.innerHTML=I.getFullYear();var eu=document.createElement("div");eu.classList.add(m.classes.button),eu.classList.add(m.classes.elementThird),eu.innerHTML=Y;var uu=document.createElement("div");uu.classList.add(m.classes.button),uu.classList.add(m.classes.elementThird),uu.innerHTML=Y;var cu=document.createElement("div");cu.classList.add(m.classes.button),cu.classList.add(m.classes.elementThird),cu.innerHTML=Y,$e.onclick=function(){return Pe(1)},Fe.onclick=function(){return He(1)},Ne.onclick=function(){return Su(1)},eu.onclick=function(){return Pe(-1)},uu.onclick=function(){return He(-1)},cu.onclick=function(){return Su(-1)};var Re=document.createElement("div");Re.classList.add(m.classes.button),Re.classList.add(m.classes.elementHalf),Re.classList.add(m.classes.backgroundSuccess),Re.innerHTML=Ee,Re.onclick=function(){W(lu,_),y(),U?U(I):v&&v(I)};var tu=document.createElement("div");tu.classList.add(m.classes.button),tu.classList.add(m.classes.elementHalf),tu.classList.add(m.classes.backgroundError),tu.innerHTML=j,tu.onclick=function(){W(lu,_),y(),V?V(I):M&&M(I)},ve.appendChild($e),ve.appendChild(Fe),ve.appendChild(Ne),ve.appendChild(ce),ve.appendChild(ie),ve.appendChild(R),ve.appendChild(eu),ve.appendChild(uu),ve.appendChild(cu),bu.appendChild(ve),Ze.appendChild(bu),Ze.appendChild(Re),Ze.appendChild(tu),Ze.listener=function(de){B(de)?Re.click():k(de)&&tu.click()},$(Ze,_),D(Ze,_)};f.default={alert:re,force:me,confirm:te,input:X,select:Ve,date:ne,setOptions:Te,hideAlerts:L}}])})}).call(a,n(0)(t))}])})}),Nt={};mi(Nt,{default:()=>Zu});var pi=Ot(zt());gi(Nt,Ot(zt()));var{default:jt,...hi}=pi,Zu=jt!==void 0?jt:hi;var R0=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function I0(e,u,t,a){e.addEventListener?e.addEventListener(u,t,a):e.attachEvent&&e.attachEvent("on".concat(u),function(){t(window.event)})}function Kt(e,u){for(var t=u.slice(0,u.length-1),a=0;a<t.length;a++)t[a]=e[t[a].toLowerCase()];return t}function Gt(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var u=e.split(","),t=u.lastIndexOf("");t>=0;)u[t-1]+=",",u.splice(t,1),t=u.lastIndexOf("");return u}function fi(e,u){for(var t=e.length>=u.length?e:u,a=e.length>=u.length?u:e,n=!0,r=0;r<t.length;r++)a.indexOf(t[r])===-1&&(n=!1);return n}var _u={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":R0?173:189,"=":R0?61:187,";":R0?59:186,"'":222,"[":219,"]":221,"\\":220},Xe={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},z0={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},ke={16:!1,18:!1,17:!1,91:!1},Ce={};for(Mu=1;Mu<20;Mu++)_u["f".concat(Mu)]=111+Mu;var Mu,se=[],Ut=!1,Vt="all",$t=[],Xu=function(e){return _u[e.toLowerCase()]||Xe[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},bi=function(e){return Object.keys(_u).find(function(u){return _u[u]===e})},Ei=function(e){return Object.keys(Xe).find(function(u){return Xe[u]===e})};function Yt(e){Vt=e||"all"}function Lu(){return Vt||"all"}function Ci(){return se.slice(0)}function yi(){return se.map(function(e){return bi(e)||Ei(e)||String.fromCharCode(e)})}function xi(e){var u=e.target||e.srcElement,t=u.tagName,a=!0;return(u.isContentEditable||(t==="INPUT"||t==="TEXTAREA"||t==="SELECT")&&!u.readOnly)&&(a=!1),a}function Ai(e){return typeof e=="string"&&(e=Xu(e)),se.indexOf(e)!==-1}function wi(e,u){var t,a;e||(e=Lu());for(var n in Ce)if(Object.prototype.hasOwnProperty.call(Ce,n))for(t=Ce[n],a=0;a<t.length;)t[a].scope===e?t.splice(a,1):a++;Lu()===e&&Yt(u||"all")}function ki(e){var u=e.keyCode||e.which||e.charCode,t=se.indexOf(u);if(t>=0&&se.splice(t,1),e.key&&e.key.toLowerCase()==="meta"&&se.splice(0,se.length),(u===93||u===224)&&(u=91),u in ke){ke[u]=!1;for(var a in Xe)Xe[a]===u&&(Qe[a]=!1)}}function Di(e){if(typeof e>"u")Object.keys(Ce).forEach(function(o){return delete Ce[o]});else if(Array.isArray(e))e.forEach(function(o){o.key&&j0(o)});else if(typeof e=="object")e.key&&j0(e);else if(typeof e=="string"){for(var u=arguments.length,t=new Array(u>1?u-1:0),a=1;a<u;a++)t[a-1]=arguments[a];var n=t[0],r=t[1];typeof n=="function"&&(r=n,n=""),j0({key:e,scope:n,method:r,splitKey:"+"})}}var j0=function(e){var u=e.key,t=e.scope,a=e.method,n=e.splitKey,r=n===void 0?"+":n,o=Gt(u);o.forEach(function(i){var l=i.split(r),c=l.length,d=l[c-1],f=d==="*"?"*":Xu(d);if(Ce[f]){t||(t=Lu());var S=c>1?Kt(Xe,l):[];Ce[f]=Ce[f].filter(function(T){var F=a?T.method===a:!0;return!(F&&T.scope===t&&fi(T.mods,S))})}})};function qt(e,u,t,a){if(u.element===a){var n;if(u.scope===t||u.scope==="all"){n=u.mods.length>0;for(var r in ke)Object.prototype.hasOwnProperty.call(ke,r)&&(!ke[r]&&u.mods.indexOf(+r)>-1||ke[r]&&u.mods.indexOf(+r)===-1)&&(n=!1);(u.mods.length===0&&!ke[16]&&!ke[18]&&!ke[17]&&!ke[91]||n||u.shortcut==="*")&&u.method(e,u)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function Wt(e,u){var t=Ce["*"],a=e.keyCode||e.which||e.charCode;if(Qe.filter.call(this,e)){if((a===93||a===224)&&(a=91),se.indexOf(a)===-1&&a!==229&&se.push(a),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(F){var G=z0[F];e[F]&&se.indexOf(G)===-1?se.push(G):!e[F]&&se.indexOf(G)>-1?se.splice(se.indexOf(G),1):F==="metaKey"&&e[F]&&se.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(se=se.slice(se.indexOf(G))))}),a in ke){ke[a]=!0;for(var n in Xe)Xe[n]===a&&(Qe[n]=!0);if(!t)return}for(var r in ke)Object.prototype.hasOwnProperty.call(ke,r)&&(ke[r]=e[z0[r]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(se.indexOf(17)===-1&&se.push(17),se.indexOf(18)===-1&&se.push(18),ke[17]=!0,ke[18]=!0);var o=Lu();if(t)for(var i=0;i<t.length;i++)t[i].scope===o&&(e.type==="keydown"&&t[i].keydown||e.type==="keyup"&&t[i].keyup)&&qt(e,t[i],o,u);if(a in Ce){for(var l=0;l<Ce[a].length;l++)if((e.type==="keydown"&&Ce[a][l].keydown||e.type==="keyup"&&Ce[a][l].keyup)&&Ce[a][l].key){for(var c=Ce[a][l],d=c.splitKey,f=c.key.split(d),S=[],T=0;T<f.length;T++)S.push(Xu(f[T]));S.sort().join("")===se.sort().join("")&&qt(e,c,o,u)}}}}function Ti(e){return $t.indexOf(e)>-1}function Qe(e,u,t){se=[];var a=Gt(e),n=[],r="all",o=document,i=0,l=!1,c=!0,d="+",f=!1;for(t===void 0&&typeof u=="function"&&(t=u),Object.prototype.toString.call(u)==="[object Object]"&&(u.scope&&(r=u.scope),u.element&&(o=u.element),u.keyup&&(l=u.keyup),u.keydown!==void 0&&(c=u.keydown),u.capture!==void 0&&(f=u.capture),typeof u.splitKey=="string"&&(d=u.splitKey)),typeof u=="string"&&(r=u);i<a.length;i++)e=a[i].split(d),n=[],e.length>1&&(n=Kt(Xe,e)),e=e[e.length-1],e=e==="*"?"*":Xu(e),e in Ce||(Ce[e]=[]),Ce[e].push({keyup:l,keydown:c,scope:r,mods:n,shortcut:a[i],method:t,key:a[i],splitKey:d,element:o});typeof o<"u"&&!Ti(o)&&window&&($t.push(o),I0(o,"keydown",function(S){Wt(S,o)},f),Ut||(Ut=!0,I0(window,"focus",function(){se=[]},f)),I0(o,"keyup",function(S){Wt(S,o),ki(S)},f))}function vi(e){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(Ce).forEach(function(t){var a=Ce[t].filter(function(n){return n.scope===u&&n.shortcut===e});a.forEach(function(n){n&&n.method&&n.method()})})}var O0={getPressedKeyString:yi,setScope:Yt,getScope:Lu,deleteScope:wi,getPressedKeyCodes:Ci,isPressed:Ai,filter:xi,trigger:vi,unbind:Di,keyMap:_u,modifier:Xe,modifierMap:z0};for(Qu in O0)Object.prototype.hasOwnProperty.call(O0,Qu)&&(Qe[Qu]=O0[Qu]);var Qu;typeof document<"u"&&(Ht=window.hotkeys,Qe.noConflict=function(e){return e&&window.hotkeys===Qe&&(window.hotkeys=Ht),Qe},window.hotkeys=Qe);var Ht;var Fi=class{#e=performance.now();reset(){this.#e=performance.now()}stop(e){let u=performance.now(),t=Math.round(u-this.#e);this.#e=u}},Si=class{#e=1;get level(){return this.#e}setLevel(e){switch(e){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...e){this.#e<=0}v(...e){this.#e<=0}info(...e){this.#e<=1}l(...e){this.#e<=1}warn(...e){this.#e<=2}error(...e){this.#e<=3}fatal(...e){this.#e<=4}timing(){return this.level===0?new Fi:{reset:()=>{},stop:()=>{}}}},Qs=new Si,Bi="poegempjloogba",Mi="ension://";var _i="rome-ext";var Xs="ch"+_i+Mi+"cofdb"+Bi+"gkncekinflcnj";var Li={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},Zt={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},fe={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},je={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},ru={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"},p=class{static getFirstMatch(e,u){let t=u.match(e);return t&&t.length>0&&t[1]||""}static getSecondMatch(e,u){let t=u.match(e);return t&&t.length>1&&t[2]||""}static matchAndReturnConst(e,u,t){if(e.test(u))return t}static getWindowsVersionName(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(e){let u=e.split(".").splice(0,2).map(t=>parseInt(t,10)||0);if(u.push(0),u[0]===10)switch(u[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(e){let u=e.split(".").splice(0,2).map(t=>parseInt(t,10)||0);if(u.push(0),!(u[0]===1&&u[1]<5)){if(u[0]===1&&u[1]<6)return"Cupcake";if(u[0]===1&&u[1]>=6)return"Donut";if(u[0]===2&&u[1]<2)return"Eclair";if(u[0]===2&&u[1]===2)return"Froyo";if(u[0]===2&&u[1]>2)return"Gingerbread";if(u[0]===3)return"Honeycomb";if(u[0]===4&&u[1]<1)return"Ice Cream Sandwich";if(u[0]===4&&u[1]<4)return"Jelly Bean";if(u[0]===4&&u[1]>=4)return"KitKat";if(u[0]===5)return"Lollipop";if(u[0]===6)return"Marshmallow";if(u[0]===7)return"Nougat";if(u[0]===8)return"Oreo";if(u[0]===9)return"Pie"}}static getVersionPrecision(e){return e.split(".").length}static compareVersions(e,u,t=!1){let a=p.getVersionPrecision(e),n=p.getVersionPrecision(u),r=Math.max(a,n),o=0,i=p.map([e,u],l=>{let c=r-p.getVersionPrecision(l),d=l+new Array(c+1).join(".0");return p.map(d.split("."),f=>new Array(20-f.length).join("0")+f).reverse()});for(t&&(o=r-Math.min(a,n)),r-=1;r>=o;){if(i[0][r]>i[1][r])return 1;if(i[0][r]===i[1][r]){if(r===o)return 0;r-=1}else if(i[0][r]<i[1][r])return-1}}static map(e,u){let t=[],a;if(Array.prototype.map)return Array.prototype.map.call(e,u);for(a=0;a<e.length;a+=1)t.push(u(e[a]));return t}static find(e,u){let t,a;if(Array.prototype.find)return Array.prototype.find.call(e,u);for(t=0,a=e.length;t<a;t+=1){let n=e[t];if(u(n,t))return n}}static assign(e,...u){let t=e,a,n;if(Object.assign)return Object.assign(e,...u);for(a=0,n=u.length;a<n;a+=1){let r=u[a];typeof r=="object"&&r!==null&&Object.keys(r).forEach(o=>{t[o]=r[o]})}return e}static getBrowserAlias(e){return Li[e]}static getBrowserTypeByAlias(e){return Zt[e]||""}},oe=/version\/(\d+(\.?_?\d+)+)/i,Pi=[{test:[/googlebot/i],describe(e){let u={name:"Googlebot"},t=p.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||p.getFirstMatch(oe,e);return t&&(u.version=t),u}},{test:[/opera/i],describe(e){let u={name:"Opera"},t=p.getFirstMatch(oe,e)||p.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/opr\/|opios/i],describe(e){let u={name:"Opera"},t=p.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||p.getFirstMatch(oe,e);return t&&(u.version=t),u}},{test:[/SamsungBrowser/i],describe(e){let u={name:"Samsung Internet for Android"},t=p.getFirstMatch(oe,e)||p.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/Whale/i],describe(e){let u={name:"NAVER Whale Browser"},t=p.getFirstMatch(oe,e)||p.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/MZBrowser/i],describe(e){let u={name:"MZ Browser"},t=p.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||p.getFirstMatch(oe,e);return t&&(u.version=t),u}},{test:[/focus/i],describe(e){let u={name:"Focus"},t=p.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||p.getFirstMatch(oe,e);return t&&(u.version=t),u}},{test:[/swing/i],describe(e){let u={name:"Swing"},t=p.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||p.getFirstMatch(oe,e);return t&&(u.version=t),u}},{test:[/coast/i],describe(e){let u={name:"Opera Coast"},t=p.getFirstMatch(oe,e)||p.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(e){let u={name:"Opera Touch"},t=p.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||p.getFirstMatch(oe,e);return t&&(u.version=t),u}},{test:[/yabrowser/i],describe(e){let u={name:"Yandex Browser"},t=p.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||p.getFirstMatch(oe,e);return t&&(u.version=t),u}},{test:[/ucbrowser/i],describe(e){let u={name:"UC Browser"},t=p.getFirstMatch(oe,e)||p.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/Maxthon|mxios/i],describe(e){let u={name:"Maxthon"},t=p.getFirstMatch(oe,e)||p.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/epiphany/i],describe(e){let u={name:"Epiphany"},t=p.getFirstMatch(oe,e)||p.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/puffin/i],describe(e){let u={name:"Puffin"},t=p.getFirstMatch(oe,e)||p.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/sleipnir/i],describe(e){let u={name:"Sleipnir"},t=p.getFirstMatch(oe,e)||p.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/k-meleon/i],describe(e){let u={name:"K-Meleon"},t=p.getFirstMatch(oe,e)||p.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/micromessenger/i],describe(e){let u={name:"WeChat"},t=p.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||p.getFirstMatch(oe,e);return t&&(u.version=t),u}},{test:[/qqbrowser/i],describe(e){let u={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},t=p.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||p.getFirstMatch(oe,e);return t&&(u.version=t),u}},{test:[/msie|trident/i],describe(e){let u={name:"Internet Explorer"},t=p.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/\sedg\//i],describe(e){let u={name:"Microsoft Edge"},t=p.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/edg([ea]|ios)/i],describe(e){let u={name:"Microsoft Edge"},t=p.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/vivaldi/i],describe(e){let u={name:"Vivaldi"},t=p.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/seamonkey/i],describe(e){let u={name:"SeaMonkey"},t=p.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/sailfish/i],describe(e){let u={name:"Sailfish"},t=p.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return t&&(u.version=t),u}},{test:[/silk/i],describe(e){let u={name:"Amazon Silk"},t=p.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/phantom/i],describe(e){let u={name:"PhantomJS"},t=p.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/slimerjs/i],describe(e){let u={name:"SlimerJS"},t=p.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(e){let u={name:"BlackBerry"},t=p.getFirstMatch(oe,e)||p.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/(web|hpw)[o0]s/i],describe(e){let u={name:"WebOS Browser"},t=p.getFirstMatch(oe,e)||p.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/bada/i],describe(e){let u={name:"Bada"},t=p.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/tizen/i],describe(e){let u={name:"Tizen"},t=p.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||p.getFirstMatch(oe,e);return t&&(u.version=t),u}},{test:[/qupzilla/i],describe(e){let u={name:"QupZilla"},t=p.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||p.getFirstMatch(oe,e);return t&&(u.version=t),u}},{test:[/firefox|iceweasel|fxios/i],describe(e){let u={name:"Firefox"},t=p.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/electron/i],describe(e){let u={name:"Electron"},t=p.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/MiuiBrowser/i],describe(e){let u={name:"Miui"},t=p.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/chromium/i],describe(e){let u={name:"Chromium"},t=p.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||p.getFirstMatch(oe,e);return t&&(u.version=t),u}},{test:[/chrome|crios|crmo/i],describe(e){let u={name:"Chrome"},t=p.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/GSA/i],describe(e){let u={name:"Google Search"},t=p.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test(e){let u=!e.test(/like android/i),t=e.test(/android/i);return u&&t},describe(e){let u={name:"Android Browser"},t=p.getFirstMatch(oe,e);return t&&(u.version=t),u}},{test:[/playstation 4/i],describe(e){let u={name:"PlayStation 4"},t=p.getFirstMatch(oe,e);return t&&(u.version=t),u}},{test:[/safari|applewebkit/i],describe(e){let u={name:"Safari"},t=p.getFirstMatch(oe,e);return t&&(u.version=t),u}},{test:[/.*/i],describe(e){let u=/^(.*)\/(.*) /,t=/^(.*)\/(.*)[ \t]\((.*)/,a=e.search("\\(")!==-1?t:u;return{name:p.getFirstMatch(a,e),version:p.getSecondMatch(a,e)}}}],Ri=Pi,Ii=[{test:[/Roku\/DVP/],describe(e){let u=p.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:je.Roku,version:u}}},{test:[/windows phone/i],describe(e){let u=p.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:je.WindowsPhone,version:u}}},{test:[/windows /i],describe(e){let u=p.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),t=p.getWindowsVersionName(u);return{name:je.Windows,version:u,versionName:t}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(e){let u={name:je.iOS},t=p.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return t&&(u.version=t),u}},{test:[/macintosh/i],describe(e){let u=p.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),t=p.getMacOSVersionName(u),a={name:je.MacOS,version:u};return t&&(a.versionName=t),a}},{test:[/(ipod|iphone|ipad)/i],describe(e){let u=p.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:je.iOS,version:u}}},{test(e){let u=!e.test(/like android/i),t=e.test(/android/i);return u&&t},describe(e){let u=p.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),t=p.getAndroidVersionName(u),a={name:je.Android,version:u};return t&&(a.versionName=t),a}},{test:[/(web|hpw)[o0]s/i],describe(e){let u=p.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),t={name:je.WebOS};return u&&u.length&&(t.version=u),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(e){let u=p.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||p.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||p.getFirstMatch(/\bbb(\d+)/i,e);return{name:je.BlackBerry,version:u}}},{test:[/bada/i],describe(e){let u=p.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:je.Bada,version:u}}},{test:[/tizen/i],describe(e){let u=p.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:je.Tizen,version:u}}},{test:[/linux/i],describe(){return{name:je.Linux}}},{test:[/CrOS/],describe(){return{name:je.ChromeOS}}},{test:[/PlayStation 4/],describe(e){let u=p.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:je.PlayStation4,version:u}}}],ji=[{test:[/googlebot/i],describe(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe(e){let u=p.getFirstMatch(/(can-l01)/i,e)&&"Nova",t={type:fe.mobile,vendor:"Huawei"};return u&&(t.model=u),t}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe(){return{type:fe.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe(){return{type:fe.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(){return{type:fe.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe(){return{type:fe.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe(){return{type:fe.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe(){return{type:fe.tablet}}},{test(e){let u=e.test(/ipod|iphone/i),t=e.test(/like (ipod|iphone)/i);return u&&!t},describe(e){let u=p.getFirstMatch(/(ipod|iphone)/i,e);return{type:fe.mobile,vendor:"Apple",model:u}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe(){return{type:fe.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe(){return{type:fe.mobile}}},{test(e){return e.getBrowserName(!0)==="blackberry"},describe(){return{type:fe.mobile,vendor:"BlackBerry"}}},{test(e){return e.getBrowserName(!0)==="bada"},describe(){return{type:fe.mobile}}},{test(e){return e.getBrowserName()==="windows phone"},describe(){return{type:fe.mobile,vendor:"Microsoft"}}},{test(e){let u=Number(String(e.getOSVersion()).split(".")[0]);return e.getOSName(!0)==="android"&&u>=3},describe(){return{type:fe.tablet}}},{test(e){return e.getOSName(!0)==="android"},describe(){return{type:fe.mobile}}},{test(e){return e.getOSName(!0)==="macos"},describe(){return{type:fe.desktop,vendor:"Apple"}}},{test(e){return e.getOSName(!0)==="windows"},describe(){return{type:fe.desktop}}},{test(e){return e.getOSName(!0)==="linux"},describe(){return{type:fe.desktop}}},{test(e){return e.getOSName(!0)==="playstation 4"},describe(){return{type:fe.tv}}},{test(e){return e.getOSName(!0)==="roku"},describe(){return{type:fe.tv}}}],Oi=[{test(e){return e.getBrowserName(!0)==="microsoft edge"},describe(e){if(/\sedg\//i.test(e))return{name:ru.Blink};let u=p.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:ru.EdgeHTML,version:u}}},{test:[/trident/i],describe(e){let u={name:ru.Trident},t=p.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test(e){return e.test(/presto/i)},describe(e){let u={name:ru.Presto},t=p.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test(e){let u=e.test(/gecko/i),t=e.test(/like gecko/i);return u&&!t},describe(e){let u={name:ru.Gecko},t=p.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}},{test:[/(apple)?webkit\/537\.36/i],describe(){return{name:ru.Blink}}},{test:[/(apple)?webkit/i],describe(e){let u={name:ru.WebKit},t=p.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return t&&(u.version=t),u}}],zi=class{constructor(e,u=!1){if(e==null||e==="")throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},u!==!0&&this.parse()}getUA(){return this._ua}test(e){return e.test(this._ua)}parseBrowser(){this.parsedResult.browser={};let e=p.find(Ri,u=>{if(typeof u.test=="function")return u.test(this);if(u.test instanceof Array)return u.test.some(t=>this.test(t));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.browser=e.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};let e=p.find(Ii,u=>{if(typeof u.test=="function")return u.test(this);if(u.test instanceof Array)return u.test.some(t=>this.test(t));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.os=e.describe(this.getUA())),this.parsedResult.os}getOSName(e){let{name:u}=this.getOS();return e?String(u).toLowerCase()||"":u||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(e=!1){let{type:u}=this.getPlatform();return e?String(u).toLowerCase()||"":u||""}parsePlatform(){this.parsedResult.platform={};let e=p.find(ji,u=>{if(typeof u.test=="function")return u.test(this);if(u.test instanceof Array)return u.test.some(t=>this.test(t));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.platform=e.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};let e=p.find(Oi,u=>{if(typeof u.test=="function")return u.test(this);if(u.test instanceof Array)return u.test.some(t=>this.test(t));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.engine=e.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return p.assign({},this.parsedResult)}satisfies(e){let u={},t=0,a={},n=0;if(Object.keys(e).forEach(r=>{let o=e[r];typeof o=="string"?(a[r]=o,n+=1):typeof o=="object"&&(u[r]=o,t+=1)}),t>0){let r=Object.keys(u),o=p.find(r,l=>this.isOS(l));if(o){let l=this.satisfies(u[o]);if(l!==void 0)return l}let i=p.find(r,l=>this.isPlatform(l));if(i){let l=this.satisfies(u[i]);if(l!==void 0)return l}}if(n>0){let r=Object.keys(a),o=p.find(r,i=>this.isBrowser(i,!0));if(o!==void 0)return this.compareVersion(a[o])}}isBrowser(e,u=!1){let t=this.getBrowserName().toLowerCase(),a=e.toLowerCase(),n=p.getBrowserTypeByAlias(a);return u&&n&&(a=n.toLowerCase()),a===t}compareVersion(e){let u=[0],t=e,a=!1,n=this.getBrowserVersion();if(typeof n=="string")return e[0]===">"||e[0]==="<"?(t=e.substr(1),e[1]==="="?(a=!0,t=e.substr(2)):u=[],e[0]===">"?u.push(1):u.push(-1)):e[0]==="="?t=e.substr(1):e[0]==="~"&&(a=!0,t=e.substr(1)),u.indexOf(p.compareVersions(n,t,a))>-1}isOS(e){return this.getOSName(!0)===String(e).toLowerCase()}isPlatform(e){return this.getPlatformType(!0)===String(e).toLowerCase()}isEngine(e){return this.getEngineName(!0)===String(e).toLowerCase()}is(e,u=!1){return this.isBrowser(e,u)||this.isOS(e)||this.isPlatform(e)}some(e=[]){return e.some(u=>this.is(u))}},Jt=zi,Ni=class{static getParser(e,u=!1){if(typeof e!="string")throw new Error("UserAgent should be a string");return new Jt(e,u)}static parse(e){return new Jt(e).getResult()}static get BROWSER_MAP(){return Zt}static get ENGINE_MAP(){return ru}static get OS_MAP(){return je}static get PLATFORMS_MAP(){return fe}},e0=Ni;var{entries:ra,setPrototypeOf:Qt,isFrozen:Ui,getPrototypeOf:qi,getOwnPropertyDescriptor:Wi}=Object,{freeze:Oe,seal:Je,create:Hi}=Object,{apply:K0,construct:G0}=typeof Reflect<"u"&&Reflect;K0||(K0=function(e,u,t){return e.apply(u,t)});Oe||(Oe=function(e){return e});Je||(Je=function(e){return e});G0||(G0=function(e,u){return new e(...u)});var Ki=Ge(Array.prototype.forEach),Xt=Ge(Array.prototype.pop),Pu=Ge(Array.prototype.push),a0=Ge(String.prototype.toLowerCase),N0=Ge(String.prototype.toString),Gi=Ge(String.prototype.match),Ye=Ge(String.prototype.replace),Vi=Ge(String.prototype.indexOf),$i=Ge(String.prototype.trim),qe=Ge(RegExp.prototype.test),Ru=Yi(TypeError);function Ge(e){return function(u){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return K0(e,u,a)}}function Yi(e){return function(){for(var u=arguments.length,t=new Array(u),a=0;a<u;a++)t[a]=arguments[a];return G0(e,t)}}function K(e,u,t){var a;t=(a=t)!==null&&a!==void 0?a:a0,Qt&&Qt(e,null);let n=u.length;for(;n--;){let r=u[n];if(typeof r=="string"){let o=t(r);o!==r&&(Ui(u)||(u[n]=o),r=o)}e[r]=!0}return e}function yu(e){let u=Hi(null);for(let[t,a]of ra(e))u[t]=a;return u}function u0(e,u){for(;e!==null;){let a=Wi(e,u);if(a){if(a.get)return Ge(a.get);if(typeof a.value=="function")return Ge(a.value)}e=qi(e)}function t(a){return null}return t}var ea=Oe(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),U0=Oe(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),q0=Oe(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ji=Oe(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),W0=Oe(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Zi=Oe(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ua=Oe(["#text"]),ta=Oe(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),H0=Oe(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),aa=Oe(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),t0=Oe(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Qi=Je(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Xi=Je(/<%[\w\W]*|[\w\W]*%>/gm),eo=Je(/\${[\w\W]*}/gm),uo=Je(/^data-[\-\w.\u00B7-\uFFFF]/),to=Je(/^aria-[\-\w]+$/),ia=Je(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ao=Je(/^(?:\w+script|data):/i),no=Je(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),oa=Je(/^html$/i),na=Object.freeze({__proto__:null,MUSTACHE_EXPR:Qi,ERB_EXPR:Xi,TMPLIT_EXPR:eo,DATA_ATTR:uo,ARIA_ATTR:to,IS_ALLOWED_URI:ia,IS_SCRIPT_OR_DATA:ao,ATTR_WHITESPACE:no,DOCTYPE_NAME:oa}),ro=()=>typeof window>"u"?null:window,io=function(e,u){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let t=null,a="data-tt-policy-suffix";u&&u.hasAttribute(a)&&(t=u.getAttribute(a));let n="dompurify"+(t?"#"+t:"");try{return e.createPolicy(n,{createHTML(r){return r},createScriptURL(r){return r}})}catch{return null}};function sa(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ro(),u=s=>sa(s);if(u.version="3.0.3",u.removed=[],!e||!e.document||e.document.nodeType!==9)return u.isSupported=!1,u;let t=e.document,a=t.currentScript,{document:n}=e,{DocumentFragment:r,HTMLTemplateElement:o,Node:i,Element:l,NodeFilter:c,NamedNodeMap:d=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:f,DOMParser:S,trustedTypes:T}=e,F=l.prototype,G=u0(F,"cloneNode"),Z=u0(F,"nextSibling"),m=u0(F,"childNodes"),Te=u0(F,"parentNode");if(typeof o=="function"){let s=n.createElement("template");s.content&&s.content.ownerDocument&&(n=s.content.ownerDocument)}let q,Q="",{implementation:be,createNodeIterator:w,createDocumentFragment:E,getElementsByTagName:x}=n,{importNode:B}=t,k={};u.isSupported=typeof ra=="function"&&typeof Te=="function"&&be&&be.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:$,ERB_EXPR:W,TMPLIT_EXPR:D,DATA_ATTR:y,ARIA_ATTR:L,IS_SCRIPT_OR_DATA:re,ATTR_WHITESPACE:me}=na,{IS_ALLOWED_URI:te}=na,X=null,Ve=K({},[...ea,...U0,...q0,...W0,...ua]),ne=null,h=K({},[...ta,...H0,...aa,...t0]),v=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),M=null,J=null,I=!0,le=!0,Ee=!1,pe=!0,j=!1,U=!1,V=!1,ee=!1,_=!1,Y=!1,ce=!1,ie=!0,R=!1,xe="user-content-",Le=!0,ge=!1,he={},Pe=null,He=K({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Su=null,Ze=K({},["audio","video","img","source","image","track"]),lu=null,bu=K({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ve="http://www.w3.org/1998/Math/MathML",$e="http://www.w3.org/2000/svg",Fe="http://www.w3.org/1999/xhtml",Ne=Fe,eu=!1,uu=null,cu=K({},[ve,$e,Fe],N0),Re,tu=["application/xhtml+xml","text/html"],de="text/html",ae,Ue=null,jn=n.createElement("form"),pt=function(s){return s instanceof RegExp||s instanceof Function},x0=function(s){if(!(Ue&&Ue===s)){if((!s||typeof s!="object")&&(s={}),s=yu(s),Re=tu.indexOf(s.PARSER_MEDIA_TYPE)===-1?Re=de:Re=s.PARSER_MEDIA_TYPE,ae=Re==="application/xhtml+xml"?N0:a0,X="ALLOWED_TAGS"in s?K({},s.ALLOWED_TAGS,ae):Ve,ne="ALLOWED_ATTR"in s?K({},s.ALLOWED_ATTR,ae):h,uu="ALLOWED_NAMESPACES"in s?K({},s.ALLOWED_NAMESPACES,N0):cu,lu="ADD_URI_SAFE_ATTR"in s?K(yu(bu),s.ADD_URI_SAFE_ATTR,ae):bu,Su="ADD_DATA_URI_TAGS"in s?K(yu(Ze),s.ADD_DATA_URI_TAGS,ae):Ze,Pe="FORBID_CONTENTS"in s?K({},s.FORBID_CONTENTS,ae):He,M="FORBID_TAGS"in s?K({},s.FORBID_TAGS,ae):{},J="FORBID_ATTR"in s?K({},s.FORBID_ATTR,ae):{},he="USE_PROFILES"in s?s.USE_PROFILES:!1,I=s.ALLOW_ARIA_ATTR!==!1,le=s.ALLOW_DATA_ATTR!==!1,Ee=s.ALLOW_UNKNOWN_PROTOCOLS||!1,pe=s.ALLOW_SELF_CLOSE_IN_ATTR!==!1,j=s.SAFE_FOR_TEMPLATES||!1,U=s.WHOLE_DOCUMENT||!1,_=s.RETURN_DOM||!1,Y=s.RETURN_DOM_FRAGMENT||!1,ce=s.RETURN_TRUSTED_TYPE||!1,ee=s.FORCE_BODY||!1,ie=s.SANITIZE_DOM!==!1,R=s.SANITIZE_NAMED_PROPS||!1,Le=s.KEEP_CONTENT!==!1,ge=s.IN_PLACE||!1,te=s.ALLOWED_URI_REGEXP||ia,Ne=s.NAMESPACE||Fe,v=s.CUSTOM_ELEMENT_HANDLING||{},s.CUSTOM_ELEMENT_HANDLING&&pt(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(v.tagNameCheck=s.CUSTOM_ELEMENT_HANDLING.tagNameCheck),s.CUSTOM_ELEMENT_HANDLING&&pt(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(v.attributeNameCheck=s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),s.CUSTOM_ELEMENT_HANDLING&&typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(v.allowCustomizedBuiltInElements=s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),j&&(le=!1),Y&&(_=!0),he&&(X=K({},[...ua]),ne=[],he.html===!0&&(K(X,ea),K(ne,ta)),he.svg===!0&&(K(X,U0),K(ne,H0),K(ne,t0)),he.svgFilters===!0&&(K(X,q0),K(ne,H0),K(ne,t0)),he.mathMl===!0&&(K(X,W0),K(ne,aa),K(ne,t0))),s.ADD_TAGS&&(X===Ve&&(X=yu(X)),K(X,s.ADD_TAGS,ae)),s.ADD_ATTR&&(ne===h&&(ne=yu(ne)),K(ne,s.ADD_ATTR,ae)),s.ADD_URI_SAFE_ATTR&&K(lu,s.ADD_URI_SAFE_ATTR,ae),s.FORBID_CONTENTS&&(Pe===He&&(Pe=yu(Pe)),K(Pe,s.FORBID_CONTENTS,ae)),Le&&(X["#text"]=!0),U&&K(X,["html","head","body"]),X.table&&(K(X,["tbody"]),delete M.tbody),s.TRUSTED_TYPES_POLICY){if(typeof s.TRUSTED_TYPES_POLICY.createHTML!="function")throw Ru('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof s.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Ru('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');q=s.TRUSTED_TYPES_POLICY,Q=q.createHTML("")}else q===void 0&&(q=io(T,a)),q!==null&&typeof Q=="string"&&(Q=q.createHTML(""));Oe&&Oe(s),Ue=s}},ht=K({},["mi","mo","mn","ms","mtext"]),ft=K({},["foreignobject","desc","title","annotation-xml"]),On=K({},["title","style","font","a","script"]),Vu=K({},U0);K(Vu,q0),K(Vu,Ji);let A0=K({},W0);K(A0,Zi);let zn=function(s){let A=Te(s);(!A||!A.tagName)&&(A={namespaceURI:Ne,tagName:"template"});let b=a0(s.tagName),ue=a0(A.tagName);return uu[s.namespaceURI]?s.namespaceURI===$e?A.namespaceURI===Fe?b==="svg":A.namespaceURI===ve?b==="svg"&&(ue==="annotation-xml"||ht[ue]):!!Vu[b]:s.namespaceURI===ve?A.namespaceURI===Fe?b==="math":A.namespaceURI===$e?b==="math"&&ft[ue]:!!A0[b]:s.namespaceURI===Fe?A.namespaceURI===$e&&!ft[ue]||A.namespaceURI===ve&&!ht[ue]?!1:!A0[b]&&(On[b]||!Vu[b]):!!(Re==="application/xhtml+xml"&&uu[s.namespaceURI]):!1},Eu=function(s){Pu(u.removed,{element:s});try{s.parentNode.removeChild(s)}catch{s.remove()}},w0=function(s,A){try{Pu(u.removed,{attribute:A.getAttributeNode(s),from:A})}catch{Pu(u.removed,{attribute:null,from:A})}if(A.removeAttribute(s),s==="is"&&!ne[s])if(_||Y)try{Eu(A)}catch{}else try{A.setAttribute(s,"")}catch{}},bt=function(s){let A,b;if(ee)s="<remove></remove>"+s;else{let Ie=Gi(s,/^[\r\n\t ]+/);b=Ie&&Ie[0]}Re==="application/xhtml+xml"&&Ne===Fe&&(s='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+s+"</body></html>");let ue=q?q.createHTML(s):s;if(Ne===Fe)try{A=new S().parseFromString(ue,Re)}catch{}if(!A||!A.documentElement){A=be.createDocument(Ne,"template",null);try{A.documentElement.innerHTML=eu?Q:ue}catch{}}let Ae=A.body||A.documentElement;return s&&b&&Ae.insertBefore(n.createTextNode(b),Ae.childNodes[0]||null),Ne===Fe?x.call(A,U?"html":"body")[0]:U?A.documentElement:Ae},Et=function(s){return w.call(s.ownerDocument||s,s,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT,null,!1)},Nn=function(s){return s instanceof f&&(typeof s.nodeName!="string"||typeof s.textContent!="string"||typeof s.removeChild!="function"||!(s.attributes instanceof d)||typeof s.removeAttribute!="function"||typeof s.setAttribute!="function"||typeof s.namespaceURI!="string"||typeof s.insertBefore!="function"||typeof s.hasChildNodes!="function")},$u=function(s){return typeof i=="object"?s instanceof i:s&&typeof s=="object"&&typeof s.nodeType=="number"&&typeof s.nodeName=="string"},au=function(s,A,b){k[s]&&Ki(k[s],ue=>{ue.call(u,A,b,Ue)})},Ct=function(s){let A;if(au("beforeSanitizeElements",s,null),Nn(s))return Eu(s),!0;let b=ae(s.nodeName);if(au("uponSanitizeElement",s,{tagName:b,allowedTags:X}),s.hasChildNodes()&&!$u(s.firstElementChild)&&(!$u(s.content)||!$u(s.content.firstElementChild))&&qe(/<[/\w]/g,s.innerHTML)&&qe(/<[/\w]/g,s.textContent))return Eu(s),!0;if(!X[b]||M[b]){if(!M[b]&&xt(b)&&(v.tagNameCheck instanceof RegExp&&qe(v.tagNameCheck,b)||v.tagNameCheck instanceof Function&&v.tagNameCheck(b)))return!1;if(Le&&!Pe[b]){let ue=Te(s)||s.parentNode,Ae=m(s)||s.childNodes;if(Ae&&ue){let Ie=Ae.length;for(let ze=Ie-1;ze>=0;--ze)ue.insertBefore(G(Ae[ze],!0),Z(s))}}return Eu(s),!0}return s instanceof l&&!zn(s)||(b==="noscript"||b==="noembed")&&qe(/<\/no(script|embed)/i,s.innerHTML)?(Eu(s),!0):(j&&s.nodeType===3&&(A=s.textContent,A=Ye(A,$," "),A=Ye(A,W," "),A=Ye(A,D," "),s.textContent!==A&&(Pu(u.removed,{element:s.cloneNode()}),s.textContent=A)),au("afterSanitizeElements",s,null),!1)},yt=function(s,A,b){if(ie&&(A==="id"||A==="name")&&(b in n||b in jn))return!1;if(!(le&&!J[A]&&qe(y,A))&&!(I&&qe(L,A))){if(!ne[A]||J[A]){if(!(xt(s)&&(v.tagNameCheck instanceof RegExp&&qe(v.tagNameCheck,s)||v.tagNameCheck instanceof Function&&v.tagNameCheck(s))&&(v.attributeNameCheck instanceof RegExp&&qe(v.attributeNameCheck,A)||v.attributeNameCheck instanceof Function&&v.attributeNameCheck(A))||A==="is"&&v.allowCustomizedBuiltInElements&&(v.tagNameCheck instanceof RegExp&&qe(v.tagNameCheck,b)||v.tagNameCheck instanceof Function&&v.tagNameCheck(b))))return!1}else if(!lu[A]&&!qe(te,Ye(b,me,""))&&!((A==="src"||A==="xlink:href"||A==="href")&&s!=="script"&&Vi(b,"data:")===0&&Su[s])&&!(Ee&&!qe(re,Ye(b,me,"")))&&b)return!1}return!0},xt=function(s){return s.indexOf("-")>0},At=function(s){let A,b,ue,Ae;au("beforeSanitizeAttributes",s,null);let{attributes:Ie}=s;if(!Ie)return;let ze={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ne};for(Ae=Ie.length;Ae--;){A=Ie[Ae];let{name:we,namespaceURI:Cu}=A;if(b=we==="value"?A.value:$i(A.value),ue=ae(we),ze.attrName=ue,ze.attrValue=b,ze.keepAttr=!0,ze.forceKeepAttr=void 0,au("uponSanitizeAttribute",s,ze),b=ze.attrValue,ze.forceKeepAttr||(w0(we,s),!ze.keepAttr))continue;if(!pe&&qe(/\/>/i,b)){w0(we,s);continue}j&&(b=Ye(b,$," "),b=Ye(b,W," "),b=Ye(b,D," "));let wt=ae(s.nodeName);if(yt(wt,ue,b)){if(R&&(ue==="id"||ue==="name")&&(w0(we,s),b=xe+b),q&&typeof T=="object"&&typeof T.getAttributeType=="function"&&!Cu)switch(T.getAttributeType(wt,ue)){case"TrustedHTML":{b=q.createHTML(b);break}case"TrustedScriptURL":{b=q.createScriptURL(b);break}}try{Cu?s.setAttributeNS(Cu,we,b):s.setAttribute(we,b),Xt(u.removed)}catch{}}}au("afterSanitizeAttributes",s,null)},Un=function s(A){let b,ue=Et(A);for(au("beforeSanitizeShadowDOM",A,null);b=ue.nextNode();)au("uponSanitizeShadowNode",b,null),!Ct(b)&&(b.content instanceof r&&s(b.content),At(b));au("afterSanitizeShadowDOM",A,null)};return u.sanitize=function(s){let A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},b,ue,Ae,Ie;if(eu=!s,eu&&(s="<!-->"),typeof s!="string"&&!$u(s))if(typeof s.toString=="function"){if(s=s.toString(),typeof s!="string")throw Ru("dirty is not a string, aborting")}else throw Ru("toString is not a function");if(!u.isSupported)return s;if(V||x0(A),u.removed=[],typeof s=="string"&&(ge=!1),ge){if(s.nodeName){let Cu=ae(s.nodeName);if(!X[Cu]||M[Cu])throw Ru("root node is forbidden and cannot be sanitized in-place")}}else if(s instanceof i)b=bt("<!---->"),ue=b.ownerDocument.importNode(s,!0),ue.nodeType===1&&ue.nodeName==="BODY"||ue.nodeName==="HTML"?b=ue:b.appendChild(ue);else{if(!_&&!j&&!U&&s.indexOf("<")===-1)return q&&ce?q.createHTML(s):s;if(b=bt(s),!b)return _?null:ce?Q:""}b&&ee&&Eu(b.firstChild);let ze=Et(ge?s:b);for(;Ae=ze.nextNode();)Ct(Ae)||(Ae.content instanceof r&&Un(Ae.content),At(Ae));if(ge)return s;if(_){if(Y)for(Ie=E.call(b.ownerDocument);b.firstChild;)Ie.appendChild(b.firstChild);else Ie=b;return(ne.shadowroot||ne.shadowrootmod)&&(Ie=B.call(t,Ie,!0)),Ie}let we=U?b.outerHTML:b.innerHTML;return U&&X["!doctype"]&&b.ownerDocument&&b.ownerDocument.doctype&&b.ownerDocument.doctype.name&&qe(oa,b.ownerDocument.doctype.name)&&(we="<!DOCTYPE "+b.ownerDocument.doctype.name+`>
`+we),j&&(we=Ye(we,$," "),we=Ye(we,W," "),we=Ye(we,D," ")),q&&ce?q.createHTML(we):we},u.setConfig=function(s){x0(s),V=!0},u.clearConfig=function(){Ue=null,V=!1},u.isValidAttribute=function(s,A,b){Ue||x0({});let ue=ae(s),Ae=ae(A);return yt(ue,Ae,b)},u.addHook=function(s,A){typeof A=="function"&&(k[s]=k[s]||[],Pu(k[s],A))},u.removeHook=function(s){if(k[s])return Xt(k[s])},u.removeHooks=function(s){k[s]&&(k[s]=[])},u.removeAllHooks=function(){k={}},u}var la=sa();var T3=Zu.alert;var ca={lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","noSupportTranslate-pdf":"\u811A\u672C\u4E0D\u652F\u6301\u8BF7\u4F7F\u7528\u63D2\u4EF6","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",enableLineBreak:"\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E\u683C\u5F0F\u4E3A\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u6709\u9053/\u817E\u8BAF\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8BD1\u5E76\u9690\u85CF\u539F\u6587/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.toggleTranslationMask":"\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6","browser.openEbookViewer":"\u9605\u8BFB\u672C\u5730\u7535\u5B50\u4E66","browser.openEbookBuilder":"\u5236\u4F5C\u53CC\u8BED Epub \u7535\u5B50\u4E66","browser.translateLocalHtmlFile":"\u7FFB\u8BD1 HTML/txt \u6587\u4EF6","browser.donateContext":"\u4E86\u89E3\u8D5E\u52A9\u798F\u5229","browser.translateLocalSubtitleFile":"\u7FFB\u8BD1\u672C\u5730\u5B57\u5E55\u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",isShowContextMenu:"\u5C06\u7FFB\u8BD1\u7F51\u9875\u52A0\u5165\u53F3\u952E\u83DC\u5355\u9879",toggleBeta:"\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",betaDescription:"\u542F\u7528\u4ECD\u5728\u5B9E\u9A8C\u6027\u7684\u529F\u80FD\uFF0C\u4EE5\u53CA\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u603B\u662F\u6362\u884C\u9002\u7528\u4E8E\u8F83\u5C11\u5185\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F50\u3002\uFF08\u5728\u5185\u5BB9\u8F83\u591A\u7684\u957F\u6BB5\u843D(\u8D85\u8FC7{count}\u4E2A\u5B57\u7B26) \u4F7F\u7528\u667A\u80FD\u6362\u884C\uFF0C\u66F4\u7701\u7A7A\u95F4\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1\uFF0C\u53EF\u8BBE\u7F6E\u4E34\u65F6\u65F6\u957F",xMinutes:"{count} \u5206\u949F",disabled:"\u7981\u7528",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5219\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875(\u4EC5\u8BD1\u6587)/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",mouseHoldKey:"+ {key} \u7FFB\u8BD1\u8BE5\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8BD1\u8BE5\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E(\u6253\u5F00\u8BBE\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8BD1\u8BE5\u6BB5",mouseHoverHoldKey:"\u9F20\u6807\u60AC\u505C\u540C\u65F6\u6309\u4E0B\u5FEB\u6377\u952E\u7FFB\u8BD1\u6BB5\u843D","mouse-translate":"\u5F53\u9F20\u6807\u60AC\u505C",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",resetThisSuccess:"\u91CD\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",goAdvancedInterfaceSettings:"\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\u3002\u4EC5\u5BF9\u4E8E\u66F4\u4E13\u4E1A\u7684\u7528\u6237\uFF0C\u63D0\u4F9B\u66F4\u4E2A\u6027\u5316\u7684\u8BBE\u7F6E\u9879\u3002",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u4EF7\u683C","translate to the bottom of the page":"\u8FDB\u5165\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u8FDB\u5165\u7F51\u9875\u5C06\u7ACB\u5373\u7FFB\u8BD1\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\u3002\u5173\u95ED\u5219\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u6240\u6709\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\u3002\u5173\u95ED\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\uFF0C\u4EC5\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8BD1\u9875\u9762\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\uFF0C\u800C\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",moreOptions:"\u5C55\u5F00\u66F4\u591A\u81EA\u5B9A\u4E49\u9009\u9879",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u6240\u6709\u533A\u57DF",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",changeToOnlyTranslationMode:"\u5207\u6362\u4E3A\u4EC5\u663E\u793A\u8BD1\u6587",changeToDualTranslationMode:"\u5207\u6362\u4E3A\u53CC\u8BED\u7FFB\u8BD1",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",badUserscriptBrowser:"\u5F53\u524D\u6D4F\u89C8\u5668\u6CA1\u6709\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u6269\u5C55\u7684\u63A5\u53E3\uFF08\u6BD4\u5982\u83B7\u53D6\u6CB9\u7334\u811A\u672C\u81EA\u8EAB\u7684\u7248\u672C\u53F7\u4FE1\u606F\uFF09\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334\u6269\u5C55</1>\u7684\u6D4F\u89C8\u5668\u5982 Firefox",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",needActionForOptions:"(\u9700\u8BBE\u7F6E)",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1 {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1 {language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",alwaysTranslateSomeSiteOrWildSite:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u7AD9",alwaysTranslateSomePage:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u9875",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA",import_export_title:"\u5BFC\u5165/\u5BFC\u51FA\u914D\u7F6E",syncToGoogleDrive:"\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65",previewAllThemes:"\u9884\u89C8\u5168\u90E8\u6837\u5F0F","translationTheme.none":"\u65E0","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.solidBorder":"\u5B9E\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C\uFF08\u5B66\u4E60\u6A21\u5F0F\uFF09","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.marker2":"\u9A6C\u514B\u7B142","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDashed":"\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDotted":"\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.nativeUnderline":"\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.wavy":"\u6CE2\u6D6A\u7EBF","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.tenAlpha":"\u817E\u8BAF\u7FFB\u8BD1\u541B(Alpha)","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeeplX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"Azure \u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.cai":"\u5F69\u4E91\u5C0F\u8BD1 (Alpha)","translationServices.volcAlpha":"\u706B\u5C71 (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.you":"\u6709\u9053\u7FFB\u8BD1 (Alpha)","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.niu":"\u5C0F\u725B\u7FFB\u8BD1","translationServices.papago":"Papago \u7FFB\u8BD1","translationServices.d":"D (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u5C06\u8DF3\u8FC7\u7FFB\u8BD1",enableUserscriptPagePopup:"\u5728\u9875\u9762\u4E0A\u663E\u793A\u60AC\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u5173\u95ED\u60AC\u6D6E\u7403\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u60AC\u6D6E\u7403\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u603B\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8BD1\u6587\u6837\u5F0F",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B",syncToCloud:"\u540C\u6B65\u5230\u4E91\u7AEF",syncToCloudDescription:"\u4E0A\u4F20\u5230\u4E91\u7AEF\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668/\u6CB9\u7334\u811A\u672C\u4E4B\u95F4\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",authFail:"\u6388\u6743\u5931\u8D25",syncTitle:"\u624B\u52A8\u5907\u4EFD\u7BA1\u7406",import_hint:"\u5BFC\u5165",upload:"\u4E0A\u4F20",revokeAuth:"\u64A4\u9500\u6388\u6743",uploadFail:"\u4E0A\u4F20\u5931\u8D25",download:"\u4E0B\u8F7D",importSuccess:"\u5BFC\u5165\u6210\u529F",importFail:"\u5BFC\u5165\u5931\u8D25",deleteFail:"\u5220\u9664\u5931\u8D25",backupToCloud:"\u624B\u52A8\u7BA1\u7406\u5907\u4EFD\u6587\u4EF6",create_new_backup:"\u65B0\u589E\u5907\u4EFD\u8282\u70B9",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5907\u4EFD{count}\u4E2A\u4E0D\u540C\u7684\u8282\u70B9, \u8BF7\u5220\u9664\u4E0D\u9700\u8981\u7684\u8282\u70B9",backupToCloudDescription:"\u624B\u52A8\u4E0A\u4F20\u6216\u6062\u590D\u5907\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8BB83\u4E2A\u4E0D\u540C\u7684\u5907\u4EFD",successSyncConfig:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u8D25",updatedAt:"\u66F4\u65B0\u4E8E {date}",lastSyncedAt:"\u4E0A\u6B21\u68C0\u67E5\u4E8E {date}",downloadFail:"\u4E0B\u8F7D\u5931\u8D25",clickToDownload:"\u70B9\u51FB\u4E0B\u8F7D",aboutLabel:"\u5173\u4E8E - \u53CD\u9988","browser.openAboutPage":"\u5173\u4E8E/\u53CD\u9988",aboutLabelWithoutSponsor:"\u5173\u4E8E - \u53CD\u9988",aboutIntro:"\u8BE5\u6269\u5C55\u514D\u8D39\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F <br/><br/>\u4F60\u53EF\u4EE5\u5173\u6CE8\u6211\u4EEC\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\uFF0C\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF0C\u6216\u8005\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002",aboutIntroWithoutSponsor:"\u8BE5\u6269\u5C55\u514D\u8D39\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F ",projectHomepage:"\u9879\u76EE\u4E3B\u9875",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u53C2\u4E0E\u529F\u80FD\u8BA8\u8BBA",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u4F17\u53F7",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",qqCommunities:"QQ \u4EA4\u6D41\u9891\u9053",joinTelegramChannel:"\u5173\u6CE8 Telegram \u9891\u9053\u83B7\u53D6\u6700\u65B0\u66F4\u65B0",feedbackAndJoin:"\u95EE\u9898\u53CD\u9988/\u52A0\u7FA4",autoSync:"\u81EA\u52A8\u5B9A\u65F6\u540C\u6B65",loadingThemeTitle:"Loading \u6837\u5F0F",loadingThemeDescription:"\u8BBE\u7F6E\u7B49\u5F85\u8BD1\u6587\u52A0\u8F7D\u65F6\u7684\u6837\u5F0F","loadingTheme.spinner":"\u8F6C\u5708\u52A8\u753B","loadingTheme.text":"\u9759\u6001\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u663E\u793A",developerDescription:"\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863","edit border color":"\u4FEE\u6539\u8FB9\u6846\u989C\u8272",successSyncButNoChange:"\u5F53\u524D\u914D\u7F6E\u4E0E\u4E91\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u8FB9\u6846\u989C\u8272","customThemeLabel.borderRadius":"\u8FB9\u6846\u5706\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u989C\u8272","customThemeLabel.backgroundColor":"\u80CC\u666F\u989C\u8272","customThemeLabel.zoom":"\u5B57\u4F53\u7F29\u653E\u6BD4\u4F8B (%)",resetToDefaultColor:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u989C\u8272",resetToDefaultSettings:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u8BBE\u7F6E",isTranslateTitle:"\u5F00\u542F\u7FFB\u8BD1\u7F51\u9875\u6807\u9898",enableSubtitle:"\u5F00\u542F\u5B57\u5E55\u7FFB\u8BD1",enableSubtitleDescription:"\u9488\u5BF9 youtube \u7B49\u7F51\u7AD9\u7684\u5B57\u5E55\u533A\u57DF\u5F00\u542F\u7FFB\u8BD1",isTranslateTitleDescription:"\u5F00\u542F\u540E\uFF0C\u7F51\u9875\u6807\u9898\u4F1A\u88AB\u7FFB\u8BD1",enableSearchEnhancement:"\u542F\u7528\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A",enableSearchEnhancementDescription:"\u5F00\u542F\u540E\uFF0C\u5728\u652F\u6301\u7684\u7F51\u7AD9\uFF08\u8C37\u6B4C\u65B0\u95FB\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u5173\u952E\u8BCD\uFF09\uFF0C\u96EA\u7403\uFF0C\u4E1C\u65B9\u8D22\u5BCC\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\u793E\u533A\uFF09\u53F3\u8FB9\u680F\u81EA\u52A8\u663E\u793A\u5BF9\u5E94\u82F1\u6587\u5173\u952E\u8BCD\u7684\u201C\u8C37\u6B4C\u65B0\u95FB\u201D\u641C\u7D22\u7ED3\u679C\u3002",verifyService:"\u70B9\u6B64\u6D4B\u8BD5\u670D\u52A1",verified:"\u9A8C\u8BC1\u6210\u529F","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8BD1\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u949F\u6700\u5927\u8BF7\u6C42\u6570","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8BF7\u6C42\u6570","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6587\u672C\u957F\u5EA6","field.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6BB5\u843D\u6570","field.apiUrl":"\u81EA\u5B9A\u4E49 API \u63A5\u53E3\u5730\u5740","description.limitPerMinute":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u5206\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.generalLimitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002","description.prompt":"\u4EE5\u7528\u6237\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u8350\uFF09, \u5C06\u4F1A\u5728\u5355\u72EC\u4F5C\u4E3A\u4E00\u6BB5\u53D1\u9001\u7ED9 OpenAI","description.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u5B57\u7B26\u6570\uFF0C\u592A\u5927\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5C1D\u8BD5\u8C03\u6574\u8BE5\u9009\u9879\u6765\u4F18\u5316\u901F\u5EA6","description.systemPrompt":"\u4EE5\u7CFB\u7EDF\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00","field.domain":"\u9886\u57DF","description.domain":"\u9ED8\u8BA4\u4E3A\uFF1Ageneral\u3002\u4EC5\u5728\u6709\u9053API\u63A7\u5236\u53F0\u5F00\u901A\u9886\u57DF\u5316\u7FFB\u8BD1\u7684\u60C5\u51B5\u4E0B\u53EF\u8BBE\u7F6E\uFF0C\u652F\u6301\u9886\u57DF\u89C1<1>\u8FD9\u91CC</1>","field.vocabId":"\u7528\u6237\u8BCD\u5178 ID","description.vocabId":"\u6307\u5B9A\u7684\u8BCD\u5178 out_id\uFF0C\u76EE\u524D\u652F\u6301\u82F1\u8BD1\u4E2D","description.model":"OpenAI \u7684\u6A21\u578B\uFF0C\u53EF\u4EE5\u4E3A gpt-3.5-turbo, gpt-4 \u7B49","description.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u53D1\u9001\u7ED9 OpenAI \u7684\u6BB5\u843D\u6570\u91CF\uFF0C\u5982\u679C\u6BB5\u843D\u6570\u91CF\u8FC7\u591A\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162\uFF0C\u8BBE\u7F6E\u4E3A 1 \u4E2A\u6BB5\u843D\u65F6\uFF0C\u4F53\u9A8C\u6700\u597D","description.apiUrl":"\u8BF7\u6DFB\u52A0\u5177\u4F53\u5E26\u6709\u8DEF\u5F84\u7684\u7F51\u5740",enabledExtension:"\u542F\u7528\u6269\u5C55",clickToDisableExtension:"\u70B9\u51FB\u7981\u7528\u6269\u5C55",clickToEnableExtension:"\u70B9\u51FB\u542F\u7528\u6269\u5C55",hasBeenDisabled:"\u5DF2\u7981\u7528","show password":"\u663E\u793A\u5BC6\u7801",customContent:"\u8F93\u5165\u81EA\u5B9A\u4E49\u6A21\u578B\u540D\u79F0",inputOptions:"\u8F93\u5165\u6846\u589E\u5F3A",enableInputTranslation:"\u662F\u5426\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",enableInputTranslationDescription:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165 {startingKey}{startingKey} \u4F60\u597D\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165\uFF1A\u4F60\u597D\u4E16\u754C\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguage:"\u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguageDescription:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00\uFF0C\u4E5F\u5C31\u662F {startingKey}{startingKey} \u4F5C\u4E3A\u89E6\u53D1\u8BCD\u7684\u9ED8\u8BA4\u8BED\u8A00",inputTargetLanguageDescriptionForNoneKey:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputStartingTriggerKeyTitle:"\u8BBE\u7F6E\u8F93\u5165\u6846\u90E8\u5206\u7FFB\u8BD1\u7684\u5206\u5272\u5B57\u7B26",inputStartingTriggerKeyDescription:"\u5F53\u4F60\u4E0D\u9700\u8981\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u7684\u65F6\u5019\uFF0C\u5206\u5272\u7B26\u5141\u8BB8\u4F60\u53EA\u7FFB\u8BD1 {startingKey}{startingKey} \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u8BED\u8A00\u4EE3\u7801\uFF0C\u6BD4\u5982\uFF1A{startingKey}ja \u8868\u793A\u53EA\u7FFB\u8BD1 {startingKey}ja \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206",inputStartingTriggerKeyDescriptionForNoneKey:"\u5F53\u524D\u8BBE\u7F6E\u4E3A\u65E0\u9700\u524D\u7F00\uFF0C\u6682\u65E0\u6CD5\u4F7F\u7528\u8F93\u5165\u6846\u7684\u90E8\u5206\u6587\u672C\u7FFB\u8BD1\u529F\u80FD",inputTrailingTriggerKeyTitle:"\u9009\u62E9\u4E00\u4E2A\u8F93\u5165\u7ED3\u675F\u7684\u89E6\u53D1\u5B57\u7B26",inputTrailingTriggerKeyDescription:"\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey} \u5C06\u4F1A\u5F00\u59CB\u7FFB\u8BD1",spaceKey:"<\u7A7A\u683C\u952E>",noneKey:"\u65E0\u9700\u524D\u7F00\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u6587\u672C\u6846",inputTranslationBlockUrlsTitle:"\u5207\u52FF\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",inputTranslationBlockUrlsDescription:"\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\uFF0C\u8F93\u5165\u6846\u589E\u5F3A\u5C06\u4E0D\u4F1A\u751F\u6548",clickToSeeQuickDemo:"\u70B9\u51FB\u5C55\u5F00 30 \u79D2\u5FEB\u901F\u6559\u5B66\u89C6\u9891",inputHelperInfo:"\u8BF4\u660E\uFF1A\u6211\u4EEC\u7279\u522B\u9488\u5BF9\u5728\u4E2D\u6587\u8F93\u5165\u6CD5\u4E0B\u90E8\u5206\u89E6\u53D1\u5B57\u7B26\u4F1A\u53D8\u6210\u4E2D\u6587\u6807\u70B9\u7B26\u53F7\u8FD9\u4EF6\u4E8B\u505A\u4E86\u4F18\u5316\uFF0C\u6BD4\u5982\u641C\u72D7\u8F93\u5165\u6CD5\u4E0B / \u4F1A\u53D8\u6210\u987F\u53F7 \u3001\uFF0C\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u652F\u6301\u6240\u6709\u89E6\u53D1\u7B26\u5BF9\u5E94\u7684\u4E2D\u6587\u7B26\u53F7\uFF0C\u4E5F\u5C31\u662F\u8BF4 // \u3001\u3001 \u90FD\u4F1A\u88AB\u8BC6\u522B\u4E3A\u89E6\u53D1\u5B57\u7B26\u3002<br/><br/>\u540C\u65F6\u6211\u4EEC\u4E5F\u652F\u6301\u8BED\u8A00\u4EE3\u7801\u7684\u4E2D\u6587\u522B\u540D\u4F5C\u4E3A\u547D\u4EE4\uFF0C\u6BD4\u5982 /\u65E5\u6587 \u4F60\u597D\u4E16\u754C \u4F1A\u88AB\u7FFB\u8BD1\u4E3A\u65E5\u6587\uFF0C<1>\u70B9\u6B64\u67E5\u770B\u6240\u6709\u652F\u6301\u7684\u8BED\u8A00\u4EE3\u7801</1>\u3002",reloadCurrentPage:"\u8BF7\u5148\u5237\u65B0\u5F53\u524D\u9875\u9762\uFF0C\u518D\u5F00\u59CB\u7FFB\u8BD1",noLocalFilePermissionForPDF:"\u6682\u65E0\u6743\u9650\u8BFB\u53D6\u672C\u5730\u6587\u4EF6\uFF0C\u8BF7\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\uFF0C\u7136\u540E\u4E0A\u4F20\u672C\u5730\u6587\u4EF6",noPermissionForThisPage:"\u26A0\uFE0F \u6682\u65E0\u6743\u9650\u7FFB\u8BD1\u5F53\u524D\u9875\u9762",retryAllParagraphs:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",retryAllButton:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",errorTooltipTitle:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u539F\u56E0",errorModalTitle:"\u7FFB\u8BD1\u670D\u52A1\u6216\u7F51\u7EDC\u4F3C\u4E4E\u51FA\u4E86\u70B9\u95EE\u9898...",disableConfirm:"\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A\u8BBE\u7F6E",disableOnce:"\u672C\u6B21\u7981\u7528",disableGlobal:"\u6C38\u4E45\u7981\u7528",disableTint:"* \u4F60\u53EF\u4EE5\u5728 {option} \u4E2D\u91CD\u65B0\u542F\u7528\u3002",searchEnhancementNotes:"\u6211\u4EEC\u53D1\u73B0\uFF0C\u4E2D\u6587\u5173\u952E\u8BCD\u548C\u82F1\u6587\u5173\u952E\u8BCD\u7684\u65B0\u95FB\u7ED3\u679C\u6709\u975E\u5E38\u5927\u7684\u4E0D\u540C\uFF0C\u5728\u542F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A\u529F\u80FD\u540E\uFF0C\u6211\u4EEC\u4F1A\u5728\u652F\u6301\u7684\u7F51\u7AD9\uFF08\u8C37\u6B4C\u65B0\u95FB\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u5173\u952E\u8BCD\uFF09\uFF0C\u96EA\u7403\uFF0C\u4E1C\u65B9\u8D22\u5BCC\u7F51\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\uFF09\u81EA\u52A8\u7528\u82F1\u6587\u4E3A\u4F60\u641C\u7D22\u540C\u6837\u7684\u5173\u952E\u8BCD\u5E76\u5C55\u793A\u5728\u53F3\u4FA7\u3002\u5982\u679C\u4F60\u4E0D\u9700\u8981\u8BE5\u529F\u80FD\u7684\u8BDD\uFF0C\u53EF\u4EE5\u9009\u62E9\u7981\u7528\u5B83\u3002",option:"\u8BBE\u7F6E",saveSettings:"\u4FDD\u5B58\u8BBE\u7F6E",closeModal:"\u5173\u95ED\u7A97\u53E3",enableInputTranslationWithoutTriggerKeyTitle:"\u542F\u7528\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey}\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u4E3A{inputTargetLanguage}",enableInputTranslationWithoutTriggerKeyDescription:"\u5982\u9700\u6307\u5B9A\u76EE\u6807\u8BED\u8A00\uFF0C\u8BF7\u5728\u524D\u9762\u52A0\u4E0A\u8BED\u8A00\u4EE3\u7801\uFF0C\u5982\uFF1Aja \u4F60\u597D\u4E16\u754C"};var da={lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u5143\u6578\u91CF","translate-pdf":"\u9EDE\u9078\u7FFB\u8B6F PDF","translate-firefox-local-pdf":"\u9EDE\u9078\u4E0A\u50B3 PDF",enableLineBreak:"\u958B\u555F\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D0A\u52A9\u958B\u767C\u8005 (\u6708\u4ED8\u6216\u50C5\u8D0A\u52A9\u4E00\u6B21\u5747\u53EF)",help:"\u8AAA\u660E",browserShortcutsNoteForFirefox:"Firefox \u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u9644\u52A0\u5143\u4EF6\u7BA1\u7406\u9801\u9762 \u300Cabout:addons\u300D\uFF0C\u7136\u5F8C\u9EDE\u9078\u300C\u8A2D\u5B9A\u5716\u793A\u300D\uFF0C\u518D\u9EDE\u9078\u300C\u7BA1\u7406\u64F4\u5145\u5957\u4EF6\u5FEB\u901F\u9375\u300D\u5373\u53EF\u8A2D\u5B9A",browserShortcutsNoteForChrome:"Chromium \u6838\u5FC3\u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u64F4\u5145\u529F\u80FD\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u300C\u9375\u76E4\u5FEB\u901F\u9375\u300D\u9801\u9762(chrome://extensions/shortcuts)\u8A2D\u5B9A\uFF0C\u9EDE\u9078\u4E0B\u65B9\u6309\u9215\u524D\u5F80\u5FEB\u901F\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u901F\u9375\u683C\u5F0F\u70BA\uFF1A",enableLineBreakDescription:"\u555F\u7528\u5F8C\uFF0C\u5C07\u6703\u5728\u9577\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u5B57\u5143\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u5957\u4EF6\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u63F4 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u63F4 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8B6F\u4E26\u96B1\u85CF\u539F\u6587/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.openOptionsPage":"\u958B\u555F\u8A2D\u5B9A\u9801\u9762","browser.toggleTranslationMask":"\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u6A5F PDF \u6A94\u6848","browser.openEbookViewer":"\u95B1\u8B80\u672C\u6A5F\u96FB\u5B50\u66F8","browser.openEbookBuilder":"\u88FD\u4F5C\u96D9\u8A9E Epub \u96FB\u5B50\u66F8","browser.translateLocalHtmlFile":"\u7FFB\u8B6F HTML/txt \u6A94\u6848","browser.translateLocalSubtitleFile":"\u7FFB\u8B6F\u5B57\u5E55\u6A94\u6848","browser.donateContext":"\u4E86\u89E3\u8D0A\u52A9\u798F\u5229",confirmResetConfig:"\u4F60\u78BA\u5B9A\u8981\u91CD\u8A2D\u8A2D\u5B9A\u55CE\uFF1F",translationLineBreakSettingTitle:"\u8B6F\u6587\u63DB\u884C\u8A2D\u5B9A",smartLineBreak:"\u667A\u6167\u63DB\u884C",alwaysLineBreak:"\u7E3D\u662F\u63DB\u884C",isShowContextMenu:"\u5C07\u7DB2\u9801\u7FFB\u8B6F\u529F\u80FD\u52A0\u5165\u53F3\u9375\u9078\u55AE",toggleBeta:"\u958B\u555F Beta \u6E2C\u8A66\u529F\u80FD",betaDescription:"\u555F\u7528\u4ECD\u5728\u5BE6\u9A57\u7684\u529F\u80FD\u4EE5\u53CA\u6E2C\u8A66\u4E2D\u7684\u7FFB\u8B6F\u670D\u52D9\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7D44</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u7E3D\u662F\u63DB\u884C\u9069\u7528\u65BC\u8F03\u5C11\u5167\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F4A\u3002(\u5728\u5167\u5BB9\u8F03\u591A\u7684\u9577\u6BB5\u843D(\u8D85\u904E {count} \u500B\u5B57\u5143) \u4F7F\u7528\u667A\u6167\u63DB\u884C\u6703\u66F4\u7701\u7A7A\u9593)",tempTranslateDomainTitle:"\u81E8\u6642\u958B\u555F\u7DB2\u7AD9\u7FFB\u8B6F\u7684\u6642\u9577",tempTranslateDomainDescription:"\u7576\u624B\u52D5\u7FFB\u8B6F\u67D0\u500B\u7DB2\u9801\u7684\u6642\u5019\uFF0C\u81E8\u6642\u958B\u555F\u8A72\u7DB2\u7AD9\u70BA\u81EA\u52D5\u7FFB\u8B6F",xMinutes:"{count} \u5206\u9418",disabled:"\u505C\u7528",changelog:"\u66F4\u65B0\u8A18\u9304",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u5247\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C",addUrlDescription:"\u53EF\u4EE5\u70BA\u7DB2\u57DF\u540D\u7A31\uFF0C\u540C\u6642\u652F\u63F4\u842C\u7528\u5B57\u5143\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u5B9A",clickToExpandConfig:"\u5C55\u958B\u76EE\u524D\u8A2D\u5B9A",import:"\u5F9E\u6A94\u6848\u532F\u5165",export:"\u532F\u51FA\u70BA\u6A94\u6848",toggleDebug:"\u5728\u4E3B\u63A7\u53F0\u986F\u793A\u5075\u932F\u8A18\u9304","fingers.0":"\u95DC\u9589","fingers.2":"\u96D9\u6307\u89F8\u6478","fingers.3":"\u4E09\u6307\u89F8\u6478","fingers.4":"\u56DB\u6307\u89F8\u6478","fingers.5":"\u4E94\u6307\u89F8\u6478",document:"\u8AAA\u660E\u6587\u4EF6",resetSuccess:"\u91CD\u8A2D\u6240\u6709\u8A2D\u5B9A\u6210\u529F",resetThisSuccess:"\u91CD\u8A2D\u6210\u529F",saved:"\u5132\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u532F\u5165\u8A2D\u5B9A",goAdvancedSettings:"\u524D\u5F80\u9032\u968E\u8A2D\u5B9A\u9801\u9762",goAdvancedInterfaceSettings:"\u524D\u5F80\u81EA\u8A02\u8A2D\u5B9A\u9801\u9762",advanced:"\u9032\u968E\u8A2D\u5B9A",advancedDescription:"\u6B63\u5E38\u60C5\u6CC1\u7121\u9700\u8A2D\u5B9A\uFF0C\u4FDD\u6301\u9810\u8A2D\u5373\u53EF\u3002\u50C5\u91DD\u5C0D\u66F4\u5C08\u696D\u7684\u4F7F\u7528\u8005\uFF0C\u63D0\u4F9B\u66F4\u500B\u4EBA\u5316\u7684\u8A2D\u5B9A\u9805\u76EE\u3002",developer:"\u958B\u767C\u8005\u8A2D\u5B9A",donateCafe:"\u50F9\u683C","translate to the bottom of the page":"\u9032\u5165\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u56DE\u5831",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","mouse-translate":"\u7576\u9F20\u6A19\u6ED1\u904E",mouseHoldKey:"+ {key} \u7FFB\u8B6F\u8A72\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8B6F\u8A72\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u7FA9\u5FEB\u6377\u9375(\u6253\u958B\u8A2D\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8B6F\u8A72\u6BB5",mouseHoverHoldKey:"\u9F20\u6A19\u6ED1\u904E\u540C\u6642\u6309\u4E0B X \u9375\u7FFB\u8B6F\u6BB5\u843D",translateToThePageEndImmediatelyDescription:"\u555F\u7528\u5F8C\uFF0C\u9032\u5165\u7DB2\u9801\u5C07\u7ACB\u5373\u7FFB\u8B6F\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\u3002\u95DC\u9589\u5247\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u555F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6240\u6709\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\u3002\u95DC\u9589\u5247\u4F7F\u7528\u9810\u8A2D\u7684\u667A\u6167\u8FA8\u8B58\uFF0C\u50C5\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\u3002(\u4E0D\u63A8\u85A6\u958B\u555F)","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8B6F\u9801\u9762\u524D\u591A\u5C11\u500B\u5B57\u5143\uFF0C\u800C\u7121\u9700\u7B49\u5F85\u6372\u52D5\u81F3\u53EF\u898B\u5340\u57DF","interface language":"\u4ECB\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u901F\u9375",modify:"\u8B8A\u66F4\u5FEB\u901F\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u9996\u9801",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u6240\u6709\u5340\u57DF",changeToTranslateTheMainPage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF",changeToOnlyTranslationMode:"\u5207\u63DB\u70BA\u50C5\u986F\u793A\u8B6F\u6587",changeToDualTranslationMode:"\u5207\u63DB\u70BA\u96D9\u8A9E\u7FFB\u8B6F",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u6167\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u6A5F\u898F\u5247\u5DF2\u70BA\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u5B98\u65B9\u898F\u5247",localVersionIsTooOld:"\u672C\u6A5F\u5957\u4EF6\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u5957\u4EF6\u81F3 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5617\u8A66\u540C\u6B65",badUserscriptBrowser:"\u76EE\u524D\u700F\u89BD\u5668\u7121\u6CD5\u6B63\u78BA\u5BE6\u73FE\u6CB9\u7334\u5957\u4EF6\u7684\u4ECB\u9762\uFF0C\u8ACB\u4F7F\u7528\u5176\u4ED6<1>\u652F\u63F4\u6CB9\u7334\u5957\u4EF6</1>\u7684\u700F\u89BD\u5668\u5982(Firefox Nightly \u7248\u672C)",foundNewVersion:"\u6709\u65B0\u7248\u672C\u53EF\u7528",theLocalExtensionIsUpToUpdate:"\u76EE\u524D\u5957\u4EF6\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u91CD\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u76EE\u524D\u898F\u5247\u7248\u672C",calculating:"\u6B63\u5728\u8A08\u7B97",unknownError:"\u672A\u77E5\u7684\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u53D6\u5F97\u9060\u7AEF\u898F\u5247",enableAlphaSuccess:"\u5DF2\u555F\u7528 Alpha \u529F\u80FD",disableAlphaSuccess:"\u5DF2\u505C\u7528 Alpha \u529F\u80FD",cacheSize:"\u5FEB\u53D6\u5927\u5C0F\uFF1A",cleaning:"\u6B63\u5728\u6E05\u7406",cleanCache:"\u6E05\u9664\u5FEB\u53D6",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"(\u524D\u5F80\u8A2D\u5B9A)",goSettings:"\u524D\u5F80\u8A2D\u5B9A",needActionForOptions:"(\u9700\u8A2D\u5B9A)",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u91DD\u5C0D\u8A72\u7DB2\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F {language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",add:"\u65B0\u589E",default:"\u9810\u8A2D",forThisLanguage:"\u91DD\u5C0D\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165 URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u5B83\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u5B9A\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4F60\u60F3\u7528\u7684\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u6B63\u5728\u7FFB\u8B6F",Error:"\u932F\u8AA4",allowCacheTranslations:"\u555F\u7528\u672C\u6A5F\u7FFB\u8B6F\u5FEB\u53D6\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8981\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u7BC4\u4F8B",interface:"\u4ECB\u9762\u8A2D\u5B9A",import_export:"\u532F\u5165/\u532F\u51FA",import_export_title:"\u532F\u5165/\u532F\u51FA\u8A2D\u5B9A",syncToGoogleDrive:"\u7ACB\u5373\u8207 Google Drive \u540C\u6B65",previewAllThemes:"\u9810\u89BD\u5168\u90E8\u6A23\u5F0F","translationTheme.none":"\u7121","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u5E95\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u6846\u7DDA","translationTheme.solidBorder":"\u5BE6\u7DDA\u6846\u7DDA","translationTheme.underline":"\u76F4\u7DDA\u5E95\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C\uFF08\u5B78\u7FD2\u6A21\u5F0F\uFF09","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u9694\u7DDA","translationTheme.highlight":"\u9192\u76EE\u63D0\u793A","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.marker2":"\u99AC\u514B\u7B462","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDashed":"\u7CFB\u7D71\u5167\u5EFA\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDotted":"\u7CFB\u7D71\u5167\u5EFA\u9EDE\u72C0\u5E95\u7DDA","translationTheme.nativeUnderline":"\u7CFB\u7D71\u5167\u5EFA\u76F4\u7DDA\u5E95\u7DDA","translationTheme.wavy":"\u6CE2\u5F62\u66F2\u7DDA","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.tenAlpha":"\u9A30\u8A0A\u7FFB\u8B6F\u541B(Alpha)","translationServices.google":"Google \u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeeplX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8B6F","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"Azure \u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.cai":"\u5F69\u96F2\u5C0F\u8B6F (Alpha)","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.you":"\u6709\u9053\u7FFB\u8B6F (Alpha)","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.niu":"\u5C0F\u725B\u7FFB\u8B6F","translationServices.papago":"Papago \u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u7576\u9801\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u5C07\u8DF3\u904E\u7FFB\u8B6F",enableUserscriptPagePopup:"\u5728\u9801\u9762\u4E0A\u986F\u793A\u61F8\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u95DC\u9589\u61F8\u6D6E\u7403\u5F8C\uFF0C\u53EF\u4EE5\u7528\u5FEB\u901F\u9375/{touch}\u518D\u6B21\u986F\u793A\u3002\u70BA\u9632\u6B62\u4E0D\u614E\u95DC\u9589\u8A72\u9078\u9805\u5F8C\u627E\u4E0D\u5230\u61F8\u6D6E\u7403\uFF0C\u5EFA\u8B70\u5C07\u672C\u8A2D\u5B9A\u9801\u9762\u52A0\u5165\u81F3\u6211\u7684\u6700\u611B","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u91D1\u9470\u5F8C\u624D\u53EF\u4F7F\u7528\uFF0C\u8A73\u7D30\u8CC7\u8A0A\u8ACB\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u91D1\u9470\u7533\u8ACB\u548C\u8A2D\u5B9A\u6559\u5B78\u300B",useAboveStyleForTheseSites:"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u7E3D\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8B6F\u6587\u6A23\u5F0F",currentUrl:"\u76EE\u524D\u7DB2\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C",syncToCloud:"\u540C\u6B65\u81F3\u96F2\u7AEF",syncToCloudDescription:"\u4E0A\u50B3\u81F3\u96F2\u7AEF\u5F8C\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u700F\u89BD\u5668/\u6CB9\u7334\u8173\u672C\u4E4B\u9593\u540C\u6B65\u8A2D\u5B9A\uFF0C\u4EE5\u6700\u5F8C\u8B8A\u66F4\u6642\u9593\u70BA\u6E96\u3002",authFail:"\u6388\u6B0A\u5931\u6557",syncTitle:"\u624B\u52D5\u5099\u4EFD\u7BA1\u7406",import_hint:"\u532F\u5165",upload:"\u4E0A\u50B3",revokeAuth:"\u64A4\u92B7\u6388\u6B0A",uploadFail:"\u4E0A\u50B3\u5931\u6557",download:"\u4E0B\u8F09",importSuccess:"\u532F\u5165\u6210\u529F",importFail:"\u532F\u5165\u5931\u6557",deleteFail:"\u522A\u9664\u5931\u6557",backupToCloud:"\u624B\u52D5\u7BA1\u7406\u5099\u4EFD\u6A94\u6848",create_new_backup:"\u65B0\u589E\u5099\u4EFD\u7BC0\u9EDE",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5099\u4EFD{count}\u500B\u4E0D\u540C\u7684\u7BC0\u9EDE\uFF0C\u8ACB\u522A\u9664\u4E0D\u9700\u8981\u7684\u7BC0\u9EDE",backupToCloudDescription:"\u624B\u52D5\u4E0A\u50B3\u6216\u9084\u539F\u5099\u4EFD\u6A94\u6848\uFF0C\u6700\u591A\u5141\u8A31 3 \u500B\u4E0D\u540C\u7684\u5099\u4EFD",successSyncConfig:"\u6210\u529F\u8207\u96F2\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u6557",updatedAt:"\u66F4\u65B0\u65BC {date}",lastSyncedAt:"\u4E0A\u6B21\u6AA2\u67E5\u65BC {date}",downloadFail:"\u4E0B\u8F09\u5931\u6557",clickToDownload:"\u9EDE\u9078\u4E0B\u8F09",aboutLabel:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831",aboutLabelWithoutSponsor:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831","browser.openAboutPage":"\u95DC\u65BC/\u554F\u984C\u56DE\u5831/\u8D0A\u52A9",aboutIntro:"\u672C\u5957\u4EF6\u70BA\u514D\u8CBB\u5957\u4EF6\uFF0C\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F \u4F60\u53EF\u4EE5\u95DC\u6CE8\u6211\u4EEC\u7684<3>Twitter</3>\uFF0C<4>Telegram \u983B\u9053</4>\u4EE5\u53CA\u4E0B\u65B9\u7684<5>\u90F5\u4EF6\u8A02\u95B1</5>\u8FFD\u8E64\u66F4\u65B0\u3002",aboutIntroWithoutSponsor:"\u672C\u5957\u4EF6\u70BA\u514D\u8CBB\u5957\u4EF6\uFF0C\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F ",projectHomepage:"\u5C08\u6848\u9996\u9801",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u4F17\u53F7",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",qqCommunities:"QQ \u4EA4\u6D41\u9891\u9053",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u7D44\u53C3\u8207\u529F\u80FD\u8A0E\u8AD6",joinTelegramChannel:"\u95DC\u6CE8 Telegram \u983B\u9053\u77AD\u89E3\u66F4\u65B0\u8CC7\u8A0A",feedbackAndJoin:"\u554F\u984C\u56DE\u5831/\u52A0\u5165\u7FA4\u7D44",autoSync:"\u81EA\u52D5\u5B9A\u6642\u540C\u6B65",loadingThemeTitle:"Loading \u6A23\u5F0F",loadingThemeDescription:"\u8A2D\u5B9A\u7B49\u5F85\u8B6F\u6587\u8F09\u5165\u6642\u7684\u6A23\u5F0F","loadingTheme.spinner":"\u8F49\u5708\u52D5\u756B","loadingTheme.text":"\u975C\u614B\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u986F\u793A",developerDescription:"\u53EF\u4EE5\u9EDE\u9078<1>\u6B64\u8655</1>\u6AA2\u8996\u9032\u968E\u81EA\u8A02\u529F\u80FD\u76F8\u95DC\u7684\u8AAA\u660E\u6587\u4EF6","edit border color":"\u8B8A\u66F4\u908A\u6846\u8272\u5F69",successSyncButNoChange:"\u76EE\u524D\u8A2D\u5B9A\u8207\u96F2\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u8A02\u8272\u5F69\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u908A\u6846\u8272\u5F69","customThemeLabel.borderRadius":"\u908A\u6846\u5713\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u8272\u5F69","customThemeLabel.backgroundColor":"\u80CC\u666F\u8272\u5F69","customThemeLabel.zoom":"\u5B57\u578B\u7E2E\u653E\u6BD4\u4F8B (%)",resetToDefaultColor:"\u9084\u539F\u70BA\u9810\u8A2D\u8272\u5F69",isTranslateTitle:"\u555F\u7528\u7DB2\u9801\u6A19\u984C\u7FFB\u8B6F",isTranslateTitleDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6A19\u984C\u6703\u88AB\u7FFB\u8B6F",enableSubtitle:"\u958B\u555F\u5B57\u5E55\u7FFB\u8B6F",enableSubtitleDescription:"\u91DD\u5C0D youtube \u7B49\u7DB2\u7AD9\u7684\u5B57\u5E55\u5340\u57DF\u958B\u555F\u7FFB\u8B6F",enableSearchEnhancement:"\u958B\u555F\u641C\u7D22\u589E\u5F37",enableSearchEnhancementDescription:"\u4E2D\u6587\u641C\u7D22\u8C37\u6B4C\u6703\u5728\u53F3\u908A\u51FA\u73FE\u82F1\u6587\u7248\u8C37\u6B4C\u65B0\u805E",verifyService:"\u9EDE\u6B64\u6E2C\u8A66\u670D\u52D9",verified:"\u9A57\u8B49\u6210\u529F","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8B6F\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u9418\u6700\u5927\u8981\u6C42\u6578","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8981\u6C42\u6578","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8981\u6C42\u7684\u6700\u5927\u6587\u5B57\u9577\u5EA6","field.apiUrl":"\u81EA\u8A02 API \u4F4D\u5740","description.limitPerMinute":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u5206\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u79D2\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.prompt":"\u4EE5\u7528\u6237\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u8350\uFF09, \u5C06\u4F1A\u5728\u5355\u72EC\u4F5C\u4E3A\u4E00\u6BB5\u53D1\u9001\u7ED9 OpenAI","description.maxTextLengthPerRequest":"\u9810\u8A2D\u6703\u5408\u4F75\u591A\u500B\u6BB5\u843D\uFF0C\u4EE5\u6E1B\u5C11\u8ACB\u8981\u6C42\u6578\uFF0C\u4F46\u662F\u5982\u679C\u6BB5\u843D\u7E3D\u9577\u5EA6\u904E\u9577\uFF0C\u4E5F\u53EF\u80FD\u6703\u5C0E\u81F4 API \u7684\u56DE\u61C9\u6642\u9593\u589E\u52A0\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5617\u8A66\u8ABF\u6574\u8A72\u9078\u9805\u4F86\u63D0\u5347\u901F\u5EA6",enabledExtension:"\u555F\u7528\u5957\u4EF6",clickToDisableExtension:"\u9EDE\u9078\u505C\u7528\u5957\u4EF6",clickToEnableExtension:"\u9EDE\u9078\u555F\u7528\u5957\u4EF6",hasBeenDisabled:"\u5DF2\u505C\u7528","show password":"\u986F\u793A\u5BC6\u78BC",customContent:"\u8F38\u5165\u81EA\u5B9A\u7FA9\u6A21\u578B",inputOptions:"\u8F38\u5165\u6846\u589E\u5F37",retryAllParagraphs:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",errorTooltipTitle:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u539F\u56E0",disableConfirm:"\u7981\u7528\u78BA\u8A8D",disableOnce:"\u7981\u7528\u4E00\u6B21",disableGlobal:"\u5168\u5C40\u7981\u7528",disableTint:"* \u60A8\u53EF\u4EE5\u5728 {option} \u4E2D\u91CD\u65B0\u555F\u7528\u3002",option:"\u9078\u9805"};var ma={lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","translate-firefox-local-pdf":"Click to upload Pdf",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.brandName":"Immersive Translate","browser.brandDescription":"Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc.","browser.toggleTranslatePage":"Toggle Translate Page ","browser.toggleTranslateTheWholePage":"Toggle Translate the Whole Page","browser.toggleOnlyTransation":"Toggle Translate and Hide Original Text","browser.toggleTranslateToThePageEndImmediately":"Toggle Translate to the Bottom of the Page Immediately","browser.toggleTranslateTheMainPage":"Toggle Translate the Main Page","browser.openOptionsPage":"Open Settings Page","browser.toggleTranslationMask":"Toggle translation mask style","browser.translateLocalPdfFile":"Translate local PDF File","browser.openEbookViewer":"Read local e-book","browser.openEbookBuilder":"Make Dual Epub ebook","browser.translateLocalHtmlFile":"Translate HTML/txt File","browser.donateContext":"Sponsor Benefits","browser.translateLocalSubtitleFile":"Translate Subtitle File",confirmResetConfig:"Are you sure you want to reset the settings?",translationLineBreakSettingTitle:"Line break setting",smartLineBreak:"Smart Wrap",alwaysLineBreak:"Always Wrap",isShowContextMenu:"Create right button menu",toggleBeta:"Enable Beta experimental features",betaDescription:"Enable features that are still experimental, and translation services that are in testing. Join the <1>Telegram group</1> to learn more.",translationLineBreakSettingDescription:"The always line break feature is suitable for layouts with less content, making the layout more neat and tidy. (Use smart line breaks for long paragraphs with more content (more than {count} characters) for saving space)",tempTranslateDomainTitle:"Open the translation time temporarily",tempTranslateDomainDescription:"When a page is translated manually, turn it temporarily on as automatic translation",xMinutes:"{count} minutes",disabled:"Disable",changelog:"Change Log",toggleTranslatePageWhenThreeFingersOnTheScreen:"Multi-finger touch to show/hide translation display",toggleTranslationMaskWhenThreeFingersOnTheScreen:"Multi-finger touch to show/hide the blur effect of the translation",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"Multi-finger touch to show/hide only translation display",addUrlDescription:"The domain name is available and wildcard is supported e.g.: *.google.com, google.com/mail/*, https://www.google.com/*",general:"General",clickToExpandConfig:"Expand current configuration",import:"Import configuration from file",export:"Export to file",toggleDebug:"Print debug logs on the console","fingers.0":"Close","fingers.2":"Two-finger touch","fingers.3":"Three-finger touch","fingers.4":"Four-finger touch","fingers.5":"Five-finger touch",document:"Document",resetSuccess:"All settings reset successful",resetThisSuccess:"Reset successful",saved:"Saved successfully",successImportConfig:"Configuration imported successfully",goAdvancedSettings:"Go to Advanced Settings Page",goAdvancedInterfaceSettings:"Go to Advanced Custom Settings Page",advanced:"Advanced",advancedDescription:"Normally no settings are needed, keep the default. More personalized settings are provided for professional users only.",developer:"Developer settings",donateCafe:"Pricing","translate to the bottom of the page":"Translate to the bottom of the page immediately after opening the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate","mouse-translate":"Mouse Hover",mouseHoldKey:"+ {key} translate this paragraph",mouseHoldKeyAuto:"Translate the paragraph directly",mouseHoldKeyOff:"Do nothing",mouseHoldKeyOther:"Custom shortcut key (open settings)",mouseHoldKeyCustomKey:"{key} translate this paragraph",mouseHoverHoldKey:"Mouse over and press X key to translate paragraph",translateToThePageEndImmediatelyDescription:"Enabled will translate from the top to the bottom of the page immediately after opening. Disable will translate while reading. (Not recommended to enable)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, all areas of the entire web page will be translated. Disabled will use the default smart recognition and translate only the main areas. (Not recommended to enable)","the number of characters to be translated first":"Directly translate the number of characters in front of the page without waiting to scroll to the visible area","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",moreOptions:"Expand more custom settings",translateTheWholePage:"Translate the whole page area",changeToTranslateTheWholePage:"Translate the Whole Page",changeToTranslateTheMainPage:"Translate the Main Content",changeToOnlyTranslationMode:"Show Translation only",changeToDualTranslationMode:"Show Dual Translation",translateToThePageEndImmediately:"Immediately translate to the bottom ",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension version is too old, please upgrade the extension to {minVersion} or a newer version and try to sync again.",badUserscriptBrowser:"The current browser does not correctly implement the interface of the Greasemonkey extension, please use another browser that <1>supports the Greasemonkey extension</1> such as (Firefox Nightly version)",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",needActionForOptions:"(need to set)",translationEngine:"Engine Options",sourceLanguage:"Original language",target:"Target Language",popupSourceLanguage:"Source",popupTarget:"Target",popupService:"Service",forThisSite:"For This Site:",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export",import_export_title:"Import/Export Configuration",syncToGoogleDrive:"Sync Now with Google Drive",previewAllThemes:"Preview all themes","translationTheme.none":"None","translationTheme.grey":"Black Gray","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.solidBorder":"Dashed Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.opacity":"Opacity effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Marker","translationTheme.marker2":"Maker2","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationTheme.nativeDashed":"System Dash Underline","translationTheme.nativeDotted":"System Dotted Underline","translationTheme.nativeUnderline":"System Straight Line Underline","translationTheme.wavy":"Squiggle","translationServices.tencent":"Tencent Translator","translationServices.tenAlpha":"Tencent Translator (Alpha)","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeeplX (Alpha)","translationServices.bing":"Microsoft Translator","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Azure Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.cai":"Caiyun Translation (Alpha)","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.you":"Youdao Translation (Alpha)","translationServices.transmart":"Tencent Smart Translation","translationServices.niu":"Niu Translation","translationServices.papago":"Papago Translation","translationServices.d":"DeeplX (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"Translate page title","always languages":"Always translate the following languages",neverTranslateLanguagesLabel:"Never Translated Languages",neverTranslateTheFollowingLanguagesDescription:"When a paragraph on a page is in one of the following languages, the translation will be skipped",enableUserscriptPagePopup:"Always show Popup windows on the page",enableUserscriptPagePopupDescription:"Three-finger touch to show the Popup.","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"Sites that always use the {theme} translation style",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language",syncToCloud:"Sync to cloud",syncToCloudDescription:"Upload the configuration to the cloud server, and you can synchronize the configuration between different browsers or Tampermonkey scripts, based on the last modification time.",authFail:"Authorization Failed",syncTitle:"Please select a file operation",import_hint:"Import",upload:"Upload",revokeAuth:"Revoke Authorization",uploadFail:"Upload Failed",download:"Download",importSuccess:"Upload Success",importFail:"Import Failed",deleteFail:"Delete Failed",backupToCloud:"Manage backup files manually",create_new_backup:"Add backup node",maxBackupFiles:"Up to{count}different nodes can be backed up. Please delete unneeded nodes",backupToCloudDescription:"Upload or restore backup files manually, up to 3 different backups",successSyncConfig:"Successfully synced with cloud",syncFail:"Synchronization failed",updatedAt:"Updated at {date}",lastSyncedAt:"Last checked at {date}",downloadFail:"Download failed",clickToDownload:"Click to download",aboutLabel:"About - Feedback ",aboutLabelWithoutSponsor:"About - Feedback","browser.openAboutPage":"About / Feedback",aboutIntro:"The extension is completely free and we hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. <br/><br/> You can also follow out <3>Twitter</3>, <4>Telegram Channel</4>, and <5>Email Subscription</5> below to track updates.",aboutIntroWithoutSponsor:"The extension is completely free and we hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. ",projectHomepage:"Project Homepage",joinTelegramGroup:"Join our communities for feature discussion",joinTelegramChannel:"Subscribe to our Telegram channel to get the latest updates",feedbackAndJoin:"Issue feedback/group",wechatPublicAccount:"Wechat Official Account",wechatCommunities:"Wechat Group",qqCommunities:"QQ Channel",autoSync:"Auto-Time Sync",loadingThemeTitle:"Loading Style",loadingThemeDescription:"Set the style of waiting for the translation to load","loadingTheme.spinner":"Spinning icon","loadingTheme.text":"Static Text... ","loadingTheme.none":"Disabled",developerDescription:"You can click <1>here</1> to see the documentation related to advanced customization","edit border color":"Edit border color",successSyncButNoChange:"The current configuration is consistent with that in the cloud server",customTheme:"Customize colors and sizes","customThemeLabel.borderColor":"Border color","customThemeLabel.borderRadius":"Border Round Corner","customThemeLabel.textColor":"Text color","customThemeLabel.backgroundColor":"Background color","customThemeLabel.zoom":"Font scale (%)",resetToDefaultColor:"Reset to default colors",isTranslateTitle:"Enable translate page title",isTranslateTitleDescription:"When enabled, the page title will be translated",enableSubtitle:"enableSubtitleTranslation",enableSubtitleDescription:"Enable translations for subtitle areas on sites like youtube",verifyService:"Click on this test service",verified:"Successful","field.model":"Model","field.translationEngine":"Translation engine","field.limitPerMinute":"Max requests per minute","field.limitPerSecond":"Max requests per second","field.maxTextLengthPerRequest":"Maximum text length per request","field.apiUrl":"Custom API interface address","description.limitPerMinute":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next minute. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.limitPerSecond":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next second. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.prompt":"Send as a user to OpenAI conversation, where {{text}} indicates the text of the paragraph,{{from}} indicates the language of the paragraph,{{to}} indicates the target language, you can omit {{text}}, if so, it'll be sent as a separated message","description.maxTextLengthPerRequest":"By default multiple paragraphs will be merged to reduce the number of requests, but if the total length of the paragraphs is too long, it may also cause the interface to respond slowly, so you can try to adjust this option to optimize speed",enabledExtension:"Enable extensions",clickToDisableExtension:"Click to disable extension",clickToEnableExtension:"Click to enable the extension",hasBeenDisabled:"Disabled","show password":"Show password",resetToDefaultSettings:"Reset to default settings",customContent:"Enter customization content",inputOptions:"Writing",retryAllParagraphs:"Retry all paragraphs",errorTooltipTitle:"Click to get the error details",retryAllButton:"Retry All",errorModalTitle:"Noops, something went wrong",disableConfirm:"Search Enhancement Settings",disableOnce:"Disable Once",disableGlobal:"Disable Forever",disableTint:"* You can re-enable in {option}.",option:"option",enableSearchEnhancement:"Enable Search Enhancement",saveSettings:"Save",closeModal:"Close"};var co=[{code:"zh-CN",messages:ca},{code:"zh-TW",messages:da},{code:"en",messages:ma}];var du={};for(let e of co)du[e.code]=e.messages;var mu="Immersive Translate",ye="immersive-translate",n0="pdf/index.html";var pa="subtitle/index.html",ha="ebook/index.html",fa="ebook/make/index.html",N="immersiveTranslate",r0="759003177173-mfm15s5nd77vfmo6e7lanof1emnanf0e.apps.googleusercontent.com",xu=N+"GoogleAccessToken",ba=N+"AuthFlow",i0="immersive-translate-config-latest.json",G3=N+"AuthState",V3=N+"IframeMessage",$3=N+"WaitForRateLimit",Ea=N+"DocumentMessageAsk",Y3=N+"DocumentMessageTellThirdParty",J3=N+"DocumentMessageThirdPartyTell",mo=N+"DocumentMessageHandler",Z3=`${N}Container`,Q3=`${N}SpecifiedContainer`,o0="buildinConfig",Iu="localConfig",V0="openOptionsPage";var $0="translateLocalPdfFile",Ca="donateContext",Y0="openEbookViewer",J0="openEbookBuilder",ya="openSubtitleBuilder",X3=`${N}PageTranslatedStatus`,el=`${N}PageUrlChanged`,ul=`${N}ReceiveCommand`,tl=N+"LastUseMouseHoverTime",al=N+"LastUseInputTime",xa=N+"LastUseManualTranslatePageTime",nl=`${N}PopupReceiveMessage`,go="immersivetranslate.com",po="config.immersivetranslate.com",rl=`https://${go}/`,il=`https://${po}/default_config.json`,ol=`${N}Mark`;var sl=`${N}Root`,ll=`data-${ye}-effect`,cl=`data-${ye}-translation-element-mark`,dl=`${N}TranslationElementMark`,ml=`${N}TranslatedMark`,gl=`${N}ParagraphId`,pl=`${N}LoadingId`,hl=`data-${ye}-loading-id`,fl=`${N}ErrorId`,bl=`data-${ye}-error-id`,El=`${N}AtomicBlockMark`,Cl=`${N}ExcludeMark`,yl=`data-${ye}-exclude-mark`,xl=`${N}StayOriginalMark`,Al=`${N}PreWhitespaceMark`,wl=`${N}InlineMark`,kl=`${N}BlockMark`,Dl=`${N}Left`,Tl=`${N}Right`,vl=`${N}Width`,Fl=`${N}Height`,Sl=`${N}Top`,Bl=`${N}FontSize`;var Ml=`${N}GlobalStyleMark`;var _l=`${ye}-target-wrapper`,Ll=`${ye}-pdf-target-container`,Pl=`${ye}-target-inner`,Rl=`${ye}-source-wrapper`,Il=`${ye}-target-translation-block-wrapper`,jl=`${ye}-root-translation-theme`,Ol=`${N}RootTranslationTheme`,zl=`${ye}-target-translation-vertical-block-wrapper`,Nl=`${ye}-target-translation-pdf-block-wrapper`,Ul=`${ye}-target-translation-pre-whitespace`,ql=`${ye}-target-translation-inline-wrapper`;var ju=["auto","zh-CN","zh-TW","en","ja","ko","es","de","fr","pt","ru","ar","it","ms","id","vi","af","th","ur","yue","bo","wyw","am","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","el","eo","et","eu","fa","fi","fil","fj","fy","ga","gd","gl","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","ig","is","jw","ka","kk","km","kn","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","mt","mww","my","ne","nl","no","ny","otq","pa","pl","ps","ro","sa","sd","si","sk","sl","sm","sn","so","sq","sr","sr-Cyrl","sr-Latn","st","su","sv","sw","ta","te","tg","tlh","tlh-Qaak","to","tr","ty","ug","uk","uz","xh","yi","yo","yua","zu"];var s0="zh-CN";var ga=[{type:"select",name:"codename",labelKey:"field.translationEngine",default:"youdao",required:!1,options:[{label:"translationServices.google",value:"google"},{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.aws",value:"aws"}]}],ho={bing:{name:"\u5FAE\u8F6F\u7FFB\u8BD1",homepage:"https://www.bing.com/translator"},google:{name:"Google",homepage:"https://translate.google.com/"},deepl:{name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://immersivetranslate.com/docs/services/deepL/",allProps:[{name:"authKey",label:"Auth Key",required:!0,type:"password"}]},transmart:{name:"Transmart",homepage:"https://transmart.qq.com/"},openai:{name:"Open AI",homepage:"https://openai.com/api/",docUrl:"https://immersivetranslate.com/docs/services/openai/",allProps:[{name:"APIKEY",required:!0,type:"password"},{name:"model",labelKey:"field.model",descriptionKey:"description.model",required:!1,type:"select",default:"gpt-3.5-turbo-0613",options:[{label:"gpt-3.5-turbo",value:"gpt-3.5-turbo"},{label:"gpt-3.5-turbo-0613",value:"gpt-3.5-turbo-0613"},{label:"gpt-4",value:"gpt-4"}]},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.limitPerSecond",descriptionLink1:"https://immersivetranslate.com/docs/services/openai/",type:"number",default:10},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0},{name:"apiUrl",labelKey:"field.apiUrl",required:!1,type:"text",default:"https://api.openai.com/v1/chat/completions",descriptionKey:"description.apiUrl",optional:!0},{name:"systemPrompt",label:"System Prompt",required:!1,descriptionKey:"description.systemPrompt",type:"text",optional:!0,default:"You are a translation engine, you can only translate text and cannot interpret it, and do not explain."},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:`Translate the text to {{to}}, please do not explain any sentences, just translate or leave them as they are.:

{{text}}`,optional:!0}]},chatgpt:{name:"ChatGPT Web(3.5 mobile)",homepage:"https://chat.openai.com",beta:!0},youdao:{name:"Youdao",homepage:"https://youdao.com/",docUrl:"https://immersivetranslate.com/docs/services/youdao/",allProps:[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:200,optional:!0},{name:"domain",required:!1,labelKey:"field.domain",descriptionKey:"description.domain",descriptionLink1:"https://fanyi.youdao.com/openapi/",type:"text",default:"general",optional:!0},{name:"vocabId",required:!1,labelKey:"field.vocabId",descriptionKey:"description.vocabId",type:"text",default:"",optional:!0}]},tencent:{name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://immersivetranslate.com/docs/services/tencent/",allProps:[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]},azure:{name:"azure",homepage:"https://learn.microsoft.com/en-us/azure/cognitive-services/translator/text-translation-overview",docUrl:"https://immersivetranslate.com/docs/services/azure/",allProps:[{name:"region",required:!0,default:"eastasia",type:"text"},{name:"APIKEY",required:!0,type:"password"}]},papago:{name:"Papago",homepage:"https://translate.google.com/",canary:!0},baidu:{name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://immersivetranslate.com/docs/services/baidu/",allProps:[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:1,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1800,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:8,optional:!0},{name:"domain",required:!1,labelKey:"field.domain",descriptionKey:"description.domain",descriptionLink1:"https://fanyi.youdao.com/openapi/",type:"text",default:"general",optional:!0}]},volc:{name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://immersivetranslate.com/docs/services/volcano/",allProps:[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1800,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:8,optional:!0}]},caiyun:{name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://immersivetranslate.com/docs/services/caiyun/",allProps:[{name:"token",required:!0,type:"password"}]},cai:{name:"Cai",homepage:"https://fanyi.caiyunapp.com/",alpha:!0},mock:{name:"Mock",homepage:"https://www.google.com"},mock2:{name:"Mock2",homepage:"https://www.google.com"},tenAlpha:{name:"TenAlpha",homepage:"https://fanyi.qq.com/",alpha:!0},you:{name:"You",alpha:!0,homepage:"https://youdao.com/"},openl:{name:"Openl",homepage:"https://openl.club/",docUrl:"https://immersivetranslate.com/docs/services/openL/",allProps:[...ga,{type:"password",name:"apikey",required:!0}],props:ga},volcAlpha:{name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},d:{name:"D () ",alpha:!0,homepage:"https://www.deepl.com/translator"},dpro:{name:"DPro (Canary) ",canary:!0,homepage:"https://www.deepl.com/translator"},deeplx:{name:"DeepLX (Beta)",beta:!0,homepage:"https://www.deepl.com/translator",allProps:[{name:"url",label:"API URL",required:!0,type:"text"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0}]},niu:{name:"niutrans",homepage:"https://niutrans.com/",docUrl:"https://immersivetranslate.com/docs/services/niu",allProps:[{name:"APIKEY",required:!0,type:"password"}]}},Wl={type:N+"ChildFrameToRootFrameIdentifier"};var Au=console,Z0=class{#e=performance.now();reset(){this.#e=performance.now()}stop(u){let t=performance.now(),a=Math.round(t-this.#e),n=Ke.green;a>1e4?n=Ke.red:a>1e3&&(n=Ke.yellow),Au.debug(Ke.dim(mu+" TIMING:"),u,"in",n(a+"ms")),this.#e=t}},Ou=class{#e=1;get level(){return this.#e}setLevel(u){switch(u){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...u){this.#e<=0&&Au.log(Ke.dim(mu+" DEBUG:"),...u)}v(...u){this.#e<=0}info(...u){this.#e<=1&&Au.log(Ke.green(mu+" INFO:"),...u)}l(...u){this.#e<=1}warn(...u){this.#e<=2&&Au.warn(Ke.yellow(mu+" WARN:"),...u)}error(...u){this.#e<=3&&Au.error(Ke.red(mu+" ERROR:"),...u)}fatal(...u){this.#e<=4&&Au.error(Ke.red(mu+" FATAL:"),...u)}timing(){return this.level===0?new Z0:{reset:()=>{},stop:()=>{}}}},P=new Ou;function wu(e){if(typeof e!="string")return"auto";let u=e.toLowerCase();if(u==="zh"||u==="zh-hans")return"zh-CN";if(u==="zh-hant"||u==="zh-hk")return"zh-TW";if(u==="iw")return"he";if(u==="jv")return"jw";let t=ju.map(n=>n.toLowerCase()),a=t.indexOf(u);if(a===-1)if(u.indexOf("-")>=0){u=u.split("-")[0];let n=t.indexOf(u);return n===-1?"auto":ju[n]}else return"auto";else return ju[a]}var Q0="DENO",l0="CHROME",c0="FIREFOX";function Aa(e){let u=l0;try{let t=navigator?.userAgent||"";/firefox/i.test(t)||typeof InstallTrigger<"u"?u=c0:/deno/i.test(t)&&(u=Q0)}catch{}return e===l0&&u===l0||e===c0&&u===c0||e===Q0&&u===Q0}function wa(){return Aa(l0)}function ka(){return typeof Deno<"u"}function Da(){return Aa(c0)}var Ta={addListener:()=>{},removeListener:()=>{},hasListener:()=>{}},va={permissions:{contains:()=>{},request:()=>{}},runtime:{onMessage:Ta,openOptionsPage:()=>{},lastError:{message:""}},storage:{sync:{get:()=>{},set:()=>{}}},tabs:{onUpdated:Ta,query:()=>{},sendMessage:()=>{}}};var g;ka()?g=va:g=globalThis.immersiveTranslateBrowserAPI;var Fa=N+"SyncStoreKey_";function ku(e,u){let t=Fa+e;return g.storage.sync.get(t).then(a=>a[t]===void 0?u:a[t])}function Du(e,u){let t=Fa+e;return g.storage.sync.set({[t]:u})}var fo=N+"StoreKey_";function zu(e,u){let t=fo+e;return g.storage.local.get(t).then(a=>a[t]===void 0?u:a[t])}function De(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():C}var H=De();function Tu(){return H.IMMERSIVE_TRANSLATE_USERSCRIPT==="1"}function We(){if(H.IMMERSIVE_TRANSLATE_SAFARI==="1")return!0;if(typeof globalThis.immersiveTranslateBrowserAPI<"u"&&globalThis.immersiveTranslateBrowserAPI.runtime&&globalThis.immersiveTranslateBrowserAPI.runtime.getManifest){let u=globalThis.immersiveTranslateBrowserAPI.runtime.getManifest();return!!(u&&u._isSafari)}else return!1}function Sa(){return typeof Deno<"u"}var Ac=De().PROD==="1",wc=De().PROD!=="1";function Ba(){return typeof globalThis.__IS_IMMERSIVE_TRANSLATE_WEB_OPTIONS_PAGE__<"u"}function X0(){if(typeof globalThis.immersiveTranslateBrowserAPI<"u"&&globalThis.immersiveTranslateBrowserAPI.runtime&&globalThis.immersiveTranslateBrowserAPI.runtime.getManifest){let e=globalThis.immersiveTranslateBrowserAPI.runtime.getManifest();return!!(e&&(e._isUserscript||e._isSafari))}else return!1}var gu=class extends Error{constructor(t,a,n){super(a);this.name=t,n&&(this.details=n)}};async function d0(e){let u;if(e&&e.retry&&e.retry>0)try{u=await S0(Ma.bind(null,e),{multiplier:2,maxAttempts:e.retry})}catch(t){throw t&&t.name==="RetryError"&&t.cause?t.cause:t}else u=await Ma(e);return u}async function Ma(e){e.body;let{url:u,responseType:t,...a}=e;t||(t="json"),a={mode:"cors",...a};let n=!0;e.fetchPolyfill&&(n=!1);let r=e.fetchPolyfill||fetch,o=12e4;if(e.timeout&&(o=e.timeout),n){let l=new AbortController,c=l.signal;setTimeout(()=>{l.abort()},o),a.signal=c}let i;try{i=await r(u,a)}catch(l){P.error("fetch error",l);let c=l.message||"";throw l.message="\u7F51\u7EDC\u95EE\u9898\uFF0C\u65E0\u6CD5\u8FDE\u63A5\u5230\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5\u4F60\u7684\u4EE3\u7406\u6216\u672C\u5730\u7F51\u7EDC\u8FDE\u63A5\u540E\u91CD\u8BD5\u3002 "+c,l}if(i.ok&&i.status>=200&&i.status<400){if(t==="json")return await i.json();if(t==="text")return await i.text();if(t==="raw"){let l=await i.text(),c=Object.fromEntries([...i.headers.entries()]),d=i.url;return d||(i.headers.get("X-Final-URL")?d=i.headers.get("X-Final-URL"):d=u),{body:l,headers:c,status:i.status,statusText:i.statusText,url:d}}else if(t==="stream"){let l="",c;if(i.body&&i.body instanceof ReadableStream)for await(let d of bo(i.body)){let f=new TextDecoder().decode(d);l+=f;let S;for(;(S=l.indexOf(`
`))>=0;){let T=l.slice(0,S).trim();if(l=l.slice(S+1),T.startsWith("event:")||T==="")continue;let F="";if(T.startsWith("data:")&&(F=T.slice(5).trim()),F==="[DONE]")break;let G;try{G=JSON.parse(F??"")}catch(Z){P.debug("json error",Z);continue}c=G}}return c}}else{let l;try{l=await i.text()}catch(f){P.error("parse response failed",f)}l&&P.error("fail response",l);let c="";l&&(c=l.slice(0,280));let d="\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\uFF0C\u4EE3\u7801:"+i.status+": "+(i.statusText||"")+c;throw i.status===429?d=`\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\uFF1A429\uFF0C\u8BF4\u660E\u8BF7\u6C42\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002 ${c}`:i.status===403?d=`\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\uFF1A403\uFF0C \u8BF4\u660E\u6682\u65F6\u6CA1\u6709\u6743\u9650\u8BBF\u95EE\u8BE5\u670D\u52A1\u3002 ${c}`:i.status===400?d=`\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\uFF1A400\uFF0C \u8BF4\u660E\u8BF7\u6C42\u53C2\u6570\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u76F8\u5E94\u914D\u7F6E\u3002 ${c}`:i.status===502&&(d=`\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\uFF1A502\uFF0C \u8BF4\u660E\u670D\u52A1\u8D85\u65F6\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002 ${c}`),new gu("fetchError",d,l)}}async function*bo(e){let u=e.getReader();try{for(;;){let{done:t,value:a}=await u.read();if(t)return;yield a}}finally{u.releaseLock()}}var Eo=new Map;function _a(e){let u=Co(64),t=new CustomEvent(Ea,{detail:JSON.stringify({...e,type:"ask",id:u})});return document.dispatchEvent(t),new Promise((a,n)=>{Eo.set(u,(r,o)=>{r?n(r):a(o)})})}function Co(e){let u="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=t.length,n=0;for(;n<e;)u+=t.charAt(Math.floor(Math.random()*a)),n+=1;return u}var La={manifest_version:3,name:"__MSG_brandName__",description:"__MSG_brandDescription__",version:"0.7.10",default_locale:"en",background:{service_worker:"background.js"},web_accessible_resources:["styles/inject.css","pdf/index.html","ebook/index.html","ebook/index.html","ebook/make/index.html"],content_scripts:[{matches:["<all_urls>","file:///*","*://*/*"],js:["content_script.js"],run_at:"document_end",all_frames:!0}],commands:{toggleTranslatePage:{suggested_key:{default:"Alt+A"},description:"__MSG_toggleTranslatePage__"},toggleTranslateTheWholePage:{suggested_key:{default:"Alt+W"},description:"__MSG_toggleTranslateTheWholePage__"},toggleOnlyTransation:{description:"__MSG_toggleOnlyTransation__"},toggleTranslateToThePageEndImmediately:{description:"__MSG_toggleTranslateToThePageEndImmediately__"},toggleTranslateTheMainPage:{description:"__MSG_toggleTranslateTheMainPage__"},toggleTranslationMask:{description:"__MSG_toggleTranslationMask__"}},options_page:"options.html",options_ui:{page:"options.html",open_in_tab:!0,browser_style:!1},permissions:["storage","activeTab","contextMenus","webRequest","webRequestBlocking","declarativeNetRequestWithHostAccess","declarativeNetRequestFeedback","declarativeNetRequest"],host_permissions:["<all_urls>"],declarative_net_request:{rule_resources:[{id:"ruleset_1",enabled:!0,path:"rules/request_modifier_rule.json"}]},action:{default_popup:"popup.html",default_icon:{"32":"icons/32.png","48":"icons/48.png","64":"icons/64.png","128":"icons/128.png","256":"icons/256.png"}},browser_action:{default_icon:"icons/32.png",default_popup:"popup.html",theme_icons:[{dark:"icons/32.png",light:"icons/dark-32.png",size:32},{dark:"icons/48.png",light:"icons/dark-48.png",size:48},{dark:"icons/64.png",light:"icons/dark-64.png",size:64},{dark:"icons/128.png",light:"icons/dark-128.png",size:128},{dark:"icons/256.png",light:"icons/dark-256.png",size:256}]},icons:{"32":"icons/32.png","48":"icons/48.png","64":"icons/64.png","128":"icons/128.png","256":"icons/256.png"},browser_specific_settings:{gecko:{id:"{5efceaa7-f3a2-4e59-a54b-85319448e305}",strict_min_version:"63.0"}},key:"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7JPn78UfqI3xIIOPPLPS74UTzLfJL1gQM8hlk/deKWvFP/WqUBnPJPdhQeF45sFpI1OjO70nFqdATT4/RwYAiZK7G/E6m27MDVnhHjszfzReOuoAEn9J3RnE2xEx5pFhRFcelhnwTTLrrn90aaPcaMtNsgXtZA1Ggz/SnX9I4ZygqpJYjx3Ql2t6SyNK222oRQiKMT93Rrjgyc8RFA7FKXsWglG0TvseRjbmG5Jk5gDx+2/YTcWGqCDotQnWnkPj/dBO23UAX7IpyJK3FGYdkvWFih6OVClHIIWY8mfCjjwSGbXNQNesaa9F2hrzBZ5MRTj4m7yj76mGxuPHPIE8mwIDAQAB"};function Pa(){return La.version}function Ra(){try{return globalThis.self!==globalThis.top}catch{return!0}}var Nu=new Map,pu=class{constructor(u,t=!1){this.logger=new Ou,t&&this.logger.setLevel("debug"),this.fromType=u,Nu.has(u)||(Nu.set(u,new Map),g.runtime.onMessage.addListener((a,n,r)=>{let o=a.from,i=a.to,l,c,d;n.tab&&n.tab.id&&(l=n.tab.id,o=`${o}:${l}`,c=n.tab.url,d=n.tab.active),this.logger.debug(`${a.to} received message [${a.payload.method}] from ${a.from}`,a.payload.data?a.payload.data:" ");let f=ut(i),{type:S,name:T}=f;if(S!==u)return!1;let F=ut(o),Z=Nu.get(S).get(T);if(!Z)return this.logger.debug(`no message handler for ${S}:${i}, but it's ok`),!1;let{messageHandler:m,sync:Te}=Z,q={type:u,name:F.name,id:l,url:c,active:d};if(Te){try{let Q=m(a.payload,q);r({ok:!0,data:Q})}catch(Q){r({ok:!1,errorName:Q.name,errorMessage:Q.message,errorDetails:Q.details})}return!1}else return m(a.payload,q).then(Q=>{r({ok:!0,data:Q})}).catch(Q=>{r({ok:!1,errorName:Q.name,errorMessage:Q.message,errorDetails:Q.details})}),!0}))}getConnection(u,t,a){let n=!1;a&&a.sync&&(n=!0);let r=this.fromType,o=Nu.get(r);if(o.has(u))return o.get(u).connectionInstance;{let i=new et(`${r}:${u}`,this.logger);return Nu.get(r).set(u,{messageHandler:t,sync:n,connectionInstance:i}),i}}},et=class{constructor(u,t){this.from=u,this.logger=t}async sendMessage(u,t){let a=ut(u),{type:n,id:r}=a;if(n!=="content_script"){let o={to:u,from:this.from,payload:t};this.logger.debug(`${o.from} send message [${o.payload.method}] to ${o.to}`,o.payload.data?o.payload.data:" ");try{let i=await g.runtime.sendMessage(o);return Ia(o,i,this.logger)}catch(i){if(n==="popup"){let l=`popup ${u} is not active, so the message does not send, ignore this error, ${JSON.stringify(t)}`;return this.logger.debug(l,t,u,i),Promise.resolve({message:l})}else throw i}}else{let o={from:this.from,to:u,payload:t};this.logger.debug(`${o.from} send message [${o.payload.method}] to ${o.to}`,o.payload.data?o.payload.data:" ");let i=await g.tabs.sendMessage(r,o);return Ia(o,i,this.logger)}}};function Ia(e,u,t){if(u){if(u.ok)return t.debug(`${e.from} received response from ${e.to}:`,u.data?u.data:" "),u.data;throw new gu(u.errorName||"UnknownError",u.errorMessage||"Unknown error",u.errorDetails)}else throw new gu("noResponse","Unknown error")}function ut(e){let u=e.split(":");if(u.length<2)throw new Error("not a valid to string");let t={type:u[0],name:u[1]};if(u[0]==="content_script"){let a=parseInt(u[2]);if(!isNaN(a))t.id=a;else throw new Error("tab id not a valid number")}return t}var m0;function xo(){return m0||(m0=new pu("content_script",!1).getConnection("pure_main",()=>{}),m0)}var ja="G-MKMD9LWFTR";async function za(e,u){try{let t=De();if(t.INSTALL_FROM==="firefox_store")return;let n=Tu(),r=Ra(),o=t.PROD==="1",i="sitc4WmvShWYwfU0dANM3Q",l=await ku("fakeUserId","");l||(l=await zu("fakeUserId",""),l&&await Du("fakeUserId",l));let c=Pa(),d=new Date,f=await ku("installedAt","");f||(f=await zu("installedAt",""),f&&await Du("installedAt",f)),l?f||(f=new Date(0).toISOString(),await Du("installedAt",f)):(l=Ao(32),await Du("fakeUserId",l)),f||(f=d.toISOString(),await Du("installedAt",f));let S=new Date(f),T=Oa(S),F=Oa(d),G=T===F,Z=d.getTime()-S.getTime()<7*24*60*60*1e3,m=`https://www.google-analytics.com/mp/collect?measurement_id=${ja}&api_secret=${i}`;o||(m=`https://www.google-analytics.com/debug/mp/collect?measurement_id=${ja}&api_secret=${i}`);let Te="";typeof navigator<"u"&&(Te=window.navigator.userAgent);let q=e0.parse(Te),Q=u.map(w=>{let E=w.params||{};return q.os&&(E.os_name=q.os.name||"unknown",E.os_version=q.os.version||"unknown",E.os_version_name=q.os.versionName||"unknown"),q.browser&&(E.browser_name=q.browser.name||"unknown",E.browser_version=q.browser.version||"unknown"),q.platform&&(E.platform_type=q.platform.type||"unknown"),q.engine&&(E.engine_name=q.engine.name||"unknown",E.engine_version=q.engine.version||"unknown"),c&&(E.version=c),t.INSTALL_FROM&&(E.install_from=t.INSTALL_FROM),T&&(E.install_day=wo(S)),E.userscript=n.toString(),G?E.is_new_user_today="1":E.is_new_user_today="0",Z?E.is_new_user_this_week="1":E.is_new_user_this_week="0",r?E.main_frame=0:E.main_frame=1,{...w,params:E}}),be=await Do({responseType:"text",url:m,method:"POST",body:JSON.stringify({client_id:l,user_id:l,events:Q})})}catch{}}function Ao(e){let u="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=t.length,n=0;for(;n<e;)u+=t.charAt(Math.floor(Math.random()*a)),n+=1;return u}function Oa(e){let t=e.toLocaleString("en-US",{timeZone:"Asia/Shanghai"}).split(" ")[0];return t.endsWith(",")&&(t=t.slice(0,-1)),t}function wo(e){try{let t=e.toLocaleString("en-US",{timeZone:"Asia/Shanghai"}).split(" ")[0];t.endsWith(",")&&(t=t.slice(0,-1));let[a,n,r]=t.split("/");return t=`${r}-${a}-${n}`,t}catch{return"unknown"}}async function ko(e){return await xo().sendMessage("background:main",e)}function Do(e){return Ba()?_a({method:"request",data:e}):Tu()||Sa()?(e.fetchPolyfill=globalThis.GM_fetch,d0(e)):ko({method:"fetch",data:e})}var tt={immediateTranslationTextCount:5e3,interval:36e5,beta:!1,cache:!0,translationMode:"dual",enabled:!0,minVersion:"0.6.2",donateUrl:"https://immersivetranslate.com/docs/donate/",uninstallUrl:"https://wj.qq.com/s2/12328372/04e0/",feedbackUrl:"https://github.com/immersive-translate/immersive-translate/issues",isShowContextMenu:!0,enableInputTranslation:!0,inactiveDays:21,enableInputTranslationWithoutTriggerKey:!0,defaultAlwaysTranslatedUrls:["twitter.com","www.reddit.com","www.kadaza.com","en.wikipedia.org","www.reuters.com","www.bloomberg.com","*.medium.com","news.ycombinator.com","edition.cnn.com","www.wsj.com","www.goodreads.com"],modifiedBySystem:!1,enableDefaultAlwaysTranslatedUrls:!0,isChangedAlwaysTranslatedUrls:!1,inputTranslationUrlPattern:{matches:[],excludeMatches:[]},inputTranslationBlockUrls:["*.feishu.cn","www.notion.so","www.figma.com"],inputStyleBlockUrls:[],inputTargetLanguage:"en",inputStartingTriggerKey:"/",inputTrailingTriggerKey:"space",inputTrailingTriggerKeyRepeatTimes:3,inputTrailingTriggerKeyTimeout:200,mutationBlockUrls:["www.feishu.cn"],inputLanguageCodeAlias:{en:["\u82F1\u6587","\u82F1\u8BED"],"zh-CN":["zh","zh-Hant","\u4E2D\u6587"],"zh-TW":["zht","zh-Hant","\u7E41\u4E2D"],ja:["\u65E5\u8BED","\u65E5\u6587"],ko:["\u97E9\u8BED","\u97E9\u6587"],fr:["\u6CD5\u8BED","\u53D1\u6587"],es:["\u897F\u73ED\u7259\u8BED","\u897F\u8BED"],ru:["\u4FC4\u8BED","\u4FC4\u6587"],bo:["\u85CF\u8BED"]},inputStartingTriggerKeyAlias:{"/":["\u3001"],".":["\u3002"],",":["\uFF0C"],space:[" "],";":["\uFF1B"],":":["\uFF1A"]},blockUrls:["https://dash.immersivetranslate.com/*","https://immersive-translate.owenyoung.com/options/","https://immersive-translate.owenyoung.com/auth-done/","https://dash.immersivetranslate.com/","https://dash.immersivetranslate.com/auth-done/","http://localhost:8000/dist/userscript/options/","http://localhost:8000/auth-done/","http://192.168.50.9:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com","http://localhost:8000/options/","http://192.168.50.9:8000/options/","googleads.g.doubleclick.net","s1.hdslb.com","oapi.dingtalk.com","login.dingtalk.com","imasdk.googleapis.com","acdn.adnxs.com","pos.baidu.com","js-sec.indexww.com","g.alicdn.com","ads.pubmatic.com","challenges.cloudflare.com","accounts.google.com","images-na.ssl-images-amazon.com","tpc.googlesyndication.com","js.stripe.com","acdn.adnxs-simple.com","s.union.360.cn","s.amazon-adsystem.com","www.recaptcha.net","s7.addthis.com","z.moatads.com","https://www.marketwatch.com/static_html/daa-min.html","tr.snapchat.com","ct.pinterest.com","*.moatads.com","secure-us.imrworldwide.com","static.noeyeon.click","widgets.outbrain.com","www.dianomi.com/smartads.epl","secure-assets.rubiconproject.com","eus.rubiconproject.com","eus.rubiconproject.com","i.liadm.com","eb2.3lift.com","googleads.g.doubleclick.net","https://www.google.com/recaptcha/*","ad.doubanio.com","mail.qq.com/cgi-bin/frame_html"],telemetry:!0,loadingTheme:"spinner",canary:!1,translationThemePatterns:{},translationLanguagePattern:{matches:[],excludeMatches:[]},translationServices:{volcAlpha:{placeholderDelimiters:["{","}","b"]},volc:{placeholderDelimiters:["{","}","b"]},tencent:{placeholderDelimiters:["{","}","b"]},google:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}","b"]},transmart:{placeholderDelimiters:["#","#","b"]},baidu:{placeholderDelimiters:["#","#"]},caiyun:{placeholderDelimiters:["{","}"]},youdao:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}"]},deepl:{immediateTranslationTextCountForImmersiveDeepl:5e4,placeholderDelimiters:["{{","}}","b"],limit:25},mock:{placeholderDelimiters:["<code>","</code>"]},bing:{maxTextLengthPerRequest:1800,placeholderDelimiters:["<code>","</code>","b"]},deeplx:{limit:3},d:{immediateTranslationTextCount:0},papago:{placeholderDelimiters:["{","}"]},dpro:{apiUrl:"https://api.deepl.com/jsonrpc"},openai:{placeholderDelimiters:["{{","}}","b"],immediateTranslationTextCount:3e3,translationDebounce:300,interval:1350,prompt:`Translate the text to {{to}}, please do not explain any sentences, just translate or leave them as they are.:

{{text}}`,maxTextGroupLengthPerRequest:1,newlinePlaceholderDelimiters:[`

-|`,`|-

`,`
?
?-\\|\\d+\\|-
?
?`]},chatgpt:{placeholderDelimiters:["{{","}}","b"],immediateTranslationTextCount:2e3,maxTextGroupLengthPerRequest:1,maxTextLengthPerRequest:2e3,prompt:`Translate the text to {{to}}:

{{text}}`,newlinePlaceholderDelimiters:[`

-|`,`|-

`,`
?
?-\\|\\d+\\|-
?
?`]}},shortcuts:{toggleTranslatePage:"Alt+A",toggleTranslateTheWholePage:"Alt+W",toggleOnlyTransation:"",toggleTranslateToThePageEndImmediately:"",toggleTranslationMask:""},tempTranslateDomainMinutes:0,immediateTranslationPattern:{matches:["www.tumblr.com","twitter.com","*.twitter.com","medium.com","*.medium.com","www.facebook.com","www.youtube.com","m.youtube.com","mail.google.com","discord.com","google.com","facebook.com","*.facebook.com","web.telegram.org","github.com","*.instagram.com","instagram.com","*.slack.com","https://old.reddit.com/","https://www.reddit.com/r/popular/","https://www.reddit.com/","https://www.reddit.com/hot/","https://www.reddit.com/new/","https://www.reddit.com/top/","https://www.reddit.com/.compact"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},translationParagraphLanguagePattern:{matches:["www.reddit.com","old.reddit.com","twitter.com","www.tumblr.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","read.readwise.io","www.inoreader.com","mail.google.com","google.com","discord.com","*.instagram.com","instagram.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},sourceLanguageUrlPattern:{},generalRule:{_comment:"",enableSubtitle:!0,mutationObserverLimitTargetSelectors:[],condition:{},normalizeBody:"",mutationExcludeSelectors:["span.highlighter--highlighted","span.highlighter-ext","mark","msreadoutspan"],useIframePostMessage:!0,searchEnhancementConfig:[],injectedCss:[],isOnBoardingPage:!1,isEbook:!1,isEbookBuilder:!1,ignoreZhCNandZhTW:!1,showSponsorOnSafari:!1,noTranslateRegexp:["^\\d+.+ago$","^\\d+\\s+MIN\\s+READ$"],waitForSelectors:[],isInjectOptionsUrl:!1,isInjectVersion:!1,waitForSelectorsTimeout:3e3,pairs:{},aiRule:{},isSubtitleBuilder:!1,minZIndex:0,initTranslationServiceAsSoonAsPossible:!0,targetWrapperTag:"font",additionalInjectedCss:[],isTranslateTitle:!0,enableSearchEnhancement:!0,searchEnhancementSelector:"#rhs",languageDetectMinTextCount:50,wrapperPrefix:"smart",wrapperSuffix:"smart",isPdf:!1,isTransformPreTagNewLine:!1,urlChangeDelay:50,mutationChangeDelay:10,mainFrameMinTextCount:50,mainFrameMinWordCount:5,visibleDelay:0,additionalStayOriginalSelectors:["span.katex","span.notranslate",".MathJax_Preview",".MathJax",".mwe-math-element","span[translate=no]","em[translate=no]","code[translate=no]","span.math.inline","span.math.display",".ltx_Math",".mathjax-block",".MathJax_CHTML","kbd","span.pretex-inline"],translationBlockStyle:"",isShowUserscriptPagePopup:!0,observeUrlChange:!1,paragraphMinTextCount:4,paragraphMinWordCount:2,shadowRootSelectors:[],blockMinTextCount:24,blockMinWordCount:4,asideMaxTextCount:1e3,asideMaxWordCount:200,asideMaxTextCountPerParagraph:67,asideMaxWordCountPerParagraph:12,lineBreakMaxTextCount:0,globalAttributes:{},inputTutorialsText:"",inputTutorialsSelectors:[],globalMeta:{},globalStyles:{".sr-only":"display:none"},initialGlobalAttributes:{},initialSelectorGlobalAttributes:{header:{translate:"no"},"footer:last-of-type":{translate:"no"},"nav:last-of-type":{translate:"no"},nav:{translate:"no"}},selectors:[],preWhitespaceDetectedTags:["DIV","SPAN"],stayOriginalSelectors:[],additionalSelectors:["h1","section h2","section h3","section h4","main h2","main h3","main h4",".article-title",".article-subtitle",".article_title",".article_subtitle",".article__title",".articleTitle",".Article__content",".titleLink",".summary",".headline",".page-content","aside.note","aside.article-comments","aside.onebox"],atomicBlockTags:[],excludeSelectors:[],additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]","rp","rt",".prism-code","[role=code]","#omni-extension",".omni-item","div[data-paste-markdown-skip]","table.highlight","div[class^=codeBlockContent]","div[class^=codeBlockLines]","div[class^=token-line]","#liuchan-window > .liuchan-container > *",".material-icons","i.fa","i[class^=fa-]",".notranslate","[translate=no]",".navmenu-container"],translationClasses:[],atomicBlockSelectors:[],excludeTags:["TITLE","LINK","SCRIPT","STYLE","TEXTAREA","SVG","svg","G","NOSCRIPT","INPUT","BUTTON","BASE","SELECT","OPTION","HR","PRE","KBD","WBR","RT","RP","META","MATH","TTS-SENTENCE","AIO-CODE"],bodyTranslateTags:["FOOTER","ASIDE","BUTTON","NAV"],forceTranslateTags:[],metaTags:["META","SCRIPT","STYLE","NOSCRIPT"],additionalExcludeTags:[],stayOriginalTags:["CODE","TT","IMG","SUP","SUB"],additionalStayOriginalTags:[],inlineTags:["A","ABBR","FONT","ACRONYM","B","INS","DEL","RUBY","RP","RB","BDO","MARK","BIG","RT","NOBR","CITE","DFN","EM","I","LABEL","Q","S","SMALL","SPAN","STRONG","SUB","SUP","U","KBD","TT","VAR","IMG","CODE","SCRIPT","STYLE","LINK","TIME","META","WBR","RELIN-HC","RELIN-HIGHLIGHT","RELIN-ORIGIN","RELIN-TARGET","XQDD_HIGHLIGHT_NEW_WORD","NOBR"],additionalInlineTags:[],extraInlineSelectors:[],additionalInlineSelectors:[".MathJax_Preview",".MathJax",".highlighter--highlighted"],extraBlockSelectors:["turbo-frame","readme-toc","#hs_cos_wrapper_post_body","#hs_cos_wrapper_post_body"],allBlockTags:["BODY","HGROUP","CONTENT","ADDRESS","ARTICLE","ASIDE","DETAILS","BLOCKQUOTE","CANVAS","DD","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","HEADER","FORM","HR","MAIN","SUMMARY","NAV","NOSCRIPT","PRE","SECTION","TABLE","TFOOT","UL","VIDEO","P","DIV","H1","H2","H3","H4","H5","H6","UL","LI","OL","BR","PICTURE","TBODY","TR","TD","TH","SOURCE","C-WIZ","BUTTON","TURBO-FRAME","README-TOC"],mutationObserverContainerSelectors:[],pdfNewParagraphLineHeight:2.4,pdfNewParagraphIndent:1.2,pdfNewParagraphIndentRightIndentPx:130,fingerCountToToggleTranslagePageWhenTouching:4,fingerCountToToggleTranslationMaskWhenTouching:0,fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:0,mouseHoverHoldKey:"Off"},rules:[{id:"simpread",selectorMatches:"div.simpread-read-root.simpread-read-root-show > sr-read",mainFrameSelector:"div.simpread-read-root.simpread-read-root-show > sr-read"},{id:"pdf",matches:["moz-extension://*/pdf/index.html*"],isPdf:!0,isTranslateTitle:!1,wrapperPrefix:"",wrapperSuffix:"",urlChangeDelay:0,selectors:[".textLayer"],excludeSelectors:[".annotationLayer"],globalStyles:{"div.page":"width: 98%;",".textLayer":"overflow:visible;opacity: 1;"}},{id:"txt",matches:["*://*/*.txt","file://*/*.txt"],selectorMatches:["body > pre"],isTransformPreTagNewLine:!0,"excludeTags.remove":["PRE"]},{id:"hangejp",matches:["arad.hange.jp","arad.nexon.co.jp","oapi.dingtalk.com","login.dingtalk.com"],useIframePostMessage:!1},{id:"preSites",matches:["mail.jabber.org","antirez.com"],isTransformPreTagNewLine:!0},{id:"wikipedia",matches:"*.wikipedia.org",paragraphMinWordCount:2,paragraphMinTextCount:4,injectedCss:[".immersive-translate-target-translation-block-wrapper { display: block; }"],excludeSelectors:[".mw-editsection",".mw-cite-backlink","#p-lang-btn","#right-navigation","#p-associated-pages",".vector-header"],stayOriginalSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],extraInlineSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"]},{id:"twitter",matches:["twitter.com","mobile.twitter.com","tweetdeck.twitter.com","https://platform.twitter.com/embed*"],additionalStayOriginalSelectors:['[data-testid="tweetText"] a',"[data-testid='UserDescription'] a","[data-testid='HoverCard'] a","[data-testid='UserCell'] a","[data-testid='birdwatch-pivot']  a"],blockMinTextCount:0,blockMinWordCount:0,excludeSelectors:["[aria-describedby][role=button]","header","[data-testid='radioGroupplayback_rate'] div","[data-testid='userFollowIndicator']","[class='css-901oao r-14j79pv r-37j5jr r-n6v787 r-16dba41 r-1cwl3u0 r-bcqeeo r-qvutc0']"],extraBlockSelectors:['[data-testid="tweetText"] div.r-6koalj'],extraInlineSelectors:['[data-testid="tweetText"] div.r-xoduu5','[data-testid="tweetText"] span','[data-testid="UserDescription"] div',"[data-testid='HoverCard'] div[dir=auto] div","[data-testid='HoverCard'] span[dir=auto] div"],globalStyles:{"[data-testid='card.layoutLarge.detail'] > div:nth-child(2)":"-webkit-line-clamp: unset;","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)":"-webkit-line-clamp: unset;","[data-testid='tweetText']":"-webkit-line-clamp: unset;"},ignoreZhCNandZhTW:!0,isTranslateTitle:!1,useIframePostMessage:!1,observeUrlChange:!1,paragraphMinTextCount:2,paragraphMinWordCount:1,selectors:['[data-testid="tweetText"]',".tweet-text",".js-quoted-tweet-text","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)","[data-testid='developerBuiltCardContainer'] > div:nth-child(2)","[data-testid='card.layoutLarge.detail'] > div:nth-child(2)","[data-testid='cellInnerDiv'] div[data-testid='UserCell'] > div> div:nth-child(2)","[data-testid='UserDescription']","[data-testid='HoverCard'] div[dir=auto]","[data-testid='HoverCard'] span[dir=auto]","[data-testid='HoverCard'] [role='dialog'] div[dir=ltr]","[data-testid='birdwatch-pivot'] div[dir=ltr]"]},{id:"threads",matches:"www.threads.net",selectors:["p"]},{id:"stackoverflow",matches:["stackoverflow.com","*.stackexchange.com","superuser.com","askubuntu.com","serverfault.com"],extraBlockSelectors:["span.comment-copy"],excludeSelectors:["a.comment-user","span.comment-date","div.s-prose.js-post-body + div",".bottom-notice","div[data-campaign-name=stk]"],paragraphMinTextCount:4,paragraphMinWordCount:2},{id:"appleDeveloper",matches:"developer.apple.com/documentation/*",selectors:[".container","h3.title","div.content"]},{id:"hackerNews",matches:"news.ycombinator.com",selectors:[".titleline > a",".comment > .commtext",".toptext","a.hn-item-title",".hn-comment-text",".hn-story-title"],excludeSelectors:[".reply"]},{id:"quora",matches:["*.quora.com","quora.com"],additionalSelectors:[".puppeteer_test_question_title","p.q-text"],globalStyles:{".qu-truncateLines--3":"-webkit-line-clamp: unset;"}},{id:"oldReddit",matches:["old.reddit.com/*/.compact","old.reddit.com/.compact","www.reddit.com/*/.compact","www.reddit.com/.compact"],selectors:[".title > a",".usertext-body"],detectParagraphLanguage:!0},{id:"otherOldReddit",matches:"old.reddit.com",selectors:["p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0},{id:"redditList",matches:["https://www.reddit.com/r/*/comments/*/*","https://www.reddit.com/","https://www.reddit.com/hot/","https://www.reddit.com/new/","https://www.reddit.com/top/"],excludeMatches:["https://www.reddit.com/r/*/wiki/*"],observeUrlChange:!0,selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title'] h3","[data-adclicklocation=media]",".PostContent",".post-content",".Comment__body","faceplate-batch .md",".RichTextJSON-root","div[slot=title]","div[slot=text-body]","p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0,globalStyles:{"div.XPromoBottomBar":"display:none"},waitForSelectors:["[data-testid=post_author_link]"]},{id:"reddit",matches:"www.reddit.com",selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title'] h3","[data-adclicklocation=media]",".PostContent",".post-content",".Comment__body","faceplate-batch .md","div[slot=title]","div[slot=text-body]","p.title > a","[role=main] .md-container"],paragraphMinTextCount:5,paragraphMinWordCount:2,excludeMatches:["https://www.reddit.com/r/*/wiki/*","https://www.reddit.com/settings/*"],detectParagraphLanguage:!0,globalStyles:{"div.XPromoBottomBar":"display:none"}},{id:"reuters",matches:"www.reuters.com",excludeSelectors:["[promotext]","[data-testid=Leaderboard]","[data-testid=HomeTickerV2]","[data-testid=SiteFooter]"]},{id:"npmjs",matches:"https://www.npmjs.com/package/*",selectors:["#tabpanel-readme > div:first-child"]},{id:"github",matches:"github.com",useIframePostMessage:!1,excludeMatches:["https://github.com/*/*/settings","https://github.com/settings/*","https://github.com/sponsors/*","https://github.com/readme/*","https://github.com/readme/"],selectors:["h1","[aria-label=Issues] .markdown-title","[aria-labelledby=discussions-list] .markdown-title",".markdown-body",".Layout-sidebar p","div > span.search-match","li.repo-list-item p","#responsive-meta-container p","article p","div.repo-description p","[itemprop=description]"],atomicBlockSelectors:["[itemprop=description]"],excludeSelectors:[".css-truncate","[data-test-selector='commit-tease-commit-message']","[data-test-selector='create-branch.developmentForm']","div.Box-header.position-relative","div.blob-wrapper-embedded","div.Box.Box--condensed.my-2","div.jp-CodeCell",'[aria-label="Account"] .markdown-title',".js-repos-container .markdown-title","[data-view-component=true] .markdown-title","a.anchor","div.file-navigation + div.Box"],extraBlockSelectors:[],extraInlineSelectors:["g-emoji","a.anchor"],stayOriginalTags:["CODE","TT","G-EMOJI","IMG","SUP","SUB"],detectParagraphLanguage:!0},{id:"githubNotebook",matches:"notebooks.githubusercontent.com",useIframePostMessage:!1,excludeSelectors:["div.jp-CodeCell"]},{id:"facebook",matches:"www.facebook.com",excludeMatches:"https://www.facebook.com/business/*",selectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],atomicBlockSelectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],insertPosition:"afterend",preWhitespaceDetectedTags:["DIV","SPAN"],extraBlockSelectors:["span.x1vvkbs"],excludeSelectors:["[role=button]"],translationClasses:["immersive-translate-text"],detectParagraphLanguage:!0},{id:"youtubeMobile",matches:"m.youtube.com",selectors:[".comment-text","#content-text",".media-item-headline",".slim-video-information-title",".caption-window",".caption-visual-line"],"excludeTags.remove":["BUTTON"],condition:{enableSubtitle:{false:{"selectors.remove":[".caption-window",".caption-visual-line"]}}},wrapperPrefix:"",wrapperSuffix:"",observeUrlChange:!0,atomicBlockSelectors:[".comment-text"],globalStyles:{".comment-text":"max-height:unset;",".media-item-headline":"max-height:unset;-webkit-line-clamp:unset;"},injectedCss:[".immersive-translate-target-wrapper img { width: 16px; height: 16px }"],extraBlockSelectors:[".caption-visual-line"]},{id:"youtube",matches:"www.youtube.com",blockMinTextCount:0,blockMinWordCount:0,detectParagraphLanguage:!0,excludeSelectors:["[class^='lln-']"],globalStyles:{"#video-title":"-webkit-line-clamp: unset;max-height: unset;","h1.ytd-watch-metadata":"-webkit-line-clamp: unset;max-height: unset;","yt-formatted-string#video-title":"-webkit-line-clamp: unset;max-height: unset;","ytd-expander.ytd-comment-renderer":"--ytd-expander-max-lines: 1000;"},injectedCss:[".immersive-translate-target-wrapper img { width: 16px; height: 16px }",".metadata-snippet-container {max-height: unset !important;}"],isTranslateTitle:!1,observeUrlChange:!0,selectors:["yt-formatted-string[slot=content].ytd-comment-renderer","yt-formatted-string.ytd-video-renderer","yt-formatted-string#content-text","h1","yt-formatted-string#video-title","span#video-title","a#video-title","yt-formatted-string.ytd-transcript-segment-renderer","#description-inline-expander > yt-attributed-string > span","ytd-notification-renderer .message","#message",".caption-window",".caption-visual-line"],extraBlockSelectors:["yt-formatted-string.ytd-transcript-segment-renderer",".caption-visual-line"],condition:{enableSubtitle:{false:{"selectors.remove":[".caption-window",".caption-visual-line"]}}},urlChangeDelay:2e3,wrapperPrefix:"<br/>",wrapperSuffix:""},{id:"instagramPost",matches:["https://www.instagram.com/p/*","https://www.instagram.com/reels/*"],atomicBlockSelectors:["div._a9zs h1","h3 + div._a9zs > span"],blockMinTextCount:1,paragraphMinTextCount:2,selectors:["div._a9zs h1","h3 + div._a9zs > span"],wrapperPrefix:"<br/>"},{id:"otherInstagram",blockMinWordCount:1,matches:"https://www.instagram.com/*",paragraphMinTextCount:2,selectors:["h1","div._aa_c > div"],wrapperPrefix:"",wrapperSuffix:""},{id:"1paragraph",matches:"1paragraph.app",selectors:["#book"]},{id:"poeditor",matches:"https://poeditor.com/projects/*",selectors:[".comment-body",".reference_language .source-string"]},{id:"substack",matches:["*.substack.com","newsletter.rootsofprogress.org"],selectorMatches:["link[href^='https://substackcdn.com/bundle/'][rel=preload]"],excludeSelectors:["[style^=top]",".publication-footer",".subscribe-footer",".main-menu",".navbar-title-link","[data-testid='navbar']",".navbar-title",".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader"],globalStyles:{".reader2-clamp-lines":"max-height: unset; -webkit-line-clamp: unset;","[class*='clamp-']":"max-height: unset; -webkit-line-clamp:unset;",".blurb-text":"max-height: unset;"},extraBlockSelectors:[".reader2-post-title",".tweet-link-top",".tweet-link-bottom",".expanded-link"]},{id:"seekingalpha",matches:["seekingalpha.com/article/*","seekingalpha.com/news/*"],selectors:["[data-test-id=card-container]","[data-test-id=comments-section]"],excludeSelectors:["[data-test-id=post-page-meta]","header > div:first-child"]},{id:"hnAlgolia",matches:"hn.algolia.com",selectors:[".Story_title > a:first-child",".Story_comment > span"]},{id:"readwise",matches:"read.readwise.io",selectors:["div[class^='_titleRow_']","div[class^='_description_']","#document-text-content"],detectParagraphLanguage:!0},{id:"inoreader",matches:["www.inoreader.com","*.inoreader.com"],selectors:[".article_header_title",".article_title_link",".article_content",".article_magazine_title_link"],excludeMatches:["https://www.inoreader.com/features/"],observeUrlChange:!1,globalStyles:{".article_title_link":"-webkit-line-clamp: unset;max-height: unset;"}},{id:"aha",matches:"*.ideas.aha.io",excludeSelectors:[".comment-header",".vote-status",".idea-meta",".filters-title",".ideas-showing-count",".my-ideas-filters-wrapper",".statuses-filters-wrapper",".categories-filters-wrapper","[class^='attachment']","span[class^='attachment-name']"]},{id:"googleScholar",matches:["scholar.google.*/*","scholar.google.com.*/*","scholar.google.co.*/*"],wrapperPrefix:`
`,selectors:["h3 a[data-clk]","div.gs_rs","td a.gsc_a_at","td div.gs_gray:last-of-type","div.gsc_oci_value","#gs_opinion"],extraInlineSelectors:["br"],atomicBlockSelectors:["h3 a[data-clk]"]},{id:"googleMail",matches:"mail.google.com",detectParagraphLanguage:!0,selectors:["h2[data-thread-perm-id]","span[data-thread-id]","div[data-message-id] div[class='']"]},{id:"googleNews",matches:"news.google.com",blockMinTextCount:26,blockMinWordCount:5,globalStyles:{".MCAGUe":"height: auto;",".To2ZZb.DbQnIe":"height: unset;",".cp7Yvc > h2":"display: block;",".oovtQ":"height: auto;",h4:"-webkit-line-clamp: unset;"},excludeSelectors:[".EyERq",".AOl7G.eejsDc","[aria-label='Home']","[aria-label='For you']","[aria-label='Following']","[aria-label='World']","[aria-label='Local']",".gb_Fc",".wBQf7b",".yPI8Rb",".jKHa4e",".u43Gd",".Zgjpyb","[role='button']","[jsname='rymPhb']",".cbz1ld",".VfPpkd-P5QLlc",".XvhY1d"]},{id:"outlook",matches:"outlook.live.com",excludeSelectors:[".jHAG3.XG5Jd",".OZZZK",".lDdSm"],selectors:["[role=region]"]},{id:"producthunt",matches:"www.producthunt.com",excludeMatches:"https://www.producthunt.com/stories/*",selectors:["h2","div[class^='styles_htmlText__']","[class^='styles_tagline']","a[href^='/discussions/'].fontWeight-600","button[class^='styles_textButton'] > div > span","h5 + p","div[data-test=product-item-name] + div",".noOfLines-1,.noOfLines-2,.noOfLines-3",".fontWeight-600","[class*='styles_dropdown']","[class*='styles_aboutText']"],globalStyles:{"h5 + p":"height:unset;",".noOfLines-1,.noOfLines-2,.noOfLines-3":"-webkit-line-clamp:unset;"},"excludeTags.remove":["PRE"]},{id:"codeforces",matches:"https://codeforces.com/*",stayOriginalTags:["[class^='MathJax']"]},{id:"arxivLabs",matches:"*.labs.arxiv.org/*",stayOriginalTags:["math","semantics","mrow","mo","mfrac","msup","mi","mn","msqrt"]},{id:"discord",matches:"https://discord.com/channels/*",isTranslateTitle:!1,selectors:["li[id^=chat-messages] div[id^=message-content]","div[class^=headerText]","section[aria-label='Search Results'] div[id^=message-content]"],extraBlockSelectors:["[class^='embedFieldValue']","li[class^='card'] div[class^='message']","[data-list-item-id^='forum-channel-list'] div[class^='headerText']"],globalStyles:{"div[class^=headerText]":"max-height: unset;","div[class^=message]":"max-height: unset;","div[class^=text]":"max-height: unset;","h3[data-text-variant='heading-lg/semibold']":"-webkit-line-clamp: none;"},detectParagraphLanguage:!0,wrapperPrefix:"<br />",wrapperSuffix:"",paragraphMinTextCount:4,paragraphMinWordCount:2},{id:"telegram",matches:["web.telegram.org/z/*","web.telegram.org/a/*"],isTranslateTitle:!1,selectors:[".text-content",".message",".reply-markup-button-text",".bot-commands-list-element-description"],detectParagraphLanguage:!0},{id:"telegramK",matches:["web.telegram.org/k/*","web.telegram.org/k/"],selectors:[".message",".reply-markup-button-text",".bot-commands-list-element-description"],detectParagraphLanguage:!0},{id:"githubGist",matches:"gist.github.com",selectors:[".markdown-body",".readme"],detectParagraphLanguage:!0},{id:"lobste",matches:"lobste.rs",excludeMatches:["https://lobste.rs/about","https://lobste.rs/chat"],selectors:[".u-repost-of",".comment_text"]},{id:"slack",matches:"*.slack.com",selectors:[".p-rich_text_block",".p-message_pane__foreword",".c-alert__message","[data-qa=message_attachment_text]"],additionalStayOriginalSelectors:["[data-qa=emoji]"],detectParagraphLanguage:!0},{id:"artstationArtwork",matches:"www.artstation.com/artwork/*",excludeSelectors:".project-description a",selectors:[".project-description","div.project-comment-text"],detectParagraphLanguage:!0},{id:"artstationLearning",matches:"www.artstation.com/learning/courses/*",additionalSelectors:["footer.learning-course-description.ng-star-inserted > span"],excludeSelectors:[".learning-card-meta"]},{id:"artstationBlog",matches:["https://www.artstation.com/blogs","https://www.artstation.com/blogs/*"],detectParagraphLanguage:!0,additionalSelectors:[".comment-item-body"],atomicBlockSelectors:[".author-headline",".author-location"],excludeSelectors:["blog-card-thumbnail","blog-card-header",".blog-card-author",".blog-card-meta",".blog-view-header",".blog-grid-title",".post-meta-header"]},{id:"figmaCommunity",matches:"www.figma.com/community/*",normalizeBody:"div.ql-editor[contenteditable='false']",excludeSelectors:["div[class*='metadataRight']","div[class*='commentMetaAndOptions']"],globalStyles:{"div[class*='mini_cardBottomRowSizing']":"height: 3em;"},additionalSelectors:["div[class*='mini_cardBottomRow_Metadata']"],stayOriginalSelectors:["[data-tooltip='tooltip-user-info']"]},{id:"googleIndex",matches:["https://www.google.com/","https://www.google.com.hk/"],excludeSelectors:["#gb","#SIvCob"],inputTutorialsText:"\u8BD5\u8BD5\u8F93\u5165\u4E2D\u6587\u540E\u5FEB\u901F\u8FDE\u51FB 3 \u6B21\u7A7A\u683C\u952E\u7FFB\u8BD1\uFF08\u4EC5\u63D0\u793A\u4E00\u6B21\uFF09",inputTutorialsSelectors:["textarea#APjFqb"]},{id:"googleSearch",matches:"www.google.*/search*",blockMinTextCount:32,blockMinWordCount:3,wrapperSuffix:"",detectParagraphLanguage:!0,excludeSelectors:["a h3 + div","div#sfooter","a[role=presentation] > div > div:first-child",".b5ZQcf",".CEMjEf",".MgUUmf.NUnG9d","#result-stats","[role=navigation]","div.sCuL3","div.eFM0qc.BCF2pd","div.WZ8Tjf","div.adDDi","#headerSection","#rateChatDiv","[id=bres]",".title-D5Lgyj","[data-attrid='VisualDigestVideoResult']",".search-enhance-WDIEkP h4",".SPZz6b h2",".CtCigf",".VLkRKc",".EbH0bb",".Wr0c6d",".jleFbf"],extraBlockSelectors:[".MUFPAc"],globalStyles:{".V82bz":"-webkit-line-clamp: unset;max-height: unset;margin-bottom:30px",".pe7FNb":"-webkit-line-clamp: unset;",".promotion-3PDMAb":"display: none;",".uAKcGb":"-webkit-line-clamp: unset;max-height: unset;margin-bottom:30px","div[data-content-feature='1'] > div":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:2']":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:3']":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:4']":"-webkit-line-clamp: unset;max-height: unset;",".Pw4Ldf.RsCEN":"height:unset;"},ignoreZhCNandZhTW:!0,isTranslateTitle:!1,searchEnhancementConfig:[{id:"google",urlMatch:"https://www\\.google\\..+/search",style:{source:"font-size:12px; margin-bottom: 6px;",enTitle:"margin-top:6px;font-size:14px;",searchTitle:"margin-top:6px;position:relative;padding-right:24px;",more:"color:#1a0dab;margin-top:8px;",enTitleClassName:"immersive-translate-search-enhancement-en-title"},keyword:{value:"[0]$1",matches:[{source:"url",matchRegex:"q=(.+?)&"}]},showCount:5}]},{id:"lowendtalk",matches:"lowendtalk.com",selectors:["[role=heading]","h1",".userContent"]},{id:"linkedinJobs",matches:"www.linkedin.com/jobs/*",selectors:["#job-details > span"]},{id:"linkedinFeed",matches:"https://linkedin.com/feed/*",selectors:["h1",".feed-shared-update-v2__description-wrapper"]},{id:"indiehackers",matches:"www.indiehackers.com",selectors:[".content","h1","h3.story__title",".feed-item__title-link"]},{id:"libreddit",matches:"libreddit.de",selectors:["h2.post_title",".comment_body > .md"]},{id:"notionSite",matches:["notion.site","*.notion.site"],normalizeBody:"body",selectors:["div[data-block-id]"]},{id:"newyorker",matches:"www.newyorker.com",additionalSelectors:["h1","[data-testid=SummaryItemHed]"],excludeSelectors:["[data-testid=PersistentTop]","[data-testid=StackedNavigationHeader]"],urlChangeDelay:2e3},{id:"startme",matches:"start.me",selectors:[".rss-article__title",".rss-articles-list__article-link",".rss-showcase__title",".rss-showcase__text"]},{id:"scmp",matches:"www.scmp.com",additionalSelectors:[".info__subHeadline",".section-content h2"],globalStyles:{".topic__article-list":"height: unset;",".adverisers__adveriser":"height: unset;",".advertiser__content":"height: unset;",".content-title__link":"display:unset;overflow:unset;-webkit-line-clamp:unset;",".title__text":"max-height:unset; -webkit-line-clamp:unset;",".news-list-item__news-title":"max-height:unset; -webkit-line-clamp:unset;","a[class*='link'] > .link__headline":"max-height:unset; -webkit-line-clamp:unset;"}},{id:"lesswrong",matches:"www.lesswrong.com",extraBlockSelectors:["span.commentOnSelection"]},{id:"mastodon",matches:["mastodon.social","mastodon.online","kolektiva.social","indieweb.social","mastodon.world","infosec.exchange"],isTranslateTitle:!1,selectorMatches:["div#mastodon"],selectors:["div.status__content__text",".about__section__body",".content",".form-container",".account__header__extra"],globalAttributes:{"[class='notranslate app-holder']":{class:"app-holder"}},detectLanguage:!0},{id:"cnbc",matches:"www.cnbc.com",urlChangeDelay:1e3,globalStyles:{"div.Card-titleContainer > div":"-webkit-line-clamp: unset;max-height: unset;"}},{id:"dailyDev",matches:"app.daily.dev",selectors:["h1",".typo-body","article h3","[class^=markdown_markdown]"],globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset"}},{id:"pornhub",matches:["*.pornhub.com","pornhub.com"],excludeMatches:["*.pornhub.com/insights/*","pornhub.com/insights/*"],extraBlockSelectors:[".trendingNow",".searchItem",".tagcloud > a"],detectParagraphLanguage:!0,wrapperPrefix:"<br/>",wrapperSuffix:`
`,globalStyles:{"span.title":"height:unset; max-height:unset;",".detailedInfo":"max-height:unset;",".pcVideoListItem":"max-height:unset;",".wrap":"height:unset;",".entry-header":"height:unset;",".entry-title > a":"height:unset;-webkit-line-clamp:unset;"}},{id:"yourporn",matches:"https://www.youporn.com/*",extraBlockSelectors:[".button"],globalStyles:{".video-box":"max-height:unset;",".video-box-title":"white-space:unset;"}},{id:"modelhub",matches:"https://www.modelhub.com/*",globalStyles:{".videoTitle":"height:unset;",a:"height:unset;"}},{id:"xvideos",matches:"https://www.xvideos.com/*",globalStyles:{".title":"-webkit-line-clamp:unset;max-height:unset;",".mozaique":"display:flex; flex-wrap:wrap;"},excludeSelectors:[".video-hd-mark"]},{id:"missav",matches:"https://missav.com/*",globalStyles:{".truncate":"white-space:unset;",".overflow-y-hidden":"max-height:unset;overflow-y:unset;"}},{id:"javbus",matches:"https://www.javbus.com/*",globalStyles:{"#waterfall[class='masonry']":"height: unset;","#waterfall[class='masonry'] > div":"display: flex;flex-direction: row;flex-wrap: wrap;","#waterfall[class='masonry'] > div > div":"position:relative;",".photo-info":"height:unset;"},excludeSelectors:[".item-tag","date"]},{id:"spankbang",matches:"https://spankbang.com/*",globalStyles:{".video-item > a":"white-space:unset;"},excludeSelectors:[".stats",".thumb"],extraBlockSelectors:[".searches > a",".tag > a",".extra > a",".positions > li"]},{id:"javdb",matches:"https://javdb*.com/*",globalStyles:{".video-title":"white-space:unset;"},excludeSelectors:[".video-number",".score",".has-addons"]},{id:"jable",matches:"https://jable.tv/*",globalStyles:{".title":"white-space:unset;max-height:unset;",".img-box > a":"position:relative;"}},{id:"netflav",matches:"https://netflav*.com/*",globalStyles:{".grid_title":"max-height:unset;"},extraBlockSelectors:[".genre_filter_item","button"]},{id:"czechvideo",matches:"https://czechvideo.co/*",globalStyles:{".short-story":"height:unset;",".short-title":"height:unset;"},globalAttributes:{header:{translate:"unset;"}}},{id:"weibo",matches:["weibo.com"],selectors:["div[class^='detail_wbtext']"]},{id:"medium",matches:["medium.com","*.medium.com"],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],urlChangeDelay:20,additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]","rp","rt",".prism-code","[role=code]","#omni-extension",".omni-item","div[data-paste-markdown-skip]","table.highlight","div[class^=codeBlockContent]","div[class^=codeBlockLines]","div[class^=token-line]","#liuchan-window > .liuchan-container > *",".material-icons",".notranslate","[translate=no]"],selectors:["h1","h2","article section","[aria-hidden='false'] pre","article p"],excludeSelectors:["[aria-label='Post Preview Reading Time']"],globalStyles:{h2:"-webkit-line-clamp: unset;max-height:unset;","article p":"-webkit-line-clamp: unset;max-height:unset;"}},{id:"nitter",selectorMatches:["meta[property='og:site_name'][content='Nitter']"],selectors:[".tweet-content",".quote-text"]},{id:"economist",matches:"www.economist.com",extraInlineSelectors:["span[data-caps='initial']"],excludeSelectors:["footer.ds-footer"]},{id:"healthline",matches:"www.healthline.com",excludeSelectors:[".icon-hl-trusted-source-after"]},{id:"ebay",matches:"www.ebay.com",excludeSelectors:["headers","[itemprop=offers]",".dne-itemtile-original-price"],paragraphMinTextCount:4,paragraphMinWordCount:2,globalStyles:{"[itemprop=name]":"-webkit-line-clamp: unset;max-height: unset;",".merch-item-title":"-webkit-line-clamp: unset;max-height: unset;"}},{id:"skinstore",matches:"www.skinstore.com",excludeSelectors:[".responsiveFlyoutMenu_levelOneLink"],paragraphMinTextCount:4,paragraphMinWordCount:2},{id:"tripadvisor",matches:"www.tripadvisor.com",paragraphMinTextCount:4,paragraphMinWordCount:2},{id:"amazon",matches:"www.amazon.com",paragraphMinTextCount:4,paragraphMinWordCount:2,extraBlockSelectors:[".a-size-small.a-link-normal.page-banner-link.a-nowrap"],globalStyles:{".a-carousel-viewport":"height:unset;","[class*='clamp']":"max-height: unset;-webkit-line-clamp: unset;","[data-rows]":"max-height: unset;-webkit-line-clamp: unset;","[data-a-expander-name='review_text_read_more']":" max-height: unset;"},excludeSelectors:["#navFooter","#navbar-main",".s-price-instructions-style","[class*='star']","[data-hook='acr-average-stars-rating-text']",".a-color-price"]},{id:"visualstudioMarketplace",matches:"marketplace.visualstudio.com",additionalExcludeSelectors:[".core-info-second-row",".core-info-third-row",".meta-data-list",".item-title",".breadcrumb",".itemDetails-right",".ux-user-name",".ux-updated-date",".ux-item-second-row-wrapper",".stats-and-offer",".header-container"],atomicBlockSelectors:[".core-info-cell > div.name"],globalStyles:{".item-details-control-root.ux-item-shortdesc":"height: unset; overflow: visible; max-height:unset;"}},{id:"bloomberg",matches:"www.bloomberg.com",urlChangeDelay:2e3,excludeSelectors:[".ticker-bar","nav","[aria-label=Banner]","aside","[data-component=ticker-bar]","footer.bb-global-footer"]},{id:"baiduXueshu",matches:"xueshu.baidu.com",globalStyles:{".abstract_wr":"height: unset; overflow: visible; max-height:unset;"}},{id:"sciencedirect",matches:"www.sciencedirect.com",urlChangeDelay:2e3,stayOriginalSelectors:["span.display"],extraBlockSelectors:["span.captions","span[id^=cap]"]},{id:"thehighestofthemountains",matches:"www.thehighestofthemountains.com",extraBlockSelectors:"div"},{id:"telegraph1",matches:"te.legra.ph",normalizeBody:"div.ql-editor[contenteditable='false']",urlChangeDelay:500},{id:"telegraph2",matches:["telegra.ph"],normalizeBody:"div.ql-editor[contenteditable='false']",wrapperPrefix:`
`},{id:"annasArchive",matches:["*.annas-archive.org","annas-archive.org"],selectors:[],globalStyles:{"div[id^='link-index-']":"height: unset; max-height: unset;","main > div > div[class*='h-[125]']":"height:auto"},normalizeBody:"body",extraBlockSelectors:["a.custom-a"]},{id:"explainshell",matches:["explainshell.com"],selectors:["[class='help-box']"]},{id:"apnews",matches:["apnews.com"],urlChangeDelay:2e3},{id:"googlePlay",matches:"play.google.com",excludeSelectors:[".vlGucd",".ubGTjb"],globalStyles:{".Epkrse":"-webkit-line-clamp:unset;"}},{id:"tumblr",matches:["www.tumblr.com"],selectors:["article h1","article > header + div","[data-testid=notes-root] p","div.k31gt","p","article ul","article h2","article h3","article h4","article h5","article h6","article blockquote","article ol"],excludeSelectors:["div.fAAi8","div.wvu3V"],preWhitespaceDetectedTags:["DIV","SPAN","P"]},{id:"tinytask",matches:"https://www.tinytask.net",globalStyles:{"table > tbody > tr > td > center > table > tbody > tr > td > ul > li":"height: 100%"}},{id:"foxnews",matches:"www.foxnews.com",shadowRootSelectors:["[data-spot-im-module-default-area='conversation'] > div"],excludeTags:["TITLE","LINK","SCRIPT","STYLE","TEXTAREA","SVG","svg","G","TEXT","NOSCRIPT","INPUT","BUTTON","BASE","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","RT","RP","META","ASIDE","MATH","TTS-SENTENCE","AIO-CODE"],excludeSelectors:[".site-footer",".components-MessageDetails-index__message-details-wrapper","div[class^=SlideDown__container]",".components-MessageActions-index__messageActionsWrapper","span[data-openweb-allow-amp]","div.spcv_typing-users"]},{id:"afreecatv",matches:"www.afreecatv.com",globalStyles:{"a.title":"max-height:unset;-webkit-line-clamp:unset;"}},{id:"opennet",matches:"opennet.ru",excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","LABEL","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","RT","RP","META"]},{id:"construct",matches:["www.construct.net"],excludeMatches:["preview.construct.net","editor.construct.net"],additionalSelectors:["aside","div.manualContent"],atomicBlockSelectors:[],stayOriginalSelectors:["a.usernameReference"],additionalInlineSelectors:["a.forumLink"],additionalExcludeSelectors:["div.topNav","div.usernameLink","ul.authorDetails","ul.tagViewer","ul.breadCrumbNav","ul.subForumForums","ul.postTools","li.comment ul.controls","div.forumTopNavWrap","div.downloadWrap","div.articleLeftMenu","div.usernameTextWrap","div.favouriteWrap","div.bannerWrapper","div.viewAddonRightMenu","div.extendedMenu.addonsSubMenu","#BottomLinks.bottomLinks","div#LeftSide.leftSide","div#BottomWrap.bottomWrap","div.courseListWrap div.overview","div.conversationControls","div.contentWrapper h1","div.conversationControls","td.location a#LocationLink","#TopLevelComments .topBar","#TopLevelComments .controls",".tagViewWrap",".changeCount",".otherStats",".FilterMenu",".mobileTopicStats",".forumControlsWrapper",".forumsBottomNavWrap",".breadCrumbNav",".favouriteWrap",".usernameLink",".followWrapper",".blogPostStats",".manualContent dl dt"],globalStyles:{"td.location a#LocationLink":"padding-top: 4px;","div.articleMain .tutCourseWrap":"align-items: flex-start;"}},{id:"getpocket",matches:"getpocket.com",selectors:["h2","div.excerpt p","article","h1"],globalStyles:{"h2.title":"max-height:unset;-webkit-line-clamp:unset;","div.excerpt p":"max-height:unset;-webkit-line-clamp:unset;"}},{id:"fandom",matches:"*.fandom.com",urlChangeDelay:800,normalizeBody:"#mw-content-text",globalStyles:{"#mw-content-text > div > div:nth-child(1)":"height:100%;"},additionalExcludeSelectors:["header.fandom-community-header","div.ph-registration-buttons"]},{id:"huggingface",matches:"huggingface.co",globalStyles:{".line-clamp-2":"-webkit-line-clamp:unset;max-height:unset;"}},{id:"statista",matches:"www.statista.com",globalStyles:{".itemContent__text":"height:unset;max-height:unset;",".itemContent__subline":"height:unset;max-height:unset;"}},{id:"epubReader",matches:"epub-reader.online",globalStyles:{"span.slide-contents-item-label":"overflow:visible;max-height:unset;white-space:normal;"},atomicBlockSelectors:["div.slide-contents-item"]},{id:"you",matches:"https://you.com/search",globalStyles:{h3:"max-height:unset;-webkit-line-clamp:unset;",".caKYaC":"max-height:unset;-webkit-line-clamp:unset;",".dDwDsu":"max-height:unset;-webkit-line-clamp:unset;"},excludeSelectors:["div.hpIWZO"]},{id:"auth0Openai",matches:"auth0.openai.com",excludeSelectors:["form","header > h1"]},{id:"chatOpenai",matches:"chat.openai.com",excludeSelectors:["div.absolute.bottom-0.left-0.w-full","h1","div#headlessui-portal-root","nav","div[data-radix-popper-content-wrapper]","ul[aria-multiselectable]",".markdown *","div[class='flex flex-col items-start']","div[class='flex items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300']"],"excludeTags.remove":["BUTTON"],isTranslateTitle:!1,wrapperPrefix:"",aiRule:{streamingSelector:".result-streaming.markdown",messageWrapperSelector:".markdown",streamingChange:!0,streamingDeepChild:!0}},{id:"newstop",matches:["chat.newstop.asia","chat.waixingyun.cn"],excludeSelectors:[".markdown-body *"],aiRule:{streamingSelector:".n-button.n-button--warning-type.n-button--medium-type",messageWrapperSelector:".markdown-body",streamingChange:!1,streamingDeepChild:!0}},{id:"askgpt",matches:["askgpt.cn","chatcat.zhaoyoung.me"],excludeSelectors:[".markdown-body *"],aiRule:{streamingSelector:".home_chat-message-status__EsVNi",messageWrapperSelector:".markdown-body",streamingChange:!0,streamingDeepChild:!0}},{id:"poe",matches:["https://poe.com/*"],excludeSelectors:[".Markdown_markdownContainer__UyYrv *",".MarkdownLink_linkifiedLink__KxC9G"],aiRule:{streamingSelector:".ChatStopMessageButton_stopButton__LWNj6",messageWrapperSelector:".Markdown_markdownContainer__UyYrv",streamingChange:!1,streamingDeepChild:!0}},{id:"glasp",matches:"glasp.co",excludeSelectors:[".home_overview_list_content_wrapper"]},{id:"developerChrome",matches:"developer.chrome.com",excludeSelectors:["web-tabs","ul.code-sections--summary"]},{id:"android",matches:["developer.android.google.cn","developer.android.com"],observeUrlChange:!0,additionalSelectors:["aside","google-codelab-step"]},{id:"ft",matches:"www.ft.com",excludeSelectors:["headers","[aria-labelledby=cookie-banner-aria-label]","footer"]},{id:"microsoft",matches:"https://apps.microsoft.com/store/detail/*",additionalSelectors:["pre"],globalStyles:{".line-clamp":"-webkit-line-clamp:unset;max-height:unset;"},isTransformPreTagNewLine:!0},{id:"gitlab",matches:"gitlab.com",excludeSelectors:[".tree-content-holder","nav",".home-panel-metadata","div[data-testid=project_topic_list]",".commit"]},{id:"newthingsunderthesun",matches:"www.newthingsunderthesun.com",additionalSelectors:["[translate=no]"]},{id:"tiktok",matches:"https://www.tiktok.com/*/video/*",selectors:["[data-e2e^=comment-level]","[data-e2e=browse-video-desc] > span"]},{id:"rfcEditor",matches:["www.rfc-editor.org","docs.haproxy.org"],isTransformPreTagNewLine:!0,excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","SELECT","OPTION","IMG","SUB","SUP","HR","CODE","KBD","WBR","TT","RT","RP","META","ASIDE","FOOTER","MATH"]},{id:"steamcommunity",matches:"https://steamcommunity.com/app/*",globalStyles:{".forum_topic":"height:auto;",".forum_topic_name":"white-space:normal;"},excludeSelectors:[".forum_paging",".forum_topic_reply_count",".forum_topic_lastpost",".forum_topic_award_count",".discussion_search_pagingcontrols"]},{id:"steampowered",matches:"store.steampowered.com/app/*",selectors:[".game_description_snippet",".game_area_description","#earlyAccessHeader","[id^='ReviewContent'] .content"],excludeSelectors:["#global_actions","#store_controls","#foryou_tab","[class*=persona]","[class*=game_title_area]","a.btn_medium",".persona_name",".hours.ellipsis",".checkcol",".postedDate",".dev_row .summary",".already_in_library",".game_header_image_ctn .grid_content",".ds_flag.ds_wishlist_flag",".early_access_review.tooltip",".communitylink_achievement_images",".user_reviews_summary_row.summary",".review_award_ctn",".add_to_wishlist_area",".next_in_queue_content",".glance_tags.popular_tags",".game_purchase_action",".vote_button_ctn","#VoteUpDownBtnCtn","#footer","#ViewAllReviewssummary"],atomicBlockSelectors:[".game_area_sys_req_leftCol",".game_area_sys_req_rightCol"],extraInlineSelectors:[".pulldown"],additionalSelectors:[".game_page_autocollapse_ctn iframe"],globalStyles:{".game_description_snippet":"max-height:unset; overflow: scroll;",".game_purchase_area_friends_want":"height: auto; padding-bottom: 6px;",".div.early_access_banner":"height: 84px",".franchise_notice > *":"height: 84px"},detectParagraphLanguage:!0},{id:"nature",matches:"https://www.nature.com/articles/*",excludeSelectors:[".c-header",".c-recommendations-header",".c-recommendations-list-container",".c-article-references__links",".c-article-identifiers",".c-article-author-list",".c-article-metrics-bar__wrapper",".c-article__pill-button","#author-information-content","#article-info-section"]},{id:"webofscience",matches:"https://www.webofscience.com/*",globalStyles:{".abstract":"height:auto !important;",".show-more-lines":"height:unset !important;"},excludeSelectors:[".summary-left-panel",".authors","app-full-record-keywords mark"],mutationObserverContainerSelectors:["[data-ta='summary-record-title-link']","#FullRTa-fullRecordtitle-0"],extraBlockSelectors:["app-summary-authors + div","app-full-record-keywords span span"],observeUrlChange:!0,urlChangeDelay:600,mutationChangeDelay:600},{id:"appleinsider",matches:["appleinsider.com"],excludeSelectors:["#topic-nav"]},{id:"jetbrains",matches:"https://www.jetbrains.com/help/*",extraBlockSelectors:["[data-test=prompt]"]},{id:"crates",matches:["https://crates.io/search*"],selectors:["div[class^=_description-box] div[class^=_description]"]},{id:"theverge",matches:"www.theverge.com",shadowRootSelectors:["div#coral_thread > div"]},{id:"simp",matches:"https://beta.simp.red/trans*",mainFrameSelector:".simpread-read-root"},{id:"lookintobitcoin",matches:"https://www.lookintobitcoin.com/charts/*",excludeSelectors:["svg"]},{id:"openaiAccount",matches:"https://platform.openai.com/account/api-keys*",urlChangeDelay:1500},{id:"pkgStd",matches:"https://pkg.go.dev/std",selectors:["td.UnitDirectories-desktopSynopsis"]},{id:"pkg",matches:"https://pkg.go.dev/*",selectors:["div.UnitDetails p"]},{id:"isEbook",isEbook:!0,isTranslateTitle:!1,urlChangeDelay:200,selectorMatches:["meta[name='immersive-translate-ebook-viewer'][content='true']"],excludeSelectors:["#drop-target","#drop-target h1","#side-bar","h1#side-bar-title"],extraInlineSelectors:["span.dropcaps"],paragraphMinTextCount:4,paragraphMinWordCount:2,blockMinTextCount:1,blockMinWordCount:1,containerMinTextCount:1,wrapperPrefix:"<br />",targetWrapperTag:"span"},{id:"isEbookBuilder",isEbookBuilder:!0,isTranslateTitle:!1,targetWrapperTag:"span",selectorMatches:["meta[name='immersive-translate-ebook-builder'][content='true']"],globalMeta:{},excludeSelectors:["h1.notranslate","#drop-target","#drop-target h1","#side-bar","h1#side-bar-title","#tool",".Code"],paragraphMinTextCount:4,paragraphMinWordCount:2,blockMinTextCount:1,blockMinWordCount:1,containerMinTextCount:1,wrapperPrefix:"<br />"},{id:"explainpaper",matches:["https://www.explainpaper.com/reader*"],isTranslateTitle:!1,selectors:[".leading-relaxed",".chat-messages p",".text-sm"]},{id:"colab",matches:"https://colab.research.google.com/*",excludeSelectors:["code","view-line"]},{id:"gatesnotes",matches:"www.gatesnotes.com",minZIndex:-1},{id:"kakao",matches:"page.kakao.com",shadowRootSelectors:["div[style^='visibility: visible'"]},{id:"coinmarketcap",matches:"coinmarketcap.com",extraBlockSelectors:["div[class='sc-3502f6cd-0 JxHqg']"]},{id:"wandb",matches:"wandb.ai",additionalSelectors:[".report-page-top"],additionalStayOriginalSelectors:["span[data-slate-inline=true]"],extraInlineSelectors:[]},{id:"paulgraham",matches:"paulgraham.com",additionalSelectors:["font[face=verdana]"],extraBlockSelectors:"font[face=verdana]"},{id:"zendesk",matches:"https://*.zendesk.com/agent/*",selectors:["[data-test-id*=subject]",".zd-comment",".title"]},{id:"migadu",matches:"webmail.migadu.com",selectors:[".bodyText"]},{id:"thehackernews",matches:"thehackernews.com",excludeSelectors:["span#blog-pager-older-link","span.h-datetime"],additionalSelectors:[".pop-title"]},{id:"isSubtitleBuilder",isSubtitleBuilder:!0,selectorMatches:["meta[name='immersive-translate-subtitle-builder'][content='true']"],pairs:{".source-text":".target-text"},paragraphMinTextCount:4,paragraphMinWordCount:2,isTranslateTitle:!1,wrapperPrefix:"",wrapperSuffix:""},{id:"brown",matches:"cs.brown.edu",excludeSelectors:[".SCodeFlow"]},{id:"tass",matches:"tass.ru",globalStyles:{"#__next":"font-size: 19px;line-height:28px;"}},{id:"chatGoogle",matches:"chat.google.com",selectors:["[jsname=bgckF]"]},{id:"fiverr",matches:"https://www.fiverr.com/inbox/*",selectors:[".message-body"]},{id:"jira",matches:["jira.*.com/browse/*","jira.*.com/projects/*"],selectors:["[id=descriptionmodule]","[id=summary-val]","div.action-body","td.stsummary"]},{id:"ahaIo",matches:["*.aha.io"],selectors:["[tabindex='0']","div.user-content","div.comments__body","span.name"]},{id:"thehill",matches:"thehill.com",injectedCss:[".most-popular-item { max-height: unset !important; }",".most-popular-item__link { -webkit-line-clamp: unset !important; }"],excludeSelectors:["div.featured-cards__byline","div.list-item__meta",".tags__item","div.extended-scroll__header",".submitted-by",".site-header--has-alert-banner",".homepage__container__opinion__item__byline",".homepage__container__header",".archive__item__meta"]},{id:"ubuntu",matches:"manpages.ubuntu.com",selectors:["pre"],atomicBlockTags:["pre"]},{id:"spiedigitallibrary",matches:"www.spiedigitallibrary.org",excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","G","NOSCRIPT","INPUT","BUTTON","BASE","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","RT","RP","META","ASIDE","FOOTER","MATH","TTS-SENTENCE","AIO-CODE"]},{id:"promptingguide",matches:"www.promptingguide.ai",selectors:["article","li"]},{id:"ground",matches:"ground.news",globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset !important;"}},{id:"ietf",matches:"*.ietf.org/doc/html/*",additionalSelectors:["pre"],isTransformPreTagNewLine:!0,preWhitespaceDetectedTags:["DIV","SPAN","PRE"]},{id:"newsminimalist",matches:"https://www.newsminimalist.com/",extraBlockSelectors:[".inline-flex"],excludeTags:["TITLE","LINK","SCRIPT","STYLE","TEXTAREA","SVG","svg","G","NOSCRIPT","INPUT","BASE","SELECT","OPTION","HR","PRE","KBD","WBR","RT","RP","META","MATH","TTS-SENTENCE","AIO-CODE"]},{id:"vimeo",matches:"https://player.vimeo.com/video/*",extraBlockSelectors:["span.vp-captions-line","span[class^=CaptionsRenderer_]"]},{id:"yandexIndex",matches:"https://yandex.com/",selectors:[".tabs__item-text"]},{id:"yandexSearch",matches:"https://yandex.com/search/*",excludeSelectors:[".KeyValue-Row",".EntityFeedbackFooter",".Organic-Subtitle",".SerpFooter-Content",".serp-user",".Pager"],globalStyles:{".ExtendedText-Toggle":"white-space:normal;"}},{id:"yandex",matches:"https://yandex.com/video/*",selectors:[".serp-item__title",".serp-item__text",".Keypoints-ItemTitle",".bes-epmjnzm-idtktyj",".OrganicTitle-LinkText","h1.VideoTitle"],globalStyles:{".serp-item__title":"-webkit-line-clamp: unset;max-height:unset;",".serp-item__text":"-webkit-line-clamp: unset;max-height:unset;",".OrganicTitle-LinkText":"-webkit-line-clamp: unset;max-height:unset;","h1.VideoTitle":"-webkit-line-clamp: unset;max-height:unset;",".link .serp-item__keypoints":"bottom:2px;",".OrganicTitle":"max-height:unset;"}},{id:"perplexityAi",matches:"https://www.perplexity.ai/search/*",extraBlockSelectors:[".prose > span"],additionalStayOriginalSelectors:["a.citation"],insertPosition:"afterend"},{id:"perplexity",matches:"https://www.perplexity.ai",globalStyles:{".line-clamp-1":"-webkit-line-clamp: unset !important;",".line-clamp-2":"-webkit-line-clamp: unset !important;"}},{id:"allmyfaves",matches:"https://allmyfaves.com/",selectors:["p"],paragraphMinTextCount:2,paragraphMinWordCount:1},{id:"man7",matches:"man7.org",isTransformPreTagNewLine:!0,globalStyles:{pre:"white-space: inherit;"}},{id:"kadaza",matches:"https://www.kadaza.com/",selectors:[".header span.title",".custom-content-footer"],containerMinTextCount:2,containerMinWordCount:1,paragraphMinTextCount:2,paragraphMinWordCount:1},{id:"babelnovel",matches:["https://babelnovel.com/books/*","https://www.webnovel.com/book/*"],urlChangeDelay:0},{id:"genuine",matches:"blog.genuine.com",excludeSelectors:["div.enlighter"]},{id:"chinadaily",matches:"www.chinadaily.com.cn",injectedCss:["a { height: unset !important; }","li { height: unset !important; }","div { height: unset !important; }",".immersive-translate-target-inner {color:black;}"],excludeSelectors:[".topNav",".topNav2_art > span",".topNav_art2 > .dropdown",".dibu-three",".topBar"]},{id:"braynzarsoft",matches:"www.braynzarsoft.net",selectors:["div#view-question-desc"]},{id:"immersiveTranslateIosOnBoarding",selectorMatches:["meta[name=immersiveTranslateIosOnBoarding]"],initialGlobalAttributes:{"input#immersiveTranslateDetectedSlot":{value:"true"}},isInjectOptionsUrl:!0,isInjectVersion:!0},{id:"immersiveTranslateIosOnBoardingStep1",selectorMatches:["meta[name=immersiveTranslateIosOnBoardingStep1]"],isOnBoardingPage:!0,isInjectOptionsUrl:!0,isInjectVersion:!0},{globalAttributes:{"#stimulus":{translate:"off",class:"stimulus"},"#stem":{translate:"off",class:"stem"}},id:"lawhub",matches:"https://lawhub.lsac.org/question/*"},{id:"yuque",matches:"https://www.yuque.com/*",excludeSelectors:[".lark-virtual-tree"]},{id:"bearblog",matches:"https://bearblog.dev/discover/*",excludeTags:["small"]},{id:"researchgate",matches:"www.researchgate.net",excludeSelectors:[".nova-legacy-v-publication-item__meta-data",".nova-legacy-v-publication-item__person-list",".js-authors-list"]},{id:"theatlantic",matches:["www.theatlantic.com","https://mashable.com/*"],initialSelectorGlobalAttributes:{"footer:last-of-type":{translate:"no"},"nav:last-of-type":{translate:"no"},nav:{translate:"no"}}},{id:"youtrackJetbrains",matches:"youtrack.jetbrains.com/articles/*",selectors:["[role=presentation]","[data-test=article-content]"],excludeSelectors:[".toolbar__ee8"]},{id:"bbc",matches:"www.bbc.com",excludeSelectors:["section.module--languages",".drop-capped"]},{id:"dw",matches:"www.dw.com",initialSelectorGlobalAttributes:{"footer:last-of-type":{translate:"no"},"nav:last-of-type":{translate:"no"},nav:{translate:"no"}},excludeSelectors:[".focus-menu-shown"]},{id:"sentry",matches:"docs.sentry.io",initialSelectorGlobalAttributes:{"footer:last-of-type":{translate:"no"},".navbar":{translate:"no"}}},{id:"openai",matches:"https://platform.openai.com/docs/*",urlChangeDelay:0},{id:"urlComment",selectorMatches:["meta[name='generator'][content^='Discourse']"],urlChangeDelay:0,_comment:"\u89E3\u51B3url\u53D8\u5316\u4F46\u662F\u9875\u9762\u4E0D\u53D8\u7684\u95EE\u9898"},{id:"feedly",matches:"feedly.com",globalStyles:{".TitleOnlyLayout":"height:unset !important;",".EntrySummary--u4":"-webkit-line-clamp: unset;max-height:unset;",".EntrySummary--u5":"-webkit-line-clamp: unset;max-height:unset;"},excludeSelectors:[".Leftnav"]},{id:"bardGoogle",matches:"bard.google.com",excludeSelectors:["mat-sidenav","div.capabilities-disclaimer","#cdk-overlay-6","message-actions button",".mdc-button__label .ng-star-inserted",".mdc-list-item__primary-text"],isTranslateTitle:!1,excludeTags:["TITLE","LINK","SCRIPT","STYLE","TEXTAREA","SVG","svg","G","NOSCRIPT","INPUT","BASE","SELECT","OPTION","HR","PRE","KBD","WBR","RT","RP","META","MATH","TTS-SENTENCE","AIO-CODE","mat-tooltip-component"]},{id:"whatsapp",matches:"web.whatsapp.com",selectors:[".copyable-text"],wrapperPrefix:`
`,wrapperSuffix:"<br/>"},{id:"bing",matches:"https://cn.bing.com/search*",extraInlineSelectors:["a","i"]},{id:"yahoo",matches:"*.yahoo.com",excludeSelectors:["._ys_jiqava","#ybar-inner-wrap","#Col2-5-Rmp-Proxy"],globalStyles:{"#atomic .Mt\\(20px\\)":"margin-top: 100px;","[class*='LineClamp']":"-webkit-line-clamp:unset;max-height:unset;","a[class*='js-content-viewer']> div[class*='Td\\(n\\)']":"overflow: scroll;","[class*='_ys_24482e']":"-webkit-line-clamp:unset;","#Aside > :first-child":"overflow:scroll;"}},{id:"wsj",matches:"www.wsj.com",excludeSelectors:["header","footer","nav","[aria-label='Markets summary']"]},{id:"businessinsider",matches:"www.businessinsider.com",excludeSelectors:["header","nav","section.live-updates-module "]},{id:"goodreads",matches:"www.goodreads.com",excludeSelectors:[".badgeYear",".gr-mediaBox__desc",".bookVotedRow",".minirating","div[itemprop='aggregateRating']",".wtrButtonContainer",".RatingsHistogram__labelTitle",".FollowButton",".siteHeader__topLevelLink","#books > thead","td[class*='rating']","td[class*='shelves']","td[class*='date_read']","td[class*='date_added']","td[class*='actions']"]},{id:"feeder",matches:"https://feeder.co/*",globalStyles:{".item-summary":"-webkit-line-clamp:unset;"}},{id:"elektrotechnik",matches:"https://www.elektrotechnik.rwth-aachen.de/*",globalAttributes:{"[class='notranslate']":{class:""}}},{id:"nytimes",matches:"www.nytimes.com",excludeSelectors:["#app > div > div > header","#app > div > div > div > div > header","#in-story-masthead"]},{id:"bugsKde",matches:"bugs.kde.org",excludeTags:["TITLE","LINK","SCRIPT","STYLE","TEXTAREA","SVG","G","NOSCRIPT","INPUT","BUTTON","BASE","SELECT","OPTION","HR","KBD","WBR","RT","RP","META","MATH","TTS-SENTENCE","AIO-CODE"],additionalExcludeSelectors:[".bz_first_comment_head",".bz_comment_head",".related_actions"]},{id:"eastmoney",matches:"guba.eastmoney.com",searchEnhancementConfig:[{id:"eastmoney",urlMatch:"guba.eastmoney.com/news,us\\w+,\\w+.html",delayTime:0,selector:".moneyFlowContainer",selectorAction:"insertBefore",style:{container:"background:white;border:none;border-radius: 4px;box-shadow: 0 2px 4px hsla(216,5%,62%,.14);",source:"font-size:12px; margin-bottom: 0px;",keyword:"color:#294688",title:"font-size:14px;color:#294688;",enTitle:"margin-top:4px;font-size:12px;",searchTitle:"margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;",time:"margin: 0px 0 16px;",more:"color:#294688;margin-top:8px;"},keyword:{value:"[0]$1 stock",matches:[{source:"url",matchRegex:"guba.eastmoney.com/news,us(\\w+?),\\S+.html"}]},showCount:8},{id:"eastmoney",urlMatch:"guba.eastmoney.com/list,us\\w+.*.html",delayTime:0,selector:".qualityContentContainer",selectorAction:"insertBefore",style:{container:"background:white;border:none;border-radius: 4px;box-shadow: 0 2px 4px hsla(216,5%,62%,.14);",source:"font-size:12px; margin-bottom: 0px;",keyword:"color:#294688",title:"font-size:14px;color:#294688;",enTitle:"margin-top:4px;font-size:12px;",searchTitle:"margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;",time:"margin:0px 0 16px;",more:"color:#294688;margin-top:8px;"},keyword:{value:"[0]$1:[0]$2",matches:[{source:{type:"selector",attribute:"href"},matchRegex:"code=(\\w+)_(\\w+)",match:"a[href*='rank/stock?code=']"}]},showCount:8}]},{id:"xueqiu",matches:"xueqiu.com",searchEnhancementConfig:[{id:"xueqiu",urlMatch:"xueqiu.com/S/[a-zA-Z]+/?$",delayTime:0,selector:".container-side-sm.float-right.stock__side",selectorAction:"appendChild",style:{container:"background:white;border:none;border-radius: 4px;padding:0;",source:"font-size:12px; margin-bottom: 0px;",keyword:"color:#06c",title:"font-size:14px;color:#06c;",enTitle:"margin-top:4px;font-size:12px;",searchTitle:"margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;font-weight: bold;",time:"margin:0px 0 16px;",more:"color:#06c;margin-top:8px;"},showCount:8,keyword:{value:"[0]$1",matches:[{source:{type:"selector",attribute:"text"},matchRegex:"\\((.+)\\)",match:".stock-name"}]}}]},{id:"laohu8",matches:"www.laohu8.com",searchEnhancementConfig:[{id:"laohu8",urlMatch:"www.laohu8.com/stock/[a-zA-Z]+/?$",delayTime:0,selector:".hot-stocks-root",selectorAction:"insertBefore",style:{container:"background:white;border:none;border-radius: 4px;box-shadow: 0 2px 4px hsla(216,5%,62%,.14);",source:"font-size:12px; margin-bottom: 0px;",title:"font-size:14px;color: #007bff;",enTitle:"margin-top:4px;color: #4d5156;font-size:12px;",searchTitle:"margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;",time:"margin: 0px 0 16px;"},keyword:{value:"[0]$1 stock",matches:[{source:"url",matchRegex:"stock/([a-zA-Z]+)"}]},showCount:8}]},{id:"futunn",matches:"www.futunn.com",searchEnhancementConfig:[{id:"futunn",urlMatch:"www.futunn.com/stock/\\w+-US",delayTime:0,selector:".right",selectorAction:"appendChild",style:{container:"background:white;border:none;border-radius: 4px;box-shadow: 0 2px 4px hsla(216,5%,62%,.14);",source:"font-size:12px; margin-bottom: 4px;",title:"font-size:14px;color: #007bff;",enTitle:"margin-top:4px;color: #4d5156;font-size:12px;",searchTitle:"margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;",time:"margin: 4px 0 20px;"},keyword:{value:"[0]$1 stock",matches:[{source:"url",matchRegex:"stock/([a-zA-Z]+)-US"}]},showCount:8}]},{id:"bmvrMarseille",matches:"www.bmvr.marseille.fr",globalStyles:{"a > div":"display:block;","[style*='358px;']":"width: 33.3333%; height: auto; padding: 0px; position: relative; margin: 0px;"},globalAttributes:{"#app":{class:""}}},{id:"haproxy",matches:["docs.haproxy.org","www.oreilly.com/openbook/opensources/book/*"],excludeTags:[],stayOriginalSelectors:[],stayOriginalTags:[],isTransformPreTagNewLine:!0},{id:"piAi",matches:"pi.ai/talk",excludeSelectors:[".space-y-4 *"],aiRule:{streamingSelector:".snap-start > [style^='height']+[style='opacity: 0;']",messageWrapperSelector:".space-y-4",streamingChange:!1,streamingDeepChild:!1}},{id:"claudeAi",matches:"claude.ai",excludeSelectors:[".contents *"],"excludeTags.remove":["PRE"],injectedCss:"[data-testid='chat-menu-trigger'] br {display:none;}",aiRule:{messageWrapperSelector:".contents",messageContainerSelector:".ReactMarkdown",messageStreamEndSelector:".contents > button",streamingChange:!0,streamingDeepChild:!1}},{id:"feishu",matches:"*.feishu.cn","additionalExcludeSelectors.remove":[".notranslate","[translate=no]"],mutationObserverLimitTargetSelectors:[".maindocbody","div[class*='render']","div[class*='block']"],excludeSelectors:[".catalogue__list"]},{id:"gitbook",selectorMatches:[".gitbook-root"],"additionalExcludeSelectors.remove":[".notranslate","[translate=no]"],"additionalExcludeSelectors.add":["[spellcheck='false']"]},{id:"bugsWebkit",matches:"bugs.webkit.org",isTransformPreTagNewLine:!0},{id:"mitre",matches:"cwe.mitre.org",globalStyles:{"span.list_entry":"height: unset;"}},{id:"kaggle",matches:"www.kaggle.com",excludeTags:["i","button"]},{id:"ieee",matches:"spectrum.ieee.org",extraBlockSelectors:["small"]},{id:"cnn",matches:"www.cnn.com",excludeSelectors:[".ad-slot-header__wrapper"]},{id:"marginalrevolution",matches:"marginalrevolution.com",globalAttributes:{header:{translate:"unset;"}}}]};function hu(e){return Array.isArray(e)?e:e?[e]:[]}function Na(e,u){let t={...e};return qa(t,u),vo(t,u),t}function Ua(e,u,t){let a={...u};return Fo(e,a,t),a}function vo(e,u){if(!u.condition)return;let t=u.condition.enableSubtitle?.true||{},a=u.condition.enableSubtitle?.false||{},n=e.enableSubtitle?t:a;qa(e,n)}function Fo(e,u,t){try{return Object.keys(u).forEach(a=>{let[n,r]=a.split(".");if(r){let o=u[a];if(Array.isArray(e[n])&&(o=hu(u[a])),r==="add"){u[n]=Uu(e[n],o),delete u[a];return}else if(r=="remove"){u[n]=at(e[n],o),delete u[a];return}}}),Object.keys(t).forEach(a=>{let[n,r]=a.split(".");if(!n||t[a]===void 0)return;let o=t[a],i=u[n];if(Array.isArray(e[n])&&(o=hu(t[a]),i=hu(u[n])),r==="add"){u[n]=Uu(i,o);return}else if(r=="remove"){u[n]=at(i,o);return}Array.isArray(i)&&n.startsWith("additional")?u[n]=Uu(i,o):u[n]=o}),u}catch{}}function qa(e,u){return Object.keys(u).forEach(t=>{let[a,n]=t.split(".");if(!a||u[t]===void 0)return;let r=u[t];if(Array.isArray(e[a])&&(r=hu(u[t])),n==="add"){e[a]=Uu(e[a],r);return}else if(n=="remove"){e[a]=at(e[a],r);return}Array.isArray(e[a])&&a.startsWith("additional")?e[a]=Uu(e[a],r):e[a]=r}),e}function Uu(e,u){let t;if(Array.isArray(e)){let a=hu(u);t=[...e,...a],t=Array.from(new Set(t))}else typeof e=="object"&&typeof u=="object"&&(t={...e,...u});return t}function at(e,u){if(Array.isArray(e)){let t=hu(u);return e=e.filter(a=>!t.includes(a)),Array.from(new Set(e))}else typeof e=="object"&&typeof u=="object"&&Object.keys(u).forEach(t=>{delete e[t]});return e}function So(){if(H.PROD==="1")return{};let e={};if(H.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID&&H.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY){let u={secretId:H.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,secretKey:H.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY};e.translationServices={},e.translationServices.tencent=u}if(H.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID&&H.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY){let u={appid:H.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,key:H.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY};e.translationServices||(e.translationServices={}),e.translationServices.baidu=u}if(H.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN){let u={token:H.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN};e.translationServices||(e.translationServices={}),e.translationServices.caiyun=u}if(H.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY){let u={apikey:H.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY};e.translationServices||(e.translationServices={}),e.translationServices.openl=u}if(H.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID&&H.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET){let u={appId:H.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,appSecret:H.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET};e.translationServices||(e.translationServices={}),e.translationServices.youdao=u}if(H.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID&&H.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY){let u={accessKeyId:H.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,secretAccessKey:H.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY};e.translationServices||(e.translationServices={}),e.translationServices.volc=u}if(H.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY){let u={authKey:H.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY};e.translationServices||(e.translationServices={}),e.translationServices.deepl=u}if(H.DEEPL_PROXY_ENDPOINT&&(e.translationServices||(e.translationServices={}),e.translationServices.deepl||(e.translationServices.deepl={}),e.translationServices.deepl.immersiveTranslateApiUrl=H.DEEPL_PROXY_ENDPOINT),H.IMMERSIVE_TRANSLATE_DEEPL_ENDPOINT&&(e.translationServices||(e.translationServices={}),e.translationServices.deepl||(e.translationServices.deepl={}),e.translationServices.deepl.immersiveTranslateDeeplTokenUrl=H.IMMERSIVE_TRANSLATE_DEEPL_ENDPOINT),H.IMMERSIVE_TRANSLATE_SECRET_OPENAI_API_KEY){let u={APIKEY:H.IMMERSIVE_TRANSLATE_SECRET_OPENAI_API_KEY};e.translationServices||(e.translationServices={}),e.translationServices.openai=u}return H.DEBUG==="1"&&(e.debug=!0,e.cache=!1,e.alpha=!0),H.MOCK==="1"&&(e.translationService="mock"),H.IMMERSIVE_TRANSLATE_SERVICE&&(e.translationService=H.IMMERSIVE_TRANSLATE_SERVICE),e}async function qu(){let e=await g.storage.local.get(Iu);if(e[Iu]){let u=e[Iu],t=u.tempTranslationUrlMatches||[],a=t.filter(o=>o.expiredAt>Date.now()),n=!1;a.length!==t.length&&(t=a,n=!0);let r={...u,tempTranslationUrlMatches:[...t]};return n&&await vu(r),r}else return{}}async function vu(e){await g.storage.local.set({[Iu]:e})}async function iu(){let e=await g.storage.local.get(o0),u={...tt,buildinConfigUpdatedAt:H.BUILD_TIME};if(e[o0]){let D=e[o0];if(D&&D.buildinConfigUpdatedAt){let y=new Date(D.buildinConfigUpdatedAt),L=new Date(u.buildinConfigUpdatedAt);y>L&&(u=D)}}let t={};if(!Tu()&&g.commands&&g.commands.getAll){let D=await g.commands.getAll();for(let y of D)y.name&&y.shortcut&&(t[y.name]=y.shortcut)}let a=Mo(),n=So(),r=await Wu(),o=globalThis.IMMERSIVE_TRANSLATE_CONFIG||{},i=await qu(),l=new Date;if(i&&i.tempTranslationUrlMatches&&i.tempTranslationUrlMatches.length>0){let D=i.tempTranslationUrlMatches.filter(y=>new Date(y.expiredAt)>l);if(D.length>0){let y=r.translationUrlPattern?r.translationUrlPattern?.matches||[]:[],L=Array.isArray(y)?y:[y],re=Array.from(new Set(L.concat(D.map(me=>me.match))));r.translationUrlPattern={...r.translationUrlPattern,matches:re}}}let c=Object.assign({},o,n,r);if(!c.interfaceLanguage){let D=await Bo();c.interfaceLanguage=D}let d=c.interfaceLanguage==="en",f=c.targetLanguage==="en",S=u&&u.translationLanguagePattern&&u.translationLanguagePattern.matches&&u.translationLanguagePattern.matches.length===0,T=["bing","google","transmart","mock"].includes(c.translationService)||!c.translationService;!d&&!f&&!S&&T?u.translationLanguagePattern||(u.translationLanguagePattern={matches:["en"],excludeMatches:[]}):u.translationLanguagePattern={matches:[],excludeMatches:[]};let F=u&&u.enableDefaultAlwaysTranslatedUrls;c.enableDefaultAlwaysTranslatedUrls===!1&&(F=!1);let G=c&&c.isChangedAlwaysTranslatedUrls,Z=[];c.translationUrlPattern&&c.translationUrlPattern.matches&&(Z=c.translationUrlPattern.matches||[]);let m=!1;G===void 0&&(Z.length>0?G=!0:G=!1,c.isChangedAlwaysTranslatedUrls=G,r.isChangedAlwaysTranslatedUrls=G,m=!0);let Te=(c?.translationLanguagePattern?.matches?.length||0)>0,q=await ku("installedAt",""),Q=Number(await zu("translage_page_daily",0)),be=Number(await ku(xa,0)),w;be>0&&(Date.now()-be<u.inactiveDays*24*60*60*1e3?w=!0:w=!1);let E;Q>0&&(Date.now()-Q<u.inactiveDays*24*60*60*1e3?E=!0:E=!1);let x;if(q){let D=new Date(q);Date.now()-D.getTime()<24*60*60*1e3?x=!0:x=!1}let B=c.modifiedBySystem;F&&!G&&!d&&!f&&T&&!Te&&(B===!0||x||E===!1||w===!1||E===void 0&&w===void 0)&&_o(Z,u.defaultAlwaysTranslatedUrls)&&(c.translationUrlPattern||(c.translationUrlPattern={}),c.translationUrlPattern.matches||(c.translationUrlPattern.matches=[]),c.translationUrlPattern.excludeMatches||(c.translationUrlPattern.excludeMatches=[]),c.translationUrlPattern.matches=[...u.defaultAlwaysTranslatedUrls],r.translationUrlPattern=c.translationUrlPattern,r.modifiedBySystem=!0,m=!0,za("modifyAlwaysTranslatedUrls",[{name:"modifyAlwaysTranslatedUrls"}])),m&&(P.debug("isChangedUserConfig",m),await fu(r));let k=Object.assign(a,u),$=Object.keys(k),W=["translationUrlPattern","translationLanguagePattern","immediateTranslationPattern","translationBodyAreaPattern","translationParagraphLanguagePattern","translationThemePatterns","translationGeneralConfig","shortcuts","inputTranslationUrlPattern","inputLanguageCodeAlias"];for(let D of $){let y=D;if(y==="generalRule")typeof c[y]=="object"&&(k[y]=Na(a[y],c[y]));else if(y==="translationServices"){let L=c[y]||{},re=u[y]||{},me=Object.keys(re),te=Object.keys(L),X=[...new Set([...me,...te])],Ve={};for(let ne of X)Ve[ne]={...re[ne],...L[ne]};k[y]=Ve}else if(typeof c[y]!="string"&&typeof c[y]!="boolean"&&typeof c[y]!="number"&&W.includes(y))c[y]&&(k[y]=Object.assign(k[y],c[y])),y==="shortcuts"&&(Tu()||We()?k[y]={...k[y],...t}:k[y]={...t});else if(y==="rules"){if(Array.isArray(c[y])){let L=k.rules||[],re={};for(let te of L)te.id&&(re[te.id]=te);let me=c[y].map(te=>te.id&&re[te.id]?Ua(u.generalRule,re[te.id],te):te);k[y]=[...me,...k[y]]}if(H.PROD==="0"&&H.DEV_RULES){let L=JSON.parse(H.DEV_RULES);k[y]=[...L,...k[y]]}}else c[y]!==void 0&&(k[y]=c[y])}return k.donateUrl=u.donateUrl,k.minVersion=u.minVersion,k.feedbackUrl=u.feedbackUrl,k}async function Wu(){return(await g.storage.sync.get("userConfig")||{}).userConfig||{}}async function fu(e){await g.storage.sync.set({userConfig:e})}var Bo=async()=>{let e=["zh-CN"];try{e=await g.i18n.getAcceptLanguages()}catch(a){P.warn("get browser language error:",a)}let t=e.map(a=>wu(a)).find(a=>du[a]);return t||"en"},Mo=()=>{let e={...tt,buildinConfigUpdatedAt:H.BUILD_TIME};return{...e,targetLanguage:s0,interfaceLanguage:"en",translationMode:"dual",debug:!1,alpha:!1,translationUrlPattern:{matches:[],excludeMatches:[]},translationLanguagePattern:{matches:[],excludeMatches:[]},translationThemePatterns:{},translationParagraphLanguagePattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationBodyAreaPattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationTheme:"none",translationService:"bing",translationArea:"main",translationStartMode:"dynamic",translationServices:{},generalRule:{...e.generalRule},translationGeneralConfig:{engine:"bing"},rules:[]}};function _o(e,u){return e=e||[],u=u||[],e.length!==u.length?!0:u.filter(a=>!e.includes(a)).length>0}function Wa(e){let u=g.runtime.getURL(n0),t=new URL(u);return(e.startsWith("http")||!Da())&&t.searchParams.set("file",e),t.href}function Ha(e){return new URL(e)?.pathname.toLowerCase().endsWith(".pdf")}var N2=Ga(2),Ka=Ga(3);function Ga(e){if(typeof e!="number"||Number.isNaN(e)||e<1||e===Number.POSITIVE_INFINITY)throw new Error("`"+e+"` is not a valid argument for `n-gram`");return u;function u(t){let a=[];if(t==null)return a;let n=typeof t.slice=="function"?t:String(t),r=n.length-e+1;if(r<1)return a;for(;r--;)a[r]=n.slice(r,r+e);return a}}var Lo=/\s+/g,Po=/[\t\n\v\f\r ]+/g;function Va(e,u){u?typeof u=="string"&&(u={style:u}):u={};let t=u.preserveLineEndings?Ro:Io;return String(e).replace(u.style==="html"?Po:Lo,u.trim?jo(t):t)}function Ro(e){let u=/\r?\n|\r/.exec(e);return u?u[0]:" "}function Io(){return" "}function jo(e){return u;function u(t,a,n){return a===0||a+t.length===n.length?"":e(t)}}var $a={}.hasOwnProperty;function Oo(e){return e==null?"":Va(String(e).replace(/[\u0021-\u0040]+/g," ")).trim().toLowerCase()}function zo(e){return Ka(" "+Oo(e)+" ")}function No(e){let u=zo(e),t={},a=-1;for(;++a<u.length;)$a.call(t,u[a])?t[u[a]]++:t[u[a]]=1;return t}function Ya(e){let u=No(e),t=[],a;for(a in u)$a.call(u,a)&&t.push([a,u[a]]);return t.sort(Uo),t}function Uo(e,u){return e[1]-u[1]}var qo={cmn:/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,Latin:/[A-Za-z\u00AA\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uAB66-\uAB69\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A]|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]/g,Cyrillic:/[\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F]|\uD838[\uDC30-\uDC6D\uDC8F]/g,Arabic:/[\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C-\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u0870-\u088E\u0890\u0891\u0898-\u08E1\u08E3-\u08FF\uFB50-\uFBC2\uFBD3-\uFD3D\uFD40-\uFD8F\uFD92-\uFDC7\uFDCF\uFDF0-\uFDFF\uFE70-\uFE74\uFE76-\uFEFC]|\uD803[\uDE60-\uDE7E\uDEFD-\uDEFF]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]/g,ben:/[\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FE]/g,Devanagari:/[\u0900-\u0950\u0955-\u0963\u0966-\u097F\uA8E0-\uA8FF]|\uD806[\uDF00-\uDF09]/g,jpn:/[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g,jav:/[\uA980-\uA9CD\uA9D0-\uA9D9\uA9DE\uA9DF]/g,kor:/[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,tel:/[\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C77-\u0C7F]/g,tam:/[\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA]|\uD807[\uDFC0-\uDFF1\uDFFF]/g,guj:/[\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9-\u0AFF]/g,kan:/[\u0C80-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3]/g,mal:/[\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4F\u0D54-\u0D63\u0D66-\u0D7F]/g,mya:/[\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F]/g,pan:/[\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A76]/g,amh:/[\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]/g,tha:/[\u0E01-\u0E3A\u0E40-\u0E5B]/g,sin:/[\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4]|\uD804[\uDDE1-\uDDF4]/g,ell:/[\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65]|\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]/g},nt={Latin:{spa:" de|de |os | la| a |la | y |\xF3n |i\xF3n|es |ere|rec|ien|o a|der|ci\xF3|a p|cho|ech|en |ent|a l|aci|e d|el |ona|na | co|as |al |da | to|ene|e l| en| el| pe|nte|tod|ho | su|per|ad | ti|a t|ers|tie| se|rso| pr|son|e s|te |oda|cia|n d|o d|dad|ida| in|ne | es|ion|cio|s d|con|est|a e| po|men| li|res|nci|su |to |tra| re|n e| lo|tad| na|los|a s| o |ia |que| pa|r\xE1 |pro| un|s y|ual|s e|lib|nac|do |ra |er |nal|ue | qu|e e|a d|ar |nes|ica|a c|sta|ser|or |ter|se |por|cci|io |des|ado|les|one|a a|del|l d|ndi| so| cu|s p|ale|s n|ame|par|ici|oci|una|ber|s t|rta|com| di|e a|imi|o s|e c|ert|o e|dos|las|o p|ant|dic|nto| al|ara|ibe|enc|cas| as|e p|ten|ali|o t|soc|y l|n c|s l|l t|pre|nta|so |tos|y a|ria|n t|die|a u| fu|no |l p|ial|qui|dis|s o|hos|gua|igu| ig| ca|sar| ma|l e| ac|tiv|s a|re |nad|vid|era| tr|ier|cua|n p|cla|ade|bre|s s|esa|ntr|ecc|a i| le|lid|das|d d|ido|ari|ind|ada|nda|fun|mie|ca |tic|eli|ta |y d|nid|e i|n l|ios|o y|esp|iva|y e|mat|bli|r a|dr\xE1|tri|cti|tal|rim|ont|er\xE1|us |sus|end|pen|tor|ito|ond|ori|uie|lig|n a|ist|rac|lar|rse|tar|mo |omo|ibr|odo|edi|med| me|nio|a y|eda|isf|lo |aso|l m|ias|ico|lic|ple|ste|act|tec|ote|rot|ele|ura| ni|ie |adi|u p|seg|s i|un |und|a n|lqu|alq|o i|inc|sti| si|n s|ern",eng:"the| th| an|he |nd |ion|and| to|to |tio| of|on |of | in|al |ati|or |ght|igh|rig| ri|ne |ent|one|ll |is |as |ver|ed | be|e r|in |t t|all|eve|ht | or|ery|s t|ty | ev|e h|yon| ha|ryo|e a|be |his| fr|ng |d t|has| sh|ing| hi|sha| pr| co| re|hal|nal|y a|s a|n t|ce |men|ree|fre|e s|l b|nat|for|ts |nt |n a|ity|ry |her|nce|ect|d i| pe|pro|n o|cti| fo|e e|ly |es | no|ona|ny |any|er |re |f t|e o| de|s o| wi|ter|nte|e i|ons| en| ar|res|ers|y t|per|d f| a | on|ith|l a|e t|oci|soc|lit| as| se|dom|edo|eed|nti|s e|t o|oth|wit| di|equ|t a|ted|st |y o|int|e p| ma| so| na|l o|e c|ch |d a|enc|th |are|ns |ic | un| fu|tat|ial|cia| ac|hts|nit|qua| eq| al|om |e w|d o|f h|ali|ote|n e| wh|r t|sta|ge |thi|o a|tit|ual|an |te |ess| ch|le |ary|e f|by | by|y i|tec|uni|o t|o o| li|no | la|s r| su|inc|led|rot|con| pu| he|ere|imi|r a|ntr| st| ot|eli|age|dis|s d|tle|itl|hou|son|duc|edu| wo|ate|ble|ces|at | at| fa|com|ive|o s|eme|o e|aw |law|tra|und|pen|nde|unt|oun|n s|s f|f a|tho|ms | is|act|cie|cat|uca| ed|anc|wor|ral|t i| me|o f|ily|pri|ren|ose|s c|en |d n|l c|ful|rar|nta|nst| ag|l p|min|din|sec|y e| tr|rso|ich|hic|whi|cou|ern|uri|r o|tic|iti|igi|lig|rat|rth|t f|oms|rit|d r|ee |e b|era|rou|se |ay |rs | ho|abl|e u",por:"de | de| se|\xE3o |os |to |em | e |do |o d| di|er |ito|eit|ser|ent|\xE7\xE3o| a |dir|ire|rei|o s|ade|dad|uma|as |no |e d| to|nte| co|o t|tod| ou|men|que|s e|man| pr| in| qu|es | te|hum|odo|e a|da | hu|ano|te |al |tem|o e|s d|ida|m d| pe| re|o a|ou |r h|e s|cia|a e| li|o p| es|res| do| da| \xE0 |ual| em| su|a\xE7\xE3|dos|a p|tra|est|ia |con|pro|ar |e p|is | na|r\xE1 |qua|a d| pa|com|ais|o c|ame|er\xE1| po|uer|sta|ber|ter| o |ess|ra |e e|das|o \xE0|nto|nal|o o|a c|ido|rda|erd| as|nci|sua|ona|des|ibe|lib|e t|ado|s n|ua |s t|ue | so|ica|ma |lqu|alq|tos|m s|a l|per|ada|oci|soc|cio|a n|par|aci|s a|pre|ont|m o|ura|a s| um|ion|e o|or |e r|pel|nta|ntr|a i|io |nac|\xEAnc|str|ali|ria|nst| tr|a q|int|o n|a o|ca |ela|u\xE7\xE3|lid|e l| at|sen|ese|r d|s p|egu|seg|vid|pri|sso|\xE9m |ime|tic|dis|ra\xE7|eci|ara| ca|nid|tru|\xF5es|ass|seu|por|a a|m p| ex|so |r i|e\xE7\xE3|te\xE7|ote|rot| le| ma|ing|a t|ran|era|rio|l d|eli|\xE7a |sti| ne|cid|ern|utr|out|r e|e c|tad|gua|igu| ig| os|s o|ru\xE7|ins|\xE7\xF5e|ios| fa|e n|sse| no|re |art|r p|rar|u p|inc|lei|cas|ico|u\xE9m|gu\xE9|ngu|nin| ni|gur|la |pen|n\xE7a|na |i\xE7\xE3|i\xE3o|cie|ist|sem|ta |ele|e f|om |tro| ao|rel|m a|s s|tar|eda|ied|uni|e m|s i|a f|ias| cu| ac|r a|\xE1 a|rem|ei |omo|rec|for|s f|esc|ant|\xE0 s| vi|o q|ver|a u|nda|und|fun",ind:"an |ang|ng | da|ak | pe|ata| se| ke| me|dan| di| be|ber|kan|ran|hak|per|yan| ya|nga|nya|gan| at|ara| ha|eng|asa|ora|men|n p|n k|erh|rha|n d|ya |ap |at |as |tan|n b|ala|a d| or|a s|san|tas|eti|uk |pen|g b|set|ntu|n y|tia|iap|k m|eba|aan| un|n s|tuk|k a|p o|am |lam| ma|unt| de|ter|bas|beb|dak|end|i d|pun|mem|tau|dal|ama|keb|aka|ika|n m| ba|di |ma | sa|den|au |nda|n h|eri| ti|ela|k d|un |n a|ebe|ana|ah |ra |ida|uka| te|al |ada|ri |ole|tid|ngg|lak|leh|dap|a p|dil|g d|ena|eh |gar|na |ert|apa|um |tu |atu|a m|sam|ila|har|n t|asi|ban|erl|t d|bat|uat|ta |lan|adi|h d|neg| ne|kum|mas|nan|pat|aha| in|l d|emp|sem|rus|sua|ser|uan|era|ari|erb|kat|man|a b|g s|rta|ai |nny|n u|ung|ndi|han|uku|huk| hu|sa |ers|in | la|ka | su|ann|car|kes|aku|dip|i s|a a|erk|n i|lai|rga|aru|k h|i m|rka|a u|us |nak|emb|gga|nta|iba| pu|ind|s p|ent|mel|ina|min|ian|dar|ni |rma|lua|rik|ndu|lin|sia|rbu|g p|k s|da |aya|ese|u d|ega|nas|ar |ipe|yar|sya|ik |aga| ta|ain|ua |arg|uar|iny|pem|ut |si |dun|eor|seo|rak|ngs|ami|kel|ini|g t|dik|mer|emu|aks|rat|uru|ewa|il |enu|any|kep|pel|asu|rli|ia |dir|jam|mba|mat|pan|g m|ses|sar|das|kuk|bol|ili|u k|gsa|u p|a k|ern|ant|raa|t p|ema|mua|idi|did|t s|i k|rin|erm|esu|ger|elu|nja|enj|ga |dit",fra:" de|es |de |ion|nt |tio|et |ne |on | et|ent|le |oit|e d| la|e p|la |it | \xE0 |t d|roi|dro| dr| le|t\xE9 |e s|ati|te |re | to|s d|men|tou|e l|ns | pe| co|son|que| au| so|e a|onn|out| un| qu| sa| pr|ute|eme| l\u2019|t \xE0| a |e e|con|des| pa|ue |ers|e c| li|a d|per|ont|s e|t l|les|ts |tre|s l|ant| ou|cti|rso|ou |ce |ux |\xE0 l|nne|ons|it\xE9|en |un | en|er |une|n d|sa |lle| in|nte|e t| se|lib|res|a l|ire| d\u2019| re|\xE9 d|nat|iqu|ur |r l|t a|s s|aux|par|nal|a p|ans|dan|qui|t p| d\xE9|pro|s p|air| ne| fo|ert|s a|nce|au |ui |ect|du |ond|ale|lit| po|san| ch|\xE9s | na|us |com|our|ali|tra| ce|al |e o|e n|rt\xE9|ber|ibe|tes|r d|e r|its| di|\xEAtr|pou|\xE9t\xE9|s c|\xE0 u|ell|int|fon|oci|soc|ut |ter| da|aut|ien|rai| do|iss|s n| ma|bli|ge |est|s o| du|ona|n p|pri|rs |\xE9ga| \xEAt|ous|ens|ar |age|s t| su|cia|u d|cun|rat| es|ir |n c|e m| \xE9t|t \xEA|a c| ac|ote|n t|ein| tr|a s|ndi|e q|sur|\xE9e |ser|l n| pl|anc|lig|t s|n e|s i|t e| \xE9g|ain|omm|act|ntr|tec|gal|ul | nu| vi|me |nda|ind|soi|st | te|pay|tat|era|il |rel|n a|dis|n s|pr\xE9|peu|rit|\xE9 e|t \xE9|bre|sen|ill|l\u2019a|d\u2019a| mo|ass|lic|art| pu|abl|nta|t c|rot| on| lo|ure|l\u2019e|ava|ten|nul|ivi|t i|ess|ys |ays| fa|ine|eur|r\xE9s|cla|t\xE9s|oir|eut|e f|utr|doi|ibr|ais|ins|\xE9ra|\u2019en|i\xE9t|l e|s \xE9|nt\xE9| r\xE9|ssi| as|nse|ces|\xE9 a",deu:"en |er |der|ein| un|nd |und|ung|cht|ich| de|sch|ng | ge|ine|ech|gen|rec|che|ie | re|eit| au|ht |die| di| ha|ch | da|ver| zu|lic|t d|in |auf| ei| in| be|hen|nde|n d|uf |ede| ve|it |ten|n s|sei|at |jed| je| se|and|rei|s r|den|ter|ne |hat|t a|r h|zu |das|ode| od|as |es | an|fre|nge| we|n u|run| fr|ere|e u|lle|ner|nte|hei|ese| so|rde|wer|ige| al|ers|n g|hte|d d| st|n j|lei|all|n a|nen|ege|ent|bei|g d|erd|t u|ren|nsc|chu| gr|kei|ens|le |ben|aft|haf|cha|tli|ges|e s| si|men| vo|lun|em |r s|ion|te |len|gru|gun|tig|unt|uch|spr|n e|ft |ei |e f| wi| sc|r d|n n|geh|r g|dar|sta|erk| er|r e|sen|eic|gle| gl|lie|e e|tz |fen|n i|nie|f g|t w|des|chl|ite|ihe|eih|ies|ruc|st |ist|n w|h a|n z|e a| ni|ang|rf |arf|gem|ale|ati|on |he |t s|ach| na|end|n o|pru|ans|sse|ern|aat|taa|ehe|e d|hli|hre|int|tio|her|nsp|de |mei| ar|r a|ffe|e b|wie|erf|abe|hab|ndl|n v|sic|t i|han|ema|nat|ber|ied|geg|d s|nun|d f|ind| me|gke|igk|ie\xDF| fa|igu|hul|r v|dig|rch|urc|dur| du|utz|hut|tra|aus|alt|bes|str|ell|ste|ger|r o|esc|e g|rbe|arb|ohn|r b|mit|d g|r w|ntl|sow|n h|nne|etz|raf|dlu| ih|lte|man|iem|erh|eru| is|dem|lan|rt |son|isc|eli|rel|n r|e i|rli|r i| mi|e m|ild|bil| bi|eme| en|ins|f\xFCr| f\xFC|gel|\xF6ff| \xF6f|owi|ill|wil|e v|ric|f e",jav:"ng |an | ka|ang|ing|kan| sa|ak |lan| la|hak| pa| ha|ara|ne |abe| in|n k|ngg|ong|ane|nga|ant|won|uwo| an| uw|nin|ata|n u|en |ra |tan| da|ran|ana| ma|nth|ake|ben|beb|hi |ke |sab|nda| ng|adi|thi|nan|a k| ba|san|asa|ni |e h|e k|g k| ut|pan|awa| be|eba|gan|g p|dan| wa|bas|aka|dha|yan|sa |arb|man| di|wa |g d| na|g n|ban| tu|n s|ung|wen|g s|rbe|dar|dak|di |g u|ora|aya|be |ah |a s|eni| or|han|as | pr|a n|na |iya|a a|kar|at |a l|mar|uwe|duw|uta|und|n p|asi|pa | si|ala|n n| un|kab|oni|ya |i h|gar|g b|yat|tum|ta |n m|i k|apa|taw| li|ani| ke|al |ka |kal|ngk|ega| ne|nal|n i|g a|ggo|ina|we |ena|dad|iba|awi|aga|a p| ta|sar|adh|awe|and|uju|ind|min|sin|ndu|uwa|gge|n l|ggu|ngs|n b|a b|pra|iji|n a|ha | bi|kat|go | ku|e p|ron|kak|ngu|a u|gsa|war|nya|g t|pad|bis|k b|i w|ae |wae| nd|ali|a m|er |sak|e s|ku |liy|ama|i l|eh |isa|arg|n t|a d|kap|i s|ayo|gay| pe|ndh|bad|pri|neg|tow|uto|eda|bed|il |ih | ik|ur |k k|rta|art|i p|rga|lak|ami|ro |aro|yom|r k|e d|a w|kon|rib|eng|ger|g l|ras|dil| ti|k l|rap|mra|uma| pi|k h|n d|gaw|wat|ga |k n|ar |per| we|oma|k p|jro|ajr|saj|ase|ini|ken|saw|ona|nas|kas|h k|i t| um|tin|wo | me|aba|rak|pag|yar|sya|t k| te| mu|ngl| ni|i b|men|ate|a i|aku|ebu|a t| du|g m|owo|mat| lu|amp",vie:"ng |\u0323c |\u0301c | qu|a\u0300 | th|nh | ng|\u0323i |\u0300n |va\u0300| va| nh|uy\xEA| ph|quy| ca|\xEA\u0300n|y\xEA\u0300|\u0300nh|\u0300i |\u0323t | ch|o\u0301 | tr|ng\u01B0|i n| gi|g\u01B0\u01A1|\u01A1\u0300i|\u01B0\u01A1\u0300|\u0301t | co|\u01B0\u01A1\u0323| cu|a\u0301c|\u01B0\u0323 |\u01A1\u0323c| kh| \u0111\u01B0|\u0111\u01B0\u01A1| t\u01B0|co\u0301| ha|\xF4ng|c t| \u0111\xEA|n t|i \u0111|i\u0300n|\u0300u |ca\u0301|gia|\u0301i |o\u0323i|mo\u0323| mo|\xEA\u0300u|i\xEA\u0323|\u0111\xEA\u0300|u c|nh\u01B0|pha| ba| bi|\xE2\u0301t|\u0309a |u\u0309a|cu\u0309|h\xF4n| \u0111\xF4|g t|\u0301 q|\u0303ng| ti|t\u01B0\u0323|t c|\u0323n | la|n \u0111|n c|n n|hi\xEA|ch |ay |hay| vi|\xE2n | \u0111i| na|ba\u0309| ho|do | do| t\xF4| hi|\xF4\u0323i|ha\u0301|i\u0323 |na\u0300|\u0300 t|\u01A1\u0301i|h\xE2n| m\xF4|\u0301p |a\u0300n|\u0323 d|\u0301ch|\u0323p |\u0300o |a\u0300o|kh\xF4|\u0301n |\xF4\u0323t|m\xF4\u0323| h\xF4|ia |\xF4\u0301c|c h|h\u01B0\u0303|i v|g n|\u0301ng|u\xF4\u0301|qu\xF4|h t|\xF4n |\xEAn |n v|nh\xE2|\u0323 t| b\xE2|i c|g v|\u0309ng|i\xEA\u0301|c c|\xE2\u0323t|th\u01B0|h\u01B0 |\u01B0\u01A1\u0301|\u0309n | v\u01A1| c\xF4|c \u0111| \u0111o| s\u01B0|t t|\xF4\u0323c|\u01B0\u0303n|v\u01A1\u0301| v\xEA|a\u0309 |\u0323ng|g \u0111|\u0309o |a\u0309o|u\xE2\u0323| \u0111a|bi\u0323|la\u0300|s\u01B0\u0323|b\xE2\u0301|ha\u0300|h\xF4\u0323|i t|a\u0309n|h\u01B0\u01A1|\u0300ng|tro|\u0309m |o v| mi|\xEA\u0309 |u\u0323c|i h|\u01B0\u0301c|a\u0301p|g c|\u0303 h|ia\u0301|n b|\u0309i |a m|h c|c\xF4n|\xEA\u0323n|\u01A1\u0301c|ha\u0323|\u0111\xF4\u0323| du| c\u01B0|a c|n h|tha|a\u0303 | xa|\u0301o |a\u0301o|i\u0301n|\u0300y |g b| h\u01B0|g h|ong|ron|\u0300 c|cho|\u0300 n|mi\u0300|\u01B0\u0323c|h v|c b| lu|i b|\xEA\u0323 |ai |\xEA\u0301 |\u0323 c|xa\u0303|kha|c q|i\xEA\u0309|t\xF4\u0323|\xF4\u0301i|\u0111\xF4\u0301|a\u0301 |hoa|o h|h \u0111|ca\u0309|n l|ho\u0323|ti\xEA|y t|\u0309 c|a\u0323i|a\u0301n|\u0300 \u0111|oa\u0300|y \u0111|chi|\u0309 n|ph\xE2|\xEA\u0300 |thu|i\xEAn|du\u0323|o c|i m|lu\xE2|c p|\xF4\u0301n|c l|\u0301 c|u\u0303n|cu\u0303|c g|c n|qua|n g|c m|o n|a\u0309i|ha\u0309|\u0301 t|ho |v\xEA\u0300| t\xE2| h\u01A1|o t|\u01A1\u0309 |h\u01B0\u0301|hi\u0300|vi\xEA|\u0300m |\u0309 t|\u0111o\u0301|th\xF4|\u01B0\u0301 |c\u01B0\u0301|hi\u0301|\u0301nh|a\u0300y|\u01A1\u0309n|\u01B0\u01A1\u0309| b\u0103|tri| ta|m v|c v|\u01A1\u0323p|h\u01A1\u0323|h m| n\u01B0|\xEA\u0301t|thi|\u0103\u0323c|ngh|uy ",ita:" di|to | in|ion|la | de|di |re |e d|ne | e |zio|rit|a d|one|o d|ni |le |lla|itt|ess| al|iri|dir|tto|ent|ell|i i|del|ndi|ere|ind|o a| co|te |t\xE0 |ti |a s|uo |e e|gni|azi| pr|idu|ivi|duo|vid|div|ogn| og| es|i e| ha|all|ale|nte|e a|men|ser| su| ne|e l|za |i d|per|a p|ha | pe| un|con|no |sse|li |e i| o | so| li| la|pro|ia |o i|e p|o s|i s|in |ato|o h|na |e s|a l|e o|nza|ali|tti|o p|ta |so |ber|ibe|lib|o e|un | a | ri|ua |il | il|nto|pri|el | po|una|are|ame| qu|a c|ro |oni|nel|e n| ad|ual|gli|sua|ond| re|a a|i c|ri |o o|sta|ita|i o| le|ad |i a|ers|enz|ssi|\xE0 e|it\xE0|gua|i p|e c|io | pa|ter|soc|nal|ona|naz|ist|cia|rso|ver|a e|i r|tat|lle|sia| si|rio|tra|che| se|rt\xE0|ert|anz|eri|tut|\xE0 d|he | da|al |ant|qua|on |ari|o c| st|oci|er |dis|tri|si |ed | ed|ono| tu|ei |dei|uzi|com|att|a n|opr|rop|par|nes|i l|zza|ese|res|ien|son| eg|n c|ont|nti|pos|int|ico|r\xE0 |sun|ial|lit|sen|pre|tta|dev|nit|era|eve|ll |l i| l |nda|ina|non| no|o n|ria|str|d a|art|se |ssu|ica|raz|ett|sci|gio|ati|egu| na|i u|utt|ve | ma|do |e r|ssa|sa |a f|n p|fon| ch|d u|rim| fo|a t| sc|tr\xE0|otr|pot|n i| cu|l p|ra |ezz|a o|ini|sso|dic|ltr|uni|cie| ra|i n|ruz|tru|ste| is|der|l m|a r|pie|lia|est|dal|nta| at|tal|ntr| pu|nno|ann|ten|vit|a v",tur:" ve| ha|ve |ir |ler|hak| he|her|in |lar|r h|bir|ya |er |ak |kk\u0131|akk|eti| ka| bi|eya|an |eri|iye|yet|ara|ek | ol|de |vey|\u0131n |\u0131r |nda|ar\u0131|esi|\u0131n\u0131|d\u0131r| ta|tle|e h|as\u0131|etl|e k| va|\u0131 v|s\u0131n|ile|ne |rke|erk|ard|ine| sa|\u0131nd|ini|k h|k\u0131n|ama|le |tin|rd\u0131|var|a v| me|e m|na |sin|ere|k v| \u015Fa| bu|lan|kes|dir|rin|dan| ma|k\u0131 |mak|\u015Fah|da | te|mek| ge|n\u0131 | hi|nin|en |n h| se|lik|rle|ana|lma|e a|\u0131 h|r \u015F|ill|si | de|aya|zdi|izd|aiz|hai|ret|hi\xE7|\u0131na| i\u015F|e b| ba|kla|et | h\xFC|r\u0131n|n k|ola|nma|e t| ya|eme|riy|n v|e i|a h|li |mil|eli|ket|ik |kar|irl|h\xFCr|im |evl|mes|e d|ahs|ma |rak|ala|let|lle|un | ed|rri|\xFCrr|bu | mi|i v|dil| il| e\u015F|n i|la |el |mal| m\xFC| ko|e g|se | ki|mas|lek|mle|mem|n b|ili|e e|ser| i\xE7|n s|din| di|es |mel|eke|tir|\u015Fit|e\u015Fi|r b|akl|yla|n m|len| ke|edi|oru|nde|re |ele|ni |t\xFCr|a k|eye|\u0131k |ken|u\u011Fu| uy|eml|erd|ede|ame| g\xF6|e s|i m|tim|i b|rde|r\u015F\u0131|ar\u015F|a s|it |t v|siy|ar |rme|est|bes|rbe|erb|te |al\u0131| an|ndi|end|hs\u0131|unm|r\u0131 |kor|n\u0131n| ce|maz|mse|ims|kim|i\xE7 | ay|a m|lam|ri |s\u0131z|a b|ade|n t|nam|lme|ilm|k g|il |tme|etm|r v|e v|n e|\u011Fre|\xF6\u011Fr| \xF6\u011F|al |\u0131yl|olm|vle|\u015Fma|i s|ger|me | da|ind|lem|i o|may|cak|\xE7in|i\xE7i|nun|kan|ye |e y|r t|az |\xE7 k|ece|s\u0131 |eni| mu|ulu|und|den|lun| fa|\u015F\u0131 |ahi|l v|r a|san|kat| so|enm| ev|i\u015F ",pol:" pr|nie|pra| i |nia|ie |go |ani|raw|ia | po|ego| do|wie|iek|awo| ni|owi|ch |ek |do | ma|wo |a p|\u015Bci|ci |ej | cz| za| w |ych|o\u015Bc|rze|prz| ka|wa |eni| na| je|a\u017Cd|ka\u017C|ma |z\u0142o|cz\u0142|no\u015B|o d|\u0142ow|y c|dy |\u017Cdy|i p|wol| lu|ny |oln| wy|stw| wo|ub |lub|lno|rod|k m|twa|dzi|na | sw|rzy|aj\u0105|ecz|czn|sta| sp|owa|o p|spo|i w|kie|a w|zys|obo|est|neg|a\u0107 |mi |cze|e w|nyc|nic|jak| ja|wsz| z |jeg|wan|\u0144st|o s|a i|awa|e p|yst|pos|pow| r\xF3|o o|j\u0105c|ony|nej|owo|dow|\xF3w | ko|kol|aki|bez|rac|sze|iej| in|zen|pod|i i|ni | ro|cy |o w|zan|e\u0144s|no |zne|a s|lwi|olw|ez |odn|r\xF3w|odz|o u|ne |i n|i k|czy| be|acj|wob|inn| ob|\xF3wn|zie| ws|aln|orz|nik|o n|icz|zyn|\u0142ec|o\u0142e|po\u0142|aro|nar|a j|i z|t\u0119p|st\u0119|ien|cza|o z|ym |zec|ron|i l|ami| os|kra| kr|owe| od|ji |cji|mie|a z|bod|swo|dni|zes|e\u0142n|pe\u0142|iu |edn|iko|a n|raj| st|odo|zna|wyc|em |lni|szy|wia|nym|\u0105 p|j\u0105 |ze\u0144|iec|pie|st |jes| to|sob|kt\xF3|ale|y w|ieg|och|du |ini|war|zaw|nny|roz|i o|wej|i\u0119 |si\u0119| si|nau| or|o r|kor|e s|pop|zas|niu|z p|owy|w k|ywa| ta|ymi|hro|chr| oc|jed|ki |o t|ogo|oby|ran|any|oso|a o|t\xF3r| kt|w z|dne|to |tan|h i|nan|ejs|ada|a k|iem|aw |h p|wni|ucz|ora|a d| w\u0142|ian| dz| mo|e m|awi|\u0107 s|gan|zez|mu |taw|dst|wi\u0105|w c|y p|kow|o j|i m|y s|bow|kog|by |j o|ier|mow|sza|b o|ju |yna",swh:"a k| ya|na |wa |ya | ku|a m| na| ha|i y| wa|a h|a n|ana|aki|ki |la |hak| ka|kwa|tu | kw| ma|li |a a|ila|i k| ki|ni |a w|ali|a u| an| mt|ke |mtu|a y|ake|ati|kil|ka |ika|kat|ili|te |ote|we |a s|e k|ia |zi |u a|za |azi|ifa|ma |yak|yo |i n|ama| yo|au | au|e a|kut|amb|o y|ha |asi|fa |u w|hal|ara|sha|ish|ata|ayo| as|tik|u k| za|i z|ina|u n|mba|uhu|hi |hur|cha|yot|ru |uru|wat| ch|eri|ngi|e y|u y|i a|aif|tai| sh|nay|chi|ra |ani| bi| uh|sa | hi|i h|awa|iwa|a j|ti |mu |o k|ja |kan|uli|iwe|any|i w| am|e n|end|atu|kaz|o h|ria|her|she|shi|nch| nc|uta|ye |wak|ii |ele|ami|adh|eza| wo|iki|oja|moj|jam| ja|aka|bu |kam|kul|mat|fan|a l|agu|ind|ne |iri|lim|wen|da |kup|uto|i m|a b|ini|wan|bil| ta|sta|dha| sa| ni|ao | hu|e w|wot| zi|rik|kuf|aji|ta |wez|nya|har| ye|e m|si |lin| ut|ine|gin|ing| la|a t|zim|imu|ima|tak|e b|uni|ibu|azo|kos|yan|nye|uba|ari|ahi|nde|asa|ri |ham|dhi|eli|hir|ush|pat| nd|kus|maa|di |nda|oa |bar|bo |mbo|oka|tok|ndw|ala|wal| si|uzi|hii|tah|i s|o n|liw| el|upa|zin|hag|a c|ndi|ais|mai|eny|mwe|aa |ewe| al|ndo|e h|lo |umi|kuh|jib|osa|mam|a z|ufu|dwa|u i| in|iyo|nyi| ny|u m|sil|ang|o w|guz|zwa|uwa|kuw|hil|saw|uch|ufa|laz|und|aha|ua | mw|bal| lo|o l|a i|del|nun|anu|nji| ba|lik|le |uku|i i",sun:"an |na |eun|ng | ka|ana| sa| di|ang|ung|un |nga|ak | ha|keu| ba|a b| an|nu |hak| bo|anu|ata|nan|a h|ina| je|aha|ga |ah |awa|jeu| na|ara|ing|oga|bog|gan| ng|asa|kan|a s|ha |ae |bae|n k|a k| pa|a p|sah|g s|sar| si|sin|a n|din|n s|ma | at|aga|a a|tan| ku| ma|n a|san|man|wa |lah|pan|taw|u d|ra |ari|eu | pi|gar| pe|kat| te|n p|sa |per|a d|a m|e b|aan|ban|ran|ala|ike|n n|kum| ti|ama|a j|pik|ima|n d|al |at | ja|ila|ta |nda|bas|rim|teu|n b|eba|beb|udu|aya|ika|ngg|nag|kab|rta|art| me|ola|k n|uma|atu|aba|g k|adi|aca| po|ngt|nar|una|ate|oh |boh|awe|di |tin|asi|uku|n h|dan|aka|iba|car|sac|gaw|are|ent|um |jen|abe|u s|dil|pol|ar |ku |kud|u m|upa|han| hu|ake|bar|ur |hna|aru|h s|a t|sak|wat|kaw| so|n t|pa |mpa|du |ngk|g d|ena|huk| mi|mas|ngs|ti |n j|ka |aku|ren|n m| ta|law|isa| tu|und|a u|h a|tay|ula|aja|ali|nte|gsa|en |gam| wa|ieu|ere|k h|jal|h b|il |dit|ngu|lan|asu|yun|ayu|gta|k d|a r|g n|mah|uda|dip|kas|rup|geu| be|ter|sej|min|ri |ern|u p|k k|amp|ura|kal|e a|k a|ut |g b|nak|bis| bi|k p|tes|end|we |h k|tun|uan| un| de|u n|h t|ksa|u k|ian|wil|u b|ona|nas|uka|rak|eje| se|ami| ke|war| ra| ie|k j|eh |ya |lma|alm|pen|tur|wan|lak|h j|g a|ean|up |rga|arg|r k|u t| ne|deu|gal|gke|e t|h p| ge|g t| da|i n",ron:" de|re | \xEEn|\u0219i |are|de | \u0219i|te |ul | sa|rep|e d|ea |ept|dre|tul|e a| dr|ie |\xEEn |ptu|le |ate|la |e p| la| pe|ori| pr|ce |e s| or|au |tat| ar|ice|ii |or |a s| fi| a |ric|ale|per| co|n\u0103 |\u0103 a|rea|ers|i s| li|sau| ca|rso|ent|lor|a\u021Bi|al |a d|e o|men|l l|ei |e c|pri|an\u0103| ac| re|uri|ber|ibe|lib|a p|oan|soa| in|i l|ter| al| s\u0103|tea|l\u0103 |car|t\u0103\u021B|s\u0103 |tur|i a|i d|nal| ni|ri |ita|e \xEE|e \u0219|se |ilo|in |ia |\u021Bie|pre|fie|\u021Bii|\u0103\u021Bi|con|ere|e f|a o|eni|nte| nu| se|ace|ire|ici| cu|i \xEE|a c|i n|a l|pen|ui |nu |\u0103ri|al\u0103|ona|l d|r\u0103 |ert|ril| su|ntr|n c|rin| as|ni |i o|eri|t\u0103 |c\u0103 |ile|\u0103 d|i c|e n|ele|sa | mo|i p|fi |sal|tor|va |oci|soc|nic|pro| un| tr|est|in\u021B|a \xEE|uni|n m|a a| di|ecu|lui|sta|lit| po|tre|gal|ega|oat|ra |act|\u0103 \xEE|leg|u d|e l|nde|int|a f|n a| so|na\u021B|ara|i f|uie|iun| to|tar|ste|ces|rar|at | ce|eme|i \u0219|rec|dep| c\u0103| o | \xEEm|bui|ebu|reb| eg| na|m\xE2n|ntu|ili|v\u0103\u021B|\xE2nd|iei|r \u0219|bil|pli|od |mod|res|din|e e|c\u021Bi| au|ali|\u0103 p|\u0103 f|\xEEmp|ial|cia|ion|\u0103 c|dec|nta| om|it\u0103| fa|\u021B\u0103 |cu |tra|\u0103\u021B\u0103|nv\u0103|\xEEnv|\xE2t |ite|i i|lic| pu| ex|riv|tri|rot|\u021Ba |\u021Bi |l c|rta|imi|ulu|\u021Bio|ic\u0103|lig|rel|ta |cla|t \xEE|nt |nit|e m|\xE2nt|\u0103m\xE2|\u021B\u0103m|ger|n\u021Ba|ru |tru|gur|u c|bli|abi|at\u0103|art|par|ar |rim|iva|l \u0219| sc|ime|nim|era|sup|ind|u a|dic|ic | st| va|ini|igi|e r",hau:"da | da|in |a k|ya |a d| ya|an |a a| ko| wa|na | a |sa | ha|kin|wan|ta | ba|a s| ta|a y|a h|wa |ko | na|n d|a t|ba |ma |n a| ma|iya|hak|asa| sa|ar |ata|yan| za|akk|a w|ama| ka|i d|iki|a m|owa|a b| ci| mu| sh|anc|nci|kow|a z|ai |nsa|a c|shi| \u0199a|cik|ne |ana|i k|ci |kki|e d|a \u0199| ku|su |n y|uma|ka |uwa|kum|hi |a n|utu| yi|ani| ga| ra|aka|ali|mut|\u2018ya|tar| do|\u0257an|ars| \u2018y|sam|\u0199as|nda|ane|man|tum|i a|yi |ni | du|ada| su|and|a g|cin| ad|a i|ke | \u0257a|n k|yin|um |e m| ab|ins|nan|ki |mi |ami|yar|min|oka|re |i b|kam|mas|i y|mat|za |ann|en |a\u0257a| ja|m n|li |duk|dai|e s|n s|ra |n w|n h|aik| ai|ida|ga |san|rsa|aba|sar|ce |nin| la|o n|ban|nna|kan|abi|una|dam|me |ara|i m|hal|a r|add|are|n j|abu| ne|zai|a \u0257|wat|ari| \u0199u|on |ans|wa\u0257|ame|ake|kar|din|zam| fa|a l|\u0199un|buw|r d| hu|oki|kok|a \u2018|u d|n t|abb|aur| id|rin|yak|dok|kiy|ray|jam|n b|ubu|bub|n m|i s| an|am |ili|bba|omi|dan|gam|ayu|ash|nce|tsa|ayi|har|yya|ika|bin|han|kko|rsu|aif|imi|fa | am|i i|dom| ki|yuw|dun|o a|fan|n \u0199|aya|fi |n r|she|uni|bay|riy|n \u2018|sab| iy|bat|tab|aga| ir|mar|o w|i w|sha|awa| ak|uns|unc|tun|u k| il|\u0257in|mfa|amf|aci|ewa|kas|lin|n n|don|n i|ure|ifi|lai|dda| ts|iri|aye|un |tan|wad|gwa|afi| ay|ace|mba|amb|aid|nta|ant|war|lim|kya| al|a\u0257i",fuv:"de | e |e n| ha|nde|la | wa|ina| ka|akk| nd|\u0257o |na | in|e e|hak|al |di |i h|kke|ii |um |ko |ala|ndi| mu| ne|lla| jo|wal|e\u0257\u0257|ne\u0257|all|mum| fo|kal|jog|ke |aaw|taa| ko|eed|\u0257\u0257o|aa | le|ji |ade|aad|laa|o k| ng|e h| ta|re |ogi|a j|e w|e m|nnd|gii|e l|ley|awa|aag|ede|waa|e k|gu |e d| go|gal|\u0253e |ti |fot|aan|eyd|ydi|\u0257e |ee | re|ol |oto|i e|oti|m e|taw|nga|a i|kee|to |ann|eji|am |ni | wo|een|goo|eej|e f| he|enn|gol|agu|pot| po|dee|ay | fa|ka |a k|ond|oot| de|a f|o f|a n|wa |maa|ota|le |hay|i k|o n|ngo|e j|o t| ja|\xF1aa|hee|nka|i w|awi|a w|ngu|der| to|e t|dim|i n|fof|i f|e g|tee|naa|aak| do|too|a e|ndo|ren|dii|oor|er |o e|i m|of | sa| so|gaa|ani|kam| ma| \xF1a|o w|i l|u m|kaa|ima|dir| ba|igg|lig| li|aar| \u0253e|o i|e s| o |e r|so |ooj| nj| la|won|awo|dow|woo|faw|and|e i|ore|nge|nan|are|a t|tin|aam| mo|\u0257ee|ita|ira|aa\u0257|e p|nng|ma |ank|yan|nda|oo |e \u0253|njo|ude|nee|e y|e a|je | ya|en |ine|iin| di|ral| na|\u0257i |und| hu|inn|\u014Bde|a\u014Bd|ja\u014B|a d|den| fe| te|go | su|a h|haa|tal|e\u0257e|e b|y g|baa|tde| yi|\u0257\u0257a|o h|ii\u0257|ow | da|do |l n|alt| ho|l e|aga|mii| aa|a a|ama|nna|m t| ke|edd|oga|m w|l m|o j|a\u0257e|ree|oje|yee| no|ele|ne |ago| pa| al|guu|wi |ge |aa\u0253|daa|ind|dew|i j|jey| je|ent|tan|o \u0257|ge\u0257| ge|\xF1ee|a l| \u0257u|kko|mak|a s| ga",bos:" pr| i |je |rav|na |ma |pra| na|ima| sv|a s|da |a p|vo |nje|ko |ako|anj|o i| po|avo|ja |e s|a i|ti | im| da| u |sva|no |ju | za|o n|va |i p|ili|vak|li | ko|ne | il|koj| ne|nja| dr|ost| sl|van|im |i s|u s|i i|a n|ava|ije|a u| bi|stv|se |a d|om |jed|bod|obo|lob|slo| se| ra|ih |sti| ob| je|pri|enj|dru|u i|o d|iti|voj|raz|ova|dje| os|e i|lo |e p| nj|uje|i d|bra|tre| tr| su|jeg|i n|u z|a k|og |u p|oje|cij|reb|a o|a b|lju|i u|ran|mij|ni |nos|jen|ba |edn|svo| iz|jel|pro|e d|\u017Eav|bit| ni|i o|sta|a z|avn|vje| ka|bil|ovo|a j|aju|ist|nih|tu |red|gov| od|e o|oji| sm|lje|o k|ilo|ji |aci|e u|e n|pre|o p|eba|u o|su |vim|i\u010Dn| sa|u n| dj|a t|ija|\u010Dno|jem|r\u017Ea|dr\u017E|elj|stu|dna|odn|eni|za |iva|olj|\u0161ti|nom|em |du |vno|smi|jer|e b|de |pos|m i| do|u d|nak|a r|obr| mo|lja|nim|ego| kr|tit|kri|ve |nju|an |iko|nik|nu |i m|nog|eno|sno| st|e k|tup|rug|ka |oda|riv|vol|aln|m s|itu|a\u0161t|za\u0161|ani|sam|akv|ovi|osn|rod|aro| mi|tva|dno|nst|jan|ak |ite|vi\u010D|rad|u m| ta|dst|tiv|nac|rim|kon|ku |odu|\u017Eiv|amo|tvo|tel|pod|g p|nov|ina|nar| vj|o s|i b|oj | ov|ave|vu |ans|oja|zov|azo|ude|bud| bu|e t|i v|din|edi|nic|tan|nap|mje| is|jal|slu|pun|eds|o o|zak|jav|i k|m p|tno|ivo|ere|ni\u010D|m n|jim|kak|ada|vni|ugi| ro|mov|ven|pol|to |te | vr",hrv:" pr| i |ma |rav|ima|pra|je |na | sv|ti | na|a p|vo |vat|ko |a s|nje| po|anj|avo|o i|tko| im|a i|sva|no |i p|e s|ja |o n| za|ju |ili| u |va |li | bi|ne |i s|atk| il|iti|da | ne| ko| dr| sl|van|nja|koj|ije| ra|ova| os|u s|i i|ost|bod|obo|lob|slo|pri|a n|om |jed|ati|ih |im |voj|ava| ob|stv|se | mo|i u|bit|dru| je| se|dje|i o|enj| ka|i n|sti|lo |u i|svo|mij|ni |e i|raz|a o|e n|bra|o p| su|a b|u p|ran|a k|og |i d|bil|ako|e p|a d|edn|aju|mor|eni| nj|iva|jel|\u017Eav| ni|a z|avn|ovi|eno|ra |oje|a j| da|a u|ora|jeg| iz|nih|r\u017Ea|dr\u017E|oji|sno|nit|jen|vje|ilo|cij|oda|nim| dj|pro|tit|u z|e d|red|nom|jem| od|nos|sta|nov|osn| sm|lje|o s|ji |ovo|stu|pos|vim| do|odn|rad|ist| sa|e o|tu |nju|em |gov|o d|rod|i m|jer|aci|oj |pre|m i|nak|dna|a r|lju|uje|e m|obr|za |olj|ve |o o|m s|an |nu |du |aro|vno|smi|aln|e k|o k|i b|e u|tva|u u|tup|rug|dno|u o|su |u d|ka |vol| ta|ija|itu|\u0161ti|a\u0161t|za\u0161|itk|\u017Eiv|ani|sam|elj| st|sob|oso|nar|akv|ada| mi|te |ona|nst|jan|lja|i v|ite|ego|elo|rim|ku |odu|amo|tvo|tel|jim|pod|nog|vi |ina| vj|to |e b|ans|zov|azo|ak | sk|edi|tan|oju|pun|pot|oti|kon|zak|i k|m p|tno|ivo|ere|ni\u010D|kak|vni|ugi| ro|mov|ven|\u0161tv| be|ara|kla|ave|u b|avi|oja|jal|u m|dni|mje|rak|din|\u0107i |ju\u010D|klj|nic|u k|nap|obi|atn",nld:"en |an |de | de| he|ing|cht| en|der|van| va|ng |een|et |ech| ge| ee|n e|rec| re|n v|n d|nde|ver| be|er |ede|den| op|het|n i| te|lij|gen|zij| zi|ht |ijk|eli| in|t o| ve|op |and|ten|ke |ijn|e v|jn |ied| on|eft| ie|sch|n z|n o|aan|ft |eid|te |oor| we|ond|eef|ere|hee|id |in |rde|n w|t r|aar|rij|ord|wor|ens|of | of|hei|n g| vr| vo| aa|r h|hte| wo|n h|al |nd |vri|e o|ren|le |or |n a|jke|lle|eni|n b|ij |e e|g v| st|ige|die|e g|men|nge|t h|e b| za|e s|om |t e|ati|wel|erk|sta|ers| al| om|n t|zal|dig| me|ste|voo|ter|gin|re |ege|ge |g e|bes|nat| na|eke|che|ig |gel|nie|nst|e a|nig|est|e w|erw|r d|end|ona|d v|jhe|ijh|d e|ele| di|ie | do|del|n n|at |it | da|tie|e r|elk|ich|jk |vol|ijd|tel|min|len|str|lin|n s|per|t d|han| zo|hap|cha|wet| to|ven| ni|aat|ion|tio|taa|lke|eze|met|ard|waa|uit|sti|e n|doo|pen|eve|el |toe|ale|ien|ach|st |ns | wa|eme|nin|e d|bij| gr|n m|p v|esc|t w|ont|ite|man|ema| ma|nal|g o|rin|hed|t a|t v|beg|all|ijs|wij|rwi|e h| bi|gro|p d|rmi|erm|her|oon| pe|eit|kin|t z|iet|iem|e i|gem|igi| an|d o|r e|ete|e m|js | hu|oep|g z|edi|arb|zen|tin|ron|daa|teg|g t|raf|tra|eri|soo|nsc|t b| er|lan| la|ern|ar |lit|zon|d z|ze |dez|eho|d m|tig|loo|mee|ger|ali|gev|ije|ezi|gez|nli|l v|tij|eer| ar",srp:" pr| i |rav|na |pra| na|ma | sv|ima|da |ja |a p|vo |je |ko |ti |avo| po|a i|ako|a s| za| u |ju |o i| im|nje|i p|va |sva|anj|vak| da|o n|nja|e s|ost| ko|a n|li |ili|ne |om | ne|i s| sl| il| dr|no |koj|u s|ava| ra|og |slo|im |enj|sti|bod|obo|lob|iti|a o|stv|i u|a d|ni |jed|u p|pri|edn| bi|i i|a k|o d|sta|ih |dru|a u| je| os| ni|nos|pro|aju|i o|ran| de| su|u i|se |van|ova|i d|cij| ob|uje|red|\u017Eav|e i|i n|voj|e p|a j|dna| se| od|ve | ka|eni|r\u017Ea|dr\u017E|a z|avn|aci|ovo|u u|m i|oja| iz|lja| nj|ija|u z|e o|rod|jen|lje|e b|raz|jan|lju|svo|za |gov|i\u010Dn| st|nov|sno|osn|du |ji |pre| tr|su |vu |odn|a b|jeg|nim|nih|tu |tit|\u0161ti|ku |nom|bit|e d|me |iko|\u010Dno|oji|lo |vno|nik|e n|\u0111en|ika|bez|ara|de |u o|vim|nak| sa|u n|riv|ave|an |olj|vol| kr|o p|sme|e k|nog| ov|e u|tva|bra|rug|reb|tre|u d|oda| mo| vr|vlj|avl|ego|jav|del|m s|kri|o k|a\u0161t|za\u0161|nju| sm|ani| li|dno|e\u0111u|aln|la |akv|oj |\u0161en|kom|stu|ugi|avi|a r|ka |rad|oju|tan|odi|vi\u010D|tav|itu|ude|bud| bu|pot|odu|\u017Eiv|ere|m n|tvo|ilo|bil|aro|ovi|por|eno|\u0161tv|nac|ove|m p|tup|pos|rem|dni|ba |nst|a t|ast|iva|e m|vre|nu |be\u0111|ist|pun|en |te |dst|rot|zak|ao |kao|i k|ju\u0107|o s|st |sam|ter|nar| me|i m|kol|e r|u\u0161t|ru\u0161|ver|kak| be|i b|kla|ada|eba|ena|ona| on|tvu|ans| do|rak|slu",ckb:" he| \xFB |\xEAn | bi| ma|na |in |maf| di|an |xwe| xw|ku | ku|kes| de| ji|her|kir|iya|ya |rin|iri|ji |bi |es | ne|ye |y\xEAn|e b|er |af\xEA|tin|ke | an|iy\xEA|eye|rke|erk|we | be|e h|de | we|hey|f\xEA |i b|y\xEA |ina| b\xEA| li|diy|ber|li |re |\xEE \xFB|n\xEA |\xEA d| se| ci|eke|di |w\xEE | na|\xEE y|af |ete|hem| w\xEE|sti| ki|r\xEE |k\xEE |\xEE a|yek|n d|kar| te|ne |y\xEE |i h|e k|t\xEE |t\xEA |a w|e d|\xEE b|s m|ast|n b|be |yan|ser|tew|net| tu| ew|hev|aza|ara|\xFB b|n k|adi|ev |zad| az|ras|est|an\xEA| ya|n h|n \xFB|wed| t\xEA|wek|bat|bo | bo| y\xEA|st |n n|\xEA k|dan|\xEA h|ema|\xEA b|iye|\xEE h|din|b\xFBn|r k|ek\xEE| me|par|\xFBna|ta |wle|ewl|\xEE m| ke|nav|ewe|man|\xEA t|d\xEE |\xFB m|m\xFB |em\xFB|a m|ika|e \xFB|n w|a x|\xEA m|e n| ta|ela|n j|ey\xEA|n x|civ|wey|ana| re|khe|ekh|bik|k\xEA |j\xEE |f h|er\xEE| pa|\xEEna|bin|erb|vak|iva|a s| ni|cih|v\xEA |e j|ari| p\xEA|\xEE d|n\xEAn|ike|e t|a k|\xEA x| ye|n a|ey\xEE|n e|ama|b\xEA |ar |ewa|at\xEA|bes|rbe|av |ibe|ist|m\xEE |tem|awa|are|h\xEE |geh|nge|ing|nek|n\xFBn|an\xFB|qan| qa|v\xEE |rti|uke|tuk| \u015Fe|eza| da|u d|\xFB a|f \xFB|edi| ra|tu |tiy|t\xEAn| mi|xeb| ge|h\xEEn| h\xEE|et\xEA|\xEE j|st\xEE|mal|bib|ra |i d|e m|mam|i a|nik|i m|\xEE k| wi|\xFBn | ko|a \u015F|\xEA j|riy|lat|wel|e e|ine|ane|\xFB h|\xEEn |a d|siy|end|aye| za|ija|a n|\xEE n|ek |tek|yet|mbe|emb|\xFB d|rov|iro|mir|eba| xe|m\xEAn| \xEAn| hu|n\xEEn|an\xEE|t \xFB|ten|n m|dem|\xEA \xFB|en\xEA|te |art|i r| j\xEE|u j|ek\xEA|dew",yor:" n\xED|ti |\u1ECD\u0301 |n\xED | l\xE1| \u1EB9\u0300|\xE0n |\u1EB9\u0301 |kan|t\xED | t\xED|an |\u1EB9\u0300 |t\u1ECD\u0301|\u1ECD\u0300 | \u1EB9n|\u1ECDn |w\u1ECDn|\xED \u1EB9|b\xED |\xE1ti|l\xE1t|\u0300t\u1ECD|\u1EB9\u0300t| gb| \xE0t| \xE0w|n l|\xE0ti| a |l\u1EB9\u0300|\u1EB9n\xEC| \xF3 |k\u1ECD\u0300| l\xF3|\xEC k|s\xED |\u1ECD\u0300k| k\u1ECD|ra |ni |\xE0b\xED|t\xE0b| t\xE0|n\xEC | s\xED|\u0300ka|\u1ECD\u0300\u1ECD|n \u1EB9|\xE0w\u1ECD|n t|\xF3 n|\u0300\u1ECD\u0300|\xEDl\u1EB9|or\xED|l\xF3 | w\u1ECD|t\xF3 |d\xE8 |\xECy\xE0|\xFAn | t\xF3| or|\xED \xEC|\xE8d\xE8|k\xF2 |\u2010\xE8d|\u0300\u2010\xE8|\u1EB9\u0300\u2010|r\xEDl|\xED \xF3|r\u1EB9\u0300|\xED \xE0| s\xEC|y\xE0n|gbo|\u1E63e | k\xF2|\xED a| r\u1EB9| j\u1EB9|s\xEC | b\xE1|r\xE0n| \u1E63e|w\u1ECD\u0301|n\xECy|f\xFAn| f\xFA|n \xE0|ba |n n|gb\xE0|gb\u1ECD|j\u1EB9\u0301|un |\xEC\xED | k\xED|gba|\xE8n\xEC| \xE8n|b\xE1 |\u0301 l|a k| ka|d\u1ECD\u0300|k\xED | \xF2m|in | fi|b\xF2 |fi |b\u1EB9\u0301|\u1ECDd\u1ECD|b\u1ECDd|\u0301 s|hun|n\xFA |n\xEDn|w\xE0 |ira|nir|\xF2m\xEC|\xECgb| \xECg|\u0301 t|\u1EB9ni|\xEDn\xFA|i l|\xECni|m\xECn|b\xE0 |\xE1\xE0 |i \xEC|ohu| oh|\xED i|ara| ti|bo |\xF2 l| p\xE9|r\xFA |\xEDr\xE0| \u1ECD\u0300|\xED \xF2|ogb|k\u1ECD\u0301|p\u1ECD\u0300|\xF3 b|\xE0 t|i n|l\u1ECD\u0301|\u1EB9\u0301n| \xECb|y\xEC\xED|gb\xE9|g\u1EB9\u0301|bog|\xF3\xF2 |y\xF3\xF2| y\xF3|n k|p\xE9 |d\xE1 |\u0301w\u1ECD|\u1ECD\u0301w|\xE0 l|\xED k| w\xE0|n o|j\u1ECD | ir|\u1ECD\u0300r|\xFA \xEC|\u0301 \xE0|\xF3 s|i t|\u1E63\u1EB9\u0301|\u0300k\u1ECD|\xED t|y\xE9 |l\xE8 | l\xE8|fin|\xE0b\xF2| l\u1ECD|\xE0 n|\xF9j\u1ECD|w\xF9j|ir\xFA|\xF3 j| ar|\xED w|a w| \xECm|\xFA \xE0|\u0300 t|\xF2fi| \xF2f| \xE0\xE0|f\u1EB9\u0301|\xE0w\xF9|\u0301ni|w\xF9 |\xEC\xEDr|m\xEC\xED| m\xEC|l\xE1\xEC| y\xEC|\xED g|\u1ECD\u0301n|n s|i \u1EB9|\u1EB9\u0300k|\xE0gb|\xEDgb|n\xEDg|a n| k\xFA|l\xE1\xE0|\xED o|n\xE1\xE0| n\xE1|k\u1EB9\u0301|\xEDpa|n\xEDp|\xECn | \xECk|b\xE9 |i g|\u1ECDm\u1ECD| \u1ECDm|i \xE0|i\u1E63\u1EB9|\u0300 \xE0|\xECm\u1ECD|n a|n f|j\u1EB9 |y\xED |\u0301 \u1ECD|\xF3 d|\u0301 \xF2| d\xE1| m\xFA|\xE0\xE0b|\xE1b\u1EB9|l\xE1b|\xECb\xE1|\xF2 g|j\xFA |i o|l\xFA | \xE8t|\u0300 \u1EB9|t\u1ECD\u0300|de |\u0300 n|i \xF2| \xECy|k\xE0n|\u0301n | b\xED| i\u1E63|m\u1ECD\u0300|e \u1EB9|\u0300 l| f\xE0|\xE8y\xED| \xE8y| \xECd|m\u1ECD\u0301|d\xE9 |\u0300 k|\u0301 p|\xF2 t|m\xFA | f\u1EB9| \xECj|r\xED |\xECk\u1EB9|n\xECk|\xECn\xED|n \xEC|n \xE8|s\xECn|\xE8 \u1EB9| i |r\u1ECD\u0300| \xE0n|\u0301 b|\xF9n |\u0301gb|\u1ECD\u0301g|d\u1ECD\u0301| d\u1ECD|\xED n|rin|\u0300 j",uzn:"ish|an |lar|ga |ir | bi|ar | va|da |iga| hu|va |bir|sh |uqu|quq|huq| ha|shi| bo|r b|gan|a e|ida| ta|ini|lis|adi|ng |dir|lik|iy |ili|o\u02BBl|har|ari| o\u02BB|uqi|ins|lan|hi |ing|dan|nin|kin| yo|son|nso| in| mu|on |qig| ma|ega|r i|bo\u02BB| eg|o\u02BBz|ni |gad|ash|i b|ki |oki|ila|yok|a b|n b|osh|ala|at |in |r h|erk| er|lga| qa|rki|h h| sh|i h|ara|n m| ba|nis|ik |igi|lig|bos|ri |qil|a t|bil|las|eti| et|n o|ani|nli|kla|i v|a q|a h|a o|yat| qo|im |a s|i m|iya|atl|oli|osi|siy|qla|cha|til| ol|ati|a y|mas|qar|inl|lat| qi|ta\u02BC|ham|gi |ib |\u02BBli|mla|h v|\u02BBz |hun|n e|mum| da| bu| to|un |mki|umk|sha|tla|ris|iro|ha |rch|bar|iri|oya|ali| be|i o|asi|aro| ke|i t|rla| te|arc|hda|shu|tis|n h|tga| sa| xa|rak|lin|ada|ola|imo|hqa|shq|li | tu|aml|lla|sid| as|nid|a i| ki|ch |n t|nda|k b|era|siz|or |hla|a m|r v|eng|ten|mat|mda|amd|lim|miy|y t|ayo|i a|ino|ilg|tni| is|ana|as |ema| em|ech|a a|tar|kat|aka|ak |rat| de|aza|ill| si| so|g\u02BBi|uql|n q|oda|\u02BCli|a\u02BCl|nik| ni|tda|uch|gin|a u|him|uni|sit|ay |qon| ja|atn|kim|h k|hec| he|\u02BBzi|lak|ker|ikl| ch|liy|lli|chi|ur |zar|shl|rig|irl|dam|koh|iko|a d|am |n v|rti|tib|yot|tal|chu| uc|sla|rin|sos|aso| un|na | ka|muh|dig|asl|lma|ra |bu |ush|xal|\u02BBlg|i k|ekl|r d|qat|aga|i q|oiy|mil| mi|qa |i s|jin",zlm:"an |ang| ke|ng | se| da|ada|ara|dan| pe|ran| be|ak |ber|hak|ata|ala|a s|ah |nya| me|da |per|n s|ya | di|kan|lah|n k|aan|gan|dal|pad|kep|a p|n d|erh|eba|nga|yan|rha| ya|nda|ora|tia|asa| ha|ama|epa| or|iap|ap |a b| at| ma|eti|ra |tau|n a|set|au | ba|pa | ad|n p|tan|p o|eng|a d|men|apa|h b|h d|dak|man|a a|ter| te|k k| sa|n b|ana|g a|end|leh|ole|a k|am |n y|aka|eh |lam|bas|beb|n m| un|pen|sa |keb|sam|n t| ti|ela|san|car|uan|ma |di |han|ega|ban|eri|at |sia|a m|ika|kes|ian|gar|seb|ta |mas|und|neg|nan|ngs|i d|erl|na |epe|emb|bar| la|atu|kla|pem|mem|emu|eca|sec|ngg|nny|any|bol|al |aha|gsa|ebe|ind|akl|n h|erk|ung|ena| bo|a t| ap|ers| de|in |tu |pun|as |agi|ann|g b|bag| ne|ain|hen| he|era|rat|sem| su|adi|lan|g s|dia|mat|ses|iad| ta|iha|g t|tin|k m|k h|i k|gi |i s|ing|uka|enu|den|lai|k d|ert|ti |rka|aja|rga|lua|ker|mel|dun|ndu|lin|rli|nak|ntu|esi|aya|un |uat|jua| in|rma|erm|ai |emp|kem|ri |dil|ua |uk |h m|l d|g m|mba|kat|ese|tik|ni |ini| an|mpu|ka |dar|mar|rja|erj|arg|u k|sua| ol|esa|dap|ar |g u|si |ent|g d| pu|awa|iri|dir|sal|gam|mbe|n i|har|a h|raa|ema|tar|i a|saa|ira|ari|pel|jar|laj|uju|tuj|rak|ura|uar|elu|t d|unt|il |wen|asi|gga|ipa|ksa|tuk|ula|sek|sas|ibu|rta|sep|rsa|nta|ati|ila|mua|yar",ibo:"a n|e n|ke | na| \u1ECD |na | b\u1EE5|\u1ECD b|nwe|nye|ere|re | n |ya |la | nk|ye | nw| ma|e \u1ECD| ya| ik|a o|a \u1ECD|ma |\u1EE5la|b\u1EE5l|ike| on|nke|e i|a m|ony|\u1EE5 n|kik|iki|b\u1EE5 | a |ka |wer|ta |i n|do |di | nd| ga|a a|e a|a i|he |kwa| ok| ob|e o|hi |any|ga\u2010|ha |d\u1EE5 | mm|ndi|\u1ECD n|wa |r\u1EE5 |e m|che|a e|oke|wu |aka|ite|o n|a g|odo|bod|obo| d\u1ECB| ez|ara|we | ih|a\u2010e|h\u1ECB |ri |n o|zi |mma|chi|d\u1ECB |ghi|\u1EE5ta|iri|ihe| an| oh|a y|gba|\u1EE5 \u1ECD| \u1ECDz| ak| iw|nya|te |iwu| nt|ro |oro|e \u1ECB|z\u1ECD |ezi|me |e e|u n|her|ohe| si|a\u2010a|i m|ala|\u1EE5 i| ka|akw| in|gh\u1ECB|kpe|n e|p\u1EE5t| e |i i|i o|ide|inw|\u1EE5 o|h\u1EE5 |ah\u1EE5|weg|ra |o i|kpa|ad\u1EE5|mad|si |sit|a s| me|sor|i \u1ECD|gid|edo|u o|e y|n a| en|tar|ozu|toz|bi |be |\u1EE5 m|\u1EE5r\u1EE5|\u1ECDr\u1EE5| \u1ECDr|mak|uso|ama|de |\u1ECB o| \u1ECDn|\u1ECDz\u1ECD|ch\u1ECB|egh|enw|ap\u1EE5|ru | to|i a|a \u1EE5|osi|r\u1ECB |wet|hed|nch| nc| eb| al|n\u1ECDd|\u1ECDn\u1ECD|uru|sir| kw|yer|ji |eny| mk|\u1ECBr\u1ECB|eta| us|tu |\u1ECD d|u \u1ECD| o |ba | mb|\u1ECDd\u1EE5|\u1ECBch| ch|a d|pa | ag|kwe| ha|a u|e s|mkp|n u|nta|ebe|n \u1ECD|o m|kwu|nkw|nwa|obi| \u1ECBk|esi|i e|nha| nh|le |ile|nil| ni|eme| og|e k|n i|ch\u1ECD|o y|as\u1ECB|otu| ot|ram|u m|\u1ECBgh|d\u1ECBg|zu |n\u1ECD |mba| gb|e g|\u1ECB m|\u1ECDch|ich|pe |agb|i \u1ECB|uch|z\u1EE5z|uny|wun|\u1ECDr\u1ECD| nn|na\u2010| di|ge |oge|iji| ij|\u1ECDha| \u1ECDh|ikp|egi|meg|o o|\u1EE5h\u1EE5|h\u1EE5h|mah|n \u1EE5|\u1ECD g|\u1ECDta|ek\u1ECD|\u1ECB n|kw\u1EE5|agh|\u1EE5m\u1EE5|ban|kpu|okp| ah|\u1ECBkp|a k|ime| im|z\u1EE5 |\u1EE5z\u1EE5|\u1ECDz\u1EE5| \u1EE5z|lit|ali|nat",ceb:"sa | sa|ng |ang| ka| pa|an |ga |nga| ma|pag| ng|on |a p|od |kat|ay | an|g m|a k|ug |ana| ug|ung|ata|ngo|atu|n s|ala|san|d s|tun|ag |a m|god|g s|a a|a s|g k|g p|yon|n u|ong|tag|usa|pan|ing|una|mat|g u|mga| mg|y k| us|ali|syo| o |aga|tan|iya|kin|dun|nay|man|nan|a i| na|ina|nsa|isa|bis|a b|adu| ad|n n| bi|asy|asa|lay|awa|lan|non|a n|nas|o s|al |agp|lin|nal|wal| wa|ili|was|gaw|han| iy| ki|nah|ban|nag|yan|ahi|n k|gan| gi|him| di|a u| ba| un|ini|ama|ya |kas|asu|n a|g a|gka|agk|kan|ags|agt|l n|a g|kag| ta|imo|uns|sam| su|g n|n o|gal|kal|og |taw|aho|uka|gpa|ipo|ika|o p|a t| og| si|gsa|g t|aba|ano|gla|y s|o a|aki|hat|kau|sud|gpi|a w|g i|aha|ot |ran|i s|n m|bal|lip|gon|ud | ga|li |uba|ig |ara|g d|na |kab|aka|gba|ngl|ayo| la| hu|a h|ati|d a|d n| pu| in|uga|ok |ihi|d u|ma |may|awo|agb|ami|say|apa|pod|uha|t n|agh|buh|ins|ad | ub| bu|at |iin|a d|ip |uta|sal|hon|wo |ho |tra|lak|iko|as |aod|bah|mo |aug|ona|dil|gik|sos|lih|pin| pi|k s|nin|oon|abu|la |rab|hun| ti|mah|tar|t s|ngb|uma|hin|bat|lao|mak|it | at|s s|sno|asn|ni |aan|ahu| hi|agi|n p|inu|ulo|y p| ni|iha|mag|o n|duk|edu| ed|a e|til|ura|tin|kip|agl|gay|g h|g b|ato|ghi|nab|kon|in |ter|o u|o o|yal|sya|osy| so|tik| re| tr|hig|a o|ha |but|pak|aya",tgl:"ng |ang| pa|an |sa | ka| sa|at | ma| ng|apa|ala|ata|g p|pan|pag|ay | an| na|ara| at|tan|a p|pat|n a| ba|ga |awa|rap|kar|g k|aya|lan|g m|n n|g b|nga|mga| mg|a k|na |ama|n s|a a|gan|yan|gka| ta|may|tao|agk|asa|man|aka|ao |y m|ana|g a|nan|aha|kan|y k|baw|kal|a m|g n|ing|wat| y |t t|pam|a n|o y|ban| la|ali|san|wal|mag| o |g i|aga|lay|any|g s|in |nya|yon|kas|a s|isa|una|ong|aan|kat|t p| wa|ina|tay|ya |on |o m|ila|ag |nta|t n|aba|ili| ay|o a| ga|no |a i|gal|ant|han|t s|kap|kak|lah|ari|agt|agp|ran|g l|lin|as |lal|gaw|ans|to |ito| it|hay|wa |t m| is|pap|mam|nsa|ahi|nag|bat|lip|gta| di|gay|gpa|pin| si|ngk|ung|aki|y n|iti|tat|ano|yaa|y s|mal|hat|kai|sal|hin|uma|mak|di |agi|pun|ihi|a l|i a|ira|gga|nah|s n|ap | ha|usa|nin|o p|gin|ipu|ika|ngi|i n|lag|la |y p|ini|g t|uka|nap| tu|a g|tas|aru|ipa| ip|li |al |n o|a o|t k|alo| pi|sin|syo|asy|ita|aho|nar|par|o s|pak|t a|uha|sas|gsa|ags|kin|a h|iba|lit|ula|o n|nak|a t| bu|duk|kab|sam|g e|ain|ami|mas|lab|ani|kil|it | al|agb|buh|a b|g g|ba | ib|iyo|ri |yag|ad | da|edu| ed|anl|ma |ais|iga|mba|tun|ipi| ki|od |ayu| li|lih|sar|gi |g w|pah|wir|oob|loo|agg|nli|bay|map|git|mil|ok |hon|ngg|sah|iya|pas|g h|agl|tar|ngu|amb|uku|ayo|s a|p n|n m|rus|i m|l a|abu| aa",hun:"en | sz| va| a |\xE9s |min|ek | \xE9s| mi|jog| jo|an |ind|nek|sze|s\xE1g|nde|a v|den|oga|sza|val|ga |m\xE9l|ala|em\xE9|gy |n a|van|zem|ele| me|egy|\xE9ly| eg|zab|t\xE1s| az|n s|bad|aba|ni |az |gye| el|ak | se|meg|sen|\xE9ny|s\xE9g|k j|yne|lyn| ne|ben|lam|tt |t a|et |agy|oz |hoz|vag|zet| te|n m|ez |nak|int|re |et\xE9|tet|mel|tel|s a|em |ely|let|hez| al|s s| ki|ete|at\xE1|z a| le|yen|es |ra |t\xE9s|ell|nt |sem|t s|len|nem|a s|ese|nki|enk|a m|\xE1s\xE1|i m|ban|kin|k m|szt| \xE1l|ame|k\xF6z|k a|ds\xE1|ads|l\xF3 | k\xF6|\xE1s |ly |on |\xE9be|tat|a t|n v|\xE1ll|m\xE9n| v\xE9|nye|k\xFCl|l\u0151 |a n| cs|i \xE9|ok |\xE9sz|\xE9rt|lla|lap|\xE1go|gok|nyi|tek| ke|nd |\xE9te|ami|z\xE9s|yes|szo|t m|a a|het|fel|lat|lem|lle|el |z e|s e|k \xE9|mbe|emb|el\xE9|ot |lis|vet|kor|\xE1g |olg| am|sz\xE1|ehe|leh|ogo|ott|\xFCl |nte|\xE9le|i v|ogy|hog| ho|kel|n k|tes|nl\u0151|enl|ss\xE1|\xE1za|h\xE1z|\xE9g |vel|\xE1ba|lek|\xE9ge| ha|a h|r\xE9s| fe|\xE1ny|del|el\u0151|\xE1t |al\xE1|art|tar|zto|z\xE1s|t\u0151 |yil|koz|tko|al\xF3|s k|i e|\xE1rs|t\xE1r|mze|emz| ny|m\xE1s|ett|ny |fej|ass|zas| h\xE1|d a|t \xE9|is |\xE9s\xE9|ez\xE9|t\xE9b| mu|\xE1so|s\xEDt|lye|elm|\xE9de|v\xE9d|ine|t k|os |it |izt|biz| bi|y a|m l|tot|a j|atk|n\xE9l|t n|ti | m\xE1|ai |l\xE1s|eve|nev|zte| b\xE1|sel|ll |al |ere|n e|unk|mun|t e| ak|ife|kif|ako|s \xE9| \xE9r|\xE1na| es|s t|got|s\xFCl| be|v\xE1l|csa|se |\xE9se|ad |ges|tos|ja | gy|asz|ten|lm\xE9| t\xE1|eze|\xE1rm|b\xE1r|ess|l s|\xFCle",azj:" v\u0259|v\u0259 |\u0259r |ir | h\u0259| bi| h\xFC| ol|\xFCqu|h\xFCq|quq|na |in |lar|h\u0259r|d\u0259 | \u015F\u0259|bir|l\u0259r|lik|mal|r b|lma|r h| t\u0259|\u0259xs|\u015F\u0259x|\u0259n |dir|uqu|una|an |ali|a m| ma|ikd|ini|r \u015F|d\u0259n|ar |il\u0259|qun|aq |as\u0131| ya|m\u0259k|y\u0259t| m\u0259| m\xFC|kdi|\u0259si|\u0259k |ilm|nin|nd\u0259|olm|\u0259ti|\u0259 y|sin|xs |nda|lm\u0259|yy\u0259|i v| qa| az|olu|iyy|ya |ind|zad|qla|\xFCn |ni |l\u0259 |tin|n m|aza|ar\u0131|\u0259t |n t|maq|lun|l\u0131q|\u0259 b|un |nun|q v|n h|dan|\u0131n | et|tm\u0259|\u0259r\u0259| \xF6z|da |\u0259 v| on|\u0259 a|\u0131na|\u0131n\u0131|bil|a b|s\u0131 |il |\u0259mi|ara|si | di|\u0259 m|\u0259ri|rl\u0259| va|\u0259 h|etm|\u0131\u011F\u0131|ama|dl\u0131|adl|rin|b\u0259r|r\u0131n|n i|m\xFCd|n\u0131n| he|mas|ik |n a|dil|al\u0131|irl|\u0259l\u0259|\xFCda|s\u0131n|\u0131nd|xsi|li |\u0259 d|n\u0259 | b\u0259|\u0259ya| in|\u0259 i|l\u0259t| s\u0259|n\u0131 | i\u015F|an\u0131|e\xE7 |he\xE7|q h|eyn|\u0259 e|d\u0131r| da|asi|r\u0131 |i\u015F |ifa|l\u0131\u011F|i s|fi\u0259|afi|daf| ed|m\u0259z|u v|kil| ha|ola|n v|\u0259ni|\u0131r |uq |unm| bu| as|sia|osi|sos|ili|\u0131d\u0131|l\u0131d|nma|\u0131q |in\u0259|\u0259ra|sil|xil|axi|dax|ad\u0259|man|a h|\u0259 o|onu|a q|\u0259z | ki|se\xE7| se|\u0131 h|min|lan|\u0259d\u0259|bu |raq|l\u0131 |\u0131l\u0131|al |\u0259 q|r v|nla|hsi|\u0259hs|t\u0259h|\xF6z |ist| is|m\u0259s| \u0259s|ina|\u0259 t|\u0259tl|a v|i\u0259 |n b|t\u0259r| ta| c\u0259|edi|ala|kim|qu |i t|ulm|m\u0259h|n o|aya|\u0131 o|ial| so|ill|siy| d\u0259|var|ins|mi |\u011F\u0131 |nik|r i|aql|k h|t\u0259m|tam|\xE7\xFCn|\xFC\xE7\xFC| \xFC\xE7|\u011F\u0131n|sas|\u0259sa|z h|\u0259m\u0259|zam| za|sti|r\u0259f|n e|r a|ild|h\u0259m|\u0131ql|yan|may|n \u0259|m\u0259n|mil| mi|\u0259qi|din|n d|t\xFCn| d\xF6|miy|kah|ika| ni|fad|tif|l o|s\u0259r|yni| ey|ana|l\u0259n|am |ril|ay\u0259|a\u015F\u0131",ces:" pr|n\xED | a | ne|pr\xE1|r\xE1v|na |ost| po|ho | sv|o n| na|vo |neb|\xE1vo|bo |ebo|nos|m\xE1 | m\xE1|a\u017Ed|ka\u017E| ka| ro|ch |d\xFD |\u017Ed\xFD|ti |ou |a s| p\u0159| za|\xE1n\xED|\xE1 p| je| v |svo|\xE9ho| st|\xFD m|sti|n\u011B | by|obo|vob|ter|pro|en\xED|bod| z\xE1| sp|\xED a|rod|kte|by |mu |u p|o p| n\xE1|v\xE1n|jak| ja|a p|o v|\xED n|ov\xE1|oli|v\xED |spo|roz| kt|mi |\xED p|ny | ma|\xEDm |i a|do | so|odn|\xE1ro|n\xE1r|li |n\xE9 |tv\xED|at |\xFDch|a z| vy|byl|vol|en |\xFDt |b\xFDt| b\xFD|t s|tn\xED|stn|o s|\xED b|to | do|sv\xE9|v\xE9 |ran|ejn|z\xE1k|eho|jeh|nes|p\u0159\xED|m\xED |\u010Din|kol|aj\xED|sou| v\u0161|\xEDch|it |n\xFDm|\xFDm |nu |hra|nou|u s|\xE9mu| k |du |\u017Een|pod| ze|kla|a v|stv|pol|dn\xED|er\xE9|m p|st\xE1|je |ci |e\u010Dn| ni|n\xE9h|a n|ak\xE9|\xE1va|maj|em |rov|\xED m|k\xE9 |ole|n\xFDc|ova| ve|ako| ta|i k|chr|och| oc|kon|i p|\xED v|sm\xED|esm|kdo|st |i n|o z|ave|odu|bez| to|sta|ech|j\xED |o d|sob|se | se|\xED s|\xFDmi|i s| i |i v| vz|n\xEDm|pra|ln\u011B|p\u0159i|t\xE1t|ste|a j|aby| ab| s |oln|a o|m n|\u010Den|slu|\u0159\xEDs| os|zem|mez| \u010Di|ln\xED|\xE1ln|oci|jin| ji|y b|\xED z|y s|va |v\u0161e|t v|ovn|chn|d\u011Bl|n\xEDc|le\u010D| pl|vat| vo|vin|rav|vou|lad|inn|\xE9 v|anu|tej|u k|stu|est| tr|ky |ikd|nik|ivo|nit|zen|u o|n\xE9m|nez|i\xE1l|\xEDho|len|ens|o\u017Ee|oko|k\xE9h|rac|ven|\xED k|e s|l\xE1n|\u011Bl\xE1|zd\u011B|vzd|t k|din|odi|t\xED | od|r\xE9 |tup|pov|pln|\u0161t\u011B|\xE1kl|nno|tak|er\xE1|\u0159ed|o a|a t|res|j\xEDc| mu|u z|rok| ob|\u010Dno|u a|y k|i j|\xE9 n|lu\u0161|\xEDsl|oso|ci\xE1|soc|n\xEDh|o j|ck\xE9",run:"ra |we |wa |e a| mu|a k|se | n | um| ku|ira|ash|tu |ntu|a i|mu |umu|mun|unt|ere|zwa|ege|ye |ora|teg|a n|a a|ing|ko | bi|sho|iri| ar| we|shi|aba|e n|ese|go |a m|o a|gu |uba|ngo|nga|hir| ca|ugu|obo|hob|za |ndi|ish|gih| at|ara|wes| kw|ger|ate|a b| ba| gu|e k|can|ama|ung|bor|u w|mwe|di | ab|nke|ke |kwi|ka |ank|yo |ezw|n u|na |iwe|e m|rez|ri |a g|gir| am|igi|e i|ro |a u|ngi|e b|ban| ak| in|ari|n i|hug|ihu|e u|riz|ang|nta| vy|ata| ub|and|aka|rwa| nt|kur|ta |iki|kan|iza|u b|ran|sha|o n|i n| ig|ivy| iv|ahi|bah|u n|ana| bu| as|aku|ga |uko|o u|ho | ka|ose|ubu|ako|guk|ite|o y|ba |i b|any|kir|o k|aho|iye|kub|amw|nye|aha| ng|o m|nya| it|re | im|o b|izw|kun|hin|e c|vyo|o i|vyi|ngu|uri|imi|imw|gin|ene|u m|zi |ha |kug|bur|uru|jwe| zi|u g|era|aga|ron|abi| y |e y| uk|gek|ani| gi|eye|ind|wo |u a|i a| ib|i i|ras|bat|gan|amb|n a|onk|rik|ne |ihe|agi|kor| ic|ze |tun|ibi|wub|nge|o z|tse|nka|he |rek|twa|gen|eko|mat|ber| ah|ni |ush|umw| bw|mak|bik|ury|yiw|bwo| nk|ma |no |kiz|uro|gis|aro|ika| ya|gus|y i|wir|ugi|uki| ki|a c|ryo|bir| ma| yi|iro|bwa|mur|eng|ukw|hat|tan|utu|wit|w i| mw|y a|mbe| ha|uza|ham|rah| is|irw|o v|umv|ura|eny|him|eka|bak|bun| ny|bo |yig|kuv|wab|key|eke|yer|vye|i y|ita|ya |a r| ko|kwa|o c",plt:"ny |na |ana| ny|a n|sy |y f|a a|aha|ra | ma|nan|n n|any|y n|a m|y m|y a| fi|an |tra|han|ara| fa| am|ka | ts| na|in |ami| mi|a t|olo|min|man|iza|lon| iz|fan| ol| ha| sy|aka|a i|reh|ay |ian|tsy|ina| ar|on |o a|etr|het|ona|y o|o h|zan|y t|a h|ala| hi|a f|y h|ehe|ira|a s|zo |y i|ndr|jo | jo|n j| an| az|ran|dia| dr|y s|fah|ena|ire|tan|dre| zo|mba| ka|m p|afa| di|n d|and|azo|zy |amp|ia |ren|iny|rah|y z|ry |ika|oan|ao |amb|lal|ho | ho|isy|ony|tsa|asa|a d|ha |fia|mis|ava|ray| pi|am |dra| to|rin| ta|ant|eo |zay|rai|tsi|itr|sa | fo| ra|van|ova|nen|azy| vo|mpi|ari|o f|tok|a k| ir|kan|oto|mah|ly |sia| la|n i|voa|haf|a r|ito|y k|oka|y r|y l|ano|ita|ene|its|ial|zon|aza|ain| re| as|fot|aro|fit|nat|nin|aly|har| ko|ham| no|fa |ary|atr|ila|ata|iha|nam|kon|oko| sa|elo|nja|anj|ive|isa|oa |dy |y d|o m|nto|ank|o n|otr|pan|fir|air|sir|ty |a v|sam|o s|tov|mit|rak|reo|o t|pia|tao| ao|no |y v|iar|a e|a z|hit|hoa| it|to |za |ton|eha|end|vy |idi|tin|ati|adi|lna|aln|rov|ban| za|nga|hah|oni|osi|sos|vah|ino|ity| at|hia|pir|ifa|omb|ame|era|vel|kar|va |tso|jak|fid|ifi|ais|o i|idy|la |ama|ba | pa|tot|ani|rar|mpa|haz|kam| eo| il|iva|aho|nao|n k|ato|lah|ovy| te|dro|lan|ela| mo| si|fin|miv|san|koa| he|aso| mb|sak|kav",qug:"ta | ka|ka |na |una|cha|ash|ari|a k|ana|pak|ish|ach|hka|shk|mi |kta|hay|man| ch|apa|ak |rin|ata|kun|har|akt|ita| ha|ami|lla| pa|ama|pas|shp| ma|tak|ay\xF1|y\xF1i|in |sh |ina|uku|nka|chi|aka|a c|yta|kuy|all|tap|a h|kan| tu|\xF1it|tuk| ru|run|chu|an |pay|ayt|ris| ki|aku|hpa|ank|a p|kam| sh|nam|a s|uy |i k|ayp|nak|pi |nta|a m| li|ay |lia|hin|kaw|nap|ant|tam|a t|iri|nat| wa|y r|kay|aws| ya|n t|ypa|wsa|pa |lak|shi|a a|lli|iku|hu |n k|iak|yay|kis| al|shu|a w|ipa| sa| il|api|kas|yku|yac|kat|a r|huk|i c|wan|hik|a i|ill|ush| ti|ayk|hpi| ku|kac|say|hun|uya|ila|ika|yuy|pir|ich|mac|ima|a y|yll|ayl|i p|kin|a l| wi|kus| yu|lan|tan|llu|kpi| ta| pi|aya|la |yan|awa| ni|kak|lat|rik|war|ull|kll|li |ink|nch|un |akp|n s|may| ay|uch|i s|nac|sha|iki|kik|h m|ukt|pip|tin|n p|iya|nal|aki| ri|ura|tik|mak|ypi|i m|i w|n m|his|k i|riy|iwa|y h| hu|han|akl|k t|mas|pik|kap| \xF1a|u t|nmi|nis|k a|i y|k l|kar| im|i i|wil|yma|aym|ksi|iks|uma| su|h k|has| ak|unk|huc|kir|anc|k m|pal|k k|ik |i\xF1i| i\xF1|ma |n y|mun| mu|mam|tac|a n|i t|k r|sam|ian|asi|k h|was|ywa|iyt|llp|san|sum|ray|si |pan|nki|tar| ii|u k|\xF1ik|uk |i\xF1a|kuk|wpa|awp|akk|a u|wat|uri| mi|yar|uyk|ayw|h c|ha |tay|rmi|arm|uta|las|yka|llk|kul|wi\xF1|ati|ska| ll|kit|n h|uti|kic|mat",mad:"an |eng|ng |ban| sa| ka|dha|ren| se| ba|ak | ha|adh|hak| dh|ang|se | pa|aba|a s|na |aga|ha | or|n s|ore|ara| ag|gad|are|ana|n o|ngg|ale|gan|a k|ala|dhu|tab|sar|ota|asa|eba| ot| ke|sab|ba |wi |uwi|abb|i h|huw|aan|n k|a b|bba| ta| ma|pan|hal|bas|ako|dhi|ra |kab|em |beb|ka |lak|gi |lem|g a|eka|n b|ama|nga|san|at |ong|ran|nge|a o|ggu|sa |a d|ane|n p|ken|par|aja|man|gar|ata|nek|apa| na|agi|abe| ga|e e|sal|a a|tan|g s|al |kal|gen|ta |i s|aka|e a|a p|a e| la| pe|nan| an|era|e d| e | be|n a| al|ena|uy |guy|n n|ate| bi|mas|e k|kat|uan|oan|kon|k k|a m|i d|g e|n t|g k|ada|koa|lan|ela| da|bad|ma |ne |as |lab|ega| mo|ar |car|one|i p|bi |kaa|bat|ri |on |pon| so|e b|le |ah |abi|ase|adi|epa| ep|k h|and|pam|te |ok |ste|aon|om |oko|aha|ari|ona|asi|ter| di|di |pad|e s|sad|yar|neg|ton|set|rga|ost|mos|gap|nda|a l|har|i k|ina| a | ng|kom|isa|si |a t|a h| kl|jan|daj|iga|hig|idh|hid|ndh|n m|ngs|tto|ett|arg|la |k b|ler|k d|nna| to|nao|n d|mat| ca|tad|bis|aya|epo|aen| po|bin|nya|kas|k s|n h|sya|nta|gsa|en |ant|n g|kar|i e|das|e t|e p|iba| pr|g p| ho| el|i a|hi |os |sao|uwa|tes| ja|nag|nas|lae|sia|t s|k o|nto|int|yat|arn|m p|duw|adu|eta| ko|i b|ni |g n|kla|rak|ame|mpo|jua|sok|aso|ggi|eja|pel|jam|ele| et|dil",nya:"ali|ndi|a m|a k| nd|wa |na | al|yen| ku|nth|ra |di |se |nse| mu|a n|thu|hu |nga| wa|la |mun|u a|unt|iye| ka|ce |ace| lo|a l|ang|e a| la| pa|liy|a u|ens| ma|idw|ons|dwa|e m|i n|ala|kha|lo |li |ira|era|ene|ga |ana|za |o m| mo|yo |o w| ci|we |dzi|ko |o l|and|dan|hal|zik|chi|oyo|pa |ner|ulu|ena|moy| um|a p| da|ape|kap|ka |iko| an|pen|a c|to |ito|hit|nch| nc|iri|lir|wac|umo|e k|lu |a a|aye| dz|kuk|a z|dwe|tha|mal| za|ing|ufu|mu |ro |ful| uf|o c|i d|lin|e l|zo |edw| zo|o a|mwa|u w|iro|o n|lan|amu|ere| mw|nzi|dza|alo|ri | li|fun|lid|gan|so | ca|kul|ofu|nso|o z|ulo|unz|o k|mul|lam|i c|san|a b|kwa| na|a d| a |una|u k|i l|nkh|ant|aku|ca |cit|oli|ipo|dip|ama|lac|wir|han|yan|osa|uli|tsa|i m|pon|kup|u d|ti |gwi|ukh|ung|hun|lon|ank|nda|iki|ina| ko|ao |diz|phu|ati|oma|i a|tsi|pat|iya|siy|kut| ya|zid|eze|ma |i k|mer|ome|mol|u n|u o|aph|ogw|izo|mba|sid|ku |sam|awi|adz| ad|izi|ula|say|e n|khu| kh|rez|vom|bvo|okh|lok|win|akh|o o| am| on|zir|map| zi|eza|ja |go |ngo|ika|its|ats|osi|gwe| co|isa|ya |haw|ani|o p|zi |ndu|kho|ezo|kir|uni|i u| ay|lal|gal|sa |bom| bo|ola|amb|wak|ha |ba |nja|anj|ban| ba|iza| bu|udz|ngw|bun|oye|o d|nal|kus|i p|i o|i y|wi | nt|e p| si|aka|ne |men|jir|nji|sed|ets|end|eka|uma|du ",zyb:"bou|iz |aeu|enz|eng|uz | bo|ih |oux|nz | di|ing|z g|ux |uq |dih|ngh| ca|ng |gen|ung|z c| mi|miz|ij |cae|z d| gi| de| ge|euq|you| ci|ngz|ouj|aen|uj | yi|ien|gya| gu|ngj|mbo| mb|zli|dae|gij|cin|ang|j d|nae| se| ba|z y|euz| cu|de |x m|oz |j g|ouz|x b|li |z b|h g| da| yo|nj |xna|oxn|rox| ro|h c|nzl|vei|yau|wz |z m|ix | si|i c|iq |gh |j b| cw|nda|yin| hi| nd|dan|vun|inh| ga|can|ei |cun|yie|q g|hoz|bau| li| gy|wyo|cwy|z h|gue|gz |gun|faz|unz|yen|uh |den|ciz| go|q c|gj | bi|ej |aej| fa|hin|zci| wn|j n|goz|gai|au |z s|q d| vu|h m|gva|hu |auj|ouq|az |h d|ya |uek|ci |nh |u d|ou |sou|jso|gjs|din|awz|enj| do|h s|eve|sev|z r|nq |sin|nhy|g g|g b|liz|kgy|ekg|sen|eix|wng|lij|ngq|bin|i d|ghc| ha|bae|hix|h y|j c|ghg|i b|ouh|en |n d|h f|j s|z v|j y|law|hci|anh|inz|q y|nei|anj|ozc|ez |enh|q s|aiq|uen|zsi|zda|hye|ujc|e c|siz|eiz|anz|g y|i g|q n|bie| ne| ae|giz|u c|hgy|g d|gda|ngd|cou| la|z l|auy|ai |in |iuz|zdi|jhu|ujh|yuz| du|j m| fu|cuz|eiq|g c|gzd| co|uyu|coz|zbi|biu| dw|i s|i n|aw |dun|yun|izy|daw| he|nho| ho|enq|x l|cie|q b|cij|uzl|x d|iuj|awj| ya|eij|dei|nde|sae|izc|wnq|wnh|sei|h b|aih|gzs|bwn|a d|u g|ngg|jca|e b|ran| ra|hcu| me|iet|van| bu|guh|hen|si |wnj| ve|u b|azl|inj|gak|gan|ozg|siu|yaw|i m",kin:"ra | ku|se | mu|a k|ntu|tu |nga|umu|ye | um|unt|mun|e n| gu|we |ira|a n| n |wa |ere|mu |ko |gom|a b|e a| ab|li |e k|mba|a a|e b|aba|ga |e u|ba |omb|o k| ba|a u|ose|u b|o a| cy|ash|eng| ag|kwi| bu|za |gih|ren|ndi| ub|ang|yo |aka|gu |igi| ib|a g|a m| nt|uli|o b|ama|ihu|e i|nta| ak|ago|ro |ora| ka|ugu|hug|di |iye|ban| am|cya|ku |ta | bw|and|sha|re | ig|gan|ubu|na | kw|obo| by| bi|a i|yan|ka |sho|kub|era|ese| we|kan|aga|hob|bor|ana|byo|ura|uru|ibi|rwa|wes|u w|no |uko|i m|mo |u a|ure|ili|uba|o n|uha|uga|n a| im|ish|bwa|bwo|wiy|ali|ber|ze |ne |ush|are|o i|u m|ger|bur|ran| ki| no|ane|bye| y |ege|teg|guh| uk|n i|rag|i a|ya |u g|e m|anz|bo |abo|gar|wo |y i|ho |age|ind|o m|eke|a s|ara|zir|ite|kug|kim|aci| as|u n|ani|kir|mbe| gi|yos|kur|ugo|gir|e c|iza|aho|i b|tur|ata|o u| se|u u|zo |i i|aha|nge|mwe|iro|akw|any|eza|uki|imi|o y|ate|u k|iki|atu|bat| in|go |tan|n u|bos| bo| na|hak|iby| at|ihe|ung|ha |bul|kar|eye|eko|gek|nya|o g|shy|e y|awe|ngo|bit|mul|nzi|rer|bag|ge |imw|bah|cir|gac|bak|je |gez|imu|eze|tse|ets|mat| ru|irw|he | ni| ur| yi|ako|ngi| ng|i n|rez|ubi|gus|fit|afi|ugi|uka|amb|o c|utu|ufa|ruk|mug|bas|bis|uku|hin|e g|ige|amo|ing| af|yem|ni | ry|a r|gaz|te |erw|bwe|ubw|hwa|iko| al|ant|zi ",zul:"nge|oku| ng|a n|lo |ung|nga|la |le | no|elo|lun| um|e n|wa |we |gel|e u|ele|nel|thi|ke |nom|ezi|ma |ntu|oma|hi |o n|ngo|tu |nke|onk|o l|uth|ni |a u|lek|unt| wo|o e| lo|mun|umu|pha| ku|ang|ho |kwe|ulu| ne|won|une|lul|elu| un|a i|gok|kul|ath|hla|lok|khe|eni|tho|ela|zwe|akh|kel|a k|enz|ana|ban|aka|u u|ing|ule|elw|kho|uku|ala|lwa|gen| uk|wen|ama|na |e k|ko |gan|a e|he |zin|enk|o y| ez|kat| kw|lan|eth|het|o o| ok|okw|i n|nzi|aba|e a|hak|lel|lwe|eko|ane|ka |so |yo |ayo|o a|uhl|nku|nye| na|thu|mph|do |ben|ise|kut|ike|kun| is| im|hol|obu|fan|i k|e w|nhl|nok|ini|and|kuh|ukh|kuk| ak|e i|isi|aph|zi |ile|eki|ekh| ba|eka|the|a a| le| ye|kwa|e e|fut| fu|za |mal| ab|ebe|isa| em|o w|kub|mth|i w|ndl|emp|any|olo|ga | ko|nen|nis|alu|ith|eli|ndo|seb|nda| ya|i i|eke|vik|ake|uba|abe|ezw|yok|ba |ale|zo |olu|ume|ye |esi|kil|khu|yen|emi|nez|hlo|a l|ase|ula|kek|a o|iph|o u|no |azw|kan|mel|uny|ne |ufa|ahl|lin|hul|ant|und|sa |enh|kus|kuv|lak| in|o i|din|kom|amb|zis|ind|ola|uph|wez|eng|yez|phe|phi|mba|nya|han|kuf|nem|isw|ani|iyo| iy|fun| yo|uvi|i a|ene|izi| el|cal|i e|eze|ano|nay|hwe|kup|lal|uyo|ubu|kol|oko|ulo| la|e l|tha|nan|mfu|hon|nza|hin| ey|omp|da |bo |ilu|wak|lon|iso|kug|nka|ink|i l|sek|eku| ek|thw|gez",swe:"ar |er |tt |ch |och| oc|ing|\xE4tt|ill|r\xE4t|en | ti|til|f\xF6r|ll | r\xE4|nde| f\xF6|var|et |and| en|ell| ha|om |het|lle|lig|de |nin| de|ng | in| fr|as |ler| el|gen|nva|und|att|env|r h| i |r r|ska|fri| so|har|der| at|\xF6r |ter|all|t t| ut|den|ka |lla|som|av |sam|ghe|ga | sk| vi| av|ete|la |ens|t a| si|r s|iga|igh|tig| va|ig |a s| st|ion|ra |tti|a o| \xE4r|ten|ns |t e|na | be|han| un| an| sa|a f| la| gr| m\xE5|nge|n s|vis|lan|m\xE5 |ati|nat| \xE5t|an |nna| li| al|t f|ans|nsk|sni|gru|\xE4ll|tio|ad | me|isk|kli|s f|t i|st\xE4|t s|ri |med|sta|h r|lik|da |dig|ta |r o|run|on | re|lag|tta|\xE4r |kap|a i|a r|\xE4nd|erv|n e|kte|n f|rvi|nom|itt|id | mo|sky|r e|ver|\xE4ns|vil|gt |igt| na|tan|uta|dra|t o|ro |isn| fa|kal|ihe|rih|erk|r u|e s|per|l v|vid|one|rel|ber|ran|ot |mot|ndl|d f|ed |ika|m\xE4n|l s|bet|t b|dd |ydd|kyd|n o|s s|str|n m|tet|sin|r f| om|rna|int|r i|end|nad|l a|ap |ers|nda|t v|ent|rbe|arb| h\xE4|ets|h\xE4l|amh|ckl|gar|nga|r m|je |rje|arj|n i|s e|lin|r t|i s|r\xE4n| pe|ilk|t l|ern|p\xE5 | p\xE5|t\xE4l|d e|dom|ege|g e|tni|r a|lit|ras| s\xE5|lln|kil|ski|enn|i o|a d|er\xE4|n a|ara| ge|\xE4ro|a m| ar|t d|ilj|els|yck| ve|g o|fr\xE5|nas|tra|ess|del|m s|liv|l l|in |v s|g a|ast|e e|val|son|rso|e t|age|nd | eg|ial|cia|oci|soc|upp|igi|eli|g s|rkl|gad|ndr|nte|\xF6ra",lin:"na | na| ya|ya |a m| mo|to | ko|li |a b| li|o n| bo|i n|a y|a n|ki |a l|kok|la | ma|zal|i y|oki| pe|ngo|ali|pe |so |nso|oto|ons| ba|ala|mot|a k|eng|nyo|eko|o e|nge|yon| ny|kol|lik|iko|a e|o y|ang|ye | ye|oko|ma |o a|go | ek|ko |e m|aza|te |olo|sal|ama|si | az|mak|e b|lo | te|ta |isa|ako|amb|sen|ong|e n|ela|oyo|i k|ani| es|o m|ni |osa| to|ban|bat|a t|mba|ing|yo | oy|eli|a p|mbo|o p|mi | mi| nd|ba |i m|bok|i p|isi|mok|lis|nga|ge |nde|koz|bo |gel|ato|o t|mos|aka|oba|ese|lam|kop| ez|lon|den|omb|o b|ota|sa |ga |e a|e y|eza|kos|lin|esa|e e|kob|e k|sam|kot|kan|bot|ika|ngi|kam|ka | po|gom|oli|ope|yan|elo| lo|ata| el|bon|oka|po |bik|ate| bi|a s|i t|i b|omi|pes|wa | se|oza|lok|bom|oke|som|zwa|mis|i e|bek|iki| at|ola|ti |ozw|lib|o l|osu|oso|e t|nda|ase|ele|kel|omo|bos|su |usu|sus|bal|i l|ami|o o|bak| nz|pon|tel|mob|mu | ep|nza|asi|mbi|ati|kat|le |gi |ana|oti|ndi|tan|a o|wan|obe|kum|nya|mab|bis|nis|opo|tal|mat| ka|bol|and|aye|baz|u y|eta| ta|ne |ene|emb|sem|e l|gis|ben| ak| en|mal|obo|gob|ike|se |ibo|\u2019te| \u2019t|umb| so|mik|oku|be |mbe|bi |i a|eni|i o| mb|tey|san| et|abo|ebe|geb|eba|yeb|bu | as|ote|sik|ema|eya|ibe|mib|ai |pai|mwa|kes|da |may|boz|amu|a a|kom|mel|ona|ebi|ia |ina|tin| ti|bwa|sol|son",som:" ka|ka |ay |uu |an |yo |oo |aan|aha| wa|da | qo| in| u |sha| xa|a i|ada|iyo| iy|ma |ama| ah| la|qof|aa |hay|ga |a a|a w|ah | dh|a s| da|in |xaq| oo|a d|aad|yah|eey| le|isa|lee|u l|q u|aq | si|taa|eya|ast|la |of |iya|sa |y i|u x|sta|kas|xuu|uxu|wux| wu|iis|nuu|inu|ro | am| ma|a q|wax|dha|ala|kal|nay|f k|a k|le |ku | ku| sh|o i|a l|ta |maa|a u|dii|loo| lo|o a|ale|ara|ana|iga|o d| uu|ha |lo |o m|o x|doo|aro|kar|yaa|gu |si |ima|na | xo| fa|adk|do |a x|ad |aas| qa| so|a o| ba|lag| aa| he|dka|adi|soo|o k|aqa| is|ash|u d|had| ga|eed|san|u k|a m|iin|i k| ca|u s|n l|yad|rka|axa|elo|hel|aga|hii|o h|o q| ha|id |n k| mi|baa| xu|har|xor|aar|ax |mad|add|nta|mid|aal|waa|haa|ina|qaa|daa|agu|ark|o w|nka|u h|dad|ihi| bu| ho|naa|n a|ays|haq|a h|o l| gu|o s|aya|saa|lka| ee| sa|dda|ab |nim|quu|gga|ank|kii|rci|arc|n s|a g| ji|gel| ge|eli|ysa|a f|siy|int|laa|uuq|uqu|xuq| mu|i a|uur|mar|ra |iri|o u| ci|riy|ya |ado|alk|dal|ee |al |rri|ayn|asa| di|ooc|aam|ofk|oon|to |ayo|dar| xi|dhi|jee|a c| ay|yih|a j|ban|caa|lad|sho|d k|ida|uqd|agg|sag|ras|bar|ar | ko| ra|o f|gaa|gal|fal|u a| de| ya|o c|ii |xay|eel|aab|sig|aba|orr|hoo|u q|y d|ed |ho |sad|qda|h q|fka|n i|xag|n x|qay|lsh|uls|bul|u w|jin| do|raa| ug|ido|ood",hms:"ang|gd |ngd|ib | na|nan|ex | ji|eb |id |d n|b n|ud | li|nl |ad | le|jid|leb|l l| ga|ot | me|x n|anl|aot|mex|d g|b l|d d|ob |gs |ngs|jan| ne|ul | ni|nja| nj|lib|ong|nd | zh|jex| je|b j| sh|ngb| gh|gb | gu|gao|l n|han| ad|gan| da|t n| wu|il |x g|nb |b m| nh|she|is |l j|d l|nha|l g|d j|b g|el |end|wud|nex|gho|d s|d z|oul|hob|ub |nis| ch| ya|it |b y|eib| gi|s g|lie| yo| zi|oud|s j|d b|nx | de|es |d y| hu|uel|gue|ies|aob|you| ba|d m|chu|gia|dao|b d|s n|zib| go|zha|eit|hei|al |hud| do|nt |ol | fa|t g|hen|ut |gx |ngx|ab |fal|x j|b z|ian|d h|don|b w|t j|iad|nen| xi|gou|d c|b h|hao|x z|nib|anx|ant|gua| mi|s z|dan|ox |inl|hib|lil|uan|and| xa|b x| se|x m|uib|hui|d x|anb|enl| we|od |enb| du|at |ix |s m|bao| ho|hub| ng|zhi|jil|l s|yad|t m|t l|yan| ze| ju|heb|had|os |aos|t h|l d|nga| he|b a|xan|b s|sen|xin|dud|jul|d a|lou| lo|dei|d w| bi|b c| di|zhe|gt |ngt|x l|bad|x b| ja|hon|zho|blo| bl|d k| ma|deb|l z|wei| yi| qi|b b|x d|d p|eud| ge|x a|can| ca|t w|lol| si|hol|s w|aod|pao| pa|ren| re|x s|eut|pud| pu|aox|mis|gl |ngl|x w|zei|gon|enx|gha|s a|b f|l y|oub|eab|hea| to|did| ko|unb|ghu|t p|x c|geu|t s|x x|jao|ed |t c|l m|l h|jib|ax |l c|d f|nia| pi|eul|d r| no|min|l t|heu|ux |tou|ns |s y|iel|s l|hun",hnj:"it | zh| ni|ab |at |ang| sh|nit| do|uat|os |ax |ox |ol |nx |ob | nd|t d|zhi|nf |x n|if |uax| mu|d n|tab| ta| cu|mua|cua|as |ad |ef |uf |id |dos|gd |ngd|hit|ib |us |enx|f n|she|s d|t l|nb |ux |x z|ed |inf|b n|l n|t n|aob|b z| lo|ong|ix |dol| go|zhe|f g| ho| yi|t z|d z|b d| le|euf|d s|ut |yao| yo| zi|gb |ngb|ndo|enb|len| dr|zha|uab|dro|hox| ge|nen| ne|han| ja|das|x d|x c|x j|f z|shi|f h|il | da|oux|nda|s n|nd |s z|b g| ny|heu| de|gf |ngf| du|od |gox| na|uad| gu|inx|b c| ya|uef| xa| ji|ous| ua| hu|xan|hen|zhu|nil|jai|rou|t g|f d| la|enf|ged|ik | bu|nya|you|f y|lob|af |bua|uk |is |yin|out|of |l m|ud |hua| qi|ot |t s| ba|ait| kh|s s|nad| di|aib|x l|lol| id|dou|ex |aod|bao| re| ga|d d|b y|las|hed|b h|b s|f b|t y|jua| ju| dl|x s|hue|b l| xi|zif|dus|b b|x g|hif|x y|hai| nz|sha| li|x t| be|d j|und|hun|ren|d y|hef|xin| ib|b t|l d|aos|s l| ha|gai|nzh|gx |ngx| ao|s b|s x|el |gt |ngt|hik|aid|s t|x m|f l|f t| pi|aof|t r|eb | gh|s y|d l|gua| bi| za| fu|t h| zu|hou|deu|lb | lb|d g| mo|b k| bo|iao|ros|gon|eut|x h|al |uaf|hab|t t|k n|f x|hix|pin|yua| no|t b|ak | zo|s m| nb| we|d b|gha|f s|mol|euk|dax|l b|nof| ko|lou|guk|end|uas|t k|dis|dan|yol|uan|d t|x b|lan|t m| ch|jix|x x| hl|aox|zis|x i|et | ro",ilo:"ti |iti|an |nga|ga | ng| it| pa|en | ma| ka| a | ke| ti|ana|pan|ken|ang|a n|agi|a k|n a|gan|a m|a a|lin|ali|aya|man|int|teg|n t|i p|nte| na|awa|a p|na |kal|ng |dag|git|ega|sa |da |add|way|n i|n n|no |ysa|al |dda|n k|ada|aba|nag|nna|ngg|eys| me|a i|i a|mey|ann|pag|wen|i k|gal|gga| tu|enn| da| sa|nno| we|ung| ad|tun|mai| ba|l m| ag|ya |i s|i n|yan|nan|ata|nak| si|aka|kad|aan|kas|asa|wan|ami|aki|ay |li |i m|apa|yaw|a t|mak| an|i t|g k|a s|ina|eng|ala|ika|ama|ong|ara|ili|dad| aw|gpa|nai|et |yon|ani|aik|on |at |oma|sin|bal|ipa|n d|uma|g i|ket|ag |in |aen|n p|ram|sab|aga|nom|ino|lya|ily|syo|i b| ki|nia|agp|gim|kab|asi|kin|iam|ags|bab|oy |toy|n m|agt| ta|bag|sia|g a|gil|mil| um|o p|ngi|n w|i i|pad|pap|daa|iwa|naa|eg |ias|ed |nat|bae|o k|saa|san|pam|gsa|ta |kit|ma |dum|yto|tan|i e|t n|uka|t k|apu|lan|sta|sal| li|a b|ari|g n|den|mid|ad |o i|y a|ida|ar |aar|y n|dey| de| wa|a d|ak |bia|ao |tao|min|asy|mon|imo| gi|maa|sap|abi|i u|aib|kni|i l|gin|ged|o a| ar|kap|pul|eyt|abs|ibi| am|akn|i g|kip|isu|g t|bas|nay|ing|i d|kar|ban|iba|nib|t i|as |d n|y i|ura|a w|nal|aad|i w|lak|adu|kai|bsa|duk|edu| ed|may|agb|agk|tra|gge|sol|aso|agr|ngs|ian|ila|dde|edd|tal|aip|kua|umi|pay|sas|ita|pak|g d|ulo|inn|aw "},Cyrillic:{rus:" \u043F\u0440| \u0438 |\u0440\u0430\u0432| \u043D\u0430|\u043F\u0440\u0430|\u0441\u0442\u0432|\u0433\u043E |\u0435\u043D\u0438|\u0432\u043E |\u043E\u0432\u0435| \u043A\u0430|\u043D\u0430 |\u0442\u044C | \u043F\u043E|\u0438\u044F |\u043E \u043D| \u043E\u0431|\u0435\u0442 | \u0432 |\u0441\u0432\u043E| \u0441\u0432|\u0430\u0432\u043E|\u0430\u043D\u0438|\u043E\u0441\u0442|\u043E\u0433\u043E|\u044B\u0439 |\u0430\u0436\u0434|\u043B\u043E\u0432|\u0442 \u043F| \u0438\u043C|\u043D\u0438\u044F| \u0447\u0435| \u0441\u043E|\u0435\u043B\u043E|\u0438\u043C\u0435| \u043D\u0435|\u043B\u044C\u043D|\u043B\u0438 |\u0447\u0435\u043B|\u043A\u0430\u0436|\u0435\u0441\u0442|\u0432\u0435\u043A|\u0430\u0442\u044C|\u043E\u0432\u0430|\u0438\u043B\u0438| \u0440\u0430|\u0435\u043A |\u0439 \u0447|\u0434\u044B\u0439|\u0436\u0434\u044B| \u0434\u043E|\u0438\u0435 |\u0435\u0435\u0442|\u043C\u0435\u0435|\u043D\u043E | \u0438\u043B|\u0438\u0438 |\u0441\u044F |\u0435\u0433\u043E|\u043E\u0431\u043E|\u0438 \u043F|\u043D\u0438\u0435|\u043A \u0438| \u0431\u044B|\u0438 \u0441|\u0438 \u0438|\u043C\u0438 |\u0431\u043E\u0434|\u0432\u043E\u0431|\u0432\u0430\u043D| \u0437\u0430|\u043E\u0439 |\u044B\u0445 |\u043E\u043C |\u043B\u0435\u043D|\u0430\u0446\u0438|\u0435\u043D\u043D|\u043E \u0441|\u043E \u043F|\u044C\u043D\u043E|\u0442\u0432\u0430|\u0442\u0432\u043E|\u043F\u0440\u0438|\u043D\u043E\u0433|\u0430\u043B\u044C|\u0430\u043A\u043E|\u0432\u0430 |\u0438 \u043D|\u0441\u0442\u0438|\u043D\u044B\u0445|\u0442\u043E |\u0431\u0440\u0430|\u043E\u043B\u0436|\u0434\u043E\u043B|\u0441\u0442\u043E|\u0438 \u0432|\u043D\u044B\u043C|\u043E\u0435 | \u0435\u0433|\u043D\u043E\u0432|\u0438\u0445 |\u0435\u043B\u044C|\u0442\u0435\u043B|\u0442\u0438 |\u043D\u043E\u0441|\u043D\u0435 |\u043F\u043E\u043B|\u0440\u0430\u0437| \u0432\u0441|\u0438 \u043E| \u043B\u0438|\u0438 \u0440|\u044B\u0442\u044C|\u0431\u044B\u0442|\u0432\u043B\u0435|\u0440\u0435\u0434|\u0438\u044E |\u0442\u043E\u0440| \u043E\u0441|\u044C\u0441\u044F|\u0442\u044C\u0441|\u043E\u0434\u0438|\u0449\u0435\u0441|\u044F \u0438|\u043A\u0430\u043A|\u043F\u0440\u043E|\u0436\u0435\u043D|\u044B\u043C |\u043F\u0440\u0435|\u0430 \u0441|\u0441\u043D\u043E|\u0435 \u0434|\u043D\u043D\u043E|\u043E \u0438|\u0438\u0439 | \u043A\u043E|\u043E \u0432| \u043D\u0438| \u0434\u0435|\u0441\u0442\u0443|\u043B\u0436\u043D|\u0441\u043E\u0432|\u0435 \u0432|\u043D\u043E\u043C|\u043E\u043B\u044C|\u0440\u0430\u043D|\u043E\u0436\u0435|\u0438\u0447\u0435|\u0435\u0439 |\u0430\u0441\u0442|\u043D\u043D\u044B| \u043E\u0442|\u0442\u0443\u043F|\u043C \u0438|\u043E\u0434\u043D|\u0437\u043E\u0432|\u0440\u0435\u0441| \u043C\u043E|\u043E\u0441\u0443|\u043B\u044F |\u043E\u0441\u043D|\u0430 \u043E|\u0432\u0435\u043D| \u0442\u043E|\u043E \u0431|\u0448\u0435\u043D|\u0442\u0432\u0435|\u043E\u0431\u0449|\u0430 \u0438|\u0435 \u043C|\u044C\u043D\u044B|\u043E\u0431\u0440|\u0432\u0435\u0440|\u0447\u0435\u043D|\u044F \u043D|\u0436\u043D\u043E|\u0447\u0435\u0441|\u0430\u043A |\u043B\u0438\u0447|\u043D\u0438\u0438|\u0435 \u0438|\u0432\u0441\u0435|\u0431\u0449\u0435|\u0432\u0430\u0442|\u0435\u0441\u043F|\u043C\u043E\u0436|\u0439 \u0438|\u043D\u043E\u0435|\u043E \u0434|\u0431\u0435\u0441| \u0432\u043E|\u044F \u0432|\u0434\u0443 | \u0441\u0442|\u0434\u043D\u043E|\u043E\u043D\u0430|\u043D\u0430\u0446|\u0434\u0435\u043D|\u0435\u0436\u0434|\u0445 \u0438| \u0431\u0435|\u0438 \u0434|\u043D\u044B |\u0434\u043E\u0441|\u0434\u043B\u044F| \u0434\u043B| \u0442\u0430|\u043B\u044C\u0441|\u0430\u0442\u0435|\u0446\u0438\u0438|\u044F \u043F|\u0443\u044E |\u0438\u0442\u0435|\u0435 \u043E|\u043D\u043E\u0439|\u043F\u043E\u0434|\u043E\u0442\u043E|\u0441\u0442\u0440|\u0441\u0442\u0430| \u043C\u0435|\u0435\u043B\u0438| \u0440\u0435|\u044F \u043A|\u0442\u043E\u044F|\u0430\u043C\u0438|\u0435\u043D |\u044C \u0432|\u044E \u0438|\u0430\u0437\u043E|\u0433\u043E\u0441|\u043C \u043F|\u044C \u043F|\u0442 \u0431|\u0436\u0435\u0442|\u0443\u0447\u0430|\u0441\u0443\u0434|\u044C\u0441\u0442|\u0434\u0441\u0442|\u0449\u0438\u0442|\u0430\u0449\u0438|\u0437\u0430\u0449|\u043A\u043E\u043D|\u043D\u0438\u044E|\u0430\u043C |\u043E\u0434\u0443|\u0435\u0440\u0435|\u0433\u0440\u0430|\u043F\u0435\u0447|\u043E \u043E|\u043E\u0440\u043E|\u043A\u043E\u0442|\u0438 \u043A|\u0442\u0440\u0430|\u043D\u0438\u043A|\u0443\u0449\u0435|\u0446\u0438\u0430|\u043E\u0446\u0438|\u0441\u043E\u0446|\u043D\u0430\u043B|\u0435\u0441\u043A|\u043E \u0440|\u043A\u043E\u0433|\u0434\u0440\u0443| \u0434\u0440|\u043D\u0438 |\u0430\u0432\u0430|\u043D\u0441\u0442|\u0435\u043C |\u0430\u0432\u043D|\u044B\u043C\u0438|\u0435\u0434\u0441|\u0434\u0438\u043D|\u0434\u043E\u0432| \u0433\u043E| \u0432\u044B|\u0432 \u043A|\u044B\u0435 |\u043E\u0431\u0435|\u043C\u0443 |\u044F \u0435|\u0441\u043B\u0443|\u0443\u0434\u0430|\u0442\u0430\u043A|\u043A\u043E\u0439|\u0442\u0443 |\u0438\u0442\u0443|\u0437\u0430\u043A|\u0445\u043E\u0434|\u0432\u043E\u043B|\u0440\u0430\u0431|\u043A\u0442\u043E|\u0438\u043A\u0442|\u0438\u0447\u043D|\u043D\u0438\u0447|\u043E\u0442 |\u0438\u043D\u0430| \u043A |\u0442\u0435\u0440|\u0440\u043E\u0434|\u043D\u0430\u0440",ukr:"\u043D\u0430 | \u043F\u0440|\u043F\u0440\u0430| \u0456 |\u0440\u0430\u0432| \u043D\u0430| \u043F\u043E|\u043D\u044F |\u043D\u043D\u044F| \u0437\u0430|\u043E\u0433\u043E|\u0442\u0438 |\u0432\u043E |\u0433\u043E | \u043A\u043E|\u0430\u0432\u043E| \u043C\u0430|\u043B\u044E\u0434|\u043E \u043D| \u043D\u0435| \u043B\u044E|\u044E\u0434\u0438|\u043E\u0436\u043D|\u043A\u043E\u0436|\u043B\u044C\u043D|\u0436\u043D\u0430|\u0434\u0438\u043D|\u0430\u0442\u0438|\u0430\u0454 |\u0438\u0445 |\u0438\u043D\u0430|\u043F\u043E\u0432|\u0441\u0432\u043E| \u0441\u0432|\u0430\u043D\u043D|\u0454 \u043F|\u043C\u0430\u0454|\u0430\u0431\u043E|\u0430 \u043B| \u0431\u0443|\u043D\u0435 |\u0435\u043D\u043D|\u0431\u043E | \u0430\u0431|\u0430 \u043C|\u043E\u0432\u0438|\u043D\u0456 | \u0432\u0438| \u043E\u0441|\u0430\u0446\u0456|\u0432\u0438\u043D| \u0442\u0430|\u0431\u0435\u0437|\u043E\u0431\u043E| \u0432\u0456| \u044F\u043A|\u0435\u0440\u0435| \u0434\u043E|\u0456 \u043F|\u0443\u0432\u0430|\u043E \u043F|\u0430\u043B\u044C|\u043D\u0438\u0445|\u043E\u043C |\u043C\u0438 |\u0456\u043B\u044C|\u043D\u043E\u0433|\u0442\u0430 |\u0438\u0439 |\u043F\u0440\u0438|\u043E\u044E |\u0442\u044C |\u0441\u0442\u0430| \u043E\u0431|\u0432\u0430\u043D|\u0438\u043D\u043D|\u0442\u0456 |\u043E\u0441\u0442| \u0443 |\u0441\u044F |\u0432\u0430\u0442|\u0431\u0443\u0442|\u0438\u0441\u0442| \u043C\u043E|\u0435\u0437\u043F|\u0443\u0442\u0438|\u043D\u043E\u0432|\u043F\u0435\u0440|\u0456\u0457 |\u0438 \u043F|\u0431\u043E\u0434|\u0432\u043E\u0431|\u0441\u0442\u0432| \u0432 |\u043E \u0432|\u0432\u0456\u0434| \u0431\u0435|\u0430\u043A\u043E|\u043F\u0456\u0434|\u0442\u0438\u0441|\u043A\u043E\u043D|\u043D\u043E |\u0432\u0430 |\u043D\u043D\u0456|\u0456 \u0441|\u0430 \u043F|\u0441\u0442\u0456| \u0441\u043F|\u043D\u0438\u0439|\u0434\u0443 |\u044C\u043D\u043E|\u043E\u043D\u0430| \u0456\u043D|\u0434\u043D\u043E|\u043D\u0438\u043C|\u0456\u0439 |\u0430 \u0437|\u043D\u0443 |\u043C\u043E\u0436|\u0457\u0457 | \u0457\u0457|\u043B\u044F |\u0441\u043E\u0431|\u043C\u0443 |\u043E\u0457 |\u044F\u043A\u043E| \u043F\u0435| \u0440\u0430|\u0456\u0434 | \u0434\u0435|\u0456 \u0432|\u0438 \u0456|\u0447\u0438\u043D|\u0432\u043D\u043E|\u043E\u043C\u0443|\u043D\u043E\u043C|\u0443 \u043F|\u0456 \u043D|\u0430 \u0441| \u0441\u0443|\u0430 \u043E|\u043D\u0435\u043D|\u0438\u0441\u044F|\u043E\u0432\u043E|\u043D\u0430\u043D|\u043E\u0434\u043D|\u0443 \u0432|\u0456 \u0434|\u0430\u0432\u0430|\u0456\u0434\u043D|\u0440\u0456\u0432| \u0440\u0456|\u0456 \u0440|\u0438\u043C\u0438|\u0432\u0456\u043B|\u0438\u043C |\u0446\u0456\u0457|\u043E \u0434|\u0430 \u0432|\u0441\u0442\u0443|\u043E\u0434\u0443|\u0431\u0443\u0434|\u043E\u0432\u0430| \u043F\u0456| \u043D\u0456|\u044F \u043D|\u0435 \u043F|\u043D\u0430\u0446|\u0438 \u0441|\u043D\u043D\u0430| \u043E\u0434| \u0440\u043E|\u043D\u043E\u0441|\u044C\u043D\u0438|\u044E\u0442\u044C|\u0438 \u0437|\u043A\u0438 |\u0456 \u0437|\u0430 \u0431|\u0441\u043F\u0440|\u0447\u0435\u043D|\u0436\u0435 |\u043E\u0436\u0435|\u0435 \u043C|\u043E\u0432\u043D|\u0440\u0438\u043C|\u0435 \u0431|\u0442\u043E |\u043D\u0456\u0445|\u043E\u0441\u043E|\u0443\u0434\u044C|\u0432\u0456 | \u0440\u0435| \u0441\u0442|\u0440\u0430\u0446|\u0434\u043E | \u0441\u043E|\u0440\u043E\u0437|\u043B\u0435\u043D|\u0432\u043D\u0438|\u0456\u0432\u043D|\u0440\u043E\u0434| \u0432\u0441|\u0441\u043F\u0456|\u043A\u043E\u0432|\u0437\u043F\u0435|\u0456\u0432 |\u0434\u043B\u044F| \u0434\u043B|\u0457 \u043E|\u0445\u0438\u0441|\u0430\u0445\u0438|\u0437\u0430\u0445|\u2010\u044F\u043A|\u044C\u2010\u044F|\u0434\u044C\u2010|\u044F \u0456|\u0442\u0430\u043A|\u0437\u043D\u0430|\u0437\u0430\u0431|\u0441\u0442\u044C|\u0442\u0443 |\u043D\u043E\u044E|\u0430 \u043D|\u0442\u043E\u0440|\u0441\u043D\u043E|\u043E \u0441|\u0436\u0435\u043D|\u0446\u0456\u0430|\u043E\u0446\u0456|\u0441\u043E\u0446|\u0456\u043D\u0448|\u0456 \u043C|\u043A\u043B\u0430|\u0438 \u0432|\u0442\u0435\u0440| \u0434\u0456|\u0456\u0441\u0442|\u043E\u0432\u0456|\u0443 \u0441|\u044F \u0432|\u0430\u0440\u043E|\u0441\u0456 |\u0432\u0456\u0442|\u0441\u0432\u0456|\u043E\u0441\u0432|\u0440\u043E\u0431|\u043F\u0456\u043B|\u0440\u0435\u0441|\u0437\u0430 |\u043F\u0435\u0447|\u0430\u0431\u0435|\u043A\u0443 |\u043B\u0438\u0432|\u0435\u0440\u0436|\u0434\u0435\u0440|\u0432 \u0456|\u0430\u0432\u043D|\u0442\u0430\u0432|\u0430\u0432 |\u0430\u043C\u0438|\u043A\u043E\u043C|\u0432\u043B\u0435|\u043E \u0431|\u044C \u043F| \u0449\u043E|\u0457\u0445 |\u0442\u0432\u043E|\u0445\u0442\u043E|\u0456\u0445\u0442|\u043A\u043E\u0433| \u043A\u0440|\u0430\u043D\u043E|\u0442\u0430\u043D|\u0456\u0430\u043B|\u043D\u0430\u043B|\u043D\u044C |\u0445 \u043F|\u0436\u043D\u043E|\u043B\u0435\u0436|\u0430\u043B\u0435|\u043F\u0440\u043E|\u0442\u0432\u0430|\u0440\u0430\u0442|\u043E \u043E|\u0445 \u0432|\u043D\u0430\u0440|\u043B\u044C\u0441|\u0446\u0456\u0439|\u043A\u043E\u0440|\u0447\u0430\u0441|\u0440\u0436\u0430|\u0457 \u0441|\u0438\u043D\u0443|\u0434\u0441\u0442|\u043E \u0437|\u0440\u0430\u0437|\u043C\u0456\u043D|\u0430 \u0440|\u0437\u0430\u043A",bos:" \u043F\u0440| \u0438 |\u0440\u0430\u0432|\u043D\u0430 |\u043C\u0430 |\u043F\u0440\u0430| \u043D\u0430|\u0438\u043C\u0430| \u0441\u0432|\u0430 \u0441|\u0434\u0430 |\u0430 \u043F|\u0432\u043E |\u0458\u0435 |\u043A\u043E |\u0430\u043A\u043E|\u043E \u0438| \u043F\u043E|\u0430\u0432\u043E|\u0435 \u0441|\u0430 \u0438|\u0442\u0438 | \u0438\u043C| \u0434\u0430| \u0443 |\u0441\u0432\u0430|\u043D\u043E | \u0437\u0430|\u043E \u043D|\u0432\u0430 |\u0438 \u043F|\u0438\u043B\u0438|\u0432\u0430\u043A|\u043B\u0438 | \u043A\u043E|\u043D\u0435 | \u0438\u043B|\u043A\u043E\u0458| \u043D\u0435| \u0434\u0440|\u043E\u0441\u0442| \u0441\u043B|\u045A\u0430 |\u0438\u043C |\u0438 \u0441|\u0443 \u0441|\u0438 \u0438|\u0430\u0432\u0430|\u0438\u0458\u0435|\u0430 \u0443| \u0431\u0438|\u0441\u0442\u0432|\u0441\u0435 |\u0432\u0430\u045A|\u0430 \u0434|\u043E\u043C |\u0458\u0435\u0434|\u0431\u043E\u0434|\u043E\u0431\u043E|\u043B\u043E\u0431|\u0441\u043B\u043E| \u0441\u0435| \u0440\u0430|\u0438\u0445 |\u0441\u0442\u0438|\u0430 \u043D|\u045A\u0435 | \u043E\u0431| \u0458\u0435|\u043F\u0440\u0438|\u0434\u0440\u0443|\u0443 \u0438|\u0458\u0443 |\u043E \u0434|\u0438\u0442\u0438|\u0432\u043E\u0458|\u0440\u0430\u0437|\u0430\u045A\u0435|\u043E\u0432\u0430|\u0434\u0458\u0435| \u043E\u0441|\u0435 \u0438|\u043B\u043E |\u0435 \u043F|\u0430\u045A\u0430|\u0443\u0458\u0435|\u0438 \u0434|\u0431\u0440\u0430|\u0442\u0440\u0435| \u0442\u0440| \u0441\u0443|\u0443 \u0437|\u0430 \u043A|\u043E\u0433 |\u0443 \u043F|\u043E\u0458\u0435|\u0446\u0438\u0458|\u0440\u0435\u0431|\u0430 \u043E|\u0430 \u0431| \u045A\u0435|\u0438 \u0443|\u043C\u0438\u0458|\u043D\u0438 |\u043D\u043E\u0441|\u0431\u0430 |\u0435\u0434\u043D|\u0441\u0432\u043E|\u045A\u0435\u0433| \u0438\u0437|\u043F\u0440\u043E|\u0435 \u0434|\u0436\u0430\u0432|\u0431\u0438\u0442| \u043D\u0438|\u0438 \u043E|\u0441\u0442\u0430|\u0430 \u0437|\u0430\u0432\u043D|\u0432\u0458\u0435| \u043A\u0430|\u0431\u0438\u043B|\u043E\u0432\u043E|\u0430 \u0458|\u0430\u0458\u0443|\u0438\u0441\u0442|\u0438 \u043D|\u043D\u0438\u0445|\u0458\u0435\u043B|\u0442\u0443 |\u0440\u0435\u0434|\u0433\u043E\u0432| \u043E\u0434|\u0435 \u043E|\u043E\u0458\u0438| \u0441\u043C|\u0458\u0430 |\u043E \u043A|\u0438\u043B\u043E|\u0430\u0446\u0438|\u0435 \u0443|\u043F\u0440\u0435|\u043E \u043F|\u0435\u0431\u0430|\u0443 \u043E|\u0441\u0443 |\u0432\u0438\u043C|\u0438\u0447\u043D| \u0441\u0430| \u0434\u0458|\u0430 \u0442|\u0438\u0458\u0430|\u0448\u0442\u0438|\u0447\u043D\u043E|\u0440\u0436\u0430|\u0434\u0440\u0436|\u0441\u0442\u0443|\u0434\u043D\u0430|\u043E\u0434\u043D|\u0435\u043D\u0438|\u0437\u0430 |\u0438\u0432\u0430|\u043D\u043E\u043C|\u0435\u043C |\u0434\u0443 |\u0440\u0430\u043D|\u0432\u043D\u043E|\u0441\u043C\u0438|\u0458\u0435\u0440|\u0435 \u0431|\u0435 \u043D|\u0434\u0435 |\u043F\u043E\u0441|\u043C \u0438| \u0434\u043E|\u0443 \u0434|\u043D\u0430\u043A|\u0430 \u0440|\u043E\u0431\u0440| \u043C\u043E|\u043D\u0438\u043C|\u0435\u0433\u043E| \u043A\u0440|\u0442\u0438\u0442|\u043A\u0440\u0438|\u0432\u0435 |\u0430\u043D |\u0438\u043A\u043E|\u043D\u0438\u043A|\u043D\u0443 |\u0438 \u043C|\u043D\u043E\u0433|\u0435\u043D\u043E|\u0441\u043D\u043E|\u0435 \u043A|\u0442\u0443\u043F|\u0440\u0443\u0433|\u043A\u0430 |\u043E\u0434\u0430|\u0440\u0438\u0432|\u0432\u043E\u0459|\u0430\u043B\u043D|\u043C \u0441|\u0438\u0442\u0443|\u0430\u0448\u0442|\u0437\u0430\u0448|\u0430\u043D\u0438|\u0441\u0430\u043C| \u0441\u0442|\u0430\u043A\u0432|\u043E\u0432\u0438|\u043E\u0441\u043D|\u0440\u043E\u0434|\u0430\u0440\u043E| \u043C\u0438|\u0458\u0438 |\u0442\u0432\u0430|\u0434\u043D\u043E|\u043D\u0441\u0442|\u0430\u043A |\u0438\u0442\u0435|\u0459\u0443 |\u0432\u0438\u0447|\u0440\u0430\u0434|\u0443 \u043D|\u0443 \u043C| \u0442\u0430|\u0434\u0441\u0442|\u0442\u0438\u0432|\u043D\u0430\u0446|\u0440\u0438\u043C|\u043A\u043E\u043D|\u043A\u0443 |\u045A\u0443 |\u043E\u0434\u0443|\u0436\u0438\u0432|\u0430\u043C\u043E|\u0442\u0432\u043E|\u0442\u0435\u0459|\u043F\u043E\u0434|\u0435\u0452\u0443|\u0433 \u043F|\u043D\u043E\u0432|\u0438\u043D\u0430|\u043D\u0430\u0440| \u0432\u0458|\u0438 \u0431|\u043E\u0458 | \u043E\u0432|\u0430\u0432\u0435|\u0432\u0443 |\u0430\u043D\u0441|\u043E\u0458\u0430|\u0437\u043E\u0432|\u0430\u0437\u043E|\u0443\u0434\u0435|\u0431\u0443\u0434| \u0431\u0443|\u0435 \u0442|\u0438 \u0432|\u0435\u045A\u0430|\u0435\u0434\u0438|\u043D\u0438\u0446|\u043D\u0430\u043F|\u043C\u0458\u0435| \u0438\u0441|\u0441\u043B\u0443|\u0435\u0434\u0441|\u043E \u043E|\u0437\u0430\u043A|\u0438 \u043A|\u043C \u043F|\u0442\u043D\u043E|\u0438\u0432\u043E|\u0435\u0440\u0435|\u043D\u0438\u0447|\u043A\u0430\u043A|\u0430\u0434\u0430|\u0432\u043D\u0438|\u0443\u0433\u0438| \u0440\u043E|\u043C\u043E\u0432|\u0432\u0435\u043D|\u043E \u0441|\u0442\u043E |\u0442\u0435 | \u0432\u0440| \u0431\u0435|\u0430\u0440\u0430|\u043A\u043B\u0430| \u0431\u0440|\u0443 \u0431|\u0443 \u0443|\u0438 \u0442|\u043E\u043D\u0430| \u043E\u043D|\u0430\u0432\u0438|\u0458\u0430\u043B|\u0434\u043D\u0438| \u0441\u043A",srp:" \u043F\u0440| \u0438 |\u0440\u0430\u0432|\u043D\u0430 |\u043F\u0440\u0430| \u043D\u0430|\u043C\u0430 | \u0441\u0432|\u0438\u043C\u0430|\u0434\u0430 |\u0430 \u043F|\u0432\u043E |\u043A\u043E |\u0442\u0438 |\u0430\u0432\u043E| \u043F\u043E|\u0430 \u0438|\u0430\u043A\u043E|\u0430 \u0441| \u0437\u0430| \u0443 |\u043E \u0438| \u0438\u043C|\u0438 \u043F|\u0432\u0430 |\u0441\u0432\u0430|\u0432\u0430\u043A| \u0434\u0430|\u043E \u043D|\u0435 \u0441|\u043E\u0441\u0442| \u043A\u043E|\u045A\u0430 |\u043B\u0438 |\u0438\u043B\u0438|\u043D\u0435 |\u043E\u043C | \u043D\u0435|\u0430 \u043D| \u0441\u043B| \u0438\u043B|\u0458\u0435 | \u0434\u0440|\u0438 \u0441|\u043D\u043E |\u043A\u043E\u0458|\u0443 \u0441|\u0430\u0432\u0430| \u0440\u0430|\u043E\u0433 |\u0441\u043B\u043E|\u0458\u0443 |\u0438\u043C |\u0441\u0442\u0438|\u0431\u043E\u0434|\u043E\u0431\u043E|\u043B\u043E\u0431|\u0438\u0442\u0438|\u0430 \u043E|\u0441\u0442\u0432|\u0438 \u0443|\u0430 \u0434|\u043D\u0438 |\u0458\u0435\u0434|\u0443 \u043F|\u043F\u0440\u0438|\u0435\u0434\u043D| \u0431\u0438|\u0438 \u0438|\u0430 \u043A|\u043E \u0434|\u0441\u0442\u0430|\u0438\u0445 |\u0434\u0440\u0443|\u0430 \u0443| \u0458\u0435|\u0430\u045A\u0430| \u043E\u0441| \u043D\u0438|\u043D\u043E\u0441|\u043F\u0440\u043E|\u0430\u0458\u0443|\u0438 \u043E| \u0434\u0435| \u0441\u0443|\u0443 \u0438|\u0441\u0435 |\u045A\u0435 |\u0458\u0430 |\u043E\u0432\u0430|\u0438 \u0434|\u0446\u0438\u0458| \u043E\u0431|\u0443\u0458\u0435|\u0440\u0435\u0434|\u0436\u0430\u0432|\u0435 \u0438|\u0435 \u043F|\u0430 \u0458|\u0434\u043D\u0430| \u0441\u0435| \u043E\u0434|\u0432\u0435 | \u043A\u0430|\u0435\u043D\u0438|\u0440\u0436\u0430|\u0434\u0440\u0436|\u0430 \u0437|\u0430\u0432\u043D|\u0435\u045A\u0430|\u0430\u0446\u0438|\u0432\u043E\u0458|\u043E\u0432\u043E|\u0443 \u0443|\u043C \u0438|\u043E\u0458\u0430|\u0432\u0430\u045A| \u0438\u0437|\u0438\u0458\u0430|\u0443 \u0437|\u0430\u045A\u0435|\u0440\u0430\u043D|\u0435 \u043E|\u0440\u043E\u0434|\u0438 \u043D|\u0435 \u0431|\u0440\u0430\u0437|\u0437\u0430 | \u045A\u0435|\u0433\u043E\u0432|\u0438\u0447\u043D| \u0441\u0442|\u043D\u043E\u0432|\u0441\u043D\u043E|\u043E\u0441\u043D|\u0434\u0443 |\u043F\u0440\u0435| \u0442\u0440|\u0441\u0443 |\u0432\u0443 |\u043E\u0434\u043D|\u0430 \u0431|\u0441\u0432\u043E|\u045A\u0435\u0433|\u043D\u0438\u043C|\u043D\u0438\u0445|\u0442\u0443 |\u0442\u0438\u0442|\u0448\u0442\u0438|\u043A\u0443 |\u043D\u043E\u043C|\u0431\u0438\u0442|\u0435 \u0434|\u043C\u0435 |\u0438\u043A\u043E|\u0447\u043D\u043E|\u043E\u0458\u0438|\u043B\u043E |\u0432\u043D\u043E|\u043D\u0438\u043A|\u0438\u043A\u0430|\u0431\u0435\u0437|\u0430\u0440\u0430|\u0434\u0435 |\u0443 \u043E|\u0432\u0438\u043C|\u043D\u0430\u043A| \u0441\u0430|\u0440\u0438\u0432|\u0430\u0432\u0435|\u0430\u043D |\u0432\u043E\u0459| \u043A\u0440|\u043E \u043F|\u0441\u043C\u0435|\u0435 \u043A|\u043D\u043E\u0433|\u0458\u0438 | \u043E\u0432|\u0435 \u0443|\u0442\u0432\u0430|\u0431\u0440\u0430|\u0440\u0443\u0433|\u0440\u0435\u0431|\u0442\u0440\u0435|\u0443 \u0434|\u043E\u0434\u0430| \u043C\u043E| \u0432\u0440|\u0430\u0432\u0459|\u0443 \u043D|\u0435\u0433\u043E|\u0434\u0435\u043B|\u043C \u0441|\u043A\u0440\u0438|\u043E \u043A|\u0430\u0448\u0442|\u0437\u0430\u0448|\u045A\u0443 | \u0441\u043C|\u0430\u043D\u0438| \u043B\u0438|\u0434\u043D\u043E|\u0435\u0452\u0443|\u0430\u043B\u043D|\u043B\u0430 |\u0430\u043A\u0432|\u043E\u0458 |\u043A\u043E\u043C|\u0441\u0442\u0443|\u0443\u0433\u0438|\u0430\u0432\u0438|\u0430 \u0440|\u043A\u0430 |\u0440\u0430\u0434|\u043E\u0434\u0438|\u0432\u0438\u0447|\u0442\u0430\u0432|\u0438\u0442\u0443|\u0443\u0434\u0435|\u0431\u0443\u0434| \u0431\u0443|\u043F\u043E\u0442|\u043E\u0434\u0443|\u0436\u0438\u0432|\u0435\u0440\u0435|\u0442\u0432\u043E|\u0438\u043B\u043E|\u0431\u0438\u043B|\u0430\u0440\u043E|\u0435 \u043D|\u043E\u0432\u0438|\u043F\u043E\u0440|\u0435\u043D\u043E|\u0448\u0442\u0432|\u043D\u0430\u0446|\u043E\u0432\u0435|\u043C \u043F|\u0442\u0443\u043F|\u043F\u043E\u0441|\u0440\u0435\u043C|\u0434\u043D\u0438|\u0431\u0430 |\u043D\u0441\u0442|\u0430 \u0442|\u043E\u0458\u0443|\u0430\u0441\u0442|\u0438\u0432\u0430|\u0435 \u043C|\u0432\u0440\u0435|\u0432\u0459\u0430|\u043D\u0443 |\u0431\u0435\u0452|\u0438\u0441\u0442|\u0435\u043D |\u0442\u0435 |\u0434\u0441\u0442|\u0440\u043E\u0442|\u0437\u0430\u043A|\u0430\u043E |\u043A\u0430\u043E|\u0438 \u043A|\u0458\u0443\u045B|\u043E \u0441|\u0441\u0442 |\u0441\u0430\u043C|\u043C \u043D|\u0442\u0435\u0440|\u043D\u0430\u0440| \u043C\u0435|\u0438 \u043C|\u043A\u043E\u043B|\u0435 \u0440|\u0443\u0448\u0442|\u0440\u0443\u0448|\u0432\u0435\u0440|\u043A\u0430\u043A| \u0431\u0435|\u0438 \u0431|\u043A\u043B\u0430|\u0430\u0434\u0430|\u0435\u0431\u0430|\u0435\u043D\u0430|\u043E\u043D\u0430| \u043E\u043D|\u0442\u0432\u0443|\u0430\u043D\u0441| \u0434\u043E|\u0440\u0430\u043A|\u0441\u043B\u0443|\u0438 \u0432|\u043D\u0438\u0446|\u0443 \u043A|\u043C\u0435\u043D|\u0432\u0440\u0448|\u0435\u043C\u0435|\u0435\u0434\u0441|\u0438\u0432\u0438|\u043E \u043E|\u0458\u0430\u0432",uzn:"\u0430\u043D |\u043B\u0430\u0440|\u0433\u0430 |\u0438\u0440 | \u0431\u0438|\u0430\u0440 | \u0432\u0430|\u0434\u0430 |\u0438\u0433\u0430| \u04B3\u0443|\u0432\u0430 |\u0431\u0438\u0440|\u0443\u049B\u0443|\u049B\u0443\u049B|\u04B3\u0443\u049B| \u04B3\u0430|\u0440 \u0431|\u0433\u0430\u043D|\u0438\u0448 |\u0438\u0434\u0430| \u0442\u0430|\u0430 \u044D|\u0438\u043D\u0438|\u0430\u0434\u0438|\u043D\u0433 |\u0434\u0438\u0440|\u0438\u0448\u0438|\u043B\u0438\u043A|\u043B\u0438\u0448|\u0438\u0439 |\u0438\u043B\u0438|\u0430\u0440\u0438|\u0443\u049B\u0438|\u04B3\u0430\u0440|\u043B\u0430\u043D|\u0438\u043D\u0433|\u0448\u0438 |\u0434\u0430\u043D|\u043D\u0438\u043D|\u0438\u043D\u0441|\u043A\u0438\u043D|\u0441\u043E\u043D|\u043D\u0441\u043E| \u0438\u043D| \u043C\u0443|\u049B\u0438\u0433| \u043C\u0430|\u043E\u043D |\u0440 \u0438| \u0431\u045E|\u044D\u0433\u0430| \u044D\u0433| \u045E\u0437|\u043D\u0438 |\u0431\u045E\u043B|\u0433\u0430\u0434|\u0438 \u0431|\u043A\u0438 |\u0438\u043B\u0430|\u0451\u043A\u0438| \u0451\u043A|\u0430 \u0431|\u043D \u0431|\u0438\u043D |\u0440 \u04B3|\u0430\u043B\u0430|\u044D\u0440\u043A| \u044D\u0440|\u043B\u0433\u0430| \u049B\u0430|\u0440\u043A\u0438|\u0448 \u04B3|\u0438 \u04B3|\u043D \u043C| \u0431\u043E| \u0431\u0430|\u0438\u043A |\u0430\u0440\u0430|\u0438\u0433\u0438|\u043B\u0438\u0433|\u0440\u0438 |\u049B\u0438\u043B|\u0430 \u0442|\u0431\u0438\u043B| \u044D\u0442|\u043D\u0438\u0448|\u043D\u043B\u0438|\u043A\u043B\u0430|\u0438 \u0432|\u0431\u043E\u0448|\u044D\u0442\u0438|\u0430\u043D\u0438|\u0438\u043C |\u0438 \u043C|\u043E\u043B\u0438|\u049B\u043B\u0430|\u0430 \u04B3|\u043B\u0430\u0448|\u0430\u0442\u043B|\u0442\u0438\u043B|\u0430 \u049B| \u043E\u043B|\u043E\u0441\u0438|\u043C\u0430\u0441|\u049B\u0430\u0440|\u0438\u043D\u043B|\u043B\u0430\u0442| \u049B\u0438|\u0442\u0430\u044A|\u04B3\u0430\u043C|\u0433\u0438 |\u0438\u0431 |\u043C\u043B\u0430|\u045E\u0437 |\u043D \u044D|\u043C\u0443\u043C| \u0434\u0430| \u0431\u0443|\u0430\u0442 |\u0448 \u0432|\u0443\u043D |\u0430\u0442\u0438|\u043C\u043A\u0438|\u0443\u043C\u043A|\u0442\u043B\u0430|\u0438\u0440\u043E|\u045E\u043B\u0438|\u0431\u0430\u0440|\u0438\u0440\u0438|\u0440\u0438\u0448|\u0438\u044F\u0442|\u0430\u043B\u0438| \u0431\u0435| \u049B\u043E|\u0430 \u0448|\u0430\u0440\u043E| \u043A\u0435|\u0438 \u0442|\u0440\u043B\u0430| \u0442\u0435|\u0447\u0430 |\u0440\u0447\u0430|\u0430\u0440\u0447|\u0430 \u045E| \u0448\u0443|\u0442\u0438\u0448|\u043D \u04B3|\u0442\u0433\u0430| \u0441\u0430|\u0430\u0441\u0438| \u0445\u0430|\u0440\u0430\u043A|\u043B\u0438\u043D|\u043E\u043B\u0430|\u0438\u043C\u043E|\u0448\u049B\u0430|\u043B\u0438 | \u0442\u0443|\u0430\u043C\u043B|\u043B\u043B\u0430|\u0441\u0438\u0434|\u043D \u045E| \u0430\u0441|\u043D\u0438\u0434|\u0430 \u0438| \u043A\u0438|\u043D \u0442|\u043D\u0434\u0430|\u043A \u0431|\u0435\u0440\u0430|\u043E\u0448\u049B|\u0441\u0438\u0437|\u043E\u0440 |\u0430 \u043C|\u0440 \u0432|\u0435\u043D\u0433|\u0442\u0435\u043D|\u043C\u0430\u0442|\u043C\u0434\u0430|\u0430\u043C\u0434|\u043B\u0438\u043C|\u0439 \u0442|\u044F\u0442 |\u0438 \u0430|\u0438\u043D\u043E|\u0438\u043B\u0433| \u0442\u043E|\u0442\u043D\u0438|\u0430\u043D\u0430|\u0430\u0441 |\u044D\u043C\u0430| \u044D\u043C|\u0430 \u0451| \u0448\u0430|\u0430\u0448 |\u0430 \u0430|\u0442\u0430\u0440|\u043A\u0430\u0442|\u0430\u043A\u0430|\u0430\u043A | \u0434\u0435|\u0430\u0437\u0430|\u0438\u043B\u043B|\u0441\u0438\u0439| \u0441\u0438| \u0441\u043E|\u0443\u049B\u043B|\u043D \u049B|\u043E\u0434\u0430|\u044A\u043B\u0438|\u0430\u044A\u043B|\u043D\u0438\u043A|\u0430\u0434\u0430| \u043D\u0438|\u0442\u0434\u0430|\u0433\u0438\u043D|\u0443\u043D\u0438|\u0441\u0438\u0442|\u0430\u0439 |\u049B\u043E\u043D|\u043D \u043E| \u0436\u0430|\u043A\u0438\u043C|\u0435\u0447 |\u04B3\u0435\u0447| \u04B3\u0435|\u045E\u0437\u0438|\u043B\u0430\u043A|\u043A\u0435\u0440|\u0438\u043A\u043B|\u043B\u043B\u0438|\u0443\u0440 |\u0437\u0430\u0440|\u0448\u043B\u0430|\u0440\u0438\u0433|\u0438\u0440\u043B|\u0434\u0430\u043C|\u043A\u043E\u04B3|\u0438\u043A\u043E|\u0430 \u0434|\u0430\u043C |\u043D \u0432|\u0440\u0442\u0438|\u0442\u0438\u0431|\u0442\u0430\u043B| \u0438\u0448|\u0447\u0443\u043D|\u0443\u0447\u0443| \u0443\u0447|\u0441\u043B\u0430|\u0430 \u0443|\u0440\u0438\u043D|\u0441\u043E\u0441|\u0430\u0441\u043E| \u0443\u043D|\u043D\u0430 | \u043A\u0430|\u043C\u0443\u04B3|\u0434\u0438\u0433|\u0447 \u043A|\u0430\u0441\u043B|\u043B\u043C\u0430|\u0440\u0430 |\u0431\u0443 |\u0445\u0430\u043B|\u045E\u043B\u0433|\u0438 \u043A|\u0435\u043A\u043B|\u0440 \u0434|\u049B\u0430\u0442|\u0430\u0433\u0430|\u0438 \u049B|\u043E\u0438\u0439|\u043C\u0438\u043B| \u043C\u0438|\u049B\u0430 |\u0438 \u0441|\u0436\u0438\u043D| \u0436\u0438|\u0441\u0438\u043D|\u0440\u043E\u0440|\u0430 \u0432|\u043B\u0430\u0434|\u0430 \u043E|\u0442\u043B\u0438|\u043C\u0438\u044F|\u043D \u0438|\u0430\u0431 |\u0442\u0438\u0440|\u0437 \u043C|\u0434\u0430\u0432|\u0440\u0433\u0430|\u0430\u0433\u0438|\u0430 \u043A|\u043D\u043B\u0430|\u0430\u049B\u0442|\u0432\u0430\u049B|\u0430\u0440\u0442|\u0430\u0451\u0442|\u043B\u0430\u0431",azj:" \u0432\u04D9|\u0432\u04D9 |\u04D9\u0440 |\u0438\u0440 | \u04BB\u04D9| \u0431\u0438| \u04BB\u04AF| \u043E\u043B|\u04AF\u0433\u0443|\u04BB\u04AF\u0433|\u0433\u0443\u0433|\u043D\u0430 |\u0438\u043D |\u043B\u0430\u0440|\u04BB\u04D9\u0440|\u0434\u04D9 | \u0448\u04D9|\u0431\u0438\u0440|\u043B\u04D9\u0440|\u043B\u0438\u043A|\u043C\u0430\u043B|\u0440 \u0431|\u043B\u043C\u0430|\u0440 \u04BB| \u0442\u04D9|\u04D9\u0445\u0441|\u0448\u04D9\u0445|\u04D9\u043D |\u0434\u0438\u0440|\u0443\u0433\u0443|\u0443\u043D\u0430|\u0430\u043D |\u0430\u043B\u0438|\u0430 \u043C| \u043C\u0430|\u0438\u043A\u0434|\u0438\u043D\u0438|\u0440 \u0448|\u0434\u04D9\u043D|\u0430\u0440 |\u0438\u043B\u04D9|\u0433\u0443\u043D|\u0430\u0433 |\u0430\u0441\u044B| \u0458\u0430|\u043C\u04D9\u043A|\u0458\u04D9\u0442| \u043C\u04D9| \u043C\u04AF|\u043A\u0434\u0438|\u04D9\u0441\u0438|\u04D9\u043A |\u0438\u043B\u043C|\u043D\u0438\u043D|\u043D\u0434\u04D9|\u043E\u043B\u043C|\u04D9\u0442\u0438|\u04D9 \u0458|\u0441\u0438\u043D|\u0445\u0441 |\u043D\u0434\u0430|\u043B\u043C\u04D9|\u0458\u0458\u04D9|\u0438 \u0432| \u0433\u0430| \u0430\u0437|\u043E\u043B\u0443|\u0438\u0458\u0458|\u0458\u0430 |\u0438\u043D\u0434|\u0437\u0430\u0434|\u0433\u043B\u0430|\u04AF\u043D |\u043D\u0438 |\u043B\u04D9 |\u0442\u0438\u043D|\u043D \u043C|\u0430\u0437\u0430|\u0430\u0440\u044B|\u04D9\u0442 |\u043D \u0442|\u043C\u0430\u0433|\u043B\u0443\u043D|\u043B\u044B\u0433|\u04D9 \u0431|\u0443\u043D |\u043D\u0443\u043D|\u0433 \u0432|\u043D \u04BB|\u0434\u0430\u043D|\u044B\u043D | \u0435\u0442|\u0442\u043C\u04D9|\u04D9\u0440\u04D9| \u04E9\u0437|\u0434\u0430 |\u04D9 \u0432| \u043E\u043D|\u04D9 \u0430|\u044B\u043D\u0430|\u044B\u043D\u044B|\u0431\u0438\u043B|\u0430 \u0431|\u0441\u044B |\u0438\u043B |\u04D9\u043C\u0438|\u0430\u0440\u0430|\u0441\u0438 | \u0434\u0438|\u04D9 \u043C|\u04D9\u0440\u0438|\u0440\u043B\u04D9| \u0432\u0430|\u04D9 \u04BB|\u0435\u0442\u043C|\u044B\u0493\u044B|\u0430\u043C\u0430|\u0434\u043B\u044B|\u0430\u0434\u043B|\u0440\u0438\u043D|\u0431\u04D9\u0440|\u0440\u044B\u043D|\u043D \u0438|\u043C\u04AF\u0434|\u043D\u044B\u043D| \u04BB\u0435|\u043C\u0430\u0441|\u0438\u043A |\u043D \u0430|\u0434\u0438\u043B|\u0430\u043B\u044B|\u0438\u0440\u043B|\u04D9\u043B\u04D9|\u04AF\u0434\u0430|\u0441\u044B\u043D|\u044B\u043D\u0434|\u0445\u0441\u0438|\u043B\u0438 |\u04D9 \u0434|\u043D\u04D9 | \u0431\u04D9|\u04D9\u0458\u0430| \u0438\u043D|\u04D9 \u0438|\u043B\u04D9\u0442| \u0441\u04D9|\u043D\u044B | \u0438\u0448|\u0430\u043D\u044B|\u0435\u0447 |\u04BB\u0435\u0447|\u0433 \u04BB|\u0435\u0458\u043D|\u04D9 \u0435|\u0434\u044B\u0440| \u0434\u0430|\u0430\u0441\u0438|\u0440\u044B |\u0438\u0448 |\u0438\u0444\u0430|\u043B\u044B\u0493|\u0438 \u0441|\u0444\u0438\u04D9|\u0430\u0444\u0438|\u0434\u0430\u0444| \u0435\u0434|\u043C\u04D9\u0437|\u0443 \u0432|\u043A\u0438\u043B| \u04BB\u0430|\u043E\u043B\u0430|\u043D \u0432|\u04D9\u043D\u0438|\u044B\u0440 |\u0443\u0433 |\u0443\u043D\u043C| \u0431\u0443| \u0430\u0441|\u0441\u0438\u0430|\u043E\u0441\u0438|\u0441\u043E\u0441|\u0438\u043B\u0438|\u044B\u0434\u044B|\u043B\u044B\u0434|\u043D\u043C\u0430|\u044B\u0433 |\u0438\u043D\u04D9|\u04D9\u0440\u0430|\u0441\u0438\u043B|\u0445\u0438\u043B|\u0430\u0445\u0438|\u0434\u0430\u0445|\u0430\u0434\u04D9|\u043C\u0430\u043D|\u0430 \u04BB|\u04D9 \u043E|\u043E\u043D\u0443|\u0430 \u0433|\u04D9\u0437 | \u043A\u0438|\u0441\u0435\u0447| \u0441\u0435|\u044B \u04BB|\u043C\u0438\u043D|\u043B\u0430\u043D|\u04D9\u0434\u04D9|\u0431\u0443 |\u0440\u0430\u0433|\u043B\u044B |\u044B\u043B\u044B|\u0430\u043B |\u04D9 \u0433|\u0440 \u0432|\u043D\u043B\u0430|\u04BB\u0441\u0438|\u04D9\u04BB\u0441|\u0442\u04D9\u04BB|\u04E9\u0437 |\u0438\u0441\u0442| \u0438\u0441|\u043C\u04D9\u0441| \u04D9\u0441|\u0438\u043D\u0430|\u04D9 \u0442|\u04D9\u0442\u043B|\u0430 \u0432|\u0438\u04D9 |\u043D \u0431|\u0442\u04D9\u0440| \u0442\u0430| \u04B9\u04D9|\u0435\u0434\u0438|\u0430\u043B\u0430|\u043A\u0438\u043C|\u0433\u0443 |\u0438 \u0442|\u0443\u043B\u043C|\u043C\u04D9\u04BB|\u043D \u043E|\u0430\u0458\u0430|\u044B \u043E|\u0438\u0430\u043B| \u0441\u043E|\u0438\u043B\u043B|\u0441\u0438\u0458| \u0434\u04D9|\u0432\u0430\u0440|\u0438\u043D\u0441|\u043C\u0438 |\u0493\u044B |\u043D\u0438\u043A|\u0440 \u0438|\u0430\u0433\u043B|\u043A \u04BB|\u0442\u04D9\u043C|\u0442\u0430\u043C|\u0447\u04AF\u043D|\u04AF\u0447\u04AF| \u04AF\u0447|\u0493\u044B\u043D|\u0441\u0430\u0441|\u04D9\u0441\u0430|\u0437 \u04BB|\u04D9\u043C\u04D9|\u0437\u0430\u043C| \u0437\u0430|\u0441\u0442\u0438|\u0440\u04D9\u0444|\u043D \u0435|\u0440 \u0430|\u0438\u043B\u0434|\u04BB\u04D9\u043C|\u044B\u0433\u043B|\u0458\u0430\u043D|\u043C\u0430\u0458|\u043D \u04D9|\u043C\u04D9\u043D|\u043C\u0438\u043B| \u043C\u0438|\u04D9\u0433\u0438|\u0434\u0438\u043D|\u043D \u0434|\u0442\u04AF\u043D| \u0434\u04E9|\u043C\u0438\u0458|\u043A\u0430\u04BB|\u0438\u043A\u0430| \u043D\u0438|\u0444\u0430\u0434|\u0442\u0438\u0444|\u043B \u043E|\u0441\u04D9\u0440|\u0458\u043D\u0438| \u0435\u0458|\u0430\u043D\u0430|\u043B\u04D9\u043D|\u0430\u043C |\u0440\u0438\u043B|\u0430\u0458\u04D9|\u0430\u0448\u044B",koi:"\u043D\u044B |\u04E7\u043D | \u0431\u044B|\u0434\u0430 | \u043F\u0440|\u043B\u04E7\u043D|\u0440\u0430\u0432| \u043C\u043E|\u043F\u0440\u0430| \u0434\u0430|\u0431\u044B\u0434| \u0432\u0435|\u043E\u0440\u0442|\u043B\u04E7 |\u04E7\u0439 |\u043C\u043E\u0440|\u04E7\u043C |\u0430\u0432\u043E| \u043D\u0435|\u0432\u043E |\u044B\u0434 |\u044B\u0441 |\u043D\u04E7\u0439|\u044B\u043D |\u043C \u043F|\u0434 \u043C|\u044B\u043D\u044B|\u0442\u043D\u044B| \u0430\u0441|\u0442\u04E7\u043C|\u043B\u044C\u043D| \u044D\u043C|\u0432\u0435\u0440|\u0441\u044C |\u044C\u043D\u04E7|\u044D\u043C |\u043D \u044D|\u0442\u043B\u04E7| \u043A\u044B|\u0441\u04E7 | \u043F\u043E|\u0435\u0440\u043C|\u0441\u044C\u04E7|\u0440\u0442\u043B|\u0430\u043B\u044C| \u043A\u04E7|\u044D\u0437 | \u04E7\u0442|\u04E7 \u0432|\u0442\u043E |\u0435\u0442\u043E|\u043D\u0435\u0442|\u044B\u043B\u04E7| \u043A\u043E|\u0442\u0448\u04E7| \u043E\u0442| \u0438 |\u044B \u0441|\u0431\u044B |\u04E7 \u0431|\u0441\u0442\u0432|\u043A\u04E7\u0440| \u0432\u04E7|\u0448\u04E7\u043C|\u043A\u044B\u0442|\u0442\u0430 |\u043D\u0430 |\u0437 \u0432| \u0441\u0435| \u0434\u043E|\u0432\u043E\u043B|\u04E7\u0441 | \u0441\u044B|\u044B \u0430|\u043E\u043B\u0430|\u0440\u043C\u04E7|\u0430\u0441 |\u043E\u0437 | \u043E\u0437| \u0441\u0456|\u0430 \u0441|\u0442\u0432\u043E|\u0441 \u043E| \u0432\u044B|\u043B\u0456\u0441|\u04E7 \u043A|\u044B\u0442\u0448|\u04E7 \u0434|\u0438\u0441 |\u0456\u0441\u044C|\u04E7\u0442\u043D|\u0430\u0441\u044C| \u043E\u043B| \u043D\u0430|\u0430\u0446\u0438| \u044D\u0442|\u0430 \u0432|\u0437\u043B\u04E7|\u0441\u0435\u0442| \u0432\u043E| \u0447\u0443|\u043B\u0430\u0441|\u043B\u0430\u043D|\u043C\u04E7 |\u0442\u044B\u0441|\u0440\u0442\u044B|\u04E7\u0440\u0442|\u044B \u043F|\u04E7\u0442\u043B|\u043E \u0441|\u044D\u0442\u0430|\u0434\u0437 |\u043A\u04E7\u0442|\u04E7\u0434\u043D|\u0432\u043D\u044B| \u043C\u044B|\u043D \u043D|\u0443\u0434\u0436| \u0443\u0434|\u0432\u044B\u043B|\u04E7 \u043C|\u0440\u0442\u0456|\u043E\u0440\u0439|\u0438\u0441\u044C| \u0441\u043E|\u0432\u043E\u044D|\u044B\u0434\u04E7|\u0439 \u043E|\u043A\u043E\u043B| \u0433\u043E|\u0441 \u0441|\u0441\u0441\u0438|\u0441\u044B\u043B|\u044B\u0441\u043B|\u0439\u044B\u043D|\u043A\u0438\u043D|\u043E\u043B\u04E7|\u0442\u04E7\u043D| \u0441\u044C|\u0430\u043D\u0430|\u04E7\u0440 |\u0446\u0438\u044F|\u0430 \u0434|\u04E7\u043C\u04E7| \u0432\u0438|\u0437 \u043A| \u044D\u0437|\u044B \u0431|\u0442\u04E7\u0433|\u04E7\u0442 |\u043C\u04E7\u0434|\u0435\u0441\u0442|\u043E\u0441\u0442|\u04E7\u043D\u044B|\u0442\u0438\u0440|\u043E\u0442\u0438|\u0443\u043A\u04E7|\u0447\u0443\u043A|\u043D \u043F|\u043E\u043D\u0434|\u043F\u043E\u043D|\u0441\u043B\u04E7|\u043A\u0435\u0440| \u043A\u0435| \u043E\u0431|\u0441\u0438\u0441|\u0441\u0443\u0434|\u0430 \u043D|\u0434\u043E\u0440|\u043A\u043E\u043D|\u043D\u0435\u043A|\u043D \u0431|\u043B\u04E7\u0442|\u0441 \u0432|\u0442\u0456 |\u044C\u04E7\u0440|\u0442\u0440\u0430| \u0441\u0442|\u043D\u0430\u043B|\u043E\u043D\u0430|\u043D\u0430\u0446|\u043D \u043A|\u043A\u04E7\u0434|\u04E7\u0433 |\u0441\u043A\u04E7|\u0442\u044C |\u0435\u0442\u04E7|\u0434\u04E7\u0441|\u0431\u044B\u0442|\u0440\u043D\u044B|\u04E7 \u043D|\u0442\u0441\u04E7|\u0440\u0440\u0435|\u0430 \u0431|\u043D\u0434\u0430|\u0441 \u0434|\u0430\u0441\u0441|\u044B \u043A|\u0430\u0441\u043B| \u043B\u043E|\u044C\u043D\u044B|\u0441\u044C\u043D|\u044B \u043C|\u0435\u043A\u0438|\u044B \u0434| \u043C\u04E7|\u044C \u043C|\u044B \u043D|\u044B\u0442\u04E7| \u043C\u0435|\u0440\u0439\u04E7|\u0438\u0430\u043B|\u0439 \u0434|\u0438\u0442\u04E7|\u0430 \u043A|\u04E7\u0441\u044C|\u043C\u04E7\u0441|\u043E\u0432\u043D|\u0437\u044B\u043D|\u0430 \u043F|\u043E\u0442\u0441| \u043B\u0438|\u043E\u043B\u044F|\u04E7 \u0430|\u043E\u0441\u0443|\u04E7\u044F |\u043D\u04E7\u044F|\u0435\u0437\u043B|\u0440\u0435\u0437|\u043C\u0435\u0434|\u0441 \u043C| \u0441\u044D|\u044C \u043A|\u0440\u0439\u044B|\u0430\u043A\u043E|\u0437\u0430\u043A| \u0437\u0430|\u044C\u044B\u043D|\u043D\u043D\u0451|\u043C\u04E7\u043B|\u0443\u043C\u04E7| \u0443\u043C|\u044B \u0443|\u043D \u0432|\u043C \u0434|\u043D \u0441| \u0434\u0437|\u043D \u043E|\u0440\u0430\u043D|\u0441\u0442\u0440|\u043E\u0437\u044C|\u043F\u043E\u0437|\u0437 \u043F|\u043E \u0434|\u0446\u0438\u0430|\u043E\u0446\u0438|\u0441\u043E\u0446|\u0438\u043E\u043D|\u0430 \u043C|\u0435\u0441\u043A|\u0447\u0435\u0441|\u043D\u04E7 |\u0437 \u0434|\u0442\u0441\u044C|\u0431\u04E7\u0440| \u0431\u04E7| \u043E\u0432|\u0432\u0435\u0441|\u043A\u044B\u0434|\u04E7 \u0441|\u0432\u043E\u044B|\u043A\u043E\u0434|\u0442\u043A\u043E|\u04E7\u0442\u043A|\u043E\u043B\u044C|\u0434\u0431\u044B|\u0435\u0434\u0431|\u0441\u044C\u044B|\u0447\u044B\u043D|\u0442\u0447\u044B|\u04E7\u0442\u0447|\u0442\u043B\u0430|\u043C\u04E7\u043D|\u0441\u043B\u0430|\u0439\u04E7\u0437| \u0439\u04E7|\u0442 \u0432|\u044B \u0438|\u0435\u0437 |\u043E \u0432|\u043E\u043D\u044B|\u0439\u04E7 |\u0430\u043D\u043D|\u04E7\u043B\u044C| \u043F\u044B|\u0430\u043D |\u043D\u04E7\u0441|\u043D\u0438\u0442| \u0441\u0443|\u043C \u0441",bel:" \u043F\u0440|\u043F\u0440\u0430| \u0456 |\u0430\u0432\u0430|\u043D\u0430 |\u0440\u0430\u0432| \u043D\u0430| \u043F\u0430|\u043D\u044B |\u0432\u0430 |\u0430\u0431\u043E|\u0446\u044C | \u0430\u0431|\u0430\u0435 | \u043C\u0430|\u0430\u0432\u0435|\u0430\u043D\u043D|\u0430\u0446\u044B|\u0441\u0432\u0430| \u0441\u0432|\u0435 \u043F|\u043B\u044C\u043D| \u0447\u0430|\u043D\u0435 |\u043D\u043D\u044F|\u0430\u043B\u0430|\u0430 \u043D|\u0430\u0439 |\u043B\u0430\u0432|\u0447\u0430\u043B| \u043A\u043E| \u0430\u0434| \u043D\u0435|\u0433\u0430 |\u043E\u0436\u043D|\u043A\u043E\u0436|\u0432\u0435\u043A|\u043D\u044F | \u044F\u043A|\u0436\u043D\u044B|\u044B \u0447|\u043C\u0430\u0435|\u0430 \u043F|\u0430\u0433\u0430|\u0431\u043E |\u0435\u043A |\u0430 \u0430|\u0446\u0430 |\u0446\u0446\u0430| \u045E | \u0437\u0430|\u044B\u0445 |\u043F\u0430\u0432|\u0430 \u0441|\u0433\u043E |\u0432\u0456\u043D|\u0434\u043D\u0430|\u0431\u043E\u0434|\u043C\u0456 |\u0432\u0430\u0431|\u0432\u0430\u043D|\u0430\u043C | \u0432\u044B| \u0441\u0430| \u0434\u0430|\u0441\u0442\u0430|\u0430\u0432\u0456|\u043D\u043D\u0435|\u0430\u0441\u0446|\u043D\u0430\u0439|\u0446\u044B\u044F|\u043D\u0430\u0433|\u0430\u0440\u0430|\u0456 \u043D|\u043A \u043C|\u044F\u0433\u043E| \u044F\u0433|\u044C\u043D\u0430|\u043F\u0440\u044B|\u0430\u0446\u044C|\u0456 \u043F|\u043E\u0434\u043D|\u0441\u0442\u0432|\u0430\u043C\u0430|\u043D\u044B\u0445| \u0431\u044B|\u0442\u0432\u0430|\u0434\u0437\u0435|\u0430\u043B\u044C| \u0440\u0430|\u043D\u0456 |\u0456 \u0441|\u0456 \u0430|\u044B\u0446\u044C|\u0430 \u0431|\u0435\u043D\u043D|\u043B\u0435\u043D|\u0446\u0456 |\u043E\u045E\u043D|\u044B\u043C |\u0440\u0430\u0446|\u0456\u043D\u043D|\u0456\u0445 | \u0430\u0441| \u0442\u0430|\u0442\u043E |\u043D\u0430\u0441|\u044F\u043A\u0456| \u0434\u0437|\u0447\u044B\u043D|\u043E\u043B\u044C|\u0456 \u0434|\u0430\u0432\u043E|\u0430\u0434 | \u043D\u0456|\u0441\u0446\u0456|\u044B\u043C\u0456|\u043D\u044B\u043C|\u0431\u044B\u0446|\u044F \u043F|\u044C\u043D\u044B|\u044B\u044F |\u0430\u0440\u043E|\u0430\u043D\u0430|\u0456\u043D\u0430|\u0456 \u0456|\u0440\u0430\u0434| \u0433\u0440|\u043B\u044F |\u045E\u043B\u0435|\u043E \u043F|\u0430 \u045E|\u0440\u044B\u043C|\u043F\u0430\u0434|\u044B\u0456 | \u0456\u043D|\u0430\u043C\u0456|\u0434\u0437\u044F|\u0440\u0430\u043C|\u0446\u044B\u0456|\u0430\u0431\u0430|\u0430 \u0456|\u0434\u0443 |\u0436\u043D\u0430|\u045E\u043D\u0430|\u043D\u0430\u043B|\u043D\u0430\u0446|\u0440\u044B |\u044D\u0442\u0430|\u0433\u044D\u0442| \u0433\u044D|\u043D\u0435\u043D|\u0434\u0430 |\u0430\u0445 |\u0433\u0440\u0430|\u043A\u0430\u0446|\u0443\u043A\u0430|\u0430 \u0437|\u043A\u0456 |\u0430\u0434\u0441|\u045E \u0456|\u043D\u0441\u0442|\u044D\u043D\u043D|\u044F \u0430|\u043D\u043D\u0456|\u043E\u0434\u0443|\u0430 \u0440|\u043D\u043D\u0430|\u0445\u043E\u0434|\u043D\u0430\u043D|\u043F\u0435\u0440|\u0445 \u043F| \u0443 |\u0430\u0434\u0437|\u0456 \u0440|\u043C\u0430\u0434|\u043C \u043F|\u0435 \u043C|\u0430\u0434\u0443|\u0434\u0441\u0442|\u0434\u043B\u044F| \u0434\u043B|\u043E\u045E |\u043D\u0430\u0435|\u0456 \u043C|\u0430\u043A\u043E| \u043A\u0430|\u044B \u045E|\u0431\u0430\u0440|\u0435 \u0430|\u0430\u0446\u0446|\u0443\u044E |\u044B\u0446\u0446|\u0441\u0430\u043C|\u044F\u045E\u043B|\u0430\u043B\u0435|\u0440\u043E\u0434|\u0440\u0430\u0431| \u043F\u0435|\u0448\u0442\u043E| \u045E\u0441|\u0430\u0434\u043D| \u0441\u0443|\u0440\u043E\u045E| \u0440\u043E|\u0434\u0443\u043A|\u043B\u044E\u0431|\u044C \u0441| \u0448\u043B|\u0440\u0430\u0437|\u043D\u0430\u0432|\u0437\u043D\u0430|\u0432\u043E\u043B|\u0443\u0434\u0437|\u0430\u0434\u0430|\u0436\u044B\u0446|\u0447\u043D\u0430|\u0432\u0435 |\u0430 \u0442|\u0430\u0441\u043D|\u0441\u0430\u0446|\u0435\u0440\u0430| \u0440\u044D|\u044F\u043A\u043E|\u043A\u043B\u0430|\u0430\u043D\u044B| \u0448\u0442|\u044C \u0443|\u0430\u044E\u0446|\u043D\u0430\u0440| \u0443\u0441|\u0441\u043E\u0431|\u0430\u0441\u043E|\u043F\u0430\u043C|\u044F \u045E|\u0430\u0432\u044F|\u0447\u044D\u043D|\u0432\u043E\u045E|\u0442\u0430\u043A|\u043D\u0443 |\u044E \u0430|\u044C \u043F|\u0437\u0430\u043A|\u043A\u0430\u0440|\u0435 \u0456|\u044C \u0430|\u0431\u0435\u0441|\u0456\u044F |\u043A\u0456\u044F|\u0445 \u0456|\u0437\u0430\u0431|\u0430\u0441\u0430|\u0456\u043C |\u0436\u0430\u0432|\u0456 \u0437|\u043B\u0435\u0436|\u0442\u0430\u043D|\u0430\u0445\u043E|\u044F\u043B\u044C|\u044B\u044F\u043B|\u043E \u0441|\u044F\u043D\u0430|\u043A\u0430\u043D|\u0430\u043A\u0430|\u0456\u043D\u0448|\u0430\u043B\u0456|\u0432\u044B | \u043C\u043E|\u043D\u0430\u0445|\u044F \u044F|\u043C \u043D|\u043E\u0433\u0430| \u0431\u0435|\u0439 \u0434|\u043E \u0430| \u0441\u0442|\u0435\u043D\u044B|\u0456 \u045E|\u0430 \u0434|\u0435\u0441\u043F|\u0448\u043B\u044E|\u0446\u0446\u044F|\u044B \u0456|\u044B\u0441\u0442|\u0440\u044B\u0441|\u043B\u044E\u0447|\u043A\u043B\u044E|\u0442\u0430\u0446|\u0443\u043B\u044C|\u044B\u043D\u0441|\u0430\u0447\u044B|\u0441\u043F\u0440| \u0441\u043F|\u0430\u045E |\u044B\u043C\u0430|\u0430\u0440\u044B|\u043A\u0430\u043C|\u0435 \u045E|\u0456 \u043A|\u043A\u043E\u043D",bul:" \u043D\u0430|\u043D\u0430 | \u043F\u0440|\u0442\u043E | \u0438 |\u0440\u0430\u0432|\u0434\u0430 | \u0434\u0430|\u043F\u0440\u0430|\u0441\u0442\u0432|\u0432\u0430 |\u0430 \u0441|\u0430 \u043F|\u0432\u043E |\u043D\u043E |\u0438\u0442\u0435|\u0442\u0430 |\u043E \u0438|\u0435\u043D\u0438| \u0437\u0430|\u043D\u0435 | \u043D\u0435| \u0432\u0441|\u0432\u0430\u043D|\u0430\u0432\u043E|\u0430 \u043D|\u043E\u0442\u043E|\u0435 \u043D|\u043E \u043D|\u0430 \u0438|\u043A\u0438 |\u0438\u0435 |\u0442\u0435 |\u043D\u0438 |\u0438\u043C\u0430| \u0438\u043C|\u043B\u0438 |\u0438\u043B\u0438|\u0438\u044F | \u043F\u043E|\u043E\u0432\u0435|\u0430\u043D\u0435|\u0447\u043E\u0432|\u043C\u0430 | \u0447\u043E|\u0438 \u0447|\u0430 \u0434|\u043D\u0438\u0435|\u0430\u043D\u0438|\u0438 \u0434|\u0435\u0441\u0442| \u0438\u043B|\u0432\u0435\u043A|\u0432\u0441\u0435| \u043E\u0431|\u0435\u043A |\u0435\u043A\u0438|\u0441\u0435\u043A|\u0430\u0432\u0430|\u0442\u0432\u043E|\u0441\u0432\u043E| \u0441\u0432|\u0432\u043E\u0442|\u0430 \u0432|\u0438 \u0441|\u043E\u0441\u0442| \u0440\u0430|\u043E\u0432\u0430|\u0430 \u043E|\u0435 \u0438|\u0432\u0430\u0442|\u0438 \u043D|\u0435 \u043F|\u043A \u0438|\u0430 \u0431| \u0432 |\u0438 \u043F|\u043B\u043D\u043E|\u043E \u0434| \u0441\u0435| \u0431\u044A|\u043F\u0440\u0438|\u0440\u0430\u0437|\u0435\u0442\u043E|\u044A\u0434\u0435|\u0431\u044A\u0434|\u0430\u0442\u0430| \u043A\u043E| \u0442\u0440| \u043E\u0441|\u0430\u0446\u0438| \u0441\u044A|\u0431\u043E\u0434|\u043E\u0431\u043E|\u0432\u043E\u0431|\u0430\u0442 |\u0437\u0430 |\u0442\u0435\u043B| \u0435 |\u043E \u0441|\u0434\u0435 |\u043E \u043F|\u0435\u043D |\u0438 \u0432| \u043E\u0442|\u0441\u0435 |\u043D\u0438\u044F|\u0440\u0430\u043D|\u0430\u043B\u043D| \u0434\u0435|\u0431\u0440\u0430|\u0435\u0433\u043E|\u043D\u0435\u0433| \u0438\u0437|\u043E\u0442 |\u044F\u0442\u0430|\u043A\u0430\u043A|\u043E\u0434\u0438|\u0435 \u0441|\u0438 \u0438|\u0434\u0435\u043D|\u043F\u0440\u0435|\u0431\u0432\u0430|\u044F\u0431\u0432|\u0440\u044F\u0431|\u0442\u0440\u044F|\u043D\u0438\u0442| \u043A\u0430|\u044F\u0432\u0430|\u043F\u0440\u043E|\u0441\u0442 |\u0430 \u0437|\u0433\u043E\u0432|\u0432\u0435\u043D|\u0442\u0432\u0435|\u043E \u043E|\u0430 \u0440|\u0430\u043A\u0432|\u043E \u0432|\u0438 \u0437|\u0440\u0435\u0434|\u043D\u043E\u0441|\u0438\u044F\u0442|\u0435 \u0434|\u0449\u0435\u0441|\u043D\u043E\u0432| \u043D\u0438|\u0446\u0438\u044F| \u0434\u043E|\u0439\u0441\u0442|\u043E \u0442|\u0435 \u0442|\u0440\u0436\u0430|\u044A\u0440\u0436|\u0434\u044A\u0440|\u0435\u043D\u043E|\u043F\u043E\u043B| \u0441 |\u043E\u0431\u0440|\u0442\u0432\u0430|\u043D\u043E\u0442|\u0440\u0435\u0441|\u0435\u0439\u0441|\u0438 \u043E|\u0435 \u0432|\u043A\u043E\u0439|\u043E\u0431\u0449|\u043B\u0435\u043D|\u043E\u043D\u0430|\u043D\u0430\u0446|\u0438\u0447\u0435|\u0435\u0437 |\u0431\u0435\u0437| \u0431\u0435|\u0435\u0436\u0434|\u0443\u0432\u0430|\u0432\u0438\u0442|\u0440\u0438 |\u0437\u0430\u043A|\u0438 \u043A| \u043B\u0438|\u0430 \u0435|\u043F\u043E\u0434|\u0435\u043B\u0438|\u043D\u0438\u043A|\u0441\u0438 |\u0435 \u043E|\u0430 \u0442|\u0438 \u0440|\u0442 \u0441|\u043A\u0430 |\u043E\u0435\u0442|\u0435\u043B\u043D|\u043D\u0435\u043D|\u043E\u0439 |\u0433\u0440\u0430|\u0436\u0435\u043D|\u0434\u0440\u0443| \u0440\u0435|\u0430 \u043A|\u0441\u043D\u043E|\u043E\u0441\u043D|\u043B\u0438\u0447|\u0437\u0438 | \u0442\u0430|\u0441\u0430 |\u043D\u0441\u0442|\u0430\u0432\u043D|\u0447\u043A\u0438|\u0438\u0447\u043A|\u0441\u0438\u0447|\u0432\u0441\u0438|\u043B\u044E\u0447|\u043A\u043B\u044E|\u0434\u043D\u043E| \u043C\u043E|\u0435\u043C\u0435|\u0442\u044A\u043F|\u0430 \u0443|\u0438\u0437\u0432|\u0442\u0432\u0438|\u0434\u0435\u0439|\u044F \u043D|\u043A\u0440\u0438|\u0430\u0442\u043E|\u043E \u0440|\u0439 \u043D|\u0438\u043A\u043E|\u0438\u0447\u043D|\u0436\u0430\u0432| \u0434\u044A| \u0442\u043E|\u0431\u0449\u0435| \u0441\u043E|\u043B\u0438\u0442|\u0442 \u043D| \u0441\u0438|\u0442 \u0438|\u0432\u043D\u0438|\u043E\u0434\u043D|\u0436\u0434\u0430|\u0437\u043E\u0432|\u0430\u0437\u043E|\u0443\u0447\u0430| \u0433\u0440|\u043A\u043E\u0435|\u0441\u0442\u044A|\u0432\u043E\u043B|\u043B\u043D\u0438|\u0441\u0440\u0435| \u0441\u0440|\u043A\u0432\u0430|\u043A\u043E\u043D|\u0442\u043D\u043E|\u0430\u043A\u0430|\u0438 \u0443|\u043A\u043E |\u0433\u0430\u043D|\u043E\u0434\u0430|\u0447\u0435\u043D|\u043B\u0441\u0442|\u0435\u043B\u0441|\u0441\u0442\u0440| \u043A\u044A|\u0441\u0442\u0430|\u0440\u043E\u0434|\u043D\u0430\u0440|\u0438 \u043C|\u0438\u0430\u043B|\u043D\u0430\u043B|\u0440\u0443\u0433| \u0434\u0440|\u0447\u0435\u0441|\u0434\u0438 | \u0441\u0430| \u0442\u0435|\u0441\u0442\u043E|\u0434\u043E\u0441|\u0440\u0430\u0436|\u0440\u0435\u0437|\u0447\u0440\u0435|\u0433\u0430\u0442|\u0435\u043E\u0431|\u0430 \u043C|\u043E \u0435|\u0438\u043D\u0435|\u0430\u0441\u0442|\u043E\u0432\u043E|\u0447\u043D\u043E|\u0430\u0432\u0435|\u043C\u0443 | \u043C\u0443|\u0430\u043D\u043E|\u0438\u0442\u0430|\u0438\u043C\u0438|\u0430\u043A\u043E|\u043D\u0430\u043A|\u043B\u0430\u0433|\u043E\u0432\u0438|\u0430\u043D ",kaz:"\u043D\u0435 | \u049B\u04B1|\u0435\u043D |\u04B1\u049B\u044B| \u0431\u0430| \u049B\u0430|\u049B\u04B1\u049B|\u044B\u049B |\u0493\u0430 | \u0436\u04D9|\u04D9\u043D\u0435|\u0436\u04D9\u043D| \u043D\u0435| \u0431\u043E|\u0434\u0435 |\u0434\u0430\u043C|\u0430\u0434\u0430|\u0430 \u049B|\u0442\u0430\u0440|\u044B\u043D\u0430| \u0430\u0434|\u044B\u043B\u044B| \u04D9\u0440|\u044B\u04A3 |\u0430\u043D |\u0456\u043D |\u049B\u044B\u043B|\u0430\u0440 |\u0435\u043C\u0435|\u043D\u0430 |\u0440 \u0430|\u043B\u044B\u049B|\u0443\u0493\u0430|\u0430\u043B\u0430|\u044B\u049B\u0442| \u04E9\u0437|\u043C\u0435\u0441|\u04D9\u0440 | \u0436\u0430|\u043C\u0435\u043D|\u044B\u0493\u044B|\u043B\u044B | \u0434\u0435|\u049B\u0442\u0430|\u043D\u044B\u04A3|\u043D \u049B|\u0493\u0430\u043D|\u0456\u043D\u0435|\u0431\u0430\u0441|\u0430\u0440\u044B| \u043C\u0435| \u049B\u043E|\u0435\u043A\u0435|\u044B\u043D |\u0434\u0430 |\u0435 \u049B|\u0434\u044B |\u0430\u0441\u044B|\u0441\u0435 |\u0435\u0441\u0435|\u0430\u043C |\u0431\u043E\u043B|\u0430\u043D\u0434|\u043D\u0435\u043C| \u0431\u0456|\u0430\u0440\u0430|\u044B \u0431|\u0441\u0442\u0430|\u0442\u0430\u043D|\u043D\u0434\u044B|\u043D \u0431|\u0456\u04A3 |\u0435 \u0431|\u0456\u043B\u0456|\u0442\u0438\u0456| \u0442\u0438|\u0431\u0430\u0440|\u0493\u044B |\u043D\u0434\u0435|\u0435\u0442\u0442|\u0438\u0456\u0441|\u049B\u044B\u0493|\u0456\u0441 |\u043B\u0430\u0440|\u0433\u0435 |\u044B \u0442|\u0456\u043D\u0434|\u0456\u043A |\u0431\u0456\u0440| \u0431\u0435| \u043A\u0435|\u0430\u043B\u0443|\u0435 \u0430|\u0430\u043B\u044B|\u043B\u0443\u044B|\u0430 \u0436|\u0435\u0440\u0456|\u043E\u043B\u044B| \u0442\u0435|\u049B\u044B\u049B|\u043D \u043A| \u0442\u0430|\u043D \u0436|\u0493\u044B\u043D|\u0442\u0442\u0456|\u0456\u043D\u0456|\u0442\u044B\u043D| \u0435\u0440|\u043D\u0434\u0430|\u0456\u043C | \u0441\u0430|\u0435 \u0436|\u0430\u0442\u044B| \u0430\u0440|\u0440\u0493\u0430|\u0435\u0442\u0456|\u0430\u043D\u0430|\u044B \u04D9|\u0443\u044B\u043D|\u043B\u0493\u0430|\u04E9\u0437\u0456|\u043E\u0441\u0442|\u0435\u0433\u0456|\u0442\u0456\u043A|\u049B\u0430 |\u0441\u049B\u0430|\u0440\u044B\u043D|\u043A\u0456\u043D|\u043B\u0443\u0493|\u04A3 \u049B|\u043D\u0456\u04A3|\u0443\u044B |\u0431\u043E\u0441|\u0430\u0441\u049B|\u049B\u0430\u0440|\u0434\u044B\u049B|\u043D\u0430\u043D|\u043C\u044B\u0441|\u043C\u043D\u044B|\u0430\u043C\u043D|\u044B \u043C|\u0430\u0439\u0434|\u043A\u0435 | \u0436\u0435|\u0437\u0456\u043D|\u0440\u0434\u0435|\u0440\u0456\u043D|\u0435 \u0442|\u0433\u0435\u043D|\u044B\u043F |\u0440\u044B |\u0442\u0456 |\u0441\u044B\u043D|\u049B\u0430\u043C|\u0434\u0435\u043D|\u0456 \u0431|\u0433\u0456\u0437|\u0440\u0430\u043B|\u0435 \u04E9|\u043B\u0430\u043D|\u0441\u044B |\u0430\u043C\u0430|\u0442\u0442\u0430|\u0442\u044B\u049B|\u0431\u0435\u0440|\u0434\u0456 |\u0431\u0456\u043B|\u0440\u043A\u0456|\u04E9\u0437 |\u0437\u0434\u0435|\u043A\u0435\u0442|\u049B\u043E\u0440|\u0434\u0430\u0439|\u0443\u0433\u0435|\u044B \u0435|\u044B\u043D\u0434|\u043D\u0435\u0433|\u043E\u043D\u044B|\u0435\u0439 |\u043C\u0435\u0442|\u0430\u043D\u044B|\u0430 \u0442|\u0436\u0430\u0441|\u0430\u0443\u044B|\u043B\u0433\u0435|\u0430\u0441\u0430|\u0435\u0433\u0435|\u0434\u0430\u0440|\u0440\u0443 |\u0430\u0443 |\u0435\u0440\u043A|\u044B \u0436|\u0440\u044B\u043B| \u0442\u043E|\u043D \u043D|\u0435 \u043D|\u0442\u0456\u043D|\u0456\u0440 |\u0441\u0456\u0437|\u0442\u0435\u0440|\u043B\u043C\u0430|\u0456 \u0442|\u043A\u0456\u043C| \u0430\u043B|\u0440 \u043C|\u043B\u0456\u043A| \u043C\u04AF|\u0435 \u043C|\u0442\u04AF\u0440| \u0442\u04AF|\u043A\u0435\u043B|\u043B\u044B\u043F|\u0435\u04A3 |\u0442\u0435\u04A3|\u0440\u043B\u044B|\u043B\u0456\u043C|\u0440\u0434\u044B|\u0430\u0440\u0434|\u0430\u0442\u0442|\u0441 \u0431|\u044B\u0440\u044B|\u0441\u044B\u0437|\u044B\u0441 |\u0435\u043B\u0433|\u0434\u0430\u043B|\u0439\u0434\u0430|\u043E\u0440\u0493|\u0440\u049B\u044B|\u0430\u0440\u049B| \u0436\u04AF|\u0442\u0430\u043B|\u044B\u043B\u043C|\u0430 \u0431|\u0456\u0433\u0456|\u043B\u0434\u0435|\u0456\u0437 |\u049B\u0442\u044B| \u0435\u0448|\u0434\u0435\u0439|\u0430\u0439 |\u0436\u0430\u0493|\u043A\u0442\u0456|\u0456\u043A\u0442|\u0433\u0456\u043D| \u04D9\u043B|\u0442\u0442\u044B|\u04B1\u043B\u0442| \u04B1\u043B|\u0435 \u0434|\u044B\u043D\u044B|\u043B\u0456\u043D|\u0440 \u0431|\u0435\u043B\u0435|\u043A\u04B1\u049B| \u043A\u04B1|\u0430\u043C\u0434|\u043C \u0431| \u0435\u0442|\u043E\u0493\u0430|\u049B\u04B1\u0440| \u043A\u04E9|\u0430\u0493\u0430|\u0442\u043E\u043B|\u0448\u0456\u043D|\u0430\u0439\u044B| \u049B\u044B|\u049B\u0430\u043B|\u0436\u0435\u043A|\u0456 \u043D|\u0435\u0441 |\u0430\u0493\u044B|\u0435 \u043E|\u0435\u043B\u0456| \u0435\u043B|\u043D \u0435|\u0437\u0456 |\u0448\u043A\u0456|\u0435\u0448\u043A|\u043E\u043B\u0443|\u0446\u0438\u044F|\u043C\u0430\u0441|\u0493\u0434\u0430|\u0430\u0493\u0434|\u043B\u0442\u0442|\u0456\u043C\u0434|\u043D\u044B\u043C| \u0434\u0430|\u0430 \u0434|\u04D9\u0441\u0456|\u0441 \u04D9|\u049B\u0430\u0442|\u0456\u0440\u0456| \u0441\u043E|\u04A3 \u0431|\u0430\u0437\u0430|\u043C\u0434\u0430|\u0430\u0439\u043B| \u0430\u0441|\u0493\u0430\u043C|\u049B\u043E\u0493"},Arabic:{arb:" \u0627\u0644|\u064A\u0629 |\u0641\u064A | \u0641\u064A|\u0627\u0644\u062D| \u0623\u0648|\u0623\u0648 | \u0648\u0627|\u0648\u0627\u0644|\u062D\u0642 |\u0629 \u0627|\u0644\u062D\u0642|\u0627\u0644\u062A|\u0643\u0644 |\u0627\u0644\u0645|\u0644\u0643\u0644| \u0644\u0643|\u0644\u0649 |\u0642 \u0641|\u062A\u0647 |\u0648 \u0627|\u0629 \u0648|\u0634\u062E\u0635|\u0629 \u0644|\u0627\u062A |\u0627\u0644\u0623|\u064A \u0623|\u0648\u0646 | \u0634\u062E|\u0645 \u0627|\u0623\u064A | \u0623\u064A|\u0627\u0646 |\u0623\u0646 |\u0645\u0629 |\u064A \u0627|\u0627\u0644\u0627|\u0644\u0627 |\u0647\u0627 |\u0627\u0621 | \u0623\u0646| \u0639\u0644|\u062E\u0635 |\u0646 \u0627| \u0644\u0644|\u062F \u0627|\u0645\u0646 |\u0641\u0631\u062F|\u0645\u0627 |\u0627\u0644\u0639|\u062A \u0627|\u062D\u0631\u064A|\u0639\u0644\u0649|\u0644 \u0641|\u0631\u062F |\u0644 \u0634| \u0644\u0627|\u0631\u064A\u0629| \u0625\u0644|\u0629 \u0623|\u0627 \u0627|\u0646 \u064A| \u0648\u0644|\u0627 \u0644|\u0627 \u064A| \u0641\u0631| \u0645\u0646|\u0629 \u0645|\u0627\u0644\u0642|\u062C\u062A\u0645|\u0646 \u0623|\u0642 \u0627|\u0627\u0644\u0625| \u062D\u0631|\u0644\u0647 |\u0647 \u0644|\u0627\u064A\u0629|\u0644\u0643 |\u0647 \u0627| \u062F\u0648|\u062F\u0629 |\u0627\u064B |\u064A\u0646 |\u0647 \u0648|\u0644\u0629 |\u064A \u062D| \u0639\u0646|\u0645\u0627\u0639|\u064A \u062A|\u0630\u0627 | \u062D\u0642|\u0642\u0648\u0642|\u062D\u0642\u0648|\u060C \u0648|\u0646 \u062A|\u0645\u0639 |\u0635 \u0627|\u0627\u0645 |\u062F \u0623| \u0643\u0627|\u0647\u0630\u0627|\u0627\u0644\u0648| \u0625\u0646|\u0645\u0644 |\u0627\u0645\u0629|\u0639 \u0627|\u0625\u0644\u0649|\u0629 \u0639|\u0645\u0627\u064A|\u062D\u0645\u0627|\u0646 \u0648|\u0644\u062A\u0639| \u0648\u064A|\u064A\u0631 |\u0646\u0648\u0646|\u064A \u0648|\u0627\u0633\u064A|\u0627\u0644\u062C| \u0647\u0630|\u0646\u0633\u0627|\u0648\u0642 |\u062A\u0631\u0627|\u0639\u064A\u0629|\u0647 \u0623| \u0644\u0647|\u0633\u064A\u0629| \u064A\u062C| \u0628\u0627|\u062F\u0648\u0644|\u0627\u0646\u0648|\u0642\u0627\u0646|\u0644\u0642\u0627|\u0629 \u0628|\u0629 \u062A|\u062A\u0645\u0627|\u0627\u0644\u062F|\u064A\u0627\u062A|\u0639 \u0628|\u0633\u0627\u0646|\u0625\u0646\u0633|\u0647\u0645 |\u0639\u0644\u064A| \u0645\u062A|\u0644\u0645\u062C|\u0630\u0644\u0643|\u0639\u0645\u0644|\u0644\u0623\u0633|\u0648\u0632 |\u062C\u0648\u0632|\u064A\u062C\u0648|\u0628\u0627\u0644|\u063A\u064A\u0631|\u0643 \u0627|\u0643\u0627\u0646|\u0633\u0627\u0633|\u0623\u0633\u0627|\u062F\u0645 |\u0644\u0627\u062F|\u0627\u0639\u064A|\u0627\u0644\u0631|\u062A\u0645\u064A|\u062F\u0648\u0646|\u062A\u0645\u062A|\u0644\u062A\u0645| \u064A\u0639|\u0644\u064A\u0647|\u0633\u0627\u0648|\u0627\u062C\u062A|\u064A \u0645|\u0644\u0639\u0627|\u0644\u062C\u0645|\u062A\u0639\u0644|\u0631 \u0648|\u062A\u0645\u0639|\u0645\u062C\u062A| \u0645\u0639|\u064A\u0647 |\u0649 \u0623|\u0641\u064A\u0647|\u0649 \u0627| \u0643\u0644|\u0644\u0627\u062A|\u0645\u0644\u0627|\u0648\u062F |\u0627\u0646\u062A|\u0627\u0644\u0641|\u064A\u0647\u0627|\u064A \u0625|\u062A\u064A |\u0627\u0644\u0628|\u0644\u064A |\u0642\u062F\u0645|\u0627\u0644 |\u0627\u062F |\u0644 \u0627|\u064A\u0632 |\u064A\u064A\u0632|\u0645\u064A\u064A| \u062A\u0645|\u0644\u062D\u0631|\u062A\u0639 |\u0645\u062A\u0639|\u0627 \u0628|\u0639\u0627\u0645|\u0627 \u0648|\u0642 \u0648|\u0631\u0627\u0645|\u0644 \u0644|\u0644\u0627\u062C|\u0631\u0627 |\u0627\u0644\u0634| \u0648\u0625|\u064A\u0645 |\u0644\u064A\u0645|\u0634\u062A\u0631|\u0627 \u062D|\u0648\u0627\u062C|\u0644\u0632\u0648|\u0648\u0644 |\u0627 \u0641|\u0648\u0644\u0629|\u0644\u062D\u0645|\u0623\u0633\u0631| \u0630\u0644|\u0647 \u0641|\u0627\u062A\u0647|\u0645\u0633\u0627|\u0644\u0645\u0633| \u062A\u0639|\u0639\u0646 |\u0647 \u0639|\u0648\u0644\u0647|\u064A\u062A\u0647|\u0646 \u0644|\u0631\u0629 | \u0648\u0633|\u0627\u0629 |\u064A\u062F | \u062A\u062D| \u0645\u0633|\u064A \u064A|\u0644\u062A\u064A|\u0639\u0629 |\u0648\u0644\u064A|\u0644\u062F\u0648| \u0623\u0633| \u0648\u0641|\u0644 \u0648|\u0623\u064A\u0629|\u0646\u064A |\u0627\u0644\u0633|\u0644\u0627\u0646|\u0644\u0625\u0639|\u0629 \u0641|\u0631\u064A\u0627|\u0644 \u0625|\u0645 \u0628|\u0627\u0645\u0644|\u0643\u0631\u0627|\u062A\u0633\u0627|\u0645\u064A\u0639|\u062C\u0645\u064A| \u062C\u0645|\u0623\u0648\u0644|\u0628\u064A\u0629|\u0639\u064A\u0634|\u062A\u062D\u0642|\u0627\u062F\u0629|\u0633 \u0627| \u0645\u0645|\u0645\u0639\u064A|\u062C\u0645\u0627|\u0639\u0627\u062A|\u0627\u0639\u0627|\u0627\u0631\u0633|\u0645\u0627\u0631|\u0645\u0645\u0627|\u0645 \u0648|\u0631\u0627\u0643|\u0627\u0634\u062A|\u0627\u0644\u0637|\u0627\u062C |\u0632\u0648\u0627|\u0627\u0644\u0632| \u0648\u0645|\u062D\u062F\u0629|\u062A\u062D\u062F|\u0644\u0645\u062A|\u0645\u0645 |\u0644\u0623\u0645|\u062F\u0647 |\u0628\u0644\u0627| \u0628\u0644|\u0627\u0631 |\u064A\u0627\u0631|\u062A\u064A\u0627|\u062E\u062A\u064A|\u0627\u062E\u062A|\u0646 \u0645| \u0645\u0631",urd:"\u0648\u0631 | \u0627\u0648|\u0627\u0648\u0631|\u06A9\u06D2 | \u06A9\u06D2| \u06A9\u06CC| \u06A9\u0627|\u06CC\u06BA | \u062D\u0642|\u06A9\u06CC |\u06A9\u0627 | \u06A9\u0648|\u0626\u06D2 |\u06D2 \u06A9|\u06CC\u0627 |\u0633\u06D2 |\u06A9\u0648 |\u0634\u062E\u0635| \u0634\u062E|\u0646\u06D2 | \u0627\u0633| \u06C1\u06D2|\u0645\u06CC\u06BA|\u062D\u0642 | \u06C1\u0648| \u0645\u06CC|\u062E\u0635 |\u06D2 \u0627| \u062C\u0627|\u0627\u0633 | \u0633\u06D2| \u06CC\u0627|\u06C1\u0631 |\u06CC \u0627| \u06A9\u0631| \u06C1\u0631|\u06D2\u06D4 |\u0633\u06CC |\u06C1\u06CC\u06BA|\u0627 \u062D|\u0635 \u06A9|\u0648\u06BA |\u06D2 \u0645| \u0627\u0646|\u0631 \u0634|\u06D4 \u06C1|\u0627\u0626\u06D2|\u0632\u0627\u062F|\u0622\u0632\u0627| \u0622\u0632|\u0627\u0645 |\u0631 \u0627|\u0642 \u06C1|\u0627\u062F\u06CC|\u062C\u0627\u0626|\u06BA \u06A9|\u06C1\u06D2\u06D4|\u0645 \u06A9| \u06A9\u0633|\u0627 \u062C|\u06CC \u06A9|\u0633 \u06A9|\u06A9\u0633\u06CC| \u067E\u0631|\u06D2 \u06AF|\u06C1\u06D2 |\u0627\u0631 |\u062A \u06A9|\u062F\u06CC |\u067E\u0631 |\u0648 \u0627| \u062D\u0627| \u062C\u0648| \u06C1\u06CC|\u0627\u0646 |\u06CC \u062C|\u0631\u06CC | \u0646\u06C1| \u0645\u0639|\u062C\u0648 |\u0644 \u06A9|\u06CC \u062A|\u0646 \u06A9|\u06A9\u0631\u0646|\u0626\u06CC |\u0644 \u06C1|\u062A\u06CC |\u06C1\u0648 |\u06C1 \u0627| \u0627\u06CC|\u0635\u0644 |\u0627\u0635\u0644|\u062D\u0627\u0635|\u0631\u0646\u06D2|\u06CC \u0634|\u0646\u06C1 |\u06D4 \u0627|\u06BA\u06D4 |\u06CC\u06BA\u06D4|\u0631 \u06A9|\u0631 \u0645| \u0645\u0644|\u0648\u06C1 |\u0645\u0639\u0627|\u0631\u06D2 |\u06BA \u0627|\u0646\u06C1\u06CC|\u06D2 \u06C1|\u06D2 \u0628|\u0627\u06CC\u0633|\u06D2 \u0644| \u062A\u0639| \u06AF\u0627|\u06CC\u062A |\u06CC \u062D|\u0627 \u0627|\u06CC \u0645|\u0627\u067E\u0646| \u0627\u067E|\u06A9\u06CC\u0627|\u0645\u06CC |\u06CC \u0633| \u062C\u0633|\u06C1 \u06A9|\u0646\u06CC |\u0627\u0634\u0631|\u0639\u0627\u0634| \u062F\u0648|\u0644\u0626\u06D2| \u0644\u0626|\u0627\u0646\u06C1|\u0648\u0642 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0645\u0644 | \u0642\u0627|\u06A9\u06C1 | \u06AF\u06CC|\u0631 \u0628|\u06C1 \u0645| \u0648\u06C1| \u0628\u0646|\u06CC \u0628|\u0645\u0644\u06A9|\u062C\u0633 |\u0627\u06D4 |\u0631\u06CC\u0642|\u0631 \u0646|\u06D2 \u062C|\u0627\u062F |\u0627\u062A |\u06AF\u06CC |\u062F \u06A9|\u06D2 \u062D|\u062F\u0627\u0631|\u0631 \u06C1|\u06AF\u0627\u06D4|\u0642\u0648\u0645| \u0642\u0648|\u06D2\u060C |\u0627 \u0633|\u062F\u0648\u0633|\u0631 \u067E| \u0648 | \u0634\u0627|\u06CC \u0622|\u06BA \u0645|\u0642 \u062D| \u067E\u0648| \u0628\u0627|\u062E\u0644\u0627|\u0627\u0646\u06D2|\u06CC\u0645 |\u0644\u06CC\u0645|\u0648 \u062A|\u0648\u0646 | \u06A9\u06C1|\u06CC\u060C |\u06D4 \u06A9|\u0627 \u067E|\u0646 \u0627|\u0644\u06A9 |\u0639\u0644\u0627|\u0627 \u0645|\u0642 \u06A9|\u0627\u0626\u06CC|\u0648\u0633\u0631|\u06CC \u06C1|\u0648\u0626\u06CC|\u06CC\u0631 |\u0627 \u06C1|\u0639\u0644\u06CC|\u0648 \u06AF|\u0648\u0631\u06CC|\u062F\u06AF\u06CC|\u0646\u062F\u06AF|\u0648 \u06A9|\u06CC\u0633\u06D2| \u0645\u0646|\u0627\u0626\u062F|\u0631\u0627\u0626| \u0645\u0631|\u067E\u0648\u0631| \u0637\u0631|\u0648\u0645\u06CC|\u06D2 \u062E|\u0633\u0628 |\u0646\u0648\u0646|\u0627\u0646\u0648|\u0642\u0627\u0646| \u0633\u06A9|\u0648\u0627\u0645|\u06CC\u0646 | \u0631\u06A9|\u062A\u0639\u0644|\u0644\u0627\u0642|\u063A\u06CC\u0631|\u062F\u0627\u0646|\u060C \u0627| \u0628\u06CC| \u0645\u0633|\u06CC\u0648\u06BA|\u0646\u0627 | \u0628\u06BE| \u0628\u0631|\u0631\u062A\u06CC|\u0627\u062F\u0627|\u0627\u0645\u0644|\u06CC\u06C1 | \u06CC\u06C1|\u06C1 \u0648| \u0639\u0627|\u06CC \u067E| \u0628\u0686|\u0627\u0641 |\u0644\u0627\u0641| \u062E\u0644|\u06CC\u06D4 |\u06AF\u06CC\u06D4| \u062F\u06CC|\u06BE\u06CC |\u0628\u06BE\u06CC|\u062F\u06C1 |\u062C\u0627 |\u067E\u0646\u06CC|\u0642\u0648\u0627|\u0627\u0642\u0648|\u0631\u06A9\u06BE|\u06D2 \u06CC| \u0639\u0644|\u06A9\u0648\u0626|\u060C \u0645| \u0686\u0627|\u06D2 \u0633|\u0631 \u0639| \u067E\u06CC|\u0628\u0631\u0627|\u0631 \u0633|\u0631 \u062D|\u0633\u0627\u0646|\u0645 \u0627|\u06A9\u0627\u0645|\u0634\u0631\u062A| \u0631\u0627|\u0634\u0627\u0645|\u0645\u0646 |\u0632\u0646\u062F| \u0632\u0646|\u0628 \u06A9|\u062A \u0645|\u0627\u06C1 |\u0627\u0631\u06CC|\u0633 \u0645|\u0631 \u062C| \u0645\u062D|\u0648\u0631\u0627|\u06D2 \u067E|\u0637\u0631\u06CC|\u06C1\u0648\u06BA|\u0627\u0644 |\u06BA \u0633|\u06CC \u0646|\u06A9\u0631\u06D2| \u0645\u0642|\u062A \u0633|\u062A\u062D\u0641| \u062A\u062D|\u0648\u06D4 |\u06C1\u0648\u06D4|\u0628\u0646\u062F| \u0627\u0642|\u062F \u06C1| \u0627\u0645|\u0627\u0645\u06CC|\u0627\u0644\u0627|\u0644\u062A |\u0634\u0631\u06D2|\u06D2 \u0639|\u0627 \u06A9|\u0641\u0631\u06CC",pes:" \u0648 | \u062D\u0642| \u0628\u0627|\u0646\u062F |\u0631\u062F |\u062F\u0627\u0631| \u062F\u0627|\u06A9\u0647 |\u0647\u0631 | \u062F\u0631| \u06A9\u0647|\u062F\u0631 | \u0647\u0631|\u0631 \u06A9|\u062D\u0642 |\u062F \u0647|\u0627\u0632 |\u06CC\u062A | \u0627\u0632|\u06CC\u0627 |\u06A9\u0633 |\u0648\u062F |\u0627\u0631\u062F| \u06CC\u0627| \u06A9\u0633|\u0627\u06CC |\u062F \u0648| \u0628\u0631| \u062E\u0648|\u0642 \u062F|\u0628\u0627\u0634|\u0634\u062F |\u062F \u06A9|\u0627\u0631 |\u062F \u0628| \u0631\u0627|\u0647 \u0628|\u0627\u0646 |\u0622\u0632\u0627| \u0622\u0632|\u0631\u0627 |\u0627\u0634\u062F|\u06CC \u0648|\u0647 \u0627|\u06CC\u0646 |\u06CC\u062F |\u0632\u0627\u062F|\u0633 \u062D|\u062E\u0648\u062F|\u06CC \u0628| \u0627\u0633|\u062F\u0647 |\u062F\u06CC |\u0648\u0631 |\u0627\u06CC\u062F|\u0647 \u062F|\u0631\u06CC |\u0648 \u0627|\u062A\u0645\u0627|\u0627\u062A | \u0646\u0645|\u06CC \u06A9|\u0627\u062F\u06CC|\u0646\u0647 |\u0631\u0627\u06CC|\u062F \u0627| \u0622\u0646|\u0627\u0633\u062A|\u0631 \u0627|\u0631 \u0645| \u0627\u062C|\u0645\u0627\u06CC|\u0648\u0646 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0648 \u0645| \u0627\u0646|\u0627\u0646\u0647| \u0647\u0645|\u0648\u0642 |\u0627\u06CC\u062A| \u0634\u0648|\u06CC \u0627| \u0645\u0648| \u0628\u06CC|\u0628\u0627 | \u062A\u0627|\u0648\u0631\u062F|\u0627\u0646\u0648|\u0633\u062A |\u0648\u0627\u0646|\u0628\u0631\u0627|\u0627\u0645 |\u0634\u0648\u062F|\u0622\u0646 |\u062C\u062A\u0645|\u06CC \u06CC| \u06A9\u0646|\u0631 \u0628|\u06A9\u0646\u062F| \u0645\u0631|\u062A \u0645|\u0647\u0627\u06CC|\u062A \u0627| \u0645\u0633|\u06CC\u060C |\u0645\u0627\u0639|\u0627\u062C\u062A|\u062A\u0648\u0627|\u06CC\u06AF\u0631|\u0648 \u0628|\u062F\u0627\u0646|\u062A \u0648|\u0627 \u0645| \u0628\u062F|\u0639\u06CC |\u06A9\u0627\u0631| \u0645\u0646|\u0645\u0648\u0631| \u0645\u0642|\u06CC \u062F| \u0632\u0646|\u06CC \u0645|\u0646 \u0628|\u0631 \u062E|\u0627\u0647 |\u0627 \u0628|\u0627\u0631\u06CC|\u062F \u0622|\u0645\u0644 | \u0628\u0647|\u0627\u0639\u06CC|\u062F\u060C |\u062F\u06CC\u06AF|\u062A \u0628|\u0628\u0627\u06CC|\u0627\u06CC\u0646| \u0645\u06CC|\u0646 \u0648|\u0642 \u0645| \u0639\u0645| \u06A9\u0627|\u0646 \u0627|\u0648 \u0622| \u062D\u0645|\u0646\u0648\u0646|\u0647 \u0648|\u0648 \u062F|\u062F \u0634| \u0627\u06CC|\u0634\u0648\u0631|\u06A9\u0634\u0648| \u06A9\u0634|\u0644\u06CC |\u0646\u06CC |\u0647 \u0645|\u0628\u0639\u06CC|\u0631 \u0634|\u06CC\u0647 | \u0645\u0644|\u0645\u06CC\u062A|\u06CC \u0631|\u0631\u0646\u062F| \u0634\u0631|\u0645\u06CC |\u0648\u06CC |\u0633\u0627\u0648|\u0642\u0627\u0646| \u0642\u0627|\u0645\u0642\u0627|\u0627\u0648 | \u0627\u0648|\u062F \u0645|\u06AF\u06CC |\u0646\u0645\u06CC| \u0627\u062D| \u0645\u062D|\u0645\u06CC\u0646|\u0626\u06CC |\u0627\u062F\u0627| \u0622\u0645|\u062E\u0648\u0627|\u06AF\u0631\u062F| \u06AF\u0631|\u0645\u0646\u062F| \u0634\u062F|\u0627\u0626\u06CC| \u062F\u06CC|\u0632 \u062D|\u0647\u06CC\u0686| \u0647\u06CC|\u0627\u062F\u0647| \u0645\u062A|\u0646\u0645\u0627|\u062A \u06A9|\u0631\u0627\u0646| \u0628\u0645|\u0646 \u062D|\u0631 \u062A|\u062D\u0645\u0627|\u0627\u0631\u0646|\u0645\u0633\u0627|\u062F\u06AF\u06CC|\u0648\u0645\u06CC|\u0646 \u062A|\u0645\u0644\u0644|\u0628\u0631 |\u0647\u062F |\u0648\u0627\u0647|\u0628\u0647\u0631| \u0627\u0639|\u200C\u0647\u0627|\u0642 \u0648|\u060C \u0627|\u0639\u06CC\u062A|\u06CC\u062A\u0648|\u0627 \u0631|\u0646 \u0645| \u0639\u0642|\u0647\u0645\u0647|\u0627 \u0647|\u0632\u0634 |\u0648\u0632\u0634|\u0645\u0648\u0632|\u0622\u0645\u0648|\u0627\u0646\u062A|\u062A\u06CC |\u062C\u0627\u0645|\u0645\u0648\u0645|\u0639\u0645\u0648|\u062A\u062E\u0627| \u0641\u0631|\u0637\u0648\u0631|\u062F \u062F|\u0647 \u062D|\u0631\u062F\u0627|\u0627\u0648\u06CC|\u0646\u0648\u0627|\u0627\u0646\u06CC|\u0631\u0627\u0631| \u0645\u062C|\u06CC \u0646|\u062D\u062F\u06CC|\u0627\u062D\u062F|\u0646\u062F\u06AF|\u0632\u0646\u062F|\u0634\u062E\u0635| \u0634\u062E|\u200C\u0645\u0646|\u0647\u200C\u0645|\u0631\u0647\u200C|\u0647\u0631\u0647|\u0634\u062F\u0647|\u0639 \u0627|\u0648 \u0647|\u0627\u0633\u06CC|\u0647\u0654 |\u06CC\u062F\u0647|\u0639\u0642\u06CC|\u0627 \u0627|\u0645\u0647 | \u0628\u0634|\u0627\u062F |\u062F\u06CC\u0647|\u0627 \u062F|\u062F\u0648\u0627|\u06CC \u062D|\u0627\u0628\u0639|\u06CC \u062A|\u062E\u0627\u0628|\u0646\u062A\u062E|\u0631\u0648\u0631|\u0648 \u0631|\u0634\u0631\u0627| \u062E\u0627|\u0654\u0645\u06CC|\u0627\u0654\u0645|\u062A\u0627\u0654|\u0627\u064B |\u0627\u0645\u0644|\u0644\u0647 |\u062F \u0631|\u0627\u0633\u0627|\u062E\u0648\u0631|\u0628\u0644 |\u0627\u0628\u0644|\u0642\u0627\u0628|\u06CC\u06A9 |\u0633\u0627\u0646|\u0642\u0631\u0627|\u0627 \u0646|\u062E\u0635\u06CC| \u0627\u0645| \u0628\u0648|\u06CC\u0631 |\u0627\u0644\u0645|\u0628\u06CC\u0646|\u0627\u0647\u062F|\u062A\u0628\u0639| \u062A\u0628",zlm:" \u062F\u0627|\u0627\u0646 |\u062F\u0627\u0646| \u0628\u0631| \u0627\u0648|\u0646 \u0633|\u0631\u06A0 |\u062F\u0627\u0644| \u06A4\u0631|\u0644\u0647 |\u0643\u0646 | \u0643\u06A4|\u0646 \u0627|\u0646 \u0643|\u0646 \u062F|\u064A\u06A0 | \u064A\u06A0|\u06A4\u062F |\u062D\u0642 |\u0648\u0631\u06A0|\u062A\u064A\u0627|\u064A\u0627\u06A4|\u0627\u0631\u0627|\u0643\u06A4\u062F|\u0627\u0648\u0631|\u0631\u062D\u0642|\u0628\u0631\u062D|\u0627\u0644\u0647|\u0623\u0646 |\u0648\u0644\u064A| \u0627\u062A|\u0627\u062A\u0627|\u06A0\u0646 |\u062A\u0627\u0648|\u0627\u06A4 |\u0633\u062A\u064A|\u0644\u064A\u0647|\u0627\u0648 | \u0633\u062A|\u06A4 \u0627|\u064A\u0647 |\u0631\u0627 |\u0647 \u0628|\u0647 \u062F|\u0639\u062F\u0627| \u0639\u062F|\u0646 \u06A4|\u0646 \u0628|\u064A\u0646 | \u062A\u0631|\u0642 \u0643|\u0646 \u064A|\u064A\u0628\u0633|\u0628\u064A\u0628| \u062A\u064A| \u0633\u0648| \u0643\u0628| \u0633\u0627|\u0646 \u0645|\u0646 \u062A|\u0644\u0645 |\u0627\u0644\u0645|\u062F \u0633|\u06A0 \u0639| \u0645\u0646|\u0686\u0627\u0631|\u062F \u06A4|\u0631\u0646 |\u0633\u0627\u0645| \u0645\u0627|\u06BD \u0633|\u0646\u060C | \u0628\u0648| \u0627\u064A|\u0646\u062F\u0642| \u062D\u0642|\u06AC\u0627\u0631|\u0646\u06AC\u0627|\u0628\u0648\u0644|\u0633\u0628\u0627| \u0633\u0628|\u0627\u062A\u0648|\u0627 \u0633|\u0642\u0644\u0647| \u06A4\u0645| \u0645\u0645|\u0648\u0627\u0646|\u0633\u0686\u0627| \u0633\u0686| \u0643\u0633|\u0627 \u0628|\u0633\u0646 | \u0633\u0645|\u06A4\u0631\u0644|\u0627\u0648\u0646|\u0646\u06BD |\u062A\u0646 | \u0628\u0627|\u0647\u0646 |\u0633\u064A\u0627|\u0627 \u06A4|\u0627\u0631\u06A0|\u0628\u0627\u0631|\u06A4\u0627 |\u0628\u0633\u0646|\u0643\u0628\u064A|\u0627\u0645 |\u064A\u0646\u062F|\u064A \u062F|\u0627\u06AC\u064A|\u06A0 \u0628|\u0628\u0627\u06AC|\u064A \u0627|\u0645\u0627\u0646| \u0644\u0627| \u062F |\u062F\u0642\u0644|\u0647\u0646\u062F| \u0647\u0646|\u062A \u062F|\u0627\u062F\u064A|\u0648\u064A\u0646|\u064A\u0643\u0646| \u0646\u06AC|\u060C \u0643|\u0646\u0662 | \u06A4\u0648|\u0628\u06A0\u0633|\u0642\u0662 |\u0627\u062A |\u0627\u0648\u0644|\u0627\u0643\u0646|\u0627\u06BD | \u0633\u0633|\u0648\u0646 |\u0627\u062F | \u0643\u0648|\u0627\u064A\u0646|\u062F\u06A0\u0646| \u062F\u06A0|\u0627\u0626\u0646|\u062A\u0648 |\u062A\u064A |\u0646 \u0647|\u06AC\u064A |\u0633\u064A |\u0642 \u0645|\u0648\u06A0\u0646|\u062F\u0648\u06A0|\u0646\u062F\u0648|\u0644\u064A\u0646|\u0631\u0644\u064A|\u0646\u062A\u0648|\u06A4\u0648\u0646|\u0648\u0627\u062A|\u064A\u0627\u062F|\u062A\u064A\u0643|\u06A0\u0633\u0627|\u06A4\u0645\u0628|\u062A\u0631\u0645|\u0662 \u062F|\u062D\u0642\u0662|\u0648\u0627 |\u0644\u0648\u0627|\u0645\u0627\u0633|\u0648\u0642 |\u0647 \u0645|\u0644 \u062F| \u0645\u0644|\u0648\u0646\u062F| \u06A4\u06A0|\u0627\u060C |\u060C \u062A|\u0644\u0627\u0626|\u0627\u064A |\u0645\u06A4\u0648|\u064A\u0643 |\u064A \u0643|\u0631\u0627\u062A|\u0645\u0631\u0627| \u0628\u064A|\u0633\u0645\u0648|\u0648 \u0643|\u060C \u062F|\u0633\u0648\u0627|\u06A0 \u0645|\u06A0 \u0633|\u06A0\u0662 |\u06A4\u0631\u064A|\u064A\u0631\u064A|\u062F\u064A\u0631|\u0627 \u0627|\u0627\u0633\u0627|\u06A4\u0662 |\u062A\u0627 |\u0633\u0648\u0633|\u060C \u0633|\u062C\u0648\u0627|\u06A0 \u062A|\u0631\u0623\u0646| \u0627\u0646|\u0633\u0623\u0646|\u0631\u064A\u0643|\u064A\u0623\u0646|\u0631\u064A | \u062F\u0631|\u0627\u0645\u0631|\u0643\u0631\u062C| \u06A4\u0644|\u0627 \u062F|\u062C\u0631\u0646|\u0627\u062C\u0631|\u0627\u0631\u0643|\u0644\u0627\u062C|\u062F \u0643|\u0648\u0627\u0631|\u0628\u0631\u0633|\u0648\u0646\u062A|\u0645\u0646\u0648|\u0633\u0627\u0644|\u064A\u0646\u06A0|\u062F\u06A0\u0662|\u0646\u062F\u06A0| \u0645\u06A0|\u0627\u06A4\u0627|\u0633\u0633\u064A|\u0633\u0627\u0633|\u0646\u0646 |\u06A4\u0648\u0644|\u0627\u06AC\u0627| \u0628\u06A0| \u0633\u06A4|\u0645\u0628\u064A| \u0627\u06A4|\u06A0 \u0627|\u0627\u0631\u0623|\u06A4\u0631\u0627|\u064A \u0633|\u0628\u0633 | \u062F\u0644|\u0627 \u0645|\u0645\u0648\u0627|\u06A4\u0644\u0627|\u0645\u0644\u0627|\u06A4\u0631\u0643|\u0643\u0648\u0631|\u0648\u0628\u0648| \u0643\u0623|\u0648\u0643\u0646|\u0623\u0646\u06BD|\u0643\u0633\u0627|\u06A0\u06AC\u0648|\u0627\u062F\u06A4|\u0647\u0627\u062F|\u0631\u0647\u0627|\u062A\u0631\u0647|\u0643\u0648\u0645|\u062A\u0648\u0642|\u0645 \u0633|\u06A0 \u062F|\u062F\u064A | \u062F\u064A|\u0662 \u0633|\u0646\u062F\u064A|\u0627\u0633 |\u0627\u062F\u0627|\u0628\u0648\u0627| \u062F\u0628|\u06A0 \u06A4|\u06BD\u060C |\u0627\u06A4\u0662|\u0631\u062A\u0627|\u0627\u0644 |\u064A\u0627\u0644|\u0648\u0633\u064A| \u0643\u062A|\u0623\u0646\u060C|\u0646\u06A4\u0627|\u062A\u0646\u06A4| \u062A\u0646|\u0645 \u06A4|\u0631\u0633\u0627|\u0645\u0645\u06A4| \u0645\u0631|\u0646 \u062D| \u0643\u0645|\u0646\u0633\u064A|\u062C\u0623\u0646|\u0624\u064A |\u0644\u0624\u064A|\u0627\u0644\u0624|\u0644\u0627\u0644|\u0643\u06A4\u0631|\u0643\u062A |\u0631\u0643\u062A|\u0634\u0627\u0631|\u0645\u0634\u0627| \u0645\u0634|\u062C\u0627\u062F|\u0631\u06AC\u0627",skr:"\u062A\u06D2 |\u0627\u06BA |\u062F\u06CC |\u062F\u06D2 | \u06D4 |\u0648\u06BA | \u062A\u06D2| \u062F\u0627| \u06A9\u0648|\u06A9\u0648\u06BA| \u062D\u0642|\u062F\u0627 | \u062F\u06CC|\u06CC\u0627\u06BA| \u062F\u06D2|\u06CC\u06BA |\u06D2 \u0627|\u0634\u062E\u0635| \u0634\u062E|\u06C1\u0631 |\u06D2 \u06D4|\u0627\u0635\u0644| \u062D\u0627|\u062D\u0642 |\u062E\u0635 | \u06C1\u0631|\u0635\u0644 |\u062D\u0627\u0635|\u06C1\u06D2 | \u06C1\u06D2|\u0627\u0644 |\u0642 \u062D|\u0644 \u06C1| \u0646\u0627| \u06A9\u06CC| \u0648\u0686|\u06D4 \u06C1|\u06CC\u0627 |\u0633\u06CC |\u06D2 \u0645| \u0627\u0648|\u0648\u0686 |\u0627\u062A\u06D2|\u06A9\u06CC\u062A|\u0627 \u062D|\u0627\u062F\u06CC|\u0646\u0627\u0644|\u0635 \u06A9| \u0627\u062A|\u0631 \u0634|\u06C1\u06CC\u06BA| \u06CC\u0627|\u06BA \u062F| \u0627\u06CC|\u06CC\u0633\u06CC| \u0645\u0644|\u0648\u0646\u062F|\u06A9\u06C1\u06CC| \u06A9\u06C1|\u06CC \u062A|\u0632\u0627\u062F|\u0627\u0632\u0627| \u0627\u0632|\u0646\u062F\u06D2|\u06BA \u06A9|\u0627\u0631 | \u0648\u06CC|\u06D2 \u06A9|\u0626\u06D2 | \u0627\u0646|\u06BB \u062F|\u0646\u06C1 | \u06A9\u0631|\u0627\u0648\u0646|\u06D2 \u0648|\u062F\u06CC\u0627|\u06CC \u062F|\u06BA \u0627|\u06D2 \u0628|\u0648\u06CC\u0633|\u0648\u06BB |\u06CC \u0646| \u06C1\u0648|\u062A\u06CC |\u06CC \u06D4| \u0646\u06C1|\u06CC \u0627|\u06CC\u0646\u062F|\u0648 \u0684|\u0622\u067E\u06BB| \u0622\u067E|\u0627 \u0648|\u06D2 \u062C| \u06A9\u0646|\u06D2 \u0646|\u0646\u062F\u06CC|\u062A \u062F|\u06D2 \u062D|\u06CC \u06A9|\u0626\u06CC |\u0645\u0644\u06A9|\u06CC\u062A\u06D2|\u0646 \u06D4|\u062A\u06BE\u06CC| \u062A\u06BE|\u0648\u0646 |\u06BA \u0645| \u0628\u0686|\u06D4 \u0627|\u0646\u0648\u06BA|\u06A9\u0646\u0648|\u06BB\u06D2 |\u0627\u0631\u06CC|\u0627 \u0627|\u06D2 \u06C1|\u0644 \u062A| \u0684\u0626|\u0648\u0642 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0644 \u06A9|\u062E\u0644\u0627| \u062C\u06CC|\u0644\u06A9 |\u062F\u0627\u0631|\u06CC\u062A |\u06A9\u0631\u06BB|\u0627\u0646\u06C1|\u06A9\u0648 |\u06C1\u06A9\u0648| \u06C1\u06A9|\u0646 \u0627|\u0645\u0644 | \u0648\u0633|\u06BA \u0648|\u067E\u06BB\u06D2| \u062A\u0639|\u06CC \u0645|\u0627\u0641 |\u06D2 \u062E|\u0646\u0648\u0646|\u0642\u0646\u0648| \u0642\u0646| \u0644\u0648|\u06D4 \u06A9|\u0631\u06CC |\u0644\u06D2 |\u062A\u0627 |\u06CC\u062A\u0627| \u0642\u0648| \u0686\u0627|\u06C1\u0627\u06BA|\u0684\u0626\u06D2|\u0642 \u062A|\u0627\u06CC\u06C1|\u0631\u06BB |\u06D2 \u062F|\u0631 \u06A9| \u0648 |\u0644\u0627\u0641| \u062E\u0644| \u062C\u0648|\u06CC \u0648|\u0627\u0648 |\u06C1\u0648 |\u0626\u0648 |\u0686\u0626\u0648|\u0628\u0686\u0626|\u06CC\u0631 |\u06C1\u0648\u0648|\u0627 \u0645|\u06CC \u062C|\u0627\u0644\u0627|\u06CC\u0646 | \u062C\u0627|\u0645\u06CC |\u0646\u06C1\u0627|\u0627\u0646 |\u0627\u062A |\u0633\u06B1\u062F| \u0633\u06B1|\u06CC\u0628 |\u0633\u06CC\u0628|\u0648\u0633\u06CC| \u0634\u0627|\u0628 \u062F|\u06CC\u0648\u06BB|\u0627\u0645 |\u0627\u0648\u06BB|\u06D2 \u062A|\u06BB \u06A9| \u0645\u0637|\u06BA \u062A| \u0648\u0646| \u06A9\u0645|\u0646 \u062F|\u0631\u06A9\u06BE| \u0631\u06A9|\u06BB\u06CC |\u06BA \u0622|\u0631\u06CC\u0627|\u06CC \u06C1|\u0627\u062F |\u06CC\u0627\u062F|\u0639\u0644\u0627|\u0631 \u06C1|\u06BA \u0633|\u06CC \u062D|\u062C\u06BE\u06CC|\u0627\u0626\u062F|\u06C1\u06CC |\u0644\u0648\u06A9| \u068B\u0648| \u0633\u0645| \u0633\u0627| \u0645\u0646| \u0645\u0639|\u0628\u0642 |\u0627\u0628\u0642|\u0637\u0627\u0628|\u0645\u0637\u0627|\u06BE\u06CC\u0648|\u06BA \u0641|\u06C1\u0646 | \u06C1\u0646|\u062C\u0648 |\u0648 \u06A9|\u06BA \u0634|\u0631 \u062A|\u06A9\u0627\u0631|\u0645 \u062F|\u06BE\u06CC\u0627| \u067B\u0627|\u063A\u06CC\u0631|\u0648 \u0644|\u0648\u0626\u06CC|\u062C\u06CC\u0627|\u0648\u0627\u0645|\u0642\u0648\u0627|\u06CC \u0633| \u062C\u06BE|\u0644 \u0627|\u0642\u0648\u0645| \u0633\u06CC|\u0630\u06C1\u0628|\u0645\u0630\u06C1| \u0645\u0630|\u0627\u06D2 | \u0627\u06D2|\u062F\u0646 |\u0627 \u062A|\u0633\u0627\u0646|\u0646\u0633\u0627|\u0627\u0646\u0633|\u0631\u06D2 |\u0644\u06CC\u0645|\u0639\u0644\u06CC|\u062A\u0639\u0644|\u0627\u0645\u0644|\u06C1 \u062F|\u06D2 \u0631|\u062F \u0627|\u06A9\u0645 |\u06CC\u06C1\u0648|\u0641\u0627\u0626|\u0686 \u0627| \u06A9\u06BE|\u0645 \u062A|\u0631\u0627 |\u0648\u0631\u0627|\u067E\u0648\u0631|\u06BA \u0628|\u0642 \u062F|\u06D2 \u0642|\u0648\u06A9\u0648|\u06A9\u06BE\u06CC|\u0627 \u06A9|\u0648 \u062F|\u06D2 \u0630|\u067E\u06BB\u06CC|\u0628\u0646\u062F| \u0641\u0631|\u06A9\u0648\u0626|\u0627\u0645\u06CC|\u06CC \u06CC|\u0627\u0626\u06CC|\u0644\u0627\u0642|\u0627\u06CC\u06BA|\u06C1 \u0627| \u0646\u0638|\u0633\u0645\u0627|\u0648\u0645\u06CC|\u06CC\u060C |\u06D2 \u0633|\u062A \u0648|\u06BE\u06CC\u0646|\u06D2 \u0639|\u06CC\u0645 |\u0633\u06C1\u0648| \u0633\u06C1",pbu:" \u062F | \u0627\u0648|\u0627\u0648 |\u067E\u0647 | \u067E\u0647|\u064A\u06D4 | \u062D\u0642|\u0686\u06D0 | \u0686\u06D0|\u0631\u0647 |\u064A \u0627|\u06D0 \u062F| \u0647\u0631|\u0646\u0647 |\u0647\u0631 |\u062D\u0642 | \u0685\u0648|\u0648\u06A9 |\u0685\u0648\u06A9|\u0648 \u0627|\u0647 \u062F|\u0647 \u0627|\u06D4 \u0647|\u0647 \u0648| \u0634\u064A| \u0644\u0631|\u064A \u0686|\u0648 \u062F|\u0631\u064A |\u0644\u0631\u064A|\u0642 \u0644| \u06A9\u069A|\u0648\u064A |\u069A\u06D0 |\u06A9\u069A\u06D0|\u0647 \u06A9|\u063A\u0647 |\u0644\u0648 |\u0631 \u0685|\u0633\u0631\u0647| \u0633\u0631|\u0647 \u067E| \u067C\u0648|\u0648 \u067E|\u0644\u0647 |\u064A\u062A |\u067C\u0648\u0644|\u064A\u0627 |\u06A9\u0693\u064A| \u06A9\u0648|\u062E\u0647 |\u064A\u060C |\u062F\u064A | \u0644\u0647| \u0627\u0632|\u062F \u0645| \u0647\u064A| \u0648\u0627| \u064A\u0627| \u0685\u062E|\u0627\u0632\u0627|\u062F \u0627|\u0648\u0644\u0648|\u0647 \u062A|\u0685\u062E\u0647| \u06A9\u0693|\u0648\u0644 |\u0647\u063A\u0647|\u0647 \u0634|\u064A \u062F| \u0647\u063A|\u06A9\u0648\u0644|\u0632\u0627\u062F|\u0646\u0648 | \u0648\u064A|\u0648 \u064A|\u0647 \u0628|\u0634\u064A\u06D4|\u062F\u06D0 |\u064A\u0648 | \u062F\u064A|\u062A\u0647 |\u062E\u067E\u0644| \u067E\u0631|\u0627\u062F |\u062F \u062F|\u06A9 \u062D| \u062A\u0648|\u0647 \u0645|\u06AB\u0647 |\u0647 \u0647|\u0642\u0648\u0642|\u062D\u0642\u0648|\u0648 \u0645|\u0647 \u062D|\u062F \u0647| \u062A\u0631| \u0645\u0633|\u0634\u064A | \u0646\u0647|\u0693\u064A\u06D4|\u0646\u064A |\u062F \u067E|\u0648\u0627\u062F|\u06D0 \u067E|\u0627\u062F\u064A|\u0648\u0644\u0646| \u064A\u0648|\u062F \u062A|\u0648\u0646\u0648|\u0648\u06AB\u0647|\u064A \u0648|\u0644\u064A | \u062F\u0627|\u064A\u062F | \u0628\u0627|\u062A\u0648\u0646| \u062E\u067E|\u064A \u067E|\u062A\u0648\u06AB|\u0627\u0631 |\u0627\u0646\u062F|\u064A\u0648\u0627|\u06D0 \u0648|\u062F\u0627\u0646| \u0628\u0631|\u0693\u064A | \u0639\u0645|\u0627\u0646\u0647| \u062F\u0647|\u064A\u0685 |\u0647\u064A\u0685|\u0627\u0645\u064A|\u0644\u0646\u064A|\u0628\u0639\u064A|\u0689\u0648\u0644| \u0689\u0648|\u0647 \u0644|\u0627\u064A\u062F|\u0628\u0627\u064A|\u0627\u062A\u0648|\u0647 \u06AB| \u062A\u0627|\u067E\u0644 | \u0645\u0644|\u0627\u064A\u062A|\u0648\u0645 |\u0648\u0646 | \u0644\u0627|\u0647\u064A\u0648| \u0634\u0648| \u062F\u063A|\u0645 \u062F|\u062F\u0647 |\u06D0 \u0627|\u0627\u0646 | \u062A\u0647|\u06A9\u0627\u0631|\u062A\u0648 |\u0645\u064A |\u0627\u0631\u0647|\u0627\u0648\u064A|\u0633\u0627\u0648|\u0645\u0633\u0627|\u0646\u0648\u0646|\u062F\u0647\u063A|\u0648 \u062A|\u064A \u0634|\u0627\u0646\u0648| \u0645\u062D|\u064A\u0646 |\u0627\u062E\u0644| \u06AB\u067C|\u0634\u0648\u064A|\u062F\u063A\u0647|\u0648 \u062D|\u0648\u064A\u060C|\u0646\u064A\u0632|\u0633\u064A |\u0627\u0633\u064A|\u0648\u0646\u062F|\u0642\u0648 |\u0648\u0642\u0648|\u0648 \u06A9|\u0648\u0646\u0647|\u0648\u0645\u064A| \u0648\u06A9|\u064A \u062A| \u0627\u0646|\u0642\u0627\u0646|\u0646\u062F\u06D0|\u0648 \u0631|\u06A9 \u062F|\u0647 \u064A|\u0645\u064A\u0646|\u067E\u0631 |\u067C\u0647 |\u0644\u0627\u0645|\u063A\u0648 |\u0647\u063A\u0648|\u062F \u067C|\u0648 \u0647|\u0644 \u062A|\u0644\u06D2 |\u0648\u0644\u06D2|\u0648\u0648\u0646|\u06A9\u064A |\u0631\u0648 |\u0646 \u06A9|\u0645\u0648\u0645|\u0648\u06A9\u0693|\u067E\u0627\u0631|\u0646 \u0634|\u0645\u0646 | \u0646\u0648| \u0648\u0693| \u0642\u0627|\u06D0 \u0686| \u0648\u0633|\u0685 \u0685|\u0634\u062E\u0635| \u0634\u062E|\u0698\u0648\u0646| \u0698\u0648|\u062A\u0631 |\u06AB\u067C\u0647|\u0648 \u0685|\u0647\u0645 |\u0639\u0642\u064A|\u0631\u062A\u0647| \u0648\u0631|\u0628\u0644 | \u0628\u0644|\u0648 \u0628|\u0647 \u0633|\u069A\u0648\u0648| \u069A\u0648| \u06A9\u0627|\u06D0 \u06A9|\u0648 \u0633|\u0627\u062F\u0647|\u0648\u0646\u06A9| \u063A\u0648|\u062F\u0648 |\u0648 \u0646|\u062A \u06A9|\u0645\u0644 |\u0639\u0645\u0648|\u0644 \u0647| \u067E\u064A|\u0648\u0633\u064A|\u0693\u0627\u0646|\u0648\u0693\u0627|\u064A\u0632 |\u062E\u0635\u064A|\u064A \u0645|\u0627 \u0628|\u0627\u062F\u0627|\u0647 \u0646|\u062E\u0644\u064A|\u0648\u0627\u062E|\u062F\u064A\u0648|\u060C \u062F|\u062F \u0642| \u0647\u0645|\u0627 \u062F| \u0628\u064A|\u062A\u0628\u0639| \u062A\u0628|\u0647 \u0686| \u0639\u0642|\u067E\u0644\u0648|\u0648 \u0644| \u0631\u0627|\u062F \u0628|\u0631\u0627\u064A| \u062F\u062E|\u0646\u06D0 |\u0646\u06A9\u064A|\u062A \u062F|\u0627\u0628\u0639| \u0645\u0642|\u062F \u062E|\u0648\u0631\u0647|\u0634\u0631\u0627| \u0634\u0631|\u0631 \u0645|\u0631\u0633\u0631|\u062A\u0627\u0645|\u0647 \u067C| \u0645\u0646|\u0637\u0647 |\u0633\u0637\u0647|\u0627\u0633\u0637|\u0648\u0627\u0633|\u0644\u06D0 | \u0627\u0633|\u06D4 \u062F|\u0628\u0631\u062E|\u06D0 \u0646"},Devanagari:{hin:"\u0915\u0947 |\u092A\u094D\u0930| \u092A\u094D| \u0915\u093E| \u0915\u0947| \u0964 |\u0914\u0930 | \u0914\u0930|\u0915\u093E | \u0915\u094B|\u0915\u093E\u0930|\u093E\u0930 |\u0924\u093F |\u092F\u093E |\u0915\u094B |\u0928\u0947 |\u094B\u0902 |\u093F\u0915\u093E|\u094D\u0930\u0924| \u0939\u0948| \u0915\u093F|\u0902 \u0915|\u0939\u0948 |\u0927\u093F\u0915|\u0935\u094D\u092F|\u0905\u0927\u093F| \u0905\u0927|\u094D\u0924\u093F| \u0938\u092E|\u094D\u092F\u0915|\u093F \u0915|\u0915\u094D\u0924|\u093E \u0905|\u0915\u0940 |\u093E \u0915| \u0935\u094D|\u0947\u0902 | \u0939\u094B|\u092F\u0915\u094D|\u0938\u0940 |\u0938\u0947 |\u0947 \u0915| \u092F\u093E| \u0915\u0940|\u092E\u0947\u0902|\u0928\u094D\u0924| \u092E\u0947|\u0924\u094D\u092F|\u0948 \u0964|\u0924\u093E |\u0930\u0924\u094D|\u0915\u094D\u0937|\u0947\u0915 |\u092F\u0947\u0915|\u094D\u092F\u0947|\u093F\u0915 |\u0930 \u0939|\u092D\u0940 |\u0915\u093F\u0938| \u091C\u093E| \u0938\u094D|\u0915 \u0935|\u093E \u091C|\u093F\u0938\u0940|\u092E\u093E\u0928| \u0935\u093F|\u0930 \u0938|\u0924\u094D\u0930|\u0940 \u0938|\u0964 \u092A| \u0915\u0930|\u094D\u0930\u093E|\u0917\u093E |\u093F\u0924 | \u0905\u092A| \u092A\u0930|\u0938\u094D\u0935|\u0940 \u0915| \u0938\u0947|\u093E \u0938|\u094D\u092F | \u0905\u0928|\u094D\u0924\u094D|\u093F\u092F\u093E|\u093E \u0939| \u0938\u093E|\u0928\u093E |\u094D\u0924 |\u092A\u094D\u0924|\u0938\u092E\u093E|\u093E\u0928 |\u0930 \u0915|\u093E\u092A\u094D|\u0924\u0928\u094D| \u092D\u0940| \u0909\u0938|\u0930\u093E\u092A|\u0935\u0924\u0928|\u094D\u0935\u0924|\u0930\u094B\u0902|\u0935\u093E\u0930|\u0947 \u0938|\u0925\u093E |\u0939\u094B |\u0947 \u0905|\u093E \u0964|\u0928 \u0915| \u0928 |\u0926\u0947\u0936| \u0930\u093E|\u0937\u093E |\u0905\u0928\u094D|\u0924 \u0939|\u094D\u0937\u093E|\u094D\u0935\u093E|\u091C\u093E\u090F|\u0940 \u092A|\u0915\u0930\u0928|\u093E \u092A|\u0905\u092A\u0928|\u0937\u094D\u091F| \u0938\u0902|\u0947 \u0935|\u0939\u094B\u0917|\u093F\u0935\u093E|\u091F\u094D\u0930|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0938\u0915\u0947| \u092E\u093E|\u0913\u0902 |\u093E\u0913\u0902|\u0930\u0940 |\u0915 \u0938|\u0947 \u092A| \u0928\u093F|\u0940\u092F |\u0930\u0915\u094D|\u094B \u0938|\u093E\u090F\u0917|\u0930\u0928\u0947| \u0907\u0938|\u0935 \u0915|\u092A\u0930 |\u0930\u0924\u093E|\u0930 \u0905| \u0938\u092D|\u0924\u0925\u093E| \u0924\u0925| \u0910\u0938|\u0930\u093E |\u092A\u0928\u0947|\u094D\u0930\u0940|\u093F\u0915\u094D|\u0915\u093F\u092F|\u093E \u0935|\u092E\u093E\u091C|\u0902 \u0914|\u0930 \u0909|\u0926\u094D\u0927|\u0938\u092D\u0940|\u0936\u094D\u092F| \u091C\u093F|\u093E\u0928\u0947|\u093E\u0930\u094D|\u093E\u0930\u093E|\u0926\u094D\u0935| \u0926\u094D|\u090F\u0917\u093E|\u0938\u092E\u094D|\u0947\u0936 |\u093F\u090F |\u093E\u0935 |\u0930 \u092A| \u0926\u0947|\u094D\u0924\u0930|\u093E \u0914|\u093E\u0930\u094B|\u092F\u094B\u0902|\u092A\u0930\u093E|\u092A\u0942\u0930|\u091A\u093F\u0924|\u094D\u0927 |\u0930\u0942\u092A| \u0930\u0942| \u0938\u0941| \u0932\u093F|\u0924 \u0915|\u094B \u092A|\u0902 \u0938|\u0947 \u0932|\u0936\u093F\u0915| \u0936\u093F|\u0935\u093E\u0939|\u0947 \u0914|\u091C\u094B |\u0930\u093E\u0927|\u091C\u093F\u0938|\u0942\u0930\u094D|\u0940 \u092D|\u0942\u092A |\u094B\u0917\u093E|\u0938\u094D\u0925|\u0930\u0940\u092F|\u0924\u093F\u0915|\u094D\u0930 |\u0964 \u0907|\u0907\u0938 | \u0909\u0928|\u0932\u0947 |\u0947 \u092E|\u0932\u093F\u090F|\u092E \u0915|\u0915\u0924\u093E|\u0947 \u092F| \u091C\u094B|\u0928 \u092E|\u0905\u092A\u0930| \u092A\u0942|\u094B \u0915|\u093E \u0909|\u093E\u0939 |\u0928\u0942\u0928|\u093E\u0928\u0942|\u0917\u0940 |\u0926\u0940 |\u093E\u0930\u0940|\u0902 \u092E|\u0964 \u0915|\u0924\u0930\u094D|\u0940 \u0930|\u0936 \u0915|\u092A\u0930\u093F|\u0938\u094D\u0924|\u094B\u0908 |\u0915\u094B\u0908|\u0930\u094D\u092F|\u0940 \u0905|\u0939\u093F\u0924|\u092D\u093E\u0935| \u092D\u093E|\u0924\u093E\u0913|\u093E\u0938 |\u0938\u093E\u092E|\u0935\u093F\u0915|\u0935\u093F\u0935|\u092E\u094D\u092E| \u0938\u0915|\u0915\u0930 |\u093E\u0928\u093E|\u0927 \u0915|\u0928\u093F\u0915|\u092F \u0915|\u0909\u0938\u0915|\u0915\u0943\u0924| \u0958\u093E|\u0928 \u0938|\u091C\u0940\u0935|\u094D\u092F\u093E|\u0930\u0915\u093E|\u094D\u0930\u0915|\u093E\u091C |\u0928\u094D\u092F|\u094D\u092E |\u0930\u094D\u0923|\u0958 \u0939|\u0939\u0958 | \u0939\u0958|\u0940 \u092E|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093E\u092E\u093E|\u0915 \u0914|\u092E\u093F\u0932|\u0947\u0928\u0947|\u0932\u0947\u0928| \u0932\u0947|\u092F\u0947 |\u094B \u0905|\u0947 \u091C|\u0930\u093F\u0935|\u092E\u092F |\u0938\u092E\u092F|\u0935\u0936\u094D|\u0906\u0935\u0936| \u0906\u0935|\u0910\u0938\u0940|\u093E\u0927 |\u0930 \u0926|\u0930\u094D\u0935|\u0938\u093E\u0930|\u092A \u0938|\u092C\u0928\u094D| \u0938\u0939|\u093F\u0927\u093E|\u0935\u093F\u0927|\u0940 \u0928|\u0942\u0928 |\u0958\u093E\u0928",mar:"\u094D\u092F\u093E|\u092F\u093E |\u0924\u094D\u092F|\u092F\u093E\u091A|\u091A\u093E |\u0923\u094D\u092F|\u093E\u091A\u093E| \u0935 |\u0915\u093E\u0930|\u092A\u094D\u0930| \u092A\u094D|\u093F\u0915\u093E|\u0927\u093F\u0915|\u093E\u0930 | \u0905\u0927|\u0905\u0927\u093F|\u091A\u094D\u092F|\u0906\u0939\u0947| \u0906\u0939|\u093E \u0905|\u0939\u0947 |\u093E \u0915|\u093E\u0938 |\u0935\u093E |\u094D\u092F\u0947|\u094D\u0930\u0924| \u0938\u094D|\u0924\u093E |\u093E \u0938| \u0905\u0938| \u0915\u0930|\u0938\u094D\u0935| \u0915\u093E|\u0932\u094D\u092F|\u0930\u0924\u094D|\u093E\u0939\u093F|\u0915\u094B\u0923| \u0915\u094B|\u093F\u0915 |\u092F\u0947\u0915|\u094D\u0935\u093E|\u093E \u0935| \u0924\u094D|\u0930 \u0906|\u094D\u092F |\u0924\u094D\u0930|\u0947\u0915\u093E|\u0915\u094D\u0937|\u093E \u0928| \u0938\u0902|\u093E\u092E\u093E|\u093E\u091A\u094D|\u0902\u0935\u093E|\u093F\u0902\u0935|\u0915\u093F\u0902| \u0915\u093F|\u093E\u0924 |\u0937\u094D\u091F|\u0915\u093E\u0938| \u092F\u093E|\u092F\u093E\u0902|\u093E\u0902\u091A|\u0930\u094D\u092F|\u092E\u093F\u0933| \u092E\u093F| \u0938\u093E|\u0935\u094D\u092F|\u094B\u0923\u0924|\u0928\u0947 |\u0947 \u092A|\u0915\u093E\u092E| \u0938\u092E|\u0902\u0924\u094D|\u092F\u0947 | \u0930\u093E|\u0938\u092E\u093E|\u0924\u0902\u0924|\u0915\u0930\u0923|\u093E \u0906|\u0947 \u0915|\u0939\u093F |\u0947 \u0938|\u0928\u093E |\u093F\u0933\u0923|\u0942\u0928 |\u093E \u092A|\u091F\u094D\u0930|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0940\u092F |\u0935 \u0938|\u0915\u094D\u0924|\u092E\u093E\u0928|\u0930\u094D\u0935| \u0906\u092A|\u0933\u0923\u094D|\u094D\u0930\u094D|\u093E\u0924\u0902|\u0935\u093E\u0924|\u091A\u0947 | \u0935\u093F|\u094D\u0937\u0923|\u0930\u0923\u094D| \u0926\u0947| \u0935\u094D|\u0906\u092A\u0932|\u0939\u0940 |\u093E\u0930\u094D|\u0928\u092F\u0947| \u0928\u092F|\u092E\u093E |\u092F\u093E\u0938| \u091C\u093E|\u0932\u0947\u0932| \u0928\u093F|\u0947 \u0905| \u092A\u093E|\u093E \u092E|\u0932\u0947 |\u093E\u0939\u0940|\u092C\u0902\u0927|\u0947 \u0935|\u094D\u092F\u0915| \u092E\u093E|\u0936\u093F\u0915| \u0936\u093F|\u0926\u0947\u0936|\u093E \u0926|\u092E\u093E\u091C|\u094D\u0930\u0940|\u0932\u0940 |\u093E\u0928 |\u093E\u0902\u0928|\u092A\u0932\u094D| \u0939\u094B|\u093E \u0939|\u0937\u0923 |\u091C\u0947 |\u093F\u091C\u0947|\u0939\u093F\u091C|\u092A\u093E\u0939|\u093E\u0930\u093E|\u092F\u093E\u0924|\u0938\u0930\u094D| \u0938\u0930|\u0930\u093E\u0902|\u0905\u0938\u0932|\u0902\u092C\u0902|\u0938\u0902\u092C|\u093F\u0915\u094D|\u0940 \u092A|\u0902\u091A\u094D|\u0930\u0915\u094D|\u0923\u0924\u094D| \u0906\u0923|\u0932\u093E |\u0938\u094D\u0925|\u0930\u0940\u092F|\u0940\u0924 |\u0902\u0928\u093E|\u0924 \u0935|\u094D\u0935 |\u0915 \u0935|\u0923\u0947 |\u093E\u091A\u0947|\u0928 \u0915|\u0924 \u0915|\u0930\u0924\u093E|\u094D\u0930\u093E|\u092F\u093E\u0939|\u094D\u0924 |\u091A\u0940 |\u092F \u0915|\u0926\u094D\u0927|\u094D\u0935\u0924|\u092F\u0915\u094D|\u0923\u093F |\u0906\u0923\u093F|\u0938 \u0938|\u0902\u0927\u093E|\u0915 \u0938|\u091A\u094D\u091B|\u092F \u0905|\u0924 \u0938|\u0940\u0928\u0947|\u094B\u0923\u093E|\u0915\u0930\u0924|\u0924\u094D\u0935|\u0940\u0932 |\u0940 \u0905|\u0938\u093E\u0930|\u0930 \u0935|\u092D\u093E\u0935|\u0935 \u0924|\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u0947 \u0924|\u0947 \u091C|\u092F\u093E\u092F|\u0902\u091A\u093E|\u0947\u0932\u094D|\u093E\u0928\u0947|\u0947\u0923\u094D|\u0915 \u0906|\u0915\u094D\u0915|\u0939\u0915\u094D| \u0939\u0915|\u0923 \u092E|\u0902\u0930\u0915|\u0938\u0902\u0930|\u0928\u094D\u092F|\u093E\u092F\u0926|\u093E \u0924|\u0924 \u0906| \u0909\u092A|\u0935\u0938\u094D|\u093F\u0935\u093E|\u0947\u0936\u093E|\u0938\u093E\u092E|\u0947 \u092F|\u0947 \u0906|\u0940 \u0935|\u0935 \u092E|\u0924\u0940\u0928|\u0935 \u0906|\u0927\u094D\u092F| \u0905\u0936|\u0927\u093E\u0924|\u0915\u0943\u0924|\u094D\u0915 |\u0926\u094D\u092F|\u093F\u0924 |\u0938\u0932\u0947|\u0947\u0936 |\u0924\u094B |\u0947\u0932 |\u0924\u0940 |\u094D\u0924\u0940|\u0905\u0938\u0947|\u0907\u0924\u0930| \u0907\u0924|\u0938\u094D\u0924|\u0930\u094D\u0923|\u093E \u092C|\u0947\u0932\u0947| \u0915\u0947|\u0939\u0940\u0930|\u091C\u093E\u0939|\u093E \u091C|\u0947\u0924 |\u0942\u0930\u094D|\u092A\u0942\u0930|\u0947\u091A | \u0935\u093E|\u093E\u091C\u093E|\u0940 \u0938|\u0936\u093E |\u092F \u0935| \u0928\u094D|\u092F\u093E\u0935|\u0926\u094D\u0926|\u094D\u0927 |\u0930\u0942\u0928|\u092F\u0926\u094D|\u0915\u093E\u092F|\u093E \u0936|\u0917\u0923\u094D|\u0915 \u0915|\u0930\u093E\u0927| \u0936\u093E|\u092F\u0924\u094D|\u0932 \u0905|\u094D\u092F\u0935|\u0940 \u0915|\u093E\u0935 |\u093E \u092F|\u0924\u094D\u0924|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0930\u0923\u093E| \u0927\u0930|\u093E \u0927|\u092D\u0947\u0926| \u092C\u093E|\u0930\u0915\u093E|\u094D\u0930\u0915|\u0915\u0947\u0932|\u093F \u0935|\u093F\u0937\u094D|\u0924\u0940\u0932|\u092F\u094B\u0917|\u0938\u093E\u0927|\u093E\u0902\u0924|\u0935\u093F\u0935|\u0936\u094D\u0930| \u0927\u0947| \u092E\u0941|\u0935\u0924\u0903",mai:"\u093E\u0915 |\u092A\u094D\u0930|\u0915\u093E\u0930| \u092A\u094D|\u093E\u0930 |\u093F\u0915\u093E|\u094D\u092F\u0915|\u0927\u093F\u0915|\u0915 \u0905|\u094D\u0930\u0924|\u094D\u0924\u093F|\u0935\u094D\u092F| \u0905\u0927|\u0947\u0901 |\u0905\u0927\u093F|\u093F\u0915 | \u0935\u094D|\u0906\u02BC | \u0906\u02BC|\u0915\u094D\u0924|\u092F\u0915\u094D|\u0924\u093F\u0915|\u0915\u0947\u0901|\u0915 \u0935|\u092C\u093E\u0915|\u0915 \u0938|\u091B\u0948\u0915| \u091B\u0948|\u0924\u094D\u092F|\u092E\u0947 |\u0947\u0915 | \u0938\u092E|\u0915\u094D\u0937|\u0939\u093F |\u0930\u0924\u094D|\u0930 \u091B|\u092F\u0947\u0915|\u094D\u092F\u0947|\u0928\u094D\u0924|\u0935\u093E |\u093F\u0915\u0947|\u0915\u0964 |\u0948\u0915\u0964|\u0964 \u092A| \u0905\u092A| \u0938\u094D| \u0935\u093F| \u091C\u093E|\u093F\u0924 |\u0938\u0901 | \u0939\u094B|\u0915\u094B\u0928| \u0915\u094B|\u0924\u094D\u0930|\u0938\u094D\u0935| \u0935\u093E|\u0915 \u0906|\u0937\u094D\u091F| \u0915\u0930|\u0905\u092A\u0928|\u092E\u093E\u0928| \u0915\u093E| \u0905\u0928|\u0924\u093F |\u094D\u0924\u094D|\u0928\u094B |\u0928\u0939\u093F| \u092A\u0930|\u091F\u094D\u0930|\u094D\u092F | \u090F\u0939|\u093F \u0915|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937| \u0930\u093E|\u0938\u092E\u093E|\u094B\u0928\u094B|\u0932 \u091C| \u0928\u0939|\u0924\u093E\u0915|\u093E\u0930\u094D|\u092A\u0928 |\u0924\u0928\u094D|\u0935\u0924\u0928|\u094D\u0935\u0924|\u094D\u0937\u093E| \u0915\u090F| \u0938\u093E|\u094D\u0930\u0940| \u0928\u093F|\u093E \u0906|\u093F\u0935\u093E| \u0938\u0902| \u0926\u0947|\u091C\u093E\u090F|\u0940\u092F |\u0915\u0930\u092C|\u0925\u093E |\u090F\u092C\u093E|\u093E \u092A|\u0928\u093E |\u094D\u0935\u093E|\u0926\u0947\u0936|\u0924\u0964 |\u0930\u0915 |\u0915 \u0939|\u0901 \u0905| \u0938\u092D| \u0906 |\u0924 \u0915|\u091A\u093F\u0924|\u094D\u0924 |\u0935\u093E\u0930|\u0924\u093E |\u093E\u0930\u0915|\u092E\u093E\u091C|\u093E \u0938|\u0930\u0940\u092F|\u0928\u094D\u092F|\u0930\u0924\u093E|\u093E\u0928 |\u094D\u0930\u093E|\u094D\u092F\u093E|\u0930\u0915\u094D|\u093E\u0930\u0923|\u092A\u0930\u093F|\u090F\u0932 |\u0915\u090F\u0932|\u0905\u0928\u094D|\u0930\u092C\u093E|\u0915 \u092A|\u0913\u0930 |\u0906\u0913\u0930| \u0906\u0913|\u0905\u091B\u093F| \u0905\u091B|\u093F\u0930\u094D|\u093E\u0928\u094D|\u0928\u0915 |\u0939\u094B\u090F|\u0915\u0930 |\u0927\u093E\u0930|\u0938\u094D\u0925|\u093E \u0905|\u093F\u092E\u0947|\u0930 \u0906|\u090F\u0939\u093F| \u090F\u0915|\u0947 \u0938|\u0924\u0925\u093E| \u0924\u0925| \u092E\u093E|\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u092A\u094D\u0924|\u0930\u094D\u0935|\u0928\u093F\u0930|\u091A\u094D\u091B|\u0930\u094D\u092F|\u0901 \u0938|\u0915 \u0915|\u0939\u094B |\u093E\u0939\u093F|\u090F\u0924\u0964|\u0930 \u092A|\u093E\u092E\u093E|\u0938\u093E\u092E|\u0937\u093E |\u02BC \u0938|\u0901 \u090F|\u0948\u0915 |\u0926\u094D\u0927|\u0930 \u0905|\u0915 \u091C|\u0938\u094D\u0924|\u093E\u092A\u094D|\u0901 \u0915| \u0938\u0915|\u092F\u0915 |\u0915\u093E\u0928|\u0939\u0928 |\u090F\u0939\u0928|\u0947\u0932 |\u094B\u090F\u0924|\u0924 \u0906|\u093E \u0935|\u0964 \u0915|\u094D\u0924\u0930|\u093E\u090F\u0924|\u094D\u0930\u0915|\u0939\u0941 |\u0915 \u0909|\u092A\u0942\u0930|\u0935\u093F\u0935|\u02BC \u0905|\u091B\u093F | \u0932\u0947|\u0928 \u092A|\u093E\u0938 |\u0930\u093E\u092A|\u0927\u0915 |\u092A\u090F\u092C| \u092A\u090F|\u0930\u093E |\u092F\u0924\u093E|\u0930\u0942\u092A|\u0928 \u0935| \u0915\u0947|\u0937\u093E\u0915|\u092F \u092A|\u0924 \u0939|\u091C\u093E\u0939| \u0913 |\u092D\u093E\u0935|\u092A\u0930 |\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u0938\u092E\u094D|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0942\u0930\u094D|\u0930\u0924\u093F| \u0926\u094B|\u0938\u092D\u0915|\u0964 \u0938| \u091C\u0928|\u0938\u092D |\u092C\u093E\u0927|\u0905\u0928\u0941|\u093F\u0938\u0901| \u0938\u0939|\u0901 \u0935|\u090F \u0938|\u0930\u093F\u0935|\u0924\u0941 |\u0947\u0924\u0941|\u0939\u0947\u0924| \u0939\u0947|\u093E\u0927 |\u0947\u092C\u093E|\u0928 \u0938|\u093F\u0937\u094D|\u0930\u093E\u0927| \u0905\u0935|\u093F\u0924\u094D|\u0935\u093E\u0938|\u091A\u093E\u0930| \u0909\u091A|\u093E\u0930\u093E|\u0928 \u0915|\u0935\u0915 |\u093E \u0915|\u0928\u0942\u0928|\u093E\u0928\u0942|\u090F\u0924 |\u0930\u0940 |\u0947\u0913 |\u0915\u0947\u0913|\u0930\u0923 |\u094D\u0930\u0938|\u093F \u0926|\u0913 \u0935| \u092D\u0947|\u0928\u0939\u0941|\u094B\u0928\u0939|\u094D\u0925\u093F|\u092A\u0924\u094D|\u092E\u094D\u092A|\u0930\u093E\u091C| \u092D\u093E|\u0939\u093F\u092E| \u0939\u0915|\u093E\u092E\u0947|\u094D\u0923 |\u0930\u094D\u0923|\u0939\u093E\u0930|\u093F \u0938|\u0915 \u0926|\u0928 \u0905|\u0924 \u0905|\u0932\u0947\u092C| \u0905\u092D|\u093F\u0936\u094D|\u091C\u0915 |\u093E\u091C\u0915|\u0928 \u0906|\u0935\u093E\u0939|\u0915\u093E\u091C|\u0936\u094D\u092F|\u0935\u0938\u094D|\u0913\u0939\u093F| \u0913\u0939|\u092F\u094B\u0917|\u0964 \u090F|\u0915\u090F |\u0947 \u0913|\u0905\u092A\u0930",bho:" \u0915\u0947|\u0915\u0947 |\u0947 \u0915|\u093E\u0930 |\u0915\u093E\u0930|\u093F\u0915\u093E|\u0927\u093F\u0915|\u0905\u0927\u093F| \u0905\u0927|\u0913\u0930 |\u0906\u0913\u0930| \u0906\u0913|\u0947 \u0905|\u0947 \u0938|\u093E \u0915| \u0938\u0902|\u093F\u0915 |\u0930 \u0939|\u093E \u0938| \u0939\u094B|\u0930 \u0938|\u0947\u0902 |\u092E\u0947\u0902| \u092E\u0947| \u0915\u0930| \u0938\u0947|\u0928\u094B |\u0915\u094D\u0937|\u0938\u0947 | \u0915\u093E|\u0964 \u0938|\u0916\u0947 |\u093E\u0964 |\u0930\u093E | \u0938\u092E| \u0938\u092C|\u094D\u0930\u093E| \u0938\u0915|\u0930 \u0915|\u0928 \u0915|\u0935\u0947 |\u094C\u0928\u094B|\u0915\u094C\u0928| \u0915\u094C|\u091A\u093E\u0939| \u091A\u093E| \u092C\u093E|\u092A\u094D\u0930| \u092A\u094D|\u0925\u093E |\u093F \u0915|\u0924\u093F | \u091C\u093E| \u0938\u093E|\u0947 \u0906|\u092A\u0928 |\u0915\u0930\u0947|\u0924\u093E |\u0939\u094B\u0916|\u0924 \u0915|\u0947\u0964 |\u0947 \u092C|\u0924\u0925\u093E| \u0924\u0925| \u0906\u092A|\u0915\u0947\u0932|\u0938\u0915\u0947| \u0938\u094D|\u0930\u0947 |\u0938\u092C\u0939|\u0915\u0930 |\u0906\u092A\u0928|\u0947 \u0913|\u091C\u093E | \u092A\u0930|\u0937\u094D\u091F| \u0930\u093E|\u0928\u093E |\u0939\u0935\u0947| \u0939\u0935|\u0932\u093E |\u0947\u0932\u093E|\u092C\u0939\u093F| \u0913\u0915|\u094B\u0916\u0947|\u0930 \u092C|\u0939\u0964 | \u0939\u0964|\u0928 \u0938|\u093E\u0937\u094D|\u0930\u093E\u0937|\u094D\u0924 | \u0914\u0930|\u0947 \u091A|\u0964 \u0915|\u0938\u0902\u0917|\u0930 \u0906|\u091F\u094D\u0930|\u094D\u091F\u094D|\u0937\u093E |\u092E\u093E\u0928|\u093E \u0906|\u0902 \u0915|\u093E \u092A|\u094D\u0937\u093E|\u0930\u0915\u094D|\u0939\u0947 |\u093E\u0939\u0947|\u093E\u0924\u093F|\u093E\u0935\u0947| \u091C\u0947|\u0939\u0940 |\u0913\u0915\u0930|\u092E\u093F\u0932|\u093F\u0924 |\u094B \u0938|\u0932 \u091C|\u0907\u0916\u0947|\u0928\u0907\u0916| \u0928\u0907|\u0924\u094D\u0930|\u092E\u093E\u091C| \u092C\u093F|\u0935\u0947\u0964|\u0947 \u091C|\u0915 \u0938|\u093F\u0902 |\u0939\u093F\u0902|\u0915\u0930\u093E|\u0914\u0930 |\u0947 \u092E|\u0938\u092E\u093E|\u0939\u0941 | \u0913 |\u092A\u0930 |\u0947 \u0928|\u0938\u094D\u0925|\u0930\u0940\u092F|\u094D\u0930\u0940|\u0932\u093E\u0964|\u093E\u091C |\u093E\u0928 |\u0915\u093E\u0928|\u0947 \u0924|\u093F\u0930 |\u0924\u093F\u0930|\u0916\u093E\u0924| \u0916\u093E|\u0947 \u0909|\u0928\u0942\u0928|\u093E\u0928\u0942|\u093E\u092E | \u0938\u0941| \u0926\u0947|\u0940 \u0915| \u092E\u093E|\u0930 \u092E|\u092A\u094D\u0924|\u093F\u092F\u093E|\u093E\u0939\u0940|\u092C\u093E\u0964|\u092F\u094B\u0917|\u0940 \u0938|\u0932 \u0939|\u0942\u0928 |\u0935\u094D\u092F|\u0941 \u0915|\u090F \u0915|\u0947 \u0935|\u0902\u0924\u094D|\u0938\u094D\u0935|\u0915\u0947\u0939|\u0940\u092F |\u0916\u0932 |\u0938\u093E\u092E|\u092F\u0924\u093E|\u0924\u093F\u0915|\u0947 \u0939|\u093E\u092A\u094D|\u0930\u093E\u092A|\u0930 \u092A|\u0930 \u0905| \u0932\u094B| \u0938\u0939|\u091C\u0947 |\u094B\u0917 |\u092E \u0915|\u0932\u0947 | \u0928\u093F|\u0947\u0915\u0930|\u093E \u0939|\u092A\u0942\u0930|\u0930 \u0928|\u0947\u0939\u0941|\u094D\u092F |\u092F\u093E | \u092F\u093E|\u0926\u0947\u0936|\u0926\u0940 |\u093E \u092E|\u093E\u0935 | \u0926\u094B|\u0947 \u0926| \u092A\u093E|\u0939\u093F |\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u092C\u093E |\u093F\u0932 | \u0909\u092A|\u094D\u0930\u0924| \u0935\u093F| \u0939\u0940| \u0932\u0947|\u0930\u094B |\u0947 \u0916|\u0920\u0928 |\u0917\u0920\u0928|\u0902\u0917\u0920| \u092E\u093F|\u0937\u0923 |\u094D\u0937\u0923|\u0902\u0930\u0915|\u0938\u0902\u0930| \u0906\u0926| \u090F\u0915|\u0928\u0947 | \u0905\u092A|\u0924\u0902\u0924|\u0935\u0924\u0902|\u094D\u0935\u0924|\u094D\u0924\u0930|\u094D\u092F\u093E|\u0947\u0936 |\u093E\u0926\u0940|\u094D\u0924\u093F|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0915 \u0906|\u094D\u092E |\u091A\u093E\u0930| \u0909\u091A| \u0936\u093E|\u0930\u0940 |\u093E\u0939 |\u092F\u093E\u0939|\u092C\u093F\u092F|\u091A\u093F\u0924|\u0915\u094D\u0924|\u092A\u092F\u094B|\u0909\u092A\u092F|\u0930\u0924\u093E|\u0930 \u0935|\u0928 \u092E|\u0932\u094B\u0917|\u0939 \u0915|\u0928 \u092A|\u0915\u093E\u092E| \u092A\u0942| \u0907 |\u0906\u0926\u093F|\u0908\u0932 | \u0915\u0908| \u0935\u094D|\u092E\u0940 |\u0941\u0930\u0915|\u0938\u0941\u0930| \u091C\u0940|\u0927\u093E\u0930|\u092F \u0938|\u0924\u0930\u094D|\u092D\u0947 |\u0938\u092D\u0947| \u0938\u092D|\u092D\u093E\u0935|\u094D\u0925\u093F|\u093E\u092E\u093E|\u0938\u0930 |\u0930\u094D\u092E| \u0915\u094B| \u092C\u0947|\u094B\u0938\u0930|\u0926\u094B\u0938|\u0923 \u0915|\u093E\u0938 |\u0947 \u092A|\u091C\u093E\u0926|\u0906\u091C\u093E| \u0906\u091C|\u0909\u091A\u093F|\u0917 \u0915|\u093E\u0930\u0940| \u091C\u0930|\u0917\u0947 |\u091C \u0915|\u0940 \u092C|\u0938\u0928 |\u0939\u094B |\u093E \u0924",npi:"\u0915\u094B |\u0928\u0947 | \u0930 |\u093E\u0930 |\u0915\u094D\u0924|\u0915\u093E\u0930|\u092A\u094D\u0930| \u092A\u094D|\u094D\u092F\u0915|\u0935\u094D\u092F| \u0917\u0930|\u093F\u0915\u093E| \u0935\u094D|\u094D\u0930\u0924|\u0927\u093F\u0915|\u094D\u0924\u093F|\u092F\u0915\u094D|\u0905\u0927\u093F| \u0905\u0927|\u093E\u0908 |\u092E\u093E |\u0932\u093E\u0908|\u0924\u094D\u092F|\u093F\u0915 | \u0964 | \u0938\u092E|\u0935\u093E | \u0935\u093E|\u0915 \u0935|\u094D\u0928\u0947|\u0930\u094D\u0928|\u0917\u0930\u094D|\u0928\u094D\u0924|\u091B \u0964|\u0924\u093F\u0932|\u0930\u0924\u094D|\u0924\u094D\u0930|\u0947\u0915 |\u092F\u0947\u0915|\u094D\u092F\u0947|\u093F\u0932\u093E|\u0930 \u0938|\u094B \u0938| \u0938\u094D|\u092E\u093E\u0928|\u0915\u094D\u0937| \u0935\u093F|\u0939\u0941\u0928|\u093E \u0938| \u0939\u0941| \u091B |\u0930 \u091B|\u094D\u0924\u094D|\u0938\u092E\u093E|\u0938\u094D\u0935|\u0964 \u092A| \u0938\u0902|\u0928\u0947\u091B|\u0941\u0928\u0947|\u0939\u0930\u0941|\u0924\u0928\u094D|\u0935\u0924\u0928|\u0947 \u0905|\u093F\u0928\u0947|\u094B \u0905|\u094D\u0935\u0924| \u0915\u093E|\u0947 \u091B|\u0917\u0930\u093F| \u0930\u093E|\u094D\u0930 |\u0924\u093F |\u093E\u0915\u094B| \u0915\u0941|\u0937\u094D\u091F|\u0928\u093E |\u0938\u094D\u0924|\u0915 \u0938|\u0941\u0928\u0948|\u0915\u0941\u0928|\u091F\u094D\u0930|\u0932\u0947 | \u0928\u093F|\u093E\u0928 |\u091B\u0948\u0928| \u091B\u0948|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0924\u093F\u0915|\u091B\u0964 |\u093E\u0930\u094D|\u0924\u093E |\u093F\u0924 |\u0928\u0948 |\u093E \u0905| \u0938\u093E|\u093E \u0935|\u0930\u0941 | \u092E\u093E| \u0905\u0928|\u093E \u0930|\u0930\u0924\u093E|\u0930 \u0930|\u0939\u0930\u0942|\u0947\u091B |\u093E \u092A|\u0930\u0915\u094D|\u094D\u0924 | \u092A\u0930|\u0925\u093E | \u0932\u093E|\u092A\u0930\u093F|\u0926\u0947\u0936|\u0938\u0915\u094B| \u092F\u0938|\u092E\u093E\u091C|\u093E\u092E\u093E|\u094D\u0930\u093E|\u093F\u0935\u093E|\u093E\u0939\u0930|\u094B \u092A|\u094D\u092F |\u0935\u093E\u0930|\u0928 \u0938|\u0964 \u0915|\u0928\u093F |\u094D\u0937\u093E| \u0924\u094D|\u0926\u094D\u0927|\u0930 \u0939|\u0924\u0925\u093E| \u0924\u0925|\u092F\u0938\u094D|\u094D\u092F\u0938|\u0930\u0940 |\u0930 \u0935|\u092A\u0928\u093F|\u0930\u093F\u0928|\u0902\u0930\u0915|\u0938\u0902\u0930|\u092D\u093E\u0935|\u0948 \u0935|\u0938\u092C\u0948| \u0938\u092C| \u0936\u093F| \u0938\u0939|\u0924\u093E\u0915|\u0947 \u0930|\u0924 \u0930|\u0932\u093E\u0917| \u0938\u0941|\u094D\u0937\u0923|\u0926\u094D\u0926| \u0905\u092A|\u0948\u0928 |\u094B \u0935|\u093F\u0915\u094D|\u093E\u0935 |\u0927\u093E\u0930|\u094D\u092F\u093E|\u094D\u0930\u093F|\u093E \u092D|\u090F\u0915\u094B|\u0930 \u092E|\u0928 \u0905|\u094B \u0932| \u0909\u0938|\u0936\u093F\u0915|\u093E\u0924\u094D|\u0938\u094D\u0925|\u0935\u093E\u0939|\u0942\u0930\u094D|\u0936\u094D\u092F|\u093F\u0924\u094D|\u0930\u0915\u094B|\u093E\u0930\u0915|\u0941\u0926\u094D|\u0924\u094B |\u094D\u0924\u094B|\u093E\u0909\u0928|\u0915\u093E\u0928|\u093F\u090F\u0915|\u093E \u0928| \u092A\u0928|\u0928\u0964 |\u0948\u0928\u0964|\u0915\u093E |\u0947\u091B\u0964| \u092D\u0947|\u0930\u094D\u092F|\u0938\u092E\u094D|\u0924\u094D\u092A|\u0938\u093E\u092E|\u0930\u093F\u092F|\u091A\u093E\u0930|\u0928\u093F\u091C|\u0941\u0928 |\u0917\u093F |\u093E\u0917\u093F|\u0909\u0938\u0915| \u092E\u0924| \u0905\u092D|\u092A\u0942\u0930|\u0930 \u0924| \u0938\u0915|\u0938\u093E\u0930|\u0930\u093E\u0927|\u092A\u0930\u093E|\u0905\u092A\u0930|\u0941\u0915\u094D|\u091C\u0915\u094B| \u0909\u092A|\u0930\u093E |\u093E\u0930\u093E|\u094D\u0935\u093E|\u0935\u093F\u0927|\u094D\u0928 |\u093E \u0924|\u0928 \u0917|\u0923\u0915\u094B| \u092A\u093E| \u0926\u093F|\u0915 \u0930|\u0930 \u092A|\u0905\u0928\u094D|\u092D\u0947\u0926|\u093E\u0930\u092E|\u094B \u0906| \u0905\u0930|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093F\u092F |\u0937\u093E |\u093E\u091F |\u092C\u093E\u091F| \u092C\u093E|\u093F \u0930| \u091B\u0964|\u0924\u094D\u0935|\u0924 \u0938|\u0930\u0942 |\u091B \u0930|\u0930\u0915\u093E|\u0935\u093F\u0915|\u0930 \u0909|\u094B\u0917 |\u094D\u0926\u0947|\u0930\u093F\u0935|\u0938\u0915\u093F|\u0948 \u092A|\u0930\u0924\u093F|\u0905\u0928\u0941| \u0906\u0935|\u092F\u0941\u0915|\u093E \u0917|\u0928\u092E\u093E|\u092F\u094B\u0917|\u0917 \u0917|\u0915 \u0905|\u0926\u094D\u0935|\u094D\u0927 |\u0930\u0941\u0926| \u092C\u093F|\u0964 \u0938|\u0909\u0928\u0947|\u093E\u0928\u094D|\u093E \u092E|\u093F\u0915\u094B|\u0930\u094D\u0926|\u093E\u0930\u0940|\u094D\u0924\u0930|\u094B \u0939|\u0939\u093F\u0924| \u0926\u0947|\u0930\u093F\u0915|\u093E \u0915| \u0906\u0927|\u0930\u093E\u091C|\u0930\u094D\u092E|\u094D\u0923 |\u0930\u094D\u0923|\u093F \u0935|\u094D\u092F\u0935|\u0935\u093F\u091A|\u092C\u0948 |\u0938\u0939\u093F|\u0930\u094B\u091C|\u0930\u094D\u0938|\u0908 \u0909|\u094D\u092A |\u0930\u093E\u0924|\u0928\u093F\u0915|\u092E\u093F\u0915|\u091A\u094D\u091B|\u094D\u0925\u093E|\u0935\u093F\u0935|\u0915\u0924\u093E|\u0905\u092D\u093F|\u094D\u0927\u093E",mag:" \u0915\u0947|\u0915\u0947 |\u093E\u0930 | \u0939\u0908|\u0915\u093E\u0930|\u0908\u0964 |\u0939\u0908\u0964|\u093F\u0915\u093E|\u0947 \u0905|\u0927\u093F\u0915|\u0905\u0927\u093F| \u0905\u0927|\u0930 \u0939|\u0947 \u0915|\u0914\u0930 | \u0914\u0930|\u093E \u0915|\u0947 \u0938|\u0938\u092C | \u0938\u092C| \u0915\u0930|\u0947\u0902 |\u0925\u093E |\u092E\u0947\u0902| \u092E\u0947|\u0924\u0925\u093E| \u0924\u0925|\u093F\u0915 | \u0939\u094B| \u0938\u092E|\u0915\u094D\u0937|\u0928\u093E |\u092C \u0915|\u0930 \u0938| \u0938\u0902|\u093E \u0938|\u0915\u0930 | \u092D\u0940|\u0964 \u0938| \u0938\u093E| \u0938\u0947| \u0915\u093E| \u0905\u092A|\u094D\u0930\u093E|\u092A\u094D\u0930| \u092A\u094D|\u0938\u0947 |\u092D\u0940 | \u0915\u094B|\u0924 \u0915| \u092A\u0930|\u0930\u093E |\u0915 \u0939|\u092A\u0928 |\u0905\u092A\u0928| \u0938\u0915|\u092F\u093E |\u0924\u093F |\u0930 \u0915|\u0940 \u0915| \u092F\u093E|\u0915\u0930\u0947| \u091C\u093E|\u0930\u0947 | \u0913\u0915|\u094D\u0924 |\u0938\u0915 |\u0928\u094B |\u093E\u0928 |\u092E\u093E\u0928|\u0913\u0915\u0930|\u093E \u092A|\u0928 \u0915|\u0947\u0932 | \u0928\u093E|\u0964 \u0915|\u0930\u0915\u094D| \u0938\u094D|\u0939\u0940 |\u0939\u094B\u090F| \u090F\u0915|\u092A\u0930 |\u0926\u0940 |\u091F\u094D\u0930|\u0924\u093E |\u0935\u094D\u092F|\u0939\u0908 | \u0936\u093E|\u0947 \u0909| \u0926\u0947|\u0924\u094D\u0930|\u093E\u0926\u0940| \u0930\u093E| \u0939\u0940|\u0915\u093E\u0928|\u093F\u0924 |\u092E \u0915|\u0932 \u091C|\u093E\u092E |\u0940 \u0938|\u0947 \u092D|\u0928 \u0938|\u092E\u093E\u091C|\u0937\u094D\u091F|\u0937\u093E | \u0932\u0947|\u0915 \u0938|\u092C\u0947 |\u0935\u0947 |\u093E\u0935\u0947|\u092E\u093F\u0932|\u0930 \u092E|\u094D\u092F |\u093E \u0939|\u0932\u093E |\u092A\u094D\u0924|\u0928\u0942\u0928|\u093E\u0928\u0942|\u091C\u093E |\u0947\u0915\u0930|\u094D\u0937\u093E|\u094D\u0930\u0924|\u0902\u0924\u094D|\u0930 \u0914|\u094B\u0908 |\u0915\u094B\u0908|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937| \u092E\u093E|\u0930\u094B | \u091C\u0947|\u0915\u0930\u093E|\u094B\u090F |\u093E\u092A\u094D|\u0930\u093E\u092A|\u0938\u092E\u093E|\u0942\u0928 |\u094B \u0938|\u0938\u094D\u0935|\u094D\u0924\u093F|\u0938\u093E\u092E|\u094B\u0928\u094B|\u0915\u094B\u0928| \u0935\u094D|\u0930 \u0905|\u094D\u092E | \u0935\u093F| \u0938\u0939|\u0947 \u092E|\u0915\u094D\u0924|\u092F\u094B\u0917|\u0930 \u0935|\u0915\u093E\u092E|\u0932 \u0939| \u0928\u093F|\u0926\u0947\u0936|\u092A\u0942\u0930|\u0935\u093E\u0930| \u0907 |\u0902\u0930\u0915|\u0938\u0902\u0930|\u090F \u0915|\u0930 \u092A| \u0938\u0941|\u0924\u0902\u0924|\u0935\u0924\u0902|\u094D\u0935\u0924|\u093E \u092E|\u0935 \u0915|\u0947 \u0935|\u093E\u0925 |\u0938\u093E\u0925| \u0926\u094B|\u0939\u094B\u092C| \u092A\u093E|\u094B \u0915|\u0947 \u092C|\u094B\u0917 | \u0909\u092A|\u0938\u094D\u0924|\u092A\u0930\u093F|\u0928 \u092A|\u0947 \u0924|\u094D\u0924\u0930|\u0932\u0947\u0932|\u0947 \u0913|\u091A\u093E\u0939| \u091A\u093E|\u092F \u0915|\u0935\u093E |\u0947\u0936 |\u092F \u0938|\u0928 \u0939|\u0937\u0923 |\u093E \u092C|\u0964 \u0924|\u090F\u0915 |\u090F\u0932 |\u0940\u092F |\u0915\u0947\u0915|\u0947 \u0939|\u0930 \u0906|\u093F \u0915|\u0938\u094D\u0925|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093E\u092E\u093E|\u0930\u0940\u092F|\u094D\u0930\u0940|\u0924\u093F\u0915|\u093E\u0924\u093F| \u092C\u093F|\u091A\u093E\u0930|\u0947 \u0906|\u093E\u0938 | \u0909\u091A|\u093E \u0924|\u092F\u0915\u094D|\u094D\u092F\u0915|\u093F\u0932 |\u092E\u092F |\u0938\u092E\u092F|\u0936\u093E\u0926|\u092A\u092F\u094B|\u0909\u092A\u092F|\u0947 \u0916|\u0930\u093F\u0935| \u092A\u0942|\u0947 \u0932|\u0947 \u091A|\u094C\u0928\u094B|\u0915\u094C\u0928| \u0915\u094C|\u0902 \u0915|\u0938\u0902\u0917|\u0928 \u0926|\u0902 \u0938|\u0923 \u092A|\u094D\u0937\u0923|\u0930 \u0928|\u0947 \u0928|\u094B \u092D|\u0915\u0930\u094B|\u093E \u0914|\u0930\u0924\u093E|\u093E\u0935 |\u092D\u093E\u0935|\u0915 \u0914|\u0930\u094D\u092E|\u094B\u0938\u0930|\u0926\u094B\u0938|\u0923 \u0915|\u0947 \u092A|\u0928 \u0914|\u092C \u0939|\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u093E\u092C\u0947|\u0928\u093F\u092F|\u091A\u093F\u0924|\u0909\u091A\u093F|\u093F\u0924\u094D|\u0917 \u0915|\u0947\u0964 |\u0924 \u0938|\u0940 \u0936|\u0902 \u0936|\u090F\u0915\u0930|\u0964 \u090F|\u0924\u0928 | \u0913 |\u0930\u0940 |\u094D\u0930 |\u091C\u0947 |\u0915 \u0915| \u0938\u0940|\u0938\u0928 |\u093F\u0935\u093E| \u0905\u0928|\u0942\u0930\u093E| \u092C\u091A|\u090F\u0964 | \u092C\u0947|\u0924 \u0939| \u0924\u0915| \u092E\u093F|\u0927\u093E\u0930|\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u093F\u0932\u093E|\u094D\u0935\u093E|\u093F \u092E| \u0906\u0926|\u0928\u0947 |\u0915\u090F\u0932| \u0915\u090F|\u094D\u092F\u093E"}},Wo=2048,Ho=10,Ja=300,g0={}.hasOwnProperty,Hu,p0={};for(Hu in nt)if(g0.call(nt,Hu)){let e=nt[Hu],u;p0[Hu]={};for(u in e)if(g0.call(e,u)){let t=e[u].split("|"),a={},n=t.length;for(;n--;)a[t[n]]=n;p0[Hu][u]=a}}function Za(e,u={}){let t=[...u.whitelist||[],...u.only||[]],a=[...u.blacklist||[],...u.ignore||[]],n=u.minLength!==null&&u.minLength!==void 0?u.minLength:Ho;if(!e||e.length<n)return rt();e=e.slice(0,Wo);let r=Go(e,qo);return!r[0]||!(r[0]in p0)?!r[0]||r[1]===0||!Qa(r[0],t,a)?rt():Xa(r[0]):Ko(e,$o(Ya(e),p0[r[0]],t,a))}function Ko(e,u){let t=u[0][1],a=e.length*Ja-t,n=-1;for(;++n<u.length;)u[n][1]=1-(u[n][1]-t)/a||0;return u}function Go(e,u){let t=-1,a,n;for(n in u)if(g0.call(u,n)){let r=Vo(e,u[n]);r>t&&(t=r,a=n)}return[a,t]}function Vo(e,u){let t=e.match(u);return(t?t.length:0)/e.length||0}function $o(e,u,t,a){u=Jo(u,t,a);let n=[],r;if(u)for(r in u)g0.call(u,r)&&n.push([r,Yo(e,u[r])]);return n.length===0?rt():n.sort(Zo)}function Yo(e,u){let t=0,a=-1;for(;++a<e.length;){let n=e[a],r=Ja;n[0]in u&&(r=n[1]-u[n[0]]-1,r<0&&(r=-r)),t+=r}return t}function Jo(e,u,t){if(u.length===0&&t.length===0)return e;let a={},n;for(n in e)Qa(n,u,t)&&(a[n]=e[n]);return a}function Qa(e,u,t){return u.length===0&&t.length===0?!0:(u.length===0||u.includes(e))&&!t.includes(e)}function rt(){return Xa("und")}function Xa(e){return[[e,1]]}function Zo(e,u){return e[1]-u[1]}var Qo=new String("\u4E07\u4E0E\u4E11\u4E13\u4E1A\u4E1B\u4E1C\u4E1D\u4E22\u4E24\u4E25\u4E27\u4E2A\u4E2C\u4E30\u4E34\u4E3A\u4E3D\u4E3E\u4E48\u4E49\u4E4C\u4E50\u4E54\u4E60\u4E61\u4E66\u4E70\u4E71\u4E89\u4E8E\u4E8F\u4E91\u4E98\u4E9A\u4EA7\u4EA9\u4EB2\u4EB5\u4EB8\u4EBF\u4EC5\u4ECE\u4ED1\u4ED3\u4EEA\u4EEC\u4EF7\u4F17\u4F18\u4F19\u4F1A\u4F1B\u4F1E\u4F1F\u4F20\u4F24\u4F25\u4F26\u4F27\u4F2A\u4F2B\u4F53\u4F59\u4F63\u4F65\u4FA0\u4FA3\u4FA5\u4FA6\u4FA7\u4FA8\u4FA9\u4FAA\u4FAC\u4FE3\u4FE6\u4FE8\u4FE9\u4FEA\u4FED\u503A\u503E\u506C\u507B\u507E\u507F\u50A5\u50A7\u50A8\u50A9\u513F\u5151\u5156\u515A\u5170\u5173\u5174\u5179\u517B\u517D\u5181\u5185\u5188\u518C\u5199\u519B\u519C\u51A2\u51AF\u51B2\u51B3\u51B5\u51BB\u51C0\u51C4\u51C9\u51CC\u51CF\u51D1\u51DB\u51E0\u51E4\u51EB\u51ED\u51EF\u51FB\u51FC\u51FF\u520D\u5212\u5218\u5219\u521A\u521B\u5220\u522B\u522C\u522D\u523D\u523F\u5240\u5242\u5250\u5251\u5265\u5267\u529D\u529E\u52A1\u52A2\u52A8\u52B1\u52B2\u52B3\u52BF\u52CB\u52D0\u52DA\u5300\u5326\u532E\u533A\u533B\u534E\u534F\u5355\u5356\u5362\u5364\u5367\u536B\u5374\u537A\u5382\u5385\u5386\u5389\u538B\u538C\u538D\u5395\u53A2\u53A3\u53A6\u53A8\u53A9\u53AE\u53BF\u53C2\u53C6\u53C7\u53CC\u53D1\u53D8\u53D9\u53E0\u53F6\u53F7\u53F9\u53FD\u5401\u540E\u5413\u5415\u5417\u5423\u5428\u542C\u542F\u5434\u5452\u5453\u5455\u5456\u5457\u5458\u5459\u545B\u545C\u548F\u5494\u5499\u549B\u549D\u54A4\u54B4\u54B8\u54CC\u54CD\u54D1\u54D2\u54D3\u54D4\u54D5\u54D7\u54D9\u54DC\u54DD\u54DF\u551B\u551D\u5520\u5521\u5522\u5523\u5524\u553F\u5567\u556C\u556D\u556E\u5570\u5574\u5578\u55B7\u55BD\u55BE\u55EB\u5475\u55F3\u5618\u5624\u5631\u565C\u567C\u56A3\u56AF\u56E2\u56ED\u56F1\u56F4\u56F5\u56FD\u56FE\u5706\u5723\u5739\u573A\u5742\u574F\u5757\u575A\u575B\u575C\u575D\u575E\u575F\u5760\u5784\u5785\u5786\u5792\u57A6\u57A7\u57A9\u57AB\u57AD\u57AF\u57B1\u57B2\u57B4\u57D8\u57D9\u57DA\u57DD\u57EF\u5811\u5815\u5846\u5899\u58EE\u58F0\u58F3\u58F6\u58F8\u5904\u5907\u590D\u591F\u5934\u5938\u5939\u593A\u5941\u5942\u594B\u5956\u5965\u5986\u5987\u5988\u59A9\u59AA\u59AB\u59D7\u59DC\u5A04\u5A05\u5A06\u5A07\u5A08\u5A31\u5A32\u5A34\u5A73\u5A74\u5A75\u5A76\u5AAA\u5AD2\u5AD4\u5AF1\u5B37\u5B59\u5B66\u5B6A\u5B81\u5B9D\u5B9E\u5BA0\u5BA1\u5BAA\u5BAB\u5BBD\u5BBE\u5BDD\u5BF9\u5BFB\u5BFC\u5BFF\u5C06\u5C14\u5C18\u5C27\u5C34\u5C38\u5C3D\u5C42\u5C43\u5C49\u5C4A\u5C5E\u5C61\u5C66\u5C7F\u5C81\u5C82\u5C96\u5C97\u5C98\u5C99\u5C9A\u5C9B\u5CAD\u5CB3\u5CBD\u5CBF\u5CC3\u5CC4\u5CE1\u5CE3\u5CE4\u5CE5\u5CE6\u5D02\u5D03\u5D04\u5D2D\u5D58\u5D5A\u5D5B\u5D5D\u5D74\u5DC5\u5DE9\u5DEF\u5E01\u5E05\u5E08\u5E0F\u5E10\u5E18\u5E1C\u5E26\u5E27\u5E2E\u5E31\u5E3B\u5E3C\u5E42\u5E5E\u5E72\u5E76\u5E7F\u5E84\u5E86\u5E90\u5E91\u5E93\u5E94\u5E99\u5E9E\u5E9F\u5EBC\u5EEA\u5F00\u5F02\u5F03\u5F20\u5F25\u5F2A\u5F2F\u5F39\u5F3A\u5F52\u5F53\u5F55\u5F5F\u5F66\u5F7B\u5F84\u5F95\u5FA1\u5FC6\u5FCF\u5FE7\u5FFE\u6000\u6001\u6002\u6003\u6004\u6005\u6006\u601C\u603B\u603C\u603F\u604B\u6073\u6076\u6078\u6079\u607A\u607B\u607C\u607D\u60A6\u60AB\u60AC\u60AD\u60AF\u60CA\u60E7\u60E8\u60E9\u60EB\u60EC\u60ED\u60EE\u60EF\u610D\u6120\u6124\u6126\u613F\u6151\u616D\u61B7\u61D1\u61D2\u61D4\u6206\u620B\u620F\u6217\u6218\u622C\u6237\u624E\u6251\u6266\u6267\u6269\u626A\u626B\u626C\u6270\u629A\u629B\u629F\u62A0\u62A1\u62A2\u62A4\u62A5\u62C5\u62DF\u62E2\u62E3\u62E5\u62E6\u62E7\u62E8\u62E9\u6302\u631A\u631B\u631C\u631D\u631E\u631F\u6320\u6321\u6322\u6323\u6324\u6325\u6326\u635E\u635F\u6361\u6362\u6363\u636E\u637B\u63B3\u63B4\u63B7\u63B8\u63BA\u63BC\u63F8\u63FD\u63FF\u6400\u6401\u6402\u6405\u643A\u6444\u6445\u6446\u6447\u6448\u644A\u6484\u6491\u64B5\u64B7\u64B8\u64BA\u64DE\u6512\u654C\u655B\u6570\u658B\u6593\u6597\u65A9\u65AD\u65E0\u65E7\u65F6\u65F7\u65F8\u6619\u663C\u663D\u663E\u664B\u6652\u6653\u6654\u6655\u6656\u6682\u66A7\u672D\u672F\u6734\u673A\u6740\u6742\u6743\u6761\u6765\u6768\u6769\u6770\u6781\u6784\u679E\u67A2\u67A3\u67A5\u67A7\u67A8\u67AA\u67AB\u67AD\u67DC\u67E0\u67FD\u6800\u6805\u6807\u6808\u6809\u680A\u680B\u680C\u680E\u680F\u6811\u6816\u6837\u683E\u684A\u6860\u6861\u6862\u6863\u6864\u6865\u6866\u6867\u6868\u6869\u68A6\u68BC\u68BE\u68C0\u68C2\u6901\u691F\u6920\u6924\u692D\u697C\u6984\u6987\u6988\u6989\u69DA\u69DB\u69DF\u69E0\u6A2A\u6A2F\u6A31\u6A65\u6A71\u6A79\u6A7C\u6A90\u6AA9\u6B22\u6B24\u6B27\u6B7C\u6B81\u6B87\u6B8B\u6B92\u6B93\u6B9A\u6BA1\u6BB4\u6BC1\u6BC2\u6BD5\u6BD9\u6BE1\u6BF5\u6C07\u6C14\u6C22\u6C29\u6C32\u6C47\u6C49\u6C61\u6C64\u6C79\u6C93\u6C9F\u6CA1\u6CA3\u6CA4\u6CA5\u6CA6\u6CA7\u6CA8\u6CA9\u6CAA\u6CB5\u6CDE\u6CEA\u6CF6\u6CF7\u6CF8\u6CFA\u6CFB\u6CFC\u6CFD\u6CFE\u6D01\u6D12\u6D3C\u6D43\u6D45\u6D46\u6D47\u6D48\u6D49\u6D4A\u6D4B\u6D4D\u6D4E\u6D4F\u6D50\u6D51\u6D52\u6D53\u6D54\u6D55\u6D82\u6D8C\u6D9B\u6D9D\u6D9E\u6D9F\u6DA0\u6DA1\u6DA2\u6DA3\u6DA4\u6DA6\u6DA7\u6DA8\u6DA9\u6DC0\u6E0A\u6E0C\u6E0D\u6E0E\u6E10\u6E11\u6E14\u6E16\u6E17\u6E29\u6E38\u6E7E\u6E7F\u6E83\u6E85\u6E86\u6E87\u6ED7\u6EDA\u6EDE\u6EDF\u6EE0\u6EE1\u6EE2\u6EE4\u6EE5\u6EE6\u6EE8\u6EE9\u6EEA\u6F24\u6F46\u6F47\u6F4B\u6F4D\u6F5C\u6F74\u6F9C\u6FD1\u6FD2\u704F\u706D\u706F\u7075\u707E\u707F\u7080\u7089\u7096\u709C\u709D\u70B9\u70BC\u70BD\u70C1\u70C2\u70C3\u70DB\u70DF\u70E6\u70E7\u70E8\u70E9\u70EB\u70EC\u70ED\u7115\u7116\u7118\u7145\u7173\u7198\u7231\u7237\u724D\u7266\u7275\u727A\u728A\u729F\u72B6\u72B7\u72B8\u72B9\u72C8\u72CD\u72DD\u72DE\u72EC\u72ED\u72EE\u72EF\u72F0\u72F1\u72F2\u7303\u730E\u7315\u7321\u732A\u732B\u732C\u732E\u736D\u7391\u7399\u739A\u739B\u73AE\u73AF\u73B0\u73B1\u73BA\u73C9\u73CF\u73D0\u73D1\u73F0\u73F2\u740E\u740F\u7410\u743C\u7476\u7477\u7487\u748E\u74D2\u74EE\u74EF\u7535\u753B\u7545\u7572\u7574\u7596\u7597\u759F\u75A0\u75A1\u75AC\u75AE\u75AF\u75B1\u75B4\u75C8\u75C9\u75D2\u75D6\u75E8\u75EA\u75EB\u75F4\u7605\u7606\u7617\u7618\u762A\u762B\u763E\u763F\u765E\u7663\u766B\u766F\u7691\u76B1\u76B2\u76CF\u76D0\u76D1\u76D6\u76D7\u76D8\u770D\u7726\u772C\u7740\u7741\u7750\u7751\u7792\u77A9\u77EB\u77F6\u77FE\u77FF\u7800\u7801\u7816\u7817\u781A\u781C\u783A\u783B\u783E\u7840\u7841\u7845\u7855\u7856\u7857\u7859\u785A\u786E\u7877\u788D\u789B\u789C\u78B1\u78B9\u78D9\u793C\u794E\u7962\u796F\u7977\u7978\u7980\u7984\u7985\u79BB\u79C3\u79C6\u79CD\u79EF\u79F0\u79FD\u79FE\u7A06\u7A0E\u7A23\u7A33\u7A51\u7A77\u7A83\u7A8D\u7A91\u7A9C\u7A9D\u7AA5\u7AA6\u7AAD\u7AD6\u7ADE\u7B03\u7B0B\u7B14\u7B15\u7B3A\u7B3C\u7B3E\u7B51\u7B5A\u7B5B\u7B5C\u7B5D\u7B79\u7B7E\u7B80\u7B93\u7BA6\u7BA7\u7BA8\u7BA9\u7BAA\u7BAB\u7BD1\u7BD3\u7BEE\u7BF1\u7C16\u7C41\u7C74\u7C7B\u7C7C\u7C9C\u7C9D\u7CA4\u7CAA\u7CAE\u7CC1\u7CC7\u7D27\u7D77\u7E9F\u7EA0\u7EA1\u7EA2\u7EA3\u7EA4\u7EA5\u7EA6\u7EA7\u7EA8\u7EA9\u7EAA\u7EAB\u7EAC\u7EAD\u7EAE\u7EAF\u7EB0\u7EB1\u7EB2\u7EB3\u7EB4\u7EB5\u7EB6\u7EB7\u7EB8\u7EB9\u7EBA\u7EBB\u7EBC\u7EBD\u7EBE\u7EBF\u7EC0\u7EC1\u7EC2\u7EC3\u7EC4\u7EC5\u7EC6\u7EC7\u7EC8\u7EC9\u7ECA\u7ECB\u7ECC\u7ECD\u7ECE\u7ECF\u7ED0\u7ED1\u7ED2\u7ED3\u7ED4\u7ED5\u7ED6\u7ED7\u7ED8\u7ED9\u7EDA\u7EDB\u7EDC\u7EDD\u7EDE\u7EDF\u7EE0\u7EE1\u7EE2\u7EE3\u7EE4\u7EE5\u7EE6\u7EE7\u7EE8\u7EE9\u7EEA\u7EEB\u7EEC\u7EED\u7EEE\u7EEF\u7EF0\u7EF1\u7EF2\u7EF3\u7EF4\u7EF5\u7EF6\u7EF7\u7EF8\u7EF9\u7EFA\u7EFB\u7EFC\u7EFD\u7EFE\u7EFF\u7F00\u7F01\u7F02\u7F03\u7F04\u7F05\u7F06\u7F07\u7F08\u7F09\u7F0A\u7F0B\u7F0C\u7F0D\u7F0E\u7F0F\u7F10\u7F11\u7F12\u7F13\u7F14\u7F15\u7F16\u7F17\u7F18\u7F19\u7F1A\u7F1B\u7F1C\u7F1D\u7F1E\u7F1F\u7F20\u7F21\u7F22\u7F23\u7F24\u7F25\u7F26\u7F27\u7F28\u7F29\u7F2A\u7F2B\u7F2C\u7F2D\u7F2E\u7F2F\u7F30\u7F31\u7F32\u7F33\u7F34\u7F35\u7F42\u7F51\u7F57\u7F5A\u7F62\u7F74\u7F81\u7F9F\u7FA1\u7FD8\u7FD9\u7FDA\u8022\u8027\u8038\u803B\u8042\u804B\u804C\u804D\u8054\u8069\u806A\u8083\u80A0\u80A4\u80B7\u80BE\u80BF\u80C0\u80C1\u80C6\u80DC\u80E7\u80E8\u80EA\u80EB\u80F6\u8109\u810D\u810F\u8110\u8111\u8113\u8114\u811A\u8131\u8136\u8138\u814A\u814C\u8158\u816D\u817B\u817C\u817D\u817E\u8191\u81DC\u8206\u8223\u8230\u8231\u823B\u8270\u8273\u8279\u827A\u8282\u8288\u8297\u829C\u82A6\u82C1\u82C7\u82C8\u82CB\u82CC\u82CD\u82CE\u82CF\u82D8\u82F9\u830E\u830F\u8311\u8314\u8315\u8327\u8346\u8350\u8359\u835A\u835B\u835C\u835E\u835F\u8360\u8361\u8363\u8364\u8365\u8366\u8367\u8368\u8369\u836A\u836B\u836C\u836D\u836E\u836F\u8385\u839C\u83B1\u83B2\u83B3\u83B4\u83B6\u83B7\u83B8\u83B9\u83BA\u83BC\u841A\u841D\u8424\u8425\u8426\u8427\u8428\u8471\u8487\u8489\u848B\u848C\u84DD\u84DF\u84E0\u84E3\u84E5\u84E6\u8537\u8539\u853A\u853C\u8572\u8574\u85AE\u85C1\u85D3\u864F\u8651\u865A\u866B\u866C\u866E\u867D\u867E\u867F\u8680\u8681\u8682\u8695\u869D\u86AC\u86CA\u86CE\u86CF\u86EE\u86F0\u86F1\u86F2\u86F3\u86F4\u8715\u8717\u8721\u8747\u8748\u8749\u874E\u877C\u877E\u8780\u87A8\u87CF\u8845\u8854\u8865\u886C\u886E\u8884\u8885\u8886\u889C\u88AD\u88AF\u88C5\u88C6\u88C8\u88E2\u88E3\u88E4\u88E5\u891B\u8934\u8941\u8955\u89C1\u89C2\u89C3\u89C4\u89C5\u89C6\u89C7\u89C8\u89C9\u89CA\u89CB\u89CC\u89CD\u89CE\u89CF\u89D0\u89D1\u89DE\u89E6\u89EF\u8A5F\u8A89\u8A8A\u8BA0\u8BA1\u8BA2\u8BA3\u8BA4\u8BA5\u8BA6\u8BA7\u8BA8\u8BA9\u8BAA\u8BAB\u8BAD\u8BAE\u8BAF\u8BB0\u8BB1\u8BB2\u8BB3\u8BB4\u8BB5\u8BB6\u8BB7\u8BB8\u8BB9\u8BBA\u8BBB\u8BBC\u8BBD\u8BBE\u8BBF\u8BC0\u8BC1\u8BC2\u8BC3\u8BC4\u8BC5\u8BC6\u8BC7\u8BC8\u8BC9\u8BCA\u8BCB\u8BCC\u8BCD\u8BCE\u8BCF\u8BD0\u8BD1\u8BD2\u8BD3\u8BD4\u8BD5\u8BD6\u8BD7\u8BD8\u8BD9\u8BDA\u8BDB\u8BDC\u8BDD\u8BDE\u8BDF\u8BE0\u8BE1\u8BE2\u8BE3\u8BE4\u8BE5\u8BE6\u8BE7\u8BE8\u8BE9\u8BEA\u8BEB\u8BEC\u8BED\u8BEE\u8BEF\u8BF0\u8BF1\u8BF2\u8BF3\u8BF4\u8BF5\u8BF6\u8BF7\u8BF8\u8BF9\u8BFA\u8BFB\u8BFC\u8BFD\u8BFE\u8BFF\u8C00\u8C01\u8C02\u8C03\u8C04\u8C05\u8C06\u8C07\u8C08\u8C0A\u8C0B\u8C0C\u8C0D\u8C0E\u8C0F\u8C10\u8C11\u8C12\u8C13\u8C14\u8C15\u8C16\u8C17\u8C18\u8C19\u8C1A\u8C1B\u8C1C\u8C1D\u8C1E\u8C1F\u8C20\u8C21\u8C22\u8C23\u8C24\u8C25\u8C26\u8C27\u8C28\u8C29\u8C2A\u8C2B\u8C2C\u8C2D\u8C2E\u8C2F\u8C30\u8C31\u8C32\u8C33\u8C34\u8C35\u8C36\u8C37\u8C6E\u8D1D\u8D1E\u8D1F\u8D20\u8D21\u8D22\u8D23\u8D24\u8D25\u8D26\u8D27\u8D28\u8D29\u8D2A\u8D2B\u8D2C\u8D2D\u8D2E\u8D2F\u8D30\u8D31\u8D32\u8D33\u8D34\u8D35\u8D36\u8D37\u8D38\u8D39\u8D3A\u8D3B\u8D3C\u8D3D\u8D3E\u8D3F\u8D40\u8D41\u8D42\u8D43\u8D44\u8D45\u8D46\u8D47\u8D48\u8D49\u8D4A\u8D4B\u8D4C\u8D4D\u8D4E\u8D4F\u8D50\u8D51\u8D52\u8D53\u8D54\u8D55\u8D56\u8D57\u8D58\u8D59\u8D5A\u8D5B\u8D5C\u8D5D\u8D5E\u8D5F\u8D60\u8D61\u8D62\u8D63\u8D6A\u8D75\u8D76\u8D8B\u8DB1\u8DB8\u8DC3\u8DC4\u8DD6\u8DDE\u8DF5\u8DF6\u8DF7\u8DF8\u8DF9\u8DFB\u8E0A\u8E0C\u8E2A\u8E2C\u8E2F\u8E51\u8E52\u8E70\u8E7F\u8E8F\u8E9C\u8EAF\u8F66\u8F67\u8F68\u8F69\u8F6A\u8F6B\u8F6C\u8F6D\u8F6E\u8F6F\u8F70\u8F71\u8F72\u8F73\u8F74\u8F75\u8F76\u8F77\u8F78\u8F79\u8F7A\u8F7B\u8F7C\u8F7D\u8F7E\u8F7F\u8F80\u8F81\u8F82\u8F83\u8F84\u8F85\u8F86\u8F87\u8F88\u8F89\u8F8A\u8F8B\u8F8C\u8F8D\u8F8E\u8F8F\u8F90\u8F91\u8F92\u8F93\u8F94\u8F95\u8F96\u8F97\u8F98\u8F99\u8F9A\u8F9E\u8FA9\u8FAB\u8FB9\u8FBD\u8FBE\u8FC1\u8FC7\u8FC8\u8FD0\u8FD8\u8FD9\u8FDB\u8FDC\u8FDD\u8FDE\u8FDF\u8FE9\u8FF3\u8FF9\u9002\u9009\u900A\u9012\u9026\u903B\u9057\u9065\u9093\u909D\u90AC\u90AE\u90B9\u90BA\u90BB\u90C1\u90C4\u90CF\u90D0\u90D1\u90D3\u90E6\u90E7\u90F8\u915D\u9166\u9171\u917D\u917E\u917F\u91CA\u91CC\u9245\u9274\u92AE\u933E\u9486\u9487\u9488\u9489\u948A\u948B\u948C\u948D\u948E\u948F\u9490\u9491\u9492\u9493\u9494\u9495\u9496\u9497\u9498\u9499\u949A\u949B\u949D\u949E\u949F\u94A0\u94A1\u94A2\u94A3\u94A4\u94A5\u94A6\u94A7\u94A8\u94A9\u94AA\u94AB\u94AC\u94AD\u94AE\u94AF\u94B0\u94B1\u94B2\u94B3\u94B4\u94B5\u94B6\u94B7\u94B8\u94B9\u94BA\u94BB\u94BC\u94BD\u94BE\u94BF\u94C0\u94C1\u94C2\u94C3\u94C4\u94C5\u94C6\u94C8\u94C9\u94CA\u94CB\u94CD\u94CE\u94CF\u94D0\u94D1\u94D2\u94D5\u94D7\u94D8\u94D9\u94DA\u94DB\u94DC\u94DD\u94DE\u94DF\u94E0\u94E1\u94E2\u94E3\u94E4\u94E5\u94E6\u94E7\u94E8\u94EA\u94EB\u94EC\u94ED\u94EE\u94EF\u94F0\u94F1\u94F2\u94F3\u94F4\u94F5\u94F6\u94F7\u94F8\u94F9\u94FA\u94FB\u94FC\u94FD\u94FE\u94FF\u9500\u9501\u9502\u9503\u9504\u9505\u9506\u9507\u9508\u9509\u950A\u950B\u950C\u950D\u950E\u950F\u9510\u9511\u9512\u9513\u9514\u9515\u9516\u9517\u9519\u951A\u951C\u951E\u951F\u9520\u9521\u9522\u9523\u9524\u9525\u9526\u9528\u9529\u952B\u952C\u952D\u952E\u952F\u9530\u9531\u9532\u9533\u9534\u9535\u9536\u9537\u9538\u9539\u953A\u953B\u953C\u953D\u953E\u953F\u9540\u9541\u9542\u9543\u9546\u9547\u9548\u9549\u954A\u954C\u954D\u954E\u954F\u9550\u9551\u9552\u9555\u9556\u9557\u9559\u955A\u955B\u955C\u955D\u955E\u955F\u9560\u9561\u9562\u9563\u9564\u9565\u9566\u9567\u9568\u9569\u956A\u956B\u956C\u956D\u956E\u956F\u9570\u9571\u9572\u9573\u9574\u9576\u957F\u95E8\u95E9\u95EA\u95EB\u95EC\u95ED\u95EE\u95EF\u95F0\u95F1\u95F2\u95F3\u95F4\u95F5\u95F6\u95F7\u95F8\u95F9\u95FA\u95FB\u95FC\u95FD\u95FE\u95FF\u9600\u9601\u9602\u9603\u9604\u9605\u9606\u9607\u9608\u9609\u960A\u960B\u960C\u960D\u960E\u960F\u9610\u9611\u9612\u9613\u9614\u9615\u9616\u9617\u9618\u9619\u961A\u961B\u961F\u9633\u9634\u9635\u9636\u9645\u9646\u9647\u9648\u9649\u9655\u9667\u9668\u9669\u968F\u9690\u96B6\u96BD\u96BE\u96CF\u96E0\u96F3\u96FE\u9701\u9709\u972D\u9753\u9759\u9765\u9791\u9792\u97AF\u97B4\u97E6\u97E7\u97E8\u97E9\u97EA\u97EB\u97EC\u97F5\u9875\u9876\u9877\u9878\u9879\u987A\u987B\u987C\u987D\u987E\u987F\u9880\u9881\u9882\u9883\u9884\u9885\u9886\u9887\u9888\u9889\u988A\u988B\u988C\u988D\u988E\u988F\u9890\u9891\u9892\u9893\u9894\u9895\u9896\u9897\u9898\u9899\u989A\u989B\u989C\u989D\u989E\u989F\u98A0\u98A1\u98A2\u98A3\u98A4\u98A5\u98A6\u98A7\u98CE\u98CF\u98D0\u98D1\u98D2\u98D3\u98D4\u98D5\u98D6\u98D7\u98D8\u98D9\u98DA\u98DE\u98E8\u990D\u9964\u9965\u9966\u9967\u9968\u9969\u996A\u996B\u996C\u996D\u996E\u996F\u9970\u9971\u9972\u9973\u9974\u9975\u9976\u9977\u9978\u9979\u997A\u997B\u997C\u997D\u997E\u997F\u9980\u9981\u9982\u9983\u9984\u9985\u9986\u9987\u9988\u9989\u998A\u998B\u998C\u998D\u998E\u998F\u9990\u9991\u9992\u9993\u9994\u9995\u9A6C\u9A6D\u9A6E\u9A6F\u9A70\u9A71\u9A72\u9A73\u9A74\u9A75\u9A76\u9A77\u9A78\u9A79\u9A7A\u9A7B\u9A7C\u9A7D\u9A7E\u9A7F\u9A80\u9A81\u9A82\u9A83\u9A84\u9A85\u9A86\u9A87\u9A88\u9A89\u9A8A\u9A8B\u9A8C\u9A8D\u9A8E\u9A8F\u9A90\u9A91\u9A92\u9A93\u9A94\u9A95\u9A96\u9A97\u9A98\u9A99\u9A9A\u9A9B\u9A9C\u9A9D\u9A9E\u9A9F\u9AA0\u9AA1\u9AA2\u9AA3\u9AA4\u9AA5\u9AA6\u9AA7\u9AC5\u9ACB\u9ACC\u9B13\u9B47\u9B49\u9C7C\u9C7D\u9C7E\u9C7F\u9C80\u9C81\u9C82\u9C84\u9C85\u9C86\u9C87\u9C88\u9C89\u9C8A\u9C8B\u9C8C\u9C8D\u9C8E\u9C8F\u9C90\u9C91\u9C92\u9C93\u9C94\u9C95\u9C96\u9C97\u9C98\u9C99\u9C9A\u9C9B\u9C9C\u9C9D\u9C9E\u9C9F\u9CA0\u9CA1\u9CA2\u9CA3\u9CA4\u9CA5\u9CA6\u9CA7\u9CA8\u9CA9\u9CAA\u9CAB\u9CAC\u9CAD\u9CAE\u9CAF\u9CB0\u9CB1\u9CB2\u9CB3\u9CB4\u9CB5\u9CB6\u9CB7\u9CB8\u9CB9\u9CBA\u9CBB\u9CBC\u9CBD\u9CBE\u9CBF\u9CC0\u9CC1\u9CC2\u9CC3\u9CC4\u9CC5\u9CC6\u9CC7\u9CC8\u9CC9\u9CCA\u9CCB\u9CCC\u9CCD\u9CCE\u9CCF\u9CD0\u9CD1\u9CD2\u9CD3\u9CD4\u9CD5\u9CD6\u9CD7\u9CD8\u9CD9\u9CDB\u9CDC\u9CDD\u9CDE\u9CDF\u9CE0\u9CE1\u9CE2\u9CE3\u9E1F\u9E20\u9E21\u9E22\u9E23\u9E24\u9E25\u9E26\u9E27\u9E28\u9E29\u9E2A\u9E2B\u9E2C\u9E2D\u9E2E\u9E2F\u9E30\u9E31\u9E32\u9E33\u9E34\u9E35\u9E36\u9E37\u9E38\u9E39\u9E3A\u9E3B\u9E3C\u9E3D\u9E3E\u9E3F\u9E40\u9E41\u9E42\u9E43\u9E44\u9E45\u9E46\u9E47\u9E48\u9E49\u9E4A\u9E4B\u9E4C\u9E4D\u9E4E\u9E4F\u9E50\u9E51\u9E52\u9E53\u9E54\u9E55\u9E56\u9E57\u9E58\u9E5A\u9E5B\u9E5C\u9E5D\u9E5E\u9E5F\u9E60\u9E61\u9E62\u9E63\u9E64\u9E65\u9E66\u9E67\u9E68\u9E69\u9E6A\u9E6B\u9E6C\u9E6D\u9E6F\u9E70\u9E71\u9E72\u9E73\u9E74\u9E7E\u9EA6\u9EB8\u9EC4\u9EC9\u9EE1\u9EE9\u9EEA\u9EFE\u9F0B\u9F0C\u9F0D\u9F17\u9F39\u9F44\u9F50\u9F51\u9F7F\u9F80\u9F81\u9F82\u9F83\u9F84\u9F85\u9F86\u9F87\u9F88\u9F89\u9F8A\u9F8B\u9F8C\u9F99\u9F9A\u9F9B\u9F9F\u5FD7\u5236\u54A8\u53EA\u91CC\u7CFB\u8303\u677E\u6CA1\u5C1D\u5C1D\u95F9\u9762\u51C6\u949F\u522B\u95F2\u5E72\u5C3D\u810F\u62FC\u65E5\u66F0\u660C\u6676\u6658\u66DD\u66BB\u660E\u669D\u66A7\u76DF\u66CC\u6655\u6656\u6696\u5192\u6772\u6670\u65F6\u6695\u7085\u6671\u5F71\u98A2\u6643\u66BF\u664C\u7709\u6604\u66DB\u6634\u5254\u6615\u661F\u6633\u6607\u6602\u6677\u65F7\u6659\u665F\u6661\u663D\u65E2\u6608\u5373\u662A\u65E9\u6627\u6691\u6684\u6653\u664F\u665E\u65EF\u6620\u5832\u6641\u65E6\u6645\u6652\u65F4\u65FA\u6225\u664A\u65F1\u65F0\u660A\u6619\u6664\u6668\u6603\u663A\u91CF\u662F\u665A\u5195\u95C9\u668C\u65F8\u6623\u6624\u6657\u65FF\u9898\u5319\u6654\u97EA\u6628\u6666\u6613\u6612\u6600\u6685\u6606\u9E4D\u662B\u66F7\u66B3\u6674\u7167\u7166\u5194\u6687\u662D\u6700\u66DC\u6635\u666A\u663E\u66B4\u66E6\u66B5\u66D4\u5DF4\u65F5\u66A8\u5848\u52D6\u90FF\u9C40\u9E5B\u5C8A\u826E\u57A6\u66CF\u6B47\u6073\u9E56\u66D9\u66FC\u666B\u66BE\u6609\u65FB\u666F\u667E\u66E9\u66B6\u6631\u6697\u66C8\u66B2\u6621\u6650\u6708\u817D\u8165\u5E42\u80C6\u80A5\u51A5\u670B\u9AA8\u811F\u53D7\u9AC5\u9ABC\u9ABA\u9AB0\u89C5\u9AB6\u9AC0\u9AC2\u9ACC\u9AB7\u9ACB\u7231\u518C\u80F4\u812C\u821C\u9AB1\u9E4F\u9E58\u9ACE\u9AC1\u9AC3\u9AD1\u9AD3\u9AB8\u80B8\u7F55\u518F\u8131\u91C7\u5F69\u8098\u90DB\u819D\u4E73\u7099\u819B\u8112\u81A6\u80F1\u80D6\u8CF8\u6ED5\u7E22\u584D\u87A3\u817E\u5AB5\u809A\u6C0D\u80E0\u811A\u5468\u81CC\u81A8\u817A\u8113\u8C7A\u80F3\u8C8C\u8C89\u809C\u8C94\u816F\u8C8A\u8C86\u808C\u5197\u80A1\u8C85\u8C79\u80DC\u8C82\u8C98\u89C1\u81DC\u80DD\u80CD\u813E\u8200\u8174\u818A\u6718\u810F\u812F\u80C8\u80E7\u8109\u8151\u60AC\u817B\u80CE\u81C1\u8662\u80BA\u8116\u8169\u81A3\u8154\u80A2\u8159\u815A\u8118\u8155\u8191\u80FA\u5188\u8C3F\u80E8\u810E\u7136\u80B1\u80BD\u7F51\u521A\u814C\u80EF\u80F0\u519B\u808B\u80C1\u80BF\u6713\u8153\u5216\u80C2\u4E14\u809B\u56D7\u81D1\u80DA\u53BF\u809D\u7230\u52A9\u5220\u5177\u809F\u670A\u96CE\u540C\u8188\u8C5A\u51A2\u51A0\u8198\u817C\u8170\u51A4\u5B5A\u8171\u8106\u80B7\u80EB\u8199\u80A0\u8D1D\u8D57\u8179\u8D50\u80AD\u8D52\u8D51\u8D60\u8D22\u8D55\u8D29\u8D42\u80D7\u8D2C\u8D59\u8D43\u8D3C\u8D31\u8D47\u8D3B\u8D4C\u8D2E\u8D4E\u8D3F\u5219\u810D\u8138\u796D\u8D48\u8167\u8D4B\u8D61\u811E\u7F42\u8D25\u8D4A\u80E3\u8D2D\u8D26\u8D36\u80D9\u8D46\u8D5A\u5A74\u8D34\u8D54\u8D45\u8102\u80C0\u6710\u80DE\u80AB\u80F8\u7528\u76B2\u8160\u8148\u813F\u90D3\u80A4\u7529\u8136\u96D5\u81CA\u816D\u8132\u8C78\u8152\u670D\u51F8\u76BF\u814A\u819C\u8146\u6726\u6715\u80FC\u80BC\u81B3\u7F54\u76EE\u77B7\u773C\u7791\u77AC\u776C\u7747\u76FC\u7750\u7744\u77A0\u772F\u77B5\u7707\u7766\u772D\u778C\u7785\u7728\u7761\u770A\u7E47\u7765\u778D\u7768\u7743\u7738\u772C\u7719\u778B\u7779\u776B\u778E\u77AD\u774E\u7708\u773A\u8168\u76F1\u775A\u7704\u76EF\u779F\u77AB\u77BB\u89C3\u7735\u77B0\u777D\u77AA\u7741\u77BF\u7762\u77CD\u77A7\u7751\u76F7\u76F9\u9E5E\u775B\u7720\u77A9\u770D\u7736\u7792\u7784\u670F\u9F0E\u7726\u77B3\u7729\u59A5\u595A\u9E66\u80ED\u80DB\u7235\u8158\u816E\u4E39\u817F\u81AA\u8180\u80F6\u5F64\u80AE\u80AA\u8110\u80E9\u814B\u80EA\u5199\u81C6\u8111\u81C3\u80F2\u81BB\u91D1\u7511\u912B\u930B\u946B\u9393\u93FB\u5243\u9881\u90A0\u653D\u9E48\u516C\u9265\u9882\u74EE\u7FC1\u92D0\u90F8\u5181\u7236\u7238\u65A7\u91DC\u7239\u7237\u4E2B\u926E\u9E5F\u516E\u5F1F\u936D\u8C37\u93CF\u5151\u90E4\u6B32\u603B\u9E46\u8C3C\u5206\u574C\u8D2B\u5FFF\u924A\u76C6\u5C94\u9277\u66FE\u5355\u517D\u9267\u943D\u931E\u9429\u6728\u6773\u6985\u6963\u6982\u67E5\u68CD\u69BB\u6777\u6839\u68DA\u6805\u68D8\u6906\u67A7\u523A\u6850\u6874\u50F0\u6A31\u76F8\u67A3\u6733\u677E\u678D\u68AF\u68C1\u6797\u6942\u68FC\u68EE\u711A\u6750\u5F6C\u68B5\u6751\u9E93\u6A0A\u6500\u7981\u68A6\u90F4\u695A\u68FD\u61CB\u68BE\u5A6A\u6983\u695D\u6743\u6811\u686B\u67FD\u6748\u9887\u6770\u68A2\u6A18\u6989\u697C\u68EA\u676A\u6844\u67C8\u68EC\u6863\u675C\u68F1\u6A2F\u6842\u6A3E\u68BD\u6854\u624D\u67CF\u68C9\u69D4\u9F12\u6978\u76AE\u677F\u683C\u67CA\u688F\u6749\u69AD\u67F3\u69B4\u6AC6\u6744\u682A\u6934\u68F0\u681D\u696F\u6865\u6790\u6800\u67DD\u673A\u674B\u67AB\u6841\u6A84\u69D0\u6A47\u680E\u67E2\u6911\u6855\u5BF8\u6879\u6991\u68AD\u6869\u69ED\u6994\u6808\u680A\u6810\u6759\u683B\u68EB\u68B0\u69E0\u672B\u6872\u6AAB\u6960\u690D\u6995\u69A8\u679D\u6A5E\u6756\u696E\u6833\u6832\u68D5\u6966\u67E0\u691F\u6900\u69DF\u67C1\u69B0\u6861\u67AF\u68FA\u6849\u592C\u6755\u6A51\u680B\u6905\u6574\u616D\u6738\u67B7\u675F\u6795\u68E3\u7699\u69DB\u6984\u524C\u6843\u8D56\u6555\u6988\u67DA\u672C\u6760\u624C\u6853\u6ABD\u6A17\u6A91\u6816\u676F\u67B0\u6789\u684E\u6746\u67A5\u6897\u6807\u67F0\u6A71\u68A7\u67EF\u67C4\u67D8\u6913\u6785\u6860\u6A5B\u674C\u673D\u69F1\u69DA\u6A61\u69F2\u6A9E\u6877\u6A90\u674E\u677B\u6A58\u6959\u6781\u6876\u6818\u677C\u6A44\u6883\u6957\u68B4\u692D\u6845\u6A59\u6768\u6979\u6769\u6A79\u6798\u69B7\u6834\u690E\u6A35\u69AB\u69DC\u67C3\u6775\u679A\u688C\u6813\u6867\u6969\u68C0\u6986\u679E\u6866\u67DE\u67AA\u6885\u6A8E\u6812\u6753\u6784\u67A8\u6787\u6977\u67B8\u67B9\u696A\u6954\u6886\u693F\u699B\u68BC\u6971\u68D2\u674F\u67B3\u67F7\u686F\u67B5\u68A0\u6980\u696B\u6A28\u698D\u67D6\u6930\u6910\u67A2\u69A7\u68C2\u6846\u6829\u67E9\u67DC\u675E\u6765\u68E4\u6A21\u6AAC\u8D49\u6B02\u6A2A\u69FF\u67D1\u68CB\u680F\u6939\u6837\u69CE\u6809\u681F\u692A\u69FD\u6A3D\u672D\u68A3\u60F3\u6864\u6A7C\u693D\u6AB5\u68F5\u67EC\u67D9\u6924\u695E\u6922\u6952\u6734\u68F9\u6862\u699C\u6821\u6912\u67F1\u676D\u69CC\u678B\u68B3\u68BF\u67FF\u6A0B\u69C1\u6901\u690B\u680C\u6938\u6987\u6A66\u6A1F\u6893\u68D3\u6767\u6838\u6AA9\u6A80\u69B1\u6C34\u6C68\u6C93\u6C69\u6E29\u704F\u6EC9\u6D85\u6E44\u6E89\u6DCF\u6E5C\u6DF7\u6E34\u6EBB\u6E7F\u7011\u8270\u6F2B\u6E9F\u6DDD\u6DDC\u6ED1\u6DF1\u6D6B\u6ED8\u6DEB\u6C89\u89C2\u6ED4\u6D51\u6CAE\u6E72\u6D1E\u6D6E\u6F08\u6E85\u6D4B\u61D1\u6CC2\u6CEA\u7048\u6FC9\u6E3A\u6E68\u6EAA\u6D75\u6CFB\u6DE6\u6881\u7CB1\u6EC3\u6ECF\u6D95\u6D74\u6C7E\u6E53\u6C90\u6E23\u6D13\u6E58\u6DDE\u6DCB\u6F78\u6FCB\u6F24\u6CE2\u6DC5\u5BF9\u6CAB\u6D91\u6FD1\u6F31\u98A1\u6F06\u6D9E\u6C49\u53CC\u6DFC\u6851\u53D5\u525F\u53E0\u6C4A\u6E9E\u6EE9\u6CFD\u5A46\u6D88\u6DCC\u6D23\u7035\u6F7E\u6E87\u6DE1\u6C99\u6D38\u6CEE\u5723\u7014\u6D3C\u6CD5\u6E98\u6D01\u6F8E\u6F8D\u6CCA\u6E5F\u6FB3\u6D2B\u6D0E\u6D53\u6F72\u6E6B\u6D70\u6F58\u6DA4\u6D72\u6D1A\u6D1B\u70EB\u6D69\u6D17\u6CD6\u6ED7\u6D3E\u6E9C\u6CDB\u6D19\u6D3B\u6C83\u6C82\u6CA1\u6CA8\u6CBF\u9CA8\u6332\u6D90\u6E43\u6EB5\u6FC0\u6EB4\u6FDE\u5A11\u6CFA\u6CDC\u6EB2\u6F5F\u88DF\u620F\u53C9\u6D6A\u6EA5\u6D5A\u6CAD\u6C87\u6D45\u6D66\u6E17\u6CF7\u6CA9\u6D32\u86A4\u6E8F\u6CF3\u6D98\u603C\u700C\u6CBB\u6CAA\u6FC2\u6E21\u6CFC\u6D52\u700D\u6F09\u6C41\u6C9B\u6EC7\u6D61\u6EB9\u6EB6\u6E24\u6F6E\u701A\u6E1A\u6D8D\u6D18\u6E16\u6F14\u6DD9\u6E32\u6CDE\u6DC0\u6D63\u6E0E\u6DB4\u6EE8\u6CB1\u6D47\u6CBD\u6E56\u6DAB\u6ED3\u6D27\u92C8\u6F66\u6F74\u6F2A\u6C70\u6DC6\u6D60\u6DF9\u6D3F\u6C3F\u6E10\u529D\u6CC7\u6D43\u6CF1\u6C88\u6E0A\u6E31\u6EE5\u6D49\u6CB8\u6F36\u6D4A\u6D2E\u6E83\u6D25\u6DA7\u6DA6\u6F9C\u6CB9\u6D84\u6C5F\u6D39\u6FE1\u705E\u6FAA\u6D0F\u6E8D\u9152\u6D12\u6CD9\u6C6A\u6DAF\u6F56\u6E90\u6C57\u6DFB\u6CA5\u6C94\u6C84\u6D6F\u6C61\u6C85\u6C40\u6D0C\u6CB3\u9E3F\u6EC6\u6DBF\u6C67\u6EBD\u6EA7\u6F02\u6E6E\u6F6D\u6E4E\u6F39\u6D7C\u6DA3\u6FA5\u6FB9\u67D3\u6F4F\u6C72\u6C50\u6CD3\u6D8C\u6D3A\u6C5B\u6F89\u6D8E\u9093\u6EC1\u6F0B\u6CD0\u6E0C\u6EBA\u6D08\u6EEA\u6B22\u6E51\u6CFE\u6F84\u6DA8\u6C64\u6F9B\u6E14\u6C6D\u6E86\u96BE\u6DEE\u6CE0\u6D11\u6D5B\u6EEB\u6D5F\u7039\u6D5C\u6D82\u6D4D\u6F4B\u6C7D\u6E1D\u6D3D\u6C54\u6CA6\u6CB2\u6E30\u6D22\u6CA7\u6FEE\u6D77\u6C81\u6D35\u6C60\u67D2\u6CCC\u6C95\u6DF4\u6E49\u6C4B\u6C9F\u6DD8\u6C98\u6E5D\u6CC3\u6CE1\u6C8F\u6CC4\u6E2B\u6C8C\u9E21\u6D59\u6CA3\u6EDF\u6EB1\u6D9B\u6E05\u6E0D\u6F5C\u5447\u6D65\u6D93\u6DA2\u6E11\u6F5E\u6DA1\u6E63\u6FA1\u6C5C\u6CEF\u6D5E\u6C47\u6DAE\u6E20\u6CBC\u6DA9\u6D31\u6EE0\u6CA4\u6C48\u6F0F\u6D78\u6FEF\u6D2D\u6E25\u6F3B\u6D54\u6F7A\u6D55\u6CE5\u6FBC\u6C3E\u6F20\u6DDF\u6E81\u6F46\u6EE2\u6F75\u6E54\u6FDB\u6D9D\u6D2A\u6F7D\u6F8C\u6EA2\u6E2F\u6F3E\u6E3C\u6FED\u6F2D\u6EDE\u6F62\u6E36\u6F47\u6CD4\u6EE1\u6DC7\u6E5B\u6FE9\u6E9A\u6D0B\u6EA0\u704C\u6D34\u6C6B\u6E74\u6EAF\u6ECB\u6F15\u6FA7\u6C55\u938F\u6F34\u6C79\u6E4D\u746C\u6ECD\u6DB5\u6EA6\u6F3C\u6D94\u6C5D\u6F4D\u6D33\u6DC4\u6CBA\u6E2D\u6CD7\u6D6C\u6F0D\u6DB8\u6D07\u7031\u6FB4\u6DE0\u6EB7\u6CC5\u6DA0\u6D04\u6F69\u6F2F\u6DD6\u6F88\u6D48\u6EC2\u6EF4\u6EE6\u6D28\u6E59\u6E7E\u6EDA\u6F37\u7023\u6DD1\u6CE8\u6C86\u6FD2\u6DEF\u6D41\u6C76\u6EE7\u6D4E\u6D4F\u6D9F\u6D89\u6C9A\u6CDA\u701B\u6DEC\u6DB2\u6EF9\u6FBD\u6EE4\u6CBE\u6DF3\u6E1F\u6FE0\u703C\u6CF8\u6E38\u6F29\u6DE4\u6CE3\u6F7C\u6D50\u6F33\u6DAA\u6F13\u6FAD\u6CEB\u6FB6\u6C74\u706B\u7174\u714B\u709F\u710A\u711C\u7206\u71B3\u715C\u8096\u89C9\u6CF6\u55BE\u71C3\u524A\u5C1D\u70D4\u5B66\u9C8E\u655D\u655E\u9E61\u5C1A\u70AF\u8D4F\u68E0\u5802\u515A\u5E38\u725A\u638C\u88F3\u9EC9\u5CC3\u721D\u70FF\u810A\u4E3E\u8A89\u7C73\u7C91\u7C97\u7C89\u7C95\u7CD7\u7CCC\u7CAE\u7CC1\u7CE0\u7CD6\u7CBD\u7CCA\u7C7B\u7094\u7CEF\u7C9E\u7CB3\u7C9D\u7C7D\u7CC5\u7CC8\u7CE8\u6549\u6569\u7CC7\u7CBE\u7CAA\u7CD5\u7CD2\u7CCD\u7CDF\u7C7C\u5A04\u7CBF\u7CD9\u6599\u7CB9\u7C98\u7C92\u708E\u71EE\u7131\u71CA\u7203\u71DA\u7092\u5261\u90EF\u6B3B\u7076\u5C18\u5C11\u714C\u71E0\u70C5\u7701\u71D4\u70FD\u70D9\u70C0\u7198\u7145\u52A3\u7098\u7184\u70C1\u719C\u70FA\u710C\u7089\u7178\u717D\u7194\u70E4\u714A\u70F7\u70E7\u7173\u5C16\u70E0\u77A5\u71CE\u5C1C\u7143\u6C05\u70EF\u9CD6\u618B\u8E69\u5F0A\u70BC\u70BC\u70DB\u70D1\u7116\u70DC\u70E6\u5174\u7110\u706F\u70A3\u70B3\u70BB\u5149\u719B\u7115\u71CF\u7130\u70F6\u70FB\u708A\u70C3\u7080\u96C0\u71CB\u7113\u708C\u721A\u70E9\u70E8\u71BB\u70B8\u709D\u707C\u70AE\u7096\u534A\u7737\u684A\u53DB\u5224\u8C62\u9C9E\u62F3\u709C\u5238\u7FF7\u5377\u7CBC\u8A8A\u7106\u70BD\u71E5\u71C0\u5F53\u71A0\u70EC\u70AC\u7117\u70D8\u7214\u7164\u70C2\u7141\u70CA\u721F\u707F\u8F89\u7153\u8000\u6570\u715F\u7205\u70DF\u7168\u712F\u717A\u71B5\u70B7\u7095\u7086\u71A5\u7187\u711E\u7219\u71E7\u7119\u70AB\u571F\u57D8\u58F0\u5766\u57BE\u5824\u57F8\u5828\u584C\u57A0\u5881\u5189\u580B\u57D2\u58F3\u89F3\u60AB\u5765\u58F8\u578C\u58F9\u57BA\u575D\u5770\u58F6\u574D\u8D6B\u8D6D\u90DD\u8D66\u574B\u8D67\u4E27\u589E\u556C\u8D6A\u5761\u6996\u5BFA\u5757\u77BD\u589A\u99A8\u9F19\u78EC\u7F44\u8B26\u57EB\u7E20\u5799\u6B3E\u57B1\u572D\u580E\u5899\u5C01\u579A\u90BD\u605A\u5366\u57A7\u578D\u58A6\u5742\u578E\u586E\u5732\u5845\u57F5\u573B\u57A2\u750F\u577C\u579B\u572B\u57E0\u577B\u576C\u57E4\u53BB\u5739\u57CC\u76CD\u583C\u57CE\u57D4\u5785\u52AB\u5889\u5858\u90BF\u57BF\u57C3\u57DF\u5374\u5F06\u586B\u57F4\u57EA\u579E\u5898\u5835\u57B8\u5768\u76E9\u87AB\u57EF\u57FC\u57AE\u57ED\u5733\u8D64\u578F\u5764\u57A3\u5827\u92C6\u5729\u574F\u576A\u576F\u5810\u586C\u57A4\u575C\u57C2\u575B\u572C\u5722\u5777\u5865\u57AD\u5819\u580D\u57C6\u573E\u5F40\u57C7\u57CF\u574E\u573A\u8D84\u8D9F\u5806\u8DB1\u577D\u8D91\u57DD\u8D8A\u8D75\u8D76\u8D94\u572A\u5820\u8D8B\u8D81\u8D85\u8DA3\u8DAF\u8D77\u8D73\u8D74\u5FD7\u5730\u5747\u581E\u5749\u575E\u6BC2\u583E\u5409\u57D9\u5586\u8881\u52BC\u9889\u56AD\u57D5\u57DA\u71B9\u6199\u559C\u5609\u572F\u5830\u5880\u57FD\u576D\u572E\u5800\u58A3\u5F6D\u61FF\u5E78\u9F13\u5890\u5769\u582A\u5854\u579F\u58A1\u5888\u5843\u57B2\u5773\u581F\u57CB\u6BD0\u580C\u583D\u5844\u5776\u585D\u76D0\u5892\u5846\u58A9\u5751\u574A\u5809\u575F\u57AF\u57D7\u5740\u8D70\u589F\u576B\u58D5\u58E4\u5786\u5783\u57F9\u5883\u57B4\u5793\u7AF9\u4E3F\u767D\u99A7\u76AD\u6CC9\u769B\u769E\u76A4\u7688\u7693\u76A6\u9B44\u999E\u7696\u768B\u5E1B\u7B2A\u7687\u99A5\u7682\u999D\u7684\u7B06\u767F\u7691\u7C0B\u768E\u7228\u7B15\u5965\u7B4B\u5236\u74BA\u7B52\u9105\u752A\u5411\u8840\u81EA\u7E82\u7BE1\u7B97\u519C\u821F\u912E\u7BAA\u79BE\u9999\u7B56\u7A20\u7A3B\u79DF\u7A03\u7A44\u76C9\u7BB1\u7A0E\u7B96\u79E3\u91CA\u79CB\u7A0D\u79D2\u7A11\u7A51\u79F8\u7A46\u79FE\u79C3\u79E9\u7A17\u79C1\u7A02\u79EB\u7A3D\u5D47\u7A39\u7A19\u7A57\u7A3C\u7A00\u79CD\u79C9\u79E7\u5229\u5241\u7C41\u7C0C\u4E58\u91C9\u79ED\u7B28\u79E4\u79C6\u5B63\u79F0\u79C0\u79FB\u90BE\u7A33\u9ECD\u7A1A\u7A14\u7A0C\u6089\u79D8\u79D5\u548C\u79EF\u7A0B\u7A06\u79EC\u7A59\u79FD\u59D4\u756A\u7A37\u7A1E\u79D1\u7A3F\u7A70\u7A5C\u7A5F\u53CD\u5902\u6761\u69C3\u7B94\u7C3F\u52A1\u78D0\u5404\u7BCA\u5907\u60EB\u51AC\u5904\u9ECF\u706C\u7B72\u4E4E\u7BD3\u6101\u7B5C\u58EC\u7B49\u718F\u7B40\u5148\u4E22\u7B60\u544A\u9760\u7BC1\u537F\u8D38\u5C04\u7C03\u8EBA\u7B76\u7B45\u5F61\u8EB2\u8EB4\u7B11\u7B0A\u987B\u8EAC\u9ECE\u7B19\u7B14\u8EAF\u536F\u5B75\u5375\u7BFC\u7559\u9EE7\u7BE6\u7BEA\u4E48\u7B64\u7C20\u9B4D\u9B48\u7BB4\u9B43\u9B46\u7B3A\u9B45\u7B3C\u9B49\u90B8\u4E4F\u9B4B\u9E45\u9E31\u7B1E\u7BC7\u7C0F\u9B41\u9B51\u5343\u8D28\u76FE\u7B9C\u6731\u6BB5\u7BB8\u4E56\u90EB\u7BA2\u9E4E\u820C\u7BA1\u7FF1\u5782\u91CD\u592D\u7C1D\u4E54\u7B33\u5C99\u4EBB\u5E01\u79B9\u9F44\u7BEE\u9F49\u9F3D\u7B5B\u7C30\u7BAB\u5293\u9880\u9F3E\u7BD1\u6B23\u722A\u9F41\u7B80\u7B1B\u65B6\u7B2B\u9F47\u7BE2\u771A\u7AFD\u7B51\u6BC1\u7521\u7AFF\u65A4\u7B7B\u7AFA\u7B47\u7B6E\u60E9\u540E\u536E\u7B04\u7C2A\u7BE5\u7C1F\u7525\u65A5\u51E0\u98D3\u6735\u68A8\u51E4\u6BB3\u98DA\u51F0\u7B08\u98D7\u7281\u98D5\u51E1\u98CE\u7B75\u7B2C\u9893\u7B93\u5919\u98CF\u7C26\u6106\u98D1\u63A3\u7B5D\u7B03\u98D4\u98D0\u516B\u5F73\u5F97\u722C\u5F88\u8862\u5F82\u5FAD\u5F7C\u7B26\u5F95\u884D\u5F9C\u5F85\u8857\u5F92\u5FA8\u5FAA\u5F79\u74DE\u5FBC\u7B4F\u8860\u5FB7\u5F9B\u7B71\u5F98\u5F8B\u7C65\u7B4C\u884E\u7B7E\u884C\u9E3B\u7B54\u8859\u5F81\u7BCC\u8861\u9142\u5F84\u5F90\u5FA1\u8854\u5F87\u7BEF\u5F7B\u7B2E\u5F89\u5FBD\u5FB5\u5FAE\u5AAD\u5F8C\u5F8A\u5F80\u5F77\u8852\u5F99\u4E47\u660F\u7B77\u7B0F\u5269\u7B5A\u7B31\u7B23\u5370\u725B\u7B62\u728B\u770B\u63B0\u7C4D\u7BA8\u7261\u7279\u727F\u7272\u7287\u7266\u7C40\u6211\u728F\u727B\u728A\u726F\u7B79\u7284\u751F\u7B90\u727A\u727E\u7BA6\u62DC\u728D\u5931\u7267\u643F\u725D\u7269\u7B58\u7B8D\u7B9D\u6BDB\u7265\u7292\u7264\u7B7C\u5795\u8210\u961C\u522E\u5284\u8214\u90DC\u90C8\u96D2\u654C\u9E44\u9E39\u7B65\u751C\u4E71\u8F9E\u52F9\u6240\u6BB7\u7B24\u515C\u7B0B\u7BA7\u7BDA\u7B50\u7B25\u656B\u7B38\u5347\u7BAD\u7C38\u8845\u7C15\u7BAC\u7C27\u7B95\u8843\u8844\u7BDD\u8D5E\u81EC\u6BEF\u6BF3\u9B3C\u6BEA\u81ED\u6BFD\u6C07\u606F\u61A9\u6C06\u9F3B\u6BE1\u9F39\u9F37\u9F22\u4E50\u7C16\u7B2F\u515C\u9B4F\u7CFB\u74DC\u9F2C\u9F2F\u9F2B\u7BC6\u6C0F\u6C10\u9F29\u9F31\u536C\u777E\u9DED\u56F1\u5351\u56DF\u7BFE\u7BA9\u7B85\u7CA4\u9131\u9E60\u7FFB\u81FC\u76E5\u8EAB\u8206\u53DF\u6B43\u81FE\u8204\u8201\u9F20\u8205\u5FC4\u661D\u8225\u8230\u76D8\u8244\u8236\u824E\u8228\u7BF7\u822C\u8239\u7C09\u8258\u8223\u8235\u7B3E\u822F\u87BD\u8233\u8221\u823E\u8238\u824B\u8247\u8232\u8245\u8234\u8231\u8652\u822D\u9E3C\u548E\u7BD9\u8220\u8249\u7C07\u7B20\u8268\u824F\u825A\u8222\u7BF1\u822A\u822B\u823B\u825F\u8237\u6208\u3001\u4E36\u826F\u5B80\u5871\u9D4F\u90D9\u9118\u80FD\u7FE9\u5EDE\u5E8A\u672F\u9EBB\u7CDC\u9EC1\u9EBD\u9EBE\u9B54\u9761\u78E8\u6469\u4E66\u7E3B\u6636\u76DA\u76B4\u6551\u88D8\u7994\u89C6\u7956\u7985\u793E\u797E\u795B\u79A7\u7948\u794B\u7957\u7947\u7953\u799B\u795C\u7950\u7967\u795E\u5E94\u7946\u794F\u798F\u798B\u7962\u7941\u7984\u7943\u795A\u7955\u9E67\u798A\u7977\u794E\u795D\u7978\u7940\u8E59\u7972\u7960\u799A\u797A\u7965\u793C\u7992\u797C\u79A4\u7998\u796F\u794A\u7949\u79B3\u5E84\u5EB1\u5EA4\u620A\u6BF5\u620D\u620C\u54B8\u5A01\u725F\u6210\u5141\u5EC6\u5E95\u5EB3\u5ECB\u5EBE\u621A\u6717\u5792\u5ECA\u5E9E\u7592\u90CE\u5E90\u5E9F\u620E\u620B\u752B\u76CF\u6C42\u5E8B\u72AC\u4E49\u5E86\u68E8\u53C2\u98D9\u8087\u5EB5\u53C1\u6B38\u9F99\u5E93\u5F67\u4E3A\u5C24\u5C28\u7DAE\u755A\u5EB8\u5EB7\u5DDE\u5212\u5E9A\u8D53\u5510\u5E99\u51AB\u4EA0\u51CB\u51C7\u51B3\u51B0\u51CC\u51BC\u51CF\u51B6\u51C4\u51BB\u5E91\u51B2\u51BD\u51B1\u51D3\u6B21\u51C0\u51AF\u51C6\u51B7\u60D1\u51DD\u51D1\u51B5\u81E7\u51D8\u51C9\u51DB\u5196\u5EE8\u6C38\u793B\u5E8F\u5EAD\u909D\u8864\u8FB6\u4E4B\u8BA0\u8D44\u76D7\u5EA5\u5E9C\u7CA2\u81BA\u9E70\u8150\u77E3\u74F7\u5EA7\u6063\u9E52\u54A8\u59FF\u5F0B\u5E80\u93D6\u718A\u9E8B\u9E9F\u5784\u9E87\u9E9D\u9E82\u9E91\u5F0F\u8D30\u5EBC\u783B\u911C\u5E87\u5FD2\u9E80\u9E22\u5E96\u804B\u9F9A\u7519\u9E92\u9E88\u88AD\u8A5F\u9E96\u5ED2\u53F0\u67B2\u70B1\u6216\u89F1\u90B0\u910C\u611F\u6020\u6237\u80A9\u6243\u6241\u76DB\u624A\u623E\u6249\u5ED6\u6245\u96C7\u6577\u542F\u6248\u6247\u623F\u6246\u623D\u6242\u6212\u5F01\u5EA6\u5EB6\u5E2D\u5ED1\u5EA0\u5EB9\u5EC9\u8C12\u8C29\u8C03\u8BE8\u8BC5\u8C16\u8C23\u8BC7\u8BBC\u8BF4\u8BD0\u8BA8\u8BC0\u8C0F\u8BD1\u8BEE\u8C20\u8C08\u8BD7\u8BD6\u8BD8\u8BF1\u8BFF\u8BF0\u8BDC\u8C22\u8BDB\u8BDD\u8BDF\u8BC9\u8BA5\u8BBE\u8BBD\u8BCB\u8C00\u8BDA\u8BAE\u8BF6\u8C18\u8BD5\u8BD2\u8C1D\u8BEB\u8BA1\u8C33\u8C0A\u8BE7\u8BF8\u8BFB\u8BC2\u53D1\u8BD9\u8BF3\u8BAD\u8BFD\u8C30\u8BA7\u8BC4\u8BA6\u8BED\u8BA2\u8BC3\u8BEC\u8BFC\u8C2E\u8BB6\u8C2D\u8BC1\u8C35\u8C32\u8C04\u8BF5\u8BAF\u8BDE\u8BE1\u8C1E\u8BE4\u8BCC\u8C17\u8BA4\u8BB7\u8C01\u8C2F\u8BCA\u8C36\u8C02\u8BB8\u8BE0\u8C15\u8BAB\u8BBA\u8BB9\u8BC8\u8BF2\u8BE2\u8BE3\u8C27\u8C10\u8C0D\u8BD4\u8BF7\u8BB3\u8BC6\u8BEF\u8C14\u8BB1\u8BCF\u8BF9\u8BB4\u8BD3\u8C2C\u8BE9\u8BCD\u8BB5\u8BB0\u8C1F\u8C2B\u8C31\u8C25\u8BFA\u8C28\u8C0B\u8C0C\u8BE6\u8BB2\u8C26\u8C0E\u8BAA\u8BBB\u8BCE\u8C13\u8C21\u8BFE\u8BA3\u8C1B\u8C24\u8C2A\u8C1C\u8C1A\u8BBF\u8C34\u8BA9\u8C07\u8C11\u8C06\u8C05\u8C19\u8BE5\u5EDB\u5ED9\u9E7F\u5ED3\u5E97\u5EEA\u5341\u716E\u90FD\u7FE5\u5BB4\u8D4D\u732E\u5B9C\u771F\u76F4\u6A50\u8839\u5B5B\u5BDF\u56CA\u5357\u7D22\u7590\u7A74\u7A85\u7AAD\u7AB8\u7A96\u7A86\u7AB3\u7A8A\u7A97\u7A97\u622D\u7A81\u7AA6\u7A76\u7A77\u5E18\u7A9C\u7A95\u7A7A\u98A0\u7A92\u7A8D\u7A7F\u7A79\u7A78\u7ABF\u7A91\u7AAC\u5BB9\u7A84\u7A83\u7A80\u7A8E\u7AA5\u7A9D\u7A98\u7A9F\u7A88\u7AA0\u7AA3\u7AA8\u672A\u5B8B\u5B88\u52C3\u6559\u9E41\u652F\u58BC\u980D\u7FC5\u707E\u5BB5\u5BA2\u5BAA\u5B85\u7262\u535A\u683D\u5BAC\u5BA0\u8F7D\u622A\u60E0\u54C9\u6234\u88C1\u8279\u5EFE\u671D\u621F\u5BC1\u4E7E\u7FF0\u65A1\u97E9\u8ECE\u8F36\u4E08\u8005\u5BA5\u89CC\u5BEE\u5B8F\u6F26\u5BC4\u5AE0\u8003\u91D0\u5B84\u5B5D\u8001\u8007\u534F\u540F\u4E8B\u5BDD\u59BB\u5B99\u5BA1\u58EB\u5BA3\u5BE1\u5B87\u5B9D\u5BA4\u77D7\u5BC5\u5B97\u5B8C\u5BB8\u5B81\u5B95\u5BCC\u5BB6\u5BC7\u5B9A\u5B57\u5B9B\u9EB4\u5356\u5BBF\u5BBE\u5B83\u8006\u752F\u5B93\u871C\u8004\u5BC6\u800B\u5C27\u5BB3\u53E4\u80E1\u9E55\u8C41\u514B\u5272\u5B98\u989D\u6545\u9E2A\u5BAB\u560F\u8F9C\u8080\u5BA6\u5BA7\u5BE5\u5349\u5BDE\u8D32\u5BBD\u5BE8\u9DB1\u585E\u9A9E\u8D5B\u8E47\u6434\u8B07\u8930\u5BD2\u4E03\u5162\u525C\u524B\u7FD8\u5B89\u6848\u5BD0\u5BE4\u90EA\u5BD3\u5BF0\u5BC2\u5B9E\u5BB0\u5927\u4E42\u761F\u6A65\u75B8\u75A4\u75D5\u6709\u6BBD\u7275\u75BD\u74FB\u90D7\u90C1\u6B37\u7635\u763F\u75C8\u766F\u7605\u4E1C\u6740\u75B2\u593A\u5F11\u5239\u760C\u765E\u9E2B\u53CB\u75E7\u7619\u762B\u7070\u75A2\u76D4\u7620\u7618\u75F0\u9E69\u75D4\u594E\u75E3\u7316\u7329\u7338\u72E0\u733E\u72D9\u72C8\u733A\u7383\u7339\u736D\u75E2\u75FF\u75BC\u72C4\u733F\u7301\u736F\u72D0\u7624\u730A\u72B7\u72FC\u72FB\u72C1\u72E8\u72B9\u72F1\u72E9\u732A\u72DE\u7322\u7360\u7317\u72B0\u72ED\u72EE\u72D2\u72EC\u72C9\u72C2\u72B4\u7357\u736C\u72F2\u731B\u75AB\u72DD\u72C3\u5CF1\u7331\u75AF\u7315\u72F0\u72B8\u72F3\u72EF\u7303\u731E\u7334\u72F4\u72D7\u72CD\u7330\u731C\u72F7\u72AF\u730E\u7374\u737E\u732B\u732F\u762A\u732C\u7313\u72F8\u72CE\u7321\u7325\u7626\u7610\u72E1\u7622\u72FA\u731D\u7307\u7304\u7350\u734D\u592A\u7606\u75A3\u90C4\u96C4\u6001\u7FC3\u766B\u5962\u5954\u723B\u80B4\u9E11\u723D\u5E0C\u75CD\u7638\u592F\u75C2\u7617\u6682\u5E03\u933E\u6920\u5728\u5811\u593C\u75F1\u5208\u5B58\u75EB\u5944\u5DE6\u596D\u7657\u75DE\u764D\u75D3\u75AC\u5948\u75E6\u5938\u7594\u5947\u75B4\u75C5\u75D8\u75A0\u7603\u75D6\u762D\u75C7\u4E5D\u5937\u65ED\u65EE\u75EA\u6742\u72AD\u4E38\u75DB\u5953\u7643\u763E\u7663\u7597\u759A\u75C9\u9E20\u75A1\u9997\u8A04\u8653\u75B9\u75BE\u75F4\u75A5\u75CA\u7599\u760A\u75AD\u75E4\u75C4\u75AE\u7595\u75B1\u8F66\u8F92\u8F8A\u8F8B\u8F70\u8F8D\u8F9A\u8F95\u8F80\u8F82\u8F77\u8F7F\u65A9\u761B\u8F76\u8F79\u8F85\u8F7C\u8F98\u8F96\u8F71\u8F6A\u8F68\u8F74\u8F7E\u8F69\u8F72\u8F86\u8F90\u8F6D\u8F6F\u8F7B\u8F78\u8F81\u8F93\u8F6E\u8F8F\u8F6C\u8F75\u8F91\u8F6B\u8F7A\u8F84\u8F97\u8F67\u8F8E\u8F99\u8F83\u8F8C\u8F73\u53F3\u8D3A\u67B6\u525E\u54FF\u6B39\u9A7E\u764C\u7615\u8888\u529B\u529E\u765C\u74E0\u8037\u5941\u7596\u5233\u759F\u7633\u5957\u530F\u52A0\u7656\u52F0\u5939\u763C\u75E8\u7640\u75B3\u988A\u90CF\u7629\u75D2\u7625\u759D\u5C22\u5C34\u5C2A\u5C2C\u5C25\u9E4C\u594B\u75FC\u75F9\u7630\u75B0\u75B5\u7601\u7600\u7634\u7654\u75C3\u4E2D\u4E28\u65E7\u8892\u88FC\u8910\u891F\u88C9\u5DFE\u5E3D\u5E4C\u5E54\u5E28\u5E14\u5E15\u5E61\u5E06\u5E19\u592E\u88C8\u5E45\u5E56\u5E37\u5E10\u5E31\u5E3B\u5E0F\u5E1C\u5E44\u76C5\u5E6A\u5E5E\u5E21\u5E3C\u5E27\u5E16\u5E62\u5E5B\u88D5\u895F\u897B\u88AB\u886C\u889C\u8882\u9E47\u96B6\u80BE\u8D24\u88F0\u575A\u8869\u7D27\u7AD6\u891B\u88A2\u88C6\u8902\u88AA\u88C5\u88BC\u887D\u886B\u8884\u88E8\u892B\u8734\u874E\u8686\u879F\u8729\u89C8\u86AC\u86C6\u8709\u76D1\u86CA\u883C\u9274\u86A3\u8715\u8749\u8725\u8772\u8740\u86CF\u86F8\u87B3\u877C\u8737\u86BA\u86D9\u8710\u87DB\u8757\u874C\u870A\u87CB\u87E0\u8702\u86DB\u86DE\u866E\u86FE\u869D\u8785\u8731\u878B\u86D1\u8782\u8681\u8797\u872E\u8759\u880A\u877B\u87EA\u873F\u86C7\u86F2\u86C4\u8774\u8770\u88E4\u86F1\u86F3\u86B0\u8679\u4E2C\u8815\u86B2\u8788\u86ED\u8677\u86CE\u86B5\u86C3\u8760\u869C\u87B5\u87EB\u867E\u87D3\u87FE\u8678\u8722\u86F9\u8713\u8712\u8693\u8682\u876E\u868B\u86C9\u8718\u86A7\u86AF\u870D\u8753\u86E4\u867C\u86B1\u868D\u8776\u868C\u877D\u8793\u873B\u86A8\u870E\u8747\u8708\u8717\u95E8\u8758\u890A\u8721\u87C6\u892F\u877E\u8813\u87A0\u8764\u87D2\u87E5\u87CF\u86B6\u87A8\u871E\u8816\u86D8\u8723\u87EE\u86D0\u87AC\u881B\u866C\u88AF\u86B4\u873E\u880B\u8748\u86D4\u87BA\u8783\u86DF\u86C0\u8684\u87C0\u86AA\u868A\u86F4\u8763\u87D1\u87AD\u867B\u891A\u53F2\u76CE\u896B\u9E2F\u4E32\u8083\u7256\u8934\u5DDD\u5E05\u987A\u5E08\u7247\u5F17\u7545\u4E34\u60A3\u8919\u9E54\u88E5\u5F52\u8955\u8896\u8966\u8D35\u58EE\u866B\u72B6\u5C06\u5317\u90B6\u975E\u5255\u5146\u5986\u8925\u5202\u8D39\u895C\u6868\u6D46\u7248\u724C\u7256\u724D\u5956\u9171\u8274\u7252\u8941\u8872\u9F17\u8897\u88B1\u887F\u88E3\u8915\u88B7\u8913\u5FE0\u80CC\u888D\u5180\u807F\u88F1\u8886\u88CE\u5182\u95F4\u960A\u9618\u960C\u9612\u9605\u9610\u95F2\u95ED\u9611\u9614\u95FA\u9616\u521D\u9601\u960D\u960B\u9606\u9608\u9617\u9607\u88FE\u95F3\u9609\u88D9\u95FD\u95E9\u8936\u95F0\u95EC\u97ED\u95EB\u960E\u961A\u9615\u95EF\u9604\u95EA\u9600\u95F7\u95F1\u95EE\u95FE\u95FB\u9619\u95FF\u9603\u95F8\u95F6\u95F5\u95FC\u95F9\u8A1A\u960F\u9602\u8921\u513F\u9E29\u80E4\u7531\u80C4\u88F8\u7533\u9814\u90AE\u66F3\u7535\u8865\u892A\u68D0\u8F88\u88E2\u871A\u60B2\u7FE1\u895A\u88F4\u6590\u4E00\u767E\u622C\u53A9\u4E98\u7695\u78A7\u539A\u9111\u973E\u971C\u9716\u8010\u972A\u9708\u9704\u96FE\u800F\u9713\u4E3D\u972D\u800C\u878D\u970F\u9700\u98A5\u96F3\u96E9\u9707\u9706\u90B4\u90E6\u9875\u8D21\u970D\u96F6\u5395\u9709\u6067\u96F9\u9E42\u9E5D\u9E38\u9732\u971E\u9728\u96EA\u7FEE\u9739\u9730\u9738\u9B37\u800D\u96F7\u96F1\u96EF\u9701\u9705\u970E\u664B\u57A9\u6076\u897F\u9149\u4E8E\u76C2\u53A2\u4E94\u9098\u6C5E\u4E0D\u706D\u752D\u98D8\u74E2\u5E73\u527D\u4E15\u6B6A\u9122\u613F\u5426\u5B6C\u738B\u7441\u7446\u7442\u7445\u74D3\u7428\u7436\u73E2\u749F\u518D\u73A5\u7477\u73CA\u741B\u73B0\u73F2\u73C7\u7457\u7408\u7476\u748E\u7390\u73F6\u73A2\u7433\u73BB\u73A6\u7453\u7410\u7498\u7430\u73D6\u73F0\u73C3\u73EA\u73D0\u73C0\u7454\u745D\u73E6\u73D8\u7407\u74A0\u73DE\u73CB\u73E0\u7456\u7440\u7391\u73E9\u74AC\u7470\u74D2\u7481\u7389\u538B\u7405\u73EC\u73F9\u7403\u73D1\u73ED\u746D\u7471\u744F\u7462\u742E\u7444\u7414\u742C\u745A\u742F\u73DB\u7426\u73C8\u73D5\u7394\u73E7\u7432\u5230\u73D2\u73C5\u7392\u74C0\u987C\u7468\u7397\u73AF\u73B6\u74B1\u73CF\u740A\u7395\u73F8\u73A9\u738E\u73C2\u73F7\u7422\u73A1\u7504\u7448\u73FD\u90C5\u9104\u74CD\u742D\u7396\u6B45\u7492\u7424\u739A\u739B\u741F\u73CD\u73B2\u7434\u73AA\u73B3\u7400\u81F4\u73AB\u73A0\u745C\u73E8\u73B1\u73E3\u745F\u73CC\u7393\u7435\u73AD\u73BD\u73B8\u73A4\u7443\u81FB\u7467\u742B\u739E\u73AE\u7488\u7404\u73F5\u7490\u5669\u74AA\u7455\u73C9\u73BF\u73E5\u741A\u73FA\u7486\u74BB\u73DD\u7398\u5F04\u73D9\u749E\u748A\u749C\u745B\u747E\u73B5\u742A\u74C1\u7473\u74D8\u74A5\u745E\u7480\u7451\u7459\u7406\u73DA\u74C3\u74A8\u7421\u7409\u73EB\u739F\u6591\u740F\u73BC\u7402\u7417\u7425\u74A9\u73B7\u743C\u74D6\u7399\u7487\u748B\u74B2\u740E\u7483\u73B9\u74AE\u74CC\u74CB\u5382\u539F\u5DE9\u90AA\u96C5\u992E\u9E26\u53C6\u81F3\u9B42\u538C\u9EE1\u9B47\u53A3\u52A8\u990D\u9765\u5396\u53C7\u5E72\u520A\u9878\u9097\u5929\u7526\u8695\u5FDD\u538D\u541E\u529F\u5386\u65E0\u4E0C\u96E8\u5DE5\u4E0F\u66F4\u4E8C\u9879\u793A\u4E91\u5394\u4E93\u4E09\u8FB0\u5385\u4E8D\u90B3\u653F\u9E49\u543E\u5389\u53A8\u5143\u53A6\u9F0B\u5DE7\u4E8F\u4E01\u6B82\u6B8D\u928E\u6B9A\u70C8\u578B\u6BAA\u6B7C\u6B8A\u6B81\u6B79\u6B8B\u6B86\u6B96\u6BA1\u909B\u6B83\u86E9\u5217\u9876\u6B9B\u9092\u6B84\u6B93\u6B87\u6B7B\u6050\u6B89\u53EF\u6B92\u8DEB\u6BA3\u88C2\u4EC4\u4E19\u89CB\u71F9\u8D5D\u8C6E\u653B\u8C68\u5282\u5DEB\u4E24\u96C1\u9E40\u6B66\u77F3\u788D\u78A3\u784D\u787C\u7889\u781A\u9B32\u7820\u7850\u78DC\u78B4\u7834\u7804\u7835\u6CF5\u78C9\u78F2\u785D\u78F7\u7802\u7845\u781D\u78D5\u78FB\u784C\u782D\u7843\u785A\u65AB\u77F6\u77FE\u781C\u7888\u786A\u783E\u7825\u7891\u7847\u77FF\u7933\u78B1\u789C\u78A5\u787F\u78B9\u7887\u7897\u7823\u7857\u7817\u7856\u7829\u7837\u77FC\u7855\u7935\u790C\u7852\u7830\u77F8\u786C\u783A\u78CA\u7814\u784E\u7811\u78F9\u7913\u786E\u77FD\u90DA\u9143\u788C\u784A\u6B4C\u780D\u7841\u78F4\u78D4\u54E5\u7800\u7801\u7893\u7901\u6554\u783C\u7877\u77FB\u781F\u7812\u780C\u789F\u7818\u78B6\u7883\u789B\u78A1\u7816\u7806\u7838\u78BE\u8C46\u788F\u7898\u7924\u791E\u7854\u7934\u7839\u78FA\u78CB\u78B0\u78C1\u78E1\u78CF\u786D\u78B3\u7859\u7840\u78A8\u78B2\u78C5\u78D9\u7905\u782B\u786B\u788E\u7827\u782C\u789A\u4E07\u8C55\u52B1\u52A2\u867F\u9120\u8DB8\u5384\u5F00\u539D\u4E9A\u4E25\u53AE\u5F62\u8C49\u8C4C\u5211\u5245\u8C47\u90A2\u53A5\u5140\u590F\u621B\u5961\u867A\u987D\u9E74\u753B\u531A\u7259\u8FB1\u8703\u987E\u74E6\u4E92\u5507\u9192\u8983\u918D\u918C\u9179\u916E\u8D3E\u915A\u6817\u914E\u7C9F\u5398\u9165\u916A\u91BA\u9177\u9170\u8986\u917F\u9178\u91BE\u917A\u916C\u91A3\u9166\u9175\u9161\u9164\u9190\u915E\u91A2\u52D4\u526F\u917E\u9150\u7968\u915D\u914A\u917D\u9169\u9191\u91AE\u9174\u9162\u9176\u916F\u914F\u914C\u9172\u9762\u91AA\u914D\u918B\u91AD\u9163\u919B\u91B4\u91B2\u9157\u8981\u919A\u91AF\u9189\u91B5\u9187\u9185\u91A8\u4E0B\u7109\u6B63\u5FD1\u4E10\u5F13\u5154\u514D\u8C61\u8272\u5F38\u5910\u89EF\u89D6\u89EB\u89E5\u5815\u89DF\u89DA\u5942\u89ED\u52C7\u89E6\u8D1F\u89DE\u96B3\u607F\u9E6C\u89D2\u89E3\u89FF\u659B\u5C0F\u5F39\u8A79\u5B50\u5B5F\u5B59\u5B64\u5B7A\u5B56\u5B5C\u5B62\u5B54\u5B69\u5265\u4E9F\u4E1E\u70DD\u537A\u5C14\u9C36\u9BFB\u7CA5\u9C0A\u9C5A\u9B80\u9BA1\u73BA\u9BA0\u9B6A\u9B88\u4E11\u53BE\u988B\u7586\u77DE\u67D4\u53CA\u8671\u87CA\u9A98\u77DC\u4E43\u5F27\u5915\u5F18\u752C\u729F\u5924\u77DB\u591A\u4E88\u98E7\u821B\u540D\u5916\u6562\u53C8\u7780\u936A\u715E\u5EF7\u5EF6\u6223\u8765\u5EFA\u9A9B\u61A8\u9E5C\u5A7A\u5F15\u961D\u9633\u9667\u9650\u96B0\u9634\u963B\u9642\u9699\u9675\u9661\u968D\u96A9\u962A\u9686\u964D\u9621\u964E\u9672\u965E\u9697\u9674\u9647\u9662\u9640\u9648\u968B\u9635\u9655\u96A4\u964C\u9651\u964B\u9645\u962E\u963F\u9694\u9622\u9677\u9649\u9690\u961F\u9644\u9636\u9664\u9669\u9683\u963C\u9676\u965B\u969E\u9646\u9668\u966C\u9698\u9631\u9685\u9688\u9632\u968F\u965F\u963D\u969C\u96A7\u966A\u9654\u9A72\u9CB3\u9CC1\u9CA5\u9CAB\u9CC0\u5F3C\u9CB2\u9CCE\u9C83\u9CD7\u9CB7\u9A75\u9C96\u9CD0\u9C8F\u9A6D\u9A9A\u9CCB\u9A7F\u9CDE\u9CAE\u9C91\u9C92\u9C8C\u9CC8\u9CC7\u7A23\u9CC5\u9CA6\u9A86\u9A9D\u9CE4\u9A84\u9C98\u9CA7\u9AA2\u9CB5\u9A8F\u9C85\u9A96\u9CB9\u9C7F\u9CD9\u9A80\u9C90\u9CE1\u9A74\u9A97\u9CCA\u9A9F\u9CA9\u9A7C\u9CCD\u9A81\u9CBC\u9A6E\u9C94\u9A73\u9A91\u52B2\u9CA3\u9A76\u9A6F\u9A95\u9CC9\u9CB1\u522D\u9AA5\u9C89\u9A8B\u9A8A\u9CA1\u9C95\u9888\u9CD5\u9AA6\u5F55\u9C86\u9CA0\u9CBE\u9CDC\u9AA0\u9CD4\u9CBA\u9CAC\u5F31\u9A89\u9A99\u9A7A\u9CC6\u9A78\u9C8B\u9A93\u9CB6\u9C99\u9A8C\u9A85\u9C8A\u9A70\u9A79\u9C8D\u9CBD\u9C80\u9CAD\u9CC4\u9AA4\u9CDA\u9C7D\u9CB0\u9A71\u9CAA\u9CDB\u9A8E\u9C9F\u9AA3\u5371\u9C7E\u9CD3\u9A90\u9CAF\u9CE0\u9C9C\u9A88\u9CDD\u9CDF\u9CE2\u9CD2\u9CBB\u9A77\u9A92\u9CA4\u9CB4\u9A83\u9CCF\u9CC2\u9CC3\u9AA1\u9CD1\u9C9B\u9A7B\u9C82\u758F\u5DEF\u9C9A\u9CA2\u9C87\u9CB8\u9AA7\u9C88\u9A8D\u9A87\u4E86\u5F25\u5EF4\u5B51\u9884\u9B3B\u8C6B\u5B53\u5F2A\u627F\u6B20\u4E45\u98DE\u758D\u80E5\u7078\u5760\u86CB\u7678\u51F3\u767B\u5F1B\u5F20\u6840\u87F9\u5F3A\u76C8\u9F10\u4E89\u76B1\u5C15\u5F28\u5F2D\u520D\u5B55\u90B9\u96CF\u6025\u51F3\u6224\u52D0\u4E59\u7722\u5F22\u52C9\u9820\u6028\u9E33\u9963\u9984\u9992\u9989\u9981\u9987\u998C\u9977\u996D\u9979\u996A\u998F\u996B\u9965\u997F\u998A\u996F\u9974\u997D\u9995\u9976\u9986\u8680\u9988\u9985\u996E\u9967\u998B\u996C\u9970\u9980\u9969\u9978\u9971\u9968\u9994\u9975\u9A6C\u9972\u998D\u9993\u9991\u9990\u997C\u9973\u9983\u997A\u997B\u9C7C\u9C81\u9F9F\u534D\u9E50\u4E70\u758B\u5F36\u5F26\u4EBA\u5021\u590D\u4F46\u5048\u5185\u96BA\u5041\u501C\u9FA2\u4F23\u4FF1\u4F97\u4FD8\u8089\u50BA\u4FA7\u4F63\u5092\u4F7E\u4FD7\u4EFD\u50E7\u4F11\u53D9\u7172\u5821\u4ED8\u4F53\u9E3A\u4FEB\u659C\u4EC5\u6C46\u6C3D\u50A9\u4F19\u4FCF\u507F\u5018\u50A5\u7C74\u507B\u5013\u4F1E\u5281\u60A8\u9E6A\u4F34\u5026\u4ED5\u96B9\u8D41\u96C6\u4F8D\u7126\u4F73\u51ED\u72A8\u96E0\u96BC\u96BD\u6041\u9E64\u552E\u4F76\u50D6\u5165\u4F2F\u4FAC\u50BB\u4FD0\u502D\u4F5F\u4EFB\u4F81\u4EEB\u4EDF\u4F8F\u5015\u4F78\u4FA8\u4EC9\u4F69\u4EF6\u4FC4\u4F5A\u5080\u4F4E\u4EF0\u4FFE\u502A\u4F10\u98DF\u4FCD\u5085\u4FCA\u57A1\u4F82\u4F94\u4FC5\u4F0F\u4EEA\u4F2A\u4F18\u523D\u9886\u4F7D\u74F4\u4ECA\u4EE4\u90BB\u90D0\u8D2A\u5FF5\u542B\u76E6\u887E\u4FEF\u4FDF\u4EE3\u5126\u9E30\u4F41\u504F\u7FCE\u50A8\u4EC0\u5348\u503C\u5025\u4F0E\u4F98\u4ED7\u4F6C\u4F7F\u4F2B\u5027\u50A7\u4F57\u4FA5\u4F30\u505A\u500C\u507E\u7F36\u77E2\u6535\u4F91\u50DA\u77F0\u77EE\u77EB\u5034\u4FD9\u4FFA\u4F50\u501A\u77ED\u4F89\u4EC7\u77E7\u9CD8\u96C9\u77EC\u60A0\u77E5\u4F51\u4EC2\u4F3D\u77E9\u4FA0\u7E41\u4E2A\u4EF2\u8129\u4FEE\u500F\u7FDB\u4EEC\u4ECB\u4F5B\u4F7B\u4FF3\u5019\u6538\u4F38\u4FDC\u4E18\u4EDD\u4F70\u5112\u4FEA\u4FDE\u6108\u5175\u4F59\u4F0D\u6086\u756C\u4F65\u4F3E\u5168\u5012\u4E52\u4E53\u4F84\u820D\u4FBF\u5251\u4EC1\u4F58\u4F1A\u4EE8\u4F5E\u7572\u4EC3\u6C14\u90B1\u4F8B\u4FB4\u6B59\u4F55\u4FE9\u655B\u9485\u5408\u9FA0\u547D\u5378\u4FE8\u5CB3\u50ED\u4F22\u5089\u4F64\u5088\u50F3\u506D\u50F5\u4E5E\u4EBF\u6C32\u50CF\u89CE\u510B\u6C1B\u4ED4\u4F60\u6C2E\u4F0B\u6C21\u6BF9\u4ECD\u4FD1\u4F88\u6C2A\u6C28\u4FB9\u5065\u6C15\u6C18\u6C1A\u6C1F\u4FAF\u6C29\u6C16\u9103\u6C2F\u6C22\u6C30\u5133\u6C27\u6C19\u6C24\u6C26\u4ECE\u5095\u4FCE\u5750\u50EC\u4F36\u4EF5\u4F24\u4EF7\u4E1B\u4F7A\u4FA9\u4FED\u5077\u4EE1\u4F17\u4F26\u6002\u4F5C\u8038\u4F27\u4FAE\u5316\u4ED1\u4F08\u9545\u94BD\u951D\u9521\u951F\u94AF\u94F6\u9558\u94A5\u950A\u94A2\u953E\u94DC\u9504\u8D27\u8D37\u94A1\u94E1\u94BC\u9511\u9510\u4ED6\u94CD\u94B5\u94FC\u9497\u94F4\u94CE\u94AC\u9500\u9557\u9501\u954B\u9542\u952C\u949E\u9529\u94DB\u5788\u948D\u4F56\u94C2\u9526\u953D\u9539\u9508\u94A3\u950B\u94EC\u94E5\u9506\u94E3\u9490\u94C6\u954F\u948E\u94E2\u953B\u953A\u9524\u9527\u94E6\u9538\u9528\u9492\u94C5\u726E\u9507\u94C1\u954D\u94C4\u953C\u9512\u9548\u94D6\u94B1\u94FA\u94B9\u955B\u9573\u94FD\u9570\u9540\u94BA\u534E\u9488\u9547\u9572\u9569\u9555\u9517\u94D1\u94D0\u952D\u9553\u9554\u94CA\u94D9\u94B4\u94F5\u94D5\u9563\u94E9\u949B\u951B\u94B8\u951C\u506C\u94D7\u949F\u94FF\u9494\u948F\u9535\u94EB\u948A\u9544\u950F\u950E\u9567\u94C0\u956D\u949A\u94B0\u94D8\u94DA\u94FB\u9489\u94B6\u503E\u9549\u9498\u94CF\u9562\u9556\u9561\u94B2\u9499\u9487\u94EF\u9530\u94AE\u94ED\u94E4\u952E\u9515\u948C\u94A6\u956B\u9575\u956A\u94EE\u9496\u9565\u4F25\u94A0\u9525\u954C\u94C3\u94A4\u94E8\u94EA\u9509\u94E7\u954E\u4EF3\u5055\u94CB\u952A\u9493\u94A9\u94A7\u9534\u949D\u94A8\u9532\u94F8\u9516\u4F5D\u94DE\u9503\u9505\u94DD\u9537\u94D2\u954A\u952F\u9513\u9560\u94CC\u94B7\u949C\u9514\u9519\u9546\u94F9\u9568\u9564\u9552\u9541\u9518\u9533\u94B3\u956C\u9543\u951A\u5CB1\u9486\u955A\u94E0\u9495\u94F7\u9574\u9531\u94BF\u951E\u9502\u9EDB\u9522\u94DF\u94BE\u956F\u9523\u956E\u9536\u9559\u948B\u9551\u955D\u94F0\u9566\u94AA\u94AB\u888B\u94F1\u950D\u94F3\u94AD\u94FE\u94C8\u94BB\u9550\u9576\u953F\u955E\u955F\u94F2\u950C\u9571\u952B\u955C\u94C9\u5E74\u50A3\u4FE6\u4FF8\u5029\u5083\u503A\u4FF5\u4F20\u4F1F\u50B2\u667A\u76D2\u4FDD\u4F83\u9F9B\u9894\u988C\u4FE3\u8212\u90C3\u9E3D\u62FF\u4FA3\u5047\u7FD5\u5F07\u50CE\u4FC3\u4E4D\u5043\u6998\u4EDE\u4F74\u503B\u5028\u4F0A\u4F1B\u4FB5\u5053\u50C7\u4F3A\u600E\u4F32\u50FB\u4ED3\u5014\u501F\u4F9B\u504C\u5061\u821E\u4F6F\u5106\u50D4\u4ED9\u7F3A\u6217\u521B\u7F38\u50AC\u9E27\u7F50\u7F45\u4F3C\u4F43\u502E\u4FDA\u5076\u5107\u504E\u5072\u5121\u6BCF\u4EC6\u502C\u4FA6\u508D\u4F7C\u4FF6\u50E6\u4F4F\u4F09\u4EFF\u4F9D\u4FAA\u4F01\u4FE1\u4F67\u654F\u501E\u505C\u5134\u4F4D\u50EE\u500D\u79BD\u4F2D\u6BD3\u5FC3\u65EC\u65E8\u6120\u60FA\u6168\u601B\u608D\u90C7\u60D5\u6068\u6162\u61AC\u60C6\u6146\u607D\u60E7\u606B\u607B\u60D8\u5FEA\u608C\u60A6\u618E\u60EE\u4E5F\u61B7\u5FD6\u5FEB\u609A\u61D2\u9896\u4E78\u60D9\u602A\u988D\u603F\u6084\u60DD\u60D4\u988E\u604D\u6043\u602F\u60BB\u5FC5\u6015\u60F6\u61CA\u6064\u60B8\u6100\u606A\u52FF\u5FCF\u606C\u520E\u5FFB\u90B2\u5FFD\u60DB\u6027\u6127\u52FE\u52FA\u60A2\u609B\u6035\u530D\u60E8\u5FE7\u6175\u6177\u5300\u6021\u61BE\u6088\u60E6\u614E\u6096\u5FEE\u60B0\u6103\u60CB\u612D\u9E28\u6019\u6124\u61AD\u6062\u5306\u6016\u8084\u60F0\u7591\u60ED\u5FE1\u600F\u5FF1\u60AD\u602B\u6126\u60B1\u60AF\u6052\u61E6\u9877\u6053\u6000\u6026\u6079\u6078\u9E35\u6003\u609F\u90AC\u5310\u9E71\u6144\u6110\u6014\u5FC6\u61C8\u61BA\u5FF8\u5FFA\u6195\u957F\u610E\u60DF\u6194\u601C\u5FE4\u52DA\u6109\u5FFE\u6070\u600D\u6006\u6094\u6BD4\u6042\u5752\u7686\u60DA\u6BD5\u6BD9\u6005\u6BD6\u5FF3\u60C5\u612B\u53E5\u6092\u52AC\u591F\u96CA\u9E32\u6115\u5305\u4E5C\u5207\u5FC9\u600A\u6151\u6004\u60EC\u6029\u4E16\u60DC\u8D33\u61C2\u616C\u61F5\u614A\u614C\u5C6F\u5308\u5228\u60F4\u987F\u90A8\u607A\u4E4C\u7538\u6083\u609D\u60EF\u6123\u60BC\u6054\u6165\u8A07\u60B4\u60C7\u60CA\u67AD\u9E1F\u51EB\u5C9B\u8885\u6114\u61A7\u607C\u5FD9\u61D4\u5FED\u624B\u63FE\u634F\u8822\u62C5\u634D\u63D0\u63ED\u64AE\u628A\u6388\u9753\u63A2\u634B\u975B\u6325\u63F4\u9759\u6447\u6484\u62E5\u652B\u6252\u626E\u63B8\u8012\u63F8\u8019\u8025\u8027\u8016\u62AB\u8017\u8031\u62B9\u6289\u8030\u8018\u8028\u8014\u8020\u801C\u8024\u8022\u8015\u8029\u8026\u802A\u8032\u6421\u6387\u6414\u644A\u9EB9\u62E9\u9EB8\u634E\u6487\u6491\u6405\u6402\u639E\u6284\u62CC\u6321\u64DE\u6301\u6302\u62EE\u64B7\u62CD\u6525\u63EA\u64AD\u6273\u6266\u6376\u62EC\u63D2\u5951\u6322\u6380\u6293\u6298\u62C6\u6295\u6258\u605D\u6308\u64E4\u6512\u64AC\u62B5\u7D5C\u6291\u627A\u636D\u641C\u642C\u640B\u627E\u6269\u640F\u8D3D\u70ED\u7118\u57AB\u6355\u62D4\u63BA\u62E2\u52BF\u6270\u86F0\u642A\u6328\u62ED\u9E37\u631A\u62AC\u64BC\u62A4\u63AE\u6369\u62DA\u646D\u62E8\u7D77\u6382\u4E30\u64E6\u652E\u64BA\u63A7\u6316\u6280\u6313\u64C0\u62F7\u6377\u63CE\u62E7\u7809\u8273\u90A6\u6448\u6320\u5F57\u6167\u6309\u6625\u8D58\u93CA\u64A9\u5BFF\u6CF0\u71AC\u79E6\u8202\u7352\u87AF\u63A9\u637A\u594F\u638E\u630E\u6267\u629B\u9A9C\u9CCC\u5949\u8071\u631F\u5D85\u62E3\u62E3\u6662\u626A\u63FD\u5E2E\u8707\u62C2\u6311\u6392\u54F2\u8E05\u6401\u62BD\u62BB\u62FD\u8A93\u625B\u9752\u6509\u8D23\u6474\u64C2\u9EA6\u6294\u62A8\u6371\u636F\u625E\u63AD\u629A\u6342\u632F\u6253\u62D3\u627C\u6485\u8868\u7D20\u647D\u7E9B\u6BD2\u633D\u6362\u62EF\u626D\u63C9\u6254\u6390\u4E13\u6345\u6292\u6496\u633A\u6426\u63C6\u6323\u626C\u6400\u64B8\u592B\u66FF\u89C4\u62CA\u63A8\u643A\u62CE\u637B\u8F87\u62F4\u6361\u63C4\u62FE\u632B\u62A1\u62D6\u63FF\u62C3\u62A2\u64D2\u6307\u63AC\u638F\u6279\u63E9\u62D8\u62B1\u63F2\u627D\u6363\u63F3\u63CD\u6367\u644F\u629F\u6276\u64B5\u6263\u6339\u6350\u635F\u62D0\u64CD\u63D6\u634C\u64B0\u62BF\u6349\u97E6\u97EB\u63E0\u97EC\u62DB\u97E8\u6444\u63F6\u636E\u62A0\u6343\u62A5\u626B\u647A\u63E1\u64E2\u6326\u6556\u632A\u64D7\u62D2\u97E7\u6452\u640C\u6398\u63AA\u6478\u6492\u635E\u62F1\u6495\u63B7\u62E6\u63D5\u643D\u642D\u6413\u62FC\u6420\u63CF\u6499\u641B\u51FB\u624E\u63E3\u9B36\u6467\u62D9\u5AE2\u62DF\u62D7\u63BE\u62F6\u6346\u6482\u63BC\u6441\u62BC\u6446\u64D0\u63B4\u645E\u62C7\u6251\u6389\u64A4\u6412\u6458\u631D\u62C4\u6297\u6454\u6296\u631E\u6324\u626F\u62E4\u637D\u6396\u6445\u63B3\u62C8\u641E\u63A0\u6518\u62C9\u63DE\u649E\u638A\u63A5\u645B\u6410\u64C5\u6283\u64FF\u53E3\u5531\u5527\u559D\u562C\u5427\u9091\u54CF\u55F3\u5541\u5250\u5480\u54C3\u5458\u5457\u5624\u9E43\u55E3\u56BC\u53EA\u53ED\u55E1\u55F2\u5416\u5429\u564C\u5574\u5446\u55B3\u5549\u5664\u5587\u55FD\u53F9\u5575\u55D3\u555C\u55E8\u54E8\u5621\u5522\u54AA\u55BD\u5556\u5435\u54A3\u5410\u564E\u54C7\u55D1\u54E7\u90E2\u54AD\u563B\u562D\u55A4\u55E5\u5523\u5662\u54CD\u54B1\u54DD\u557E\u54AF\u549A\u547C\u54CC\u553E\u542C\u566C\u53FD\u54DA\u561A\u5412\u543D\u54E6\u5144\u55C5\u5471\u5564\u55D6\u5506\u561B\u5601\u54DE\u558A\u542E\u5577\u54FA\u5420\u5499\u548F\u5509\u548D\u5533\u53F6\u561F\u55D4\u54F1\u55E6\u5693\u5583\u568F\u56D4\u5473\u5431\u54A4\u5580\u6222\u5632\u54EE\u55A7\u549B\u5576\u55DC\u54D3\u5627\u55D0\u5495\u567B\u55B7\u5639\u54B4\u55B9\u5454\u550F\u5535\u54A6\u610D\u556D\u53E6\u53FB\u5496\u540A\u5489\u5578\u867D\u5561\u547B\u9EFE\u54BA\u8E36\u8E22\u8E4B\u8DDF\u5685\u8DDA\u8E29\u56AF\u8E48\u551D\u8E4A\u8DB4\u54C2\u8E6D\u5401\u8E45\u8DDB\u8E0F\u8E5A\u8E50\u8E9E\u5478\u5448\u8DF1\u8DEC\u54E2\u8E12\u8E6F\u8DEF\u8DE3\u8E53\u8E35\u8E2C\u8DC3\u8E3D\u8DFA\u8DCC\u8E9C\u8DDE\u8E09\u54A5\u8DF5\u8DCB\u8DC6\u8E41\u8E31\u8E94\u8E2E\u8E7F\u8DC2\u8E2A\u8E5C\u8DCE\u8DF7\u5434\u8E7D\u8E26\u8DE8\u5456\u8DCF\u5452\u54FD\u8DF3\u8E70\u5641\u8DD6\u5514\u8DBC\u8E76\u53EE\u8E42\u8DBF\u8E0A\u8E3A\u8DEA\u54A7\u8E6C\u5475\u8DD7\u8E1F\u8DC4\u8DB5\u8DF8\u8DD1\u8E40\u8E0C\u8DBA\u55DD\u8E81\u8E51\u8E1E\u5544\u8DDD\u5443\u8DFD\u54D1\u8E7C\u8E87\u8E2F\u8E8F\u8E52\u5658\u8E49\u8E72\u8E66\u55C4\u560E\u8E39\u5440\u53F7\u8E90\u8E1D\u560C\u55B1\u8E85\u5413\u8E14\u8E44\u8E62\u8DE4\u8E7E\u8E74\u8DF9\u8DF6\u8DFB\u8DBE\u8DD0\u8E23\u5524\u543C\u5438\u54C6\u5432\u554A\u5439\u9955\u5654\u5417\u565C\u5450\u5459\u54BB\u5490\u552F\u564D\u5464\u541F\u52CB\u54D9\u55BB\u54C8\u5565\u5403\u5589\u90E7\u5511\u54D7\u548B\u54BF\u545B\u5659\u53F1\u5423\u5487\u543B\u553F\u5555\u5421\u5588\u54D4\u5486\u558B\u5428\u545C\u9E23\u556A\u54F3\u55EA\u552A\u551B\u55C9\u5567\u544B\u55F7\u5566\u5415\u659D\u5492\u54ED\u5668\u56A3\u9A82\u9E6D\u54C1\u566A\u569A\u5640\u9F0D\u5530\u53E8\u5631\u54A1\u55EB\u5455\u53E9\u5482\u522B\u53FC\u989A\u5594\u54D0\u9102\u5462\u9E57\u9E2E\u54EA\u567C\u53DA\u5676\u5520\u54C4\u5636\u5657\u55CC\u561E\u54CE\u558F\u5453\u5684\u55D2\u55EC\u54A9\u55DF\u55CD\u55DE\u55B5\u5608\u5642\u5686\u5DF3\u5623\u5BFC\u5598\u55E4\u54D5\u5F02\u5DFD\u5484\u5476\u5406\u5466\u53EB\u54DF\u5599\u6C11\u549D\u559F\u54E9\u563F\u54BD\u55EF\u5477\u5581\u5570\u5582\u9119\u5463\u535F\u557C\u5600\u54AC\u542D\u5537\u54D2\u54DC\u5543\u5472\u5501\u556E\u5494\u55F5\u8DB3\u5550\u5634\u5618\u552C\u5671\u54FC\u568E\u56B7\u55FE\u5591\u5647\u566B\u553C\u54B3\u5C38\u5237\u5C43\u5339\u6BBF\u5C3F\u81C0\u7280\u989E\u747F\u805A\u7FF3\u5A36\u7E44\u5C51\u5C4E\u5C09\u5C61\u9A4E\u99FA\u9A11\u99FC\u9A1E\u9A69\u6233\u5200\u9B18\u9B08\u9AEF\u9AFB\u9B0F\u9AE6\u5203\u622E\u9B12\u9B03\u9B13\u52E0\u5C5E\u5320\u9AE1\u9AF9\u5C65\u5C50\u5C63\u9AFD\u5C66\u9AE2\u9E68\u5C3E\u53EC\u9AEB\u9B23\u9B1F\u9AED\u71A8\u9ADF\u87B1\u8086\u4E60\u5FCD\u6170\u533E\u5F5F\u8033\u81C2\u943E\u806A\u6A97\u53D6\u8042\u803F\u58C1\u8043\u804A\u8052\u804D\u5C60\u803D\u8069\u8058\u74A7\u8035\u7513\u8036\u8046\u64D8\u5C45\u804C\u5288\u8054\u8034\u5B16\u895E\u803B\u8B6C\u533A\u5C39\u6BB4\u74EF\u5C3B\u6B27\u9E25\u5326\u541B\u5369\u531D\u536B\u9890\u532E\u532A\u8D5C\u81E3\u5C4A\u5367\u5F50\u5201\u7FDA\u5E1A\u7FC2\u5BFB\u7075\u5321\u5C4B\u7FC0\u5C42\u7FDF\u53F8\u7FBD\u7FBF\u7FFC\u7FE0\u7FEF\u7FCC\u5B71\u5C59\u5C3A\u663C\u533B\u533C\u9139\u54AB\u5C3D\u5C3C\u531C\u5C41\u5C49\u9E24\u90A3\u53F5\u52AD\u5267\u90E1\u90B5\u615D\u7FA4\u8F9F\u5DE8\u5C40\u51F9\u5155\u533F\u7FBC\u5C4F\u5C55\u5DF1\u5DF2\u7199\u5FCC\u5C48\u9DA0\u90FE\u6539\u5323\u5EFF\u6614\u83D6\u840C\u83B3\u8349\u83AB\u66AE\u5E55\u5893\u84E6\u6155\u6479\u52DF\u845B\u9E4A\u855E\u82AD\u831B\u8513\u84C2\u84C7\u89CF\u5178\u84E5\u83DC\u8363\u69CA\u8365\u8367\u85E4\u5851\u8314\u8366\u82CB\u85D0\u9EFC\u9EFB\u8364\u52B3\u8424\u524D\u84AF\u82F4\u989F\u83B9\u8484\u8499\u833C\u83A9\u714E\u526A\u8315\u7FE6\u8521\u6563\u83BA\u82D8\u8425\u83D4\u82DC\u837D\u8426\u65A0\u5171\u4E1A\u666E\u671F\u76CA\u9EF9\u57FA\u5914\u65AF\u84CA\u8572\u90BA\u6B3A\u6B49\u606D\u60CE\u9E63\u5DF7\u68FB\u82AC\u51FF\u7DA6\u914B\u9EC7\u83BF\u8459\u83D8\u83E5\u8309\u850C\u82EF\u83B1\u8570\u83F9\u83E0\u838E\u843D\u848E\u85E9\u84B2\u8584\u8497\u5290\u8333\u85B8\u840D\u83CF\u8361\u85FB\u8556\u8303\u8453\u832B\u850A\u853D\u848C\u83FC\u85AE\u828F\u82D2\u76D6\u83F1\u8537\u7F94\u7FB9\u8451\u7FB2\u7207\u7FA1\u7F95\u7F8E\u98A7\u9144\u7F91\u83B0\u6059\u9E73\u85B9\u59DC\u85E0\u83C2\u8469\u8581\u9996\u8590\u8429\u8389\u83A0\u840E\u8543\u85B0\u85DC\u8306\u828A\u8331\u8463\u835E\u82B9\u829F\u8283\u8587\u8347\u8605\u84F0\u84CF\u844E\u831A\u83AA\u82FC\u82BC\u859B\u8490\u8636\u830B\u82AA\u8538\u8406\u84D6\u8438\u83A8\u85E6\u8611\u863C\u8302\u8487\u8474\u8473\u84E2\u8386\u8307\u830F\u83BD\u8328\u85CF\u829D\u85E8\u9E5A\u82D4\u82A6\u8439\u8517\u853C\u5345\u977C\u97AE\u97A8\u9776\u8378\u8433\u5E26\u8313\u8456\u84C9\u8616\u9781\u977A\u82B0\u9798\u7CF5\u977D\u978B\u9792\u9773\u8559\u978D\u8457\u8356\u52D2\u9785\u840B\u82CE\u853B\u976C\u8431\u82E7\u8423\u83EA\u9770\u839E\u9794\u97C2\u5B7D\u97A3\u9778\u97AC\u83C0\u84FF\u97AD\u9774\u84CD\u97A0\u835B\u97AB\u97A1\u82E6\u846B\u83C5\u97A7\u97B4\u97AF\u97B3\u97B2\u977F\u9791\u5173\u827E\u6AA0\u837B\u83B7\u83B8\u8350\u832C\u8418\u8351\u827D\u8284\u90D1\u911A\u84BA\u64CE\u82E5\u60F9\u82CF\u8304\u8354\u835A\u8B66\u82F1\u841C\u84DD\u9769\u8427\u8300\u848B\u8327\u8489\u83F2\u71D5\u5807\u853A\u9EC4\u7518\u8341\u85B7\u8649\u85FF\u89D0\u857E\u831C\u67D0\u828B\u82A3\u849C\u82F9\u82E4\u52E4\u82C8\u829C\u5170\u5176\u82B8\u82AB\u751A\u90AF\u911E\u85A4\u82DB\u8564\u846C\u82CA\u8568\u82BD\u84D0\u8508\u8638\u8548\u852B\u827A\u828E\u83DF\u85A2\u836A\u83F0\u82A4\u84B8\u82A8\u827F\u840F\u8305\u8317\u82D1\u839B\u836B\u8428\u83C9\u84BB\u84DF\u85D3\u852C\u84E3\u82A1\u8475\u830E\u8503\u836C\u82AE\u8336\u82FB\u8411\u830C\u8549\u834F\u8470\u82D3\u832F\u82A9\u83CD\u8629\u833D\u839C\u517B\u82A5\u837C\u8343\u835F\u8539\u83B6\u8377\u82C1\u839D\u82B1\u9E72\u84A8\u8446\u82CD\u8393\u84D3\u8385\u82AF\u8340\u83CA\u82FE\u82B4\u828D\u8461\u85BF\u8471\u82CC\u8404\u8298\u8488\u835C\u854A\u82DF\u82DE\u8311\u7F8A\u8288\u7FAF\u7F93\u7740\u85C9\u85D5\u841A\u845C\u7F96\u7F9D\u84B1\u7FA7\u83DD\u84C1\u5DEE\u83C1\u7FB1\u7F9E\u7F9F\u8299\u7F9A\u82C7\u7FD4\u7F8C\u7FB0\u857A\u8557\u912F\u9100\u83B4\u656C\u8392\u843C\u846D\u847A\u82E0\u82C9\u851A\u82D5\u857B\u8338\u8399\u8282\u831D\u84FC\u8368\u8369\u859C\u82E3\u8291\u4E95\u5E76\u4E26\u8346\u82F7\u8401\u845A\u74F6\u9E62\u5584\u8353\u84B4\u8832\u84B9\u6714\u9998\u83E1\u8301\u6221\u5B73\u5179\u82E1\u6148\u83C7\u52D8\u836F\u8585\u836E\u836D\u8574\u83BC\u8339\u8297\u659F\u82D7\u66F2\u66F9\u5C0A\u83CC\u7337\u5960\u8335\u84BD\u85AF\u8511\u841D\u750D\u85A8\u77A2\u8478\u9E4B\u8334\u85DF\u517C\u8482\u84A1\u832D\u85AA\u83FD\u85B3\u860B\u84EC\u82B3\u833A\u82A0\u8359\u8360\u83B2\u82BE\u82B7\u8308\u8403\u82EB\u84BF\u85C1\u8500\u8476\u8618\u8479\u851F\u83F8\u8398\u858F\u83E9\u849F\u84E0\u8292\u8579\u8344\u8352\u84C4\u84D1\u82C4\u8627\u5C71\u5D4B\u5C9C\u5D29\u5C98\u5C97\u5CA8\u989B\u5CD2\u9145\u5D1F\u5CEA\u5D92\u5D56\u5D27\u5D0A\u5D03\u51FC\u5CC4\u5CED\u5D74\u5D99\u5D5D\u5D1A\u5CD9\u5D36\u5D01\u5315\u5D4A\u5D93\u5CF0\u5CC2\u5CC1\u5CE4\u5C9A\u5CE8\u5D72\u5D6C\u5DCD\u5D00\u5CFB\u5D45\u5D34\u5CEC\u9B2F\u5D06\u5DC5\u5C90\u5D07\u5CE3\u5CB5\u51F6\u5CBD\u70AD\u5D24\u5D26\u5D0E\u5D7D\u5D2D\u5CE1\u5C6E\u5CBF\u5CAB\u5CD8\u5CCF\u5D16\u86A9\u5CB8\u5CFF\u5CDB\u5CA2\u8C73\u5CA9\u5C8D\u5C7C\u5C88\u5D3E\u5DA6\u51FD\u5C8C\u5C81\u523F\u5CD7\u5D9D\u5DC9\u5CE5\u7FD9\u5D14\u5DB2\u5CAD\u5C91\u5D04\u5D5B\u5CC7\u5C79\u5D5A\u5C9E\u5CCB\u5DB7\u5CA3\u5D3F\u5CB7\u5D0C\u5C96\u5D8D\u5CA0\u5C82\u5C7A\u5D1B\u5D58\u5D02\u5D4C\u5D41\u9146\u5D6F\u5D6B\u5D9F\u51FA\u5C7E\u89CA\u7C9C\u51EF\u5240\u795F\u5D21\u5E7D\u5D2E\u5CAC\u5D4E\u5D3D\u5CE7\u5D12\u5D69\u5D1E\u5C7F\u5DC7\u5D82\u5973\u5A3C\u5AAA\u5A9A\u59B2\u5A9E\u5A6B\u5ADA\u5AD2\u59D7\u5A47\u5A64\u59D0\u5A9B\u5AB1\u5A23\u5A75\u65AD\u5AE9\u527F\u5A61\u5974\u5A3A\u52AA\u5E11\u782E\u5F29\u5B65\u9A7D\u80EC\u6012\u5AE6\u7D9D\u5999\u7E2F\u7D84\u59EF\u7DAA\u5A58\u7E86\u7DA7\u7DA1\u7E95\u5AF1\u5A03\u5958\u59DE\u5B09\u5A5E\u5A93\u598A\u59C2\u59DD\u5996\u5A07\u59E4\u98E8\u5A5A\u5A25\u59D3\u5AB3\u5A62\u5AB2\u5AC2\u5E7A\u53B6\u5A18\u5B37\u7CF8\u5A0D\u5A99\u5A00\u59AD\u5E7C\u59AB\u4EE5\u59CB\u5992\u5E7B\u5AA5\u5B1A\u5A0F\u757F\u5AC3\u5A7B\u59B9\u5993\u59F9\u59E5\u5A76\u5A55\u5AC1\u5A49\u5AD4\u5A06\u59D1\u5A60\u5AFD\u5A4D\u59F1\u59E8\u5AC9\u51F5\u723F\u59DA\u6536\u5A34\u59AF\u5A09\u59CA\u7F0A\u59EE\u7F07\u7EF2\u7F26\u5B2C\u7EF7\u7EF6\u7EF8\u7EB2\u5A86\u7EC4\u7F13\u7F28\u5B40\u7F08\u7EE5\u7EE8\u7EE4\u7EB7\u7F2F\u7F03\u7EA3\u7F00\u7ECE\u7EE1\u7EF1\u7F15\u5F5D\u7EB1\u7ECA\u7EFB\u7EEB\u7ED3\u7F2C\u7EF5\u7F10\u7EE3\u7EE6\u7EDB\u7EDC\u7EC8\u5AC4\u7EB4\u7EA4\u7F0E\u7F0D\u7ED7\u7F34\u7F35\u7EB8\u7EFA\u7EA9\u6215\u7F1A\u7F04\u7EBF\u7ED2\u7EC2\u7ED0\u7F16\u7F20\u5978\u7F1C\u7EEA\u7EBB\u7EFC\u7EFD\u7EED\u7F29\u7F24\u7ED5\u7EFE\u7F2D\u7EAE\u7EEE\u7ED4\u7EA8\u59A9\u7EC3\u7EC3\u7F06\u7ECB\u7F0B\u7EEF\u7EC5\u7EA2\u7F19\u7EA1\u5998\u7ED6\u7EE0\u7EAD\u7241\u5A2A\u59A7\u5A20\u7F1B\u7F25\u7F05\u7F30\u7EDD\u7EBD\u7EA7\u7EBE\u7EBC\u7EFF\u7ECF\u7EC9\u7EB3\u7EF4\u7ED8\u7F0F\u7ED9\u7EA5\u7F11\u7EB5\u7EB6\u7EDA\u7EA6\u5F58\u7EF9\u7EB0\u7EC1\u7EAF\u7ED1\u7EE9\u7EAC\u8F94\u7EE2\u7EC7\u7EF3\u7F17\u7F32\u7F09\u7EAB\u7ECD\u7F2A\u7EAA\u598D\u5A05\u7F22\u7F02\u7EC0\u7242\u7F2E\u7F23\u7ECC\u5A73\u7EE7\u7EA0\u7F18\u7F2B\u7F01\u7EC6\u5AD6\u5A94\u7F33\u7F0C\u7F27\u7EF0\u7F14\u7EDE\u5AE3\u7F1D\u7F12\u7EBA\u7EDF\u7EB9\u7F31\u7F1F\u7F21\u5A29\u597D\u599E\u5A83\u5976\u59A4\u5A40\u5A3D\u5F56\u59FD\u5A7F\u5B01\u5988\u59C8\u5B45\u5997\u8821\u59F6\u59B0\u5979\u59BC\u5981\u59A3\u5A67\u5AE7\u5A4A\u5982\u5A1F\u5A31\u5A32\u6055\u7D6E\u5A13\u5A35\u59AA\u5AD5\u59EC\u5987\u5B25\u5AEA\u59AE\u5A1C\u5983\u5AEB\u5A84\u5A7C\u5B3F\u5A96\u5AE4\u5A92\u59D8\u598C\u5ABE\u5ACC\u5AB8\u5A69\u4E61\u59D2\u4E1D\u7E9F\u9E36\u9095\u5DDB\u753E\u5DE2\u5A0C\u59FB\u5B1B\u5AD8\u59C6\u5A82\u5AE1\u59E3\u5A4C\u59A8\u5AED\u5A4B\u5A77\u5ADC\u5B17\u7530\u80C3\u9899\u611A\u56DB\u5719\u679C\u56F0\u56E2\u9897\u5925\u9EE0\u9EE2\u9ED8\u9EEA\u9EE9\u9EDF\u9ED4\u7554\u5708\u9EDC\u9EDD\u9EE5\u9EEF\u91CC\u7564\u9ED1\u58A8\u7566\u91CE\u5709\u56F7\u7548\u7565\u56FE\u7556\u756F\u5703\u754E\u6BCC\u8D2F\u6BCB\u7579\u56FA\u56E0\u56FF\u7578\u6069\u7537\u7532\u79BA\u7F7E\u7F62\u7F74\u7F76\u7F5A\u7F71\u7F6E\u7F72\u7F5F\u7F68\u753D\u7F6A\u7F58\u7F7D\u7F61\u7F57\u8700\u7F79\u9E2D\u7FC8\u7F81\u7F69\u8A48\u56FD\u7540\u5704\u56ED\u753A\u754F\u56DD\u5885\u56DA\u755B\u56F9\u754B\u754C\u56F5\u601D\u56EB\u6BD7\u56E4\u7574\u570A\u56F4\u56DE\u5706\u7581\u5B32\u570C\u56E1\u7D2F\u9E6E\u7FFE\u5710\u571C\u7F4D\u6BCD\u7583\u535C\u684C\u5353\u6B46\u66B9\u97F5\u904F\u97F6\u9062\u9000\u9088\u5E1D\u557B\u777F\u671B\u7517\u9117\u8D1E\u9065\u557B\u8FE5\u6572\u65C1\u516D\u89D1\u5546\u92AE\u683E\u53D8\u5156\u886E\u4EA4\u5955\u86EE\u5F2F\u5B6A\u9012\u8114\u604B\u9E3E\u631B\u5F08\u5CE6\u5A08\u4EB8\u65B0\u8FC7\u5B70\u901F\u90ED\u6566\u9E51\u6534\u7763\u7CB2\u58D1\u9910\u900D\u8FF7\u9074\u53D4\u5C31\u52CD\u4E3B\u9035\u5E7F\u8FEB\u9051\u4EB9\u900F\u9036\u8FD4\u9022\u9004\u9020\u9009\u5F66\u905B\u8FC1\u9002\u9041\u9891\u989C\u8FD1\u9005\u4EA2\u8FED\u8FFD\u65B9\u9080\u8863\u8FCE\u88D2\u80B2\u9021\u8FF0\u719F\u587E\u5145\u900B\u9011\u7387\u8FE8\u904D\u5F03\u906E\u6597\u9083\u8FA3\u8D63\u5F70\u74E3\u8FA8\u8FA9\u9123\u902D\u8FAB\u6587\u5934\u8FBE\u9DDF\u9016\u901B\u9F50\u9F51\u5218\u6593\u658B\u658C\u90CA\u6548\u5FDE\u619D\u8FDE\u541D\u8FB9\u8FE6\u7D0A\u5E02\u902E\u8877\u5242\u6B62\u6B65\u9003\u9057\u9063\u4EA6\u8FEA\u4E0A\u6C35\u80AF\u9026\u8D5F\u8FFA\u8FC2\u8FD8\u6B67\u98A4\u8FD0\u8A00\u8FDC\u6B24\u6B64\u5FD0\u96CC\u9E6F\u9017\u903C\u8FC8\u9010\u9F7F\u8FD3\u5361\u9038\u8D62\u9082\u900A\u8FE9\u9079\u5F6A\u88A4\u901A\u8FC5\u8803\u9883\u902F\u8FBD\u8FF3\u7FB8\u5B34\u8664\u8912\u6BC5\u98A6\u8FD5\u52BE\u523B\u988F\u9014\u903E\u8FC4\u591C\u5352\u6206\u8FE4\u8FEE\u864D\u8D40\u67F4\u864E\u864F\u4E9B\u7961\u7826\u89DC\u8651\u865E\u8650\u865A\u7D2B\u8654\u8A3E\u901D\u4EB5\u8FDD\u9068\u5360\u8ADF\u88DB\u818F\u89C7\u4EAE\u4EAD\u8C6A\u4EB3\u9AD8\u6BEB\u4EAC\u70B9\u54C0\u8B0F\u6218\u8B53\u5256\u901E\u74FF\u8AF2\u4EAB\u70F9\u90E8\u4EA8\u8944\u9050\u4E69\u5362\u5803\u8FE2\u4E0E\u9885\u90A1\u8FDF\u65C3\u65CC\u65C4\u65C5\u65C6\u653E\u65D6\u65D0\u65CB\u65CF\u65BD\u65CE\u65D7\u65BC\u65D2\u9E2C\u907F\u65DE\u7ACB\u97F3\u7ADF\u7AE0\u610F\u7AED\u9052\u4EB2\u7AE6\u4EA7\u98D2\u9053\u7AE3\u8F9B\u9001\u7AD1\u7AEB\u9042\u7AD8\u9756\u7ADE\u7FCA\u8FDB\u8FF8\u9058\u9006\u7AEF\u59BE\u906D\u7AE5\u9075\u7AD9\u8FBF\u9F88\u9F83\u9F7C\u9F8B\u9F82\u9F6F\u79BB\u9F6E\u9044\u9F89\u9F84\u9F58\u9F81\u9F80\u9F85\u9E6B\u9F8A\u9F86\u9F8C\u9F87\u4EA1\u8093\u8182\u88D4\u76F2\u58C5\u9954\u96CD\u4EA5\u74E4\u7384\u755C\u9099\u5FD8\u6C13\u5984\u5DE1\u908B\u4EA9\u88F9\u5364\u9047\u903B\u8870\u7980\u4EB6\u5363\u9E7E\u535E\u9034\u9046\u8FD9\u8FF9\u907D\u66F0\u6656\u65F0\u5195\u6612\u7166\u65F5\u667E\u5197\u810E\u80BD\u809B\u51A2\u8D31\u80BC\u7762\u677F\u6755\u6760\u67F0\u6877\u677C\u6784\u8D49\u6893\u6C93\u6FC9\u6F31\u53CC\u53C9\u6D60\u6E83\u705E\u6D12\u6CD3\u6DEE\u6E1D\u67D2\u6C9F\u6D2D\u6C6B\u6E59\u655E\u70AF\u7094\u6569\u7203\u5C18\u5739\u5609\u57AF\u4E3F\u767F\u79C9\u5241\u7C0C\u5902\u69C3\u5904\u9E31\u68A8\u6BB3\u5F73\u5284\u90C8\u9E39\u61A9\u9118\u672F\u620B\u5E8B\u4E49\u4EA0\u5E80\u5FD2\u910C\u6020\u76DB\u5F01\u8BB9\u8BE3\u5B8B\u5EFE\u5BA7\u8E47\u524B\u4E42\u90C1\u6740\u760C\u75A2\u5811\u75B4\u5937\u65EE\u5C22\u4E28\u86AC\u86CA\u4E2C\u95FC\u88E2\u90E6\u8D21\u9E5D\u706D\u73A5\u538B\u9104\u6B45\u73AA\u73AB\u73CC\u73AD\u7467\u73EB\u5386\u4E8D\u4E8F\u6050\u9143\u780D\u52A2\u5245\u4E1E\u5F18\u961D\u9CCB\u9CB9\u9C90\u9CCA\u9A95\u9CA1\u9CD4\u9C8B\u9C7E\u9CAF\u5DEF\u4E45\u6C46\u96B9\u4F76\u4FCD\u4EEA\u90D0\u5348\u6535\u4F51\u4EF2\u4EDD\u4FEA\u4F3E\u6C14\u4FB4\u50F3\u4EBF\u6002\u4ED1\u8D37\u948D\u9488\u9553\u956A\u94A9\u9486\u94F1\u94F3\u953F\u988C\u4F1B\u4F32\u65E8\u52FA\u5FFE\u5FC9\u6293\u605D\u6269\u7118\u64E2\u624E\u9091\u5457\u53ED\u5693\u5627\u53FB\u5514\u5459\u5565\u5423\u54D0\u9E2E\u55EC\u622E\u5C50\u6170\u5C39\u5201\u90B5\u5DF2\u84E5\u8363\u8314\u85D0\u84AF\u8484\u4E1A\u6B49\u60CE\u83B0\u8605\u84CF\u830B\u839E\u827E\u827D\u911A\u8327\u828B\u82C8\u911E\u8638\u828E\u830C\u82A5\u8288\u9100\u5E76\u8585\u66F2\u8335\u750D\u8359\u849F\u5C7A\u5C7E\u53B6\u59AB\u5E7B\u7EF7\u5A86\u6215\u7ED2\u598C\u7E9F\u56F0\u56D7\u624C\u6C69\u6E25\u5E86\u9E80\u9E38\u98DE\u6C3D\u4F08\u94A1\u69CA\u836E\u8FBE\u8FE5\u5955\u989C\u5934\u619D\u9057\u6C35\u5FD0\u4EAD\u70B9\u8FF8\u8182\u908B\u7248\u724C\u724D\u7247\u7252\u987E\u6539\u987E"),Xo=new String("\u842C\u8207\u919C\u5C08\u696D\u53E2\u6771\u7D72\u4E1F\u5169\u56B4\u55AA\u500B\u723F\u8C50\u81E8\u70BA\u9E97\u8209\u9EBC\u7FA9\u70CF\u6A02\u55AC\u7FD2\u9109\u66F8\u8CB7\u4E82\u722D\u65BC\u8667\u96F2\u4E99\u4E9E\u7522\u755D\u89AA\u893B\u56B2\u5104\u50C5\u5F9E\u4F96\u5009\u5100\u5011\u50F9\u773E\u512A\u5925\u6703\u50B4\u5098\u5049\u50B3\u50B7\u5000\u502B\u5096\u507D\u4F47\u9AD4\u9918\u50AD\u50C9\u4FE0\u4FB6\u50E5\u5075\u5074\u50D1\u5108\u5115\u5102\u4FC1\u5114\u513C\u5006\u5137\u5109\u50B5\u50BE\u50AF\u50C2\u50E8\u511F\u513B\u5110\u5132\u513A\u5152\u514C\u5157\u9EE8\u862D\u95DC\u8208\u8332\u990A\u7378\u56C5\u5167\u5CA1\u518A\u5BEB\u8ECD\u8FB2\u585A\u99AE\u885D\u6C7A\u6CC1\u51CD\u6DE8\u6DD2\u6DBC\u6DE9\u6E1B\u6E4A\u51DC\u5E7E\u9CF3\u9CE7\u6191\u51F1\u64CA\u6C39\u947F\u82BB\u5283\u5289\u5247\u525B\u5275\u522A\u5225\u5257\u5244\u528A\u528C\u5274\u5291\u526E\u528D\u525D\u5287\u52F8\u8FA6\u52D9\u52F1\u52D5\u52F5\u52C1\u52DE\u52E2\u52F3\u731B\u52E9\u52FB\u532D\u5331\u5340\u91AB\u83EF\u5354\u55AE\u8CE3\u76E7\u9E75\u81E5\u885B\u537B\u5DF9\u5EE0\u5EF3\u66C6\u53B2\u58D3\u53AD\u5399\u5EC1\u5EC2\u53B4\u5EC8\u5EDA\u5EC4\u5EDD\u7E23\u53C3\u9749\u9746\u96D9\u767C\u8B8A\u6558\u758A\u8449\u865F\u6B4E\u5630\u7C72\u5F8C\u5687\u5442\u55CE\u551A\u5678\u807D\u555F\u5433\u5638\u56C8\u5614\u56A6\u5504\u54E1\u54BC\u55C6\u55DA\u8A60\u54E2\u56A8\u5680\u565D\u5412\u5645\u9E79\u5471\u97FF\u555E\u5660\u5635\u55F6\u5666\u5629\u5672\u568C\u5665\u55B2\u561C\u55CA\u562E\u5562\u55E9\u5515\u559A\u547C\u5616\u55C7\u56C0\u9F67\u56C9\u563D\u562F\u5674\u560D\u56B3\u56C1\u55EC\u566F\u5653\u56B6\u56D1\u5695\u5288\u56C2\u8B14\u5718\u5712\u56EA\u570D\u5707\u570B\u5716\u5713\u8056\u58D9\u5834\u962A\u58DE\u584A\u5805\u58C7\u58E2\u58E9\u5862\u58B3\u589C\u58DF\u58DF\u58DA\u58D8\u58BE\u5770\u580A\u588A\u57E1\u58B6\u58CB\u584F\u5816\u5852\u5864\u581D\u588A\u57B5\u5879\u58AE\u58EA\u7246\u58EF\u8072\u6BBC\u58FA\u58FC\u8655\u5099\u8907\u5920\u982D\u8A87\u593E\u596A\u5969\u5950\u596E\u734E\u5967\u599D\u5A66\u5ABD\u5AF5\u5AD7\u5AAF\u59CD\u8591\u5A41\u5A6D\u5B08\u5B0C\u5B4C\u5A1B\u5AA7\u5AFB\u5AFF\u5B30\u5B0B\u5B38\u5ABC\u5B21\u5B2A\u5B19\u5B24\u5B6B\u5B78\u5B7F\u5BE7\u5BF6\u5BE6\u5BF5\u5BE9\u61B2\u5BAE\u5BEC\u8CD3\u5BE2\u5C0D\u5C0B\u5C0E\u58FD\u5C07\u723E\u5875\u582F\u5C37\u5C4D\u76E1\u5C64\u5C6D\u5C5C\u5C46\u5C6C\u5C62\u5C68\u5DBC\u6B72\u8C48\u5D87\u5D17\u5CF4\u5DB4\u5D50\u5CF6\u5DBA\u5DBD\u5D20\u5DCB\u5DA8\u5DA7\u5CFD\u5DA2\u5DA0\u5D22\u5DD2\u5D97\u5D0D\u5DAE\u5D84\u5DB8\u5D94\u5D33\u5D81\u810A\u5DD4\u978F\u5DF0\u5E63\u5E25\u5E2B\u5E43\u5E33\u7C3E\u5E5F\u5E36\u5E40\u5E6B\u5E6C\u5E58\u5E57\u51AA\u8946\u5E79\u4E26\u5EE3\u838A\u6176\u5EEC\u5EE1\u5EAB\u61C9\u5EDF\u9F90\u5EE2\u5ECE\u5EE9\u958B\u7570\u68C4\u5F35\u5F4C\u5F33\u5F4E\u5F48\u5F37\u6B78\u7576\u9304\u5F60\u5F65\u5FB9\u5F91\u5FA0\u79A6\u61B6\u61FA\u6182\u613E\u61F7\u614B\u616B\u61AE\u616A\u60B5\u6134\u6190\u7E3D\u61DF\u61CC\u6200\u61C7\u60E1\u615F\u61E8\u6137\u60FB\u60F1\u60F2\u6085\u6128\u61F8\u6173\u61AB\u9A5A\u61FC\u6158\u61F2\u618A\u611C\u615A\u619A\u6163\u6E63\u614D\u61A4\u6192\u9858\u61FE\u6196\u6035\u61E3\u61F6\u61CD\u6207\u6214\u6232\u6227\u6230\u6229\u6236\u7D2E\u64B2\u6261\u57F7\u64F4\u636B\u6383\u63DA\u64FE\u64AB\u62CB\u6476\u6473\u6384\u6436\u8B77\u5831\u64D4\u64EC\u650F\u63C0\u64C1\u6514\u64F0\u64A5\u64C7\u639B\u646F\u6523\u6397\u64BE\u64BB\u633E\u6493\u64CB\u649F\u6399\u64E0\u63EE\u648F\u6488\u640D\u64BF\u63DB\u6417\u64DA\u649A\u64C4\u6451\u64F2\u64A3\u647B\u645C\u6463\u652C\u64B3\u6519\u64F1\u645F\u652A\u651C\u651D\u6504\u64FA\u6416\u64EF\u6524\u6516\u6490\u6506\u64F7\u64FC\u651B\u64FB\u6522\u6575\u6582\u6578\u9F4B\u6595\u9B25\u65AC\u65B7\u7121\u820A\u6642\u66E0\u6698\u66C7\u665D\u66E8\u986F\u6649\u66EC\u66C9\u66C4\u6688\u6689\u66AB\u66D6\u5284\u8853\u6A38\u6A5F\u6BBA\u96DC\u6B0A\u689D\u4F86\u694A\u69AA\u5091\u6975\u69CB\u6A05\u6A1E\u68D7\u6AEA\u6898\u68D6\u69CD\u6953\u689F\u6AC3\u6AB8\u6A89\u6894\u67F5\u6A19\u68E7\u6ADB\u6AF3\u68DF\u6AE8\u6ADF\u6B04\u6A39\u68F2\u6A23\u6B12\u68EC\u690F\u6A48\u6968\u6A94\u69BF\u6A4B\u6A3A\u6A9C\u69F3\u6A01\u5922\u6AAE\u68F6\u6AA2\u6B1E\u69E8\u6ADD\u69E7\u6B0F\u6A62\u6A13\u6B16\u6AEC\u6ADA\u6AF8\u6A9F\u6ABB\u6AB3\u6AE7\u6A6B\u6AA3\u6AFB\u6AEB\u6AE5\u6AD3\u6ADE\u7C37\u6A81\u6B61\u6B5F\u6B50\u6BB2\u6B7F\u6BA4\u6B98\u6B9E\u6BAE\u6BAB\u6BAF\u6BC6\u6BC0\u8F42\u7562\u6583\u6C08\u6BFF\u6C0C\u6C23\u6C2B\u6C2C\u6C33\u5F59\u6F22\u6C59\u6E6F\u6D36\u905D\u6E9D\u6C92\u7043\u6F1A\u701D\u6DEA\u6EC4\u6E22\u6E88\u6EEC\u6FD4\u6FD8\u6DDA\u6FA9\u7027\u7018\u6FFC\u7009\u6F51\u6FA4\u6D87\u6F54\u7051\u7AAA\u6D79\u6DFA\u6F3F\u6F86\u6E5E\u6EAE\u6FC1\u6E2C\u6FAE\u6FDF\u700F\u6EFB\u6E3E\u6EF8\u6FC3\u6F6F\u6FDC\u5857\u6E67\u6FE4\u6F87\u6DF6\u6F23\u6F7F\u6E26\u6EB3\u6E19\u6ECC\u6F64\u6F97\u6F32\u6F80\u6FB1\u6DF5\u6DE5\u6F2C\u7006\u6F38\u6FA0\u6F01\u700B\u6EF2\u6EAB\u904A\u7063\u6FD5\u6F70\u6FFA\u6F35\u6F0A\u6F77\u6EFE\u6EEF\u7069\u7044\u6EFF\u7005\u6FFE\u6FEB\u7064\u6FF1\u7058\u6FA6\u6FEB\u7020\u701F\u7032\u6FF0\u6F5B\u7026\u703E\u7028\u7015\u705D\u6EC5\u71C8\u9748\u707D\u71E6\u716C\u7210\u71C9\u7152\u7197\u9EDE\u7149\u71BE\u720D\u721B\u70F4\u71ED\u7159\u7169\u71D2\u71C1\u71F4\u71D9\u71FC\u71B1\u7165\u71DC\u71FE\u7146\u7CCA\u6E9C\u611B\u723A\u7258\u729B\u727D\u72A7\u72A2\u5F37\u72C0\u7377\u7341\u7336\u72FD\u9E85\u736E\u7370\u7368\u72F9\u7345\u736A\u7319\u7344\u733B\u736B\u7375\u737C\u7380\u8C6C\u8C93\u875F\u737B\u737A\u74A3\u74B5\u7452\u746A\u744B\u74B0\u73FE\u7472\u74BD\u7449\u73A8\u743A\u74CF\u74AB\u743F\u74A1\u7489\u7463\u74CA\u7464\u74A6\u74BF\u74D4\u74DA\u7515\u750C\u96FB\u756B\u66A2\u4F58\u7587\u7664\u7642\u7627\u7658\u760D\u9B01\u7621\u760B\u76B0\u5C59\u7670\u75D9\u7662\u7602\u7646\u7613\u7647\u7661\u7649\u762E\u761E\u763A\u765F\u7671\u766E\u766D\u7669\u766C\u7672\u81D2\u769A\u76BA\u76B8\u76DE\u9E7D\u76E3\u84CB\u76DC\u76E4\u7798\u7725\u77D3\u8457\u775C\u775E\u77BC\u779E\u77DA\u77EF\u78EF\u792C\u7926\u78AD\u78BC\u78DA\u7868\u786F\u78B8\u792A\u7931\u792B\u790E\u785C\u77FD\u78A9\u7864\u78FD\u78D1\u7904\u78BA\u9E7C\u7919\u78E7\u78E3\u583F\u955F\u6EFE\u79AE\u7995\u79B0\u798E\u79B1\u798D\u7A1F\u797F\u79AA\u96E2\u79BF\u7A08\u7A2E\u7A4D\u7A31\u7A62\u7A60\u7A6D\u7A05\u7A4C\u7A69\u7A61\u7AAE\u7ACA\u7AC5\u7AAF\u7AC4\u7AA9\u7ABA\u7AC7\u7AB6\u8C4E\u7AF6\u7BE4\u7B4D\u7B46\u7B67\u7B8B\u7C60\u7C69\u7BC9\u7BF3\u7BE9\u7C39\u7B8F\u7C4C\u7C3D\u7C21\u7C59\u7C00\u7BCB\u7C5C\u7C6E\u7C1E\u7C2B\u7C23\u7C0D\u7C43\u7C6C\u7C6A\u7C5F\u7CF4\u985E\u79C8\u7CF6\u7CF2\u7CB5\u7CDE\u7CE7\u7CDD\u9931\u7DCA\u7E36\u7CF8\u7CFE\u7D06\u7D05\u7D02\u7E96\u7D07\u7D04\u7D1A\u7D08\u7E8A\u7D00\u7D09\u7DEF\u7D1C\u7D18\u7D14\u7D15\u7D17\u7DB1\u7D0D\u7D1D\u7E31\u7DB8\u7D1B\u7D19\u7D0B\u7D21\u7D35\u7D16\u7D10\u7D13\u7DDA\u7D3A\u7D4F\u7D31\u7DF4\u7D44\u7D33\u7D30\u7E54\u7D42\u7E10\u7D46\u7D3C\u7D40\u7D39\u7E79\u7D93\u7D3F\u7D81\u7D68\u7D50\u7D5D\u7E5E\u7D70\u7D4E\u7E6A\u7D66\u7D62\u7D73\u7D61\u7D55\u7D5E\u7D71\u7D86\u7D83\u7D79\u7E61\u7D8C\u7D8F\u7D5B\u7E7C\u7D88\u7E3E\u7DD2\u7DBE\u7DD3\u7E8C\u7DBA\u7DCB\u7DBD\u7DD4\u7DC4\u7E69\u7DAD\u7DBF\u7DAC\u7E43\u7DA2\u7DAF\u7DB9\u7DA3\u7D9C\u7DBB\u7DB0\u7DA0\u7DB4\u7DC7\u7DD9\u7DD7\u7DD8\u7DEC\u7E9C\u7DF9\u7DF2\u7DDD\u7E15\u7E62\u7DE6\u7D9E\u7DDE\u7DF6\u7DDA\u7DF1\u7E0B\u7DE9\u7DE0\u7E37\u7DE8\u7DE1\u7DE3\u7E09\u7E1B\u7E1F\u7E1D\u7E2B\u7E17\u7E1E\u7E8F\u7E2D\u7E0A\u7E11\u7E7D\u7E39\u7E35\u7E32\u7E93\u7E2E\u7E46\u7E45\u7E88\u7E5A\u7E55\u7E52\u97C1\u7E7E\u7E70\u7E6F\u7E73\u7E98\u7F4C\u7DB2\u7F85\u7F70\u7F77\u7F86\u7F88\u7FA5\u7FA8\u7FF9\u7FFD\u7FEC\u802E\u802C\u8073\u6065\u8076\u807E\u8077\u8079\u806F\u8075\u8070\u8085\u8178\u819A\u8181\u814E\u816B\u8139\u8105\u81BD\u52DD\u6727\u8156\u81DA\u811B\u81A0\u8108\u81BE\u9AD2\u81CD\u8166\u81BF\u81E0\u8173\u812B\u8161\u81C9\u81D8\u9183\u8195\u9F76\u81A9\u9766\u8183\u9A30\u81CF\u81E2\u8F3F\u8264\u8266\u8259\u826B\u8271\u8C54\u8278\u85DD\u7BC0\u7F8B\u858C\u856A\u8606\u84EF\u8466\u85F6\u83A7\u8407\u84BC\u82E7\u8607\u6ABE\u860B\u8396\u8622\u8526\u584B\u7162\u7E6D\u834A\u85A6\u8598\u83A2\u8558\u84FD\u854E\u8588\u85BA\u8569\u69AE\u8477\u6ECE\u7296\u7192\u8541\u85CE\u84C0\u852D\u8552\u8452\u8464\u85E5\u849E\u84E7\u840A\u84EE\u8494\u8435\u859F\u7372\u8555\u7469\u9DAF\u84F4\u8600\u863F\u87A2\u71DF\u7E08\u856D\u85A9\u8525\u8546\u8562\u8523\u851E\u85CD\u858A\u863A\u8577\u93A3\u9A40\u8594\u861E\u85FA\u85F9\u8604\u860A\u85EA\u69C1\u861A\u865C\u616E\u865B\u87F2\u866F\u87E3\u96D6\u8766\u8806\u8755\u87FB\u879E\u8836\u8814\u8706\u8831\u8823\u87F6\u883B\u87C4\u86FA\u87EF\u8784\u8810\u86FB\u8778\u881F\u8805\u87C8\u87EC\u880D\u87BB\u8811\u87BF\u87CE\u8828\u91C1\u929C\u88DC\u896F\u889E\u8956\u5ACB\u8918\u896A\u8972\u894F\u88DD\u8960\u890C\u8933\u895D\u8932\u8947\u8938\u8964\u7E48\u8974\u898B\u89C0\u898E\u898F\u8993\u8996\u8998\u89BD\u89BA\u89AC\u89A1\u89BF\u89A5\u89A6\u89AF\u89B2\u89B7\u89F4\u89F8\u89F6\u8B8B\u8B7D\u8B04\u8A01\u8A08\u8A02\u8A03\u8A8D\u8B4F\u8A10\u8A0C\u8A0E\u8B93\u8A15\u8A16\u8A13\u8B70\u8A0A\u8A18\u8A12\u8B1B\u8AF1\u8B33\u8A4E\u8A1D\u8A25\u8A31\u8A1B\u8AD6\u8A29\u8A1F\u8AF7\u8A2D\u8A2A\u8A23\u8B49\u8A41\u8A36\u8A55\u8A5B\u8B58\u8A57\u8A50\u8A34\u8A3A\u8A46\u8B05\u8A5E\u8A58\u8A54\u8A56\u8B6F\u8A52\u8A86\u8A84\u8A66\u8A7F\u8A69\u8A70\u8A7C\u8AA0\u8A85\u8A75\u8A71\u8A95\u8A6C\u8A6E\u8A6D\u8A62\u8A63\u8ACD\u8A72\u8A73\u8A6B\u8AE2\u8A61\u8B78\u8AA1\u8AA3\u8A9E\u8A9A\u8AA4\u8AA5\u8A98\u8AA8\u8A91\u8AAA\u8AA6\u8A92\u8ACB\u8AF8\u8ACF\u8AFE\u8B80\u8AD1\u8AB9\u8AB2\u8AC9\u8ADB\u8AB0\u8AD7\u8ABF\u8AC2\u8AD2\u8AC4\u8AB6\u8AC7\u8ABC\u8B00\u8AF6\u8ADC\u8B0A\u8AEB\u8AE7\u8B14\u8B01\u8B02\u8AE4\u8AED\u8AFC\u8B92\u8AEE\u8AF3\u8AFA\u8AE6\u8B0E\u8ADE\u8ADD\u8B28\u8B9C\u8B16\u8B1D\u8B20\u8B17\u8AE1\u8B19\u8B10\u8B39\u8B3E\u8B2B\u8B7E\u8B2C\u8B5A\u8B56\u8B59\u8B95\u8B5C\u8B4E\u8B9E\u8B74\u8B6B\u8B96\u7A40\u8C76\u8C9D\u8C9E\u8CA0\u8C9F\u8CA2\u8CA1\u8CAC\u8CE2\u6557\u8CEC\u8CA8\u8CEA\u8CA9\u8CAA\u8CA7\u8CB6\u8CFC\u8CAF\u8CAB\u8CB3\u8CE4\u8CC1\u8CB0\u8CBC\u8CB4\u8CBA\u8CB8\u8CBF\u8CBB\u8CC0\u8CBD\u8CCA\u8D04\u8CC8\u8CC4\u8CB2\u8CC3\u8CC2\u8D13\u8CC7\u8CC5\u8D10\u8CD5\u8CD1\u8CDA\u8CD2\u8CE6\u8CED\u9F4E\u8D16\u8CDE\u8CDC\u8D14\u8CD9\u8CE1\u8CE0\u8CE7\u8CF4\u8CF5\u8D05\u8CFB\u8CFA\u8CFD\u8CFE\u8D17\u8B9A\u8D07\u8D08\u8D0D\u8D0F\u8D1B\u8D6C\u8D99\u8D95\u8DA8\u8DB2\u8E89\u8E8D\u8E4C\u8E60\u8E92\u8E10\u8E82\u8E7A\u8E55\u8E9A\u8E8B\u8E34\u8E8A\u8E64\u8E93\u8E91\u8EA1\u8E63\u8E95\u8EA5\u8EAA\u8EA6\u8EC0\u8ECA\u8ECB\u8ECC\u8ED2\u8ED1\u8ED4\u8F49\u8EDB\u8F2A\u8EDF\u8F5F\u8EF2\u8EFB\u8F64\u8EF8\u8EF9\u8EFC\u8EE4\u8EEB\u8F62\u8EFA\u8F15\u8EFE\u8F09\u8F0A\u8F4E\u8F08\u8F07\u8F05\u8F03\u8F12\u8F14\u8F1B\u8F26\u8F29\u8F1D\u8F25\u8F1E\u8F2C\u8F1F\u8F1C\u8F33\u8F3B\u8F2F\u8F40\u8F38\u8F61\u8F45\u8F44\u8F3E\u8F46\u8F4D\u8F54\u8FAD\u8FAF\u8FAE\u908A\u907C\u9054\u9077\u904E\u9081\u904B\u9084\u9019\u9032\u9060\u9055\u9023\u9072\u9087\u9015\u8DE1\u9069\u9078\u905C\u905E\u9090\u908F\u907A\u9059\u9127\u913A\u9114\u90F5\u9112\u9134\u9130\u9B31\u90E4\u90DF\u9136\u912D\u9106\u9148\u9116\u9132\u919E\u91B1\u91AC\u91C5\u91C3\u91C0\u91CB\u88CF\u949C\u9452\u947E\u93E8\u91D3\u91D4\u91DD\u91D8\u91D7\u91D9\u91D5\u91F7\u91FA\u91E7\u91E4\u9212\u91E9\u91E3\u9346\u91F9\u935A\u91F5\u9203\u9223\u9208\u9226\u920D\u9214\u937E\u9209\u92C7\u92FC\u9211\u9210\u9470\u6B3D\u921E\u93A2\u9264\u9227\u9201\u9225\u9204\u9215\u9200\u923A\u9322\u9266\u9257\u9237\u7F3D\u9233\u9255\u923D\u9238\u925E\u947D\u926C\u926D\u9240\u923F\u923E\u9435\u9251\u9234\u9460\u925B\u925A\u9230\u9249\u9248\u924D\u9239\u9438\u9276\u92AC\u92A0\u927A\u92AA\u92CF\u92E3\u9403\u928D\u943A\u9285\u92C1\u92B1\u92A6\u93A7\u9358\u9296\u9291\u92CC\u92A9\u929B\u93F5\u9293\u927F\u929A\u927B\u9298\u931A\u92AB\u9278\u92A5\u93DF\u9283\u940B\u92A8\u9280\u92A3\u9444\u9412\u92EA\u92D9\u9338\u92F1\u93C8\u93D7\u92B7\u9396\u92F0\u92E5\u92E4\u934B\u92EF\u92E8\u93FD\u92BC\u92DD\u92D2\u92C5\u92F6\u9426\u9427\u92B3\u92BB\u92C3\u92DF\u92E6\u9312\u9306\u937A\u932F\u9328\u9321\u9301\u9315\u9329\u932B\u932E\u947C\u9318\u9310\u9326\u9341\u9308\u9307\u931F\u9320\u9375\u92F8\u9333\u9319\u9365\u9348\u9347\u93D8\u9376\u9354\u9364\u936C\u937E\u935B\u93AA\u9360\u9370\u9384\u934D\u9382\u93E4\u93A1\u93CC\u93AE\u939B\u9398\u9477\u942B\u93B3\u93BF\u93A6\u93AC\u938A\u93B0\u9394\u93E2\u93DC\u93CD\u93F0\u93DE\u93E1\u93D1\u93C3\u93C7\u93D0\u9414\u9481\u9410\u93F7\u9465\u9413\u946D\u9420\u9479\u93F9\u9419\u944A\u9433\u9436\u9432\u942E\u943F\u9454\u9463\u945E\u9472\u9577\u9580\u9582\u9583\u9586\u9588\u9589\u554F\u95D6\u958F\u95C8\u9591\u958E\u9593\u9594\u958C\u60B6\u9598\u9B27\u95A8\u805E\u95E5\u95A9\u95AD\u95D3\u95A5\u95A3\u95A1\u95AB\u9B2E\u95B1\u95AC\u95CD\u95BE\u95B9\u95B6\u9B29\u95BF\u95BD\u95BB\u95BC\u95E1\u95CC\u95C3\u95E0\u95CA\u95CB\u95D4\u95D0\u95D2\u95D5\u95DE\u95E4\u968A\u967D\u9670\u9663\u968E\u969B\u9678\u96B4\u9673\u9658\u965D\u9689\u9695\u96AA\u96A8\u96B1\u96B8\u96CB\u96E3\u96DB\u8B8E\u9742\u9727\u973D\u9EF4\u9744\u975A\u975C\u9768\u97C3\u97BD\u97C9\u97DD\u97CB\u97CC\u97CD\u97D3\u97D9\u97DE\u97DC\u97FB\u9801\u9802\u9803\u9807\u9805\u9806\u9808\u980A\u9811\u9867\u9813\u980E\u9812\u980C\u980F\u9810\u9871\u9818\u9817\u9838\u9821\u9830\u9832\u981C\u6F41\u71B2\u9826\u9824\u983B\u982E\u9839\u9837\u9834\u7A4E\u9846\u984C\u9852\u984E\u9853\u984F\u984D\u9873\u9862\u985B\u9859\u9865\u7E87\u986B\u986C\u9870\u9874\u98A8\u98BA\u98AD\u98AE\u98AF\u98B6\u98B8\u98BC\u98BB\u98C0\u98C4\u98C6\u98C6\u98DB\u9957\u995C\u98E3\u9951\u98E5\u9933\u98E9\u993C\u98EA\u98EB\u98ED\u98EF\u98F2\u991E\u98FE\u98FD\u98FC\u98FF\u98F4\u990C\u9952\u9909\u9904\u990E\u9903\u990F\u9905\u9911\u9916\u9913\u9918\u9912\u9915\u991C\u991B\u9921\u9928\u9937\u994B\u9936\u993F\u995E\u9941\u9943\u993A\u993E\u9948\u9949\u9945\u994A\u994C\u9962\u99AC\u99AD\u99B1\u99B4\u99B3\u9A45\u99B9\u99C1\u9A62\u99D4\u99DB\u99DF\u99D9\u99D2\u9A36\u99D0\u99DD\u99D1\u99D5\u9A5B\u99D8\u9A4D\u7F75\u99F0\u9A55\u9A4A\u99F1\u99ED\u99E2\u9A6B\u9A6A\u9A01\u9A57\u9A02\u99F8\u99FF\u9A0F\u9A0E\u9A0D\u9A05\u9A0C\u9A4C\u9A42\u9A19\u9A2D\u9A24\u9A37\u9A16\u9A41\u9A2E\u9A2B\u9A38\u9A43\u9A3E\u9A44\u9A4F\u9A5F\u9A65\u9A66\u9A64\u9ACF\u9AD6\u9AD5\u9B22\u9B58\u9B4E\u9B5A\u9B5B\u9B62\u9B77\u9B68\u9B6F\u9B74\u9B7A\u9B81\u9B83\u9BF0\u9C78\u9B8B\u9B93\u9B92\u9B8A\u9B91\u9C5F\u9B8D\u9B90\u9BAD\u9B9A\u9BB3\u9BAA\u9B9E\u9BA6\u9C02\u9B9C\u9C60\u9C6D\u9BAB\u9BAE\u9BBA\u9BD7\u9C58\u9BC1\u9C7A\u9C31\u9C39\u9BC9\u9C23\u9C37\u9BC0\u9BCA\u9BC7\u9BB6\u9BFD\u9BD2\u9BD6\u9BEA\u9BD5\u9BEB\u9BE1\u9BE4\u9BE7\u9BDD\u9BE2\u9BF0\u9BDB\u9BE8\u9BF5\u9BF4\u9BD4\u9C5D\u9C08\u9C0F\u9C68\u9BF7\u9C2E\u9C03\u9C13\u9C77\u9C0D\u9C12\u9C09\u9C01\u9C42\u9BFF\u9C20\u9F07\u9C2D\u9C28\u9C25\u9C29\u9C1F\u9C1C\u9C33\u9C3E\u9C48\u9C49\u9C3B\u9C35\u9C45\u9C3C\u9C56\u9C54\u9C57\u9C52\u9C6F\u9C64\u9C67\u9C63\u9CE5\u9CE9\u96DE\u9CF6\u9CF4\u9CF2\u9DD7\u9D09\u9DAC\u9D07\u9D06\u9D23\u9D87\u9E15\u9D28\u9D1E\u9D26\u9D12\u9D1F\u9D1D\u9D1B\u9D2C\u9D15\u9DE5\u9DD9\u9D2F\u9D30\u9D42\u9D34\u9D43\u9D3F\u9E1E\u9D3B\u9D50\u9D53\u9E1D\u9D51\u9D60\u9D5D\u9D52\u9DF3\u9D5C\u9D61\u9D72\u9D93\u9D6A\u9DA4\u9D6F\u9D6C\u9D6E\u9D89\u9D8A\u9D77\u9DEB\u9D98\u9DA1\u9D9A\u9DBB\u9DBF\u9DA5\u9DA9\u9DCA\u9DC2\u9DB2\u9DB9\u9DBA\u9DC1\u9DBC\u9DB4\u9DD6\u9E1A\u9DD3\u9DDA\u9DEF\u9DE6\u9DF2\u9DF8\u9DFA\u9E07\u9DF9\u9E0C\u9E0F\u9E1B\u9E18\u9E7A\u9EA5\u9EA9\u9EC3\u9ECC\u9EF6\u9EF7\u9EF2\u9EFD\u9EFF\u9F02\u9F09\u9780\u9F34\u9F47\u9F4A\u9F4F\u9F52\u9F54\u9F55\u9F57\u9F5F\u9F61\u9F59\u9F60\u9F5C\u9F66\u9F6C\u9F6A\u9F72\u9F77\u9F8D\u9F94\u9F95\u9F9C\u8A8C\u88FD\u8C18\u96BB\u88E1\u4FC2\u7BC4\u9B06\u5187\u5690\u5617\u9B28\u9EB5\u6E96\u9418\u5F46\u9592\u4E7E\u5118\u81DF\u62DA\u65E5\u66F0\u660C\u660D\u6676\u6698\u6679\u668D\u66DD\u66BB\u660E\u669D\u66D6\u76DF\u9DF3\u7312\u66CC\u6689\u6688\u6696\u52D7\u66A9\u5192\u665B\u66A1\u665C\u6610\u6772\u9DF4\u6670\u6642\u6690\u6695\u9124\u7085\u709A\u66ED\u66BD\u6671\u5F71\u986F\u9865\u6643\u6B5E\u66C0\u6642\u66C9\u664C\u6651\u7709\u6604\u66DB\u6634\u5254\u6615\u6680\u66B0\u6677\u661F\u6633\u6608\u66D2\u6607\u6602\u6672\u6677\u6659\u665F\u6661\u65E2\u6639\u5373\u66E0\u65E9\u6694\u6627\u66B7\u6691\u6684\u6665\u667C\u664F\u65F2\u66B8\u665E\u6626\u667B\u6647\u65EF\u6620\u5832\u6632\u6641\u66CA\u65E6\u6645\u66D8\u668A\u66E4\u66C7\u6652\u65F4\u65FA\u9D20\u6BFE\u6225\u664A\u65F1\u65F0\u660A\u662E\u6678\u66EC\u6664\u6668\u6603\u663A\u661C\u66DE\u91CF\u66CB\u662F\u9580\u9593\u95B6\u95D2\u665A\u5195\u95BA\u9592\u95BF\u95BB\u95C5\u95C3\u95B1\u9591\u9589\u95C8\u95CC\u95CA\u711B\u95DB\u95E3\u95A8\u95D4\u6605\u95A3\u958F\u95BD\u9590\u95D1\u95C3\u95B0\u95AC\u95BE\u959E\u95D0\u95CD\u958E\u95B9\u95E0\u95A9\u9582\u959B\u958F\u9588\u95DE\u9586\u959C\u958B\u95C9\u95BB\u95AE\u95CB\u9583\u6B25\u95B5\u95A5\u668C\u95A4\u95DF\u60B6\u959F\u95DA\u554F\u95AD\u95E1\u95C6\u805E\u95D6\u95E2\u9B28\u95C0\u95D5\u95D3\u95DC\u95AB\u9598\u95E4\u95E5\u958C\u958D\u9B25\u9594\u9B27\u8ABE\u95BC\u95C7\u95A1\u97D9\u5C1F\u9D97\u6624\u6611\u984C\u5319\u6628\u6666\u6613\u6612\u65F3\u6600\u6606\u662B\u65FD\u66F7\u6699\u6674\u7167\u7166\u5194\u66BA\u66EE\u6687\u715A\u662D\u6700\u66DC\u6635\u66B1\u66AF\u666A\u66DA\u66B4\u8B08\u66E6\u66AA\u66E3\u66B5\u66C4\u5DF4\u65F5\u66A8\u5848\u6BF7\u52D6\u669F\u90FF\u9C40\u5C8A\u6622\u826E\u9DA1\u9DC3\u9DD0\u66CF\u6BFC\u6B47\u66D9\u66FC\u66E8\u66BE\u6609\u65FB\u65FC\u666C\u66A0\u666F\u667E\u66E9\u6686\u6631\u6697\u66C8\u66B2\u6621\u6708\u8165\u81BD\u8178\u80A5\u51A5\u670B\u9AA8\u8161\u89B6\u9AB3\u811F\u53D7\u9AD0\u9DBB\u9ABC\u9D6C\u9AB0\u9AC0\u9AC6\u9ACD\u9AC2\u9AD5\u9AB7\u9AD6\u9ABB\u9AAB\u9ACF\u526E\u518A\u985D\u9AAD\u9ABE\u80F4\u812C\u821C\u9AB1\u611B\u54BC\u9AD2\u9ACA\u9ABF\u9AD4\u4E82\u81DE\u9F0F\u8993\u9AC1\u9AD1\u9AB9\u9AAF\u9AD3\u9AB4\u9AC7\u8FAD\u9AB8\u8CF5\u8CDC\u8D14\u8CDD\u8CD9\u8CF1\u8CD9\u8CCF\u89AD\u8D08\u8CA1\u8CE7\u8D16\u9D59\u8CA9\u8CC2\u8CB6\u8CBE\u8CB9\u8CFB\u8D13\u8CE4\u8D02\u8CCA\u8CD5\u8D06\u8D13\u8CBD\u80B8\u8CF3\u8CED\u8CAF\u8CC4\u8CD7\u8D10\u5247\u7F55\u8CD1\u8CE6\u7516\u8D09\u8D0D\u910D\u90E5\u7F4C\u6557\u8CD2\u8CA4\u8CF0\u518F\u8CBA\u8173\u812B\u9F06\u8CEC\u8CDF\u8CF9\u8CFC\u8CFA\u5B30\u8CA5\u8B7B\u8CE5\u8CBC\u8CE0\u8CC5\u91C7\u5F69\u8098\u90DB\u819D\u4E73\u814F\u9DA2\u7099\u819B\u818C\u519E\u81A6\u7E23\u80F1\u61F8\u80D6\u8CF8\u6ED5\u9A30\u7E22\u584D\u87A3\u8B04\u52DD\u8143\u5AB5\u4E7F\u809A\u81AE\u6C0D\u80E0\u8173\u5468\u81CC\u81A8\u80C9\u817A\u8C9C\u8C95\u8C7A\u8147\u81B0\u80F3\u81D0\u8C8C\u8C89\u809C\u8108\u8C8F\u8C94\u8C8C\u8C81\u8176\u816B\u8144\u816F\u8C97\u8C84\u8C8A\u8C86\u8C7B\u80B5\u808C\u5197\u80A1\u70BA\u8C7D\u8C85\u8C90\u80FB\u8C79\u80DD\u80DC\u80C5\u8C9A\u8C91\u8C82\u8C99\u8C98\u8C93\u81E2\u8C92\u8C80\u81AC\u80CD\u8C8D\u813E\u818D\u8200\u8174\u818A\u6718\u8127\u812F\u8119\u80C8\u8108\u8151\u81A9\u81D5\u80CE\u8662\u80BA\u8116\u8169\u81A3\u8154\u76B8\u80A2\u9DA4\u819E\u8808\u9850\u81CF\u8118\u9106\u8155\u81B9\u81D7\u80FA\u8ECD\u81AB\u8C3F\u7136\u9DAA\u80B1\u7F51\u814C\u80EF\u80F0\u8092\u90F9\u96DE\u8125\u808B\u8105\u80E6\u80C7\u81A2\u6713\u8101\u8153\u5216\u80C2\u80CF\u4E14\u809B\u56D7\u81D1\u81DB\u80F9\u80DA\u80F5\u809D\u7230\u52A9\u522A\u521E\u5177\u51A2\u670A\u8124\u96CE\u540C\u8188\u8130\u8177\u8C5A\u585A\u51A0\u811B\u8198\u9766\u8170\u808A\u51A4\u8106\u8115\u81BD\u5B5A\u8199\u8121\u8171\u882B\u8106\u8179\u80AD\u6712\u80D5\u813D\u81B2\u81C7\u80D7\u80A3\u814D\u81BE\u796D\u8167\u81C9\u8C4B\u8090\u811E\u80E3\u80D9\u81B4\u8122\u8102\u543B\u6710\u80CA\u80DE\u80AB\u80F8\u7528\u8160\u8186\u5468\u7529\u80D1\u9D70\u812D\u5F6B\u6219\u96D5\u81CA\u9F76\u7FE2\u722D\u9D69\u8C78\u8095\u8152\u670D\u815B\u81A0\u8139\u51F8\u76BF\u518A\u814A\u51AA\u819C\u8146\u6726\u8189\u81B3\u81DF\u6715\u81D9\u6720\u522A\u982F\u815C\u81D2\u80FC\u5CA1\u81BF\u8CFA\u81B5\u7F54\u76EE\u7745\u777C\u77B7\u77D9\u773C\u7791\u66D6\u77AC\u776C\u776D\u775C\u7781\u774D\u899E\u8C9D\u6721\u7788\u76FB\u7747\u76FC\u775E\u7744\u77D8\u77A0\u772F\u77B5\u7752\u7707\u7760\u7756\u7766\u772D\u778C\u9DC2\u7797\u7785\u7705\u77C4\u773D\u7728\u7761\u7783\u76FA\u98BB\u89B9\u779B\u7767\u774B\u7723\u770A\u7759\u898B\u77CF\u7E47\u7765\u778D\u7768\u7738\u72CA\u7719\u77CC\u7713\u778B\u771B\u7779\u776B\u77C9\u779A\u771D\u7746\u7755\u778E\u77AD\u774E\u7731\u7708\u77A3\u779C\u77B6\u8730\u773A\u525B\u7712\u77D0\u76F1\u775A\u76F0\u77B0\u7704\u7703\u76EF\u779F\u77AB\u7710\u774C\u77CE\u77BB\u77B2\u7735\u7733\u777D\u77AA\u77BF\u7762\u8197\u77CD\u77A7\u7715\u77BA\u7754\u776E\u77BC\u76F5\u77B4\u7734\u76F7\u76F9\u775B\u77A1\u774A\u77C2\u7720\u77DA\u7727\u7732\u7736\u7799\u77C7\u77A8\u7739\u779E\u77B1\u773B\u77D4\u7784\u670F\u80D0\u77CA\u7711\u9F0E\u7769\u774F\u77D3\u7787\u775F\u77B3\u7795\u779D\u76F3\u7729\u59A5\u58BE\u9E1A\u81B7\u595A\u90FB\u815E\u61C7\u81D8\u8166\u8195\u80ED\u80DB\u8162\u7235\u81C5\u8172\u8183\u816E\u4E39\u817F\u81BC\u6727\u8180\u9D05\u5F64\u80AE\u8187\u80AA\u81B1\u819F\u80BA\u5210\u813A\u814B\u81C4\u81DA\u811D\u8164\u6723\u81A7\u96D8\u81C6\u81C3\u80D8\u80F2\u81BB\u81CD\u91D1\u9224\u9329\u93A4\u926D\u935A\u92B2\u9349\u7511\u9346\u912B\u946D\u932B\u9315\u937B\u9389\u9464\u9200\u9280\u93DD\u9205\u930B\u9440\u934B\u9358\u92DD\u932D\u9355\u924F\u9370\u9285\u92E4\u931A\u92FC\u926C\u92C7\u9481\u92E7\u946B\u9206\u92BB\u92CA\u925B\u92B3\u9216\u91EE\u9239\u920C\u92C9\u7F3D\u934F\u9338\u934A\u9314\u940B\u939F\u9323\u9383\u91F5\u9225\u92B7\u9396\u93FF\u9482\u93DC\u92FF\u93B2\u943A\u92A4\u93FB\u931F\u9445\u9412\u9214\u92A7\u9261\u9308\u91F7\u9302\u9334\u9288\u9403\u9263\u9391\u9444\u92D5\u92A1\u93B1\u9251\u9326\u9360\u924C\u93FC\u936C\u92D3\u92B9\u9407\u9211\u92D2\u927B\u9256\u92A9\u92EF\u9291\u9D5C\u9CFB\u9457\u91E4\u925A\u93A6\u9296\u935B\u937E\u9318\u929B\u934E\u9364\u9455\u5243\u91FD\u9812\u91FF\u9297\u91E9\u90A0\u925B\u653D\u93E6\u9309\u92E8\u924E\u9435\u93A2\u947D\u93B3\u93B4\u9232\u930D\u939E\u93AA\u92B5\u516C\u92C3\u939B\u92D1\u93DA\u928A\u927E\u937C\u92EE\u9217\u9322\u93D2\u93AF\u92EA\u9265\u92B6\u9238\u93DE\u93EE\u9282\u9395\u980C\u74EE\u92A2\u91F4\u9463\u927D\u92F1\u9236\u7FC1\u7926\u942E\u934D\u93E3\u925E\u93D5\u91DD\u93AE\u92CD\u938D\u9394\u9435\u93C4\u93F8\u937A\u92D0\u92A0\u92AC\u944C\u93D4\u931D\u9379\u9320\u93B5\u92CE\u92FA\u9248\u944F\u9237\u9327\u943C\u9473\u92A8\u7236\u91F1\u7238\u92AA\u93A9\u9410\u93A9\u9377\u65A7\u921C\u9226\u931B\u923D\u928C\u933C\u91DC\u9321\u9299\u9295\u91DA\u7239\u92CF\u723A\u4E2B\u9260\u9202\u91E7\u93E4\u9400\u929A\u91D7\u9428\u923E\u93FD\u91ED\u9286\u9450\u9849\u9433\u91EA\u9448\u92C4\u9294\u923A\u9469\u9DB2\u928D\u91EC\u9276\u930F\u92D9\u91EB\u92E0\u91D8\u9233\u618C\u9250\u9398\u92C0\u9203\u9276\u9415\u9392\u92DE\u516E\u93E2\u9414\u9266\u9223\u91D4\u940C\u92AB\u91E8\u9333\u9215\u940D\u9352\u9212\u91E2\u930E\u91F8\u93F9\u9279\u9298\u92CC\u92CB\u9375\u920F\u5F1A\u5F1F\u940A\u9312\u91D5\u6B3D\u93FA\u9419\u9471\u9351\u9209\u929D\u9310\u93F6\u940E\u93A8\u942B\u928B\u9234\u946F\u9210\u9397\u92E1\u9253\u9380\u87B8\u9470\u9300\u9293\u9431\u927F\u91F3\u938E\u936D\u92BC\u617E\u8C37\u92C2\u920A\u924D\u91E3\u9264\u921E\u921E\u92FE\u921A\u9347\u9264\u924B\u9371\u920D\u9367\u9287\u9365\u93CF\u9306\u9336\u9207\u91E6\u92D7\u9D52\u92C1\u514C\u8C3E\u8C39\u8C43\u90E4\u6B32\u8C3B\u8C3D\u61D6\u9430\u9354\u935C\u537B\u8C42\u8C3C\u9409\u92D8\u9231\u8C45\u93D7\u9483\u5206\u8CA7\u7083\u574C\u5FFF\u924A\u76C6\u5F05\u5C94\u9451\u927A\u92F7\u9477\u92F8\u9254\u92DF\u93D0\u9270\u9451\u92F9\u922E\u93B7\u93C2\u9245\u92E6\u932F\u93CC\u932A\u93FE\u9420\u93F7\u93B0\u946E\u9446\u9382\u9449\u9313\u9476\u9257\u9420\u9324\u93F5\u9356\u944A\u9335\u939D\u9437\u9388\u9475\u9363\u927C\u9399\u93A1\u9328\u940F\u938C\u945D\u92E9\u91D3\u9350\u6BE4\u930C\u93A7\u9474\u93D9\u6553\u91F9\u9411\u9460\u9416\u926F\u93D8\u9304\u92A3\u945E\u9319\u923F\u66FE\u9301\u92F0\u932E\u92A6\u9240\u947C\u9432\u9438\u9436\u9361\u9376\u93CE\u93CD\u9478\u9267\u91D9\u9357\u9439\u935E\u9480\u9468\u938A\u93D1\u9278\u9413\u9219\u9252\u943D\u93DF\u9227\u939A\u9201\u92A5\u9325\u9283\u9204\u93C8\u93DF\u9230\u9339\u942C\u9272\u93EC\u943B\u9462\u942A\u946A\u9246\u93AC\u931E\u9472\u93C3\u93C7\u9418\u92C5\u9429\u943F\u93E1\u9249\u93C0\u9447\u6728\u6773\u69A5\u69AF\u6963\u6956\u6982\u67E5\u67E6\u694A\u687F\u6A4D\u6ADA\u6B04\u68CD\u696C\u69BB\u6777\u6839\u69FE\u673F\u69A0\u68DA\u69BE\u67F5\u68CE\u6AFB\u68CC\u68D8\u68D7\u6906\u69C4\u694E\u6A6A\u523A\u67E4\u6907\u6965\u6850\u6874\u50F0\u69A3\u68E6\u68F4\u67F5\u68E1\u76F8\u6896\u6B0B\u6875\u69BD\u6733\u6AAD\u6915\u677E\u68C7\u678D\u68AF\u68B2\u678C\u6A67\u6797\u6942\u681C\u9B31\u68FC\u68EE\u6A9A\u6AC7\u711A\u57DC\u6750\u67C0\u5F6C\u68B5\u6A92\u6751\u9E93\u67BA\u6A0A\u881C\u792C\u6500\u6880\u694B\u6A15\u7981\u8FB2\u6932\u90F4\u695A\u68FD\u68F6\u61CB\u5A6A\u68DF\u6983\u695D\u68F3\u686B\u6748\u6A11\u9817\u76AF\u76B0\u6770\u68A2\u6A56\u6B13\u6A18\u6A55\u6A94\u6A49\u68EA\u6A69\u6A6F\u676A\u96B8\u6844\u67C8\u68EC\u675C\u67DF\u68F1\u6842\u69F8\u6A48\u69BC\u6AAE\u6A3E\u6AA3\u6854\u6AAF\u69AC\u6A39\u6ADD\u624D\u67CF\u68C9\u697B\u69D4\u6ADB\u9F12\u6AF8\u6978\u6A4E\u76AE\u677F\u687B\u683C\u67CA\u6A93\u688F\u9E09\u6749\u69AD\u67F3\u69B4\u6AC6\u67C9\u6AE1\u682A\u6934\u68F0\u681D\u696F\u6A4B\u6940\u6ACD\u6790\u6894\u67DD\u673A\u6778\u6953\u674B\u6841\u693C\u6A05\u68D4\u6A41\u67E2\u6886\u67E3\u6786\u6944\u6A84\u69F4\u6B11\u69D0\u6ACB\u6A47\u67E7\u6911\u6970\u6A26\u69B9\u5BF8\u6879\u6991\u68AD\u6AE5\u69ED\u6937\u68E7\u69EE\u6994\u6882\u67ED\u69E6\u6826\u520C\u69B6\u6828\u6AE0\u69B3\u6759\u6A32\u683B\u6AAF\u68EB\u68B0\u672B\u69D9\u6872\u6960\u690D\u67FC\u690C\u6995\u69A8\u679D\u6941\u69EB\u6A5E\u6A76\u6756\u696E\u6833\u6832\u68F2\u6AB3\u68D5\u6966\u6917\u68A1\u67C1\u69B0\u6AB8\u67AF\u695C\u6A6D\u68FA\u6A68\u6849\u592C\u6755\u682F\u6A27\u6A51\u694F\u9DD8\u6891\u6878\u6A09\u682B\u6A62\u6905\u684D\u6574\u684B\u6739\u69C9\u689C\u6196\u6738\u69EC\u67B7\u6AB6\u675F\u67CD\u6795\u688A\u68E3\u7699\u6555\u9D92\u8724\u524C\u67EB\u6A13\u6A3B\u6843\u68D1\u8CF4\u6B36\u6555\u60C1\u8CF4\u67DA\u67DB\u68AC\u6A5A\u68E9\u672C\u6760\u6853\u6ABD\u69D3\u6ACC\u682D\u6B1E\u6AFA\u6A17\u6A91\u6816\u6745\u6975\u676F\u6AB7\u67B0\u67F8\u6AA6\u686E\u6789\u6AEE\u6887\u699E\u6AEA\u6997\u684E\u6746\u6A44\u6897\u6826\u690F\u67F0\u679F\u6B10\u68A7\u6747\u676C\u686D\u673E\u684F\u6835\u67EF\u67C4\u67D8\u97CB\u68AA\u6945\u7FC9\u6913\u6799\u6785\u6A5B\u674C\u698E\u6792\u6871\u6791\u673D\u821D\u6A9F\u6A19\u69F1\u6A5D\u6A7F\u6A61\u6877\u69F2\u6A9E\u6A90\u674E\u674D\u69C2\u6AEF\u677B\u6A58\u6959\u697A\u6781\u6876\u6818\u677C\u6883\u68B4\u6957\u6A62\u6A04\u6845\u6774\u6948\u6951\u6A59\u63E7\u69A4\u6B03\u6979\u51F3\u6AD3\u6798\u69B7\u8CDA\u6834\u67CE\u687C\u690E\u6A35\u69AB\u6A87\u9D86\u67C3\u730C\u6AFC\u6794\u68EF\u69CD\u6892\u6775\u679A\u6925\u6555\u6A07\u6A9C\u68C6\u688C\u6813\u6969\u6986\u6AA2\u6986\u675A\u90F2\u4F86\u687D\u6779\u67C2\u67DE\u6885\u6A8E\u673C\u677A\u6812\u683A\u675D\u6908\u67F2\u6993\u6753\u6784\u6783\u6753\u6783\u6787\u6977\u6890\u67B8\u67B9\u67BB\u696A\u6776\u677D\u97DE\u97DC\u97D7\u97CE\u97E5\u97DF\u6954\u97CD\u6886\u69E5\u693F\u699B\u6971\u68D2\u6A01\u68C8\u6A0D\u69A1\u97D6\u90FC\u678E\u97D0\u69FB\u97D8\u97CC\u97D4\u97E1\u97DD\u97E3\u97DE\u97D5\u674F\u688B\u67B3\u686F\u68A0\u67FA\u67F7\u67B4\u67B5\u6A7E\u6A3F\u6935\u67B4\u696B\u693B\u6B18\u6A28\u698D\u6ABB\u682E\u68F7\u6930\u6910\u687E\u6AC3\u69A7\u69E2\u68AB\u6846\u6AC2\u6A1B\u6829\u67CC\u6ABB\u68D6\u6A3C\u67E9\u67C5\u69AA\u689B\u6A89\u6A1E\u67DC\u68AE\u6990\u675E\u6B16\u68E4\u6A21\u6B17\u6AAC\u6831\u6B09\u6A38\u6962\u6B02\u6A23\u699A\u6AA5\u6AA8\u6A4F\u6A25\u695B\u681A\u6949\u6A20\u6A6B\u69FF\u6AF9\u67D1\u68CB\u6A3A\u6939\u6AB4\u6999\u69C6\u69CE\u6B0A\u69B5\u6AD9\u681F\u69CB\u692A\u6A4F\u69FD\u6A3D\u69CF\u672D\u68A4\u86BB\u692F\u69BF\u6B08\u68A3\u60F3\u67EE\u7D2E\u6ADE\u6ADF\u6A5F\u67EA\u673B\u6889\u693D\u6B1A\u6A14\u6914\u6771\u67F6\u68F5\u68B1\u67EC\u68A9\u9D87\u68DE\u69F6\u68DD\u67D9\u6B0F\u6AA1\u695E\u6A8C\u6933\u6952\u6A0F\u6B19\u6AD1\u6734\u68F9\u6974\u6A9B\u6968\u6AF3\u699C\u6A00\u6821\u6A54\u69E8\u6AEC\u6912\u67F1\u694C\u676D\u69CC\u678B\u6A34\u6A40\u68B3\u6793\u69E4\u694C\u67FF\u6A85\u6ACF\u6A60\u690A\u69A9\u6A1D\u6AE8\u67AE\u6AE7\u69C1\u690B\u695F\u6ABA\u6B00\u6938\u6AB9\u68DC\u67C6\u6A66\u6A1F\u6893\u6A96\u6A8D\u68D3\u6A08\u6AA4\u6904\u6A06\u6838\u6A81\u6A80\u6AF0\u69B1\u6AC5\u6C34\u6C68\u6C93\u6C69\u6DD0\u6EAB\u7066\u705D\u6EC9\u6D85\u6EA1\u6E66\u6E44\u6E89\u6CF9\u6E6F\u6DC2\u6D86\u6DCF\u6E5C\u6F97\u6F97\u6F96\u7041\u6F64\u705B\u6F63\u95CA\u703E\u6DF7\u6E34\u7011\u6FD5\u6F2B\u6F8B\u6E9F\u6DDD\u6DDC\u6ED1\u6E26\u6F1E\u6DF1\u6FFA\u6E2C\u6D7B\u6ED8\u7034\u6DCD\u6DEB\u6C89\u6C89\u6ED4\u6E3E\u9E02\u6CAE\u6E72\u6FE6\u6D1E\u6D6E\u6F08\u61E3\u61D8\u6CC2\u6DE8\u6DDA\u6D7F\u7048\u6FC9\u6E3A\u6E68\u6FCE\u6D80\u6D7D\u6EAA\u7042\u6D75\u6DE6\u6C43\u9359\u6EC3\u6ECF\u6D95\u6D74\u6CBF\u6D97\u6C7E\u6E53\u6F67\u6C90\u6E23\u76D3\u6E58\u6DDE\u6DCB\u6F78\u6FBF\u6F1C\u706A\u6EFC\u6FCB\u5857\u6E8E\u6CE2\u6DC5\u6CAB\u6C7A\u6D91\u7028\u6F31\u6F31\u6CCD\u9859\u6E3F\u6E4B\u6F06\u6DF6\u6DB7\u6E45\u6C9D\u6DBE\u6DFC\u6851\u656A\u9D7D\u525F\u6B3C\u6BF2\u758A\u6C4A\u6E9E\u7886\u6FF7\u5A46\u6D88\u6F1F\u6F4E\u6DCC\u6FA2\u7035\u6F7E\u6DE1\u6FF4\u7020\u7005\u702F\u6F87\u6C99\u6E3B\u6D38\u6CEE\u6F6B\u5723\u6DE9\u6DD5\u6FF2\u7014\u702B\u6D3C\u5863\u6F86\u6CD5\u6E98\u6E96\u6D7E\u6FE4\u6FC7\u6D01\u6E92\u6EF6\u6F8E\u6F8D\u6DAC\u7006\u6CCA\u6E5F\u6EDC\u7004\u6F94\u6FB3\u6DDB\u6D2B\u76EA\u6D0E\u705A\u6D00\u700F\u6F72\u6F7B\u6E6B\u6D70\u6E97\u6F58\u6C73\u6D1A\u6D1B\u700A\u71D9\u6D69\u6D17\u6CD6\u6D3E\u6E9C\u6CDB\u6D19\u6E69\u6D3B\u6C83\u6DFB\u6F77\u7497\u6C82\u6FA8\u6D09\u7870\u6CDD\u6C92\u6C4E\u6E22\u6D2C\u6CBF\u9BCA\u6F43\u6F93\u6D10\u6F0E\u6F07\u6DBD\u6CDC\u6332\u6D90\u6E43\u6CE9\u6CC6\u6EAE\u6DED\u6FC0\u6DDA\u6EEC\u7052\u7029\u6EBE\u6EB4\u6FDE\u5A11\u6CD2\u6C66\u6EB2\u6F5F\u6DE3\u88DF\u53C9\u6D6A\u6EA5\u6D5A\u7056\u6881\u7056\u7CB1\u6EC5\u6D20\u6E1B\u6C87\u6DFA\u6EF2\u6D66\u6CAD\u6C71\u6E88\u6CB7\u6C8B\u6EFD\u6F2E\u6D32\u86A4\u6E8F\u6CF3\u6FAC\u6D98\u700C\u6CBB\u6DE2\u6FB8\u7007\u6FC2\u6E21\u6CE7\u700D\u6F09\u6C41\u6C9B\u6EC7\u6D61\u6EB9\u6E73\u6DD4\u7062\u6CEC\u6F25\u6E65\u6DB3\u6E9B\u6EB6\u6CAC\u6D68\u6E24\u6C65\u7009\u6D76\u700B\u703B\u6F19\u6D8B\u6F53\u6E3D\u6F6E\u6FA3\u6FE3\u6F38\u701A\u6F27\u6E1A\u6D8D\u6D64\u6D18\u6DD2\u6F14\u6FF1\u6EF1\u6DD9\u6E32\u6CDE\u6DC0\u6D63\u6DB4\u6CB1\u6FD8\u6EF5\u7017\u6CBD\u6E56\u6DAB\u6FC6\u6D1D\u6F03\u6ED3\u6C4F\u6D27\u92C8\u6F66\u6D03\u6F2A\u6C70\u6C6F\u6E00\u6DC6\u6D60\u6F3A\u6D0A\u6DF9\u6D3F\u6D1F\u6C3F\u6C4D\u6D79\u6EEF\u6C3B\u6CC7\u6C96\u6CF1\u6C88\u57BD\u6F85\u9B59\u6E31\u7057\u6C4C\u6C9C\u6CB8\u6F36\u6F0A\u6F70\u6D2E\u6FDC\u6D25\u6E5A\u6CB9\u6D29\u6D84\u6F5A\u6CF2\u6DF5\u6C5F\u6D39\u6FE1\u705E\u7000\u7016\u6F90\u6FAA\u701C\u6E1C\u6D0F\u7040\u9152\u6D12\u6C59\u6FD4\u6CD9\u6C6A\u6DAF\u6FCF\u6E90\u9D3B\u701D\u6E8D\u6D37\u6C57\u6F89\u6D3B\u6C59\u6DFB\u6D6D\u6D32\u6C94\u6F92\u6CB6\u6C84\u7051\u6D6F\u6C61\u6C85\u6C40\u6D0C\u6CB3\u7026\u6CB0\u6EC6\u6ED2\u6D62\u6E62\u6DBF\u6C67\u6FFF\u6F5B\u704A\u6F18\u6EBC\u6EBD\u6D87\u6C8D\u6EA7\u6F02\u6E6E\u6E79\u6F6D\u6E4E\u6F39\u6F52\u6D7C\u6E19\u6FA5\u6E67\u6FB9\u67D3\u6C92\u6F4F\u6C72\u6DCA\u6C50\u6CD3\u6D8C\u6F12\u6C80\u6D3A\u6C5B\u6D8E\u6E55\u7021\u6FFB\u6EC1\u6CD0\u7030\u6EBA\u6D08\u6FA6\u6E51\u6F51\u6E40\u6F84\u6ED0\u703A\u6E33\u6F32\u6F01\u6F21\u6C6D\u76DC\u6CED\u6F35\u6DEE\u6F57\u6F50\u6CB4\u6CE0\u6D11\u7038\u6DF0\u6EC4\u6C7B\u703F\u6EEB\u6ECC\u6D5F\u6FAE\u6DEA\u7039\u6D82\u6C7D\u6E1D\u6FB0\u6D3D\u6DBB\u6E1D\u6C54\u6ECA\u6EA3\u7032\u6C8E\u6F6A\u6F5D\u6E30\u6D22\u6F55\u6FEE\u6D77\u6C81\u6D35\u6C60\u67D2\u6DD7\u6CCC\u6C95\u6DF4\u6E49\u6C4B\u6D7A\u6DD8\u6C98\u6E5D\u6CC3\u6CE1\u6C8F\u6CC4\u6E2B\u6C8C\u6D36\u6E39\u583B\u6F54\u6D59\u6E71\u6E77\u6EB1\u6E99\u6E4A\u6E05\u6F2C\u6E41\u5447\u6D65\u6D93\u6EB3\u6D67\u6CC1\u6FC8\u6F5E\u60C9\u6E63\u6FA1\u6F6C\u6E52\u6C5C\u6F60\u6D16\u6CEF\u6FA0\u6D5E\u6DAE\u6FB1\u6E20\u705F\u6CBC\u6D58\u6F80\u6D8A\u6FEB\u6D31\u6F73\u7044\u6DBA\u6D92\u6D0D\u6F0F\u7037\u6D78\u6FEF\u6D2D\u6E25\u6F3B\u6F6F\u6FE2\u6CC0\u6FEB\u6F7A\u532F\u6CE5\u6EA4\u6FBC\u6F1A\u6D30\u6C3E\u6DC8\u7060\u6F20\u7061\u6DDF\u6E54\u6FDB\u6D2A\u6F7D\u6FB2\u6FDD\u6F8C\u6EA2\u6E2F\u6F3E\u6E94\u6FE7\u6E3C\u6FED\u7033\u6F2D\u6D42\u6E03\u6EFF\u6F62\u6E36\u6F22\u701F\u6CD4\u6DC7\u6F95\u6E2E\u6E5B\u6FE9\u7058\u7001\u6FCD\u6D0B\u6EA0\u704C\u7046\u6D34\u6C6B\u6E9D\u6E74\u7069\u6EAF\u6ECB\u6FE8\u6D40\u6E35\u6F15\u6FAB\u700E\u6FA7\u6FC3\u6E93\u6DFD\u6DD3\u6C55\u6F30\u938F\u934C\u6F82\u7043\u6D36\u6E4D\u6E60\u6ECD\u6EB0\u6DB5\u6F3C\u6D94\u7069\u7069\u6CCF\u6EA6\u6C5D\u7064\u6FF0\u7063\u6FFC\u6CD1\u6DE5\u6D33\u7049\u6F05\u6DC4\u6CBA\u6E2D\u6CD7\u6DC9\u6D83\u6F7F\u6EBF\u6D6C\u6F76\u6F0D\u6DB8\u6D07\u6E61\u6FC1\u6FA4\u7031\u6F40\u6FB4\u6DE0\u6EB7\u6E28\u6B60\u6CC5\u6EAB\u6D04\u6F69\u6EED\u6F2F\u7045\u6DD6\u6E27\u6FC4\u6E5E\u7055\u6F88\u7027\u6EC2\u6FEC\u6EF4\u6D28\u6EFE\u6F61\u6F37\u7019\u6FAF\u7023\u6DD1\u6CE8\u7015\u6EFB\u6C86\u6C78\u6DEF\u6D41\u7068\u6F23\u6C76\u6EFB\u6C9B\u7022\u6D89\u6C9A\u6FCA\u6CDA\u701B\u701B\u6DEC\u6DB2\u6EF9\u6F9E\u6DF2\u6FBD\u6FFE\u7018\u6DF2\u6CBE\u6EC8\u6DF3\u6DBC\u6EF8\u6E1F\u6FE0\u6E78\u703C\u6E38\u6E64\u6F29\u6DE4\u6CE3\u6E46\u6E47\u6F7C\u6F33\u6FBA\u6DAA\u6F13\u6EEE\u6C52\u6FAD\u6CEB\u6EC0\u51DC\u6EF7\u6FB6\u7024\u6ED6\u6FDF\u6C74\u706B\u7128\u7185\u7180\u714B\u713A\u715D\u709F\u716C\u710A\u71D8\u71DC\u721B\u7213\u711C\u7206\u71C1\u71B3\u715C\u8096\u7190\u71F0\u70AF\u9DBA\u7147\u71C3\u524A\u7156\u70D4\u70F0\u655D\u655E\u5C1A\u70AF\u8CDE\u68E0\u5802\u515A\u5E38\u725A\u74FD\u5617\u638C\u7576\u9EE8\u88F3\u721D\u70FF\u810A\u7082\u710D\u7100\u7C73\u7091\u7CE7\u7C91\u7C97\u7CA1\u7CA3\u7CAF\u7C89\u7229\u7C7F\u7C96\u7CD4\u7C95\u7C84\u7C81\u7CCC\u7C8D\u7CD7\u7CBA\u7CD0\u7CA7\u7CDD\u7CE0\u7CD6\u9E8A\u7C75\u7C80\u7CBD\u7CCA\u7094\u7CA8\u7CEF\u7C9E\u7CB3\u7152\u7CF2\u7C7D\u7C88\u7CC5\u7CE8\u7C78\u7C8C\u7CD1\u7CC8\u6549\u7C7A\u7C85\u7CBE\u7CEE\u7CBB\u7C73\u7C94\u7CE2\u7CF7\u7CCB\u7CD5\u7CD2\u7CDF\u7C79\u7CBF\u7149\u7CB4\u7CF0\u7CEC\u7CDE\u70DE\u7CD9\u6599\u7CB9\u7C98\u7C92\u708E\u818B\u89AE\u93A3\u69AE\u6ECE\u7223\u7192\u584B\u9DAF\u7296\u52DE\u87A2\u799C\u7469\u7507\u919F\u7162\u7F43\u71DF\u89A2\u5AC8\u7E08\u8B0D\u892E\u71D0\u71EE\u7131\u71CA\u7203\u71DA\u7092\u98C6\u5261\u7E87\u9843\u90EF\u6B3B\u6565\u8669\u7154\u7076\u70D3\u71D2\u7186\u71FD\u71B9\u5C11\u714C\u71E0\u70C5\u7701\u714D\u71AA\u71D4\u70FD\u70D9\u70B5\u71EC\u71FB\u70CD\u7144\u71C6\u52A3\u712E\u71EC\u7098\u70C6\u7210\u7178\u717D\u71A9\u7184\u719C\u70FA\u710C\u7158\u70F3\u883D\u717B\u720A\u70D2\u720C\u719D\u7122\u7194\u70E2\u70E4\u70F7\u7125\u5C16\u70E0\u77A5\u71CE\u7143\u9DE9\u6C05\u7358\u70EF\u5E63\u87DE\u985E\u6583\u5F46\u9C49\u618B\u9128\u9C49\u8E69\u7181\u71F2\u5F0A\u5AF3\u70B4\u721E\u71A1\u70D1\u71FC\u71BD\u7074\u70DC\u71F8\u7169\u7227\u7110\u71C8\u70B3\u70FC\u5149\u71B8\u70F4\u719B\u7159\u71C2\u70A1\u7165\u7084\u71CF\u7163\u7130\u70F6\u70FB\u7161\u708A\u71C8\u63F1\u5C10\u96C0\u71CB\u70A9\u7197\u7113\u71F4\u721A\u70C7\u70DA\u7182\u707A\u70B8\u70F8\u707A\u707C\u707C\u70AE\u7160\u7096\u534A\u7737\u97CF\u53DB\u7276\u5E23\u5224\u9816\u8C62\u7510\u5F2E\u89E0\u9130\u62F3\u5238\u7FF7\u5377\u4E83\u7D6D\u7CBC\u9F64\u7106\u7189\u70BE\u71E5\u71C0\u7170\u7146\u719E\u71ED\u7071\u70A4\u7130\u7201\u71A0\u71FF\u71D6\u71A4\u71B0\u70AC\u7117\u7226\u711F\u70D8\u70E1\u716A\u71E8\u7214\u71BF\u7142\u7150\u71AF\u7164\u71C1\u7141\u70CA\u721F\u71E4\u71C7\u8F1D\u7153\u8000\u720D\u715F\u7205\u7159\u71ED\u71E1\u9872\u7168\u7185\u71BC\u719A\u712F\u71B5\u71C9\u71E6\u70B7\u7095\u71BE\u7093\u7086\u71A5\u7120\u7132\u7210\u7187\u711E\u7219\u71E7\u71F1\u7119\u70AB\u70D7\u571F\u586D\u5852\u5833\u5766\u5834\u7F48\u5824\u58DB\u57F8\u5828\u584C\u57A0\u5881\u5189\u5853\u580B\u581D\u5814\u57F0\u57D2\u89F3\u58FA\u57E7\u58FC\u585A\u578C\u58F9\u57BA\u5770\u57E9\u5808\u574D\u89BF\u76BE\u5774\u8D6B\u590C\u8D6F\u5855\u8D6D\u8D68\u8D69\u90DD\u8D66\u8D6E\u9F00\u574B\u8D67\u589E\u8D6C\u5761\u7A40\u6996\u5BFA\u57EC\u581C\u77BD\u93E7\u6F00\u9F1C\u9F1E\u99A8\u9F15\u6BCA\u9F1B\u9F19\u879C\u9F18\u78EC\u7F44\u6128\u64CA\u8072\u9F1A\u8B26\u97FE\u5849\u57EE\u7E20\u9DC7\u5799\u6B3E\u5762\u57E2\u572D\u580E\u5C01\u71C5\u579A\u582F\u589D\u9D71\u57F6\u5232\u58D4\u90BD\u58BB\u605A\u594A\u5366\u582D\u58BA\u58A6\u962A\u5780\u58CE\u586F\u5839\u57F5\u573B\u57A2\u750F\u577C\u579B\u5838\u577B\u5862\u57E0\u58BD\u584A\u5741\u57E4\u5804\u53BB\u6705\u57CC\u76CD\u8D04\u69F7\u71B1\u588A\u5E6B\u9DD9\u728E\u583F\u57CE\u588B\u57D4\u52E2\u52AB\u5889\u87C4\u52AB\u5858\u90BF\u57BF\u57C3\u6179\u646F\u6470\u57DF\u9F01\u537B\u7FFF\u9A3A\u58D9\u97A4\u7E36\u5876\u8B3A\u586B\u57F4\u584E\u8F42\u579E\u74E1\u587C\u5898\u5835\u57F7\u57B8\u5768\u5831\u58B3\u57B5\u76E9\u8D05\u93CA\u71AC\u7352\u587D\u87AF\u87AB\u5836\u57FC\u57AE\u9C32\u5886\u646E\u9F07\u8071\u9A41\u8B37\u5771\u57ED\u5733\u5772\u587F\u5797\u8D64\u578F\u5764\u57A3\u58E9\u58D6\u5827\u92C6\u5729\u574F\u576A\u576F\u5810\u58E2\u57A4\u57C2\u57E1\u572C\u5722\u5777\u5865\u581B\u58E9\u585B\u5882\u5819\u580D\u57C6\u573E\u6BBC\u5F40\u57F3\u57C7\u57CF\u71FE\u58FD\u579D\u574E\u5A7F\u58B1\u5834\u8D95\u8DA7\u8D84\u8D9B\u8D7D\u8D99\u8D9F\u8D7B\u5806\u8DAC\u8D8C\u8D8E\u8D8F\u8DAB\u8D93\u8C70\u8DB2\u577D\u5798\u8D91\u5745\u8D91\u8D8A\u8D72\u8D92\u8D80\u5775\u8D76\u8D91\u582C\u8D94\u57A5\u572A\u8D8D\u5820\u8D85\u8DA1\u8DAD\u8D81\u8D96\u8D9C\u8D79\u8D79\u8DA8\u8DAE\u8D77\u8D85\u8DA3\u8DAF\u8D90\u8D77\u8DA5\u8DAA\u8D78\u8D89\u8D73\u55C7\u8D74\u8DA0\u5FD7\u899F\u5730\u5734\u5747\u5747\u5829\u968E\u581E\u5749\u57B9\u57F2\u57E5\u5409\u5864\u81FA\u56CD\u9D36\u57D5\u55C0\u8881\u52BC\u9821\u56AD\u6B56\u6B2F\u58A0\u58E7\u582E\u55AA\u58F4\u71B9\u559C\u5609\u572F\u657C\u5830\u5880\u58CF\u58E3\u57FD\u57D0\u6556\u576D\u572E\u5800\u587B\u58A3\u5868\u5C0C\u58A1\u58D2\u5F6D\u61FF\u5E78\u9F13\u5890\u5769\u61FF\u582A\u5854\u579F\u58FE\u58A1\u4E84\u5888\u58AB\u58FF\u5720\u5874\u7789\u9864\u584F\u5894\u57C1\u7FF9\u5773\u5801\u57CB\u6BD0\u580C\u5823\u8CE3\u58BF\u583D\u586D\u5776\u585D\u5891\u58A9\u588E\u57F1\u5751\u574A\u5809\u58DD\u5740\u8D70\u57E3\u589F\u58C9\u58DA\u576B\u5859\u57FB\u58D5\u58E4\u5783\u5837\u58A5\u5887\u57B6\u57F9\u5883\u5793\u58C8\u58C7\u58DE\u7AF9\u767D\u99A7\u76AD\u6CC9\u7065\u769B\u99AB\u769E\u76A4\u7688\u7693\u7692\u76A6\u9B44\u7BC0\u76AB\u7681\u999E\u7696\u768B\u99A3\u5E1B\u99A1\u7B2A\u7687\u7B78\u7C21\u7C22\u7C63\u99A5\u768A\u7682\u999D\u7684\u999C\u768F\u99A6\u7B06\u767F\u769A\u76AA\u7C0B\u99A7\u768E\u689F\u9CE5\u7689\u769C\u5CF6\u88CA\u820B\u89BA\u7228\u6FA9\u71E2\u7202\u7C50\u58C6\u9DA3\u9DEE\u9DFD\u9D73\u56B3\u7DBF\u5967\u7B4B\u5236\u7C72\u9845\u91C1\u74BA\u7B52\u7910\u7BB8\u7502\u89F7\u5B78\u9105\u9C5F\u657F\u752A\u5411\u7B8F\u7B99\u7FE9\u8840\u9ECC\u81EA\u5DA8\u7E82\u7BCE\u7BE1\u7B97\u7B67\u7BF9\u821F\u9E12\u7C66\u7C5B\u8F5D\u5289\u5297\u91C1\u791C\u9147\u912E\u6B5F\u8209\u5B03\u7C59\u8B7D\u79BE\u9999\u7A4A\u7A08\u7B56\u7A31\u7A20\u7A3B\u79DF\u7A69\u7A03\u7A44\u7A20\u76C9\u7BB1\u7A71\u7A0A\u7A05\u79CE\u7B96\u79E3\u7A26\u79CB\u7A0D\u79D2\u7A1C\u7A11\u7A58\u7A61\u79F8\u9D38\u9DCD\u7A46\u79DD\u7A2E\u7A5A\u6BC7\u79C5\u79EA\u79E9\u79CF\u7A28\u79BF\u79D6\u7A17\u79C1\u7A02\u7A04\u7A47\u79EB\u7A6E\u79EE\u7A22\u7A6C\u7A3D\u5D47\u7A39\u7A19\u79FA\u7A57\u7A3C\u7A00\u79C9\u79CD\u79E7\u7C5F\u5229\u5241\u7C0C\u4E58\u91C9\u79DE\u79ED\u7B28\u79E4\u79E0\u79F7\u7A2B\u7508\u5B63\u79C0\u79FB\u90BE\u9121\u81F2\u7A30\u7A6D\u9ECD\u7A1A\u7A5B\u7A14\u7A10\u7A0C\u7B82\u6089\u79D8\u79D5\u7A4D\u548C\u7A0B\u7A0B\u7A4B\u79DC\u79EC\u7A13\u7A54\u7A18\u7A6B\u7A60\u79C8\u7A2F\u59D4\u7A56\u756A\u7A37\u7A1E\u7A1B\u7A12\u91CB\u79D1\u7A62\u7A3F\u7A15\u7A70\u7A5C\u7A5F\u7A67\u53CD\u7BDE\u7C1C\u7BDE\u76E4\u69C3\u57BC\u7B94\u7C53\u7C3F\u7B88\u5E4B\u78D0\u910B\u6147\u642B\u5906\u5404\u7B35\u7BCA\u97B6\u5ABB\u7E0F\u51AC\u8929\u9ECF\u9ED0\u9D7F\u9E14\u7B72\u7BBE\u7C39\u4E4E\u91C6\u9D03\u7C29\u9D96\u9CE7\u9DB3\u7BB5\u9DC8\u9D54\u9D25\u9D15\u52F3\u8775\u7503\u9CE6\u9114\u6B4D\u9D7B\u9D4C\u6101\u63EB\u9DCC\u9E03\u9D80\u5A9D\u9DFB\u58EC\u7C2D\u7B49\u6FCC\u718F\u769D\u7B40\u6BC0\u5148\u4E1F\u7BD5\u52D5\u9867\u7C4C\u7B60\u544A\u7C49\u9760\u7BC1\u537F\u8CBF\u5C04\u7B63\u7C03\u8EBA\u8EC2\u7B76\u7B45\u9D79\u8EB2\u7281\u7BA0\u8EC9\u7B48\u7B11\u7C25\u803D\u7B0A\u9808\u8EAC\u8EB2\u9BEC\u9ECE\u7BFD\u7C01\u7B19\u7BE9\u8EBD\u7BC7\u536F\u8D15\u5B75\u6BC8\u5375\u8EC0\u7C6B\u7559\u9EE7\u7B84\u7BE6\u7C45\u7BEA\u4E48\u7B64\u7C20\u9B4D\u9B48\u9D5D\u9B3F\u72A9\u7BB4\u7B8B\u7BF8\u9B43\u9B4A\u9B46\u9B45\u9B3E\u9B4E\u9B52\u4E4F\u9B4B\u7B1E\u7B32\u7C3E\u9B4C\u9B55\u7C0F\u9B41\u9B56\u9B51\u5343\u8CEA\u76FE\u7B9C\u6731\u9D6F\u6BB5\u81FF\u7BFF\u7C19\u7C33\u7C10\u7BC4\u7BB8\u7B91\u4E56\u984A\u7C06\u7B66\u90EB\u820C\u7BA1\u7FF1\u5782\u91CD\u592D\u660B\u7C1D\u68E8\u9E04\u7B05\u8695\u8087\u7B74\u5FDD\u61F2\u541E\u555F\u55AC\u7AFB\u7B33\u5DB4\u7DAE\u8B65\u9F43\u79B9\u8CEA\u9F49\u9F3D\u9F42\u7C30\u5293\u7B30\u7C0D\u980E\u7C23\u9F3E\u79A6\u7B44\u9F40\u6B23\u722A\u9F41\u7B46\u9F48\u7C54\u9F46\u7B1B\u65B6\u7C2B\u7B2B\u9F47\u7B01\u7BE2\u7C57\u771A\u7AFD\u7B8C\u7C48\u7B6D\u9D1F\u9DCE\u65B2\u7B51\u6BC0\u7521\u7AFF\u7B04\u65A4\u7AFA\u7B0E\u7500\u7BC9\u90F5\u90B8\u7B47\u7BEB\u7B34\u7B6E\u540E\u7B47\u6B78\u536E\u7B04\u7C2A\u7BE5\u7BFB\u7C1F\u7525\u65A5\u51E0\u98BA\u98B6\u7C37\u6735\u68A8\u7B9B\u6BB3\u7BDC\u98BE\u98C6\u51F0\u7B08\u98A9\u98C0\u98B3\u98A8\u7281\u98BC\u51E1\u7B69\u98B1\u98C9\u7B73\u7B75\u7BE8\u7B2C\u9CF3\u98CB\u98B3\u98A8\u7BDB\u5919\u98B2\u98AC\u7C26\u6106\u98AE\u63A3\u8E97\u98C2\u98B8\u88FD\u8B86\u98AD\u516B\u5F73\u661D\u5F97\u5FA5\u722C\u5FC1\u5F88\u7C72\u7BE7\u8862\u5F9F\u5F82\u5FAD\u8855\u5FAF\u5F78\u929C\u885B\u5F7C\u7B26\u5FAB\u5FA0\u885B\u884D\u71A7\u5FB6\u5F9C\u5F85\u8857\u5F92\u9D14\u9D29\u5FA8\u885D\u5FAA\u5F79\u5F7D\u74DE\u904D\u5FBC\u7B4F\u8853\u7B2D\u7C64\u7B12\u5F96\u885A\u5FB7\u5F9B\u52AE\u7BE0\u74E5\u7B71\u5F7F\u5F98\u5F8B\u7C65\u5F86\u7B61\u7B4C\u884E\u7BAF\u884C\u7C3D\u7B54\u8859\u5F91\u5F81\u5F76\u7BCC\u8861\u5FA9\u5F7E\u5FBB\u5F90\u5FA1\u5F9E\u7B70\u616B\u5F87\u5F74\u74DD\u74DF\u7BDF\u548E\u5FA6\u7B2E\u5FB2\u8073\u8856\u5F89\u5FBD\u9EF4\u9C34\u5FB5\u5FBE\u5FAE\u5F8C\u5F8A\u5FB9\u5FBF\u5FAC\u5F80\u5F77\u8852\u659E\u5F99\u5FC0\u4E47\u660F\u7B4D\u7B77\u9D56\u7B09\u7B0F\u5269\u6C10\u7B09\u910E\u7B13\u7B31\u7B23\u5370\u7BD8\u725B\u72A6\u728B\u7285\u770B\u7291\u7C4D\u7288\u7261\u7279\u72A2\u7290\u727F\u729E\u7274\u726A\u7272\u7C40\u6211\u72A5\u727B\u7286\u7BF2\u7278\u7297\u726F\u7284\u725E\u7270\u726C\u751F\u7B90\u7C00\u727E\u62DC\u72A1\u727C\u89D5\u728D\u90A6\u5931\u7267\u7277\u725D\u7260\u7269\u7293\u7B58\u728C\u7B8D\u7263\u7C0E\u7C3C\u72AA\u72A7\u7295\u7B9D\u6BDB\u72A3\u7C5C\u72A4\u7273\u7292\u7289\u729D\u7BD4\u8215\u5795\u8211\u9D60\u9D30\u9D45\u9D2D\u8214\u8210\u7B65\u8210\u961C\u52C2\u5E25\u86D7\u522E\u5284\u9827\u8214\u5E2B\u7C2C\u90DC\u90C8\u96D2\u555F\u7C1E\u751C\u5CCA\u7C28\u7B22\u70CF\u6236\u80A9\u6243\u6241\u52F3\u624A\u6240\u6BB7\u7B24\u515C\u623E\u7C43\u7B4D\u7BCB\u6249\u7BDA\u5E1A\u7B50\u7C4A\u7B25\u7C43\u96C7\u7BE4\u7B38\u6248\u623A\u6247\u623F\u6246\u623D\u6242\u5347\u7BAD\u7C38\u7C0A\u9DD1\u773E\u7BAC\u7C27\u7B95\u8843\u8844\u61A9\u8848\u5379\u7BDD\u884A\u8D0A\u81EC\u768B\u6BEF\u9D82\u9D9E\u9D5A\u6BE8\u515F\u6BF3\u9B3C\u6BE7\u6BEC\u81ED\u7782\u7A68\u9839\u6BE2\u6BFD\u90F3\u90CB\u6B4B\u6C0C\u81EE\u606F\u61A9\u6C01\u6C06\u6C06\u9F3B\u6BF8\u9F3B\u6C08\u7F6A\u6BF0\u9F32\u9F30\u9F33\u899B\u89A3\u9F37\u9F22\u7B2F\u7BB9\u9F2D\u9F28\u9F2A\u515C\u9B4F\u9F36\u7CFB\u9F23\u9F25\u7C6A\u74DC\u9F35\u9F2C\u9F2F\u9F2B\u74FE\u9F2E\u7BC6\u6C0F\u9F29\u9F31\u7B4E\u9F34\u536C\u9F38\u9F24\u7B1D\u777E\u9DED\u9DB9\u7B98\u5351\u7C02\u7B87\u56DF\u56EA\u52EB\u7B1A\u7C6E\u7BFE\u7B85\u7CB5\u56EA\u9131\u98DB\u5306\u7FFB\u7BF3\u81FC\u8208\u76E5\u8EAB\u5152\u8F3F\u5E20\u53DF\u6B43\u81FE\u8201\u9F20\u8205\u8207\u8204\u661D\u8252\u8225\u7C3B\u7C6C\u8240\u7C60\u7BE3\u7B4A\u8239\u8244\u8261\u8236\u9D43\u824E\u8228\u8242\u823D\u7BF7\u825E\u7C05\u7B10\u822C\u8239\u7C09\u7C69\u8251\u8258\u8235\u7C05\u823F\u825C\u822F\u87BD\u825B\u8233\u8221\u8238\u7BF4\u7C6F\u824B\u8247\u826C\u826D\u8232\u8259\u7BA4\u8245\u8234\u7C5A\u8253\u8652\u7B8E\u548E\u7B18\u7BD9\u7BF0\u7C47\u7BB7\u8220\u8249\u8266\u7C07\u8266\u7B8A\u7B20\u8268\u823C\u8257\u8264\u824F\u8256\u825A\u8222\u7BF1\u8250\u7B00\u823A\u7C11\u8255\u822A\u822B\u7C67\u8263\u826B\u825F\u8237\u8269\u6208\u3001\u5EC4\u5EC4\u826F\u79B8\u5EC1\u5EEE\u5C03\u5871\u9D4F\u9DDB\u90D9\u9118\u80FD\u7CDC\u9EBC\u9EBE\u9B54\u9EC2\u9761\u78E8\u913A\u5EDE\u6037\u6469\u9EC0\u9EBC\u5E8A\u5EC2\u9EBB\u7CDC\u587A\u7A48\u9EBC\u7298\u9EBE\u9B54\u9EC2\u9761\u78E8\u5EB2\u6469\u9EC0\u9EBC\u7E3B\u51B0\u6636\u76DA\u76B4\u526B\u6551\u88D8\u7993\u7994\u79A2\u798D\u7982\u7988\u5EE0\u7956\u7990\u8996\u7995\u79B7\u793E\u795B\u79B1\u79A7\u9DD3\u7970\u7969\u7945\u7948\u794B\u7957\u7951\u79B6\u7947\u79A0\u7953\u7974\u799B\u795C\u7950\u794C\u7967\u795E\u9863\u79B0\u7946\u7973\u794F\u798F\u79B2\u798B\u79AB\u793D\u7941\u912C\u796A\u7954\u7963\u7944\u79AC\u79B4\u796B\u795A\u6191\u617C\u7942\u7955\u793F\u7979\u798A\u795D\u79AA\u7940\u8E59\u7952\u7972\u7964\u7960\u79A1\u7940\u799A\u797A\u7996\u7965\u79AE\u79A8\u797F\u7992\u797C\u79A4\u7997\u7998\u798E\u794A\u7949\u797D\u79B3\u79AD\u5E84\u5EB1\u5EA4\u5EC5\u5EE7\u5ED2\u5EDA\u620A\u6BFF\u5EC7\u620D\u87B7\u882F\u527C\u620C\u5E8D\u54B8\u5A01\u5EC4\u5E95\u725F\u6210\u5141\u5EC6\u5EB3\u5ECB\u5EBE\u621A\u6214\u6717\u76DE\u7D6B\u53C3\u5ECA\u5277\u5246\u90CE\u6B34\u5EAC\u5ED8\u620E\u752B\u672E\u9EBB\u6C42\u5E8B\u5EDF\u5EA8\u5EAB\u72AC\u7FA9\u8CB5\u53C3\u98C6\u730B\u8EEC\u72AE\u5EB5\u70BA\u6B38\u6166\u5ED7\u5F67\u5C24\u755A\u5EB8\u5EB7\u5DDE\u5ED4\u5EA3\u5212\u5E9A\u8CE1\u5510\u51CB\u51C8\u51CE\u5EAE\u6C7A\u51CD\u51B0\u51CC\u51BC\u5EA2\u51B9\u51B6\u51C4\u6C96\u51DE\u51BD\u5EF2\u51B1\u51D0\u6B21\u51C6\u51B7\u51D4\u6D82\u51BE\u60D1\u51DD\u6E4A\u51CA\u6CC1\u81E7\u99AE\u51D8\u5EC8\u51D7\u5E8C\u51C5\u6DBC\u51DC\u5EE8\u6C38\u5EEF\u5E8F\u5EAD\u5ED5\u4E4B\u5EE2\u5E82\u76DC\u8CC7\u5EA5\u6825\u5E9C\u7CA2\u81BA\u9DF9\u61C9\u9D8A\u79F6\u8150\u5E88\u77E3\u5EE5\u74F7\u5EA7\u9908\u6063\u54A8\u6976\u5EE1\u59FF\u5F0B\u5E80\u9E86\u8CA3\u93D6\u718A\u9E83\u9E8B\u9E9F\u5875\u9CF6\u9E87\u9E9D\u9E82\u9E94\u9E91\u9E99\u9EA4\u879A\u5F0F\u5ECE\u8CB3\u9E8E\u9E9C\u9EA0\u911C\u9E9B\u96BF\u614B\u5E87\u5FD2\u9E80\u9E9A\u5E96\u9E8C\u9E92\u5E89\u9E87\u9E88\u9E8D\u9EA1\u9D3E\u7DF3\u5EAA\u53F0\u67B2\u70B1\u9DB6\u6216\u9851\u74F5\u89F1\u90B0\u611F\u6020\u76DB\u5EF3\u5EDC\u5ED6\u90D5\u6577\u5EE6\u6212\u5F01\u5EB4\u5EDD\u5EA6\u5EB6\u9D18\u5E2D\u5EE3\u5ED1\u5EA0\u5EB9\u5EB0\u5EC9\u5C28\u6209\u5EF1\u5EDB\u5EE9\u5ED9\u6176\u5ECC\u9E7F\u9F90\u5ED3\u7222\u5298\u5E9B\u5EEC\u5E97\u5EE9\u5341\u7779\u716E\u5BD4\u90FD\u7FE5\u5BB4\u5DFF\u5BC0\u9DA6\u6ADC\u737B\u5B9C\u771F\u76F4\u6A50\u8839\u5B5B\u5BDF\u56CA\u5357\u87D7\u7D22\u7590\u7A74\u7AA9\u7AAF\u7A85\u7AAA\u7A8F\u7AB2\u7ABE\u7A90\u7076\u7AC7\u7AB5\u9DCF\u7ACA\u7AB8\u7A96\u7A8C\u7AAE\u7A86\u7A7E\u7AB3\u7AC5\u7AC1\u7A8A\u7A97\u7A97\u7AC4\u622D\u7A81\u7AA2\u7AB4\u7A99\u7A76\u5E18\u7AB6\u7A95\u7A7A\u985B\u7A7B\u7A92\u7AC0\u7A89\u7A7F\u7A79\u7A75\u51A4\u7A9E\u7A78\u7ABF\u6B55\u7AAF\u7AB1\u7AAC\u5BB9\u7A84\u7A87\u7ACA\u7A80\u7AAB\u7ABA\u7AB7\u7A98\u7FF8\u7A9F\u7AAF\u9631\u7A8B\u7A88\u7AA0\u7A94\u7AA3\u7AA8\u672A\u5B8B\u9D53\u5B88\u52C3\u90E3\u6559\u652F\u6A95\u58BC\u9EAE\u9CF7\u9EB0\u8F5A\u87FF\u980D\u9EB5\u9EB5\u9EB5\u7F4A\u9EA7\u9EB4\u9EAD\u64CA\u9EA9\u5BD6\u6533\u7FC5\u9EB4\u9EB7\u7E6B\u9EB6\u5BB5\u9DB4\u5BE9\u5BA2\u5B8E\u5197\u5BD9\u5B85\u7262\u5B92\u5BEB\u535A\u683D\u5C08\u9DD2\u5BAC\u8F09\u5BEA\u86D3\u5278\u9168\u81F7\u78DA\u911F\u80FE\u622A\u60E0\u54C9\u6234\u88C1\u5344\u5EFE\u8F40\u8F25\u8F35\u671D\u8F23\u5BD8\u8F16\u8F1E\u8F0D\u97D3\u8F1F\u8F0E\u8F54\u8F18\u8F56\u8F45\u8F08\u8F53\u8F05\u8EE0\u8F34\u8F4E\u65AC\u8ED7\u8ED3\u8EE7\u8EFC\u8EDE\u8EF6\u8EF1\u8EDD\u8F17\u621F\u8F1A\u8F14\u8EF7\u8EFE\u8EE9\u8F57\u8F46\u8F49\u8F5F\u8F10\u8F44\u8F52\u8ED1\u8F51\u8ECC\u8EEE\u5BC1\u8EF8\u8EDF\u8F00\u8EEF\u8F63\u8F0A\u8ED2\u8F1B\u8F49\u8EFB\u8F3B\u8EDB\u8ECF\u8F15\u8F13\u8F2E\u8EDF\u8F39\u8EDC\u69A6\u8EF5\u9DBE\u8EEB\u8EE8\u8EE1\u8792\u8F2A\u8F07\u5E79\u8F38\u8F38\u4E7E\u96D7\u7FF0\u65A1\u8EE5\u8ED8\u8F37\u8F43\u8F33\u8F24\u8EF9\u8EE6\u8F2F\u8ED4\u8EFA\u8F5E\u8F12\u8ED4\u8F11\u8F47\u8F5E\u8F4F\u8F3E\u8F55\u8F01\u8F50\u8F36\u8F59\u8F5B\u8EFF\u8ECB\u8F32\u8F62\u8F48\u8F1C\u8F20\u8F58\u8F40\u8F60\u8F4D\u8F03\u8EF4\u8F4B\u8EFF\u8F64\u8F2C\u8F06\u4E08\u8005\u5BA5\u5BEE\u9D9F\u5B8F\u6584\u6F26\u729B\u6C02\u5B77\u5BC4\u527A\u5AE0\u8003\u91D0\u5B84\u5B5D\u8001\u8007\u5354\u8003\u66AB\u93E8\u69E7\u5879\u8877\u540F\u4E8B\u5BE0\u5BA8\u78DB\u8E54\u59BB\u5B99\u758C\u58EB\u5BA3\u944B\u5BE1\u5B87\u8CD3\u5BA4\u77D7\u5BC5\u8CE8\u5B97\u5B8C\u5BB8\u5B81\u5B95\u5BCC\u5BB6\u5BF6\u5BC7\u5B9A\u51A4\u5B57\u9E0B\u5B9B\u525A\u60CC\u5BEF\u5BBF\u9841\u9EA5\u5BD1\u5B83\u8006\u5BE7\u752F\u5BCD\u5B93\u871C\u8004\u5BC6\u5BF2\u800B\u5BB3\u61B2\u5BB3\u53E4\u80E1\u9D98\u8C41\u9D23\u9DB7\u6BC4\u5BAE\u514B\u5272\u5B98\u984D\u6545\u60B9\u560F\u8F9C\u51A4\u5BAD\u5BA6\u5BA7\u5BE5\u5349\u5BDE\u8CC1\u5BEC\u8CFD\u5BE8\u9A2B\u9DB1\u585E\u8E47\u6434\u8B07\u5BCB\u8930\u5BD2\u9F16\u4E03\u524B\u9D77\u5162\u52C0\u525C\u524B\u5B89\u6848\u9D88\u9D33\u5BCE\u981E\u5BD0\u5BF1\u5BE2\u5BE4\u5BE3\u90EA\u89BE\u8ECA\u5BE6\u5BD3\u5BF0\u5BCA\u5BF5\u5BC2\u5BB0\u5927\u4E42\u761F\u75B8\u760D\u7647\u5972\u75A4\u75D5\u6709\u5187\u75ED\u7611\u766D\u9D57\u6BBD\u6BFB\u622B\u75BD\u75CC\u74FB\u90D7\u90C1\u90E9\u6B37\u7635\u95B7\u6BBA\u5F12\u524E\u75F3\u75B2\u6BBA\u5F12\u7669\u524E\u760C\u53CB\u75E7\u7619\u596B\u7070\u75A2\u75DF\u76D4\u7620\u75F0\u7646\u9DEF\u6090\u75D4\u594E\u9D5F\u75E3\u7316\u7329\u7664\u72DA\u7311\u7332\u72E0\u734C\u733E\u7327\u72D9\u72EA\u75F8\u733A\u7319\u72E6\u72FD\u7383\u766A\u75F5\u737A\u75E2\u75FF\u7300\u75BC\u72C4\u7359\u735F\u72E4\u733F\u7318\u7301\u72C5\u736F\u7362\u5945\u7326\u72CC\u7345\u7335\u730F\u7365\u72D0\u7624\u7308\u7340\u7361\u730A\u72FC\u733C\u72FB\u72C1\u72E8\u75BA\u7377\u72D8\u72D6\u72E9\u7351\u8C6C\u72EB\u7370\u72DC\u7322\u7360\u72F6\u7317\u72B0\u72F9\u72C6\u72D2\u72E3\u72DF\u7373\u7376\u737F\u736E\u72C9\u72C2\u7342\u72B4\u72CB\u7357\u72BD\u736C\u733B\u731B\u75AB\u72C3\u5CF1\u735D\u7331\u760B\u72FF\u737C\u72D1\u734A\u7665\u7653\u736A\u72F3\u736B\u731E\u72B5\u7334\u7632\u75FB\u72F4\u72D7\u7330\u72FE\u7349\u731C\u72F7\u7381\u7333\u72D4\u72AF\u7366\u735B\u7336\u7382\u735A\u7372\u737E\u8C93\u765F\u7323\u7623\u761C\u732D\u75A7\u7375\u7313\u72F8\u75FA\u72CE\u7380\u7368\u7367\u7325\u7626\u7610\u7659\u72E1\u7622\u72BA\u7369\u72FA\u731D\u7307\u7344\u737D\u735E\u7350\u734D\u72BF\u592A\u75E0\u75E1\u75A3\u96C4\u7FC3\u75DD\u597F\u7628\u7672\u75F2\u5962\u760F\u75DA\u75EF\u5954\u723B\u80B4\u75CF\u7642\u9DDE\u9E11\u723D\u5E0C\u75F7\u75CD\u761E\u7631\u7638\u592F\u75C2\u5E03\u5728\u593C\u75BF\u75CB\u75F1\u5208\u5B58\u5944\u5DE6\u7598\u596D\u7657\u75DE\u5948\u75E6\u5938\u7594\u5947\u75FE\u75C5\u75D8\u7603\u75D9\u762D\u75C7\u4E5D\u5937\u65ED\u65EE\u7613\u765A\u766C\u9CE9\u4E38\u53B9\u75DB\u5953\u75D1\u7643\u766E\u75FE\u9804\u759A\u7648\u9997\u8A04\u8653\u75FD\u596A\u596E\u9D4A\u75B9\u7621\u75BE\u75F4\u75A5\u7650\u9830\u75CA\u7609\u7652\u7599\u760A\u90DF\u593E\u75E4\u75C4\u75D7\u7595\u5E36\u7661\u75AA\u75C0\u75B6\u7608\u761B\u53F3\u8CC0\u75BB\u67B6\u9D78\u9D10\u6BE0\u6532\u525E\u54FF\u6B39\u7649\u764C\u7615\u99D5\u6567\u8888\u529B\u765C\u9D2E\u7D94\u74E0\u8037\u8105\u52A6\u59ED\u5233\u763A\u7633\u5957\u530F\u52A0\u7656\u5969\u52F0\u763C\u75F6\u7614\u763D\u75B3\u7671\u7629\u7662\u75D2\u7F8D\u7625\u761A\u7658\u759D\u5C22\u5C33\u9D6A\u5C30\u5C2A\u5C2C\u5C25\u5C37\u5C37\u7675\u7670\u75FC\u761D\u75F9\u761F\u75D0\u7630\u75B0\u75B5\u7601\u7627\u75C1\u762F\u7600\u7616\u7634\u75CE\u7660\u4E2D\u8875\u88EE\u8892\u8906\u8949\u8974\u88FC\u8910\u891F\u896E\u88C9\u5DFE\u5E3D\u5E4C\u5E0A\u5E54\u5E5C\u5E4E\u5E4D\u5E28\u5E14\u5E43\u5E29\u5E6C\u88EF\u5E15\u5E6F\u5E61\u5E06\u5E19\u5E6E\u5E34\u5E53\u5E17\u890C\u5E3E\u5E4F\u5E70\u5E69\u592E\u5E0E\u8893\u5E41\u5E4A\u8911\u5E04\u5E45\u5E68\u9101\u5E37\u5E22\u5E60\u5E58\u88EF\u5E67\u5E5D\u5E44\u5E33\u76C5\u5E59\u5E6A\u5E21\u5E6D\u5198\u5E57\u5E40\u5E5F\u5E16\u5E62\u5E5B\u912A\u88D5\u88DE\u886F\u894B\u895F\u897B\u88AB\u8882\u8918\u892C\u88F0\u8869\u8952\u8960\u88E7\u88A2\u88F7\u66F8\u665D\u88A1\u88EC\u8953\u8902\u88AA\u88BA\u896D\u8969\u756B\u8899\u8956\u88B6\u88BC\u887D\u886B\u88BE\u8937\u889B\u889F\u890A\u8963\u8879\u88E8\u892B\u868E\u8750\u875E\u874D\u876A\u876D\u8734\u874E\u8686\u86DD\u880D\u87C3\u879F\u8796\u8778\u8833\u86F6\u8729\u86C6\u876F\u8709\u8926\u883C\u8837\u8706\u8787\u86A3\u8789\u86A5\u86FB\u86A1\u869E\u8719\u86BE\u8725\u8697\u8740\u8743\u87DD\u86F8\u87B3\u87F7\u8811\u87E7\u8737\u86BA\u86D9\u87EF\u86E3\u87E2\u87DB\u87C2\u8757\u874C\u870A\u87CB\u8732\u87E0\u8702\u86DB\u8769\u86DE\u87DC\u877A\u869A\u86B8\u866E\u8674\u86B3\u86FE\u86C8\u869D\u8784\u8790\u8759\u8727\u8685\u879D\u8791\u8785\u86CC\u8694\u8731\u87CC\u873A\u8794\u870B\u8942\u86D1\u875B\u8782\u8705\u86F7\u87E1\u86C2\u8698\u8797\u8800\u872E\u880A\u87C5\u8777\u86D6\u87B0\u88DC\u877B\u87B2\u8691\u87EA\u8932\u87B9\u876B\u8728\u8819\u87BE\u8756\u873F\u86C7\u879B\u86C4\u8774\u87E6\u87DF\u889A\u86E6\u878F\u86FA\u87AE\u87F2\u8831\u8742\u87BB\u86B0\u8735\u8679\u86E8\u8815\u8762\u8761\u86BD\u8788\u86ED\u8677\u8696\u8704\u8670\u86DA\u86B5\u86C3\u8760\u8823\u869C\u86F5\u87B5\u87EB\u8752\u87D3\u875C\u87FE\u8722\u875A\u872D\u86F9\u8713\u8712\u8693\u86EB\u8751\u876E\u868B\u86B9\u873C\u87ED\u86C9\u8699\u8718\u86A7\u86AF\u8726\u870D\u8753\u86E4\u8753\u867C\u8701\u87D8\u86B1\u86DC\u8673\u8690\u8690\u872A\u868D\u8754\u870C\u86BC\u8776\u868C\u8793\u873B\u8773\u86A8\u870E\u87EC\u8766\u87E4\u8708\u8805\u8758\u883E\u882E\u866D\u86C1\u871B\u8817\u87C9\u87F3\u8687\u879E\u87F6\u86B7\u8721\u87C6\u892F\u8813\u8764\u87FB\u8723\u87D2\u87E5\u8767\u87BC\u8828\u86B6\u871E\u8816\u8802\u86D8\u8746\u8838\u86E2\u86D0\u87AC\u881B\u866F\u876C\u8798\u872C\u8835\u87E3\u86B4\u866F\u875D\u881F\u875F\u873E\u87D4\u8720\u87C8\u880B\u880C\u8809\u8779\u86D4\u87BA\u881D\u8781\u882C\u8783\u87AA\u86DF\u86C0\u86A2\u87D9\u87C0\u86AA\u868A\u8826\u86C5\u8829\u8733\u874F\u8814\u8830\u8763\u87D1\u87AD\u867B\u86BF\u87FA\u8810\u8895\u8923\u887C\u8976\u891A\u8889\u53F2\u76CE\u9D26\u88B8\u88FA\u896B\u8932\u88CC\u4E32\u8876\u66A2\u8874\u6704\u7249\u7258\u7248\u7256\u724C\u724B\u5DDD\u9806\u8938\u7247\u88F6\u5F17\u724F\u60A3\u8919\u7252\u724A\u5A41\u8896\u4E33\u88EB\u7253\u88B9\u8966\u8CB4\u8867\u8CEE\u76E1\u866B\u88F2\u5283\u8979\u88D6\u5317\u90B6\u88CB\u8914\u975E\u5255\u5146\u982B\u899C\u8925\u893E\u893C\u9B25\u8950\u8CBB\u895C\u8871\u9B29\u8941\u521C\u9B2B\u9B25\u8274\u9B2E\u894F\u9B25\u9B28\u9B27\u8907\u8872\u8897\u88B1\u8973\u887F\u8958\u8915\u895D\u88B7\u8915\u8898\u8913\u5FE0\u80CC\u886A\u8880\u8880\u88A7\u888D\u890B\u5180\u807F\u8909\u884B\u88F1\u886D\u88D0\u88CE\u88CE\u8959\u894C\u8917\u521D\u8891\u8964\u88FE\u88D9\u8936\u8951\u97ED\u8964\u897A\u8946\u897C\u8921\u896A\u895B\u513F\u6C8A\u9D06\u90A5\u80E4\u9DDC\u6C00\u888E\u8916\u6578\u88BD\u7531\u80C4\u5191\u88F8\u88CD\u88E1\u88C0\u7533\u8961\u8957\u896C\u7539\u891E\u66F3\u8085\u9DEB\u892A\u8905\u8971\u68D0\u896F\u88D7\u8933\u8F29\u595C\u871A\u9925\u60B2\u7FE1\u895A\u8935\u5A53\u88A8\u8962\u88F4\u6590\u4E00\u767E\u53AD\u6AEB\u53AC\u6229\u4E99\u7695\u78A7\u539A\u9111\u973E\u9722\u9725\u5EC1\u96F0\u971C\u9716\u9726\u8010\u972A\u9718\u9702\u9708\u974B\u9710\u971F\u972E\u9711\u9704\u9DCA\u9E0D\u9D2F\u96FD\u800F\u9724\u973A\u9713\u621B\u970B\u800E\u52F5\u96F5\u800C\u878D\u96FF\u970F\u96FB\u4E99\u9700\u74BD\u9742\u96F2\u96E9\u9707\u9727\u973F\u96FA\u9706\u90B4\u972F\u9B3A\u970D\u9743\u96F6\u9709\u6067\u6182\u96F9\u9723\u9735\u9732\u9748\u971D\u971E\u9728\u96EA\u972B\u7FEE\u9739\u9730\u9738\u9719\u96F8\u9801\u8CA2\u9B37\u800D\u96F7\u972C\u96FB\u9747\u9729\u96F1\u96EF\u9705\u9744\u9720\u970E\u973D\u5912\u897F\u9149\u4E8E\u76C2\u9DC5\u4E94\u9098\u6C5E\u4E9F\u913E\u4E0D\u723E\u752D\u76C3\u899D\u9D00\u5F6F\u98C4\u74E2\u5E73\u5940\u527D\u4E15\u9858\u9860\u6B6A\u9122\u613F\u5426\u7FF2\u5B6C\u738B\u7429\u7441\u7446\u7442\u7452\u7428\u7436\u749F\u741D\u518D\u73A5\u74A6\u73CA\u741B\u74D4\u7431\u743F\u73C7\u7457\u7408\u7464\u7424\u73CA\u73FC\u73FE\u73AC\u73F6\u73A2\u7494\u7433\u73BB\u73A6\u744B\u743A\u7475\u7463\u74AB\u7498\u7430\u73D6\u73C3\u73EA\u74D9\u7488\u73C0\u7454\u9CFF\u73D8\u740D\u7407\u74A0\u81F4\u73DE\u73D7\u73CB\u7409\u73E0\u7440\u73EE\u73E9\u747D\u73F4\u74DA\u7470\u7481\u74B5\u7389\u738A\u7405\u744A\u81F9\u7416\u746F\u7403\u73ED\u746D\u73C6\u74B7\u7471\u744F\u7462\u747C\u74B8\u742E\u7444\u742C\u745A\u742F\u73DB\u740B\u73D4\u7426\u73C8\u7394\u73E7\u74B6\u7432\u5230\u73D2\u73C5\u7392\u74C0\u980A\u7397\u73B6\u73A8\u74B1\u740A\u81F8\u7395\u73F8\u73A9\u738E\u73C2\u7422\u73A1\u7504\u746E\u74CA\u744D\u749A\u73FD\u90C5\u9104\u7396\u6B45\u7492\u73CD\u73B2\u7434\u73B3\u7472\u7400\u739D\u81F4\u73AB\u73A0\u74AF\u745C\u73E8\u745C\u7401\u73E3\u745F\u73CC\u7393\u7435\u73AD\u744E\u73B8\u73B4\u73A4\u81FB\u7467\u742B\u7404\u73F5\u7490\u5669\u74AA\u7455\u73FF\u73BF\u73E5\u741A\u73FA\u7486\u7495\u74BB\u73DD\u746A\u5F04\u7420\u7450\u73D9\u749E\u74C2\u748A\u749C\u745B\u747E\u73B5\u742A\u7479\u74C1\u73DC\u7473\u74D8\u74A5\u745E\u74D7\u7480\u740C\u74C5\u74A3\u742D\u7451\u7485\u7459\u7406\u73DA\u73BE\u74B0\u74C3\u74AD\u74DB\u74CF\u74BF\u73D3\u74A8\u7421\u7409\u73EB\u7489\u739F\u6591\u73BC\u74A1\u74A9\u7425\u73B7\u74D6\u7487\u748B\u74B2\u7423\u7483\u73B9\u7470\u74BE\u74CB\u5382\u539F\u66C6\u53A4\u6B77\u78FF\u9D09\u539C\u90AA\u96C5\u992E\u538E\u9749\u81F3\u9B42\u6649\u910F\u9712\u5396\u9746\u5E72\u53A7\u70CE\u9CF1\u9DE3\u9E89\u520A\u9807\u5E75\u90A2\u5211\u9097\u6562\u820C\u5399\u5929\u58D3\u7526\u9B58\u9768\u90E0\u995C\u5FDD\u61A8\u541E\u529F\u5B2E\u9EF6\u53B4\u4E0C\u5169\u96E8\u4E9E\u5DE5\u5DDE\u539E\u4E0F\u66F4\u4E8C\u9E97\u9805\u793A\u580A\u9D61\u9D5B\u4E91\u5394\u52C1\u4E93\u8741\u5244\u4E09\u9838\u8FB0\u4E8D\u90B3\u6B21\u653F\u60E1\u543E\u5EDA\u5143\u5EC8\u9EFF\u538A\u74E8\u5DE7\u5DF0\u8663\u4E01\u6B82\u6B8D\u928E\u70C8\u578B\u6BAA\u6BB0\u6BA6\u9D37\u6B88\u6B8A\u6B80\u6B7F\u6B99\u6BA0\u6B79\u6B98\u6B8F\u6B86\u6B96\u6BAF\u6BA5\u6B91\u6B97\u6B8E\u6BA2\u909B\u6B83\u6B94\u86E9\u5217\u8082\u9802\u6B9B\u6B8C\u6BAD\u6B7F\u9BA4\u6BA4\u6B84\u6BB2\u6BAE\u6B7B\u6050\u6B89\u6B7E\u53EF\u6B9E\u6BAB\u8DEB\u978F\u6BA3\u59F4\u6B9F\u6BA7\u88C2\u6B95\u4EC4\u8C5D\u8C64\u4E19\u8CC7\u89A1\u8C6F\u6825\u71F9\u8D17\u7CA2\u8C77\u9DE2\u9D08\u8C75\u8C5F\u8C6C\u8C76\u5392\u653B\u8C68\u87E8\u5282\u5262\u8C72\u8C5C\u8C69\u8C5C\u74F7\u5DEB\u96C1\u9908\u6063\u54A8\u8C6D\u538F\u59FF\u8C71\u8C65\u9E1D\u9148\u6B66\u77F3\u78AD\u7919\u78A3\u784D\u787C\u78A2\u7889\u97B7\u9B32\u7820\u7850\u7880\u7899\u786F\u78CE\u7803\u780F\u78F3\u78B4\u7879\u7884\u790E\u7834\u7835\u7805\u6CF5\u78C9\u78F2\u785D\u7911\u78F7\u792F\u7802\u7845\u78FD\u781D\u78D5\u7848\u7902\u78DD\u78FB\u784C\u785E\u782D\u7843\u78AB\u787E\u7904\u7929\u65AB\u7813\u77FA\u7825\u786A\u78A5\u7909\u7828\u7938\u78C8\u7891\u78C3\u7860\u782F\u78E9\u9E7C\u78E3\u78C4\u7926\u7865\u78CC\u787F\u78DA\u7917\u7887\u7897\u78BA\u7823\u78CD\u7868\u78E2\u7895\u7864\u7829\u522E\u7849\u7837\u77FC\u791D\u78A9\u792D\u7935\u790C\u7852\u7830\u7821\u77F8\u7814\u786C\u7822\u7894\u7833\u78CA\u7814\u792A\u784E\u77F9\u78ED\u7811\u785C\u78F9\u7913\u786E\u77F7\u7810\u77FD\u90DA\u9143\u784A\u780D\u6B4C\u78F4\u78D4\u54E5\u78BA\u7893\u78FC\u7901\u7831\u6554\u780E\u7896\u7862\u77FB\u781F\u7919\u7812\u7832\u780C\u789F\u7883\u78E7\u78A1\u7806\u9695\u78FE\u7939\u78AC\u7925\u7832\u791B\u7838\u78DF\u78BC\u7914\u78BE\u8C46\u788F\u7898\u7924\u791E\u7912\u7921\u78FA\u78A4\u78AA\u78CB\u78B0\u78B0\u78C1\u78E1\u7923\u78CF\u786D\u78DE\u78B3\u78D1\u78EA\u792B\u78EF\u788C\u7871\u7885\u78A8\u78E5\u7927\u782A\u78B2\u78C5\u7905\u782B\u786B\u788E\u7827\u78BB\u78A0\u782C\u789A\u78E0\u4E07\u8C55\u8C56\u9120\u6537\u5384\u539D\u5EDD\u9CFD\u5F62\u8C4D\u8C49\u8C4C\u5211\u8C47\u982D\u90A2\u90D6\u96C3\u63C5\u8C4F\u53A5\u53B2\u5140\u6701\u8836\u897E\u590F\u621B\u5961\u867A\u5213\u9811\u9B35\u8C57\u90A7\u537C\u756B\u531A\u8123\u7259\u8FB1\u65E1\u8703\u74E6\u4E92\u8985\u5507\u5DE0\u919E\u9192\u8983\u918D\u9179\u916E\u8CC8\u9766\u91C2\u915A\u6817\u9182\u914E\u918A\u7C9F\u5398\u5794\u9D9D\u9165\u916A\u91BA\u9177\u8982\u9158\u8986\u9155\u8988\u919C\u9199\u9178\u91BE\u9186\u917A\u916C\u91A3\u91A1\u918F\u9175\u9161\u9164\u9190\u9183\u91A2\u9156\u8820\u91A0\u526F\u9193\u91B9\u91BD\u9150\u916C\u7968\u91C3\u914A\u9160\u91A5\u91B0\u9169\u9191\u91B1\u9180\u91AE\u9174\u9162\u916F\u914F\u914C\u914C\u9184\u9172\u9172\u91C5\u9762\u91AA\u91A7\u914D\u918B\u91AD\u9738\u7F88\u91BC\u9163\u919B\u919D\u91B4\u91B2\u9157\u8981\u9173\u9181\u91B3\u919E\u919A\u91AF\u9189\u91B5\u915F\u9187\u91C0\u91B7\u9185\u91A8\u6B43\u4E0B\u9F90\u7109\u6B63\u5FD1\u5397\u4E10\u5F13\u5154\u514D\u8C61\u8272\u5F1D\u89DB\u5F38\u657B\u89D6\u89EB\u89E5\u89D2\u58AE\u89DF\u9DF8\u89E1\u89DD\u6C04\u89DA\u89EC\u89E9\u89F0\u5950\u89ED\u52C7\u89D4\u89E6\u5280\u89E8\u74D5\u89FC\u89D9\u89E4\u89F4\u96B3\u607F\u89F6\u89E3\u89F2\u89FE\u89E3\u5D9E\u8CA0\u5F4F\u89FF\u89FB\u89D3\u89F8\u659B\u5C0F\u8A79\u5B50\u5B5F\u9D94\u5B6B\u5B64\u5B6E\u5B7B\u5B7A\u5B72\u5B56\u5B5C\u5B62\u5B54\u5B69\u6C36\u4E1E\u8100\u70DD\u5DF9\u723E\u9BE7\u9C23\u9BFD\u9BF7\u9BE4\u9C28\u9C3B\u5F30\u9BDB\u9BA6\u9C36\u9C29\u9BB5\u9B75\u7CA5\u9BE0\u9BB9\u9C68\u9C57\u9B66\u9BEA\u9BE5\u9BAD\u9C59\u9B7C\u9B9A\u9C09\u7A4C\u9BDA\u9C0D\u9C55\u9B6C\u9BA5\u9C21\u9C75\u9BA2\u9C4E\u9BE6\u9B60\u9C24\u9B74\u9BC0\u9C6E\u9BD3\u9BE2\u9C14\u9BC6\u9BC4\u9B77\u9B90\u9C2B\u9B87\u9C44\u9BC7\u9B80\u9C2D\u9B95\u9C17\u9BAA\u9BA1\u9BE1\u9C50\u9B5F\u9B9E\u9C48\u9B7E\u9C77\u9BC1\u9C7A\u9BC3\u9B7A\u9C71\u9C56\u9B71\u9C3E\u9C4C\u9BB8\u9C4A\u9C07\u9C0E\u9BA0\u9C4D\u9C12\u9B76\u9B92\u9BF0\u9C37\u9C60\u9BBD\u9BAF\u9BF8\u9B64\u9B93\u613B\u9BA8\u9B85\u9B61\u9B88\u9B91\u9C08\u9B68\u9C06\u9BD6\u9C3F\u9C62\u9C66\u9C0B\u9C39\u9B5B\u9BEB\u9BBF\u9BB6\u9C3C\u9BDE\u9C58\u9C54\u9C33\u9B7D\u9BD5\u9BAE\u9C79\u9C54\u9C3D\u9C52\u9C74\u9C67\u9C1C\u9C73\u9BD4\u9BC9\u9B7B\u9C05\u9C25\u9C25\u9C5E\u9B82\u9C13\u9BAB\u9B67\u9B74\u9C31\u9B70\u9B9B\u9C41\u9C2C\u9C4B\u9C78\u9C1D\u9BD9\u9BE8\u9C46\u9BDC\u9C63\u9C6D\u4E11\u9832\u7586\u77DE\u67D4\u53CA\u52D9\u8671\u87CA\u77DC\u52D9\u5F24\u4E43\u9A2D\u77E0\u5F27\u5915\u5F18\u752C\u9D75\u5924\u5F37\u5296\u77DB\u591A\u9141\u4E88\u98E7\u821B\u540D\u5917\u5916\u8B3D\u9CF5\u8768\u53C8\u7780\u936A\u6958\u715E\u5825\u8FEB\u9DA9\u5EF7\u5EF6\u6223\u8765\u5EFA\u9108\u9A16\u97AA\u5A7A\u8FF4\u5F15\u5F14\u967D\u9684\u9650\u96B0\u963B\u96B1\u969B\u76C4\u9642\u9673\u6576\u9130\u9699\u9675\u9678\u96A2\u9639\u969E\u9661\u968D\u96A9\u962A\u9686\u964D\u9621\u964E\u9680\u9672\u963A\u965E\u9697\u9674\u9689\u962D\u9687\u967C\u9662\u9640\u9663\u964F\u968B\u9693\u966D\u9653\u965D\u965C\u961E\u96A4\u966B\u964C\u967E\u9651\u964B\u96AC\u962E\u963F\u9643\u9694\u9628\u9622\u9658\u9677\u964A\u9620\u9644\u9670\u9686\u966F\u9664\u9683\u96AA\u9683\u9623\u963C\u9624\u9671\u9676\u9630\u968E\u965B\u9695\u9677\u966C\u9698\u968A\u9631\u9692\u9691\u9685\u9688\u96B4\u96A1\u962C\u9632\u96A8\u96A1\u965F\u962F\u963D\u969C\u96A7\u966A\u9654\u96AE\u5F3C\u6A83\u758F\u5F4C\u8711\u5F31\u90D4\u9DB8\u6025\u5371\u5F33\u5F4A\u758F\u4E86\u5B51\u9810\u9B3B\u8C6B\u5B53\u5920\u627F\u7FD7\u90FA\u6B20\u4E45\u80E5\u9406\u5F23\u7078\u589C\u58AC\u7679\u98DB\u86CB\u7678\u767B\u767C\u5F1B\u4E2E\u6840\u87F9\u5F37\u7514\u6BDA\u5F48\u76C8\u9F10\u722D\u5C15\u5903\u5F28\u5F2D\u5F35\u5B55\u6025\u5F44\u51F3\u6224\u5F49\u9127\u4E59\u7722\u5F22\u9D1B\u52C9\u9820\u6028\u99CC\u59B4\u9B5A\u9B6F\u87B4\u5F4B\u5F43\u534D\u71C4\u6B3F\u9F9C\u758B\u5F36\u5F26\u4EBA\u5021\u590D\u528A\u4F46\u504D\u5011\u50E9\u9136\u5031\u5048\u509D\u5124\u4F77\u5111\u50C8\u5167\u4EF4\u4FF7\u5017\u50FE\u5129\u5074\u5041\u501C\u9E19\u9FA2\u507D\u4F14\u4FF1\u4F97\u4FD8\u8089\u50BA\u509C\u618A\u9FA4\u4F63\u501C\u4FD4\u4FC0\u5092\u4EC8\u4F7E\u4F00\u4FD7\u4FBB\u4EFD\u50E7\u4F11\u93A5\u502F\u50F8\u510A\u6558\u7172\u70CB\u5821\u9D42\u4ED8\u4F53\u5049\u96D3\u6558\u6039\u7CF4\u6558\u659C\u6C46\u4F19\u5C12\u4FCF\u511F\u513B\u5018\u5105\u50EF\u5013\u50D7\u9DE6\u9DE1\u5057\u5281\u7512\u9126\u60A8\u4F34\u5026\u4ED5\u96B9\u8CC3\u5030\u96C6\u6820\u4F8D\u96D9\u96BB\u7126\u4F73\u50E5\u9DB4\u9D40\u72A8\u4F49\u96BC\u96CB\u5249\u5114\u96D4\u96E5\u6041\u552E\u4F76\u5113\u50D6\u50B2\u5016\u5125\u8B8E\u8B8E\u5165\u4F2F\u505F\u4F90\u4F9C\u50BB\u5062\u4FEC\u4FD0\u50C1\u502D\u50E0\u4F6B\u4F5F\u50FD\u4EFB\u4F81\u4EDF\u4F8F\u5045\u5015\u4F78\u505B\u50D1\u504A\u4F12\u4EC9\u4F69\u5051\u507A\u506B\u50B1\u4F4E\u4EF6\u4FC4\u4F5A\u504F\u50F1\u510C\u5139\u5080\u4FC2\u4EF0\u4FFE\u50AF\u502A\u5082\u4F10\u9933\u991B\u9932\u5009\u98DF\u4FCD\u9945\u5085\u992B\u9907\u9912\u4FCA\u9929\u9917\u991F\u9953\u9924\u9950\u9952\u9941\u994E\u9D12\u992D\u9909\u9927\u98EF\u50B6\u98EA\u98F9\u993E\u9902\u98EB\u98E2\u9930\u98E5\u4F82\u4F94\u9913\u9961\u993D\u993F\u4FF4\u993A\u9915\u991E\u9914\u98F4\u9911\u4FC5\u992C\u9928\u9959\u4F0F\u507D\u991A\u4F18\u50AD\u994B\u8755\u97F1\u9818\u992A\u9902\u98E3\u4F7D\u9916\u74F4\u4ECA\u8CAA\u9921\u4EE4\u98F2\u5FF5\u542B\u995E\u76E6\u887E\u9153\u4FEF\u4FDF\u98ED\u98FE\u9918\u993C\u9931\u4EE3\u6024\u5126\u98F6\u98FD\u98E9\u4F41\u994C\u990C\u7FCE\u98FC\u9947\u9943\u995B\u9900\u9949\u9948\u9905\u59C7\u9951\u992F\u9935\u9903\u9956\u995F\u9958\u4EC0\u5348\u4F02\u508E\u503C\u5025\u509B\u4F0E\u4F98\u50B3\u4ED7\u4F6C\u4F7F\u5033\u5022\u5110\u5027\u554E\u4F47\u50A2\u5007\u4F57\u511C\u4F30\u505A\u500C\u50E8\u50FF\u7F36\u4F92\u77E2\u4F91\u50DA\u77F0\u7102\u702A\u9D19\u77EE\u4FC7\u77E8\u77EF\u4FD9\u50B8\u4F48\u4FFA\u4F50\u5037\u501A\u77ED\u4F89\u4EC7\u4F87\u77E7\u96C9\u4FE0\u77EC\u60A0\u77E5\u4F51\u8DFE\u4EC2\u4F3D\u77E9\u77F1\u7E41\u77F2\u4EF2\u4F52\u4ECB\u4F5B\u50C2\u50D3\u4F7B\u5118\u4FF3\u5019\u8129\u689D\u7D5B\u9BC8\u5135\u4FEE\u9797\u6538\u500F\u7FDB\u505D\u4F38\u4FDC\u4E18\u4EDD\u4EDC\u4F70\u5112\u512A\u4F95\u4FDE\u6108\u4F96\u5175\u4F59\u4F0D\u6086\u5CF9\u5D5E\u756C\u4F13\u4F3B\u4F3E\u4FD6\u5168\u5012\u4E52\u512E\u4E53\u4F84\u820D\u5006\u4FBF\u4EC1\u4F58\u4F1D\u4EE8\u4F7D\u5137\u4FC9\u4F5E\u4FB2\u4EC3\u6C14\u90B1\u4F8B\u6B59\u4F55\u5035\u5408\u9FA0\u547D\u50C9\u506A\u5378\u5C54\u4F80\u5CB3\u50ED\u4F22\u4FD3\u4F64\u6703\u50F9\u50F3\u50C4\u506D\u50F5\u50CA\u5060\u50BF\u4E5E\u6C33\u50CF\u4FDB\u5069\u89A6\u510B\u6C1B\u4ED4\u4F60\u6C23\u6C2E\u9CF9\u50EA\u4F0B\u6C21\u6BF9\u4ECD\u4FD1\u4F88\u6C2A\u6C28\u4FB9\u9107\u5065\u6C15\u4F04\u6C18\u6C1A\u6C1F\u5209\u6C20\u6C25\u4FAF\u6C2C\u4F79\u6C2B\u6C16\u9103\u6B48\u6C1D\u96C2\u5FE5\u5091\u6C30\u5133\u6C27\u6C19\u6C2F\u6C24\u6C33\u6C26\u5F9E\u50B7\u5095\u4FCE\u808F\u5750\u5020\u590E\u50EC\u50CB\u4F36\u4EF1\u5096\u4EF5\u4EF7\u528D\u5108\u502B\u9869\u4F7A\u5077\u5109\u4F6E\u4EE1\u6B5B\u773E\u4FB3\u5098\u6582\u4F5C\u4F61\u4FAE\u5316\u4F08\u4F9A\u8CA8\u8CB8\u4ED6\u67CB\u4F56\u726E\u5117\u50AF\u50BE\u655C\u4EF3\u5055\u4F5D\u4F33\u505E\u5CB1\u4F05\u9EDB\u888B\u5E74\u5070\u5046\u50A3\u4FF8\u5029\u50B5\u5083\u4FF5\u4F15\u50E3\u667A\u4FCB\u76D2\u4F3F\u4FDD\u6A16\u9D3F\u9DAC\u9D68\u4FB6\u4F83\u6227\u8216\u9928\u5275\u981C\u9837\u8212\u90C3\u6B31\u62FF\u50E4\u513C\u5047\u506E\u7FD5\u5F07\u50CE\u4FC1\u7563\u50F6\u9F95\u6546\u4FC3\u4E4D\u5043\u77F1\u4EDE\u4F74\u5028\u4F0A\u4FB5\u5053\u50C7\u4F3A\u5000\u50DD\u4F2C\u600E\u508C\u50FB\u50B4\u4F62\u4FB7\u504B\u5014\u501F\u500E\u4F9B\u50D5\u50DB\u5064\u6A46\u7121\u5100\u5099\u5130\u504C\u5040\u50C5\u501B\u5061\u821E\u513A\u4F6F\u509E\u5106\u5087\u4F75\u508B\u50AE\u50D4\u511A\u5102\u5094\u4ED9\u4EDA\u5C73\u7F48\u50B0\u50BB\u7F3A\u7F3D\u7F39\u7F3F\u7F38\u5073\u7F48\u50AC\u4FBA\u7F50\u7F3E\u7F3E\u7F45\u7F4F\u89A6\u4F3C\u4F9E\u5120\u4F43\u4FDA\u500B\u5076\u5138\u5107\u504E\u5072\u4F6A\u513D\u5121\u6BCF\u97FD\u4EC6\u502C\u5075\u5131\u508D\u4F7C\u512D\u4FF6\u50E6\u4F4F\u4F09\u4EFF\u4F9D\u50C6\u509A\u4F01\u4EE9\u4F4C\u4FE1\u4F67\u5005\u654F\u5068\u5122\u4F54\u5132\u501E\u505C\u5134\u506F\u5023\u4F4D\u5063\u50EE\u50BD\u5104\u500D\u79BD\u4F2D\u4F85\u5103\u5115\u6BD3\u5FC3\u65EC\u65E8\u614D\u9D9B\u60FA\u6168\u52D3\u601B\u6113\u608D\u60FF\u61AA\u61AB\u90C7\u60D5\u60C3\u6112\u61EA\u6068\u6162\u61AC\u614F\u6132\u60FB\u58AF\u60C6\u6146\u60F2\u601A\u610B\u606B\u612E\u60D8\u6204\u61FC\u6140\u60CD\u5FEA\u52E9\u608C\u6085\u618E\u4E5F\u60CF\u9D74\u5FD6\u5FEB\u609A\u61F6\u7A4E\u60D9\u602A\u6145\u6F41\u6084\u6203\u60DD\u530A\u6190\u60D4\u7A4E\u71B2\u9848\u604D\u6011\u60D3\u6043\u61A2\u602F\u61E4\u6044\u6189\u60BB\u5FC5\u6015\u66F6\u60F6\u61CA\u752E\u6066\u6064\u8995\u61F0\u61A1\u60B8\u6100\u606A\u608E\u615F\u52FF\u5311\u5FCF\u606C\u618D\u60BF\u61EB\u520E\u5FFB\u90B2\u5FFD\u60DB\u6027\u6022\u60FC\u61BF\u60B7\u6127\u5FEF\u8883\u52FE\u52FA\u60A2\u609B\u6035\u6158\u530D\u6035\u6175\u6177\u52FB\u6021\u61BE\u6088\u61ED\u6034\u60E6\u614E\u6096\u61E5\u60BE\u5FEE\u9D07\u6118\u6171\u6193\u615A\u6045\u60BD\u60B0\u6103\u60CB\u61E7\u6019\u60BA\u99C2\u61A4\u5FD5\u61AD\u6062\u5306\u6095\u6161\u6016\u8084\u530E\u60F0\u605E\u52FC\u7591\u5306\u6136\u5354\u5FE1\u600F\u5FF1\u602B\u617A\u6192\u604C\u60B1\u61FB\u601E\u61E8\u6052\u61E6\u9803\u6129\u61EE\u6046\u6053\u6000\u6026\u5309\u600C\u606C\u52FB\u609F\u5FE8\u6032\u5310\u610A\u61AF\u6144\u619F\u6153\u619B\u6110\u6014\u4E5C\u6097\u61C8\u61BA\u5FF8\u61B0\u5FE3\u6080\u6040\u5FFA\u60E4\u610E\u6058\u60DF\u612F\u6194\u601C\u61FA\u5FF4\u6134\u5FE4\u530B\u60C0\u6087\u606E\u6109\u61B8\u6070\u5FD4\u89FA\u613E\u600D\u61AE\u6094\u6BD4\u6042\u6049\u60F8\u7C8A\u5752\u602D\u7686\u60DA\u6BDE\u60E2\u6A64\u7E60\u6BD6\u6010\u6009\u60F5\u5FF3\u605F\u60C5\u612B\u53E5\u6092\u6081\u9D1D\u609C\u65AA\u6033\u52AC\u5920\u6B28\u96CA\u61C6\u619A\u6115\u5305\u600B\u61B4\u611D\u6173\u5207\u5FC9\u600A\u61FE\u611C\u6174\u6047\u6180\u61B3\u60B5\u6029\u616A\u4E16\u60DC\u6154\u61DE\u8CB0\u61C2\u6172\u6105\u616C\u6116\u5312\u61E9\u61FD\u6072\u6152\u61F1\u61F5\u614A\u614C\u5C6F\u60FE\u76BA\u70B0\u9DB5\u5308\u5FF7\u5228\u60F4\u9813\u6137\u9112\u96DB\u615B\u82BB\u6013\u602E\u60F1\u7538\u602C\u60C8\u6083\u609D\u6156\u6163\u61CC\u6123\u61C1\u6104\u614D\u605B\u60BC\u6054\u61B1\u6165\u8A07\u60B4\u61C5\u6017\u60C7\u60CA\u61F9\u6114\u61A7\u615E\u61B6\u5FD9\u6149\u61CD\u61F7\u61E0\u5FED\u624B\u6287\u6435\u634F\u63E4\u6461\u8822\u64D4\u63DA\u634D\u63D0\u636B\u648A\u648B\u64F1\u6514\u60F7\u638D\u63ED\u64AE\u6428\u628A\u62EB\u6351\u6288\u63A4\u6430\u6388\u975C\u975A\u63A2\u6516\u63A1\u634B\u9D84\u649D\u642F\u63EE\u975B\u649A\u62AF\u63F4\u630F\u9758\u634A\u90EC\u6416\u6399\u652B\u6338\u633C\u6252\u63B0\u52E3\u64B3\u6329\u626E\u8012\u8019\u62FA\u8021\u8016\u62AB\u8017\u801B\u62B9\u6289\u801E\u802C\u981B\u8030\u8018\u8028\u8014\u801C\u801F\u8024\u8015\u8029\u63C0\u8026\u802A\u6421\u6387\u6260\u6414\u634E\u6529\u6490\u6487\u6490\u64CB\u639E\u6488\u6284\u62CC\u6372\u62A9\u6301\u6302\u6493\u639B\u62BE\u6415\u6347\u64E3\u62EE\u64F7\u62AC\u62CD\u63D8\u64F3\u6417\u6525\u64D9\u652A\u6814\u63EA\u637C\u64AD\u6273\u6D2F\u6340\u630C\u6341\u6300\u62B8\u6266\u63F0\u6376\u62EC\u63D7\u63D2\u5951\u6277\u649F\u63AD\u86EA\u6380\u6293\u6298\u62C6\u89E2\u6295\u63DD\u6450\u6498\u6258\u605D\u62B5\u6308\u62B6\u6440\u63AE\u63D9\u64BD\u6369\u6427\u6522\u64E4\u64E8\u64E4\u64AC\u7D5C\u6291\u627A\u636D\u6460\u641C\u634F\u634F\u639C\u642C\u9F67\u640B\u627E\u640F\u6358\u6520\u6520\u6475\u6423\u6281\u647B\u6355\u6344\u62D4\u649D\u62D4\u6270\u642A\u6328\u6517\u62ED\u62AC\u639D\u64BC\u62DA\u64F4\u646D\u645D\u6382\u4E30\u6437\u632C\u64E6\u63C7\u652E\u63A7\u6316\u643E\u651B\u6280\u6313\u62AD\u6476\u64A0\u641F\u6472\u6259\u62F7\u6377\u64EF\u63CE\u639F\u7809\u6356\u90A6\u913B\u6365\u644D\u6418\u64F0\u6507\u6433\u5F57\u6167\u6513\u6510\u6309\u6359\u6625\u644B\u64A9\u6CF0\u62FB\u79E6\u594F\u8202\u64A6\u62AA\u62F5\u63A9\u637A\u638E\u630E\u62CB\u633E\u5949\u6250\u641A\u6466\u62F9\u62CB\u6662\u62B0\u628C\u92B4\u6378\u710E\u8707\u62C2\u645F\u648C\u6311\u7869\u6392\u608A\u63F9\u54F2\u8E05\u64FB\u62BD\u62BB\u62FD\u88DA\u8A93\u625B\u64EB\u9752\u64E9\u6443\u64FE\u6509\u6474\u8CAC\u64C2\u625C\u6294\u62A8\u6371\u636F\u6422\u6303\u625E\u6496\u62EC\u63D2\u632D\u6397\u628E\u6526\u6342\u628F\u632F\u6253\u62D3\u6439\u63CA\u627C\u6485\u6264\u8868\u7D20\u6333\u642E\u647D\u64A2\u7E9B\u6BD2\u633D\u6354\u63DB\u64D4\u640E\u62EF\u626D\u63C9\u6271\u6254\u6390\u6345\u6292\u62F8\u633A\u633B\u63F5\u64B1\u6426\u627B\u63DF\u64A5\u63C6\u649C\u6519\u64FC\u592B\u66FF\u6465\u6409\u898F\u62CA\u63A8\u9CFA\u62F0\u62AE\u62CE\u6515\u6272\u637B\u6436\u8F26\u6274\u6384\u6348\u62F4\u63C4\u64BF\u62FE\u6368\u6262\u909E\u632B\u62D6\u643F\u63DC\u64AB\u6334\u647F\u64D2\u6307\u6261\u63AC\u625A\u64EC\u63EF\u638F\u6279\u63E9\u62D8\u62B1\u62B4\u63F2\u627D\u640A\u63C8\u63F3\u63CD\u6367\u6385\u6276\u6506\u646B\u63B1\u6265\u6263\u6339\u6350\u640D\u62D0\u64CD\u64A3\u62D0\u63D6\u634C\u64B0\u62BF\u6349\u63E0\u6468\u62DB\u6390\u6315\u63AB\u651D\u63F6\u636E\u6343\u630B\u647A\u6383\u63E1\u64E2\u644E\u648F\u6381\u62B3\u632A\u64D7\u6473\u62D2\u6336\u6452\u640C\u6398\u652C\u6452\u63AA\u6478\u64D6\u6375\u6503\u6492\u63C3\u62F1\u6495\u64B2\u6424\u63C2\u64F2\u6497\u62D1\u6391\u63D5\u643D\u64ED\u6524\u642D\u6501\u64DB\u6413\u64CF\u62FC\u6406\u63BD\u6420\u63CF\u6499\u64C3\u641B\u624E\u69FC\u63E3\u651C\u6467\u62D9\u5AE2\u7D2E\u64FD\u62D7\u63BE\u652D\u6477\u62F6\u64F8\u6346\u6370\u635A\u6482\u6451\u645C\u6441\u62BC\u64C9\u64C7\u64FA\u64D0\u63CB\u6435\u63CC\u645E\u650C\u62C7\u6183\u6251\u6389\u63E5\u64BE\u6521\u64A4\u650F\u6412\u6458\u630D\u62C4\u64BB\u6453\u6297\u6425\u6314\u6454\u6296\u62FC\u6459\u6286\u6357\u626F\u63AF\u650D\u637D\u6396\u64DA\u6504\u64C4\u650E\u62C8\u641E\u63A0\u63E8\u6518\u63D3\u62C9\u649E\u638A\u646C\u63A5\u645B\u64C1\u6410\u64C5\u64E0\u6283\u64FF\u53E3\u5531\u5527\u547E\u54FB\u56AA\u559D\u562C\u5697\u5427\u9091\u54CF\u656F\u8099\u566F\u558E\u56B6\u554B\u54F7\u5541\u9D51\u5480\u54C3\u55C2\u55E3\u54E1\u5504\u54F8\u56BC\u53EA\u53ED\u55E1\u55F2\u52DB\u9116\u5429\u564C\u5446\u55B3\u5664\u6C09\u540B\u5437\u5587\u528B\u55FD\u5460\u55A1\u9135\u553B\u5575\u55D3\u555C\u5526\u55E8\u5419\u54E8\u5690\u55E9\u5679\u54AA\u5556\u562E\u5435\u5410\u5465\u564E\u5687\u54C7\u5635\u9DD5\u547F\u55D1\u56BD\u54E7\u90E2\u54AD\u563B\u55F7\u5548\u5517\u5604\u9CF4\u55A4\u55E5\u5662\u97FF\u54B1\u557E\u550E\u54AF\u549A\u547C\u5448\u54E0\u5406\u54AE\u553E\u54B6\u55A2\u563A\u542C\u566C\u5592\u5412\u5467\u543D\u54E6\u5442\u55DA\u566D\u5533\u544F\u5144\u56CB\u55C5\u5471\u5564\u55D6\u5532\u5506\u561B\u5601\u54DE\u558A\u542E\u5577\u54FA\u561B\u5420\u5645\u8A60\u96D6\u5509\u548D\u569D\u55A5\u54E4\u561F\u55D4\u54F1\u55E6\u5693\u5583\u568F\u56D4\u567E\u5473\u5431\u9DE4\u5412\u5580\u6230\u6222\u5632\u56C0\u54EE\u54BE\u5551\u55A7\u8FB4\u5576\u9132\u561C\u55DC\u5680\u5627\u55D0\u5495\u56C5\u5674\u668B\u776F\u5639\u5430\u5454\u550F\u5498\u5535\u54A6\u550A\u610D\u53E6\u53FB\u55CB\u5496\u540A\u5488\u560D\u5633\u54B7\u568D\u5561\u547B\u562F\u54BA\u8E3C\u8E36\u8E9D\u8E22\u8E4B\u8DC1\u8DDF\u5685\u8DDA\u55CA\u8E29\u5698\u8E48\u8DD9\u8DDA\u8EA9\u8EA3\u8E4A\u8DB4\u54C2\u5512\u8E6D\u5401\u8E45\u8DDB\u8DB9\u8E0F\u5425\u8E03\u8E5A\u8E50\u8E78\u8E9E\u546F\u5478\u8DD8\u8E21\u5448\u8E1C\u8E1B\u8DF1\u8DEC\u5540\u8E7A\u8E8A\u54E2\u8DFF\u8E3F\u8E12\u8E6F\u8DEF\u8DE3\u8E53\u8DE6\u8E35\u8E7B\u8E3D\u8E93\u56A6\u65B2\u8DC5\u8DFA\u8E64\u8E5D\u8DCC\u8E41\u8E88\u8EA6\u8E09\u8E06\u54A5\u8E95\u8E10\u8DCB\u8DC6\u8E31\u8E60\u8E94\u8E57\u8E2E\u8E4E\u8EA5\u8DC2\u5649\u8E0D\u8E15\u8E64\u8E20\u8E5C\u8DCE\u8DCD\u8E26\u8DE8\u8DE0\u8E5B\u8DCF\u5562\u54FD\u555E\u8E6A\u8DF3\u8DE9\u8DF4\u8DB6\u8E8E\u8E95\u8DEE\u8DBC\u5641\u8DD6\u5514\u8E3E\u8DBC\u8E76\u53EE\u8E34\u8E42\u8DBF\u8E0A\u8DE2\u8DEA\u54A7\u8E73\u8E6C\u5475\u8DFA\u8DD7\u8E13\u8DC8\u8E17\u8E4C\u8E1F\u8E1A\u8DE7\u8E30\u8DF2\u8E30\u8DB7\u8E8C\u8E07\u8E18\u8DB5\u8DB5\u8E5E\u8DD1\u8DC7\u8E40\u8E33\u8E56\u8E5F\u8DBA\u55DD\u8E81\u8E00\u8E19\u8EA1\u8E1E\u8E02\u8E8D\u5544\u8DDC\u8DDD\u8DFC\u8E4D\u5443\u8DFD\u8E16\u8EAA\u8EA8\u8E7C\u8E87\u8E91\u8E63\u8E11\u8E38\u5658\u8EA4\u8E49\u8DF0\u8E2B\u8E67\u8E72\u5646\u8E66\u55C4\u560E\u8E39\u5440\u55D5\u8E92\u8E96\u8E61\u8E90\u8E1D\u560C\u55B1\u563E\u5595\u8E85\u8E55\u5593\u8E14\u8E44\u8E98\u8E62\u8DE4\u5615\u8E27\u8E74\u8DD3\u8E82\u8E65\u8DE1\u8E04\u8DBE\u8DD0\u8E9A\u8E24\u8E86\u8DD5\u8E9F\u8E23\u8E25\u8E8B\u5503\u561D\u559A\u5407\u543C\u541C\u564A\u5438\u5557\u54C6\u550C\u554A\u5439\u56B5\u5695\u5436\u54BB\u5490\u552F\u55FF\u5464\u541F\u5538\u55C6\u5505\u5418\u5424\u5672\u550B\u5563\u55BB\u565E\u54C8\u5565\u55BB\u5403\u5589\u5511\u542A\u54D6\u557D\u548B\u54BF\u5638\u5659\u53F1\u54B0\u5487\u543B\u5441\u5221\u5441\u6543\u5555\u5588\u5474\u5486\u558B\u5428\u5678\u54C5\u556A\u55AB\u54F3\u56D3\u5612\u552A\u5616\u55C9\u5491\u5566\u5508\u659D\u55A3\u9DFA\u5492\u5492\u54ED\u7378\u5668\u558C\u56C2\u56B4\u54A2\u547A\u90D8\u54C1\u566A\u55BF\u563D\u789E\u55A6\u5D52\u569A\u5640\u5602\u5461\u55AE\u9F09\u54EB\u5530\u56D1\u53E8\u9D9A\u9D1E\u5682\u54A0\u54A1\u56C1\u53E9\u5482\u5225\u53FC\u984E\u551A\u5594\u5681\u5610\u565A\u567F\u5682\u9102\u544E\u5462\u55CE\u54EA\u5614\u5552\u865F\u865F\u5536\u55FC\u5676\u54C4\u5636\u5657\u55CC\u56C8\u5534\u54CE\u558F\u56A5\u5606\u5481\u552D\u5629\u557F\u56CC\u55CF\u5684\u55D2\u54A9\u55DF\u56BE\u55CD\u55B5\u5608\u5642\u56C6\u5665\u55DB\u5686\u5DF3\u5598\u55E4\u9133\u55FA\u9955\u5DFD\u5484\u5476\u55B2\u5406\u5630\u5466\u53EB\u5433\u5599\u6C11\u55C8\u559F\u546C\u54E9\u563F\u569C\u5613\u54BD\u55EF\u5477\u5581\u562A\u56C9\u5663\u566E\u5582\u9119\u55E2\u55F6\u5463\u9EFD\u5545\u5677\u557C\u56A8\u55D9\u5600\u54AC\u56C3\u56AB\u5648\u5660\u56AC\u55AD\u542D\u5537\u55F9\u5445\u55AD\u5543\u5666\u5472\u5501\u5699\u8DB3\u5550\u5634\u558D\u5673\u5653\u552C\u5671\u56A7\u552C\u546B\u55C3\u554D\u54FC\u568E\u55A8\u56B7\u55FE\u5539\u5591\u566B\u553C\u5670\u54B3\u5683\u568C\u5C38\u9DF5\u98C1\u7FEB\u533D\u5C6D\u6722\u5237\u5337\u5339\u9D04\u6BBF\u5C64\u5C3F\u814E\u81C0\u8CE2\u8D00\u92FB\u68F8\u7123\u5805\u58C2\u9DD6\u805A\u7280\u8738\u91AB\u747F\u6BC9\u787B\u8C4E\u532F\u805A\u805A\u6394\u7FF3\u5A36\u5ADB\u5A5C\u7DCA\u7E44\u9EF3\u5C6C\u99B9\u9A34\u99FB\u9A20\u9A09\u9A14\u5C51\u9A27\u9A06\u99D4\u99E7\u99C9\u9A31\u99FE\u9A53\u5C4E\u5C09\u99C3\u99F7\u9A0B\u99AD\u9A37\u9A4E\u9A4D\u9A1C\u9A2C\u99F1\u99EA\u9A2E\u9A55\u98BF\u99B2\u9A19\u9A38\u9A29\u9A44\u9A2A\u99FA\u99FF\u99BB\u9A42\u99E5\u9A03\u99D8\u99F4\u99F9\u9A56\u9A5E\u99DD\u99B1\u99C1\u9A0E\u99BD\u99DB\u99B4\u99E3\u9A11\u9A65\u99CE\u9A01\u9A4C\u9A66\u99CD\u99D3\u9A35\u99E4\u99AF\u9A6A\u9A43\u9A54\u9A15\u9A48\u9A25\u99BA\u9A1D\u9A24\u9A1B\u99D9\u9A05\u99D7\u99D6\u99C7\u99FC\u99E9\u9A57\u9A07\u99B3\u99DC\u99B0\u9A0A\u99D2\u9A36\u9A1E\u99FD\u9A52\u9A22\u9A5F\u9A6B\u99CB\u99EC\u9A3D\u99F8\u9A4F\u9A45\u99CF\u99F6\u99B5\u9A32\u9A1A\u9A67\u9A60\u9A39\u9A0F\u9A4A\u9A69\u99E2\u9A23\u9A68\u9A04\u99DF\u9A0D\u99F0\u9A5B\u9A46\u9A3E\u99EE\u9A50\u99D0\u8927\u9A49\u9A62\u9A64\u9A3F\u9A02\u99ED\u9A59\u9E10\u6233\u807D\u52BB\u526D\u5200\u9CF2\u5154\u9B04\u9B18\u9B05\u5334\u8CA0\u9B19\u9B0E\u9B06\u9AF2\u760C\u9AFE\u9B08\u9AEF\u9AFB\u9DDA\u9CED\u9B01\u9AFC\u9B1A\u9AFA\u9AE1\u9AE6\u5203\u622E\u9B16\u9AEE\u9B12\u9B22\u9B03\u9B10\u9B0D\u9AEE\u9B0C\u9AE7\u5F7F\u985F\u9AEC\u5320\u9AE1\u9AF3\u911D\u5C69\u9AF9\u5C67\u5C65\u5C50\u96E1\u9B20\u5C63\u9AFD\u5C5C\u5C68\u9AF1\u9B0A\u5C3E\u53EC\u533E\u9AEB\u9AF6\u9B15\u9B0B\u9B17\u9AF7\u9B1E\u9B11\u9B23\u9B1F\u9AE3\u9AED\u9B24\u76E3\u71A8\u9ADF\u957A\u65B8\u729A\u957B\u957D\u8086\u9129\u5FCD\u6170\u957C\u893D\u8033\u81C2\u5C44\u806C\u6A97\u53D6\u90F0\u803F\u7CEA\u58C1\u8043\u8050\u9DFF\u804A\u8052\u6BE6\u8070\u805D\u805C\u532D\u8079\u5C60\u5C6A\u803E\u5E66\u803D\u8075\u5235\u8058\u9873\u804F\u74A7\u8035\u7513\u8047\u8078\u8036\u8067\u8046\u8039\u6065\u61B5\u64D8\u5C45\u9F0A\u8E84\u5288\u8051\u8076\u8034\u5B16\u7E74\u8048\u806F\u895E\u8077\u6065\u8B6C\u8064\u5C39\u5C3B\u541B\u531D\u5C62\u9824\u5331\u532A\u5C5D\u81E5\u81E8\u8CFE\u81E3\u81E6\u81E5\u5201\u7FE8\u7FEC\u5E1A\u76E3\u7FC2\u7FCD\u5321\u7FD2\u7FF5\u7FD0\u6BE3\u5C4B\u7FC7\u7FDC\u7FC0\u7FBE\u9828\u5C0B\u5C4D\u7FDF\u7FCF\u7FED\u7FD1\u53F8\u7FBD\u7FBF\u7FEA\u9577\u7FFC\u7FF4\u7FE0\u7FEF\u7FDE\u7FCC\u7FCB\u7FE3\u5B71\u5C59\u5C3A\u533C\u9139\u54AB\u5C3C\u531C\u9D4B\u5322\u5C41\u90A3\u99AC\u53F5\u76EC\u8997\u7104\u9DD7\u9D8B\u9D58\u8056\u6BC6\u52AD\u5C4C\u9835\u750C\u90E1\u90B5\u6B50\u615D\u5330\u5340\u5372\u7FA4\u657A\u8F9F\u5DE8\u71DB\u81E9\u87B6\u5C40\u51F9\u5155\u533F\u7FBC\u5C4F\u5C55\u5DF1\u5DF2\u7199\u5C46\u9D8C\u5C58\u9094\u6539\u5FCC\u5F02\u5C48\u5A90\u5980\u9DA0\u90FE\u5C47\u9E7D\u89BD\u9452\u5323\u531F\u5C4F\u5C56\u5EFF\u6614\u83D6\u840C\u843A\u76B5\u8494\u9D72\u65AE\u8507\u8349\u83AB\u66AE\u5E55\u9A40\u5893\u6155\u6479\u52DF\u5252\u83DB\u8551\u85FA\u8544\u862D\u8443\u83CE\u845B\u855E\u82AD\u831B\u8513\u84C2\u8409\u84C7\u8586\u8563\u8435\u858D\u89AF\u5178\u8434\u9EFA\u8621\u83DC\u69CA\u85E4\u5851\u848D\u85B6\u85D0\u9EFC\u9EFB\u8477\u52F1\u7E6D\u524D\u84AF\u82F4\u985C\u9862\u8432\u8499\u833C\u8387\u848F\u83A9\u714E\u526A\u84AC\u7FE6\u8521\u6563\u8444\u612C\u844B\u83D4\u83F5\u82DC\u851D\u85C8\u85A1\u841B\u83A7\u837D\u65A0\u5171\u83F3\u666E\u671F\u76CA\u8146\u9EF9\u57FA\u9DBC\u9DEC\u5914\u65AF\u84CA\u8F02\u86EC\u7881\u6B3A\u6B49\u606D\u60CE\u62F2\u5DF7\u838C\u68FB\u82AC\u8450\u5DF7\u696D\u53E2\u7DA6\u914B\u9EC8\u65A2\u8AC5\u8326\u8540\u84DB\u83BF\u8459\u83D8\u83FB\u9DCB\u83E5\u8309\u82B5\u85FE\u850C\u82EF\u8466\u9134\u840A\u8395\u85F2\u83C4\u8430\u8569\u8580\u83F9\u947F\u83AF\u83E0\u838E\u8506\u843D\u843F\u848E\u85E9\u84B2\u8584\u8497\u8390\u8333\u85B8\u840D\u85EB\u83CF\u8388\u84A4\u8643\u854D\u849E\u85FB\u8556\u83EC\u83C3\u8303\u84F1\u8545\u8580\u8583\u850B\u849E\u84C5\u832B\u82C2\u850A\u83A6\u853D\u8437\u83FC\u85C0\u8631\u864C\u85A0\u832A\u9140\u83E4\u828F\u82D2\u84CB\u89C0\u83F1\u5C0D\u7FA8\u7F94\u7FB9\u8325\u8451\u84FA\u8558\u9E1B\u7FB2\u98CC\u7FA9\u7F8C\u7207\u85DD\u7FA1\u7F95\u84CB\u8554\u84FB\u7F8E\u52F8\u7F9B\u9874\u85B5\u9144\u6B61\u7F91\u83B0\u81E1\u8594\u6059\u6201\u837A\u85B9\u851C\u85A3\u5584\u59DC\u85DA\u863E\u8526\u8624\u845F\u83C2\u8469\u864B\u8581\u9996\u85F0\u842B\u8571\u8590\u8429\u855B\u83DE\u84A9\u8389\u83A0\u840E\u85D2\u8543\u8316\u82F3\u85B0\u9D9C\u8566\u853E\u85DC\u8306\u828A\u8331\u846E\u8463\u83D9\u82BA\u854E\u83FE\u842D\u860C\u862C\u82B9\u8329\u85DC\u829F\u8283\u8567\u8587\u85E2\u84F9\u8347\u8605\u84EF\u84D7\u84F0\u84CF\u844E\u83AA\u82F5\u82BC\u859B\u8439\u83FA\u8491\u8582\u8530\u8490\u84A0\u8636\u8406\u8525\u84D6\u85C7\u856E\u8438\u84B0\u83A8\u84AA\u837E\u85E6\u8611\u863C\u9EBB\u85E6\u8611\u863C\u8302\u9DF7\u8546\u83E7\u8474\u84A7\u837F\u8473\u8518\u8319\u8386\u9EBB\u838D\u848D\u8307\u83BD\u83EE\u84CE\u8328\u85CF\u829D\u858B\u61DF\u8285\u862A\u85E8\u82D4\u84C6\u8595\u8517\u85A6\u850D\u5345\u977C\u97AE\u97A8\u9776\u978E\u97C5\u82BE\u8378\u8433\u977B\u8413\u8456\u85ED\u84C9\u9781\u977A\u8467\u82B0\u979C\u863B\u9798\u979D\u977D\u978B\u978A\u97C7\u9DE8\u9782\u97A6\u9773\u979E\u84F4\u8559\u979A\u84D2\u852A\u978D\u8457\u8356\u52D2\u9785\u97BB\u8410\u840B\u8529\u853B\u976C\u8431\u976A\u82E7\u8423\u83EA\u9770\u839E\u97C1\u9794\u5B7D\u97A3\u9778\u9783\u97AC\u9777\u913F\u83C0\u84FF\u9772\u97AD\u9788\u9774\u97A5\u84CD\u97A0\u976E\u976E\u85B4\u9784\u977E\u97A2\u8524\u97AB\u97A1\u82E6\u846B\u9799\u83C5\u8EA0\u97CC\u9780\u8561\u97C9\u97C4\u97B3\u85C6\u834C\u97BF\u977F\u8397\u97B9\u97C3\u97C6\u827E\u8531\u6AA0\u82C3\u9DA7\u9D31\u837B\u83A5\u85F1\u8555\u8383\u8350\u832C\u87FC\u83F4\u8342\u8351\u827D\u8284\u912D\u911A\u84BA\u83A2\u61BC\u8515\u64CE\u82E5\u60F9\u9A5A\u8304\u8354\u8B66\u82F1\u9769\u87F4\u8300\u851E\u8562\u8327\u85CE\u83F2\u71D5\u9DF0\u5807\u97ED\u85EA\u82D6\u9EC3\u856D\u7518\u666E\u8341\u85B7\u85FF\u8553\u8576\u834B\u8626\u89B2\u857E\u831C\u83A4\u67D0\u828B\u82A3\u85BE\u849C\u82F9\u82E4\u8638\u83FF\u85BD\u8601\u849D\u8565\u85F6\u65B3\u834E\u834A\u83FE\u52E4\u83EB\u5176\u82B8\u8328\u845D\u82AB\u751A\u827C\u859A\u833F\u90AF\u911E\u85A4\u8322\u82DB\u8486\u859E\u85F8\u82EA\u8564\u8381\u846C\u849A\u85DE\u8373\u844D\u83EF\u834A\u8568\u82BD\u84D0\u8396\u8508\u8548\u8591\u847D\u8290\u852B\u9F79\u828E\u83DF\u842F\u85D1\u85A2\u859D\u8293\u84C0\u83F0\u82A4\u84B8\u8607\u858A\u861A\u8447\u82A8\u827F\u84E9\u840F\u82F0\u8305\u82A7\u8324\u8348\u8317\u82D1\u8575\u839B\u839A\u85EC\u84A2\u852D\u85A9\u861F\u852F\u84BB\u852C\u8577\u9138\u82A1\u8475\u845E\u8647\u847E\u8442\u8271\u82AE\u84AE\u8336\u8320\u82FB\u82F6\u8411\u830C\u96C8\u8549\u820A\u9E0F\u834F\u6C0B\u8337\u990A\u8470\u82D3\u832F\u82A9\u84BC\u8629\u8599\u84E8\u84E7\u82A5\u8588\u83D5\u8625\u837C\u8343\u82A2\u829E\u859F\u8377\u8345\u8454\u6B4E\u9BD7\u84CC\u96E3\u839D\u861E\u8445\u838B\u82B1\u84A8\u8446\u82F2\u8460\u856A\u849B\u8393\u84D3\u849E\u82AF\u8340\u83CA\u82FE\u82B4\u828D\u82B6\u8461\u85BF\u8525\u828D\u8514\u8404\u8298\u854A\u82DF\u830D\u82DE\u8449\u829A\u8639\u7F8A\u7F8B\u7FAF\u8457\u7F92\u85C9\u85D5\u838F\u7FB3\u7F96\u7F9D\u8440\u84B1\u7FA7\u7FAC\u7FA2\u83DD\u7FBB\u8527\u7F9C\u7FA6\u7FB5\u8436\u84C1\u7FA0\u83F6\u83D7\u5DEE\u83C1\u7FBA\u7FB1\u7FA5\u7F9E\u8299\u84F7\u7F9A\u7FAD\u7FB7\u6059\u83E2\u8374\u7FD4\u7FB0\u8600\u83C8\u7FB6\u8392\u83CB\u857A\u8604\u8557\u912F\u9100\u84F6\u656C\u8376\u96DA\u8547\u8648\u843C\u846D\u847A\u82E0\u8619\u85C2\u851A\u8280\u82D5\u840F\u857B\u8375\u85EF\u857C\u85CD\u8338\u8635\u8617\u83C6\u829B\u8399\u83E3\u831E\u85CB\u84FC\u8541\u85CD\u8407\u61C3\u82E8\u8512\u859C\u84F2\u82E3\u8291\u4E95\u5E76\u534C\u8465\u4E26\u85C4\u8623\u8633\u5193\u84D4\u85B1\u9DC1\u9D67\u4E3C\u861C\u84F3\u834A\u4E26\u9829\u8401\u845A\u74F6\u8C54\u8275\u90F1\u84AB\u5584\u5231\u8353\u84B4\u861B\u8832\u84B9\u6714\u9998\u8634\u83E1\u8301\u856C\u84B6\u846F\u8452\u860A\u855D\u8520\u858C\u6221\u85E5\u5B73\u9DBF\u8332\u82E1\u6148\u82ED\u83C7\u52D8\u834D\u838A\u8523\u8585\u8620\u83C9\u6B41\u8339\u8560\u8498\u844C\u83D1\u659F\u82D7\u66F2\u66F9\u8806\u8E89\u8394\u679C\u5C0A\u8528\u83CC\u7337\u852E\u5960\u8335\u83AE\u85AF\u842C\u8609\u863F\u8511\u858E\u8824\u5922\u750D\u85C5\u862E\u85A8\u85E3\u77A2\u8FB2\u8C4A\u8468\u82EC\u8478\u8334\u84FD\u8502\u8646\u8632\u85DF\u82FA\u517C\u8482\u8596\u863A\u85C3\u8622\u84A1\u850F\u832D\u8412\u8509\u85AA\u85D7\u85FD\u83FD\u8598\u85B3\u860B\u84EC\u82C0\u82B3\u833A\u84EE\u82A0\u82B7\u8589\u84EB\u8308\u84EA\u85D9\u8403\u8516\u85D8\u8606\u82EB\u85F7\u84BF\u8578\u850E\u8500\u8476\u85A7\u8618\u85F9\u8479\u851F\u8640\u8519\u83F8\u82D9\u843B\u856B\u8398\u858F\u83E9\u849F\u83E8\u8292\u8579\u8344\u83A3\u8352\u84C4\u84FE\u84D1\u85BA\u85E1\u8627\u5C71\u5D4B\u5D35\u5D3C\u5D11\u5D51\u5CCE\u5D29\u5D31\u526C\u527B\u5CA8\u9853\u5CD2\u9145\u6B42\u5D22\u5D17\u5CF4\u5D1F\u5D94\u5CEA\u5D92\u5D27\u5CA5\u5D0D\u7CF6\u5D20\u5D40\u9844\u5CED\u5D99\u5DB8\u5DC6\u5D97\u5DC0\u5D1A\u5CD9\u5D36\u5DA2\u5D01\u5315\u5CB6\u5D32\u5D59\u5D4A\u5D23\u5D93\u5CF0\u5CC9\u5CC8\u5D67\u5C86\u5DA0\u5DCB\u5C93\u5D50\u5D77\u5D42\u5D0F\u5CE8\u5D68\u5DAD\u5DD1\u5D72\u5D6C\u5DCD\u5D25\u5DBC\u5D00\u5CFB\u5D45\u5CF8\u5D34\u5D7E\u5CEC\u5D63\u9B2F\u5CA4\u5DD4\u5D06\u5D71\u6AF1\u5C90\u7CF1\u5D84\u5CD4\u8825\u5D28\u5D07\u8C50\u5B7D\u5CAE\u5CB5\u5CD6\u51F6\u5CDF\u5D9A\u5CDA\u5DBD\u5147\u8F0B\u5D24\u5D26\u5D0E\u5CD3\u5CFD\u5D7D\u5C74\u5C6E\u5C9F\u5CAA\u5D81\u5CAB\u5CD8\u5D38\u8011\u5CCF\u5D80\u70AD\u5CAF\u5D16\u5CCC\u86A9\u5CB8\u5CFF\u5C8F\u5D7F\u5CDB\u5CA2\u8C73\u5CA9\u8C48\u5C8D\u5D0B\u5DA1\u5C7C\u5D9C\u5C88\u5DB0\u51FD\u5C8C\u5C8B\u5D79\u5CD7\u5CDE\u5D9D\u5D65\u5DC9\u5D14\u5DC2\u96DF\u5D95\u5DB2\u5DBA\u5CAD\u5C91\u5C92\u5D62\u5C95\u5D19\u5D33\u5DAE\u5CC7\u5CC6\u5C79\u5C9D\u5CCB\u5C89\u5DB7\u5CA3\u5D1D\u5D8A\u5DAF\u5D89\u5DD6\u5D3F\u5C7A\u5CB7\u5C7B\u5CA7\u5D0C\u5CEE\u5D8D\u5D7A\u5D87\u5CA0\u5C7A\u5D1B\u5DB1\u89AC\u5DAA\u5D37\u5DAC\u8C54\u51F1\u98BD\u5DD5\u7343\u5274\u9857\u5D4C\u5D41\u8277\u9146\u6573\u5D6F\u5DCF\u5D6B\u5D86\u5D9F\u5DA9\u51FA\u8278\u5C7E\u5D55\u795F\u8294\u833B\u5E7D\u5CB0\u5D88\u5D30\u5D2E\u5CAC\u5D4E\u5DA7\u5DB5\u5D3D\u5D39\u5DD8\u5DC3\u5D43\u5D7C\u5D43\u5D7C\u5D12\u5D69\u5D1E\u5D49\u5D3A\u5CA6\u5DC7\u5D82\u5CF7\u5CD0\u5973\u5A3C\u5ABC\u5AA2\u5A9A\u59B2\u5A78\u5A9E\u5AFA\u5AFB\u5ADA\u5AC7\u5B21\u59CD\u5AA7\u5A47\u5A64\u5A6C\u5ACD\u59D0\u5A9B\u59DB\u5AB1\u59CD\u5A0A\u5A1E\u5990\u5A23\u59A2\u59BA\u52E6\u5A15\u5B3E\u5AE9\u527F\u911B\u5974\u76DD\u52AA\u5E11\u525D\u782E\u5F29\u5B65\u6012\u62CF\u99D1\u66EB\u7E15\u7DF9\u7DC6\u7DC4\u7E53\u7E35\u7E43\u5AE6\u7E0E\u7DAC\u7DFA\u7E93\u7DB5\u7DA2\u7E1A\u7DF7\u7D44\u7DE9\u7D67\u7D92\u7E29\u7DA2\u7D45\u7D7C\u7DB1\u7DB2\u77D5\u7DF2\u7E49\u7D8F\u947E\u7D88\u7D8C\u7D1B\u7E52\u6B12\u7DD7\u7D9D\u7D02\u7D80\u7D4A\u7DEF\u7DF4\u7E14\u7DB4\u5A52\u7D83\u7E57\u7DC2\u7D17\u7D56\u7D46\u7DA3\u7DBE\u7D53\u7E5E\u7D36\u7D50\u7E88\u7E8C\u5999\u7DBF\u7DDA\u9E1E\u9DE5\u7E4C\u7E61\u7DCC\u7E59\u7D73\u7D61\u7D42\u7D1D\u7E81\u7D51\u7DDE\u7DDF\u7D9E\u7E51\u7D4E\u7E31\u7E30\u7DB9\u7D81\u7D29\u7DE8\u7E73\u7D9F\u7E98\u7D19\u7DBC\u7E3D\u7DB9\u7E1B\u7DD8\u7DDA\u7E3F\u7D68\u7D7F\u7D0E\u7D01\u7D31\u7D0C\u7D52\u7D58\u7D3F\u7DCE\u7E8A\u7E8F\u7E1D\u7D8D\u7E33\u7E50\u7DD2\u7DC1\u7DC0\u7E7D\u7E2F\u7D9C\u7D35\u7DBB\u7D84\u7DA9\u7E2E\u7D3D\u7E16\u7DB0\u7E21\u5971\u7E5A\u7D18\u7D7A\u7DBA\u7D08\u7D3B\u7D1E\u7E63\u7D03\u7D3C\u7E37\u7E62\u883B\u7D69\u7DCB\u7D2C\u7D33\u7D4F\u7E61\u7D05\u7D54\u7E7B\u7E8B\u7DDB\u7D06\u7D11\u7DFB\u7DFB\u7E13\u7E09\u7D70\u7DC9\u7D86\u7D1C\u7E9A\u7CFD\u7E1F\u7D93\u7E39\u7DEC\u97C1\u5F4E\u7D55\u7D7B\u7E72\u5B7F\u7D10\u7E58\u7D1A\u7E48\u7D13\u7E7A\u7D8E\u7D96\u7D16\u7E03\u7E94\u7DEE\u7D0D\u81E0\u7D28\u7DAD\u7D3E\u7E96\u7D1F\u8B8A\u7D12\u7E6A\u7DB8\u7D5F\u7DF6\u7DF0\u7D66\u7D07\u7DF1\u7D41\u7E80\u6200\u60A8\u7D62\u7D04\u7D04\u7DEA\u7DAF\u7D15\u7D47\u7D32\u7D14\u7E10\u6523\u59C5\u7D81\u7E25\u7DAA\u7E3E\u7E24\u5A58\u8F61\u7D79\u7E1C\u7D7D\u7DE1\u7E70\u7E5F\u7DDD\u7E69\u7D09\u7D39\u7D55\u7DC5\u7D85\u7E46\u7D00\u7E9C\u7E38\u7E56\u7E0A\u7DE7\u7E55\u7DD9\u7D3A\u7E12\u7D63\u7E55\u7E5C\u7E77\u7E11\u5DD2\u7E43\u7E97\u7E40\u7D40\u5B4C\u7D72\u7CFE\u7DA0\u7DE3\u7E45\u7E7C\u7DC7\u7D30\u7D91\u7E86\u7D6A\u7E99\u7E79\u7E6F\u7E15\u7DE6\u7E2A\u7E32\u7DBD\u7DE0\u7E0D\u7D5E\u7D38\u7E68\u7E2B\u7E0B\u7D21\u7E54\u7E42\u7D71\u7D0F\u7E3A\u7D0B\u7E7E\u7DB7\u7E91\u7E1E\u7DA7\u7DA1\u7E95\u7E3C\u7E78\u7E76\u7E0C\u7E2D\u7D43\u7D6F\u7E34\u7E75\u7E17\u59CC\u5A48\u710B\u5A03\u5B08\u5958\u5B26\u5B19\u59DE\u5B2F\u5B09\u5AB4\u5A5E\u88DD\u5A42\u5A93\u5B1D\u59E0\u5B3C\u59C0\u5A33\u5A51\u5B0F\u598A\u59FA\u5AB9\u9109\u5977\u59DD\u5A37\u59E1\u5996\u5B0C\u5A56\u59A1\u59E4\u59F5\u597C\u5A5A\u5A25\u59D3\u5992\u5AA5\u9109\u5B13\u5ABF\u5AB3\u5A62\u5AB2\u5AC2\u5A57\u5A18\u5B24\u6A02\u69F3\u5B24\u6F3F\u7CF8\u588F\u5E7E\u65B7\u734E\u5A00\u734E\u5AAF\u5E7C\u9D22\u5ADE\u5ADD\u87BF\u5299\u91AC\u4EE5\u5A2D\u59CB\u5E7B\u5B1A\u5AEC\u5A0F\u757F\u5A7B\u5AC6\u59B9\u5993\u597C\u5B38\u5AE5\u5A8E\u59E5\u5A55\u5B2A\u5A43\u5A97\u5AC1\u5A5D\u5A49\u5B23\u59D1\u5AA9\u5AF4\u5A60\u59F2\u59F7\u76ED\u5AFD\u5A4D\u59F1\u59E8\u5AC9\u51F5\u59CE\u5AFF\u56AE\u4E31\u8801\u723F\u5B07\u59DA\u5B27\u9957\u6536\u59AF\u59BD\u5A09\u59CA\u97FF\u5985\u59EE\u5B2C\u5C07\u5AEE\u5B40\u5F59\u5E8A\u5B2D\u5F5D\u58EF\u5A3E\u7246\u5AC4\u65A8\u6215\u59EA\u72C0\u5978\u598D\u883F\u5A6D\u5998\u7241\u5B4B\u59A7\u5A20\u7244\u5F58\u5992\u598D\u7242\u599D\u5AB7\u5A19\u5AD6\u5A94\u5AE3\u59C3\u5A29\u597D\u59B3\u599E\u5A83\u5976\u59A4\u59FC\u59F3\u5A17\u5AF7\u5A40\u5F54\u5ACB\u5F56\u59FD\u5A7F\u5B01\u5B14\u5A39\u59A0\u5B47\u5AF6\u9DA8\u598A\u59C8\u5B45\u5997\u8821\u598E\u59FE\u5AAE\u5B10\u59F6\u5AAE\u59E9\u5AAC\u5A95\u5AF5\u5979\u59BC\u5981\u59A3\u59C1\u5A9F\u5AB0\u59A6\u5A8B\u5AC0\u5A67\u5ACA\u5A4A\u5982\u5A1F\u9D3D\u5E24\u6055\u6310\u5B20\u5B0B\u5B4D\u5A7D\u7D6E\u5A1B\u5A16\u5B4E\u9DAD\u59B1\u5A13\u5A35\u5AD5\u59EC\u5A66\u5B25\u5AEA\u59AE\u5ABD\u5A1C\u5AD7\u59D6\u5ADF\u5983\u5FCC\u5AEB\u5A70\u5A8A\u5A84\u5AF8\u5B1E\u5A7C\u5AF9\u5B3F\u5AE8\u59CF\u5A38\u5A92\u5B05\u5AB6\u59D8\u5ABE\u5AF8\u5B28\u5A8C\u5ACC\u597E\u5A8F\u5AB8\u5A69\u5B48\u96DD\u5ABA\u597B\u707D\u59D2\u9095\u59E6\u753E\u5DE2\u5AA6\u5A50\u5A0C\u9D85\u7580\u5A5F\u59FB\u5B3D\u5B1B\u5ABC\u5AD8\u59C6\u5A65\u5A9C\u5AE1\u59E3\u5A4C\u59B5\u59A8\u5B02\u598F\u5A2E\u5AED\u5A5B\u5A77\u5B43\u5AD9\u5ADC\u5A44\u59B6\u5B17\u7530\u80C3\u9852\u611A\u56DB\u56E7\u9DF6\u755F\u679C\u56F0\u8901\u9846\u570D\u5925\u6564\u7577\u7584\u9EE0\u9EF7\u9EF2\u9ED8\u9ED3\u9EF0\u9EE6\u9EE4\u9ED5\u9ED6\u9EEB\u9EF5\u9EDF\u9ED4\u9EED\u7554\u5708\u9EDA\u9EEE\u9EDC\u9EDD\u9EDE\u9EE5\u9EEF\u91CC\u7564\u9ED1\u58A8\u7566\u5714\u7587\u91CE\u5712\u5709\u56F7\u7548\u7565\u757D\u756F\u9E00\u5703\u754E\u6B5C\u570B\u6580\u6BCB\u6BCC\u8CAB\u6BCB\u9E05\u9DDD\u5718\u7579\u6581\u56FA\u56E0\u56FF\u7578\u6B2D\u6069\u7537\u7532\u79BA\u7F5D\u7F66\u8CB7\u7F7E\u7F67\u7F6C\u7F63\u7F6B\u778F\u776A\u9D28\u7F76\u7F5B\u7F77\u7F86\u7F6D\u7F6E\u7F72\u7F5F\u7F68\u76EE\u753D\u7F6A\u571A\u7F58\u7F7D\u7F61\u7F5E\u773E\u8700\u7F79\u7F65\u7F60\u7F7B\u7F75\u7F83\u7F88\u7F87\u7F89\u7F85\u7F7A\u7F73\u7F7C\u5970\u7F69\u7F5C\u8A48\u7F70\u7F70\u7F7F\u7540\u5704\u753A\u5702\u754F\u56DD\u5885\u56DA\u755B\u56F9\u754B\u754C\u5707\u6141\u56EE\u601D\u56EB\u7547\u816E\u7547\u6BD7\u6BD8\u56E4\u570A\u56DE\u5713\u5716\u5716\u5B32\u7570\u7562\u570C\u56E1\u571E\u7D2F\u7FFE\u9E13\u571B\u571C\u757E\u6AD0\u7E8D\u58D8\u758A\u7928\u7F4D\u58E8\u56E5\u6BCD\u5701\u753F\u66F0\u660D\u6688\u709A\u9865\u6651\u65F0\u5195\u6B25\u6612\u7166\u65F5\u6622\u9DC3\u65FC\u667E\u8127\u8101\u90E5\u7E22\u5197\u81AC\u9DAA\u809B\u521E\u585A\u8115\u80CA\u518A\u899E\u7797\u779A\u7762\u80D0\u81C5\u81A7\u92A9\u9CFB\u91FD\u91E9\u939E\u928A\u91F4\u942E\u93D4\u93B5\u91F1\u9226\u91DA\u9294\u92AB\u5F1A\u940A\u9300\u92E1\u9253\u920A\u9264\u5F05\u9446\u9439\u9283\u92C5\u67E6\u68D7\u6A92\u6983\u677F\u674B\u693C\u6A41\u6AE0\u6755\u6739\u6AB6\u67EB\u6760\u6791\u69F1\u674D\u697A\u677C\u6892\u677A\u683A\u6784\u6AC2\u68B1\u6A9B\u6893\u6AA4\u69B1\u6C93\u6C69\u705D\u95CA\u6ED8\u6FC9\u6C43\u6C9D\u7014\u5863\u76EA\u705A\u7870\u6E22\u6F07\u6DDA\u7029\u6FC2\u6F25\u6D68\u6FE3\u6FF1\u6C6F\u6D60\u6C3F\u7057\u6C9C\u705E\u6FAA\u6D12\u9D3B\u6C8D\u6E79\u6CD3\u6C80\u7039\u6E1D\u6DBB\u67D2\u6D2D\u6C6B\u6E35\u934C\u6D83\u6FC4\u6E64\u6ED6\u655E\u70AF\u7091\u7192\u7203\u9843\u7113\u71A4\u70E1\u71B5\u6996\u6128\u9DC7\u589D\u6470\u52AB\u87AB\u58D6\u5F40\u5829\u55C0\u6B2F\u5609\u58FF\u57B6\u99AB\u767F\u7202\u9DEE\u9845\u7910\u5DA8\u7BF9\u5297\u912E\u9DCD\u79CD\u5241\u79DE\u9121\u91C6\u7C03\u7C01\u7BE6\u7C19\u9E04\u61F2\u555F\u5DB4\u7B30\u7C48\u9DCE\u90B8\u68A8\u5F73\u9D29\u74DD\u9EF4\u7B4D\u9D30\u5284\u90C8\u7C4A\u7B38\u9D9E\u515F\u90CB\u61A9\u89A3\u9DB9\u7B8E\u7B18\u3001\u9DDB\u9118\u912C\u617C\u882F\u5246\u5E8B\u7FA9\u6825\u5E80\u9E83\u9CF6\u5E87\u6020\u5F01\u9DCF\u7A75\u5B8B\u5EFE\u8F5B\u8EFF\u9DB7\u9DB1\u5BA7\u524B\u9D33\u5BF1\u5BE3\u4E42\u5187\u90C1\u760C\u75A2\u730F\u7653\u75FB\u75F2\u760F\u75CF\u9E11\u7598\u75FE\u5937\u65EE\u53B9\u75D1\u9D10\u7F8D\u5C22\u5E4A\u87BE\u8746\u8876\u88CD\u5191\u9E0D\u8CA2\u899D\u9860\u73A5\u9CFF\u738A\u81F9\u9104\u6B45\u7400\u73AB\u73CC\u73AD\u7467\u73EB\u9DE3\u61A8\u9D5B\u9D37\u6BA5\u6050\u5262\u6CF5\u9143\u6B4C\u6554\u7923\u90D6\u5140\u5794\u5F1D\u58AE\u89D4\u6C36\u9C74\u5F18\u5F14\u965C\u6A83\u4E45\u58AC\u4EF4\u70CB\u6C46\u5C12\u9DE1\u96B9\u6820\u96BB\u9D40\u72A8\u6041\u4F76\u4FCD\u4F82\u6024\u5348\u9D19\u4F87\u4F51\u9BC8\u500F\u4EDD\u5D5E\u4FB2\u6C14\u4F04\u5020\u4F08\u8CB8\u67CB\u4F05\u9DAC\u9837\u50DB\u4EDA\u50C6\u506F\u65E8\u71B2\u66F6\u60B7\u52FA\u52FC\u6129\u5309\u610A\u619F\u6049\u5FC9\u5FF7\u615B\u6083\u6D2F\u6277\u6293\u605D\u63D9\u6369\u6423\u913B\u710E\u62F8\u6368\u64E2\u6452\u6370\u64BE\u6459\u9091\u5504\u53ED\u528B\u5533\u5693\u6222\u5454\u53FB\u5512\u5540\u8E5D\u5514\u5505\u5565\u54B0\u7378\u55BF\u5D52\u9D1E\u54A1\u5681\u56C6\u558D\u81C0\u8D00\u58C2\u5ADB\u7E44\u9A02\u9CED\u622E\u5C67\u5C50\u6170\u61B5\u5C5D\u7FCB\u9D8B\u90B5\u5DF2\u5980\u69CA\u84AF\u9862\u83F3\u9DEC\u6B49\u60CE\u838C\u9DCB\u843F\u85EB\u84FA\u7F91\u6201\u8624\u83DE\u85D2\u85E2\u8605\u84F0\u83FA\u84D6\u84A7\u8285\u8413\u82E7\u839E\u913F\u9799\u9D31\u827D\u911A\u9DF0\u8576\u83A4\u828B\u85BD\u83EB\u911E\u859E\u84E9\u8324\u8320\u830C\u8625\u829E\u8345\u839D\u82B6\u7F8B\u830D\u9100\u85EF\u82E8\u5E76\u8633\u9D67\u834A\u8275\u5231\u5B73\u8585\u66F2\u8335\u858E\u750D\u85E3\u8596\u85D7\u8578\u85F9\u849F\u527B\u5CC8\u5CF8\u5CD6\u5D9A\u5CCF\u5C8B\u5CDE\u96DF\u5CAD\u5C92\u5CC6\u8278\u5CF7\u5AE6\u9DE5\u7E30\u7D9F\u7D01\u7E2F\u7D7B\u60A8\u59C5\u69F3\u5A5D\u59FC\u56F0\u6BCC\u9DDD\u56EE\u6BD8\u9DD0\u56D7\u8197\u61D8\u701C\u6E25\u769E\u9DFD\u7B47\u9C34\u9D45\u9D5A\u5FD2\u90E9\u5135\u9D68\u5C73\u9848\u5A5C\u9D58\u83B0\u84CF\u96C8\u534C\u85C5\u850E\u5C7E\u9D73\u9D2D\u9E80\u9D2F\u4EDC\u862E\u9E06\u986A\u9CFC\u7517\u6B33\u8FE5\u9D90\u5955\u6207\u6579\u890E\u984F\u9DDF\u619D\u76BB\u901C\u5FD0\u5287\u8FC6\u9E17\u9F92\u7931\u8B8B\u8A57\u6BEB\u8A63\u56C8\u4E69\u8B2A\u8B2F\u9D17\u8182\u908B\u8931\u9F4C\u535C\u684C\u97F9\u97F8\u6220\u5353\u903F\u6B46\u66B9\u904F\u97FB\u97F6\u9062\u97FA\u9800\u9000\u9ADC\u904E\u9031\u9D99\u671B\u6BC3\u9088\u737B\u904B\u5E1D\u777F\u906F\u8FF5\u750B\u7517\u9117\u6B4A\u6B33\u96E2\u6575\u9059\u9031\u557B\u8FE5\u8C9E\u6572\u65C1\u9F8D\u516D\u5546\u9D90\u9870\u4EA4\u5955\u5E1F\u6207\u5157\u889E\u5F08\u5DD2\u89AA\u9D89\u8668\u65B0\u5B70\u901F\u906B\u9055\u90ED\u6B51\u96DC\u6566\u6579\u56B2\u7763\u9316\u7CB2\u9024\u58D1\u97F0\u9910\u60C4\u88FB\u900D\u8FF7\u9074\u53D4\u9D81\u5C31\u52CD\u654A\u4E3B\u9035\u9076\u6BB6\u6C03\u893B\u8667\u8FFC\u9060\u9068\u9054\u8FEB\u9CEA\u9051\u4EB9\u900F\u9036\u890E\u8FD4\u9022\u9004\u9020\u5F65\u7522\u905B\u8922\u9002\u9041\u528C\u983B\u986A\u984F\u8FD1\u907E\u9005\u4EA2\u8FED\u9020\u8FFD\u65B9\u904D\u9080\u7FFD\u908A\u8863\u8FCE\u908D\u5EC9\u88D2\u905E\u80B2\u9021\u8FF0\u719F\u7385\u587E\u5145\u6594\u900B\u8FF0\u9011\u8FD6\u87A4\u7388\u7387\u8FE8\u88AC\u68C4\u906E\u7386\u6597\u9083\u8FA3\u9D6B\u8D1B\u5F70\u74E3\u7AF7\u8FA8\u8FA6\u9123\u902D\u8FAE\u9023\u5E76\u74F6\u8FAF\u6587\u6595\u8FF6\u907C\u9D41\u9CFC\u9DDF\u9E06\u6596\u9016\u901B\u6592\u6548\u8803\u981D\u5F65\u7522\u658C\u90CA\u6548\u5FDE\u619D\u9070\u6489\u541D\u8FE6\u7D0A\u9F7E\u5E02\u902E\u8877\u6B62\u907A\u6B65\u9003\u9063\u4EA6\u8FEA\u4E0A\u80AF\u8D07\u89B7\u8FFA\u8FC2\u76BD\u76BB\u9087\u8FCB\u6B6D\u9E07\u6C08\u6B72\u6B67\u8FD7\u52EF\u5277\u986B\u9090\u8A00\u901C\u8FFE\u6B54\u6B64\u5FD0\u96CC\u9017\u903C\u9010\u9F52\u8FD3\u9015\u9077\u5361\u9038\u9082\u8D0F\u905C\u9E01\u9079\u88A4\u901A\u8FFB\u88B2\u8FC5\u8803\u980F\u909F\u9086\u7FB8\u5B34\u81DD\u8912\u9032\u6BC5\u8FD5\u52BE\u523B\u5287\u9826\u9014\u903E\u903E\u8FC4\u591C\u6B2C\u5352\u8FE4\u8FEE\u864D\u8FFF\u7725\u8CB2\u922D\u67F4\u8FC6\u58DF\u9DFE\u9E17\u8655\u8656\u864E\u864E\u52F4\u882A\u9F91\u4E9B\u7961\u9F92\u7826\u7931\u9B33\u8C66\u89DC\u9B86\u80D4\u98FA\u8654\u8659\u5470\u865E\u865E\u807E\u8650\u8FE3\u9F94\u865B\u8661\u8FCD\u888C\u7D2B\u819A\u76E7\u865C\u6B76\u616E\u9F98\u8972\u8654\u8A3E\u8B8B\u901D\u5360\u8ADF\u8B4B\u8B95\u8B01\u88DB\u8B3E\u818F\u8ABF\u8AC2\u8AE2\u8A5B\u8AFC\u8A77\u4EAD\u8C6A\u8B20\u4EB3\u8ABF\u9AD8\u8A57\u8ACD\u4EAE\u6BEB\u8998\u8B11\u8A1F\u8AE1\u8AAA\u8AC3\u8A56\u8A0E\u8A23\u8AF1\u8ABA\u8AEB\u8ABB\u4EAC\u8A9A\u8B9C\u8AC7\u8A2C\u8A4A\u8B9F\u8A69\u8A7F\u8B4A\u8B78\u8A8C\u8A70\u8B46\u8B80\u8AFB\u8B3B\u8A98\u8AC9\u8B52\u8A7B\u901E\u8B6D\u8AA5\u8A75\u8B1D\u8A85\u8AC8\u8A71\u8A1E\u8B51\u8A22\u8A6C\u8A34\u8A2D\u8AF7\u8B57\u8A17\u8AD9\u8A46\u8A44\u8ADE\u8B06\u8B9A\u54C0\u8AC0\u8B25\u8B0F\u8ADB\u8ABD\u8B15\u8A8F\u8AF4\u8AA0\u8AD3\u8AA7\u8A39\u8A59\u8A27\u8A76\u8A60\u8A92\u8AEE\u8A66\u8A52\u8AA1\u8B67\u8B36\u8A08\u8B13\u8A96\u8AF5\u8ABC\u8A6B\u8B85\u8B53\u8AF8\u8AE0\u8A51\u8A41\u8A74\u8A7C\u8A91\u8B47\u8A87\u8A13\u8B31\u8A82\u8AB9\u5256\u8A0C\u8B23\u8A0F\u8A55\u901E\u8B1C\u8B88\u8A10\u8B40\u8A9E\u8AAB\u8A02\u8A36\u8AA3\u8AEE\u8AE8\u8AD1\u8B56\u8A1D\u8A99\u74FF\u8B24\u8AF2\u8B5A\u8A3C\u8B82\u8B6B\u4EAB\u70F9\u8B4E\u8AC2\u8AA6\u8A83\u8A7A\u8A0A\u8A95\u90E8\u8B94\u8A6D\u4EA8\u8ADD\u8B49\u8B0B\u8B92\u8AB8\u8A25\u8AB0\u8B22\u8B59\u8A3A\u8A45\u8B96\u8AD7\u8B12\u8A31\u6568\u8AD6\u8A6E\u8AED\u8B63\u8AED\u8A16\u8A1B\u8A50\u8B55\u8AA8\u8A62\u8A63\u8A11\u8B10\u8B7A\u8AE7\u8A4D\u8ADC\u8A30\u8B05\u8A84\u8B7F\u8ACB\u8B2E\u8AD8\u8B5F\u8B42\u8AE4\u907B\u8AFF\u907B\u8B54\u8944\u8AA4\u8B5D\u9050\u8A12\u8A54\u8B45\u8A8D\u8ACF\u8B98\u8B35\u8A86\u8B2C\u8A61\u8A5E\u8B33\u8A4E\u8A18\u8A8B\u8B18\u8B28\u8B6A\u8B7E\u8B5C\u8B1A\u8B70\u56C8\u8AFE\u8B8C\u8B39\u8A4C\u8B5C\u8AC6\u8B00\u8B41\u8AF6\u8B77\u8A73\u8B99\u8A81\u8B1B\u8B50\u8B68\u8B19\u8B0A\u8A15\u4E69\u9078\u8AEF\u8A58\u8B4F\u8A4F\u8B02\u8B16\u8AB2\u8B6F\u8AF0\u8B84\u8A03\u8AE6\u8B9E\u8B17\u8B2B\u8B2A\u8A68\u8B48\u6541\u8B0E\u8AD4\u8A3B\u8AFA\u8A2A\u8B58\u8B30\u8AFA\u8B74\u8A3F\u8AB6\u8B3C\u8B14\u8B2F\u8AD5\u8A40\u8B1E\u8AC4\u8AD2\u8B79\u8B93\u8AF3\u8B27\u8A72\u8B60\u8B2B\u8FC9\u9072\u892D\u8FE2\u4E0E\u74EC\u90A1\u65C3\u65D3\u65DF\u65C2\u65CC\u65BB\u65C4\u65C5\u65DB\u65C6\u653E\u65D6\u65D0\u65DA\u65BF\u65CB\u65DD\u65CD\u65CF\u65BD\u65CE\u65D7\u65BC\u65D2\u8FE1\u907F\u65DE\u7ACB\u97F3\u7ADF\u7AE0\u610F\u7AED\u7AEB\u9052\u7AE6\u9E15\u9D17\u98AF\u9053\u6232\u7AE3\u8F9B\u7AE4\u4F47\u9001\u7AD1\u903D\u9871\u9073\u9042\u7AD8\u9756\u7FCA\u7AEE\u8FF8\u9058\u9006\u6EAF\u7AEF\u59BE\u906D\u9081\u7AE5\u9075\u7AD9\u8FBF\u9F66\u9F5F\u8D19\u89A4\u5C0E\u53E1\u9DF2\u5F6A\u9F72\u9F57\u9F6F\u8665\u9F5D\u9F7B\u79BB\u9F6E\u9F65\u9044\u9F6C\u9F56\u9F61\u866A\u9F58\u9F55\u9F54\u9F63\u9F59\u9F5B\u9F7A\u9F5E\u9F76\u9F6A\u9F60\u9F71\u9F77\u9F70\u9F78\u751D\u9F6B\u9F75\u9F74\u9F5C\u8664\u7AF6\u4EA1\u8093\u8182\u88D4\u727D\u76F2\u6757\u58C5\u7515\u7F4B\u9954\u8841\u96CD\u5DDF\u4EA5\u74E4\u7384\u755C\u52F7\u902F\u9099\u8CCC\u5FD8\u6C13\u5984\u5DE1\u908B\u88F9\u88CF\u9E79\u9E75\u9047\u905D\u908F\u9084\u8931\u8870\u9110\u755D\u9E7C\u8FF4\u7A1F\u7A1F\u4EB6\u5363\u9E7A\u9F4A\u9F4D\u9F4E\u9F4B\u9F4C\u5291\u9F4F\u535E\u9034\u9049\u9069\u8FD2\u8DE1\u9019\u907D\u8FE0\u904A\u9067\u9085\u900C\u5159\u515B\u515E\u515D\u5161\u5163\u55E7\u74E9\u7CCE"),en=Qo,un=Xo;function tn(e){return e4(e).detectedCharacters=="traditional"}function e4(e){for(var u={inputLength:e.length,simplifiedCharacters:0,traditionalCharacters:0},t=0;t<e.length;t++){var a=e.substr(t,1);if(u4(a)&&u.simplifiedCharacters++,t4(a)&&u.traditionalCharacters++,t==e.length-1)return u.simplifiedCharacters>u.traditionalCharacters?(u.detectedCharacters="simplified",u.detectionRate=u.simplifiedCharacters/u.traditionalCharacters|1):u.simplifiedCharacters<u.traditionalCharacters?(u.detectedCharacters="traditional",u.detectionRate=u.traditionalCharacters/u.simplifiedCharacters|1):(u.detectedCharacters="unknown",u.detectionRate=0),u}}function u4(e){var u=an(e);return new RegExp(u).test(en)}function t4(e){var u=an(e);return new RegExp(u).test(un)}function an(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var a4=/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,n4=/[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g,r4=/[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,i4=/(\s+)|([\p{P}\p{S}])/gu,o4=[["zh-CN",a4],["ja",n4],["ko",r4]];function nn(e){if(!e)return"auto";let u="auto",t=0,a=0,n=e.match(i4);n&&(a=n.reduce((o,i)=>o+i.length,0));let r=e.length-a;for(let o of o4){let i=o[1],l=o[0],c=e.match(i),d=c?c.length:0;d>t&&(t=d,u=l)}return t*2.5/r>.5?u==="zh-CN"?tn(e)?"zh-TW":"zh-CN":u:"auto"}var rn=new Map([["afr","af"],["amh","am"],["arb","ar"],["azj","az"],["bel","be"],["bul","bg"],["ben","bn"],["bos","bs"],["cat","ca"],["ceb","ceb"],["ces","cs"],["dan","da"],["deu","de"],["ell","el"],["eng","en"],["epo","eo"],["spa","es"],["est","et"],["fas","fa"],["fin","fi"],["fra","fr"],["gax","ga"],["glg","gl"],["guj","gu"],["hau","ha"],["heb","he"],["hin","hi"],["hrv","hr"],["hun","hu"],["hye","hy"],["ind","id"],["ibo","ig"],["ita","it"],["jpn","ja"],["jav","jw"],["kat","ka"],["kaz","kk"],["khm","km"],["kan","kn"],["kor","ko"],["ckb","ku"],["lao","lo"],["lit","lt"],["lav","lv"],["min","mi"],["mkd","mk"],["mal","ml"],["mar","mr"],["mya","my"],["nep","ne"],["nld","nl"],["nob","no"],["nya","ny"],["pan","pa"],["pol","pl"],["pbu","ps"],["por","pt"],["ron","ro"],["rus","ru"],["sin","si"],["slk","sk"],["slv","sl"],["sna","sn"],["som","so"],["als","sq"],["srp","sr"],["sun","su"],["swe","sv"],["swh","sw"],["tam","ta"],["tel","te"],["tgk","tg"],["tha","th"],["toi","to"],["tur","tr"],["ukr","uk"],["urd","ur"],["uzn","uz"],["vie","vi"],["xho","xh"],["ydd","yi"],["yor","yo"],["cmn","zh-CN"],["zul","zu"]]);function on(e,u){if(!e)return"auto";!u&&u!==0&&(u=50);let t=nn(e);if(t!=="auto")return t;let a={minLength:u,whitelist:[...rn.keys()]},n=Za(e,a);if(n&&n.length>0){if(n.length>1&&n[0][0]!=="eng"&&n[1][0]==="eng"&&n[1][1]>.6)return"en";let[r]=n[0],o=rn.get(r);if(o)return o}return"auto"}var sn=["*://*/*","*","*://*"],cn="immersive-translate-wildcard-placeholder.com";function s4(e,u){let t=[];if(!u||(u&&!Array.isArray(u)?t=[u]:t=u,t.length===0))return null;if(t.some(o=>sn.includes(o)))return e;let a=new URL(e);a.hash="",a.search="";let n=a.href,r=a.hostname;if(t&&t.length>0){let o=t.find(i=>{let l=i;if(i===r)return!0;if(sn.includes(i))return!0;if(!i.includes("*")&&i.includes("://")){try{let c=new URL(i);return c.pathname==="/"&&!i.endsWith("/")?c.hostname===r:c4(n,i)}catch{}return!1}else{let c,d=i;if(i.includes("://")){let Z=i.split("://");c=Z[0],c==="*"&&Z.length>1&&(c="*",i="https://"+Z[1])}else c="*",i="https://"+i;let f=i.replace(/\*/g,cn),S;try{S=new URL(f)}catch{return P.debug("invalid match pattern",f,"raw match value:",d),!1}let T=S.hostname,F=S.pathname;F==="/"&&(d.replace("://","").includes("/")||(F="/*"));let G=l4(c+":",ln(T),ln(F));if(G){let Z=new URL(n);return Z.port="",G.test(Z.href)}else return!1}});if(o)return o}return null}function ln(e){return e.replaceAll(cn,"*")}function l4(e,u,t){let a="^";return e==="*:"?a+="(http:|https:|file:)":a+=e,a+="//",u&&(e==="file:"||(u==="*"?a+="[^/]+?":(u.match(/^\*\./)&&(a+="[^/]*?",u=u.substring(2)),a+=u.replace(/\./g,"\\.").replace(/\*/g,"[^/]*")))),t?t==="*"||t==="/*"?a+="(/.*)?":t.includes("*")?(a+=t.replace(/\*/g,".*?"),a+="/?"):a+=t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):a+="/?",a+="$",new RegExp(a)}function dn(e,u){return s4(e,u)!==null}function c4(e,u){let t=new URL(e),a=new URL(u);return t.hostname===a.hostname&&t.pathname===a.pathname&&t.protocol===a.protocol&&t.port===a.port}var h0=class{constructor(u){this.accessToken=u}async listAll(){let u=[],t="";do{let{nextPageToken:a,files:n}=await this.list(t).catch(r=>{throw r});u.push(...n),t=a||""}while(t);return u}async getConfig(u){try{return await(await fetch(`https://www.googleapis.com/drive/v3/files/${u}?alt=media`,{headers:{Authorization:`Bearer ${this.accessToken}`}})).json()}catch(t){return P.error("get config error, use default",t),{}}}async delete(u){await fetch(`https://www.googleapis.com/drive/v3/files/${u}`,{method:"DELETE",headers:{Authorization:`Bearer ${this.accessToken}`}})}findByName(u){return this.list(void 0,`name = '${u}'`)}uploadConfig(u,t=i0){let a=new Blob([JSON.stringify(u,null,2)],{type:"application/json"});return this.upload({name:t,parents:["appDataFolder"],mimeType:"application/json"},a)}updateConfig(u,t){let a=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return this.updateContent(u,a)}async upload(u,t){let a=new FormData;a.append("metadata",new Blob([JSON.stringify(u)],{type:"application/json; charset=UTF-8"})),a.append("file",t);let n=await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",{method:"POST",headers:{Authorization:`Bearer ${this.accessToken}`},body:a});return n.ok?await n.json():Promise.reject(n.text())}async list(u,t){let a=new URL("https://www.googleapis.com/drive/v3/files");u&&a.searchParams.append("pageToken",u),t&&a.searchParams.append("q",t),a.searchParams.append("spaces","appDataFolder"),a.searchParams.append("fields","files(id,name,createdTime,modifiedTime,size)"),a.searchParams.append("pageSize","100"),a.searchParams.append("orderBy","createdTime desc");try{return P.debug("list api:",a.toString(),this.accessToken),await(await fetch(a.toString(),{headers:{Authorization:`Bearer ${this.accessToken}`}})).json()}catch(n){throw P.error("fetch google ip error",n),n}}async updateContent(u,t){return await(await fetch(`https://www.googleapis.com/upload/drive/v3/files/${u}?uploadType=media`,{method:"PATCH",headers:{Authorization:`Bearer ${this.accessToken}`},body:t})).text()}};function mn(e,u){let t=["https://www.googleapis.com/auth/drive.appdata"];return`https://accounts.google.com/o/oauth2/v2/auth?client_id=${r0}&response_type=token&redirect_uri=${encodeURIComponent(u)}&scope=${encodeURIComponent(t.join(" "))}&state=${encodeURIComponent(JSON.stringify(e))}`}function gn(e){let u=e.match(/[#?](.*)/);return!u||u.length<1?null:{access_token:new URLSearchParams(u[1].split("#")[0]).get("access_token")}}async function pn(e,u,t,a,n,r,o){P.debug(`autoSyncStrategy accessToken: ${e}`);let i=new h0(e);try{let l=(await i.findByName(i0)).files;P.debug("files",l);let c=l[0]?.id,d=null;if(c&&(d=await i.getConfig(c).then(f=>({fileId:c,config:f}))),d){let{config:f,fileId:S}=d,T=f.updatedAt?new Date(f.updatedAt):new Date(0),F=u.updatedAt?new Date(u.updatedAt):new Date(0);if(P.debug("remoteUpdatedAt",T,"localUpdatedAt",F),T>F)P.debug("remote is newer, update local config",f),t(f),r&&r(!0);else if(T.getTime()===F.getTime())P.debug("remote and local are the same, do nothing"),r&&r(!1);else if(T<F)P.debug("local is newer, update remote config",u),await i.updateConfig(S,u),r&&r(!0);else{o&&o(": unknown error");return}a(new Date().toISOString())}else if(d===null)if(u){if(!u.updatedAt){let f=new Date().toISOString();n(f),u.updatedAt=f}await i.uploadConfig(u),a(new Date().toISOString()),r&&r(!0)}else o&&o(": Local Config is empty");else o&&o(": latestConfig is "+d)}catch(l){P.error("syncLatestWithDrive error",l),o&&o(": "+l.message)}}var d4="https://oauth2.googleapis.com/revoke",ou=class{constructor(u,t){this.CLASSNAME="GoogleAuth";this._state=u,this._redirectUrl=t}static revoke(u){let t=`${d4}?token=${u}`;return fetch(t,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(async a=>(await ou.removeAuthInfo(),X0()&&globalThis.location.reload(),a))}static async getAuthInfo(){let u=await g.storage.local.get(xu);if(u[xu])return u[xu]}static async removeAuthInfo(){return await g.storage.local.remove(xu)}static setAuthInfo(u){return g.storage.local.set({[xu]:u})}async auth(u=!1){let t=await ou.getAuthInfo();if(P.debug(this.CLASSNAME,"token from cache:",t),t&&t.access_token&&await hn(t.access_token).then(r=>!0).catch(r=>!1))return Promise.resolve(t);let a=mn(this._state,this._redirectUrl);return P.debug(this.CLASSNAME,"auth url: "+a),X0()?this.userscriptAuthWorkflow(a,u):this.extensionAuthWorkflow(a).then(n=>(ou.setAuthInfo(n),n))}async userscriptAuthWorkflow(u,t){return t&&await g.storage.local.set({[ba]:!0}),globalThis.open(u,"_self"),Promise.resolve({})}extensionAuthWorkflow(u){let t,a=!1;return new Promise((n,r)=>{let o=()=>{g.tabs.onUpdated.removeListener(i),g.tabs.onRemoved.removeListener(l)},i=(S,T,F)=>{if(P.debug(this.CLASSNAME,"create tab onUpdated: "+F.url),t===S){let G=new URL(F.url||""),Z=gn(F.url);G.pathname.startsWith("/auth-done")&&Z?.access_token&&(P.debug(this.CLASSNAME,"auth done: "+F.url),n({access_token:Z.access_token}),a=!0,g.tabs.remove(S),o())}},l=(S,T)=>{P.debug(this.CLASSNAME,"create tab onRemoved: "+S),(S===t||!a)&&(o(),r(new Error("auth failed")))},c=Math.min(500,screen.availWidth),d=Math.min(650,screen.availHeight),f;g.windows===void 0?f=g.tabs.create({url:u}).then(S=>{t=S.id}):f=g.windows.create({url:u,type:"popup",width:c,height:d,left:Math.round((screen.width-c)/2),top:Math.round((screen.height-d)/2)}).then(S=>{t=S.tabs[0].id}),f.then(()=>{g.tabs.onUpdated.addListener(i),g.tabs.onRemoved.addListener(l)}).catch(S=>{P.debug(this.CLASSNAME,"create tab failed: "+S),r(S)})})}};var m4="https://www.googleapis.com/oauth2/v3/tokeninfo",g4=r0,p4=De().REDIRECT_URL;function hn(e){if(!e)throw"Authorization failure";let u=`${m4}?access_token=${e}`,t=new Request(u,{method:"GET"});function a(n){return new Promise((r,o)=>{n.status!=200&&o("Token validation error"),n.json().then(i=>{i.aud&&i.aud===g4?r(e):o("Token validation error")})})}return fetch(t).then(a)}function fn(e,u=!1){let t=p4;if(typeof window<"u"&&window.location.protocol.startsWith("http")){let n=window.location.hostname,r=window.location.port;t=`${window.location.protocol}//${n}${r?`:${r}`:""}/auth-done/`}return new ou(e,t).auth(u)}async function bn(){}function En(e,u){let t=new Map;for(let r of u)t.set(r.header.toLowerCase(),r);let a=[],n=e.filter(r=>{let o=t.get(r.name.toLowerCase());if(o){if(o.operation==="remove")return!1;if(o.operation==="set")return!1}return!0});for(let r of u)r.operation==="set"&&a.push({name:r.header,value:r.value||""});return n.concat(a)}var f0=[{id:1,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"Referer",operation:"set",value:"https://httpstat.us/429"},{header:"origin",operation:"set",value:"https://httpstat.us/429"},{header:"DNT",operation:"set",value:"1"}]},condition:{urlFilter:"https://httpstat.us/429",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}},{id:2,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"Referer",operation:"set",value:"https://www.deepl.com/"},{header:"origin",operation:"set",value:"https://www.deepl.com"},{header:"DNT",operation:"set",value:"1"},{header:"cookie",operation:"remove"}]},condition:{urlFilter:"https://www2.deepl.com/jsonrpc*",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}},{id:200,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"Referer",operation:"set",value:"https://www.deepl.com/"},{header:"origin",operation:"set",value:"chrome-extension://cofdbpoegempjloogbagkncekinflcnj"},{header:"DNT",operation:"set",value:"1"}]},condition:{urlFilter:"https://api.deepl.com/jsonrpc*",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}},{id:201,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"Referer",operation:"set",value:"https://www.deepl.com/"},{header:"origin",operation:"set",value:"chrome-extension://cofdbpoegempjloogbagkncekinflcnj"}]},condition:{urlFilter:"https://w.deepl.com/oidc/token",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}},{id:3,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"origin",operation:"set",value:"chrome-extension://lkjkfecdnfjopaeaibboihfkmhdjmanm"}]},condition:{urlFilter:"https://transmart.qq.com/api/imt",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}},{id:4,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"origin",operation:"set",value:"chrome-extension://lkjkfecdnfjopaeaibboihfkmhdjmanm"}]},condition:{urlFilter:"https://translate.volcengine.com/crx/translate/v1/",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}}];function su(e,u){var t=(e&65535)+(u&65535),a=(e>>16)+(u>>16)+(t>>16);return a<<16|t&65535}function f4(e,u){return e<<u|e>>>32-u}function E0(e,u,t,a,n,r){return su(f4(su(su(u,e),su(a,r)),n),t)}function Se(e,u,t,a,n,r,o){return E0(u&t|~u&a,e,u,n,r,o)}function Be(e,u,t,a,n,r,o){return E0(u&a|t&~a,e,u,n,r,o)}function Me(e,u,t,a,n,r,o){return E0(u^t^a,e,u,n,r,o)}function _e(e,u,t,a,n,r,o){return E0(t^(u|~a),e,u,n,r,o)}function b0(e,u){e[u>>5]|=128<<u%32,e[(u+64>>>9<<4)+14]=u;var t,a,n,r,o,i=1732584193,l=-271733879,c=-1732584194,d=271733878;for(t=0;t<e.length;t+=16)a=i,n=l,r=c,o=d,i=Se(i,l,c,d,e[t],7,-680876936),d=Se(d,i,l,c,e[t+1],12,-389564586),c=Se(c,d,i,l,e[t+2],17,606105819),l=Se(l,c,d,i,e[t+3],22,-1044525330),i=Se(i,l,c,d,e[t+4],7,-176418897),d=Se(d,i,l,c,e[t+5],12,1200080426),c=Se(c,d,i,l,e[t+6],17,-1473231341),l=Se(l,c,d,i,e[t+7],22,-45705983),i=Se(i,l,c,d,e[t+8],7,1770035416),d=Se(d,i,l,c,e[t+9],12,-1958414417),c=Se(c,d,i,l,e[t+10],17,-42063),l=Se(l,c,d,i,e[t+11],22,-1990404162),i=Se(i,l,c,d,e[t+12],7,1804603682),d=Se(d,i,l,c,e[t+13],12,-40341101),c=Se(c,d,i,l,e[t+14],17,-1502002290),l=Se(l,c,d,i,e[t+15],22,1236535329),i=Be(i,l,c,d,e[t+1],5,-165796510),d=Be(d,i,l,c,e[t+6],9,-1069501632),c=Be(c,d,i,l,e[t+11],14,643717713),l=Be(l,c,d,i,e[t],20,-373897302),i=Be(i,l,c,d,e[t+5],5,-701558691),d=Be(d,i,l,c,e[t+10],9,38016083),c=Be(c,d,i,l,e[t+15],14,-660478335),l=Be(l,c,d,i,e[t+4],20,-405537848),i=Be(i,l,c,d,e[t+9],5,568446438),d=Be(d,i,l,c,e[t+14],9,-1019803690),c=Be(c,d,i,l,e[t+3],14,-187363961),l=Be(l,c,d,i,e[t+8],20,1163531501),i=Be(i,l,c,d,e[t+13],5,-1444681467),d=Be(d,i,l,c,e[t+2],9,-51403784),c=Be(c,d,i,l,e[t+7],14,1735328473),l=Be(l,c,d,i,e[t+12],20,-1926607734),i=Me(i,l,c,d,e[t+5],4,-378558),d=Me(d,i,l,c,e[t+8],11,-2022574463),c=Me(c,d,i,l,e[t+11],16,1839030562),l=Me(l,c,d,i,e[t+14],23,-35309556),i=Me(i,l,c,d,e[t+1],4,-1530992060),d=Me(d,i,l,c,e[t+4],11,1272893353),c=Me(c,d,i,l,e[t+7],16,-155497632),l=Me(l,c,d,i,e[t+10],23,-1094730640),i=Me(i,l,c,d,e[t+13],4,681279174),d=Me(d,i,l,c,e[t],11,-358537222),c=Me(c,d,i,l,e[t+3],16,-722521979),l=Me(l,c,d,i,e[t+6],23,76029189),i=Me(i,l,c,d,e[t+9],4,-640364487),d=Me(d,i,l,c,e[t+12],11,-421815835),c=Me(c,d,i,l,e[t+15],16,530742520),l=Me(l,c,d,i,e[t+2],23,-995338651),i=_e(i,l,c,d,e[t],6,-198630844),d=_e(d,i,l,c,e[t+7],10,1126891415),c=_e(c,d,i,l,e[t+14],15,-1416354905),l=_e(l,c,d,i,e[t+5],21,-57434055),i=_e(i,l,c,d,e[t+12],6,1700485571),d=_e(d,i,l,c,e[t+3],10,-1894986606),c=_e(c,d,i,l,e[t+10],15,-1051523),l=_e(l,c,d,i,e[t+1],21,-2054922799),i=_e(i,l,c,d,e[t+8],6,1873313359),d=_e(d,i,l,c,e[t+15],10,-30611744),c=_e(c,d,i,l,e[t+6],15,-1560198380),l=_e(l,c,d,i,e[t+13],21,1309151649),i=_e(i,l,c,d,e[t+4],6,-145523070),d=_e(d,i,l,c,e[t+11],10,-1120210379),c=_e(c,d,i,l,e[t+2],15,718787259),l=_e(l,c,d,i,e[t+9],21,-343485551),i=su(i,a),l=su(l,n),c=su(c,r),d=su(d,o);return[i,l,c,d]}function Cn(e){var u,t="",a=e.length*32;for(u=0;u<a;u+=8)t+=String.fromCharCode(e[u>>5]>>>u%32&255);return t}function it(e){var u,t=[];for(t[(e.length>>2)-1]=void 0,u=0;u<t.length;u+=1)t[u]=0;var a=e.length*8;for(u=0;u<a;u+=8)t[u>>5]|=(e.charCodeAt(u/8)&255)<<u%32;return t}function b4(e){return Cn(b0(it(e),e.length*8))}function E4(e,u){var t,a=it(e),n=[],r=[],o;for(n[15]=r[15]=void 0,a.length>16&&(a=b0(a,e.length*8)),t=0;t<16;t+=1)n[t]=a[t]^909522486,r[t]=a[t]^1549556828;return o=b0(n.concat(it(u)),512+u.length*8),Cn(b0(r.concat(o),512+128))}function yn(e){var u="0123456789abcdef",t="",a,n;for(n=0;n<e.length;n+=1)a=e.charCodeAt(n),t+=u.charAt(a>>>4&15)+u.charAt(a&15);return t}function ot(e){return unescape(encodeURIComponent(e))}function xn(e){return b4(ot(e))}function C4(e){return yn(xn(e))}function An(e,u){return E4(ot(e),ot(u))}function y4(e,u){return yn(An(e,u))}function wn(e,u,t){return u?t?An(u,e):y4(u,e):t?xn(e):C4(e)}function st(e){if(Math.abs(e)<1024)return e+" Byte";let t=["KB","MB","GB","TB","PB","EB","ZB","YB"],a=-1;do e/=1024,++a;while(Math.abs(e)>=1024&&a<t.length-1);return e.toFixed(1)+" "+t[a]}var Fu=[];async function Ku(e,u){return await new Promise((t,a)=>{let n=e,r=1,o=indexedDB.open(n,r);o.onsuccess=i=>{t(o.result)},o.onerror=i=>{a()},o.onupgradeneeded=i=>{let l=o.result,c=u||"cache";l.createObjectStore(c,{keyPath:"key"})}})}async function kn(e){let u=`${ye}-${e.service}@${e.from}->${e.to}`;return await A4(u,e)}async function Dn(e){let u=wn(e.originalText),t=`${ye}-${e.service}@${e.from}->${e.to}`;return await x4(t,u)}async function x4(e,u){let t=await Ku(e);return await new Promise((a,n)=>{if(!t)return n();let r="cache",i=t.transaction([r],"readonly").objectStore(r).get(u);i.onsuccess=l=>{t.close();let c=i.result;a(c)},i.onerror=l=>{t.close(),n()}})}async function A4(e,u){let t=await Ku(e);return(await Tn()).includes(e)||await w4(e),await new Promise(n=>{if(!t)return n(!1);let r="cache",i=t.transaction([r],"readwrite").objectStore(r).put(u);i.onsuccess=l=>{t.close(),n(!0)},i.onerror=l=>{t.close(),n(!1)}})}async function w4(e){let u="cache_list",t=await Ku(ye+"-cacheList",u),n=t.transaction([u],"readwrite").objectStore(u).put({key:e});n.onsuccess=r=>{t.close(),Fu.push(e)},n.onerror=r=>{t.close()}}async function Tn(){if(Fu&&Fu.length>0)return Fu;let e=await Ku(ye+"-cacheList","cache_list");return Fu=await new Promise(u=>{let t="cache_list",n=e.transaction([t],"readonly").objectStore(t).getAllKeys();n.onsuccess=r=>{e.close(),u(n.result)},n.onerror=r=>{e.close(),u([])}}),Fu}async function vn(){try{let e=[];(await Tn()).forEach(a=>{e.push(k4(a))});let t=await Promise.all(e);return st(t.reduce((a,n)=>a+n,0))}catch{return st(0)}}async function k4(e){let u=await Ku(e),a=[...u.objectStoreNames].reduce((o,i)=>{let l=D4(u,i);return o.push(l),o},[]),n=await Promise.all(a);return u.close(),n.reduce((o,i)=>o+i,0)}async function D4(e,u){return await new Promise((t,a)=>{if(e==null)return a();let n=0,r=e.transaction([u]).objectStore(u).openCursor();r.onsuccess=o=>{let i=r.result;if(i){let l=i.value,c=JSON.stringify(l);n+=c.length,i.continue()}else t(n)},r.onerror=o=>a("error in "+u+": "+o)})}var C0,T4=async function(e,u){let{method:t,data:a}=e;if(P.debug("background received message",t,a||" "),t==="mock")await T0(150);else{if(t==="queryParagraphCache")return Dn(a);if(t==="setParagraphCache")return kn(a);if(t==="calculateSize")return vn();if(t==="fetch")return d0(a);if(t==="getConfig")return iu();if(t==="getLocalConfig")return qu();if(t==="openOptionsPage")if(We()){let r=De().OPTIONS_URL;g.tabs.create({url:r})}else{let n=g.runtime.getURL("options.html"),r=a&&a.pageRoute?a.pageRoute:"";r=r||"",g.tabs.create({url:n+r})}else if(t==="openAboutPage")if(We()){let r=De().OPTIONS_URL;g.tabs.create({url:r+"#about"})}else g.tabs.create({url:g.runtime.getURL("options.html#about")});else if(t=="openSearchEnhancement")if(We()){let r=De().OPTIONS_URL;g.tabs.create({url:r+"#advanced"})}else g.tabs.create({url:g.runtime.getURL("options.html#advanced")});else if(t==="openEbookViewerPage")g.tabs.create({url:g.runtime.getURL("ebook/index.html")});else if(t==="openSubtitleBuilderPage"){let n=g.runtime.getURL("ebook/subtitle/index.html");We()&&(n=De().SUBTITLE_BUILDER_URL),g.tabs.create({url:n})}else if(t==="openEbookBuilderPage"){let n=g.runtime.getURL("ebook/make/index.html");We()&&(n=De().EBOOK_BUILDER_URL),g.tabs.create({url:n})}else if(t==="openHtmlViewerPage"){let n=g.runtime.getURL("html/index.html");g.tabs.create({url:n})}else if(t==="openPdfViewerPage"){let n=g.runtime.getURL("pdf/index.html");g.tabs.create({url:n})}else{if(t==="setLocalConfig")return vu(a);if(t=="getUserConfig")return Wu();if(t=="setUserConfig")return fu(a);if(t==="detectLanguage"){let{text:n,minLength:r}=a;if(!r&&r!==0&&(r=50),n.length<=r)return"auto";if(g.i18n&&g.i18n.detectLanguage)try{let o=await g.i18n.detectLanguage(n);return o.languages.length>0?wu(o.languages[0].language):"auto"}catch(o){return P.debug("detect language error",o),"auto"}else try{return await on(n,r)}catch(o){return P.debug("detect language by client error",o),"auto"}}else if(t==="detectTabLanguage")try{let n=await g.tabs.detectLanguage(u.id);return wu(n)}catch(n){return P.debug("detect tab language error, use auto ",n),"auto"}else if(t==="autoSyncLatestConfig"){try{await bn()}catch(n){P.debug("auto sync latest config error",n)}return""}else if(t!=="updateCommands"){if(t==="setBadge"){let n=u.id,r=a&&a.text?a.text:"";n&&v4(n,r)}}}}};function Fn(){lt();let e=g.runtime.getManifest();if(e.manifest_version>2,e.manifest_version===2&&g.webRequest&&g.webRequest.onBeforeSendHeaders){let u=f0.map(a=>a.condition.urlFilter),t=f0.reduce((a,n)=>(n.condition.resourceTypes.forEach(r=>{a.includes(r)||a.push(r)}),a),[]);g.webRequest.onBeforeSendHeaders.addListener(function(a){if(!(a.originUrl&&a.originUrl.startsWith("http"))&&a.originUrl&&a.requestHeaders)for(let n=0;n<u.length;n++){let r=f0[n];if(r.condition.urlFilter&&dn(a.url,r.condition.urlFilter))return{requestHeaders:En(a.requestHeaders,r.action.requestHeaders)}}},{urls:u,types:t},["blocking","requestHeaders"])}}function lt(){return C0||(C0=new pu("background",!1).getConnection("main",T4),C0)}function y0(e,u){return u==="dark"?{32:`${e}/dark-32.png`,48:`${e}/dark-48.png`,64:`${e}/dark-64.png`,128:`${e}/dark-128.png`,256:`${e}/dark-256.png`}:{32:`${e}/32.png`,48:`${e}/48.png`,64:`${e}/64.png`,128:`${e}/128.png`,256:`${e}/256.png`}}async function v4(e,u){if(We())return;let t=await F4();t!==null&&(u?g.browserAction&&g.browserAction.setIcon?g.browserAction.setIcon({tabId:e,path:y0("badge-icons",t)}):g.action&&g.action.setIcon&&g.action.setIcon({tabId:e,path:y0("badge-icons",t)}):g.browserAction&&g.browserAction.setIcon?g.browserAction.setIcon({tabId:e,path:y0("icons",t)}):g.action&&g.action.setIcon&&g.action.setIcon({tabId:e,path:y0("icons",t)}))}async function F4(){if(g.theme&&g.theme.getCurrent){let e=await g.theme.getCurrent();if(e.properties&&e.properties.color_scheme)return e.properties.color_scheme;if(e.properties&&e.properties.color_scheme===null)return null}return"light"}function Sn(){typeof g.commands<"u"&&g.commands.onCommand.addListener(async e=>{if(P.debug(`received command: ${e}`),["toggleTranslatePage"].includes(e)){let u=await g.tabs.query({active:!0,currentWindow:!0});if(u.length===0||typeof u[0].id>"u")return;let a=u[0].url;if(Ha(a)){g.tabs.create({url:Wa(a)});return}}await ct({method:e})})}async function ct(e){let t=(await g.tabs.query({currentWindow:!0,active:!0}))[0].id;lt().sendMessage(`content_script:main:${t}`,e).catch(n=>{P.error("send content message request failed",e,n)})}function S4(e,u){let t=e;return u&&Object.keys(u).forEach(a=>{let n=u[a],r=B4(a);if(typeof n=="object"||r){let o=n;r&&typeof o=="string"&&(o={tag:"a",href:o,target:"_blank"});let i=`<${a}>`,l=t.indexOf(i);if(l!==-1){let c=o.tag||"a",d=t.indexOf(`</${a}>`);if(d!==-1){let f=t.substring(l+i.length,d),S=Object.keys(o).filter(T=>T!=="tag").map(T=>`${T}="${o[T]}"`).join(" ");t=t.replace(`${i}${f}</${a}>`,`<${c} ${S}>${f}</${c}>`)}}}else{let o=new RegExp("{"+a+"}","gm");t=t.replace(o,n.toString())}}),t}function Bn(e,u,t){let a=e[u];if(!a)return t;let n=t.split("."),r="";do{r+=n.shift();let o=a[r];o!==void 0&&(typeof o=="object"||!n.length)?(a=o,r=""):n.length?r+=".":a=t}while(n.length);return a}function Mn(e,u,t,a,n){if(!e.hasOwnProperty(t))return u;let r=Bn(e,t,u);return r===u&&t!==a&&(r=Bn(e,a,u)),S4(r,n)}function B4(e){if(typeof e=="number")return!0;if(e){let u=parseInt(e);return!isNaN(u)}else return!1}var _n={"zh-CN":{"languages.en":"\u82F1\u8BED","languages.ja":"\u65E5\u8BED","languages.ko":"\u97E9\u8BED","languages.es":"\u897F\u73ED\u7259\u8BED","languages.fr":"\u6CD5\u8BED","languages.de":"\u5FB7\u8BED","languages.it":"\u610F\u5927\u5229\u8BED","languages.pt":"\u8461\u8404\u7259\u8BED","languages.ru":"\u4FC4\u8BED","languages.wyw":"\u6587\u8A00\u6587","languages.<all>":"\u5168\u90E8"},"zh-TW":{"languages.en":"\u82F1\u8A9E","languages.ja":"\u65E5\u8A9E","languages.ko":"\u97D3\u8A9E","languages.es":"\u897F\u73ED\u7259\u8A9E","languages.fr":"\u6CD5\u8A9E","languages.de":"\u5FB7\u8A9E","languages.it":"\u610F\u5927\u5229\u8A9E","languages.pt":"\u8461\u8404\u7259\u8A9E","languages.ru":"\u4FC4\u8A9E","languages.wyw":"\u6587\u8A00\u6587","languages.<all>":"\u5168\u90E8"}},M4={...du,"zh-CN":{..._n["zh-CN"],...du["zh-CN"]},"zh-TW":{..._n["zh-TW"],...du["zh-TW"]}};function Ln(e,u,t){return Mn(M4,e,u,s0,t)}var Gu=wa()?["action"]:["browser_action","page_action"],Pn=[{id:"toggleTranslatePage",contexts:["page","frame","selection",...Gu]},{id:V0,contexts:Gu},{id:Y0,contexts:Gu},{id:J0,contexts:Gu},{id:$0,contexts:Gu}];async function dt(e){P.debug("createContextMenu",Pn);for(let u of Pn){let t=!0;e.isShowContextMenu===!1&&u.id==="toggleTranslatePage"&&(t=!1);try{g.contextMenus.create({id:u.id,title:Ln(`browser.${u.id}`,e.interfaceLanguage),contexts:u.contexts,visible:t},()=>g.runtime.lastError)}catch(a){P.debug("create context menu error, it's ok!!",a,`menu id: ${u.id}`)}}}function Rn(){g.contextMenus.onClicked.addListener(e=>{if(e.menuItemId===V0)if(We()){let t=De().OPTIONS_URL;g.tabs.create({url:t})}else g.runtime.openOptionsPage();else if(e.menuItemId===$0){let u=g.runtime.getURL(n0);g.tabs.create({url:u})}else if(e.menuItemId===J0){let u=g.runtime.getURL(fa);We()&&(u=De().EBOOK_BUILDER_URL),g.tabs.create({url:u})}else if(e.menuItemId===Y0)g.tabs.create({url:g.runtime.getURL(ha)});else if(e.menuItemId===ya){let u=g.runtime.getURL(pa);We()&&(u=De().SUBTITLE_BUILDER_URL),g.tabs.create({url:u})}else e.menuItemId===Ca?g.tabs.create({url:"https://immersivetranslate.com/docs/donate/"}):ct({method:e.menuItemId})})}function mt(){iu().then(e=>{e.uninstallUrl&&g.runtime.setUninstallURL&&g.runtime.setUninstallURL(e.uninstallUrl),gt(e)}).catch(e=>{P.error("create menu error",e)})}function gt(e){e?dt(e):iu().then(u=>{dt(u)}).catch(u=>{P.error("create menu error",u)})}function In(){g.runtime.onInstalled.addListener(e=>{P.debug(`onInstalled reason: ${e.reason}`),P.debug(e),e.reason=="install"?(async()=>{let u="https://onboarding.immersivetranslate.com/",a=g.runtime.getURL("").startsWith("safari"),n=!1,r=!1;try{let o=await g.runtime.getPlatformInfo();a?o.os==="mac"?n=!0:o.os==="ios"&&(r=!0):o.os==="android"&&(u="https://onboarding.immersivetranslate.com/mobile/")}catch{}n?u="https://onboarding.immersivetranslate.com/mac-safari/":r&&(u="https://onboarding.immersivetranslate.com/ios/step-2/"),g.tabs.create({url:u}),mt()})():(e.reason=="update"&&g.runtime.getManifest().version!=e.previousVersion,mt())})}Fn();In();Sn();g.contextMenus&&Rn();async function _4(){g.contextMenus&&gt(),(await iu()).debug&&P.setLevel("debug")}_4().catch(e=>{});})();
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
