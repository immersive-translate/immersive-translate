(()=>{var Ui=Object.defineProperty;var Fi=(e,t)=>{for(var r in t)Ui(e,r,{get:t[r],enumerable:!0})};var _={BUILD_TIME:"2023-11-08T01:06:25.925Z",VERSION:"0.11.2",PROD:"1",REDIRECT_URL:"https://dash.immersivetranslate.com/auth-done/",PROD_API:"0",BETA:"0",IMMERSIVE_TRANSLATE_INJECTED_CSS:`:root {
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


/* opacity theme start */

.immersive-translate-target-translation-theme-opacity-inner {
  filter: opacity(calc(var(--immersive-translate-theme-opacity-opacity) * 1%)) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

[data-immersive-translate-root-translation-theme="none"] .immersive-translate-target-translation-theme-opacity-inner {
  filter: none !important;
}
[data-immersive-translate-root-translation-theme="opacity"] .immersive-translate-target-inner,.immersive-translate-target-translation-theme-opacity-inner:hover {
  filter: opacity(calc(var(--immersive-translate-theme-opacity-opacity) * 1%)) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

.immersive-translate-target-translation-theme-opacity-inner:hover {
  filter: none !important;
}


.immersive-translate-target-translation-theme-mask-inner:hover {
  filter: none !important;
}
[data-immersive-translate-root-translation-theme="opacity"] .immersive-translate-target-inner:hover {
  filter: none !important;
}


[data-immersive-translate-root-translation-theme="mask"] .immersive-translate-target-inner:hover {
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
`,IMMERSIVE_TRANSLATE_INPUT_INJECTED_CSS:`.immersive-translate-input {
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
  font-size:15px;
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
  font-size: 1.3rem;
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
  width: fit-content;
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

.immersive-translate-primary-link {
  cursor: pointer;
  user-select: none;
  -webkit-user-drag: none;
  text-decoration: none;
  color: #ea4c89;
  -webkit-tap-highlight-color: rgba(0, 0, 0, .1);
}

.immersive-translate-modal input[type="radio"] {
  margin: 0 6px;
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
  --background-light-green: #F5F7F9; 
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
    --background-light-green: #141e26; 
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
  --background-light-green: #141e26; 
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

#mount#mount {
  position: absolute;
  display: none;
  min-width: 250px;
  height: auto;
  --font-size: 17px;
  font-size: 17px;
}


/* float-ball */
.immersive-translate-float-ball-container {
  position: fixed;
  padding: 0;
  z-index: 2147483647;
  right: 0;
  top: 335px;
  width: 56px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  display: none;
}

.immersive-translate-float-ball-btn {
  background: linear-gradient(320.9deg, #DB3B7B 26.47%, #FFCEE2 88.86%);
  height: 36px;
  width: 56px;
  border-top-left-radius: 36px;
  border-bottom-left-radius: 36px;
  box-shadow: 2px 6px 10px 0px #0E121629;
}


.immersive-translate-float-ball-btn div {
  background: linear-gradient(140.91deg, #FF87B7 12.61%, #EC4C8C 76.89%);
  height: 34px;
  width: 54px;
  border-top-left-radius: 34px;
  border-bottom-left-radius: 34px;
  margin: 1px;
  display: flex;
  align-items: center;
}

.immersive-translate-float-ball-logo-img {
  width: 20px;
  height: 20px;
  margin-left: 10px;
}

.immersive-translate-float-ball-translated-img {
  position: absolute;
  width: 11px;
  height: 11px;
  bottom: 4px;
  right: 20px;
}

.btn-animate {
  cursor: pointer;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transition: -webkit-transform ease-out 250ms;
  transition: -webkit-transform ease-out 250ms;
  transition: transform ease-out 250ms;
  transition: transform ease-out 250ms, -webkit-transform ease-out 250ms;
}

.immersive-translate-float-ball-setting-btn {
  margin-top: 12px;
  margin-right: 18px;
  width: 28px;
  height: 28px;
}

.immersive-translate-popup-wrapper {
  background: var(--background-color);
  border-radius: 20px;
  box-shadow: 2px 10px 24px 0px #0E121614;
  border: none;
  overflow: hidden;
}

.immersive-translate-float-ball-close-content {
  padding: 22px;
  width: 320px;
}

.immersive-translate-float-ball-close-title {
  font-weight: 500;
  color: var(--h2-color);
}

.immersive-translate-float-ball-close-radio-content {
  background-color: var(--background-light-green);
  padding: 8px 20px;
}

.immersive-translate-float-ball-radio-sel,
.immersive-translate-float-ball-radio-nor {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  flex-shrink: 0;
}

.immersive-translate-float-ball-radio-sel {
  border: 2px solid var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.immersive-translate-float-ball-radio-sel div {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: var(--primary);
}

.immersive-translate-float-ball-radio-nor {
  border: 2px solid #D3D4D6;
}



.immersive-translate-float-ball-primary-btn {
  background-color: var(--primary);
  width: 72px;
  height: 32px;
  color: white;
  border-radius: 8px;
  text-align: center;
  line-height: 32px;
  font-size: 16px;
}

.immersive-translate-float-ball-default-btn {
  border: 1px solid var(--primary);
  width: 72px;
  height: 32px;
  border-radius: 8px;
  color: var(--primary);
  line-height: 32px;
  text-align: center;
  font-size: 16px;
}`,IMMERSIVE_TRANSLATE_POPUP_HTML:`<div
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
`,IMMERSIVE_TRANSLATE_VIDEO_SUBTITLE_HOOK:`(() => {
  const xhrOpen = XMLHttpRequest.prototype.open;
  const xhrSend = XMLHttpRequest.prototype.send;

  const customOpen = function () {
    arguments[1].includes("api/timedtext") && (this._url = arguments[1]),
      xhrOpen.apply(this, arguments);
  };

  const customSend = function () {
    if (this._url) {
      const id = (new Date()).getTime();
      globalThis.postMessage({
        type: "youtube-subtitle-request",
        text: this._url,
        id,
      });

      const handleEvent = ({ data }) => {
        if ("youtube-subtitle-response" === data.type && data.id === id) {
          if (data.text) {
            Object.defineProperty(this, "responseText", {
              value: data.text,
              writable: false,
            });
          }
          xhrSend.apply(this, arguments);
          globalThis.removeEventListener("message", handleEvent);
        }
      };
      globalThis.addEventListener("message", handleEvent);
    } else {
      xhrSend.apply(this, arguments);
    }
  };
  Object.defineProperty(XMLHttpRequest.prototype, "open", {
    value: customOpen,
    writable: false,
  });
  Object.defineProperty(XMLHttpRequest.prototype, "send", {
    value: customSend,
    writable: false,
  });

  let timer = null;

  const getYTInitialPlayerResponse = () => {
    return fetch(globalThis.location.href)
      .then((res) => {
        if (!res.ok) throw new Error("request subtitle error");
        return res.text();
      })
      .then((t) =>
        (new window.DOMParser())
          .parseFromString(t, "text/html")
      )
      .then((t) => {
        const n = [...t.body.querySelectorAll(":scope > script")].find(
          (t) => t.textContent.includes("ytInitialPlayerResponse"),
        );
        return new Function(
          \`const window = {}; \${n.textContent}; return ytInitialPlayerResponse;\`,
        )();
      }).catch((e) => {
        return null;
      });
  };

  const reloadSubtitles = ({ selector, force }) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const video = document.querySelector(selector || \`.html5-video-player\`);
      if (!video || !video.toggleSubtitles) {
        reloadSubtitles({ selector, force });
        return;
      }
      video.toggleSubtitles();
      video.toggleSubtitles();
    }, 300);
  };

  globalThis.addEventListener("message", ({ data }) => {
    if (data.type == "youtube-reload-subtitles") {
      reloadSubtitles(data);
    }
    if (data.type === "youtube-initial-player-request") {
      getYTInitialPlayerResponse(data.text).then((res) => {
        globalThis.postMessage({
          type: "youtube-initial-player-response",
          text: res,
          id: data.id,
        });
      });
    }
  });
})();
`,PDF_VIEWER_URL:"https://app.immersivetranslate.com/pdf/",OPTIONS_URL:"https://dash.immersivetranslate.com/",EBOOK_VIEWER_URL:"https://app.immersivetranslate.com/ebook/",EBOOK_BUILDER_URL:"https://app.immersivetranslate.com/ebook/make/",SUBTITLE_BUILDER_URL:"https://app.immersivetranslate.com/subtitle/",HTML_VIEWER_URL:"https://app.immersivetranslate.com/html/",MOCK:"0",DEBUG:"0",INSTALL_FROM:"dev"};var qi=Object.create,kr=Object.defineProperty,Wi=Object.getOwnPropertyDescriptor,Pn=Object.getOwnPropertyNames,Ki=Object.getPrototypeOf,Hi=Object.prototype.hasOwnProperty,Gi=(e,t)=>function(){return t||(0,e[Pn(e)[0]])((t={exports:{}}).exports,t),t.exports},zi=(e,t)=>{for(var r in t)kr(e,r,{get:t[r],enumerable:!0})},Ar=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Pn(t))!Hi.call(e,a)&&a!==r&&kr(e,a,{get:()=>t[a],enumerable:!(n=Wi(t,a))||n.enumerable});return e},Vi=(e,t,r)=>(Ar(e,t,"default"),r&&Ar(r,t,"default")),Ln=(e,t,r)=>(r=e!=null?qi(Ki(e)):{},Ar(t||!e||!e.__esModule?kr(r,"default",{value:e,enumerable:!0}):r,e)),Rn=Gi({"../esmd/npm/webextension-polyfill@0.10.0/node_modules/webextension-polyfill/dist/browser-polyfill.js"(e,t){(function(r,n){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],n);else if(typeof e<"u")n(t);else{var a={exports:{}};n(a),r.browser=a.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:e,function(r){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let n="The message port closed before a response was received.",a=i=>{let o={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(o).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class l extends WeakMap{constructor(h,x=void 0){super(x),this.createItem=h}get(h){return this.has(h)||this.set(h,this.createItem(h)),super.get(h)}}let s=C=>C&&typeof C=="object"&&typeof C.then=="function",c=(C,h)=>(...x)=>{i.runtime.lastError?C.reject(new Error(i.runtime.lastError.message)):h.singleCallbackArg||x.length<=1&&h.singleCallbackArg!==!1?C.resolve(x[0]):C.resolve(x)},u=C=>C==1?"argument":"arguments",m=(C,h)=>function(w,...I){if(I.length<h.minArgs)throw new Error(`Expected at least ${h.minArgs} ${u(h.minArgs)} for ${C}(), got ${I.length}`);if(I.length>h.maxArgs)throw new Error(`Expected at most ${h.maxArgs} ${u(h.maxArgs)} for ${C}(), got ${I.length}`);return new Promise((E,W)=>{if(h.fallbackToNoCallback)try{w[C](...I,c({resolve:E,reject:W},h))}catch{w[C](...I),h.fallbackToNoCallback=!1,h.noCallback=!0,E()}else h.noCallback?(w[C](...I),E()):w[C](...I,c({resolve:E,reject:W},h))})},p=(C,h,x)=>new Proxy(h,{apply(w,I,E){return x.call(I,C,...E)}}),T=Function.call.bind(Object.prototype.hasOwnProperty),k=(C,h={},x={})=>{let w=Object.create(null),I={has(W,M){return M in C||M in w},get(W,M,J){if(M in w)return w[M];if(!(M in C))return;let K=C[M];if(typeof K=="function")if(typeof h[M]=="function")K=p(C,C[M],h[M]);else if(T(x,M)){let ye=m(M,x[M]);K=p(C,C[M],ye)}else K=K.bind(C);else if(typeof K=="object"&&K!==null&&(T(h,M)||T(x,M)))K=k(K,h[M],x[M]);else if(T(x,"*"))K=k(K,h[M],x["*"]);else return Object.defineProperty(w,M,{configurable:!0,enumerable:!0,get(){return C[M]},set(ye){C[M]=ye}}),K;return w[M]=K,K},set(W,M,J,K){return M in w?w[M]=J:C[M]=J,!0},defineProperty(W,M,J){return Reflect.defineProperty(w,M,J)},deleteProperty(W,M){return Reflect.deleteProperty(w,M)}},E=Object.create(C);return new Proxy(E,I)},Q=C=>({addListener(h,x,...w){h.addListener(C.get(x),...w)},hasListener(h,x){return h.hasListener(C.get(x))},removeListener(h,x){h.removeListener(C.get(x))}}),B=new l(C=>typeof C!="function"?C:function(x){let w=k(x,{},{getContent:{minArgs:0,maxArgs:0}});C(w)}),g=new l(C=>typeof C!="function"?C:function(x,w,I){let E=!1,W,M=new Promise(te=>{W=function(A){E=!0,te(A)}}),J;try{J=C(x,w,W)}catch(te){J=Promise.reject(te)}let K=J!==!0&&s(J);if(J!==!0&&!K&&!E)return!1;let ye=te=>{te.then(A=>{I(A)},A=>{let V;A&&(A instanceof Error||typeof A.message=="string")?V=A.message:V="An unexpected error occurred",I({__mozWebExtensionPolyfillReject__:!0,message:V})}).catch(A=>{})};return ye(K?J:M),!0}),le=({reject:C,resolve:h},x)=>{i.runtime.lastError?i.runtime.lastError.message===n?h():C(new Error(i.runtime.lastError.message)):x&&x.__mozWebExtensionPolyfillReject__?C(new Error(x.message)):h(x)},D=(C,h,x,...w)=>{if(w.length<h.minArgs)throw new Error(`Expected at least ${h.minArgs} ${u(h.minArgs)} for ${C}(), got ${w.length}`);if(w.length>h.maxArgs)throw new Error(`Expected at most ${h.maxArgs} ${u(h.maxArgs)} for ${C}(), got ${w.length}`);return new Promise((I,E)=>{let W=le.bind(null,{resolve:I,reject:E});w.push(W),x.sendMessage(...w)})},X={devtools:{network:{onRequestFinished:Q(B)}},runtime:{onMessage:Q(g),onMessageExternal:Q(g),sendMessage:D.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:D.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},se={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return o.privacy={network:{"*":se},services:{"*":se},websites:{"*":se}},k(i,X,o)};r.exports=a(chrome)}else r.exports=globalThis.browser})}}),Mn={};zi(Mn,{default:()=>Qt});var $i=Ln(Rn());Vi(Mn,Ln(Rn()));var{default:En,...Yi}=$i,Qt=En!==void 0?En:Yi;globalThis.immersiveTranslateBrowserAPI=Qt;function Mt(){let e,t="pending",r=new Promise((n,a)=>{e={async resolve(i){await i,t="fulfilled",n(i)},reject(i){t="rejected",a(i)}}});return Object.defineProperty(r,"state",{get:()=>t}),Object.assign(r,e)}function _r(e,t={}){let{signal:r,persistent:n}=t;return r?.aborted?Promise.reject(new DOMException("Delay was aborted.","AbortError")):new Promise((a,i)=>{let o=()=>{clearTimeout(s),i(new DOMException("Delay was aborted.","AbortError"))},s=setTimeout(()=>{r?.removeEventListener("abort",o),a()},e);if(r?.addEventListener("abort",o,{once:!0}),n===!1)try{Deno.unrefTimer(s)}catch(c){if(!(c instanceof ReferenceError))throw c}})}var In=class{#e=0;#t=[];#r=[];#n=Mt();add(t){++this.#e,this.#a(t[Symbol.asyncIterator]())}async#a(t){try{let{value:r,done:n}=await t.next();n?--this.#e:this.#t.push({iterator:t,value:r})}catch(r){this.#r.push(r)}this.#n.resolve()}async*iterate(){for(;this.#e>0;){await this.#n;for(let t=0;t<this.#t.length;t++){let{iterator:r,value:n}=this.#t[t];yield n,this.#a(r)}if(this.#r.length){for(let t of this.#r)throw t;this.#r.length=0}this.#t.length=0,this.#n=Mt()}}[Symbol.asyncIterator](){return this.iterate()}};var Ge={};Fi(Ge,{bgBlack:()=>So,bgBlue:()=>Co,bgBrightBlack:()=>Ro,bgBrightBlue:()=>Do,bgBrightCyan:()=>Bo,bgBrightGreen:()=>Io,bgBrightMagenta:()=>Oo,bgBrightRed:()=>Mo,bgBrightWhite:()=>Uo,bgBrightYellow:()=>No,bgCyan:()=>Po,bgGreen:()=>ko,bgMagenta:()=>Eo,bgRed:()=>Ao,bgRgb24:()=>Wo,bgRgb8:()=>jo,bgWhite:()=>Lo,bgYellow:()=>_o,black:()=>oo,blue:()=>uo,bold:()=>Zi,brightBlack:()=>On,brightBlue:()=>To,brightCyan:()=>xo,brightGreen:()=>bo,brightMagenta:()=>wo,brightRed:()=>fo,brightWhite:()=>vo,brightYellow:()=>yo,cyan:()=>go,dim:()=>eo,getColorEnabled:()=>Xi,gray:()=>ho,green:()=>lo,hidden:()=>ao,inverse:()=>no,italic:()=>to,magenta:()=>mo,red:()=>so,reset:()=>Ji,rgb24:()=>qo,rgb8:()=>Fo,setColorEnabled:()=>Qi,strikethrough:()=>io,stripColor:()=>Ho,underline:()=>ro,white:()=>po,yellow:()=>co});var{Deno:Nn}=globalThis,Dn=typeof Nn?.noColor=="boolean"?Nn.noColor:!0,Cr=!Dn;function Qi(e){Dn||(Cr=e)}function Xi(){return Cr}function G(e,t){return{open:`\x1B[${e.join(";")}m`,close:`\x1B[${t}m`,regexp:new RegExp(`\\x1b\\[${t}m`,"g")}}function z(e,t){return Cr?`${t.open}${e.replace(t.regexp,t.open)}${t.close}`:e}function Ji(e){return z(e,G([0],0))}function Zi(e){return z(e,G([1],22))}function eo(e){return z(e,G([2],22))}function to(e){return z(e,G([3],23))}function ro(e){return z(e,G([4],24))}function no(e){return z(e,G([7],27))}function ao(e){return z(e,G([8],28))}function io(e){return z(e,G([9],29))}function oo(e){return z(e,G([30],39))}function so(e){return z(e,G([31],39))}function lo(e){return z(e,G([32],39))}function co(e){return z(e,G([33],39))}function uo(e){return z(e,G([34],39))}function mo(e){return z(e,G([35],39))}function go(e){return z(e,G([36],39))}function po(e){return z(e,G([37],39))}function ho(e){return On(e)}function On(e){return z(e,G([90],39))}function fo(e){return z(e,G([91],39))}function bo(e){return z(e,G([92],39))}function yo(e){return z(e,G([93],39))}function To(e){return z(e,G([94],39))}function wo(e){return z(e,G([95],39))}function xo(e){return z(e,G([96],39))}function vo(e){return z(e,G([97],39))}function So(e){return z(e,G([40],49))}function Ao(e){return z(e,G([41],49))}function ko(e){return z(e,G([42],49))}function _o(e){return z(e,G([43],49))}function Co(e){return z(e,G([44],49))}function Eo(e){return z(e,G([45],49))}function Po(e){return z(e,G([46],49))}function Lo(e){return z(e,G([47],49))}function Ro(e){return z(e,G([100],49))}function Mo(e){return z(e,G([101],49))}function Io(e){return z(e,G([102],49))}function No(e){return z(e,G([103],49))}function Do(e){return z(e,G([104],49))}function Oo(e){return z(e,G([105],49))}function Bo(e){return z(e,G([106],49))}function Uo(e){return z(e,G([107],49))}function at(e,t=255,r=0){return Math.trunc(Math.max(Math.min(e,t),r))}function Fo(e,t){return z(e,G([38,5,at(t)],39))}function jo(e,t){return z(e,G([48,5,at(t)],49))}function qo(e,t){return typeof t=="number"?z(e,G([38,2,t>>16&255,t>>8&255,t&255],39)):z(e,G([38,2,at(t.r),at(t.g),at(t.b)],39))}function Wo(e,t){return typeof t=="number"?z(e,G([48,2,t>>16&255,t>>8&255,t&255],49)):z(e,G([48,2,at(t.r),at(t.g),at(t.b)],49))}var Ko=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function Ho(e){return e.replace(Ko,"")}var Er=class extends Error{constructor(t,r){super(`Exceeded max retry count (${r})`),this.name="RetryError",this.cause=t}},Go={multiplier:2,maxTimeout:6e4,maxAttempts:5,minTimeout:1e3};async function Pr(e,t){let r={...Go,...t};if(r.maxTimeout>=0&&r.minTimeout>r.maxTimeout)throw new RangeError("minTimeout is greater than maxTimeout");let n=r.minTimeout,a;for(let i=0;i<r.maxAttempts;i++)try{return await e()}catch(o){await new Promise(l=>setTimeout(l,n)),n*=r.multiplier,n=Math.max(n,r.minTimeout),r.maxTimeout>=0&&(n=Math.min(n,r.maxTimeout)),a=o}throw new Er(a,r.maxAttempts)}var mu=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var Xt=globalThis||(typeof window<"u"?window:self),Vo=Object.create,Rr=Object.defineProperty,$o=Object.getOwnPropertyDescriptor,Yo=Object.getOwnPropertyNames,Qo=Object.getPrototypeOf,Xo=Object.prototype.hasOwnProperty,Jo=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Zo=(e,t)=>{for(var r in t)Rr(e,r,{get:t[r],enumerable:!0})},Lr=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Yo(t))!Xo.call(e,a)&&a!==r&&Rr(e,a,{get:()=>t[a],enumerable:!(n=$o(t,a))||n.enumerable});return e},es=(e,t,r)=>(Lr(e,t,"default"),r&&Lr(r,t,"default")),Un=(e,t,r)=>(r=e!=null?Vo(Qo(e)):{},Lr(t||!e||!e.__esModule?Rr(r,"default",{value:e,enumerable:!0}):r,e)),Fn=Jo((e,t)=>{var r="Expected a function",n=NaN,a="[object Symbol]",i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,u=typeof Xt=="object"&&Xt&&Xt.Object===Object&&Xt,m=typeof self=="object"&&self&&self.Object===Object&&self,p=u||m||Function("return this")(),T=Object.prototype,k=T.toString,Q=Math.max,B=Math.min,g=function(){return p.Date.now()};function le(x,w,I){var E,W,M,J,K,ye,te=0,A=!1,V=!1,we=!0;if(typeof x!="function")throw new TypeError(r);w=h(w)||0,X(I)&&(A=!!I.leading,V="maxWait"in I,M=V?Q(h(I.maxWait)||0,w):M,we="trailing"in I?!!I.trailing:we);function ne(U){var j=E,Z=W;return E=W=void 0,te=U,J=x.apply(Z,j),J}function b(U){return te=U,K=setTimeout($,w),A?ne(U):J}function v(U){var j=U-ye,Z=U-te,re=w-j;return V?B(re,M-Z):re}function R(U){var j=U-ye,Z=U-te;return ye===void 0||j>=w||j<0||V&&Z>=M}function $(){var U=g();if(R(U))return F(U);K=setTimeout($,v(U))}function F(U){return K=void 0,we&&E?ne(U):(E=W=void 0,J)}function ce(){K!==void 0&&clearTimeout(K),te=0,E=ye=W=K=void 0}function pe(){return K===void 0?J:F(g())}function de(){var U=g(),j=R(U);if(E=arguments,W=this,ye=U,j){if(K===void 0)return b(ye);if(V)return K=setTimeout($,w),ne(ye)}return K===void 0&&(K=setTimeout($,w)),J}return de.cancel=ce,de.flush=pe,de}function D(x,w,I){var E=!0,W=!0;if(typeof x!="function")throw new TypeError(r);return X(I)&&(E="leading"in I?!!I.leading:E,W="trailing"in I?!!I.trailing:W),le(x,w,{leading:E,maxWait:w,trailing:W})}function X(x){var w=typeof x;return!!x&&(w=="object"||w=="function")}function se(x){return!!x&&typeof x=="object"}function C(x){return typeof x=="symbol"||se(x)&&k.call(x)==a}function h(x){if(typeof x=="number")return x;if(C(x))return n;if(X(x)){var w=typeof x.valueOf=="function"?x.valueOf():x;x=X(w)?w+"":w}if(typeof x!="string")return x===0?x:+x;x=x.replace(i,"");var I=l.test(x);return I||s.test(x)?c(x.slice(2),I?2:8):o.test(x)?n:+x}t.exports=D}),jn={};Zo(jn,{default:()=>Mr});var ts=Un(Fn());es(jn,Un(Fn()));var{default:Bn,...rs}=ts,Mr=Bn!==void 0?Bn:rs;var ns=Object.create,Nr=Object.defineProperty,as=Object.getOwnPropertyDescriptor,is=Object.getOwnPropertyNames,os=Object.getPrototypeOf,ss=Object.prototype.hasOwnProperty,ls=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),cs=(e,t)=>{for(var r in t)Nr(e,r,{get:t[r],enumerable:!0})},Ir=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of is(t))!ss.call(e,a)&&a!==r&&Nr(e,a,{get:()=>t[a],enumerable:!(n=as(t,a))||n.enumerable});return e},us=(e,t,r)=>(Ir(e,t,"default"),r&&Ir(r,t,"default")),Wn=(e,t,r)=>(r=e!=null?ns(os(e)):{},Ir(t||!e||!e.__esModule?Nr(r,"default",{value:e,enumerable:!0}):r,e)),Kn=ls((e,t)=>{(function(r,n){typeof e=="object"&&typeof t=="object"?t.exports=n():typeof define=="function"&&define.amd?define([],n):typeof e=="object"?e.notie=n():r.notie=n()})(e,function(){return function(r){function n(i){if(a[i])return a[i].exports;var o=a[i]={i,l:!1,exports:{}};return r[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var a={};return n.m=r,n.c=a,n.i=function(i){return i},n.d=function(i,o,l){n.o(i,o)||Object.defineProperty(i,o,{configurable:!1,enumerable:!0,get:l})},n.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return n.d(o,"a",o),o},n.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},n.p="",n(n.s=1)}([function(r,n){r.exports=function(a){return a.webpackPolyfill||(a.deprecate=function(){},a.paths=[],a.children||(a.children=[]),Object.defineProperty(a,"loaded",{enumerable:!0,get:function(){return a.l}}),Object.defineProperty(a,"id",{enumerable:!0,get:function(){return a.i}}),a.webpackPolyfill=1),a}},function(r,n,a){"use strict";(function(i){var o,l,s,c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u};(function(u,m){c(n)==="object"&&c(i)==="object"?i.exports=m():(l=[],o=m,s=typeof o=="function"?o.apply(n,l):o,s!==void 0&&(i.exports=s))})(void 0,function(){return function(u){function m(T){if(p[T])return p[T].exports;var k=p[T]={i:T,l:!1,exports:{}};return u[T].call(k.exports,k,k.exports,m),k.l=!0,k.exports}var p={};return m.m=u,m.c=p,m.i=function(T){return T},m.d=function(T,k,Q){m.o(T,k)||Object.defineProperty(T,k,{configurable:!1,enumerable:!0,get:Q})},m.n=function(T){var k=T&&T.__esModule?function(){return T.default}:function(){return T};return m.d(k,"a",k),k},m.o=function(T,k){return Object.prototype.hasOwnProperty.call(T,k)},m.p="",m(m.s=0)}([function(u,m,p){function T(b,v){var R={};for(var $ in b)v.indexOf($)>=0||Object.prototype.hasOwnProperty.call(b,$)&&(R[$]=b[$]);return R}Object.defineProperty(m,"__esModule",{value:!0});var k=typeof Symbol=="function"&&c(Symbol.iterator)==="symbol"?function(b){return typeof b>"u"?"undefined":c(b)}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b>"u"?"undefined":c(b)},Q=Object.assign||function(b){for(var v=1;v<arguments.length;v++){var R=arguments[v];for(var $ in R)Object.prototype.hasOwnProperty.call(R,$)&&(b[$]=R[$])}return b},B={top:"top",bottom:"bottom"},g={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:B.top,force:B.top,confirm:B.top,input:B.top,select:B.bottom,date:B.top}},le=m.setOptions=function(b){g=Q({},g,b,{classes:Q({},g.classes,b.classes),ids:Q({},g.ids,b.ids),positions:Q({},g.positions,b.positions)})},D=function(){return new Promise(function(b){return setTimeout(b,0)})},X=function(b){return new Promise(function(v){return setTimeout(v,1e3*b)})},se=function(){document.activeElement&&document.activeElement.blur()},C=function(){var b="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(v){var R=16*Math.random()|0,$=v==="x"?R:3&R|8;return $.toString(16)});return"notie-"+b},h={1:g.classes.backgroundSuccess,success:g.classes.backgroundSuccess,2:g.classes.backgroundWarning,warning:g.classes.backgroundWarning,3:g.classes.backgroundError,error:g.classes.backgroundError,4:g.classes.backgroundInfo,info:g.classes.backgroundInfo,5:g.classes.backgroundNeutral,neutral:g.classes.backgroundNeutral},x=function(){return g.transitionSelector+" "+g.transitionDuration+"s "+g.transitionCurve},w=function(b){return b.keyCode===13},I=function(b){return b.keyCode===27},E=function(b,v){b.classList.add(g.classes.container),b.style[v]="-10000px",document.body.appendChild(b),b.style[v]="-"+b.offsetHeight+"px",b.listener&&window.addEventListener("keydown",b.listener),D().then(function(){b.style.transition=x(),b.style[v]=0})},W=function(b,v){var R=document.getElementById(b);R&&(R.style[v]="-"+R.offsetHeight+"px",R.listener&&window.removeEventListener("keydown",R.listener),X(g.transitionDuration).then(function(){R.parentNode&&R.parentNode.removeChild(R)}))},M=function(b,v){var R=document.createElement("div");R.id=g.ids.overlay,R.classList.add(g.classes.overlay),R.classList.add(g.classes.backgroundOverlay),R.style.opacity=0,b&&g.overlayClickDismiss&&(R.onclick=function(){W(b.id,v),J()}),document.body.appendChild(R),D().then(function(){R.style.transition=x(),R.style.opacity=g.overlayOpacity})},J=function(){var b=document.getElementById(g.ids.overlay);b.style.opacity=0,X(g.transitionDuration).then(function(){b.parentNode&&b.parentNode.removeChild(b)})},K=m.hideAlerts=function(b){var v=document.getElementsByClassName(g.classes.alert);if(v.length){for(var R=0;R<v.length;R++){var $=v[R];W($.id,$.position)}b&&X(g.transitionDuration).then(function(){return b()})}},ye=m.alert=function(b){var v=b.type,R=v===void 0?4:v,$=b.text,F=b.time,ce=F===void 0?g.alertTime:F,pe=b.stay,de=pe!==void 0&&pe,U=b.position,j=U===void 0?g.positions.alert||j.top:U;se(),K();var Z=document.createElement("div"),re=C();Z.id=re,Z.position=j,Z.classList.add(g.classes.textbox),Z.classList.add(h[R]),Z.classList.add(g.classes.alert),Z.innerHTML='<div class="'+g.classes.textboxInner+'">'+$+"</div>",Z.onclick=function(){return W(re,j)},Z.listener=function(L){(w(L)||I(L))&&K()},E(Z,j),ce&&ce<1&&(ce=1),!de&&ce&&X(ce).then(function(){return W(re,j)})},te=m.force=function(b,v){var R=b.type,$=R===void 0?5:R,F=b.text,ce=b.buttonText,pe=ce===void 0?"OK":ce,de=b.callback,U=b.position,j=U===void 0?g.positions.force||j.top:U;se(),K();var Z=document.createElement("div"),re=C();Z.id=re;var L=document.createElement("div");L.classList.add(g.classes.textbox),L.classList.add(g.classes.backgroundInfo),L.innerHTML='<div class="'+g.classes.textboxInner+'">'+F+"</div>";var H=document.createElement("div");H.classList.add(g.classes.button),H.classList.add(h[$]),H.innerHTML=pe,H.onclick=function(){W(re,j),J(),de?de():v&&v()},Z.appendChild(L),Z.appendChild(H),Z.listener=function(me){w(me)&&H.click()},E(Z,j),M()},A=m.confirm=function(b,v,R){var $=b.text,F=b.submitText,ce=F===void 0?"Yes":F,pe=b.cancelText,de=pe===void 0?"Cancel":pe,U=b.submitCallback,j=b.cancelCallback,Z=b.position,re=Z===void 0?g.positions.confirm||re.top:Z;se(),K();var L=document.createElement("div"),H=C();L.id=H;var me=document.createElement("div");me.classList.add(g.classes.textbox),me.classList.add(g.classes.backgroundInfo),me.innerHTML='<div class="'+g.classes.textboxInner+'">'+$+"</div>";var ae=document.createElement("div");ae.classList.add(g.classes.button),ae.classList.add(g.classes.elementHalf),ae.classList.add(g.classes.backgroundSuccess),ae.innerHTML=ce,ae.onclick=function(){W(H,re),J(),U?U():v&&v()};var N=document.createElement("div");N.classList.add(g.classes.button),N.classList.add(g.classes.elementHalf),N.classList.add(g.classes.backgroundError),N.innerHTML=de,N.onclick=function(){W(H,re),J(),j?j():R&&R()},L.appendChild(me),L.appendChild(ae),L.appendChild(N),L.listener=function(he){w(he)?ae.click():I(he)&&N.click()},E(L,re),M(L,re)},V=function(b,v,R){var $=b.text,F=b.submitText,ce=F===void 0?"Submit":F,pe=b.cancelText,de=pe===void 0?"Cancel":pe,U=b.submitCallback,j=b.cancelCallback,Z=b.position,re=Z===void 0?g.positions.input||re.top:Z,L=T(b,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);se(),K();var H=document.createElement("div"),me=C();H.id=me;var ae=document.createElement("div");ae.classList.add(g.classes.textbox),ae.classList.add(g.classes.backgroundInfo),ae.innerHTML='<div class="'+g.classes.textboxInner+'">'+$+"</div>";var N=document.createElement("input");N.classList.add(g.classes.inputField),N.setAttribute("autocapitalize",L.autocapitalize||"none"),N.setAttribute("autocomplete",L.autocomplete||"off"),N.setAttribute("autocorrect",L.autocorrect||"off"),N.setAttribute("autofocus",L.autofocus||"true"),N.setAttribute("inputmode",L.inputmode||"verbatim"),N.setAttribute("max",L.max||""),N.setAttribute("maxlength",L.maxlength||""),N.setAttribute("min",L.min||""),N.setAttribute("minlength",L.minlength||""),N.setAttribute("placeholder",L.placeholder||""),N.setAttribute("spellcheck",L.spellcheck||"default"),N.setAttribute("step",L.step||"any"),N.setAttribute("type",L.type||"text"),N.value=L.value||"",L.allowed&&(N.oninput=function(){var Te=void 0;if(Array.isArray(L.allowed)){for(var xe="",De=L.allowed,He=0;He<De.length;He++)De[He]==="an"?xe+="0-9a-zA-Z":De[He]==="a"?xe+="a-zA-Z":De[He]==="n"&&(xe+="0-9"),De[He]==="s"&&(xe+=" ");Te=new RegExp("[^"+xe+"]","g")}else k(L.allowed)==="object"&&(Te=L.allowed);N.value=N.value.replace(Te,"")});var he=document.createElement("div");he.classList.add(g.classes.button),he.classList.add(g.classes.elementHalf),he.classList.add(g.classes.backgroundSuccess),he.innerHTML=ce,he.onclick=function(){W(me,re),J(),U?U(N.value):v&&v(N.value)};var ke=document.createElement("div");ke.classList.add(g.classes.button),ke.classList.add(g.classes.elementHalf),ke.classList.add(g.classes.backgroundError),ke.innerHTML=de,ke.onclick=function(){W(me,re),J(),j?j(N.value):R&&R(N.value)},H.appendChild(ae),H.appendChild(N),H.appendChild(he),H.appendChild(ke),H.listener=function(Te){w(Te)?he.click():I(Te)&&ke.click()},E(H,re),N.focus(),M(H,re)};m.input=V;var we=m.select=function(b,v){var R=b.text,$=b.cancelText,F=$===void 0?"Cancel":$,ce=b.cancelCallback,pe=b.choices,de=b.position,U=de===void 0?g.positions.select||U.top:de;se(),K();var j=document.createElement("div"),Z=C();j.id=Z;var re=document.createElement("div");re.classList.add(g.classes.textbox),re.classList.add(g.classes.backgroundInfo),re.innerHTML='<div class="'+g.classes.textboxInner+'">'+R+"</div>",j.appendChild(re),pe.forEach(function(H,me){var ae=H.type,N=ae===void 0?1:ae,he=H.text,ke=H.handler,Te=document.createElement("div");Te.classList.add(h[N]),Te.classList.add(g.classes.button),Te.classList.add(g.classes.selectChoice);var xe=pe[me+1];xe&&!xe.type&&(xe.type=1),xe&&xe.type===N&&Te.classList.add(g.classes.selectChoiceRepeated),Te.innerHTML=he,Te.onclick=function(){W(Z,U),J(),ke()},j.appendChild(Te)});var L=document.createElement("div");L.classList.add(g.classes.backgroundNeutral),L.classList.add(g.classes.button),L.innerHTML=F,L.onclick=function(){W(Z,U),J(),ce?ce():v&&v()},j.appendChild(L),j.listener=function(H){I(H)&&L.click()},E(j,U),M(j,U)},ne=m.date=function(b,v,R){var $=b.value,F=$===void 0?new Date:$,ce=b.submitText,pe=ce===void 0?"OK":ce,de=b.cancelText,U=de===void 0?"Cancel":de,j=b.submitCallback,Z=b.cancelCallback,re=b.position,L=re===void 0?g.positions.date||L.top:re;se(),K();var H="&#9662",me=document.createElement("div"),ae=document.createElement("div"),N=document.createElement("div"),he=function(fe){me.innerHTML=g.dateMonths[fe.getMonth()],ae.innerHTML=fe.getDate(),N.innerHTML=fe.getFullYear()},ke=function(fe){var oe=new Date(F.getFullYear(),F.getMonth()+1,0).getDate(),We=fe.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(We)>oe&&(We=oe.toString()),fe.target.textContent=We,Number(We)<1&&(We="1"),F.setDate(Number(We))},Te=function(fe){var oe=fe.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);fe.target.textContent=oe,F.setFullYear(Number(oe))},xe=function(fe){he(F)},De=function(fe){var oe=new Date(F.getFullYear(),F.getMonth()+fe+1,0).getDate();F.getDate()>oe&&F.setDate(oe),F.setMonth(F.getMonth()+fe),he(F)},He=function(fe){F.setDate(F.getDate()+fe),he(F)},Rt=function(fe){var oe=F.getFullYear()+fe;oe<0?F.setFullYear(0):F.setFullYear(F.getFullYear()+fe),he(F)},Xe=document.createElement("div"),ct=C();Xe.id=ct;var wt=document.createElement("div");wt.classList.add(g.classes.backgroundInfo);var Pe=document.createElement("div");Pe.classList.add(g.classes.dateSelectorInner);var Ve=document.createElement("div");Ve.classList.add(g.classes.button),Ve.classList.add(g.classes.elementThird),Ve.classList.add(g.classes.dateSelectorUp),Ve.innerHTML=H;var Le=document.createElement("div");Le.classList.add(g.classes.button),Le.classList.add(g.classes.elementThird),Le.classList.add(g.classes.dateSelectorUp),Le.innerHTML=H;var qe=document.createElement("div");qe.classList.add(g.classes.button),qe.classList.add(g.classes.elementThird),qe.classList.add(g.classes.dateSelectorUp),qe.innerHTML=H,me.classList.add(g.classes.element),me.classList.add(g.classes.elementThird),me.innerHTML=g.dateMonths[F.getMonth()],ae.classList.add(g.classes.element),ae.classList.add(g.classes.elementThird),ae.setAttribute("contentEditable",!0),ae.addEventListener("input",ke),ae.addEventListener("blur",xe),ae.innerHTML=F.getDate(),N.classList.add(g.classes.element),N.classList.add(g.classes.elementThird),N.setAttribute("contentEditable",!0),N.addEventListener("input",Te),N.addEventListener("blur",xe),N.innerHTML=F.getFullYear();var et=document.createElement("div");et.classList.add(g.classes.button),et.classList.add(g.classes.elementThird),et.innerHTML=H;var tt=document.createElement("div");tt.classList.add(g.classes.button),tt.classList.add(g.classes.elementThird),tt.innerHTML=H;var ut=document.createElement("div");ut.classList.add(g.classes.button),ut.classList.add(g.classes.elementThird),ut.innerHTML=H,Ve.onclick=function(){return De(1)},Le.onclick=function(){return He(1)},qe.onclick=function(){return Rt(1)},et.onclick=function(){return De(-1)},tt.onclick=function(){return He(-1)},ut.onclick=function(){return Rt(-1)};var Oe=document.createElement("div");Oe.classList.add(g.classes.button),Oe.classList.add(g.classes.elementHalf),Oe.classList.add(g.classes.backgroundSuccess),Oe.innerHTML=pe,Oe.onclick=function(){W(ct,L),J(),j?j(F):v&&v(F)};var rt=document.createElement("div");rt.classList.add(g.classes.button),rt.classList.add(g.classes.elementHalf),rt.classList.add(g.classes.backgroundError),rt.innerHTML=U,rt.onclick=function(){W(ct,L),J(),Z?Z(F):R&&R(F)},Pe.appendChild(Ve),Pe.appendChild(Le),Pe.appendChild(qe),Pe.appendChild(me),Pe.appendChild(ae),Pe.appendChild(N),Pe.appendChild(et),Pe.appendChild(tt),Pe.appendChild(ut),wt.appendChild(Pe),Xe.appendChild(wt),Xe.appendChild(Oe),Xe.appendChild(rt),Xe.listener=function(fe){w(fe)?Oe.click():I(fe)&&rt.click()},E(Xe,L),M(Xe,L)};m.default={alert:ye,force:te,confirm:A,input:V,select:we,date:ne,setOptions:le,hideAlerts:K}}])})}).call(n,a(0)(r))}])})}),Hn={};cs(Hn,{default:()=>Jt});var ds=Wn(Kn());us(Hn,Wn(Kn()));var{default:qn,...ms}=ds,Jt=qn!==void 0?qn:ms;var Dr=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Or(e,t,r,n){e.addEventListener?e.addEventListener(t,r,n):e.attachEvent&&e.attachEvent("on".concat(t),function(){r(window.event)})}function Yn(e,t){for(var r=t.slice(0,t.length-1),n=0;n<r.length;n++)r[n]=e[r[n].toLowerCase()];return r}function Qn(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),r=t.lastIndexOf("");r>=0;)t[r-1]+=",",t.splice(r,1),r=t.lastIndexOf("");return t}function gs(e,t){for(var r=e.length>=t.length?e:t,n=e.length>=t.length?t:e,a=!0,i=0;i<r.length;i++)n.indexOf(r[i])===-1&&(a=!1);return a}var Nt={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":Dr?173:189,"=":Dr?61:187,";":Dr?59:186,"'":222,"[":219,"]":221,"\\":220},Ze={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},Fr={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Ee={16:!1,18:!1,17:!1,91:!1},Se={};for(It=1;It<20;It++)Nt["f".concat(It)]=111+It;var It,ge=[],Gn=!1,Xn="all",Jn=[],er=function(e){return Nt[e.toLowerCase()]||Ze[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},ps=function(e){return Object.keys(Nt).find(function(t){return Nt[t]===e})},hs=function(e){return Object.keys(Ze).find(function(t){return Ze[t]===e})};function Zn(e){Xn=e||"all"}function Dt(){return Xn||"all"}function fs(){return ge.slice(0)}function bs(){return ge.map(function(e){return ps(e)||hs(e)||String.fromCharCode(e)})}function ys(e){var t=e.target||e.srcElement,r=t.tagName,n=!0;return(t.isContentEditable||(r==="INPUT"||r==="TEXTAREA"||r==="SELECT")&&!t.readOnly)&&(n=!1),n}function Ts(e){return typeof e=="string"&&(e=er(e)),ge.indexOf(e)!==-1}function ws(e,t){var r,n;e||(e=Dt());for(var a in Se)if(Object.prototype.hasOwnProperty.call(Se,a))for(r=Se[a],n=0;n<r.length;)r[n].scope===e?r.splice(n,1):n++;Dt()===e&&Zn(t||"all")}function xs(e){var t=e.keyCode||e.which||e.charCode,r=ge.indexOf(t);if(r>=0&&ge.splice(r,1),e.key&&e.key.toLowerCase()==="meta"&&ge.splice(0,ge.length),(t===93||t===224)&&(t=91),t in Ee){Ee[t]=!1;for(var n in Ze)Ze[n]===t&&(Je[n]=!1)}}function vs(e){if(typeof e>"u")Object.keys(Se).forEach(function(o){return delete Se[o]});else if(Array.isArray(e))e.forEach(function(o){o.key&&Br(o)});else if(typeof e=="object")e.key&&Br(e);else if(typeof e=="string"){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=r[0],i=r[1];typeof a=="function"&&(i=a,a=""),Br({key:e,scope:a,method:i,splitKey:"+"})}}var Br=function(e){var t=e.key,r=e.scope,n=e.method,a=e.splitKey,i=a===void 0?"+":a,o=Qn(t);o.forEach(function(l){var s=l.split(i),c=s.length,u=s[c-1],m=u==="*"?"*":er(u);if(Se[m]){r||(r=Dt());var p=c>1?Yn(Ze,s):[];Se[m]=Se[m].filter(function(T){var k=n?T.method===n:!0;return!(k&&T.scope===r&&gs(T.mods,p))})}})};function zn(e,t,r,n){if(t.element===n){var a;if(t.scope===r||t.scope==="all"){a=t.mods.length>0;for(var i in Ee)Object.prototype.hasOwnProperty.call(Ee,i)&&(!Ee[i]&&t.mods.indexOf(+i)>-1||Ee[i]&&t.mods.indexOf(+i)===-1)&&(a=!1);(t.mods.length===0&&!Ee[16]&&!Ee[18]&&!Ee[17]&&!Ee[91]||a||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function Vn(e,t){var r=Se["*"],n=e.keyCode||e.which||e.charCode;if(Je.filter.call(this,e)){if((n===93||n===224)&&(n=91),ge.indexOf(n)===-1&&n!==229&&ge.push(n),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(k){var Q=Fr[k];e[k]&&ge.indexOf(Q)===-1?ge.push(Q):!e[k]&&ge.indexOf(Q)>-1?ge.splice(ge.indexOf(Q),1):k==="metaKey"&&e[k]&&ge.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(ge=ge.slice(ge.indexOf(Q))))}),n in Ee){Ee[n]=!0;for(var a in Ze)Ze[a]===n&&(Je[a]=!0);if(!r)return}for(var i in Ee)Object.prototype.hasOwnProperty.call(Ee,i)&&(Ee[i]=e[Fr[i]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(ge.indexOf(17)===-1&&ge.push(17),ge.indexOf(18)===-1&&ge.push(18),Ee[17]=!0,Ee[18]=!0);var o=Dt();if(r)for(var l=0;l<r.length;l++)r[l].scope===o&&(e.type==="keydown"&&r[l].keydown||e.type==="keyup"&&r[l].keyup)&&zn(e,r[l],o,t);if(n in Se){for(var s=0;s<Se[n].length;s++)if((e.type==="keydown"&&Se[n][s].keydown||e.type==="keyup"&&Se[n][s].keyup)&&Se[n][s].key){for(var c=Se[n][s],u=c.splitKey,m=c.key.split(u),p=[],T=0;T<m.length;T++)p.push(er(m[T]));p.sort().join("")===ge.sort().join("")&&zn(e,c,o,t)}}}}function Ss(e){return Jn.indexOf(e)>-1}function Je(e,t,r){ge=[];var n=Qn(e),a=[],i="all",o=document,l=0,s=!1,c=!0,u="+",m=!1;for(r===void 0&&typeof t=="function"&&(r=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(i=t.scope),t.element&&(o=t.element),t.keyup&&(s=t.keyup),t.keydown!==void 0&&(c=t.keydown),t.capture!==void 0&&(m=t.capture),typeof t.splitKey=="string"&&(u=t.splitKey)),typeof t=="string"&&(i=t);l<n.length;l++)e=n[l].split(u),a=[],e.length>1&&(a=Yn(Ze,e)),e=e[e.length-1],e=e==="*"?"*":er(e),e in Se||(Se[e]=[]),Se[e].push({keyup:s,keydown:c,scope:i,mods:a,shortcut:n[l],method:r,key:n[l],splitKey:u,element:o});typeof o<"u"&&!Ss(o)&&window&&(Jn.push(o),Or(o,"keydown",function(p){Vn(p,o)},m),Gn||(Gn=!0,Or(window,"focus",function(){ge=[]},m)),Or(o,"keyup",function(p){Vn(p,o),xs(p)},m))}function As(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(Se).forEach(function(r){var n=Se[r].filter(function(a){return a.scope===t&&a.shortcut===e});n.forEach(function(a){a&&a.method&&a.method()})})}var Ur={getPressedKeyString:bs,setScope:Zn,getScope:Dt,deleteScope:ws,getPressedKeyCodes:fs,isPressed:Ts,filter:ys,trigger:As,unbind:vs,keyMap:Nt,modifier:Ze,modifierMap:Fr};for(Zt in Ur)Object.prototype.hasOwnProperty.call(Ur,Zt)&&(Je[Zt]=Ur[Zt]);var Zt;typeof document<"u"&&($n=window.hotkeys,Je.noConflict=function(e){return e&&window.hotkeys===Je&&(window.hotkeys=$n),Je},window.hotkeys=Je);var $n;var ks={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},ta={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},ve={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},Ue={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},it={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"},y=class{static getFirstMatch(e,t){let r=t.match(e);return r&&r.length>0&&r[1]||""}static getSecondMatch(e,t){let r=t.match(e);return r&&r.length>1&&r[2]||""}static matchAndReturnConst(e,t,r){if(e.test(t))return r}static getWindowsVersionName(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(e){let t=e.split(".").splice(0,2).map(r=>parseInt(r,10)||0);if(t.push(0),t[0]===10)switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(e){let t=e.split(".").splice(0,2).map(r=>parseInt(r,10)||0);if(t.push(0),!(t[0]===1&&t[1]<5)){if(t[0]===1&&t[1]<6)return"Cupcake";if(t[0]===1&&t[1]>=6)return"Donut";if(t[0]===2&&t[1]<2)return"Eclair";if(t[0]===2&&t[1]===2)return"Froyo";if(t[0]===2&&t[1]>2)return"Gingerbread";if(t[0]===3)return"Honeycomb";if(t[0]===4&&t[1]<1)return"Ice Cream Sandwich";if(t[0]===4&&t[1]<4)return"Jelly Bean";if(t[0]===4&&t[1]>=4)return"KitKat";if(t[0]===5)return"Lollipop";if(t[0]===6)return"Marshmallow";if(t[0]===7)return"Nougat";if(t[0]===8)return"Oreo";if(t[0]===9)return"Pie"}}static getVersionPrecision(e){return e.split(".").length}static compareVersions(e,t,r=!1){let n=y.getVersionPrecision(e),a=y.getVersionPrecision(t),i=Math.max(n,a),o=0,l=y.map([e,t],s=>{let c=i-y.getVersionPrecision(s),u=s+new Array(c+1).join(".0");return y.map(u.split("."),m=>new Array(20-m.length).join("0")+m).reverse()});for(r&&(o=i-Math.min(n,a)),i-=1;i>=o;){if(l[0][i]>l[1][i])return 1;if(l[0][i]===l[1][i]){if(i===o)return 0;i-=1}else if(l[0][i]<l[1][i])return-1}}static map(e,t){let r=[],n;if(Array.prototype.map)return Array.prototype.map.call(e,t);for(n=0;n<e.length;n+=1)r.push(t(e[n]));return r}static find(e,t){let r,n;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(r=0,n=e.length;r<n;r+=1){let a=e[r];if(t(a,r))return a}}static assign(e,...t){let r=e,n,a;if(Object.assign)return Object.assign(e,...t);for(n=0,a=t.length;n<a;n+=1){let i=t[n];typeof i=="object"&&i!==null&&Object.keys(i).forEach(o=>{r[o]=i[o]})}return e}static getBrowserAlias(e){return ks[e]}static getBrowserTypeByAlias(e){return ta[e]||""}},ue=/version\/(\d+(\.?_?\d+)+)/i,_s=[{test:[/googlebot/i],describe(e){let t={name:"Googlebot"},r=y.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||y.getFirstMatch(ue,e);return r&&(t.version=r),t}},{test:[/opera/i],describe(e){let t={name:"Opera"},r=y.getFirstMatch(ue,e)||y.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe(e){let t={name:"Opera"},r=y.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||y.getFirstMatch(ue,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe(e){let t={name:"Samsung Internet for Android"},r=y.getFirstMatch(ue,e)||y.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe(e){let t={name:"NAVER Whale Browser"},r=y.getFirstMatch(ue,e)||y.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe(e){let t={name:"MZ Browser"},r=y.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||y.getFirstMatch(ue,e);return r&&(t.version=r),t}},{test:[/focus/i],describe(e){let t={name:"Focus"},r=y.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||y.getFirstMatch(ue,e);return r&&(t.version=r),t}},{test:[/swing/i],describe(e){let t={name:"Swing"},r=y.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||y.getFirstMatch(ue,e);return r&&(t.version=r),t}},{test:[/coast/i],describe(e){let t={name:"Opera Coast"},r=y.getFirstMatch(ue,e)||y.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(e){let t={name:"Opera Touch"},r=y.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||y.getFirstMatch(ue,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe(e){let t={name:"Yandex Browser"},r=y.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||y.getFirstMatch(ue,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe(e){let t={name:"UC Browser"},r=y.getFirstMatch(ue,e)||y.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe(e){let t={name:"Maxthon"},r=y.getFirstMatch(ue,e)||y.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe(e){let t={name:"Epiphany"},r=y.getFirstMatch(ue,e)||y.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe(e){let t={name:"Puffin"},r=y.getFirstMatch(ue,e)||y.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe(e){let t={name:"Sleipnir"},r=y.getFirstMatch(ue,e)||y.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe(e){let t={name:"K-Meleon"},r=y.getFirstMatch(ue,e)||y.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe(e){let t={name:"WeChat"},r=y.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||y.getFirstMatch(ue,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe(e){let t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=y.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||y.getFirstMatch(ue,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe(e){let t={name:"Internet Explorer"},r=y.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe(e){let t={name:"Microsoft Edge"},r=y.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe(e){let t={name:"Microsoft Edge"},r=y.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe(e){let t={name:"Vivaldi"},r=y.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe(e){let t={name:"SeaMonkey"},r=y.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe(e){let t={name:"Sailfish"},r=y.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe(e){let t={name:"Amazon Silk"},r=y.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe(e){let t={name:"PhantomJS"},r=y.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe(e){let t={name:"SlimerJS"},r=y.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(e){let t={name:"BlackBerry"},r=y.getFirstMatch(ue,e)||y.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe(e){let t={name:"WebOS Browser"},r=y.getFirstMatch(ue,e)||y.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe(e){let t={name:"Bada"},r=y.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe(e){let t={name:"Tizen"},r=y.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||y.getFirstMatch(ue,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe(e){let t={name:"QupZilla"},r=y.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||y.getFirstMatch(ue,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe(e){let t={name:"Firefox"},r=y.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe(e){let t={name:"Electron"},r=y.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MiuiBrowser/i],describe(e){let t={name:"Miui"},r=y.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe(e){let t={name:"Chromium"},r=y.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||y.getFirstMatch(ue,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe(e){let t={name:"Chrome"},r=y.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe(e){let t={name:"Google Search"},r=y.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test(e){let t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe(e){let t={name:"Android Browser"},r=y.getFirstMatch(ue,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe(e){let t={name:"PlayStation 4"},r=y.getFirstMatch(ue,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe(e){let t={name:"Safari"},r=y.getFirstMatch(ue,e);return r&&(t.version=r),t}},{test:[/.*/i],describe(e){let t=/^(.*)\/(.*) /,r=/^(.*)\/(.*)[ \t]\((.*)/,n=e.search("\\(")!==-1?r:t;return{name:y.getFirstMatch(n,e),version:y.getSecondMatch(n,e)}}}],Cs=_s,Es=[{test:[/Roku\/DVP/],describe(e){let t=y.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:Ue.Roku,version:t}}},{test:[/windows phone/i],describe(e){let t=y.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:Ue.WindowsPhone,version:t}}},{test:[/windows /i],describe(e){let t=y.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=y.getWindowsVersionName(t);return{name:Ue.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(e){let t={name:Ue.iOS},r=y.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return r&&(t.version=r),t}},{test:[/macintosh/i],describe(e){let t=y.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=y.getMacOSVersionName(t),n={name:Ue.MacOS,version:t};return r&&(n.versionName=r),n}},{test:[/(ipod|iphone|ipad)/i],describe(e){let t=y.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:Ue.iOS,version:t}}},{test(e){let t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe(e){let t=y.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=y.getAndroidVersionName(t),n={name:Ue.Android,version:t};return r&&(n.versionName=r),n}},{test:[/(web|hpw)[o0]s/i],describe(e){let t=y.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:Ue.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(e){let t=y.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||y.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||y.getFirstMatch(/\bbb(\d+)/i,e);return{name:Ue.BlackBerry,version:t}}},{test:[/bada/i],describe(e){let t=y.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:Ue.Bada,version:t}}},{test:[/tizen/i],describe(e){let t=y.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:Ue.Tizen,version:t}}},{test:[/linux/i],describe(){return{name:Ue.Linux}}},{test:[/CrOS/],describe(){return{name:Ue.ChromeOS}}},{test:[/PlayStation 4/],describe(e){let t=y.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:Ue.PlayStation4,version:t}}}],Ps=[{test:[/googlebot/i],describe(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe(e){let t=y.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:ve.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe(){return{type:ve.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe(){return{type:ve.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(){return{type:ve.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe(){return{type:ve.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe(){return{type:ve.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe(){return{type:ve.tablet}}},{test(e){let t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe(e){let t=y.getFirstMatch(/(ipod|iphone)/i,e);return{type:ve.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe(){return{type:ve.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe(){return{type:ve.mobile}}},{test(e){return e.getBrowserName(!0)==="blackberry"},describe(){return{type:ve.mobile,vendor:"BlackBerry"}}},{test(e){return e.getBrowserName(!0)==="bada"},describe(){return{type:ve.mobile}}},{test(e){return e.getBrowserName()==="windows phone"},describe(){return{type:ve.mobile,vendor:"Microsoft"}}},{test(e){let t=Number(String(e.getOSVersion()).split(".")[0]);return e.getOSName(!0)==="android"&&t>=3},describe(){return{type:ve.tablet}}},{test(e){return e.getOSName(!0)==="android"},describe(){return{type:ve.mobile}}},{test(e){return e.getOSName(!0)==="macos"},describe(){return{type:ve.desktop,vendor:"Apple"}}},{test(e){return e.getOSName(!0)==="windows"},describe(){return{type:ve.desktop}}},{test(e){return e.getOSName(!0)==="linux"},describe(){return{type:ve.desktop}}},{test(e){return e.getOSName(!0)==="playstation 4"},describe(){return{type:ve.tv}}},{test(e){return e.getOSName(!0)==="roku"},describe(){return{type:ve.tv}}}],Ls=[{test(e){return e.getBrowserName(!0)==="microsoft edge"},describe(e){if(/\sedg\//i.test(e))return{name:it.Blink};let t=y.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:it.EdgeHTML,version:t}}},{test:[/trident/i],describe(e){let t={name:it.Trident},r=y.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test(e){return e.test(/presto/i)},describe(e){let t={name:it.Presto},r=y.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test(e){let t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe(e){let t={name:it.Gecko},r=y.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe(){return{name:it.Blink}}},{test:[/(apple)?webkit/i],describe(e){let t={name:it.WebKit},r=y.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}],Rs=class{constructor(e,t=!1){if(e==null||e==="")throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},t!==!0&&this.parse()}getUA(){return this._ua}test(e){return e.test(this._ua)}parseBrowser(){this.parsedResult.browser={};let e=y.find(Cs,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(r=>this.test(r));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.browser=e.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};let e=y.find(Es,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(r=>this.test(r));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.os=e.describe(this.getUA())),this.parsedResult.os}getOSName(e){let{name:t}=this.getOS();return e?String(t).toLowerCase()||"":t||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(e=!1){let{type:t}=this.getPlatform();return e?String(t).toLowerCase()||"":t||""}parsePlatform(){this.parsedResult.platform={};let e=y.find(Ps,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(r=>this.test(r));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.platform=e.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};let e=y.find(Ls,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(r=>this.test(r));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.engine=e.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return y.assign({},this.parsedResult)}satisfies(e){let t={},r=0,n={},a=0;if(Object.keys(e).forEach(i=>{let o=e[i];typeof o=="string"?(n[i]=o,a+=1):typeof o=="object"&&(t[i]=o,r+=1)}),r>0){let i=Object.keys(t),o=y.find(i,s=>this.isOS(s));if(o){let s=this.satisfies(t[o]);if(s!==void 0)return s}let l=y.find(i,s=>this.isPlatform(s));if(l){let s=this.satisfies(t[l]);if(s!==void 0)return s}}if(a>0){let i=Object.keys(n),o=y.find(i,l=>this.isBrowser(l,!0));if(o!==void 0)return this.compareVersion(n[o])}}isBrowser(e,t=!1){let r=this.getBrowserName().toLowerCase(),n=e.toLowerCase(),a=y.getBrowserTypeByAlias(n);return t&&a&&(n=a.toLowerCase()),n===r}compareVersion(e){let t=[0],r=e,n=!1,a=this.getBrowserVersion();if(typeof a=="string")return e[0]===">"||e[0]==="<"?(r=e.substr(1),e[1]==="="?(n=!0,r=e.substr(2)):t=[],e[0]===">"?t.push(1):t.push(-1)):e[0]==="="?r=e.substr(1):e[0]==="~"&&(n=!0,r=e.substr(1)),t.indexOf(y.compareVersions(a,r,n))>-1}isOS(e){return this.getOSName(!0)===String(e).toLowerCase()}isPlatform(e){return this.getPlatformType(!0)===String(e).toLowerCase()}isEngine(e){return this.getEngineName(!0)===String(e).toLowerCase()}is(e,t=!1){return this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)}some(e=[]){return e.some(t=>this.is(t))}},ea=Rs,Ms=class{static getParser(e,t=!1){if(typeof e!="string")throw new Error("UserAgent should be a string");return new ea(e,t)}static parse(e){return new ea(e).getResult()}static get BROWSER_MAP(){return ta}static get ENGINE_MAP(){return it}static get OS_MAP(){return Ue}static get PLATFORMS_MAP(){return ve}},tr=Ms;var{entries:ca,setPrototypeOf:ra,isFrozen:Is,getPrototypeOf:Ns,getOwnPropertyDescriptor:Ds}=Object,{freeze:Fe,seal:Ye,create:Os}=Object,{apply:Gr,construct:zr}=typeof Reflect<"u"&&Reflect;Gr||(Gr=function(e,t,r){return e.apply(t,r)});Fe||(Fe=function(e){return e});Ye||(Ye=function(e){return e});zr||(zr=function(e,t){return new e(...t)});var Bs=ze(Array.prototype.forEach),na=ze(Array.prototype.pop),Ot=ze(Array.prototype.push),ar=ze(String.prototype.toLowerCase),jr=ze(String.prototype.toString),Us=ze(String.prototype.match),$e=ze(String.prototype.replace),Fs=ze(String.prototype.indexOf),js=ze(String.prototype.trim),Ke=ze(RegExp.prototype.test),Bt=qs(TypeError);function ze(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return Gr(e,t,n)}}function qs(e){return function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return zr(e,r)}}function ee(e,t,r){var n;r=(n=r)!==null&&n!==void 0?n:ar,ra&&ra(e,null);let a=t.length;for(;a--;){let i=t[a];if(typeof i=="string"){let o=r(i);o!==i&&(Is(t)||(t[a]=o),i=o)}e[i]=!0}return e}function St(e){let t=Os(null);for(let[r,n]of ca(e))t[r]=n;return t}function rr(e,t){for(;e!==null;){let n=Ds(e,t);if(n){if(n.get)return ze(n.get);if(typeof n.value=="function")return ze(n.value)}e=Ns(e)}function r(n){return null}return r}var aa=Fe(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),qr=Fe(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Wr=Fe(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ws=Fe(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Kr=Fe(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Ks=Fe(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ia=Fe(["#text"]),oa=Fe(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Hr=Fe(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),sa=Fe(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),nr=Fe(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Hs=Ye(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Gs=Ye(/<%[\w\W]*|[\w\W]*%>/gm),zs=Ye(/\${[\w\W]*}/gm),Vs=Ye(/^data-[\-\w.\u00B7-\uFFFF]/),$s=Ye(/^aria-[\-\w]+$/),ua=Ye(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ys=Ye(/^(?:\w+script|data):/i),Qs=Ye(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),da=Ye(/^html$/i),la=Object.freeze({__proto__:null,MUSTACHE_EXPR:Hs,ERB_EXPR:Gs,TMPLIT_EXPR:zs,DATA_ATTR:Vs,ARIA_ATTR:$s,IS_ALLOWED_URI:ua,IS_SCRIPT_OR_DATA:Ys,ATTR_WHITESPACE:Qs,DOCTYPE_NAME:da}),Xs=()=>typeof window>"u"?null:window,Js=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null,n="data-tt-policy-suffix";t&&t.hasAttribute(n)&&(r=t.getAttribute(n));let a="dompurify"+(r?"#"+r:"");try{return e.createPolicy(a,{createHTML(i){return i},createScriptURL(i){return i}})}catch{return null}};function ma(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Xs(),t=d=>ma(d);if(t.version="3.0.3",t.removed=[],!e||!e.document||e.document.nodeType!==9)return t.isSupported=!1,t;let r=e.document,n=r.currentScript,{document:a}=e,{DocumentFragment:i,HTMLTemplateElement:o,Node:l,Element:s,NodeFilter:c,NamedNodeMap:u=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:m,DOMParser:p,trustedTypes:T}=e,k=s.prototype,Q=rr(k,"cloneNode"),B=rr(k,"nextSibling"),g=rr(k,"childNodes"),le=rr(k,"parentNode");if(typeof o=="function"){let d=a.createElement("template");d.content&&d.content.ownerDocument&&(a=d.content.ownerDocument)}let D,X="",{implementation:se,createNodeIterator:C,createDocumentFragment:h,getElementsByTagName:x}=a,{importNode:w}=r,I={};t.isSupported=typeof ca=="function"&&typeof le=="function"&&se&&se.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:E,ERB_EXPR:W,TMPLIT_EXPR:M,DATA_ATTR:J,ARIA_ATTR:K,IS_SCRIPT_OR_DATA:ye,ATTR_WHITESPACE:te}=la,{IS_ALLOWED_URI:A}=la,V=null,we=ee({},[...aa,...qr,...Wr,...Kr,...ia]),ne=null,b=ee({},[...oa,...Hr,...sa,...nr]),v=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),R=null,$=null,F=!0,ce=!0,pe=!1,de=!0,U=!1,j=!1,Z=!1,re=!1,L=!1,H=!1,me=!1,ae=!0,N=!1,he="user-content-",ke=!0,Te=!1,xe={},De=null,He=ee({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Rt=null,Xe=ee({},["audio","video","img","source","image","track"]),ct=null,wt=ee({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Pe="http://www.w3.org/1998/Math/MathML",Ve="http://www.w3.org/2000/svg",Le="http://www.w3.org/1999/xhtml",qe=Le,et=!1,tt=null,ut=ee({},[Pe,Ve,Le],jr),Oe,rt=["application/xhtml+xml","text/html"],fe="text/html",oe,We=null,Ii=a.createElement("form"),yn=function(d){return d instanceof RegExp||d instanceof Function},xr=function(d){if(!(We&&We===d)){if((!d||typeof d!="object")&&(d={}),d=St(d),Oe=rt.indexOf(d.PARSER_MEDIA_TYPE)===-1?Oe=fe:Oe=d.PARSER_MEDIA_TYPE,oe=Oe==="application/xhtml+xml"?jr:ar,V="ALLOWED_TAGS"in d?ee({},d.ALLOWED_TAGS,oe):we,ne="ALLOWED_ATTR"in d?ee({},d.ALLOWED_ATTR,oe):b,tt="ALLOWED_NAMESPACES"in d?ee({},d.ALLOWED_NAMESPACES,jr):ut,ct="ADD_URI_SAFE_ATTR"in d?ee(St(wt),d.ADD_URI_SAFE_ATTR,oe):wt,Rt="ADD_DATA_URI_TAGS"in d?ee(St(Xe),d.ADD_DATA_URI_TAGS,oe):Xe,De="FORBID_CONTENTS"in d?ee({},d.FORBID_CONTENTS,oe):He,R="FORBID_TAGS"in d?ee({},d.FORBID_TAGS,oe):{},$="FORBID_ATTR"in d?ee({},d.FORBID_ATTR,oe):{},xe="USE_PROFILES"in d?d.USE_PROFILES:!1,F=d.ALLOW_ARIA_ATTR!==!1,ce=d.ALLOW_DATA_ATTR!==!1,pe=d.ALLOW_UNKNOWN_PROTOCOLS||!1,de=d.ALLOW_SELF_CLOSE_IN_ATTR!==!1,U=d.SAFE_FOR_TEMPLATES||!1,j=d.WHOLE_DOCUMENT||!1,L=d.RETURN_DOM||!1,H=d.RETURN_DOM_FRAGMENT||!1,me=d.RETURN_TRUSTED_TYPE||!1,re=d.FORCE_BODY||!1,ae=d.SANITIZE_DOM!==!1,N=d.SANITIZE_NAMED_PROPS||!1,ke=d.KEEP_CONTENT!==!1,Te=d.IN_PLACE||!1,A=d.ALLOWED_URI_REGEXP||ua,qe=d.NAMESPACE||Le,v=d.CUSTOM_ELEMENT_HANDLING||{},d.CUSTOM_ELEMENT_HANDLING&&yn(d.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(v.tagNameCheck=d.CUSTOM_ELEMENT_HANDLING.tagNameCheck),d.CUSTOM_ELEMENT_HANDLING&&yn(d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(v.attributeNameCheck=d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),d.CUSTOM_ELEMENT_HANDLING&&typeof d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(v.allowCustomizedBuiltInElements=d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),U&&(ce=!1),H&&(L=!0),xe&&(V=ee({},[...ia]),ne=[],xe.html===!0&&(ee(V,aa),ee(ne,oa)),xe.svg===!0&&(ee(V,qr),ee(ne,Hr),ee(ne,nr)),xe.svgFilters===!0&&(ee(V,Wr),ee(ne,Hr),ee(ne,nr)),xe.mathMl===!0&&(ee(V,Kr),ee(ne,sa),ee(ne,nr))),d.ADD_TAGS&&(V===we&&(V=St(V)),ee(V,d.ADD_TAGS,oe)),d.ADD_ATTR&&(ne===b&&(ne=St(ne)),ee(ne,d.ADD_ATTR,oe)),d.ADD_URI_SAFE_ATTR&&ee(ct,d.ADD_URI_SAFE_ATTR,oe),d.FORBID_CONTENTS&&(De===He&&(De=St(De)),ee(De,d.FORBID_CONTENTS,oe)),ke&&(V["#text"]=!0),j&&ee(V,["html","head","body"]),V.table&&(ee(V,["tbody"]),delete R.tbody),d.TRUSTED_TYPES_POLICY){if(typeof d.TRUSTED_TYPES_POLICY.createHTML!="function")throw Bt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof d.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Bt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');D=d.TRUSTED_TYPES_POLICY,X=D.createHTML("")}else D===void 0&&(D=Js(T,n)),D!==null&&typeof X=="string"&&(X=D.createHTML(""));Fe&&Fe(d),We=d}},Tn=ee({},["mi","mo","mn","ms","mtext"]),wn=ee({},["foreignobject","desc","title","annotation-xml"]),Ni=ee({},["title","style","font","a","script"]),$t=ee({},qr);ee($t,Wr),ee($t,Ws);let vr=ee({},Kr);ee(vr,Ks);let Di=function(d){let P=le(d);(!P||!P.tagName)&&(P={namespaceURI:qe,tagName:"template"});let S=ar(d.tagName),ie=ar(P.tagName);return tt[d.namespaceURI]?d.namespaceURI===Ve?P.namespaceURI===Le?S==="svg":P.namespaceURI===Pe?S==="svg"&&(ie==="annotation-xml"||Tn[ie]):!!$t[S]:d.namespaceURI===Pe?P.namespaceURI===Le?S==="math":P.namespaceURI===Ve?S==="math"&&wn[ie]:!!vr[S]:d.namespaceURI===Le?P.namespaceURI===Ve&&!wn[ie]||P.namespaceURI===Pe&&!Tn[ie]?!1:!vr[S]&&(Ni[S]||!$t[S]):!!(Oe==="application/xhtml+xml"&&tt[d.namespaceURI]):!1},xt=function(d){Ot(t.removed,{element:d});try{d.parentNode.removeChild(d)}catch{d.remove()}},Sr=function(d,P){try{Ot(t.removed,{attribute:P.getAttributeNode(d),from:P})}catch{Ot(t.removed,{attribute:null,from:P})}if(P.removeAttribute(d),d==="is"&&!ne[d])if(L||H)try{xt(P)}catch{}else try{P.setAttribute(d,"")}catch{}},xn=function(d){let P,S;if(re)d="<remove></remove>"+d;else{let Be=Us(d,/^[\r\n\t ]+/);S=Be&&Be[0]}Oe==="application/xhtml+xml"&&qe===Le&&(d='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+d+"</body></html>");let ie=D?D.createHTML(d):d;if(qe===Le)try{P=new p().parseFromString(ie,Oe)}catch{}if(!P||!P.documentElement){P=se.createDocument(qe,"template",null);try{P.documentElement.innerHTML=et?X:ie}catch{}}let _e=P.body||P.documentElement;return d&&S&&_e.insertBefore(a.createTextNode(S),_e.childNodes[0]||null),qe===Le?x.call(P,j?"html":"body")[0]:j?P.documentElement:_e},vn=function(d){return C.call(d.ownerDocument||d,d,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT,null,!1)},Oi=function(d){return d instanceof m&&(typeof d.nodeName!="string"||typeof d.textContent!="string"||typeof d.removeChild!="function"||!(d.attributes instanceof u)||typeof d.removeAttribute!="function"||typeof d.setAttribute!="function"||typeof d.namespaceURI!="string"||typeof d.insertBefore!="function"||typeof d.hasChildNodes!="function")},Yt=function(d){return typeof l=="object"?d instanceof l:d&&typeof d=="object"&&typeof d.nodeType=="number"&&typeof d.nodeName=="string"},nt=function(d,P,S){I[d]&&Bs(I[d],ie=>{ie.call(t,P,S,We)})},Sn=function(d){let P;if(nt("beforeSanitizeElements",d,null),Oi(d))return xt(d),!0;let S=oe(d.nodeName);if(nt("uponSanitizeElement",d,{tagName:S,allowedTags:V}),d.hasChildNodes()&&!Yt(d.firstElementChild)&&(!Yt(d.content)||!Yt(d.content.firstElementChild))&&Ke(/<[/\w]/g,d.innerHTML)&&Ke(/<[/\w]/g,d.textContent))return xt(d),!0;if(!V[S]||R[S]){if(!R[S]&&kn(S)&&(v.tagNameCheck instanceof RegExp&&Ke(v.tagNameCheck,S)||v.tagNameCheck instanceof Function&&v.tagNameCheck(S)))return!1;if(ke&&!De[S]){let ie=le(d)||d.parentNode,_e=g(d)||d.childNodes;if(_e&&ie){let Be=_e.length;for(let je=Be-1;je>=0;--je)ie.insertBefore(Q(_e[je],!0),B(d))}}return xt(d),!0}return d instanceof s&&!Di(d)||(S==="noscript"||S==="noembed")&&Ke(/<\/no(script|embed)/i,d.innerHTML)?(xt(d),!0):(U&&d.nodeType===3&&(P=d.textContent,P=$e(P,E," "),P=$e(P,W," "),P=$e(P,M," "),d.textContent!==P&&(Ot(t.removed,{element:d.cloneNode()}),d.textContent=P)),nt("afterSanitizeElements",d,null),!1)},An=function(d,P,S){if(ae&&(P==="id"||P==="name")&&(S in a||S in Ii))return!1;if(!(ce&&!$[P]&&Ke(J,P))&&!(F&&Ke(K,P))){if(!ne[P]||$[P]){if(!(kn(d)&&(v.tagNameCheck instanceof RegExp&&Ke(v.tagNameCheck,d)||v.tagNameCheck instanceof Function&&v.tagNameCheck(d))&&(v.attributeNameCheck instanceof RegExp&&Ke(v.attributeNameCheck,P)||v.attributeNameCheck instanceof Function&&v.attributeNameCheck(P))||P==="is"&&v.allowCustomizedBuiltInElements&&(v.tagNameCheck instanceof RegExp&&Ke(v.tagNameCheck,S)||v.tagNameCheck instanceof Function&&v.tagNameCheck(S))))return!1}else if(!ct[P]&&!Ke(A,$e(S,te,""))&&!((P==="src"||P==="xlink:href"||P==="href")&&d!=="script"&&Fs(S,"data:")===0&&Rt[d])&&!(pe&&!Ke(ye,$e(S,te,"")))&&S)return!1}return!0},kn=function(d){return d.indexOf("-")>0},_n=function(d){let P,S,ie,_e;nt("beforeSanitizeAttributes",d,null);let{attributes:Be}=d;if(!Be)return;let je={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ne};for(_e=Be.length;_e--;){P=Be[_e];let{name:Ce,namespaceURI:vt}=P;if(S=Ce==="value"?P.value:js(P.value),ie=oe(Ce),je.attrName=ie,je.attrValue=S,je.keepAttr=!0,je.forceKeepAttr=void 0,nt("uponSanitizeAttribute",d,je),S=je.attrValue,je.forceKeepAttr||(Sr(Ce,d),!je.keepAttr))continue;if(!de&&Ke(/\/>/i,S)){Sr(Ce,d);continue}U&&(S=$e(S,E," "),S=$e(S,W," "),S=$e(S,M," "));let Cn=oe(d.nodeName);if(An(Cn,ie,S)){if(N&&(ie==="id"||ie==="name")&&(Sr(Ce,d),S=he+S),D&&typeof T=="object"&&typeof T.getAttributeType=="function"&&!vt)switch(T.getAttributeType(Cn,ie)){case"TrustedHTML":{S=D.createHTML(S);break}case"TrustedScriptURL":{S=D.createScriptURL(S);break}}try{vt?d.setAttributeNS(vt,Ce,S):d.setAttribute(Ce,S),na(t.removed)}catch{}}}nt("afterSanitizeAttributes",d,null)},Bi=function d(P){let S,ie=vn(P);for(nt("beforeSanitizeShadowDOM",P,null);S=ie.nextNode();)nt("uponSanitizeShadowNode",S,null),!Sn(S)&&(S.content instanceof i&&d(S.content),_n(S));nt("afterSanitizeShadowDOM",P,null)};return t.sanitize=function(d){let P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},S,ie,_e,Be;if(et=!d,et&&(d="<!-->"),typeof d!="string"&&!Yt(d))if(typeof d.toString=="function"){if(d=d.toString(),typeof d!="string")throw Bt("dirty is not a string, aborting")}else throw Bt("toString is not a function");if(!t.isSupported)return d;if(Z||xr(P),t.removed=[],typeof d=="string"&&(Te=!1),Te){if(d.nodeName){let vt=oe(d.nodeName);if(!V[vt]||R[vt])throw Bt("root node is forbidden and cannot be sanitized in-place")}}else if(d instanceof l)S=xn("<!---->"),ie=S.ownerDocument.importNode(d,!0),ie.nodeType===1&&ie.nodeName==="BODY"||ie.nodeName==="HTML"?S=ie:S.appendChild(ie);else{if(!L&&!U&&!j&&d.indexOf("<")===-1)return D&&me?D.createHTML(d):d;if(S=xn(d),!S)return L?null:me?X:""}S&&re&&xt(S.firstChild);let je=vn(Te?d:S);for(;_e=je.nextNode();)Sn(_e)||(_e.content instanceof i&&Bi(_e.content),_n(_e));if(Te)return d;if(L){if(H)for(Be=h.call(S.ownerDocument);S.firstChild;)Be.appendChild(S.firstChild);else Be=S;return(ne.shadowroot||ne.shadowrootmod)&&(Be=w.call(r,Be,!0)),Be}let Ce=j?S.outerHTML:S.innerHTML;return j&&V["!doctype"]&&S.ownerDocument&&S.ownerDocument.doctype&&S.ownerDocument.doctype.name&&Ke(da,S.ownerDocument.doctype.name)&&(Ce="<!DOCTYPE "+S.ownerDocument.doctype.name+`>
`+Ce),U&&(Ce=$e(Ce,E," "),Ce=$e(Ce,W," "),Ce=$e(Ce,M," ")),D&&me?D.createHTML(Ce):Ce},t.setConfig=function(d){xr(d),Z=!0},t.clearConfig=function(){We=null,Z=!1},t.isValidAttribute=function(d,P,S){We||xr({});let ie=oe(d),_e=oe(P);return An(ie,_e,S)},t.addHook=function(d,P){typeof P=="function"&&(I[d]=I[d]||[],Ot(I[d],P))},t.removeHook=function(d){if(I[d])return na(I[d])},t.removeHooks=function(d){I[d]&&(I[d]=[])},t.removeAllHooks=function(){I={}},t}var ga=ma();var Zs=Object.create,$r=Object.defineProperty,el=Object.getOwnPropertyDescriptor,tl=Object.getOwnPropertyNames,rl=Object.getPrototypeOf,nl=Object.prototype.hasOwnProperty,Yr=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),al=(e,t)=>{for(var r in t)$r(e,r,{get:t[r],enumerable:!0})},Vr=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of tl(t))!nl.call(e,a)&&a!==r&&$r(e,a,{get:()=>t[a],enumerable:!(n=el(t,a))||n.enumerable});return e},il=(e,t,r)=>(Vr(e,t,"default"),r&&Vr(r,t,"default")),ha=(e,t,r)=>(r=e!=null?Zs(rl(e)):{},Vr(t||!e||!e.__esModule?$r(r,"default",{value:e,enumerable:!0}):r,e)),ol=Yr((e,t)=>{function r(n,a){if(a&&a.documentElement)n=a,a=arguments[2];else if(!n||!n.documentElement)throw new Error("First argument to Readability constructor should be a document object.");if(a=a||{},this._doc=n,this._docJSDOMParser=this._doc.firstChild.__JSDOMParser__,this._articleTitle=null,this._articleByline=null,this._articleDir=null,this._articleSiteName=null,this._attempts=[],this._debug=!!a.debug,this._maxElemsToParse=a.maxElemsToParse||this.DEFAULT_MAX_ELEMS_TO_PARSE,this._nbTopCandidates=a.nbTopCandidates||this.DEFAULT_N_TOP_CANDIDATES,this._charThreshold=a.charThreshold||this.DEFAULT_CHAR_THRESHOLD,this._classesToPreserve=this.CLASSES_TO_PRESERVE.concat(a.classesToPreserve||[]),this._keepClasses=!!a.keepClasses,this._serializer=a.serializer||function(i){return i.innerHTML},this._disableJSONLD=!!a.disableJSONLD,this._allowedVideoRegex=a.allowedVideoRegex||this.REGEXPS.videos,this._flags=this.FLAG_STRIP_UNLIKELYS|this.FLAG_WEIGHT_CLASSES|this.FLAG_CLEAN_CONDITIONALLY,this._debug){let i=function(o){if(o.nodeType==o.TEXT_NODE)return`${o.nodeName} ("${o.textContent}")`;let l=Array.from(o.attributes||[],function(s){return`${s.name}="${s.value}"`}).join(" ");return`<${o.localName} ${l}>`};this.log=function(){if(typeof console<"u")Array.from(arguments,s=>s&&s.nodeType==this.ELEMENT_NODE?i(s):s).unshift("Reader: (Readability)");else if(typeof dump<"u"){var o=Array.prototype.map.call(arguments,function(l){return l&&l.nodeName?i(l):l}).join(" ");dump("Reader: (Readability) "+o+`
`)}}}else this.log=function(){}}r.prototype={FLAG_STRIP_UNLIKELYS:1,FLAG_WEIGHT_CLASSES:2,FLAG_CLEAN_CONDITIONALLY:4,ELEMENT_NODE:1,TEXT_NODE:3,DEFAULT_MAX_ELEMS_TO_PARSE:0,DEFAULT_N_TOP_CANDIDATES:5,DEFAULT_TAGS_TO_SCORE:"section,h2,h3,h4,h5,h6,p,td,pre".toUpperCase().split(","),DEFAULT_CHAR_THRESHOLD:500,REGEXPS:{unlikelyCandidates:/-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,okMaybeItsACandidate:/and|article|body|column|content|main|shadow/i,positive:/article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,negative:/-ad-|hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|gdpr|masthead|media|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,extraneous:/print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,byline:/byline|author|dateline|writtenby|p-author/i,replaceFonts:/<(\/?)font[^>]*>/gi,normalize:/\s{2,}/g,videos:/\/\/(www\.)?((dailymotion|youtube|youtube-nocookie|player\.vimeo|v\.qq)\.com|(archive|upload\.wikimedia)\.org|player\.twitch\.tv)/i,shareElements:/(\b|_)(share|sharedaddy)(\b|_)/i,nextLink:/(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,prevLink:/(prev|earl|old|new|<|«)/i,tokenize:/\W+/g,whitespace:/^\s*$/,hasContent:/\S$/,hashUrl:/^#.+/,srcsetUrl:/(\S+)(\s+[\d.]+[xw])?(\s*(?:,|$))/g,b64DataUrl:/^data:\s*([^\s;,]+)\s*;\s*base64\s*,/i,jsonLdArticleTypes:/^Article|AdvertiserContentArticle|NewsArticle|AnalysisNewsArticle|AskPublicNewsArticle|BackgroundNewsArticle|OpinionNewsArticle|ReportageNewsArticle|ReviewNewsArticle|Report|SatiricalArticle|ScholarlyArticle|MedicalScholarlyArticle|SocialMediaPosting|BlogPosting|LiveBlogPosting|DiscussionForumPosting|TechArticle|APIReference$/},UNLIKELY_ROLES:["menu","menubar","complementary","navigation","alert","alertdialog","dialog"],DIV_TO_P_ELEMS:new Set(["BLOCKQUOTE","DL","DIV","IMG","OL","P","PRE","TABLE","UL"]),ALTER_TO_DIV_EXCEPTIONS:["DIV","ARTICLE","SECTION","P"],PRESENTATIONAL_ATTRIBUTES:["align","background","bgcolor","border","cellpadding","cellspacing","frame","hspace","rules","style","valign","vspace"],DEPRECATED_SIZE_ATTRIBUTE_ELEMS:["TABLE","TH","TD","HR","PRE"],PHRASING_ELEMS:["ABBR","AUDIO","B","BDO","BR","BUTTON","CITE","CODE","DATA","DATALIST","DFN","EM","EMBED","I","IMG","INPUT","KBD","LABEL","MARK","MATH","METER","NOSCRIPT","OBJECT","OUTPUT","PROGRESS","Q","RUBY","SAMP","SCRIPT","SELECT","SMALL","SPAN","STRONG","SUB","SUP","TEXTAREA","TIME","VAR","WBR"],CLASSES_TO_PRESERVE:["page"],HTML_ESCAPE_MAP:{lt:"<",gt:">",amp:"&",quot:'"',apos:"'"},_postProcessContent:function(n){this._fixRelativeUris(n),this._simplifyNestedElements(n),this._keepClasses||this._cleanClasses(n)},_removeNodes:function(n,a){if(this._docJSDOMParser&&n._isLiveNodeList)throw new Error("Do not pass live node lists to _removeNodes");for(var i=n.length-1;i>=0;i--){var o=n[i],l=o.parentNode;l&&(!a||a.call(this,o,i,n))&&l.removeChild(o)}},_replaceNodeTags:function(n,a){if(this._docJSDOMParser&&n._isLiveNodeList)throw new Error("Do not pass live node lists to _replaceNodeTags");for(let i of n)this._setNodeTag(i,a)},_forEachNode:function(n,a){Array.prototype.forEach.call(n,a,this)},_findNode:function(n,a){return Array.prototype.find.call(n,a,this)},_someNode:function(n,a){return Array.prototype.some.call(n,a,this)},_everyNode:function(n,a){return Array.prototype.every.call(n,a,this)},_concatNodeLists:function(){var n=Array.prototype.slice,a=n.call(arguments),i=a.map(function(o){return n.call(o)});return Array.prototype.concat.apply([],i)},_getAllNodesWithTag:function(n,a){return n.querySelectorAll?n.querySelectorAll(a.join(",")):[].concat.apply([],a.map(function(i){var o=n.getElementsByTagName(i);return Array.isArray(o)?o:Array.from(o)}))},_cleanClasses:function(n){var a=this._classesToPreserve,i=(n.getAttribute("class")||"").split(/\s+/).filter(function(o){return a.indexOf(o)!=-1}).join(" ");for(i?n.setAttribute("class",i):n.removeAttribute("class"),n=n.firstElementChild;n;n=n.nextElementSibling)this._cleanClasses(n)},_fixRelativeUris:function(n){var a=this._doc.baseURI,i=this._doc.documentURI;function o(c){if(a==i&&c.charAt(0)=="#")return c;try{return new URL(c,a).href}catch{}return c}var l=this._getAllNodesWithTag(n,["a"]);this._forEachNode(l,function(c){var u=c.getAttribute("href");if(u)if(u.indexOf("javascript:")===0)if(c.childNodes.length===1&&c.childNodes[0].nodeType===this.TEXT_NODE){var m=this._doc.createTextNode(c.textContent);c.parentNode.replaceChild(m,c)}else{for(var p=this._doc.createElement("span");c.firstChild;)p.appendChild(c.firstChild);c.parentNode.replaceChild(p,c)}else c.setAttribute("href",o(u))});var s=this._getAllNodesWithTag(n,["img","picture","figure","video","audio","source"]);this._forEachNode(s,function(c){var u=c.getAttribute("src"),m=c.getAttribute("poster"),p=c.getAttribute("srcset");if(u&&c.setAttribute("src",o(u)),m&&c.setAttribute("poster",o(m)),p){var T=p.replace(this.REGEXPS.srcsetUrl,function(k,Q,B,g){return o(Q)+(B||"")+g});c.setAttribute("srcset",T)}})},_simplifyNestedElements:function(n){for(var a=n;a;){if(a.parentNode&&["DIV","SECTION"].includes(a.tagName)&&!(a.id&&a.id.startsWith("readability"))){if(this._isElementWithoutContent(a)){a=this._removeAndGetNext(a);continue}else if(this._hasSingleTagInsideElement(a,"DIV")||this._hasSingleTagInsideElement(a,"SECTION")){for(var i=a.children[0],o=0;o<a.attributes.length;o++)i.setAttribute(a.attributes[o].name,a.attributes[o].value);a.parentNode.replaceChild(i,a),a=i;continue}}a=this._getNextNode(a)}},_getArticleTitle:function(){var n=this._doc,a="",i="";try{a=i=n.title.trim(),typeof a!="string"&&(a=i=this._getInnerText(n.getElementsByTagName("title")[0]))}catch{}var o=!1;function l(T){return T.split(/\s+/).length}if(/ [\|\-\\\/>»] /.test(a))o=/ [\\\/>»] /.test(a),a=i.replace(/(.*)[\|\-\\\/>»] .*/gi,"$1"),l(a)<3&&(a=i.replace(/[^\|\-\\\/>»]*[\|\-\\\/>»](.*)/gi,"$1"));else if(a.indexOf(": ")!==-1){var s=this._concatNodeLists(n.getElementsByTagName("h1"),n.getElementsByTagName("h2")),c=a.trim(),u=this._someNode(s,function(T){return T.textContent.trim()===c});u||(a=i.substring(i.lastIndexOf(":")+1),l(a)<3?a=i.substring(i.indexOf(":")+1):l(i.substr(0,i.indexOf(":")))>5&&(a=i))}else if(a.length>150||a.length<15){var m=n.getElementsByTagName("h1");m.length===1&&(a=this._getInnerText(m[0]))}a=a.trim().replace(this.REGEXPS.normalize," ");var p=l(a);return p<=4&&(!o||p!=l(i.replace(/[\|\-\\\/>»]+/g,""))-1)&&(a=i),a},_prepDocument:function(){var n=this._doc;this._removeNodes(this._getAllNodesWithTag(n,["style"])),n.body&&this._replaceBrs(n.body),this._replaceNodeTags(this._getAllNodesWithTag(n,["font"]),"SPAN")},_nextNode:function(n){for(var a=n;a&&a.nodeType!=this.ELEMENT_NODE&&this.REGEXPS.whitespace.test(a.textContent);)a=a.nextSibling;return a},_replaceBrs:function(n){this._forEachNode(this._getAllNodesWithTag(n,["br"]),function(a){for(var i=a.nextSibling,o=!1;(i=this._nextNode(i))&&i.tagName=="BR";){o=!0;var l=i.nextSibling;i.parentNode.removeChild(i),i=l}if(o){var s=this._doc.createElement("p");for(a.parentNode.replaceChild(s,a),i=s.nextSibling;i;){if(i.tagName=="BR"){var c=this._nextNode(i.nextSibling);if(c&&c.tagName=="BR")break}if(!this._isPhrasingContent(i))break;var u=i.nextSibling;s.appendChild(i),i=u}for(;s.lastChild&&this._isWhitespace(s.lastChild);)s.removeChild(s.lastChild);s.parentNode.tagName==="P"&&this._setNodeTag(s.parentNode,"DIV")}})},_setNodeTag:function(n,a){if(this.log("_setNodeTag",n,a),this._docJSDOMParser)return n.localName=a.toLowerCase(),n.tagName=a.toUpperCase(),n;for(var i=n.ownerDocument.createElement(a);n.firstChild;)i.appendChild(n.firstChild);n.parentNode.replaceChild(i,n),n.readability&&(i.readability=n.readability);for(var o=0;o<n.attributes.length;o++)try{i.setAttribute(n.attributes[o].name,n.attributes[o].value)}catch{}return i},_prepArticle:function(n){this._cleanStyles(n),this._markDataTables(n),this._fixLazyImages(n),this._cleanConditionally(n,"form"),this._cleanConditionally(n,"fieldset"),this._clean(n,"object"),this._clean(n,"embed"),this._clean(n,"footer"),this._clean(n,"link"),this._clean(n,"aside");var a=this.DEFAULT_CHAR_THRESHOLD;this._forEachNode(n.children,function(i){this._cleanMatchedNodes(i,function(o,l){return this.REGEXPS.shareElements.test(l)&&o.textContent.length<a})}),this._clean(n,"iframe"),this._clean(n,"input"),this._clean(n,"textarea"),this._clean(n,"select"),this._clean(n,"button"),this._cleanHeaders(n),this._cleanConditionally(n,"table"),this._cleanConditionally(n,"ul"),this._cleanConditionally(n,"div"),this._replaceNodeTags(this._getAllNodesWithTag(n,["h1"]),"h2"),this._removeNodes(this._getAllNodesWithTag(n,["p"]),function(i){var o=i.getElementsByTagName("img").length,l=i.getElementsByTagName("embed").length,s=i.getElementsByTagName("object").length,c=i.getElementsByTagName("iframe").length,u=o+l+s+c;return u===0&&!this._getInnerText(i,!1)}),this._forEachNode(this._getAllNodesWithTag(n,["br"]),function(i){var o=this._nextNode(i.nextSibling);o&&o.tagName=="P"&&i.parentNode.removeChild(i)}),this._forEachNode(this._getAllNodesWithTag(n,["table"]),function(i){var o=this._hasSingleTagInsideElement(i,"TBODY")?i.firstElementChild:i;if(this._hasSingleTagInsideElement(o,"TR")){var l=o.firstElementChild;if(this._hasSingleTagInsideElement(l,"TD")){var s=l.firstElementChild;s=this._setNodeTag(s,this._everyNode(s.childNodes,this._isPhrasingContent)?"P":"DIV"),i.parentNode.replaceChild(s,i)}}})},_initializeNode:function(n){switch(n.readability={contentScore:0},n.tagName){case"DIV":n.readability.contentScore+=5;break;case"PRE":case"TD":case"BLOCKQUOTE":n.readability.contentScore+=3;break;case"ADDRESS":case"OL":case"UL":case"DL":case"DD":case"DT":case"LI":case"FORM":n.readability.contentScore-=3;break;case"H1":case"H2":case"H3":case"H4":case"H5":case"H6":case"TH":n.readability.contentScore-=5;break}n.readability.contentScore+=this._getClassWeight(n)},_removeAndGetNext:function(n){var a=this._getNextNode(n,!0);return n.parentNode.removeChild(n),a},_getNextNode:function(n,a){if(!a&&n.firstElementChild)return n.firstElementChild;if(n.nextElementSibling)return n.nextElementSibling;do n=n.parentNode;while(n&&!n.nextElementSibling);return n&&n.nextElementSibling},_textSimilarity:function(n,a){var i=n.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean),o=a.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);if(!i.length||!o.length)return 0;var l=o.filter(c=>!i.includes(c)),s=l.join(" ").length/o.join(" ").length;return 1-s},_checkByline:function(n,a){if(this._articleByline)return!1;if(n.getAttribute!==void 0)var i=n.getAttribute("rel"),o=n.getAttribute("itemprop");return(i==="author"||o&&o.indexOf("author")!==-1||this.REGEXPS.byline.test(a))&&this._isValidByline(n.textContent)?(this._articleByline=n.textContent.trim(),!0):!1},_getNodeAncestors:function(n,a){a=a||0;for(var i=0,o=[];n.parentNode&&(o.push(n.parentNode),!(a&&++i===a));)n=n.parentNode;return o},_grabArticle:function(n){this.log("**** grabArticle ****");var a=this._doc,i=n!==null;if(n=n||this._doc.body,!n)return this.log("No body found in document. Abort."),null;for(var o=n.innerHTML;;){this.log("Starting grabArticle loop");var l=this._flagIsActive(this.FLAG_STRIP_UNLIKELYS),s=[],c=this._doc.documentElement;let re=!0;for(;c;){c.tagName==="HTML"&&(this._articleLang=c.getAttribute("lang"));var u=c.className+" "+c.id;if(!this._isProbablyVisible(c)){this.log("Removing hidden node - "+u),c=this._removeAndGetNext(c);continue}if(c.getAttribute("aria-modal")=="true"&&c.getAttribute("role")=="dialog"){c=this._removeAndGetNext(c);continue}if(this._checkByline(c,u)){c=this._removeAndGetNext(c);continue}if(re&&this._headerDuplicatesTitle(c)){this.log("Removing header: ",c.textContent.trim(),this._articleTitle.trim()),re=!1,c=this._removeAndGetNext(c);continue}if(l){if(this.REGEXPS.unlikelyCandidates.test(u)&&!this.REGEXPS.okMaybeItsACandidate.test(u)&&!this._hasAncestorTag(c,"table")&&!this._hasAncestorTag(c,"code")&&c.tagName!=="BODY"&&c.tagName!=="A"){this.log("Removing unlikely candidate - "+u),c=this._removeAndGetNext(c);continue}if(this.UNLIKELY_ROLES.includes(c.getAttribute("role"))){this.log("Removing content with role "+c.getAttribute("role")+" - "+u),c=this._removeAndGetNext(c);continue}}if((c.tagName==="DIV"||c.tagName==="SECTION"||c.tagName==="HEADER"||c.tagName==="H1"||c.tagName==="H2"||c.tagName==="H3"||c.tagName==="H4"||c.tagName==="H5"||c.tagName==="H6")&&this._isElementWithoutContent(c)){c=this._removeAndGetNext(c);continue}if(this.DEFAULT_TAGS_TO_SCORE.indexOf(c.tagName)!==-1&&s.push(c),c.tagName==="DIV"){for(var m=null,p=c.firstChild;p;){var T=p.nextSibling;if(this._isPhrasingContent(p))m!==null?m.appendChild(p):this._isWhitespace(p)||(m=a.createElement("p"),c.replaceChild(m,p),m.appendChild(p));else if(m!==null){for(;m.lastChild&&this._isWhitespace(m.lastChild);)m.removeChild(m.lastChild);m=null}p=T}if(this._hasSingleTagInsideElement(c,"P")&&this._getLinkDensity(c)<.25){var k=c.children[0];c.parentNode.replaceChild(k,c),c=k,s.push(c)}else this._hasChildBlockElement(c)||(c=this._setNodeTag(c,"P"),s.push(c))}c=this._getNextNode(c)}var Q=[];this._forEachNode(s,function(L){if(!(!L.parentNode||typeof L.parentNode.tagName>"u")){var H=this._getInnerText(L);if(!(H.length<25)){var me=this._getNodeAncestors(L,5);if(me.length!==0){var ae=0;ae+=1,ae+=H.split(",").length,ae+=Math.min(Math.floor(H.length/100),3),this._forEachNode(me,function(N,he){if(!(!N.tagName||!N.parentNode||typeof N.parentNode.tagName>"u")){if(typeof N.readability>"u"&&(this._initializeNode(N),Q.push(N)),he===0)var ke=1;else he===1?ke=2:ke=he*3;N.readability.contentScore+=ae/ke}})}}}});for(var B=[],g=0,le=Q.length;g<le;g+=1){var D=Q[g],X=D.readability.contentScore*(1-this._getLinkDensity(D));D.readability.contentScore=X,this.log("Candidate:",D,"with score "+X);for(var se=0;se<this._nbTopCandidates;se++){var C=B[se];if(!C||X>C.readability.contentScore){B.splice(se,0,D),B.length>this._nbTopCandidates&&B.pop();break}}}var h=B[0]||null,x=!1,w;if(h===null||h.tagName==="BODY"){for(h=a.createElement("DIV"),x=!0;n.firstChild;)this.log("Moving child out:",n.firstChild),h.appendChild(n.firstChild);n.appendChild(h),this._initializeNode(h)}else if(h){for(var I=[],E=1;E<B.length;E++)B[E].readability.contentScore/h.readability.contentScore>=.75&&I.push(this._getNodeAncestors(B[E]));var W=3;if(I.length>=W)for(w=h.parentNode;w.tagName!=="BODY";){for(var M=0,J=0;J<I.length&&M<W;J++)M+=Number(I[J].includes(w));if(M>=W){h=w;break}w=w.parentNode}h.readability||this._initializeNode(h),w=h.parentNode;for(var K=h.readability.contentScore,ye=K/3;w.tagName!=="BODY";){if(!w.readability){w=w.parentNode;continue}var te=w.readability.contentScore;if(te<ye)break;if(te>K){h=w;break}K=w.readability.contentScore,w=w.parentNode}for(w=h.parentNode;w.tagName!="BODY"&&w.children.length==1;)h=w,w=h.parentNode;h.readability||this._initializeNode(h)}var A=a.createElement("DIV");i&&(A.id="readability-content");var V=Math.max(10,h.readability.contentScore*.2);w=h.parentNode;for(var we=w.children,ne=0,b=we.length;ne<b;ne++){var v=we[ne],R=!1;if(this.log("Looking at sibling node:",v,v.readability?"with score "+v.readability.contentScore:""),this.log("Sibling has score",v.readability?v.readability.contentScore:"Unknown"),v===h)R=!0;else{var $=0;if(v.className===h.className&&h.className!==""&&($+=h.readability.contentScore*.2),v.readability&&v.readability.contentScore+$>=V)R=!0;else if(v.nodeName==="P"){var F=this._getLinkDensity(v),ce=this._getInnerText(v),pe=ce.length;(pe>80&&F<.25||pe<80&&pe>0&&F===0&&ce.search(/\.( |$)/)!==-1)&&(R=!0)}}R&&(this.log("Appending node:",v),this.ALTER_TO_DIV_EXCEPTIONS.indexOf(v.nodeName)===-1&&(this.log("Altering sibling:",v,"to div."),v=this._setNodeTag(v,"DIV")),A.appendChild(v),we=w.children,ne-=1,b-=1)}if(this._debug&&this.log("Article content pre-prep: "+A.innerHTML),this._prepArticle(A),this._debug&&this.log("Article content post-prep: "+A.innerHTML),x)h.id="readability-page-1",h.className="page";else{var de=a.createElement("DIV");for(de.id="readability-page-1",de.className="page";A.firstChild;)de.appendChild(A.firstChild);A.appendChild(de)}this._debug&&this.log("Article content after paging: "+A.innerHTML);var U=!0,j=this._getInnerText(A,!0).length;if(j<this._charThreshold)if(U=!1,n.innerHTML=o,this._flagIsActive(this.FLAG_STRIP_UNLIKELYS))this._removeFlag(this.FLAG_STRIP_UNLIKELYS),this._attempts.push({articleContent:A,textLength:j});else if(this._flagIsActive(this.FLAG_WEIGHT_CLASSES))this._removeFlag(this.FLAG_WEIGHT_CLASSES),this._attempts.push({articleContent:A,textLength:j});else if(this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY),this._attempts.push({articleContent:A,textLength:j});else{if(this._attempts.push({articleContent:A,textLength:j}),this._attempts.sort(function(L,H){return H.textLength-L.textLength}),!this._attempts[0].textLength)return null;A=this._attempts[0].articleContent,U=!0}if(U){var Z=[w,h].concat(this._getNodeAncestors(w));return this._someNode(Z,function(L){if(!L.tagName)return!1;var H=L.getAttribute("dir");return H?(this._articleDir=H,!0):!1}),A}}},_isValidByline:function(n){return typeof n=="string"||n instanceof String?(n=n.trim(),n.length>0&&n.length<100):!1},_unescapeHtmlEntities:function(n){if(!n)return n;var a=this.HTML_ESCAPE_MAP;return n.replace(/&(quot|amp|apos|lt|gt);/g,function(i,o){return a[o]}).replace(/&#(?:x([0-9a-z]{1,4})|([0-9]{1,4}));/gi,function(i,o,l){var s=parseInt(o||l,o?16:10);return String.fromCharCode(s)})},_getJSONLD:function(n){var a=this._getAllNodesWithTag(n,["script"]),i;return this._forEachNode(a,function(o){if(!i&&o.getAttribute("type")==="application/ld+json")try{var l=o.textContent.replace(/^\s*<!\[CDATA\[|\]\]>\s*$/g,""),s=JSON.parse(l);if(!s["@context"]||!s["@context"].match(/^https?\:\/\/schema\.org$/)||(!s["@type"]&&Array.isArray(s["@graph"])&&(s=s["@graph"].find(function(p){return(p["@type"]||"").match(this.REGEXPS.jsonLdArticleTypes)})),!s||!s["@type"]||!s["@type"].match(this.REGEXPS.jsonLdArticleTypes)))return;if(i={},typeof s.name=="string"&&typeof s.headline=="string"&&s.name!==s.headline){var c=this._getArticleTitle(),u=this._textSimilarity(s.name,c)>.75,m=this._textSimilarity(s.headline,c)>.75;m&&!u?i.title=s.headline:i.title=s.name}else typeof s.name=="string"?i.title=s.name.trim():typeof s.headline=="string"&&(i.title=s.headline.trim());s.author&&(typeof s.author.name=="string"?i.byline=s.author.name.trim():Array.isArray(s.author)&&s.author[0]&&typeof s.author[0].name=="string"&&(i.byline=s.author.filter(function(p){return p&&typeof p.name=="string"}).map(function(p){return p.name.trim()}).join(", "))),typeof s.description=="string"&&(i.excerpt=s.description.trim()),s.publisher&&typeof s.publisher.name=="string"&&(i.siteName=s.publisher.name.trim());return}catch(p){this.log(p.message)}}),i||{}},_getArticleMetadata:function(n){var a={},i={},o=this._doc.getElementsByTagName("meta"),l=/\s*(dc|dcterm|og|twitter)\s*:\s*(author|creator|description|title|site_name)\s*/gi,s=/^\s*(?:(dc|dcterm|og|twitter|weibo:(article|webpage))\s*[\.:]\s*)?(author|creator|description|title|site_name)\s*$/i;return this._forEachNode(o,function(c){var u=c.getAttribute("name"),m=c.getAttribute("property"),p=c.getAttribute("content");if(p){var T=null,k=null;m&&(T=m.match(l),T&&(k=T[0].toLowerCase().replace(/\s/g,""),i[k]=p.trim())),!T&&u&&s.test(u)&&(k=u,p&&(k=k.toLowerCase().replace(/\s/g,"").replace(/\./g,":"),i[k]=p.trim()))}}),a.title=n.title||i["dc:title"]||i["dcterm:title"]||i["og:title"]||i["weibo:article:title"]||i["weibo:webpage:title"]||i.title||i["twitter:title"],a.title||(a.title=this._getArticleTitle()),a.byline=n.byline||i["dc:creator"]||i["dcterm:creator"]||i.author,a.excerpt=n.excerpt||i["dc:description"]||i["dcterm:description"]||i["og:description"]||i["weibo:article:description"]||i["weibo:webpage:description"]||i.description||i["twitter:description"],a.siteName=n.siteName||i["og:site_name"],a.title=this._unescapeHtmlEntities(a.title),a.byline=this._unescapeHtmlEntities(a.byline),a.excerpt=this._unescapeHtmlEntities(a.excerpt),a.siteName=this._unescapeHtmlEntities(a.siteName),a},_isSingleImage:function(n){return n.tagName==="IMG"?!0:n.children.length!==1||n.textContent.trim()!==""?!1:this._isSingleImage(n.children[0])},_unwrapNoscriptImages:function(n){var a=Array.from(n.getElementsByTagName("img"));this._forEachNode(a,function(o){for(var l=0;l<o.attributes.length;l++){var s=o.attributes[l];switch(s.name){case"src":case"srcset":case"data-src":case"data-srcset":return}if(/\.(jpg|jpeg|png|webp)/i.test(s.value))return}o.parentNode.removeChild(o)});var i=Array.from(n.getElementsByTagName("noscript"));this._forEachNode(i,function(o){var l=n.createElement("div");if(l.innerHTML=o.innerHTML,!!this._isSingleImage(l)){var s=o.previousElementSibling;if(s&&this._isSingleImage(s)){var c=s;c.tagName!=="IMG"&&(c=s.getElementsByTagName("img")[0]);for(var u=l.getElementsByTagName("img")[0],m=0;m<c.attributes.length;m++){var p=c.attributes[m];if(p.value!==""&&(p.name==="src"||p.name==="srcset"||/\.(jpg|jpeg|png|webp)/i.test(p.value))){if(u.getAttribute(p.name)===p.value)continue;var T=p.name;u.hasAttribute(T)&&(T="data-old-"+T),u.setAttribute(T,p.value)}}o.parentNode.replaceChild(l.firstElementChild,s)}}})},_removeScripts:function(n){this._removeNodes(this._getAllNodesWithTag(n,["script","noscript"]))},_hasSingleTagInsideElement:function(n,a){return n.children.length!=1||n.children[0].tagName!==a?!1:!this._someNode(n.childNodes,function(i){return i.nodeType===this.TEXT_NODE&&this.REGEXPS.hasContent.test(i.textContent)})},_isElementWithoutContent:function(n){return n.nodeType===this.ELEMENT_NODE&&n.textContent.trim().length==0&&(n.children.length==0||n.children.length==n.getElementsByTagName("br").length+n.getElementsByTagName("hr").length)},_hasChildBlockElement:function(n){return this._someNode(n.childNodes,function(a){return this.DIV_TO_P_ELEMS.has(a.tagName)||this._hasChildBlockElement(a)})},_isPhrasingContent:function(n){return n.nodeType===this.TEXT_NODE||this.PHRASING_ELEMS.indexOf(n.tagName)!==-1||(n.tagName==="A"||n.tagName==="DEL"||n.tagName==="INS")&&this._everyNode(n.childNodes,this._isPhrasingContent)},_isWhitespace:function(n){return n.nodeType===this.TEXT_NODE&&n.textContent.trim().length===0||n.nodeType===this.ELEMENT_NODE&&n.tagName==="BR"},_getInnerText:function(n,a){a=typeof a>"u"?!0:a;var i=n.textContent.trim();return a?i.replace(this.REGEXPS.normalize," "):i},_getCharCount:function(n,a){return a=a||",",this._getInnerText(n).split(a).length-1},_cleanStyles:function(n){if(!(!n||n.tagName.toLowerCase()==="svg")){for(var a=0;a<this.PRESENTATIONAL_ATTRIBUTES.length;a++)n.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[a]);this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.indexOf(n.tagName)!==-1&&(n.removeAttribute("width"),n.removeAttribute("height"));for(var i=n.firstElementChild;i!==null;)this._cleanStyles(i),i=i.nextElementSibling}},_getLinkDensity:function(n){var a=this._getInnerText(n).length;if(a===0)return 0;var i=0;return this._forEachNode(n.getElementsByTagName("a"),function(o){var l=o.getAttribute("href"),s=l&&this.REGEXPS.hashUrl.test(l)?.3:1;i+=this._getInnerText(o).length*s}),i/a},_getClassWeight:function(n){if(!this._flagIsActive(this.FLAG_WEIGHT_CLASSES))return 0;var a=0;return typeof n.className=="string"&&n.className!==""&&(this.REGEXPS.negative.test(n.className)&&(a-=25),this.REGEXPS.positive.test(n.className)&&(a+=25)),typeof n.id=="string"&&n.id!==""&&(this.REGEXPS.negative.test(n.id)&&(a-=25),this.REGEXPS.positive.test(n.id)&&(a+=25)),a},_clean:function(n,a){var i=["object","embed","iframe"].indexOf(a)!==-1;this._removeNodes(this._getAllNodesWithTag(n,[a]),function(o){if(i){for(var l=0;l<o.attributes.length;l++)if(this._allowedVideoRegex.test(o.attributes[l].value))return!1;if(o.tagName==="object"&&this._allowedVideoRegex.test(o.innerHTML))return!1}return!0})},_hasAncestorTag:function(n,a,i,o){i=i||3,a=a.toUpperCase();for(var l=0;n.parentNode;){if(i>0&&l>i)return!1;if(n.parentNode.tagName===a&&(!o||o(n.parentNode)))return!0;n=n.parentNode,l++}return!1},_getRowAndColumnCount:function(n){for(var a=0,i=0,o=n.getElementsByTagName("tr"),l=0;l<o.length;l++){var s=o[l].getAttribute("rowspan")||0;s&&(s=parseInt(s,10)),a+=s||1;for(var c=0,u=o[l].getElementsByTagName("td"),m=0;m<u.length;m++){var p=u[m].getAttribute("colspan")||0;p&&(p=parseInt(p,10)),c+=p||1}i=Math.max(i,c)}return{rows:a,columns:i}},_markDataTables:function(n){for(var a=n.getElementsByTagName("table"),i=0;i<a.length;i++){var o=a[i],l=o.getAttribute("role");if(l=="presentation"){o._readabilityDataTable=!1;continue}var s=o.getAttribute("datatable");if(s=="0"){o._readabilityDataTable=!1;continue}var c=o.getAttribute("summary");if(c){o._readabilityDataTable=!0;continue}var u=o.getElementsByTagName("caption")[0];if(u&&u.childNodes.length>0){o._readabilityDataTable=!0;continue}var m=["col","colgroup","tfoot","thead","th"],p=function(k){return!!o.getElementsByTagName(k)[0]};if(m.some(p)){this.log("Data table because found data-y descendant"),o._readabilityDataTable=!0;continue}if(o.getElementsByTagName("table")[0]){o._readabilityDataTable=!1;continue}var T=this._getRowAndColumnCount(o);if(T.rows>=10||T.columns>4){o._readabilityDataTable=!0;continue}o._readabilityDataTable=T.rows*T.columns>10}},_fixLazyImages:function(n){this._forEachNode(this._getAllNodesWithTag(n,["img","picture","figure"]),function(a){if(a.src&&this.REGEXPS.b64DataUrl.test(a.src)){var i=this.REGEXPS.b64DataUrl.exec(a.src);if(i[1]==="image/svg+xml")return;for(var o=!1,l=0;l<a.attributes.length;l++){var s=a.attributes[l];if(s.name!=="src"&&/\.(jpg|jpeg|png|webp)/i.test(s.value)){o=!0;break}}if(o){var c=a.src.search(/base64\s*/i)+7,u=a.src.length-c;u<133&&a.removeAttribute("src")}}if(!((a.src||a.srcset&&a.srcset!="null")&&a.className.toLowerCase().indexOf("lazy")===-1)){for(var m=0;m<a.attributes.length;m++)if(s=a.attributes[m],!(s.name==="src"||s.name==="srcset"||s.name==="alt")){var p=null;if(/\.(jpg|jpeg|png|webp)\s+\d/.test(s.value)?p="srcset":/^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(s.value)&&(p="src"),p){if(a.tagName==="IMG"||a.tagName==="PICTURE")a.setAttribute(p,s.value);else if(a.tagName==="FIGURE"&&!this._getAllNodesWithTag(a,["img","picture"]).length){var T=this._doc.createElement("img");T.setAttribute(p,s.value),a.appendChild(T)}}}}})},_getTextDensity:function(n,a){var i=this._getInnerText(n,!0).length;if(i===0)return 0;var o=0,l=this._getAllNodesWithTag(n,a);return this._forEachNode(l,s=>o+=this._getInnerText(s,!0).length),o/i},_cleanConditionally:function(n,a){this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)&&this._removeNodes(this._getAllNodesWithTag(n,[a]),function(i){var o=function(w){return w._readabilityDataTable},l=a==="ul"||a==="ol";if(!l){var s=0,c=this._getAllNodesWithTag(i,["ul","ol"]);this._forEachNode(c,w=>s+=this._getInnerText(w).length),l=s/this._getInnerText(i).length>.9}if(a==="table"&&o(i)||this._hasAncestorTag(i,"table",-1,o)||this._hasAncestorTag(i,"code"))return!1;var u=this._getClassWeight(i);this.log("Cleaning Conditionally",i);var m=0;if(u+m<0)return!0;if(this._getCharCount(i,",")<10){for(var p=i.getElementsByTagName("p").length,T=i.getElementsByTagName("img").length,k=i.getElementsByTagName("li").length-100,Q=i.getElementsByTagName("input").length,B=this._getTextDensity(i,["h1","h2","h3","h4","h5","h6"]),g=0,le=this._getAllNodesWithTag(i,["object","embed","iframe"]),D=0;D<le.length;D++){for(var X=0;X<le[D].attributes.length;X++)if(this._allowedVideoRegex.test(le[D].attributes[X].value))return!1;if(le[D].tagName==="object"&&this._allowedVideoRegex.test(le[D].innerHTML))return!1;g++}var se=this._getLinkDensity(i),C=this._getInnerText(i).length,h=T>1&&p/T<.5&&!this._hasAncestorTag(i,"figure")||!l&&k>p||Q>Math.floor(p/3)||!l&&B<.9&&C<25&&(T===0||T>2)&&!this._hasAncestorTag(i,"figure")||!l&&u<25&&se>.2||u>=25&&se>.5||g===1&&C<75||g>1;if(l&&h){for(var x=0;x<i.children.length;x++)if(i.children[x].children.length>1)return h;let w=i.getElementsByTagName("li").length;if(T==w)return!1}return h}return!1})},_cleanMatchedNodes:function(n,a){for(var i=this._getNextNode(n,!0),o=this._getNextNode(n);o&&o!=i;)a.call(this,o,o.className+" "+o.id)?o=this._removeAndGetNext(o):o=this._getNextNode(o)},_cleanHeaders:function(n){let a=this._getAllNodesWithTag(n,["h1","h2"]);this._removeNodes(a,function(i){let o=this._getClassWeight(i)<0;return o&&this.log("Removing header with low class weight:",i),o})},_headerDuplicatesTitle:function(n){if(n.tagName!="H1"&&n.tagName!="H2")return!1;var a=this._getInnerText(n,!1);return this.log("Evaluating similarity of header:",a,this._articleTitle),this._textSimilarity(this._articleTitle,a)>.75},_flagIsActive:function(n){return(this._flags&n)>0},_removeFlag:function(n){this._flags=this._flags&~n},_isProbablyVisible:function(n){return(!n.style||n.style.display!="none")&&!n.hasAttribute("hidden")&&(!n.hasAttribute("aria-hidden")||n.getAttribute("aria-hidden")!="true"||n.className&&n.className.indexOf&&n.className.indexOf("fallback-image")!==-1)},parse:function(){if(this._maxElemsToParse>0){var n=this._doc.getElementsByTagName("*").length;if(n>this._maxElemsToParse)throw new Error("Aborting parsing document; "+n+" elements found")}this._unwrapNoscriptImages(this._doc);var a=this._disableJSONLD?{}:this._getJSONLD(this._doc);this._removeScripts(this._doc),this._prepDocument();var i=this._getArticleMetadata(a);this._articleTitle=i.title;var o=this._grabArticle();if(!o)return null;if(this.log("Grabbed: "+o.innerHTML),this._postProcessContent(o),!i.excerpt){var l=o.getElementsByTagName("p");l.length>0&&(i.excerpt=l[0].textContent.trim())}var s=o.textContent;return{title:this._articleTitle,byline:i.byline||this._articleByline,dir:this._articleDir,lang:this._articleLang,content:this._serializer(o),textContent:s,length:s.length,excerpt:i.excerpt,siteName:i.siteName||this._articleSiteName}}},typeof t=="object"&&(t.exports=r)}),sl=Yr((e,t)=>{var r={unlikelyCandidates:/-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,okMaybeItsACandidate:/and|article|body|column|content|main|shadow/i};function n(i){return(!i.style||i.style.display!="none")&&!i.hasAttribute("hidden")&&(!i.hasAttribute("aria-hidden")||i.getAttribute("aria-hidden")!="true"||i.className&&i.className.indexOf&&i.className.indexOf("fallback-image")!==-1)}function a(i,o={}){typeof o=="function"&&(o={visibilityChecker:o});var l={minScore:20,minContentLength:140,visibilityChecker:n};o=Object.assign(l,o);var s=i.querySelectorAll("p, pre, article"),c=i.querySelectorAll("div > br");if(c.length){var u=new Set(s);[].forEach.call(c,function(p){u.add(p.parentNode)}),s=Array.from(u)}var m=0;return[].some.call(s,function(p){if(!o.visibilityChecker(p))return!1;var T=p.className+" "+p.id;if(r.unlikelyCandidates.test(T)&&!r.okMaybeItsACandidate.test(T)||p.matches("li p"))return!1;var k=p.textContent.trim().length;return k<o.minContentLength?!1:(m+=Math.sqrt(k-o.minContentLength),m>o.minScore)})}typeof t=="object"&&(t.exports=a)}),fa=Yr((e,t)=>{var r=ol(),n=sl();t.exports={Readability:r,isProbablyReaderable:n}}),ba={};al(ba,{Readability:()=>Ta,default:()=>xa,isProbablyReaderable:()=>wa});var ya=ha(fa());il(ba,ha(fa()));var{Readability:Ta,isProbablyReaderable:wa}=ya,{default:pa,...ll}=ya,xa=pa!==void 0?pa:ll;var cd=Jt.alert;function be(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():_}var Y=be();function At(){return Y.IMMERSIVE_TRANSLATE_USERSCRIPT==="1"}function ot(){return Y.PROD==="1"}function dt(){return Y.PROD_API==="1"}function Qe(){if(Y.IMMERSIVE_TRANSLATE_SAFARI==="1")return!0;if(typeof globalThis.immersiveTranslateBrowserAPI<"u"&&globalThis.immersiveTranslateBrowserAPI.runtime&&globalThis.immersiveTranslateBrowserAPI.runtime.getManifest){let t=globalThis.immersiveTranslateBrowserAPI.runtime.getManifest();return!!(t&&t._isSafari)}else return!1}function va(){return typeof Deno<"u"}var Ad=be().PROD==="1",kd=be().PROD!=="1";function Sa(){return typeof globalThis.__IS_IMMERSIVE_TRANSLATE_WEB_OPTIONS_PAGE__<"u"}function Qr(){if(typeof globalThis.immersiveTranslateBrowserAPI<"u"&&globalThis.immersiveTranslateBrowserAPI.runtime&&globalThis.immersiveTranslateBrowserAPI.runtime.getManifest){let e=globalThis.immersiveTranslateBrowserAPI.runtime.getManifest();return!!(e&&(e._isUserscript||e._isSafari))}else return!1}var Aa={nologin:"\u672A\u767B\u5F55",loginForSafari:"\u767B\u5F55\u6216\u6CE8\u518C",login:"\u767B\u5F55\u540E\u53EF\u5F00\u901A\u4F1A\u5458",manageAccount:"\u7BA1\u7406\u8D26\u6237",openPremium:"\u5F00\u901A\u4F1A\u5458",logout:"\u9000\u51FA",curentPlan:"\u5F53\u524D\u5957\u9910",endAt:"\u5230\u671F",endAuto:"\u81EA\u52A8\u7EED\u671F",lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","noSupportTranslate-pdf":"\u811A\u672C\u4E0D\u652F\u6301\u8BF7\u4F7F\u7528\u63D2\u4EF6","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u5BFC\u5165PDF",enableLineBreak:"\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E\u683C\u5F0F\u4E3A (\u6CA1\u6709\u505A\u81EA\u52A8\u8BC6\u522B\uFF0C\u8BF7\u76F4\u63A5\u8F93\u5165)\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.shortBrandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1: \u53CC\u8BED\u5BF9\u7167\u7F51\u9875\u7FFB\u8BD1 & PDF\u6587\u6863\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u540C\u65F6\u652F\u6301 PDF \u7FFB\u8BD1\uFF0C\u53CC\u8BED Epub \u7535\u5B50\u4E66\u5236\u4F5C\uFF0C\u652F\u6301 Deepl/Google/\u6709\u9053/\u817E\u8BAF\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u514D\u8D39\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8BD1\u5E76\u9690\u85CF\u539F\u6587/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.toggleTranslationMask":"\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6","browser.openEbookViewer":"\u9605\u8BFB\u672C\u5730\u7535\u5B50\u4E66","browser.openEbookBuilder":"\u5236\u4F5C\u53CC\u8BED EPUB \u7535\u5B50\u4E66","browser.translateLocalHtmlFile":"\u7FFB\u8BD1 HTML/txt \u6587\u4EF6","browser.donateContext":"\u4E86\u89E3\u8D5E\u52A9\u798F\u5229","browser.translateLocalSubtitleFile":"\u7FFB\u8BD1\u672C\u5730\u5B57\u5E55\u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",isShowContextMenu:"\u5C06\u7FFB\u8BD1\u7F51\u9875\u52A0\u5165\u53F3\u952E\u83DC\u5355\u9879",toggleBeta:"\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",betaDescription:"\u542F\u7528\u4ECD\u5728\u5B9E\u9A8C\u6027\u7684\u529F\u80FD\uFF0C\u4EE5\u53CA\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u603B\u662F\u6362\u884C\u9002\u7528\u4E8E\u8F83\u5C11\u5185\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F50\u3002\uFF08\u5728\u5185\u5BB9\u8F83\u591A\u7684\u957F\u6BB5\u843D(\u8D85\u8FC7{count}\u4E2A\u5B57\u7B26) \u4F7F\u7528\u667A\u80FD\u6362\u884C\uFF0C\u66F4\u7701\u7A7A\u95F4\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1\uFF0C\u53EF\u8BBE\u7F6E\u4E34\u65F6\u65F6\u957F",xMinutes:"{count} \u5206\u949F",disabled:"\u7981\u7528",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5219\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875(\u4EC5\u8BD1\u6587)/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",mouseHoldKey:"+ {key} \u7FFB\u8BD1/\u8FD8\u539F\u8BE5\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8BD1\u8BE5\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E(\u6253\u5F00\u8BBE\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8BD1/\u8FD8\u539F\u8BE5\u6BB5",mouseHoverHoldKey:"\u9F20\u6807\u60AC\u505C\u540C\u65F6\u6309\u4E0B\u5FEB\u6377\u952E\u7FFB\u8BD1\u6BB5\u843D","mouse-translate":"\u9F20\u6807\u60AC\u505C",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",resetThisSuccess:"\u91CD\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",goAdvancedInterfaceSettings:"\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\u3002\u4EC5\u5BF9\u4E8E\u66F4\u4E13\u4E1A\u7684\u7528\u6237\uFF0C\u63D0\u4F9B\u66F4\u4E2A\u6027\u5316\u7684\u8BBE\u7F6E\u9879\u3002",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u4EF7\u683C","translate to the bottom of the page":"\u8FDB\u5165\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u8FDB\u5165\u7F51\u9875\u5C06\u7ACB\u5373\u7FFB\u8BD1\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\u3002\u5173\u95ED\u5219\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u6240\u6709\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\u3002\u5173\u95ED\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\uFF0C\u4EC5\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8BD1\u9875\u9762\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\uFF0C\u800C\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",moreOptions:"\u5C55\u5F00\u66F4\u591A\u81EA\u5B9A\u4E49\u9009\u9879",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u6240\u6709\u533A\u57DF",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",changeToOnlyTranslationMode:"\u5207\u6362\u4E3A\u4EC5\u663E\u793A\u8BD1\u6587",changeToDualTranslationMode:"\u5207\u6362\u4E3A\u53CC\u8BED\u7FFB\u8BD1",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",badUserscriptBrowser:"\u5F53\u524D\u6D4F\u89C8\u5668\u6CA1\u6709\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u6269\u5C55\u7684\u63A5\u53E3\uFF08\u6BD4\u5982\u83B7\u53D6\u6CB9\u7334\u811A\u672C\u81EA\u8EAB\u7684\u7248\u672C\u53F7\u4FE1\u606F\uFF09\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334\u6269\u5C55</1>\u7684\u6D4F\u89C8\u5668\u5982 Firefox",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",needActionForOptions:"(\u9700\u8BBE\u7F6E)",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u5F53\u524D\u7F51\u7AD9\uFF1A",autoEnableSubtitle:"\u81EA\u52A8\u5F00\u542F\u53CC\u8BED\u5B57\u5E55",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1 {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1 {language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",alwaysTranslateSomeSiteOrWildSite:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u7AD9",alwaysTranslateSomePage:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u9875",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA",import_export_title:"\u5BFC\u5165/\u5BFC\u51FA\u914D\u7F6E",syncToGoogleDrive:"\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65",floatBallOptions:"\u60AC\u6D6E\u7403\u8BBE\u7F6E","floatBallOptions.enable":"\u542F\u7528\u60AC\u6D6E\u7403","floatBallOptions.blockUrls":"\u7981\u7528\u7F51\u7AD9","floatBallOptions.add":"\u6DFB\u52A0","floatBallOptions.blockUrlDesc":"\u5F53\u9047\u4E0B\u5217\u7F51\u7AD9\u65F6\u4E0D\u663E\u793A\u60AC\u6D6E\u7403","floatBallOptions.clickType":"\u70B9\u51FB\u884C\u4E3A","floatBallOptions.clickTypeDesc":"\u60AC\u6D6E\u7403\u56FE\u6807\u70B9\u51FB\u65F6\u7684\u884C\u4E3A","floatBallOptions.clickPopup":"\u663E\u793A\u7FFB\u8BD1\u9762\u677F","floatBallOptions.clickTranslate":"\u7FFB\u8BD1/\u663E\u793A\u539F\u6587",previewAllThemes:"\u9884\u89C8\u5168\u90E8\u6837\u5F0F","translationTheme.none":"\u65E0","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.solidBorder":"\u5B9E\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C\uFF08\u5B66\u4E60\u6A21\u5F0F\uFF09","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.marker2":"\u9A6C\u514B\u7B142","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDashed":"\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDotted":"\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.nativeUnderline":"\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.wavy":"\u6CE2\u6D6A\u7EBF","translationServices.custom":"\u81EA\u5B9A\u4E49API","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.tenAlpha":"\u817E\u8BAF\u7FFB\u8BD1\u541B(Alpha)","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeepLX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.deepl":"DeepL","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"Azure \u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.cai":"\u5F69\u4E91\u5C0F\u8BD1 (Alpha)","translationServices.volcAlpha":"\u706B\u5C71 (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.you":"\u6709\u9053\u7FFB\u8BD1 (Alpha)","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.niu":"\u5C0F\u725B\u7FFB\u8BD1","translationServices.papago":"Papago \u7FFB\u8BD1","translationServices.d":"D (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u5C06\u8DF3\u8FC7\u7FFB\u8BD1",enableUserscriptPagePopup:"\u5728\u9875\u9762\u4E0A\u663E\u793A\u60AC\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u5173\u95ED\u60AC\u6D6E\u7403\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u60AC\u6D6E\u7403\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u603B\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8BD1\u6587\u6837\u5F0F",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B",syncToCloud:"\u540C\u6B65\u5230 Google Drive",syncToCloudDescription:"\u4E0A\u4F20\u5230\u4E91\u7AEF\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668/\u6CB9\u7334\u811A\u672C\u4E4B\u95F4\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",syncToAccount:"\u540C\u6B65\u5230\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u4E91\u7AEF",syncToAccountButton:"\u7ACB\u5373\u4E0E\u4E91\u7AEF\u540C\u6B65",syncToAccountDescription:"\u5728\u4E0D\u540C\u7684\u8BBE\u5907\u4E4B\u95F4\u81EA\u52A8\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",successSyncConfigInAccount:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",successSyncConfigToAccount:"\u6210\u529F\u540C\u6B65\u5230\u4E91\u7AEF",syncConfigNoUpdate:"\u5DF2\u7ECF\u662F\u6700\u65B0\u7684\u4E86",authFail:"\u6388\u6743\u5931\u8D25",syncTitle:"\u624B\u52A8\u5907\u4EFD\u7BA1\u7406",import_hint:"\u5BFC\u5165",upload:"\u4E0A\u4F20",revokeAuth:"\u64A4\u9500\u6388\u6743",uploadFail:"\u4E0A\u4F20\u5931\u8D25",download:"\u4E0B\u8F7D",importSuccess:"\u5BFC\u5165\u6210\u529F",importFail:"\u5BFC\u5165\u5931\u8D25",deleteFail:"\u5220\u9664\u5931\u8D25",backupToCloud:"\u624B\u52A8\u7BA1\u7406\u5907\u4EFD\u6587\u4EF6",create_new_backup:"\u65B0\u589E\u5907\u4EFD\u8282\u70B9",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5907\u4EFD{count}\u4E2A\u4E0D\u540C\u7684\u8282\u70B9, \u8BF7\u5220\u9664\u4E0D\u9700\u8981\u7684\u8282\u70B9",backupToCloudDescription:"\u624B\u52A8\u4E0A\u4F20\u6216\u6062\u590D\u5907\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8BB83\u4E2A\u4E0D\u540C\u7684\u5907\u4EFD",successSyncConfig:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u8D25",updatedAt:"\u66F4\u65B0\u4E8E {date}",lastSyncedAt:"\u4E0A\u6B21\u68C0\u67E5\u4E8E {date}",downloadFail:"\u4E0B\u8F7D\u5931\u8D25",clickToDownload:"\u70B9\u51FB\u4E0B\u8F7D",aboutLabel:"\u5173\u4E8E - \u53CD\u9988","browser.openAboutPage":"\u5173\u4E8E/\u53CD\u9988",aboutLabelWithoutSponsor:"\u5173\u4E8E - \u53CD\u9988",aboutIntro:"\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F \u4F60\u53EF\u9009\u62E9\u5F00\u901A <6>Pro\u4F1A\u5458</6> \u6765\u4F7F\u7528\u5F00\u7BB1\u5373\u7528\u7684 DeepL \u548C OpenAI \u7FFB\u8BD1\u3002 <br/><br/>\u4F60\u53EF\u4EE5\u5173\u6CE8\u6211\u4EEC\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\uFF0C\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF0C\u6216\u8005\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002<br/> <7>Pro \u4F1A\u5458</7> \u53EF\u4EE5\u901A\u8FC7\u5FEB\u901F\u5BA2\u670D\u90AE\u7BB1 <8>support@immersivetranslate.com</8> \u548C\u6211\u4EEC\u53D6\u5F97\u8054\u7CFB\u3002",aboutIntroWithoutSponsor:"\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F  <br/><br/>\u4F60\u53EF\u4EE5\u5173\u6CE8\u6211\u4EEC\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\uFF0C\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF0C\u6216\u8005\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002",projectHomepage:"\u9879\u76EE\u4E3B\u9875",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u53C2\u4E0E\u529F\u80FD\u8BA8\u8BBA",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u4F17\u53F7",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",qqCommunities:"QQ \u4EA4\u6D41\u9891\u9053",joinTelegramChannel:"\u5173\u6CE8 Telegram \u9891\u9053\u83B7\u53D6\u6700\u65B0\u66F4\u65B0",feedbackAndJoin:"\u95EE\u9898\u53CD\u9988/\u52A0\u7FA4",autoSync:"\u81EA\u52A8\u5B9A\u65F6\u540C\u6B65",loadingThemeTitle:"Loading \u6837\u5F0F",loadingThemeDescription:"\u8BBE\u7F6E\u7B49\u5F85\u8BD1\u6587\u52A0\u8F7D\u65F6\u7684\u6837\u5F0F","loadingTheme.spinner":"\u8F6C\u5708\u52A8\u753B","loadingTheme.text":"\u9759\u6001\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u663E\u793A",developerDescription:"\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863","edit border color":"\u4FEE\u6539\u8FB9\u6846\u989C\u8272",successSyncButNoChange:"\u5F53\u524D\u914D\u7F6E\u4E0E\u4E91\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u8FB9\u6846\u989C\u8272","customThemeLabel.borderRadius":"\u8FB9\u6846\u5706\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u989C\u8272","customThemeLabel.backgroundColor":"\u80CC\u666F\u989C\u8272","customThemeLabel.zoom":"\u5B57\u4F53\u7F29\u653E\u6BD4\u4F8B (%)","customThemeLabel.opacity":"\u6587\u5B57\u4E0D\u900F\u660E\u5EA6 (%)",resetToDefaultColor:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u989C\u8272",resetToDefaultSettings:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u8BBE\u7F6E",isTranslateTitle:"\u5F00\u542F\u7FFB\u8BD1\u7F51\u9875\u6807\u9898",isTranslateTitleDescription:"\u5F00\u542F\u540E\uFF0C\u7F51\u9875\u6807\u9898\u4F1A\u88AB\u7FFB\u8BD1",enableSearchEnhancement:"\u542F\u7528\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A",enableSearchEnhancementDescription:"\u5F00\u542F\u540E\uFF0C\u5728\u652F\u6301\u7684\u7F51\u7AD9\uFF08\u8C37\u6B4C\u65B0\u95FB\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u5173\u952E\u8BCD\uFF09\uFF0C\u96EA\u7403\uFF0C\u4E1C\u65B9\u8D22\u5BCC\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\u793E\u533A\uFF09\u53F3\u8FB9\u680F\u81EA\u52A8\u663E\u793A\u5BF9\u5E94\u82F1\u6587\u5173\u952E\u8BCD\u7684\u201C\u8C37\u6B4C\u65B0\u95FB\u201D\u641C\u7D22\u7ED3\u679C\u3002",verifyService:"\u70B9\u6B64\u6D4B\u8BD5\u670D\u52A1",verified:"\u9A8C\u8BC1\u6210\u529F","field.langs":"\u652F\u6301\u7684\u8BED\u8A00\u4EE3\u7801","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8BD1\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u949F\u6700\u5927\u8BF7\u6C42\u6570","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8BF7\u6C42\u6570","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6587\u672C\u957F\u5EA6","field.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6BB5\u843D\u6570","field.apiUrl":"\u81EA\u5B9A\u4E49 API \u63A5\u53E3\u5730\u5740","field.placeholderDelimiters":"\u4FDD\u7559\u7684\u5360\u4F4D\u7B26","description.custom":"<a href='https://immersivetranslate.com/docs/services/custom/' target='_blank'>\u81EA\u5B9A\u4E49\u63A5\u53E3\u63A5\u5165</a> \u9700\u8981\u53C2\u8003\u6587\u6863","description.limitPerMinute":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u5206\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.generalLimitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002","description.prompt":"\u4EE5\u7528\u6237\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u8350\uFF09, \u5C06\u4F1A\u5728\u5355\u72EC\u4F5C\u4E3A\u4E00\u6BB5\u53D1\u9001\u7ED9 OpenAI","description.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u5B57\u7B26\u6570\uFF0C\u592A\u5927\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5C1D\u8BD5\u8C03\u6574\u8BE5\u9009\u9879\u6765\u4F18\u5316\u901F\u5EA6","description.systemPrompt":"\u4EE5\u7CFB\u7EDF\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00","field.domain":"\u9886\u57DF","description.domain":"\u9ED8\u8BA4\u4E3A\uFF1Ageneral\u3002\u4EC5\u5728\u6709\u9053API\u63A7\u5236\u53F0\u5F00\u901A\u9886\u57DF\u5316\u7FFB\u8BD1\u7684\u60C5\u51B5\u4E0B\u53EF\u8BBE\u7F6E\uFF0C\u652F\u6301\u9886\u57DF\u89C1<1>\u8FD9\u91CC</1>","field.scene":"\u573A\u666F","description.scene":"\u9ED8\u8BA4\u4E3A\uFF1Ageneral\u3002\u4EC5\u5728\u963F\u91CC\u4E91API\u63A7\u5236\u53F0\u5F00\u901A\u673A\u5668\u7FFB\u8BD1\u4E13\u4E1A\u7248\u7684\u60C5\u51B5\u4E0B\u53EF\u8BBE\u7F6E\uFF0C\u652F\u6301\u573A\u666F\u89C1<1>\u8FD9\u91CC</1>","field.vocabId":"\u7528\u6237\u8BCD\u5178 ID","description.vocabId":"\u6307\u5B9A\u7684\u8BCD\u5178 out_id\uFF0C\u76EE\u524D\u652F\u6301\u82F1\u8BD1\u4E2D","description.model":"OpenAI \u7684\u6A21\u578B\uFF0C\u53EF\u4EE5\u4E3A gpt-3.5-turbo, gpt-4 \u7B49","description.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u53D1\u9001\u7ED9\u7FFB\u8BD1\u670D\u52A1\u7684\u6BB5\u843D\u6570\u91CF\uFF0C\u5982\u679C\u6BB5\u843D\u6570\u91CF\u8FC7\u591A\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162","description.apiUrl":"\u8BF7\u6DFB\u52A0\u5177\u4F53\u5E26\u6709\u8DEF\u5F84\u7684\u7F51\u5740\uFF0C<1>\u66F4\u591A\u8BF4\u660E</1>",enabledExtension:"\u542F\u7528\u6269\u5C55",clickToDisableExtension:"\u70B9\u51FB\u7981\u7528\u6269\u5C55",clickToEnableExtension:"\u70B9\u51FB\u542F\u7528\u6269\u5C55",hasBeenDisabled:"\u5DF2\u7981\u7528","show password":"\u663E\u793A\u5BC6\u7801",customContent:"\u8F93\u5165\u81EA\u5B9A\u4E49\u6A21\u578B\u540D\u79F0",inputOptions:"\u8F93\u5165\u6846\u589E\u5F3A",mouseHoverOptions:"\u9F20\u6807\u60AC\u505C",modifyMouseHoverKey:"\u4FEE\u6539\u9F20\u6807\u60AC\u505C\u5FEB\u6377\u952E",enableInputTranslation:"\u662F\u5426\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",enableInputTranslationDescription:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165 {startingKey}{startingKey} \u4F60\u597D\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165\uFF1A\u4F60\u597D\u4E16\u754C\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguage:"\u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguageDescription:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00\uFF0C\u4E5F\u5C31\u662F {startingKey}{startingKey} \u4F5C\u4E3A\u89E6\u53D1\u8BCD\u7684\u9ED8\u8BA4\u8BED\u8A00",inputTargetLanguageDescriptionForNoneKey:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputStartingTriggerKeyTitle:"\u8BBE\u7F6E\u8F93\u5165\u6846\u90E8\u5206\u7FFB\u8BD1\u7684\u5206\u5272\u5B57\u7B26",inputStartingTriggerKeyDescription:"\u5F53\u4F60\u4E0D\u9700\u8981\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u7684\u65F6\u5019\uFF0C\u5206\u5272\u7B26\u5141\u8BB8\u4F60\u53EA\u7FFB\u8BD1 {startingKey}{startingKey} \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u8BED\u8A00\u4EE3\u7801\uFF0C\u6BD4\u5982\uFF1A{startingKey}ja \u8868\u793A\u53EA\u7FFB\u8BD1 {startingKey}ja \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206",inputStartingTriggerKeyDescriptionForNoneKey:"\u5F53\u524D\u8BBE\u7F6E\u4E3A\u65E0\u9700\u524D\u7F00\uFF0C\u6682\u65E0\u6CD5\u4F7F\u7528\u8F93\u5165\u6846\u7684\u90E8\u5206\u6587\u672C\u7FFB\u8BD1\u529F\u80FD",inputTrailingTriggerKeyTitle:"\u9009\u62E9\u4E00\u4E2A\u8F93\u5165\u7ED3\u675F\u7684\u89E6\u53D1\u5B57\u7B26",inputTrailingTriggerKeyDescription:"\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey} \u5C06\u4F1A\u5F00\u59CB\u7FFB\u8BD1",inputTrailingTriggerKeyTimeout:"\u8F93\u5165\u7ED3\u675F\u8FDE\u51FB\u89E6\u53D1\u7684\u95F4\u9694\u65F6\u95F4",inputTrailingTriggerKeyTimeoutDescription:"\u8BBE\u7F6E\u8F93\u5165\u7ED3\u675F\u8FDE\u51FB\u89E6\u53D1\u7684\u95F4\u9694\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09",spaceKey:"<\u7A7A\u683C\u952E>",noneKey:"\u65E0\u9700\u524D\u7F00\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u6587\u672C\u6846",inputTranslationBlockUrlsTitle:"\u5207\u52FF\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",inputTranslationBlockUrlsDescription:"\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\uFF0C\u8F93\u5165\u6846\u589E\u5F3A\u5C06\u4E0D\u4F1A\u751F\u6548",clickToSeeQuickDemo:"\u70B9\u51FB\u5C55\u5F00 30 \u79D2\u5FEB\u901F\u6559\u5B66\u89C6\u9891",inputHelperInfo:"\u8BF4\u660E\uFF1A\u6211\u4EEC\u7279\u522B\u9488\u5BF9\u5728\u4E2D\u6587\u8F93\u5165\u6CD5\u4E0B\u90E8\u5206\u89E6\u53D1\u5B57\u7B26\u4F1A\u53D8\u6210\u4E2D\u6587\u6807\u70B9\u7B26\u53F7\u8FD9\u4EF6\u4E8B\u505A\u4E86\u4F18\u5316\uFF0C\u6BD4\u5982\u641C\u72D7\u8F93\u5165\u6CD5\u4E0B / \u4F1A\u53D8\u6210\u987F\u53F7 \u3001\uFF0C\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u652F\u6301\u6240\u6709\u89E6\u53D1\u7B26\u5BF9\u5E94\u7684\u4E2D\u6587\u7B26\u53F7\uFF0C\u4E5F\u5C31\u662F\u8BF4 // \u3001\u3001 \u90FD\u4F1A\u88AB\u8BC6\u522B\u4E3A\u89E6\u53D1\u5B57\u7B26\u3002<br/><br/>\u540C\u65F6\u6211\u4EEC\u4E5F\u652F\u6301\u8BED\u8A00\u4EE3\u7801\u7684\u4E2D\u6587\u522B\u540D\u4F5C\u4E3A\u547D\u4EE4\uFF0C\u6BD4\u5982 /\u65E5\u6587 \u4F60\u597D\u4E16\u754C \u4F1A\u88AB\u7FFB\u8BD1\u4E3A\u65E5\u6587\uFF0C<1>\u70B9\u6B64\u67E5\u770B\u6240\u6709\u652F\u6301\u7684\u8BED\u8A00\u4EE3\u7801</1>\u3002",reloadCurrentPage:"\u8BF7\u5148\u5237\u65B0\u5F53\u524D\u9875\u9762\uFF0C\u518D\u5F00\u59CB\u7FFB\u8BD1",noLocalFilePermissionForPDF:"\u6682\u65E0\u6743\u9650\u8BFB\u53D6\u672C\u5730\u6587\u4EF6\uFF0C\u8BF7\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\uFF0C\u7136\u540E\u5BFC\u5165\u672C\u5730\u6587\u4EF6",noPermissionForThisPage:"\u26A0\uFE0F \u6682\u65E0\u6743\u9650\u7FFB\u8BD1\u5F53\u524D\u9875\u9762",retryAllParagraphs:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",retryAllButton:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",errorTooltipTitle:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u539F\u56E0",errorModalTitle:"\u7FFB\u8BD1\u670D\u52A1\u6216\u7F51\u7EDC\u4F3C\u4E4E\u51FA\u4E86\u70B9\u95EE\u9898...",disableConfirm:"\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A\u8BBE\u7F6E",disableOnce:"\u672C\u6B21\u7981\u7528",disableGlobal:"\u6C38\u4E45\u7981\u7528",disableTint:"* \u4F60\u53EF\u4EE5\u5728 {option} \u4E2D\u91CD\u65B0\u542F\u7528\u3002",searchEnhancementNotes:"\u6211\u4EEC\u53D1\u73B0\uFF0C\u4E2D\u6587\u5173\u952E\u8BCD\u548C\u82F1\u6587\u5173\u952E\u8BCD\u7684\u65B0\u95FB\u7ED3\u679C\u6709\u975E\u5E38\u5927\u7684\u4E0D\u540C\uFF0C\u5728\u542F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A\u529F\u80FD\u540E\uFF0C\u6211\u4EEC\u4F1A\u5728\u652F\u6301\u7684\u7F51\u7AD9\uFF08\u8C37\u6B4C\u65B0\u95FB\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u5173\u952E\u8BCD\uFF09\uFF0C\u96EA\u7403\uFF0C\u4E1C\u65B9\u8D22\u5BCC\u7F51\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\uFF09\u81EA\u52A8\u7528\u82F1\u6587\u4E3A\u4F60\u641C\u7D22\u540C\u6837\u7684\u5173\u952E\u8BCD\u5E76\u5C55\u793A\u5728\u53F3\u4FA7\u3002\u5982\u679C\u4F60\u4E0D\u9700\u8981\u8BE5\u529F\u80FD\u7684\u8BDD\uFF0C\u53EF\u4EE5\u9009\u62E9\u7981\u7528\u5B83\u3002",option:"\u8BBE\u7F6E",saveSettings:"\u4FDD\u5B58\u8BBE\u7F6E",closeModal:"\u5173\u95ED\u7A97\u53E3",enableInputTranslationWithoutTriggerKeyTitle:"\u542F\u7528\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey}\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u4E3A{inputTargetLanguage}",enableInputTranslationWithoutTriggerKeyDescription:"\u5982\u9700\u6307\u5B9A\u76EE\u6807\u8BED\u8A00\uFF0C\u8BF7\u5728\u524D\u9762\u52A0\u4E0A\u8BED\u8A00\u4EE3\u7801\uFF0C\u5982\uFF1Aja \u4F60\u597D\u4E16\u754C",mouseHoverShortcutPlaceholder:"\u5982\uFF1AShift",deepLProName:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1 Pro \u4F1A\u5458 (\u63A8\u8350)",deepLProDescription:"\u5F53\u524D\u5957\u9910\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",deeplProDescriptionForNormal:"\u65E0\u9700\u4EFB\u4F55\u8BBE\u7F6E\uFF0C\u4F1A\u5458\u767B\u5F55\u540E\u5373\u53EF\u4F7F\u7528\uFF0C<1>\u70B9\u6B64\u5347\u7EA7\u4E3A\u4F1A\u5458</1>",deepLCustomDescription:"\u9700\u8981\u56FD\u5916\u4FE1\u7528\u5361\uFF0C\u5728 <1>DeepL</1> \u5B98\u65B9\u5F00\u901A\uFF0C\u70B9\u51FB\u67E5\u770B<2>\u6587\u6863</2>",deepLCustomName:"\u81EA\u5B9A\u4E49 Auth Key",chooseProviderLabel:"\u9009\u62E9\u4E00\u4E2A\u670D\u52A1\u63D0\u4F9B\u5546",openaiProName:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1 Pro \u4F1A\u5458 (\u63A8\u8350)",openaiProDescription:"\u5F53\u524D\u5957\u9910\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",openaiProDescriptionForNormal:"\u65E0\u9700\u4EFB\u4F55\u8BBE\u7F6E\uFF0C\u4F1A\u5458\u767B\u5F55\u540E\u5373\u53EF\u4F7F\u7528\uFF0C<1>\u70B9\u6B64\u5347\u7EA7\u4E3A\u4F1A\u5458</1>",openaiCustomDescription:"\u53EF\u5728 OpenAI, Azure OpenAI, \u6216\u5176\u4ED6\u7B2C\u4E09\u65B9\u670D\u52A1\u83B7\u53D6\uFF0C<1>\u70B9\u6B64\u67E5\u770B\u6587\u6863</1>",openaiCustomName:"\u81EA\u5B9A\u4E49 API Key",needLoginAction:"(\u5F00\u901A\u4F1A\u5458\u6216\u81EA\u5B9A\u4E49)",goLoginOrAction:"(\u5F00\u901A\u4F1A\u5458\u6216\u53BB\u8BBE\u7F6E)",yearly:"\u8FDE\u7EED\u5305\u5E74",quarterly:"\u8FDE\u7EED\u5305\u5B63",monthly:"\u8FDE\u7EED\u5305\u6708",yearlyForOnce:"\u4E00\u6B21\u6027\u5E74\u5EA6\u5957\u9910",monthlyForOnce:"\u4E00\u6B21\u6027\u6708\u5EA6\u5957\u9910",daily:"\u8FDE\u7EED\u5305\u65E5",year:"\u8FDE\u7EED\u5305\u5E74",quarter:"\u8FDE\u7EED\u5305\u5B63",month:"\u8FDE\u7EED\u5305\u6708",day:"\u8FDE\u7EED\u5305\u65E5",onetime_7day:"7 \u5929\u4F53\u9A8C\u5305",currentPlanDescriptionForFree:"\u5F53\u524D\u5957\u9910\uFF1A\u514D\u8D39",currentPlanDescriptionForContinuous:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u81EA\u52A8\u7EED\u8D39",currentPlanDescriptionForAutoRenewCaceling:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C\u5230\u671F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EED\u671F",currentYearlyPlanDescriptionForAutoRenewCacelingWithRealPaiedUser:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C\u5230\u671F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EED\u671F\u3002<br/><1>\u70B9\u6B64\u7BA1\u7406\u7EED\u8D39\u65B9\u6848</1>",currentYearlyPlanDescriptionForAutoRenewCacelingWithAdmin:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C\u5230\u671F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EED\u671F\u3002<br/><1>\u70B9\u6B64\u542F\u7528\u8FDE\u7EED\u5305\u5E74</1>",currentPlanDescriptionForOneTime:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C<1>\u70B9\u6B64\u5347\u7EA7\u4E3A\u5E74\u8D39</1>\u6216<2>\u6708\u8D39</2>\u4F1A\u5458",upgradePlan:"\u70B9\u6B64\u5347\u7EA7\u4E3A Pro \u4F1A\u5458",upgradeToPro:"\u5347\u7EA7\u4E3A Pro \u4F1A\u5458","popup.openPro":"\u5347\u7EA7\u4E3A Pro \u4F1A\u5458\u540E\u53EF\u4EE5\u7545\u4EAB DeepL \u548C OpenAI \u7FFB\u8BD1\uFF0C\u70B9\u6B64\u5347\u7EA7","popup.openProForPro":"\u60A8\u662F Pro \u4F1A\u5458\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528 DeepL \u548C OpenAI \u7FFB\u8BD1",currentAccount:"\u5F53\u524D\u8D26\u6237",enableAutoSyncUserSettings:"\u542F\u7528\u591A\u8BBE\u5907\u81EA\u52A8\u4E91\u540C\u6B65",modalEnableInputTranslationTitle:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u8F93\u5165\u6846\u7FFB\u8BD1\u63D0\u793A",modalEnableInputTranslationDesc:"\u60A8\u521A\u521A\u901A\u8FC7\u5FEB\u901F\u8FDE\u51FB 3 \u6B21\u7A7A\u683C\u952E\u89E6\u53D1\u4E86\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u7684\u8F93\u5165\u6846\u7FFB\u8BD1\uFF0C\u8F93\u5165\u6846\u7684\u5185\u5BB9\u5C06\u88AB\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u7684\u76EE\u6807\u8BED\u8A00\u3002\u901A\u8FC7 Ctrl+Z \u53EF\u4EE5\u64A4\u9500\u7FFB\u8BD1\u3002<br /><br />\u5982\u679C\u8FD9\u662F\u4E00\u4E2A\u5931\u8BEF\uFF0C\u4E0D\u7528\u62C5\u5FC3\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u672C\u6B21\u7981\u7528\uFF0C\u6216\u8005\u6C38\u4E45\u7981\u7528\u8F93\u5165\u6846\u7FFB\u8BD1\u3002",saveAndNotShowAgain:"\u4FDD\u5B58\u4E14\u4E0D\u518D\u63D0\u793A",disableInputTranslationTips:"* \u4F60\u4E5F\u53EF\u4EE5\u5728 {option} \u4E2D\u8BBE\u7F6E\u5176\u4ED6\u5FEB\u6377\u952E\u6765\u89E6\u53D1\uFF0C{learnMore}\u3002",learnMore:"\u70B9\u6B64\u4E86\u89E3\u66F4\u591A",continueEnalbeInputTranslation:"\u7EE7\u7EED\u542F\u7528\u8F93\u5165\u6846\u7FFB\u8BD1",autoRenewTrialSuffix:'\uFF08\u8BD5\u7528\u4E2D\uFF0C<a href="https://immersivetranslate.com/profile/?upgradeFromTrial=true" id="upgradeFromTrial">\u7ACB\u523B\u5347\u7EA7\u4E3A\u6B63\u5F0F\u4F1A\u5458</a>\uFF09',upgradeFromTrialTitle:"\u5347\u7EA7\u4E3A\u6B63\u5F0F\u4F1A\u5458",subtitle:"\u89C6\u9891\u5B57\u5E55",youtubeService:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u89C6\u9891\u5B57\u5E55\u7FFB\u8BD1\u670D\u52A1","subtitle.disabledSubtitle":"\u6C38\u4E45\u7981\u7528\u89C6\u9891\u5B57\u5E55\u529F\u80FD","subtitle.disabledSubtitleDescription":"\u5982\u679C\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u7684\u89C6\u9891\u5B57\u5E55\u548C\u5176\u4ED6\u6269\u5C55\u6709\u51B2\u7A81\uFF0C\u4F60\u53EF\u4EE5\u9009\u62E9\u6C38\u4E45\u7981\u7528\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u7684\u89C6\u9891\u5B57\u5E55\u529F\u80FD\u6216\u8005\u5378\u8F7D\u5176\u4ED6\u51B2\u7A81\u7684\u6269\u5C55","subtitle.autoEnableSubtitle":"\u81EA\u52A8\u4F7F\u7528\u53CC\u8BED\u5B57\u5E55","subtitle.autoEnableSubtitleDescription":"\u5F53\u524D\u4EC5\u652F\u6301 Youtube \u7F51\u7AD9\uFF0C\u542F\u7528\u540E\uFF0C\u5F53\u89C6\u9891\u64AD\u653E\u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u663E\u793A\u53CC\u8BED\u5B57\u5E55\uFF0C\u5426\u5219\u9700\u8981\u70B9\u51FB\u7FFB\u8BD1\u6309\u94AE\u624D\u4F1A\u663E\u793A\u3002","subtitle.preTranslation":"\u4F7F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u6765\u7FFB\u8BD1\u5B57\u5E55","subtitle.preTranslationDescription":"\u542F\u7528\u540E\u4F1A\u4F18\u5148\u7528\u4E0B\u9762\u7684\u6307\u5B9A\u7684\u7FFB\u8BD1\u670D\u52A1\u63D0\u524D\u7FFB\u8BD1\u6574\u4E2A\u5B57\u5E55\uFF0C1 \u5C0F\u65F6\u7684\u89C6\u9891\u5927\u6982\u6D88\u8017 5\u4E07 Tokens \u6216 \u5B57\u7B26\uFF0C\u8BF7\u914C\u60C5\u4F7F\u7528\uFF1B\u5173\u95ED\u540E\u5219\u4F18\u5148\u4F7F\u7528\u539F\u89C6\u9891\u81EA\u5E26\u7684\u673A\u7FFB\u5B57\u5E55","subtitle.humanSubtitlesPreferred":"\u4F18\u5148\u4F7F\u7528\u4EBA\u5DE5\u5B57\u5E55","subtitle.humanSubtitlesPreferredDescription":"\u5F53\u89C6\u9891\u6709\u76EE\u6807\u8BED\u8A00\u4EBA\u5DE5\u5B57\u5E55\u65F6\uFF0C\u4F18\u5148\u4F7F\u7528\u4EBA\u5DE5\u5B57\u5E55\uFF08\u63A8\u8350\uFF09",videoSubtitleTranslationDescription:"\u4E3A\u89C6\u9891\u5B57\u5E55\u5355\u72EC\u6307\u5B9A\u4E00\u4E2A\u7FFB\u8BD1\u670D\u52A1",subtitleTranslating:"\u6B63\u5728\u4F7F\u7528 {service} \u670D\u52A1\u7FFB\u8BD1\u5B57\u5E55\u4E2D\uFF0C\u8BF7\u7A0D\u7B49...\uFF08\u6C89\u6D78\u5F0F\u7FFB\u8BD1\uFF09",subtitleLoading:"\u6B63\u5728\u52A0\u8F7D\u5B57\u5E55...",bilingual:"\u53CC\u8BED","field.action":"\u662F\u5426\u542F\u7528\u767E\u5EA6\u672F\u8BED","description.action":"\u542F\u7528\u540E\u4F1A\u5728\u8BF7\u6C42\u4E2D\u52A0\u5165 action=1 \u7684\u53C2\u6570\uFF0C\u4EE5\u4FBF\u544A\u77E5\u767E\u5EA6\u542F\u7528\u672F\u8BED\uFF0C<1>\u66F4\u591A\u8BF4\u660E\u8BF7\u53C2\u8003\u5B98\u65B9\u6587\u6863</1>",closeQuickTranslation:"\u5173\u95ED\u60AC\u6D6E\u7403","closeQuickTranslation.untilNext":"\u672C\u6B21\u5173\u95ED\u76F4\u5230\u4E0B\u6B21\u8BBF\u95EE","closeQuickTranslation.currentWebsite":"\u5F53\u524D\u7F51\u7AD9\u7981\u7528","closeQuickTranslation.alwaysClose":"\u6C38\u4E45\u7981\u7528","closeQuickTranslation.settingOpen":"\uFF08\u53EF\u5728<1>\u8BBE\u7F6E\u9875</1>\u5F00\u542F\uFF09","closeQuickTranslation.cancel":"\u53D6\u6D88","closeQuickTranslation.confirm":"\u786E\u5B9A","floatBall.popup":"\u6253\u5F00\u5FEB\u6377\u8BBE\u7F6E\u9762\u677F","floatBall.translate":"\u70B9\u51FB\u7FFB\u8BD1\u8BE5\u9875\u9762","floatBall.showOriginal":"\u70B9\u51FB\u5207\u6362\u56DE\u539F\u6587","floatBall.close":"\u5173\u95ED\u60AC\u6D6E\u7403","floatBallOptions.enableDescPc":"\u542F\u7528\u9875\u9762\u60AC\u6D6E\u7403\u540E\uFF0C\u4F1A\u5728\u9875\u9762\u53F3\u4FA7\u663E\u793A\u4E00\u4E2A\u5FEB\u6377\u7FFB\u8BD1\u6309\u94AE\uFF0C\u70B9\u51FB\u5373\u53EF\u7FFB\u8BD1","floatBallOptions.enableDesc":"\u5173\u95ED\u60AC\u6D6E\u7403\u540E\uFF0C\u53EF\u4EE5\u7528{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u60AC\u6D6E\u7403\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","description.azureApiUrl":"\u586B\u5199\u81EA\u5B9A\u4E49\u7684API\u63A5\u53E3\u5730\u5740"};var ka={nologin:"\u672A\u767B\u9304",login:"\u767B\u9304",manageAccount:"\u7BA1\u7406\u8CEC\u6236",logout:"\u9000\u51FA",curentPlan:"\u7576\u524D\u5957\u9910",endAt:"\u5230\u671F",endAuto:"\u81EA\u52D5\u7E8C\u671F",lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u5143\u6578\u91CF","translate-pdf":"\u9EDE\u9078\u7FFB\u8B6F PDF","noSupportTranslate-pdf":"\u8173\u672C\u4E0D\u652F\u63F4\uFF0C\u8ACB\u4F7F\u7528\u64F4\u5145\u5957\u4EF6","translate-firefox-local-pdf":"\u9EDE\u64CA\u53BB\u5C0E\u5165PDF",enableLineBreak:"\u958B\u555F\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D0A\u52A9\u958B\u767C\u8005 (\u6708\u4ED8\u6216\u50C5\u8D0A\u52A9\u4E00\u6B21\u5747\u53EF)",help:"\u8AAA\u660E",browserShortcutsNoteForFirefox:"Firefox \u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u9644\u52A0\u5143\u4EF6\u7BA1\u7406\u9801\u9762 \u300Cabout:addons\u300D\uFF0C\u7136\u5F8C\u9EDE\u9078\u300C\u8A2D\u5B9A\u5716\u793A\u300D\uFF0C\u518D\u9EDE\u9078\u300C\u7BA1\u7406\u64F4\u5145\u5957\u4EF6\u5FEB\u901F\u9375\u300D\u5373\u53EF\u8A2D\u5B9A",browserShortcutsNoteForChrome:"Chromium \u6838\u5FC3\u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u64F4\u5145\u529F\u80FD\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u300C\u9375\u76E4\u5FEB\u901F\u9375\u300D\u9801\u9762(chrome://extensions/shortcuts)\u8A2D\u5B9A\uFF0C\u9EDE\u9078\u4E0B\u65B9\u6309\u9215\u524D\u5F80\u5FEB\u901F\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u901F\u9375\u683C\u5F0F\u70BA\uFF1A (\u6CA1\u6709\u505A\u81EA\u52A8\u8BC6\u522B\uFF0C\u8BF7\u76F4\u63A5\u8F93\u5165)\uFF1A",enableLineBreakDescription:"\u555F\u7528\u5F8C\uFF0C\u5C07\u6703\u5728\u9577\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u5B57\u5143\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.shortBrandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F: \u96D9\u8A9E\u5C0D\u7167\u7DB2\u9801\u7FFB\u8B6F & PDF\u6587\u6A94\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u540C\u6642\u652F\u6301 PDF \u7FFB\u8B6F\uFF0C\u96D9\u8A9E Epub \u96FB\u5B50\u66F8\u88FD\u4F5C\uFF0C\u652F\u6301 Deepl/Google/\u6709\u9053/\u9A30\u8A0A\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u514D\u8CBB\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8B6F\u4E26\u96B1\u85CF\u539F\u6587/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.openOptionsPage":"\u958B\u555F\u8A2D\u5B9A\u9801\u9762","browser.toggleTranslationMask":"\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u6A5F PDF \u6A94\u6848","browser.openEbookViewer":"\u95B1\u8B80\u672C\u6A5F\u96FB\u5B50\u66F8","browser.openEbookBuilder":"\u88FD\u4F5C\u96D9\u8A9E EPUB \u96FB\u5B50\u66F8","browser.translateLocalHtmlFile":"\u7FFB\u8B6F HTML/txt \u6A94\u6848","browser.donateContext":"\u4E86\u89E3\u8D0A\u52A9\u798F\u5229","browser.translateLocalSubtitleFile":"\u7FFB\u8B6F\u5B57\u5E55\u6A94\u6848",confirmResetConfig:"\u4F60\u78BA\u5B9A\u8981\u91CD\u8A2D\u8A2D\u5B9A\u55CE\uFF1F",translationLineBreakSettingTitle:"\u8B6F\u6587\u63DB\u884C\u8A2D\u5B9A",smartLineBreak:"\u667A\u6167\u63DB\u884C",alwaysLineBreak:"\u7E3D\u662F\u63DB\u884C",isShowContextMenu:"\u5C07\u7DB2\u9801\u7FFB\u8B6F\u529F\u80FD\u52A0\u5165\u53F3\u9375\u9078\u55AE",toggleBeta:"\u958B\u555F Beta \u6E2C\u8A66\u529F\u80FD",betaDescription:"\u555F\u7528\u4ECD\u5728\u5BE6\u9A57\u7684\u529F\u80FD\u4EE5\u53CA\u6E2C\u8A66\u4E2D\u7684\u7FFB\u8B6F\u670D\u52D9\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7D44</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u7E3D\u662F\u63DB\u884C\u9069\u7528\u65BC\u8F03\u5C11\u5167\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F4A\u3002(\u5728\u5167\u5BB9\u8F03\u591A\u7684\u9577\u6BB5\u843D(\u8D85\u904E {count} \u500B\u5B57\u5143) \u4F7F\u7528\u667A\u6167\u63DB\u884C\u6703\u66F4\u7701\u7A7A\u9593)",tempTranslateDomainTitle:"\u81E8\u6642\u958B\u555F\u7DB2\u7AD9\u7FFB\u8B6F\u7684\u6642\u9577",tempTranslateDomainDescription:"\u7576\u624B\u52D5\u7FFB\u8B6F\u67D0\u500B\u7DB2\u9801\u7684\u6642\u5019\uFF0C\u81E8\u6642\u958B\u555F\u8A72\u7DB2\u7AD9\u70BA\u81EA\u52D5\u7FFB\u8B6F",xMinutes:"{count} \u5206\u9418",disabled:"\u505C\u7528",changelog:"\u66F4\u65B0\u8A18\u9304",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u5247\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"\u591A\u6307\u540C\u6642\u89F8\u78B0\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801(\u50C5\u8B6F\u6587)/\u986F\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u70BA\u7DB2\u57DF\u540D\u7A31\uFF0C\u540C\u6642\u652F\u63F4\u842C\u7528\u5B57\u5143\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u5B9A",clickToExpandConfig:"\u5C55\u958B\u76EE\u524D\u8A2D\u5B9A",import:"\u5F9E\u6A94\u6848\u532F\u5165",export:"\u532F\u51FA\u70BA\u6A94\u6848",toggleDebug:"\u5728\u4E3B\u63A7\u53F0\u986F\u793A\u5075\u932F\u8A18\u9304","fingers.0":"\u95DC\u9589","fingers.2":"\u96D9\u6307\u89F8\u6478","fingers.3":"\u4E09\u6307\u89F8\u6478","fingers.4":"\u56DB\u6307\u89F8\u6478","fingers.5":"\u4E94\u6307\u89F8\u6478",mouseHoldKey:"+ {key} \u7FFB\u8B6F/\u9084\u539F\u8A72\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8B6F\u8A72\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u7FA9\u5FEB\u6377\u9375(\u6253\u958B\u8A2D\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8B6F/\u9084\u539F\u8A72\u6BB5",mouseHoverHoldKey:"\u9F20\u6A19\u6ED1\u904E\u540C\u6642\u6309\u4E0B X \u9375\u7FFB\u8B6F\u6BB5\u843D","mouse-translate":"\u9F20\u6A19\u6ED1\u904E",document:"\u8AAA\u660E\u6587\u4EF6",resetSuccess:"\u91CD\u8A2D\u6240\u6709\u8A2D\u5B9A\u6210\u529F",resetThisSuccess:"\u91CD\u8A2D\u6210\u529F",saved:"\u5132\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u532F\u5165\u8A2D\u5B9A",goAdvancedSettings:"\u524D\u5F80\u9032\u968E\u8A2D\u5B9A\u9801\u9762",goAdvancedInterfaceSettings:"\u524D\u5F80\u81EA\u8A02\u8A2D\u5B9A\u9801\u9762",advanced:"\u9032\u968E\u8A2D\u5B9A",advancedDescription:"\u6B63\u5E38\u60C5\u6CC1\u7121\u9700\u8A2D\u5B9A\uFF0C\u4FDD\u6301\u9810\u8A2D\u5373\u53EF\u3002\u50C5\u91DD\u5C0D\u66F4\u5C08\u696D\u7684\u4F7F\u7528\u8005\uFF0C\u63D0\u4F9B\u66F4\u500B\u4EBA\u5316\u7684\u8A2D\u5B9A\u9805\u76EE\u3002",developer:"\u958B\u767C\u8005\u8A2D\u5B9A",donateCafe:"\u50F9\u683C","translate to the bottom of the page":"\u9032\u5165\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u56DE\u5831",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u555F\u7528\u5F8C\uFF0C\u9032\u5165\u7DB2\u9801\u5C07\u7ACB\u5373\u7FFB\u8B6F\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\u3002\u95DC\u9589\u5247\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u555F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6240\u6709\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\u3002\u95DC\u9589\u5247\u4F7F\u7528\u9810\u8A2D\u7684\u667A\u6167\u8FA8\u8B58\uFF0C\u50C5\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\u3002(\u4E0D\u63A8\u85A6\u958B\u555F)","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8B6F\u9801\u9762\u524D\u591A\u5C11\u500B\u5B57\u5143\uFF0C\u800C\u7121\u9700\u7B49\u5F85\u6372\u52D5\u81F3\u53EF\u898B\u5340\u57DF","interface language":"\u4ECB\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u901F\u9375",modify:"\u8B8A\u66F4\u5FEB\u901F\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u9996\u9801",more:"\u66F4\u591A",moreOptions:"\u5C55\u958B\u66F4\u591A\u81EA\u8A02\u9078\u9805",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u6240\u6709\u5340\u57DF",changeToTranslateTheMainPage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF",changeToOnlyTranslationMode:"\u5207\u63DB\u70BA\u50C5\u986F\u793A\u8B6F\u6587",changeToDualTranslationMode:"\u5207\u63DB\u70BA\u96D9\u8A9E\u7FFB\u8B6F",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u6167\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u6A5F\u898F\u5247\u5DF2\u70BA\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u5B98\u65B9\u898F\u5247",localVersionIsTooOld:"\u672C\u6A5F\u5957\u4EF6\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u5957\u4EF6\u81F3 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5617\u8A66\u540C\u6B65",badUserscriptBrowser:"\u76EE\u524D\u700F\u89BD\u5668\u7121\u6CD5\u6B63\u78BA\u5BE6\u73FE\u6CB9\u7334\u5957\u4EF6\u7684\u4ECB\u9762\uFF0C\u8ACB\u4F7F\u7528\u5176\u4ED6<1>\u652F\u63F4\u6CB9\u7334\u5957\u4EF6</1>\u7684\u700F\u89BD\u5668\u5982(Firefox Nightly \u7248\u672C)",foundNewVersion:"\u6709\u65B0\u7248\u672C\u53EF\u7528",theLocalExtensionIsUpToUpdate:"\u76EE\u524D\u5957\u4EF6\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u91CD\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u76EE\u524D\u898F\u5247\u7248\u672C",calculating:"\u6B63\u5728\u8A08\u7B97",unknownError:"\u672A\u77E5\u7684\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u53D6\u5F97\u9060\u7AEF\u898F\u5247",enableAlphaSuccess:"\u5DF2\u555F\u7528 Alpha \u529F\u80FD",disableAlphaSuccess:"\u5DF2\u505C\u7528 Alpha \u529F\u80FD",cacheSize:"\u5FEB\u53D6\u5927\u5C0F\uFF1A",cleaning:"\u6B63\u5728\u6E05\u7406",cleanCache:"\u6E05\u9664\u5FEB\u53D6",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"(\u524D\u5F80\u8A2D\u5B9A)",goSettings:"\u524D\u5F80\u8A2D\u5B9A",needActionForOptions:"(\u9700\u8A2D\u5B9A)",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u7576\u524D\u7DB2\u7AD9\uFF1A",autoEnableSubtitle:"\u81EA\u52D5\u958B\u555F\u96D9\u8A9E\u5B57\u5E55",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F {language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",alwaysTranslateSomeSiteOrWildSite:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u7AD9",alwaysTranslateSomePage:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u9875",add:"\u65B0\u589E",default:"\u9810\u8A2D",forThisLanguage:"\u91DD\u5C0D\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165 URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u5B83\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u5B9A\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4F60\u60F3\u7528\u7684\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u6B63\u5728\u7FFB\u8B6F",Error:"\u932F\u8AA4",allowCacheTranslations:"\u555F\u7528\u672C\u6A5F\u7FFB\u8B6F\u5FEB\u53D6\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8981\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u7BC4\u4F8B",interface:"\u4ECB\u9762\u8A2D\u5B9A",import_export:"\u532F\u5165/\u532F\u51FA",import_export_title:"\u532F\u5165/\u532F\u51FA\u8A2D\u5B9A",floatBallOptions:"\u61F8\u6D6E\u7403\u8A2D\u7F6E","floatBallOptions.enable":"\u555F\u7528\u61F8\u6D6E\u7403","floatBallOptions.blockUrls":"\u7981\u7528\u7DB2\u7AD9","floatBallOptions.add":"\u6DFB\u52A0","floatBallOptions.blockUrlDesc":"\u7576\u9047\u5230\u4EE5\u4E0B\u7DB2\u7AD9\u6642\u4E0D\u986F\u793A\u61F8\u6D6E\u7403","floatBallOptions.clickType":"\u9EDE\u64CA\u884C\u70BA","floatBallOptions.clickTypeDesc":"\u61F8\u6D6E\u7403\u5716\u6A19\u9EDE\u64CA\u6642\u7684\u884C\u70BA","floatBallOptions.clickPopup":"\u986F\u793A\u7FFB\u8B6F\u9762\u677F","floatBallOptions.clickTranslate":"\u7FFB\u8B6F/\u986F\u793A\u539F\u6587",syncToGoogleDrive:"\u7ACB\u5373\u8207 Google Drive \u540C\u6B65",syncToAccount:"\u540C\u6B65\u5230\u8CEC\u6236",syncToAccountButton:"\u7ACB\u5373\u4E0E\u4E91\u7AEF\u540C\u6B65",syncToAccountDescription:"\u4E0A\u50B3\u5230\u5DF2\u767B\u9304\u8CEC\u6236\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u8A2D\u5099\u4E4B\u9593\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u5F8C\u4FEE\u6539\u6642\u9593\u70BA\u6E96\u3002",successSyncConfigInAccount:"\u6210\u529F\u8207\u8CEC\u6236\u4FDD\u6301\u540C\u6B65",successSyncConfigToAccount:"\u6210\u529F\u540C\u6B65\u5230\u8CEC\u6236",syncConfigNoUpdate:"\u5DF2\u7D93\u662F\u6700\u65B0\u7684\u4E86",previewAllThemes:"\u9810\u89BD\u5168\u90E8\u6A23\u5F0F","translationTheme.none":"\u7121","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u5E95\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u6846\u7DDA","translationTheme.solidBorder":"\u5BE6\u7DDA\u6846\u7DDA","translationTheme.underline":"\u76F4\u7DDA\u5E95\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C\uFF08\u5B78\u7FD2\u6A21\u5F0F\uFF09","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u9694\u7DDA","translationTheme.highlight":"\u9192\u76EE\u63D0\u793A","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.marker2":"\u99AC\u514B\u7B462","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDashed":"\u7CFB\u7D71\u5167\u5EFA\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDotted":"\u7CFB\u7D71\u5167\u5EFA\u9EDE\u72C0\u5E95\u7DDA","translationTheme.nativeUnderline":"\u7CFB\u7D71\u5167\u5EFA\u76F4\u7DDA\u5E95\u7DDA","translationTheme.wavy":"\u6CE2\u5F62\u66F2\u7DDA","translationServices.custom":"\u81EA\u5B9A\u7FA9API","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.tenAlpha":"\u9A30\u8A0A\u7FFB\u8B6F\u541B(Alpha)","translationServices.google":"Google \u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeepLX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8B6F","translationServices.deepl":"DeepL","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"Azure \u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.cai":"\u5F69\u96F2\u5C0F\u8B6F (Alpha)","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.you":"\u6709\u9053\u7FFB\u8B6F (Alpha)","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.niu":"\u5C0F\u725B\u7FFB\u8B6F","translationServices.papago":"Papago \u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u7576\u9801\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u5C07\u8DF3\u904E\u7FFB\u8B6F",enableUserscriptPagePopup:"\u5728\u9801\u9762\u4E0A\u986F\u793A\u61F8\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u95DC\u9589\u61F8\u6D6E\u7403\u5F8C\uFF0C\u53EF\u4EE5\u7528\u5FEB\u901F\u9375/{touch}\u518D\u6B21\u986F\u793A\u3002\u70BA\u9632\u6B62\u4E0D\u614E\u95DC\u9589\u8A72\u9078\u9805\u5F8C\u627E\u4E0D\u5230\u61F8\u6D6E\u7403\uFF0C\u5EFA\u8B70\u5C07\u672C\u8A2D\u5B9A\u9801\u9762\u52A0\u5165\u81F3\u6211\u7684\u6700\u611B","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u91D1\u9470\u5F8C\u624D\u53EF\u4F7F\u7528\uFF0C\u8A73\u7D30\u8CC7\u8A0A\u8ACB\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u91D1\u9470\u7533\u8ACB\u548C\u8A2D\u5B9A\u6559\u5B78\u300B",useAboveStyleForTheseSites:"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u7E3D\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8B6F\u6587\u6A23\u5F0F",currentUrl:"\u76EE\u524D\u7DB2\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C",syncToCloud:"\u540C\u6B65\u81F3\u96F2\u7AEF",syncToCloudDescription:"\u4E0A\u50B3\u81F3\u96F2\u7AEF\u5F8C\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u700F\u89BD\u5668/\u6CB9\u7334\u8173\u672C\u4E4B\u9593\u540C\u6B65\u8A2D\u5B9A\uFF0C\u4EE5\u6700\u5F8C\u8B8A\u66F4\u6642\u9593\u70BA\u6E96\u3002",authFail:"\u6388\u6B0A\u5931\u6557",syncTitle:"\u624B\u52D5\u5099\u4EFD\u7BA1\u7406",import_hint:"\u532F\u5165",upload:"\u4E0A\u50B3",revokeAuth:"\u64A4\u92B7\u6388\u6B0A",uploadFail:"\u4E0A\u50B3\u5931\u6557",download:"\u4E0B\u8F09",importSuccess:"\u532F\u5165\u6210\u529F",importFail:"\u532F\u5165\u5931\u6557",deleteFail:"\u522A\u9664\u5931\u6557",backupToCloud:"\u624B\u52D5\u7BA1\u7406\u5099\u4EFD\u6A94\u6848",create_new_backup:"\u65B0\u589E\u5099\u4EFD\u7BC0\u9EDE",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5099\u4EFD{count}\u500B\u4E0D\u540C\u7684\u7BC0\u9EDE\uFF0C\u8ACB\u522A\u9664\u4E0D\u9700\u8981\u7684\u7BC0\u9EDE",backupToCloudDescription:"\u624B\u52D5\u4E0A\u50B3\u6216\u9084\u539F\u5099\u4EFD\u6A94\u6848\uFF0C\u6700\u591A\u5141\u8A31 3 \u500B\u4E0D\u540C\u7684\u5099\u4EFD",successSyncConfig:"\u6210\u529F\u8207\u96F2\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u6557",updatedAt:"\u66F4\u65B0\u65BC {date}",lastSyncedAt:"\u4E0A\u6B21\u6AA2\u67E5\u65BC {date}",downloadFail:"\u4E0B\u8F09\u5931\u6557",clickToDownload:"\u9EDE\u9078\u4E0B\u8F09",aboutLabel:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831","browser.openAboutPage":"\u95DC\u65BC/\u554F\u984C\u56DE\u5831",aboutLabelWithoutSponsor:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831",aboutIntro:"\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F \u4F60\u53EF\u4EE5\u9078\u64C7\u958B\u901A <6>Pro\u6703\u54E1</6> \u4F86\u4F7F\u7528\u958B\u7BB1\u5373\u7528\u7684 DeepL \u548C OpenAI \u7FFB\u8B6F\u3002<br/><br/>\u4F60\u53EF\u4EE5\u95DC\u6CE8\u6211\u4EEC\u7684<3>Twitter</3>\uFF0C<4>Telegram \u983B\u9053</4>\u4EE5\u53CA\u4E0B\u65B9\u7684<5>\u90F5\u4EF6\u8A02\u95B1</5>\u8FFD\u8E64\u66F4\u65B0\u3002<br/> <7>Pro \u6703\u54E1</7> \u53EF\u4EE5\u901A\u904E\u5FEB\u901F\u5BA2\u670D\u90F5\u7BB1 <8>support@immersivetranslate.com</8> \u548C\u6211\u5011\u53D6\u5F97\u806F\u7E6B\u3002",aboutIntroWithoutSponsor:"\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F ",projectHomepage:"\u5C08\u6848\u9996\u9801",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u7D44\u53C3\u8207\u529F\u80FD\u8A0E\u8AD6",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u773E\u865F",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",qqCommunities:"QQ \u4EA4\u6D41\u983B\u9053",joinTelegramChannel:"\u95DC\u6CE8 Telegram \u983B\u9053\u77AD\u89E3\u66F4\u65B0\u8CC7\u8A0A",feedbackAndJoin:"\u554F\u984C\u56DE\u5831/\u52A0\u5165\u7FA4\u7D44",autoSync:"\u81EA\u52D5\u5B9A\u6642\u540C\u6B65",loadingThemeTitle:"Loading \u6A23\u5F0F",loadingThemeDescription:"\u8A2D\u5B9A\u7B49\u5F85\u8B6F\u6587\u8F09\u5165\u6642\u7684\u6A23\u5F0F","loadingTheme.spinner":"\u8F49\u5708\u52D5\u756B","loadingTheme.text":"\u975C\u614B\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u986F\u793A",developerDescription:"\u53EF\u4EE5\u9EDE\u9078<1>\u6B64\u8655</1>\u6AA2\u8996\u9032\u968E\u81EA\u8A02\u529F\u80FD\u76F8\u95DC\u7684\u8AAA\u660E\u6587\u4EF6","edit border color":"\u8B8A\u66F4\u908A\u6846\u8272\u5F69",successSyncButNoChange:"\u76EE\u524D\u8A2D\u5B9A\u8207\u96F2\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u8A02\u8272\u5F69\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u908A\u6846\u8272\u5F69","customThemeLabel.borderRadius":"\u908A\u6846\u5713\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u8272\u5F69","customThemeLabel.backgroundColor":"\u80CC\u666F\u8272\u5F69","customThemeLabel.zoom":"\u5B57\u578B\u7E2E\u653E\u6BD4\u4F8B (%)","customThemeLabel.opacity":"\u6587\u5B57\u4E0D\u900F\u660E\u5EA6 (%)",resetToDefaultColor:"\u9084\u539F\u70BA\u9810\u8A2D\u8272\u5F69",resetToDefaultSettings:"\u9084\u539F\u70BA\u9810\u8A2D\u8A2D\u5B9A",isTranslateTitle:"\u555F\u7528\u7DB2\u9801\u6A19\u984C\u7FFB\u8B6F",isTranslateTitleDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6A19\u984C\u6703\u88AB\u7FFB\u8B6F",enableSearchEnhancement:"\u958B\u555F\u641C\u7D22\u589E\u5F37",enableSearchEnhancementDescription:"\u4E2D\u6587\u641C\u7D22\u8C37\u6B4C\u6703\u5728\u53F3\u908A\u51FA\u73FE\u82F1\u6587\u7248\u8C37\u6B4C\u65B0\u805E",verifyService:"\u9EDE\u6B64\u6E2C\u8A66\u670D\u52D9",verified:"\u9A57\u8B49\u6210\u529F","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8B6F\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u9418\u6700\u5927\u8981\u6C42\u6578","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8981\u6C42\u6578","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8981\u6C42\u7684\u6700\u5927\u6587\u5B57\u9577\u5EA6","field.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u8981\u6C42\u6700\u5927\u6BB5\u843D\u6578","field.apiUrl":"\u81EA\u8A02 API \u4F4D\u5740","field.placeholderDelimiters":"\u4FDD\u7559\u7684\u4F54\u4F4D\u7B26","description.custom":"<a href='https://immersivetranslate.com/docs/services/custom/' target='_blank'>\u81EA\u5B9A\u7FA9\u63A5\u53E3\u63A5\u5165</a> \u9700\u8981\u53C3\u8003\u6587\u6A94","description.limitPerMinute":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u5206\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u79D2\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.generalLimitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002","description.prompt":"\u4EE5\u4F7F\u7528\u8005\u8EAB\u4EFD\u50B3\u9001\u7D66 OpenAI \u7684\u5C0D\u8A71\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u5B57\u5167\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8A9E\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6A19\u8A9E\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u85A6\uFF09, \u5C07\u6703\u5728\u55AE\u7368\u4F5C\u70BA\u4E00\u6BB5\u767C\u9001\u7D66 OpenAI","description.maxTextLengthPerRequest":"\u9810\u8A2D\u6703\u5408\u4F75\u591A\u500B\u6BB5\u843D\uFF0C\u4EE5\u6E1B\u5C11\u8ACB\u8981\u6C42\u6578\uFF0C\u4F46\u662F\u5982\u679C\u6BB5\u843D\u7E3D\u9577\u5EA6\u904E\u9577\uFF0C\u4E5F\u53EF\u80FD\u6703\u5C0E\u81F4 API \u7684\u56DE\u61C9\u6642\u9593\u589E\u52A0\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5617\u8A66\u8ABF\u6574\u8A72\u9078\u9805\u4F86\u63D0\u5347\u901F\u5EA6","description.systemPrompt":"\u4EE5\u7CFB\u7D71\u50B3\u9001\u767C\u9001\u7D66 OpenAI \u7684\u5C0D\u8A71\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u5B57\u5167\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8A9E\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6A19\u8A9E\u8A00","field.domain":"\u9886\u57DF","description.domain":"\u9ED8\u8A8D\u70BA\uFF1Ageneral\u3002\u50C5\u5728\u6709\u9053API\u63A7\u5236\u53F0\u958B\u901A\u9818\u57DF\u5316\u7FFB\u8B6F\u7684\u60C5\u6CC1\u4E0B\u53EF\u8A2D\u7F6E\uFF0C\u652F\u6301\u9818\u57DF\u898B<1>\u9019\u88E1</1>","field.scene":"\u5834\u666F","description.scene":"\u9ED8\u8A8D\u70BA\uFF1Ageneral\u3002\u50C5\u5728\u963F\u91CC\u96F2API\u63A7\u5236\u53F0\u958B\u901A\u6A5F\u5668\u7FFB\u8B6F\u5C08\u696D\u7248\u7684\u60C5\u6CC1\u4E0B\u53EF\u8A2D\u7F6E\uFF0C\u652F\u6301\u5834\u666F\u898B<1>\u9019\u88E1</1>","field.vocabId":"\u7528\u6237\u8BCD\u5178 ID","description.vocabId":"\u6307\u5B9A\u7684\u8BCD\u5178 out_id\uFF0C\u76EE\u524D\u652F\u6301\u82F1\u8BD1\u4E2D","description.model":"OpenAI \u7684\u6A21\u578B\uFF0C\u53EF\u4EE5\u70BA gpt-3.5-turbo, gpt-4 \u7B49","description.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u50B3\u9001\u7D66\u7FFB\u8B6F\u670D\u52D9\u7684\u6BB5\u843D\u6578\u91CF\uFF0C\u5982\u679C\u6BB5\u843D\u6578\u91CF\u904E\u591A\uFF0C\u53EF\u80FD\u6703\u5C0E\u81F4\u56DE\u61C9\u901F\u5EA6\u8B8A\u6162","description.apiUrl":"\u8ACB\u52A0\u5165\u5177\u9AD4\u5305\u542B\u8DEF\u5F91\u7684\u7DB2\u5740",enabledExtension:"\u555F\u7528\u5957\u4EF6",clickToDisableExtension:"\u9EDE\u9078\u505C\u7528\u5957\u4EF6",clickToEnableExtension:"\u9EDE\u9078\u555F\u7528\u5957\u4EF6",hasBeenDisabled:"\u5DF2\u505C\u7528","show password":"\u986F\u793A\u5BC6\u78BC",customContent:"\u8F38\u5165\u81EA\u5B9A\u7FA9\u6A21\u578B",inputOptions:"\u8F38\u5165\u6846\u589E\u5F37",mouseHoverOptions:"\u9F20\u6A19\u6ED1\u904E",enableInputTranslation:"\u662F\u5426\u555F\u7528\u8F38\u5165\u6846\u589E\u5F37",enableInputTranslationDescription:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165 {startingKey}{startingKey} \u4F60\u597D\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165\uFF1A\u4F60\u597D\u4E16\u754C\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguage:"\u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguageDescription:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00\uFF0C\u4E5F\u5C31\u662F {startingKey}{startingKey} \u4F5C\u4E3A\u89E6\u53D1\u8BCD\u7684\u9ED8\u8BA4\u8BED\u8A00",inputTargetLanguageDescriptionForNoneKey:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputStartingTriggerKeyTitle:"\u8BBE\u7F6E\u8F93\u5165\u6846\u90E8\u5206\u7FFB\u8BD1\u7684\u5206\u5272\u5B57\u7B26",inputStartingTriggerKeyDescription:"\u5F53\u4F60\u4E0D\u9700\u8981\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u7684\u65F6\u5019\uFF0C\u5206\u5272\u7B26\u5141\u8BB8\u4F60\u53EA\u7FFB\u8BD1 {startingKey}{startingKey} \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u8BED\u8A00\u4EE3\u7801\uFF0C\u6BD4\u5982\uFF1A{startingKey}ja \u8868\u793A\u53EA\u7FFB\u8BD1 {startingKey}ja \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206",inputStartingTriggerKeyDescriptionForNoneKey:"\u5F53\u524D\u8BBE\u7F6E\u4E3A\u65E0\u9700\u524D\u7F00\uFF0C\u6682\u65E0\u6CD5\u4F7F\u7528\u8F93\u5165\u6846\u7684\u90E8\u5206\u6587\u672C\u7FFB\u8BD1\u529F\u80FD",inputTrailingTriggerKeyTitle:"\u9009\u62E9\u4E00\u4E2A\u8F93\u5165\u7ED3\u675F\u7684\u89E6\u53D1\u5B57\u7B26",inputTrailingTriggerKeyDescription:"\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey} \u5C06\u4F1A\u5F00\u59CB\u7FFB\u8BD1",inputTrailingTriggerKeyTimeout:"\u8F38\u5165\u7D50\u675F\u9023\u64CA\u89F8\u767C\u7684\u9593\u9694\u6642\u9593",inputTrailingTriggerKeyTimeoutDescription:"\u8A2D\u7F6E\u8F38\u5165\u7D50\u675F\u9023\u64CA\u89F8\u767C\u7684\u9593\u9694\u6642\u9593\uFF08\u6BEB\u79D2\uFF09",spaceKey:"<\u7A7A\u683C\u9375>",noneKey:"\u65E0\u9700\u524D\u7F00\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u6587\u672C\u6846",inputTranslationBlockUrlsTitle:"\u5207\u52FF\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",inputTranslationBlockUrlsDescription:"\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\uFF0C\u8F93\u5165\u6846\u589E\u5F3A\u5C06\u4E0D\u4F1A\u751F\u6548",clickToSeeQuickDemo:"\u70B9\u51FB\u5C55\u5F00 30 \u79D2\u5FEB\u901F\u6559\u5B66\u89C6\u9891",inputHelperInfo:"\u8AAA\u660E\uFF1A\u6211\u5011\u7279\u5225\u91DD\u5C0D\u5728\u4E2D\u6587\u8F38\u5165\u6CD5\u4E0B\u90E8\u5206\u89F8\u767C\u5B57\u7B26\u6703\u8B8A\u6210\u4E2D\u6587\u6A19\u9EDE\u7B26\u865F\u9019\u4EF6\u4E8B\u505A\u4E86\u512A\u5316\uFF0C\u6BD4\u5982\u641C\u72D7\u8F38\u5165\u6CD5\u4E0B / \u6703\u8B8A\u6210\u9813\u865F \u3001\uFF0C\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u652F\u6301\u6240\u6709\u89F8\u767C\u7B26\u5C0D\u61C9\u7684\u4E2D\u6587\u7B26\u865F\uFF0C\u4E5F\u5C31\u662F\u8AAA // \u3001\u3001 \u90FD\u6703\u88AB\u8B58\u5225\u70BA\u89F8\u767C\u5B57\u7B26\u3002<br/><br/>\u540C\u6642\u6211\u5011\u4E5F\u652F\u6301\u8A9E\u8A00\u4EE3\u78BC\u7684\u4E2D\u6587\u5225\u540D\u4F5C\u70BA\u547D\u4EE4\uFF0C\u6BD4\u5982 /\u65E5\u6587 \u4F60\u597D\u4E16\u754C \u6703\u88AB\u7FFB\u8B6F\u70BA\u65E5\u6587\uFF0C<1>\u9EDE\u6B64\u67E5\u770B\u6240\u6709\u652F\u63F4\u7684\u8A9E\u8A00\u4EE3\u78BC</1>\u3002",reloadCurrentPage:"\u8BF7\u5148\u5237\u65B0\u5F53\u524D\u9875\u9762\uFF0C\u518D\u5F00\u59CB\u7FFB\u8BD1",noLocalFilePermissionForPDF:"\u6682\u65E0\u6743\u9650\u8BFB\u53D6\u672C\u5730\u6587\u4EF6\uFF0C\u8BF7\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\uFF0C\u7136\u540E\u5BFC\u5165\u672C\u5730\u6587\u4EF6",noPermissionForThisPage:"\u26A0\uFE0F \u6682\u65E0\u6743\u9650\u7FFB\u8BD1\u5F53\u524D\u9875\u9762",retryAllParagraphs:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",retryAllButton:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",errorTooltipTitle:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u539F\u56E0",errorModalTitle:"\u7FFB\u8BD1\u670D\u52A1\u6216\u7F51\u7EDC\u4F3C\u4E4E\u51FA\u4E86\u70B9\u95EE\u9898...",disableConfirm:"\u7981\u7528\u78BA\u8A8D",disableOnce:"\u7981\u7528\u4E00\u6B21",disableGlobal:"\u5168\u5C40\u7981\u7528",disableTint:"* \u60A8\u53EF\u4EE5\u5728 {option} \u4E2D\u91CD\u65B0\u555F\u7528\u3002",searchEnhancementNotes:"\u6211\u5011\u767C\u73FE\uFF0C\u4E2D\u6587\u95DC\u9375\u8A5E\u548C\u82F1\u6587\u95DC\u9375\u8A5E\u7684\u65B0\u805E\u7D50\u679C\u6709\u975E\u5E38\u5927\u7684\u4E0D\u540C\uFF0C\u5728\u555F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u96D9\u8A9E\u4FE1\u606F\u589E\u5F37\u529F\u80FD\u5F8C\uFF0C\u6211\u5011\u6703\u5728\u652F\u6301\u7684\u7DB2\u7AD9\uFF08\u8C37\u6B4C\u65B0\u805E\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u95DC\u9375\u8A5E\uFF09\uFF0C\u96EA\u7403\uFF0C\u6771\u65B9\u8CA1\u5BCC\u7DB2\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\uFF09\u81EA\u52D5\u7528\u82F1\u6587\u70BA\u4F60\u641C\u7D22\u540C\u6A23\u7684\u95DC\u9375\u8A5E\u4E26\u5C55\u793A\u5728\u53F3\u5074\u3002\u5982\u679C\u4F60\u4E0D\u9700\u8981\u8A72\u529F\u80FD\u7684\u8A71\uFF0C\u53EF\u4EE5\u9078\u64C7\u7981\u7528\u5B83\u3002",option:"\u9078\u9805",saveSettings:"\u4FDD\u5B58\u8BBE\u7F6E",closeModal:"\u95DC\u9589\u8996\u7A97",enableInputTranslationWithoutTriggerKeyTitle:"\u542F\u7528\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey}\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u4E3A{inputTargetLanguage}",enableInputTranslationWithoutTriggerKeyDescription:"\u5982\u9700\u6307\u5B9A\u76EE\u6807\u8BED\u8A00\uFF0C\u8BF7\u5728\u524D\u9762\u52A0\u4E0A\u8BED\u8A00\u4EE3\u7801\uFF0C\u5982\uFF1Aja \u4F60\u597D\u4E16\u754C",mouseHoverShortcutPlaceholder:"\u5982\uFF1AShift",yearly:"\u5E74\u5EA6\u7E8C\u8A02",quarterly:"\u5B63\u5EA6\u7E8C\u8A02",monthly:"\u6BCF\u6708\u7E8C\u8A02",yearlyForOnce:"\u4E00\u6B21\u6027\u5E74\u5EA6\u5957\u9910",monthlyForOnce:"\u4E00\u6B21\u6027\u6708\u5EA6\u5957\u9910",daily:"\u6BCF\u65E5\u7E8C\u8A02",year:"\u5E74\u5EA6\u7E8C\u8A02",quarter:"\u5B63\u5EA6\u7E8C\u8A02",month:"\u6BCF\u6708\u7E8C\u8A02",day:"\u6BCF\u65E5\u7E8C\u8A02",upgradeToPro:"\u5347\u7D1A\u70BA Pro \u6703\u54E1","popup.openPro":"\u5347\u7D1A\u70BA Pro \u6703\u54E1\u5F8C\u53EF\u4EE5\u66A2\u4EAB DeepL \u548C OpenAI \u7FFB\u8B6F\uFF0C\u9EDE\u6B64\u5347\u7D1A","popup.openProForPro":"\u60A8\u662F Pro \u6703\u54E1\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528 DeepL \u548C OpenAI \u7FFB\u8B6F",currentAccount:"\u7576\u524D\u8CEC\u6236",autoRenewTrialSuffix:'\uFF08\u8A66\u7528\u4E2D\uFF0C<a href="https://immersivetranslate.com/profile/?upgradeFromTrial=true" id="upgradeFromTrial">\u7ACB\u523B\u5347\u7D1A\u70BA\u6B63\u5F0F\u6703\u54E1</a>\uFF09',upgradeFromTrialTitle:"\u5347\u7D1A\u70BA\u6B63\u5F0F\u6703\u54E1",subtitle:"\u5F71\u7247\u5B57\u5E55",youtubeService:"\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u5F71\u7247\u5B57\u5E55\u670D\u52D9","subtitle.disabledSubtitle":"\u6C38\u4E45\u7981\u7528\u8996\u983B\u5B57\u5E55\u529F\u80FD","subtitle.disabledSubtitleDescription":"\u5982\u679C\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u7684\u8996\u983B\u5B57\u5E55\u548C\u5176\u4ED6\u64F4\u5C55\u6709\u885D\u7A81\uFF0C\u4F60\u53EF\u4EE5\u9078\u64C7\u6C38\u4E45\u7981\u7528\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u7684\u8996\u983B\u5B57\u5E55\u529F\u80FD\u6216\u8005\u5378\u8F09\u5176\u4ED6\u885D\u7A81\u7684\u64F4\u5C55","subtitle.autoEnableSubtitle":"\u81EA\u52D5\u4F7F\u7528\u96D9\u8A9E\u5B57\u5E55","subtitle.autoEnableSubtitleDescription":"\u76EE\u524D\u50C5\u652F\u63F4 Youtube \u7DB2\u7AD9\uFF0C\u555F\u7528\u5F8C\uFF0C\u7576\u5F71\u7247\u64AD\u653E\u7684\u6642\u5019\uFF0C\u6703\u81EA\u52D5\u986F\u793A\u96D9\u8A9E\u5B57\u5E55\uFF0C\u5426\u5247\u9700\u8981\u9EDE\u64CA\u7FFB\u8B6F\u6309\u9215\u624D\u6703\u986F\u793A\u3002","subtitle.preTranslation":"\u512A\u5148\u4F7F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u5B57\u5E55","subtitle.preTranslationDescription":"\u555F\u7528\u5F8C\u6703\u512A\u5148\u7528\u4E0B\u9762\u7684\u7FFB\u8B6F\u670D\u52D9\u63D0\u524D\u7FFB\u8B6F\u6574\u500B\u5B57\u5E55\uFF0C1 \u5C0F\u6642\u7684\u8996\u8A0A\u5927\u6982\u6D88\u8017 5\u842C Tokens \u6216 \u5B57\u7B26\uFF0C\u8ACB\u914C\u60C5\u4F7F\u7528\uFF1B\u95DC\u9589\u5F8C\u5247\u512A\u5148\u4F7F\u7528\u539F\u5F71\u7247\u81EA\u5E36\u7684\u6A5F\u7FFB\u5B57\u5E55","subtitle.humanSubtitlesPreferred":"\u512A\u5148\u4F7F\u7528\u4EBA\u5DE5\u5B57\u5E55","subtitle.humanSubtitlesPreferredDescription":"\u7576\u5F71\u7247\u6709\u76EE\u6A19\u8A9E\u8A00\u4EBA\u5DE5\u5B57\u5E55\u6642\uFF0C\u512A\u5148\u4F7F\u7528\u4EBA\u5DE5\u5B57\u5E55\uFF08\u63A8\u85A6\uFF09",videoSubtitleTranslationDescription:"\u70BA\u5F71\u7247\u5B57\u5E55\u55AE\u7368\u6307\u5B9A\u4E00\u500B\u7FFB\u8B6F\u670D\u52D9",subtitleTranslating:"\u6B63\u5728\u4F7F\u7528 {service} \u670D\u52D9\u7FFB\u8B6F\u5B57\u5E55\u4E2D\uFF0C\u8ACB\u7A0D\u7B49...\uFF08\u6C89\u6D78\u5F0F\u7FFB\u8B6F\uFF09",subtitleLoading:"\u6B63\u5728\u8F09\u5165\u5B57\u5E55...",bilingual:"\u96D9\u8A9E","field.action":"\u662F\u5426\u555F\u7528\u767E\u5EA6\u8853\u8A9E","description.action":"\u555F\u7528\u5F8C\u6703\u5728\u8ACB\u6C42\u4E2D\u52A0\u5165 action=1 \u7684\u53C3\u6578\uFF0C\u4EE5\u4FBF\u544A\u77E5\u767E\u5EA6\u555F\u7528\u8853\u8A9E\uFF0C<1>\u66F4\u591A\u8AAA\u660E\u8ACB\u53C3\u8003\u5B98\u65B9\u6587\u6A94</1>",closeQuickTranslation:"\u95DC\u9589\u61F8\u6D6E\u7403","closeQuickTranslation.untilNext":"\u672C\u6B21\u95DC\u9589\u76F4\u5230\u4E0B\u6B21\u8A2A\u554F","closeQuickTranslation.currentWebsite":"\u7576\u524D\u7DB2\u7AD9\u7981\u7528","closeQuickTranslation.alwaysClose":"\u6C38\u4E45\u7981\u7528","closeQuickTranslation.settingOpen":"\uFF08\u53EF\u5728<1>\u8A2D\u5B9A\u9801</1>\u958B\u555F\uFF09","closeQuickTranslation.cancel":"\u53D6\u6D88","closeQuickTranslation.confirm":"\u78BA\u5B9A","floatBall.popup":"\u6253\u958B\u5FEB\u6377\u8A2D\u5B9A\u9762\u677F","floatBall.translate":"\u9EDE\u64CA\u7FFB\u8B6F\u8A72\u9801\u9762","floatBall.showOriginal":"\u9EDE\u64CA\u5207\u63DB\u5230\u539F\u6587","floatBall.close":"\u95DC\u9589\u61F8\u6D6E\u7403","floatBallOptions.enableDescPc":"\u555F\u7528\u9801\u9762\u61F8\u6D6E\u7403\u5F8C\uFF0C\u6703\u5728\u9801\u9762\u53F3\u5074\u986F\u793A\u4E00\u500B\u5FEB\u6377\u7FFB\u8B6F\u6309\u9215\uFF0C\u9EDE\u64CA\u5373\u53EF\u7FFB\u8B6F","floatBallOptions.enableDesc":"\u95DC\u9589\u61F8\u6D6E\u7403\u5F8C\uFF0C\u53EF\u4EE5\u7528{touch}\u559A\u8D77\u3002\u70BA\u9632\u6B62\u4E0D\u614E\u95DC\u9589\u8A72\u9078\u9805\u5F8C\u627E\u4E0D\u5230\u61F8\u6D6E\u7403\uFF0C\u5F37\u70C8\u5EFA\u8B70\u6536\u85CF\u672C\u8A2D\u5B9A\u9801","description.azureApiUrl":"\u586B\u5165\u81EA\u8A02\u7684API\u4F4D\u5740"};var _a={nologin:"Not logged in",login:"Login",manageAccount:"Manage Account",logout:"Logout",curentPlan:"Current Plan",endAt:"Expires",endAuto:"Auto Renew",lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","noSupportTranslate-pdf":"The script is not supported, please use a plugin.","translate-firefox-local-pdf":"Click to upload PDF",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about:addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.shortBrandName":"Immersive Translate","browser.brandName":"Immersive Translate: Web Page&PDF Translation","browser.brandDescription":"Bilingual web page translation, also supports PDF translation, bilingual Epub eBook translation, free to use.","browser.toggleTranslatePage":"Toggle Translate Page","browser.toggleTranslateTheWholePage":"Toggle Translate the Whole Page","browser.toggleOnlyTransation":"Toggle Translate and Hide Original Text","browser.toggleTranslateToThePageEndImmediately":"Toggle Translate to the Bottom of the Page Immediately","browser.toggleTranslateTheMainPage":"Toggle Translate the Main Page","browser.openOptionsPage":"Open Settings Page","browser.toggleTranslationMask":"Toggle translation mask style","browser.translateLocalPdfFile":"Translate local PDF File","browser.openEbookViewer":"Read local e-book","browser.openEbookBuilder":"Make Dual EPUB ebook","browser.translateLocalHtmlFile":"Translate HTML/txt File","browser.donateContext":"Sponsor Benefits","browser.translateLocalSubtitleFile":"Translate Subtitle File",confirmResetConfig:"Are you sure you want to reset the settings?",translationLineBreakSettingTitle:"Line break setting",smartLineBreak:"Smart Wrap",alwaysLineBreak:"Always Wrap",isShowContextMenu:"Create right button menu",toggleBeta:"Enable Beta experimental features",betaDescription:"Enable features that are still experimental, and translation services that are in testing. Join the <1>Telegram group</1> to learn more.",translationLineBreakSettingDescription:"The always line break feature is suitable for layouts with less content, making the layout more neat and tidy. (Use smart line breaks for long paragraphs with more content (more than {count} characters) for saving space)",tempTranslateDomainTitle:"Open the translation time temporarily",tempTranslateDomainDescription:"When a page is translated manually, turn it temporarily on as automatic translation",xMinutes:"{count} minutes",disabled:"Disable",changelog:"Change Log",toggleTranslatePageWhenThreeFingersOnTheScreen:"Multi-finger touch to show/hide translation display",toggleTranslationMaskWhenThreeFingersOnTheScreen:"Multi-finger touch to show/hide the blur effect of the translation",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"Multi-finger touch to show/hide only translation display",addUrlDescription:"The domain name is available and wildcard is supported e.g.: *.google.com, google.com/mail/*, https://www.google.com/*",general:"General",clickToExpandConfig:"Expand current configuration",import:"Import configuration from file",export:"Export to file",toggleDebug:"Print debug logs on the console","fingers.0":"Close","fingers.2":"Two-finger touch","fingers.3":"Three-finger touch","fingers.4":"Four-finger touch","fingers.5":"Five-finger touch",mouseHoldKey:"+ {key} translate/restore this paragraph",mouseHoldKeyAuto:"Translate the paragraph directly",mouseHoldKeyOff:"Do nothing",mouseHoldKeyOther:"Custom shortcut key (open settings)",mouseHoldKeyCustomKey:"{key} translate/restore this paragraph",mouseHoverHoldKey:"Mouse over and press X key to translate paragraph","mouse-translate":"Hover",document:"Document",resetSuccess:"All settings reset successful",resetThisSuccess:"Reset successful",saved:"Saved successfully",successImportConfig:"Configuration imported successfully",goAdvancedSettings:"Go to Advanced Settings Page",goAdvancedInterfaceSettings:"Go to Advanced Custom Settings Page",advanced:"Advanced",advancedDescription:"Normally no settings are needed, keep the default. More personalized settings are provided for professional users only.",developer:"Developer settings",donateCafe:"Pricing","translate to the bottom of the page":"Translate to the bottom of the page immediately after opening the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate",translateToThePageEndImmediatelyDescription:"Enabled will translate from the top to the bottom of the page immediately after opening. Disable will translate while reading. (Not recommended to enable)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, all areas of the entire web page will be translated. Disabled will use the default smart recognition and translate only the main areas. (Not recommended to enable)","the number of characters to be translated first":"Directly translate the number of characters in front of the page without waiting to scroll to the visible area","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",moreOptions:"Expand more custom settings",translateTheWholePage:"Translate the whole page area",changeToTranslateTheWholePage:"Translate the Whole Page",changeToTranslateTheMainPage:"Translate the Main Content",changeToOnlyTranslationMode:"Show Translation only",changeToDualTranslationMode:"Show Dual Translation",translateToThePageEndImmediately:"Immediately translate to the bottom ",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension version is too old, please upgrade the extension to {minVersion} or a newer version and try to sync again.",badUserscriptBrowser:"The current browser does not correctly implement the interface of the Greasemonkey extension, please use another browser that <1>supports the Greasemonkey extension</1> such as (Firefox Nightly version)",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",needActionForOptions:"(need to set)",translationEngine:"Engine Options",sourceLanguage:"Original language",target:"Target Language",popupSourceLanguage:"Source",popupTarget:"Target",popupService:"Service",forThisSite:"Site:",autoEnableSubtitle:"Auto-enable bilingual captions",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",alwaysTranslateSomeSiteOrWildSite:"Always translate this site",alwaysTranslateSomePage:"Always translate this page",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export",import_export_title:"Import/Export Configuration",floatBallOptions:"Floating Button","floatBallOptions.enable":"Enable Float Ball","floatBallOptions.blockUrls":"Blocked Websites","floatBallOptions.add":"Add","floatBallOptions.blockUrlDesc":"Do not display the float ball when encountering the following websites","floatBallOptions.clickType":"Click Behavior","floatBallOptions.clickTypeDesc":"Behavior when clicking on the float ball icon","floatBallOptions.clickPopup":"Display Translation Panel","floatBallOptions.clickTranslate":"Translate/Show Original Text",syncToGoogleDrive:"Sync Now with Google Drive",syncToAccount:"Sync to account",syncToAccountButton:"Sync to account now",syncToAccountDescription:"Uploaded to the logged-in account, the configuration can be synchronized between different devices, and the last modification time shall prevail.",successSyncConfigInAccount:"Successfully synced with account",successSyncConfigToAccount:"Successfully synchronized to account",syncConfigNoUpdate:"Already up to date",previewAllThemes:"Preview all themes","translationTheme.none":"None","translationTheme.grey":"Black Gray","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.solidBorder":"Solid Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.opacity":"Opacity effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Marker","translationTheme.marker2":"Maker2","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationTheme.nativeDashed":"System Dash Underline","translationTheme.nativeDotted":"System Dotted Underline","translationTheme.nativeUnderline":"System Straight Line Underline","translationTheme.wavy":"Squiggle","translationServices.custom":"Custom API","translationServices.tencent":"Tencent Translator","translationServices.tenAlpha":"Tencent Translator (Alpha)","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeepLX (Alpha)","translationServices.bing":"Microsoft Translator","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Azure Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.cai":"Caiyun Translation (Alpha)","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.you":"Youdao Translation (Alpha)","translationServices.transmart":"Tencent Smart Translation","translationServices.niu":"Niu Translation","translationServices.papago":"Papago Translation","translationServices.d":"DeeplX (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"Translate page title","always languages":"Always translate the following languages",neverTranslateLanguagesLabel:"Never Translated Languages",neverTranslateTheFollowingLanguagesDescription:"When a paragraph on a page is in one of the following languages, the translation will be skipped",enableUserscriptPagePopup:"Always show Popup windows on the page",enableUserscriptPagePopupDescription:"Three-finger touch to show the Popup.","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"Sites that always use the {theme} translation style",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language",syncToCloud:"Sync to cloud",syncToCloudDescription:"Upload the configuration to the cloud server, and you can synchronize the configuration between different browsers or Tampermonkey scripts, based on the last modification time.",authFail:"Authorization Failed",syncTitle:"Please select a file operation",import_hint:"Import",upload:"Upload",revokeAuth:"Revoke Authorization",uploadFail:"Upload Failed",download:"Download",importSuccess:"Upload Success",importFail:"Import Failed",deleteFail:"Delete Failed",backupToCloud:"Manage backup files manually",create_new_backup:"Add backup node",maxBackupFiles:"Up to{count}different nodes can be backed up. Please delete unneeded nodes",backupToCloudDescription:"Upload or restore backup files manually, up to 3 different backups",successSyncConfig:"Successfully synced with cloud",syncFail:"Synchronization failed",updatedAt:"Updated at {date}",lastSyncedAt:"Last checked at {date}",downloadFail:"Download failed",clickToDownload:"Click to download",aboutLabel:"About - Feedback ","browser.openAboutPage":"About / Feedback/Sponsor",aboutLabelWithoutSponsor:"About - Feedback",aboutIntro:"We hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. You can choose to subscribe to <6>Pro membership</6> to use the out-of-the-box DeepL and OpenAI translation.<br/><br/> You can also follow out <3>Twitter</3>, <4>Telegram Channel</4>, and <5>Email Subscription</5> below to track updates. <br/> <7>Pro members</7> can contact us through the fast customer service email <8>support@immersivetranslate.com</8>.",aboutIntroWithoutSponsor:"The extension is completely free and we hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. ",projectHomepage:"Project Homepage",joinTelegramGroup:"Join our communities for feature discussion",wechatPublicAccount:"Wechat Official Account",wechatCommunities:"Wechat Group",qqCommunities:"QQ Channel",joinTelegramChannel:"Subscribe to our Telegram channel to get the latest updates",feedbackAndJoin:"Feedback",autoSync:"Auto-Time Sync",loadingThemeTitle:"Loading Style",loadingThemeDescription:"Set the style of waiting for the translation to load","loadingTheme.spinner":"Spinning icon","loadingTheme.text":"Static Text... ","loadingTheme.none":"Disabled",developerDescription:"You can click <1>here</1> to see the documentation related to advanced customization","edit border color":"Edit border color",successSyncButNoChange:"The current configuration is consistent with that in the cloud server",customTheme:"Customize colors and sizes","customThemeLabel.borderColor":"Border color","customThemeLabel.borderRadius":"Border Round Corner","customThemeLabel.textColor":"Text color","customThemeLabel.backgroundColor":"Background color","customThemeLabel.zoom":"Font scale (%)","customThemeLabel.opacity":"Text opacity (%)",resetToDefaultColor:"Reset to default colors",resetToDefaultSettings:"Reset to default settings",isTranslateTitle:"Enable translate page title",isTranslateTitleDescription:"When enabled, the page title will be translated",enableSearchEnhancement:"Enable Search Enhancement",enableSearchEnhancementDescription:'After enabling, the right sidebar will automatically display "Google News" search results for corresponding English keywords on supported websites (such as Google News, Google Search (partial keywords), Xueqiu, East Money, Futu, Tiger Community).',verifyService:"Verify service",verified:"Successful","field.model":"Model","field.translationEngine":"Translation engine","field.limitPerMinute":"Max requests per minute","field.limitPerSecond":"Max requests per second","field.maxTextLengthPerRequest":"Maximum text length per request","field.maxTextGroupLengthPerRequest":"Maximum number of paragraphs per request","field.apiUrl":"Custom API interface address","field.placeholderDelimiters":"Reserved placeholders","description.custom":"<a href='https://immersivetranslate.com/docs/services/custom/' target='_blank'>Custom interface access</a> requires reference documents","description.limitPerMinute":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next minute. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.limitPerSecond":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next second. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.generalLimitPerSecond":"Requests exceed this limit will be queued until the next seconds.","description.prompt":"Send as a user to OpenAI conversation, where {{text}} indicates the text of the paragraph,{{from}} indicates the language of the paragraph,{{to}} indicates the target language, you can omit {{text}}, if so, it'll be sent as a separated message","description.maxTextLengthPerRequest":"By default multiple paragraphs will be merged to reduce the number of requests, but if the total length of the paragraphs is too long, it may also cause the interface to respond slowly, so you can try to adjust this option to optimize speed","description.systemPrompt":"Send the conversation to OpenAI as a system, where {{text}} represents the text content of the paragraph, {{from}} represents the original language of the paragraph, and {{to}} represents the target language.","field.domain":"Domain","description.domain":"Default is\uFF1Ageneral. Only set up if there is an API console open domain translation, support fields see <1>Here </1>","field.scene":"Scene","description.scene":"Default is\uFF1Ageneral. Only set up if there is an API console open Machine Translation Professional, support fields see<1>Here</1>","field.vocabId":"User dictionary ID","description.vocabId":"Specified dictionary out_id, currently supported in English translation","description.model":"OpenAI's models, such as gpt-3.5-turbo, gpt-4, etc","description.maxTextGroupLengthPerRequest":"The number of paragraphs sent to translation service each time. Sending too many paragraphs to OpenAI at once can slow down the interface.","description.apiUrl":"Please provide a URL with the specific path.",enabledExtension:"Enable extensions",clickToDisableExtension:"Click to disable extension",clickToEnableExtension:"Click to enable the extension",hasBeenDisabled:"Disabled","show password":"Show password",customContent:"Enter customization content",inputOptions:"Writing",mouseHoverOptions:"Mouse Hover",enableInputTranslation:"enhanced input box?",enableInputTranslationDescription:"When enabled, enter {startingKey}{startingKey} direct in the input box and hit{inputTrailingTriggerKeyRepeatTimes}times{trailingKey}, translated into {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:'When enabled, simply enter "Hello World" in the input box, then quickly press {inputTrailingTriggerKeyRepeatTimes} times on {trailingKey}, and it will be translated into the default target language.',inputTargetLanguage:"Set the default target language for the input box",inputTargetLanguageDescription:"The default target language for the translation input box, which is {startingKey}{startingKey} as the default language for triggering words.",inputTargetLanguageDescriptionForNoneKey:"Default target language for translation input box",inputStartingTriggerKeyTitle:"Set the delimiter for translating part of the input box.",inputStartingTriggerKeyDescription:"When you don't need to translate the entire input box, the delimiter allows you to only translate the portion from {startingKey}{startingKey} to the end of the input box. You can also specify a language code, for example: {startingKey}ja means only translating the portion from {startingKey}ja to the end of the input box.",inputStartingTriggerKeyDescriptionForNoneKey:"The current setting is no prefix required, the partial text translation function of the input box cannot be used temporarily.",inputTrailingTriggerKeyTitle:"Select a trigger character to indicate the end of input.",inputTrailingTriggerKeyDescription:"Start the translation by quickly pressing 3 times {trailingKey}.",inputTrailingTriggerKeyTimeout:"Enter the interval time to end the trailing trigger",inputTrailingTriggerKeyTimeoutDescription:"Set the interval time (milliseconds) for the input to end the combo trigger",spaceKey:"<spacekey>",noneKey:"Translate the entire text box without prefixes",inputTranslationBlockUrlsTitle:"Do not enable input box enhancement in the following URL",inputTranslationBlockUrlsDescription:"The input box enhancement will not work in the following URL",clickToSeeQuickDemo:"Click to expand the 30s tutorial video",inputHelperInfo:`Note: We have optimized the system to address an issue where certain characters in Chinese input methods were being converted into Chinese punctuation marks. For instance, when using Sogou Input Method, "/" would be changed to "\u3001". We now recognizes all corresponding Chinese symbols as triggering characters, including "//" and "\u3001\u3001".

Additionally, we support using Chinese aliases of language codes as commands. For example, entering "/Japanense Hello World" will translate the text into Japanese. You can click here to see a list of all supported language codes.`,reloadCurrentPage:"Please refresh the current page before starting translation",noLocalFilePermissionForPDF:"No permission to read local files. Please click the button above and upload the local file.",noPermissionForThisPage:"\u26A0\uFE0F No permission to translate the current page",retryAllParagraphs:"Retry all paragraphs",retryAllButton:"Retry All",errorTooltipTitle:"Click to get the error details",errorModalTitle:"Noops, something went wrong",disableConfirm:"Search Enhancement Settings",disableOnce:"Disable Once",disableGlobal:"Disable Forever",disableTint:"* You can re-enable in {option}.",searchEnhancementNotes:"We have discovered notable disparities in news results between Chinese and English keywords. By activating the immersive translation Bilingual Display Enhancement feature, we will automatically search for equivalent English keywords and display them on the right side of supported websites (e.g., Google News, Google Search (partial keywords), xueqiu, East Money, Futu, Tiger). You can disable this feature if you don't need it.",option:"Settings",saveSettings:"Save",closeModal:"Close",enableInputTranslationWithoutTriggerKeyTitle:"Enable quick press 3 times {trailingKey}, directly translate the entire input box to {inputTargetLanguage}.",enableInputTranslationWithoutTriggerKeyDescription:"To specify the target language, please add a language code at the beginning, such as: ja Hello world",mouseHoverShortcutPlaceholder:"e.g. Shift",deepLProName:"Premium Membership (Recommended)",deepLProDescription:"You can directly use this service",deeplProDescriptionForNormal:"No setup required, available for premium members after login, <1>Upgrade</1>",deepLCustomDescription:"Requires an international credit card, activate at <1>DeepL</1> official site, click to see <2>documentation</2>",deepLCustomName:"Custom Auth Key",chooseProviderLabel:"Choose a service provider",openaiProName:"Premium Membership (Recommended)",openaiProDescription:"The current plan can be used directly",openaiProDescriptionForNormal:"No setup required, available for premium members after login, <1>Upgrade</1>",openaiCustomDescription:"Can be obtained from OpenAI, Azure OpenAI, or other third-party services, <1>Click here to view documentation</1>",openaiCustomName:"Custom API Key",needLoginAction:"(Premium or custom)",goLoginOrAction:"(Premium or go to setting)",yearly:"Annual Renewal",quarterly:"Quarterly Renewal",monthly:"Monthly Renewal",daily:"Daily Renewal",yearlyForOnce:"One-time Annual",monthlyForOnce:"One-time Monthly",profile:"Profile",billing:"Billing",onetime_7day:"7-day Trial Pack",currentPlanDescriptionForFree:"Current plan: Free",currentPlanDescriptionForContinuous:"Current plan: {plan}, will auto-renew on {endAt}",currentPlanDescriptionForAutoRenewCaceling:"Current plan: {plan}, will expire on {endAt} and will not auto-renew",currentPlanDescriptionForOneTime:"Current plan: {plan}, expiring on {endAt}. <1>Upgrade to annual</1> or <2>monthly</2> pro membership",currentYearlyPlanDescriptionForAutoRenewCacelingWithRealPaiedUser:"Current plan: {plan}, will expire on {endAt}, will not be auto-renewed after expiration <br/><1>Manage the renewal plan</1>",currentYearlyPlanDescriptionForAutoRenewCacelingWithAdmin:"Current plan: {plan}, will expire on {endAt}, will not auto-renew after expiration.<br/> <1>Enable consecutive annual plan</1>",upgradePlan:"Click here to upgrade to Pro membership",year:"Annual Renewal",quarter:"Quarterly Renewal",month:"Monthly Renewal",day:"Daily Renewal",upgradeToPro:"Upgrade to Pro","popup.openPro":"Enjoy unrestricted access to DeepL and OpenAI translations after upgrading to Pro Membership. Click here to upgrade","popup.openProForPro":"You are a Pro member, you can directly use DeepL and OpenAI translations",currentAccount:"Account",enableAutoSyncUserSettings:"Enable auto-sync user settings",modalEnableInputTranslationTitle:"Writing Settings",modalEnableInputTranslationDesc:"You have just triggered the immersive translate of the input box by quickly tapping the space key 3 times. The content of the input box will be translated into the default target language. <br /><br /> If this was a mistake, don't worry. You can choose to disable it this time or permanently disable input box translation.",saveAndNotShowAgain:"Save and don't show again",disableInputTranslationTips:"* You can also set other shortcuts in {option}, {learnMore}.",learnMore:"Learn more",continueEnalbeInputTranslation:"Continue to enable input translation",autoRenewTrialSuffix:'(In trial, <a href="https://immersivetranslate.com/profile/?upgradeFromTrial=true" id="upgradeFromTrial">Upgrade to paid Pro now</a>)',upgradeFromTrialTitle:"Upgrade to paid Pro",subtitle:"Video Subtitles",youtubeService:"Video Subtitle Translation Service","subtitle.disabledSubtitle":"Disable Video Subtitle Feature Permanently ","subtitle.disabledSubtitleDescription":"If there is a conflict between Immersive Translate video subtitles and other extensions, you can choose to permanently disable the Immersive Translate video subtitle feature or uninstall other conflicting extensions","subtitle.autoEnableSubtitle":"Automatically Enable Bilingual Subtitles","subtitle.autoEnableSubtitleDescription":"Currently, only YouTube is supported. When enabled, the bilingual subtitles will be automatically enabled when the video is played.","subtitle.preTranslation":"Prefer translate subtitles by Immersive Translate","subtitle.preTranslationDescription":"When enabled, the service listed below will be used preferentially to translate the subtitles in advance, an 1-hour video consumes approximately 50,000 Tokens or characters, please use as appropriate; if disabled, the original automated translations provided with the video will be used","subtitle.humanSubtitlesPreferred":"Prefer Human-Crafted Subtitles","subtitle.humanSubtitlesPreferredDescription":"When human-crafted subtitles in the target language are available, these will be preferred (Recommended)",videoSubtitleTranslationDescription:"Specify a translation service for video subtitles",subtitleTranslating:"Immersive Translate is using {service} to translate subtitles...",subtitleLoading:"Loading subtitles...",bilingual:"Bilingual","field.action":"Enable Baidu terminology?","description.action":"Once enabled, the parameter action=1 will be added to the request to inform Baidu to enable the terminology. <1>For more details, please refer to the official documentation</1>",closeQuickTranslation:"Close Floating Button","closeQuickTranslation.untilNext":"Close this time until the next visit","closeQuickTranslation.currentWebsite":"Current website disabled","closeQuickTranslation.alwaysClose":"Permanently disable","closeQuickTranslation.settingOpen":"(Can be activated in <1>Settings Page</1>)","closeQuickTranslation.cancel":"Cancel","closeQuickTranslation.confirm":"Ok","floatBall.popup":"Open quick settings popup","floatBall.translate":"Click to translate this page","floatBall.showOriginal":"Click to switch back to the original","floatBall.close":"Close Floating Button","floatBallOptions.enableDescPc":"After enabling the page floating button, a quick translation button will appear on the right side of the page, click to translate","floatBallOptions.enableDesc":"After closing the floating button, you can invoke with {touch}. To prevent accidentally closing this option and not finding the floating ball, it's strongly recommended to bookmark this settings page","description.azureApiUrl":"Fill in the custom API interface address"};var ml=[{code:"zh-CN",messages:Aa},{code:"zh-TW",messages:ka},{code:"en",messages:_a}];var mt={};for(let e of ml)mt[e.code]=e.messages;var gt="Immersive Translate",Ae="immersive-translate",Ea="pdf/index.html";var q="immersiveTranslate",ir="759003177173-mfm15s5nd77vfmo6e7lanof1emnanf0e.apps.googleusercontent.com",kt=q+"GoogleAccessToken",Pa=q+"AuthFlow",or="immersive-translate-config-latest.json",Dd=q+"AuthState",Od=q+"IframeMessage",Bd=q+"WaitForRateLimit",La=q+"DocumentMessageAsk",Ud=q+"DocumentMessageTellThirdParty",Fd=q+"showError",jd=q+"DocumentMessageThirdPartyTell",qd=q+"DocumentMessageEventUpload",gl=q+"DocumentMessageHandler",Wd=`${q}Container`,Kd=`${q}SpecifiedContainer`,sr="buildinConfig",Ut="localConfig",Xr="openOptionsPage";var Jr="translateLocalPdfFile",Ra="donateContext",Zr="openEbookViewer",en="openEbookBuilder",Ma="openSubtitleBuilder",Hd=`${q}PageTranslatedStatus`,Gd=`${q}PageUrlChanged`,zd=`${q}ReceiveCommand`,Vd=q+"LastUseMouseHoverTime",$d=q+"LastUseInputTime",Ia=q+"LastUseManualTranslatePageTime",Yd=`${q}PopupReceiveMessage`,pl="immersivetranslate.com",hl="config.immersivetranslate.com",Qd=`https://${pl}/`,Xd=`https://${hl}/default_config.json`,Jd=`${q}Mark`;var Zd=`${q}Root`,em=`data-${Ae}-effect`,tm=`data-${Ae}-translation-element-mark`,rm=`${q}TranslationElementMark`,nm=`${q}TranslatedMark`,am=`${q}ParagraphId`,im=`${q}LoadingId`,om=`data-${Ae}-loading-id`,sm=`${q}ErrorId`,lm=`data-${Ae}-error-id`,cm=`${q}AtomicBlockMark`,um=`${q}ExcludeMark`,dm=`data-${Ae}-exclude-mark`,mm=`${q}StayOriginalMark`,gm=`${q}PreWhitespaceMark`,pm=`${q}InlineMark`,hm=`${q}BlockMark`,fm=`${q}Left`,bm=`${q}Right`,ym=`${q}Width`,Tm=`${q}Height`,wm=`${q}Top`,xm=`${q}FontSize`;var vm=`${q}GlobalStyleMark`,fl=["@","#"];var Sm=`${Ae}-target-wrapper`,Am=`${Ae}-pdf-target-container`,km=`${Ae}-target-inner`,_m=`${Ae}-source-wrapper`,Cm=`${Ae}-target-translation-block-wrapper`,Em=`${Ae}-root-translation-theme`,Pm=`${q}RootTranslationTheme`,Lm=`${Ae}-target-translation-vertical-block-wrapper`,Rm=`${Ae}-target-translation-pdf-block-wrapper`,Mm=`${Ae}-target-translation-pre-whitespace`,Im=`${Ae}-target-translation-inline-wrapper`;var Ft=["auto","zh-CN","zh-TW","en","ja","ko","es","de","fr","pt","ru","ar","it","ms","id","vi","af","th","ur","yue","bo","wyw","am","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","el","eo","et","eu","fa","fi","fil","fj","fy","ga","gd","gl","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","ig","is","jw","ka","kk","km","kn","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","mt","mww","my","ne","nl","no","ny","otq","pa","pl","ps","ro","sa","sd","si","sk","sl","sm","sn","so","sq","sr","sr-Cyrl","sr-Latn","st","su","sv","sw","ta","te","tg","tlh","tlh-Qaak","to","tr","ty","ug","uk","uz","xh","yi","yo","yua","zu"];var lr="zh-CN";var Ca=[{type:"select",name:"codename",labelKey:"field.translationEngine",default:"youdao",required:!1,options:[{label:"translationServices.google",value:"google"},{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.aws",value:"aws"}]}],bl={bing:{name:"\u5FAE\u8F6F\u7FFB\u8BD1",homepage:"https://www.bing.com/translator"},google:{name:"Google",homepage:"https://translate.google.com/"},deepl:{name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://immersivetranslate.com/docs/services/deepL/",providers:[{name:"pro",nameKey:"deepLProName",descriptionKey:"deepLProDescription",descriptionKeyForNormal:"deeplProDescriptionForNormal",descriptionLink1:"https://immersivetranslate.com/pricing"},{name:"custom",nameKey:"deepLCustomName",descriptionKey:"deepLCustomDescription",descriptionLink1:"https://www.deepl.com/translator",descriptionLink2:"https://immersivetranslate.com/docs/services/deepL/"}],allProps:[{name:"authKey",providers:["custom"],label:"Auth Key",required:!0,type:"password"}]},openai:{name:"Open AI",homepage:"https://openai.com/api/",docUrl:"https://immersivetranslate.com/docs/services/openai/",providers:[{name:"pro",nameKey:"openaiProName",descriptionKey:"openaiProDescription",descriptionKeyForNormal:"openaiProDescriptionForNormal",descriptionLink1:"https://immersivetranslate.com/pricing"},{name:"custom",nameKey:"openaiCustomName",descriptionKey:"openaiCustomDescription",descriptionLink1:"https://immersivetranslate.com/docs/services/openai/"}],allProps:[{name:"APIKEY",providers:["custom"],required:!0,type:"password"},{name:"model",labelKey:"field.model",descriptionKey:"description.model",required:!1,type:"openai-model-select",default:"gpt-3.5-turbo-1106",providers:["custom"],options:[{providers:["custom","pro"],label:"gpt-3.5-turbo",value:"gpt-3.5-turbo"},{providers:["custom","pro"],label:"gpt-3.5-turbo-1106",value:"gpt-3.5-turbo-1106"},{providers:["custom","pro"],label:"gpt-3.5-turbo-0613",value:"gpt-3.5-turbo-0613"},{providers:["custom"],label:"gpt-4",value:"gpt-4"}]},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.limitPerSecond",descriptionLink1:"https://immersivetranslate.com/docs/services/openai/",type:"number",default:10,providers:["custom"]},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0},{name:"apiUrl",labelKey:"field.apiUrl",required:!1,type:"text",default:"https://api.openai.com/v1/chat/completions",descriptionKey:"description.apiUrl",descriptionLink1:"https://immersivetranslate.com/docs/services/openai/",optional:!0,providers:["custom"]},{name:"systemPrompt",label:"System Prompt",required:!1,descriptionKey:"description.systemPrompt",type:"textarea",optional:!0,default:"You are a translation engine, you can only translate text and cannot interpret it, and do not explain."},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:`Translate the text to {{to}}, please do not explain any sentences, just translate or leave them as they are.:

{{text}}`,optional:!0}]},transmart:{name:"Transmart",homepage:"https://transmart.qq.com/"},youdao:{name:"Youdao",homepage:"https://youdao.com/",docUrl:"https://immersivetranslate.com/docs/services/youdao/",allProps:[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:200,optional:!0},{name:"domain",required:!1,labelKey:"field.domain",descriptionKey:"description.domain",descriptionLink1:"https://fanyi.youdao.com/openapi/",type:"text",default:"general",optional:!0},{name:"vocabId",required:!1,labelKey:"field.vocabId",descriptionKey:"description.vocabId",type:"text",default:"",optional:!0}]},tencent:{name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://immersivetranslate.com/docs/services/tencent/",allProps:[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]},aliyun:{name:"Aliyun",homepage:"https://translate.alibaba.com/",docUrl:"https://immersivetranslate.com/docs/services/aliyun/",allProps:[{name:"AccessKeyID",required:!0,type:"text"},{name:"AccessKeySecret",required:!0,type:"password"},{name:"scene",labelKey:"field.scene",descriptionKey:"description.scene",descriptionLink1:"https://help.aliyun.com/document_detail/158267.html",required:!1,optional:!0,type:"text",default:"general"}]},azure:{name:"azure",homepage:"https://learn.microsoft.com/en-us/azure/cognitive-services/translator/text-translation-overview",docUrl:"https://immersivetranslate.com/docs/services/azure/",allProps:[{name:"region",required:!1,default:"eastasia",type:"text"},{name:"APIKEY",required:!0,type:"password"},{name:"apiUrl",labelKey:"field.apiUrl",required:!1,type:"text",default:"https://api.cognitive.microsofttranslator.com/",descriptionKey:"description.azureApiUrl",optional:!0}]},papago:{name:"Papago",homepage:"https://translate.google.com/",canary:!0},baidu:{name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://immersivetranslate.com/docs/services/baidu/",allProps:[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:1,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1800,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:8,optional:!0},{name:"action",required:!1,labelKey:"field.action",descriptionKey:"description.action",descriptionLink1:"https://fanyi-api.baidu.com/doc/21",type:"boolean",default:!1,optional:!0}]},volc:{name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://immersivetranslate.com/docs/services/volcano/",allProps:[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1800,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:8,optional:!0}]},caiyun:{name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://immersivetranslate.com/docs/services/caiyun/",allProps:[{name:"token",required:!0,type:"password"}]},cai:{name:"Cai",homepage:"https://fanyi.caiyunapp.com/",alpha:!0},custom:{name:"Custom",beta:!0,homepage:"https://immersivetranslate.com/docs/services/custom/",titleKey:"description.custom",allProps:[{name:"url",label:"API URL",required:!0,type:"text"},{name:"langs",required:!1,labelKey:"field.langs",type:"textarea",default:"zh-CN,en",optional:!0},{name:"placeholderDelimiters",required:!1,labelKey:"field.placeholderDelimiters",type:"text",default:fl,optional:!0},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0}]},mock:{name:"Mock",homepage:"https://www.google.com"},mock2:{name:"Mock2",homepage:"https://www.google.com"},tenAlpha:{name:"TenAlpha",homepage:"https://fanyi.qq.com/",alpha:!0},you:{name:"You",alpha:!0,homepage:"https://youdao.com/"},openl:{name:"Openl",homepage:"https://openl.club/",docUrl:"https://immersivetranslate.com/docs/services/openL/",allProps:[...Ca,{type:"password",name:"apikey",required:!0}],props:Ca},volcAlpha:{name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},d:{name:"D () ",canary:!0,homepage:"https://www.deepl.com/translator"},dpro:{name:"DPro (Canary) ",canary:!0,homepage:"https://www.deepl.com/translator"},deeplx:{name:"DeepLX (Beta)",beta:!0,homepage:"https://www.deepl.com/translator",allProps:[{name:"url",label:"API URL",required:!0,type:"text"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0}]},niu:{name:"niutrans",homepage:"https://niutrans.com/",docUrl:"https://immersivetranslate.com/docs/services/niu",allProps:[{name:"APIKEY",required:!0,type:"password"}]}},Nm={type:q+"ChildFrameToRootFrameIdentifier"};var Dm=ot()?"https://dash.immersivetranslate.com/#general":"http://localhost:8000/dist/userscript/options/#general";var cr="user_info",Om=ot()||dt()?"https://api2.immersivetranslate.com":"https://test-api2.immersivetranslate.com",Bm=ot()||dt()?"https://immersivetranslate.com/accounts/login?from=plugin":"https://test.immersivetranslate.com/accounts/login?from=plugin",yl=ot()||dt()?"https://immersivetranslate.com/profile":"https://test.immersivetranslate.com/profile",tn=ot()||dt()?"https://immersivetranslate.com/pricing":"https://test.immersivetranslate.com/pricing",Tl=ot()||dt()?"https://immersivetranslate.com/topup?type=open_ai&":"https://test.immersivetranslate.com/topup?type=open_ai&",wl=ot()||dt()?"https://immersivetranslate.com/topup?type=deepl&":"https://test.immersivetranslate.com/topup?type=deepl&",Um=tn+"?utm_source=extension&utm_medium=extension&utm_campaign=popup_more",Fm=tn+"?utm_source=extension&utm_medium=extension&utm_campaign=popup_footer",jm=tn+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal",qm=Tl+"utm_source=extension&utm_medium=extension&utm_campaign=error_modal",Wm=wl+"utm_source=extension&utm_medium=extension&utm_campaign=error_modal",Km=yl+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal&upgradeFromTrial=true";var _t=console,rn=class{#e=performance.now();reset(){this.#e=performance.now()}stop(t){let r=performance.now(),n=Math.round(r-this.#e),a=Ge.green;n>1e4?a=Ge.red:n>1e3&&(a=Ge.yellow),_t.debug(Ge.dim(gt+" TIMING:"),t,"in",a(n+"ms")),this.#e=r}},jt=class{#e=1;get level(){return this.#e}setLevel(t){switch(t){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...t){this.#e<=0&&_t.log(Ge.dim(gt+" DEBUG:"),...t)}v(...t){this.#e<=0}info(...t){this.#e<=1&&_t.log(Ge.green(gt+" INFO:"),...t)}l(...t){this.#e<=1}warn(...t){this.#e<=2&&_t.warn(Ge.yellow(gt+" WARN:"),...t)}error(...t){this.#e<=3&&_t.error(Ge.red(gt+" ERROR:"),...t)}fatal(...t){this.#e<=4&&_t.error(Ge.red(gt+" FATAL:"),...t)}timing(){return this.level===0?new rn:{reset:()=>{},stop:()=>{}}}},O=new jt;function pt(e){if(typeof e!="string")return"auto";let t=e.toLowerCase();if(t==="und")return"auto";if(t==="zh"||t==="zh-hans")return"zh-CN";if(t==="zh-hant"||t==="zh-hk")return"zh-TW";if(t==="iw")return"he";if(t==="jv")return"jw";let r=Ft.map(a=>a.toLowerCase()),n=r.indexOf(t);if(n===-1)if(t.indexOf("-")>=0){t=t.split("-")[0];let a=r.indexOf(t);return a===-1?"auto":Ft[a]}else return"auto";else return Ft[n]}function nn(e){return!!(e&&e.subscription&&e.subscription.subscriptionStatus==="active")}var an="DENO",ur="CHROME",dr="FIREFOX";function Na(e){let t=ur;try{let r=navigator?.userAgent||"";/firefox/i.test(r)||typeof InstallTrigger<"u"?t=dr:/deno/i.test(r)&&(t=an)}catch{}return e===ur&&t===ur||e===dr&&t===dr||e===an&&t===an}function Da(){return Na(ur)}function Oa(){return typeof Deno<"u"}function Ba(){return Na(dr)}var Ua={addListener:()=>{},removeListener:()=>{},hasListener:()=>{}},Fa={permissions:{contains:()=>{},request:()=>{}},runtime:{onMessage:Ua,openOptionsPage:()=>{},lastError:{message:""}},storage:{sync:{get:()=>{},set:()=>{}}},tabs:{onUpdated:Ua,query:()=>{},sendMessage:()=>{}}};var f;Oa()?f=Fa:f=globalThis.immersiveTranslateBrowserAPI;var ja=q+"SyncStoreKey_";function Ct(e,t){let r=ja+e;return f.storage.sync.get(r).then(n=>n[r]===void 0?t:n[r])}function Et(e,t){let r=ja+e;return f.storage.sync.set({[r]:t})}var xl=q+"StoreKey_";function qt(e,t){let r=xl+e;return f.storage.local.get(r).then(n=>n[r]===void 0?t:n[r])}var ht=q+"CacheKey_";function vl(e,t){let r=ht+e;return f.storage.local.get(r).then(n=>n[r]===void 0?t:n[r])}function Sl(){let e=f.storage.local.refresh;e&&e()}function Al(e,t){let r=ht+e;return f.storage.local.get(r).then(n=>{if(n[r]===void 0)return t;let{value:a,expired:i}=n[r];return i&&i<Date.now()?t:a})}function kl(e,t,r){let n=ht+e,a=Date.now()+r;return f.storage.local.set({[n]:{value:t,expired:a}})}function _l(e,t){let r=ht+e;return f.storage.local.set({[r]:t})}function Cl(e){let t=ht+e;return f.storage.local.remove(t)}async function El(){let e=await f.storage.local.get(null);if(e){let r=Object.keys(e).filter(n=>n.startsWith(ht)).filter(n=>n!==ht+cr);if(r.length>0)return f.storage.local.remove(r)}}var qa={get:vl,set:_l,getExpired:Al,setExpired:kl,remove:Cl,clear:El,refresh:Sl};var ft=class extends Error{details;constructor(t,r,n){super(r),this.name=t,n&&(this.details=n)}};async function mr(e){let t;if(e&&e.retry&&e.retry>0)try{t=await Pr(Wa.bind(null,e),{multiplier:2,maxAttempts:e.retry})}catch(r){throw r&&r.name==="RetryError"&&r.cause?r.cause:r}else t=await Wa(e);return t}async function Wa(e){e.body;let{url:t,responseType:r,...n}=e;r||(r="json"),n={mode:"cors",...n};let a=!0;e.fetchPolyfill&&(a=!1);let i=e.fetchPolyfill||fetch,o=3e5;if(e.timeout&&(o=e.timeout),a){let s=new AbortController,c=s.signal;setTimeout(()=>{s.abort()},o),n.signal=c}let l;try{l=await i(t,n)}catch(s){O.debug("fetch error",t,s);let c=s.message||"";throw s.message="\u7F51\u7EDC\u95EE\u9898\uFF0C\u65E0\u6CD5\u8FDE\u63A5\u5230\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5\u4F60\u7684\u4EE3\u7406\u6216\u672C\u5730\u7F51\u7EDC\u8FDE\u63A5\u540E\u91CD\u8BD5\u3002 "+c,s}if(l.ok&&l.status>=200&&l.status<400){if(r==="json")return await l.json();if(r==="text")return await l.text();if(r==="raw"){let s=await l.text(),c=Object.fromEntries([...l.headers.entries()]),u=l.url;return u||(l.headers.get("X-Final-URL")?u=l.headers.get("X-Final-URL"):u=t),{body:s,headers:c,status:l.status,statusText:l.statusText,url:u}}else if(r==="stream"){let s="",c;if(l.body&&l.body instanceof ReadableStream)for await(let u of Pl(l.body)){let m=new TextDecoder().decode(u);s+=m;let p;for(;(p=s.indexOf(`
`))>=0;){let T=s.slice(0,p).trim();if(s=s.slice(p+1),T.startsWith("event:")||T==="")continue;let k="";if(T.startsWith("data:")&&(k=T.slice(5).trim()),k==="[DONE]")break;let Q;try{Q=JSON.parse(k??"")}catch(B){O.debug("json error",B);continue}c=Q}}return c}}else{let s;try{s=await l.text()}catch(T){O.error("parse response failed",T)}s&&O.error("fail response",s);let c="";s&&(c=s.slice(0,280));let u="\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\uFF0C\u4EE3\u7801:"+l.status+": "+(l.statusText||"")+c,p=new URL(t).hostname.endsWith(".immersivetranslate.com");throw l.status===429?p?c.includes("quota exceeded")?u="ProQuota:"+c:u=`\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\u7801\uFF1A429\uFF0C\u5177\u4F53\u539F\u56E0\uFF1A ${c} \u8BF7\u7A0D\u540E\u518D\u8BD5\u3002`:u=`\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\uFF1A429\uFF0C\u8BF4\u660E\u8BF7\u6C42\u8FC7\u4E8E\u9891\u7E41\u6216\u8D85\u51FA\u989D\u5EA6\u9650\u5236\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002 ${c}`:l.status===403?u=`\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\uFF1A403\uFF0C \u8BF4\u660E\u6682\u65F6\u6CA1\u6709\u6743\u9650\u8BBF\u95EE\u8BE5\u670D\u52A1\u3002 ${c}`:l.status===400?u=`\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\uFF1A400\uFF0C \u8BF4\u660E\u8BF7\u6C42\u53C2\u6570\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u76F8\u5E94\u914D\u7F6E\u3002 ${c}`:l.status===502?u=`\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\uFF1A502\uFF0C \u8BF4\u660E\u670D\u52A1\u8D85\u65F6\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002 ${c}`:l.status===401&&(u=`\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\uFF1A401\uFF0C \u8BF4\u660E\u672A\u767B\u5F55\u6216\u767B\u5F55\u6001\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55\u3002 ${c}`),new ft("fetchError",u,s)}}async function*Pl(e){let t=e.getReader();try{for(;;){let{done:r,value:n}=await t.read();if(r)return;yield n}}finally{t.releaseLock()}}var Ll=new Map;function Ka(e){let t=Rl(64),r=new CustomEvent(La,{detail:JSON.stringify({...e,type:"ask",id:t})});return document.dispatchEvent(r),new Promise((n,a)=>{Ll.set(t,(i,o)=>{i?a(i):n(o)})})}function Rl(e){let t="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=r.length,a=0;for(;a<e;)t+=r.charAt(Math.floor(Math.random()*n)),a+=1;return t}var Ha={manifest_version:3,name:"__MSG_brandName__",description:"__MSG_brandDescription__",version:"0.11.2",default_locale:"en",background:{service_worker:"background.js"},web_accessible_resources:["styles/inject.css","pdf/index.html","subtitles-hook.js"],content_scripts:[{matches:["<all_urls>","file:///*","*://*/*"],js:["content_script.js"],run_at:"document_end",all_frames:!0}],commands:{toggleTranslatePage:{suggested_key:{default:"Alt+A"},description:"__MSG_toggleTranslatePage__"},toggleTranslateTheWholePage:{suggested_key:{default:"Alt+W"},description:"__MSG_toggleTranslateTheWholePage__"},toggleOnlyTransation:{description:"__MSG_toggleOnlyTransation__"},toggleTranslateToThePageEndImmediately:{description:"__MSG_toggleTranslateToThePageEndImmediately__"},toggleTranslateTheMainPage:{description:"__MSG_toggleTranslateTheMainPage__"},toggleTranslationMask:{description:"__MSG_toggleTranslationMask__"}},options_page:"options.html",options_ui:{page:"options.html",open_in_tab:!0,browser_style:!1},permissions:["storage","activeTab","contextMenus","webRequest","webRequestBlocking","declarativeNetRequestWithHostAccess","declarativeNetRequestFeedback","declarativeNetRequest"],host_permissions:["<all_urls>"],declarative_net_request:{rule_resources:[{id:"ruleset_1",enabled:!0,path:"rules/request_modifier_rule.json"}]},action:{default_popup:"popup.html",default_icon:{"32":"icons/32.png","48":"icons/48.png","64":"icons/64.png","128":"icons/128.png","256":"icons/256.png"}},browser_action:{default_icon:"icons/32.png",default_popup:"popup.html",theme_icons:[{dark:"icons/32.png",light:"icons/dark-32.png",size:32},{dark:"icons/48.png",light:"icons/dark-48.png",size:48},{dark:"icons/64.png",light:"icons/dark-64.png",size:64},{dark:"icons/128.png",light:"icons/dark-128.png",size:128},{dark:"icons/256.png",light:"icons/dark-256.png",size:256}]},icons:{"32":"icons/32.png","48":"icons/48.png","64":"icons/64.png","128":"icons/128.png","256":"icons/256.png"},browser_specific_settings:{gecko:{id:"{5efceaa7-f3a2-4e59-a54b-85319448e305}",strict_min_version:"63.0"},gecko_android:{strict_min_version:"113.0"}},key:"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7JPn78UfqI3xIIOPPLPS74UTzLfJL1gQM8hlk/deKWvFP/WqUBnPJPdhQeF45sFpI1OjO70nFqdATT4/RwYAiZK7G/E6m27MDVnhHjszfzReOuoAEn9J3RnE2xEx5pFhRFcelhnwTTLrrn90aaPcaMtNsgXtZA1Ggz/SnX9I4ZygqpJYjx3Ql2t6SyNK222oRQiKMT93Rrjgyc8RFA7FKXsWglG0TvseRjbmG5Jk5gDx+2/YTcWGqCDotQnWnkPj/dBO23UAX7IpyJK3FGYdkvWFih6OVClHIIWY8mfCjjwSGbXNQNesaa9F2hrzBZ5MRTj4m7yj76mGxuPHPIE8mwIDAQAB"};function Ga(){return Ha.version}function za(){try{return globalThis.self!==globalThis.top}catch{return!0}}var Wt=new Map,bt=class{fromType;logger;constructor(t,r=!1){this.logger=new jt,r&&this.logger.setLevel("debug"),this.fromType=t,Wt.has(t)||(Wt.set(t,new Map),f.runtime.onMessage.addListener((n,a,i)=>{let o=n.from,l=n.to,s,c,u;a.tab&&a.tab.id&&(s=a.tab.id,o=`${o}:${s}`,c=a.tab.url,u=a.tab.active),this.logger.debug(`${n.to} received message [${n.payload.method}] from ${n.from}`,n.payload.data?n.payload.data:" ");let m=sn(l),{type:p,name:T}=m;if(p!==t)return!1;let k=sn(o),B=Wt.get(p).get(T);if(!B)return this.logger.debug(`no message handler for ${p}:${l}, but it's ok`),!1;let{messageHandler:g,sync:le}=B,D={type:t,name:k.name,id:s,url:c,active:u};if(le){try{let X=g(n.payload,D);i({ok:!0,data:X})}catch(X){i({ok:!1,errorName:X.name,errorMessage:X.message,errorDetails:X.details})}return!1}else return g(n.payload,D).then(X=>{i({ok:!0,data:X})}).catch(X=>{i({ok:!1,errorName:X.name,errorMessage:X.message,errorDetails:X.details})}),!0}))}getConnection(t,r,n){let a=!1;n&&n.sync&&(a=!0);let i=this.fromType,o=Wt.get(i);if(o.has(t))return o.get(t).connectionInstance;{let l=new on(`${i}:${t}`,this.logger);return Wt.get(i).set(t,{messageHandler:r,sync:a,connectionInstance:l}),l}}},on=class{from;logger;constructor(t,r){this.from=t,this.logger=r}async sendMessage(t,r){let n=sn(t),{type:a,id:i}=n;if(a!=="content_script"){let o={to:t,from:this.from,payload:r};this.logger.debug(`${o.from} send message [${o.payload.method}] to ${o.to}`,o.payload.data?o.payload.data:" ");try{let l=await f.runtime.sendMessage(o);return Va(o,l,this.logger)}catch(l){if(a==="popup"){let s=`popup ${t} is not active, so the message does not send, ignore this error, ${JSON.stringify(r)}`;return this.logger.debug(s,r,t,l),Promise.resolve({message:s})}else throw l}}else{let o={from:this.from,to:t,payload:r};this.logger.debug(`${o.from} send message [${o.payload.method}] to ${o.to}`,o.payload.data?o.payload.data:" ");let l=await f.tabs.sendMessage(i,o);return Va(o,l,this.logger)}}};function Va(e,t,r){if(t){if(t.ok)return r.debug(`${e.from} received response from ${e.to}:`,t.data?t.data:" "),t.data;throw new ft(t.errorName||"UnknownError",t.errorMessage||"Unknown error",t.errorDetails)}else throw new ft("noResponse","Unknown error")}function sn(e){let t=e.split(":");if(t.length<2)throw new Error("not a valid to string");let r={type:t[0],name:t[1]};if(t[0]==="content_script"){let n=parseInt(t[2]);if(!isNaN(n))r.id=n;else throw new Error("tab id not a valid number")}return r}var gr;function Il(){return gr||(gr=new bt("content_script",!1).getConnection("pure_main",()=>{}),gr)}var $a="G-MKMD9LWFTR";async function Qa(e,t){try{let r=be();if(r.INSTALL_FROM==="firefox_store")return;let a=At(),i=za(),o=r.PROD==="1",l="sitc4WmvShWYwfU0dANM3Q",s=await Ct("fakeUserId","");s||(s=await qt("fakeUserId",""),s&&await Et("fakeUserId",s));let c=Ga(),u=new Date,m=await Ct("installedAt","");m||(m=await qt("installedAt",""),m&&await Et("installedAt",m)),s?m||(m=new Date(0).toISOString(),await Et("installedAt",m)):(s=Nl(32),await Et("fakeUserId",s)),m||(m=u.toISOString(),await Et("installedAt",m));let p=new Date(m),T=Ya(p),k=Ya(u),Q=T===k,B=u.getTime()-p.getTime()<7*24*60*60*1e3,g=`https://www.google-analytics.com/mp/collect?measurement_id=${$a}&api_secret=${l}`;o||(g=`https://www.google-analytics.com/debug/mp/collect?measurement_id=${$a}&api_secret=${l}`);let le="";typeof navigator<"u"&&(le=window.navigator.userAgent);let D=tr.parse(le),X=t.map(C=>{let h=C.params||{};return D.os&&(h.os_name=D.os.name||"unknown",h.os_version=D.os.version||"unknown",h.os_version_name=D.os.versionName||"unknown"),D.browser&&(h.browser_name=D.browser.name||"unknown",h.browser_version=D.browser.version||"unknown"),D.platform&&(h.platform_type=D.platform.type||"unknown"),D.engine&&(h.engine_name=D.engine.name||"unknown",h.engine_version=D.engine.version||"unknown"),c&&(h.version=c),r.INSTALL_FROM&&(h.install_from=r.INSTALL_FROM),T&&(h.install_day=Dl(p)),h.userscript=a.toString(),Q?h.is_new_user_today="1":h.is_new_user_today="0",B?h.is_new_user_this_week="1":h.is_new_user_this_week="0",i?h.main_frame=0:h.main_frame=1,{...C,params:h}}),se=await Bl({responseType:"text",url:g,method:"POST",body:JSON.stringify({client_id:s,user_id:s,events:X})})}catch{}}function Nl(e){let t="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=r.length,a=0;for(;a<e;)t+=r.charAt(Math.floor(Math.random()*n)),a+=1;return t}function Ya(e){let r=e.toLocaleString("en-US",{timeZone:"Asia/Shanghai"}).split(" ")[0];return r.endsWith(",")&&(r=r.slice(0,-1)),r}function Dl(e){try{let r=e.toLocaleString("en-US",{timeZone:"Asia/Shanghai"}).split(" ")[0];r.endsWith(",")&&(r=r.slice(0,-1));let[n,a,i]=r.split("/");return r=`${i}-${n}-${a}`,r}catch{return"unknown"}}async function Ol(e){return await Il().sendMessage("background:main",e)}function Bl(e){return Sa()?Ka({method:"request",data:e}):At()||va()?(e.fetchPolyfill=globalThis.GM_fetch,mr(e)):Ol({method:"fetch",data:e})}var ln={immediateTranslationTextCount:5e3,interval:36e5,beta:!1,cache:!0,proOpenaiModels:["gpt-3.5-turbo","gpt-3.5-turbo-0613","gpt-3.5-turbo-1106"],translationMode:"dual",enabled:!0,minVersion:"0.6.2",showOpenaiOnSafari:!0,showUnconfiguredTranslationServiceInPopup:!0,donateUrl:"https://immersivetranslate.com/pricing",uninstallUrl:"https://wj.qq.com/s2/12328372/04e0/",feedbackUrl:"https://github.com/immersive-translate/immersive-translate/issues",isShowContextMenu:!0,enableInputTranslation:!0,isShowInputTranslationConsent:!0,inactiveDays:21,enableInputTranslationWithoutTriggerKey:!0,defaultAlwaysTranslatedUrls:["twitter.com","www.reddit.com","www.kadaza.com","en.wikipedia.org","www.reuters.com","www.bloomberg.com","*.medium.com","news.ycombinator.com","edition.cnn.com","www.wsj.com","www.goodreads.com"],modifiedBySystem:!1,enableDefaultAlwaysTranslatedUrls:!0,isChangedAlwaysTranslatedUrls:!1,inputTranslationUrlPattern:{matches:[],excludeMatches:[]},inputTranslationService:"inherit",inputTranslationBlockUrls:["*.feishu.cn","www.notion.so","www.figma.com","*.lanhuapp.com"],inputStyleBlockUrls:[],inputTargetLanguage:"en",inputStartingTriggerKey:"/",inputTrailingTriggerKey:"space",inputTrailingTriggerKeyRepeatTimes:3,inputTrailingTriggerKeyTimeout:200,inputTrailingMobileTriggerKeyTimeout:300,mutationBlockUrls:["www.feishu.cn"],monkeyH5FloatBall:{enable:!0,blockUrls:[],clickType:"translate",afterInstalledAt:""},pcFloatBall:{enable:!0,blockUrls:[],clickType:"translate",afterInstalledAt:"2023-10-28"},inputLanguageCodeAlias:{en:["\u82F1\u6587","\u82F1\u8BED"],"zh-CN":["zh","zh-Hant","\u4E2D\u6587"],"zh-TW":["zht","zh-Hant","\u7E41\u4E2D"],ja:["\u65E5\u8BED","\u65E5\u6587"],ko:["\u97E9\u8BED","\u97E9\u6587"],fr:["\u6CD5\u8BED","\u53D1\u6587"],es:["\u897F\u73ED\u7259\u8BED","\u897F\u8BED"],ru:["\u4FC4\u8BED","\u4FC4\u6587"],bo:["\u85CF\u8BED"]},inputStartingTriggerKeyAlias:{"/":["\u3001"],".":["\u3002"],",":["\uFF0C"],space:[" "],";":["\uFF1B"],":":["\uFF1A"]},blockUrls:["https://dash.immersivetranslate.com/*","https://immersive-translate.owenyoung.com/options/","https://immersive-translate.owenyoung.com/auth-done/","https://dash.immersivetranslate.com/","https://dash.immersivetranslate.com/auth-done/","http://localhost:8000/dist/userscript/options/","http://localhost:8000/auth-done/","http://192.168.50.9:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com","http://localhost:8000/options/","http://192.168.50.9:8000/options/","googleads.g.doubleclick.net","s1.hdslb.com","oapi.dingtalk.com","login.dingtalk.com","imasdk.googleapis.com","acdn.adnxs.com","pos.baidu.com","js-sec.indexww.com","g.alicdn.com","ads.pubmatic.com","challenges.cloudflare.com","accounts.google.com","images-na.ssl-images-amazon.com","tpc.googlesyndication.com","js.stripe.com","acdn.adnxs-simple.com","s.union.360.cn","s.amazon-adsystem.com","www.recaptcha.net","s7.addthis.com","z.moatads.com","https://www.marketwatch.com/static_html/daa-min.html","tr.snapchat.com","ct.pinterest.com","*.moatads.com","secure-us.imrworldwide.com","static.noeyeon.click","widgets.outbrain.com","www.dianomi.com/smartads.epl","secure-assets.rubiconproject.com","eus.rubiconproject.com","eus.rubiconproject.com","i.liadm.com","eb2.3lift.com","googleads.g.doubleclick.net","https://www.google.com/recaptcha/*","ad.doubanio.com"],telemetry:!0,loadingTheme:"spinner",canary:!1,translationThemePatterns:{},translationLanguagePattern:{matches:[],excludeMatches:[]},translationServices:{volcAlpha:{placeholderDelimiters:["{","}","b"]},volc:{placeholderDelimiters:["{","}","b"]},tencent:{placeholderDelimiters:["{","}","b"]},google:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}","b"]},transmart:{placeholderDelimiters:["#","#"]},baidu:{placeholderDelimiters:["#","#"]},caiyun:{placeholderDelimiters:["{","}"]},youdao:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}"]},aliyun:{placeholderDelimiters:["{{","}}","b"]},deepl:{immediateTranslationTextCountForImmersiveDeepl:5e4,maxTextLengthPerRequest:2800,qualityDelimiterBetaV3:"<br />",qualityNoSymoblBetaV3:"</b",qualityMinTextLengthV3:40,placeholderDelimiters:["{{","}}","b"],limit:25},mock:{placeholderDelimiters:["<code>","</code>"],limit:5e4},custom:{placeholderDelimiters:["{","}"]},bing:{maxTextLengthPerRequest:1800,placeholderDelimiters:["<code>","</code>","b"]},deeplx:{limit:3},d:{immediateTranslationTextCount:0},papago:{placeholderDelimiters:["{","}"]},dpro:{apiUrl:"https://api.deepl.com/jsonrpc"},openai:{placeholderDelimiters:["{{","}}","b"],immediateTranslationTextCount:3e3,translationDebounce:300,interval:1350,systemPrompt:"You are a professional, authentic translation engine and only translate the content without any interpreting.",prompt:`Translate the text to {{to}}, please do not explain any sentences:

{{text}}`,multiplePrompt:`Translate the following subtitles into {{to}}, keep the order, and do not explain any sentences:

{{text}}`,model:"gpt-3.5-turbo-1106",overrides:[{if:"targetLanguage == zh-CN",prompt:`\u7FFB\u8BD1\u4E3A\u7B80\u4F53\u4E2D\u6587\uFF0C\u4E0D\u8981\u6709\u4EFB\u4F55\u89E3\u91CA:

{{text}}`,multiplePrompt:`\u8BF7\u628A\u8FD9\u51E0\u53E5\u5B57\u5E55\u7FFB\u8BD1\u4E3A\u7B80\u4F53\u4E2D\u6587\uFF0C\u4E3A\u4E86\u901A\u987A\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u5728\u4E0B\u4E00\u53E5\u4E2D\u5305\u542B\u4E0A\u4E00\u53E5\u7684\u90E8\u5206\u5185\u5BB9\uFF0C\u6BD4\u5982\u6211\u7ED9\u4E86\u4F60 5 \u6BB5\u82F1\u6587\uFF0C\u4F60\u5C31\u5FC5\u987B\u8FD4\u56DE 5 \u6BB5\u4E2D\u6587

{{text}}`},{if:"targetLanguage == zh-TW",prompt:`\u7FFB\u8B6F\u70BA\u7E41\u9AD4\u4E2D\u6587\uFF0C\u4E0D\u8981\u6709\u4EFB\u4F55\u89E3\u91CB:

{{text}}`,multiplePrompt:`\u8ACB\u628A\u9019\u5E7E\u53E5\u5B57\u5E55\u7FFB\u8B6F\u70BA\u7E41\u9AD4\u4E2D\u6587\uFF0C\u70BA\u4E86\u901A\u9806\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u5728\u4E0B\u4E00\u53E5\u4E2D\u5305\u542B\u4E0A\u4E00\u53E5\u7684\u90E8\u5206\u5167\u5BB9\uFF0C\u6BD4\u5982\u6211\u7D66\u4E86\u4F60 5 \u6BB5\u82F1\u6587\uFF0C\u4F60\u5C31\u5FC5\u9808\u8FD4\u56DE 5 \u6BB5\u7E41\u9AD4

{{text}}`}],maxTextGroupLengthPerRequest:1,maxTextGroupLengthPerRequestForSubtitle:5,translationTextSeparator:`

%%

`,newlinePlaceholderDelimiters:[`
<br>
`]},chatgpt:{placeholderDelimiters:["{{","}}","b"],immediateTranslationTextCount:2e3,maxTextGroupLengthPerRequest:1,maxTextLengthPerRequest:2e3,prompt:`Translate the text to {{to}}:

{{text}}`,newlinePlaceholderDelimiters:[`

-|`,`|-

`,`
?
?-\\|\\d+\\|-
?
?`]}},shortcuts:{toggleTranslatePage:"Alt+A",toggleTranslateTheWholePage:"Alt+W",toggleOnlyTransation:"",toggleTranslateToThePageEndImmediately:"",toggleTranslationMask:""},tempTranslateDomainMinutes:0,immediateTranslationPattern:{matches:["www.tumblr.com","twitter.com","*.twitter.com","medium.com","*.medium.com","www.facebook.com","www.youtube.com","m.youtube.com","mail.google.com","discord.com","google.com","facebook.com","*.facebook.com","web.telegram.org","github.com","*.instagram.com","instagram.com","*.slack.com","https://old.reddit.com/","https://www.reddit.com/r/popular/","https://www.reddit.com/","https://www.reddit.com/hot/","https://www.reddit.com/new/","https://www.reddit.com/top/","https://www.reddit.com/.compact","https://app.immersivetranslate.com/pdf*"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},translationParagraphLanguagePattern:{matches:["onboarding.immersivetranslate.com","www.reddit.com","old.reddit.com","twitter.com","www.tumblr.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","read.readwise.io","www.inoreader.com","mail.google.com","google.com","discord.com","*.instagram.com","instagram.com","web.telegram.org","web.whatsapp.com","*.slack.com","*.indeed.com","outlook.live.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},sourceLanguageUrlPattern:{},generalRule:{_comment:"",paragraphFirstLetterFontSize:35,enableSubtitle:!1,"subtitle.autoEnableSubtitle":!1,disableNewTextTranslate:!1,skipEditableCheck:!1,mutationObserverLimitTargetSelectors:[],condition:{},normalizeBody:"",mutationExcludeSelectors:["span.highlighter--highlighted","span.highlighter-ext","mark","msreadoutspan","rw-highlight","web-highlight"],useIframePostMessage:!1,searchEnhancementConfig:[],injectedCss:[],isOnBoardingPage:!1,isEbook:!1,isEbookBuilder:!1,ignoreZhCNandZhTW:!1,showSponsorOnSafari:!1,noTranslateRegexp:["^\\d+.+ago$","^\\d+\\s+MIN\\s+READ$"],waitForSelectors:[],isInjectOptionsUrl:!1,isInjectVersion:!1,isInjectMeta:!1,waitForSelectorsTimeout:3e3,pairs:{},aiRule:{},subtitleRule:{autoEnableSubtitle:!1,preTranslation:!1,humanPreferred:!0,disabled:!1},bodyRule:{enable:!0,maxBodyScreenLength:25,articleChildTags:["P"],articleChildTagsNum:4,bodyIsRoot:!1,humanPreferred:!0,preTranslation:!0,xpathRule:["name:P"]},isSubtitleBuilder:!1,minZIndex:0,initTranslationServiceAsSoonAsPossible:!0,targetWrapperTag:"font",additionalInjectedCss:[],isTranslateTitle:!0,enableSearchEnhancement:!0,searchEnhancementSelector:"#rhs",languageDetectMinTextCount:50,wrapperPrefix:"smart",wrapperSuffix:"smart",isPdf:!1,isTransformPreTagNewLine:!1,urlChangeDelay:50,mutationChangeDelay:10,mainFrameMinTextCount:50,mainFrameMinWordCount:5,visibleDelay:0,additionalStayOriginalSelectors:["span.katex","span.notranslate",".MathJax_Preview",".MathJax",".MathJax_SVG",".mwe-math-element","span[translate=no]","em[translate=no]","code[translate=no]","span.math.inline","span.math.display",".ltx_Math",".mathjax-block",".MathJax_CHTML","kbd","span.pretex-inline"],translationBlockStyle:"",isShowUserscriptPagePopup:!0,observeUrlChange:!1,paragraphMinTextCount:4,paragraphMinWordCount:2,shadowRootSelectors:[],blockMinTextCount:24,blockMinWordCount:4,asideMaxTextCount:1e3,asideMaxWordCount:200,asideMaxTextCountPerParagraph:67,asideMaxWordCountPerParagraph:12,lineBreakMaxTextCount:0,globalAttributes:{},inputTutorialsText:"",inputTutorialsSelectors:[],globalMeta:{},globalStyles:{".sr-only":"display:none"},initialGlobalAttributes:{},initialSelectorGlobalAttributes:{header:{translate:"no"},"footer:last-of-type":{translate:"no"},"nav:last-of-type":{translate:"no"},nav:{translate:"no"}},selectors:[],preWhitespaceDetectedTags:["DIV","SPAN"],stayOriginalSelectors:[],additionalSelectors:["h1","section h2","section h3","section h4","main h2","main h3","main h4",".article-title",".article-subtitle",".article_title",".article_subtitle",".article__title",".articleTitle",".Article__content",".titleLink",".summary",".headline",".page-content","aside.note","aside.article-comments","aside.onebox"],atomicBlockTags:[],excludeSelectors:[],additionalExcludeSelectors:["#immersive-translate-popup",".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]","rp","rt",".prism-code","[role=code]","#omni-extension",".omni-item","div[data-paste-markdown-skip]","table.highlight","div[class^=codeBlockContent]","div[class^=codeBlockLines]","div[class^=token-line]","#liuchan-window > .liuchan-container > *",".material-icons","i.fa","i[class^=fa-]",".notranslate","[translate=no]",".navmenu-container",".google-symbols","markerow8","h1 br","h2 br","h3 br","h4 br"],translationClasses:[],atomicBlockSelectors:[],excludeTags:["TITLE","LINK","SCRIPT","STYLE","TEXTAREA","SVG","svg","G","NOSCRIPT","INPUT","BUTTON","BASE","SELECT","OPTION","HR","PRE","KBD","WBR","RT","RP","META","MATH","TTS-SENTENCE","AIO-CODE","RELIN-TARGET"],bodyTranslateTags:["FOOTER","ASIDE","BUTTON","NAV"],forceTranslateTags:[],metaTags:["META","SCRIPT","STYLE","NOSCRIPT"],additionalExcludeTags:[],stayOriginalTags:["CODE","TT","IMG","SUP","SUB","SAMP","math","semantics","mrow","mo","mfrac","msup","mi","mn","msqrt"],additionalStayOriginalTags:[],inlineTags:["A","ABBR","FONT","ACRONYM","B","INS","DEL","RUBY","RP","RB","BDO","MARK","BIG","RT","NOBR","CITE","DFN","EM","I","LABEL","Q","S","SMALL","SPAN","STRONG","SUB","SUP","U","KBD","TT","VAR","IMG","CODE","SCRIPT","STYLE","LINK","TIME","META","WBR","RELIN-HC","RELIN-HIGHLIGHT","RELIN-ORIGIN","RELIN-TARGET","XQDD_HIGHLIGHT_NEW_WORD","NOBR","RW-HIGHLIGHT","HYPOTHESIS-HIGHLIGHT"],additionalInlineTags:[],extraInlineSelectors:[],additionalInlineSelectors:[".MathJax_Preview",".MathJax",".highlighter--highlighted",".rw-highlight"],extraBlockSelectors:["turbo-frame","readme-toc","#hs_cos_wrapper_post_body","#hs_cos_wrapper_post_body"],allBlockTags:["BODY","HGROUP","CONTENT","ADDRESS","ARTICLE","ASIDE","DETAILS","BLOCKQUOTE","CANVAS","DD","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","HEADER","FORM","HR","MAIN","SUMMARY","NAV","NOSCRIPT","PRE","SECTION","TABLE","TFOOT","UL","VIDEO","P","DIV","H1","H2","H3","H4","H5","H6","UL","LI","OL","BR","PICTURE","TBODY","TR","TD","TH","SOURCE","C-WIZ","BUTTON","TURBO-FRAME","README-TOC"],mutationObserverContainerSelectors:[],pdfNewParagraphLineHeight:2.4,pdfNewParagraphIndent:1.2,pdfNewParagraphIndentRightIndentPx:130,fingerCountToToggleTranslagePageWhenTouching:4,fingerCountToToggleTranslationMaskWhenTouching:0,fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:0,mouseHoverHoldKey:"Off"},rules:[{id:"isSubtitleBuilder",isSubtitleBuilder:!0,selectorMatches:["meta[name='immersive-translate-subtitle-builder'][content='true']"],pairs:{".source-text":".target-text"},paragraphMinTextCount:4,paragraphMinWordCount:2,isTranslateTitle:!1,wrapperPrefix:"",wrapperSuffix:"","bodyRule.add":{enable:!1}},{id:"isEbook",isEbook:!0,isTranslateTitle:!1,urlChangeDelay:200,selectorMatches:["meta[name='immersive-translate-ebook-viewer'][content='true']"],injectedCss:[".immersive-translate-target-translation-block-wrapper {display:block;}"],excludeSelectors:["#drop-target","#drop-target h1","#side-bar","h1#side-bar-title"],extraInlineSelectors:["span.dropcaps"],"bodyRule.add":{enable:!1},paragraphMinTextCount:4,paragraphMinWordCount:2,blockMinTextCount:1,blockMinWordCount:1,containerMinTextCount:1,wrapperPrefix:"<br />",targetWrapperTag:"span"},{id:"pdf",selectorMatches:["meta[name='immersive-translate-pdf-viewer'][content='true']"],translationMode:"translation",skipEditableCheck:!0,selectors:["p"],"bodyRule.add":{enable:!1},wrapperPrefix:"",isInjectVersion:!0,isPdf:!0},{id:"isEbookBuilder",isEbookBuilder:!0,isTranslateTitle:!1,targetWrapperTag:"span",selectorMatches:["meta[name='immersive-translate-ebook-builder'][content='true']"],injectedCss:[".immersive-translate-target-translation-block-wrapper {display:block;}"],globalMeta:{},excludeSelectors:["h1.notranslate","#drop-target","#drop-target h1","#side-bar","h1#side-bar-title","#tool",".Code"],"bodyRule.add":{enable:!1},isInjectMeta:!0,paragraphMinTextCount:4,paragraphMinWordCount:2,blockMinTextCount:1,blockMinWordCount:1,containerMinTextCount:1,wrapperPrefix:"<br />"},{id:"immersiveTranslateIosOnBoarding",selectorMatches:["meta[name=immersiveTranslateIosOnBoarding]"],initialGlobalAttributes:{"input#immersiveTranslateDetectedSlot":{value:"true"}},isInjectOptionsUrl:!0,isInjectVersion:!0,isInjectMeta:!0},{id:"immersiveTranslateIosOnBoardingStep1",selectorMatches:["meta[name=immersiveTranslateIosOnBoardingStep1]"],isOnBoardingPage:!0,isInjectOptionsUrl:!0,isInjectVersion:!0,isInjectMeta:!0},{id:"immersive",matches:["https://immersivetranslate.com","https://onboarding.immersivetranslate.com","https://app.immersivetranslate.com"],isInjectVersion:!0,isInjectMeta:!0},{id:"simpread",selectorMatches:"div.simpread-read-root.simpread-read-root-show > sr-read",mainFrameSelector:"div.simpread-read-root.simpread-read-root-show > sr-read"},{id:"txt",matches:["*://*/*.txt","file://*/*.txt"],selectorMatches:["body > pre"],isTransformPreTagNewLine:!0,"excludeTags.remove":["PRE"]},{id:"hangejp",matches:["arad.hange.jp","arad.nexon.co.jp","oapi.dingtalk.com","login.dingtalk.com"],useIframePostMessage:!1},{id:"preSites",matches:["mail.jabber.org","antirez.com","patchwork.kernel.org"],isTransformPreTagNewLine:!0},{id:"wikipedia",matches:"*.wikipedia.org",paragraphMinWordCount:2,paragraphMinTextCount:4,injectedCss:[".immersive-translate-target-translation-block-wrapper { display: block; }"],excludeSelectors:[".mw-editsection",".mw-cite-backlink","#p-lang-btn","#right-navigation","#p-associated-pages",".vector-header"],stayOriginalSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],extraInlineSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],"bodyRule.add":{bodySelector:"#content",articleSelector:"#bodyContent"}},{id:"twitter",matches:["twitter.com","mobile.twitter.com","tweetdeck.twitter.com","https://platform.twitter.com/embed*"],additionalStayOriginalSelectors:['[data-testid="tweetText"] a',"[data-testid='UserDescription'] a","[data-testid='HoverCard'] a","[data-testid='UserCell'] a","[data-testid='birdwatch-pivot']  a"],blockMinTextCount:0,blockMinWordCount:0,excludeSelectors:["[aria-describedby][role=button]","header","[data-testid='radioGroupplayback_rate'] div","[data-testid='userFollowIndicator']","[class='css-901oao r-14j79pv r-37j5jr r-n6v787 r-16dba41 r-1cwl3u0 r-bcqeeo r-qvutc0']"],extraBlockSelectors:['[data-testid="tweetText"] div.r-6koalj'],extraInlineSelectors:['[data-testid="tweetText"] div.r-xoduu5','[data-testid="tweetText"] span','[data-testid="UserDescription"] div',"[data-testid='HoverCard'] div[dir=auto] div","[data-testid='HoverCard'] span[dir=auto] div"],globalStyles:{"[data-testid='card.layoutLarge.detail'] > div:nth-child(2)":"-webkit-line-clamp: unset;","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)":"-webkit-line-clamp: unset;","[data-testid='tweetText']":"-webkit-line-clamp: unset;"},ignoreZhCNandZhTW:!0,isTranslateTitle:!1,useIframePostMessage:!1,observeUrlChange:!1,paragraphMinTextCount:2,paragraphMinWordCount:1,selectors:['[data-testid="tweetText"]',".tweet-text",".js-quoted-tweet-text","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)","[data-testid='developerBuiltCardContainer'] > div:nth-child(2)","[data-testid='card.layoutLarge.detail'] > div:nth-child(2)","[data-testid='cellInnerDiv'] div[data-testid='UserCell'] > div> div:nth-child(2)","[data-testid='UserDescription']","[data-testid='HoverCard'] div[dir=auto]","[data-testid='HoverCard'] span[dir=auto]","[data-testid='HoverCard'] [role='dialog'] div[dir=ltr]","[data-testid='birdwatch-pivot'] div[dir=ltr]"]},{id:"threads",matches:"www.threads.net",selectors:["p",".x1npkx4u.x1exu5d8",".xw7yly9",".xgkxs2y"],stayOriginalSelectors:[".x1rg5ohu",".xat24cr.xdj266r a"],"excludeSelectors.add":[".x6s0dn4.x78zum5",".xpvyfi4.x1npkx4u.x1ms6mhf"],globalStyles:{span:"max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"}},{id:"stackoverflow",matches:["stackoverflow.com","*.stackexchange.com","superuser.com","askubuntu.com","serverfault.com"],extraBlockSelectors:["span.comment-copy"],globalStyles:{".s-post-summary--content-excerpt":"-webkit-line-clamp:unset;"},"excludeSelectors.add":[".votecell","header","#footer","#question-header + div","div.postcell div.mb0","div[id^=comments-link-]","#answers-header",".new-post-login",".form-submit","a[href='/questions/ask']","#left-sidebar","a.comment-user","span.comment-date","div.s-prose.js-post-body + div",".bottom-notice","div[data-campaign-name=stk]",".s-post-summary--stats",".s-post-summary--meta"],paragraphMinTextCount:4,paragraphMinWordCount:2},{id:"appleDeveloper",matches:"developer.apple.com/documentation/*",selectors:[".container","h3.title","div.content"]},{id:"hackerNews",matches:"news.ycombinator.com",selectors:[".titleline > a",".comment > .commtext",".toptext","a.hn-item-title",".hn-comment-text",".hn-story-title"],excludeSelectors:[".reply"]},{id:"quora",matches:["*.quora.com","quora.com"],excludeSelectors:[".dom_annotate_multifeed_bundle_AskQuestionPromptBundle",".dom_annotate_feed_switcher","[class='q-box qu-py--small qu-color--gray_light']","[class='q-box spacing_log_answer_header']","[class='q-box qu-flex--auto']","[class='q-text qu-dynamicFontSize--small qu-mt--small qu-color--gray_light qu-passColorToLinks']",".AnswerFooter___StyledFlex-sc-2xbo88-0","[class='q-box qu-mb--small']"],globalStyles:{".qu-truncateLines--3":"-webkit-line-clamp: unset;"}},{id:"oldReddit",matches:["old.reddit.com/*/.compact","old.reddit.com/.compact","www.reddit.com/*/.compact","www.reddit.com/.compact"],selectors:[".title > a",".usertext-body"],detectParagraphLanguage:!0},{id:"otherOldReddit",matches:"old.reddit.com",selectors:["p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0},{id:"redditList",matches:["https://www.reddit.com/r/*/comments/*/*","https://www.reddit.com/","https://www.reddit.com/hot/","https://www.reddit.com/new/","https://www.reddit.com/top/"],excludeMatches:["https://www.reddit.com/r/*/wiki/*"],observeUrlChange:!0,selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title'] h3","[data-adclicklocation=media]",".PostContent",".post-content",".Comment__body","faceplate-batch .md","div[slot=comment]",".RichTextJSON-root","div[slot=title]","div[slot=text-body]","p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0,globalStyles:{"div.XPromoBottomBar":"display:none"},waitForSelectors:["[data-testid=post_author_link]"]},{id:"reddit",matches:"www.reddit.com",selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title'] h3","div[slot=comment]","[data-adclicklocation=media]",".PostContent",".post-content",".Comment__body","faceplate-batch .md","div[slot=title]","div[slot=text-body]","p.title > a","[role=main] .md-container","#-post-rtjson-content",".RichTextJSON-root"],paragraphMinTextCount:5,paragraphMinWordCount:2,excludeMatches:["https://www.reddit.com/r/*/wiki/*","https://www.reddit.com/settings/*"],detectParagraphLanguage:!0,globalStyles:{"div.XPromoBottomBar":"display:none"}},{id:"reuters",matches:"www.reuters.com",excludeSelectors:["[promotext]","[data-testid=Leaderboard]","[data-testid=HomeTickerV2]","[data-testid=SiteFooter]"]},{id:"npmjs",matches:"https://www.npmjs.com/package/*",selectors:["#tabpanel-readme > div:first-child"]},{id:"github",matches:"github.com",useIframePostMessage:!1,excludeMatches:["https://github.com/*/*/settings","https://github.com/settings/*","https://github.com/sponsors/*","https://github.com/readme/*","https://github.com/readme/"],selectors:["h1","[aria-label=Issues] .markdown-title","[aria-labelledby=discussions-list] .markdown-title","h3 .markdown-title",".markdown-body",".Layout-sidebar p","div > span.search-match","li.repo-list-item p","#responsive-meta-container p","article p","div.repo-description p","[itemprop=description]",".integrations-auth-wrapper",".new-feed-onboarding-notice","article section[aria-label='card content'] > div > div > div  > div:nth-child(2)"],atomicBlockSelectors:["[itemprop=description]"],excludeSelectors:[".css-truncate","[data-test-selector='commit-tease-commit-message']","[data-test-selector='create-branch.developmentForm']","div.Box-header.position-relative","div.blob-wrapper-embedded","div.Box.Box--condensed.my-2","div.jp-CodeCell",'[aria-label="Account"] .markdown-title',".js-repos-container .markdown-title","a.anchor","div.file-navigation + div.Box"],extraBlockSelectors:[],extraInlineSelectors:["g-emoji","a.anchor"],stayOriginalTags:["CODE","TT","G-EMOJI","IMG","SUP","SUB"],detectParagraphLanguage:!0},{id:"githubNotebook",matches:"notebooks.githubusercontent.com",useIframePostMessage:!1,excludeSelectors:["div.jp-CodeCell"]},{id:"facebook",matches:"www.facebook.com",excludeMatches:["https://www.facebook.com/business/*","https://www.facebook.com/help*"],selectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],atomicBlockSelectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],insertPosition:"afterend",preWhitespaceDetectedTags:["DIV","SPAN"],extraBlockSelectors:["span.x1vvkbs"],excludeSelectors:["[role=button]"],translationClasses:["immersive-translate-text"],detectParagraphLanguage:!0},{id:"youtubeMobile",matches:"m.youtube.com",selectors:[".comment-text","#content-text",".media-item-headline",".slim-video-information-title",".yt-spec-button-view-model",".yt-core-attributed-string > span",".title"],"excludeTags.remove":["BUTTON"],additionalExcludeSelectors:[".ytp-caption-window-container"],"subtitleRule.add":{type:"youtube",translateSelectors:[".caption-window",".caption-visual-line"],videoPlayerSelector:".html5-video-player",loadingContainerSelector:".ytp-caption-window-container",videoADSelector:".ytp-ad-player-overlay",injectedCss:["#player-shorts-container .ytp-caption-window-bottom {top: 40px; bottom: unset!important;}"],translationOnlyPattern:["m.youtube.com/watch*","m.youtube.com/embed*","m.youtube.com/shorts*"]},wrapperPrefix:"",wrapperSuffix:"",observeUrlChange:!0,atomicBlockSelectors:[".comment-text"],globalStyles:{".comment-text":"max-height:unset;",".media-item-headline":"max-height:unset;-webkit-line-clamp:unset;"},injectedCss:[".immersive-translate-target-wrapper img { width: 16px; height: 16px }"],extraBlockSelectors:[".caption-visual-line"]},{id:"youtube",matches:"www.youtube.com",blockMinTextCount:0,blockMinWordCount:0,detectParagraphLanguage:!0,excludeSelectors:["[class^='lln-']"],"additionalExcludeSelectors.add":[".ytp-caption-window-container"],globalStyles:{"#video-title":"-webkit-line-clamp: unset;max-height: unset;","h1.ytd-watch-metadata":"-webkit-line-clamp: unset;max-height: unset;","yt-formatted-string#video-title":"-webkit-line-clamp: unset;max-height: unset;","ytd-expander.ytd-comment-renderer":"--ytd-expander-max-lines: 1000;"},injectedCss:[".immersive-translate-target-wrapper img { width: 16px; height: 16px }",".metadata-snippet-container {max-height: unset !important;}"],isTranslateTitle:!1,observeUrlChange:!0,selectors:["yt-formatted-string[slot=content].ytd-comment-renderer","yt-formatted-string.ytd-video-renderer","yt-formatted-string#content-text","h1","yt-formatted-string#video-title","span#video-title","a#video-title","yt-formatted-string.ytd-transcript-segment-renderer","#description-inline-expander > yt-attributed-string > span","ytd-notification-renderer .message","#message"],extraBlockSelectors:["yt-formatted-string.ytd-transcript-segment-renderer",".caption-visual-line"],"subtitleRule.add":{type:"youtube",translateSelectors:[".caption-window",".caption-visual-line"],videoPlayerSelector:".html5-video-player",loadingContainerSelector:".ytp-caption-window-container",videoADSelector:".ytp-ad-player-overlay",translationOnlyPattern:["www.youtube.com/watch*","www.youtube.com/embed*","www.youtube.com/shorts*"],subtitleButtonSelector:".ytp-subtitles-button",languageSelector:".ytp-menuitem-label",injectedCss:["#shorts-player .ytp-caption-window-bottom {top: 2%; bottom: unset!important;}"]},urlChangeDelay:2e3,wrapperPrefix:"<br/>",wrapperSuffix:""},{id:"instagramMessage",matches:["https://www.instagram.com/direct/*"],wrapperPrefix:"<br/>",selectors:["div[dir=auto][role=none]"]},{id:"instagramPost",matches:["https://www.instagram.com/p/*","https://www.instagram.com/reels/*"],blockMinTextCount:1,paragraphMinTextCount:2,selectors:["h1","div[class='x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1uhb9sk x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1cy8zhl x1oa3qoh x1nhvcw1'] > span[class='x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xvs91rp xo1l8bm x5n08af x10wh9bi x1wdrske x8viiok x18hxmgj']","h3 div > span[dir=auto]"],wrapperPrefix:"<br/>"},{id:"otherInstagram",blockMinWordCount:1,matches:"https://www.instagram.com/*",paragraphMinTextCount:2,selectors:["h1","article span[dir=auto] > span[dir=auto]","._ab1y"],wrapperSuffix:""},{id:"1paragraph",matches:"1paragraph.app",selectors:["#book"]},{id:"poeditor",matches:"https://poeditor.com/projects/*",selectors:[".comment-body",".reference_language .source-string"]},{id:"substack",matches:["*.substack.com","newsletter.rootsofprogress.org"],selectorMatches:["link[href^='https://substackcdn.com/bundle/'][rel=preload]"],excludeSelectors:["[style^=top]",".publication-footer",".subscribe-footer",".main-menu",".navbar-title-link","[data-testid='navbar']",".navbar-title",".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader",".comment-meta",".comment-actions"],globalStyles:{".reader2-clamp-lines":"max-height: unset; -webkit-line-clamp: unset;","[class*='clamp-']":"max-height: unset; -webkit-line-clamp:unset;",".blurb-text":"max-height: unset;",".comment-body":"max-height: unset;"},extraBlockSelectors:[".reader2-post-title",".tweet-link-top",".tweet-link-bottom",".expanded-link"]},{id:"seekingalpha",matches:["seekingalpha.com/article/*","seekingalpha.com/news/*"],selectors:["[data-test-id=card-container]","[data-test-id=comments-section]"],excludeSelectors:["[data-test-id=post-page-meta]","header > div:first-child"]},{id:"hnAlgolia",matches:"hn.algolia.com",selectors:[".Story_title > a:first-child",".Story_comment > span"]},{id:"readwise",matches:"read.readwise.io",selectors:["div[class^='_titleRow_']","#document-text-content"],detectParagraphLanguage:!0},{id:"inoreader",matches:["www.inoreader.com","*.inoreader.com"],selectors:[".article_header_title",".article_title_link",".article_content",".article_magazine_title_link",".blog-post-page","#welcome_center",".gad_overview_articles_wrapper",".library_article_text h4",".header_name"],excludeMatches:["https://www.inoreader.com/features/"],observeUrlChange:!1,globalStyles:{".article_title_link,.library_article_text h4,.gadget_overview_article_title":"-webkit-line-clamp: unset;max-height: unset;"}},{id:"aha",matches:"*.ideas.aha.io",excludeSelectors:[".comment-header",".vote-status",".idea-meta",".filters-title",".ideas-showing-count",".my-ideas-filters-wrapper",".statuses-filters-wrapper",".categories-filters-wrapper","[class^='attachment']","span[class^='attachment-name']"]},{id:"googleScholar",matches:["scholar.google.*/*","scholar.google.com.*/*","scholar.google.co.*/*"],wrapperPrefix:`
`,selectors:["h3 a[data-clk]","div.gs_rs","td a.gsc_a_at","td div.gs_gray:last-of-type","div.gsc_oci_value","#gs_opinion"],extraInlineSelectors:["br"],atomicBlockSelectors:["h3 a[data-clk]"]},{id:"googleMail",matches:"mail.google.com",detectParagraphLanguage:!0,selectors:["h2[data-thread-perm-id]","span[data-thread-id]","div[data-message-id] div[class='']",".messageBody","#views"],globalStyles:{".Nk,.Pk":"height:auto!important;",".kf,.mf":"white-space:unset!important;"}},{id:"googleNews",matches:"news.google.com",blockMinTextCount:26,blockMinWordCount:5,globalStyles:{".MCAGUe":"height: auto;",".To2ZZb.DbQnIe":"height: unset;",".cp7Yvc > h2":"display: block;",".oovtQ":"height: auto;",h4:"-webkit-line-clamp: unset;"},excludeSelectors:[".EyERq",".AOl7G.eejsDc","[aria-label='Home']","[aria-label='For you']","[aria-label='Following']","[aria-label='World']","[aria-label='Local']",".gb_Fc",".wBQf7b",".yPI8Rb",".jKHa4e",".u43Gd",".Zgjpyb","[role='button']","[jsname='rymPhb']",".cbz1ld",".VfPpkd-P5QLlc",".XvhY1d"]},{id:"outlook",matches:"outlook.live.com",excludeSelectors:[".jHAG3.XG5Jd",".OZZZK",".lDdSm"]},{id:"producthunt",matches:"www.producthunt.com",excludeMatches:"https://www.producthunt.com/stories/*",selectors:["h2","div[class^='styles_htmlText__']","[class^='styles_tagline']","a[href^='/discussions/'].fontWeight-600","button[class^='styles_textButton'] > div > span","h5 + p","div[data-test=product-item-name] + div",".noOfLines-1,.noOfLines-2,.noOfLines-3",".fontWeight-600","[class*='styles_dropdown']","[class*='styles_aboutText']"],globalStyles:{"h5 + p":"height:unset;",".noOfLines-1,.noOfLines-2,.noOfLines-3":"-webkit-line-clamp:unset;"},"excludeTags.remove":["PRE"]},{id:"codeforces",matches:"https://codeforces.com/*","stayOriginalTags.add":["[class^='MathJax']"]},{id:"discord",matches:"https://discord.com/channels/*",isTranslateTitle:!1,selectors:["li[id^=chat-messages] div[id^=message-content]","div[class^=headerText]","section[aria-label='Search Results'] div[id^=message-content]"],extraBlockSelectors:["[class^='embedFieldValue']","li[class^='card'] div[class^='message']","[data-list-item-id^='forum-channel-list'] div[class^='headerText']"],globalStyles:{"div[class^=headerText]":"max-height: unset;","div[class^=message]":"max-height: unset;","div[class^=text]":"max-height: unset;","h3[data-text-variant='heading-lg/semibold']":"-webkit-line-clamp: none;"},detectParagraphLanguage:!0,wrapperPrefix:"<br />",wrapperSuffix:"",paragraphMinTextCount:4,paragraphMinWordCount:2},{id:"telegram",matches:["web.telegram.org/z/*","web.telegram.org/a/*"],isTranslateTitle:!1,selectors:[".text-content",".message",".reply-markup-button-text",".bot-commands-list-element-description"],detectParagraphLanguage:!0},{id:"telegramK",matches:["web.telegram.org/k/*","web.telegram.org/k/"],selectors:[".message",".reply-markup-button-text",".bot-commands-list-element-description"],detectParagraphLanguage:!0},{id:"githubGist",matches:"gist.github.com",selectors:[".markdown-body",".readme"],detectParagraphLanguage:!0},{id:"lobste",matches:"lobste.rs",excludeMatches:["https://lobste.rs/about","https://lobste.rs/chat"],selectors:[".u-repost-of",".comment_text",".story_text"]},{id:"slack",matches:"*.slack.com",selectors:[".p-rich_text_block",".p-message_pane__foreword",".c-alert__message","[data-qa=message_attachment_text]"],additionalStayOriginalSelectors:["[data-qa=emoji]"],detectParagraphLanguage:!0},{id:"artstationArtwork",matches:"www.artstation.com/artwork/*",excludeSelectors:".project-description a",selectors:[".project-description","div.project-comment-text"],detectParagraphLanguage:!0},{id:"artstationLearning",matches:"www.artstation.com/learning/courses/*",additionalSelectors:["footer.learning-course-description.ng-star-inserted > span"],excludeSelectors:[".learning-card-meta"]},{id:"artstationBlog",matches:["https://www.artstation.com/blogs","https://www.artstation.com/blogs/*"],detectParagraphLanguage:!0,additionalSelectors:[".comment-item-body"],atomicBlockSelectors:[".author-headline",".author-location"],excludeSelectors:["blog-card-thumbnail","blog-card-header",".blog-card-author",".blog-card-meta",".blog-view-header",".blog-grid-title",".post-meta-header"]},{id:"figmaCommunity",matches:"www.figma.com/community/*",normalizeBody:"div.ql-editor[contenteditable='false']",excludeSelectors:["div[class*='metadataRight']","div[class*='commentMetaAndOptions']"],globalStyles:{"div[class*='mini_cardBottomRowSizing']":"height: 3em;"},additionalSelectors:["div[class*='mini_cardBottomRow_Metadata']"],stayOriginalSelectors:["[data-tooltip='tooltip-user-info']"]},{id:"googleIndex",matches:["https://www.google.com/","https://www.google.com.hk/"],excludeSelectors:["#gb","#SIvCob"],inputTutorialsText:"\u8BD5\u8BD5\u8F93\u5165\u4E2D\u6587\u540E\u5FEB\u901F\u8FDE\u51FB 3 \u6B21\u7A7A\u683C\u952E\u7FFB\u8BD1\uFF08\u4EC5\u63D0\u793A\u4E00\u6B21\uFF09",inputTutorialsSelectors:["textarea#APjFqb"]},{id:"googleSearch",matches:"www.google.*/search*",blockMinTextCount:32,blockMinWordCount:3,wrapperSuffix:"",detectParagraphLanguage:!0,excludeSelectors:["a h3 + div","div#sfooter","a[role=presentation] > div > div:first-child",".b5ZQcf",".CEMjEf",".MgUUmf.NUnG9d","#result-stats","[role=navigation]","div.sCuL3","div.eFM0qc.BCF2pd","div.WZ8Tjf","div.adDDi","#headerSection","#rateChatDiv","[id=bres]",".title-D5Lgyj","[data-attrid='VisualDigestVideoResult']",".search-enhance-WDIEkP h4",".SPZz6b h2",".CtCigf",".VLkRKc",".EbH0bb",".Wr0c6d",".jleFbf","#searchform",".yg51vc",".CbAZb"],extraBlockSelectors:[".MUFPAc"],globalStyles:{".V82bz":"-webkit-line-clamp: unset;max-height: unset;margin-bottom:30px",".pe7FNb":"-webkit-line-clamp: unset;",".promotion-3PDMAb":"display: none;",".uAKcGb":"-webkit-line-clamp: unset;max-height: unset;margin-bottom:30px","div[data-content-feature='1'] > div":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:2']":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:3']":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:4']":"-webkit-line-clamp: unset;max-height: unset;",".Pw4Ldf.RsCEN":"height:unset;",".related-question-pair":"overflow:auto;"},ignoreZhCNandZhTW:!0,isTranslateTitle:!1,searchEnhancementConfig:[{id:"google",urlMatch:"https://www\\.google\\..+/search",style:{source:"font-size:12px; margin-bottom: 6px;",enTitle:"margin-top:6px;font-size:14px;",searchTitle:"margin-top:6px;position:relative;padding-right:24px;",more:"color:#1a0dab;margin-top:8px;",enTitleClassName:"immersive-translate-search-enhancement-en-title"},keyword:{value:"[0]$1",matches:[{source:"url",matchRegex:"q=(.+?)&"}]},showCount:5}]},{id:"lowendtalk",matches:"lowendtalk.com",selectors:["[role=heading]","h1",".userContent"]},{id:"linkedinJobs",matches:"www.linkedin.com/jobs/*",selectors:["#job-details > span",".decorated-job-posting__details"]},{id:"linkedinFeed",matches:"https://linkedin.com/feed/*",selectors:["h1",".feed-shared-update-v2__description-wrapper"]},{id:"indiehackers",matches:"www.indiehackers.com",selectors:[".content","h1","h3.story__title",".feed-item__title-link",".article-body",".interview-body"]},{id:"libreddit",matches:"libreddit.de",selectors:["h2.post_title",".comment_body > .md"]},{id:"notionSite",matches:["notion.site","*.notion.site"],normalizeBody:"body",selectors:["div[data-block-id]"]},{id:"notion_so",matches:["www.notion.so"],injectedCss:["[aria-label='Templates'] font br {display:none;}"]},{id:"newyorker",matches:"www.newyorker.com",additionalSelectors:["h1","[data-testid=SummaryItemHed]"],excludeSelectors:["[data-testid=PersistentTop]","[data-testid=StackedNavigationHeader]"],urlChangeDelay:2e3},{id:"startme",matches:"start.me",selectors:[".rss-article__title",".rss-articles-list__article-link",".rss-showcase__title",".rss-showcase__text"]},{id:"scmp",matches:"www.scmp.com",additionalSelectors:[".info__subHeadline",".section-content h2"],globalStyles:{".topic__article-list":"height: unset;",".adverisers__adveriser":"height: unset;",".advertiser__content":"height: unset;",".content-title__link":"display:unset;overflow:unset;-webkit-line-clamp:unset;",".title__text":"max-height:unset; -webkit-line-clamp:unset;",".news-list-item__news-title":"max-height:unset; -webkit-line-clamp:unset;","a[class*='link'] > .link__headline":"max-height:unset; -webkit-line-clamp:unset;"},"bodyRule.add":{bodySelector:"[data-qa='ArticleList-Item']",articleSelector:"[data-qa='GenericArticle-Content']",xpathRule:["datatype:p"]}},{id:"lesswrong",matches:"www.lesswrong.com",extraBlockSelectors:["span.commentOnSelection"]},{id:"mastodon",matches:["mastodon.social","mastodon.online","kolektiva.social","indieweb.social","mastodon.world","infosec.exchange"],isTranslateTitle:!1,selectorMatches:["div#mastodon"],selectors:["div.status__content__text",".about__section__body",".content",".form-container",".account__header__extra"],globalAttributes:{"[class='notranslate app-holder']":{class:"app-holder"}},detectLanguage:!0},{id:"cnbc",matches:"www.cnbc.com",urlChangeDelay:1e3,globalStyles:{"div.Card-titleContainer > div":"-webkit-line-clamp: unset;max-height: unset;"}},{id:"dailyDev",matches:"app.daily.dev",selectors:["h1",".typo-body","article h3","[class^=markdown_markdown]"],globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset"}},{id:"pornhub",matches:["*.pornhub.com","pornhub.com"],excludeMatches:["*.pornhub.com/insights/*","pornhub.com/insights/*"],extraBlockSelectors:[".trendingNow",".searchItem",".tagcloud > a"],detectParagraphLanguage:!0,wrapperPrefix:"<br/>",wrapperSuffix:`
`,globalStyles:{"span.title":"height:unset; max-height:unset;",".detailedInfo":"max-height:unset;",".pcVideoListItem":"max-height:unset;",".wrap":"height:unset;",".entry-header":"height:unset;",".entry-title > a":"height:unset;-webkit-line-clamp:unset;"}},{id:"yourporn",matches:"https://www.youporn.com/*",extraBlockSelectors:[".button"],globalStyles:{".video-box":"max-height:unset;",".video-box-title":"white-space:unset;"}},{id:"modelhub",matches:"https://www.modelhub.com/*",globalStyles:{".videoTitle":"height:unset;",a:"height:unset;"}},{id:"xvideos",matches:"https://www.xvideos.com/*",globalStyles:{".title":"-webkit-line-clamp:unset;max-height:unset;",".mozaique":"display:flex; flex-wrap:wrap;"},excludeSelectors:[".video-hd-mark"]},{id:"missav",matches:"https://missav.com/*",globalStyles:{".truncate":"white-space:unset;",".overflow-y-hidden":"max-height:unset;overflow-y:unset;"}},{id:"javbus",matches:"https://www.javbus.com/*",globalStyles:{".photo-info":"height:unset;"},excludeSelectors:[".item-tag","date"]},{id:"spankbang",matches:"https://spankbang.com/*",globalStyles:{".video-item > a":"white-space:unset;"},excludeSelectors:[".stats",".thumb"],extraBlockSelectors:[".searches > a",".tag > a",".extra > a",".positions > li"]},{id:"javdb",matches:"https://javdb*.com/*",globalStyles:{".video-title":"white-space:unset;"},excludeSelectors:[".video-number",".score",".has-addons"]},{id:"jable",matches:"https://jable.tv/*",globalStyles:{".title":"white-space:unset;max-height:unset;",".img-box > a":"position:relative;"}},{id:"netflav",matches:"https://netflav*.com/*",globalStyles:{".grid_title":"max-height:unset;"},extraBlockSelectors:[".genre_filter_item","button"]},{id:"czechvideo",matches:"https://czechvideo.co/*",globalStyles:{".short-story":"height:unset;",".short-title":"height:unset;"},globalAttributes:{header:{translate:"unset;"}}},{id:"weibo",matches:["weibo.com"],selectors:["div[class^='detail_wbtext']"]},{id:"medium",matches:["medium.com","*.medium.com"],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],urlChangeDelay:20,"additionalExcludeSelectors.remove":["i.fa","i[class^=fa-]",".navmenu-container",".google-symbols","markerow8"],selectors:["h1","h2","h3","article section","[aria-hidden='false'] pre","article p",".postMetaInline","a .u-fontSize24"],excludeSelectors:["[aria-label='Post Preview Reading Time']",".al.b.bl.ag.bp",".al.b.bl.ag.ai",".hx.hy.hz.ia.ib.ab",".qb.ab",".ai.bn.n.mj",".speechify-ignore","mark"],globalStyles:{"h2,h3":"-webkit-line-clamp: unset;max-height:unset;","article p":"-webkit-line-clamp: unset;max-height:unset;"},injectedCss:[".u-lineClamp4,.u-lineClamp3,.u-lineClamp2 {-webkit-line-clamp:unset!important;max-height:unset!important;}"]},{id:"nitter",selectorMatches:["meta[property='og:site_name'][content='Nitter']"],selectors:[".tweet-content",".quote-text"]},{id:"economist",matches:"www.economist.com",extraInlineSelectors:["span[data-caps='initial']"],excludeSelectors:["footer.ds-footer"],injectedCss:["a::before {position:relative!important;}"]},{id:"healthline",matches:"www.healthline.com",excludeSelectors:[".icon-hl-trusted-source-after"]},{id:"ebay",matches:"www.ebay.com",excludeSelectors:["headers","[itemprop=offers]",".dne-itemtile-original-price"],paragraphMinTextCount:4,paragraphMinWordCount:2,globalStyles:{"[itemprop=name]":"-webkit-line-clamp: unset;max-height: unset;",".merch-item-title":"-webkit-line-clamp: unset;max-height: unset;"}},{id:"skinstore",matches:"www.skinstore.com",excludeSelectors:[".responsiveFlyoutMenu_levelOneLink"],paragraphMinTextCount:4,paragraphMinWordCount:2},{id:"tripadvisor",matches:"www.tripadvisor.com",paragraphMinTextCount:4,paragraphMinWordCount:2},{id:"amazon",matches:"www.amazon.com",paragraphMinTextCount:4,paragraphMinWordCount:2,extraBlockSelectors:[".a-size-small.a-link-normal.page-banner-link.a-nowrap"],globalStyles:{".a-carousel-viewport":"height:unset;","[class*='clamp']":"max-height: unset;-webkit-line-clamp: unset;","[data-rows]":"max-height: unset;-webkit-line-clamp: unset;","[data-a-expander-name='review_text_read_more']":" max-height: unset;"},excludeSelectors:["#navFooter","#navbar-main",".s-price-instructions-style","[class*='-star ']","[data-hook='acr-average-stars-rating-text']",".a-color-price"]},{id:"visualstudioMarketplace",matches:"marketplace.visualstudio.com",additionalExcludeSelectors:[".core-info-second-row",".core-info-third-row",".meta-data-list",".item-title",".breadcrumb",".itemDetails-right",".ux-user-name",".ux-updated-date",".ux-item-second-row-wrapper",".stats-and-offer",".header-container"],atomicBlockSelectors:[".core-info-cell > div.name"],globalStyles:{".item-details-control-root.ux-item-shortdesc":"height: unset; overflow: visible; max-height:unset;"}},{id:"bloomberg",matches:"www.bloomberg.com",urlChangeDelay:2e3,excludeSelectors:[".ticker-bar","nav","[aria-label=Banner]","aside","[data-component=ticker-bar]","footer.bb-global-footer"]},{id:"baiduXueshu",matches:"xueshu.baidu.com",globalStyles:{".abstract_wr":"height: unset; overflow: visible; max-height:unset;"}},{id:"sciencedirect",matches:"www.sciencedirect.com",urlChangeDelay:2e3,stayOriginalSelectors:["span.display","span.math"],extraBlockSelectors:["span.captions","span[id^=cap]"],globalAttributes:{"#abspara0010 br":{style:"display:none;"}}},{id:"thehighestofthemountains",matches:"www.thehighestofthemountains.com",extraBlockSelectors:"div"},{id:"telegraph1",matches:"te.legra.ph",normalizeBody:"div.ql-editor[contenteditable='false']",urlChangeDelay:500},{id:"telegraph2",matches:["telegra.ph"],normalizeBody:"div.ql-editor[contenteditable='false']",wrapperPrefix:`
`},{id:"annasArchive",matches:["*.annas-archive.org","annas-archive.org"],selectors:[],globalStyles:{"div[id^='link-index-']":"height: unset; max-height: unset;","main div[class*='h-[125]']":"height:auto"},normalizeBody:"body",extraBlockSelectors:["a.custom-a"]},{id:"explainshell",matches:["explainshell.com"],selectors:["[class='help-box']"]},{id:"apnews",matches:["apnews.com"],urlChangeDelay:2e3},{id:"googlePlay",matches:"play.google.com",excludeSelectors:[".vlGucd",".ubGTjb"],globalStyles:{".Epkrse":"-webkit-line-clamp:unset;"}},{id:"tumblr",matches:["www.tumblr.com"],selectors:["article h1","article > header + div","[data-testid=notes-root] p","div.k31gt","p","article ul","article h2","article h3","article h4","article h5","article h6","article blockquote","article ol"],excludeSelectors:["div.fAAi8","div.wvu3V"],preWhitespaceDetectedTags:["DIV","SPAN","P"]},{id:"tinytask",matches:"https://www.tinytask.net",globalStyles:{"table > tbody > tr > td > center > table > tbody > tr > td > ul > li":"height: 100%"}},{id:"foxnews",matches:"www.foxnews.com",shadowRootSelectors:["[data-spot-im-module-default-area='conversation'] > div"],"excludeTags.add":["TEXT","IMG","SUB","SUP","CODE","TT","ASIDE"],excludeSelectors:[".site-footer",".components-MessageDetails-index__message-details-wrapper","div[class^=SlideDown__container]",".components-MessageActions-index__messageActionsWrapper","span[data-openweb-allow-amp]","div.spcv_typing-users"]},{id:"afreecatv",matches:"www.afreecatv.com",globalStyles:{"a.title":"max-height:unset;-webkit-line-clamp:unset;"}},{id:"opennet",matches:"opennet.ru","excludeTags.add":["LABEL","IMG","SUB","SUP","CODE","TT"],"excludeTags.remove":["LINK","G","MATH","TTS-SENTENCE","AIO-CODE"]},{id:"construct",matches:["www.construct.net"],excludeMatches:["preview.construct.net","editor.construct.net"],additionalSelectors:["aside","div.manualContent"],atomicBlockSelectors:[],stayOriginalSelectors:["a.usernameReference"],additionalInlineSelectors:["a.forumLink"],additionalExcludeSelectors:["div.topNav","div.usernameLink","ul.authorDetails","ul.tagViewer","ul.breadCrumbNav","ul.subForumForums","ul.postTools","li.comment ul.controls","div.forumTopNavWrap","div.downloadWrap","div.articleLeftMenu","div.usernameTextWrap","div.favouriteWrap","div.bannerWrapper","div.viewAddonRightMenu","div.extendedMenu.addonsSubMenu","#BottomLinks.bottomLinks","div#LeftSide.leftSide","div#BottomWrap.bottomWrap","div.courseListWrap div.overview","div.conversationControls","div.contentWrapper h1","div.conversationControls","td.location a#LocationLink","#TopLevelComments .topBar","#TopLevelComments .controls",".tagViewWrap",".changeCount",".otherStats",".FilterMenu",".mobileTopicStats",".forumControlsWrapper",".forumsBottomNavWrap",".breadCrumbNav",".favouriteWrap",".usernameLink",".followWrapper",".blogPostStats",".manualContent dl dt"],globalStyles:{"td.location a#LocationLink":"padding-top: 4px;","div.articleMain .tutCourseWrap":"align-items: flex-start;"}},{id:"getpocket",matches:"getpocket.com",selectors:["h2","div.excerpt p","article","h1"],globalStyles:{"h2.title":"max-height:unset;-webkit-line-clamp:unset;","div.excerpt p":"max-height:unset;-webkit-line-clamp:unset;"}},{id:"fandom",matches:"*.fandom.com",urlChangeDelay:800,normalizeBody:"#mw-content-text",globalStyles:{"#mw-content-text > div > div:nth-child(1)":"height:100%;"},additionalExcludeSelectors:["header.fandom-community-header","div.ph-registration-buttons"]},{id:"huggingface",matches:"huggingface.co",globalStyles:{".line-clamp-2":"-webkit-line-clamp:unset;max-height:unset;"}},{id:"statista",matches:"www.statista.com",globalStyles:{".itemContent__text":"height:unset;max-height:unset;",".itemContent__subline":"height:unset;max-height:unset;"}},{id:"epubReader",matches:"epub-reader.online",globalStyles:{"span.slide-contents-item-label":"overflow:visible;max-height:unset;white-space:normal;"},atomicBlockSelectors:["div.slide-contents-item"]},{id:"you",matches:"https://you.com/search",globalStyles:{h3:"max-height:unset;-webkit-line-clamp:unset;",".caKYaC":"max-height:unset;-webkit-line-clamp:unset;",".dDwDsu":"max-height:unset;-webkit-line-clamp:unset;"},excludeSelectors:["div.hpIWZO"]},{id:"auth0Openai",matches:"auth0.openai.com",excludeSelectors:["form","header > h1"]},{id:"chatOpenai",matches:"chat.openai.com",excludeSelectors:["div.absolute.bottom-0.left-0.w-full","h1","div#headlessui-portal-root","nav","ul[aria-multiselectable]",".markdown *","div[class='flex flex-col items-start']","div[class='flex items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300']"],"excludeTags.remove":["BUTTON"],isTranslateTitle:!1,wrapperPrefix:"",globalStyles:{"[class*='line-clamp']":"max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"},aiRule:{streamingSelector:".result-streaming.markdown",messageWrapperSelector:".markdown",streamingChange:!0,streamingDeepChild:!0}},{id:"newstop",matches:["chat.newstop.asia","chat.waixingyun.cn"],excludeSelectors:[".markdown-body *"],aiRule:{streamingSelector:".n-button.n-button--warning-type.n-button--medium-type",messageWrapperSelector:".markdown-body",streamingChange:!1,streamingDeepChild:!0}},{id:"askgpt",matches:["askgpt.cn","chatcat.zhaoyoung.me"],excludeSelectors:[".markdown-body *"],aiRule:{streamingSelector:".home_chat-message-status__EsVNi",messageWrapperSelector:".markdown-body",streamingChange:!0,streamingDeepChild:!0}},{id:"poe",matches:["https://poe.com/*"],excludeSelectors:[".Markdown_markdownContainer__UyYrv *",".MarkdownLink_linkifiedLink__KxC9G"],aiRule:{streamingSelector:".ChatStopMessageButton_stopButton__LWNj6",messageWrapperSelector:".Markdown_markdownContainer__UyYrv",streamingChange:!1,streamingDeepChild:!0}},{id:"glasp",matches:"glasp.co",excludeSelectors:[".home_overview_list_content_wrapper"]},{id:"developerChrome",matches:"developer.chrome.com",excludeSelectors:["web-tabs","ul.code-sections--summary"]},{id:"android",matches:["developer.android.google.cn","developer.android.com"],observeUrlChange:!0,additionalSelectors:["aside","google-codelab-step"]},{id:"ft",matches:"www.ft.com",excludeSelectors:["header","[aria-labelledby=cookie-banner-aria-label]","footer","[aria-label='Primary navigation']"]},{id:"microsoft",matches:"https://apps.microsoft.com/store/detail/*",additionalSelectors:["pre"],globalStyles:{".line-clamp":"-webkit-line-clamp:unset;max-height:unset;"},isTransformPreTagNewLine:!0},{id:"gitlab",matches:"gitlab.com",excludeSelectors:[".tree-content-holder","nav",".home-panel-metadata","div[data-testid=project_topic_list]",".commit"]},{id:"newthingsunderthesun",matches:"www.newthingsunderthesun.com",additionalSelectors:["[translate=no]"]},{id:"tiktok",matches:"https://www.tiktok.com/*/video/*",selectors:["[data-e2e^=comment-level]","[data-e2e=browse-video-desc] > span"]},{id:"rfcEditor",matches:["www.rfc-editor.org","docs.haproxy.org"],isTransformPreTagNewLine:!0,"excludeTags.add":["IMG","SUB","SUP","CODE","TT","ASIDE","FOOTER"],"excludeTags.remove":["LINK","G","PRE","TTS-SENTENCE","AIO-CODE"]},{id:"steamcommunity",matches:"https://steamcommunity.com/app/*",globalStyles:{".forum_topic":"height:auto;",".forum_topic_name":"white-space:normal;"},excludeSelectors:[".forum_paging",".forum_topic_reply_count",".forum_topic_lastpost",".forum_topic_award_count",".discussion_search_pagingcontrols"]},{id:"steampowered",matches:"store.steampowered.com/app/*",selectors:[".game_description_snippet",".game_area_description","#earlyAccessHeader","[id^='ReviewContent'] .content"],excludeSelectors:["#global_actions","#store_controls","#foryou_tab","[class*=persona]","[class*=game_title_area]","a.btn_medium",".persona_name",".hours.ellipsis",".checkcol",".postedDate",".dev_row .summary",".already_in_library",".game_header_image_ctn .grid_content",".ds_flag.ds_wishlist_flag",".early_access_review.tooltip",".communitylink_achievement_images",".user_reviews_summary_row.summary",".review_award_ctn",".add_to_wishlist_area",".next_in_queue_content",".glance_tags.popular_tags",".game_purchase_action",".vote_button_ctn","#VoteUpDownBtnCtn","#footer","#ViewAllReviewssummary"],atomicBlockSelectors:[".game_area_sys_req_leftCol",".game_area_sys_req_rightCol"],extraInlineSelectors:[".pulldown"],additionalSelectors:[".game_page_autocollapse_ctn iframe"],globalStyles:{".game_description_snippet":"max-height:unset; overflow: scroll;",".game_purchase_area_friends_want":"height: auto; padding-bottom: 6px;",".div.early_access_banner":"height: 84px",".franchise_notice > *":"height: 84px"},detectParagraphLanguage:!0},{id:"nature",matches:"https://www.nature.com/articles/*",excludeSelectors:[".c-header",".c-recommendations-header",".c-recommendations-list-container",".c-article-references__links",".c-article-identifiers",".c-article-author-list",".c-article-metrics-bar__wrapper",".c-article__pill-button","#author-information-content","#article-info-section"]},{id:"webofscience",matches:"https://www.webofscience.com/*",globalStyles:{".abstract":"height:auto !important;",".show-more-lines":"height:unset !important;"},excludeSelectors:[".summary-left-panel",".authors","app-full-record-keywords mark"],mutationObserverContainerSelectors:["[data-ta='summary-record-title-link']","#FullRTa-fullRecordtitle-0"],extraBlockSelectors:["app-summary-authors + div","app-full-record-keywords span span"],observeUrlChange:!0,urlChangeDelay:600,mutationChangeDelay:600},{id:"appleinsider",matches:["appleinsider.com"],excludeSelectors:["#topic-nav"]},{id:"jetbrains",matches:"https://www.jetbrains.com/help/*",extraBlockSelectors:["[data-test=prompt]"]},{id:"crates",matches:["https://crates.io/search*"],selectors:["div[class^=_description-box] div[class^=_description]"]},{id:"theverge",matches:"www.theverge.com",shadowRootSelectors:["div#coral_thread > div"]},{id:"simp",matches:"https://beta.simp.red/trans*",mainFrameSelector:".simpread-read-root"},{id:"lookintobitcoin",matches:"https://www.lookintobitcoin.com/charts/*",excludeSelectors:["svg"]},{id:"openaiAccount",matches:"https://platform.openai.com/account/api-keys*",urlChangeDelay:1500},{id:"pkgStd",matches:"https://pkg.go.dev/std",selectors:["td.UnitDirectories-desktopSynopsis"]},{id:"pkg",matches:"https://pkg.go.dev/*",selectors:["div.UnitDetails p"]},{id:"explainpaper",matches:["https://www.explainpaper.com/reader*"],isTranslateTitle:!1,selectors:[".leading-relaxed",".chat-messages p",".text-sm"]},{id:"colab",matches:"https://colab.research.google.com/*",excludeSelectors:["code","view-line"]},{id:"gatesnotes",matches:"www.gatesnotes.com",minZIndex:-1},{id:"kakao",matches:"page.kakao.com",shadowRootSelectors:["div[style^='visibility: visible'"]},{id:"coinmarketcap",matches:"coinmarketcap.com",extraBlockSelectors:["div[class='sc-3502f6cd-0 JxHqg']"]},{id:"wandb",matches:"wandb.ai",additionalSelectors:[".report-page-top"],additionalStayOriginalSelectors:["span[data-slate-inline=true]"],extraInlineSelectors:[]},{id:"paulgraham",matches:"paulgraham.com",additionalSelectors:["font[face=verdana]"],extraBlockSelectors:"font[face=verdana]"},{id:"zendesk",matches:"https://*.zendesk.com/agent/*",selectors:["[data-test-id*=subject]",".zd-comment",".title"]},{id:"migadu",matches:"webmail.migadu.com",selectors:[".bodyText"]},{id:"thehackernews",matches:"thehackernews.com",excludeSelectors:["span#blog-pager-older-link","span.h-datetime"],additionalSelectors:[".pop-title"]},{id:"brown",matches:"cs.brown.edu",excludeSelectors:[".SCodeFlow"]},{id:"tass",matches:"tass.ru",globalStyles:{"#__next":"font-size: 19px;line-height:28px;"}},{id:"chatGoogle",matches:"chat.google.com",selectors:["[jsname=bgckF]"]},{id:"fiverr",matches:"https://www.fiverr.com/inbox/*",selectors:[".message-body"]},{id:"fiverr-main",matches:"*.fiverr.com",globalStyles:{"h3 > a":"-webkit-line-clamp:unset;overflow:unset;",h3:"-webkit-line-clamp:unset;overflow:unset;",h5:"-webkit-line-clamp:unset;overflow:unset;",p:"-webkit-line-clamp:unset;overflow:unset;",".YLycza2.u9KHmsf":"height:unset;max-height:unset;"},excludeSelectors:[".popular"]},{id:"jira",matches:["jira.*.com/browse/*","jira.*.com/projects/*"],selectors:["[id=descriptionmodule]","[id=summary-val]","div.action-body","td.stsummary"]},{id:"ahaIo",matches:["*.aha.io"],selectors:["[tabindex='0']","div.user-content","div.comments__body","span.name"]},{id:"thehill",matches:"thehill.com",injectedCss:[".most-popular-item { max-height: unset !important; }",".most-popular-item__link { -webkit-line-clamp: unset !important; }"],excludeSelectors:["div.featured-cards__byline","div.list-item__meta",".tags__item","div.extended-scroll__header",".submitted-by",".site-header--has-alert-banner",".homepage__container__opinion__item__byline",".homepage__container__header",".archive__item__meta"]},{id:"ubuntu",matches:"manpages.ubuntu.com",selectors:["pre"],atomicBlockTags:["pre"]},{id:"spiedigitallibrary",matches:"www.spiedigitallibrary.org","excludeTags.add":["IMG","SUB","SUP","CODE","TT","ASIDE","FOOTER"],"excludeTags.remove":["LINK"]},{id:"promptingguide",matches:"www.promptingguide.ai",selectors:["article","li"]},{id:"ground",matches:"ground.news",globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset !important;"}},{id:"ietf",matches:"*.ietf.org/doc/html/*",additionalSelectors:["pre"],isTransformPreTagNewLine:!0,preWhitespaceDetectedTags:["DIV","SPAN","PRE"]},{id:"newsminimalist",matches:"https://www.newsminimalist.com/",extraBlockSelectors:[".inline-flex"],"excludeTags.remove":["BUTTON"]},{id:"vimeo",matches:"https://player.vimeo.com/video/*",extraBlockSelectors:["span.vp-captions-line","span[class^=CaptionsRenderer_]"]},{id:"yandexIndex",matches:"https://yandex.com/",selectors:[".tabs__item-text"]},{id:"yandexSearch",matches:"https://yandex.com/search/*",excludeSelectors:[".KeyValue-Row",".EntityFeedbackFooter",".Organic-Subtitle",".SerpFooter-Content",".serp-user",".Pager"],globalStyles:{".ExtendedText-Toggle":"white-space:normal;"}},{id:"yandex",matches:"https://yandex.com/video/*",selectors:[".serp-item__title",".serp-item__text",".Keypoints-ItemTitle",".bes-epmjnzm-idtktyj",".OrganicTitle-LinkText","h1.VideoTitle"],globalStyles:{".serp-item__title":"-webkit-line-clamp: unset;max-height:unset;",".serp-item__text":"-webkit-line-clamp: unset;max-height:unset;",".OrganicTitle-LinkText":"-webkit-line-clamp: unset;max-height:unset;","h1.VideoTitle":"-webkit-line-clamp: unset;max-height:unset;",".link .serp-item__keypoints":"bottom:2px;",".OrganicTitle":"max-height:unset;"}},{id:"perplexityAi",matches:"https://www.perplexity.ai/search/*",extraBlockSelectors:[".prose > span"],additionalStayOriginalSelectors:["a.citation"],insertPosition:"afterend"},{id:"perplexity",matches:"https://www.perplexity.ai",globalStyles:{".line-clamp-1":"-webkit-line-clamp: unset !important;",".line-clamp-2":"-webkit-line-clamp: unset !important;"}},{id:"allmyfaves",matches:"https://allmyfaves.com/",selectors:["p"],paragraphMinTextCount:2,paragraphMinWordCount:1},{id:"man7",matches:"man7.org",isTransformPreTagNewLine:!0,globalStyles:{pre:"white-space: inherit;"}},{id:"kadaza",matches:"https://www.kadaza.com/",selectors:[".header span.title",".custom-content-footer"],containerMinTextCount:2,containerMinWordCount:1,paragraphMinTextCount:2,paragraphMinWordCount:1},{id:"urlChangeDelay",matches:["https://babelnovel.com/books/*","https://www.webnovel.com/book/*","https://platform.openai.com/docs/*","docs.oracle.com","docs-cortex.paloaltonetworks.com","forum.m5stack.com/topic/*","community.m5stack.com/topic/*"],urlChangeDelay:0,_comment:"\u89E3\u51B3url\u53D8\u5316\u91CD\u590D\u7FFB\u8BD1\u95EE\u9898"},{id:"genuine",matches:"blog.genuine.com",excludeSelectors:["div.enlighter"]},{id:"chinadaily",matches:"www.chinadaily.com.cn",injectedCss:["a { height: unset !important; }","li { height: unset !important; }","div { height: unset !important; }",".immersive-translate-target-inner {color:black;}"],excludeSelectors:[".topNav",".topNav2_art > span",".topNav_art2 > .dropdown",".dibu-three",".topBar"]},{id:"braynzarsoft",matches:"www.braynzarsoft.net",selectors:["div#view-question-desc"]},{globalAttributes:{"#stimulus":{translate:"off",class:"stimulus"},"#stem":{translate:"off",class:"stem"}},id:"lawhub",matches:"https://lawhub.lsac.org/question/*"},{id:"yuque",matches:"https://www.yuque.com/*",excludeSelectors:[".lark-virtual-tree"]},{id:"bearblog",matches:"https://bearblog.dev/discover/*",excludeTags:["small"]},{id:"researchgate",matches:"www.researchgate.net",excludeSelectors:[".nova-legacy-v-publication-item__meta-data",".nova-legacy-v-publication-item__person-list",".js-authors-list"]},{id:"theatlantic",matches:["www.theatlantic.com","https://mashable.com/*"],"excludeSelectors.add":["footer:last-of-type","nav","header div.subtitle-2.w-full"],initialSelectorGlobalAttributes:{"footer:last-of-type":{translate:"no"},"nav:last-of-type":{translate:"no"},nav:{translate:"no"}}},{id:"youtrackJetbrains",matches:"youtrack.jetbrains.com/articles/*",selectors:["[role=presentation]","[data-test=article-content]"],excludeSelectors:[".toolbar__ee8"]},{id:"bbc",matches:"www.bbc.com",excludeSelectors:["section.module--languages",".drop-capped"]},{id:"dw",matches:"www.dw.com",initialSelectorGlobalAttributes:{"footer:last-of-type":{translate:"no"},"nav:last-of-type":{translate:"no"},nav:{translate:"no"}},excludeSelectors:[".focus-menu-shown"]},{id:"sentry",matches:"docs.sentry.io",initialSelectorGlobalAttributes:{"footer:last-of-type":{translate:"no"},".navbar":{translate:"no"}},"extraInlineSelectors.add":[".term-wrapper","span.description"]},{id:"openai-blog",matches:"https://openai.com/blog/*","stayOriginalTags.remove":["CODE"]},{id:"urlComment",selectorMatches:["meta[name='generator'][content^='Discourse']"],urlChangeDelay:0,_comment:"\u89E3\u51B3url\u53D8\u5316\u4F46\u662F\u9875\u9762\u4E0D\u53D8\u7684\u95EE\u9898"},{id:"feedly",matches:"feedly.com",globalStyles:{".TitleOnlyLayout":"height:unset !important;",".EntrySummary--u4":"-webkit-line-clamp: unset;max-height:unset;",".EntrySummary--u5":"-webkit-line-clamp: unset;max-height:unset;"},excludeSelectors:[".Leftnav"]},{id:"bardGoogle",matches:"bard.google.com",excludeSelectors:["mat-sidenav","div.capabilities-disclaimer","#cdk-overlay-6","message-actions button",".mdc-button__label .ng-star-inserted",".mdc-list-item__primary-text"],isTranslateTitle:!1,"excludeTags.add":["mat-tooltip-component"],"excludeTags.remove":["BUTTON"]},{id:"whatsapp",matches:"web.whatsapp.com",selectors:[".copyable-text > span"],wrapperPrefix:`
`,wrapperSuffix:"<br/>"},{id:"bing",matches:"https://*.bing.com/search*",extraInlineSelectors:["a","i"],globalStyles:{"[class*='lineclamp']":"-webkit-line-clamp:unset;"}},{id:"yahoo",matches:"*.yahoo.*",excludeSelectors:["._ys_jiqava","#ybar-inner-wrap","#Col2-5-Rmp-Proxy"],extraBlockSelectors:[".SIPGg",".sc-kzMCTH.pSZXj"],globalStyles:{"#atomic .Mt\\(20px\\)":"margin-top: 100px;","[class*='LineClamp']":"-webkit-line-clamp:unset;max-height:unset;","a[class*='js-content-viewer']> div[class*='Td\\(n\\)']":"overflow: scroll;","[class*='_ys_24482e']":"-webkit-line-clamp:unset;","#Aside > :first-child":"overflow:scroll;"}},{id:"wsj",matches:"www.wsj.com",excludeSelectors:["header","footer","nav","[aria-label='Markets summary']"]},{id:"businessinsider",matches:"www.businessinsider.com",excludeSelectors:["header","nav","section.live-updates-module "]},{id:"goodreads",matches:"www.goodreads.com",excludeSelectors:[".badgeYear",".gr-mediaBox__desc",".bookVotedRow",".minirating","div[itemprop='aggregateRating']",".wtrButtonContainer",".RatingsHistogram__labelTitle",".FollowButton",".siteHeader__topLevelLink","#books > thead","td[class*='rating']","td[class*='shelves']","td[class*='date_read']","td[class*='date_added']","td[class*='actions']"]},{id:"feeder",matches:"https://feeder.co/*",globalStyles:{".item-summary":"-webkit-line-clamp:unset;"}},{id:"elektrotechnik",matches:"https://www.elektrotechnik.rwth-aachen.de/*",globalAttributes:{"[class='notranslate']":{class:""}}},{id:"nytimes",matches:"www.nytimes.com",excludeSelectors:["#app > div > div > header","#app > div > div > div > div > header","#in-story-masthead"],injectedCss:["a::after {position:relative!important;}"]},{id:"bugsKde",matches:"bugs.kde.org","excludeTags.remove":["svg","PRE"],additionalExcludeSelectors:[".bz_first_comment_head",".bz_comment_head",".related_actions"]},{id:"eastmoney",matches:"guba.eastmoney.com",searchEnhancementConfig:[{id:"eastmoney",urlMatch:"guba.eastmoney.com/news,us\\w+,\\w+.html",delayTime:0,selector:".moneyFlowContainer",selectorAction:"insertBefore",style:{container:"background:white;border:none;border-radius: 4px;box-shadow: 0 2px 4px hsla(216,5%,62%,.14);",source:"font-size:12px; margin-bottom: 0px;",keyword:"color:#294688",title:"font-size:14px;color:#294688;",enTitle:"margin-top:4px;font-size:12px;",searchTitle:"margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;",time:"margin: 0px 0 16px;",more:"color:#294688;margin-top:8px;"},keyword:{value:"[0]$1 stock",matches:[{source:"url",matchRegex:"guba.eastmoney.com/news,us(\\w+?),\\S+.html"}]},showCount:8},{id:"eastmoney",urlMatch:"guba.eastmoney.com/list,us\\w+.*.html",delayTime:0,selector:".qualityContentContainer",selectorAction:"insertBefore",style:{container:"background:white;border:none;border-radius: 4px;box-shadow: 0 2px 4px hsla(216,5%,62%,.14);",source:"font-size:12px; margin-bottom: 0px;",keyword:"color:#294688",title:"font-size:14px;color:#294688;",enTitle:"margin-top:4px;font-size:12px;",searchTitle:"margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;",time:"margin:0px 0 16px;",more:"color:#294688;margin-top:8px;"},keyword:{value:"[0]$1:[0]$2",matches:[{source:{type:"selector",attribute:"href"},matchRegex:"code=(\\w+)_(\\w+)",match:"a[href*='rank/stock?code=']"}]},showCount:8}]},{id:"xueqiu",matches:"xueqiu.com",searchEnhancementConfig:[{id:"xueqiu",urlMatch:"xueqiu.com/S/[a-zA-Z]+/?$",delayTime:0,selector:".container-side-sm.float-right.stock__side",selectorAction:"appendChild",style:{container:"background:white;border:none;border-radius: 4px;padding:0;",source:"font-size:12px; margin-bottom: 0px;",keyword:"color:#06c",title:"font-size:14px;color:#06c;",enTitle:"margin-top:4px;font-size:12px;",searchTitle:"margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;font-weight: bold;",time:"margin:0px 0 16px;",more:"color:#06c;margin-top:8px;"},showCount:8,keyword:{value:"[0]$1",matches:[{source:{type:"selector",attribute:"text"},matchRegex:"\\((.+)\\)",match:".stock-name"}]}}]},{id:"laohu8",matches:"www.laohu8.com",searchEnhancementConfig:[{id:"laohu8",urlMatch:"www.laohu8.com/stock/[a-zA-Z]+/?$",delayTime:0,selector:".hot-stocks-root",selectorAction:"insertBefore",style:{container:"background:white;border:none;border-radius: 4px;box-shadow: 0 2px 4px hsla(216,5%,62%,.14);",source:"font-size:12px; margin-bottom: 0px;",title:"font-size:14px;color: #007bff;",enTitle:"margin-top:4px;color: #4d5156;font-size:12px;",searchTitle:"margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;",time:"margin: 0px 0 16px;"},keyword:{value:"[0]$1 stock",matches:[{source:"url",matchRegex:"stock/([a-zA-Z]+)"}]},showCount:8}]},{id:"futunn",matches:"www.futunn.com",searchEnhancementConfig:[{id:"futunn",urlMatch:"www.futunn.com/stock/\\w+-US",delayTime:0,selector:".right",selectorAction:"appendChild",style:{container:"background:white;border:none;border-radius: 4px;box-shadow: 0 2px 4px hsla(216,5%,62%,.14);",source:"font-size:12px; margin-bottom: 4px;",title:"font-size:14px;color: #007bff;",enTitle:"margin-top:4px;color: #4d5156;font-size:12px;",searchTitle:"margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;",time:"margin: 4px 0 20px;"},keyword:{value:"[0]$1 stock",matches:[{source:"url",matchRegex:"stock/([a-zA-Z]+)-US"}]},showCount:8}]},{id:"bmvrMarseille",matches:"www.bmvr.marseille.fr",globalStyles:{"a > div":"display:block;","[style*='358px;']":"width: 33.3333%; height: auto; padding: 0px; position: relative; margin: 0px;"},globalAttributes:{"#app":{class:""}}},{id:"haproxy",matches:["docs.haproxy.org","www.oreilly.com/openbook/opensources/book/*"],excludeTags:[],stayOriginalSelectors:[],stayOriginalTags:[],isTransformPreTagNewLine:!0},{id:"piAi",matches:"pi.ai/talk",excludeSelectors:[".whitespace-pre-wrap > span *"],aiRule:{streamingSelector:"button[class*='fixed'][disabled]",messageWrapperSelector:".whitespace-pre-wrap",streamingChange:!1,streamingDeepChild:!1},globalStyles:{"[class*='text-brand-green']":"flex-direction:column;"}},{id:"claudeAi",matches:"claude.ai",excludeSelectors:[".contents *"],"excludeTags.remove":["PRE"],injectedCss:"[data-testid='chat-menu-trigger'] br {display:none;}",aiRule:{messageWrapperSelector:".contents",messageContainerSelector:".ReactMarkdown",messageStreamEndSelector:".contents > button",streamingChange:!0,streamingDeepChild:!1}},{id:"feishu",matches:"*.feishu.cn","additionalExcludeSelectors.remove":[".notranslate","[translate=no]"],mutationObserverLimitTargetSelectors:[".maindocbody","div[class*='render']","div[class*='block']"],excludeSelectors:[".catalogue__list"]},{id:"gitbook",selectorMatches:[".gitbook-root"],"additionalExcludeSelectors.remove":[".notranslate","[translate=no]"],"additionalExcludeSelectors.add":["[spellcheck='false']"]},{id:"bugsWebkit",matches:"bugs.webkit.org",isTransformPreTagNewLine:!0},{id:"mitre",matches:"cwe.mitre.org",globalStyles:{"span.list_entry":"height: unset;"}},{id:"kaggle",matches:"www.kaggle.com",excludeTags:["i","button"]},{id:"ieee",matches:"spectrum.ieee.org",extraBlockSelectors:["small"]},{id:"ieeexplore",matches:"ieeexplore.ieee.org",stayOriginalSelectors:["a[ref-type]",".inline-formula",".display-formula"]},{id:"cnn",matches:"*.cnn.com",excludeSelectors:[".ad-slot-header__wrapper"],"bodyRule.add":{bodySelector:".layout__content-wrapper",articleSelector:".article__content-container"}},{id:"marginalrevolution",matches:"marginalrevolution.com",globalAttributes:{header:{translate:"unset;"}}},{id:"highfrequencyelectronics",matches:"www.highfrequencyelectronics.com",globalStyles:{"#main-content":"overflow:unset;"}},{id:"githubBlog",matches:"github.blog",globalStyles:{".font-mktg":"word-break:normal;"}},{id:"semanticscholar",matches:"www.semanticscholar.org",selectors:[".cl-paper-title",".cl-paper-abstract",".tldr-abstract-replacement",".text-truncator",".paper-detail-title"]},{id:"uni-trier",matches:"dblp.uni-trier.de",selectors:["h1","h2",".title",".external","dd p"],excludeSelectors:[".side-column"]},{id:"bilibili",matches:"www.bilibili.com","excludeSelectors.add":[".bpx-player-subtitle-panel-text br"]},{id:"time",matches:"time.com",excludeSelectors:[".date-and-duration"],globalStyles:{".headline":"-webkit-line-clamp:unset;overflow:unset;height:unset;",h3:"-webkit-line-clamp:unset;overflow:unset;",p:"-webkit-line-clamp:unset;overflow:unset;"}},{id:"docs-swift",matches:"docs.swift.org",selectors:[".content","#menu"]},{id:"uzh",matches:"www.uzh.ch",injectedCss:[".TextImage--inner {overflow:auto !important;}"]},{id:"mail-yandex",matches:"mail.yandex.com",selectors:["article",".Text_color_primary",".mail-MessageSnippet-Item_subject"],globalStyles:{".mail-MessageSnippet":"height: unset; line-height:unset;",".immersive-translate-target-translation-block-wrapper":"margin:unset;"}},{id:"edstem",matches:"edstem.org","additionalExcludeSelectors.remove":[".notranslate","[translate=no]"]},{id:"forums.zotero",matches:"forums.zotero.org",selectors:[".page-sidebar",".page-content"]},{id:"pubmed.ncbi.nlm.nih.gov",matches:"pubmed.ncbi.nlm.nih.gov",urlChangeDelay:0,excludeSelectors:[".docsum-journal-citation",".citation-part",".docsum-authors",".top-wrapper",".article-source",".citation-doi",".identifiers",".cite",".share"]},{id:"chosun",matches:"www.chosun.com",injectedCss:"body {word-break: unset!important;}"},{id:"yna",matches:"*.yna*",injectedCss:["font > br {display:none}"],globalStyles:{"a,strong":"max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;","div,p,li,.item-box01,.news-con":"height:unset;max-height:unset;-webkit-line-clamp:unset;"},"additionalExcludeSelectors.remove":[".notranslate","[translate=no]"]},{id:"cnet",matches:"www.cnet.com",globalStyles:{"h3,div,span,p":"max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"}},{id:"dolmods",matches:"dolmods.net",globalStyles:{"[class*='max-h']":"max-height:unset!important;"}},{id:"digitimes",matches:"www.digitimes.com",globalStyles:{"a,.title,.abstract,.display-5,.top":"max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"},"excludeSelectors.add":[".main-nav-frame",".sub-header-wrapper",".footer",".date"],"additionalExcludeSelectors.remove":[".notranslate","[translate=no]"]},{id:"vdi-nachrichten",matches:"www.vdi-nachrichten.com","excludeSelectors.add":[".header-menu__item > a",".linkbar__item",".header__button-group"]},{id:"tldrnewsletter",matches:"actions.tldrnewsletter.com","additionalExcludeSelectors.remove":[".notranslate","[translate=no]"]},{id:"htdp",matches:"htdp.org",excludeTags:["blockquote"],stayOriginalSelectors:[".RktIn"]},{id:"bugzilla",matches:"bugzilla.mozilla.org","excludeTags.remove":["PRE"],isTransformPreTagNewLine:!0},{id:"newsletterss",matches:"newsletterss.com",initialGlobalAttributes:{iframe:{scrolling:"auto"}}},{id:"docusaurus",selectorMatches:["#__docusaurus"],"excludeSelectors.add":["aside",".DocSearch-Modal"]},{id:"mercari",matches:"*.mercari.com","excludeTags.remove":["PRE"]},{id:"qqMail",matches:"mail.qq.com",useIframePostMessage:!1},{id:"nikkei",matches:"www.nikkei.com",globalStyles:{"h3,div,span,p":"max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"}},{id:"pubs.rsc.org",matches:"pubs.rsc.org",excludeSelectors:[".eqn"]},{id:"indeed",matches:"*.indeed.com",globalStyles:{"span,.css-19rjr9w.e1wnkr790":"max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"},"excludeTags.remove":["BUTTON"]},{id:"brutalist",matches:"brutalist.report",selectors:["li > a:first-child","aside","nav > a","h1 > a","h3 > a","h2 >a"],"additionalExcludeSelectors.remove":[".notranslate","[translate=no]"]},{id:"maxroll",matches:["maxroll.gg"],extraInlineSelectors:[".d4t-sprite-icon",".d4t-icon"],injectedCss:["font {font-family: sans-serif !important;}"]},{id:"microsoftTeams",matches:["teams.live.com"],"stayOriginalSelectors.add":["span[title][style='min-width: 20px; height: 20px;']"]},{id:"gradioappdocs",matches:"www.gradio.app/docs/*",selectors:["div.obj"],excludeSelectors:["div#examples"]},{id:"arca",matches:"arca.live","excludeTags.remove":["PRE"]},{id:"chatpdf",matches:["www.chatpdf.com"],"additionalExcludeSelectors.remove":[".notranslate"],excludeSelectors:[".chat-message-row.ai *",".pdf-viewer"],aiRule:{streamingSelector:"",messageWrapperSelector:".chat-message-row.ai",streamingChange:!1,streamingDeepChild:!0}},{id:"inciteful",matches:["inciteful.xyz"],"excludeTags.remove":["BUTTON"]},{id:"app.element.io",matches:["app.element.io"],"additionalExcludeSelectors.remove":[".notranslate"],"excludeSelectors.add":[".mx_DisambiguatedProfile",".mx_ReplyChain_wrapper",".mx_ThreadSummary_replies_amount"]},{id:"lwn.net",matches:["lwn.net/Articles/*"],isTransformPreTagNewLine:!0},{id:"fastapi.tiangolo.com",matches:"fastapi.tiangolo.com",selectors:["article"]},{id:"termynal",selectorMatches:["link[href*='termynal.css']"],"stayOriginalSelectors.add":[".termy"]},{id:"cpb-nl",matches:["www.cpb.nl"],"bodyRule.add":{enable:!1}},{id:"hub.logseq",matches:["hub.logseq.com"],globalStyles:{"[class*=':h-[']":"height:unset;"}},{id:"chat.zalo",matches:["chat.zalo.me"],"additionalExcludeSelectors.remove":[".notranslate"]},{id:"epam",matches:"*.epam.com",globalStyles:{"[class*='ContentAnchorLinkList']":"word-break:unset;"},"excludeSelectors.add":["#blog-page-sidebar-wrapper"],"excludeTags.remove":["BUTTON"]},{id:"discussions.apple",matches:"discussions.apple.com","excludeSelectors.add":[".page-number"]},{id:"www.sixthtone.com",matches:["www.sixthtone.com"],"excludeSelectors.add":["#footer","[class^=index_time]","[class^=index_anthorList]","[class^=index_node]","[class^=index_popupWrapper]"]}]};function yt(e){return Array.isArray(e)?e:e?[e]:[]}function Xa(e,t){let r={...e};return Za(r,t),Fl(r,t),r}function Ja(e,t,r){let n={...t};return jl(e,n,r),n}function Fl(e,t){if(!t.condition)return;let r=t.condition.enableSubtitle?.true||{},n=t.condition.enableSubtitle?.false||{},a=e.enableSubtitle?r:n;Za(e,a)}function jl(e,t,r){try{return Object.keys(t).forEach(n=>{let[a,i]=n.split(".");if(i){let o=t[n];if(Array.isArray(e[a])&&(o=yt(t[n])),i==="add"){t[a]=Kt(e[a],o),delete t[n];return}else if(i=="remove"){t[a]=cn(e[a],o),delete t[n];return}}}),Object.keys(r).forEach(n=>{let[a,i]=n.split(".");if(!a||r[n]===void 0)return;let o=r[n],l=t[a];if(Array.isArray(e[a])&&(o=yt(r[n]),l=yt(t[a])),i==="add"){t[a]=Kt(l,o);return}else if(i=="remove"){t[a]=cn(l,o);return}Array.isArray(l)&&a.startsWith("additional")?t[a]=Kt(l,o):t[a]=o}),t}catch{}}function Za(e,t){return Object.keys(t).forEach(r=>{let[n,a]=r.split(".");if(!n||t[r]===void 0)return;let i=t[r];if(Array.isArray(e[n])&&(i=yt(t[r])),a==="add"){e[n]=Kt(e[n],i);return}else if(a=="remove"){e[n]=cn(e[n],i);return}Array.isArray(e[n])&&n.startsWith("additional")?e[n]=Kt(e[n],i):e[n]=i}),e}function Kt(e,t){let r;if(Array.isArray(e)){let n=yt(t);r=[...e,...n],r=Array.from(new Set(r))}else typeof e=="object"&&typeof t=="object"&&(r={...e,...t});return r}function cn(e,t){if(Array.isArray(e)){let r=yt(t);return e=e.filter(n=>!r.includes(n)),Array.from(new Set(e))}else typeof e=="object"&&typeof t=="object"&&Object.keys(t).forEach(r=>{delete e[r]});return e}function ql(){if(Y.PROD==="1")return{};let e={};if(Y.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID&&Y.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY){let r={secretId:Y.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,secretKey:Y.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY};e.translationServices={},e.translationServices.tencent=r}if(Y.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID&&Y.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY){let r={appid:Y.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,key:Y.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY};e.translationServices||(e.translationServices={}),e.translationServices.baidu=r}if(Y.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN){let r={token:Y.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN};e.translationServices||(e.translationServices={}),e.translationServices.caiyun=r}if(Y.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY){let r={apikey:Y.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY};e.translationServices||(e.translationServices={}),e.translationServices.openl=r}if(Y.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID&&Y.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET){let r={appId:Y.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,appSecret:Y.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET};e.translationServices||(e.translationServices={}),e.translationServices.youdao=r}if(Y.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID&&Y.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY){let r={accessKeyId:Y.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,secretAccessKey:Y.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY};e.translationServices||(e.translationServices={}),e.translationServices.volc=r}if(Y.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY){let r={authKey:Y.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY};e.translationServices||(e.translationServices={}),e.translationServices.deepl=r}if(Y.DEEPL_PROXY_ENDPOINT&&(e.translationServices||(e.translationServices={}),e.translationServices.deepl||(e.translationServices.deepl={}),e.translationServices.deepl.immersiveTranslateApiUrl=Y.DEEPL_PROXY_ENDPOINT),Y.IMMERSIVE_TRANSLATE_DEEPL_ENDPOINT&&(e.translationServices||(e.translationServices={}),e.translationServices.deepl||(e.translationServices.deepl={}),e.translationServices.deepl.immersiveTranslateDeeplTokenUrl=Y.IMMERSIVE_TRANSLATE_DEEPL_ENDPOINT),Y.IMMERSIVE_TRANSLATE_SECRET_OPENAI_API_KEY){let r={APIKEY:Y.IMMERSIVE_TRANSLATE_SECRET_OPENAI_API_KEY};e.translationServices||(e.translationServices={}),e.translationServices.openai=r}Y.IMMERSIVE_TRANSLATE_SERVICE&&(e.translationService=Y.IMMERSIVE_TRANSLATE_SERVICE);let t={};return Y.DEBUG==="1"&&(t.debug=!0,t.cache=!1),Y.MOCK==="1"&&(t.translationService="mock"),t}async function Ht(){let e=await f.storage.local.get(Ut);if(e[Ut]){let t=e[Ut],r=t.tempTranslationUrlMatches||[],n=r.filter(o=>o.expiredAt>Date.now()),a=!1;n.length!==r.length&&(r=n,a=!0);let i={...t,tempTranslationUrlMatches:[...r]};return a&&await Pt(i),i}else return{}}async function Pt(e){await f.storage.local.set({[Ut]:e})}async function st(){let e=await f.storage.local.get(sr),t={...ln,buildinConfigUpdatedAt:Y.BUILD_TIME};if(e[sr]){let te=e[sr];if(te&&te.buildinConfigUpdatedAt){let A=new Date(te.buildinConfigUpdatedAt),V=new Date(t.buildinConfigUpdatedAt);A>V&&(t=te)}}let r=await qa.get(cr,null),n={};if(!At()&&f.commands&&f.commands.getAll){let te=await f.commands.getAll();for(let A of te)A.name&&A.shortcut&&(n[A.name]=A.shortcut)}let a=Kl(),i=ql(),o=await Gt(),l=globalThis.IMMERSIVE_TRANSLATE_CONFIG||{},s=await Ht(),c=new Date;if(s&&s.tempTranslationUrlMatches&&s.tempTranslationUrlMatches.length>0){let te=s.tempTranslationUrlMatches.filter(A=>new Date(A.expiredAt)>c);if(te.length>0){let A=o.translationUrlPattern?o.translationUrlPattern?.matches||[]:[],V=Array.isArray(A)?A:[A],we=Array.from(new Set(V.concat(te.map(ne=>ne.match))));o.translationUrlPattern={...o.translationUrlPattern,matches:we}}}let u=Object.assign({},l,i,o);if(!u.interfaceLanguage){let te=await Wl();u.interfaceLanguage=te}let m=u.interfaceLanguage==="en",p=u.targetLanguage==="en",T=t&&t.translationLanguagePattern&&t.translationLanguagePattern.matches&&t.translationLanguagePattern.matches.length===0,k=["bing","google","transmart","mock"].includes(u.translationService)||!u.translationService;!m&&!p&&!T&&k?t.translationLanguagePattern||(t.translationLanguagePattern={matches:["en"],excludeMatches:[]}):t.translationLanguagePattern={matches:[],excludeMatches:[]};let Q=t&&t.enableDefaultAlwaysTranslatedUrls;u.enableDefaultAlwaysTranslatedUrls===!1&&(Q=!1);let B=u&&u.isChangedAlwaysTranslatedUrls,g=[];u.translationUrlPattern&&u.translationUrlPattern.matches&&(g=u.translationUrlPattern.matches||[]);let le=!1;B===void 0&&(g.length>0?B=!0:B=!1,u.isChangedAlwaysTranslatedUrls=B,o.isChangedAlwaysTranslatedUrls=B,le=!0);let D=(u?.translationLanguagePattern?.matches?.length||0)>0,X=await Ct("installedAt",""),se=Number(await qt("translage_page_daily",0)),C=Number(await Ct(Ia,0)),h;C>0&&(Date.now()-C<t.inactiveDays*24*60*60*1e3?h=!0:h=!1);let x;se>0&&(Date.now()-se<t.inactiveDays*24*60*60*1e3?x=!0:x=!1);let w;if(X){let te=new Date(X);Date.now()-te.getTime()<24*60*60*1e3?w=!0:w=!1}let I=u.modifiedBySystem;Q&&!B&&!m&&!p&&k&&!D&&(I===!0||w||x===!1||h===!1||x===void 0&&h===void 0)&&Hl(g,t.defaultAlwaysTranslatedUrls)&&(u.translationUrlPattern||(u.translationUrlPattern={}),u.translationUrlPattern.matches||(u.translationUrlPattern.matches=[]),u.translationUrlPattern.excludeMatches||(u.translationUrlPattern.excludeMatches=[]),u.translationUrlPattern.matches=[...t.defaultAlwaysTranslatedUrls],o.translationUrlPattern=u.translationUrlPattern,o.modifiedBySystem=!0,le=!0,Qa("modifyAlwaysTranslatedUrls",[{name:"modifyAlwaysTranslatedUrls"}])),le&&(O.debug("isChangedUserConfig",le),await Tt(o));let E=Object.assign(a,t),W=nn(r),M={};u.translationServices&&u.translationServices.deepl&&(M=u.translationServices.deepl);let J={};u.translationServices&&u.translationServices.openai&&(J=u.translationServices.openai),!W&&M.authKey&&!M.provider?(E.translationServices.deepl||(E.translationServices.deepl={}),E.translationServices.deepl.provider="custom"):M&&M.provider||(E.translationServices.deepl||(E.translationServices.deepl={}),E.translationServices.deepl.provider="pro"),!W&&J.APIKEY&&!J.provider?(E.translationServices.openai||(E.translationServices.openai={}),E.translationServices.openai.provider="custom"):J&&J.provider||(E.translationServices.openai||(E.translationServices.openai={}),E.translationServices.openai.provider="pro");let K=Object.keys(E),ye=["translationUrlPattern","translationLanguagePattern","immediateTranslationPattern","translationBodyAreaPattern","translationParagraphLanguagePattern","translationThemePatterns","translationGeneralConfig","shortcuts","inputTranslationUrlPattern","inputLanguageCodeAlias"];for(let te of K){let A=te;if(A==="generalRule")typeof u[A]=="object"&&(E[A]=Xa(a[A],u[A]));else if(A==="translationServices"){let V=u[A]||{},we=t[A]||{},ne=Object.keys(we),b=Object.keys(V),v=[...new Set([...ne,...b])],R={};for(let $ of v)R[$]={...we[$],...V[$]};E[A]=R}else if(typeof u[A]!="string"&&typeof u[A]!="boolean"&&typeof u[A]!="number"&&ye.includes(A))u[A]&&(E[A]=Object.assign(E[A],u[A])),A==="shortcuts"&&(At()||Qe()?E[A]={...E[A],...n}:E[A]={...n});else if(A==="rules"){if(Array.isArray(u[A])){let V=E.rules||[],we={};for(let b of V)b.id&&(we[b.id]=b);let ne=u[A].map(b=>b.id&&we[b.id]?Ja(t.generalRule,we[b.id],b):b);E[A]=[...ne,...E[A]]}if(Y.PROD==="0"&&Y.DEV_RULES){let V=JSON.parse(Y.DEV_RULES);E[A]=[...V,...E[A]]}}else u[A]!==void 0&&(E[A]=u[A])}return E.donateUrl=t.donateUrl,E.minVersion=t.minVersion,E.feedbackUrl=t.feedbackUrl,E.rawUserConfig=o,E}async function Gt(){return(await f.storage.sync.get("userConfig")||{}).userConfig||{}}async function Tt(e){await f.storage.sync.set({userConfig:e})}var Wl=async()=>{let e=["zh-CN"];try{e=await f.i18n.getAcceptLanguages()}catch(n){O.warn("get browser language error:",n)}let r=e.map(n=>pt(n)).find(n=>mt[n]);return r||"en"},Kl=()=>{let e={...ln,buildinConfigUpdatedAt:Y.BUILD_TIME};return{...e,targetLanguage:lr,interfaceLanguage:"en",translationMode:"dual",debug:!1,alpha:!1,translationUrlPattern:{matches:[],excludeMatches:[]},translationLanguagePattern:{matches:[],excludeMatches:[]},translationThemePatterns:{},translationParagraphLanguagePattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationBodyAreaPattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationTheme:"none",translationService:"bing",inputTranslationService:"inherit",mouseHoverTranslationService:"inherit",subtitleTranslateService:"inherit",translationArea:"main",translationStartMode:"dynamic",translationServices:{},monkeyH5FloatBall:{...e.monkeyH5FloatBall},pcFloatBall:{...e.pcFloatBall},generalRule:{...e.generalRule},translationGeneralConfig:{engine:"bing"},rules:[]}};function Hl(e,t){return e=e||[],t=t||[],e.length!==t.length?!0:t.filter(n=>!e.includes(n)).length>0}function ei(e){let t=f.runtime.getURL(Ea),r=new URL(t);return(e.startsWith("http")||!Ba())&&r.searchParams.set("file",e),r.href}function ti(){return be().PDF_VIEWER_URL}function ri(e){return new URL(e)?.pathname.toLowerCase().endsWith(".pdf")}var ni=["*://*/*","*","*://*"],ii="immersive-translate-wildcard-placeholder.com";function Gl(e,t){let r=[];if(!t||(t&&!Array.isArray(t)?r=[t]:r=t,r.length===0))return null;if(r.some(o=>ni.includes(o)))return e;let n=new URL(e);n.hash="",n.search="";let a=n.href,i=n.hostname;if(r&&r.length>0){let o=r.find(l=>{let s=l;if(l===i)return!0;if(ni.includes(l))return!0;if(!l.includes("*")&&l.includes("://")){try{let c=new URL(l);return c.pathname==="/"&&!l.endsWith("/")?c.hostname===i:Vl(a,l)}catch{}return!1}else{let c,u=l;if(l.includes("://")){let B=l.split("://");c=B[0],c==="*"&&B.length>1&&(c="*",l="https://"+B[1])}else c="*",l="https://"+l;let m=l.replace(/\*/g,ii),p;try{p=new URL(m)}catch{return O.debug("invalid match pattern",m,"raw match value:",u),!1}let T=p.hostname,k=p.pathname;k==="/"&&(u.replace("://","").includes("/")||(k="/*"));let Q=zl(c+":",ai(T),ai(k));if(Q){let B=new URL(a);return B.port="",Q.test(B.href)}else return!1}});if(o)return o}return null}function ai(e){return e.replaceAll(ii,"*")}function zl(e,t,r){let n="^";return e==="*:"?n+="(http:|https:|file:)":n+=e,n+="//",t&&(e==="file:"||(t==="*"?n+="[^/]+?":(t.match(/^\*\./)&&(n+="[^/]*?",t=t.substring(2)),n+=t.replace(/\./g,"\\.").replace(/\*/g,"[^/]*")))),r?r==="*"||r==="/*"?n+="(/.*)?":r.includes("*")?(n+=r.replace(/\*/g,".*?"),n+="/?"):n+=r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):n+="/?",n+="$",new RegExp(n)}function oi(e,t){return Gl(e,t)!==null}function Vl(e,t){let r=new URL(e),n=new URL(t);return r.hostname===n.hostname&&r.pathname===n.pathname&&r.protocol===n.protocol&&r.port===n.port}var pr=class{accessToken;constructor(t){this.accessToken=t}async listAll(){let t=[],r="";do{let{nextPageToken:n,files:a}=await this.list(r).catch(i=>{throw i});t.push(...a),r=n||""}while(r);return t}async getConfig(t){try{return await(await fetch(`https://www.googleapis.com/drive/v3/files/${t}?alt=media`,{headers:{Authorization:`Bearer ${this.accessToken}`}})).json()}catch(r){return O.error("get config error, use default",r),{}}}async delete(t){await fetch(`https://www.googleapis.com/drive/v3/files/${t}`,{method:"DELETE",headers:{Authorization:`Bearer ${this.accessToken}`}})}findByName(t){return this.list(void 0,`name = '${t}'`)}uploadConfig(t,r=or){let n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return this.upload({name:r,parents:["appDataFolder"],mimeType:"application/json"},n)}updateConfig(t,r){let n=new Blob([JSON.stringify(r,null,2)],{type:"application/json"});return this.updateContent(t,n)}async upload(t,r){let n=new FormData;n.append("metadata",new Blob([JSON.stringify(t)],{type:"application/json; charset=UTF-8"})),n.append("file",r);let a=await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",{method:"POST",headers:{Authorization:`Bearer ${this.accessToken}`},body:n});return a.ok?await a.json():Promise.reject(a.text())}async list(t,r){let n=new URL("https://www.googleapis.com/drive/v3/files");t&&n.searchParams.append("pageToken",t),r&&n.searchParams.append("q",r),n.searchParams.append("spaces","appDataFolder"),n.searchParams.append("fields","files(id,name,createdTime,modifiedTime,size)"),n.searchParams.append("pageSize","100"),n.searchParams.append("orderBy","createdTime desc");try{return O.debug("list api:",n.toString(),this.accessToken),await(await fetch(n.toString(),{headers:{Authorization:`Bearer ${this.accessToken}`}})).json()}catch(a){throw O.error("fetch google ip error",a),a}}async updateContent(t,r){return await(await fetch(`https://www.googleapis.com/upload/drive/v3/files/${t}?uploadType=media`,{method:"PATCH",headers:{Authorization:`Bearer ${this.accessToken}`},body:r})).text()}};function si(e,t){let r=["https://www.googleapis.com/auth/drive.appdata"];return`https://accounts.google.com/o/oauth2/v2/auth?client_id=${ir}&response_type=token&redirect_uri=${encodeURIComponent(t)}&scope=${encodeURIComponent(r.join(" "))}&state=${encodeURIComponent(JSON.stringify(e))}`}function li(e){let t=e.match(/[#?](.*)/);return!t||t.length<1?null:{access_token:new URLSearchParams(t[1].split("#")[0]).get("access_token")}}async function ci(e,t,r,n,a,i,o){if(O.debug(`autoSyncStrategy accessToken: ${e}`),t===null){O.debug("autoSyncStrategy settings is null");return}let l=new pr(e);try{let s=(await l.findByName(or)).files;O.debug("files",s);let c=s[0]?.id,u=null;if(c&&(u=await l.getConfig(c).then(m=>({fileId:c,config:m}))),u){let{config:m,fileId:p}=u,T=m.updatedAt?new Date(m.updatedAt):new Date(0),k=t.updatedAt?new Date(t.updatedAt):new Date(0);if(O.debug("remoteUpdatedAt",T,"localUpdatedAt",k),T>k)O.debug("remote is newer, update local config",m),r(m),i&&i(!0);else if(T.getTime()===k.getTime())O.debug("remote and local are the same, do nothing"),i&&i(!1);else if(T<k)O.debug("local is newer, update remote config",t),await l.updateConfig(p,t),i&&i(!0);else{o&&o(": unknown error");return}n(new Date().toISOString())}else if(u===null)if(t){if(!t.updatedAt){let m=new Date().toISOString();a(m),t.updatedAt=m}await l.uploadConfig(t),n(new Date().toISOString()),i&&i(!0)}else o&&o(": Local Config is empty");else o&&o(": latestConfig is "+u)}catch(s){O.error("syncLatestWithDrive error",s),o&&o(": "+s.message)}}var $l="https://oauth2.googleapis.com/revoke",hr=class e{CLASSNAME="GoogleAuth";_state;_redirectUrl;constructor(t,r){this._state=t,this._redirectUrl=r}static revoke(t){let r=`${$l}?token=${t}`;return fetch(r,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(async n=>(await e.removeAuthInfo(),Qr()&&globalThis.location.reload(),n))}static async getAuthInfo(){let t=await f.storage.local.get(kt);if(t[kt])return t[kt]}static async removeAuthInfo(){return await f.storage.local.remove(kt)}static setAuthInfo(t){return f.storage.local.set({[kt]:t})}async auth(t=!1){let r=await e.getAuthInfo();if(O.debug(this.CLASSNAME,"token from cache:",r),r&&r.access_token&&await ui(r.access_token).then(i=>!0).catch(i=>!1))return Promise.resolve(r);let n=si(this._state,this._redirectUrl);return O.debug(this.CLASSNAME,"auth url: "+n),Qr()?this.userscriptAuthWorkflow(n,t):this.extensionAuthWorkflow(n).then(a=>(e.setAuthInfo(a),a))}async userscriptAuthWorkflow(t,r){return r&&await f.storage.local.set({[Pa]:!0}),globalThis.open(t,"_self"),Promise.resolve({})}extensionAuthWorkflow(t){let r,n=!1;return new Promise((a,i)=>{let o=()=>{f.tabs.onUpdated.removeListener(l),f.tabs.onRemoved.removeListener(s)},l=(p,T,k)=>{if(O.debug(this.CLASSNAME,"create tab onUpdated: "+k.url),r===p){let Q=new URL(k.url||""),B=li(k.url);Q.pathname.startsWith("/auth-done")&&B?.access_token&&(O.debug(this.CLASSNAME,"auth done: "+k.url),a({access_token:B.access_token}),n=!0,f.tabs.remove(p),o())}},s=(p,T)=>{O.debug(this.CLASSNAME,"create tab onRemoved: "+p),(p===r||!n)&&(o(),i(new Error("auth failed")))},c=Math.min(500,screen.availWidth),u=Math.min(650,screen.availHeight),m;f.windows===void 0?m=f.tabs.create({url:t}).then(p=>{r=p.id}):m=f.windows.create({url:t,type:"popup",width:c,height:u,left:Math.round((screen.width-c)/2),top:Math.round((screen.height-u)/2)}).then(p=>{r=p.tabs[0].id}),m.then(()=>{f.tabs.onUpdated.addListener(l),f.tabs.onRemoved.addListener(s)}).catch(p=>{O.debug(this.CLASSNAME,"create tab failed: "+p),i(p)})})}};var Yl="https://www.googleapis.com/oauth2/v3/tokeninfo",Ql=ir,Xl=be().REDIRECT_URL;function ui(e){if(!e)throw"Authorization failure";let t=`${Yl}?access_token=${e}`,r=new Request(t,{method:"GET"});function n(a){return new Promise((i,o)=>{a.status!=200&&o("Token validation error"),a.json().then(l=>{l.aud&&l.aud===Ql?i(e):o("Token validation error")})})}return fetch(r).then(n)}function di(e,t=!1){let r=Xl;if(typeof window<"u"&&window.location.protocol.startsWith("http")){let a=window.location.hostname,i=window.location.port;r=`${window.location.protocol}//${a}${i?`:${i}`:""}/auth-done/`}return new hr(e,r).auth(t)}async function mi(){}function gi(e,t){let r=new Map;for(let i of t)r.set(i.header.toLowerCase(),i);let n=[],a=e.filter(i=>{let o=r.get(i.name.toLowerCase());if(o){if(o.operation==="remove")return!1;if(o.operation==="set")return!1}return!0});for(let i of t)i.operation==="set"&&n.push({name:i.header,value:i.value||""});return a.concat(n)}var fr=[{id:1,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"Referer",operation:"set",value:"https://httpstat.us/429"},{header:"origin",operation:"set",value:"https://httpstat.us/429"},{header:"DNT",operation:"set",value:"1"}]},condition:{urlFilter:"https://httpstat.us/429",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}},{id:2,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"Referer",operation:"set",value:"https://www.deepl.com/"},{header:"origin",operation:"set",value:"https://www.deepl.com"},{header:"DNT",operation:"set",value:"1"},{header:"cookie",operation:"remove"}]},condition:{urlFilter:"https://www2.deepl.com/jsonrpc*",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}},{id:200,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"Referer",operation:"set",value:"https://www.deepl.com/"},{header:"origin",operation:"set",value:"chrome-extension://cofdbpoegempjloogbagkncekinflcnj"},{header:"DNT",operation:"set",value:"1"}]},condition:{urlFilter:"https://api.deepl.com/jsonrpc*",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}},{id:201,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"Referer",operation:"set",value:"https://www.deepl.com/"},{header:"origin",operation:"set",value:"chrome-extension://cofdbpoegempjloogbagkncekinflcnj"}]},condition:{urlFilter:"https://w.deepl.com/oidc/token",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}},{id:3,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"origin",operation:"set",value:"chrome-extension://lkjkfecdnfjopaeaibboihfkmhdjmanm"}]},condition:{urlFilter:"https://transmart.qq.com/api/imt",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}},{id:4,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"origin",operation:"set",value:"chrome-extension://lkjkfecdnfjopaeaibboihfkmhdjmanm"}]},condition:{urlFilter:"https://translate.volcengine.com/crx/translate/v1/",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}}];function lt(e,t){var r=(e&65535)+(t&65535),n=(e>>16)+(t>>16)+(r>>16);return n<<16|r&65535}function Zl(e,t){return e<<t|e>>>32-t}function yr(e,t,r,n,a,i){return lt(Zl(lt(lt(t,e),lt(n,i)),a),r)}function Re(e,t,r,n,a,i,o){return yr(t&r|~t&n,e,t,a,i,o)}function Me(e,t,r,n,a,i,o){return yr(t&n|r&~n,e,t,a,i,o)}function Ie(e,t,r,n,a,i,o){return yr(t^r^n,e,t,a,i,o)}function Ne(e,t,r,n,a,i,o){return yr(r^(t|~n),e,t,a,i,o)}function br(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;var r,n,a,i,o,l=1732584193,s=-271733879,c=-1732584194,u=271733878;for(r=0;r<e.length;r+=16)n=l,a=s,i=c,o=u,l=Re(l,s,c,u,e[r],7,-680876936),u=Re(u,l,s,c,e[r+1],12,-389564586),c=Re(c,u,l,s,e[r+2],17,606105819),s=Re(s,c,u,l,e[r+3],22,-1044525330),l=Re(l,s,c,u,e[r+4],7,-176418897),u=Re(u,l,s,c,e[r+5],12,1200080426),c=Re(c,u,l,s,e[r+6],17,-1473231341),s=Re(s,c,u,l,e[r+7],22,-45705983),l=Re(l,s,c,u,e[r+8],7,1770035416),u=Re(u,l,s,c,e[r+9],12,-1958414417),c=Re(c,u,l,s,e[r+10],17,-42063),s=Re(s,c,u,l,e[r+11],22,-1990404162),l=Re(l,s,c,u,e[r+12],7,1804603682),u=Re(u,l,s,c,e[r+13],12,-40341101),c=Re(c,u,l,s,e[r+14],17,-1502002290),s=Re(s,c,u,l,e[r+15],22,1236535329),l=Me(l,s,c,u,e[r+1],5,-165796510),u=Me(u,l,s,c,e[r+6],9,-1069501632),c=Me(c,u,l,s,e[r+11],14,643717713),s=Me(s,c,u,l,e[r],20,-373897302),l=Me(l,s,c,u,e[r+5],5,-701558691),u=Me(u,l,s,c,e[r+10],9,38016083),c=Me(c,u,l,s,e[r+15],14,-660478335),s=Me(s,c,u,l,e[r+4],20,-405537848),l=Me(l,s,c,u,e[r+9],5,568446438),u=Me(u,l,s,c,e[r+14],9,-1019803690),c=Me(c,u,l,s,e[r+3],14,-187363961),s=Me(s,c,u,l,e[r+8],20,1163531501),l=Me(l,s,c,u,e[r+13],5,-1444681467),u=Me(u,l,s,c,e[r+2],9,-51403784),c=Me(c,u,l,s,e[r+7],14,1735328473),s=Me(s,c,u,l,e[r+12],20,-1926607734),l=Ie(l,s,c,u,e[r+5],4,-378558),u=Ie(u,l,s,c,e[r+8],11,-2022574463),c=Ie(c,u,l,s,e[r+11],16,1839030562),s=Ie(s,c,u,l,e[r+14],23,-35309556),l=Ie(l,s,c,u,e[r+1],4,-1530992060),u=Ie(u,l,s,c,e[r+4],11,1272893353),c=Ie(c,u,l,s,e[r+7],16,-155497632),s=Ie(s,c,u,l,e[r+10],23,-1094730640),l=Ie(l,s,c,u,e[r+13],4,681279174),u=Ie(u,l,s,c,e[r],11,-358537222),c=Ie(c,u,l,s,e[r+3],16,-722521979),s=Ie(s,c,u,l,e[r+6],23,76029189),l=Ie(l,s,c,u,e[r+9],4,-640364487),u=Ie(u,l,s,c,e[r+12],11,-421815835),c=Ie(c,u,l,s,e[r+15],16,530742520),s=Ie(s,c,u,l,e[r+2],23,-995338651),l=Ne(l,s,c,u,e[r],6,-198630844),u=Ne(u,l,s,c,e[r+7],10,1126891415),c=Ne(c,u,l,s,e[r+14],15,-1416354905),s=Ne(s,c,u,l,e[r+5],21,-57434055),l=Ne(l,s,c,u,e[r+12],6,1700485571),u=Ne(u,l,s,c,e[r+3],10,-1894986606),c=Ne(c,u,l,s,e[r+10],15,-1051523),s=Ne(s,c,u,l,e[r+1],21,-2054922799),l=Ne(l,s,c,u,e[r+8],6,1873313359),u=Ne(u,l,s,c,e[r+15],10,-30611744),c=Ne(c,u,l,s,e[r+6],15,-1560198380),s=Ne(s,c,u,l,e[r+13],21,1309151649),l=Ne(l,s,c,u,e[r+4],6,-145523070),u=Ne(u,l,s,c,e[r+11],10,-1120210379),c=Ne(c,u,l,s,e[r+2],15,718787259),s=Ne(s,c,u,l,e[r+9],21,-343485551),l=lt(l,n),s=lt(s,a),c=lt(c,i),u=lt(u,o);return[l,s,c,u]}function pi(e){var t,r="",n=e.length*32;for(t=0;t<n;t+=8)r+=String.fromCharCode(e[t>>5]>>>t%32&255);return r}function un(e){var t,r=[];for(r[(e.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var n=e.length*8;for(t=0;t<n;t+=8)r[t>>5]|=(e.charCodeAt(t/8)&255)<<t%32;return r}function ec(e){return pi(br(un(e),e.length*8))}function tc(e,t){var r,n=un(e),a=[],i=[],o;for(a[15]=i[15]=void 0,n.length>16&&(n=br(n,e.length*8)),r=0;r<16;r+=1)a[r]=n[r]^909522486,i[r]=n[r]^1549556828;return o=br(a.concat(un(t)),512+t.length*8),pi(br(i.concat(o),512+128))}function hi(e){var t="0123456789abcdef",r="",n,a;for(a=0;a<e.length;a+=1)n=e.charCodeAt(a),r+=t.charAt(n>>>4&15)+t.charAt(n&15);return r}function dn(e){return unescape(encodeURIComponent(e))}function fi(e){return ec(dn(e))}function rc(e){return hi(fi(e))}function bi(e,t){return tc(dn(e),dn(t))}function nc(e,t){return hi(bi(e,t))}function yi(e,t,r){return t?r?bi(t,e):nc(t,e):r?fi(e):rc(e)}function mn(e){if(Math.abs(e)<1024)return e+" Byte";let r=["KB","MB","GB","TB","PB","EB","ZB","YB"],n=-1;do e/=1024,++n;while(Math.abs(e)>=1024&&n<r.length-1);return e.toFixed(1)+" "+r[n]}var Lt=[];async function zt(e,t){return await new Promise((r,n)=>{let a=e,i=1,o=indexedDB.open(a,i);o.onsuccess=l=>{r(o.result)},o.onerror=l=>{n()},o.onupgradeneeded=l=>{let s=o.result,c=t||"cache";s.createObjectStore(c,{keyPath:"key"})}})}async function Ti(e){let t=`${Ae}-${e.service}@${e.from}->${e.to}`;return await ic(t,e)}async function wi(e){let t=yi(e.originalText),r=`${Ae}-${e.service}@${e.from}->${e.to}`;return await ac(r,t)}async function ac(e,t){let r=await zt(e);return await new Promise((n,a)=>{if(!r)return a();let i="cache",l=r.transaction([i],"readonly").objectStore(i).get(t);l.onsuccess=s=>{r.close();let c=l.result;n(c)},l.onerror=s=>{r.close(),a()}})}async function ic(e,t){let r=await zt(e);return(await xi()).includes(e)||await oc(e),await new Promise(a=>{if(!r)return a(!1);let i="cache",l=r.transaction([i],"readwrite").objectStore(i).put(t);l.onsuccess=s=>{r.close(),a(!0)},l.onerror=s=>{r.close(),a(!1)}})}async function oc(e){let t="cache_list",r=await zt(Ae+"-cacheList",t),a=r.transaction([t],"readwrite").objectStore(t).put({key:e});a.onsuccess=i=>{r.close(),Lt.push(e)},a.onerror=i=>{r.close()}}async function xi(){if(Lt&&Lt.length>0)return Lt;let e=await zt(Ae+"-cacheList","cache_list");return Lt=await new Promise(t=>{let r="cache_list",a=e.transaction([r],"readonly").objectStore(r).getAllKeys();a.onsuccess=i=>{e.close(),t(a.result)},a.onerror=i=>{e.close(),t([])}}),Lt}async function vi(){try{let e=[];(await xi()).forEach(n=>{e.push(sc(n))});let r=await Promise.all(e);return mn(r.reduce((n,a)=>n+a,0))}catch{return mn(0)}}async function sc(e){let t=await zt(e),n=[...t.objectStoreNames].reduce((o,l)=>{let s=lc(t,l);return o.push(s),o},[]),a=await Promise.all(n);return t.close(),a.reduce((o,l)=>o+l,0)}async function lc(e,t){return await new Promise((r,n)=>{if(e==null)return n();let a=0,i=e.transaction([t]).objectStore(t).openCursor();i.onsuccess=o=>{let l=i.result;if(l){let s=l.value,c=JSON.stringify(s);a+=c.length,l.continue()}else r(a)},i.onerror=o=>n("error in "+t+": "+o)})}var Tr,cc=async function(e,t){let{method:r,data:n}=e;if(O.debug("background received message",r,n||" "),r==="mock")await _r(150);else{if(r==="queryParagraphCache")return wi(n);if(r==="setParagraphCache")return Ti(n);if(r==="calculateSize")return vi();if(r==="fetch")return mr(n);if(r==="getConfig")return st();if(r==="getLocalConfig")return Ht();if(r==="openOptionsPage"){let a="";if(n&&n.pageRoute&&(a=n.pageRoute),Qe()){let o=be().OPTIONS_URL+a;f.tabs.create({url:o})}else{let i=f.runtime.getURL("options.html");f.tabs.create({url:i+a})}}else if(r==="openAboutPage")if(Qe()){let i=be().OPTIONS_URL;f.tabs.create({url:i+"#about"})}else f.tabs.create({url:f.runtime.getURL("options.html#about")});else if(r==="openInTab")n&&f.tabs.create({url:n});else if(r=="openSearchEnhancement")if(Qe()){let i=be().OPTIONS_URL;f.tabs.create({url:i+"#advanced"})}else f.tabs.create({url:f.runtime.getURL("options.html#advanced")});else if(r==="openEbookViewerPage"){let i=be().EBOOK_VIEWER_URL;f.tabs.create({url:i})}else if(r==="openSubtitleBuilderPage"){let i=be().SUBTITLE_BUILDER_URL;f.tabs.create({url:i})}else if(r==="openEbookBuilderPage"){let i=be().EBOOK_BUILDER_URL;f.tabs.create({url:i})}else if(r==="openHtmlViewerPage"){let i=be().HTML_VIEWER_URL;f.tabs.create({url:i})}else if(r==="openPdfViewerPage"){let a=f.runtime.getURL("pdf/index.html");Qe()&&(a=be().PDF_VIEWER_URL),f.tabs.create({url:a})}else{if(r==="setLocalConfig")return Pt(n);if(r=="getUserConfig")return Gt();if(r=="setUserConfig")return Tt(n);if(r==="detectLanguage"){let{text:a,pageLangs:i}=n;if(f.i18n&&f.i18n.detectLanguage)try{let o=await Si(f.i18n.detectLanguage(a),1500,{isReliable:!1,languages:[]});if(o.languages.length>0){if(o.isReliable)return pt(o.languages[0].language);for(let l of o.languages){let s=pt(l.language);if(i.includes(s)&&l.percentage>50)return s}}return"auto"}catch(o){return O.debug("detect language error",o),"auto"}else return"auto"}else if(r==="detectTabLanguage")try{let a=await Si(f.tabs.detectLanguage(t.id),1500,"auto");return pt(a)}catch(a){return O.debug("detect tab language error, use auto ",a),"auto"}else if(r==="autoSyncLatestConfig"){try{await mi()}catch(a){O.debug("auto sync latest config error",a)}return""}else if(r!=="updateCommands"){if(r==="setBadge"){let a=t.id,i=n&&n.text?n.text:"";a&&uc(a,i)}}}}};function Ai(){gn();let e=f.runtime.getManifest();if(e.manifest_version>2,e.manifest_version===2&&f.webRequest&&f.webRequest.onBeforeSendHeaders){let t=fr.map(n=>n.condition.urlFilter),r=fr.reduce((n,a)=>(a.condition.resourceTypes.forEach(i=>{n.includes(i)||n.push(i)}),n),[]);f.webRequest.onBeforeSendHeaders.addListener(function(n){if(!(n.originUrl&&n.originUrl.startsWith("http"))&&n.originUrl&&n.requestHeaders)for(let a=0;a<t.length;a++){let i=fr[a];if(i.condition.urlFilter&&oi(n.url,i.condition.urlFilter))return{requestHeaders:gi(n.requestHeaders,i.action.requestHeaders)}}},{urls:t,types:r},["blocking","requestHeaders"])}}function gn(){return Tr||(Tr=new bt("background",!1).getConnection("main",cc),Tr)}function wr(e,t){return t==="dark"?{32:`${e}/dark-32.png`,48:`${e}/dark-48.png`,64:`${e}/dark-64.png`,128:`${e}/dark-128.png`,256:`${e}/dark-256.png`}:{32:`${e}/32.png`,48:`${e}/48.png`,64:`${e}/64.png`,128:`${e}/128.png`,256:`${e}/256.png`}}async function uc(e,t){if(Qe())return;let r=await dc();r!==null&&(t?f.browserAction&&f.browserAction.setIcon?f.browserAction.setIcon({tabId:e,path:wr("badge-icons",r)}):f.action&&f.action.setIcon&&f.action.setIcon({tabId:e,path:wr("badge-icons",r)}):f.browserAction&&f.browserAction.setIcon?f.browserAction.setIcon({tabId:e,path:wr("icons",r)}):f.action&&f.action.setIcon&&f.action.setIcon({tabId:e,path:wr("icons",r)}))}async function dc(){if(f.theme&&f.theme.getCurrent){let e=await f.theme.getCurrent();if(e.properties&&e.properties.color_scheme)return e.properties.color_scheme;if(e.properties&&e.properties.color_scheme===null)return null}return"light"}function Si(e,t,r){return new Promise((n,a)=>{let i=setTimeout(()=>{n(r)},t);e.then(o=>{clearTimeout(i),n(o)}).catch(o=>{clearTimeout(i),a(o)})})}function ki(){typeof f.commands<"u"&&f.commands.onCommand.addListener(async e=>{if(O.debug(`received command: ${e}`),["toggleTranslatePage"].includes(e)){let t=await f.tabs.query({active:!0,currentWindow:!0});if(t.length===0||typeof t[0].id>"u")return;let n=t[0].url;if(ri(n)){f.tabs.create({url:ei(n)});return}}await pn({method:e,data:{trigger:"shortcut"}})})}async function pn(e){let r=(await f.tabs.query({currentWindow:!0,active:!0}))[0].id;gn().sendMessage(`content_script:main:${r}`,e).catch(a=>{O.error("send content message request failed",e,a)})}function mc(e,t){let r=e;return t&&Object.keys(t).forEach(n=>{let a=t[n];if(a===void 0)return;let i=gc(n);if(typeof a=="object"||i){let o=a;i&&typeof o=="string"&&(o={tag:"a",href:o});let l=`<${n}>`,s=r.indexOf(l);if(s!==-1){let c=o.tag||"a",u=r.indexOf(`</${n}>`);if(u!==-1){let m=r.substring(s+l.length,u),p=Object.keys(o).filter(T=>T!=="tag").map(T=>`${T}="${o[T]}"`).join(" ");r=r.replace(`${l}${m}</${n}>`,`<${c} ${p}>${m}</${c}>`)}}}else if(a){let o=new RegExp("{"+n+"}","gm");r=r.replace(o,a.toString())}}),r}function _i(e,t,r){let n=e[t];if(!n)return r;let a=r.split("."),i="";do{i+=a.shift();let o=n[i];o!==void 0&&(typeof o=="object"||!a.length)?(n=o,i=""):a.length?i+=".":n=r}while(a.length);return n}function Ci(e,t,r,n,a){if(!e.hasOwnProperty(r))return t;let i=_i(e,r,t);return i===t&&r!==n&&(i=_i(e,n,t)),mc(i,a)}function gc(e){if(typeof e=="number")return!0;if(e){let t=parseInt(e);return!isNaN(t)}else return!1}var Ei={"zh-CN":{"languages.en":"\u82F1\u8BED","languages.ja":"\u65E5\u8BED","languages.ko":"\u97E9\u8BED","languages.es":"\u897F\u73ED\u7259\u8BED","languages.fr":"\u6CD5\u8BED","languages.de":"\u5FB7\u8BED","languages.it":"\u610F\u5927\u5229\u8BED","languages.pt":"\u8461\u8404\u7259\u8BED","languages.ru":"\u4FC4\u8BED","languages.wyw":"\u6587\u8A00\u6587","languages.<all>":"\u5168\u90E8"},"zh-TW":{"languages.en":"\u82F1\u8A9E","languages.ja":"\u65E5\u8A9E","languages.ko":"\u97D3\u8A9E","languages.es":"\u897F\u73ED\u7259\u8A9E","languages.fr":"\u6CD5\u8A9E","languages.de":"\u5FB7\u8A9E","languages.it":"\u610F\u5927\u5229\u8A9E","languages.pt":"\u8461\u8404\u7259\u8A9E","languages.ru":"\u4FC4\u8A9E","languages.wyw":"\u6587\u8A00\u6587","languages.<all>":"\u5168\u90E8"}},pc={...mt,"zh-CN":{...Ei["zh-CN"],...mt["zh-CN"]},"zh-TW":{...Ei["zh-TW"],...mt["zh-TW"]}};function Pi(e,t,r){return Ci(pc,e,t,lr,r)}var Vt=Da()?["action"]:["browser_action","page_action"],Li=[{id:"toggleTranslatePage",contexts:["page","frame","selection",...Vt]},{id:Xr,contexts:Vt},{id:Zr,contexts:Vt},{id:en,contexts:Vt},{id:Jr,contexts:Vt}];async function hn(e){O.debug("createContextMenu",Li);for(let t of Li){let r=!0;e.isShowContextMenu===!1&&t.id==="toggleTranslatePage"&&(r=!1);try{f.contextMenus.create({id:t.id,title:Pi(`browser.${t.id}`,e.interfaceLanguage),contexts:t.contexts,visible:r},()=>f.runtime.lastError)}catch(n){O.debug("create context menu error, it's ok!!",n,`menu id: ${t.id}`)}}}function Ri(){f.contextMenus.onClicked.addListener(e=>{if(e.menuItemId===Xr)if(Qe()){let r=be().OPTIONS_URL;f.tabs.create({url:r})}else f.runtime.openOptionsPage();else if(e.menuItemId===Jr){let t=ti();f.tabs.create({url:t})}else if(e.menuItemId===en){let r=be().EBOOK_BUILDER_URL;f.tabs.create({url:r})}else if(e.menuItemId===Zr){let r=be().EBOOK_VIEWER_URL;f.tabs.create({url:r})}else if(e.menuItemId===Ma){let r=be().SUBTITLE_BUILDER_URL;f.tabs.create({url:r})}else e.menuItemId===Ra?f.tabs.create({url:"https://immersivetranslate.com/docs/donate/"}):pn({method:e.menuItemId,data:{trigger:"right_menu"}})})}function fn(){st().then(e=>{e.uninstallUrl&&f.runtime.setUninstallURL&&f.runtime.setUninstallURL(e.uninstallUrl),bn(e)}).catch(e=>{O.error("create menu error",e)})}function bn(e){e?hn(e):st().then(t=>{hn(t)}).catch(t=>{O.error("create menu error",t)})}function Mi(){f.runtime.onInstalled.addListener(e=>{O.debug(`onInstalled reason: ${e.reason}`),O.debug(e),e.reason=="install"?(async()=>{let t="https://onboarding.immersivetranslate.com/",n=f.runtime.getURL("").startsWith("safari"),a=!1,i=!1;try{let o=await f.runtime.getPlatformInfo();n?o.os==="mac"?a=!0:o.os==="ios"&&(i=!0):o.os==="android"&&(t="https://onboarding.immersivetranslate.com/mobile/")}catch{}a?t="https://onboarding.immersivetranslate.com/mac-safari/":i&&(t="https://onboarding.immersivetranslate.com/ios/step-2/"),f.tabs.create({url:t}),fn()})():(e.reason=="update"&&f.runtime.getManifest().version!=e.previousVersion,fn())})}Ai();Mi();ki();f.contextMenus&&Ri();async function hc(){f.contextMenus&&bn(),(await st()).debug&&O.setLevel("debug")}hc().catch(e=>{});})();
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
