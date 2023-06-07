(()=>{var Im=Object.defineProperty;var Nm=(e,t)=>{for(var u in t)Im(e,u,{get:t[u],enumerable:!0})};var Ws=(e,t,u)=>{if(!t.has(e))throw TypeError("Cannot "+u)};var to=(e,t,u)=>(Ws(e,t,"read from private field"),u?u.call(e):t.get(e)),qs=(e,t,u)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,u)},Ks=(e,t,u,n)=>(Ws(e,t,"write to private field"),n?n.call(e,u):t.set(e,u),u);var h={BUILD_TIME:"2023-06-07T14:40:52.988Z",VERSION:"0.6.1",PROD:"1",REDIRECT_URL:"https://dash.immersivetranslate.com/auth-done/",IMMERSIVE_TRANSLATE_INJECTED_CSS:`:root {
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

.immersive-translate-pdf-target-container
  .immersive-translate-target-wrapper
  font {
  color: inherit;
  white-space: inherit;
  position: unset;
}
.immersive-translate-state-dual > br {
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

.immersive-translate-target-translation-inline-wrapper {
}

.immersive-translate-target-translation-theme-underline-inner {
  border-bottom: 1px solid
    var(--immersive-translate-theme-underline-borderColor) !important;
}

.immersive-translate-target-translation-theme-nativeUnderline-inner {
  text-decoration: underline
    var(--immersive-translate-theme-nativeUnderline-borderColor) !important;
}

.immersive-translate-target-translation-block-wrapper-theme-dashedBorder {
  border: 1px dashed var(--immersive-translate-theme-dashedBorder-borderColor) !important;
  border-radius: var(
    --immersive-translate-theme-dashedBorder-borderRadius
  ) !important;
  padding: 6px;
  margin-top: 2px;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper-theme-dashedBorder {
  border: 1px dashed var(--immersive-translate-theme-dashedBorder-borderColor) !important;
  border-radius: var(
    --immersive-translate-theme-dashedBorder-borderRadius
  ) !important;
  padding: 2px;
}

.immersive-translate-target-translation-block-wrapper-theme-solidBorder {
  border: 1px solid var(--immersive-translate-theme-solidBorder-borderColor) !important;
  border-radius: var(
    --immersive-translate-theme-solidBorder-borderRadius
  ) !important;
  padding: 6px;
  margin-top: 2px;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper-theme-solidBorder {
  border: 1px solid var(--immersive-translate-theme-solidBorder-borderColor) !important;
  border-radius: var(
    --immersive-translate-theme-solidBorder-borderRadius
  ) !important;
  padding: 2px;
}

.immersive-translate-target-translation-theme-nativeDashed-inner {
  text-decoration: dashed underline
    var(--immersive-translate-theme-nativeDashed-borderColor) !important;
}

.immersive-translate-target-translation-theme-thinDashed-inner {
  border-bottom: 1px dashed
    var(--immersive-translate-theme-thinDashed-borderColor) !important;
}

.immersive-translate-target-translation-theme-dotted-inner {
  background-repeat: repeat-x;
  background-image: linear-gradient(
    to right,
    var(--immersive-translate-theme-dotted-borderColor) 30%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 5px 1px;
  background-repeat: repeat-x;
  padding-bottom: 3px;
}
.immersive-translate-target-translation-theme-nativeDotted-inner {
  text-decoration: dotted underline
    var(--immersive-translate-theme-nativeDotted-borderColor) !important;
}

.immersive-translate-target-translation-theme-wavy-inner {
  text-decoration: wavy underline
    var(--immersive-translate-theme-wavy-borderColor) !important;
}

.immersive-translate-target-translation-theme-dashed-inner {
  background-repeat: repeat-x !important;
  background: linear-gradient(
      to right,
      var(--immersive-translate-theme-dashed-borderColor) 0%,
      var(--immersive-translate-theme-dashed-borderColor) 50%,
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
  border-top: 1px dashed
    var(--immersive-translate-theme-dividingLine-borderColor);
  padding-top: 8px;
}

.immersive-translate-target-translation-inline-wrapper-theme-dividingLine::before {
  content: "";
  border-left: 1px dashed
    var(--immersive-translate-theme-dividingLine-borderColor);
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
  text-shadow: 10px 0px 3px
      var(--immersive-translate-theme-marker2-backgroundColor),
    16px 3px 9px var(--immersive-translate-theme-marker2-backgroundColor),
    2px 0px 6px var(--immersive-translate-theme-marker2-backgroundColor),
    -12px 0px 12px var(--immersive-translate-theme-marker2-backgroundColor) !important;
}

.immersive-translate-target-translation-theme-marker-inner {
  /* TODO: add more texture */
  background: linear-gradient(
    to right,
    rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.1),
    rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.9) 3%,
    rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.9) 35%,
    rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.9) 70%,
    rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.8) 95%,
    rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.3)
  );
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
/* opacity theme start */

.immersive-translate-target-translation-theme-opacity-inner {
  filter: opacity(10%) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

[data-immersive-translate-root-translation-theme="none"]
  .immersive-translate-target-translation-theme-opacity-inner {
  filter: none !important;
}
[data-immersive-translate-root-translation-theme="opacity"]
  .immersive-translate-target-inner {
  filter: opacity(10%) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

.immersive-translate-target-translation-theme-opacity-inner:hover {
  filter: none !important;
}

[data-immersive-translate-root-translation-theme="opacity"]
  .immersive-translate-target-inner:hover {
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
  -webkit-logical-height: 1em; /* Chrome ignores auto, so we have to use this hack to set the correct height  */
  -webkit-logical-width: auto; /* Chrome ignores auto, but here for completeness */
}

.immersive-translate-loading-spinner {
  vertical-align: middle !important;
  width: 10px !important;
  height: 10px !important;
  display: inline-block !important;
  margin: 0 4px !important;
  border: 2px rgba(221, 244, 255, 0.6) solid !important;
  border-top: 2px rgba(9, 105, 218, 0.5) solid !important;
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
`,MOCK:"0",DEBUG:"0",INSTALL_FROM:"dev"};var zm=Object.create,no=Object.defineProperty,Hm=Object.getOwnPropertyDescriptor,Gs=Object.getOwnPropertyNames,Um=Object.getPrototypeOf,Wm=Object.prototype.hasOwnProperty,qm=(e,t)=>function(){return t||(0,e[Gs(e)[0]])((t={exports:{}}).exports,t),t.exports},Km=(e,t)=>{for(var u in t)no(e,u,{get:t[u],enumerable:!0})},uo=(e,t,u,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Gs(t))!Wm.call(e,a)&&a!==u&&no(e,a,{get:()=>t[a],enumerable:!(n=Hm(t,a))||n.enumerable});return e},$m=(e,t,u)=>(uo(e,t,"default"),u&&uo(u,t,"default")),Vs=(e,t,u)=>(u=e!=null?zm(Um(e)):{},uo(t||!e||!e.__esModule?no(u,"default",{value:e,enumerable:!0}):u,e)),Js=qm({"../esmd/npm/webextension-polyfill@0.10.0/node_modules/webextension-polyfill/dist/browser-polyfill.js"(e,t){(function(u,n){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],n);else if(typeof e<"u")n(t);else{var a={exports:{}};n(a),u.browser=a.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:e,function(u){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let n="The message port closed before a response was received.",a=r=>{let i={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(i).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class o extends WeakMap{constructor(v,E=void 0){super(E),this.createItem=v}get(v){return this.has(v)||this.set(v,this.createItem(v)),super.get(v)}}let s=b=>b&&typeof b=="object"&&typeof b.then=="function",l=(b,v)=>(...E)=>{r.runtime.lastError?b.reject(new Error(r.runtime.lastError.message)):v.singleCallbackArg||E.length<=1&&v.singleCallbackArg!==!1?b.resolve(E[0]):b.resolve(E)},c=b=>b==1?"argument":"arguments",d=(b,v)=>function(w,...I){if(I.length<v.minArgs)throw new Error(`Expected at least ${v.minArgs} ${c(v.minArgs)} for ${b}(), got ${I.length}`);if(I.length>v.maxArgs)throw new Error(`Expected at most ${v.maxArgs} ${c(v.maxArgs)} for ${b}(), got ${I.length}`);return new Promise((T,_)=>{if(v.fallbackToNoCallback)try{w[b](...I,l({resolve:T,reject:_},v))}catch{w[b](...I),v.fallbackToNoCallback=!1,v.noCallback=!0,T()}else v.noCallback?(w[b](...I),T()):w[b](...I,l({resolve:T,reject:_},v))})},m=(b,v,E)=>new Proxy(v,{apply(w,I,T){return E.call(I,b,...T)}}),g=Function.call.bind(Object.prototype.hasOwnProperty),f=(b,v={},E={})=>{let w=Object.create(null),I={has(_,L){return L in b||L in w},get(_,L,z){if(L in w)return w[L];if(!(L in b))return;let M=b[L];if(typeof M=="function")if(typeof v[L]=="function")M=m(b,b[L],v[L]);else if(g(E,L)){let de=d(L,E[L]);M=m(b,b[L],de)}else M=M.bind(b);else if(typeof M=="object"&&M!==null&&(g(v,L)||g(E,L)))M=f(M,v[L],E[L]);else if(g(E,"*"))M=f(M,v[L],E["*"]);else return Object.defineProperty(w,L,{configurable:!0,enumerable:!0,get(){return b[L]},set(de){b[L]=de}}),M;return w[L]=M,M},set(_,L,z,M){return L in w?w[L]=z:b[L]=z,!0},defineProperty(_,L,z){return Reflect.defineProperty(w,L,z)},deleteProperty(_,L){return Reflect.deleteProperty(w,L)}},T=Object.create(b);return new Proxy(T,I)},x=b=>({addListener(v,E,...w){v.addListener(b.get(E),...w)},hasListener(v,E){return v.hasListener(b.get(E))},removeListener(v,E){v.removeListener(b.get(E))}}),y=new o(b=>typeof b!="function"?b:function(E){let w=f(E,{},{getContent:{minArgs:0,maxArgs:0}});b(w)}),p=new o(b=>typeof b!="function"?b:function(E,w,I){let T=!1,_,L=new Promise(we=>{_=function(Me){T=!0,we(Me)}}),z;try{z=b(E,w,_)}catch(we){z=Promise.reject(we)}let M=z!==!0&&s(z);if(z!==!0&&!M&&!T)return!1;let de=we=>{we.then(Me=>{I(Me)},Me=>{let j;Me&&(Me instanceof Error||typeof Me.message=="string")?j=Me.message:j="An unexpected error occurred",I({__mozWebExtensionPolyfillReject__:!0,message:j})}).catch(Me=>{})};return de(M?z:L),!0}),F=({reject:b,resolve:v},E)=>{r.runtime.lastError?r.runtime.lastError.message===n?v():b(new Error(r.runtime.lastError.message)):E&&E.__mozWebExtensionPolyfillReject__?b(new Error(E.message)):v(E)},S=(b,v,E,...w)=>{if(w.length<v.minArgs)throw new Error(`Expected at least ${v.minArgs} ${c(v.minArgs)} for ${b}(), got ${w.length}`);if(w.length>v.maxArgs)throw new Error(`Expected at most ${v.maxArgs} ${c(v.maxArgs)} for ${b}(), got ${w.length}`);return new Promise((I,T)=>{let _=F.bind(null,{resolve:I,reject:T});w.push(_),E.sendMessage(...w)})},C={devtools:{network:{onRequestFinished:x(y)}},runtime:{onMessage:x(p),onMessageExternal:x(p),sendMessage:S.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:S.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},B={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return i.privacy={network:{"*":B},services:{"*":B},websites:{"*":B}},f(r,C,i)};u.exports=a(chrome)}else u.exports=globalThis.browser})}}),Ys={};Km(Ys,{default:()=>Qn});var Gm=Vs(Js());$m(Ys,Vs(Js()));var{default:$s,...Vm}=Gm,Qn=$s!==void 0?$s:Vm;globalThis.immersiveTranslateBrowserAPI=Qn;function Bu(){let e,t="pending",u=new Promise((n,a)=>{e={async resolve(r){await r,t="fulfilled",n(r)},reject(r){t="rejected",a(r)}}});return Object.defineProperty(u,"state",{get:()=>t}),Object.assign(u,e)}var ao=class extends Error{constructor(){super("Deadline"),this.name="DeadlineError"}};function Zn(e,t){let u=Bu(),n=setTimeout(()=>u.reject(new ao),t);return Promise.race([e,u]).finally(()=>clearTimeout(n))}function En(e,t={}){let{signal:u,persistent:n}=t;return u?.aborted?Promise.reject(new DOMException("Delay was aborted.","AbortError")):new Promise((a,r)=>{let i=()=>{clearTimeout(s),r(new DOMException("Delay was aborted.","AbortError"))},s=setTimeout(()=>{u?.removeEventListener("abort",i),a()},e);if(u?.addEventListener("abort",i,{once:!0}),n===!1)try{Deno.unrefTimer(s)}catch(l){if(!(l instanceof ReferenceError))throw l}})}var Xs=class{#e=0;#t=[];#u=[];#n=Bu();add(t){++this.#e,this.#a(t[Symbol.asyncIterator]())}async#a(t){try{let{value:u,done:n}=await t.next();n?--this.#e:this.#t.push({iterator:t,value:u})}catch(u){this.#u.push(u)}this.#n.resolve()}async*iterate(){for(;this.#e>0;){await this.#n;for(let t=0;t<this.#t.length;t++){let{iterator:u,value:n}=this.#t[t];yield n,this.#a(u)}if(this.#u.length){for(let t of this.#u)throw t;this.#u.length=0}this.#t.length=0,this.#n=Bu()}}[Symbol.asyncIterator](){return this.iterate()}};var ft={};Nm(ft,{bgBlack:()=>Tg,bgBlue:()=>kg,bgBrightBlack:()=>Fg,bgBrightBlue:()=>_g,bgBrightCyan:()=>Rg,bgBrightGreen:()=>Bg,bgBrightMagenta:()=>Mg,bgBrightRed:()=>Pg,bgBrightWhite:()=>Og,bgBrightYellow:()=>Lg,bgCyan:()=>Dg,bgGreen:()=>Cg,bgMagenta:()=>Ag,bgRed:()=>wg,bgRgb24:()=>zg,bgRgb8:()=>Ng,bgWhite:()=>Sg,bgYellow:()=>vg,black:()=>rg,blue:()=>lg,bold:()=>Qm,brightBlack:()=>e0,brightBlue:()=>Eg,brightCyan:()=>yg,brightGreen:()=>fg,brightMagenta:()=>bg,brightRed:()=>pg,brightWhite:()=>xg,brightYellow:()=>hg,cyan:()=>dg,dim:()=>Zm,getColorEnabled:()=>Ym,gray:()=>gg,green:()=>ig,hidden:()=>ng,inverse:()=>ug,italic:()=>eg,magenta:()=>cg,red:()=>og,reset:()=>Xm,rgb24:()=>jg,rgb8:()=>Ig,setColorEnabled:()=>Jm,strikethrough:()=>ag,stripColor:()=>Ug,underline:()=>tg,white:()=>mg,yellow:()=>sg});var{Deno:Qs}=globalThis,Zs=typeof Qs?.noColor=="boolean"?Qs.noColor:!0,ro=!Zs;function Jm(e){Zs||(ro=e)}function Ym(){return ro}function Q(e,t){return{open:`\x1B[${e.join(";")}m`,close:`\x1B[${t}m`,regexp:new RegExp(`\\x1b\\[${t}m`,"g")}}function Z(e,t){return ro?`${t.open}${e.replace(t.regexp,t.open)}${t.close}`:e}function Xm(e){return Z(e,Q([0],0))}function Qm(e){return Z(e,Q([1],22))}function Zm(e){return Z(e,Q([2],22))}function eg(e){return Z(e,Q([3],23))}function tg(e){return Z(e,Q([4],24))}function ug(e){return Z(e,Q([7],27))}function ng(e){return Z(e,Q([8],28))}function ag(e){return Z(e,Q([9],29))}function rg(e){return Z(e,Q([30],39))}function og(e){return Z(e,Q([31],39))}function ig(e){return Z(e,Q([32],39))}function sg(e){return Z(e,Q([33],39))}function lg(e){return Z(e,Q([34],39))}function cg(e){return Z(e,Q([35],39))}function dg(e){return Z(e,Q([36],39))}function mg(e){return Z(e,Q([37],39))}function gg(e){return e0(e)}function e0(e){return Z(e,Q([90],39))}function pg(e){return Z(e,Q([91],39))}function fg(e){return Z(e,Q([92],39))}function hg(e){return Z(e,Q([93],39))}function Eg(e){return Z(e,Q([94],39))}function bg(e){return Z(e,Q([95],39))}function yg(e){return Z(e,Q([96],39))}function xg(e){return Z(e,Q([97],39))}function Tg(e){return Z(e,Q([40],49))}function wg(e){return Z(e,Q([41],49))}function Cg(e){return Z(e,Q([42],49))}function vg(e){return Z(e,Q([43],49))}function kg(e){return Z(e,Q([44],49))}function Ag(e){return Z(e,Q([45],49))}function Dg(e){return Z(e,Q([46],49))}function Sg(e){return Z(e,Q([47],49))}function Fg(e){return Z(e,Q([100],49))}function Pg(e){return Z(e,Q([101],49))}function Bg(e){return Z(e,Q([102],49))}function Lg(e){return Z(e,Q([103],49))}function _g(e){return Z(e,Q([104],49))}function Mg(e){return Z(e,Q([105],49))}function Rg(e){return Z(e,Q([106],49))}function Og(e){return Z(e,Q([107],49))}function Wt(e,t=255,u=0){return Math.trunc(Math.max(Math.min(e,t),u))}function Ig(e,t){return Z(e,Q([38,5,Wt(t)],39))}function Ng(e,t){return Z(e,Q([48,5,Wt(t)],49))}function jg(e,t){return typeof t=="number"?Z(e,Q([38,2,t>>16&255,t>>8&255,t&255],39)):Z(e,Q([38,2,Wt(t.r),Wt(t.g),Wt(t.b)],39))}function zg(e,t){return typeof t=="number"?Z(e,Q([48,2,t>>16&255,t>>8&255,t&255],49)):Z(e,Q([48,2,Wt(t.r),Wt(t.g),Wt(t.b)],49))}var Hg=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function Ug(e){return e.replace(Hg,"")}var oo=class extends Error{constructor(t,u){super(`Exceeded max retry count (${u})`),this.name="RetryError",this.cause=t}},Wg={multiplier:2,maxTimeout:6e4,maxAttempts:5,minTimeout:1e3};async function io(e,t){let u={...Wg,...t};if(u.maxTimeout>=0&&u.minTimeout>u.maxTimeout)throw new RangeError("minTimeout is greater than maxTimeout");let n=u.minTimeout,a;for(let r=0;r<u.maxAttempts;r++)try{return await e()}catch(i){await new Promise(o=>setTimeout(o,n)),n*=u.multiplier,n=Math.max(n,u.minTimeout),u.maxTimeout>=0&&(n=Math.min(n,u.maxTimeout)),a=i}throw new oo(a,u.maxAttempts)}var U6=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var ea=globalThis||(typeof window<"u"?window:self),Kg=Object.create,lo=Object.defineProperty,$g=Object.getOwnPropertyDescriptor,Gg=Object.getOwnPropertyNames,Vg=Object.getPrototypeOf,Jg=Object.prototype.hasOwnProperty,Yg=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Xg=(e,t)=>{for(var u in t)lo(e,u,{get:t[u],enumerable:!0})},so=(e,t,u,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Gg(t))!Jg.call(e,a)&&a!==u&&lo(e,a,{get:()=>t[a],enumerable:!(n=$g(t,a))||n.enumerable});return e},Qg=(e,t,u)=>(so(e,t,"default"),u&&so(u,t,"default")),u0=(e,t,u)=>(u=e!=null?Kg(Vg(e)):{},so(t||!e||!e.__esModule?lo(u,"default",{value:e,enumerable:!0}):u,e)),n0=Yg((e,t)=>{var u="Expected a function",n=NaN,a="[object Symbol]",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt,c=typeof ea=="object"&&ea&&ea.Object===Object&&ea,d=typeof self=="object"&&self&&self.Object===Object&&self,m=c||d||Function("return this")(),g=Object.prototype,f=g.toString,x=Math.max,y=Math.min,p=function(){return m.Date.now()};function F(E,w,I){var T,_,L,z,M,de,we=0,Me=!1,j=!1,J=!0;if(typeof E!="function")throw new TypeError(u);w=v(w)||0,C(I)&&(Me=!!I.leading,j="maxWait"in I,L=j?x(v(I.maxWait)||0,w):L,J="trailing"in I?!!I.trailing:J);function be(K){var oe=T,ce=_;return T=_=void 0,we=K,z=E.apply(ce,oe),z}function D(K){return we=K,M=setTimeout(se,w),Me?be(K):z}function G(K){var oe=K-de,ce=K-we,fe=w-oe;return j?y(fe,L-ce):fe}function W(K){var oe=K-de,ce=K-we;return de===void 0||oe>=w||oe<0||j&&ce>=L}function se(){var K=p();if(W(K))return O(K);M=setTimeout(se,G(K))}function O(K){return M=void 0,J&&T?be(K):(T=_=void 0,z)}function le(){M!==void 0&&clearTimeout(M),we=0,T=de=_=M=void 0}function ae(){return M===void 0?z:O(p())}function me(){var K=p(),oe=W(K);if(T=arguments,_=this,de=K,oe){if(M===void 0)return D(de);if(j)return M=setTimeout(se,w),be(de)}return M===void 0&&(M=setTimeout(se,w)),z}return me.cancel=le,me.flush=ae,me}function S(E,w,I){var T=!0,_=!0;if(typeof E!="function")throw new TypeError(u);return C(I)&&(T="leading"in I?!!I.leading:T,_="trailing"in I?!!I.trailing:_),F(E,w,{leading:T,maxWait:w,trailing:_})}function C(E){var w=typeof E;return!!E&&(w=="object"||w=="function")}function B(E){return!!E&&typeof E=="object"}function b(E){return typeof E=="symbol"||B(E)&&f.call(E)==a}function v(E){if(typeof E=="number")return E;if(b(E))return n;if(C(E)){var w=typeof E.valueOf=="function"?E.valueOf():E;E=C(w)?w+"":w}if(typeof E!="string")return E===0?E:+E;E=E.replace(r,"");var I=o.test(E);return I||s.test(E)?l(E.slice(2),I?2:8):i.test(E)?n:+E}t.exports=S}),a0={};Xg(a0,{default:()=>Ve});var Zg=u0(n0());Qg(a0,u0(n0()));var{default:t0,...e3}=Zg,Ve=t0!==void 0?t0:e3;var t3=Object.create,mo=Object.defineProperty,u3=Object.getOwnPropertyDescriptor,n3=Object.getOwnPropertyNames,a3=Object.getPrototypeOf,r3=Object.prototype.hasOwnProperty,o3=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),i3=(e,t)=>{for(var u in t)mo(e,u,{get:t[u],enumerable:!0})},co=(e,t,u,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of n3(t))!r3.call(e,a)&&a!==u&&mo(e,a,{get:()=>t[a],enumerable:!(n=u3(t,a))||n.enumerable});return e},s3=(e,t,u)=>(co(e,t,"default"),u&&co(u,t,"default")),o0=(e,t,u)=>(u=e!=null?t3(a3(e)):{},co(t||!e||!e.__esModule?mo(u,"default",{value:e,enumerable:!0}):u,e)),i0=o3((e,t)=>{(function(u,n){typeof e=="object"&&typeof t=="object"?t.exports=n():typeof define=="function"&&define.amd?define([],n):typeof e=="object"?e.notie=n():u.notie=n()})(e,function(){return function(u){function n(r){if(a[r])return a[r].exports;var i=a[r]={i:r,l:!1,exports:{}};return u[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var a={};return n.m=u,n.c=a,n.i=function(r){return r},n.d=function(r,i,o){n.o(r,i)||Object.defineProperty(r,i,{configurable:!1,enumerable:!0,get:o})},n.n=function(r){var i=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(i,"a",i),i},n.o=function(r,i){return Object.prototype.hasOwnProperty.call(r,i)},n.p="",n(n.s=1)}([function(u,n){u.exports=function(a){return a.webpackPolyfill||(a.deprecate=function(){},a.paths=[],a.children||(a.children=[]),Object.defineProperty(a,"loaded",{enumerable:!0,get:function(){return a.l}}),Object.defineProperty(a,"id",{enumerable:!0,get:function(){return a.i}}),a.webpackPolyfill=1),a}},function(u,n,a){"use strict";(function(r){var i,o,s,l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c};(function(c,d){l(n)==="object"&&l(r)==="object"?r.exports=d():(o=[],i=d,s=typeof i=="function"?i.apply(n,o):i,s!==void 0&&(r.exports=s))})(void 0,function(){return function(c){function d(g){if(m[g])return m[g].exports;var f=m[g]={i:g,l:!1,exports:{}};return c[g].call(f.exports,f,f.exports,d),f.l=!0,f.exports}var m={};return d.m=c,d.c=m,d.i=function(g){return g},d.d=function(g,f,x){d.o(g,f)||Object.defineProperty(g,f,{configurable:!1,enumerable:!0,get:x})},d.n=function(g){var f=g&&g.__esModule?function(){return g.default}:function(){return g};return d.d(f,"a",f),f},d.o=function(g,f){return Object.prototype.hasOwnProperty.call(g,f)},d.p="",d(d.s=0)}([function(c,d,m){function g(D,G){var W={};for(var se in D)G.indexOf(se)>=0||Object.prototype.hasOwnProperty.call(D,se)&&(W[se]=D[se]);return W}Object.defineProperty(d,"__esModule",{value:!0});var f=typeof Symbol=="function"&&l(Symbol.iterator)==="symbol"?function(D){return typeof D>"u"?"undefined":l(D)}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D>"u"?"undefined":l(D)},x=Object.assign||function(D){for(var G=1;G<arguments.length;G++){var W=arguments[G];for(var se in W)Object.prototype.hasOwnProperty.call(W,se)&&(D[se]=W[se])}return D},y={top:"top",bottom:"bottom"},p={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:y.top,force:y.top,confirm:y.top,input:y.top,select:y.bottom,date:y.top}},F=d.setOptions=function(D){p=x({},p,D,{classes:x({},p.classes,D.classes),ids:x({},p.ids,D.ids),positions:x({},p.positions,D.positions)})},S=function(){return new Promise(function(D){return setTimeout(D,0)})},C=function(D){return new Promise(function(G){return setTimeout(G,1e3*D)})},B=function(){document.activeElement&&document.activeElement.blur()},b=function(){var D="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(G){var W=16*Math.random()|0,se=G==="x"?W:3&W|8;return se.toString(16)});return"notie-"+D},v={1:p.classes.backgroundSuccess,success:p.classes.backgroundSuccess,2:p.classes.backgroundWarning,warning:p.classes.backgroundWarning,3:p.classes.backgroundError,error:p.classes.backgroundError,4:p.classes.backgroundInfo,info:p.classes.backgroundInfo,5:p.classes.backgroundNeutral,neutral:p.classes.backgroundNeutral},E=function(){return p.transitionSelector+" "+p.transitionDuration+"s "+p.transitionCurve},w=function(D){return D.keyCode===13},I=function(D){return D.keyCode===27},T=function(D,G){D.classList.add(p.classes.container),D.style[G]="-10000px",document.body.appendChild(D),D.style[G]="-"+D.offsetHeight+"px",D.listener&&window.addEventListener("keydown",D.listener),S().then(function(){D.style.transition=E(),D.style[G]=0})},_=function(D,G){var W=document.getElementById(D);W&&(W.style[G]="-"+W.offsetHeight+"px",W.listener&&window.removeEventListener("keydown",W.listener),C(p.transitionDuration).then(function(){W.parentNode&&W.parentNode.removeChild(W)}))},L=function(D,G){var W=document.createElement("div");W.id=p.ids.overlay,W.classList.add(p.classes.overlay),W.classList.add(p.classes.backgroundOverlay),W.style.opacity=0,D&&p.overlayClickDismiss&&(W.onclick=function(){_(D.id,G),z()}),document.body.appendChild(W),S().then(function(){W.style.transition=E(),W.style.opacity=p.overlayOpacity})},z=function(){var D=document.getElementById(p.ids.overlay);D.style.opacity=0,C(p.transitionDuration).then(function(){D.parentNode&&D.parentNode.removeChild(D)})},M=d.hideAlerts=function(D){var G=document.getElementsByClassName(p.classes.alert);if(G.length){for(var W=0;W<G.length;W++){var se=G[W];_(se.id,se.position)}D&&C(p.transitionDuration).then(function(){return D()})}},de=d.alert=function(D){var G=D.type,W=G===void 0?4:G,se=D.text,O=D.time,le=O===void 0?p.alertTime:O,ae=D.stay,me=ae!==void 0&&ae,K=D.position,oe=K===void 0?p.positions.alert||oe.top:K;B(),M();var ce=document.createElement("div"),fe=b();ce.id=fe,ce.position=oe,ce.classList.add(p.classes.textbox),ce.classList.add(v[W]),ce.classList.add(p.classes.alert),ce.innerHTML='<div class="'+p.classes.textboxInner+'">'+se+"</div>",ce.onclick=function(){return _(fe,oe)},ce.listener=function(V){(w(V)||I(V))&&M()},T(ce,oe),le&&le<1&&(le=1),!me&&le&&C(le).then(function(){return _(fe,oe)})},we=d.force=function(D,G){var W=D.type,se=W===void 0?5:W,O=D.text,le=D.buttonText,ae=le===void 0?"OK":le,me=D.callback,K=D.position,oe=K===void 0?p.positions.force||oe.top:K;B(),M();var ce=document.createElement("div"),fe=b();ce.id=fe;var V=document.createElement("div");V.classList.add(p.classes.textbox),V.classList.add(p.classes.backgroundInfo),V.innerHTML='<div class="'+p.classes.textboxInner+'">'+O+"</div>";var ge=document.createElement("div");ge.classList.add(p.classes.button),ge.classList.add(v[se]),ge.innerHTML=ae,ge.onclick=function(){_(fe,oe),z(),me?me():G&&G()},ce.appendChild(V),ce.appendChild(ge),ce.listener=function(Re){w(Re)&&ge.click()},T(ce,oe),L()},Me=d.confirm=function(D,G,W){var se=D.text,O=D.submitText,le=O===void 0?"Yes":O,ae=D.cancelText,me=ae===void 0?"Cancel":ae,K=D.submitCallback,oe=D.cancelCallback,ce=D.position,fe=ce===void 0?p.positions.confirm||fe.top:ce;B(),M();var V=document.createElement("div"),ge=b();V.id=ge;var Re=document.createElement("div");Re.classList.add(p.classes.textbox),Re.classList.add(p.classes.backgroundInfo),Re.innerHTML='<div class="'+p.classes.textboxInner+'">'+se+"</div>";var xe=document.createElement("div");xe.classList.add(p.classes.button),xe.classList.add(p.classes.elementHalf),xe.classList.add(p.classes.backgroundSuccess),xe.innerHTML=le,xe.onclick=function(){_(ge,fe),z(),K?K():G&&G()};var $=document.createElement("div");$.classList.add(p.classes.button),$.classList.add(p.classes.elementHalf),$.classList.add(p.classes.backgroundError),$.innerHTML=me,$.onclick=function(){_(ge,fe),z(),oe?oe():W&&W()},V.appendChild(Re),V.appendChild(xe),V.appendChild($),V.listener=function(Ne){w(Ne)?xe.click():I(Ne)&&$.click()},T(V,fe),L(V,fe)},j=function(D,G,W){var se=D.text,O=D.submitText,le=O===void 0?"Submit":O,ae=D.cancelText,me=ae===void 0?"Cancel":ae,K=D.submitCallback,oe=D.cancelCallback,ce=D.position,fe=ce===void 0?p.positions.input||fe.top:ce,V=g(D,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);B(),M();var ge=document.createElement("div"),Re=b();ge.id=Re;var xe=document.createElement("div");xe.classList.add(p.classes.textbox),xe.classList.add(p.classes.backgroundInfo),xe.innerHTML='<div class="'+p.classes.textboxInner+'">'+se+"</div>";var $=document.createElement("input");$.classList.add(p.classes.inputField),$.setAttribute("autocapitalize",V.autocapitalize||"none"),$.setAttribute("autocomplete",V.autocomplete||"off"),$.setAttribute("autocorrect",V.autocorrect||"off"),$.setAttribute("autofocus",V.autofocus||"true"),$.setAttribute("inputmode",V.inputmode||"verbatim"),$.setAttribute("max",V.max||""),$.setAttribute("maxlength",V.maxlength||""),$.setAttribute("min",V.min||""),$.setAttribute("minlength",V.minlength||""),$.setAttribute("placeholder",V.placeholder||""),$.setAttribute("spellcheck",V.spellcheck||"default"),$.setAttribute("step",V.step||"any"),$.setAttribute("type",V.type||"text"),$.value=V.value||"",V.allowed&&($.oninput=function(){var Te=void 0;if(Array.isArray(V.allowed)){for(var qe="",ct=V.allowed,xt=0;xt<ct.length;xt++)ct[xt]==="an"?qe+="0-9a-zA-Z":ct[xt]==="a"?qe+="a-zA-Z":ct[xt]==="n"&&(qe+="0-9"),ct[xt]==="s"&&(qe+=" ");Te=new RegExp("[^"+qe+"]","g")}else f(V.allowed)==="object"&&(Te=V.allowed);$.value=$.value.replace(Te,"")});var Ne=document.createElement("div");Ne.classList.add(p.classes.button),Ne.classList.add(p.classes.elementHalf),Ne.classList.add(p.classes.backgroundSuccess),Ne.innerHTML=le,Ne.onclick=function(){_(Re,fe),z(),K?K($.value):G&&G($.value)};var ot=document.createElement("div");ot.classList.add(p.classes.button),ot.classList.add(p.classes.elementHalf),ot.classList.add(p.classes.backgroundError),ot.innerHTML=me,ot.onclick=function(){_(Re,fe),z(),oe?oe($.value):W&&W($.value)},ge.appendChild(xe),ge.appendChild($),ge.appendChild(Ne),ge.appendChild(ot),ge.listener=function(Te){w(Te)?Ne.click():I(Te)&&ot.click()},T(ge,fe),$.focus(),L(ge,fe)};d.input=j;var J=d.select=function(D,G){var W=D.text,se=D.cancelText,O=se===void 0?"Cancel":se,le=D.cancelCallback,ae=D.choices,me=D.position,K=me===void 0?p.positions.select||K.top:me;B(),M();var oe=document.createElement("div"),ce=b();oe.id=ce;var fe=document.createElement("div");fe.classList.add(p.classes.textbox),fe.classList.add(p.classes.backgroundInfo),fe.innerHTML='<div class="'+p.classes.textboxInner+'">'+W+"</div>",oe.appendChild(fe),ae.forEach(function(ge,Re){var xe=ge.type,$=xe===void 0?1:xe,Ne=ge.text,ot=ge.handler,Te=document.createElement("div");Te.classList.add(v[$]),Te.classList.add(p.classes.button),Te.classList.add(p.classes.selectChoice);var qe=ae[Re+1];qe&&!qe.type&&(qe.type=1),qe&&qe.type===$&&Te.classList.add(p.classes.selectChoiceRepeated),Te.innerHTML=Ne,Te.onclick=function(){_(ce,K),z(),ot()},oe.appendChild(Te)});var V=document.createElement("div");V.classList.add(p.classes.backgroundNeutral),V.classList.add(p.classes.button),V.innerHTML=O,V.onclick=function(){_(ce,K),z(),le?le():G&&G()},oe.appendChild(V),oe.listener=function(ge){I(ge)&&V.click()},T(oe,K),L(oe,K)},be=d.date=function(D,G,W){var se=D.value,O=se===void 0?new Date:se,le=D.submitText,ae=le===void 0?"OK":le,me=D.cancelText,K=me===void 0?"Cancel":me,oe=D.submitCallback,ce=D.cancelCallback,fe=D.position,V=fe===void 0?p.positions.date||V.top:fe;B(),M();var ge="&#9662",Re=document.createElement("div"),xe=document.createElement("div"),$=document.createElement("div"),Ne=function(Se){Re.innerHTML=p.dateMonths[Se.getMonth()],xe.innerHTML=Se.getDate(),$.innerHTML=Se.getFullYear()},ot=function(Se){var St=new Date(O.getFullYear(),O.getMonth()+1,0).getDate(),Pu=Se.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(Pu)>St&&(Pu=St.toString()),Se.target.textContent=Pu,Number(Pu)<1&&(Pu="1"),O.setDate(Number(Pu))},Te=function(Se){var St=Se.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);Se.target.textContent=St,O.setFullYear(Number(St))},qe=function(Se){Ne(O)},ct=function(Se){var St=new Date(O.getFullYear(),O.getMonth()+Se+1,0).getDate();O.getDate()>St&&O.setDate(St),O.setMonth(O.getMonth()+Se),Ne(O)},xt=function(Se){O.setDate(O.getDate()+Se),Ne(O)},P=function(Se){var St=O.getFullYear()+Se;St<0?O.setFullYear(0):O.setFullYear(O.getFullYear()+Se),Ne(O)},Y=document.createElement("div"),Ce=b();Y.id=Ce;var pe=document.createElement("div");pe.classList.add(p.classes.backgroundInfo);var ie=document.createElement("div");ie.classList.add(p.classes.dateSelectorInner);var dt=document.createElement("div");dt.classList.add(p.classes.button),dt.classList.add(p.classes.elementThird),dt.classList.add(p.classes.dateSelectorUp),dt.innerHTML=ge;var it=document.createElement("div");it.classList.add(p.classes.button),it.classList.add(p.classes.elementThird),it.classList.add(p.classes.dateSelectorUp),it.innerHTML=ge;var Ke=document.createElement("div");Ke.classList.add(p.classes.button),Ke.classList.add(p.classes.elementThird),Ke.classList.add(p.classes.dateSelectorUp),Ke.innerHTML=ge,Re.classList.add(p.classes.element),Re.classList.add(p.classes.elementThird),Re.innerHTML=p.dateMonths[O.getMonth()],xe.classList.add(p.classes.element),xe.classList.add(p.classes.elementThird),xe.setAttribute("contentEditable",!0),xe.addEventListener("input",ot),xe.addEventListener("blur",qe),xe.innerHTML=O.getDate(),$.classList.add(p.classes.element),$.classList.add(p.classes.elementThird),$.setAttribute("contentEditable",!0),$.addEventListener("input",Te),$.addEventListener("blur",qe),$.innerHTML=O.getFullYear();var su=document.createElement("div");su.classList.add(p.classes.button),su.classList.add(p.classes.elementThird),su.innerHTML=ge;var fn=document.createElement("div");fn.classList.add(p.classes.button),fn.classList.add(p.classes.elementThird),fn.innerHTML=ge;var hn=document.createElement("div");hn.classList.add(p.classes.button),hn.classList.add(p.classes.elementThird),hn.innerHTML=ge,dt.onclick=function(){return ct(1)},it.onclick=function(){return xt(1)},Ke.onclick=function(){return P(1)},su.onclick=function(){return ct(-1)},fn.onclick=function(){return xt(-1)},hn.onclick=function(){return P(-1)};var lu=document.createElement("div");lu.classList.add(p.classes.button),lu.classList.add(p.classes.elementHalf),lu.classList.add(p.classes.backgroundSuccess),lu.innerHTML=ae,lu.onclick=function(){_(Ce,V),z(),oe?oe(O):G&&G(O)};var cu=document.createElement("div");cu.classList.add(p.classes.button),cu.classList.add(p.classes.elementHalf),cu.classList.add(p.classes.backgroundError),cu.innerHTML=K,cu.onclick=function(){_(Ce,V),z(),ce?ce(O):W&&W(O)},ie.appendChild(dt),ie.appendChild(it),ie.appendChild(Ke),ie.appendChild(Re),ie.appendChild(xe),ie.appendChild($),ie.appendChild(su),ie.appendChild(fn),ie.appendChild(hn),pe.appendChild(ie),Y.appendChild(pe),Y.appendChild(lu),Y.appendChild(cu),Y.listener=function(Se){w(Se)?lu.click():I(Se)&&cu.click()},T(Y,V),L(Y,V)};d.default={alert:de,force:we,confirm:Me,input:j,select:J,date:be,setOptions:F,hideAlerts:M}}])})}).call(n,a(0)(u))}])})}),s0={};i3(s0,{default:()=>ta});var l3=o0(i0());s3(s0,o0(i0()));var{default:r0,...c3}=l3,ta=r0!==void 0?r0:c3;var iE=Symbol("clean");var sE=Symbol();function go(e,t){if(typeof e=="string")return t(e);{let u={};for(let n in e)u[n]=go(e[n],t);return u}}function c0(e){return t=>{if(t.transform){let u=t.transform;return t=t.input,{input:t,transform(n,a,r){let i=e(n,a,...r);return(...o)=>u(n,i,o)}}}else return{input:t,transform(u,n,a){return e(u,n,...a)}}}}var EE=c0((e,t,u)=>go(t,n=>{for(let a in u)n=n.replace(new RegExp(`{${a}}`,"g"),u[a]);return n})),bE=c0((e,t,u)=>{let n=new Intl.PluralRules(e).select(u);return n in t||(n="many"),go(t[n],a=>a.replace(/{count}/g,u))});var po=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function fo(e,t,u,n){e.addEventListener?e.addEventListener(t,u,n):e.attachEvent&&e.attachEvent("on".concat(t),function(){u(window.event)})}function f0(e,t){for(var u=t.slice(0,t.length-1),n=0;n<u.length;n++)u[n]=e[u[n].toLowerCase()];return u}function h0(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),u=t.lastIndexOf("");u>=0;)t[u-1]+=",",t.splice(u,1),u=t.lastIndexOf("");return t}function g3(e,t){for(var u=e.length>=t.length?e:t,n=e.length>=t.length?t:e,a=!0,r=0;r<u.length;r++)n.indexOf(u[r])===-1&&(a=!1);return a}var yn={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":po?173:189,"=":po?61:187,";":po?59:186,"'":222,"[":219,"]":221,"\\":220},Ft={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},bo={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},$e={16:!1,18:!1,17:!1,91:!1},Oe={};for(bn=1;bn<20;bn++)yn["f".concat(bn)]=111+bn;var bn,ve=[],d0=!1,E0="all",b0=[],na=function(e){return yn[e.toLowerCase()]||Ft[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},p3=function(e){return Object.keys(yn).find(function(t){return yn[t]===e})},f3=function(e){return Object.keys(Ft).find(function(t){return Ft[t]===e})};function y0(e){E0=e||"all"}function xn(){return E0||"all"}function h3(){return ve.slice(0)}function E3(){return ve.map(function(e){return p3(e)||f3(e)||String.fromCharCode(e)})}function b3(e){var t=e.target||e.srcElement,u=t.tagName,n=!0;return(t.isContentEditable||(u==="INPUT"||u==="TEXTAREA"||u==="SELECT")&&!t.readOnly)&&(n=!1),n}function y3(e){return typeof e=="string"&&(e=na(e)),ve.indexOf(e)!==-1}function x3(e,t){var u,n;e||(e=xn());for(var a in Oe)if(Object.prototype.hasOwnProperty.call(Oe,a))for(u=Oe[a],n=0;n<u.length;)u[n].scope===e?u.splice(n,1):n++;xn()===e&&y0(t||"all")}function T3(e){var t=e.keyCode||e.which||e.charCode,u=ve.indexOf(t);if(u>=0&&ve.splice(u,1),e.key&&e.key.toLowerCase()==="meta"&&ve.splice(0,ve.length),(t===93||t===224)&&(t=91),t in $e){$e[t]=!1;for(var n in Ft)Ft[n]===t&&(De[n]=!1)}}function w3(e){if(typeof e>"u")Object.keys(Oe).forEach(function(i){return delete Oe[i]});else if(Array.isArray(e))e.forEach(function(i){i.key&&ho(i)});else if(typeof e=="object")e.key&&ho(e);else if(typeof e=="string"){for(var t=arguments.length,u=new Array(t>1?t-1:0),n=1;n<t;n++)u[n-1]=arguments[n];var a=u[0],r=u[1];typeof a=="function"&&(r=a,a=""),ho({key:e,scope:a,method:r,splitKey:"+"})}}var ho=function(e){var t=e.key,u=e.scope,n=e.method,a=e.splitKey,r=a===void 0?"+":a,i=h0(t);i.forEach(function(o){var s=o.split(r),l=s.length,c=s[l-1],d=c==="*"?"*":na(c);if(Oe[d]){u||(u=xn());var m=l>1?f0(Ft,s):[];Oe[d]=Oe[d].filter(function(g){var f=n?g.method===n:!0;return!(f&&g.scope===u&&g3(g.mods,m))})}})};function m0(e,t,u,n){if(t.element===n){var a;if(t.scope===u||t.scope==="all"){a=t.mods.length>0;for(var r in $e)Object.prototype.hasOwnProperty.call($e,r)&&(!$e[r]&&t.mods.indexOf(+r)>-1||$e[r]&&t.mods.indexOf(+r)===-1)&&(a=!1);(t.mods.length===0&&!$e[16]&&!$e[18]&&!$e[17]&&!$e[91]||a||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function g0(e,t){var u=Oe["*"],n=e.keyCode||e.which||e.charCode;if(De.filter.call(this,e)){if((n===93||n===224)&&(n=91),ve.indexOf(n)===-1&&n!==229&&ve.push(n),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(f){var x=bo[f];e[f]&&ve.indexOf(x)===-1?ve.push(x):!e[f]&&ve.indexOf(x)>-1?ve.splice(ve.indexOf(x),1):f==="metaKey"&&e[f]&&ve.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(ve=ve.slice(ve.indexOf(x))))}),n in $e){$e[n]=!0;for(var a in Ft)Ft[a]===n&&(De[a]=!0);if(!u)return}for(var r in $e)Object.prototype.hasOwnProperty.call($e,r)&&($e[r]=e[bo[r]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(ve.indexOf(17)===-1&&ve.push(17),ve.indexOf(18)===-1&&ve.push(18),$e[17]=!0,$e[18]=!0);var i=xn();if(u)for(var o=0;o<u.length;o++)u[o].scope===i&&(e.type==="keydown"&&u[o].keydown||e.type==="keyup"&&u[o].keyup)&&m0(e,u[o],i,t);if(n in Oe){for(var s=0;s<Oe[n].length;s++)if((e.type==="keydown"&&Oe[n][s].keydown||e.type==="keyup"&&Oe[n][s].keyup)&&Oe[n][s].key){for(var l=Oe[n][s],c=l.splitKey,d=l.key.split(c),m=[],g=0;g<d.length;g++)m.push(na(d[g]));m.sort().join("")===ve.sort().join("")&&m0(e,l,i,t)}}}}function C3(e){return b0.indexOf(e)>-1}function De(e,t,u){ve=[];var n=h0(e),a=[],r="all",i=document,o=0,s=!1,l=!0,c="+",d=!1;for(u===void 0&&typeof t=="function"&&(u=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(r=t.scope),t.element&&(i=t.element),t.keyup&&(s=t.keyup),t.keydown!==void 0&&(l=t.keydown),t.capture!==void 0&&(d=t.capture),typeof t.splitKey=="string"&&(c=t.splitKey)),typeof t=="string"&&(r=t);o<n.length;o++)e=n[o].split(c),a=[],e.length>1&&(a=f0(Ft,e)),e=e[e.length-1],e=e==="*"?"*":na(e),e in Oe||(Oe[e]=[]),Oe[e].push({keyup:s,keydown:l,scope:r,mods:a,shortcut:n[o],method:u,key:n[o],splitKey:c,element:i});typeof i<"u"&&!C3(i)&&window&&(b0.push(i),fo(i,"keydown",function(m){g0(m,i)},d),d0||(d0=!0,fo(window,"focus",function(){ve=[]},d)),fo(i,"keyup",function(m){g0(m,i),T3(m)},d))}function v3(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(Oe).forEach(function(u){var n=Oe[u].filter(function(a){return a.scope===t&&a.shortcut===e});n.forEach(function(a){a&&a.method&&a.method()})})}var Eo={getPressedKeyString:E3,setScope:y0,getScope:xn,deleteScope:x3,getPressedKeyCodes:h3,isPressed:y3,filter:b3,trigger:v3,unbind:w3,keyMap:yn,modifier:Ft,modifierMap:bo};for(ua in Eo)Object.prototype.hasOwnProperty.call(Eo,ua)&&(De[ua]=Eo[ua]);var ua;typeof document<"u"&&(p0=window.hotkeys,De.noConflict=function(e){return e&&window.hotkeys===De&&(window.hotkeys=p0),De},window.hotkeys=De);var p0;var k3=class{#e=performance.now();reset(){this.#e=performance.now()}stop(e){let t=performance.now(),u=Math.round(t-this.#e);this.#e=t}},A3=class{#e=1;get level(){return this.#e}setLevel(e){switch(e){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...e){this.#e<=0}v(...e){this.#e<=0}info(...e){this.#e<=1}l(...e){this.#e<=1}warn(...e){this.#e<=2}error(...e){this.#e<=3}fatal(...e){this.#e<=4}timing(){return this.level===0?new k3:{reset:()=>{},stop:()=>{}}}},yo=new A3,D3="poegempjloogba",S3="ension://",F3="me-";function Tn(e){if(!e)return[!1,!0];let t=new Date(e).getTime(),u=new Date().getTime(),n=t-u<15e3;return[t-u>3e3,n]}function k0(e){return e?e.PROD==="1":!0}function A0(e){return e?e.MOCK==="1":!1}function D0(e){return new Promise((t,u)=>{setTimeout(()=>{t()},e)})}var P3="rome-ext";function B3(e,t){return t?e+(t-e%t):e}function L3(e,t){return e.split(t).length-1}function _3(e){let t=Date.now(),u=1;for(let n of e)u+=L3(n,"i");return B3(t,u)}function M3(e,t){return Math.floor(Math.random()*(t-e+1))+e}var R3="extension",O3="chro";function I3(){return M3(1e6,1e8)}var x0="BrowserExt";function N3(e){return JSON.stringify(e).replace('"method":"',()=>{let t=e;return(t.id+3)%13===0||(t.id+5)%29===0?'"method" : "':'"method": "'})}var T0="DeepL",w0="ension",j3="ch"+P3+S3+"cofdb"+D3+"gkncekinflcnj";function S0(e){let{contentType:t,userAgent:u,url:n,authorization:a,clientVersion:r}=e,i=new URL(n),o=new Headers;if(o.append("authority",i.hostname),o.append("accept","*/*"),o.append("accept-language","ja"),a&&o.append("authorization",`Bearer ${a}`),o.append("cache-control","no-cache"),t?o.append("content-type",t):o.append("content-type","application/json; charset=utf-8"),o.append("origin",j3),o.append("pragma","no-cache"),o.append("referer","https://www.deepl.com/"),o.append("sec-fetch-dest","empty"),o.append("sec-fetch-mode","cors"),o.append("sec-fetch-site","none"),u)o.append("user-agent",u);else if(globalThis&&globalThis.navigator&&globalThis.navigator.userAgent){let l=globalThis.navigator.userAgent;o.append("user-agent",`${T0}${x0}${w0}/${r||"1.1.1"} ${l}`)}else o.append("user-agent",`${T0}${x0}${w0}/${r||"1.1.1"} Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.78`);let s={};for(let[l,c]of o.entries())s[l]=c;return s}function z3(e){let t="1.1.1",{texts:u,target_lang:n,source_lang:a}=e,r={jsonrpc:"2.0",method:"LMT_handle_texts",params:{texts:u.map(o=>({text:o})),html:"enabled",lang:{target_lang:n,source_lang_user_selected:a||"auto",preference:{weight:{BG:.00119,CS:.04360000000000001,DA:.007090000000000001,DE:.02142,EL:.00287,EN:4.79277,ES:.029710000000000004,ET:.007300000000000001,FI:.013850000000000001,FR:.04227,HU:.019000000000000003,ID:.00423,IT:.03592,JA:.00453,LT:.031700000000000006,LV:.0027,NL:.02375,PL:.044520000000000004,PT:.017320000000000002,RO:.009040000000000001,RU:.00234,SK:.04977,SL:.00691,SV:.0049700000000000005,TR:.01076,UK:.00201,ZH:.004880000000000001}}},timestamp:_3(u)},id:I3()},i=S0({url:"https://api.deepl.com/jsonrpc",clientVersion:t,authorization:e.authorization});return{url:`https://api.deepl.com/jsonrpc?client=${O3+F3+R3},${t}`,headers:i,body:N3(r),method:"POST"}}function H3(e){let t=e.split(".");if(t.length<=1)throw new Error("invlaid token");let u=t[1];if(!u)throw new Error("invalid base64 url token");let n=u.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(globalThis.atob(n).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join("")),r=JSON.parse(a),i=new Date(r.exp*1e3);return{accessToken:e,accessTokenExpiresAt:i.toISOString()}}var du={},mu={};async function C0(e,t){if(!e)throw new Error("auth key is required");let{state:u}=t,{refreshToken:n,refreshTokenExpiresAt:a,refreshTokenChecksAt:r}=u,[i,o]=Tn(a);o||(o=Tn(r)[1]);let s={refreshToken:n,refreshTokenExpiresAt:a,refreshTokenChecksAt:r||new Date().toISOString()};i||(s=await aa(e,t));let[l,c]=Tn(s.refreshTokenExpiresAt);o=c,o||(o=Tn(s.refreshTokenChecksAt)[1]);let d=s.refreshToken;if(du[d])return new Promise((m,g)=>{du[d].push((f,x)=>{f?g(f):m(x)})});du[d]=[];try{let m=await U3(d,t.onFetch),g={state:{...u,...s,...m},shouldUpdateRefreshToken:o};return du[d].forEach(f=>{f(null,g)}),delete du[d],g}catch(m){throw du[d].forEach(g=>{g(m)}),delete du[d],m}}async function aa(e,t){if(!e)throw new Error("auth key is required");let{refreshTokenEndpoint:u,onFetch:n}=t;if(mu[e])return new Promise((a,r)=>{mu[e].push((i,o)=>{i?r(i):a(o)})});try{mu[e]=[];let a=new URLSearchParams({grant_type:"auth_key",auth_key:e}),r=new URL("/refresh_token?"+a.toString(),u),i=await n(r.toString()),o=new Date().getTime(),s=o+i.refresh_token_expires_in*1e3,l=o+i.refresh_token_checks_in*1e3,c={refreshToken:i.refresh_token,refreshTokenExpiresAt:new Date(s).toISOString(),refreshTokenChecksAt:new Date(l).toISOString()};return mu[e].forEach(d=>{d(null,c)}),delete mu[e],c}catch(a){throw mu[e].forEach(r=>{r(a)}),delete mu[e],a}}async function U3(e,t){if(!e)throw new Error("refreshToken is required");let u=k0(),n=A0();if(!u&&!n){await D0(400);let o=new Date;return{accessToken:"test",accessTokenExpiresAt:new Date(o.getTime()+1e3*5).toISOString()}}let a="https://w.deepl.com/oidc/token",r=await t(a,{headers:S0({url:a,contentType:"application/x-www-form-urlencoded"}),body:`grant_type=refresh_token&refresh_token=${e}`,method:"POST"}),i=H3(r.access_token);if(r.expires_in){let o=new Date,s=new Date(o.getTime()+r.expires_in*1e3);i.accessTokenExpiresAt=s.toISOString()}return i}async function v0(e,t,u){if(!t)throw new Error("body is required");let n=new URLSearchParams(t),a=n.getAll("text");if(a.length<1)throw new Error("No text to translate");if(W3(a)>5e3)throw new Error("text too long, the max length is 5000 characters.");let r=n.get("target_lang");if(!r)throw new Error("No target language");let i=n.get("source_lang"),o={...z3({texts:a,authorization:e,target_lang:r,source_lang:i}),responseType:"raw"},s=k0(),l=A0();if(!s&&!l)return await D0(50),{translations:a.map(g=>({text:"mock: "+g,detected_source_language:"EN"}))};let c=await u(o.url,o),d=JSON.parse(c.body),m=[];if(d.result&&d.result.texts)m=d.result.texts.map(g=>({text:g.text,detected_source_language:d.result.lang}));else throw new Error("No response from deepl api");return{translations:m}}function W3(e){let t=0;for(let u of e)t+=u.length;return t}async function q3(e){e.body;let{url:t,responseType:u,...n}=e;u||(u="json"),n={redirect:"follow",...n};let a=await K3(t,n);if(a.ok&&a.status>=200&&a.status<400)if(u==="json"){let r=await a.json();return yo.debug("response",JSON.stringify(r,null,2)),r}else{if(u==="text")return await a.text();if(u==="raw"){let r=await a.text(),i=Object.fromEntries([...a.headers.entries()]),o=a.url;return{body:r,headers:i,status:a.status,statusText:a.statusText,url:o}}}else{let r;try{r=await a.text()}catch(i){yo.error("parse response failed",i)}throw new Error(a.status+": "+a.statusText||" "+r||"")}}async function K3(e,t){let u=15e3;t&&t.timeout&&(u=t.timeout);let n=new AbortController,a=setTimeout(()=>n.abort(),u),r=await fetch(e,{...t,signal:n.signal});return clearTimeout(a),r}var ra=class{constructor(e,t){this.state={},this.isStateChanged=!1,this.onFetch=(u,n)=>q3({url:u,...n}),this.refreshTokenEndpoint="https://api.immersivetranslate.com",this.authKey=e,t=t||{},t.state&&(this.state=t.state),t.onFetch&&(this.onFetch=t.onFetch),t.refreshTokenEndpoint&&(this.refreshTokenEndpoint=t.refreshTokenEndpoint),t.onStateChange&&(this.onStateChange=t.onStateChange)}getState(){return this.state}getIsStateChanged(){let e=this.isStateChanged;return this.isStateChanged=!1,e}setState(e){this.state=e,this.isStateChanged=!0,this.onStateChange&&this.onStateChange(e)}async translateText(e,t,u){await this.updateToken();let n=new URLSearchParams;(Array.isArray(e)?e:[e]).forEach((r,i)=>{n.append("text",r)}),t&&n.append("source_lang",t),u&&n.append("target_lang",u);let a=await v0(this.state.accessToken,n.toString(),this.onFetch);if(a&&a.translations&&a.translations.length>0)return Array.isArray(e)?a.translations.map(r=>({text:r.text,detectedSourceLanguage:r.detected_source_language})):{text:a.translations[0].text,detectedSourceLanguage:a.translations[0].detected_source_language};throw new Error("No translation result")}async translateApi(e){return await this.updateToken(),await v0(this.state.accessToken,e,this.onFetch)}async forceUpdateRefreshToken(){await aa(this.authKey,{state:this.state,onFetch:this.onFetch,refreshTokenEndpoint:this.refreshTokenEndpoint}).then(e=>{this.setState({...this.state,...e})})}onFetchTokenError(e){throw yo.error("onFetchTokenError",e),e&&e.message&&(e.message.indexOf("401")>-1||e.message.indexOf("400")>-1)&&this.setState({}),e}async updateToken(){let{accessTokenExpiresAt:e}=this.state,[t,u]=Tn(e);if(t)u&&C0(this.authKey,{state:this.state,onFetch:this.onFetch,refreshTokenEndpoint:this.refreshTokenEndpoint}).then(({state:n,shouldUpdateRefreshToken:a})=>{this.setState({...this.state,...n}),a&&aa(this.authKey,{state:this.state,onFetch:this.onFetch,refreshTokenEndpoint:this.refreshTokenEndpoint}).then(r=>{this.setState({...this.state,...r})})}).catch(n=>{this.onFetchTokenError(n)});else try{let{state:n,shouldUpdateRefreshToken:a}=await C0(this.authKey,{state:this.state,onFetch:this.onFetch,refreshTokenEndpoint:this.refreshTokenEndpoint});this.setState(n),a&&aa(this.authKey,{state:this.state,onFetch:this.onFetch,refreshTokenEndpoint:this.refreshTokenEndpoint}).then(r=>{this.setState({...this.state,...r})}).catch(r=>{})}catch(n){this.onFetchTokenError(n)}}};var $3={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},P0={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},Fe={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},Ze={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},qt={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"},k=class{static getFirstMatch(e,t){let u=t.match(e);return u&&u.length>0&&u[1]||""}static getSecondMatch(e,t){let u=t.match(e);return u&&u.length>1&&u[2]||""}static matchAndReturnConst(e,t,u){if(e.test(t))return u}static getWindowsVersionName(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(e){let t=e.split(".").splice(0,2).map(u=>parseInt(u,10)||0);if(t.push(0),t[0]===10)switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(e){let t=e.split(".").splice(0,2).map(u=>parseInt(u,10)||0);if(t.push(0),!(t[0]===1&&t[1]<5)){if(t[0]===1&&t[1]<6)return"Cupcake";if(t[0]===1&&t[1]>=6)return"Donut";if(t[0]===2&&t[1]<2)return"Eclair";if(t[0]===2&&t[1]===2)return"Froyo";if(t[0]===2&&t[1]>2)return"Gingerbread";if(t[0]===3)return"Honeycomb";if(t[0]===4&&t[1]<1)return"Ice Cream Sandwich";if(t[0]===4&&t[1]<4)return"Jelly Bean";if(t[0]===4&&t[1]>=4)return"KitKat";if(t[0]===5)return"Lollipop";if(t[0]===6)return"Marshmallow";if(t[0]===7)return"Nougat";if(t[0]===8)return"Oreo";if(t[0]===9)return"Pie"}}static getVersionPrecision(e){return e.split(".").length}static compareVersions(e,t,u=!1){let n=k.getVersionPrecision(e),a=k.getVersionPrecision(t),r=Math.max(n,a),i=0,o=k.map([e,t],s=>{let l=r-k.getVersionPrecision(s),c=s+new Array(l+1).join(".0");return k.map(c.split("."),d=>new Array(20-d.length).join("0")+d).reverse()});for(u&&(i=r-Math.min(n,a)),r-=1;r>=i;){if(o[0][r]>o[1][r])return 1;if(o[0][r]===o[1][r]){if(r===i)return 0;r-=1}else if(o[0][r]<o[1][r])return-1}}static map(e,t){let u=[],n;if(Array.prototype.map)return Array.prototype.map.call(e,t);for(n=0;n<e.length;n+=1)u.push(t(e[n]));return u}static find(e,t){let u,n;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(u=0,n=e.length;u<n;u+=1){let a=e[u];if(t(a,u))return a}}static assign(e,...t){let u=e,n,a;if(Object.assign)return Object.assign(e,...t);for(n=0,a=t.length;n<a;n+=1){let r=t[n];typeof r=="object"&&r!==null&&Object.keys(r).forEach(i=>{u[i]=r[i]})}return e}static getBrowserAlias(e){return $3[e]}static getBrowserTypeByAlias(e){return P0[e]||""}},ye=/version\/(\d+(\.?_?\d+)+)/i,G3=[{test:[/googlebot/i],describe(e){let t={name:"Googlebot"},u=k.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||k.getFirstMatch(ye,e);return u&&(t.version=u),t}},{test:[/opera/i],describe(e){let t={name:"Opera"},u=k.getFirstMatch(ye,e)||k.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/opr\/|opios/i],describe(e){let t={name:"Opera"},u=k.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||k.getFirstMatch(ye,e);return u&&(t.version=u),t}},{test:[/SamsungBrowser/i],describe(e){let t={name:"Samsung Internet for Android"},u=k.getFirstMatch(ye,e)||k.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/Whale/i],describe(e){let t={name:"NAVER Whale Browser"},u=k.getFirstMatch(ye,e)||k.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/MZBrowser/i],describe(e){let t={name:"MZ Browser"},u=k.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||k.getFirstMatch(ye,e);return u&&(t.version=u),t}},{test:[/focus/i],describe(e){let t={name:"Focus"},u=k.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||k.getFirstMatch(ye,e);return u&&(t.version=u),t}},{test:[/swing/i],describe(e){let t={name:"Swing"},u=k.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||k.getFirstMatch(ye,e);return u&&(t.version=u),t}},{test:[/coast/i],describe(e){let t={name:"Opera Coast"},u=k.getFirstMatch(ye,e)||k.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(e){let t={name:"Opera Touch"},u=k.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||k.getFirstMatch(ye,e);return u&&(t.version=u),t}},{test:[/yabrowser/i],describe(e){let t={name:"Yandex Browser"},u=k.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||k.getFirstMatch(ye,e);return u&&(t.version=u),t}},{test:[/ucbrowser/i],describe(e){let t={name:"UC Browser"},u=k.getFirstMatch(ye,e)||k.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/Maxthon|mxios/i],describe(e){let t={name:"Maxthon"},u=k.getFirstMatch(ye,e)||k.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/epiphany/i],describe(e){let t={name:"Epiphany"},u=k.getFirstMatch(ye,e)||k.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/puffin/i],describe(e){let t={name:"Puffin"},u=k.getFirstMatch(ye,e)||k.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/sleipnir/i],describe(e){let t={name:"Sleipnir"},u=k.getFirstMatch(ye,e)||k.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/k-meleon/i],describe(e){let t={name:"K-Meleon"},u=k.getFirstMatch(ye,e)||k.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/micromessenger/i],describe(e){let t={name:"WeChat"},u=k.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||k.getFirstMatch(ye,e);return u&&(t.version=u),t}},{test:[/qqbrowser/i],describe(e){let t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},u=k.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||k.getFirstMatch(ye,e);return u&&(t.version=u),t}},{test:[/msie|trident/i],describe(e){let t={name:"Internet Explorer"},u=k.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/\sedg\//i],describe(e){let t={name:"Microsoft Edge"},u=k.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/edg([ea]|ios)/i],describe(e){let t={name:"Microsoft Edge"},u=k.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/vivaldi/i],describe(e){let t={name:"Vivaldi"},u=k.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/seamonkey/i],describe(e){let t={name:"SeaMonkey"},u=k.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/sailfish/i],describe(e){let t={name:"Sailfish"},u=k.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return u&&(t.version=u),t}},{test:[/silk/i],describe(e){let t={name:"Amazon Silk"},u=k.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/phantom/i],describe(e){let t={name:"PhantomJS"},u=k.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/slimerjs/i],describe(e){let t={name:"SlimerJS"},u=k.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(e){let t={name:"BlackBerry"},u=k.getFirstMatch(ye,e)||k.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/(web|hpw)[o0]s/i],describe(e){let t={name:"WebOS Browser"},u=k.getFirstMatch(ye,e)||k.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/bada/i],describe(e){let t={name:"Bada"},u=k.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/tizen/i],describe(e){let t={name:"Tizen"},u=k.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||k.getFirstMatch(ye,e);return u&&(t.version=u),t}},{test:[/qupzilla/i],describe(e){let t={name:"QupZilla"},u=k.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||k.getFirstMatch(ye,e);return u&&(t.version=u),t}},{test:[/firefox|iceweasel|fxios/i],describe(e){let t={name:"Firefox"},u=k.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/electron/i],describe(e){let t={name:"Electron"},u=k.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/MiuiBrowser/i],describe(e){let t={name:"Miui"},u=k.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/chromium/i],describe(e){let t={name:"Chromium"},u=k.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||k.getFirstMatch(ye,e);return u&&(t.version=u),t}},{test:[/chrome|crios|crmo/i],describe(e){let t={name:"Chrome"},u=k.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/GSA/i],describe(e){let t={name:"Google Search"},u=k.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test(e){let t=!e.test(/like android/i),u=e.test(/android/i);return t&&u},describe(e){let t={name:"Android Browser"},u=k.getFirstMatch(ye,e);return u&&(t.version=u),t}},{test:[/playstation 4/i],describe(e){let t={name:"PlayStation 4"},u=k.getFirstMatch(ye,e);return u&&(t.version=u),t}},{test:[/safari|applewebkit/i],describe(e){let t={name:"Safari"},u=k.getFirstMatch(ye,e);return u&&(t.version=u),t}},{test:[/.*/i],describe(e){let t=/^(.*)\/(.*) /,u=/^(.*)\/(.*)[ \t]\((.*)/,n=e.search("\\(")!==-1?u:t;return{name:k.getFirstMatch(n,e),version:k.getSecondMatch(n,e)}}}],V3=G3,J3=[{test:[/Roku\/DVP/],describe(e){let t=k.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:Ze.Roku,version:t}}},{test:[/windows phone/i],describe(e){let t=k.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:Ze.WindowsPhone,version:t}}},{test:[/windows /i],describe(e){let t=k.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),u=k.getWindowsVersionName(t);return{name:Ze.Windows,version:t,versionName:u}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(e){let t={name:Ze.iOS},u=k.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return u&&(t.version=u),t}},{test:[/macintosh/i],describe(e){let t=k.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),u=k.getMacOSVersionName(t),n={name:Ze.MacOS,version:t};return u&&(n.versionName=u),n}},{test:[/(ipod|iphone|ipad)/i],describe(e){let t=k.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:Ze.iOS,version:t}}},{test(e){let t=!e.test(/like android/i),u=e.test(/android/i);return t&&u},describe(e){let t=k.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),u=k.getAndroidVersionName(t),n={name:Ze.Android,version:t};return u&&(n.versionName=u),n}},{test:[/(web|hpw)[o0]s/i],describe(e){let t=k.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),u={name:Ze.WebOS};return t&&t.length&&(u.version=t),u}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(e){let t=k.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||k.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||k.getFirstMatch(/\bbb(\d+)/i,e);return{name:Ze.BlackBerry,version:t}}},{test:[/bada/i],describe(e){let t=k.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:Ze.Bada,version:t}}},{test:[/tizen/i],describe(e){let t=k.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:Ze.Tizen,version:t}}},{test:[/linux/i],describe(){return{name:Ze.Linux}}},{test:[/CrOS/],describe(){return{name:Ze.ChromeOS}}},{test:[/PlayStation 4/],describe(e){let t=k.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:Ze.PlayStation4,version:t}}}],Y3=[{test:[/googlebot/i],describe(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe(e){let t=k.getFirstMatch(/(can-l01)/i,e)&&"Nova",u={type:Fe.mobile,vendor:"Huawei"};return t&&(u.model=t),u}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe(){return{type:Fe.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe(){return{type:Fe.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(){return{type:Fe.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe(){return{type:Fe.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe(){return{type:Fe.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe(){return{type:Fe.tablet}}},{test(e){let t=e.test(/ipod|iphone/i),u=e.test(/like (ipod|iphone)/i);return t&&!u},describe(e){let t=k.getFirstMatch(/(ipod|iphone)/i,e);return{type:Fe.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe(){return{type:Fe.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe(){return{type:Fe.mobile}}},{test(e){return e.getBrowserName(!0)==="blackberry"},describe(){return{type:Fe.mobile,vendor:"BlackBerry"}}},{test(e){return e.getBrowserName(!0)==="bada"},describe(){return{type:Fe.mobile}}},{test(e){return e.getBrowserName()==="windows phone"},describe(){return{type:Fe.mobile,vendor:"Microsoft"}}},{test(e){let t=Number(String(e.getOSVersion()).split(".")[0]);return e.getOSName(!0)==="android"&&t>=3},describe(){return{type:Fe.tablet}}},{test(e){return e.getOSName(!0)==="android"},describe(){return{type:Fe.mobile}}},{test(e){return e.getOSName(!0)==="macos"},describe(){return{type:Fe.desktop,vendor:"Apple"}}},{test(e){return e.getOSName(!0)==="windows"},describe(){return{type:Fe.desktop}}},{test(e){return e.getOSName(!0)==="linux"},describe(){return{type:Fe.desktop}}},{test(e){return e.getOSName(!0)==="playstation 4"},describe(){return{type:Fe.tv}}},{test(e){return e.getOSName(!0)==="roku"},describe(){return{type:Fe.tv}}}],X3=[{test(e){return e.getBrowserName(!0)==="microsoft edge"},describe(e){if(/\sedg\//i.test(e))return{name:qt.Blink};let t=k.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:qt.EdgeHTML,version:t}}},{test:[/trident/i],describe(e){let t={name:qt.Trident},u=k.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test(e){return e.test(/presto/i)},describe(e){let t={name:qt.Presto},u=k.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test(e){let t=e.test(/gecko/i),u=e.test(/like gecko/i);return t&&!u},describe(e){let t={name:qt.Gecko},u=k.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}},{test:[/(apple)?webkit\/537\.36/i],describe(){return{name:qt.Blink}}},{test:[/(apple)?webkit/i],describe(e){let t={name:qt.WebKit},u=k.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return u&&(t.version=u),t}}],Q3=class{constructor(e,t=!1){if(e==null||e==="")throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},t!==!0&&this.parse()}getUA(){return this._ua}test(e){return e.test(this._ua)}parseBrowser(){this.parsedResult.browser={};let e=k.find(V3,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(u=>this.test(u));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.browser=e.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};let e=k.find(J3,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(u=>this.test(u));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.os=e.describe(this.getUA())),this.parsedResult.os}getOSName(e){let{name:t}=this.getOS();return e?String(t).toLowerCase()||"":t||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(e=!1){let{type:t}=this.getPlatform();return e?String(t).toLowerCase()||"":t||""}parsePlatform(){this.parsedResult.platform={};let e=k.find(Y3,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(u=>this.test(u));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.platform=e.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};let e=k.find(X3,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(u=>this.test(u));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.engine=e.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return k.assign({},this.parsedResult)}satisfies(e){let t={},u=0,n={},a=0;if(Object.keys(e).forEach(r=>{let i=e[r];typeof i=="string"?(n[r]=i,a+=1):typeof i=="object"&&(t[r]=i,u+=1)}),u>0){let r=Object.keys(t),i=k.find(r,s=>this.isOS(s));if(i){let s=this.satisfies(t[i]);if(s!==void 0)return s}let o=k.find(r,s=>this.isPlatform(s));if(o){let s=this.satisfies(t[o]);if(s!==void 0)return s}}if(a>0){let r=Object.keys(n),i=k.find(r,o=>this.isBrowser(o,!0));if(i!==void 0)return this.compareVersion(n[i])}}isBrowser(e,t=!1){let u=this.getBrowserName().toLowerCase(),n=e.toLowerCase(),a=k.getBrowserTypeByAlias(n);return t&&a&&(n=a.toLowerCase()),n===u}compareVersion(e){let t=[0],u=e,n=!1,a=this.getBrowserVersion();if(typeof a=="string")return e[0]===">"||e[0]==="<"?(u=e.substr(1),e[1]==="="?(n=!0,u=e.substr(2)):t=[],e[0]===">"?t.push(1):t.push(-1)):e[0]==="="?u=e.substr(1):e[0]==="~"&&(n=!0,u=e.substr(1)),t.indexOf(k.compareVersions(a,u,n))>-1}isOS(e){return this.getOSName(!0)===String(e).toLowerCase()}isPlatform(e){return this.getPlatformType(!0)===String(e).toLowerCase()}isEngine(e){return this.getEngineName(!0)===String(e).toLowerCase()}is(e,t=!1){return this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)}some(e=[]){return e.some(t=>this.is(t))}},F0=Q3,Z3=class{static getParser(e,t=!1){if(typeof e!="string")throw new Error("UserAgent should be a string");return new F0(e,t)}static parse(e){return new F0(e).getResult()}static get BROWSER_MAP(){return P0}static get ENGINE_MAP(){return qt}static get OS_MAP(){return Ze}static get PLATFORMS_MAP(){return Fe}},oa=Z3;var VE=ta.alert;var B0={lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","noSupportTranslate-pdf":"\u811A\u672C\u4E0D\u652F\u6301\u8BF7\u4F7F\u7528\u63D2\u4EF6","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",enableLineBreak:"\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E\u683C\u5F0F\u4E3A\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u6709\u9053/\u817E\u8BAF\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8BD1\u5E76\u9690\u85CF\u539F\u6587/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.toggleTranslationMask":"\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6","browser.openEbookViewer":"\u9605\u8BFB\u672C\u5730\u7535\u5B50\u4E66","browser.openEbookBuilder":"\u5236\u4F5C\u53CC\u8BED Epub \u7535\u5B50\u4E66","browser.translateLocalHtmlFile":"\u7FFB\u8BD1 HTML/txt \u6587\u4EF6","browser.donateContext":"\u4E86\u89E3\u8D5E\u52A9\u798F\u5229","browser.translateLocalSubtitleFile":"\u7FFB\u8BD1\u672C\u5730\u5B57\u5E55\u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",isShowContextMenu:"\u5C06\u7FFB\u8BD1\u7F51\u9875\u52A0\u5165\u53F3\u952E\u83DC\u5355\u9879",toggleBeta:"\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",betaDescription:"\u542F\u7528\u4ECD\u5728\u5B9E\u9A8C\u6027\u7684\u529F\u80FD\uFF0C\u4EE5\u53CA\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u603B\u662F\u6362\u884C\u9002\u7528\u4E8E\u8F83\u5C11\u5185\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F50\u3002\uFF08\u5728\u5185\u5BB9\u8F83\u591A\u7684\u957F\u6BB5\u843D(\u8D85\u8FC7{count}\u4E2A\u5B57\u7B26) \u4F7F\u7528\u667A\u80FD\u6362\u884C\uFF0C\u66F4\u7701\u7A7A\u95F4\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1\uFF0C\u53EF\u8BBE\u7F6E\u4E34\u65F6\u65F6\u957F",xMinutes:"{count} \u5206\u949F",disabled:"\u7981\u7528",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5219\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875(\u4EC5\u8BD1\u6587)/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",mouseHoldKey:"+ {key} \u7FFB\u8BD1\u8BE5\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8BD1\u8BE5\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E(\u6253\u5F00\u8BBE\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8BD1\u8BE5\u6BB5",mouseHoverHoldKey:"\u9F20\u6807\u60AC\u505C\u540C\u65F6\u6309\u4E0B\u5FEB\u6377\u952E\u7FFB\u8BD1\u6BB5\u843D","mouse-translate":"\u5F53\u9F20\u6807\u60AC\u505C",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",resetThisSuccess:"\u91CD\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",goAdvancedInterfaceSettings:"\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\u3002\u4EC5\u5BF9\u4E8E\u66F4\u4E13\u4E1A\u7684\u7528\u6237\uFF0C\u63D0\u4F9B\u66F4\u4E2A\u6027\u5316\u7684\u8BBE\u7F6E\u9879\u3002",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u4EF7\u683C","translate to the bottom of the page":"\u8FDB\u5165\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u8FDB\u5165\u7F51\u9875\u5C06\u7ACB\u5373\u7FFB\u8BD1\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\u3002\u5173\u95ED\u5219\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u6240\u6709\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\u3002\u5173\u95ED\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\uFF0C\u4EC5\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8BD1\u9875\u9762\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\uFF0C\u800C\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",moreOptions:"\u5C55\u5F00\u66F4\u591A\u81EA\u5B9A\u4E49\u9009\u9879",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u6240\u6709\u533A\u57DF",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",changeToOnlyTranslationMode:"\u5207\u6362\u4E3A\u4EC5\u663E\u793A\u8BD1\u6587",changeToDualTranslationMode:"\u5207\u6362\u4E3A\u53CC\u8BED\u7FFB\u8BD1",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",badUserscriptBrowser:"\u5F53\u524D\u6D4F\u89C8\u5668\u6CA1\u6709\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u6269\u5C55\u7684\u63A5\u53E3\uFF08\u6BD4\u5982\u83B7\u53D6\u6CB9\u7334\u811A\u672C\u81EA\u8EAB\u7684\u7248\u672C\u53F7\u4FE1\u606F\uFF09\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334\u6269\u5C55</1>\u7684\u6D4F\u89C8\u5668\u5982 Firefox",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",needActionForOptions:"(\u9700\u8BBE\u7F6E)",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1 {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1 {language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA",import_export_title:"\u5BFC\u5165/\u5BFC\u51FA\u914D\u7F6E",syncToGoogleDrive:"\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65",previewAllThemes:"\u9884\u89C8\u5168\u90E8\u6837\u5F0F","translationTheme.none":"\u65E0","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.solidBorder":"\u5B9E\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.marker2":"\u9A6C\u514B\u7B142","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDashed":"\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDotted":"\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.nativeUnderline":"\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.wavy":"\u6CE2\u6D6A\u7EBF","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.tenAlpha":"\u817E\u8BAF\u7FFB\u8BD1\u541B(Alpha)","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeeplX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"Azure \u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.cai":"\u5F69\u4E91\u5C0F\u8BD1 (Alpha)","translationServices.volcAlpha":"\u706B\u5C71 (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.you":"\u6709\u9053\u7FFB\u8BD1 (Alpha)","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.niu":"\u5C0F\u725B\u7FFB\u8BD1","translationServices.papago":"Papago \u7FFB\u8BD1","translationServices.d":"D (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u5C06\u8DF3\u8FC7\u7FFB\u8BD1",enableUserscriptPagePopup:"\u5728\u9875\u9762\u4E0A\u663E\u793A\u60AC\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u5173\u95ED\u60AC\u6D6E\u7403\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u60AC\u6D6E\u7403\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u603B\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8BD1\u6587\u6837\u5F0F",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00",syncToCloud:"\u540C\u6B65\u5230\u4E91\u7AEF",syncToCloudDescription:"\u4E0A\u4F20\u5230\u4E91\u7AEF\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668/\u6CB9\u7334\u811A\u672C\u4E4B\u95F4\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",authFail:"\u6388\u6743\u5931\u8D25",syncTitle:"\u624B\u52A8\u5907\u4EFD\u7BA1\u7406",import_hint:"\u5BFC\u5165",upload:"\u4E0A\u4F20",revokeAuth:"\u64A4\u9500\u6388\u6743",uploadFail:"\u4E0A\u4F20\u5931\u8D25",download:"\u4E0B\u8F7D",importSuccess:"\u5BFC\u5165\u6210\u529F",importFail:"\u5BFC\u5165\u5931\u8D25",deleteFail:"\u5220\u9664\u5931\u8D25",backupToCloud:"\u624B\u52A8\u7BA1\u7406\u5907\u4EFD\u6587\u4EF6",create_new_backup:"\u65B0\u589E\u5907\u4EFD\u8282\u70B9",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5907\u4EFD{count}\u4E2A\u4E0D\u540C\u7684\u8282\u70B9, \u8BF7\u5220\u9664\u4E0D\u9700\u8981\u7684\u8282\u70B9",backupToCloudDescription:"\u624B\u52A8\u4E0A\u4F20\u6216\u6062\u590D\u5907\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8BB83\u4E2A\u4E0D\u540C\u7684\u5907\u4EFD",successSyncConfig:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u8D25",updatedAt:"\u66F4\u65B0\u4E8E {date}",lastSyncedAt:"\u4E0A\u6B21\u68C0\u67E5\u4E8E {date}",downloadFail:"\u4E0B\u8F7D\u5931\u8D25",clickToDownload:"\u70B9\u51FB\u4E0B\u8F7D",aboutLabel:"\u5173\u4E8E - \u53CD\u9988","browser.openAboutPage":"\u5173\u4E8E/\u53CD\u9988",aboutLabelWithoutSponsor:"\u5173\u4E8E - \u53CD\u9988",aboutIntro:"\u8BE5\u6269\u5C55\u514D\u8D39\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F <br/><br/>\u4F60\u53EF\u4EE5\u5173\u6CE8\u6211\u4EEC\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\uFF0C\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF0C\u6216\u8005\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002",aboutIntroWithoutSponsor:"\u8BE5\u6269\u5C55\u514D\u8D39\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F ",projectHomepage:"\u9879\u76EE\u4E3B\u9875",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u53C2\u4E0E\u529F\u80FD\u8BA8\u8BBA",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u4F17\u53F7",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",joinTelegramChannel:"\u5173\u6CE8 Telegram \u9891\u9053\u83B7\u53D6\u6700\u65B0\u66F4\u65B0",feedbackAndJoin:"\u95EE\u9898\u53CD\u9988/\u52A0\u7FA4",autoSync:"\u81EA\u52A8\u5B9A\u65F6\u540C\u6B65",loadingThemeTitle:"Loading \u6837\u5F0F",loadingThemeDescription:"\u8BBE\u7F6E\u7B49\u5F85\u8BD1\u6587\u52A0\u8F7D\u65F6\u7684\u6837\u5F0F","loadingTheme.spinner":"\u8F6C\u5708\u52A8\u753B","loadingTheme.text":"\u9759\u6001\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u663E\u793A",developerDescription:"\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863","edit border color":"\u4FEE\u6539\u8FB9\u6846\u989C\u8272",successSyncButNoChange:"\u5F53\u524D\u914D\u7F6E\u4E0E\u4E91\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u8FB9\u6846\u989C\u8272","customThemeLabel.borderRadius":"\u8FB9\u6846\u5706\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u989C\u8272","customThemeLabel.backgroundColor":"\u80CC\u666F\u989C\u8272","customThemeLabel.zoom":"\u5B57\u4F53\u7F29\u653E\u6BD4\u4F8B (%)",resetToDefaultColor:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u989C\u8272",resetToDefaultSettings:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u8BBE\u7F6E",isTranslateTitle:"\u5F00\u542F\u7FFB\u8BD1\u7F51\u9875\u6807\u9898",isTranslateTitleDescription:"\u5F00\u542F\u540E\uFF0C\u7F51\u9875\u6807\u9898\u4F1A\u88AB\u7FFB\u8BD1",verifyService:"\u70B9\u6B64\u6D4B\u8BD5\u670D\u52A1",verified:"\u9A8C\u8BC1\u6210\u529F","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8BD1\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u949F\u6700\u5927\u8BF7\u6C42\u6570","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8BF7\u6C42\u6570","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6587\u672C\u957F\u5EA6","field.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6BB5\u843D\u6570","field.apiUrl":"\u81EA\u5B9A\u4E49 API \u63A5\u53E3\u5730\u5740","description.limitPerMinute":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u5206\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.prompt":"\u4EE5\u7528\u6237\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u8350\uFF09, \u5C06\u4F1A\u5728\u5355\u72EC\u4F5C\u4E3A\u4E00\u6BB5\u53D1\u9001\u7ED9 OpenAI","description.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u5B57\u7B26\u6570\uFF0C\u592A\u5927\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5C1D\u8BD5\u8C03\u6574\u8BE5\u9009\u9879\u6765\u4F18\u5316\u901F\u5EA6","description.systemPrompt":"\u4EE5\u7CFB\u7EDF\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00","description.model":"OpenAI \u7684\u6A21\u578B\uFF0C\u53EF\u4EE5\u4E3A gpt-3.5-turbo, gpt-4 \u7B49","description.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u53D1\u9001\u7ED9 OpenAI \u7684\u6BB5\u843D\u6570\u91CF\uFF0C\u5982\u679C\u6BB5\u843D\u6570\u91CF\u8FC7\u591A\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162\uFF0C\u8BBE\u7F6E\u4E3A 1 \u4E2A\u6BB5\u843D\u65F6\uFF0C\u4F53\u9A8C\u6700\u597D","description.apiUrl":"\u8BF7\u6DFB\u52A0\u5177\u4F53\u5E26\u6709\u8DEF\u5F84\u7684\u7F51\u5740",enabledExtension:"\u542F\u7528\u6269\u5C55",clickToDisableExtension:"\u70B9\u51FB\u7981\u7528\u6269\u5C55",clickToEnableExtension:"\u70B9\u51FB\u542F\u7528\u6269\u5C55",hasBeenDisabled:"\u5DF2\u7981\u7528","show password":"\u663E\u793A\u5BC6\u7801",customContent:"\u8F93\u5165\u81EA\u5B9A\u4E49\u6A21\u578B\u540D\u79F0"};var L0={lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u5143\u6578\u91CF","translate-pdf":"\u9EDE\u9078\u7FFB\u8B6F PDF","translate-firefox-local-pdf":"\u9EDE\u9078\u4E0A\u50B3 PDF",enableLineBreak:"\u958B\u555F\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D0A\u52A9\u958B\u767C\u8005 (\u6708\u4ED8\u6216\u50C5\u8D0A\u52A9\u4E00\u6B21\u5747\u53EF)",help:"\u8AAA\u660E",browserShortcutsNoteForFirefox:"Firefox \u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u9644\u52A0\u5143\u4EF6\u7BA1\u7406\u9801\u9762 \u300Cabout:addons\u300D\uFF0C\u7136\u5F8C\u9EDE\u9078\u300C\u8A2D\u5B9A\u5716\u793A\u300D\uFF0C\u518D\u9EDE\u9078\u300C\u7BA1\u7406\u64F4\u5145\u5957\u4EF6\u5FEB\u901F\u9375\u300D\u5373\u53EF\u8A2D\u5B9A",browserShortcutsNoteForChrome:"Chromium \u6838\u5FC3\u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u64F4\u5145\u529F\u80FD\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u300C\u9375\u76E4\u5FEB\u901F\u9375\u300D\u9801\u9762(chrome://extensions/shortcuts)\u8A2D\u5B9A\uFF0C\u9EDE\u9078\u4E0B\u65B9\u6309\u9215\u524D\u5F80\u5FEB\u901F\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u901F\u9375\u683C\u5F0F\u70BA\uFF1A",enableLineBreakDescription:"\u555F\u7528\u5F8C\uFF0C\u5C07\u6703\u5728\u9577\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u5B57\u5143\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u5957\u4EF6\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u63F4 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u63F4 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8B6F\u4E26\u96B1\u85CF\u539F\u6587/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.openOptionsPage":"\u958B\u555F\u8A2D\u5B9A\u9801\u9762","browser.toggleTranslationMask":"\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u6A5F PDF \u6A94\u6848","browser.openEbookViewer":"\u95B1\u8B80\u672C\u6A5F\u96FB\u5B50\u66F8","browser.openEbookBuilder":"\u88FD\u4F5C\u96D9\u8A9E Epub \u96FB\u5B50\u66F8","browser.translateLocalHtmlFile":"\u7FFB\u8B6F HTML/txt \u6A94\u6848","browser.translateLocalSubtitleFile":"\u7FFB\u8B6F\u5B57\u5E55\u6A94\u6848","browser.donateContext":"\u4E86\u89E3\u8D0A\u52A9\u798F\u5229",confirmResetConfig:"\u4F60\u78BA\u5B9A\u8981\u91CD\u8A2D\u8A2D\u5B9A\u55CE\uFF1F",translationLineBreakSettingTitle:"\u8B6F\u6587\u63DB\u884C\u8A2D\u5B9A",smartLineBreak:"\u667A\u6167\u63DB\u884C",alwaysLineBreak:"\u7E3D\u662F\u63DB\u884C",isShowContextMenu:"\u5C07\u7DB2\u9801\u7FFB\u8B6F\u529F\u80FD\u52A0\u5165\u53F3\u9375\u9078\u55AE",toggleBeta:"\u958B\u555F Beta \u6E2C\u8A66\u529F\u80FD",betaDescription:"\u555F\u7528\u4ECD\u5728\u5BE6\u9A57\u7684\u529F\u80FD\u4EE5\u53CA\u6E2C\u8A66\u4E2D\u7684\u7FFB\u8B6F\u670D\u52D9\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7D44</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u7E3D\u662F\u63DB\u884C\u9069\u7528\u65BC\u8F03\u5C11\u5167\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F4A\u3002(\u5728\u5167\u5BB9\u8F03\u591A\u7684\u9577\u6BB5\u843D(\u8D85\u904E {count} \u500B\u5B57\u5143) \u4F7F\u7528\u667A\u6167\u63DB\u884C\u6703\u66F4\u7701\u7A7A\u9593)",tempTranslateDomainTitle:"\u81E8\u6642\u958B\u555F\u7DB2\u7AD9\u7FFB\u8B6F\u7684\u6642\u9577",tempTranslateDomainDescription:"\u7576\u624B\u52D5\u7FFB\u8B6F\u67D0\u500B\u7DB2\u9801\u7684\u6642\u5019\uFF0C\u81E8\u6642\u958B\u555F\u8A72\u7DB2\u7AD9\u70BA\u81EA\u52D5\u7FFB\u8B6F",xMinutes:"{count} \u5206\u9418",disabled:"\u505C\u7528",changelog:"\u66F4\u65B0\u8A18\u9304",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u5247\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C",addUrlDescription:"\u53EF\u4EE5\u70BA\u7DB2\u57DF\u540D\u7A31\uFF0C\u540C\u6642\u652F\u63F4\u842C\u7528\u5B57\u5143\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u5B9A",clickToExpandConfig:"\u5C55\u958B\u76EE\u524D\u8A2D\u5B9A",import:"\u5F9E\u6A94\u6848\u532F\u5165",export:"\u532F\u51FA\u70BA\u6A94\u6848",toggleDebug:"\u5728\u4E3B\u63A7\u53F0\u986F\u793A\u5075\u932F\u8A18\u9304","fingers.0":"\u95DC\u9589","fingers.2":"\u96D9\u6307\u89F8\u6478","fingers.3":"\u4E09\u6307\u89F8\u6478","fingers.4":"\u56DB\u6307\u89F8\u6478","fingers.5":"\u4E94\u6307\u89F8\u6478",document:"\u8AAA\u660E\u6587\u4EF6",resetSuccess:"\u91CD\u8A2D\u6240\u6709\u8A2D\u5B9A\u6210\u529F",resetThisSuccess:"\u91CD\u8A2D\u6210\u529F",saved:"\u5132\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u532F\u5165\u8A2D\u5B9A",goAdvancedSettings:"\u524D\u5F80\u9032\u968E\u8A2D\u5B9A\u9801\u9762",goAdvancedInterfaceSettings:"\u524D\u5F80\u81EA\u8A02\u8A2D\u5B9A\u9801\u9762",advanced:"\u9032\u968E\u8A2D\u5B9A",advancedDescription:"\u6B63\u5E38\u60C5\u6CC1\u7121\u9700\u8A2D\u5B9A\uFF0C\u4FDD\u6301\u9810\u8A2D\u5373\u53EF\u3002\u50C5\u91DD\u5C0D\u66F4\u5C08\u696D\u7684\u4F7F\u7528\u8005\uFF0C\u63D0\u4F9B\u66F4\u500B\u4EBA\u5316\u7684\u8A2D\u5B9A\u9805\u76EE\u3002",developer:"\u958B\u767C\u8005\u8A2D\u5B9A",donateCafe:"\u50F9\u683C","translate to the bottom of the page":"\u9032\u5165\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u56DE\u5831",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","mouse-translate":"\u7576\u9F20\u6A19\u6ED1\u904E",mouseHoldKey:"+ {key} \u7FFB\u8B6F\u8A72\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8B6F\u8A72\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u7FA9\u5FEB\u6377\u9375(\u6253\u958B\u8A2D\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8B6F\u8A72\u6BB5",mouseHoverHoldKey:"\u9F20\u6A19\u6ED1\u904E\u540C\u6642\u6309\u4E0B X \u9375\u7FFB\u8B6F\u6BB5\u843D",translateToThePageEndImmediatelyDescription:"\u555F\u7528\u5F8C\uFF0C\u9032\u5165\u7DB2\u9801\u5C07\u7ACB\u5373\u7FFB\u8B6F\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\u3002\u95DC\u9589\u5247\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u555F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6240\u6709\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\u3002\u95DC\u9589\u5247\u4F7F\u7528\u9810\u8A2D\u7684\u667A\u6167\u8FA8\u8B58\uFF0C\u50C5\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\u3002(\u4E0D\u63A8\u85A6\u958B\u555F)","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8B6F\u9801\u9762\u524D\u591A\u5C11\u500B\u5B57\u5143\uFF0C\u800C\u7121\u9700\u7B49\u5F85\u6372\u52D5\u81F3\u53EF\u898B\u5340\u57DF","interface language":"\u4ECB\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u901F\u9375",modify:"\u8B8A\u66F4\u5FEB\u901F\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u9996\u9801",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u6240\u6709\u5340\u57DF",changeToTranslateTheMainPage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF",changeToOnlyTranslationMode:"\u5207\u63DB\u70BA\u50C5\u986F\u793A\u8B6F\u6587",changeToDualTranslationMode:"\u5207\u63DB\u70BA\u96D9\u8A9E\u7FFB\u8B6F",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u6167\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u6A5F\u898F\u5247\u5DF2\u70BA\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u5B98\u65B9\u898F\u5247",localVersionIsTooOld:"\u672C\u6A5F\u5957\u4EF6\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u5957\u4EF6\u81F3 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5617\u8A66\u540C\u6B65",badUserscriptBrowser:"\u76EE\u524D\u700F\u89BD\u5668\u7121\u6CD5\u6B63\u78BA\u5BE6\u73FE\u6CB9\u7334\u5957\u4EF6\u7684\u4ECB\u9762\uFF0C\u8ACB\u4F7F\u7528\u5176\u4ED6<1>\u652F\u63F4\u6CB9\u7334\u5957\u4EF6</1>\u7684\u700F\u89BD\u5668\u5982(Firefox Nightly \u7248\u672C)",foundNewVersion:"\u6709\u65B0\u7248\u672C\u53EF\u7528",theLocalExtensionIsUpToUpdate:"\u76EE\u524D\u5957\u4EF6\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u91CD\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u76EE\u524D\u898F\u5247\u7248\u672C",calculating:"\u6B63\u5728\u8A08\u7B97",unknownError:"\u672A\u77E5\u7684\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u53D6\u5F97\u9060\u7AEF\u898F\u5247",enableAlphaSuccess:"\u5DF2\u555F\u7528 Alpha \u529F\u80FD",disableAlphaSuccess:"\u5DF2\u505C\u7528 Alpha \u529F\u80FD",cacheSize:"\u5FEB\u53D6\u5927\u5C0F\uFF1A",cleaning:"\u6B63\u5728\u6E05\u7406",cleanCache:"\u6E05\u9664\u5FEB\u53D6",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"(\u524D\u5F80\u8A2D\u5B9A)",goSettings:"\u524D\u5F80\u8A2D\u5B9A",needActionForOptions:"(\u9700\u8A2D\u5B9A)",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u91DD\u5C0D\u8A72\u7DB2\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F {language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",add:"\u65B0\u589E",default:"\u9810\u8A2D",forThisLanguage:"\u91DD\u5C0D\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165 URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u5B83\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u5B9A\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4F60\u60F3\u7528\u7684\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u6B63\u5728\u7FFB\u8B6F",Error:"\u932F\u8AA4",allowCacheTranslations:"\u555F\u7528\u672C\u6A5F\u7FFB\u8B6F\u5FEB\u53D6\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8981\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u7BC4\u4F8B",interface:"\u4ECB\u9762\u8A2D\u5B9A",import_export:"\u532F\u5165/\u532F\u51FA",import_export_title:"\u532F\u5165/\u532F\u51FA\u8A2D\u5B9A",syncToGoogleDrive:"\u7ACB\u5373\u8207 Google Drive \u540C\u6B65",previewAllThemes:"\u9810\u89BD\u5168\u90E8\u6A23\u5F0F","translationTheme.none":"\u7121","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u5E95\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u6846\u7DDA","translationTheme.solidBorder":"\u5BE6\u7DDA\u6846\u7DDA","translationTheme.underline":"\u76F4\u7DDA\u5E95\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u9694\u7DDA","translationTheme.highlight":"\u9192\u76EE\u63D0\u793A","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.marker2":"\u99AC\u514B\u7B462","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDashed":"\u7CFB\u7D71\u5167\u5EFA\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDotted":"\u7CFB\u7D71\u5167\u5EFA\u9EDE\u72C0\u5E95\u7DDA","translationTheme.nativeUnderline":"\u7CFB\u7D71\u5167\u5EFA\u76F4\u7DDA\u5E95\u7DDA","translationTheme.wavy":"\u6CE2\u5F62\u66F2\u7DDA","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.tenAlpha":"\u9A30\u8A0A\u7FFB\u8B6F\u541B(Alpha)","translationServices.google":"Google \u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeeplX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8B6F","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"Azure \u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.cai":"\u5F69\u96F2\u5C0F\u8B6F (Alpha)","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.you":"\u6709\u9053\u7FFB\u8B6F (Alpha)","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.niu":"\u5C0F\u725B\u7FFB\u8B6F","translationServices.papago":"Papago \u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u7576\u9801\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u5C07\u8DF3\u904E\u7FFB\u8B6F",enableUserscriptPagePopup:"\u5728\u9801\u9762\u4E0A\u986F\u793A\u61F8\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u95DC\u9589\u61F8\u6D6E\u7403\u5F8C\uFF0C\u53EF\u4EE5\u7528\u5FEB\u901F\u9375/{touch}\u518D\u6B21\u986F\u793A\u3002\u70BA\u9632\u6B62\u4E0D\u614E\u95DC\u9589\u8A72\u9078\u9805\u5F8C\u627E\u4E0D\u5230\u61F8\u6D6E\u7403\uFF0C\u5EFA\u8B70\u5C07\u672C\u8A2D\u5B9A\u9801\u9762\u52A0\u5165\u81F3\u6211\u7684\u6700\u611B","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u91D1\u9470\u5F8C\u624D\u53EF\u4F7F\u7528\uFF0C\u8A73\u7D30\u8CC7\u8A0A\u8ACB\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u91D1\u9470\u7533\u8ACB\u548C\u8A2D\u5B9A\u6559\u5B78\u300B",useAboveStyleForTheseSites:"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u7E3D\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8B6F\u6587\u6A23\u5F0F",currentUrl:"\u76EE\u524D\u7DB2\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C\u8A9E\u8A00",syncToCloud:"\u540C\u6B65\u81F3\u96F2\u7AEF",syncToCloudDescription:"\u4E0A\u50B3\u81F3\u96F2\u7AEF\u5F8C\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u700F\u89BD\u5668/\u6CB9\u7334\u8173\u672C\u4E4B\u9593\u540C\u6B65\u8A2D\u5B9A\uFF0C\u4EE5\u6700\u5F8C\u8B8A\u66F4\u6642\u9593\u70BA\u6E96\u3002",authFail:"\u6388\u6B0A\u5931\u6557",syncTitle:"\u624B\u52D5\u5099\u4EFD\u7BA1\u7406",import_hint:"\u532F\u5165",upload:"\u4E0A\u50B3",revokeAuth:"\u64A4\u92B7\u6388\u6B0A",uploadFail:"\u4E0A\u50B3\u5931\u6557",download:"\u4E0B\u8F09",importSuccess:"\u532F\u5165\u6210\u529F",importFail:"\u532F\u5165\u5931\u6557",deleteFail:"\u522A\u9664\u5931\u6557",backupToCloud:"\u624B\u52D5\u7BA1\u7406\u5099\u4EFD\u6A94\u6848",create_new_backup:"\u65B0\u589E\u5099\u4EFD\u7BC0\u9EDE",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5099\u4EFD{count}\u500B\u4E0D\u540C\u7684\u7BC0\u9EDE\uFF0C\u8ACB\u522A\u9664\u4E0D\u9700\u8981\u7684\u7BC0\u9EDE",backupToCloudDescription:"\u624B\u52D5\u4E0A\u50B3\u6216\u9084\u539F\u5099\u4EFD\u6A94\u6848\uFF0C\u6700\u591A\u5141\u8A31 3 \u500B\u4E0D\u540C\u7684\u5099\u4EFD",successSyncConfig:"\u6210\u529F\u8207\u96F2\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u6557",updatedAt:"\u66F4\u65B0\u65BC {date}",lastSyncedAt:"\u4E0A\u6B21\u6AA2\u67E5\u65BC {date}",downloadFail:"\u4E0B\u8F09\u5931\u6557",clickToDownload:"\u9EDE\u9078\u4E0B\u8F09",aboutLabel:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831",aboutLabelWithoutSponsor:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831","browser.openAboutPage":"\u95DC\u65BC/\u554F\u984C\u56DE\u5831/\u8D0A\u52A9",aboutIntro:"\u672C\u5957\u4EF6\u70BA\u514D\u8CBB\u5957\u4EF6\uFF0C\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F \u4F60\u53EF\u4EE5\u95DC\u6CE8\u6211\u4EEC\u7684<3>Twitter</3>\uFF0C<4>Telegram \u983B\u9053</4>\u4EE5\u53CA\u4E0B\u65B9\u7684<5>\u90F5\u4EF6\u8A02\u95B1</5>\u8FFD\u8E64\u66F4\u65B0\u3002",aboutIntroWithoutSponsor:"\u672C\u5957\u4EF6\u70BA\u514D\u8CBB\u5957\u4EF6\uFF0C\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F ",projectHomepage:"\u5C08\u6848\u9996\u9801",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u4F17\u53F7",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u7D44\u53C3\u8207\u529F\u80FD\u8A0E\u8AD6",joinTelegramChannel:"\u95DC\u6CE8 Telegram \u983B\u9053\u77AD\u89E3\u66F4\u65B0\u8CC7\u8A0A",feedbackAndJoin:"\u554F\u984C\u56DE\u5831/\u52A0\u5165\u7FA4\u7D44",autoSync:"\u81EA\u52D5\u5B9A\u6642\u540C\u6B65",loadingThemeTitle:"Loading \u6A23\u5F0F",loadingThemeDescription:"\u8A2D\u5B9A\u7B49\u5F85\u8B6F\u6587\u8F09\u5165\u6642\u7684\u6A23\u5F0F","loadingTheme.spinner":"\u8F49\u5708\u52D5\u756B","loadingTheme.text":"\u975C\u614B\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u986F\u793A",developerDescription:"\u53EF\u4EE5\u9EDE\u9078<1>\u6B64\u8655</1>\u6AA2\u8996\u9032\u968E\u81EA\u8A02\u529F\u80FD\u76F8\u95DC\u7684\u8AAA\u660E\u6587\u4EF6","edit border color":"\u8B8A\u66F4\u908A\u6846\u8272\u5F69",successSyncButNoChange:"\u76EE\u524D\u8A2D\u5B9A\u8207\u96F2\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u8A02\u8272\u5F69\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u908A\u6846\u8272\u5F69","customThemeLabel.borderRadius":"\u908A\u6846\u5713\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u8272\u5F69","customThemeLabel.backgroundColor":"\u80CC\u666F\u8272\u5F69","customThemeLabel.zoom":"\u5B57\u578B\u7E2E\u653E\u6BD4\u4F8B (%)",resetToDefaultColor:"\u9084\u539F\u70BA\u9810\u8A2D\u8272\u5F69",isTranslateTitle:"\u555F\u7528\u7DB2\u9801\u6A19\u984C\u7FFB\u8B6F",isTranslateTitleDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6A19\u984C\u6703\u88AB\u7FFB\u8B6F",verifyService:"\u9EDE\u6B64\u6E2C\u8A66\u670D\u52D9",verified:"\u9A57\u8B49\u6210\u529F","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8B6F\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u9418\u6700\u5927\u8981\u6C42\u6578","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8981\u6C42\u6578","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8981\u6C42\u7684\u6700\u5927\u6587\u5B57\u9577\u5EA6","field.apiUrl":"\u81EA\u8A02 API \u4F4D\u5740","description.limitPerMinute":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u5206\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u79D2\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.prompt":"\u4EE5\u7528\u6237\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u8350\uFF09, \u5C06\u4F1A\u5728\u5355\u72EC\u4F5C\u4E3A\u4E00\u6BB5\u53D1\u9001\u7ED9 OpenAI","description.maxTextLengthPerRequest":"\u9810\u8A2D\u6703\u5408\u4F75\u591A\u500B\u6BB5\u843D\uFF0C\u4EE5\u6E1B\u5C11\u8ACB\u8981\u6C42\u6578\uFF0C\u4F46\u662F\u5982\u679C\u6BB5\u843D\u7E3D\u9577\u5EA6\u904E\u9577\uFF0C\u4E5F\u53EF\u80FD\u6703\u5C0E\u81F4 API \u7684\u56DE\u61C9\u6642\u9593\u589E\u52A0\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5617\u8A66\u8ABF\u6574\u8A72\u9078\u9805\u4F86\u63D0\u5347\u901F\u5EA6",enabledExtension:"\u555F\u7528\u5957\u4EF6",clickToDisableExtension:"\u9EDE\u9078\u505C\u7528\u5957\u4EF6",clickToEnableExtension:"\u9EDE\u9078\u555F\u7528\u5957\u4EF6",hasBeenDisabled:"\u5DF2\u505C\u7528","show password":"\u986F\u793A\u5BC6\u78BC",customContent:"\u8F38\u5165\u81EA\u5B9A\u7FA9\u6A21\u578B"};var _0={lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","translate-firefox-local-pdf":"Click to upload Pdf",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.brandName":"Immersive Translate","browser.brandDescription":"Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc.","browser.toggleTranslatePage":"Toggle Translate Page ","browser.toggleTranslateTheWholePage":"Toggle Translate the Whole Page","browser.toggleOnlyTransation":"Toggle Translate and Hide Original Text","browser.toggleTranslateToThePageEndImmediately":"Toggle Translate to the Bottom of the Page Immediately","browser.toggleTranslateTheMainPage":"Toggle Translate the Main Page","browser.openOptionsPage":"Open Settings Page","browser.toggleTranslationMask":"Toggle translation mask style","browser.translateLocalPdfFile":"Translate local PDF File","browser.openEbookViewer":"Read local e-book","browser.openEbookBuilder":"Make Dual Epub ebook","browser.translateLocalHtmlFile":"Translate HTML/txt File","browser.donateContext":"Sponsor Benefits","browser.translateLocalSubtitleFile":"Translate Subtitle File",confirmResetConfig:"Are you sure you want to reset the settings?",translationLineBreakSettingTitle:"Line break setting",smartLineBreak:"Smart Wrap",alwaysLineBreak:"Always Wrap",isShowContextMenu:"Create right button menu",toggleBeta:"Enable Beta experimental features",betaDescription:"Enable features that are still experimental, and translation services that are in testing. Join the <1>Telegram group</1> to learn more.",translationLineBreakSettingDescription:"The always line break feature is suitable for layouts with less content, making the layout more neat and tidy. (Use smart line breaks for long paragraphs with more content (more than {count} characters) for saving space)",tempTranslateDomainTitle:"Open the translation time temporarily",tempTranslateDomainDescription:"When a page is translated manually, turn it temporarily on as automatic translation",xMinutes:"{count} minutes",disabled:"Disable",changelog:"Change Log",toggleTranslatePageWhenThreeFingersOnTheScreen:"Multi-finger touch to show/hide translation display",toggleTranslationMaskWhenThreeFingersOnTheScreen:"Multi-finger touch to show/hide the blur effect of the translation",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"Multi-finger touch to show/hide only translation display",addUrlDescription:"The domain name is available and wildcard is supported e.g.: *.google.com, google.com/mail/*, https://www.google.com/*",general:"General",clickToExpandConfig:"Expand current configuration",import:"Import configuration from file",export:"Export to file",toggleDebug:"Print debug logs on the console","fingers.0":"Close","fingers.2":"Two-finger touch","fingers.3":"Three-finger touch","fingers.4":"Four-finger touch","fingers.5":"Five-finger touch",document:"Document",resetSuccess:"All settings reset successful",resetThisSuccess:"Reset successful",saved:"Saved successfully",successImportConfig:"Configuration imported successfully",goAdvancedSettings:"Go to Advanced Settings Page",goAdvancedInterfaceSettings:"Go to Advanced Custom Settings Page",advanced:"Advanced",advancedDescription:"Normally no settings are needed, keep the default. More personalized settings are provided for professional users only.",developer:"Developer settings",donateCafe:"Pricing","translate to the bottom of the page":"Translate to the bottom of the page immediately after opening the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate","mouse-translate":"Mouse Hover",mouseHoldKey:"+ {key} translate this paragraph",mouseHoldKeyAuto:"Translate the paragraph directly",mouseHoldKeyOff:"Do nothing",mouseHoldKeyOther:"Custom shortcut key (open settings)",mouseHoldKeyCustomKey:"{key} translate this paragraph",mouseHoverHoldKey:"Mouse over and press X key to translate paragraph",translateToThePageEndImmediatelyDescription:"Enabled will translate from the top to the bottom of the page immediately after opening. Disable will translate while reading. (Not recommended to enable)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, all areas of the entire web page will be translated. Disabled will use the default smart recognition and translate only the main areas. (Not recommended to enable)","the number of characters to be translated first":"Directly translate the number of characters in front of the page without waiting to scroll to the visible area","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",moreOptions:"Expand more custom settings",translateTheWholePage:"Translate the whole page area (different from only the main area)",changeToTranslateTheWholePage:"Translate the Whole Page",changeToTranslateTheMainPage:"Translate the Main Content",changeToOnlyTranslationMode:"Show Translation only",changeToDualTranslationMode:"Show Dual Translation",translateToThePageEndImmediately:"Immediately translate to the bottom (different from translating the current visible area)",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension version is too old, please upgrade the extension to {minVersion} or a newer version and try to sync again.",badUserscriptBrowser:"The current browser does not correctly implement the interface of the Greasemonkey extension, please use another browser that <1>supports the Greasemonkey extension</1> such as (Firefox Nightly version)",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",needActionForOptions:"(need to set)",translationEngine:"Engine Options",sourceLanguage:"Original language",target:"Target Language",popupSourceLanguage:"Source",popupTarget:"Target",popupService:"Service",forThisSite:"For This Site:",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export",import_export_title:"Import/Export Configuration",syncToGoogleDrive:"Sync Now with Google Drive",previewAllThemes:"Preview all themes","translationTheme.none":"None","translationTheme.grey":"Black Gray","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.solidBorder":"Dashed Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.opacity":"Opacity effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Marker","translationTheme.marker2":"Maker2","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationTheme.nativeDashed":"System Dash Underline","translationTheme.nativeDotted":"System Dotted Underline","translationTheme.nativeUnderline":"System Straight Line Underline","translationTheme.wavy":"Squiggle","translationServices.tencent":"Tencent Translator","translationServices.tenAlpha":"Tencent Translator (Alpha)","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeeplX (Alpha)","translationServices.bing":"Microsoft Translator","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Azure Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.cai":"Caiyun Translation (Alpha)","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.you":"Youdao Translation (Alpha)","translationServices.transmart":"Tencent Smart Translation","translationServices.niu":"Niu Translation","translationServices.papago":"Papago Translation","translationServices.d":"DeeplX (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"Translate page title","always languages":"Always translate the following languages",neverTranslateLanguagesLabel:"Never Translated Languages",neverTranslateTheFollowingLanguagesDescription:"When a paragraph on a page is in one of the following languages, the translation will be skipped",enableUserscriptPagePopup:"Always show Popup windows on the page",enableUserscriptPagePopupDescription:"Three-finger touch to show the Popup.","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"Sites that always use the {theme} translation style",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language",syncToCloud:"Sync to cloud",syncToCloudDescription:"Upload the configuration to the cloud server, and you can synchronize the configuration between different browsers or Tampermonkey scripts, based on the last modification time.",authFail:"Authorization Failed",syncTitle:"Please select a file operation",import_hint:"Import",upload:"Upload",revokeAuth:"Revoke Authorization",uploadFail:"Upload Failed",download:"Download",importSuccess:"Upload Success",importFail:"Import Failed",deleteFail:"Delete Failed",backupToCloud:"Manage backup files manually",create_new_backup:"Add backup node",maxBackupFiles:"Up to{count}different nodes can be backed up. Please delete unneeded nodes",backupToCloudDescription:"Upload or restore backup files manually, up to 3 different backups",successSyncConfig:"Successfully synced with cloud",syncFail:"Synchronization failed",updatedAt:"Updated at {date}",lastSyncedAt:"Last checked at {date}",downloadFail:"Download failed",clickToDownload:"Click to download",aboutLabel:"About - Feedback ",aboutLabelWithoutSponsor:"About - Feedback","browser.openAboutPage":"About / Feedback",aboutIntro:"The extension is completely free and we hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. <br/><br/> You can also follow out <3>Twitter</3>, <4>Telegram Channel</4>, and <5>Email Subscription</5> below to track updates.",aboutIntroWithoutSponsor:"The extension is completely free and we hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. ",projectHomepage:"Project Homepage",joinTelegramGroup:"Join our communities for feature discussion",joinTelegramChannel:"Subscribe to our Telegram channel to get the latest updates",feedbackAndJoin:"Issue feedback/group",wechatPublicAccount:"Wechat Official Account",wechatCommunities:"Wechat Group",autoSync:"Auto-Time Sync",loadingThemeTitle:"Loading Style",loadingThemeDescription:"Set the style of waiting for the translation to load","loadingTheme.spinner":"Spinning icon","loadingTheme.text":"Static Text... ","loadingTheme.none":"Disabled",developerDescription:"You can click <1>here</1> to see the documentation related to advanced customization","edit border color":"Edit border color",successSyncButNoChange:"The current configuration is consistent with that in the cloud server",customTheme:"Customize colors and sizes","customThemeLabel.borderColor":"Border color","customThemeLabel.borderRadius":"Border Round Corner","customThemeLabel.textColor":"Text color","customThemeLabel.backgroundColor":"Background color","customThemeLabel.zoom":"Font scale (%)",resetToDefaultColor:"Reset to default colors",isTranslateTitle:"Enable translate page title",isTranslateTitleDescription:"When enabled, the page title will be translated",verifyService:"Click on this test service",verified:"Successful","field.model":"Model","field.translationEngine":"Translation engine","field.limitPerMinute":"Max requests per minute","field.limitPerSecond":"Max requests per second","field.maxTextLengthPerRequest":"Maximum text length per request","field.apiUrl":"Custom API interface address","description.limitPerMinute":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next minute. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.limitPerSecond":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next second. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.prompt":"Send as a user to OpenAI conversation, where {{text}} indicates the text of the paragraph,{{from}} indicates the language of the paragraph,{{to}} indicates the target language, you can omit {{text}}, if so, it'll be sent as a separated message","description.maxTextLengthPerRequest":"By default multiple paragraphs will be merged to reduce the number of requests, but if the total length of the paragraphs is too long, it may also cause the interface to respond slowly, so you can try to adjust this option to optimize speed",enabledExtension:"Enable extensions",clickToDisableExtension:"Click to disable extension",clickToEnableExtension:"Click to enable the extension",hasBeenDisabled:"Disabled","show password":"Show password",resetToDefaultSettings:"Reset to default settings",customContent:"Enter customization content"};var np=[{code:"zh-CN",messages:B0},{code:"zh-TW",messages:L0},{code:"en",messages:_0}],Rt="immersiveTranslateDeeplGlobalState",ia="immersiveTranslateBingGlobalState",gu={};for(let e of np)gu[e.code]=e.messages;var pu="Immersive Translate",Ee="immersive-translate";var re="immersiveTranslate";var gb=re+"GoogleAccessToken",pb=re+"AuthFlow";var fb=re+"AuthState",sa=re+"IframeMessage",hb=re+"WaitForRateLimit",la=re+"DocumentMessageAsk",et=re+"DocumentMessageTellThirdParty",R0=re+"DocumentMessageThirdPartyTell",ca=re+"DocumentMessageHandler",ap=`${re}Container`,xo=`${re}SpecifiedContainer`,Kt="buildinConfig",wn="localConfig",To="openOptionsPage",wo="openAboutPage";var Co="openEbookViewer",vo="openEbookBuilder";var da=`${re}PageTranslatedStatus`,Eb=`${re}PageUrlChanged`,$t=`${re}ReceiveCommand`,bb=`${re}PopupReceiveMessage`,rp="immersivetranslate.com",op="config.immersivetranslate.com",yb=`https://${rp}/`,Cn=`https://${op}/default_config.json`,xb=`${re}Mark`,vn="immersiveTranslateEffect",st=`${re}Root`,Tb=`data-${Ee}-effect`,wb=`${re}TranslatedMark`,Cb=`${re}ParagraphId`,O0=`${re}LoadingId`,ko=`data-${Ee}-loading-id`,I0=`${re}ErrorId`,ma=`data-${Ee}-error-id`,ip=`${re}AtomicBlockMark`,N0=`${re}ExcludeMark`,vb=`data-${Ee}-exclude-mark`,sp=`${re}StayOriginalMark`,kb=`${re}PreWhitespaceMark`,ga=`${re}InlineMark`,j0=`${re}BlockMark`,Ab=`${re}Left`,Db=`${re}Right`,Sb=`${re}Width`,Fb=`${re}Height`,Pb=`${re}Top`,Bb=`${re}FontSize`,kn="lastRunTime",Lb=`${re}GlobalStyleMark`,pa=["@","#"],fa=" --- ",z0=`
`,ht=`${Ee}-target-wrapper`,_b=`${Ee}-pdf-target-container`,H0=`${Ee}-target-inner`,Mb=`${Ee}-source-wrapper`,Ao=`${Ee}-target-translation-block-wrapper`,Rb=`${Ee}-root-translation-theme`,Lu=`${re}RootTranslationTheme`,U0=`${Ee}-target-translation-vertical-block-wrapper`,W0=`${Ee}-target-translation-pdf-block-wrapper`,q0=`${Ee}-target-translation-pre-whitespace`,Do=`${Ee}-target-translation-inline-wrapper`;var K0={underline:[{name:"borderColor",required:!1,type:"color"}],nativeUnderline:[{name:"borderColor",required:!1,type:"color"}],nativeDashed:[{name:"borderColor",required:!1,type:"color"}],nativeDotted:[{name:"borderColor",required:!1,type:"color"}],dotted:[{name:"borderColor",required:!1,type:"color"}],dividingLine:[{name:"borderColor",required:!1,type:"color"}],highlight:[{name:"backgroundColor",required:!1,type:"color"}],marker:[{name:"backgroundColor",required:!1,type:"color"}],dashed:[{name:"borderColor",required:!1,type:"color"}],blockquote:[{name:"borderColor",required:!1,type:"color"}],thinDashed:[{name:"borderColor",required:!1,type:"color"}],dashedBorder:[{name:"borderRadius",required:!1,type:"number",default:"0"},{name:"borderColor",required:!1,type:"color"}],solidBorder:[{name:"borderRadius",required:!1,type:"number",default:"0"},{name:"borderColor",required:!1,type:"color"}],marker2:[{name:"backgroundColor",required:!1,type:"color"}],wavy:[{name:"borderColor",required:!1,type:"color"}]},Gt=["auto","en","zh-CN","zh-TW","ja","ko","es","de","fr","pt","ru","ar","it","ms","id","vi","af","th","ur","am","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","el","eo","et","eu","fa","fi","fil","fj","fy","ga","gd","gl","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","ig","is","jw","ka","kk","km","kn","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","mt","mww","my","ne","nl","no","ny","otq","pa","pl","ps","ro","sd","si","sk","sl","sm","sn","so","sq","sr","sr-Cyrl","sr-Latn","st","su","sv","sw","ta","te","tg","tlh","tlh-Qaak","to","tr","ty","ug","uk","uz","wyw","xh","yi","yo","yua","yue","zu"],So={af:"Afrikaans",am:"Amharic",ar:"Arabic",auto:"Detect Language",az:"Azerbaijani",be:"Belarusian",bg:"Bulgarian",tn:"Zana",bn:"Bengali",bs:"Bosnian",ca:"Catalan",ceb:"Cebuano",co:"Corsican",cs:"Czech",cy:"Welsh",da:"Danish",de:"German",el:"Greek",en:"English",eo:"Esperanto",es:"Spanish",et:"Estonian",eu:"Basque",fa:"Farsi",fi:"Finnish",fil:"Filipino",fj:"Fijian",fr:"French",fy:"Frisian",ga:"Irish",gd:"Scottish Gaelic",gl:"Galician",gu:"Gujarati",ha:"Hausa",haw:"Hawaiian",he:"Hebrew",hi:"Hindi",hmn:"Hmong",hr:"Croatian",ht:"Haitian Creole",hu:"Hungarian",hy:"Armenian",id:"Indonesian",ig:"Igbo",is:"Icelandic",it:"Italian",ja:"\u65E5\u672C\u8A9E",jw:"Javanese",ka:"Georgian",kk:"Kazakh",km:"Khmer",kn:"Kannada",ko:"Korean",ku:"Kurdish",ky:"Kyrgyz",la:"Latin",lb:"Luxembourgish",lo:"Lao",lt:"Lithuanian",lv:"Latvian",mg:"Malagash",mi:"Maori",mk:"Macedonian",ml:"Malayalam",mn:"Mongolian",mr:"Marathi",ms:"Malay",mt:"Maltese",mww:"Bai Miao",my:"Burmese",ne:"Nepali",nl:"Dutch",no:"Norwegian",ny:"Nyanza (Chichewa)",otq:"Quer\xE9taro Otomi",pa:"Punjabi",pl:"Polish",ps:"Pashto",pt:"Portuguese (Portugal, Brazil)",ro:"Romanian",ru:"Russian",sd:"Sindhi",si:"Sinhala",sk:"Slovak",sl:"Slovenian",sm:"Samoan",sn:"Shona",so:"Somali",sq:"Albanian",sr:"Serbian","sr-Cyrl":"Serbian (Cyrillic)","sr-Latn":"Serbian (Latin)",st:"Sesotho",su:"Sundanese",sv:"Swedish",sw:"Swahili",ta:"Tamil",te:"Telugu",tg:"Tajik",th:"Thai",tlh:"Klingon","tlh-Qaak":"Klingon (piqaD)",to:"Tongan",tr:"Turkish",ty:"Tahiti",ug:"Uyghur",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",vi:"Vietnamese",wyw:"\u6587\u8A00\u6587",xh:"Bantu",yi:"Yiddish",yo:"Yoruba",yua:"Yucatan Mayan",yue:"Cantonese (Traditional)","zh-CN":"\u7B80\u4F53\u4E2D\u6587","zh-TW":"\u7E41\u9AD4\u4E2D\u6587",zu:"Zulu","<all>":"All Languages"};var $0=["https://immersive-translate.owenyoung.com/options/","https://immersive-translate.owenyoung.com/auth-done/","https://dash.immersivetranslate.com/","https://dash.immersivetranslate.com/auth-done/","http://localhost:8000/dist/userscript/options/","http://localhost:8000/auth-done/","http://192.168.50.9:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com","http://localhost:8000/options/","http://192.168.50.9:8000/options/"];var ha="zh-CN";var M0=[{type:"select",name:"codename",labelKey:"field.translationEngine",default:"youdao",required:!1,options:[{label:"translationServices.google",value:"google"},{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.aws",value:"aws"}]}],Ot={bing:{name:"\u5FAE\u8F6F\u7FFB\u8BD1",homepage:"https://www.bing.com/translator"},google:{name:"Google",homepage:"https://translate.google.com/"},deepl:{name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://immersivetranslate.com/docs/services/deepL/",allProps:[{name:"authKey",label:"Auth Key",required:!0,type:"password"}]},transmart:{name:"Transmart",homepage:"https://transmart.qq.com/"},openai:{name:"Open AI",homepage:"https://openai.com/api/",docUrl:"https://immersivetranslate.com/docs/services/openai/",allProps:[{name:"APIKEY",required:!0,type:"password"},{name:"model",labelKey:"field.model",descriptionKey:"description.model",required:!1,type:"select",default:"gpt-3.5-turbo",options:[{label:"gpt-3.5-turbo",value:"gpt-3.5-turbo"},{label:"gpt-4",value:"gpt-4"}]},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.limitPerSecond",descriptionLink1:"https://immersivetranslate.com/docs/services/openai/",type:"number",default:5},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0},{name:"apiUrl",labelKey:"field.apiUrl",required:!1,type:"text",default:"https://api.openai.com/v1/chat/completions",descriptionKey:"description.apiUrl",optional:!0},{name:"systemPrompt",label:"System Prompt",required:!1,descriptionKey:"description.systemPrompt",type:"text",optional:!0,default:"You are a translation engine, you can only translate text and cannot interpret it, and do not explain."},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:`Translate the text below to {{to}}:

{{text}}`,optional:!0}]},chatgpt:{name:"ChatGPT Web(3.5 mobile)",homepage:"https://chat.openai.com",beta:!0},youdao:{name:"Youdao",homepage:"https://youdao.com/",docUrl:"https://immersivetranslate.com/docs/services/youdao/",allProps:[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"}]},tencent:{name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://immersivetranslate.com/docs/services/tencent/",allProps:[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]},azure:{name:"azure",homepage:"https://learn.microsoft.com/en-us/azure/cognitive-services/translator/text-translation-overview",docUrl:"https://immersivetranslate.com/docs/services/azure/",allProps:[{name:"region",required:!0,default:"eastasia",type:"text"},{name:"APIKEY",required:!0,type:"password"}]},papago:{name:"Papago",homepage:"https://translate.google.com/",canary:!0},baidu:{name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://immersivetranslate.com/docs/services/baidu/",allProps:[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"}]},volc:{name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://immersivetranslate.com/docs/services/volcano/",allProps:[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"}]},caiyun:{name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://immersivetranslate.com/docs/services/caiyun/",allProps:[{name:"token",required:!0,type:"password"}]},cai:{name:"Cai",homepage:"https://fanyi.caiyunapp.com/",alpha:!0},mock:{name:"Mock",homepage:"https://www.google.com"},mock2:{name:"Mock2",homepage:"https://www.google.com"},tenAlpha:{name:"TenAlpha",homepage:"https://fanyi.qq.com/",alpha:!0},you:{name:"You",alpha:!0,homepage:"https://youdao.com/"},openl:{name:"Openl",homepage:"https://openl.club/",docUrl:"https://immersivetranslate.com/docs/services/openL/",allProps:[...M0,{type:"password",name:"apikey",required:!0}],props:M0},volcAlpha:{name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},d:{name:"D () ",alpha:!0,homepage:"https://www.deepl.com/translator"},dpro:{name:"DPro (Canary) ",canary:!0,homepage:"https://www.deepl.com/translator"},deeplx:{name:"DeepLX (Beta)",beta:!0,homepage:"https://www.deepl.com/translator",allProps:[{name:"url",label:"API URL",required:!0,type:"text"}]},niu:{name:"niutrans",homepage:"https://niutrans.com/",docUrl:"https://immersivetranslate.com/docs/services/niu",allProps:[{name:"APIKEY",required:!0,type:"password"}]}},Fo={type:re+"ChildFrameToRootFrameIdentifier"},Ea=["Alt","Ctrl","Shift","Auto","Off","OtherCustom","Other"];var _u=console,Po=class{#e=performance.now();reset(){this.#e=performance.now()}stop(t){let u=performance.now(),n=Math.round(u-this.#e),a=ft.green;n>1e4?a=ft.red:n>1e3&&(a=ft.yellow),_u.debug(ft.dim(pu+" TIMING:"),t,"in",a(n+"ms")),this.#e=u}},An=class{#e=1;get level(){return this.#e}setLevel(t){switch(t){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...t){this.#e<=0&&_u.log(ft.dim(pu+" DEBUG:"),...t)}v(...t){this.#e<=0}info(...t){this.#e<=1&&_u.log(ft.green(pu+" INFO:"),...t)}l(...t){this.#e<=1}warn(...t){this.#e<=2&&_u.warn(ft.yellow(pu+" WARN:"),...t)}error(...t){this.#e<=3&&_u.error(ft.red(pu+" ERROR:"),...t)}fatal(...t){this.#e<=4&&_u.error(ft.red(pu+" FATAL:"),...t)}timing(){return this.level===0?new Po:{reset:()=>{},stop:()=>{}}}},A=new An;var Bo=/iPhone/i,G0=/iPod/i,V0=/iPad/i,J0=/\biOS-universal(?:.+)Mac\b/i,Lo=/\bAndroid(?:.+)Mobile\b/i,Y0=/Android/i,Mu=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,ba=/Silk/i,It=/Windows Phone/i,X0=/\bWindows(?:.+)ARM\b/i,Q0=/BlackBerry/i,Z0=/BB10/i,el=/Opera Mini/i,tl=/\b(CriOS|Chrome)(?:.+)Mobile/i,ul=/Mobile(?:.+)Firefox\b/i,nl=e=>typeof e<"u"&&e.platform==="MacIntel"&&typeof e.maxTouchPoints=="number"&&e.maxTouchPoints>1&&typeof globalThis.MSStream>"u";function lp(e){return t=>t.test(e)}function ya(e){let t={userAgent:"",platform:"",maxTouchPoints:0};!e&&typeof navigator<"u"?t={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof e=="string"?t.userAgent=e:e&&e.userAgent&&(t={userAgent:e.userAgent,platform:e.platform,maxTouchPoints:e.maxTouchPoints||0});let u=t.userAgent,n=u.split("[FBAN");typeof n[1]<"u"&&(u=n[0]),n=u.split("Twitter"),typeof n[1]<"u"&&(u=n[0]);let a=lp(u),r={apple:{phone:a(Bo)&&!a(It),ipod:a(G0),tablet:!a(Bo)&&(a(V0)||nl(t))&&!a(It),universal:a(J0),device:(a(Bo)||a(G0)||a(V0)||a(J0)||nl(t))&&!a(It)},amazon:{phone:a(Mu),tablet:!a(Mu)&&a(ba),device:a(Mu)||a(ba)},android:{phone:!a(It)&&a(Mu)||!a(It)&&a(Lo),tablet:!a(It)&&!a(Mu)&&!a(Lo)&&(a(ba)||a(Y0)),device:!a(It)&&(a(Mu)||a(ba)||a(Lo)||a(Y0))||a(/\bokhttp\b/i)},windows:{phone:a(It),tablet:a(X0),device:a(It)||a(X0)},other:{blackberry:a(Q0),blackberry10:a(Z0),opera:a(el),firefox:a(ul),chrome:a(tl),device:a(Q0)||a(Z0)||a(el)||a(ul)||a(tl)},any:!1,phone:!1,tablet:!1};return r.any=r.apple.device||r.android.device||r.windows.device||r.other.device,r.phone=r.apple.phone||r.android.phone||r.windows.phone,r.tablet=r.apple.tablet||r.android.tablet||r.windows.tablet,r}var _o="DENO",xa="CHROME",Ta="FIREFOX";function al(e){let t=xa;try{let u=navigator?.userAgent||"";/firefox/i.test(u)?t=Ta:/deno/i.test(u)&&(t=_o)}catch{}return e===xa&&t===xa||e===Ta&&t===Ta||e===_o&&t===_o}function rl(){return al(xa)}function ol(){return typeof Deno<"u"}function wa(){return al(Ta)}function il(){return!!navigator.maxTouchPoints||"ontouchstart"in document.documentElement}function Dn(){return!!globalThis.matchMedia("(pointer:fine)").matches}var sl={addListener:()=>{},removeListener:()=>{},hasListener:()=>{}},ll={permissions:{contains:()=>{},request:()=>{}},runtime:{onMessage:sl,openOptionsPage:()=>{},lastError:{message:""}},storage:{sync:{get:()=>{},set:()=>{}}},tabs:{onUpdated:sl,query:()=>{},sendMessage:()=>{}}};var q;ol()?q=ll:q=globalThis.immersiveTranslateBrowserAPI;var u2=dl(2),cl=dl(3);function dl(e){if(typeof e!="number"||Number.isNaN(e)||e<1||e===Number.POSITIVE_INFINITY)throw new Error("`"+e+"` is not a valid argument for `n-gram`");return t;function t(u){let n=[];if(u==null)return n;let a=typeof u.slice=="function"?u:String(u),r=a.length-e+1;if(r<1)return n;for(;r--;)n[r]=a.slice(r,r+e);return n}}var cp=/\s+/g,dp=/[\t\n\v\f\r ]+/g;function ml(e,t){t?typeof t=="string"&&(t={style:t}):t={};let u=t.preserveLineEndings?mp:gp;return String(e).replace(t.style==="html"?dp:cp,t.trim?pp(u):u)}function mp(e){let t=/\r?\n|\r/.exec(e);return t?t[0]:" "}function gp(){return" "}function pp(e){return t;function t(u,n,a){return n===0||n+u.length===a.length?"":e(u)}}var gl={}.hasOwnProperty;function fp(e){return e==null?"":ml(String(e).replace(/[\u0021-\u0040]+/g," ")).trim().toLowerCase()}function hp(e){return cl(" "+fp(e)+" ")}function Ep(e){let t=hp(e),u={},n=-1;for(;++n<t.length;)gl.call(u,t[n])?u[t[n]]++:u[t[n]]=1;return u}function pl(e){let t=Ep(e),u=[],n;for(n in t)gl.call(t,n)&&u.push([n,t[n]]);return u.sort(bp),u}function bp(e,t){return e[1]-t[1]}var yp={cmn:/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,Latin:/[A-Za-z\u00AA\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uAB66-\uAB69\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A]|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]/g,Cyrillic:/[\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F]|\uD838[\uDC30-\uDC6D\uDC8F]/g,Arabic:/[\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C-\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u0870-\u088E\u0890\u0891\u0898-\u08E1\u08E3-\u08FF\uFB50-\uFBC2\uFBD3-\uFD3D\uFD40-\uFD8F\uFD92-\uFDC7\uFDCF\uFDF0-\uFDFF\uFE70-\uFE74\uFE76-\uFEFC]|\uD803[\uDE60-\uDE7E\uDEFD-\uDEFF]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]/g,ben:/[\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FE]/g,Devanagari:/[\u0900-\u0950\u0955-\u0963\u0966-\u097F\uA8E0-\uA8FF]|\uD806[\uDF00-\uDF09]/g,jpn:/[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g,jav:/[\uA980-\uA9CD\uA9D0-\uA9D9\uA9DE\uA9DF]/g,kor:/[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,tel:/[\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C77-\u0C7F]/g,tam:/[\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA]|\uD807[\uDFC0-\uDFF1\uDFFF]/g,guj:/[\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9-\u0AFF]/g,kan:/[\u0C80-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3]/g,mal:/[\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4F\u0D54-\u0D63\u0D66-\u0D7F]/g,mya:/[\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F]/g,pan:/[\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A76]/g,amh:/[\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]/g,tha:/[\u0E01-\u0E3A\u0E40-\u0E5B]/g,sin:/[\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4]|\uD804[\uDDE1-\uDDF4]/g,ell:/[\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65]|\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]/g},Mo={Latin:{spa:" de|de |os | la| a |la | y |\xF3n |i\xF3n|es |ere|rec|ien|o a|der|ci\xF3|a p|cho|ech|en |ent|a l|aci|e d|el |ona|na | co|as |al |da | to|ene|e l| en| el| pe|nte|tod|ho | su|per|ad | ti|a t|ers|tie| se|rso| pr|son|e s|te |oda|cia|n d|o d|dad|ida| in|ne | es|ion|cio|s d|con|est|a e| po|men| li|res|nci|su |to |tra| re|n e| lo|tad| na|los|a s| o |ia |que| pa|r\xE1 |pro| un|s y|ual|s e|lib|nac|do |ra |er |nal|ue | qu|e e|a d|ar |nes|ica|a c|sta|ser|or |ter|se |por|cci|io |des|ado|les|one|a a|del|l d|ndi| so| cu|s p|ale|s n|ame|par|ici|oci|una|ber|s t|rta|com| di|e a|imi|o s|e c|ert|o e|dos|las|o p|ant|dic|nto| al|ara|ibe|enc|cas| as|e p|ten|ali|o t|soc|y l|n c|s l|l t|pre|nta|so |tos|y a|ria|n t|die|a u| fu|no |l p|ial|qui|dis|s o|hos|gua|igu| ig| ca|sar| ma|l e| ac|tiv|s a|re |nad|vid|era| tr|ier|cua|n p|cla|ade|bre|s s|esa|ntr|ecc|a i| le|lid|das|d d|ido|ari|ind|ada|nda|fun|mie|ca |tic|eli|ta |y d|nid|e i|n l|ios|o y|esp|iva|y e|mat|bli|r a|dr\xE1|tri|cti|tal|rim|ont|er\xE1|us |sus|end|pen|tor|ito|ond|ori|uie|lig|n a|ist|rac|lar|rse|tar|mo |omo|ibr|odo|edi|med| me|nio|a y|eda|isf|lo |aso|l m|ias|ico|lic|ple|ste|act|tec|ote|rot|ele|ura| ni|ie |adi|u p|seg|s i|un |und|a n|lqu|alq|o i|inc|sti| si|n s|ern",eng:"the| th| an|he |nd |ion|and| to|to |tio| of|on |of | in|al |ati|or |ght|igh|rig| ri|ne |ent|one|ll |is |as |ver|ed | be|e r|in |t t|all|eve|ht | or|ery|s t|ty | ev|e h|yon| ha|ryo|e a|be |his| fr|ng |d t|has| sh|ing| hi|sha| pr| co| re|hal|nal|y a|s a|n t|ce |men|ree|fre|e s|l b|nat|for|ts |nt |n a|ity|ry |her|nce|ect|d i| pe|pro|n o|cti| fo|e e|ly |es | no|ona|ny |any|er |re |f t|e o| de|s o| wi|ter|nte|e i|ons| en| ar|res|ers|y t|per|d f| a | on|ith|l a|e t|oci|soc|lit| as| se|dom|edo|eed|nti|s e|t o|oth|wit| di|equ|t a|ted|st |y o|int|e p| ma| so| na|l o|e c|ch |d a|enc|th |are|ns |ic | un| fu|tat|ial|cia| ac|hts|nit|qua| eq| al|om |e w|d o|f h|ali|ote|n e| wh|r t|sta|ge |thi|o a|tit|ual|an |te |ess| ch|le |ary|e f|by | by|y i|tec|uni|o t|o o| li|no | la|s r| su|inc|led|rot|con| pu| he|ere|imi|r a|ntr| st| ot|eli|age|dis|s d|tle|itl|hou|son|duc|edu| wo|ate|ble|ces|at | at| fa|com|ive|o s|eme|o e|aw |law|tra|und|pen|nde|unt|oun|n s|s f|f a|tho|ms | is|act|cie|cat|uca| ed|anc|wor|ral|t i| me|o f|ily|pri|ren|ose|s c|en |d n|l c|ful|rar|nta|nst| ag|l p|min|din|sec|y e| tr|rso|ich|hic|whi|cou|ern|uri|r o|tic|iti|igi|lig|rat|rth|t f|oms|rit|d r|ee |e b|era|rou|se |ay |rs | ho|abl|e u",por:"de | de| se|\xE3o |os |to |em | e |do |o d| di|er |ito|eit|ser|ent|\xE7\xE3o| a |dir|ire|rei|o s|ade|dad|uma|as |no |e d| to|nte| co|o t|tod| ou|men|que|s e|man| pr| in| qu|es | te|hum|odo|e a|da | hu|ano|te |al |tem|o e|s d|ida|m d| pe| re|o a|ou |r h|e s|cia|a e| li|o p| es|res| do| da| \xE0 |ual| em| su|a\xE7\xE3|dos|a p|tra|est|ia |con|pro|ar |e p|is | na|r\xE1 |qua|a d| pa|com|ais|o c|ame|er\xE1| po|uer|sta|ber|ter| o |ess|ra |e e|das|o \xE0|nto|nal|o o|a c|ido|rda|erd| as|nci|sua|ona|des|ibe|lib|e t|ado|s n|ua |s t|ue | so|ica|ma |lqu|alq|tos|m s|a l|per|ada|oci|soc|cio|a n|par|aci|s a|pre|ont|m o|ura|a s| um|ion|e o|or |e r|pel|nta|ntr|a i|io |nac|\xEAnc|str|ali|ria|nst| tr|a q|int|o n|a o|ca |ela|u\xE7\xE3|lid|e l| at|sen|ese|r d|s p|egu|seg|vid|pri|sso|\xE9m |ime|tic|dis|ra\xE7|eci|ara| ca|nid|tru|\xF5es|ass|seu|por|a a|m p| ex|so |r i|e\xE7\xE3|te\xE7|ote|rot| le| ma|ing|a t|ran|era|rio|l d|eli|\xE7a |sti| ne|cid|ern|utr|out|r e|e c|tad|gua|igu| ig| os|s o|ru\xE7|ins|\xE7\xF5e|ios| fa|e n|sse| no|re |art|r p|rar|u p|inc|lei|cas|ico|u\xE9m|gu\xE9|ngu|nin| ni|gur|la |pen|n\xE7a|na |i\xE7\xE3|i\xE3o|cie|ist|sem|ta |ele|e f|om |tro| ao|rel|m a|s s|tar|eda|ied|uni|e m|s i|a f|ias| cu| ac|r a|\xE1 a|rem|ei |omo|rec|for|s f|esc|ant|\xE0 s| vi|o q|ver|a u|nda|und|fun",ind:"an |ang|ng | da|ak | pe|ata| se| ke| me|dan| di| be|ber|kan|ran|hak|per|yan| ya|nga|nya|gan| at|ara| ha|eng|asa|ora|men|n p|n k|erh|rha|n d|ya |ap |at |as |tan|n b|ala|a d| or|a s|san|tas|eti|uk |pen|g b|set|ntu|n y|tia|iap|k m|eba|aan| un|n s|tuk|k a|p o|am |lam| ma|unt| de|ter|bas|beb|dak|end|i d|pun|mem|tau|dal|ama|keb|aka|ika|n m| ba|di |ma | sa|den|au |nda|n h|eri| ti|ela|k d|un |n a|ebe|ana|ah |ra |ida|uka| te|al |ada|ri |ole|tid|ngg|lak|leh|dap|a p|dil|g d|ena|eh |gar|na |ert|apa|um |tu |atu|a m|sam|ila|har|n t|asi|ban|erl|t d|bat|uat|ta |lan|adi|h d|neg| ne|kum|mas|nan|pat|aha| in|l d|emp|sem|rus|sua|ser|uan|era|ari|erb|kat|man|a b|g s|rta|ai |nny|n u|ung|ndi|han|uku|huk| hu|sa |ers|in | la|ka | su|ann|car|kes|aku|dip|i s|a a|erk|n i|lai|rga|aru|k h|i m|rka|a u|us |nak|emb|gga|nta|iba| pu|ind|s p|ent|mel|ina|min|ian|dar|ni |rma|lua|rik|ndu|lin|sia|rbu|g p|k s|da |aya|ese|u d|ega|nas|ar |ipe|yar|sya|ik |aga| ta|ain|ua |arg|uar|iny|pem|ut |si |dun|eor|seo|rak|ngs|ami|kel|ini|g t|dik|mer|emu|aks|rat|uru|ewa|il |enu|any|kep|pel|asu|rli|ia |dir|jam|mba|mat|pan|g m|ses|sar|das|kuk|bol|ili|u k|gsa|u p|a k|ern|ant|raa|t p|ema|mua|idi|did|t s|i k|rin|erm|esu|ger|elu|nja|enj|ga |dit",fra:" de|es |de |ion|nt |tio|et |ne |on | et|ent|le |oit|e d| la|e p|la |it | \xE0 |t d|roi|dro| dr| le|t\xE9 |e s|ati|te |re | to|s d|men|tou|e l|ns | pe| co|son|que| au| so|e a|onn|out| un| qu| sa| pr|ute|eme| l\u2019|t \xE0| a |e e|con|des| pa|ue |ers|e c| li|a d|per|ont|s e|t l|les|ts |tre|s l|ant| ou|cti|rso|ou |ce |ux |\xE0 l|nne|ons|it\xE9|en |un | en|er |une|n d|sa |lle| in|nte|e t| se|lib|res|a l|ire| d\u2019| re|\xE9 d|nat|iqu|ur |r l|t a|s s|aux|par|nal|a p|ans|dan|qui|t p| d\xE9|pro|s p|air| ne| fo|ert|s a|nce|au |ui |ect|du |ond|ale|lit| po|san| ch|\xE9s | na|us |com|our|ali|tra| ce|al |e o|e n|rt\xE9|ber|ibe|tes|r d|e r|its| di|\xEAtr|pou|\xE9t\xE9|s c|\xE0 u|ell|int|fon|oci|soc|ut |ter| da|aut|ien|rai| do|iss|s n| ma|bli|ge |est|s o| du|ona|n p|pri|rs |\xE9ga| \xEAt|ous|ens|ar |age|s t| su|cia|u d|cun|rat| es|ir |n c|e m| \xE9t|t \xEA|a c| ac|ote|n t|ein| tr|a s|ndi|e q|sur|\xE9e |ser|l n| pl|anc|lig|t s|n e|s i|t e| \xE9g|ain|omm|act|ntr|tec|gal|ul | nu| vi|me |nda|ind|soi|st | te|pay|tat|era|il |rel|n a|dis|n s|pr\xE9|peu|rit|\xE9 e|t \xE9|bre|sen|ill|l\u2019a|d\u2019a| mo|ass|lic|art| pu|abl|nta|t c|rot| on| lo|ure|l\u2019e|ava|ten|nul|ivi|t i|ess|ys |ays| fa|ine|eur|r\xE9s|cla|t\xE9s|oir|eut|e f|utr|doi|ibr|ais|ins|\xE9ra|\u2019en|i\xE9t|l e|s \xE9|nt\xE9| r\xE9|ssi| as|nse|ces|\xE9 a",deu:"en |er |der|ein| un|nd |und|ung|cht|ich| de|sch|ng | ge|ine|ech|gen|rec|che|ie | re|eit| au|ht |die| di| ha|ch | da|ver| zu|lic|t d|in |auf| ei| in| be|hen|nde|n d|uf |ede| ve|it |ten|n s|sei|at |jed| je| se|and|rei|s r|den|ter|ne |hat|t a|r h|zu |das|ode| od|as |es | an|fre|nge| we|n u|run| fr|ere|e u|lle|ner|nte|hei|ese| so|rde|wer|ige| al|ers|n g|hte|d d| st|n j|lei|all|n a|nen|ege|ent|bei|g d|erd|t u|ren|nsc|chu| gr|kei|ens|le |ben|aft|haf|cha|tli|ges|e s| si|men| vo|lun|em |r s|ion|te |len|gru|gun|tig|unt|uch|spr|n e|ft |ei |e f| wi| sc|r d|n n|geh|r g|dar|sta|erk| er|r e|sen|eic|gle| gl|lie|e e|tz |fen|n i|nie|f g|t w|des|chl|ite|ihe|eih|ies|ruc|st |ist|n w|h a|n z|e a| ni|ang|rf |arf|gem|ale|ati|on |he |t s|ach| na|end|n o|pru|ans|sse|ern|aat|taa|ehe|e d|hli|hre|int|tio|her|nsp|de |mei| ar|r a|ffe|e b|wie|erf|abe|hab|ndl|n v|sic|t i|han|ema|nat|ber|ied|geg|d s|nun|d f|ind| me|gke|igk|ie\xDF| fa|igu|hul|r v|dig|rch|urc|dur| du|utz|hut|tra|aus|alt|bes|str|ell|ste|ger|r o|esc|e g|rbe|arb|ohn|r b|mit|d g|r w|ntl|sow|n h|nne|etz|raf|dlu| ih|lte|man|iem|erh|eru| is|dem|lan|rt |son|isc|eli|rel|n r|e i|rli|r i| mi|e m|ild|bil| bi|eme| en|ins|f\xFCr| f\xFC|gel|\xF6ff| \xF6f|owi|ill|wil|e v|ric|f e",jav:"ng |an | ka|ang|ing|kan| sa|ak |lan| la|hak| pa| ha|ara|ne |abe| in|n k|ngg|ong|ane|nga|ant|won|uwo| an| uw|nin|ata|n u|en |ra |tan| da|ran|ana| ma|nth|ake|ben|beb|hi |ke |sab|nda| ng|adi|thi|nan|a k| ba|san|asa|ni |e h|e k|g k| ut|pan|awa| be|eba|gan|g p|dan| wa|bas|aka|dha|yan|sa |arb|man| di|wa |g d| na|g n|ban| tu|n s|ung|wen|g s|rbe|dar|dak|di |g u|ora|aya|be |ah |a s|eni| or|han|as | pr|a n|na |iya|a a|kar|at |a l|mar|uwe|duw|uta|und|n p|asi|pa | si|ala|n n| un|kab|oni|ya |i h|gar|g b|yat|tum|ta |n m|i k|apa|taw| li|ani| ke|al |ka |kal|ngk|ega| ne|nal|n i|g a|ggo|ina|we |ena|dad|iba|awi|aga|a p| ta|sar|adh|awe|and|uju|ind|min|sin|ndu|uwa|gge|n l|ggu|ngs|n b|a b|pra|iji|n a|ha | bi|kat|go | ku|e p|ron|kak|ngu|a u|gsa|war|nya|g t|pad|bis|k b|i w|ae |wae| nd|ali|a m|er |sak|e s|ku |liy|ama|i l|eh |isa|arg|n t|a d|kap|i s|ayo|gay| pe|ndh|bad|pri|neg|tow|uto|eda|bed|il |ih | ik|ur |k k|rta|art|i p|rga|lak|ami|ro |aro|yom|r k|e d|a w|kon|rib|eng|ger|g l|ras|dil| ti|k l|rap|mra|uma| pi|k h|n d|gaw|wat|ga |k n|ar |per| we|oma|k p|jro|ajr|saj|ase|ini|ken|saw|ona|nas|kas|h k|i t| um|tin|wo | me|aba|rak|pag|yar|sya|t k| te| mu|ngl| ni|i b|men|ate|a i|aku|ebu|a t| du|g m|owo|mat| lu|amp",vie:"ng |\u0323c |\u0301c | qu|a\u0300 | th|nh | ng|\u0323i |\u0300n |va\u0300| va| nh|uy\xEA| ph|quy| ca|\xEA\u0300n|y\xEA\u0300|\u0300nh|\u0300i |\u0323t | ch|o\u0301 | tr|ng\u01B0|i n| gi|g\u01B0\u01A1|\u01A1\u0300i|\u01B0\u01A1\u0300|\u0301t | co|\u01B0\u01A1\u0323| cu|a\u0301c|\u01B0\u0323 |\u01A1\u0323c| kh| \u0111\u01B0|\u0111\u01B0\u01A1| t\u01B0|co\u0301| ha|\xF4ng|c t| \u0111\xEA|n t|i \u0111|i\u0300n|\u0300u |ca\u0301|gia|\u0301i |o\u0323i|mo\u0323| mo|\xEA\u0300u|i\xEA\u0323|\u0111\xEA\u0300|u c|nh\u01B0|pha| ba| bi|\xE2\u0301t|\u0309a |u\u0309a|cu\u0309|h\xF4n| \u0111\xF4|g t|\u0301 q|\u0303ng| ti|t\u01B0\u0323|t c|\u0323n | la|n \u0111|n c|n n|hi\xEA|ch |ay |hay| vi|\xE2n | \u0111i| na|ba\u0309| ho|do | do| t\xF4| hi|\xF4\u0323i|ha\u0301|i\u0323 |na\u0300|\u0300 t|\u01A1\u0301i|h\xE2n| m\xF4|\u0301p |a\u0300n|\u0323 d|\u0301ch|\u0323p |\u0300o |a\u0300o|kh\xF4|\u0301n |\xF4\u0323t|m\xF4\u0323| h\xF4|ia |\xF4\u0301c|c h|h\u01B0\u0303|i v|g n|\u0301ng|u\xF4\u0301|qu\xF4|h t|\xF4n |\xEAn |n v|nh\xE2|\u0323 t| b\xE2|i c|g v|\u0309ng|i\xEA\u0301|c c|\xE2\u0323t|th\u01B0|h\u01B0 |\u01B0\u01A1\u0301|\u0309n | v\u01A1| c\xF4|c \u0111| \u0111o| s\u01B0|t t|\xF4\u0323c|\u01B0\u0303n|v\u01A1\u0301| v\xEA|a\u0309 |\u0323ng|g \u0111|\u0309o |a\u0309o|u\xE2\u0323| \u0111a|bi\u0323|la\u0300|s\u01B0\u0323|b\xE2\u0301|ha\u0300|h\xF4\u0323|i t|a\u0309n|h\u01B0\u01A1|\u0300ng|tro|\u0309m |o v| mi|\xEA\u0309 |u\u0323c|i h|\u01B0\u0301c|a\u0301p|g c|\u0303 h|ia\u0301|n b|\u0309i |a m|h c|c\xF4n|\xEA\u0323n|\u01A1\u0301c|ha\u0323|\u0111\xF4\u0323| du| c\u01B0|a c|n h|tha|a\u0303 | xa|\u0301o |a\u0301o|i\u0301n|\u0300y |g b| h\u01B0|g h|ong|ron|\u0300 c|cho|\u0300 n|mi\u0300|\u01B0\u0323c|h v|c b| lu|i b|\xEA\u0323 |ai |\xEA\u0301 |\u0323 c|xa\u0303|kha|c q|i\xEA\u0309|t\xF4\u0323|\xF4\u0301i|\u0111\xF4\u0301|a\u0301 |hoa|o h|h \u0111|ca\u0309|n l|ho\u0323|ti\xEA|y t|\u0309 c|a\u0323i|a\u0301n|\u0300 \u0111|oa\u0300|y \u0111|chi|\u0309 n|ph\xE2|\xEA\u0300 |thu|i\xEAn|du\u0323|o c|i m|lu\xE2|c p|\xF4\u0301n|c l|\u0301 c|u\u0303n|cu\u0303|c g|c n|qua|n g|c m|o n|a\u0309i|ha\u0309|\u0301 t|ho |v\xEA\u0300| t\xE2| h\u01A1|o t|\u01A1\u0309 |h\u01B0\u0301|hi\u0300|vi\xEA|\u0300m |\u0309 t|\u0111o\u0301|th\xF4|\u01B0\u0301 |c\u01B0\u0301|hi\u0301|\u0301nh|a\u0300y|\u01A1\u0309n|\u01B0\u01A1\u0309| b\u0103|tri| ta|m v|c v|\u01A1\u0323p|h\u01A1\u0323|h m| n\u01B0|\xEA\u0301t|thi|\u0103\u0323c|ngh|uy ",ita:" di|to | in|ion|la | de|di |re |e d|ne | e |zio|rit|a d|one|o d|ni |le |lla|itt|ess| al|iri|dir|tto|ent|ell|i i|del|ndi|ere|ind|o a| co|te |t\xE0 |ti |a s|uo |e e|gni|azi| pr|idu|ivi|duo|vid|div|ogn| og| es|i e| ha|all|ale|nte|e a|men|ser| su| ne|e l|za |i d|per|a p|ha | pe| un|con|no |sse|li |e i| o | so| li| la|pro|ia |o i|e p|o s|i s|in |ato|o h|na |e s|a l|e o|nza|ali|tti|o p|ta |so |ber|ibe|lib|o e|un | a | ri|ua |il | il|nto|pri|el | po|una|are|ame| qu|a c|ro |oni|nel|e n| ad|ual|gli|sua|ond| re|a a|i c|ri |o o|sta|ita|i o| le|ad |i a|ers|enz|ssi|\xE0 e|it\xE0|gua|i p|e c|io | pa|ter|soc|nal|ona|naz|ist|cia|rso|ver|a e|i r|tat|lle|sia| si|rio|tra|che| se|rt\xE0|ert|anz|eri|tut|\xE0 d|he | da|al |ant|qua|on |ari|o c| st|oci|er |dis|tri|si |ed | ed|ono| tu|ei |dei|uzi|com|att|a n|opr|rop|par|nes|i l|zza|ese|res|ien|son| eg|n c|ont|nti|pos|int|ico|r\xE0 |sun|ial|lit|sen|pre|tta|dev|nit|era|eve|ll |l i| l |nda|ina|non| no|o n|ria|str|d a|art|se |ssu|ica|raz|ett|sci|gio|ati|egu| na|i u|utt|ve | ma|do |e r|ssa|sa |a f|n p|fon| ch|d u|rim| fo|a t| sc|tr\xE0|otr|pot|n i| cu|l p|ra |ezz|a o|ini|sso|dic|ltr|uni|cie| ra|i n|ruz|tru|ste| is|der|l m|a r|pie|lia|est|dal|nta| at|tal|ntr| pu|nno|ann|ten|vit|a v",tur:" ve| ha|ve |ir |ler|hak| he|her|in |lar|r h|bir|ya |er |ak |kk\u0131|akk|eti| ka| bi|eya|an |eri|iye|yet|ara|ek | ol|de |vey|\u0131n |\u0131r |nda|ar\u0131|esi|\u0131n\u0131|d\u0131r| ta|tle|e h|as\u0131|etl|e k| va|\u0131 v|s\u0131n|ile|ne |rke|erk|ard|ine| sa|\u0131nd|ini|k h|k\u0131n|ama|le |tin|rd\u0131|var|a v| me|e m|na |sin|ere|k v| \u015Fa| bu|lan|kes|dir|rin|dan| ma|k\u0131 |mak|\u015Fah|da | te|mek| ge|n\u0131 | hi|nin|en |n h| se|lik|rle|ana|lma|e a|\u0131 h|r \u015F|ill|si | de|aya|zdi|izd|aiz|hai|ret|hi\xE7|\u0131na| i\u015F|e b| ba|kla|et | h\xFC|r\u0131n|n k|ola|nma|e t| ya|eme|riy|n v|e i|a h|li |mil|eli|ket|ik |kar|irl|h\xFCr|im |evl|mes|e d|ahs|ma |rak|ala|let|lle|un | ed|rri|\xFCrr|bu | mi|i v|dil| il| e\u015F|n i|la |el |mal| m\xFC| ko|e g|se | ki|mas|lek|mle|mem|n b|ili|e e|ser| i\xE7|n s|din| di|es |mel|eke|tir|\u015Fit|e\u015Fi|r b|akl|yla|n m|len| ke|edi|oru|nde|re |ele|ni |t\xFCr|a k|eye|\u0131k |ken|u\u011Fu| uy|eml|erd|ede|ame| g\xF6|e s|i m|tim|i b|rde|r\u015F\u0131|ar\u015F|a s|it |t v|siy|ar |rme|est|bes|rbe|erb|te |al\u0131| an|ndi|end|hs\u0131|unm|r\u0131 |kor|n\u0131n| ce|maz|mse|ims|kim|i\xE7 | ay|a m|lam|ri |s\u0131z|a b|ade|n t|nam|lme|ilm|k g|il |tme|etm|r v|e v|n e|\u011Fre|\xF6\u011Fr| \xF6\u011F|al |\u0131yl|olm|vle|\u015Fma|i s|ger|me | da|ind|lem|i o|may|cak|\xE7in|i\xE7i|nun|kan|ye |e y|r t|az |\xE7 k|ece|s\u0131 |eni| mu|ulu|und|den|lun| fa|\u015F\u0131 |ahi|l v|r a|san|kat| so|enm| ev|i\u015F ",pol:" pr|nie|pra| i |nia|ie |go |ani|raw|ia | po|ego| do|wie|iek|awo| ni|owi|ch |ek |do | ma|wo |a p|\u015Bci|ci |ej | cz| za| w |ych|o\u015Bc|rze|prz| ka|wa |eni| na| je|a\u017Cd|ka\u017C|ma |z\u0142o|cz\u0142|no\u015B|o d|\u0142ow|y c|dy |\u017Cdy|i p|wol| lu|ny |oln| wy|stw| wo|ub |lub|lno|rod|k m|twa|dzi|na | sw|rzy|aj\u0105|ecz|czn|sta| sp|owa|o p|spo|i w|kie|a w|zys|obo|est|neg|a\u0107 |mi |cze|e w|nyc|nic|jak| ja|wsz| z |jeg|wan|\u0144st|o s|a i|awa|e p|yst|pos|pow| r\xF3|o o|j\u0105c|ony|nej|owo|dow|\xF3w | ko|kol|aki|bez|rac|sze|iej| in|zen|pod|i i|ni | ro|cy |o w|zan|e\u0144s|no |zne|a s|lwi|olw|ez |odn|r\xF3w|odz|o u|ne |i n|i k|czy| be|acj|wob|inn| ob|\xF3wn|zie| ws|aln|orz|nik|o n|icz|zyn|\u0142ec|o\u0142e|po\u0142|aro|nar|a j|i z|t\u0119p|st\u0119|ien|cza|o z|ym |zec|ron|i l|ami| os|kra| kr|owe| od|ji |cji|mie|a z|bod|swo|dni|zes|e\u0142n|pe\u0142|iu |edn|iko|a n|raj| st|odo|zna|wyc|em |lni|szy|wia|nym|\u0105 p|j\u0105 |ze\u0144|iec|pie|st |jes| to|sob|kt\xF3|ale|y w|ieg|och|du |ini|war|zaw|nny|roz|i o|wej|i\u0119 |si\u0119| si|nau| or|o r|kor|e s|pop|zas|niu|z p|owy|w k|ywa| ta|ymi|hro|chr| oc|jed|ki |o t|ogo|oby|ran|any|oso|a o|t\xF3r| kt|w z|dne|to |tan|h i|nan|ejs|ada|a k|iem|aw |h p|wni|ucz|ora|a d| w\u0142|ian| dz| mo|e m|awi|\u0107 s|gan|zez|mu |taw|dst|wi\u0105|w c|y p|kow|o j|i m|y s|bow|kog|by |j o|ier|mow|sza|b o|ju |yna",swh:"a k| ya|na |wa |ya | ku|a m| na| ha|i y| wa|a h|a n|ana|aki|ki |la |hak| ka|kwa|tu | kw| ma|li |a a|ila|i k| ki|ni |a w|ali|a u| an| mt|ke |mtu|a y|ake|ati|kil|ka |ika|kat|ili|te |ote|we |a s|e k|ia |zi |u a|za |azi|ifa|ma |yak|yo |i n|ama| yo|au | au|e a|kut|amb|o y|ha |asi|fa |u w|hal|ara|sha|ish|ata|ayo| as|tik|u k| za|i z|ina|u n|mba|uhu|hi |hur|cha|yot|ru |uru|wat| ch|eri|ngi|e y|u y|i a|aif|tai| sh|nay|chi|ra |ani| bi| uh|sa | hi|i h|awa|iwa|a j|ti |mu |o k|ja |kan|uli|iwe|any|i w| am|e n|end|atu|kaz|o h|ria|her|she|shi|nch| nc|uta|ye |wak|ii |ele|ami|adh|eza| wo|iki|oja|moj|jam| ja|aka|bu |kam|kul|mat|fan|a l|agu|ind|ne |iri|lim|wen|da |kup|uto|i m|a b|ini|wan|bil| ta|sta|dha| sa| ni|ao | hu|e w|wot| zi|rik|kuf|aji|ta |wez|nya|har| ye|e m|si |lin| ut|ine|gin|ing| la|a t|zim|imu|ima|tak|e b|uni|ibu|azo|kos|yan|nye|uba|ari|ahi|nde|asa|ri |ham|dhi|eli|hir|ush|pat| nd|kus|maa|di |nda|oa |bar|bo |mbo|oka|tok|ndw|ala|wal| si|uzi|hii|tah|i s|o n|liw| el|upa|zin|hag|a c|ndi|ais|mai|eny|mwe|aa |ewe| al|ndo|e h|lo |umi|kuh|jib|osa|mam|a z|ufu|dwa|u i| in|iyo|nyi| ny|u m|sil|ang|o w|guz|zwa|uwa|kuw|hil|saw|uch|ufa|laz|und|aha|ua | mw|bal| lo|o l|a i|del|nun|anu|nji| ba|lik|le |uku|i i",sun:"an |na |eun|ng | ka|ana| sa| di|ang|ung|un |nga|ak | ha|keu| ba|a b| an|nu |hak| bo|anu|ata|nan|a h|ina| je|aha|ga |ah |awa|jeu| na|ara|ing|oga|bog|gan| ng|asa|kan|a s|ha |ae |bae|n k|a k| pa|a p|sah|g s|sar| si|sin|a n|din|n s|ma | at|aga|a a|tan| ku| ma|n a|san|man|wa |lah|pan|taw|u d|ra |ari|eu | pi|gar| pe|kat| te|n p|sa |per|a d|a m|e b|aan|ban|ran|ala|ike|n n|kum| ti|ama|a j|pik|ima|n d|al |at | ja|ila|ta |nda|bas|rim|teu|n b|eba|beb|udu|aya|ika|ngg|nag|kab|rta|art| me|ola|k n|uma|atu|aba|g k|adi|aca| po|ngt|nar|una|ate|oh |boh|awe|di |tin|asi|uku|n h|dan|aka|iba|car|sac|gaw|are|ent|um |jen|abe|u s|dil|pol|ar |ku |kud|u m|upa|han| hu|ake|bar|ur |hna|aru|h s|a t|sak|wat|kaw| so|n t|pa |mpa|du |ngk|g d|ena|huk| mi|mas|ngs|ti |n j|ka |aku|ren|n m| ta|law|isa| tu|und|a u|h a|tay|ula|aja|ali|nte|gsa|en |gam| wa|ieu|ere|k h|jal|h b|il |dit|ngu|lan|asu|yun|ayu|gta|k d|a r|g n|mah|uda|dip|kas|rup|geu| be|ter|sej|min|ri |ern|u p|k k|amp|ura|kal|e a|k a|ut |g b|nak|bis| bi|k p|tes|end|we |h k|tun|uan| un| de|u n|h t|ksa|u k|ian|wil|u b|ona|nas|uka|rak|eje| se|ami| ke|war| ra| ie|k j|eh |ya |lma|alm|pen|tur|wan|lak|h j|g a|ean|up |rga|arg|r k|u t| ne|deu|gal|gke|e t|h p| ge|g t| da|i n",ron:" de|re | \xEEn|\u0219i |are|de | \u0219i|te |ul | sa|rep|e d|ea |ept|dre|tul|e a| dr|ie |\xEEn |ptu|le |ate|la |e p| la| pe|ori| pr|ce |e s| or|au |tat| ar|ice|ii |or |a s| fi| a |ric|ale|per| co|n\u0103 |\u0103 a|rea|ers|i s| li|sau| ca|rso|ent|lor|a\u021Bi|al |a d|e o|men|l l|ei |e c|pri|an\u0103| ac| re|uri|ber|ibe|lib|a p|oan|soa| in|i l|ter| al| s\u0103|tea|l\u0103 |car|t\u0103\u021B|s\u0103 |tur|i a|i d|nal| ni|ri |ita|e \xEE|e \u0219|se |ilo|in |ia |\u021Bie|pre|fie|\u021Bii|\u0103\u021Bi|con|ere|e f|a o|eni|nte| nu| se|ace|ire|ici| cu|i \xEE|a c|i n|a l|pen|ui |nu |\u0103ri|al\u0103|ona|l d|r\u0103 |ert|ril| su|ntr|n c|rin| as|ni |i o|eri|t\u0103 |c\u0103 |ile|\u0103 d|i c|e n|ele|sa | mo|i p|fi |sal|tor|va |oci|soc|nic|pro| un| tr|est|in\u021B|a \xEE|uni|n m|a a| di|ecu|lui|sta|lit| po|tre|gal|ega|oat|ra |act|\u0103 \xEE|leg|u d|e l|nde|int|a f|n a| so|na\u021B|ara|i f|uie|iun| to|tar|ste|ces|rar|at | ce|eme|i \u0219|rec|dep| c\u0103| o | \xEEm|bui|ebu|reb| eg| na|m\xE2n|ntu|ili|v\u0103\u021B|\xE2nd|iei|r \u0219|bil|pli|od |mod|res|din|e e|c\u021Bi| au|ali|\u0103 p|\u0103 f|\xEEmp|ial|cia|ion|\u0103 c|dec|nta| om|it\u0103| fa|\u021B\u0103 |cu |tra|\u0103\u021B\u0103|nv\u0103|\xEEnv|\xE2t |ite|i i|lic| pu| ex|riv|tri|rot|\u021Ba |\u021Bi |l c|rta|imi|ulu|\u021Bio|ic\u0103|lig|rel|ta |cla|t \xEE|nt |nit|e m|\xE2nt|\u0103m\xE2|\u021B\u0103m|ger|n\u021Ba|ru |tru|gur|u c|bli|abi|at\u0103|art|par|ar |rim|iva|l \u0219| sc|ime|nim|era|sup|ind|u a|dic|ic | st| va|ini|igi|e r",hau:"da | da|in |a k|ya |a d| ya|an |a a| ko| wa|na | a |sa | ha|kin|wan|ta | ba|a s| ta|a y|a h|wa |ko | na|n d|a t|ba |ma |n a| ma|iya|hak|asa| sa|ar |ata|yan| za|akk|a w|ama| ka|i d|iki|a m|owa|a b| ci| mu| sh|anc|nci|kow|a z|ai |nsa|a c|shi| \u0199a|cik|ne |ana|i k|ci |kki|e d|a \u0199| ku|su |n y|uma|ka |uwa|kum|hi |a n|utu| yi|ani| ga| ra|aka|ali|mut|\u2018ya|tar| do|\u0257an|ars| \u2018y|sam|\u0199as|nda|ane|man|tum|i a|yi |ni | du|ada| su|and|a g|cin| ad|a i|ke | \u0257a|n k|yin|um |e m| ab|ins|nan|ki |mi |ami|yar|min|oka|re |i b|kam|mas|i y|mat|za |ann|en |a\u0257a| ja|m n|li |duk|dai|e s|n s|ra |n w|n h|aik| ai|ida|ga |san|rsa|aba|sar|ce |nin| la|o n|ban|nna|kan|abi|una|dam|me |ara|i m|hal|a r|add|are|n j|abu| ne|zai|a \u0257|wat|ari| \u0199u|on |ans|wa\u0257|ame|ake|kar|din|zam| fa|a l|\u0199un|buw|r d| hu|oki|kok|a \u2018|u d|n t|abb|aur| id|rin|yak|dok|kiy|ray|jam|n b|ubu|bub|n m|i s| an|am |ili|bba|omi|dan|gam|ayu|ash|nce|tsa|ayi|har|yya|ika|bin|han|kko|rsu|aif|imi|fa | am|i i|dom| ki|yuw|dun|o a|fan|n \u0199|aya|fi |n r|she|uni|bay|riy|n \u2018|sab| iy|bat|tab|aga| ir|mar|o w|i w|sha|awa| ak|uns|unc|tun|u k| il|\u0257in|mfa|amf|aci|ewa|kas|lin|n n|don|n i|ure|ifi|lai|dda| ts|iri|aye|un |tan|wad|gwa|afi| ay|ace|mba|amb|aid|nta|ant|war|lim|kya| al|a\u0257i",fuv:"de | e |e n| ha|nde|la | wa|ina| ka|akk| nd|\u0257o |na | in|e e|hak|al |di |i h|kke|ii |um |ko |ala|ndi| mu| ne|lla| jo|wal|e\u0257\u0257|ne\u0257|all|mum| fo|kal|jog|ke |aaw|taa| ko|eed|\u0257\u0257o|aa | le|ji |ade|aad|laa|o k| ng|e h| ta|re |ogi|a j|e w|e m|nnd|gii|e l|ley|awa|aag|ede|waa|e k|gu |e d| go|gal|\u0253e |ti |fot|aan|eyd|ydi|\u0257e |ee | re|ol |oto|i e|oti|m e|taw|nga|a i|kee|to |ann|eji|am |ni | wo|een|goo|eej|e f| he|enn|gol|agu|pot| po|dee|ay | fa|ka |a k|ond|oot| de|a f|o f|a n|wa |maa|ota|le |hay|i k|o n|ngo|e j|o t| ja|\xF1aa|hee|nka|i w|awi|a w|ngu|der| to|e t|dim|i n|fof|i f|e g|tee|naa|aak| do|too|a e|ndo|ren|dii|oor|er |o e|i m|of | sa| so|gaa|ani|kam| ma| \xF1a|o w|i l|u m|kaa|ima|dir| ba|igg|lig| li|aar| \u0253e|o i|e s| o |e r|so |ooj| nj| la|won|awo|dow|woo|faw|and|e i|ore|nge|nan|are|a t|tin|aam| mo|\u0257ee|ita|ira|aa\u0257|e p|nng|ma |ank|yan|nda|oo |e \u0253|njo|ude|nee|e y|e a|je | ya|en |ine|iin| di|ral| na|\u0257i |und| hu|inn|\u014Bde|a\u014Bd|ja\u014B|a d|den| fe| te|go | su|a h|haa|tal|e\u0257e|e b|y g|baa|tde| yi|\u0257\u0257a|o h|ii\u0257|ow | da|do |l n|alt| ho|l e|aga|mii| aa|a a|ama|nna|m t| ke|edd|oga|m w|l m|o j|a\u0257e|ree|oje|yee| no|ele|ne |ago| pa| al|guu|wi |ge |aa\u0253|daa|ind|dew|i j|jey| je|ent|tan|o \u0257|ge\u0257| ge|\xF1ee|a l| \u0257u|kko|mak|a s| ga",bos:" pr| i |je |rav|na |ma |pra| na|ima| sv|a s|da |a p|vo |nje|ko |ako|anj|o i| po|avo|ja |e s|a i|ti | im| da| u |sva|no |ju | za|o n|va |i p|ili|vak|li | ko|ne | il|koj| ne|nja| dr|ost| sl|van|im |i s|u s|i i|a n|ava|ije|a u| bi|stv|se |a d|om |jed|bod|obo|lob|slo| se| ra|ih |sti| ob| je|pri|enj|dru|u i|o d|iti|voj|raz|ova|dje| os|e i|lo |e p| nj|uje|i d|bra|tre| tr| su|jeg|i n|u z|a k|og |u p|oje|cij|reb|a o|a b|lju|i u|ran|mij|ni |nos|jen|ba |edn|svo| iz|jel|pro|e d|\u017Eav|bit| ni|i o|sta|a z|avn|vje| ka|bil|ovo|a j|aju|ist|nih|tu |red|gov| od|e o|oji| sm|lje|o k|ilo|ji |aci|e u|e n|pre|o p|eba|u o|su |vim|i\u010Dn| sa|u n| dj|a t|ija|\u010Dno|jem|r\u017Ea|dr\u017E|elj|stu|dna|odn|eni|za |iva|olj|\u0161ti|nom|em |du |vno|smi|jer|e b|de |pos|m i| do|u d|nak|a r|obr| mo|lja|nim|ego| kr|tit|kri|ve |nju|an |iko|nik|nu |i m|nog|eno|sno| st|e k|tup|rug|ka |oda|riv|vol|aln|m s|itu|a\u0161t|za\u0161|ani|sam|akv|ovi|osn|rod|aro| mi|tva|dno|nst|jan|ak |ite|vi\u010D|rad|u m| ta|dst|tiv|nac|rim|kon|ku |odu|\u017Eiv|amo|tvo|tel|pod|g p|nov|ina|nar| vj|o s|i b|oj | ov|ave|vu |ans|oja|zov|azo|ude|bud| bu|e t|i v|din|edi|nic|tan|nap|mje| is|jal|slu|pun|eds|o o|zak|jav|i k|m p|tno|ivo|ere|ni\u010D|m n|jim|kak|ada|vni|ugi| ro|mov|ven|pol|to |te | vr",hrv:" pr| i |ma |rav|ima|pra|je |na | sv|ti | na|a p|vo |vat|ko |a s|nje| po|anj|avo|o i|tko| im|a i|sva|no |i p|e s|ja |o n| za|ju |ili| u |va |li | bi|ne |i s|atk| il|iti|da | ne| ko| dr| sl|van|nja|koj|ije| ra|ova| os|u s|i i|ost|bod|obo|lob|slo|pri|a n|om |jed|ati|ih |im |voj|ava| ob|stv|se | mo|i u|bit|dru| je| se|dje|i o|enj| ka|i n|sti|lo |u i|svo|mij|ni |e i|raz|a o|e n|bra|o p| su|a b|u p|ran|a k|og |i d|bil|ako|e p|a d|edn|aju|mor|eni| nj|iva|jel|\u017Eav| ni|a z|avn|ovi|eno|ra |oje|a j| da|a u|ora|jeg| iz|nih|r\u017Ea|dr\u017E|oji|sno|nit|jen|vje|ilo|cij|oda|nim| dj|pro|tit|u z|e d|red|nom|jem| od|nos|sta|nov|osn| sm|lje|o s|ji |ovo|stu|pos|vim| do|odn|rad|ist| sa|e o|tu |nju|em |gov|o d|rod|i m|jer|aci|oj |pre|m i|nak|dna|a r|lju|uje|e m|obr|za |olj|ve |o o|m s|an |nu |du |aro|vno|smi|aln|e k|o k|i b|e u|tva|u u|tup|rug|dno|u o|su |u d|ka |vol| ta|ija|itu|\u0161ti|a\u0161t|za\u0161|itk|\u017Eiv|ani|sam|elj| st|sob|oso|nar|akv|ada| mi|te |ona|nst|jan|lja|i v|ite|ego|elo|rim|ku |odu|amo|tvo|tel|jim|pod|nog|vi |ina| vj|to |e b|ans|zov|azo|ak | sk|edi|tan|oju|pun|pot|oti|kon|zak|i k|m p|tno|ivo|ere|ni\u010D|kak|vni|ugi| ro|mov|ven|\u0161tv| be|ara|kla|ave|u b|avi|oja|jal|u m|dni|mje|rak|din|\u0107i |ju\u010D|klj|nic|u k|nap|obi|atn",nld:"en |an |de | de| he|ing|cht| en|der|van| va|ng |een|et |ech| ge| ee|n e|rec| re|n v|n d|nde|ver| be|er |ede|den| op|het|n i| te|lij|gen|zij| zi|ht |ijk|eli| in|t o| ve|op |and|ten|ke |ijn|e v|jn |ied| on|eft| ie|sch|n z|n o|aan|ft |eid|te |oor| we|ond|eef|ere|hee|id |in |rde|n w|t r|aar|rij|ord|wor|ens|of | of|hei|n g| vr| vo| aa|r h|hte| wo|n h|al |nd |vri|e o|ren|le |or |n a|jke|lle|eni|n b|ij |e e|g v| st|ige|die|e g|men|nge|t h|e b| za|e s|om |t e|ati|wel|erk|sta|ers| al| om|n t|zal|dig| me|ste|voo|ter|gin|re |ege|ge |g e|bes|nat| na|eke|che|ig |gel|nie|nst|e a|nig|est|e w|erw|r d|end|ona|d v|jhe|ijh|d e|ele| di|ie | do|del|n n|at |it | da|tie|e r|elk|ich|jk |vol|ijd|tel|min|len|str|lin|n s|per|t d|han| zo|hap|cha|wet| to|ven| ni|aat|ion|tio|taa|lke|eze|met|ard|waa|uit|sti|e n|doo|pen|eve|el |toe|ale|ien|ach|st |ns | wa|eme|nin|e d|bij| gr|n m|p v|esc|t w|ont|ite|man|ema| ma|nal|g o|rin|hed|t a|t v|beg|all|ijs|wij|rwi|e h| bi|gro|p d|rmi|erm|her|oon| pe|eit|kin|t z|iet|iem|e i|gem|igi| an|d o|r e|ete|e m|js | hu|oep|g z|edi|arb|zen|tin|ron|daa|teg|g t|raf|tra|eri|soo|nsc|t b| er|lan| la|ern|ar |lit|zon|d z|ze |dez|eho|d m|tig|loo|mee|ger|ali|gev|ije|ezi|gez|nli|l v|tij|eer| ar",srp:" pr| i |rav|na |pra| na|ma | sv|ima|da |ja |a p|vo |je |ko |ti |avo| po|a i|ako|a s| za| u |ju |o i| im|nje|i p|va |sva|anj|vak| da|o n|nja|e s|ost| ko|a n|li |ili|ne |om | ne|i s| sl| il| dr|no |koj|u s|ava| ra|og |slo|im |enj|sti|bod|obo|lob|iti|a o|stv|i u|a d|ni |jed|u p|pri|edn| bi|i i|a k|o d|sta|ih |dru|a u| je| os| ni|nos|pro|aju|i o|ran| de| su|u i|se |van|ova|i d|cij| ob|uje|red|\u017Eav|e i|i n|voj|e p|a j|dna| se| od|ve | ka|eni|r\u017Ea|dr\u017E|a z|avn|aci|ovo|u u|m i|oja| iz|lja| nj|ija|u z|e o|rod|jen|lje|e b|raz|jan|lju|svo|za |gov|i\u010Dn| st|nov|sno|osn|du |ji |pre| tr|su |vu |odn|a b|jeg|nim|nih|tu |tit|\u0161ti|ku |nom|bit|e d|me |iko|\u010Dno|oji|lo |vno|nik|e n|\u0111en|ika|bez|ara|de |u o|vim|nak| sa|u n|riv|ave|an |olj|vol| kr|o p|sme|e k|nog| ov|e u|tva|bra|rug|reb|tre|u d|oda| mo| vr|vlj|avl|ego|jav|del|m s|kri|o k|a\u0161t|za\u0161|nju| sm|ani| li|dno|e\u0111u|aln|la |akv|oj |\u0161en|kom|stu|ugi|avi|a r|ka |rad|oju|tan|odi|vi\u010D|tav|itu|ude|bud| bu|pot|odu|\u017Eiv|ere|m n|tvo|ilo|bil|aro|ovi|por|eno|\u0161tv|nac|ove|m p|tup|pos|rem|dni|ba |nst|a t|ast|iva|e m|vre|nu |be\u0111|ist|pun|en |te |dst|rot|zak|ao |kao|i k|ju\u0107|o s|st |sam|ter|nar| me|i m|kol|e r|u\u0161t|ru\u0161|ver|kak| be|i b|kla|ada|eba|ena|ona| on|tvu|ans| do|rak|slu",ckb:" he| \xFB |\xEAn | bi| ma|na |in |maf| di|an |xwe| xw|ku | ku|kes| de| ji|her|kir|iya|ya |rin|iri|ji |bi |es | ne|ye |y\xEAn|e b|er |af\xEA|tin|ke | an|iy\xEA|eye|rke|erk|we | be|e h|de | we|hey|f\xEA |i b|y\xEA |ina| b\xEA| li|diy|ber|li |re |\xEE \xFB|n\xEA |\xEA d| se| ci|eke|di |w\xEE | na|\xEE y|af |ete|hem| w\xEE|sti| ki|r\xEE |k\xEE |\xEE a|yek|n d|kar| te|ne |y\xEE |i h|e k|t\xEE |t\xEA |a w|e d|\xEE b|s m|ast|n b|be |yan|ser|tew|net| tu| ew|hev|aza|ara|\xFB b|n k|adi|ev |zad| az|ras|est|an\xEA| ya|n h|n \xFB|wed| t\xEA|wek|bat|bo | bo| y\xEA|st |n n|\xEA k|dan|\xEA h|ema|\xEA b|iye|\xEE h|din|b\xFBn|r k|ek\xEE| me|par|\xFBna|ta |wle|ewl|\xEE m| ke|nav|ewe|man|\xEA t|d\xEE |\xFB m|m\xFB |em\xFB|a m|ika|e \xFB|n w|a x|\xEA m|e n| ta|ela|n j|ey\xEA|n x|civ|wey|ana| re|khe|ekh|bik|k\xEA |j\xEE |f h|er\xEE| pa|\xEEna|bin|erb|vak|iva|a s| ni|cih|v\xEA |e j|ari| p\xEA|\xEE d|n\xEAn|ike|e t|a k|\xEA x| ye|n a|ey\xEE|n e|ama|b\xEA |ar |ewa|at\xEA|bes|rbe|av |ibe|ist|m\xEE |tem|awa|are|h\xEE |geh|nge|ing|nek|n\xFBn|an\xFB|qan| qa|v\xEE |rti|uke|tuk| \u015Fe|eza| da|u d|\xFB a|f \xFB|edi| ra|tu |tiy|t\xEAn| mi|xeb| ge|h\xEEn| h\xEE|et\xEA|\xEE j|st\xEE|mal|bib|ra |i d|e m|mam|i a|nik|i m|\xEE k| wi|\xFBn | ko|a \u015F|\xEA j|riy|lat|wel|e e|ine|ane|\xFB h|\xEEn |a d|siy|end|aye| za|ija|a n|\xEE n|ek |tek|yet|mbe|emb|\xFB d|rov|iro|mir|eba| xe|m\xEAn| \xEAn| hu|n\xEEn|an\xEE|t \xFB|ten|n m|dem|\xEA \xFB|en\xEA|te |art|i r| j\xEE|u j|ek\xEA|dew",yor:" n\xED|ti |\u1ECD\u0301 |n\xED | l\xE1| \u1EB9\u0300|\xE0n |\u1EB9\u0301 |kan|t\xED | t\xED|an |\u1EB9\u0300 |t\u1ECD\u0301|\u1ECD\u0300 | \u1EB9n|\u1ECDn |w\u1ECDn|\xED \u1EB9|b\xED |\xE1ti|l\xE1t|\u0300t\u1ECD|\u1EB9\u0300t| gb| \xE0t| \xE0w|n l|\xE0ti| a |l\u1EB9\u0300|\u1EB9n\xEC| \xF3 |k\u1ECD\u0300| l\xF3|\xEC k|s\xED |\u1ECD\u0300k| k\u1ECD|ra |ni |\xE0b\xED|t\xE0b| t\xE0|n\xEC | s\xED|\u0300ka|\u1ECD\u0300\u1ECD|n \u1EB9|\xE0w\u1ECD|n t|\xF3 n|\u0300\u1ECD\u0300|\xEDl\u1EB9|or\xED|l\xF3 | w\u1ECD|t\xF3 |d\xE8 |\xECy\xE0|\xFAn | t\xF3| or|\xED \xEC|\xE8d\xE8|k\xF2 |\u2010\xE8d|\u0300\u2010\xE8|\u1EB9\u0300\u2010|r\xEDl|\xED \xF3|r\u1EB9\u0300|\xED \xE0| s\xEC|y\xE0n|gbo|\u1E63e | k\xF2|\xED a| r\u1EB9| j\u1EB9|s\xEC | b\xE1|r\xE0n| \u1E63e|w\u1ECD\u0301|n\xECy|f\xFAn| f\xFA|n \xE0|ba |n n|gb\xE0|gb\u1ECD|j\u1EB9\u0301|un |\xEC\xED | k\xED|gba|\xE8n\xEC| \xE8n|b\xE1 |\u0301 l|a k| ka|d\u1ECD\u0300|k\xED | \xF2m|in | fi|b\xF2 |fi |b\u1EB9\u0301|\u1ECDd\u1ECD|b\u1ECDd|\u0301 s|hun|n\xFA |n\xEDn|w\xE0 |ira|nir|\xF2m\xEC|\xECgb| \xECg|\u0301 t|\u1EB9ni|\xEDn\xFA|i l|\xECni|m\xECn|b\xE0 |\xE1\xE0 |i \xEC|ohu| oh|\xED i|ara| ti|bo |\xF2 l| p\xE9|r\xFA |\xEDr\xE0| \u1ECD\u0300|\xED \xF2|ogb|k\u1ECD\u0301|p\u1ECD\u0300|\xF3 b|\xE0 t|i n|l\u1ECD\u0301|\u1EB9\u0301n| \xECb|y\xEC\xED|gb\xE9|g\u1EB9\u0301|bog|\xF3\xF2 |y\xF3\xF2| y\xF3|n k|p\xE9 |d\xE1 |\u0301w\u1ECD|\u1ECD\u0301w|\xE0 l|\xED k| w\xE0|n o|j\u1ECD | ir|\u1ECD\u0300r|\xFA \xEC|\u0301 \xE0|\xF3 s|i t|\u1E63\u1EB9\u0301|\u0300k\u1ECD|\xED t|y\xE9 |l\xE8 | l\xE8|fin|\xE0b\xF2| l\u1ECD|\xE0 n|\xF9j\u1ECD|w\xF9j|ir\xFA|\xF3 j| ar|\xED w|a w| \xECm|\xFA \xE0|\u0300 t|\xF2fi| \xF2f| \xE0\xE0|f\u1EB9\u0301|\xE0w\xF9|\u0301ni|w\xF9 |\xEC\xEDr|m\xEC\xED| m\xEC|l\xE1\xEC| y\xEC|\xED g|\u1ECD\u0301n|n s|i \u1EB9|\u1EB9\u0300k|\xE0gb|\xEDgb|n\xEDg|a n| k\xFA|l\xE1\xE0|\xED o|n\xE1\xE0| n\xE1|k\u1EB9\u0301|\xEDpa|n\xEDp|\xECn | \xECk|b\xE9 |i g|\u1ECDm\u1ECD| \u1ECDm|i \xE0|i\u1E63\u1EB9|\u0300 \xE0|\xECm\u1ECD|n a|n f|j\u1EB9 |y\xED |\u0301 \u1ECD|\xF3 d|\u0301 \xF2| d\xE1| m\xFA|\xE0\xE0b|\xE1b\u1EB9|l\xE1b|\xECb\xE1|\xF2 g|j\xFA |i o|l\xFA | \xE8t|\u0300 \u1EB9|t\u1ECD\u0300|de |\u0300 n|i \xF2| \xECy|k\xE0n|\u0301n | b\xED| i\u1E63|m\u1ECD\u0300|e \u1EB9|\u0300 l| f\xE0|\xE8y\xED| \xE8y| \xECd|m\u1ECD\u0301|d\xE9 |\u0300 k|\u0301 p|\xF2 t|m\xFA | f\u1EB9| \xECj|r\xED |\xECk\u1EB9|n\xECk|\xECn\xED|n \xEC|n \xE8|s\xECn|\xE8 \u1EB9| i |r\u1ECD\u0300| \xE0n|\u0301 b|\xF9n |\u0301gb|\u1ECD\u0301g|d\u1ECD\u0301| d\u1ECD|\xED n|rin|\u0300 j",uzn:"ish|an |lar|ga |ir | bi|ar | va|da |iga| hu|va |bir|sh |uqu|quq|huq| ha|shi| bo|r b|gan|a e|ida| ta|ini|lis|adi|ng |dir|lik|iy |ili|o\u02BBl|har|ari| o\u02BB|uqi|ins|lan|hi |ing|dan|nin|kin| yo|son|nso| in| mu|on |qig| ma|ega|r i|bo\u02BB| eg|o\u02BBz|ni |gad|ash|i b|ki |oki|ila|yok|a b|n b|osh|ala|at |in |r h|erk| er|lga| qa|rki|h h| sh|i h|ara|n m| ba|nis|ik |igi|lig|bos|ri |qil|a t|bil|las|eti| et|n o|ani|nli|kla|i v|a q|a h|a o|yat| qo|im |a s|i m|iya|atl|oli|osi|siy|qla|cha|til| ol|ati|a y|mas|qar|inl|lat| qi|ta\u02BC|ham|gi |ib |\u02BBli|mla|h v|\u02BBz |hun|n e|mum| da| bu| to|un |mki|umk|sha|tla|ris|iro|ha |rch|bar|iri|oya|ali| be|i o|asi|aro| ke|i t|rla| te|arc|hda|shu|tis|n h|tga| sa| xa|rak|lin|ada|ola|imo|hqa|shq|li | tu|aml|lla|sid| as|nid|a i| ki|ch |n t|nda|k b|era|siz|or |hla|a m|r v|eng|ten|mat|mda|amd|lim|miy|y t|ayo|i a|ino|ilg|tni| is|ana|as |ema| em|ech|a a|tar|kat|aka|ak |rat| de|aza|ill| si| so|g\u02BBi|uql|n q|oda|\u02BCli|a\u02BCl|nik| ni|tda|uch|gin|a u|him|uni|sit|ay |qon| ja|atn|kim|h k|hec| he|\u02BBzi|lak|ker|ikl| ch|liy|lli|chi|ur |zar|shl|rig|irl|dam|koh|iko|a d|am |n v|rti|tib|yot|tal|chu| uc|sla|rin|sos|aso| un|na | ka|muh|dig|asl|lma|ra |bu |ush|xal|\u02BBlg|i k|ekl|r d|qat|aga|i q|oiy|mil| mi|qa |i s|jin",zlm:"an |ang| ke|ng | se| da|ada|ara|dan| pe|ran| be|ak |ber|hak|ata|ala|a s|ah |nya| me|da |per|n s|ya | di|kan|lah|n k|aan|gan|dal|pad|kep|a p|n d|erh|eba|nga|yan|rha| ya|nda|ora|tia|asa| ha|ama|epa| or|iap|ap |a b| at| ma|eti|ra |tau|n a|set|au | ba|pa | ad|n p|tan|p o|eng|a d|men|apa|h b|h d|dak|man|a a|ter| te|k k| sa|n b|ana|g a|end|leh|ole|a k|am |n y|aka|eh |lam|bas|beb|n m| un|pen|sa |keb|sam|n t| ti|ela|san|car|uan|ma |di |han|ega|ban|eri|at |sia|a m|ika|kes|ian|gar|seb|ta |mas|und|neg|nan|ngs|i d|erl|na |epe|emb|bar| la|atu|kla|pem|mem|emu|eca|sec|ngg|nny|any|bol|al |aha|gsa|ebe|ind|akl|n h|erk|ung|ena| bo|a t| ap|ers| de|in |tu |pun|as |agi|ann|g b|bag| ne|ain|hen| he|era|rat|sem| su|adi|lan|g s|dia|mat|ses|iad| ta|iha|g t|tin|k m|k h|i k|gi |i s|ing|uka|enu|den|lai|k d|ert|ti |rka|aja|rga|lua|ker|mel|dun|ndu|lin|rli|nak|ntu|esi|aya|un |uat|jua| in|rma|erm|ai |emp|kem|ri |dil|ua |uk |h m|l d|g m|mba|kat|ese|tik|ni |ini| an|mpu|ka |dar|mar|rja|erj|arg|u k|sua| ol|esa|dap|ar |g u|si |ent|g d| pu|awa|iri|dir|sal|gam|mbe|n i|har|a h|raa|ema|tar|i a|saa|ira|ari|pel|jar|laj|uju|tuj|rak|ura|uar|elu|t d|unt|il |wen|asi|gga|ipa|ksa|tuk|ula|sek|sas|ibu|rta|sep|rsa|nta|ati|ila|mua|yar",ibo:"a n|e n|ke | na| \u1ECD |na | b\u1EE5|\u1ECD b|nwe|nye|ere|re | n |ya |la | nk|ye | nw| ma|e \u1ECD| ya| ik|a o|a \u1ECD|ma |\u1EE5la|b\u1EE5l|ike| on|nke|e i|a m|ony|\u1EE5 n|kik|iki|b\u1EE5 | a |ka |wer|ta |i n|do |di | nd| ga|a a|e a|a i|he |kwa| ok| ob|e o|hi |any|ga\u2010|ha |d\u1EE5 | mm|ndi|\u1ECD n|wa |r\u1EE5 |e m|che|a e|oke|wu |aka|ite|o n|a g|odo|bod|obo| d\u1ECB| ez|ara|we | ih|a\u2010e|h\u1ECB |ri |n o|zi |mma|chi|d\u1ECB |ghi|\u1EE5ta|iri|ihe| an| oh|a y|gba|\u1EE5 \u1ECD| \u1ECDz| ak| iw|nya|te |iwu| nt|ro |oro|e \u1ECB|z\u1ECD |ezi|me |e e|u n|her|ohe| si|a\u2010a|i m|ala|\u1EE5 i| ka|akw| in|gh\u1ECB|kpe|n e|p\u1EE5t| e |i i|i o|ide|inw|\u1EE5 o|h\u1EE5 |ah\u1EE5|weg|ra |o i|kpa|ad\u1EE5|mad|si |sit|a s| me|sor|i \u1ECD|gid|edo|u o|e y|n a| en|tar|ozu|toz|bi |be |\u1EE5 m|\u1EE5r\u1EE5|\u1ECDr\u1EE5| \u1ECDr|mak|uso|ama|de |\u1ECB o| \u1ECDn|\u1ECDz\u1ECD|ch\u1ECB|egh|enw|ap\u1EE5|ru | to|i a|a \u1EE5|osi|r\u1ECB |wet|hed|nch| nc| eb| al|n\u1ECDd|\u1ECDn\u1ECD|uru|sir| kw|yer|ji |eny| mk|\u1ECBr\u1ECB|eta| us|tu |\u1ECD d|u \u1ECD| o |ba | mb|\u1ECDd\u1EE5|\u1ECBch| ch|a d|pa | ag|kwe| ha|a u|e s|mkp|n u|nta|ebe|n \u1ECD|o m|kwu|nkw|nwa|obi| \u1ECBk|esi|i e|nha| nh|le |ile|nil| ni|eme| og|e k|n i|ch\u1ECD|o y|as\u1ECB|otu| ot|ram|u m|\u1ECBgh|d\u1ECBg|zu |n\u1ECD |mba| gb|e g|\u1ECB m|\u1ECDch|ich|pe |agb|i \u1ECB|uch|z\u1EE5z|uny|wun|\u1ECDr\u1ECD| nn|na\u2010| di|ge |oge|iji| ij|\u1ECDha| \u1ECDh|ikp|egi|meg|o o|\u1EE5h\u1EE5|h\u1EE5h|mah|n \u1EE5|\u1ECD g|\u1ECDta|ek\u1ECD|\u1ECB n|kw\u1EE5|agh|\u1EE5m\u1EE5|ban|kpu|okp| ah|\u1ECBkp|a k|ime| im|z\u1EE5 |\u1EE5z\u1EE5|\u1ECDz\u1EE5| \u1EE5z|lit|ali|nat",ceb:"sa | sa|ng |ang| ka| pa|an |ga |nga| ma|pag| ng|on |a p|od |kat|ay | an|g m|a k|ug |ana| ug|ung|ata|ngo|atu|n s|ala|san|d s|tun|ag |a m|god|g s|a a|a s|g k|g p|yon|n u|ong|tag|usa|pan|ing|una|mat|g u|mga| mg|y k| us|ali|syo| o |aga|tan|iya|kin|dun|nay|man|nan|a i| na|ina|nsa|isa|bis|a b|adu| ad|n n| bi|asy|asa|lay|awa|lan|non|a n|nas|o s|al |agp|lin|nal|wal| wa|ili|was|gaw|han| iy| ki|nah|ban|nag|yan|ahi|n k|gan| gi|him| di|a u| ba| un|ini|ama|ya |kas|asu|n a|g a|gka|agk|kan|ags|agt|l n|a g|kag| ta|imo|uns|sam| su|g n|n o|gal|kal|og |taw|aho|uka|gpa|ipo|ika|o p|a t| og| si|gsa|g t|aba|ano|gla|y s|o a|aki|hat|kau|sud|gpi|a w|g i|aha|ot |ran|i s|n m|bal|lip|gon|ud | ga|li |uba|ig |ara|g d|na |kab|aka|gba|ngl|ayo| la| hu|a h|ati|d a|d n| pu| in|uga|ok |ihi|d u|ma |may|awo|agb|ami|say|apa|pod|uha|t n|agh|buh|ins|ad | ub| bu|at |iin|a d|ip |uta|sal|hon|wo |ho |tra|lak|iko|as |aod|bah|mo |aug|ona|dil|gik|sos|lih|pin| pi|k s|nin|oon|abu|la |rab|hun| ti|mah|tar|t s|ngb|uma|hin|bat|lao|mak|it | at|s s|sno|asn|ni |aan|ahu| hi|agi|n p|inu|ulo|y p| ni|iha|mag|o n|duk|edu| ed|a e|til|ura|tin|kip|agl|gay|g h|g b|ato|ghi|nab|kon|in |ter|o u|o o|yal|sya|osy| so|tik| re| tr|hig|a o|ha |but|pak|aya",tgl:"ng |ang| pa|an |sa | ka| sa|at | ma| ng|apa|ala|ata|g p|pan|pag|ay | an| na|ara| at|tan|a p|pat|n a| ba|ga |awa|rap|kar|g k|aya|lan|g m|n n|g b|nga|mga| mg|a k|na |ama|n s|a a|gan|yan|gka| ta|may|tao|agk|asa|man|aka|ao |y m|ana|g a|nan|aha|kan|y k|baw|kal|a m|g n|ing|wat| y |t t|pam|a n|o y|ban| la|ali|san|wal|mag| o |g i|aga|lay|any|g s|in |nya|yon|kas|a s|isa|una|ong|aan|kat|t p| wa|ina|tay|ya |on |o m|ila|ag |nta|t n|aba|ili| ay|o a| ga|no |a i|gal|ant|han|t s|kap|kak|lah|ari|agt|agp|ran|g l|lin|as |lal|gaw|ans|to |ito| it|hay|wa |t m| is|pap|mam|nsa|ahi|nag|bat|lip|gta| di|gay|gpa|pin| si|ngk|ung|aki|y n|iti|tat|ano|yaa|y s|mal|hat|kai|sal|hin|uma|mak|di |agi|pun|ihi|a l|i a|ira|gga|nah|s n|ap | ha|usa|nin|o p|gin|ipu|ika|ngi|i n|lag|la |y p|ini|g t|uka|nap| tu|a g|tas|aru|ipa| ip|li |al |n o|a o|t k|alo| pi|sin|syo|asy|ita|aho|nar|par|o s|pak|t a|uha|sas|gsa|ags|kin|a h|iba|lit|ula|o n|nak|a t| bu|duk|kab|sam|g e|ain|ami|mas|lab|ani|kil|it | al|agb|buh|a b|g g|ba | ib|iyo|ri |yag|ad | da|edu| ed|anl|ma |ais|iga|mba|tun|ipi| ki|od |ayu| li|lih|sar|gi |g w|pah|wir|oob|loo|agg|nli|bay|map|git|mil|ok |hon|ngg|sah|iya|pas|g h|agl|tar|ngu|amb|uku|ayo|s a|p n|n m|rus|i m|l a|abu| aa",hun:"en | sz| va| a |\xE9s |min|ek | \xE9s| mi|jog| jo|an |ind|nek|sze|s\xE1g|nde|a v|den|oga|sza|val|ga |m\xE9l|ala|em\xE9|gy |n a|van|zem|ele| me|egy|\xE9ly| eg|zab|t\xE1s| az|n s|bad|aba|ni |az |gye| el|ak | se|meg|sen|\xE9ny|s\xE9g|k j|yne|lyn| ne|ben|lam|tt |t a|et |agy|oz |hoz|vag|zet| te|n m|ez |nak|int|re |et\xE9|tet|mel|tel|s a|em |ely|let|hez| al|s s| ki|ete|at\xE1|z a| le|yen|es |ra |t\xE9s|ell|nt |sem|t s|len|nem|a s|ese|nki|enk|a m|\xE1s\xE1|i m|ban|kin|k m|szt| \xE1l|ame|k\xF6z|k a|ds\xE1|ads|l\xF3 | k\xF6|\xE1s |ly |on |\xE9be|tat|a t|n v|\xE1ll|m\xE9n| v\xE9|nye|k\xFCl|l\u0151 |a n| cs|i \xE9|ok |\xE9sz|\xE9rt|lla|lap|\xE1go|gok|nyi|tek| ke|nd |\xE9te|ami|z\xE9s|yes|szo|t m|a a|het|fel|lat|lem|lle|el |z e|s e|k \xE9|mbe|emb|el\xE9|ot |lis|vet|kor|\xE1g |olg| am|sz\xE1|ehe|leh|ogo|ott|\xFCl |nte|\xE9le|i v|ogy|hog| ho|kel|n k|tes|nl\u0151|enl|ss\xE1|\xE1za|h\xE1z|\xE9g |vel|\xE1ba|lek|\xE9ge| ha|a h|r\xE9s| fe|\xE1ny|del|el\u0151|\xE1t |al\xE1|art|tar|zto|z\xE1s|t\u0151 |yil|koz|tko|al\xF3|s k|i e|\xE1rs|t\xE1r|mze|emz| ny|m\xE1s|ett|ny |fej|ass|zas| h\xE1|d a|t \xE9|is |\xE9s\xE9|ez\xE9|t\xE9b| mu|\xE1so|s\xEDt|lye|elm|\xE9de|v\xE9d|ine|t k|os |it |izt|biz| bi|y a|m l|tot|a j|atk|n\xE9l|t n|ti | m\xE1|ai |l\xE1s|eve|nev|zte| b\xE1|sel|ll |al |ere|n e|unk|mun|t e| ak|ife|kif|ako|s \xE9| \xE9r|\xE1na| es|s t|got|s\xFCl| be|v\xE1l|csa|se |\xE9se|ad |ges|tos|ja | gy|asz|ten|lm\xE9| t\xE1|eze|\xE1rm|b\xE1r|ess|l s|\xFCle",azj:" v\u0259|v\u0259 |\u0259r |ir | h\u0259| bi| h\xFC| ol|\xFCqu|h\xFCq|quq|na |in |lar|h\u0259r|d\u0259 | \u015F\u0259|bir|l\u0259r|lik|mal|r b|lma|r h| t\u0259|\u0259xs|\u015F\u0259x|\u0259n |dir|uqu|una|an |ali|a m| ma|ikd|ini|r \u015F|d\u0259n|ar |il\u0259|qun|aq |as\u0131| ya|m\u0259k|y\u0259t| m\u0259| m\xFC|kdi|\u0259si|\u0259k |ilm|nin|nd\u0259|olm|\u0259ti|\u0259 y|sin|xs |nda|lm\u0259|yy\u0259|i v| qa| az|olu|iyy|ya |ind|zad|qla|\xFCn |ni |l\u0259 |tin|n m|aza|ar\u0131|\u0259t |n t|maq|lun|l\u0131q|\u0259 b|un |nun|q v|n h|dan|\u0131n | et|tm\u0259|\u0259r\u0259| \xF6z|da |\u0259 v| on|\u0259 a|\u0131na|\u0131n\u0131|bil|a b|s\u0131 |il |\u0259mi|ara|si | di|\u0259 m|\u0259ri|rl\u0259| va|\u0259 h|etm|\u0131\u011F\u0131|ama|dl\u0131|adl|rin|b\u0259r|r\u0131n|n i|m\xFCd|n\u0131n| he|mas|ik |n a|dil|al\u0131|irl|\u0259l\u0259|\xFCda|s\u0131n|\u0131nd|xsi|li |\u0259 d|n\u0259 | b\u0259|\u0259ya| in|\u0259 i|l\u0259t| s\u0259|n\u0131 | i\u015F|an\u0131|e\xE7 |he\xE7|q h|eyn|\u0259 e|d\u0131r| da|asi|r\u0131 |i\u015F |ifa|l\u0131\u011F|i s|fi\u0259|afi|daf| ed|m\u0259z|u v|kil| ha|ola|n v|\u0259ni|\u0131r |uq |unm| bu| as|sia|osi|sos|ili|\u0131d\u0131|l\u0131d|nma|\u0131q |in\u0259|\u0259ra|sil|xil|axi|dax|ad\u0259|man|a h|\u0259 o|onu|a q|\u0259z | ki|se\xE7| se|\u0131 h|min|lan|\u0259d\u0259|bu |raq|l\u0131 |\u0131l\u0131|al |\u0259 q|r v|nla|hsi|\u0259hs|t\u0259h|\xF6z |ist| is|m\u0259s| \u0259s|ina|\u0259 t|\u0259tl|a v|i\u0259 |n b|t\u0259r| ta| c\u0259|edi|ala|kim|qu |i t|ulm|m\u0259h|n o|aya|\u0131 o|ial| so|ill|siy| d\u0259|var|ins|mi |\u011F\u0131 |nik|r i|aql|k h|t\u0259m|tam|\xE7\xFCn|\xFC\xE7\xFC| \xFC\xE7|\u011F\u0131n|sas|\u0259sa|z h|\u0259m\u0259|zam| za|sti|r\u0259f|n e|r a|ild|h\u0259m|\u0131ql|yan|may|n \u0259|m\u0259n|mil| mi|\u0259qi|din|n d|t\xFCn| d\xF6|miy|kah|ika| ni|fad|tif|l o|s\u0259r|yni| ey|ana|l\u0259n|am |ril|ay\u0259|a\u015F\u0131",ces:" pr|n\xED | a | ne|pr\xE1|r\xE1v|na |ost| po|ho | sv|o n| na|vo |neb|\xE1vo|bo |ebo|nos|m\xE1 | m\xE1|a\u017Ed|ka\u017E| ka| ro|ch |d\xFD |\u017Ed\xFD|ti |ou |a s| p\u0159| za|\xE1n\xED|\xE1 p| je| v |svo|\xE9ho| st|\xFD m|sti|n\u011B | by|obo|vob|ter|pro|en\xED|bod| z\xE1| sp|\xED a|rod|kte|by |mu |u p|o p| n\xE1|v\xE1n|jak| ja|a p|o v|\xED n|ov\xE1|oli|v\xED |spo|roz| kt|mi |\xED p|ny | ma|\xEDm |i a|do | so|odn|\xE1ro|n\xE1r|li |n\xE9 |tv\xED|at |\xFDch|a z| vy|byl|vol|en |\xFDt |b\xFDt| b\xFD|t s|tn\xED|stn|o s|\xED b|to | do|sv\xE9|v\xE9 |ran|ejn|z\xE1k|eho|jeh|nes|p\u0159\xED|m\xED |\u010Din|kol|aj\xED|sou| v\u0161|\xEDch|it |n\xFDm|\xFDm |nu |hra|nou|u s|\xE9mu| k |du |\u017Een|pod| ze|kla|a v|stv|pol|dn\xED|er\xE9|m p|st\xE1|je |ci |e\u010Dn| ni|n\xE9h|a n|ak\xE9|\xE1va|maj|em |rov|\xED m|k\xE9 |ole|n\xFDc|ova| ve|ako| ta|i k|chr|och| oc|kon|i p|\xED v|sm\xED|esm|kdo|st |i n|o z|ave|odu|bez| to|sta|ech|j\xED |o d|sob|se | se|\xED s|\xFDmi|i s| i |i v| vz|n\xEDm|pra|ln\u011B|p\u0159i|t\xE1t|ste|a j|aby| ab| s |oln|a o|m n|\u010Den|slu|\u0159\xEDs| os|zem|mez| \u010Di|ln\xED|\xE1ln|oci|jin| ji|y b|\xED z|y s|va |v\u0161e|t v|ovn|chn|d\u011Bl|n\xEDc|le\u010D| pl|vat| vo|vin|rav|vou|lad|inn|\xE9 v|anu|tej|u k|stu|est| tr|ky |ikd|nik|ivo|nit|zen|u o|n\xE9m|nez|i\xE1l|\xEDho|len|ens|o\u017Ee|oko|k\xE9h|rac|ven|\xED k|e s|l\xE1n|\u011Bl\xE1|zd\u011B|vzd|t k|din|odi|t\xED | od|r\xE9 |tup|pov|pln|\u0161t\u011B|\xE1kl|nno|tak|er\xE1|\u0159ed|o a|a t|res|j\xEDc| mu|u z|rok| ob|\u010Dno|u a|y k|i j|\xE9 n|lu\u0161|\xEDsl|oso|ci\xE1|soc|n\xEDh|o j|ck\xE9",run:"ra |we |wa |e a| mu|a k|se | n | um| ku|ira|ash|tu |ntu|a i|mu |umu|mun|unt|ere|zwa|ege|ye |ora|teg|a n|a a|ing|ko | bi|sho|iri| ar| we|shi|aba|e n|ese|go |a m|o a|gu |uba|ngo|nga|hir| ca|ugu|obo|hob|za |ndi|ish|gih| at|ara|wes| kw|ger|ate|a b| ba| gu|e k|can|ama|ung|bor|u w|mwe|di | ab|nke|ke |kwi|ka |ank|yo |ezw|n u|na |iwe|e m|rez|ri |a g|gir| am|igi|e i|ro |a u|ngi|e b|ban| ak| in|ari|n i|hug|ihu|e u|riz|ang|nta| vy|ata| ub|and|aka|rwa| nt|kur|ta |iki|kan|iza|u b|ran|sha|o n|i n| ig|ivy| iv|ahi|bah|u n|ana| bu| as|aku|ga |uko|o u|ho | ka|ose|ubu|ako|guk|ite|o y|ba |i b|any|kir|o k|aho|iye|kub|amw|nye|aha| ng|o m|nya| it|re | im|o b|izw|kun|hin|e c|vyo|o i|vyi|ngu|uri|imi|imw|gin|ene|u m|zi |ha |kug|bur|uru|jwe| zi|u g|era|aga|ron|abi| y |e y| uk|gek|ani| gi|eye|ind|wo |u a|i a| ib|i i|ras|bat|gan|amb|n a|onk|rik|ne |ihe|agi|kor| ic|ze |tun|ibi|wub|nge|o z|tse|nka|he |rek|twa|gen|eko|mat|ber| ah|ni |ush|umw| bw|mak|bik|ury|yiw|bwo| nk|ma |no |kiz|uro|gis|aro|ika| ya|gus|y i|wir|ugi|uki| ki|a c|ryo|bir| ma| yi|iro|bwa|mur|eng|ukw|hat|tan|utu|wit|w i| mw|y a|mbe| ha|uza|ham|rah| is|irw|o v|umv|ura|eny|him|eka|bak|bun| ny|bo |yig|kuv|wab|key|eke|yer|vye|i y|ita|ya |a r| ko|kwa|o c",plt:"ny |na |ana| ny|a n|sy |y f|a a|aha|ra | ma|nan|n n|any|y n|a m|y m|y a| fi|an |tra|han|ara| fa| am|ka | ts| na|in |ami| mi|a t|olo|min|man|iza|lon| iz|fan| ol| ha| sy|aka|a i|reh|ay |ian|tsy|ina| ar|on |o a|etr|het|ona|y o|o h|zan|y t|a h|ala| hi|a f|y h|ehe|ira|a s|zo |y i|ndr|jo | jo|n j| an| az|ran|dia| dr|y s|fah|ena|ire|tan|dre| zo|mba| ka|m p|afa| di|n d|and|azo|zy |amp|ia |ren|iny|rah|y z|ry |ika|oan|ao |amb|lal|ho | ho|isy|ony|tsa|asa|a d|ha |fia|mis|ava|ray| pi|am |dra| to|rin| ta|ant|eo |zay|rai|tsi|itr|sa | fo| ra|van|ova|nen|azy| vo|mpi|ari|o f|tok|a k| ir|kan|oto|mah|ly |sia| la|n i|voa|haf|a r|ito|y k|oka|y r|y l|ano|ita|ene|its|ial|zon|aza|ain| re| as|fot|aro|fit|nat|nin|aly|har| ko|ham| no|fa |ary|atr|ila|ata|iha|nam|kon|oko| sa|elo|nja|anj|ive|isa|oa |dy |y d|o m|nto|ank|o n|otr|pan|fir|air|sir|ty |a v|sam|o s|tov|mit|rak|reo|o t|pia|tao| ao|no |y v|iar|a e|a z|hit|hoa| it|to |za |ton|eha|end|vy |idi|tin|ati|adi|lna|aln|rov|ban| za|nga|hah|oni|osi|sos|vah|ino|ity| at|hia|pir|ifa|omb|ame|era|vel|kar|va |tso|jak|fid|ifi|ais|o i|idy|la |ama|ba | pa|tot|ani|rar|mpa|haz|kam| eo| il|iva|aho|nao|n k|ato|lah|ovy| te|dro|lan|ela| mo| si|fin|miv|san|koa| he|aso| mb|sak|kav",qug:"ta | ka|ka |na |una|cha|ash|ari|a k|ana|pak|ish|ach|hka|shk|mi |kta|hay|man| ch|apa|ak |rin|ata|kun|har|akt|ita| ha|ami|lla| pa|ama|pas|shp| ma|tak|ay\xF1|y\xF1i|in |sh |ina|uku|nka|chi|aka|a c|yta|kuy|all|tap|a h|kan| tu|\xF1it|tuk| ru|run|chu|an |pay|ayt|ris| ki|aku|hpa|ank|a p|kam| sh|nam|a s|uy |i k|ayp|nak|pi |nta|a m| li|ay |lia|hin|kaw|nap|ant|tam|a t|iri|nat| wa|y r|kay|aws| ya|n t|ypa|wsa|pa |lak|shi|a a|lli|iku|hu |n k|iak|yay|kis| al|shu|a w|ipa| sa| il|api|kas|yku|yac|kat|a r|huk|i c|wan|hik|a i|ill|ush| ti|ayk|hpi| ku|kac|say|hun|uya|ila|ika|yuy|pir|ich|mac|ima|a y|yll|ayl|i p|kin|a l| wi|kus| yu|lan|tan|llu|kpi| ta| pi|aya|la |yan|awa| ni|kak|lat|rik|war|ull|kll|li |ink|nch|un |akp|n s|may| ay|uch|i s|nac|sha|iki|kik|h m|ukt|pip|tin|n p|iya|nal|aki| ri|ura|tik|mak|ypi|i m|i w|n m|his|k i|riy|iwa|y h| hu|han|akl|k t|mas|pik|kap| \xF1a|u t|nmi|nis|k a|i y|k l|kar| im|i i|wil|yma|aym|ksi|iks|uma| su|h k|has| ak|unk|huc|kir|anc|k m|pal|k k|ik |i\xF1i| i\xF1|ma |n y|mun| mu|mam|tac|a n|i t|k r|sam|ian|asi|k h|was|ywa|iyt|llp|san|sum|ray|si |pan|nki|tar| ii|u k|\xF1ik|uk |i\xF1a|kuk|wpa|awp|akk|a u|wat|uri| mi|yar|uyk|ayw|h c|ha |tay|rmi|arm|uta|las|yka|llk|kul|wi\xF1|ati|ska| ll|kit|n h|uti|kic|mat",mad:"an |eng|ng |ban| sa| ka|dha|ren| se| ba|ak | ha|adh|hak| dh|ang|se | pa|aba|a s|na |aga|ha | or|n s|ore|ara| ag|gad|are|ana|n o|ngg|ale|gan|a k|ala|dhu|tab|sar|ota|asa|eba| ot| ke|sab|ba |wi |uwi|abb|i h|huw|aan|n k|a b|bba| ta| ma|pan|hal|bas|ako|dhi|ra |kab|em |beb|ka |lak|gi |lem|g a|eka|n b|ama|nga|san|at |ong|ran|nge|a o|ggu|sa |a d|ane|n p|ken|par|aja|man|gar|ata|nek|apa| na|agi|abe| ga|e e|sal|a a|tan|g s|al |kal|gen|ta |i s|aka|e a|a p|a e| la| pe|nan| an|era|e d| e | be|n a| al|ena|uy |guy|n n|ate| bi|mas|e k|kat|uan|oan|kon|k k|a m|i d|g e|n t|g k|ada|koa|lan|ela| da|bad|ma |ne |as |lab|ega| mo|ar |car|one|i p|bi |kaa|bat|ri |on |pon| so|e b|le |ah |abi|ase|adi|epa| ep|k h|and|pam|te |ok |ste|aon|om |oko|aha|ari|ona|asi|ter| di|di |pad|e s|sad|yar|neg|ton|set|rga|ost|mos|gap|nda|a l|har|i k|ina| a | ng|kom|isa|si |a t|a h| kl|jan|daj|iga|hig|idh|hid|ndh|n m|ngs|tto|ett|arg|la |k b|ler|k d|nna| to|nao|n d|mat| ca|tad|bis|aya|epo|aen| po|bin|nya|kas|k s|n h|sya|nta|gsa|en |ant|n g|kar|i e|das|e t|e p|iba| pr|g p| ho| el|i a|hi |os |sao|uwa|tes| ja|nag|nas|lae|sia|t s|k o|nto|int|yat|arn|m p|duw|adu|eta| ko|i b|ni |g n|kla|rak|ame|mpo|jua|sok|aso|ggi|eja|pel|jam|ele| et|dil",nya:"ali|ndi|a m|a k| nd|wa |na | al|yen| ku|nth|ra |di |se |nse| mu|a n|thu|hu |nga| wa|la |mun|u a|unt|iye| ka|ce |ace| lo|a l|ang|e a| la| pa|liy|a u|ens| ma|idw|ons|dwa|e m|i n|ala|kha|lo |li |ira|era|ene|ga |ana|za |o m| mo|yo |o w| ci|we |dzi|ko |o l|and|dan|hal|zik|chi|oyo|pa |ner|ulu|ena|moy| um|a p| da|ape|kap|ka |iko| an|pen|a c|to |ito|hit|nch| nc|iri|lir|wac|umo|e k|lu |a a|aye| dz|kuk|a z|dwe|tha|mal| za|ing|ufu|mu |ro |ful| uf|o c|i d|lin|e l|zo |edw| zo|o a|mwa|u w|iro|o n|lan|amu|ere| mw|nzi|dza|alo|ri | li|fun|lid|gan|so | ca|kul|ofu|nso|o z|ulo|unz|o k|mul|lam|i c|san|a b|kwa| na|a d| a |una|u k|i l|nkh|ant|aku|ca |cit|oli|ipo|dip|ama|lac|wir|han|yan|osa|uli|tsa|i m|pon|kup|u d|ti |gwi|ukh|ung|hun|lon|ank|nda|iki|ina| ko|ao |diz|phu|ati|oma|i a|tsi|pat|iya|siy|kut| ya|zid|eze|ma |i k|mer|ome|mol|u n|u o|aph|ogw|izo|mba|sid|ku |sam|awi|adz| ad|izi|ula|say|e n|khu| kh|rez|vom|bvo|okh|lok|win|akh|o o| am| on|zir|map| zi|eza|ja |go |ngo|ika|its|ats|osi|gwe| co|isa|ya |haw|ani|o p|zi |ndu|kho|ezo|kir|uni|i u| ay|lal|gal|sa |bom| bo|ola|amb|wak|ha |ba |nja|anj|ban| ba|iza| bu|udz|ngw|bun|oye|o d|nal|kus|i p|i o|i y|wi | nt|e p| si|aka|ne |men|jir|nji|sed|ets|end|eka|uma|du ",zyb:"bou|iz |aeu|enz|eng|uz | bo|ih |oux|nz | di|ing|z g|ux |uq |dih|ngh| ca|ng |gen|ung|z c| mi|miz|ij |cae|z d| gi| de| ge|euq|you| ci|ngz|ouj|aen|uj | yi|ien|gya| gu|ngj|mbo| mb|zli|dae|gij|cin|ang|j d|nae| se| ba|z y|euz| cu|de |x m|oz |j g|ouz|x b|li |z b|h g| da| yo|nj |xna|oxn|rox| ro|h c|nzl|vei|yau|wz |z m|ix | si|i c|iq |gh |j b| cw|nda|yin| hi| nd|dan|vun|inh| ga|can|ei |cun|yie|q g|hoz|bau| li| gy|wyo|cwy|z h|gue|gz |gun|faz|unz|yen|uh |den|ciz| go|q c|gj | bi|ej |aej| fa|hin|zci| wn|j n|goz|gai|au |z s|q d| vu|h m|gva|hu |auj|ouq|az |h d|ya |uek|ci |nh |u d|ou |sou|jso|gjs|din|awz|enj| do|h s|eve|sev|z r|nq |sin|nhy|g g|g b|liz|kgy|ekg|sen|eix|wng|lij|ngq|bin|i d|ghc| ha|bae|hix|h y|j c|ghg|i b|ouh|en |n d|h f|j s|z v|j y|law|hci|anh|inz|q y|nei|anj|ozc|ez |enh|q s|aiq|uen|zsi|zda|hye|ujc|e c|siz|eiz|anz|g y|i g|q n|bie| ne| ae|giz|u c|hgy|g d|gda|ngd|cou| la|z l|auy|ai |in |iuz|zdi|jhu|ujh|yuz| du|j m| fu|cuz|eiq|g c|gzd| co|uyu|coz|zbi|biu| dw|i s|i n|aw |dun|yun|izy|daw| he|nho| ho|enq|x l|cie|q b|cij|uzl|x d|iuj|awj| ya|eij|dei|nde|sae|izc|wnq|wnh|sei|h b|aih|gzs|bwn|a d|u g|ngg|jca|e b|ran| ra|hcu| me|iet|van| bu|guh|hen|si |wnj| ve|u b|azl|inj|gak|gan|ozg|siu|yaw|i m",kin:"ra | ku|se | mu|a k|ntu|tu |nga|umu|ye | um|unt|mun|e n| gu|we |ira|a n| n |wa |ere|mu |ko |gom|a b|e a| ab|li |e k|mba|a a|e b|aba|ga |e u|ba |omb|o k| ba|a u|ose|u b|o a| cy|ash|eng| ag|kwi| bu|za |gih|ren|ndi| ub|ang|yo |aka|gu |igi| ib|a g|a m| nt|uli|o b|ama|ihu|e i|nta| ak|ago|ro |ora| ka|ugu|hug|di |iye|ban| am|cya|ku |ta | bw|and|sha|re | ig|gan|ubu|na | kw|obo| by| bi|a i|yan|ka |sho|kub|era|ese| we|kan|aga|hob|bor|ana|byo|ura|uru|ibi|rwa|wes|u w|no |uko|i m|mo |u a|ure|ili|uba|o n|uha|uga|n a| im|ish|bwa|bwo|wiy|ali|ber|ze |ne |ush|are|o i|u m|ger|bur|ran| ki| no|ane|bye| y |ege|teg|guh| uk|n i|rag|i a|ya |u g|e m|anz|bo |abo|gar|wo |y i|ho |age|ind|o m|eke|a s|ara|zir|ite|kug|kim|aci| as|u n|ani|kir|mbe| gi|yos|kur|ugo|gir|e c|iza|aho|i b|tur|ata|o u| se|u u|zo |i i|aha|nge|mwe|iro|akw|any|eza|uki|imi|o y|ate|u k|iki|atu|bat| in|go |tan|n u|bos| bo| na|hak|iby| at|ihe|ung|ha |bul|kar|eye|eko|gek|nya|o g|shy|e y|awe|ngo|bit|mul|nzi|rer|bag|ge |imw|bah|cir|gac|bak|je |gez|imu|eze|tse|ets|mat| ru|irw|he | ni| ur| yi|ako|ngi| ng|i n|rez|ubi|gus|fit|afi|ugi|uka|amb|o c|utu|ufa|ruk|mug|bas|bis|uku|hin|e g|ige|amo|ing| af|yem|ni | ry|a r|gaz|te |erw|bwe|ubw|hwa|iko| al|ant|zi ",zul:"nge|oku| ng|a n|lo |ung|nga|la |le | no|elo|lun| um|e n|wa |we |gel|e u|ele|nel|thi|ke |nom|ezi|ma |ntu|oma|hi |o n|ngo|tu |nke|onk|o l|uth|ni |a u|lek|unt| wo|o e| lo|mun|umu|pha| ku|ang|ho |kwe|ulu| ne|won|une|lul|elu| un|a i|gok|kul|ath|hla|lok|khe|eni|tho|ela|zwe|akh|kel|a k|enz|ana|ban|aka|u u|ing|ule|elw|kho|uku|ala|lwa|gen| uk|wen|ama|na |e k|ko |gan|a e|he |zin|enk|o y| ez|kat| kw|lan|eth|het|o o| ok|okw|i n|nzi|aba|e a|hak|lel|lwe|eko|ane|ka |so |yo |ayo|o a|uhl|nku|nye| na|thu|mph|do |ben|ise|kut|ike|kun| is| im|hol|obu|fan|i k|e w|nhl|nok|ini|and|kuh|ukh|kuk| ak|e i|isi|aph|zi |ile|eki|ekh| ba|eka|the|a a| le| ye|kwa|e e|fut| fu|za |mal| ab|ebe|isa| em|o w|kub|mth|i w|ndl|emp|any|olo|ga | ko|nen|nis|alu|ith|eli|ndo|seb|nda| ya|i i|eke|vik|ake|uba|abe|ezw|yok|ba |ale|zo |olu|ume|ye |esi|kil|khu|yen|emi|nez|hlo|a l|ase|ula|kek|a o|iph|o u|no |azw|kan|mel|uny|ne |ufa|ahl|lin|hul|ant|und|sa |enh|kus|kuv|lak| in|o i|din|kom|amb|zis|ind|ola|uph|wez|eng|yez|phe|phi|mba|nya|han|kuf|nem|isw|ani|iyo| iy|fun| yo|uvi|i a|ene|izi| el|cal|i e|eze|ano|nay|hwe|kup|lal|uyo|ubu|kol|oko|ulo| la|e l|tha|nan|mfu|hon|nza|hin| ey|omp|da |bo |ilu|wak|lon|iso|kug|nka|ink|i l|sek|eku| ek|thw|gez",swe:"ar |er |tt |ch |och| oc|ing|\xE4tt|ill|r\xE4t|en | ti|til|f\xF6r|ll | r\xE4|nde| f\xF6|var|et |and| en|ell| ha|om |het|lle|lig|de |nin| de|ng | in| fr|as |ler| el|gen|nva|und|att|env|r h| i |r r|ska|fri| so|har|der| at|\xF6r |ter|all|t t| ut|den|ka |lla|som|av |sam|ghe|ga | sk| vi| av|ete|la |ens|t a| si|r s|iga|igh|tig| va|ig |a s| st|ion|ra |tti|a o| \xE4r|ten|ns |t e|na | be|han| un| an| sa|a f| la| gr| m\xE5|nge|n s|vis|lan|m\xE5 |ati|nat| \xE5t|an |nna| li| al|t f|ans|nsk|sni|gru|\xE4ll|tio|ad | me|isk|kli|s f|t i|st\xE4|t s|ri |med|sta|h r|lik|da |dig|ta |r o|run|on | re|lag|tta|\xE4r |kap|a i|a r|\xE4nd|erv|n e|kte|n f|rvi|nom|itt|id | mo|sky|r e|ver|\xE4ns|vil|gt |igt| na|tan|uta|dra|t o|ro |isn| fa|kal|ihe|rih|erk|r u|e s|per|l v|vid|one|rel|ber|ran|ot |mot|ndl|d f|ed |ika|m\xE4n|l s|bet|t b|dd |ydd|kyd|n o|s s|str|n m|tet|sin|r f| om|rna|int|r i|end|nad|l a|ap |ers|nda|t v|ent|rbe|arb| h\xE4|ets|h\xE4l|amh|ckl|gar|nga|r m|je |rje|arj|n i|s e|lin|r t|i s|r\xE4n| pe|ilk|t l|ern|p\xE5 | p\xE5|t\xE4l|d e|dom|ege|g e|tni|r a|lit|ras| s\xE5|lln|kil|ski|enn|i o|a d|er\xE4|n a|ara| ge|\xE4ro|a m| ar|t d|ilj|els|yck| ve|g o|fr\xE5|nas|tra|ess|del|m s|liv|l l|in |v s|g a|ast|e e|val|son|rso|e t|age|nd | eg|ial|cia|oci|soc|upp|igi|eli|g s|rkl|gad|ndr|nte|\xF6ra",lin:"na | na| ya|ya |a m| mo|to | ko|li |a b| li|o n| bo|i n|a y|a n|ki |a l|kok|la | ma|zal|i y|oki| pe|ngo|ali|pe |so |nso|oto|ons| ba|ala|mot|a k|eng|nyo|eko|o e|nge|yon| ny|kol|lik|iko|a e|o y|ang|ye | ye|oko|ma |o a|go | ek|ko |e m|aza|te |olo|sal|ama|si | az|mak|e b|lo | te|ta |isa|ako|amb|sen|ong|e n|ela|oyo|i k|ani| es|o m|ni |osa| to|ban|bat|a t|mba|ing|yo | oy|eli|a p|mbo|o p|mi | mi| nd|ba |i m|bok|i p|isi|mok|lis|nga|ge |nde|koz|bo |gel|ato|o t|mos|aka|oba|ese|lam|kop| ez|lon|den|omb|o b|ota|sa |ga |e a|e y|eza|kos|lin|esa|e e|kob|e k|sam|kot|kan|bot|ika|ngi|kam|ka | po|gom|oli|ope|yan|elo| lo|ata| el|bon|oka|po |bik|ate| bi|a s|i t|i b|omi|pes|wa | se|oza|lok|bom|oke|som|zwa|mis|i e|bek|iki| at|ola|ti |ozw|lib|o l|osu|oso|e t|nda|ase|ele|kel|omo|bos|su |usu|sus|bal|i l|ami|o o|bak| nz|pon|tel|mob|mu | ep|nza|asi|mbi|ati|kat|le |gi |ana|oti|ndi|tan|a o|wan|obe|kum|nya|mab|bis|nis|opo|tal|mat| ka|bol|and|aye|baz|u y|eta| ta|ne |ene|emb|sem|e l|gis|ben| ak| en|mal|obo|gob|ike|se |ibo|\u2019te| \u2019t|umb| so|mik|oku|be |mbe|bi |i a|eni|i o| mb|tey|san| et|abo|ebe|geb|eba|yeb|bu | as|ote|sik|ema|eya|ibe|mib|ai |pai|mwa|kes|da |may|boz|amu|a a|kom|mel|ona|ebi|ia |ina|tin| ti|bwa|sol|son",som:" ka|ka |ay |uu |an |yo |oo |aan|aha| wa|da | qo| in| u |sha| xa|a i|ada|iyo| iy|ma |ama| ah| la|qof|aa |hay|ga |a a|a w|ah | dh|a s| da|in |xaq| oo|a d|aad|yah|eey| le|isa|lee|u l|q u|aq | si|taa|eya|ast|la |of |iya|sa |y i|u x|sta|kas|xuu|uxu|wux| wu|iis|nuu|inu|ro | am| ma|a q|wax|dha|ala|kal|nay|f k|a k|le |ku | ku| sh|o i|a l|ta |maa|a u|dii|loo| lo|o a|ale|ara|ana|iga|o d| uu|ha |lo |o m|o x|doo|aro|kar|yaa|gu |si |ima|na | xo| fa|adk|do |a x|ad |aas| qa| so|a o| ba|lag| aa| he|dka|adi|soo|o k|aqa| is|ash|u d|had| ga|eed|san|u k|a m|iin|i k| ca|u s|n l|yad|rka|axa|elo|hel|aga|hii|o h|o q| ha|id |n k| mi|baa| xu|har|xor|aar|ax |mad|add|nta|mid|aal|waa|haa|ina|qaa|daa|agu|ark|o w|nka|u h|dad|ihi| bu| ho|naa|n a|ays|haq|a h|o l| gu|o s|aya|saa|lka| ee| sa|dda|ab |nim|quu|gga|ank|kii|rci|arc|n s|a g| ji|gel| ge|eli|ysa|a f|siy|int|laa|uuq|uqu|xuq| mu|i a|uur|mar|ra |iri|o u| ci|riy|ya |ado|alk|dal|ee |al |rri|ayn|asa| di|ooc|aam|ofk|oon|to |ayo|dar| xi|dhi|jee|a c| ay|yih|a j|ban|caa|lad|sho|d k|ida|uqd|agg|sag|ras|bar|ar | ko| ra|o f|gaa|gal|fal|u a| de| ya|o c|ii |xay|eel|aab|sig|aba|orr|hoo|u q|y d|ed |ho |sad|qda|h q|fka|n i|xag|n x|qay|lsh|uls|bul|u w|jin| do|raa| ug|ido|ood",hms:"ang|gd |ngd|ib | na|nan|ex | ji|eb |id |d n|b n|ud | li|nl |ad | le|jid|leb|l l| ga|ot | me|x n|anl|aot|mex|d g|b l|d d|ob |gs |ngs|jan| ne|ul | ni|nja| nj|lib|ong|nd | zh|jex| je|b j| sh|ngb| gh|gb | gu|gao|l n|han| ad|gan| da|t n| wu|il |x g|nb |b m| nh|she|is |l j|d l|nha|l g|d j|b g|el |end|wud|nex|gho|d s|d z|oul|hob|ub |nis| ch| ya|it |b y|eib| gi|s g|lie| yo| zi|oud|s j|d b|nx | de|es |d y| hu|uel|gue|ies|aob|you| ba|d m|chu|gia|dao|b d|s n|zib| go|zha|eit|hei|al |hud| do|nt |ol | fa|t g|hen|ut |gx |ngx|ab |fal|x j|b z|ian|d h|don|b w|t j|iad|nen| xi|gou|d c|b h|hao|x z|nib|anx|ant|gua| mi|s z|dan|ox |inl|hib|lil|uan|and| xa|b x| se|x m|uib|hui|d x|anb|enl| we|od |enb| du|at |ix |s m|bao| ho|hub| ng|zhi|jil|l s|yad|t m|t l|yan| ze| ju|heb|had|os |aos|t h|l d|nga| he|b a|xan|b s|sen|xin|dud|jul|d a|lou| lo|dei|d w| bi|b c| di|zhe|gt |ngt|x l|bad|x b| ja|hon|zho|blo| bl|d k| ma|deb|l z|wei| yi| qi|b b|x d|d p|eud| ge|x a|can| ca|t w|lol| si|hol|s w|aod|pao| pa|ren| re|x s|eut|pud| pu|aox|mis|gl |ngl|x w|zei|gon|enx|gha|s a|b f|l y|oub|eab|hea| to|did| ko|unb|ghu|t p|x c|geu|t s|x x|jao|ed |t c|l m|l h|jib|ax |l c|d f|nia| pi|eul|d r| no|min|l t|heu|ux |tou|ns |s y|iel|s l|hun",hnj:"it | zh| ni|ab |at |ang| sh|nit| do|uat|os |ax |ox |ol |nx |ob | nd|t d|zhi|nf |x n|if |uax| mu|d n|tab| ta| cu|mua|cua|as |ad |ef |uf |id |dos|gd |ngd|hit|ib |us |enx|f n|she|s d|t l|nb |ux |x z|ed |inf|b n|l n|t n|aob|b z| lo|ong|ix |dol| go|zhe|f g| ho| yi|t z|d z|b d| le|euf|d s|ut |yao| yo| zi|gb |ngb|ndo|enb|len| dr|zha|uab|dro|hox| ge|nen| ne|han| ja|das|x d|x c|x j|f z|shi|f h|il | da|oux|nda|s n|nd |s z|b g| ny|heu| de|gf |ngf| du|od |gox| na|uad| gu|inx|b c| ya|uef| xa| ji|ous| ua| hu|xan|hen|zhu|nil|jai|rou|t g|f d| la|enf|ged|ik | bu|nya|you|f y|lob|af |bua|uk |is |yin|out|of |l m|ud |hua| qi|ot |t s| ba|ait| kh|s s|nad| di|aib|x l|lol| id|dou|ex |aod|bao| re| ga|d d|b y|las|hed|b h|b s|f b|t y|jua| ju| dl|x s|hue|b l| xi|zif|dus|b b|x g|hif|x y|hai| nz|sha| li|x t| be|d j|und|hun|ren|d y|hef|xin| ib|b t|l d|aos|s l| ha|gai|nzh|gx |ngx| ao|s b|s x|el |gt |ngt|hik|aid|s t|x m|f l|f t| pi|aof|t r|eb | gh|s y|d l|gua| bi| za| fu|t h| zu|hou|deu|lb | lb|d g| mo|b k| bo|iao|ros|gon|eut|x h|al |uaf|hab|t t|k n|f x|hix|pin|yua| no|t b|ak | zo|s m| nb| we|d b|gha|f s|mol|euk|dax|l b|nof| ko|lou|guk|end|uas|t k|dis|dan|yol|uan|d t|x b|lan|t m| ch|jix|x x| hl|aox|zis|x i|et | ro",ilo:"ti |iti|an |nga|ga | ng| it| pa|en | ma| ka| a | ke| ti|ana|pan|ken|ang|a n|agi|a k|n a|gan|a m|a a|lin|ali|aya|man|int|teg|n t|i p|nte| na|awa|a p|na |kal|ng |dag|git|ega|sa |da |add|way|n i|n n|no |ysa|al |dda|n k|ada|aba|nag|nna|ngg|eys| me|a i|i a|mey|ann|pag|wen|i k|gal|gga| tu|enn| da| sa|nno| we|ung| ad|tun|mai| ba|l m| ag|ya |i s|i n|yan|nan|ata|nak| si|aka|kad|aan|kas|asa|wan|ami|aki|ay |li |i m|apa|yaw|a t|mak| an|i t|g k|a s|ina|eng|ala|ika|ama|ong|ara|ili|dad| aw|gpa|nai|et |yon|ani|aik|on |at |oma|sin|bal|ipa|n d|uma|g i|ket|ag |in |aen|n p|ram|sab|aga|nom|ino|lya|ily|syo|i b| ki|nia|agp|gim|kab|asi|kin|iam|ags|bab|oy |toy|n m|agt| ta|bag|sia|g a|gil|mil| um|o p|ngi|n w|i i|pad|pap|daa|iwa|naa|eg |ias|ed |nat|bae|o k|saa|san|pam|gsa|ta |kit|ma |dum|yto|tan|i e|t n|uka|t k|apu|lan|sta|sal| li|a b|ari|g n|den|mid|ad |o i|y a|ida|ar |aar|y n|dey| de| wa|a d|ak |bia|ao |tao|min|asy|mon|imo| gi|maa|sap|abi|i u|aib|kni|i l|gin|ged|o a| ar|kap|pul|eyt|abs|ibi| am|akn|i g|kip|isu|g t|bas|nay|ing|i d|kar|ban|iba|nib|t i|as |d n|y i|ura|a w|nal|aad|i w|lak|adu|kai|bsa|duk|edu| ed|may|agb|agk|tra|gge|sol|aso|agr|ngs|ian|ila|dde|edd|tal|aip|kua|umi|pay|sas|ita|pak|g d|ulo|inn|aw "},Cyrillic:{rus:" \u043F\u0440| \u0438 |\u0440\u0430\u0432| \u043D\u0430|\u043F\u0440\u0430|\u0441\u0442\u0432|\u0433\u043E |\u0435\u043D\u0438|\u0432\u043E |\u043E\u0432\u0435| \u043A\u0430|\u043D\u0430 |\u0442\u044C | \u043F\u043E|\u0438\u044F |\u043E \u043D| \u043E\u0431|\u0435\u0442 | \u0432 |\u0441\u0432\u043E| \u0441\u0432|\u0430\u0432\u043E|\u0430\u043D\u0438|\u043E\u0441\u0442|\u043E\u0433\u043E|\u044B\u0439 |\u0430\u0436\u0434|\u043B\u043E\u0432|\u0442 \u043F| \u0438\u043C|\u043D\u0438\u044F| \u0447\u0435| \u0441\u043E|\u0435\u043B\u043E|\u0438\u043C\u0435| \u043D\u0435|\u043B\u044C\u043D|\u043B\u0438 |\u0447\u0435\u043B|\u043A\u0430\u0436|\u0435\u0441\u0442|\u0432\u0435\u043A|\u0430\u0442\u044C|\u043E\u0432\u0430|\u0438\u043B\u0438| \u0440\u0430|\u0435\u043A |\u0439 \u0447|\u0434\u044B\u0439|\u0436\u0434\u044B| \u0434\u043E|\u0438\u0435 |\u0435\u0435\u0442|\u043C\u0435\u0435|\u043D\u043E | \u0438\u043B|\u0438\u0438 |\u0441\u044F |\u0435\u0433\u043E|\u043E\u0431\u043E|\u0438 \u043F|\u043D\u0438\u0435|\u043A \u0438| \u0431\u044B|\u0438 \u0441|\u0438 \u0438|\u043C\u0438 |\u0431\u043E\u0434|\u0432\u043E\u0431|\u0432\u0430\u043D| \u0437\u0430|\u043E\u0439 |\u044B\u0445 |\u043E\u043C |\u043B\u0435\u043D|\u0430\u0446\u0438|\u0435\u043D\u043D|\u043E \u0441|\u043E \u043F|\u044C\u043D\u043E|\u0442\u0432\u0430|\u0442\u0432\u043E|\u043F\u0440\u0438|\u043D\u043E\u0433|\u0430\u043B\u044C|\u0430\u043A\u043E|\u0432\u0430 |\u0438 \u043D|\u0441\u0442\u0438|\u043D\u044B\u0445|\u0442\u043E |\u0431\u0440\u0430|\u043E\u043B\u0436|\u0434\u043E\u043B|\u0441\u0442\u043E|\u0438 \u0432|\u043D\u044B\u043C|\u043E\u0435 | \u0435\u0433|\u043D\u043E\u0432|\u0438\u0445 |\u0435\u043B\u044C|\u0442\u0435\u043B|\u0442\u0438 |\u043D\u043E\u0441|\u043D\u0435 |\u043F\u043E\u043B|\u0440\u0430\u0437| \u0432\u0441|\u0438 \u043E| \u043B\u0438|\u0438 \u0440|\u044B\u0442\u044C|\u0431\u044B\u0442|\u0432\u043B\u0435|\u0440\u0435\u0434|\u0438\u044E |\u0442\u043E\u0440| \u043E\u0441|\u044C\u0441\u044F|\u0442\u044C\u0441|\u043E\u0434\u0438|\u0449\u0435\u0441|\u044F \u0438|\u043A\u0430\u043A|\u043F\u0440\u043E|\u0436\u0435\u043D|\u044B\u043C |\u043F\u0440\u0435|\u0430 \u0441|\u0441\u043D\u043E|\u0435 \u0434|\u043D\u043D\u043E|\u043E \u0438|\u0438\u0439 | \u043A\u043E|\u043E \u0432| \u043D\u0438| \u0434\u0435|\u0441\u0442\u0443|\u043B\u0436\u043D|\u0441\u043E\u0432|\u0435 \u0432|\u043D\u043E\u043C|\u043E\u043B\u044C|\u0440\u0430\u043D|\u043E\u0436\u0435|\u0438\u0447\u0435|\u0435\u0439 |\u0430\u0441\u0442|\u043D\u043D\u044B| \u043E\u0442|\u0442\u0443\u043F|\u043C \u0438|\u043E\u0434\u043D|\u0437\u043E\u0432|\u0440\u0435\u0441| \u043C\u043E|\u043E\u0441\u0443|\u043B\u044F |\u043E\u0441\u043D|\u0430 \u043E|\u0432\u0435\u043D| \u0442\u043E|\u043E \u0431|\u0448\u0435\u043D|\u0442\u0432\u0435|\u043E\u0431\u0449|\u0430 \u0438|\u0435 \u043C|\u044C\u043D\u044B|\u043E\u0431\u0440|\u0432\u0435\u0440|\u0447\u0435\u043D|\u044F \u043D|\u0436\u043D\u043E|\u0447\u0435\u0441|\u0430\u043A |\u043B\u0438\u0447|\u043D\u0438\u0438|\u0435 \u0438|\u0432\u0441\u0435|\u0431\u0449\u0435|\u0432\u0430\u0442|\u0435\u0441\u043F|\u043C\u043E\u0436|\u0439 \u0438|\u043D\u043E\u0435|\u043E \u0434|\u0431\u0435\u0441| \u0432\u043E|\u044F \u0432|\u0434\u0443 | \u0441\u0442|\u0434\u043D\u043E|\u043E\u043D\u0430|\u043D\u0430\u0446|\u0434\u0435\u043D|\u0435\u0436\u0434|\u0445 \u0438| \u0431\u0435|\u0438 \u0434|\u043D\u044B |\u0434\u043E\u0441|\u0434\u043B\u044F| \u0434\u043B| \u0442\u0430|\u043B\u044C\u0441|\u0430\u0442\u0435|\u0446\u0438\u0438|\u044F \u043F|\u0443\u044E |\u0438\u0442\u0435|\u0435 \u043E|\u043D\u043E\u0439|\u043F\u043E\u0434|\u043E\u0442\u043E|\u0441\u0442\u0440|\u0441\u0442\u0430| \u043C\u0435|\u0435\u043B\u0438| \u0440\u0435|\u044F \u043A|\u0442\u043E\u044F|\u0430\u043C\u0438|\u0435\u043D |\u044C \u0432|\u044E \u0438|\u0430\u0437\u043E|\u0433\u043E\u0441|\u043C \u043F|\u044C \u043F|\u0442 \u0431|\u0436\u0435\u0442|\u0443\u0447\u0430|\u0441\u0443\u0434|\u044C\u0441\u0442|\u0434\u0441\u0442|\u0449\u0438\u0442|\u0430\u0449\u0438|\u0437\u0430\u0449|\u043A\u043E\u043D|\u043D\u0438\u044E|\u0430\u043C |\u043E\u0434\u0443|\u0435\u0440\u0435|\u0433\u0440\u0430|\u043F\u0435\u0447|\u043E \u043E|\u043E\u0440\u043E|\u043A\u043E\u0442|\u0438 \u043A|\u0442\u0440\u0430|\u043D\u0438\u043A|\u0443\u0449\u0435|\u0446\u0438\u0430|\u043E\u0446\u0438|\u0441\u043E\u0446|\u043D\u0430\u043B|\u0435\u0441\u043A|\u043E \u0440|\u043A\u043E\u0433|\u0434\u0440\u0443| \u0434\u0440|\u043D\u0438 |\u0430\u0432\u0430|\u043D\u0441\u0442|\u0435\u043C |\u0430\u0432\u043D|\u044B\u043C\u0438|\u0435\u0434\u0441|\u0434\u0438\u043D|\u0434\u043E\u0432| \u0433\u043E| \u0432\u044B|\u0432 \u043A|\u044B\u0435 |\u043E\u0431\u0435|\u043C\u0443 |\u044F \u0435|\u0441\u043B\u0443|\u0443\u0434\u0430|\u0442\u0430\u043A|\u043A\u043E\u0439|\u0442\u0443 |\u0438\u0442\u0443|\u0437\u0430\u043A|\u0445\u043E\u0434|\u0432\u043E\u043B|\u0440\u0430\u0431|\u043A\u0442\u043E|\u0438\u043A\u0442|\u0438\u0447\u043D|\u043D\u0438\u0447|\u043E\u0442 |\u0438\u043D\u0430| \u043A |\u0442\u0435\u0440|\u0440\u043E\u0434|\u043D\u0430\u0440",ukr:"\u043D\u0430 | \u043F\u0440|\u043F\u0440\u0430| \u0456 |\u0440\u0430\u0432| \u043D\u0430| \u043F\u043E|\u043D\u044F |\u043D\u043D\u044F| \u0437\u0430|\u043E\u0433\u043E|\u0442\u0438 |\u0432\u043E |\u0433\u043E | \u043A\u043E|\u0430\u0432\u043E| \u043C\u0430|\u043B\u044E\u0434|\u043E \u043D| \u043D\u0435| \u043B\u044E|\u044E\u0434\u0438|\u043E\u0436\u043D|\u043A\u043E\u0436|\u043B\u044C\u043D|\u0436\u043D\u0430|\u0434\u0438\u043D|\u0430\u0442\u0438|\u0430\u0454 |\u0438\u0445 |\u0438\u043D\u0430|\u043F\u043E\u0432|\u0441\u0432\u043E| \u0441\u0432|\u0430\u043D\u043D|\u0454 \u043F|\u043C\u0430\u0454|\u0430\u0431\u043E|\u0430 \u043B| \u0431\u0443|\u043D\u0435 |\u0435\u043D\u043D|\u0431\u043E | \u0430\u0431|\u0430 \u043C|\u043E\u0432\u0438|\u043D\u0456 | \u0432\u0438| \u043E\u0441|\u0430\u0446\u0456|\u0432\u0438\u043D| \u0442\u0430|\u0431\u0435\u0437|\u043E\u0431\u043E| \u0432\u0456| \u044F\u043A|\u0435\u0440\u0435| \u0434\u043E|\u0456 \u043F|\u0443\u0432\u0430|\u043E \u043F|\u0430\u043B\u044C|\u043D\u0438\u0445|\u043E\u043C |\u043C\u0438 |\u0456\u043B\u044C|\u043D\u043E\u0433|\u0442\u0430 |\u0438\u0439 |\u043F\u0440\u0438|\u043E\u044E |\u0442\u044C |\u0441\u0442\u0430| \u043E\u0431|\u0432\u0430\u043D|\u0438\u043D\u043D|\u0442\u0456 |\u043E\u0441\u0442| \u0443 |\u0441\u044F |\u0432\u0430\u0442|\u0431\u0443\u0442|\u0438\u0441\u0442| \u043C\u043E|\u0435\u0437\u043F|\u0443\u0442\u0438|\u043D\u043E\u0432|\u043F\u0435\u0440|\u0456\u0457 |\u0438 \u043F|\u0431\u043E\u0434|\u0432\u043E\u0431|\u0441\u0442\u0432| \u0432 |\u043E \u0432|\u0432\u0456\u0434| \u0431\u0435|\u0430\u043A\u043E|\u043F\u0456\u0434|\u0442\u0438\u0441|\u043A\u043E\u043D|\u043D\u043E |\u0432\u0430 |\u043D\u043D\u0456|\u0456 \u0441|\u0430 \u043F|\u0441\u0442\u0456| \u0441\u043F|\u043D\u0438\u0439|\u0434\u0443 |\u044C\u043D\u043E|\u043E\u043D\u0430| \u0456\u043D|\u0434\u043D\u043E|\u043D\u0438\u043C|\u0456\u0439 |\u0430 \u0437|\u043D\u0443 |\u043C\u043E\u0436|\u0457\u0457 | \u0457\u0457|\u043B\u044F |\u0441\u043E\u0431|\u043C\u0443 |\u043E\u0457 |\u044F\u043A\u043E| \u043F\u0435| \u0440\u0430|\u0456\u0434 | \u0434\u0435|\u0456 \u0432|\u0438 \u0456|\u0447\u0438\u043D|\u0432\u043D\u043E|\u043E\u043C\u0443|\u043D\u043E\u043C|\u0443 \u043F|\u0456 \u043D|\u0430 \u0441| \u0441\u0443|\u0430 \u043E|\u043D\u0435\u043D|\u0438\u0441\u044F|\u043E\u0432\u043E|\u043D\u0430\u043D|\u043E\u0434\u043D|\u0443 \u0432|\u0456 \u0434|\u0430\u0432\u0430|\u0456\u0434\u043D|\u0440\u0456\u0432| \u0440\u0456|\u0456 \u0440|\u0438\u043C\u0438|\u0432\u0456\u043B|\u0438\u043C |\u0446\u0456\u0457|\u043E \u0434|\u0430 \u0432|\u0441\u0442\u0443|\u043E\u0434\u0443|\u0431\u0443\u0434|\u043E\u0432\u0430| \u043F\u0456| \u043D\u0456|\u044F \u043D|\u0435 \u043F|\u043D\u0430\u0446|\u0438 \u0441|\u043D\u043D\u0430| \u043E\u0434| \u0440\u043E|\u043D\u043E\u0441|\u044C\u043D\u0438|\u044E\u0442\u044C|\u0438 \u0437|\u043A\u0438 |\u0456 \u0437|\u0430 \u0431|\u0441\u043F\u0440|\u0447\u0435\u043D|\u0436\u0435 |\u043E\u0436\u0435|\u0435 \u043C|\u043E\u0432\u043D|\u0440\u0438\u043C|\u0435 \u0431|\u0442\u043E |\u043D\u0456\u0445|\u043E\u0441\u043E|\u0443\u0434\u044C|\u0432\u0456 | \u0440\u0435| \u0441\u0442|\u0440\u0430\u0446|\u0434\u043E | \u0441\u043E|\u0440\u043E\u0437|\u043B\u0435\u043D|\u0432\u043D\u0438|\u0456\u0432\u043D|\u0440\u043E\u0434| \u0432\u0441|\u0441\u043F\u0456|\u043A\u043E\u0432|\u0437\u043F\u0435|\u0456\u0432 |\u0434\u043B\u044F| \u0434\u043B|\u0457 \u043E|\u0445\u0438\u0441|\u0430\u0445\u0438|\u0437\u0430\u0445|\u2010\u044F\u043A|\u044C\u2010\u044F|\u0434\u044C\u2010|\u044F \u0456|\u0442\u0430\u043A|\u0437\u043D\u0430|\u0437\u0430\u0431|\u0441\u0442\u044C|\u0442\u0443 |\u043D\u043E\u044E|\u0430 \u043D|\u0442\u043E\u0440|\u0441\u043D\u043E|\u043E \u0441|\u0436\u0435\u043D|\u0446\u0456\u0430|\u043E\u0446\u0456|\u0441\u043E\u0446|\u0456\u043D\u0448|\u0456 \u043C|\u043A\u043B\u0430|\u0438 \u0432|\u0442\u0435\u0440| \u0434\u0456|\u0456\u0441\u0442|\u043E\u0432\u0456|\u0443 \u0441|\u044F \u0432|\u0430\u0440\u043E|\u0441\u0456 |\u0432\u0456\u0442|\u0441\u0432\u0456|\u043E\u0441\u0432|\u0440\u043E\u0431|\u043F\u0456\u043B|\u0440\u0435\u0441|\u0437\u0430 |\u043F\u0435\u0447|\u0430\u0431\u0435|\u043A\u0443 |\u043B\u0438\u0432|\u0435\u0440\u0436|\u0434\u0435\u0440|\u0432 \u0456|\u0430\u0432\u043D|\u0442\u0430\u0432|\u0430\u0432 |\u0430\u043C\u0438|\u043A\u043E\u043C|\u0432\u043B\u0435|\u043E \u0431|\u044C \u043F| \u0449\u043E|\u0457\u0445 |\u0442\u0432\u043E|\u0445\u0442\u043E|\u0456\u0445\u0442|\u043A\u043E\u0433| \u043A\u0440|\u0430\u043D\u043E|\u0442\u0430\u043D|\u0456\u0430\u043B|\u043D\u0430\u043B|\u043D\u044C |\u0445 \u043F|\u0436\u043D\u043E|\u043B\u0435\u0436|\u0430\u043B\u0435|\u043F\u0440\u043E|\u0442\u0432\u0430|\u0440\u0430\u0442|\u043E \u043E|\u0445 \u0432|\u043D\u0430\u0440|\u043B\u044C\u0441|\u0446\u0456\u0439|\u043A\u043E\u0440|\u0447\u0430\u0441|\u0440\u0436\u0430|\u0457 \u0441|\u0438\u043D\u0443|\u0434\u0441\u0442|\u043E \u0437|\u0440\u0430\u0437|\u043C\u0456\u043D|\u0430 \u0440|\u0437\u0430\u043A",bos:" \u043F\u0440| \u0438 |\u0440\u0430\u0432|\u043D\u0430 |\u043C\u0430 |\u043F\u0440\u0430| \u043D\u0430|\u0438\u043C\u0430| \u0441\u0432|\u0430 \u0441|\u0434\u0430 |\u0430 \u043F|\u0432\u043E |\u0458\u0435 |\u043A\u043E |\u0430\u043A\u043E|\u043E \u0438| \u043F\u043E|\u0430\u0432\u043E|\u0435 \u0441|\u0430 \u0438|\u0442\u0438 | \u0438\u043C| \u0434\u0430| \u0443 |\u0441\u0432\u0430|\u043D\u043E | \u0437\u0430|\u043E \u043D|\u0432\u0430 |\u0438 \u043F|\u0438\u043B\u0438|\u0432\u0430\u043A|\u043B\u0438 | \u043A\u043E|\u043D\u0435 | \u0438\u043B|\u043A\u043E\u0458| \u043D\u0435| \u0434\u0440|\u043E\u0441\u0442| \u0441\u043B|\u045A\u0430 |\u0438\u043C |\u0438 \u0441|\u0443 \u0441|\u0438 \u0438|\u0430\u0432\u0430|\u0438\u0458\u0435|\u0430 \u0443| \u0431\u0438|\u0441\u0442\u0432|\u0441\u0435 |\u0432\u0430\u045A|\u0430 \u0434|\u043E\u043C |\u0458\u0435\u0434|\u0431\u043E\u0434|\u043E\u0431\u043E|\u043B\u043E\u0431|\u0441\u043B\u043E| \u0441\u0435| \u0440\u0430|\u0438\u0445 |\u0441\u0442\u0438|\u0430 \u043D|\u045A\u0435 | \u043E\u0431| \u0458\u0435|\u043F\u0440\u0438|\u0434\u0440\u0443|\u0443 \u0438|\u0458\u0443 |\u043E \u0434|\u0438\u0442\u0438|\u0432\u043E\u0458|\u0440\u0430\u0437|\u0430\u045A\u0435|\u043E\u0432\u0430|\u0434\u0458\u0435| \u043E\u0441|\u0435 \u0438|\u043B\u043E |\u0435 \u043F|\u0430\u045A\u0430|\u0443\u0458\u0435|\u0438 \u0434|\u0431\u0440\u0430|\u0442\u0440\u0435| \u0442\u0440| \u0441\u0443|\u0443 \u0437|\u0430 \u043A|\u043E\u0433 |\u0443 \u043F|\u043E\u0458\u0435|\u0446\u0438\u0458|\u0440\u0435\u0431|\u0430 \u043E|\u0430 \u0431| \u045A\u0435|\u0438 \u0443|\u043C\u0438\u0458|\u043D\u0438 |\u043D\u043E\u0441|\u0431\u0430 |\u0435\u0434\u043D|\u0441\u0432\u043E|\u045A\u0435\u0433| \u0438\u0437|\u043F\u0440\u043E|\u0435 \u0434|\u0436\u0430\u0432|\u0431\u0438\u0442| \u043D\u0438|\u0438 \u043E|\u0441\u0442\u0430|\u0430 \u0437|\u0430\u0432\u043D|\u0432\u0458\u0435| \u043A\u0430|\u0431\u0438\u043B|\u043E\u0432\u043E|\u0430 \u0458|\u0430\u0458\u0443|\u0438\u0441\u0442|\u0438 \u043D|\u043D\u0438\u0445|\u0458\u0435\u043B|\u0442\u0443 |\u0440\u0435\u0434|\u0433\u043E\u0432| \u043E\u0434|\u0435 \u043E|\u043E\u0458\u0438| \u0441\u043C|\u0458\u0430 |\u043E \u043A|\u0438\u043B\u043E|\u0430\u0446\u0438|\u0435 \u0443|\u043F\u0440\u0435|\u043E \u043F|\u0435\u0431\u0430|\u0443 \u043E|\u0441\u0443 |\u0432\u0438\u043C|\u0438\u0447\u043D| \u0441\u0430| \u0434\u0458|\u0430 \u0442|\u0438\u0458\u0430|\u0448\u0442\u0438|\u0447\u043D\u043E|\u0440\u0436\u0430|\u0434\u0440\u0436|\u0441\u0442\u0443|\u0434\u043D\u0430|\u043E\u0434\u043D|\u0435\u043D\u0438|\u0437\u0430 |\u0438\u0432\u0430|\u043D\u043E\u043C|\u0435\u043C |\u0434\u0443 |\u0440\u0430\u043D|\u0432\u043D\u043E|\u0441\u043C\u0438|\u0458\u0435\u0440|\u0435 \u0431|\u0435 \u043D|\u0434\u0435 |\u043F\u043E\u0441|\u043C \u0438| \u0434\u043E|\u0443 \u0434|\u043D\u0430\u043A|\u0430 \u0440|\u043E\u0431\u0440| \u043C\u043E|\u043D\u0438\u043C|\u0435\u0433\u043E| \u043A\u0440|\u0442\u0438\u0442|\u043A\u0440\u0438|\u0432\u0435 |\u0430\u043D |\u0438\u043A\u043E|\u043D\u0438\u043A|\u043D\u0443 |\u0438 \u043C|\u043D\u043E\u0433|\u0435\u043D\u043E|\u0441\u043D\u043E|\u0435 \u043A|\u0442\u0443\u043F|\u0440\u0443\u0433|\u043A\u0430 |\u043E\u0434\u0430|\u0440\u0438\u0432|\u0432\u043E\u0459|\u0430\u043B\u043D|\u043C \u0441|\u0438\u0442\u0443|\u0430\u0448\u0442|\u0437\u0430\u0448|\u0430\u043D\u0438|\u0441\u0430\u043C| \u0441\u0442|\u0430\u043A\u0432|\u043E\u0432\u0438|\u043E\u0441\u043D|\u0440\u043E\u0434|\u0430\u0440\u043E| \u043C\u0438|\u0458\u0438 |\u0442\u0432\u0430|\u0434\u043D\u043E|\u043D\u0441\u0442|\u0430\u043A |\u0438\u0442\u0435|\u0459\u0443 |\u0432\u0438\u0447|\u0440\u0430\u0434|\u0443 \u043D|\u0443 \u043C| \u0442\u0430|\u0434\u0441\u0442|\u0442\u0438\u0432|\u043D\u0430\u0446|\u0440\u0438\u043C|\u043A\u043E\u043D|\u043A\u0443 |\u045A\u0443 |\u043E\u0434\u0443|\u0436\u0438\u0432|\u0430\u043C\u043E|\u0442\u0432\u043E|\u0442\u0435\u0459|\u043F\u043E\u0434|\u0435\u0452\u0443|\u0433 \u043F|\u043D\u043E\u0432|\u0438\u043D\u0430|\u043D\u0430\u0440| \u0432\u0458|\u0438 \u0431|\u043E\u0458 | \u043E\u0432|\u0430\u0432\u0435|\u0432\u0443 |\u0430\u043D\u0441|\u043E\u0458\u0430|\u0437\u043E\u0432|\u0430\u0437\u043E|\u0443\u0434\u0435|\u0431\u0443\u0434| \u0431\u0443|\u0435 \u0442|\u0438 \u0432|\u0435\u045A\u0430|\u0435\u0434\u0438|\u043D\u0438\u0446|\u043D\u0430\u043F|\u043C\u0458\u0435| \u0438\u0441|\u0441\u043B\u0443|\u0435\u0434\u0441|\u043E \u043E|\u0437\u0430\u043A|\u0438 \u043A|\u043C \u043F|\u0442\u043D\u043E|\u0438\u0432\u043E|\u0435\u0440\u0435|\u043D\u0438\u0447|\u043A\u0430\u043A|\u0430\u0434\u0430|\u0432\u043D\u0438|\u0443\u0433\u0438| \u0440\u043E|\u043C\u043E\u0432|\u0432\u0435\u043D|\u043E \u0441|\u0442\u043E |\u0442\u0435 | \u0432\u0440| \u0431\u0435|\u0430\u0440\u0430|\u043A\u043B\u0430| \u0431\u0440|\u0443 \u0431|\u0443 \u0443|\u0438 \u0442|\u043E\u043D\u0430| \u043E\u043D|\u0430\u0432\u0438|\u0458\u0430\u043B|\u0434\u043D\u0438| \u0441\u043A",srp:" \u043F\u0440| \u0438 |\u0440\u0430\u0432|\u043D\u0430 |\u043F\u0440\u0430| \u043D\u0430|\u043C\u0430 | \u0441\u0432|\u0438\u043C\u0430|\u0434\u0430 |\u0430 \u043F|\u0432\u043E |\u043A\u043E |\u0442\u0438 |\u0430\u0432\u043E| \u043F\u043E|\u0430 \u0438|\u0430\u043A\u043E|\u0430 \u0441| \u0437\u0430| \u0443 |\u043E \u0438| \u0438\u043C|\u0438 \u043F|\u0432\u0430 |\u0441\u0432\u0430|\u0432\u0430\u043A| \u0434\u0430|\u043E \u043D|\u0435 \u0441|\u043E\u0441\u0442| \u043A\u043E|\u045A\u0430 |\u043B\u0438 |\u0438\u043B\u0438|\u043D\u0435 |\u043E\u043C | \u043D\u0435|\u0430 \u043D| \u0441\u043B| \u0438\u043B|\u0458\u0435 | \u0434\u0440|\u0438 \u0441|\u043D\u043E |\u043A\u043E\u0458|\u0443 \u0441|\u0430\u0432\u0430| \u0440\u0430|\u043E\u0433 |\u0441\u043B\u043E|\u0458\u0443 |\u0438\u043C |\u0441\u0442\u0438|\u0431\u043E\u0434|\u043E\u0431\u043E|\u043B\u043E\u0431|\u0438\u0442\u0438|\u0430 \u043E|\u0441\u0442\u0432|\u0438 \u0443|\u0430 \u0434|\u043D\u0438 |\u0458\u0435\u0434|\u0443 \u043F|\u043F\u0440\u0438|\u0435\u0434\u043D| \u0431\u0438|\u0438 \u0438|\u0430 \u043A|\u043E \u0434|\u0441\u0442\u0430|\u0438\u0445 |\u0434\u0440\u0443|\u0430 \u0443| \u0458\u0435|\u0430\u045A\u0430| \u043E\u0441| \u043D\u0438|\u043D\u043E\u0441|\u043F\u0440\u043E|\u0430\u0458\u0443|\u0438 \u043E| \u0434\u0435| \u0441\u0443|\u0443 \u0438|\u0441\u0435 |\u045A\u0435 |\u0458\u0430 |\u043E\u0432\u0430|\u0438 \u0434|\u0446\u0438\u0458| \u043E\u0431|\u0443\u0458\u0435|\u0440\u0435\u0434|\u0436\u0430\u0432|\u0435 \u0438|\u0435 \u043F|\u0430 \u0458|\u0434\u043D\u0430| \u0441\u0435| \u043E\u0434|\u0432\u0435 | \u043A\u0430|\u0435\u043D\u0438|\u0440\u0436\u0430|\u0434\u0440\u0436|\u0430 \u0437|\u0430\u0432\u043D|\u0435\u045A\u0430|\u0430\u0446\u0438|\u0432\u043E\u0458|\u043E\u0432\u043E|\u0443 \u0443|\u043C \u0438|\u043E\u0458\u0430|\u0432\u0430\u045A| \u0438\u0437|\u0438\u0458\u0430|\u0443 \u0437|\u0430\u045A\u0435|\u0440\u0430\u043D|\u0435 \u043E|\u0440\u043E\u0434|\u0438 \u043D|\u0435 \u0431|\u0440\u0430\u0437|\u0437\u0430 | \u045A\u0435|\u0433\u043E\u0432|\u0438\u0447\u043D| \u0441\u0442|\u043D\u043E\u0432|\u0441\u043D\u043E|\u043E\u0441\u043D|\u0434\u0443 |\u043F\u0440\u0435| \u0442\u0440|\u0441\u0443 |\u0432\u0443 |\u043E\u0434\u043D|\u0430 \u0431|\u0441\u0432\u043E|\u045A\u0435\u0433|\u043D\u0438\u043C|\u043D\u0438\u0445|\u0442\u0443 |\u0442\u0438\u0442|\u0448\u0442\u0438|\u043A\u0443 |\u043D\u043E\u043C|\u0431\u0438\u0442|\u0435 \u0434|\u043C\u0435 |\u0438\u043A\u043E|\u0447\u043D\u043E|\u043E\u0458\u0438|\u043B\u043E |\u0432\u043D\u043E|\u043D\u0438\u043A|\u0438\u043A\u0430|\u0431\u0435\u0437|\u0430\u0440\u0430|\u0434\u0435 |\u0443 \u043E|\u0432\u0438\u043C|\u043D\u0430\u043A| \u0441\u0430|\u0440\u0438\u0432|\u0430\u0432\u0435|\u0430\u043D |\u0432\u043E\u0459| \u043A\u0440|\u043E \u043F|\u0441\u043C\u0435|\u0435 \u043A|\u043D\u043E\u0433|\u0458\u0438 | \u043E\u0432|\u0435 \u0443|\u0442\u0432\u0430|\u0431\u0440\u0430|\u0440\u0443\u0433|\u0440\u0435\u0431|\u0442\u0440\u0435|\u0443 \u0434|\u043E\u0434\u0430| \u043C\u043E| \u0432\u0440|\u0430\u0432\u0459|\u0443 \u043D|\u0435\u0433\u043E|\u0434\u0435\u043B|\u043C \u0441|\u043A\u0440\u0438|\u043E \u043A|\u0430\u0448\u0442|\u0437\u0430\u0448|\u045A\u0443 | \u0441\u043C|\u0430\u043D\u0438| \u043B\u0438|\u0434\u043D\u043E|\u0435\u0452\u0443|\u0430\u043B\u043D|\u043B\u0430 |\u0430\u043A\u0432|\u043E\u0458 |\u043A\u043E\u043C|\u0441\u0442\u0443|\u0443\u0433\u0438|\u0430\u0432\u0438|\u0430 \u0440|\u043A\u0430 |\u0440\u0430\u0434|\u043E\u0434\u0438|\u0432\u0438\u0447|\u0442\u0430\u0432|\u0438\u0442\u0443|\u0443\u0434\u0435|\u0431\u0443\u0434| \u0431\u0443|\u043F\u043E\u0442|\u043E\u0434\u0443|\u0436\u0438\u0432|\u0435\u0440\u0435|\u0442\u0432\u043E|\u0438\u043B\u043E|\u0431\u0438\u043B|\u0430\u0440\u043E|\u0435 \u043D|\u043E\u0432\u0438|\u043F\u043E\u0440|\u0435\u043D\u043E|\u0448\u0442\u0432|\u043D\u0430\u0446|\u043E\u0432\u0435|\u043C \u043F|\u0442\u0443\u043F|\u043F\u043E\u0441|\u0440\u0435\u043C|\u0434\u043D\u0438|\u0431\u0430 |\u043D\u0441\u0442|\u0430 \u0442|\u043E\u0458\u0443|\u0430\u0441\u0442|\u0438\u0432\u0430|\u0435 \u043C|\u0432\u0440\u0435|\u0432\u0459\u0430|\u043D\u0443 |\u0431\u0435\u0452|\u0438\u0441\u0442|\u0435\u043D |\u0442\u0435 |\u0434\u0441\u0442|\u0440\u043E\u0442|\u0437\u0430\u043A|\u0430\u043E |\u043A\u0430\u043E|\u0438 \u043A|\u0458\u0443\u045B|\u043E \u0441|\u0441\u0442 |\u0441\u0430\u043C|\u043C \u043D|\u0442\u0435\u0440|\u043D\u0430\u0440| \u043C\u0435|\u0438 \u043C|\u043A\u043E\u043B|\u0435 \u0440|\u0443\u0448\u0442|\u0440\u0443\u0448|\u0432\u0435\u0440|\u043A\u0430\u043A| \u0431\u0435|\u0438 \u0431|\u043A\u043B\u0430|\u0430\u0434\u0430|\u0435\u0431\u0430|\u0435\u043D\u0430|\u043E\u043D\u0430| \u043E\u043D|\u0442\u0432\u0443|\u0430\u043D\u0441| \u0434\u043E|\u0440\u0430\u043A|\u0441\u043B\u0443|\u0438 \u0432|\u043D\u0438\u0446|\u0443 \u043A|\u043C\u0435\u043D|\u0432\u0440\u0448|\u0435\u043C\u0435|\u0435\u0434\u0441|\u0438\u0432\u0438|\u043E \u043E|\u0458\u0430\u0432",uzn:"\u0430\u043D |\u043B\u0430\u0440|\u0433\u0430 |\u0438\u0440 | \u0431\u0438|\u0430\u0440 | \u0432\u0430|\u0434\u0430 |\u0438\u0433\u0430| \u04B3\u0443|\u0432\u0430 |\u0431\u0438\u0440|\u0443\u049B\u0443|\u049B\u0443\u049B|\u04B3\u0443\u049B| \u04B3\u0430|\u0440 \u0431|\u0433\u0430\u043D|\u0438\u0448 |\u0438\u0434\u0430| \u0442\u0430|\u0430 \u044D|\u0438\u043D\u0438|\u0430\u0434\u0438|\u043D\u0433 |\u0434\u0438\u0440|\u0438\u0448\u0438|\u043B\u0438\u043A|\u043B\u0438\u0448|\u0438\u0439 |\u0438\u043B\u0438|\u0430\u0440\u0438|\u0443\u049B\u0438|\u04B3\u0430\u0440|\u043B\u0430\u043D|\u0438\u043D\u0433|\u0448\u0438 |\u0434\u0430\u043D|\u043D\u0438\u043D|\u0438\u043D\u0441|\u043A\u0438\u043D|\u0441\u043E\u043D|\u043D\u0441\u043E| \u0438\u043D| \u043C\u0443|\u049B\u0438\u0433| \u043C\u0430|\u043E\u043D |\u0440 \u0438| \u0431\u045E|\u044D\u0433\u0430| \u044D\u0433| \u045E\u0437|\u043D\u0438 |\u0431\u045E\u043B|\u0433\u0430\u0434|\u0438 \u0431|\u043A\u0438 |\u0438\u043B\u0430|\u0451\u043A\u0438| \u0451\u043A|\u0430 \u0431|\u043D \u0431|\u0438\u043D |\u0440 \u04B3|\u0430\u043B\u0430|\u044D\u0440\u043A| \u044D\u0440|\u043B\u0433\u0430| \u049B\u0430|\u0440\u043A\u0438|\u0448 \u04B3|\u0438 \u04B3|\u043D \u043C| \u0431\u043E| \u0431\u0430|\u0438\u043A |\u0430\u0440\u0430|\u0438\u0433\u0438|\u043B\u0438\u0433|\u0440\u0438 |\u049B\u0438\u043B|\u0430 \u0442|\u0431\u0438\u043B| \u044D\u0442|\u043D\u0438\u0448|\u043D\u043B\u0438|\u043A\u043B\u0430|\u0438 \u0432|\u0431\u043E\u0448|\u044D\u0442\u0438|\u0430\u043D\u0438|\u0438\u043C |\u0438 \u043C|\u043E\u043B\u0438|\u049B\u043B\u0430|\u0430 \u04B3|\u043B\u0430\u0448|\u0430\u0442\u043B|\u0442\u0438\u043B|\u0430 \u049B| \u043E\u043B|\u043E\u0441\u0438|\u043C\u0430\u0441|\u049B\u0430\u0440|\u0438\u043D\u043B|\u043B\u0430\u0442| \u049B\u0438|\u0442\u0430\u044A|\u04B3\u0430\u043C|\u0433\u0438 |\u0438\u0431 |\u043C\u043B\u0430|\u045E\u0437 |\u043D \u044D|\u043C\u0443\u043C| \u0434\u0430| \u0431\u0443|\u0430\u0442 |\u0448 \u0432|\u0443\u043D |\u0430\u0442\u0438|\u043C\u043A\u0438|\u0443\u043C\u043A|\u0442\u043B\u0430|\u0438\u0440\u043E|\u045E\u043B\u0438|\u0431\u0430\u0440|\u0438\u0440\u0438|\u0440\u0438\u0448|\u0438\u044F\u0442|\u0430\u043B\u0438| \u0431\u0435| \u049B\u043E|\u0430 \u0448|\u0430\u0440\u043E| \u043A\u0435|\u0438 \u0442|\u0440\u043B\u0430| \u0442\u0435|\u0447\u0430 |\u0440\u0447\u0430|\u0430\u0440\u0447|\u0430 \u045E| \u0448\u0443|\u0442\u0438\u0448|\u043D \u04B3|\u0442\u0433\u0430| \u0441\u0430|\u0430\u0441\u0438| \u0445\u0430|\u0440\u0430\u043A|\u043B\u0438\u043D|\u043E\u043B\u0430|\u0438\u043C\u043E|\u0448\u049B\u0430|\u043B\u0438 | \u0442\u0443|\u0430\u043C\u043B|\u043B\u043B\u0430|\u0441\u0438\u0434|\u043D \u045E| \u0430\u0441|\u043D\u0438\u0434|\u0430 \u0438| \u043A\u0438|\u043D \u0442|\u043D\u0434\u0430|\u043A \u0431|\u0435\u0440\u0430|\u043E\u0448\u049B|\u0441\u0438\u0437|\u043E\u0440 |\u0430 \u043C|\u0440 \u0432|\u0435\u043D\u0433|\u0442\u0435\u043D|\u043C\u0430\u0442|\u043C\u0434\u0430|\u0430\u043C\u0434|\u043B\u0438\u043C|\u0439 \u0442|\u044F\u0442 |\u0438 \u0430|\u0438\u043D\u043E|\u0438\u043B\u0433| \u0442\u043E|\u0442\u043D\u0438|\u0430\u043D\u0430|\u0430\u0441 |\u044D\u043C\u0430| \u044D\u043C|\u0430 \u0451| \u0448\u0430|\u0430\u0448 |\u0430 \u0430|\u0442\u0430\u0440|\u043A\u0430\u0442|\u0430\u043A\u0430|\u0430\u043A | \u0434\u0435|\u0430\u0437\u0430|\u0438\u043B\u043B|\u0441\u0438\u0439| \u0441\u0438| \u0441\u043E|\u0443\u049B\u043B|\u043D \u049B|\u043E\u0434\u0430|\u044A\u043B\u0438|\u0430\u044A\u043B|\u043D\u0438\u043A|\u0430\u0434\u0430| \u043D\u0438|\u0442\u0434\u0430|\u0433\u0438\u043D|\u0443\u043D\u0438|\u0441\u0438\u0442|\u0430\u0439 |\u049B\u043E\u043D|\u043D \u043E| \u0436\u0430|\u043A\u0438\u043C|\u0435\u0447 |\u04B3\u0435\u0447| \u04B3\u0435|\u045E\u0437\u0438|\u043B\u0430\u043A|\u043A\u0435\u0440|\u0438\u043A\u043B|\u043B\u043B\u0438|\u0443\u0440 |\u0437\u0430\u0440|\u0448\u043B\u0430|\u0440\u0438\u0433|\u0438\u0440\u043B|\u0434\u0430\u043C|\u043A\u043E\u04B3|\u0438\u043A\u043E|\u0430 \u0434|\u0430\u043C |\u043D \u0432|\u0440\u0442\u0438|\u0442\u0438\u0431|\u0442\u0430\u043B| \u0438\u0448|\u0447\u0443\u043D|\u0443\u0447\u0443| \u0443\u0447|\u0441\u043B\u0430|\u0430 \u0443|\u0440\u0438\u043D|\u0441\u043E\u0441|\u0430\u0441\u043E| \u0443\u043D|\u043D\u0430 | \u043A\u0430|\u043C\u0443\u04B3|\u0434\u0438\u0433|\u0447 \u043A|\u0430\u0441\u043B|\u043B\u043C\u0430|\u0440\u0430 |\u0431\u0443 |\u0445\u0430\u043B|\u045E\u043B\u0433|\u0438 \u043A|\u0435\u043A\u043B|\u0440 \u0434|\u049B\u0430\u0442|\u0430\u0433\u0430|\u0438 \u049B|\u043E\u0438\u0439|\u043C\u0438\u043B| \u043C\u0438|\u049B\u0430 |\u0438 \u0441|\u0436\u0438\u043D| \u0436\u0438|\u0441\u0438\u043D|\u0440\u043E\u0440|\u0430 \u0432|\u043B\u0430\u0434|\u0430 \u043E|\u0442\u043B\u0438|\u043C\u0438\u044F|\u043D \u0438|\u0430\u0431 |\u0442\u0438\u0440|\u0437 \u043C|\u0434\u0430\u0432|\u0440\u0433\u0430|\u0430\u0433\u0438|\u0430 \u043A|\u043D\u043B\u0430|\u0430\u049B\u0442|\u0432\u0430\u049B|\u0430\u0440\u0442|\u0430\u0451\u0442|\u043B\u0430\u0431",azj:" \u0432\u04D9|\u0432\u04D9 |\u04D9\u0440 |\u0438\u0440 | \u04BB\u04D9| \u0431\u0438| \u04BB\u04AF| \u043E\u043B|\u04AF\u0433\u0443|\u04BB\u04AF\u0433|\u0433\u0443\u0433|\u043D\u0430 |\u0438\u043D |\u043B\u0430\u0440|\u04BB\u04D9\u0440|\u0434\u04D9 | \u0448\u04D9|\u0431\u0438\u0440|\u043B\u04D9\u0440|\u043B\u0438\u043A|\u043C\u0430\u043B|\u0440 \u0431|\u043B\u043C\u0430|\u0440 \u04BB| \u0442\u04D9|\u04D9\u0445\u0441|\u0448\u04D9\u0445|\u04D9\u043D |\u0434\u0438\u0440|\u0443\u0433\u0443|\u0443\u043D\u0430|\u0430\u043D |\u0430\u043B\u0438|\u0430 \u043C| \u043C\u0430|\u0438\u043A\u0434|\u0438\u043D\u0438|\u0440 \u0448|\u0434\u04D9\u043D|\u0430\u0440 |\u0438\u043B\u04D9|\u0433\u0443\u043D|\u0430\u0433 |\u0430\u0441\u044B| \u0458\u0430|\u043C\u04D9\u043A|\u0458\u04D9\u0442| \u043C\u04D9| \u043C\u04AF|\u043A\u0434\u0438|\u04D9\u0441\u0438|\u04D9\u043A |\u0438\u043B\u043C|\u043D\u0438\u043D|\u043D\u0434\u04D9|\u043E\u043B\u043C|\u04D9\u0442\u0438|\u04D9 \u0458|\u0441\u0438\u043D|\u0445\u0441 |\u043D\u0434\u0430|\u043B\u043C\u04D9|\u0458\u0458\u04D9|\u0438 \u0432| \u0433\u0430| \u0430\u0437|\u043E\u043B\u0443|\u0438\u0458\u0458|\u0458\u0430 |\u0438\u043D\u0434|\u0437\u0430\u0434|\u0433\u043B\u0430|\u04AF\u043D |\u043D\u0438 |\u043B\u04D9 |\u0442\u0438\u043D|\u043D \u043C|\u0430\u0437\u0430|\u0430\u0440\u044B|\u04D9\u0442 |\u043D \u0442|\u043C\u0430\u0433|\u043B\u0443\u043D|\u043B\u044B\u0433|\u04D9 \u0431|\u0443\u043D |\u043D\u0443\u043D|\u0433 \u0432|\u043D \u04BB|\u0434\u0430\u043D|\u044B\u043D | \u0435\u0442|\u0442\u043C\u04D9|\u04D9\u0440\u04D9| \u04E9\u0437|\u0434\u0430 |\u04D9 \u0432| \u043E\u043D|\u04D9 \u0430|\u044B\u043D\u0430|\u044B\u043D\u044B|\u0431\u0438\u043B|\u0430 \u0431|\u0441\u044B |\u0438\u043B |\u04D9\u043C\u0438|\u0430\u0440\u0430|\u0441\u0438 | \u0434\u0438|\u04D9 \u043C|\u04D9\u0440\u0438|\u0440\u043B\u04D9| \u0432\u0430|\u04D9 \u04BB|\u0435\u0442\u043C|\u044B\u0493\u044B|\u0430\u043C\u0430|\u0434\u043B\u044B|\u0430\u0434\u043B|\u0440\u0438\u043D|\u0431\u04D9\u0440|\u0440\u044B\u043D|\u043D \u0438|\u043C\u04AF\u0434|\u043D\u044B\u043D| \u04BB\u0435|\u043C\u0430\u0441|\u0438\u043A |\u043D \u0430|\u0434\u0438\u043B|\u0430\u043B\u044B|\u0438\u0440\u043B|\u04D9\u043B\u04D9|\u04AF\u0434\u0430|\u0441\u044B\u043D|\u044B\u043D\u0434|\u0445\u0441\u0438|\u043B\u0438 |\u04D9 \u0434|\u043D\u04D9 | \u0431\u04D9|\u04D9\u0458\u0430| \u0438\u043D|\u04D9 \u0438|\u043B\u04D9\u0442| \u0441\u04D9|\u043D\u044B | \u0438\u0448|\u0430\u043D\u044B|\u0435\u0447 |\u04BB\u0435\u0447|\u0433 \u04BB|\u0435\u0458\u043D|\u04D9 \u0435|\u0434\u044B\u0440| \u0434\u0430|\u0430\u0441\u0438|\u0440\u044B |\u0438\u0448 |\u0438\u0444\u0430|\u043B\u044B\u0493|\u0438 \u0441|\u0444\u0438\u04D9|\u0430\u0444\u0438|\u0434\u0430\u0444| \u0435\u0434|\u043C\u04D9\u0437|\u0443 \u0432|\u043A\u0438\u043B| \u04BB\u0430|\u043E\u043B\u0430|\u043D \u0432|\u04D9\u043D\u0438|\u044B\u0440 |\u0443\u0433 |\u0443\u043D\u043C| \u0431\u0443| \u0430\u0441|\u0441\u0438\u0430|\u043E\u0441\u0438|\u0441\u043E\u0441|\u0438\u043B\u0438|\u044B\u0434\u044B|\u043B\u044B\u0434|\u043D\u043C\u0430|\u044B\u0433 |\u0438\u043D\u04D9|\u04D9\u0440\u0430|\u0441\u0438\u043B|\u0445\u0438\u043B|\u0430\u0445\u0438|\u0434\u0430\u0445|\u0430\u0434\u04D9|\u043C\u0430\u043D|\u0430 \u04BB|\u04D9 \u043E|\u043E\u043D\u0443|\u0430 \u0433|\u04D9\u0437 | \u043A\u0438|\u0441\u0435\u0447| \u0441\u0435|\u044B \u04BB|\u043C\u0438\u043D|\u043B\u0430\u043D|\u04D9\u0434\u04D9|\u0431\u0443 |\u0440\u0430\u0433|\u043B\u044B |\u044B\u043B\u044B|\u0430\u043B |\u04D9 \u0433|\u0440 \u0432|\u043D\u043B\u0430|\u04BB\u0441\u0438|\u04D9\u04BB\u0441|\u0442\u04D9\u04BB|\u04E9\u0437 |\u0438\u0441\u0442| \u0438\u0441|\u043C\u04D9\u0441| \u04D9\u0441|\u0438\u043D\u0430|\u04D9 \u0442|\u04D9\u0442\u043B|\u0430 \u0432|\u0438\u04D9 |\u043D \u0431|\u0442\u04D9\u0440| \u0442\u0430| \u04B9\u04D9|\u0435\u0434\u0438|\u0430\u043B\u0430|\u043A\u0438\u043C|\u0433\u0443 |\u0438 \u0442|\u0443\u043B\u043C|\u043C\u04D9\u04BB|\u043D \u043E|\u0430\u0458\u0430|\u044B \u043E|\u0438\u0430\u043B| \u0441\u043E|\u0438\u043B\u043B|\u0441\u0438\u0458| \u0434\u04D9|\u0432\u0430\u0440|\u0438\u043D\u0441|\u043C\u0438 |\u0493\u044B |\u043D\u0438\u043A|\u0440 \u0438|\u0430\u0433\u043B|\u043A \u04BB|\u0442\u04D9\u043C|\u0442\u0430\u043C|\u0447\u04AF\u043D|\u04AF\u0447\u04AF| \u04AF\u0447|\u0493\u044B\u043D|\u0441\u0430\u0441|\u04D9\u0441\u0430|\u0437 \u04BB|\u04D9\u043C\u04D9|\u0437\u0430\u043C| \u0437\u0430|\u0441\u0442\u0438|\u0440\u04D9\u0444|\u043D \u0435|\u0440 \u0430|\u0438\u043B\u0434|\u04BB\u04D9\u043C|\u044B\u0433\u043B|\u0458\u0430\u043D|\u043C\u0430\u0458|\u043D \u04D9|\u043C\u04D9\u043D|\u043C\u0438\u043B| \u043C\u0438|\u04D9\u0433\u0438|\u0434\u0438\u043D|\u043D \u0434|\u0442\u04AF\u043D| \u0434\u04E9|\u043C\u0438\u0458|\u043A\u0430\u04BB|\u0438\u043A\u0430| \u043D\u0438|\u0444\u0430\u0434|\u0442\u0438\u0444|\u043B \u043E|\u0441\u04D9\u0440|\u0458\u043D\u0438| \u0435\u0458|\u0430\u043D\u0430|\u043B\u04D9\u043D|\u0430\u043C |\u0440\u0438\u043B|\u0430\u0458\u04D9|\u0430\u0448\u044B",koi:"\u043D\u044B |\u04E7\u043D | \u0431\u044B|\u0434\u0430 | \u043F\u0440|\u043B\u04E7\u043D|\u0440\u0430\u0432| \u043C\u043E|\u043F\u0440\u0430| \u0434\u0430|\u0431\u044B\u0434| \u0432\u0435|\u043E\u0440\u0442|\u043B\u04E7 |\u04E7\u0439 |\u043C\u043E\u0440|\u04E7\u043C |\u0430\u0432\u043E| \u043D\u0435|\u0432\u043E |\u044B\u0434 |\u044B\u0441 |\u043D\u04E7\u0439|\u044B\u043D |\u043C \u043F|\u0434 \u043C|\u044B\u043D\u044B|\u0442\u043D\u044B| \u0430\u0441|\u0442\u04E7\u043C|\u043B\u044C\u043D| \u044D\u043C|\u0432\u0435\u0440|\u0441\u044C |\u044C\u043D\u04E7|\u044D\u043C |\u043D \u044D|\u0442\u043B\u04E7| \u043A\u044B|\u0441\u04E7 | \u043F\u043E|\u0435\u0440\u043C|\u0441\u044C\u04E7|\u0440\u0442\u043B|\u0430\u043B\u044C| \u043A\u04E7|\u044D\u0437 | \u04E7\u0442|\u04E7 \u0432|\u0442\u043E |\u0435\u0442\u043E|\u043D\u0435\u0442|\u044B\u043B\u04E7| \u043A\u043E|\u0442\u0448\u04E7| \u043E\u0442| \u0438 |\u044B \u0441|\u0431\u044B |\u04E7 \u0431|\u0441\u0442\u0432|\u043A\u04E7\u0440| \u0432\u04E7|\u0448\u04E7\u043C|\u043A\u044B\u0442|\u0442\u0430 |\u043D\u0430 |\u0437 \u0432| \u0441\u0435| \u0434\u043E|\u0432\u043E\u043B|\u04E7\u0441 | \u0441\u044B|\u044B \u0430|\u043E\u043B\u0430|\u0440\u043C\u04E7|\u0430\u0441 |\u043E\u0437 | \u043E\u0437| \u0441\u0456|\u0430 \u0441|\u0442\u0432\u043E|\u0441 \u043E| \u0432\u044B|\u043B\u0456\u0441|\u04E7 \u043A|\u044B\u0442\u0448|\u04E7 \u0434|\u0438\u0441 |\u0456\u0441\u044C|\u04E7\u0442\u043D|\u0430\u0441\u044C| \u043E\u043B| \u043D\u0430|\u0430\u0446\u0438| \u044D\u0442|\u0430 \u0432|\u0437\u043B\u04E7|\u0441\u0435\u0442| \u0432\u043E| \u0447\u0443|\u043B\u0430\u0441|\u043B\u0430\u043D|\u043C\u04E7 |\u0442\u044B\u0441|\u0440\u0442\u044B|\u04E7\u0440\u0442|\u044B \u043F|\u04E7\u0442\u043B|\u043E \u0441|\u044D\u0442\u0430|\u0434\u0437 |\u043A\u04E7\u0442|\u04E7\u0434\u043D|\u0432\u043D\u044B| \u043C\u044B|\u043D \u043D|\u0443\u0434\u0436| \u0443\u0434|\u0432\u044B\u043B|\u04E7 \u043C|\u0440\u0442\u0456|\u043E\u0440\u0439|\u0438\u0441\u044C| \u0441\u043E|\u0432\u043E\u044D|\u044B\u0434\u04E7|\u0439 \u043E|\u043A\u043E\u043B| \u0433\u043E|\u0441 \u0441|\u0441\u0441\u0438|\u0441\u044B\u043B|\u044B\u0441\u043B|\u0439\u044B\u043D|\u043A\u0438\u043D|\u043E\u043B\u04E7|\u0442\u04E7\u043D| \u0441\u044C|\u0430\u043D\u0430|\u04E7\u0440 |\u0446\u0438\u044F|\u0430 \u0434|\u04E7\u043C\u04E7| \u0432\u0438|\u0437 \u043A| \u044D\u0437|\u044B \u0431|\u0442\u04E7\u0433|\u04E7\u0442 |\u043C\u04E7\u0434|\u0435\u0441\u0442|\u043E\u0441\u0442|\u04E7\u043D\u044B|\u0442\u0438\u0440|\u043E\u0442\u0438|\u0443\u043A\u04E7|\u0447\u0443\u043A|\u043D \u043F|\u043E\u043D\u0434|\u043F\u043E\u043D|\u0441\u043B\u04E7|\u043A\u0435\u0440| \u043A\u0435| \u043E\u0431|\u0441\u0438\u0441|\u0441\u0443\u0434|\u0430 \u043D|\u0434\u043E\u0440|\u043A\u043E\u043D|\u043D\u0435\u043A|\u043D \u0431|\u043B\u04E7\u0442|\u0441 \u0432|\u0442\u0456 |\u044C\u04E7\u0440|\u0442\u0440\u0430| \u0441\u0442|\u043D\u0430\u043B|\u043E\u043D\u0430|\u043D\u0430\u0446|\u043D \u043A|\u043A\u04E7\u0434|\u04E7\u0433 |\u0441\u043A\u04E7|\u0442\u044C |\u0435\u0442\u04E7|\u0434\u04E7\u0441|\u0431\u044B\u0442|\u0440\u043D\u044B|\u04E7 \u043D|\u0442\u0441\u04E7|\u0440\u0440\u0435|\u0430 \u0431|\u043D\u0434\u0430|\u0441 \u0434|\u0430\u0441\u0441|\u044B \u043A|\u0430\u0441\u043B| \u043B\u043E|\u044C\u043D\u044B|\u0441\u044C\u043D|\u044B \u043C|\u0435\u043A\u0438|\u044B \u0434| \u043C\u04E7|\u044C \u043C|\u044B \u043D|\u044B\u0442\u04E7| \u043C\u0435|\u0440\u0439\u04E7|\u0438\u0430\u043B|\u0439 \u0434|\u0438\u0442\u04E7|\u0430 \u043A|\u04E7\u0441\u044C|\u043C\u04E7\u0441|\u043E\u0432\u043D|\u0437\u044B\u043D|\u0430 \u043F|\u043E\u0442\u0441| \u043B\u0438|\u043E\u043B\u044F|\u04E7 \u0430|\u043E\u0441\u0443|\u04E7\u044F |\u043D\u04E7\u044F|\u0435\u0437\u043B|\u0440\u0435\u0437|\u043C\u0435\u0434|\u0441 \u043C| \u0441\u044D|\u044C \u043A|\u0440\u0439\u044B|\u0430\u043A\u043E|\u0437\u0430\u043A| \u0437\u0430|\u044C\u044B\u043D|\u043D\u043D\u0451|\u043C\u04E7\u043B|\u0443\u043C\u04E7| \u0443\u043C|\u044B \u0443|\u043D \u0432|\u043C \u0434|\u043D \u0441| \u0434\u0437|\u043D \u043E|\u0440\u0430\u043D|\u0441\u0442\u0440|\u043E\u0437\u044C|\u043F\u043E\u0437|\u0437 \u043F|\u043E \u0434|\u0446\u0438\u0430|\u043E\u0446\u0438|\u0441\u043E\u0446|\u0438\u043E\u043D|\u0430 \u043C|\u0435\u0441\u043A|\u0447\u0435\u0441|\u043D\u04E7 |\u0437 \u0434|\u0442\u0441\u044C|\u0431\u04E7\u0440| \u0431\u04E7| \u043E\u0432|\u0432\u0435\u0441|\u043A\u044B\u0434|\u04E7 \u0441|\u0432\u043E\u044B|\u043A\u043E\u0434|\u0442\u043A\u043E|\u04E7\u0442\u043A|\u043E\u043B\u044C|\u0434\u0431\u044B|\u0435\u0434\u0431|\u0441\u044C\u044B|\u0447\u044B\u043D|\u0442\u0447\u044B|\u04E7\u0442\u0447|\u0442\u043B\u0430|\u043C\u04E7\u043D|\u0441\u043B\u0430|\u0439\u04E7\u0437| \u0439\u04E7|\u0442 \u0432|\u044B \u0438|\u0435\u0437 |\u043E \u0432|\u043E\u043D\u044B|\u0439\u04E7 |\u0430\u043D\u043D|\u04E7\u043B\u044C| \u043F\u044B|\u0430\u043D |\u043D\u04E7\u0441|\u043D\u0438\u0442| \u0441\u0443|\u043C \u0441",bel:" \u043F\u0440|\u043F\u0440\u0430| \u0456 |\u0430\u0432\u0430|\u043D\u0430 |\u0440\u0430\u0432| \u043D\u0430| \u043F\u0430|\u043D\u044B |\u0432\u0430 |\u0430\u0431\u043E|\u0446\u044C | \u0430\u0431|\u0430\u0435 | \u043C\u0430|\u0430\u0432\u0435|\u0430\u043D\u043D|\u0430\u0446\u044B|\u0441\u0432\u0430| \u0441\u0432|\u0435 \u043F|\u043B\u044C\u043D| \u0447\u0430|\u043D\u0435 |\u043D\u043D\u044F|\u0430\u043B\u0430|\u0430 \u043D|\u0430\u0439 |\u043B\u0430\u0432|\u0447\u0430\u043B| \u043A\u043E| \u0430\u0434| \u043D\u0435|\u0433\u0430 |\u043E\u0436\u043D|\u043A\u043E\u0436|\u0432\u0435\u043A|\u043D\u044F | \u044F\u043A|\u0436\u043D\u044B|\u044B \u0447|\u043C\u0430\u0435|\u0430 \u043F|\u0430\u0433\u0430|\u0431\u043E |\u0435\u043A |\u0430 \u0430|\u0446\u0430 |\u0446\u0446\u0430| \u045E | \u0437\u0430|\u044B\u0445 |\u043F\u0430\u0432|\u0430 \u0441|\u0433\u043E |\u0432\u0456\u043D|\u0434\u043D\u0430|\u0431\u043E\u0434|\u043C\u0456 |\u0432\u0430\u0431|\u0432\u0430\u043D|\u0430\u043C | \u0432\u044B| \u0441\u0430| \u0434\u0430|\u0441\u0442\u0430|\u0430\u0432\u0456|\u043D\u043D\u0435|\u0430\u0441\u0446|\u043D\u0430\u0439|\u0446\u044B\u044F|\u043D\u0430\u0433|\u0430\u0440\u0430|\u0456 \u043D|\u043A \u043C|\u044F\u0433\u043E| \u044F\u0433|\u044C\u043D\u0430|\u043F\u0440\u044B|\u0430\u0446\u044C|\u0456 \u043F|\u043E\u0434\u043D|\u0441\u0442\u0432|\u0430\u043C\u0430|\u043D\u044B\u0445| \u0431\u044B|\u0442\u0432\u0430|\u0434\u0437\u0435|\u0430\u043B\u044C| \u0440\u0430|\u043D\u0456 |\u0456 \u0441|\u0456 \u0430|\u044B\u0446\u044C|\u0430 \u0431|\u0435\u043D\u043D|\u043B\u0435\u043D|\u0446\u0456 |\u043E\u045E\u043D|\u044B\u043C |\u0440\u0430\u0446|\u0456\u043D\u043D|\u0456\u0445 | \u0430\u0441| \u0442\u0430|\u0442\u043E |\u043D\u0430\u0441|\u044F\u043A\u0456| \u0434\u0437|\u0447\u044B\u043D|\u043E\u043B\u044C|\u0456 \u0434|\u0430\u0432\u043E|\u0430\u0434 | \u043D\u0456|\u0441\u0446\u0456|\u044B\u043C\u0456|\u043D\u044B\u043C|\u0431\u044B\u0446|\u044F \u043F|\u044C\u043D\u044B|\u044B\u044F |\u0430\u0440\u043E|\u0430\u043D\u0430|\u0456\u043D\u0430|\u0456 \u0456|\u0440\u0430\u0434| \u0433\u0440|\u043B\u044F |\u045E\u043B\u0435|\u043E \u043F|\u0430 \u045E|\u0440\u044B\u043C|\u043F\u0430\u0434|\u044B\u0456 | \u0456\u043D|\u0430\u043C\u0456|\u0434\u0437\u044F|\u0440\u0430\u043C|\u0446\u044B\u0456|\u0430\u0431\u0430|\u0430 \u0456|\u0434\u0443 |\u0436\u043D\u0430|\u045E\u043D\u0430|\u043D\u0430\u043B|\u043D\u0430\u0446|\u0440\u044B |\u044D\u0442\u0430|\u0433\u044D\u0442| \u0433\u044D|\u043D\u0435\u043D|\u0434\u0430 |\u0430\u0445 |\u0433\u0440\u0430|\u043A\u0430\u0446|\u0443\u043A\u0430|\u0430 \u0437|\u043A\u0456 |\u0430\u0434\u0441|\u045E \u0456|\u043D\u0441\u0442|\u044D\u043D\u043D|\u044F \u0430|\u043D\u043D\u0456|\u043E\u0434\u0443|\u0430 \u0440|\u043D\u043D\u0430|\u0445\u043E\u0434|\u043D\u0430\u043D|\u043F\u0435\u0440|\u0445 \u043F| \u0443 |\u0430\u0434\u0437|\u0456 \u0440|\u043C\u0430\u0434|\u043C \u043F|\u0435 \u043C|\u0430\u0434\u0443|\u0434\u0441\u0442|\u0434\u043B\u044F| \u0434\u043B|\u043E\u045E |\u043D\u0430\u0435|\u0456 \u043C|\u0430\u043A\u043E| \u043A\u0430|\u044B \u045E|\u0431\u0430\u0440|\u0435 \u0430|\u0430\u0446\u0446|\u0443\u044E |\u044B\u0446\u0446|\u0441\u0430\u043C|\u044F\u045E\u043B|\u0430\u043B\u0435|\u0440\u043E\u0434|\u0440\u0430\u0431| \u043F\u0435|\u0448\u0442\u043E| \u045E\u0441|\u0430\u0434\u043D| \u0441\u0443|\u0440\u043E\u045E| \u0440\u043E|\u0434\u0443\u043A|\u043B\u044E\u0431|\u044C \u0441| \u0448\u043B|\u0440\u0430\u0437|\u043D\u0430\u0432|\u0437\u043D\u0430|\u0432\u043E\u043B|\u0443\u0434\u0437|\u0430\u0434\u0430|\u0436\u044B\u0446|\u0447\u043D\u0430|\u0432\u0435 |\u0430 \u0442|\u0430\u0441\u043D|\u0441\u0430\u0446|\u0435\u0440\u0430| \u0440\u044D|\u044F\u043A\u043E|\u043A\u043B\u0430|\u0430\u043D\u044B| \u0448\u0442|\u044C \u0443|\u0430\u044E\u0446|\u043D\u0430\u0440| \u0443\u0441|\u0441\u043E\u0431|\u0430\u0441\u043E|\u043F\u0430\u043C|\u044F \u045E|\u0430\u0432\u044F|\u0447\u044D\u043D|\u0432\u043E\u045E|\u0442\u0430\u043A|\u043D\u0443 |\u044E \u0430|\u044C \u043F|\u0437\u0430\u043A|\u043A\u0430\u0440|\u0435 \u0456|\u044C \u0430|\u0431\u0435\u0441|\u0456\u044F |\u043A\u0456\u044F|\u0445 \u0456|\u0437\u0430\u0431|\u0430\u0441\u0430|\u0456\u043C |\u0436\u0430\u0432|\u0456 \u0437|\u043B\u0435\u0436|\u0442\u0430\u043D|\u0430\u0445\u043E|\u044F\u043B\u044C|\u044B\u044F\u043B|\u043E \u0441|\u044F\u043D\u0430|\u043A\u0430\u043D|\u0430\u043A\u0430|\u0456\u043D\u0448|\u0430\u043B\u0456|\u0432\u044B | \u043C\u043E|\u043D\u0430\u0445|\u044F \u044F|\u043C \u043D|\u043E\u0433\u0430| \u0431\u0435|\u0439 \u0434|\u043E \u0430| \u0441\u0442|\u0435\u043D\u044B|\u0456 \u045E|\u0430 \u0434|\u0435\u0441\u043F|\u0448\u043B\u044E|\u0446\u0446\u044F|\u044B \u0456|\u044B\u0441\u0442|\u0440\u044B\u0441|\u043B\u044E\u0447|\u043A\u043B\u044E|\u0442\u0430\u0446|\u0443\u043B\u044C|\u044B\u043D\u0441|\u0430\u0447\u044B|\u0441\u043F\u0440| \u0441\u043F|\u0430\u045E |\u044B\u043C\u0430|\u0430\u0440\u044B|\u043A\u0430\u043C|\u0435 \u045E|\u0456 \u043A|\u043A\u043E\u043D",bul:" \u043D\u0430|\u043D\u0430 | \u043F\u0440|\u0442\u043E | \u0438 |\u0440\u0430\u0432|\u0434\u0430 | \u0434\u0430|\u043F\u0440\u0430|\u0441\u0442\u0432|\u0432\u0430 |\u0430 \u0441|\u0430 \u043F|\u0432\u043E |\u043D\u043E |\u0438\u0442\u0435|\u0442\u0430 |\u043E \u0438|\u0435\u043D\u0438| \u0437\u0430|\u043D\u0435 | \u043D\u0435| \u0432\u0441|\u0432\u0430\u043D|\u0430\u0432\u043E|\u0430 \u043D|\u043E\u0442\u043E|\u0435 \u043D|\u043E \u043D|\u0430 \u0438|\u043A\u0438 |\u0438\u0435 |\u0442\u0435 |\u043D\u0438 |\u0438\u043C\u0430| \u0438\u043C|\u043B\u0438 |\u0438\u043B\u0438|\u0438\u044F | \u043F\u043E|\u043E\u0432\u0435|\u0430\u043D\u0435|\u0447\u043E\u0432|\u043C\u0430 | \u0447\u043E|\u0438 \u0447|\u0430 \u0434|\u043D\u0438\u0435|\u0430\u043D\u0438|\u0438 \u0434|\u0435\u0441\u0442| \u0438\u043B|\u0432\u0435\u043A|\u0432\u0441\u0435| \u043E\u0431|\u0435\u043A |\u0435\u043A\u0438|\u0441\u0435\u043A|\u0430\u0432\u0430|\u0442\u0432\u043E|\u0441\u0432\u043E| \u0441\u0432|\u0432\u043E\u0442|\u0430 \u0432|\u0438 \u0441|\u043E\u0441\u0442| \u0440\u0430|\u043E\u0432\u0430|\u0430 \u043E|\u0435 \u0438|\u0432\u0430\u0442|\u0438 \u043D|\u0435 \u043F|\u043A \u0438|\u0430 \u0431| \u0432 |\u0438 \u043F|\u043B\u043D\u043E|\u043E \u0434| \u0441\u0435| \u0431\u044A|\u043F\u0440\u0438|\u0440\u0430\u0437|\u0435\u0442\u043E|\u044A\u0434\u0435|\u0431\u044A\u0434|\u0430\u0442\u0430| \u043A\u043E| \u0442\u0440| \u043E\u0441|\u0430\u0446\u0438| \u0441\u044A|\u0431\u043E\u0434|\u043E\u0431\u043E|\u0432\u043E\u0431|\u0430\u0442 |\u0437\u0430 |\u0442\u0435\u043B| \u0435 |\u043E \u0441|\u0434\u0435 |\u043E \u043F|\u0435\u043D |\u0438 \u0432| \u043E\u0442|\u0441\u0435 |\u043D\u0438\u044F|\u0440\u0430\u043D|\u0430\u043B\u043D| \u0434\u0435|\u0431\u0440\u0430|\u0435\u0433\u043E|\u043D\u0435\u0433| \u0438\u0437|\u043E\u0442 |\u044F\u0442\u0430|\u043A\u0430\u043A|\u043E\u0434\u0438|\u0435 \u0441|\u0438 \u0438|\u0434\u0435\u043D|\u043F\u0440\u0435|\u0431\u0432\u0430|\u044F\u0431\u0432|\u0440\u044F\u0431|\u0442\u0440\u044F|\u043D\u0438\u0442| \u043A\u0430|\u044F\u0432\u0430|\u043F\u0440\u043E|\u0441\u0442 |\u0430 \u0437|\u0433\u043E\u0432|\u0432\u0435\u043D|\u0442\u0432\u0435|\u043E \u043E|\u0430 \u0440|\u0430\u043A\u0432|\u043E \u0432|\u0438 \u0437|\u0440\u0435\u0434|\u043D\u043E\u0441|\u0438\u044F\u0442|\u0435 \u0434|\u0449\u0435\u0441|\u043D\u043E\u0432| \u043D\u0438|\u0446\u0438\u044F| \u0434\u043E|\u0439\u0441\u0442|\u043E \u0442|\u0435 \u0442|\u0440\u0436\u0430|\u044A\u0440\u0436|\u0434\u044A\u0440|\u0435\u043D\u043E|\u043F\u043E\u043B| \u0441 |\u043E\u0431\u0440|\u0442\u0432\u0430|\u043D\u043E\u0442|\u0440\u0435\u0441|\u0435\u0439\u0441|\u0438 \u043E|\u0435 \u0432|\u043A\u043E\u0439|\u043E\u0431\u0449|\u043B\u0435\u043D|\u043E\u043D\u0430|\u043D\u0430\u0446|\u0438\u0447\u0435|\u0435\u0437 |\u0431\u0435\u0437| \u0431\u0435|\u0435\u0436\u0434|\u0443\u0432\u0430|\u0432\u0438\u0442|\u0440\u0438 |\u0437\u0430\u043A|\u0438 \u043A| \u043B\u0438|\u0430 \u0435|\u043F\u043E\u0434|\u0435\u043B\u0438|\u043D\u0438\u043A|\u0441\u0438 |\u0435 \u043E|\u0430 \u0442|\u0438 \u0440|\u0442 \u0441|\u043A\u0430 |\u043E\u0435\u0442|\u0435\u043B\u043D|\u043D\u0435\u043D|\u043E\u0439 |\u0433\u0440\u0430|\u0436\u0435\u043D|\u0434\u0440\u0443| \u0440\u0435|\u0430 \u043A|\u0441\u043D\u043E|\u043E\u0441\u043D|\u043B\u0438\u0447|\u0437\u0438 | \u0442\u0430|\u0441\u0430 |\u043D\u0441\u0442|\u0430\u0432\u043D|\u0447\u043A\u0438|\u0438\u0447\u043A|\u0441\u0438\u0447|\u0432\u0441\u0438|\u043B\u044E\u0447|\u043A\u043B\u044E|\u0434\u043D\u043E| \u043C\u043E|\u0435\u043C\u0435|\u0442\u044A\u043F|\u0430 \u0443|\u0438\u0437\u0432|\u0442\u0432\u0438|\u0434\u0435\u0439|\u044F \u043D|\u043A\u0440\u0438|\u0430\u0442\u043E|\u043E \u0440|\u0439 \u043D|\u0438\u043A\u043E|\u0438\u0447\u043D|\u0436\u0430\u0432| \u0434\u044A| \u0442\u043E|\u0431\u0449\u0435| \u0441\u043E|\u043B\u0438\u0442|\u0442 \u043D| \u0441\u0438|\u0442 \u0438|\u0432\u043D\u0438|\u043E\u0434\u043D|\u0436\u0434\u0430|\u0437\u043E\u0432|\u0430\u0437\u043E|\u0443\u0447\u0430| \u0433\u0440|\u043A\u043E\u0435|\u0441\u0442\u044A|\u0432\u043E\u043B|\u043B\u043D\u0438|\u0441\u0440\u0435| \u0441\u0440|\u043A\u0432\u0430|\u043A\u043E\u043D|\u0442\u043D\u043E|\u0430\u043A\u0430|\u0438 \u0443|\u043A\u043E |\u0433\u0430\u043D|\u043E\u0434\u0430|\u0447\u0435\u043D|\u043B\u0441\u0442|\u0435\u043B\u0441|\u0441\u0442\u0440| \u043A\u044A|\u0441\u0442\u0430|\u0440\u043E\u0434|\u043D\u0430\u0440|\u0438 \u043C|\u0438\u0430\u043B|\u043D\u0430\u043B|\u0440\u0443\u0433| \u0434\u0440|\u0447\u0435\u0441|\u0434\u0438 | \u0441\u0430| \u0442\u0435|\u0441\u0442\u043E|\u0434\u043E\u0441|\u0440\u0430\u0436|\u0440\u0435\u0437|\u0447\u0440\u0435|\u0433\u0430\u0442|\u0435\u043E\u0431|\u0430 \u043C|\u043E \u0435|\u0438\u043D\u0435|\u0430\u0441\u0442|\u043E\u0432\u043E|\u0447\u043D\u043E|\u0430\u0432\u0435|\u043C\u0443 | \u043C\u0443|\u0430\u043D\u043E|\u0438\u0442\u0430|\u0438\u043C\u0438|\u0430\u043A\u043E|\u043D\u0430\u043A|\u043B\u0430\u0433|\u043E\u0432\u0438|\u0430\u043D ",kaz:"\u043D\u0435 | \u049B\u04B1|\u0435\u043D |\u04B1\u049B\u044B| \u0431\u0430| \u049B\u0430|\u049B\u04B1\u049B|\u044B\u049B |\u0493\u0430 | \u0436\u04D9|\u04D9\u043D\u0435|\u0436\u04D9\u043D| \u043D\u0435| \u0431\u043E|\u0434\u0435 |\u0434\u0430\u043C|\u0430\u0434\u0430|\u0430 \u049B|\u0442\u0430\u0440|\u044B\u043D\u0430| \u0430\u0434|\u044B\u043B\u044B| \u04D9\u0440|\u044B\u04A3 |\u0430\u043D |\u0456\u043D |\u049B\u044B\u043B|\u0430\u0440 |\u0435\u043C\u0435|\u043D\u0430 |\u0440 \u0430|\u043B\u044B\u049B|\u0443\u0493\u0430|\u0430\u043B\u0430|\u044B\u049B\u0442| \u04E9\u0437|\u043C\u0435\u0441|\u04D9\u0440 | \u0436\u0430|\u043C\u0435\u043D|\u044B\u0493\u044B|\u043B\u044B | \u0434\u0435|\u049B\u0442\u0430|\u043D\u044B\u04A3|\u043D \u049B|\u0493\u0430\u043D|\u0456\u043D\u0435|\u0431\u0430\u0441|\u0430\u0440\u044B| \u043C\u0435| \u049B\u043E|\u0435\u043A\u0435|\u044B\u043D |\u0434\u0430 |\u0435 \u049B|\u0434\u044B |\u0430\u0441\u044B|\u0441\u0435 |\u0435\u0441\u0435|\u0430\u043C |\u0431\u043E\u043B|\u0430\u043D\u0434|\u043D\u0435\u043C| \u0431\u0456|\u0430\u0440\u0430|\u044B \u0431|\u0441\u0442\u0430|\u0442\u0430\u043D|\u043D\u0434\u044B|\u043D \u0431|\u0456\u04A3 |\u0435 \u0431|\u0456\u043B\u0456|\u0442\u0438\u0456| \u0442\u0438|\u0431\u0430\u0440|\u0493\u044B |\u043D\u0434\u0435|\u0435\u0442\u0442|\u0438\u0456\u0441|\u049B\u044B\u0493|\u0456\u0441 |\u043B\u0430\u0440|\u0433\u0435 |\u044B \u0442|\u0456\u043D\u0434|\u0456\u043A |\u0431\u0456\u0440| \u0431\u0435| \u043A\u0435|\u0430\u043B\u0443|\u0435 \u0430|\u0430\u043B\u044B|\u043B\u0443\u044B|\u0430 \u0436|\u0435\u0440\u0456|\u043E\u043B\u044B| \u0442\u0435|\u049B\u044B\u049B|\u043D \u043A| \u0442\u0430|\u043D \u0436|\u0493\u044B\u043D|\u0442\u0442\u0456|\u0456\u043D\u0456|\u0442\u044B\u043D| \u0435\u0440|\u043D\u0434\u0430|\u0456\u043C | \u0441\u0430|\u0435 \u0436|\u0430\u0442\u044B| \u0430\u0440|\u0440\u0493\u0430|\u0435\u0442\u0456|\u0430\u043D\u0430|\u044B \u04D9|\u0443\u044B\u043D|\u043B\u0493\u0430|\u04E9\u0437\u0456|\u043E\u0441\u0442|\u0435\u0433\u0456|\u0442\u0456\u043A|\u049B\u0430 |\u0441\u049B\u0430|\u0440\u044B\u043D|\u043A\u0456\u043D|\u043B\u0443\u0493|\u04A3 \u049B|\u043D\u0456\u04A3|\u0443\u044B |\u0431\u043E\u0441|\u0430\u0441\u049B|\u049B\u0430\u0440|\u0434\u044B\u049B|\u043D\u0430\u043D|\u043C\u044B\u0441|\u043C\u043D\u044B|\u0430\u043C\u043D|\u044B \u043C|\u0430\u0439\u0434|\u043A\u0435 | \u0436\u0435|\u0437\u0456\u043D|\u0440\u0434\u0435|\u0440\u0456\u043D|\u0435 \u0442|\u0433\u0435\u043D|\u044B\u043F |\u0440\u044B |\u0442\u0456 |\u0441\u044B\u043D|\u049B\u0430\u043C|\u0434\u0435\u043D|\u0456 \u0431|\u0433\u0456\u0437|\u0440\u0430\u043B|\u0435 \u04E9|\u043B\u0430\u043D|\u0441\u044B |\u0430\u043C\u0430|\u0442\u0442\u0430|\u0442\u044B\u049B|\u0431\u0435\u0440|\u0434\u0456 |\u0431\u0456\u043B|\u0440\u043A\u0456|\u04E9\u0437 |\u0437\u0434\u0435|\u043A\u0435\u0442|\u049B\u043E\u0440|\u0434\u0430\u0439|\u0443\u0433\u0435|\u044B \u0435|\u044B\u043D\u0434|\u043D\u0435\u0433|\u043E\u043D\u044B|\u0435\u0439 |\u043C\u0435\u0442|\u0430\u043D\u044B|\u0430 \u0442|\u0436\u0430\u0441|\u0430\u0443\u044B|\u043B\u0433\u0435|\u0430\u0441\u0430|\u0435\u0433\u0435|\u0434\u0430\u0440|\u0440\u0443 |\u0430\u0443 |\u0435\u0440\u043A|\u044B \u0436|\u0440\u044B\u043B| \u0442\u043E|\u043D \u043D|\u0435 \u043D|\u0442\u0456\u043D|\u0456\u0440 |\u0441\u0456\u0437|\u0442\u0435\u0440|\u043B\u043C\u0430|\u0456 \u0442|\u043A\u0456\u043C| \u0430\u043B|\u0440 \u043C|\u043B\u0456\u043A| \u043C\u04AF|\u0435 \u043C|\u0442\u04AF\u0440| \u0442\u04AF|\u043A\u0435\u043B|\u043B\u044B\u043F|\u0435\u04A3 |\u0442\u0435\u04A3|\u0440\u043B\u044B|\u043B\u0456\u043C|\u0440\u0434\u044B|\u0430\u0440\u0434|\u0430\u0442\u0442|\u0441 \u0431|\u044B\u0440\u044B|\u0441\u044B\u0437|\u044B\u0441 |\u0435\u043B\u0433|\u0434\u0430\u043B|\u0439\u0434\u0430|\u043E\u0440\u0493|\u0440\u049B\u044B|\u0430\u0440\u049B| \u0436\u04AF|\u0442\u0430\u043B|\u044B\u043B\u043C|\u0430 \u0431|\u0456\u0433\u0456|\u043B\u0434\u0435|\u0456\u0437 |\u049B\u0442\u044B| \u0435\u0448|\u0434\u0435\u0439|\u0430\u0439 |\u0436\u0430\u0493|\u043A\u0442\u0456|\u0456\u043A\u0442|\u0433\u0456\u043D| \u04D9\u043B|\u0442\u0442\u044B|\u04B1\u043B\u0442| \u04B1\u043B|\u0435 \u0434|\u044B\u043D\u044B|\u043B\u0456\u043D|\u0440 \u0431|\u0435\u043B\u0435|\u043A\u04B1\u049B| \u043A\u04B1|\u0430\u043C\u0434|\u043C \u0431| \u0435\u0442|\u043E\u0493\u0430|\u049B\u04B1\u0440| \u043A\u04E9|\u0430\u0493\u0430|\u0442\u043E\u043B|\u0448\u0456\u043D|\u0430\u0439\u044B| \u049B\u044B|\u049B\u0430\u043B|\u0436\u0435\u043A|\u0456 \u043D|\u0435\u0441 |\u0430\u0493\u044B|\u0435 \u043E|\u0435\u043B\u0456| \u0435\u043B|\u043D \u0435|\u0437\u0456 |\u0448\u043A\u0456|\u0435\u0448\u043A|\u043E\u043B\u0443|\u0446\u0438\u044F|\u043C\u0430\u0441|\u0493\u0434\u0430|\u0430\u0493\u0434|\u043B\u0442\u0442|\u0456\u043C\u0434|\u043D\u044B\u043C| \u0434\u0430|\u0430 \u0434|\u04D9\u0441\u0456|\u0441 \u04D9|\u049B\u0430\u0442|\u0456\u0440\u0456| \u0441\u043E|\u04A3 \u0431|\u0430\u0437\u0430|\u043C\u0434\u0430|\u0430\u0439\u043B| \u0430\u0441|\u0493\u0430\u043C|\u049B\u043E\u0493"},Arabic:{arb:" \u0627\u0644|\u064A\u0629 |\u0641\u064A | \u0641\u064A|\u0627\u0644\u062D| \u0623\u0648|\u0623\u0648 | \u0648\u0627|\u0648\u0627\u0644|\u062D\u0642 |\u0629 \u0627|\u0644\u062D\u0642|\u0627\u0644\u062A|\u0643\u0644 |\u0627\u0644\u0645|\u0644\u0643\u0644| \u0644\u0643|\u0644\u0649 |\u0642 \u0641|\u062A\u0647 |\u0648 \u0627|\u0629 \u0648|\u0634\u062E\u0635|\u0629 \u0644|\u0627\u062A |\u0627\u0644\u0623|\u064A \u0623|\u0648\u0646 | \u0634\u062E|\u0645 \u0627|\u0623\u064A | \u0623\u064A|\u0627\u0646 |\u0623\u0646 |\u0645\u0629 |\u064A \u0627|\u0627\u0644\u0627|\u0644\u0627 |\u0647\u0627 |\u0627\u0621 | \u0623\u0646| \u0639\u0644|\u062E\u0635 |\u0646 \u0627| \u0644\u0644|\u062F \u0627|\u0645\u0646 |\u0641\u0631\u062F|\u0645\u0627 |\u0627\u0644\u0639|\u062A \u0627|\u062D\u0631\u064A|\u0639\u0644\u0649|\u0644 \u0641|\u0631\u062F |\u0644 \u0634| \u0644\u0627|\u0631\u064A\u0629| \u0625\u0644|\u0629 \u0623|\u0627 \u0627|\u0646 \u064A| \u0648\u0644|\u0627 \u0644|\u0627 \u064A| \u0641\u0631| \u0645\u0646|\u0629 \u0645|\u0627\u0644\u0642|\u062C\u062A\u0645|\u0646 \u0623|\u0642 \u0627|\u0627\u0644\u0625| \u062D\u0631|\u0644\u0647 |\u0647 \u0644|\u0627\u064A\u0629|\u0644\u0643 |\u0647 \u0627| \u062F\u0648|\u062F\u0629 |\u0627\u064B |\u064A\u0646 |\u0647 \u0648|\u0644\u0629 |\u064A \u062D| \u0639\u0646|\u0645\u0627\u0639|\u064A \u062A|\u0630\u0627 | \u062D\u0642|\u0642\u0648\u0642|\u062D\u0642\u0648|\u060C \u0648|\u0646 \u062A|\u0645\u0639 |\u0635 \u0627|\u0627\u0645 |\u062F \u0623| \u0643\u0627|\u0647\u0630\u0627|\u0627\u0644\u0648| \u0625\u0646|\u0645\u0644 |\u0627\u0645\u0629|\u0639 \u0627|\u0625\u0644\u0649|\u0629 \u0639|\u0645\u0627\u064A|\u062D\u0645\u0627|\u0646 \u0648|\u0644\u062A\u0639| \u0648\u064A|\u064A\u0631 |\u0646\u0648\u0646|\u064A \u0648|\u0627\u0633\u064A|\u0627\u0644\u062C| \u0647\u0630|\u0646\u0633\u0627|\u0648\u0642 |\u062A\u0631\u0627|\u0639\u064A\u0629|\u0647 \u0623| \u0644\u0647|\u0633\u064A\u0629| \u064A\u062C| \u0628\u0627|\u062F\u0648\u0644|\u0627\u0646\u0648|\u0642\u0627\u0646|\u0644\u0642\u0627|\u0629 \u0628|\u0629 \u062A|\u062A\u0645\u0627|\u0627\u0644\u062F|\u064A\u0627\u062A|\u0639 \u0628|\u0633\u0627\u0646|\u0625\u0646\u0633|\u0647\u0645 |\u0639\u0644\u064A| \u0645\u062A|\u0644\u0645\u062C|\u0630\u0644\u0643|\u0639\u0645\u0644|\u0644\u0623\u0633|\u0648\u0632 |\u062C\u0648\u0632|\u064A\u062C\u0648|\u0628\u0627\u0644|\u063A\u064A\u0631|\u0643 \u0627|\u0643\u0627\u0646|\u0633\u0627\u0633|\u0623\u0633\u0627|\u062F\u0645 |\u0644\u0627\u062F|\u0627\u0639\u064A|\u0627\u0644\u0631|\u062A\u0645\u064A|\u062F\u0648\u0646|\u062A\u0645\u062A|\u0644\u062A\u0645| \u064A\u0639|\u0644\u064A\u0647|\u0633\u0627\u0648|\u0627\u062C\u062A|\u064A \u0645|\u0644\u0639\u0627|\u0644\u062C\u0645|\u062A\u0639\u0644|\u0631 \u0648|\u062A\u0645\u0639|\u0645\u062C\u062A| \u0645\u0639|\u064A\u0647 |\u0649 \u0623|\u0641\u064A\u0647|\u0649 \u0627| \u0643\u0644|\u0644\u0627\u062A|\u0645\u0644\u0627|\u0648\u062F |\u0627\u0646\u062A|\u0627\u0644\u0641|\u064A\u0647\u0627|\u064A \u0625|\u062A\u064A |\u0627\u0644\u0628|\u0644\u064A |\u0642\u062F\u0645|\u0627\u0644 |\u0627\u062F |\u0644 \u0627|\u064A\u0632 |\u064A\u064A\u0632|\u0645\u064A\u064A| \u062A\u0645|\u0644\u062D\u0631|\u062A\u0639 |\u0645\u062A\u0639|\u0627 \u0628|\u0639\u0627\u0645|\u0627 \u0648|\u0642 \u0648|\u0631\u0627\u0645|\u0644 \u0644|\u0644\u0627\u062C|\u0631\u0627 |\u0627\u0644\u0634| \u0648\u0625|\u064A\u0645 |\u0644\u064A\u0645|\u0634\u062A\u0631|\u0627 \u062D|\u0648\u0627\u062C|\u0644\u0632\u0648|\u0648\u0644 |\u0627 \u0641|\u0648\u0644\u0629|\u0644\u062D\u0645|\u0623\u0633\u0631| \u0630\u0644|\u0647 \u0641|\u0627\u062A\u0647|\u0645\u0633\u0627|\u0644\u0645\u0633| \u062A\u0639|\u0639\u0646 |\u0647 \u0639|\u0648\u0644\u0647|\u064A\u062A\u0647|\u0646 \u0644|\u0631\u0629 | \u0648\u0633|\u0627\u0629 |\u064A\u062F | \u062A\u062D| \u0645\u0633|\u064A \u064A|\u0644\u062A\u064A|\u0639\u0629 |\u0648\u0644\u064A|\u0644\u062F\u0648| \u0623\u0633| \u0648\u0641|\u0644 \u0648|\u0623\u064A\u0629|\u0646\u064A |\u0627\u0644\u0633|\u0644\u0627\u0646|\u0644\u0625\u0639|\u0629 \u0641|\u0631\u064A\u0627|\u0644 \u0625|\u0645 \u0628|\u0627\u0645\u0644|\u0643\u0631\u0627|\u062A\u0633\u0627|\u0645\u064A\u0639|\u062C\u0645\u064A| \u062C\u0645|\u0623\u0648\u0644|\u0628\u064A\u0629|\u0639\u064A\u0634|\u062A\u062D\u0642|\u0627\u062F\u0629|\u0633 \u0627| \u0645\u0645|\u0645\u0639\u064A|\u062C\u0645\u0627|\u0639\u0627\u062A|\u0627\u0639\u0627|\u0627\u0631\u0633|\u0645\u0627\u0631|\u0645\u0645\u0627|\u0645 \u0648|\u0631\u0627\u0643|\u0627\u0634\u062A|\u0627\u0644\u0637|\u0627\u062C |\u0632\u0648\u0627|\u0627\u0644\u0632| \u0648\u0645|\u062D\u062F\u0629|\u062A\u062D\u062F|\u0644\u0645\u062A|\u0645\u0645 |\u0644\u0623\u0645|\u062F\u0647 |\u0628\u0644\u0627| \u0628\u0644|\u0627\u0631 |\u064A\u0627\u0631|\u062A\u064A\u0627|\u062E\u062A\u064A|\u0627\u062E\u062A|\u0646 \u0645| \u0645\u0631",urd:"\u0648\u0631 | \u0627\u0648|\u0627\u0648\u0631|\u06A9\u06D2 | \u06A9\u06D2| \u06A9\u06CC| \u06A9\u0627|\u06CC\u06BA | \u062D\u0642|\u06A9\u06CC |\u06A9\u0627 | \u06A9\u0648|\u0626\u06D2 |\u06D2 \u06A9|\u06CC\u0627 |\u0633\u06D2 |\u06A9\u0648 |\u0634\u062E\u0635| \u0634\u062E|\u0646\u06D2 | \u0627\u0633| \u06C1\u06D2|\u0645\u06CC\u06BA|\u062D\u0642 | \u06C1\u0648| \u0645\u06CC|\u062E\u0635 |\u06D2 \u0627| \u062C\u0627|\u0627\u0633 | \u0633\u06D2| \u06CC\u0627|\u06C1\u0631 |\u06CC \u0627| \u06A9\u0631| \u06C1\u0631|\u06D2\u06D4 |\u0633\u06CC |\u06C1\u06CC\u06BA|\u0627 \u062D|\u0635 \u06A9|\u0648\u06BA |\u06D2 \u0645| \u0627\u0646|\u0631 \u0634|\u06D4 \u06C1|\u0627\u0626\u06D2|\u0632\u0627\u062F|\u0622\u0632\u0627| \u0622\u0632|\u0627\u0645 |\u0631 \u0627|\u0642 \u06C1|\u0627\u062F\u06CC|\u062C\u0627\u0626|\u06BA \u06A9|\u06C1\u06D2\u06D4|\u0645 \u06A9| \u06A9\u0633|\u0627 \u062C|\u06CC \u06A9|\u0633 \u06A9|\u06A9\u0633\u06CC| \u067E\u0631|\u06D2 \u06AF|\u06C1\u06D2 |\u0627\u0631 |\u062A \u06A9|\u062F\u06CC |\u067E\u0631 |\u0648 \u0627| \u062D\u0627| \u062C\u0648| \u06C1\u06CC|\u0627\u0646 |\u06CC \u062C|\u0631\u06CC | \u0646\u06C1| \u0645\u0639|\u062C\u0648 |\u0644 \u06A9|\u06CC \u062A|\u0646 \u06A9|\u06A9\u0631\u0646|\u0626\u06CC |\u0644 \u06C1|\u062A\u06CC |\u06C1\u0648 |\u06C1 \u0627| \u0627\u06CC|\u0635\u0644 |\u0627\u0635\u0644|\u062D\u0627\u0635|\u0631\u0646\u06D2|\u06CC \u0634|\u0646\u06C1 |\u06D4 \u0627|\u06BA\u06D4 |\u06CC\u06BA\u06D4|\u0631 \u06A9|\u0631 \u0645| \u0645\u0644|\u0648\u06C1 |\u0645\u0639\u0627|\u0631\u06D2 |\u06BA \u0627|\u0646\u06C1\u06CC|\u06D2 \u06C1|\u06D2 \u0628|\u0627\u06CC\u0633|\u06D2 \u0644| \u062A\u0639| \u06AF\u0627|\u06CC\u062A |\u06CC \u062D|\u0627 \u0627|\u06CC \u0645|\u0627\u067E\u0646| \u0627\u067E|\u06A9\u06CC\u0627|\u0645\u06CC |\u06CC \u0633| \u062C\u0633|\u06C1 \u06A9|\u0646\u06CC |\u0627\u0634\u0631|\u0639\u0627\u0634| \u062F\u0648|\u0644\u0626\u06D2| \u0644\u0626|\u0627\u0646\u06C1|\u0648\u0642 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0645\u0644 | \u0642\u0627|\u06A9\u06C1 | \u06AF\u06CC|\u0631 \u0628|\u06C1 \u0645| \u0648\u06C1| \u0628\u0646|\u06CC \u0628|\u0645\u0644\u06A9|\u062C\u0633 |\u0627\u06D4 |\u0631\u06CC\u0642|\u0631 \u0646|\u06D2 \u062C|\u0627\u062F |\u0627\u062A |\u06AF\u06CC |\u062F \u06A9|\u06D2 \u062D|\u062F\u0627\u0631|\u0631 \u06C1|\u06AF\u0627\u06D4|\u0642\u0648\u0645| \u0642\u0648|\u06D2\u060C |\u0627 \u0633|\u062F\u0648\u0633|\u0631 \u067E| \u0648 | \u0634\u0627|\u06CC \u0622|\u06BA \u0645|\u0642 \u062D| \u067E\u0648| \u0628\u0627|\u062E\u0644\u0627|\u0627\u0646\u06D2|\u06CC\u0645 |\u0644\u06CC\u0645|\u0648 \u062A|\u0648\u0646 | \u06A9\u06C1|\u06CC\u060C |\u06D4 \u06A9|\u0627 \u067E|\u0646 \u0627|\u0644\u06A9 |\u0639\u0644\u0627|\u0627 \u0645|\u0642 \u06A9|\u0627\u0626\u06CC|\u0648\u0633\u0631|\u06CC \u06C1|\u0648\u0626\u06CC|\u06CC\u0631 |\u0627 \u06C1|\u0639\u0644\u06CC|\u0648 \u06AF|\u0648\u0631\u06CC|\u062F\u06AF\u06CC|\u0646\u062F\u06AF|\u0648 \u06A9|\u06CC\u0633\u06D2| \u0645\u0646|\u0627\u0626\u062F|\u0631\u0627\u0626| \u0645\u0631|\u067E\u0648\u0631| \u0637\u0631|\u0648\u0645\u06CC|\u06D2 \u062E|\u0633\u0628 |\u0646\u0648\u0646|\u0627\u0646\u0648|\u0642\u0627\u0646| \u0633\u06A9|\u0648\u0627\u0645|\u06CC\u0646 | \u0631\u06A9|\u062A\u0639\u0644|\u0644\u0627\u0642|\u063A\u06CC\u0631|\u062F\u0627\u0646|\u060C \u0627| \u0628\u06CC| \u0645\u0633|\u06CC\u0648\u06BA|\u0646\u0627 | \u0628\u06BE| \u0628\u0631|\u0631\u062A\u06CC|\u0627\u062F\u0627|\u0627\u0645\u0644|\u06CC\u06C1 | \u06CC\u06C1|\u06C1 \u0648| \u0639\u0627|\u06CC \u067E| \u0628\u0686|\u0627\u0641 |\u0644\u0627\u0641| \u062E\u0644|\u06CC\u06D4 |\u06AF\u06CC\u06D4| \u062F\u06CC|\u06BE\u06CC |\u0628\u06BE\u06CC|\u062F\u06C1 |\u062C\u0627 |\u067E\u0646\u06CC|\u0642\u0648\u0627|\u0627\u0642\u0648|\u0631\u06A9\u06BE|\u06D2 \u06CC| \u0639\u0644|\u06A9\u0648\u0626|\u060C \u0645| \u0686\u0627|\u06D2 \u0633|\u0631 \u0639| \u067E\u06CC|\u0628\u0631\u0627|\u0631 \u0633|\u0631 \u062D|\u0633\u0627\u0646|\u0645 \u0627|\u06A9\u0627\u0645|\u0634\u0631\u062A| \u0631\u0627|\u0634\u0627\u0645|\u0645\u0646 |\u0632\u0646\u062F| \u0632\u0646|\u0628 \u06A9|\u062A \u0645|\u0627\u06C1 |\u0627\u0631\u06CC|\u0633 \u0645|\u0631 \u062C| \u0645\u062D|\u0648\u0631\u0627|\u06D2 \u067E|\u0637\u0631\u06CC|\u06C1\u0648\u06BA|\u0627\u0644 |\u06BA \u0633|\u06CC \u0646|\u06A9\u0631\u06D2| \u0645\u0642|\u062A \u0633|\u062A\u062D\u0641| \u062A\u062D|\u0648\u06D4 |\u06C1\u0648\u06D4|\u0628\u0646\u062F| \u0627\u0642|\u062F \u06C1| \u0627\u0645|\u0627\u0645\u06CC|\u0627\u0644\u0627|\u0644\u062A |\u0634\u0631\u06D2|\u06D2 \u0639|\u0627 \u06A9|\u0641\u0631\u06CC",pes:" \u0648 | \u062D\u0642| \u0628\u0627|\u0646\u062F |\u0631\u062F |\u062F\u0627\u0631| \u062F\u0627|\u06A9\u0647 |\u0647\u0631 | \u062F\u0631| \u06A9\u0647|\u062F\u0631 | \u0647\u0631|\u0631 \u06A9|\u062D\u0642 |\u062F \u0647|\u0627\u0632 |\u06CC\u062A | \u0627\u0632|\u06CC\u0627 |\u06A9\u0633 |\u0648\u062F |\u0627\u0631\u062F| \u06CC\u0627| \u06A9\u0633|\u0627\u06CC |\u062F \u0648| \u0628\u0631| \u062E\u0648|\u0642 \u062F|\u0628\u0627\u0634|\u0634\u062F |\u062F \u06A9|\u0627\u0631 |\u062F \u0628| \u0631\u0627|\u0647 \u0628|\u0627\u0646 |\u0622\u0632\u0627| \u0622\u0632|\u0631\u0627 |\u0627\u0634\u062F|\u06CC \u0648|\u0647 \u0627|\u06CC\u0646 |\u06CC\u062F |\u0632\u0627\u062F|\u0633 \u062D|\u062E\u0648\u062F|\u06CC \u0628| \u0627\u0633|\u062F\u0647 |\u062F\u06CC |\u0648\u0631 |\u0627\u06CC\u062F|\u0647 \u062F|\u0631\u06CC |\u0648 \u0627|\u062A\u0645\u0627|\u0627\u062A | \u0646\u0645|\u06CC \u06A9|\u0627\u062F\u06CC|\u0646\u0647 |\u0631\u0627\u06CC|\u062F \u0627| \u0622\u0646|\u0627\u0633\u062A|\u0631 \u0627|\u0631 \u0645| \u0627\u062C|\u0645\u0627\u06CC|\u0648\u0646 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0648 \u0645| \u0627\u0646|\u0627\u0646\u0647| \u0647\u0645|\u0648\u0642 |\u0627\u06CC\u062A| \u0634\u0648|\u06CC \u0627| \u0645\u0648| \u0628\u06CC|\u0628\u0627 | \u062A\u0627|\u0648\u0631\u062F|\u0627\u0646\u0648|\u0633\u062A |\u0648\u0627\u0646|\u0628\u0631\u0627|\u0627\u0645 |\u0634\u0648\u062F|\u0622\u0646 |\u062C\u062A\u0645|\u06CC \u06CC| \u06A9\u0646|\u0631 \u0628|\u06A9\u0646\u062F| \u0645\u0631|\u062A \u0645|\u0647\u0627\u06CC|\u062A \u0627| \u0645\u0633|\u06CC\u060C |\u0645\u0627\u0639|\u0627\u062C\u062A|\u062A\u0648\u0627|\u06CC\u06AF\u0631|\u0648 \u0628|\u062F\u0627\u0646|\u062A \u0648|\u0627 \u0645| \u0628\u062F|\u0639\u06CC |\u06A9\u0627\u0631| \u0645\u0646|\u0645\u0648\u0631| \u0645\u0642|\u06CC \u062F| \u0632\u0646|\u06CC \u0645|\u0646 \u0628|\u0631 \u062E|\u0627\u0647 |\u0627 \u0628|\u0627\u0631\u06CC|\u062F \u0622|\u0645\u0644 | \u0628\u0647|\u0627\u0639\u06CC|\u062F\u060C |\u062F\u06CC\u06AF|\u062A \u0628|\u0628\u0627\u06CC|\u0627\u06CC\u0646| \u0645\u06CC|\u0646 \u0648|\u0642 \u0645| \u0639\u0645| \u06A9\u0627|\u0646 \u0627|\u0648 \u0622| \u062D\u0645|\u0646\u0648\u0646|\u0647 \u0648|\u0648 \u062F|\u062F \u0634| \u0627\u06CC|\u0634\u0648\u0631|\u06A9\u0634\u0648| \u06A9\u0634|\u0644\u06CC |\u0646\u06CC |\u0647 \u0645|\u0628\u0639\u06CC|\u0631 \u0634|\u06CC\u0647 | \u0645\u0644|\u0645\u06CC\u062A|\u06CC \u0631|\u0631\u0646\u062F| \u0634\u0631|\u0645\u06CC |\u0648\u06CC |\u0633\u0627\u0648|\u0642\u0627\u0646| \u0642\u0627|\u0645\u0642\u0627|\u0627\u0648 | \u0627\u0648|\u062F \u0645|\u06AF\u06CC |\u0646\u0645\u06CC| \u0627\u062D| \u0645\u062D|\u0645\u06CC\u0646|\u0626\u06CC |\u0627\u062F\u0627| \u0622\u0645|\u062E\u0648\u0627|\u06AF\u0631\u062F| \u06AF\u0631|\u0645\u0646\u062F| \u0634\u062F|\u0627\u0626\u06CC| \u062F\u06CC|\u0632 \u062D|\u0647\u06CC\u0686| \u0647\u06CC|\u0627\u062F\u0647| \u0645\u062A|\u0646\u0645\u0627|\u062A \u06A9|\u0631\u0627\u0646| \u0628\u0645|\u0646 \u062D|\u0631 \u062A|\u062D\u0645\u0627|\u0627\u0631\u0646|\u0645\u0633\u0627|\u062F\u06AF\u06CC|\u0648\u0645\u06CC|\u0646 \u062A|\u0645\u0644\u0644|\u0628\u0631 |\u0647\u062F |\u0648\u0627\u0647|\u0628\u0647\u0631| \u0627\u0639|\u200C\u0647\u0627|\u0642 \u0648|\u060C \u0627|\u0639\u06CC\u062A|\u06CC\u062A\u0648|\u0627 \u0631|\u0646 \u0645| \u0639\u0642|\u0647\u0645\u0647|\u0627 \u0647|\u0632\u0634 |\u0648\u0632\u0634|\u0645\u0648\u0632|\u0622\u0645\u0648|\u0627\u0646\u062A|\u062A\u06CC |\u062C\u0627\u0645|\u0645\u0648\u0645|\u0639\u0645\u0648|\u062A\u062E\u0627| \u0641\u0631|\u0637\u0648\u0631|\u062F \u062F|\u0647 \u062D|\u0631\u062F\u0627|\u0627\u0648\u06CC|\u0646\u0648\u0627|\u0627\u0646\u06CC|\u0631\u0627\u0631| \u0645\u062C|\u06CC \u0646|\u062D\u062F\u06CC|\u0627\u062D\u062F|\u0646\u062F\u06AF|\u0632\u0646\u062F|\u0634\u062E\u0635| \u0634\u062E|\u200C\u0645\u0646|\u0647\u200C\u0645|\u0631\u0647\u200C|\u0647\u0631\u0647|\u0634\u062F\u0647|\u0639 \u0627|\u0648 \u0647|\u0627\u0633\u06CC|\u0647\u0654 |\u06CC\u062F\u0647|\u0639\u0642\u06CC|\u0627 \u0627|\u0645\u0647 | \u0628\u0634|\u0627\u062F |\u062F\u06CC\u0647|\u0627 \u062F|\u062F\u0648\u0627|\u06CC \u062D|\u0627\u0628\u0639|\u06CC \u062A|\u062E\u0627\u0628|\u0646\u062A\u062E|\u0631\u0648\u0631|\u0648 \u0631|\u0634\u0631\u0627| \u062E\u0627|\u0654\u0645\u06CC|\u0627\u0654\u0645|\u062A\u0627\u0654|\u0627\u064B |\u0627\u0645\u0644|\u0644\u0647 |\u062F \u0631|\u0627\u0633\u0627|\u062E\u0648\u0631|\u0628\u0644 |\u0627\u0628\u0644|\u0642\u0627\u0628|\u06CC\u06A9 |\u0633\u0627\u0646|\u0642\u0631\u0627|\u0627 \u0646|\u062E\u0635\u06CC| \u0627\u0645| \u0628\u0648|\u06CC\u0631 |\u0627\u0644\u0645|\u0628\u06CC\u0646|\u0627\u0647\u062F|\u062A\u0628\u0639| \u062A\u0628",zlm:" \u062F\u0627|\u0627\u0646 |\u062F\u0627\u0646| \u0628\u0631| \u0627\u0648|\u0646 \u0633|\u0631\u06A0 |\u062F\u0627\u0644| \u06A4\u0631|\u0644\u0647 |\u0643\u0646 | \u0643\u06A4|\u0646 \u0627|\u0646 \u0643|\u0646 \u062F|\u064A\u06A0 | \u064A\u06A0|\u06A4\u062F |\u062D\u0642 |\u0648\u0631\u06A0|\u062A\u064A\u0627|\u064A\u0627\u06A4|\u0627\u0631\u0627|\u0643\u06A4\u062F|\u0627\u0648\u0631|\u0631\u062D\u0642|\u0628\u0631\u062D|\u0627\u0644\u0647|\u0623\u0646 |\u0648\u0644\u064A| \u0627\u062A|\u0627\u062A\u0627|\u06A0\u0646 |\u062A\u0627\u0648|\u0627\u06A4 |\u0633\u062A\u064A|\u0644\u064A\u0647|\u0627\u0648 | \u0633\u062A|\u06A4 \u0627|\u064A\u0647 |\u0631\u0627 |\u0647 \u0628|\u0647 \u062F|\u0639\u062F\u0627| \u0639\u062F|\u0646 \u06A4|\u0646 \u0628|\u064A\u0646 | \u062A\u0631|\u0642 \u0643|\u0646 \u064A|\u064A\u0628\u0633|\u0628\u064A\u0628| \u062A\u064A| \u0633\u0648| \u0643\u0628| \u0633\u0627|\u0646 \u0645|\u0646 \u062A|\u0644\u0645 |\u0627\u0644\u0645|\u062F \u0633|\u06A0 \u0639| \u0645\u0646|\u0686\u0627\u0631|\u062F \u06A4|\u0631\u0646 |\u0633\u0627\u0645| \u0645\u0627|\u06BD \u0633|\u0646\u060C | \u0628\u0648| \u0627\u064A|\u0646\u062F\u0642| \u062D\u0642|\u06AC\u0627\u0631|\u0646\u06AC\u0627|\u0628\u0648\u0644|\u0633\u0628\u0627| \u0633\u0628|\u0627\u062A\u0648|\u0627 \u0633|\u0642\u0644\u0647| \u06A4\u0645| \u0645\u0645|\u0648\u0627\u0646|\u0633\u0686\u0627| \u0633\u0686| \u0643\u0633|\u0627 \u0628|\u0633\u0646 | \u0633\u0645|\u06A4\u0631\u0644|\u0627\u0648\u0646|\u0646\u06BD |\u062A\u0646 | \u0628\u0627|\u0647\u0646 |\u0633\u064A\u0627|\u0627 \u06A4|\u0627\u0631\u06A0|\u0628\u0627\u0631|\u06A4\u0627 |\u0628\u0633\u0646|\u0643\u0628\u064A|\u0627\u0645 |\u064A\u0646\u062F|\u064A \u062F|\u0627\u06AC\u064A|\u06A0 \u0628|\u0628\u0627\u06AC|\u064A \u0627|\u0645\u0627\u0646| \u0644\u0627| \u062F |\u062F\u0642\u0644|\u0647\u0646\u062F| \u0647\u0646|\u062A \u062F|\u0627\u062F\u064A|\u0648\u064A\u0646|\u064A\u0643\u0646| \u0646\u06AC|\u060C \u0643|\u0646\u0662 | \u06A4\u0648|\u0628\u06A0\u0633|\u0642\u0662 |\u0627\u062A |\u0627\u0648\u0644|\u0627\u0643\u0646|\u0627\u06BD | \u0633\u0633|\u0648\u0646 |\u0627\u062F | \u0643\u0648|\u0627\u064A\u0646|\u062F\u06A0\u0646| \u062F\u06A0|\u0627\u0626\u0646|\u062A\u0648 |\u062A\u064A |\u0646 \u0647|\u06AC\u064A |\u0633\u064A |\u0642 \u0645|\u0648\u06A0\u0646|\u062F\u0648\u06A0|\u0646\u062F\u0648|\u0644\u064A\u0646|\u0631\u0644\u064A|\u0646\u062A\u0648|\u06A4\u0648\u0646|\u0648\u0627\u062A|\u064A\u0627\u062F|\u062A\u064A\u0643|\u06A0\u0633\u0627|\u06A4\u0645\u0628|\u062A\u0631\u0645|\u0662 \u062F|\u062D\u0642\u0662|\u0648\u0627 |\u0644\u0648\u0627|\u0645\u0627\u0633|\u0648\u0642 |\u0647 \u0645|\u0644 \u062F| \u0645\u0644|\u0648\u0646\u062F| \u06A4\u06A0|\u0627\u060C |\u060C \u062A|\u0644\u0627\u0626|\u0627\u064A |\u0645\u06A4\u0648|\u064A\u0643 |\u064A \u0643|\u0631\u0627\u062A|\u0645\u0631\u0627| \u0628\u064A|\u0633\u0645\u0648|\u0648 \u0643|\u060C \u062F|\u0633\u0648\u0627|\u06A0 \u0645|\u06A0 \u0633|\u06A0\u0662 |\u06A4\u0631\u064A|\u064A\u0631\u064A|\u062F\u064A\u0631|\u0627 \u0627|\u0627\u0633\u0627|\u06A4\u0662 |\u062A\u0627 |\u0633\u0648\u0633|\u060C \u0633|\u062C\u0648\u0627|\u06A0 \u062A|\u0631\u0623\u0646| \u0627\u0646|\u0633\u0623\u0646|\u0631\u064A\u0643|\u064A\u0623\u0646|\u0631\u064A | \u062F\u0631|\u0627\u0645\u0631|\u0643\u0631\u062C| \u06A4\u0644|\u0627 \u062F|\u062C\u0631\u0646|\u0627\u062C\u0631|\u0627\u0631\u0643|\u0644\u0627\u062C|\u062F \u0643|\u0648\u0627\u0631|\u0628\u0631\u0633|\u0648\u0646\u062A|\u0645\u0646\u0648|\u0633\u0627\u0644|\u064A\u0646\u06A0|\u062F\u06A0\u0662|\u0646\u062F\u06A0| \u0645\u06A0|\u0627\u06A4\u0627|\u0633\u0633\u064A|\u0633\u0627\u0633|\u0646\u0646 |\u06A4\u0648\u0644|\u0627\u06AC\u0627| \u0628\u06A0| \u0633\u06A4|\u0645\u0628\u064A| \u0627\u06A4|\u06A0 \u0627|\u0627\u0631\u0623|\u06A4\u0631\u0627|\u064A \u0633|\u0628\u0633 | \u062F\u0644|\u0627 \u0645|\u0645\u0648\u0627|\u06A4\u0644\u0627|\u0645\u0644\u0627|\u06A4\u0631\u0643|\u0643\u0648\u0631|\u0648\u0628\u0648| \u0643\u0623|\u0648\u0643\u0646|\u0623\u0646\u06BD|\u0643\u0633\u0627|\u06A0\u06AC\u0648|\u0627\u062F\u06A4|\u0647\u0627\u062F|\u0631\u0647\u0627|\u062A\u0631\u0647|\u0643\u0648\u0645|\u062A\u0648\u0642|\u0645 \u0633|\u06A0 \u062F|\u062F\u064A | \u062F\u064A|\u0662 \u0633|\u0646\u062F\u064A|\u0627\u0633 |\u0627\u062F\u0627|\u0628\u0648\u0627| \u062F\u0628|\u06A0 \u06A4|\u06BD\u060C |\u0627\u06A4\u0662|\u0631\u062A\u0627|\u0627\u0644 |\u064A\u0627\u0644|\u0648\u0633\u064A| \u0643\u062A|\u0623\u0646\u060C|\u0646\u06A4\u0627|\u062A\u0646\u06A4| \u062A\u0646|\u0645 \u06A4|\u0631\u0633\u0627|\u0645\u0645\u06A4| \u0645\u0631|\u0646 \u062D| \u0643\u0645|\u0646\u0633\u064A|\u062C\u0623\u0646|\u0624\u064A |\u0644\u0624\u064A|\u0627\u0644\u0624|\u0644\u0627\u0644|\u0643\u06A4\u0631|\u0643\u062A |\u0631\u0643\u062A|\u0634\u0627\u0631|\u0645\u0634\u0627| \u0645\u0634|\u062C\u0627\u062F|\u0631\u06AC\u0627",skr:"\u062A\u06D2 |\u0627\u06BA |\u062F\u06CC |\u062F\u06D2 | \u06D4 |\u0648\u06BA | \u062A\u06D2| \u062F\u0627| \u06A9\u0648|\u06A9\u0648\u06BA| \u062D\u0642|\u062F\u0627 | \u062F\u06CC|\u06CC\u0627\u06BA| \u062F\u06D2|\u06CC\u06BA |\u06D2 \u0627|\u0634\u062E\u0635| \u0634\u062E|\u06C1\u0631 |\u06D2 \u06D4|\u0627\u0635\u0644| \u062D\u0627|\u062D\u0642 |\u062E\u0635 | \u06C1\u0631|\u0635\u0644 |\u062D\u0627\u0635|\u06C1\u06D2 | \u06C1\u06D2|\u0627\u0644 |\u0642 \u062D|\u0644 \u06C1| \u0646\u0627| \u06A9\u06CC| \u0648\u0686|\u06D4 \u06C1|\u06CC\u0627 |\u0633\u06CC |\u06D2 \u0645| \u0627\u0648|\u0648\u0686 |\u0627\u062A\u06D2|\u06A9\u06CC\u062A|\u0627 \u062D|\u0627\u062F\u06CC|\u0646\u0627\u0644|\u0635 \u06A9| \u0627\u062A|\u0631 \u0634|\u06C1\u06CC\u06BA| \u06CC\u0627|\u06BA \u062F| \u0627\u06CC|\u06CC\u0633\u06CC| \u0645\u0644|\u0648\u0646\u062F|\u06A9\u06C1\u06CC| \u06A9\u06C1|\u06CC \u062A|\u0632\u0627\u062F|\u0627\u0632\u0627| \u0627\u0632|\u0646\u062F\u06D2|\u06BA \u06A9|\u0627\u0631 | \u0648\u06CC|\u06D2 \u06A9|\u0626\u06D2 | \u0627\u0646|\u06BB \u062F|\u0646\u06C1 | \u06A9\u0631|\u0627\u0648\u0646|\u06D2 \u0648|\u062F\u06CC\u0627|\u06CC \u062F|\u06BA \u0627|\u06D2 \u0628|\u0648\u06CC\u0633|\u0648\u06BB |\u06CC \u0646| \u06C1\u0648|\u062A\u06CC |\u06CC \u06D4| \u0646\u06C1|\u06CC \u0627|\u06CC\u0646\u062F|\u0648 \u0684|\u0622\u067E\u06BB| \u0622\u067E|\u0627 \u0648|\u06D2 \u062C| \u06A9\u0646|\u06D2 \u0646|\u0646\u062F\u06CC|\u062A \u062F|\u06D2 \u062D|\u06CC \u06A9|\u0626\u06CC |\u0645\u0644\u06A9|\u06CC\u062A\u06D2|\u0646 \u06D4|\u062A\u06BE\u06CC| \u062A\u06BE|\u0648\u0646 |\u06BA \u0645| \u0628\u0686|\u06D4 \u0627|\u0646\u0648\u06BA|\u06A9\u0646\u0648|\u06BB\u06D2 |\u0627\u0631\u06CC|\u0627 \u0627|\u06D2 \u06C1|\u0644 \u062A| \u0684\u0626|\u0648\u0642 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0644 \u06A9|\u062E\u0644\u0627| \u062C\u06CC|\u0644\u06A9 |\u062F\u0627\u0631|\u06CC\u062A |\u06A9\u0631\u06BB|\u0627\u0646\u06C1|\u06A9\u0648 |\u06C1\u06A9\u0648| \u06C1\u06A9|\u0646 \u0627|\u0645\u0644 | \u0648\u0633|\u06BA \u0648|\u067E\u06BB\u06D2| \u062A\u0639|\u06CC \u0645|\u0627\u0641 |\u06D2 \u062E|\u0646\u0648\u0646|\u0642\u0646\u0648| \u0642\u0646| \u0644\u0648|\u06D4 \u06A9|\u0631\u06CC |\u0644\u06D2 |\u062A\u0627 |\u06CC\u062A\u0627| \u0642\u0648| \u0686\u0627|\u06C1\u0627\u06BA|\u0684\u0626\u06D2|\u0642 \u062A|\u0627\u06CC\u06C1|\u0631\u06BB |\u06D2 \u062F|\u0631 \u06A9| \u0648 |\u0644\u0627\u0641| \u062E\u0644| \u062C\u0648|\u06CC \u0648|\u0627\u0648 |\u06C1\u0648 |\u0626\u0648 |\u0686\u0626\u0648|\u0628\u0686\u0626|\u06CC\u0631 |\u06C1\u0648\u0648|\u0627 \u0645|\u06CC \u062C|\u0627\u0644\u0627|\u06CC\u0646 | \u062C\u0627|\u0645\u06CC |\u0646\u06C1\u0627|\u0627\u0646 |\u0627\u062A |\u0633\u06B1\u062F| \u0633\u06B1|\u06CC\u0628 |\u0633\u06CC\u0628|\u0648\u0633\u06CC| \u0634\u0627|\u0628 \u062F|\u06CC\u0648\u06BB|\u0627\u0645 |\u0627\u0648\u06BB|\u06D2 \u062A|\u06BB \u06A9| \u0645\u0637|\u06BA \u062A| \u0648\u0646| \u06A9\u0645|\u0646 \u062F|\u0631\u06A9\u06BE| \u0631\u06A9|\u06BB\u06CC |\u06BA \u0622|\u0631\u06CC\u0627|\u06CC \u06C1|\u0627\u062F |\u06CC\u0627\u062F|\u0639\u0644\u0627|\u0631 \u06C1|\u06BA \u0633|\u06CC \u062D|\u062C\u06BE\u06CC|\u0627\u0626\u062F|\u06C1\u06CC |\u0644\u0648\u06A9| \u068B\u0648| \u0633\u0645| \u0633\u0627| \u0645\u0646| \u0645\u0639|\u0628\u0642 |\u0627\u0628\u0642|\u0637\u0627\u0628|\u0645\u0637\u0627|\u06BE\u06CC\u0648|\u06BA \u0641|\u06C1\u0646 | \u06C1\u0646|\u062C\u0648 |\u0648 \u06A9|\u06BA \u0634|\u0631 \u062A|\u06A9\u0627\u0631|\u0645 \u062F|\u06BE\u06CC\u0627| \u067B\u0627|\u063A\u06CC\u0631|\u0648 \u0644|\u0648\u0626\u06CC|\u062C\u06CC\u0627|\u0648\u0627\u0645|\u0642\u0648\u0627|\u06CC \u0633| \u062C\u06BE|\u0644 \u0627|\u0642\u0648\u0645| \u0633\u06CC|\u0630\u06C1\u0628|\u0645\u0630\u06C1| \u0645\u0630|\u0627\u06D2 | \u0627\u06D2|\u062F\u0646 |\u0627 \u062A|\u0633\u0627\u0646|\u0646\u0633\u0627|\u0627\u0646\u0633|\u0631\u06D2 |\u0644\u06CC\u0645|\u0639\u0644\u06CC|\u062A\u0639\u0644|\u0627\u0645\u0644|\u06C1 \u062F|\u06D2 \u0631|\u062F \u0627|\u06A9\u0645 |\u06CC\u06C1\u0648|\u0641\u0627\u0626|\u0686 \u0627| \u06A9\u06BE|\u0645 \u062A|\u0631\u0627 |\u0648\u0631\u0627|\u067E\u0648\u0631|\u06BA \u0628|\u0642 \u062F|\u06D2 \u0642|\u0648\u06A9\u0648|\u06A9\u06BE\u06CC|\u0627 \u06A9|\u0648 \u062F|\u06D2 \u0630|\u067E\u06BB\u06CC|\u0628\u0646\u062F| \u0641\u0631|\u06A9\u0648\u0626|\u0627\u0645\u06CC|\u06CC \u06CC|\u0627\u0626\u06CC|\u0644\u0627\u0642|\u0627\u06CC\u06BA|\u06C1 \u0627| \u0646\u0638|\u0633\u0645\u0627|\u0648\u0645\u06CC|\u06CC\u060C |\u06D2 \u0633|\u062A \u0648|\u06BE\u06CC\u0646|\u06D2 \u0639|\u06CC\u0645 |\u0633\u06C1\u0648| \u0633\u06C1",pbu:" \u062F | \u0627\u0648|\u0627\u0648 |\u067E\u0647 | \u067E\u0647|\u064A\u06D4 | \u062D\u0642|\u0686\u06D0 | \u0686\u06D0|\u0631\u0647 |\u064A \u0627|\u06D0 \u062F| \u0647\u0631|\u0646\u0647 |\u0647\u0631 |\u062D\u0642 | \u0685\u0648|\u0648\u06A9 |\u0685\u0648\u06A9|\u0648 \u0627|\u0647 \u062F|\u0647 \u0627|\u06D4 \u0647|\u0647 \u0648| \u0634\u064A| \u0644\u0631|\u064A \u0686|\u0648 \u062F|\u0631\u064A |\u0644\u0631\u064A|\u0642 \u0644| \u06A9\u069A|\u0648\u064A |\u069A\u06D0 |\u06A9\u069A\u06D0|\u0647 \u06A9|\u063A\u0647 |\u0644\u0648 |\u0631 \u0685|\u0633\u0631\u0647| \u0633\u0631|\u0647 \u067E| \u067C\u0648|\u0648 \u067E|\u0644\u0647 |\u064A\u062A |\u067C\u0648\u0644|\u064A\u0627 |\u06A9\u0693\u064A| \u06A9\u0648|\u062E\u0647 |\u064A\u060C |\u062F\u064A | \u0644\u0647| \u0627\u0632|\u062F \u0645| \u0647\u064A| \u0648\u0627| \u064A\u0627| \u0685\u062E|\u0627\u0632\u0627|\u062F \u0627|\u0648\u0644\u0648|\u0647 \u062A|\u0685\u062E\u0647| \u06A9\u0693|\u0648\u0644 |\u0647\u063A\u0647|\u0647 \u0634|\u064A \u062F| \u0647\u063A|\u06A9\u0648\u0644|\u0632\u0627\u062F|\u0646\u0648 | \u0648\u064A|\u0648 \u064A|\u0647 \u0628|\u0634\u064A\u06D4|\u062F\u06D0 |\u064A\u0648 | \u062F\u064A|\u062A\u0647 |\u062E\u067E\u0644| \u067E\u0631|\u0627\u062F |\u062F \u062F|\u06A9 \u062D| \u062A\u0648|\u0647 \u0645|\u06AB\u0647 |\u0647 \u0647|\u0642\u0648\u0642|\u062D\u0642\u0648|\u0648 \u0645|\u0647 \u062D|\u062F \u0647| \u062A\u0631| \u0645\u0633|\u0634\u064A | \u0646\u0647|\u0693\u064A\u06D4|\u0646\u064A |\u062F \u067E|\u0648\u0627\u062F|\u06D0 \u067E|\u0627\u062F\u064A|\u0648\u0644\u0646| \u064A\u0648|\u062F \u062A|\u0648\u0646\u0648|\u0648\u06AB\u0647|\u064A \u0648|\u0644\u064A | \u062F\u0627|\u064A\u062F | \u0628\u0627|\u062A\u0648\u0646| \u062E\u067E|\u064A \u067E|\u062A\u0648\u06AB|\u0627\u0631 |\u0627\u0646\u062F|\u064A\u0648\u0627|\u06D0 \u0648|\u062F\u0627\u0646| \u0628\u0631|\u0693\u064A | \u0639\u0645|\u0627\u0646\u0647| \u062F\u0647|\u064A\u0685 |\u0647\u064A\u0685|\u0627\u0645\u064A|\u0644\u0646\u064A|\u0628\u0639\u064A|\u0689\u0648\u0644| \u0689\u0648|\u0647 \u0644|\u0627\u064A\u062F|\u0628\u0627\u064A|\u0627\u062A\u0648|\u0647 \u06AB| \u062A\u0627|\u067E\u0644 | \u0645\u0644|\u0627\u064A\u062A|\u0648\u0645 |\u0648\u0646 | \u0644\u0627|\u0647\u064A\u0648| \u0634\u0648| \u062F\u063A|\u0645 \u062F|\u062F\u0647 |\u06D0 \u0627|\u0627\u0646 | \u062A\u0647|\u06A9\u0627\u0631|\u062A\u0648 |\u0645\u064A |\u0627\u0631\u0647|\u0627\u0648\u064A|\u0633\u0627\u0648|\u0645\u0633\u0627|\u0646\u0648\u0646|\u062F\u0647\u063A|\u0648 \u062A|\u064A \u0634|\u0627\u0646\u0648| \u0645\u062D|\u064A\u0646 |\u0627\u062E\u0644| \u06AB\u067C|\u0634\u0648\u064A|\u062F\u063A\u0647|\u0648 \u062D|\u0648\u064A\u060C|\u0646\u064A\u0632|\u0633\u064A |\u0627\u0633\u064A|\u0648\u0646\u062F|\u0642\u0648 |\u0648\u0642\u0648|\u0648 \u06A9|\u0648\u0646\u0647|\u0648\u0645\u064A| \u0648\u06A9|\u064A \u062A| \u0627\u0646|\u0642\u0627\u0646|\u0646\u062F\u06D0|\u0648 \u0631|\u06A9 \u062F|\u0647 \u064A|\u0645\u064A\u0646|\u067E\u0631 |\u067C\u0647 |\u0644\u0627\u0645|\u063A\u0648 |\u0647\u063A\u0648|\u062F \u067C|\u0648 \u0647|\u0644 \u062A|\u0644\u06D2 |\u0648\u0644\u06D2|\u0648\u0648\u0646|\u06A9\u064A |\u0631\u0648 |\u0646 \u06A9|\u0645\u0648\u0645|\u0648\u06A9\u0693|\u067E\u0627\u0631|\u0646 \u0634|\u0645\u0646 | \u0646\u0648| \u0648\u0693| \u0642\u0627|\u06D0 \u0686| \u0648\u0633|\u0685 \u0685|\u0634\u062E\u0635| \u0634\u062E|\u0698\u0648\u0646| \u0698\u0648|\u062A\u0631 |\u06AB\u067C\u0647|\u0648 \u0685|\u0647\u0645 |\u0639\u0642\u064A|\u0631\u062A\u0647| \u0648\u0631|\u0628\u0644 | \u0628\u0644|\u0648 \u0628|\u0647 \u0633|\u069A\u0648\u0648| \u069A\u0648| \u06A9\u0627|\u06D0 \u06A9|\u0648 \u0633|\u0627\u062F\u0647|\u0648\u0646\u06A9| \u063A\u0648|\u062F\u0648 |\u0648 \u0646|\u062A \u06A9|\u0645\u0644 |\u0639\u0645\u0648|\u0644 \u0647| \u067E\u064A|\u0648\u0633\u064A|\u0693\u0627\u0646|\u0648\u0693\u0627|\u064A\u0632 |\u062E\u0635\u064A|\u064A \u0645|\u0627 \u0628|\u0627\u062F\u0627|\u0647 \u0646|\u062E\u0644\u064A|\u0648\u0627\u062E|\u062F\u064A\u0648|\u060C \u062F|\u062F \u0642| \u0647\u0645|\u0627 \u062F| \u0628\u064A|\u062A\u0628\u0639| \u062A\u0628|\u0647 \u0686| \u0639\u0642|\u067E\u0644\u0648|\u0648 \u0644| \u0631\u0627|\u062F \u0628|\u0631\u0627\u064A| \u062F\u062E|\u0646\u06D0 |\u0646\u06A9\u064A|\u062A \u062F|\u0627\u0628\u0639| \u0645\u0642|\u062F \u062E|\u0648\u0631\u0647|\u0634\u0631\u0627| \u0634\u0631|\u0631 \u0645|\u0631\u0633\u0631|\u062A\u0627\u0645|\u0647 \u067C| \u0645\u0646|\u0637\u0647 |\u0633\u0637\u0647|\u0627\u0633\u0637|\u0648\u0627\u0633|\u0644\u06D0 | \u0627\u0633|\u06D4 \u062F|\u0628\u0631\u062E|\u06D0 \u0646"},Devanagari:{hin:"\u0915\u0947 |\u092A\u094D\u0930| \u092A\u094D| \u0915\u093E| \u0915\u0947| \u0964 |\u0914\u0930 | \u0914\u0930|\u0915\u093E | \u0915\u094B|\u0915\u093E\u0930|\u093E\u0930 |\u0924\u093F |\u092F\u093E |\u0915\u094B |\u0928\u0947 |\u094B\u0902 |\u093F\u0915\u093E|\u094D\u0930\u0924| \u0939\u0948| \u0915\u093F|\u0902 \u0915|\u0939\u0948 |\u0927\u093F\u0915|\u0935\u094D\u092F|\u0905\u0927\u093F| \u0905\u0927|\u094D\u0924\u093F| \u0938\u092E|\u094D\u092F\u0915|\u093F \u0915|\u0915\u094D\u0924|\u093E \u0905|\u0915\u0940 |\u093E \u0915| \u0935\u094D|\u0947\u0902 | \u0939\u094B|\u092F\u0915\u094D|\u0938\u0940 |\u0938\u0947 |\u0947 \u0915| \u092F\u093E| \u0915\u0940|\u092E\u0947\u0902|\u0928\u094D\u0924| \u092E\u0947|\u0924\u094D\u092F|\u0948 \u0964|\u0924\u093E |\u0930\u0924\u094D|\u0915\u094D\u0937|\u0947\u0915 |\u092F\u0947\u0915|\u094D\u092F\u0947|\u093F\u0915 |\u0930 \u0939|\u092D\u0940 |\u0915\u093F\u0938| \u091C\u093E| \u0938\u094D|\u0915 \u0935|\u093E \u091C|\u093F\u0938\u0940|\u092E\u093E\u0928| \u0935\u093F|\u0930 \u0938|\u0924\u094D\u0930|\u0940 \u0938|\u0964 \u092A| \u0915\u0930|\u094D\u0930\u093E|\u0917\u093E |\u093F\u0924 | \u0905\u092A| \u092A\u0930|\u0938\u094D\u0935|\u0940 \u0915| \u0938\u0947|\u093E \u0938|\u094D\u092F | \u0905\u0928|\u094D\u0924\u094D|\u093F\u092F\u093E|\u093E \u0939| \u0938\u093E|\u0928\u093E |\u094D\u0924 |\u092A\u094D\u0924|\u0938\u092E\u093E|\u093E\u0928 |\u0930 \u0915|\u093E\u092A\u094D|\u0924\u0928\u094D| \u092D\u0940| \u0909\u0938|\u0930\u093E\u092A|\u0935\u0924\u0928|\u094D\u0935\u0924|\u0930\u094B\u0902|\u0935\u093E\u0930|\u0947 \u0938|\u0925\u093E |\u0939\u094B |\u0947 \u0905|\u093E \u0964|\u0928 \u0915| \u0928 |\u0926\u0947\u0936| \u0930\u093E|\u0937\u093E |\u0905\u0928\u094D|\u0924 \u0939|\u094D\u0937\u093E|\u094D\u0935\u093E|\u091C\u093E\u090F|\u0940 \u092A|\u0915\u0930\u0928|\u093E \u092A|\u0905\u092A\u0928|\u0937\u094D\u091F| \u0938\u0902|\u0947 \u0935|\u0939\u094B\u0917|\u093F\u0935\u093E|\u091F\u094D\u0930|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0938\u0915\u0947| \u092E\u093E|\u0913\u0902 |\u093E\u0913\u0902|\u0930\u0940 |\u0915 \u0938|\u0947 \u092A| \u0928\u093F|\u0940\u092F |\u0930\u0915\u094D|\u094B \u0938|\u093E\u090F\u0917|\u0930\u0928\u0947| \u0907\u0938|\u0935 \u0915|\u092A\u0930 |\u0930\u0924\u093E|\u0930 \u0905| \u0938\u092D|\u0924\u0925\u093E| \u0924\u0925| \u0910\u0938|\u0930\u093E |\u092A\u0928\u0947|\u094D\u0930\u0940|\u093F\u0915\u094D|\u0915\u093F\u092F|\u093E \u0935|\u092E\u093E\u091C|\u0902 \u0914|\u0930 \u0909|\u0926\u094D\u0927|\u0938\u092D\u0940|\u0936\u094D\u092F| \u091C\u093F|\u093E\u0928\u0947|\u093E\u0930\u094D|\u093E\u0930\u093E|\u0926\u094D\u0935| \u0926\u094D|\u090F\u0917\u093E|\u0938\u092E\u094D|\u0947\u0936 |\u093F\u090F |\u093E\u0935 |\u0930 \u092A| \u0926\u0947|\u094D\u0924\u0930|\u093E \u0914|\u093E\u0930\u094B|\u092F\u094B\u0902|\u092A\u0930\u093E|\u092A\u0942\u0930|\u091A\u093F\u0924|\u094D\u0927 |\u0930\u0942\u092A| \u0930\u0942| \u0938\u0941| \u0932\u093F|\u0924 \u0915|\u094B \u092A|\u0902 \u0938|\u0947 \u0932|\u0936\u093F\u0915| \u0936\u093F|\u0935\u093E\u0939|\u0947 \u0914|\u091C\u094B |\u0930\u093E\u0927|\u091C\u093F\u0938|\u0942\u0930\u094D|\u0940 \u092D|\u0942\u092A |\u094B\u0917\u093E|\u0938\u094D\u0925|\u0930\u0940\u092F|\u0924\u093F\u0915|\u094D\u0930 |\u0964 \u0907|\u0907\u0938 | \u0909\u0928|\u0932\u0947 |\u0947 \u092E|\u0932\u093F\u090F|\u092E \u0915|\u0915\u0924\u093E|\u0947 \u092F| \u091C\u094B|\u0928 \u092E|\u0905\u092A\u0930| \u092A\u0942|\u094B \u0915|\u093E \u0909|\u093E\u0939 |\u0928\u0942\u0928|\u093E\u0928\u0942|\u0917\u0940 |\u0926\u0940 |\u093E\u0930\u0940|\u0902 \u092E|\u0964 \u0915|\u0924\u0930\u094D|\u0940 \u0930|\u0936 \u0915|\u092A\u0930\u093F|\u0938\u094D\u0924|\u094B\u0908 |\u0915\u094B\u0908|\u0930\u094D\u092F|\u0940 \u0905|\u0939\u093F\u0924|\u092D\u093E\u0935| \u092D\u093E|\u0924\u093E\u0913|\u093E\u0938 |\u0938\u093E\u092E|\u0935\u093F\u0915|\u0935\u093F\u0935|\u092E\u094D\u092E| \u0938\u0915|\u0915\u0930 |\u093E\u0928\u093E|\u0927 \u0915|\u0928\u093F\u0915|\u092F \u0915|\u0909\u0938\u0915|\u0915\u0943\u0924| \u0958\u093E|\u0928 \u0938|\u091C\u0940\u0935|\u094D\u092F\u093E|\u0930\u0915\u093E|\u094D\u0930\u0915|\u093E\u091C |\u0928\u094D\u092F|\u094D\u092E |\u0930\u094D\u0923|\u0958 \u0939|\u0939\u0958 | \u0939\u0958|\u0940 \u092E|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093E\u092E\u093E|\u0915 \u0914|\u092E\u093F\u0932|\u0947\u0928\u0947|\u0932\u0947\u0928| \u0932\u0947|\u092F\u0947 |\u094B \u0905|\u0947 \u091C|\u0930\u093F\u0935|\u092E\u092F |\u0938\u092E\u092F|\u0935\u0936\u094D|\u0906\u0935\u0936| \u0906\u0935|\u0910\u0938\u0940|\u093E\u0927 |\u0930 \u0926|\u0930\u094D\u0935|\u0938\u093E\u0930|\u092A \u0938|\u092C\u0928\u094D| \u0938\u0939|\u093F\u0927\u093E|\u0935\u093F\u0927|\u0940 \u0928|\u0942\u0928 |\u0958\u093E\u0928",mar:"\u094D\u092F\u093E|\u092F\u093E |\u0924\u094D\u092F|\u092F\u093E\u091A|\u091A\u093E |\u0923\u094D\u092F|\u093E\u091A\u093E| \u0935 |\u0915\u093E\u0930|\u092A\u094D\u0930| \u092A\u094D|\u093F\u0915\u093E|\u0927\u093F\u0915|\u093E\u0930 | \u0905\u0927|\u0905\u0927\u093F|\u091A\u094D\u092F|\u0906\u0939\u0947| \u0906\u0939|\u093E \u0905|\u0939\u0947 |\u093E \u0915|\u093E\u0938 |\u0935\u093E |\u094D\u092F\u0947|\u094D\u0930\u0924| \u0938\u094D|\u0924\u093E |\u093E \u0938| \u0905\u0938| \u0915\u0930|\u0938\u094D\u0935| \u0915\u093E|\u0932\u094D\u092F|\u0930\u0924\u094D|\u093E\u0939\u093F|\u0915\u094B\u0923| \u0915\u094B|\u093F\u0915 |\u092F\u0947\u0915|\u094D\u0935\u093E|\u093E \u0935| \u0924\u094D|\u0930 \u0906|\u094D\u092F |\u0924\u094D\u0930|\u0947\u0915\u093E|\u0915\u094D\u0937|\u093E \u0928| \u0938\u0902|\u093E\u092E\u093E|\u093E\u091A\u094D|\u0902\u0935\u093E|\u093F\u0902\u0935|\u0915\u093F\u0902| \u0915\u093F|\u093E\u0924 |\u0937\u094D\u091F|\u0915\u093E\u0938| \u092F\u093E|\u092F\u093E\u0902|\u093E\u0902\u091A|\u0930\u094D\u092F|\u092E\u093F\u0933| \u092E\u093F| \u0938\u093E|\u0935\u094D\u092F|\u094B\u0923\u0924|\u0928\u0947 |\u0947 \u092A|\u0915\u093E\u092E| \u0938\u092E|\u0902\u0924\u094D|\u092F\u0947 | \u0930\u093E|\u0938\u092E\u093E|\u0924\u0902\u0924|\u0915\u0930\u0923|\u093E \u0906|\u0947 \u0915|\u0939\u093F |\u0947 \u0938|\u0928\u093E |\u093F\u0933\u0923|\u0942\u0928 |\u093E \u092A|\u091F\u094D\u0930|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0940\u092F |\u0935 \u0938|\u0915\u094D\u0924|\u092E\u093E\u0928|\u0930\u094D\u0935| \u0906\u092A|\u0933\u0923\u094D|\u094D\u0930\u094D|\u093E\u0924\u0902|\u0935\u093E\u0924|\u091A\u0947 | \u0935\u093F|\u094D\u0937\u0923|\u0930\u0923\u094D| \u0926\u0947| \u0935\u094D|\u0906\u092A\u0932|\u0939\u0940 |\u093E\u0930\u094D|\u0928\u092F\u0947| \u0928\u092F|\u092E\u093E |\u092F\u093E\u0938| \u091C\u093E|\u0932\u0947\u0932| \u0928\u093F|\u0947 \u0905| \u092A\u093E|\u093E \u092E|\u0932\u0947 |\u093E\u0939\u0940|\u092C\u0902\u0927|\u0947 \u0935|\u094D\u092F\u0915| \u092E\u093E|\u0936\u093F\u0915| \u0936\u093F|\u0926\u0947\u0936|\u093E \u0926|\u092E\u093E\u091C|\u094D\u0930\u0940|\u0932\u0940 |\u093E\u0928 |\u093E\u0902\u0928|\u092A\u0932\u094D| \u0939\u094B|\u093E \u0939|\u0937\u0923 |\u091C\u0947 |\u093F\u091C\u0947|\u0939\u093F\u091C|\u092A\u093E\u0939|\u093E\u0930\u093E|\u092F\u093E\u0924|\u0938\u0930\u094D| \u0938\u0930|\u0930\u093E\u0902|\u0905\u0938\u0932|\u0902\u092C\u0902|\u0938\u0902\u092C|\u093F\u0915\u094D|\u0940 \u092A|\u0902\u091A\u094D|\u0930\u0915\u094D|\u0923\u0924\u094D| \u0906\u0923|\u0932\u093E |\u0938\u094D\u0925|\u0930\u0940\u092F|\u0940\u0924 |\u0902\u0928\u093E|\u0924 \u0935|\u094D\u0935 |\u0915 \u0935|\u0923\u0947 |\u093E\u091A\u0947|\u0928 \u0915|\u0924 \u0915|\u0930\u0924\u093E|\u094D\u0930\u093E|\u092F\u093E\u0939|\u094D\u0924 |\u091A\u0940 |\u092F \u0915|\u0926\u094D\u0927|\u094D\u0935\u0924|\u092F\u0915\u094D|\u0923\u093F |\u0906\u0923\u093F|\u0938 \u0938|\u0902\u0927\u093E|\u0915 \u0938|\u091A\u094D\u091B|\u092F \u0905|\u0924 \u0938|\u0940\u0928\u0947|\u094B\u0923\u093E|\u0915\u0930\u0924|\u0924\u094D\u0935|\u0940\u0932 |\u0940 \u0905|\u0938\u093E\u0930|\u0930 \u0935|\u092D\u093E\u0935|\u0935 \u0924|\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u0947 \u0924|\u0947 \u091C|\u092F\u093E\u092F|\u0902\u091A\u093E|\u0947\u0932\u094D|\u093E\u0928\u0947|\u0947\u0923\u094D|\u0915 \u0906|\u0915\u094D\u0915|\u0939\u0915\u094D| \u0939\u0915|\u0923 \u092E|\u0902\u0930\u0915|\u0938\u0902\u0930|\u0928\u094D\u092F|\u093E\u092F\u0926|\u093E \u0924|\u0924 \u0906| \u0909\u092A|\u0935\u0938\u094D|\u093F\u0935\u093E|\u0947\u0936\u093E|\u0938\u093E\u092E|\u0947 \u092F|\u0947 \u0906|\u0940 \u0935|\u0935 \u092E|\u0924\u0940\u0928|\u0935 \u0906|\u0927\u094D\u092F| \u0905\u0936|\u0927\u093E\u0924|\u0915\u0943\u0924|\u094D\u0915 |\u0926\u094D\u092F|\u093F\u0924 |\u0938\u0932\u0947|\u0947\u0936 |\u0924\u094B |\u0947\u0932 |\u0924\u0940 |\u094D\u0924\u0940|\u0905\u0938\u0947|\u0907\u0924\u0930| \u0907\u0924|\u0938\u094D\u0924|\u0930\u094D\u0923|\u093E \u092C|\u0947\u0932\u0947| \u0915\u0947|\u0939\u0940\u0930|\u091C\u093E\u0939|\u093E \u091C|\u0947\u0924 |\u0942\u0930\u094D|\u092A\u0942\u0930|\u0947\u091A | \u0935\u093E|\u093E\u091C\u093E|\u0940 \u0938|\u0936\u093E |\u092F \u0935| \u0928\u094D|\u092F\u093E\u0935|\u0926\u094D\u0926|\u094D\u0927 |\u0930\u0942\u0928|\u092F\u0926\u094D|\u0915\u093E\u092F|\u093E \u0936|\u0917\u0923\u094D|\u0915 \u0915|\u0930\u093E\u0927| \u0936\u093E|\u092F\u0924\u094D|\u0932 \u0905|\u094D\u092F\u0935|\u0940 \u0915|\u093E\u0935 |\u093E \u092F|\u0924\u094D\u0924|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0930\u0923\u093E| \u0927\u0930|\u093E \u0927|\u092D\u0947\u0926| \u092C\u093E|\u0930\u0915\u093E|\u094D\u0930\u0915|\u0915\u0947\u0932|\u093F \u0935|\u093F\u0937\u094D|\u0924\u0940\u0932|\u092F\u094B\u0917|\u0938\u093E\u0927|\u093E\u0902\u0924|\u0935\u093F\u0935|\u0936\u094D\u0930| \u0927\u0947| \u092E\u0941|\u0935\u0924\u0903",mai:"\u093E\u0915 |\u092A\u094D\u0930|\u0915\u093E\u0930| \u092A\u094D|\u093E\u0930 |\u093F\u0915\u093E|\u094D\u092F\u0915|\u0927\u093F\u0915|\u0915 \u0905|\u094D\u0930\u0924|\u094D\u0924\u093F|\u0935\u094D\u092F| \u0905\u0927|\u0947\u0901 |\u0905\u0927\u093F|\u093F\u0915 | \u0935\u094D|\u0906\u02BC | \u0906\u02BC|\u0915\u094D\u0924|\u092F\u0915\u094D|\u0924\u093F\u0915|\u0915\u0947\u0901|\u0915 \u0935|\u092C\u093E\u0915|\u0915 \u0938|\u091B\u0948\u0915| \u091B\u0948|\u0924\u094D\u092F|\u092E\u0947 |\u0947\u0915 | \u0938\u092E|\u0915\u094D\u0937|\u0939\u093F |\u0930\u0924\u094D|\u0930 \u091B|\u092F\u0947\u0915|\u094D\u092F\u0947|\u0928\u094D\u0924|\u0935\u093E |\u093F\u0915\u0947|\u0915\u0964 |\u0948\u0915\u0964|\u0964 \u092A| \u0905\u092A| \u0938\u094D| \u0935\u093F| \u091C\u093E|\u093F\u0924 |\u0938\u0901 | \u0939\u094B|\u0915\u094B\u0928| \u0915\u094B|\u0924\u094D\u0930|\u0938\u094D\u0935| \u0935\u093E|\u0915 \u0906|\u0937\u094D\u091F| \u0915\u0930|\u0905\u092A\u0928|\u092E\u093E\u0928| \u0915\u093E| \u0905\u0928|\u0924\u093F |\u094D\u0924\u094D|\u0928\u094B |\u0928\u0939\u093F| \u092A\u0930|\u091F\u094D\u0930|\u094D\u092F | \u090F\u0939|\u093F \u0915|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937| \u0930\u093E|\u0938\u092E\u093E|\u094B\u0928\u094B|\u0932 \u091C| \u0928\u0939|\u0924\u093E\u0915|\u093E\u0930\u094D|\u092A\u0928 |\u0924\u0928\u094D|\u0935\u0924\u0928|\u094D\u0935\u0924|\u094D\u0937\u093E| \u0915\u090F| \u0938\u093E|\u094D\u0930\u0940| \u0928\u093F|\u093E \u0906|\u093F\u0935\u093E| \u0938\u0902| \u0926\u0947|\u091C\u093E\u090F|\u0940\u092F |\u0915\u0930\u092C|\u0925\u093E |\u090F\u092C\u093E|\u093E \u092A|\u0928\u093E |\u094D\u0935\u093E|\u0926\u0947\u0936|\u0924\u0964 |\u0930\u0915 |\u0915 \u0939|\u0901 \u0905| \u0938\u092D| \u0906 |\u0924 \u0915|\u091A\u093F\u0924|\u094D\u0924 |\u0935\u093E\u0930|\u0924\u093E |\u093E\u0930\u0915|\u092E\u093E\u091C|\u093E \u0938|\u0930\u0940\u092F|\u0928\u094D\u092F|\u0930\u0924\u093E|\u093E\u0928 |\u094D\u0930\u093E|\u094D\u092F\u093E|\u0930\u0915\u094D|\u093E\u0930\u0923|\u092A\u0930\u093F|\u090F\u0932 |\u0915\u090F\u0932|\u0905\u0928\u094D|\u0930\u092C\u093E|\u0915 \u092A|\u0913\u0930 |\u0906\u0913\u0930| \u0906\u0913|\u0905\u091B\u093F| \u0905\u091B|\u093F\u0930\u094D|\u093E\u0928\u094D|\u0928\u0915 |\u0939\u094B\u090F|\u0915\u0930 |\u0927\u093E\u0930|\u0938\u094D\u0925|\u093E \u0905|\u093F\u092E\u0947|\u0930 \u0906|\u090F\u0939\u093F| \u090F\u0915|\u0947 \u0938|\u0924\u0925\u093E| \u0924\u0925| \u092E\u093E|\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u092A\u094D\u0924|\u0930\u094D\u0935|\u0928\u093F\u0930|\u091A\u094D\u091B|\u0930\u094D\u092F|\u0901 \u0938|\u0915 \u0915|\u0939\u094B |\u093E\u0939\u093F|\u090F\u0924\u0964|\u0930 \u092A|\u093E\u092E\u093E|\u0938\u093E\u092E|\u0937\u093E |\u02BC \u0938|\u0901 \u090F|\u0948\u0915 |\u0926\u094D\u0927|\u0930 \u0905|\u0915 \u091C|\u0938\u094D\u0924|\u093E\u092A\u094D|\u0901 \u0915| \u0938\u0915|\u092F\u0915 |\u0915\u093E\u0928|\u0939\u0928 |\u090F\u0939\u0928|\u0947\u0932 |\u094B\u090F\u0924|\u0924 \u0906|\u093E \u0935|\u0964 \u0915|\u094D\u0924\u0930|\u093E\u090F\u0924|\u094D\u0930\u0915|\u0939\u0941 |\u0915 \u0909|\u092A\u0942\u0930|\u0935\u093F\u0935|\u02BC \u0905|\u091B\u093F | \u0932\u0947|\u0928 \u092A|\u093E\u0938 |\u0930\u093E\u092A|\u0927\u0915 |\u092A\u090F\u092C| \u092A\u090F|\u0930\u093E |\u092F\u0924\u093E|\u0930\u0942\u092A|\u0928 \u0935| \u0915\u0947|\u0937\u093E\u0915|\u092F \u092A|\u0924 \u0939|\u091C\u093E\u0939| \u0913 |\u092D\u093E\u0935|\u092A\u0930 |\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u0938\u092E\u094D|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0942\u0930\u094D|\u0930\u0924\u093F| \u0926\u094B|\u0938\u092D\u0915|\u0964 \u0938| \u091C\u0928|\u0938\u092D |\u092C\u093E\u0927|\u0905\u0928\u0941|\u093F\u0938\u0901| \u0938\u0939|\u0901 \u0935|\u090F \u0938|\u0930\u093F\u0935|\u0924\u0941 |\u0947\u0924\u0941|\u0939\u0947\u0924| \u0939\u0947|\u093E\u0927 |\u0947\u092C\u093E|\u0928 \u0938|\u093F\u0937\u094D|\u0930\u093E\u0927| \u0905\u0935|\u093F\u0924\u094D|\u0935\u093E\u0938|\u091A\u093E\u0930| \u0909\u091A|\u093E\u0930\u093E|\u0928 \u0915|\u0935\u0915 |\u093E \u0915|\u0928\u0942\u0928|\u093E\u0928\u0942|\u090F\u0924 |\u0930\u0940 |\u0947\u0913 |\u0915\u0947\u0913|\u0930\u0923 |\u094D\u0930\u0938|\u093F \u0926|\u0913 \u0935| \u092D\u0947|\u0928\u0939\u0941|\u094B\u0928\u0939|\u094D\u0925\u093F|\u092A\u0924\u094D|\u092E\u094D\u092A|\u0930\u093E\u091C| \u092D\u093E|\u0939\u093F\u092E| \u0939\u0915|\u093E\u092E\u0947|\u094D\u0923 |\u0930\u094D\u0923|\u0939\u093E\u0930|\u093F \u0938|\u0915 \u0926|\u0928 \u0905|\u0924 \u0905|\u0932\u0947\u092C| \u0905\u092D|\u093F\u0936\u094D|\u091C\u0915 |\u093E\u091C\u0915|\u0928 \u0906|\u0935\u093E\u0939|\u0915\u093E\u091C|\u0936\u094D\u092F|\u0935\u0938\u094D|\u0913\u0939\u093F| \u0913\u0939|\u092F\u094B\u0917|\u0964 \u090F|\u0915\u090F |\u0947 \u0913|\u0905\u092A\u0930",bho:" \u0915\u0947|\u0915\u0947 |\u0947 \u0915|\u093E\u0930 |\u0915\u093E\u0930|\u093F\u0915\u093E|\u0927\u093F\u0915|\u0905\u0927\u093F| \u0905\u0927|\u0913\u0930 |\u0906\u0913\u0930| \u0906\u0913|\u0947 \u0905|\u0947 \u0938|\u093E \u0915| \u0938\u0902|\u093F\u0915 |\u0930 \u0939|\u093E \u0938| \u0939\u094B|\u0930 \u0938|\u0947\u0902 |\u092E\u0947\u0902| \u092E\u0947| \u0915\u0930| \u0938\u0947|\u0928\u094B |\u0915\u094D\u0937|\u0938\u0947 | \u0915\u093E|\u0964 \u0938|\u0916\u0947 |\u093E\u0964 |\u0930\u093E | \u0938\u092E| \u0938\u092C|\u094D\u0930\u093E| \u0938\u0915|\u0930 \u0915|\u0928 \u0915|\u0935\u0947 |\u094C\u0928\u094B|\u0915\u094C\u0928| \u0915\u094C|\u091A\u093E\u0939| \u091A\u093E| \u092C\u093E|\u092A\u094D\u0930| \u092A\u094D|\u0925\u093E |\u093F \u0915|\u0924\u093F | \u091C\u093E| \u0938\u093E|\u0947 \u0906|\u092A\u0928 |\u0915\u0930\u0947|\u0924\u093E |\u0939\u094B\u0916|\u0924 \u0915|\u0947\u0964 |\u0947 \u092C|\u0924\u0925\u093E| \u0924\u0925| \u0906\u092A|\u0915\u0947\u0932|\u0938\u0915\u0947| \u0938\u094D|\u0930\u0947 |\u0938\u092C\u0939|\u0915\u0930 |\u0906\u092A\u0928|\u0947 \u0913|\u091C\u093E | \u092A\u0930|\u0937\u094D\u091F| \u0930\u093E|\u0928\u093E |\u0939\u0935\u0947| \u0939\u0935|\u0932\u093E |\u0947\u0932\u093E|\u092C\u0939\u093F| \u0913\u0915|\u094B\u0916\u0947|\u0930 \u092C|\u0939\u0964 | \u0939\u0964|\u0928 \u0938|\u093E\u0937\u094D|\u0930\u093E\u0937|\u094D\u0924 | \u0914\u0930|\u0947 \u091A|\u0964 \u0915|\u0938\u0902\u0917|\u0930 \u0906|\u091F\u094D\u0930|\u094D\u091F\u094D|\u0937\u093E |\u092E\u093E\u0928|\u093E \u0906|\u0902 \u0915|\u093E \u092A|\u094D\u0937\u093E|\u0930\u0915\u094D|\u0939\u0947 |\u093E\u0939\u0947|\u093E\u0924\u093F|\u093E\u0935\u0947| \u091C\u0947|\u0939\u0940 |\u0913\u0915\u0930|\u092E\u093F\u0932|\u093F\u0924 |\u094B \u0938|\u0932 \u091C|\u0907\u0916\u0947|\u0928\u0907\u0916| \u0928\u0907|\u0924\u094D\u0930|\u092E\u093E\u091C| \u092C\u093F|\u0935\u0947\u0964|\u0947 \u091C|\u0915 \u0938|\u093F\u0902 |\u0939\u093F\u0902|\u0915\u0930\u093E|\u0914\u0930 |\u0947 \u092E|\u0938\u092E\u093E|\u0939\u0941 | \u0913 |\u092A\u0930 |\u0947 \u0928|\u0938\u094D\u0925|\u0930\u0940\u092F|\u094D\u0930\u0940|\u0932\u093E\u0964|\u093E\u091C |\u093E\u0928 |\u0915\u093E\u0928|\u0947 \u0924|\u093F\u0930 |\u0924\u093F\u0930|\u0916\u093E\u0924| \u0916\u093E|\u0947 \u0909|\u0928\u0942\u0928|\u093E\u0928\u0942|\u093E\u092E | \u0938\u0941| \u0926\u0947|\u0940 \u0915| \u092E\u093E|\u0930 \u092E|\u092A\u094D\u0924|\u093F\u092F\u093E|\u093E\u0939\u0940|\u092C\u093E\u0964|\u092F\u094B\u0917|\u0940 \u0938|\u0932 \u0939|\u0942\u0928 |\u0935\u094D\u092F|\u0941 \u0915|\u090F \u0915|\u0947 \u0935|\u0902\u0924\u094D|\u0938\u094D\u0935|\u0915\u0947\u0939|\u0940\u092F |\u0916\u0932 |\u0938\u093E\u092E|\u092F\u0924\u093E|\u0924\u093F\u0915|\u0947 \u0939|\u093E\u092A\u094D|\u0930\u093E\u092A|\u0930 \u092A|\u0930 \u0905| \u0932\u094B| \u0938\u0939|\u091C\u0947 |\u094B\u0917 |\u092E \u0915|\u0932\u0947 | \u0928\u093F|\u0947\u0915\u0930|\u093E \u0939|\u092A\u0942\u0930|\u0930 \u0928|\u0947\u0939\u0941|\u094D\u092F |\u092F\u093E | \u092F\u093E|\u0926\u0947\u0936|\u0926\u0940 |\u093E \u092E|\u093E\u0935 | \u0926\u094B|\u0947 \u0926| \u092A\u093E|\u0939\u093F |\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u092C\u093E |\u093F\u0932 | \u0909\u092A|\u094D\u0930\u0924| \u0935\u093F| \u0939\u0940| \u0932\u0947|\u0930\u094B |\u0947 \u0916|\u0920\u0928 |\u0917\u0920\u0928|\u0902\u0917\u0920| \u092E\u093F|\u0937\u0923 |\u094D\u0937\u0923|\u0902\u0930\u0915|\u0938\u0902\u0930| \u0906\u0926| \u090F\u0915|\u0928\u0947 | \u0905\u092A|\u0924\u0902\u0924|\u0935\u0924\u0902|\u094D\u0935\u0924|\u094D\u0924\u0930|\u094D\u092F\u093E|\u0947\u0936 |\u093E\u0926\u0940|\u094D\u0924\u093F|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0915 \u0906|\u094D\u092E |\u091A\u093E\u0930| \u0909\u091A| \u0936\u093E|\u0930\u0940 |\u093E\u0939 |\u092F\u093E\u0939|\u092C\u093F\u092F|\u091A\u093F\u0924|\u0915\u094D\u0924|\u092A\u092F\u094B|\u0909\u092A\u092F|\u0930\u0924\u093E|\u0930 \u0935|\u0928 \u092E|\u0932\u094B\u0917|\u0939 \u0915|\u0928 \u092A|\u0915\u093E\u092E| \u092A\u0942| \u0907 |\u0906\u0926\u093F|\u0908\u0932 | \u0915\u0908| \u0935\u094D|\u092E\u0940 |\u0941\u0930\u0915|\u0938\u0941\u0930| \u091C\u0940|\u0927\u093E\u0930|\u092F \u0938|\u0924\u0930\u094D|\u092D\u0947 |\u0938\u092D\u0947| \u0938\u092D|\u092D\u093E\u0935|\u094D\u0925\u093F|\u093E\u092E\u093E|\u0938\u0930 |\u0930\u094D\u092E| \u0915\u094B| \u092C\u0947|\u094B\u0938\u0930|\u0926\u094B\u0938|\u0923 \u0915|\u093E\u0938 |\u0947 \u092A|\u091C\u093E\u0926|\u0906\u091C\u093E| \u0906\u091C|\u0909\u091A\u093F|\u0917 \u0915|\u093E\u0930\u0940| \u091C\u0930|\u0917\u0947 |\u091C \u0915|\u0940 \u092C|\u0938\u0928 |\u0939\u094B |\u093E \u0924",npi:"\u0915\u094B |\u0928\u0947 | \u0930 |\u093E\u0930 |\u0915\u094D\u0924|\u0915\u093E\u0930|\u092A\u094D\u0930| \u092A\u094D|\u094D\u092F\u0915|\u0935\u094D\u092F| \u0917\u0930|\u093F\u0915\u093E| \u0935\u094D|\u094D\u0930\u0924|\u0927\u093F\u0915|\u094D\u0924\u093F|\u092F\u0915\u094D|\u0905\u0927\u093F| \u0905\u0927|\u093E\u0908 |\u092E\u093E |\u0932\u093E\u0908|\u0924\u094D\u092F|\u093F\u0915 | \u0964 | \u0938\u092E|\u0935\u093E | \u0935\u093E|\u0915 \u0935|\u094D\u0928\u0947|\u0930\u094D\u0928|\u0917\u0930\u094D|\u0928\u094D\u0924|\u091B \u0964|\u0924\u093F\u0932|\u0930\u0924\u094D|\u0924\u094D\u0930|\u0947\u0915 |\u092F\u0947\u0915|\u094D\u092F\u0947|\u093F\u0932\u093E|\u0930 \u0938|\u094B \u0938| \u0938\u094D|\u092E\u093E\u0928|\u0915\u094D\u0937| \u0935\u093F|\u0939\u0941\u0928|\u093E \u0938| \u0939\u0941| \u091B |\u0930 \u091B|\u094D\u0924\u094D|\u0938\u092E\u093E|\u0938\u094D\u0935|\u0964 \u092A| \u0938\u0902|\u0928\u0947\u091B|\u0941\u0928\u0947|\u0939\u0930\u0941|\u0924\u0928\u094D|\u0935\u0924\u0928|\u0947 \u0905|\u093F\u0928\u0947|\u094B \u0905|\u094D\u0935\u0924| \u0915\u093E|\u0947 \u091B|\u0917\u0930\u093F| \u0930\u093E|\u094D\u0930 |\u0924\u093F |\u093E\u0915\u094B| \u0915\u0941|\u0937\u094D\u091F|\u0928\u093E |\u0938\u094D\u0924|\u0915 \u0938|\u0941\u0928\u0948|\u0915\u0941\u0928|\u091F\u094D\u0930|\u0932\u0947 | \u0928\u093F|\u093E\u0928 |\u091B\u0948\u0928| \u091B\u0948|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0924\u093F\u0915|\u091B\u0964 |\u093E\u0930\u094D|\u0924\u093E |\u093F\u0924 |\u0928\u0948 |\u093E \u0905| \u0938\u093E|\u093E \u0935|\u0930\u0941 | \u092E\u093E| \u0905\u0928|\u093E \u0930|\u0930\u0924\u093E|\u0930 \u0930|\u0939\u0930\u0942|\u0947\u091B |\u093E \u092A|\u0930\u0915\u094D|\u094D\u0924 | \u092A\u0930|\u0925\u093E | \u0932\u093E|\u092A\u0930\u093F|\u0926\u0947\u0936|\u0938\u0915\u094B| \u092F\u0938|\u092E\u093E\u091C|\u093E\u092E\u093E|\u094D\u0930\u093E|\u093F\u0935\u093E|\u093E\u0939\u0930|\u094B \u092A|\u094D\u092F |\u0935\u093E\u0930|\u0928 \u0938|\u0964 \u0915|\u0928\u093F |\u094D\u0937\u093E| \u0924\u094D|\u0926\u094D\u0927|\u0930 \u0939|\u0924\u0925\u093E| \u0924\u0925|\u092F\u0938\u094D|\u094D\u092F\u0938|\u0930\u0940 |\u0930 \u0935|\u092A\u0928\u093F|\u0930\u093F\u0928|\u0902\u0930\u0915|\u0938\u0902\u0930|\u092D\u093E\u0935|\u0948 \u0935|\u0938\u092C\u0948| \u0938\u092C| \u0936\u093F| \u0938\u0939|\u0924\u093E\u0915|\u0947 \u0930|\u0924 \u0930|\u0932\u093E\u0917| \u0938\u0941|\u094D\u0937\u0923|\u0926\u094D\u0926| \u0905\u092A|\u0948\u0928 |\u094B \u0935|\u093F\u0915\u094D|\u093E\u0935 |\u0927\u093E\u0930|\u094D\u092F\u093E|\u094D\u0930\u093F|\u093E \u092D|\u090F\u0915\u094B|\u0930 \u092E|\u0928 \u0905|\u094B \u0932| \u0909\u0938|\u0936\u093F\u0915|\u093E\u0924\u094D|\u0938\u094D\u0925|\u0935\u093E\u0939|\u0942\u0930\u094D|\u0936\u094D\u092F|\u093F\u0924\u094D|\u0930\u0915\u094B|\u093E\u0930\u0915|\u0941\u0926\u094D|\u0924\u094B |\u094D\u0924\u094B|\u093E\u0909\u0928|\u0915\u093E\u0928|\u093F\u090F\u0915|\u093E \u0928| \u092A\u0928|\u0928\u0964 |\u0948\u0928\u0964|\u0915\u093E |\u0947\u091B\u0964| \u092D\u0947|\u0930\u094D\u092F|\u0938\u092E\u094D|\u0924\u094D\u092A|\u0938\u093E\u092E|\u0930\u093F\u092F|\u091A\u093E\u0930|\u0928\u093F\u091C|\u0941\u0928 |\u0917\u093F |\u093E\u0917\u093F|\u0909\u0938\u0915| \u092E\u0924| \u0905\u092D|\u092A\u0942\u0930|\u0930 \u0924| \u0938\u0915|\u0938\u093E\u0930|\u0930\u093E\u0927|\u092A\u0930\u093E|\u0905\u092A\u0930|\u0941\u0915\u094D|\u091C\u0915\u094B| \u0909\u092A|\u0930\u093E |\u093E\u0930\u093E|\u094D\u0935\u093E|\u0935\u093F\u0927|\u094D\u0928 |\u093E \u0924|\u0928 \u0917|\u0923\u0915\u094B| \u092A\u093E| \u0926\u093F|\u0915 \u0930|\u0930 \u092A|\u0905\u0928\u094D|\u092D\u0947\u0926|\u093E\u0930\u092E|\u094B \u0906| \u0905\u0930|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093F\u092F |\u0937\u093E |\u093E\u091F |\u092C\u093E\u091F| \u092C\u093E|\u093F \u0930| \u091B\u0964|\u0924\u094D\u0935|\u0924 \u0938|\u0930\u0942 |\u091B \u0930|\u0930\u0915\u093E|\u0935\u093F\u0915|\u0930 \u0909|\u094B\u0917 |\u094D\u0926\u0947|\u0930\u093F\u0935|\u0938\u0915\u093F|\u0948 \u092A|\u0930\u0924\u093F|\u0905\u0928\u0941| \u0906\u0935|\u092F\u0941\u0915|\u093E \u0917|\u0928\u092E\u093E|\u092F\u094B\u0917|\u0917 \u0917|\u0915 \u0905|\u0926\u094D\u0935|\u094D\u0927 |\u0930\u0941\u0926| \u092C\u093F|\u0964 \u0938|\u0909\u0928\u0947|\u093E\u0928\u094D|\u093E \u092E|\u093F\u0915\u094B|\u0930\u094D\u0926|\u093E\u0930\u0940|\u094D\u0924\u0930|\u094B \u0939|\u0939\u093F\u0924| \u0926\u0947|\u0930\u093F\u0915|\u093E \u0915| \u0906\u0927|\u0930\u093E\u091C|\u0930\u094D\u092E|\u094D\u0923 |\u0930\u094D\u0923|\u093F \u0935|\u094D\u092F\u0935|\u0935\u093F\u091A|\u092C\u0948 |\u0938\u0939\u093F|\u0930\u094B\u091C|\u0930\u094D\u0938|\u0908 \u0909|\u094D\u092A |\u0930\u093E\u0924|\u0928\u093F\u0915|\u092E\u093F\u0915|\u091A\u094D\u091B|\u094D\u0925\u093E|\u0935\u093F\u0935|\u0915\u0924\u093E|\u0905\u092D\u093F|\u094D\u0927\u093E",mag:" \u0915\u0947|\u0915\u0947 |\u093E\u0930 | \u0939\u0908|\u0915\u093E\u0930|\u0908\u0964 |\u0939\u0908\u0964|\u093F\u0915\u093E|\u0947 \u0905|\u0927\u093F\u0915|\u0905\u0927\u093F| \u0905\u0927|\u0930 \u0939|\u0947 \u0915|\u0914\u0930 | \u0914\u0930|\u093E \u0915|\u0947 \u0938|\u0938\u092C | \u0938\u092C| \u0915\u0930|\u0947\u0902 |\u0925\u093E |\u092E\u0947\u0902| \u092E\u0947|\u0924\u0925\u093E| \u0924\u0925|\u093F\u0915 | \u0939\u094B| \u0938\u092E|\u0915\u094D\u0937|\u0928\u093E |\u092C \u0915|\u0930 \u0938| \u0938\u0902|\u093E \u0938|\u0915\u0930 | \u092D\u0940|\u0964 \u0938| \u0938\u093E| \u0938\u0947| \u0915\u093E| \u0905\u092A|\u094D\u0930\u093E|\u092A\u094D\u0930| \u092A\u094D|\u0938\u0947 |\u092D\u0940 | \u0915\u094B|\u0924 \u0915| \u092A\u0930|\u0930\u093E |\u0915 \u0939|\u092A\u0928 |\u0905\u092A\u0928| \u0938\u0915|\u092F\u093E |\u0924\u093F |\u0930 \u0915|\u0940 \u0915| \u092F\u093E|\u0915\u0930\u0947| \u091C\u093E|\u0930\u0947 | \u0913\u0915|\u094D\u0924 |\u0938\u0915 |\u0928\u094B |\u093E\u0928 |\u092E\u093E\u0928|\u0913\u0915\u0930|\u093E \u092A|\u0928 \u0915|\u0947\u0932 | \u0928\u093E|\u0964 \u0915|\u0930\u0915\u094D| \u0938\u094D|\u0939\u0940 |\u0939\u094B\u090F| \u090F\u0915|\u092A\u0930 |\u0926\u0940 |\u091F\u094D\u0930|\u0924\u093E |\u0935\u094D\u092F|\u0939\u0908 | \u0936\u093E|\u0947 \u0909| \u0926\u0947|\u0924\u094D\u0930|\u093E\u0926\u0940| \u0930\u093E| \u0939\u0940|\u0915\u093E\u0928|\u093F\u0924 |\u092E \u0915|\u0932 \u091C|\u093E\u092E |\u0940 \u0938|\u0947 \u092D|\u0928 \u0938|\u092E\u093E\u091C|\u0937\u094D\u091F|\u0937\u093E | \u0932\u0947|\u0915 \u0938|\u092C\u0947 |\u0935\u0947 |\u093E\u0935\u0947|\u092E\u093F\u0932|\u0930 \u092E|\u094D\u092F |\u093E \u0939|\u0932\u093E |\u092A\u094D\u0924|\u0928\u0942\u0928|\u093E\u0928\u0942|\u091C\u093E |\u0947\u0915\u0930|\u094D\u0937\u093E|\u094D\u0930\u0924|\u0902\u0924\u094D|\u0930 \u0914|\u094B\u0908 |\u0915\u094B\u0908|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937| \u092E\u093E|\u0930\u094B | \u091C\u0947|\u0915\u0930\u093E|\u094B\u090F |\u093E\u092A\u094D|\u0930\u093E\u092A|\u0938\u092E\u093E|\u0942\u0928 |\u094B \u0938|\u0938\u094D\u0935|\u094D\u0924\u093F|\u0938\u093E\u092E|\u094B\u0928\u094B|\u0915\u094B\u0928| \u0935\u094D|\u0930 \u0905|\u094D\u092E | \u0935\u093F| \u0938\u0939|\u0947 \u092E|\u0915\u094D\u0924|\u092F\u094B\u0917|\u0930 \u0935|\u0915\u093E\u092E|\u0932 \u0939| \u0928\u093F|\u0926\u0947\u0936|\u092A\u0942\u0930|\u0935\u093E\u0930| \u0907 |\u0902\u0930\u0915|\u0938\u0902\u0930|\u090F \u0915|\u0930 \u092A| \u0938\u0941|\u0924\u0902\u0924|\u0935\u0924\u0902|\u094D\u0935\u0924|\u093E \u092E|\u0935 \u0915|\u0947 \u0935|\u093E\u0925 |\u0938\u093E\u0925| \u0926\u094B|\u0939\u094B\u092C| \u092A\u093E|\u094B \u0915|\u0947 \u092C|\u094B\u0917 | \u0909\u092A|\u0938\u094D\u0924|\u092A\u0930\u093F|\u0928 \u092A|\u0947 \u0924|\u094D\u0924\u0930|\u0932\u0947\u0932|\u0947 \u0913|\u091A\u093E\u0939| \u091A\u093E|\u092F \u0915|\u0935\u093E |\u0947\u0936 |\u092F \u0938|\u0928 \u0939|\u0937\u0923 |\u093E \u092C|\u0964 \u0924|\u090F\u0915 |\u090F\u0932 |\u0940\u092F |\u0915\u0947\u0915|\u0947 \u0939|\u0930 \u0906|\u093F \u0915|\u0938\u094D\u0925|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093E\u092E\u093E|\u0930\u0940\u092F|\u094D\u0930\u0940|\u0924\u093F\u0915|\u093E\u0924\u093F| \u092C\u093F|\u091A\u093E\u0930|\u0947 \u0906|\u093E\u0938 | \u0909\u091A|\u093E \u0924|\u092F\u0915\u094D|\u094D\u092F\u0915|\u093F\u0932 |\u092E\u092F |\u0938\u092E\u092F|\u0936\u093E\u0926|\u092A\u092F\u094B|\u0909\u092A\u092F|\u0947 \u0916|\u0930\u093F\u0935| \u092A\u0942|\u0947 \u0932|\u0947 \u091A|\u094C\u0928\u094B|\u0915\u094C\u0928| \u0915\u094C|\u0902 \u0915|\u0938\u0902\u0917|\u0928 \u0926|\u0902 \u0938|\u0923 \u092A|\u094D\u0937\u0923|\u0930 \u0928|\u0947 \u0928|\u094B \u092D|\u0915\u0930\u094B|\u093E \u0914|\u0930\u0924\u093E|\u093E\u0935 |\u092D\u093E\u0935|\u0915 \u0914|\u0930\u094D\u092E|\u094B\u0938\u0930|\u0926\u094B\u0938|\u0923 \u0915|\u0947 \u092A|\u0928 \u0914|\u092C \u0939|\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u093E\u092C\u0947|\u0928\u093F\u092F|\u091A\u093F\u0924|\u0909\u091A\u093F|\u093F\u0924\u094D|\u0917 \u0915|\u0947\u0964 |\u0924 \u0938|\u0940 \u0936|\u0902 \u0936|\u090F\u0915\u0930|\u0964 \u090F|\u0924\u0928 | \u0913 |\u0930\u0940 |\u094D\u0930 |\u091C\u0947 |\u0915 \u0915| \u0938\u0940|\u0938\u0928 |\u093F\u0935\u093E| \u0905\u0928|\u0942\u0930\u093E| \u092C\u091A|\u090F\u0964 | \u092C\u0947|\u0924 \u0939| \u0924\u0915| \u092E\u093F|\u0927\u093E\u0930|\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u093F\u0932\u093E|\u094D\u0935\u093E|\u093F \u092E| \u0906\u0926|\u0928\u0947 |\u0915\u090F\u0932| \u0915\u090F|\u094D\u092F\u093E"}},xp=2048,Tp=10,fl=300,Ca={}.hasOwnProperty,Sn,va={};for(Sn in Mo)if(Ca.call(Mo,Sn)){let e=Mo[Sn],t;va[Sn]={};for(t in e)if(Ca.call(e,t)){let u=e[t].split("|"),n={},a=u.length;for(;a--;)n[u[a]]=a;va[Sn][t]=n}}function hl(e,t={}){let u=[...t.whitelist||[],...t.only||[]],n=[...t.blacklist||[],...t.ignore||[]],a=t.minLength!==null&&t.minLength!==void 0?t.minLength:Tp;if(!e||e.length<a)return Ro();e=e.slice(0,xp);let r=Cp(e,yp);return!r[0]||!(r[0]in va)?!r[0]||r[1]===0||!El(r[0],u,n)?Ro():bl(r[0]):wp(e,kp(pl(e),va[r[0]],u,n))}function wp(e,t){let u=t[0][1],n=e.length*fl-u,a=-1;for(;++a<t.length;)t[a][1]=1-(t[a][1]-u)/n||0;return t}function Cp(e,t){let u=-1,n,a;for(a in t)if(Ca.call(t,a)){let r=vp(e,t[a]);r>u&&(u=r,n=a)}return[n,u]}function vp(e,t){let u=e.match(t);return(u?u.length:0)/e.length||0}function kp(e,t,u,n){t=Dp(t,u,n);let a=[],r;if(t)for(r in t)Ca.call(t,r)&&a.push([r,Ap(e,t[r])]);return a.length===0?Ro():a.sort(Sp)}function Ap(e,t){let u=0,n=-1;for(;++n<e.length;){let a=e[n],r=fl;a[0]in t&&(r=a[1]-t[a[0]]-1,r<0&&(r=-r)),u+=r}return u}function Dp(e,t,u){if(t.length===0&&u.length===0)return e;let n={},a;for(a in e)El(a,t,u)&&(n[a]=e[a]);return n}function El(e,t,u){return t.length===0&&u.length===0?!0:(t.length===0||t.includes(e))&&!u.includes(e)}function Ro(){return bl("und")}function bl(e){return[[e,1]]}function Sp(e,t){return e[1]-t[1]}var Fp=/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,Pp=/[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g,Bp=/[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,Lp=/(\s+)|([\p{P}\p{S}])/gu,_p=[["zh-CN",Fp],["ja",Pp],["ko",Bp]];function ka(e){if(!e)return"auto";let t="auto",u=0,n=0,a=e.match(Lp);a&&(n=a.reduce((i,o)=>i+o.length,0));let r=e.length-n;for(let i of _p){let o=i[1],s=i[0],l=e.match(o),c=l?l.length:0;c>u&&(u=c,t=s)}return u*2.5/r>.5?t:"auto"}var yl=new Map([["afr","af"],["amh","am"],["arb","ar"],["azj","az"],["bel","be"],["bul","bg"],["ben","bn"],["bos","bs"],["cat","ca"],["ceb","ceb"],["ces","cs"],["dan","da"],["deu","de"],["ell","el"],["eng","en"],["epo","eo"],["spa","es"],["est","et"],["fas","fa"],["fin","fi"],["fra","fr"],["gax","ga"],["glg","gl"],["guj","gu"],["hau","ha"],["heb","he"],["hin","hi"],["hrv","hr"],["hun","hu"],["hye","hy"],["ind","id"],["ibo","ig"],["ita","it"],["jpn","ja"],["jav","jw"],["kat","ka"],["kaz","kk"],["khm","km"],["kan","kn"],["kor","ko"],["ckb","ku"],["lao","lo"],["lit","lt"],["lav","lv"],["min","mi"],["mkd","mk"],["mal","ml"],["mar","mr"],["mya","my"],["nep","ne"],["nld","nl"],["nob","no"],["nya","ny"],["pan","pa"],["pol","pl"],["pbu","ps"],["por","pt"],["ron","ro"],["rus","ru"],["sin","si"],["slk","sk"],["slv","sl"],["sna","sn"],["som","so"],["als","sq"],["srp","sr"],["sun","su"],["swe","sv"],["swh","sw"],["tam","ta"],["tel","te"],["tgk","tg"],["tha","th"],["toi","to"],["tur","tr"],["ukr","uk"],["urd","ur"],["uzn","uz"],["vie","vi"],["xho","xh"],["ydd","yi"],["yor","yo"],["cmn","zh-CN"],["zul","zu"]]);function xl(e,t){if(!e)return"auto";!t&&t!==0&&(t=50);let u=ka(e);if(u!=="auto")return u;let n={minLength:t,whitelist:[...yl.keys()]},a=hl(e,n);if(a&&a.length>0){if(a.length>1&&a[0][0]!=="eng"&&a[1][0]==="eng"&&a[1][1]>.6)return"en";let[r]=a[0],i=yl.get(r);if(i)return i}return"auto"}function fu(e){if(typeof e!="string")return"auto";let t=e.toLowerCase();if(t==="zh"||t==="zh-hans")return"zh-CN";if(t==="zh-hant"||t==="zh-hk")return"zh-TW";if(t==="iw")return"he";if(t==="jv")return"jw";let u=Gt.map(a=>a.toLowerCase()),n=u.indexOf(t);if(n===-1)if(t.indexOf("-")>=0){t=t.split("-")[0];let a=u.indexOf(t);return a===-1?"auto":Gt[a]}else return"auto";else return Gt[n]}function Nt(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():h}var te=Nt();function ue(){return te.IMMERSIVE_TRANSLATE_USERSCRIPT==="1"}function Tl(){return te.HAS_CSP_ERROR=="1"}function Tt(){if(te.IMMERSIVE_TRANSLATE_SAFARI==="1")return!0;if(typeof globalThis.immersiveTranslateBrowserAPI<"u"&&globalThis.immersiveTranslateBrowserAPI.runtime&&globalThis.immersiveTranslateBrowserAPI.runtime.getManifest){let t=globalThis.immersiveTranslateBrowserAPI.runtime.getManifest();return!!(t&&t._isSafari)}else return!1}function wl(){return typeof Deno<"u"}var A2=Nt().PROD==="1",Ru=Nt().PROD!=="1";function Cl(){return typeof globalThis.__IS_IMMERSIVE_TRANSLATE_WEB_OPTIONS_PAGE__<"u"}var Aa={minVersion:"0.5.15",immediateTranslationTextCount:5e3,interval:36e5,beta:!1,cache:!0,translationMode:"dual",enabled:!0,donateUrl:"https://immersivetranslate.com/docs/donate/",uninstallUrl:"https://wj.qq.com/s2/12328372/04e0/",feedbackUrl:"https://github.com/immersive-translate/immersive-translate/issues",isShowContextMenu:!0,blockUrls:["https://dash.immersivetranslate.com/*","https://immersive-translate.owenyoung.com/options/","https://immersive-translate.owenyoung.com/auth-done/","https://dash.immersivetranslate.com/","https://dash.immersivetranslate.com/auth-done/","http://localhost:8000/dist/userscript/options/","http://localhost:8000/auth-done/","http://192.168.50.9:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com","http://localhost:8000/options/","http://192.168.50.9:8000/options/","googleads.g.doubleclick.net","s1.hdslb.com","oapi.dingtalk.com","login.dingtalk.com","imasdk.googleapis.com","acdn.adnxs.com","pos.baidu.com","js-sec.indexww.com","g.alicdn.com","ads.pubmatic.com","challenges.cloudflare.com","accounts.google.com","images-na.ssl-images-amazon.com","tpc.googlesyndication.com","js.stripe.com","acdn.adnxs-simple.com","s.union.360.cn","s.amazon-adsystem.com","www.recaptcha.net","s7.addthis.com","z.moatads.com","https://www.marketwatch.com/static_html/daa-min.html","tr.snapchat.com","ct.pinterest.com","*.moatads.com","secure-us.imrworldwide.com","static.noeyeon.click","widgets.outbrain.com","www.dianomi.com/smartads.epl","secure-assets.rubiconproject.com","eus.rubiconproject.com","eus.rubiconproject.com","i.liadm.com","eb2.3lift.com"],telemetry:!0,loadingTheme:"spinner",canary:!1,translationThemePatterns:{},translationServices:{volcAlpha:{placeholderDelimiters:["{","}"]},volc:{placeholderDelimiters:["{","}"]},tencent:{placeholderDelimiters:["{","}"]},transmart:{placeholderDelimiters:["#","#"]},baidu:{placeholderDelimiters:["#","#"]},caiyun:{placeholderDelimiters:["{","}"]},youdao:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}"]},deepl:{immediateTranslationTextCountForImmersiveDeepl:5e4,placeholderDelimiters:["{{","}}"]},bing:{maxTextLengthPerRequest:1800,placeholderDelimiters:["<code>","</code>"]},deeplx:{limit:3},d:{immediateTranslationTextCount:0},papago:{placeholderDelimiters:["{","}"]},dpro:{apiUrl:"https://api.deepl.com/jsonrpc"},openai:{placeholderDelimiters:["{{","}}"],immediateTranslationTextCount:3e3,translationDebounce:300,limit:5,interval:1350,maxTextGroupLengthPerRequest:1,newlinePlaceholderDelimiters:[`

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
?`]}},shortcuts:{toggleTranslatePage:"Alt+A",toggleTranslateTheWholePage:"Alt+W",toggleOnlyTransation:"",toggleTranslateToThePageEndImmediately:"",toggleTranslationMask:""},tempTranslateDomainMinutes:0,immediateTranslationPattern:{matches:["www.tumblr.com","twitter.com","*.twitter.com","medium.com","*.medium.com","www.facebook.com","www.youtube.com","m.youtube.com","mail.google.com","discord.com","google.com","facebook.com","*.facebook.com","web.telegram.org","github.com","*.instagram.com","instagram.com","*.slack.com","https://old.reddit.com/","https://www.reddit.com/r/popular/","https://www.reddit.com/","https://www.reddit.com/hot/","https://www.reddit.com/new/","https://www.reddit.com/top/","https://www.reddit.com/.compact"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},translationParagraphLanguagePattern:{matches:["www.reddit.com","old.reddit.com","twitter.com","www.tumblr.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","read.readwise.io","www.inoreader.com","mail.google.com","google.com","discord.com","*.instagram.com","instagram.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},sourceLanguageUrlPattern:{},generalRule:{_comment:"",normalizeBody:"",useIframePostMessage:!0,injectedCss:[],isEbook:!1,isEbookBuilder:!1,showSponsorOnSafari:!1,noTranslateRegexp:["^\\d+.+ago$","^\\d+\\s+MIN\\s+READ$"],waitForSelectors:[],waitForSelectorsTimeout:3e3,pairs:{},isSubtitleBuilder:!1,minZIndex:0,initTranslationServiceAsSoonAsPossible:!0,targetWrapperTag:"font",additionalInjectedCss:[],isTranslateTitle:!0,languageDetectMinTextCount:50,wrapperPrefix:"smart",wrapperSuffix:"smart",isPdf:!1,isTransformPreTagNewLine:!1,urlChangeDelay:50,mutationChangeDelay:10,mainFrameMinTextCount:50,mainFrameMinWordCount:5,visibleDelay:0,additionalStayOriginalSelectors:["span.katex","span.notranslate",".MathJax_Preview",".MathJax",".mwe-math-element","span[translate=no]","span.math.inline","span.math.display"],translationBlockStyle:"",isShowUserscriptPagePopup:!0,observeUrlChange:!1,paragraphMinTextCount:4,paragraphMinWordCount:2,shadowRootSelectors:[],blockMinTextCount:24,blockMinWordCount:4,containerMinTextCount:18,containerMinWordCount:3,lineBreakMaxTextCount:0,globalAttributes:{},globalMeta:{},globalStyles:{".sr-only":"display:none"},initialGlobalAttributes:{},initialSelectorGlobalAttributes:{header:{translate:"no"},"footer:last-of-type":{translate:"no"},"nav:last-of-type":{translate:"no"},nav:{translate:"no"}},selectors:[],preWhitespaceDetectedTags:["DIV","SPAN"],stayOriginalSelectors:[],additionalSelectors:["h1","section h2","section h3","section h4","main h2","main h3","main h4",".article-title",".article-subtitle",".article_title",".article_subtitle",".article__title",".articleTitle",".Article__content",".titleLink",".summary",".headline",".page-content","aside.note","aside.article-comments","aside.onebox"],atomicBlockTags:[],excludeSelectors:[],additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]","rp","rt",".prism-code","[role=code]","#omni-extension",".omni-item","div[data-paste-markdown-skip]","table.highlight","div[class^=codeBlockContent]","div[class^=codeBlockLines]","div[class^=token-line]","#liuchan-window > .liuchan-container > *",".material-icons","i.fa","i[class^=fa-]",".notranslate","[translate=no]",".navmenu-container"],translationClasses:[],atomicBlockSelectors:[],excludeTags:["TITLE","LINK","SCRIPT","STYLE","TEXTAREA","SVG","svg","G","NOSCRIPT","INPUT","BUTTON","BASE","SELECT","OPTION","HR","PRE","KBD","WBR","RT","RP","META","MATH","TTS-SENTENCE","AIO-CODE"],bodyTranslateTags:["FOOTER","ASIDE","BUTTON","NAV"],forceTranslateTags:[],metaTags:["META","SCRIPT","STYLE","NOSCRIPT"],additionalExcludeTags:[],stayOriginalTags:["CODE","TT","IMG","SUP","SUB"],additionalStayOriginalTags:[],inlineTags:["A","ABBR","FONT","ACRONYM","B","INS","DEL","RUBY","RP","RB","BDO","MARK","BIG","RT","NOBR","CITE","DFN","EM","I","LABEL","Q","S","SMALL","SPAN","STRONG","SUB","SUP","U","KBD","TT","VAR","IMG","CODE","SCRIPT","STYLE","LINK","TIME","META","WBR","RELIN-HC","RELIN-HIGHLIGHT","RELIN-ORIGIN","RELIN-TARGET","XQDD_HIGHLIGHT_NEW_WORD","NOBR"],additionalInlineTags:[],extraInlineSelectors:[],additionalInlineSelectors:[".MathJax_Preview",".MathJax"],extraBlockSelectors:["turbo-frame","readme-toc","#hs_cos_wrapper_post_body","#hs_cos_wrapper_post_body"],allBlockTags:["BODY","HGROUP","CONTENT","ADDRESS","ARTICLE","ASIDE","DETAILS","BLOCKQUOTE","CANVAS","DD","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","HEADER","FORM","HR","MAIN","SUMMARY","NAV","NOSCRIPT","PRE","SECTION","TABLE","TFOOT","UL","VIDEO","P","DIV","H1","H2","H3","H4","H5","H6","UL","LI","OL","BR","PICTURE","TBODY","TR","TD","TH","SOURCE","C-WIZ","BUTTON","TURBO-FRAME","README-TOC"],pdfNewParagraphLineHeight:2.4,pdfNewParagraphIndent:1.2,pdfNewParagraphIndentRightIndentPx:130,fingerCountToToggleTranslagePageWhenTouching:4,fingerCountToToggleTranslationMaskWhenTouching:0,fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:0,mouseHoverHoldKey:"Off"},rules:[{selectorMatches:"div.simpread-read-root.simpread-read-root-show > sr-read",mainFrameSelector:"div.simpread-read-root.simpread-read-root-show > sr-read"},{matches:["moz-extension://*/pdf/index.html*"],isPdf:!0,isTranslateTitle:!1,wrapperPrefix:"",wrapperSuffix:"",urlChangeDelay:0,selectors:[".textLayer"],excludeSelectors:[".annotationLayer"],globalStyles:{"div.page":"width: 98%;",".textLayer":"overflow:visible;opacity: 1;"}},{matches:["*://*/*.txt","file://*/*.txt"],selectorMatches:["body > pre"],isTransformPreTagNewLine:!0,excludeTags:["TITLE","LINK","SCRIPT","STYLE","TEXTAREA","SVG","svg","G","TEXT","NOSCRIPT","INPUT","BUTTON","BASE","SELECT","OPTION","IMG","SUB","SUP","HR","CODE","KBD","WBR","TT","RT","RP","META","ASIDE","FOOTER","MATH","TTS-SENTENCE"]},{matches:["arad.hange.jp","arad.nexon.co.jp","oapi.dingtalk.com","login.dingtalk.com"],useIframePostMessage:!1},{matches:["googleads.g.doubleclick.net","https://www.google.com/recaptcha/*","ad.doubanio.com"],useIframePostMessage:!1,selectors:"#notexistforimmersivetranslate"},{matches:["mail.jabber.org","antirez.com"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.wikipedia.org",paragraphMinWordCount:1,paragraphMinTextCount:3,excludeSelectors:[".mw-editsection",".mw-cite-backlink","#p-lang-btn","#right-navigation","#p-associated-pages",".vector-header"],stayOriginalSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],extraInlineSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"]},{matches:["twitter.com","mobile.twitter.com","tweetdeck.twitter.com","https://platform.twitter.com/embed*"],isTranslateTitle:!1,selectors:['[data-testid="tweetText"]',".tweet-text",".js-quoted-tweet-text","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)","[data-testid='developerBuiltCardContainer'] > div:nth-child(2)","[data-testid='card.layoutLarge.detail'] > div:nth-child(2)","[data-testid='cellInnerDiv'] div[data-testid='UserCell'] > div> div:nth-child(2)","[data-testid='UserDescription']","[data-testid='HoverCard'] div[dir=auto]"],paragraphMinTextCount:3,paragraphMinWordCount:1,additionalStayOriginalSelectors:['[data-testid="tweetText"] a'],excludeSelectors:["header"],observeUrlChange:!1,extraInlineSelectors:['[data-testid="tweetText"] div','[data-testid="tweetText"] span','[data-testid="UserDescription"] div',"[data-testid='HoverCard'] div[dir=auto] div"]},{matches:["stackoverflow.com","*.stackexchange.com","superuser.com","askubuntu.com","serverfault.com"],extraBlockSelectors:["span.comment-copy"],excludeSelectors:["a.comment-user","span.comment-date","div.s-prose.js-post-body + div",".bottom-notice","div[data-campaign-name=stk]"],paragraphMinTextCount:4,paragraphMinWordCount:1},{matches:"developer.apple.com/documentation/*",selectors:[".container","h3.title","div.content"]},{matches:"news.ycombinator.com",selectors:[".titleline > a",".comment > .commtext",".toptext","a.hn-item-title",".hn-comment-text",".hn-story-title"],excludeSelectors:[".reply"]},{matches:["*.quora.com","quora.com"],additionalSelectors:[".puppeteer_test_question_title","p.q-text"],globalStyles:{".qu-truncateLines--3":"-webkit-line-clamp: unset;"}},{matches:["old.reddit.com/*/.compact","old.reddit.com/.compact","www.reddit.com/*/.compact","www.reddit.com/.compact"],selectors:[".title > a",".usertext-body"],detectParagraphLanguage:!0},{matches:"old.reddit.com",selectors:["p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0},{matches:["https://www.reddit.com/r/*/comments/*/*","https://www.reddit.com/","https://www.reddit.com/hot/","https://www.reddit.com/new/","https://www.reddit.com/top/"],excludeMatches:["https://www.reddit.com/r/*/wiki/*"],observeUrlChange:!0,selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title'] h3","[data-adclicklocation=media]",".PostContent",".post-content",".Comment__body","faceplate-batch .md",".RichTextJSON-root","div[slot=title]","div[slot=text-body]","p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0,globalStyles:{"div.XPromoBottomBar":"display:none"},waitForSelectors:["[data-testid=post_author_link]"]},{matches:"www.reddit.com",selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title'] h3","[data-adclicklocation=media]",".PostContent",".post-content",".Comment__body","faceplate-batch .md","div[slot=title]","div[slot=text-body]","p.title > a","[role=main] .md-container"],paragraphMinTextCount:5,paragraphMinWordCount:1,excludeMatches:["https://www.reddit.com/r/*/wiki/*","https://www.reddit.com/settings/*"],detectParagraphLanguage:!0,globalStyles:{"div.XPromoBottomBar":"display:none"}},{matches:"www.reuters.com",excludeSelectors:["[promotext]","[data-testid=Leaderboard]"]},{matches:"https://www.npmjs.com/package/*",selectors:["#tabpanel-readme > div:first-child"]},{matches:"github.com",observeUrlChange:!0,excludeMatches:["https://github.com/*/*/settings","https://github.com/settings/*","https://github.com/sponsors/*"],selectors:["h1","[aria-label=Issues] .markdown-title","[aria-labelledby=discussions-list] .markdown-title",".markdown-body",".Layout-sidebar p","div > span.search-match","li.repo-list-item p","#responsive-meta-container p","article p","div.repo-description p","[itemprop=description]"],atomicBlockSelectors:["[itemprop=description]"],excludeSelectors:[".css-truncate","[data-test-selector='commit-tease-commit-message']","[data-test-selector='create-branch.developmentForm']","div.Box-header.position-relative","div.blob-wrapper-embedded","div.Box.Box--condensed.my-2","div.jp-CodeCell",'[aria-label="Account"] .markdown-title',".js-repos-container .markdown-title","[data-view-component=true] .markdown-title","a.anchor","div.file-navigation + div.Box"],extraBlockSelectors:[],extraInlineSelectors:["g-emoji","a.anchor"],stayOriginalTags:["CODE","TT","G-EMOJI","IMG","SUP","SUB"],detectParagraphLanguage:!0},{matches:"notebooks.githubusercontent.com",excludeSelectors:["div.jp-CodeCell"]},{matches:"www.facebook.com",excludeMatches:"https://www.facebook.com/business/*",selectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],atomicBlockSelectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],insertPosition:"afterend",preWhitespaceDetectedTags:["DIV","SPAN"],extraBlockSelectors:["span.x1vvkbs"],excludeSelectors:["[role=button]"],translationClasses:["immersive-translate-text"],detectParagraphLanguage:!0},{matches:"m.youtube.com",selectors:[".comment-text",".media-item-headline",".slim-video-information-title",".caption-window",".caption-visual-line"],wrapperPrefix:"",wrapperSuffix:"",observeUrlChange:!0,atomicBlockSelectors:[".comment-text"],globalStyles:{".comment-text":"max-height:unset;",".media-item-headline":"max-height:unset;-webkit-line-clamp:unset;"},injectedCss:[".immersive-translate-target-wrapper img { width: 16px; height: 16px }"],extraBlockSelectors:[".caption-visual-line"]},{matches:"www.youtube.com",observeUrlChange:!0,selectors:["yt-formatted-string[slot=content].ytd-comment-renderer","yt-formatted-string.ytd-video-renderer","yt-formatted-string#content-text","h1","yt-formatted-string#video-title","span#video-title","a#video-title","yt-formatted-string.ytd-transcript-segment-renderer","#description-inline-expander > yt-attributed-string > span","ytd-notification-renderer .message",".caption-window",".caption-visual-line"],wrapperPrefix:"",wrapperSuffix:"",globalStyles:{"ytd-expander.ytd-comment-renderer":"--ytd-expander-max-lines: 1000;","h1.ytd-watch-metadata":"-webkit-line-clamp: unset;max-height: unset;","yt-formatted-string#video-title":"-webkit-line-clamp: unset;max-height: unset;","#video-title":"-webkit-line-clamp: unset;max-height: unset;"},urlChangeDelay:2e3,atomicBlockSelectors:["yt-formatted-string[slot=content].ytd-comment-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title","#description-inline-expander > yt-attributed-string > span"],excludeSelectors:["[class^='lln-']"],extraBlockSelectors:["yt-formatted-string.ytd-transcript-segment-renderer",".caption-visual-line"],detectParagraphLanguage:!0,injectedCss:[".immersive-translate-target-wrapper img { width: 16px; height: 16px }"]},{matches:"https://www.instagram.com/p/*",selectors:["h1","h3 + div"],wrapperPrefix:"<br/>",paragraphMinTextCount:2,blockMinTextCount:2},{matches:"https://www.instagram.com/*",wrapperPrefix:"",wrapperSuffix:"",selectors:["h1"],paragraphMinTextCount:2,blockMinTextCount:2},{matches:"1paragraph.app",selectors:"#book"},{matches:"https://poeditor.com/projects/*",selectors:[".comment-body",".reference_language .source-string"]},{matches:["https://substack.com/","https://substack.com/inbox*","https://substack.com/account*","https://substack.com/browse*"],extraBlockSelectors:[".reader2-post-title"],excludeSelectors:[".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader"],globalStyles:{".reader2-clamp-lines":"max-height: unset; -webkit-line-clamp: unset;"}},{matches:["*.substack.com","newsletter.rootsofprogress.org"],selectors:[".post-preview-title",".post-preview-description",".post",".comment-body"],excludeSelectors:[".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader"],extraBlockSelectors:[".tweet-link-top",".tweet-link-bottom",".expanded-link"]},{matches:["seekingalpha.com/article/*","seekingalpha.com/news/*"],selectors:["[data-test-id=card-container]","[data-test-id=comments-section]"],excludeSelectors:["[data-test-id=post-page-meta]","header > div:first-child"]},{matches:"hn.algolia.com",selectors:[".Story_title > a:first-child",".Story_comment > span"]},{matches:"read.readwise.io",selectors:["div[class^='_titleRow_']","div[class^='_description_']","#document-text-content"],detectParagraphLanguage:!0},{matches:["www.inoreader.com","*.inoreader.com"],selectors:[".article_header_title",".article_title_link",".article_content",".article_magazine_title_link"],excludeMatches:["https://www.inoreader.com/features/"],observeUrlChange:!1,globalStyles:{".article_title_link":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:"*.ideas.aha.io",excludeSelectors:[".comment-header",".vote-status",".idea-meta",".filters-title",".ideas-showing-count",".my-ideas-filters-wrapper",".statuses-filters-wrapper",".categories-filters-wrapper","[class^='attachment']","span[class^='attachment-name']"]},{matches:["scholar.google.*/*","scholar.google.com.*/*","scholar.google.co.*/*"],wrapperPrefix:`
`,selectors:["h3 a[data-clk]","div.gs_rs","td a.gsc_a_at","td div.gs_gray:last-of-type","div.gsc_oci_value"],extraInlineSelectors:["br"],atomicBlockSelectors:["h3 a[data-clk]"]},{matches:"mail.google.com",detectParagraphLanguage:!0,selectors:["h2[data-thread-perm-id]","span[data-thread-id]","div[data-message-id] div[class='']"]},{matches:"outlook.live.com",excludeSelectors:[".jHAG3.XG5Jd",".OZZZK",".lDdSm"],selectors:["[role=region]"]},{matches:"www.producthunt.com",excludeMatches:"https://www.producthunt.com/stories/*",selectors:["h2","div[class^='styles_htmlText__']","[class^='styles_tagline']","a[href^='/discussions/'].fontWeight-600","button[class^='styles_textButton'] > div > span","h5 + p","div[data-test=product-item-name] + div"],globalStyles:{"h5 + p":"height:unset;"},excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.gitbook.io",additionalSelectors:["main"],_comment:"https://midjourney.gitbook.io/docs/user-manual"},{matches:"https://codeforces.com/*",stayOriginalTags:["[class^='MathJax']"]},{matches:"arxiv.org",additionalSelectors:["h1","blockquote.abstract"]},{matches:"*.labs.arxiv.org/*",stayOriginalTags:["math","semantics","mrow","mo","mfrac","msup","mi","mn","msqrt"],atomicBlockSelectors:[".ltx_abstract",".ltx_note_content",".ltx_p",".ltx_title"]},{matches:"https://discord.com/channels/*",isTranslateTitle:!1,selectors:["li[id^=chat-messages] div[id^=message-content]","div[class^=headerText]","section[aria-label='Search Results'] div[id^=message-content]"],extraBlockSelectors:["[class^='embedFieldValue']","li[class^='card'] div[class^='message']","[data-list-item-id^='forum-channel-list'] div[class^='headerText']"],globalStyles:{"div[class^=headerText]":"max-height: unset;","div[class^=message]":"max-height: unset;","div[class^=text]":"max-height: unset;","h3[data-text-variant='heading-lg/semibold']":"-webkit-line-clamp: none;"},detectParagraphLanguage:!0,wrapperPrefix:"<br />",wrapperSuffix:""},{matches:["web.telegram.org/z/*","web.telegram.org/a/*"],isTranslateTitle:!1,selectors:[".text-content",".message",".reply-markup-button-text",".bot-commands-list-element-description"],detectParagraphLanguage:!0},{matches:["web.telegram.org/k/*","web.telegram.org/k/"],selectors:[".message",".reply-markup-button-text",".bot-commands-list-element-description"],detectParagraphLanguage:!0},{matches:"gist.github.com",selectors:[".markdown-body",".readme"],detectParagraphLanguage:!0},{matches:"lobste.rs",excludeMatches:["https://lobste.rs/about","https://lobste.rs/chat"],selectors:[".u-repost-of",".comment_text"]},{matches:"*.slack.com",selectors:[".p-rich_text_block",".p-message_pane__foreword",".c-alert__message","[data-qa=message_attachment_text]"],additionalStayOriginalSelectors:["[data-qa=emoji]"],detectParagraphLanguage:!0},{matches:"1paragraph.app",additionalSelectors:["#book"]},{matches:"www.artstation.com/artwork/*",excludeSelectors:".project-description a",selectors:[".project-description","div.project-comment-text"],atomicBlockSelectors:"div.project-comment-text",detectParagraphLanguage:!0},{matches:"www.artstation.com/learning/courses/*",additionalSelectors:["footer.learning-course-description.ng-star-inserted > span"],excludeSelectors:".learning-card-meta"},{matches:["https://www.artstation.com/blogs","https://www.artstation.com/blogs/*"],detectParagraphLanguage:!0,additionalSelectors:[".comment-item-body"],atomicBlockSelectors:[".author-headline",".author-location"],excludeSelectors:["blog-card-thumbnail","blog-card-header",".blog-card-author",".blog-card-meta",".blog-view-header",".blog-grid-title",".post-meta-header"]},{matches:"www.figma.com/community/*",normalizeBody:"div.ql-editor[contenteditable='false']",excludeSelectors:["div[class*='metadataRight']","div[class*='commentMetaAndOptions']"],globalStyles:{"div[class*='mini_cardBottomRowSizing']":"height: 3em;"},additionalSelectors:"div[class*='mini_cardBottomRow_Metadata']",atomicBlockSelectors:"div[class*='mini_cardBottomRow_Metadata']",stayOriginalSelectors:"[data-tooltip='tooltip-user-info']"},{matches:"www.google.*/search*",detectParagraphLanguage:!0,excludeSelectors:["a h3 + div","div#sfooter","a[role=presentation] > div > div:first-child",".b5ZQcf",".CEMjEf",".MgUUmf.NUnG9d","#result-stats","[role=navigation]"],wrapperSuffix:"",globalStyles:{"div[data-content-feature='1'] > div":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:2']":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:3']":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:4']":"-webkit-line-clamp: unset;max-height: unset;",".V82bz":"-webkit-line-clamp: unset;max-height: unset;margin-bottom:30px",".uAKcGb":"-webkit-line-clamp: unset;max-height: unset;margin-bottom:30px",".Pw4Ldf.RsCEN":"height:unset;"},extraBlockSelectors:[".MUFPAc"]},{matches:"lowendtalk.com",selectors:["[role=heading]","h1",".userContent"]},{matches:"www.linkedin.com/jobs/*",selectors:["#job-details > span"]},{matches:"https://linkedin.com/feed/*",selectors:["h1",".feed-shared-update-v2__description-wrapper"]},{matches:"www.linkedin.com",additionalSelectors:["span.break-words > span > span[dir=ltr]"]},{matches:"www.indiehackers.com",selectors:[".content","h1","h3.story__title",".feed-item__title-link"]},{matches:"libreddit.de",selectors:["h2.post_title",".comment_body > .md"]},{matches:["notion.site","*.notion.site"],normalizeBody:"body",selectors:["div[data-block-id]"]},{matches:"www.newyorker.com",additionalSelectors:["h1","[data-testid=SummaryItemHed]"],urlChangeDelay:2e3},{matches:"start.me",selectors:[".rss-article__title",".rss-articles-list__article-link",".rss-showcase__title",".rss-showcase__text"]},{matches:"www.scmp.com",additionalSelectors:[".info__subHeadline",".section-content h2"]},{matches:"www.lesswrong.com",extraBlockSelectors:["span.commentOnSelection"]},{matches:["mastodon.social","mastodon.online","kolektiva.social","indieweb.social","mastodon.world","infosec.exchange"],isTranslateTitle:!1,selectorMatches:["div#mastodon"],selectors:["div.status__content__text"],detectLanguage:!0},{matches:"www.cnbc.com",additionalSelectors:["div.RenderKeyPoints-list"],urlChangeDelay:1e3,globalStyles:{"div.Card-titleContainer > div":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:"app.daily.dev",selectors:["h1",".typo-body","article h3","[class^=markdown_markdown]"],globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset"}},{matches:"www.aljazeera.com",additionalSelectors:["h1",".article__subhead"]},{matches:["*.pornhub.com","pornhub.com"],excludeMatches:["*.pornhub.com/insights/*","pornhub.com/insights/*"],selectors:[".title",".commentMessage > span","h1.floatLeft",".commentText"],detectParagraphLanguage:!0,wrapperPrefix:"<br/>",wrapperSuffix:`
`,globalStyles:{"span.title":"height: unset; max-height: unset;"}},{matches:["weibo.com"],selectors:["div[class^='detail_wbtext']"]},{matches:["medium.com","*.medium.com"],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],urlChangeDelay:20,additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]","rp","rt",".prism-code","[role=code]","#omni-extension",".omni-item","div[data-paste-markdown-skip]","table.highlight","div[class^=codeBlockContent]","div[class^=codeBlockLines]","div[class^=token-line]","#liuchan-window > .liuchan-container > *",".material-icons",".notranslate","[translate=no]"],selectors:["h1","h2","article section","[aria-hidden='false'] pre","article p"],excludeSelectors:["[aria-label='Post Preview Reading Time']"],globalStyles:{h2:"-webkit-line-clamp: unset;max-height:unset;","article p":"-webkit-line-clamp: unset;max-height:unset;"}},{selectorMatches:["meta[property='og:site_name'][content='Nitter']"],selectors:[".tweet-content",".quote-text"]},{matches:"*.fandom.com",additionalSelectors:[".mcf-card-article__title"]},{matches:["www.washingtonpost.com"],additionalSelectors:["[data-qa='article-body']"]},{matches:"www.economist.com",extraInlineSelectors:"span[data-caps='initial']"},{matches:"www.healthline.com",excludeSelectors:".icon-hl-trusted-source-after"},{matches:"www.ebay.com",excludeSelectors:["headers","[itemprop=offers]",".dne-itemtile-original-price"],paragraphMinTextCount:3,paragraphMinWordCount:1,globalStyles:{"[itemprop=name]":"-webkit-line-clamp: unset;max-height: unset;",".merch-item-title":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:"www.skinstore.com",excludeSelectors:[".responsiveFlyoutMenu_levelOneLink"],paragraphMinTextCount:3,paragraphMinWordCount:1},{matches:"www.tripadvisor.com",paragraphMinTextCount:3,paragraphMinWordCount:1},{matches:"www.amazon.com",paragraphMinTextCount:3,paragraphMinWordCount:1,globalStyles:{".s-line-clamp-2":"-webkit-line-clamp: unset;max-height: unset;",".s-line-clamp-4":"-webkit-line-clamp: unset;max-height: unset;","[data-rows]":"max-height: unset;-webkit-line-clamp: unset;","[data-a-expander-name='review_text_read_more']":" max-height: unset;"},excludeSelectors:["#navFooter","#navbar-main",".s-price-instructions-style"]},{matches:"marketplace.visualstudio.com",additionalExcludeSelectors:[".core-info-second-row",".core-info-third-row",".meta-data-list",".item-title",".breadcrumb",".itemDetails-right",".ux-user-name",".ux-updated-date",".ux-item-second-row-wrapper",".stats-and-offer",".header-container"],atomicBlockSelectors:[".core-info-cell > div.name"],globalStyles:{".item-details-control-root.ux-item-shortdesc":"height: unset; overflow: visible; max-height:unset;"}},{matches:"www.bloomberg.com",urlChangeDelay:2e3,excludeSelectors:[".ticker-bar","nav","[aria-label=Banner]","aside"]},{matches:"xueshu.baidu.com",globalStyles:{".abstract_wr":"height: unset; overflow: visible; max-height:unset;"}},{matches:"www.sciencedirect.com",urlChangeDelay:2e3,stayOriginalSelectors:["span.display"],extraBlockSelectors:["span.captions","span[id^=cap]"]},{matches:"www.thehighestofthemountains.com",extraBlockSelectors:"div"},{matches:"te.legra.ph",normalizeBody:"div.ql-editor[contenteditable='false']",urlChangeDelay:500},{matches:["telegra.ph"],normalizeBody:"div.ql-editor[contenteditable='false']",wrapperPrefix:`
`},{matches:["*.annas-archive.org","annas-archive.org"],selectors:["h3.text-xl.font-bold","div[class='truncate text-sm']"],globalStyles:{"div[id^='link-index-']":"height: unset; max-height: unset;"},normalizeBody:"body",extraBlockSelectors:["a.custom-a"]},{matches:["explainshell.com"],selectors:["[class='help-box']"]},{matches:["apnews.com"],urlChangeDelay:2e3},{matches:"play.google.com",additionalSelectors:["header[data-review-id] + div"]},{matches:["www.tumblr.com"],selectors:["article h1","article > header + div","[data-testid=notes-root] p","div.k31gt","p","article ul","article h2","article h3","article h4","article h5","article h6","article blockquote","article ol"],excludeSelectors:["div.fAAi8","div.wvu3V"],preWhitespaceDetectedTags:["DIV","SPAN","P"]},{matches:["mail.qq.com/cgi-bin/frame_html"],selectors:["#thisiddoesnotexists"]},{matches:"https://www.tinytask.net",globalStyles:{"table > tbody > tr > td > center > table > tbody > tr > td > ul > li":"height: 100%"}},{matches:"www.foxnews.com",shadowRootSelectors:["[data-spot-im-module-default-area='conversation'] > div"],excludeTags:["TITLE","LINK","SCRIPT","STYLE","TEXTAREA","SVG","svg","G","TEXT","NOSCRIPT","INPUT","BUTTON","BASE","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","RT","RP","META","ASIDE","MATH","TTS-SENTENCE","AIO-CODE"],excludeSelectors:[".site-footer",".components-MessageDetails-index__message-details-wrapper","div[class^=SlideDown__container]",".components-MessageActions-index__messageActionsWrapper","span[data-openweb-allow-amp]","div.spcv_typing-users"]},{matches:"www.afreecatv.com",globalStyles:{"a.title":"max-height:unset;-webkit-line-clamp:unset;"}},{matches:"opennet.ru",excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","LABEL","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","RT","RP","META"]},{matches:["www.construct.net"],excludeMatches:["preview.construct.net","editor.construct.net"],additionalSelectors:["aside","div.manualContent"],atomicBlockSelectors:[],stayOriginalSelectors:["a.usernameReference"],additionalInlineSelectors:["a.forumLink"],additionalExcludeSelectors:["div.topNav","div.usernameLink","ul.authorDetails","ul.tagViewer","ul.breadCrumbNav","ul.subForumForums","ul.postTools","li.comment ul.controls","div.forumTopNavWrap","div.downloadWrap","div.articleLeftMenu","div.usernameTextWrap","div.favouriteWrap","div.bannerWrapper","div.viewAddonRightMenu","div.extendedMenu.addonsSubMenu","#BottomLinks.bottomLinks","div#LeftSide.leftSide","div#BottomWrap.bottomWrap","div.courseListWrap div.overview","div.conversationControls","div.contentWrapper h1","div.conversationControls","td.location a#LocationLink","#TopLevelComments .topBar","#TopLevelComments .controls",".tagViewWrap",".changeCount",".otherStats",".FilterMenu",".mobileTopicStats",".forumControlsWrapper",".forumsBottomNavWrap",".breadCrumbNav",".favouriteWrap",".usernameLink",".followWrapper",".blogPostStats",".manualContent dl dt"],globalStyles:{"td.location a#LocationLink":"padding-top: 4px;","div.articleMain .tutCourseWrap":"align-items: flex-start;"}},{matches:"getpocket.com",selectors:["h2","div.excerpt p","article","h1"],globalStyles:{"h2.title":"max-height:unset;-webkit-line-clamp:unset;","div.excerpt p":"max-height:unset;-webkit-line-clamp:unset;"}},{matches:"*.fandom.com",urlChangeDelay:800,normalizeBody:"#mw-content-text",globalStyles:{"#mw-content-text > div > div:nth-child(1)":"height:100%;"},additionalExcludeSelectors:["header.fandom-community-header","div.ph-registration-buttons"]},{matches:"huggingface.co",globalStyles:{".line-clamp-2":"-webkit-line-clamp:unset;max-height:unset;"}},{matches:"www.statista.com",globalStyles:{".itemContent__text":"height:unset;max-height:unset;",".itemContent__subline":"height:unset;max-height:unset;"}},{matches:"epub-reader.online",globalStyles:{"span.slide-contents-item-label":"overflow:visible;max-height:unset;white-space:normal;"},atomicBlockSelectors:"div.slide-contents-item"},{matches:"https://you.com/search",globalStyles:{h3:"max-height:unset;-webkit-line-clamp:unset;",".caKYaC":"max-height:unset;-webkit-line-clamp:unset;",".dDwDsu":"max-height:unset;-webkit-line-clamp:unset;"},excludeSelectors:"div.hpIWZO"},{matches:"auth0.openai.com",excludeSelectors:["form","header > h1"]},{matches:"chat.openai.com",excludeSelectors:["div.absolute.bottom-0.left-0.w-full","h1","div#headlessui-portal-root"]},{matches:"glasp.co",excludeSelectors:[".home_overview_list_content_wrapper"]},{matches:"developer.chrome.com",excludeSelectors:["web-tabs","ul.code-sections--summary"]},{matches:["developer.android.google.cn","developer.android.com"],observeUrlChange:!0,additionalSelectors:["aside","google-codelab-step"]},{matches:"www.ft.com",excludeSelectors:["headers","[aria-labelledby=cookie-banner-aria-label]","footer"]},{matches:"https://apps.microsoft.com/store/detail/*",additionalSelectors:["pre"],globalStyles:{".line-clamp":"-webkit-line-clamp:unset;max-height:unset;"},isTransformPreTagNewLine:!0},{matches:"gitlab.com",excludeSelectors:[".tree-content-holder","nav",".home-panel-metadata","div[data-testid=project_topic_list]",".commit"]},{matches:"www.newthingsunderthesun.com",additionalSelectors:["[translate=no]"]},{matches:"https://www.tiktok.com/*/video/*",selectors:["[data-e2e^=comment-level]","[data-e2e=browse-video-desc] > span"]},{matches:"www.rfc-editor.org",isTransformPreTagNewLine:!0,excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","SELECT","OPTION","IMG","SUB","SUP","HR","CODE","KBD","WBR","TT","RT","RP","META","ASIDE","FOOTER","MATH"]},{matches:"https://steamcommunity.com/app/*",globalStyles:{".forum_topic":"height:auto;",".forum_topic_name":"white-space:normal;"},excludeSelectors:[".forum_paging",".forum_topic_reply_count",".forum_topic_lastpost",".forum_topic_award_count",".discussion_search_pagingcontrols"],observeUrlChange:!0},{matches:"store.steampowered.com/app/*",selectors:[".game_description_snippet",".game_area_description","#earlyAccessHeader","[id^='ReviewContent'] .content"],excludeSelectors:["#global_actions","#store_controls","#foryou_tab","[class*=persona]","[class*=game_title_area]","a.btn_medium",".persona_name",".hours.ellipsis",".checkcol",".postedDate",".dev_row .summary",".already_in_library",".game_header_image_ctn .grid_content",".ds_flag.ds_wishlist_flag",".early_access_review.tooltip",".communitylink_achievement_images",".user_reviews_summary_row.summary",".review_award_ctn",".add_to_wishlist_area",".next_in_queue_content",".glance_tags.popular_tags",".game_purchase_action",".vote_button_ctn","#VoteUpDownBtnCtn","#footer","#ViewAllReviewssummary"],atomicBlockSelectors:[".game_area_sys_req_leftCol",".game_area_sys_req_rightCol"],extraInlineSelectors:[".pulldown"],additionalSelectors:[".game_page_autocollapse_ctn iframe"],globalStyles:{".game_description_snippet":"max-height:unset; overflow: scroll;",".game_purchase_area_friends_want":"height: auto; padding-bottom: 6px;",".div.early_access_banner":"height: 84px",".franchise_notice > *":"height: 84px"},detectParagraphLanguage:!0},{matches:"https://www.nature.com/articles/*",excludeSelectors:[".c-header",".c-recommendations-header",".c-recommendations-list-container",".c-article-references__links",".c-article-identifiers",".c-article-author-list",".c-article-metrics-bar__wrapper",".c-article__pill-button","#author-information-content","#article-info-section"]},{matches:"https://www.webofscience.com/wos/woscc/summary/*",globalStyles:{".abstract":"height:auto !important;",".show-more-lines":"height:unset !important;"},excludeSelectors:[".summary-left-panel",".authors","app-summary-authors + div"],observeUrlChange:!0,mutationChangeDelay:600},{matches:["appleinsider.com"],excludeSelectors:["#topic-nav"]},{matches:"https://www.jetbrains.com/help/*",extraBlockSelectors:["[data-test=prompt]"]},{matches:["https://crates.io/search*"],selectors:["div[class^=_description-box] div[class^=_description]"]},{matches:"www.theverge.com",shadowRootSelectors:["div#coral_thread > div"]},{matches:"https://beta.simp.red/trans*",mainFrameSelector:".simpread-read-root"},{matches:"https://www.lookintobitcoin.com/charts/*",excludeSelectors:["svg"]},{matches:"https://platform.openai.com/account/api-keys*",urlChangeDelay:1500},{matches:"https://pkg.go.dev/std",selectors:["td.UnitDirectories-desktopSynopsis"]},{matches:"https://pkg.go.dev/*",selectors:["div.UnitDetails p"]},{isEbook:!0,isTranslateTitle:!1,urlChangeDelay:200,selectorMatches:["meta[name='immersive-translate-ebook-viewer'][content='true']"],excludeSelectors:["#drop-target","#drop-target h1","#side-bar","h1#side-bar-title"],extraInlineSelectors:["span.dropcaps"],paragraphMinTextCount:1,paragraphMinWordCount:1,blockMinTextCount:1,blockMinWordCount:1,containerMinTextCount:1,wrapperPrefix:"<br />",targetWrapperTag:"span"},{isEbookBuilder:!0,isTranslateTitle:!1,targetWrapperTag:"span",selectorMatches:["meta[name='immersive-translate-ebook-builder'][content='true']"],globalMeta:{},excludeSelectors:["h1.notranslate","#drop-target","#drop-target h1","#side-bar","h1#side-bar-title","#tool"],paragraphMinTextCount:1,paragraphMinWordCount:1,blockMinTextCount:1,blockMinWordCount:1,containerMinTextCount:1,wrapperPrefix:"<br />"},{matches:["https://www.explainpaper.com/reader*"],isTranslateTitle:!1,selectors:[".leading-relaxed",".chat-messages p",".text-sm"]},{matches:"https://colab.research.google.com/*",excludeSelectors:["code","view-line"]},{matches:"www.gatesnotes.com",minZIndex:-1},{matches:"page.kakao.com",shadowRootSelectors:["div[style^='visibility: visible'"]},{matches:"coinmarketcap.com",extraBlockSelectors:["div[class='sc-3502f6cd-0 JxHqg']"]},{matches:"wandb.ai",additionalSelectors:[".report-page-top"],additionalStayOriginalSelectors:["span[data-slate-inline=true]"],extraInlineSelectors:[]},{matches:"paulgraham.com",additionalSelectors:["font[face=verdana]"],extraBlockSelectors:"font[face=verdana]"},{matches:"https://*.zendesk.com/agent/*",selectors:["[data-test-id*=subject]",".zd-comment",".title"]},{matches:"webmail.migadu.com",selectors:[".bodyText"]},{matches:"thehackernews.com",excludeSelectors:["span#blog-pager-older-link","span.h-datetime"],additionalSelectors:[".pop-title"]},{isSubtitleBuilder:!0,selectorMatches:["meta[name='immersive-translate-subtitle-builder'][content='true']"],pairs:{".source-text":".target-text"},paragraphMinTextCount:2,paragraphMinWordCount:1,isTranslateTitle:!1,wrapperPrefix:"",wrapperSuffix:""},{matches:"cs.brown.edu",excludeSelectors:[".SCodeFlow"]},{matches:"tass.ru",globalStyles:{"#__next":"font-size: 19px;line-height:28px;"}},{matches:"chat.google.com",selectors:["[jsname=bgckF]","[dir=ltr]"]},{matches:"https://www.fiverr.com/inbox/*",selectors:[".message-body"]},{matches:["jira.*.com/browse/*","jira.*.com/projects/*"],selectors:["[id=descriptionmodule]","[id=summary-val]","div.action-body","td.stsummary"]},{matches:["*.aha.io"],selectors:["[tabindex='0']","div.user-content","div.comments__body","span.name"]},{matches:"thehill.com",injectedCss:[".most-popular-item { max-height: unset !important; }",".most-popular-item__link { -webkit-line-clamp: unset !important; }"],excludeSelectors:["div.featured-cards__byline","div.list-item__meta",".tags__item","div.extended-scroll__header",".submitted-by",".site-header--has-alert-banner",".homepage__container__opinion__item__byline",".homepage__container__header",".archive__item__meta"]},{matches:"manpages.ubuntu.com",selectors:["pre"],atomicBlockTags:["pre"]},{matches:"www.spiedigitallibrary.org",excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","G","NOSCRIPT","INPUT","BUTTON","BASE","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","RT","RP","META","ASIDE","FOOTER","MATH","TTS-SENTENCE","AIO-CODE"]},{matches:"www.promptingguide.ai",selectors:["article","li"]},{matches:"ground.news",globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset !important;"}},{matches:"*.ietf.org/doc/html/*",additionalSelectors:["pre"],isTransformPreTagNewLine:!0,preWhitespaceDetectedTags:["DIV","SPAN","PRE"]},{matches:"https://www.newsminimalist.com/",extraBlockSelectors:[".inline-flex"],excludeTags:["TITLE","LINK","SCRIPT","STYLE","TEXTAREA","SVG","svg","G","NOSCRIPT","INPUT","BASE","SELECT","OPTION","HR","PRE","KBD","WBR","RT","RP","META","MATH","TTS-SENTENCE","AIO-CODE"]},{matches:"https://player.vimeo.com/video/*",extraBlockSelectors:["span.vp-captions-line","span[class^=CaptionsRenderer_]"]},{matches:"https://yandex.com/",selectors:[".tabs__item-text"]},{matches:"https://yandex.com/search/*",excludeSelectors:[".KeyValue-Row",".EntityFeedbackFooter",".Organic-Subtitle",".SerpFooter-Content",".serp-user",".Pager"],globalStyles:{".ExtendedText-Toggle":"white-space:normal;"}},{matches:"https://yandex.com/video/*",selectors:[".serp-item__title",".serp-item__text",".Keypoints-ItemTitle",".bes-epmjnzm-idtktyj",".OrganicTitle-LinkText","h1.VideoTitle"],globalStyles:{".serp-item__title":"-webkit-line-clamp: unset;max-height:unset;",".serp-item__text":"-webkit-line-clamp: unset;max-height:unset;",".OrganicTitle-LinkText":"-webkit-line-clamp: unset;max-height:unset;","h1.VideoTitle":"-webkit-line-clamp: unset;max-height:unset;",".link .serp-item__keypoints":"bottom:2px;",".OrganicTitle":"max-height:unset;"}},{matches:"https://www.perplexity.ai/search/*",extraBlockSelectors:[".prose > span"],additionalStayOriginalSelectors:["a.citation"],insertPosition:"afterend"},{matches:"https://allmyfaves.com/",selectors:["p"],containerMinTextCount:2,containerMinWordCount:1,paragraphMinTextCount:2,paragraphMinWordCount:1},{matches:"man7.org",isTransformPreTagNewLine:!0,globalStyles:{pre:"white-space: inherit;"}},{matches:"https://www.kadaza.com/",selectors:[".header span.title",".custom-content-footer"],containerMinTextCount:2,containerMinWordCount:1,paragraphMinTextCount:2,paragraphMinWordCount:1},{matches:["https://babelnovel.com/books/*","https://www.webnovel.com/book/*"],urlChangeDelay:0},{matches:"blog.genuine.com",excludeSelectors:["div.enlighter"]},{matches:"www.chinadaily.com.cn",injectedCss:["a { height: unset !important; }","li { height: unset !important; }","div { height: unset !important; }",".immersive-translate-target-inner {color:black;}"]},{matches:"www.braynzarsoft.net",selectors:["div#view-question-desc"]},{selectorMatches:["meta[name=immersiveTranslateIosOnBoarding]"],initialGlobalAttributes:{"input#immersiveTranslateDetectedSlot":{value:"true"}}},{globalAttributes:{"#stimulus":{translate:"off",class:"stimulus"},"#stem":{translate:"off",class:"stem"}},matches:"https://lawhub.lsac.org/question/*"},{matches:"https://www.yuque.com/*",excludeSelectors:[".lark-virtual-tree"]},{matches:"https://bearblog.dev/discover/*",excludeTags:["small"]},{matches:"www.researchgate.net",excludeSelectors:[".nova-legacy-v-publication-item__meta-data",".nova-legacy-v-publication-item__person-list",".js-authors-list"]},{matches:["www.theatlantic.com","https://mashable.com/*"],initialSelectorGlobalAttributes:{"footer:last-of-type":{translate:"no"},"nav:last-of-type":{translate:"no"},nav:{translate:"no"}}},{matches:"youtrack.jetbrains.com/articles/*",selectors:["[role=presentation]","[data-test=article-content]"],excludeSelectors:[".toolbar__ee8"]},{matches:"www.bbc.com",excludeSelectors:["section.module--languages",".drop-capped"]},{matches:"www.dw.com",initialSelectorGlobalAttributes:{"footer:last-of-type":{translate:"no"},"nav:last-of-type":{translate:"no"},nav:{translate:"no"}},excludeSelectors:[".focus-menu-shown"]},{matches:"docs.sentry.io",initialSelectorGlobalAttributes:{"footer:last-of-type":{translate:"no"},".navbar":{translate:"no"}}},{matches:"https://platform.openai.com/docs/*",urlChangeDelay:0},{selectorMatches:["meta[name='generator'][content^='Discourse']"],urlChangeDelay:0,_comment:"\u89E3\u51B3url\u53D8\u5316\u4F46\u662F\u9875\u9762\u4E0D\u53D8\u7684\u95EE\u9898"},{matches:"feedly.com",globalStyles:{".TitleOnlyLayout":"height:unset !important;",".EntrySummary--u4":"-webkit-line-clamp: unset;max-height:unset;",".EntrySummary--u5":"-webkit-line-clamp: unset;max-height:unset;"},excludeSelectors:[".Leftnav"]}]};function Oo(e){return Array.isArray(e)?e:e?[e]:[]}function Io(e,t){return t?(Array.isArray(t)||(t=[t]),Array.from(new Set([...t,e]))):[e]}function Vt(e,t){return t?(Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),t.filter(u=>!e.includes(u))):[]}function Da(e,t){let u=[],n=Object.keys(e);for(let i of n){let o=e[i];Array.isArray(o)&&u.push(i)}let a={...e};return Object.keys(t).forEach(i=>{let o=t[i];if(o!==void 0)if(!u.includes(i))a[i]=o;else if(i.startsWith("additional")){let s=Oo(o);a[i]=Array.from(new Set([...a[i],...s]))}else a[i]=Oo(o)}),a}function Rp(){if(te.PROD==="1")return{};let e={};if(te.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID&&te.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY){let t={secretId:te.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,secretKey:te.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY};e.translationServices={},e.translationServices.tencent=t}if(te.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID&&te.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY){let t={appid:te.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,key:te.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY};e.translationServices||(e.translationServices={}),e.translationServices.baidu=t}if(te.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN){let t={token:te.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN};e.translationServices||(e.translationServices={}),e.translationServices.caiyun=t}if(te.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY){let t={apikey:te.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY};e.translationServices||(e.translationServices={}),e.translationServices.openl=t}if(te.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID&&te.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET){let t={appId:te.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,appSecret:te.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET};e.translationServices||(e.translationServices={}),e.translationServices.youdao=t}if(te.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID&&te.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY){let t={accessKeyId:te.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,secretAccessKey:te.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY};e.translationServices||(e.translationServices={}),e.translationServices.volc=t}if(te.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY){let t={authKey:te.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY};e.translationServices||(e.translationServices={}),e.translationServices.deepl=t}if(te.DEEPL_PROXY_ENDPOINT&&(e.translationServices||(e.translationServices={}),e.translationServices.deepl||(e.translationServices.deepl={}),e.translationServices.deepl.immersiveTranslateApiUrl=te.DEEPL_PROXY_ENDPOINT),te.IMMERSIVE_TRANSLATE_DEEPL_ENDPOINT&&(e.translationServices||(e.translationServices={}),e.translationServices.deepl||(e.translationServices.deepl={}),e.translationServices.deepl.immersiveTranslateDeeplTokenUrl=te.IMMERSIVE_TRANSLATE_DEEPL_ENDPOINT),te.IMMERSIVE_TRANSLATE_SECRET_OPENAI_API_KEY){let t={APIKEY:te.IMMERSIVE_TRANSLATE_SECRET_OPENAI_API_KEY};e.translationServices||(e.translationServices={}),e.translationServices.openai=t}return te.DEBUG==="1"&&(e.debug=!0,e.cache=!1,e.alpha=!0),te.MOCK==="1"&&(e.translationService="mock"),te.IMMERSIVE_TRANSLATE_SERVICE&&(e.translationService=te.IMMERSIVE_TRANSLATE_SERVICE),e}async function Fn(){let e=await q.storage.local.get(wn);if(e[wn]){let t=e[wn],u=t.tempTranslationUrlMatches||[],n=u.filter(i=>i.expiredAt>Date.now()),a=!1;n.length!==u.length&&(u=n,a=!0);let r={...t,tempTranslationUrlMatches:[...u]};return a&&await Pn(r),r}else return{}}async function Pn(e){await q.storage.local.set({[wn]:e})}async function vl(e){await q.storage.local.set({[Kt]:e})}async function kl(){let e=await q.storage.local.get(Kt),u={...Al(),...Aa,buildinConfigUpdatedAt:te.BUILD_TIME};if(e[Kt]){let n=e[Kt];if(n&&n.buildinConfigUpdatedAt){let a=new Date(n.buildinConfigUpdatedAt),r=new Date(u.buildinConfigUpdatedAt);a>r&&(u=n)}}return u}async function hu(){let e=await q.storage.local.get(Kt),t={...Aa,buildinConfigUpdatedAt:te.BUILD_TIME};if(e[Kt]){let g=e[Kt];if(g&&g.buildinConfigUpdatedAt){let f=new Date(g.buildinConfigUpdatedAt),x=new Date(t.buildinConfigUpdatedAt);f>x&&(t=g)}}let u={};if(!ue()&&q.commands&&q.commands.getAll){let g=await q.commands.getAll();for(let f of g)f.name&&f.shortcut&&(u[f.name]=f.shortcut)}let n=Al(),a=Rp(),r=await Op(),i=globalThis.IMMERSIVE_TRANSLATE_CONFIG||{},o=await Fn(),s=new Date;if(o&&o.tempTranslationUrlMatches&&o.tempTranslationUrlMatches.length>0){let g=o.tempTranslationUrlMatches.filter(f=>new Date(f.expiredAt)>s);if(g.length>0){let f=r.translationUrlPattern?r.translationUrlPattern?.matches||[]:[],x=Array.isArray(f)?f:[f],y=Array.from(new Set(x.concat(g.map(p=>p.match))));r.translationUrlPattern={...r.translationUrlPattern,matches:y}}}let l=Object.assign({},i,a,r);if(!l.interfaceLanguage){let g=await Ip();l.interfaceLanguage=g}let c=Object.assign(n,t),d=Object.keys(c),m=["translationUrlPattern","translationLanguagePattern","immediateTranslationPattern","translationBodyAreaPattern","translationParagraphLanguagePattern","translationThemePatterns","translationGeneralConfig","shortcuts"];for(let g of d){let f=g;if(f==="generalRule")typeof l[f]=="object"&&(c[f]=Da(n[f],l[f]));else if(f==="translationServices"){let x=l[f]||{},y=t[f]||{},p=Object.keys(y),F=Object.keys(x),S=[...new Set([...p,...F])],C={};for(let B of S)C[B]={...y[B],...x[B]};c[f]=C}else if(typeof l[f]!="string"&&typeof l[f]!="boolean"&&typeof l[f]!="number"&&m.includes(f))l[f]&&(c[f]=Object.assign(c[f],l[f])),f==="shortcuts"&&(ue()||Tt()?c[f]={...c[f],...u}:c[f]={...u});else if(f==="rules"){if(Array.isArray(l[f])&&(c[f]=[...l[f],...c[f]]),te.PROD==="0"&&te.DEV_RULES){let x=JSON.parse(te.DEV_RULES);c[f]=[...x,...c[f]]}}else l[f]!==void 0&&(c[f]=l[f])}return c.donateUrl=t.donateUrl,c.minVersion=t.minVersion,c.feedbackUrl=t.feedbackUrl,c}async function Op(){return(await q.storage.sync.get("userConfig")||{}).userConfig||{}}var Ip=async()=>{let e=["zh-CN"];try{e=await q.i18n.getAcceptLanguages()}catch(n){A.warn("get browser language error:",n)}let u=e.map(n=>fu(n)).find(n=>gu[n]);return u||"en"},Al=()=>{let e={...Aa,buildinConfigUpdatedAt:te.BUILD_TIME};return{...e,targetLanguage:ha,interfaceLanguage:"en",translationMode:"dual",debug:!1,alpha:!1,translationUrlPattern:{matches:[],excludeMatches:[]},translationLanguagePattern:{matches:[],excludeMatches:[]},translationThemePatterns:{},translationParagraphLanguagePattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationBodyAreaPattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationTheme:"none",translationService:"bing",translationArea:"main",translationStartMode:"dynamic",translationServices:{},generalRule:{...e.generalRule},translationGeneralConfig:{engine:"bing"},rules:[]}};var je=class extends Error{constructor(u,n,a){super(n);this.name=u,a&&(this.details=a)}};async function Sl(e){let t;if(e&&e.retry&&e.retry>0)try{t=await io(Dl.bind(null,e),{multiplier:2,maxAttempts:e.retry})}catch(u){throw u&&u.name==="RetryError"&&u.cause?u.cause:u}else t=await Dl(e);return t}async function Dl(e){e.body;let{url:t,responseType:u,...n}=e;u||(u="json"),n={mode:"cors",...n};let a=!0;e.fetchPolyfill&&(a=!1);let r=e.fetchPolyfill||fetch,i=12e4;if(e.timeout&&(i=e.timeout),a){let s=new AbortController,l=s.signal;setTimeout(()=>{s.abort()},i),n.signal=l}let o=await r(t,n);if(o.ok&&o.status>=200&&o.status<400){if(u==="json")return await o.json();if(u==="text")return await o.text();if(u==="raw"){let s=await o.text(),l=Object.fromEntries([...o.headers.entries()]),c=o.url;return c||(o.headers.get("X-Final-URL")?c=o.headers.get("X-Final-URL"):c=t),{body:s,headers:l,status:o.status,statusText:o.statusText,url:c}}else if(u==="stream"){let s="",l;if(o.body&&o.body instanceof ReadableStream)for await(let c of Np(o.body)){let d=new TextDecoder().decode(c);s+=d;let m;for(;(m=s.indexOf(`
`))>=0;){let g=s.slice(0,m).trim();if(s=s.slice(m+1),g.startsWith("event:")||g==="")continue;let f="";if(g.startsWith("data:")&&(f=g.slice(5).trim()),f==="[DONE]")break;let x;try{x=JSON.parse(f??"")}catch(y){A.debug("json error",y);continue}l=x}}return l}}else{let s;try{s=await o.text()}catch(c){A.error("parse response failed",c)}s&&A.error("fail response",s);let l="";throw s&&(l=s.slice(0,150)),new je("fetchError",o.status+": "+(o.statusText||"")+l,s)}}async function*Np(e){let t=e.getReader();try{for(;;){let{done:u,value:n}=await t.read();if(u)return;yield n}}finally{t.releaseLock()}}function Jt(e,t){var u=(e&65535)+(t&65535),n=(e>>16)+(t>>16)+(u>>16);return n<<16|u&65535}function jp(e,t){return e<<t|e>>>32-t}function Fa(e,t,u,n,a,r){return Jt(jp(Jt(Jt(t,e),Jt(n,r)),a),u)}function Je(e,t,u,n,a,r,i){return Fa(t&u|~t&n,e,t,a,r,i)}function Ye(e,t,u,n,a,r,i){return Fa(t&n|u&~n,e,t,a,r,i)}function Xe(e,t,u,n,a,r,i){return Fa(t^u^n,e,t,a,r,i)}function Qe(e,t,u,n,a,r,i){return Fa(u^(t|~n),e,t,a,r,i)}function Sa(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;var u,n,a,r,i,o=1732584193,s=-271733879,l=-1732584194,c=271733878;for(u=0;u<e.length;u+=16)n=o,a=s,r=l,i=c,o=Je(o,s,l,c,e[u],7,-680876936),c=Je(c,o,s,l,e[u+1],12,-389564586),l=Je(l,c,o,s,e[u+2],17,606105819),s=Je(s,l,c,o,e[u+3],22,-1044525330),o=Je(o,s,l,c,e[u+4],7,-176418897),c=Je(c,o,s,l,e[u+5],12,1200080426),l=Je(l,c,o,s,e[u+6],17,-1473231341),s=Je(s,l,c,o,e[u+7],22,-45705983),o=Je(o,s,l,c,e[u+8],7,1770035416),c=Je(c,o,s,l,e[u+9],12,-1958414417),l=Je(l,c,o,s,e[u+10],17,-42063),s=Je(s,l,c,o,e[u+11],22,-1990404162),o=Je(o,s,l,c,e[u+12],7,1804603682),c=Je(c,o,s,l,e[u+13],12,-40341101),l=Je(l,c,o,s,e[u+14],17,-1502002290),s=Je(s,l,c,o,e[u+15],22,1236535329),o=Ye(o,s,l,c,e[u+1],5,-165796510),c=Ye(c,o,s,l,e[u+6],9,-1069501632),l=Ye(l,c,o,s,e[u+11],14,643717713),s=Ye(s,l,c,o,e[u],20,-373897302),o=Ye(o,s,l,c,e[u+5],5,-701558691),c=Ye(c,o,s,l,e[u+10],9,38016083),l=Ye(l,c,o,s,e[u+15],14,-660478335),s=Ye(s,l,c,o,e[u+4],20,-405537848),o=Ye(o,s,l,c,e[u+9],5,568446438),c=Ye(c,o,s,l,e[u+14],9,-1019803690),l=Ye(l,c,o,s,e[u+3],14,-187363961),s=Ye(s,l,c,o,e[u+8],20,1163531501),o=Ye(o,s,l,c,e[u+13],5,-1444681467),c=Ye(c,o,s,l,e[u+2],9,-51403784),l=Ye(l,c,o,s,e[u+7],14,1735328473),s=Ye(s,l,c,o,e[u+12],20,-1926607734),o=Xe(o,s,l,c,e[u+5],4,-378558),c=Xe(c,o,s,l,e[u+8],11,-2022574463),l=Xe(l,c,o,s,e[u+11],16,1839030562),s=Xe(s,l,c,o,e[u+14],23,-35309556),o=Xe(o,s,l,c,e[u+1],4,-1530992060),c=Xe(c,o,s,l,e[u+4],11,1272893353),l=Xe(l,c,o,s,e[u+7],16,-155497632),s=Xe(s,l,c,o,e[u+10],23,-1094730640),o=Xe(o,s,l,c,e[u+13],4,681279174),c=Xe(c,o,s,l,e[u],11,-358537222),l=Xe(l,c,o,s,e[u+3],16,-722521979),s=Xe(s,l,c,o,e[u+6],23,76029189),o=Xe(o,s,l,c,e[u+9],4,-640364487),c=Xe(c,o,s,l,e[u+12],11,-421815835),l=Xe(l,c,o,s,e[u+15],16,530742520),s=Xe(s,l,c,o,e[u+2],23,-995338651),o=Qe(o,s,l,c,e[u],6,-198630844),c=Qe(c,o,s,l,e[u+7],10,1126891415),l=Qe(l,c,o,s,e[u+14],15,-1416354905),s=Qe(s,l,c,o,e[u+5],21,-57434055),o=Qe(o,s,l,c,e[u+12],6,1700485571),c=Qe(c,o,s,l,e[u+3],10,-1894986606),l=Qe(l,c,o,s,e[u+10],15,-1051523),s=Qe(s,l,c,o,e[u+1],21,-2054922799),o=Qe(o,s,l,c,e[u+8],6,1873313359),c=Qe(c,o,s,l,e[u+15],10,-30611744),l=Qe(l,c,o,s,e[u+6],15,-1560198380),s=Qe(s,l,c,o,e[u+13],21,1309151649),o=Qe(o,s,l,c,e[u+4],6,-145523070),c=Qe(c,o,s,l,e[u+11],10,-1120210379),l=Qe(l,c,o,s,e[u+2],15,718787259),s=Qe(s,l,c,o,e[u+9],21,-343485551),o=Jt(o,n),s=Jt(s,a),l=Jt(l,r),c=Jt(c,i);return[o,s,l,c]}function Fl(e){var t,u="",n=e.length*32;for(t=0;t<n;t+=8)u+=String.fromCharCode(e[t>>5]>>>t%32&255);return u}function No(e){var t,u=[];for(u[(e.length>>2)-1]=void 0,t=0;t<u.length;t+=1)u[t]=0;var n=e.length*8;for(t=0;t<n;t+=8)u[t>>5]|=(e.charCodeAt(t/8)&255)<<t%32;return u}function zp(e){return Fl(Sa(No(e),e.length*8))}function Hp(e,t){var u,n=No(e),a=[],r=[],i;for(a[15]=r[15]=void 0,n.length>16&&(n=Sa(n,e.length*8)),u=0;u<16;u+=1)a[u]=n[u]^909522486,r[u]=n[u]^1549556828;return i=Sa(a.concat(No(t)),512+t.length*8),Fl(Sa(r.concat(i),512+128))}function Pl(e){var t="0123456789abcdef",u="",n,a;for(a=0;a<e.length;a+=1)n=e.charCodeAt(a),u+=t.charAt(n>>>4&15)+t.charAt(n&15);return u}function jo(e){return unescape(encodeURIComponent(e))}function Bl(e){return zp(jo(e))}function Up(e){return Pl(Bl(e))}function Ll(e,t){return Hp(jo(e),jo(t))}function Wp(e,t){return Pl(Ll(e,t))}function Yt(e,t,u){return t?u?Ll(t,e):Wp(t,e):u?Bl(e):Up(e)}function _l(e,t,u){let n=qp(e,t),a=[],r={from:e[0].from,fromByClient:e[0].fromByClient,to:e[0].to,tempSentences:[],url:e[0].url};for(let i of n)(r.tempSentences.reduce((s,l)=>s+l.text.length,0)+i.text.length>t||r.tempSentences.length>=u)&&(a.push(r),r={fromByClient:r.fromByClient,from:i.from,to:i.to,tempSentences:[],url:i.url}),(r.from!==i.from||r.to!==i.to)&&(r.tempSentences.length>0?(a.push(r),r={fromByClient:r.fromByClient,from:i.from,to:i.to,tempSentences:[],url:i.url}):(r.from=i.from,r.to=i.to)),r.tempSentences.push(i);return r.tempSentences.length>0&&a.push(r),a}function qp(e,t){let u=[],n=[];for(let a=0;a<e.length;a++){let r=e[a],{from:i,to:o,text:s,url:l}=r,c=0,d=s.split(/\r?\n/),m=[],g="";for(let f=0;f<d.length;f++){let x=d[f];if(x.trim()===""){m.length>0?f<d.length-1&&(m[m.length-1].suffix+=`
`):g+=`
`;continue}else if(x.length>t){let p=[];zo(x,t,p);for(let F=0;F<p.length;F++){let S=p[F],{text:C,prefix:B,suffix:b}=S;c++,m.push({from:i,to:o,text:C,prefix:B,suffix:b,index:a,url:l,sentenceTotalParts:c,partIndex:c-1}),n[a]=c}}else c++,m.push({text:x,prefix:g,suffix:"",from:i,to:o,index:a,url:l,sentenceTotalParts:c,partIndex:c-1}),n[a]=c;m.length>0&&f<d.length-1&&(m[m.length-1].suffix+=`
`)}u.push(...m)}for(let a=0;a<u.length;a++){let r=u[a],{index:i}=r;r.sentenceTotalParts=n[i]}return u}function Xt(e,t){let u=fu(e),n=fu(t),a=u===n;return a?!0:(a=u.startsWith("zh")&&n.startsWith("zh"),a)}function zo(e,t,u){let a=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((r,i)=>{let o=e.lastIndexOf(i,t);return o>r?o:r},-1);if(a===-1){let r=e.slice(0,t);if(r&&!r.trim())return;u.push({text:r,prefix:"",suffix:""}),e.length>t&&zo(e.slice(t),t,u)}else{let r=e.slice(0,a+1);if(r&&r.trim()==="")return;r.startsWith(" ")?u.push({text:r.slice(1),prefix:" ",suffix:""}):u.push({text:r,prefix:"",suffix:""}),a+1<e.length&&zo(e.slice(a+1),t,u)}return u}function Et(e,t){let u=new URL(e);t.startsWith("http")||(t="https://"+t);let n=new URL(t);return n.pathname!=="/"?n.toString():(u.host=n.host,n.port&&(u.port=n.port),n.protocol&&(u.protocol=n.protocol),n.username&&(u.username=n.username),n.password&&(u.password=n.password),u.toString())}function Ho(e,t){let u=Ot[e],n=t.config.translationServices[e]||{},a=!0,r=u.allProps||[],i=[],o=[];if(r.length>0){let s=r.filter(l=>l.required);if(s.length>0){for(let l of s)if(!n[l.name]&&!l.default){a=!1;break}}r.forEach(l=>{l.optional?o.push(l):i.push(l)})}return{...u,id:e,selected:t.translationService===e,ok:a,config:n,props:u.props||[],allProps:r,optionalProps:o,explicitProps:i}}var Ml=e=>{let{config:t}=e,u=t.alpha,n=t.beta,a=t.canary,r=t.debug;return Object.keys(Ot).filter(o=>{let s=Ot[o];if(o.startsWith("mock"))return r?!0:o===e.config.translationService;if(o===e.config.translationService)return!0;let l=!!s.canary,c=!!s.alpha,d=!!s.beta;return o===e.translationService||l&&a||c&&(u||a)||d&&(n||u||a)?!0:!c&&!d&&!l}).map(o=>Ho(o,e))};function mt(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))}var Ou=[];async function Pa(e,t){return await new Promise((u,n)=>{let a=e,r=1,i=indexedDB.open(a,r);i.onsuccess=o=>{u(i.result)},i.onerror=o=>{n()},i.onupgradeneeded=o=>{let s=i.result,l=t||"cache";s.createObjectStore(l,{keyPath:"key"})}})}async function Rl(e){let t=`${Ee}-${e.service}@${e.from}->${e.to}`;return await $p(t,e)}async function Ol(e){let t=Yt(e.originalText),u=`${Ee}-${e.service}@${e.from}->${e.to}`;return await Kp(u,t)}async function Kp(e,t){let u=await Pa(e);return await new Promise((n,a)=>{if(!u)return a();let r="cache",o=u.transaction([r],"readonly").objectStore(r).get(t);o.onsuccess=s=>{u.close();let l=o.result;n(l)},o.onerror=s=>{u.close(),a()}})}async function $p(e,t){let u=await Pa(e);return(await Vp()).includes(e)||await Gp(e),await new Promise(a=>{if(!u)return a(!1);let r="cache",o=u.transaction([r],"readwrite").objectStore(r).put(t);o.onsuccess=s=>{u.close(),a(!0)},o.onerror=s=>{u.close(),a(!1)}})}async function Gp(e){let t="cache_list",u=await Pa(Ee+"-cacheList",t),a=u.transaction([t],"readwrite").objectStore(t).put({key:e});a.onsuccess=r=>{u.close(),Ou.push(e)},a.onerror=r=>{u.close()}}async function Vp(){if(Ou&&Ou.length>0)return Ou;let e=await Pa(Ee+"-cacheList","cache_list");return Ou=await new Promise(t=>{let u="cache_list",a=e.transaction([u],"readonly").objectStore(u).getAllKeys();a.onsuccess=r=>{e.close(),t(a.result)},a.onerror=r=>{e.close(),t([])}}),Ou}function ze(){try{return globalThis.self!==globalThis.top}catch{return!0}}var Uo="Original";function ke(){return Uo}function tt(e){Uo=e,Il(Uo)}var jl="auto",Ba="auto",Nl="auto";function La(e){jl=e}function bt(e){Ba=e}function Pt(){return Ba!=="auto"?Ba:Nl!=="auto"?Nl:jl}function Iu(){return Ba}var Bn=new Map,Nu=class{constructor(t,u=!1){this.logger=new An,u&&this.logger.setLevel("debug"),this.fromType=t,Bn.has(t)||(Bn.set(t,new Map),q.runtime.onMessage.addListener((n,a,r)=>{let i=n.from,o=n.to,s,l,c;a.tab&&a.tab.id&&(s=a.tab.id,i=`${i}:${s}`,l=a.tab.url,c=a.tab.active),this.logger.debug(`${n.to} received message [${n.payload.method}] from ${n.from}`,n.payload.data?n.payload.data:" ");let d=qo(o),{type:m,name:g}=d;if(m!==t)return!1;let f=qo(i),y=Bn.get(m).get(g);if(!y)return this.logger.debug(`no message handler for ${m}:${o}, but it's ok`),!1;let{messageHandler:p,sync:F}=y,S={type:t,name:f.name,id:s,url:l,active:c};if(F){try{let C=p(n.payload,S);r({ok:!0,data:C})}catch(C){r({ok:!1,errorName:C.name,errorMessage:C.message,errorDetails:C.details})}return!1}else return p(n.payload,S).then(C=>{r({ok:!0,data:C})}).catch(C=>{r({ok:!1,errorName:C.name,errorMessage:C.message,errorDetails:C.details})}),!0}))}getConnection(t,u,n){let a=!1;n&&n.sync&&(a=!0);let r=this.fromType,i=Bn.get(r);if(i.has(t))return i.get(t).connectionInstance;{let o=new Wo(`${r}:${t}`,this.logger);return Bn.get(r).set(t,{messageHandler:u,sync:a,connectionInstance:o}),o}}},Wo=class{constructor(t,u){this.from=t,this.logger=u}async sendMessage(t,u){let n=qo(t),{type:a,id:r}=n;if(a!=="content_script"){let i={to:t,from:this.from,payload:u};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");try{let o=await q.runtime.sendMessage(i);return zl(i,o,this.logger)}catch(o){if(a==="popup"){let s=`popup ${t} is not active, so the message does not send, ignore this error, ${JSON.stringify(u)}`;return this.logger.debug(s,u,t,o),Promise.resolve({message:s})}else throw o}}else{let i={from:this.from,to:t,payload:u};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");let o=await q.tabs.sendMessage(r,i);return zl(i,o,this.logger)}}};function zl(e,t,u){if(t){if(t.ok)return u.debug(`${e.from} received response from ${e.to}:`,t.data?t.data:" "),t.data;throw new je(t.errorName||"UnknownError",t.errorMessage||"Unknown error",t.errorDetails)}else throw new je("noResponse","Unknown error")}function qo(e){let t=e.split(":");if(t.length<2)throw new Error("not a valid to string");let u={type:t[0],name:t[1]};if(t[0]==="content_script"){let n=parseInt(t[2]);if(!isNaN(n))u.id=n;else throw new Error("tab id not a valid number")}return u}var ju=async function(e,t){let{method:u,data:n}=e,a=await $l();A.debug(`content script received message: ${u}`,n||" "),u==="translateTheWholePage"?await $o():u==="translateTheMainPage"?await ja():u==="translateToThePageEndImmediately"?await Kl():u==="toggleTranslatePage"?await Oa():u==="toggleTranslateTheWholePage"?await ql():u==="toggleTranslateTheMainPage"?await Ul():u==="toggleOnlyTransation"?await za():u==="translatePage"?await wt(a):u==="toggleTranslationMask"?await Na():u==="restorePage"?Eu():u==="setCurrentPageLanguageByClient"?bt(n):u==="retryFailedParagraphs"?Ia():u==="switchTranslationMode"&&n&&n.mode&&Wl(n.mode)},Jp=function(e,t){let{method:u,data:n}=e;if(A.debug(`content script received sync message: ${u}`,n||" "),u==="ping")return"pong";if(u==="getPageStatus")return ke();if(u==="getCurrentPageLanguage"){let a=Pt();return Ko().catch(r=>{A.warn("detectCurrentPageLanguage failed",r)}),a}},_a,Ma;function Hl(){let e=Ra();ze()||Yp(),e.sendMessage("popup:main_sync",{method:"ready"}).catch(u=>{})}function Ra(){return _a||(_a=new Nu("content_script",!1).getConnection("main",ju),_a)}function Yp(){return Ma||(Ma=new Nu("content_script",!1).getConnection("main_sync",Jp,{sync:!0}),Ma)}var Xp=new Map;function Gl(e){let t=Qp(64),u=new CustomEvent(la,{detail:JSON.stringify({...e,type:"ask",id:t})});return document.dispatchEvent(u),new Promise((n,a)=>{Xp.set(t,(r,i)=>{r?a(r):n(i)})})}function Qp(e){let t="",u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=u.length,a=0;for(;a<e;)t+=u.charAt(Math.floor(Math.random()*n)),a+=1;return t}async function He(e){return await Ra().sendMessage("background:main",e)}function H(e){return Cl()?Gl({method:"request",data:e}):ue()||wl()?(e.fetchPolyfill=globalThis.GM_fetch,Sl(e)):He({method:"fetch",data:e})}function ut(){return ue()?hu():He({method:"getConfig"})}function Vl(){return ue()?Fn():He({method:"getLocalConfig"})}function Ha(e){return ue()?Pn(e):He({method:"setLocalConfig",data:e})}function Jl(e){return ue()?vl(e):He({method:"setBuildinConfig",data:e})}function Ie(e){if(e.text){let t=ka(e.text);if(t!=="auto")return Promise.resolve(t)}if(ue()||Tt()){let t=xl(e.text,e.minLength);return Promise.resolve(t)}return He({method:"detectLanguage",data:e})}function Yl(){return He({method:"detectTabLanguage"})}function Il(e){if(ue()){let u=new CustomEvent(da,{detail:e});document.dispatchEvent(u);return}Ra().sendMessage("popup:main_sync",{method:"setPageStatus",data:e}).catch(u=>{})}function Xl(e){return ue()?Ol(e):He({method:"queryParagraphCache",data:e})}async function Ql(e){if(ue()){await Rl(e);return}return He({method:"setParagraphCache",data:e})}async function Zl(){if(ue())return Promise.resolve();await He({method:"mockRequest"})}function Ua(e=!1,t=""){return ue()?(q.runtime.openOptionsPage(e,t),Promise.resolve()):He({method:"openOptionsPage"})}function Wa(e=!1){return ue()?(q.extra.openAboutPage(e),Promise.resolve()):He({method:"openAboutPage"})}function qa(e=!1){return ue()?(q.extra.openEbookViewerPage(e),Promise.resolve()):He({method:"openEbookViewerPage"})}function e4(e=!1){return ue()?Promise.resolve():He({method:"openHtmlViewerPage"})}function Ka(e=!1){return ue()?(q.extra.openEbookBuilderPage(e),Promise.resolve()):He({method:"openEbookBuilderPage"})}function $a(e){Tt()}function Go(e=!1){return ue()?(alert("it's not support in userscript"),Promise.resolve()):He({method:"openPdfViewerPage"})}function t4(e=!1){return ue()?(q.extra.openSubtitleBuilderPage(e),Promise.resolve()):He({method:"openSubtitleBuilderPage"})}function u4(){return ue()?(A.warn("autoSyncLatestConfig is not support in monkey"),Promise.resolve()):He({method:"autoSyncLatestConfig"})}var n4=re+"StoreKey_";function Ga(e,t){let u=n4+e;return q.storage.local.get(u).then(n=>n[u]===void 0?t:n[u])}function a4(e,t){let u=n4+e;return q.storage.local.set({[u]:t})}var r4=re+"SyncStoreKey_";function Vo(e,t){let u=r4+e;return q.storage.sync.get(u).then(n=>n[u]===void 0?t:n[u])}function zu(e,t){let u=r4+e;return q.storage.sync.set({[u]:t})}var Va={manifest_version:3,name:"__MSG_brandName__",description:"__MSG_brandDescription__",version:"0.6.1",default_locale:"en",background:{service_worker:"background.js"},web_accessible_resources:["styles/inject.css","pdf/index.html","ebook/index.html","ebook/index.html","ebook/make/index.html"],content_scripts:[{matches:["<all_urls>","file:///*","*://*/*"],js:["content_script.js"],run_at:"document_end",all_frames:!0}],commands:{toggleTranslatePage:{suggested_key:{default:"Alt+A"},description:"__MSG_toggleTranslatePage__"},toggleTranslateTheWholePage:{suggested_key:{default:"Alt+W"},description:"__MSG_toggleTranslateTheWholePage__"},toggleOnlyTransation:{description:"__MSG_toggleOnlyTransation__"},toggleTranslateToThePageEndImmediately:{description:"__MSG_toggleTranslateToThePageEndImmediately__"},toggleTranslateTheMainPage:{description:"__MSG_toggleTranslateTheMainPage__"},toggleTranslationMask:{description:"__MSG_toggleTranslationMask__"}},options_page:"options.html",options_ui:{page:"options.html",open_in_tab:!0,browser_style:!1},permissions:["storage","activeTab","contextMenus","webRequest","webRequestBlocking","declarativeNetRequestWithHostAccess","declarativeNetRequestFeedback","declarativeNetRequest"],host_permissions:["<all_urls>"],declarative_net_request:{rule_resources:[{id:"ruleset_1",enabled:!0,path:"rules/request_modifier_rule.json"}]},action:{default_popup:"popup.html",default_icon:{"32":"icons/32.png","48":"icons/48.png","64":"icons/64.png","128":"icons/128.png","256":"icons/256.png"}},browser_action:{default_icon:"icons/32.png",default_popup:"popup.html",theme_icons:[{dark:"icons/32.png",light:"icons/dark-32.png",size:32},{dark:"icons/48.png",light:"icons/dark-48.png",size:48},{dark:"icons/64.png",light:"icons/dark-64.png",size:64},{dark:"icons/128.png",light:"icons/dark-128.png",size:128},{dark:"icons/256.png",light:"icons/dark-256.png",size:256}]},icons:{"32":"icons/32.png","48":"icons/48.png","64":"icons/64.png","128":"icons/128.png","256":"icons/256.png"},browser_specific_settings:{gecko:{id:"{5efceaa7-f3a2-4e59-a54b-85319448e305}",strict_min_version:"63.0"}},key:"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7JPn78UfqI3xIIOPPLPS74UTzLfJL1gQM8hlk/deKWvFP/WqUBnPJPdhQeF45sFpI1OjO70nFqdATT4/RwYAiZK7G/E6m27MDVnhHjszfzReOuoAEn9J3RnE2xEx5pFhRFcelhnwTTLrrn90aaPcaMtNsgXtZA1Ggz/SnX9I4ZygqpJYjx3Ql2t6SyNK222oRQiKMT93Rrjgyc8RFA7FKXsWglG0TvseRjbmG5Jk5gDx+2/YTcWGqCDotQnWnkPj/dBO23UAX7IpyJK3FGYdkvWFih6OVClHIIWY8mfCjjwSGbXNQNesaa9F2hrzBZ5MRTj4m7yj76mGxuPHPIE8mwIDAQAB"};function Hu(){return Va.version}var o4="G-MKMD9LWFTR";async function Ct(e,t,u){try{let n=Nt(),a=ue(),r=ze(),i=n.PROD==="1",o=`report_${e}`,s=e.endsWith("_daily");if(s){if(r)return;let v=await Ga(o,0),E=Ja(new Date(v)),w=Date.now(),I=Ja(new Date(w));if(E===I)return;await a4(o,w)}else if(!u.config.telemetry)return;let l="sitc4WmvShWYwfU0dANM3Q",c=await Vo("fakeUserId","");c||(c=await Ga("fakeUserId",""),c&&await zu("fakeUserId",c));let d=Hu(),m=new Date,g=await Vo("installedAt","");g||(g=await Ga("installedAt",""),g&&await zu("installedAt",g)),c?g||(g=new Date(0).toISOString(),await zu("installedAt",g)):(c=ef(32),await zu("fakeUserId",c)),g||(g=m.toISOString(),await zu("installedAt",g));let f=new Date(g),x=Ja(f),y=Ja(m),p=x===y,F=m.getTime()-f.getTime()<7*24*60*60*1e3,S=`https://www.google-analytics.com/mp/collect?measurement_id=${o4}&api_secret=${l}`;i||(S=`https://www.google-analytics.com/debug/mp/collect?measurement_id=${o4}&api_secret=${l}`);let C=oa.parse(window.navigator.userAgent),B=t.map(v=>{let E=v.params||{};C.os&&(E.os_name=C.os.name||"unknown",E.os_version=C.os.version||"unknown",E.os_version_name=C.os.versionName||"unknown"),C.browser&&(E.browser_name=C.browser.name||"unknown",E.browser_version=C.browser.version||"unknown"),C.platform&&(E.platform_type=C.platform.type||"unknown"),C.engine&&(E.engine_name=C.engine.name||"unknown",E.engine_version=C.engine.version||"unknown"),u.translationService&&(E.translation_service=u.translationService),u.targetLanguage&&(E.target_language=u.targetLanguage),u.config.interfaceLanguage&&(E.interface_language=u.config.interfaceLanguage),d&&(E.version=d),u.config.translationTheme&&(E.translation_theme=u.config.translationTheme),u.config.alpha&&(E.alpha=u.config.alpha.toString()),n.INSTALL_FROM&&(E.install_from=n.INSTALL_FROM),u.config.beta&&(E.beta=u.config.alpha.toString()),u.config.translationArea&&(E.translation_area=u.config.translationArea),x&&(E.install_day=tf(f)),u.config.translationMode&&(E.translation_mode=u.config.translationMode),E.userscript=a.toString(),p?E.is_new_user_today="1":E.is_new_user_today="0",F?E.is_new_user_this_week="1":E.is_new_user_this_week="0",u.config.tempTranslateDomainMinutes?E.temp_translate_domain_minutes=u.config.tempTranslateDomainMinutes.toString():E.temp_translate_domain_minutes="0";let w="html";if(u.rule.isEbook?w="ebookReader":u.rule.isPdf?w="pdfReader":u.rule.isEbookBuilder?w="ebookBuilder":u.rule.isSubtitleBuilder&&(w="subtitleBuilder"),E.page_type=w,r?E.main_frame=0:E.main_frame=1,!s){let I=u.url;try{let T=new URL(I);E.site_host=T.hostname}catch{E.site_host="unknown"}u.sourceLanguage&&(E.source_language=u.sourceLanguage)}return{...v,params:E}}),b=await H({responseType:"text",url:S,method:"POST",body:JSON.stringify({client_id:c,user_id:c,events:B})})}catch{}}function ef(e){let t="",u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=u.length,a=0;for(;a<e;)t+=u.charAt(Math.floor(Math.random()*n)),a+=1;return t}function Ja(e){let u=e.toLocaleString("en-US",{timeZone:"Asia/Shanghai"}).split(" ")[0];return u.endsWith(",")&&(u=u.slice(0,-1)),u}function tf(e){try{let u=e.toLocaleString("en-US",{timeZone:"Asia/Shanghai"}).split(" ")[0];u.endsWith(",")&&(u=u.slice(0,-1));let[n,a,r]=u.split("/");return u=`${r}-${n}-${a}`,u}catch{return"unknown"}}function i4(e,t){let u=t.matches||[],n=t.excludeMatches||[];if(n&&!Array.isArray(n)&&(n=[n]),u&&!Array.isArray(u)&&(u=[u]),n.length>0){if(n.includes(e)||n.includes("<all>"))return!1;for(let a of n)if(a.includes("*")&&new RegExp(a).test(e))return!1}if(u.length===0)return!1;if(u.length>0){if(u.includes(e)||u.includes("<all>"))return!0;for(let a of u)if(a.includes("*")&&new RegExp(a).test(e))return!0}return!1}var Ge=class{constructor(t){this.strictTicks=[];this.options=t,this.setOptions(t)}setOptions(t){t&&(t.interval!==void 0&&(this.options.interval=Number(t.interval)),t.limit!==void 0&&(this.options.limit=Number(t.limit)))}wait(){return new Promise((t,u)=>{setTimeout(t,this.getDelay())})}getDelay(){let t=this.strictTicks,u=this.options.limit,n=this.options.interval,a=Date.now();if(t.length<u)return t.push(a),0;let r=t.shift()+n;return a>=r?(t.push(a),0):(t.push(r),r-a)}};function Qt(e){return e!=null}function c4(e,t,u){return`${e.type}#${t}#${u}`}function d4(e,t,u,n,a){return{body:a,id:n,type:c4(e,t,u)}}function uf(e,t,u,n){return{id:u,response:n,type:c4(e,"ask",t)}}function m4(e,t,u,n){if(Qt(n)){let a=n.type;if(Qt(a)&&Qt(n.body)){let[r,i,o]=a.split("#");return r===e.type&&i===t&&o===u}else return!1}else return!1}function nf(e,t,u){if(Qt(u)){let n=u.type;if(Qt(n)&&Qt(u.response)){let[a,r,i]=n.split("#");return a===e.type&&r==="ask"&&i===t}else return!1}else return!1}function af(e){e.forEach(([t,u])=>t.removeEventListener("message",u)),e.length=0}function rf(e,t,u,n){return new Promise(a=>{let r=i=>{let o=i.data;nf(t,u,o)&&o.id===n&&(e.removeEventListener("message",r),a(o.response))};e.addEventListener("message",r)})}function of(e,t,u,n){let a=r=>{let i=r.data;m4(t,"tell",u,i)&&n(i.body)};return e.addEventListener("message",a),[e,a]}function s4(e,t,u,n,a,r){let i=async o=>{let s=o.data;if(m4(u,"ask",n,s)){let l=await r(s.body);t=o.source,t.postMessage(uf(u,n,s.id,l),o.origin)}};return e.addEventListener("message",i),[e,i]}function sf(e,t,u,n,a){let r=Math.random().toString();return e.postMessage(d4(t,"tell",u,r,n),a)}async function l4(e,t,u,n,a,r,i){let o=Math.random().toString(),s=new Promise(async(l,c)=>{let d=setTimeout(()=>c(new Error(`Failed to get response within ${i}ms`)),i),m=await rf(e,u,n,o);clearTimeout(d),l(m)});return t.postMessage(d4(u,"ask",n,o,a),r),s}var Bt=class{constructor(t,u,n=window,a="*"){this.protocol=t;this.targetWindow=u;this.thisWindow=n;this.targetOrigin=a;this.listeners=[];s4(n,u,this.getSystemProtocol("ping"),"ping",a,()=>Promise.resolve({}))}static async connect(t,u=10,n=500){for(let a=0;a<=u;a++)try{return await t.ping({timeout:n}),t}catch{continue}throw new Error(`Could not connect on protocol ${t.protocol.type} after ${u*n}ms`)}static parent(t,u,n="*",a=window){let r=u.contentWindow;if(Qt(r))return new Bt(t,r,a,n);throw new Error("iframe.contentWindow was null")}static iframe(t,u="*",{thisWindow:n=window,targetWindow:a=window.parent}={}){return new Bt(t,a,n,u)}static rootIframe(t,u="*",{thisWindow:n=window}={}){return new Bt(t,null,n,u)}getSystemProtocol(t){return{type:`system|${t}`}}async ping({timeout:t=1e4}){await l4(this.thisWindow,this.targetWindow,this.getSystemProtocol("ping"),"ping",{data:{},payload:{}},this.targetOrigin,t)}handleTell(t,u){this.listeners.push(of(this.thisWindow,this.protocol,t,u))}tell(t,u){sf(this.targetWindow,this.protocol,t,u,this.targetOrigin)}handleAsk(t,u){this.listeners.push(s4(this.thisWindow,this.targetWindow,this.protocol,t,this.targetOrigin,u))}ask(t,u,n=1e4){if(this.targetWindow)return l4(this.thisWindow,this.targetWindow,this.protocol,t,u,this.targetOrigin,n);throw new Error("target window is requried")}destroy(){af(this.listeners)}};var lf;function Ya(){return lf}var cf=new Ge({limit:7,interval:1250}),df={tencent:new Ge({limit:3,interval:1350}),baidu:new Ge({limit:1,interval:1550}),strict:new Ge({limit:1,interval:1050}),d:new Ge({limit:1,interval:1050}),youdao:new Ge({limit:5,interval:1050}),you:new Ge({limit:5,interval:1050}),cai:new Ge({limit:5,interval:1050}),google:new Ge({limit:10,interval:1050}),deepl:new Ge({limit:10,interval:1050}),transmart:new Ge({limit:30,interval:1050}),papago:new Ge({limit:3,interval:1150}),openai:new Ge({limit:5,interval:1300}),chatgpt:new Ge({limit:1,interval:1350})};function Ln(e){return df[e]||cf}async function g4(e){if(ze()){let u=Ya();if(u)try{return(await u.ask("getRateLimitDelay",{key:e})).value}catch(n){return A.error("can not comunicate with root frame, use strict limiter",n),Ln("strict").getDelay()}else return Ln("strict").getDelay()}else return Ln(e).getDelay()}async function p4(e,t){if(!ze()){let n=Ln(e);t&&n.setOptions(t)}}async function f4(e){let t=e.key;return{value:Ln(t).getDelay()}}var X=class{constructor(t,u,n){this.maxTextLength=1800;this.isSupportList=!0;this.maxTextGroupLength=200;this.serviceConfig=t,this.generalConfig=u,this.translationOptions=n}async init(){}getMaxTextGroupLength(){return this.maxTextGroupLength}getDefaultRateLimit(){return null}translate(t){throw new Error("Not implemented")}translateList(t){throw new Error("Not implemented")}async multipleTranslate(t,u,n){if(t.sentences.length===0)return{sentences:[]};let{sentences:a}=t,r=[],i=null,o=new Set;for(let y of a)y.from&&y.from!=="auto"&&o.add(y.from);let s=!1;o.size>1&&(s=!0);let l=this.maxTextLength;this.serviceConfig&&this.serviceConfig.maxTextLengthPerRequest&&(l=this.serviceConfig.maxTextLengthPerRequest);let c=this.maxTextGroupLength;this.serviceConfig&&this.serviceConfig.maxTextGroupLengthPerRequest&&(c=this.serviceConfig.maxTextGroupLengthPerRequest);try{r=_l(a,l,c)}catch(y){if(n)for(let p=0;p<a.length;p++){let F=a[p];n(y,null,F)}throw y}A.debug("tempSentenceGroups",r.map(y=>y));let d=[],m=[],g=(y,p,F)=>{let S=p.translatedTexts[0];m[y]||(m[y]=p,m[y].translatedTexts=Array(p.sentenceTotalParts).fill(null)),m[y].translatedTexts[p.partIndex]=S;let C=m[y],B=0;for(let b=0;b<C.sentenceTotalParts;b++)C.translatedTexts[b]!==null&&(B+=1);if(B===C.sentenceTotalParts){let b=C.translatedTexts.join(""),v={...C.sentence,text:b};p.callback&&p.callback(null,v,p.sentence)}},f={...this.getDefaultRateLimit()},x=this.serviceConfig;x&&x.limit&&(f.limit=Number(x.limit)),x.interval&&(f.interval=Number(x.interval));for(let y=0;y<r.length;y++){let p=r[y],F=p.url,S=async()=>{let C=await g4(this.translationOptions.translationService);await En(C||0);let B=p.from;if(s&&(B="auto"),p.fromByClient&&p.fromByClient!=="auto"&&(B=p.fromByClient),this.isSupportList)return{...await this.translateList({text:p.tempSentences.map(v=>v.text),from:B,to:p.to,url:F,options:u}),sourceTempSentences:p.tempSentences};{let b=z0;this.serviceConfig&&this.serviceConfig.translationTextSeparator&&(b=this.serviceConfig.translationTextSeparator);let v=null;this.serviceConfig&&this.serviceConfig.newlinePlaceholderDelimiters&&(v=this.serviceConfig.newlinePlaceholderDelimiters);let E="";v&&v.length>=2?E=p.tempSentences.map((L,z)=>z===p.tempSentences.length-1?L.text:L.text+v[0]+(z+1)+v[1]).join(""):E=p.tempSentences.map(L=>L.text).join(b);let w=await this.translate({text:E,from:B,to:p.to,url:F,options:u}),{text:I}=w,T=[];if(v&&v.length>=2){let L=`${v[0]}\\d+${v[1]}`;v&&v.length>=3&&(L=v[2]);let z=new RegExp(L,"g");T=I.split(z)}else T=I.split(b);let _=[];if(T.length>p.tempSentences.length){for(let L=0;L<p.tempSentences.length-1;L++)_[L]=T[L];_[p.tempSentences.length-1]=T.slice(p.tempSentences.length-1).join(b)}else if(T.length<p.tempSentences.length)for(let L=T.length;L<p.tempSentences.length;L++)T[L]="";else _=T;return{sourceTempSentences:p.tempSentences,text:_,from:w.from,to:w.to}}};d.push(S().then(C=>{let{text:B,sourceTempSentences:b}=C;for(let v=0;v<B.length;v++){let E=B[v],w=b[v];if(w){let{index:I,prefix:T,suffix:_}=w;g(I,{sentence:{...a[I],from:p.from,to:p.to},sentenceTotalParts:w.sentenceTotalParts,partIndex:w.partIndex,translatedTexts:[T+E+_],callback:n},null)}}}).catch(C=>{if(n){for(let B=0;B<p.tempSentences.length;B++){let b=p.tempSentences[B];b.sentenceTotalParts===1?n(C,null,{...a[b.index],from:p.from,to:p.to}):(n(C,null,{...a[b.index],from:p.from,to:p.to}),B+=b.sentenceTotalParts-1)}i=C}else i=C}))}if(await Promise.allSettled(d),i)throw i;return{sentences:m.map(y=>({...y.sentence,text:y.translatedTexts.join("")}))}}detectLanguageLocally(t){return Ie({text:t,minLength:18})}detectLanguageRemotely(t){return Promise.resolve("auto")}detectLanguage(t){return t.length>=50?this.detectLanguageLocally(t):this.detectLanguageRemotely(t)}};var Uu="input is invalid type",Jo=typeof window=="object",Zt=Jo?window:{};Zt.JS_SHA256_NO_WINDOW&&(Jo=!1);var mf=!Jo&&typeof self=="object",gf=!Zt.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;gf?Zt=global:mf&&(Zt=self);var Zx=!Zt.JS_SHA256_NO_COMMON_JS&&typeof module=="object"&&module.exports,eT=typeof define=="function"&&define.amd,_n=!Zt.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",U="0123456789abcdef".split(""),pf=[-2147483648,8388608,32768,128],vt=[24,16,8,0],Xa=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],Qa=["hex","array","digest","arrayBuffer"],Ue=[];(Zt.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"});_n&&(Zt.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return typeof e=="object"&&e.buffer&&e.buffer.constructor===ArrayBuffer});var h4=function(e,t){return function(u){return new We(t,!0).update(u)[e]()}},b4=function(e){var t=h4("hex",e);t.create=function(){return new We(e)},t.update=function(a){return t.create().update(a)};for(var u=0;u<Qa.length;++u){var n=Qa[u];t[n]=h4(n,e)}return t},E4=function(e,t){return function(u,n){return new Za(u,t,!0).update(n)[e]()}},y4=function(e){var t=E4("hex",e);t.create=function(a){return new Za(a,e)},t.update=function(a,r){return t.create(a).update(r)};for(var u=0;u<Qa.length;++u){var n=Qa[u];t[n]=E4(n,e)}return t};function We(e,t){t?(Ue[0]=Ue[16]=Ue[1]=Ue[2]=Ue[3]=Ue[4]=Ue[5]=Ue[6]=Ue[7]=Ue[8]=Ue[9]=Ue[10]=Ue[11]=Ue[12]=Ue[13]=Ue[14]=Ue[15]=0,this.blocks=Ue):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}We.prototype.update=function(e){if(!this.finalized){var t,u=typeof e;if(u!=="string"){if(u==="object"){if(e===null)throw new Error(Uu);if(_n&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!_n||!ArrayBuffer.isView(e)))throw new Error(Uu)}else throw new Error(Uu);t=!0}for(var n,a=0,r,i=e.length,o=this.blocks;a<i;){if(this.hashed&&(this.hashed=!1,o[0]=this.block,o[16]=o[1]=o[2]=o[3]=o[4]=o[5]=o[6]=o[7]=o[8]=o[9]=o[10]=o[11]=o[12]=o[13]=o[14]=o[15]=0),t)for(r=this.start;a<i&&r<64;++a)o[r>>2]|=e[a]<<vt[r++&3];else for(r=this.start;a<i&&r<64;++a)n=e.charCodeAt(a),n<128?o[r>>2]|=n<<vt[r++&3]:n<2048?(o[r>>2]|=(192|n>>6)<<vt[r++&3],o[r>>2]|=(128|n&63)<<vt[r++&3]):n<55296||n>=57344?(o[r>>2]|=(224|n>>12)<<vt[r++&3],o[r>>2]|=(128|n>>6&63)<<vt[r++&3],o[r>>2]|=(128|n&63)<<vt[r++&3]):(n=65536+((n&1023)<<10|e.charCodeAt(++a)&1023),o[r>>2]|=(240|n>>18)<<vt[r++&3],o[r>>2]|=(128|n>>12&63)<<vt[r++&3],o[r>>2]|=(128|n>>6&63)<<vt[r++&3],o[r>>2]|=(128|n&63)<<vt[r++&3]);this.lastByteIndex=r,this.bytes+=r-this.start,r>=64?(this.block=o[16],this.start=r-64,this.hash(),this.hashed=!0):this.start=r}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}};We.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=pf[t&3],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}};We.prototype.hash=function(){var e=this.h0,t=this.h1,u=this.h2,n=this.h3,a=this.h4,r=this.h5,i=this.h6,o=this.h7,s=this.blocks,l,c,d,m,g,f,x,y,p,F,S;for(l=16;l<64;++l)g=s[l-15],c=(g>>>7|g<<25)^(g>>>18|g<<14)^g>>>3,g=s[l-2],d=(g>>>17|g<<15)^(g>>>19|g<<13)^g>>>10,s[l]=s[l-16]+c+s[l-7]+d<<0;for(S=t&u,l=0;l<64;l+=4)this.first?(this.is224?(y=300032,g=s[0]-1413257819,o=g-150054599<<0,n=g+24177077<<0):(y=704751109,g=s[0]-210244248,o=g-1521486534<<0,n=g+143694565<<0),this.first=!1):(c=(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10),d=(a>>>6|a<<26)^(a>>>11|a<<21)^(a>>>25|a<<7),y=e&t,m=y^e&u^S,x=a&r^~a&i,g=o+d+x+Xa[l]+s[l],f=c+m,o=n+g<<0,n=g+f<<0),c=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),d=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7),p=n&e,m=p^n&t^y,x=o&a^~o&r,g=i+d+x+Xa[l+1]+s[l+1],f=c+m,i=u+g<<0,u=g+f<<0,c=(u>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10),d=(i>>>6|i<<26)^(i>>>11|i<<21)^(i>>>25|i<<7),F=u&n,m=F^u&e^p,x=i&o^~i&a,g=r+d+x+Xa[l+2]+s[l+2],f=c+m,r=t+g<<0,t=g+f<<0,c=(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),d=(r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7),S=t&u,m=S^t&n^F,x=r&i^~r&o,g=a+d+x+Xa[l+3]+s[l+3],f=c+m,a=e+g<<0,e=g+f<<0;this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+u<<0,this.h3=this.h3+n<<0,this.h4=this.h4+a<<0,this.h5=this.h5+r<<0,this.h6=this.h6+i<<0,this.h7=this.h7+o<<0};We.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,u=this.h2,n=this.h3,a=this.h4,r=this.h5,i=this.h6,o=this.h7,s=U[e>>28&15]+U[e>>24&15]+U[e>>20&15]+U[e>>16&15]+U[e>>12&15]+U[e>>8&15]+U[e>>4&15]+U[e&15]+U[t>>28&15]+U[t>>24&15]+U[t>>20&15]+U[t>>16&15]+U[t>>12&15]+U[t>>8&15]+U[t>>4&15]+U[t&15]+U[u>>28&15]+U[u>>24&15]+U[u>>20&15]+U[u>>16&15]+U[u>>12&15]+U[u>>8&15]+U[u>>4&15]+U[u&15]+U[n>>28&15]+U[n>>24&15]+U[n>>20&15]+U[n>>16&15]+U[n>>12&15]+U[n>>8&15]+U[n>>4&15]+U[n&15]+U[a>>28&15]+U[a>>24&15]+U[a>>20&15]+U[a>>16&15]+U[a>>12&15]+U[a>>8&15]+U[a>>4&15]+U[a&15]+U[r>>28&15]+U[r>>24&15]+U[r>>20&15]+U[r>>16&15]+U[r>>12&15]+U[r>>8&15]+U[r>>4&15]+U[r&15]+U[i>>28&15]+U[i>>24&15]+U[i>>20&15]+U[i>>16&15]+U[i>>12&15]+U[i>>8&15]+U[i>>4&15]+U[i&15];return this.is224||(s+=U[o>>28&15]+U[o>>24&15]+U[o>>20&15]+U[o>>16&15]+U[o>>12&15]+U[o>>8&15]+U[o>>4&15]+U[o&15]),s};We.prototype.toString=We.prototype.hex;We.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,u=this.h2,n=this.h3,a=this.h4,r=this.h5,i=this.h6,o=this.h7,s=[e>>24&255,e>>16&255,e>>8&255,e&255,t>>24&255,t>>16&255,t>>8&255,t&255,u>>24&255,u>>16&255,u>>8&255,u&255,n>>24&255,n>>16&255,n>>8&255,n&255,a>>24&255,a>>16&255,a>>8&255,a&255,r>>24&255,r>>16&255,r>>8&255,r&255,i>>24&255,i>>16&255,i>>8&255,i&255];return this.is224||s.push(o>>24&255,o>>16&255,o>>8&255,o&255),s};We.prototype.array=We.prototype.digest;We.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e};function Za(e,t,u){var n,a=typeof e;if(a==="string"){var r=[],i=e.length,o=0,s;for(n=0;n<i;++n)s=e.charCodeAt(n),s<128?r[o++]=s:s<2048?(r[o++]=192|s>>6,r[o++]=128|s&63):s<55296||s>=57344?(r[o++]=224|s>>12,r[o++]=128|s>>6&63,r[o++]=128|s&63):(s=65536+((s&1023)<<10|e.charCodeAt(++n)&1023),r[o++]=240|s>>18,r[o++]=128|s>>12&63,r[o++]=128|s>>6&63,r[o++]=128|s&63);e=r}else if(a==="object"){if(e===null)throw new Error(Uu);if(_n&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!_n||!ArrayBuffer.isView(e)))throw new Error(Uu)}else throw new Error(Uu);e.length>64&&(e=new We(t,!0).update(e).array());var l=[],c=[];for(n=0;n<64;++n){var d=e[n]||0;l[n]=92^d,c[n]=54^d}We.call(this,t,u),this.update(c),this.oKeyPad=l,this.inner=!0,this.sharedMemory=u}Za.prototype=new We;Za.prototype.finalize=function(){if(We.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();We.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),We.prototype.finalize.call(this)}};var Wu=b4();Wu.sha256=Wu;Wu.sha224=b4(!0);Wu.sha256.hmac=y4();Wu.sha224.hmac=y4(!0);var x4=Wu;var T4=x4.sha256;function kt(e){return Promise.resolve(T4(e))}function er(e){return Array.from(new Uint8Array(e)).map(n=>n.toString(16).padStart(2,"0")).join("")}function eu(e,t){let u=T4.hmac.create(t);return u.update(e),Promise.resolve(u.array())}async function w4(e,t){let u=await eu(e,t);return er(u)}async function tr(e,t){let u=ff(t),n=await eu(e,u);return er(n)}function ff(e){let t=[];return e.replace(/../g,function(u){return t.push(parseInt(u,16)),""}),new Uint8Array(t).buffer}var C4=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","jp"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],At=class extends X{constructor(u,n,a){super(u,n,a);this.secretId="";this.secretKey="";this.isSupportList=!0;if(!u||!u.secretId||!u.secretKey)throw new Error("secretId and secretKey are required");this.secretId=u.secretId?.trim(),this.secretKey=u.secretKey?.trim()}static getUTCDate(u){let n=u.getUTCFullYear(),a=`${u.getUTCMonth()+1}`.padStart(2,"0"),r=`${u.getUTCDate()}`.padStart(2,"0");return`${n}-${a}-${r}`}async translate(u){let{text:n,from:a,to:r}=u,i=JSON.stringify({ProjectId:0,Source:At.langMap.get(a)||"auto",SourceText:n,Target:At.langMap.get(r)||r}),o=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslate",payload:i,service:"tmt",version:"2018-03-21"});return{text:o.Response.TargetText,from:At.langMapReverse.get(o.Response.Source)||a,to:At.langMapReverse.get(o.Response.Target)||r}}async translateList(u){let{text:n,from:a,to:r}=u,i=JSON.stringify({ProjectId:0,Source:At.langMap.get(a)||"auto",SourceTextList:n,Target:At.langMap.get(r)||r}),o=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslateBatch",payload:i,service:"tmt",version:"2018-03-21"});return{text:o.Response.TargetTextList,from:At.langMapReverse.get(o.Response.Source)||a,to:At.langMapReverse.get(o.Response.Target)||r}}async signedRequest({secretId:u,secretKey:n,action:a,payload:r,service:i,version:o}){let s=`${i}.tencentcloudapi.com`,l=new Date,c=`${new Date().valueOf()}`.slice(0,10),d=["POST","/","","content-type:application/json; charset=utf-8",`host:${s}`,"","content-type;host",await kt(r)].join(`
`),m=At.getUTCDate(l),g=["TC3-HMAC-SHA256",c,`${m}/${i}/tc3_request`,await kt(d)].join(`
`),f=await w4(m,`TC3${n}`),x=await tr(i,f),y=await tr("tc3_request",x),p=await tr(g,y),F=await H({retry:1,url:`https://${i}.tencentcloudapi.com`,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Host:s,"X-TC-Action":a,"X-TC-Timestamp":c,"X-TC-Region":"ap-beijing","X-TC-Version":o,Authorization:`TC3-HMAC-SHA256 Credential=${u}/${m}/${i}/tc3_request, SignedHeaders=content-type;host, Signature=${p}`},body:r});if(F instanceof Error)throw F;if(F.Response&&F.Response.Error&&F.Response.Error.Message)throw new Error(F.Response.Error.Message);return F}},bu=At;bu.langMap=new Map(C4),bu.langMapReverse=new Map(C4.map(([u,n])=>[n,u]));var v4=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","jp"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],hf={"content-type":"application/json",Host:"wxapp.translator.qq.com","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.32(0x18002035) NetType/WIFI Language/zh_TW",Referer:"https://servicewechat.com/wxb1070eabc6f9107e/117/page-frame.html"},ur=class extends X{constructor(u,n,a){super(u,n,a);this.isSupportList=!1}async translate(u){let{text:n,from:a,to:r}=u,i=new URLSearchParams({source:a,target:r,sourceText:n,platform:"WeChat_APP",candidateLangs:"en|zh",guid:"oqdgX0SIwhvM0TmqzTHghWBvfk22"}).toString(),o=await H({url:`https://wxapp.translator.qq.com/api/translate?${i}`,retry:1,method:"GET",headers:hf});return{text:o.targetText,from:ur.langMapReverse.get(o.source)||a,to:ur.langMapReverse.get(o.target)||r}}},yu=ur;yu.langMap=new Map(v4),yu.langMapReverse=new Map(v4.map(([u,n])=>[n,u]));var k4=[["auto","auto"],["zh-CN","zh-CN"],["zh-TW","zh-TW"],["en","en"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["ceb","ceb"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["haw","haw"],["he","he"],["hi","hi"],["hmn","hmn"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["jw","jw"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["fil","tl"],["tr","tr"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zu","zu"]],tu=class extends X{constructor(u,n,a){super(u,n,a);this.isSupportList=!1;this.apiUrl="https://translate.googleapis.com/translate_a/single";u&&u.apiUrl&&(this.apiUrl=Et(this.apiUrl,u.apiUrl))}getDefaultRateLimit(){return{limit:10,interval:1050}}async translate(u){let{text:n,from:a,to:r}=u;if(!n)return{...u};let i=tu.langMap.get(a)||"auto",o=tu.langMap.get(r)||r,s=await this.fetchWithoutToken(n,i,o);if(!s)throw new Error("google translate NETWORK_ERROR");if(!s.data[0]||s.data[0].length<=0)throw new Error("google translate API_SERVER_ERROR");return{text:s.data[0].map(c=>c[0]).filter(Boolean).join(""),from:tu.langMapReverse.get(s.data[2])||"auto",to:r}}async translateXml(u){let{text:n,from:a,to:r}=u;if(!n)return{...u};let i=tu.langMap.get(a)||"auto",o=tu.langMap.get(r)||r,s=await this.fetchXmlWithoutToken(n,i,o);if(!s)throw new Error("google translate NETWORK_ERROR");if(!s.data[0]||s.data[0].length<=0)throw new Error("google translate API_SERVER_ERROR");return{text:s.data[0].map(c=>c[0]).filter(Boolean).join(""),from:tu.langMapReverse.get(s.data[2])||"auto",to:r}}async fetchXmlWithoutToken(u,n,a){let i="https://translate.googleapis.com/translate_a/t?"+new URLSearchParams({client:"gtx",dt:"t",sl:n,tl:a,q:u}).toString();return{data:await H({retry:2,url:i})}}async fetchWithoutToken(u,n,a){let r=new URLSearchParams({client:"gtx",dt:"t",sl:n,tl:a,q:u}),i=this.apiUrl+"?"+r.toString();return{data:await H({retry:2,url:i})}}},jt=tu;jt.langMap=new Map(k4),jt.langMapReverse=new Map(k4.map(([u,n])=>[n,u]));function Ef(e,t){return t?e+(t-e%t):e}function bf(e,t){return e.split(t).length-1}function Yo(e){let t=Date.now(),u=1;for(let n of e)u+=bf(n,"i");return Ef(t,u)}function yf(e,t){return Math.floor(Math.random()*(t-e+1))+e}function Xo(){return yf(1e6,1e8)}var Qo="https://www2.deepl.com/jsonrpc",Zo="auto",A4=[{code:"BG",language:"Bulgarian"},{code:"ZH",language:"Chinese"},{code:"CS",language:"Czech"},{code:"DA",language:"Danish"},{code:"NL",language:"Dutch"},{code:"EN",language:"English"},{code:"ET",language:"Estonian"},{code:"FI",language:"Finnish"},{code:"FR",language:"French"},{code:"DE",language:"German"},{code:"EL",language:"Greek"},{code:"HU",language:"Hungarian"},{code:"IT",language:"Italian"},{code:"JA",language:"Japanese"},{code:"LV",language:"Latvian"},{code:"LT",language:"Lithuanian"},{code:"PL",language:"Polish"},{code:"PT",language:"Portuguese"},{code:"RO",language:"Romanian"},{code:"RU",language:"Russian"},{code:"SK",language:"Slovak"},{code:"SL",language:"Slovenian"},{code:"ES",language:"Spanish"},{code:"SV",language:"Swedish"}];function xf(e=A4){return e.reduce((t,u)=>(t[u.code.toLowerCase()]=u.code,t[u.language.toLowerCase()]=u.code,t),{})}function ei(e){return xf()[e.toLowerCase()]}var Tf={Accept:"*/*","Accept-Language":"en-US;q=0.8,en;q=0.7","Content-Type":"application/json",Origin:"https://www.deepl.com",Referer:"https://www.deepl.com/translator","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-site"};function wf(e){return JSON.stringify(e).replace('"method":"',()=>{let t=e;return(t.id+3)%13===0||(t.id+5)%29===0?'"method" : "':'"method": "'})}function Cf(e,t){return{id:1,jsonrpc:"2.0",method:"LMT_handle_texts",params:{timestamp:0,texts:[{text:"",requestAlternatives:3}],splitting:"newlines",lang:{source_lang_user_selected:e,target_lang:t}}}}async function vf(e,t,u,n,a,r,i){let o=Xo(),s=Cf(n,u),l=[];t.forEach(m=>{l.push({text:m,requestAlternatives:3})}),s.id=o,s.params.texts=l,s.params.timestamp=Yo(t);let c=await H({retry:2,method:"POST",url:e,body:wf(s),headers:Tf}),d={from:c.result.lang,to:u,text:[]};return c.result.texts.forEach(m=>{d.text.push(m.text)}),d}async function D4(e,t,u,n=Zo,a,r,i){return t?t&&t.length===1&&t[0]===""?{text:[""],from:n,to:u}:vf(e,t,ei(u),ei(n)??"auto",a,r,i):{text:[],from:n,to:u}}var S4=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],qu=class extends X{constructor(u,n,a){super(u,n,a);this.maxTextGroupLength=3;this.maxTextLength=800;this.isSupportList=!0;this.API_URL=Qo;u&&u.apiUrl&&(this.API_URL=Et(Qo,u.apiUrl))}getDefaultRateLimit(){return{limit:1,interval:1050}}async translateList(u){let{text:n,to:a,from:r}=u,i=await D4(this.API_URL,n,qu.langMap.get(a)||a,qu.langMap.get(r)||"auto");return{text:i.text,from:qu.langMapReverse.get(i.from),to:qu.langMapReverse.get(i.to)}}},uu=qu;uu.langMap=new Map(S4),uu.langMapReverse=new Map(S4.map(([u,n])=>[n,u]));var F4=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","ja"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],ti="https://transmart.qq.com/api/imt",xu=class extends X{constructor(u,n,a){super(u,n,a);this.maxTextGroupLength=25;this.maxTextLength=1e3;this.isSupportList=!1;this.clientKey=btoa("transmart_crx_"+navigator.userAgent).slice(0,100)}async translate(u){let{text:n,to:a}=u,r=await this.detectLanguage(n),i=xu.langMap.get(r)||r,o=xu.langMap.get(a)||a;if(r===a)return{text:n,from:r,to:a};let s=JSON.stringify({header:{fn:"auto_translation_block",client_key:this.clientKey},source:{text_block:n,lang:i,orig_url:u.url},target:{lang:o}}),l=await H({url:ti,body:s,method:"POST",retry:2});if(l.header.ret_code!=="succ")throw new Error(l.message||l.header.ret_code);return{text:l.auto_translation,from:r||"auto",to:a}}getDefaultRateLimit(){return{limit:30,interval:1050}}async translateList(u){let{from:n,text:a,to:r}=u;if(a.length===1){let d=await this.translate({from:n,text:a[0],to:r,url:u.url,options:u.options});return{text:[d.text],from:d.from,to:d.to}}let i=await this.detectLanguage(a.join(`
`));if(i===r)return{text:a,from:i,to:r};let o=xu.langMap.get(i)||i,s=xu.langMap.get(r)||r,l=JSON.stringify({header:{fn:"auto_translation",client_key:this.clientKey},source:{text_list:a,lang:o,orig_url:u.url},target:{lang:s},type:"plain"}),c=await H({url:ti,body:l,method:"POST"});if(c.header.ret_code!=="succ")throw new Error(c.message||c.header.ret_code);return{text:c.auto_translation,from:i||"auto",to:r}}detectLanguageLocally(u){return this.detectLanguageRemotely(u)}async detectLanguageRemotely(u){let n={header:{fn:"text_analysis",client_key:this.clientKey},text:u.slice(0,280)},a=await H({url:ti,method:"POST",body:JSON.stringify(n)});if(a.header.ret_code!=="succ")throw new Error(a.message||a.header.ret_code);let r=a.language,i=xu.langMapReverse.get(r);return i||r}},Tu=xu;Tu.langMap=new Map(F4),Tu.langMapReverse=new Map(F4.map(([u,n])=>[n,u]));function P4(){return Math.random()>=0}var Ku=class extends X{constructor(){super(...arguments);this.isSupportList=!0;this.maxTextLength=1200;this.maxTextGroupLength=25}async translate(u){let{text:n}=u,a=n.match(/^\s*/)[0].length;return{text:n.slice(0,a)+"\u6A21\u62DF\uFF1A"+n.slice(a,-6),from:u.from,to:u.to}}async translateList(u){let{text:n,from:a,to:r}=u;if(await Zl(),!P4())throw new Error("\u6A21\u62DF\u9519\u8BEF");return n.length===0?{from:a,to:r,text:[""]}:{from:a,to:r,text:n.map(i=>{let o=i.match(/^\s*/)[0].length;return i.slice(0,o)+"\u6A21\u62DF\uFF1A"+i.slice(o,-6)})}}};var _4=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh"],["en","en"],["ja","ja"],["de","de"],["fr","fr"],["it","it"],["es","es"],["nl","nl"],["pl","pl"],["pt","pt"],["ru","ru"]],B4=new Map(_4),L4=new Map(_4.map(([e,t])=>[t,e])),ui=class extends X{constructor(u,n,a){super(u,n,a);this.apikey="";this.codename=ui.DEFAULT_CODENAME;this.isSupportList=!1;this.maxTextGroupLength=1;if(!u||!u.apikey)throw new Error("apikey are required");this.apikey=u.apikey?.trim(),u.codename&&(this.codename=u.codename)}async translate(u){let{text:n,from:a,to:r}=u,i=await H({retry:2,url:`https://api.openl.club/services/${this.codename}/translate`,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({apikey:this.apikey,text:n,source_lang:B4.get(a)||"auto",target_lang:B4.get(r)||r})});if(i.status){let o=i;return o.result&&r=="zh-TW",{text:o.result,from:L4.get(o.source_lang),to:L4.get(o.target_lang)}}else throw new Error(i.msg)}},nr=ui;nr.DEFAULT_CODENAME="deepl";var ar=nr;var rr=new Map;async function ni(e){let t=e.url;if(e.method&&(t+=e.method),e.body&&(t+=Yt(e.body)),rr.has(t))return rr.get(t);let u=H(e);rr.set(t,u);try{return await u}catch(n){throw n}finally{setTimeout(()=>{rr.delete(t)},3e4)}}async function M4(e){return ni(e)}async function Mn(e){if(ze()){let u=Ya();if(u)try{return await u.ask("throttleRequest",e)}catch(n){throw A.error("can not comunicate with root frame, use strict limiter",n),n}else return ni(e)}else return ni(e)}var lt=null,O4=[["auto",""],["zh-CN","ZH"],["zh-TW","ZH"],["en","EN"],["de","DE"],["fr","FR"],["it","IT"],["ja","JA"],["es","ES"],["nl","NL"],["pl","PL"],["pt","PT"],["ru","RU"]],R4=new Map(O4),kf=new Map(O4.map(([e,t])=>[t,e])),ai=class extends X{constructor(u,n,a){super(u,n,a);this.authKey="";this.maxTextLength=1800;this.freeApiUrl="https://api-free.deepl.com/v2/translate";this.proApiUrl="https://api.deepl.com/v2/translate";this.immersiveTranslateApiUrl="https://deepl.immersivetranslate.com/v2/translate";this.immersiveTranslateDeeplTokenUrl="https://api.immersivetranslate.com";this.apiKeys=[];if(!u||!u.authKey)throw new Error("authKey are required");u&&u.freeApiUrl&&(this.freeApiUrl=Et(this.freeApiUrl,u.freeApiUrl)),u&&u.proApiUrl&&(this.proApiUrl=Et(this.proApiUrl,u.proApiUrl)),u&&u.immersiveTranslateApiUrl&&(this.immersiveTranslateApiUrl=Et(this.immersiveTranslateApiUrl,u.immersiveTranslateApiUrl)),u&&u.immersiveTranslateDeeplTokenUrl&&(this.immersiveTranslateDeeplTokenUrl=Et(this.immersiveTranslateDeeplTokenUrl,u.immersiveTranslateDeeplTokenUrl)),this.authKey=u.authKey?.trim(),this.apiKeys=this.authKey.split(",").map(r=>r.trim())}static async clearState(){lt=null,await q.storage.local.remove(Rt)}getRandomKey(){let u=Math.floor(Math.random()*this.apiKeys.length);return this.apiKeys[u]}async init(){if(!lt){lt={};let n=await q.storage.local.get(Rt);n&&n[Rt]&&(lt=n[Rt])}let u=this.getRandomKey();if(u.startsWith("immersive_")){let n=new ra(u,{state:lt,onFetch:(a,r)=>{let o=new URL(a).pathname;return o==="/refresh_token"||o==="/oidc/token"?Mn({url:a,...r}):H({url:a,...r})},refreshTokenEndpoint:this.immersiveTranslateDeeplTokenUrl,onStateChange:a=>{lt=a,q.storage.local.set({[Rt]:lt})}});await n.updateToken(),lt=n.getState(),n.getIsStateChanged()&&await q.storage.local.set({[Rt]:lt})}}getDefaultRateLimit(){return{limit:3,interval:1050}}async translateList(u){let{from:n,to:a,text:r}=u,i={source_lang:R4.get(n)||"",target_lang:R4.get(a)||a},o=this.getRandomKey(),s=new URLSearchParams(i);r.forEach(f=>{s.append("text",f)});let l=s.toString(),c=this.freeApiUrl;o.endsWith(":im")?c=this.immersiveTranslateApiUrl:o.endsWith(":fx")||(c=this.proApiUrl);let d;if(o.startsWith("immersive_")){let f=new ra(o,{state:lt,onFetch:(x,y)=>{let F=new URL(x).pathname;return F==="/refresh_token"||F==="/oidc/token"?Mn({url:x,...y}):H({url:x,...y})},refreshTokenEndpoint:this.immersiveTranslateDeeplTokenUrl,onStateChange:x=>{lt=x,q.storage.local.set({[Rt]:lt})}});d=await f.translateApi(l),f.getIsStateChanged()&&(lt=f.getState(),await q.storage.local.set({[Rt]:lt}))}else d=await H({retry:2,url:c,method:"POST",body:l,headers:{Authorization:"DeepL-Auth-Key "+o,"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},extra:{overrideMimeType:"application/json; charset=utf-8"}});let{translations:m}=d,g=m.map(f=>f.text);if(a==="zh-TW"){let f=this.serviceConfig||{};f&&f.googleApiUrl&&(f.apiUrl=f.googleApiUrl);let y=await new jt(this.serviceConfig,this.generalConfig,this.translationOptions).translate({from:"zh-CN",to:"zh-TW",text:m.map(p=>p.text).join(`
`),url:"",options:{}});y&&y.text&&(g=y.text.split(`
`))}return{text:g,from:m[0]&&kf.get(m[0].detected_source_language)||n,to:a}}},I4=ai;var Af=[["auto","auto"],["zh-CN","zh"],["zh-TW","cht"],["en","en"],["ja","ja"],["ru","ru"],["es","es"],["de","de"],["ko","ko"],["fr","fr"]],N4=new Map(Af),ri=class extends X{constructor(u,n,a){super(u,n,a);this.APIKEY="";this.isSupportList=!1;if(!u||!u.APIKEY)throw new Error("APIKEY are required");this.APIKEY=u.APIKEY?.trim()}async translate(u){let{text:n,from:a,to:r}=u,o={url:"https://api.niutrans.com/NiuTransServer/translation",retry:2,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({src_text:n,from:N4.get(a)||a,to:N4.get(r)||r,apikey:this.APIKEY})},s=await H(o);if(s.tgt_text){let l=s.tgt_text;return l.endsWith(`
`)&&(l=l.slice(0,-1)),{text:l,from:a,to:r}}else throw new Error(JSON.stringify(s))}},j4=ri;var Df=[["auto",""],["ar","ar"],["ga","ga"],["et","et"],["bg","bg"],["is","is"],["pl","pl"],["bs","bs-Latn"],["fa","fa"],["da","da"],["de","de"],["ru","ru"],["fr","fr"],["zh-TW","zh-Hant"],["fil","fil"],["fj","fj"],["fi","fi"],["gu","gu"],["kk","kk"],["ht","ht"],["ko","ko"],["nl","nl"],["ca","ca"],["zh-CN","zh-Hans"],["cs","cs"],["kn","kn"],["otq","otq"],["tlh","tlh"],["hr","hr"],["lv","lv"],["lt","lt"],["ro","ro"],["mg","mg"],["mt","mt"],["mr","mr"],["ml","ml"],["ms","ms"],["mi","mi"],["bn","bn-BD"],["hmn","mww"],["af","af"],["pa","pa"],["pt","pt"],["ps","ps"],["ja","ja"],["sv","sv"],["sm","sm"],["sr-Latn","sr-Latn"],["sr-Cyrl","sr-Cyrl"],["no","nb"],["sk","sk"],["sl","sl"],["sw","sw"],["ty","ty"],["te","te"],["ta","ta"],["th","th"],["to","to"],["tr","tr"],["cy","cy"],["ur","ur"],["uk","uk"],["es","es"],["he","iw"],["el","el"],["hu","hu"],["it","it"],["hi","hi"],["id","id"],["en","en"],["yua","yua"]],z4=new Map(Df),oi=class extends X{constructor(u,n,a){super(u,n,a);this.APIKEY="";this.region="eastasia";this.isSupportList=!0;if(!u||!u.APIKEY)throw new Error("APIKEY are required");this.APIKEY=u.APIKEY?.trim(),u.region&&(this.region=u.region)}async translateList(u){let{text:n,from:a,to:r}=u;if(n.length===0)return{from:a,to:r,text:[]};let i={"api-version":"3.0",to:z4.get(r)||r};a!=="auto"&&(i.from=z4.get(a)||a);let o=new URLSearchParams(i),s=JSON.stringify(n.map(d=>({text:d}))),l={url:"https://api.cognitive.microsofttranslator.com/translate?"+o.toString(),retry:2,method:"POST",headers:{"Ocp-Apim-Subscription-Key":this.APIKEY,"Ocp-Apim-Subscription-Region":this.region,"content-type":"application/json"},body:s},c=await H(l);if(c.length===0)throw new Error("server response invalid");return{from:a,to:r,text:c.map(d=>d.translations.map(g=>g.text).join(" "))}}},H4=oi;var Sf=[["auto","auto"],["zh-CN","zh-CN"],["zh-TW","zh-TW"],["en","en"],["ja","ja"],["ru","ru"],["es","es"],["de","de"],["ko","ko"],["fr","fr"],["th","th"],["vi","vi"],["id","id"]],Rn=new Map(Sf),ii=class extends X{constructor(u,n,a){super(u,n,a);this.isSupportList=!0;this.maxTextGroupLength=25;this.maxTextLength=1200}getDefaultRateLimit(){return{limit:3,interval:1050}}async translateList(u){let{text:n,from:a,to:r}=u,i;if(n.length===0)return{from:a,to:r,text:[]};let o=`
<br>
`,s=n.join(o),l={url:"https://api.papago-chrome.com/v2/translate/openapi",retry:2,method:"POST",headers:{authority:"api.papago-chrome.com","content-type":"application/json"},body:""};a==="auto"||!Rn.get(a)?(i=(await H({url:"https://api.papago-chrome.com/v2/translate/detect",method:"POST",headers:{authority:"api.papago-chrome.com","content-type":"application/json"},body:s})).langCode,l.body=JSON.stringify({text:s,source:i||Rn.get(a)||a,target:Rn.get(r)||r})):l.body=JSON.stringify({text:s,source:Rn.get(a),target:Rn.get(r)||r});let c=await H(l);if(c.translatedText==="")throw new Error("server response invalid");let d=c.translatedText.split("<br>").map(m=>m.trim());return{from:a,to:r,text:d}}},U4=ii;var Ff=[["auto","auto"],["zh-CN","Simplified Chinese"],["zh-TW","Traditional Chinese"],["en","English"],["yue","Cantonese"],["wyw","Classical Chinese"],["ja","Japanese"],["ko","Korean"],["fr","French"],["de","German"],["es","Spanish"],["it","Italian"],["ru","Russian"],["pt","Portuguese"],["nl","Dutch"],["pl","Polish"],["ar","Arabic"],["af","Afrikaans"],["am","Amharic"],["az","Azerbaijani"],["be","Belarusian"],["bg","Bulgarian"],["bn","Bengali"],["bs","Bosnian"],["ca","Catalan"],["ceb","Cebuano"],["co","Corsican"],["cs","Czech"],["cy","Welsh"],["da","Danish"],["el","Greek"],["eo","Esperanto"],["et","Estonian"],["eu","Basque"],["fa","Persian"],["fi","Finnish"],["fj","Fijian"],["fy","Western Frisian"],["ga","Irish"],["gd","Scottish Gaelic"],["gl","Galician"],["gu","Gujarati"],["ha","Hausa"],["haw","Hawaiian"],["he","Hebrew"],["hi","Hindi"],["hmn","Hmong"],["hr","Croatian"],["ht","Haitian Creole"],["hu","Hungarian"],["hy","Armenian"],["id","Indonesian"],["ig","Igbo"],["is","Icelandic"],["jw","Javanese"],["ka","Georgian"],["kk","Kazakh"],["km","Khmer"],["kn","Kannada"],["ku","Kurdish"],["ky","Kyrgyz"],["la","Lao"],["lb","Luxembourgish"],["lo","Lao"],["lt","Lithuanian"],["lv","Latvian"],["mg","Malagasy"],["mi","Maori"],["mk","Macedonian"],["ml","Malayalam"],["mn","Mongolian"],["mr","Marathi"],["ms","Malay"],["mt","Maltese"],["my","Burmese"],["pa","Punjabi"],["ps","Pashto"],["ro","Romanian"],["si","Sinhala"],["sk","Slovak"],["sl","Slovene"],["sm","Samoan"],["sn","Shona"],["so","Somali"],["sq","Albanian"],["sr","Serbian"],["sr-Cyrl","Serbian (Cyrillic)"],["sr-Latn","Serbian (Latin)"],["st","Southern Sotho"],["su","Sundanese"],["sv","Swedish"],["sw","Swahili"],["ta","Tamil"],["te","Telugu"],["tg","Tajik"],["th","Thai"],["tr","Turkish"],["ug","Uyghur"],["uk","Ukrainian"],["ur","Urdu"],["uz","Uzbek"],["vi","Vietnamese"],["xh","Xhosa"],["yi","Yiddish"],["yo","Yoruba"],["zu","Zulu"]],or=new Map(Ff),si=class extends X{constructor(u,n,a){super(u,n,a);this.APIKEY="";this.apiKeys=[];this.isSupportList=!1;this.maxTextLength=1200;this.maxTextGroupLength=1;this.systemPrompt="You are a professional translation engine, please translate the text into a colloquial, professional, elegant and fluent content, without the style of machine translation. You must only translate the text content, never interpret it.";this.prompt="Translate the text below to {{to}}:\n\n```\n{{text}}\n```";this.model="gpt-3.5-turbo";this.apiUrl="https://api.openai.com/v1/chat/completions";this.immersiveApiUrl="https://openai-api.immersivetranslate.com/v1/chat/completions";u||(u={}),u.APIKEY&&(this.APIKEY=u.APIKEY?.trim(),this.apiKeys=this.APIKEY.split(",").map(r=>r.trim())),u.prompt&&(this.prompt=u.prompt),u.model&&(this.model=u.model),u&&u.apiUrl&&(this.apiUrl=Et(this.apiUrl,u.apiUrl)),u&&u.immersiveApiUrl&&(this.immersiveApiUrl=Et(this.immersiveApiUrl,u.immersiveApiUrl)),u&&u.systemPrompt&&(this.systemPrompt=u.systemPrompt)}getDefaultRateLimit(){return{limit:5,interval:1300}}translate(u){return this.model.includes("003")?(this.maxTextGroupLength=1,this.translate3(u)):this.translate3_5(u)}getRandomKey(){let u=Math.floor(Math.random()*this.apiKeys.length);return this.apiKeys[u]}async translate3_5(u){let{text:n,from:a,to:r}=u;if(n.length===0)return{from:a,to:r,text:""};let i=or.get(a)||a,o=or.get(r)||r,s=this.prompt.replace(/{{to}}/g,o).replace(/{{text}}/g,n).replace(/{{from}}/g,i),l=[];if(this.systemPrompt){let g=this.systemPrompt.replace(/{{to}}/g,o).replace(/{{text}}/g,n).replace(/{{from}}/g,i);l.push({role:"system",content:g})}this.prompt&&l.push({role:"user",content:s}),this.prompt.indexOf("{{text}}")===-1&&l.push({role:"user",content:n});let c={url:this.apiUrl,method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:this.model,temperature:0,messages:l})},d=this.getRandomKey();d&&(c.headers.Authorization="Bearer "+d,c.headers["api-key"]=d,d.startsWith("immersiveopenai_")&&(c.url=this.immersiveApiUrl));let m=await H(c);if(m&&m.choices&&m.choices.length>0&&m.choices[0].message&&m.choices[0].message.content){let g=m.choices[0].message.content.trim();return g.includes("\u65E0\u6CD5\u7FFB\u8BD1")&&(g=""),{from:a,to:r,text:g}}else throw new Error("server response invalid: "+JSON.stringify(m))}async translate3(u){let{text:n,from:a,to:r}=u;if(n.length===0)return{from:a,to:r,text:""};let i=this.prompt.replace(/{{to}}/g,or.get(r)||r).replace(/{{text}}/g,n).replace(/{{from}}/g,or.get(a)||a),o={url:"https://api.openai.com/v1/completions",method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.APIKEY},body:JSON.stringify({model:this.model,prompt:i,temperature:0})},s=await H(o);if(s&&s.choices&&s.choices.length>0&&s.choices[0].text){let l=s.choices[0].text.trim();return{from:a,to:r,text:l}}else throw new Error("server response invalid: "+JSON.stringify(s))}},W4=si;var li=re+"CacheKey_";function ir(e,t){let u=li+e;return q.storage.local.get(u).then(n=>{if(n[u]===void 0)return t;let{value:a,expired:r}=n[u];return r&&r<Date.now()?t:a})}function sr(e,t,u){let n=li+e,a=Date.now()+u;return q.storage.local.set({[n]:{value:t,expired:a}})}function lr(e){let t=li+e;return q.storage.local.remove(t)}var Pf=[["auto","auto"],["zh-CN","zh-Hans"],["zh-TW","zh-Hant"],["en","en"],["yue","\u7CA4\u8BED"],["wyw","\u53E4\u6587"],["en","en"],["ja","ja"],["ko","ko"],["fr","fr"],["de","de"],["es","es"],["it","it"],["ru","ru"],["pt","pt"],["nl","nl"],["pl","pl"],["ar","ar"],["af","af"],["am","am"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["ceb","ceb"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["el","el"],["eo","eo"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["haw","haw"],["he","he"],["hi","hi"],["hmn","hmn"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["jw","jw"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ku","ku"],["ky","ky"],["la","lo"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["no","no"],["ny","ny"],["pa","pa"],["ps","ps"],["ro","ro"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["sr-Cyrl","sr"],["sr-Latn","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tr","tr"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zu","zu"]],cr=new Map(Pf),ci="chatgptWebAccessToken";async function q4(){let e=await ir(ci);if(e)return e;let t=await H({url:"https://chat.openai.com/api/auth/session",method:"get",responseType:"json"});if(!t.accessToken)throw new Error("UNAUTHORIZED");return await sr(ci,t.accessToken,10*60*1e3),t.accessToken}var $u,dr=class{constructor(){qs(this,$u,Promise.resolve());return dr.instance||(dr.instance=this),this}enqueue(t){return Ks(this,$u,to(this,$u).then(()=>t())),to(this,$u)}},di=dr;$u=new WeakMap;var mi=new di;Object.freeze(mi);var On=class extends X{constructor(u,n,a){super(u,n,a);this.accessToken="";this.customChatGptWebApiUrl="https://chat.openai.com";this.customChatGptWebApiPath="/backend-api/conversation";this.maxTextGroupLength=1;this.maxTextLength=1200;this.isStream=!1;this.isSupportList=!1;this.prompt=`You are a translation engine, you can only translate text and cannot interpret it, and do not explain.Translate the text below to {{to}}:

{{text}}`}throttleDebounce(u,n,a){let r=0,i;return(...o)=>{let s=Date.now(),l=this,c=()=>{r=s,u.apply(l,o)};s-r>=n?(clearTimeout(i),c()):(clearTimeout(i),i=setTimeout(()=>{c()},a))}}async deleteConversation(u){if(u){let n=await H({url:`${this.customChatGptWebApiUrl}${this.customChatGptWebApiPath}/${u}`,method:"PATCH",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.accessToken}`},body:JSON.stringify({is_visible:!1})});return A.debug("delete conversation res:",n),n}}async translate(u){return await mi.enqueue(async()=>{let{text:n,from:a,to:r}=u;if(n.length===0)return Promise.resolve({from:a,to:r,text:""});let i=cr.get(a)||a,o=cr.get(r)||r;if(this.accessToken=await q4(),!this.accessToken||this.accessToken==="")throw new Error("token error");let s="text-davinci-002-render-sha-mobile";if(!s)throw new Error("No available model");let l=this.prompt.replace(/{{to}}/g,o).replace(/{{text}}/g,n).replace(/{{from}}/g,i);try{let c=await H({url:`${this.customChatGptWebApiUrl}${this.customChatGptWebApiPath}`,method:"POST",responseType:"stream",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.accessToken}`},body:JSON.stringify({action:"next",messages:[{id:mt(),role:"user",content:{content_type:"text",parts:[l]}}],model:s,parent_message_id:mt()})});return A.debug("get chatgpt res:",c),await this.deleteConversation(c?.conversation_id),Promise.resolve({from:a,to:r,text:c?.message?.content?.parts?.[0]})}catch(c){throw A.debug("post chatgpt error:",c),await lr(ci),c}})}async translateStream(u,n){let{text:a,from:r,to:i}=u;if(a.length===0){n(null,{from:r,to:i,text:""});return}let o=this.throttleDebounce(function(s){let{from:l,to:c,text:d}=s;n(null,{from:l,to:c,text:d})},300,200);await mi.enqueue(async()=>{let s="chatgpt"+mt(),l=q.runtime.connect({name:s}),c,d;l.onMessage.addListener(y=>{if(!(!y||y==="")){if(y==="[DONE]"){l.disconnect(),this.deleteConversation(c);return}try{d=JSON.parse(y)}catch(p){A.debug("chatgpt json error",p,y);return}c=d?.conversation_id,d?.message?.author?.role==="assistant"&&o({from:r,to:i,text:d?.message?.content?.parts?.[0]})}});let m=cr.get(r)||r,g=cr.get(i)||i;if(this.accessToken=await q4(),!this.accessToken||this.accessToken==="")throw new Error("token error");let f="text-davinci-002-render-sha";if(!f)throw new Error("No available model");let x=this.prompt.replace(/{{to}}/g,g).replace(/{{text}}/g,a).replace(/{{from}}/g,m);H({url:`${this.customChatGptWebApiUrl}${this.customChatGptWebApiPath}`,method:"POST",responseType:"realStream",extra:{portName:s},headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.accessToken}`},body:JSON.stringify({action:"next",messages:[{id:mt(),role:"user",content:{content_type:"text",parts:[x]}}],model:f,parent_message_id:mt()})}).catch(y=>{A.debug("chatgpt error",y),l.disconnect(),this.deleteConversation(c),n(y,{from:r,to:i,text:""})})})}};var Bf=["authorization","content-type","content-length","user-agent","presigned-expires","expect"],Pe={algorithm:"HMAC-SHA256",v4Identifier:"request",dateHeader:"X-Date",tokenHeader:"X-Security-Token",contentSha256Header:"X-Content-Sha256",notSignBody:"X-NotSignBody",kDatePrefix:"",credential:"X-Credential",algorithmKey:"X-Algorithm",signHeadersKey:"X-SignedHeaders",signQueriesKey:"X-SignedQueries",signatureKey:"X-Signature"},gi=e=>{try{return encodeURIComponent(e).replace(/[^A-Za-z0-9_.~\-%]+/g,escape).replace(/[*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)}catch{return""}},pi=e=>Object.keys(e).map(t=>{let u=e[t];if(typeof u>"u"||u===null)return;let n=gi(t);if(n)return Array.isArray(u)?`${n}=${u.map(gi).sort().join(`&${n}=`)}`:`${n}=${gi(u)}`}).filter(t=>t).join("&"),Gu=class{constructor(t,u,n){this.request=t,this.request.headers=t.headers||{},this.serviceName=u,n=n||{},this.bodySha256=n.bodySha256,this.request.params=this.sortParams(this.request.params)}sortParams(t){let u={};return t&&Object.keys(t).filter(n=>{let a=t[n];return typeof a<"u"&&a!==null}).sort().map(n=>{u[n]=t[n]}),u}async addAuthorization(t,u){let n=this.getDateTime(u);await this.addHeaders(t,n),this.request.headers.Authorization=await this.authorization(t,n)}async authorization(t,u){let n=[],a=this.credentialString(u);return n.push(`${Pe.algorithm} Credential=${t.accessKeyId}/${a}`),n.push(`SignedHeaders=${this.signedHeaders()}`),n.push(`Signature=${await this.signature(t,u)}`),n.join(", ")}async getSignUrl(t,u){let n=this.getDateTime(u),a={...this.request.params},r=this.request.params,i=this.request.headers;t.sessionToken&&(a[Pe.tokenHeader]=t.sessionToken),a[Pe.dateHeader]=n,a[Pe.notSignBody]="",a[Pe.credential]=`${t.accessKeyId}/${this.credentialString(n)}`,a[Pe.algorithmKey]=Pe.algorithm,a[Pe.signHeadersKey]="",a[Pe.signQueriesKey]=void 0,a[Pe.signatureKey]=void 0,a=this.sortParams(a),this.request.params=a,this.request.headers={};let o=await this.signature(t,n);return this.request.params=r,this.request.headers=i,a[Pe.signQueriesKey]=Object.keys(a).sort().join(";"),a[Pe.signatureKey]=o,pi(a)}getDateTime(t){return this.iso8601(t).replace(/[:\-]|\.\d{3}/g,"")}async addHeaders(t,u){if(this.request.headers[Pe.dateHeader]=u,t.sessionToken&&(this.request.headers[Pe.tokenHeader]=t.sessionToken),this.request.body){let n=this.request.body;this.request.headers[Pe.contentSha256Header]=await kt(n)}}async signature(t,u){let n=await this.getSigningKey(t,u.substr(0,8),this.request.region,this.serviceName);return er(await eu(await this.stringToSign(u),n))}async stringToSign(t){let u=[];u.push(Pe.algorithm),u.push(t),u.push(this.credentialString(t));let n=await this.canonicalString();return u.push(await this.hexEncodedHash(n)),u.join(`
`)}async canonicalString(){let t=[],u=this.request.pathname||"/";t.push(this.request.method.toUpperCase()),t.push(u);let n=pi(this.request.params)||"";return t.push(n),t.push(`${this.canonicalHeaders()}
`),t.push(this.signedHeaders()),t.push(await this.hexEncodedBodyHash()),t.join(`
`)}canonicalHeaders(){let t=[];Object.keys(this.request.headers).forEach(n=>{t.push([n,this.request.headers[n]])}),t.sort((n,a)=>n[0].toLowerCase()<a[0].toLowerCase()?-1:1);let u=[];return t.forEach(n=>{let a=n[0].toLowerCase();if(this.isSignableHeader(a)){let r=n[1];if(typeof r>"u"||r===null||typeof r.toString!="function")throw new Error(`Header ${a} contains invalid value`);u.push(`${a}:${this.canonicalHeaderValues(r.toString())}`)}}),u.join(`
`)}canonicalHeaderValues(t){return t.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")}signedHeaders(){let t=[];return Object.keys(this.request.headers).forEach(u=>{u=u.toLowerCase(),this.isSignableHeader(u)&&t.push(u)}),t.sort().join(";")}signedQueries(){return Object.keys(this.request.params).join(";")}credentialString(t){return this.createScope(t.substr(0,8),this.request.region,this.serviceName)}async hexEncodedHash(t){return await kt(t)}async hexEncodedBodyHash(){return this.request.headers[Pe.contentSha256Header]?this.request.headers[Pe.contentSha256Header]:this.request.body?await this.hexEncodedHash(pi(this.request.body)):await this.hexEncodedHash("")}isSignableHeader(t){return Bf.indexOf(t)<0}iso8601(t){return t===void 0&&(t=new Date),t.toISOString().replace(/\.\d{3}Z$/,"Z")}async getSigningKey(t,u,n,a){let r=await eu(u,`${Pe.kDatePrefix}${t.secretKey}`),i=await eu(n,r),o=await eu(a,i);return eu(Pe.v4Identifier,o)}createScope(t,u,n){return[t.substr(0,8),u,n,Pe.v4Identifier].join("/")}};var $4=[["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],K4=new Map($4),Lf=new Map($4.map(([e,t])=>[t,e])),fi=class extends X{constructor(u,n,a){super(u,n,a);this.accessKeyId="";this.secretAccessKey="";this.maxTextGroupLength=8;if(!u||!u.accessKeyId||!u.secretAccessKey)throw new Error("accessKeyId and secretAccessKey are required");this.accessKeyId=u.accessKeyId?.trim(),this.secretAccessKey=u.secretAccessKey?.trim()}async remoteDetectLanguage(u){let a={region:"cn-north-1",method:"POST",params:{Action:"LangDetect",Version:"2020-06-01"},pathname:"/",headers:{"Content-Type":"application/json",host:"open.volcengineapi.com"},body:JSON.stringify({TextList:[u]})},r=new Gu(a,"translate");await r.addAuthorization({accessKeyId:this.accessKeyId,secretKey:this.secretAccessKey});let i=new URLSearchParams(a.params),o=await H({retry:2,url:"https://open.volcengineapi.com"+a.pathname+"?"+i.toString(),headers:r.request.headers,method:a.method,body:a.body});if(o.DetectedLanguageList&&o.DetectedLanguageList.length>0)return o.DetectedLanguageList[0].Language;if(o.ResponseMetadata&&o.ResponseMetadata.Error){let s=o.ResponseMetadata.Error;throw new je(s.Code,s.Message)}else if(o.ResponseMetaData&&o.ResponseMetaData.Error){let s=o.ResponseMetaData.Error;throw new je(s.Code,s.Message)}else throw new Error("response: "+JSON.stringify(o))}async translateList(u){let{text:n,from:a,to:r}=u,i=K4.get(a),o={TargetLanguage:K4.get(r)||r,TextList:n};i?o.SourceLanguage=i:o.SourceLanguage=await this.remoteDetectLanguage(n.join(`
`).slice(0,1e3));let s={region:"cn-north-1",method:"POST",params:{Action:"TranslateText",Version:"2020-06-01"},pathname:"/",headers:{"Content-Type":"application/json",host:"open.volcengineapi.com"},body:JSON.stringify(o)},l=new Gu(s,"translate");await l.addAuthorization({accessKeyId:this.accessKeyId,secretKey:this.secretAccessKey});let c=new URLSearchParams(s.params),d=await H({retry:2,url:"https://open.volcengineapi.com"+s.pathname+"?"+c.toString(),headers:l.request.headers,method:s.method,body:s.body});if(d.TranslationList){let m=d.TranslationList.map(f=>f.Translation),g=a;return d.TranslationList.length>0&&d.TranslationList[0].DetectedSourceLanguage&&(g=Lf.get(d.TranslationList[0].DetectedSourceLanguage)||a),{text:m,from:g,to:r}}else if(d.ResponseMetadata&&d.ResponseMetadata.Error){let m=d.ResponseMetadata.Error;throw new je(m.Code,m.Message)}else if(d.ResponseMetaData&&d.ResponseMetaData.Error){let m=d.ResponseMetaData.Error;throw new je(m.Code,m.Message)}else throw new Error("response: "+JSON.stringify(d))}},G4=fi;var J4=[["auto","detect"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],V4=new Map(J4),_f=new Map(J4.map(([e,t])=>[t,e])),In=class extends X{constructor(){super(...arguments);this.maxTextGroupLength=50;this.isSupportList=!1}async translate(u){let{text:n,from:a,to:r}=u,i=V4.get(a)||"detect",o=V4.get(r)||r,l=await H({url:"https://translate.volcengine.com/crx/translate/v1/",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({source_language:i,target_language:o,text:n})});if(l.base_resp&&l.base_resp.status_code===0){let c=l.translation,d=a;return l.detected_language&&(d=_f.get(l.detected_language)||a),{text:c,from:d,to:r}}else{let c=l.base_resp;throw new je(c.status_code.toString(),c.status_message)}}};var Mf=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],Y4=new Map(Mf),Nn=class extends X{constructor(u,n,a){super(u,n,a);this.url="";this.isSupportList=!1;this.maxTextGroupLength=1;if(!u||!u.url)throw new Error("deeplx custom url are required, please check your settings.");this.url=u.url}async translate(u){let{text:n,from:a,to:r}=u,o=await H({retry:2,url:this.url,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({source_lang:Y4.get(a)||a,target_lang:Y4.get(r)||r,text:n})});if(o.code===200)return{text:o.data,from:a,to:r};throw new Error(o.message||o.message||"API Error")}};var hi="https://{s}bing.com",tc=hi+"/translator",Rf=hi+"/ttranslatev3",Of=hi+"/tspellcheckv3",mr="bingGlobalConfig",uc=[["auto","auto-detect"],["ar","ar"],["ga","ga"],["et","et"],["bg","bg"],["is","is"],["pl","pl"],["bs","bs-Latn"],["fa","fa"],["da","da"],["de","de"],["ru","ru"],["fr","fr"],["zh-TW","zh-Hant"],["fil","fil"],["fj","fj"],["fi","fi"],["gu","gu"],["kk","kk"],["ht","ht"],["ko","ko"],["nl","nl"],["ca","ca"],["zh-CN","zh-Hans"],["cs","cs"],["kn","kn"],["otq","otq"],["tlh","tlh"],["hr","hr"],["lv","lv"],["lt","lt"],["ro","ro"],["mg","mg"],["mt","mt"],["mr","mr"],["ml","ml"],["ms","ms"],["mi","mi"],["bn","bn-BD"],["hmn","mww"],["af","af"],["pa","pa"],["pt","pt"],["ps","ps"],["ja","ja"],["sv","sv"],["sm","sm"],["sr-Latn","sr-Latn"],["sr-Cyrl","sr-Cyrl"],["no","nb"],["sk","sk"],["sl","sl"],["sw","sw"],["ty","ty"],["te","te"],["ta","ta"],["th","th"],["to","to"],["tr","tr"],["cy","cy"],["ur","ur"],["uk","uk"],["es","es"],["he","iw"],["el","el"],["hu","hu"],["it","it"],["hi","hi"],["id","id"],["en","en"],["yua","yua"],["yue","yua"],["vi","vi"],["ku","ku"],["km","kmr"]],X4=new Map(uc),Q4=new Map(uc.map(([e,t])=>[t,e])),Z4=1e3,Dt,Vu;function Ei(e,t){return e.replace("{s}",t?t+".":"")}async function If(){if(!Dt){let u=await q.storage.local.get(mr);return u&&(Dt=u[mr]),!0}let{tokenTs:e,tokenExpiryInterval:t}=Dt;return Date.now()-e>t}async function ec(){let e,t,u,n,a,r,i,o,s,l;try{let c=Ei(tc,e),d=await H({retry:2,url:c,responseType:"raw"}),{body:m,headers:g,url:f}=d;e=f.match(/^https?:\/\/(\w+)\.bing\.com/)[1],l=g["set-cookie"],t=m.match(/IG:"([^"]+)"/)[1],u=m.match(/data-iid="([^"]+)"/)[1],[a,n,r,i,o,s]=JSON.parse(m.match(/params_AbusePreventionHelper\s?=\s?([^\]]+\])/)[1])}catch(c){throw c}return Dt={subdomain:e,IG:t,IID:u,key:a,token:n,tokenTs:a,tokenExpiryInterval:r,isVertical:i,frontDoorBotClassification:o,isSignedInOrCorporateUser:s,cookie:l,count:0},await q.storage.local.set({[mr]:Dt}),Dt}function Nf(e){let{IG:t,IID:u,subdomain:n,isVertical:a}=Dt;return Ei(e?Of:Rf,n)+"?isVertical=1"+(t&&t.length?"&IG="+t:"")+(u&&u.length?"&IID="+u+"."+Dt.count++:"")}function jf(e,t,u,n){let{token:a,key:r}=Dt,i={fromLang:u,text:t,token:a,key:r};return!e&&n&&(i.to=n),i}async function nc(e,t,u){if(!e||!(e=e.trim()))return;if(e.length>Z4)throw new Error(`The supported maximum length of text is ${Z4}. Please shorten the text.`);Vu||(Vu=ec()),await Vu,await If()&&(Vu=ec(),await Vu),t=t||"auto",u=u||"zh-CN",t=X4.get(t)||t,u=X4.get(u)||u;let a=Nf(!1),r=jf(!1,e,t,u==="auto-detect"?"zh-Hans":u),i={referer:Ei(tc,Dt.subdomain),"content-type":"application/x-www-form-urlencoded"},o=new URLSearchParams(r),s=a,l=o.toString(),c=await H({retry:2,url:s,headers:i,method:"POST",body:l});if(c.ShowCaptcha||c.StatusCode===401||c.statusCode){if(Dt=null,Vu=null,await q.storage.local.remove(mr),c.ShowCaptcha)throw new Error(`
      Sorry that bing translator seems to be asking for the captcha,
      Please take care not to request too frequently.
      The response code is ${c.StatusCode}.
    `);if(c.StatusCode===401)throw new Error(`
      Max count of translation exceeded. Please try it again later.
      The response code is 401.
    `);if(c.statusCode)throw new Error(`Something went wrong! The response is ${JSON.stringify(c)}.`)}let d=c[0].translations[0],m=c[0].detectedLanguage;return{text:d.text,from:Q4.get(m.language),to:Q4.get(d.to)}}function ac(e){let t=e.split(".");if(t.length<=1)throw new Error("invlaid token");let u=t[1];if(!u)throw new Error("invalid base64 url token");let n=u.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(globalThis.atob(n).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join("")),r=JSON.parse(a),i=new Date(r.exp*1e3);return{accessToken:e,accessTokenExpiresAt:i.toISOString()}}var wu=null,zf=[["auto",""],["ar","ar"],["ga","ga"],["et","et"],["bg","bg"],["is","is"],["pl","pl"],["bs","bs-Latn"],["fa","fa"],["da","da"],["de","de"],["ru","ru"],["fr","fr"],["zh-TW","zh-Hant"],["fil","fil"],["fj","fj"],["fi","fi"],["gu","gu"],["kk","kk"],["ht","ht"],["ko","ko"],["nl","nl"],["ca","ca"],["zh-CN","zh-Hans"],["cs","cs"],["kn","kn"],["otq","otq"],["tlh","tlh"],["hr","hr"],["lv","lv"],["lt","lt"],["ro","ro"],["mg","mg"],["mt","mt"],["mr","mr"],["ml","ml"],["ms","ms"],["mi","mi"],["bn","bn-BD"],["hmn","mww"],["af","af"],["pa","pa"],["pt","pt"],["ps","ps"],["ja","ja"],["sv","sv"],["sm","sm"],["sr-Latn","sr-Latn"],["sr-Cyrl","sr-Cyrl"],["no","nb"],["sk","sk"],["sl","sl"],["sw","sw"],["ty","ty"],["te","te"],["ta","ta"],["th","th"],["to","to"],["tr","tr"],["cy","cy"],["ur","ur"],["uk","uk"],["es","es"],["he","iw"],["el","el"],["hu","hu"],["it","it"],["hi","hi"],["id","id"],["en","en"],["yua","yua"]],rc=new Map(zf),jn=class extends X{constructor(){super(...arguments);this.isSupportList=!0;this.maxTextLength=1800}static async clearState(){wu=null,await lr(ia)}async translate(u){let{text:n,from:a,to:r}=u;return n?await nc(n,a,r):{...u}}async init(){if(!wu){wu={};let u=await ir(ia);u&&(wu=u)}await oc(wu)}async translateList(u){let{from:n,to:a,text:r}=u,i=rc.get(n)||"auto",o=rc.get(a)||a;i==="auto"&&(i="");let s=await oc(wu),l=[];for(let g of r)l.push({Text:g});let c=JSON.stringify(l),d=`https://api-edge.cognitive.microsofttranslator.com/translate?from=${i}&to=${o}&api-version=3.0&includeSentenceLength=true`,m=await H({url:d,headers:{accept:"*/*","accept-language":"zh-TW,zh;q=0.9,ja;q=0.8,zh-CN;q=0.7,en-US;q=0.6,en;q=0.5",authorization:"Bearer "+s.accessToken,"cache-control":"no-cache","content-type":"application/json",pragma:"no-cache","sec-ch-ua":'"Microsoft Edge";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',"sec-ch-ua-mobile":"?0","sec-ch-ua-platform":'"Windows"',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"cross-site","Referrer-Policy":"strict-origin-when-cross-origin"},body:c,method:"POST"});if(m&&m.length>0&&m[0].translations&&m[0].translations.length>0)return{text:m.map(g=>g.translations[0]?.text||""),from:n,to:a};throw new Error("Microsoft translate error "+JSON.stringify(m))}};async function oc(e){if(e&&e.accessToken&&e.accessTokenExpiresAt){let t=Date.now(),n=new Date(e.accessTokenExpiresAt).getTime();if(n-t>30*1e3)return e;if(n-t>3e3)return ic().catch(a=>{A.error(a)}),e}return ic()}async function ic(){let e=await Mn({responseType:"text",url:"https://edge.microsoft.com/translate/auth",headers:{accept:"*/*","accept-language":"zh-TW,zh;q=0.9,ja;q=0.8,zh-CN;q=0.7,en-US;q=0.6,en;q=0.5","cache-control":"no-cache",pragma:"no-cache","sec-ch-ua":'"Microsoft Edge";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',"sec-ch-ua-mobile":"?0","sec-ch-ua-platform":'"Windows"',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"cross-site","sec-mesh-client-arch":"x86_64","sec-mesh-client-edge-channel":"beta","sec-mesh-client-edge-version":"113.0.1774.23","sec-mesh-client-os":"Windows","sec-mesh-client-os-version":"10.0.19044","sec-mesh-client-webview":"0",Referer:"https://appsumo.com/","Referrer-Policy":"strict-origin-when-cross-origin"},body:null,method:"GET"}),t=ac(e),u=t.accessTokenExpiresAt,a=new Date(u).getTime()-Date.now();return wu=t,await sr(ia,t,a-1e3),{accessToken:e,accessTokenExpiresAt:t.accessTokenExpiresAt}}var lc=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],sc=new Map(lc),Hf=new Map(lc.map(([e,t])=>[t,e])),bi=class extends X{constructor(u,n,a){super(u,n,a);this.endpoint="https://api.fanyi.baidu.com/api/trans/vip/translate";this.appid="";this.key="";this.isSupportList=!1;this.maxTextGroupLength=20;if(!u||!u.appid||!u.key)throw new Error("appid and key are required");this.appid=u.appid?.trim(),this.key=u.key?.trim()}getDefaultRateLimit(){return{limit:1,interval:1550}}async translate(u){let n=Date.now().toString(),{endpoint:a}=this,{appid:r,key:i}=this,{text:o,from:s,to:l}=u,c=new URLSearchParams({from:sc.get(s)||"auto",to:sc.get(l)||l,q:o,salt:n,appid:r,sign:Yt(r+o+n+i)}),d=new URL(a);d.search=c.toString();let m=await H({url:d.toString()});if(m.error_code)throw new je("API_SERVER_ERROR",m.error_msg);let{trans_result:g,from:f}=m,x=g.map(({dst:p})=>p);return{from:Hf.get(f)||f,to:l,text:x.join(`
`)}}},cc=bi;var Uf=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"]],yi=new Map(Uf),xi=class extends X{constructor(u,n,a){super(u,n,a);this.token="";this.apiKeys=[];if(!u||!u.token)throw new Error("token are required");this.token=u.token?.trim(),this.apiKeys=this.token.split(",").map(r=>r.trim())}getRandomKey(){let u=Math.floor(Math.random()*this.apiKeys.length);return this.apiKeys[u]}async translateList(u){let{text:n,from:a,to:r}=u;if(!yi.get(r))throw new Error(`Unsupported language: ${r}`);a==="auto"&&(a=await Ie({text:n.join(" "),minLength:10}));let o=n,s=this.getRandomKey();return{text:(await H({retry:2,url:"https://api.interpreter.caiyunai.com/v1/translator",headers:{"content-type":"application/json","x-authorization":"token "+s},method:"POST",body:JSON.stringify({source:o,trans_type:`${yi.get(a)||"auto"}2${yi.get(r)}`})})).target,from:a,to:r}}},dc=xi;var Wf=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"]],Ti=new Map(Wf),wi=class extends X{constructor(u,n,a){super(u,n,a);this.token="ssdj273ksdiwi923bsd9"}getDefaultRateLimit(){return{limit:5,interval:1050}}async translateList(u){let{text:n,from:a,to:r}=u;if(!Ti.get(r))throw new Error(`Unsupported language: ${r}`);a==="auto"&&(a=await Ie({text:n.join(" "),minLength:10}));let o=n;return{text:(await H({retry:2,url:"https://api.interpreter.caiyunai.com/v1/translator",headers:{"content-type":"application/json","x-authorization":"token "+this.token},method:"POST",body:JSON.stringify({source:o,trans_type:`${Ti.get(a)||"auto"}2${Ti.get(r)}`})})).target,from:a,to:r}}},mc=wi;var pc=[["auto","auto"],["en","en"],["ru","ru"],["pt","pt"],["es","es"],["zh-CN","zh-CHS"],["ja","ja"],["ko","ko"],["fr","fr"],["ar","ar"],["id","id"],["vi","vi"],["it","it"]],gc=new Map(pc),qf=new Map(pc.map(([e,t])=>[t,e]));function Kf(e){let t=e.length;return t<=20?e:e.substring(0,10)+t+e.substring(t-10,t)}var Ci=class extends X{constructor(u,n,a){super(u,n,a);this.isSupportList=!1;this.appId="";this.appSecret="";this.throttleLimit=5;if(!u||!u.appId||!u.appSecret)throw new Error("appId and appSecret are required");this.appId=u.appId?.trim(),this.appSecret=u.appSecret?.trim()}getDefaultRateLimit(){return{limit:5,interval:1050}}async translate(u){let{text:n,from:a,to:r}=u,i=$f(32),o=Math.round(new Date().getTime()/1e3),s=this.appId+Kf(n)+i+o+this.appSecret,l=await kt(s),c={q:n,appKey:this.appId,salt:i.toString(),from:gc.get(a)||"auto",to:gc.get(r)||r,sign:l,signType:"v3",curtime:o.toString()},d=new URLSearchParams(c),g=await H({url:"https://openapi.youdao.com/api",method:"POST",body:d.toString(),headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(!g.translation)throw new Error(JSON.stringify(g));let f=g.l,[x,y]=f.split("2");return{text:g.translation.join(`
`),from:qf.get(x),to:r}}};function $f(e){let t="",u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=u.length,a=0;for(;a<e;)t+=u.charAt(Math.floor(Math.random()*n)),a+=1;return t}var fc=Ci;var Ec=[["auto","auto"],["en","en"],["ru","ru"],["pt","pt"],["es","es"],["zh-CN","zh-CHS"],["ja","ja"],["ko","ko"],["fr","fr"],["ar","ar"],["id","id"],["vi","vi"],["it","it"]],hc=new Map(Ec),LC=new Map(Ec.map(([e,t])=>[t,e]));var vi=class extends X{constructor(u,n,a){super(u,n,a);this.isSupportList=!1;this.appId="";this.appSecret="";this.maxTextLength=800}getDefaultRateLimit(){return{limit:5,interval:1050}}async translate(u){let{text:n,from:a,to:r}=u,i={q:n,from:hc.get(a)||"auto",to:hc.get(r)||r},o=new URLSearchParams(i),s=await H({url:"https://aidemo.youdao.com/trans",method:"POST",body:o.toString(),headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8","user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"}});if(s&&s.translation)return{text:s.translation.join(`
`),from:a,to:r};throw new Error("Youdao translation failed: "+JSON.stringify(s))}},bc=vi;var Gf={mock:Ku,mock2:Ku,google:jt,transmart:Tu,deepl:I4,volc:G4,volcAlpha:In,bing:jn,tencent:bu,tenAlpha:yu,baidu:cc,caiyun:dc,cai:mc,openl:ar,youdao:fc,you:bc,d:uu,dpro:uu,deeplx:Nn,niu:j4,azure:H4,openai:W4,chatgpt:On,papago:U4},ki={};Object.keys(Ot).forEach(e=>{ki[e]={...Ot[e],class:Gf[e]}});async function yc(e,t){if(!e.text)return e;let u=await nu({sentences:[e]},t);if(u.sentences.length>0)return{...e,...u.sentences[0]};throw new je("translateFailed","translate failed")}async function Ai(e){let{config:t,translationService:u}=e,n=t.translationGeneralConfig,a=t.translationServices,r=u,i=a[r]||{},o=new ki[r].class(i,n,{translationService:r}),s=o.getDefaultRateLimit();s&&(i&&!i.limit&&(i.limit=s.limit),i&&!i.interval&&(i.interval=s.interval)),await p4(r,i),await o.init()}async function nu(e,t,u){if(!e.sentences.length)return{...e};let{config:n,translationService:a,state:r}=t,i=n.translationGeneralConfig,o=n.translationServices,s=a,l=o[s]||{};s==="openai"&&(e.sentences=e.sentences.map(p=>({...p,from:"auto"})));let c=[],d={sentences:Array(e.sentences.length)},m=e.sentences.length,g=-1;if(r.cache)for(let p of e.sentences){g++;let F=s;s==="openl"&&(F=s+"-"+l.codename||ar.DEFAULT_CODENAME);let S=null;try{S=await Zn(Xl({originalText:p.text,from:p.from,to:p.to,service:F}),1e3)}catch(C){A.warn("query cache DB error, but it's ok",C)}if(S){let C={...p,text:S.translatedText};d.sentences[g]=C,u&&u(null,C,p)}else c.push(p)}else c.push(...e.sentences);let f=c.length;if(m-f>0&&A.debug(`use ${m-f} sentences from cache`),!c.length)return d;let x;try{x=new ki[s].class(l,i,{translationService:s}),await x.init()}catch(p){if(u)for(let F of c)u(p,null,F);throw p}let y=await x.multipleTranslate({sentences:c},l,(p,F,S)=>{if(u&&u(p,F,S),!p&&F&&!s.startsWith("mock")&&r.cache){let C=s;s==="openl"&&(C=s+"-"+l.codename||ar.DEFAULT_CODENAME),r.cache&&Zn(Ql({translatedText:F.text,from:S.from,to:S.to,detectedFrom:F.from,key:Yt(S.text),service:C}),3e3).catch(B=>{A.warn("set cache DB error",B)})}});for(let p of y.sentences){let F=d.sentences.findIndex(S=>!S);if(F===-1)throw new je("translateFailed","can not match the result");d.sentences[F]=p}return d}var gr=!1,Vf=ue();function Si(e,t){let u=[];for(let n of t){let a=e.querySelectorAll(n);for(let r of a)u.push(r)}return u}function Jf(e,t){let u=function(r){return r.nodeType===Node.ELEMENT_NODE||r.nodeType===Node.TEXT_NODE?r.nodeType===Node.ELEMENT_NODE&&Pi(r,t,!0)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,u),a=!0;for(;n.nextNode();){let r=n.currentNode;if(r.nodeType===Node.ELEMENT_NODE){if(Cu(r,ga)){if(a===!0)return!0;continue}if(zn(r.nodeName,t.inlineTags))return!0;if(!Di(r,t))return!1}}return!0}function Fi(e,t){let u=t.inlineTags;if(e.nodeType===Node.ELEMENT_NODE)if(zn(e.nodeName,u)||Di(e,t)){if(Cu(e,j0)||zn(e.nodeName,["BR"]))return!1;if(Cu(e,ga))return!0;if(Di(e,t)){let n=globalThis.getComputedStyle(e);if(n.display==="block"||n.display==="flex")return!1}return Jf(e,t)}else return Cu(e,ga);return!1}function Pi(e,t,u){if(!(e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE)||e.nodeType===Node.ELEMENT_NODE&&Cu(e,N0,!0))return!0;if(e.nodeType===Node.ELEMENT_NODE&&Cu(e,xo))return!1;let{stayOriginalTags:n,excludeTags:a}=t,r=[];return u&&a&&a.length>0?r=a||[]:r=a.filter(i=>!n.includes(i)),!!(e.nodeType===Node.ELEMENT_NODE&&e.isContentEditable||e.nodeType===Node.ELEMENT_NODE&&(e.getAttribute("translate")==="no"||e.classList.contains("notranslate"))||zn(e.nodeName,r))}function Hn(e,t,u){let n=e.trim();return n.length>=t||n.split(" ").length>=u||!Yf(n)&&n.length>=u}function Yf(e){for(let t=0;t<e.length;t++)if(e.charCodeAt(t)>127)return!1;return!0}function xc(e){if(e&&e.includes("://"))try{return new URL(e),!0}catch{return!1}else if(e.includes(".")&&!e.includes(" "))try{return new URL("http://"+e),!0}catch{return!1}else return!1}function Tc(e){return e?/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e):!1}function wc(e){return!!(e&&e.startsWith("#")&&e.indexOf(" ")===-1)}function Cc(e){return!!(e&&e.startsWith("@")&&e.indexOf(" ")===-1)}function Cu(e,t,u=!1){return Bi(e,t,"1",u)}function Bi(e,t,u,n=!1){return gr&&!n?e[st]?!!(e[st]&&e[st][t]===u):!1:e.dataset[t]===u}function Ju(e){return(e.innerText||e.textContent||"").trim()}function Li(e){let t=e.querySelectorAll("iframe"),u="";for(let n=0;n<t.length;n++){let r=t[n].contentDocument;if(r&&(u+=Ju(r.body),u.length>2e3))break}return u}function pr(e){return e?typeof e=="string"?document.querySelector(e)!==null:e.some(t=>document.querySelector(t)):!1}function Be(e,t,u,n=!1){e.isContentEditable||(gr&&!n?(e.dataset[vn]||(e.dataset[vn]="1"),e[st]||(e[st]={}),e[st][t]||(e[st][t]=u)):(e.dataset[vn]||(e.dataset[vn]="1"),e.dataset[t]!==u&&(e.dataset[t]=u)))}function fr(e,t,u=!1){if(gr&&!u){if(!e[st]||!e[st][t])return;delete e[st][t]}else delete e.dataset[t]}function Yu(e,t,u=!1){return gr&&!u?!e[st]||!e[st][t]?void 0:e[st][t]:e.dataset[t]}function Di(e,t){let u=t.allBlockTags.concat(t.inlineTags).concat(t.excludeTags);return!zn(e.nodeName,u)}function hr(e){let{config:t}=e,u=pa;return t.translationServices[e.translationService]&&t.translationServices[e.translationService].placeholderDelimiters&&(u=t.translationServices[e.translationService].placeholderDelimiters),u}function Le(){if(!globalThis||!globalThis.location)return"https://example.com";if(!ze())return globalThis.location.href;try{let t=globalThis.location.href,u=new URL(t);if(u.protocol==="about:"||u.protocol==="blob:"){if(globalThis.location.ancestorOrigins&&globalThis.location.ancestorOrigins.length>0)return globalThis.location.ancestorOrigins[0];let n="";try{n=globalThis.parent.location.href}catch{}return n||(globalThis.location!=globalThis.parent.location?document.referrer:document.location.href)}else return t}catch{}return globalThis.location.href}function Xu(e,t,u){if(e instanceof ShadowRoot){try{e.appendChild(document.createElement("style")).textContent=t}catch(n){A.warn("injectCSS failed, rootDocument"+n?.message,e)}return}if(e&&e.head&&e.head.appendChild){let n=e.createElement("style");if(u){let a=e.querySelector(`style[data-id="${u}"]`);a&&a.remove(),n.dataset.id=u}n.textContent=t,e.head.appendChild(n)}else A.warn("injectCSS failed, rootDocument does not have head node",e)}function Qu(e){let t=e.getAttribute("src");if(t){if(Vf){if(t.startsWith("blob:"))return!0}else if(t.startsWith("blob:")&&!t.startsWith("blob:http"))return!0;return!1}try{if(e.contentDocument&&e.contentDocument.body)return!0}catch{}return!1}function zn(e,t){if(!e||!t)return!1;Array.isArray(t)||(t=[t]),e=e.toUpperCase();for(let u of t)if(e===u)return!0;return!1}function vc(e){let t=e.replace("#",""),u=parseInt(t.substring(0,2),16),n=parseInt(t.substring(2,4),16),a=parseInt(t.substring(4,6),16);return{r:u,g:n,b:a}}function kc(e,t,u,n){if(n.document.caretPositionFromPoint){let a=n.document.caretPositionFromPoint(e,t);if(a){let r=n.document.createRange(),i=a.offsetNode;if(!i||i.nodeType!==Node.TEXT_NODE||Pi(i,u,!0))return null;try{r.setStart(i,a.offset),r.setEnd(i,a.offset)}catch(o){return A.warn("getRangeFromPoint error",o),null}return r}return null}else return n.document.caretRangeFromPoint?n.document.caretRangeFromPoint(e,t):null}function Ac(e,t,u){let n=0,a=(r,i,o,s)=>{if(++n>100||s===r)return r;let l=r.shadowRoot;if(!l||typeof l.elementFromPoint!="function")return r;let c=l.elementFromPoint(i,o);return c?a(c,i,o,r):r};return a(e,t,u)}var Xf=["block","grid","flex","table","table-row","table-cell","list-item","-webkit-box","box","contents"];function Er(e,t){if(t.length===0)return!1;let u=t.join(",");return e.matches&&e.matches(u)||!1}function _i(e,t,u){let{blockSelectors:n,extraBlockSelectors:a,extraInlineSelectors:r}=t;if(Er(e,r))return!1;if(Er(e,a)||e.nodeName.toLowerCase()==="br")return!0;let s=null;return e.parentNode&&e.parentNode.immersiveTranslateComputedStyle&&(s=e.parentNode.immersiveTranslateComputedStyle),s&&s.display&&s.display==="inline-flex"?!1:u&&u.display?!!Xf.includes(u.display):Er(e,n)}var gt=Er;function vu(e){return!!e.shadowRoot}function au(e){if(!e||typeof e!="string"&&(e=e.textContent,!e))return"";let t="";return e!==e.trimStart()&&(t+=" "),t+=e.trim(),t===" "||e!==e.trimEnd()&&(t+=" "),t}function Un(e){if(!e)return["",""];if(typeof e!="string"&&(e=e.textContent,!e))return["",""];let t=[];return e!==e.trimStart()?t.push(" "):t.push(""),!e.trim()&&t.length===1?[" ",""]:(e!==e.trimEnd()?t.push(" "):t.push(""),t)}function br(e){let t=pa;return e&&(t=e),t}async function Zu(e,t="",u=100){let n="auto";return t?await Ie({text:t,minLength:u}):(e.state.isDetectParagraphLanguage||(n=Iu()),n)}function yr(e,t){return Xt(t,e.targetLanguage)}function Qf(e){let{rule:t}=e,u=e.config.loadingTheme;return`&#160;<${t.targetWrapperTag} class="${Ee}-loading-${u} notranslate"></${t.targetWrapperTag}>`}function Wn(e,t){let u=e.rule,n=document.createElement(u.targetWrapperTag);n.classList.add("notranslate",ht),n.setAttribute("translate","no"),n.setAttribute("lang",e.targetLanguage),Be(n,O0,t.toString());let a=Qf(e);return n.innerHTML=a,n}function en(e,t){return e.querySelector(`[${ko}='${t}']`)}function Dc(){document.querySelectorAll(`[${ko}]`).forEach(t=>{t.remove()})}function Sc(){document.querySelectorAll(`.${ht}-error`).forEach(t=>{t.remove()})}function Fc(){let e=document.querySelectorAll("iframe"),t=[];return e.forEach(u=>{Qu(u)&&t.push(u)}),t}function Pc(e){let{noTranslateRegexp:t,minTextCount:u,minWordCount:n,delimiters:a,text:r}=e,i=new RegExp(`${a[0]}(\\d+)${a[1]}`,"gi"),o=r.trim();return o=o.replace(i,""),o=o.trim(),o===""||o.length===1&&o.charCodeAt(0)===8203||/^[0-9.,\/#!$%\^&\*;:{}=\-_`~()\s]+$/.test(r)||o.includes("</style>")||o.includes("< styles>")||Cc(o)||xc(o)||wc(o)||Tc(o)||i.test(o)||t&&t.length>0&&new RegExp(t.join("|"),"gi").test(o)?!1:Hn(r,u,n)}function tn(e){return e.nodeType===Node.ELEMENT_NODE}function Bc(e,t){return e.paragraphs?e.paragraphs[0].ctxId!==t?(e.paragraphs=[],!1):!0:!1}var Zf=1e5;function un(e){let{onParagraph:t,filterRule:u,id:n}=e;u=eh(u);let{stayOriginalSelectors:a,globalStyles:r,selectors:i,isTransformPreTagNewLine:o,lineBreakMaxTextCount:s,globalAttributes:l}=u,c={commonAncestorContainer:e.container,rootNodes:[],flatNodes:[],_currentStacks:[],isPreWhitespace:!1},d=!1,m=null;function g(S){let{container:C,onFrame:B,onIgnoreElement:b,id:v}=S,E=document.createTreeWalker(C,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,T=>{let _=I(T);return _==NodeFilter.FILTER_ACCEPT?pt.mark(w,v):_==NodeFilter.FILTER_REJECT,_}),w=C;if(I(w)===NodeFilter.FILTER_REJECT)return;for(pt.mark(w,v);w;){if(i&&i.length>0){let{currentNode:T,isMatchedSelection:_}=f(E,w,i);if(T)w=T;else break;if(!_)continue}if(w.nodeType===Node.ELEMENT_NODE||w.nodeType===Node.DOCUMENT_FRAGMENT_NODE){let T=w;if(T.nodeName==="IFRAME"){B&&B(T);break}T.nodeType===Node.ELEMENT_NODE&&(r&&uh(T,r),l&&ih(T,l));let _=_i(T,{blockSelectors:u.blockSelectors,extraInlineSelectors:u.extraInlineSelectors,extraBlockSelectors:u.extraBlockSelectors},T.immersiveTranslateComputedStyle||null);if(gt(T,a)&&!_){y(T);let M=null;for(;!(M=E.nextSibling())&&E.parentNode(););w=M;continue}let L=vu(T);(!Lc(c,T)||_)&&(x(),T.childNodes.length>0&&p(c,T,T.immersiveTranslateComputedStyle||null)),L&&T.shadowRoot?.mode==="open"&&(_?B?.(T.shadowRoot):g({...S,container:T.shadowRoot})),T.nodeType===Node.ELEMENT_NODE&&T.nodeName==="PRE"&&o&&rh(T)}else if(w.nodeType===Node.TEXT_NODE)y(w);else throw new Error("should not be here");w=E.nextNode(),c.commonAncestorContainer&&w&&w.parentNode===c.commonAncestorContainer&&(c._currentStacks=[]),c.commonAncestorContainer&&w&&w.nodeType===Node.ELEMENT_NODE&&c._currentStacks.push(w)}function I(T){if(T.nodeType===Node.DOCUMENT_FRAGMENT_NODE)return NodeFilter.FILTER_ACCEPT;if(tn(T)){if(l){let z=Object.keys(l);if(z.length>0&&gt(T,z))for(let de of z){let we=l[de];if(T.matches(de)){let Me=l[de],j=Object.keys(Me);for(let J of j){let be=Me[J];T.getAttribute(J)!==be&&(be===null?T.removeAttribute(J):T.setAttribute(J,be))}break}}}if(!S.force&&pt.isMarked(T,v)||Bc(T,v)||Oi(T,{excludeSelectors:u.excludeSelectors,selectors:u.selectors,stayOriginalSelectors:a})||T.nodeName==="IFRAME"&&!Qu(T))return NodeFilter.FILTER_REJECT;if(T.nodeType===Node.ELEMENT_NODE){let z=window.getComputedStyle(T);if(T.immersiveTranslateComputedStyle={display:z.display,whiteSpace:z.whiteSpace},Ri(T.immersiveTranslateComputedStyle))return b&&b(T),NodeFilter.FILTER_REJECT;let M=_i(T,{blockSelectors:u.blockSelectors,extraInlineSelectors:u.extraInlineSelectors,extraBlockSelectors:u.extraBlockSelectors},T.immersiveTranslateComputedStyle||null);if(gt(T,a)&&M)return NodeFilter.FILTER_REJECT}let{width:_,height:L}=T.getBoundingClientRect();return T.nodeName==="IMG"&&(_>48||L>48?T.immersiveTranslateComputedStyle={display:"block"}:_>0&&L>0&&(T.setAttribute("width",_),T.setAttribute("height",L))),!T.childNodes||T.childNodes&&T.childNodes.length===0?NodeFilter.FILTER_ACCEPT:!c.isPreWhitespace&&(_>0&&_<4||L>0&&L<4)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}else if(T.nodeType===Node.TEXT_NODE){let _=T.textContent?.trim();if(!_)return c.isPreWhitespace?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;let L=T.parentNode;if(L.getBoundingClientRect){let{width:z,height:M}=L.getBoundingClientRect();if(z>0&&z<4||M>0&&M<4)return NodeFilter.FILTER_REJECT}return s>0&&_.length>=s&&Mi(T,s),NodeFilter.FILTER_ACCEPT}return NodeFilter.FILTER_REJECT}}g(e),c&&c.commonAncestorContainer&&c.flatNodes.length>0&&x();function f(S,C,B){let b=C.immersiveTranslateComputedStyle||null;if(m){if(!m.contains(C))if(d=!1,C&&C.nodeType===Node.ELEMENT_NODE)if(xr(C,B))d=!0,m=C,x(),p(c,m,b);else return d=!1,C=S.nextNode(),{currentNode:C,isMatchedSelection:d};else return d=!1,C=S.nextNode(),{currentNode:C,isMatchedSelection:d}}else if(C&&C.nodeType===Node.ELEMENT_NODE)if(xr(C,B))d=!0,m=C,x(),p(c,m,b);else return d=!1,C=S.nextNode(),{currentNode:C,isMatchedSelection:d};else return d=!1,C=S.nextNode(),{currentNode:C,isMatchedSelection:d};return{currentNode:C,isMatchedSelection:!0}}function x(){let S=ah(c,n);S&&t&&t(S),_c(c)}function y(S){if(!Lc(c,S)){x(),_c(c);let C=S.parentNode;C&&p(c,C,C.computedStyle)}c.flatNodes.push(S)}function p(S,C,B){S.commonAncestorContainer=C;let b=F(B);S.isPreWhitespace=b}function F(S){return S&&S.whiteSpace&&S.whiteSpace.startsWith("pre")||S&&S.whiteSpace==="break-spaces"||!1}}function Lc(e,t){let u=!1;(t.nodeType===Node.ELEMENT_NODE||t.nodeType===Node.DOCUMENT_FRAGMENT_NODE)&&(u=vu(t));let n=nh(e),a=!0;return!u&&!n&&(e.commonAncestorContainer&&e.commonAncestorContainer.contains(t)?a=!0:e.commonAncestorContainer&&(a=!1,e._currentStacks=[])),a}function eh(e){let{isTransformPreTagNewLine:t}=e;return e.excludeSelectors=e.excludeSelectors.filter(u=>{let n=u!=="iframe";return t?n&&u!=="pre":n}),e}function th(e,t,u){if(t){for(let n of t.childNodes)if(n.contains(u))return n}return e._currentStacks.length>0?(e.commonAncestorContainer||(e.commonAncestorContainer=e._currentStacks[0]),e._currentStacks[0]):null}function uh(e,t){if(t){let u=Object.keys(t);if(u.length>0&&gt(e,u))for(let a of u){let r=t[a];if(e.matches(a)){e.style.cssText=r;break}}}}function nh(e){return e&&e._currentStacks?e._currentStacks.some(t=>vu(t)):!1}function ah(e,t){let{flatNodes:u,commonAncestorContainer:n}=e;if(n&&u.length>0){if(!u.map(m=>m.textContent?.trim()||"").join(""))return null;if(u.length===1)return{ctxId:t,stepState:1,commonAncestorContainer:u[0].parentNode,rootNodes:[u[0]],flatNodes:u,isPreWhitespace:e.isPreWhitespace,variables:{}};let r=oh(u,n);r||(r=n);let i=[];for(let m of u){let g=th(e,r,m);g&&(i.includes(g)||i.push(g))}if(i.length<1)return null;let o=i[0],s=i[i.length-1],l=[],c=o,d=0;for(;c&&(l.push(c),c!==s);){if(d++,d>Zf){A.warn("loop too many times for convert root nodes, break");break}c=c.nextSibling}return{ctxId:t,rootNodes:l,stepState:1,flatNodes:u,commonAncestorContainer:r,variables:{},isPreWhitespace:e.isPreWhitespace}}else return null}function _c(e,t=!1){e.rootNodes=[],e.flatNodes=[],e._currentStacks=[],t&&(e.commonAncestorContainer=null)}function Ri(e){let t=e.top?parseInt(e.top):0,u=e.left?parseInt(e.left):0,n=e.right?parseInt(e.right):0,a=e.bottom?parseInt(e.bottom):0;return isNaN(t)&&(t=0),isNaN(u)&&(u=0),isNaN(n)&&(n=0),isNaN(a)&&(a=0),e.display==="none"||t<-1e3||u<-1e3||n<-1e3||a<-1e3}var pt={_marked_key:"immersive_translate_walked",isMarked(e,t){return Bi(e,this._marked_key,t)},clearMark(e){if(!(!e||e.nodeType!==Node.ELEMENT_NODE)&&!(e instanceof HTMLIFrameElement||vu(e)))return fr(e,this._marked_key)},mark(e,t){if(!(!e||e.nodeType!==Node.ELEMENT_NODE)&&!(e instanceof HTMLIFrameElement||vu(e)))return Be(e,this._marked_key,t)},markWalk(e,t){if(!e||e.nodeType!==Node.ELEMENT_NODE||this.isSkipMarkEle(e))return;let u=Yu(e,"markWalk")||"";return Be(e,"markWalk",u+","+t)},isSkipMarkEle(e){return e?!!(e instanceof HTMLIFrameElement||vu(e)):!1}};function rh(e){let u=e.innerHTML.replace(/\n\n/g,"<br />");e.innerHTML=u}function oh(e,t){if(!e.length)return null;let u=e.map(n=>{let a=new Set;for(;(n=n.parentNode)&&(a.add(n),n!==t););return a});for(let n of u[0])if((n.nodeType===Node.ELEMENT_NODE||n.nodeType===Node.DOCUMENT_FRAGMENT_NODE)&&u.every(a=>a.has(n)))return n;return null}function Mi(e,t){let u=e.textContent||"";if(u.trim().length<=t)return;let r=[". ","? ","! ","\u3002","\uFF1F","\uFF01"].reduce((i,o)=>{let s=u.lastIndexOf(o,t);return s>i?s:i},-1);if(r>1){let i=u[r-1]||"",o=u[r-2]||"",s=u[r+1]||"";i==="."||s==="."||s===")"||o==="."&&i==="S"||o.toUpperCase()==="M"&&(i.toUpperCase()==="R"||i.toUpperCase()==="S")?r=-1:isNaN(Number(i))||(r=-1)}if(r===-1)u.length>t+20&&Mi(e,t+20);else{let i=u.slice(r+1);r++,i.startsWith(" ")&&r++;let o=e.splitText(r),s=document.createElement("br");o.parentNode?.insertBefore(s,o),r+1<u.length&&Mi(o,t)}}function Mc(e,t){let u=Object.keys(t);if(u.length>0)for(let n of u){let a=t[n],r=Object.keys(a),i=Si(e,[n]);for(let o of i)for(let s of r){let l=a[s];o.getAttribute(s)!==l&&(l===null?o.removeAttribute(s):o.setAttribute(s,l))}}}function Rc(e,t){let u=Object.keys(t);if(u.length>0)for(let n of u){let a=t[n],r=Object.keys(a),i=e.querySelector(n);if(i)for(let o of r){let s=a[o];i.getAttribute(o)!==s&&(s===null?i.removeAttribute(o):i.setAttribute(o,s))}}}function ih(e,t){if(t){let u=Object.keys(t);if(u.length>0&&gt(e,u))for(let a of u){let r=t[a];if(e.matches(a)){let i=t[a],o=Object.keys(i);for(let s of o){let l=i[s];e.getAttribute(s)!==l&&(l===null?e.removeAttribute(s):e.setAttribute(s,l))}break}}}}function Oi(e,t){return gt(e,t.excludeSelectors||[])?gt(e,t.selectors||[])?!1:!gt(e,t.stayOriginalSelectors||[]):!1}function xr(e,t){if(t.length===0)return!1;let u=t.filter(n=>!n.endsWith("*")).map(n=>n+" *");return gt(e,t.concat(u))}var Oc=["*://*/*","*","*://*"],Nc="immersive-translate-wildcard-placeholder.com";function Ii(e,t){let u=[];if(!t||(t&&!Array.isArray(t)?u=[t]:u=t,u.length===0))return null;if(u.some(i=>Oc.includes(i)))return e;let n=new URL(e);n.hash="",n.search="";let a=n.href,r=n.hostname;if(u&&u.length>0){let i=u.find(o=>{let s=o;if(o===r)return!0;if(Oc.includes(o))return!0;if(!o.includes("*")&&o.includes("://")){try{let l=new URL(o);return l.pathname==="/"&&!o.endsWith("/")?l.hostname===r:lh(a,o)}catch{}return!1}else{let l,c=o;if(o.includes("://")){let y=o.split("://");l=y[0],l==="*"&&y.length>1&&(l="*",o="https://"+y[1])}else l="*",o="https://"+o;let d=o.replace(/\*/g,Nc),m;try{m=new URL(d)}catch{return A.debug("invalid match pattern",d,"raw match value:",c),!1}let g=m.hostname,f=m.pathname;f==="/"&&(c.replace("://","").includes("/")||(f="/*"));let x=sh(l+":",Ic(g),Ic(f));if(x){let y=new URL(a);return y.port="",x.test(y.href)}else return!1}});if(i)return i}return null}function Ic(e){return e.replaceAll(Nc,"*")}function sh(e,t,u){let n="^";return e==="*:"?n+="(http:|https:|file:)":n+=e,n+="//",t&&(e==="file:"||(t==="*"?n+="[^/]+?":(t.match(/^\*\./)&&(n+="[^/]*?",t=t.substring(2)),n+=t.replace(/\./g,"\\.").replace(/\*/g,"[^/]*")))),u?u==="*"||u==="/*"?n+="(/.*)?":u.includes("*")?(n+=u.replace(/\*/g,".*?"),n+="/?"):n+=u.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):n+="/?",n+="$",new RegExp(n)}function ru(e,t){return Ii(e,t)!==null}function lh(e,t){let u=new URL(e),n=new URL(t);return u.hostname===n.hostname&&u.pathname===n.pathname&&u.protocol===n.protocol&&u.port===n.port}async function yt(e){let{url:t,config:u,state:n}=e,a=new URL(t),r="auto",{translationParagraphLanguagePattern:i,translationService:o,translationServices:s,translationTheme:l,translationThemePatterns:c,translationUrlPattern:d,targetLanguage:m,sourceLanguageUrlPattern:g,immediateTranslationPattern:f}=u,x=nn(t,i),y=nn(t,f),p=o,F=Object.keys(s);for(let O of F){let le=s[O];if(nn(t,le)){p=O;break}}let S=l,C=Object.keys(c);for(let O of C){let le=c[O];if(le&&nn(t,le)){S=O;break}}let B=nn(t,d),b=ch(t,d);b||(b=ru(t,$0)),b||(b=ru(t,u.blockUrls));let v=Object.keys(g),E={};for(let O of v){let le=g[O];if(le&&le.matches)for(let ae of le.matches)E[ae]=O}let w=Object.keys(E),I=Ii(t,w);I&&(r=E[I]??"auto",E[I]&&E[I]!=="auto"&&bt(E[I]));let T=m||"zh-CN",_=a.hostname,L=await kt(_),z=a.pathname+a.search+a.hash,M=await kt(z),de=`https://${L}.com/${M}`,we=await Fn(),Me=await kl(),j=u.translationStartMode;j==="dynamic"&&y&&(j="immediate");let J={targetLanguage:T,config:u,translationService:p,isTranslateUrl:B,sourceLanguage:r,mainFrame:document.body,isTranslateExcludeUrl:b,rule:u.generalRule,url:t,encryptedUrl:de,state:n?Object.assign({translationMode:u.translationMode,translationArea:u.translationArea,translationStartMode:j,immediateTranslationTextCount:u.immediateTranslationTextCount,isAutoTranslate:!1,translationDebounce:300,isNeedClean:!1,isDetectParagraphLanguage:x,cache:u.cache,translationTheme:S},n):{translationMode:u.translationMode,translationArea:u.translationArea,translationStartMode:j,immediateTranslationTextCount:u.immediateTranslationTextCount,isAutoTranslate:!1,translationDebounce:300,isNeedClean:!1,isDetectParagraphLanguage:x,cache:u.cache,translationTheme:S},localConfig:we};J.state.translationArea==="body"&&(J.config.generalRule.excludeTags=J.config.generalRule.excludeTags.filter(O=>!J.config.generalRule.bodyTranslateTags.includes(O)),J.config.generalRule.additionalExcludeSelectors=J.config.generalRule.additionalExcludeSelectors.filter(O=>O!==".btn"));let be=u.translationServices[J.translationService]||{};be.immediateTranslationTextCount!==void 0&&dh(be.immediateTranslationTextCount)&&be.immediateTranslationTextCount>=0&&(J.state.immediateTranslationTextCount=be.immediateTranslationTextCount),J.translationService==="deepl"&&be&&be.authKey&&be.authKey.startsWith("immersive_")&&be.immediateTranslationTextCountForImmersiveDeepl!==void 0&&be.immediateTranslationTextCountForImmersiveDeepl>=0&&(J.state.immediateTranslationTextCount=be.immediateTranslationTextCountForImmersiveDeepl),be&&be.translationDebounce&&typeof be.translationDebounce=="number"&&(J.state.translationDebounce=be.translationDebounce);let D=Me.immediateTranslationTextCount;u.immediateTranslationTextCount!==D&&(J.state.immediateTranslationTextCount=u.immediateTranslationTextCount);let G=u.rules,W;globalThis.PDFViewerApplication?W=G.find(O=>O.isPdf):globalThis.immersiveTranslateEbookViewer?W=G.find(O=>O.isEbook):globalThis.immersiveTranslateEbookBuilder?W=G.find(O=>O.isEbookBuilder):W=G.find(O=>nn(t,O)),J.rule.isPdf&&(J.state.translationArea="main"),J.state.translationArea==="body"&&(J.rule.paragraphMinTextCount=1,J.rule.paragraphMinWordCount=1),W&&W.isEbookBuilder&&(J.state.translationStartMode="immediate");let se=u.generalRule;if(W&&(J.rule=Da(se,W)),J.rule.selectors.length>0&&(J.rule.paragraphMinTextCount=2,J.rule.paragraphMinWordCount=1),J.state.translationArea==="body"&&J.rule.excludeTags&&(J.rule.excludeTags=J.rule.excludeTags.filter(O=>!J.rule.bodyTranslateTags.includes(O)&&!J.rule.forceTranslateTags.includes(O))),J.rule.mainFrameSelector){let O=document.querySelector(J.rule.mainFrameSelector);O&&(J.mainFrame=O)}return J}function nn(e,t){if(!t)return!1;let{matches:u,excludeMatches:n,selectorMatches:a,excludeSelectorMatches:r}=t;return n&&n.length>0&&ru(e,n)?!1:u&&u.length>0&&ru(e,u)?!0:r&&r.length>0&&pr(r)?!1:!!(a&&a.length>0&&pr(a))}function ch(e,t){if(!t)return!1;let{excludeMatches:u,excludeSelectorMatches:n}=t;return!!(u&&u.length>0&&ru(e,u)||n&&n.length>0&&pr(n))}function dh(e){return typeof e=="number"}function jc(e,t,u,n){let a=t,r=K0[a]||[],i="";e&&r&&r.length>0&&r.forEach(l=>{let{name:c}=l;if(e&&u&&u[c]){let d=u[c];if(["borderRadius"].includes(c)&&(d+="px"),i+=`--immersive-translate-theme-${a}-${c}: ${d};
`,t==="marker"&&c==="backgroundColor"&&typeof d=="string"){let{r:m,g,b:f}=vc(d);i+=`--immersive-translate-theme-${a}-${c}-rgb: ${m}, ${g}, ${f};
`}}});let o="";if(u&&u.textColor){let l=u.textColor;o+=`
.immersive-translate-target-translation-theme-${a}-inner{color: ${l};}
`}if(u&&u.zoom){let l=u.zoom;o+=`
.immersive-translate-target-translation-theme-${a}-inner{font-size: max(13px, ${l}%);}
`}let s="";i&&(s=`:root {
${i}}
`),o&&(s+=o),s?Xu(e,s,"immersive-translate-user-custom-style"):n&&Xu(e,"","immersive-translate-user-custom-style")}function an(e,t){let n=Nt().IMMERSIVE_TRANSLATE_INJECTED_CSS;Xu(e,n,"immersive-translate-default-injected-css");let a=t.config.translationThemePatterns||{},r=t.state.translationTheme,i=a[r]||{};jc(e,r,i);let o="";(t.rule.injectedCss||t.rule.additionalInjectedCss)&&(t.rule.injectedCss&&t.rule.injectedCss.length>0&&(o+=t.rule.injectedCss.join(`
`)),t.rule.additionalInjectedCss&&t.rule.additionalInjectedCss.length>0&&(o+=`
`+t.rule.additionalInjectedCss.join(`
`))),o&&Xu(e,o,"immersive-translate-dynamic-injected-css")}async function zc(){let e="auto";return document.body&&document.body.textContent&&document.body.textContent.trim()&&(e=await Ie({text:Ju(document.body)})),e==="auto"&&document.documentElement&&document.documentElement.lang&&(e=fu(document.documentElement.lang)),e}function mh(e,t,u=[],n,a){let r=["notranslate"];return n&&r.push(q0),e&&(r.push(`${Ee}-target-translation-theme-${e}`),t?r.push(`${Do}-theme-${e}`):r.push(`${Ao}-theme-${e}`)),u.length>0&&r.push(...u),t?r.push(Do):(r.push(Ao),a&&r.push(W0)),r}function gh(e){let t=["notranslate",H0];return e&&t.push(`${Ee}-target-translation-theme-${e}-inner`),t}function Hc(e,t,u){let{rule:n,state:a}=u,{translationTheme:r}=a,{variables:i,isVertical:o}=e;i=i||[];let{text:s}=t,{wrapperPrefix:l,wrapperSuffix:c}=n,d=hr(u),m="afterend",g=d[0].replace(/\//g,"\\/");g=g.replace(/"/g,'\\"');let f=d[1].replace(/\//g,"\\/");f=f.replace(/"/g,'\\"');let x=`${g}(\\d+)${f}`,y=new RegExp(x,"g"),p=s;i.length>0&&(p=p.replace(y,B=>{let b=p.indexOf(B),v=p[b-1]===" ",E=p[b+B.length]===" ",w=B.slice(d[0].length,-d[1].length),I=Number(w);if(isNaN(I))return B;let T=i[Number(I)];if(T&&T.type==="element"){let _=T.value.outerHTML;return v||(_=" "+_),E||(_=_+" "),_}else A.error("variable type not supported",T,B);return B}));let F=mh(r,e.inline,n.translationClasses||[],e.preWhitespace,u.rule.isPdf);o&&F.push(U0);let S=gh(r),C="";return n.translationBlockStyle&&(C=`style="${n.translationBlockStyle}"`),p=`<${u.rule.targetWrapperTag} ${C} class="${F.join(" ")}"><${n.targetWrapperTag} class="${S.join(" ")}">${p}</${n.targetWrapperTag}></${n.targetWrapperTag}>`,e.inline||(l==="smart"?p=`<br />${p}`:p=`${l}${p}`,c==="smart"?p=`${p}`:p=`${p}${c}`),e.inline&&(p=`<${n.targetWrapperTag} class="notranslate">&#160;</${n.targetWrapperTag}>${p}`),{html:p,position:m}}function Tr(e,t){let u=null,{stayOriginalSelectors:n,delimiters:a,isPreWhitespace:r}=t,i="",o={};for(let s=0;s<e.length;s++){let l=e[s],c=l.parentNode,d=c?.nodeName==="PRE",m=l.textContent||"",g=c?.textContent||"";if(l.nodeType===Node.TEXT_NODE&&c&&m===g&&(l=c),r)if(l.nodeType===Node.ELEMENT_NODE)if(l&&gt(l,n)){let x=Object.keys(o).length,y=`${a[0]}${x}${a[1]}`;o[x]=l,i+=y}else i+=l.textContent||"";else{let f=l.textContent||"";d&&(f=au(Ni(l))),i+=f}else if(l.nodeType===Node.ELEMENT_NODE)if(l&&gt(l,n)){let x=Object.keys(o).length,y=`${a[0]}${x}${a[1]}`;o[x]=l;let p=i.endsWith(" ")?" ":"",F=au(l.innerText||l.textContent),S=au(l.nextSibling).startsWith(" ")?" ":"",C=Un(p+F+S),B=C[0]+y+C[1];if(p===" ")B=B.trimStart();else if(!B.startsWith(" ")){let b=Un(l.previousSibling)[1];b===""&&(b=" "),B=b+B}i+=B}else{let f=i.endsWith(" ")?" ":"",x=au(l.innerText||l.textContent);d&&(x=au(Ni(l)));let y=au(l.nextSibling).startsWith(" ")?" ":"",p=Un(f+x+y),F=p[0]+(l.innerText?.trim()||l.textContent?.trim()||"")+p[1];if(f===" ")F=F.trimStart();else{let S=Un(l.previousSibling)[1];S===""&&(l.nodeName==="A"||l.nodeName==="CODE")&&(S=" "),F=S+F}i+=F}else{let f=i.endsWith(" ")?" ":"",x="";l.textContent&&(x=au(Ni(l))),f===" "&&(x=x.trimStart()),i+=x}}return i&&(u={text:i,variables:o}),u}function Uc(e,t){let{rule:u}=t;if(!e.targetText)return"";let n=[];if(e.variables){let c=Object.keys(e.variables);for(let d=0;d<c.length;d++){let m=c[d],g=e.variables[m];n[m]={type:"element",value:g}}}let a=!1,r=e.text,i=r.split(" ").length,o=r.split(`
`).length;i<=u.blockMinWordCount&&r.length<=u.blockMinTextCount&&o<2&&(a=!0);let s={id:Number(e.id),elements:[],isVertical:!1,rootFrame:e.commonAncestorContainer,text:e.text,variables:n,inline:a,preWhitespace:e.isPreWhitespace||!1,languageByLocal:"auto",languageByClient:"auto"},l=Hc(s,{id:Number(e.id),url:"https://google.com",text:e.targetText,from:"auto",to:"auto",fromByClient:"auto"},t);return l.html}function Ni(e){return(e?.innerText||e.textContent||"").replace(/\s+/g," ")||""}function zt(e){return{globalStyles:e.rule.globalStyles,globalAttributes:e.rule.globalAttributes,selectors:e.rule.selectors,lineBreakMaxTextCount:e.rule.lineBreakMaxTextCount,isTransformPreTagNewLine:e.rule.isTransformPreTagNewLine,excludeSelectors:e.rule.excludeTags.concat(e.rule.additionalExcludeTags).map(u=>u.toLowerCase()).filter(u=>u!=="code"&&u!=="img").concat(e.rule.excludeSelectors).concat(e.rule.additionalExcludeSelectors),blockSelectors:e.rule.allBlockTags.map(u=>u.toLowerCase()).concat(e.rule.extraBlockSelectors),extraBlockSelectors:e.rule.extraBlockSelectors,extraInlineSelectors:e.rule.extraInlineSelectors.concat(e.rule.additionalInlineSelectors),stayOriginalSelectors:e.rule.stayOriginalTags.concat(e.rule.stayOriginalTags).map(u=>u.toLowerCase()).concat(e.rule.stayOriginalSelectors).concat(e.rule.additionalStayOriginalSelectors)}}function Hi(e,t){e.interruptEffectDOM||(e.walkContainer({id:e.id,container:t,filterRule:zt(e.ctx),onParagraph:Wi.bind(null,e),onFrame:u=>{zi(e,u,!0)},onIgnoreElement:u=>{e.ignoreResizeObserver?.observe(u)}}),Ru&&Be(t,"consumeContainer",e.id))}function zi(e,t,u){try{if(e.injectCssToDocument(t,e.ctx),t instanceof HTMLIFrameElement){if(!Qu(t))return;A.debug("onFrame fragment",t);let n=t.contentWindow?.document.body;n&&(on(n,e,u),e.dynamicContainerObserver?.observe(n,{childList:!0,subtree:!0}))}else A.debug("onFrame shadowRoot",t.host),on(t,e,u),e.dynamicContainerObserver?.observe(t,{childList:!0,subtree:!0})}catch{}}function on(e,t,u=!0){if(i(t,e,u))return;let n=0;try{let o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,s=>i(t,s,u)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT);for(pt.mark(o.currentNode,t.id);o.nextNode();){pt.mark(o.currentNode,t.id);let s=o.currentNode;if(r(s))for(a(s);;){if(o.nextSibling()){let l=o.currentNode;if(pt.mark(o.currentNode,t.id),r(l)){a(l);continue}else break}if(!o.parentNode())return}}}catch{}if(n==0&&e instanceof HTMLElement){a(e);return}return t.observeContainers;function a(o){pt.clearMark(o),n++,t.immediateTranslateCapacity>=0?Hi(t,o):(Ru&&Be(o,"observeContainer",t.id),t.containerVisibleObserver?.observe(o))}function r(o){let s=o.nodeName.toLowerCase();if(o.shadowRoot)return zi(t,o.shadowRoot,u),!1;if(s==="iframe")return zi(t,o,u),!1;if(["script","#document-fragment","img"].includes(s))return!1;let l=t.containerRule;if(l.selectors&&l.selectors?.length>0)return xr(o,l.selectors);if(l.pageHeight){let c=o.scrollHeight;if(c>0&&c<l.pageHeight)return!0;for(let d of o.childNodes)if(d.nodeType==Node.TEXT_NODE&&d.textContent&&d.textContent.trim().length>0)return!0}return!1}function i(o,s,l){let c=s.nodeName.toLowerCase(),d=zt(o.ctx);return c=="script"?s.childNodes.length==0||s.childNodes.length==1&&s.childNodes[0].nodeType==Node.TEXT_NODE:s.nodeType===Node.DOCUMENT_FRAGMENT_NODE?!1:s.nodeType!==Node.ELEMENT_NODE||l&&pt.isMarked(s,o.id)?!0:o.ctx.rule.isTransformPreTagNewLine&&s.nodeName==="PRE"?!1:!!Oi(s,{excludeSelectors:d.excludeSelectors,selectors:d.selectors,stayOriginalSelectors:d.stayOriginalSelectors})}}function Ui(e,t){if(!e.targetNodes)return;let u=e.state||"original",n=e.commonAncestorContainer;if(!pt.isMarked(n,e.ctxId))return;let a=n.contains(e.rootNodes[0]),r=n.contains(e.targetNodes[0]);if(a&&r)u="dual";else if(a)u="original";else if(r)u="translation";else return;if(t!=u){e.state=t;try{if(u=="dual"&&t=="translation"&&(wr(e.rootNodes),Wc(e.commonAncestorContainer)),u=="original"&&t=="translation"){let i=ji(e.rootNodes);wr(e.rootNodes),rn(i,n,e.targetNodes||[]),Wc(e.commonAncestorContainer)}if(u=="translation"&&t=="dual"){let i=e.targetNodes[0];rn(i,n,e.rootNodes||[]),qc(e.commonAncestorContainer)}if(u=="original"&&t=="dual"){let i=ji(e.rootNodes);rn(i,n,e.targetNodes||[]),qc(e.commonAncestorContainer)}if(u=="translation"&&t=="original"){let i=ji(e.targetNodes);wr(e.targetNodes),rn(i,n,e.rootNodes||[])}u=="dual"&&t=="original"&&wr(e.targetNodes)}catch(i){A.error(i)}}}function Wc(e){if(!tn(e))return;e.querySelectorAll("font[class*=immersive-translate-target-translation]").forEach(n=>{Be(n,"immersiveTranslateClassBak",n.className),n.className="notranslate immersive-translate-target-dual"});let u=e.querySelector(".immersive-translate-target-wrapper");u&&u.classList.add("immersive-translate-state-dual")}function qc(e){if(!tn(e))return;e.querySelectorAll("font[class*=immersive-translate-target-dual]").forEach(n=>{let a=Yu(n,"immersiveTranslateClassBak");fr(n,"immersiveTranslateClassBak"),n.className=a});let u=e.querySelector(".immersive-translate-target-wrapper");u&&u.classList.remove("immersive-translate-state-dual")}function ji(e){return e?e[e.length-1].nextSibling:null}function wr(e){(e||[]).forEach(t=>t.parentNode?.removeChild(t))}function rn(e,t,u){let n=e;t&&(n?u.forEach(a=>{n.parentNode?.insertBefore(a,n)}):u.forEach(a=>{t.appendChild(a)}))}var ph=Ve(Ki,300);async function Wi(e,t,u=!1){if(e.interruptEffectDOM)return;let n=t.commonAncestorContainer;if(n instanceof ShadowRoot||fh(t.rootNodes))return;Ru&&Be(n,"onParseParagraph",e.id);let{ctx:a}=e,{rule:r}=a,i=hr(a),o=Tr(t.flatNodes,{isPreWhitespace:t.isPreWhitespace||!1,delimiters:i,stayOriginalSelectors:a.rule.stayOriginalTags.concat(a.rule.stayOriginalTags).map(l=>l.toLowerCase()).concat(a.rule.stayOriginalSelectors).concat(a.rule.additionalStayOriginalSelectors)});if(!o)return;t.variables=o?.variables||{},t.text=o?.text;let s=await $i(t,{excludeLanguages:a?.config?.translationLanguagePattern?.excludeMatches||[],isDetectParagraphLanguage:a.state.isDetectParagraphLanguage,targetLanguage:a.targetLanguage,noTranslateRegexp:a.rule.noTranslateRegexp,delimiters:br(a.config.translationServices[a.translationService]?.placeholderDelimiters),minTextCount:u||a.state.translationArea==="body"?2:r.paragraphMinTextCount,minWordCount:u||a.state.translationArea==="body"?1:r.paragraphMinWordCount});if(s){if(A.debug("on paragraph",s.text,s),n.paragraphs=n.paragraphs||[],n.paragraphs.includes(s))return;n.paragraphs.push(s),e.immediateTranslateCapacity>0||u?(hh(e,t.text),qi(e,t)):(Ru&&Be(n,"observeParagraph",e.id),e.observeParagraphs.push(s),e.paragraphVisibleObserver?.observe(n))}return s}function fh(e){if(!e)return!1;let t=e[e.length-1].nextSibling;return t?tn(t)&&t.classList.contains(ht):!1}function hh(e,t){e.ctx.state.translationStartMode!=="immediate"&&(e.immediateTranslateCapacity-=t?.length||0)}function qi(e,t){if(e.interruptEffectDOM||t.stepState>=2)return;t.stepState=2;let u=e.autoIncreaseParagraphId++;t.id=u.toString(),e.paragraphEntities[u]=t,e.paragraphQueue.push(u.toString()),Ru&&Be(t.commonAncestorContainer,"consumeParagraph",e.id),ph.call(e,e.ctx)}async function Ki(e){if(this.interruptEffectDOM)return;let t=this.paragraphQueue;this.paragraphQueue=[];let u=[];for(let n=0;n<t.length;n++){let a=t[n],r=this.paragraphEntities[a];r&&u.push(r)}await Cr(u,e,this.translateState)}async function Cr(e,t,u){let n={sentences:[]};for(let a of e){let r=a.id,i=Wn(t,r),o=a.rootNodes[a.rootNodes.length-1].nextSibling;rn(o,a.commonAncestorContainer,[i]),n.sentences.push({id:parseInt(r),url:t.encryptedUrl,text:a.text,from:a.languageByLocal||"auto",fromByClient:a.languageByClient||"auto",to:t.targetLanguage})}if(n.sentences.length>0)try{await nu(n,t,(a,r,i)=>{let o=i.id,s=Eh(e,o.toString());s&&bh.call(null,a,r,i,s,t,u)})}catch(a){A.error("translateCurrentQueue error",a);return}}function Eh(e,t){return e.find(u=>u.id===t)}function bh(e,t,u,n,a,r){let i=!1,o=n;if(en(o.commonAncestorContainer,u.id)?.remove(),o&&(e||!t)){e||(A.error("translate error",u,e,t),e=new Error("no response from server"));let{rule:s}=a,l=u.id,c=document.createElement(s.targetWrapperTag);Be(c,I0,l.toString()),c.classList.add("notranslate",ht,ht+"-error"),c.setAttribute("translate","no"),c.setAttribute("lang",a.targetLanguage);let d=n.rootNodes[n.rootNodes.length-1].nextSibling;rn(d,n.commonAncestorContainer,[c]);let m=e.message.replaceAll(`
`,"");m=m.replaceAll('"',"&quot;"),o&&(o.error=new Error(m));let g=`<${s.targetWrapperTag} class="${Ee}-error notranslate"> <${s.targetWrapperTag} class="immersive-translate-tooltip" data-immersive-translate-tooltip-text="${m}"><button class="${Ee}-clickable-button notranslate" title="${m}">\u2757</button></${s.targetWrapperTag}> <button class="${Ee}-clickable-button notranslate" data-${Ee}-paragraph-id="${l}" data-${Ee}-action="retry">\u{1F504}</button></${s.targetWrapperTag}>`;c&&(c.innerHTML=g)}else if(n){o.error=void 0,n.targetText=t?.text||"";let s=Uc(n,a),l=document.createElement(a.rule.targetWrapperTag);l.classList.add("notranslate",ht),l.setAttribute("lang",a.targetLanguage),l.innerHTML=s,n.targetNodes=[l],Ui(n,r),i=!0}else A.error("paragraph not found",u.id);document.dispatchEvent(new CustomEvent(et,{detail:JSON.stringify({type:"paragraphTranslated",payload:{ok:i}})}))}async function $i(e,t){let{text:u}=e,n=await Ie({text:u||"",minLength:10}),{targetLanguage:a}=t;if(!Pc({text:u||"",delimiters:t.delimiters,minWordCount:t.minWordCount,minTextCount:t.minTextCount,noTranslateRegexp:t.noTranslateRegexp}))return null;let i=t.excludeLanguages||[],o="auto";t.isDetectParagraphLanguage||(o=Iu());let s=Pt(),l=n;l==="auto"&&(l=s),e.languageByLocal=l,e.languageByClient=o;let c=o!=="auto"?o:l;return Xt(c,a)||i.length>0&&i.some(g=>Xt(c,g))?null:e}var yh=[];function Kc(e){yh.push(e)}function $c(e){let t=document.querySelector("title"),u;return t&&(u=new MutationObserver(function(n){n.length>0&&(n[0].target.text.includes(fa)||Gi(e).catch(r=>{A.error("translateTitle error:",r.name,r.message,r.details||"")}))}),u.observe(t,{subtree:!0,characterData:!0,childList:!0})),u}var vr="";async function Gi(e){let t=document.title;if(!t||t.includes(fa))return;vr!==t&&(vr=t);let u=await Zu(e,t);if(!yr(e,u))try{let n=await yc({id:0,url:e.url,text:t,from:u,to:e.targetLanguage,fromByClient:u},e);n&&n.text&&(document.title=vr+fa+n.text)}catch(n){throw n}}function Gc(e){e.rule.isTranslateTitle&&(document.title=vr)}var R=null;function Ar(){return R||null}function Dr(e){vh(e),Th(e),Ch(e),an(document,e),tt("Translated"),wh(R),xh(R),Kc(ou)}function xh(e){e.dynamicContainerObserver?.observe(document.body,{subtree:!0,childList:!0});let t=[];e.ctx.rule.mainFrameSelector&&(t=[...document.querySelectorAll(e.ctx.rule.mainFrameSelector||"")]),t.length<=0&&(t=[document.body]),t.forEach(u=>{on(u,e)})}async function Th(e){if(!e.state.isAutoTranslate&&e.config.tempTranslateDomainMinutes>0){let t=Date.now(),n=new URL(e.url).hostname,a=e.localConfig.tempTranslationUrlMatches||[],r=a.findIndex(o=>o.match===n&&o.expiredAt>t),i=!1;r>-1||(a.push({match:n,expiredAt:t+e.config.tempTranslateDomainMinutes*60*1e3}),i=!0),i&&await Pn({...e.localConfig,tempTranslationUrlMatches:[...a]})}}function wh(e){e.ctx.rule.isTranslateTitle&&(Gi(e.ctx),e.titleDynamicObserver=$c(e.ctx))}function Ch(e){if(e.rule.normalizeBody&&document.querySelector(e.rule.normalizeBody)){let u=document.body.innerHTML;document.body.innerHTML="",document.body.innerHTML=u}}function vh(e){let t=mt();R&&(t=R.id),R=R||{},R.ctx=e,R.id=t,R.paragraphQueue=R.paragraphQueue||[],R.rule={excludeSelectors:zt(e).excludeSelectors,selectors:e.rule.selectors},R.currentUrl=window.location.href,R.containerRule={pageHeight:screen.availHeight,selectors:R.rule.selectors},R.paragraphEntities=R.paragraphEntities||{},R.autoIncreaseParagraphId=R.autoIncreaseParagraphId||1,R.interruptEffectDOM=!1,R.urlChangeDelay=e.rule.urlChangeDelay,R.immediateTranslateCapacity=e.state.immediateTranslationTextCount,R.observeContainers=R.observeContainers||[],R.observeParagraphs=R.observeParagraphs||[],R.dynamicContainerObserver=R.dynamicContainerObserver||Fh(R),R.ignoreResizeObserver=R.ignoreResizeObserver||Ph(R),R.containerVisibleObserver=R.containerVisibleObserver||Ah(R),R.paragraphVisibleObserver=R.paragraphVisibleObserver||Dh(R),R.injectCssToDocument=kr,R.walkContainer=un,R.translateState=e.state.translationMode||e.config.translationMode||"dual",R.allInlineWindows=[window],window.onerror=kh(R,e),window.immersiveTranslateSwitchTranslateState=Ji.bind(R)}function Jc(e,t){t.getRootNode()instanceof ShadowRoot?kr(t.getRootNode(),e):kr(t.ownerDocument,e),Vi(e)}function Vi(e){R||(R={},R.ctx=e,R.id=mt(),R.paragraphQueue=[],R.injectCssToDocument=kr,R.rule={excludeSelectors:zt(e).excludeSelectors,selectors:e.rule.selectors},R.currentUrl=window.location.href,R.paragraphEntities={},R.autoIncreaseParagraphId=1,R.interruptEffectDOM=!1,R.urlChangeDelay=e.rule.urlChangeDelay,R.translateState=e.config.translationMode||"dual",R.observeContainers=[],R.observeParagraphs=[],R.allInlineWindows=[window],window.switchTranslateState=Ji.bind(R))}function ou(e=!0){R&&(tt("Original"),R.interruptEffectDOM=!0,R.ignoreResizeObserver?.disconnect(),R.dynamicContainerObserver?.disconnect(),R.containerVisibleObserver?.disconnect(),R.paragraphVisibleObserver?.disconnect(),R.titleDynamicObserver?.disconnect(),Gc(R.ctx),Dc(),Sc(),e&&Ji.call(R,"original"),Object.values(R.paragraphEntities).forEach(t=>{t.commonAncestorContainer.paragraphs=null}),R=null)}function kh(e,t){e.interruptEffectDOM=!1;let u;return function(n){let a=n.message,r=!1;return a?.indexOf("Minified React error")>=0&&(r=!0),r&&(clearTimeout(u),ou(),u=setTimeout(()=>{Dr(t)},e.urlChangeDelay||2e3)),!0}}function Ah(e){return new IntersectionObserver((t,u)=>{e.interruptEffectDOM||t.forEach(n=>{n.intersectionRatio>0&&(Hi(e,n.target),u.unobserve(n.target))})})}function Dh(e){return new IntersectionObserver((t,u)=>{e.interruptEffectDOM||t.forEach(n=>{if(n.intersectionRatio>0){let a=n.target;(a.paragraphs||[]).forEach(i=>{qi(e,i)}),u.unobserve(a)}})})}var Vc;function Sh(e){if(e.urlChangeDelay<=0)return!1;let u=(window.location.href||"").split("#")[0];return e.currentUrl.split("#")[0]!=u?(clearTimeout(Vc),e.translateState=="original"?!1:(ou(e.urlChangeDelay>20),Vc=setTimeout(()=>{let a=e.ctx;Dr(a)},e.urlChangeDelay),!0)):!1}function Fh(e){return new MutationObserver(t=>{if(!Sh(e)&&!e.interruptEffectDOM)for(let u of t){if((u.addedNodes||[]).length<=0||u.target.nodeType!==Node.ELEMENT_NODE||!pt.isSkipMarkEle(u.target)&&!pt.isMarked(u.target,e.id))continue;let a=(u.target?.paragraphs||[]).reduce((r,i)=>{let o=i.rootNodes||[],s=i.targetNodes||[];return[...r,...o,...s]},[]);u.addedNodes.forEach((r,i)=>{r.nodeType===Node.ELEMENT_NODE&&(a.includes(r)||on(r,e))})}})}function Ph(e){return new ResizeObserver((t,u)=>{if(!e.interruptEffectDOM)for(let n of t){if(n.target.nodeType!==Node.ELEMENT_NODE)return;let a=n.target,r=globalThis.getComputedStyle(a);Ri(r)||(u.unobserve(n.target),on(a,e))}})}function Ji(e){this.translateState=e,Object.values(this.paragraphEntities).forEach(t=>{Ui(t,e)}),e=="original"&&document.querySelectorAll(`.${ht}`).forEach(t=>t.remove())}function kr(e,t){if(e instanceof HTMLIFrameElement){an(e.contentDocument,t);return}an(e,t)}async function Yc(e){let t=ze(),u="auto";if(ue()){let n="";e.rule.isEbook||e.rule.isEbookBuilder?n=Li(e.mainFrame):n=Ju(e.mainFrame).slice(0,1e3),u=await Ie({text:n})}else if(t)u=await Ie({text:Ju(e.mainFrame).slice(0,1e3)});else if(e.rule.isEbook||e.rule.isEbookBuilder){let n="";n=Li(e.mainFrame),u=await Ie({text:n})}else u=await Yl();return u==="auto"&&(u=await zc()),La(u),u}async function Xc(){if(!R)return;document.dispatchEvent(new CustomEvent(et,{detail:JSON.stringify({type:"retryFailedParagraphsStart",payload:{}})}));let e=R.paragraphEntities,t=Object.keys(e);for(let u of t){let n=e[u];if(n.error){R.paragraphQueue.push(u);let r=n.commonAncestorContainer.querySelector(`[${ma}='${u}']`);r&&r.remove()}}Ki.call(R,R.ctx)}function Qc(e,t){return[e,!e||e.endsWith("/")?"":"/",t,".json"].join("")}function Yi(e,t){let u=e;return t&&Object.keys(t).forEach(n=>{let a=t[n],r=Bh(n);if(typeof a=="object"||r){let i=a;r&&typeof i=="string"&&(i={tag:"a",href:i,target:"_blank"});let o=`<${n}>`,s=u.indexOf(o);if(s!==-1){let l=i.tag||"a",c=u.indexOf(`</${n}>`);if(c!==-1){let d=u.substring(s+o.length,c),m=Object.keys(i).filter(g=>g!=="tag").map(g=>`${g}="${i[g]}"`).join(" ");u=u.replace(`${o}${d}</${n}>`,`<${l} ${m}>${d}</${l}>`)}}}else{let i=new RegExp("{"+n+"}","gm");u=u.replace(i,a.toString())}}),u}function qn(e,t,u){let n=e[t];if(!n)return u;let a=u.split("."),r="";do{r+=a.shift();let i=n[r];i!==void 0&&(typeof i=="object"||!a.length)?(n=i,r=""):a.length?r+=".":n=u}while(a.length);return n}function Xi(e,t,u,n,a){if(!e.hasOwnProperty(u))return t;let r=qn(e,u,t);return r===t&&u!==n&&(r=qn(e,n,t)),Yi(r,a)}function Bh(e){if(typeof e=="number")return!0;if(e){let t=parseInt(e);return!isNaN(t)}else return!1}var Zc={"zh-CN":{"languages.en":"\u82F1\u8BED","languages.ja":"\u65E5\u8BED","languages.ko":"\u97E9\u8BED","languages.es":"\u897F\u73ED\u7259\u8BED","languages.fr":"\u6CD5\u8BED","languages.de":"\u5FB7\u8BED","languages.it":"\u610F\u5927\u5229\u8BED","languages.pt":"\u8461\u8404\u7259\u8BED","languages.ru":"\u4FC4\u8BED","languages.wyw":"\u6587\u8A00\u6587","languages.<all>":"\u5168\u90E8"},"zh-TW":{"languages.en":"\u82F1\u8A9E","languages.ja":"\u65E5\u8A9E","languages.ko":"\u97D3\u8A9E","languages.es":"\u897F\u73ED\u7259\u8A9E","languages.fr":"\u6CD5\u8A9E","languages.de":"\u5FB7\u8A9E","languages.it":"\u610F\u5927\u5229\u8A9E","languages.pt":"\u8461\u8404\u7259\u8A9E","languages.ru":"\u4FC4\u8A9E","languages.wyw":"\u6587\u8A00\u6587","languages.<all>":"\u5168\u90E8"}},Qi={...gu,"zh-CN":{...Zc["zh-CN"],...gu["zh-CN"]},"zh-TW":{...Zc["zh-TW"],...gu["zh-TW"]}},ed=Qi;function sn(e,t,u){return Xi(Qi,e,t,ha,u)}var Sr=(e,t,u)=>{let n=Xi(Qi,`languages.${e}`,t,"en");return u?So[e]||e:n!==`languages.${e}`?n:So[e]};function ln(e){ju(e,{tab:{id:1,url:"https://www.fake.com",active:!0}}).catch(n=>{A.error("send content message request failed",e,n)}),document.querySelectorAll("iframe").forEach(n=>{n.contentWindow&&n.contentWindow.postMessage({author:sa,payload:e},"*")});let u=new CustomEvent($t,{detail:e});globalThis.document.dispatchEvent(u)}function Zi(e){let t=e.shortcuts||{},n=Object.keys(t).reduce((r,i)=>(r[t[i]]=i,r),{}),a=Object.keys(n);for(let r of a){let i=r.replace(/MacCtrl/ig,"Ctrl");i&&De(i,o=>{o.preventDefault(),ln({method:n[r]})})}}var Mr,ne,rd,Lh,Kn,td,od,Br={},id=[],_h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function iu(e,t){for(var u in t)e[u]=t[u];return e}function sd(e){var t=e.parentNode;t&&t.removeChild(e)}function ld(e,t,u){var n,a,r,i={};for(r in t)r=="key"?n=t[r]:r=="ref"?a=t[r]:i[r]=t[r];if(arguments.length>2&&(i.children=arguments.length>3?Mr.call(arguments,2):u),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)i[r]===void 0&&(i[r]=e.defaultProps[r]);return Fr(e,i,n,a,null)}function Fr(e,t,u,n,a){var r={type:e,props:t,key:u,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a??++rd};return a==null&&ne.vnode!=null&&ne.vnode(r),r}function Lt(e){return e.children}function Pr(e,t){this.props=e,this.context=t}function cn(e,t){if(t==null)return e.__?cn(e.__,e.__.__k.indexOf(e)+1):null;for(var u;t<e.__k.length;t++)if((u=e.__k[t])!=null&&u.__e!=null)return u.__e;return typeof e.type=="function"?cn(e):null}function cd(e){var t,u;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((u=e.__k[t])!=null&&u.__e!=null){e.__e=e.__c.base=u.__e;break}return cd(e)}}function es(e){(!e.__d&&(e.__d=!0)&&Kn.push(e)&&!Lr.__r++||td!==ne.debounceRendering)&&((td=ne.debounceRendering)||setTimeout)(Lr)}function Lr(){for(var e;Lr.__r=Kn.length;)e=Kn.sort(function(t,u){return t.__v.__b-u.__v.__b}),Kn=[],e.some(function(t){var u,n,a,r,i,o;t.__d&&(i=(r=(u=t).__v).__e,(o=u.__P)&&(n=[],(a=iu({},r)).__v=r.__v+1,ts(o,r,a,u.__n,o.ownerSVGElement!==void 0,r.__h!=null?[i]:null,n,i??cn(r),r.__h),pd(n,r),r.__e!=i&&cd(r)))})}function dd(e,t,u,n,a,r,i,o,s,l){var c,d,m,g,f,x,y,p=n&&n.__k||id,F=p.length;for(u.__k=[],c=0;c<t.length;c++)if((g=u.__k[c]=(g=t[c])==null||typeof g=="boolean"?null:typeof g=="string"||typeof g=="number"||typeof g=="bigint"?Fr(null,g,null,null,g):Array.isArray(g)?Fr(Lt,{children:g},null,null,null):g.__b>0?Fr(g.type,g.props,g.key,g.ref?g.ref:null,g.__v):g)!=null){if(g.__=u,g.__b=u.__b+1,(m=p[c])===null||m&&g.key==m.key&&g.type===m.type)p[c]=void 0;else for(d=0;d<F;d++){if((m=p[d])&&g.key==m.key&&g.type===m.type){p[d]=void 0;break}m=null}ts(e,g,m=m||Br,a,r,i,o,s,l),f=g.__e,(d=g.ref)&&m.ref!=d&&(y||(y=[]),m.ref&&y.push(m.ref,null,g),y.push(d,g.__c||f,g)),f!=null?(x==null&&(x=f),typeof g.type=="function"&&g.__k===m.__k?g.__d=s=md(g,s,e):s=gd(e,g,m,p,f,s),typeof u.type=="function"&&(u.__d=s)):s&&m.__e==s&&s.parentNode!=e&&(s=cn(m))}for(u.__e=x,c=F;c--;)p[c]!=null&&(typeof u.type=="function"&&p[c].__e!=null&&p[c].__e==u.__d&&(u.__d=cn(n,c+1)),hd(p[c],p[c]));if(y)for(c=0;c<y.length;c++)fd(y[c],y[++c],y[++c])}function md(e,t,u){for(var n,a=e.__k,r=0;a&&r<a.length;r++)(n=a[r])&&(n.__=e,t=typeof n.type=="function"?md(n,t,u):gd(u,n,n,a,n.__e,t));return t}function gd(e,t,u,n,a,r){var i,o,s;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(u==null||a!=r||a.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(a),i=null;else{for(o=r,s=0;(o=o.nextSibling)&&s<n.length;s+=2)if(o==a)break e;e.insertBefore(a,r),i=r}return i!==void 0?i:a.nextSibling}function Mh(e,t,u,n,a){var r;for(r in u)r==="children"||r==="key"||r in t||_r(e,r,null,u[r],n);for(r in t)a&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||u[r]===t[r]||_r(e,r,t[r],u[r],n)}function ud(e,t,u){t[0]==="-"?e.setProperty(t,u):e[t]=u==null?"":typeof u!="number"||_h.test(t)?u:u+"px"}function _r(e,t,u,n,a){var r;e:if(t==="style")if(typeof u=="string")e.style.cssText=u;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)u&&t in u||ud(e.style,t,"");if(u)for(t in u)n&&u[t]===n[t]||ud(e.style,t,u[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=u,u?n||e.addEventListener(t,r?ad:nd,r):e.removeEventListener(t,r?ad:nd,r);else if(t!=="dangerouslySetInnerHTML"){if(a)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=u??"";break e}catch{}typeof u=="function"||(u!=null&&(u!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,u):e.removeAttribute(t))}}function nd(e){this.l[e.type+!1](ne.event?ne.event(e):e)}function ad(e){this.l[e.type+!0](ne.event?ne.event(e):e)}function ts(e,t,u,n,a,r,i,o,s){var l,c,d,m,g,f,x,y,p,F,S,C,B,b=t.type;if(t.constructor!==void 0)return null;u.__h!=null&&(s=u.__h,o=t.__e=u.__e,t.__h=null,r=[o]),(l=ne.__b)&&l(t);try{e:if(typeof b=="function"){if(y=t.props,p=(l=b.contextType)&&n[l.__c],F=l?p?p.props.value:l.__:n,u.__c?x=(c=t.__c=u.__c).__=c.__E:("prototype"in b&&b.prototype.render?t.__c=c=new b(y,F):(t.__c=c=new Pr(y,F),c.constructor=b,c.render=Oh),p&&p.sub(c),c.props=y,c.state||(c.state={}),c.context=F,c.__n=n,d=c.__d=!0,c.__h=[]),c.__s==null&&(c.__s=c.state),b.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=iu({},c.__s)),iu(c.__s,b.getDerivedStateFromProps(y,c.__s))),m=c.props,g=c.state,d)b.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(b.getDerivedStateFromProps==null&&y!==m&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(y,F),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(y,c.__s,F)===!1||t.__v===u.__v){c.props=y,c.state=c.__s,t.__v!==u.__v&&(c.__d=!1),c.__v=t,t.__e=u.__e,t.__k=u.__k,t.__k.forEach(function(v){v&&(v.__=t)}),c.__h.length&&i.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(y,c.__s,F),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(m,g,f)})}if(c.context=F,c.props=y,c.__v=t,c.__P=e,S=ne.__r,C=0,"prototype"in b&&b.prototype.render)c.state=c.__s,c.__d=!1,S&&S(t),l=c.render(c.props,c.state,c.context);else do c.__d=!1,S&&S(t),l=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++C<25);c.state=c.__s,c.getChildContext!=null&&(n=iu(iu({},n),c.getChildContext())),d||c.getSnapshotBeforeUpdate==null||(f=c.getSnapshotBeforeUpdate(m,g)),B=l!=null&&l.type===Lt&&l.key==null?l.props.children:l,dd(e,Array.isArray(B)?B:[B],t,u,n,a,r,i,o,s),c.base=t.__e,t.__h=null,c.__h.length&&i.push(c),x&&(c.__E=c.__=null),c.__e=!1}else r==null&&t.__v===u.__v?(t.__k=u.__k,t.__e=u.__e):t.__e=Rh(u.__e,t,u,n,a,r,i,s);(l=ne.diffed)&&l(t)}catch(v){t.__v=null,(s||r!=null)&&(t.__e=o,t.__h=!!s,r[r.indexOf(o)]=null),ne.__e(v,t,u)}}function pd(e,t){ne.__c&&ne.__c(t,e),e.some(function(u){try{e=u.__h,u.__h=[],e.some(function(n){n.call(u)})}catch(n){ne.__e(n,u.__v)}})}function Rh(e,t,u,n,a,r,i,o){var s,l,c,d=u.props,m=t.props,g=t.type,f=0;if(g==="svg"&&(a=!0),r!=null){for(;f<r.length;f++)if((s=r[f])&&"setAttribute"in s==!!g&&(g?s.localName===g:s.nodeType===3)){e=s,r[f]=null;break}}if(e==null){if(g===null)return document.createTextNode(m);e=a?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,m.is&&m),r=null,o=!1}if(g===null)d===m||o&&e.data===m||(e.data=m);else{if(r=r&&Mr.call(e.childNodes),l=(d=u.props||Br).dangerouslySetInnerHTML,c=m.dangerouslySetInnerHTML,!o){if(r!=null)for(d={},f=0;f<e.attributes.length;f++)d[e.attributes[f].name]=e.attributes[f].value;(c||l)&&(c&&(l&&c.__html==l.__html||c.__html===e.innerHTML)||(e.innerHTML=c&&c.__html||""))}if(Mh(e,m,d,a,o),c)t.__k=[];else if(f=t.props.children,dd(e,Array.isArray(f)?f:[f],t,u,n,a&&g!=="foreignObject",r,i,r?r[0]:u.__k&&cn(u,0),o),r!=null)for(f=r.length;f--;)r[f]!=null&&sd(r[f]);o||("value"in m&&(f=m.value)!==void 0&&(f!==e.value||g==="progress"&&!f||g==="option"&&f!==d.value)&&_r(e,"value",f,d.value,!1),"checked"in m&&(f=m.checked)!==void 0&&f!==e.checked&&_r(e,"checked",f,d.checked,!1))}return e}function fd(e,t,u){try{typeof e=="function"?e(t):e.current=t}catch(n){ne.__e(n,u)}}function hd(e,t,u){var n,a;if(ne.unmount&&ne.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||fd(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(r){ne.__e(r,t)}n.base=n.__P=null,e.__c=void 0}if(n=e.__k)for(a=0;a<n.length;a++)n[a]&&hd(n[a],t,typeof e.type!="function");u||e.__e==null||sd(e.__e),e.__=e.__e=e.__d=void 0}function Oh(e,t,u){return this.constructor(e,u)}function Rr(e,t,u){var n,a,r;ne.__&&ne.__(e,t),a=(n=typeof u=="function")?null:u&&u.__k||t.__k,r=[],ts(t,e=(!n&&u||t).__k=ld(Lt,null,[e]),a||Br,Br,t.ownerSVGElement!==void 0,!n&&u?[u]:a?null:t.firstChild?Mr.call(t.childNodes):null,r,!n&&u?u:a?a.__e:t.firstChild,n),pd(r,e)}function us(e,t){var u={__c:t="__cC"+od++,__:e,Consumer:function(n,a){return n.children(a)},Provider:function(n){var a,r;return this.getChildContext||(a=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&a.some(es)},this.sub=function(i){a.push(i);var o=i.componentWillUnmount;i.componentWillUnmount=function(){a.splice(a.indexOf(i),1),o&&o.call(i)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}Mr=id.slice,ne={__e:function(e,t,u,n){for(var a,r,i;t=t.__;)if((a=t.__c)&&!a.__)try{if((r=a.constructor)&&r.getDerivedStateFromError!=null&&(a.setState(r.getDerivedStateFromError(e)),i=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,n||{}),i=a.__d),i)return a.__E=a}catch(o){e=o}throw e}},rd=0,Lh=function(e){return e!=null&&e.constructor===void 0},Pr.prototype.setState=function(e,t){var u;u=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=iu({},this.state),typeof e=="function"&&(e=e(iu({},u),this.props)),e&&iu(u,e),e!=null&&this.__v&&(t&&this.__h.push(t),es(this))},Pr.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),es(this))},Pr.prototype.render=Lt,Kn=[],Lr.__r=0,od=0;var Gn,_e,ns,Ed,$n=0,vd=[],Or=[],bd=ne.__b,yd=ne.__r,xd=ne.diffed,Td=ne.__c,wd=ne.unmount;function Nr(e,t){ne.__h&&ne.__h(_e,e,$n||t),$n=0;var u=_e.__H||(_e.__H={__:[],__h:[]});return e>=u.__.length&&u.__.push({__V:Or}),u.__[e]}function he(e){return $n=1,Ih(Dd,e)}function Ih(e,t,u){var n=Nr(Gn++,2);if(n.t=e,!n.__c&&(n.__=[u?u(t):Dd(void 0,t),function(r){var i=n.__N?n.__N[0]:n.__[0],o=n.t(i,r);i!==o&&(n.__N=[o,n.__[1]],n.__c.setState({}))}],n.__c=_e,!_e.u)){_e.u=!0;var a=_e.shouldComponentUpdate;_e.shouldComponentUpdate=function(r,i,o){if(!n.__c.__H)return!0;var s=n.__c.__H.__.filter(function(c){return c.__c});if(s.every(function(c){return!c.__N}))return!a||a.call(this,r,i,o);var l=!1;return s.forEach(function(c){if(c.__N){var d=c.__[0];c.__=c.__N,c.__N=void 0,d!==c.__[0]&&(l=!0)}}),!!l&&(!a||a.call(this,r,i,o))}}return n.__N||n.__}function nt(e,t){var u=Nr(Gn++,3);!ne.__s&&Ad(u.__H,t)&&(u.__=e,u.i=t,_e.__H.__h.push(u))}function rs(e){return $n=5,kd(function(){return{current:e}},[])}function kd(e,t){var u=Nr(Gn++,7);return Ad(u.__H,t)?(u.__V=e(),u.i=t,u.__h=e,u.__V):u.__}function ku(e,t){return $n=8,kd(function(){return e},t)}function os(e){var t=_e.context[e.__c],u=Nr(Gn++,9);return u.c=e,t?(u.__==null&&(u.__=!0,t.sub(_e)),t.props.value):e.__}function Nh(){for(var e;e=vd.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Ir),e.__H.__h.forEach(as),e.__H.__h=[]}catch(t){e.__H.__h=[],ne.__e(t,e.__v)}}ne.__b=function(e){typeof e.type!="function"||e.o||e.type===Lt?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),_e=null,bd&&bd(e)},ne.__r=function(e){yd&&yd(e),Gn=0;var t=(_e=e.__c).__H;t&&(ns===_e?(t.__h=[],_e.__h=[],t.__.forEach(function(u){u.__N&&(u.__=u.__N),u.__V=Or,u.__N=u.i=void 0})):(t.__h.forEach(Ir),t.__h.forEach(as),t.__h=[])),ns=_e},ne.diffed=function(e){xd&&xd(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(vd.push(t)!==1&&Ed===ne.requestAnimationFrame||((Ed=ne.requestAnimationFrame)||jh)(Nh)),t.__H.__.forEach(function(u){u.i&&(u.__H=u.i),u.__V!==Or&&(u.__=u.__V),u.i=void 0,u.__V=Or})),ns=_e=null},ne.__c=function(e,t){t.some(function(u){try{u.__h.forEach(Ir),u.__h=u.__h.filter(function(n){return!n.__||as(n)})}catch(n){t.some(function(a){a.__h&&(a.__h=[])}),t=[],ne.__e(n,u.__v)}}),Td&&Td(e,t)},ne.unmount=function(e){wd&&wd(e);var t,u=e.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{Ir(n)}catch(a){t=a}}),u.__H=void 0,t&&ne.__e(t,u.__v))};var Cd=typeof requestAnimationFrame=="function";function jh(e){var t,u=function(){clearTimeout(n),Cd&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(u,100);Cd&&(t=requestAnimationFrame(u))}function Ir(e){var t=_e,u=e.__c;typeof u=="function"&&(e.__c=void 0,u()),_e=t}function as(e){var t=_e;e.__c=e.__(),_e=t}function Ad(e,t){return!e||e.length!==t.length||t.some(function(u,n){return u!==e[n]})}function Dd(e,t){return typeof t=="function"?t(e):t}var dn={},zh={root:"",lang:"en",fallbackLang:"en"};function is(e,t){let u=Object.assign({},zh,e);dn=t||dn;let[n,a]=he(u.lang),[r,i]=he(dn),[o,s]=he(!1),l=d=>{if(r.hasOwnProperty(d))return;s(!1);let m=Qc(u.root||"",d);u.getUrl&&(m=u.getUrl(u.root||"",d),fetch(m).then(g=>g.json()).then(g=>{dn[d]=g,i({...dn}),s(!0)}).catch(g=>{i({...dn}),s(!0)}))};return nt(()=>{l(u.fallbackLang||"en"),l(n)},[n]),{lang:n,setLang:a,t:(d,m)=>{if(!r.hasOwnProperty(n))return d;let g=qn(r,n,d);return g===d&&n!==u.fallbackLang&&(g=qn(r,u.fallbackLang,d)),Yi(g,m)},isReady:o}}var Hh=0;function N(e,t,u,n,a){var r,i,o={};for(i in t)i=="ref"?r=t[i]:o[i]=t[i];var s={type:e,props:o,key:u,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Hh,__source:a,__self:n};if(typeof e=="function"&&(r=e.defaultProps))for(i in r)o[i]===void 0&&(o[i]=r[i]);return ne.vnode&&ne.vnode(s),s}var ls=us(null),ss={root:"assets",lang:"en",fallbackLang:"en"},Sd=e=>{let{t,setLang:u,lang:n,isReady:a}=is({root:e.root||ss.root,lang:e.lang||ss.lang,fallbackLang:e.fallbackLang||ss.fallbackLang,getUrl:e.getUrl},e.translations);return N(ls.Provider,{value:{t,setLang:u,lang:n,isReady:a},children:e.children})};function Fd(e,t,u){let n=[];u||(u={}),t!=="auto"&&!u[t]&&(u[t]={matches:[],excludeMatches:[]}),n=t!=="auto"?u[t].matches:[];let a={},r=Object.keys(u);for(let l of r){let d=u[l].matches;for(let m of d)a[m]||(a[m]=[]),a[m].push(l)}let i=a[e];if(i&&i.length>0)for(let l of i)u[l].matches.indexOf(e)>-1&&(u[l]={...u[l],matches:u[l].matches.filter(d=>d!==e)});let o=new Set(n);if(t==="auto")return{...u};o.add(e);let s=Array.from(o);return{...u,[t]:{...u[t],matches:s}}}function Pd(e,t=2e3){return u=>{let n,a=0;return r=>{++a==e&&(u(r),a=0),clearTimeout(n),n=setTimeout(()=>a=0,t)}}}function Bd(e){let t;try{t=new URL(e)}catch{return!1}let u=t.pathname;return u.endsWith(".html")||u.endsWith(".htm")?!0:!(t.protocol!=="http:"&&t.protocol!=="https:"&&t.protocol!=="file:"&&t.protocol!=="data:")}function Ld(e){let t=e.split(".");return t.length>2?(t[0]="*",t.join(".")):null}function _d(e){let t=e.indexOf("#");return t===-1?e:e.slice(0,t)}function Ht(e){let{items:t,maxWidth:u}=e;return u=u||128,N("select",{autoComplete:"off",class:"min-select",style:{maxWidth:`${u}px`},value:t.find(n=>n.selected)?.value,onChange:n=>{let a=n.target.value,r=t.find(i=>i.value===a);r&&r.onSelected(r)},children:t.map((n,a)=>N("option",{value:n.value,selected:n.selected,children:n.label},"selectlink"+a))})}var jr="DROP_DOWN_DEFAULT_VALUE";function cs(e){let{showArrow:t,onSelected:u,className:n,menus:a,maxWidth:r}=e;n=n||"",t=t??!0,r=r||60;let i=rs(null);return N("select",{ref:i,autoComplete:"off",class:`min-select ${t?"":"min-select-no-arrow"} ${n||""}`,value:jr,style:{maxWidth:`${r}px`},onChange:o=>{o.preventDefault();let s=o.target.value;if(i.current&&s!==jr){i.current.value=jr,i.current?.dispatchEvent(new Event("change"));let l=a.find(c=>c.value===s);l&&u(l)}},children:[{value:jr,label:e.label}].concat(a).map((o,s)=>N("option",{value:o.value,children:o.label},"option-"+s))})}function _t(){return os(ls)}function ds(e){let{field:t,onChange:u,value:n}=e;n=n||t.default||"";let{t:a}=_t(),r=t.name;return t.label&&(r=t.label),t.labelKey&&(r=a(t.labelKey)),t.type==="select"?N("div",{class:"flex justify-between mb-2",children:[N("label",{class:"inline-block",children:[r,"\uFF1A"]}),N(Ht,{items:t.options.map(i=>({label:`${i.label?a(i.label):i.value}`,value:i.value,selected:n===i.value,onSelected:()=>{u(i.value)}}))})]}):null}function Vn(e,t){return e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"})>=0}var Uh=({date:e})=>{let{t}=_t(),[u,n]=he(!1);return nt(()=>{setTimeout(()=>{n(!0)},5e3)},[]),u?null:N("p",{class:"text-sm",children:[t("Successfully synchronized with the latest official rules:")," ",new Date(e).toLocaleString()]})},Wh=({minVersion:e})=>{let{t}=_t();return N("p",{class:"text-sm",children:t("localVersionIsTooOld",{minVersion:e})})},qh=()=>{let{t:e}=_t();return N("p",{class:"text-sm",dangerouslySetInnerHTML:{__html:e("badUserscriptBrowser",{1:"https://immersivetranslate.com/docs/installation/"})}})},Kh=({message:e,handleSyncing:t,date:u})=>{let{t:n}=_t();return N("p",{class:"text-sm",children:[n("failToSyncRules")," ",N("a",{onClick:t,children:n("retry")}),N("br",{}),n("failedReason"),"\uFF1A",e,N("br",{}),n("currentRuleVersion"),"\uFF1A",u]})};function ms(e){let{isShowError:t,request:u}=e,[n,a]=he(null),{t:r}=_t(),[i,o]=he(null),[s,l]=he(null),[c,d]=he(""),[m,g]=he(!1),[f,x]=he(!1),[y,p]=he(!1),[F,S]=he(null),[C,B]=he(null),b=Hu(),v=async()=>{d("");let E=i;if(i===null)try{let w=await u({url:Cn});w?(o(w),E=w,g(!0)):(d(r("unknownError")),l(null))}catch(w){l(null),d(w.message);return}E!==null?(e.setStorageBuildinConfig(E),l(!1),a(E.buildinConfigUpdatedAt)):(d(r("canNotFetchRemoteRule")),l(null))};return nt(()=>{hu().then(E=>{let w=E.buildinConfigUpdatedAt;S(E);let I=new Date(w);if(a(w),b==="0.0.0"){p(!0);return}u({url:Cn}).then(T=>{let _=T,L=_.minVersion,z=b;o(_);let M=_.latestVersion;if(M&&(Vn(z,M)?B(!0):B(!1)),Vn(z,L)){let de=_.buildinConfigUpdatedAt;new Date(de)>I?(l(!0),v()):l(!1)}else x(!0),l(null)}).catch(T=>{l(null),d(T.message)})})},[]),nt(()=>{hu().then(E=>{S(E)})},[n]),F?N("div",{class:"text-sm mt-2",style:{maxWidth:218},children:y?N(qh,{}):c?t===!1?null:N(Kh,{handleSyncing:v,message:c,date:n||""}):f?t===!1?null:N(Wh,{minVersion:i.minVersion}):s===null||s===!0?null:m?N(Uh,{date:n}):null}):null}function gs(e){let t=Hu(),{onTranslateTheMainPage:u,onUserConfigChange:n,request:a,onTranslateLocalHtmlFile:r,onSwitchTranslationMode:i,onTranslateLocalSubtitleFile:o,onSetBuildinConfig:s,pageStatus:l,openEbookBuilderPage:c,openEbookViewerPage:d,config:m,openAboutPage:g,onTranslateTheWholePage:f,onToggleEnabled:x,openOptionsPage:y,ontranslateToThePageEndImmediately:p,onSetPageLanguage:F,onToggleTranslate:S,onTranslateLocalPdfFile:C,onTranslatePdf:B,onRestorePage:b,ctx:v,currentUrl:E,currentLang:w,onClose:I,onTranslatePage:T,onSetLocalConfig:_,onMouseTriggerChanged:L}=e,z=n,[M,de]=he(""),[we,Me]=he(""),{t:j}=_t(),J=null,be=null,D=null,G=null,W=null,se=null,O=null,le=null,ae=null,me=null,K=null,oe=null,ce=!0;if(m){Tt()&&m&&(ce=m.generalRule.showSponsorOnSafari);let{translationService:P,translationServices:Y,translationUrlPattern:Ce}=m;if(Ot[P]&&(le=Ho(P,v)),Y&&Y[P]?oe=Y[P]||{}:oe={},E&&Bd(E)){ae=new URL(E),me=Ld(ae.hostname),K=_d(E);let{matches:pe,excludeMatches:ie}=Ce;be=pe.includes(me),J=pe.includes(ae.hostname),G=ie.includes(me),D=ie.includes(ae.hostname),se=pe.includes(K),O=ie.includes(K)}}if(m&&w&&w!=="auto"){let{translationLanguagePattern:P}=m,{matches:Y}=P;Y.includes(w)?W=!0:W=!1}let fe=P=>{P.preventDefault(),y()},V=P=>{z(Y=>(Y.alpha?de("Success disable alpha!"):de("Success enable alpha!"),{...Y,alpha:!Y.alpha}))},ge=P=>{z(Y=>({...Y,translationMode:P})),i(P)},Re=()=>{z(P=>({...P,translationArea:"body"})),f()},xe=()=>{z(P=>({...P,translationArea:"main"})),u()},$=(P,Y,Ce,pe)=>{if(P==="default"){z(it=>{let Ke={...it.translationUrlPattern};return{...it,translationUrlPattern:{...it.translationUrlPattern,matches:Vt([ae?.hostname,me,E],Ke.matches),excludeMatches:Vt([ae?.hostname,me,E],Ke.excludeMatches)}}});return}let ie=P,dt=ie==="matches"?"excludeMatches":"matches";ae&&z(it=>{let Ke={...it.translationUrlPattern};return Ke[ie]=Io(Y,Ke[ie]),pe.length>0&&(Ke[ie]=Vt(pe,Ke[ie])),Ke[dt]=Vt(Ce,Ke[dt]),{...it,translationUrlPattern:{...it.translationUrlPattern,...Ke}}}),ie==="matches"&&l==="Original"?setTimeout(()=>{T(),I()},100):ie==="excludeMatches"&&l==="Translated"&&setTimeout(()=>{b(),I()},100)},Ne=P=>{if(!P){z(pe=>{let ie={...pe.translationLanguagePattern};return{...pe,translationLanguagePattern:{...pe.translationLanguagePattern,matches:Vt(w,ie.matches),excludeMatches:Vt(w,ie.excludeMatches)}}});return}let Y=P,Ce=Y==="matches"?"excludeMatches":"matches";w&&z(pe=>{let ie={...pe.translationLanguagePattern};return ie[Y]=Io(w,ie[Y]),ie[Ce]=Vt(w,ie[Ce]),{...pe,translationLanguagePattern:{...pe.translationLanguagePattern,...ie}}}),Y==="matches"&&l==="Original"&&setTimeout(()=>{T(),I()},100)},ot=ae?.pathname.toLowerCase().endsWith(".pdf"),Te=j("translate");l==="Translated"||l==="Error"?Te=j("show-original"):l==="Original"?ot?wa()&&ae.protocol==="file:"?Te=j("translate-firefox-local-pdf"):ue()?Te=j("noSupportTranslate-pdf"):Te=j("translate-pdf"):Te=j("translate"):Te=j(l);let qe=j("translateToThePageEndImmediately");(l==="Original"||l==="Translated")&&(m.shortcuts.toggleTranslatePage&&(il()&&v.rule.fingerCountToToggleTranslagePageWhenTouching>=2?Te+=` (${j(`fingers.${v.rule.fingerCountToToggleTranslagePageWhenTouching}`)})`:Te+=` (${m.shortcuts.toggleTranslatePage})`),m.shortcuts.toggleTranslateToThePageEndImmediately&&(qe+=` (${m.shortcuts.toggleTranslateToThePageEndImmediately})`));let ct=[];v&&(ct=Ml(v));let xt=P=>{P.preventDefault(),I()};return N("div",{class:"p-3",children:[N("div",{class:"text-sm",children:[N("div",{class:"flex justify-between mb-2",children:[N("label",{class:"inline-block",children:[j("popupSourceLanguage"),"\uFF1A"]}),N(Ht,{items:Gt.map(P=>({label:Sr(P,m.interfaceLanguage),value:P,selected:P===w,onSelected:Y=>{F(Y.value)}}))})]}),m&&m.targetLanguage&&N("div",{class:"flex justify-between mb-2",children:[N("label",{class:"inline-block",children:[j("popupTarget"),"\uFF1A"]}),N(Ht,{items:Gt.filter(P=>P!=="auto").map(P=>({label:Sr(P,m.interfaceLanguage),value:P,selected:P===m.targetLanguage,onSelected:Y=>{z(Ce=>({...Ce,targetLanguage:Y.value}))}}))})]}),le&&ct.length>0&&N(Lt,{children:[N("div",{class:"flex justify-between mb-2",children:[N("label",{class:"inline-block",children:[j("popupService"),"\uFF1A"]}),N(Ht,{items:ct.map(P=>({label:`${j("translationServices."+P.id)}${P.ok?"":" "+j("needAction")}`,value:P.id,selected:P.selected,onSelected:Y=>{let Ce=ct.find(pe=>pe.id===Y.value);Ce.ok?(z(pe=>({...pe,translationService:Ce.id})),Ce.props.length===0?setTimeout(()=>{T()},1):setTimeout(()=>{b()},1)):(z(pe=>({...pe,translationService:Ce.id})),setTimeout(()=>{y()},100))}}))})]}),oe&&le.props.length>0&&le.props.map((P,Y)=>N("div",{class:"pl-4 text-sm",children:N(ds,{field:P,value:oe[P.name],onChange:Ce=>{z(pe=>{let ie=pe.translationServices||{},dt=ie[le.id]||{};return setTimeout(()=>{b()},1),{...pe,translationServices:{...ie,[le.id]:{...dt,[P.name]:Ce}}}})}},"field-"+Y)},"service"+Y))]}),ae&&N("div",{class:"flex justify-between mb-2",children:[N("label",{class:"inline-block",children:j("forThisSite")}),N(Ht,{items:[{label:j("default"),value:"default",selected:J===!1&&D===!1&&!be&&!G&&!se&&!O,onSelected:()=>{$("default",ae.hostname,[],[]);let P=ae.hostname,Y=v.localConfig.tempTranslationUrlMatches||[],Ce=Y.filter(ie=>ie.match!==P),pe=!1;Ce.length!==Y.length&&(pe=!0),pe&&_({...v.localConfig,tempTranslationUrlMatches:[...Ce]})}},K&&{label:j("alwaysTranslateSomeSite",{hostname:j("currentUrl")}),value:"matchesUrl",selected:se,onSelected:()=>{$("matches",K,[K],[])}},{label:j("alwaysTranslateSomeSite",{hostname:ae.hostname}),value:"matches",selected:J,onSelected:P=>{$(P.value,ae.hostname,[ae.hostname,me,K],[me])}},me&&{label:j("alwaysTranslateSomeSite",{hostname:me}),value:"matchesWild",selected:be,onSelected:()=>{$("matches",me,[K,ae.hostname,me],[ae.hostname])}},K&&{label:j("neverTranslateSomeSite",{hostname:j("currentUrl")}),value:"excludeMatchesUrl",selected:O,onSelected:()=>{$("excludeMatches",K,[K],[])}},{label:j("neverTranslateSomeSite",{hostname:ae.hostname}),value:"excludeMatches",selected:D,onSelected:P=>{$(P.value,ae.hostname,[ae.hostname,me,K],[me])}},me&&{label:j("neverTranslateSomeSite",{hostname:me}),value:"excludeMatchesWild",selected:G,onSelected:()=>{$("excludeMatches",me,[ae.hostname,K,me],[ae.hostname])}}].filter(Boolean)})]}),L&&Dn()&&N("div",{class:"flex justify-between mb-2",children:[N("label",{class:"inline-block",children:[j("mouse-translate"),"\uFF1A"]}),N(Ht,{items:Ea.filter(P=>!(Ea.includes(m.generalRule.mouseHoverHoldKey)&&P==="OtherCustom")).map(P=>{let Y=j("mouseHoldKey",{key:P}),Ce=Ea.includes(m.generalRule.mouseHoverHoldKey),pe=P===m.generalRule.mouseHoverHoldKey;return P==="Auto"?Y=j("mouseHoldKeyAuto"):P==="Off"?Y=j("mouseHoldKeyOff"):P==="OtherCustom"?Y=Ce?j("mouseHoldKeyOther"):j("mouseHoldKeyCustomKey",{key:m.generalRule.mouseHoverHoldKey}):P==="Other"&&(Y=j("mouseHoldKeyOther")),Ce||P==="OtherCustom"&&(pe=!0),{label:Y,value:P,selected:pe,onSelected:ie=>{ie.value==="Other"?y("#interface"):L(ie.value)}}})})]})]}),N("div",{class:"",children:N("button",{class:"py-2 mt-1 mb-2 main-button ",onClick:()=>{ot?B&&B():S()},"aria-busy":l==="Translating",disabled:l==="Translating",children:Te})}),N("div",{class:"flex justify-between",children:[w&&w!=="auto"?N("label",{for:"alwaysTranslateThisLanugage",class:"text-sm",children:[N("input",{type:"checkbox",id:"alwaysTranslateThisLanugage",name:"alwaysTranslateThisLanugage",checked:!!W,onChange:P=>{let Y=P.target.checked;Ne(Y?"matches":void 0)}}),j("alwaysTranslateSomeLanguage",{language:Sr(w,m.interfaceLanguage)})]}):N("span",{}),N(cs,{label:j("more"),showArrow:!0,onSelected:P=>{P.value==="changeToOnlyTranslationMode"?ge("translation"):P.value==="changeToDualTranslationMode"?ge("dual"):P.value==="translateTheWholePage"?f():P.value==="translateToThePageEndImmediately"?p():P.value==="translateTheMainPage"?u():P.value==="showTranslationOnly"||(P.value==="translateLocalPdfFile"?C&&C():P.value==="translateLocalHtmlFile"?r&&r():P.value==="translateLocalSubtitleFile"?o&&o():P.value==="donate"?(globalThis.open(m.donateUrl),I()):P.value==="feedback"?(globalThis.open(m.feedbackUrl),I()):P.value==="options"?(y(),I()):P.value==="changeToTranslateTheWholePage"?Re():P.value==="changeToTranslateTheMainPage"?xe():P.value==="about"?g():P.value==="toggleEnabled"?x():P.value==="openEbookViewer"?d():P.value==="openEbookBuilder"&&c())},menus:[m.translationMode==="dual"&&{label:"1\uFE0F\u20E3 "+j("changeToOnlyTranslationMode"),value:"changeToOnlyTranslationMode"},m.translationMode==="translation"&&{label:"2\uFE0F\u20E3 "+j("changeToDualTranslationMode"),value:"changeToDualTranslationMode"},m.translationArea==="main"&&{label:"\u{1F480} "+j("changeToTranslateTheWholePage"),value:"changeToTranslateTheWholePage"},m.translationArea==="body"&&{label:"\u{1F4D6} "+j("changeToTranslateTheMainPage"),value:"changeToTranslateTheMainPage"},{label:"\u26A1 "+qe,value:"translateToThePageEndImmediately"},{label:"\u{1F4D8} "+j("browser.openEbookViewer"),value:"openEbookViewer"},{label:"\u{1F4DA} "+j("browser.openEbookBuilder"),value:"openEbookBuilder"},!ue()&&{label:"\u{1F4C1} "+j("browser.translateLocalPdfFile"),value:"translateLocalPdfFile"},!ue()&&{label:"\u{1F310} "+j("browser.translateLocalHtmlFile"),value:"translateLocalHtmlFile"},{label:"\u{1F4FA} "+j("browser.translateLocalSubtitleFile"),value:"translateLocalSubtitleFile"},{label:(m.enabled?"\u{1F6AB} ":"\u{1F44B} ")+(m.enabled?j("clickToDisableExtension"):j("clickToEnableExtension")),value:"toggleEnabled"},{label:"\u2764\uFE0F "+j(ce?"aboutLabel":"aboutLabelWithoutSponsor"),value:"about"}].filter(Boolean)})]}),N("div",{class:"text-sm",children:M}),N("div",{class:"text-sm",children:we}),N("footer",{children:[N(ms,{isShowError:!1,request:a,setStorageBuildinConfig:s}),N("div",{class:"mt-3 text-sm flex justify-between",children:[N("a",{href:"#",class:"secondary",onClick:fe,children:j("options")}),ue()&&N("a",{href:"#",class:"secondary",onClick:xt,children:j("close")}),N("span",{class:"immersive-translate-no-select muted",onClick:Pd(7)(V),children:["V",t,m.enabled?null:N("a",{href:"#",onClick:x,children:[" ","(",j("hasBeenDisabled"),")"]})]})]})]})]})}var ps={get:(e,t,u)=>{let n=t===void 0?e:{[e]:t};return q.storage[u].get(n)},set:(e,t,u)=>q.storage[u].set({[e]:t})};function zr(e,t,u){let[n]=he(()=>typeof t=="function"?t():t),[a]=he(u),[r,i]=he(n),[o,s]=he(!1),[l,c]=he("");nt(()=>{ps.get(e,n,a).then(m=>{m[e]&&i(m[e]),s(!0),c("")}).catch(m=>{s(!1),c(m)})},[e,n,a]);let d=ku(m=>{let g=typeof m=="function"?m(r):m;A.debug("new settings",g),ps.set(e,g,a).then(()=>{i(g),s(!0),c("")}).catch(f=>{i(g),s(!1),c(f)})},[a,e,r]);return[r,d,o,l]}function fs(e,t,u){let n=[];return function(){let[r,i,o,s]=zr(e,t,u),l=ku(c=>{for(let d of n)d(c)},[]);return nt(()=>(n.push(i),()=>{n.splice(n.indexOf(i),1)}),[i]),[r,l,o,s]}}function Md(e,t){return fs(e,t,"sync")}var $h="userConfig",Gh={},Vh=Md($h,Gh);function Rd(e){let[t,u,n,a]=Vh(),r=ku(i=>{let o=typeof i=="function"?i(t):i;o&&(o.updatedAt=new Date().toISOString()),u(o),e&&e(o)},[t]);return[t,r,n,a,u]}async function Hr(e){try{let t=new Date;A.debug("cron task start, next will run at",new Date(t.getTime()+e).toLocaleString()),await q.storage.local.set({[kn]:t.toISOString()}),await Jh(),ue()||await u4()}catch(t){A.error("run cron task failed",t)}}async function Od(){let t=(await ut()).interval;if(t){let u=await q.storage.local.get(kn);if(u&&u[kn]){let n=u[kn];if(Date.now()-new Date(n).getTime()<t){let a=new Date(new Date(n).getTime()+t);A.debug(`cron task not run, next will run at ${a}`);return}else Hr(t)}else Hr(t)}}async function Jh(){try{let e=await ut(),t=await H({url:Cn}),u=e.buildinConfigUpdatedAt,n=new Date(u),a=t.buildinConfigUpdatedAt,r=new Date(a),i=t.minVersion,o=q.runtime.getManifest().version;Vn(o,i)?r>n?(await q.storage.local.set({buildinConfig:t}),A.info(`sync remote rules success, latest: ${new Date(a).toLocaleString()}`)):A.debug(`no need to sync rules, latest: ${n}`):A.info(`local version is too old, please update to ${i} or later`)}catch(e){A.error("sync rules error: ",e)}}function hs(e){let{onClose:t}=e,[u,n]=he("Original"),[a,r,i,o]=Rd(()=>{setTimeout(()=>{S("updateGlobalContext",!1)()},250)}),[s,l]=he(null),[c,d]=he(globalThis.location.href),[m,g]=he("auto"),[f,x]=he(null),y=M=>{n(M.detail)},p=M=>{g(M);let de=Fd(c,M,s.sourceLanguageUrlPattern);r(we=>({...we,sourceLanguageUrlPattern:de})),bt(M)},F=()=>{d(globalThis.location.href)};nt(()=>(document.addEventListener(da,y,!1),ut().then(M=>{l(M);let de=Pt();g(de);let we=ke();n(we),Hr(M.interval)}),document.addEventListener("urlChange",F),()=>{document.removeEventListener("pageTranslatedStatus",y),document.removeEventListener("urlChange",F)}),[]),nt(()=>{ut().then(M=>{l(M)})},[a]),nt(()=>{c&&s&&yt({url:c,config:s}).then(M=>{x(M)})},[c,s]);let S=(M,de,we={})=>()=>{ln({method:M,data:we||{}}),de&&t()},C=()=>{t()},B=()=>{r(M=>({...M,enabled:!M.enabled})),setTimeout(()=>{C()},50)},b=()=>{Go(),setTimeout(()=>{C()},50)},v=()=>{Go(),setTimeout(()=>{C()},50)},E=(M="")=>{Ua(!0,M),setTimeout(()=>{t()},50)},w=()=>{Wa(),setTimeout(()=>{t()},50)},I=()=>{qa(),setTimeout(()=>{t()},50)},T=()=>{e4(),setTimeout(()=>{t()},50)},_=()=>{Ka(),setTimeout(()=>{t()},50)},L=()=>{t4(),setTimeout(()=>{t()},50)},z=M=>{r(de=>({...de,generalRule:{...de.generalRule,mouseHoverHoldKey:M}}))};return!s||!f?null:N(gs,{openEbookViewerPage:I,openEbookBuilderPage:_,onSwitchTranslationMode:M=>{S("switchTranslationMode",!0,{mode:M})()},onTranslateLocalHtmlFile:T,onTranslateLocalSubtitleFile:L,request:H,onClose:C,onToggleEnabled:B,onTranslateTheWholePage:S("translateTheWholePage",!0),openOptionsPage:E,onToggleTranslate:S("toggleTranslatePage",!0),onTranslateTheMainPage:S("translateTheMainPage",!0),ontranslateToThePageEndImmediately:S("translateToThePageEndImmediately",!0),onTranslatePage:S("translatePage",!0),onRestorePage:S("restorePage",!1),onTranslatePdf:b,openAboutPage:w,onTranslateLocalPdfFile:v,onSetPageLanguage:p,onUserConfigChange:r,config:s,pageStatus:u,ctx:f,currentUrl:c,currentLang:m,onSetLocalConfig:Ha,onSetBuildinConfig:Jl,onMouseTriggerChanged:z})}function Yh(e,t){for(let u of t){if(ue()&&!wa()&&typeof GM!==void 0&&GM.addElement){GM.addElement(e,"style",{textContent:u});continue}e.appendChild(document.createElement("style")).textContent=u}}var Es={position:"right",right:0,top:335},at={...Es},qr=!1,Au=null,Mt=null,Kr=null,bs=null,mn=null,ys=null,Id=6,Ur,Wr,jd=null,zd=null;async function Ts(){let e=Nt();ys=await Vl(),at=ys.pagePopupConfig||at;let t=document.createElement("div");t.id="immersive-translate-popup",t.setAttribute("style","all: initial"),document.documentElement.appendChild(t);let u=t.attachShadow({mode:"open"});bs=u;let n=[e.IMMERSIVE_TRANSLATE_PICO_CSS,e.IMMERSIVE_TRANSLATE_COMMON_CSS,e.IMMERSIVE_TRANSLATE_POPUP_CSS,e.IMMERSIVE_TRANSLATE_PAGE_POPUP_CSS].join(`
`);Yh(u,[n]);let a=document.createElement("div");a.innerHTML=e.IMMERSIVE_TRANSLATE_POPUP_HTML,u.appendChild(a),Au=u.querySelector("#immersive-translate-popup-container");let i=u.querySelector("#immersive-translate-popup-btn");Mt=i,Kr=u.querySelector("#mount"),Au.setAttribute("style",xs(at)),ks(),i.addEventListener("mousedown",Hd),i.addEventListener("touchstart",Zh),globalThis.addEventListener("resize",s=>{Au.setAttribute("style",xs(at))})}function Xh(){Rr(null,Kr),Kr.style.display="none",Mt.style.display="block",mn=setTimeout(()=>{ks(!0)},2e3)}function Nd(e){let t=e.querySelector("#mount"),u=()=>{Xh()},n=a=>{a&&a.target&&a.target.id==="immersive-translate-popup-overlay"&&u()};(async()=>{let a=await ut();Rr(N(Sd,{lang:a.interfaceLanguage,fallbackLang:"zh-CN",translations:ed,children:N("div",{onClick:n,id:"immersive-translate-popup-overlay",class:"immersive-translate-popup-overlay",children:N("div",{class:"immersive-translate-popup-wrapper",style:Qh(),children:N(hs,{onClose:u})})})}),t)})().then(()=>{Mt.style.display="none",Kr.style.display="block"})}function Qh(){let e=ws(),t=e.height,{position:u,top:n,left:a}=at,r={position:"fixed"},i=300,o=300,s=100;return Tl()&&(u=Es.position,n=Es.top),u==="right"||u==="left"?(r.top=n-s,r.top+i>=t?(r.bottom=30,delete r.top):r.top<=10&&(r.top=10),u==="right"?r.right=0:u==="left"&&(r.left=0)):(u==="top"||u==="bottom")&&(r.left=a-s,r.left+o>=e.width?(r.right=0,delete r.left):r.left<=10&&(r.left=0),u==="top"?r.top=0:u==="bottom"&&(r.bottom=0)),r}function ws(){return{width:Math.max(document.documentElement.clientWidth,window.innerWidth||0),height:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}function Hd(e){zd=Au.getAttribute("style"),Ur=e.pageX,Wr=e.pageY,mn&&clearTimeout(mn),qr=!1,Mt.style.opacity="1",Mt.style.transform="none",jd=Mt.getAttribute("style"),globalThis.addEventListener("mousemove",Cs),globalThis.addEventListener("mouseup",vs),globalThis.addEventListener("touchmove",Ud),globalThis.addEventListener("touchend",$r),globalThis.addEventListener("touchcancel",$r)}function Zh(e){e.preventDefault&&e.preventDefault(),Hd(e.changedTouches[0])}function Ud(e){Cs(e.changedTouches[0])}function $r(e){e.preventDefault&&e.preventDefault(),vs(e.changedTouches[0])}function Cs(e){e.preventDefault&&e.preventDefault(),qr=!0,Au.setAttribute("style",`left:${e.clientX}px;top:${e.clientY}px;transform:scale(1.6);`)}function vs(e){e.preventDefault&&e.preventDefault(),t9(),mn&&clearTimeout(mn),Ur=Ur||0,Wr=Wr||0;let t=Math.abs(e.pageX-Ur),u=Math.abs(e.pageY-Wr);t<Id&&u<Id?(Au.setAttribute("style",zd),Mt.setAttribute("style",jd),Nd(bs)):qr?e9(e):Nd(bs),qr=!1}function e9(e){let t=ws(),u=e.clientX,n=e.clientY,a=n,r=t.height-n,i=u,o=t.width-u;a<r&&a<i&&a<o?at={position:"top",left:u,top:0}:r<a&&r<i&&r<o?at={position:"bottom",bottom:0,left:e.clientX}:i<a&&i<r&&i<o?at={position:"left",left:0,top:e.clientY}:o<a&&o<r&&o<i&&(at={position:"right",right:0,top:e.clientY});let s=xs(at);Au.setAttribute("style",s),Ha({...ys,pagePopupConfig:at}),mn=setTimeout(()=>{ks(!0)},2e3)}function ks(e=!1){Mt.style.opacity="0.4";let t="";at.position==="left"?t="translateX(-40%)":at.position==="right"?t="translateX(40%)":at.position==="top"?t="translateY(-40%)":at.position==="bottom"&&(t="translateY(40%)"),Mt.style.transform=t,e&&(Mt.style.transition="transform 0.2s ease-in-out, opacity 0.2s ease-in-out")}function t9(){globalThis.removeEventListener("mousemove",Cs),globalThis.removeEventListener("mouseup",vs),globalThis.removeEventListener("touchmove",Ud),globalThis.removeEventListener("touchend",$r),globalThis.removeEventListener("touchcancel",$r)}function xs(e){let t=u9(e);return Object.keys(t).map(u=>typeof t[u]=="number"?`${u}:${t[u]}px;`:"").join("")}function u9(e){let{position:t,...u}=e,n=ws(),a={};return t==="left"?(a.left=0,u.top>n.height?a.top=n.height-100:a.top=u.top):t==="right"?(a.right=0,u.top>n.height?a.top=n.height-100:a.top=u.top):t==="top"?(a.top=0,u.left>n.width?a.left=n.width-100:a.left=u.left):t==="bottom"&&(a.bottom=0,u.left>n.width?a.left=n.width-100:a.left=u.left),a}var Gr=!1;async function Wd(e){if(!e){let t=await ut(),u={url:globalThis.location.href,config:t};e=await yt(u)}e.config.debug&&A.setLevel("debug"),e.isTranslateExcludeUrl?A.debug("detect exclude url, do not inject anything."):(ya().any||ue())&&e.rule.isShowUserscriptPagePopup&&(Gr||(Gr=!0,Ts().catch(t=>{A.error("init popup error",t)})))}async function qd(){Gr||(Gr=!0,Ts().catch(e=>{A.error("init popup error",e)}))}var Kd=!1,$d=[()=>{De.unbind()}],As=[...$d],n9=Ve(async()=>{await Ua()},50),a9=Ve(async()=>{await Wa()},50),r9=Ve(async()=>{await Ka()},50),o9=Ve(async()=>{await qa()},50),Gd=Ve(e=>{ln({method:e})},50),i9=Ve(()=>{Oa();let e=new CustomEvent($t,{detail:{method:"toggleTranslatePage"}});globalThis.document.dispatchEvent(e)},200),s9=Ve(()=>{za();let e=new CustomEvent($t,{detail:{method:"toggleOnlyTranslation"}});globalThis.document.dispatchEvent(e)},200),l9=Ve(()=>{Na();let e=new CustomEvent($t,{detail:{method:"toggleTranslationMask"}});globalThis.document.dispatchEvent(e)},200);function c9(e){let t=e.document;if(Kd)return;if(Kd=!0,ue()||Hl(),t.addEventListener("securitypolicyviolation",E9),t.addEventListener("immersiveTranslateEbookLoaded",h9),t.addEventListener(R0,f9),t.addEventListener("click",p9),ue()&&(globalThis.top!=globalThis.self?e.addEventListener("message",m9,!1):t.addEventListener($t,d9)),globalThis.top===globalThis.self){let n=Bt.rootIframe(Fo);n.handleAsk("getRateLimitDelay",f4),n.handleAsk("throttleRequest",M4)}}function Jn(e,t){b9(),c9(t);let u=t.document,n=g9.bind(null,e);e.rule.fingerCountToToggleTranslagePageWhenTouching>=2&&u.addEventListener("touchstart",n),As.push(()=>{u.removeEventListener("touchstart",n)}),ue()&&globalThis.top===globalThis.self&&(Zi(e.config),y9(e.config)),Tt()&&Zi(e.config)}function d9(e){qd()}function m9(e){let t=e;t&&t.data&&t.data.payload&&t.data.author===sa&&ju(t.data.payload,{tab:{id:1,url:"https://www.fake-iframe.com",active:!0}})}function g9(e,t){let u=t;u.touches.length==e.rule.fingerCountToToggleTranslagePageWhenTouching?i9():u.touches.length===e.rule.fingerCountToToggleTranslationMaskWhenTouching?l9():u.touches.length===e.rule.fingerCountToToggleTranslagePageOnlyTranslationWhenTouching&&s9()}function p9(e){let t=e.target;if(!t||!t.getAttribute)return;let u=t.getAttribute("data-immersive-translate-action");u&&u==="retry"&&(e.preventDefault(),typeof e.stopPropagation=="function"&&e.stopPropagation(),Ia())}function f9(e){let t=e;if(A.debug("receive third party message",t),t&&t.detail)try{let u=JSON.parse(t.detail);u&&u.type&&(u.type==="retryFailedParagraphs"?x9({method:"retryFailedParagraphs"}):u.type==="updateCommands"?$a(u.data):Gd(u.type))}catch(u){A.warn("parse message error",u)}}function h9(e){setTimeout(()=>{Vr()},10)}function E9(e){te.HAS_CSP_ERROR="1"}function b9(){As.forEach(e=>{e()}),As=$d}function y9(e){if(ue()&&typeof GM<"u"&&GM&&GM.registerMenuCommand){let t=Va.commands,a=[...Object.keys(t).filter(r=>r==="toggleTranslatePage").map(r=>{let i=t[r].description,o=i;return i.startsWith("__MSG_")&&i.endsWith("__")&&(o=sn(`browser.${i.slice(6,-2)}`,e.interfaceLanguage)),{id:r,title:o}}),{id:Co,title:sn("browser.openEbookViewer",e.interfaceLanguage),key:"e"},{id:vo,title:sn("browser.openEbookBuilder",e.interfaceLanguage),key:"m"},{id:To,title:sn("browser.openOptionsPage",e.interfaceLanguage),key:"o"},{id:wo,title:sn("browser.openAboutPage",e.interfaceLanguage),key:"a"}];for(let r of a)GM.registerMenuCommand(r.title,()=>{r.id===To?n9():r.id===wo?a9():r.id===vo?r9():r.id===Co?o9():Gd(r.id)},r.key)}}function x9(e){ju(e,{tab:{id:1,url:"https://www.fake.com",active:!0}}).catch(u=>{A.error("send content message request failed",e,u)});let t=new CustomEvent($t,{detail:e});globalThis.document.dispatchEvent(t)}function Vd(e,t){let u=e.pageWidth*e.scale,n=e.prevPageParagraphs||[];if(n.length<=0||t.length<=0)return{};let a=n[n.length-1];if(!a)return{};let r=u-a.right,i=t.find(o=>Ae(o.left,r)&&Ae(o.width,a.width));return{prevP:a,curP:i}}function Ds(e){return!!(!e||/^[\d\.:%\(\),%\s\-]+$/.test(e))}function Jd(e){return e?e==e[0].repeat(e.length):!0}function Ae(e,t,u=5){return Math.abs(e-t)<=u}var Ss=[",","\\.","\uFF0C","\u3002"];function Yd(e,t){let u=e.prevGroup;if(!u)return!1;let n=u[u.length-1],a=t[0];return Ae(n.left,a.left,7)&&Ae(n.nextTop,a.top,10)&&Jr(n,a)}function Xd({prevLineP:e,justify:t},u){return t&&u.left>e.left&&u.bottom<e.top}function Qd({prevLineP:e},{left:t}){return Ae(e.right,t,1)}function Zd({prevLineP:e,scale:t},u){return Jr(e,u,e.str.length<30)&&Ae(e.nextTop,u.top,e.fontSize*t*.35)}function em({prevLineP:e},t){return e.fontName==t.fontName&&e.left<t.left&&e.right>t.right}function tm(e,t){let u=e.justify;return u?t.top>u.top&&t.left>u.left&&t.right<=u.right+1&&t.fontSize<=u.fontSize+1:!1}function um({prevLineP:e,prevP:t},u){return Ae(e.left,u.left,1)&&Ae(e.right,t.right,1)&&t.mergedTimes>=1}function Fs(e,t){let{prevLineP:u}=e;return tm(e,t)&&(Ae(u.bottom,t.bottom)||Ae(u.nextTop,t.top)&&Ae(u.left,t.left))}function nm(e,t){let{prevLineP:u,prevP:n,scale:a}=e;return tm(e,t)&&u.width<n.width?!1:Ae(u.left,t.left,t.fontSize*a)&&(t.width<u.width||Ae(t.width,u.width,t.width*.2))}function am({prevLineP:e,scale:t},u){let n=Math.abs(e.width-u.width),a=Math.max(e.width,u.width);return a>0&&n/a<.1&&u.left<e.left&&Ae(u.left,e.left,u.fontSize*t*3)}function rm(e,t){let{prevLineP:u}=e,{fontSize:n,left:a}=t;return Ps(e,t)&&Ae(u.nextLeft,a,n)&&Ae(u.fontSize,n)}function Ps({prevLineP:e},{bottom:t}){return Ae(e.bottom,t,3)}function om({scale:e,prevLineP:t},{fontSize:u,top:n,left:a}){return u<=t.fontSize*.8&&Ae(n,t.top,2)&&Ae(t.nextLeft,a,t.fontSize*e)}function Jr(e,{fontSize:t,fontName:u},n=!1){return n?Ae(e.fontSize,t,1)&&e.fontName==u:Ae(e.fontSize,t,1)}var sm;async function Yr(e,t){sm=e;let u=t.filter(r=>!Ds(r.str)).filter(r=>r.translateStatus!="success"&&r.translateStatus!="pending").map(r=>(r.translateStatus="pending",r));if(u.length<=0)return;let n=await Ie({text:u.map(r=>r.str).join(`
`).slice(0,1e3)});La(n);let a=u.map((r,i)=>({text:r.str,id:i,from:n,to:e.targetLanguage,url:"https://google.com",fromByClient:"auto"}));await nu({sentences:a},e,(r,i,o)=>{let s=o.id,l=u[s];r?(l.translatedStr=r.message,l.translateStatus="error"):i&&(l.translatedStr=i.text,l.translateStatus="success"),w9(l)})}var Bs={};async function T9(){let e=document.getElementsByClassName("translate-retry");for(let u of e)u.classList.remove("translate-retry"),u.classList.add("translate-pending");let t=Object.values(Bs).filter(u=>!!u);await Yr(sm,t)}function w9(e){let t=document.getElementById(e.id);t&&(t.classList.remove("translate-pending","translate-retry"),e.translateStatus=="error"?(Bs[e.id]=e,t.classList.add("translate-retry"),t.addEventListener("click",T9)):e.translateStatus=="success"&&(Bs[e.id]=void 0,t.innerHTML=e.translatedStr))}function lm(e,t){let u=[],n=v9(e,t);return k9(e,n).forEach(r=>{if(!(r.length<=0)){if(r.length==1){im(e,u,r[0],!0);return}u.push(`<div style="${C9(e,r)}">`),r.forEach(i=>{im(e,u,i,!1)}),u.push("</div>")}}),`
  <div class="textLayer immersive-translate-text-layer" data-main-rotation="0"">
  ${u.join("")}
  </div>`}function im(e,t,u,n=!0){if(u.length<=0)return;let{pageWidth:a,pageHeight:r,scale:i}=e,o=n?"":"position:relative;",s=`${(100-u[0].left*100/(a*i)).toFixed(2)}%`;u.forEach(l=>{if(!l.str)return;let c=l.mergedTimes>0?`${(l.width*100/(a*i)+1).toFixed(2)}%`:"auto",d=`${(l.left*100/(a*i)).toFixed(2)}%`,m=`${(l.top*100/(r*i)).toFixed(2)}%`,g=rl()&&l.fontSize<7?`transform: scale(${l.fontSize/10});`:"",f=`calc(var(--scale-factor)*${Math.min(l.fontSize-1,24)}px)`,x=`${l.fontName},serif`;n&&(o=`position: absolute; left: ${d}; top: ${m};width: ${c};max-width:${s};`);let y=Ds(l.str)?"":"translate-pending",p=l.str;l.translateStatus=="success"&&(p=l.translatedStr,y=""),t.push(`<p id='${l.id}' class='${y}' style="${o} ${g} font-size: ${f}; font-family: ${x};white-space: pre-line;">${p}</p>`)})}function C9(e,t){let{pageWidth:u,pageHeight:n,scale:a}=e,r=t[0][0],i=r.width;t.forEach(c=>{c[0].width>i&&(i=c[0].width)});let o=`${(i*100/(u*a)).toFixed(2)}%`,s=`${(r.left*100/(u*a)).toFixed(2)}%`,l=`${(r.top*100/(n*a)).toFixed(2)}%`;return`position:absolute;width:${o};left:${s};top:${l};`}function v9(e,t){let u=[];return t.forEach((n,a)=>{if(a==0){u.push([n]);return}let r=u[u.length-1][0];if(e.prevLineP=r,Ps(e,n)){u[u.length-1].push(n);return}u.push([n])}),u}function k9(e,t){let u=[];return t.forEach((n,a)=>{if(a==0||n.length>1){u.push([n]);return}let r=u[u.length-1];if(e.prevGroup=r[r.length-1],Yd(e,n)){r.push(n);return}u.push([n])}),u}var cm="immersive-translate",gn,Ut=[];async function mm(e){let t=globalThis.PDFViewerApplication;if(!t)return;if(Ct("open_pdf_page",[{name:"open_pdf_page"}],{...e}),t&&t.eventBus){if(u(),t&&t.pagesCount>0){let n=await dm(1);await Yr(e,n||[])}}else await t.initializedPromise,u();function u(){t.eventBus.on("pagesdestroy",()=>{Ut=[],gn=void 0,P9(e)}),t.eventBus.on("textlayerrendered",async({pageNumber:n})=>{let a=await dm(n);await Yr(e,a||[])})}}function A9(e){if(gn)return{...gn,pageNum:e,prevLineP:{},prevP:{}};let t=globalThis.PDFViewerApplication;if(!t)return;let u=t.pagesCount,n=document.getElementById("viewer");if(!n)return;let r=getComputedStyle(n).getPropertyValue("--scale-factor"),o={scale:Number(r),pageNum:e,pagesCount:u,pageWidth:0,pageHeight:0,prevLineP:{},prevP:{},pdfDocument:t.pdfDocument};return gn={...o},o}async function dm(e){let t=A9(e);if(!t)return;Ut[e]||(Ut[e]=await D9(t,e,Ut[e-1]||[]));let u=Ut[e],n=document.querySelector(`.page[data-page-number="${e}"]`),a=document.querySelector(`.${cm}-page[data-page-number="${e}"]`);if(!(!n||a))return a=document.createElement("div"),a.setAttribute("style",n.getAttribute("style")||""),a.setAttribute("data-page-number",e+""),a.classList.add("page"),a.classList.add(`${cm}-page`),a.innerHTML=lm(t,u),e==t.pagesCount?n.parentNode?.appendChild(a):n.parentNode?.insertBefore(a,n.nextSibling),u}async function D9(e,t,u){let n=await e.pdfDocument.getPage(t),a=await n.getTextContent(),[r,i,o,s]=n._pageInfo.view;gn.pageWidth=o,gn.pageHeight=s,Object.assign(e,{prevPageParagraphs:u,pageWidth:o,pageHeight:s});let l=F9(e,a);e.origLineParagraphs=l;let{prevP:c,curP:d}=Vd(e,l);return d&&gm(c,void 0,d),S9(e,l)}function S9(e,t){let u=[];return t.forEach((i,o)=>{if(o==0){n(i);return}let s=t[o-1],l=u[u.length-1];if(e.prevLineP=s,e.prevP=l,Zd(e,i)){if(em(e,i)){r(l,i);return}if(um(e,i)){e.justify={left:s.left,right:s.right,width:s.width,top:s.top,str:s.str,fontSize:s.fontSize},r(l,i);return}if(nm(e,i)){r(l,i);return}if(Fs(e,i)){r(l,i);return}if(am(e,i)){r(l,i),i.left<l.left&&(l.left=i.left);return}}else if(Fs(e,i)){r(l,i);return}Xd(e,i)&&gm(l,e.prevLineP,i),n(i)}),u;function n(i){a(i.str)||u.push(i)}function a(i){return!!(!i||/^_{6,}$/.test(i)||/ps:\/\/\S+$/.test(i))}function r(i,o,s=" ",l=!0){if(l&&o.str&&Jd(o.str)){n(o);return}a(o.str)||(Ae(i.nextTop,o.top)&&i.str.endsWith("-")&&(i.str=i.str.slice(0,i.str.length-1),s=""),i.mergedTimes++,i.str+=s+o.str,i.bottom=o.bottom,i.nextTop=o.nextTop)}}function F9(e,t){let{scale:u,pageHeight:n}=e,a=[];return t.items.forEach(r=>{let i=r.str;if(!i.trim())return;let o=r.transform[4],s=r.transform[5],l=r.width*u,c=t.styles[r.fontName].fontFamily,d=r.transform[3],m=t.styles[r.fontName].descent,f=(1+(1-t.styles[r.fontName].ascent)+m)*d,x=o*u,y=x+l,p=(n-s-f)*u,F=p+d*u,S=F+d*u*.2,C=y+d*u*.3,B={str:i,left:x,nextLeft:C,top:p,nextTop:S,id:`pageNum-${mt()}`,width:l,fontName:c,fontSize:d,right:y,bottom:F,attachList:[],mergedTimes:0,translatedStr:""};if(a.length==0)a.push(B);else{let b=a[a.length-1];if(e.prevLineP=b,rm(e,B)){Qd(e,B)?b.str+=i:b.str+=" "+i,b.right=y,b.fontName=c,b.width=Math.max(b.width+l,y-b.left),b.nextLeft=C;return}if(om(e,B)){b.width=Math.max(b.width+l,y-b.left),b.right=y,b.nextLeft=C,b.attachList.push(B);return}a.push(B)}}),a}function gm(e,t,u){if(!Jr(e,u)||e.width+1<u.width)return;let n=Ss.join("|"),a=Ss.join("").replace("\\","");if(!new RegExp(n).test(e.str[e.str.length-1])){let r=new RegExp(`[${a}]([^${a}]+?$)`),i="";e.str=e.str.replace(r,(o,s)=>(i=s,"")),t&&t.str==e.str&&!i&&(i=e.str,e.str=""),i&&(i.endsWith("-")?i=i.replace("-",""):i+=" "),u.str=i.trimStart()+u.str}}function P9(e){setTimeout(()=>{let t="";for(let u=1;u<=Ut.length;u++){let n=!1;if(Ut[u]){for(let a=0;a<Ut[u].length;a++){let i=Ut[u][a].str;if(t+=i,t.length>1e3){n=!0;break}}if(n)break}}Ie({text:t}).then(u=>{Ct("translate_page",[{name:"translate_page"}],{...e,sourceLanguage:u})})},2e3)}var Du={};async function Ls(e){let u=[...document.querySelectorAll(".source-text")].map(a=>a.textContent).join(""),n=await Zu(e,u,1e3);return bt(n),n}async function pm(e){tt("Translating");let t=Pt(),u=Iu(),n=[...document.querySelectorAll(".source-text")];if(yr(e,t))return;let a=n.filter(r=>r.innerText?.trim()).map((r,i)=>{let o=r.parentElement?.parentElement?.querySelector(".target-text");return Be(r,"id",i+""),o&&(en(o,i)?.remove(),o.appendChild(Wn(e,i))),{text:r.innerText||"",id:i,from:t,to:e.targetLanguage,url:"https://google.com",fromByClient:u}});document.dispatchEvent(new CustomEvent(et,{detail:JSON.stringify({type:"totalParagraphsCount",payload:{totalParagraphsCount:a.length}})}));try{await nu({sentences:a},e,(r,i,o)=>{let s=o.id,l=en(document.body,s);if(!l)return;let c=l.parentElement;c&&(l.remove(),r?(c.innerHTML=`<span id="error-id-${s}">${r.message}</span>`,Du[s]={ok:!1,sentence:o}):i&&(c.innerHTML=i.text,Du[s]={ok:!0,sentence:o}),document.dispatchEvent(new CustomEvent(et,{detail:JSON.stringify({type:"paragraphTranslated",payload:{ok:!r}})})))})}catch(r){throw r}finally{tt("Translated")}}async function fm(e){tt("Translating"),document.dispatchEvent(new CustomEvent(et,{detail:JSON.stringify({type:"retryFailedParagraphsStart",payload:{}})}));let t=Object.keys(Du),u=[],n=[];for(let a of t){let r=Du[a];if(!r.ok){let o=document.querySelector(`#error-id-${a}`);if(o){let s=o.parentElement;o.remove(),s&&(delete Du[a],s.appendChild(Wn(e,a)),n.push(r.sentence))}}}try{await nu({sentences:n},e,(a,r,i)=>{let o=i.id,s=en(document.body,o);if(!s)return;let l=s.parentElement;l&&(s.remove(),a?(l.innerHTML=`<span id="error-id-${o}">${a.message}</span>`,Du[o]={ok:!1,sentence:i}):r&&(l.innerHTML=r.text,Du[o]={ok:!0,sentence:i}),document.dispatchEvent(new CustomEvent(et,{detail:JSON.stringify({type:"paragraphTranslated",payload:{ok:!a}})})))})}catch(a){throw a}finally{tt("Translated")}}function _s(){tt("Original"),document.querySelectorAll(".target-text").forEach(e=>{e.innerHTML=""})}var Ms={};async function hm(e){let t=[...document.querySelectorAll("iframe")],u="";for(let a of t){let r=a.contentDocument;if(!r)continue;let i=r.body;if(i&&(u=u+i.innerText||"",u.length>1e3))break}let n=await Zu(e,u,1e3);return bt(n),n}async function Em(e){tt("Translating"),document.dispatchEvent(new CustomEvent(et,{detail:JSON.stringify({type:"retryFailedParagraphsStart",payload:{}})}));let t=Object.keys(Ms),u=[];for(let n of t){let a=Ms[n];if(a.error){let i=a.commonAncestorContainer.querySelector(`[${ma}='${n}']`);i&&i.remove(),u.push(a)}}try{await Cr(u,e,e.config.translationMode)}catch{}finally{tt("Translated")}}function bm(){let e=[...document.querySelectorAll("iframe")];for(let t of e){let u=t.contentDocument;if(!u)continue;let n=u.querySelectorAll("."+ht);for(let a of n)a.remove()}tt("Original")}async function ym(e){tt("Translating");let t=mt(),u=[...document.querySelectorAll("iframe")],n=[],a=[];for(let o of u){let s=o.contentDocument;if(!s)continue;an(s,e);let l=s.body;l&&un({id:t,container:l,filterRule:zt(e),onParagraph:c=>{n.push(c)}})}let r=br(e.config.translationServices[e.translationService]?.placeholderDelimiters),i=1;for(let o of n){let s=Tr(o.flatNodes,{isPreWhitespace:o.isPreWhitespace||!1,delimiters:r,stayOriginalSelectors:e.rule.stayOriginalTags.concat(e.rule.stayOriginalTags).map(c=>c.toLowerCase()).concat(e.rule.stayOriginalSelectors).concat(e.rule.additionalStayOriginalSelectors)});if(!s)continue;o.variables=s?.variables||{},o.text=s?.text,o.id=(i++).toString();let l=await $i(o,{excludeLanguages:e?.config?.translationLanguagePattern?.excludeMatches||[],isDetectParagraphLanguage:e.state.isDetectParagraphLanguage,targetLanguage:e.targetLanguage,delimiters:r,noTranslateRegexp:e.rule.noTranslateRegexp,minTextCount:2,minWordCount:1});l&&(a.push(l),Ms[l.id]=l)}n=[],document.dispatchEvent(new CustomEvent(et,{detail:JSON.stringify({type:"totalParagraphsCount",payload:{totalParagraphsCount:a.length}})}));try{await Cr(a,e,e.config.translationMode)}catch{}finally{tt("Translated")}}function xm(e,t){let u=e.parentNode;if(u.nodeName==="BODY"||Rs(u))return e;for(;u&&u.nodeName!=="BODY"&&!Rs(u)&&Fi(u,t);){let n=u.parentNode;if(n&&Rs(n))break;u=n}return u}function Rs(e){return!!(e.host&&e.mode)}function Os(e,t){return e.nodeType===Node.TEXT_NODE||Fi(e,t)?xm(e,t):e}var B9=new AbortController,{signal:L9}=B9,zs=0,Hs=0,Is=!1,Ns=0,Xr=!1,Su,Tm=0,Fu=[];function Qr(e,t){_9();let u={url:e.url,config:e.config,state:{...e.state,translationArea:"body"}},n=e,a=n.config,r=a.generalRule.mouseHoverHoldKey==="Off",i=a.generalRule.mouseHoverHoldKey==="Auto",o=Ve(d=>{if(Is==!1&&Math.abs(d.clientX-zs)+Math.abs(d.clientY-Hs)>3&&(Ns<2?Ns+=1:Is=!0),zs=d.clientX,Hs=d.clientY,i||Xr&&!Su){let m=vm(n.rule,t);m&&Cm(n,m)}},i?700:300),s=d=>{let m=d.target;R9(m)||Cm(n)},l=d=>{let m=a?.generalRule?.mouseHoverHoldKey?.toLowerCase()||"alt",g=De.getPressedKeyCodes();if(g.length>1&&De[m]&&(Tm=Date.now()),g.length===1&&De[m]){let f=Date.now();Xr=!0,Su&&clearTimeout(Su),Su=setTimeout(()=>{let x=Tm-f;x>0&&x<=150?Xr=!1:s(d),Su=void 0},150)}};if(Fu.push(()=>{Su&&clearTimeout(Su)}),r)return;js("mousemove",o,t),Fu.push(()=>{t.removeEventListener("mousemove",o)});function c(){Is=!1,Ns=0,o.cancel()}if(i)js("blur",c,t),Fu.push(()=>{t.removeEventListener("blur",c)});else{let d=a?.generalRule?.mouseHoverHoldKey?.toLowerCase()||"alt",m=["ctrl","alt","shift","cmd","command","option","control"];js("keyup",wm,t),Fu.push(()=>{t.removeEventListener("keyup",wm)}),m.includes(d)?De("*","mouseHover",l):De(a.generalRule.mouseHoverHoldKey,"mouseHover",s),De.setScope("mouseHover"),Fu.push(()=>{De.deleteScope("mouseHover")})}}function _9(){Fu.forEach(e=>e()),Fu=[]}function wm(e){Xr=!1}function js(e,t,u=window){return u.addEventListener(e,t,{signal:L9})}function Cm(e,t,u=window){if(t=t||vm(e.rule,u),!t){A.debug("can not find selection part!");return}Jc(e,t);let n=Ar();n?.currentUrl!==window.location.href&&(ou(),Vi(e)),n&&(n.setupMouseHoverListener=Qr);let a=zt(e);a.excludeSelectors=[],a.selectors=[],un({id:n.id,container:t,filterRule:a,force:!0,onParagraph:r=>{Wi(n,r,!0)},onFrame:()=>{},onIgnoreElement:()=>{}}),Ct("translate_page",[{name:"translate_page"}],{...e,sourceLanguage:"mouseHover"})}function vm(e,t){return M9(zs,Hs,e,t)}function M9(e,t,u,n){let a=kc(e,t,u,n);if(a==null)return;let r=()=>{let s=n.document.elementFromPoint(e,t);if(!s)return;let l=Ac(s,e,t);return l===s?s.nodeName==="BUTTON"?s:void 0:Os(l,u)},i=()=>{try{a.setStartBefore(a.startContainer),a.setEndAfter(a.startContainer)}catch(l){A.debug("get mouse over word fail",l)}let s=a.getBoundingClientRect();if(!(s.left>e||s.right<e||s.top>t||s.bottom<t))return Os(a.startContainer,u)},o;return a.startContainer.nodeType!==Node.TEXT_NODE?o=r():o=i(),o}function R9(e){return!(e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE)}var ee=null,Zr={},pn,eo;async function Oa(){if(ke()==="Original"){let e={};eo&&(e.translationMode=eo),pn&&(e.translationTheme=pn),ee&&(e={...ee.state,...e}),await rt(Le(),e),await wt(ee)}else(ke()==="Translated"||ke()==="Error")&&Eu()}async function Ia(){if(ee=await rt(Le(),{}),ee.rule.isEbookBuilder)return Em(ee);if(ee.rule.isSubtitleBuilder)return fm(ee);Xc()}async function Na(){if(ke()==="Original")ee=await rt(Le(),{}),pn||(pn=ee.state.translationTheme),ee=await rt(Le(),{translationTheme:"mask"}),await wt(ee);else if(ke()==="Translated"){let e=Fc().filter(n=>n.contentDocument?.body).map(n=>n.contentDocument.body),t=[ee.mainFrame,...e],u=ee?.state.translationTheme;for(let n of t){let a=Yu(n,Lu,!0);u==="mask"?a!=="none"?Be(n,Lu,"none",!0):Be(n,Lu,"mask",!0):a!=="mask"?Be(n,Lu,"mask",!0):Be(n,Lu,"none",!0)}}}async function Ko(){let e=await rt(Le(),{});return e.rule.isSubtitleBuilder?Ls(e):Yc(e)}function O9(e){ke()==="Original"?pm(e):_s()}function I9(e){ke()==="Original"?Dr(e):ou()}async function Eu(){let e=await rt(Le(),{});if(e.rule.isSubtitleBuilder){_s();return}else e.rule.isEbookBuilder&&bm();ou()}async function wt(e){if(ke()!=="Original"&&await Eu(),document.dispatchEvent(new CustomEvent(et,{detail:JSON.stringify({type:"translateStart",payload:{}})})),document.dispatchEvent(new CustomEvent(et,{detail:JSON.stringify({type:"targetLanguage",payload:{targetLanguage:e.targetLanguage}})})),Zr[e.translationService]||(Zr[e.translationService]=!0,ze()||Ai(e).catch(t=>{A.warn("init translation engine error",t)})),Ct("translage_page_daily",[{name:"translage_page_daily"}],e),Ct("translate_page",[{name:"translate_page"}],{...e,sourceLanguage:Pt()}),e.rule.isSubtitleBuilder)return O9(e);if(e.rule.isEbookBuilder)return ym(e);e.rule.isPdf||I9(e)}async function Ul(){ke()==="Original"?await ja():(ke()==="Translated"||ke()==="Error")&&(ee=await rt(Le(),{}),ee.state.translationArea!=="main"?await ja():Eu())}async function ja(){ee=await rt(Le(),{translationArea:"main"}),await wt(ee)}async function $o(){ee=await rt(Le(),{translationArea:"body"}),await wt(ee)}async function za(){if(ke()==="Original"){let e=await rt(Le(),{translationMode:"translation"});await wt(e)}else(ke()==="Translated"||ke()==="Error")&&await Eu()}async function Wl(e){if(ee=await rt(Le(),{}),Ct("switch_translation_mode",[{name:"switch_translation_mode",params:{mode:e}}],{...ee,sourceLanguage:"mouseHover"}),ke()==="Original"){wt(ee);return}window.immersiveTranslateSwitchTranslateState&&window.immersiveTranslateSwitchTranslateState(e)}async function ql(){if(ke()==="Original")await $o();else if(ke()==="Translated"||ke()==="Error"){let e={};ee&&ee.state&&(e=ee.state),ee=await rt(Le(),e),ee.state.translationArea!=="body"?(ee.state.translationArea="body",ee=await rt(Le(),ee.state),await wt(ee)):Eu()}}async function Kl(){ee=await rt(Le(),{translationStartMode:"immediate"}),await wt(ee)}async function Vr(){let e=await rt(Le(),{});if(A.debug("init page ctx",e),e.rule.isSubtitleBuilder){Ls(e);return}if(e.rule.isEbookBuilder){hm(e);return}if(e.rule.isPdf){await mm(e);return}eo||(eo=e.state.translationMode),pn||(pn=e.state.translationTheme),e.rule.urlChangeDelay&&await En(e.rule.urlChangeDelay),e.rule.waitForSelectors&&e.rule.waitForSelectors.length>0&&await N9(e.rule.waitForSelectors,e.rule.waitForSelectorsTimeout),e.rule.globalMeta&&Object.keys(e.rule.globalMeta).forEach(a=>{let r=document.createElement("meta");r.name=a,r.content=e.rule.globalMeta[a],document.head.appendChild(r)}),e.rule.initialGlobalAttributes&&Mc(document.body,e.rule.initialGlobalAttributes),e.rule.initialSelectorGlobalAttributes&&Rc(document.body,e.rule.initialSelectorGlobalAttributes);let t=e.sourceLanguage;t==="auto"?t=await Ko():bt(t);let u=e.state.isAutoTranslate||e.isTranslateUrl||e.rule.isPdf;if(!u&&!e.isTranslateExcludeUrl&&(A.debug(`detect page language: ${e.url} ${t}`),Xt(t,e.targetLanguage)||t==="auto"||i4(t,e.config.translationLanguagePattern)&&(u=!0,A.debug(`match language pattern ${t}, auto translate`))),e.rule.isEbookBuilder&&(u=!1),!e.rule.isPdf&&Dn()&&Qr(e,window),u)ee.state.isAutoTranslate=!0,wt(ee);else if(A.debug("do not auto translate",e),e.rule.initTranslationServiceAsSoonAsPossible&&e.translationService==="deepl"){if(Xt(t,e.targetLanguage)||t==="auto")return;e.config&&e.config.translationServices&&e.config.translationServices.deepl&&e.config.translationServices.deepl.authKey&&typeof e.config.translationServices.deepl.authKey=="string"&&e.config.translationServices.deepl.authKey.startsWith("immersive_")&&(Zr[e.translationService]||(Zr[e.translationService]=!0,ze()||Ai(e).catch(n=>{A.warn("init translation engine error",n)})))}}async function rt(e,t){let u=Object.keys(t);if(ee){let n={url:e,config:ee.config,state:{...ee.state,...t}};ee=await yt(n)}else{let n=await ut(),a=t;u.length===0&&(a=void 0),ee=await yt({url:e,config:n,state:a})}return ee}async function $l(){let e=await ut(),t;ee&&ee.state&&(t=ee.state);let u={url:Le(),config:e,state:t},n=await yt(u);ee=n;let a=Ar(),r=[];return a?r=a.allInlineWindows||[window]:r=[window],r.forEach(i=>{Jn(n,i),Dn()&&Qr(n,i)}),n}function N9(e,t=3e3){return new Promise((u,n)=>{let a=t?setTimeout(()=>{u(new Error("timeout"))},t):void 0,r=setInterval(()=>{e.every(o=>document.querySelector(o)!==null)&&(clearInterval(r),a&&clearTimeout(a),u(null))},50)})}async function km(e){if(!e){let u=await ut();e=await yt({config:u,url:Le()})}e.config.debug?A.setLevel("debug"):A.setLevel("info"),globalThis.top!=globalThis.self||await Wd().catch(u=>{A.error(`init popup page error: ${u}`)}),e.isTranslateExcludeUrl||(e.rule.isEbook||e.rule.isEbookBuilder||await Vr(),globalThis.top===globalThis.self&&Od())}var Yn={capture:!0,once:!0,passive:!0},Sm=()=>document.readyState==="interactive"||document.readyState==="complete",j9=e=>document.readyState===e,Xn=(e,t)=>j9(e)||Sm()?(t(e),!0):!1,z9=()=>new Promise(e=>{Xn("loading",e)||document.addEventListener("readystatechange",()=>{document.readyState==="loading"&&e("loading")},Yn)}),H9=()=>new Promise(e=>{Xn("interactive",e)||document.addEventListener("readystatechange",()=>{document.readyState==="interactive"&&e("interactive")},Yn)}),U9=()=>new Promise(e=>{Xn("complete",e)||document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&e("complete")},Yn)}),Am=()=>new Promise(e=>{Xn("domready",e)||document.addEventListener("DOMContentLoaded",()=>{e("domready")},Yn)}),Dm=()=>new Promise(e=>{Xn("load",e)||window.addEventListener("load",()=>{e("load")},Yn)}),Fm={};Object.defineProperties(Fm,{state:{get:function(){return document.readyState}},loading:{get:function(){return z9()}},interactive:{get:function(){return H9()}},complete:{get:function(){return U9()}},window:{get:function(){return Dm()}},load:{get:function(){return Dm()}},domready:{get:function(){return Am()}},dom:{get:function(){return Am()}},ready:{get:function(){return Sm()}}});var Pm=Fm;var Bm={NOT_FUNCTION:"Your executor is not a function. functions and promises are valid.",FAILED_TO_WAIT:"Failed to wait"};function W9(e){return async()=>await e()}function q9(e){if(typeof e!="function")throw new Error(Bm.NOT_FUNCTION)}var Us=class{constructor({interval:t=100,timeout:u=1e3,stopOnFailure:n=!1,verbose:a=!1,backoffFactor:r=1,backoffMaxInterval:i,message:o=""}={}){this._interval=t,this._timeout=u,this._stopOnFailure=n,this._isWaiting=!1,this._isResolved=!1,this._verbose=a,this._userMessage=o,this.originalStacktraceError=new Error,this._Console=console,this._backoffFactor=r,this._backoffMaxInterval=i||u,this.start=+Date.now()}tryEvery(t){return this._interval=t,this}stopAfter(t){return this._timeout=t,this}execute(t){return this._applyPromiseHandlers(),q9(t),this._executeFn=W9(t),this.start=Date.now(),this._isWaiting=!0,this._log("starting to execute"),this._runFunction(),this.promise}getPromise(){return this.promise}isResolved(){return this._isResolved}isWaiting(){return this._isWaiting}stopOnFailure(t){return this._stopOnFailure=t,this}_applyPromiseHandlers(){this.promise=new Promise((t,u)=>{this.resolve=t,this.reject=u})}_timeFromStart(){return Date.now()-this.start}_shouldStopTrying(){return this._timeFromStart()>this._timeout}_executeAgain(){this._log("executing again");let t=this._interval,u=t*this._backoffFactor;this._interval=u>this._backoffMaxInterval?this._backoffMaxInterval:u,setTimeout(this._runFunction.bind(this),t)}_failedToWait(){let t=`${Bm.FAILED_TO_WAIT} after ${this._timeFromStart()}ms`;if(this._userMessage&&(t=`${t}: ${this._userMessage}`),this._lastError){this._lastError.message=`${t}
${this._lastError.message}`;let u=this.originalStacktraceError.stack;u&&(this._lastError.stack+=u.substring(u.indexOf(`
`)+1))}else this._lastError=this.originalStacktraceError,this._lastError.message=t;return this._log(this._lastError),this._lastError}_runFunction(){if(this._shouldStopTrying()){this._isWaiting=!1,this.reject?.(this._failedToWait());return}this._executeFn().then(t=>{if(t===!1){this._log(`then execute again with result: ${t}`),this._executeAgain();return}this.resolve?.(t),this._isWaiting=!1,this._isResolved=!0,this._log(`then done waiting with result: ${t}`)}).catch(t=>this._stopOnFailure?(this._log(`stopped on failure with err: ${t}`),this.reject?.(t)):(this._lastError=t,this._log(`catch with err: ${t}`),this._executeAgain()))}_log(t){this._verbose&&this._Console&&this._Console.log&&this._Console.log(t)}},Lm=(e,t)=>new Us(t).execute(e);async function _m(e){try{return await Lm(()=>{let u=e.mainFrame.innerText||"";if(Hn(u,e.rule.mainFrameMinTextCount,e.rule.mainFrameMinWordCount))return!0;throw new Error("there is no main text")},{timeout:5e3}),!0}catch(t){if(ze())throw t;return A.debug("check dom element ready failed:",t,e),!0}}function Mm(){let e=document.querySelector("meta[name=immersive-translate-options]");return!!(e&&e.getAttribute("content")==="true")}async function Om(){if(!document.getElementById("immersive-translate-status")){A.error("Could not find status element");return}await Rm("local"),await Rm("sync"),$9();let t=document.getElementById("immersive-translate-page-ready");t&&setTimeout(()=>{t.value="true",t.dispatchEvent(new Event("change"))},100)}async function K9(e,t){let u;try{u=JSON.parse(e.detail)}catch(a){A.error("parse detail failed",a);return}let n=u.id||"default";try{let a=u.data||{},r=await t(a),i={id:n,ok:!0,data:r};document.dispatchEvent(new CustomEvent(ca,{detail:JSON.stringify({...i,type:"answer"})}))}catch(a){let r={ok:!1,errorName:a.name,errorMessage:a.message,errorDetails:a.details||a.detail};document.dispatchEvent(new CustomEvent(ca,{detail:JSON.stringify({...r,id:n,type:"answer"})}))}}function $9(){document.addEventListener(la,n=>{let a=n;if(A.debug("document message",a),a&&a.detail){let r;try{r=JSON.parse(a.detail)}catch(i){A.error("parse detail failed",i);return}r.type==="ask"?r.method==="request"&&K9(a,H):r.type==="tell"&&r.method==="updateCommands"&&$a(r.data)}});let e=document.getElementById("immersive-translate-manifest");if(!e){A.error("Could not find manifest element");return}let t=q.runtime.getManifest();Tt()&&(t._isSafari=!0),e.value=JSON.stringify(t),e.dispatchEvent(new Event("change")),document.getElementById("immersive-translate-message").addEventListener("change",n=>{try{let a=JSON.parse(n.target.value);a&&a.method==="removeStorageKey"&&a.data&&a.data.area&&a.data.keys&&q.storage[a.data.area].remove(a.data.keys)}catch(a){A.error("parse message error",a)}})}async function Rm(e){let t=document.getElementById("immersive-translate-status"),u=document.getElementById(`immersive-translate-${e}-storage`);if(u){A.debug("init storage");let n=await q.storage[e].get(null);u.value=JSON.stringify(n),u.dispatchEvent(new Event("change")),u.addEventListener("change",a=>{try{let r=JSON.parse(a.target.value);q.storage[e].set(r)}catch(r){A.error("save to storage error",r)}})}else{A.error(`Could not find storage ${e} element`),t.innerText="Could not find storage local input element";return}}async function G9(){let e=await hu(),t=Le(),u=await yt({config:e,url:t});Ct("init_page_daily",[{name:"init_page_daily"}],u),Pm.domready.then(()=>{if(u.isTranslateExcludeUrl&&Mm())A.debug("detect web options page"),Jn(u,window),Om();else{if(!u.config.enabled||ru(u.url,u.config.blockUrls))return;Jn(u,window),_m(u).then(()=>{km(u).catch(a=>{a&&A.error("translate page error",a.name,a.message,a.details||"",a)})}).catch(a=>{A.debug("can not detect a valid body: ",a)})}}).catch(n=>{n&&A.error("translate dom ready detect error",n)})}G9().catch(e=>{A.error("init error",e)});})();
/*! Bundled license information:

bowser/src/bowser.js:
  (*!
   * Bowser - a browser detector
   * https://github.com/lancedikson/bowser
   * MIT License | (c) Dustin Diaz 2012-2015
   * MIT License | (c) Denis Demchenko 2015-2019
   *)
*/
