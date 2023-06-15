(()=>{var qm=Object.defineProperty;var Km=(e,t)=>{for(var n in t)qm(e,n,{get:t[n],enumerable:!0})};var z0=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var jo=(e,t,n)=>(z0(e,t,"read from private field"),n?n.call(e):t.get(e)),U0=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},H0=(e,t,n,u)=>(z0(e,t,"write to private field"),u?u.call(e,n):t.set(e,n),n);var b={BUILD_TIME:"2023-06-15T12:59:18.831Z",VERSION:"0.6.13",PROD:"1",REDIRECT_URL:"https://dash.immersivetranslate.com/auth-done/",IMMERSIVE_TRANSLATE_INJECTED_CSS:`:root {
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
  display: block;
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
  -webkit-logical-height: 1em;
  /* Chrome ignores auto, so we have to use this hack to set the correct height  */
  -webkit-logical-width: auto;
  /* Chrome ignores auto, but here for completeness */
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

.immersive-translate-tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dashed #000;
  /* little indicater to indicate it's hoverable */
}

.immersive-translate-tooltip:before {
  content: attr(data-immersive-translate-tooltip-text);
  /* here's the magic */
  position: absolute;
  z-index: 100000000000;

  /* vertically center */
  top: 50%;
  transform: translateY(-50%);

  /* move to right */
  left: 100%;
  margin-left: 15px;
  /* and add a small left margin */

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
`,MOCK:"0",DEBUG:"0",INSTALL_FROM:"chrome_zip"};var Gm=Object.create,Uo=Object.defineProperty,Vm=Object.getOwnPropertyDescriptor,q0=Object.getOwnPropertyNames,Jm=Object.getPrototypeOf,Ym=Object.prototype.hasOwnProperty,Xm=(e,t)=>function(){return t||(0,e[q0(e)[0]])((t={exports:{}}).exports,t),t.exports},Qm=(e,t)=>{for(var n in t)Uo(e,n,{get:t[n],enumerable:!0})},zo=(e,t,n,u)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of q0(t))!Ym.call(e,a)&&a!==n&&Uo(e,a,{get:()=>t[a],enumerable:!(u=Vm(t,a))||u.enumerable});return e},Zm=(e,t,n)=>(zo(e,t,"default"),n&&zo(n,t,"default")),K0=(e,t,n)=>(n=e!=null?Gm(Jm(e)):{},zo(t||!e||!e.__esModule?Uo(n,"default",{value:e,enumerable:!0}):n,e)),$0=Xm({"../esmd/npm/webextension-polyfill@0.10.0/node_modules/webextension-polyfill/dist/browser-polyfill.js"(e,t){(function(n,u){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],u);else if(typeof e<"u")u(t);else{var a={exports:{}};u(a),n.browser=a.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:e,function(n){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let u="The message port closed before a response was received.",a=r=>{let o={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(o).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class i extends WeakMap{constructor(k,T=void 0){super(T),this.createItem=k}get(k){return this.has(k)||this.set(k,this.createItem(k)),super.get(k)}}let s=E=>E&&typeof E=="object"&&typeof E.then=="function",l=(E,k)=>(...T)=>{r.runtime.lastError?E.reject(new Error(r.runtime.lastError.message)):k.singleCallbackArg||T.length<=1&&k.singleCallbackArg!==!1?E.resolve(T[0]):E.resolve(T)},c=E=>E==1?"argument":"arguments",d=(E,k)=>function(D,...L){if(L.length<k.minArgs)throw new Error(`Expected at least ${k.minArgs} ${c(k.minArgs)} for ${E}(), got ${L.length}`);if(L.length>k.maxArgs)throw new Error(`Expected at most ${k.maxArgs} ${c(k.maxArgs)} for ${E}(), got ${L.length}`);return new Promise((U,v)=>{if(k.fallbackToNoCallback)try{D[E](...L,l({resolve:U,reject:v},k))}catch{D[E](...L),k.fallbackToNoCallback=!1,k.noCallback=!0,U()}else k.noCallback?(D[E](...L),U()):D[E](...L,l({resolve:U,reject:v},k))})},g=(E,k,T)=>new Proxy(k,{apply(D,L,U){return T.call(L,E,...U)}}),m=Function.call.bind(Object.prototype.hasOwnProperty),f=(E,k={},T={})=>{let D=Object.create(null),L={has(v,B){return B in E||B in D},get(v,B,X){if(B in D)return D[B];if(!(B in E))return;let O=E[B];if(typeof O=="function")if(typeof k[B]=="function")O=g(E,E[B],k[B]);else if(m(T,B)){let Z=d(B,T[B]);O=g(E,E[B],Z)}else O=O.bind(E);else if(typeof O=="object"&&O!==null&&(m(k,B)||m(T,B)))O=f(O,k[B],T[B]);else if(m(T,"*"))O=f(O,k[B],T["*"]);else return Object.defineProperty(D,B,{configurable:!0,enumerable:!0,get(){return E[B]},set(Z){E[B]=Z}}),O;return D[B]=O,O},set(v,B,X,O){return B in D?D[B]=X:E[B]=X,!0},defineProperty(v,B,X){return Reflect.defineProperty(D,B,X)},deleteProperty(v,B){return Reflect.deleteProperty(D,B)}},U=Object.create(E);return new Proxy(U,L)},w=E=>({addListener(k,T,...D){k.addListener(E.get(T),...D)},hasListener(k,T){return k.hasListener(E.get(T))},removeListener(k,T){k.removeListener(E.get(T))}}),y=new i(E=>typeof E!="function"?E:function(T){let D=f(T,{},{getContent:{minArgs:0,maxArgs:0}});E(D)}),p=new i(E=>typeof E!="function"?E:function(T,D,L){let U=!1,v,B=new Promise(ve=>{v=function(V){U=!0,ve(V)}}),X;try{X=E(T,D,v)}catch(ve){X=Promise.reject(ve)}let O=X!==!0&&s(X);if(X!==!0&&!O&&!U)return!1;let Z=ve=>{ve.then(V=>{L(V)},V=>{let J;V&&(V instanceof Error||typeof V.message=="string")?J=V.message:J="An unexpected error occurred",L({__mozWebExtensionPolyfillReject__:!0,message:J})}).catch(V=>{})};return Z(O?X:B),!0}),_=({reject:E,resolve:k},T)=>{r.runtime.lastError?r.runtime.lastError.message===u?k():E(new Error(r.runtime.lastError.message)):T&&T.__mozWebExtensionPolyfillReject__?E(new Error(T.message)):k(T)},M=(E,k,T,...D)=>{if(D.length<k.minArgs)throw new Error(`Expected at least ${k.minArgs} ${c(k.minArgs)} for ${E}(), got ${D.length}`);if(D.length>k.maxArgs)throw new Error(`Expected at most ${k.maxArgs} ${c(k.maxArgs)} for ${E}(), got ${D.length}`);return new Promise((L,U)=>{let v=_.bind(null,{resolve:L,reject:U});D.push(v),T.sendMessage(...D)})},A={devtools:{network:{onRequestFinished:w(y)}},runtime:{onMessage:w(p),onMessageExternal:w(p),sendMessage:M.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:M.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},S={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return o.privacy={network:{"*":S},services:{"*":S},websites:{"*":S}},f(r,A,o)};n.exports=a(chrome)}else n.exports=globalThis.browser})}}),G0={};Qm(G0,{default:()=>ka});var ep=K0($0());Zm(G0,K0($0()));var{default:W0,...tp}=ep,ka=W0!==void 0?W0:tp;globalThis.immersiveTranslateBrowserAPI=ka;var Ba,ge,Q0,np,Hu,V0,Z0,Pa={},el=[],up=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function mn(e,t){for(var n in t)e[n]=t[n];return e}function tl(e){var t=e.parentNode;t&&t.removeChild(e)}function nl(e,t,n){var u,a,r,o={};for(r in t)r=="key"?u=t[r]:r=="ref"?a=t[r]:o[r]=t[r];if(arguments.length>2&&(o.children=arguments.length>3?Ba.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)o[r]===void 0&&(o[r]=e.defaultProps[r]);return Da(e,o,u,a,null)}function Da(e,t,n,u,a){var r={type:e,props:t,key:n,ref:u,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a??++Q0};return a==null&&ge.vnode!=null&&ge.vnode(r),r}function Jt(e){return e.children}function Sa(e,t){this.props=e,this.context=t}function ou(e,t){if(t==null)return e.__?ou(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?ou(e):null}function ul(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ul(e)}}function Ho(e){(!e.__d&&(e.__d=!0)&&Hu.push(e)&&!Fa.__r++||V0!==ge.debounceRendering)&&((V0=ge.debounceRendering)||setTimeout)(Fa)}function Fa(){for(var e;Fa.__r=Hu.length;)e=Hu.sort(function(t,n){return t.__v.__b-n.__v.__b}),Hu=[],e.some(function(t){var n,u,a,r,o,i;t.__d&&(o=(r=(n=t).__v).__e,(i=n.__P)&&(u=[],(a=mn({},r)).__v=r.__v+1,Wo(i,r,a,n.__n,i.ownerSVGElement!==void 0,r.__h!=null?[o]:null,u,o??ou(r),r.__h),il(u,r),r.__e!=o&&ul(r)))})}function al(e,t,n,u,a,r,o,i,s,l){var c,d,g,m,f,w,y,p=u&&u.__k||el,_=p.length;for(n.__k=[],c=0;c<t.length;c++)if((m=n.__k[c]=(m=t[c])==null||typeof m=="boolean"?null:typeof m=="string"||typeof m=="number"||typeof m=="bigint"?Da(null,m,null,null,m):Array.isArray(m)?Da(Jt,{children:m},null,null,null):m.__b>0?Da(m.type,m.props,m.key,m.ref?m.ref:null,m.__v):m)!=null){if(m.__=n,m.__b=n.__b+1,(g=p[c])===null||g&&m.key==g.key&&m.type===g.type)p[c]=void 0;else for(d=0;d<_;d++){if((g=p[d])&&m.key==g.key&&m.type===g.type){p[d]=void 0;break}g=null}Wo(e,m,g=g||Pa,a,r,o,i,s,l),f=m.__e,(d=m.ref)&&g.ref!=d&&(y||(y=[]),g.ref&&y.push(g.ref,null,m),y.push(d,m.__c||f,m)),f!=null?(w==null&&(w=f),typeof m.type=="function"&&m.__k===g.__k?m.__d=s=rl(m,s,e):s=ol(e,m,g,p,f,s),typeof n.type=="function"&&(n.__d=s)):s&&g.__e==s&&s.parentNode!=e&&(s=ou(g))}for(n.__e=w,c=_;c--;)p[c]!=null&&(typeof n.type=="function"&&p[c].__e!=null&&p[c].__e==n.__d&&(n.__d=ou(u,c+1)),ll(p[c],p[c]));if(y)for(c=0;c<y.length;c++)sl(y[c],y[++c],y[++c])}function rl(e,t,n){for(var u,a=e.__k,r=0;a&&r<a.length;r++)(u=a[r])&&(u.__=e,t=typeof u.type=="function"?rl(u,t,n):ol(n,u,u,a,u.__e,t));return t}function ol(e,t,n,u,a,r){var o,i,s;if(t.__d!==void 0)o=t.__d,t.__d=void 0;else if(n==null||a!=r||a.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(a),o=null;else{for(i=r,s=0;(i=i.nextSibling)&&s<u.length;s+=2)if(i==a)break e;e.insertBefore(a,r),o=r}return o!==void 0?o:a.nextSibling}function ap(e,t,n,u,a){var r;for(r in n)r==="children"||r==="key"||r in t||La(e,r,null,n[r],u);for(r in t)a&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===t[r]||La(e,r,t[r],n[r],u)}function J0(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||up.test(t)?n:n+"px"}function La(e,t,n,u,a){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof u=="string"&&(e.style.cssText=u=""),u)for(t in u)n&&t in n||J0(e.style,t,"");if(n)for(t in n)u&&n[t]===u[t]||J0(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?u||e.addEventListener(t,r?X0:Y0,r):e.removeEventListener(t,r?X0:Y0,r);else if(t!=="dangerouslySetInnerHTML"){if(a)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Y0(e){this.l[e.type+!1](ge.event?ge.event(e):e)}function X0(e){this.l[e.type+!0](ge.event?ge.event(e):e)}function Wo(e,t,n,u,a,r,o,i,s){var l,c,d,g,m,f,w,y,p,_,M,A,S,E=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(s=n.__h,i=t.__e=n.__e,t.__h=null,r=[i]),(l=ge.__b)&&l(t);try{e:if(typeof E=="function"){if(y=t.props,p=(l=E.contextType)&&u[l.__c],_=l?p?p.props.value:l.__:u,n.__c?w=(c=t.__c=n.__c).__=c.__E:("prototype"in E&&E.prototype.render?t.__c=c=new E(y,_):(t.__c=c=new Sa(y,_),c.constructor=E,c.render=op),p&&p.sub(c),c.props=y,c.state||(c.state={}),c.context=_,c.__n=u,d=c.__d=!0,c.__h=[]),c.__s==null&&(c.__s=c.state),E.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=mn({},c.__s)),mn(c.__s,E.getDerivedStateFromProps(y,c.__s))),g=c.props,m=c.state,d)E.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(E.getDerivedStateFromProps==null&&y!==g&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(y,_),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(y,c.__s,_)===!1||t.__v===n.__v){c.props=y,c.state=c.__s,t.__v!==n.__v&&(c.__d=!1),c.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(k){k&&(k.__=t)}),c.__h.length&&o.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(y,c.__s,_),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(g,m,f)})}if(c.context=_,c.props=y,c.__v=t,c.__P=e,M=ge.__r,A=0,"prototype"in E&&E.prototype.render)c.state=c.__s,c.__d=!1,M&&M(t),l=c.render(c.props,c.state,c.context);else do c.__d=!1,M&&M(t),l=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++A<25);c.state=c.__s,c.getChildContext!=null&&(u=mn(mn({},u),c.getChildContext())),d||c.getSnapshotBeforeUpdate==null||(f=c.getSnapshotBeforeUpdate(g,m)),S=l!=null&&l.type===Jt&&l.key==null?l.props.children:l,al(e,Array.isArray(S)?S:[S],t,n,u,a,r,o,i,s),c.base=t.__e,t.__h=null,c.__h.length&&o.push(c),w&&(c.__E=c.__=null),c.__e=!1}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=rp(n.__e,t,n,u,a,r,o,s);(l=ge.diffed)&&l(t)}catch(k){t.__v=null,(s||r!=null)&&(t.__e=i,t.__h=!!s,r[r.indexOf(i)]=null),ge.__e(k,t,n)}}function il(e,t){ge.__c&&ge.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(u){u.call(n)})}catch(u){ge.__e(u,n.__v)}})}function rp(e,t,n,u,a,r,o,i){var s,l,c,d=n.props,g=t.props,m=t.type,f=0;if(m==="svg"&&(a=!0),r!=null){for(;f<r.length;f++)if((s=r[f])&&"setAttribute"in s==!!m&&(m?s.localName===m:s.nodeType===3)){e=s,r[f]=null;break}}if(e==null){if(m===null)return document.createTextNode(g);e=a?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,g.is&&g),r=null,i=!1}if(m===null)d===g||i&&e.data===g||(e.data=g);else{if(r=r&&Ba.call(e.childNodes),l=(d=n.props||Pa).dangerouslySetInnerHTML,c=g.dangerouslySetInnerHTML,!i){if(r!=null)for(d={},f=0;f<e.attributes.length;f++)d[e.attributes[f].name]=e.attributes[f].value;(c||l)&&(c&&(l&&c.__html==l.__html||c.__html===e.innerHTML)||(e.innerHTML=c&&c.__html||""))}if(ap(e,g,d,a,i),c)t.__k=[];else if(f=t.props.children,al(e,Array.isArray(f)?f:[f],t,n,u,a&&m!=="foreignObject",r,o,r?r[0]:n.__k&&ou(n,0),i),r!=null)for(f=r.length;f--;)r[f]!=null&&tl(r[f]);i||("value"in g&&(f=g.value)!==void 0&&(f!==e.value||m==="progress"&&!f||m==="option"&&f!==d.value)&&La(e,"value",f,d.value,!1),"checked"in g&&(f=g.checked)!==void 0&&f!==e.checked&&La(e,"checked",f,d.checked,!1))}return e}function sl(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(u){ge.__e(u,n)}}function ll(e,t,n){var u,a;if(ge.unmount&&ge.unmount(e),(u=e.ref)&&(u.current&&u.current!==e.__e||sl(u,null,t)),(u=e.__c)!=null){if(u.componentWillUnmount)try{u.componentWillUnmount()}catch(r){ge.__e(r,t)}u.base=u.__P=null,e.__c=void 0}if(u=e.__k)for(a=0;a<u.length;a++)u[a]&&ll(u[a],t,typeof e.type!="function");n||e.__e==null||tl(e.__e),e.__=e.__e=e.__d=void 0}function op(e,t,n){return this.constructor(e,n)}function iu(e,t,n){var u,a,r;ge.__&&ge.__(e,t),a=(u=typeof n=="function")?null:n&&n.__k||t.__k,r=[],Wo(t,e=(!u&&n||t).__k=nl(Jt,null,[e]),a||Pa,Pa,t.ownerSVGElement!==void 0,!u&&n?[n]:a?null:t.firstChild?Ba.call(t.childNodes):null,r,!u&&n?n:a?a.__e:t.firstChild,u),il(r,e)}function qo(e,t){var n={__c:t="__cC"+Z0++,__:e,Consumer:function(u,a){return u.children(a)},Provider:function(u){var a,r;return this.getChildContext||(a=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&a.some(Ho)},this.sub=function(o){a.push(o);var i=o.componentWillUnmount;o.componentWillUnmount=function(){a.splice(a.indexOf(o),1),i&&i.call(o)}}),u.children}};return n.Provider.__=n.Consumer.contextType=n}Ba=el.slice,ge={__e:function(e,t,n,u){for(var a,r,o;t=t.__;)if((a=t.__c)&&!a.__)try{if((r=a.constructor)&&r.getDerivedStateFromError!=null&&(a.setState(r.getDerivedStateFromError(e)),o=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,u||{}),o=a.__d),o)return a.__E=a}catch(i){e=i}throw e}},Q0=0,np=function(e){return e!=null&&e.constructor===void 0},Sa.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=mn({},this.state),typeof e=="function"&&(e=e(mn({},n),this.props)),e&&mn(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Ho(this))},Sa.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ho(this))},Sa.prototype.render=Jt,Hu=[],Fa.__r=0,Z0=0;var qu,Ue,Ko,cl,Wu=0,bl=[],_a=[],dl=ge.__b,gl=ge.__r,ml=ge.diffed,pl=ge.__c,fl=ge.unmount;function Ra(e,t){ge.__h&&ge.__h(Ue,e,Wu||t),Wu=0;var n=Ue.__H||(Ue.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:_a}),n.__[e]}function Ee(e){return Wu=1,ip(Tl,e)}function ip(e,t,n){var u=Ra(qu++,2);if(u.t=e,!u.__c&&(u.__=[n?n(t):Tl(void 0,t),function(r){var o=u.__N?u.__N[0]:u.__[0],i=u.t(o,r);o!==i&&(u.__N=[i,u.__[1]],u.__c.setState({}))}],u.__c=Ue,!Ue.u)){Ue.u=!0;var a=Ue.shouldComponentUpdate;Ue.shouldComponentUpdate=function(r,o,i){if(!u.__c.__H)return!0;var s=u.__c.__H.__.filter(function(c){return c.__c});if(s.every(function(c){return!c.__N}))return!a||a.call(this,r,o,i);var l=!1;return s.forEach(function(c){if(c.__N){var d=c.__[0];c.__=c.__N,c.__N=void 0,d!==c.__[0]&&(l=!0)}}),!!l&&(!a||a.call(this,r,o,i))}}return u.__N||u.__}function Ye(e,t){var n=Ra(qu++,3);!ge.__s&&yl(n.__H,t)&&(n.__=e,n.i=t,Ue.__H.__h.push(n))}function Go(e){return Wu=5,El(function(){return{current:e}},[])}function El(e,t){var n=Ra(qu++,7);return yl(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Nn(e,t){return Wu=8,El(function(){return e},t)}function Vo(e){var t=Ue.context[e.__c],n=Ra(qu++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(Ue)),t.props.value):e.__}function sp(){for(var e;e=bl.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Ma),e.__H.__h.forEach($o),e.__H.__h=[]}catch(t){e.__H.__h=[],ge.__e(t,e.__v)}}ge.__b=function(e){typeof e.type!="function"||e.o||e.type===Jt?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),Ue=null,dl&&dl(e)},ge.__r=function(e){gl&&gl(e),qu=0;var t=(Ue=e.__c).__H;t&&(Ko===Ue?(t.__h=[],Ue.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=_a,n.__N=n.i=void 0})):(t.__h.forEach(Ma),t.__h.forEach($o),t.__h=[])),Ko=Ue},ge.diffed=function(e){ml&&ml(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(bl.push(t)!==1&&cl===ge.requestAnimationFrame||((cl=ge.requestAnimationFrame)||lp)(sp)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==_a&&(n.__=n.__V),n.i=void 0,n.__V=_a})),Ko=Ue=null},ge.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Ma),n.__h=n.__h.filter(function(u){return!u.__||$o(u)})}catch(u){t.some(function(a){a.__h&&(a.__h=[])}),t=[],ge.__e(u,n.__v)}}),pl&&pl(e,t)},ge.unmount=function(e){fl&&fl(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(u){try{Ma(u)}catch(a){t=a}}),n.__H=void 0,t&&ge.__e(t,n.__v))};var hl=typeof requestAnimationFrame=="function";function lp(e){var t,n=function(){clearTimeout(u),hl&&cancelAnimationFrame(t),setTimeout(e)},u=setTimeout(n,100);hl&&(t=requestAnimationFrame(n))}function Ma(e){var t=Ue,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),Ue=t}function $o(e){var t=Ue;e.__c=e.__(),Ue=t}function yl(e,t){return!e||e.length!==t.length||t.some(function(n,u){return n!==e[u]})}function Tl(e,t){return typeof t=="function"?t(e):t}function Oa(e,t,n){let u=[];n||(n={}),t!=="auto"&&!n[t]&&(n[t]={matches:[],excludeMatches:[]}),u=t!=="auto"?n[t].matches:[];let a={},r=Object.keys(n);for(let l of r){let d=n[l].matches;for(let g of d)a[g]||(a[g]=[]),a[g].push(l)}let o=a[e];if(o&&o.length>0)for(let l of o)n[l].matches.indexOf(e)>-1&&(n[l]={...n[l],matches:n[l].matches.filter(d=>d!==e)});let i=new Set(u);if(t==="auto")return{...n};i.add(e);let s=Array.from(i);return{...n,[t]:{...n[t],matches:s}}}var Jo="DENO",Yo="CHROME",Na="FIREFOX";function dp(e){let t=Yo;try{let n=navigator?.userAgent||"";/firefox/i.test(n)||typeof InstallTrigger<"u"?t=Na:/deno/i.test(n)&&(t=Jo)}catch{}return e===Yo&&t===Yo||e===Na&&t===Na||e===Jo&&t===Jo}function xl(){return typeof Deno<"u"}function su(){return dp(Na)}function wl(){return!!navigator.maxTouchPoints||"ontouchstart"in document.documentElement}function Ku(){return!!globalThis.matchMedia("(pointer:fine)").matches}var Cl={addListener:()=>{},removeListener:()=>{},hasListener:()=>{}},vl={permissions:{contains:()=>{},request:()=>{}},runtime:{onMessage:Cl,openOptionsPage:()=>{},lastError:{message:""}},storage:{sync:{get:()=>{},set:()=>{}}},tabs:{onUpdated:Cl,query:()=>{},sendMessage:()=>{}}};var I;xl()?I=vl:I=globalThis.immersiveTranslateBrowserAPI;var Al={lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","noSupportTranslate-pdf":"\u811A\u672C\u4E0D\u652F\u6301\u8BF7\u4F7F\u7528\u63D2\u4EF6","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",enableLineBreak:"\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E\u683C\u5F0F\u4E3A\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u6709\u9053/\u817E\u8BAF\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8BD1\u5E76\u9690\u85CF\u539F\u6587/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.toggleTranslationMask":"\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6","browser.openEbookViewer":"\u9605\u8BFB\u672C\u5730\u7535\u5B50\u4E66","browser.openEbookBuilder":"\u5236\u4F5C\u53CC\u8BED Epub \u7535\u5B50\u4E66","browser.translateLocalHtmlFile":"\u7FFB\u8BD1 HTML/txt \u6587\u4EF6","browser.donateContext":"\u4E86\u89E3\u8D5E\u52A9\u798F\u5229","browser.translateLocalSubtitleFile":"\u7FFB\u8BD1\u672C\u5730\u5B57\u5E55\u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",isShowContextMenu:"\u5C06\u7FFB\u8BD1\u7F51\u9875\u52A0\u5165\u53F3\u952E\u83DC\u5355\u9879",toggleBeta:"\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",betaDescription:"\u542F\u7528\u4ECD\u5728\u5B9E\u9A8C\u6027\u7684\u529F\u80FD\uFF0C\u4EE5\u53CA\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u603B\u662F\u6362\u884C\u9002\u7528\u4E8E\u8F83\u5C11\u5185\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F50\u3002\uFF08\u5728\u5185\u5BB9\u8F83\u591A\u7684\u957F\u6BB5\u843D(\u8D85\u8FC7{count}\u4E2A\u5B57\u7B26) \u4F7F\u7528\u667A\u80FD\u6362\u884C\uFF0C\u66F4\u7701\u7A7A\u95F4\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1\uFF0C\u53EF\u8BBE\u7F6E\u4E34\u65F6\u65F6\u957F",xMinutes:"{count} \u5206\u949F",disabled:"\u7981\u7528",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5219\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875(\u4EC5\u8BD1\u6587)/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",mouseHoldKey:"+ {key} \u7FFB\u8BD1\u8BE5\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8BD1\u8BE5\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E(\u6253\u5F00\u8BBE\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8BD1\u8BE5\u6BB5",mouseHoverHoldKey:"\u9F20\u6807\u60AC\u505C\u540C\u65F6\u6309\u4E0B\u5FEB\u6377\u952E\u7FFB\u8BD1\u6BB5\u843D","mouse-translate":"\u5F53\u9F20\u6807\u60AC\u505C",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",resetThisSuccess:"\u91CD\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",goAdvancedInterfaceSettings:"\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\u3002\u4EC5\u5BF9\u4E8E\u66F4\u4E13\u4E1A\u7684\u7528\u6237\uFF0C\u63D0\u4F9B\u66F4\u4E2A\u6027\u5316\u7684\u8BBE\u7F6E\u9879\u3002",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u4EF7\u683C","translate to the bottom of the page":"\u8FDB\u5165\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u8FDB\u5165\u7F51\u9875\u5C06\u7ACB\u5373\u7FFB\u8BD1\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\u3002\u5173\u95ED\u5219\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u6240\u6709\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\u3002\u5173\u95ED\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\uFF0C\u4EC5\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8BD1\u9875\u9762\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\uFF0C\u800C\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",moreOptions:"\u5C55\u5F00\u66F4\u591A\u81EA\u5B9A\u4E49\u9009\u9879",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u6240\u6709\u533A\u57DF",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",changeToOnlyTranslationMode:"\u5207\u6362\u4E3A\u4EC5\u663E\u793A\u8BD1\u6587",changeToDualTranslationMode:"\u5207\u6362\u4E3A\u53CC\u8BED\u7FFB\u8BD1",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",badUserscriptBrowser:"\u5F53\u524D\u6D4F\u89C8\u5668\u6CA1\u6709\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u6269\u5C55\u7684\u63A5\u53E3\uFF08\u6BD4\u5982\u83B7\u53D6\u6CB9\u7334\u811A\u672C\u81EA\u8EAB\u7684\u7248\u672C\u53F7\u4FE1\u606F\uFF09\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334\u6269\u5C55</1>\u7684\u6D4F\u89C8\u5668\u5982 Firefox",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",needActionForOptions:"(\u9700\u8BBE\u7F6E)",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1 {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1 {language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA",import_export_title:"\u5BFC\u5165/\u5BFC\u51FA\u914D\u7F6E",syncToGoogleDrive:"\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65",previewAllThemes:"\u9884\u89C8\u5168\u90E8\u6837\u5F0F","translationTheme.none":"\u65E0","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.solidBorder":"\u5B9E\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C\uFF08\u5B66\u4E60\u6A21\u5F0F\uFF09","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.marker2":"\u9A6C\u514B\u7B142","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDashed":"\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDotted":"\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.nativeUnderline":"\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.wavy":"\u6CE2\u6D6A\u7EBF","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.tenAlpha":"\u817E\u8BAF\u7FFB\u8BD1\u541B(Alpha)","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeeplX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"Azure \u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.cai":"\u5F69\u4E91\u5C0F\u8BD1 (Alpha)","translationServices.volcAlpha":"\u706B\u5C71 (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.you":"\u6709\u9053\u7FFB\u8BD1 (Alpha)","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.niu":"\u5C0F\u725B\u7FFB\u8BD1","translationServices.papago":"Papago \u7FFB\u8BD1","translationServices.d":"D (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u5C06\u8DF3\u8FC7\u7FFB\u8BD1",enableUserscriptPagePopup:"\u5728\u9875\u9762\u4E0A\u663E\u793A\u60AC\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u5173\u95ED\u60AC\u6D6E\u7403\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u60AC\u6D6E\u7403\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u603B\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8BD1\u6587\u6837\u5F0F",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00",syncToCloud:"\u540C\u6B65\u5230\u4E91\u7AEF",syncToCloudDescription:"\u4E0A\u4F20\u5230\u4E91\u7AEF\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668/\u6CB9\u7334\u811A\u672C\u4E4B\u95F4\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",authFail:"\u6388\u6743\u5931\u8D25",syncTitle:"\u624B\u52A8\u5907\u4EFD\u7BA1\u7406",import_hint:"\u5BFC\u5165",upload:"\u4E0A\u4F20",revokeAuth:"\u64A4\u9500\u6388\u6743",uploadFail:"\u4E0A\u4F20\u5931\u8D25",download:"\u4E0B\u8F7D",importSuccess:"\u5BFC\u5165\u6210\u529F",importFail:"\u5BFC\u5165\u5931\u8D25",deleteFail:"\u5220\u9664\u5931\u8D25",backupToCloud:"\u624B\u52A8\u7BA1\u7406\u5907\u4EFD\u6587\u4EF6",create_new_backup:"\u65B0\u589E\u5907\u4EFD\u8282\u70B9",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5907\u4EFD{count}\u4E2A\u4E0D\u540C\u7684\u8282\u70B9, \u8BF7\u5220\u9664\u4E0D\u9700\u8981\u7684\u8282\u70B9",backupToCloudDescription:"\u624B\u52A8\u4E0A\u4F20\u6216\u6062\u590D\u5907\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8BB83\u4E2A\u4E0D\u540C\u7684\u5907\u4EFD",successSyncConfig:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u8D25",updatedAt:"\u66F4\u65B0\u4E8E {date}",lastSyncedAt:"\u4E0A\u6B21\u68C0\u67E5\u4E8E {date}",downloadFail:"\u4E0B\u8F7D\u5931\u8D25",clickToDownload:"\u70B9\u51FB\u4E0B\u8F7D",aboutLabel:"\u5173\u4E8E - \u53CD\u9988","browser.openAboutPage":"\u5173\u4E8E/\u53CD\u9988",aboutLabelWithoutSponsor:"\u5173\u4E8E - \u53CD\u9988",aboutIntro:"\u8BE5\u6269\u5C55\u514D\u8D39\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F <br/><br/>\u4F60\u53EF\u4EE5\u5173\u6CE8\u6211\u4EEC\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\uFF0C\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF0C\u6216\u8005\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002",aboutIntroWithoutSponsor:"\u8BE5\u6269\u5C55\u514D\u8D39\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F ",projectHomepage:"\u9879\u76EE\u4E3B\u9875",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u53C2\u4E0E\u529F\u80FD\u8BA8\u8BBA",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u4F17\u53F7",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",qqCommunities:"QQ \u4EA4\u6D41\u9891\u9053",joinTelegramChannel:"\u5173\u6CE8 Telegram \u9891\u9053\u83B7\u53D6\u6700\u65B0\u66F4\u65B0",feedbackAndJoin:"\u95EE\u9898\u53CD\u9988/\u52A0\u7FA4",autoSync:"\u81EA\u52A8\u5B9A\u65F6\u540C\u6B65",loadingThemeTitle:"Loading \u6837\u5F0F",loadingThemeDescription:"\u8BBE\u7F6E\u7B49\u5F85\u8BD1\u6587\u52A0\u8F7D\u65F6\u7684\u6837\u5F0F","loadingTheme.spinner":"\u8F6C\u5708\u52A8\u753B","loadingTheme.text":"\u9759\u6001\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u663E\u793A",developerDescription:"\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863","edit border color":"\u4FEE\u6539\u8FB9\u6846\u989C\u8272",successSyncButNoChange:"\u5F53\u524D\u914D\u7F6E\u4E0E\u4E91\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u8FB9\u6846\u989C\u8272","customThemeLabel.borderRadius":"\u8FB9\u6846\u5706\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u989C\u8272","customThemeLabel.backgroundColor":"\u80CC\u666F\u989C\u8272","customThemeLabel.zoom":"\u5B57\u4F53\u7F29\u653E\u6BD4\u4F8B (%)",resetToDefaultColor:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u989C\u8272",resetToDefaultSettings:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u8BBE\u7F6E",isTranslateTitle:"\u5F00\u542F\u7FFB\u8BD1\u7F51\u9875\u6807\u9898",isTranslateTitleDescription:"\u5F00\u542F\u540E\uFF0C\u7F51\u9875\u6807\u9898\u4F1A\u88AB\u7FFB\u8BD1",verifyService:"\u70B9\u6B64\u6D4B\u8BD5\u670D\u52A1",verified:"\u9A8C\u8BC1\u6210\u529F","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8BD1\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u949F\u6700\u5927\u8BF7\u6C42\u6570","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8BF7\u6C42\u6570","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6587\u672C\u957F\u5EA6","field.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6BB5\u843D\u6570","field.apiUrl":"\u81EA\u5B9A\u4E49 API \u63A5\u53E3\u5730\u5740","description.limitPerMinute":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u5206\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.prompt":"\u4EE5\u7528\u6237\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u8350\uFF09, \u5C06\u4F1A\u5728\u5355\u72EC\u4F5C\u4E3A\u4E00\u6BB5\u53D1\u9001\u7ED9 OpenAI","description.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u5B57\u7B26\u6570\uFF0C\u592A\u5927\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5C1D\u8BD5\u8C03\u6574\u8BE5\u9009\u9879\u6765\u4F18\u5316\u901F\u5EA6","description.systemPrompt":"\u4EE5\u7CFB\u7EDF\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00","description.model":"OpenAI \u7684\u6A21\u578B\uFF0C\u53EF\u4EE5\u4E3A gpt-3.5-turbo, gpt-4 \u7B49","description.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u53D1\u9001\u7ED9 OpenAI \u7684\u6BB5\u843D\u6570\u91CF\uFF0C\u5982\u679C\u6BB5\u843D\u6570\u91CF\u8FC7\u591A\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162\uFF0C\u8BBE\u7F6E\u4E3A 1 \u4E2A\u6BB5\u843D\u65F6\uFF0C\u4F53\u9A8C\u6700\u597D","description.apiUrl":"\u8BF7\u6DFB\u52A0\u5177\u4F53\u5E26\u6709\u8DEF\u5F84\u7684\u7F51\u5740",enabledExtension:"\u542F\u7528\u6269\u5C55",clickToDisableExtension:"\u70B9\u51FB\u7981\u7528\u6269\u5C55",clickToEnableExtension:"\u70B9\u51FB\u542F\u7528\u6269\u5C55",hasBeenDisabled:"\u5DF2\u7981\u7528","show password":"\u663E\u793A\u5BC6\u7801",customContent:"\u8F93\u5165\u81EA\u5B9A\u4E49\u6A21\u578B\u540D\u79F0",inputOptions:"\u8F93\u5165\u6846\u589E\u5F3A",enableInputTranslation:"\u662F\u5426\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",enableInputTranslationDescription:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165 {startingKey}{startingKey} \u4F60\u597D\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",enableInputTranslationDescriptionForNoneKey:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165\uFF1A\u4F60\u597D\u4E16\u754C\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguage:"\u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguageDescription:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00\uFF0C\u4E5F\u5C31\u662F {startingKey}{startingKey} \u4F5C\u4E3A\u89E6\u53D1\u8BCD\u7684\u9ED8\u8BA4\u8BED\u8A00",inputTargetLanguageDescriptionForNoneKey:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputStartingTriggerKeyTitle:"\u9009\u62E9\u4E00\u4E2A\u8F93\u5165\u5F00\u59CB\u7684\u89E6\u53D1\u5B57\u7B26",inputStartingTriggerKeyDescription:"{startingKey}en \u8868\u793A\u7FFB\u8BD1\u4E3A\u82F1\u6587\uFF0C{startingKey}ja \u8868\u793A\u7FFB\u8BD1\u4E3A\u65E5\u6587\uFF0C {startingKey}{startingKey} \u8868\u793A\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputStartingTriggerKeyDescriptionForNoneKey:"\u5F53\u524D\u8BBE\u7F6E\u4E3A\u65E0\u9700\u524D\u7F00\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF0C\u5F53\u5FEB\u901F\u8FDE\u51FB3\u6B21\u7ED3\u675F\u5B57\u7B26\u65F6\uFF0C\u5C06\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u6587\u672C\u6846\u7684\u5185\u5BB9\u4E3A\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTrailingTriggerKeyTitle:"\u9009\u62E9\u4E00\u4E2A\u8F93\u5165\u7ED3\u675F\u7684\u89E6\u53D1\u5B57\u7B26",inputTrailingTriggerKeyDescription:"\u5FEB\u901F\u8FDE\u51FB3\u6B21{trailingKey} \u5C06\u4F1A\u5F00\u59CB\u7FFB\u8BD1",spaceKey:"<\u7A7A\u683C\u952E>",noneKey:"\u65E0\u9700\u524D\u7F00\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u6587\u672C\u6846",inputTranslationBlockUrlsTitle:"\u5207\u52FF\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",inputTranslationBlockUrlsDescription:"\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\uFF0C\u8F93\u5165\u6846\u589E\u5F3A\u5C06\u4E0D\u4F1A\u751F\u6548",clickToSeeQuickDemo:"\u70B9\u51FB\u5C55\u5F00 30 \u79D2\u5FEB\u901F\u6559\u5B66\u89C6\u9891",inputHelperInfo:"\u8BF4\u660E\uFF1A\u6211\u4EEC\u7279\u522B\u9488\u5BF9\u5728\u4E2D\u6587\u8F93\u5165\u6CD5\u4E0B\u90E8\u5206\u89E6\u53D1\u5B57\u7B26\u4F1A\u53D8\u6210\u4E2D\u6587\u6807\u70B9\u7B26\u53F7\u8FD9\u4EF6\u4E8B\u505A\u4E86\u4F18\u5316\uFF0C\u6BD4\u5982\u641C\u72D7\u8F93\u5165\u6CD5\u4E0B / \u4F1A\u53D8\u6210\u987F\u53F7 \u3001\uFF0C\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u652F\u6301\u6240\u6709\u89E6\u53D1\u7B26\u5BF9\u5E94\u7684\u4E2D\u6587\u7B26\u53F7\uFF0C\u4E5F\u5C31\u662F\u8BF4 // \u3001\u3001 \u90FD\u4F1A\u88AB\u8BC6\u522B\u4E3A\u89E6\u53D1\u5B57\u7B26\u3002<br/><br/>\u540C\u65F6\u6211\u4EEC\u4E5F\u652F\u6301\u8BED\u8A00\u4EE3\u7801\u7684\u4E2D\u6587\u522B\u540D\u4F5C\u4E3A\u547D\u4EE4\uFF0C\u6BD4\u5982 /\u65E5\u6587 \u4F60\u597D\u4E16\u754C \u4F1A\u88AB\u7FFB\u8BD1\u4E3A\u65E5\u6587\uFF0C<1>\u70B9\u6B64\u67E5\u770B\u6240\u6709\u652F\u6301\u7684\u8BED\u8A00\u4EE3\u7801</1>\u3002",reloadCurrentPage:"\u8BF7\u5148\u5237\u65B0\u5F53\u524D\u9875\u9762\uFF0C\u518D\u5F00\u59CB\u7FFB\u8BD1"};var kl={lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u5143\u6578\u91CF","translate-pdf":"\u9EDE\u9078\u7FFB\u8B6F PDF","translate-firefox-local-pdf":"\u9EDE\u9078\u4E0A\u50B3 PDF",enableLineBreak:"\u958B\u555F\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D0A\u52A9\u958B\u767C\u8005 (\u6708\u4ED8\u6216\u50C5\u8D0A\u52A9\u4E00\u6B21\u5747\u53EF)",help:"\u8AAA\u660E",browserShortcutsNoteForFirefox:"Firefox \u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u9644\u52A0\u5143\u4EF6\u7BA1\u7406\u9801\u9762 \u300Cabout:addons\u300D\uFF0C\u7136\u5F8C\u9EDE\u9078\u300C\u8A2D\u5B9A\u5716\u793A\u300D\uFF0C\u518D\u9EDE\u9078\u300C\u7BA1\u7406\u64F4\u5145\u5957\u4EF6\u5FEB\u901F\u9375\u300D\u5373\u53EF\u8A2D\u5B9A",browserShortcutsNoteForChrome:"Chromium \u6838\u5FC3\u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u64F4\u5145\u529F\u80FD\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u300C\u9375\u76E4\u5FEB\u901F\u9375\u300D\u9801\u9762(chrome://extensions/shortcuts)\u8A2D\u5B9A\uFF0C\u9EDE\u9078\u4E0B\u65B9\u6309\u9215\u524D\u5F80\u5FEB\u901F\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u901F\u9375\u683C\u5F0F\u70BA\uFF1A",enableLineBreakDescription:"\u555F\u7528\u5F8C\uFF0C\u5C07\u6703\u5728\u9577\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u5B57\u5143\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u5957\u4EF6\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u63F4 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u63F4 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8B6F\u4E26\u96B1\u85CF\u539F\u6587/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.openOptionsPage":"\u958B\u555F\u8A2D\u5B9A\u9801\u9762","browser.toggleTranslationMask":"\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u6A5F PDF \u6A94\u6848","browser.openEbookViewer":"\u95B1\u8B80\u672C\u6A5F\u96FB\u5B50\u66F8","browser.openEbookBuilder":"\u88FD\u4F5C\u96D9\u8A9E Epub \u96FB\u5B50\u66F8","browser.translateLocalHtmlFile":"\u7FFB\u8B6F HTML/txt \u6A94\u6848","browser.translateLocalSubtitleFile":"\u7FFB\u8B6F\u5B57\u5E55\u6A94\u6848","browser.donateContext":"\u4E86\u89E3\u8D0A\u52A9\u798F\u5229",confirmResetConfig:"\u4F60\u78BA\u5B9A\u8981\u91CD\u8A2D\u8A2D\u5B9A\u55CE\uFF1F",translationLineBreakSettingTitle:"\u8B6F\u6587\u63DB\u884C\u8A2D\u5B9A",smartLineBreak:"\u667A\u6167\u63DB\u884C",alwaysLineBreak:"\u7E3D\u662F\u63DB\u884C",isShowContextMenu:"\u5C07\u7DB2\u9801\u7FFB\u8B6F\u529F\u80FD\u52A0\u5165\u53F3\u9375\u9078\u55AE",toggleBeta:"\u958B\u555F Beta \u6E2C\u8A66\u529F\u80FD",betaDescription:"\u555F\u7528\u4ECD\u5728\u5BE6\u9A57\u7684\u529F\u80FD\u4EE5\u53CA\u6E2C\u8A66\u4E2D\u7684\u7FFB\u8B6F\u670D\u52D9\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7D44</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u7E3D\u662F\u63DB\u884C\u9069\u7528\u65BC\u8F03\u5C11\u5167\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F4A\u3002(\u5728\u5167\u5BB9\u8F03\u591A\u7684\u9577\u6BB5\u843D(\u8D85\u904E {count} \u500B\u5B57\u5143) \u4F7F\u7528\u667A\u6167\u63DB\u884C\u6703\u66F4\u7701\u7A7A\u9593)",tempTranslateDomainTitle:"\u81E8\u6642\u958B\u555F\u7DB2\u7AD9\u7FFB\u8B6F\u7684\u6642\u9577",tempTranslateDomainDescription:"\u7576\u624B\u52D5\u7FFB\u8B6F\u67D0\u500B\u7DB2\u9801\u7684\u6642\u5019\uFF0C\u81E8\u6642\u958B\u555F\u8A72\u7DB2\u7AD9\u70BA\u81EA\u52D5\u7FFB\u8B6F",xMinutes:"{count} \u5206\u9418",disabled:"\u505C\u7528",changelog:"\u66F4\u65B0\u8A18\u9304",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u5247\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C",addUrlDescription:"\u53EF\u4EE5\u70BA\u7DB2\u57DF\u540D\u7A31\uFF0C\u540C\u6642\u652F\u63F4\u842C\u7528\u5B57\u5143\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u5B9A",clickToExpandConfig:"\u5C55\u958B\u76EE\u524D\u8A2D\u5B9A",import:"\u5F9E\u6A94\u6848\u532F\u5165",export:"\u532F\u51FA\u70BA\u6A94\u6848",toggleDebug:"\u5728\u4E3B\u63A7\u53F0\u986F\u793A\u5075\u932F\u8A18\u9304","fingers.0":"\u95DC\u9589","fingers.2":"\u96D9\u6307\u89F8\u6478","fingers.3":"\u4E09\u6307\u89F8\u6478","fingers.4":"\u56DB\u6307\u89F8\u6478","fingers.5":"\u4E94\u6307\u89F8\u6478",document:"\u8AAA\u660E\u6587\u4EF6",resetSuccess:"\u91CD\u8A2D\u6240\u6709\u8A2D\u5B9A\u6210\u529F",resetThisSuccess:"\u91CD\u8A2D\u6210\u529F",saved:"\u5132\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u532F\u5165\u8A2D\u5B9A",goAdvancedSettings:"\u524D\u5F80\u9032\u968E\u8A2D\u5B9A\u9801\u9762",goAdvancedInterfaceSettings:"\u524D\u5F80\u81EA\u8A02\u8A2D\u5B9A\u9801\u9762",advanced:"\u9032\u968E\u8A2D\u5B9A",advancedDescription:"\u6B63\u5E38\u60C5\u6CC1\u7121\u9700\u8A2D\u5B9A\uFF0C\u4FDD\u6301\u9810\u8A2D\u5373\u53EF\u3002\u50C5\u91DD\u5C0D\u66F4\u5C08\u696D\u7684\u4F7F\u7528\u8005\uFF0C\u63D0\u4F9B\u66F4\u500B\u4EBA\u5316\u7684\u8A2D\u5B9A\u9805\u76EE\u3002",developer:"\u958B\u767C\u8005\u8A2D\u5B9A",donateCafe:"\u50F9\u683C","translate to the bottom of the page":"\u9032\u5165\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u56DE\u5831",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","mouse-translate":"\u7576\u9F20\u6A19\u6ED1\u904E",mouseHoldKey:"+ {key} \u7FFB\u8B6F\u8A72\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8B6F\u8A72\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u7FA9\u5FEB\u6377\u9375(\u6253\u958B\u8A2D\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8B6F\u8A72\u6BB5",mouseHoverHoldKey:"\u9F20\u6A19\u6ED1\u904E\u540C\u6642\u6309\u4E0B X \u9375\u7FFB\u8B6F\u6BB5\u843D",translateToThePageEndImmediatelyDescription:"\u555F\u7528\u5F8C\uFF0C\u9032\u5165\u7DB2\u9801\u5C07\u7ACB\u5373\u7FFB\u8B6F\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\u3002\u95DC\u9589\u5247\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u555F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6240\u6709\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\u3002\u95DC\u9589\u5247\u4F7F\u7528\u9810\u8A2D\u7684\u667A\u6167\u8FA8\u8B58\uFF0C\u50C5\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\u3002(\u4E0D\u63A8\u85A6\u958B\u555F)","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8B6F\u9801\u9762\u524D\u591A\u5C11\u500B\u5B57\u5143\uFF0C\u800C\u7121\u9700\u7B49\u5F85\u6372\u52D5\u81F3\u53EF\u898B\u5340\u57DF","interface language":"\u4ECB\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u901F\u9375",modify:"\u8B8A\u66F4\u5FEB\u901F\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u9996\u9801",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u6240\u6709\u5340\u57DF",changeToTranslateTheMainPage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF",changeToOnlyTranslationMode:"\u5207\u63DB\u70BA\u50C5\u986F\u793A\u8B6F\u6587",changeToDualTranslationMode:"\u5207\u63DB\u70BA\u96D9\u8A9E\u7FFB\u8B6F",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u6167\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u6A5F\u898F\u5247\u5DF2\u70BA\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u5B98\u65B9\u898F\u5247",localVersionIsTooOld:"\u672C\u6A5F\u5957\u4EF6\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u5957\u4EF6\u81F3 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5617\u8A66\u540C\u6B65",badUserscriptBrowser:"\u76EE\u524D\u700F\u89BD\u5668\u7121\u6CD5\u6B63\u78BA\u5BE6\u73FE\u6CB9\u7334\u5957\u4EF6\u7684\u4ECB\u9762\uFF0C\u8ACB\u4F7F\u7528\u5176\u4ED6<1>\u652F\u63F4\u6CB9\u7334\u5957\u4EF6</1>\u7684\u700F\u89BD\u5668\u5982(Firefox Nightly \u7248\u672C)",foundNewVersion:"\u6709\u65B0\u7248\u672C\u53EF\u7528",theLocalExtensionIsUpToUpdate:"\u76EE\u524D\u5957\u4EF6\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u91CD\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u76EE\u524D\u898F\u5247\u7248\u672C",calculating:"\u6B63\u5728\u8A08\u7B97",unknownError:"\u672A\u77E5\u7684\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u53D6\u5F97\u9060\u7AEF\u898F\u5247",enableAlphaSuccess:"\u5DF2\u555F\u7528 Alpha \u529F\u80FD",disableAlphaSuccess:"\u5DF2\u505C\u7528 Alpha \u529F\u80FD",cacheSize:"\u5FEB\u53D6\u5927\u5C0F\uFF1A",cleaning:"\u6B63\u5728\u6E05\u7406",cleanCache:"\u6E05\u9664\u5FEB\u53D6",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"(\u524D\u5F80\u8A2D\u5B9A)",goSettings:"\u524D\u5F80\u8A2D\u5B9A",needActionForOptions:"(\u9700\u8A2D\u5B9A)",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u91DD\u5C0D\u8A72\u7DB2\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F {language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",add:"\u65B0\u589E",default:"\u9810\u8A2D",forThisLanguage:"\u91DD\u5C0D\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165 URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u5B83\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u5B9A\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4F60\u60F3\u7528\u7684\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u6B63\u5728\u7FFB\u8B6F",Error:"\u932F\u8AA4",allowCacheTranslations:"\u555F\u7528\u672C\u6A5F\u7FFB\u8B6F\u5FEB\u53D6\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8981\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u7BC4\u4F8B",interface:"\u4ECB\u9762\u8A2D\u5B9A",import_export:"\u532F\u5165/\u532F\u51FA",import_export_title:"\u532F\u5165/\u532F\u51FA\u8A2D\u5B9A",syncToGoogleDrive:"\u7ACB\u5373\u8207 Google Drive \u540C\u6B65",previewAllThemes:"\u9810\u89BD\u5168\u90E8\u6A23\u5F0F","translationTheme.none":"\u7121","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u5E95\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u6846\u7DDA","translationTheme.solidBorder":"\u5BE6\u7DDA\u6846\u7DDA","translationTheme.underline":"\u76F4\u7DDA\u5E95\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C\uFF08\u5B78\u7FD2\u6A21\u5F0F\uFF09","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u9694\u7DDA","translationTheme.highlight":"\u9192\u76EE\u63D0\u793A","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.marker2":"\u99AC\u514B\u7B462","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDashed":"\u7CFB\u7D71\u5167\u5EFA\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDotted":"\u7CFB\u7D71\u5167\u5EFA\u9EDE\u72C0\u5E95\u7DDA","translationTheme.nativeUnderline":"\u7CFB\u7D71\u5167\u5EFA\u76F4\u7DDA\u5E95\u7DDA","translationTheme.wavy":"\u6CE2\u5F62\u66F2\u7DDA","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.tenAlpha":"\u9A30\u8A0A\u7FFB\u8B6F\u541B(Alpha)","translationServices.google":"Google \u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeeplX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8B6F","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"Azure \u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.cai":"\u5F69\u96F2\u5C0F\u8B6F (Alpha)","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.you":"\u6709\u9053\u7FFB\u8B6F (Alpha)","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.niu":"\u5C0F\u725B\u7FFB\u8B6F","translationServices.papago":"Papago \u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u7576\u9801\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u5C07\u8DF3\u904E\u7FFB\u8B6F",enableUserscriptPagePopup:"\u5728\u9801\u9762\u4E0A\u986F\u793A\u61F8\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u95DC\u9589\u61F8\u6D6E\u7403\u5F8C\uFF0C\u53EF\u4EE5\u7528\u5FEB\u901F\u9375/{touch}\u518D\u6B21\u986F\u793A\u3002\u70BA\u9632\u6B62\u4E0D\u614E\u95DC\u9589\u8A72\u9078\u9805\u5F8C\u627E\u4E0D\u5230\u61F8\u6D6E\u7403\uFF0C\u5EFA\u8B70\u5C07\u672C\u8A2D\u5B9A\u9801\u9762\u52A0\u5165\u81F3\u6211\u7684\u6700\u611B","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u91D1\u9470\u5F8C\u624D\u53EF\u4F7F\u7528\uFF0C\u8A73\u7D30\u8CC7\u8A0A\u8ACB\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u91D1\u9470\u7533\u8ACB\u548C\u8A2D\u5B9A\u6559\u5B78\u300B",useAboveStyleForTheseSites:"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u7E3D\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8B6F\u6587\u6A23\u5F0F",currentUrl:"\u76EE\u524D\u7DB2\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C\u8A9E\u8A00",syncToCloud:"\u540C\u6B65\u81F3\u96F2\u7AEF",syncToCloudDescription:"\u4E0A\u50B3\u81F3\u96F2\u7AEF\u5F8C\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u700F\u89BD\u5668/\u6CB9\u7334\u8173\u672C\u4E4B\u9593\u540C\u6B65\u8A2D\u5B9A\uFF0C\u4EE5\u6700\u5F8C\u8B8A\u66F4\u6642\u9593\u70BA\u6E96\u3002",authFail:"\u6388\u6B0A\u5931\u6557",syncTitle:"\u624B\u52D5\u5099\u4EFD\u7BA1\u7406",import_hint:"\u532F\u5165",upload:"\u4E0A\u50B3",revokeAuth:"\u64A4\u92B7\u6388\u6B0A",uploadFail:"\u4E0A\u50B3\u5931\u6557",download:"\u4E0B\u8F09",importSuccess:"\u532F\u5165\u6210\u529F",importFail:"\u532F\u5165\u5931\u6557",deleteFail:"\u522A\u9664\u5931\u6557",backupToCloud:"\u624B\u52D5\u7BA1\u7406\u5099\u4EFD\u6A94\u6848",create_new_backup:"\u65B0\u589E\u5099\u4EFD\u7BC0\u9EDE",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5099\u4EFD{count}\u500B\u4E0D\u540C\u7684\u7BC0\u9EDE\uFF0C\u8ACB\u522A\u9664\u4E0D\u9700\u8981\u7684\u7BC0\u9EDE",backupToCloudDescription:"\u624B\u52D5\u4E0A\u50B3\u6216\u9084\u539F\u5099\u4EFD\u6A94\u6848\uFF0C\u6700\u591A\u5141\u8A31 3 \u500B\u4E0D\u540C\u7684\u5099\u4EFD",successSyncConfig:"\u6210\u529F\u8207\u96F2\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u6557",updatedAt:"\u66F4\u65B0\u65BC {date}",lastSyncedAt:"\u4E0A\u6B21\u6AA2\u67E5\u65BC {date}",downloadFail:"\u4E0B\u8F09\u5931\u6557",clickToDownload:"\u9EDE\u9078\u4E0B\u8F09",aboutLabel:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831",aboutLabelWithoutSponsor:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831","browser.openAboutPage":"\u95DC\u65BC/\u554F\u984C\u56DE\u5831/\u8D0A\u52A9",aboutIntro:"\u672C\u5957\u4EF6\u70BA\u514D\u8CBB\u5957\u4EF6\uFF0C\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F \u4F60\u53EF\u4EE5\u95DC\u6CE8\u6211\u4EEC\u7684<3>Twitter</3>\uFF0C<4>Telegram \u983B\u9053</4>\u4EE5\u53CA\u4E0B\u65B9\u7684<5>\u90F5\u4EF6\u8A02\u95B1</5>\u8FFD\u8E64\u66F4\u65B0\u3002",aboutIntroWithoutSponsor:"\u672C\u5957\u4EF6\u70BA\u514D\u8CBB\u5957\u4EF6\uFF0C\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F ",projectHomepage:"\u5C08\u6848\u9996\u9801",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u4F17\u53F7",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",qqCommunities:"QQ \u4EA4\u6D41\u9891\u9053",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u7D44\u53C3\u8207\u529F\u80FD\u8A0E\u8AD6",joinTelegramChannel:"\u95DC\u6CE8 Telegram \u983B\u9053\u77AD\u89E3\u66F4\u65B0\u8CC7\u8A0A",feedbackAndJoin:"\u554F\u984C\u56DE\u5831/\u52A0\u5165\u7FA4\u7D44",autoSync:"\u81EA\u52D5\u5B9A\u6642\u540C\u6B65",loadingThemeTitle:"Loading \u6A23\u5F0F",loadingThemeDescription:"\u8A2D\u5B9A\u7B49\u5F85\u8B6F\u6587\u8F09\u5165\u6642\u7684\u6A23\u5F0F","loadingTheme.spinner":"\u8F49\u5708\u52D5\u756B","loadingTheme.text":"\u975C\u614B\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u986F\u793A",developerDescription:"\u53EF\u4EE5\u9EDE\u9078<1>\u6B64\u8655</1>\u6AA2\u8996\u9032\u968E\u81EA\u8A02\u529F\u80FD\u76F8\u95DC\u7684\u8AAA\u660E\u6587\u4EF6","edit border color":"\u8B8A\u66F4\u908A\u6846\u8272\u5F69",successSyncButNoChange:"\u76EE\u524D\u8A2D\u5B9A\u8207\u96F2\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u8A02\u8272\u5F69\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u908A\u6846\u8272\u5F69","customThemeLabel.borderRadius":"\u908A\u6846\u5713\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u8272\u5F69","customThemeLabel.backgroundColor":"\u80CC\u666F\u8272\u5F69","customThemeLabel.zoom":"\u5B57\u578B\u7E2E\u653E\u6BD4\u4F8B (%)",resetToDefaultColor:"\u9084\u539F\u70BA\u9810\u8A2D\u8272\u5F69",isTranslateTitle:"\u555F\u7528\u7DB2\u9801\u6A19\u984C\u7FFB\u8B6F",isTranslateTitleDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6A19\u984C\u6703\u88AB\u7FFB\u8B6F",verifyService:"\u9EDE\u6B64\u6E2C\u8A66\u670D\u52D9",verified:"\u9A57\u8B49\u6210\u529F","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8B6F\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u9418\u6700\u5927\u8981\u6C42\u6578","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8981\u6C42\u6578","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8981\u6C42\u7684\u6700\u5927\u6587\u5B57\u9577\u5EA6","field.apiUrl":"\u81EA\u8A02 API \u4F4D\u5740","description.limitPerMinute":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u5206\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u79D2\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.prompt":"\u4EE5\u7528\u6237\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u8350\uFF09, \u5C06\u4F1A\u5728\u5355\u72EC\u4F5C\u4E3A\u4E00\u6BB5\u53D1\u9001\u7ED9 OpenAI","description.maxTextLengthPerRequest":"\u9810\u8A2D\u6703\u5408\u4F75\u591A\u500B\u6BB5\u843D\uFF0C\u4EE5\u6E1B\u5C11\u8ACB\u8981\u6C42\u6578\uFF0C\u4F46\u662F\u5982\u679C\u6BB5\u843D\u7E3D\u9577\u5EA6\u904E\u9577\uFF0C\u4E5F\u53EF\u80FD\u6703\u5C0E\u81F4 API \u7684\u56DE\u61C9\u6642\u9593\u589E\u52A0\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5617\u8A66\u8ABF\u6574\u8A72\u9078\u9805\u4F86\u63D0\u5347\u901F\u5EA6",enabledExtension:"\u555F\u7528\u5957\u4EF6",clickToDisableExtension:"\u9EDE\u9078\u505C\u7528\u5957\u4EF6",clickToEnableExtension:"\u9EDE\u9078\u555F\u7528\u5957\u4EF6",hasBeenDisabled:"\u5DF2\u505C\u7528","show password":"\u986F\u793A\u5BC6\u78BC",customContent:"\u8F38\u5165\u81EA\u5B9A\u7FA9\u6A21\u578B",inputOptions:"\u8F38\u5165\u6846\u589E\u5F37"};var Dl={lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","translate-firefox-local-pdf":"Click to upload Pdf",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.brandName":"Immersive Translate","browser.brandDescription":"Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc.","browser.toggleTranslatePage":"Toggle Translate Page ","browser.toggleTranslateTheWholePage":"Toggle Translate the Whole Page","browser.toggleOnlyTransation":"Toggle Translate and Hide Original Text","browser.toggleTranslateToThePageEndImmediately":"Toggle Translate to the Bottom of the Page Immediately","browser.toggleTranslateTheMainPage":"Toggle Translate the Main Page","browser.openOptionsPage":"Open Settings Page","browser.toggleTranslationMask":"Toggle translation mask style","browser.translateLocalPdfFile":"Translate local PDF File","browser.openEbookViewer":"Read local e-book","browser.openEbookBuilder":"Make Dual Epub ebook","browser.translateLocalHtmlFile":"Translate HTML/txt File","browser.donateContext":"Sponsor Benefits","browser.translateLocalSubtitleFile":"Translate Subtitle File",confirmResetConfig:"Are you sure you want to reset the settings?",translationLineBreakSettingTitle:"Line break setting",smartLineBreak:"Smart Wrap",alwaysLineBreak:"Always Wrap",isShowContextMenu:"Create right button menu",toggleBeta:"Enable Beta experimental features",betaDescription:"Enable features that are still experimental, and translation services that are in testing. Join the <1>Telegram group</1> to learn more.",translationLineBreakSettingDescription:"The always line break feature is suitable for layouts with less content, making the layout more neat and tidy. (Use smart line breaks for long paragraphs with more content (more than {count} characters) for saving space)",tempTranslateDomainTitle:"Open the translation time temporarily",tempTranslateDomainDescription:"When a page is translated manually, turn it temporarily on as automatic translation",xMinutes:"{count} minutes",disabled:"Disable",changelog:"Change Log",toggleTranslatePageWhenThreeFingersOnTheScreen:"Multi-finger touch to show/hide translation display",toggleTranslationMaskWhenThreeFingersOnTheScreen:"Multi-finger touch to show/hide the blur effect of the translation",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"Multi-finger touch to show/hide only translation display",addUrlDescription:"The domain name is available and wildcard is supported e.g.: *.google.com, google.com/mail/*, https://www.google.com/*",general:"General",clickToExpandConfig:"Expand current configuration",import:"Import configuration from file",export:"Export to file",toggleDebug:"Print debug logs on the console","fingers.0":"Close","fingers.2":"Two-finger touch","fingers.3":"Three-finger touch","fingers.4":"Four-finger touch","fingers.5":"Five-finger touch",document:"Document",resetSuccess:"All settings reset successful",resetThisSuccess:"Reset successful",saved:"Saved successfully",successImportConfig:"Configuration imported successfully",goAdvancedSettings:"Go to Advanced Settings Page",goAdvancedInterfaceSettings:"Go to Advanced Custom Settings Page",advanced:"Advanced",advancedDescription:"Normally no settings are needed, keep the default. More personalized settings are provided for professional users only.",developer:"Developer settings",donateCafe:"Pricing","translate to the bottom of the page":"Translate to the bottom of the page immediately after opening the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate","mouse-translate":"Mouse Hover",mouseHoldKey:"+ {key} translate this paragraph",mouseHoldKeyAuto:"Translate the paragraph directly",mouseHoldKeyOff:"Do nothing",mouseHoldKeyOther:"Custom shortcut key (open settings)",mouseHoldKeyCustomKey:"{key} translate this paragraph",mouseHoverHoldKey:"Mouse over and press X key to translate paragraph",translateToThePageEndImmediatelyDescription:"Enabled will translate from the top to the bottom of the page immediately after opening. Disable will translate while reading. (Not recommended to enable)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, all areas of the entire web page will be translated. Disabled will use the default smart recognition and translate only the main areas. (Not recommended to enable)","the number of characters to be translated first":"Directly translate the number of characters in front of the page without waiting to scroll to the visible area","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",moreOptions:"Expand more custom settings",translateTheWholePage:"Translate the whole page area (different from only the main area)",changeToTranslateTheWholePage:"Translate the Whole Page",changeToTranslateTheMainPage:"Translate the Main Content",changeToOnlyTranslationMode:"Show Translation only",changeToDualTranslationMode:"Show Dual Translation",translateToThePageEndImmediately:"Immediately translate to the bottom (different from translating the current visible area)",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension version is too old, please upgrade the extension to {minVersion} or a newer version and try to sync again.",badUserscriptBrowser:"The current browser does not correctly implement the interface of the Greasemonkey extension, please use another browser that <1>supports the Greasemonkey extension</1> such as (Firefox Nightly version)",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",needActionForOptions:"(need to set)",translationEngine:"Engine Options",sourceLanguage:"Original language",target:"Target Language",popupSourceLanguage:"Source",popupTarget:"Target",popupService:"Service",forThisSite:"For This Site:",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export",import_export_title:"Import/Export Configuration",syncToGoogleDrive:"Sync Now with Google Drive",previewAllThemes:"Preview all themes","translationTheme.none":"None","translationTheme.grey":"Black Gray","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.solidBorder":"Dashed Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.opacity":"Opacity effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Marker","translationTheme.marker2":"Maker2","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationTheme.nativeDashed":"System Dash Underline","translationTheme.nativeDotted":"System Dotted Underline","translationTheme.nativeUnderline":"System Straight Line Underline","translationTheme.wavy":"Squiggle","translationServices.tencent":"Tencent Translator","translationServices.tenAlpha":"Tencent Translator (Alpha)","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeeplX (Alpha)","translationServices.bing":"Microsoft Translator","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Azure Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.cai":"Caiyun Translation (Alpha)","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.you":"Youdao Translation (Alpha)","translationServices.transmart":"Tencent Smart Translation","translationServices.niu":"Niu Translation","translationServices.papago":"Papago Translation","translationServices.d":"DeeplX (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"Translate page title","always languages":"Always translate the following languages",neverTranslateLanguagesLabel:"Never Translated Languages",neverTranslateTheFollowingLanguagesDescription:"When a paragraph on a page is in one of the following languages, the translation will be skipped",enableUserscriptPagePopup:"Always show Popup windows on the page",enableUserscriptPagePopupDescription:"Three-finger touch to show the Popup.","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"Sites that always use the {theme} translation style",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language",syncToCloud:"Sync to cloud",syncToCloudDescription:"Upload the configuration to the cloud server, and you can synchronize the configuration between different browsers or Tampermonkey scripts, based on the last modification time.",authFail:"Authorization Failed",syncTitle:"Please select a file operation",import_hint:"Import",upload:"Upload",revokeAuth:"Revoke Authorization",uploadFail:"Upload Failed",download:"Download",importSuccess:"Upload Success",importFail:"Import Failed",deleteFail:"Delete Failed",backupToCloud:"Manage backup files manually",create_new_backup:"Add backup node",maxBackupFiles:"Up to{count}different nodes can be backed up. Please delete unneeded nodes",backupToCloudDescription:"Upload or restore backup files manually, up to 3 different backups",successSyncConfig:"Successfully synced with cloud",syncFail:"Synchronization failed",updatedAt:"Updated at {date}",lastSyncedAt:"Last checked at {date}",downloadFail:"Download failed",clickToDownload:"Click to download",aboutLabel:"About - Feedback ",aboutLabelWithoutSponsor:"About - Feedback","browser.openAboutPage":"About / Feedback",aboutIntro:"The extension is completely free and we hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. <br/><br/> You can also follow out <3>Twitter</3>, <4>Telegram Channel</4>, and <5>Email Subscription</5> below to track updates.",aboutIntroWithoutSponsor:"The extension is completely free and we hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. ",projectHomepage:"Project Homepage",joinTelegramGroup:"Join our communities for feature discussion",joinTelegramChannel:"Subscribe to our Telegram channel to get the latest updates",feedbackAndJoin:"Issue feedback/group",wechatPublicAccount:"Wechat Official Account",wechatCommunities:"Wechat Group",qqCommunities:"QQ Channel",autoSync:"Auto-Time Sync",loadingThemeTitle:"Loading Style",loadingThemeDescription:"Set the style of waiting for the translation to load","loadingTheme.spinner":"Spinning icon","loadingTheme.text":"Static Text... ","loadingTheme.none":"Disabled",developerDescription:"You can click <1>here</1> to see the documentation related to advanced customization","edit border color":"Edit border color",successSyncButNoChange:"The current configuration is consistent with that in the cloud server",customTheme:"Customize colors and sizes","customThemeLabel.borderColor":"Border color","customThemeLabel.borderRadius":"Border Round Corner","customThemeLabel.textColor":"Text color","customThemeLabel.backgroundColor":"Background color","customThemeLabel.zoom":"Font scale (%)",resetToDefaultColor:"Reset to default colors",isTranslateTitle:"Enable translate page title",isTranslateTitleDescription:"When enabled, the page title will be translated",verifyService:"Click on this test service",verified:"Successful","field.model":"Model","field.translationEngine":"Translation engine","field.limitPerMinute":"Max requests per minute","field.limitPerSecond":"Max requests per second","field.maxTextLengthPerRequest":"Maximum text length per request","field.apiUrl":"Custom API interface address","description.limitPerMinute":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next minute. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.limitPerSecond":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next second. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.prompt":"Send as a user to OpenAI conversation, where {{text}} indicates the text of the paragraph,{{from}} indicates the language of the paragraph,{{to}} indicates the target language, you can omit {{text}}, if so, it'll be sent as a separated message","description.maxTextLengthPerRequest":"By default multiple paragraphs will be merged to reduce the number of requests, but if the total length of the paragraphs is too long, it may also cause the interface to respond slowly, so you can try to adjust this option to optimize speed",enabledExtension:"Enable extensions",clickToDisableExtension:"Click to disable extension",clickToEnableExtension:"Click to enable the extension",hasBeenDisabled:"Disabled","show password":"Show password",resetToDefaultSettings:"Reset to default settings",customContent:"Enter customization content",inputOptions:"Writing"};var fp=[{code:"zh-CN",messages:Al},{code:"zh-TW",messages:kl},{code:"en",messages:Dl}],rn="immersiveTranslateDeeplGlobalState",Ia="immersiveTranslateBingGlobalState",In={};for(let e of fp)In[e.code]=e.messages;var jn="Immersive Translate",Ce="immersive-translate",ja="pdf/index.html",Pl="html/index.html",Fl="subtitle/index.html";var pe="immersiveTranslate";var yE=pe+"GoogleAccessToken",TE=pe+"AuthFlow";var xE=pe+"AuthState",za=pe+"IframeMessage",wE=pe+"WaitForRateLimit",Ll=pe+"DocumentMessageAsk",ht=pe+"DocumentMessageTellThirdParty",Bl=pe+"DocumentMessageThirdPartyTell",hp=pe+"DocumentMessageHandler",bp=`${pe}Container`,_l=`${pe}SpecifiedContainer`,pn="buildinConfig",$u="localConfig",Xo="openOptionsPage",Qo="openAboutPage";var Zo="openEbookViewer",ei="openEbookBuilder";var Ua=`${pe}PageTranslatedStatus`,CE=`${pe}PageUrlChanged`,fn=`${pe}ReceiveCommand`,Gu=`${pe}PopupReceiveMessage`,Ep="immersivetranslate.com",yp="config.immersivetranslate.com",vE=`https://${Ep}/`,Vu=`https://${yp}/default_config.json`,AE=`${pe}Mark`,Ju="immersiveTranslateEffect",vt=`${pe}Root`,kE=`data-${Ce}-effect`,lu=`data-${Ce}-translation-element-mark`,Ml=`${pe}TranslationElementMark`,DE=`${pe}TranslatedMark`,SE=`${pe}ParagraphId`,Rl=`${pe}LoadingId`,ti=`data-${Ce}-loading-id`,Ol=`${pe}ErrorId`,Ha=`data-${Ce}-error-id`,Tp=`${pe}AtomicBlockMark`,Nl=`${pe}ExcludeMark`,PE=`data-${Ce}-exclude-mark`,xp=`${pe}StayOriginalMark`,FE=`${pe}PreWhitespaceMark`,Wa=`${pe}InlineMark`,Il=`${pe}BlockMark`,LE=`${pe}Left`,BE=`${pe}Right`,_E=`${pe}Width`,ME=`${pe}Height`,RE=`${pe}Top`,OE=`${pe}FontSize`,jl="lastRunTime",NE=`${pe}GlobalStyleMark`,qa=["@","#"],Ka=" --- ",zl=`
`,Bt=`${Ce}-target-wrapper`,IE=`${Ce}-pdf-target-container`,Ul=`${Ce}-target-inner`,jE=`${Ce}-source-wrapper`,ni=`${Ce}-target-translation-block-wrapper`,zE=`${Ce}-root-translation-theme`,cu=`${pe}RootTranslationTheme`,Hl=`${Ce}-target-translation-vertical-block-wrapper`,Wl=`${Ce}-target-translation-pdf-block-wrapper`,ql=`${Ce}-target-translation-pre-whitespace`,ui=`${Ce}-target-translation-inline-wrapper`;var Kl={underline:[{name:"borderColor",required:!1,type:"color"}],nativeUnderline:[{name:"borderColor",required:!1,type:"color"}],nativeDashed:[{name:"borderColor",required:!1,type:"color"}],nativeDotted:[{name:"borderColor",required:!1,type:"color"}],dotted:[{name:"borderColor",required:!1,type:"color"}],dividingLine:[{name:"borderColor",required:!1,type:"color"}],highlight:[{name:"backgroundColor",required:!1,type:"color"}],marker:[{name:"backgroundColor",required:!1,type:"color"}],dashed:[{name:"borderColor",required:!1,type:"color"}],blockquote:[{name:"borderColor",required:!1,type:"color"}],thinDashed:[{name:"borderColor",required:!1,type:"color"}],dashedBorder:[{name:"borderRadius",required:!1,type:"number",default:"0"},{name:"borderColor",required:!1,type:"color"}],solidBorder:[{name:"borderRadius",required:!1,type:"number",default:"0"},{name:"borderColor",required:!1,type:"color"}],marker2:[{name:"backgroundColor",required:!1,type:"color"}],wavy:[{name:"borderColor",required:!1,type:"color"}]},Yt=["auto","en","zh-CN","zh-TW","ja","ko","es","de","fr","pt","ru","ar","it","ms","id","vi","af","th","ur","bo","am","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","el","eo","et","eu","fa","fi","fil","fj","fy","ga","gd","gl","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","ig","is","jw","ka","kk","km","kn","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","mt","mww","my","ne","nl","no","ny","otq","pa","pl","ps","ro","sa","sd","si","sk","sl","sm","sn","so","sq","sr","sr-Cyrl","sr-Latn","st","su","sv","sw","ta","te","tg","tlh","tlh-Qaak","to","tr","ty","ug","uk","uz","wyw","xh","yi","yo","yua","yue","zu"],ai={af:"Afrikaans",am:"Amharic",ar:"Arabic",auto:"Detect Language",az:"Azerbaijani",be:"Belarusian",bg:"Bulgarian",tn:"Zana",bn:"Bengali",bs:"Bosnian",ca:"Catalan",ceb:"Cebuano",co:"Corsican",cs:"Czech",cy:"Welsh",da:"Danish",de:"German",el:"Greek",en:"English",eo:"Esperanto",es:"Spanish",et:"Estonian",eu:"Basque",sa:"Sanskrit",fa:"Farsi",fi:"Finnish",fil:"Filipino",fj:"Fijian",fr:"French",fy:"Frisian",ga:"Irish",gd:"Scottish Gaelic",gl:"Galician",gu:"Gujarati",ha:"Hausa",haw:"Hawaiian",he:"Hebrew",hi:"Hindi",hmn:"Hmong",hr:"Croatian",ht:"Haitian Creole",hu:"Hungarian",hy:"Armenian",id:"Indonesian",ig:"Igbo",is:"Icelandic",it:"Italian",ja:"\u65E5\u672C\u8A9E",jw:"Javanese",ka:"Georgian",kk:"Kazakh",km:"Khmer",kn:"Kannada",ko:"Korean",ku:"Kurdish",ky:"Kyrgyz",la:"Latin",lb:"Luxembourgish",lo:"Lao",lt:"Lithuanian",lv:"Latvian",mg:"Malagash",mi:"Maori",mk:"Macedonian",ml:"Malayalam",mn:"Mongolian",mr:"Marathi",ms:"Malay",mt:"Maltese",mww:"Bai Miao",my:"Burmese",ne:"Nepali",nl:"Dutch",no:"Norwegian",ny:"Nyanza (Chichewa)",otq:"Quer\xE9taro Otomi",pa:"Punjabi",pl:"Polish",ps:"Pashto",pt:"Portuguese (Portugal, Brazil)",ro:"Romanian",ru:"Russian",sd:"Sindhi",si:"Sinhala",sk:"Slovak",sl:"Slovenian",sm:"Samoan",sn:"Shona",so:"Somali",sq:"Albanian",sr:"Serbian","sr-Cyrl":"Serbian (Cyrillic)","sr-Latn":"Serbian (Latin)",st:"Sesotho",su:"Sundanese",sv:"Swedish",sw:"Swahili",ta:"Tamil",te:"Telugu",tg:"Tajik",th:"Thai",tlh:"Klingon","tlh-Qaak":"Klingon (piqaD)",to:"Tongan",tr:"Turkish",ty:"Tahiti",ug:"Uyghur",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",vi:"Vietnamese",wyw:"\u6587\u8A00\u6587",xh:"Bantu",yi:"Yiddish",yo:"Yoruba",yua:"Yucatan Mayan",yue:"Cantonese (Traditional)","zh-CN":"\u7B80\u4F53\u4E2D\u6587","zh-TW":"\u7E41\u9AD4\u4E2D\u6587",zu:"Zulu","<all>":"All Languages"};var $l=["https://immersive-translate.owenyoung.com/options/","https://immersive-translate.owenyoung.com/auth-done/","https://dash.immersivetranslate.com/","https://dash.immersivetranslate.com/auth-done/","http://localhost:8000/dist/userscript/options/","http://localhost:8000/auth-done/","http://192.168.50.9:8000/dist/userscript/options/","http://192.168.31.51:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com","http://localhost:8000/options/","http://192.168.50.9:8000/options/","http://192.168.31.51:8000/options/"];var $a="zh-CN";var Sl=[{type:"select",name:"codename",labelKey:"field.translationEngine",default:"youdao",required:!1,options:[{label:"translationServices.google",value:"google"},{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.aws",value:"aws"}]}],on={bing:{name:"\u5FAE\u8F6F\u7FFB\u8BD1",homepage:"https://www.bing.com/translator"},google:{name:"Google",homepage:"https://translate.google.com/"},deepl:{name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://immersivetranslate.com/docs/services/deepL/",allProps:[{name:"authKey",label:"Auth Key",required:!0,type:"password"}]},transmart:{name:"Transmart",homepage:"https://transmart.qq.com/"},openai:{name:"Open AI",homepage:"https://openai.com/api/",docUrl:"https://immersivetranslate.com/docs/services/openai/",allProps:[{name:"APIKEY",required:!0,type:"password"},{name:"model",labelKey:"field.model",descriptionKey:"description.model",required:!1,type:"select",default:"gpt-3.5-turbo-0613",options:[{label:"gpt-3.5-turbo",value:"gpt-3.5-turbo"},{label:"gpt-3.5-turbo-0613",value:"gpt-3.5-turbo-0613"},{label:"gpt-4",value:"gpt-4"}]},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.limitPerSecond",descriptionLink1:"https://immersivetranslate.com/docs/services/openai/",type:"number",default:10},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0},{name:"apiUrl",labelKey:"field.apiUrl",required:!1,type:"text",default:"https://api.openai.com/v1/chat/completions",descriptionKey:"description.apiUrl",optional:!0},{name:"systemPrompt",label:"System Prompt",required:!1,descriptionKey:"description.systemPrompt",type:"text",optional:!0,default:"You are a translation engine, you can only translate text and cannot interpret it, and do not explain."},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:`Translate the text below to {{to}}:

{{text}}`,optional:!0}]},chatgpt:{name:"ChatGPT Web(3.5 mobile)",homepage:"https://chat.openai.com",beta:!0},youdao:{name:"Youdao",homepage:"https://youdao.com/",docUrl:"https://immersivetranslate.com/docs/services/youdao/",allProps:[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"}]},tencent:{name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://immersivetranslate.com/docs/services/tencent/",allProps:[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]},azure:{name:"azure",homepage:"https://learn.microsoft.com/en-us/azure/cognitive-services/translator/text-translation-overview",docUrl:"https://immersivetranslate.com/docs/services/azure/",allProps:[{name:"region",required:!0,default:"eastasia",type:"text"},{name:"APIKEY",required:!0,type:"password"}]},papago:{name:"Papago",homepage:"https://translate.google.com/",canary:!0},baidu:{name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://immersivetranslate.com/docs/services/baidu/",allProps:[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"}]},volc:{name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://immersivetranslate.com/docs/services/volcano/",allProps:[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"}]},caiyun:{name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://immersivetranslate.com/docs/services/caiyun/",allProps:[{name:"token",required:!0,type:"password"}]},cai:{name:"Cai",homepage:"https://fanyi.caiyunapp.com/",alpha:!0},mock:{name:"Mock",homepage:"https://www.google.com"},mock2:{name:"Mock2",homepage:"https://www.google.com"},tenAlpha:{name:"TenAlpha",homepage:"https://fanyi.qq.com/",alpha:!0},you:{name:"You",alpha:!0,homepage:"https://youdao.com/"},openl:{name:"Openl",homepage:"https://openl.club/",docUrl:"https://immersivetranslate.com/docs/services/openL/",allProps:[...Sl,{type:"password",name:"apikey",required:!0}],props:Sl},volcAlpha:{name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},d:{name:"D () ",alpha:!0,homepage:"https://www.deepl.com/translator"},dpro:{name:"DPro (Canary) ",canary:!0,homepage:"https://www.deepl.com/translator"},deeplx:{name:"DeepLX (Beta)",beta:!0,homepage:"https://www.deepl.com/translator",allProps:[{name:"url",label:"API URL",required:!0,type:"text"}]},niu:{name:"niutrans",homepage:"https://niutrans.com/",docUrl:"https://immersivetranslate.com/docs/services/niu",allProps:[{name:"APIKEY",required:!0,type:"password"}]}},ri={type:pe+"ChildFrameToRootFrameIdentifier"},Ga=["Alt","Ctrl","Shift","Auto","Off","OtherCustom","Other"];function Gl(e){let t=I.runtime.getURL(ja),n=new URL(t);return(e.startsWith("http")||!su())&&n.searchParams.set("file",e),n.href}function du(){let e,t="pending",n=new Promise((u,a)=>{e={async resolve(r){await r,t="fulfilled",u(r)},reject(r){t="rejected",a(r)}}});return Object.defineProperty(n,"state",{get:()=>t}),Object.assign(n,e)}var oi=class extends Error{constructor(){super("Deadline"),this.name="DeadlineError"}};function Va(e,t){let n=du(),u=setTimeout(()=>n.reject(new oi),t);return Promise.race([e,n]).finally(()=>clearTimeout(u))}function Yu(e,t={}){let{signal:n,persistent:u}=t;return n?.aborted?Promise.reject(new DOMException("Delay was aborted.","AbortError")):new Promise((a,r)=>{let o=()=>{clearTimeout(s),r(new DOMException("Delay was aborted.","AbortError"))},s=setTimeout(()=>{n?.removeEventListener("abort",o),a()},e);if(n?.addEventListener("abort",o,{once:!0}),u===!1)try{Deno.unrefTimer(s)}catch(l){if(!(l instanceof ReferenceError))throw l}})}var Vl=class{#e=0;#t=[];#n=[];#u=du();add(t){++this.#e,this.#a(t[Symbol.asyncIterator]())}async#a(t){try{let{value:n,done:u}=await t.next();u?--this.#e:this.#t.push({iterator:t,value:n})}catch(n){this.#n.push(n)}this.#u.resolve()}async*iterate(){for(;this.#e>0;){await this.#u;for(let t=0;t<this.#t.length;t++){let{iterator:n,value:u}=this.#t[t];yield u,this.#a(n)}if(this.#n.length){for(let t of this.#n)throw t;this.#n.length=0}this.#t.length=0,this.#u=du()}}[Symbol.asyncIterator](){return this.iterate()}};var _t={};Km(_t,{bgBlack:()=>Vp,bgBlue:()=>Qp,bgBrightBlack:()=>n3,bgBrightBlue:()=>o3,bgBrightCyan:()=>s3,bgBrightGreen:()=>a3,bgBrightMagenta:()=>i3,bgBrightRed:()=>u3,bgBrightWhite:()=>l3,bgBrightYellow:()=>r3,bgCyan:()=>e3,bgGreen:()=>Yp,bgMagenta:()=>Zp,bgRed:()=>Jp,bgRgb24:()=>m3,bgRgb8:()=>d3,bgWhite:()=>t3,bgYellow:()=>Xp,black:()=>Bp,blue:()=>Op,bold:()=>Ap,brightBlack:()=>Xl,brightBlue:()=>qp,brightCyan:()=>$p,brightGreen:()=>Hp,brightMagenta:()=>Kp,brightRed:()=>Up,brightWhite:()=>Gp,brightYellow:()=>Wp,cyan:()=>Ip,dim:()=>kp,getColorEnabled:()=>Cp,gray:()=>zp,green:()=>Mp,hidden:()=>Fp,inverse:()=>Pp,italic:()=>Dp,magenta:()=>Np,red:()=>_p,reset:()=>vp,rgb24:()=>g3,rgb8:()=>c3,setColorEnabled:()=>wp,strikethrough:()=>Lp,stripColor:()=>f3,underline:()=>Sp,white:()=>jp,yellow:()=>Rp});var{Deno:Jl}=globalThis,Yl=typeof Jl?.noColor=="boolean"?Jl.noColor:!0,ii=!Yl;function wp(e){Yl||(ii=e)}function Cp(){return ii}function ie(e,t){return{open:`\x1B[${e.join(";")}m`,close:`\x1B[${t}m`,regexp:new RegExp(`\\x1b\\[${t}m`,"g")}}function se(e,t){return ii?`${t.open}${e.replace(t.regexp,t.open)}${t.close}`:e}function vp(e){return se(e,ie([0],0))}function Ap(e){return se(e,ie([1],22))}function kp(e){return se(e,ie([2],22))}function Dp(e){return se(e,ie([3],23))}function Sp(e){return se(e,ie([4],24))}function Pp(e){return se(e,ie([7],27))}function Fp(e){return se(e,ie([8],28))}function Lp(e){return se(e,ie([9],29))}function Bp(e){return se(e,ie([30],39))}function _p(e){return se(e,ie([31],39))}function Mp(e){return se(e,ie([32],39))}function Rp(e){return se(e,ie([33],39))}function Op(e){return se(e,ie([34],39))}function Np(e){return se(e,ie([35],39))}function Ip(e){return se(e,ie([36],39))}function jp(e){return se(e,ie([37],39))}function zp(e){return Xl(e)}function Xl(e){return se(e,ie([90],39))}function Up(e){return se(e,ie([91],39))}function Hp(e){return se(e,ie([92],39))}function Wp(e){return se(e,ie([93],39))}function qp(e){return se(e,ie([94],39))}function Kp(e){return se(e,ie([95],39))}function $p(e){return se(e,ie([96],39))}function Gp(e){return se(e,ie([97],39))}function Vp(e){return se(e,ie([40],49))}function Jp(e){return se(e,ie([41],49))}function Yp(e){return se(e,ie([42],49))}function Xp(e){return se(e,ie([43],49))}function Qp(e){return se(e,ie([44],49))}function Zp(e){return se(e,ie([45],49))}function e3(e){return se(e,ie([46],49))}function t3(e){return se(e,ie([47],49))}function n3(e){return se(e,ie([100],49))}function u3(e){return se(e,ie([101],49))}function a3(e){return se(e,ie([102],49))}function r3(e){return se(e,ie([103],49))}function o3(e){return se(e,ie([104],49))}function i3(e){return se(e,ie([105],49))}function s3(e){return se(e,ie([106],49))}function l3(e){return se(e,ie([107],49))}function hn(e,t=255,n=0){return Math.trunc(Math.max(Math.min(e,t),n))}function c3(e,t){return se(e,ie([38,5,hn(t)],39))}function d3(e,t){return se(e,ie([48,5,hn(t)],49))}function g3(e,t){return typeof t=="number"?se(e,ie([38,2,t>>16&255,t>>8&255,t&255],39)):se(e,ie([38,2,hn(t.r),hn(t.g),hn(t.b)],39))}function m3(e,t){return typeof t=="number"?se(e,ie([48,2,t>>16&255,t>>8&255,t&255],49)):se(e,ie([48,2,hn(t.r),hn(t.g),hn(t.b)],49))}var p3=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function f3(e){return e.replace(p3,"")}var si=class extends Error{constructor(t,n){super(`Exceeded max retry count (${n})`),this.name="RetryError",this.cause=t}},h3={multiplier:2,maxTimeout:6e4,maxAttempts:5,minTimeout:1e3};async function li(e,t){let n={...h3,...t};if(n.maxTimeout>=0&&n.minTimeout>n.maxTimeout)throw new RangeError("minTimeout is greater than maxTimeout");let u=n.minTimeout,a;for(let r=0;r<n.maxAttempts;r++)try{return await e()}catch(o){await new Promise(i=>setTimeout(i,u)),u*=n.multiplier,u=Math.max(u,n.minTimeout),n.maxTimeout>=0&&(u=Math.min(u,n.maxTimeout)),a=o}throw new si(a,n.maxAttempts)}var B2=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var Ja=globalThis||(typeof window<"u"?window:self),E3=Object.create,di=Object.defineProperty,y3=Object.getOwnPropertyDescriptor,T3=Object.getOwnPropertyNames,x3=Object.getPrototypeOf,w3=Object.prototype.hasOwnProperty,C3=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),v3=(e,t)=>{for(var n in t)di(e,n,{get:t[n],enumerable:!0})},ci=(e,t,n,u)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of T3(t))!w3.call(e,a)&&a!==n&&di(e,a,{get:()=>t[a],enumerable:!(u=y3(t,a))||u.enumerable});return e},A3=(e,t,n)=>(ci(e,t,"default"),n&&ci(n,t,"default")),Zl=(e,t,n)=>(n=e!=null?E3(x3(e)):{},ci(t||!e||!e.__esModule?di(n,"default",{value:e,enumerable:!0}):n,e)),ec=C3((e,t)=>{var n="Expected a function",u=NaN,a="[object Symbol]",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt,c=typeof Ja=="object"&&Ja&&Ja.Object===Object&&Ja,d=typeof self=="object"&&self&&self.Object===Object&&self,g=c||d||Function("return this")(),m=Object.prototype,f=m.toString,w=Math.max,y=Math.min,p=function(){return g.Date.now()};function _(T,D,L){var U,v,B,X,O,Z,ve=0,V=!1,J=!1,xe=!0;if(typeof T!="function")throw new TypeError(n);D=k(D)||0,A(L)&&(V=!!L.leading,J="maxWait"in L,B=J?w(k(L.maxWait)||0,D):B,xe="trailing"in L?!!L.trailing:xe);function C(K){var Y=U,ne=v;return U=v=void 0,ve=K,X=T.apply(ne,Y),X}function x(K){return ve=K,O=setTimeout(ue,D),V?C(K):X}function H(K){var Y=K-Z,ne=K-ve,ye=D-Y;return J?y(ye,B-ne):ye}function q(K){var Y=K-Z,ne=K-ve;return Z===void 0||Y>=D||Y<0||J&&ne>=B}function ue(){var K=p();if(q(K))return te(K);O=setTimeout(ue,H(K))}function te(K){return O=void 0,xe&&U?C(K):(U=v=void 0,X)}function ee(){O!==void 0&&clearTimeout(O),ve=0,U=Z=v=O=void 0}function we(){return O===void 0?X:te(p())}function ke(){var K=p(),Y=q(K);if(U=arguments,v=this,Z=K,Y){if(O===void 0)return x(Z);if(J)return O=setTimeout(ue,D),C(Z)}return O===void 0&&(O=setTimeout(ue,D)),X}return ke.cancel=ee,ke.flush=we,ke}function M(T,D,L){var U=!0,v=!0;if(typeof T!="function")throw new TypeError(n);return A(L)&&(U="leading"in L?!!L.leading:U,v="trailing"in L?!!L.trailing:v),_(T,D,{leading:U,maxWait:D,trailing:v})}function A(T){var D=typeof T;return!!T&&(D=="object"||D=="function")}function S(T){return!!T&&typeof T=="object"}function E(T){return typeof T=="symbol"||S(T)&&f.call(T)==a}function k(T){if(typeof T=="number")return T;if(E(T))return u;if(A(T)){var D=typeof T.valueOf=="function"?T.valueOf():T;T=A(D)?D+"":D}if(typeof T!="string")return T===0?T:+T;T=T.replace(r,"");var L=i.test(T);return L||s.test(T)?l(T.slice(2),L?2:8):o.test(T)?u:+T}t.exports=M}),tc={};v3(tc,{default:()=>st});var k3=Zl(ec());A3(tc,Zl(ec()));var{default:Ql,...D3}=k3,st=Ql!==void 0?Ql:D3;var S3=Object.create,mi=Object.defineProperty,P3=Object.getOwnPropertyDescriptor,F3=Object.getOwnPropertyNames,L3=Object.getPrototypeOf,B3=Object.prototype.hasOwnProperty,_3=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),M3=(e,t)=>{for(var n in t)mi(e,n,{get:t[n],enumerable:!0})},gi=(e,t,n,u)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of F3(t))!B3.call(e,a)&&a!==n&&mi(e,a,{get:()=>t[a],enumerable:!(u=P3(t,a))||u.enumerable});return e},R3=(e,t,n)=>(gi(e,t,"default"),n&&gi(n,t,"default")),uc=(e,t,n)=>(n=e!=null?S3(L3(e)):{},gi(t||!e||!e.__esModule?mi(n,"default",{value:e,enumerable:!0}):n,e)),ac=_3((e,t)=>{(function(n,u){typeof e=="object"&&typeof t=="object"?t.exports=u():typeof define=="function"&&define.amd?define([],u):typeof e=="object"?e.notie=u():n.notie=u()})(e,function(){return function(n){function u(r){if(a[r])return a[r].exports;var o=a[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,u),o.l=!0,o.exports}var a={};return u.m=n,u.c=a,u.i=function(r){return r},u.d=function(r,o,i){u.o(r,o)||Object.defineProperty(r,o,{configurable:!1,enumerable:!0,get:i})},u.n=function(r){var o=r&&r.__esModule?function(){return r.default}:function(){return r};return u.d(o,"a",o),o},u.o=function(r,o){return Object.prototype.hasOwnProperty.call(r,o)},u.p="",u(u.s=1)}([function(n,u){n.exports=function(a){return a.webpackPolyfill||(a.deprecate=function(){},a.paths=[],a.children||(a.children=[]),Object.defineProperty(a,"loaded",{enumerable:!0,get:function(){return a.l}}),Object.defineProperty(a,"id",{enumerable:!0,get:function(){return a.i}}),a.webpackPolyfill=1),a}},function(n,u,a){"use strict";(function(r){var o,i,s,l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c};(function(c,d){l(u)==="object"&&l(r)==="object"?r.exports=d():(i=[],o=d,s=typeof o=="function"?o.apply(u,i):o,s!==void 0&&(r.exports=s))})(void 0,function(){return function(c){function d(m){if(g[m])return g[m].exports;var f=g[m]={i:m,l:!1,exports:{}};return c[m].call(f.exports,f,f.exports,d),f.l=!0,f.exports}var g={};return d.m=c,d.c=g,d.i=function(m){return m},d.d=function(m,f,w){d.o(m,f)||Object.defineProperty(m,f,{configurable:!1,enumerable:!0,get:w})},d.n=function(m){var f=m&&m.__esModule?function(){return m.default}:function(){return m};return d.d(f,"a",f),f},d.o=function(m,f){return Object.prototype.hasOwnProperty.call(m,f)},d.p="",d(d.s=0)}([function(c,d,g){function m(x,H){var q={};for(var ue in x)H.indexOf(ue)>=0||Object.prototype.hasOwnProperty.call(x,ue)&&(q[ue]=x[ue]);return q}Object.defineProperty(d,"__esModule",{value:!0});var f=typeof Symbol=="function"&&l(Symbol.iterator)==="symbol"?function(x){return typeof x>"u"?"undefined":l(x)}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x>"u"?"undefined":l(x)},w=Object.assign||function(x){for(var H=1;H<arguments.length;H++){var q=arguments[H];for(var ue in q)Object.prototype.hasOwnProperty.call(q,ue)&&(x[ue]=q[ue])}return x},y={top:"top",bottom:"bottom"},p={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:y.top,force:y.top,confirm:y.top,input:y.top,select:y.bottom,date:y.top}},_=d.setOptions=function(x){p=w({},p,x,{classes:w({},p.classes,x.classes),ids:w({},p.ids,x.ids),positions:w({},p.positions,x.positions)})},M=function(){return new Promise(function(x){return setTimeout(x,0)})},A=function(x){return new Promise(function(H){return setTimeout(H,1e3*x)})},S=function(){document.activeElement&&document.activeElement.blur()},E=function(){var x="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(H){var q=16*Math.random()|0,ue=H==="x"?q:3&q|8;return ue.toString(16)});return"notie-"+x},k={1:p.classes.backgroundSuccess,success:p.classes.backgroundSuccess,2:p.classes.backgroundWarning,warning:p.classes.backgroundWarning,3:p.classes.backgroundError,error:p.classes.backgroundError,4:p.classes.backgroundInfo,info:p.classes.backgroundInfo,5:p.classes.backgroundNeutral,neutral:p.classes.backgroundNeutral},T=function(){return p.transitionSelector+" "+p.transitionDuration+"s "+p.transitionCurve},D=function(x){return x.keyCode===13},L=function(x){return x.keyCode===27},U=function(x,H){x.classList.add(p.classes.container),x.style[H]="-10000px",document.body.appendChild(x),x.style[H]="-"+x.offsetHeight+"px",x.listener&&window.addEventListener("keydown",x.listener),M().then(function(){x.style.transition=T(),x.style[H]=0})},v=function(x,H){var q=document.getElementById(x);q&&(q.style[H]="-"+q.offsetHeight+"px",q.listener&&window.removeEventListener("keydown",q.listener),A(p.transitionDuration).then(function(){q.parentNode&&q.parentNode.removeChild(q)}))},B=function(x,H){var q=document.createElement("div");q.id=p.ids.overlay,q.classList.add(p.classes.overlay),q.classList.add(p.classes.backgroundOverlay),q.style.opacity=0,x&&p.overlayClickDismiss&&(q.onclick=function(){v(x.id,H),X()}),document.body.appendChild(q),M().then(function(){q.style.transition=T(),q.style.opacity=p.overlayOpacity})},X=function(){var x=document.getElementById(p.ids.overlay);x.style.opacity=0,A(p.transitionDuration).then(function(){x.parentNode&&x.parentNode.removeChild(x)})},O=d.hideAlerts=function(x){var H=document.getElementsByClassName(p.classes.alert);if(H.length){for(var q=0;q<H.length;q++){var ue=H[q];v(ue.id,ue.position)}x&&A(p.transitionDuration).then(function(){return x()})}},Z=d.alert=function(x){var H=x.type,q=H===void 0?4:H,ue=x.text,te=x.time,ee=te===void 0?p.alertTime:te,we=x.stay,ke=we!==void 0&&we,K=x.position,Y=K===void 0?p.positions.alert||Y.top:K;S(),O();var ne=document.createElement("div"),ye=E();ne.id=ye,ne.position=Y,ne.classList.add(p.classes.textbox),ne.classList.add(k[q]),ne.classList.add(p.classes.alert),ne.innerHTML='<div class="'+p.classes.textboxInner+'">'+ue+"</div>",ne.onclick=function(){return v(ye,Y)},ne.listener=function(Q){(D(Q)||L(Q))&&O()},U(ne,Y),ee&&ee<1&&(ee=1),!ke&&ee&&A(ee).then(function(){return v(ye,Y)})},ve=d.force=function(x,H){var q=x.type,ue=q===void 0?5:q,te=x.text,ee=x.buttonText,we=ee===void 0?"OK":ee,ke=x.callback,K=x.position,Y=K===void 0?p.positions.force||Y.top:K;S(),O();var ne=document.createElement("div"),ye=E();ne.id=ye;var Q=document.createElement("div");Q.classList.add(p.classes.textbox),Q.classList.add(p.classes.backgroundInfo),Q.innerHTML='<div class="'+p.classes.textboxInner+'">'+te+"</div>";var be=document.createElement("div");be.classList.add(p.classes.button),be.classList.add(k[ue]),be.innerHTML=we,be.onclick=function(){v(ye,Y),X(),ke?ke():H&&H()},ne.appendChild(Q),ne.appendChild(be),ne.listener=function(Fe){D(Fe)&&be.click()},U(ne,Y),B()},V=d.confirm=function(x,H,q){var ue=x.text,te=x.submitText,ee=te===void 0?"Yes":te,we=x.cancelText,ke=we===void 0?"Cancel":we,K=x.submitCallback,Y=x.cancelCallback,ne=x.position,ye=ne===void 0?p.positions.confirm||ye.top:ne;S(),O();var Q=document.createElement("div"),be=E();Q.id=be;var Fe=document.createElement("div");Fe.classList.add(p.classes.textbox),Fe.classList.add(p.classes.backgroundInfo),Fe.innerHTML='<div class="'+p.classes.textboxInner+'">'+ue+"</div>";var De=document.createElement("div");De.classList.add(p.classes.button),De.classList.add(p.classes.elementHalf),De.classList.add(p.classes.backgroundSuccess),De.innerHTML=ee,De.onclick=function(){v(be,ye),X(),K?K():H&&H()};var ae=document.createElement("div");ae.classList.add(p.classes.button),ae.classList.add(p.classes.elementHalf),ae.classList.add(p.classes.backgroundError),ae.innerHTML=ke,ae.onclick=function(){v(be,ye),X(),Y?Y():q&&q()},Q.appendChild(Fe),Q.appendChild(De),Q.appendChild(ae),Q.listener=function(ze){D(ze)?De.click():L(ze)&&ae.click()},U(Q,ye),B(Q,ye)},J=function(x,H,q){var ue=x.text,te=x.submitText,ee=te===void 0?"Submit":te,we=x.cancelText,ke=we===void 0?"Cancel":we,K=x.submitCallback,Y=x.cancelCallback,ne=x.position,ye=ne===void 0?p.positions.input||ye.top:ne,Q=m(x,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);S(),O();var be=document.createElement("div"),Fe=E();be.id=Fe;var De=document.createElement("div");De.classList.add(p.classes.textbox),De.classList.add(p.classes.backgroundInfo),De.innerHTML='<div class="'+p.classes.textboxInner+'">'+ue+"</div>";var ae=document.createElement("input");ae.classList.add(p.classes.inputField),ae.setAttribute("autocapitalize",Q.autocapitalize||"none"),ae.setAttribute("autocomplete",Q.autocomplete||"off"),ae.setAttribute("autocorrect",Q.autocorrect||"off"),ae.setAttribute("autofocus",Q.autofocus||"true"),ae.setAttribute("inputmode",Q.inputmode||"verbatim"),ae.setAttribute("max",Q.max||""),ae.setAttribute("maxlength",Q.maxlength||""),ae.setAttribute("min",Q.min||""),ae.setAttribute("minlength",Q.minlength||""),ae.setAttribute("placeholder",Q.placeholder||""),ae.setAttribute("spellcheck",Q.spellcheck||"default"),ae.setAttribute("step",Q.step||"any"),ae.setAttribute("type",Q.type||"text"),ae.value=Q.value||"",Q.allowed&&(ae.oninput=function(){var _e=void 0;if(Array.isArray(Q.allowed)){for(var Me="",Le=Q.allowed,mt=0;mt<Le.length;mt++)Le[mt]==="an"?Me+="0-9a-zA-Z":Le[mt]==="a"?Me+="a-zA-Z":Le[mt]==="n"&&(Me+="0-9"),Le[mt]==="s"&&(Me+=" ");_e=new RegExp("[^"+Me+"]","g")}else f(Q.allowed)==="object"&&(_e=Q.allowed);ae.value=ae.value.replace(_e,"")});var ze=document.createElement("div");ze.classList.add(p.classes.button),ze.classList.add(p.classes.elementHalf),ze.classList.add(p.classes.backgroundSuccess),ze.innerHTML=ee,ze.onclick=function(){v(Fe,ye),X(),K?K(ae.value):H&&H(ae.value)};var Re=document.createElement("div");Re.classList.add(p.classes.button),Re.classList.add(p.classes.elementHalf),Re.classList.add(p.classes.backgroundError),Re.innerHTML=ke,Re.onclick=function(){v(Fe,ye),X(),Y?Y(ae.value):q&&q(ae.value)},be.appendChild(De),be.appendChild(ae),be.appendChild(ze),be.appendChild(Re),be.listener=function(_e){D(_e)?ze.click():L(_e)&&Re.click()},U(be,ye),ae.focus(),B(be,ye)};d.input=J;var xe=d.select=function(x,H){var q=x.text,ue=x.cancelText,te=ue===void 0?"Cancel":ue,ee=x.cancelCallback,we=x.choices,ke=x.position,K=ke===void 0?p.positions.select||K.top:ke;S(),O();var Y=document.createElement("div"),ne=E();Y.id=ne;var ye=document.createElement("div");ye.classList.add(p.classes.textbox),ye.classList.add(p.classes.backgroundInfo),ye.innerHTML='<div class="'+p.classes.textboxInner+'">'+q+"</div>",Y.appendChild(ye),we.forEach(function(be,Fe){var De=be.type,ae=De===void 0?1:De,ze=be.text,Re=be.handler,_e=document.createElement("div");_e.classList.add(k[ae]),_e.classList.add(p.classes.button),_e.classList.add(p.classes.selectChoice);var Me=we[Fe+1];Me&&!Me.type&&(Me.type=1),Me&&Me.type===ae&&_e.classList.add(p.classes.selectChoiceRepeated),_e.innerHTML=ze,_e.onclick=function(){v(ne,K),X(),Re()},Y.appendChild(_e)});var Q=document.createElement("div");Q.classList.add(p.classes.backgroundNeutral),Q.classList.add(p.classes.button),Q.innerHTML=te,Q.onclick=function(){v(ne,K),X(),ee?ee():H&&H()},Y.appendChild(Q),Y.listener=function(be){L(be)&&Q.click()},U(Y,K),B(Y,K)},C=d.date=function(x,H,q){var ue=x.value,te=ue===void 0?new Date:ue,ee=x.submitText,we=ee===void 0?"OK":ee,ke=x.cancelText,K=ke===void 0?"Cancel":ke,Y=x.submitCallback,ne=x.cancelCallback,ye=x.position,Q=ye===void 0?p.positions.date||Q.top:ye;S(),O();var be="&#9662",Fe=document.createElement("div"),De=document.createElement("div"),ae=document.createElement("div"),ze=function(Oe){Fe.innerHTML=p.dateMonths[Oe.getMonth()],De.innerHTML=Oe.getDate(),ae.innerHTML=Oe.getFullYear()},Re=function(Oe){var Se=new Date(te.getFullYear(),te.getMonth()+1,0).getDate(),kt=Oe.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(kt)>Se&&(kt=Se.toString()),Oe.target.textContent=kt,Number(kt)<1&&(kt="1"),te.setDate(Number(kt))},_e=function(Oe){var Se=Oe.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);Oe.target.textContent=Se,te.setFullYear(Number(Se))},Me=function(Oe){ze(te)},Le=function(Oe){var Se=new Date(te.getFullYear(),te.getMonth()+Oe+1,0).getDate();te.getDate()>Se&&te.setDate(Se),te.setMonth(te.getMonth()+Oe),ze(te)},mt=function(Oe){te.setDate(te.getDate()+Oe),ze(te)},Vt=function(Oe){var Se=te.getFullYear()+Oe;Se<0?te.setFullYear(0):te.setFullYear(te.getFullYear()+Oe),ze(te)},Lt=document.createElement("div"),R=E();Lt.id=R;var oe=document.createElement("div");oe.classList.add(p.classes.backgroundInfo);var Te=document.createElement("div");Te.classList.add(p.classes.dateSelectorInner);var fe=document.createElement("div");fe.classList.add(p.classes.button),fe.classList.add(p.classes.elementThird),fe.classList.add(p.classes.dateSelectorUp),fe.innerHTML=be;var ce=document.createElement("div");ce.classList.add(p.classes.button),ce.classList.add(p.classes.elementThird),ce.classList.add(p.classes.dateSelectorUp),ce.innerHTML=be;var qe=document.createElement("div");qe.classList.add(p.classes.button),qe.classList.add(p.classes.elementThird),qe.classList.add(p.classes.dateSelectorUp),qe.innerHTML=be,Fe.classList.add(p.classes.element),Fe.classList.add(p.classes.elementThird),Fe.innerHTML=p.dateMonths[te.getMonth()],De.classList.add(p.classes.element),De.classList.add(p.classes.elementThird),De.setAttribute("contentEditable",!0),De.addEventListener("input",Re),De.addEventListener("blur",Me),De.innerHTML=te.getDate(),ae.classList.add(p.classes.element),ae.classList.add(p.classes.elementThird),ae.setAttribute("contentEditable",!0),ae.addEventListener("input",_e),ae.addEventListener("blur",Me),ae.innerHTML=te.getFullYear();var ut=document.createElement("div");ut.classList.add(p.classes.button),ut.classList.add(p.classes.elementThird),ut.innerHTML=be;var Ke=document.createElement("div");Ke.classList.add(p.classes.button),Ke.classList.add(p.classes.elementThird),Ke.innerHTML=be;var nn=document.createElement("div");nn.classList.add(p.classes.button),nn.classList.add(p.classes.elementThird),nn.innerHTML=be,fe.onclick=function(){return Le(1)},ce.onclick=function(){return mt(1)},qe.onclick=function(){return Vt(1)},ut.onclick=function(){return Le(-1)},Ke.onclick=function(){return mt(-1)},nn.onclick=function(){return Vt(-1)};var pt=document.createElement("div");pt.classList.add(p.classes.button),pt.classList.add(p.classes.elementHalf),pt.classList.add(p.classes.backgroundSuccess),pt.innerHTML=we,pt.onclick=function(){v(R,Q),X(),Y?Y(te):H&&H(te)};var un=document.createElement("div");un.classList.add(p.classes.button),un.classList.add(p.classes.elementHalf),un.classList.add(p.classes.backgroundError),un.innerHTML=K,un.onclick=function(){v(R,Q),X(),ne?ne(te):q&&q(te)},Te.appendChild(fe),Te.appendChild(ce),Te.appendChild(qe),Te.appendChild(Fe),Te.appendChild(De),Te.appendChild(ae),Te.appendChild(ut),Te.appendChild(Ke),Te.appendChild(nn),oe.appendChild(Te),Lt.appendChild(oe),Lt.appendChild(pt),Lt.appendChild(un),Lt.listener=function(Oe){D(Oe)?pt.click():L(Oe)&&un.click()},U(Lt,Q),B(Lt,Q)};d.default={alert:Z,force:ve,confirm:V,input:J,select:xe,date:C,setOptions:_,hideAlerts:O}}])})}).call(u,a(0)(n))}])})}),rc={};M3(rc,{default:()=>Ya});var O3=uc(ac());R3(rc,uc(ac()));var{default:nc,...N3}=O3,Ya=nc!==void 0?nc:N3;var X2=Symbol("clean");var Q2=Symbol();function pi(e,t){if(typeof e=="string")return t(e);{let n={};for(let u in e)n[u]=pi(e[u],t);return n}}function ic(e){return t=>{if(t.transform){let n=t.transform;return t=t.input,{input:t,transform(u,a,r){let o=e(u,a,...r);return(...i)=>n(u,o,i)}}}else return{input:t,transform(n,u,a){return e(n,u,...a)}}}}var iy=ic((e,t,n)=>pi(t,u=>{for(let a in n)u=u.replace(new RegExp(`{${a}}`,"g"),n[a]);return u})),sy=ic((e,t,n)=>{let u=new Intl.PluralRules(e).select(n);return u in t||(u="many"),pi(t[u],a=>a.replace(/{count}/g,n))});var fi=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function hi(e,t,n,u){e.addEventListener?e.addEventListener(t,n,u):e.attachEvent&&e.attachEvent("on".concat(t),function(){n(window.event)})}function gc(e,t){for(var n=t.slice(0,t.length-1),u=0;u<n.length;u++)n[u]=e[n[u].toLowerCase()];return n}function mc(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function z3(e,t){for(var n=e.length>=t.length?e:t,u=e.length>=t.length?t:e,a=!0,r=0;r<n.length;r++)u.indexOf(n[r])===-1&&(a=!1);return a}var Qu={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":fi?173:189,"=":fi?61:187,";":fi?59:186,"'":222,"[":219,"]":221,"\\":220},Xt={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},yi={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},at={16:!1,18:!1,17:!1,91:!1},$e={};for(Xu=1;Xu<20;Xu++)Qu["f".concat(Xu)]=111+Xu;var Xu,Be=[],sc=!1,pc="all",fc=[],Qa=function(e){return Qu[e.toLowerCase()]||Xt[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},U3=function(e){return Object.keys(Qu).find(function(t){return Qu[t]===e})},H3=function(e){return Object.keys(Xt).find(function(t){return Xt[t]===e})};function hc(e){pc=e||"all"}function Zu(){return pc||"all"}function W3(){return Be.slice(0)}function q3(){return Be.map(function(e){return U3(e)||H3(e)||String.fromCharCode(e)})}function K3(e){var t=e.target||e.srcElement,n=t.tagName,u=!0;return(t.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!t.readOnly)&&(u=!1),u}function $3(e){return typeof e=="string"&&(e=Qa(e)),Be.indexOf(e)!==-1}function G3(e,t){var n,u;e||(e=Zu());for(var a in $e)if(Object.prototype.hasOwnProperty.call($e,a))for(n=$e[a],u=0;u<n.length;)n[u].scope===e?n.splice(u,1):u++;Zu()===e&&hc(t||"all")}function V3(e){var t=e.keyCode||e.which||e.charCode,n=Be.indexOf(t);if(n>=0&&Be.splice(n,1),e.key&&e.key.toLowerCase()==="meta"&&Be.splice(0,Be.length),(t===93||t===224)&&(t=91),t in at){at[t]=!1;for(var u in Xt)Xt[u]===t&&(je[u]=!1)}}function J3(e){if(typeof e>"u")Object.keys($e).forEach(function(o){return delete $e[o]});else if(Array.isArray(e))e.forEach(function(o){o.key&&bi(o)});else if(typeof e=="object")e.key&&bi(e);else if(typeof e=="string"){for(var t=arguments.length,n=new Array(t>1?t-1:0),u=1;u<t;u++)n[u-1]=arguments[u];var a=n[0],r=n[1];typeof a=="function"&&(r=a,a=""),bi({key:e,scope:a,method:r,splitKey:"+"})}}var bi=function(e){var t=e.key,n=e.scope,u=e.method,a=e.splitKey,r=a===void 0?"+":a,o=mc(t);o.forEach(function(i){var s=i.split(r),l=s.length,c=s[l-1],d=c==="*"?"*":Qa(c);if($e[d]){n||(n=Zu());var g=l>1?gc(Xt,s):[];$e[d]=$e[d].filter(function(m){var f=u?m.method===u:!0;return!(f&&m.scope===n&&z3(m.mods,g))})}})};function lc(e,t,n,u){if(t.element===u){var a;if(t.scope===n||t.scope==="all"){a=t.mods.length>0;for(var r in at)Object.prototype.hasOwnProperty.call(at,r)&&(!at[r]&&t.mods.indexOf(+r)>-1||at[r]&&t.mods.indexOf(+r)===-1)&&(a=!1);(t.mods.length===0&&!at[16]&&!at[18]&&!at[17]&&!at[91]||a||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function cc(e,t){var n=$e["*"],u=e.keyCode||e.which||e.charCode;if(je.filter.call(this,e)){if((u===93||u===224)&&(u=91),Be.indexOf(u)===-1&&u!==229&&Be.push(u),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(f){var w=yi[f];e[f]&&Be.indexOf(w)===-1?Be.push(w):!e[f]&&Be.indexOf(w)>-1?Be.splice(Be.indexOf(w),1):f==="metaKey"&&e[f]&&Be.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(Be=Be.slice(Be.indexOf(w))))}),u in at){at[u]=!0;for(var a in Xt)Xt[a]===u&&(je[a]=!0);if(!n)return}for(var r in at)Object.prototype.hasOwnProperty.call(at,r)&&(at[r]=e[yi[r]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(Be.indexOf(17)===-1&&Be.push(17),Be.indexOf(18)===-1&&Be.push(18),at[17]=!0,at[18]=!0);var o=Zu();if(n)for(var i=0;i<n.length;i++)n[i].scope===o&&(e.type==="keydown"&&n[i].keydown||e.type==="keyup"&&n[i].keyup)&&lc(e,n[i],o,t);if(u in $e){for(var s=0;s<$e[u].length;s++)if((e.type==="keydown"&&$e[u][s].keydown||e.type==="keyup"&&$e[u][s].keyup)&&$e[u][s].key){for(var l=$e[u][s],c=l.splitKey,d=l.key.split(c),g=[],m=0;m<d.length;m++)g.push(Qa(d[m]));g.sort().join("")===Be.sort().join("")&&lc(e,l,o,t)}}}}function Y3(e){return fc.indexOf(e)>-1}function je(e,t,n){Be=[];var u=mc(e),a=[],r="all",o=document,i=0,s=!1,l=!0,c="+",d=!1;for(n===void 0&&typeof t=="function"&&(n=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(r=t.scope),t.element&&(o=t.element),t.keyup&&(s=t.keyup),t.keydown!==void 0&&(l=t.keydown),t.capture!==void 0&&(d=t.capture),typeof t.splitKey=="string"&&(c=t.splitKey)),typeof t=="string"&&(r=t);i<u.length;i++)e=u[i].split(c),a=[],e.length>1&&(a=gc(Xt,e)),e=e[e.length-1],e=e==="*"?"*":Qa(e),e in $e||($e[e]=[]),$e[e].push({keyup:s,keydown:l,scope:r,mods:a,shortcut:u[i],method:n,key:u[i],splitKey:c,element:o});typeof o<"u"&&!Y3(o)&&window&&(fc.push(o),hi(o,"keydown",function(g){cc(g,o)},d),sc||(sc=!0,hi(window,"focus",function(){Be=[]},d)),hi(o,"keyup",function(g){cc(g,o),V3(g)},d))}function X3(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys($e).forEach(function(n){var u=$e[n].filter(function(a){return a.scope===t&&a.shortcut===e});u.forEach(function(a){a&&a.method&&a.method()})})}var Ei={getPressedKeyString:q3,setScope:hc,getScope:Zu,deleteScope:G3,getPressedKeyCodes:W3,isPressed:$3,filter:K3,trigger:X3,unbind:J3,keyMap:Qu,modifier:Xt,modifierMap:yi};for(Xa in Ei)Object.prototype.hasOwnProperty.call(Ei,Xa)&&(je[Xa]=Ei[Xa]);var Xa;typeof document<"u"&&(dc=window.hotkeys,je.noConflict=function(e){return e&&window.hotkeys===je&&(window.hotkeys=dc),je},window.hotkeys=je);var dc;var Q3=class{#e=performance.now();reset(){this.#e=performance.now()}stop(e){let t=performance.now(),n=Math.round(t-this.#e);this.#e=t}},Z3=class{#e=1;get level(){return this.#e}setLevel(e){switch(e){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...e){this.#e<=0}v(...e){this.#e<=0}info(...e){this.#e<=1}l(...e){this.#e<=1}warn(...e){this.#e<=2}error(...e){this.#e<=3}fatal(...e){this.#e<=4}timing(){return this.level===0?new Q3:{reset:()=>{},stop:()=>{}}}},Ti=new Z3,ef="poegempjloogba",tf="ension://",nf="me-";function ea(e){if(!e)return[!1,!0];let t=new Date(e).getTime(),n=new Date().getTime(),u=t-n<15e3;return[t-n>3e3,u]}function wc(e){return e?e.PROD==="1":!0}function Cc(e){return e?e.MOCK==="1":!1}function vc(e){return new Promise((t,n)=>{setTimeout(()=>{t()},e)})}var uf="rome-ext";function af(e,t){return t?e+(t-e%t):e}function rf(e,t){return e.split(t).length-1}function of(e){let t=Date.now(),n=1;for(let u of e)n+=rf(u,"i");return af(t,n)}function sf(e,t){return Math.floor(Math.random()*(t-e+1))+e}var lf="extension",cf="chro";function df(){return sf(1e6,1e8)}var bc="BrowserExt";function gf(e){return JSON.stringify(e).replace('"method":"',()=>{let t=e;return(t.id+3)%13===0||(t.id+5)%29===0?'"method" : "':'"method": "'})}var Ec="DeepL",yc="ension",mf="ch"+uf+tf+"cofdb"+ef+"gkncekinflcnj";function Ac(e){let{contentType:t,userAgent:n,url:u,authorization:a,clientVersion:r}=e,o=new URL(u),i=new Headers;if(i.append("authority",o.hostname),i.append("accept","*/*"),i.append("accept-language","ja"),a&&i.append("authorization",`Bearer ${a}`),i.append("cache-control","no-cache"),t?i.append("content-type",t):i.append("content-type","application/json; charset=utf-8"),i.append("origin",mf),i.append("pragma","no-cache"),i.append("referer","https://www.deepl.com/"),i.append("sec-fetch-dest","empty"),i.append("sec-fetch-mode","cors"),i.append("sec-fetch-site","none"),n)i.append("user-agent",n);else if(globalThis&&globalThis.navigator&&globalThis.navigator.userAgent){let l=globalThis.navigator.userAgent;i.append("user-agent",`${Ec}${bc}${yc}/${r||"1.1.1"} ${l}`)}else i.append("user-agent",`${Ec}${bc}${yc}/${r||"1.1.1"} Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.78`);let s={};for(let[l,c]of i.entries())s[l]=c;return s}function pf(e){let t="1.1.1",{texts:n,target_lang:u,source_lang:a}=e,r={jsonrpc:"2.0",method:"LMT_handle_texts",params:{texts:n.map(i=>({text:i})),html:"enabled",lang:{target_lang:u,source_lang_user_selected:a||"auto",preference:{weight:{BG:.00119,CS:.04360000000000001,DA:.007090000000000001,DE:.02142,EL:.00287,EN:4.79277,ES:.029710000000000004,ET:.007300000000000001,FI:.013850000000000001,FR:.04227,HU:.019000000000000003,ID:.00423,IT:.03592,JA:.00453,LT:.031700000000000006,LV:.0027,NL:.02375,PL:.044520000000000004,PT:.017320000000000002,RO:.009040000000000001,RU:.00234,SK:.04977,SL:.00691,SV:.0049700000000000005,TR:.01076,UK:.00201,ZH:.004880000000000001}}},timestamp:of(n)},id:df()},o=Ac({url:"https://api.deepl.com/jsonrpc",clientVersion:t,authorization:e.authorization});return{url:`https://api.deepl.com/jsonrpc?client=${cf+nf+lf},${t}`,headers:o,body:gf(r),method:"POST"}}function ff(e){let t=e.split(".");if(t.length<=1)throw new Error("invlaid token");let n=t[1];if(!n)throw new Error("invalid base64 url token");let u=n.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(globalThis.atob(u).split("").map(function(i){return"%"+("00"+i.charCodeAt(0).toString(16)).slice(-2)}).join("")),r=JSON.parse(a),o=new Date(r.exp*1e3);return{accessToken:e,accessTokenExpiresAt:o.toISOString()}}var zn={},Un={};async function Tc(e,t){if(!e)throw new Error("auth key is required");let{state:n}=t,{refreshToken:u,refreshTokenExpiresAt:a,refreshTokenChecksAt:r}=n,[o,i]=ea(a);i||(i=ea(r)[1]);let s={refreshToken:u,refreshTokenExpiresAt:a,refreshTokenChecksAt:r||new Date().toISOString()};o||(s=await Za(e,t));let[l,c]=ea(s.refreshTokenExpiresAt);i=c,i||(i=ea(s.refreshTokenChecksAt)[1]);let d=s.refreshToken;if(zn[d])return new Promise((g,m)=>{zn[d].push((f,w)=>{f?m(f):g(w)})});zn[d]=[];try{let g=await hf(d,t.onFetch),m={state:{...n,...s,...g},shouldUpdateRefreshToken:i};return zn[d].forEach(f=>{f(null,m)}),delete zn[d],m}catch(g){throw zn[d].forEach(m=>{m(g)}),delete zn[d],g}}async function Za(e,t){if(!e)throw new Error("auth key is required");let{refreshTokenEndpoint:n,onFetch:u}=t;if(Un[e])return new Promise((a,r)=>{Un[e].push((o,i)=>{o?r(o):a(i)})});try{Un[e]=[];let a=new URLSearchParams({grant_type:"auth_key",auth_key:e}),r=new URL("/refresh_token?"+a.toString(),n),o=await u(r.toString()),i=new Date().getTime(),s=i+o.refresh_token_expires_in*1e3,l=i+o.refresh_token_checks_in*1e3,c={refreshToken:o.refresh_token,refreshTokenExpiresAt:new Date(s).toISOString(),refreshTokenChecksAt:new Date(l).toISOString()};return Un[e].forEach(d=>{d(null,c)}),delete Un[e],c}catch(a){throw Un[e].forEach(r=>{r(a)}),delete Un[e],a}}async function hf(e,t){if(!e)throw new Error("refreshToken is required");let n=wc(),u=Cc();if(!n&&!u){await vc(400);let i=new Date;return{accessToken:"test",accessTokenExpiresAt:new Date(i.getTime()+1e3*5).toISOString()}}let a="https://w.deepl.com/oidc/token",r=await t(a,{headers:Ac({url:a,contentType:"application/x-www-form-urlencoded"}),body:`grant_type=refresh_token&refresh_token=${e}`,method:"POST"}),o=ff(r.access_token);if(r.expires_in){let i=new Date,s=new Date(i.getTime()+r.expires_in*1e3);o.accessTokenExpiresAt=s.toISOString()}return o}async function xc(e,t,n){if(!t)throw new Error("body is required");let u=new URLSearchParams(t),a=u.getAll("text");if(a.length<1)throw new Error("No text to translate");if(bf(a)>5e3)throw new Error("text too long, the max length is 5000 characters.");let r=u.get("target_lang");if(!r)throw new Error("No target language");let o=u.get("source_lang"),i={...pf({texts:a,authorization:e,target_lang:r,source_lang:o}),responseType:"raw"},s=wc(),l=Cc();if(!s&&!l)return await vc(50),{translations:a.map(m=>({text:"mock: "+m,detected_source_language:"EN"}))};let c=await n(i.url,i),d=JSON.parse(c.body),g=[];if(d.result&&d.result.texts)g=d.result.texts.map(m=>({text:m.text,detected_source_language:d.result.lang}));else throw new Error("No response from deepl api");return{translations:g}}function bf(e){let t=0;for(let n of e)t+=n.length;return t}async function Ef(e){e.body;let{url:t,responseType:n,...u}=e;n||(n="json"),u={redirect:"follow",...u};let a=await yf(t,u);if(a.ok&&a.status>=200&&a.status<400)if(n==="json"){let r=await a.json();return Ti.debug("response",JSON.stringify(r,null,2)),r}else{if(n==="text")return await a.text();if(n==="raw"){let r=await a.text(),o=Object.fromEntries([...a.headers.entries()]),i=a.url;return{body:r,headers:o,status:a.status,statusText:a.statusText,url:i}}}else{let r;try{r=await a.text()}catch(o){Ti.error("parse response failed",o)}throw new Error(a.status+": "+a.statusText||" "+r||"")}}async function yf(e,t){let n=15e3;t&&t.timeout&&(n=t.timeout);let u=new AbortController,a=setTimeout(()=>u.abort(),n),r=await fetch(e,{...t,signal:u.signal});return clearTimeout(a),r}var er=class{constructor(e,t){this.state={},this.isStateChanged=!1,this.onFetch=(n,u)=>Ef({url:n,...u}),this.refreshTokenEndpoint="https://api.immersivetranslate.com",this.authKey=e,t=t||{},t.state&&(this.state=t.state),t.onFetch&&(this.onFetch=t.onFetch),t.refreshTokenEndpoint&&(this.refreshTokenEndpoint=t.refreshTokenEndpoint),t.onStateChange&&(this.onStateChange=t.onStateChange)}getState(){return this.state}getIsStateChanged(){let e=this.isStateChanged;return this.isStateChanged=!1,e}setState(e){this.state=e,this.isStateChanged=!0,this.onStateChange&&this.onStateChange(e)}async translateText(e,t,n){await this.updateToken();let u=new URLSearchParams;(Array.isArray(e)?e:[e]).forEach((r,o)=>{u.append("text",r)}),t&&u.append("source_lang",t),n&&u.append("target_lang",n);let a=await xc(this.state.accessToken,u.toString(),this.onFetch);if(a&&a.translations&&a.translations.length>0)return Array.isArray(e)?a.translations.map(r=>({text:r.text,detectedSourceLanguage:r.detected_source_language})):{text:a.translations[0].text,detectedSourceLanguage:a.translations[0].detected_source_language};throw new Error("No translation result")}async translateApi(e){return await this.updateToken(),await xc(this.state.accessToken,e,this.onFetch)}async forceUpdateRefreshToken(){await Za(this.authKey,{state:this.state,onFetch:this.onFetch,refreshTokenEndpoint:this.refreshTokenEndpoint}).then(e=>{this.setState({...this.state,...e})})}onFetchTokenError(e){throw Ti.error("onFetchTokenError",e),e&&e.message&&(e.message.indexOf("401")>-1||e.message.indexOf("400")>-1)&&this.setState({}),e}async updateToken(){let{accessTokenExpiresAt:e}=this.state,[t,n]=ea(e);if(t)n&&Tc(this.authKey,{state:this.state,onFetch:this.onFetch,refreshTokenEndpoint:this.refreshTokenEndpoint}).then(({state:u,shouldUpdateRefreshToken:a})=>{this.setState({...this.state,...u}),a&&Za(this.authKey,{state:this.state,onFetch:this.onFetch,refreshTokenEndpoint:this.refreshTokenEndpoint}).then(r=>{this.setState({...this.state,...r})})}).catch(u=>{this.onFetchTokenError(u)});else try{let{state:u,shouldUpdateRefreshToken:a}=await Tc(this.authKey,{state:this.state,onFetch:this.onFetch,refreshTokenEndpoint:this.refreshTokenEndpoint});this.setState(u),a&&Za(this.authKey,{state:this.state,onFetch:this.onFetch,refreshTokenEndpoint:this.refreshTokenEndpoint}).then(r=>{this.setState({...this.state,...r})}).catch(r=>{})}catch(u){this.onFetchTokenError(u)}}};var Tf={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},Dc={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},He={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},bt={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},bn={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"},P=class{static getFirstMatch(e,t){let n=t.match(e);return n&&n.length>0&&n[1]||""}static getSecondMatch(e,t){let n=t.match(e);return n&&n.length>1&&n[2]||""}static matchAndReturnConst(e,t,n){if(e.test(t))return n}static getWindowsVersionName(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(e){let t=e.split(".").splice(0,2).map(n=>parseInt(n,10)||0);if(t.push(0),t[0]===10)switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(e){let t=e.split(".").splice(0,2).map(n=>parseInt(n,10)||0);if(t.push(0),!(t[0]===1&&t[1]<5)){if(t[0]===1&&t[1]<6)return"Cupcake";if(t[0]===1&&t[1]>=6)return"Donut";if(t[0]===2&&t[1]<2)return"Eclair";if(t[0]===2&&t[1]===2)return"Froyo";if(t[0]===2&&t[1]>2)return"Gingerbread";if(t[0]===3)return"Honeycomb";if(t[0]===4&&t[1]<1)return"Ice Cream Sandwich";if(t[0]===4&&t[1]<4)return"Jelly Bean";if(t[0]===4&&t[1]>=4)return"KitKat";if(t[0]===5)return"Lollipop";if(t[0]===6)return"Marshmallow";if(t[0]===7)return"Nougat";if(t[0]===8)return"Oreo";if(t[0]===9)return"Pie"}}static getVersionPrecision(e){return e.split(".").length}static compareVersions(e,t,n=!1){let u=P.getVersionPrecision(e),a=P.getVersionPrecision(t),r=Math.max(u,a),o=0,i=P.map([e,t],s=>{let l=r-P.getVersionPrecision(s),c=s+new Array(l+1).join(".0");return P.map(c.split("."),d=>new Array(20-d.length).join("0")+d).reverse()});for(n&&(o=r-Math.min(u,a)),r-=1;r>=o;){if(i[0][r]>i[1][r])return 1;if(i[0][r]===i[1][r]){if(r===o)return 0;r-=1}else if(i[0][r]<i[1][r])return-1}}static map(e,t){let n=[],u;if(Array.prototype.map)return Array.prototype.map.call(e,t);for(u=0;u<e.length;u+=1)n.push(t(e[u]));return n}static find(e,t){let n,u;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(n=0,u=e.length;n<u;n+=1){let a=e[n];if(t(a,n))return a}}static assign(e,...t){let n=e,u,a;if(Object.assign)return Object.assign(e,...t);for(u=0,a=t.length;u<a;u+=1){let r=t[u];typeof r=="object"&&r!==null&&Object.keys(r).forEach(o=>{n[o]=r[o]})}return e}static getBrowserAlias(e){return Tf[e]}static getBrowserTypeByAlias(e){return Dc[e]||""}},Pe=/version\/(\d+(\.?_?\d+)+)/i,xf=[{test:[/googlebot/i],describe(e){let t={name:"Googlebot"},n=P.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||P.getFirstMatch(Pe,e);return n&&(t.version=n),t}},{test:[/opera/i],describe(e){let t={name:"Opera"},n=P.getFirstMatch(Pe,e)||P.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/opr\/|opios/i],describe(e){let t={name:"Opera"},n=P.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||P.getFirstMatch(Pe,e);return n&&(t.version=n),t}},{test:[/SamsungBrowser/i],describe(e){let t={name:"Samsung Internet for Android"},n=P.getFirstMatch(Pe,e)||P.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/Whale/i],describe(e){let t={name:"NAVER Whale Browser"},n=P.getFirstMatch(Pe,e)||P.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/MZBrowser/i],describe(e){let t={name:"MZ Browser"},n=P.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||P.getFirstMatch(Pe,e);return n&&(t.version=n),t}},{test:[/focus/i],describe(e){let t={name:"Focus"},n=P.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||P.getFirstMatch(Pe,e);return n&&(t.version=n),t}},{test:[/swing/i],describe(e){let t={name:"Swing"},n=P.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||P.getFirstMatch(Pe,e);return n&&(t.version=n),t}},{test:[/coast/i],describe(e){let t={name:"Opera Coast"},n=P.getFirstMatch(Pe,e)||P.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(e){let t={name:"Opera Touch"},n=P.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||P.getFirstMatch(Pe,e);return n&&(t.version=n),t}},{test:[/yabrowser/i],describe(e){let t={name:"Yandex Browser"},n=P.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||P.getFirstMatch(Pe,e);return n&&(t.version=n),t}},{test:[/ucbrowser/i],describe(e){let t={name:"UC Browser"},n=P.getFirstMatch(Pe,e)||P.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/Maxthon|mxios/i],describe(e){let t={name:"Maxthon"},n=P.getFirstMatch(Pe,e)||P.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/epiphany/i],describe(e){let t={name:"Epiphany"},n=P.getFirstMatch(Pe,e)||P.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/puffin/i],describe(e){let t={name:"Puffin"},n=P.getFirstMatch(Pe,e)||P.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/sleipnir/i],describe(e){let t={name:"Sleipnir"},n=P.getFirstMatch(Pe,e)||P.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/k-meleon/i],describe(e){let t={name:"K-Meleon"},n=P.getFirstMatch(Pe,e)||P.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/micromessenger/i],describe(e){let t={name:"WeChat"},n=P.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||P.getFirstMatch(Pe,e);return n&&(t.version=n),t}},{test:[/qqbrowser/i],describe(e){let t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},n=P.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||P.getFirstMatch(Pe,e);return n&&(t.version=n),t}},{test:[/msie|trident/i],describe(e){let t={name:"Internet Explorer"},n=P.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/\sedg\//i],describe(e){let t={name:"Microsoft Edge"},n=P.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/edg([ea]|ios)/i],describe(e){let t={name:"Microsoft Edge"},n=P.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/vivaldi/i],describe(e){let t={name:"Vivaldi"},n=P.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/seamonkey/i],describe(e){let t={name:"SeaMonkey"},n=P.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/sailfish/i],describe(e){let t={name:"Sailfish"},n=P.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return n&&(t.version=n),t}},{test:[/silk/i],describe(e){let t={name:"Amazon Silk"},n=P.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/phantom/i],describe(e){let t={name:"PhantomJS"},n=P.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/slimerjs/i],describe(e){let t={name:"SlimerJS"},n=P.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(e){let t={name:"BlackBerry"},n=P.getFirstMatch(Pe,e)||P.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/(web|hpw)[o0]s/i],describe(e){let t={name:"WebOS Browser"},n=P.getFirstMatch(Pe,e)||P.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/bada/i],describe(e){let t={name:"Bada"},n=P.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/tizen/i],describe(e){let t={name:"Tizen"},n=P.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||P.getFirstMatch(Pe,e);return n&&(t.version=n),t}},{test:[/qupzilla/i],describe(e){let t={name:"QupZilla"},n=P.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||P.getFirstMatch(Pe,e);return n&&(t.version=n),t}},{test:[/firefox|iceweasel|fxios/i],describe(e){let t={name:"Firefox"},n=P.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/electron/i],describe(e){let t={name:"Electron"},n=P.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/MiuiBrowser/i],describe(e){let t={name:"Miui"},n=P.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/chromium/i],describe(e){let t={name:"Chromium"},n=P.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||P.getFirstMatch(Pe,e);return n&&(t.version=n),t}},{test:[/chrome|crios|crmo/i],describe(e){let t={name:"Chrome"},n=P.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/GSA/i],describe(e){let t={name:"Google Search"},n=P.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test(e){let t=!e.test(/like android/i),n=e.test(/android/i);return t&&n},describe(e){let t={name:"Android Browser"},n=P.getFirstMatch(Pe,e);return n&&(t.version=n),t}},{test:[/playstation 4/i],describe(e){let t={name:"PlayStation 4"},n=P.getFirstMatch(Pe,e);return n&&(t.version=n),t}},{test:[/safari|applewebkit/i],describe(e){let t={name:"Safari"},n=P.getFirstMatch(Pe,e);return n&&(t.version=n),t}},{test:[/.*/i],describe(e){let t=/^(.*)\/(.*) /,n=/^(.*)\/(.*)[ \t]\((.*)/,u=e.search("\\(")!==-1?n:t;return{name:P.getFirstMatch(u,e),version:P.getSecondMatch(u,e)}}}],wf=xf,Cf=[{test:[/Roku\/DVP/],describe(e){let t=P.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:bt.Roku,version:t}}},{test:[/windows phone/i],describe(e){let t=P.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:bt.WindowsPhone,version:t}}},{test:[/windows /i],describe(e){let t=P.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),n=P.getWindowsVersionName(t);return{name:bt.Windows,version:t,versionName:n}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(e){let t={name:bt.iOS},n=P.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return n&&(t.version=n),t}},{test:[/macintosh/i],describe(e){let t=P.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),n=P.getMacOSVersionName(t),u={name:bt.MacOS,version:t};return n&&(u.versionName=n),u}},{test:[/(ipod|iphone|ipad)/i],describe(e){let t=P.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:bt.iOS,version:t}}},{test(e){let t=!e.test(/like android/i),n=e.test(/android/i);return t&&n},describe(e){let t=P.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),n=P.getAndroidVersionName(t),u={name:bt.Android,version:t};return n&&(u.versionName=n),u}},{test:[/(web|hpw)[o0]s/i],describe(e){let t=P.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),n={name:bt.WebOS};return t&&t.length&&(n.version=t),n}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(e){let t=P.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||P.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||P.getFirstMatch(/\bbb(\d+)/i,e);return{name:bt.BlackBerry,version:t}}},{test:[/bada/i],describe(e){let t=P.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:bt.Bada,version:t}}},{test:[/tizen/i],describe(e){let t=P.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:bt.Tizen,version:t}}},{test:[/linux/i],describe(){return{name:bt.Linux}}},{test:[/CrOS/],describe(){return{name:bt.ChromeOS}}},{test:[/PlayStation 4/],describe(e){let t=P.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:bt.PlayStation4,version:t}}}],vf=[{test:[/googlebot/i],describe(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe(e){let t=P.getFirstMatch(/(can-l01)/i,e)&&"Nova",n={type:He.mobile,vendor:"Huawei"};return t&&(n.model=t),n}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe(){return{type:He.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe(){return{type:He.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(){return{type:He.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe(){return{type:He.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe(){return{type:He.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe(){return{type:He.tablet}}},{test(e){let t=e.test(/ipod|iphone/i),n=e.test(/like (ipod|iphone)/i);return t&&!n},describe(e){let t=P.getFirstMatch(/(ipod|iphone)/i,e);return{type:He.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe(){return{type:He.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe(){return{type:He.mobile}}},{test(e){return e.getBrowserName(!0)==="blackberry"},describe(){return{type:He.mobile,vendor:"BlackBerry"}}},{test(e){return e.getBrowserName(!0)==="bada"},describe(){return{type:He.mobile}}},{test(e){return e.getBrowserName()==="windows phone"},describe(){return{type:He.mobile,vendor:"Microsoft"}}},{test(e){let t=Number(String(e.getOSVersion()).split(".")[0]);return e.getOSName(!0)==="android"&&t>=3},describe(){return{type:He.tablet}}},{test(e){return e.getOSName(!0)==="android"},describe(){return{type:He.mobile}}},{test(e){return e.getOSName(!0)==="macos"},describe(){return{type:He.desktop,vendor:"Apple"}}},{test(e){return e.getOSName(!0)==="windows"},describe(){return{type:He.desktop}}},{test(e){return e.getOSName(!0)==="linux"},describe(){return{type:He.desktop}}},{test(e){return e.getOSName(!0)==="playstation 4"},describe(){return{type:He.tv}}},{test(e){return e.getOSName(!0)==="roku"},describe(){return{type:He.tv}}}],Af=[{test(e){return e.getBrowserName(!0)==="microsoft edge"},describe(e){if(/\sedg\//i.test(e))return{name:bn.Blink};let t=P.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:bn.EdgeHTML,version:t}}},{test:[/trident/i],describe(e){let t={name:bn.Trident},n=P.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test(e){return e.test(/presto/i)},describe(e){let t={name:bn.Presto},n=P.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test(e){let t=e.test(/gecko/i),n=e.test(/like gecko/i);return t&&!n},describe(e){let t={name:bn.Gecko},n=P.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/(apple)?webkit\/537\.36/i],describe(){return{name:bn.Blink}}},{test:[/(apple)?webkit/i],describe(e){let t={name:bn.WebKit},n=P.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}}],kf=class{constructor(e,t=!1){if(e==null||e==="")throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},t!==!0&&this.parse()}getUA(){return this._ua}test(e){return e.test(this._ua)}parseBrowser(){this.parsedResult.browser={};let e=P.find(wf,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(n=>this.test(n));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.browser=e.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};let e=P.find(Cf,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(n=>this.test(n));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.os=e.describe(this.getUA())),this.parsedResult.os}getOSName(e){let{name:t}=this.getOS();return e?String(t).toLowerCase()||"":t||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(e=!1){let{type:t}=this.getPlatform();return e?String(t).toLowerCase()||"":t||""}parsePlatform(){this.parsedResult.platform={};let e=P.find(vf,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(n=>this.test(n));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.platform=e.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};let e=P.find(Af,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(n=>this.test(n));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.engine=e.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return P.assign({},this.parsedResult)}satisfies(e){let t={},n=0,u={},a=0;if(Object.keys(e).forEach(r=>{let o=e[r];typeof o=="string"?(u[r]=o,a+=1):typeof o=="object"&&(t[r]=o,n+=1)}),n>0){let r=Object.keys(t),o=P.find(r,s=>this.isOS(s));if(o){let s=this.satisfies(t[o]);if(s!==void 0)return s}let i=P.find(r,s=>this.isPlatform(s));if(i){let s=this.satisfies(t[i]);if(s!==void 0)return s}}if(a>0){let r=Object.keys(u),o=P.find(r,i=>this.isBrowser(i,!0));if(o!==void 0)return this.compareVersion(u[o])}}isBrowser(e,t=!1){let n=this.getBrowserName().toLowerCase(),u=e.toLowerCase(),a=P.getBrowserTypeByAlias(u);return t&&a&&(u=a.toLowerCase()),u===n}compareVersion(e){let t=[0],n=e,u=!1,a=this.getBrowserVersion();if(typeof a=="string")return e[0]===">"||e[0]==="<"?(n=e.substr(1),e[1]==="="?(u=!0,n=e.substr(2)):t=[],e[0]===">"?t.push(1):t.push(-1)):e[0]==="="?n=e.substr(1):e[0]==="~"&&(u=!0,n=e.substr(1)),t.indexOf(P.compareVersions(a,n,u))>-1}isOS(e){return this.getOSName(!0)===String(e).toLowerCase()}isPlatform(e){return this.getPlatformType(!0)===String(e).toLowerCase()}isEngine(e){return this.getEngineName(!0)===String(e).toLowerCase()}is(e,t=!1){return this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)}some(e=[]){return e.some(t=>this.is(t))}},kc=kf,Df=class{static getParser(e,t=!1){if(typeof e!="string")throw new Error("UserAgent should be a string");return new kc(e,t)}static parse(e){return new kc(e).getResult()}static get BROWSER_MAP(){return Dc}static get ENGINE_MAP(){return bn}static get OS_MAP(){return bt}static get PLATFORMS_MAP(){return He}},tr=Df;var{entries:Rc,setPrototypeOf:Sc,isFrozen:Sf,getPrototypeOf:Pf,getOwnPropertyDescriptor:Ff}=Object,{freeze:Et,seal:jt,create:Lf}=Object,{apply:ki,construct:Di}=typeof Reflect<"u"&&Reflect;ki||(ki=function(e,t,n){return e.apply(t,n)});Et||(Et=function(e){return e});jt||(jt=function(e){return e});Di||(Di=function(e,t){return new e(...t)});var Bf=Mt(Array.prototype.forEach),Pc=Mt(Array.prototype.pop),ta=Mt(Array.prototype.push),ar=Mt(String.prototype.toLowerCase),xi=Mt(String.prototype.toString),_f=Mt(String.prototype.match),It=Mt(String.prototype.replace),Mf=Mt(String.prototype.indexOf),Rf=Mt(String.prototype.trim),Dt=Mt(RegExp.prototype.test),na=Of(TypeError);function Mt(e){return function(t){for(var n=arguments.length,u=new Array(n>1?n-1:0),a=1;a<n;a++)u[a-1]=arguments[a];return ki(e,t,u)}}function Of(e){return function(){for(var t=arguments.length,n=new Array(t),u=0;u<t;u++)n[u]=arguments[u];return Di(e,n)}}function he(e,t,n){var u;n=(u=n)!==null&&u!==void 0?u:ar,Sc&&Sc(e,null);let a=t.length;for(;a--;){let r=t[a];if(typeof r=="string"){let o=n(r);o!==r&&(Sf(t)||(t[a]=o),r=o)}e[r]=!0}return e}function gu(e){let t=Lf(null);for(let[n,u]of Rc(e))t[n]=u;return t}function nr(e,t){for(;e!==null;){let u=Ff(e,t);if(u){if(u.get)return Mt(u.get);if(typeof u.value=="function")return Mt(u.value)}e=Pf(e)}function n(u){return null}return n}var Fc=Et(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),wi=Et(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ci=Et(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Nf=Et(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),vi=Et(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),If=Et(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Lc=Et(["#text"]),Bc=Et(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Ai=Et(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),_c=Et(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ur=Et(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),jf=jt(/\{\{[\w\W]*|[\w\W]*\}\}/gm),zf=jt(/<%[\w\W]*|[\w\W]*%>/gm),Uf=jt(/\${[\w\W]*}/gm),Hf=jt(/^data-[\-\w.\u00B7-\uFFFF]/),Wf=jt(/^aria-[\-\w]+$/),Oc=jt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),qf=jt(/^(?:\w+script|data):/i),Kf=jt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Nc=jt(/^html$/i),Mc=Object.freeze({__proto__:null,MUSTACHE_EXPR:jf,ERB_EXPR:zf,TMPLIT_EXPR:Uf,DATA_ATTR:Hf,ARIA_ATTR:Wf,IS_ALLOWED_URI:Oc,IS_SCRIPT_OR_DATA:qf,ATTR_WHITESPACE:Kf,DOCTYPE_NAME:Nc}),$f=()=>typeof window>"u"?null:window,Gf=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null,u="data-tt-policy-suffix";t&&t.hasAttribute(u)&&(n=t.getAttribute(u));let a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML(r){return r},createScriptURL(r){return r}})}catch{return null}};function Ic(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$f(),t=h=>Ic(h);if(t.version="3.0.3",t.removed=[],!e||!e.document||e.document.nodeType!==9)return t.isSupported=!1,t;let n=e.document,u=n.currentScript,{document:a}=e,{DocumentFragment:r,HTMLTemplateElement:o,Node:i,Element:s,NodeFilter:l,NamedNodeMap:c=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:d,DOMParser:g,trustedTypes:m}=e,f=s.prototype,w=nr(f,"cloneNode"),y=nr(f,"nextSibling"),p=nr(f,"childNodes"),_=nr(f,"parentNode");if(typeof o=="function"){let h=a.createElement("template");h.content&&h.content.ownerDocument&&(a=h.content.ownerDocument)}let M,A="",{implementation:S,createNodeIterator:E,createDocumentFragment:k,getElementsByTagName:T}=a,{importNode:D}=n,L={};t.isSupported=typeof Rc=="function"&&typeof _=="function"&&S&&S.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:U,ERB_EXPR:v,TMPLIT_EXPR:B,DATA_ATTR:X,ARIA_ATTR:O,IS_SCRIPT_OR_DATA:Z,ATTR_WHITESPACE:ve}=Mc,{IS_ALLOWED_URI:V}=Mc,J=null,xe=he({},[...Fc,...wi,...Ci,...vi,...Lc]),C=null,x=he({},[...Bc,...Ai,..._c,...ur]),H=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),q=null,ue=null,te=!0,ee=!0,we=!1,ke=!0,K=!1,Y=!1,ne=!1,ye=!1,Q=!1,be=!1,Fe=!1,De=!0,ae=!1,ze="user-content-",Re=!0,_e=!1,Me={},Le=null,mt=he({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Vt=null,Lt=he({},["audio","video","img","source","image","track"]),R=null,oe=he({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Te="http://www.w3.org/1998/Math/MathML",fe="http://www.w3.org/2000/svg",ce="http://www.w3.org/1999/xhtml",qe=ce,ut=!1,Ke=null,nn=he({},[Te,fe,ce],xi),pt,un=["application/xhtml+xml","text/html"],Oe="text/html",Se,kt=null,jm=a.createElement("form"),F0=function(h){return h instanceof RegExp||h instanceof Function},Oo=function(h){if(!(kt&&kt===h)){if((!h||typeof h!="object")&&(h={}),h=gu(h),pt=un.indexOf(h.PARSER_MEDIA_TYPE)===-1?pt=Oe:pt=h.PARSER_MEDIA_TYPE,Se=pt==="application/xhtml+xml"?xi:ar,J="ALLOWED_TAGS"in h?he({},h.ALLOWED_TAGS,Se):xe,C="ALLOWED_ATTR"in h?he({},h.ALLOWED_ATTR,Se):x,Ke="ALLOWED_NAMESPACES"in h?he({},h.ALLOWED_NAMESPACES,xi):nn,R="ADD_URI_SAFE_ATTR"in h?he(gu(oe),h.ADD_URI_SAFE_ATTR,Se):oe,Vt="ADD_DATA_URI_TAGS"in h?he(gu(Lt),h.ADD_DATA_URI_TAGS,Se):Lt,Le="FORBID_CONTENTS"in h?he({},h.FORBID_CONTENTS,Se):mt,q="FORBID_TAGS"in h?he({},h.FORBID_TAGS,Se):{},ue="FORBID_ATTR"in h?he({},h.FORBID_ATTR,Se):{},Me="USE_PROFILES"in h?h.USE_PROFILES:!1,te=h.ALLOW_ARIA_ATTR!==!1,ee=h.ALLOW_DATA_ATTR!==!1,we=h.ALLOW_UNKNOWN_PROTOCOLS||!1,ke=h.ALLOW_SELF_CLOSE_IN_ATTR!==!1,K=h.SAFE_FOR_TEMPLATES||!1,Y=h.WHOLE_DOCUMENT||!1,Q=h.RETURN_DOM||!1,be=h.RETURN_DOM_FRAGMENT||!1,Fe=h.RETURN_TRUSTED_TYPE||!1,ye=h.FORCE_BODY||!1,De=h.SANITIZE_DOM!==!1,ae=h.SANITIZE_NAMED_PROPS||!1,Re=h.KEEP_CONTENT!==!1,_e=h.IN_PLACE||!1,V=h.ALLOWED_URI_REGEXP||Oc,qe=h.NAMESPACE||ce,H=h.CUSTOM_ELEMENT_HANDLING||{},h.CUSTOM_ELEMENT_HANDLING&&F0(h.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(H.tagNameCheck=h.CUSTOM_ELEMENT_HANDLING.tagNameCheck),h.CUSTOM_ELEMENT_HANDLING&&F0(h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(H.attributeNameCheck=h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),h.CUSTOM_ELEMENT_HANDLING&&typeof h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(H.allowCustomizedBuiltInElements=h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),K&&(ee=!1),be&&(Q=!0),Me&&(J=he({},[...Lc]),C=[],Me.html===!0&&(he(J,Fc),he(C,Bc)),Me.svg===!0&&(he(J,wi),he(C,Ai),he(C,ur)),Me.svgFilters===!0&&(he(J,Ci),he(C,Ai),he(C,ur)),Me.mathMl===!0&&(he(J,vi),he(C,_c),he(C,ur))),h.ADD_TAGS&&(J===xe&&(J=gu(J)),he(J,h.ADD_TAGS,Se)),h.ADD_ATTR&&(C===x&&(C=gu(C)),he(C,h.ADD_ATTR,Se)),h.ADD_URI_SAFE_ATTR&&he(R,h.ADD_URI_SAFE_ATTR,Se),h.FORBID_CONTENTS&&(Le===mt&&(Le=gu(Le)),he(Le,h.FORBID_CONTENTS,Se)),Re&&(J["#text"]=!0),Y&&he(J,["html","head","body"]),J.table&&(he(J,["tbody"]),delete q.tbody),h.TRUSTED_TYPES_POLICY){if(typeof h.TRUSTED_TYPES_POLICY.createHTML!="function")throw na('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof h.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw na('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');M=h.TRUSTED_TYPES_POLICY,A=M.createHTML("")}else M===void 0&&(M=Gf(m,u)),M!==null&&typeof A=="string"&&(A=M.createHTML(""));Et&&Et(h),kt=h}},L0=he({},["mi","mo","mn","ms","mtext"]),B0=he({},["foreignobject","desc","title","annotation-xml"]),zm=he({},["title","style","font","a","script"]),va=he({},wi);he(va,Ci),he(va,Nf);let No=he({},vi);he(No,If);let Um=function(h){let W=_(h);(!W||!W.tagName)&&(W={namespaceURI:qe,tagName:"template"});let N=ar(h.tagName),Ae=ar(W.tagName);return Ke[h.namespaceURI]?h.namespaceURI===fe?W.namespaceURI===ce?N==="svg":W.namespaceURI===Te?N==="svg"&&(Ae==="annotation-xml"||L0[Ae]):!!va[N]:h.namespaceURI===Te?W.namespaceURI===ce?N==="math":W.namespaceURI===fe?N==="math"&&B0[Ae]:!!No[N]:h.namespaceURI===ce?W.namespaceURI===fe&&!B0[Ae]||W.namespaceURI===Te&&!L0[Ae]?!1:!No[N]&&(zm[N]||!va[N]):!!(pt==="application/xhtml+xml"&&Ke[h.namespaceURI]):!1},au=function(h){ta(t.removed,{element:h});try{h.parentNode.removeChild(h)}catch{h.remove()}},Io=function(h,W){try{ta(t.removed,{attribute:W.getAttributeNode(h),from:W})}catch{ta(t.removed,{attribute:null,from:W})}if(W.removeAttribute(h),h==="is"&&!C[h])if(Q||be)try{au(W)}catch{}else try{W.setAttribute(h,"")}catch{}},_0=function(h){let W,N;if(ye)h="<remove></remove>"+h;else{let ft=_f(h,/^[\r\n\t ]+/);N=ft&&ft[0]}pt==="application/xhtml+xml"&&qe===ce&&(h='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+h+"</body></html>");let Ae=M?M.createHTML(h):h;if(qe===ce)try{W=new g().parseFromString(Ae,pt)}catch{}if(!W||!W.documentElement){W=S.createDocument(qe,"template",null);try{W.documentElement.innerHTML=ut?A:Ae}catch{}}let Je=W.body||W.documentElement;return h&&N&&Je.insertBefore(a.createTextNode(N),Je.childNodes[0]||null),qe===ce?T.call(W,Y?"html":"body")[0]:Y?W.documentElement:Je},M0=function(h){return E.call(h.ownerDocument||h,h,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT,null,!1)},Hm=function(h){return h instanceof d&&(typeof h.nodeName!="string"||typeof h.textContent!="string"||typeof h.removeChild!="function"||!(h.attributes instanceof c)||typeof h.removeAttribute!="function"||typeof h.setAttribute!="function"||typeof h.namespaceURI!="string"||typeof h.insertBefore!="function"||typeof h.hasChildNodes!="function")},Aa=function(h){return typeof i=="object"?h instanceof i:h&&typeof h=="object"&&typeof h.nodeType=="number"&&typeof h.nodeName=="string"},an=function(h,W,N){L[h]&&Bf(L[h],Ae=>{Ae.call(t,W,N,kt)})},R0=function(h){let W;if(an("beforeSanitizeElements",h,null),Hm(h))return au(h),!0;let N=Se(h.nodeName);if(an("uponSanitizeElement",h,{tagName:N,allowedTags:J}),h.hasChildNodes()&&!Aa(h.firstElementChild)&&(!Aa(h.content)||!Aa(h.content.firstElementChild))&&Dt(/<[/\w]/g,h.innerHTML)&&Dt(/<[/\w]/g,h.textContent))return au(h),!0;if(!J[N]||q[N]){if(!q[N]&&N0(N)&&(H.tagNameCheck instanceof RegExp&&Dt(H.tagNameCheck,N)||H.tagNameCheck instanceof Function&&H.tagNameCheck(N)))return!1;if(Re&&!Le[N]){let Ae=_(h)||h.parentNode,Je=p(h)||h.childNodes;if(Je&&Ae){let ft=Je.length;for(let Ct=ft-1;Ct>=0;--Ct)Ae.insertBefore(w(Je[Ct],!0),y(h))}}return au(h),!0}return h instanceof s&&!Um(h)||(N==="noscript"||N==="noembed")&&Dt(/<\/no(script|embed)/i,h.innerHTML)?(au(h),!0):(K&&h.nodeType===3&&(W=h.textContent,W=It(W,U," "),W=It(W,v," "),W=It(W,B," "),h.textContent!==W&&(ta(t.removed,{element:h.cloneNode()}),h.textContent=W)),an("afterSanitizeElements",h,null),!1)},O0=function(h,W,N){if(De&&(W==="id"||W==="name")&&(N in a||N in jm))return!1;if(!(ee&&!ue[W]&&Dt(X,W))&&!(te&&Dt(O,W))){if(!C[W]||ue[W]){if(!(N0(h)&&(H.tagNameCheck instanceof RegExp&&Dt(H.tagNameCheck,h)||H.tagNameCheck instanceof Function&&H.tagNameCheck(h))&&(H.attributeNameCheck instanceof RegExp&&Dt(H.attributeNameCheck,W)||H.attributeNameCheck instanceof Function&&H.attributeNameCheck(W))||W==="is"&&H.allowCustomizedBuiltInElements&&(H.tagNameCheck instanceof RegExp&&Dt(H.tagNameCheck,N)||H.tagNameCheck instanceof Function&&H.tagNameCheck(N))))return!1}else if(!R[W]&&!Dt(V,It(N,ve,""))&&!((W==="src"||W==="xlink:href"||W==="href")&&h!=="script"&&Mf(N,"data:")===0&&Vt[h])&&!(we&&!Dt(Z,It(N,ve,"")))&&N)return!1}return!0},N0=function(h){return h.indexOf("-")>0},I0=function(h){let W,N,Ae,Je;an("beforeSanitizeAttributes",h,null);let{attributes:ft}=h;if(!ft)return;let Ct={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:C};for(Je=ft.length;Je--;){W=ft[Je];let{name:Qe,namespaceURI:ru}=W;if(N=Qe==="value"?W.value:Rf(W.value),Ae=Se(Qe),Ct.attrName=Ae,Ct.attrValue=N,Ct.keepAttr=!0,Ct.forceKeepAttr=void 0,an("uponSanitizeAttribute",h,Ct),N=Ct.attrValue,Ct.forceKeepAttr||(Io(Qe,h),!Ct.keepAttr))continue;if(!ke&&Dt(/\/>/i,N)){Io(Qe,h);continue}K&&(N=It(N,U," "),N=It(N,v," "),N=It(N,B," "));let j0=Se(h.nodeName);if(O0(j0,Ae,N)){if(ae&&(Ae==="id"||Ae==="name")&&(Io(Qe,h),N=ze+N),M&&typeof m=="object"&&typeof m.getAttributeType=="function"&&!ru)switch(m.getAttributeType(j0,Ae)){case"TrustedHTML":{N=M.createHTML(N);break}case"TrustedScriptURL":{N=M.createScriptURL(N);break}}try{ru?h.setAttributeNS(ru,Qe,N):h.setAttribute(Qe,N),Pc(t.removed)}catch{}}}an("afterSanitizeAttributes",h,null)},Wm=function h(W){let N,Ae=M0(W);for(an("beforeSanitizeShadowDOM",W,null);N=Ae.nextNode();)an("uponSanitizeShadowNode",N,null),!R0(N)&&(N.content instanceof r&&h(N.content),I0(N));an("afterSanitizeShadowDOM",W,null)};return t.sanitize=function(h){let W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},N,Ae,Je,ft;if(ut=!h,ut&&(h="<!-->"),typeof h!="string"&&!Aa(h))if(typeof h.toString=="function"){if(h=h.toString(),typeof h!="string")throw na("dirty is not a string, aborting")}else throw na("toString is not a function");if(!t.isSupported)return h;if(ne||Oo(W),t.removed=[],typeof h=="string"&&(_e=!1),_e){if(h.nodeName){let ru=Se(h.nodeName);if(!J[ru]||q[ru])throw na("root node is forbidden and cannot be sanitized in-place")}}else if(h instanceof i)N=_0("<!---->"),Ae=N.ownerDocument.importNode(h,!0),Ae.nodeType===1&&Ae.nodeName==="BODY"||Ae.nodeName==="HTML"?N=Ae:N.appendChild(Ae);else{if(!Q&&!K&&!Y&&h.indexOf("<")===-1)return M&&Fe?M.createHTML(h):h;if(N=_0(h),!N)return Q?null:Fe?A:""}N&&ye&&au(N.firstChild);let Ct=M0(_e?h:N);for(;Je=Ct.nextNode();)R0(Je)||(Je.content instanceof r&&Wm(Je.content),I0(Je));if(_e)return h;if(Q){if(be)for(ft=k.call(N.ownerDocument);N.firstChild;)ft.appendChild(N.firstChild);else ft=N;return(C.shadowroot||C.shadowrootmod)&&(ft=D.call(n,ft,!0)),ft}let Qe=Y?N.outerHTML:N.innerHTML;return Y&&J["!doctype"]&&N.ownerDocument&&N.ownerDocument.doctype&&N.ownerDocument.doctype.name&&Dt(Nc,N.ownerDocument.doctype.name)&&(Qe="<!DOCTYPE "+N.ownerDocument.doctype.name+`>
`+Qe),K&&(Qe=It(Qe,U," "),Qe=It(Qe,v," "),Qe=It(Qe,B," ")),M&&Fe?M.createHTML(Qe):Qe},t.setConfig=function(h){Oo(h),ne=!0},t.clearConfig=function(){kt=null,ne=!1},t.isValidAttribute=function(h,W,N){kt||Oo({});let Ae=Se(h),Je=Se(W);return O0(Ae,Je,N)},t.addHook=function(h,W){typeof W=="function"&&(L[h]=L[h]||[],ta(L[h],W))},t.removeHook=function(h){if(L[h])return Pc(L[h])},t.removeHooks=function(h){L[h]&&(L[h]=[])},t.removeAllHooks=function(){L={}},t}var rr=Ic();var qy=Ya.alert;var mu=console,Si=class{#e=performance.now();reset(){this.#e=performance.now()}stop(t){let n=performance.now(),u=Math.round(n-this.#e),a=_t.green;u>1e4?a=_t.red:u>1e3&&(a=_t.yellow),mu.debug(_t.dim(jn+" TIMING:"),t,"in",a(u+"ms")),this.#e=n}},ua=class{#e=1;get level(){return this.#e}setLevel(t){switch(t){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...t){this.#e<=0&&mu.log(_t.dim(jn+" DEBUG:"),...t)}v(...t){this.#e<=0}info(...t){this.#e<=1&&mu.log(_t.green(jn+" INFO:"),...t)}l(...t){this.#e<=1}warn(...t){this.#e<=2&&mu.warn(_t.yellow(jn+" WARN:"),...t)}error(...t){this.#e<=3&&mu.error(_t.red(jn+" ERROR:"),...t)}fatal(...t){this.#e<=4&&mu.error(_t.red(jn+" FATAL:"),...t)}timing(){return this.level===0?new Si:{reset:()=>{},stop:()=>{}}}},F=new ua;var jc=["*://*/*","*","*://*"],Uc="immersive-translate-wildcard-placeholder.com";function Pi(e,t){let n=[];if(!t||(t&&!Array.isArray(t)?n=[t]:n=t,n.length===0))return null;if(n.some(o=>jc.includes(o)))return e;let u=new URL(e);u.hash="",u.search="";let a=u.href,r=u.hostname;if(n&&n.length>0){let o=n.find(i=>{let s=i;if(i===r)return!0;if(jc.includes(i))return!0;if(!i.includes("*")&&i.includes("://")){try{let l=new URL(i);return l.pathname==="/"&&!i.endsWith("/")?l.hostname===r:Jf(a,i)}catch{}return!1}else{let l,c=i;if(i.includes("://")){let y=i.split("://");l=y[0],l==="*"&&y.length>1&&(l="*",i="https://"+y[1])}else l="*",i="https://"+i;let d=i.replace(/\*/g,Uc),g;try{g=new URL(d)}catch{return F.debug("invalid match pattern",d,"raw match value:",c),!1}let m=g.hostname,f=g.pathname;f==="/"&&(c.replace("://","").includes("/")||(f="/*"));let w=Vf(l+":",zc(m),zc(f));if(w){let y=new URL(a);return y.port="",w.test(y.href)}else return!1}});if(o)return o}return null}function zc(e){return e.replaceAll(Uc,"*")}function Vf(e,t,n){let u="^";return e==="*:"?u+="(http:|https:|file:)":u+=e,u+="//",t&&(e==="file:"||(t==="*"?u+="[^/]+?":(t.match(/^\*\./)&&(u+="[^/]*?",t=t.substring(2)),u+=t.replace(/\./g,"\\.").replace(/\*/g,"[^/]*")))),n?n==="*"||n==="/*"?u+="(/.*)?":n.includes("*")?(u+=n.replace(/\*/g,".*?"),u+="/?"):u+=n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):u+="/?",u+="$",new RegExp(u)}function sn(e,t){return Pi(e,t)!==null}function Jf(e,t){let n=new URL(e),u=new URL(t);return n.hostname===u.hostname&&n.pathname===u.pathname&&n.protocol===u.protocol&&n.port===u.port}function Fi(e){return Array.isArray(e)?e:e?[e]:[]}function Li(e,t){return t?(Array.isArray(t)||(t=[t]),Array.from(new Set([...t,e]))):[e]}function En(e,t){return t?(Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),t.filter(n=>!e.includes(n))):[]}function or(e,t){let n=[],u=Object.keys(e);for(let o of u){let i=e[o];Array.isArray(i)&&n.push(o)}let a={...e};return Object.keys(t).forEach(o=>{let i=t[o];if(i!==void 0)if(!n.includes(o))a[o]=i;else if(o.startsWith("additional")){let s=Fi(i);a[o]=Array.from(new Set([...a[o],...s]))}else a[o]=Fi(i)}),a}var pu="input is invalid type",Bi=typeof window=="object",yn=Bi?window:{};yn.JS_SHA256_NO_WINDOW&&(Bi=!1);var Yf=!Bi&&typeof self=="object",Xf=!yn.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;Xf?yn=global:Yf&&(yn=self);var yT=!yn.JS_SHA256_NO_COMMON_JS&&typeof module=="object"&&module.exports,TT=typeof define=="function"&&define.amd,aa=!yn.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",$="0123456789abcdef".split(""),Qf=[-2147483648,8388608,32768,128],zt=[24,16,8,0],ir=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],sr=["hex","array","digest","arrayBuffer"],Ze=[];(yn.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"});aa&&(yn.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return typeof e=="object"&&e.buffer&&e.buffer.constructor===ArrayBuffer});var Hc=function(e,t){return function(n){return new et(t,!0).update(n)[e]()}},qc=function(e){var t=Hc("hex",e);t.create=function(){return new et(e)},t.update=function(a){return t.create().update(a)};for(var n=0;n<sr.length;++n){var u=sr[n];t[u]=Hc(u,e)}return t},Wc=function(e,t){return function(n,u){return new lr(n,t,!0).update(u)[e]()}},Kc=function(e){var t=Wc("hex",e);t.create=function(a){return new lr(a,e)},t.update=function(a,r){return t.create(a).update(r)};for(var n=0;n<sr.length;++n){var u=sr[n];t[u]=Wc(u,e)}return t};function et(e,t){t?(Ze[0]=Ze[16]=Ze[1]=Ze[2]=Ze[3]=Ze[4]=Ze[5]=Ze[6]=Ze[7]=Ze[8]=Ze[9]=Ze[10]=Ze[11]=Ze[12]=Ze[13]=Ze[14]=Ze[15]=0,this.blocks=Ze):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}et.prototype.update=function(e){if(!this.finalized){var t,n=typeof e;if(n!=="string"){if(n==="object"){if(e===null)throw new Error(pu);if(aa&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!aa||!ArrayBuffer.isView(e)))throw new Error(pu)}else throw new Error(pu);t=!0}for(var u,a=0,r,o=e.length,i=this.blocks;a<o;){if(this.hashed&&(this.hashed=!1,i[0]=this.block,i[16]=i[1]=i[2]=i[3]=i[4]=i[5]=i[6]=i[7]=i[8]=i[9]=i[10]=i[11]=i[12]=i[13]=i[14]=i[15]=0),t)for(r=this.start;a<o&&r<64;++a)i[r>>2]|=e[a]<<zt[r++&3];else for(r=this.start;a<o&&r<64;++a)u=e.charCodeAt(a),u<128?i[r>>2]|=u<<zt[r++&3]:u<2048?(i[r>>2]|=(192|u>>6)<<zt[r++&3],i[r>>2]|=(128|u&63)<<zt[r++&3]):u<55296||u>=57344?(i[r>>2]|=(224|u>>12)<<zt[r++&3],i[r>>2]|=(128|u>>6&63)<<zt[r++&3],i[r>>2]|=(128|u&63)<<zt[r++&3]):(u=65536+((u&1023)<<10|e.charCodeAt(++a)&1023),i[r>>2]|=(240|u>>18)<<zt[r++&3],i[r>>2]|=(128|u>>12&63)<<zt[r++&3],i[r>>2]|=(128|u>>6&63)<<zt[r++&3],i[r>>2]|=(128|u&63)<<zt[r++&3]);this.lastByteIndex=r,this.bytes+=r-this.start,r>=64?(this.block=i[16],this.start=r-64,this.hash(),this.hashed=!0):this.start=r}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}};et.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=Qf[t&3],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}};et.prototype.hash=function(){var e=this.h0,t=this.h1,n=this.h2,u=this.h3,a=this.h4,r=this.h5,o=this.h6,i=this.h7,s=this.blocks,l,c,d,g,m,f,w,y,p,_,M;for(l=16;l<64;++l)m=s[l-15],c=(m>>>7|m<<25)^(m>>>18|m<<14)^m>>>3,m=s[l-2],d=(m>>>17|m<<15)^(m>>>19|m<<13)^m>>>10,s[l]=s[l-16]+c+s[l-7]+d<<0;for(M=t&n,l=0;l<64;l+=4)this.first?(this.is224?(y=300032,m=s[0]-1413257819,i=m-150054599<<0,u=m+24177077<<0):(y=704751109,m=s[0]-210244248,i=m-1521486534<<0,u=m+143694565<<0),this.first=!1):(c=(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10),d=(a>>>6|a<<26)^(a>>>11|a<<21)^(a>>>25|a<<7),y=e&t,g=y^e&n^M,w=a&r^~a&o,m=i+d+w+ir[l]+s[l],f=c+g,i=u+m<<0,u=m+f<<0),c=(u>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10),d=(i>>>6|i<<26)^(i>>>11|i<<21)^(i>>>25|i<<7),p=u&e,g=p^u&t^y,w=i&a^~i&r,m=o+d+w+ir[l+1]+s[l+1],f=c+g,o=n+m<<0,n=m+f<<0,c=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),d=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7),_=n&u,g=_^n&e^p,w=o&i^~o&a,m=r+d+w+ir[l+2]+s[l+2],f=c+g,r=t+m<<0,t=m+f<<0,c=(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),d=(r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7),M=t&n,g=M^t&u^_,w=r&o^~r&i,m=a+d+w+ir[l+3]+s[l+3],f=c+g,a=e+m<<0,e=m+f<<0;this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+n<<0,this.h3=this.h3+u<<0,this.h4=this.h4+a<<0,this.h5=this.h5+r<<0,this.h6=this.h6+o<<0,this.h7=this.h7+i<<0};et.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,u=this.h3,a=this.h4,r=this.h5,o=this.h6,i=this.h7,s=$[e>>28&15]+$[e>>24&15]+$[e>>20&15]+$[e>>16&15]+$[e>>12&15]+$[e>>8&15]+$[e>>4&15]+$[e&15]+$[t>>28&15]+$[t>>24&15]+$[t>>20&15]+$[t>>16&15]+$[t>>12&15]+$[t>>8&15]+$[t>>4&15]+$[t&15]+$[n>>28&15]+$[n>>24&15]+$[n>>20&15]+$[n>>16&15]+$[n>>12&15]+$[n>>8&15]+$[n>>4&15]+$[n&15]+$[u>>28&15]+$[u>>24&15]+$[u>>20&15]+$[u>>16&15]+$[u>>12&15]+$[u>>8&15]+$[u>>4&15]+$[u&15]+$[a>>28&15]+$[a>>24&15]+$[a>>20&15]+$[a>>16&15]+$[a>>12&15]+$[a>>8&15]+$[a>>4&15]+$[a&15]+$[r>>28&15]+$[r>>24&15]+$[r>>20&15]+$[r>>16&15]+$[r>>12&15]+$[r>>8&15]+$[r>>4&15]+$[r&15]+$[o>>28&15]+$[o>>24&15]+$[o>>20&15]+$[o>>16&15]+$[o>>12&15]+$[o>>8&15]+$[o>>4&15]+$[o&15];return this.is224||(s+=$[i>>28&15]+$[i>>24&15]+$[i>>20&15]+$[i>>16&15]+$[i>>12&15]+$[i>>8&15]+$[i>>4&15]+$[i&15]),s};et.prototype.toString=et.prototype.hex;et.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,u=this.h3,a=this.h4,r=this.h5,o=this.h6,i=this.h7,s=[e>>24&255,e>>16&255,e>>8&255,e&255,t>>24&255,t>>16&255,t>>8&255,t&255,n>>24&255,n>>16&255,n>>8&255,n&255,u>>24&255,u>>16&255,u>>8&255,u&255,a>>24&255,a>>16&255,a>>8&255,a&255,r>>24&255,r>>16&255,r>>8&255,r&255,o>>24&255,o>>16&255,o>>8&255,o&255];return this.is224||s.push(i>>24&255,i>>16&255,i>>8&255,i&255),s};et.prototype.array=et.prototype.digest;et.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e};function lr(e,t,n){var u,a=typeof e;if(a==="string"){var r=[],o=e.length,i=0,s;for(u=0;u<o;++u)s=e.charCodeAt(u),s<128?r[i++]=s:s<2048?(r[i++]=192|s>>6,r[i++]=128|s&63):s<55296||s>=57344?(r[i++]=224|s>>12,r[i++]=128|s>>6&63,r[i++]=128|s&63):(s=65536+((s&1023)<<10|e.charCodeAt(++u)&1023),r[i++]=240|s>>18,r[i++]=128|s>>12&63,r[i++]=128|s>>6&63,r[i++]=128|s&63);e=r}else if(a==="object"){if(e===null)throw new Error(pu);if(aa&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!aa||!ArrayBuffer.isView(e)))throw new Error(pu)}else throw new Error(pu);e.length>64&&(e=new et(t,!0).update(e).array());var l=[],c=[];for(u=0;u<64;++u){var d=e[u]||0;l[u]=92^d,c[u]=54^d}et.call(this,t,n),this.update(c),this.oKeyPad=l,this.inner=!0,this.sharedMemory=n}lr.prototype=new et;lr.prototype.finalize=function(){if(et.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();et.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),et.prototype.finalize.call(this)}};var fu=qc();fu.sha256=fu;fu.sha224=qc(!0);fu.sha256.hmac=Kc();fu.sha224.hmac=Kc(!0);var $c=fu;var Gc=$c.sha256;function Ut(e){return Promise.resolve(Gc(e))}function cr(e){return Array.from(new Uint8Array(e)).map(u=>u.toString(16).padStart(2,"0")).join("")}function Tn(e,t){let n=Gc.hmac.create(t);return n.update(e),Promise.resolve(n.array())}async function Vc(e,t){let n=await Tn(e,t);return cr(n)}async function dr(e,t){let n=Zf(t),u=await Tn(e,n);return cr(u)}function Zf(e){let t=[];return e.replace(/../g,function(n){return t.push(parseInt(n,16)),""}),new Uint8Array(t).buffer}function tt(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():b}var de=tt();function me(){return de.IMMERSIVE_TRANSLATE_USERSCRIPT==="1"}function Jc(){return de.HAS_CSP_ERROR=="1"}function yt(){if(de.IMMERSIVE_TRANSLATE_SAFARI==="1")return!0;if(typeof globalThis.immersiveTranslateBrowserAPI<"u"&&globalThis.immersiveTranslateBrowserAPI.runtime&&globalThis.immersiveTranslateBrowserAPI.runtime.getManifest){let t=globalThis.immersiveTranslateBrowserAPI.runtime.getManifest();return!!(t&&t._isSafari)}else return!1}function Yc(){return typeof Deno<"u"}var kT=tt().PROD==="1",hu=tt().PROD!=="1";function Xc(){return typeof globalThis.__IS_IMMERSIVE_TRANSLATE_WEB_OPTIONS_PAGE__<"u"}function rt(){try{return globalThis.self!==globalThis.top}catch{return!0}}var gr=!1,eh=me();function Qc(e,t){let n=[];for(let u of t){let a=e.querySelectorAll(u);for(let r of a)n.push(r)}return n}function th(e,t){let n=function(r){return r.nodeType===Node.ELEMENT_NODE||r.nodeType===Node.TEXT_NODE?r.nodeType===Node.ELEMENT_NODE&&Zc(r,t,!0)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},u=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,n),a=!0;for(;u.nextNode();){let r=u.currentNode;if(r.nodeType===Node.ELEMENT_NODE){if(xn(r,Wa)){if(a===!0)return!0;continue}if(ra(r.nodeName,t.inlineTags))return!0;if(!_i(r,t))return!1}}return!0}function Mi(e,t){let n=t.inlineTags;if(e.nodeType===Node.ELEMENT_NODE)if(ra(e.nodeName,n)||_i(e,t)){if(xn(e,Il)||ra(e.nodeName,["BR"]))return!1;if(xn(e,Wa))return!0;if(_i(e,t)){let u=globalThis.getComputedStyle(e);if(u.display==="block"||u.display==="flex")return!1}return th(e,t)}else return xn(e,Wa);return!1}function Zc(e,t,n){if(!(e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE)||e.nodeType===Node.ELEMENT_NODE&&xn(e,Nl,!0))return!0;if(e.nodeType===Node.ELEMENT_NODE&&xn(e,_l))return!1;let{stayOriginalTags:u,excludeTags:a}=t,r=[];return n&&a&&a.length>0?r=a||[]:r=a.filter(o=>!u.includes(o)),!!(e.nodeType===Node.ELEMENT_NODE&&e.isContentEditable||e.nodeType===Node.ELEMENT_NODE&&(e.getAttribute("translate")==="no"||e.classList.contains("notranslate"))||ra(e.nodeName,r))}function mr(e,t,n){let u=e.trim();return u.length>=t||u.split(" ").filter(o=>o.trim()!=="").length>=n||!t4(u)&&u.length>=n}function e4(e,t,n){let u=e.trim();if(u.length<=t)return!0;if(t4(u)){if(u.split(" ").length<=n)return!0}else if(u.length<=n)return!0;return!1}function t4(e){for(let t=0;t<e.length;t++)if(e.charCodeAt(t)>127)return!1;return!0}function n4(e){if(e&&e.includes("://"))try{return new URL(e),!0}catch{return!1}else if(e.includes(".")&&!e.includes(" "))try{return new URL("http://"+e),!0}catch{return!1}else return!1}function u4(e){return e?/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e):!1}function a4(e){return!!(e&&e.startsWith("#")&&e.indexOf(" ")===-1)}function r4(e){return!!(e&&e.startsWith("@")&&e.indexOf(" ")===-1)}function xn(e,t,n=!1){return Ri(e,t,"1",n)}function Ri(e,t,n,u=!1){return gr&&!u?e[vt]?!!(e[vt]&&e[vt][t]===n):!1:e.dataset[t]===n}function bu(e){return(e.innerText||e.textContent||"").trim()}function Oi(e){let t=e.querySelectorAll("iframe"),n="";for(let u=0;u<t.length;u++){let r=t[u].contentDocument;if(r&&(n+=bu(r.body),n.length>2e3))break}return n}function pr(e){return e?typeof e=="string"?document.querySelector(e)!==null:e.some(t=>document.querySelector(t)):!1}function Ge(e,t,n,u=!1){e.isContentEditable||(gr&&!u?(e.dataset[Ju]||(e.dataset[Ju]="1"),e[vt]||(e[vt]={}),e[vt][t]||(e[vt][t]=n)):(e.dataset[Ju]||(e.dataset[Ju]="1"),e.dataset[t]!==n&&(e.dataset[t]=n)))}function fr(e,t,n=!1){if(gr&&!n){if(!e[vt]||!e[vt][t])return;delete e[vt][t]}else delete e.dataset[t]}function Eu(e,t,n=!1){return gr&&!n?!e[vt]||!e[vt][t]?void 0:e[vt][t]:e.dataset[t]}function _i(e,t){let n=t.allBlockTags.concat(t.inlineTags).concat(t.excludeTags);return!ra(e.nodeName,n)}function hr(e){let{config:t}=e,n=qa;return t.translationServices[e.translationService]&&t.translationServices[e.translationService].placeholderDelimiters&&(n=t.translationServices[e.translationService].placeholderDelimiters),n}function ot(){if(!globalThis||!globalThis.location)return"https://example.com";if(!rt())return globalThis.location.href;try{let t=globalThis.location.href,n=new URL(t);if(n.protocol==="about:"||n.protocol==="blob:"){if(globalThis.location.ancestorOrigins&&globalThis.location.ancestorOrigins.length>0)return globalThis.location.ancestorOrigins[0];let u="";try{u=globalThis.parent.location.href}catch{}return u||(globalThis.location!=globalThis.parent.location?document.referrer:document.location.href)}else return t}catch{}return globalThis.location.href}function wn(e,t,n){if(e instanceof ShadowRoot){try{e.appendChild(document.createElement("style")).textContent=t}catch(u){F.warn("injectCSS failed, rootDocument"+u?.message,e)}return}if(e&&e.head&&e.head.appendChild){let u=e.createElement("style");if(n){let a=e.querySelector(`style[data-id="${n}"]`);a&&a.remove(),u.dataset.id=n}u.textContent=t,e.head.appendChild(u)}else F.warn("injectCSS failed, rootDocument does not have head node",e)}function yu(e){let t=e.getAttribute("src");if(t){if(eh){if(t.startsWith("blob:"))return!0}else if(t.startsWith("blob:")&&!t.startsWith("blob:http"))return!0;return!1}try{if(e.contentDocument&&e.contentDocument.body)return!0}catch{}return!1}function ra(e,t){if(!e||!t)return!1;Array.isArray(t)||(t=[t]),e=e.toUpperCase();for(let n of t)if(e===n)return!0;return!1}function o4(e){let t=e.replace("#",""),n=parseInt(t.substring(0,2),16),u=parseInt(t.substring(2,4),16),a=parseInt(t.substring(4,6),16);return{r:n,g:u,b:a}}function i4(e,t,n,u){if(u.document.caretPositionFromPoint){let a=u.document.caretPositionFromPoint(e,t);if(a){let r=u.document.createRange(),o=a.offsetNode;if(!o||o.nodeType!==Node.TEXT_NODE||Zc(o,n,!0))return null;try{r.setStart(o,a.offset),r.setEnd(o,a.offset)}catch(i){return F.warn("getRangeFromPoint error",i),null}return r}return null}else return u.document.caretRangeFromPoint?u.document.caretRangeFromPoint(e,t):null}function s4(e,t,n){let u=0,a=(r,o,i,s)=>{if(++u>100||s===r)return r;let l=r.shadowRoot;if(!l||typeof l.elementFromPoint!="function")return r;let c=l.elementFromPoint(o,i);return c?a(c,o,i,r):r};return a(e,t,n)}function Hn(e){if(typeof e!="string")return"auto";let t=e.toLowerCase();if(t==="zh"||t==="zh-hans")return"zh-CN";if(t==="zh-hant"||t==="zh-hk")return"zh-TW";if(t==="iw")return"he";if(t==="jv")return"jw";let n=Yt.map(a=>a.toLowerCase()),u=n.indexOf(t);if(u===-1)if(t.indexOf("-")>=0){t=t.split("-")[0];let a=n.indexOf(t);return a===-1?"auto":Yt[a]}else return"auto";else return Yt[u]}var br={minVersion:"0.6.2",immediateTranslationTextCount:5e3,interval:36e5,beta:!1,cache:!0,translationMode:"dual",enabled:!0,donateUrl:"https://immersivetranslate.com/docs/donate/",uninstallUrl:"https://wj.qq.com/s2/12328372/04e0/",feedbackUrl:"https://github.com/immersive-translate/immersive-translate/issues",isShowContextMenu:!0,enableInputTranslation:!0,inputTranslationUrlPattern:{matches:[],excludeMatches:[]},inputTranslationBlockUrls:["www.feishu.cn","www.notion.so","www.figma.com/file/*"],inputStyleBlockUrls:[],inputTargetLanguage:"en",inputStartingTriggerKey:"/",inputTrailingTriggerKey:"space",inputTrailingTriggerKeyRepeatTimes:3,inputTrailingTriggerKeyTimeout:500,inputLanguageCodeAlias:{en:["\u82F1\u6587","\u82F1\u8BED"],"zh-CN":["zh","zh-Hant","\u4E2D\u6587"],"zh-TW":["zht","zh-Hant","\u7E41\u4E2D"],ja:["\u65E5\u8BED","\u65E5\u6587"],ko:["\u97E9\u8BED","\u97E9\u6587"],fr:["\u6CD5\u8BED","\u53D1\u6587"],es:["\u897F\u73ED\u7259\u8BED","\u897F\u8BED"],ru:["\u4FC4\u8BED","\u4FC4\u6587"],bo:["\u85CF\u8BED"]},inputStartingTriggerKeyAlias:{"/":["\u3001"],".":["\u3002"],",":["\uFF0C"],space:[" "],";":["\uFF1B"],":":["\uFF1A"]},blockUrls:["https://dash.immersivetranslate.com/*","https://immersive-translate.owenyoung.com/options/","https://immersive-translate.owenyoung.com/auth-done/","https://dash.immersivetranslate.com/","https://dash.immersivetranslate.com/auth-done/","http://localhost:8000/dist/userscript/options/","http://localhost:8000/auth-done/","http://192.168.50.9:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com","http://localhost:8000/options/","http://192.168.50.9:8000/options/","googleads.g.doubleclick.net","s1.hdslb.com","oapi.dingtalk.com","login.dingtalk.com","imasdk.googleapis.com","acdn.adnxs.com","pos.baidu.com","js-sec.indexww.com","g.alicdn.com","ads.pubmatic.com","challenges.cloudflare.com","accounts.google.com","images-na.ssl-images-amazon.com","tpc.googlesyndication.com","js.stripe.com","acdn.adnxs-simple.com","s.union.360.cn","s.amazon-adsystem.com","www.recaptcha.net","s7.addthis.com","z.moatads.com","https://www.marketwatch.com/static_html/daa-min.html","tr.snapchat.com","ct.pinterest.com","*.moatads.com","secure-us.imrworldwide.com","static.noeyeon.click","widgets.outbrain.com","www.dianomi.com/smartads.epl","secure-assets.rubiconproject.com","eus.rubiconproject.com","eus.rubiconproject.com","i.liadm.com","eb2.3lift.com"],telemetry:!0,loadingTheme:"spinner",canary:!1,translationThemePatterns:{},translationServices:{volcAlpha:{placeholderDelimiters:["{","}"]},volc:{placeholderDelimiters:["{","}"]},tencent:{placeholderDelimiters:["{","}"]},transmart:{placeholderDelimiters:["#","#"]},baidu:{placeholderDelimiters:["#","#"]},caiyun:{placeholderDelimiters:["{","}"]},youdao:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}"]},deepl:{immediateTranslationTextCountForImmersiveDeepl:5e4,placeholderDelimiters:["{{","}}"]},bing:{maxTextLengthPerRequest:1800,placeholderDelimiters:["<code>","</code>"]},deeplx:{limit:3},d:{immediateTranslationTextCount:0},papago:{placeholderDelimiters:["{","}"]},dpro:{apiUrl:"https://api.deepl.com/jsonrpc"},openai:{placeholderDelimiters:["{{","}}"],immediateTranslationTextCount:3e3,translationDebounce:300,interval:1350,prompt:`Translate the text to {{to}}:

{{text}}`,maxTextGroupLengthPerRequest:1,newlinePlaceholderDelimiters:[`

-|`,`|-

`,`
?
?-\\|\\d+\\|-
?
?`]},chatgpt:{placeholderDelimiters:["{{","}}"],immediateTranslationTextCount:2e3,maxTextGroupLengthPerRequest:1,maxTextLengthPerRequest:2e3,prompt:`Translate the text to {{to}}:

{{text}}`,newlinePlaceholderDelimiters:[`

-|`,`|-

`,`
?
?-\\|\\d+\\|-
?
?`]}},shortcuts:{toggleTranslatePage:"Alt+A",toggleTranslateTheWholePage:"Alt+W",toggleOnlyTransation:"",toggleTranslateToThePageEndImmediately:"",toggleTranslationMask:""},tempTranslateDomainMinutes:0,immediateTranslationPattern:{matches:["www.tumblr.com","twitter.com","*.twitter.com","medium.com","*.medium.com","www.facebook.com","www.youtube.com","m.youtube.com","mail.google.com","discord.com","google.com","facebook.com","*.facebook.com","web.telegram.org","github.com","*.instagram.com","instagram.com","*.slack.com","https://old.reddit.com/","https://www.reddit.com/r/popular/","https://www.reddit.com/","https://www.reddit.com/hot/","https://www.reddit.com/new/","https://www.reddit.com/top/","https://www.reddit.com/.compact"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},translationParagraphLanguagePattern:{matches:["www.reddit.com","old.reddit.com","twitter.com","www.tumblr.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","read.readwise.io","www.inoreader.com","mail.google.com","google.com","discord.com","*.instagram.com","instagram.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},sourceLanguageUrlPattern:{},generalRule:{_comment:"",normalizeBody:"",useIframePostMessage:!0,injectedCss:[],isEbook:!1,isEbookBuilder:!1,showSponsorOnSafari:!1,noTranslateRegexp:["^\\d+.+ago$","^\\d+\\s+MIN\\s+READ$"],waitForSelectors:[],isInjectOptionsUrl:!1,isInjectVersion:!1,waitForSelectorsTimeout:3e3,pairs:{},aiRule:{},isSubtitleBuilder:!1,minZIndex:0,initTranslationServiceAsSoonAsPossible:!0,targetWrapperTag:"font",additionalInjectedCss:[],isTranslateTitle:!0,languageDetectMinTextCount:50,wrapperPrefix:"smart",wrapperSuffix:"smart",isPdf:!1,isTransformPreTagNewLine:!1,urlChangeDelay:50,mutationChangeDelay:10,mainFrameMinTextCount:50,mainFrameMinWordCount:5,visibleDelay:0,additionalStayOriginalSelectors:["span.katex","span.notranslate",".MathJax_Preview",".MathJax",".mwe-math-element","span[translate=no]","span.math.inline","span.math.display",".ltx_Math",".mathjax-block"],translationBlockStyle:"",isShowUserscriptPagePopup:!0,observeUrlChange:!1,paragraphMinTextCount:4,paragraphMinWordCount:2,shadowRootSelectors:[],blockMinTextCount:24,blockMinWordCount:4,asideMaxTextCount:1e3,asideMaxWordCount:200,asideMaxTextCountPerParagraph:67,asideMaxWordCountPerParagraph:12,lineBreakMaxTextCount:0,globalAttributes:{},globalMeta:{},globalStyles:{".sr-only":"display:none"},initialGlobalAttributes:{},initialSelectorGlobalAttributes:{header:{translate:"no"},"footer:last-of-type":{translate:"no"},"nav:last-of-type":{translate:"no"},nav:{translate:"no"}},selectors:[],preWhitespaceDetectedTags:["DIV","SPAN"],stayOriginalSelectors:[],additionalSelectors:["h1","section h2","section h3","section h4","main h2","main h3","main h4",".article-title",".article-subtitle",".article_title",".article_subtitle",".article__title",".articleTitle",".Article__content",".titleLink",".summary",".headline",".page-content","aside.note","aside.article-comments","aside.onebox"],atomicBlockTags:[],excludeSelectors:[],additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]","rp","rt",".prism-code","[role=code]","#omni-extension",".omni-item","div[data-paste-markdown-skip]","table.highlight","div[class^=codeBlockContent]","div[class^=codeBlockLines]","div[class^=token-line]","#liuchan-window > .liuchan-container > *",".material-icons","i.fa","i[class^=fa-]",".notranslate","[translate=no]",".navmenu-container"],translationClasses:[],atomicBlockSelectors:[],excludeTags:["TITLE","LINK","SCRIPT","STYLE","TEXTAREA","SVG","svg","G","NOSCRIPT","INPUT","BUTTON","BASE","SELECT","OPTION","HR","PRE","KBD","WBR","RT","RP","META","MATH","TTS-SENTENCE","AIO-CODE"],bodyTranslateTags:["FOOTER","ASIDE","BUTTON","NAV"],forceTranslateTags:[],metaTags:["META","SCRIPT","STYLE","NOSCRIPT"],additionalExcludeTags:[],stayOriginalTags:["CODE","TT","IMG","SUP","SUB"],additionalStayOriginalTags:[],inlineTags:["A","ABBR","FONT","ACRONYM","B","INS","DEL","RUBY","RP","RB","BDO","MARK","BIG","RT","NOBR","CITE","DFN","EM","I","LABEL","Q","S","SMALL","SPAN","STRONG","SUB","SUP","U","KBD","TT","VAR","IMG","CODE","SCRIPT","STYLE","LINK","TIME","META","WBR","RELIN-HC","RELIN-HIGHLIGHT","RELIN-ORIGIN","RELIN-TARGET","XQDD_HIGHLIGHT_NEW_WORD","NOBR"],additionalInlineTags:[],extraInlineSelectors:[],additionalInlineSelectors:[".MathJax_Preview",".MathJax"],extraBlockSelectors:["turbo-frame","readme-toc","#hs_cos_wrapper_post_body","#hs_cos_wrapper_post_body"],allBlockTags:["BODY","HGROUP","CONTENT","ADDRESS","ARTICLE","ASIDE","DETAILS","BLOCKQUOTE","CANVAS","DD","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","HEADER","FORM","HR","MAIN","SUMMARY","NAV","NOSCRIPT","PRE","SECTION","TABLE","TFOOT","UL","VIDEO","P","DIV","H1","H2","H3","H4","H5","H6","UL","LI","OL","BR","PICTURE","TBODY","TR","TD","TH","SOURCE","C-WIZ","BUTTON","TURBO-FRAME","README-TOC"],pdfNewParagraphLineHeight:2.4,pdfNewParagraphIndent:1.2,pdfNewParagraphIndentRightIndentPx:130,fingerCountToToggleTranslagePageWhenTouching:4,fingerCountToToggleTranslationMaskWhenTouching:0,fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:0,mouseHoverHoldKey:"Off"},rules:[{selectorMatches:"div.simpread-read-root.simpread-read-root-show > sr-read",mainFrameSelector:"div.simpread-read-root.simpread-read-root-show > sr-read"},{matches:["moz-extension://*/pdf/index.html*"],isPdf:!0,isTranslateTitle:!1,wrapperPrefix:"",wrapperSuffix:"",urlChangeDelay:0,selectors:[".textLayer"],excludeSelectors:[".annotationLayer"],globalStyles:{"div.page":"width: 98%;",".textLayer":"overflow:visible;opacity: 1;"}},{matches:["*://*/*.txt","file://*/*.txt"],selectorMatches:["body > pre"],isTransformPreTagNewLine:!0,excludeTags:["TITLE","LINK","SCRIPT","STYLE","TEXTAREA","SVG","svg","G","TEXT","NOSCRIPT","INPUT","BUTTON","BASE","SELECT","OPTION","IMG","SUB","SUP","HR","CODE","KBD","WBR","TT","RT","RP","META","ASIDE","FOOTER","MATH","TTS-SENTENCE"]},{matches:["arad.hange.jp","arad.nexon.co.jp","oapi.dingtalk.com","login.dingtalk.com"],useIframePostMessage:!1},{matches:["googleads.g.doubleclick.net","https://www.google.com/recaptcha/*","ad.doubanio.com"],useIframePostMessage:!1,selectors:"#notexistforimmersivetranslate"},{matches:["mail.jabber.org","antirez.com"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.wikipedia.org",paragraphMinWordCount:1,paragraphMinTextCount:3,excludeSelectors:[".mw-editsection",".mw-cite-backlink","#p-lang-btn","#right-navigation","#p-associated-pages",".vector-header"],stayOriginalSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],extraInlineSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"]},{matches:["twitter.com","mobile.twitter.com","tweetdeck.twitter.com","https://platform.twitter.com/embed*"],isTranslateTitle:!1,selectors:['[data-testid="tweetText"]',".tweet-text",".js-quoted-tweet-text","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)","[data-testid='developerBuiltCardContainer'] > div:nth-child(2)","[data-testid='card.layoutLarge.detail'] > div:nth-child(2)","[data-testid='cellInnerDiv'] div[data-testid='UserCell'] > div> div:nth-child(2)","[data-testid='UserDescription']","[data-testid='HoverCard'] div[dir=auto]"],paragraphMinTextCount:3,paragraphMinWordCount:1,additionalStayOriginalSelectors:['[data-testid="tweetText"] a'],excludeSelectors:["header"],observeUrlChange:!1,extraInlineSelectors:['[data-testid="tweetText"] div','[data-testid="tweetText"] span','[data-testid="UserDescription"] div',"[data-testid='HoverCard'] div[dir=auto] div"]},{matches:["stackoverflow.com","*.stackexchange.com","superuser.com","askubuntu.com","serverfault.com"],extraBlockSelectors:["span.comment-copy"],excludeSelectors:["a.comment-user","span.comment-date","div.s-prose.js-post-body + div",".bottom-notice","div[data-campaign-name=stk]"],paragraphMinTextCount:4,paragraphMinWordCount:1},{matches:"developer.apple.com/documentation/*",selectors:[".container","h3.title","div.content"]},{matches:"news.ycombinator.com",selectors:[".titleline > a",".comment > .commtext",".toptext","a.hn-item-title",".hn-comment-text",".hn-story-title"],excludeSelectors:[".reply"]},{matches:["*.quora.com","quora.com"],additionalSelectors:[".puppeteer_test_question_title","p.q-text"],globalStyles:{".qu-truncateLines--3":"-webkit-line-clamp: unset;"}},{matches:["old.reddit.com/*/.compact","old.reddit.com/.compact","www.reddit.com/*/.compact","www.reddit.com/.compact"],selectors:[".title > a",".usertext-body"],detectParagraphLanguage:!0},{matches:"old.reddit.com",selectors:["p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0},{matches:["https://www.reddit.com/r/*/comments/*/*","https://www.reddit.com/","https://www.reddit.com/hot/","https://www.reddit.com/new/","https://www.reddit.com/top/"],excludeMatches:["https://www.reddit.com/r/*/wiki/*"],observeUrlChange:!0,selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title'] h3","[data-adclicklocation=media]",".PostContent",".post-content",".Comment__body","faceplate-batch .md",".RichTextJSON-root","div[slot=title]","div[slot=text-body]","p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0,globalStyles:{"div.XPromoBottomBar":"display:none"},waitForSelectors:["[data-testid=post_author_link]"]},{matches:"www.reddit.com",selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title'] h3","[data-adclicklocation=media]",".PostContent",".post-content",".Comment__body","faceplate-batch .md","div[slot=title]","div[slot=text-body]","p.title > a","[role=main] .md-container"],paragraphMinTextCount:5,paragraphMinWordCount:1,excludeMatches:["https://www.reddit.com/r/*/wiki/*","https://www.reddit.com/settings/*"],detectParagraphLanguage:!0,globalStyles:{"div.XPromoBottomBar":"display:none"}},{matches:"www.reuters.com",excludeSelectors:["[promotext]","[data-testid=Leaderboard]"]},{matches:"https://www.npmjs.com/package/*",selectors:["#tabpanel-readme > div:first-child"]},{matches:"github.com",observeUrlChange:!0,excludeMatches:["https://github.com/*/*/settings","https://github.com/settings/*","https://github.com/sponsors/*","https://github.com/readme/*","https://github.com/readme/"],selectors:["h1","[aria-label=Issues] .markdown-title","[aria-labelledby=discussions-list] .markdown-title",".markdown-body",".Layout-sidebar p","div > span.search-match","li.repo-list-item p","#responsive-meta-container p","article p","div.repo-description p","[itemprop=description]"],atomicBlockSelectors:["[itemprop=description]"],excludeSelectors:[".css-truncate","[data-test-selector='commit-tease-commit-message']","[data-test-selector='create-branch.developmentForm']","div.Box-header.position-relative","div.blob-wrapper-embedded","div.Box.Box--condensed.my-2","div.jp-CodeCell",'[aria-label="Account"] .markdown-title',".js-repos-container .markdown-title","[data-view-component=true] .markdown-title","a.anchor","div.file-navigation + div.Box"],extraBlockSelectors:[],extraInlineSelectors:["g-emoji","a.anchor"],stayOriginalTags:["CODE","TT","G-EMOJI","IMG","SUP","SUB"],detectParagraphLanguage:!0},{matches:"notebooks.githubusercontent.com",excludeSelectors:["div.jp-CodeCell"]},{matches:"www.facebook.com",excludeMatches:"https://www.facebook.com/business/*",selectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],atomicBlockSelectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],insertPosition:"afterend",preWhitespaceDetectedTags:["DIV","SPAN"],extraBlockSelectors:["span.x1vvkbs"],excludeSelectors:["[role=button]"],translationClasses:["immersive-translate-text"],detectParagraphLanguage:!0},{matches:"m.youtube.com",selectors:[".comment-text",".media-item-headline",".slim-video-information-title",".caption-window",".caption-visual-line"],wrapperPrefix:"",wrapperSuffix:"",observeUrlChange:!0,atomicBlockSelectors:[".comment-text"],globalStyles:{".comment-text":"max-height:unset;",".media-item-headline":"max-height:unset;-webkit-line-clamp:unset;"},injectedCss:[".immersive-translate-target-wrapper img { width: 16px; height: 16px }"],extraBlockSelectors:[".caption-visual-line"]},{matches:"www.youtube.com",observeUrlChange:!0,selectors:["yt-formatted-string[slot=content].ytd-comment-renderer","yt-formatted-string.ytd-video-renderer","yt-formatted-string#content-text","h1","yt-formatted-string#video-title","span#video-title","a#video-title","yt-formatted-string.ytd-transcript-segment-renderer","#description-inline-expander > yt-attributed-string > span","ytd-notification-renderer .message",".caption-window",".caption-visual-line"],wrapperPrefix:"",wrapperSuffix:"",globalStyles:{"ytd-expander.ytd-comment-renderer":"--ytd-expander-max-lines: 1000;","h1.ytd-watch-metadata":"-webkit-line-clamp: unset;max-height: unset;","yt-formatted-string#video-title":"-webkit-line-clamp: unset;max-height: unset;","#video-title":"-webkit-line-clamp: unset;max-height: unset;"},urlChangeDelay:2e3,atomicBlockSelectors:["yt-formatted-string[slot=content].ytd-comment-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title","#description-inline-expander > yt-attributed-string > span"],excludeSelectors:["[class^='lln-']"],extraBlockSelectors:["yt-formatted-string.ytd-transcript-segment-renderer",".caption-visual-line"],detectParagraphLanguage:!0,injectedCss:[".immersive-translate-target-wrapper img { width: 16px; height: 16px }",".metadata-snippet-container {max-height: unset !important;}"]},{matches:"https://www.instagram.com/p/*",selectors:["h1","h3 + div"],wrapperPrefix:"<br/>",paragraphMinTextCount:2,blockMinTextCount:2},{matches:"https://www.instagram.com/*",wrapperPrefix:"",wrapperSuffix:"",selectors:["h1"],paragraphMinTextCount:2,blockMinTextCount:2},{matches:"1paragraph.app",selectors:"#book"},{matches:"https://poeditor.com/projects/*",selectors:[".comment-body",".reference_language .source-string"]},{matches:["https://substack.com/","https://substack.com/inbox*","https://substack.com/account*","https://substack.com/browse*"],extraBlockSelectors:[".reader2-post-title"],excludeSelectors:[".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader"],globalStyles:{".reader2-clamp-lines":"max-height: unset; -webkit-line-clamp: unset;"}},{matches:["*.substack.com","newsletter.rootsofprogress.org"],selectors:[".post-preview-title",".post-preview-description",".post",".comment-body"],excludeSelectors:[".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader"],extraBlockSelectors:[".tweet-link-top",".tweet-link-bottom",".expanded-link"]},{matches:["seekingalpha.com/article/*","seekingalpha.com/news/*"],selectors:["[data-test-id=card-container]","[data-test-id=comments-section]"],excludeSelectors:["[data-test-id=post-page-meta]","header > div:first-child"]},{matches:"hn.algolia.com",selectors:[".Story_title > a:first-child",".Story_comment > span"]},{matches:"read.readwise.io",selectors:["div[class^='_titleRow_']","div[class^='_description_']","#document-text-content"],detectParagraphLanguage:!0},{matches:["www.inoreader.com","*.inoreader.com"],selectors:[".article_header_title",".article_title_link",".article_content",".article_magazine_title_link"],excludeMatches:["https://www.inoreader.com/features/"],observeUrlChange:!1,globalStyles:{".article_title_link":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:"*.ideas.aha.io",excludeSelectors:[".comment-header",".vote-status",".idea-meta",".filters-title",".ideas-showing-count",".my-ideas-filters-wrapper",".statuses-filters-wrapper",".categories-filters-wrapper","[class^='attachment']","span[class^='attachment-name']"]},{matches:["scholar.google.*/*","scholar.google.com.*/*","scholar.google.co.*/*"],wrapperPrefix:`
`,selectors:["h3 a[data-clk]","div.gs_rs","td a.gsc_a_at","td div.gs_gray:last-of-type","div.gsc_oci_value"],extraInlineSelectors:["br"],atomicBlockSelectors:["h3 a[data-clk]"]},{matches:"mail.google.com",detectParagraphLanguage:!0,selectors:["h2[data-thread-perm-id]","span[data-thread-id]","div[data-message-id] div[class='']"]},{matches:"outlook.live.com",excludeSelectors:[".jHAG3.XG5Jd",".OZZZK",".lDdSm"],selectors:["[role=region]"]},{matches:"www.producthunt.com",excludeMatches:"https://www.producthunt.com/stories/*",selectors:["h2","div[class^='styles_htmlText__']","[class^='styles_tagline']","a[href^='/discussions/'].fontWeight-600","button[class^='styles_textButton'] > div > span","h5 + p","div[data-test=product-item-name] + div"],globalStyles:{"h5 + p":"height:unset;"},excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.gitbook.io",additionalSelectors:["main"],_comment:"https://midjourney.gitbook.io/docs/user-manual"},{matches:"https://codeforces.com/*",stayOriginalTags:["[class^='MathJax']"]},{matches:"arxiv.org",additionalSelectors:["h1","blockquote.abstract"]},{matches:"*.labs.arxiv.org/*",stayOriginalTags:["math","semantics","mrow","mo","mfrac","msup","mi","mn","msqrt"],atomicBlockSelectors:[".ltx_abstract",".ltx_note_content",".ltx_p",".ltx_title"]},{matches:"https://discord.com/channels/*",isTranslateTitle:!1,selectors:["li[id^=chat-messages] div[id^=message-content]","div[class^=headerText]","section[aria-label='Search Results'] div[id^=message-content]"],extraBlockSelectors:["[class^='embedFieldValue']","li[class^='card'] div[class^='message']","[data-list-item-id^='forum-channel-list'] div[class^='headerText']"],globalStyles:{"div[class^=headerText]":"max-height: unset;","div[class^=message]":"max-height: unset;","div[class^=text]":"max-height: unset;","h3[data-text-variant='heading-lg/semibold']":"-webkit-line-clamp: none;"},detectParagraphLanguage:!0,wrapperPrefix:"<br />",wrapperSuffix:"",paragraphMinTextCount:1,paragraphMinWordCount:1},{matches:["web.telegram.org/z/*","web.telegram.org/a/*"],isTranslateTitle:!1,selectors:[".text-content",".message",".reply-markup-button-text",".bot-commands-list-element-description"],detectParagraphLanguage:!0},{matches:["web.telegram.org/k/*","web.telegram.org/k/"],selectors:[".message",".reply-markup-button-text",".bot-commands-list-element-description"],detectParagraphLanguage:!0},{matches:"gist.github.com",selectors:[".markdown-body",".readme"],detectParagraphLanguage:!0},{matches:"lobste.rs",excludeMatches:["https://lobste.rs/about","https://lobste.rs/chat"],selectors:[".u-repost-of",".comment_text"]},{matches:"*.slack.com",selectors:[".p-rich_text_block",".p-message_pane__foreword",".c-alert__message","[data-qa=message_attachment_text]"],additionalStayOriginalSelectors:["[data-qa=emoji]"],detectParagraphLanguage:!0},{matches:"1paragraph.app",additionalSelectors:["#book"]},{matches:"www.artstation.com/artwork/*",excludeSelectors:".project-description a",selectors:[".project-description","div.project-comment-text"],atomicBlockSelectors:"div.project-comment-text",detectParagraphLanguage:!0},{matches:"www.artstation.com/learning/courses/*",additionalSelectors:["footer.learning-course-description.ng-star-inserted > span"],excludeSelectors:".learning-card-meta"},{matches:["https://www.artstation.com/blogs","https://www.artstation.com/blogs/*"],detectParagraphLanguage:!0,additionalSelectors:[".comment-item-body"],atomicBlockSelectors:[".author-headline",".author-location"],excludeSelectors:["blog-card-thumbnail","blog-card-header",".blog-card-author",".blog-card-meta",".blog-view-header",".blog-grid-title",".post-meta-header"]},{matches:"www.figma.com/community/*",normalizeBody:"div.ql-editor[contenteditable='false']",excludeSelectors:["div[class*='metadataRight']","div[class*='commentMetaAndOptions']"],globalStyles:{"div[class*='mini_cardBottomRowSizing']":"height: 3em;"},additionalSelectors:"div[class*='mini_cardBottomRow_Metadata']",atomicBlockSelectors:"div[class*='mini_cardBottomRow_Metadata']",stayOriginalSelectors:"[data-tooltip='tooltip-user-info']"},{matches:"www.google.*/search*",detectParagraphLanguage:!0,excludeSelectors:["a h3 + div","div#sfooter","a[role=presentation] > div > div:first-child",".b5ZQcf",".CEMjEf",".MgUUmf.NUnG9d","#result-stats","[role=navigation]","div.sCuL3"],wrapperSuffix:"",globalStyles:{"div[data-content-feature='1'] > div":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:2']":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:3']":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:4']":"-webkit-line-clamp: unset;max-height: unset;",".V82bz":"-webkit-line-clamp: unset;max-height: unset;margin-bottom:30px",".uAKcGb":"-webkit-line-clamp: unset;max-height: unset;margin-bottom:30px",".Pw4Ldf.RsCEN":"height:unset;"},extraBlockSelectors:[".MUFPAc"]},{matches:"lowendtalk.com",selectors:["[role=heading]","h1",".userContent"]},{matches:"www.linkedin.com/jobs/*",selectors:["#job-details > span"]},{matches:"https://linkedin.com/feed/*",selectors:["h1",".feed-shared-update-v2__description-wrapper"]},{matches:"www.linkedin.com",additionalSelectors:["span.break-words > span > span[dir=ltr]"]},{matches:"www.indiehackers.com",selectors:[".content","h1","h3.story__title",".feed-item__title-link"]},{matches:"libreddit.de",selectors:["h2.post_title",".comment_body > .md"]},{matches:["notion.site","*.notion.site"],normalizeBody:"body",selectors:["div[data-block-id]"]},{matches:"www.newyorker.com",additionalSelectors:["h1","[data-testid=SummaryItemHed]"],urlChangeDelay:2e3},{matches:"start.me",selectors:[".rss-article__title",".rss-articles-list__article-link",".rss-showcase__title",".rss-showcase__text"]},{matches:"www.scmp.com",additionalSelectors:[".info__subHeadline",".section-content h2"]},{matches:"www.lesswrong.com",extraBlockSelectors:["span.commentOnSelection"]},{matches:["mastodon.social","mastodon.online","kolektiva.social","indieweb.social","mastodon.world","infosec.exchange"],isTranslateTitle:!1,selectorMatches:["div#mastodon"],selectors:["div.status__content__text"],detectLanguage:!0},{matches:"www.cnbc.com",additionalSelectors:["div.RenderKeyPoints-list"],urlChangeDelay:1e3,globalStyles:{"div.Card-titleContainer > div":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:"app.daily.dev",selectors:["h1",".typo-body","article h3","[class^=markdown_markdown]"],globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset"}},{matches:"www.aljazeera.com",additionalSelectors:["h1",".article__subhead"]},{matches:["*.pornhub.com","pornhub.com"],excludeMatches:["*.pornhub.com/insights/*","pornhub.com/insights/*"],selectors:[".title",".commentMessage > span","h1.floatLeft",".commentText"],detectParagraphLanguage:!0,wrapperPrefix:"<br/>",wrapperSuffix:`
`,globalStyles:{"span.title":"height: unset; max-height: unset;"}},{matches:["weibo.com"],selectors:["div[class^='detail_wbtext']"]},{matches:["medium.com","*.medium.com"],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],urlChangeDelay:20,additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]","rp","rt",".prism-code","[role=code]","#omni-extension",".omni-item","div[data-paste-markdown-skip]","table.highlight","div[class^=codeBlockContent]","div[class^=codeBlockLines]","div[class^=token-line]","#liuchan-window > .liuchan-container > *",".material-icons",".notranslate","[translate=no]"],selectors:["h1","h2","article section","[aria-hidden='false'] pre","article p"],excludeSelectors:["[aria-label='Post Preview Reading Time']"],globalStyles:{h2:"-webkit-line-clamp: unset;max-height:unset;","article p":"-webkit-line-clamp: unset;max-height:unset;"}},{selectorMatches:["meta[property='og:site_name'][content='Nitter']"],selectors:[".tweet-content",".quote-text"]},{matches:"*.fandom.com",additionalSelectors:[".mcf-card-article__title"]},{matches:["www.washingtonpost.com"],additionalSelectors:["[data-qa='article-body']"]},{matches:"www.economist.com",extraInlineSelectors:"span[data-caps='initial']"},{matches:"www.healthline.com",excludeSelectors:".icon-hl-trusted-source-after"},{matches:"www.ebay.com",excludeSelectors:["headers","[itemprop=offers]",".dne-itemtile-original-price"],paragraphMinTextCount:3,paragraphMinWordCount:1,globalStyles:{"[itemprop=name]":"-webkit-line-clamp: unset;max-height: unset;",".merch-item-title":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:"www.skinstore.com",excludeSelectors:[".responsiveFlyoutMenu_levelOneLink"],paragraphMinTextCount:3,paragraphMinWordCount:1},{matches:"www.tripadvisor.com",paragraphMinTextCount:3,paragraphMinWordCount:1},{matches:"www.amazon.com",paragraphMinTextCount:3,paragraphMinWordCount:1,globalStyles:{".s-line-clamp-2":"-webkit-line-clamp: unset;max-height: unset;",".s-line-clamp-4":"-webkit-line-clamp: unset;max-height: unset;","[data-rows]":"max-height: unset;-webkit-line-clamp: unset;","[data-a-expander-name='review_text_read_more']":" max-height: unset;"},excludeSelectors:["#navFooter","#navbar-main",".s-price-instructions-style"]},{matches:"marketplace.visualstudio.com",additionalExcludeSelectors:[".core-info-second-row",".core-info-third-row",".meta-data-list",".item-title",".breadcrumb",".itemDetails-right",".ux-user-name",".ux-updated-date",".ux-item-second-row-wrapper",".stats-and-offer",".header-container"],atomicBlockSelectors:[".core-info-cell > div.name"],globalStyles:{".item-details-control-root.ux-item-shortdesc":"height: unset; overflow: visible; max-height:unset;"}},{matches:"www.bloomberg.com",urlChangeDelay:2e3,excludeSelectors:[".ticker-bar","nav","[aria-label=Banner]","aside"]},{matches:"xueshu.baidu.com",globalStyles:{".abstract_wr":"height: unset; overflow: visible; max-height:unset;"}},{matches:"www.sciencedirect.com",urlChangeDelay:2e3,stayOriginalSelectors:["span.display"],extraBlockSelectors:["span.captions","span[id^=cap]"]},{matches:"www.thehighestofthemountains.com",extraBlockSelectors:"div"},{matches:"te.legra.ph",normalizeBody:"div.ql-editor[contenteditable='false']",urlChangeDelay:500},{matches:["telegra.ph"],normalizeBody:"div.ql-editor[contenteditable='false']",wrapperPrefix:`
`},{matches:["*.annas-archive.org","annas-archive.org"],selectors:["h3.text-xl.font-bold","div[class='truncate text-sm']"],globalStyles:{"div[id^='link-index-']":"height: unset; max-height: unset;"},normalizeBody:"body",extraBlockSelectors:["a.custom-a"]},{matches:["explainshell.com"],selectors:["[class='help-box']"]},{matches:["apnews.com"],urlChangeDelay:2e3},{matches:"play.google.com",additionalSelectors:["header[data-review-id] + div"]},{matches:["www.tumblr.com"],selectors:["article h1","article > header + div","[data-testid=notes-root] p","div.k31gt","p","article ul","article h2","article h3","article h4","article h5","article h6","article blockquote","article ol"],excludeSelectors:["div.fAAi8","div.wvu3V"],preWhitespaceDetectedTags:["DIV","SPAN","P"]},{matches:["mail.qq.com/cgi-bin/frame_html"],selectors:["#thisiddoesnotexists"]},{matches:"https://www.tinytask.net",globalStyles:{"table > tbody > tr > td > center > table > tbody > tr > td > ul > li":"height: 100%"}},{matches:"www.foxnews.com",shadowRootSelectors:["[data-spot-im-module-default-area='conversation'] > div"],excludeTags:["TITLE","LINK","SCRIPT","STYLE","TEXTAREA","SVG","svg","G","TEXT","NOSCRIPT","INPUT","BUTTON","BASE","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","RT","RP","META","ASIDE","MATH","TTS-SENTENCE","AIO-CODE"],excludeSelectors:[".site-footer",".components-MessageDetails-index__message-details-wrapper","div[class^=SlideDown__container]",".components-MessageActions-index__messageActionsWrapper","span[data-openweb-allow-amp]","div.spcv_typing-users"]},{matches:"www.afreecatv.com",globalStyles:{"a.title":"max-height:unset;-webkit-line-clamp:unset;"}},{matches:"opennet.ru",excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","LABEL","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","RT","RP","META"]},{matches:["www.construct.net"],excludeMatches:["preview.construct.net","editor.construct.net"],additionalSelectors:["aside","div.manualContent"],atomicBlockSelectors:[],stayOriginalSelectors:["a.usernameReference"],additionalInlineSelectors:["a.forumLink"],additionalExcludeSelectors:["div.topNav","div.usernameLink","ul.authorDetails","ul.tagViewer","ul.breadCrumbNav","ul.subForumForums","ul.postTools","li.comment ul.controls","div.forumTopNavWrap","div.downloadWrap","div.articleLeftMenu","div.usernameTextWrap","div.favouriteWrap","div.bannerWrapper","div.viewAddonRightMenu","div.extendedMenu.addonsSubMenu","#BottomLinks.bottomLinks","div#LeftSide.leftSide","div#BottomWrap.bottomWrap","div.courseListWrap div.overview","div.conversationControls","div.contentWrapper h1","div.conversationControls","td.location a#LocationLink","#TopLevelComments .topBar","#TopLevelComments .controls",".tagViewWrap",".changeCount",".otherStats",".FilterMenu",".mobileTopicStats",".forumControlsWrapper",".forumsBottomNavWrap",".breadCrumbNav",".favouriteWrap",".usernameLink",".followWrapper",".blogPostStats",".manualContent dl dt"],globalStyles:{"td.location a#LocationLink":"padding-top: 4px;","div.articleMain .tutCourseWrap":"align-items: flex-start;"}},{matches:"getpocket.com",selectors:["h2","div.excerpt p","article","h1"],globalStyles:{"h2.title":"max-height:unset;-webkit-line-clamp:unset;","div.excerpt p":"max-height:unset;-webkit-line-clamp:unset;"}},{matches:"*.fandom.com",urlChangeDelay:800,normalizeBody:"#mw-content-text",globalStyles:{"#mw-content-text > div > div:nth-child(1)":"height:100%;"},additionalExcludeSelectors:["header.fandom-community-header","div.ph-registration-buttons"]},{matches:"huggingface.co",globalStyles:{".line-clamp-2":"-webkit-line-clamp:unset;max-height:unset;"}},{matches:"www.statista.com",globalStyles:{".itemContent__text":"height:unset;max-height:unset;",".itemContent__subline":"height:unset;max-height:unset;"}},{matches:"epub-reader.online",globalStyles:{"span.slide-contents-item-label":"overflow:visible;max-height:unset;white-space:normal;"},atomicBlockSelectors:"div.slide-contents-item"},{matches:"https://you.com/search",globalStyles:{h3:"max-height:unset;-webkit-line-clamp:unset;",".caKYaC":"max-height:unset;-webkit-line-clamp:unset;",".dDwDsu":"max-height:unset;-webkit-line-clamp:unset;"},excludeSelectors:"div.hpIWZO"},{matches:"auth0.openai.com",excludeSelectors:["form","header > h1"]},{matches:"chat.openai.com",excludeSelectors:["div.absolute.bottom-0.left-0.w-full","h1","div#headlessui-portal-root","nav","div[data-radix-popper-content-wrapper]","ul[aria-multiselectable]",".markdown *","div[class='flex flex-col items-start']","div[class='flex items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300']"],isTranslateTitle:!1,wrapperPrefix:"",aiRule:{streamingSelector:".result-streaming.markdown",messageWrapperSelector:".markdown",streamingChange:!0}},{matches:["chat.newstop.asia","chat.waixingyun.cn"],excludeSelectors:[".markdown-body *"],aiRule:{streamingSelector:".n-button.n-button--warning-type.n-button--medium-type",messageWrapperSelector:".markdown-body",streamingChange:!1}},{matches:["askgpt.cn","chatcat.zhaoyoung.me"],excludeSelectors:[".markdown-body *"],aiRule:{streamingSelector:".home_chat-message-status__EsVNi",messageWrapperSelector:".markdown-body",streamingChange:!0}},{matches:"glasp.co",excludeSelectors:[".home_overview_list_content_wrapper"]},{matches:"developer.chrome.com",excludeSelectors:["web-tabs","ul.code-sections--summary"]},{matches:["developer.android.google.cn","developer.android.com"],observeUrlChange:!0,additionalSelectors:["aside","google-codelab-step"]},{matches:"www.ft.com",excludeSelectors:["headers","[aria-labelledby=cookie-banner-aria-label]","footer"]},{matches:"https://apps.microsoft.com/store/detail/*",additionalSelectors:["pre"],globalStyles:{".line-clamp":"-webkit-line-clamp:unset;max-height:unset;"},isTransformPreTagNewLine:!0},{matches:"gitlab.com",excludeSelectors:[".tree-content-holder","nav",".home-panel-metadata","div[data-testid=project_topic_list]",".commit"]},{matches:"www.newthingsunderthesun.com",additionalSelectors:["[translate=no]"]},{matches:"https://www.tiktok.com/*/video/*",selectors:["[data-e2e^=comment-level]","[data-e2e=browse-video-desc] > span"]},{matches:"www.rfc-editor.org",isTransformPreTagNewLine:!0,excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","SELECT","OPTION","IMG","SUB","SUP","HR","CODE","KBD","WBR","TT","RT","RP","META","ASIDE","FOOTER","MATH"]},{matches:"https://steamcommunity.com/app/*",globalStyles:{".forum_topic":"height:auto;",".forum_topic_name":"white-space:normal;"},excludeSelectors:[".forum_paging",".forum_topic_reply_count",".forum_topic_lastpost",".forum_topic_award_count",".discussion_search_pagingcontrols"],observeUrlChange:!0},{matches:"store.steampowered.com/app/*",selectors:[".game_description_snippet",".game_area_description","#earlyAccessHeader","[id^='ReviewContent'] .content"],excludeSelectors:["#global_actions","#store_controls","#foryou_tab","[class*=persona]","[class*=game_title_area]","a.btn_medium",".persona_name",".hours.ellipsis",".checkcol",".postedDate",".dev_row .summary",".already_in_library",".game_header_image_ctn .grid_content",".ds_flag.ds_wishlist_flag",".early_access_review.tooltip",".communitylink_achievement_images",".user_reviews_summary_row.summary",".review_award_ctn",".add_to_wishlist_area",".next_in_queue_content",".glance_tags.popular_tags",".game_purchase_action",".vote_button_ctn","#VoteUpDownBtnCtn","#footer","#ViewAllReviewssummary"],atomicBlockSelectors:[".game_area_sys_req_leftCol",".game_area_sys_req_rightCol"],extraInlineSelectors:[".pulldown"],additionalSelectors:[".game_page_autocollapse_ctn iframe"],globalStyles:{".game_description_snippet":"max-height:unset; overflow: scroll;",".game_purchase_area_friends_want":"height: auto; padding-bottom: 6px;",".div.early_access_banner":"height: 84px",".franchise_notice > *":"height: 84px"},detectParagraphLanguage:!0},{matches:"https://www.nature.com/articles/*",excludeSelectors:[".c-header",".c-recommendations-header",".c-recommendations-list-container",".c-article-references__links",".c-article-identifiers",".c-article-author-list",".c-article-metrics-bar__wrapper",".c-article__pill-button","#author-information-content","#article-info-section"]},{matches:"https://www.webofscience.com/wos/woscc/summary/*",globalStyles:{".abstract":"height:auto !important;",".show-more-lines":"height:unset !important;"},excludeSelectors:[".summary-left-panel",".authors","app-summary-authors + div"],observeUrlChange:!0,mutationChangeDelay:600},{matches:["appleinsider.com"],excludeSelectors:["#topic-nav"]},{matches:"https://www.jetbrains.com/help/*",extraBlockSelectors:["[data-test=prompt]"]},{matches:["https://crates.io/search*"],selectors:["div[class^=_description-box] div[class^=_description]"]},{matches:"www.theverge.com",shadowRootSelectors:["div#coral_thread > div"]},{matches:"https://beta.simp.red/trans*",mainFrameSelector:".simpread-read-root"},{matches:"https://www.lookintobitcoin.com/charts/*",excludeSelectors:["svg"]},{matches:"https://platform.openai.com/account/api-keys*",urlChangeDelay:1500},{matches:"https://pkg.go.dev/std",selectors:["td.UnitDirectories-desktopSynopsis"]},{matches:"https://pkg.go.dev/*",selectors:["div.UnitDetails p"]},{isEbook:!0,isTranslateTitle:!1,urlChangeDelay:200,selectorMatches:["meta[name='immersive-translate-ebook-viewer'][content='true']"],excludeSelectors:["#drop-target","#drop-target h1","#side-bar","h1#side-bar-title"],extraInlineSelectors:["span.dropcaps"],paragraphMinTextCount:1,paragraphMinWordCount:1,blockMinTextCount:1,blockMinWordCount:1,containerMinTextCount:1,wrapperPrefix:"<br />",targetWrapperTag:"span"},{isEbookBuilder:!0,isTranslateTitle:!1,targetWrapperTag:"span",selectorMatches:["meta[name='immersive-translate-ebook-builder'][content='true']"],globalMeta:{},excludeSelectors:["h1.notranslate","#drop-target","#drop-target h1","#side-bar","h1#side-bar-title","#tool",".Code"],paragraphMinTextCount:1,paragraphMinWordCount:1,blockMinTextCount:1,blockMinWordCount:1,containerMinTextCount:1,wrapperPrefix:"<br />"},{matches:["https://www.explainpaper.com/reader*"],isTranslateTitle:!1,selectors:[".leading-relaxed",".chat-messages p",".text-sm"]},{matches:"https://colab.research.google.com/*",excludeSelectors:["code","view-line"]},{matches:"www.gatesnotes.com",minZIndex:-1},{matches:"page.kakao.com",shadowRootSelectors:["div[style^='visibility: visible'"]},{matches:"coinmarketcap.com",extraBlockSelectors:["div[class='sc-3502f6cd-0 JxHqg']"]},{matches:"wandb.ai",additionalSelectors:[".report-page-top"],additionalStayOriginalSelectors:["span[data-slate-inline=true]"],extraInlineSelectors:[]},{matches:"paulgraham.com",additionalSelectors:["font[face=verdana]"],extraBlockSelectors:"font[face=verdana]"},{matches:"https://*.zendesk.com/agent/*",selectors:["[data-test-id*=subject]",".zd-comment",".title"]},{matches:"webmail.migadu.com",selectors:[".bodyText"]},{matches:"thehackernews.com",excludeSelectors:["span#blog-pager-older-link","span.h-datetime"],additionalSelectors:[".pop-title"]},{isSubtitleBuilder:!0,selectorMatches:["meta[name='immersive-translate-subtitle-builder'][content='true']"],pairs:{".source-text":".target-text"},paragraphMinTextCount:2,paragraphMinWordCount:1,isTranslateTitle:!1,wrapperPrefix:"",wrapperSuffix:""},{matches:"cs.brown.edu",excludeSelectors:[".SCodeFlow"]},{matches:"tass.ru",globalStyles:{"#__next":"font-size: 19px;line-height:28px;"}},{matches:"chat.google.com",selectors:["[jsname=bgckF]"]},{matches:"https://www.fiverr.com/inbox/*",selectors:[".message-body"]},{matches:["jira.*.com/browse/*","jira.*.com/projects/*"],selectors:["[id=descriptionmodule]","[id=summary-val]","div.action-body","td.stsummary"]},{matches:["*.aha.io"],selectors:["[tabindex='0']","div.user-content","div.comments__body","span.name"]},{matches:"thehill.com",injectedCss:[".most-popular-item { max-height: unset !important; }",".most-popular-item__link { -webkit-line-clamp: unset !important; }"],excludeSelectors:["div.featured-cards__byline","div.list-item__meta",".tags__item","div.extended-scroll__header",".submitted-by",".site-header--has-alert-banner",".homepage__container__opinion__item__byline",".homepage__container__header",".archive__item__meta"]},{matches:"manpages.ubuntu.com",selectors:["pre"],atomicBlockTags:["pre"]},{matches:"www.spiedigitallibrary.org",excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","G","NOSCRIPT","INPUT","BUTTON","BASE","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","RT","RP","META","ASIDE","FOOTER","MATH","TTS-SENTENCE","AIO-CODE"]},{matches:"www.promptingguide.ai",selectors:["article","li"]},{matches:"ground.news",globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset !important;"}},{matches:"*.ietf.org/doc/html/*",additionalSelectors:["pre"],isTransformPreTagNewLine:!0,preWhitespaceDetectedTags:["DIV","SPAN","PRE"]},{matches:"https://www.newsminimalist.com/",extraBlockSelectors:[".inline-flex"],excludeTags:["TITLE","LINK","SCRIPT","STYLE","TEXTAREA","SVG","svg","G","NOSCRIPT","INPUT","BASE","SELECT","OPTION","HR","PRE","KBD","WBR","RT","RP","META","MATH","TTS-SENTENCE","AIO-CODE"]},{matches:"https://player.vimeo.com/video/*",extraBlockSelectors:["span.vp-captions-line","span[class^=CaptionsRenderer_]"]},{matches:"https://yandex.com/",selectors:[".tabs__item-text"]},{matches:"https://yandex.com/search/*",excludeSelectors:[".KeyValue-Row",".EntityFeedbackFooter",".Organic-Subtitle",".SerpFooter-Content",".serp-user",".Pager"],globalStyles:{".ExtendedText-Toggle":"white-space:normal;"}},{matches:"https://yandex.com/video/*",selectors:[".serp-item__title",".serp-item__text",".Keypoints-ItemTitle",".bes-epmjnzm-idtktyj",".OrganicTitle-LinkText","h1.VideoTitle"],globalStyles:{".serp-item__title":"-webkit-line-clamp: unset;max-height:unset;",".serp-item__text":"-webkit-line-clamp: unset;max-height:unset;",".OrganicTitle-LinkText":"-webkit-line-clamp: unset;max-height:unset;","h1.VideoTitle":"-webkit-line-clamp: unset;max-height:unset;",".link .serp-item__keypoints":"bottom:2px;",".OrganicTitle":"max-height:unset;"}},{matches:"https://www.perplexity.ai/search/*",extraBlockSelectors:[".prose > span"],additionalStayOriginalSelectors:["a.citation"],insertPosition:"afterend"},{matches:"https://allmyfaves.com/",selectors:["p"],containerMinTextCount:2,containerMinWordCount:1,paragraphMinTextCount:2,paragraphMinWordCount:1},{matches:"man7.org",isTransformPreTagNewLine:!0,globalStyles:{pre:"white-space: inherit;"}},{matches:"https://www.kadaza.com/",selectors:[".header span.title",".custom-content-footer"],containerMinTextCount:2,containerMinWordCount:1,paragraphMinTextCount:2,paragraphMinWordCount:1},{matches:["https://babelnovel.com/books/*","https://www.webnovel.com/book/*"],urlChangeDelay:0},{matches:"blog.genuine.com",excludeSelectors:["div.enlighter"]},{matches:"www.chinadaily.com.cn",injectedCss:["a { height: unset !important; }","li { height: unset !important; }","div { height: unset !important; }",".immersive-translate-target-inner {color:black;}"]},{matches:"www.braynzarsoft.net",selectors:["div#view-question-desc"]},{selectorMatches:["meta[name=immersiveTranslateIosOnBoarding]"],initialGlobalAttributes:{"input#immersiveTranslateDetectedSlot":{value:"true"}},isInjectOptionsUrl:!0,isInjectVersion:!0},{globalAttributes:{"#stimulus":{translate:"off",class:"stimulus"},"#stem":{translate:"off",class:"stem"}},matches:"https://lawhub.lsac.org/question/*"},{matches:"https://www.yuque.com/*",excludeSelectors:[".lark-virtual-tree"]},{matches:"https://bearblog.dev/discover/*",excludeTags:["small"]},{matches:"www.researchgate.net",excludeSelectors:[".nova-legacy-v-publication-item__meta-data",".nova-legacy-v-publication-item__person-list",".js-authors-list"]},{matches:["www.theatlantic.com","https://mashable.com/*"],initialSelectorGlobalAttributes:{"footer:last-of-type":{translate:"no"},"nav:last-of-type":{translate:"no"},nav:{translate:"no"}}},{matches:"youtrack.jetbrains.com/articles/*",selectors:["[role=presentation]","[data-test=article-content]"],excludeSelectors:[".toolbar__ee8"]},{matches:"www.bbc.com",excludeSelectors:["section.module--languages",".drop-capped"]},{matches:"www.dw.com",initialSelectorGlobalAttributes:{"footer:last-of-type":{translate:"no"},"nav:last-of-type":{translate:"no"},nav:{translate:"no"}},excludeSelectors:[".focus-menu-shown"]},{matches:"docs.sentry.io",initialSelectorGlobalAttributes:{"footer:last-of-type":{translate:"no"},".navbar":{translate:"no"}}},{matches:"https://platform.openai.com/docs/*",urlChangeDelay:0},{selectorMatches:["meta[name='generator'][content^='Discourse']"],urlChangeDelay:0,_comment:"\u89E3\u51B3url\u53D8\u5316\u4F46\u662F\u9875\u9762\u4E0D\u53D8\u7684\u95EE\u9898"},{matches:"feedly.com",globalStyles:{".TitleOnlyLayout":"height:unset !important;",".EntrySummary--u4":"-webkit-line-clamp: unset;max-height:unset;",".EntrySummary--u5":"-webkit-line-clamp: unset;max-height:unset;"},excludeSelectors:[".Leftnav"]},{matches:"bard.google.com",excludeSelectors:["mat-sidenav","div.capabilities-disclaimer"],isTranslateTitle:!1,excludeTags:["TITLE","LINK","SCRIPT","STYLE","TEXTAREA","SVG","svg","G","NOSCRIPT","INPUT","BASE","SELECT","OPTION","HR","PRE","KBD","WBR","RT","RP","META","MATH","TTS-SENTENCE","AIO-CODE"]},{matches:"web.whatsapp.com",selectors:[".copyable-text"],wrapperPrefix:`
`,wrapperSuffix:"<br/>"},{matches:"https://cn.bing.com/search*",extraInlineSelectors:["a","i"]},{matches:"news.yahoo.com",excludeSelectors:["#ybar-inner-wrap"]},{matches:"www.wsj.com",excludeSelectors:["header","footer","nav","[aria-label='Markets summary']"]},{matches:"www.businessinsider.com",excludeSelectors:["header","nav","section.live-updates-module "]}]};function uh(){if(de.PROD==="1")return{};let e={};if(de.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID&&de.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY){let t={secretId:de.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,secretKey:de.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY};e.translationServices={},e.translationServices.tencent=t}if(de.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID&&de.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY){let t={appid:de.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,key:de.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY};e.translationServices||(e.translationServices={}),e.translationServices.baidu=t}if(de.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN){let t={token:de.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN};e.translationServices||(e.translationServices={}),e.translationServices.caiyun=t}if(de.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY){let t={apikey:de.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY};e.translationServices||(e.translationServices={}),e.translationServices.openl=t}if(de.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID&&de.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET){let t={appId:de.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,appSecret:de.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET};e.translationServices||(e.translationServices={}),e.translationServices.youdao=t}if(de.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID&&de.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY){let t={accessKeyId:de.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,secretAccessKey:de.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY};e.translationServices||(e.translationServices={}),e.translationServices.volc=t}if(de.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY){let t={authKey:de.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY};e.translationServices||(e.translationServices={}),e.translationServices.deepl=t}if(de.DEEPL_PROXY_ENDPOINT&&(e.translationServices||(e.translationServices={}),e.translationServices.deepl||(e.translationServices.deepl={}),e.translationServices.deepl.immersiveTranslateApiUrl=de.DEEPL_PROXY_ENDPOINT),de.IMMERSIVE_TRANSLATE_DEEPL_ENDPOINT&&(e.translationServices||(e.translationServices={}),e.translationServices.deepl||(e.translationServices.deepl={}),e.translationServices.deepl.immersiveTranslateDeeplTokenUrl=de.IMMERSIVE_TRANSLATE_DEEPL_ENDPOINT),de.IMMERSIVE_TRANSLATE_SECRET_OPENAI_API_KEY){let t={APIKEY:de.IMMERSIVE_TRANSLATE_SECRET_OPENAI_API_KEY};e.translationServices||(e.translationServices={}),e.translationServices.openai=t}return de.DEBUG==="1"&&(e.debug=!0,e.cache=!1,e.alpha=!0),de.MOCK==="1"&&(e.translationService="mock"),de.IMMERSIVE_TRANSLATE_SERVICE&&(e.translationService=de.IMMERSIVE_TRANSLATE_SERVICE),e}async function oa(){let e=await I.storage.local.get($u);if(e[$u]){let t=e[$u],n=t.tempTranslationUrlMatches||[],u=n.filter(o=>o.expiredAt>Date.now()),a=!1;u.length!==n.length&&(n=u,a=!0);let r={...t,tempTranslationUrlMatches:[...n]};return a&&await Wn(r),r}else return{}}async function Wn(e){await I.storage.local.set({[$u]:e})}async function Er(e){await I.storage.local.set({[pn]:e})}async function l4(){let e=await I.storage.local.get(pn),n={...c4(),...br,buildinConfigUpdatedAt:de.BUILD_TIME};if(e[pn]){let u=e[pn];if(u&&u.buildinConfigUpdatedAt){let a=new Date(u.buildinConfigUpdatedAt),r=new Date(n.buildinConfigUpdatedAt);a>r&&(n=u)}}return n}async function Qt(){let e=await I.storage.local.get(pn),t={...br,buildinConfigUpdatedAt:de.BUILD_TIME};if(e[pn]){let m=e[pn];if(m&&m.buildinConfigUpdatedAt){let f=new Date(m.buildinConfigUpdatedAt),w=new Date(t.buildinConfigUpdatedAt);f>w&&(t=m)}}let n={};if(!me()&&I.commands&&I.commands.getAll){let m=await I.commands.getAll();for(let f of m)f.name&&f.shortcut&&(n[f.name]=f.shortcut)}let u=c4(),a=uh(),r=await ah(),o=globalThis.IMMERSIVE_TRANSLATE_CONFIG||{},i=await oa(),s=new Date;if(i&&i.tempTranslationUrlMatches&&i.tempTranslationUrlMatches.length>0){let m=i.tempTranslationUrlMatches.filter(f=>new Date(f.expiredAt)>s);if(m.length>0){let f=r.translationUrlPattern?r.translationUrlPattern?.matches||[]:[],w=Array.isArray(f)?f:[f],y=Array.from(new Set(w.concat(m.map(p=>p.match))));r.translationUrlPattern={...r.translationUrlPattern,matches:y}}}let l=Object.assign({},o,a,r);if(!l.interfaceLanguage){let m=await rh();l.interfaceLanguage=m}let c=Object.assign(u,t),d=Object.keys(c),g=["translationUrlPattern","translationLanguagePattern","immediateTranslationPattern","translationBodyAreaPattern","translationParagraphLanguagePattern","translationThemePatterns","translationGeneralConfig","shortcuts","inputTranslationUrlPattern","inputLanguageCodeAlias"];for(let m of d){let f=m;if(f==="generalRule")typeof l[f]=="object"&&(c[f]=or(u[f],l[f]));else if(f==="translationServices"){let w=l[f]||{},y=t[f]||{},p=Object.keys(y),_=Object.keys(w),M=[...new Set([...p,..._])],A={};for(let S of M)A[S]={...y[S],...w[S]};c[f]=A}else if(typeof l[f]!="string"&&typeof l[f]!="boolean"&&typeof l[f]!="number"&&g.includes(f))l[f]&&(c[f]=Object.assign(c[f],l[f])),f==="shortcuts"&&(me()||yt()?c[f]={...c[f],...n}:c[f]={...n});else if(f==="rules"){if(Array.isArray(l[f])&&(c[f]=[...l[f],...c[f]]),de.PROD==="0"&&de.DEV_RULES){let w=JSON.parse(de.DEV_RULES);c[f]=[...w,...c[f]]}}else l[f]!==void 0&&(c[f]=l[f])}return c.donateUrl=t.donateUrl,c.minVersion=t.minVersion,c.feedbackUrl=t.feedbackUrl,c}async function ah(){return(await I.storage.sync.get("userConfig")||{}).userConfig||{}}var rh=async()=>{let e=["zh-CN"];try{e=await I.i18n.getAcceptLanguages()}catch(u){F.warn("get browser language error:",u)}let n=e.map(u=>Hn(u)).find(u=>In[u]);return n||"en"},c4=()=>{let e={...br,buildinConfigUpdatedAt:de.BUILD_TIME};return{...e,targetLanguage:$a,interfaceLanguage:"en",translationMode:"dual",debug:!1,alpha:!1,translationUrlPattern:{matches:[],excludeMatches:[]},translationLanguagePattern:{matches:[],excludeMatches:[]},translationThemePatterns:{},translationParagraphLanguagePattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationBodyAreaPattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationTheme:"none",translationService:"bing",translationArea:"main",translationStartMode:"dynamic",translationServices:{},generalRule:{...e.generalRule},translationGeneralConfig:{engine:"bing"},rules:[]}};var g4="auto",yr="auto",d4="auto";function Tr(e){g4=e}function Rt(e){yr=e}function Zt(){return yr!=="auto"?yr:d4!=="auto"?d4:g4}function Tu(){return yr}async function ln(e){let{url:t,config:n,state:u}=e,a=new URL(t),r="auto",{translationParagraphLanguagePattern:o,translationService:i,translationServices:s,translationTheme:l,translationThemePatterns:c,translationUrlPattern:d,targetLanguage:g,sourceLanguageUrlPattern:m,immediateTranslationPattern:f}=n,w=xu(t,o),y=xu(t,f),p=i,_=Object.keys(s);for(let ee of _){let we=s[ee];if(xu(t,we)){p=ee;break}}let M=l,A=Object.keys(c);for(let ee of A){let we=c[ee];if(we&&xu(t,we)){M=ee;break}}let S=xu(t,d),E=m4(t,d);E||(E=sn(t,$l)),E||(E=sn(t,n.blockUrls));let k=m4(t,n.inputTranslationUrlPattern);k||(k=sn(t,n.inputTranslationBlockUrls));let T=Object.keys(m),D={};for(let ee of T){let we=m[ee];if(we&&we.matches)for(let ke of we.matches)D[ke]=ee}let L=Object.keys(D),U=Pi(t,L);U&&(r=D[U]??"auto",D[U]&&D[U]!=="auto"&&Rt(D[U]));let v=g||"zh-CN",B=a.hostname,X=await Ut(B),O=a.pathname+a.search+a.hash,Z=await Ut(O),ve=`https://${X}.com/${Z}`,V=await oa(),J=await l4(),xe=n.translationStartMode;xe==="dynamic"&&y&&(xe="immediate");let C={targetLanguage:v,config:n,translationService:p,isTranslateUrl:S,sourceLanguage:r,mainFrame:document.body,isTranslateExcludeUrl:E,isInputTranslationExcludeUrl:k,rule:n.generalRule,url:t,encryptedUrl:ve,state:u?Object.assign({translationMode:n.translationMode,translationArea:n.translationArea,translationStartMode:xe,immediateTranslationTextCount:n.immediateTranslationTextCount,isAutoTranslate:!1,translationDebounce:300,isNeedClean:!1,isDetectParagraphLanguage:w,cache:n.cache,translationTheme:M},u):{translationMode:n.translationMode,translationArea:n.translationArea,translationStartMode:xe,immediateTranslationTextCount:n.immediateTranslationTextCount,isAutoTranslate:!1,translationDebounce:300,isNeedClean:!1,isDetectParagraphLanguage:w,cache:n.cache,translationTheme:M},localConfig:V};C.state.translationArea==="body"&&(C.config.generalRule.excludeTags=C.config.generalRule.excludeTags.filter(ee=>!C.config.generalRule.bodyTranslateTags.includes(ee)),C.config.generalRule.additionalExcludeSelectors=C.config.generalRule.additionalExcludeSelectors.filter(ee=>ee!==".btn"));let x=n.translationServices[C.translationService]||{};x.immediateTranslationTextCount!==void 0&&oh(x.immediateTranslationTextCount)&&x.immediateTranslationTextCount>=0&&(C.state.immediateTranslationTextCount=x.immediateTranslationTextCount),C.translationService==="deepl"&&x&&x.authKey&&x.authKey.startsWith("immersive_")&&x.immediateTranslationTextCountForImmersiveDeepl!==void 0&&x.immediateTranslationTextCountForImmersiveDeepl>=0&&(C.state.immediateTranslationTextCount=x.immediateTranslationTextCountForImmersiveDeepl),x&&x.translationDebounce&&typeof x.translationDebounce=="number"&&(C.state.translationDebounce=x.translationDebounce);let H=J.immediateTranslationTextCount;n.immediateTranslationTextCount!==H&&(C.state.immediateTranslationTextCount=n.immediateTranslationTextCount);let q=n.rules,ue;globalThis.PDFViewerApplication?ue=q.find(ee=>ee.isPdf):globalThis.immersiveTranslateEbookViewer?ue=q.find(ee=>ee.isEbook):globalThis.immersiveTranslateEbookBuilder?ue=q.find(ee=>ee.isEbookBuilder):ue=q.find(ee=>xu(t,ee)),C.rule.isPdf&&(C.state.translationArea="main"),C.state.translationArea==="body"&&(C.rule.paragraphMinTextCount=1,C.rule.paragraphMinWordCount=1),ue&&ue.isEbookBuilder&&(C.state.translationStartMode="immediate");let te=n.generalRule;if(ue&&(C.rule=or(te,ue)),C.rule.selectors.length>0&&(C.rule.paragraphMinTextCount=2,C.rule.paragraphMinWordCount=1),C.state.translationArea==="body"&&C.rule.excludeTags&&(C.rule.excludeTags=C.rule.excludeTags.filter(ee=>!C.rule.bodyTranslateTags.includes(ee)&&!C.rule.forceTranslateTags.includes(ee))),C.rule.mainFrameSelector){let ee=document.querySelector(C.rule.mainFrameSelector);ee&&(C.mainFrame=ee)}return C}function xu(e,t){if(!t)return!1;let{matches:n,excludeMatches:u,selectorMatches:a,excludeSelectorMatches:r}=t;return u&&u.length>0&&sn(e,u)?!1:n&&n.length>0&&sn(e,n)?!0:r&&r.length>0&&pr(r)?!1:!!(a&&a.length>0&&pr(a))}function m4(e,t){if(!t)return!1;let{excludeMatches:n,excludeSelectorMatches:u}=t;return!!(n&&n.length>0&&sn(e,n)||u&&u.length>0&&pr(u))}function oh(e){return typeof e=="number"}var sx=f4(2),p4=f4(3);function f4(e){if(typeof e!="number"||Number.isNaN(e)||e<1||e===Number.POSITIVE_INFINITY)throw new Error("`"+e+"` is not a valid argument for `n-gram`");return t;function t(n){let u=[];if(n==null)return u;let a=typeof n.slice=="function"?n:String(n),r=a.length-e+1;if(r<1)return u;for(;r--;)u[r]=a.slice(r,r+e);return u}}var ih=/\s+/g,sh=/[\t\n\v\f\r ]+/g;function h4(e,t){t?typeof t=="string"&&(t={style:t}):t={};let n=t.preserveLineEndings?lh:ch;return String(e).replace(t.style==="html"?sh:ih,t.trim?dh(n):n)}function lh(e){let t=/\r?\n|\r/.exec(e);return t?t[0]:" "}function ch(){return" "}function dh(e){return t;function t(n,u,a){return u===0||u+n.length===a.length?"":e(n)}}var b4={}.hasOwnProperty;function gh(e){return e==null?"":h4(String(e).replace(/[\u0021-\u0040]+/g," ")).trim().toLowerCase()}function mh(e){return p4(" "+gh(e)+" ")}function ph(e){let t=mh(e),n={},u=-1;for(;++u<t.length;)b4.call(n,t[u])?n[t[u]]++:n[t[u]]=1;return n}function E4(e){let t=ph(e),n=[],u;for(u in t)b4.call(t,u)&&n.push([u,t[u]]);return n.sort(fh),n}function fh(e,t){return e[1]-t[1]}var hh={cmn:/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,Latin:/[A-Za-z\u00AA\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uAB66-\uAB69\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A]|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]/g,Cyrillic:/[\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F]|\uD838[\uDC30-\uDC6D\uDC8F]/g,Arabic:/[\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C-\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u0870-\u088E\u0890\u0891\u0898-\u08E1\u08E3-\u08FF\uFB50-\uFBC2\uFBD3-\uFD3D\uFD40-\uFD8F\uFD92-\uFDC7\uFDCF\uFDF0-\uFDFF\uFE70-\uFE74\uFE76-\uFEFC]|\uD803[\uDE60-\uDE7E\uDEFD-\uDEFF]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]/g,ben:/[\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FE]/g,Devanagari:/[\u0900-\u0950\u0955-\u0963\u0966-\u097F\uA8E0-\uA8FF]|\uD806[\uDF00-\uDF09]/g,jpn:/[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g,jav:/[\uA980-\uA9CD\uA9D0-\uA9D9\uA9DE\uA9DF]/g,kor:/[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,tel:/[\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C77-\u0C7F]/g,tam:/[\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA]|\uD807[\uDFC0-\uDFF1\uDFFF]/g,guj:/[\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9-\u0AFF]/g,kan:/[\u0C80-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3]/g,mal:/[\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4F\u0D54-\u0D63\u0D66-\u0D7F]/g,mya:/[\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F]/g,pan:/[\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A76]/g,amh:/[\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]/g,tha:/[\u0E01-\u0E3A\u0E40-\u0E5B]/g,sin:/[\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4]|\uD804[\uDDE1-\uDDF4]/g,ell:/[\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65]|\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]/g},Ni={Latin:{spa:" de|de |os | la| a |la | y |\xF3n |i\xF3n|es |ere|rec|ien|o a|der|ci\xF3|a p|cho|ech|en |ent|a l|aci|e d|el |ona|na | co|as |al |da | to|ene|e l| en| el| pe|nte|tod|ho | su|per|ad | ti|a t|ers|tie| se|rso| pr|son|e s|te |oda|cia|n d|o d|dad|ida| in|ne | es|ion|cio|s d|con|est|a e| po|men| li|res|nci|su |to |tra| re|n e| lo|tad| na|los|a s| o |ia |que| pa|r\xE1 |pro| un|s y|ual|s e|lib|nac|do |ra |er |nal|ue | qu|e e|a d|ar |nes|ica|a c|sta|ser|or |ter|se |por|cci|io |des|ado|les|one|a a|del|l d|ndi| so| cu|s p|ale|s n|ame|par|ici|oci|una|ber|s t|rta|com| di|e a|imi|o s|e c|ert|o e|dos|las|o p|ant|dic|nto| al|ara|ibe|enc|cas| as|e p|ten|ali|o t|soc|y l|n c|s l|l t|pre|nta|so |tos|y a|ria|n t|die|a u| fu|no |l p|ial|qui|dis|s o|hos|gua|igu| ig| ca|sar| ma|l e| ac|tiv|s a|re |nad|vid|era| tr|ier|cua|n p|cla|ade|bre|s s|esa|ntr|ecc|a i| le|lid|das|d d|ido|ari|ind|ada|nda|fun|mie|ca |tic|eli|ta |y d|nid|e i|n l|ios|o y|esp|iva|y e|mat|bli|r a|dr\xE1|tri|cti|tal|rim|ont|er\xE1|us |sus|end|pen|tor|ito|ond|ori|uie|lig|n a|ist|rac|lar|rse|tar|mo |omo|ibr|odo|edi|med| me|nio|a y|eda|isf|lo |aso|l m|ias|ico|lic|ple|ste|act|tec|ote|rot|ele|ura| ni|ie |adi|u p|seg|s i|un |und|a n|lqu|alq|o i|inc|sti| si|n s|ern",eng:"the| th| an|he |nd |ion|and| to|to |tio| of|on |of | in|al |ati|or |ght|igh|rig| ri|ne |ent|one|ll |is |as |ver|ed | be|e r|in |t t|all|eve|ht | or|ery|s t|ty | ev|e h|yon| ha|ryo|e a|be |his| fr|ng |d t|has| sh|ing| hi|sha| pr| co| re|hal|nal|y a|s a|n t|ce |men|ree|fre|e s|l b|nat|for|ts |nt |n a|ity|ry |her|nce|ect|d i| pe|pro|n o|cti| fo|e e|ly |es | no|ona|ny |any|er |re |f t|e o| de|s o| wi|ter|nte|e i|ons| en| ar|res|ers|y t|per|d f| a | on|ith|l a|e t|oci|soc|lit| as| se|dom|edo|eed|nti|s e|t o|oth|wit| di|equ|t a|ted|st |y o|int|e p| ma| so| na|l o|e c|ch |d a|enc|th |are|ns |ic | un| fu|tat|ial|cia| ac|hts|nit|qua| eq| al|om |e w|d o|f h|ali|ote|n e| wh|r t|sta|ge |thi|o a|tit|ual|an |te |ess| ch|le |ary|e f|by | by|y i|tec|uni|o t|o o| li|no | la|s r| su|inc|led|rot|con| pu| he|ere|imi|r a|ntr| st| ot|eli|age|dis|s d|tle|itl|hou|son|duc|edu| wo|ate|ble|ces|at | at| fa|com|ive|o s|eme|o e|aw |law|tra|und|pen|nde|unt|oun|n s|s f|f a|tho|ms | is|act|cie|cat|uca| ed|anc|wor|ral|t i| me|o f|ily|pri|ren|ose|s c|en |d n|l c|ful|rar|nta|nst| ag|l p|min|din|sec|y e| tr|rso|ich|hic|whi|cou|ern|uri|r o|tic|iti|igi|lig|rat|rth|t f|oms|rit|d r|ee |e b|era|rou|se |ay |rs | ho|abl|e u",por:"de | de| se|\xE3o |os |to |em | e |do |o d| di|er |ito|eit|ser|ent|\xE7\xE3o| a |dir|ire|rei|o s|ade|dad|uma|as |no |e d| to|nte| co|o t|tod| ou|men|que|s e|man| pr| in| qu|es | te|hum|odo|e a|da | hu|ano|te |al |tem|o e|s d|ida|m d| pe| re|o a|ou |r h|e s|cia|a e| li|o p| es|res| do| da| \xE0 |ual| em| su|a\xE7\xE3|dos|a p|tra|est|ia |con|pro|ar |e p|is | na|r\xE1 |qua|a d| pa|com|ais|o c|ame|er\xE1| po|uer|sta|ber|ter| o |ess|ra |e e|das|o \xE0|nto|nal|o o|a c|ido|rda|erd| as|nci|sua|ona|des|ibe|lib|e t|ado|s n|ua |s t|ue | so|ica|ma |lqu|alq|tos|m s|a l|per|ada|oci|soc|cio|a n|par|aci|s a|pre|ont|m o|ura|a s| um|ion|e o|or |e r|pel|nta|ntr|a i|io |nac|\xEAnc|str|ali|ria|nst| tr|a q|int|o n|a o|ca |ela|u\xE7\xE3|lid|e l| at|sen|ese|r d|s p|egu|seg|vid|pri|sso|\xE9m |ime|tic|dis|ra\xE7|eci|ara| ca|nid|tru|\xF5es|ass|seu|por|a a|m p| ex|so |r i|e\xE7\xE3|te\xE7|ote|rot| le| ma|ing|a t|ran|era|rio|l d|eli|\xE7a |sti| ne|cid|ern|utr|out|r e|e c|tad|gua|igu| ig| os|s o|ru\xE7|ins|\xE7\xF5e|ios| fa|e n|sse| no|re |art|r p|rar|u p|inc|lei|cas|ico|u\xE9m|gu\xE9|ngu|nin| ni|gur|la |pen|n\xE7a|na |i\xE7\xE3|i\xE3o|cie|ist|sem|ta |ele|e f|om |tro| ao|rel|m a|s s|tar|eda|ied|uni|e m|s i|a f|ias| cu| ac|r a|\xE1 a|rem|ei |omo|rec|for|s f|esc|ant|\xE0 s| vi|o q|ver|a u|nda|und|fun",ind:"an |ang|ng | da|ak | pe|ata| se| ke| me|dan| di| be|ber|kan|ran|hak|per|yan| ya|nga|nya|gan| at|ara| ha|eng|asa|ora|men|n p|n k|erh|rha|n d|ya |ap |at |as |tan|n b|ala|a d| or|a s|san|tas|eti|uk |pen|g b|set|ntu|n y|tia|iap|k m|eba|aan| un|n s|tuk|k a|p o|am |lam| ma|unt| de|ter|bas|beb|dak|end|i d|pun|mem|tau|dal|ama|keb|aka|ika|n m| ba|di |ma | sa|den|au |nda|n h|eri| ti|ela|k d|un |n a|ebe|ana|ah |ra |ida|uka| te|al |ada|ri |ole|tid|ngg|lak|leh|dap|a p|dil|g d|ena|eh |gar|na |ert|apa|um |tu |atu|a m|sam|ila|har|n t|asi|ban|erl|t d|bat|uat|ta |lan|adi|h d|neg| ne|kum|mas|nan|pat|aha| in|l d|emp|sem|rus|sua|ser|uan|era|ari|erb|kat|man|a b|g s|rta|ai |nny|n u|ung|ndi|han|uku|huk| hu|sa |ers|in | la|ka | su|ann|car|kes|aku|dip|i s|a a|erk|n i|lai|rga|aru|k h|i m|rka|a u|us |nak|emb|gga|nta|iba| pu|ind|s p|ent|mel|ina|min|ian|dar|ni |rma|lua|rik|ndu|lin|sia|rbu|g p|k s|da |aya|ese|u d|ega|nas|ar |ipe|yar|sya|ik |aga| ta|ain|ua |arg|uar|iny|pem|ut |si |dun|eor|seo|rak|ngs|ami|kel|ini|g t|dik|mer|emu|aks|rat|uru|ewa|il |enu|any|kep|pel|asu|rli|ia |dir|jam|mba|mat|pan|g m|ses|sar|das|kuk|bol|ili|u k|gsa|u p|a k|ern|ant|raa|t p|ema|mua|idi|did|t s|i k|rin|erm|esu|ger|elu|nja|enj|ga |dit",fra:" de|es |de |ion|nt |tio|et |ne |on | et|ent|le |oit|e d| la|e p|la |it | \xE0 |t d|roi|dro| dr| le|t\xE9 |e s|ati|te |re | to|s d|men|tou|e l|ns | pe| co|son|que| au| so|e a|onn|out| un| qu| sa| pr|ute|eme| l\u2019|t \xE0| a |e e|con|des| pa|ue |ers|e c| li|a d|per|ont|s e|t l|les|ts |tre|s l|ant| ou|cti|rso|ou |ce |ux |\xE0 l|nne|ons|it\xE9|en |un | en|er |une|n d|sa |lle| in|nte|e t| se|lib|res|a l|ire| d\u2019| re|\xE9 d|nat|iqu|ur |r l|t a|s s|aux|par|nal|a p|ans|dan|qui|t p| d\xE9|pro|s p|air| ne| fo|ert|s a|nce|au |ui |ect|du |ond|ale|lit| po|san| ch|\xE9s | na|us |com|our|ali|tra| ce|al |e o|e n|rt\xE9|ber|ibe|tes|r d|e r|its| di|\xEAtr|pou|\xE9t\xE9|s c|\xE0 u|ell|int|fon|oci|soc|ut |ter| da|aut|ien|rai| do|iss|s n| ma|bli|ge |est|s o| du|ona|n p|pri|rs |\xE9ga| \xEAt|ous|ens|ar |age|s t| su|cia|u d|cun|rat| es|ir |n c|e m| \xE9t|t \xEA|a c| ac|ote|n t|ein| tr|a s|ndi|e q|sur|\xE9e |ser|l n| pl|anc|lig|t s|n e|s i|t e| \xE9g|ain|omm|act|ntr|tec|gal|ul | nu| vi|me |nda|ind|soi|st | te|pay|tat|era|il |rel|n a|dis|n s|pr\xE9|peu|rit|\xE9 e|t \xE9|bre|sen|ill|l\u2019a|d\u2019a| mo|ass|lic|art| pu|abl|nta|t c|rot| on| lo|ure|l\u2019e|ava|ten|nul|ivi|t i|ess|ys |ays| fa|ine|eur|r\xE9s|cla|t\xE9s|oir|eut|e f|utr|doi|ibr|ais|ins|\xE9ra|\u2019en|i\xE9t|l e|s \xE9|nt\xE9| r\xE9|ssi| as|nse|ces|\xE9 a",deu:"en |er |der|ein| un|nd |und|ung|cht|ich| de|sch|ng | ge|ine|ech|gen|rec|che|ie | re|eit| au|ht |die| di| ha|ch | da|ver| zu|lic|t d|in |auf| ei| in| be|hen|nde|n d|uf |ede| ve|it |ten|n s|sei|at |jed| je| se|and|rei|s r|den|ter|ne |hat|t a|r h|zu |das|ode| od|as |es | an|fre|nge| we|n u|run| fr|ere|e u|lle|ner|nte|hei|ese| so|rde|wer|ige| al|ers|n g|hte|d d| st|n j|lei|all|n a|nen|ege|ent|bei|g d|erd|t u|ren|nsc|chu| gr|kei|ens|le |ben|aft|haf|cha|tli|ges|e s| si|men| vo|lun|em |r s|ion|te |len|gru|gun|tig|unt|uch|spr|n e|ft |ei |e f| wi| sc|r d|n n|geh|r g|dar|sta|erk| er|r e|sen|eic|gle| gl|lie|e e|tz |fen|n i|nie|f g|t w|des|chl|ite|ihe|eih|ies|ruc|st |ist|n w|h a|n z|e a| ni|ang|rf |arf|gem|ale|ati|on |he |t s|ach| na|end|n o|pru|ans|sse|ern|aat|taa|ehe|e d|hli|hre|int|tio|her|nsp|de |mei| ar|r a|ffe|e b|wie|erf|abe|hab|ndl|n v|sic|t i|han|ema|nat|ber|ied|geg|d s|nun|d f|ind| me|gke|igk|ie\xDF| fa|igu|hul|r v|dig|rch|urc|dur| du|utz|hut|tra|aus|alt|bes|str|ell|ste|ger|r o|esc|e g|rbe|arb|ohn|r b|mit|d g|r w|ntl|sow|n h|nne|etz|raf|dlu| ih|lte|man|iem|erh|eru| is|dem|lan|rt |son|isc|eli|rel|n r|e i|rli|r i| mi|e m|ild|bil| bi|eme| en|ins|f\xFCr| f\xFC|gel|\xF6ff| \xF6f|owi|ill|wil|e v|ric|f e",jav:"ng |an | ka|ang|ing|kan| sa|ak |lan| la|hak| pa| ha|ara|ne |abe| in|n k|ngg|ong|ane|nga|ant|won|uwo| an| uw|nin|ata|n u|en |ra |tan| da|ran|ana| ma|nth|ake|ben|beb|hi |ke |sab|nda| ng|adi|thi|nan|a k| ba|san|asa|ni |e h|e k|g k| ut|pan|awa| be|eba|gan|g p|dan| wa|bas|aka|dha|yan|sa |arb|man| di|wa |g d| na|g n|ban| tu|n s|ung|wen|g s|rbe|dar|dak|di |g u|ora|aya|be |ah |a s|eni| or|han|as | pr|a n|na |iya|a a|kar|at |a l|mar|uwe|duw|uta|und|n p|asi|pa | si|ala|n n| un|kab|oni|ya |i h|gar|g b|yat|tum|ta |n m|i k|apa|taw| li|ani| ke|al |ka |kal|ngk|ega| ne|nal|n i|g a|ggo|ina|we |ena|dad|iba|awi|aga|a p| ta|sar|adh|awe|and|uju|ind|min|sin|ndu|uwa|gge|n l|ggu|ngs|n b|a b|pra|iji|n a|ha | bi|kat|go | ku|e p|ron|kak|ngu|a u|gsa|war|nya|g t|pad|bis|k b|i w|ae |wae| nd|ali|a m|er |sak|e s|ku |liy|ama|i l|eh |isa|arg|n t|a d|kap|i s|ayo|gay| pe|ndh|bad|pri|neg|tow|uto|eda|bed|il |ih | ik|ur |k k|rta|art|i p|rga|lak|ami|ro |aro|yom|r k|e d|a w|kon|rib|eng|ger|g l|ras|dil| ti|k l|rap|mra|uma| pi|k h|n d|gaw|wat|ga |k n|ar |per| we|oma|k p|jro|ajr|saj|ase|ini|ken|saw|ona|nas|kas|h k|i t| um|tin|wo | me|aba|rak|pag|yar|sya|t k| te| mu|ngl| ni|i b|men|ate|a i|aku|ebu|a t| du|g m|owo|mat| lu|amp",vie:"ng |\u0323c |\u0301c | qu|a\u0300 | th|nh | ng|\u0323i |\u0300n |va\u0300| va| nh|uy\xEA| ph|quy| ca|\xEA\u0300n|y\xEA\u0300|\u0300nh|\u0300i |\u0323t | ch|o\u0301 | tr|ng\u01B0|i n| gi|g\u01B0\u01A1|\u01A1\u0300i|\u01B0\u01A1\u0300|\u0301t | co|\u01B0\u01A1\u0323| cu|a\u0301c|\u01B0\u0323 |\u01A1\u0323c| kh| \u0111\u01B0|\u0111\u01B0\u01A1| t\u01B0|co\u0301| ha|\xF4ng|c t| \u0111\xEA|n t|i \u0111|i\u0300n|\u0300u |ca\u0301|gia|\u0301i |o\u0323i|mo\u0323| mo|\xEA\u0300u|i\xEA\u0323|\u0111\xEA\u0300|u c|nh\u01B0|pha| ba| bi|\xE2\u0301t|\u0309a |u\u0309a|cu\u0309|h\xF4n| \u0111\xF4|g t|\u0301 q|\u0303ng| ti|t\u01B0\u0323|t c|\u0323n | la|n \u0111|n c|n n|hi\xEA|ch |ay |hay| vi|\xE2n | \u0111i| na|ba\u0309| ho|do | do| t\xF4| hi|\xF4\u0323i|ha\u0301|i\u0323 |na\u0300|\u0300 t|\u01A1\u0301i|h\xE2n| m\xF4|\u0301p |a\u0300n|\u0323 d|\u0301ch|\u0323p |\u0300o |a\u0300o|kh\xF4|\u0301n |\xF4\u0323t|m\xF4\u0323| h\xF4|ia |\xF4\u0301c|c h|h\u01B0\u0303|i v|g n|\u0301ng|u\xF4\u0301|qu\xF4|h t|\xF4n |\xEAn |n v|nh\xE2|\u0323 t| b\xE2|i c|g v|\u0309ng|i\xEA\u0301|c c|\xE2\u0323t|th\u01B0|h\u01B0 |\u01B0\u01A1\u0301|\u0309n | v\u01A1| c\xF4|c \u0111| \u0111o| s\u01B0|t t|\xF4\u0323c|\u01B0\u0303n|v\u01A1\u0301| v\xEA|a\u0309 |\u0323ng|g \u0111|\u0309o |a\u0309o|u\xE2\u0323| \u0111a|bi\u0323|la\u0300|s\u01B0\u0323|b\xE2\u0301|ha\u0300|h\xF4\u0323|i t|a\u0309n|h\u01B0\u01A1|\u0300ng|tro|\u0309m |o v| mi|\xEA\u0309 |u\u0323c|i h|\u01B0\u0301c|a\u0301p|g c|\u0303 h|ia\u0301|n b|\u0309i |a m|h c|c\xF4n|\xEA\u0323n|\u01A1\u0301c|ha\u0323|\u0111\xF4\u0323| du| c\u01B0|a c|n h|tha|a\u0303 | xa|\u0301o |a\u0301o|i\u0301n|\u0300y |g b| h\u01B0|g h|ong|ron|\u0300 c|cho|\u0300 n|mi\u0300|\u01B0\u0323c|h v|c b| lu|i b|\xEA\u0323 |ai |\xEA\u0301 |\u0323 c|xa\u0303|kha|c q|i\xEA\u0309|t\xF4\u0323|\xF4\u0301i|\u0111\xF4\u0301|a\u0301 |hoa|o h|h \u0111|ca\u0309|n l|ho\u0323|ti\xEA|y t|\u0309 c|a\u0323i|a\u0301n|\u0300 \u0111|oa\u0300|y \u0111|chi|\u0309 n|ph\xE2|\xEA\u0300 |thu|i\xEAn|du\u0323|o c|i m|lu\xE2|c p|\xF4\u0301n|c l|\u0301 c|u\u0303n|cu\u0303|c g|c n|qua|n g|c m|o n|a\u0309i|ha\u0309|\u0301 t|ho |v\xEA\u0300| t\xE2| h\u01A1|o t|\u01A1\u0309 |h\u01B0\u0301|hi\u0300|vi\xEA|\u0300m |\u0309 t|\u0111o\u0301|th\xF4|\u01B0\u0301 |c\u01B0\u0301|hi\u0301|\u0301nh|a\u0300y|\u01A1\u0309n|\u01B0\u01A1\u0309| b\u0103|tri| ta|m v|c v|\u01A1\u0323p|h\u01A1\u0323|h m| n\u01B0|\xEA\u0301t|thi|\u0103\u0323c|ngh|uy ",ita:" di|to | in|ion|la | de|di |re |e d|ne | e |zio|rit|a d|one|o d|ni |le |lla|itt|ess| al|iri|dir|tto|ent|ell|i i|del|ndi|ere|ind|o a| co|te |t\xE0 |ti |a s|uo |e e|gni|azi| pr|idu|ivi|duo|vid|div|ogn| og| es|i e| ha|all|ale|nte|e a|men|ser| su| ne|e l|za |i d|per|a p|ha | pe| un|con|no |sse|li |e i| o | so| li| la|pro|ia |o i|e p|o s|i s|in |ato|o h|na |e s|a l|e o|nza|ali|tti|o p|ta |so |ber|ibe|lib|o e|un | a | ri|ua |il | il|nto|pri|el | po|una|are|ame| qu|a c|ro |oni|nel|e n| ad|ual|gli|sua|ond| re|a a|i c|ri |o o|sta|ita|i o| le|ad |i a|ers|enz|ssi|\xE0 e|it\xE0|gua|i p|e c|io | pa|ter|soc|nal|ona|naz|ist|cia|rso|ver|a e|i r|tat|lle|sia| si|rio|tra|che| se|rt\xE0|ert|anz|eri|tut|\xE0 d|he | da|al |ant|qua|on |ari|o c| st|oci|er |dis|tri|si |ed | ed|ono| tu|ei |dei|uzi|com|att|a n|opr|rop|par|nes|i l|zza|ese|res|ien|son| eg|n c|ont|nti|pos|int|ico|r\xE0 |sun|ial|lit|sen|pre|tta|dev|nit|era|eve|ll |l i| l |nda|ina|non| no|o n|ria|str|d a|art|se |ssu|ica|raz|ett|sci|gio|ati|egu| na|i u|utt|ve | ma|do |e r|ssa|sa |a f|n p|fon| ch|d u|rim| fo|a t| sc|tr\xE0|otr|pot|n i| cu|l p|ra |ezz|a o|ini|sso|dic|ltr|uni|cie| ra|i n|ruz|tru|ste| is|der|l m|a r|pie|lia|est|dal|nta| at|tal|ntr| pu|nno|ann|ten|vit|a v",tur:" ve| ha|ve |ir |ler|hak| he|her|in |lar|r h|bir|ya |er |ak |kk\u0131|akk|eti| ka| bi|eya|an |eri|iye|yet|ara|ek | ol|de |vey|\u0131n |\u0131r |nda|ar\u0131|esi|\u0131n\u0131|d\u0131r| ta|tle|e h|as\u0131|etl|e k| va|\u0131 v|s\u0131n|ile|ne |rke|erk|ard|ine| sa|\u0131nd|ini|k h|k\u0131n|ama|le |tin|rd\u0131|var|a v| me|e m|na |sin|ere|k v| \u015Fa| bu|lan|kes|dir|rin|dan| ma|k\u0131 |mak|\u015Fah|da | te|mek| ge|n\u0131 | hi|nin|en |n h| se|lik|rle|ana|lma|e a|\u0131 h|r \u015F|ill|si | de|aya|zdi|izd|aiz|hai|ret|hi\xE7|\u0131na| i\u015F|e b| ba|kla|et | h\xFC|r\u0131n|n k|ola|nma|e t| ya|eme|riy|n v|e i|a h|li |mil|eli|ket|ik |kar|irl|h\xFCr|im |evl|mes|e d|ahs|ma |rak|ala|let|lle|un | ed|rri|\xFCrr|bu | mi|i v|dil| il| e\u015F|n i|la |el |mal| m\xFC| ko|e g|se | ki|mas|lek|mle|mem|n b|ili|e e|ser| i\xE7|n s|din| di|es |mel|eke|tir|\u015Fit|e\u015Fi|r b|akl|yla|n m|len| ke|edi|oru|nde|re |ele|ni |t\xFCr|a k|eye|\u0131k |ken|u\u011Fu| uy|eml|erd|ede|ame| g\xF6|e s|i m|tim|i b|rde|r\u015F\u0131|ar\u015F|a s|it |t v|siy|ar |rme|est|bes|rbe|erb|te |al\u0131| an|ndi|end|hs\u0131|unm|r\u0131 |kor|n\u0131n| ce|maz|mse|ims|kim|i\xE7 | ay|a m|lam|ri |s\u0131z|a b|ade|n t|nam|lme|ilm|k g|il |tme|etm|r v|e v|n e|\u011Fre|\xF6\u011Fr| \xF6\u011F|al |\u0131yl|olm|vle|\u015Fma|i s|ger|me | da|ind|lem|i o|may|cak|\xE7in|i\xE7i|nun|kan|ye |e y|r t|az |\xE7 k|ece|s\u0131 |eni| mu|ulu|und|den|lun| fa|\u015F\u0131 |ahi|l v|r a|san|kat| so|enm| ev|i\u015F ",pol:" pr|nie|pra| i |nia|ie |go |ani|raw|ia | po|ego| do|wie|iek|awo| ni|owi|ch |ek |do | ma|wo |a p|\u015Bci|ci |ej | cz| za| w |ych|o\u015Bc|rze|prz| ka|wa |eni| na| je|a\u017Cd|ka\u017C|ma |z\u0142o|cz\u0142|no\u015B|o d|\u0142ow|y c|dy |\u017Cdy|i p|wol| lu|ny |oln| wy|stw| wo|ub |lub|lno|rod|k m|twa|dzi|na | sw|rzy|aj\u0105|ecz|czn|sta| sp|owa|o p|spo|i w|kie|a w|zys|obo|est|neg|a\u0107 |mi |cze|e w|nyc|nic|jak| ja|wsz| z |jeg|wan|\u0144st|o s|a i|awa|e p|yst|pos|pow| r\xF3|o o|j\u0105c|ony|nej|owo|dow|\xF3w | ko|kol|aki|bez|rac|sze|iej| in|zen|pod|i i|ni | ro|cy |o w|zan|e\u0144s|no |zne|a s|lwi|olw|ez |odn|r\xF3w|odz|o u|ne |i n|i k|czy| be|acj|wob|inn| ob|\xF3wn|zie| ws|aln|orz|nik|o n|icz|zyn|\u0142ec|o\u0142e|po\u0142|aro|nar|a j|i z|t\u0119p|st\u0119|ien|cza|o z|ym |zec|ron|i l|ami| os|kra| kr|owe| od|ji |cji|mie|a z|bod|swo|dni|zes|e\u0142n|pe\u0142|iu |edn|iko|a n|raj| st|odo|zna|wyc|em |lni|szy|wia|nym|\u0105 p|j\u0105 |ze\u0144|iec|pie|st |jes| to|sob|kt\xF3|ale|y w|ieg|och|du |ini|war|zaw|nny|roz|i o|wej|i\u0119 |si\u0119| si|nau| or|o r|kor|e s|pop|zas|niu|z p|owy|w k|ywa| ta|ymi|hro|chr| oc|jed|ki |o t|ogo|oby|ran|any|oso|a o|t\xF3r| kt|w z|dne|to |tan|h i|nan|ejs|ada|a k|iem|aw |h p|wni|ucz|ora|a d| w\u0142|ian| dz| mo|e m|awi|\u0107 s|gan|zez|mu |taw|dst|wi\u0105|w c|y p|kow|o j|i m|y s|bow|kog|by |j o|ier|mow|sza|b o|ju |yna",swh:"a k| ya|na |wa |ya | ku|a m| na| ha|i y| wa|a h|a n|ana|aki|ki |la |hak| ka|kwa|tu | kw| ma|li |a a|ila|i k| ki|ni |a w|ali|a u| an| mt|ke |mtu|a y|ake|ati|kil|ka |ika|kat|ili|te |ote|we |a s|e k|ia |zi |u a|za |azi|ifa|ma |yak|yo |i n|ama| yo|au | au|e a|kut|amb|o y|ha |asi|fa |u w|hal|ara|sha|ish|ata|ayo| as|tik|u k| za|i z|ina|u n|mba|uhu|hi |hur|cha|yot|ru |uru|wat| ch|eri|ngi|e y|u y|i a|aif|tai| sh|nay|chi|ra |ani| bi| uh|sa | hi|i h|awa|iwa|a j|ti |mu |o k|ja |kan|uli|iwe|any|i w| am|e n|end|atu|kaz|o h|ria|her|she|shi|nch| nc|uta|ye |wak|ii |ele|ami|adh|eza| wo|iki|oja|moj|jam| ja|aka|bu |kam|kul|mat|fan|a l|agu|ind|ne |iri|lim|wen|da |kup|uto|i m|a b|ini|wan|bil| ta|sta|dha| sa| ni|ao | hu|e w|wot| zi|rik|kuf|aji|ta |wez|nya|har| ye|e m|si |lin| ut|ine|gin|ing| la|a t|zim|imu|ima|tak|e b|uni|ibu|azo|kos|yan|nye|uba|ari|ahi|nde|asa|ri |ham|dhi|eli|hir|ush|pat| nd|kus|maa|di |nda|oa |bar|bo |mbo|oka|tok|ndw|ala|wal| si|uzi|hii|tah|i s|o n|liw| el|upa|zin|hag|a c|ndi|ais|mai|eny|mwe|aa |ewe| al|ndo|e h|lo |umi|kuh|jib|osa|mam|a z|ufu|dwa|u i| in|iyo|nyi| ny|u m|sil|ang|o w|guz|zwa|uwa|kuw|hil|saw|uch|ufa|laz|und|aha|ua | mw|bal| lo|o l|a i|del|nun|anu|nji| ba|lik|le |uku|i i",sun:"an |na |eun|ng | ka|ana| sa| di|ang|ung|un |nga|ak | ha|keu| ba|a b| an|nu |hak| bo|anu|ata|nan|a h|ina| je|aha|ga |ah |awa|jeu| na|ara|ing|oga|bog|gan| ng|asa|kan|a s|ha |ae |bae|n k|a k| pa|a p|sah|g s|sar| si|sin|a n|din|n s|ma | at|aga|a a|tan| ku| ma|n a|san|man|wa |lah|pan|taw|u d|ra |ari|eu | pi|gar| pe|kat| te|n p|sa |per|a d|a m|e b|aan|ban|ran|ala|ike|n n|kum| ti|ama|a j|pik|ima|n d|al |at | ja|ila|ta |nda|bas|rim|teu|n b|eba|beb|udu|aya|ika|ngg|nag|kab|rta|art| me|ola|k n|uma|atu|aba|g k|adi|aca| po|ngt|nar|una|ate|oh |boh|awe|di |tin|asi|uku|n h|dan|aka|iba|car|sac|gaw|are|ent|um |jen|abe|u s|dil|pol|ar |ku |kud|u m|upa|han| hu|ake|bar|ur |hna|aru|h s|a t|sak|wat|kaw| so|n t|pa |mpa|du |ngk|g d|ena|huk| mi|mas|ngs|ti |n j|ka |aku|ren|n m| ta|law|isa| tu|und|a u|h a|tay|ula|aja|ali|nte|gsa|en |gam| wa|ieu|ere|k h|jal|h b|il |dit|ngu|lan|asu|yun|ayu|gta|k d|a r|g n|mah|uda|dip|kas|rup|geu| be|ter|sej|min|ri |ern|u p|k k|amp|ura|kal|e a|k a|ut |g b|nak|bis| bi|k p|tes|end|we |h k|tun|uan| un| de|u n|h t|ksa|u k|ian|wil|u b|ona|nas|uka|rak|eje| se|ami| ke|war| ra| ie|k j|eh |ya |lma|alm|pen|tur|wan|lak|h j|g a|ean|up |rga|arg|r k|u t| ne|deu|gal|gke|e t|h p| ge|g t| da|i n",ron:" de|re | \xEEn|\u0219i |are|de | \u0219i|te |ul | sa|rep|e d|ea |ept|dre|tul|e a| dr|ie |\xEEn |ptu|le |ate|la |e p| la| pe|ori| pr|ce |e s| or|au |tat| ar|ice|ii |or |a s| fi| a |ric|ale|per| co|n\u0103 |\u0103 a|rea|ers|i s| li|sau| ca|rso|ent|lor|a\u021Bi|al |a d|e o|men|l l|ei |e c|pri|an\u0103| ac| re|uri|ber|ibe|lib|a p|oan|soa| in|i l|ter| al| s\u0103|tea|l\u0103 |car|t\u0103\u021B|s\u0103 |tur|i a|i d|nal| ni|ri |ita|e \xEE|e \u0219|se |ilo|in |ia |\u021Bie|pre|fie|\u021Bii|\u0103\u021Bi|con|ere|e f|a o|eni|nte| nu| se|ace|ire|ici| cu|i \xEE|a c|i n|a l|pen|ui |nu |\u0103ri|al\u0103|ona|l d|r\u0103 |ert|ril| su|ntr|n c|rin| as|ni |i o|eri|t\u0103 |c\u0103 |ile|\u0103 d|i c|e n|ele|sa | mo|i p|fi |sal|tor|va |oci|soc|nic|pro| un| tr|est|in\u021B|a \xEE|uni|n m|a a| di|ecu|lui|sta|lit| po|tre|gal|ega|oat|ra |act|\u0103 \xEE|leg|u d|e l|nde|int|a f|n a| so|na\u021B|ara|i f|uie|iun| to|tar|ste|ces|rar|at | ce|eme|i \u0219|rec|dep| c\u0103| o | \xEEm|bui|ebu|reb| eg| na|m\xE2n|ntu|ili|v\u0103\u021B|\xE2nd|iei|r \u0219|bil|pli|od |mod|res|din|e e|c\u021Bi| au|ali|\u0103 p|\u0103 f|\xEEmp|ial|cia|ion|\u0103 c|dec|nta| om|it\u0103| fa|\u021B\u0103 |cu |tra|\u0103\u021B\u0103|nv\u0103|\xEEnv|\xE2t |ite|i i|lic| pu| ex|riv|tri|rot|\u021Ba |\u021Bi |l c|rta|imi|ulu|\u021Bio|ic\u0103|lig|rel|ta |cla|t \xEE|nt |nit|e m|\xE2nt|\u0103m\xE2|\u021B\u0103m|ger|n\u021Ba|ru |tru|gur|u c|bli|abi|at\u0103|art|par|ar |rim|iva|l \u0219| sc|ime|nim|era|sup|ind|u a|dic|ic | st| va|ini|igi|e r",hau:"da | da|in |a k|ya |a d| ya|an |a a| ko| wa|na | a |sa | ha|kin|wan|ta | ba|a s| ta|a y|a h|wa |ko | na|n d|a t|ba |ma |n a| ma|iya|hak|asa| sa|ar |ata|yan| za|akk|a w|ama| ka|i d|iki|a m|owa|a b| ci| mu| sh|anc|nci|kow|a z|ai |nsa|a c|shi| \u0199a|cik|ne |ana|i k|ci |kki|e d|a \u0199| ku|su |n y|uma|ka |uwa|kum|hi |a n|utu| yi|ani| ga| ra|aka|ali|mut|\u2018ya|tar| do|\u0257an|ars| \u2018y|sam|\u0199as|nda|ane|man|tum|i a|yi |ni | du|ada| su|and|a g|cin| ad|a i|ke | \u0257a|n k|yin|um |e m| ab|ins|nan|ki |mi |ami|yar|min|oka|re |i b|kam|mas|i y|mat|za |ann|en |a\u0257a| ja|m n|li |duk|dai|e s|n s|ra |n w|n h|aik| ai|ida|ga |san|rsa|aba|sar|ce |nin| la|o n|ban|nna|kan|abi|una|dam|me |ara|i m|hal|a r|add|are|n j|abu| ne|zai|a \u0257|wat|ari| \u0199u|on |ans|wa\u0257|ame|ake|kar|din|zam| fa|a l|\u0199un|buw|r d| hu|oki|kok|a \u2018|u d|n t|abb|aur| id|rin|yak|dok|kiy|ray|jam|n b|ubu|bub|n m|i s| an|am |ili|bba|omi|dan|gam|ayu|ash|nce|tsa|ayi|har|yya|ika|bin|han|kko|rsu|aif|imi|fa | am|i i|dom| ki|yuw|dun|o a|fan|n \u0199|aya|fi |n r|she|uni|bay|riy|n \u2018|sab| iy|bat|tab|aga| ir|mar|o w|i w|sha|awa| ak|uns|unc|tun|u k| il|\u0257in|mfa|amf|aci|ewa|kas|lin|n n|don|n i|ure|ifi|lai|dda| ts|iri|aye|un |tan|wad|gwa|afi| ay|ace|mba|amb|aid|nta|ant|war|lim|kya| al|a\u0257i",fuv:"de | e |e n| ha|nde|la | wa|ina| ka|akk| nd|\u0257o |na | in|e e|hak|al |di |i h|kke|ii |um |ko |ala|ndi| mu| ne|lla| jo|wal|e\u0257\u0257|ne\u0257|all|mum| fo|kal|jog|ke |aaw|taa| ko|eed|\u0257\u0257o|aa | le|ji |ade|aad|laa|o k| ng|e h| ta|re |ogi|a j|e w|e m|nnd|gii|e l|ley|awa|aag|ede|waa|e k|gu |e d| go|gal|\u0253e |ti |fot|aan|eyd|ydi|\u0257e |ee | re|ol |oto|i e|oti|m e|taw|nga|a i|kee|to |ann|eji|am |ni | wo|een|goo|eej|e f| he|enn|gol|agu|pot| po|dee|ay | fa|ka |a k|ond|oot| de|a f|o f|a n|wa |maa|ota|le |hay|i k|o n|ngo|e j|o t| ja|\xF1aa|hee|nka|i w|awi|a w|ngu|der| to|e t|dim|i n|fof|i f|e g|tee|naa|aak| do|too|a e|ndo|ren|dii|oor|er |o e|i m|of | sa| so|gaa|ani|kam| ma| \xF1a|o w|i l|u m|kaa|ima|dir| ba|igg|lig| li|aar| \u0253e|o i|e s| o |e r|so |ooj| nj| la|won|awo|dow|woo|faw|and|e i|ore|nge|nan|are|a t|tin|aam| mo|\u0257ee|ita|ira|aa\u0257|e p|nng|ma |ank|yan|nda|oo |e \u0253|njo|ude|nee|e y|e a|je | ya|en |ine|iin| di|ral| na|\u0257i |und| hu|inn|\u014Bde|a\u014Bd|ja\u014B|a d|den| fe| te|go | su|a h|haa|tal|e\u0257e|e b|y g|baa|tde| yi|\u0257\u0257a|o h|ii\u0257|ow | da|do |l n|alt| ho|l e|aga|mii| aa|a a|ama|nna|m t| ke|edd|oga|m w|l m|o j|a\u0257e|ree|oje|yee| no|ele|ne |ago| pa| al|guu|wi |ge |aa\u0253|daa|ind|dew|i j|jey| je|ent|tan|o \u0257|ge\u0257| ge|\xF1ee|a l| \u0257u|kko|mak|a s| ga",bos:" pr| i |je |rav|na |ma |pra| na|ima| sv|a s|da |a p|vo |nje|ko |ako|anj|o i| po|avo|ja |e s|a i|ti | im| da| u |sva|no |ju | za|o n|va |i p|ili|vak|li | ko|ne | il|koj| ne|nja| dr|ost| sl|van|im |i s|u s|i i|a n|ava|ije|a u| bi|stv|se |a d|om |jed|bod|obo|lob|slo| se| ra|ih |sti| ob| je|pri|enj|dru|u i|o d|iti|voj|raz|ova|dje| os|e i|lo |e p| nj|uje|i d|bra|tre| tr| su|jeg|i n|u z|a k|og |u p|oje|cij|reb|a o|a b|lju|i u|ran|mij|ni |nos|jen|ba |edn|svo| iz|jel|pro|e d|\u017Eav|bit| ni|i o|sta|a z|avn|vje| ka|bil|ovo|a j|aju|ist|nih|tu |red|gov| od|e o|oji| sm|lje|o k|ilo|ji |aci|e u|e n|pre|o p|eba|u o|su |vim|i\u010Dn| sa|u n| dj|a t|ija|\u010Dno|jem|r\u017Ea|dr\u017E|elj|stu|dna|odn|eni|za |iva|olj|\u0161ti|nom|em |du |vno|smi|jer|e b|de |pos|m i| do|u d|nak|a r|obr| mo|lja|nim|ego| kr|tit|kri|ve |nju|an |iko|nik|nu |i m|nog|eno|sno| st|e k|tup|rug|ka |oda|riv|vol|aln|m s|itu|a\u0161t|za\u0161|ani|sam|akv|ovi|osn|rod|aro| mi|tva|dno|nst|jan|ak |ite|vi\u010D|rad|u m| ta|dst|tiv|nac|rim|kon|ku |odu|\u017Eiv|amo|tvo|tel|pod|g p|nov|ina|nar| vj|o s|i b|oj | ov|ave|vu |ans|oja|zov|azo|ude|bud| bu|e t|i v|din|edi|nic|tan|nap|mje| is|jal|slu|pun|eds|o o|zak|jav|i k|m p|tno|ivo|ere|ni\u010D|m n|jim|kak|ada|vni|ugi| ro|mov|ven|pol|to |te | vr",hrv:" pr| i |ma |rav|ima|pra|je |na | sv|ti | na|a p|vo |vat|ko |a s|nje| po|anj|avo|o i|tko| im|a i|sva|no |i p|e s|ja |o n| za|ju |ili| u |va |li | bi|ne |i s|atk| il|iti|da | ne| ko| dr| sl|van|nja|koj|ije| ra|ova| os|u s|i i|ost|bod|obo|lob|slo|pri|a n|om |jed|ati|ih |im |voj|ava| ob|stv|se | mo|i u|bit|dru| je| se|dje|i o|enj| ka|i n|sti|lo |u i|svo|mij|ni |e i|raz|a o|e n|bra|o p| su|a b|u p|ran|a k|og |i d|bil|ako|e p|a d|edn|aju|mor|eni| nj|iva|jel|\u017Eav| ni|a z|avn|ovi|eno|ra |oje|a j| da|a u|ora|jeg| iz|nih|r\u017Ea|dr\u017E|oji|sno|nit|jen|vje|ilo|cij|oda|nim| dj|pro|tit|u z|e d|red|nom|jem| od|nos|sta|nov|osn| sm|lje|o s|ji |ovo|stu|pos|vim| do|odn|rad|ist| sa|e o|tu |nju|em |gov|o d|rod|i m|jer|aci|oj |pre|m i|nak|dna|a r|lju|uje|e m|obr|za |olj|ve |o o|m s|an |nu |du |aro|vno|smi|aln|e k|o k|i b|e u|tva|u u|tup|rug|dno|u o|su |u d|ka |vol| ta|ija|itu|\u0161ti|a\u0161t|za\u0161|itk|\u017Eiv|ani|sam|elj| st|sob|oso|nar|akv|ada| mi|te |ona|nst|jan|lja|i v|ite|ego|elo|rim|ku |odu|amo|tvo|tel|jim|pod|nog|vi |ina| vj|to |e b|ans|zov|azo|ak | sk|edi|tan|oju|pun|pot|oti|kon|zak|i k|m p|tno|ivo|ere|ni\u010D|kak|vni|ugi| ro|mov|ven|\u0161tv| be|ara|kla|ave|u b|avi|oja|jal|u m|dni|mje|rak|din|\u0107i |ju\u010D|klj|nic|u k|nap|obi|atn",nld:"en |an |de | de| he|ing|cht| en|der|van| va|ng |een|et |ech| ge| ee|n e|rec| re|n v|n d|nde|ver| be|er |ede|den| op|het|n i| te|lij|gen|zij| zi|ht |ijk|eli| in|t o| ve|op |and|ten|ke |ijn|e v|jn |ied| on|eft| ie|sch|n z|n o|aan|ft |eid|te |oor| we|ond|eef|ere|hee|id |in |rde|n w|t r|aar|rij|ord|wor|ens|of | of|hei|n g| vr| vo| aa|r h|hte| wo|n h|al |nd |vri|e o|ren|le |or |n a|jke|lle|eni|n b|ij |e e|g v| st|ige|die|e g|men|nge|t h|e b| za|e s|om |t e|ati|wel|erk|sta|ers| al| om|n t|zal|dig| me|ste|voo|ter|gin|re |ege|ge |g e|bes|nat| na|eke|che|ig |gel|nie|nst|e a|nig|est|e w|erw|r d|end|ona|d v|jhe|ijh|d e|ele| di|ie | do|del|n n|at |it | da|tie|e r|elk|ich|jk |vol|ijd|tel|min|len|str|lin|n s|per|t d|han| zo|hap|cha|wet| to|ven| ni|aat|ion|tio|taa|lke|eze|met|ard|waa|uit|sti|e n|doo|pen|eve|el |toe|ale|ien|ach|st |ns | wa|eme|nin|e d|bij| gr|n m|p v|esc|t w|ont|ite|man|ema| ma|nal|g o|rin|hed|t a|t v|beg|all|ijs|wij|rwi|e h| bi|gro|p d|rmi|erm|her|oon| pe|eit|kin|t z|iet|iem|e i|gem|igi| an|d o|r e|ete|e m|js | hu|oep|g z|edi|arb|zen|tin|ron|daa|teg|g t|raf|tra|eri|soo|nsc|t b| er|lan| la|ern|ar |lit|zon|d z|ze |dez|eho|d m|tig|loo|mee|ger|ali|gev|ije|ezi|gez|nli|l v|tij|eer| ar",srp:" pr| i |rav|na |pra| na|ma | sv|ima|da |ja |a p|vo |je |ko |ti |avo| po|a i|ako|a s| za| u |ju |o i| im|nje|i p|va |sva|anj|vak| da|o n|nja|e s|ost| ko|a n|li |ili|ne |om | ne|i s| sl| il| dr|no |koj|u s|ava| ra|og |slo|im |enj|sti|bod|obo|lob|iti|a o|stv|i u|a d|ni |jed|u p|pri|edn| bi|i i|a k|o d|sta|ih |dru|a u| je| os| ni|nos|pro|aju|i o|ran| de| su|u i|se |van|ova|i d|cij| ob|uje|red|\u017Eav|e i|i n|voj|e p|a j|dna| se| od|ve | ka|eni|r\u017Ea|dr\u017E|a z|avn|aci|ovo|u u|m i|oja| iz|lja| nj|ija|u z|e o|rod|jen|lje|e b|raz|jan|lju|svo|za |gov|i\u010Dn| st|nov|sno|osn|du |ji |pre| tr|su |vu |odn|a b|jeg|nim|nih|tu |tit|\u0161ti|ku |nom|bit|e d|me |iko|\u010Dno|oji|lo |vno|nik|e n|\u0111en|ika|bez|ara|de |u o|vim|nak| sa|u n|riv|ave|an |olj|vol| kr|o p|sme|e k|nog| ov|e u|tva|bra|rug|reb|tre|u d|oda| mo| vr|vlj|avl|ego|jav|del|m s|kri|o k|a\u0161t|za\u0161|nju| sm|ani| li|dno|e\u0111u|aln|la |akv|oj |\u0161en|kom|stu|ugi|avi|a r|ka |rad|oju|tan|odi|vi\u010D|tav|itu|ude|bud| bu|pot|odu|\u017Eiv|ere|m n|tvo|ilo|bil|aro|ovi|por|eno|\u0161tv|nac|ove|m p|tup|pos|rem|dni|ba |nst|a t|ast|iva|e m|vre|nu |be\u0111|ist|pun|en |te |dst|rot|zak|ao |kao|i k|ju\u0107|o s|st |sam|ter|nar| me|i m|kol|e r|u\u0161t|ru\u0161|ver|kak| be|i b|kla|ada|eba|ena|ona| on|tvu|ans| do|rak|slu",ckb:" he| \xFB |\xEAn | bi| ma|na |in |maf| di|an |xwe| xw|ku | ku|kes| de| ji|her|kir|iya|ya |rin|iri|ji |bi |es | ne|ye |y\xEAn|e b|er |af\xEA|tin|ke | an|iy\xEA|eye|rke|erk|we | be|e h|de | we|hey|f\xEA |i b|y\xEA |ina| b\xEA| li|diy|ber|li |re |\xEE \xFB|n\xEA |\xEA d| se| ci|eke|di |w\xEE | na|\xEE y|af |ete|hem| w\xEE|sti| ki|r\xEE |k\xEE |\xEE a|yek|n d|kar| te|ne |y\xEE |i h|e k|t\xEE |t\xEA |a w|e d|\xEE b|s m|ast|n b|be |yan|ser|tew|net| tu| ew|hev|aza|ara|\xFB b|n k|adi|ev |zad| az|ras|est|an\xEA| ya|n h|n \xFB|wed| t\xEA|wek|bat|bo | bo| y\xEA|st |n n|\xEA k|dan|\xEA h|ema|\xEA b|iye|\xEE h|din|b\xFBn|r k|ek\xEE| me|par|\xFBna|ta |wle|ewl|\xEE m| ke|nav|ewe|man|\xEA t|d\xEE |\xFB m|m\xFB |em\xFB|a m|ika|e \xFB|n w|a x|\xEA m|e n| ta|ela|n j|ey\xEA|n x|civ|wey|ana| re|khe|ekh|bik|k\xEA |j\xEE |f h|er\xEE| pa|\xEEna|bin|erb|vak|iva|a s| ni|cih|v\xEA |e j|ari| p\xEA|\xEE d|n\xEAn|ike|e t|a k|\xEA x| ye|n a|ey\xEE|n e|ama|b\xEA |ar |ewa|at\xEA|bes|rbe|av |ibe|ist|m\xEE |tem|awa|are|h\xEE |geh|nge|ing|nek|n\xFBn|an\xFB|qan| qa|v\xEE |rti|uke|tuk| \u015Fe|eza| da|u d|\xFB a|f \xFB|edi| ra|tu |tiy|t\xEAn| mi|xeb| ge|h\xEEn| h\xEE|et\xEA|\xEE j|st\xEE|mal|bib|ra |i d|e m|mam|i a|nik|i m|\xEE k| wi|\xFBn | ko|a \u015F|\xEA j|riy|lat|wel|e e|ine|ane|\xFB h|\xEEn |a d|siy|end|aye| za|ija|a n|\xEE n|ek |tek|yet|mbe|emb|\xFB d|rov|iro|mir|eba| xe|m\xEAn| \xEAn| hu|n\xEEn|an\xEE|t \xFB|ten|n m|dem|\xEA \xFB|en\xEA|te |art|i r| j\xEE|u j|ek\xEA|dew",yor:" n\xED|ti |\u1ECD\u0301 |n\xED | l\xE1| \u1EB9\u0300|\xE0n |\u1EB9\u0301 |kan|t\xED | t\xED|an |\u1EB9\u0300 |t\u1ECD\u0301|\u1ECD\u0300 | \u1EB9n|\u1ECDn |w\u1ECDn|\xED \u1EB9|b\xED |\xE1ti|l\xE1t|\u0300t\u1ECD|\u1EB9\u0300t| gb| \xE0t| \xE0w|n l|\xE0ti| a |l\u1EB9\u0300|\u1EB9n\xEC| \xF3 |k\u1ECD\u0300| l\xF3|\xEC k|s\xED |\u1ECD\u0300k| k\u1ECD|ra |ni |\xE0b\xED|t\xE0b| t\xE0|n\xEC | s\xED|\u0300ka|\u1ECD\u0300\u1ECD|n \u1EB9|\xE0w\u1ECD|n t|\xF3 n|\u0300\u1ECD\u0300|\xEDl\u1EB9|or\xED|l\xF3 | w\u1ECD|t\xF3 |d\xE8 |\xECy\xE0|\xFAn | t\xF3| or|\xED \xEC|\xE8d\xE8|k\xF2 |\u2010\xE8d|\u0300\u2010\xE8|\u1EB9\u0300\u2010|r\xEDl|\xED \xF3|r\u1EB9\u0300|\xED \xE0| s\xEC|y\xE0n|gbo|\u1E63e | k\xF2|\xED a| r\u1EB9| j\u1EB9|s\xEC | b\xE1|r\xE0n| \u1E63e|w\u1ECD\u0301|n\xECy|f\xFAn| f\xFA|n \xE0|ba |n n|gb\xE0|gb\u1ECD|j\u1EB9\u0301|un |\xEC\xED | k\xED|gba|\xE8n\xEC| \xE8n|b\xE1 |\u0301 l|a k| ka|d\u1ECD\u0300|k\xED | \xF2m|in | fi|b\xF2 |fi |b\u1EB9\u0301|\u1ECDd\u1ECD|b\u1ECDd|\u0301 s|hun|n\xFA |n\xEDn|w\xE0 |ira|nir|\xF2m\xEC|\xECgb| \xECg|\u0301 t|\u1EB9ni|\xEDn\xFA|i l|\xECni|m\xECn|b\xE0 |\xE1\xE0 |i \xEC|ohu| oh|\xED i|ara| ti|bo |\xF2 l| p\xE9|r\xFA |\xEDr\xE0| \u1ECD\u0300|\xED \xF2|ogb|k\u1ECD\u0301|p\u1ECD\u0300|\xF3 b|\xE0 t|i n|l\u1ECD\u0301|\u1EB9\u0301n| \xECb|y\xEC\xED|gb\xE9|g\u1EB9\u0301|bog|\xF3\xF2 |y\xF3\xF2| y\xF3|n k|p\xE9 |d\xE1 |\u0301w\u1ECD|\u1ECD\u0301w|\xE0 l|\xED k| w\xE0|n o|j\u1ECD | ir|\u1ECD\u0300r|\xFA \xEC|\u0301 \xE0|\xF3 s|i t|\u1E63\u1EB9\u0301|\u0300k\u1ECD|\xED t|y\xE9 |l\xE8 | l\xE8|fin|\xE0b\xF2| l\u1ECD|\xE0 n|\xF9j\u1ECD|w\xF9j|ir\xFA|\xF3 j| ar|\xED w|a w| \xECm|\xFA \xE0|\u0300 t|\xF2fi| \xF2f| \xE0\xE0|f\u1EB9\u0301|\xE0w\xF9|\u0301ni|w\xF9 |\xEC\xEDr|m\xEC\xED| m\xEC|l\xE1\xEC| y\xEC|\xED g|\u1ECD\u0301n|n s|i \u1EB9|\u1EB9\u0300k|\xE0gb|\xEDgb|n\xEDg|a n| k\xFA|l\xE1\xE0|\xED o|n\xE1\xE0| n\xE1|k\u1EB9\u0301|\xEDpa|n\xEDp|\xECn | \xECk|b\xE9 |i g|\u1ECDm\u1ECD| \u1ECDm|i \xE0|i\u1E63\u1EB9|\u0300 \xE0|\xECm\u1ECD|n a|n f|j\u1EB9 |y\xED |\u0301 \u1ECD|\xF3 d|\u0301 \xF2| d\xE1| m\xFA|\xE0\xE0b|\xE1b\u1EB9|l\xE1b|\xECb\xE1|\xF2 g|j\xFA |i o|l\xFA | \xE8t|\u0300 \u1EB9|t\u1ECD\u0300|de |\u0300 n|i \xF2| \xECy|k\xE0n|\u0301n | b\xED| i\u1E63|m\u1ECD\u0300|e \u1EB9|\u0300 l| f\xE0|\xE8y\xED| \xE8y| \xECd|m\u1ECD\u0301|d\xE9 |\u0300 k|\u0301 p|\xF2 t|m\xFA | f\u1EB9| \xECj|r\xED |\xECk\u1EB9|n\xECk|\xECn\xED|n \xEC|n \xE8|s\xECn|\xE8 \u1EB9| i |r\u1ECD\u0300| \xE0n|\u0301 b|\xF9n |\u0301gb|\u1ECD\u0301g|d\u1ECD\u0301| d\u1ECD|\xED n|rin|\u0300 j",uzn:"ish|an |lar|ga |ir | bi|ar | va|da |iga| hu|va |bir|sh |uqu|quq|huq| ha|shi| bo|r b|gan|a e|ida| ta|ini|lis|adi|ng |dir|lik|iy |ili|o\u02BBl|har|ari| o\u02BB|uqi|ins|lan|hi |ing|dan|nin|kin| yo|son|nso| in| mu|on |qig| ma|ega|r i|bo\u02BB| eg|o\u02BBz|ni |gad|ash|i b|ki |oki|ila|yok|a b|n b|osh|ala|at |in |r h|erk| er|lga| qa|rki|h h| sh|i h|ara|n m| ba|nis|ik |igi|lig|bos|ri |qil|a t|bil|las|eti| et|n o|ani|nli|kla|i v|a q|a h|a o|yat| qo|im |a s|i m|iya|atl|oli|osi|siy|qla|cha|til| ol|ati|a y|mas|qar|inl|lat| qi|ta\u02BC|ham|gi |ib |\u02BBli|mla|h v|\u02BBz |hun|n e|mum| da| bu| to|un |mki|umk|sha|tla|ris|iro|ha |rch|bar|iri|oya|ali| be|i o|asi|aro| ke|i t|rla| te|arc|hda|shu|tis|n h|tga| sa| xa|rak|lin|ada|ola|imo|hqa|shq|li | tu|aml|lla|sid| as|nid|a i| ki|ch |n t|nda|k b|era|siz|or |hla|a m|r v|eng|ten|mat|mda|amd|lim|miy|y t|ayo|i a|ino|ilg|tni| is|ana|as |ema| em|ech|a a|tar|kat|aka|ak |rat| de|aza|ill| si| so|g\u02BBi|uql|n q|oda|\u02BCli|a\u02BCl|nik| ni|tda|uch|gin|a u|him|uni|sit|ay |qon| ja|atn|kim|h k|hec| he|\u02BBzi|lak|ker|ikl| ch|liy|lli|chi|ur |zar|shl|rig|irl|dam|koh|iko|a d|am |n v|rti|tib|yot|tal|chu| uc|sla|rin|sos|aso| un|na | ka|muh|dig|asl|lma|ra |bu |ush|xal|\u02BBlg|i k|ekl|r d|qat|aga|i q|oiy|mil| mi|qa |i s|jin",zlm:"an |ang| ke|ng | se| da|ada|ara|dan| pe|ran| be|ak |ber|hak|ata|ala|a s|ah |nya| me|da |per|n s|ya | di|kan|lah|n k|aan|gan|dal|pad|kep|a p|n d|erh|eba|nga|yan|rha| ya|nda|ora|tia|asa| ha|ama|epa| or|iap|ap |a b| at| ma|eti|ra |tau|n a|set|au | ba|pa | ad|n p|tan|p o|eng|a d|men|apa|h b|h d|dak|man|a a|ter| te|k k| sa|n b|ana|g a|end|leh|ole|a k|am |n y|aka|eh |lam|bas|beb|n m| un|pen|sa |keb|sam|n t| ti|ela|san|car|uan|ma |di |han|ega|ban|eri|at |sia|a m|ika|kes|ian|gar|seb|ta |mas|und|neg|nan|ngs|i d|erl|na |epe|emb|bar| la|atu|kla|pem|mem|emu|eca|sec|ngg|nny|any|bol|al |aha|gsa|ebe|ind|akl|n h|erk|ung|ena| bo|a t| ap|ers| de|in |tu |pun|as |agi|ann|g b|bag| ne|ain|hen| he|era|rat|sem| su|adi|lan|g s|dia|mat|ses|iad| ta|iha|g t|tin|k m|k h|i k|gi |i s|ing|uka|enu|den|lai|k d|ert|ti |rka|aja|rga|lua|ker|mel|dun|ndu|lin|rli|nak|ntu|esi|aya|un |uat|jua| in|rma|erm|ai |emp|kem|ri |dil|ua |uk |h m|l d|g m|mba|kat|ese|tik|ni |ini| an|mpu|ka |dar|mar|rja|erj|arg|u k|sua| ol|esa|dap|ar |g u|si |ent|g d| pu|awa|iri|dir|sal|gam|mbe|n i|har|a h|raa|ema|tar|i a|saa|ira|ari|pel|jar|laj|uju|tuj|rak|ura|uar|elu|t d|unt|il |wen|asi|gga|ipa|ksa|tuk|ula|sek|sas|ibu|rta|sep|rsa|nta|ati|ila|mua|yar",ibo:"a n|e n|ke | na| \u1ECD |na | b\u1EE5|\u1ECD b|nwe|nye|ere|re | n |ya |la | nk|ye | nw| ma|e \u1ECD| ya| ik|a o|a \u1ECD|ma |\u1EE5la|b\u1EE5l|ike| on|nke|e i|a m|ony|\u1EE5 n|kik|iki|b\u1EE5 | a |ka |wer|ta |i n|do |di | nd| ga|a a|e a|a i|he |kwa| ok| ob|e o|hi |any|ga\u2010|ha |d\u1EE5 | mm|ndi|\u1ECD n|wa |r\u1EE5 |e m|che|a e|oke|wu |aka|ite|o n|a g|odo|bod|obo| d\u1ECB| ez|ara|we | ih|a\u2010e|h\u1ECB |ri |n o|zi |mma|chi|d\u1ECB |ghi|\u1EE5ta|iri|ihe| an| oh|a y|gba|\u1EE5 \u1ECD| \u1ECDz| ak| iw|nya|te |iwu| nt|ro |oro|e \u1ECB|z\u1ECD |ezi|me |e e|u n|her|ohe| si|a\u2010a|i m|ala|\u1EE5 i| ka|akw| in|gh\u1ECB|kpe|n e|p\u1EE5t| e |i i|i o|ide|inw|\u1EE5 o|h\u1EE5 |ah\u1EE5|weg|ra |o i|kpa|ad\u1EE5|mad|si |sit|a s| me|sor|i \u1ECD|gid|edo|u o|e y|n a| en|tar|ozu|toz|bi |be |\u1EE5 m|\u1EE5r\u1EE5|\u1ECDr\u1EE5| \u1ECDr|mak|uso|ama|de |\u1ECB o| \u1ECDn|\u1ECDz\u1ECD|ch\u1ECB|egh|enw|ap\u1EE5|ru | to|i a|a \u1EE5|osi|r\u1ECB |wet|hed|nch| nc| eb| al|n\u1ECDd|\u1ECDn\u1ECD|uru|sir| kw|yer|ji |eny| mk|\u1ECBr\u1ECB|eta| us|tu |\u1ECD d|u \u1ECD| o |ba | mb|\u1ECDd\u1EE5|\u1ECBch| ch|a d|pa | ag|kwe| ha|a u|e s|mkp|n u|nta|ebe|n \u1ECD|o m|kwu|nkw|nwa|obi| \u1ECBk|esi|i e|nha| nh|le |ile|nil| ni|eme| og|e k|n i|ch\u1ECD|o y|as\u1ECB|otu| ot|ram|u m|\u1ECBgh|d\u1ECBg|zu |n\u1ECD |mba| gb|e g|\u1ECB m|\u1ECDch|ich|pe |agb|i \u1ECB|uch|z\u1EE5z|uny|wun|\u1ECDr\u1ECD| nn|na\u2010| di|ge |oge|iji| ij|\u1ECDha| \u1ECDh|ikp|egi|meg|o o|\u1EE5h\u1EE5|h\u1EE5h|mah|n \u1EE5|\u1ECD g|\u1ECDta|ek\u1ECD|\u1ECB n|kw\u1EE5|agh|\u1EE5m\u1EE5|ban|kpu|okp| ah|\u1ECBkp|a k|ime| im|z\u1EE5 |\u1EE5z\u1EE5|\u1ECDz\u1EE5| \u1EE5z|lit|ali|nat",ceb:"sa | sa|ng |ang| ka| pa|an |ga |nga| ma|pag| ng|on |a p|od |kat|ay | an|g m|a k|ug |ana| ug|ung|ata|ngo|atu|n s|ala|san|d s|tun|ag |a m|god|g s|a a|a s|g k|g p|yon|n u|ong|tag|usa|pan|ing|una|mat|g u|mga| mg|y k| us|ali|syo| o |aga|tan|iya|kin|dun|nay|man|nan|a i| na|ina|nsa|isa|bis|a b|adu| ad|n n| bi|asy|asa|lay|awa|lan|non|a n|nas|o s|al |agp|lin|nal|wal| wa|ili|was|gaw|han| iy| ki|nah|ban|nag|yan|ahi|n k|gan| gi|him| di|a u| ba| un|ini|ama|ya |kas|asu|n a|g a|gka|agk|kan|ags|agt|l n|a g|kag| ta|imo|uns|sam| su|g n|n o|gal|kal|og |taw|aho|uka|gpa|ipo|ika|o p|a t| og| si|gsa|g t|aba|ano|gla|y s|o a|aki|hat|kau|sud|gpi|a w|g i|aha|ot |ran|i s|n m|bal|lip|gon|ud | ga|li |uba|ig |ara|g d|na |kab|aka|gba|ngl|ayo| la| hu|a h|ati|d a|d n| pu| in|uga|ok |ihi|d u|ma |may|awo|agb|ami|say|apa|pod|uha|t n|agh|buh|ins|ad | ub| bu|at |iin|a d|ip |uta|sal|hon|wo |ho |tra|lak|iko|as |aod|bah|mo |aug|ona|dil|gik|sos|lih|pin| pi|k s|nin|oon|abu|la |rab|hun| ti|mah|tar|t s|ngb|uma|hin|bat|lao|mak|it | at|s s|sno|asn|ni |aan|ahu| hi|agi|n p|inu|ulo|y p| ni|iha|mag|o n|duk|edu| ed|a e|til|ura|tin|kip|agl|gay|g h|g b|ato|ghi|nab|kon|in |ter|o u|o o|yal|sya|osy| so|tik| re| tr|hig|a o|ha |but|pak|aya",tgl:"ng |ang| pa|an |sa | ka| sa|at | ma| ng|apa|ala|ata|g p|pan|pag|ay | an| na|ara| at|tan|a p|pat|n a| ba|ga |awa|rap|kar|g k|aya|lan|g m|n n|g b|nga|mga| mg|a k|na |ama|n s|a a|gan|yan|gka| ta|may|tao|agk|asa|man|aka|ao |y m|ana|g a|nan|aha|kan|y k|baw|kal|a m|g n|ing|wat| y |t t|pam|a n|o y|ban| la|ali|san|wal|mag| o |g i|aga|lay|any|g s|in |nya|yon|kas|a s|isa|una|ong|aan|kat|t p| wa|ina|tay|ya |on |o m|ila|ag |nta|t n|aba|ili| ay|o a| ga|no |a i|gal|ant|han|t s|kap|kak|lah|ari|agt|agp|ran|g l|lin|as |lal|gaw|ans|to |ito| it|hay|wa |t m| is|pap|mam|nsa|ahi|nag|bat|lip|gta| di|gay|gpa|pin| si|ngk|ung|aki|y n|iti|tat|ano|yaa|y s|mal|hat|kai|sal|hin|uma|mak|di |agi|pun|ihi|a l|i a|ira|gga|nah|s n|ap | ha|usa|nin|o p|gin|ipu|ika|ngi|i n|lag|la |y p|ini|g t|uka|nap| tu|a g|tas|aru|ipa| ip|li |al |n o|a o|t k|alo| pi|sin|syo|asy|ita|aho|nar|par|o s|pak|t a|uha|sas|gsa|ags|kin|a h|iba|lit|ula|o n|nak|a t| bu|duk|kab|sam|g e|ain|ami|mas|lab|ani|kil|it | al|agb|buh|a b|g g|ba | ib|iyo|ri |yag|ad | da|edu| ed|anl|ma |ais|iga|mba|tun|ipi| ki|od |ayu| li|lih|sar|gi |g w|pah|wir|oob|loo|agg|nli|bay|map|git|mil|ok |hon|ngg|sah|iya|pas|g h|agl|tar|ngu|amb|uku|ayo|s a|p n|n m|rus|i m|l a|abu| aa",hun:"en | sz| va| a |\xE9s |min|ek | \xE9s| mi|jog| jo|an |ind|nek|sze|s\xE1g|nde|a v|den|oga|sza|val|ga |m\xE9l|ala|em\xE9|gy |n a|van|zem|ele| me|egy|\xE9ly| eg|zab|t\xE1s| az|n s|bad|aba|ni |az |gye| el|ak | se|meg|sen|\xE9ny|s\xE9g|k j|yne|lyn| ne|ben|lam|tt |t a|et |agy|oz |hoz|vag|zet| te|n m|ez |nak|int|re |et\xE9|tet|mel|tel|s a|em |ely|let|hez| al|s s| ki|ete|at\xE1|z a| le|yen|es |ra |t\xE9s|ell|nt |sem|t s|len|nem|a s|ese|nki|enk|a m|\xE1s\xE1|i m|ban|kin|k m|szt| \xE1l|ame|k\xF6z|k a|ds\xE1|ads|l\xF3 | k\xF6|\xE1s |ly |on |\xE9be|tat|a t|n v|\xE1ll|m\xE9n| v\xE9|nye|k\xFCl|l\u0151 |a n| cs|i \xE9|ok |\xE9sz|\xE9rt|lla|lap|\xE1go|gok|nyi|tek| ke|nd |\xE9te|ami|z\xE9s|yes|szo|t m|a a|het|fel|lat|lem|lle|el |z e|s e|k \xE9|mbe|emb|el\xE9|ot |lis|vet|kor|\xE1g |olg| am|sz\xE1|ehe|leh|ogo|ott|\xFCl |nte|\xE9le|i v|ogy|hog| ho|kel|n k|tes|nl\u0151|enl|ss\xE1|\xE1za|h\xE1z|\xE9g |vel|\xE1ba|lek|\xE9ge| ha|a h|r\xE9s| fe|\xE1ny|del|el\u0151|\xE1t |al\xE1|art|tar|zto|z\xE1s|t\u0151 |yil|koz|tko|al\xF3|s k|i e|\xE1rs|t\xE1r|mze|emz| ny|m\xE1s|ett|ny |fej|ass|zas| h\xE1|d a|t \xE9|is |\xE9s\xE9|ez\xE9|t\xE9b| mu|\xE1so|s\xEDt|lye|elm|\xE9de|v\xE9d|ine|t k|os |it |izt|biz| bi|y a|m l|tot|a j|atk|n\xE9l|t n|ti | m\xE1|ai |l\xE1s|eve|nev|zte| b\xE1|sel|ll |al |ere|n e|unk|mun|t e| ak|ife|kif|ako|s \xE9| \xE9r|\xE1na| es|s t|got|s\xFCl| be|v\xE1l|csa|se |\xE9se|ad |ges|tos|ja | gy|asz|ten|lm\xE9| t\xE1|eze|\xE1rm|b\xE1r|ess|l s|\xFCle",azj:" v\u0259|v\u0259 |\u0259r |ir | h\u0259| bi| h\xFC| ol|\xFCqu|h\xFCq|quq|na |in |lar|h\u0259r|d\u0259 | \u015F\u0259|bir|l\u0259r|lik|mal|r b|lma|r h| t\u0259|\u0259xs|\u015F\u0259x|\u0259n |dir|uqu|una|an |ali|a m| ma|ikd|ini|r \u015F|d\u0259n|ar |il\u0259|qun|aq |as\u0131| ya|m\u0259k|y\u0259t| m\u0259| m\xFC|kdi|\u0259si|\u0259k |ilm|nin|nd\u0259|olm|\u0259ti|\u0259 y|sin|xs |nda|lm\u0259|yy\u0259|i v| qa| az|olu|iyy|ya |ind|zad|qla|\xFCn |ni |l\u0259 |tin|n m|aza|ar\u0131|\u0259t |n t|maq|lun|l\u0131q|\u0259 b|un |nun|q v|n h|dan|\u0131n | et|tm\u0259|\u0259r\u0259| \xF6z|da |\u0259 v| on|\u0259 a|\u0131na|\u0131n\u0131|bil|a b|s\u0131 |il |\u0259mi|ara|si | di|\u0259 m|\u0259ri|rl\u0259| va|\u0259 h|etm|\u0131\u011F\u0131|ama|dl\u0131|adl|rin|b\u0259r|r\u0131n|n i|m\xFCd|n\u0131n| he|mas|ik |n a|dil|al\u0131|irl|\u0259l\u0259|\xFCda|s\u0131n|\u0131nd|xsi|li |\u0259 d|n\u0259 | b\u0259|\u0259ya| in|\u0259 i|l\u0259t| s\u0259|n\u0131 | i\u015F|an\u0131|e\xE7 |he\xE7|q h|eyn|\u0259 e|d\u0131r| da|asi|r\u0131 |i\u015F |ifa|l\u0131\u011F|i s|fi\u0259|afi|daf| ed|m\u0259z|u v|kil| ha|ola|n v|\u0259ni|\u0131r |uq |unm| bu| as|sia|osi|sos|ili|\u0131d\u0131|l\u0131d|nma|\u0131q |in\u0259|\u0259ra|sil|xil|axi|dax|ad\u0259|man|a h|\u0259 o|onu|a q|\u0259z | ki|se\xE7| se|\u0131 h|min|lan|\u0259d\u0259|bu |raq|l\u0131 |\u0131l\u0131|al |\u0259 q|r v|nla|hsi|\u0259hs|t\u0259h|\xF6z |ist| is|m\u0259s| \u0259s|ina|\u0259 t|\u0259tl|a v|i\u0259 |n b|t\u0259r| ta| c\u0259|edi|ala|kim|qu |i t|ulm|m\u0259h|n o|aya|\u0131 o|ial| so|ill|siy| d\u0259|var|ins|mi |\u011F\u0131 |nik|r i|aql|k h|t\u0259m|tam|\xE7\xFCn|\xFC\xE7\xFC| \xFC\xE7|\u011F\u0131n|sas|\u0259sa|z h|\u0259m\u0259|zam| za|sti|r\u0259f|n e|r a|ild|h\u0259m|\u0131ql|yan|may|n \u0259|m\u0259n|mil| mi|\u0259qi|din|n d|t\xFCn| d\xF6|miy|kah|ika| ni|fad|tif|l o|s\u0259r|yni| ey|ana|l\u0259n|am |ril|ay\u0259|a\u015F\u0131",ces:" pr|n\xED | a | ne|pr\xE1|r\xE1v|na |ost| po|ho | sv|o n| na|vo |neb|\xE1vo|bo |ebo|nos|m\xE1 | m\xE1|a\u017Ed|ka\u017E| ka| ro|ch |d\xFD |\u017Ed\xFD|ti |ou |a s| p\u0159| za|\xE1n\xED|\xE1 p| je| v |svo|\xE9ho| st|\xFD m|sti|n\u011B | by|obo|vob|ter|pro|en\xED|bod| z\xE1| sp|\xED a|rod|kte|by |mu |u p|o p| n\xE1|v\xE1n|jak| ja|a p|o v|\xED n|ov\xE1|oli|v\xED |spo|roz| kt|mi |\xED p|ny | ma|\xEDm |i a|do | so|odn|\xE1ro|n\xE1r|li |n\xE9 |tv\xED|at |\xFDch|a z| vy|byl|vol|en |\xFDt |b\xFDt| b\xFD|t s|tn\xED|stn|o s|\xED b|to | do|sv\xE9|v\xE9 |ran|ejn|z\xE1k|eho|jeh|nes|p\u0159\xED|m\xED |\u010Din|kol|aj\xED|sou| v\u0161|\xEDch|it |n\xFDm|\xFDm |nu |hra|nou|u s|\xE9mu| k |du |\u017Een|pod| ze|kla|a v|stv|pol|dn\xED|er\xE9|m p|st\xE1|je |ci |e\u010Dn| ni|n\xE9h|a n|ak\xE9|\xE1va|maj|em |rov|\xED m|k\xE9 |ole|n\xFDc|ova| ve|ako| ta|i k|chr|och| oc|kon|i p|\xED v|sm\xED|esm|kdo|st |i n|o z|ave|odu|bez| to|sta|ech|j\xED |o d|sob|se | se|\xED s|\xFDmi|i s| i |i v| vz|n\xEDm|pra|ln\u011B|p\u0159i|t\xE1t|ste|a j|aby| ab| s |oln|a o|m n|\u010Den|slu|\u0159\xEDs| os|zem|mez| \u010Di|ln\xED|\xE1ln|oci|jin| ji|y b|\xED z|y s|va |v\u0161e|t v|ovn|chn|d\u011Bl|n\xEDc|le\u010D| pl|vat| vo|vin|rav|vou|lad|inn|\xE9 v|anu|tej|u k|stu|est| tr|ky |ikd|nik|ivo|nit|zen|u o|n\xE9m|nez|i\xE1l|\xEDho|len|ens|o\u017Ee|oko|k\xE9h|rac|ven|\xED k|e s|l\xE1n|\u011Bl\xE1|zd\u011B|vzd|t k|din|odi|t\xED | od|r\xE9 |tup|pov|pln|\u0161t\u011B|\xE1kl|nno|tak|er\xE1|\u0159ed|o a|a t|res|j\xEDc| mu|u z|rok| ob|\u010Dno|u a|y k|i j|\xE9 n|lu\u0161|\xEDsl|oso|ci\xE1|soc|n\xEDh|o j|ck\xE9",run:"ra |we |wa |e a| mu|a k|se | n | um| ku|ira|ash|tu |ntu|a i|mu |umu|mun|unt|ere|zwa|ege|ye |ora|teg|a n|a a|ing|ko | bi|sho|iri| ar| we|shi|aba|e n|ese|go |a m|o a|gu |uba|ngo|nga|hir| ca|ugu|obo|hob|za |ndi|ish|gih| at|ara|wes| kw|ger|ate|a b| ba| gu|e k|can|ama|ung|bor|u w|mwe|di | ab|nke|ke |kwi|ka |ank|yo |ezw|n u|na |iwe|e m|rez|ri |a g|gir| am|igi|e i|ro |a u|ngi|e b|ban| ak| in|ari|n i|hug|ihu|e u|riz|ang|nta| vy|ata| ub|and|aka|rwa| nt|kur|ta |iki|kan|iza|u b|ran|sha|o n|i n| ig|ivy| iv|ahi|bah|u n|ana| bu| as|aku|ga |uko|o u|ho | ka|ose|ubu|ako|guk|ite|o y|ba |i b|any|kir|o k|aho|iye|kub|amw|nye|aha| ng|o m|nya| it|re | im|o b|izw|kun|hin|e c|vyo|o i|vyi|ngu|uri|imi|imw|gin|ene|u m|zi |ha |kug|bur|uru|jwe| zi|u g|era|aga|ron|abi| y |e y| uk|gek|ani| gi|eye|ind|wo |u a|i a| ib|i i|ras|bat|gan|amb|n a|onk|rik|ne |ihe|agi|kor| ic|ze |tun|ibi|wub|nge|o z|tse|nka|he |rek|twa|gen|eko|mat|ber| ah|ni |ush|umw| bw|mak|bik|ury|yiw|bwo| nk|ma |no |kiz|uro|gis|aro|ika| ya|gus|y i|wir|ugi|uki| ki|a c|ryo|bir| ma| yi|iro|bwa|mur|eng|ukw|hat|tan|utu|wit|w i| mw|y a|mbe| ha|uza|ham|rah| is|irw|o v|umv|ura|eny|him|eka|bak|bun| ny|bo |yig|kuv|wab|key|eke|yer|vye|i y|ita|ya |a r| ko|kwa|o c",plt:"ny |na |ana| ny|a n|sy |y f|a a|aha|ra | ma|nan|n n|any|y n|a m|y m|y a| fi|an |tra|han|ara| fa| am|ka | ts| na|in |ami| mi|a t|olo|min|man|iza|lon| iz|fan| ol| ha| sy|aka|a i|reh|ay |ian|tsy|ina| ar|on |o a|etr|het|ona|y o|o h|zan|y t|a h|ala| hi|a f|y h|ehe|ira|a s|zo |y i|ndr|jo | jo|n j| an| az|ran|dia| dr|y s|fah|ena|ire|tan|dre| zo|mba| ka|m p|afa| di|n d|and|azo|zy |amp|ia |ren|iny|rah|y z|ry |ika|oan|ao |amb|lal|ho | ho|isy|ony|tsa|asa|a d|ha |fia|mis|ava|ray| pi|am |dra| to|rin| ta|ant|eo |zay|rai|tsi|itr|sa | fo| ra|van|ova|nen|azy| vo|mpi|ari|o f|tok|a k| ir|kan|oto|mah|ly |sia| la|n i|voa|haf|a r|ito|y k|oka|y r|y l|ano|ita|ene|its|ial|zon|aza|ain| re| as|fot|aro|fit|nat|nin|aly|har| ko|ham| no|fa |ary|atr|ila|ata|iha|nam|kon|oko| sa|elo|nja|anj|ive|isa|oa |dy |y d|o m|nto|ank|o n|otr|pan|fir|air|sir|ty |a v|sam|o s|tov|mit|rak|reo|o t|pia|tao| ao|no |y v|iar|a e|a z|hit|hoa| it|to |za |ton|eha|end|vy |idi|tin|ati|adi|lna|aln|rov|ban| za|nga|hah|oni|osi|sos|vah|ino|ity| at|hia|pir|ifa|omb|ame|era|vel|kar|va |tso|jak|fid|ifi|ais|o i|idy|la |ama|ba | pa|tot|ani|rar|mpa|haz|kam| eo| il|iva|aho|nao|n k|ato|lah|ovy| te|dro|lan|ela| mo| si|fin|miv|san|koa| he|aso| mb|sak|kav",qug:"ta | ka|ka |na |una|cha|ash|ari|a k|ana|pak|ish|ach|hka|shk|mi |kta|hay|man| ch|apa|ak |rin|ata|kun|har|akt|ita| ha|ami|lla| pa|ama|pas|shp| ma|tak|ay\xF1|y\xF1i|in |sh |ina|uku|nka|chi|aka|a c|yta|kuy|all|tap|a h|kan| tu|\xF1it|tuk| ru|run|chu|an |pay|ayt|ris| ki|aku|hpa|ank|a p|kam| sh|nam|a s|uy |i k|ayp|nak|pi |nta|a m| li|ay |lia|hin|kaw|nap|ant|tam|a t|iri|nat| wa|y r|kay|aws| ya|n t|ypa|wsa|pa |lak|shi|a a|lli|iku|hu |n k|iak|yay|kis| al|shu|a w|ipa| sa| il|api|kas|yku|yac|kat|a r|huk|i c|wan|hik|a i|ill|ush| ti|ayk|hpi| ku|kac|say|hun|uya|ila|ika|yuy|pir|ich|mac|ima|a y|yll|ayl|i p|kin|a l| wi|kus| yu|lan|tan|llu|kpi| ta| pi|aya|la |yan|awa| ni|kak|lat|rik|war|ull|kll|li |ink|nch|un |akp|n s|may| ay|uch|i s|nac|sha|iki|kik|h m|ukt|pip|tin|n p|iya|nal|aki| ri|ura|tik|mak|ypi|i m|i w|n m|his|k i|riy|iwa|y h| hu|han|akl|k t|mas|pik|kap| \xF1a|u t|nmi|nis|k a|i y|k l|kar| im|i i|wil|yma|aym|ksi|iks|uma| su|h k|has| ak|unk|huc|kir|anc|k m|pal|k k|ik |i\xF1i| i\xF1|ma |n y|mun| mu|mam|tac|a n|i t|k r|sam|ian|asi|k h|was|ywa|iyt|llp|san|sum|ray|si |pan|nki|tar| ii|u k|\xF1ik|uk |i\xF1a|kuk|wpa|awp|akk|a u|wat|uri| mi|yar|uyk|ayw|h c|ha |tay|rmi|arm|uta|las|yka|llk|kul|wi\xF1|ati|ska| ll|kit|n h|uti|kic|mat",mad:"an |eng|ng |ban| sa| ka|dha|ren| se| ba|ak | ha|adh|hak| dh|ang|se | pa|aba|a s|na |aga|ha | or|n s|ore|ara| ag|gad|are|ana|n o|ngg|ale|gan|a k|ala|dhu|tab|sar|ota|asa|eba| ot| ke|sab|ba |wi |uwi|abb|i h|huw|aan|n k|a b|bba| ta| ma|pan|hal|bas|ako|dhi|ra |kab|em |beb|ka |lak|gi |lem|g a|eka|n b|ama|nga|san|at |ong|ran|nge|a o|ggu|sa |a d|ane|n p|ken|par|aja|man|gar|ata|nek|apa| na|agi|abe| ga|e e|sal|a a|tan|g s|al |kal|gen|ta |i s|aka|e a|a p|a e| la| pe|nan| an|era|e d| e | be|n a| al|ena|uy |guy|n n|ate| bi|mas|e k|kat|uan|oan|kon|k k|a m|i d|g e|n t|g k|ada|koa|lan|ela| da|bad|ma |ne |as |lab|ega| mo|ar |car|one|i p|bi |kaa|bat|ri |on |pon| so|e b|le |ah |abi|ase|adi|epa| ep|k h|and|pam|te |ok |ste|aon|om |oko|aha|ari|ona|asi|ter| di|di |pad|e s|sad|yar|neg|ton|set|rga|ost|mos|gap|nda|a l|har|i k|ina| a | ng|kom|isa|si |a t|a h| kl|jan|daj|iga|hig|idh|hid|ndh|n m|ngs|tto|ett|arg|la |k b|ler|k d|nna| to|nao|n d|mat| ca|tad|bis|aya|epo|aen| po|bin|nya|kas|k s|n h|sya|nta|gsa|en |ant|n g|kar|i e|das|e t|e p|iba| pr|g p| ho| el|i a|hi |os |sao|uwa|tes| ja|nag|nas|lae|sia|t s|k o|nto|int|yat|arn|m p|duw|adu|eta| ko|i b|ni |g n|kla|rak|ame|mpo|jua|sok|aso|ggi|eja|pel|jam|ele| et|dil",nya:"ali|ndi|a m|a k| nd|wa |na | al|yen| ku|nth|ra |di |se |nse| mu|a n|thu|hu |nga| wa|la |mun|u a|unt|iye| ka|ce |ace| lo|a l|ang|e a| la| pa|liy|a u|ens| ma|idw|ons|dwa|e m|i n|ala|kha|lo |li |ira|era|ene|ga |ana|za |o m| mo|yo |o w| ci|we |dzi|ko |o l|and|dan|hal|zik|chi|oyo|pa |ner|ulu|ena|moy| um|a p| da|ape|kap|ka |iko| an|pen|a c|to |ito|hit|nch| nc|iri|lir|wac|umo|e k|lu |a a|aye| dz|kuk|a z|dwe|tha|mal| za|ing|ufu|mu |ro |ful| uf|o c|i d|lin|e l|zo |edw| zo|o a|mwa|u w|iro|o n|lan|amu|ere| mw|nzi|dza|alo|ri | li|fun|lid|gan|so | ca|kul|ofu|nso|o z|ulo|unz|o k|mul|lam|i c|san|a b|kwa| na|a d| a |una|u k|i l|nkh|ant|aku|ca |cit|oli|ipo|dip|ama|lac|wir|han|yan|osa|uli|tsa|i m|pon|kup|u d|ti |gwi|ukh|ung|hun|lon|ank|nda|iki|ina| ko|ao |diz|phu|ati|oma|i a|tsi|pat|iya|siy|kut| ya|zid|eze|ma |i k|mer|ome|mol|u n|u o|aph|ogw|izo|mba|sid|ku |sam|awi|adz| ad|izi|ula|say|e n|khu| kh|rez|vom|bvo|okh|lok|win|akh|o o| am| on|zir|map| zi|eza|ja |go |ngo|ika|its|ats|osi|gwe| co|isa|ya |haw|ani|o p|zi |ndu|kho|ezo|kir|uni|i u| ay|lal|gal|sa |bom| bo|ola|amb|wak|ha |ba |nja|anj|ban| ba|iza| bu|udz|ngw|bun|oye|o d|nal|kus|i p|i o|i y|wi | nt|e p| si|aka|ne |men|jir|nji|sed|ets|end|eka|uma|du ",zyb:"bou|iz |aeu|enz|eng|uz | bo|ih |oux|nz | di|ing|z g|ux |uq |dih|ngh| ca|ng |gen|ung|z c| mi|miz|ij |cae|z d| gi| de| ge|euq|you| ci|ngz|ouj|aen|uj | yi|ien|gya| gu|ngj|mbo| mb|zli|dae|gij|cin|ang|j d|nae| se| ba|z y|euz| cu|de |x m|oz |j g|ouz|x b|li |z b|h g| da| yo|nj |xna|oxn|rox| ro|h c|nzl|vei|yau|wz |z m|ix | si|i c|iq |gh |j b| cw|nda|yin| hi| nd|dan|vun|inh| ga|can|ei |cun|yie|q g|hoz|bau| li| gy|wyo|cwy|z h|gue|gz |gun|faz|unz|yen|uh |den|ciz| go|q c|gj | bi|ej |aej| fa|hin|zci| wn|j n|goz|gai|au |z s|q d| vu|h m|gva|hu |auj|ouq|az |h d|ya |uek|ci |nh |u d|ou |sou|jso|gjs|din|awz|enj| do|h s|eve|sev|z r|nq |sin|nhy|g g|g b|liz|kgy|ekg|sen|eix|wng|lij|ngq|bin|i d|ghc| ha|bae|hix|h y|j c|ghg|i b|ouh|en |n d|h f|j s|z v|j y|law|hci|anh|inz|q y|nei|anj|ozc|ez |enh|q s|aiq|uen|zsi|zda|hye|ujc|e c|siz|eiz|anz|g y|i g|q n|bie| ne| ae|giz|u c|hgy|g d|gda|ngd|cou| la|z l|auy|ai |in |iuz|zdi|jhu|ujh|yuz| du|j m| fu|cuz|eiq|g c|gzd| co|uyu|coz|zbi|biu| dw|i s|i n|aw |dun|yun|izy|daw| he|nho| ho|enq|x l|cie|q b|cij|uzl|x d|iuj|awj| ya|eij|dei|nde|sae|izc|wnq|wnh|sei|h b|aih|gzs|bwn|a d|u g|ngg|jca|e b|ran| ra|hcu| me|iet|van| bu|guh|hen|si |wnj| ve|u b|azl|inj|gak|gan|ozg|siu|yaw|i m",kin:"ra | ku|se | mu|a k|ntu|tu |nga|umu|ye | um|unt|mun|e n| gu|we |ira|a n| n |wa |ere|mu |ko |gom|a b|e a| ab|li |e k|mba|a a|e b|aba|ga |e u|ba |omb|o k| ba|a u|ose|u b|o a| cy|ash|eng| ag|kwi| bu|za |gih|ren|ndi| ub|ang|yo |aka|gu |igi| ib|a g|a m| nt|uli|o b|ama|ihu|e i|nta| ak|ago|ro |ora| ka|ugu|hug|di |iye|ban| am|cya|ku |ta | bw|and|sha|re | ig|gan|ubu|na | kw|obo| by| bi|a i|yan|ka |sho|kub|era|ese| we|kan|aga|hob|bor|ana|byo|ura|uru|ibi|rwa|wes|u w|no |uko|i m|mo |u a|ure|ili|uba|o n|uha|uga|n a| im|ish|bwa|bwo|wiy|ali|ber|ze |ne |ush|are|o i|u m|ger|bur|ran| ki| no|ane|bye| y |ege|teg|guh| uk|n i|rag|i a|ya |u g|e m|anz|bo |abo|gar|wo |y i|ho |age|ind|o m|eke|a s|ara|zir|ite|kug|kim|aci| as|u n|ani|kir|mbe| gi|yos|kur|ugo|gir|e c|iza|aho|i b|tur|ata|o u| se|u u|zo |i i|aha|nge|mwe|iro|akw|any|eza|uki|imi|o y|ate|u k|iki|atu|bat| in|go |tan|n u|bos| bo| na|hak|iby| at|ihe|ung|ha |bul|kar|eye|eko|gek|nya|o g|shy|e y|awe|ngo|bit|mul|nzi|rer|bag|ge |imw|bah|cir|gac|bak|je |gez|imu|eze|tse|ets|mat| ru|irw|he | ni| ur| yi|ako|ngi| ng|i n|rez|ubi|gus|fit|afi|ugi|uka|amb|o c|utu|ufa|ruk|mug|bas|bis|uku|hin|e g|ige|amo|ing| af|yem|ni | ry|a r|gaz|te |erw|bwe|ubw|hwa|iko| al|ant|zi ",zul:"nge|oku| ng|a n|lo |ung|nga|la |le | no|elo|lun| um|e n|wa |we |gel|e u|ele|nel|thi|ke |nom|ezi|ma |ntu|oma|hi |o n|ngo|tu |nke|onk|o l|uth|ni |a u|lek|unt| wo|o e| lo|mun|umu|pha| ku|ang|ho |kwe|ulu| ne|won|une|lul|elu| un|a i|gok|kul|ath|hla|lok|khe|eni|tho|ela|zwe|akh|kel|a k|enz|ana|ban|aka|u u|ing|ule|elw|kho|uku|ala|lwa|gen| uk|wen|ama|na |e k|ko |gan|a e|he |zin|enk|o y| ez|kat| kw|lan|eth|het|o o| ok|okw|i n|nzi|aba|e a|hak|lel|lwe|eko|ane|ka |so |yo |ayo|o a|uhl|nku|nye| na|thu|mph|do |ben|ise|kut|ike|kun| is| im|hol|obu|fan|i k|e w|nhl|nok|ini|and|kuh|ukh|kuk| ak|e i|isi|aph|zi |ile|eki|ekh| ba|eka|the|a a| le| ye|kwa|e e|fut| fu|za |mal| ab|ebe|isa| em|o w|kub|mth|i w|ndl|emp|any|olo|ga | ko|nen|nis|alu|ith|eli|ndo|seb|nda| ya|i i|eke|vik|ake|uba|abe|ezw|yok|ba |ale|zo |olu|ume|ye |esi|kil|khu|yen|emi|nez|hlo|a l|ase|ula|kek|a o|iph|o u|no |azw|kan|mel|uny|ne |ufa|ahl|lin|hul|ant|und|sa |enh|kus|kuv|lak| in|o i|din|kom|amb|zis|ind|ola|uph|wez|eng|yez|phe|phi|mba|nya|han|kuf|nem|isw|ani|iyo| iy|fun| yo|uvi|i a|ene|izi| el|cal|i e|eze|ano|nay|hwe|kup|lal|uyo|ubu|kol|oko|ulo| la|e l|tha|nan|mfu|hon|nza|hin| ey|omp|da |bo |ilu|wak|lon|iso|kug|nka|ink|i l|sek|eku| ek|thw|gez",swe:"ar |er |tt |ch |och| oc|ing|\xE4tt|ill|r\xE4t|en | ti|til|f\xF6r|ll | r\xE4|nde| f\xF6|var|et |and| en|ell| ha|om |het|lle|lig|de |nin| de|ng | in| fr|as |ler| el|gen|nva|und|att|env|r h| i |r r|ska|fri| so|har|der| at|\xF6r |ter|all|t t| ut|den|ka |lla|som|av |sam|ghe|ga | sk| vi| av|ete|la |ens|t a| si|r s|iga|igh|tig| va|ig |a s| st|ion|ra |tti|a o| \xE4r|ten|ns |t e|na | be|han| un| an| sa|a f| la| gr| m\xE5|nge|n s|vis|lan|m\xE5 |ati|nat| \xE5t|an |nna| li| al|t f|ans|nsk|sni|gru|\xE4ll|tio|ad | me|isk|kli|s f|t i|st\xE4|t s|ri |med|sta|h r|lik|da |dig|ta |r o|run|on | re|lag|tta|\xE4r |kap|a i|a r|\xE4nd|erv|n e|kte|n f|rvi|nom|itt|id | mo|sky|r e|ver|\xE4ns|vil|gt |igt| na|tan|uta|dra|t o|ro |isn| fa|kal|ihe|rih|erk|r u|e s|per|l v|vid|one|rel|ber|ran|ot |mot|ndl|d f|ed |ika|m\xE4n|l s|bet|t b|dd |ydd|kyd|n o|s s|str|n m|tet|sin|r f| om|rna|int|r i|end|nad|l a|ap |ers|nda|t v|ent|rbe|arb| h\xE4|ets|h\xE4l|amh|ckl|gar|nga|r m|je |rje|arj|n i|s e|lin|r t|i s|r\xE4n| pe|ilk|t l|ern|p\xE5 | p\xE5|t\xE4l|d e|dom|ege|g e|tni|r a|lit|ras| s\xE5|lln|kil|ski|enn|i o|a d|er\xE4|n a|ara| ge|\xE4ro|a m| ar|t d|ilj|els|yck| ve|g o|fr\xE5|nas|tra|ess|del|m s|liv|l l|in |v s|g a|ast|e e|val|son|rso|e t|age|nd | eg|ial|cia|oci|soc|upp|igi|eli|g s|rkl|gad|ndr|nte|\xF6ra",lin:"na | na| ya|ya |a m| mo|to | ko|li |a b| li|o n| bo|i n|a y|a n|ki |a l|kok|la | ma|zal|i y|oki| pe|ngo|ali|pe |so |nso|oto|ons| ba|ala|mot|a k|eng|nyo|eko|o e|nge|yon| ny|kol|lik|iko|a e|o y|ang|ye | ye|oko|ma |o a|go | ek|ko |e m|aza|te |olo|sal|ama|si | az|mak|e b|lo | te|ta |isa|ako|amb|sen|ong|e n|ela|oyo|i k|ani| es|o m|ni |osa| to|ban|bat|a t|mba|ing|yo | oy|eli|a p|mbo|o p|mi | mi| nd|ba |i m|bok|i p|isi|mok|lis|nga|ge |nde|koz|bo |gel|ato|o t|mos|aka|oba|ese|lam|kop| ez|lon|den|omb|o b|ota|sa |ga |e a|e y|eza|kos|lin|esa|e e|kob|e k|sam|kot|kan|bot|ika|ngi|kam|ka | po|gom|oli|ope|yan|elo| lo|ata| el|bon|oka|po |bik|ate| bi|a s|i t|i b|omi|pes|wa | se|oza|lok|bom|oke|som|zwa|mis|i e|bek|iki| at|ola|ti |ozw|lib|o l|osu|oso|e t|nda|ase|ele|kel|omo|bos|su |usu|sus|bal|i l|ami|o o|bak| nz|pon|tel|mob|mu | ep|nza|asi|mbi|ati|kat|le |gi |ana|oti|ndi|tan|a o|wan|obe|kum|nya|mab|bis|nis|opo|tal|mat| ka|bol|and|aye|baz|u y|eta| ta|ne |ene|emb|sem|e l|gis|ben| ak| en|mal|obo|gob|ike|se |ibo|\u2019te| \u2019t|umb| so|mik|oku|be |mbe|bi |i a|eni|i o| mb|tey|san| et|abo|ebe|geb|eba|yeb|bu | as|ote|sik|ema|eya|ibe|mib|ai |pai|mwa|kes|da |may|boz|amu|a a|kom|mel|ona|ebi|ia |ina|tin| ti|bwa|sol|son",som:" ka|ka |ay |uu |an |yo |oo |aan|aha| wa|da | qo| in| u |sha| xa|a i|ada|iyo| iy|ma |ama| ah| la|qof|aa |hay|ga |a a|a w|ah | dh|a s| da|in |xaq| oo|a d|aad|yah|eey| le|isa|lee|u l|q u|aq | si|taa|eya|ast|la |of |iya|sa |y i|u x|sta|kas|xuu|uxu|wux| wu|iis|nuu|inu|ro | am| ma|a q|wax|dha|ala|kal|nay|f k|a k|le |ku | ku| sh|o i|a l|ta |maa|a u|dii|loo| lo|o a|ale|ara|ana|iga|o d| uu|ha |lo |o m|o x|doo|aro|kar|yaa|gu |si |ima|na | xo| fa|adk|do |a x|ad |aas| qa| so|a o| ba|lag| aa| he|dka|adi|soo|o k|aqa| is|ash|u d|had| ga|eed|san|u k|a m|iin|i k| ca|u s|n l|yad|rka|axa|elo|hel|aga|hii|o h|o q| ha|id |n k| mi|baa| xu|har|xor|aar|ax |mad|add|nta|mid|aal|waa|haa|ina|qaa|daa|agu|ark|o w|nka|u h|dad|ihi| bu| ho|naa|n a|ays|haq|a h|o l| gu|o s|aya|saa|lka| ee| sa|dda|ab |nim|quu|gga|ank|kii|rci|arc|n s|a g| ji|gel| ge|eli|ysa|a f|siy|int|laa|uuq|uqu|xuq| mu|i a|uur|mar|ra |iri|o u| ci|riy|ya |ado|alk|dal|ee |al |rri|ayn|asa| di|ooc|aam|ofk|oon|to |ayo|dar| xi|dhi|jee|a c| ay|yih|a j|ban|caa|lad|sho|d k|ida|uqd|agg|sag|ras|bar|ar | ko| ra|o f|gaa|gal|fal|u a| de| ya|o c|ii |xay|eel|aab|sig|aba|orr|hoo|u q|y d|ed |ho |sad|qda|h q|fka|n i|xag|n x|qay|lsh|uls|bul|u w|jin| do|raa| ug|ido|ood",hms:"ang|gd |ngd|ib | na|nan|ex | ji|eb |id |d n|b n|ud | li|nl |ad | le|jid|leb|l l| ga|ot | me|x n|anl|aot|mex|d g|b l|d d|ob |gs |ngs|jan| ne|ul | ni|nja| nj|lib|ong|nd | zh|jex| je|b j| sh|ngb| gh|gb | gu|gao|l n|han| ad|gan| da|t n| wu|il |x g|nb |b m| nh|she|is |l j|d l|nha|l g|d j|b g|el |end|wud|nex|gho|d s|d z|oul|hob|ub |nis| ch| ya|it |b y|eib| gi|s g|lie| yo| zi|oud|s j|d b|nx | de|es |d y| hu|uel|gue|ies|aob|you| ba|d m|chu|gia|dao|b d|s n|zib| go|zha|eit|hei|al |hud| do|nt |ol | fa|t g|hen|ut |gx |ngx|ab |fal|x j|b z|ian|d h|don|b w|t j|iad|nen| xi|gou|d c|b h|hao|x z|nib|anx|ant|gua| mi|s z|dan|ox |inl|hib|lil|uan|and| xa|b x| se|x m|uib|hui|d x|anb|enl| we|od |enb| du|at |ix |s m|bao| ho|hub| ng|zhi|jil|l s|yad|t m|t l|yan| ze| ju|heb|had|os |aos|t h|l d|nga| he|b a|xan|b s|sen|xin|dud|jul|d a|lou| lo|dei|d w| bi|b c| di|zhe|gt |ngt|x l|bad|x b| ja|hon|zho|blo| bl|d k| ma|deb|l z|wei| yi| qi|b b|x d|d p|eud| ge|x a|can| ca|t w|lol| si|hol|s w|aod|pao| pa|ren| re|x s|eut|pud| pu|aox|mis|gl |ngl|x w|zei|gon|enx|gha|s a|b f|l y|oub|eab|hea| to|did| ko|unb|ghu|t p|x c|geu|t s|x x|jao|ed |t c|l m|l h|jib|ax |l c|d f|nia| pi|eul|d r| no|min|l t|heu|ux |tou|ns |s y|iel|s l|hun",hnj:"it | zh| ni|ab |at |ang| sh|nit| do|uat|os |ax |ox |ol |nx |ob | nd|t d|zhi|nf |x n|if |uax| mu|d n|tab| ta| cu|mua|cua|as |ad |ef |uf |id |dos|gd |ngd|hit|ib |us |enx|f n|she|s d|t l|nb |ux |x z|ed |inf|b n|l n|t n|aob|b z| lo|ong|ix |dol| go|zhe|f g| ho| yi|t z|d z|b d| le|euf|d s|ut |yao| yo| zi|gb |ngb|ndo|enb|len| dr|zha|uab|dro|hox| ge|nen| ne|han| ja|das|x d|x c|x j|f z|shi|f h|il | da|oux|nda|s n|nd |s z|b g| ny|heu| de|gf |ngf| du|od |gox| na|uad| gu|inx|b c| ya|uef| xa| ji|ous| ua| hu|xan|hen|zhu|nil|jai|rou|t g|f d| la|enf|ged|ik | bu|nya|you|f y|lob|af |bua|uk |is |yin|out|of |l m|ud |hua| qi|ot |t s| ba|ait| kh|s s|nad| di|aib|x l|lol| id|dou|ex |aod|bao| re| ga|d d|b y|las|hed|b h|b s|f b|t y|jua| ju| dl|x s|hue|b l| xi|zif|dus|b b|x g|hif|x y|hai| nz|sha| li|x t| be|d j|und|hun|ren|d y|hef|xin| ib|b t|l d|aos|s l| ha|gai|nzh|gx |ngx| ao|s b|s x|el |gt |ngt|hik|aid|s t|x m|f l|f t| pi|aof|t r|eb | gh|s y|d l|gua| bi| za| fu|t h| zu|hou|deu|lb | lb|d g| mo|b k| bo|iao|ros|gon|eut|x h|al |uaf|hab|t t|k n|f x|hix|pin|yua| no|t b|ak | zo|s m| nb| we|d b|gha|f s|mol|euk|dax|l b|nof| ko|lou|guk|end|uas|t k|dis|dan|yol|uan|d t|x b|lan|t m| ch|jix|x x| hl|aox|zis|x i|et | ro",ilo:"ti |iti|an |nga|ga | ng| it| pa|en | ma| ka| a | ke| ti|ana|pan|ken|ang|a n|agi|a k|n a|gan|a m|a a|lin|ali|aya|man|int|teg|n t|i p|nte| na|awa|a p|na |kal|ng |dag|git|ega|sa |da |add|way|n i|n n|no |ysa|al |dda|n k|ada|aba|nag|nna|ngg|eys| me|a i|i a|mey|ann|pag|wen|i k|gal|gga| tu|enn| da| sa|nno| we|ung| ad|tun|mai| ba|l m| ag|ya |i s|i n|yan|nan|ata|nak| si|aka|kad|aan|kas|asa|wan|ami|aki|ay |li |i m|apa|yaw|a t|mak| an|i t|g k|a s|ina|eng|ala|ika|ama|ong|ara|ili|dad| aw|gpa|nai|et |yon|ani|aik|on |at |oma|sin|bal|ipa|n d|uma|g i|ket|ag |in |aen|n p|ram|sab|aga|nom|ino|lya|ily|syo|i b| ki|nia|agp|gim|kab|asi|kin|iam|ags|bab|oy |toy|n m|agt| ta|bag|sia|g a|gil|mil| um|o p|ngi|n w|i i|pad|pap|daa|iwa|naa|eg |ias|ed |nat|bae|o k|saa|san|pam|gsa|ta |kit|ma |dum|yto|tan|i e|t n|uka|t k|apu|lan|sta|sal| li|a b|ari|g n|den|mid|ad |o i|y a|ida|ar |aar|y n|dey| de| wa|a d|ak |bia|ao |tao|min|asy|mon|imo| gi|maa|sap|abi|i u|aib|kni|i l|gin|ged|o a| ar|kap|pul|eyt|abs|ibi| am|akn|i g|kip|isu|g t|bas|nay|ing|i d|kar|ban|iba|nib|t i|as |d n|y i|ura|a w|nal|aad|i w|lak|adu|kai|bsa|duk|edu| ed|may|agb|agk|tra|gge|sol|aso|agr|ngs|ian|ila|dde|edd|tal|aip|kua|umi|pay|sas|ita|pak|g d|ulo|inn|aw "},Cyrillic:{rus:" \u043F\u0440| \u0438 |\u0440\u0430\u0432| \u043D\u0430|\u043F\u0440\u0430|\u0441\u0442\u0432|\u0433\u043E |\u0435\u043D\u0438|\u0432\u043E |\u043E\u0432\u0435| \u043A\u0430|\u043D\u0430 |\u0442\u044C | \u043F\u043E|\u0438\u044F |\u043E \u043D| \u043E\u0431|\u0435\u0442 | \u0432 |\u0441\u0432\u043E| \u0441\u0432|\u0430\u0432\u043E|\u0430\u043D\u0438|\u043E\u0441\u0442|\u043E\u0433\u043E|\u044B\u0439 |\u0430\u0436\u0434|\u043B\u043E\u0432|\u0442 \u043F| \u0438\u043C|\u043D\u0438\u044F| \u0447\u0435| \u0441\u043E|\u0435\u043B\u043E|\u0438\u043C\u0435| \u043D\u0435|\u043B\u044C\u043D|\u043B\u0438 |\u0447\u0435\u043B|\u043A\u0430\u0436|\u0435\u0441\u0442|\u0432\u0435\u043A|\u0430\u0442\u044C|\u043E\u0432\u0430|\u0438\u043B\u0438| \u0440\u0430|\u0435\u043A |\u0439 \u0447|\u0434\u044B\u0439|\u0436\u0434\u044B| \u0434\u043E|\u0438\u0435 |\u0435\u0435\u0442|\u043C\u0435\u0435|\u043D\u043E | \u0438\u043B|\u0438\u0438 |\u0441\u044F |\u0435\u0433\u043E|\u043E\u0431\u043E|\u0438 \u043F|\u043D\u0438\u0435|\u043A \u0438| \u0431\u044B|\u0438 \u0441|\u0438 \u0438|\u043C\u0438 |\u0431\u043E\u0434|\u0432\u043E\u0431|\u0432\u0430\u043D| \u0437\u0430|\u043E\u0439 |\u044B\u0445 |\u043E\u043C |\u043B\u0435\u043D|\u0430\u0446\u0438|\u0435\u043D\u043D|\u043E \u0441|\u043E \u043F|\u044C\u043D\u043E|\u0442\u0432\u0430|\u0442\u0432\u043E|\u043F\u0440\u0438|\u043D\u043E\u0433|\u0430\u043B\u044C|\u0430\u043A\u043E|\u0432\u0430 |\u0438 \u043D|\u0441\u0442\u0438|\u043D\u044B\u0445|\u0442\u043E |\u0431\u0440\u0430|\u043E\u043B\u0436|\u0434\u043E\u043B|\u0441\u0442\u043E|\u0438 \u0432|\u043D\u044B\u043C|\u043E\u0435 | \u0435\u0433|\u043D\u043E\u0432|\u0438\u0445 |\u0435\u043B\u044C|\u0442\u0435\u043B|\u0442\u0438 |\u043D\u043E\u0441|\u043D\u0435 |\u043F\u043E\u043B|\u0440\u0430\u0437| \u0432\u0441|\u0438 \u043E| \u043B\u0438|\u0438 \u0440|\u044B\u0442\u044C|\u0431\u044B\u0442|\u0432\u043B\u0435|\u0440\u0435\u0434|\u0438\u044E |\u0442\u043E\u0440| \u043E\u0441|\u044C\u0441\u044F|\u0442\u044C\u0441|\u043E\u0434\u0438|\u0449\u0435\u0441|\u044F \u0438|\u043A\u0430\u043A|\u043F\u0440\u043E|\u0436\u0435\u043D|\u044B\u043C |\u043F\u0440\u0435|\u0430 \u0441|\u0441\u043D\u043E|\u0435 \u0434|\u043D\u043D\u043E|\u043E \u0438|\u0438\u0439 | \u043A\u043E|\u043E \u0432| \u043D\u0438| \u0434\u0435|\u0441\u0442\u0443|\u043B\u0436\u043D|\u0441\u043E\u0432|\u0435 \u0432|\u043D\u043E\u043C|\u043E\u043B\u044C|\u0440\u0430\u043D|\u043E\u0436\u0435|\u0438\u0447\u0435|\u0435\u0439 |\u0430\u0441\u0442|\u043D\u043D\u044B| \u043E\u0442|\u0442\u0443\u043F|\u043C \u0438|\u043E\u0434\u043D|\u0437\u043E\u0432|\u0440\u0435\u0441| \u043C\u043E|\u043E\u0441\u0443|\u043B\u044F |\u043E\u0441\u043D|\u0430 \u043E|\u0432\u0435\u043D| \u0442\u043E|\u043E \u0431|\u0448\u0435\u043D|\u0442\u0432\u0435|\u043E\u0431\u0449|\u0430 \u0438|\u0435 \u043C|\u044C\u043D\u044B|\u043E\u0431\u0440|\u0432\u0435\u0440|\u0447\u0435\u043D|\u044F \u043D|\u0436\u043D\u043E|\u0447\u0435\u0441|\u0430\u043A |\u043B\u0438\u0447|\u043D\u0438\u0438|\u0435 \u0438|\u0432\u0441\u0435|\u0431\u0449\u0435|\u0432\u0430\u0442|\u0435\u0441\u043F|\u043C\u043E\u0436|\u0439 \u0438|\u043D\u043E\u0435|\u043E \u0434|\u0431\u0435\u0441| \u0432\u043E|\u044F \u0432|\u0434\u0443 | \u0441\u0442|\u0434\u043D\u043E|\u043E\u043D\u0430|\u043D\u0430\u0446|\u0434\u0435\u043D|\u0435\u0436\u0434|\u0445 \u0438| \u0431\u0435|\u0438 \u0434|\u043D\u044B |\u0434\u043E\u0441|\u0434\u043B\u044F| \u0434\u043B| \u0442\u0430|\u043B\u044C\u0441|\u0430\u0442\u0435|\u0446\u0438\u0438|\u044F \u043F|\u0443\u044E |\u0438\u0442\u0435|\u0435 \u043E|\u043D\u043E\u0439|\u043F\u043E\u0434|\u043E\u0442\u043E|\u0441\u0442\u0440|\u0441\u0442\u0430| \u043C\u0435|\u0435\u043B\u0438| \u0440\u0435|\u044F \u043A|\u0442\u043E\u044F|\u0430\u043C\u0438|\u0435\u043D |\u044C \u0432|\u044E \u0438|\u0430\u0437\u043E|\u0433\u043E\u0441|\u043C \u043F|\u044C \u043F|\u0442 \u0431|\u0436\u0435\u0442|\u0443\u0447\u0430|\u0441\u0443\u0434|\u044C\u0441\u0442|\u0434\u0441\u0442|\u0449\u0438\u0442|\u0430\u0449\u0438|\u0437\u0430\u0449|\u043A\u043E\u043D|\u043D\u0438\u044E|\u0430\u043C |\u043E\u0434\u0443|\u0435\u0440\u0435|\u0433\u0440\u0430|\u043F\u0435\u0447|\u043E \u043E|\u043E\u0440\u043E|\u043A\u043E\u0442|\u0438 \u043A|\u0442\u0440\u0430|\u043D\u0438\u043A|\u0443\u0449\u0435|\u0446\u0438\u0430|\u043E\u0446\u0438|\u0441\u043E\u0446|\u043D\u0430\u043B|\u0435\u0441\u043A|\u043E \u0440|\u043A\u043E\u0433|\u0434\u0440\u0443| \u0434\u0440|\u043D\u0438 |\u0430\u0432\u0430|\u043D\u0441\u0442|\u0435\u043C |\u0430\u0432\u043D|\u044B\u043C\u0438|\u0435\u0434\u0441|\u0434\u0438\u043D|\u0434\u043E\u0432| \u0433\u043E| \u0432\u044B|\u0432 \u043A|\u044B\u0435 |\u043E\u0431\u0435|\u043C\u0443 |\u044F \u0435|\u0441\u043B\u0443|\u0443\u0434\u0430|\u0442\u0430\u043A|\u043A\u043E\u0439|\u0442\u0443 |\u0438\u0442\u0443|\u0437\u0430\u043A|\u0445\u043E\u0434|\u0432\u043E\u043B|\u0440\u0430\u0431|\u043A\u0442\u043E|\u0438\u043A\u0442|\u0438\u0447\u043D|\u043D\u0438\u0447|\u043E\u0442 |\u0438\u043D\u0430| \u043A |\u0442\u0435\u0440|\u0440\u043E\u0434|\u043D\u0430\u0440",ukr:"\u043D\u0430 | \u043F\u0440|\u043F\u0440\u0430| \u0456 |\u0440\u0430\u0432| \u043D\u0430| \u043F\u043E|\u043D\u044F |\u043D\u043D\u044F| \u0437\u0430|\u043E\u0433\u043E|\u0442\u0438 |\u0432\u043E |\u0433\u043E | \u043A\u043E|\u0430\u0432\u043E| \u043C\u0430|\u043B\u044E\u0434|\u043E \u043D| \u043D\u0435| \u043B\u044E|\u044E\u0434\u0438|\u043E\u0436\u043D|\u043A\u043E\u0436|\u043B\u044C\u043D|\u0436\u043D\u0430|\u0434\u0438\u043D|\u0430\u0442\u0438|\u0430\u0454 |\u0438\u0445 |\u0438\u043D\u0430|\u043F\u043E\u0432|\u0441\u0432\u043E| \u0441\u0432|\u0430\u043D\u043D|\u0454 \u043F|\u043C\u0430\u0454|\u0430\u0431\u043E|\u0430 \u043B| \u0431\u0443|\u043D\u0435 |\u0435\u043D\u043D|\u0431\u043E | \u0430\u0431|\u0430 \u043C|\u043E\u0432\u0438|\u043D\u0456 | \u0432\u0438| \u043E\u0441|\u0430\u0446\u0456|\u0432\u0438\u043D| \u0442\u0430|\u0431\u0435\u0437|\u043E\u0431\u043E| \u0432\u0456| \u044F\u043A|\u0435\u0440\u0435| \u0434\u043E|\u0456 \u043F|\u0443\u0432\u0430|\u043E \u043F|\u0430\u043B\u044C|\u043D\u0438\u0445|\u043E\u043C |\u043C\u0438 |\u0456\u043B\u044C|\u043D\u043E\u0433|\u0442\u0430 |\u0438\u0439 |\u043F\u0440\u0438|\u043E\u044E |\u0442\u044C |\u0441\u0442\u0430| \u043E\u0431|\u0432\u0430\u043D|\u0438\u043D\u043D|\u0442\u0456 |\u043E\u0441\u0442| \u0443 |\u0441\u044F |\u0432\u0430\u0442|\u0431\u0443\u0442|\u0438\u0441\u0442| \u043C\u043E|\u0435\u0437\u043F|\u0443\u0442\u0438|\u043D\u043E\u0432|\u043F\u0435\u0440|\u0456\u0457 |\u0438 \u043F|\u0431\u043E\u0434|\u0432\u043E\u0431|\u0441\u0442\u0432| \u0432 |\u043E \u0432|\u0432\u0456\u0434| \u0431\u0435|\u0430\u043A\u043E|\u043F\u0456\u0434|\u0442\u0438\u0441|\u043A\u043E\u043D|\u043D\u043E |\u0432\u0430 |\u043D\u043D\u0456|\u0456 \u0441|\u0430 \u043F|\u0441\u0442\u0456| \u0441\u043F|\u043D\u0438\u0439|\u0434\u0443 |\u044C\u043D\u043E|\u043E\u043D\u0430| \u0456\u043D|\u0434\u043D\u043E|\u043D\u0438\u043C|\u0456\u0439 |\u0430 \u0437|\u043D\u0443 |\u043C\u043E\u0436|\u0457\u0457 | \u0457\u0457|\u043B\u044F |\u0441\u043E\u0431|\u043C\u0443 |\u043E\u0457 |\u044F\u043A\u043E| \u043F\u0435| \u0440\u0430|\u0456\u0434 | \u0434\u0435|\u0456 \u0432|\u0438 \u0456|\u0447\u0438\u043D|\u0432\u043D\u043E|\u043E\u043C\u0443|\u043D\u043E\u043C|\u0443 \u043F|\u0456 \u043D|\u0430 \u0441| \u0441\u0443|\u0430 \u043E|\u043D\u0435\u043D|\u0438\u0441\u044F|\u043E\u0432\u043E|\u043D\u0430\u043D|\u043E\u0434\u043D|\u0443 \u0432|\u0456 \u0434|\u0430\u0432\u0430|\u0456\u0434\u043D|\u0440\u0456\u0432| \u0440\u0456|\u0456 \u0440|\u0438\u043C\u0438|\u0432\u0456\u043B|\u0438\u043C |\u0446\u0456\u0457|\u043E \u0434|\u0430 \u0432|\u0441\u0442\u0443|\u043E\u0434\u0443|\u0431\u0443\u0434|\u043E\u0432\u0430| \u043F\u0456| \u043D\u0456|\u044F \u043D|\u0435 \u043F|\u043D\u0430\u0446|\u0438 \u0441|\u043D\u043D\u0430| \u043E\u0434| \u0440\u043E|\u043D\u043E\u0441|\u044C\u043D\u0438|\u044E\u0442\u044C|\u0438 \u0437|\u043A\u0438 |\u0456 \u0437|\u0430 \u0431|\u0441\u043F\u0440|\u0447\u0435\u043D|\u0436\u0435 |\u043E\u0436\u0435|\u0435 \u043C|\u043E\u0432\u043D|\u0440\u0438\u043C|\u0435 \u0431|\u0442\u043E |\u043D\u0456\u0445|\u043E\u0441\u043E|\u0443\u0434\u044C|\u0432\u0456 | \u0440\u0435| \u0441\u0442|\u0440\u0430\u0446|\u0434\u043E | \u0441\u043E|\u0440\u043E\u0437|\u043B\u0435\u043D|\u0432\u043D\u0438|\u0456\u0432\u043D|\u0440\u043E\u0434| \u0432\u0441|\u0441\u043F\u0456|\u043A\u043E\u0432|\u0437\u043F\u0435|\u0456\u0432 |\u0434\u043B\u044F| \u0434\u043B|\u0457 \u043E|\u0445\u0438\u0441|\u0430\u0445\u0438|\u0437\u0430\u0445|\u2010\u044F\u043A|\u044C\u2010\u044F|\u0434\u044C\u2010|\u044F \u0456|\u0442\u0430\u043A|\u0437\u043D\u0430|\u0437\u0430\u0431|\u0441\u0442\u044C|\u0442\u0443 |\u043D\u043E\u044E|\u0430 \u043D|\u0442\u043E\u0440|\u0441\u043D\u043E|\u043E \u0441|\u0436\u0435\u043D|\u0446\u0456\u0430|\u043E\u0446\u0456|\u0441\u043E\u0446|\u0456\u043D\u0448|\u0456 \u043C|\u043A\u043B\u0430|\u0438 \u0432|\u0442\u0435\u0440| \u0434\u0456|\u0456\u0441\u0442|\u043E\u0432\u0456|\u0443 \u0441|\u044F \u0432|\u0430\u0440\u043E|\u0441\u0456 |\u0432\u0456\u0442|\u0441\u0432\u0456|\u043E\u0441\u0432|\u0440\u043E\u0431|\u043F\u0456\u043B|\u0440\u0435\u0441|\u0437\u0430 |\u043F\u0435\u0447|\u0430\u0431\u0435|\u043A\u0443 |\u043B\u0438\u0432|\u0435\u0440\u0436|\u0434\u0435\u0440|\u0432 \u0456|\u0430\u0432\u043D|\u0442\u0430\u0432|\u0430\u0432 |\u0430\u043C\u0438|\u043A\u043E\u043C|\u0432\u043B\u0435|\u043E \u0431|\u044C \u043F| \u0449\u043E|\u0457\u0445 |\u0442\u0432\u043E|\u0445\u0442\u043E|\u0456\u0445\u0442|\u043A\u043E\u0433| \u043A\u0440|\u0430\u043D\u043E|\u0442\u0430\u043D|\u0456\u0430\u043B|\u043D\u0430\u043B|\u043D\u044C |\u0445 \u043F|\u0436\u043D\u043E|\u043B\u0435\u0436|\u0430\u043B\u0435|\u043F\u0440\u043E|\u0442\u0432\u0430|\u0440\u0430\u0442|\u043E \u043E|\u0445 \u0432|\u043D\u0430\u0440|\u043B\u044C\u0441|\u0446\u0456\u0439|\u043A\u043E\u0440|\u0447\u0430\u0441|\u0440\u0436\u0430|\u0457 \u0441|\u0438\u043D\u0443|\u0434\u0441\u0442|\u043E \u0437|\u0440\u0430\u0437|\u043C\u0456\u043D|\u0430 \u0440|\u0437\u0430\u043A",bos:" \u043F\u0440| \u0438 |\u0440\u0430\u0432|\u043D\u0430 |\u043C\u0430 |\u043F\u0440\u0430| \u043D\u0430|\u0438\u043C\u0430| \u0441\u0432|\u0430 \u0441|\u0434\u0430 |\u0430 \u043F|\u0432\u043E |\u0458\u0435 |\u043A\u043E |\u0430\u043A\u043E|\u043E \u0438| \u043F\u043E|\u0430\u0432\u043E|\u0435 \u0441|\u0430 \u0438|\u0442\u0438 | \u0438\u043C| \u0434\u0430| \u0443 |\u0441\u0432\u0430|\u043D\u043E | \u0437\u0430|\u043E \u043D|\u0432\u0430 |\u0438 \u043F|\u0438\u043B\u0438|\u0432\u0430\u043A|\u043B\u0438 | \u043A\u043E|\u043D\u0435 | \u0438\u043B|\u043A\u043E\u0458| \u043D\u0435| \u0434\u0440|\u043E\u0441\u0442| \u0441\u043B|\u045A\u0430 |\u0438\u043C |\u0438 \u0441|\u0443 \u0441|\u0438 \u0438|\u0430\u0432\u0430|\u0438\u0458\u0435|\u0430 \u0443| \u0431\u0438|\u0441\u0442\u0432|\u0441\u0435 |\u0432\u0430\u045A|\u0430 \u0434|\u043E\u043C |\u0458\u0435\u0434|\u0431\u043E\u0434|\u043E\u0431\u043E|\u043B\u043E\u0431|\u0441\u043B\u043E| \u0441\u0435| \u0440\u0430|\u0438\u0445 |\u0441\u0442\u0438|\u0430 \u043D|\u045A\u0435 | \u043E\u0431| \u0458\u0435|\u043F\u0440\u0438|\u0434\u0440\u0443|\u0443 \u0438|\u0458\u0443 |\u043E \u0434|\u0438\u0442\u0438|\u0432\u043E\u0458|\u0440\u0430\u0437|\u0430\u045A\u0435|\u043E\u0432\u0430|\u0434\u0458\u0435| \u043E\u0441|\u0435 \u0438|\u043B\u043E |\u0435 \u043F|\u0430\u045A\u0430|\u0443\u0458\u0435|\u0438 \u0434|\u0431\u0440\u0430|\u0442\u0440\u0435| \u0442\u0440| \u0441\u0443|\u0443 \u0437|\u0430 \u043A|\u043E\u0433 |\u0443 \u043F|\u043E\u0458\u0435|\u0446\u0438\u0458|\u0440\u0435\u0431|\u0430 \u043E|\u0430 \u0431| \u045A\u0435|\u0438 \u0443|\u043C\u0438\u0458|\u043D\u0438 |\u043D\u043E\u0441|\u0431\u0430 |\u0435\u0434\u043D|\u0441\u0432\u043E|\u045A\u0435\u0433| \u0438\u0437|\u043F\u0440\u043E|\u0435 \u0434|\u0436\u0430\u0432|\u0431\u0438\u0442| \u043D\u0438|\u0438 \u043E|\u0441\u0442\u0430|\u0430 \u0437|\u0430\u0432\u043D|\u0432\u0458\u0435| \u043A\u0430|\u0431\u0438\u043B|\u043E\u0432\u043E|\u0430 \u0458|\u0430\u0458\u0443|\u0438\u0441\u0442|\u0438 \u043D|\u043D\u0438\u0445|\u0458\u0435\u043B|\u0442\u0443 |\u0440\u0435\u0434|\u0433\u043E\u0432| \u043E\u0434|\u0435 \u043E|\u043E\u0458\u0438| \u0441\u043C|\u0458\u0430 |\u043E \u043A|\u0438\u043B\u043E|\u0430\u0446\u0438|\u0435 \u0443|\u043F\u0440\u0435|\u043E \u043F|\u0435\u0431\u0430|\u0443 \u043E|\u0441\u0443 |\u0432\u0438\u043C|\u0438\u0447\u043D| \u0441\u0430| \u0434\u0458|\u0430 \u0442|\u0438\u0458\u0430|\u0448\u0442\u0438|\u0447\u043D\u043E|\u0440\u0436\u0430|\u0434\u0440\u0436|\u0441\u0442\u0443|\u0434\u043D\u0430|\u043E\u0434\u043D|\u0435\u043D\u0438|\u0437\u0430 |\u0438\u0432\u0430|\u043D\u043E\u043C|\u0435\u043C |\u0434\u0443 |\u0440\u0430\u043D|\u0432\u043D\u043E|\u0441\u043C\u0438|\u0458\u0435\u0440|\u0435 \u0431|\u0435 \u043D|\u0434\u0435 |\u043F\u043E\u0441|\u043C \u0438| \u0434\u043E|\u0443 \u0434|\u043D\u0430\u043A|\u0430 \u0440|\u043E\u0431\u0440| \u043C\u043E|\u043D\u0438\u043C|\u0435\u0433\u043E| \u043A\u0440|\u0442\u0438\u0442|\u043A\u0440\u0438|\u0432\u0435 |\u0430\u043D |\u0438\u043A\u043E|\u043D\u0438\u043A|\u043D\u0443 |\u0438 \u043C|\u043D\u043E\u0433|\u0435\u043D\u043E|\u0441\u043D\u043E|\u0435 \u043A|\u0442\u0443\u043F|\u0440\u0443\u0433|\u043A\u0430 |\u043E\u0434\u0430|\u0440\u0438\u0432|\u0432\u043E\u0459|\u0430\u043B\u043D|\u043C \u0441|\u0438\u0442\u0443|\u0430\u0448\u0442|\u0437\u0430\u0448|\u0430\u043D\u0438|\u0441\u0430\u043C| \u0441\u0442|\u0430\u043A\u0432|\u043E\u0432\u0438|\u043E\u0441\u043D|\u0440\u043E\u0434|\u0430\u0440\u043E| \u043C\u0438|\u0458\u0438 |\u0442\u0432\u0430|\u0434\u043D\u043E|\u043D\u0441\u0442|\u0430\u043A |\u0438\u0442\u0435|\u0459\u0443 |\u0432\u0438\u0447|\u0440\u0430\u0434|\u0443 \u043D|\u0443 \u043C| \u0442\u0430|\u0434\u0441\u0442|\u0442\u0438\u0432|\u043D\u0430\u0446|\u0440\u0438\u043C|\u043A\u043E\u043D|\u043A\u0443 |\u045A\u0443 |\u043E\u0434\u0443|\u0436\u0438\u0432|\u0430\u043C\u043E|\u0442\u0432\u043E|\u0442\u0435\u0459|\u043F\u043E\u0434|\u0435\u0452\u0443|\u0433 \u043F|\u043D\u043E\u0432|\u0438\u043D\u0430|\u043D\u0430\u0440| \u0432\u0458|\u0438 \u0431|\u043E\u0458 | \u043E\u0432|\u0430\u0432\u0435|\u0432\u0443 |\u0430\u043D\u0441|\u043E\u0458\u0430|\u0437\u043E\u0432|\u0430\u0437\u043E|\u0443\u0434\u0435|\u0431\u0443\u0434| \u0431\u0443|\u0435 \u0442|\u0438 \u0432|\u0435\u045A\u0430|\u0435\u0434\u0438|\u043D\u0438\u0446|\u043D\u0430\u043F|\u043C\u0458\u0435| \u0438\u0441|\u0441\u043B\u0443|\u0435\u0434\u0441|\u043E \u043E|\u0437\u0430\u043A|\u0438 \u043A|\u043C \u043F|\u0442\u043D\u043E|\u0438\u0432\u043E|\u0435\u0440\u0435|\u043D\u0438\u0447|\u043A\u0430\u043A|\u0430\u0434\u0430|\u0432\u043D\u0438|\u0443\u0433\u0438| \u0440\u043E|\u043C\u043E\u0432|\u0432\u0435\u043D|\u043E \u0441|\u0442\u043E |\u0442\u0435 | \u0432\u0440| \u0431\u0435|\u0430\u0440\u0430|\u043A\u043B\u0430| \u0431\u0440|\u0443 \u0431|\u0443 \u0443|\u0438 \u0442|\u043E\u043D\u0430| \u043E\u043D|\u0430\u0432\u0438|\u0458\u0430\u043B|\u0434\u043D\u0438| \u0441\u043A",srp:" \u043F\u0440| \u0438 |\u0440\u0430\u0432|\u043D\u0430 |\u043F\u0440\u0430| \u043D\u0430|\u043C\u0430 | \u0441\u0432|\u0438\u043C\u0430|\u0434\u0430 |\u0430 \u043F|\u0432\u043E |\u043A\u043E |\u0442\u0438 |\u0430\u0432\u043E| \u043F\u043E|\u0430 \u0438|\u0430\u043A\u043E|\u0430 \u0441| \u0437\u0430| \u0443 |\u043E \u0438| \u0438\u043C|\u0438 \u043F|\u0432\u0430 |\u0441\u0432\u0430|\u0432\u0430\u043A| \u0434\u0430|\u043E \u043D|\u0435 \u0441|\u043E\u0441\u0442| \u043A\u043E|\u045A\u0430 |\u043B\u0438 |\u0438\u043B\u0438|\u043D\u0435 |\u043E\u043C | \u043D\u0435|\u0430 \u043D| \u0441\u043B| \u0438\u043B|\u0458\u0435 | \u0434\u0440|\u0438 \u0441|\u043D\u043E |\u043A\u043E\u0458|\u0443 \u0441|\u0430\u0432\u0430| \u0440\u0430|\u043E\u0433 |\u0441\u043B\u043E|\u0458\u0443 |\u0438\u043C |\u0441\u0442\u0438|\u0431\u043E\u0434|\u043E\u0431\u043E|\u043B\u043E\u0431|\u0438\u0442\u0438|\u0430 \u043E|\u0441\u0442\u0432|\u0438 \u0443|\u0430 \u0434|\u043D\u0438 |\u0458\u0435\u0434|\u0443 \u043F|\u043F\u0440\u0438|\u0435\u0434\u043D| \u0431\u0438|\u0438 \u0438|\u0430 \u043A|\u043E \u0434|\u0441\u0442\u0430|\u0438\u0445 |\u0434\u0440\u0443|\u0430 \u0443| \u0458\u0435|\u0430\u045A\u0430| \u043E\u0441| \u043D\u0438|\u043D\u043E\u0441|\u043F\u0440\u043E|\u0430\u0458\u0443|\u0438 \u043E| \u0434\u0435| \u0441\u0443|\u0443 \u0438|\u0441\u0435 |\u045A\u0435 |\u0458\u0430 |\u043E\u0432\u0430|\u0438 \u0434|\u0446\u0438\u0458| \u043E\u0431|\u0443\u0458\u0435|\u0440\u0435\u0434|\u0436\u0430\u0432|\u0435 \u0438|\u0435 \u043F|\u0430 \u0458|\u0434\u043D\u0430| \u0441\u0435| \u043E\u0434|\u0432\u0435 | \u043A\u0430|\u0435\u043D\u0438|\u0440\u0436\u0430|\u0434\u0440\u0436|\u0430 \u0437|\u0430\u0432\u043D|\u0435\u045A\u0430|\u0430\u0446\u0438|\u0432\u043E\u0458|\u043E\u0432\u043E|\u0443 \u0443|\u043C \u0438|\u043E\u0458\u0430|\u0432\u0430\u045A| \u0438\u0437|\u0438\u0458\u0430|\u0443 \u0437|\u0430\u045A\u0435|\u0440\u0430\u043D|\u0435 \u043E|\u0440\u043E\u0434|\u0438 \u043D|\u0435 \u0431|\u0440\u0430\u0437|\u0437\u0430 | \u045A\u0435|\u0433\u043E\u0432|\u0438\u0447\u043D| \u0441\u0442|\u043D\u043E\u0432|\u0441\u043D\u043E|\u043E\u0441\u043D|\u0434\u0443 |\u043F\u0440\u0435| \u0442\u0440|\u0441\u0443 |\u0432\u0443 |\u043E\u0434\u043D|\u0430 \u0431|\u0441\u0432\u043E|\u045A\u0435\u0433|\u043D\u0438\u043C|\u043D\u0438\u0445|\u0442\u0443 |\u0442\u0438\u0442|\u0448\u0442\u0438|\u043A\u0443 |\u043D\u043E\u043C|\u0431\u0438\u0442|\u0435 \u0434|\u043C\u0435 |\u0438\u043A\u043E|\u0447\u043D\u043E|\u043E\u0458\u0438|\u043B\u043E |\u0432\u043D\u043E|\u043D\u0438\u043A|\u0438\u043A\u0430|\u0431\u0435\u0437|\u0430\u0440\u0430|\u0434\u0435 |\u0443 \u043E|\u0432\u0438\u043C|\u043D\u0430\u043A| \u0441\u0430|\u0440\u0438\u0432|\u0430\u0432\u0435|\u0430\u043D |\u0432\u043E\u0459| \u043A\u0440|\u043E \u043F|\u0441\u043C\u0435|\u0435 \u043A|\u043D\u043E\u0433|\u0458\u0438 | \u043E\u0432|\u0435 \u0443|\u0442\u0432\u0430|\u0431\u0440\u0430|\u0440\u0443\u0433|\u0440\u0435\u0431|\u0442\u0440\u0435|\u0443 \u0434|\u043E\u0434\u0430| \u043C\u043E| \u0432\u0440|\u0430\u0432\u0459|\u0443 \u043D|\u0435\u0433\u043E|\u0434\u0435\u043B|\u043C \u0441|\u043A\u0440\u0438|\u043E \u043A|\u0430\u0448\u0442|\u0437\u0430\u0448|\u045A\u0443 | \u0441\u043C|\u0430\u043D\u0438| \u043B\u0438|\u0434\u043D\u043E|\u0435\u0452\u0443|\u0430\u043B\u043D|\u043B\u0430 |\u0430\u043A\u0432|\u043E\u0458 |\u043A\u043E\u043C|\u0441\u0442\u0443|\u0443\u0433\u0438|\u0430\u0432\u0438|\u0430 \u0440|\u043A\u0430 |\u0440\u0430\u0434|\u043E\u0434\u0438|\u0432\u0438\u0447|\u0442\u0430\u0432|\u0438\u0442\u0443|\u0443\u0434\u0435|\u0431\u0443\u0434| \u0431\u0443|\u043F\u043E\u0442|\u043E\u0434\u0443|\u0436\u0438\u0432|\u0435\u0440\u0435|\u0442\u0432\u043E|\u0438\u043B\u043E|\u0431\u0438\u043B|\u0430\u0440\u043E|\u0435 \u043D|\u043E\u0432\u0438|\u043F\u043E\u0440|\u0435\u043D\u043E|\u0448\u0442\u0432|\u043D\u0430\u0446|\u043E\u0432\u0435|\u043C \u043F|\u0442\u0443\u043F|\u043F\u043E\u0441|\u0440\u0435\u043C|\u0434\u043D\u0438|\u0431\u0430 |\u043D\u0441\u0442|\u0430 \u0442|\u043E\u0458\u0443|\u0430\u0441\u0442|\u0438\u0432\u0430|\u0435 \u043C|\u0432\u0440\u0435|\u0432\u0459\u0430|\u043D\u0443 |\u0431\u0435\u0452|\u0438\u0441\u0442|\u0435\u043D |\u0442\u0435 |\u0434\u0441\u0442|\u0440\u043E\u0442|\u0437\u0430\u043A|\u0430\u043E |\u043A\u0430\u043E|\u0438 \u043A|\u0458\u0443\u045B|\u043E \u0441|\u0441\u0442 |\u0441\u0430\u043C|\u043C \u043D|\u0442\u0435\u0440|\u043D\u0430\u0440| \u043C\u0435|\u0438 \u043C|\u043A\u043E\u043B|\u0435 \u0440|\u0443\u0448\u0442|\u0440\u0443\u0448|\u0432\u0435\u0440|\u043A\u0430\u043A| \u0431\u0435|\u0438 \u0431|\u043A\u043B\u0430|\u0430\u0434\u0430|\u0435\u0431\u0430|\u0435\u043D\u0430|\u043E\u043D\u0430| \u043E\u043D|\u0442\u0432\u0443|\u0430\u043D\u0441| \u0434\u043E|\u0440\u0430\u043A|\u0441\u043B\u0443|\u0438 \u0432|\u043D\u0438\u0446|\u0443 \u043A|\u043C\u0435\u043D|\u0432\u0440\u0448|\u0435\u043C\u0435|\u0435\u0434\u0441|\u0438\u0432\u0438|\u043E \u043E|\u0458\u0430\u0432",uzn:"\u0430\u043D |\u043B\u0430\u0440|\u0433\u0430 |\u0438\u0440 | \u0431\u0438|\u0430\u0440 | \u0432\u0430|\u0434\u0430 |\u0438\u0433\u0430| \u04B3\u0443|\u0432\u0430 |\u0431\u0438\u0440|\u0443\u049B\u0443|\u049B\u0443\u049B|\u04B3\u0443\u049B| \u04B3\u0430|\u0440 \u0431|\u0433\u0430\u043D|\u0438\u0448 |\u0438\u0434\u0430| \u0442\u0430|\u0430 \u044D|\u0438\u043D\u0438|\u0430\u0434\u0438|\u043D\u0433 |\u0434\u0438\u0440|\u0438\u0448\u0438|\u043B\u0438\u043A|\u043B\u0438\u0448|\u0438\u0439 |\u0438\u043B\u0438|\u0430\u0440\u0438|\u0443\u049B\u0438|\u04B3\u0430\u0440|\u043B\u0430\u043D|\u0438\u043D\u0433|\u0448\u0438 |\u0434\u0430\u043D|\u043D\u0438\u043D|\u0438\u043D\u0441|\u043A\u0438\u043D|\u0441\u043E\u043D|\u043D\u0441\u043E| \u0438\u043D| \u043C\u0443|\u049B\u0438\u0433| \u043C\u0430|\u043E\u043D |\u0440 \u0438| \u0431\u045E|\u044D\u0433\u0430| \u044D\u0433| \u045E\u0437|\u043D\u0438 |\u0431\u045E\u043B|\u0433\u0430\u0434|\u0438 \u0431|\u043A\u0438 |\u0438\u043B\u0430|\u0451\u043A\u0438| \u0451\u043A|\u0430 \u0431|\u043D \u0431|\u0438\u043D |\u0440 \u04B3|\u0430\u043B\u0430|\u044D\u0440\u043A| \u044D\u0440|\u043B\u0433\u0430| \u049B\u0430|\u0440\u043A\u0438|\u0448 \u04B3|\u0438 \u04B3|\u043D \u043C| \u0431\u043E| \u0431\u0430|\u0438\u043A |\u0430\u0440\u0430|\u0438\u0433\u0438|\u043B\u0438\u0433|\u0440\u0438 |\u049B\u0438\u043B|\u0430 \u0442|\u0431\u0438\u043B| \u044D\u0442|\u043D\u0438\u0448|\u043D\u043B\u0438|\u043A\u043B\u0430|\u0438 \u0432|\u0431\u043E\u0448|\u044D\u0442\u0438|\u0430\u043D\u0438|\u0438\u043C |\u0438 \u043C|\u043E\u043B\u0438|\u049B\u043B\u0430|\u0430 \u04B3|\u043B\u0430\u0448|\u0430\u0442\u043B|\u0442\u0438\u043B|\u0430 \u049B| \u043E\u043B|\u043E\u0441\u0438|\u043C\u0430\u0441|\u049B\u0430\u0440|\u0438\u043D\u043B|\u043B\u0430\u0442| \u049B\u0438|\u0442\u0430\u044A|\u04B3\u0430\u043C|\u0433\u0438 |\u0438\u0431 |\u043C\u043B\u0430|\u045E\u0437 |\u043D \u044D|\u043C\u0443\u043C| \u0434\u0430| \u0431\u0443|\u0430\u0442 |\u0448 \u0432|\u0443\u043D |\u0430\u0442\u0438|\u043C\u043A\u0438|\u0443\u043C\u043A|\u0442\u043B\u0430|\u0438\u0440\u043E|\u045E\u043B\u0438|\u0431\u0430\u0440|\u0438\u0440\u0438|\u0440\u0438\u0448|\u0438\u044F\u0442|\u0430\u043B\u0438| \u0431\u0435| \u049B\u043E|\u0430 \u0448|\u0430\u0440\u043E| \u043A\u0435|\u0438 \u0442|\u0440\u043B\u0430| \u0442\u0435|\u0447\u0430 |\u0440\u0447\u0430|\u0430\u0440\u0447|\u0430 \u045E| \u0448\u0443|\u0442\u0438\u0448|\u043D \u04B3|\u0442\u0433\u0430| \u0441\u0430|\u0430\u0441\u0438| \u0445\u0430|\u0440\u0430\u043A|\u043B\u0438\u043D|\u043E\u043B\u0430|\u0438\u043C\u043E|\u0448\u049B\u0430|\u043B\u0438 | \u0442\u0443|\u0430\u043C\u043B|\u043B\u043B\u0430|\u0441\u0438\u0434|\u043D \u045E| \u0430\u0441|\u043D\u0438\u0434|\u0430 \u0438| \u043A\u0438|\u043D \u0442|\u043D\u0434\u0430|\u043A \u0431|\u0435\u0440\u0430|\u043E\u0448\u049B|\u0441\u0438\u0437|\u043E\u0440 |\u0430 \u043C|\u0440 \u0432|\u0435\u043D\u0433|\u0442\u0435\u043D|\u043C\u0430\u0442|\u043C\u0434\u0430|\u0430\u043C\u0434|\u043B\u0438\u043C|\u0439 \u0442|\u044F\u0442 |\u0438 \u0430|\u0438\u043D\u043E|\u0438\u043B\u0433| \u0442\u043E|\u0442\u043D\u0438|\u0430\u043D\u0430|\u0430\u0441 |\u044D\u043C\u0430| \u044D\u043C|\u0430 \u0451| \u0448\u0430|\u0430\u0448 |\u0430 \u0430|\u0442\u0430\u0440|\u043A\u0430\u0442|\u0430\u043A\u0430|\u0430\u043A | \u0434\u0435|\u0430\u0437\u0430|\u0438\u043B\u043B|\u0441\u0438\u0439| \u0441\u0438| \u0441\u043E|\u0443\u049B\u043B|\u043D \u049B|\u043E\u0434\u0430|\u044A\u043B\u0438|\u0430\u044A\u043B|\u043D\u0438\u043A|\u0430\u0434\u0430| \u043D\u0438|\u0442\u0434\u0430|\u0433\u0438\u043D|\u0443\u043D\u0438|\u0441\u0438\u0442|\u0430\u0439 |\u049B\u043E\u043D|\u043D \u043E| \u0436\u0430|\u043A\u0438\u043C|\u0435\u0447 |\u04B3\u0435\u0447| \u04B3\u0435|\u045E\u0437\u0438|\u043B\u0430\u043A|\u043A\u0435\u0440|\u0438\u043A\u043B|\u043B\u043B\u0438|\u0443\u0440 |\u0437\u0430\u0440|\u0448\u043B\u0430|\u0440\u0438\u0433|\u0438\u0440\u043B|\u0434\u0430\u043C|\u043A\u043E\u04B3|\u0438\u043A\u043E|\u0430 \u0434|\u0430\u043C |\u043D \u0432|\u0440\u0442\u0438|\u0442\u0438\u0431|\u0442\u0430\u043B| \u0438\u0448|\u0447\u0443\u043D|\u0443\u0447\u0443| \u0443\u0447|\u0441\u043B\u0430|\u0430 \u0443|\u0440\u0438\u043D|\u0441\u043E\u0441|\u0430\u0441\u043E| \u0443\u043D|\u043D\u0430 | \u043A\u0430|\u043C\u0443\u04B3|\u0434\u0438\u0433|\u0447 \u043A|\u0430\u0441\u043B|\u043B\u043C\u0430|\u0440\u0430 |\u0431\u0443 |\u0445\u0430\u043B|\u045E\u043B\u0433|\u0438 \u043A|\u0435\u043A\u043B|\u0440 \u0434|\u049B\u0430\u0442|\u0430\u0433\u0430|\u0438 \u049B|\u043E\u0438\u0439|\u043C\u0438\u043B| \u043C\u0438|\u049B\u0430 |\u0438 \u0441|\u0436\u0438\u043D| \u0436\u0438|\u0441\u0438\u043D|\u0440\u043E\u0440|\u0430 \u0432|\u043B\u0430\u0434|\u0430 \u043E|\u0442\u043B\u0438|\u043C\u0438\u044F|\u043D \u0438|\u0430\u0431 |\u0442\u0438\u0440|\u0437 \u043C|\u0434\u0430\u0432|\u0440\u0433\u0430|\u0430\u0433\u0438|\u0430 \u043A|\u043D\u043B\u0430|\u0430\u049B\u0442|\u0432\u0430\u049B|\u0430\u0440\u0442|\u0430\u0451\u0442|\u043B\u0430\u0431",azj:" \u0432\u04D9|\u0432\u04D9 |\u04D9\u0440 |\u0438\u0440 | \u04BB\u04D9| \u0431\u0438| \u04BB\u04AF| \u043E\u043B|\u04AF\u0433\u0443|\u04BB\u04AF\u0433|\u0433\u0443\u0433|\u043D\u0430 |\u0438\u043D |\u043B\u0430\u0440|\u04BB\u04D9\u0440|\u0434\u04D9 | \u0448\u04D9|\u0431\u0438\u0440|\u043B\u04D9\u0440|\u043B\u0438\u043A|\u043C\u0430\u043B|\u0440 \u0431|\u043B\u043C\u0430|\u0440 \u04BB| \u0442\u04D9|\u04D9\u0445\u0441|\u0448\u04D9\u0445|\u04D9\u043D |\u0434\u0438\u0440|\u0443\u0433\u0443|\u0443\u043D\u0430|\u0430\u043D |\u0430\u043B\u0438|\u0430 \u043C| \u043C\u0430|\u0438\u043A\u0434|\u0438\u043D\u0438|\u0440 \u0448|\u0434\u04D9\u043D|\u0430\u0440 |\u0438\u043B\u04D9|\u0433\u0443\u043D|\u0430\u0433 |\u0430\u0441\u044B| \u0458\u0430|\u043C\u04D9\u043A|\u0458\u04D9\u0442| \u043C\u04D9| \u043C\u04AF|\u043A\u0434\u0438|\u04D9\u0441\u0438|\u04D9\u043A |\u0438\u043B\u043C|\u043D\u0438\u043D|\u043D\u0434\u04D9|\u043E\u043B\u043C|\u04D9\u0442\u0438|\u04D9 \u0458|\u0441\u0438\u043D|\u0445\u0441 |\u043D\u0434\u0430|\u043B\u043C\u04D9|\u0458\u0458\u04D9|\u0438 \u0432| \u0433\u0430| \u0430\u0437|\u043E\u043B\u0443|\u0438\u0458\u0458|\u0458\u0430 |\u0438\u043D\u0434|\u0437\u0430\u0434|\u0433\u043B\u0430|\u04AF\u043D |\u043D\u0438 |\u043B\u04D9 |\u0442\u0438\u043D|\u043D \u043C|\u0430\u0437\u0430|\u0430\u0440\u044B|\u04D9\u0442 |\u043D \u0442|\u043C\u0430\u0433|\u043B\u0443\u043D|\u043B\u044B\u0433|\u04D9 \u0431|\u0443\u043D |\u043D\u0443\u043D|\u0433 \u0432|\u043D \u04BB|\u0434\u0430\u043D|\u044B\u043D | \u0435\u0442|\u0442\u043C\u04D9|\u04D9\u0440\u04D9| \u04E9\u0437|\u0434\u0430 |\u04D9 \u0432| \u043E\u043D|\u04D9 \u0430|\u044B\u043D\u0430|\u044B\u043D\u044B|\u0431\u0438\u043B|\u0430 \u0431|\u0441\u044B |\u0438\u043B |\u04D9\u043C\u0438|\u0430\u0440\u0430|\u0441\u0438 | \u0434\u0438|\u04D9 \u043C|\u04D9\u0440\u0438|\u0440\u043B\u04D9| \u0432\u0430|\u04D9 \u04BB|\u0435\u0442\u043C|\u044B\u0493\u044B|\u0430\u043C\u0430|\u0434\u043B\u044B|\u0430\u0434\u043B|\u0440\u0438\u043D|\u0431\u04D9\u0440|\u0440\u044B\u043D|\u043D \u0438|\u043C\u04AF\u0434|\u043D\u044B\u043D| \u04BB\u0435|\u043C\u0430\u0441|\u0438\u043A |\u043D \u0430|\u0434\u0438\u043B|\u0430\u043B\u044B|\u0438\u0440\u043B|\u04D9\u043B\u04D9|\u04AF\u0434\u0430|\u0441\u044B\u043D|\u044B\u043D\u0434|\u0445\u0441\u0438|\u043B\u0438 |\u04D9 \u0434|\u043D\u04D9 | \u0431\u04D9|\u04D9\u0458\u0430| \u0438\u043D|\u04D9 \u0438|\u043B\u04D9\u0442| \u0441\u04D9|\u043D\u044B | \u0438\u0448|\u0430\u043D\u044B|\u0435\u0447 |\u04BB\u0435\u0447|\u0433 \u04BB|\u0435\u0458\u043D|\u04D9 \u0435|\u0434\u044B\u0440| \u0434\u0430|\u0430\u0441\u0438|\u0440\u044B |\u0438\u0448 |\u0438\u0444\u0430|\u043B\u044B\u0493|\u0438 \u0441|\u0444\u0438\u04D9|\u0430\u0444\u0438|\u0434\u0430\u0444| \u0435\u0434|\u043C\u04D9\u0437|\u0443 \u0432|\u043A\u0438\u043B| \u04BB\u0430|\u043E\u043B\u0430|\u043D \u0432|\u04D9\u043D\u0438|\u044B\u0440 |\u0443\u0433 |\u0443\u043D\u043C| \u0431\u0443| \u0430\u0441|\u0441\u0438\u0430|\u043E\u0441\u0438|\u0441\u043E\u0441|\u0438\u043B\u0438|\u044B\u0434\u044B|\u043B\u044B\u0434|\u043D\u043C\u0430|\u044B\u0433 |\u0438\u043D\u04D9|\u04D9\u0440\u0430|\u0441\u0438\u043B|\u0445\u0438\u043B|\u0430\u0445\u0438|\u0434\u0430\u0445|\u0430\u0434\u04D9|\u043C\u0430\u043D|\u0430 \u04BB|\u04D9 \u043E|\u043E\u043D\u0443|\u0430 \u0433|\u04D9\u0437 | \u043A\u0438|\u0441\u0435\u0447| \u0441\u0435|\u044B \u04BB|\u043C\u0438\u043D|\u043B\u0430\u043D|\u04D9\u0434\u04D9|\u0431\u0443 |\u0440\u0430\u0433|\u043B\u044B |\u044B\u043B\u044B|\u0430\u043B |\u04D9 \u0433|\u0440 \u0432|\u043D\u043B\u0430|\u04BB\u0441\u0438|\u04D9\u04BB\u0441|\u0442\u04D9\u04BB|\u04E9\u0437 |\u0438\u0441\u0442| \u0438\u0441|\u043C\u04D9\u0441| \u04D9\u0441|\u0438\u043D\u0430|\u04D9 \u0442|\u04D9\u0442\u043B|\u0430 \u0432|\u0438\u04D9 |\u043D \u0431|\u0442\u04D9\u0440| \u0442\u0430| \u04B9\u04D9|\u0435\u0434\u0438|\u0430\u043B\u0430|\u043A\u0438\u043C|\u0433\u0443 |\u0438 \u0442|\u0443\u043B\u043C|\u043C\u04D9\u04BB|\u043D \u043E|\u0430\u0458\u0430|\u044B \u043E|\u0438\u0430\u043B| \u0441\u043E|\u0438\u043B\u043B|\u0441\u0438\u0458| \u0434\u04D9|\u0432\u0430\u0440|\u0438\u043D\u0441|\u043C\u0438 |\u0493\u044B |\u043D\u0438\u043A|\u0440 \u0438|\u0430\u0433\u043B|\u043A \u04BB|\u0442\u04D9\u043C|\u0442\u0430\u043C|\u0447\u04AF\u043D|\u04AF\u0447\u04AF| \u04AF\u0447|\u0493\u044B\u043D|\u0441\u0430\u0441|\u04D9\u0441\u0430|\u0437 \u04BB|\u04D9\u043C\u04D9|\u0437\u0430\u043C| \u0437\u0430|\u0441\u0442\u0438|\u0440\u04D9\u0444|\u043D \u0435|\u0440 \u0430|\u0438\u043B\u0434|\u04BB\u04D9\u043C|\u044B\u0433\u043B|\u0458\u0430\u043D|\u043C\u0430\u0458|\u043D \u04D9|\u043C\u04D9\u043D|\u043C\u0438\u043B| \u043C\u0438|\u04D9\u0433\u0438|\u0434\u0438\u043D|\u043D \u0434|\u0442\u04AF\u043D| \u0434\u04E9|\u043C\u0438\u0458|\u043A\u0430\u04BB|\u0438\u043A\u0430| \u043D\u0438|\u0444\u0430\u0434|\u0442\u0438\u0444|\u043B \u043E|\u0441\u04D9\u0440|\u0458\u043D\u0438| \u0435\u0458|\u0430\u043D\u0430|\u043B\u04D9\u043D|\u0430\u043C |\u0440\u0438\u043B|\u0430\u0458\u04D9|\u0430\u0448\u044B",koi:"\u043D\u044B |\u04E7\u043D | \u0431\u044B|\u0434\u0430 | \u043F\u0440|\u043B\u04E7\u043D|\u0440\u0430\u0432| \u043C\u043E|\u043F\u0440\u0430| \u0434\u0430|\u0431\u044B\u0434| \u0432\u0435|\u043E\u0440\u0442|\u043B\u04E7 |\u04E7\u0439 |\u043C\u043E\u0440|\u04E7\u043C |\u0430\u0432\u043E| \u043D\u0435|\u0432\u043E |\u044B\u0434 |\u044B\u0441 |\u043D\u04E7\u0439|\u044B\u043D |\u043C \u043F|\u0434 \u043C|\u044B\u043D\u044B|\u0442\u043D\u044B| \u0430\u0441|\u0442\u04E7\u043C|\u043B\u044C\u043D| \u044D\u043C|\u0432\u0435\u0440|\u0441\u044C |\u044C\u043D\u04E7|\u044D\u043C |\u043D \u044D|\u0442\u043B\u04E7| \u043A\u044B|\u0441\u04E7 | \u043F\u043E|\u0435\u0440\u043C|\u0441\u044C\u04E7|\u0440\u0442\u043B|\u0430\u043B\u044C| \u043A\u04E7|\u044D\u0437 | \u04E7\u0442|\u04E7 \u0432|\u0442\u043E |\u0435\u0442\u043E|\u043D\u0435\u0442|\u044B\u043B\u04E7| \u043A\u043E|\u0442\u0448\u04E7| \u043E\u0442| \u0438 |\u044B \u0441|\u0431\u044B |\u04E7 \u0431|\u0441\u0442\u0432|\u043A\u04E7\u0440| \u0432\u04E7|\u0448\u04E7\u043C|\u043A\u044B\u0442|\u0442\u0430 |\u043D\u0430 |\u0437 \u0432| \u0441\u0435| \u0434\u043E|\u0432\u043E\u043B|\u04E7\u0441 | \u0441\u044B|\u044B \u0430|\u043E\u043B\u0430|\u0440\u043C\u04E7|\u0430\u0441 |\u043E\u0437 | \u043E\u0437| \u0441\u0456|\u0430 \u0441|\u0442\u0432\u043E|\u0441 \u043E| \u0432\u044B|\u043B\u0456\u0441|\u04E7 \u043A|\u044B\u0442\u0448|\u04E7 \u0434|\u0438\u0441 |\u0456\u0441\u044C|\u04E7\u0442\u043D|\u0430\u0441\u044C| \u043E\u043B| \u043D\u0430|\u0430\u0446\u0438| \u044D\u0442|\u0430 \u0432|\u0437\u043B\u04E7|\u0441\u0435\u0442| \u0432\u043E| \u0447\u0443|\u043B\u0430\u0441|\u043B\u0430\u043D|\u043C\u04E7 |\u0442\u044B\u0441|\u0440\u0442\u044B|\u04E7\u0440\u0442|\u044B \u043F|\u04E7\u0442\u043B|\u043E \u0441|\u044D\u0442\u0430|\u0434\u0437 |\u043A\u04E7\u0442|\u04E7\u0434\u043D|\u0432\u043D\u044B| \u043C\u044B|\u043D \u043D|\u0443\u0434\u0436| \u0443\u0434|\u0432\u044B\u043B|\u04E7 \u043C|\u0440\u0442\u0456|\u043E\u0440\u0439|\u0438\u0441\u044C| \u0441\u043E|\u0432\u043E\u044D|\u044B\u0434\u04E7|\u0439 \u043E|\u043A\u043E\u043B| \u0433\u043E|\u0441 \u0441|\u0441\u0441\u0438|\u0441\u044B\u043B|\u044B\u0441\u043B|\u0439\u044B\u043D|\u043A\u0438\u043D|\u043E\u043B\u04E7|\u0442\u04E7\u043D| \u0441\u044C|\u0430\u043D\u0430|\u04E7\u0440 |\u0446\u0438\u044F|\u0430 \u0434|\u04E7\u043C\u04E7| \u0432\u0438|\u0437 \u043A| \u044D\u0437|\u044B \u0431|\u0442\u04E7\u0433|\u04E7\u0442 |\u043C\u04E7\u0434|\u0435\u0441\u0442|\u043E\u0441\u0442|\u04E7\u043D\u044B|\u0442\u0438\u0440|\u043E\u0442\u0438|\u0443\u043A\u04E7|\u0447\u0443\u043A|\u043D \u043F|\u043E\u043D\u0434|\u043F\u043E\u043D|\u0441\u043B\u04E7|\u043A\u0435\u0440| \u043A\u0435| \u043E\u0431|\u0441\u0438\u0441|\u0441\u0443\u0434|\u0430 \u043D|\u0434\u043E\u0440|\u043A\u043E\u043D|\u043D\u0435\u043A|\u043D \u0431|\u043B\u04E7\u0442|\u0441 \u0432|\u0442\u0456 |\u044C\u04E7\u0440|\u0442\u0440\u0430| \u0441\u0442|\u043D\u0430\u043B|\u043E\u043D\u0430|\u043D\u0430\u0446|\u043D \u043A|\u043A\u04E7\u0434|\u04E7\u0433 |\u0441\u043A\u04E7|\u0442\u044C |\u0435\u0442\u04E7|\u0434\u04E7\u0441|\u0431\u044B\u0442|\u0440\u043D\u044B|\u04E7 \u043D|\u0442\u0441\u04E7|\u0440\u0440\u0435|\u0430 \u0431|\u043D\u0434\u0430|\u0441 \u0434|\u0430\u0441\u0441|\u044B \u043A|\u0430\u0441\u043B| \u043B\u043E|\u044C\u043D\u044B|\u0441\u044C\u043D|\u044B \u043C|\u0435\u043A\u0438|\u044B \u0434| \u043C\u04E7|\u044C \u043C|\u044B \u043D|\u044B\u0442\u04E7| \u043C\u0435|\u0440\u0439\u04E7|\u0438\u0430\u043B|\u0439 \u0434|\u0438\u0442\u04E7|\u0430 \u043A|\u04E7\u0441\u044C|\u043C\u04E7\u0441|\u043E\u0432\u043D|\u0437\u044B\u043D|\u0430 \u043F|\u043E\u0442\u0441| \u043B\u0438|\u043E\u043B\u044F|\u04E7 \u0430|\u043E\u0441\u0443|\u04E7\u044F |\u043D\u04E7\u044F|\u0435\u0437\u043B|\u0440\u0435\u0437|\u043C\u0435\u0434|\u0441 \u043C| \u0441\u044D|\u044C \u043A|\u0440\u0439\u044B|\u0430\u043A\u043E|\u0437\u0430\u043A| \u0437\u0430|\u044C\u044B\u043D|\u043D\u043D\u0451|\u043C\u04E7\u043B|\u0443\u043C\u04E7| \u0443\u043C|\u044B \u0443|\u043D \u0432|\u043C \u0434|\u043D \u0441| \u0434\u0437|\u043D \u043E|\u0440\u0430\u043D|\u0441\u0442\u0440|\u043E\u0437\u044C|\u043F\u043E\u0437|\u0437 \u043F|\u043E \u0434|\u0446\u0438\u0430|\u043E\u0446\u0438|\u0441\u043E\u0446|\u0438\u043E\u043D|\u0430 \u043C|\u0435\u0441\u043A|\u0447\u0435\u0441|\u043D\u04E7 |\u0437 \u0434|\u0442\u0441\u044C|\u0431\u04E7\u0440| \u0431\u04E7| \u043E\u0432|\u0432\u0435\u0441|\u043A\u044B\u0434|\u04E7 \u0441|\u0432\u043E\u044B|\u043A\u043E\u0434|\u0442\u043A\u043E|\u04E7\u0442\u043A|\u043E\u043B\u044C|\u0434\u0431\u044B|\u0435\u0434\u0431|\u0441\u044C\u044B|\u0447\u044B\u043D|\u0442\u0447\u044B|\u04E7\u0442\u0447|\u0442\u043B\u0430|\u043C\u04E7\u043D|\u0441\u043B\u0430|\u0439\u04E7\u0437| \u0439\u04E7|\u0442 \u0432|\u044B \u0438|\u0435\u0437 |\u043E \u0432|\u043E\u043D\u044B|\u0439\u04E7 |\u0430\u043D\u043D|\u04E7\u043B\u044C| \u043F\u044B|\u0430\u043D |\u043D\u04E7\u0441|\u043D\u0438\u0442| \u0441\u0443|\u043C \u0441",bel:" \u043F\u0440|\u043F\u0440\u0430| \u0456 |\u0430\u0432\u0430|\u043D\u0430 |\u0440\u0430\u0432| \u043D\u0430| \u043F\u0430|\u043D\u044B |\u0432\u0430 |\u0430\u0431\u043E|\u0446\u044C | \u0430\u0431|\u0430\u0435 | \u043C\u0430|\u0430\u0432\u0435|\u0430\u043D\u043D|\u0430\u0446\u044B|\u0441\u0432\u0430| \u0441\u0432|\u0435 \u043F|\u043B\u044C\u043D| \u0447\u0430|\u043D\u0435 |\u043D\u043D\u044F|\u0430\u043B\u0430|\u0430 \u043D|\u0430\u0439 |\u043B\u0430\u0432|\u0447\u0430\u043B| \u043A\u043E| \u0430\u0434| \u043D\u0435|\u0433\u0430 |\u043E\u0436\u043D|\u043A\u043E\u0436|\u0432\u0435\u043A|\u043D\u044F | \u044F\u043A|\u0436\u043D\u044B|\u044B \u0447|\u043C\u0430\u0435|\u0430 \u043F|\u0430\u0433\u0430|\u0431\u043E |\u0435\u043A |\u0430 \u0430|\u0446\u0430 |\u0446\u0446\u0430| \u045E | \u0437\u0430|\u044B\u0445 |\u043F\u0430\u0432|\u0430 \u0441|\u0433\u043E |\u0432\u0456\u043D|\u0434\u043D\u0430|\u0431\u043E\u0434|\u043C\u0456 |\u0432\u0430\u0431|\u0432\u0430\u043D|\u0430\u043C | \u0432\u044B| \u0441\u0430| \u0434\u0430|\u0441\u0442\u0430|\u0430\u0432\u0456|\u043D\u043D\u0435|\u0430\u0441\u0446|\u043D\u0430\u0439|\u0446\u044B\u044F|\u043D\u0430\u0433|\u0430\u0440\u0430|\u0456 \u043D|\u043A \u043C|\u044F\u0433\u043E| \u044F\u0433|\u044C\u043D\u0430|\u043F\u0440\u044B|\u0430\u0446\u044C|\u0456 \u043F|\u043E\u0434\u043D|\u0441\u0442\u0432|\u0430\u043C\u0430|\u043D\u044B\u0445| \u0431\u044B|\u0442\u0432\u0430|\u0434\u0437\u0435|\u0430\u043B\u044C| \u0440\u0430|\u043D\u0456 |\u0456 \u0441|\u0456 \u0430|\u044B\u0446\u044C|\u0430 \u0431|\u0435\u043D\u043D|\u043B\u0435\u043D|\u0446\u0456 |\u043E\u045E\u043D|\u044B\u043C |\u0440\u0430\u0446|\u0456\u043D\u043D|\u0456\u0445 | \u0430\u0441| \u0442\u0430|\u0442\u043E |\u043D\u0430\u0441|\u044F\u043A\u0456| \u0434\u0437|\u0447\u044B\u043D|\u043E\u043B\u044C|\u0456 \u0434|\u0430\u0432\u043E|\u0430\u0434 | \u043D\u0456|\u0441\u0446\u0456|\u044B\u043C\u0456|\u043D\u044B\u043C|\u0431\u044B\u0446|\u044F \u043F|\u044C\u043D\u044B|\u044B\u044F |\u0430\u0440\u043E|\u0430\u043D\u0430|\u0456\u043D\u0430|\u0456 \u0456|\u0440\u0430\u0434| \u0433\u0440|\u043B\u044F |\u045E\u043B\u0435|\u043E \u043F|\u0430 \u045E|\u0440\u044B\u043C|\u043F\u0430\u0434|\u044B\u0456 | \u0456\u043D|\u0430\u043C\u0456|\u0434\u0437\u044F|\u0440\u0430\u043C|\u0446\u044B\u0456|\u0430\u0431\u0430|\u0430 \u0456|\u0434\u0443 |\u0436\u043D\u0430|\u045E\u043D\u0430|\u043D\u0430\u043B|\u043D\u0430\u0446|\u0440\u044B |\u044D\u0442\u0430|\u0433\u044D\u0442| \u0433\u044D|\u043D\u0435\u043D|\u0434\u0430 |\u0430\u0445 |\u0433\u0440\u0430|\u043A\u0430\u0446|\u0443\u043A\u0430|\u0430 \u0437|\u043A\u0456 |\u0430\u0434\u0441|\u045E \u0456|\u043D\u0441\u0442|\u044D\u043D\u043D|\u044F \u0430|\u043D\u043D\u0456|\u043E\u0434\u0443|\u0430 \u0440|\u043D\u043D\u0430|\u0445\u043E\u0434|\u043D\u0430\u043D|\u043F\u0435\u0440|\u0445 \u043F| \u0443 |\u0430\u0434\u0437|\u0456 \u0440|\u043C\u0430\u0434|\u043C \u043F|\u0435 \u043C|\u0430\u0434\u0443|\u0434\u0441\u0442|\u0434\u043B\u044F| \u0434\u043B|\u043E\u045E |\u043D\u0430\u0435|\u0456 \u043C|\u0430\u043A\u043E| \u043A\u0430|\u044B \u045E|\u0431\u0430\u0440|\u0435 \u0430|\u0430\u0446\u0446|\u0443\u044E |\u044B\u0446\u0446|\u0441\u0430\u043C|\u044F\u045E\u043B|\u0430\u043B\u0435|\u0440\u043E\u0434|\u0440\u0430\u0431| \u043F\u0435|\u0448\u0442\u043E| \u045E\u0441|\u0430\u0434\u043D| \u0441\u0443|\u0440\u043E\u045E| \u0440\u043E|\u0434\u0443\u043A|\u043B\u044E\u0431|\u044C \u0441| \u0448\u043B|\u0440\u0430\u0437|\u043D\u0430\u0432|\u0437\u043D\u0430|\u0432\u043E\u043B|\u0443\u0434\u0437|\u0430\u0434\u0430|\u0436\u044B\u0446|\u0447\u043D\u0430|\u0432\u0435 |\u0430 \u0442|\u0430\u0441\u043D|\u0441\u0430\u0446|\u0435\u0440\u0430| \u0440\u044D|\u044F\u043A\u043E|\u043A\u043B\u0430|\u0430\u043D\u044B| \u0448\u0442|\u044C \u0443|\u0430\u044E\u0446|\u043D\u0430\u0440| \u0443\u0441|\u0441\u043E\u0431|\u0430\u0441\u043E|\u043F\u0430\u043C|\u044F \u045E|\u0430\u0432\u044F|\u0447\u044D\u043D|\u0432\u043E\u045E|\u0442\u0430\u043A|\u043D\u0443 |\u044E \u0430|\u044C \u043F|\u0437\u0430\u043A|\u043A\u0430\u0440|\u0435 \u0456|\u044C \u0430|\u0431\u0435\u0441|\u0456\u044F |\u043A\u0456\u044F|\u0445 \u0456|\u0437\u0430\u0431|\u0430\u0441\u0430|\u0456\u043C |\u0436\u0430\u0432|\u0456 \u0437|\u043B\u0435\u0436|\u0442\u0430\u043D|\u0430\u0445\u043E|\u044F\u043B\u044C|\u044B\u044F\u043B|\u043E \u0441|\u044F\u043D\u0430|\u043A\u0430\u043D|\u0430\u043A\u0430|\u0456\u043D\u0448|\u0430\u043B\u0456|\u0432\u044B | \u043C\u043E|\u043D\u0430\u0445|\u044F \u044F|\u043C \u043D|\u043E\u0433\u0430| \u0431\u0435|\u0439 \u0434|\u043E \u0430| \u0441\u0442|\u0435\u043D\u044B|\u0456 \u045E|\u0430 \u0434|\u0435\u0441\u043F|\u0448\u043B\u044E|\u0446\u0446\u044F|\u044B \u0456|\u044B\u0441\u0442|\u0440\u044B\u0441|\u043B\u044E\u0447|\u043A\u043B\u044E|\u0442\u0430\u0446|\u0443\u043B\u044C|\u044B\u043D\u0441|\u0430\u0447\u044B|\u0441\u043F\u0440| \u0441\u043F|\u0430\u045E |\u044B\u043C\u0430|\u0430\u0440\u044B|\u043A\u0430\u043C|\u0435 \u045E|\u0456 \u043A|\u043A\u043E\u043D",bul:" \u043D\u0430|\u043D\u0430 | \u043F\u0440|\u0442\u043E | \u0438 |\u0440\u0430\u0432|\u0434\u0430 | \u0434\u0430|\u043F\u0440\u0430|\u0441\u0442\u0432|\u0432\u0430 |\u0430 \u0441|\u0430 \u043F|\u0432\u043E |\u043D\u043E |\u0438\u0442\u0435|\u0442\u0430 |\u043E \u0438|\u0435\u043D\u0438| \u0437\u0430|\u043D\u0435 | \u043D\u0435| \u0432\u0441|\u0432\u0430\u043D|\u0430\u0432\u043E|\u0430 \u043D|\u043E\u0442\u043E|\u0435 \u043D|\u043E \u043D|\u0430 \u0438|\u043A\u0438 |\u0438\u0435 |\u0442\u0435 |\u043D\u0438 |\u0438\u043C\u0430| \u0438\u043C|\u043B\u0438 |\u0438\u043B\u0438|\u0438\u044F | \u043F\u043E|\u043E\u0432\u0435|\u0430\u043D\u0435|\u0447\u043E\u0432|\u043C\u0430 | \u0447\u043E|\u0438 \u0447|\u0430 \u0434|\u043D\u0438\u0435|\u0430\u043D\u0438|\u0438 \u0434|\u0435\u0441\u0442| \u0438\u043B|\u0432\u0435\u043A|\u0432\u0441\u0435| \u043E\u0431|\u0435\u043A |\u0435\u043A\u0438|\u0441\u0435\u043A|\u0430\u0432\u0430|\u0442\u0432\u043E|\u0441\u0432\u043E| \u0441\u0432|\u0432\u043E\u0442|\u0430 \u0432|\u0438 \u0441|\u043E\u0441\u0442| \u0440\u0430|\u043E\u0432\u0430|\u0430 \u043E|\u0435 \u0438|\u0432\u0430\u0442|\u0438 \u043D|\u0435 \u043F|\u043A \u0438|\u0430 \u0431| \u0432 |\u0438 \u043F|\u043B\u043D\u043E|\u043E \u0434| \u0441\u0435| \u0431\u044A|\u043F\u0440\u0438|\u0440\u0430\u0437|\u0435\u0442\u043E|\u044A\u0434\u0435|\u0431\u044A\u0434|\u0430\u0442\u0430| \u043A\u043E| \u0442\u0440| \u043E\u0441|\u0430\u0446\u0438| \u0441\u044A|\u0431\u043E\u0434|\u043E\u0431\u043E|\u0432\u043E\u0431|\u0430\u0442 |\u0437\u0430 |\u0442\u0435\u043B| \u0435 |\u043E \u0441|\u0434\u0435 |\u043E \u043F|\u0435\u043D |\u0438 \u0432| \u043E\u0442|\u0441\u0435 |\u043D\u0438\u044F|\u0440\u0430\u043D|\u0430\u043B\u043D| \u0434\u0435|\u0431\u0440\u0430|\u0435\u0433\u043E|\u043D\u0435\u0433| \u0438\u0437|\u043E\u0442 |\u044F\u0442\u0430|\u043A\u0430\u043A|\u043E\u0434\u0438|\u0435 \u0441|\u0438 \u0438|\u0434\u0435\u043D|\u043F\u0440\u0435|\u0431\u0432\u0430|\u044F\u0431\u0432|\u0440\u044F\u0431|\u0442\u0440\u044F|\u043D\u0438\u0442| \u043A\u0430|\u044F\u0432\u0430|\u043F\u0440\u043E|\u0441\u0442 |\u0430 \u0437|\u0433\u043E\u0432|\u0432\u0435\u043D|\u0442\u0432\u0435|\u043E \u043E|\u0430 \u0440|\u0430\u043A\u0432|\u043E \u0432|\u0438 \u0437|\u0440\u0435\u0434|\u043D\u043E\u0441|\u0438\u044F\u0442|\u0435 \u0434|\u0449\u0435\u0441|\u043D\u043E\u0432| \u043D\u0438|\u0446\u0438\u044F| \u0434\u043E|\u0439\u0441\u0442|\u043E \u0442|\u0435 \u0442|\u0440\u0436\u0430|\u044A\u0440\u0436|\u0434\u044A\u0440|\u0435\u043D\u043E|\u043F\u043E\u043B| \u0441 |\u043E\u0431\u0440|\u0442\u0432\u0430|\u043D\u043E\u0442|\u0440\u0435\u0441|\u0435\u0439\u0441|\u0438 \u043E|\u0435 \u0432|\u043A\u043E\u0439|\u043E\u0431\u0449|\u043B\u0435\u043D|\u043E\u043D\u0430|\u043D\u0430\u0446|\u0438\u0447\u0435|\u0435\u0437 |\u0431\u0435\u0437| \u0431\u0435|\u0435\u0436\u0434|\u0443\u0432\u0430|\u0432\u0438\u0442|\u0440\u0438 |\u0437\u0430\u043A|\u0438 \u043A| \u043B\u0438|\u0430 \u0435|\u043F\u043E\u0434|\u0435\u043B\u0438|\u043D\u0438\u043A|\u0441\u0438 |\u0435 \u043E|\u0430 \u0442|\u0438 \u0440|\u0442 \u0441|\u043A\u0430 |\u043E\u0435\u0442|\u0435\u043B\u043D|\u043D\u0435\u043D|\u043E\u0439 |\u0433\u0440\u0430|\u0436\u0435\u043D|\u0434\u0440\u0443| \u0440\u0435|\u0430 \u043A|\u0441\u043D\u043E|\u043E\u0441\u043D|\u043B\u0438\u0447|\u0437\u0438 | \u0442\u0430|\u0441\u0430 |\u043D\u0441\u0442|\u0430\u0432\u043D|\u0447\u043A\u0438|\u0438\u0447\u043A|\u0441\u0438\u0447|\u0432\u0441\u0438|\u043B\u044E\u0447|\u043A\u043B\u044E|\u0434\u043D\u043E| \u043C\u043E|\u0435\u043C\u0435|\u0442\u044A\u043F|\u0430 \u0443|\u0438\u0437\u0432|\u0442\u0432\u0438|\u0434\u0435\u0439|\u044F \u043D|\u043A\u0440\u0438|\u0430\u0442\u043E|\u043E \u0440|\u0439 \u043D|\u0438\u043A\u043E|\u0438\u0447\u043D|\u0436\u0430\u0432| \u0434\u044A| \u0442\u043E|\u0431\u0449\u0435| \u0441\u043E|\u043B\u0438\u0442|\u0442 \u043D| \u0441\u0438|\u0442 \u0438|\u0432\u043D\u0438|\u043E\u0434\u043D|\u0436\u0434\u0430|\u0437\u043E\u0432|\u0430\u0437\u043E|\u0443\u0447\u0430| \u0433\u0440|\u043A\u043E\u0435|\u0441\u0442\u044A|\u0432\u043E\u043B|\u043B\u043D\u0438|\u0441\u0440\u0435| \u0441\u0440|\u043A\u0432\u0430|\u043A\u043E\u043D|\u0442\u043D\u043E|\u0430\u043A\u0430|\u0438 \u0443|\u043A\u043E |\u0433\u0430\u043D|\u043E\u0434\u0430|\u0447\u0435\u043D|\u043B\u0441\u0442|\u0435\u043B\u0441|\u0441\u0442\u0440| \u043A\u044A|\u0441\u0442\u0430|\u0440\u043E\u0434|\u043D\u0430\u0440|\u0438 \u043C|\u0438\u0430\u043B|\u043D\u0430\u043B|\u0440\u0443\u0433| \u0434\u0440|\u0447\u0435\u0441|\u0434\u0438 | \u0441\u0430| \u0442\u0435|\u0441\u0442\u043E|\u0434\u043E\u0441|\u0440\u0430\u0436|\u0440\u0435\u0437|\u0447\u0440\u0435|\u0433\u0430\u0442|\u0435\u043E\u0431|\u0430 \u043C|\u043E \u0435|\u0438\u043D\u0435|\u0430\u0441\u0442|\u043E\u0432\u043E|\u0447\u043D\u043E|\u0430\u0432\u0435|\u043C\u0443 | \u043C\u0443|\u0430\u043D\u043E|\u0438\u0442\u0430|\u0438\u043C\u0438|\u0430\u043A\u043E|\u043D\u0430\u043A|\u043B\u0430\u0433|\u043E\u0432\u0438|\u0430\u043D ",kaz:"\u043D\u0435 | \u049B\u04B1|\u0435\u043D |\u04B1\u049B\u044B| \u0431\u0430| \u049B\u0430|\u049B\u04B1\u049B|\u044B\u049B |\u0493\u0430 | \u0436\u04D9|\u04D9\u043D\u0435|\u0436\u04D9\u043D| \u043D\u0435| \u0431\u043E|\u0434\u0435 |\u0434\u0430\u043C|\u0430\u0434\u0430|\u0430 \u049B|\u0442\u0430\u0440|\u044B\u043D\u0430| \u0430\u0434|\u044B\u043B\u044B| \u04D9\u0440|\u044B\u04A3 |\u0430\u043D |\u0456\u043D |\u049B\u044B\u043B|\u0430\u0440 |\u0435\u043C\u0435|\u043D\u0430 |\u0440 \u0430|\u043B\u044B\u049B|\u0443\u0493\u0430|\u0430\u043B\u0430|\u044B\u049B\u0442| \u04E9\u0437|\u043C\u0435\u0441|\u04D9\u0440 | \u0436\u0430|\u043C\u0435\u043D|\u044B\u0493\u044B|\u043B\u044B | \u0434\u0435|\u049B\u0442\u0430|\u043D\u044B\u04A3|\u043D \u049B|\u0493\u0430\u043D|\u0456\u043D\u0435|\u0431\u0430\u0441|\u0430\u0440\u044B| \u043C\u0435| \u049B\u043E|\u0435\u043A\u0435|\u044B\u043D |\u0434\u0430 |\u0435 \u049B|\u0434\u044B |\u0430\u0441\u044B|\u0441\u0435 |\u0435\u0441\u0435|\u0430\u043C |\u0431\u043E\u043B|\u0430\u043D\u0434|\u043D\u0435\u043C| \u0431\u0456|\u0430\u0440\u0430|\u044B \u0431|\u0441\u0442\u0430|\u0442\u0430\u043D|\u043D\u0434\u044B|\u043D \u0431|\u0456\u04A3 |\u0435 \u0431|\u0456\u043B\u0456|\u0442\u0438\u0456| \u0442\u0438|\u0431\u0430\u0440|\u0493\u044B |\u043D\u0434\u0435|\u0435\u0442\u0442|\u0438\u0456\u0441|\u049B\u044B\u0493|\u0456\u0441 |\u043B\u0430\u0440|\u0433\u0435 |\u044B \u0442|\u0456\u043D\u0434|\u0456\u043A |\u0431\u0456\u0440| \u0431\u0435| \u043A\u0435|\u0430\u043B\u0443|\u0435 \u0430|\u0430\u043B\u044B|\u043B\u0443\u044B|\u0430 \u0436|\u0435\u0440\u0456|\u043E\u043B\u044B| \u0442\u0435|\u049B\u044B\u049B|\u043D \u043A| \u0442\u0430|\u043D \u0436|\u0493\u044B\u043D|\u0442\u0442\u0456|\u0456\u043D\u0456|\u0442\u044B\u043D| \u0435\u0440|\u043D\u0434\u0430|\u0456\u043C | \u0441\u0430|\u0435 \u0436|\u0430\u0442\u044B| \u0430\u0440|\u0440\u0493\u0430|\u0435\u0442\u0456|\u0430\u043D\u0430|\u044B \u04D9|\u0443\u044B\u043D|\u043B\u0493\u0430|\u04E9\u0437\u0456|\u043E\u0441\u0442|\u0435\u0433\u0456|\u0442\u0456\u043A|\u049B\u0430 |\u0441\u049B\u0430|\u0440\u044B\u043D|\u043A\u0456\u043D|\u043B\u0443\u0493|\u04A3 \u049B|\u043D\u0456\u04A3|\u0443\u044B |\u0431\u043E\u0441|\u0430\u0441\u049B|\u049B\u0430\u0440|\u0434\u044B\u049B|\u043D\u0430\u043D|\u043C\u044B\u0441|\u043C\u043D\u044B|\u0430\u043C\u043D|\u044B \u043C|\u0430\u0439\u0434|\u043A\u0435 | \u0436\u0435|\u0437\u0456\u043D|\u0440\u0434\u0435|\u0440\u0456\u043D|\u0435 \u0442|\u0433\u0435\u043D|\u044B\u043F |\u0440\u044B |\u0442\u0456 |\u0441\u044B\u043D|\u049B\u0430\u043C|\u0434\u0435\u043D|\u0456 \u0431|\u0433\u0456\u0437|\u0440\u0430\u043B|\u0435 \u04E9|\u043B\u0430\u043D|\u0441\u044B |\u0430\u043C\u0430|\u0442\u0442\u0430|\u0442\u044B\u049B|\u0431\u0435\u0440|\u0434\u0456 |\u0431\u0456\u043B|\u0440\u043A\u0456|\u04E9\u0437 |\u0437\u0434\u0435|\u043A\u0435\u0442|\u049B\u043E\u0440|\u0434\u0430\u0439|\u0443\u0433\u0435|\u044B \u0435|\u044B\u043D\u0434|\u043D\u0435\u0433|\u043E\u043D\u044B|\u0435\u0439 |\u043C\u0435\u0442|\u0430\u043D\u044B|\u0430 \u0442|\u0436\u0430\u0441|\u0430\u0443\u044B|\u043B\u0433\u0435|\u0430\u0441\u0430|\u0435\u0433\u0435|\u0434\u0430\u0440|\u0440\u0443 |\u0430\u0443 |\u0435\u0440\u043A|\u044B \u0436|\u0440\u044B\u043B| \u0442\u043E|\u043D \u043D|\u0435 \u043D|\u0442\u0456\u043D|\u0456\u0440 |\u0441\u0456\u0437|\u0442\u0435\u0440|\u043B\u043C\u0430|\u0456 \u0442|\u043A\u0456\u043C| \u0430\u043B|\u0440 \u043C|\u043B\u0456\u043A| \u043C\u04AF|\u0435 \u043C|\u0442\u04AF\u0440| \u0442\u04AF|\u043A\u0435\u043B|\u043B\u044B\u043F|\u0435\u04A3 |\u0442\u0435\u04A3|\u0440\u043B\u044B|\u043B\u0456\u043C|\u0440\u0434\u044B|\u0430\u0440\u0434|\u0430\u0442\u0442|\u0441 \u0431|\u044B\u0440\u044B|\u0441\u044B\u0437|\u044B\u0441 |\u0435\u043B\u0433|\u0434\u0430\u043B|\u0439\u0434\u0430|\u043E\u0440\u0493|\u0440\u049B\u044B|\u0430\u0440\u049B| \u0436\u04AF|\u0442\u0430\u043B|\u044B\u043B\u043C|\u0430 \u0431|\u0456\u0433\u0456|\u043B\u0434\u0435|\u0456\u0437 |\u049B\u0442\u044B| \u0435\u0448|\u0434\u0435\u0439|\u0430\u0439 |\u0436\u0430\u0493|\u043A\u0442\u0456|\u0456\u043A\u0442|\u0433\u0456\u043D| \u04D9\u043B|\u0442\u0442\u044B|\u04B1\u043B\u0442| \u04B1\u043B|\u0435 \u0434|\u044B\u043D\u044B|\u043B\u0456\u043D|\u0440 \u0431|\u0435\u043B\u0435|\u043A\u04B1\u049B| \u043A\u04B1|\u0430\u043C\u0434|\u043C \u0431| \u0435\u0442|\u043E\u0493\u0430|\u049B\u04B1\u0440| \u043A\u04E9|\u0430\u0493\u0430|\u0442\u043E\u043B|\u0448\u0456\u043D|\u0430\u0439\u044B| \u049B\u044B|\u049B\u0430\u043B|\u0436\u0435\u043A|\u0456 \u043D|\u0435\u0441 |\u0430\u0493\u044B|\u0435 \u043E|\u0435\u043B\u0456| \u0435\u043B|\u043D \u0435|\u0437\u0456 |\u0448\u043A\u0456|\u0435\u0448\u043A|\u043E\u043B\u0443|\u0446\u0438\u044F|\u043C\u0430\u0441|\u0493\u0434\u0430|\u0430\u0493\u0434|\u043B\u0442\u0442|\u0456\u043C\u0434|\u043D\u044B\u043C| \u0434\u0430|\u0430 \u0434|\u04D9\u0441\u0456|\u0441 \u04D9|\u049B\u0430\u0442|\u0456\u0440\u0456| \u0441\u043E|\u04A3 \u0431|\u0430\u0437\u0430|\u043C\u0434\u0430|\u0430\u0439\u043B| \u0430\u0441|\u0493\u0430\u043C|\u049B\u043E\u0493"},Arabic:{arb:" \u0627\u0644|\u064A\u0629 |\u0641\u064A | \u0641\u064A|\u0627\u0644\u062D| \u0623\u0648|\u0623\u0648 | \u0648\u0627|\u0648\u0627\u0644|\u062D\u0642 |\u0629 \u0627|\u0644\u062D\u0642|\u0627\u0644\u062A|\u0643\u0644 |\u0627\u0644\u0645|\u0644\u0643\u0644| \u0644\u0643|\u0644\u0649 |\u0642 \u0641|\u062A\u0647 |\u0648 \u0627|\u0629 \u0648|\u0634\u062E\u0635|\u0629 \u0644|\u0627\u062A |\u0627\u0644\u0623|\u064A \u0623|\u0648\u0646 | \u0634\u062E|\u0645 \u0627|\u0623\u064A | \u0623\u064A|\u0627\u0646 |\u0623\u0646 |\u0645\u0629 |\u064A \u0627|\u0627\u0644\u0627|\u0644\u0627 |\u0647\u0627 |\u0627\u0621 | \u0623\u0646| \u0639\u0644|\u062E\u0635 |\u0646 \u0627| \u0644\u0644|\u062F \u0627|\u0645\u0646 |\u0641\u0631\u062F|\u0645\u0627 |\u0627\u0644\u0639|\u062A \u0627|\u062D\u0631\u064A|\u0639\u0644\u0649|\u0644 \u0641|\u0631\u062F |\u0644 \u0634| \u0644\u0627|\u0631\u064A\u0629| \u0625\u0644|\u0629 \u0623|\u0627 \u0627|\u0646 \u064A| \u0648\u0644|\u0627 \u0644|\u0627 \u064A| \u0641\u0631| \u0645\u0646|\u0629 \u0645|\u0627\u0644\u0642|\u062C\u062A\u0645|\u0646 \u0623|\u0642 \u0627|\u0627\u0644\u0625| \u062D\u0631|\u0644\u0647 |\u0647 \u0644|\u0627\u064A\u0629|\u0644\u0643 |\u0647 \u0627| \u062F\u0648|\u062F\u0629 |\u0627\u064B |\u064A\u0646 |\u0647 \u0648|\u0644\u0629 |\u064A \u062D| \u0639\u0646|\u0645\u0627\u0639|\u064A \u062A|\u0630\u0627 | \u062D\u0642|\u0642\u0648\u0642|\u062D\u0642\u0648|\u060C \u0648|\u0646 \u062A|\u0645\u0639 |\u0635 \u0627|\u0627\u0645 |\u062F \u0623| \u0643\u0627|\u0647\u0630\u0627|\u0627\u0644\u0648| \u0625\u0646|\u0645\u0644 |\u0627\u0645\u0629|\u0639 \u0627|\u0625\u0644\u0649|\u0629 \u0639|\u0645\u0627\u064A|\u062D\u0645\u0627|\u0646 \u0648|\u0644\u062A\u0639| \u0648\u064A|\u064A\u0631 |\u0646\u0648\u0646|\u064A \u0648|\u0627\u0633\u064A|\u0627\u0644\u062C| \u0647\u0630|\u0646\u0633\u0627|\u0648\u0642 |\u062A\u0631\u0627|\u0639\u064A\u0629|\u0647 \u0623| \u0644\u0647|\u0633\u064A\u0629| \u064A\u062C| \u0628\u0627|\u062F\u0648\u0644|\u0627\u0646\u0648|\u0642\u0627\u0646|\u0644\u0642\u0627|\u0629 \u0628|\u0629 \u062A|\u062A\u0645\u0627|\u0627\u0644\u062F|\u064A\u0627\u062A|\u0639 \u0628|\u0633\u0627\u0646|\u0625\u0646\u0633|\u0647\u0645 |\u0639\u0644\u064A| \u0645\u062A|\u0644\u0645\u062C|\u0630\u0644\u0643|\u0639\u0645\u0644|\u0644\u0623\u0633|\u0648\u0632 |\u062C\u0648\u0632|\u064A\u062C\u0648|\u0628\u0627\u0644|\u063A\u064A\u0631|\u0643 \u0627|\u0643\u0627\u0646|\u0633\u0627\u0633|\u0623\u0633\u0627|\u062F\u0645 |\u0644\u0627\u062F|\u0627\u0639\u064A|\u0627\u0644\u0631|\u062A\u0645\u064A|\u062F\u0648\u0646|\u062A\u0645\u062A|\u0644\u062A\u0645| \u064A\u0639|\u0644\u064A\u0647|\u0633\u0627\u0648|\u0627\u062C\u062A|\u064A \u0645|\u0644\u0639\u0627|\u0644\u062C\u0645|\u062A\u0639\u0644|\u0631 \u0648|\u062A\u0645\u0639|\u0645\u062C\u062A| \u0645\u0639|\u064A\u0647 |\u0649 \u0623|\u0641\u064A\u0647|\u0649 \u0627| \u0643\u0644|\u0644\u0627\u062A|\u0645\u0644\u0627|\u0648\u062F |\u0627\u0646\u062A|\u0627\u0644\u0641|\u064A\u0647\u0627|\u064A \u0625|\u062A\u064A |\u0627\u0644\u0628|\u0644\u064A |\u0642\u062F\u0645|\u0627\u0644 |\u0627\u062F |\u0644 \u0627|\u064A\u0632 |\u064A\u064A\u0632|\u0645\u064A\u064A| \u062A\u0645|\u0644\u062D\u0631|\u062A\u0639 |\u0645\u062A\u0639|\u0627 \u0628|\u0639\u0627\u0645|\u0627 \u0648|\u0642 \u0648|\u0631\u0627\u0645|\u0644 \u0644|\u0644\u0627\u062C|\u0631\u0627 |\u0627\u0644\u0634| \u0648\u0625|\u064A\u0645 |\u0644\u064A\u0645|\u0634\u062A\u0631|\u0627 \u062D|\u0648\u0627\u062C|\u0644\u0632\u0648|\u0648\u0644 |\u0627 \u0641|\u0648\u0644\u0629|\u0644\u062D\u0645|\u0623\u0633\u0631| \u0630\u0644|\u0647 \u0641|\u0627\u062A\u0647|\u0645\u0633\u0627|\u0644\u0645\u0633| \u062A\u0639|\u0639\u0646 |\u0647 \u0639|\u0648\u0644\u0647|\u064A\u062A\u0647|\u0646 \u0644|\u0631\u0629 | \u0648\u0633|\u0627\u0629 |\u064A\u062F | \u062A\u062D| \u0645\u0633|\u064A \u064A|\u0644\u062A\u064A|\u0639\u0629 |\u0648\u0644\u064A|\u0644\u062F\u0648| \u0623\u0633| \u0648\u0641|\u0644 \u0648|\u0623\u064A\u0629|\u0646\u064A |\u0627\u0644\u0633|\u0644\u0627\u0646|\u0644\u0625\u0639|\u0629 \u0641|\u0631\u064A\u0627|\u0644 \u0625|\u0645 \u0628|\u0627\u0645\u0644|\u0643\u0631\u0627|\u062A\u0633\u0627|\u0645\u064A\u0639|\u062C\u0645\u064A| \u062C\u0645|\u0623\u0648\u0644|\u0628\u064A\u0629|\u0639\u064A\u0634|\u062A\u062D\u0642|\u0627\u062F\u0629|\u0633 \u0627| \u0645\u0645|\u0645\u0639\u064A|\u062C\u0645\u0627|\u0639\u0627\u062A|\u0627\u0639\u0627|\u0627\u0631\u0633|\u0645\u0627\u0631|\u0645\u0645\u0627|\u0645 \u0648|\u0631\u0627\u0643|\u0627\u0634\u062A|\u0627\u0644\u0637|\u0627\u062C |\u0632\u0648\u0627|\u0627\u0644\u0632| \u0648\u0645|\u062D\u062F\u0629|\u062A\u062D\u062F|\u0644\u0645\u062A|\u0645\u0645 |\u0644\u0623\u0645|\u062F\u0647 |\u0628\u0644\u0627| \u0628\u0644|\u0627\u0631 |\u064A\u0627\u0631|\u062A\u064A\u0627|\u062E\u062A\u064A|\u0627\u062E\u062A|\u0646 \u0645| \u0645\u0631",urd:"\u0648\u0631 | \u0627\u0648|\u0627\u0648\u0631|\u06A9\u06D2 | \u06A9\u06D2| \u06A9\u06CC| \u06A9\u0627|\u06CC\u06BA | \u062D\u0642|\u06A9\u06CC |\u06A9\u0627 | \u06A9\u0648|\u0626\u06D2 |\u06D2 \u06A9|\u06CC\u0627 |\u0633\u06D2 |\u06A9\u0648 |\u0634\u062E\u0635| \u0634\u062E|\u0646\u06D2 | \u0627\u0633| \u06C1\u06D2|\u0645\u06CC\u06BA|\u062D\u0642 | \u06C1\u0648| \u0645\u06CC|\u062E\u0635 |\u06D2 \u0627| \u062C\u0627|\u0627\u0633 | \u0633\u06D2| \u06CC\u0627|\u06C1\u0631 |\u06CC \u0627| \u06A9\u0631| \u06C1\u0631|\u06D2\u06D4 |\u0633\u06CC |\u06C1\u06CC\u06BA|\u0627 \u062D|\u0635 \u06A9|\u0648\u06BA |\u06D2 \u0645| \u0627\u0646|\u0631 \u0634|\u06D4 \u06C1|\u0627\u0626\u06D2|\u0632\u0627\u062F|\u0622\u0632\u0627| \u0622\u0632|\u0627\u0645 |\u0631 \u0627|\u0642 \u06C1|\u0627\u062F\u06CC|\u062C\u0627\u0626|\u06BA \u06A9|\u06C1\u06D2\u06D4|\u0645 \u06A9| \u06A9\u0633|\u0627 \u062C|\u06CC \u06A9|\u0633 \u06A9|\u06A9\u0633\u06CC| \u067E\u0631|\u06D2 \u06AF|\u06C1\u06D2 |\u0627\u0631 |\u062A \u06A9|\u062F\u06CC |\u067E\u0631 |\u0648 \u0627| \u062D\u0627| \u062C\u0648| \u06C1\u06CC|\u0627\u0646 |\u06CC \u062C|\u0631\u06CC | \u0646\u06C1| \u0645\u0639|\u062C\u0648 |\u0644 \u06A9|\u06CC \u062A|\u0646 \u06A9|\u06A9\u0631\u0646|\u0626\u06CC |\u0644 \u06C1|\u062A\u06CC |\u06C1\u0648 |\u06C1 \u0627| \u0627\u06CC|\u0635\u0644 |\u0627\u0635\u0644|\u062D\u0627\u0635|\u0631\u0646\u06D2|\u06CC \u0634|\u0646\u06C1 |\u06D4 \u0627|\u06BA\u06D4 |\u06CC\u06BA\u06D4|\u0631 \u06A9|\u0631 \u0645| \u0645\u0644|\u0648\u06C1 |\u0645\u0639\u0627|\u0631\u06D2 |\u06BA \u0627|\u0646\u06C1\u06CC|\u06D2 \u06C1|\u06D2 \u0628|\u0627\u06CC\u0633|\u06D2 \u0644| \u062A\u0639| \u06AF\u0627|\u06CC\u062A |\u06CC \u062D|\u0627 \u0627|\u06CC \u0645|\u0627\u067E\u0646| \u0627\u067E|\u06A9\u06CC\u0627|\u0645\u06CC |\u06CC \u0633| \u062C\u0633|\u06C1 \u06A9|\u0646\u06CC |\u0627\u0634\u0631|\u0639\u0627\u0634| \u062F\u0648|\u0644\u0626\u06D2| \u0644\u0626|\u0627\u0646\u06C1|\u0648\u0642 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0645\u0644 | \u0642\u0627|\u06A9\u06C1 | \u06AF\u06CC|\u0631 \u0628|\u06C1 \u0645| \u0648\u06C1| \u0628\u0646|\u06CC \u0628|\u0645\u0644\u06A9|\u062C\u0633 |\u0627\u06D4 |\u0631\u06CC\u0642|\u0631 \u0646|\u06D2 \u062C|\u0627\u062F |\u0627\u062A |\u06AF\u06CC |\u062F \u06A9|\u06D2 \u062D|\u062F\u0627\u0631|\u0631 \u06C1|\u06AF\u0627\u06D4|\u0642\u0648\u0645| \u0642\u0648|\u06D2\u060C |\u0627 \u0633|\u062F\u0648\u0633|\u0631 \u067E| \u0648 | \u0634\u0627|\u06CC \u0622|\u06BA \u0645|\u0642 \u062D| \u067E\u0648| \u0628\u0627|\u062E\u0644\u0627|\u0627\u0646\u06D2|\u06CC\u0645 |\u0644\u06CC\u0645|\u0648 \u062A|\u0648\u0646 | \u06A9\u06C1|\u06CC\u060C |\u06D4 \u06A9|\u0627 \u067E|\u0646 \u0627|\u0644\u06A9 |\u0639\u0644\u0627|\u0627 \u0645|\u0642 \u06A9|\u0627\u0626\u06CC|\u0648\u0633\u0631|\u06CC \u06C1|\u0648\u0626\u06CC|\u06CC\u0631 |\u0627 \u06C1|\u0639\u0644\u06CC|\u0648 \u06AF|\u0648\u0631\u06CC|\u062F\u06AF\u06CC|\u0646\u062F\u06AF|\u0648 \u06A9|\u06CC\u0633\u06D2| \u0645\u0646|\u0627\u0626\u062F|\u0631\u0627\u0626| \u0645\u0631|\u067E\u0648\u0631| \u0637\u0631|\u0648\u0645\u06CC|\u06D2 \u062E|\u0633\u0628 |\u0646\u0648\u0646|\u0627\u0646\u0648|\u0642\u0627\u0646| \u0633\u06A9|\u0648\u0627\u0645|\u06CC\u0646 | \u0631\u06A9|\u062A\u0639\u0644|\u0644\u0627\u0642|\u063A\u06CC\u0631|\u062F\u0627\u0646|\u060C \u0627| \u0628\u06CC| \u0645\u0633|\u06CC\u0648\u06BA|\u0646\u0627 | \u0628\u06BE| \u0628\u0631|\u0631\u062A\u06CC|\u0627\u062F\u0627|\u0627\u0645\u0644|\u06CC\u06C1 | \u06CC\u06C1|\u06C1 \u0648| \u0639\u0627|\u06CC \u067E| \u0628\u0686|\u0627\u0641 |\u0644\u0627\u0641| \u062E\u0644|\u06CC\u06D4 |\u06AF\u06CC\u06D4| \u062F\u06CC|\u06BE\u06CC |\u0628\u06BE\u06CC|\u062F\u06C1 |\u062C\u0627 |\u067E\u0646\u06CC|\u0642\u0648\u0627|\u0627\u0642\u0648|\u0631\u06A9\u06BE|\u06D2 \u06CC| \u0639\u0644|\u06A9\u0648\u0626|\u060C \u0645| \u0686\u0627|\u06D2 \u0633|\u0631 \u0639| \u067E\u06CC|\u0628\u0631\u0627|\u0631 \u0633|\u0631 \u062D|\u0633\u0627\u0646|\u0645 \u0627|\u06A9\u0627\u0645|\u0634\u0631\u062A| \u0631\u0627|\u0634\u0627\u0645|\u0645\u0646 |\u0632\u0646\u062F| \u0632\u0646|\u0628 \u06A9|\u062A \u0645|\u0627\u06C1 |\u0627\u0631\u06CC|\u0633 \u0645|\u0631 \u062C| \u0645\u062D|\u0648\u0631\u0627|\u06D2 \u067E|\u0637\u0631\u06CC|\u06C1\u0648\u06BA|\u0627\u0644 |\u06BA \u0633|\u06CC \u0646|\u06A9\u0631\u06D2| \u0645\u0642|\u062A \u0633|\u062A\u062D\u0641| \u062A\u062D|\u0648\u06D4 |\u06C1\u0648\u06D4|\u0628\u0646\u062F| \u0627\u0642|\u062F \u06C1| \u0627\u0645|\u0627\u0645\u06CC|\u0627\u0644\u0627|\u0644\u062A |\u0634\u0631\u06D2|\u06D2 \u0639|\u0627 \u06A9|\u0641\u0631\u06CC",pes:" \u0648 | \u062D\u0642| \u0628\u0627|\u0646\u062F |\u0631\u062F |\u062F\u0627\u0631| \u062F\u0627|\u06A9\u0647 |\u0647\u0631 | \u062F\u0631| \u06A9\u0647|\u062F\u0631 | \u0647\u0631|\u0631 \u06A9|\u062D\u0642 |\u062F \u0647|\u0627\u0632 |\u06CC\u062A | \u0627\u0632|\u06CC\u0627 |\u06A9\u0633 |\u0648\u062F |\u0627\u0631\u062F| \u06CC\u0627| \u06A9\u0633|\u0627\u06CC |\u062F \u0648| \u0628\u0631| \u062E\u0648|\u0642 \u062F|\u0628\u0627\u0634|\u0634\u062F |\u062F \u06A9|\u0627\u0631 |\u062F \u0628| \u0631\u0627|\u0647 \u0628|\u0627\u0646 |\u0622\u0632\u0627| \u0622\u0632|\u0631\u0627 |\u0627\u0634\u062F|\u06CC \u0648|\u0647 \u0627|\u06CC\u0646 |\u06CC\u062F |\u0632\u0627\u062F|\u0633 \u062D|\u062E\u0648\u062F|\u06CC \u0628| \u0627\u0633|\u062F\u0647 |\u062F\u06CC |\u0648\u0631 |\u0627\u06CC\u062F|\u0647 \u062F|\u0631\u06CC |\u0648 \u0627|\u062A\u0645\u0627|\u0627\u062A | \u0646\u0645|\u06CC \u06A9|\u0627\u062F\u06CC|\u0646\u0647 |\u0631\u0627\u06CC|\u062F \u0627| \u0622\u0646|\u0627\u0633\u062A|\u0631 \u0627|\u0631 \u0645| \u0627\u062C|\u0645\u0627\u06CC|\u0648\u0646 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0648 \u0645| \u0627\u0646|\u0627\u0646\u0647| \u0647\u0645|\u0648\u0642 |\u0627\u06CC\u062A| \u0634\u0648|\u06CC \u0627| \u0645\u0648| \u0628\u06CC|\u0628\u0627 | \u062A\u0627|\u0648\u0631\u062F|\u0627\u0646\u0648|\u0633\u062A |\u0648\u0627\u0646|\u0628\u0631\u0627|\u0627\u0645 |\u0634\u0648\u062F|\u0622\u0646 |\u062C\u062A\u0645|\u06CC \u06CC| \u06A9\u0646|\u0631 \u0628|\u06A9\u0646\u062F| \u0645\u0631|\u062A \u0645|\u0647\u0627\u06CC|\u062A \u0627| \u0645\u0633|\u06CC\u060C |\u0645\u0627\u0639|\u0627\u062C\u062A|\u062A\u0648\u0627|\u06CC\u06AF\u0631|\u0648 \u0628|\u062F\u0627\u0646|\u062A \u0648|\u0627 \u0645| \u0628\u062F|\u0639\u06CC |\u06A9\u0627\u0631| \u0645\u0646|\u0645\u0648\u0631| \u0645\u0642|\u06CC \u062F| \u0632\u0646|\u06CC \u0645|\u0646 \u0628|\u0631 \u062E|\u0627\u0647 |\u0627 \u0628|\u0627\u0631\u06CC|\u062F \u0622|\u0645\u0644 | \u0628\u0647|\u0627\u0639\u06CC|\u062F\u060C |\u062F\u06CC\u06AF|\u062A \u0628|\u0628\u0627\u06CC|\u0627\u06CC\u0646| \u0645\u06CC|\u0646 \u0648|\u0642 \u0645| \u0639\u0645| \u06A9\u0627|\u0646 \u0627|\u0648 \u0622| \u062D\u0645|\u0646\u0648\u0646|\u0647 \u0648|\u0648 \u062F|\u062F \u0634| \u0627\u06CC|\u0634\u0648\u0631|\u06A9\u0634\u0648| \u06A9\u0634|\u0644\u06CC |\u0646\u06CC |\u0647 \u0645|\u0628\u0639\u06CC|\u0631 \u0634|\u06CC\u0647 | \u0645\u0644|\u0645\u06CC\u062A|\u06CC \u0631|\u0631\u0646\u062F| \u0634\u0631|\u0645\u06CC |\u0648\u06CC |\u0633\u0627\u0648|\u0642\u0627\u0646| \u0642\u0627|\u0645\u0642\u0627|\u0627\u0648 | \u0627\u0648|\u062F \u0645|\u06AF\u06CC |\u0646\u0645\u06CC| \u0627\u062D| \u0645\u062D|\u0645\u06CC\u0646|\u0626\u06CC |\u0627\u062F\u0627| \u0622\u0645|\u062E\u0648\u0627|\u06AF\u0631\u062F| \u06AF\u0631|\u0645\u0646\u062F| \u0634\u062F|\u0627\u0626\u06CC| \u062F\u06CC|\u0632 \u062D|\u0647\u06CC\u0686| \u0647\u06CC|\u0627\u062F\u0647| \u0645\u062A|\u0646\u0645\u0627|\u062A \u06A9|\u0631\u0627\u0646| \u0628\u0645|\u0646 \u062D|\u0631 \u062A|\u062D\u0645\u0627|\u0627\u0631\u0646|\u0645\u0633\u0627|\u062F\u06AF\u06CC|\u0648\u0645\u06CC|\u0646 \u062A|\u0645\u0644\u0644|\u0628\u0631 |\u0647\u062F |\u0648\u0627\u0647|\u0628\u0647\u0631| \u0627\u0639|\u200C\u0647\u0627|\u0642 \u0648|\u060C \u0627|\u0639\u06CC\u062A|\u06CC\u062A\u0648|\u0627 \u0631|\u0646 \u0645| \u0639\u0642|\u0647\u0645\u0647|\u0627 \u0647|\u0632\u0634 |\u0648\u0632\u0634|\u0645\u0648\u0632|\u0622\u0645\u0648|\u0627\u0646\u062A|\u062A\u06CC |\u062C\u0627\u0645|\u0645\u0648\u0645|\u0639\u0645\u0648|\u062A\u062E\u0627| \u0641\u0631|\u0637\u0648\u0631|\u062F \u062F|\u0647 \u062D|\u0631\u062F\u0627|\u0627\u0648\u06CC|\u0646\u0648\u0627|\u0627\u0646\u06CC|\u0631\u0627\u0631| \u0645\u062C|\u06CC \u0646|\u062D\u062F\u06CC|\u0627\u062D\u062F|\u0646\u062F\u06AF|\u0632\u0646\u062F|\u0634\u062E\u0635| \u0634\u062E|\u200C\u0645\u0646|\u0647\u200C\u0645|\u0631\u0647\u200C|\u0647\u0631\u0647|\u0634\u062F\u0647|\u0639 \u0627|\u0648 \u0647|\u0627\u0633\u06CC|\u0647\u0654 |\u06CC\u062F\u0647|\u0639\u0642\u06CC|\u0627 \u0627|\u0645\u0647 | \u0628\u0634|\u0627\u062F |\u062F\u06CC\u0647|\u0627 \u062F|\u062F\u0648\u0627|\u06CC \u062D|\u0627\u0628\u0639|\u06CC \u062A|\u062E\u0627\u0628|\u0646\u062A\u062E|\u0631\u0648\u0631|\u0648 \u0631|\u0634\u0631\u0627| \u062E\u0627|\u0654\u0645\u06CC|\u0627\u0654\u0645|\u062A\u0627\u0654|\u0627\u064B |\u0627\u0645\u0644|\u0644\u0647 |\u062F \u0631|\u0627\u0633\u0627|\u062E\u0648\u0631|\u0628\u0644 |\u0627\u0628\u0644|\u0642\u0627\u0628|\u06CC\u06A9 |\u0633\u0627\u0646|\u0642\u0631\u0627|\u0627 \u0646|\u062E\u0635\u06CC| \u0627\u0645| \u0628\u0648|\u06CC\u0631 |\u0627\u0644\u0645|\u0628\u06CC\u0646|\u0627\u0647\u062F|\u062A\u0628\u0639| \u062A\u0628",zlm:" \u062F\u0627|\u0627\u0646 |\u062F\u0627\u0646| \u0628\u0631| \u0627\u0648|\u0646 \u0633|\u0631\u06A0 |\u062F\u0627\u0644| \u06A4\u0631|\u0644\u0647 |\u0643\u0646 | \u0643\u06A4|\u0646 \u0627|\u0646 \u0643|\u0646 \u062F|\u064A\u06A0 | \u064A\u06A0|\u06A4\u062F |\u062D\u0642 |\u0648\u0631\u06A0|\u062A\u064A\u0627|\u064A\u0627\u06A4|\u0627\u0631\u0627|\u0643\u06A4\u062F|\u0627\u0648\u0631|\u0631\u062D\u0642|\u0628\u0631\u062D|\u0627\u0644\u0647|\u0623\u0646 |\u0648\u0644\u064A| \u0627\u062A|\u0627\u062A\u0627|\u06A0\u0646 |\u062A\u0627\u0648|\u0627\u06A4 |\u0633\u062A\u064A|\u0644\u064A\u0647|\u0627\u0648 | \u0633\u062A|\u06A4 \u0627|\u064A\u0647 |\u0631\u0627 |\u0647 \u0628|\u0647 \u062F|\u0639\u062F\u0627| \u0639\u062F|\u0646 \u06A4|\u0646 \u0628|\u064A\u0646 | \u062A\u0631|\u0642 \u0643|\u0646 \u064A|\u064A\u0628\u0633|\u0628\u064A\u0628| \u062A\u064A| \u0633\u0648| \u0643\u0628| \u0633\u0627|\u0646 \u0645|\u0646 \u062A|\u0644\u0645 |\u0627\u0644\u0645|\u062F \u0633|\u06A0 \u0639| \u0645\u0646|\u0686\u0627\u0631|\u062F \u06A4|\u0631\u0646 |\u0633\u0627\u0645| \u0645\u0627|\u06BD \u0633|\u0646\u060C | \u0628\u0648| \u0627\u064A|\u0646\u062F\u0642| \u062D\u0642|\u06AC\u0627\u0631|\u0646\u06AC\u0627|\u0628\u0648\u0644|\u0633\u0628\u0627| \u0633\u0628|\u0627\u062A\u0648|\u0627 \u0633|\u0642\u0644\u0647| \u06A4\u0645| \u0645\u0645|\u0648\u0627\u0646|\u0633\u0686\u0627| \u0633\u0686| \u0643\u0633|\u0627 \u0628|\u0633\u0646 | \u0633\u0645|\u06A4\u0631\u0644|\u0627\u0648\u0646|\u0646\u06BD |\u062A\u0646 | \u0628\u0627|\u0647\u0646 |\u0633\u064A\u0627|\u0627 \u06A4|\u0627\u0631\u06A0|\u0628\u0627\u0631|\u06A4\u0627 |\u0628\u0633\u0646|\u0643\u0628\u064A|\u0627\u0645 |\u064A\u0646\u062F|\u064A \u062F|\u0627\u06AC\u064A|\u06A0 \u0628|\u0628\u0627\u06AC|\u064A \u0627|\u0645\u0627\u0646| \u0644\u0627| \u062F |\u062F\u0642\u0644|\u0647\u0646\u062F| \u0647\u0646|\u062A \u062F|\u0627\u062F\u064A|\u0648\u064A\u0646|\u064A\u0643\u0646| \u0646\u06AC|\u060C \u0643|\u0646\u0662 | \u06A4\u0648|\u0628\u06A0\u0633|\u0642\u0662 |\u0627\u062A |\u0627\u0648\u0644|\u0627\u0643\u0646|\u0627\u06BD | \u0633\u0633|\u0648\u0646 |\u0627\u062F | \u0643\u0648|\u0627\u064A\u0646|\u062F\u06A0\u0646| \u062F\u06A0|\u0627\u0626\u0646|\u062A\u0648 |\u062A\u064A |\u0646 \u0647|\u06AC\u064A |\u0633\u064A |\u0642 \u0645|\u0648\u06A0\u0646|\u062F\u0648\u06A0|\u0646\u062F\u0648|\u0644\u064A\u0646|\u0631\u0644\u064A|\u0646\u062A\u0648|\u06A4\u0648\u0646|\u0648\u0627\u062A|\u064A\u0627\u062F|\u062A\u064A\u0643|\u06A0\u0633\u0627|\u06A4\u0645\u0628|\u062A\u0631\u0645|\u0662 \u062F|\u062D\u0642\u0662|\u0648\u0627 |\u0644\u0648\u0627|\u0645\u0627\u0633|\u0648\u0642 |\u0647 \u0645|\u0644 \u062F| \u0645\u0644|\u0648\u0646\u062F| \u06A4\u06A0|\u0627\u060C |\u060C \u062A|\u0644\u0627\u0626|\u0627\u064A |\u0645\u06A4\u0648|\u064A\u0643 |\u064A \u0643|\u0631\u0627\u062A|\u0645\u0631\u0627| \u0628\u064A|\u0633\u0645\u0648|\u0648 \u0643|\u060C \u062F|\u0633\u0648\u0627|\u06A0 \u0645|\u06A0 \u0633|\u06A0\u0662 |\u06A4\u0631\u064A|\u064A\u0631\u064A|\u062F\u064A\u0631|\u0627 \u0627|\u0627\u0633\u0627|\u06A4\u0662 |\u062A\u0627 |\u0633\u0648\u0633|\u060C \u0633|\u062C\u0648\u0627|\u06A0 \u062A|\u0631\u0623\u0646| \u0627\u0646|\u0633\u0623\u0646|\u0631\u064A\u0643|\u064A\u0623\u0646|\u0631\u064A | \u062F\u0631|\u0627\u0645\u0631|\u0643\u0631\u062C| \u06A4\u0644|\u0627 \u062F|\u062C\u0631\u0646|\u0627\u062C\u0631|\u0627\u0631\u0643|\u0644\u0627\u062C|\u062F \u0643|\u0648\u0627\u0631|\u0628\u0631\u0633|\u0648\u0646\u062A|\u0645\u0646\u0648|\u0633\u0627\u0644|\u064A\u0646\u06A0|\u062F\u06A0\u0662|\u0646\u062F\u06A0| \u0645\u06A0|\u0627\u06A4\u0627|\u0633\u0633\u064A|\u0633\u0627\u0633|\u0646\u0646 |\u06A4\u0648\u0644|\u0627\u06AC\u0627| \u0628\u06A0| \u0633\u06A4|\u0645\u0628\u064A| \u0627\u06A4|\u06A0 \u0627|\u0627\u0631\u0623|\u06A4\u0631\u0627|\u064A \u0633|\u0628\u0633 | \u062F\u0644|\u0627 \u0645|\u0645\u0648\u0627|\u06A4\u0644\u0627|\u0645\u0644\u0627|\u06A4\u0631\u0643|\u0643\u0648\u0631|\u0648\u0628\u0648| \u0643\u0623|\u0648\u0643\u0646|\u0623\u0646\u06BD|\u0643\u0633\u0627|\u06A0\u06AC\u0648|\u0627\u062F\u06A4|\u0647\u0627\u062F|\u0631\u0647\u0627|\u062A\u0631\u0647|\u0643\u0648\u0645|\u062A\u0648\u0642|\u0645 \u0633|\u06A0 \u062F|\u062F\u064A | \u062F\u064A|\u0662 \u0633|\u0646\u062F\u064A|\u0627\u0633 |\u0627\u062F\u0627|\u0628\u0648\u0627| \u062F\u0628|\u06A0 \u06A4|\u06BD\u060C |\u0627\u06A4\u0662|\u0631\u062A\u0627|\u0627\u0644 |\u064A\u0627\u0644|\u0648\u0633\u064A| \u0643\u062A|\u0623\u0646\u060C|\u0646\u06A4\u0627|\u062A\u0646\u06A4| \u062A\u0646|\u0645 \u06A4|\u0631\u0633\u0627|\u0645\u0645\u06A4| \u0645\u0631|\u0646 \u062D| \u0643\u0645|\u0646\u0633\u064A|\u062C\u0623\u0646|\u0624\u064A |\u0644\u0624\u064A|\u0627\u0644\u0624|\u0644\u0627\u0644|\u0643\u06A4\u0631|\u0643\u062A |\u0631\u0643\u062A|\u0634\u0627\u0631|\u0645\u0634\u0627| \u0645\u0634|\u062C\u0627\u062F|\u0631\u06AC\u0627",skr:"\u062A\u06D2 |\u0627\u06BA |\u062F\u06CC |\u062F\u06D2 | \u06D4 |\u0648\u06BA | \u062A\u06D2| \u062F\u0627| \u06A9\u0648|\u06A9\u0648\u06BA| \u062D\u0642|\u062F\u0627 | \u062F\u06CC|\u06CC\u0627\u06BA| \u062F\u06D2|\u06CC\u06BA |\u06D2 \u0627|\u0634\u062E\u0635| \u0634\u062E|\u06C1\u0631 |\u06D2 \u06D4|\u0627\u0635\u0644| \u062D\u0627|\u062D\u0642 |\u062E\u0635 | \u06C1\u0631|\u0635\u0644 |\u062D\u0627\u0635|\u06C1\u06D2 | \u06C1\u06D2|\u0627\u0644 |\u0642 \u062D|\u0644 \u06C1| \u0646\u0627| \u06A9\u06CC| \u0648\u0686|\u06D4 \u06C1|\u06CC\u0627 |\u0633\u06CC |\u06D2 \u0645| \u0627\u0648|\u0648\u0686 |\u0627\u062A\u06D2|\u06A9\u06CC\u062A|\u0627 \u062D|\u0627\u062F\u06CC|\u0646\u0627\u0644|\u0635 \u06A9| \u0627\u062A|\u0631 \u0634|\u06C1\u06CC\u06BA| \u06CC\u0627|\u06BA \u062F| \u0627\u06CC|\u06CC\u0633\u06CC| \u0645\u0644|\u0648\u0646\u062F|\u06A9\u06C1\u06CC| \u06A9\u06C1|\u06CC \u062A|\u0632\u0627\u062F|\u0627\u0632\u0627| \u0627\u0632|\u0646\u062F\u06D2|\u06BA \u06A9|\u0627\u0631 | \u0648\u06CC|\u06D2 \u06A9|\u0626\u06D2 | \u0627\u0646|\u06BB \u062F|\u0646\u06C1 | \u06A9\u0631|\u0627\u0648\u0646|\u06D2 \u0648|\u062F\u06CC\u0627|\u06CC \u062F|\u06BA \u0627|\u06D2 \u0628|\u0648\u06CC\u0633|\u0648\u06BB |\u06CC \u0646| \u06C1\u0648|\u062A\u06CC |\u06CC \u06D4| \u0646\u06C1|\u06CC \u0627|\u06CC\u0646\u062F|\u0648 \u0684|\u0622\u067E\u06BB| \u0622\u067E|\u0627 \u0648|\u06D2 \u062C| \u06A9\u0646|\u06D2 \u0646|\u0646\u062F\u06CC|\u062A \u062F|\u06D2 \u062D|\u06CC \u06A9|\u0626\u06CC |\u0645\u0644\u06A9|\u06CC\u062A\u06D2|\u0646 \u06D4|\u062A\u06BE\u06CC| \u062A\u06BE|\u0648\u0646 |\u06BA \u0645| \u0628\u0686|\u06D4 \u0627|\u0646\u0648\u06BA|\u06A9\u0646\u0648|\u06BB\u06D2 |\u0627\u0631\u06CC|\u0627 \u0627|\u06D2 \u06C1|\u0644 \u062A| \u0684\u0626|\u0648\u0642 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0644 \u06A9|\u062E\u0644\u0627| \u062C\u06CC|\u0644\u06A9 |\u062F\u0627\u0631|\u06CC\u062A |\u06A9\u0631\u06BB|\u0627\u0646\u06C1|\u06A9\u0648 |\u06C1\u06A9\u0648| \u06C1\u06A9|\u0646 \u0627|\u0645\u0644 | \u0648\u0633|\u06BA \u0648|\u067E\u06BB\u06D2| \u062A\u0639|\u06CC \u0645|\u0627\u0641 |\u06D2 \u062E|\u0646\u0648\u0646|\u0642\u0646\u0648| \u0642\u0646| \u0644\u0648|\u06D4 \u06A9|\u0631\u06CC |\u0644\u06D2 |\u062A\u0627 |\u06CC\u062A\u0627| \u0642\u0648| \u0686\u0627|\u06C1\u0627\u06BA|\u0684\u0626\u06D2|\u0642 \u062A|\u0627\u06CC\u06C1|\u0631\u06BB |\u06D2 \u062F|\u0631 \u06A9| \u0648 |\u0644\u0627\u0641| \u062E\u0644| \u062C\u0648|\u06CC \u0648|\u0627\u0648 |\u06C1\u0648 |\u0626\u0648 |\u0686\u0626\u0648|\u0628\u0686\u0626|\u06CC\u0631 |\u06C1\u0648\u0648|\u0627 \u0645|\u06CC \u062C|\u0627\u0644\u0627|\u06CC\u0646 | \u062C\u0627|\u0645\u06CC |\u0646\u06C1\u0627|\u0627\u0646 |\u0627\u062A |\u0633\u06B1\u062F| \u0633\u06B1|\u06CC\u0628 |\u0633\u06CC\u0628|\u0648\u0633\u06CC| \u0634\u0627|\u0628 \u062F|\u06CC\u0648\u06BB|\u0627\u0645 |\u0627\u0648\u06BB|\u06D2 \u062A|\u06BB \u06A9| \u0645\u0637|\u06BA \u062A| \u0648\u0646| \u06A9\u0645|\u0646 \u062F|\u0631\u06A9\u06BE| \u0631\u06A9|\u06BB\u06CC |\u06BA \u0622|\u0631\u06CC\u0627|\u06CC \u06C1|\u0627\u062F |\u06CC\u0627\u062F|\u0639\u0644\u0627|\u0631 \u06C1|\u06BA \u0633|\u06CC \u062D|\u062C\u06BE\u06CC|\u0627\u0626\u062F|\u06C1\u06CC |\u0644\u0648\u06A9| \u068B\u0648| \u0633\u0645| \u0633\u0627| \u0645\u0646| \u0645\u0639|\u0628\u0642 |\u0627\u0628\u0642|\u0637\u0627\u0628|\u0645\u0637\u0627|\u06BE\u06CC\u0648|\u06BA \u0641|\u06C1\u0646 | \u06C1\u0646|\u062C\u0648 |\u0648 \u06A9|\u06BA \u0634|\u0631 \u062A|\u06A9\u0627\u0631|\u0645 \u062F|\u06BE\u06CC\u0627| \u067B\u0627|\u063A\u06CC\u0631|\u0648 \u0644|\u0648\u0626\u06CC|\u062C\u06CC\u0627|\u0648\u0627\u0645|\u0642\u0648\u0627|\u06CC \u0633| \u062C\u06BE|\u0644 \u0627|\u0642\u0648\u0645| \u0633\u06CC|\u0630\u06C1\u0628|\u0645\u0630\u06C1| \u0645\u0630|\u0627\u06D2 | \u0627\u06D2|\u062F\u0646 |\u0627 \u062A|\u0633\u0627\u0646|\u0646\u0633\u0627|\u0627\u0646\u0633|\u0631\u06D2 |\u0644\u06CC\u0645|\u0639\u0644\u06CC|\u062A\u0639\u0644|\u0627\u0645\u0644|\u06C1 \u062F|\u06D2 \u0631|\u062F \u0627|\u06A9\u0645 |\u06CC\u06C1\u0648|\u0641\u0627\u0626|\u0686 \u0627| \u06A9\u06BE|\u0645 \u062A|\u0631\u0627 |\u0648\u0631\u0627|\u067E\u0648\u0631|\u06BA \u0628|\u0642 \u062F|\u06D2 \u0642|\u0648\u06A9\u0648|\u06A9\u06BE\u06CC|\u0627 \u06A9|\u0648 \u062F|\u06D2 \u0630|\u067E\u06BB\u06CC|\u0628\u0646\u062F| \u0641\u0631|\u06A9\u0648\u0626|\u0627\u0645\u06CC|\u06CC \u06CC|\u0627\u0626\u06CC|\u0644\u0627\u0642|\u0627\u06CC\u06BA|\u06C1 \u0627| \u0646\u0638|\u0633\u0645\u0627|\u0648\u0645\u06CC|\u06CC\u060C |\u06D2 \u0633|\u062A \u0648|\u06BE\u06CC\u0646|\u06D2 \u0639|\u06CC\u0645 |\u0633\u06C1\u0648| \u0633\u06C1",pbu:" \u062F | \u0627\u0648|\u0627\u0648 |\u067E\u0647 | \u067E\u0647|\u064A\u06D4 | \u062D\u0642|\u0686\u06D0 | \u0686\u06D0|\u0631\u0647 |\u064A \u0627|\u06D0 \u062F| \u0647\u0631|\u0646\u0647 |\u0647\u0631 |\u062D\u0642 | \u0685\u0648|\u0648\u06A9 |\u0685\u0648\u06A9|\u0648 \u0627|\u0647 \u062F|\u0647 \u0627|\u06D4 \u0647|\u0647 \u0648| \u0634\u064A| \u0644\u0631|\u064A \u0686|\u0648 \u062F|\u0631\u064A |\u0644\u0631\u064A|\u0642 \u0644| \u06A9\u069A|\u0648\u064A |\u069A\u06D0 |\u06A9\u069A\u06D0|\u0647 \u06A9|\u063A\u0647 |\u0644\u0648 |\u0631 \u0685|\u0633\u0631\u0647| \u0633\u0631|\u0647 \u067E| \u067C\u0648|\u0648 \u067E|\u0644\u0647 |\u064A\u062A |\u067C\u0648\u0644|\u064A\u0627 |\u06A9\u0693\u064A| \u06A9\u0648|\u062E\u0647 |\u064A\u060C |\u062F\u064A | \u0644\u0647| \u0627\u0632|\u062F \u0645| \u0647\u064A| \u0648\u0627| \u064A\u0627| \u0685\u062E|\u0627\u0632\u0627|\u062F \u0627|\u0648\u0644\u0648|\u0647 \u062A|\u0685\u062E\u0647| \u06A9\u0693|\u0648\u0644 |\u0647\u063A\u0647|\u0647 \u0634|\u064A \u062F| \u0647\u063A|\u06A9\u0648\u0644|\u0632\u0627\u062F|\u0646\u0648 | \u0648\u064A|\u0648 \u064A|\u0647 \u0628|\u0634\u064A\u06D4|\u062F\u06D0 |\u064A\u0648 | \u062F\u064A|\u062A\u0647 |\u062E\u067E\u0644| \u067E\u0631|\u0627\u062F |\u062F \u062F|\u06A9 \u062D| \u062A\u0648|\u0647 \u0645|\u06AB\u0647 |\u0647 \u0647|\u0642\u0648\u0642|\u062D\u0642\u0648|\u0648 \u0645|\u0647 \u062D|\u062F \u0647| \u062A\u0631| \u0645\u0633|\u0634\u064A | \u0646\u0647|\u0693\u064A\u06D4|\u0646\u064A |\u062F \u067E|\u0648\u0627\u062F|\u06D0 \u067E|\u0627\u062F\u064A|\u0648\u0644\u0646| \u064A\u0648|\u062F \u062A|\u0648\u0646\u0648|\u0648\u06AB\u0647|\u064A \u0648|\u0644\u064A | \u062F\u0627|\u064A\u062F | \u0628\u0627|\u062A\u0648\u0646| \u062E\u067E|\u064A \u067E|\u062A\u0648\u06AB|\u0627\u0631 |\u0627\u0646\u062F|\u064A\u0648\u0627|\u06D0 \u0648|\u062F\u0627\u0646| \u0628\u0631|\u0693\u064A | \u0639\u0645|\u0627\u0646\u0647| \u062F\u0647|\u064A\u0685 |\u0647\u064A\u0685|\u0627\u0645\u064A|\u0644\u0646\u064A|\u0628\u0639\u064A|\u0689\u0648\u0644| \u0689\u0648|\u0647 \u0644|\u0627\u064A\u062F|\u0628\u0627\u064A|\u0627\u062A\u0648|\u0647 \u06AB| \u062A\u0627|\u067E\u0644 | \u0645\u0644|\u0627\u064A\u062A|\u0648\u0645 |\u0648\u0646 | \u0644\u0627|\u0647\u064A\u0648| \u0634\u0648| \u062F\u063A|\u0645 \u062F|\u062F\u0647 |\u06D0 \u0627|\u0627\u0646 | \u062A\u0647|\u06A9\u0627\u0631|\u062A\u0648 |\u0645\u064A |\u0627\u0631\u0647|\u0627\u0648\u064A|\u0633\u0627\u0648|\u0645\u0633\u0627|\u0646\u0648\u0646|\u062F\u0647\u063A|\u0648 \u062A|\u064A \u0634|\u0627\u0646\u0648| \u0645\u062D|\u064A\u0646 |\u0627\u062E\u0644| \u06AB\u067C|\u0634\u0648\u064A|\u062F\u063A\u0647|\u0648 \u062D|\u0648\u064A\u060C|\u0646\u064A\u0632|\u0633\u064A |\u0627\u0633\u064A|\u0648\u0646\u062F|\u0642\u0648 |\u0648\u0642\u0648|\u0648 \u06A9|\u0648\u0646\u0647|\u0648\u0645\u064A| \u0648\u06A9|\u064A \u062A| \u0627\u0646|\u0642\u0627\u0646|\u0646\u062F\u06D0|\u0648 \u0631|\u06A9 \u062F|\u0647 \u064A|\u0645\u064A\u0646|\u067E\u0631 |\u067C\u0647 |\u0644\u0627\u0645|\u063A\u0648 |\u0647\u063A\u0648|\u062F \u067C|\u0648 \u0647|\u0644 \u062A|\u0644\u06D2 |\u0648\u0644\u06D2|\u0648\u0648\u0646|\u06A9\u064A |\u0631\u0648 |\u0646 \u06A9|\u0645\u0648\u0645|\u0648\u06A9\u0693|\u067E\u0627\u0631|\u0646 \u0634|\u0645\u0646 | \u0646\u0648| \u0648\u0693| \u0642\u0627|\u06D0 \u0686| \u0648\u0633|\u0685 \u0685|\u0634\u062E\u0635| \u0634\u062E|\u0698\u0648\u0646| \u0698\u0648|\u062A\u0631 |\u06AB\u067C\u0647|\u0648 \u0685|\u0647\u0645 |\u0639\u0642\u064A|\u0631\u062A\u0647| \u0648\u0631|\u0628\u0644 | \u0628\u0644|\u0648 \u0628|\u0647 \u0633|\u069A\u0648\u0648| \u069A\u0648| \u06A9\u0627|\u06D0 \u06A9|\u0648 \u0633|\u0627\u062F\u0647|\u0648\u0646\u06A9| \u063A\u0648|\u062F\u0648 |\u0648 \u0646|\u062A \u06A9|\u0645\u0644 |\u0639\u0645\u0648|\u0644 \u0647| \u067E\u064A|\u0648\u0633\u064A|\u0693\u0627\u0646|\u0648\u0693\u0627|\u064A\u0632 |\u062E\u0635\u064A|\u064A \u0645|\u0627 \u0628|\u0627\u062F\u0627|\u0647 \u0646|\u062E\u0644\u064A|\u0648\u0627\u062E|\u062F\u064A\u0648|\u060C \u062F|\u062F \u0642| \u0647\u0645|\u0627 \u062F| \u0628\u064A|\u062A\u0628\u0639| \u062A\u0628|\u0647 \u0686| \u0639\u0642|\u067E\u0644\u0648|\u0648 \u0644| \u0631\u0627|\u062F \u0628|\u0631\u0627\u064A| \u062F\u062E|\u0646\u06D0 |\u0646\u06A9\u064A|\u062A \u062F|\u0627\u0628\u0639| \u0645\u0642|\u062F \u062E|\u0648\u0631\u0647|\u0634\u0631\u0627| \u0634\u0631|\u0631 \u0645|\u0631\u0633\u0631|\u062A\u0627\u0645|\u0647 \u067C| \u0645\u0646|\u0637\u0647 |\u0633\u0637\u0647|\u0627\u0633\u0637|\u0648\u0627\u0633|\u0644\u06D0 | \u0627\u0633|\u06D4 \u062F|\u0628\u0631\u062E|\u06D0 \u0646"},Devanagari:{hin:"\u0915\u0947 |\u092A\u094D\u0930| \u092A\u094D| \u0915\u093E| \u0915\u0947| \u0964 |\u0914\u0930 | \u0914\u0930|\u0915\u093E | \u0915\u094B|\u0915\u093E\u0930|\u093E\u0930 |\u0924\u093F |\u092F\u093E |\u0915\u094B |\u0928\u0947 |\u094B\u0902 |\u093F\u0915\u093E|\u094D\u0930\u0924| \u0939\u0948| \u0915\u093F|\u0902 \u0915|\u0939\u0948 |\u0927\u093F\u0915|\u0935\u094D\u092F|\u0905\u0927\u093F| \u0905\u0927|\u094D\u0924\u093F| \u0938\u092E|\u094D\u092F\u0915|\u093F \u0915|\u0915\u094D\u0924|\u093E \u0905|\u0915\u0940 |\u093E \u0915| \u0935\u094D|\u0947\u0902 | \u0939\u094B|\u092F\u0915\u094D|\u0938\u0940 |\u0938\u0947 |\u0947 \u0915| \u092F\u093E| \u0915\u0940|\u092E\u0947\u0902|\u0928\u094D\u0924| \u092E\u0947|\u0924\u094D\u092F|\u0948 \u0964|\u0924\u093E |\u0930\u0924\u094D|\u0915\u094D\u0937|\u0947\u0915 |\u092F\u0947\u0915|\u094D\u092F\u0947|\u093F\u0915 |\u0930 \u0939|\u092D\u0940 |\u0915\u093F\u0938| \u091C\u093E| \u0938\u094D|\u0915 \u0935|\u093E \u091C|\u093F\u0938\u0940|\u092E\u093E\u0928| \u0935\u093F|\u0930 \u0938|\u0924\u094D\u0930|\u0940 \u0938|\u0964 \u092A| \u0915\u0930|\u094D\u0930\u093E|\u0917\u093E |\u093F\u0924 | \u0905\u092A| \u092A\u0930|\u0938\u094D\u0935|\u0940 \u0915| \u0938\u0947|\u093E \u0938|\u094D\u092F | \u0905\u0928|\u094D\u0924\u094D|\u093F\u092F\u093E|\u093E \u0939| \u0938\u093E|\u0928\u093E |\u094D\u0924 |\u092A\u094D\u0924|\u0938\u092E\u093E|\u093E\u0928 |\u0930 \u0915|\u093E\u092A\u094D|\u0924\u0928\u094D| \u092D\u0940| \u0909\u0938|\u0930\u093E\u092A|\u0935\u0924\u0928|\u094D\u0935\u0924|\u0930\u094B\u0902|\u0935\u093E\u0930|\u0947 \u0938|\u0925\u093E |\u0939\u094B |\u0947 \u0905|\u093E \u0964|\u0928 \u0915| \u0928 |\u0926\u0947\u0936| \u0930\u093E|\u0937\u093E |\u0905\u0928\u094D|\u0924 \u0939|\u094D\u0937\u093E|\u094D\u0935\u093E|\u091C\u093E\u090F|\u0940 \u092A|\u0915\u0930\u0928|\u093E \u092A|\u0905\u092A\u0928|\u0937\u094D\u091F| \u0938\u0902|\u0947 \u0935|\u0939\u094B\u0917|\u093F\u0935\u093E|\u091F\u094D\u0930|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0938\u0915\u0947| \u092E\u093E|\u0913\u0902 |\u093E\u0913\u0902|\u0930\u0940 |\u0915 \u0938|\u0947 \u092A| \u0928\u093F|\u0940\u092F |\u0930\u0915\u094D|\u094B \u0938|\u093E\u090F\u0917|\u0930\u0928\u0947| \u0907\u0938|\u0935 \u0915|\u092A\u0930 |\u0930\u0924\u093E|\u0930 \u0905| \u0938\u092D|\u0924\u0925\u093E| \u0924\u0925| \u0910\u0938|\u0930\u093E |\u092A\u0928\u0947|\u094D\u0930\u0940|\u093F\u0915\u094D|\u0915\u093F\u092F|\u093E \u0935|\u092E\u093E\u091C|\u0902 \u0914|\u0930 \u0909|\u0926\u094D\u0927|\u0938\u092D\u0940|\u0936\u094D\u092F| \u091C\u093F|\u093E\u0928\u0947|\u093E\u0930\u094D|\u093E\u0930\u093E|\u0926\u094D\u0935| \u0926\u094D|\u090F\u0917\u093E|\u0938\u092E\u094D|\u0947\u0936 |\u093F\u090F |\u093E\u0935 |\u0930 \u092A| \u0926\u0947|\u094D\u0924\u0930|\u093E \u0914|\u093E\u0930\u094B|\u092F\u094B\u0902|\u092A\u0930\u093E|\u092A\u0942\u0930|\u091A\u093F\u0924|\u094D\u0927 |\u0930\u0942\u092A| \u0930\u0942| \u0938\u0941| \u0932\u093F|\u0924 \u0915|\u094B \u092A|\u0902 \u0938|\u0947 \u0932|\u0936\u093F\u0915| \u0936\u093F|\u0935\u093E\u0939|\u0947 \u0914|\u091C\u094B |\u0930\u093E\u0927|\u091C\u093F\u0938|\u0942\u0930\u094D|\u0940 \u092D|\u0942\u092A |\u094B\u0917\u093E|\u0938\u094D\u0925|\u0930\u0940\u092F|\u0924\u093F\u0915|\u094D\u0930 |\u0964 \u0907|\u0907\u0938 | \u0909\u0928|\u0932\u0947 |\u0947 \u092E|\u0932\u093F\u090F|\u092E \u0915|\u0915\u0924\u093E|\u0947 \u092F| \u091C\u094B|\u0928 \u092E|\u0905\u092A\u0930| \u092A\u0942|\u094B \u0915|\u093E \u0909|\u093E\u0939 |\u0928\u0942\u0928|\u093E\u0928\u0942|\u0917\u0940 |\u0926\u0940 |\u093E\u0930\u0940|\u0902 \u092E|\u0964 \u0915|\u0924\u0930\u094D|\u0940 \u0930|\u0936 \u0915|\u092A\u0930\u093F|\u0938\u094D\u0924|\u094B\u0908 |\u0915\u094B\u0908|\u0930\u094D\u092F|\u0940 \u0905|\u0939\u093F\u0924|\u092D\u093E\u0935| \u092D\u093E|\u0924\u093E\u0913|\u093E\u0938 |\u0938\u093E\u092E|\u0935\u093F\u0915|\u0935\u093F\u0935|\u092E\u094D\u092E| \u0938\u0915|\u0915\u0930 |\u093E\u0928\u093E|\u0927 \u0915|\u0928\u093F\u0915|\u092F \u0915|\u0909\u0938\u0915|\u0915\u0943\u0924| \u0958\u093E|\u0928 \u0938|\u091C\u0940\u0935|\u094D\u092F\u093E|\u0930\u0915\u093E|\u094D\u0930\u0915|\u093E\u091C |\u0928\u094D\u092F|\u094D\u092E |\u0930\u094D\u0923|\u0958 \u0939|\u0939\u0958 | \u0939\u0958|\u0940 \u092E|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093E\u092E\u093E|\u0915 \u0914|\u092E\u093F\u0932|\u0947\u0928\u0947|\u0932\u0947\u0928| \u0932\u0947|\u092F\u0947 |\u094B \u0905|\u0947 \u091C|\u0930\u093F\u0935|\u092E\u092F |\u0938\u092E\u092F|\u0935\u0936\u094D|\u0906\u0935\u0936| \u0906\u0935|\u0910\u0938\u0940|\u093E\u0927 |\u0930 \u0926|\u0930\u094D\u0935|\u0938\u093E\u0930|\u092A \u0938|\u092C\u0928\u094D| \u0938\u0939|\u093F\u0927\u093E|\u0935\u093F\u0927|\u0940 \u0928|\u0942\u0928 |\u0958\u093E\u0928",mar:"\u094D\u092F\u093E|\u092F\u093E |\u0924\u094D\u092F|\u092F\u093E\u091A|\u091A\u093E |\u0923\u094D\u092F|\u093E\u091A\u093E| \u0935 |\u0915\u093E\u0930|\u092A\u094D\u0930| \u092A\u094D|\u093F\u0915\u093E|\u0927\u093F\u0915|\u093E\u0930 | \u0905\u0927|\u0905\u0927\u093F|\u091A\u094D\u092F|\u0906\u0939\u0947| \u0906\u0939|\u093E \u0905|\u0939\u0947 |\u093E \u0915|\u093E\u0938 |\u0935\u093E |\u094D\u092F\u0947|\u094D\u0930\u0924| \u0938\u094D|\u0924\u093E |\u093E \u0938| \u0905\u0938| \u0915\u0930|\u0938\u094D\u0935| \u0915\u093E|\u0932\u094D\u092F|\u0930\u0924\u094D|\u093E\u0939\u093F|\u0915\u094B\u0923| \u0915\u094B|\u093F\u0915 |\u092F\u0947\u0915|\u094D\u0935\u093E|\u093E \u0935| \u0924\u094D|\u0930 \u0906|\u094D\u092F |\u0924\u094D\u0930|\u0947\u0915\u093E|\u0915\u094D\u0937|\u093E \u0928| \u0938\u0902|\u093E\u092E\u093E|\u093E\u091A\u094D|\u0902\u0935\u093E|\u093F\u0902\u0935|\u0915\u093F\u0902| \u0915\u093F|\u093E\u0924 |\u0937\u094D\u091F|\u0915\u093E\u0938| \u092F\u093E|\u092F\u093E\u0902|\u093E\u0902\u091A|\u0930\u094D\u092F|\u092E\u093F\u0933| \u092E\u093F| \u0938\u093E|\u0935\u094D\u092F|\u094B\u0923\u0924|\u0928\u0947 |\u0947 \u092A|\u0915\u093E\u092E| \u0938\u092E|\u0902\u0924\u094D|\u092F\u0947 | \u0930\u093E|\u0938\u092E\u093E|\u0924\u0902\u0924|\u0915\u0930\u0923|\u093E \u0906|\u0947 \u0915|\u0939\u093F |\u0947 \u0938|\u0928\u093E |\u093F\u0933\u0923|\u0942\u0928 |\u093E \u092A|\u091F\u094D\u0930|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0940\u092F |\u0935 \u0938|\u0915\u094D\u0924|\u092E\u093E\u0928|\u0930\u094D\u0935| \u0906\u092A|\u0933\u0923\u094D|\u094D\u0930\u094D|\u093E\u0924\u0902|\u0935\u093E\u0924|\u091A\u0947 | \u0935\u093F|\u094D\u0937\u0923|\u0930\u0923\u094D| \u0926\u0947| \u0935\u094D|\u0906\u092A\u0932|\u0939\u0940 |\u093E\u0930\u094D|\u0928\u092F\u0947| \u0928\u092F|\u092E\u093E |\u092F\u093E\u0938| \u091C\u093E|\u0932\u0947\u0932| \u0928\u093F|\u0947 \u0905| \u092A\u093E|\u093E \u092E|\u0932\u0947 |\u093E\u0939\u0940|\u092C\u0902\u0927|\u0947 \u0935|\u094D\u092F\u0915| \u092E\u093E|\u0936\u093F\u0915| \u0936\u093F|\u0926\u0947\u0936|\u093E \u0926|\u092E\u093E\u091C|\u094D\u0930\u0940|\u0932\u0940 |\u093E\u0928 |\u093E\u0902\u0928|\u092A\u0932\u094D| \u0939\u094B|\u093E \u0939|\u0937\u0923 |\u091C\u0947 |\u093F\u091C\u0947|\u0939\u093F\u091C|\u092A\u093E\u0939|\u093E\u0930\u093E|\u092F\u093E\u0924|\u0938\u0930\u094D| \u0938\u0930|\u0930\u093E\u0902|\u0905\u0938\u0932|\u0902\u092C\u0902|\u0938\u0902\u092C|\u093F\u0915\u094D|\u0940 \u092A|\u0902\u091A\u094D|\u0930\u0915\u094D|\u0923\u0924\u094D| \u0906\u0923|\u0932\u093E |\u0938\u094D\u0925|\u0930\u0940\u092F|\u0940\u0924 |\u0902\u0928\u093E|\u0924 \u0935|\u094D\u0935 |\u0915 \u0935|\u0923\u0947 |\u093E\u091A\u0947|\u0928 \u0915|\u0924 \u0915|\u0930\u0924\u093E|\u094D\u0930\u093E|\u092F\u093E\u0939|\u094D\u0924 |\u091A\u0940 |\u092F \u0915|\u0926\u094D\u0927|\u094D\u0935\u0924|\u092F\u0915\u094D|\u0923\u093F |\u0906\u0923\u093F|\u0938 \u0938|\u0902\u0927\u093E|\u0915 \u0938|\u091A\u094D\u091B|\u092F \u0905|\u0924 \u0938|\u0940\u0928\u0947|\u094B\u0923\u093E|\u0915\u0930\u0924|\u0924\u094D\u0935|\u0940\u0932 |\u0940 \u0905|\u0938\u093E\u0930|\u0930 \u0935|\u092D\u093E\u0935|\u0935 \u0924|\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u0947 \u0924|\u0947 \u091C|\u092F\u093E\u092F|\u0902\u091A\u093E|\u0947\u0932\u094D|\u093E\u0928\u0947|\u0947\u0923\u094D|\u0915 \u0906|\u0915\u094D\u0915|\u0939\u0915\u094D| \u0939\u0915|\u0923 \u092E|\u0902\u0930\u0915|\u0938\u0902\u0930|\u0928\u094D\u092F|\u093E\u092F\u0926|\u093E \u0924|\u0924 \u0906| \u0909\u092A|\u0935\u0938\u094D|\u093F\u0935\u093E|\u0947\u0936\u093E|\u0938\u093E\u092E|\u0947 \u092F|\u0947 \u0906|\u0940 \u0935|\u0935 \u092E|\u0924\u0940\u0928|\u0935 \u0906|\u0927\u094D\u092F| \u0905\u0936|\u0927\u093E\u0924|\u0915\u0943\u0924|\u094D\u0915 |\u0926\u094D\u092F|\u093F\u0924 |\u0938\u0932\u0947|\u0947\u0936 |\u0924\u094B |\u0947\u0932 |\u0924\u0940 |\u094D\u0924\u0940|\u0905\u0938\u0947|\u0907\u0924\u0930| \u0907\u0924|\u0938\u094D\u0924|\u0930\u094D\u0923|\u093E \u092C|\u0947\u0932\u0947| \u0915\u0947|\u0939\u0940\u0930|\u091C\u093E\u0939|\u093E \u091C|\u0947\u0924 |\u0942\u0930\u094D|\u092A\u0942\u0930|\u0947\u091A | \u0935\u093E|\u093E\u091C\u093E|\u0940 \u0938|\u0936\u093E |\u092F \u0935| \u0928\u094D|\u092F\u093E\u0935|\u0926\u094D\u0926|\u094D\u0927 |\u0930\u0942\u0928|\u092F\u0926\u094D|\u0915\u093E\u092F|\u093E \u0936|\u0917\u0923\u094D|\u0915 \u0915|\u0930\u093E\u0927| \u0936\u093E|\u092F\u0924\u094D|\u0932 \u0905|\u094D\u092F\u0935|\u0940 \u0915|\u093E\u0935 |\u093E \u092F|\u0924\u094D\u0924|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0930\u0923\u093E| \u0927\u0930|\u093E \u0927|\u092D\u0947\u0926| \u092C\u093E|\u0930\u0915\u093E|\u094D\u0930\u0915|\u0915\u0947\u0932|\u093F \u0935|\u093F\u0937\u094D|\u0924\u0940\u0932|\u092F\u094B\u0917|\u0938\u093E\u0927|\u093E\u0902\u0924|\u0935\u093F\u0935|\u0936\u094D\u0930| \u0927\u0947| \u092E\u0941|\u0935\u0924\u0903",mai:"\u093E\u0915 |\u092A\u094D\u0930|\u0915\u093E\u0930| \u092A\u094D|\u093E\u0930 |\u093F\u0915\u093E|\u094D\u092F\u0915|\u0927\u093F\u0915|\u0915 \u0905|\u094D\u0930\u0924|\u094D\u0924\u093F|\u0935\u094D\u092F| \u0905\u0927|\u0947\u0901 |\u0905\u0927\u093F|\u093F\u0915 | \u0935\u094D|\u0906\u02BC | \u0906\u02BC|\u0915\u094D\u0924|\u092F\u0915\u094D|\u0924\u093F\u0915|\u0915\u0947\u0901|\u0915 \u0935|\u092C\u093E\u0915|\u0915 \u0938|\u091B\u0948\u0915| \u091B\u0948|\u0924\u094D\u092F|\u092E\u0947 |\u0947\u0915 | \u0938\u092E|\u0915\u094D\u0937|\u0939\u093F |\u0930\u0924\u094D|\u0930 \u091B|\u092F\u0947\u0915|\u094D\u092F\u0947|\u0928\u094D\u0924|\u0935\u093E |\u093F\u0915\u0947|\u0915\u0964 |\u0948\u0915\u0964|\u0964 \u092A| \u0905\u092A| \u0938\u094D| \u0935\u093F| \u091C\u093E|\u093F\u0924 |\u0938\u0901 | \u0939\u094B|\u0915\u094B\u0928| \u0915\u094B|\u0924\u094D\u0930|\u0938\u094D\u0935| \u0935\u093E|\u0915 \u0906|\u0937\u094D\u091F| \u0915\u0930|\u0905\u092A\u0928|\u092E\u093E\u0928| \u0915\u093E| \u0905\u0928|\u0924\u093F |\u094D\u0924\u094D|\u0928\u094B |\u0928\u0939\u093F| \u092A\u0930|\u091F\u094D\u0930|\u094D\u092F | \u090F\u0939|\u093F \u0915|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937| \u0930\u093E|\u0938\u092E\u093E|\u094B\u0928\u094B|\u0932 \u091C| \u0928\u0939|\u0924\u093E\u0915|\u093E\u0930\u094D|\u092A\u0928 |\u0924\u0928\u094D|\u0935\u0924\u0928|\u094D\u0935\u0924|\u094D\u0937\u093E| \u0915\u090F| \u0938\u093E|\u094D\u0930\u0940| \u0928\u093F|\u093E \u0906|\u093F\u0935\u093E| \u0938\u0902| \u0926\u0947|\u091C\u093E\u090F|\u0940\u092F |\u0915\u0930\u092C|\u0925\u093E |\u090F\u092C\u093E|\u093E \u092A|\u0928\u093E |\u094D\u0935\u093E|\u0926\u0947\u0936|\u0924\u0964 |\u0930\u0915 |\u0915 \u0939|\u0901 \u0905| \u0938\u092D| \u0906 |\u0924 \u0915|\u091A\u093F\u0924|\u094D\u0924 |\u0935\u093E\u0930|\u0924\u093E |\u093E\u0930\u0915|\u092E\u093E\u091C|\u093E \u0938|\u0930\u0940\u092F|\u0928\u094D\u092F|\u0930\u0924\u093E|\u093E\u0928 |\u094D\u0930\u093E|\u094D\u092F\u093E|\u0930\u0915\u094D|\u093E\u0930\u0923|\u092A\u0930\u093F|\u090F\u0932 |\u0915\u090F\u0932|\u0905\u0928\u094D|\u0930\u092C\u093E|\u0915 \u092A|\u0913\u0930 |\u0906\u0913\u0930| \u0906\u0913|\u0905\u091B\u093F| \u0905\u091B|\u093F\u0930\u094D|\u093E\u0928\u094D|\u0928\u0915 |\u0939\u094B\u090F|\u0915\u0930 |\u0927\u093E\u0930|\u0938\u094D\u0925|\u093E \u0905|\u093F\u092E\u0947|\u0930 \u0906|\u090F\u0939\u093F| \u090F\u0915|\u0947 \u0938|\u0924\u0925\u093E| \u0924\u0925| \u092E\u093E|\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u092A\u094D\u0924|\u0930\u094D\u0935|\u0928\u093F\u0930|\u091A\u094D\u091B|\u0930\u094D\u092F|\u0901 \u0938|\u0915 \u0915|\u0939\u094B |\u093E\u0939\u093F|\u090F\u0924\u0964|\u0930 \u092A|\u093E\u092E\u093E|\u0938\u093E\u092E|\u0937\u093E |\u02BC \u0938|\u0901 \u090F|\u0948\u0915 |\u0926\u094D\u0927|\u0930 \u0905|\u0915 \u091C|\u0938\u094D\u0924|\u093E\u092A\u094D|\u0901 \u0915| \u0938\u0915|\u092F\u0915 |\u0915\u093E\u0928|\u0939\u0928 |\u090F\u0939\u0928|\u0947\u0932 |\u094B\u090F\u0924|\u0924 \u0906|\u093E \u0935|\u0964 \u0915|\u094D\u0924\u0930|\u093E\u090F\u0924|\u094D\u0930\u0915|\u0939\u0941 |\u0915 \u0909|\u092A\u0942\u0930|\u0935\u093F\u0935|\u02BC \u0905|\u091B\u093F | \u0932\u0947|\u0928 \u092A|\u093E\u0938 |\u0930\u093E\u092A|\u0927\u0915 |\u092A\u090F\u092C| \u092A\u090F|\u0930\u093E |\u092F\u0924\u093E|\u0930\u0942\u092A|\u0928 \u0935| \u0915\u0947|\u0937\u093E\u0915|\u092F \u092A|\u0924 \u0939|\u091C\u093E\u0939| \u0913 |\u092D\u093E\u0935|\u092A\u0930 |\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u0938\u092E\u094D|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0942\u0930\u094D|\u0930\u0924\u093F| \u0926\u094B|\u0938\u092D\u0915|\u0964 \u0938| \u091C\u0928|\u0938\u092D |\u092C\u093E\u0927|\u0905\u0928\u0941|\u093F\u0938\u0901| \u0938\u0939|\u0901 \u0935|\u090F \u0938|\u0930\u093F\u0935|\u0924\u0941 |\u0947\u0924\u0941|\u0939\u0947\u0924| \u0939\u0947|\u093E\u0927 |\u0947\u092C\u093E|\u0928 \u0938|\u093F\u0937\u094D|\u0930\u093E\u0927| \u0905\u0935|\u093F\u0924\u094D|\u0935\u093E\u0938|\u091A\u093E\u0930| \u0909\u091A|\u093E\u0930\u093E|\u0928 \u0915|\u0935\u0915 |\u093E \u0915|\u0928\u0942\u0928|\u093E\u0928\u0942|\u090F\u0924 |\u0930\u0940 |\u0947\u0913 |\u0915\u0947\u0913|\u0930\u0923 |\u094D\u0930\u0938|\u093F \u0926|\u0913 \u0935| \u092D\u0947|\u0928\u0939\u0941|\u094B\u0928\u0939|\u094D\u0925\u093F|\u092A\u0924\u094D|\u092E\u094D\u092A|\u0930\u093E\u091C| \u092D\u093E|\u0939\u093F\u092E| \u0939\u0915|\u093E\u092E\u0947|\u094D\u0923 |\u0930\u094D\u0923|\u0939\u093E\u0930|\u093F \u0938|\u0915 \u0926|\u0928 \u0905|\u0924 \u0905|\u0932\u0947\u092C| \u0905\u092D|\u093F\u0936\u094D|\u091C\u0915 |\u093E\u091C\u0915|\u0928 \u0906|\u0935\u093E\u0939|\u0915\u093E\u091C|\u0936\u094D\u092F|\u0935\u0938\u094D|\u0913\u0939\u093F| \u0913\u0939|\u092F\u094B\u0917|\u0964 \u090F|\u0915\u090F |\u0947 \u0913|\u0905\u092A\u0930",bho:" \u0915\u0947|\u0915\u0947 |\u0947 \u0915|\u093E\u0930 |\u0915\u093E\u0930|\u093F\u0915\u093E|\u0927\u093F\u0915|\u0905\u0927\u093F| \u0905\u0927|\u0913\u0930 |\u0906\u0913\u0930| \u0906\u0913|\u0947 \u0905|\u0947 \u0938|\u093E \u0915| \u0938\u0902|\u093F\u0915 |\u0930 \u0939|\u093E \u0938| \u0939\u094B|\u0930 \u0938|\u0947\u0902 |\u092E\u0947\u0902| \u092E\u0947| \u0915\u0930| \u0938\u0947|\u0928\u094B |\u0915\u094D\u0937|\u0938\u0947 | \u0915\u093E|\u0964 \u0938|\u0916\u0947 |\u093E\u0964 |\u0930\u093E | \u0938\u092E| \u0938\u092C|\u094D\u0930\u093E| \u0938\u0915|\u0930 \u0915|\u0928 \u0915|\u0935\u0947 |\u094C\u0928\u094B|\u0915\u094C\u0928| \u0915\u094C|\u091A\u093E\u0939| \u091A\u093E| \u092C\u093E|\u092A\u094D\u0930| \u092A\u094D|\u0925\u093E |\u093F \u0915|\u0924\u093F | \u091C\u093E| \u0938\u093E|\u0947 \u0906|\u092A\u0928 |\u0915\u0930\u0947|\u0924\u093E |\u0939\u094B\u0916|\u0924 \u0915|\u0947\u0964 |\u0947 \u092C|\u0924\u0925\u093E| \u0924\u0925| \u0906\u092A|\u0915\u0947\u0932|\u0938\u0915\u0947| \u0938\u094D|\u0930\u0947 |\u0938\u092C\u0939|\u0915\u0930 |\u0906\u092A\u0928|\u0947 \u0913|\u091C\u093E | \u092A\u0930|\u0937\u094D\u091F| \u0930\u093E|\u0928\u093E |\u0939\u0935\u0947| \u0939\u0935|\u0932\u093E |\u0947\u0932\u093E|\u092C\u0939\u093F| \u0913\u0915|\u094B\u0916\u0947|\u0930 \u092C|\u0939\u0964 | \u0939\u0964|\u0928 \u0938|\u093E\u0937\u094D|\u0930\u093E\u0937|\u094D\u0924 | \u0914\u0930|\u0947 \u091A|\u0964 \u0915|\u0938\u0902\u0917|\u0930 \u0906|\u091F\u094D\u0930|\u094D\u091F\u094D|\u0937\u093E |\u092E\u093E\u0928|\u093E \u0906|\u0902 \u0915|\u093E \u092A|\u094D\u0937\u093E|\u0930\u0915\u094D|\u0939\u0947 |\u093E\u0939\u0947|\u093E\u0924\u093F|\u093E\u0935\u0947| \u091C\u0947|\u0939\u0940 |\u0913\u0915\u0930|\u092E\u093F\u0932|\u093F\u0924 |\u094B \u0938|\u0932 \u091C|\u0907\u0916\u0947|\u0928\u0907\u0916| \u0928\u0907|\u0924\u094D\u0930|\u092E\u093E\u091C| \u092C\u093F|\u0935\u0947\u0964|\u0947 \u091C|\u0915 \u0938|\u093F\u0902 |\u0939\u093F\u0902|\u0915\u0930\u093E|\u0914\u0930 |\u0947 \u092E|\u0938\u092E\u093E|\u0939\u0941 | \u0913 |\u092A\u0930 |\u0947 \u0928|\u0938\u094D\u0925|\u0930\u0940\u092F|\u094D\u0930\u0940|\u0932\u093E\u0964|\u093E\u091C |\u093E\u0928 |\u0915\u093E\u0928|\u0947 \u0924|\u093F\u0930 |\u0924\u093F\u0930|\u0916\u093E\u0924| \u0916\u093E|\u0947 \u0909|\u0928\u0942\u0928|\u093E\u0928\u0942|\u093E\u092E | \u0938\u0941| \u0926\u0947|\u0940 \u0915| \u092E\u093E|\u0930 \u092E|\u092A\u094D\u0924|\u093F\u092F\u093E|\u093E\u0939\u0940|\u092C\u093E\u0964|\u092F\u094B\u0917|\u0940 \u0938|\u0932 \u0939|\u0942\u0928 |\u0935\u094D\u092F|\u0941 \u0915|\u090F \u0915|\u0947 \u0935|\u0902\u0924\u094D|\u0938\u094D\u0935|\u0915\u0947\u0939|\u0940\u092F |\u0916\u0932 |\u0938\u093E\u092E|\u092F\u0924\u093E|\u0924\u093F\u0915|\u0947 \u0939|\u093E\u092A\u094D|\u0930\u093E\u092A|\u0930 \u092A|\u0930 \u0905| \u0932\u094B| \u0938\u0939|\u091C\u0947 |\u094B\u0917 |\u092E \u0915|\u0932\u0947 | \u0928\u093F|\u0947\u0915\u0930|\u093E \u0939|\u092A\u0942\u0930|\u0930 \u0928|\u0947\u0939\u0941|\u094D\u092F |\u092F\u093E | \u092F\u093E|\u0926\u0947\u0936|\u0926\u0940 |\u093E \u092E|\u093E\u0935 | \u0926\u094B|\u0947 \u0926| \u092A\u093E|\u0939\u093F |\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u092C\u093E |\u093F\u0932 | \u0909\u092A|\u094D\u0930\u0924| \u0935\u093F| \u0939\u0940| \u0932\u0947|\u0930\u094B |\u0947 \u0916|\u0920\u0928 |\u0917\u0920\u0928|\u0902\u0917\u0920| \u092E\u093F|\u0937\u0923 |\u094D\u0937\u0923|\u0902\u0930\u0915|\u0938\u0902\u0930| \u0906\u0926| \u090F\u0915|\u0928\u0947 | \u0905\u092A|\u0924\u0902\u0924|\u0935\u0924\u0902|\u094D\u0935\u0924|\u094D\u0924\u0930|\u094D\u092F\u093E|\u0947\u0936 |\u093E\u0926\u0940|\u094D\u0924\u093F|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0915 \u0906|\u094D\u092E |\u091A\u093E\u0930| \u0909\u091A| \u0936\u093E|\u0930\u0940 |\u093E\u0939 |\u092F\u093E\u0939|\u092C\u093F\u092F|\u091A\u093F\u0924|\u0915\u094D\u0924|\u092A\u092F\u094B|\u0909\u092A\u092F|\u0930\u0924\u093E|\u0930 \u0935|\u0928 \u092E|\u0932\u094B\u0917|\u0939 \u0915|\u0928 \u092A|\u0915\u093E\u092E| \u092A\u0942| \u0907 |\u0906\u0926\u093F|\u0908\u0932 | \u0915\u0908| \u0935\u094D|\u092E\u0940 |\u0941\u0930\u0915|\u0938\u0941\u0930| \u091C\u0940|\u0927\u093E\u0930|\u092F \u0938|\u0924\u0930\u094D|\u092D\u0947 |\u0938\u092D\u0947| \u0938\u092D|\u092D\u093E\u0935|\u094D\u0925\u093F|\u093E\u092E\u093E|\u0938\u0930 |\u0930\u094D\u092E| \u0915\u094B| \u092C\u0947|\u094B\u0938\u0930|\u0926\u094B\u0938|\u0923 \u0915|\u093E\u0938 |\u0947 \u092A|\u091C\u093E\u0926|\u0906\u091C\u093E| \u0906\u091C|\u0909\u091A\u093F|\u0917 \u0915|\u093E\u0930\u0940| \u091C\u0930|\u0917\u0947 |\u091C \u0915|\u0940 \u092C|\u0938\u0928 |\u0939\u094B |\u093E \u0924",npi:"\u0915\u094B |\u0928\u0947 | \u0930 |\u093E\u0930 |\u0915\u094D\u0924|\u0915\u093E\u0930|\u092A\u094D\u0930| \u092A\u094D|\u094D\u092F\u0915|\u0935\u094D\u092F| \u0917\u0930|\u093F\u0915\u093E| \u0935\u094D|\u094D\u0930\u0924|\u0927\u093F\u0915|\u094D\u0924\u093F|\u092F\u0915\u094D|\u0905\u0927\u093F| \u0905\u0927|\u093E\u0908 |\u092E\u093E |\u0932\u093E\u0908|\u0924\u094D\u092F|\u093F\u0915 | \u0964 | \u0938\u092E|\u0935\u093E | \u0935\u093E|\u0915 \u0935|\u094D\u0928\u0947|\u0930\u094D\u0928|\u0917\u0930\u094D|\u0928\u094D\u0924|\u091B \u0964|\u0924\u093F\u0932|\u0930\u0924\u094D|\u0924\u094D\u0930|\u0947\u0915 |\u092F\u0947\u0915|\u094D\u092F\u0947|\u093F\u0932\u093E|\u0930 \u0938|\u094B \u0938| \u0938\u094D|\u092E\u093E\u0928|\u0915\u094D\u0937| \u0935\u093F|\u0939\u0941\u0928|\u093E \u0938| \u0939\u0941| \u091B |\u0930 \u091B|\u094D\u0924\u094D|\u0938\u092E\u093E|\u0938\u094D\u0935|\u0964 \u092A| \u0938\u0902|\u0928\u0947\u091B|\u0941\u0928\u0947|\u0939\u0930\u0941|\u0924\u0928\u094D|\u0935\u0924\u0928|\u0947 \u0905|\u093F\u0928\u0947|\u094B \u0905|\u094D\u0935\u0924| \u0915\u093E|\u0947 \u091B|\u0917\u0930\u093F| \u0930\u093E|\u094D\u0930 |\u0924\u093F |\u093E\u0915\u094B| \u0915\u0941|\u0937\u094D\u091F|\u0928\u093E |\u0938\u094D\u0924|\u0915 \u0938|\u0941\u0928\u0948|\u0915\u0941\u0928|\u091F\u094D\u0930|\u0932\u0947 | \u0928\u093F|\u093E\u0928 |\u091B\u0948\u0928| \u091B\u0948|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0924\u093F\u0915|\u091B\u0964 |\u093E\u0930\u094D|\u0924\u093E |\u093F\u0924 |\u0928\u0948 |\u093E \u0905| \u0938\u093E|\u093E \u0935|\u0930\u0941 | \u092E\u093E| \u0905\u0928|\u093E \u0930|\u0930\u0924\u093E|\u0930 \u0930|\u0939\u0930\u0942|\u0947\u091B |\u093E \u092A|\u0930\u0915\u094D|\u094D\u0924 | \u092A\u0930|\u0925\u093E | \u0932\u093E|\u092A\u0930\u093F|\u0926\u0947\u0936|\u0938\u0915\u094B| \u092F\u0938|\u092E\u093E\u091C|\u093E\u092E\u093E|\u094D\u0930\u093E|\u093F\u0935\u093E|\u093E\u0939\u0930|\u094B \u092A|\u094D\u092F |\u0935\u093E\u0930|\u0928 \u0938|\u0964 \u0915|\u0928\u093F |\u094D\u0937\u093E| \u0924\u094D|\u0926\u094D\u0927|\u0930 \u0939|\u0924\u0925\u093E| \u0924\u0925|\u092F\u0938\u094D|\u094D\u092F\u0938|\u0930\u0940 |\u0930 \u0935|\u092A\u0928\u093F|\u0930\u093F\u0928|\u0902\u0930\u0915|\u0938\u0902\u0930|\u092D\u093E\u0935|\u0948 \u0935|\u0938\u092C\u0948| \u0938\u092C| \u0936\u093F| \u0938\u0939|\u0924\u093E\u0915|\u0947 \u0930|\u0924 \u0930|\u0932\u093E\u0917| \u0938\u0941|\u094D\u0937\u0923|\u0926\u094D\u0926| \u0905\u092A|\u0948\u0928 |\u094B \u0935|\u093F\u0915\u094D|\u093E\u0935 |\u0927\u093E\u0930|\u094D\u092F\u093E|\u094D\u0930\u093F|\u093E \u092D|\u090F\u0915\u094B|\u0930 \u092E|\u0928 \u0905|\u094B \u0932| \u0909\u0938|\u0936\u093F\u0915|\u093E\u0924\u094D|\u0938\u094D\u0925|\u0935\u093E\u0939|\u0942\u0930\u094D|\u0936\u094D\u092F|\u093F\u0924\u094D|\u0930\u0915\u094B|\u093E\u0930\u0915|\u0941\u0926\u094D|\u0924\u094B |\u094D\u0924\u094B|\u093E\u0909\u0928|\u0915\u093E\u0928|\u093F\u090F\u0915|\u093E \u0928| \u092A\u0928|\u0928\u0964 |\u0948\u0928\u0964|\u0915\u093E |\u0947\u091B\u0964| \u092D\u0947|\u0930\u094D\u092F|\u0938\u092E\u094D|\u0924\u094D\u092A|\u0938\u093E\u092E|\u0930\u093F\u092F|\u091A\u093E\u0930|\u0928\u093F\u091C|\u0941\u0928 |\u0917\u093F |\u093E\u0917\u093F|\u0909\u0938\u0915| \u092E\u0924| \u0905\u092D|\u092A\u0942\u0930|\u0930 \u0924| \u0938\u0915|\u0938\u093E\u0930|\u0930\u093E\u0927|\u092A\u0930\u093E|\u0905\u092A\u0930|\u0941\u0915\u094D|\u091C\u0915\u094B| \u0909\u092A|\u0930\u093E |\u093E\u0930\u093E|\u094D\u0935\u093E|\u0935\u093F\u0927|\u094D\u0928 |\u093E \u0924|\u0928 \u0917|\u0923\u0915\u094B| \u092A\u093E| \u0926\u093F|\u0915 \u0930|\u0930 \u092A|\u0905\u0928\u094D|\u092D\u0947\u0926|\u093E\u0930\u092E|\u094B \u0906| \u0905\u0930|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093F\u092F |\u0937\u093E |\u093E\u091F |\u092C\u093E\u091F| \u092C\u093E|\u093F \u0930| \u091B\u0964|\u0924\u094D\u0935|\u0924 \u0938|\u0930\u0942 |\u091B \u0930|\u0930\u0915\u093E|\u0935\u093F\u0915|\u0930 \u0909|\u094B\u0917 |\u094D\u0926\u0947|\u0930\u093F\u0935|\u0938\u0915\u093F|\u0948 \u092A|\u0930\u0924\u093F|\u0905\u0928\u0941| \u0906\u0935|\u092F\u0941\u0915|\u093E \u0917|\u0928\u092E\u093E|\u092F\u094B\u0917|\u0917 \u0917|\u0915 \u0905|\u0926\u094D\u0935|\u094D\u0927 |\u0930\u0941\u0926| \u092C\u093F|\u0964 \u0938|\u0909\u0928\u0947|\u093E\u0928\u094D|\u093E \u092E|\u093F\u0915\u094B|\u0930\u094D\u0926|\u093E\u0930\u0940|\u094D\u0924\u0930|\u094B \u0939|\u0939\u093F\u0924| \u0926\u0947|\u0930\u093F\u0915|\u093E \u0915| \u0906\u0927|\u0930\u093E\u091C|\u0930\u094D\u092E|\u094D\u0923 |\u0930\u094D\u0923|\u093F \u0935|\u094D\u092F\u0935|\u0935\u093F\u091A|\u092C\u0948 |\u0938\u0939\u093F|\u0930\u094B\u091C|\u0930\u094D\u0938|\u0908 \u0909|\u094D\u092A |\u0930\u093E\u0924|\u0928\u093F\u0915|\u092E\u093F\u0915|\u091A\u094D\u091B|\u094D\u0925\u093E|\u0935\u093F\u0935|\u0915\u0924\u093E|\u0905\u092D\u093F|\u094D\u0927\u093E",mag:" \u0915\u0947|\u0915\u0947 |\u093E\u0930 | \u0939\u0908|\u0915\u093E\u0930|\u0908\u0964 |\u0939\u0908\u0964|\u093F\u0915\u093E|\u0947 \u0905|\u0927\u093F\u0915|\u0905\u0927\u093F| \u0905\u0927|\u0930 \u0939|\u0947 \u0915|\u0914\u0930 | \u0914\u0930|\u093E \u0915|\u0947 \u0938|\u0938\u092C | \u0938\u092C| \u0915\u0930|\u0947\u0902 |\u0925\u093E |\u092E\u0947\u0902| \u092E\u0947|\u0924\u0925\u093E| \u0924\u0925|\u093F\u0915 | \u0939\u094B| \u0938\u092E|\u0915\u094D\u0937|\u0928\u093E |\u092C \u0915|\u0930 \u0938| \u0938\u0902|\u093E \u0938|\u0915\u0930 | \u092D\u0940|\u0964 \u0938| \u0938\u093E| \u0938\u0947| \u0915\u093E| \u0905\u092A|\u094D\u0930\u093E|\u092A\u094D\u0930| \u092A\u094D|\u0938\u0947 |\u092D\u0940 | \u0915\u094B|\u0924 \u0915| \u092A\u0930|\u0930\u093E |\u0915 \u0939|\u092A\u0928 |\u0905\u092A\u0928| \u0938\u0915|\u092F\u093E |\u0924\u093F |\u0930 \u0915|\u0940 \u0915| \u092F\u093E|\u0915\u0930\u0947| \u091C\u093E|\u0930\u0947 | \u0913\u0915|\u094D\u0924 |\u0938\u0915 |\u0928\u094B |\u093E\u0928 |\u092E\u093E\u0928|\u0913\u0915\u0930|\u093E \u092A|\u0928 \u0915|\u0947\u0932 | \u0928\u093E|\u0964 \u0915|\u0930\u0915\u094D| \u0938\u094D|\u0939\u0940 |\u0939\u094B\u090F| \u090F\u0915|\u092A\u0930 |\u0926\u0940 |\u091F\u094D\u0930|\u0924\u093E |\u0935\u094D\u092F|\u0939\u0908 | \u0936\u093E|\u0947 \u0909| \u0926\u0947|\u0924\u094D\u0930|\u093E\u0926\u0940| \u0930\u093E| \u0939\u0940|\u0915\u093E\u0928|\u093F\u0924 |\u092E \u0915|\u0932 \u091C|\u093E\u092E |\u0940 \u0938|\u0947 \u092D|\u0928 \u0938|\u092E\u093E\u091C|\u0937\u094D\u091F|\u0937\u093E | \u0932\u0947|\u0915 \u0938|\u092C\u0947 |\u0935\u0947 |\u093E\u0935\u0947|\u092E\u093F\u0932|\u0930 \u092E|\u094D\u092F |\u093E \u0939|\u0932\u093E |\u092A\u094D\u0924|\u0928\u0942\u0928|\u093E\u0928\u0942|\u091C\u093E |\u0947\u0915\u0930|\u094D\u0937\u093E|\u094D\u0930\u0924|\u0902\u0924\u094D|\u0930 \u0914|\u094B\u0908 |\u0915\u094B\u0908|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937| \u092E\u093E|\u0930\u094B | \u091C\u0947|\u0915\u0930\u093E|\u094B\u090F |\u093E\u092A\u094D|\u0930\u093E\u092A|\u0938\u092E\u093E|\u0942\u0928 |\u094B \u0938|\u0938\u094D\u0935|\u094D\u0924\u093F|\u0938\u093E\u092E|\u094B\u0928\u094B|\u0915\u094B\u0928| \u0935\u094D|\u0930 \u0905|\u094D\u092E | \u0935\u093F| \u0938\u0939|\u0947 \u092E|\u0915\u094D\u0924|\u092F\u094B\u0917|\u0930 \u0935|\u0915\u093E\u092E|\u0932 \u0939| \u0928\u093F|\u0926\u0947\u0936|\u092A\u0942\u0930|\u0935\u093E\u0930| \u0907 |\u0902\u0930\u0915|\u0938\u0902\u0930|\u090F \u0915|\u0930 \u092A| \u0938\u0941|\u0924\u0902\u0924|\u0935\u0924\u0902|\u094D\u0935\u0924|\u093E \u092E|\u0935 \u0915|\u0947 \u0935|\u093E\u0925 |\u0938\u093E\u0925| \u0926\u094B|\u0939\u094B\u092C| \u092A\u093E|\u094B \u0915|\u0947 \u092C|\u094B\u0917 | \u0909\u092A|\u0938\u094D\u0924|\u092A\u0930\u093F|\u0928 \u092A|\u0947 \u0924|\u094D\u0924\u0930|\u0932\u0947\u0932|\u0947 \u0913|\u091A\u093E\u0939| \u091A\u093E|\u092F \u0915|\u0935\u093E |\u0947\u0936 |\u092F \u0938|\u0928 \u0939|\u0937\u0923 |\u093E \u092C|\u0964 \u0924|\u090F\u0915 |\u090F\u0932 |\u0940\u092F |\u0915\u0947\u0915|\u0947 \u0939|\u0930 \u0906|\u093F \u0915|\u0938\u094D\u0925|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093E\u092E\u093E|\u0930\u0940\u092F|\u094D\u0930\u0940|\u0924\u093F\u0915|\u093E\u0924\u093F| \u092C\u093F|\u091A\u093E\u0930|\u0947 \u0906|\u093E\u0938 | \u0909\u091A|\u093E \u0924|\u092F\u0915\u094D|\u094D\u092F\u0915|\u093F\u0932 |\u092E\u092F |\u0938\u092E\u092F|\u0936\u093E\u0926|\u092A\u092F\u094B|\u0909\u092A\u092F|\u0947 \u0916|\u0930\u093F\u0935| \u092A\u0942|\u0947 \u0932|\u0947 \u091A|\u094C\u0928\u094B|\u0915\u094C\u0928| \u0915\u094C|\u0902 \u0915|\u0938\u0902\u0917|\u0928 \u0926|\u0902 \u0938|\u0923 \u092A|\u094D\u0937\u0923|\u0930 \u0928|\u0947 \u0928|\u094B \u092D|\u0915\u0930\u094B|\u093E \u0914|\u0930\u0924\u093E|\u093E\u0935 |\u092D\u093E\u0935|\u0915 \u0914|\u0930\u094D\u092E|\u094B\u0938\u0930|\u0926\u094B\u0938|\u0923 \u0915|\u0947 \u092A|\u0928 \u0914|\u092C \u0939|\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u093E\u092C\u0947|\u0928\u093F\u092F|\u091A\u093F\u0924|\u0909\u091A\u093F|\u093F\u0924\u094D|\u0917 \u0915|\u0947\u0964 |\u0924 \u0938|\u0940 \u0936|\u0902 \u0936|\u090F\u0915\u0930|\u0964 \u090F|\u0924\u0928 | \u0913 |\u0930\u0940 |\u094D\u0930 |\u091C\u0947 |\u0915 \u0915| \u0938\u0940|\u0938\u0928 |\u093F\u0935\u093E| \u0905\u0928|\u0942\u0930\u093E| \u092C\u091A|\u090F\u0964 | \u092C\u0947|\u0924 \u0939| \u0924\u0915| \u092E\u093F|\u0927\u093E\u0930|\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u093F\u0932\u093E|\u094D\u0935\u093E|\u093F \u092E| \u0906\u0926|\u0928\u0947 |\u0915\u090F\u0932| \u0915\u090F|\u094D\u092F\u093E"}},bh=2048,Eh=10,y4=300,xr={}.hasOwnProperty,ia,wr={};for(ia in Ni)if(xr.call(Ni,ia)){let e=Ni[ia],t;wr[ia]={};for(t in e)if(xr.call(e,t)){let n=e[t].split("|"),u={},a=n.length;for(;a--;)u[n[a]]=a;wr[ia][t]=u}}function T4(e,t={}){let n=[...t.whitelist||[],...t.only||[]],u=[...t.blacklist||[],...t.ignore||[]],a=t.minLength!==null&&t.minLength!==void 0?t.minLength:Eh;if(!e||e.length<a)return Ii();e=e.slice(0,bh);let r=Th(e,hh);return!r[0]||!(r[0]in wr)?!r[0]||r[1]===0||!x4(r[0],n,u)?Ii():w4(r[0]):yh(e,wh(E4(e),wr[r[0]],n,u))}function yh(e,t){let n=t[0][1],u=e.length*y4-n,a=-1;for(;++a<t.length;)t[a][1]=1-(t[a][1]-n)/u||0;return t}function Th(e,t){let n=-1,u,a;for(a in t)if(xr.call(t,a)){let r=xh(e,t[a]);r>n&&(n=r,u=a)}return[u,n]}function xh(e,t){let n=e.match(t);return(n?n.length:0)/e.length||0}function wh(e,t,n,u){t=vh(t,n,u);let a=[],r;if(t)for(r in t)xr.call(t,r)&&a.push([r,Ch(e,t[r])]);return a.length===0?Ii():a.sort(Ah)}function Ch(e,t){let n=0,u=-1;for(;++u<e.length;){let a=e[u],r=y4;a[0]in t&&(r=a[1]-t[a[0]]-1,r<0&&(r=-r)),n+=r}return n}function vh(e,t,n){if(t.length===0&&n.length===0)return e;let u={},a;for(a in e)x4(a,t,n)&&(u[a]=e[a]);return u}function x4(e,t,n){return t.length===0&&n.length===0?!0:(t.length===0||t.includes(e))&&!n.includes(e)}function Ii(){return w4("und")}function w4(e){return[[e,1]]}function Ah(e,t){return e[1]-t[1]}var kh=/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,Dh=/[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g,Sh=/[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,Ph=/(\s+)|([\p{P}\p{S}])/gu,Fh=[["zh-CN",kh],["ja",Dh],["ko",Sh]];function Cr(e){if(!e)return"auto";let t="auto",n=0,u=0,a=e.match(Ph);a&&(u=a.reduce((o,i)=>o+i.length,0));let r=e.length-u;for(let o of Fh){let i=o[1],s=o[0],l=e.match(i),c=l?l.length:0;c>n&&(n=c,t=s)}return n*2.5/r>.5?t:"auto"}var C4=new Map([["afr","af"],["amh","am"],["arb","ar"],["azj","az"],["bel","be"],["bul","bg"],["ben","bn"],["bos","bs"],["cat","ca"],["ceb","ceb"],["ces","cs"],["dan","da"],["deu","de"],["ell","el"],["eng","en"],["epo","eo"],["spa","es"],["est","et"],["fas","fa"],["fin","fi"],["fra","fr"],["gax","ga"],["glg","gl"],["guj","gu"],["hau","ha"],["heb","he"],["hin","hi"],["hrv","hr"],["hun","hu"],["hye","hy"],["ind","id"],["ibo","ig"],["ita","it"],["jpn","ja"],["jav","jw"],["kat","ka"],["kaz","kk"],["khm","km"],["kan","kn"],["kor","ko"],["ckb","ku"],["lao","lo"],["lit","lt"],["lav","lv"],["min","mi"],["mkd","mk"],["mal","ml"],["mar","mr"],["mya","my"],["nep","ne"],["nld","nl"],["nob","no"],["nya","ny"],["pan","pa"],["pol","pl"],["pbu","ps"],["por","pt"],["ron","ro"],["rus","ru"],["sin","si"],["slk","sk"],["slv","sl"],["sna","sn"],["som","so"],["als","sq"],["srp","sr"],["sun","su"],["swe","sv"],["swh","sw"],["tam","ta"],["tel","te"],["tgk","tg"],["tha","th"],["toi","to"],["tur","tr"],["ukr","uk"],["urd","ur"],["uzn","uz"],["vie","vi"],["xho","xh"],["ydd","yi"],["yor","yo"],["cmn","zh-CN"],["zul","zu"]]);function v4(e,t){if(!e)return"auto";!t&&t!==0&&(t=50);let n=Cr(e);if(n!=="auto")return n;let u={minLength:t,whitelist:[...C4.keys()]},a=T4(e,u);if(a&&a.length>0){if(a.length>1&&a[0][0]!=="eng"&&a[1][0]==="eng"&&a[1][1]>.6)return"en";let[r]=a[0],o=C4.get(r);if(o)return o}return"auto"}var Xe=class extends Error{constructor(n,u,a){super(u);this.name=n,a&&(this.details=a)}};async function vr(e){let t;if(e&&e.retry&&e.retry>0)try{t=await li(A4.bind(null,e),{multiplier:2,maxAttempts:e.retry})}catch(n){throw n&&n.name==="RetryError"&&n.cause?n.cause:n}else t=await A4(e);return t}async function A4(e){e.body;let{url:t,responseType:n,...u}=e;n||(n="json"),u={mode:"cors",...u};let a=!0;e.fetchPolyfill&&(a=!1);let r=e.fetchPolyfill||fetch,o=12e4;if(e.timeout&&(o=e.timeout),a){let s=new AbortController,l=s.signal;setTimeout(()=>{s.abort()},o),u.signal=l}let i=await r(t,u);if(i.ok&&i.status>=200&&i.status<400){if(n==="json")return await i.json();if(n==="text")return await i.text();if(n==="raw"){let s=await i.text(),l=Object.fromEntries([...i.headers.entries()]),c=i.url;return c||(i.headers.get("X-Final-URL")?c=i.headers.get("X-Final-URL"):c=t),{body:s,headers:l,status:i.status,statusText:i.statusText,url:c}}else if(n==="stream"){let s="",l;if(i.body&&i.body instanceof ReadableStream)for await(let c of Lh(i.body)){let d=new TextDecoder().decode(c);s+=d;let g;for(;(g=s.indexOf(`
`))>=0;){let m=s.slice(0,g).trim();if(s=s.slice(g+1),m.startsWith("event:")||m==="")continue;let f="";if(m.startsWith("data:")&&(f=m.slice(5).trim()),f==="[DONE]")break;let w;try{w=JSON.parse(f??"")}catch(y){F.debug("json error",y);continue}l=w}}return l}}else{let s;try{s=await i.text()}catch(c){F.error("parse response failed",c)}s&&F.error("fail response",s);let l="";throw s&&(l=s.slice(0,150)),new Xe("fetchError",i.status+": "+(i.statusText||"")+l,s)}}async function*Lh(e){let t=e.getReader();try{for(;;){let{done:n,value:u}=await t.read();if(n)return;yield u}}finally{t.releaseLock()}}function Cn(e,t){var n=(e&65535)+(t&65535),u=(e>>16)+(t>>16)+(n>>16);return u<<16|n&65535}function Bh(e,t){return e<<t|e>>>32-t}function kr(e,t,n,u,a,r){return Cn(Bh(Cn(Cn(t,e),Cn(u,r)),a),n)}function lt(e,t,n,u,a,r,o){return kr(t&n|~t&u,e,t,a,r,o)}function ct(e,t,n,u,a,r,o){return kr(t&u|n&~u,e,t,a,r,o)}function dt(e,t,n,u,a,r,o){return kr(t^n^u,e,t,a,r,o)}function gt(e,t,n,u,a,r,o){return kr(n^(t|~u),e,t,a,r,o)}function Ar(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;var n,u,a,r,o,i=1732584193,s=-271733879,l=-1732584194,c=271733878;for(n=0;n<e.length;n+=16)u=i,a=s,r=l,o=c,i=lt(i,s,l,c,e[n],7,-680876936),c=lt(c,i,s,l,e[n+1],12,-389564586),l=lt(l,c,i,s,e[n+2],17,606105819),s=lt(s,l,c,i,e[n+3],22,-1044525330),i=lt(i,s,l,c,e[n+4],7,-176418897),c=lt(c,i,s,l,e[n+5],12,1200080426),l=lt(l,c,i,s,e[n+6],17,-1473231341),s=lt(s,l,c,i,e[n+7],22,-45705983),i=lt(i,s,l,c,e[n+8],7,1770035416),c=lt(c,i,s,l,e[n+9],12,-1958414417),l=lt(l,c,i,s,e[n+10],17,-42063),s=lt(s,l,c,i,e[n+11],22,-1990404162),i=lt(i,s,l,c,e[n+12],7,1804603682),c=lt(c,i,s,l,e[n+13],12,-40341101),l=lt(l,c,i,s,e[n+14],17,-1502002290),s=lt(s,l,c,i,e[n+15],22,1236535329),i=ct(i,s,l,c,e[n+1],5,-165796510),c=ct(c,i,s,l,e[n+6],9,-1069501632),l=ct(l,c,i,s,e[n+11],14,643717713),s=ct(s,l,c,i,e[n],20,-373897302),i=ct(i,s,l,c,e[n+5],5,-701558691),c=ct(c,i,s,l,e[n+10],9,38016083),l=ct(l,c,i,s,e[n+15],14,-660478335),s=ct(s,l,c,i,e[n+4],20,-405537848),i=ct(i,s,l,c,e[n+9],5,568446438),c=ct(c,i,s,l,e[n+14],9,-1019803690),l=ct(l,c,i,s,e[n+3],14,-187363961),s=ct(s,l,c,i,e[n+8],20,1163531501),i=ct(i,s,l,c,e[n+13],5,-1444681467),c=ct(c,i,s,l,e[n+2],9,-51403784),l=ct(l,c,i,s,e[n+7],14,1735328473),s=ct(s,l,c,i,e[n+12],20,-1926607734),i=dt(i,s,l,c,e[n+5],4,-378558),c=dt(c,i,s,l,e[n+8],11,-2022574463),l=dt(l,c,i,s,e[n+11],16,1839030562),s=dt(s,l,c,i,e[n+14],23,-35309556),i=dt(i,s,l,c,e[n+1],4,-1530992060),c=dt(c,i,s,l,e[n+4],11,1272893353),l=dt(l,c,i,s,e[n+7],16,-155497632),s=dt(s,l,c,i,e[n+10],23,-1094730640),i=dt(i,s,l,c,e[n+13],4,681279174),c=dt(c,i,s,l,e[n],11,-358537222),l=dt(l,c,i,s,e[n+3],16,-722521979),s=dt(s,l,c,i,e[n+6],23,76029189),i=dt(i,s,l,c,e[n+9],4,-640364487),c=dt(c,i,s,l,e[n+12],11,-421815835),l=dt(l,c,i,s,e[n+15],16,530742520),s=dt(s,l,c,i,e[n+2],23,-995338651),i=gt(i,s,l,c,e[n],6,-198630844),c=gt(c,i,s,l,e[n+7],10,1126891415),l=gt(l,c,i,s,e[n+14],15,-1416354905),s=gt(s,l,c,i,e[n+5],21,-57434055),i=gt(i,s,l,c,e[n+12],6,1700485571),c=gt(c,i,s,l,e[n+3],10,-1894986606),l=gt(l,c,i,s,e[n+10],15,-1051523),s=gt(s,l,c,i,e[n+1],21,-2054922799),i=gt(i,s,l,c,e[n+8],6,1873313359),c=gt(c,i,s,l,e[n+15],10,-30611744),l=gt(l,c,i,s,e[n+6],15,-1560198380),s=gt(s,l,c,i,e[n+13],21,1309151649),i=gt(i,s,l,c,e[n+4],6,-145523070),c=gt(c,i,s,l,e[n+11],10,-1120210379),l=gt(l,c,i,s,e[n+2],15,718787259),s=gt(s,l,c,i,e[n+9],21,-343485551),i=Cn(i,u),s=Cn(s,a),l=Cn(l,r),c=Cn(c,o);return[i,s,l,c]}function k4(e){var t,n="",u=e.length*32;for(t=0;t<u;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function ji(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var u=e.length*8;for(t=0;t<u;t+=8)n[t>>5]|=(e.charCodeAt(t/8)&255)<<t%32;return n}function _h(e){return k4(Ar(ji(e),e.length*8))}function Mh(e,t){var n,u=ji(e),a=[],r=[],o;for(a[15]=r[15]=void 0,u.length>16&&(u=Ar(u,e.length*8)),n=0;n<16;n+=1)a[n]=u[n]^909522486,r[n]=u[n]^1549556828;return o=Ar(a.concat(ji(t)),512+t.length*8),k4(Ar(r.concat(o),512+128))}function D4(e){var t="0123456789abcdef",n="",u,a;for(a=0;a<e.length;a+=1)u=e.charCodeAt(a),n+=t.charAt(u>>>4&15)+t.charAt(u&15);return n}function zi(e){return unescape(encodeURIComponent(e))}function S4(e){return _h(zi(e))}function Rh(e){return D4(S4(e))}function P4(e,t){return Mh(zi(e),zi(t))}function Oh(e,t){return D4(P4(e,t))}function vn(e,t,n){return t?n?P4(t,e):Oh(t,e):n?S4(e):Rh(e)}function F4(e,t,n){let u=Nh(e,t),a=[],r={from:e[0].from,fromByClient:e[0].fromByClient,to:e[0].to,tempSentences:[],url:e[0].url};for(let o of u)(r.tempSentences.reduce((s,l)=>s+l.text.length,0)+o.text.length>t||r.tempSentences.length>=n)&&(a.push(r),r={fromByClient:r.fromByClient,from:o.from,to:o.to,tempSentences:[],url:o.url}),(r.from!==o.from||r.to!==o.to)&&(r.tempSentences.length>0?(a.push(r),r={fromByClient:r.fromByClient,from:o.from,to:o.to,tempSentences:[],url:o.url}):(r.from=o.from,r.to=o.to)),r.tempSentences.push(o);return r.tempSentences.length>0&&a.push(r),a}function Nh(e,t){let n=[],u=[];for(let a=0;a<e.length;a++){let r=e[a],{from:o,to:i,text:s,url:l}=r,c=0,d=s.split(/\r?\n/),g=[],m="";for(let f=0;f<d.length;f++){let w=d[f];if(w.trim()===""){g.length>0?f<d.length-1&&(g[g.length-1].suffix+=`
`):m+=`
`;continue}else if(w.length>t){let p=[];Ui(w,t,p);for(let _=0;_<p.length;_++){let M=p[_],{text:A,prefix:S,suffix:E}=M;c++,g.push({from:o,to:i,text:A,prefix:S,suffix:E,index:a,url:l,sentenceTotalParts:c,partIndex:c-1}),u[a]=c}}else c++,g.push({text:w,prefix:m,suffix:"",from:o,to:i,index:a,url:l,sentenceTotalParts:c,partIndex:c-1}),u[a]=c;g.length>0&&f<d.length-1&&(g[g.length-1].suffix+=`
`)}n.push(...g)}for(let a=0;a<n.length;a++){let r=n[a],{index:o}=r;r.sentenceTotalParts=u[o]}return n}function An(e,t){let n=Hn(e),u=Hn(t),a=n===u;return a?!0:(a=n.startsWith("zh")&&u.startsWith("zh"),a)}function Ui(e,t,n){let a=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((r,o)=>{let i=e.lastIndexOf(o,t);return i>r?i:r},-1);if(a===-1){let r=e.slice(0,t);if(r&&!r.trim())return;n.push({text:r,prefix:"",suffix:""}),e.length>t&&Ui(e.slice(t),t,n)}else{let r=e.slice(0,a+1);if(r&&r.trim()==="")return;r.startsWith(" ")?n.push({text:r.slice(1),prefix:" ",suffix:""}):n.push({text:r,prefix:"",suffix:""}),a+1<e.length&&Ui(e.slice(a+1),t,n)}return n}function Ot(e,t){let n=new URL(e);t.startsWith("http")||(t="https://"+t);let u=new URL(t);return u.pathname!=="/"?u.toString():(n.host=u.host,u.port&&(n.port=u.port),u.protocol&&(n.protocol=u.protocol),u.username&&(n.username=u.username),u.password&&(n.password=u.password),n.toString())}function Hi(e,t){let n=on[e],u=t.config.translationServices[e]||{},a=!0,r=n.allProps||[],o=[],i=[];if(r.length>0){let s=r.filter(l=>l.required);if(s.length>0){for(let l of s)if(!u[l.name]&&!l.default){a=!1;break}}r.forEach(l=>{l.optional?i.push(l):o.push(l)})}return{...n,id:e,selected:t.translationService===e,ok:a,config:u,props:n.props||[],allProps:r,optionalProps:i,explicitProps:o}}var L4=e=>{let{config:t}=e,n=t.alpha,u=t.beta,a=t.canary,r=t.debug;return Object.keys(on).filter(i=>{let s=on[i];if(i.startsWith("mock"))return r?!0:i===e.config.translationService;if(i===e.config.translationService)return!0;let l=!!s.canary,c=!!s.alpha,d=!!s.beta;return i===e.translationService||l&&a||c&&(n||a)||d&&(u||n||a)?!0:!c&&!d&&!l}).map(i=>Hi(i,e))};function St(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))}var wu=[];async function Dr(e,t){return await new Promise((n,u)=>{let a=e,r=1,o=indexedDB.open(a,r);o.onsuccess=i=>{n(o.result)},o.onerror=i=>{u()},o.onupgradeneeded=i=>{let s=o.result,l=t||"cache";s.createObjectStore(l,{keyPath:"key"})}})}async function B4(e){let t=`${Ce}-${e.service}@${e.from}->${e.to}`;return await jh(t,e)}async function _4(e){let t=vn(e.originalText),n=`${Ce}-${e.service}@${e.from}->${e.to}`;return await Ih(n,t)}async function Ih(e,t){let n=await Dr(e);return await new Promise((u,a)=>{if(!n)return a();let r="cache",i=n.transaction([r],"readonly").objectStore(r).get(t);i.onsuccess=s=>{n.close();let l=i.result;u(l)},i.onerror=s=>{n.close(),a()}})}async function jh(e,t){let n=await Dr(e);return(await Uh()).includes(e)||await zh(e),await new Promise(a=>{if(!n)return a(!1);let r="cache",i=n.transaction([r],"readwrite").objectStore(r).put(t);i.onsuccess=s=>{n.close(),a(!0)},i.onerror=s=>{n.close(),a(!1)}})}async function zh(e){let t="cache_list",n=await Dr(Ce+"-cacheList",t),a=n.transaction([t],"readwrite").objectStore(t).put({key:e});a.onsuccess=r=>{n.close(),wu.push(e)},a.onerror=r=>{n.close()}}async function Uh(){if(wu&&wu.length>0)return wu;let e=await Dr(Ce+"-cacheList","cache_list");return wu=await new Promise(t=>{let n="cache_list",a=e.transaction([n],"readonly").objectStore(n).getAllKeys();a.onsuccess=r=>{e.close(),t(a.result)},a.onerror=r=>{e.close(),t([])}}),wu}var M4=pe+"StoreKey_";function Sr(e,t){let n=M4+e;return I.storage.local.get(n).then(u=>u[n]===void 0?t:u[n])}function R4(e,t){let n=M4+e;return I.storage.local.set({[n]:t})}var O4=pe+"SyncStoreKey_";function Wi(e,t){let n=O4+e;return I.storage.sync.get(n).then(u=>u[n]===void 0?t:u[n])}function Cu(e,t){let n=O4+e;return I.storage.sync.set({[n]:t})}var Pr={manifest_version:3,name:"__MSG_brandName__",description:"__MSG_brandDescription__",version:"0.6.13",default_locale:"en",background:{service_worker:"background.js"},web_accessible_resources:["styles/inject.css","pdf/index.html","ebook/index.html","ebook/index.html","ebook/make/index.html"],content_scripts:[{matches:["<all_urls>","file:///*","*://*/*"],js:["content_script.js"],run_at:"document_end",all_frames:!0}],commands:{toggleTranslatePage:{suggested_key:{default:"Alt+A"},description:"__MSG_toggleTranslatePage__"},toggleTranslateTheWholePage:{suggested_key:{default:"Alt+W"},description:"__MSG_toggleTranslateTheWholePage__"},toggleOnlyTransation:{description:"__MSG_toggleOnlyTransation__"},toggleTranslateToThePageEndImmediately:{description:"__MSG_toggleTranslateToThePageEndImmediately__"},toggleTranslateTheMainPage:{description:"__MSG_toggleTranslateTheMainPage__"},toggleTranslationMask:{description:"__MSG_toggleTranslationMask__"}},options_page:"options.html",options_ui:{page:"options.html",open_in_tab:!0,browser_style:!1},permissions:["storage","activeTab","contextMenus","webRequest","webRequestBlocking","declarativeNetRequestWithHostAccess","declarativeNetRequestFeedback","declarativeNetRequest"],host_permissions:["<all_urls>"],declarative_net_request:{rule_resources:[{id:"ruleset_1",enabled:!0,path:"rules/request_modifier_rule.json"}]},action:{default_popup:"popup.html",default_icon:{"32":"icons/32.png","48":"icons/48.png","64":"icons/64.png","128":"icons/128.png","256":"icons/256.png"}},browser_action:{default_icon:"icons/32.png",default_popup:"popup.html",theme_icons:[{dark:"icons/32.png",light:"icons/dark-32.png",size:32},{dark:"icons/48.png",light:"icons/dark-48.png",size:48},{dark:"icons/64.png",light:"icons/dark-64.png",size:64},{dark:"icons/128.png",light:"icons/dark-128.png",size:128},{dark:"icons/256.png",light:"icons/dark-256.png",size:256}]},icons:{"32":"icons/32.png","48":"icons/48.png","64":"icons/64.png","128":"icons/128.png","256":"icons/256.png"},browser_specific_settings:{gecko:{id:"{5efceaa7-f3a2-4e59-a54b-85319448e305}",strict_min_version:"63.0"}},key:"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7JPn78UfqI3xIIOPPLPS74UTzLfJL1gQM8hlk/deKWvFP/WqUBnPJPdhQeF45sFpI1OjO70nFqdATT4/RwYAiZK7G/E6m27MDVnhHjszfzReOuoAEn9J3RnE2xEx5pFhRFcelhnwTTLrrn90aaPcaMtNsgXtZA1Ggz/SnX9I4ZygqpJYjx3Ql2t6SyNK222oRQiKMT93Rrjgyc8RFA7FKXsWglG0TvseRjbmG5Jk5gDx+2/YTcWGqCDotQnWnkPj/dBO23UAX7IpyJK3FGYdkvWFih6OVClHIIWY8mfCjjwSGbXNQNesaa9F2hrzBZ5MRTj4m7yj76mGxuPHPIE8mwIDAQAB"};function kn(){return Pr.version}var N4="G-MKMD9LWFTR";async function Ht(e,t,n){try{let u=tt(),a=me(),r=rt(),o=u.PROD==="1",i=`report_${e}`,s=e.endsWith("_daily");if(s){if(r)return;let k=await Sr(i,0),T=Fr(new Date(k)),D=Date.now(),L=Fr(new Date(D));if(T===L)return;await R4(i,D)}else if(!n.config.telemetry)return;let l="sitc4WmvShWYwfU0dANM3Q",c=await Wi("fakeUserId","");c||(c=await Sr("fakeUserId",""),c&&await Cu("fakeUserId",c));let d=kn(),g=new Date,m=await Wi("installedAt","");m||(m=await Sr("installedAt",""),m&&await Cu("installedAt",m)),c?m||(m=new Date(0).toISOString(),await Cu("installedAt",m)):(c=Wh(32),await Cu("fakeUserId",c)),m||(m=g.toISOString(),await Cu("installedAt",m));let f=new Date(m),w=Fr(f),y=Fr(g),p=w===y,_=g.getTime()-f.getTime()<7*24*60*60*1e3,M=`https://www.google-analytics.com/mp/collect?measurement_id=${N4}&api_secret=${l}`;o||(M=`https://www.google-analytics.com/debug/mp/collect?measurement_id=${N4}&api_secret=${l}`);let A=tr.parse(window.navigator.userAgent),S=t.map(k=>{let T=k.params||{};A.os&&(T.os_name=A.os.name||"unknown",T.os_version=A.os.version||"unknown",T.os_version_name=A.os.versionName||"unknown"),A.browser&&(T.browser_name=A.browser.name||"unknown",T.browser_version=A.browser.version||"unknown"),A.platform&&(T.platform_type=A.platform.type||"unknown"),A.engine&&(T.engine_name=A.engine.name||"unknown",T.engine_version=A.engine.version||"unknown"),n.translationService&&(T.translation_service=n.translationService),n.targetLanguage&&(T.target_language=n.targetLanguage),n.config.interfaceLanguage&&(T.interface_language=n.config.interfaceLanguage),d&&(T.version=d),n.config.translationTheme&&(T.translation_theme=n.config.translationTheme),n.config.alpha&&(T.alpha=n.config.alpha.toString()),u.INSTALL_FROM&&(T.install_from=u.INSTALL_FROM),n.config.beta&&(T.beta=n.config.alpha.toString()),n.config.translationArea&&(T.translation_area=n.config.translationArea),w&&(T.install_day=qh(f)),n.config.translationMode&&(T.translation_mode=n.config.translationMode),T.userscript=a.toString(),p?T.is_new_user_today="1":T.is_new_user_today="0",_?T.is_new_user_this_week="1":T.is_new_user_this_week="0",n.config.tempTranslateDomainMinutes?T.temp_translate_domain_minutes=n.config.tempTranslateDomainMinutes.toString():T.temp_translate_domain_minutes="0";let D="html";if(n.rule.isEbook?D="ebookReader":n.rule.isPdf?D="pdfReader":n.rule.isEbookBuilder?D="ebookBuilder":n.rule.isSubtitleBuilder&&(D="subtitleBuilder"),T.page_type=D,r?T.main_frame=0:T.main_frame=1,!s){let L=n.url;try{let U=new URL(L);T.site_host=U.hostname}catch{T.site_host="unknown"}n.sourceLanguage&&(T.source_language=n.sourceLanguage)}return{...k,params:T}}),E=await G({responseType:"text",url:M,method:"POST",body:JSON.stringify({client_id:c,user_id:c,events:S})})}catch{}}function Wh(e){let t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",u=n.length,a=0;for(;a<e;)t+=n.charAt(Math.floor(Math.random()*u)),a+=1;return t}function Fr(e){let n=e.toLocaleString("en-US",{timeZone:"Asia/Shanghai"}).split(" ")[0];return n.endsWith(",")&&(n=n.slice(0,-1)),n}function qh(e){try{let n=e.toLocaleString("en-US",{timeZone:"Asia/Shanghai"}).split(" ")[0];n.endsWith(",")&&(n=n.slice(0,-1));let[u,a,r]=n.split("/");return n=`${r}-${u}-${a}`,n}catch{return"unknown"}}function I4(e,t){let n=t.matches||[],u=t.excludeMatches||[];if(u&&!Array.isArray(u)&&(u=[u]),n&&!Array.isArray(n)&&(n=[n]),u.length>0){if(u.includes(e)||u.includes("<all>"))return!1;for(let a of u)if(a.includes("*")&&new RegExp(a).test(e))return!1}if(n.length===0)return!1;if(n.length>0){if(n.includes(e)||n.includes("<all>"))return!0;for(let a of n)if(a.includes("*")&&new RegExp(a).test(e))return!0}return!1}var it=class{constructor(t){this.strictTicks=[];this.options=t,this.setOptions(t)}setOptions(t){t&&(t.interval!==void 0&&(this.options.interval=Number(t.interval)),t.limit!==void 0&&(this.options.limit=Number(t.limit)))}wait(){return new Promise((t,n)=>{setTimeout(t,this.getDelay())})}getDelay(){let t=this.strictTicks,n=this.options.limit,u=this.options.interval,a=Date.now();if(t.length<n)return t.push(a),0;let r=t.shift()+u;return a>=r?(t.push(a),0):(t.push(r),r-a)}};function Dn(e){return e!=null}function U4(e,t,n){return`${e.type}#${t}#${n}`}function H4(e,t,n,u,a){return{body:a,id:u,type:U4(e,t,n)}}function Kh(e,t,n,u){return{id:n,response:u,type:U4(e,"ask",t)}}function W4(e,t,n,u){if(Dn(u)){let a=u.type;if(Dn(a)&&Dn(u.body)){let[r,o,i]=a.split("#");return r===e.type&&o===t&&i===n}else return!1}else return!1}function $h(e,t,n){if(Dn(n)){let u=n.type;if(Dn(u)&&Dn(n.response)){let[a,r,o]=u.split("#");return a===e.type&&r==="ask"&&o===t}else return!1}else return!1}function Gh(e){e.forEach(([t,n])=>t.removeEventListener("message",n)),e.length=0}function Vh(e,t,n,u){return new Promise(a=>{let r=o=>{let i=o.data;$h(t,n,i)&&i.id===u&&(e.removeEventListener("message",r),a(i.response))};e.addEventListener("message",r)})}function Jh(e,t,n,u){let a=r=>{let o=r.data;W4(t,"tell",n,o)&&u(o.body)};return e.addEventListener("message",a),[e,a]}function j4(e,t,n,u,a,r){let o=async i=>{let s=i.data;if(W4(n,"ask",u,s)){let l=await r(s.body);t=i.source,t.postMessage(Kh(n,u,s.id,l),i.origin)}};return e.addEventListener("message",o),[e,o]}function Yh(e,t,n,u,a){let r=Math.random().toString();return e.postMessage(H4(t,"tell",n,r,u),a)}async function z4(e,t,n,u,a,r,o){let i=Math.random().toString(),s=new Promise(async(l,c)=>{let d=setTimeout(()=>c(new Error(`Failed to get response within ${o}ms`)),o),g=await Vh(e,n,u,i);clearTimeout(d),l(g)});return t.postMessage(H4(n,"ask",u,i,a),r),s}var en=class{constructor(t,n,u=window,a="*"){this.protocol=t;this.targetWindow=n;this.thisWindow=u;this.targetOrigin=a;this.listeners=[];j4(u,n,this.getSystemProtocol("ping"),"ping",a,()=>Promise.resolve({}))}static async connect(t,n=10,u=500){for(let a=0;a<=n;a++)try{return await t.ping({timeout:u}),t}catch{continue}throw new Error(`Could not connect on protocol ${t.protocol.type} after ${n*u}ms`)}static parent(t,n,u="*",a=window){let r=n.contentWindow;if(Dn(r))return new en(t,r,a,u);throw new Error("iframe.contentWindow was null")}static iframe(t,n="*",{thisWindow:u=window,targetWindow:a=window.parent}={}){return new en(t,a,u,n)}static rootIframe(t,n="*",{thisWindow:u=window}={}){return new en(t,null,u,n)}getSystemProtocol(t){return{type:`system|${t}`}}async ping({timeout:t=1e4}){await z4(this.thisWindow,this.targetWindow,this.getSystemProtocol("ping"),"ping",{data:{},payload:{}},this.targetOrigin,t)}handleTell(t,n){this.listeners.push(Jh(this.thisWindow,this.protocol,t,n))}tell(t,n){Yh(this.targetWindow,this.protocol,t,n,this.targetOrigin)}handleAsk(t,n){this.listeners.push(j4(this.thisWindow,this.targetWindow,this.protocol,t,this.targetOrigin,n))}ask(t,n,u=1e4){if(this.targetWindow)return z4(this.thisWindow,this.targetWindow,this.protocol,t,n,this.targetOrigin,u);throw new Error("target window is requried")}destroy(){Gh(this.listeners)}};var Xh;function Lr(){return Xh}var Qh=new it({limit:7,interval:1250}),Zh={tencent:new it({limit:3,interval:1350}),baidu:new it({limit:1,interval:1550}),strict:new it({limit:1,interval:1050}),d:new it({limit:1,interval:1050}),youdao:new it({limit:5,interval:1050}),you:new it({limit:5,interval:1050}),cai:new it({limit:5,interval:1050}),google:new it({limit:10,interval:1050}),deepl:new it({limit:10,interval:1050}),transmart:new it({limit:30,interval:1050}),papago:new it({limit:3,interval:1150}),openai:new it({limit:10,interval:1300}),chatgpt:new it({limit:1,interval:1350})};function sa(e){return Zh[e]||Qh}async function q4(e){if(rt()){let n=Lr();if(n)try{return(await n.ask("getRateLimitDelay",{key:e})).value}catch(u){return F.error("can not comunicate with root frame, use strict limiter",u),sa("strict").getDelay()}else return sa("strict").getDelay()}else return sa(e).getDelay()}async function K4(e,t){if(!rt()){let u=sa(e);t&&u.setOptions(t)}}async function $4(e){let t=e.key;return{value:sa(t).getDelay()}}var re=class{constructor(t,n,u){this.maxTextLength=1800;this.isSupportList=!0;this.maxTextGroupLength=200;this.serviceConfig=t,this.generalConfig=n,this.translationOptions=u}async init(){}getMaxTextGroupLength(){return this.maxTextGroupLength}getDefaultRateLimit(){return null}translate(t){throw new Error("Not implemented")}translateList(t){throw new Error("Not implemented")}async multipleTranslate(t,n,u){if(t.sentences.length===0)return{sentences:[]};let{sentences:a}=t,r=[],o=null,i=new Set;for(let y of a)y.from&&y.from!=="auto"&&i.add(y.from);let s=!1;i.size>1&&(s=!0);let l=this.maxTextLength;this.serviceConfig&&this.serviceConfig.maxTextLengthPerRequest&&(l=this.serviceConfig.maxTextLengthPerRequest);let c=this.maxTextGroupLength;this.serviceConfig&&this.serviceConfig.maxTextGroupLengthPerRequest&&(c=this.serviceConfig.maxTextGroupLengthPerRequest);try{r=F4(a,l,c)}catch(y){if(u)for(let p=0;p<a.length;p++){let _=a[p];u(y,null,_)}throw y}F.debug("tempSentenceGroups",r.map(y=>y));let d=[],g=[],m=(y,p,_)=>{let M=p.translatedTexts[0];g[y]||(g[y]=p,g[y].translatedTexts=Array(p.sentenceTotalParts).fill(null)),g[y].translatedTexts[p.partIndex]=M;let A=g[y],S=0;for(let E=0;E<A.sentenceTotalParts;E++)A.translatedTexts[E]!==null&&(S+=1);if(S===A.sentenceTotalParts){let E=A.translatedTexts.join(""),k={...A.sentence,text:E};p.callback&&p.callback(null,k,p.sentence)}},f={...this.getDefaultRateLimit()},w=this.serviceConfig;w&&w.limit&&(f.limit=Number(w.limit)),w.interval&&(f.interval=Number(w.interval));for(let y=0;y<r.length;y++){let p=r[y],_=p.url,M=async()=>{let A=await q4(this.translationOptions.translationService);await Yu(A||0);let S=p.from;if(s&&(S="auto"),p.fromByClient&&p.fromByClient!=="auto"&&(S=p.fromByClient),this.isSupportList)return{...await this.translateList({text:p.tempSentences.map(k=>k.text),from:S,to:p.to,url:_,options:n}),sourceTempSentences:p.tempSentences};{let E=zl;this.serviceConfig&&this.serviceConfig.translationTextSeparator&&(E=this.serviceConfig.translationTextSeparator);let k=null;this.serviceConfig&&this.serviceConfig.newlinePlaceholderDelimiters&&(k=this.serviceConfig.newlinePlaceholderDelimiters);let T="";k&&k.length>=2?T=p.tempSentences.map((B,X)=>X===p.tempSentences.length-1?B.text:B.text+k[0]+(X+1)+k[1]).join(""):T=p.tempSentences.map(B=>B.text).join(E);let D=await this.translate({text:T,from:S,to:p.to,url:_,options:n}),{text:L}=D,U=[];if(k&&k.length>=2){let B=`${k[0]}\\d+${k[1]}`;k&&k.length>=3&&(B=k[2]);let X=new RegExp(B,"g");U=L.split(X)}else U=L.split(E);let v=[];if(U.length>p.tempSentences.length){for(let B=0;B<p.tempSentences.length-1;B++)v[B]=U[B];v[p.tempSentences.length-1]=U.slice(p.tempSentences.length-1).join(E)}else if(U.length<p.tempSentences.length)for(let B=U.length;B<p.tempSentences.length;B++)U[B]="";else v=U;return{sourceTempSentences:p.tempSentences,text:v,from:D.from,to:D.to}}};d.push(M().then(A=>{let{text:S,sourceTempSentences:E}=A;for(let k=0;k<S.length;k++){let T=S[k],D=E[k];if(D){let{index:L,prefix:U,suffix:v}=D;m(L,{sentence:{...a[L],from:p.from,to:p.to},sentenceTotalParts:D.sentenceTotalParts,partIndex:D.partIndex,translatedTexts:[U+T+v],callback:u},null)}}}).catch(A=>{if(u){for(let S=0;S<p.tempSentences.length;S++){let E=p.tempSentences[S];E.sentenceTotalParts===1?u(A,null,{...a[E.index],from:p.from,to:p.to}):(u(A,null,{...a[E.index],from:p.from,to:p.to}),S+=E.sentenceTotalParts-1)}o=A}else o=A}))}if(await Promise.allSettled(d),o)throw o;return{sentences:g.map(y=>({...y.sentence,text:y.translatedTexts.join("")}))}}detectLanguageLocally(t){return Ve({text:t,minLength:18})}detectLanguageRemotely(t){return Promise.resolve("auto")}detectLanguage(t){return t.length>=50?this.detectLanguageLocally(t):this.detectLanguageRemotely(t)}};var G4=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","jp"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],Wt=class extends re{constructor(n,u,a){super(n,u,a);this.secretId="";this.secretKey="";this.isSupportList=!0;if(!n||!n.secretId||!n.secretKey)throw new Error("secretId and secretKey are required");this.secretId=n.secretId?.trim(),this.secretKey=n.secretKey?.trim()}static getUTCDate(n){let u=n.getUTCFullYear(),a=`${n.getUTCMonth()+1}`.padStart(2,"0"),r=`${n.getUTCDate()}`.padStart(2,"0");return`${u}-${a}-${r}`}async translate(n){let{text:u,from:a,to:r}=n,o=JSON.stringify({ProjectId:0,Source:Wt.langMap.get(a)||"auto",SourceText:u,Target:Wt.langMap.get(r)||r}),i=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslate",payload:o,service:"tmt",version:"2018-03-21"});return{text:i.Response.TargetText,from:Wt.langMapReverse.get(i.Response.Source)||a,to:Wt.langMapReverse.get(i.Response.Target)||r}}async translateList(n){let{text:u,from:a,to:r}=n,o=JSON.stringify({ProjectId:0,Source:Wt.langMap.get(a)||"auto",SourceTextList:u,Target:Wt.langMap.get(r)||r}),i=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslateBatch",payload:o,service:"tmt",version:"2018-03-21"});return{text:i.Response.TargetTextList,from:Wt.langMapReverse.get(i.Response.Source)||a,to:Wt.langMapReverse.get(i.Response.Target)||r}}async signedRequest({secretId:n,secretKey:u,action:a,payload:r,service:o,version:i}){let s=`${o}.tencentcloudapi.com`,l=new Date,c=`${new Date().valueOf()}`.slice(0,10),d=["POST","/","","content-type:application/json; charset=utf-8",`host:${s}`,"","content-type;host",await Ut(r)].join(`
`),g=Wt.getUTCDate(l),m=["TC3-HMAC-SHA256",c,`${g}/${o}/tc3_request`,await Ut(d)].join(`
`),f=await Vc(g,`TC3${u}`),w=await dr(o,f),y=await dr("tc3_request",w),p=await dr(m,y),_=await G({retry:1,url:`https://${o}.tencentcloudapi.com`,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Host:s,"X-TC-Action":a,"X-TC-Timestamp":c,"X-TC-Region":"ap-beijing","X-TC-Version":i,Authorization:`TC3-HMAC-SHA256 Credential=${n}/${g}/${o}/tc3_request, SignedHeaders=content-type;host, Signature=${p}`},body:r});if(_ instanceof Error)throw _;if(_.Response&&_.Response.Error&&_.Response.Error.Message)throw new Error(_.Response.Error.Message);return _}},qn=Wt;qn.langMap=new Map(G4),qn.langMapReverse=new Map(G4.map(([n,u])=>[u,n]));var V4=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","jp"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],e9={"content-type":"application/json",Host:"wxapp.translator.qq.com","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.32(0x18002035) NetType/WIFI Language/zh_TW",Referer:"https://servicewechat.com/wxb1070eabc6f9107e/117/page-frame.html"},Br=class extends re{constructor(n,u,a){super(n,u,a);this.isSupportList=!1}async translate(n){let{text:u,from:a,to:r}=n,o=new URLSearchParams({source:a,target:r,sourceText:u,platform:"WeChat_APP",candidateLangs:"en|zh",guid:"oqdgX0SIwhvM0TmqzTHghWBvfk22"}).toString(),i=await G({url:`https://wxapp.translator.qq.com/api/translate?${o}`,retry:1,method:"GET",headers:e9});return{text:i.targetText,from:Br.langMapReverse.get(i.source)||a,to:Br.langMapReverse.get(i.target)||r}}},Kn=Br;Kn.langMap=new Map(V4),Kn.langMapReverse=new Map(V4.map(([n,u])=>[u,n]));var J4=[["auto","auto"],["zh-CN","zh-CN"],["zh-TW","zh-TW"],["en","en"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["ceb","ceb"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["haw","haw"],["he","he"],["hi","hi"],["hmn","hmn"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["jw","jw"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["sa","sa"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["fil","tl"],["tr","tr"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zu","zu"]],Sn=class extends re{constructor(n,u,a){super(n,u,a);this.isSupportList=!1;this.apiUrl="https://translate.googleapis.com/translate_a/single";n&&n.apiUrl&&(this.apiUrl=Ot(this.apiUrl,n.apiUrl))}getDefaultRateLimit(){return{limit:10,interval:1050}}async translate(n){let{text:u,from:a,to:r}=n;if(!u)return{...n};let o=Sn.langMap.get(a)||"auto",i=Sn.langMap.get(r)||r,s=await this.fetchWithoutToken(u,o,i);if(!s)throw new Error("google translate NETWORK_ERROR");if(!s.data[0]||s.data[0].length<=0)throw new Error("google translate API_SERVER_ERROR");return{text:s.data[0].map(c=>c[0]).filter(Boolean).join(""),from:Sn.langMapReverse.get(s.data[2])||"auto",to:r}}async translateXml(n){let{text:u,from:a,to:r}=n;if(!u)return{...n};let o=Sn.langMap.get(a)||"auto",i=Sn.langMap.get(r)||r,s=await this.fetchXmlWithoutToken(u,o,i);if(!s)throw new Error("google translate NETWORK_ERROR");if(!s.data[0]||s.data[0].length<=0)throw new Error("google translate API_SERVER_ERROR");return{text:s.data[0].map(c=>c[0]).filter(Boolean).join(""),from:Sn.langMapReverse.get(s.data[2])||"auto",to:r}}async fetchXmlWithoutToken(n,u,a){let o="https://translate.googleapis.com/translate_a/t?"+new URLSearchParams({client:"gtx",dt:"t",sl:u,tl:a,q:n}).toString();return{data:await G({retry:2,url:o})}}async fetchWithoutToken(n,u,a){let r=new URLSearchParams({client:"gtx",dt:"t",sl:u,tl:a,q:n}),o=this.apiUrl+"?"+r.toString();return{data:await G({retry:2,url:o})}}},cn=Sn;cn.langMap=new Map(J4),cn.langMapReverse=new Map(J4.map(([n,u])=>[u,n]));function t9(e,t){return t?e+(t-e%t):e}function n9(e,t){return e.split(t).length-1}function qi(e){let t=Date.now(),n=1;for(let u of e)n+=n9(u,"i");return t9(t,n)}function u9(e,t){return Math.floor(Math.random()*(t-e+1))+e}function Ki(){return u9(1e6,1e8)}var $i="https://www2.deepl.com/jsonrpc",Gi="auto",Y4=[{code:"BG",language:"Bulgarian"},{code:"ZH",language:"Chinese"},{code:"CS",language:"Czech"},{code:"DA",language:"Danish"},{code:"NL",language:"Dutch"},{code:"EN",language:"English"},{code:"ET",language:"Estonian"},{code:"FI",language:"Finnish"},{code:"FR",language:"French"},{code:"DE",language:"German"},{code:"EL",language:"Greek"},{code:"HU",language:"Hungarian"},{code:"IT",language:"Italian"},{code:"JA",language:"Japanese"},{code:"LV",language:"Latvian"},{code:"LT",language:"Lithuanian"},{code:"PL",language:"Polish"},{code:"PT",language:"Portuguese"},{code:"RO",language:"Romanian"},{code:"RU",language:"Russian"},{code:"SK",language:"Slovak"},{code:"SL",language:"Slovenian"},{code:"ES",language:"Spanish"},{code:"SV",language:"Swedish"}];function a9(e=Y4){return e.reduce((t,n)=>(t[n.code.toLowerCase()]=n.code,t[n.language.toLowerCase()]=n.code,t),{})}function Vi(e){return a9()[e.toLowerCase()]}var r9={Accept:"*/*","Accept-Language":"en-US;q=0.8,en;q=0.7","Content-Type":"application/json",Origin:"https://www.deepl.com",Referer:"https://www.deepl.com/translator","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-site"};function o9(e){return JSON.stringify(e).replace('"method":"',()=>{let t=e;return(t.id+3)%13===0||(t.id+5)%29===0?'"method" : "':'"method": "'})}function i9(e,t){return{id:1,jsonrpc:"2.0",method:"LMT_handle_texts",params:{timestamp:0,texts:[{text:"",requestAlternatives:3}],splitting:"newlines",lang:{source_lang_user_selected:e,target_lang:t}}}}async function s9(e,t,n,u,a,r,o){let i=Ki(),s=i9(u,n),l=[];t.forEach(g=>{l.push({text:g,requestAlternatives:3})}),s.id=i,s.params.texts=l,s.params.timestamp=qi(t);let c=await G({retry:2,method:"POST",url:e,body:o9(s),headers:r9}),d={from:c.result.lang,to:n,text:[]};return c.result.texts.forEach(g=>{d.text.push(g.text)}),d}async function X4(e,t,n,u=Gi,a,r,o){return t?t&&t.length===1&&t[0]===""?{text:[""],from:u,to:n}:s9(e,t,Vi(n),Vi(u)??"auto",a,r,o):{text:[],from:u,to:n}}var Q4=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],vu=class extends re{constructor(n,u,a){super(n,u,a);this.maxTextGroupLength=3;this.maxTextLength=800;this.isSupportList=!0;this.API_URL=$i;n&&n.apiUrl&&(this.API_URL=Ot($i,n.apiUrl))}getDefaultRateLimit(){return{limit:1,interval:1050}}async translateList(n){let{text:u,to:a,from:r}=n,o=await X4(this.API_URL,u,vu.langMap.get(a)||a,vu.langMap.get(r)||"auto");return{text:o.text,from:vu.langMapReverse.get(o.from),to:vu.langMapReverse.get(o.to)}}},Pn=vu;Pn.langMap=new Map(Q4),Pn.langMapReverse=new Map(Q4.map(([n,u])=>[u,n]));var Z4=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","ja"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],Ji="https://transmart.qq.com/api/imt",$n=class extends re{constructor(n,u,a){super(n,u,a);this.maxTextGroupLength=25;this.maxTextLength=1e3;this.isSupportList=!1;this.clientKey=btoa("transmart_crx_"+navigator.userAgent).slice(0,100)}async translate(n){let{text:u,to:a}=n,r=await this.detectLanguage(u),o=$n.langMap.get(r)||r,i=$n.langMap.get(a)||a;if(r===a)return{text:u,from:r,to:a};let s=JSON.stringify({header:{fn:"auto_translation_block",client_key:this.clientKey},source:{text_block:u,lang:o,orig_url:n.url},target:{lang:i}}),l=await G({url:Ji,body:s,method:"POST",retry:2});if(l.header.ret_code!=="succ")throw new Error(l.message||l.header.ret_code);return{text:l.auto_translation,from:r||"auto",to:a}}getDefaultRateLimit(){return{limit:30,interval:1050}}async translateList(n){let{from:u,text:a,to:r}=n;if(a.length===1){let d=await this.translate({from:u,text:a[0],to:r,url:n.url,options:n.options});return{text:[d.text],from:d.from,to:d.to}}let o=await this.detectLanguage(a.join(`
`));if(o===r)return{text:a,from:o,to:r};let i=$n.langMap.get(o)||o,s=$n.langMap.get(r)||r,l=JSON.stringify({header:{fn:"auto_translation",client_key:this.clientKey},source:{text_list:a,lang:i,orig_url:n.url},target:{lang:s},type:"plain"}),c=await G({url:Ji,body:l,method:"POST"});if(c.header.ret_code!=="succ")throw new Error(c.message||c.header.ret_code);return{text:c.auto_translation,from:o||"auto",to:r}}detectLanguageLocally(n){return this.detectLanguageRemotely(n)}async detectLanguageRemotely(n){let u={header:{fn:"text_analysis",client_key:this.clientKey},text:n.slice(0,280)},a=await G({url:Ji,method:"POST",body:JSON.stringify(u)});if(a.header.ret_code!=="succ")throw new Error(a.message||a.header.ret_code);let r=a.language,o=$n.langMapReverse.get(r);return o||r}},Gn=$n;Gn.langMap=new Map(Z4),Gn.langMapReverse=new Map(Z4.map(([n,u])=>[u,n]));function ed(){return Math.random()>=0}var Au=class extends re{constructor(){super(...arguments);this.isSupportList=!0;this.maxTextLength=1200;this.maxTextGroupLength=25}async translate(n){let{text:u}=n,a=u.match(/^\s*/)[0].length;return{text:u.slice(0,a)+"\u6A21\u62DF\uFF1A"+u.slice(a,-6),from:n.from,to:n.to}}async translateList(n){let{text:u,from:a,to:r}=n;if(await td(),!ed())throw new Error("\u6A21\u62DF\u9519\u8BEF");return u.length===0?{from:a,to:r,text:[""]}:{from:a,to:r,text:u.map(o=>{let i=o.match(/^\s*/)[0].length;return o.slice(0,i)+"\u6A21\u62DF\uFF1A"+o.slice(i,-6)})}}};var ad=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh"],["en","en"],["ja","ja"],["de","de"],["fr","fr"],["it","it"],["es","es"],["nl","nl"],["pl","pl"],["pt","pt"],["ru","ru"]],nd=new Map(ad),ud=new Map(ad.map(([e,t])=>[t,e])),Yi=class extends re{constructor(n,u,a){super(n,u,a);this.apikey="";this.codename=Yi.DEFAULT_CODENAME;this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.apikey)throw new Error("apikey are required");this.apikey=n.apikey?.trim(),n.codename&&(this.codename=n.codename)}async translate(n){let{text:u,from:a,to:r}=n,o=await G({retry:2,url:`https://api.openl.club/services/${this.codename}/translate`,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({apikey:this.apikey,text:u,source_lang:nd.get(a)||"auto",target_lang:nd.get(r)||r})});if(o.status){let i=o;return i.result&&r=="zh-TW",{text:i.result,from:ud.get(i.source_lang),to:ud.get(i.target_lang)}}else throw new Error(o.msg)}},_r=Yi;_r.DEFAULT_CODENAME="deepl";var Mr=_r;var Rr=new Map;async function Xi(e){let t=e.url;if(e.method&&(t+=e.method),e.body&&(t+=vn(e.body)),Rr.has(t))return Rr.get(t);let n=G(e);Rr.set(t,n);try{return await n}catch(u){throw u}finally{setTimeout(()=>{Rr.delete(t)},3e4)}}async function rd(e){return Xi(e)}async function la(e){if(rt()){let n=Lr();if(n)try{return await n.ask("throttleRequest",e)}catch(u){throw F.error("can not comunicate with root frame, use strict limiter",u),u}else return Xi(e)}else return Xi(e)}var At=null,id=[["auto",""],["zh-CN","ZH"],["zh-TW","ZH"],["en","EN"],["de","DE"],["fr","FR"],["it","IT"],["ja","JA"],["es","ES"],["nl","NL"],["pl","PL"],["pt","PT"],["ru","RU"]],od=new Map(id),l9=new Map(id.map(([e,t])=>[t,e])),Qi=class extends re{constructor(n,u,a){super(n,u,a);this.authKey="";this.maxTextLength=1800;this.freeApiUrl="https://api-free.deepl.com/v2/translate";this.proApiUrl="https://api.deepl.com/v2/translate";this.immersiveTranslateApiUrl="https://deepl.immersivetranslate.com/v2/translate";this.immersiveTranslateDeeplTokenUrl="https://api.immersivetranslate.com";this.apiKeys=[];if(!n||!n.authKey)throw new Error("authKey are required");n&&n.freeApiUrl&&(this.freeApiUrl=Ot(this.freeApiUrl,n.freeApiUrl)),n&&n.proApiUrl&&(this.proApiUrl=Ot(this.proApiUrl,n.proApiUrl)),n&&n.immersiveTranslateApiUrl&&(this.immersiveTranslateApiUrl=Ot(this.immersiveTranslateApiUrl,n.immersiveTranslateApiUrl)),n&&n.immersiveTranslateDeeplTokenUrl&&(this.immersiveTranslateDeeplTokenUrl=Ot(this.immersiveTranslateDeeplTokenUrl,n.immersiveTranslateDeeplTokenUrl)),this.authKey=n.authKey?.trim(),this.apiKeys=this.authKey.split(",").map(r=>r.trim())}static async clearState(){At=null,await I.storage.local.remove(rn)}getRandomKey(){let n=Math.floor(Math.random()*this.apiKeys.length);return this.apiKeys[n]}async init(){if(!At){At={};let u=await I.storage.local.get(rn);u&&u[rn]&&(At=u[rn])}let n=this.getRandomKey();if(n.startsWith("immersive_")){let u=new er(n,{state:At,onFetch:(a,r)=>{let i=new URL(a).pathname;return i==="/refresh_token"||i==="/oidc/token"?la({url:a,...r}):G({url:a,...r})},refreshTokenEndpoint:this.immersiveTranslateDeeplTokenUrl,onStateChange:a=>{At=a,I.storage.local.set({[rn]:At})}});await u.updateToken(),At=u.getState(),u.getIsStateChanged()&&await I.storage.local.set({[rn]:At})}}getDefaultRateLimit(){return{limit:3,interval:1050}}async translateList(n){let{from:u,to:a,text:r}=n,o={source_lang:od.get(u)||"",target_lang:od.get(a)||a},i=this.getRandomKey(),s=new URLSearchParams(o);r.forEach(f=>{s.append("text",f)});let l=s.toString(),c=this.freeApiUrl;i.endsWith(":im")?c=this.immersiveTranslateApiUrl:i.endsWith(":fx")||(c=this.proApiUrl);let d;if(i.startsWith("immersive_")){let f=new er(i,{state:At,onFetch:(w,y)=>{let _=new URL(w).pathname;return _==="/refresh_token"||_==="/oidc/token"?la({url:w,...y}):G({url:w,...y})},refreshTokenEndpoint:this.immersiveTranslateDeeplTokenUrl,onStateChange:w=>{At=w,I.storage.local.set({[rn]:At})}});d=await f.translateApi(l),f.getIsStateChanged()&&(At=f.getState(),await I.storage.local.set({[rn]:At}))}else d=await G({retry:2,url:c,method:"POST",body:l,headers:{Authorization:"DeepL-Auth-Key "+i,"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},extra:{overrideMimeType:"application/json; charset=utf-8"}});let{translations:g}=d,m=g.map(f=>f.text);if(a==="zh-TW"){let f=this.serviceConfig||{};f&&f.googleApiUrl&&(f.apiUrl=f.googleApiUrl);let y=await new cn(this.serviceConfig,this.generalConfig,this.translationOptions).translate({from:"zh-CN",to:"zh-TW",text:g.map(p=>p.text).join(`
`),url:"",options:{}});y&&y.text&&(m=y.text.split(`
`))}return{text:m,from:g[0]&&l9.get(g[0].detected_source_language)||u,to:a}}},sd=Qi;var c9=[["auto","auto"],["zh-CN","zh"],["zh-TW","cht"],["en","en"],["ja","ja"],["ru","ru"],["es","es"],["de","de"],["ko","ko"],["fr","fr"]],ld=new Map(c9),Zi=class extends re{constructor(n,u,a){super(n,u,a);this.APIKEY="";this.isSupportList=!1;if(!n||!n.APIKEY)throw new Error("APIKEY are required");this.APIKEY=n.APIKEY?.trim()}async translate(n){let{text:u,from:a,to:r}=n,i={url:"https://api.niutrans.com/NiuTransServer/translation",retry:2,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({src_text:u,from:ld.get(a)||a,to:ld.get(r)||r,apikey:this.APIKEY})},s=await G(i);if(s.tgt_text){let l=s.tgt_text;return l.endsWith(`
`)&&(l=l.slice(0,-1)),{text:l,from:a,to:r}}else throw new Error(JSON.stringify(s))}},cd=Zi;var d9=[["auto",""],["ar","ar"],["ga","ga"],["et","et"],["bg","bg"],["is","is"],["pl","pl"],["bs","bs-Latn"],["fa","fa"],["da","da"],["de","de"],["ru","ru"],["fr","fr"],["zh-TW","zh-Hant"],["fil","fil"],["fj","fj"],["fi","fi"],["gu","gu"],["kk","kk"],["ht","ht"],["ko","ko"],["nl","nl"],["ca","ca"],["zh-CN","zh-Hans"],["cs","cs"],["kn","kn"],["otq","otq"],["tlh","tlh"],["hr","hr"],["lv","lv"],["lt","lt"],["ro","ro"],["mg","mg"],["mt","mt"],["mr","mr"],["ml","ml"],["ms","ms"],["mi","mi"],["bn","bn-BD"],["hmn","mww"],["af","af"],["pa","pa"],["pt","pt"],["ps","ps"],["ja","ja"],["sv","sv"],["sm","sm"],["sr-Latn","sr-Latn"],["sr-Cyrl","sr-Cyrl"],["no","nb"],["sk","sk"],["sl","sl"],["sw","sw"],["ty","ty"],["te","te"],["ta","ta"],["th","th"],["to","to"],["tr","tr"],["cy","cy"],["ur","ur"],["uk","uk"],["es","es"],["he","iw"],["el","el"],["hu","hu"],["it","it"],["hi","hi"],["id","id"],["en","en"],["yua","yua"]],dd=new Map(d9),es=class extends re{constructor(n,u,a){super(n,u,a);this.APIKEY="";this.region="eastasia";this.isSupportList=!0;if(!n||!n.APIKEY)throw new Error("APIKEY are required");this.APIKEY=n.APIKEY?.trim(),n.region&&(this.region=n.region)}async translateList(n){let{text:u,from:a,to:r}=n;if(u.length===0)return{from:a,to:r,text:[]};let o={"api-version":"3.0",to:dd.get(r)||r};a!=="auto"&&(o.from=dd.get(a)||a);let i=new URLSearchParams(o),s=JSON.stringify(u.map(d=>({text:d}))),l={url:"https://api.cognitive.microsofttranslator.com/translate?"+i.toString(),retry:2,method:"POST",headers:{"Ocp-Apim-Subscription-Key":this.APIKEY,"Ocp-Apim-Subscription-Region":this.region,"content-type":"application/json"},body:s},c=await G(l);if(c.length===0)throw new Error("server response invalid");return{from:a,to:r,text:c.map(d=>d.translations.map(m=>m.text).join(" "))}}},gd=es;var g9=[["auto","auto"],["zh-CN","zh-CN"],["zh-TW","zh-TW"],["en","en"],["ja","ja"],["ru","ru"],["es","es"],["de","de"],["ko","ko"],["fr","fr"],["th","th"],["vi","vi"],["id","id"]],ca=new Map(g9),ts=class extends re{constructor(n,u,a){super(n,u,a);this.isSupportList=!0;this.maxTextGroupLength=25;this.maxTextLength=1200}getDefaultRateLimit(){return{limit:3,interval:1050}}async translateList(n){let{text:u,from:a,to:r}=n,o;if(u.length===0)return{from:a,to:r,text:[]};let i=`
<br>
`,s=u.join(i),l={url:"https://api.papago-chrome.com/v2/translate/openapi",retry:2,method:"POST",headers:{authority:"api.papago-chrome.com","content-type":"application/json"},body:""};a==="auto"||!ca.get(a)?(o=(await G({url:"https://api.papago-chrome.com/v2/translate/detect",method:"POST",headers:{authority:"api.papago-chrome.com","content-type":"application/json"},body:s})).langCode,l.body=JSON.stringify({text:s,source:o||ca.get(a)||a,target:ca.get(r)||r})):l.body=JSON.stringify({text:s,source:ca.get(a),target:ca.get(r)||r});let c=await G(l);if(c.translatedText==="")throw new Error("server response invalid");let d=c.translatedText.split("<br>").map(g=>g.trim());return{from:a,to:r,text:d}}},md=ts;var m9=[["auto","auto"],["zh-CN","Simplified Chinese"],["zh-TW","Traditional Chinese"],["en","English"],["yue","Cantonese"],["bo","\u85CF\u8BED"],["wyw","Classical Chinese"],["ja","Japanese"],["ko","Korean"],["fr","French"],["de","German"],["es","Spanish"],["it","Italian"],["ru","Russian"],["pt","Portuguese"],["nl","Dutch"],["pl","Polish"],["ar","Arabic"],["af","Afrikaans"],["am","Amharic"],["az","Azerbaijani"],["be","Belarusian"],["bg","Bulgarian"],["bn","Bengali"],["bs","Bosnian"],["ca","Catalan"],["ceb","Cebuano"],["co","Corsican"],["cs","Czech"],["cy","Welsh"],["da","Danish"],["el","Greek"],["eo","Esperanto"],["et","Estonian"],["eu","Basque"],["fa","Persian"],["fi","Finnish"],["fj","Fijian"],["fy","Western Frisian"],["ga","Irish"],["gd","Scottish Gaelic"],["gl","Galician"],["gu","Gujarati"],["ha","Hausa"],["haw","Hawaiian"],["he","Hebrew"],["hi","Hindi"],["hmn","Hmong"],["hr","Croatian"],["ht","Haitian Creole"],["hu","Hungarian"],["hy","Armenian"],["id","Indonesian"],["ig","Igbo"],["is","Icelandic"],["jw","Javanese"],["ka","Georgian"],["kk","Kazakh"],["km","Khmer"],["kn","Kannada"],["ku","Kurdish"],["ky","Kyrgyz"],["la","Lao"],["lb","Luxembourgish"],["lo","Lao"],["lt","Lithuanian"],["lv","Latvian"],["mg","Malagasy"],["mi","Maori"],["mk","Macedonian"],["ml","Malayalam"],["mn","Mongolian"],["mr","Marathi"],["ms","Malay"],["mt","Maltese"],["my","Burmese"],["pa","Punjabi"],["ps","Pashto"],["ro","Romanian"],["si","Sinhala"],["sk","Slovak"],["sl","Slovene"],["sa","Sanskrit"],["sm","Samoan"],["sn","Shona"],["so","Somali"],["sq","Albanian"],["sr","Serbian"],["sr-Cyrl","Serbian (Cyrillic)"],["sr-Latn","Serbian (Latin)"],["st","Southern Sotho"],["su","Sundanese"],["sv","Swedish"],["sw","Swahili"],["ta","Tamil"],["te","Telugu"],["tg","Tajik"],["th","Thai"],["tr","Turkish"],["ug","Uyghur"],["uk","Ukrainian"],["ur","Urdu"],["uz","Uzbek"],["vi","Vietnamese"],["xh","Xhosa"],["yi","Yiddish"],["yo","Yoruba"],["zu","Zulu"]],Or=new Map(m9),ns=class extends re{constructor(n,u,a){super(n,u,a);this.APIKEY="";this.apiKeys=[];this.isSupportList=!1;this.maxTextLength=1200;this.maxTextGroupLength=1;this.systemPrompt="You are a professional translation engine, please translate the text into a colloquial, professional, elegant and fluent content, without the style of machine translation. You must only translate the text content, never interpret it.";this.prompt="Translate the text below to {{to}}:\n\n```\n{{text}}\n```";this.model="gpt-3.5-turbo-0613";this.apiUrl="https://api.openai.com/v1/chat/completions";this.immersiveApiUrl="https://openai-api.immersivetranslate.com/v1/chat/completions";n||(n={}),n.APIKEY&&(this.APIKEY=n.APIKEY?.trim(),this.apiKeys=this.APIKEY.split(",").map(r=>r.trim())),n.prompt&&(this.prompt=n.prompt),n.model&&(this.model=n.model),n&&n.apiUrl&&(this.apiUrl=Ot(this.apiUrl,n.apiUrl)),n&&n.immersiveApiUrl&&(this.immersiveApiUrl=Ot(this.immersiveApiUrl,n.immersiveApiUrl)),n&&n.systemPrompt&&(this.systemPrompt=n.systemPrompt)}getDefaultRateLimit(){return{limit:10,interval:1300}}translate(n){return this.model.includes("003")?(this.maxTextGroupLength=1,this.translate3(n)):this.translate3_5(n)}getRandomKey(){let n=Math.floor(Math.random()*this.apiKeys.length);return this.apiKeys[n]}async translate3_5(n){let{text:u,from:a,to:r}=n;if(u.length===0)return{from:a,to:r,text:""};let o=Or.get(a)||a,i=Or.get(r)||r,s=this.prompt.replace(/{{to}}/g,i).replace(/{{text}}/g,u).replace(/{{from}}/g,o),l=[];if(this.systemPrompt){let m=this.systemPrompt.replace(/{{to}}/g,i).replace(/{{text}}/g,u).replace(/{{from}}/g,o);l.push({role:"system",content:m})}this.prompt&&l.push({role:"user",content:s}),this.prompt.indexOf("{{text}}")===-1&&l.push({role:"user",content:u});let c={url:this.apiUrl,method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:this.model,temperature:0,messages:l})},d=this.getRandomKey();d&&(c.headers.Authorization="Bearer "+d,c.headers["api-key"]=d,d.startsWith("immersiveopenai_")&&(c.url=this.immersiveApiUrl));let g=await G(c);if(g&&g.choices&&g.choices.length>0&&g.choices[0].message&&g.choices[0].message.content){let m=g.choices[0].message.content.trim();return m.includes("\u65E0\u6CD5\u7FFB\u8BD1")&&(m=""),!u.includes(".")&&(m.endsWith("\u3002")||m.endsWith("."))&&(m=m.slice(0,-1)),{from:a,to:r,text:m}}else throw new Error("server response invalid: "+JSON.stringify(g))}async translate3(n){let{text:u,from:a,to:r}=n;if(u.length===0)return{from:a,to:r,text:""};let o=this.prompt.replace(/{{to}}/g,Or.get(r)||r).replace(/{{text}}/g,u).replace(/{{from}}/g,Or.get(a)||a),i={url:"https://api.openai.com/v1/completions",method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.APIKEY},body:JSON.stringify({model:this.model,prompt:o,temperature:0})},s=await G(i);if(s&&s.choices&&s.choices.length>0&&s.choices[0].text){let l=s.choices[0].text.trim();return{from:a,to:r,text:l}}else throw new Error("server response invalid: "+JSON.stringify(s))}},pd=ns;var us=pe+"CacheKey_";function Nr(e,t){let n=us+e;return I.storage.local.get(n).then(u=>{if(u[n]===void 0)return t;let{value:a,expired:r}=u[n];return r&&r<Date.now()?t:a})}function Ir(e,t,n){let u=us+e,a=Date.now()+n;return I.storage.local.set({[u]:{value:t,expired:a}})}function jr(e){let t=us+e;return I.storage.local.remove(t)}var p9=[["auto","auto"],["zh-CN","zh-Hans"],["zh-TW","zh-Hant"],["en","en"],["yue","\u7CA4\u8BED"],["wyw","\u53E4\u6587"],["en","en"],["ja","ja"],["ko","ko"],["fr","fr"],["de","de"],["es","es"],["it","it"],["ru","ru"],["pt","pt"],["nl","nl"],["pl","pl"],["ar","ar"],["af","af"],["am","am"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["ceb","ceb"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["el","el"],["eo","eo"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["haw","haw"],["he","he"],["hi","hi"],["hmn","hmn"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["jw","jw"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ku","ku"],["ky","ky"],["la","lo"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["no","no"],["ny","ny"],["pa","pa"],["ps","ps"],["ro","ro"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["sr-Cyrl","sr"],["sr-Latn","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tr","tr"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zu","zu"]],zr=new Map(p9),as="chatgptWebAccessToken";async function fd(){let e=await Nr(as);if(e)return e;let t=await G({url:"https://chat.openai.com/api/auth/session",method:"get",responseType:"json"});if(!t.accessToken)throw new Error("UNAUTHORIZED");return await Ir(as,t.accessToken,10*60*1e3),t.accessToken}var ku,Ur=class{constructor(){U0(this,ku,Promise.resolve());return Ur.instance||(Ur.instance=this),this}enqueue(t){return H0(this,ku,jo(this,ku).then(()=>t())),jo(this,ku)}},rs=Ur;ku=new WeakMap;var os=new rs;Object.freeze(os);var da=class extends re{constructor(n,u,a){super(n,u,a);this.accessToken="";this.customChatGptWebApiUrl="https://chat.openai.com";this.customChatGptWebApiPath="/backend-api/conversation";this.maxTextGroupLength=1;this.maxTextLength=1200;this.isStream=!1;this.isSupportList=!1;this.prompt=`You are a translation engine, you can only translate text and cannot interpret it, and do not explain.Translate the text below to {{to}}:

{{text}}`}throttleDebounce(n,u,a){let r=0,o;return(...i)=>{let s=Date.now(),l=this,c=()=>{r=s,n.apply(l,i)};s-r>=u?(clearTimeout(o),c()):(clearTimeout(o),o=setTimeout(()=>{c()},a))}}async deleteConversation(n){if(n){let u=await G({url:`${this.customChatGptWebApiUrl}${this.customChatGptWebApiPath}/${n}`,method:"PATCH",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.accessToken}`},body:JSON.stringify({is_visible:!1})});return F.debug("delete conversation res:",u),u}}async translate(n){return await os.enqueue(async()=>{let{text:u,from:a,to:r}=n;if(u.length===0)return Promise.resolve({from:a,to:r,text:""});let o=zr.get(a)||a,i=zr.get(r)||r;if(this.accessToken=await fd(),!this.accessToken||this.accessToken==="")throw new Error("token error");let s="text-davinci-002-render-sha-mobile";if(!s)throw new Error("No available model");let l=this.prompt.replace(/{{to}}/g,i).replace(/{{text}}/g,u).replace(/{{from}}/g,o);try{let c=await G({url:`${this.customChatGptWebApiUrl}${this.customChatGptWebApiPath}`,method:"POST",responseType:"stream",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.accessToken}`},body:JSON.stringify({action:"next",messages:[{id:St(),role:"user",content:{content_type:"text",parts:[l]}}],model:s,parent_message_id:St()})});return F.debug("get chatgpt res:",c),await this.deleteConversation(c?.conversation_id),Promise.resolve({from:a,to:r,text:c?.message?.content?.parts?.[0]})}catch(c){throw F.debug("post chatgpt error:",c),await jr(as),c}})}async translateStream(n,u){let{text:a,from:r,to:o}=n;if(a.length===0){u(null,{from:r,to:o,text:""});return}let i=this.throttleDebounce(function(s){let{from:l,to:c,text:d}=s;u(null,{from:l,to:c,text:d})},300,200);await os.enqueue(async()=>{let s="chatgpt"+St(),l=I.runtime.connect({name:s}),c,d;l.onMessage.addListener(y=>{if(!(!y||y==="")){if(y==="[DONE]"){l.disconnect(),this.deleteConversation(c);return}try{d=JSON.parse(y)}catch(p){F.debug("chatgpt json error",p,y);return}c=d?.conversation_id,d?.message?.author?.role==="assistant"&&i({from:r,to:o,text:d?.message?.content?.parts?.[0]})}});let g=zr.get(r)||r,m=zr.get(o)||o;if(this.accessToken=await fd(),!this.accessToken||this.accessToken==="")throw new Error("token error");let f="text-davinci-002-render-sha";if(!f)throw new Error("No available model");let w=this.prompt.replace(/{{to}}/g,m).replace(/{{text}}/g,a).replace(/{{from}}/g,g);G({url:`${this.customChatGptWebApiUrl}${this.customChatGptWebApiPath}`,method:"POST",responseType:"realStream",extra:{portName:s},headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.accessToken}`},body:JSON.stringify({action:"next",messages:[{id:St(),role:"user",content:{content_type:"text",parts:[w]}}],model:f,parent_message_id:St()})}).catch(y=>{F.debug("chatgpt error",y),l.disconnect(),this.deleteConversation(c),u(y,{from:r,to:o,text:""})})})}};var f9=["authorization","content-type","content-length","user-agent","presigned-expires","expect"],We={algorithm:"HMAC-SHA256",v4Identifier:"request",dateHeader:"X-Date",tokenHeader:"X-Security-Token",contentSha256Header:"X-Content-Sha256",notSignBody:"X-NotSignBody",kDatePrefix:"",credential:"X-Credential",algorithmKey:"X-Algorithm",signHeadersKey:"X-SignedHeaders",signQueriesKey:"X-SignedQueries",signatureKey:"X-Signature"},is=e=>{try{return encodeURIComponent(e).replace(/[^A-Za-z0-9_.~\-%]+/g,escape).replace(/[*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)}catch{return""}},ss=e=>Object.keys(e).map(t=>{let n=e[t];if(typeof n>"u"||n===null)return;let u=is(t);if(u)return Array.isArray(n)?`${u}=${n.map(is).sort().join(`&${u}=`)}`:`${u}=${is(n)}`}).filter(t=>t).join("&"),Du=class{constructor(t,n,u){this.request=t,this.request.headers=t.headers||{},this.serviceName=n,u=u||{},this.bodySha256=u.bodySha256,this.request.params=this.sortParams(this.request.params)}sortParams(t){let n={};return t&&Object.keys(t).filter(u=>{let a=t[u];return typeof a<"u"&&a!==null}).sort().map(u=>{n[u]=t[u]}),n}async addAuthorization(t,n){let u=this.getDateTime(n);await this.addHeaders(t,u),this.request.headers.Authorization=await this.authorization(t,u)}async authorization(t,n){let u=[],a=this.credentialString(n);return u.push(`${We.algorithm} Credential=${t.accessKeyId}/${a}`),u.push(`SignedHeaders=${this.signedHeaders()}`),u.push(`Signature=${await this.signature(t,n)}`),u.join(", ")}async getSignUrl(t,n){let u=this.getDateTime(n),a={...this.request.params},r=this.request.params,o=this.request.headers;t.sessionToken&&(a[We.tokenHeader]=t.sessionToken),a[We.dateHeader]=u,a[We.notSignBody]="",a[We.credential]=`${t.accessKeyId}/${this.credentialString(u)}`,a[We.algorithmKey]=We.algorithm,a[We.signHeadersKey]="",a[We.signQueriesKey]=void 0,a[We.signatureKey]=void 0,a=this.sortParams(a),this.request.params=a,this.request.headers={};let i=await this.signature(t,u);return this.request.params=r,this.request.headers=o,a[We.signQueriesKey]=Object.keys(a).sort().join(";"),a[We.signatureKey]=i,ss(a)}getDateTime(t){return this.iso8601(t).replace(/[:\-]|\.\d{3}/g,"")}async addHeaders(t,n){if(this.request.headers[We.dateHeader]=n,t.sessionToken&&(this.request.headers[We.tokenHeader]=t.sessionToken),this.request.body){let u=this.request.body;this.request.headers[We.contentSha256Header]=await Ut(u)}}async signature(t,n){let u=await this.getSigningKey(t,n.substr(0,8),this.request.region,this.serviceName);return cr(await Tn(await this.stringToSign(n),u))}async stringToSign(t){let n=[];n.push(We.algorithm),n.push(t),n.push(this.credentialString(t));let u=await this.canonicalString();return n.push(await this.hexEncodedHash(u)),n.join(`
`)}async canonicalString(){let t=[],n=this.request.pathname||"/";t.push(this.request.method.toUpperCase()),t.push(n);let u=ss(this.request.params)||"";return t.push(u),t.push(`${this.canonicalHeaders()}
`),t.push(this.signedHeaders()),t.push(await this.hexEncodedBodyHash()),t.join(`
`)}canonicalHeaders(){let t=[];Object.keys(this.request.headers).forEach(u=>{t.push([u,this.request.headers[u]])}),t.sort((u,a)=>u[0].toLowerCase()<a[0].toLowerCase()?-1:1);let n=[];return t.forEach(u=>{let a=u[0].toLowerCase();if(this.isSignableHeader(a)){let r=u[1];if(typeof r>"u"||r===null||typeof r.toString!="function")throw new Error(`Header ${a} contains invalid value`);n.push(`${a}:${this.canonicalHeaderValues(r.toString())}`)}}),n.join(`
`)}canonicalHeaderValues(t){return t.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")}signedHeaders(){let t=[];return Object.keys(this.request.headers).forEach(n=>{n=n.toLowerCase(),this.isSignableHeader(n)&&t.push(n)}),t.sort().join(";")}signedQueries(){return Object.keys(this.request.params).join(";")}credentialString(t){return this.createScope(t.substr(0,8),this.request.region,this.serviceName)}async hexEncodedHash(t){return await Ut(t)}async hexEncodedBodyHash(){return this.request.headers[We.contentSha256Header]?this.request.headers[We.contentSha256Header]:this.request.body?await this.hexEncodedHash(ss(this.request.body)):await this.hexEncodedHash("")}isSignableHeader(t){return f9.indexOf(t)<0}iso8601(t){return t===void 0&&(t=new Date),t.toISOString().replace(/\.\d{3}Z$/,"Z")}async getSigningKey(t,n,u,a){let r=await Tn(n,`${We.kDatePrefix}${t.secretKey}`),o=await Tn(u,r),i=await Tn(a,o);return Tn(We.v4Identifier,i)}createScope(t,n,u){return[t.substr(0,8),n,u,We.v4Identifier].join("/")}};var bd=[["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],hd=new Map(bd),h9=new Map(bd.map(([e,t])=>[t,e])),ls=class extends re{constructor(n,u,a){super(n,u,a);this.accessKeyId="";this.secretAccessKey="";this.maxTextGroupLength=8;if(!n||!n.accessKeyId||!n.secretAccessKey)throw new Error("accessKeyId and secretAccessKey are required");this.accessKeyId=n.accessKeyId?.trim(),this.secretAccessKey=n.secretAccessKey?.trim()}async remoteDetectLanguage(n){let a={region:"cn-north-1",method:"POST",params:{Action:"LangDetect",Version:"2020-06-01"},pathname:"/",headers:{"Content-Type":"application/json",host:"open.volcengineapi.com"},body:JSON.stringify({TextList:[n]})},r=new Du(a,"translate");await r.addAuthorization({accessKeyId:this.accessKeyId,secretKey:this.secretAccessKey});let o=new URLSearchParams(a.params),i=await G({retry:2,url:"https://open.volcengineapi.com"+a.pathname+"?"+o.toString(),headers:r.request.headers,method:a.method,body:a.body});if(i.DetectedLanguageList&&i.DetectedLanguageList.length>0)return i.DetectedLanguageList[0].Language;if(i.ResponseMetadata&&i.ResponseMetadata.Error){let s=i.ResponseMetadata.Error;throw new Xe(s.Code,s.Message)}else if(i.ResponseMetaData&&i.ResponseMetaData.Error){let s=i.ResponseMetaData.Error;throw new Xe(s.Code,s.Message)}else throw new Error("response: "+JSON.stringify(i))}async translateList(n){let{text:u,from:a,to:r}=n,o=hd.get(a),i={TargetLanguage:hd.get(r)||r,TextList:u};o?i.SourceLanguage=o:i.SourceLanguage=await this.remoteDetectLanguage(u.join(`
`).slice(0,1e3));let s={region:"cn-north-1",method:"POST",params:{Action:"TranslateText",Version:"2020-06-01"},pathname:"/",headers:{"Content-Type":"application/json",host:"open.volcengineapi.com"},body:JSON.stringify(i)},l=new Du(s,"translate");await l.addAuthorization({accessKeyId:this.accessKeyId,secretKey:this.secretAccessKey});let c=new URLSearchParams(s.params),d=await G({retry:2,url:"https://open.volcengineapi.com"+s.pathname+"?"+c.toString(),headers:l.request.headers,method:s.method,body:s.body});if(d.TranslationList){let g=d.TranslationList.map(f=>f.Translation),m=a;return d.TranslationList.length>0&&d.TranslationList[0].DetectedSourceLanguage&&(m=h9.get(d.TranslationList[0].DetectedSourceLanguage)||a),{text:g,from:m,to:r}}else if(d.ResponseMetadata&&d.ResponseMetadata.Error){let g=d.ResponseMetadata.Error;throw new Xe(g.Code,g.Message)}else if(d.ResponseMetaData&&d.ResponseMetaData.Error){let g=d.ResponseMetaData.Error;throw new Xe(g.Code,g.Message)}else throw new Error("response: "+JSON.stringify(d))}},Ed=ls;var Td=[["auto","detect"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],yd=new Map(Td),b9=new Map(Td.map(([e,t])=>[t,e])),ga=class extends re{constructor(){super(...arguments);this.maxTextGroupLength=50;this.isSupportList=!1}async translate(n){let{text:u,from:a,to:r}=n,o=yd.get(a)||"detect",i=yd.get(r)||r,l=await G({url:"https://translate.volcengine.com/crx/translate/v1/",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({source_language:o,target_language:i,text:u})});if(l.base_resp&&l.base_resp.status_code===0){let c=l.translation,d=a;return l.detected_language&&(d=b9.get(l.detected_language)||a),{text:c,from:d,to:r}}else{let c=l.base_resp;throw new Xe(c.status_code.toString(),c.status_message)}}};var E9=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],xd=new Map(E9),ma=class extends re{constructor(n,u,a){super(n,u,a);this.url="";this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.url)throw new Error("deeplx custom url are required, please check your settings.");this.url=n.url}async translate(n){let{text:u,from:a,to:r}=n,i=await G({retry:2,url:this.url,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({source_lang:xd.get(a)||a,target_lang:xd.get(r)||r,text:u})});if(i.code===200)return{text:i.data,from:a,to:r};throw new Error(i.message||i.message||"API Error")}};var cs="https://{s}bing.com",kd=cs+"/translator",y9=cs+"/ttranslatev3",T9=cs+"/tspellcheckv3",Hr="bingGlobalConfig",Dd=[["auto","auto-detect"],["ar","ar"],["ga","ga"],["et","et"],["bg","bg"],["is","is"],["pl","pl"],["bs","bs-Latn"],["fa","fa"],["da","da"],["de","de"],["ru","ru"],["fr","fr"],["zh-TW","zh-Hant"],["fil","fil"],["fj","fj"],["fi","fi"],["gu","gu"],["kk","kk"],["ht","ht"],["ko","ko"],["nl","nl"],["ca","ca"],["zh-CN","zh-Hans"],["cs","cs"],["kn","kn"],["otq","otq"],["tlh","tlh"],["hr","hr"],["lv","lv"],["lt","lt"],["ro","ro"],["mg","mg"],["mt","mt"],["mr","mr"],["ml","ml"],["ms","ms"],["mi","mi"],["bn","bn-BD"],["hmn","mww"],["af","af"],["pa","pa"],["pt","pt"],["ps","ps"],["ja","ja"],["sv","sv"],["sm","sm"],["sr-Latn","sr-Latn"],["sr-Cyrl","sr-Cyrl"],["no","nb"],["sk","sk"],["sl","sl"],["sw","sw"],["ty","ty"],["te","te"],["ta","ta"],["th","th"],["to","to"],["tr","tr"],["cy","cy"],["ur","ur"],["uk","uk"],["es","es"],["he","iw"],["el","el"],["hu","hu"],["it","it"],["hi","hi"],["id","id"],["en","en"],["yua","yua"],["yue","yua"],["vi","vi"],["ku","ku"],["km","kmr"]],wd=new Map(Dd),Cd=new Map(Dd.map(([e,t])=>[t,e])),vd=1e3,qt,Su;function ds(e,t){return e.replace("{s}",t?t+".":"")}async function x9(){if(!qt){let n=await I.storage.local.get(Hr);return n&&(qt=n[Hr]),!0}let{tokenTs:e,tokenExpiryInterval:t}=qt;return Date.now()-e>t}async function Ad(){let e,t,n,u,a,r,o,i,s,l;try{let c=ds(kd,e),d=await G({retry:2,url:c,responseType:"raw"}),{body:g,headers:m,url:f}=d;e=f.match(/^https?:\/\/(\w+)\.bing\.com/)[1],l=m["set-cookie"],t=g.match(/IG:"([^"]+)"/)[1],n=g.match(/data-iid="([^"]+)"/)[1],[a,u,r,o,i,s]=JSON.parse(g.match(/params_AbusePreventionHelper\s?=\s?([^\]]+\])/)[1])}catch(c){throw c}return qt={subdomain:e,IG:t,IID:n,key:a,token:u,tokenTs:a,tokenExpiryInterval:r,isVertical:o,frontDoorBotClassification:i,isSignedInOrCorporateUser:s,cookie:l,count:0},await I.storage.local.set({[Hr]:qt}),qt}function w9(e){let{IG:t,IID:n,subdomain:u,isVertical:a}=qt;return ds(e?T9:y9,u)+"?isVertical=1"+(t&&t.length?"&IG="+t:"")+(n&&n.length?"&IID="+n+"."+qt.count++:"")}function C9(e,t,n,u){let{token:a,key:r}=qt,o={fromLang:n,text:t,token:a,key:r};return!e&&u&&(o.to=u),o}async function Sd(e,t,n){if(!e||!(e=e.trim()))return;if(e.length>vd)throw new Error(`The supported maximum length of text is ${vd}. Please shorten the text.`);Su||(Su=Ad()),await Su,await x9()&&(Su=Ad(),await Su),t=t||"auto",n=n||"zh-CN",t=wd.get(t)||t,n=wd.get(n)||n;let a=w9(!1),r=C9(!1,e,t,n==="auto-detect"?"zh-Hans":n),o={referer:ds(kd,qt.subdomain),"content-type":"application/x-www-form-urlencoded"},i=new URLSearchParams(r),s=a,l=i.toString(),c=await G({retry:2,url:s,headers:o,method:"POST",body:l});if(c.ShowCaptcha||c.StatusCode===401||c.statusCode){if(qt=null,Su=null,await I.storage.local.remove(Hr),c.ShowCaptcha)throw new Error(`
      Sorry that bing translator seems to be asking for the captcha,
      Please take care not to request too frequently.
      The response code is ${c.StatusCode}.
    `);if(c.StatusCode===401)throw new Error(`
      Max count of translation exceeded. Please try it again later.
      The response code is 401.
    `);if(c.statusCode)throw new Error(`Something went wrong! The response is ${JSON.stringify(c)}.`)}let d=c[0].translations[0],g=c[0].detectedLanguage;return{text:d.text,from:Cd.get(g.language),to:Cd.get(d.to)}}function Pd(e){let t=e.split(".");if(t.length<=1)throw new Error("invlaid token");let n=t[1];if(!n)throw new Error("invalid base64 url token");let u=n.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(globalThis.atob(u).split("").map(function(i){return"%"+("00"+i.charCodeAt(0).toString(16)).slice(-2)}).join("")),r=JSON.parse(a),o=new Date(r.exp*1e3);return{accessToken:e,accessTokenExpiresAt:o.toISOString()}}var Vn=null,v9=[["auto",""],["ar","ar"],["ga","ga"],["et","et"],["bg","bg"],["is","is"],["pl","pl"],["bs","bs-Latn"],["fa","fa"],["da","da"],["de","de"],["ru","ru"],["fr","fr"],["zh-TW","zh-Hant"],["fil","fil"],["fj","fj"],["fi","fi"],["gu","gu"],["kk","kk"],["ht","ht"],["ko","ko"],["nl","nl"],["ca","ca"],["zh-CN","zh-Hans"],["cs","cs"],["kn","kn"],["otq","otq"],["tlh","tlh"],["hr","hr"],["lv","lv"],["lt","lt"],["ro","ro"],["mg","mg"],["mt","mt"],["mr","mr"],["ml","ml"],["ms","ms"],["mi","mi"],["bn","bn-BD"],["hmn","mww"],["af","af"],["pa","pa"],["pt","pt"],["ps","ps"],["ja","ja"],["sv","sv"],["sm","sm"],["sr-Latn","sr-Latn"],["sr-Cyrl","sr-Cyrl"],["no","nb"],["sk","sk"],["sl","sl"],["sw","sw"],["ty","ty"],["te","te"],["ta","ta"],["th","th"],["to","to"],["tr","tr"],["cy","cy"],["ur","ur"],["uk","uk"],["es","es"],["he","iw"],["el","el"],["hu","hu"],["it","it"],["hi","hi"],["id","id"],["en","en"],["yua","yua"]],Fd=new Map(v9),pa=class extends re{constructor(){super(...arguments);this.isSupportList=!0;this.maxTextLength=1800}static async clearState(){Vn=null,await jr(Ia)}async translate(n){let{text:u,from:a,to:r}=n;return u?await Sd(u,a,r):{...n}}async init(){if(!Vn){Vn={};let n=await Nr(Ia);n&&(Vn=n)}await Ld(Vn)}async translateList(n){let{from:u,to:a,text:r}=n,o=Fd.get(u)||"auto",i=Fd.get(a)||a;o==="auto"&&(o="");let s=await Ld(Vn),l=[];for(let m of r)l.push({Text:m});let c=JSON.stringify(l),d=`https://api-edge.cognitive.microsofttranslator.com/translate?from=${o}&to=${i}&api-version=3.0&includeSentenceLength=true`,g=await G({url:d,headers:{accept:"*/*","accept-language":"zh-TW,zh;q=0.9,ja;q=0.8,zh-CN;q=0.7,en-US;q=0.6,en;q=0.5",authorization:"Bearer "+s.accessToken,"cache-control":"no-cache","content-type":"application/json",pragma:"no-cache","sec-ch-ua":'"Microsoft Edge";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',"sec-ch-ua-mobile":"?0","sec-ch-ua-platform":'"Windows"',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"cross-site","Referrer-Policy":"strict-origin-when-cross-origin"},body:c,method:"POST"});if(g&&g.length>0&&g[0].translations&&g[0].translations.length>0)return{text:g.map(m=>m.translations[0]?.text||""),from:u,to:a};throw new Error("Microsoft translate error "+JSON.stringify(g))}};async function Ld(e){if(e&&e.accessToken&&e.accessTokenExpiresAt){let t=Date.now(),u=new Date(e.accessTokenExpiresAt).getTime();if(u-t>30*1e3)return e;if(u-t>3e3)return Bd().catch(a=>{F.error(a)}),e}return Bd()}async function Bd(){let e=await la({responseType:"text",url:"https://edge.microsoft.com/translate/auth",headers:{accept:"*/*","accept-language":"zh-TW,zh;q=0.9,ja;q=0.8,zh-CN;q=0.7,en-US;q=0.6,en;q=0.5","cache-control":"no-cache",pragma:"no-cache","sec-ch-ua":'"Microsoft Edge";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',"sec-ch-ua-mobile":"?0","sec-ch-ua-platform":'"Windows"',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"cross-site","sec-mesh-client-arch":"x86_64","sec-mesh-client-edge-channel":"beta","sec-mesh-client-edge-version":"113.0.1774.23","sec-mesh-client-os":"Windows","sec-mesh-client-os-version":"10.0.19044","sec-mesh-client-webview":"0",Referer:"https://appsumo.com/","Referrer-Policy":"strict-origin-when-cross-origin"},body:null,method:"GET"}),t=Pd(e),n=t.accessTokenExpiresAt,a=new Date(n).getTime()-Date.now();return Vn=t,await Ir(Ia,t,a-1e3),{accessToken:e,accessTokenExpiresAt:t.accessTokenExpiresAt}}var Md=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],_d=new Map(Md),A9=new Map(Md.map(([e,t])=>[t,e])),gs=class extends re{constructor(n,u,a){super(n,u,a);this.endpoint="https://api.fanyi.baidu.com/api/trans/vip/translate";this.appid="";this.key="";this.isSupportList=!1;this.maxTextGroupLength=20;if(!n||!n.appid||!n.key)throw new Error("appid and key are required");this.appid=n.appid?.trim(),this.key=n.key?.trim()}getDefaultRateLimit(){return{limit:1,interval:1550}}async translate(n){let u=Date.now().toString(),{endpoint:a}=this,{appid:r,key:o}=this,{text:i,from:s,to:l}=n,c=new URLSearchParams({from:_d.get(s)||"auto",to:_d.get(l)||l,q:i,salt:u,appid:r,sign:vn(r+i+u+o)}),d=new URL(a);d.search=c.toString();let g=await G({url:d.toString()});if(g.error_code)throw new Xe("API_SERVER_ERROR",g.error_msg);let{trans_result:m,from:f}=g,w=m.map(({dst:p})=>p);return{from:A9.get(f)||f,to:l,text:w.join(`
`)}}},Rd=gs;var k9=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"]],ms=new Map(k9),ps=class extends re{constructor(n,u,a){super(n,u,a);this.token="";this.apiKeys=[];if(!n||!n.token)throw new Error("token are required");this.token=n.token?.trim(),this.apiKeys=this.token.split(",").map(r=>r.trim())}getRandomKey(){let n=Math.floor(Math.random()*this.apiKeys.length);return this.apiKeys[n]}async translateList(n){let{text:u,from:a,to:r}=n;if(!ms.get(r))throw new Error(`Unsupported language: ${r}`);a==="auto"&&(a=await Ve({text:u.join(" "),minLength:10}));let i=u,s=this.getRandomKey();return{text:(await G({retry:2,url:"https://api.interpreter.caiyunai.com/v1/translator",headers:{"content-type":"application/json","x-authorization":"token "+s},method:"POST",body:JSON.stringify({source:i,trans_type:`${ms.get(a)||"auto"}2${ms.get(r)}`})})).target,from:a,to:r}}},Od=ps;var D9=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"]],fs=new Map(D9),hs=class extends re{constructor(n,u,a){super(n,u,a);this.token="ssdj273ksdiwi923bsd9"}getDefaultRateLimit(){return{limit:5,interval:1050}}async translateList(n){let{text:u,from:a,to:r}=n;if(!fs.get(r))throw new Error(`Unsupported language: ${r}`);a==="auto"&&(a=await Ve({text:u.join(" "),minLength:10}));let i=u;return{text:(await G({retry:2,url:"https://api.interpreter.caiyunai.com/v1/translator",headers:{"content-type":"application/json","x-authorization":"token "+this.token},method:"POST",body:JSON.stringify({source:i,trans_type:`${fs.get(a)||"auto"}2${fs.get(r)}`})})).target,from:a,to:r}}},Nd=hs;var jd=[["auto","auto"],["en","en"],["ru","ru"],["pt","pt"],["es","es"],["zh-CN","zh-CHS"],["ja","ja"],["ko","ko"],["fr","fr"],["ar","ar"],["id","id"],["vi","vi"],["it","it"]],Id=new Map(jd),S9=new Map(jd.map(([e,t])=>[t,e]));function P9(e){let t=e.length;return t<=20?e:e.substring(0,10)+t+e.substring(t-10,t)}var bs=class extends re{constructor(n,u,a){super(n,u,a);this.isSupportList=!1;this.appId="";this.appSecret="";this.throttleLimit=5;if(!n||!n.appId||!n.appSecret)throw new Error("appId and appSecret are required");this.appId=n.appId?.trim(),this.appSecret=n.appSecret?.trim()}getDefaultRateLimit(){return{limit:5,interval:1050}}async translate(n){let{text:u,from:a,to:r}=n,o=F9(32),i=Math.round(new Date().getTime()/1e3),s=this.appId+P9(u)+o+i+this.appSecret,l=await Ut(s),c={q:u,appKey:this.appId,salt:o.toString(),from:Id.get(a)||"auto",to:Id.get(r)||r,sign:l,signType:"v3",curtime:i.toString()},d=new URLSearchParams(c),m=await G({url:"https://openapi.youdao.com/api",method:"POST",body:d.toString(),headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(!m.translation)throw new Error(JSON.stringify(m));let f=m.l,[w,y]=f.split("2");return{text:m.translation.join(`
`),from:S9.get(w),to:r}}};function F9(e){let t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",u=n.length,a=0;for(;a<e;)t+=n.charAt(Math.floor(Math.random()*u)),a+=1;return t}var zd=bs;var Hd=[["auto","auto"],["en","en"],["ru","ru"],["pt","pt"],["es","es"],["zh-CN","zh-CHS"],["ja","ja"],["ko","ko"],["fr","fr"],["ar","ar"],["id","id"],["vi","vi"],["it","it"]],Ud=new Map(Hd),CA=new Map(Hd.map(([e,t])=>[t,e]));var Es=class extends re{constructor(n,u,a){super(n,u,a);this.isSupportList=!1;this.appId="";this.appSecret="";this.maxTextLength=800}getDefaultRateLimit(){return{limit:5,interval:1050}}async translate(n){let{text:u,from:a,to:r}=n,o={q:u,from:Ud.get(a)||"auto",to:Ud.get(r)||r},i=new URLSearchParams(o),s=await G({url:"https://aidemo.youdao.com/trans",method:"POST",body:i.toString(),headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8","user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"}});if(s&&s.translation)return{text:s.translation.join(`
`),from:a,to:r};throw new Error("Youdao translation failed: "+JSON.stringify(s))}},Wd=Es;var L9={mock:Au,mock2:Au,google:cn,transmart:Gn,deepl:sd,volc:Ed,volcAlpha:ga,bing:pa,tencent:qn,tenAlpha:Kn,baidu:Rd,caiyun:Od,cai:Nd,openl:Mr,youdao:zd,you:Wd,d:Pn,dpro:Pn,deeplx:ma,niu:cd,azure:gd,openai:pd,chatgpt:da,papago:md},ys={};Object.keys(on).forEach(e=>{ys[e]={...on[e],class:L9[e]}});async function Wr(e,t){if(!e.text)return e;let n=await Fn({sentences:[e]},t);if(n.sentences.length>0)return{...e,...n.sentences[0]};throw new Xe("translateFailed","translate failed")}async function Ts(e){let{config:t,translationService:n}=e,u=t.translationGeneralConfig,a=t.translationServices,r=n,o=a[r]||{},i=new ys[r].class(o,u,{translationService:r}),s=i.getDefaultRateLimit();s&&(o&&!o.limit&&(o.limit=s.limit),o&&!o.interval&&(o.interval=s.interval)),await K4(r,o),await i.init()}async function Fn(e,t,n){if(!e.sentences.length)return{...e};let{config:u,translationService:a,state:r}=t,o=u.translationGeneralConfig,i=u.translationServices,s=a,l=i[s]||{};s==="openai"&&(e.sentences=e.sentences.map(p=>({...p,from:"auto"})));let c=[],d={sentences:Array(e.sentences.length)},g=e.sentences.length,m=-1;if(r.cache)for(let p of e.sentences){m++;let _=s;s==="openl"&&(_=s+"-"+l.codename||Mr.DEFAULT_CODENAME);let M=null;try{M=await Va(qd({originalText:p.text,from:p.from,to:p.to,service:_}),1e3)}catch(A){F.warn("query cache DB error, but it's ok",A)}if(M){let A={...p,text:M.translatedText};d.sentences[m]=A,n&&n(null,A,p)}else c.push(p)}else c.push(...e.sentences);let f=c.length;if(g-f>0&&F.debug(`use ${g-f} sentences from cache`),!c.length)return d;let w;try{w=new ys[s].class(l,o,{translationService:s}),await w.init()}catch(p){if(n)for(let _ of c)n(p,null,_);throw p}let y=await w.multipleTranslate({sentences:c},l,(p,_,M)=>{if(n&&n(p,_,M),!p&&_&&!s.startsWith("mock")&&r.cache){let A=s;s==="openl"&&(A=s+"-"+l.codename||Mr.DEFAULT_CODENAME),r.cache&&Va(Kd({translatedText:_.text,from:M.from,to:M.to,detectedFrom:_.from,key:vn(M.text),service:A}),3e3).catch(S=>{F.warn("set cache DB error",S)})}});for(let p of y.sentences){let _=d.sentences.findIndex(M=>!M);if(_===-1)throw new Xe("translateFailed","can not match the result");d.sentences[_]=p}return d}var B9=["block","grid","flex","table","table-row","table-cell","list-item","-webkit-box","box","contents"];function Jn(e,t){if(t.length===0)return!1;let n=t.join(",");return e.matches&&e.matches(n)||!1}function xs(e,t,n){let{blockSelectors:u,extraBlockSelectors:a,extraInlineSelectors:r}=t;if(Jn(e,r))return!1;if(Jn(e,a)||e.nodeName.toLowerCase()==="br")return!0;let s=null;return e.parentNode&&e.parentNode.immersiveTranslateComputedStyle&&(s=e.parentNode.immersiveTranslateComputedStyle),s&&s.display&&s.display==="inline-flex"?!1:n&&n.display?!!B9.includes(n.display):Jn(e,u)}var Pt=Jn;function Yn(e){return!!e.shadowRoot}function Ln(e){if(!e||typeof e!="string"&&(e=e.textContent,!e))return"";let t="";return e!==e.trimStart()&&(t+=" "),t+=e.trim(),t===" "||e!==e.trimEnd()&&(t+=" "),t}function fa(e){if(!e)return["",""];if(typeof e!="string"&&(e=e.textContent,!e))return["",""];let t=[];return e!==e.trimStart()?t.push(" "):t.push(""),!e.trim()&&t.length===1?[" ",""]:(e!==e.trimEnd()?t.push(" "):t.push(""),t)}function qr(e){let t=qa;return e&&(t=e),t}async function Bn(e,t="",n=100){let u="auto";return t?await Ve({text:t,minLength:n}):(e.state.isDetectParagraphLanguage||(u=Tu()),u)}function Kr(e,t){return An(t,e.targetLanguage)}function _9(e){let{rule:t}=e,n=e.config.loadingTheme;return`&#160;<${t.targetWrapperTag} class="${Ce}-loading-${n} notranslate"></${t.targetWrapperTag}>`}function ha(e,t){let n=e.rule,u=document.createElement(n.targetWrapperTag);u.classList.add("notranslate",Bt),u.setAttribute("translate","no"),u.setAttribute("lang",e.targetLanguage),Ge(u,Rl,t.toString());let a=_9(e);return u.innerHTML=a,u}function Pu(e,t){return e.querySelector(`[${ti}='${t}']`)}function $d(){document.querySelectorAll(`[${ti}]`).forEach(t=>{t.remove()})}function Gd(){document.querySelectorAll(`.${Bt}-error`).forEach(t=>{t.remove()})}function Vd(){let e=document.querySelectorAll("iframe"),t=[];return e.forEach(n=>{yu(n)&&t.push(n)}),t}function Jd(e){let{noTranslateRegexp:t,minTextCount:n,minWordCount:u,delimiters:a,text:r}=e,o=new RegExp(`${a[0]}(\\d+)${a[1]}`,"gi"),i=r.trim();return i=i.replace(o,""),i=i.trim(),i===""||i.length===1&&i.charCodeAt(0)===8203||/^[0-9.,\/#!$%\^&\*;:{}=\-_`~()\s]+$/.test(r)||i.includes("</style>")||i.includes("< styles>")||r4(i)||n4(i)||a4(i)||u4(i)||o.test(i)||t&&t.length>0&&new RegExp(t.join("|"),"gi").test(i)?!1:mr(r,n,u)}function _n(e){return e.nodeType===Node.ELEMENT_NODE}function Yd(e,t){return e.paragraphs?e.paragraphs[0].ctxId!==t?(e.paragraphs=[],!1):!0:!1}var M9=1e5;function Mn(e){let{onParagraph:t,filterRule:n,id:u}=e;n=R9(n);let{stayOriginalSelectors:a,globalStyles:r,selectors:o,isTransformPreTagNewLine:i,lineBreakMaxTextCount:s,globalAttributes:l,isModifyImage:c}=n,d={commonAncestorContainer:e.container,rootNodes:[],flatNodes:[],_currentStacks:[],isPreWhitespace:!1},g=!1,m=null;function f(A){let{container:S,onFrame:E,onIgnoreElement:k,id:T}=A,D=document.createTreeWalker(S,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,v=>{let B=U(v);return B==NodeFilter.FILTER_ACCEPT?Ft.mark(v,T):B==NodeFilter.FILTER_REJECT,B}),L=S;if(U(L)===NodeFilter.FILTER_REJECT)return;for(Ft.mark(L,T);L;){if(o&&o.length>0){let{currentNode:v,isMatchedSelection:B}=w(D,L,o);if(v)L=v;else break;if(!B)continue}if(L.nodeType===Node.ELEMENT_NODE||L.nodeType===Node.DOCUMENT_FRAGMENT_NODE){let v=L;if(v.nodeName==="IFRAME"){E&&E(v);break}v.nodeType===Node.ELEMENT_NODE&&(r&&N9(v,r),l&&H9(v,l));let B=xs(v,{blockSelectors:n.blockSelectors,extraInlineSelectors:n.extraInlineSelectors,extraBlockSelectors:n.extraBlockSelectors},v.immersiveTranslateComputedStyle||null);if(Pt(v,a)&&!B){p(v);let Z=null;for(;!(Z=D.nextSibling())&&D.parentNode(););L=Z;continue}let X=Yn(v);(!Xd(d,v)||B)&&(y(),v.childNodes.length>0&&_(d,v,v.immersiveTranslateComputedStyle||null)),X&&v.shadowRoot?.mode==="open"&&(B?E?.(v.shadowRoot):f({...A,container:v.shadowRoot})),v.nodeType===Node.ELEMENT_NODE&&v.nodeName==="PRE"&&i&&z9(v)}else if(L.nodeType===Node.TEXT_NODE)p(L);else throw new Error("should not be here");L=D.nextNode(),d.commonAncestorContainer&&L&&L.parentNode===d.commonAncestorContainer&&(d._currentStacks=[]),d.commonAncestorContainer&&L&&L.nodeType===Node.ELEMENT_NODE&&d._currentStacks.push(L)}function U(v){if(v.nodeType===Node.DOCUMENT_FRAGMENT_NODE)return NodeFilter.FILTER_ACCEPT;if(_n(v)){if(l){let O=Object.keys(l);if(O.length>0&&Pt(v,O))for(let ve of O){let V=l[ve];if(v.matches(ve)){let J=l[ve],xe=Object.keys(J);for(let C of xe){let x=J[C];v.getAttribute(C)!==x&&(x===null?v.removeAttribute(C):v.setAttribute(C,x))}break}}}if(!A.force&&Ft.isMarked(v,T)||Yd(v,T)||vs(v,{excludeSelectors:n.excludeSelectors,selectors:n.selectors,stayOriginalSelectors:a})||v.nodeName==="IFRAME"&&!yu(v))return NodeFilter.FILTER_REJECT;if(v.nodeType===Node.ELEMENT_NODE){let O=window.getComputedStyle(v);if(v.immersiveTranslateComputedStyle={display:O.display,whiteSpace:O.whiteSpace},Cs(v.immersiveTranslateComputedStyle))return k&&k(v),NodeFilter.FILTER_REJECT;let Z=xs(v,{blockSelectors:n.blockSelectors,extraInlineSelectors:n.extraInlineSelectors,extraBlockSelectors:n.extraBlockSelectors},v.immersiveTranslateComputedStyle||null);if(Pt(v,a)&&Z)return NodeFilter.FILTER_REJECT}let{width:B,height:X}=v.getBoundingClientRect();return v.nodeName==="IMG"&&(B>48&&X>48?v.immersiveTranslateComputedStyle={display:"block"}:B>0&&X>0&&c!==!1&&(v.setAttribute("width",B),v.setAttribute("height",X))),!v.childNodes||v.childNodes&&v.childNodes.length===0?NodeFilter.FILTER_ACCEPT:!d.isPreWhitespace&&(B>0&&B<4||X>0&&X<4)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}else if(v.nodeType===Node.TEXT_NODE){let B=v.textContent?.trim();if(!B)return d.isPreWhitespace?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;let X=v.parentNode;if(X.getBoundingClientRect){let{width:O,height:Z}=X.getBoundingClientRect();if(O>0&&O<4||Z>0&&Z<4)return NodeFilter.FILTER_REJECT}return s>0&&B.length>=s&&ws(v,s),NodeFilter.FILTER_ACCEPT}return NodeFilter.FILTER_REJECT}}f(e),d&&d.commonAncestorContainer&&d.flatNodes.length>0&&y();function w(A,S,E){let k=S.immersiveTranslateComputedStyle||null;if(m){if(!m.contains(S))if(g=!1,S&&S.nodeType===Node.ELEMENT_NODE)if($r(S,E))g=!0,m=S,y(),_(d,m,k);else return g=!1,S=A.nextNode(),{currentNode:S,isMatchedSelection:g};else return g=!1,S=A.nextNode(),{currentNode:S,isMatchedSelection:g}}else if(S&&S.nodeType===Node.ELEMENT_NODE)if($r(S,E))g=!0,m=S,y(),_(d,m,k);else return g=!1,S=A.nextNode(),{currentNode:S,isMatchedSelection:g};else return g=!1,S=A.nextNode(),{currentNode:S,isMatchedSelection:g};return{currentNode:S,isMatchedSelection:!0}}function y(){let A=j9(d,u);A&&t&&t(A),Qd(d)}function p(A){if(!Xd(d,A)){y(),Qd(d);let S=A.parentNode;S&&_(d,S,S.computedStyle)}d.flatNodes.push(A)}function _(A,S,E){A.commonAncestorContainer=S;let k=M(E);A.isPreWhitespace=k}function M(A){return A&&A.whiteSpace&&A.whiteSpace.startsWith("pre")||A&&A.whiteSpace==="break-spaces"||!1}}function Xd(e,t){let n=!1;(t.nodeType===Node.ELEMENT_NODE||t.nodeType===Node.DOCUMENT_FRAGMENT_NODE)&&(n=Yn(t));let u=I9(e),a=!0;return!n&&!u&&(e.commonAncestorContainer&&e.commonAncestorContainer.contains(t)?a=!0:e.commonAncestorContainer&&(a=!1,e._currentStacks=[])),a}function R9(e){let{isTransformPreTagNewLine:t}=e;return e.excludeSelectors=e.excludeSelectors.filter(n=>{let u=n!=="iframe";return t?u&&n!=="pre":u}),e}function O9(e,t,n){if(t){for(let u of t.childNodes)if(u.contains(n))return u}return e._currentStacks.length>0?(e.commonAncestorContainer||(e.commonAncestorContainer=e._currentStacks[0]),e._currentStacks[0]):null}function N9(e,t){if(t){let n=Object.keys(t);if(n.length>0&&Pt(e,n))for(let a of n){let r=t[a];if(e.matches(a)){e.style.cssText=r;break}}}}function I9(e){return e&&e._currentStacks?e._currentStacks.some(t=>Yn(t)):!1}function j9(e,t){let{flatNodes:n,commonAncestorContainer:u}=e;if(u&&n.length>0){if(!n.map(g=>g.textContent?.trim()||"").join(""))return null;if(n.length===1)return{ctxId:t,stepState:1,commonAncestorContainer:n[0].parentNode,rootNodes:[n[0]],flatNodes:n,isPreWhitespace:e.isPreWhitespace,variables:{}};let r=U9(n,u);r||(r=u);let o=[];for(let g of n){let m=O9(e,r,g);m&&(o.includes(m)||o.push(m))}if(o.length<1)return null;let i=o[0],s=o[o.length-1],l=[],c=i,d=0;for(;c&&(l.push(c),c!==s);){if(d++,d>M9){F.warn("loop too many times for convert root nodes, break");break}c=c.nextSibling}return{ctxId:t,rootNodes:l,stepState:1,flatNodes:n,commonAncestorContainer:r,variables:{},isPreWhitespace:e.isPreWhitespace}}else return null}function Qd(e,t=!1){e.rootNodes=[],e.flatNodes=[],e._currentStacks=[],t&&(e.commonAncestorContainer=null)}function Cs(e){let t=e.top?parseInt(e.top):0,n=e.left?parseInt(e.left):0,u=e.right?parseInt(e.right):0,a=e.bottom?parseInt(e.bottom):0;return isNaN(t)&&(t=0),isNaN(n)&&(n=0),isNaN(u)&&(u=0),isNaN(a)&&(a=0),e.display==="none"||t<-1e3||n<-1e3||u<-1e3||a<-1e3}var Ft={_marked_key:"immersive_translate_walked",isMarked(e,t){return Ri(e,this._marked_key,t)},clearMark(e){if(!(!e||e.nodeType!==Node.ELEMENT_NODE)&&!(e instanceof HTMLIFrameElement||Yn(e)))return fr(e,this._marked_key)},mark(e,t){if(!(!e||e.nodeType!==Node.ELEMENT_NODE)&&!(e instanceof HTMLIFrameElement||Yn(e)))return Ge(e,this._marked_key,t)},markWalk(e,t){if(!e||e.nodeType!==Node.ELEMENT_NODE||this.isSkipMarkEle(e))return;let n=Eu(e,"markWalk")||"";return Ge(e,"markWalk",n+","+t)},isSkipMarkEle(e){return e?!!(e instanceof HTMLIFrameElement||Yn(e)):!1}};function z9(e){let n=e.innerHTML.replace(/\n\n/g,"<br />");e.innerHTML=n}function U9(e,t){if(!e.length)return null;let n=e.map(u=>{let a=new Set;for(;(u=u.parentNode)&&(a.add(u),u!==t););return a});for(let u of n[0])if((u.nodeType===Node.ELEMENT_NODE||u.nodeType===Node.DOCUMENT_FRAGMENT_NODE)&&n.every(a=>a.has(u)))return u;return null}function ws(e,t){let n=e.textContent||"";if(n.trim().length<=t)return;let r=[". ","? ","! ","\u3002","\uFF1F","\uFF01"].reduce((o,i)=>{let s=n.lastIndexOf(i,t);return s>o?s:o},-1);if(r>1){let o=n[r-1]||"",i=n[r-2]||"",s=n[r+1]||"";o==="."||s==="."||s===")"||i==="."&&o==="S"||i.toUpperCase()==="M"&&(o.toUpperCase()==="R"||o.toUpperCase()==="S")?r=-1:isNaN(Number(o))||(r=-1)}if(r===-1)n.length>t+20&&ws(e,t+20);else{let o=n.slice(r+1);r++,o.startsWith(" ")&&r++;let i=e.splitText(r),s=document.createElement("br");i.parentNode?.insertBefore(s,i),r+1<n.length&&ws(i,t)}}function Zd(e,t){let n=Object.keys(t);if(n.length>0)for(let u of n){let a=t[u],r=Object.keys(a),o=Qc(e,[u]);for(let i of o)for(let s of r){let l=a[s];i.getAttribute(s)!==l&&(l===null?i.removeAttribute(s):i.setAttribute(s,l))}}}function eg(e,t,n,u,a,r){let o=Object.keys(t);if(o.length>0)for(let i of o){let s=t[i],l=Object.keys(s),c=e.querySelector(i);if(c)for(let d of l){let g=s[d];if(d==="translate"&&g==="no"){let f=c.innerText||c.textContent||"";if(!f.trim()||W9(c,a,r)||!e4(f,n,u))continue}c.getAttribute(d)!==g&&(g===null?c.removeAttribute(d):c.setAttribute(d,g))}}}function H9(e,t){if(t){let n=Object.keys(t);if(n.length>0&&Pt(e,n))for(let a of n){let r=t[a];if(e.matches(a)){let o=t[a],i=Object.keys(o);for(let s of i){let l=o[s];e.getAttribute(s)!==l&&(l===null?e.removeAttribute(s):e.setAttribute(s,l))}break}}}}function vs(e,t){return Pt(e,t.excludeSelectors||[])?Pt(e,t.selectors||[])?!1:!Pt(e,t.stayOriginalSelectors||[]):!1}function $r(e,t){if(t.length===0)return!1;let n=t.filter(u=>!u.endsWith("*")).map(u=>u+" *");return Pt(e,t.concat(n))}function W9(e,t,n){let u=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,a=>(F.debug("node",a),NodeFilter.FILTER_ACCEPT));for(;u.nextNode();){let a=u.currentNode;if(a.nodeType===Node.TEXT_NODE&&parent){let r=a.textContent||"";if(r.includes("Copyright"))continue;if(mr(r,t,n))return F.v("innerText",r,t,n),!0}}return!1}function tg(e,t,n,u){let a=t,r=Kl[a]||[],o="";e&&r&&r.length>0&&r.forEach(l=>{let{name:c}=l;if(e&&n&&n[c]){let d=n[c];if(["borderRadius"].includes(c)&&(d+="px"),o+=`--immersive-translate-theme-${a}-${c}: ${d};
`,t==="marker"&&c==="backgroundColor"&&typeof d=="string"){let{r:g,g:m,b:f}=o4(d);o+=`--immersive-translate-theme-${a}-${c}-rgb: ${g}, ${m}, ${f};
`}}});let i="";if(n&&n.textColor){let l=n.textColor;i+=`
.immersive-translate-target-translation-theme-${a}-inner{color: ${l};}
`}if(n&&n.zoom){let l=n.zoom;i+=`
.immersive-translate-target-translation-theme-${a}-inner{font-size: max(13px, ${l}%);}
`}let s="";o&&(s=`:root {
${o}}
`),i&&(s+=i),s?wn(e,s,"immersive-translate-user-custom-style"):u&&wn(e,"","immersive-translate-user-custom-style")}function Fu(e,t){let u=tt().IMMERSIVE_TRANSLATE_INJECTED_CSS;wn(e,u,"immersive-translate-default-injected-css");let a=t.config.translationThemePatterns||{},r=t.state.translationTheme,o=a[r]||{};tg(e,r,o);let i="";(t.rule.injectedCss||t.rule.additionalInjectedCss)&&(t.rule.injectedCss&&t.rule.injectedCss.length>0&&(i+=t.rule.injectedCss.join(`
`)),t.rule.additionalInjectedCss&&t.rule.additionalInjectedCss.length>0&&(i+=`
`+t.rule.additionalInjectedCss.join(`
`))),i&&wn(e,i,"immersive-translate-dynamic-injected-css")}async function ng(){let e="auto";return document.body&&document.body.textContent&&document.body.textContent.trim()&&(e=await Ve({text:bu(document.body)})),e==="auto"&&document.documentElement&&document.documentElement.lang&&(e=Hn(document.documentElement.lang)),e}function q9(e,t,n=[],u,a){let r=["notranslate"];return u&&r.push(ql),e&&(r.push(`${Ce}-target-translation-theme-${e}`),t?r.push(`${ui}-theme-${e}`):r.push(`${ni}-theme-${e}`)),n.length>0&&r.push(...n),t?r.push(ui):(r.push(ni),a&&r.push(Wl)),r}function K9(e){let t=["notranslate",Ul];return e&&t.push(`${Ce}-target-translation-theme-${e}-inner`),t}function ug(e,t,n){let{rule:u,state:a}=n,{translationTheme:r}=a,{variables:o,isVertical:i}=e;o=o||[];let{text:s}=t,{wrapperPrefix:l,wrapperSuffix:c}=u,d=hr(n),g="afterend",m=d[0].replace(/\//g,"\\/");m=m.replace(/"/g,'\\"');let f=d[1].replace(/\//g,"\\/");f=f.replace(/"/g,'\\"');let w=`${m}(\\d+)${f}`,y=new RegExp(w,"g"),p=s;o.length>0&&(p=p.replace(y,S=>{let E=p.indexOf(S),k=p[E-1]===" ",T=p[E+S.length]===" ",D=S.slice(d[0].length,-d[1].length),L=Number(D);if(isNaN(L))return S;let U=o[Number(L)];if(U&&U.type==="element"){let v=U.value.outerHTML;return k||(v=" "+v),T||(v=v+" "),v}else F.error("variable type not supported",U,S);return S}));let _=q9(r,e.inline,u.translationClasses||[],e.preWhitespace,n.rule.isPdf);i&&_.push(Hl);let M=K9(r),A="";return u.translationBlockStyle&&(A=`style="${u.translationBlockStyle}"`),p=`<${n.rule.targetWrapperTag} ${A} class="${_.join(" ")}" ${lu}="1"><${u.targetWrapperTag} class="${M.join(" ")}" ${lu}="1">${p}</${u.targetWrapperTag}></${u.targetWrapperTag}>`,e.inline||(l==="smart"?p=`<br />${p}`:p=`${l}${p}`),e.inline&&(l!=="smart"?p=`${l}${p}`:p=`<${u.targetWrapperTag} class="notranslate" ${lu}="1">&#160;</${u.targetWrapperTag}>${p}`),c==="smart"?p=`${p}`:p=`${p}${c}`,{html:p,position:g}}function Gr(e,t){let n=null,{stayOriginalSelectors:u,delimiters:a,isPreWhitespace:r}=t,o="",i={};for(let s=0;s<e.length;s++){let l=e[s],c=l.parentNode,d=c?.nodeName==="PRE",g=l.textContent||"",m=c?.textContent||"";if(l.nodeType===Node.TEXT_NODE&&c&&g===m&&(l=c),r)if(l.nodeType===Node.ELEMENT_NODE)if(l&&Pt(l,u)){let w=Object.keys(i).length,y=`${a[0]}${w}${a[1]}`;i[w]=l,o+=y}else o+=l.textContent||"";else{let f=l.textContent||"";d&&(f=Ln(As(l))),o+=f}else if(l.nodeType===Node.ELEMENT_NODE)if(l&&Pt(l,u)){let w=Object.keys(i).length,y=`${a[0]}${w}${a[1]}`;i[w]=l;let p=o.endsWith(" ")?" ":"",_=Ln(l.innerText||l.textContent),M=Ln(l.nextSibling).startsWith(" ")?" ":"",A=fa(p+_+M),S=A[0]+y+A[1];if(p===" ")S=S.trimStart();else if(!S.startsWith(" ")){let E=fa(l.previousSibling)[1];E===""&&(E=" "),S=E+S}o+=S}else{let f=o.endsWith(" ")?" ":"",w=Ln(l.innerText||l.textContent);d&&(w=Ln(As(l)));let y=Ln(l.nextSibling).startsWith(" ")?" ":"",p=fa(f+w+y),_=p[0]+(l.innerText?.trim()||l.textContent?.trim()||"")+p[1];if(f===" ")_=_.trimStart();else{let M=fa(l.previousSibling)[1];M===""&&(l.nodeName==="A"||l.nodeName==="CODE")&&(M=" "),_=M+_}o+=_}else{let f=o.endsWith(" ")?" ":"",w="";l.textContent&&(w=Ln(As(l))),f===" "&&(w=w.trimStart()),o+=w}}return o&&(n={text:o,variables:i}),n}function ag(e,t){let{rule:n}=t;if(!e.targetText)return"";let u=[];if(e.variables){let c=Object.keys(e.variables);for(let d=0;d<c.length;d++){let g=c[d],m=e.variables[g];u[g]={type:"element",value:m}}}let a=!1,r=e.text,o=r.split(" ").length,i=r.split(`
`).length;o<=n.blockMinWordCount&&r.length<=n.blockMinTextCount&&i<2&&(a=!0);let s={id:Number(e.id),elements:[],isVertical:!1,rootFrame:e.commonAncestorContainer,text:e.text,variables:u,inline:a,preWhitespace:e.isPreWhitespace||!1,languageByLocal:"auto",languageByClient:"auto"},l=ug(s,{id:Number(e.id),url:"https://google.com",text:e.targetText,from:"auto",to:"auto",fromByClient:"auto"},t);return l.html}function As(e){return(e?.innerText||e.textContent||"").replace(/\s+/g," ")||""}function Kt(e){return{globalStyles:e.rule.globalStyles,globalAttributes:e.rule.globalAttributes,selectors:e.rule.selectors,lineBreakMaxTextCount:e.rule.lineBreakMaxTextCount,isTransformPreTagNewLine:e.rule.isTransformPreTagNewLine,excludeSelectors:e.rule.excludeTags.concat(e.rule.additionalExcludeTags).map(n=>n.toLowerCase()).filter(n=>n!=="code"&&n!=="img").concat(e.rule.excludeSelectors).concat(e.rule.additionalExcludeSelectors),blockSelectors:e.rule.allBlockTags.map(n=>n.toLowerCase()).concat(e.rule.extraBlockSelectors),extraBlockSelectors:e.rule.extraBlockSelectors,extraInlineSelectors:e.rule.extraInlineSelectors.concat(e.rule.additionalInlineSelectors),stayOriginalSelectors:e.rule.stayOriginalTags.concat(e.rule.stayOriginalTags).map(n=>n.toLowerCase()).concat(e.rule.stayOriginalSelectors).concat(e.rule.additionalStayOriginalSelectors)}}function Ss(e,t){e.interruptEffectDOM||(e.walkContainer({id:e.id,container:t,filterRule:Kt(e.ctx),onParagraph:ba.bind(null,e),onFrame:n=>{Ds(e,n,!0)},onIgnoreElement:n=>{e.ignoreResizeObserver?.observe(n)}}),hu&&Ge(t,"consumeContainer",e.id))}function Ds(e,t,n){try{if(e.injectCssToDocument(t,e.ctx),t instanceof HTMLIFrameElement){if(!yu(t))return;F.debug("onFrame fragment",t);let u=t.contentWindow?.document.body;u&&(Bu(u,e,n),e.dynamicContainerObserver?.observe(u,{childList:!0,subtree:!0}))}else F.debug("onFrame shadowRoot",t.host),Bu(t,e,n),e.dynamicContainerObserver?.observe(t,{childList:!0,subtree:!0})}catch{}}function Bu(e,t,n=!0){if(o(t,e,n))return;let u=0;try{let i=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,s=>o(t,s,n)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT);for(Ft.mark(i.currentNode,t.id);i.nextNode();){Ft.mark(i.currentNode,t.id);let s=i.currentNode;if(r(s))for(a(s);;){if(i.nextSibling()){let l=i.currentNode;if(Ft.mark(i.currentNode,t.id),r(l)){a(l);continue}else break}if(!i.parentNode())return}}}catch{}if(u==0&&e instanceof HTMLElement){a(e);return}return t.observeContainers;function a(i){Ft.clearMark(i),u++,t.immediateTranslateCapacity>=0?Ss(t,i):(hu&&Ge(i,"observeContainer",t.id),t.containerVisibleObserver?.observe(i))}function r(i){let s=i.nodeName.toLowerCase();if(i.shadowRoot)return Ds(t,i.shadowRoot,n),!1;if(s==="iframe")return Ds(t,i,n),!1;if(["script","#document-fragment","img"].includes(s))return!1;let l=t.containerRule;if(l.selectors&&l.selectors?.length>0)return $r(i,l.selectors);if(l.pageHeight){let c=i.scrollHeight;if(c>0&&c<l.pageHeight)return!0;for(let d of i.childNodes)if(d.nodeType==Node.TEXT_NODE&&d.textContent&&d.textContent.trim().length>0)return!0}return!1}function o(i,s,l){let c=s.nodeName.toLowerCase(),d=Kt(i.ctx);return c=="script"?s.childNodes.length==0||s.childNodes.length==1&&s.childNodes[0].nodeType==Node.TEXT_NODE:s.nodeType===Node.DOCUMENT_FRAGMENT_NODE?!1:s.nodeType!==Node.ELEMENT_NODE||l&&Ft.isMarked(s,i.id)?!0:i.ctx.rule.isTransformPreTagNewLine&&s.nodeName==="PRE"?!1:!!vs(s,{excludeSelectors:d.excludeSelectors,selectors:d.selectors,stayOriginalSelectors:d.stayOriginalSelectors})}}function Ps(e,t){if(!e.targetNodes)return;let n=e.state||"original",u=e.commonAncestorContainer;if(!Ft.isMarked(u,e.ctxId))return;let a=u.contains(e.rootNodes[0]),r=u.contains(e.targetNodes[0]);if(a&&r)n="dual";else if(a)n="original";else if(r)n="translation";else return;if(t!=n){e.state=t;try{if(n=="dual"&&t=="translation"&&(Vr(e.rootNodes),rg(e.commonAncestorContainer)),n=="original"&&t=="translation"){let o=ks(e.rootNodes);Vr(e.rootNodes),Lu(o,u,e.targetNodes||[]),rg(e.commonAncestorContainer)}if(n=="translation"&&t=="dual"){let o=e.targetNodes[0];Lu(o,u,e.rootNodes||[]),og(e.commonAncestorContainer)}if(n=="original"&&t=="dual"){let o=ks(e.rootNodes);Lu(o,u,e.targetNodes||[]),og(e.commonAncestorContainer)}if(n=="translation"&&t=="original"){let o=ks(e.targetNodes);Vr(e.targetNodes),Lu(o,u,e.rootNodes||[])}n=="dual"&&t=="original"&&Vr(e.targetNodes)}catch(o){F.error(o)}}}function rg(e){if(!_n(e))return;e.querySelectorAll("font[class*=immersive-translate-target-translation]").forEach(u=>{Ge(u,"immersiveTranslateClassBak",u.className),u.className="notranslate immersive-translate-target-dual"});let n=e.querySelector(".immersive-translate-target-wrapper");n&&n.classList.add("immersive-translate-state-dual")}function og(e){if(!_n(e))return;e.querySelectorAll("font[class*=immersive-translate-target-dual]").forEach(u=>{let a=Eu(u,"immersiveTranslateClassBak");fr(u,"immersiveTranslateClassBak"),u.className=a});let n=e.querySelector(".immersive-translate-target-wrapper");n&&n.classList.remove("immersive-translate-state-dual")}function ks(e){return e?e[e.length-1].nextSibling:null}function Vr(e){(e||[]).forEach(t=>t.parentNode?.removeChild(t))}function Lu(e,t,n){let u=e;t&&(u?n.forEach(a=>{u.parentNode?.insertBefore(a,u)}):n.forEach(a=>{t.appendChild(a)}))}var $9=st(Ls,300);async function ba(e,t,n=!1){if(e.interruptEffectDOM)return;let u=t.commonAncestorContainer;if(u instanceof ShadowRoot||G9(t.rootNodes)||t.stepState>=2)return;t.stepState=2,hu&&Ge(u,"onParseParagraph",e.id);let{ctx:a}=e,{rule:r}=a,o=hr(a),i=Gr(t.flatNodes,{isPreWhitespace:t.isPreWhitespace||!1,delimiters:o,stayOriginalSelectors:a.rule.stayOriginalTags.concat(a.rule.stayOriginalTags).map(l=>l.toLowerCase()).concat(a.rule.stayOriginalSelectors).concat(a.rule.additionalStayOriginalSelectors)});if(!i)return;t.variables=i?.variables||{},t.text=i?.text;let s=await Bs(t,{excludeLanguages:a?.config?.translationLanguagePattern?.excludeMatches||[],isDetectParagraphLanguage:a.state.isDetectParagraphLanguage,targetLanguage:a.targetLanguage,noTranslateRegexp:a.rule.noTranslateRegexp,delimiters:qr(a.config.translationServices[a.translationService]?.placeholderDelimiters),minTextCount:n||a.state.translationArea==="body"?2:r.paragraphMinTextCount,minWordCount:n||a.state.translationArea==="body"?1:r.paragraphMinWordCount});if(s){if(F.debug("on paragraph",s.text,s),u.paragraphs=u.paragraphs||[],u.paragraphs.includes(s))return;u.paragraphs.push(s),e.immediateTranslateCapacity>0||n?(V9(e,t.text),Fs(e,t)):(hu&&Ge(u,"observeParagraph",e.id),e.observeParagraphs.push(s),e.paragraphVisibleObserver?.observe(u))}return s}function G9(e){if(!e)return!1;let t=e[e.length-1].nextSibling;return t?_n(t)&&t.classList.contains(Bt):!1}function V9(e,t){e.ctx.state.translationStartMode!=="immediate"&&(e.immediateTranslateCapacity-=t?.length||0)}function Fs(e,t){if(e.interruptEffectDOM||t.stepState>=3)return;t.stepState=3;let n=e.autoIncreaseParagraphId++;t.id=n.toString(),e.paragraphEntities[n]=t,e.paragraphQueue.push(n.toString()),hu&&Ge(t.commonAncestorContainer,"consumeParagraph",e.id),$9.call(e,e.ctx)}async function Ls(e){if(this.interruptEffectDOM)return;let t=this.paragraphQueue;this.paragraphQueue=[];let n=[];for(let u=0;u<t.length;u++){let a=t[u],r=this.paragraphEntities[a];r&&n.push(r)}await Jr(n,e,this.translateState)}async function Jr(e,t,n){let u={sentences:[]};for(let a of e){let r=a.id,o=ha(t,r),i=a.rootNodes[a.rootNodes.length-1].nextSibling;Lu(i,a.commonAncestorContainer,[o]),u.sentences.push({id:parseInt(r),url:t.encryptedUrl,text:a.text,from:a.languageByLocal||"auto",fromByClient:a.languageByClient||"auto",to:t.targetLanguage})}if(u.sentences.length>0)try{await Fn(u,t,(a,r,o)=>{let i=o.id,s=J9(e,i.toString());s&&Y9.call(null,a,r,o,s,t,n)})}catch(a){F.error("translateCurrentQueue error",a);return}}function J9(e,t){return e.find(n=>n.id===t)}function Y9(e,t,n,u,a,r){let o=!1,i=u;if(Pu(i.commonAncestorContainer,n.id)?.remove(),i&&(e||!t)){e||(F.error("translate error",n,e,t),e=new Error("no response from server"));let{rule:s}=a,l=n.id,c=document.createElement(s.targetWrapperTag);Ge(c,Ol,l.toString()),c.classList.add("notranslate",Bt,Bt+"-error"),c.setAttribute("translate","no"),c.setAttribute("lang",a.targetLanguage);let d=u.rootNodes[u.rootNodes.length-1].nextSibling;Lu(d,u.commonAncestorContainer,[c]);let g=e.message.replaceAll(`
`,"");g=g.replaceAll('"',"&quot;"),i&&(i.error=new Error(g));let m=`<${s.targetWrapperTag} class="${Ce}-error notranslate"> <${s.targetWrapperTag} class="immersive-translate-tooltip" data-immersive-translate-tooltip-text="${g}"><button class="${Ce}-clickable-button notranslate" title="${g}">\u2757</button></${s.targetWrapperTag}> <button class="${Ce}-clickable-button notranslate" data-${Ce}-paragraph-id="${l}" data-${Ce}-action="retry">\u{1F504}</button></${s.targetWrapperTag}>`;c&&(c.innerHTML=m)}else if(u){i.error=void 0,u.targetText=t?.text||"";let s=ag(u,a),l=document.createElement(a.rule.targetWrapperTag);l.classList.add("notranslate",Bt),l.setAttribute("lang",a.targetLanguage),l.setAttribute(lu,"1");let c=rr.sanitize(s);l.innerHTML=c,u.targetNodes=[l],Ps(u,r),o=!0}else F.error("paragraph not found",n.id);document.dispatchEvent(new CustomEvent(ht,{detail:JSON.stringify({type:"paragraphTranslated",payload:{ok:o}})}))}async function Bs(e,t){let{text:n}=e,u=await Ve({text:n||"",minLength:10}),{targetLanguage:a}=t;if(!Jd({text:n||"",delimiters:t.delimiters,minWordCount:t.minWordCount,minTextCount:t.minTextCount,noTranslateRegexp:t.noTranslateRegexp}))return null;let o=t.excludeLanguages||[],i="auto";t.isDetectParagraphLanguage||(i=Tu());let s=Zt(),l=u;l==="auto"&&(l=s),e.languageByLocal=l,e.languageByClient=i;let c=i!=="auto"?i:l;return An(c,a)||o.length>0&&o.some(m=>An(c,m))?null:e}var X9=[];function ig(e){X9.push(e)}function sg(e){let t=document.querySelector("title"),n;return t&&(n=new MutationObserver(function(u){u.length>0&&(u[0].target.text.includes(Ka)||_s(e).catch(r=>{F.error("translateTitle error:",r.name,r.message,r.details||"")}))}),n.observe(t,{subtree:!0,characterData:!0,childList:!0})),n}var Yr="";async function _s(e){let t=document.title;if(!t||t.includes(Ka))return;Yr!==t&&(Yr=t);let n=await Bn(e,t);if(!Kr(e,n))try{let u=await Wr({id:0,url:e.url,text:t,from:n,to:e.targetLanguage,fromByClient:n},e);u&&u.text&&(document.title=Yr+Ka+u.text)}catch(u){throw u}}function lg(e){e.rule.isTranslateTitle&&(document.title=Yr)}var Ms="Original";function Ne(){return Ms}function Tt(e){Ms=e,cg(Ms)}var Rs;function dg(e){let t=e.ctx.rule.aiRule;if(F.debug("aiRule",t),!t||Object.keys(t).length===0)return;let u=Kt(e.ctx),a=u.excludeSelectors.indexOf(`${t.messageWrapperSelector} *`);u.excludeSelectors.splice(a,1);let r,o;document.querySelectorAll(`${t.messageWrapperSelector} > *`).forEach(l=>{Xr(e,l,u)}),Rs=new MutationObserver(l=>{l.forEach(function(c){if(_n(c.target)){if(o==r&&c.target===r&&c.type==="attributes"){s();return}if(c.removedNodes.length>0&&o&&o!=r){c.removedNodes?.forEach(d=>{d===r&&s()});return}if(i(c.target),o&&c.target==o&&t.streamingSelector.indexOf(t.messageWrapperSelector)>=0&&o!==r){if(o.translated)return;o.translated=!0,F.debug("\u4E0D\u4E00\u6837\u9700\u8981\u5EF6\u8FDF\u7FFB\u8BD1",o),Xr(e,o,u);return}t.streamingChange&&r&&(c.target===o||c.target.parentNode===o)&&c.addedNodes.forEach(d=>{let g=d.previousSibling;!g||g.translated||(g.translated=!0,setTimeout(()=>{g.childNodes[0]?.translated||(F.debug("\u7FFB\u8BD1\u4E0A\u4E00\u4E2A\u6BB5\u843D",g),Xr(e,g,u))},100))})}})}),Rs.observe(document.body,{attributes:!0,childList:!0,subtree:!0});function i(l){Jn(l,[t.streamingSelector])&&(r=l,F.debug("streamingNode",r)),Jn(l,[t.messageWrapperSelector])&&(o=l,F.debug("markdownNode",o))}function s(){o.childNodes.forEach(l=>l.translated=!1),F.debug("\u7ED3\u675F\u7FFB\u8BD1\u5168\u90E8",o),Xr(e,o,u),r=void 0,o=null}}function Xr(e,t,n){Mn({id:e.id,container:t,filterRule:n,force:!0,onParagraph:u=>{ba(e,u,!0)},onFrame:()=>{},onIgnoreElement:()=>{}})}function gg(){Rs?.disconnect()}var j=null;function Zr(){return j||null}function eo(e){n6(e),Z9(e),t6(e),Fu(document,e),Tt("Translated"),e6(j),Q9(j),ig(Rn),dg(j)}function Q9(e){e.dynamicContainerObserver?.observe(document.body,{subtree:!0,childList:!0});let t=[];e.ctx.rule.mainFrameSelector&&(t=[...document.querySelectorAll(e.ctx.rule.mainFrameSelector||"")]),t.length<=0&&(t=[document.body]),t.forEach(n=>{Bu(n,e)})}async function Z9(e){if(!e.state.isAutoTranslate&&e.config.tempTranslateDomainMinutes>0){let t=Date.now(),u=new URL(e.url).hostname,a=e.localConfig.tempTranslationUrlMatches||[],r=a.findIndex(i=>i.match===u&&i.expiredAt>t),o=!1;r>-1||(a.push({match:u,expiredAt:t+e.config.tempTranslateDomainMinutes*60*1e3}),o=!0),o&&await Wn({...e.localConfig,tempTranslationUrlMatches:[...a]})}}function e6(e){e.ctx.rule.isTranslateTitle&&(_s(e.ctx),e.titleDynamicObserver=sg(e.ctx))}function t6(e){if(e.rule.normalizeBody&&document.querySelector(e.rule.normalizeBody)){let n=document.body.innerHTML;document.body.innerHTML="",document.body.innerHTML=n}}function n6(e){let t=St();j&&(t=j.id),j=j||{},j.ctx=e,j.id=t,j.paragraphQueue=j.paragraphQueue||[],j.rule={excludeSelectors:Kt(e).excludeSelectors,selectors:e.rule.selectors},j.currentUrl=window.location.href,j.containerRule={pageHeight:screen.availHeight,selectors:j.rule.selectors},j.paragraphEntities=j.paragraphEntities||{},j.autoIncreaseParagraphId=j.autoIncreaseParagraphId||1,j.interruptEffectDOM=!1,j.urlChangeDelay=e.rule.urlChangeDelay,j.immediateTranslateCapacity=e.state.immediateTranslationTextCount,j.observeContainers=j.observeContainers||[],j.observeParagraphs=j.observeParagraphs||[],j.dynamicContainerObserver=j.dynamicContainerObserver||i6(j),j.ignoreResizeObserver=j.ignoreResizeObserver||s6(j),j.containerVisibleObserver=j.containerVisibleObserver||a6(j),j.paragraphVisibleObserver=j.paragraphVisibleObserver||r6(j),j.injectCssToDocument=Qr,j.walkContainer=Mn,j.translateState=e.state.translationMode||e.config.translationMode||"dual",j.allInlineWindows=[window],window.onerror=u6(j,e),window.immersiveTranslateSwitchTranslateState=Ns.bind(j)}function pg(e,t){t.getRootNode()instanceof ShadowRoot?Qr(t.getRootNode(),e):Qr(t.ownerDocument,e),Os(e)}function Os(e){j||(j={},j.ctx=e,j.id=St(),j.paragraphQueue=[],j.injectCssToDocument=Qr,j.rule={excludeSelectors:Kt(e).excludeSelectors,selectors:e.rule.selectors},j.currentUrl=window.location.href,j.paragraphEntities={},j.autoIncreaseParagraphId=1,j.interruptEffectDOM=!1,j.urlChangeDelay=e.rule.urlChangeDelay,j.translateState=e.config.translationMode||"dual",j.observeContainers=[],j.observeParagraphs=[],j.allInlineWindows=[window],window.switchTranslateState=Ns.bind(j))}function Rn(e=!0){j&&(Tt("Original"),gg(),j.interruptEffectDOM=!0,j.ignoreResizeObserver?.disconnect(),j.dynamicContainerObserver?.disconnect(),j.containerVisibleObserver?.disconnect(),j.paragraphVisibleObserver?.disconnect(),j.titleDynamicObserver?.disconnect(),lg(j.ctx),$d(),Gd(),e&&Ns.call(j,"original"),Object.values(j.paragraphEntities).forEach(t=>{t.commonAncestorContainer.paragraphs=null}),j=null)}function u6(e,t){e.interruptEffectDOM=!1;let n;return function(u){let a=u.message,r=!1;return a?.indexOf("Minified React error")>=0&&(r=!0),r&&(clearTimeout(n),Rn(),n=setTimeout(()=>{eo(t)},e.urlChangeDelay||2e3)),!0}}function a6(e){return new IntersectionObserver((t,n)=>{e.interruptEffectDOM||t.forEach(u=>{u.intersectionRatio>0&&(Ss(e,u.target),n.unobserve(u.target))})})}function r6(e){return new IntersectionObserver((t,n)=>{e.interruptEffectDOM||t.forEach(u=>{if(u.intersectionRatio>0){let a=u.target;(a.paragraphs||[]).forEach(o=>{Fs(e,o)}),n.unobserve(a)}})})}var mg;function o6(e){if(e.urlChangeDelay<=0)return!1;let n=(window.location.href||"").split("#")[0];return e.currentUrl.split("#")[0]!=n?(clearTimeout(mg),e.translateState=="original"?!1:(Rn(e.urlChangeDelay>20),mg=setTimeout(()=>{let a=e.ctx;eo(a)},e.urlChangeDelay),!0)):!1}function i6(e){return new MutationObserver(t=>{if(!o6(e)&&!e.interruptEffectDOM)for(let n of t){if((n.addedNodes||[]).length<=0||n.target.nodeType!==Node.ELEMENT_NODE||!Ft.isSkipMarkEle(n.target)&&!Ft.isMarked(n.target,e.id))continue;let a=(n.target?.paragraphs||[]).reduce((r,o)=>{let i=o.rootNodes||[],s=o.targetNodes||[];return[...r,...i,...s]},[]);n.addedNodes.forEach((r,o)=>{r.nodeType===Node.ELEMENT_NODE&&(a.includes(r)||Bu(r,e))})}})}function s6(e){return new ResizeObserver((t,n)=>{if(!e.interruptEffectDOM)for(let u of t){if(u.target.nodeType!==Node.ELEMENT_NODE)return;let a=u.target,r=globalThis.getComputedStyle(a);Cs(r)||(n.unobserve(u.target),Bu(a,e))}})}function Ns(e){this.translateState=e,Object.values(this.paragraphEntities).forEach(t=>{Ps(t,e)}),e=="original"&&document.querySelectorAll(`.${Bt}`).forEach(t=>t.remove())}function Qr(e,t){if(e instanceof HTMLIFrameElement){Fu(e.contentDocument,t);return}Fu(e,t)}async function fg(e){let t=rt(),n="auto";if(me()){let u="";e.rule.isEbook||e.rule.isEbookBuilder?u=Oi(e.mainFrame):u=bu(e.mainFrame).slice(0,1e3),n=await Ve({text:u})}else if(t)n=await Ve({text:bu(e.mainFrame).slice(0,1e3)});else if(e.rule.isEbook||e.rule.isEbookBuilder){let u="";u=Oi(e.mainFrame),n=await Ve({text:u})}else n=await bg();return n==="auto"&&(n=await ng()),Tr(n),n}async function hg(){if(!j)return;document.dispatchEvent(new CustomEvent(ht,{detail:JSON.stringify({type:"retryFailedParagraphsStart",payload:{}})}));let e=j.paragraphEntities,t=Object.keys(e);for(let n of t){let u=e[n];if(u.error){j.paragraphQueue.push(n);let r=u.commonAncestorContainer.querySelector(`[${Ha}='${n}']`);r&&r.remove()}}Ls.call(j,j.ctx)}function Eg(e,t){return[e,!e||e.endsWith("/")?"":"/",t,".json"].join("")}function Is(e,t){let n=e;return t&&Object.keys(t).forEach(u=>{let a=t[u],r=l6(u);if(typeof a=="object"||r){let o=a;r&&typeof o=="string"&&(o={tag:"a",href:o,target:"_blank"});let i=`<${u}>`,s=n.indexOf(i);if(s!==-1){let l=o.tag||"a",c=n.indexOf(`</${u}>`);if(c!==-1){let d=n.substring(s+i.length,c),g=Object.keys(o).filter(m=>m!=="tag").map(m=>`${m}="${o[m]}"`).join(" ");n=n.replace(`${i}${d}</${u}>`,`<${l} ${g}>${d}</${l}>`)}}}else{let o=new RegExp("{"+u+"}","gm");n=n.replace(o,a.toString())}}),n}function Ea(e,t,n){let u=e[t];if(!u)return n;let a=n.split("."),r="";do{r+=a.shift();let o=u[r];o!==void 0&&(typeof o=="object"||!a.length)?(u=o,r=""):a.length?r+=".":u=n}while(a.length);return u}function js(e,t,n,u,a){if(!e.hasOwnProperty(n))return t;let r=Ea(e,n,t);return r===t&&n!==u&&(r=Ea(e,u,t)),Is(r,a)}function l6(e){if(typeof e=="number")return!0;if(e){let t=parseInt(e);return!isNaN(t)}else return!1}var yg={"zh-CN":{"languages.en":"\u82F1\u8BED","languages.ja":"\u65E5\u8BED","languages.ko":"\u97E9\u8BED","languages.es":"\u897F\u73ED\u7259\u8BED","languages.fr":"\u6CD5\u8BED","languages.de":"\u5FB7\u8BED","languages.it":"\u610F\u5927\u5229\u8BED","languages.pt":"\u8461\u8404\u7259\u8BED","languages.ru":"\u4FC4\u8BED","languages.wyw":"\u6587\u8A00\u6587","languages.<all>":"\u5168\u90E8"},"zh-TW":{"languages.en":"\u82F1\u8A9E","languages.ja":"\u65E5\u8A9E","languages.ko":"\u97D3\u8A9E","languages.es":"\u897F\u73ED\u7259\u8A9E","languages.fr":"\u6CD5\u8A9E","languages.de":"\u5FB7\u8A9E","languages.it":"\u610F\u5927\u5229\u8A9E","languages.pt":"\u8461\u8404\u7259\u8A9E","languages.ru":"\u4FC4\u8A9E","languages.wyw":"\u6587\u8A00\u6587","languages.<all>":"\u5168\u90E8"}},zs={...In,"zh-CN":{...yg["zh-CN"],...In["zh-CN"]},"zh-TW":{...yg["zh-TW"],...In["zh-TW"]}},to=zs;function _u(e,t,n){return js(zs,e,t,$a,n)}var no=(e,t,n)=>{let u=js(zs,`languages.${e}`,t,"en");return n?ai[e]||e:u!==`languages.${e}`?u:ai[e]};function Mu(e){Ru(e,{tab:{id:1,url:"https://www.fake.com",active:!0}}).catch(u=>{F.error("send content message request failed",e,u)}),document.querySelectorAll("iframe").forEach(u=>{u.contentWindow&&u.contentWindow.postMessage({author:za,payload:e},"*")});let n=new CustomEvent(fn,{detail:e});globalThis.document.dispatchEvent(n)}function Us(e){let t=e.shortcuts||{},u=Object.keys(t).reduce((r,o)=>(r[t[o]]=o,r),{}),a=Object.keys(u);for(let r of a){let o=r.replace(/MacCtrl/ig,"Ctrl");o&&je(o,i=>{i.preventDefault(),Mu({method:u[r]})})}}var Ou={},c6={root:"",lang:"en",fallbackLang:"en"};function Hs(e,t){let n=Object.assign({},c6,e);Ou=t||Ou;let[u,a]=Ee(n.lang),[r,o]=Ee(Ou),[i,s]=Ee(!1),l=d=>{if(r.hasOwnProperty(d))return;s(!1);let g=Eg(n.root||"",d);n.getUrl&&(g=n.getUrl(n.root||"",d),fetch(g).then(m=>m.json()).then(m=>{Ou[d]=m,o({...Ou}),s(!0)}).catch(m=>{o({...Ou}),s(!0)}))};return Ye(()=>{l(n.fallbackLang||"en"),l(u)},[u]),{lang:u,setLang:a,t:(d,g)=>{if(!r.hasOwnProperty(u))return d;let m=Ea(r,u,d);return m===d&&u!==n.fallbackLang&&(m=Ea(r,n.fallbackLang,d)),Is(m,g)},isReady:i}}var d6=0;function z(e,t,n,u,a){var r,o,i={};for(o in t)o=="ref"?r=t[o]:i[o]=t[o];var s={type:e,props:i,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--d6,__source:a,__self:u};if(typeof e=="function"&&(r=e.defaultProps))for(o in r)i[o]===void 0&&(i[o]=r[o]);return ge.vnode&&ge.vnode(s),s}var qs=qo(null),Ws={root:"assets",lang:"en",fallbackLang:"en"},uo=e=>{let{t,setLang:n,lang:u,isReady:a}=Hs({root:e.root||Ws.root,lang:e.lang||Ws.lang,fallbackLang:e.fallbackLang||Ws.fallbackLang,getUrl:e.getUrl},e.translations);return z(qs.Provider,{value:{t,setLang:n,lang:u,isReady:a},children:e.children})};function Tg(e,t=2e3){return n=>{let u,a=0;return r=>{++a==e&&(n(r),a=0),clearTimeout(u),u=setTimeout(()=>a=0,t)}}}function xg(e){let t=e.split(".");return t.length>2?(t[0]="*",t.join(".")):null}function wg(e){let t=e.indexOf("#");return t===-1?e:e.slice(0,t)}function dn(e){let{items:t,maxWidth:n}=e;return n=n||128,z("select",{autoComplete:"off",class:"min-select",style:{maxWidth:`${n}px`},value:t.find(u=>u.selected)?.value,onChange:u=>{let a=u.target.value,r=t.find(o=>o.value===a);r&&r.onSelected(r)},children:t.map((u,a)=>z("option",{value:u.value,selected:u.selected,children:u.label},"selectlink"+a))})}var ao="DROP_DOWN_DEFAULT_VALUE";function Ks(e){let{showArrow:t,onSelected:n,className:u,menus:a,maxWidth:r}=e;u=u||"",t=t??!0,r=r||60;let o=Go(null);return z("select",{ref:o,autoComplete:"off",class:`min-select ${t?"":"min-select-no-arrow"} ${u||""}`,value:ao,style:{maxWidth:`${r}px`},onChange:i=>{i.preventDefault();let s=i.target.value;if(o.current&&s!==ao){o.current.value=ao,o.current?.dispatchEvent(new Event("change"));let l=a.find(c=>c.value===s);l&&n(l)}},children:[{value:ao,label:e.label}].concat(a).map((i,s)=>z("option",{value:i.value,children:i.label},"option-"+s))})}function Nt(){return Vo(qs)}function $s(e){let{field:t,onChange:n,value:u}=e;u=u||t.default||"";let{t:a}=Nt(),r=t.name;return t.label&&(r=t.label),t.labelKey&&(r=a(t.labelKey)),t.type==="select"?z("div",{class:"flex justify-between mb-2",children:[z("label",{class:"inline-block",children:[r,"\uFF1A"]}),z(dn,{items:t.options.map(o=>({label:`${o.label?a(o.label):o.value}`,value:o.value,selected:u===o.value,onSelected:()=>{n(o.value)}}))})]}):null}function ya(e,t){return e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"})>=0}var g6=({date:e})=>{let{t}=Nt(),[n,u]=Ee(!1);return Ye(()=>{setTimeout(()=>{u(!0)},5e3)},[]),n?null:z("p",{class:"text-sm",children:[t("Successfully synchronized with the latest official rules:")," ",new Date(e).toLocaleString()]})},m6=({minVersion:e})=>{let{t}=Nt();return z("p",{class:"text-sm",children:t("localVersionIsTooOld",{minVersion:e})})},p6=()=>{let{t:e}=Nt();return z("p",{class:"text-sm",dangerouslySetInnerHTML:{__html:e("badUserscriptBrowser",{1:"https://immersivetranslate.com/docs/installation/"})}})},f6=({message:e,handleSyncing:t,date:n})=>{let{t:u}=Nt();return z("p",{class:"text-sm",children:[u("failToSyncRules")," ",z("a",{onClick:t,children:u("retry")}),z("br",{}),u("failedReason"),"\uFF1A",e,z("br",{}),u("currentRuleVersion"),"\uFF1A",n]})};function Gs(e){let{isShowError:t,request:n}=e,[u,a]=Ee(null),{t:r}=Nt(),[o,i]=Ee(null),[s,l]=Ee(null),[c,d]=Ee(""),[g,m]=Ee(!1),[f,w]=Ee(!1),[y,p]=Ee(!1),[_,M]=Ee(null),[A,S]=Ee(null),E=kn(),k=async()=>{d("");let T=o;if(o===null)try{let D=await n({url:Vu});D?(i(D),T=D,m(!0)):(d(r("unknownError")),l(null))}catch(D){l(null),d(D.message);return}T!==null?(e.setStorageBuildinConfig(T),l(!1),a(T.buildinConfigUpdatedAt)):(d(r("canNotFetchRemoteRule")),l(null))};return Ye(()=>{Qt().then(T=>{let D=T.buildinConfigUpdatedAt;M(T);let L=new Date(D);if(a(D),E==="0.0.0"){p(!0);return}n({url:Vu}).then(U=>{let v=U,B=v.minVersion,X=E;i(v);let O=v.latestVersion;if(O&&(ya(X,O)?S(!0):S(!1)),ya(X,B)){let Z=v.buildinConfigUpdatedAt;new Date(Z)>L?(l(!0),k()):l(!1)}else w(!0),l(null)}).catch(U=>{l(null),d(U.message)})})},[]),Ye(()=>{Qt().then(T=>{M(T)})},[u]),_?z("div",{class:"text-sm mt-2",style:{maxWidth:218},children:y?z(p6,{}):c?t===!1?null:z(f6,{handleSyncing:k,message:c,date:u||""}):f?t===!1?null:z(m6,{minVersion:o.minVersion}):s===null||s===!0?null:g?z(g6,{date:u}):null}):null}function Ta(e){let t=kn(),{onTranslateTheMainPage:n,onUserConfigChange:u,request:a,onTranslateLocalHtmlFile:r,onSwitchTranslationMode:o,onTranslateLocalSubtitleFile:i,onSetBuildinConfig:s,pageStatus:l,openEbookBuilderPage:c,openEbookViewerPage:d,config:g,openAboutPage:m,onTranslateTheWholePage:f,onToggleEnabled:w,openOptionsPage:y,ontranslateToThePageEndImmediately:p,onSetPageLanguage:_,onToggleTranslate:M,onTranslateLocalPdfFile:A,onTranslatePdf:S,onRestorePage:E,ctx:k,currentUrl:T,currentLang:D,onClose:L,onTranslatePage:U,onSetLocalConfig:v,onMouseTriggerChanged:B,errorMsg:X,disabledButton:O}=e,Z=u,[ve,V]=Ee(""),[J,xe]=Ee(X),{t:C}=Nt(),x=null,H=null,q=null,ue=null,te=null,ee=null,we=null,ke=null,K=null,Y=null,ne=null,ye=null,Q=!0;if(g){yt()&&g&&(Q=g.generalRule.showSponsorOnSafari);let{translationService:R,translationServices:oe,translationUrlPattern:Te}=g;if(on[R]&&(ke=Hi(R,k)),oe&&oe[R]?ye=oe[R]||{}:ye={},T&&ro(T)){K=new URL(T),Y=xg(K.hostname),ne=wg(T);let{matches:fe,excludeMatches:ce}=Te;H=fe.includes(Y),x=fe.includes(K.hostname),ue=ce.includes(Y),q=ce.includes(K.hostname),ee=fe.includes(ne),we=ce.includes(ne)}}if(g&&D&&D!=="auto"){let{translationLanguagePattern:R}=g,{matches:oe}=R;oe.includes(D)?te=!0:te=!1}let be=R=>{R.preventDefault(),y()},Fe=R=>{Z(oe=>(oe.alpha?V("Success disable alpha!"):V("Success enable alpha!"),{...oe,alpha:!oe.alpha}))},De=R=>{Z(oe=>({...oe,translationMode:R})),o(R)},ae=()=>{Z(R=>({...R,translationArea:"body"})),f()},ze=()=>{Z(R=>({...R,translationArea:"main"})),n()},Re=(R,oe,Te,fe)=>{if(R==="default"){Z(ut=>{let Ke={...ut.translationUrlPattern};return{...ut,translationUrlPattern:{...ut.translationUrlPattern,matches:En([K?.hostname,Y,T],Ke.matches),excludeMatches:En([K?.hostname,Y,T],Ke.excludeMatches)}}});return}let ce=R,qe=ce==="matches"?"excludeMatches":"matches";K&&Z(ut=>{let Ke={...ut.translationUrlPattern};return Ke[ce]=Li(oe,Ke[ce]),fe.length>0&&(Ke[ce]=En(fe,Ke[ce])),Ke[qe]=En(Te,Ke[qe]),{...ut,translationUrlPattern:{...ut.translationUrlPattern,...Ke}}}),ce==="matches"&&l==="Original"?setTimeout(()=>{U(),L()},100):ce==="excludeMatches"&&l==="Translated"&&setTimeout(()=>{E(),L()},100)},_e=R=>{if(!R){Z(fe=>{let ce={...fe.translationLanguagePattern};return{...fe,translationLanguagePattern:{...fe.translationLanguagePattern,matches:En(D,ce.matches),excludeMatches:En(D,ce.excludeMatches)}}});return}let oe=R,Te=oe==="matches"?"excludeMatches":"matches";D&&Z(fe=>{let ce={...fe.translationLanguagePattern};return ce[oe]=Li(D,ce[oe]),ce[Te]=En(D,ce[Te]),{...fe,translationLanguagePattern:{...fe.translationLanguagePattern,...ce}}}),oe==="matches"&&l==="Original"&&setTimeout(()=>{U(),L()},100)},Me=K?.pathname.toLowerCase().endsWith(".pdf"),Le=C("translate");l==="Translated"||l==="Error"?Le=C("show-original"):l==="Original"?Me?su()&&K.protocol==="file:"?Le=C("translate-firefox-local-pdf"):me()?Le=C("noSupportTranslate-pdf"):Le=C("translate-pdf"):Le=C("translate"):Le=C(l);let mt=C("translateToThePageEndImmediately");(l==="Original"||l==="Translated")&&(g.shortcuts.toggleTranslatePage&&(wl()&&k.rule.fingerCountToToggleTranslagePageWhenTouching>=2?Le+=` (${C(`fingers.${k.rule.fingerCountToToggleTranslagePageWhenTouching}`)})`:Le+=` (${g.shortcuts.toggleTranslatePage})`),g.shortcuts.toggleTranslateToThePageEndImmediately&&(mt+=` (${g.shortcuts.toggleTranslateToThePageEndImmediately})`));let Vt=[];k&&(Vt=L4(k));let Lt=R=>{R.preventDefault(),L()};return z("div",{class:"p-3",children:[z("div",{class:"text-sm",children:[z("div",{class:"flex justify-between mb-2",children:[z("label",{class:"inline-block",children:[C("popupSourceLanguage"),"\uFF1A"]}),z(dn,{items:Yt.map(R=>({label:no(R,g.interfaceLanguage),value:R,selected:R===D,onSelected:oe=>{_(oe.value)}}))})]}),g&&g.targetLanguage&&z("div",{class:"flex justify-between mb-2",children:[z("label",{class:"inline-block",children:[C("popupTarget"),"\uFF1A"]}),z(dn,{items:Yt.filter(R=>R!=="auto").map(R=>({label:no(R,g.interfaceLanguage),value:R,selected:R===g.targetLanguage,onSelected:oe=>{Z(Te=>({...Te,targetLanguage:oe.value}))}}))})]}),ke&&Vt.length>0&&z(Jt,{children:[z("div",{class:"flex justify-between mb-2",children:[z("label",{class:"inline-block",children:[C("popupService"),"\uFF1A"]}),z(dn,{items:Vt.map(R=>({label:`${C("translationServices."+R.id)}${R.ok?"":" "+C("needAction")}`,value:R.id,selected:R.selected,onSelected:oe=>{let Te=Vt.find(fe=>fe.id===oe.value);Te.ok?(Z(fe=>({...fe,translationService:Te.id})),Te.props.length===0?setTimeout(()=>{U()},1):setTimeout(()=>{E()},1)):(Z(fe=>({...fe,translationService:Te.id})),setTimeout(()=>{y()},100))}}))})]}),ye&&ke.props.length>0&&ke.props.map((R,oe)=>z("div",{class:"pl-4 text-sm",children:z($s,{field:R,value:ye[R.name],onChange:Te=>{Z(fe=>{let ce=fe.translationServices||{},qe=ce[ke.id]||{};return setTimeout(()=>{E()},1),{...fe,translationServices:{...ce,[ke.id]:{...qe,[R.name]:Te}}}})}},"field-"+oe)},"service"+oe))]}),K&&z("div",{class:"flex justify-between mb-2",children:[z("label",{class:"inline-block",children:C("forThisSite")}),z(dn,{items:[{label:C("default"),value:"default",selected:x===!1&&q===!1&&!H&&!ue&&!ee&&!we,onSelected:()=>{Re("default",K.hostname,[],[]);let R=K.hostname,oe=k.localConfig.tempTranslationUrlMatches||[],Te=oe.filter(ce=>ce.match!==R),fe=!1;Te.length!==oe.length&&(fe=!0),fe&&v({...k.localConfig,tempTranslationUrlMatches:[...Te]})}},ne&&{label:C("alwaysTranslateSomeSite",{hostname:C("currentUrl")}),value:"matchesUrl",selected:ee,onSelected:()=>{Re("matches",ne,[ne],[])}},{label:C("alwaysTranslateSomeSite",{hostname:K.hostname}),value:"matches",selected:x,onSelected:R=>{Re(R.value,K.hostname,[K.hostname,Y,ne],[Y])}},Y&&{label:C("alwaysTranslateSomeSite",{hostname:Y}),value:"matchesWild",selected:H,onSelected:()=>{Re("matches",Y,[ne,K.hostname,Y],[K.hostname])}},ne&&{label:C("neverTranslateSomeSite",{hostname:C("currentUrl")}),value:"excludeMatchesUrl",selected:we,onSelected:()=>{Re("excludeMatches",ne,[ne],[])}},{label:C("neverTranslateSomeSite",{hostname:K.hostname}),value:"excludeMatches",selected:q,onSelected:R=>{Re(R.value,K.hostname,[K.hostname,Y,ne],[Y])}},Y&&{label:C("neverTranslateSomeSite",{hostname:Y}),value:"excludeMatchesWild",selected:ue,onSelected:()=>{Re("excludeMatches",Y,[K.hostname,ne,Y],[K.hostname])}}].filter(Boolean)})]}),B&&Ku()&&z("div",{class:"flex justify-between mb-2",children:[z("label",{class:"inline-block",children:[C("mouse-translate"),"\uFF1A"]}),z(dn,{items:Ga.filter(R=>!(Ga.includes(g.generalRule.mouseHoverHoldKey)&&R==="OtherCustom")).map(R=>{let oe=C("mouseHoldKey",{key:R}),Te=Ga.includes(g.generalRule.mouseHoverHoldKey),fe=R===g.generalRule.mouseHoverHoldKey;return R==="Auto"?oe=C("mouseHoldKeyAuto"):R==="Off"?oe=C("mouseHoldKeyOff"):R==="OtherCustom"?oe=Te?C("mouseHoldKeyOther"):C("mouseHoldKeyCustomKey",{key:g.generalRule.mouseHoverHoldKey}):R==="Other"&&(oe=C("mouseHoldKeyOther")),Te||R==="OtherCustom"&&(fe=!0),{label:oe,value:R,selected:fe,onSelected:ce=>{ce.value==="Other"?y("#interface"):B(ce.value)}}})})]})]}),z("div",{class:"",children:z("button",{class:"py-2 mt-1 mb-2 main-button ",onClick:()=>{Me?S&&S():M()},"aria-busy":l==="Translating",disabled:O||l==="Translating",children:Le})}),z("div",{class:"text-sm",children:ve}),z("div",{class:"text-sm",children:J}),z("div",{class:"flex justify-between",children:[D&&D!=="auto"?z("label",{for:"alwaysTranslateThisLanugage",class:"text-sm",children:[z("input",{type:"checkbox",id:"alwaysTranslateThisLanugage",name:"alwaysTranslateThisLanugage",checked:!!te,onChange:R=>{let oe=R.target.checked;_e(oe?"matches":void 0)}}),C("alwaysTranslateSomeLanguage",{language:no(D,g.interfaceLanguage)})]}):z("span",{}),z(Ks,{label:C("more"),showArrow:!0,onSelected:R=>{R.value==="changeToOnlyTranslationMode"?De("translation"):R.value==="changeToDualTranslationMode"?De("dual"):R.value==="translateTheWholePage"?f():R.value==="translateToThePageEndImmediately"?p():R.value==="translateTheMainPage"?n():R.value==="showTranslationOnly"||(R.value==="translateLocalPdfFile"?A&&A():R.value==="translateLocalHtmlFile"?r&&r():R.value==="translateLocalSubtitleFile"?i&&i():R.value==="donate"?(globalThis.open(g.donateUrl),L()):R.value==="feedback"?(globalThis.open(g.feedbackUrl),L()):R.value==="options"?(y(),L()):R.value==="changeToTranslateTheWholePage"?ae():R.value==="changeToTranslateTheMainPage"?ze():R.value==="about"?m():R.value==="toggleEnabled"?w():R.value==="openEbookViewer"?d():R.value==="openEbookBuilder"&&c())},menus:[g.translationMode==="dual"&&{label:"1\uFE0F\u20E3 "+C("changeToOnlyTranslationMode"),value:"changeToOnlyTranslationMode"},g.translationMode==="translation"&&{label:"2\uFE0F\u20E3 "+C("changeToDualTranslationMode"),value:"changeToDualTranslationMode"},g.translationArea==="main"&&{label:"\u{1F480} "+C("changeToTranslateTheWholePage"),value:"changeToTranslateTheWholePage"},g.translationArea==="body"&&{label:"\u{1F4D6} "+C("changeToTranslateTheMainPage"),value:"changeToTranslateTheMainPage"},{label:"\u26A1 "+mt,value:"translateToThePageEndImmediately"},{label:"\u{1F4D8} "+C("browser.openEbookViewer"),value:"openEbookViewer"},{label:"\u{1F4DA} "+C("browser.openEbookBuilder"),value:"openEbookBuilder"},!me()&&{label:"\u{1F4C1} "+C("browser.translateLocalPdfFile"),value:"translateLocalPdfFile"},!me()&&{label:"\u{1F310} "+C("browser.translateLocalHtmlFile"),value:"translateLocalHtmlFile"},{label:"\u{1F4FA} "+C("browser.translateLocalSubtitleFile"),value:"translateLocalSubtitleFile"},{label:(g.enabled?"\u{1F6AB} ":"\u{1F44B} ")+(g.enabled?C("clickToDisableExtension"):C("clickToEnableExtension")),value:"toggleEnabled"},{label:"\u2764\uFE0F "+C(Q?"aboutLabel":"aboutLabelWithoutSponsor"),value:"about"}].filter(Boolean)})]}),z("footer",{children:[z(Gs,{isShowError:!1,request:a,setStorageBuildinConfig:s}),z("div",{class:"mt-3 text-sm flex justify-between",children:[z("a",{href:"#",class:"secondary",onClick:be,children:C("options")}),me()&&z("a",{href:"#",class:"secondary",onClick:Lt,children:C("close")}),z("span",{class:"immersive-translate-no-select muted",onClick:Tg(7)(Fe),children:["V",t,g.enabled?null:z("a",{href:"#",onClick:w,children:[" ","(",C("hasBeenDisabled"),")"]})]})]})]})]})}var Vs={get:(e,t,n)=>{let u=t===void 0?e:{[e]:t};return I.storage[n].get(u)},set:(e,t,n)=>I.storage[n].set({[e]:t})};function oo(e,t,n){let[u]=Ee(()=>typeof t=="function"?t():t),[a]=Ee(n),[r,o]=Ee(u),[i,s]=Ee(!1),[l,c]=Ee("");Ye(()=>{Vs.get(e,u,a).then(g=>{g[e]&&o(g[e]),s(!0),c("")}).catch(g=>{s(!1),c(g)})},[e,u,a]);let d=Nn(g=>{let m=typeof g=="function"?g(r):g;F.debug("new settings",m),Vs.set(e,m,a).then(()=>{o(m),s(!0),c("")}).catch(f=>{o(m),s(!1),c(f)})},[a,e,r]);return[r,d,i,l]}function Js(e,t,n){let u=[];return function(){let[r,o,i,s]=oo(e,t,n),l=Nn(c=>{for(let d of u)d(c)},[]);return Ye(()=>(u.push(o),()=>{u.splice(u.indexOf(o),1)}),[o]),[r,l,i,s]}}function Cg(e,t){return Js(e,t,"sync")}var h6="userConfig",b6={},E6=Cg(h6,b6);function io(e){let[t,n,u,a]=E6(),r=Nn(o=>{let i=typeof o=="function"?o(t):o;i&&(i.updatedAt=new Date().toISOString()),n(i),e&&e(i)},[t]);return[t,r,u,a,n]}async function vg(e){try{let t=new Date;F.debug("cron task start, next will run at",new Date(t.getTime()+e).toLocaleString()),await I.storage.local.set({[jl]:t.toISOString()}),await y6(),me()||await Ag()}catch(t){F.error("run cron task failed",t)}}async function y6(){try{let e=await $t(),t=await G({url:Vu}),n=e.buildinConfigUpdatedAt,u=new Date(n),a=t.buildinConfigUpdatedAt,r=new Date(a),o=t.minVersion,i=I.runtime.getManifest().version;ya(i,o)?r>u?(await I.storage.local.set({buildinConfig:t}),F.info(`sync remote rules success, latest: ${new Date(a).toLocaleString()}`)):F.debug(`no need to sync rules, latest: ${u}`):F.info(`local version is too old, please update to ${o} or later`)}catch(e){F.error("sync rules error: ",e)}}function Xs(e){let{onClose:t}=e,[n,u]=Ee("Original"),[a,r,o,i]=io(()=>{setTimeout(()=>{M("updateGlobalContext",!1)()},250)}),[s,l]=Ee(null),[c,d]=Ee(globalThis.location.href),[g,m]=Ee("auto"),[f,w]=Ee(null),y=O=>{u(O.detail)},p=O=>{m(O);let Z=Oa(c,O,s.sourceLanguageUrlPattern);r(ve=>({...ve,sourceLanguageUrlPattern:Z})),Rt(O)},_=()=>{d(globalThis.location.href)};Ye(()=>(document.addEventListener(Ua,y,!1),$t().then(O=>{l(O);let Z=Zt();m(Z);let ve=Ne();u(ve),vg(O.interval)}),document.addEventListener("urlChange",_),()=>{document.removeEventListener("pageTranslatedStatus",y),document.removeEventListener("urlChange",_)}),[]),Ye(()=>{$t().then(O=>{l(O)})},[a]),Ye(()=>{c&&s&&ln({url:c,config:s}).then(O=>{w(O)})},[c,s]);let M=(O,Z,ve={})=>()=>{Mu({method:O,data:ve||{}}),Z&&t()},A=()=>{t()},S=()=>{r(O=>({...O,enabled:!O.enabled})),setTimeout(()=>{A()},50)},E=()=>{Ys(),setTimeout(()=>{A()},50)},k=()=>{Ys(),setTimeout(()=>{A()},50)},T=(O="")=>{lo(!0,O),setTimeout(()=>{t()},50)},D=()=>{co(),setTimeout(()=>{t()},50)},L=()=>{go(),setTimeout(()=>{t()},50)},U=()=>{Dg(),setTimeout(()=>{t()},50)},v=()=>{mo(),setTimeout(()=>{t()},50)},B=()=>{Sg(),setTimeout(()=>{t()},50)},X=O=>{r(Z=>({...Z,generalRule:{...Z.generalRule,mouseHoverHoldKey:O}}))};return!s||!f?null:z(Ta,{openEbookViewerPage:L,openEbookBuilderPage:v,onSwitchTranslationMode:O=>{M("switchTranslationMode",!0,{mode:O})()},onTranslateLocalHtmlFile:U,onTranslateLocalSubtitleFile:B,request:G,onClose:A,onToggleEnabled:S,onTranslateTheWholePage:M("translateTheWholePage",!0),openOptionsPage:T,onToggleTranslate:M("toggleTranslatePage",!0),onTranslateTheMainPage:M("translateTheMainPage",!0),ontranslateToThePageEndImmediately:M("translateToThePageEndImmediately",!0),onTranslatePage:M("translatePage",!0),onRestorePage:M("restorePage",!1),onTranslatePdf:E,openAboutPage:D,onTranslateLocalPdfFile:k,onSetPageLanguage:p,onUserConfigChange:r,config:s,pageStatus:n,ctx:f,currentUrl:c,currentLang:g,onSetLocalConfig:so,onSetBuildinConfig:kg,onMouseTriggerChanged:X})}function T6(e,t){for(let n of t){if(me()&&!su()&&typeof GM!==void 0&&GM.addElement){GM.addElement(e,"style",{textContent:n});continue}e.appendChild(document.createElement("style")).textContent=n}}var Qs={position:"right",right:0,top:335},xt={...Qs},ho=!1,Xn=null,tn=null,bo=null,Zs=null,Nu=null,e0=null,Pg=6,po,fo,Lg=null,Bg=null;async function _g(){let e=tt();e0=await Og(),xt=e0.pagePopupConfig||xt;let t=document.createElement("div");t.id="immersive-translate-popup",t.setAttribute("style","all: initial"),document.documentElement.appendChild(t);let n=t.attachShadow({mode:"open"});Zs=n;let u=[e.IMMERSIVE_TRANSLATE_PICO_CSS,e.IMMERSIVE_TRANSLATE_COMMON_CSS,e.IMMERSIVE_TRANSLATE_POPUP_CSS,e.IMMERSIVE_TRANSLATE_PAGE_POPUP_CSS].join(`
`);T6(n,[u]);let a=document.createElement("div");a.innerHTML=e.IMMERSIVE_TRANSLATE_POPUP_HTML,n.appendChild(a),Xn=n.querySelector("#immersive-translate-popup-container");let o=n.querySelector("#immersive-translate-popup-btn");tn=o,bo=n.querySelector("#mount"),Xn.setAttribute("style",t0(xt)),r0(),o.addEventListener("mousedown",Mg),o.addEventListener("touchstart",C6),globalThis.addEventListener("resize",s=>{Xn.setAttribute("style",t0(xt))})}function x6(){iu(null,bo),bo.style.display="none",tn.style.display="block",Nu=setTimeout(()=>{r0(!0)},2e3)}function Fg(e){let t=e.querySelector("#mount"),n=()=>{x6()},u=a=>{a&&a.target&&a.target.id==="immersive-translate-popup-overlay"&&n()};(async()=>{let a=await $t();iu(z(uo,{lang:a.interfaceLanguage,fallbackLang:"zh-CN",translations:to,children:z("div",{onClick:u,id:"immersive-translate-popup-overlay",class:"immersive-translate-popup-overlay",children:z("div",{class:"immersive-translate-popup-wrapper",style:w6(),children:z(Xs,{onClose:n})})})}),t)})().then(()=>{tn.style.display="none",bo.style.display="block"})}function w6(){let e=n0(),t=e.height,{position:n,top:u,left:a}=xt,r={position:"fixed"},o=300,i=300,s=100;return Jc()&&(n=Qs.position,u=Qs.top),n==="right"||n==="left"?(r.top=u-s,r.top+o>=t?(r.bottom=30,delete r.top):r.top<=10&&(r.top=10),n==="right"?r.right=0:n==="left"&&(r.left=0)):(n==="top"||n==="bottom")&&(r.left=a-s,r.left+i>=e.width?(r.right=0,delete r.left):r.left<=10&&(r.left=0),n==="top"?r.top=0:n==="bottom"&&(r.bottom=0)),r}function n0(){return{width:Math.max(document.documentElement.clientWidth,window.innerWidth||0),height:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}function Mg(e){Bg=Xn.getAttribute("style"),po=e.pageX,fo=e.pageY,Nu&&clearTimeout(Nu),ho=!1,tn.style.opacity="1",tn.style.transform="none",Lg=tn.getAttribute("style"),globalThis.addEventListener("mousemove",u0),globalThis.addEventListener("mouseup",a0),globalThis.addEventListener("touchmove",Rg),globalThis.addEventListener("touchend",Eo),globalThis.addEventListener("touchcancel",Eo)}function C6(e){e.preventDefault&&e.preventDefault(),Mg(e.changedTouches[0])}function Rg(e){u0(e.changedTouches[0])}function Eo(e){e.preventDefault&&e.preventDefault(),a0(e.changedTouches[0])}function u0(e){e.preventDefault&&e.preventDefault(),ho=!0,Xn.setAttribute("style",`left:${e.clientX}px;top:${e.clientY}px;transform:scale(1.6);`)}function a0(e){e.preventDefault&&e.preventDefault(),A6(),Nu&&clearTimeout(Nu),po=po||0,fo=fo||0;let t=Math.abs(e.pageX-po),n=Math.abs(e.pageY-fo);t<Pg&&n<Pg?(Xn.setAttribute("style",Bg),tn.setAttribute("style",Lg),Fg(Zs)):ho?v6(e):Fg(Zs),ho=!1}function v6(e){let t=n0(),n=e.clientX,u=e.clientY,a=u,r=t.height-u,o=n,i=t.width-n;a<r&&a<o&&a<i?xt={position:"top",left:n,top:0}:r<a&&r<o&&r<i?xt={position:"bottom",bottom:0,left:e.clientX}:o<a&&o<r&&o<i?xt={position:"left",left:0,top:e.clientY}:i<a&&i<r&&i<o&&(xt={position:"right",right:0,top:e.clientY});let s=t0(xt);Xn.setAttribute("style",s),so({...e0,pagePopupConfig:xt}),Nu=setTimeout(()=>{r0(!0)},2e3)}function r0(e=!1){tn.style.opacity="0.4";let t="";xt.position==="left"?t="translateX(-40%)":xt.position==="right"?t="translateX(40%)":xt.position==="top"?t="translateY(-40%)":xt.position==="bottom"&&(t="translateY(40%)"),tn.style.transform=t,e&&(tn.style.transition="transform 0.2s ease-in-out, opacity 0.2s ease-in-out")}function A6(){globalThis.removeEventListener("mousemove",u0),globalThis.removeEventListener("mouseup",a0),globalThis.removeEventListener("touchmove",Rg),globalThis.removeEventListener("touchend",Eo),globalThis.removeEventListener("touchcancel",Eo)}function t0(e){let t=k6(e);return Object.keys(t).map(n=>typeof t[n]=="number"?`${n}:${t[n]}px;`:"").join("")}function k6(e){let{position:t,...n}=e,u=n0(),a={};return t==="left"?(a.left=0,n.top>u.height?a.top=u.height-100:a.top=n.top):t==="right"?(a.right=0,n.top>u.height?a.top=u.height-100:a.top=n.top):t==="top"?(a.top=0,n.left>u.width?a.left=u.width-100:a.left=n.left):t==="bottom"&&(a.bottom=0,n.left>u.width?a.left=u.width-100:a.left=n.left),a}var Ng=!1;async function Ig(){Ng||(Ng=!0,_g().catch(e=>{F.error("init popup error",e)}))}var jg=!1,zg=[()=>{je.unbind()}],o0=[...zg],D6=st(async()=>{await lo()},50),S6=st(async()=>{await co()},50),P6=st(async()=>{await mo()},50),F6=st(async()=>{await go()},50),Ug=st(e=>{Mu({method:e})},50),L6=st(()=>{yo();let e=new CustomEvent(fn,{detail:{method:"toggleTranslatePage"}});globalThis.document.dispatchEvent(e)},200),B6=st(()=>{wo();let e=new CustomEvent(fn,{detail:{method:"toggleOnlyTranslation"}});globalThis.document.dispatchEvent(e)},200),_6=st(()=>{xo();let e=new CustomEvent(fn,{detail:{method:"toggleTranslationMask"}});globalThis.document.dispatchEvent(e)},200);function M6(e){let t=e.document;if(jg)return;if(jg=!0,me()||qg(),t.addEventListener("securitypolicyviolation",U6),t.addEventListener("immersiveTranslateEbookLoaded",z6),t.addEventListener(Bl,j6),t.addEventListener("click",I6),me()&&(globalThis.top!=globalThis.self?e.addEventListener("message",O6,!1):t.addEventListener(fn,R6)),globalThis.top===globalThis.self){let u=en.rootIframe(ri);u.handleAsk("getRateLimitDelay",$4),u.handleAsk("throttleRequest",rd)}}function Hg(e,t){H6(),M6(t);let n=t.document,u=N6.bind(null,e);e.rule.fingerCountToToggleTranslagePageWhenTouching>=2&&n.addEventListener("touchstart",u),o0.push(()=>{n.removeEventListener("touchstart",u)}),me()&&globalThis.top===globalThis.self&&(Us(e.config),W6(e.config)),yt()&&Us(e.config)}function R6(e){Ig()}function O6(e){let t=e;t&&t.data&&t.data.payload&&t.data.author===za&&Ru(t.data.payload,{tab:{id:1,url:"https://www.fake-iframe.com",active:!0}})}function N6(e,t){let n=t;n.touches.length==e.rule.fingerCountToToggleTranslagePageWhenTouching?L6():n.touches.length===e.rule.fingerCountToToggleTranslationMaskWhenTouching?_6():n.touches.length===e.rule.fingerCountToToggleTranslagePageOnlyTranslationWhenTouching&&B6()}function I6(e){let t=e.target;if(!t||!t.getAttribute)return;let n=t.getAttribute("data-immersive-translate-action");n&&n==="retry"&&(e.preventDefault(),typeof e.stopPropagation=="function"&&e.stopPropagation(),To())}function j6(e){let t=e;if(F.debug("receive third party message",t),t&&t.detail)try{let n=JSON.parse(t.detail);n&&n.type&&(n.type==="retryFailedParagraphs"?q6({method:"retryFailedParagraphs"}):n.type==="updateCommands"?Kg(n.data):Ug(n.type))}catch(n){F.warn("parse message error",n)}}function z6(e){setTimeout(()=>{Wg()},10)}function U6(e){de.HAS_CSP_ERROR="1"}function H6(){o0.forEach(e=>{e()}),o0=zg}function W6(e){if(me()&&typeof GM<"u"&&GM&&GM.registerMenuCommand){let t=Pr.commands,a=[...Object.keys(t).filter(r=>r==="toggleTranslatePage").map(r=>{let o=t[r].description,i=o;return o.startsWith("__MSG_")&&o.endsWith("__")&&(i=_u(`browser.${o.slice(6,-2)}`,e.interfaceLanguage)),{id:r,title:i}}),{id:Zo,title:_u("browser.openEbookViewer",e.interfaceLanguage),key:"e"},{id:ei,title:_u("browser.openEbookBuilder",e.interfaceLanguage),key:"m"},{id:Xo,title:_u("browser.openOptionsPage",e.interfaceLanguage),key:"o"},{id:Qo,title:_u("browser.openAboutPage",e.interfaceLanguage),key:"a"}];for(let r of a)GM.registerMenuCommand(r.title,()=>{r.id===Xo?D6():r.id===Qo?S6():r.id===ei?P6():r.id===Zo?F6():Ug(r.id)},r.key)}}function q6(e){Ru(e,{tab:{id:1,url:"https://www.fake.com",active:!0}}).catch(n=>{F.error("send content message request failed",e,n)});let t=new CustomEvent(fn,{detail:e});globalThis.document.dispatchEvent(t)}function $g(e,t){let n=e.pageWidth*e.scale,u=e.prevPageParagraphs||[];if(u.length<=0||t.length<=0)return{};let a=u[u.length-1];if(!a)return{};let r=n-a.right,o=t.find(i=>Ie(i.left,r)&&Ie(i.width,a.width));return{prevP:a,curP:o}}function i0(e){return!!(!e||/^[\d\.:%\(\),%\s\-]+$/.test(e))}function Gg(e){return e?e==e[0].repeat(e.length):!0}function Ie(e,t,n=5){return Math.abs(e-t)<=n}var s0=[",","\\.","\uFF0C","\u3002"];function Vg(e,t){let n=e.prevGroup;if(!n)return!1;let u=n[n.length-1],a=t[0];return Ie(u.left,a.left,7)&&Ie(u.nextTop,a.top,10)&&Co(u,a)}function Jg({prevLineP:e,justify:t},n){return t&&n.left>e.left&&n.bottom<e.top}function Yg({prevLineP:e},{left:t}){return Ie(e.right,t,1)}function Xg({prevLineP:e,scale:t},n){return Co(e,n,e.str.length<30)&&Ie(e.nextTop,n.top,e.fontSize*t*.35)}function Qg({prevLineP:e},t){return e.fontName==t.fontName&&e.left<t.left&&e.right>t.right}function Zg(e,t){let n=e.justify;return n?t.top>n.top&&t.left>n.left&&t.right<=n.right+1&&t.fontSize<=n.fontSize+1:!1}function em({prevLineP:e,prevP:t},n){return Ie(e.left,n.left,1)&&Ie(e.right,t.right,1)&&t.mergedTimes>=1}function l0(e,t){let{prevLineP:n}=e;return Zg(e,t)&&(Ie(n.bottom,t.bottom)||Ie(n.nextTop,t.top)&&Ie(n.left,t.left))}function tm(e,t){let{prevLineP:n,prevP:u,scale:a}=e;return Zg(e,t)&&n.width<u.width?!1:Ie(n.left,t.left,t.fontSize*a)&&(t.width<n.width||Ie(t.width,n.width,t.width*.2))}function nm({prevLineP:e,scale:t},n){let u=Math.abs(e.width-n.width),a=Math.max(e.width,n.width);return a>0&&u/a<.1&&n.left<e.left&&Ie(n.left,e.left,n.fontSize*t*3)}function um(e,t){let{prevLineP:n}=e,{fontSize:u,left:a}=t;return c0(e,t)&&Ie(n.nextLeft,a,u)&&Ie(n.fontSize,u)}function c0({prevLineP:e},{bottom:t}){return Ie(e.bottom,t,3)}function am({scale:e,prevLineP:t},{fontSize:n,top:u,left:a}){return n<=t.fontSize*.8&&Ie(u,t.top,2)&&Ie(t.nextLeft,a,t.fontSize*e)}function Co(e,{fontSize:t,fontName:n},u=!1){return u?Ie(e.fontSize,t,1)&&e.fontName==n:Ie(e.fontSize,t,1)}var om;async function vo(e,t){om=e;let n=t.filter(r=>!i0(r.str)).filter(r=>r.translateStatus!="success"&&r.translateStatus!="pending").map(r=>(r.translateStatus="pending",r));if(n.length<=0)return;let u=await Ve({text:n.map(r=>r.str).join(`
`).slice(0,1e3)});Tr(u);let a=n.map((r,o)=>({text:r.str,id:o,from:u,to:e.targetLanguage,url:"https://google.com",fromByClient:"auto"}));await Fn({sentences:a},e,(r,o,i)=>{let s=i.id,l=n[s];r?(l.translatedStr=r.message,l.translateStatus="error"):o&&(l.translatedStr=o.text,l.translateStatus="success"),$6(l)})}var d0={};async function K6(){let e=document.getElementsByClassName("translate-retry");for(let n of e)n.classList.remove("translate-retry"),n.classList.add("translate-pending");let t=Object.values(d0).filter(n=>!!n);await vo(om,t)}function $6(e){let t=document.getElementById(e.id);t&&(t.classList.remove("translate-pending","translate-retry"),e.translateStatus=="error"?(d0[e.id]=e,t.classList.add("translate-retry"),t.addEventListener("click",K6)):e.translateStatus=="success"&&(d0[e.id]=void 0,t.innerHTML=e.translatedStr))}function im(e,t){let n=[],u=V6(e,t);return J6(e,u).forEach(r=>{if(!(r.length<=0)){if(r.length==1){rm(e,n,r[0],!0);return}n.push(`<div style="${G6(e,r)}" contenteditable="true" class="immersize-translate-resizable">`),r.forEach(o=>{rm(e,n,o,!1)}),n.push("</div>")}}),`
  <div class="textLayer immersive-translate-text-layer" data-main-rotation="0"">
  ${n.join("")}
  </div>`}function rm(e,t,n,u=!0){if(n.length<=0)return;let{pageWidth:a,pageHeight:r,scale:o}=e,i=u?"":"position:relative;",s=`${(100-n[0].left*100/(a*o)).toFixed(2)}%`;n.forEach(l=>{if(!l.str)return;let c=l.mergedTimes>0?`${(l.width*100/(a*o)+1).toFixed(2)}%`:"auto",d=`${(l.left*100/(a*o)).toFixed(2)}%`,g=`${(l.top*100/(r*o)).toFixed(2)}%`,m=`calc(var(--scale-factor)*${Math.min(l.fontSize-1,24)}px)`,f=`${l.fontName},serif`;u&&(i=`position: absolute; left: ${d}; top: ${g};width: ${c};max-width:${s};height:${(l.bottom-l.top)*1.05}px;overflow:auto;resize: both;`);let w=i0(l.str)?"":"translate-pending",y=l.str;l.translateStatus=="success"&&(y=l.translatedStr,w=""),t.push(`<p id='${l.id}' class='${w} ${u&&"immersize-translate-resizable"}' style="${i} font-size: ${m}; font-family: ${f};white-space: pre-line;" ${u&&'contenteditable="true"'}>${y}</p>`)})}function G6(e,t){let{pageWidth:n,pageHeight:u,scale:a}=e,r=t[0][0],o=r.width,i=r.top,s=t[t.length-1][t[t.length-1].length-1].bottom;t.forEach(g=>{g[0].width>o&&(o=g[0].width)});let l=`${(o*100/(n*a)).toFixed(2)}%`,c=`${(r.left*100/(n*a)).toFixed(2)}%`,d=`${(r.top*100/(u*a)).toFixed(2)}%`;return`position:absolute;width:${l};left:${c};top:${d};height:${s-i}px;overflow:auto;resize: both;`}function V6(e,t){let n=[];return t.forEach((u,a)=>{if(a==0){n.push([u]);return}let r=n[n.length-1][0];if(e.prevLineP=r,c0(e,u)){n[n.length-1].push(u);return}n.push([u])}),n}function J6(e,t){let n=[];return t.forEach((u,a)=>{if(a==0||u.length>1){n.push([u]);return}let r=n[n.length-1];if(e.prevGroup=r[r.length-1],Vg(e,u)){r.push(u);return}n.push([u])}),n}var sm="immersive-translate",Iu,gn=[];async function cm(e){let t=globalThis.PDFViewerApplication;if(!t)return;if(Ht("open_pdf_page",[{name:"open_pdf_page"}],{...e}),t&&t.eventBus){if(n(),t&&t.pagesCount>0){let u=await lm(1);await vo(e,u||[])}}else await t.initializedPromise,n();function n(){t.eventBus.on("pagesdestroy",()=>{gn=[],Iu=void 0,eb(e)}),t.eventBus.on("textlayerrendered",async({pageNumber:u})=>{let a=await lm(u);await vo(e,a||[])})}}function Y6(e){if(Iu)return{...Iu,pageNum:e,prevLineP:{},prevP:{}};let t=globalThis.PDFViewerApplication;if(!t)return;let n=t.pagesCount,u=document.getElementById("viewer");if(!u)return;let r=getComputedStyle(u).getPropertyValue("--scale-factor"),i={scale:Number(r),pageNum:e,pagesCount:n,pageWidth:0,pageHeight:0,prevLineP:{},prevP:{},pdfDocument:t.pdfDocument};return Iu={...i},i}async function lm(e){let t=Y6(e);if(!t)return;gn[e]||(gn[e]=await X6(t,e,gn[e-1]||[]));let n=gn[e],u=document.querySelector(`.page[data-page-number="${e}"]`),a=document.querySelector(`.${sm}-page[data-page-number="${e}"]`);if(!(!u||a))return a=document.createElement("div"),a.setAttribute("style",u.getAttribute("style")||""),a.setAttribute("data-page-number",e+""),a.classList.add("page"),a.classList.add(`${sm}-page`),a.innerHTML=im(t,n),e==t.pagesCount?u.parentNode?.appendChild(a):u.parentNode?.insertBefore(a,u.nextSibling),n}async function X6(e,t,n){let u=await e.pdfDocument.getPage(t),a=await u.getTextContent(),[r,o,i,s]=u._pageInfo.view;Iu.pageWidth=i,Iu.pageHeight=s,Object.assign(e,{prevPageParagraphs:n,pageWidth:i,pageHeight:s});let l=Z6(e,a);e.origLineParagraphs=l;let{prevP:c,curP:d}=$g(e,l);return d&&dm(c,void 0,d),Q6(e,l)}function Q6(e,t){let n=[];return t.forEach((o,i)=>{if(i==0){u(o);return}let s=t[i-1],l=n[n.length-1];if(e.prevLineP=s,e.prevP=l,Xg(e,o)){if(Qg(e,o)){r(l,o);return}if(em(e,o)){e.justify={left:s.left,right:s.right,width:s.width,top:s.top,str:s.str,fontSize:s.fontSize},r(l,o);return}if(tm(e,o)){r(l,o);return}if(l0(e,o)){r(l,o);return}if(nm(e,o)){r(l,o),o.left<l.left&&(l.left=o.left);return}}else if(l0(e,o)){r(l,o);return}Jg(e,o)&&dm(l,e.prevLineP,o),u(o)}),n;function u(o){a(o.str)||n.push(o)}function a(o){return!!(!o||/^_{6,}$/.test(o)||/ps:\/\/\S+$/.test(o))}function r(o,i,s=" ",l=!0){if(l&&i.str&&Gg(i.str)){u(i);return}a(i.str)||(Ie(o.nextTop,i.top)&&o.str.endsWith("-")&&(o.str=o.str.slice(0,o.str.length-1),s=""),o.mergedTimes++,o.str+=s+i.str,o.bottom=i.bottom,o.nextTop=i.nextTop)}}function Z6(e,t){let{scale:n,pageHeight:u}=e,a=[];return t.items.forEach(r=>{let o=r.str;if(!o.trim())return;let i=r.transform[4],s=r.transform[5],l=r.width*n,c=t.styles[r.fontName].fontFamily,d=r.transform[3],g=t.styles[r.fontName].descent,f=(1+(1-t.styles[r.fontName].ascent)+g)*d,w=i*n,y=w+l,p=(u-s-f)*n,_=p+d*n,M=_+d*n*.2,A=y+d*n*.3,S={str:o,left:w,nextLeft:A,top:p,nextTop:M,id:`pageNum-${St()}`,width:l,fontName:c,fontSize:d,right:y,bottom:_,attachList:[],mergedTimes:0,translatedStr:""};if(a.length==0)a.push(S);else{let E=a[a.length-1];if(e.prevLineP=E,um(e,S)){Yg(e,S)?E.str+=o:E.str+=" "+o,E.right=y,E.fontName=c,E.width=Math.max(E.width+l,y-E.left),E.nextLeft=A;return}if(am(e,S)){E.width=Math.max(E.width+l,y-E.left),E.right=y,E.nextLeft=A,E.attachList.push(S);return}a.push(S)}}),a}function dm(e,t,n){if(!Co(e,n)||e.width+1<n.width)return;let u=s0.join("|"),a=s0.join("").replace("\\","");if(!new RegExp(u).test(e.str[e.str.length-1])){let r=new RegExp(`[${a}]([^${a}]+?$)`),o="";e.str=e.str.replace(r,(i,s)=>(o=s,"")),t&&t.str==e.str&&!o&&(o=e.str,e.str=""),o&&(o.endsWith("-")?o=o.replace("-",""):o+=" "),n.str=o.trimStart()+n.str}}function eb(e){setTimeout(()=>{let t="";for(let n=1;n<=gn.length;n++){let u=!1;if(gn[n]){for(let a=0;a<gn[n].length;a++){let o=gn[n][a].str;if(t+=o,t.length>1e3){u=!0;break}}if(u)break}}Ve({text:t}).then(n=>{Ht("translate_page",[{name:"translate_page"}],{...e,sourceLanguage:n})})},2e3)}var Qn={};async function g0(e){let n=[...document.querySelectorAll(".source-text")].map(a=>a.textContent).join(""),u=await Bn(e,n,1e3);return Rt(u),u}async function gm(e){Tt("Translating");let t=Zt(),n=Tu(),u=[...document.querySelectorAll(".source-text")];if(Kr(e,t))return;let a=u.filter(r=>r.innerText?.trim()).map((r,o)=>{let i=r.parentElement?.parentElement?.querySelector(".target-text");return Ge(r,"id",o+""),i&&(Pu(i,o)?.remove(),i.appendChild(ha(e,o))),{text:r.innerText||"",id:o,from:t,to:e.targetLanguage,url:"https://google.com",fromByClient:n}});document.dispatchEvent(new CustomEvent(ht,{detail:JSON.stringify({type:"totalParagraphsCount",payload:{totalParagraphsCount:a.length}})}));try{await Fn({sentences:a},e,(r,o,i)=>{let s=i.id,l=Pu(document.body,s);if(!l)return;let c=l.parentElement;c&&(l.remove(),r?(c.innerHTML=`<span id="error-id-${s}">${r.message}</span>`,Qn[s]={ok:!1,sentence:i}):o&&(c.innerHTML=o.text,Qn[s]={ok:!0,sentence:i}),document.dispatchEvent(new CustomEvent(ht,{detail:JSON.stringify({type:"paragraphTranslated",payload:{ok:!r}})})))})}catch(r){throw r}finally{Tt("Translated")}}async function mm(e){Tt("Translating"),document.dispatchEvent(new CustomEvent(ht,{detail:JSON.stringify({type:"retryFailedParagraphsStart",payload:{}})}));let t=Object.keys(Qn),n=[],u=[];for(let a of t){let r=Qn[a];if(!r.ok){let i=document.querySelector(`#error-id-${a}`);if(i){let s=i.parentElement;i.remove(),s&&(delete Qn[a],s.appendChild(ha(e,a)),u.push(r.sentence))}}}try{await Fn({sentences:u},e,(a,r,o)=>{let i=o.id,s=Pu(document.body,i);if(!s)return;let l=s.parentElement;l&&(s.remove(),a?(l.innerHTML=`<span id="error-id-${i}">${a.message}</span>`,Qn[i]={ok:!1,sentence:o}):r&&(l.innerHTML=r.text,Qn[i]={ok:!0,sentence:o}),document.dispatchEvent(new CustomEvent(ht,{detail:JSON.stringify({type:"paragraphTranslated",payload:{ok:!a}})})))})}catch(a){throw a}finally{Tt("Translated")}}function m0(){Tt("Original"),document.querySelectorAll(".target-text").forEach(e=>{e.innerHTML=""})}var p0={};async function pm(e){let t=[...document.querySelectorAll("iframe")],n="";for(let a of t){let r=a.contentDocument;if(!r)continue;let o=r.body;if(o&&(n=n+o.innerText||"",n.length>1e3))break}let u=await Bn(e,n,1e3);return Rt(u),u}async function fm(e){Tt("Translating"),document.dispatchEvent(new CustomEvent(ht,{detail:JSON.stringify({type:"retryFailedParagraphsStart",payload:{}})}));let t=Object.keys(p0),n=[];for(let u of t){let a=p0[u];if(a.error){let o=a.commonAncestorContainer.querySelector(`[${Ha}='${u}']`);o&&o.remove(),n.push(a)}}try{await Jr(n,e,e.config.translationMode)}catch{}finally{Tt("Translated")}}function hm(){let e=[...document.querySelectorAll("iframe")];for(let t of e){let n=t.contentDocument;if(!n)continue;let u=n.querySelectorAll("."+Bt);for(let a of u)a.remove()}Tt("Original")}async function bm(e){Tt("Translating");let t=St(),n=[...document.querySelectorAll("iframe")],u=[],a=[];for(let i of n){let s=i.contentDocument;if(!s)continue;Fu(s,e);let l=s.body;if(!l)continue;let c=Kt(e);c.isModifyImage=!1,Mn({id:t,container:l,filterRule:c,onParagraph:d=>{u.push(d)}})}let r=qr(e.config.translationServices[e.translationService]?.placeholderDelimiters),o=1;for(let i of u){let s=Gr(i.flatNodes,{isPreWhitespace:i.isPreWhitespace||!1,delimiters:r,stayOriginalSelectors:e.rule.stayOriginalTags.concat(e.rule.stayOriginalTags).map(c=>c.toLowerCase()).concat(e.rule.stayOriginalSelectors).concat(e.rule.additionalStayOriginalSelectors)});if(!s)continue;i.variables=s?.variables||{},i.text=s?.text,i.id=(o++).toString();let l=await Bs(i,{excludeLanguages:e?.config?.translationLanguagePattern?.excludeMatches||[],isDetectParagraphLanguage:e.state.isDetectParagraphLanguage,targetLanguage:e.targetLanguage,delimiters:r,noTranslateRegexp:e.rule.noTranslateRegexp,minTextCount:2,minWordCount:1});l&&(a.push(l),p0[l.id]=l)}u=[],document.dispatchEvent(new CustomEvent(ht,{detail:JSON.stringify({type:"totalParagraphsCount",payload:{totalParagraphsCount:a.length}})}));try{await Jr(a,e,e.config.translationMode)}catch{}finally{Tt("Translated")}}var tb=new AbortController,{signal:nb}=tb,y0=0,T0=0,f0=!1,h0=0,Ao=!1,Zn,Em=0,eu=[];function ko(e,t){ub();let n={url:e.url,config:e.config,state:{...e.state,translationArea:"body"}},u=e,a=u.config,r=a.generalRule.mouseHoverHoldKey==="Off",o=a.generalRule.mouseHoverHoldKey==="Auto",i=st(d=>{if(f0==!1&&Math.abs(d.clientX-y0)+Math.abs(d.clientY-T0)>3&&(h0<2?h0+=1:f0=!0),y0=d.clientX,T0=d.clientY,o||Ao&&!Zn){let g=Cm(u.rule,t);if(g){if(x0(g))return;Tm(u,g)}}},o?700:300),s=d=>{let g=d.target;x0(g)||Tm(u)},l=d=>{let g=a?.generalRule?.mouseHoverHoldKey?.toLowerCase()||"alt",m=je.getPressedKeyCodes();if(m.length>1&&je[g]&&(Em=Date.now()),m.length===1&&je[g]){let f=Date.now();Ao=!0,Zn&&clearTimeout(Zn),Zn=setTimeout(()=>{let w=Em-f;w>0&&w<=150?Ao=!1:s(d),Zn=void 0},150)}};if(eu.push(()=>{Zn&&clearTimeout(Zn)}),r)return;b0("mousemove",i,t),eu.push(()=>{t.removeEventListener("mousemove",i)});function c(){f0=!1,h0=0,i.cancel()}if(o)b0("blur",c,t),eu.push(()=>{t.removeEventListener("blur",c)});else{let d=a?.generalRule?.mouseHoverHoldKey?.toLowerCase()||"alt",g=["ctrl","alt","shift","cmd","command","option","control"];b0("keyup",ym,t),eu.push(()=>{t.removeEventListener("keyup",ym)}),g.includes(d)?je("*","mouseHover",l):je(a.generalRule.mouseHoverHoldKey,"mouseHover",s),je.setScope("mouseHover"),eu.push(()=>{je.deleteScope("mouseHover")})}}function ub(){eu.forEach(e=>e()),eu=[]}function ym(e){Ao=!1}function b0(e,t,n=window){return n.addEventListener(e,t,{signal:nb})}function Tm(e,t,n=window){if(t=t||Cm(e.rule,n),!t){F.debug("can not find selection part!");return}if(x0(t)){F.debug("exclude  dom");return}pg(e,t);let u=Zr();u?.currentUrl!==window.location.href&&(Rn(),Os(e)),u&&(u.setupMouseHoverListener=ko);let a=Kt(e);a.excludeSelectors=[],a.selectors=[],Mn({id:u.id,container:t,filterRule:a,force:!0,onParagraph:r=>{ba(u,r,!0)},onFrame:()=>{},onIgnoreElement:()=>{}}),Ht("translate_page",[{name:"translate_page"}],{...e,sourceLanguage:"mouseHover"})}function Cm(e,t){return ab(y0,T0,e,t)}function ab(e,t,n,u){let a=i4(e,t,n,u);if(a==null)return;let r=()=>{let s=u.document.elementFromPoint(e,t);if(!s)return;let l=s4(s,e,t);return l===s?s.nodeName==="BUTTON"?s:void 0:wm(l,n)},o=()=>{try{a.setStartBefore(a.startContainer),a.setEndAfter(a.startContainer)}catch(l){F.debug("get mouse over word fail",l)}let s=a.getBoundingClientRect();if(!(s.left>e||s.right<e||s.top>t||s.bottom<t))return wm(a.startContainer,n)},i;return a.startContainer.nodeType!==Node.TEXT_NODE?i=r():i=o(),i}function x0(e){return!!(!(e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE)||e.nodeType===Node.ELEMENT_NODE&&xn(e,Ml))}function E0(e){return!!(e.host&&e.mode)}function xm(e,t){let n=e.parentNode;if(n.nodeName==="BODY"||E0(n))return e;for(;n&&n.nodeName!=="BODY"&&!E0(n)&&Mi(n,t);){let u=n.parentNode;if(u&&E0(u))break;n=u}return n}function wm(e,t){return e.nodeType===Node.TEXT_NODE||Mi(e,t)?xm(e,t):e}var ju=!1,Do;function w0(e){let{config:t}=e;if(e.isInputTranslationExcludeUrl){F.debug("exclude url for input");return}let n={...t.inputLanguageCodeAlias};Yt.forEach(l=>n[l]=[l,...n[l]||[]]);let u=t.inputStartingTriggerKeyAlias[t.inputStartingTriggerKey]||[];u.includes(t.inputStartingTriggerKey)||u.unshift(t.inputStartingTriggerKey),n[t.inputTargetLanguage]=[...u,...n[t.inputTargetLanguage]];let a={triggerTimes:t.inputTrailingTriggerKeyRepeatTimes,triggerKey:t.inputTrailingTriggerKey,triggerTimeout:t.inputTrailingTriggerKeyTimeout,codePrefix:t.inputStartingTriggerKey,codeAlias:n,flatAlias:Object.values(n).flat(),codePrefixAlias:t.inputStartingTriggerKeyAlias},r=0,o=Date.now();Do&&self.removeEventListener("keydown",Do),Do=i,self.addEventListener("keydown",Do);function i(l){if(ju)return;let c=l,d=c.target||c.srcElement,g=d?.tagName;(d?.isContentEditable||g=="INPUT"||g=="SELECT"||g=="TEXTAREA")&&(Tb(l,a.triggerKey,a.codePrefixAlias)?s(l):r=0)}function s(l){Date.now()-o<a.triggerTimeout?r++:r=1,F.debug(a.triggerKey,r),o=Date.now(),r>=a.triggerTimes&&(sb(e,a),r=0)}}function rb({codePrefix:e,flatAlias:t,codePrefixAlias:n}){let u=[],a=n[e]||[];a.includes(e)||a.unshift(e);for(let r of a){let o=t.map(i=>{let s=r+i;return a.includes(i)||(s+=" "),s});u.push(...o)}return new RegExp(u.join("|"))}function vm(e,t){for(let[n,u]of Object.entries(t))if(u.includes(e))return n;return""}var zu;function ob(e){let t=e.parentElement;if(!t)return;zu=document.createElement("div"),zu.className=Ce+"-input",zu.innerHTML=`<div class="${Ce}-input-loading"/>`,t.appendChild(zu);let n=t,u=!1;do{let a=getComputedStyle(n).position;if(["fixed","absolute","relative"].includes(a)){u=!0;break}n=n.parentElement}while(n);if(n=t,!u)do{if(getComputedStyle(n).position==="static"){n.style.position="relative";break}n=n?.parentElement||null}while(n)}function ib(){zu&&zu.remove()}async function sb(e,t){if(!ju)try{let n=document.activeElement;ju=!0,ob(n);let u="",a="",r=xa(n)||"",o=e.config.inputTargetLanguage;if(t.codePrefix==="none"){let d=r.split(" ")[0];d&&d[0]&&(d=d[0].toLowerCase()+d.slice(1)),d.trim()&&t.flatAlias.includes(d)?(o=vm(d,t.codeAlias),a=r.slice(d.length+1)):a=r}else{o="";let d=rb(t),g=r.split(d);if(g.length<2)return;if(a=g[g.length-1],u=g[0],g.length>2){let f=r.lastIndexOf(a),w=r.slice(0,f).lastIndexOf(g[g.length-2]);u=r.slice(0,w+g[g.length-2].length)}if(u.endsWith(t.codePrefix))return;let m=r.slice(u.length+1,r.indexOf(a)).trim();if(o=vm(m,t.codeAlias),!o){F.warn("not found alias",m);return}}yb(e);let i=lb(a,t),s=await Bn(e,i);F.debug("translateContent",i,s);let l={text:i||"",id:0,from:s,to:o,url:"https://google.com",fromByClient:s};if(!l.text)return;let c=await Wr(l,e);Eb(n,u+c.text),ju=!1}catch(n){throw ju=!1,n}finally{ju=!1,ib()}}function lb(e,t){let{triggerTimes:n,triggerKey:u}=t,a=0,r=" ";u.length==1?(a=n,r=u):u.toLowerCase()=="space"&&(a=n);let o=e.length;for(let i=e.length-1;i>=e.length-a;i--){if([10,8629].includes(e[i].charCodeAt(0))){o--;continue}if(![...t.codePrefixAlias[u]||[],r].includes(e[i]))break;o--}return e.length-o<3&&[".","\u3002"].includes(e[o-1])&&o--,e.slice(0,o)}function cb(e,t){let n=t.innerHTML,u=xa(t);return{html:n.replace(u,e),text:e}}function Am(e,t,n=!1){let u=xa(t);return n?u.trim().endsWith(e.text.trim()):u.trim()==e.text.trim()}function xa(e){return e.value||e.innerText||e.textContent}async function tu(e){await new Promise((t,n)=>{setTimeout(()=>{t("")},e)})}async function db(e,t,n){await tu(10);let u=new DataTransfer;e.forEach(a=>{a==="plain"&&u.setData("text/plain",t.text)}),n.dispatchEvent(new ClipboardEvent("paste",{clipboardData:u,bubbles:!0,cancelable:!0})),u.clearData(),await tu(10)}async function gb(e,t){let n=document.createEvent("TextEvent");n.initTextEvent&&(n.initTextEvent("textInput",!0,!0,window,e.text),t.dispatchEvent(n),await tu(10))}async function mb(e,t){t.value&&t.select(),document.execCommand("insertHTML",!1,e.html),await tu(20),(t.value||t.value==="")&&(t.value=e.text)}async function pb(e,t){km(t)&&(t.value=e.text,t.dispatchEvent(new Event("input",{bubbles:!0})),await tu(20))}var fb=[db.bind(null,["plain"])];function hb(e){let t=new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,keyCode:8,which:8,location:0,key:"Backspace"});return e.dispatchEvent(t)}function km(e){return e.tagName==="INPUT"||e.tagName==="TEXTAREA"}function bb(e){if(km(e))return;e.focus();let t=window.getSelection();if(t&&t.type==="Caret"&&t.anchorNode&&t.anchorNode.textContent){let n=t.anchorNode,u=document.createRange();n.parentNode?.firstChild?u.setStart(n.parentNode?.firstChild,0):u.setStart(n,0),n.nodeType==Node.TEXT_NODE?u.setEnd(n,n.textContent.length):u.setEnd(n,n.childNodes.length),t.removeAllRanges(),t.addRange(u)}}async function Eb(e,t){await bb(e),await tu(50);let n=cb(t,e);hb(e),F.debug("clearContnet",xa(e)),await tu(50);for(let u of[...fb,pb,mb,gb])if(await u(n,e),F.debug("setContent",u.name,Am(n,e),xa(e),n),Am(n,e))break}function yb(e){Ht("translate_input",[{name:"translate_input",params:{input_trailing_trigger_key:e.config.inputTrailingTriggerKey,input_starting_trigger_key:e.config.inputStartingTriggerKey,input_target_language:e.config.inputTargetLanguage}}],e)}function Tb(e,t,n){let u="";e&&e.code&&(u=e.code.toLowerCase());let a="";e&&e.key&&(a=e.key.toLowerCase());let r=e.keyCode,o=n[t]||[];return r===229&&t!=="space"?!1:!!(o.includes(u)||o.includes(a)||u===t||a===t)}var le=null,So={},Uu,Po;async function yo(){if(Ne()==="Original"){let e={};Po&&(e.translationMode=Po),Uu&&(e.translationTheme=Uu),le&&(e={...le.state,...e}),await wt(ot(),e),await Gt(le)}else(Ne()==="Translated"||Ne()==="Error")&&nu()}async function To(){if(le=await wt(ot(),{}),le.rule.isEbookBuilder)return fm(le);if(le.rule.isSubtitleBuilder)return mm(le);hg()}async function xo(){if(Ne()==="Original")le=await wt(ot(),{}),Uu||(Uu=le.state.translationTheme),le=await wt(ot(),{translationTheme:"mask"}),await Gt(le);else if(Ne()==="Translated"){let e=Vd().filter(u=>u.contentDocument?.body).map(u=>u.contentDocument.body),t=[le.mainFrame,...e],n=le?.state.translationTheme;for(let u of t){let a=Eu(u,cu,!0);n==="mask"?a!=="none"?Ge(u,cu,"none",!0):Ge(u,cu,"mask",!0):a!=="mask"?Ge(u,cu,"mask",!0):Ge(u,cu,"none",!0)}}}async function C0(){let e=await wt(ot(),{});return e.rule.isSubtitleBuilder?g0(e):fg(e)}function xb(e){Ne()==="Original"?gm(e):m0()}function wb(e){Ne()==="Original"?eo(e):Rn()}async function nu(){let e=await wt(ot(),{});if(e.rule.isSubtitleBuilder){m0();return}else e.rule.isEbookBuilder&&hm();Rn()}async function Gt(e){if(Ne()!=="Original"&&await nu(),document.dispatchEvent(new CustomEvent(ht,{detail:JSON.stringify({type:"translateStart",payload:{}})})),document.dispatchEvent(new CustomEvent(ht,{detail:JSON.stringify({type:"targetLanguage",payload:{targetLanguage:e.targetLanguage}})})),So[e.translationService]||(So[e.translationService]=!0,rt()||Ts(e).catch(t=>{F.warn("init translation engine error",t)})),Ht("translage_page_daily",[{name:"translage_page_daily"}],e),Ht("translate_page",[{name:"translate_page"}],{...e,sourceLanguage:Zt()}),e.rule.isSubtitleBuilder)return xb(e);if(e.rule.isEbookBuilder)return bm(e);e.rule.isPdf||wb(e)}async function Dm(){Ne()==="Original"?await Fo():(Ne()==="Translated"||Ne()==="Error")&&(le=await wt(ot(),{}),le.state.translationArea!=="main"?await Fo():nu())}async function Fo(){le=await wt(ot(),{translationArea:"main"}),await Gt(le)}async function v0(){le=await wt(ot(),{translationArea:"body"}),await Gt(le)}async function wo(){if(Ne()==="Original"){let e=await wt(ot(),{translationMode:"translation"});await Gt(e)}else(Ne()==="Translated"||Ne()==="Error")&&await nu()}async function Sm(e){if(le=await wt(ot(),{}),Ht("switch_translation_mode",[{name:"switch_translation_mode",params:{mode:e}}],{...le,sourceLanguage:"mouseHover"}),Ne()==="Original"){Gt(le);return}window.immersiveTranslateSwitchTranslateState&&window.immersiveTranslateSwitchTranslateState(e)}async function Pm(){if(Ne()==="Original")await v0();else if(Ne()==="Translated"||Ne()==="Error"){let e={};le&&le.state&&(e=le.state),le=await wt(ot(),e),le.state.translationArea!=="body"?(le.state.translationArea="body",le=await wt(ot(),le.state),await Gt(le)):nu()}}async function Fm(){le=await wt(ot(),{translationStartMode:"immediate"}),await Gt(le)}async function Wg(){let e=await wt(ot(),{});if(F.debug("init page ctx",e),e.rule.isSubtitleBuilder){g0(e);return}if(e.rule.isEbookBuilder){pm(e);return}if(e.rule.isPdf){await cm(e);return}if(Po||(Po=e.state.translationMode),Uu||(Uu=e.state.translationTheme),e.rule.urlChangeDelay&&await Yu(e.rule.urlChangeDelay),e.rule.waitForSelectors&&e.rule.waitForSelectors.length>0&&await Cb(e.rule.waitForSelectors,e.rule.waitForSelectorsTimeout),e.config.enableInputTranslation&&!sn(e.url,e.config.inputStyleBlockUrls)){let a=tt().IMMERSIVE_TRANSLATE_INPUT_INJECTED_CSS;wn(document,a,"immersive-translate-input-injected-css")}if(e.rule.isInjectOptionsUrl){let u=Bm(),a=document.createElement("meta");a.name="immersive-translate-options-url",a.content=u;try{document.head&&document.head.appendChild&&document.head.appendChild(a)}catch(r){F.warn("inject options url failed",r)}}if(e.rule.isInjectVersion){let u=kn(),a=document.createElement("meta");a.name="immersive-translate-version",a.content=u;try{document.head&&document.head.appendChild&&document.head.appendChild(a)}catch(r){F.warn("inject version failed",r)}}e.rule.globalMeta&&Object.keys(e.rule.globalMeta).forEach(a=>{let r=document.createElement("meta");r.name=a,r.content=e.rule.globalMeta[a],document.head.appendChild(r)}),e.rule.initialGlobalAttributes&&Zd(document.body,e.rule.initialGlobalAttributes),e.rule.initialSelectorGlobalAttributes&&eg(document.body,e.rule.initialSelectorGlobalAttributes,e.rule.asideMaxTextCount,e.rule.asideMaxWordCount,e.rule.asideMaxTextCountPerParagraph,e.rule.asideMaxWordCountPerParagraph);let t=e.sourceLanguage;t==="auto"?t=await C0():Rt(t);let n=e.state.isAutoTranslate||e.isTranslateUrl||e.rule.isPdf;if(!n&&!e.isTranslateExcludeUrl&&(F.debug(`detect page language: ${e.url} ${t}`),An(t,e.targetLanguage)||t==="auto"||I4(t,e.config.translationLanguagePattern)&&(n=!0,F.debug(`match language pattern ${t}, auto translate`))),e.rule.isEbookBuilder&&(n=!1),!e.rule.isPdf&&Ku()&&ko(e,window),e.rule.isPdf||w0(e),n)le.state.isAutoTranslate=!0,Gt(le);else if(F.debug("do not auto translate",e),e.rule.initTranslationServiceAsSoonAsPossible&&e.translationService==="deepl"){if(An(t,e.targetLanguage)||t==="auto")return;e.config&&e.config.translationServices&&e.config.translationServices.deepl&&e.config.translationServices.deepl.authKey&&typeof e.config.translationServices.deepl.authKey=="string"&&e.config.translationServices.deepl.authKey.startsWith("immersive_")&&(So[e.translationService]||(So[e.translationService]=!0,rt()||Ts(e).catch(u=>{F.warn("init translation engine error",u)})))}}async function wt(e,t){let n=Object.keys(t);if(le){let u={url:e,config:le.config,state:{...le.state,...t}};le=await ln(u)}else{let u=await $t(),a=t;n.length===0&&(a=void 0),le=await ln({url:e,config:u,state:a})}return le}async function Lm(){let e=await $t(),t;le&&le.state&&(t=le.state);let n={url:ot(),config:e,state:t},u=await ln(n);le=u;let a=Zr(),r=[];return a?r=a.allInlineWindows||[window]:r=[window],r.forEach(o=>{Hg(u,o),Ku()&&ko(u,o),w0(u)}),u}function Cb(e,t=3e3){return new Promise((n,u)=>{let a=t?setTimeout(()=>{n(new Error("timeout"))},t):void 0,r=setInterval(()=>{e.every(i=>document.querySelector(i)!==null)&&(clearInterval(r),a&&clearTimeout(a),n(null))},50)})}var wa=new Map,On=class{constructor(t,n=!1){this.logger=new ua,n&&this.logger.setLevel("debug"),this.fromType=t,wa.has(t)||(wa.set(t,new Map),I.runtime.onMessage.addListener((u,a,r)=>{let o=u.from,i=u.to,s,l,c;a.tab&&a.tab.id&&(s=a.tab.id,o=`${o}:${s}`,l=a.tab.url,c=a.tab.active),this.logger.debug(`${u.to} received message [${u.payload.method}] from ${u.from}`,u.payload.data?u.payload.data:" ");let d=k0(i),{type:g,name:m}=d;if(g!==t)return!1;let f=k0(o),y=wa.get(g).get(m);if(!y)return this.logger.debug(`no message handler for ${g}:${i}, but it's ok`),!1;let{messageHandler:p,sync:_}=y,M={type:t,name:f.name,id:s,url:l,active:c};if(_){try{let A=p(u.payload,M);r({ok:!0,data:A})}catch(A){r({ok:!1,errorName:A.name,errorMessage:A.message,errorDetails:A.details})}return!1}else return p(u.payload,M).then(A=>{r({ok:!0,data:A})}).catch(A=>{r({ok:!1,errorName:A.name,errorMessage:A.message,errorDetails:A.details})}),!0}))}getConnection(t,n,u){let a=!1;u&&u.sync&&(a=!0);let r=this.fromType,o=wa.get(r);if(o.has(t))return o.get(t).connectionInstance;{let i=new A0(`${r}:${t}`,this.logger);return wa.get(r).set(t,{messageHandler:n,sync:a,connectionInstance:i}),i}}},A0=class{constructor(t,n){this.from=t,this.logger=n}async sendMessage(t,n){let u=k0(t),{type:a,id:r}=u;if(a!=="content_script"){let o={to:t,from:this.from,payload:n};this.logger.debug(`${o.from} send message [${o.payload.method}] to ${o.to}`,o.payload.data?o.payload.data:" ");try{let i=await I.runtime.sendMessage(o);return _m(o,i,this.logger)}catch(i){if(a==="popup"){let s=`popup ${t} is not active, so the message does not send, ignore this error, ${JSON.stringify(n)}`;return this.logger.debug(s,n,t,i),Promise.resolve({message:s})}else throw i}}else{let o={from:this.from,to:t,payload:n};this.logger.debug(`${o.from} send message [${o.payload.method}] to ${o.to}`,o.payload.data?o.payload.data:" ");let i=await I.tabs.sendMessage(r,o);return _m(o,i,this.logger)}}};function _m(e,t,n){if(t){if(t.ok)return n.debug(`${e.from} received response from ${e.to}:`,t.data?t.data:" "),t.data;throw new Xe(t.errorName||"UnknownError",t.errorMessage||"Unknown error",t.errorDetails)}else throw new Xe("noResponse","Unknown error")}function k0(e){let t=e.split(":");if(t.length<2)throw new Error("not a valid to string");let n={type:t[0],name:t[1]};if(t[0]==="content_script"){let u=parseInt(t[2]);if(!isNaN(u))n.id=u;else throw new Error("tab id not a valid number")}return n}var Ru=async function(e,t){let{method:n,data:u}=e,a=await Lm();F.debug(`content script received message: ${n}`,u||" "),n==="translateTheWholePage"?await v0():n==="translateTheMainPage"?await Fo():n==="translateToThePageEndImmediately"?await Fm():n==="toggleTranslatePage"?await yo():n==="toggleTranslateTheWholePage"?await Pm():n==="toggleTranslateTheMainPage"?await Dm():n==="toggleOnlyTransation"?await wo():n==="translatePage"?await Gt(a):n==="toggleTranslationMask"?await xo():n==="restorePage"?nu():n==="setCurrentPageLanguageByClient"?Rt(u):n==="retryFailedParagraphs"?To():n==="switchTranslationMode"&&u&&u.mode&&Sm(u.mode)},vb=function(e,t){let{method:n,data:u}=e;if(F.debug(`content script received sync message: ${n}`,u||" "),n==="ping")return"pong";if(n==="getPageStatus")return Ne();if(n==="getCurrentPageLanguage"){let a=Zt();return C0().catch(r=>{F.warn("detectCurrentPageLanguage failed",r)}),a}},Lo,Bo;function qg(){let e=_o();rt()||Ab(),e.sendMessage("popup:main_sync",{method:"ready"}).catch(n=>{})}function _o(){return Lo||(Lo=new On("content_script",!1).getConnection("main",Ru),Lo)}function Ab(){return Bo||(Bo=new On("content_script",!1).getConnection("main_sync",vb,{sync:!0}),Bo)}var kb=new Map;function Mm(e){let t=Db(64),n=new CustomEvent(Ll,{detail:JSON.stringify({...e,type:"ask",id:t})});return document.dispatchEvent(n),new Promise((u,a)=>{kb.set(t,(r,o)=>{r?a(r):u(o)})})}function Db(e){let t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",u=n.length,a=0;for(;a<e;)t+=n.charAt(Math.floor(Math.random()*u)),a+=1;return t}async function nt(e){return await _o().sendMessage("background:main",e)}function G(e){return Xc()?Mm({method:"request",data:e}):me()||Yc()?(e.fetchPolyfill=globalThis.GM_fetch,vr(e)):nt({method:"fetch",data:e})}function $t(){return me()?Qt():nt({method:"getConfig"})}function Og(){return me()?oa():nt({method:"getLocalConfig"})}function so(e){return me()?Wn(e):nt({method:"setLocalConfig",data:e})}function kg(e){return me()?Er(e):nt({method:"setBuildinConfig",data:e})}function Ve(e){if(e.text){let t=Cr(e.text);if(t!=="auto")return Promise.resolve(t)}if(me()||yt()){let t=v4(e.text,e.minLength);return Promise.resolve(t)}return nt({method:"detectLanguage",data:e})}function bg(){return nt({method:"detectTabLanguage"})}function cg(e){if(me()){let n=new CustomEvent(Ua,{detail:e});document.dispatchEvent(n);return}_o().sendMessage("popup:main_sync",{method:"setPageStatus",data:e}).catch(n=>{})}function qd(e){return me()?_4(e):nt({method:"queryParagraphCache",data:e})}async function Kd(e){if(me()){await B4(e);return}return nt({method:"setParagraphCache",data:e})}async function td(){if(me())return Promise.resolve();await nt({method:"mockRequest"})}function lo(e=!1,t=""){return me()?(I.runtime.openOptionsPage(e,t),Promise.resolve()):nt({method:"openOptionsPage"})}function Bm(e=""){return me()||yt()?tt().OPTIONS_URL:I.runtime.getURL("options.html")}function D0(e=""){return I&&I.runtime&&I.runtime.getURL?I.runtime.getURL("options.html"):""}function co(e=!1){return me()?(I.extra.openAboutPage(e),Promise.resolve()):nt({method:"openAboutPage"})}function go(e=!1){return me()?(I.extra.openEbookViewerPage(e),Promise.resolve()):nt({method:"openEbookViewerPage"})}function Dg(e=!1){return me()?Promise.resolve():nt({method:"openHtmlViewerPage"})}function mo(e=!1){return me()?(I.extra.openEbookBuilderPage(e),Promise.resolve()):nt({method:"openEbookBuilderPage"})}function Kg(e){yt()}function Ys(e=!1){return me()?(alert("it's not support in userscript"),Promise.resolve()):nt({method:"openPdfViewerPage"})}function Sg(e=!1){return me()?(I.extra.openSubtitleBuilderPage(e),Promise.resolve()):nt({method:"openSubtitleBuilderPage"})}function Ag(){return me()?(F.warn("autoSyncLatestConfig is not support in monkey"),Promise.resolve()):nt({method:"autoSyncLatestConfig"})}function Rm(e){let t;try{t=new URL(e)}catch{return!1}let n=D0(),u="";try{u=new URL(n).hostname}catch{}return!!(u&&t.hostname===u)}function ro(e){let t;try{t=new URL(e)}catch{return!1}let n=D0(),u="";try{u=new URL(n).hostname}catch{}return u&&t.hostname===u?!0:!(t.protocol!=="http:"&&t.protocol!=="https:"&&t.protocol!=="file:"&&t.protocol!=="data:")}var Sb=function(e,t){let{method:n,data:u}=e;F.debug(`popup received message: ${n}`,u||" ");let a;t.active&&(a=t.id,globalThis.document.dispatchEvent(new CustomEvent(Gu,{detail:{tabId:a,payload:e}})))},Mo;function Om(){Ca()}function Ca(){return Mo||(Mo=new On("popup",!1).getConnection("main_sync",Sb),Mo)}var uu={},S0={};function Ro(e,t){if(S0[e])try{t()}catch(n){F.error("run callback failed",n)}else uu[e]||(uu[e]=[]),uu[e].push(t)}function Nm(e){if(uu[e]&&uu[e].length){let t=[...uu[e]];uu[e]=[],t.forEach(n=>n())}}function P0(){let[e,t]=Ee("Original"),{t:n}=Nt(),[u,a,r,o]=io(()=>{setTimeout(()=>{E("updateGlobalContext")()},250)}),[i,s]=Ee(null),[l,c]=Ee(null),[d,g]=Ee(null),[m,f]=Ee("auto"),[w,y]=Ee(null),[{errorMsg:p,disableButton:_},M]=Ee({errorMsg:"",disableButton:!1}),A=V=>{let{tabId:J,payload:xe}=V.detail,{method:C,data:x}=xe;F.debug("popup received message",C,x||" "),C==="setPageStatus"?J&&t(x):C==="ready"&&J&&(M({disableButton:!1,errorMsg:""}),S0[J]=!0,Nm(J))},S=()=>{a(V=>({...V,enabled:!V.enabled})),setTimeout(()=>{v()},50)};Ye(()=>{let V=Ca();return I.tabs.query({currentWindow:!0,active:!0}).then(J=>{let xe=J[0].id;g(xe);let C=J[0].url;I.tabs.onUpdated.addListener((x,H,q)=>{x===x&&q.url&&l&&q.url!==l&&(c(q.url),window.location.reload())}),globalThis.document.addEventListener(Gu,A),C&&c(C),C&&ro(C)?(c(C),V.sendMessage(`content_script:main_sync:${xe}`,{method:"ping"}).then(x=>{M({disableButton:!1,errorMsg:""}),S0[xe]=!0,Nm(xe)}).catch(x=>{Rm(C)||M({disableButton:!0,errorMsg:n("reloadCurrentPage")}),F.debug("ping failed, but it is ok. cause maybe content is not injected",x)}),Ro(xe,async()=>{let x=await V.sendMessage(`content_script:main_sync:${xe}`,{method:"getPageStatus"});t(x)}),Ro(xe,async()=>{let x=await Qt();s(x)}),Ro(xe,async()=>{let x=await V.sendMessage(`content_script:main_sync:${xe}`,{method:"getCurrentPageLanguage"});f(x),x==="auto"&&setTimeout(async()=>{let H=await V.sendMessage(`content_script:main_sync:${xe}`,{method:"getCurrentPageLanguage"});f(H)},500)})):M({disableButton:!0,errorMsg:"\u26A0\uFE0F \u6682\u65E0\u6743\u9650\u7FFB\u8BD1\u5F53\u524D\u9875\u9762"}),C===""&&c("about:newtab")}).catch(J=>{}),()=>{globalThis.document.removeEventListener(Gu,A)}},[]),Ye(()=>{Qt().then(V=>{s(V)})},[u]),Ye(()=>{l&&i&&ln({url:l,config:i}).then(V=>{y(V)})},[l,i]);let E=(V,J=!0,xe={})=>async()=>{let C=Ca(),H=(await I.tabs.query({currentWindow:!0,active:!0}))[0].id;C.sendMessage(`content_script:main:${H}`,{method:V,data:xe||{}}),J&&setTimeout(()=>{globalThis.close()},10)},k=()=>{let V=I.runtime.getURL(ja);I.tabs.create({url:V}),globalThis.close()},T=()=>{let V=I.runtime.getURL(Pl);I.tabs.create({url:V}),globalThis.close()},D=()=>{let V=I.runtime.getURL(Fl);yt()&&(V=tt().SUBTITLE_BUILDER_URL),I.tabs.create({url:V}),globalThis.close()},L=()=>{l&&d&&(I.tabs.update(d,{url:Gl(l)}),globalThis.close())},U=V=>{let J=Ca();if(f(V),d&&l){let xe=Oa(l,V,i.sourceLanguageUrlPattern);a(C=>({...C,sourceLanguageUrlPattern:xe})),Ro(d,()=>{J.sendMessage(`content_script:main:${d}`,{method:"setCurrentPageLanguageByClient",data:V})})}},v=()=>{globalThis.close()},B=(V="")=>{if(yt()){let xe=tt().OPTIONS_URL;I.tabs.create({url:xe+V})}else{let J=I.runtime.getURL("options.html");I.tabs.create({url:J+V})}setTimeout(()=>{globalThis.close()},50)},X=()=>{if(yt()){let J=tt().OPTIONS_URL;I.tabs.create({url:J+"#about"})}else I.tabs.create({url:I.runtime.getURL("options.html#about")});setTimeout(()=>{globalThis.close()},50)},O=()=>{let V=I.runtime.getURL("ebook/make/index.html");yt()&&(V=tt().EBOOK_BUILDER_URL),I.tabs.create({url:V}),setTimeout(()=>{globalThis.close()},50)},Z=()=>{I.tabs.create({url:I.runtime.getURL("ebook/index.html")}),setTimeout(()=>{globalThis.close()},50)},ve=V=>{a(J=>({...J,generalRule:{...J.generalRule,mouseHoverHoldKey:V}}))};return!i||!w?null:z(Ta,{onClose:v,onToggleTranslate:E("toggleTranslatePage"),openEbookBuilderPage:O,openEbookViewerPage:Z,onTranslateLocalSubtitleFile:D,onTranslateLocalHtmlFile:T,onToggleEnabled:S,openOptionsPage:B,openAboutPage:X,onTranslatePdf:L,onTranslateLocalPdfFile:k,onTranslateTheMainPage:E("translateTheMainPage"),onTranslateTheWholePage:E("translateTheWholePage"),ontranslateToThePageEndImmediately:E("translateToThePageEndImmediately"),onSwitchTranslationMode:V=>{E("switchTranslationMode",!0,{mode:V})()},onTranslatePage:E("translatePage"),onRestorePage:E("restorePage",!1),onSetPageLanguage:U,onUserConfigChange:V=>{a(V)},config:i,pageStatus:e,ctx:w,currentUrl:l,currentLang:m,onSetLocalConfig:Wn,onSetBuildinConfig:Er,request:vr,onMouseTriggerChanged:ve,errorMsg:p,disabledButton:_})}var Im=document.getElementById("mount");Om();Im&&(async()=>{let e=await Qt();e.debug&&F.setLevel("debug"),iu(z(uo,{lang:e.interfaceLanguage,translations:to,fallbackLang:"zh-CN",children:z(P0,{})}),Im)})();})();
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
