var Hf=Object.defineProperty;var Bf=(e,t)=>{for(var n in t)Hf(e,n,{get:t[n],enumerable:!0})};var b={BUILD_TIME:"2023-02-06T07:57:19.472Z",VERSION:"0.2.49",PROD:"1",DEEPL_PROXY_ENDPOINT:"https://deepl.immersivetranslate.com/v2/translate",IMMERSIVE_TRANSLATE_INJECTED_CSS:`.immersive-translate-target-translation-pre-whitespace {
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
`,MOCK:"0",DEBUG:"0"};var $f=Object.create,Di=Object.defineProperty,jf=Object.getOwnPropertyDescriptor,Oi=Object.getOwnPropertyNames,Wf=Object.getPrototypeOf,zf=Object.prototype.hasOwnProperty,qf=(e,t)=>function(){return t||(0,e[Oi(e)[0]])((t={exports:{}}).exports,t),t.exports},Vf=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Oi(t))!zf.call(e,a)&&a!==n&&Di(e,a,{get:()=>t[a],enumerable:!(r=jf(t,a))||r.enumerable});return e},Kf=(e,t,n)=>(n=e!=null?$f(Wf(e)):{},Vf(t||!e||!e.__esModule?Di(n,"default",{value:e,enumerable:!0}):n,e)),Gf=qf({"esm-build-3120606719048d5175703f3b3f8812d3453a0d07-9fbf1061/node_modules/webextension-polyfill/dist/browser-polyfill.js"(e,t){(function(n,r){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],r);else if(typeof e<"u")r(t);else{var a={exports:{}};r(a),n.browser=a.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:e,function(n){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let r="The message port closed before a response was received.",a=o=>{let i={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(i).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class s extends WeakMap{constructor(w,E=void 0){super(E),this.createItem=w}get(w){return this.has(w)||this.set(w,this.createItem(w)),super.get(w)}}let l=A=>A&&typeof A=="object"&&typeof A.then=="function",u=(A,w)=>(...E)=>{o.runtime.lastError?A.reject(new Error(o.runtime.lastError.message)):w.singleCallbackArg||E.length<=1&&w.singleCallbackArg!==!1?A.resolve(E[0]):A.resolve(E)},c=A=>A==1?"argument":"arguments",f=(A,w)=>function(v,...O){if(O.length<w.minArgs)throw new Error(`Expected at least ${w.minArgs} ${c(w.minArgs)} for ${A}(), got ${O.length}`);if(O.length>w.maxArgs)throw new Error(`Expected at most ${w.maxArgs} ${c(w.maxArgs)} for ${A}(), got ${O.length}`);return new Promise(($,_)=>{if(w.fallbackToNoCallback)try{v[A](...O,u({resolve:$,reject:_},w))}catch(N){console.warn(`${A} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,N),v[A](...O),w.fallbackToNoCallback=!1,w.noCallback=!0,$()}else w.noCallback?(v[A](...O),$()):v[A](...O,u({resolve:$,reject:_},w))})},m=(A,w,E)=>new Proxy(w,{apply(v,O,$){return E.call(O,A,...$)}}),g=Function.call.bind(Object.prototype.hasOwnProperty),d=(A,w={},E={})=>{let v=Object.create(null),O={has(_,N){return N in A||N in v},get(_,N,z){if(N in v)return v[N];if(!(N in A))return;let W=A[N];if(typeof W=="function")if(typeof w[N]=="function")W=m(A,A[N],w[N]);else if(g(E,N)){let be=f(N,E[N]);W=m(A,A[N],be)}else W=W.bind(A);else if(typeof W=="object"&&W!==null&&(g(w,N)||g(E,N)))W=d(W,w[N],E[N]);else if(g(E,"*"))W=d(W,w[N],E["*"]);else return Object.defineProperty(v,N,{configurable:!0,enumerable:!0,get(){return A[N]},set(be){A[N]=be}}),W;return v[N]=W,W},set(_,N,z,W){return N in v?v[N]=z:A[N]=z,!0},defineProperty(_,N,z){return Reflect.defineProperty(v,N,z)},deleteProperty(_,N){return Reflect.deleteProperty(v,N)}},$=Object.create(A);return new Proxy($,O)},T=A=>({addListener(w,E,...v){w.addListener(A.get(E),...v)},hasListener(w,E){return w.hasListener(A.get(E))},removeListener(w,E){w.removeListener(A.get(E))}}),y=new s(A=>typeof A!="function"?A:function(E){let v=d(E,{},{getContent:{minArgs:0,maxArgs:0}});A(v)}),p=new s(A=>typeof A!="function"?A:function(E,v,O){let $=!1,_,N=new Promise(Me=>{_=function(xe){$=!0,Me(xe)}}),z;try{z=A(E,v,_)}catch(Me){z=Promise.reject(Me)}let W=z!==!0&&l(z);if(z!==!0&&!W&&!$)return!1;let be=Me=>{Me.then(xe=>{O(xe)},xe=>{let ae;xe&&(xe instanceof Error||typeof xe.message=="string")?ae=xe.message:ae="An unexpected error occurred",O({__mozWebExtensionPolyfillReject__:!0,message:ae})}).catch(xe=>{console.error("Failed to send onMessage rejected reply",xe)})};return be(W?z:N),!0}),h=({reject:A,resolve:w},E)=>{o.runtime.lastError?o.runtime.lastError.message===r?w():A(new Error(o.runtime.lastError.message)):E&&E.__mozWebExtensionPolyfillReject__?A(new Error(E.message)):w(E)},x=(A,w,E,...v)=>{if(v.length<w.minArgs)throw new Error(`Expected at least ${w.minArgs} ${c(w.minArgs)} for ${A}(), got ${v.length}`);if(v.length>w.maxArgs)throw new Error(`Expected at most ${w.maxArgs} ${c(w.maxArgs)} for ${A}(), got ${v.length}`);return new Promise((O,$)=>{let _=h.bind(null,{resolve:O,reject:$});v.push(_),E.sendMessage(...v)})},L={devtools:{network:{onRequestFinished:T(y)}},runtime:{onMessage:T(p),onMessageExternal:T(p),sendMessage:x.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:x.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},I={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return i.privacy={network:{"*":I},services:{"*":I},websites:{"*":I}},d(o,L,i)};n.exports=a(chrome)}else n.exports=globalThis.browser})}}),Jf=Kf(Gf()),{default:Ri,...Yf}=Jf,eo=Ri!==void 0?Ri:Yf;globalThis.immersiveTranslateBrowserAPI=eo;var Ii={lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",enableLineBreak:"\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u952E\u8BF7\u624B\u52A8\u8F93\u5165\uFF0C\u683C\u5F0F\u4E3A\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u817E\u8BAF/\u706B\u5C71\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.toggleTranslationMask":"\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",toggleBeta:"\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",betaDescription:"\u5F00\u542F\u540E\u4F1A\u542F\u7528\u4E00\u4E9B\u5B9E\u9A8C\u6027\u529F\u80FD\uFF0C\u4EE5\u53CA\u8FD8\u5728\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1, \u53EF\u4EE5<1>\u52A0Telegram \u7FA4\u7EC4</1>\u4E86\u89E3",translationLineBreakSettingDescription:"\u5BF9\u4E8E\u8BD1\u6587\u7684\u4F4D\u7F6E\uFF1A\u603B\u662F\u6362\u884C(\u66F4\u6574\u9F50)/\u667A\u80FD\u6362\u884C\uFF08\u5F53\u6BB5\u843D\u591A\u4E8E{count}\u4E2A\u5B57\u7B26\u624D\u6362\u884C\u663E\u793A\u8BD1\u6587\uFF0C\u66F4\u7701\u7A7A\u95F4\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1",xMinutes:"{count} \u5206\u949F",disabled:"\u7981\u7528",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5219\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",goAdvancedInterfaceSettings:"\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u8BF7\u5F00\u53D1\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u5F00\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u7ACB\u5373\u7FFB\u8BD1\u7F51\u9875\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\u53BB\u7FFB\u8BD1\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF1F","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u6240\u6709\u533A\u57DF",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u4E4B\u540E\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",badUserscriptBrowser:"\u8BE5\u6D4F\u89C8\u5668\u672A\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u7684\u63A5\u53E3\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334</1>\u7684\u6D4F\u89C8\u5668\u5982(Firefox Nightly \u7248\u672C)",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",needActionForOptions:"(\u9700\u8BBE\u7F6E)",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1{language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA",import_export_title:"\u5BFC\u5165/\u5BFC\u51FA\u914D\u7F6E",syncToGoogleDrive:"\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65","translationTheme.none":"\u65E0","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDashed":"\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDotted":"\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.nativeUnderline":"\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.wavy":"\u6CE2\u6D6A\u7EBF","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeeplX(Beta)","translationServices.bing":"\u5FC5\u5E94\u7FFB\u8BD1","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.volcAlpha":"\u706B\u5C71 (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.niu":"\u5C0F\u725B\u7FFB\u8BD1","translationServices.d":"D (Alpha)","translationServices.dpro":"D Pro (Canary)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u7FFB\u8BD1\u8BE5\u6BB5\u843D",enableUserscriptPagePopup:"\u603B\u662F\u5728\u9875\u9762\u4E0A\u5C55\u793A Popup \u6D6E\u7A97",enableUserscriptPagePopupDescription:"\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u524D\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\u4E3A\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u8BA9\u67D0\u4E9B\u7F51\u7AD9\u4F7F\u7528\u8BE5\u6837\u5F0F\uFF0C\u70B9\u51FB\u53F3\u8FB9\u7684\u6309\u94AE\u6DFB\u52A0\u540E\uFF0C\u518D\u5207\u6362\u5230\u53E6\u4E00\u79CD\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\uFF0C\u8FD9\u6837\u5373\u53EF\u5B9E\u73B0\u4E0D\u540C\u7F51\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8BD1\u6587\u6837\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00",isShowContextMenu:"\u521B\u5EFA\u53F3\u952E\u83DC\u5355",syncToCloud:"\u540C\u6B65\u5230\u4E91\u7AEF",syncToCloudDescription:"\u5F00\u542F\u540E\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668/\u6CB9\u7334\u811A\u672C\u4E4B\u95F4\u540C\u6B65\u914D\u7F6E,\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",authFail:"\u6388\u6743\u5931\u8D25",syncTitle:"\u624B\u52A8\u5907\u4EFD\u7BA1\u7406",import_hint:"\u5BFC\u5165",upload:"\u4E0A\u4F20",revokeAuth:"\u64A4\u9500\u6388\u6743",uploadFail:"\u4E0A\u4F20\u5931\u8D25",download:"\u4E0B\u8F7D",importSuccess:"\u5BFC\u5165\u6210\u529F",importFail:"\u5BFC\u5165\u5931\u8D25",deleteFail:"\u5220\u9664\u5931\u8D25",backupToCloud:"\u624B\u52A8\u7BA1\u7406\u5907\u4EFD\u6587\u4EF6",create_new_backup:"\u65B0\u589E\u5907\u4EFD\u8282\u70B9",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5907\u4EFD{count}\u4E2A\u4E0D\u540C\u7684\u8282\u70B9, \u8BF7\u5220\u9664\u4E0D\u9700\u8981\u7684\u8282\u70B9",backupToCloudDescription:"\u624B\u52A8\u4E0A\u4F20\u6216\u6062\u590D\u5907\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8BB83\u4E2A\u4E0D\u540C\u7684\u5907\u4EFD",successSyncConfig:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u8D25",updatedAt:"\u66F4\u65B0\u4E8E {date}",lastSyncedAt:"\u4E0A\u6B21\u68C0\u67E5\u4E8E {date}",downloadFail:"\u4E0B\u8F7D\u5931\u8D25",clickToDownload:"\u70B9\u51FB\u4E0B\u8F7D",aboutLabel:"\u5173\u4E8E - \u53CD\u9988 - \u8D5E\u52A9","browser.openAboutPage":"\u5173\u4E8E/\u53CD\u9988/\u8D5E\u52A9",aboutIntro:"\u8BE5\u6269\u5C55\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F <br/><br/>\u611F\u8C22\u8FD9\u4E9B<1>\u8D5E\u52A9\u8005\u4EEC</1>, \u7531\u4E8E\u4ED6/\u5979\u4EEC\u7684\u652F\u6301\uFF0C\u66F4\u591A\u7684\u4EBA\u53EF\u4EE5\u5B8C\u5168\u514D\u8D39\u5730\u4F7F\u7528\u8FD9\u4E2A\u5DE5\u5177\u3002\u5982\u679C\u6709\u4F59\u529B\uFF0C\u4F60\u53EF\u4EE5<2>\u70B9\u51FB\u8FD9\u91CC\u8D5E\u52A9</2> \u6211\u7684\u5DE5\u4F5C\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u5173\u6CE8\u6211\u7684<3>\u63A8\u7279</3>\u548C<4>Telegram \u9891\u9053</4>\u83B7\u53D6\u6700\u65B0\u66F4\u65B0\u3002",projectHomepage:"\u9879\u76EE\u4E3B\u9875",joinTelegramGroup:"\u52A0\u5165 Telegram \u7FA4\u53C2\u4E0E\u529F\u80FD\u8BA8\u8BBA",feedbackAndJoin:"\u95EE\u9898\u53CD\u9988/\u52A0\u7FA4",autoSync:"\u81EA\u52A8\u5B9A\u65F6\u540C\u6B65",loadingThemeTitle:"Loading \u6837\u5F0F",loadingThemeDescription:"\u8BBE\u7F6E\u7B49\u5F85\u8BD1\u6587\u52A0\u8F7D\u65F6\u7684\u6837\u5F0F","loadingTheme.spinner":"\u8F6C\u5708\u52A8\u753B Spinner","loadingTheme.text":"\u9759\u6001\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u663E\u793A",developerDescription:"\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863",successSyncButNoChange:"\u5F53\u524D\u914D\u7F6E\u4E0E\u4E91\u7AEF\u4E00\u81F4"};var Ni={lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u7B26\u6578\u91CF","translate-pdf":"\u9EDE\u64CA\u7FFB\u8B6FPDF","translate-firefox-local-pdf":"\u9EDE\u64CA\u4E0A\u50B3PDF",enableLineBreak:"\u662F\u5426\u958B\u5553\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",help:"\u5E6B\u52A9",browserShortcutsNoteForFirefox:"Firefox\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u6377\u9375\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762`about:addons`\uFF0C\u7136\u5F8C\u9EDE\u64CA\u300C\u8A2D\u7F6E\u300D\uFF0C\u518D\u9EDE\u64CA\u300C\u7BA1\u7406\u5FEB\u6377\u9375\u300D\u5373\u53EF\u8A2D\u7F6E",browserShortcutsNoteForChrome:"\u985EChrome\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u7D50\u75C2\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u2019\u7BA1\u7406\u5FEB\u6377\u9375\u2018\u9762\u677F\uFF08\u2019chrome://extensions/shortcuts\u2018\uFF09\u8A2D\u7F6E\uFF0C\u9EDE\u64CA\u4E0B\u65B9\u6309\u9215\u8DF3\u8F49\u5230\u5FEB\u6377\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u9375\u8ACB\u624B\u52D5\u8F38\u5165\uFF0C\u683C\u5F0F\u7232\uFF1A",enableLineBreakDescription:"\u958B\u5553\u5F8C\uFF0C\u8B1B\u6703\u5728\u9577\u77ED\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u7B26\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u958B\u8A2D\u7F6E\u9801","browser.toggleTranslationMask":"\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u5730 PDF \u6587\u4EF6",confirmResetConfig:"\u4F60\u78BA\u5B9A\u8981\u91CD\u8F09\u8A2D\u7F6E\u55CE?",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",toggleBeta:"\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",betaDescription:"\u5F00\u542F\u540E\u4F1A\u542F\u7528\u4E00\u4E9B\u5B9E\u9A8C\u6027\u529F\u80FD\uFF0C\u4EE5\u53CA\u8FD8\u5728\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1, \u53EF\u4EE5<1>\u52A0Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u5185\u6D4B\u7684\u7279\u6027\u3002",translationLineBreakSettingDescription:"\u5BF9\u4E8E\u8BD1\u6587\u7684\u4F4D\u7F6E\uFF1A\u603B\u662F\u6362\u884C/\u667A\u80FD\u6362\u884C\uFF08\u5F53\u6BB5\u843D\u591A\u4E8E{count}\u4E2A\u5B57\u7B26\u624D\u6362\u884C\u663E\u793A\u8BD1\u6587\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1",xMinutes:"{count} \u5206\u949F",disabled:"\u505C\u7528",changelog:"\u66F4\u65B0\u65E5\u8A8C",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u4E09\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165\u914D\u7F6E",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u6AAF\u6253\u5370\u8ABF\u8A66\u65E5\u8A8C","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",document:"\u6587\u6A94",resetSuccess:"\u885D\u7F6E\u6240\u6709\u8A2D\u7F6E\u6210\u529F",saved:"\u6210\u529F\u5132\u5B58",successImportConfig:"\u6210\u529F\u532F\u5165\u8A2D\u5B9A",goAdvancedSettings:"\u53BB\u9032\u968E\u8A2D\u7F6E\u9801",goAdvancedInterfaceSettings:"\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",advanced:"\u9032\u968E\u8A2D\u7F6E",advancedDescription:"\u4E00\u4E9B\u96E3\u4EE5\u7406\u89E3\u7684\u8A2D\u7F6E\u9805\uFF08\u4E00\u822C\u7121\u9700\u8A2D\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8A8D\u5373\u53EF\uFF09",developer:"\u958B\u767C\u8005\u8A2D\u7F6E",donateCafe:"\u8ACB\u958B\u767C\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u958B\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u53CD\u994B",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u958B\u5553\u5F8C\uFF0C\u5C07\u6703\u7ACB\u5373\u7FFB\u8B6F\u7DB2\u9801\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\uFF0C\u800C\u4E0D\u662F\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u958B\u5553\u5F8C\uFF0C\u6574\u500B\u7DB2\u9801\u7684\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\uFF0C\u800C\u4E0D\u662F\u9ED8\u8A8D\u7684\u667A\u80FD\u8B58\u5225\u4E3B\u8981\u5340\u57DF\u53BB\u7FFB\u8B6F\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u500B\u5B57\u7B26\u7121\u9700\u7B49\u5F85\u6EFE\u52D5\u5230\u53EF\u8996\u5340\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8B6F\uFF1F","interface language":"\u754C\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u6377\u9375",modify:"\u4FEE\u6539\u5FEB\u6377\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u4E3B\u9801",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u5730\u9069\u914D\u898F\u5247\u5DF2\u662F\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9069\u914D\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9069\u914D\u898F\u5247",localVersionIsTooOld:"\u672C\u5730\u64F4\u5C55\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u64F4\u5C55\u5230{minVersion} \u6216\u4E4B\u5F8C\u7684\u7248\u672C\u5F8C\u518D\u5617\u8A66\u540C\u6B65",badUserscriptBrowser:"\u8BE5\u6D4F\u89C8\u5668\u672A\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u7684\u63A5\u53E3\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334</1>\u7684\u6D4F\u89C8\u5668\u5982(Firefox Nightly \u7248\u672C)",foundNewVersion:"\u767C\u73FE\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u7576\u524D\u64F4\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9069\u914D\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u885D\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u7576\u524D\u898F\u5247\u7248\u672C",calculating:"\u8A08\u7B97\u4E2D",unknownError:"\u672A\u77E5\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u7372\u53D6\u9060\u7A0B\u898F\u5247",enableAlphaSuccess:"\u5DF2\u958B\u5553Alpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u95DC\u9589Alpha\u529F\u80FD",cacheSize:"\u7DE9\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7DE9\u5B58",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"\uFF08\u53BB\u8A2D\u7F6E\uFF09",goSettings:"\u53BB\u8A2D\u7F6E",needActionForOptions:"\uFF08\u53BB\u8A2D\u7F6E\uFF09",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u5C0D\u65BC\u8A72\u7DB2\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F{language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",add:"\u589E\u52A0",default:"\u9ED8\u8A8D",forThisLanguage:"\u5C0D\u65BC\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u4ED6\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u7F6E\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4E00\u9805\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u7FFB\u8B6F\u4E2D",Error:"\u932F\u8AA4",allowCacheTranslations:"\u958B\u555F\u672C\u5730\u7FFB\u8B6F\u7DE9\u5B58\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8ACB\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8A2D\u7F6E",import_export:"\u5C0E\u5165/\u5C0E\u51FA",import_export_title:"\u5C0E\u5165/\u5C0E\u51FA",syncToGoogleDrive:"\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65","translationTheme.none":"\u7121","translationTheme.dashed":"\u865B\u7DDA\u4E0B\u5283\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u4E0B\u5283\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u908A\u6846","translationTheme.underline":"\u76F4\u7DDA\u4E0B\u5283\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7DDA","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u865B\u7DDA\u4E0B\u5283\u7DDA","translationTheme.nativeDashed":"\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDotted":"\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.nativeUnderline":"\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.wavy":"\u6CE2\u6D6A\u7DDA","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6\uFF08Alpha\uFF09","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u61C9\u7FFB\u8B6F","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"\u5FAE\u8EDF\u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.niu":"\u5C0F\u725B\u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u7FFB\u8BD1\u8BE5\u6BB5\u843D",enableUserscriptPagePopup:"\u603B\u662F\u5728\u9875\u9762\u4E0A\u5C55\u793A Popup \u6D6E\u7A97",enableUserscriptPagePopupDescription:"\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/\u4E09\u6307\u89E6\u5C4F\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u5BC6\u9470\u5F8C\u624D\u53EF\u7528\uFF0C\u8A73\u60C5\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u9470\u7533\u8ACB\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u7576\u524D\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\u70BA\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8A2D\u7F6E\u70BA\u8B93\u67D0\u4E9B\u7DB2\u7AD9\u4F7F\u7528\u8A72\u6A23\u5F0F\uFF0C\u9EDE\u64CA\u53F3\u908A\u7684\u6309\u9215\u6DFB\u52A0\u5F8C\uFF0C\u518D\u5207\u63DB\u5230\u53E6\u4E00\u7A2E\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\uFF0C\u9019\u6A23\u5373\u53EF\u5BE6\u73FE\u4E0D\u540C\u7DB2\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8B6F\u6587\u6A23\u5F0F\u3002",currentUrl:"\u7576\u524D\u7DB2\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C\u8A9E\u8A00",isShowContextMenu:"\u5275\u5EFA\u53F3\u9375\u83DC\u55AE",syncToCloud:"\u540C\u6B65\u5230\u96F2\u7AEF",syncToCloudDescription:"\u540C\u6B65\u65F6\u4F1A\u6BD4\u8F83\u672C\u5730\u548C\u4E91\u7AEF\u914D\u7F6E\u7684\u6700\u540E\u4FEE\u6539\u65F6\u95F4\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",authFail:"\u6388\u6B0A\u5931\u6557",syncTitle:"\u8ACB\u9078\u64C7\u6587\u4EF6\u64CD\u4F5C",import_hint:"\u5C0E\u5165",upload:"\u4E0A\u50B3",revokeAuth:"\u64A4\u92B7\u6388\u6B0A",uploadFail:"\u4E0A\u50B3\u5931\u6557",download:"\u4E0B\u8F09",importSuccess:"\u5C0E\u5165\u6210\u529F",importFail:"\u5C0E\u5165\u5931\u6557",deleteFail:"\u522A\u9664\u5931\u6557",backupToCloud:"\u624B\u52D5\u7BA1\u7406\u5099\u4EFD\u6587\u4EF6",create_new_backup:"\u65B0\u589E\u5099\u4EFD\u7BC0\u9EDE",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5099\u4EFD{count}\u500B\u4E0D\u540C\u7684\u7BC0\u9EDE, \u8ACB\u522A\u9664\u4E0D\u9700\u8981\u7684\u7BC0\u9EDE",backupToCloudDescription:"\u624B\u52D5\u4E0A\u50B3\u6216\u6062\u5FA9\u5099\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8A313\u500B\u4E0D\u540C\u7684\u5099\u4EFD",successSyncConfig:"\u6210\u529F\u8207\u96F2\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u6557",updatedAt:"\u66F4\u65B0\u65BC {date}",lastSyncedAt:"\u4E0A\u6B21\u6AA2\u67E5\u65BC {date}",downloadFail:"\u4E0B\u8F09\u5931\u6557",clickToDownload:"\u9EDE\u64CA\u4E0B\u8F09",aboutLabel:"\u95DC\u65BC - \u53CD\u994B - \u8D0A\u52A9","browser.openAboutPage":"\u95DC\u65BC/\u53CD\u994B/\u8D0A\u52A9",aboutIntro:"\u8A72\u64F4\u5C55\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u4E92\u806F\u7DB2\u4E0A\u5DE8\u5927\u7684\u5916\u8A9E\u4FE1\u606F \u2764\uFE0F <br/><br/>\u611F\u8B1D\u9019\u4E9B<1>\u8D0A\u52A9\u8005\u5011</1>, \u7531\u65BC\u4ED6/\u5979\u5011\u7684\u652F\u6301\uFF0C\u66F4\u591A\u7684\u4EBA\u53EF\u4EE5\u5B8C\u5168\u514D\u8CBB\u5730\u4F7F\u7528\u9019\u500B\u5DE5\u5177\u3002\u5982\u679C\u6709\u9918\u529B\uFF0C\u4F60\u53EF\u4EE5<2>\u9EDE\u64CA\u9019\u88E1\u8D0A\u52A9</2> \u6211\u7684\u5DE5\u4F5C\uFF0C\u4F60\u9084\u53EF\u4EE5\u95DC\u6CE8\u6211\u7684<3>\u63A8\u7279</3>\u548C<4>Telegram \u983B\u9053</4>\u7372\u53D6\u6700\u65B0\u66F4\u65B0\u3002",projectHomepage:"\u9805\u76EE\u4E3B\u9801",joinTelegramGroup:"\u52A0\u5165 Telegram \u7FA4\u53C3\u8207\u529F\u80FD\u8A0E\u8AD6",feedbackAndJoin:"\u554F\u984C\u53CD\u994B/\u52A0\u7FA4",autoSync:"\u81EA\u52D5\u5B9A\u6642\u540C\u6B65",loadingThemeTitle:"Loading \u6A23\u5F0F",loadingThemeDescription:"\u8A2D\u7F6E\u7B49\u5F85\u8B6F\u6587\u52A0\u8F09\u6642\u7684\u6A23\u5F0F","loadingTheme.spinner":"\u8F49\u5708\u52D5\u756B Spinner","loadingTheme.text":"\u975C\u614B\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u986F\u793A",developerDescription:"\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863"};var Fi={lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","translate-firefox-local-pdf":"Click to upload Pdf",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.brandName":"Immersive Translate","browser.brandDescription":"Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.","browser.toggleTranslatePage":"Toggle translate webpage ","browser.toggleTranslateTheWholePage":"Toggle translate the whole page","browser.toggleTranslateToThePageEndImmediately":"Toggle translate to the bottom of the page immediately","browser.toggleTranslateTheMainPage":"Toggle translate the main page","browser.openOptionsPage":"Open Settings Page","browser.toggleTranslationMask":"Toggle translation mask style","browser.translateLocalPdfFile":"Translate local PDF files",confirmResetConfig:"Are you sure you want to reset the settings?",translationLineBreakSettingTitle:"Line break setting",smartLineBreak:"Smart Wrap",alwaysLineBreak:"Always Wrap",toggleBeta:"\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",betaDescription:"\u5F00\u542F\u540E\u4F1A\u542F\u7528\u4E00\u4E9B\u5B9E\u9A8C\u6027\u529F\u80FD\uFF0C\u4EE5\u53CA\u8FD8\u5728\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1, \u53EF\u4EE5<1>\u52A0Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u5185\u6D4B\u7684\u7279\u6027\u3002",translationLineBreakSettingDescription:"The position of the translation\uFF1AAlways wrap / smart wrap (the translation is displayed only when the paragraph is more than {count} characters)",tempTranslateDomainTitle:"Open the translation time temporarily",tempTranslateDomainDescription:"When a page is translated manually, turn it temporarily on as automatic translation",xMinutes:"{count} minutes",disabled:"Disable",changelog:"Change Log",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u4E09\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",addUrlDescription:"The domain name is available and wildcard is supported e.g.\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"General",clickToExpandConfig:"Expand current configuration",import:"Import configuration from file",export:"Export to file",toggleDebug:"Print debug logs on the console","fingers.0":"Close","fingers.2":"Two-finger touch","fingers.3":"Three-finger touch","fingers.4":"Four-finger touch","fingers.5":"Five-finger touch",document:"Document",resetSuccess:"All settings reset successful",saved:"Saved successfully",successImportConfig:"Configuration imported successfully",goAdvancedSettings:"Go to Advanced Settings Page",goAdvancedInterfaceSettings:"Go to Advanced Custom Settings Page",advanced:"Advanced",advancedDescription:"Some unintelligible settings (normally set without setting to default)",developer:"Developer settings",donateCafe:"Buy Me a Coffee","translate to the bottom of the page":"Whether translate to the bottom of the page once you open the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate",translateToThePageEndImmediatelyDescription:"When turned on, it will immediately translate the page from the top to the bottom, instead of translating as you read. (Not recommended to turn on)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, the entire area of the page will be translated, not the default intelligent recognition main area to translate ( not recommended)","the number of characters to be translated first":"How many characters are translated directly without waiting to scroll to the visible area for the first few characters?","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",translateTheWholePage:"Translate the whole page area (different from only the main area)",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",translateToThePageEndImmediately:"Immediately translate to the bottom (different from translating the current visible area)",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension is too old. Please upgrade to {minVersion} or then try syncing again",badUserscriptBrowser:"This browser does not correctly implement the interface of Tampermonkey. Please use other < 1 > browsers that support Tampermonkey < / 1 >, such as (Firefox Nightly version)",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",needActionForOptions:"(need to set)",translationEngine:"Engine Options",sourceLanguage:"Original language",target:"Target Language",popupSourceLanguage:"Source",popupTarget:"Target",popupService:"Service",forThisSite:"For This Site:",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export",import_export_title:"Import/Export Configuration",syncToGoogleDrive:"Sync Now with Google Drive","translationTheme.none":"None","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Maker","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationTheme.nativeDashed":"System Dash Underline","translationTheme.nativeDotted":"System Dotted Underline","translationTheme.nativeUnderline":"System Straight Line Underline","translationTheme.wavy":"Squiggle","translationServices.tencent":"Tencent Translator","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeeplX (Alpha)","translationServices.bing":"Bing translate","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Microsoft Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.transmart":"Tencent Smart Translation","translationServices.niu":"Niu Translation","translationServices.d":"DeeplX (Alpha)","translate title":"Translate page title","always languages":"Always translate the following languages",neverTranslateLanguagesLabel:"Never Translated Languages",neverTranslateTheFollowingLanguagesDescription:"Automatically skip translating the paragraph when languages are the followings",enableUserscriptPagePopup:"Always show Popup windows on the page",enableUserscriptPagePopupDescription:"\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/\u4E09\u6307\u89E6\u5C4F\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"The current default translation style is \u300C{theme}\u300D, you can also set it to let some websites use this style, click the button on the right to add it, and then switch to another default translation style, so that you can use different translation styles for different websites.",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language",isShowContextMenu:"Create right button menu",syncToCloud:"Sync to cloud",syncToCloudDescription:"When syncing it will compare the last modification time of the local and cloud configurations, whichever is the last.",authFail:"Authorization Failed",syncTitle:"Please select a file operation",import_hint:"Import",upload:"Upload",revokeAuth:"Revoke Authorization",uploadFail:"Upload Failed",download:"Download",importSuccess:"Upload Success",importFail:"Import Failed",deleteFail:"Delete Failed",backupToCloud:"Manage backup files manually",create_new_backup:"Add backup node",maxBackupFiles:"Up to{count}different nodes can be backed up. Please delete unneeded nodes",backupToCloudDescription:"Upload or restore backup files manually, up to 3 different backups",successSyncConfig:"Successfully synced with cloud",syncFail:"Synchronization failed",updatedAt:"Updated at {date}",lastSyncedAt:"Last checked at {date}",downloadFail:"Download failed",clickToDownload:"Click to download",aboutLabel:"About - Feedback - Sponsor","browser.openAboutPage":"About / Feedback/Sponsor",aboutIntro:`This extension is completely free. I hope we can get foreign information on the Internet more easily and happily. Thanks to these <1>sponsors</1>, more people can use this tool completely free of charge because of their support. 
If you have spare time, you can click here to <2>sponsor</2> my work, and you can follow my <3>Twitter</3> and <4>Telegram channels </4> for the latest updates.`,projectHomepage:"Project Homepage",joinTelegramGroup:"Join Telegram group for feature discussion",feedbackAndJoin:"Issue feedback/group",autoSync:"Auto-Time Sync",loadingThemeTitle:"Loading Style",loadingThemeDescription:"Set the style of waiting for the translation to load","loadingTheme.spinner":"Animate Spinner","loadingTheme.text":"Static Text... ","loadingTheme.none":"Disabled",developerDescription:"\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863"};var Xf=[{code:"zh-CN",messages:Ii},{code:"zh-TW",messages:Ni},{code:"en",messages:Fi}],Zt={};for(let e of Xf)Zt[e.code]=e.messages;var At="Immersive Translate",he="immersive-translate";var de="immersiveTranslate";var ry=de+"GoogleAccessToken",ay=de+"AuthFlow";var oy=de+"AuthState",kr=de+"IframeMessage",to=`${de}Container`,en=`${de}SpecifiedContainer`,Vn="buildinConfig",Kn="localConfig",no="openOptionsPage",ro="openAboutPage";var Pr=`${de}PageTranslatedStatus`,Hi=`${de}PageUrlChanged`,_t=`${de}ReceiveCommand`,sy=`${de}PopupReceiveMessage`,Rr="immersive-translate.owenyoung.com",iy=`https://${Rr}/`,Gn=`https://${Rr}/buildin_config.json`,tn=`${de}Mark`,ao="immersiveTranslateEffect",Re=`${de}Root`,oo=`data-${he}-effect`,Tn=`${de}TranslatedMark`,nn=`${de}ParagraphId`,rt=`${de}AtomicBlockMark`,ut=`${de}ExcludeMark`,Bi=`data-${he}-exclude-mark`,Dr=`${de}StayOriginalMark`,xn=`${de}PreWhitespaceMark`,Ct=`${de}InlineMark`,rn=`${de}BlockMark`,Jn=`${de}Left`,Or=`${de}Right`,ly=`${de}Width`,cy=`${de}Height`,Ui=`${de}Top`,$i=`${de}FontSize`,Yn="lastRunTime",so=`${de}GlobalStyleMark`,ji=["@","#"],Ir=" --- ",io=`
`,et=`${he}-target-wrapper`,Nr=`${he}-pdf-target-container`,Wi=`${he}-target-inner`,uy=`${he}-source-wrapper`,lo=`${he}-target-translation-block-wrapper`,gy=`${he}-root-translation-theme`,wn=`${de}RootTranslationTheme`,zi=`${he}-target-translation-vertical-block-wrapper`,qi=`${he}-target-translation-pdf-block-wrapper`,Vi=`${he}-target-translation-pre-whitespace`,co=`${he}-target-translation-inline-wrapper`;var It=["auto","en","zh-CN","zh-TW","ja","af","am","ar","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","de","el","eo","es","et","eu","fa","fi","fil","fj","fr","fy","ga","gd","gl","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","id","ig","is","it","jw","ka","kk","km","kn","ko","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","ms","mt","mww","my","ne","nl","no","ny","otq","pa","pl","ps","pt","ro","ru","sd","si","sk","sl","sm","sn","so","sq","sr","sr-Cyrl","sr-Latn","st","su","sv","sw","ta","te","tg","th","tlh","tlh-Qaak","to","tr","ty","ug","uk","ur","uz","vi","wyw","xh","yi","yo","yua","yue","zu"],uo={af:"Afrikaans",am:"Amharic",ar:"Arabic",auto:"Detect Language",az:"Azerbaijani",be:"Belarusian",bg:"Bulgarian",tn:"Zana",bn:"Bengali",bs:"Bosnian",ca:"Catalan",ceb:"Cebuano",co:"Corsican",cs:"Czech",cy:"Welsh",da:"Danish",de:"German",el:"Greek",en:"English",eo:"Esperanto",es:"Spanish",et:"Estonian",eu:"Basque",fa:"Farsi",fi:"Finnish",fil:"Filipino",fj:"Fijian",fr:"French",fy:"Frisian",ga:"Irish",gd:"Scottish Gaelic",gl:"Galician",gu:"Gujarati",ha:"Hausa",haw:"Hawaiian",he:"Hebrew",hi:"Hindi",hmn:"Hmong",hr:"Croatian",ht:"Haitian Creole",hu:"Hungarian",hy:"Armenian",id:"Indonesian",ig:"Igbo",is:"Icelandic",it:"Italian",ja:"\u65E5\u672C\u8A9E",jw:"Javanese",ka:"Georgian",kk:"Kazakh",km:"Khmer",kn:"Kannada",ko:"Korean",ku:"Kurdish",ky:"Kyrgyz",la:"Latin",lb:"Luxembourgish",lo:"Lao",lt:"Lithuanian",lv:"Latvian",mg:"Malagash",mi:"Maori",mk:"Macedonian",ml:"Malayalam",mn:"Mongolian",mr:"Marathi",ms:"Malay",mt:"Maltese",mww:"Bai Miao",my:"Burmese",ne:"Nepali",nl:"Dutch",no:"Norwegian",ny:"Nyanza (Chichewa)",otq:"Quer\xE9taro Otomi",pa:"Punjabi",pl:"Polish",ps:"Pashto",pt:"Portuguese (Portugal, Brazil)",ro:"Romanian",ru:"Russian",sd:"Sindhi",si:"Sinhala",sk:"Slovak",sl:"Slovenian",sm:"Samoan",sn:"Shona",so:"Somali",sq:"Albanian",sr:"Serbian","sr-Cyrl":"Serbian (Cyrillic)","sr-Latn":"Serbian (Latin)",st:"Sesotho",su:"Sundanese",sv:"Swedish",sw:"Swahili",ta:"Tamil",te:"Telugu",tg:"Tajik",th:"Thai",tlh:"Klingon","tlh-Qaak":"Klingon (piqaD)",to:"Tongan",tr:"Turkish",ty:"Tahiti",ug:"Uyghur",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",vi:"Vietnamese",wyw:"Classical Chinese",xh:"Bantu",yi:"Yiddish",yo:"Yoruba",yua:"Yucatan Mayan",yue:"Cantonese (Traditional)","zh-CN":"\u7B80\u4F53\u4E2D\u6587","zh-TW":"\u7E41\u9AD4\u4E2D\u6587",zu:"Zulu"};var Ki=["https://immersive-translate.owenyoung.com/options/","https://immersive-translate.owenyoung.com/auth-done/","http://localhost:8000/dist/userscript/options/","http://localhost:8000/auth-done/","http://192.168.50.9:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com"];var Fr="zh-CN";function gt(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():b}var se=gt();function me(){return se.IMMERSIVE_TRANSLATE_USERSCRIPT==="1"}function Gi(){return typeof Deno<"u"}function vn(){try{return globalThis.self!==globalThis.top}catch{return!0}}var Qf=gt(),Xn=Qf.PROD==="1";function Ji(e,t,n){let r=e.querySelectorAll("header"),a=e.querySelectorAll("main"),o=[];for(let s of r)a.length>0&&a[0].contains(s)||o.push(s);for(let s=0;s<t.length;s++){let l=t[s].element;for(let u=s+1;u<t.length;u++){let c=t[u].element;if(l.contains(c))t.splice(u,1),u--;else if(c.contains(l)){t.splice(s,1),s--;break}else l===c&&(t.splice(u,1),u--)}}return t.filter(s=>{let l=s.element;if(s.reserve)return!0;let u=!1;for(let c of o){if(_e(l.nodeName,["H1"]))continue;let f=c.querySelector("h1");if(!(f&&Zi(f.textContent||"",n.paragraphMinTextCount,n.paragraphMinWordCount))&&(l===c||c.contains(l))){u=!0;break}}return!u}).map(s=>s.element)}function Nt(e){for(let t=e.length-1;t>=0;t--){let n=e[t].element||e[t];if(typeof n!="string")return n}return null}function Hr(e){let t=[];for(let n=e.length-1;n>=0;n--){let r=e[n].element||e[n];typeof r!="string"&&t.push(r)}return t}function go(e){for(let t=0;t<e.length;t++){let n=e[t];if(typeof n!="string")return n}return null}function Qn(e,t){return e&&e.nodeType===Node.TEXT_NODE&&e.textContent&&e.textContent?.length>0?t?e.textContent:" ":null}function Ye(e,t){let n=[];for(let r of t){let a=e.querySelectorAll(r);for(let o of a)n.push(o)}return n}function Zf(e,t){let n=function(o){return o.nodeType===Node.ELEMENT_NODE||o.nodeType===Node.TEXT_NODE?o.nodeType===Node.ELEMENT_NODE&&Xe(o,t,!0)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,n),a=!0;for(;r.nextNode();){let o=r.currentNode;if(o.nodeType===Node.ELEMENT_NODE){if(ge(o,Ct)){if(a===!0)return!0;continue}if(!_e(o.nodeName,t.inlineTags))return!1}}return!0}function ft(e,t){let n=t.inlineTags;return e.nodeType===Node.ELEMENT_NODE?_e(e.nodeName,n)?ge(e,rn)||_e(e.nodeName,["BR"])?!1:ge(e,Ct)?!0:Zf(e,t):ge(e,Ct):!1}function Yi(e,t){for(let n of t)if(n===e)return!0;return!1}function Xi(e,t){return!!_e(e.nodeName,t.metaTags)}function Xe(e,t,n){if(!(e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE))return!0;let{stayOriginalTags:r,excludeTags:a}=t,o=[];return n&&a&&a.length>0?o=a||[]:o=a.filter(i=>!r.includes(i)),e.nodeType===Node.ELEMENT_NODE&&e.isContentEditable||e.nodeType===Node.ELEMENT_NODE&&(e.getAttribute("translate")==="no"||e.classList.contains("notranslate")||ge(e,ut,!0))?!0:e.nodeType===Node.ELEMENT_NODE&&ge(e,en)?!1:!!_e(e.nodeName,o)}function Qi(e,t,n,r){let a=Zn(r),o=new RegExp(`^${a[0]}(\\d+)${a[1]}$`),i=e.text,s=i.trim();return s===""||s.length===1&&s.charCodeAt(0)===8203||/^\d+(,\d+)*(\.\d+)?$/.test(i)||s.includes("</style>")||s.includes("< styles>")||po(s)||fo(s)||mo(s)||o.test(s)?!1:Zi(i,t,n)}function Zi(e,t,n){let r=e.trim();return r.length>=t||r.split(" ").length>=n}function fo(e){if(e&&e.includes("://"))try{return new URL(e),!0}catch{return!1}else return!1}function mo(e){return!!(e&&e.startsWith("#")&&e.indexOf(" ")===-1)}function po(e){return!!(e&&e.startsWith("@")&&e.indexOf(" ")===-1)}function el(e){return!!(e&&e.startsWith("$")&&e.indexOf(" ")===-1)}function ge(e,t,n=!1){return ed(e,t,"1",n)}function ed(e,t,n,r=!1){return Xn&&!r?e[Re]?!!(e[Re]&&e[Re][t]===n):!1:e.dataset[t]===n}function tl(e,t,n=!1){return Xn&&!n?e[Re]?!!(e[Re]&&e[Re][t]):!1:e.dataset[t]!==void 0}function an(e){return(e.innerText||e.textContent||"").trim()}function Br(e){return e?typeof e=="string"?document.querySelector(e)!==null:e.some(t=>document.querySelector(t)):!1}function ie(e,t,n,r=!1){e.isContentEditable||(Xn&&!r?(e.dataset[ao]||(e.dataset[ao]="1"),e[Re]||(e[Re]={}),e[Re][t]||(e[Re][t]=n)):e.dataset[t]!==n&&(e.dataset[t]=n))}function nl(e,t,n=!1){if(Xn&&!n){if(!e[Re]||!e[Re][t])return;delete e[Re][t]}else delete e.dataset[t]}function Mt(e,t,n=!1){return Xn&&!n?!e[Re]||!e[Re][t]?void 0:e[Re][t]:e.dataset[t]}function Sn(e,t){let n=!1;return(_e(e.nodeName,t.stayOriginalTags)||ge(e,Dr))&&(n=!0),n}function rl(e,t){let n=t.allBlockTags.concat(t.inlineTags).concat(t.excludeTags);return!_e(e.nodeName,n)}function Zn(e){let{config:t}=e,n=ji;return t.translationServices[e.translationService]&&t.translationServices[e.translationService].placeholderDelimiters&&(n=t.translationServices[e.translationService].placeholderDelimiters),n}function Ur(e,t){if(!t)return!1;Array.isArray(t)||(t=[t]);for(let n of t)if(e.querySelector(n))return!0;return!1}function al(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,r=>r.textContent&&r.textContent.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT),n=null;for(;t.nextNode();)n=t.currentNode;return n?n.parentElement:null}function Fe(){if(!vn())return globalThis.location.href;try{let t=globalThis.location.href;if(new URL(t).protocol==="about:"){if(globalThis.location.ancestorOrigins&&globalThis.location.ancestorOrigins.length>0)return globalThis.location.ancestorOrigins[0];let r="";try{r=globalThis.parent.location.href}catch{}return r||(globalThis.location!=globalThis.parent.location?document.referrer:document.location.href)}else return t}catch{}return globalThis.location.href}function ho(e,t){e.head.appendChild(e.createElement("style")).innerHTML=t}function bo(e){return e.getAttribute("src")?!1:!!(e.getAttribute("srcdoc")&&e.contentDocument&&e.contentDocument.body)}function _e(e,t){if(!e||!t)return!1;Array.isArray(t)||(t=[t]),e=e.toUpperCase();for(let n of t)if(e===n)return!0;return!1}function yo(e,t){let{excludeSelectors:n,additionalExcludeSelectors:r,extraInlineSelectors:a,additionalInlineSelectors:o,extraBlockSelectors:i,atomicBlockSelectors:s,atomicBlockTags:l,globalStyles:u,stayOriginalTags:c,stayOriginalSelectors:f,globalAttributes:m}=t,g=Object.keys(u);if(g.length>0)for(let v of g){let O=Ye(e,[v]);for(let $ of O)if(!ge($,so)){ie($,so,"1");let _=u[v];$.style.cssText+=_}}let d=Object.keys(m);if(d.length>0)for(let v of d){let O=m[v],$=Object.keys(O),_=Ye(e,[v]);for(let N of _)for(let z of $){let W=O[z];N.getAttribute(z)!==W&&(W===null?N.removeAttribute(z):N.setAttribute(z,W))}}let T=[...n,...r],y=[...a,...o],p=[...s],h=l.map(v=>v.toLowerCase()),x=i;Ye(e,T).forEach(v=>{ge(v,ut,!0)||ie(v,ut,"1",!0)});let I=[];if(p.length>0&&(I=Ye(e,p).filter(v=>!ge(v,rt))),h.length>0){let v=c.reduce((_,N)=>{let z=N.toLowerCase();return _.push(`<${z}>`,`</${z}>`,`<${z} />`),_},[]),O=[">http://",">https://"];v.push(...O);let $=Ye(e,h).filter(_=>{if(ge(_,rt))return!1;{let z=_.innerHTML;return!v.some(be=>z.includes(be))}});I.push(...$)}I.forEach(v=>{ge(v,rt)||ie(v,rt,"1")});let A=[];y.length>0&&A.push(...Ye(e,y)),A.forEach(v=>{ie(v,Ct,"1")});let w=[];x.length>0&&w.push(...Ye(e,x)),w.forEach(v=>{ie(v,rn,"1")});let E=[];f.length>0&&E.push(...Ye(e,f)),E.forEach(v=>{ie(v,Dr,"1")})}function ol(e,t){let n=t.matches||[];if(n&&!Array.isArray(n)&&(n=[n]),n.length===0)return!1;if(n.length>0){if(n.includes(e))return!0;for(let r of n)if(r.includes("*")&&new RegExp(r).test(e))return!0}return!1}function on(e){if(typeof e!="string")return"auto";let t=e.toLowerCase();if(t==="zh"||t==="zh-hans")return"zh-CN";if(t==="zh-hant"||t==="zh-hk")return"zh-TW";if(t==="iw")return"he";if(t==="jv")return"jw";let n=It.map(a=>a.toLowerCase()),r=n.indexOf(t);if(r===-1)if(t.indexOf("-")>=0){t=t.split("-")[0];let a=n.indexOf(t);return a===-1?"auto":It[a]}else return"auto";else return It[r]}function En(){let e,t="pending",n=new Promise((r,a)=>{e={async resolve(o){await o,t="fulfilled",r(o)},reject(o){t="rejected",a(o)}}});return Object.defineProperty(n,"state",{get:()=>t}),Object.assign(n,e)}var To=class extends Error{constructor(){super("Deadline"),this.name="DeadlineError"}};function $r(e,t){let n=En(),r=setTimeout(()=>n.reject(new To),t);return Promise.race([e,n]).finally(()=>clearTimeout(r))}function er(e,t={}){let{signal:n,persistent:r}=t;return n?.aborted?Promise.reject(new DOMException("Delay was aborted.","AbortError")):new Promise((a,o)=>{let i=()=>{clearTimeout(l),o(new DOMException("Delay was aborted.","AbortError"))},l=setTimeout(()=>{n?.removeEventListener("abort",i),a()},e);if(n?.addEventListener("abort",i,{once:!0}),r===!1)try{Deno.unrefTimer(l)}catch(u){if(!(u instanceof ReferenceError))throw u;console.error("`persistent` option is only available in Deno")}})}var sl=class{#e=0;#t=[];#n=[];#r=En();add(t){++this.#e,this.#a(t[Symbol.asyncIterator]())}async#a(t){try{let{value:n,done:r}=await t.next();r?--this.#e:this.#t.push({iterator:t,value:n})}catch(n){this.#n.push(n)}this.#r.resolve()}async*iterate(){for(;this.#e>0;){await this.#r;for(let t=0;t<this.#t.length;t++){let{iterator:n,value:r}=this.#t[t];yield r,this.#a(n)}if(this.#n.length){for(let t of this.#n)throw t;this.#n.length=0}this.#t.length=0,this.#r=En()}}[Symbol.asyncIterator](){return this.iterate()}};var Qe={};Bf(Qe,{bgBlack:()=>_d,bgBlue:()=>Pd,bgBrightBlack:()=>Id,bgBrightBlue:()=>Bd,bgBrightCyan:()=>$d,bgBrightGreen:()=>Fd,bgBrightMagenta:()=>Ud,bgBrightRed:()=>Nd,bgBrightWhite:()=>jd,bgBrightYellow:()=>Hd,bgCyan:()=>Dd,bgGreen:()=>Md,bgMagenta:()=>Rd,bgRed:()=>Cd,bgRgb24:()=>Vd,bgRgb8:()=>zd,bgWhite:()=>Od,bgYellow:()=>kd,black:()=>gd,blue:()=>pd,bold:()=>ad,brightBlack:()=>cl,brightBlue:()=>Sd,brightCyan:()=>Ld,brightGreen:()=>wd,brightMagenta:()=>Ed,brightRed:()=>xd,brightWhite:()=>Ad,brightYellow:()=>vd,cyan:()=>bd,dim:()=>od,getColorEnabled:()=>nd,gray:()=>Td,green:()=>dd,hidden:()=>cd,inverse:()=>ld,italic:()=>sd,magenta:()=>hd,red:()=>fd,reset:()=>rd,rgb24:()=>qd,rgb8:()=>Wd,setColorEnabled:()=>td,strikethrough:()=>ud,stripColor:()=>Gd,underline:()=>id,white:()=>yd,yellow:()=>md});var{Deno:il}=globalThis,ll=typeof il?.noColor=="boolean"?il.noColor:!0,xo=!ll;function td(e){ll||(xo=e)}function nd(){return xo}function q(e,t){return{open:`\x1B[${e.join(";")}m`,close:`\x1B[${t}m`,regexp:new RegExp(`\\x1b\\[${t}m`,"g")}}function V(e,t){return xo?`${t.open}${e.replace(t.regexp,t.open)}${t.close}`:e}function rd(e){return V(e,q([0],0))}function ad(e){return V(e,q([1],22))}function od(e){return V(e,q([2],22))}function sd(e){return V(e,q([3],23))}function id(e){return V(e,q([4],24))}function ld(e){return V(e,q([7],27))}function cd(e){return V(e,q([8],28))}function ud(e){return V(e,q([9],29))}function gd(e){return V(e,q([30],39))}function fd(e){return V(e,q([31],39))}function dd(e){return V(e,q([32],39))}function md(e){return V(e,q([33],39))}function pd(e){return V(e,q([34],39))}function hd(e){return V(e,q([35],39))}function bd(e){return V(e,q([36],39))}function yd(e){return V(e,q([37],39))}function Td(e){return cl(e)}function cl(e){return V(e,q([90],39))}function xd(e){return V(e,q([91],39))}function wd(e){return V(e,q([92],39))}function vd(e){return V(e,q([93],39))}function Sd(e){return V(e,q([94],39))}function Ed(e){return V(e,q([95],39))}function Ld(e){return V(e,q([96],39))}function Ad(e){return V(e,q([97],39))}function _d(e){return V(e,q([40],49))}function Cd(e){return V(e,q([41],49))}function Md(e){return V(e,q([42],49))}function kd(e){return V(e,q([43],49))}function Pd(e){return V(e,q([44],49))}function Rd(e){return V(e,q([45],49))}function Dd(e){return V(e,q([46],49))}function Od(e){return V(e,q([47],49))}function Id(e){return V(e,q([100],49))}function Nd(e){return V(e,q([101],49))}function Fd(e){return V(e,q([102],49))}function Hd(e){return V(e,q([103],49))}function Bd(e){return V(e,q([104],49))}function Ud(e){return V(e,q([105],49))}function $d(e){return V(e,q([106],49))}function jd(e){return V(e,q([107],49))}function Ft(e,t=255,n=0){return Math.trunc(Math.max(Math.min(e,t),n))}function Wd(e,t){return V(e,q([38,5,Ft(t)],39))}function zd(e,t){return V(e,q([48,5,Ft(t)],49))}function qd(e,t){return typeof t=="number"?V(e,q([38,2,t>>16&255,t>>8&255,t&255],39)):V(e,q([38,2,Ft(t.r),Ft(t.g),Ft(t.b)],39))}function Vd(e,t){return typeof t=="number"?V(e,q([48,2,t>>16&255,t>>8&255,t&255],49)):V(e,q([48,2,Ft(t.r),Ft(t.g),Ft(t.b)],49))}var Kd=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function Gd(e){return e.replace(Kd,"")}function wo(e,t){let n=null,r=null,a=(...o)=>{a.clear(),r=()=>{a.clear(),e.call(a,...o)},n=setTimeout(r,t)};return a.clear=()=>{typeof n=="number"&&(clearTimeout(n),n=null,r=null)},a.flush=()=>{r?.()},Object.defineProperty(a,"pending",{get:()=>typeof n=="number"}),a}var vo=class extends Error{constructor(t,n){super(`Exceeded max retry count (${n})`),this.name="RetryError",this.cause=t}},Jd={multiplier:2,maxTimeout:6e4,maxAttempts:5,minTimeout:1e3};async function So(e,t){let n={...Jd,...t};if(n.maxTimeout>=0&&n.minTimeout>n.maxTimeout)throw new RangeError("minTimeout is greater than maxTimeout");let r=n.minTimeout,a;for(let o=0;o<n.maxAttempts;o++)try{return await e()}catch(i){await new Promise(s=>setTimeout(s,r)),r*=n.multiplier,r=Math.max(r,n.minTimeout),n.maxTimeout>=0&&(r=Math.min(r,n.maxTimeout)),a=i}throw new vo(a,n.maxAttempts)}var Kr,J,ml,Yd,tr,ul,pl,zr={},hl=[],Xd=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Ht(e,t){for(var n in t)e[n]=t[n];return e}function bl(e){var t=e.parentNode;t&&t.removeChild(e)}function yl(e,t,n){var r,a,o,i={};for(o in t)o=="key"?r=t[o]:o=="ref"?a=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?Kr.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return jr(e,i,r,a,null)}function jr(e,t,n,r,a){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a??++ml};return a==null&&J.vnode!=null&&J.vnode(o),o}function xt(e){return e.children}function Wr(e,t){this.props=e,this.context=t}function Ln(e,t){if(t==null)return e.__?Ln(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Ln(e):null}function Tl(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Tl(e)}}function Eo(e){(!e.__d&&(e.__d=!0)&&tr.push(e)&&!qr.__r++||ul!==J.debounceRendering)&&((ul=J.debounceRendering)||setTimeout)(qr)}function qr(){for(var e;qr.__r=tr.length;)e=tr.sort(function(t,n){return t.__v.__b-n.__v.__b}),tr=[],e.some(function(t){var n,r,a,o,i,s;t.__d&&(i=(o=(n=t).__v).__e,(s=n.__P)&&(r=[],(a=Ht({},o)).__v=o.__v+1,Lo(s,o,a,n.__n,s.ownerSVGElement!==void 0,o.__h!=null?[i]:null,r,i??Ln(o),o.__h),Sl(r,o),o.__e!=i&&Tl(o)))})}function xl(e,t,n,r,a,o,i,s,l,u){var c,f,m,g,d,T,y,p=r&&r.__k||hl,h=p.length;for(n.__k=[],c=0;c<t.length;c++)if((g=n.__k[c]=(g=t[c])==null||typeof g=="boolean"?null:typeof g=="string"||typeof g=="number"||typeof g=="bigint"?jr(null,g,null,null,g):Array.isArray(g)?jr(xt,{children:g},null,null,null):g.__b>0?jr(g.type,g.props,g.key,g.ref?g.ref:null,g.__v):g)!=null){if(g.__=n,g.__b=n.__b+1,(m=p[c])===null||m&&g.key==m.key&&g.type===m.type)p[c]=void 0;else for(f=0;f<h;f++){if((m=p[f])&&g.key==m.key&&g.type===m.type){p[f]=void 0;break}m=null}Lo(e,g,m=m||zr,a,o,i,s,l,u),d=g.__e,(f=g.ref)&&m.ref!=f&&(y||(y=[]),m.ref&&y.push(m.ref,null,g),y.push(f,g.__c||d,g)),d!=null?(T==null&&(T=d),typeof g.type=="function"&&g.__k===m.__k?g.__d=l=wl(g,l,e):l=vl(e,g,m,p,d,l),typeof n.type=="function"&&(n.__d=l)):l&&m.__e==l&&l.parentNode!=e&&(l=Ln(m))}for(n.__e=T,c=h;c--;)p[c]!=null&&(typeof n.type=="function"&&p[c].__e!=null&&p[c].__e==n.__d&&(n.__d=Ln(r,c+1)),Ll(p[c],p[c]));if(y)for(c=0;c<y.length;c++)El(y[c],y[++c],y[++c])}function wl(e,t,n){for(var r,a=e.__k,o=0;a&&o<a.length;o++)(r=a[o])&&(r.__=e,t=typeof r.type=="function"?wl(r,t,n):vl(n,r,r,a,r.__e,t));return t}function vl(e,t,n,r,a,o){var i,s,l;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(n==null||a!=o||a.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(a),i=null;else{for(s=o,l=0;(s=s.nextSibling)&&l<r.length;l+=2)if(s==a)break e;e.insertBefore(a,o),i=o}return i!==void 0?i:a.nextSibling}function Qd(e,t,n,r,a){var o;for(o in n)o==="children"||o==="key"||o in t||Vr(e,o,null,n[o],r);for(o in t)a&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||Vr(e,o,t[o],n[o],r)}function gl(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Xd.test(t)?n:n+"px"}function Vr(e,t,n,r,a){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||gl(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||gl(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?dl:fl,o):e.removeEventListener(t,o?dl:fl,o);else if(t!=="dangerouslySetInnerHTML"){if(a)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function fl(e){this.l[e.type+!1](J.event?J.event(e):e)}function dl(e){this.l[e.type+!0](J.event?J.event(e):e)}function Lo(e,t,n,r,a,o,i,s,l){var u,c,f,m,g,d,T,y,p,h,x,L,I,A=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,s=t.__e=n.__e,t.__h=null,o=[s]),(u=J.__b)&&u(t);try{e:if(typeof A=="function"){if(y=t.props,p=(u=A.contextType)&&r[u.__c],h=u?p?p.props.value:u.__:r,n.__c?T=(c=t.__c=n.__c).__=c.__E:("prototype"in A&&A.prototype.render?t.__c=c=new A(y,h):(t.__c=c=new Wr(y,h),c.constructor=A,c.render=em),p&&p.sub(c),c.props=y,c.state||(c.state={}),c.context=h,c.__n=r,f=c.__d=!0,c.__h=[]),c.__s==null&&(c.__s=c.state),A.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=Ht({},c.__s)),Ht(c.__s,A.getDerivedStateFromProps(y,c.__s))),m=c.props,g=c.state,f)A.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(A.getDerivedStateFromProps==null&&y!==m&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(y,h),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(y,c.__s,h)===!1||t.__v===n.__v){c.props=y,c.state=c.__s,t.__v!==n.__v&&(c.__d=!1),c.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(w){w&&(w.__=t)}),c.__h.length&&i.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(y,c.__s,h),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(m,g,d)})}if(c.context=h,c.props=y,c.__v=t,c.__P=e,x=J.__r,L=0,"prototype"in A&&A.prototype.render)c.state=c.__s,c.__d=!1,x&&x(t),u=c.render(c.props,c.state,c.context);else do c.__d=!1,x&&x(t),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++L<25);c.state=c.__s,c.getChildContext!=null&&(r=Ht(Ht({},r),c.getChildContext())),f||c.getSnapshotBeforeUpdate==null||(d=c.getSnapshotBeforeUpdate(m,g)),I=u!=null&&u.type===xt&&u.key==null?u.props.children:u,xl(e,Array.isArray(I)?I:[I],t,n,r,a,o,i,s,l),c.base=t.__e,t.__h=null,c.__h.length&&i.push(c),T&&(c.__E=c.__=null),c.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Zd(n.__e,t,n,r,a,o,i,l);(u=J.diffed)&&u(t)}catch(w){t.__v=null,(l||o!=null)&&(t.__e=s,t.__h=!!l,o[o.indexOf(s)]=null),J.__e(w,t,n)}}function Sl(e,t){J.__c&&J.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){J.__e(r,n.__v)}})}function Zd(e,t,n,r,a,o,i,s){var l,u,c,f=n.props,m=t.props,g=t.type,d=0;if(g==="svg"&&(a=!0),o!=null){for(;d<o.length;d++)if((l=o[d])&&"setAttribute"in l==!!g&&(g?l.localName===g:l.nodeType===3)){e=l,o[d]=null;break}}if(e==null){if(g===null)return document.createTextNode(m);e=a?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,m.is&&m),o=null,s=!1}if(g===null)f===m||s&&e.data===m||(e.data=m);else{if(o=o&&Kr.call(e.childNodes),u=(f=n.props||zr).dangerouslySetInnerHTML,c=m.dangerouslySetInnerHTML,!s){if(o!=null)for(f={},d=0;d<e.attributes.length;d++)f[e.attributes[d].name]=e.attributes[d].value;(c||u)&&(c&&(u&&c.__html==u.__html||c.__html===e.innerHTML)||(e.innerHTML=c&&c.__html||""))}if(Qd(e,m,f,a,s),c)t.__k=[];else if(d=t.props.children,xl(e,Array.isArray(d)?d:[d],t,n,r,a&&g!=="foreignObject",o,i,o?o[0]:n.__k&&Ln(n,0),s),o!=null)for(d=o.length;d--;)o[d]!=null&&bl(o[d]);s||("value"in m&&(d=m.value)!==void 0&&(d!==e.value||g==="progress"&&!d||g==="option"&&d!==f.value)&&Vr(e,"value",d,f.value,!1),"checked"in m&&(d=m.checked)!==void 0&&d!==e.checked&&Vr(e,"checked",d,f.checked,!1))}return e}function El(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){J.__e(r,n)}}function Ll(e,t,n){var r,a;if(J.unmount&&J.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||El(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){J.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&Ll(r[a],t,typeof e.type!="function");n||e.__e==null||bl(e.__e),e.__=e.__e=e.__d=void 0}function em(e,t,n){return this.constructor(e,n)}function Gr(e,t,n){var r,a,o;J.__&&J.__(e,t),a=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],Lo(t,e=(!r&&n||t).__k=yl(xt,null,[e]),a||zr,zr,t.ownerSVGElement!==void 0,!r&&n?[n]:a?null:t.firstChild?Kr.call(t.childNodes):null,o,!r&&n?n:a?a.__e:t.firstChild,r),Sl(o,e)}function Ao(e,t){var n={__c:t="__cC"+pl++,__:e,Consumer:function(r,a){return r.children(a)},Provider:function(r){var a,o;return this.getChildContext||(a=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&a.some(Eo)},this.sub=function(i){a.push(i);var s=i.componentWillUnmount;i.componentWillUnmount=function(){a.splice(a.indexOf(i),1),s&&s.call(i)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Kr=hl.slice,J={__e:function(e,t,n,r){for(var a,o,i;t=t.__;)if((a=t.__c)&&!a.__)try{if((o=a.constructor)&&o.getDerivedStateFromError!=null&&(a.setState(o.getDerivedStateFromError(e)),i=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,r||{}),i=a.__d),i)return a.__E=a}catch(s){e=s}throw e}},ml=0,Yd=function(e){return e!=null&&e.constructor===void 0},Wr.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Ht({},this.state),typeof e=="function"&&(e=e(Ht({},n),this.props)),e&&Ht(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Eo(this))},Wr.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Eo(this))},Wr.prototype.render=xt,tr=[],qr.__r=0,pl=0;var rr,Le,_o,Al,nr=0,Dl=[],Jr=[],_l=J.__b,Cl=J.__r,Ml=J.diffed,kl=J.__c,Pl=J.unmount;function Xr(e,t){J.__h&&J.__h(Le,e,nr||t),nr=0;var n=Le.__H||(Le.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:Jr}),n.__[e]}function fe(e){return nr=1,tm(Nl,e)}function tm(e,t,n){var r=Xr(rr++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Nl(void 0,t),function(o){var i=r.__N?r.__N[0]:r.__[0],s=r.t(i,o);i!==s&&(r.__N=[s,r.__[1]],r.__c.setState({}))}],r.__c=Le,!Le.u)){Le.u=!0;var a=Le.shouldComponentUpdate;Le.shouldComponentUpdate=function(o,i,s){if(!r.__c.__H)return!0;var l=r.__c.__H.__.filter(function(c){return c.__c});if(l.every(function(c){return!c.__N}))return!a||a.call(this,o,i,s);var u=!1;return l.forEach(function(c){if(c.__N){var f=c.__[0];c.__=c.__N,c.__N=void 0,f!==c.__[0]&&(u=!0)}}),!!u&&(!a||a.call(this,o,i,s))}}return r.__N||r.__}function Ke(e,t){var n=Xr(rr++,3);!J.__s&&Il(n.__H,t)&&(n.__=e,n.i=t,Le.__H.__h.push(n))}function Mo(e){return nr=5,Ol(function(){return{current:e}},[])}function Ol(e,t){var n=Xr(rr++,7);return Il(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function ar(e,t){return nr=8,Ol(function(){return e},t)}function ko(e){var t=Le.context[e.__c],n=Xr(rr++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(Le)),t.props.value):e.__}function nm(){for(var e;e=Dl.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Yr),e.__H.__h.forEach(Co),e.__H.__h=[]}catch(t){e.__H.__h=[],J.__e(t,e.__v)}}J.__b=function(e){typeof e.type!="function"||e.o||e.type===xt?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),Le=null,_l&&_l(e)},J.__r=function(e){Cl&&Cl(e),rr=0;var t=(Le=e.__c).__H;t&&(_o===Le?(t.__h=[],Le.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Jr,n.__N=n.i=void 0})):(t.__h.forEach(Yr),t.__h.forEach(Co),t.__h=[])),_o=Le},J.diffed=function(e){Ml&&Ml(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Dl.push(t)!==1&&Al===J.requestAnimationFrame||((Al=J.requestAnimationFrame)||rm)(nm)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Jr&&(n.__=n.__V),n.i=void 0,n.__V=Jr})),_o=Le=null},J.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Yr),n.__h=n.__h.filter(function(r){return!r.__||Co(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],J.__e(r,n.__v)}}),kl&&kl(e,t)},J.unmount=function(e){Pl&&Pl(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Yr(r)}catch(a){t=a}}),n.__H=void 0,t&&J.__e(t,n.__v))};var Rl=typeof requestAnimationFrame=="function";function rm(e){var t,n=function(){clearTimeout(r),Rl&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Rl&&(t=requestAnimationFrame(n))}function Yr(e){var t=Le,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),Le=t}function Co(e){var t=Le;e.__c=e.__(),Le=t}function Il(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Nl(e,t){return typeof t=="function"?t(e):t}var _0=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var om=class extends Error{constructor(){super("Throttled function aborted"),this.name="AbortError"}};function Qr({limit:e,interval:t,strict:n}){if(!Number.isFinite(e))throw new TypeError("Expected `limit` to be a finite number");if(!Number.isFinite(t))throw new TypeError("Expected `interval` to be a finite number");let r=new Map,a=0,o=0;function i(){let c=Date.now();return c-a>t?(o=1,a=c,0):(o<e?o++:(a+=t,o=1),a-c)}let s=[];function l(){let c=Date.now();if(s.length<e)return s.push(c),0;let f=s.shift()+t;return c>=f?(s.push(c),0):(s.push(f),f-c)}let u=n?l:i;return c=>{let f=function(...m){if(!f.isEnabled)return(async()=>c.apply(this,m))();let g;return new Promise((d,T)=>{g=setTimeout(()=>{d(c.apply(this,m)),r.delete(g)},u()),r.set(g,T)})};return f.abort=()=>{for(let m of r.keys())clearTimeout(m),r.get(m)(new om);r.clear(),s.splice(0,s.length)},f.isEnabled=!0,f}}var Zr=globalThis||(typeof window<"u"?window:self),sm=Object.create,Hl=Object.defineProperty,im=Object.getOwnPropertyDescriptor,lm=Object.getOwnPropertyNames,cm=Object.getPrototypeOf,um=Object.prototype.hasOwnProperty,gm=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),fm=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of lm(t))!um.call(e,a)&&a!==n&&Hl(e,a,{get:()=>t[a],enumerable:!(r=im(t,a))||r.enumerable});return e},dm=(e,t,n)=>(n=e!=null?sm(cm(e)):{},fm(t||!e||!e.__esModule?Hl(n,"default",{value:e,enumerable:!0}):n,e)),mm=gm((e,t)=>{var n="Expected a function",r=NaN,a="[object Symbol]",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,c=typeof Zr=="object"&&Zr&&Zr.Object===Object&&Zr,f=typeof self=="object"&&self&&self.Object===Object&&self,m=c||f||Function("return this")(),g=Object.prototype,d=g.toString,T=Math.max,y=Math.min,p=function(){return m.Date.now()};function h(E,v,O){var $,_,N,z,W,be,Me=0,xe=!1,ae=!1,Ve=!0;if(typeof E!="function")throw new TypeError(n);v=w(v)||0,L(O)&&(xe=!!O.leading,ae="maxWait"in O,N=ae?T(w(O.maxWait)||0,v):N,Ve="trailing"in O?!!O.trailing:Ve);function le(X){var Z=$,Y=_;return $=_=void 0,Me=X,z=E.apply(Y,Z),z}function S(X){return Me=X,W=setTimeout(ne,v),xe?le(X):z}function P(X){var Z=X-be,Y=X-Me,ue=v-Z;return ae?y(ue,N-Y):ue}function F(X){var Z=X-be,Y=X-Me;return be===void 0||Z>=v||Z<0||ae&&Y>=N}function ne(){var X=p();if(F(X))return K(X);W=setTimeout(ne,P(X))}function K(X){return W=void 0,Ve&&$?le(X):($=_=void 0,z)}function ve(){W!==void 0&&clearTimeout(W),Me=0,$=be=_=W=void 0}function ke(){return W===void 0?z:K(p())}function ye(){var X=p(),Z=F(X);if($=arguments,_=this,be=X,Z){if(W===void 0)return S(be);if(ae)return W=setTimeout(ne,v),le(be)}return W===void 0&&(W=setTimeout(ne,v)),z}return ye.cancel=ve,ye.flush=ke,ye}function x(E,v,O){var $=!0,_=!0;if(typeof E!="function")throw new TypeError(n);return L(O)&&($="leading"in O?!!O.leading:$,_="trailing"in O?!!O.trailing:_),h(E,v,{leading:$,maxWait:v,trailing:_})}function L(E){var v=typeof E;return!!E&&(v=="object"||v=="function")}function I(E){return!!E&&typeof E=="object"}function A(E){return typeof E=="symbol"||I(E)&&d.call(E)==a}function w(E){if(typeof E=="number")return E;if(A(E))return r;if(L(E)){var v=typeof E.valueOf=="function"?E.valueOf():E;E=L(v)?v+"":v}if(typeof E!="string")return E===0?E:+E;E=E.replace(o,"");var O=s.test(E);return O||l.test(E)?u(E.slice(2),O?2:8):i.test(E)?r:+E}t.exports=x}),pm=dm(mm()),{default:Fl,...hm}=pm,dt=Fl!==void 0?Fl:hm;var Po;function Uo(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function zl(e,t=","){return e.map(Uo).join(t)}var ql=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function ea(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function Vl(e,t="@media "){return t+kt(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function kt(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function bm(){}var He={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function Kl(e){var t;return((t=e.match(/[-=:;]/g))==null?void 0:t.length)||0}function Fo(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?+RegExp.$1/(RegExp.$2?15:1)/10:0,15)<<22|Math.min(Kl(e),15)<<18}var ym=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function $o({n:e,i:t,v:n=[]},r,a,o){for(let s of(e&&(e=Uo({n:e,i:t,v:n})),o=[...kt(o)],n)){let l=r.theme("screens",s);for(let u of kt(l&&Vl(l)||r.v(s))){var i;o.push(u),a|=l?67108864|Fo(u):s=="dark"?1073741824:u[0]=="@"?Fo(u):(i=u,1<<~(/:([a-z-]+)/.test(i)&&~ym.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:a,r:o,i:t}}var jo=new Map;function Bl(e){if(e.d){let t=[],n=Ro(e.r.reduce((r,a)=>a[0]=="@"?(t.push(a),r):a?Ro(r,o=>Ro(a,i=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(s){let l=o.indexOf(s[1]);return~l?o.slice(0,l)+s[0]+o.slice(l+s[1].length):Do(o,i)}return Do(i,o)})):r,"&"),r=>Do(r,e.n?"."+ql(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,a)=>a+"{"+r+"}",e.d)}}function Ro(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,a)=>t(r)+a)}function Do(e,t){return e.replace(/&/g,t)}var Tm=new Intl.Collator("en",{numeric:!0});function xm(e,t){for(var n=0,r=e.length;n<r;){let a=r+n>>1;0>=Gl(e[a],t)?n=a+1:r=a}return r}function Gl(e,t){let n=e.p&He.o;return n==(t.p&He.o)&&(n==He.b||n==He.o)?0:e.p-t.p||e.o-t.o||Tm.compare(e.n,t.n)}function Oo(e,t){return Math.round(parseInt(e,16)*t)}function wm(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,a=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",a);if(e[0]=="#"&&(e.length==4||e.length==7)){let o=(e.length-1)/3,i=[17,1,.062272][o-1];return`rgba(${[Oo(e.substr(1,o),i),Oo(e.substr(1+o,o),i),Oo(e.substr(1+2*o,o),i),a]})`}return a=="1"?e:a=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${a})`)}function Jl(e,t,n,r,a=[]){return function o(i,{n:s,p:l,r:u=[],i:c},f){let m=[],g="",d=0,T=0;for(let h in i||{}){var y,p;let x=i[h];if(h[0]=="@"){if(!x)continue;if(h[1]=="a"){m.push(...Yl(s,l,zo(""+x),f,l,u,c,!0));continue}if(h[1]=="l"){for(let L of kt(x))m.push(...o(L,{n:s,p:(y=He[h[7]],l&~He.o|y),r:u,i:c},f));continue}if(h[1]=="i"){m.push(...kt(x).map(L=>({p:-1,o:0,r:[],d:h+" "+L})));continue}if(h[1]=="k"){m.push({p:He.d,o:0,r:[h],d:o(x,{p:He.d},f).map(Bl).join("")});continue}if(h[1]=="f"){m.push(...kt(x).map(L=>({p:He.d,o:0,r:[h],d:o(L,{p:He.d},f).map(Bl).join("")})));continue}}if(typeof x!="object"||Array.isArray(x))h=="label"&&x?s=x+ea(JSON.stringify([l,c,i])):(x||x===0)&&(h=h.replace(/[A-Z]/g,L=>"-"+L.toLowerCase()),T+=1,d=Math.max(d,(p=h)[0]=="-"?0:Kl(p)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(p)?+!!RegExp.$1||-!!RegExp.$2:0)+1),g+=(g?";":"")+kt(x).map(L=>f.s(h,vm(""+L,f.theme)+(c?" !important":""))).join(";"));else if(h[0]=="@"||h.includes("&")){let L=l;h[0]=="@"&&(h=h.replace(/\bscreen\(([^)]+)\)/g,(I,A)=>{let w=f.theme("screens",A);return w?(L|=67108864,Vl(w,"")):I}),L|=Fo(h)),m.push(...o(x,{n:s,p:L,r:[...u,h],i:c},f))}else m.push(...o(x,{p:l,r:[...u,h]},f))}return m.unshift({n:s,p:l,o:Math.max(0,15-T)+1.5*Math.min(d||15,15),r:u,d:g}),m.sort(Gl)}(e,$o(t,n,r,a),n)}function vm(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,a,o,i)=>{let s=t(a,i);return typeof s=="function"&&/color|fill|stroke/i.test(a)?wm(s):""+s})}function Wo(e,t){let n,r=[];for(let a of e)a.d&&a.n?n?.p==a.p&&""+n.r==""+a.r?(n.c=[n.c,a.c].filter(Boolean).join(" "),n.d=n.d+";"+a.d):r.push(n={...a,n:a.n&&t}):r.push({...a,n:a.n&&t});return r}function Ho(e,t,n=He.u,r,a){let o=[];for(let i of e)for(let s of function(l,u,c,f,m){var g;l={...l,i:l.i||m};let d=function(T,y){let p=jo.get(T.n);return p?p(T,y):y.r(T.n,T.v[0]=="dark")}(l,u);return d?typeof d=="string"?({r:f,p:c}=$o(l,u,c,f),Wo(Ho(zo(d),u,c,f,l.i),l.n)):Array.isArray(d)?d.map(T=>{var y,p;return{o:0,...T,r:[...kt(f),...kt(T.r)],p:(y=c,p=(g=T.p)!=null?g:c,y&~He.o|p)}}):Jl(d,l,u,c,f):[{c:Uo(l),p:0,o:0,r:[]}]}(i,t,n,r,a))o.splice(xm(o,s),0,s);return o}function Yl(e,t,n,r,a,o,i,s){return Wo((s?n.flatMap(l=>Ho([l],r,a,o,i)):Ho(n,r,a,o,i)).map(l=>l.p&He.o&&(l.n||t==He.b)?{...l,p:l.p&~He.o|t,o:0}:l),e)}function Sm(e,t,n,r){var a;return a=(o,i)=>{let{n:s,p:l,r:u,i:c}=$o(o,i,t);return n&&Yl(s,t,n,i,l,u,c,r)},jo.set(e,a),e}function Io(e,t){if(e[e.length-1]!="("){let n=[],r=!1,a=!1,o="";for(let i of e)if(!(i=="("||/[~@]$/.test(i))){if(i[0]=="!"&&(i=i.slice(1),r=!r),i.endsWith(":")){n[i=="dark:"?"unshift":"push"](i.slice(0,-1));continue}i[0]=="-"&&(i=i.slice(1),a=!a),i.endsWith("-")&&(i=i.slice(0,-1)),i&&i!="&"&&(o+=(o&&"-")+i)}o&&(a&&(o="-"+o),t[0].push({n:o,v:n.filter(Em),i:r}))}}function Em(e,t,n){return n.indexOf(e)==t}var Ul=new Map;function zo(e){let t=Ul.get(e);if(!t){let n=[],r=[[]],a=0,o=0,i=null,s=0,l=(u,c=0)=>{a!=s&&(n.push(e.slice(a,s+c)),u&&Io(n,r)),a=s+1};for(;s<e.length;s++){let u=e[s];if(o)e[s-1]!="\\"&&(o+=+(u=="[")||-(u=="]"));else if(u=="[")o+=1;else if(i)e[s-1]!="\\"&&i.test(e.slice(s))&&(i=null,a=s+RegExp.lastMatch.length);else if(u=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))i=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")l(),n.push(u);else if(u==":")e[s+1]!=":"&&l(!1,1);else if(/[\s,)]/.test(u)){l(!0);let c=n.lastIndexOf("(");if(u==")"){let f=n[c-1];if(/[~@]$/.test(f)){let m=r.shift();n.length=c,Io([...n,"#"],r);let{v:g}=r[0].pop();for(let d of m)d.v.splice(+(d.v[0]=="dark")-+(g[0]=="dark"),g.length);Io([...n,Sm(f.length>1?f.slice(0,-1)+ea(JSON.stringify([f,m])):f+"("+zl(m)+")",He.a,m,/@$/.test(f))],r)}c=n.lastIndexOf("(",c-1)}n.length=c+1}else/[~@]/.test(u)&&e[s+1]=="("&&r.unshift([])}l(!0),Ul.set(e,t=r[0])}return t}function Xl(e,t,n){return t.reduce((r,a,o)=>r+n(a)+e[o+1],e[0])}function Ql(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?Xl(e,t,n=>No(n).trim()):t.filter(Boolean).reduce((n,r)=>n+No(r),e?No(e):"")}function No(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=Ql(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var K0=Zl("@"),G0=Zl("~");function Zl(e){return new Proxy(function(n,...r){return t("",n,r)},{get:(n,r)=>r in n?n[r]:function(a,...o){return t(r,a,o)}});function t(n,r,a){return zl(zo(n+e+"("+Ql(r,a)+")"))}}function Bo(e,t){return Array.isArray(e)?$l(Xl(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?$l(e):[e]}var Lm=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function $l(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],a=[];for(;t=Lm.exec(e);)t[4]&&(n.shift(),a.shift()),t[3]?(a.unshift(t[3]),n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))),n[0][t[1]]=t[2]);return r}function ec(e,...t){var n,r;let a=Bo(e,t),o=(((n=a.find(i=>i.label))==null?void 0:n.label)||"css")+ea(JSON.stringify(a));return r=(i,s)=>Wo(a.flatMap(l=>Jl(l,i,s,He.o)),o),jo.set(o,r),o}var J0=new Proxy(function(e,t){return jl("animation",e,t)},{get:(e,t)=>t in e?e[t]:function(n,r){return jl(t,n,r)}});function jl(e,t,n){return{toString:()=>ec({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}var Y0=Symbol();var tc=new Proxy(bm,{apply:(e,t,n)=>Po(n[0]),get(e,t){let n=Po[t];return typeof n=="function"?function(){return n.apply(Po,arguments)}:n}});var X0=function e(t){return new Proxy(function(n,...r){return Wl(t,"",n,r)},{get:(n,r)=>r==="bind"?e:r in n?n[r]:function(a,...o){return Wl(t,r,a,o)}})}();function Wl(e,t,n,r){return{toString(){let a=Bo(n,r),o=ql(t+ea(JSON.stringify([t,a])));return(typeof e=="function"?e:tc)(ec({[`@keyframes ${o}`]:Bo(n,r)})),o}}}var qo;function ts(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function uc(e,t=","){return e.map(ts).join(t)}var gc=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function na(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function ra(e,t="@media "){return t+at(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function at(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function _m(){}var Be={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function fc(e){return e.match(/[-=:;]/g)?.length||0}function Xo(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(fc(e),15)<<18}var Cm=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function ns({n:e,i:t,v:n=[]},r,a,o){e&&(e=ts({n:e,i:t,v:n})),o=[...at(o)];for(let s of n){let l=r.theme("screens",s);for(let u of at(l&&ra(l)||r.v(s))){var i;o.push(u),a|=l?67108864|Xo(u):s=="dark"?1073741824:u[0]=="@"?Xo(u):(i=u,1<<~(/:([a-z-]+)/.test(i)&&~Cm.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:a,r:o,i:t}}var rs=new Map;function nc(e){if(e.d){let t=[],n=Vo(e.r.reduce((r,a)=>a[0]=="@"?(t.push(a),r):a?Vo(r,o=>Vo(a,i=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(s){let l=o.indexOf(s[1]);return~l?o.slice(0,l)+s[0]+o.slice(l+s[1].length):Ko(o,i)}return Ko(i,o)})):r,"&"),r=>Ko(r,e.n?"."+gc(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,a)=>a+"{"+r+"}",e.d)}}function Vo(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,a)=>t(r)+a)}function Ko(e,t){return e.replace(/&/g,t)}var rc=new Intl.Collator("en",{numeric:!0});function Mm(e,t){for(var n=0,r=e.length;n<r;){let a=r+n>>1;0>=dc(e[a],t)?n=a+1:r=a}return r}function dc(e,t){let n=e.p&Be.o;return n==(t.p&Be.o)&&(n==Be.b||n==Be.o)?0:e.p-t.p||e.o-t.o||rc.compare(ac(e.n),ac(t.n))||rc.compare(oc(e.n),oc(t.n))}function ac(e){return(e||"").split(/:/).pop().split("/").pop()||"\0"}function oc(e){return(e||"").replace(/\W/g,t=>String.fromCharCode(127+t.charCodeAt(0)))+"\0"}function Go(e,t){return Math.round(parseInt(e,16)*t)}function Bt(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,a=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",a);if(e[0]=="#"&&(e.length==4||e.length==7)){let o=(e.length-1)/3,i=[17,1,.062272][o-1];return`rgba(${[Go(e.substr(1,o),i),Go(e.substr(1+o,o),i),Go(e.substr(1+2*o,o),i),a]})`}return a=="1"?e:a=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${a})`)}function mc(e,t,n,r,a=[]){return function o(i,{n:s,p:l,r:u=[],i:c},f){let m=[],g="",d=0,T=0;for(let h in i||{}){var y,p;let x=i[h];if(h[0]=="@"){if(!x)continue;if(h[1]=="a"){m.push(...hc(s,l,os(""+x),f,l,u,c,!0));continue}if(h[1]=="l"){for(let L of at(x))m.push(...o(L,{n:s,p:(y=Be[h[7]],l&~Be.o|y),r:h[7]=="d"?[]:u,i:c},f));continue}if(h[1]=="i"){m.push(...at(x).map(L=>({p:-1,o:0,r:[],d:h+" "+L})));continue}if(h[1]=="k"){m.push({p:Be.d,o:0,r:[h],d:o(x,{p:Be.d},f).map(nc).join("")});continue}if(h[1]=="f"){m.push(...at(x).map(L=>({p:Be.d,o:0,r:[h],d:o(L,{p:Be.d},f).map(nc).join("")})));continue}}if(typeof x!="object"||Array.isArray(x))h=="label"&&x?s=x+na(JSON.stringify([l,c,i])):(x||x===0)&&(h=h.replace(/[A-Z]/g,L=>"-"+L.toLowerCase()),T+=1,d=Math.max(d,(p=h)[0]=="-"?0:fc(p)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(p)?+!!RegExp.$1||-!!RegExp.$2:0)+1),g+=(g?";":"")+at(x).map(L=>f.s(h,pc(""+L,f.theme)+(c?" !important":""))).join(";"));else if(h[0]=="@"||h.includes("&")){let L=l;h[0]=="@"&&(h=h.replace(/\bscreen\(([^)]+)\)/g,(I,A)=>{let w=f.theme("screens",A);return w?(L|=67108864,ra(w,"")):I}),L|=Xo(h)),m.push(...o(x,{n:s,p:L,r:[...u,h],i:c},f))}else m.push(...o(x,{p:l,r:[...u,h]},f))}return m.unshift({n:s,p:l,o:Math.max(0,15-T)+1.5*Math.min(d||15,15),r:u,d:g}),m.sort(dc)}(e,ns(t,n,r,a),n)}function pc(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,a,o,i="")=>{let s=t(a,i);return typeof s=="function"&&/color|fill|stroke/i.test(a)?Bt(s):""+at(s).filter(l=>Object(l)!==l)})}function as(e,t){let n,r=[];for(let a of e)a.d&&a.n?n?.p==a.p&&""+n.r==""+a.r?(n.c=[n.c,a.c].filter(Boolean).join(" "),n.d=n.d+";"+a.d):r.push(n={...a,n:a.n&&t}):r.push({...a,n:a.n&&t});return r}function Qo(e,t,n=Be.u,r,a){let o=[];for(let i of e)for(let s of function(l,u,c,f,m){l={...l,i:l.i||m};let g=function(d,T){let y=rs.get(d.n);return y?y(d,T):T.r(d.n,d.v[0]=="dark")}(l,u);return g?typeof g=="string"?({r:f,p:c}=ns(l,u,c,f),as(Qo(os(g),u,c,f,l.i),l.n)):Array.isArray(g)?g.map(d=>{var T,y;return{o:0,...d,r:[...at(f),...at(d.r)],p:(T=c,y=d.p??c,T&~Be.o|y)}}):mc(g,l,u,c,f):[{c:ts(l),p:0,o:0,r:[]}]}(i,t,n,r,a))o.splice(Mm(o,s),0,s);return o}function hc(e,t,n,r,a,o,i,s){return as((s?n.flatMap(l=>Qo([l],r,a,o,i)):Qo(n,r,a,o,i)).map(l=>l.p&Be.o&&(l.n||t==Be.b)?{...l,p:l.p&~Be.o|t,o:0}:l),e)}function km(e,t,n,r){var a;return a=(o,i)=>{let{n:s,p:l,r:u,i:c}=ns(o,i,t);return n&&hc(s,t,n,i,l,u,c,r)},rs.set(e,a),e}function Jo(e,t,n){if(e[e.length-1]!="("){let r=[],a=!1,o=!1,i="";for(let s of e)if(!(s=="("||/[~@]$/.test(s))){if(s[0]=="!"&&(s=s.slice(1),a=!a),s.endsWith(":")){r[s=="dark:"?"unshift":"push"](s.slice(0,-1));continue}s[0]=="-"&&(s=s.slice(1),o=!o),s.endsWith("-")&&(s=s.slice(0,-1)),s&&s!="&"&&(i+=(i&&"-")+s)}i&&(o&&(i="-"+i),t[0].push({n:i,v:r.filter(Pm),i:a}))}}function Pm(e,t,n){return n.indexOf(e)==t}var sc=new Map;function os(e){let t=sc.get(e);if(!t){let n=[],r=[[]],a=0,o=0,i=null,s=0,l=(u,c=0)=>{a!=s&&(n.push(e.slice(a,s+c)),u&&Jo(n,r)),a=s+1};for(;s<e.length;s++){let u=e[s];if(o)e[s-1]!="\\"&&(o+=+(u=="[")||-(u=="]"));else if(u=="[")o+=1;else if(i)e[s-1]!="\\"&&i.test(e.slice(s))&&(i=null,a=s+RegExp.lastMatch.length);else if(u=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))i=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")l(),n.push(u);else if(u==":")e[s+1]!=":"&&l(!1,1);else if(/[\s,)]/.test(u)){l(!0);let c=n.lastIndexOf("(");if(u==")"){let f=n[c-1];if(/[~@]$/.test(f)){let m=r.shift();n.length=c,Jo([...n,"#"],r);let{v:g}=r[0].pop();for(let d of m)d.v.splice(+(d.v[0]=="dark")-+(g[0]=="dark"),g.length);Jo([...n,km(f.length>1?f.slice(0,-1)+na(JSON.stringify([f,m])):f+"("+uc(m)+")",Be.a,m,/@$/.test(f))],r)}c=n.lastIndexOf("(",c-1)}n.length=c+1}else/[~@]/.test(u)&&e[s+1]=="("&&r.unshift([])}l(!0),sc.set(e,t=r[0])}return t}function bc(e,t,n){return t.reduce((r,a,o)=>r+n(a)+e[o+1],e[0])}function yc(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?bc(e,t,n=>Yo(n).trim()):t.filter(Boolean).reduce((n,r)=>n+Yo(r),e?Yo(e):"")}function Yo(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=yc(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var pT=Tc("@"),hT=Tc("~");function Tc(e){return new Proxy(function(n,...r){return t("",n,r)},{get(n,r){return r in n?n[r]:function(a,...o){return t(r,a,o)}}});function t(n,r,a){return uc(os(n+e+"("+yc(r,a)+")"))}}function Zo(e,t){return Array.isArray(e)?ic(bc(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?ic(e):[e]}var Rm=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function ic(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],a=[];for(;t=Rm.exec(e);)t[4]&&(n.shift(),a.shift()),t[3]?(a.unshift(t[3]),n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))),n[0][t[1]]=t[2]);return r}function xc(e,...t){var n;let r=Zo(e,t),a=(r.find(o=>o.label)?.label||"css")+na(JSON.stringify(r));return n=(o,i)=>as(r.flatMap(s=>mc(s,o,i,Be.o)),a),rs.set(a,n),a}var bT=new Proxy(function(e,t){return lc("animation",e,t)},{get(e,t){return t in e?e[t]:function(n,r){return lc(t,n,r)}}});function lc(e,t,n){return{toString(){return xc({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}}function C(e,t,n){return[e,Dm(t,n)]}function Dm(e,t){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?(n,r)=>({[e]:t?t(n,r):es(n,1)}):n=>e||{[n[1]]:es(n,2)}}function es(e,t,n=e.slice(t).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${n} * -1)`:n}function M(e,t,n,r){return[e,Om(t,n,r)]}function Om(e,t,n){let r=typeof t=="string"?(a,o)=>({[t]:n?n(a,o):a._}):t||(({1:a,_:o},i,s)=>({[a||s]:o}));return(a,o)=>{let i=wc(e||a[1]),s=o.theme(i,a.$$)??or(a.$$,i,o);if(s!=null)return a._=es(a,0,s),r(a,o,i)}}function De(e,t={},n){return[e,Im(t,n)]}function Im(e={},t){return(n,r)=>{let{section:a=wc(n[0]).replace("-","")+"Color"}=e,[o,i]=Nm(n.$$);if(!o)return;let s=r.theme(a,o)||or(o,a,r);if(!s||typeof s=="object")return;let{opacityVariable:l=`--tw-${n[0].replace(/-$/,"")}-opacity`,opacitySection:u=a.replace("Color","Opacity"),property:c=a,selector:f}=e,m=r.theme(u,i||"DEFAULT")||i&&or(i,u,r),g=t||(({_:T})=>{let y=sr(c,T);return f?{[f]:y}:y});n._={value:Bt(s,{opacityVariable:l||void 0,opacityValue:m||void 0}),color:T=>Bt(s,T),opacityVariable:l||void 0,opacityValue:m||void 0};let d=g(n,r);if(!n.dark){let T=r.d(a,o,s);T&&T!==s&&(n._={value:Bt(T,{opacityVariable:l||void 0,opacityValue:m||"1"}),color:y=>Bt(T,y),opacityVariable:l||void 0,opacityValue:m||void 0},d={"&":d,[r.v("dark")]:g(n,r)})}return d}}function Nm(e){return(e.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function sr(e,t){let n={};return typeof t=="string"?n[e]=t:(t.opacityVariable&&t.value.includes(t.opacityVariable)&&(n[t.opacityVariable]=t.opacityValue||"1"),n[e]=t.value),n}function or(e,t,n){if(e[0]=="["&&e.slice(-1)=="]"){if(e=ta(pc(e.slice(1,-1),n.theme)),!t)return e;if(!(/color|fill|stroke/i.test(t)&&!(/^color:/.test(e)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e))||/image/i.test(t)&&!(/^image:/.test(e)||/^[a-z-]+\(/.test(e))||/weight/i.test(t)&&!(/^(number|any):/.test(e)||/^\d+$/.test(e))||/position/i.test(t)&&/^(length|size):/.test(e)))return e.replace(/^[a-z-]+:/,"")}}function wc(e){return e.replace(/-./g,t=>t[1].toUpperCase())}function ta(e){return e.includes("url(")?e.replace(/(.*?)(url\(.*?\))(.*?)/g,(t,n="",r,a="")=>ta(n)+r+ta(a)):e.replace(/(^|[^\\])_+/g,(t,n)=>n+" ".repeat(t.length-n.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,t=>t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}var yT=Symbol();var Fm=new Proxy(_m,{apply(e,t,n){return qo(n[0])},get(e,t){let n=qo[t];return typeof n=="function"?function(){return n.apply(qo,arguments)}:n}});var TT=function e(t){return new Proxy(function(n,...r){return cc(t,"",n,r)},{get(n,r){return r==="bind"?e:r in n?n[r]:function(a,...o){return cc(t,r,a,o)}}})}();function cc(e,t,n,r){return{toString(){let a=Zo(n,r),o=gc(t+na(JSON.stringify([t,a])));return(typeof e=="function"?e:Fm)(xc({[`@keyframes ${o}`]:Zo(n,r)})),o}}}var Hm="inherit",Bm="currentColor",Um="transparent",$m="#000",jm="#fff",Wm={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},zm={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},qm={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},Vm={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},Km={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},Gm={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},Jm={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},Ym={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},Xm={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},Qm={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},Zm={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},ep={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},tp={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},np={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},rp={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},ap={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},op={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},sp={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},ip={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},lp={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},cp={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},up={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},gp={__proto__:null,inherit:Hm,current:Bm,transparent:Um,black:$m,white:jm,slate:Wm,gray:zm,zinc:qm,neutral:Vm,stone:Km,red:Gm,orange:Jm,amber:Ym,yellow:Xm,lime:Qm,green:Zm,emerald:ep,teal:tp,cyan:np,sky:rp,blue:ap,indigo:op,violet:sp,purple:ip,fuchsia:lp,pink:cp,rose:up},vc={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},colors:gp,columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...tt(4,"rem",4,.5,.5),...tt(12,"rem",4,5),14:"3.5rem",...tt(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:re("blur"),backdropBrightness:re("brightness"),backdropContrast:re("contrast"),backdropGrayscale:re("grayscale"),backdropHueRotate:re("hueRotate"),backdropInvert:re("invert"),backdropOpacity:re("opacity"),backdropSaturate:re("saturate"),backdropSepia:re("sepia"),backgroundColor:re("colors"),backgroundImage:{none:"none"},backgroundOpacity:re("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...tt(200,"",100,0,50),...tt(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:e})=>({DEFAULT:e("colors.gray.200","currentColor"),...e("colors")}),borderOpacity:re("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:re("spacing"),borderWidth:{DEFAULT:"1px",...ot(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:re("colors"),caretColor:re("colors"),accentColor:({theme:e})=>({auto:"auto",...e("colors")}),contrast:{...tt(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:re("borderColor"),divideOpacity:re("borderOpacity"),divideWidth:re("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:re("colors"),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({...e("spacing"),...ir(2,6),...ir(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:re("spacing"),gradientColorStops:re("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:e})=>({...e("spacing"),...ir(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:e})=>({...e("spacing"),...ir(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...tt(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),maxHeight:({theme:e})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...e("spacing")}),maxWidth:({theme:e,breakpoints:t})=>({...t(e("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...tt(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:re("spacing"),placeholderColor:re("colors"),placeholderOpacity:re("opacity"),outlineColor:re("colors"),outlineOffset:ot(8,"px"),outlineWidth:ot(8,"px"),ringColor:({theme:e})=>({...e("colors"),DEFAULT:e("colors.blue.500","#3b82f6")}),ringOffsetColor:re("colors"),ringOffsetWidth:ot(8,"px"),ringOpacity:({theme:e})=>({...e("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...ot(8,"px")},rotate:{...ot(2,"deg"),...ot(12,"deg",3),...ot(180,"deg",45)},saturate:tt(200,"",100,0,50),scale:{...tt(150,"",100,0,50),...tt(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:re("spacing"),scrollPadding:re("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...ot(2,"deg"),...ot(12,"deg",3)},space:re("spacing"),stroke:re("colors"),strokeWidth:tt(2),textColor:re("colors"),textDecorationColor:re("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...ot(8,"px")},textUnderlineOffset:{auto:"auto",...ot(8,"px")},textIndent:re("spacing"),textOpacity:re("opacity"),transitionDuration:({theme:e})=>({...e("durations"),DEFAULT:"150ms"}),transitionDelay:re("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:e})=>({...e("spacing"),...ir(2,4),full:"100%"}),width:({theme:e})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...e("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...tt(50,"",1,0,10),auto:"auto"}};function ir(e,t){let n={};do for(var r=1;r<e;r++)n[`${r}/${e}`]=Number((r/e*100).toFixed(6))+"%";while(++e<=t);return n}function ot(e,t,n=0){let r={};for(;n<=e;n=2*n||1)r[n]=n+t;return r}function tt(e,t="",n=1,r=0,a=1,o={}){for(;r<=e;r+=a)o[r]=r/n+t;return o}function re(e){return({theme:t})=>t(e)}var vT={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${vc.fontFamily.sans})`},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${vc.fontFamily.mono})`,fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},ET=[C("\\[([-\\w]+):(.+)]",({1:e,2:t},n)=>({"@layer overrides":{"&":{[e]:or(`[${t}]`,e,n)}}})),C("(group|peer)(~[^-[]+)?",({input:e},{h:t})=>[{c:t(e)}]),M("aspect-","aspectRatio"),C("container",(e,{theme:t})=>{let{screens:n=t("screens"),center:r,padding:a}=t("container"),o={width:"100%",marginRight:r&&"auto",marginLeft:r&&"auto",...i("xs")};for(let s in n){let l=n[s];typeof l=="string"&&(o[ra(l)]={"&":{maxWidth:l,...i(s)}})}return o;function i(s){let l=a&&(typeof a=="string"?a:a[s]||a.DEFAULT);if(l)return{paddingRight:l,paddingLeft:l}}}),M("content-","content",({_:e})=>({"--tw-content":e,content:"var(--tw-content)"})),C("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),C("box-(border|content)","boxSizing",({1:e})=>e+"-box"),C("hidden",{display:"none"}),C("table-(auto|fixed)","tableLayout"),C(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",C("isolate","isolation"),C("object-(contain|cover|fill|none|scale-down)","objectFit"),M("object-","objectPosition"),C("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",aa),C("overscroll(-[xy])?-(auto|contain|none)",({1:e="",2:t})=>({["overscroll-behavior"+e]:t})),C("(static|fixed|absolute|relative|sticky)","position"),M("-?inset(-[xy])?(?:$|-)","inset",({1:e,_:t})=>({top:e!="-x"&&t,right:e!="-y"&&t,bottom:e!="-x"&&t,left:e!="-y"&&t})),M("-?(top|bottom|left|right)(?:$|-)","inset"),C("visible","visibility"),C("invisible",{visibility:"hidden"}),M("-?z-","zIndex"),C("flex-((row|col)(-reverse)?)","flexDirection",Sc),C("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),M("(flex-(?:grow|shrink))(?:$|-)"),M("(flex)-"),M("grow(?:$|-)","flexGrow"),M("shrink(?:$|-)","flexShrink"),M("basis-","flexBasis"),M("-?(order)-"),"-?(order)-(\\d+)",M("grid-cols-","gridTemplateColumns"),C("grid-cols-(\\d+)","gridTemplateColumns",_c),M("col-","gridColumn"),C("col-(span)-(\\d+)","gridColumn",Ac),M("col-start-","gridColumnStart"),C("col-start-(auto|\\d+)","gridColumnStart"),M("col-end-","gridColumnEnd"),C("col-end-(auto|\\d+)","gridColumnEnd"),M("grid-rows-","gridTemplateRows"),C("grid-rows-(\\d+)","gridTemplateRows",_c),M("row-","gridRow"),C("row-(span)-(\\d+)","gridRow",Ac),M("row-start-","gridRowStart"),C("row-start-(auto|\\d+)","gridRowStart"),M("row-end-","gridRowEnd"),C("row-end-(auto|\\d+)","gridRowEnd"),C("grid-flow-((row|col)(-dense)?)","gridAutoFlow",e=>aa(Sc(e))),C("grid-flow-(dense)","gridAutoFlow"),M("auto-cols-","gridAutoColumns"),M("auto-rows-","gridAutoRows"),M("gap-x(?:$|-)","gap","columnGap"),M("gap-y(?:$|-)","gap","rowGap"),M("gap(?:$|-)","gap"),"(justify-(?:items|self))-",C("justify-","justifyContent",Ec),C("(content|items|self)-",e=>({["align-"+e[1]]:Ec(e)})),C("(place-(content|items|self))-",({1:e,$$:t})=>({[e]:("wun".includes(t[3])?"space-":"")+t})),M("p([xytrbl])?(?:$|-)","padding",An("padding")),M("-?m([xytrbl])?(?:$|-)","margin",An("margin")),M("-?space-(x|y)(?:$|-)","space",({1:e,_:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[e]]:`calc(${t} * calc(1 - var(--tw-space-${e}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[e]]:`calc(${t} * var(--tw-space-${e}-reverse))`}})),C("space-(x|y)-reverse",({1:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"1"}})),M("w-","width"),M("min-w-","minWidth"),M("max-w-","maxWidth"),M("h-","height"),M("min-h-","minHeight"),M("max-h-","maxHeight"),M("font-","fontWeight"),M("font-","fontFamily","fontFamily",wt),C("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),C("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),C("italic","fontStyle"),C("not-italic",{fontStyle:"normal"}),C("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:e,2:t="",3:n})=>t=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(n?"numeric-fraction":"pt".includes(t[0])?"numeric-spacing":t?"numeric-figure":e)]:e,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"}}}),M("tracking-","letterSpacing"),M("leading-","lineHeight"),C("list-(inside|outside)","listStylePosition"),M("list-","listStyleType"),C("list-","listStyleType"),M("placeholder-opacity-","placeholderOpacity",({_:e})=>({"&::placeholder":{"--tw-placeholder-opacity":e}})),De("placeholder-",{property:"color",selector:"&::placeholder"}),C("text-(left|center|right|justify|start|end)","textAlign"),C("text-(ellipsis|clip)","textOverflow"),M("text-opacity-","textOpacity","--tw-text-opacity"),De("text-",{property:"color"}),M("text-","fontSize",({_:e})=>typeof e=="string"?{fontSize:e}:{fontSize:e[0],...typeof e[1]=="string"?{lineHeight:e[1]}:e[1]}),M("indent-","textIndent"),C("(overline|underline|line-through)","textDecorationLine"),C("no-underline",{textDecorationLine:"none"}),M("underline-offset-","textUnderlineOffset"),De("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),M("decoration-","textDecorationThickness"),C("decoration-","textDecorationStyle"),C("(uppercase|lowercase|capitalize)","textTransform"),C("normal-case",{textTransform:"none"}),C("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),C("align-","verticalAlign"),C("whitespace-","whiteSpace"),C("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),C("break-words",{overflowWrap:"break-word"}),C("break-all",{wordBreak:"break-all"}),De("caret-",{opacityVariable:!1,opacitySection:"opacity"}),De("accent-",{opacityVariable:!1,opacitySection:"opacity"}),C("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:e})=>`linear-gradient(to ${sn(e," ")},var(--tw-gradient-stops))`),De("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-from":e.value,"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),De("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`})),De("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),C("bg-(fixed|local|scroll)","backgroundAttachment"),C("bg-origin-(border|padding|content)","backgroundOrigin",({1:e})=>e+"-box"),C(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),C("bg-blend-","backgroundBlendMode"),C("bg-clip-(border|padding|content|text)","backgroundClip",({1:e})=>e+(e=="text"?"":"-box")),M("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),De("bg-",{section:"backgroundColor"}),M("bg-","backgroundImage"),M("bg-","backgroundPosition"),C("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",aa),M("bg-","backgroundSize"),M("rounded(?:$|-)","borderRadius"),M("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:e,_:t})=>{let n={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[e]||[e,e];return{[`border-${sn(n[0])}-radius`]:t,[`border-${sn(n[1])}-radius`]:t}}),C("border-(collapse|separate)","borderCollapse"),M("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),C("border-(solid|dashed|dotted|double|none)","borderStyle"),M("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:e,_:t})=>({"@layer defaults":{"*,::before,::after,::backdrop":{"--tw-border-spacing-x":0,"--tw-border-spacing-y":0}},["--tw-border-spacing"+(e||"-x")]:t,["--tw-border-spacing"+(e||"-y")]:t,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),De("border-([xytrbl])-",{section:"borderColor"},An("border","Color")),De("border-"),M("border-([xytrbl])(?:$|-)","borderWidth",An("border","Width")),M("border(?:$|-)","borderWidth"),M("divide-opacity(?:$|-)","divideOpacity",({_:e})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":e}})),C("divide-(solid|dashed|dotted|double|none)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:e}})),C("divide-([xy]-reverse)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+e]:"1"}})),M("divide-([xy])(?:$|-)","divideWidth",({1:e,_:t})=>{let n={x:"lr",y:"tb"}[e];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${e}-reverse`]:"0",[`border-${sn(n[0])}Width`]:`calc(${t} * calc(1 - var(--tw-divide-${e}-reverse)))`,[`border-${sn(n[1])}Width`]:`calc(${t} * var(--tw-divide-${e}-reverse))`}}}),De("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),M("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),De("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),M("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),C("ring-inset",{"--tw-ring-inset":"inset"}),De("ring-",{property:"--tw-ring-color"}),M("ring(?:$|-)","ringWidth",({_:e},{theme:t})=>({"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":t("ringOffsetWidth","","0px"),"--tw-ring-offset-color":Bt(t("ringOffsetColor","","#fff")),"--tw-ring-color":Bt(t("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":t("ringOpacity","","0.5")}}}})),De("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-shadow-color":e.value,"--tw-shadow":"var(--tw-shadow-colored)"})),M("shadow(?:$|-)","boxShadow",({_:e})=>({"--tw-shadow":wt(e),"--tw-shadow-colored":wt(e).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}}})),M("(opacity)-"),C("mix-blend-","mixBlendMode"),...Lc(),...Lc("backdrop-"),M("transition(?:$|-)","transitionProperty",(e,{theme:t})=>({transitionProperty:wt(e),transitionTimingFunction:e._=="none"?void 0:wt(t("transitionTimingFunction","")),transitionDuration:e._=="none"?void 0:wt(t("transitionDuration",""))})),M("duration(?:$|-)","transitionDuration","transitionDuration",wt),M("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",wt),M("delay(?:$|-)","transitionDelay","transitionDelay",wt),M("animate(?:$|-)","animation",(e,{theme:t,h:n})=>{let r=wt(e),a=r.split(" "),o=t("keyframes",a[0]);return o?{["@keyframes "+(a[0]=n(a[0]))]:o,animation:a.join(" ")}:{animation:r}}),"(transform)-(none)",C("transform",is),C("transform-(cpu|gpu)",({1:e})=>({"--tw-transform":Cc(e=="gpu")})),M("scale(-[xy])?-","scale",({1:e,_:t})=>({["--tw-scale"+(e||"-x")]:t,["--tw-scale"+(e||"-y")]:t,...is()})),M("-?(rotate)-","rotate",ss),M("-?(translate-[xy])-","translate",ss),M("-?(skew-[xy])-","skew",ss),C("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",aa),"(appearance)-",M("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",M("(cursor)-"),"(cursor)-",C("snap-(none)","scroll-snap-type"),C("snap-(x|y|both)",({1:e})=>({"scroll-snap-type":e+" var(--tw-scroll-snap-strictness)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-scroll-snap-strictness":"proximity"}}})),C("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),C("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),C("snap-(normal|always)","scroll-snap-stop"),C("scroll-(auto|smooth)","scroll-behavior"),M("scroll-p([xytrbl])?(?:$|-)","padding",An("scroll-padding")),M("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",An("scroll-margin")),C("touch-(auto|none|manipulation)","touch-action"),C("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:e,2:t,3:n})=>({[`--tw-${t?"pan-x":n?"pan-y":e}`]:e,"touch-action":"var(--tw-touch-action)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}}})),C("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),C("outline",{outlineStyle:"solid"}),C("outline-(dashed|dotted|double|hidden)","outlineStyle"),M("(outline-offset)-"),De("outline-",{opacityVariable:!1,opacitySection:"opacity"}),M("outline-","outlineWidth"),"(pointer-events)-",M("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:e})=>({x:"horizontal",y:"vertical"})[e]||e||"both"],C("select-(none|text|all|auto)","userSelect"),De("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),De("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),M("stroke-","strokeWidth"),C("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),C("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function aa(e){return(typeof e=="string"?e:e[1]).replace(/-/g," ").trim()}function Sc(e){return(typeof e=="string"?e:e[1]).replace("col","column")}function sn(e,t="-"){let n=[];for(let r of e)n.push({t:"top",r:"right",b:"bottom",l:"left"}[r]);return n.join(t)}function wt(e){return e&&""+(e._||e)}function Ec({$$:e}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[e[3]||""]||"")+e}function An(e,t=""){return({1:n,_:r})=>{let a={x:"lr",y:"tb"}[n]||n+n;return a?{...sr(e+"-"+sn(a[0])+t,r),...sr(e+"-"+sn(a[1])+t,r)}:sr(e+t,r)}}function Lc(e=""){let t=["blur","brightness","contrast","grayscale","hue-rotate","invert",e&&"opacity","saturate","sepia",!e&&"drop-shadow"].filter(Boolean),n={};for(let r of t)n[`--tw-${e}${r}`]="var(--tw-empty,/*!*/ /*!*/)";return n={[`${e}filter`]:t.map(r=>`var(--tw-${e}${r})`).join(" "),"@layer defaults":{"*,::before,::after,::backdrop":n}},[`(${e}filter)-(none)`,C(`${e}filter`,n),...t.map(r=>M(`${r[0]=="h"?"-?":""}(${e}${r})(?:$|-)`,r,({1:a,_:o})=>({[`--tw-${a}`]:at(o).map(i=>`${r}(${i})`).join(" "),...n})))]}function ss({1:e,_:t}){return{["--tw-"+e]:t,...is()}}function is(){return{transform:"var(--tw-transform)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":Cc()}}}}function Cc(e){return[e?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function Ac({1:e,2:t}){return`${e} ${t} / ${e} ${t}`}function _c({1:e}){return`repeat(${e},minmax(0,1fr))`}var dp=Object.create,kc=Object.defineProperty,mp=Object.getOwnPropertyDescriptor,pp=Object.getOwnPropertyNames,hp=Object.getPrototypeOf,bp=Object.prototype.hasOwnProperty,yp=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Tp=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of pp(t))!bp.call(e,a)&&a!==n&&kc(e,a,{get:()=>t[a],enumerable:!(r=mp(t,a))||r.enumerable});return e},xp=(e,t,n)=>(n=e!=null?dp(hp(e)):{},Tp(t||!e||!e.__esModule?kc(n,"default",{value:e,enumerable:!0}):n,e)),wp=yp((e,t)=>{(function(n,r){typeof e=="object"&&typeof t=="object"?t.exports=r():typeof define=="function"&&define.amd?define([],r):typeof e=="object"?e.notie=r():n.notie=r()})(e,function(){return function(n){function r(o){if(a[o])return a[o].exports;var i=a[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var a={};return r.m=n,r.c=a,r.i=function(o){return o},r.d=function(o,i,s){r.o(o,i)||Object.defineProperty(o,i,{configurable:!1,enumerable:!0,get:s})},r.n=function(o){var i=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(i,"a",i),i},r.o=function(o,i){return Object.prototype.hasOwnProperty.call(o,i)},r.p="",r(r.s=1)}([function(n,r){n.exports=function(a){return a.webpackPolyfill||(a.deprecate=function(){},a.paths=[],a.children||(a.children=[]),Object.defineProperty(a,"loaded",{enumerable:!0,get:function(){return a.l}}),Object.defineProperty(a,"id",{enumerable:!0,get:function(){return a.i}}),a.webpackPolyfill=1),a}},function(n,r,a){"use strict";(function(o){var i,s,l,u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c};(function(c,f){u(r)==="object"&&u(o)==="object"?o.exports=f():(s=[],i=f,l=typeof i=="function"?i.apply(r,s):i,l!==void 0&&(o.exports=l))})(void 0,function(){return function(c){function f(g){if(m[g])return m[g].exports;var d=m[g]={i:g,l:!1,exports:{}};return c[g].call(d.exports,d,d.exports,f),d.l=!0,d.exports}var m={};return f.m=c,f.c=m,f.i=function(g){return g},f.d=function(g,d,T){f.o(g,d)||Object.defineProperty(g,d,{configurable:!1,enumerable:!0,get:T})},f.n=function(g){var d=g&&g.__esModule?function(){return g.default}:function(){return g};return f.d(d,"a",d),d},f.o=function(g,d){return Object.prototype.hasOwnProperty.call(g,d)},f.p="",f(f.s=0)}([function(c,f,m){function g(S,P){var F={};for(var ne in S)P.indexOf(ne)>=0||Object.prototype.hasOwnProperty.call(S,ne)&&(F[ne]=S[ne]);return F}Object.defineProperty(f,"__esModule",{value:!0});var d=typeof Symbol=="function"&&u(Symbol.iterator)==="symbol"?function(S){return typeof S>"u"?"undefined":u(S)}:function(S){return S&&typeof Symbol=="function"&&S.constructor===Symbol&&S!==Symbol.prototype?"symbol":typeof S>"u"?"undefined":u(S)},T=Object.assign||function(S){for(var P=1;P<arguments.length;P++){var F=arguments[P];for(var ne in F)Object.prototype.hasOwnProperty.call(F,ne)&&(S[ne]=F[ne])}return S},y={top:"top",bottom:"bottom"},p={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:y.top,force:y.top,confirm:y.top,input:y.top,select:y.bottom,date:y.top}},h=f.setOptions=function(S){p=T({},p,S,{classes:T({},p.classes,S.classes),ids:T({},p.ids,S.ids),positions:T({},p.positions,S.positions)})},x=function(){return new Promise(function(S){return setTimeout(S,0)})},L=function(S){return new Promise(function(P){return setTimeout(P,1e3*S)})},I=function(){document.activeElement&&document.activeElement.blur()},A=function(){var S="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(P){var F=16*Math.random()|0,ne=P==="x"?F:3&F|8;return ne.toString(16)});return"notie-"+S},w={1:p.classes.backgroundSuccess,success:p.classes.backgroundSuccess,2:p.classes.backgroundWarning,warning:p.classes.backgroundWarning,3:p.classes.backgroundError,error:p.classes.backgroundError,4:p.classes.backgroundInfo,info:p.classes.backgroundInfo,5:p.classes.backgroundNeutral,neutral:p.classes.backgroundNeutral},E=function(){return p.transitionSelector+" "+p.transitionDuration+"s "+p.transitionCurve},v=function(S){return S.keyCode===13},O=function(S){return S.keyCode===27},$=function(S,P){S.classList.add(p.classes.container),S.style[P]="-10000px",document.body.appendChild(S),S.style[P]="-"+S.offsetHeight+"px",S.listener&&window.addEventListener("keydown",S.listener),x().then(function(){S.style.transition=E(),S.style[P]=0})},_=function(S,P){var F=document.getElementById(S);F&&(F.style[P]="-"+F.offsetHeight+"px",F.listener&&window.removeEventListener("keydown",F.listener),L(p.transitionDuration).then(function(){F.parentNode&&F.parentNode.removeChild(F)}))},N=function(S,P){var F=document.createElement("div");F.id=p.ids.overlay,F.classList.add(p.classes.overlay),F.classList.add(p.classes.backgroundOverlay),F.style.opacity=0,S&&p.overlayClickDismiss&&(F.onclick=function(){_(S.id,P),z()}),document.body.appendChild(F),x().then(function(){F.style.transition=E(),F.style.opacity=p.overlayOpacity})},z=function(){var S=document.getElementById(p.ids.overlay);S.style.opacity=0,L(p.transitionDuration).then(function(){S.parentNode&&S.parentNode.removeChild(S)})},W=f.hideAlerts=function(S){var P=document.getElementsByClassName(p.classes.alert);if(P.length){for(var F=0;F<P.length;F++){var ne=P[F];_(ne.id,ne.position)}S&&L(p.transitionDuration).then(function(){return S()})}},be=f.alert=function(S){var P=S.type,F=P===void 0?4:P,ne=S.text,K=S.time,ve=K===void 0?p.alertTime:K,ke=S.stay,ye=ke!==void 0&&ke,X=S.position,Z=X===void 0?p.positions.alert||Z.top:X;I(),W();var Y=document.createElement("div"),ue=A();Y.id=ue,Y.position=Z,Y.classList.add(p.classes.textbox),Y.classList.add(w[F]),Y.classList.add(p.classes.alert),Y.innerHTML='<div class="'+p.classes.textboxInner+'">'+ne+"</div>",Y.onclick=function(){return _(ue,Z)},Y.listener=function(j){(v(j)||O(j))&&W()},$(Y,Z),ve&&ve<1&&(ve=1),!ye&&ve&&L(ve).then(function(){return _(ue,Z)})},Me=f.force=function(S,P){var F=S.type,ne=F===void 0?5:F,K=S.text,ve=S.buttonText,ke=ve===void 0?"OK":ve,ye=S.callback,X=S.position,Z=X===void 0?p.positions.force||Z.top:X;I(),W();var Y=document.createElement("div"),ue=A();Y.id=ue;var j=document.createElement("div");j.classList.add(p.classes.textbox),j.classList.add(p.classes.backgroundInfo),j.innerHTML='<div class="'+p.classes.textboxInner+'">'+K+"</div>";var oe=document.createElement("div");oe.classList.add(p.classes.button),oe.classList.add(w[ne]),oe.innerHTML=ke,oe.onclick=function(){_(ue,Z),z(),ye?ye():P&&P()},Y.appendChild(j),Y.appendChild(oe),Y.listener=function(k){v(k)&&oe.click()},$(Y,Z),N()},xe=f.confirm=function(S,P,F){var ne=S.text,K=S.submitText,ve=K===void 0?"Yes":K,ke=S.cancelText,ye=ke===void 0?"Cancel":ke,X=S.submitCallback,Z=S.cancelCallback,Y=S.position,ue=Y===void 0?p.positions.confirm||ue.top:Y;I(),W();var j=document.createElement("div"),oe=A();j.id=oe;var k=document.createElement("div");k.classList.add(p.classes.textbox),k.classList.add(p.classes.backgroundInfo),k.innerHTML='<div class="'+p.classes.textboxInner+'">'+ne+"</div>";var U=document.createElement("div");U.classList.add(p.classes.button),U.classList.add(p.classes.elementHalf),U.classList.add(p.classes.backgroundSuccess),U.innerHTML=ve,U.onclick=function(){_(oe,ue),z(),X?X():P&&P()};var B=document.createElement("div");B.classList.add(p.classes.button),B.classList.add(p.classes.elementHalf),B.classList.add(p.classes.backgroundError),B.innerHTML=ye,B.onclick=function(){_(oe,ue),z(),Z?Z():F&&F()},j.appendChild(k),j.appendChild(U),j.appendChild(B),j.listener=function(G){v(G)?U.click():O(G)&&B.click()},$(j,ue),N(j,ue)},ae=function(S,P,F){var ne=S.text,K=S.submitText,ve=K===void 0?"Submit":K,ke=S.cancelText,ye=ke===void 0?"Cancel":ke,X=S.submitCallback,Z=S.cancelCallback,Y=S.position,ue=Y===void 0?p.positions.input||ue.top:Y,j=g(S,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);I(),W();var oe=document.createElement("div"),k=A();oe.id=k;var U=document.createElement("div");U.classList.add(p.classes.textbox),U.classList.add(p.classes.backgroundInfo),U.innerHTML='<div class="'+p.classes.textboxInner+'">'+ne+"</div>";var B=document.createElement("input");B.classList.add(p.classes.inputField),B.setAttribute("autocapitalize",j.autocapitalize||"none"),B.setAttribute("autocomplete",j.autocomplete||"off"),B.setAttribute("autocorrect",j.autocorrect||"off"),B.setAttribute("autofocus",j.autofocus||"true"),B.setAttribute("inputmode",j.inputmode||"verbatim"),B.setAttribute("max",j.max||""),B.setAttribute("maxlength",j.maxlength||""),B.setAttribute("min",j.min||""),B.setAttribute("minlength",j.minlength||""),B.setAttribute("placeholder",j.placeholder||""),B.setAttribute("spellcheck",j.spellcheck||"default"),B.setAttribute("step",j.step||"any"),B.setAttribute("type",j.type||"text"),B.value=j.value||"",j.allowed&&(B.oninput=function(){var we=void 0;if(Array.isArray(j.allowed)){for(var Se="",Pe=j.allowed,lt=0;lt<Pe.length;lt++)Pe[lt]==="an"?Se+="0-9a-zA-Z":Pe[lt]==="a"?Se+="a-zA-Z":Pe[lt]==="n"&&(Se+="0-9"),Pe[lt]==="s"&&(Se+=" ");we=new RegExp("[^"+Se+"]","g")}else d(j.allowed)==="object"&&(we=j.allowed);B.value=B.value.replace(we,"")});var G=document.createElement("div");G.classList.add(p.classes.button),G.classList.add(p.classes.elementHalf),G.classList.add(p.classes.backgroundSuccess),G.innerHTML=ve,G.onclick=function(){_(k,ue),z(),X?X(B.value):P&&P(B.value)};var ee=document.createElement("div");ee.classList.add(p.classes.button),ee.classList.add(p.classes.elementHalf),ee.classList.add(p.classes.backgroundError),ee.innerHTML=ye,ee.onclick=function(){_(k,ue),z(),Z?Z(B.value):F&&F(B.value)},oe.appendChild(U),oe.appendChild(B),oe.appendChild(G),oe.appendChild(ee),oe.listener=function(we){v(we)?G.click():O(we)&&ee.click()},$(oe,ue),B.focus(),N(oe,ue)};f.input=ae;var Ve=f.select=function(S,P){var F=S.text,ne=S.cancelText,K=ne===void 0?"Cancel":ne,ve=S.cancelCallback,ke=S.choices,ye=S.position,X=ye===void 0?p.positions.select||X.top:ye;I(),W();var Z=document.createElement("div"),Y=A();Z.id=Y;var ue=document.createElement("div");ue.classList.add(p.classes.textbox),ue.classList.add(p.classes.backgroundInfo),ue.innerHTML='<div class="'+p.classes.textboxInner+'">'+F+"</div>",Z.appendChild(ue),ke.forEach(function(oe,k){var U=oe.type,B=U===void 0?1:U,G=oe.text,ee=oe.handler,we=document.createElement("div");we.classList.add(w[B]),we.classList.add(p.classes.button),we.classList.add(p.classes.selectChoice);var Se=ke[k+1];Se&&!Se.type&&(Se.type=1),Se&&Se.type===B&&we.classList.add(p.classes.selectChoiceRepeated),we.innerHTML=G,we.onclick=function(){_(Y,X),z(),ee()},Z.appendChild(we)});var j=document.createElement("div");j.classList.add(p.classes.backgroundNeutral),j.classList.add(p.classes.button),j.innerHTML=K,j.onclick=function(){_(Y,X),z(),ve?ve():P&&P()},Z.appendChild(j),Z.listener=function(oe){O(oe)&&j.click()},$(Z,X),N(Z,X)},le=f.date=function(S,P,F){var ne=S.value,K=ne===void 0?new Date:ne,ve=S.submitText,ke=ve===void 0?"OK":ve,ye=S.cancelText,X=ye===void 0?"Cancel":ye,Z=S.submitCallback,Y=S.cancelCallback,ue=S.position,j=ue===void 0?p.positions.date||j.top:ue;I(),W();var oe="&#9662",k=document.createElement("div"),U=document.createElement("div"),B=document.createElement("div"),G=function(Ee){k.innerHTML=p.dateMonths[Ee.getMonth()],U.innerHTML=Ee.getDate(),B.innerHTML=Ee.getFullYear()},ee=function(Ee){var Tt=new Date(K.getFullYear(),K.getMonth()+1,0).getDate(),yn=Ee.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(yn)>Tt&&(yn=Tt.toString()),Ee.target.textContent=yn,Number(yn)<1&&(yn="1"),K.setDate(Number(yn))},we=function(Ee){var Tt=Ee.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);Ee.target.textContent=Tt,K.setFullYear(Number(Tt))},Se=function(Ee){G(K)},Pe=function(Ee){var Tt=new Date(K.getFullYear(),K.getMonth()+Ee+1,0).getDate();K.getDate()>Tt&&K.setDate(Tt),K.setMonth(K.getMonth()+Ee),G(K)},lt=function(Ee){K.setDate(K.getDate()+Ee),G(K)},Pi=function(Ee){var Tt=K.getFullYear()+Ee;Tt<0?K.setFullYear(0):K.setFullYear(K.getFullYear()+Ee),G(K)},Yt=document.createElement("div"),Qa=A();Yt.id=Qa;var Za=document.createElement("div");Za.classList.add(p.classes.backgroundInfo);var ct=document.createElement("div");ct.classList.add(p.classes.dateSelectorInner);var pn=document.createElement("div");pn.classList.add(p.classes.button),pn.classList.add(p.classes.elementThird),pn.classList.add(p.classes.dateSelectorUp),pn.innerHTML=oe;var hn=document.createElement("div");hn.classList.add(p.classes.button),hn.classList.add(p.classes.elementThird),hn.classList.add(p.classes.dateSelectorUp),hn.innerHTML=oe;var bn=document.createElement("div");bn.classList.add(p.classes.button),bn.classList.add(p.classes.elementThird),bn.classList.add(p.classes.dateSelectorUp),bn.innerHTML=oe,k.classList.add(p.classes.element),k.classList.add(p.classes.elementThird),k.innerHTML=p.dateMonths[K.getMonth()],U.classList.add(p.classes.element),U.classList.add(p.classes.elementThird),U.setAttribute("contentEditable",!0),U.addEventListener("input",ee),U.addEventListener("blur",Se),U.innerHTML=K.getDate(),B.classList.add(p.classes.element),B.classList.add(p.classes.elementThird),B.setAttribute("contentEditable",!0),B.addEventListener("input",we),B.addEventListener("blur",Se),B.innerHTML=K.getFullYear();var Wn=document.createElement("div");Wn.classList.add(p.classes.button),Wn.classList.add(p.classes.elementThird),Wn.innerHTML=oe;var zn=document.createElement("div");zn.classList.add(p.classes.button),zn.classList.add(p.classes.elementThird),zn.innerHTML=oe;var qn=document.createElement("div");qn.classList.add(p.classes.button),qn.classList.add(p.classes.elementThird),qn.innerHTML=oe,pn.onclick=function(){return Pe(1)},hn.onclick=function(){return lt(1)},bn.onclick=function(){return Pi(1)},Wn.onclick=function(){return Pe(-1)},zn.onclick=function(){return lt(-1)},qn.onclick=function(){return Pi(-1)};var Xt=document.createElement("div");Xt.classList.add(p.classes.button),Xt.classList.add(p.classes.elementHalf),Xt.classList.add(p.classes.backgroundSuccess),Xt.innerHTML=ke,Xt.onclick=function(){_(Qa,j),z(),Z?Z(K):P&&P(K)};var Qt=document.createElement("div");Qt.classList.add(p.classes.button),Qt.classList.add(p.classes.elementHalf),Qt.classList.add(p.classes.backgroundError),Qt.innerHTML=X,Qt.onclick=function(){_(Qa,j),z(),Y?Y(K):F&&F(K)},ct.appendChild(pn),ct.appendChild(hn),ct.appendChild(bn),ct.appendChild(k),ct.appendChild(U),ct.appendChild(B),ct.appendChild(Wn),ct.appendChild(zn),ct.appendChild(qn),Za.appendChild(ct),Yt.appendChild(Za),Yt.appendChild(Xt),Yt.appendChild(Qt),Yt.listener=function(Ee){v(Ee)?Xt.click():O(Ee)&&Qt.click()},$(Yt,j),N(Yt,j)};f.default={alert:be,force:Me,confirm:xe,input:ae,select:Ve,date:le,setOptions:h,hideAlerts:W}}])})}).call(r,a(0)(n))}])})}),vp=xp(wp()),{default:Mc,...Sp}=vp,ls=Mc!==void 0?Mc:Sp;var HT=Symbol("clean");var BT=Symbol();function cs(e,t){if(typeof e=="string")return t(e);{let n={};for(let r in e)n[r]=cs(e[r],t);return n}}function Rc(e){return t=>{if(t.transform){let n=t.transform;return t=t.input,{input:t,transform(r,a,o){let i=e(r,a,...o);return(...s)=>n(r,i,s)}}}else return{input:t,transform(n,r,a){return e(n,r,...a)}}}}var GT=Rc((e,t,n)=>cs(t,r=>{for(let a in n)r=r.replace(new RegExp(`{${a}}`,"g"),n[a]);return r})),JT=Rc((e,t,n)=>{let r=new Intl.PluralRules(e).select(n);return r in t||(r="many"),cs(t[r],a=>a.replace(/{count}/g,n))});var us=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function gs(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on".concat(t),function(){n(window.event)})}function Fc(e,t){for(var n=t.slice(0,t.length-1),r=0;r<n.length;r++)n[r]=e[n[r].toLowerCase()];return n}function Hc(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function Ap(e,t){for(var n=e.length>=t.length?e:t,r=e.length>=t.length?t:e,a=!0,o=0;o<n.length;o++)r.indexOf(n[o])===-1&&(a=!1);return a}var cr={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":us?173:189,"=":us?61:187,";":us?59:186,"'":222,"[":219,"]":221,"\\":220},vt={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},ms={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Ue={16:!1,18:!1,17:!1,91:!1},Ce={};for(lr=1;lr<20;lr++)cr["f".concat(lr)]=111+lr;var lr,Te=[],Dc=!1,Bc="all",Uc=[],sa=function(e){return cr[e.toLowerCase()]||vt[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},_p=function(e){return Object.keys(cr).find(function(t){return cr[t]===e})},Cp=function(e){return Object.keys(vt).find(function(t){return vt[t]===e})};function $c(e){Bc=e||"all"}function ur(){return Bc||"all"}function Mp(){return Te.slice(0)}function kp(){return Te.map(function(e){return _p(e)||Cp(e)||String.fromCharCode(e)})}function Pp(e){var t=e.target||e.srcElement,n=t.tagName,r=!0;return(t.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!t.readOnly)&&(r=!1),r}function Rp(e){return typeof e=="string"&&(e=sa(e)),Te.indexOf(e)!==-1}function Dp(e,t){var n,r;e||(e=ur());for(var a in Ce)if(Object.prototype.hasOwnProperty.call(Ce,a))for(n=Ce[a],r=0;r<n.length;)n[r].scope===e?n.splice(r,1):r++;ur()===e&&$c(t||"all")}function Op(e){var t=e.keyCode||e.which||e.charCode,n=Te.indexOf(t);if(n>=0&&Te.splice(n,1),e.key&&e.key.toLowerCase()==="meta"&&Te.splice(0,Te.length),(t===93||t===224)&&(t=91),t in Ue){Ue[t]=!1;for(var r in vt)vt[r]===t&&(st[r]=!1)}}function Ip(e){if(typeof e>"u")Object.keys(Ce).forEach(function(i){return delete Ce[i]});else if(Array.isArray(e))e.forEach(function(i){i.key&&fs(i)});else if(typeof e=="object")e.key&&fs(e);else if(typeof e=="string"){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=n[0],o=n[1];typeof a=="function"&&(o=a,a=""),fs({key:e,scope:a,method:o,splitKey:"+"})}}var fs=function(e){var t=e.key,n=e.scope,r=e.method,a=e.splitKey,o=a===void 0?"+":a,i=Hc(t);i.forEach(function(s){var l=s.split(o),u=l.length,c=l[u-1],f=c==="*"?"*":sa(c);if(Ce[f]){n||(n=ur());var m=u>1?Fc(vt,l):[];Ce[f]=Ce[f].filter(function(g){var d=r?g.method===r:!0;return!(d&&g.scope===n&&Ap(g.mods,m))})}})};function Oc(e,t,n,r){if(t.element===r){var a;if(t.scope===n||t.scope==="all"){a=t.mods.length>0;for(var o in Ue)Object.prototype.hasOwnProperty.call(Ue,o)&&(!Ue[o]&&t.mods.indexOf(+o)>-1||Ue[o]&&t.mods.indexOf(+o)===-1)&&(a=!1);(t.mods.length===0&&!Ue[16]&&!Ue[18]&&!Ue[17]&&!Ue[91]||a||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function Ic(e,t){var n=Ce["*"],r=e.keyCode||e.which||e.charCode;if(st.filter.call(this,e)){if((r===93||r===224)&&(r=91),Te.indexOf(r)===-1&&r!==229&&Te.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(d){var T=ms[d];e[d]&&Te.indexOf(T)===-1?Te.push(T):!e[d]&&Te.indexOf(T)>-1?Te.splice(Te.indexOf(T),1):d==="metaKey"&&e[d]&&Te.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(Te=Te.slice(Te.indexOf(T))))}),r in Ue){Ue[r]=!0;for(var a in vt)vt[a]===r&&(st[a]=!0);if(!n)return}for(var o in Ue)Object.prototype.hasOwnProperty.call(Ue,o)&&(Ue[o]=e[ms[o]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(Te.indexOf(17)===-1&&Te.push(17),Te.indexOf(18)===-1&&Te.push(18),Ue[17]=!0,Ue[18]=!0);var i=ur();if(n)for(var s=0;s<n.length;s++)n[s].scope===i&&(e.type==="keydown"&&n[s].keydown||e.type==="keyup"&&n[s].keyup)&&Oc(e,n[s],i,t);if(r in Ce){for(var l=0;l<Ce[r].length;l++)if((e.type==="keydown"&&Ce[r][l].keydown||e.type==="keyup"&&Ce[r][l].keyup)&&Ce[r][l].key){for(var u=Ce[r][l],c=u.splitKey,f=u.key.split(c),m=[],g=0;g<f.length;g++)m.push(sa(f[g]));m.sort().join("")===Te.sort().join("")&&Oc(e,u,i,t)}}}}function Np(e){return Uc.indexOf(e)>-1}function st(e,t,n){Te=[];var r=Hc(e),a=[],o="all",i=document,s=0,l=!1,u=!0,c="+",f=!1;for(n===void 0&&typeof t=="function"&&(n=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(o=t.scope),t.element&&(i=t.element),t.keyup&&(l=t.keyup),t.keydown!==void 0&&(u=t.keydown),t.capture!==void 0&&(f=t.capture),typeof t.splitKey=="string"&&(c=t.splitKey)),typeof t=="string"&&(o=t);s<r.length;s++)e=r[s].split(c),a=[],e.length>1&&(a=Fc(vt,e)),e=e[e.length-1],e=e==="*"?"*":sa(e),e in Ce||(Ce[e]=[]),Ce[e].push({keyup:l,keydown:u,scope:o,mods:a,shortcut:r[s],method:n,key:r[s],splitKey:c,element:i});typeof i<"u"&&!Np(i)&&window&&(Uc.push(i),gs(i,"keydown",function(m){Ic(m,i)},f),Dc||(Dc=!0,gs(window,"focus",function(){Te=[]},f)),gs(i,"keyup",function(m){Ic(m,i),Op(m)},f))}function Fp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(Ce).forEach(function(n){var r=Ce[n].filter(function(a){return a.scope===t&&a.shortcut===e});r.forEach(function(a){a&&a.method&&a.method()})})}var ds={getPressedKeyString:kp,setScope:$c,getScope:ur,deleteScope:Dp,getPressedKeyCodes:Mp,isPressed:Rp,filter:Pp,trigger:Fp,unbind:Ip,keyMap:cr,modifier:vt,modifierMap:ms};for(oa in ds)Object.prototype.hasOwnProperty.call(ds,oa)&&(st[oa]=ds[oa]);var oa;typeof document<"u"&&(Nc=window.hotkeys,st.noConflict=function(e){return e&&window.hotkeys===st&&(window.hotkeys=Nc),st},window.hotkeys=st);var Nc;var gx=ls.alert;var ps=class{#e=performance.now();reset(){this.#e=performance.now()}stop(t){let n=performance.now(),r=Math.round(n-this.#e),a=Qe.green;r>1e4?a=Qe.red:r>1e3&&(a=Qe.yellow),console.debug(Qe.dim(At+" TIMING:"),t,"in",a(r+"ms")),this.#e=n}},gr=class{#e=1;get level(){return this.#e}setLevel(t){switch(t){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...t){this.#e<=0&&console.log(Qe.dim(At+" DEBUG:"),...t)}v(...t){this.#e<=0&&console.log(Qe.dim(At+" VERBOSE:"),...t)}info(...t){this.#e<=1&&console.log(Qe.green(At+" INFO:"),...t)}l(...t){this.#e<=1&&console.log(Qe.green(At+" TEMP INFO:"),...t)}warn(...t){this.#e<=2&&console.warn(Qe.yellow(At+" WARN:"),...t)}error(...t){this.#e<=3&&console.error(Qe.red(At+" ERROR:"),...t)}fatal(...t){this.#e<=4&&console.error(Qe.red(At+" FATAL:"),...t)}timing(){return this.level===0?new ps:{reset:()=>{},stop:()=>{}}}},R=new gr;var hs=/iPhone/i,jc=/iPod/i,Wc=/iPad/i,zc=/\biOS-universal(?:.+)Mac\b/i,bs=/\bAndroid(?:.+)Mobile\b/i,qc=/Android/i,_n=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,ia=/Silk/i,Pt=/Windows Phone/i,Vc=/\bWindows(?:.+)ARM\b/i,Kc=/BlackBerry/i,Gc=/BB10/i,Jc=/Opera Mini/i,Yc=/\b(CriOS|Chrome)(?:.+)Mobile/i,Xc=/Mobile(?:.+)Firefox\b/i,Qc=e=>typeof e<"u"&&e.platform==="MacIntel"&&typeof e.maxTouchPoints=="number"&&e.maxTouchPoints>1&&typeof globalThis.MSStream>"u";function Hp(e){return t=>t.test(e)}function la(e){let t={userAgent:"",platform:"",maxTouchPoints:0};!e&&typeof navigator<"u"?t={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof e=="string"?t.userAgent=e:e&&e.userAgent&&(t={userAgent:e.userAgent,platform:e.platform,maxTouchPoints:e.maxTouchPoints||0});let n=t.userAgent,r=n.split("[FBAN");typeof r[1]<"u"&&(n=r[0]),r=n.split("Twitter"),typeof r[1]<"u"&&(n=r[0]);let a=Hp(n),o={apple:{phone:a(hs)&&!a(Pt),ipod:a(jc),tablet:!a(hs)&&(a(Wc)||Qc(t))&&!a(Pt),universal:a(zc),device:(a(hs)||a(jc)||a(Wc)||a(zc)||Qc(t))&&!a(Pt)},amazon:{phone:a(_n),tablet:!a(_n)&&a(ia),device:a(_n)||a(ia)},android:{phone:!a(Pt)&&a(_n)||!a(Pt)&&a(bs),tablet:!a(Pt)&&!a(_n)&&!a(bs)&&(a(ia)||a(qc)),device:!a(Pt)&&(a(_n)||a(ia)||a(bs)||a(qc))||a(/\bokhttp\b/i)},windows:{phone:a(Pt),tablet:a(Vc),device:a(Pt)||a(Vc)},other:{blackberry:a(Kc),blackberry10:a(Gc),opera:a(Jc),firefox:a(Xc),chrome:a(Yc),device:a(Kc)||a(Gc)||a(Jc)||a(Xc)||a(Yc)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}var ys="DENO",Ts="CHROME",ca="FIREFOX";function Bp(e){let t=Ts;try{let n=navigator?.userAgent||"";/firefox/i.test(n)?t=ca:/deno/i.test(n)&&(t=ys)}catch{}return e===Ts&&t===Ts||e===ca&&t===ca||e===ys&&t===ys}function Zc(){return typeof Deno<"u"}function eu(){return Bp(ca)}function tu(){return!!navigator.maxTouchPoints||"ontouchstart"in document.documentElement}var nu={addListener:()=>{},removeListener:()=>{},hasListener:()=>{}},ru={permissions:{contains:()=>{},request:()=>{}},runtime:{onMessage:nu,openOptionsPage:()=>{},lastError:{message:""}},storage:{sync:{get:()=>{},set:()=>{}}},tabs:{onUpdated:nu,query:()=>{},sendMessage:()=>{}},identity:{getRedirectURL:e=>e||"",launchWebAuthFlow:e=>Promise.resolve(e.url)}};var Q;Zc()?Q=ru:Q=globalThis.immersiveTranslateBrowserAPI;var xs={minVersion:"0.0.20",immediateTranslationTextCount:5e3,interval:36e5,beta:!1,cache:!0,donateUrl:"https://immersive-translate.owenyoung.com/donate.html",feedbackUrl:"https://github.com/immersive-translate/immersive-translate/issues",isShowContextMenu:!0,loadingTheme:"spinner",canary:!1,translationServices:{volcAlpha:{placeholderDelimiters:["{","}"]},volc:{placeholderDelimiters:["{","}"]},tencent:{placeholderDelimiters:["{","}"]},transmart:{placeholderDelimiters:["#","#"]},baidu:{placeholderDelimiters:["#","#"]},caiyun:{placeholderDelimiters:["{","}"]},youdao:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}"]}},shortcuts:{toggleTranslatePage:"Alt+A",toggleTranslateTheWholePage:"Alt+W",toggleTranslateToThePageEndImmediately:"Alt+S",toggleTranslationMask:"Alt+D"},tempTranslateDomainMinutes:0,immediateTranslationPattern:{matches:["www.tumblr.com","twitter.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","mail.google.com","discord.com","web.telegram.org","*.slack.com","https://old.reddit.com/","https://www.reddit.com/r/popular/","https://www.reddit.com/","https://www.reddit.com/hot/","https://www.reddit.com/new/","https://www.reddit.com/top/","https://www.reddit.com/.compact"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},translationParagraphLanguagePattern:{matches:["www.reddit.com","old.reddit.com","twitter.com","www.tumblr.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","read.readwise.io","www.inoreader.com","mail.google.com","google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},sourceLanguageUrlPattern:{},generalRule:{_comment:"",normalizeBody:"",languageDetectMinTextCount:50,wrapperPrefix:"smart",wrapperSuffix:"smart",isPdf:!1,isTransformPreTagNewLine:!1,urlChangeDelay:20,translationBlockStyle:"",isShowUserscriptPagePopup:!0,observeUrlChange:!0,paragraphMinTextCount:8,paragraphMinWordCount:2,shadowRootSelectors:[],blockMinTextCount:32,blockMinWordCount:5,containerMinTextCount:18,lineBreakMaxTextCount:0,globalAttributes:{},globalStyles:{".sr-only":"display:none"},selectors:[],preWhitespaceDetectedTags:["DIV","SPAN"],stayOriginalSelectors:[],additionalSelectors:["h1","section h2","section h3","section h4","main h2","main h3","main h4",".article-title",".article-subtitle",".article_title",".article_subtitle",".article__title",".articleTitle",".Article__content",".title",".abstract",".titleLink",".summary",".content",".headline",".page-content"],atomicBlockTags:[],excludeSelectors:[],additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]","rp","rt"],translationClasses:[],atomicBlockSelectors:[],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","LABEL","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","RT","RP","META","ASIDE","FOOTER","MATH"],metaTags:["META","SCRIPT","STYLE","NOSCRIPT"],additionalExcludeTags:[],stayOriginalTags:["CODE","TT","IMG","SUP","SUB"],additionalStayOriginalTags:[],inlineTags:["A","ABBR","FONT","ACRONYM","B","INS","DEL","RUBY","RP","RB","BDO","MARK","BIG","RT","NOBR","CITE","DFN","EM","I","LABEL","Q","S","SMALL","SPAN","STRONG","SUB","SUP","U","KBD","TT","VAR","IMG","CODE","SCRIPT","STYLE","LINK","TIME","META","WBR"],additionalInlineTags:[],extraInlineSelectors:[],additionalInlineSelectors:[],extraBlockSelectors:["turbo-frame","readme-toc"],allBlockTags:["HGROUP","CONTENT","ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","CANVAS","DD","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","HEADER","FORM","HR","MAIN","SUMMARY","NAV","OL","NOSCRIPT","PRE","SECTION","TABLE","TFOOT","UL","VIDEO","P","DIV","H1","H2","H3","H4","H5","H6","UL","LI","OL","BR","PICTURE","TBODY","TR","TD","TH","SOURCE","C-WIZ","BUTTON","TURBO-FRAME","README-TOC"],pdfNewParagraphLineHeight:2.4,pdfNewParagraphIndent:1.2,pdfNewParagraphIndentRightIndentPx:130,fingerCountToToggleTranslagePageWhenTouching:4,fingerCountToToggleTranslationMaskWhenTouching:0},rules:[{matches:["moz-extension://*/pdf/index.html*"],isPdf:!0,wrapperPrefix:"",wrapperSuffix:"",urlChangeDelay:0,selectors:[".textLayer"],excludeSelectors:[".annotationLayer"],globalStyles:{"div.page":"width: 98%;",".textLayer":"overflow:visible;opacity: 1;"}},{matches:["mail.jabber.org","antirez.com"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.wikipedia.org",excludeSelectors:[".mw-editsection",".mw-cite-backlink","#mw-panel-toc"],stayOriginalSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],extraInlineSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"]},{matches:["twitter.com","mobile.twitter.com","tweetdeck.twitter.com","https://platform.twitter.com/embed*"],selectors:['[data-testid="tweetText"]',".tweet-text",".js-quoted-tweet-text","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)","[data-testid='developerBuiltCardContainer'] > div:nth-child(2)","[data-testid='card.layoutLarge.detail'] > div:nth-child(2)"],extraInlineSelectors:['[data-testid="tweetText"] div']},{matches:["stackoverflow.com","*.stackexchange.com","superuser.com","askubuntu.com","serverfault.com"],additionalSelectors:[".comment-copy"]},{matches:"developer.apple.com/documentation/*",selectors:[".container","h3.title"]},{matches:"news.ycombinator.com",selectors:[".titleline > a",".comment > .commtext",".toptext","a.hn-item-title",".hn-comment-text",".hn-story-title"],excludeSelectors:[".reply"]},{matches:["*.quora.com","quora.com"],additionalSelectors:[".puppeteer_test_question_title",".puppeteer_test_answer_content",".q-text"],globalStyles:{".qu-truncateLines--3":"-webkit-line-clamp: unset;"}},{matches:["old.reddit.com/*/.compact","old.reddit.com/.compact","www.reddit.com/*/.compact","www.reddit.com/.compact"],selectors:[".title > a",".usertext-body"],detectParagraphLanguage:!0},{matches:"old.reddit.com",selectors:["p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0},{matches:"www.reddit.com",selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title']","[data-adclicklocation=media]",".PostContent",".Comment__body","faceplate-batch .md"],detectParagraphLanguage:!0},{matches:"www.reuters.com/",excludeSelectors:["header"]},{matches:"github.com",selectors:[".markdown-title",".markdown-body",".Layout-sidebar p","div > span.search-match","li.repo-list-item p","#responsive-meta-container p"],excludeSelectors:[".css-truncate","[data-test-selector='commit-tease-commit-message']","div.blob-wrapper-embedded"],detectParagraphLanguage:!0},{matches:"www.facebook.com",selectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],atomicBlockSelectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],insertPosition:"afterend",preWhitespaceDetectedTags:["DIV","SPAN"],extraBlockSelectors:["span.x1vvkbs"],excludeSelectors:["[role=button]"],translationClasses:["immersive-translate-text"],detectParagraphLanguage:!0},{matches:"m.youtube.com",selectors:[".comment-text"],atomicBlockSelectors:[".comment-text"],globalStyles:{".comment-text":"max-height:unset;"}},{matches:"www.youtube.com",selectors:["yt-formatted-string[slot=content].ytd-comment-renderer","yt-formatted-string.ytd-video-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title","a#video-title"],wrapperPrefix:"",wrapperSuffix:"",globalStyles:{"ytd-expander.ytd-comment-renderer":"--ytd-expander-max-lines: 1000;","h1.ytd-watch-metadata":"-webkit-line-clamp: unset;max-height: unset;","yt-formatted-string#video-title":"-webkit-line-clamp: unset;max-height: unset;","#video-title":"-webkit-line-clamp: unset;max-height: unset;"},urlChangeDelay:2e3,atomicBlockSelectors:["yt-formatted-string[slot=content].ytd-comment-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title"],excludeSelectors:["[class^='lln-']"],extraBlockSelector:[".ytd-transcript-segment-renderer"],detectParagraphLanguage:!0},{matches:"1paragraph.app",selectors:"#book"},{matches:["*.substack.com","newsletter.rootsofprogress.org"],selectors:[".post-preview-title",".post-preview-description",".post",".comment-body"],excludeSelectors:[".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader"],extraBlockSelectors:[".tweet-link-top",".tweet-link-bottom",".expanded-link"]},{matches:["seekingalpha.com/article/*","seekingalpha.com/news/*"],selectors:["[data-test-id=card-container]"],excludeSelectors:["[data-test-id=post-page-meta]","header > div:first-child"]},{matches:"hn.algolia.com",selectors:[".Story_title > a:first-child",".Story_comment > span"]},{matches:"read.readwise.io",selectors:['div[class^="_titleRow_"]','div[class^="_description_"]',"#document-text-content"],detectParagraphLanguage:!0},{matches:["www.inoreader.com","*.inoreader.com"],selectors:[".article_header_title",".article_title_link",".article_content",".article_magazine_title_link"],observeUrlChange:!1,globalStyles:{".article_title_link":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:["scholar.google.com"],wrapperPrefix:`
`,selectors:["h3 a[data-clk]","div.gs_rs"],atomicBlockSelectors:[".gs_rs","h3 a[data-clk]"]},{matches:"mail.google.com",selectors:["h2[data-thread-perm-id]","span[data-thread-id]","div[data-message-id] div[class='']"],detectParagraphLanguage:!0},{matches:"www.producthunt.com",selectors:["h2","div[class^='styles_htmlText__']","[class^='styles_tagline']","a[href^='/discussions/'].fontWeight-600","button[class^='styles_textButton'] > div > span"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.gitbook.io",additionalSelectors:["main"],_comment:"https://midjourney.gitbook.io/docs/user-manual"},{matches:"arxiv.org",additionalSelectors:["h1","blockquote.abstract"]},{matches:"https://discord.com/channels/*",selectors:["li[id^=chat-messages] div[id^=message-content]","h3[data-text-variant='heading-lg/semibold']","section[aria-label='Search Results'] div[id^=message-content]"],excludeSelectors:["div[class^='repliedTextContent']"],globalStyles:{"div[class^=headerText]":"max-height: unset;","h3[data-text-variant='heading-lg/semibold']":"-webkit-line-clamp: none;"},detectParagraphLanguage:!0,wrapperPrefix:"<br />",wrapperSuffix:""},{matches:"web.telegram.org/z/*",selectors:[".text-content"],detectParagraphLanguage:!0},{matches:["web.telegram.org/k/*","web.telegram.org/k/"],selectors:[".message"],detectParagraphLanguage:!0},{matches:"gist.github.com",selectors:[".markdown-body",".readme"],detectParagraphLanguage:!0},{matches:"lobste.rs",selectors:[".u-repost-of",".comment_text"]},{matches:"*.slack.com",selectors:[".p-rich_text_section"],detectParagraphLanguage:!0},{matches:"1paragraph.app",additionalSelectors:["#book"]},{matches:"www.google.*/search*",detectParagraphLanguage:!0,excludeSelectors:["a h3 + div","div#sfooter"],wrapperSuffix:"",globalStyles:{"div[data-content-feature='1'] > div":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:2']":"-webkit-line-clamp: unset;max-height: unset;"},extraBlockSelectors:[".MUFPAc"]},{matches:"lowendtalk.com",selectors:["[role=heading]","h1",".userContent"]},{matches:"www.linkedin.com/jobs/*",selectors:["#job-details > span"]},{matches:"www.linkedin.com",addtionalSelectors:["span.break-words > span > span[dir=ltr]"]},{matches:"www.indiehackers.com",selectors:[".content","h1",".feed-item__title-link"]},{matches:"libreddit.de",selectors:["h2.post_title",".comment_body > .md"]},{matches:["notion.site","www.notion.so"],selectors:["div[data-block-id]"]},{matches:"www.newyorker.com",additionalSelectors:["h1","[data-testid=SummaryItemHed]"]},{matches:"start.me",selectors:[".rss-article__title",".rss-articles-list__article-link",".rss-showcase__title",".rss-showcase__text"]},{matches:"www.scmp.com",additionalSelectors:[".info__subHeadline",".section-content h2"]},{matches:"www.lesswrong.com",extraBlockSelectors:["span.commentOnSelection"]},{matches:["mastodon.social","mastodon.online","kolektiva.social","indieweb.social","mastodon.world","infosec.exchange"],selectorMatches:["div#mastodon"],selectors:["div.status__content__text"],detectLanguage:!0},{matches:"www.cnbc.com",additionalSelectors:["div.RenderKeyPoints-list"]},{matches:"app.daily.dev",selectors:["h1",".typo-body","article h3","[class^=markdown_markdown]"],globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset"}},{matches:"www.aljazeera.com",addtionalSelectors:["h1",".article__subhead"]},{matches:["*.pornhub.com","pornhub.com"],selectors:[".title >a",".title > span",".thumbnailTitle",".commentMessage > span"],detectParagraphLanguage:!0,wrapperPrefix:`

`,wrapperSuffix:`
`,globalStyles:{".title":"height: unset; max-height: unset;"}},{matches:["weibo.com"],selectors:["div[class^='detail_wbtext']"]},{matches:["medium.com","*.medium.com"],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],urlChangeDelay:2e3,selectors:["article section","h2","[aria-hidden='false'] pre","article p"],excludeSelectors:["[aria-label='Post Preview Reading Time']"],globalStyles:{h2:"-webkit-line-clamp: unset;max-height:unset;","article p":"-webkit-line-clamp: unset;max-height:unset;"}},{selectorMatches:["meta[property='og:site_name'][content='Nitter']"],selectors:[".tweet-content",".quote-text"]},{matches:"*.fandom.com",additionalSelectors:[".mcf-card-article__title"]},{matches:["www.washingtonpost.com"],additionalSelectors:["[data-qa='article-body']"]},{matches:"www.economist.com",extraInlineSelectors:"span[data-caps='initial']"},{matches:"www.healthline.com",excludeSelectors:".icon-hl-trusted-source-after"},{matches:"www.amazon.com",selectors:["h1","h2 > a > span","[data-a-expander-name='book_description_expander'] > div","[data-feature-name='editorialReviews']",'[data-a-expander-name="review_text_read_more"] > div > span','[data-feature-name="featurebullets"]','[data-feature-name="aplus"'],excludeBlockSelectors:["div.reviewText > span"],globalStyles:{".s-line-clamp-2":"-webkit-line-clamp: unset;max-height: unset;","[data-a-expander-name='review_text_read_more']":" max-height: unset;"}},{matches:"www.bloomberg.com",urlChangeDelay:2e3},{matches:"xueshu.baidu.com",globalStyles:{".abstract_wr":"height: unset; overflow: visible; max-height:unset;"}},{matches:"www.sciencedirect.com",urlChangeDelay:2e3,stayOriginalSelectors:["span.display"]},{matches:"www.thehighestofthemountains.com",extraBlockSelectors:"div"},{matches:"telegra.ph",normalizeBody:"div.ql-editor[contenteditable='false']"},{matches:["*.annas-archive.org","annas-archive.org"],selectors:["h3.text-xl.font-bold","div[class='truncate text-sm']"],globalStyles:{"div[id^='link-index-']":"height: unset; max-height: unset;"},normalizeBody:"body",extraBlockSelectors:["a.custom-a"]},{matches:["explainshell.com"],selectors:["[class='help-box']"]},{matches:["apnews.com"],urlChangeDelay:2e3},{matches:"play.google.com",additionalSelectors:["header[data-review-id] + div"]},{matches:["www.tumblr.com"],selectors:["article h1","article > header + div","[data-testid=notes-root] p","div.k31gt","p","article ul","article h2","article h3","article h4","article h5","article h6","article blockquote","article ol"],excludeSelectors:["div.fAAi8","div.wvu3V"],preWhitespaceDetectedTags:["DIV","SPAN","P"]},{matches:["mail.qq.com/cgi-bin/frame_html"],selectors:["#thisiddoesnotexists"]},{matches:"www.foxnews.com",shadowRootSelectors:["[data-spot-im-module-default-area='conversation'] > div"],excludeSelectors:[".components-MessageDetails-index__message-details-wrapper","div[class^=SlideDown__container]",".components-MessageActions-index__messageActionsWrapper","span[data-openweb-allow-amp]","div.spcv_typing-users"]},{matches:"www.afreecatv.com",globalStyles:{"a.title":"max-height:unset;-webkit-line-clamp:unset;"}},{matches:"opennet.ru",excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","LABEL","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","RT","RP","META"]},{matches:"getpocket.com",selectors:["h2.title","div.excerpt p","main > article"],globalStyles:{"h2.title":"max-height:unset;-webkit-line-clamp:unset;","div.excerpt p":"max-height:unset;-webkit-line-clamp:unset;"}},{matches:"huggingface.co",globalStyles:{".line-clamp-2":"-webkit-line-clamp:unset;max-height:unset;"}},{matches:"www.statista.com",globalStyles:{".itemContent__text":"height:unset;max-height:unset;",".itemContent__subline":"height:unset;max-height:unset;"}}]};function ws(e){return Array.isArray(e)?e:e?[e]:[]}function vs(e,t){return t?(Array.isArray(t)||(t=[t]),Array.from(new Set([...t,e]))):[e]}function Ut(e,t){return t?(Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),t.filter(n=>!e.includes(n))):[]}function ua(e,t){let n=[],r=Object.keys(e);for(let i of r){let s=e[i];Array.isArray(s)&&n.push(i)}let a={...e};return Object.keys(t).forEach(i=>{let s=t[i];if(s!==void 0)if(!n.includes(i))a[i]=s;else if(i.startsWith("additional")){let l=ws(s);a[i]=Array.from(new Set([...a[i],...l]))}else a[i]=ws(s)}),a}function Up(){if(se.PROD==="1")return{};let e={};if(se.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID&&se.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY){let t={secretId:se.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,secretKey:se.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY};e.translationServices={},e.translationServices.tencent=t}if(se.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID&&se.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY){let t={appid:se.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,key:se.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY};e.translationServices||(e.translationServices={}),e.translationServices.baidu=t}if(se.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN){let t={token:se.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN};e.translationServices||(e.translationServices={}),e.translationServices.caiyun=t}if(se.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY){let t={apikey:se.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY};e.translationServices||(e.translationServices={}),e.translationServices.openl=t}if(se.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID&&se.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET){let t={appId:se.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,appSecret:se.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET};e.translationServices||(e.translationServices={}),e.translationServices.youdao=t}if(se.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID&&se.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY){let t={accessKeyId:se.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,secretAccessKey:se.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY};e.translationServices||(e.translationServices={}),e.translationServices.volc=t}if(se.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY){let t={authKey:se.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY};e.translationServices||(e.translationServices={}),e.translationServices.deepl=t}return se.IMMERSIVE_TRANSLATE_SERVICE&&(e.translationService=se.IMMERSIVE_TRANSLATE_SERVICE),se.DEBUG==="1"&&(e.debug=!0,e.cache=!1,e.alpha=!0),se.MOCK==="1"&&(e.translationService="mock"),e}async function fr(){let e=await Q.storage.local.get(Kn);if(e[Kn]){let t=e[Kn],n=t.tempTranslationUrlMatches||[],r=n.filter(i=>i.expiredAt>Date.now()),a=!1;r.length!==n.length&&(n=r,a=!0);let o={...t,tempTranslationUrlMatches:[...n]};return a&&await dr(o),o}else return{}}async function dr(e){await Q.storage.local.set({[Kn]:e})}async function au(e){await Q.storage.local.set({[Vn]:e})}async function mr(){let e=await Q.storage.local.get(Vn),t={...xs,buildinConfigUpdatedAt:se.BUILD_TIME};if(e[Vn]){let g=e[Vn];if(g&&g.buildinConfigUpdatedAt){let d=new Date(g.buildinConfigUpdatedAt),T=new Date(t.buildinConfigUpdatedAt);d>T&&(t=g)}}let n={};if(!me()&&Q.commands&&Q.commands.getAll){let g=await Q.commands.getAll();for(let d of g)d.name&&d.shortcut&&(n[d.name]=d.shortcut)}let r=Wp(),a=Up(),o=await $p(),i=globalThis.IMMERSIVE_TRANSLATE_CONFIG||{},s=await fr(),l=new Date;if(s&&s.tempTranslationUrlMatches&&s.tempTranslationUrlMatches.length>0){let g=s.tempTranslationUrlMatches.filter(d=>new Date(d.expiredAt)>l);if(g.length>0){let d=o.translationUrlPattern?o.translationUrlPattern?.matches||[]:[],T=Array.isArray(d)?d:[d],y=Array.from(new Set(T.concat(g.map(p=>p.match))));o.translationUrlPattern={...o.translationUrlPattern,matches:y}}}let u=Object.assign({},i,a,o);if(!u.interfaceLanguage){let g=await jp();u.interfaceLanguage=g}let c=Object.assign(r,t),f=Object.keys(c),m=["translationUrlPattern","translationLanguagePattern","immediateTranslationPattern","translationBodyAreaPattern","translationParagraphLanguagePattern","translationThemePatterns","translationGeneralConfig","shortcuts"];for(let g of f){let d=g;if(d==="generalRule")typeof u[d]=="object"&&(c[d]=ua(r[d],u[d]));else if(d==="translationServices"){let T=u[d]||{},y=t[d]||{},p=Object.keys(y),h=Object.keys(T),x=[...new Set([...p,...h])],L={};for(let I of x)L[I]={...y[I],...T[I]};c[d]=L}else if(typeof u[d]!="string"&&typeof u[d]!="boolean"&&typeof u[d]!="number"&&m.includes(d))u[d]&&(c[d]=Object.assign(c[d],u[d])),d==="shortcuts"&&(c[d]={...c[d],...n});else if(d==="rules"){if(Array.isArray(u[d])&&(c[d]=[...u[d],...c[d]]),se.PROD==="0"&&se.DEV_RULES){let T=JSON.parse(se.DEV_RULES);c[d]=[...T,...c[d]]}}else u[d]!==void 0&&(c[d]=u[d])}return c.donateUrl=t.donateUrl,c.minVersion=t.minVersion,c.feedbackUrl=t.feedbackUrl,c}async function $p(){return(await Q.storage.sync.get("userConfig")||{}).userConfig||{}}var jp=async()=>{let n=(await Q.i18n.getAcceptLanguages()).map(r=>on(r)).find(r=>Zt[r]);return n||"en"},Wp=()=>{let e={...xs,buildinConfigUpdatedAt:se.BUILD_TIME};return{...e,targetLanguage:Fr,interfaceLanguage:"en",debug:!1,alpha:!1,translationUrlPattern:{matches:[],excludeMatches:[]},translationLanguagePattern:{matches:[],excludeMatches:[]},translationThemePatterns:{},translationParagraphLanguagePattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationBodyAreaPattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationTheme:"none",translationService:"google",translationArea:"main",translationStartMode:"dynamic",translationServices:{},generalRule:{...e.generalRule},translationGeneralConfig:{engine:"google"},rules:[]}};var Oe=class extends Error{constructor(n,r,a){super(r);this.name=n,a&&(this.details=a)}};async function su(e){let t;if(e&&e.retry&&e.retry>0)try{t=await So(ou.bind(null,e),{multiplier:2,maxAttempts:e.retry})}catch(n){throw n&&n.name==="RetryError"&&n.cause?n.cause:n}else t=await ou(e);return t}async function ou(e){e.body;let{url:t,responseType:n,...r}=e;n||(n="json"),r={mode:"cors",...r};let o=await(e.fetchPolyfill||fetch)(t,r);if(o.ok&&o.status>=200&&o.status<400){if(n==="json")return await o.json();if(n==="text")return await o.text();if(n==="raw"){let i=await o.text(),s=Object.fromEntries([...o.headers.entries()]),l=o.url;return l||(o.headers.get("X-Final-URL")?l=o.headers.get("X-Final-URL"):l=t),{body:i,headers:s,status:o.status,statusText:o.statusText,url:l}}}else{let i;try{i=await o.text()}catch(s){R.error("parse response failed",s)}throw i&&R.error("fail response",i),new Oe("fetchError",o.status+": "+o.statusText||"",i)}}function $t(e,t){var n=(e&65535)+(t&65535),r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}function zp(e,t){return e<<t|e>>>32-t}function fa(e,t,n,r,a,o){return $t(zp($t($t(t,e),$t(r,o)),a),n)}function $e(e,t,n,r,a,o,i){return fa(t&n|~t&r,e,t,a,o,i)}function je(e,t,n,r,a,o,i){return fa(t&r|n&~r,e,t,a,o,i)}function We(e,t,n,r,a,o,i){return fa(t^n^r,e,t,a,o,i)}function ze(e,t,n,r,a,o,i){return fa(n^(t|~r),e,t,a,o,i)}function ga(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;var n,r,a,o,i,s=1732584193,l=-271733879,u=-1732584194,c=271733878;for(n=0;n<e.length;n+=16)r=s,a=l,o=u,i=c,s=$e(s,l,u,c,e[n],7,-680876936),c=$e(c,s,l,u,e[n+1],12,-389564586),u=$e(u,c,s,l,e[n+2],17,606105819),l=$e(l,u,c,s,e[n+3],22,-1044525330),s=$e(s,l,u,c,e[n+4],7,-176418897),c=$e(c,s,l,u,e[n+5],12,1200080426),u=$e(u,c,s,l,e[n+6],17,-1473231341),l=$e(l,u,c,s,e[n+7],22,-45705983),s=$e(s,l,u,c,e[n+8],7,1770035416),c=$e(c,s,l,u,e[n+9],12,-1958414417),u=$e(u,c,s,l,e[n+10],17,-42063),l=$e(l,u,c,s,e[n+11],22,-1990404162),s=$e(s,l,u,c,e[n+12],7,1804603682),c=$e(c,s,l,u,e[n+13],12,-40341101),u=$e(u,c,s,l,e[n+14],17,-1502002290),l=$e(l,u,c,s,e[n+15],22,1236535329),s=je(s,l,u,c,e[n+1],5,-165796510),c=je(c,s,l,u,e[n+6],9,-1069501632),u=je(u,c,s,l,e[n+11],14,643717713),l=je(l,u,c,s,e[n],20,-373897302),s=je(s,l,u,c,e[n+5],5,-701558691),c=je(c,s,l,u,e[n+10],9,38016083),u=je(u,c,s,l,e[n+15],14,-660478335),l=je(l,u,c,s,e[n+4],20,-405537848),s=je(s,l,u,c,e[n+9],5,568446438),c=je(c,s,l,u,e[n+14],9,-1019803690),u=je(u,c,s,l,e[n+3],14,-187363961),l=je(l,u,c,s,e[n+8],20,1163531501),s=je(s,l,u,c,e[n+13],5,-1444681467),c=je(c,s,l,u,e[n+2],9,-51403784),u=je(u,c,s,l,e[n+7],14,1735328473),l=je(l,u,c,s,e[n+12],20,-1926607734),s=We(s,l,u,c,e[n+5],4,-378558),c=We(c,s,l,u,e[n+8],11,-2022574463),u=We(u,c,s,l,e[n+11],16,1839030562),l=We(l,u,c,s,e[n+14],23,-35309556),s=We(s,l,u,c,e[n+1],4,-1530992060),c=We(c,s,l,u,e[n+4],11,1272893353),u=We(u,c,s,l,e[n+7],16,-155497632),l=We(l,u,c,s,e[n+10],23,-1094730640),s=We(s,l,u,c,e[n+13],4,681279174),c=We(c,s,l,u,e[n],11,-358537222),u=We(u,c,s,l,e[n+3],16,-722521979),l=We(l,u,c,s,e[n+6],23,76029189),s=We(s,l,u,c,e[n+9],4,-640364487),c=We(c,s,l,u,e[n+12],11,-421815835),u=We(u,c,s,l,e[n+15],16,530742520),l=We(l,u,c,s,e[n+2],23,-995338651),s=ze(s,l,u,c,e[n],6,-198630844),c=ze(c,s,l,u,e[n+7],10,1126891415),u=ze(u,c,s,l,e[n+14],15,-1416354905),l=ze(l,u,c,s,e[n+5],21,-57434055),s=ze(s,l,u,c,e[n+12],6,1700485571),c=ze(c,s,l,u,e[n+3],10,-1894986606),u=ze(u,c,s,l,e[n+10],15,-1051523),l=ze(l,u,c,s,e[n+1],21,-2054922799),s=ze(s,l,u,c,e[n+8],6,1873313359),c=ze(c,s,l,u,e[n+15],10,-30611744),u=ze(u,c,s,l,e[n+6],15,-1560198380),l=ze(l,u,c,s,e[n+13],21,1309151649),s=ze(s,l,u,c,e[n+4],6,-145523070),c=ze(c,s,l,u,e[n+11],10,-1120210379),u=ze(u,c,s,l,e[n+2],15,718787259),l=ze(l,u,c,s,e[n+9],21,-343485551),s=$t(s,r),l=$t(l,a),u=$t(u,o),c=$t(c,i);return[s,l,u,c]}function iu(e){var t,n="",r=e.length*32;for(t=0;t<r;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function Ss(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var r=e.length*8;for(t=0;t<r;t+=8)n[t>>5]|=(e.charCodeAt(t/8)&255)<<t%32;return n}function qp(e){return iu(ga(Ss(e),e.length*8))}function Vp(e,t){var n,r=Ss(e),a=[],o=[],i;for(a[15]=o[15]=void 0,r.length>16&&(r=ga(r,e.length*8)),n=0;n<16;n+=1)a[n]=r[n]^909522486,o[n]=r[n]^1549556828;return i=ga(a.concat(Ss(t)),512+t.length*8),iu(ga(o.concat(i),512+128))}function lu(e){var t="0123456789abcdef",n="",r,a;for(a=0;a<e.length;a+=1)r=e.charCodeAt(a),n+=t.charAt(r>>>4&15)+t.charAt(r&15);return n}function Es(e){return unescape(encodeURIComponent(e))}function cu(e){return qp(Es(e))}function Kp(e){return lu(cu(e))}function uu(e,t){return Vp(Es(e),Es(t))}function Gp(e,t){return lu(uu(e,t))}function Cn(e,t,n){return t?n?uu(t,e):Gp(t,e):n?cu(e):Kp(e)}function gu(e,t,n){let r=Jp(e,t),a=[],o={from:e[0].from,fromByClient:e[0].fromByClient,to:e[0].to,tempSentences:[],url:e[0].url};for(let i of r)(o.tempSentences.reduce((l,u)=>l+u.text.length,0)+i.text.length>t||o.tempSentences.length>=n)&&(a.push(o),o={fromByClient:o.fromByClient,from:i.from,to:i.to,tempSentences:[],url:i.url}),(o.from!==i.from||o.to!==i.to)&&(o.tempSentences.length>0?(a.push(o),o={fromByClient:o.fromByClient,from:i.from,to:i.to,tempSentences:[],url:i.url}):(o.from=i.from,o.to=i.to)),o.tempSentences.push(i);return o.tempSentences.length>0&&a.push(o),a}function Jp(e,t){let n=[];for(let r=0;r<e.length;r++){let a=e[r],{from:o,to:i,text:s,url:l}=a,u=s.split(/\r?\n/),c=[],f="";for(let m=0;m<u.length;m++){let g=u[m];if(g===""){c.length>0?m<u.length-1&&(c[c.length-1].suffix+=`
`):f+=`
`;continue}else if(g.length>t){let d=[];Ls(g,t,d);for(let T=0;T<d.length;T++){let y=d[T],{text:p,prefix:h,suffix:x}=y;c.push({from:o,to:i,text:p,prefix:h,suffix:x,index:r,url:l})}}else c.push({text:g,prefix:f,suffix:"",from:o,to:i,index:r,url:l});c.length>0&&m<u.length-1&&(c[c.length-1].suffix+=`
`)}n.push(...c)}return n}function pr(e,t){let n=on(e),r=on(t),a=n===r;return a?!0:(a=n.startsWith("zh")&&r.startsWith("zh"),a)}function Ls(e,t,n){let a=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((o,i)=>{let s=e.lastIndexOf(i,t);return s>o?s:o},-1);if(a===-1)n.push({text:e.slice(0,t),prefix:"",suffix:""}),e.length>t&&Ls(e.slice(t),t,n);else{let o=e.slice(0,a+1);o.startsWith(" ")?n.push({text:o.slice(1),prefix:" ",suffix:""}):n.push({text:o,prefix:"",suffix:""}),a+1<e.length&&Ls(e.slice(a+1),t,n)}return n}var Mn=[];async function da(e,t){return await new Promise((n,r)=>{let a=e,o=1,i=indexedDB.open(a,o);i.onsuccess=s=>{n(i.result)},i.onerror=s=>{console.error("onerror: Error opening the database, switching to non-database mode",s),r()},i.onupgradeneeded=s=>{let l=i.result,u=t||"cache";l.createObjectStore(u,{keyPath:"key"})}})}async function fu(e){let t=`${he}-${e.service}@${e.from}->${e.to}`;return await Xp(t,e)}async function du(e){let t=Cn(e.originalText),n=`${he}-${e.service}@${e.from}->${e.to}`;return await Yp(n,t)}async function Yp(e,t){let n=await da(e);return await new Promise((r,a)=>{if(!n)return a();let o="cache",s=n.transaction([o],"readonly").objectStore(o).get(t);s.onsuccess=l=>{n.close();let u=s.result;r(u)},s.onerror=l=>{n.close(),console.error("queryInDB->onerror:",l),a()}})}async function Xp(e,t){let n=await da(e);return(await Zp()).includes(e)||await Qp(e),await new Promise(a=>{if(!n)return a(!1);let o="cache",s=n.transaction([o],"readwrite").objectStore(o).put(t);s.onsuccess=l=>{n.close(),a(!0)},s.onerror=l=>{console.error("addInDB->onerror:",l),n.close(),a(!1)}})}async function Qp(e){let t="cache_list",n=await da(he+"-cacheList",t),a=n.transaction([t],"readwrite").objectStore(t).put({key:e});a.onsuccess=o=>{n.close(),Mn.push(e)},a.onerror=o=>{n.close(),console.error(o)}}async function Zp(){if(Mn&&Mn.length>0)return Mn;let e=await da(he+"-cacheList","cache_list");return Mn=await new Promise(t=>{let n="cache_list",a=e.transaction([n],"readonly").objectStore(n).getAllKeys();a.onsuccess=o=>{e.close(),t(a.result)},a.onerror=o=>{e.close(),console.error(o),t([])}}),Mn}var eh=/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,th=/[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g,nh=/[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,rh=/(\s+)|([\p{P}\p{S}])/gu,ah=[["zh-CN",eh],["ja",th],["ko",nh]];function mu(e){if(!e)return"auto";let t="auto",n=0,r=0,a=e.match(rh);a&&(r=a.reduce((i,s)=>i+s.length,0));let o=e.length-r;for(let i of ah){let s=i[1],l=i[0],u=e.match(s),c=u?u.length:0;c>n&&(n=c,t=l)}return n*2.5/o>.5?t:"auto"}var hu="auto",ma="auto",pu="auto";function bu(e){hu=e}function jt(e){ma=e}function Wt(){return ma!=="auto"?ma:pu!=="auto"?pu:hu}function pa(){return ma}var hr=new Map,kn=class{constructor(t,n=!1){this.logger=new gr,n&&this.logger.setLevel("debug"),this.fromType=t,hr.has(t)||(hr.set(t,new Map),Q.runtime.onMessage.addListener((r,a,o)=>{let i=r.from,s=r.to,l,u,c;a.tab&&a.tab.id&&(l=a.tab.id,i=`${i}:${l}`,u=a.tab.url,c=a.tab.active),this.logger.debug(`${r.to} received message [${r.payload.method}] from ${r.from}`,r.payload.data?r.payload.data:" ");let f=_s(s),{type:m,name:g}=f;if(m!==t)return!1;let d=_s(i),y=hr.get(m).get(g);if(!y)return this.logger.debug(`no message handler for ${m}:${s}, but it's ok`),!1;let{messageHandler:p,sync:h}=y,x={type:t,name:d.name,id:l,url:u,active:c};if(h){try{let L=p(r.payload,x);o({ok:!0,data:L})}catch(L){o({ok:!1,errorName:L.name,errorMessage:L.message,errorDetails:L.details})}return!1}else return p(r.payload,x).then(L=>{o({ok:!0,data:L})}).catch(L=>{o({ok:!1,errorName:L.name,errorMessage:L.message,errorDetails:L.details})}),!0}))}getConnection(t,n,r){let a=!1;r&&r.sync&&(a=!0);let o=this.fromType,i=hr.get(o);if(i.has(t))return i.get(t).connectionInstance;{let s=new As(`${o}:${t}`,this.logger);return hr.get(o).set(t,{messageHandler:n,sync:a,connectionInstance:s}),s}}},As=class{constructor(t,n){this.from=t,this.logger=n}async sendMessage(t,n){let r=_s(t),{type:a,id:o}=r;if(a!=="content_script"){let i={to:t,from:this.from,payload:n};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");try{let s=await Q.runtime.sendMessage(i);return yu(i,s,this.logger)}catch(s){if(a==="popup"){let l=`popup ${t} is not active, so the message does not send, ignore this error, ${JSON.stringify(n)}`;return this.logger.debug(l,n,t,s),Promise.resolve({message:l})}else throw s}}else{let i={from:this.from,to:t,payload:n};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");let s=await Q.tabs.sendMessage(o,i);return yu(i,s,this.logger)}}};function yu(e,t,n){if(t.ok)return n.debug(`${e.from} received response from ${e.to}:`,t.data?t.data:" "),t.data;throw new Oe(t.errorName||"UnknownError",t.errorMessage||"Unknown error",t.errorDetails)}function _s(e){let t=e.split(":");if(t.length<2)throw new Error("not a valid to string");let n={type:t[0],name:t[1]};if(t[0]==="content_script"){let r=parseInt(t[2]);if(!isNaN(r))n.id=r;else throw new Error("tab id not a valid number")}return n}var ln=async function(e,t){let{method:n,data:r}=e;n==="translateTheWholePage"?await Cs():n==="translateTheMainPage"?await wa():n==="translateToThePageEndImmediately"?await vu():n==="toggleTranslatePage"?await Ta():n==="toggleTranslateTheWholePage"?await wu():n==="toggleTranslateTheMainPage"?await xu():n==="translatePage"?await Rt():n==="toggleTranslationMask"?await xa():n==="restorePage"?zt():n==="showTranslationOnly"?void 0:n==="setCurrentPageLanguageByClient"&&jt(r)},oh=function(e,t){let{method:n,data:r}=e;if(R.debug(`content script received sync message: ${n}`,r||" "),n==="ping")return"pong";if(n==="getPageStatus")return Ge();if(n==="getCurrentPageLanguage")return Wt()},ha,ba;function Tu(){let e=ya();vn()||sh(),e.sendMessage("popup:main_sync",{method:"ready"}).catch(n=>{})}function ya(){return ha||(ha=new kn("content_script",!1).getConnection("main",ln),ha)}function sh(){return ba||(ba=new kn("content_script",!1).getConnection("main_sync",oh,{sync:!0}),ba)}async function nt(e){return await ya().sendMessage("background:main",e)}function te(e){return me()||Gi()?(e.fetchPolyfill=globalThis.GM_fetch,su(e)):nt({method:"fetch",data:e})}function Ze(){return me()?mr():nt({method:"getConfig"})}function Su(){return me()?fr():nt({method:"getLocalConfig"})}function va(e){return me()?dr(e):nt({method:"setLocalConfig",data:e})}function Eu(e){return me()?au(e):nt({method:"setBuildinConfig",data:e})}function it(e){if(R.v("options",e),e.text){let t=mu(e.text);if(t!=="auto")return Promise.resolve(t)}if(me()){let t=Q.extra.detectLanguage(e.text,e.minLength);return Promise.resolve(t)}return nt({method:"detectLanguage",data:e})}function Lu(){return nt({method:"detectTabLanguage"})}function Au(e){if(me()){let n=new CustomEvent(Pr,{detail:e});document.dispatchEvent(n);return}ya().sendMessage("popup:main_sync",{method:"setPageStatus",data:e}).catch(n=>{})}function _u(e){return me()?du(e):nt({method:"queryParagraphCache",data:e})}async function Cu(e){if(me()){await fu(e);return}return nt({method:"setParagraphCache",data:e})}async function Ms(){if(me())return Promise.resolve();await nt({method:"mockRequest"})}function Sa(e=!1){return me()?(Q.runtime.openOptionsPage(e),Promise.resolve()):nt({method:"openOptionsPage"})}function Ea(e=!1){return me()?(Q.extra.openAboutPage(e),Promise.resolve()):nt({method:"openAboutPage"})}function Mu(){return me()?(R.warn("autoSyncLatestConfig is not support in monkey"),Promise.resolve()):nt({method:"autoSyncLatestConfig"})}async function ku(){let e="auto";return document.body&&document.body.textContent&&document.body.textContent.trim()&&(e=await it({text:an(document.body)})),e==="auto"&&document.documentElement&&document.documentElement.lang&&(e=on(document.documentElement.lang)),e}function ks(e,t){if(!(e&&e.textContent&&e.textContent.trim()))return[];let{rule:n,state:{translationArea:r}}=t,a=[];if(r==="body")return[e];if(n&&n.selectors.length>0){let i=n.selectors.map(s=>{let l=e.matches(s),u=[];l?u=[e]:u=e.querySelectorAll(s);for(let c of u)ge(c,en)||ie(c,en,"1");return Array.from(u)}).flat();a.push(...i.map(s=>({element:s,reserve:!0})))}else{if(n&&n.additionalSelectors.length>0){let f=Ye(e,n.additionalSelectors);for(let m of f)ge(m,en)||ie(m,en,"1");a.push(...f.map(m=>({element:m,reserve:!0})))}let i=Ye(e,["article"]);a.push(...i.map(f=>({element:f,reserve:!0})));let s;if(a.length===0&&(s=e.querySelectorAll("[role=main]"),s.length===0&&(s=e.querySelectorAll("main")),s.length===0&&(s=e.querySelectorAll(".main")),s.length>0)){let f=Array.from(s);a=a.concat(f.map(m=>({element:m,reserve:!0})))}let l=[],u=f=>{if(f.nodeType===Node.ELEMENT_NODE&&Xe(f,t.rule,!1))return NodeFilter.FILTER_REJECT;if(f.nodeType===Node.TEXT_NODE&&(f.textContent?f.textContent.trim():"").length>=n.containerMinTextCount){let g=f.parentNode;g&&g.parentNode&&(g=g.parentNode),g&&g.nodeType===Node.ELEMENT_NODE&&(l.includes(g)||l.push(g))}return NodeFilter.FILTER_ACCEPT},c=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,u);for(;c.nextNode(););a.push(...l.map(f=>({element:f,reserve:!1})))}let o=Ji(e,a,n);return o.sort(function(i,s){return i.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}),o}var Ps=[];function Pu(e){Ps.push(e)}function Rs(){Ps.forEach(e=>e()),Ps=[]}function mt(e,t,n,r){let a=[],{rule:o}=r,i=Zn(r);if(e.length===0)return null;e=e.map(y=>y.element?y:{element:y});let s="",l=!1;for(let y=0;y<e.length;y++){let h=e[y].element;if(typeof h=="string"){s+=h;continue}let x="";Ur(h,`[${Bi}]`)?x=ih(h)||"":x=h.innerText||"";let L=x.startsWith(" "),I=x.endsWith(" ");h.tagName==="A"&&(L=!0,I=!0);let A=Sn(h,o);if(x===""||A){A&&(L=!0,I=!0);let w={type:"element",value:h};a.push(w);let E=a.length-1,v=`${i[0]}${E}${i[1]}`;s+=(L?" ":"")+v+(I?" ":"");continue}if(!Xe(h,o,!0)){{let w=t?x:x.trim().replace(/\n/g," ");if(fo(w)||mo(w)||po(w)||el(w)){let E={type:"element",value:h};a.push(E);let v=a.length-1,O=`${i[0]}${v}${i[1]}`;s+=(L?" ":"")+O+(I?" ":"")}else l=!0,s+=(L?" ":"")+w+(I?" ":"")}if(typeof h!="string"){let w=Qn(h.nextSibling,t);w&&(s+=w)}}}if(!l)return null;let u=!1,c=s.split(" ").length,f=s.split(`
`).length;c<=o.blockMinWordCount&&s.length<=o.blockMinTextCount&&f<2&&(u=!0);let m=e.map(y=>y.element),g=Nt(e),d=!1;if(g){let p=globalThis.getComputedStyle(g).writingMode;d=p?p.includes("vertical"):!1}let T={rootFrame:n,isVertical:d,elements:m,text:s,variables:a,inline:u,preWhitespace:t};return Qi(T,r.state.translationArea==="body"?2:o.paragraphMinTextCount,r.state.translationArea==="body"?1:o.paragraphMinWordCount,r)?T:null}function ih(e){let t="",n=a=>a.nodeType===Node.ELEMENT_NODE?ge(a,ut,!0)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:a.nodeType===Node.TEXT_NODE?(a.textContent&&a.textContent.trim()!==""&&(t+=a.textContent.replace(/\s+/g," ")),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT,r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,n);for(;r.nextNode(););return t}var lh=1,cn=new Map;function Ou(){return cn}function qt(e){return cn.get(e)}function br(e,t){cn.set(e,t)}function Iu(){cn.clear()}function Ru(e){if(!ge(e,tn))return!1;if(ge(e,Tn))return!0;let t=Mt(e,nn);if(!t)return!1;let n=parseInt(t),r=cn.has(n);if(!r){let a=document.getElementById(`${et}-${n}`);a&&a.remove()}return r}function Dt(e,t){let n={...e,id:lh++,languageByClient:"auto",languageByLocal:"auto"};n.elements.forEach(r=>{r instanceof HTMLElement&&(ie(r,tn,"1"),ie(r,nn,`${n.id}`))}),t.push(n),cn.set(n.id,{...n,state:"Original",observers:[]})}async function Nu(e,t,n){let r=[],{targetLanguage:a,rule:o}=n;for(let m of t){if(Xe(m,o,!1))continue;let g=ge(m,xn),d=[];if(ge(m,rt)){if(!Ru(m)){let h=mt([m],!0,e,n);h&&Dt(h,r)}continue}let T=h=>{if(!(h.nodeType===Node.TEXT_NODE||h.nodeType===Node.ELEMENT_NODE))return NodeFilter.FILTER_REJECT;if(h.nodeType===Node.ELEMENT_NODE){let x=h;if(x.isContentEditable||Ru(h))return NodeFilter.FILTER_REJECT;if(ie(x,tn,"1"),ge(x,rt)){if(d.length>0){let I=mt([...d],g,e,n);I&&Dt(I,r),d.length=0}d.push(x);let L=mt([...d],g,e,n);return L&&Dt(L,r),d.length=0,NodeFilter.FILTER_REJECT}}if(Xe(h,o,!0)){if(_e(h.nodeName,["CODE","TT"])&&_e(h.parentNode?.nodeName,["PRE"]))return NodeFilter.FILTER_REJECT;if(ft(h,o))return Du(h,d,r,g,e,n),NodeFilter.FILTER_REJECT;if(d.length>0){let x=mt([...d],g,e,n);x&&Dt(x,r),d.length=0}return NodeFilter.FILTER_REJECT}return _e(h.nodeName,["PRE"])?(h.classList.contains("code"),NodeFilter.FILTER_REJECT):ft(h,o)?(Du(h,d,r,g,e,n),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT},y=document.createTreeWalker(m,NodeFilter.SHOW_ELEMENT,T),p=y.nextNode();for(;p;){if(d.length>0){let h=mt([...d],g,e,n);h&&Dt(h,r),d.length=0}p=y.nextNode()}if(d.length>0){let h=mt([...d],g,e,n);h&&Dt(h,r),d.length=0}}let i=r.map(m=>{let{text:g}=m;return it({text:g,minLength:n.rule.languageDetectMinTextCount})}),s=await Promise.all(i),l=[],u=n?.config?.translationLanguagePattern?.excludeMatches||[],c="auto";n.state.isDetectParagraphLanguage||(c=pa());let f=Wt();return s.forEach((m,g)=>{let d=m;d==="auto"&&(d=f);let T={...r[g],languageByLocal:d,languageByClient:c||"auto"};if(cn.set(T.id,{...T,state:"Original",observers:[]}),!pr(m,a)){if(u.length>0&&u.some(h=>pr(m,h)))return;l.push(T)}}),l}function ch(e,t){let n=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null),a=null,o=!1;for(;a=r.nextNode();){let s=a.textContent||"",l=s.trim();if(!o&&s.length>0&&l.length===0){o=!0,n.push(" ");continue}l.length>0&&(n.push(a.parentElement),o=!1)}let i=n[n.length-1];if(i&&typeof i!="string"){let s=Qn(i.nextSibling,t);s&&n.push(s)}if(typeof n[n.length-1]!="string"){let s=Qn(e.nextSibling,t);s&&n.push(s)}return n}function Du(e,t,n,r,a,o){let i=e.previousElementSibling;if(i&&!ft(i,o.rule)&&t.length>0){let l=mt([...t],r,a,o);l&&Dt(l,n),t.length=0}Xe(e,o.rule,!1)?Xi(e,o.rule)||t.push(e):Sn(e,o.rule)?t.push(e):Ur(e,["code","tt"])?t.push(...ch(e,r)):t.push(e)}async function Uu(e,t,n,r){let a=[],{rule:o}=n;for(let i=0;i<t.length;i++){let s=t[i],l=r[i];if(!l)throw new Error("targetContainer is null");let u=[],c=!0,f=null,m=function(T){let y=T;if(_e(y.nodeName,["DIV","BR"]))return c=!0,NodeFilter.FILTER_REJECT;if(y.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(gh(T))return NodeFilter.FILTER_REJECT;if(ie(y,tn,"1"),ft(y,o)){let p=Nt(u),h=globalThis.getComputedStyle(y);if(!p)u.push(Bu(y,h));else{let x=globalThis.getComputedStyle(p),L=Ds(x),I=Ds(h),A=Hu(I,L),w=!1;if(c&&f&&Hu(I,f).left>=1.5&&f.left>-3&&(w=!0),!w&&c){let v=(y.innerText||y.textContent||"").trim();(v.startsWith("\u2022")||v.charCodeAt(0)===61623||/^\d+\./.test(v))&&(w=!0)}!w&&c&&Nt(u)&&Hr(u).reduce(($,_)=>{let N=Ds(globalThis.getComputedStyle(_));return Math.max($,N.right)},0)-L.right>o.pdfNewParagraphIndentRightIndentPx&&(w=!0),c&&(f=I,c=!1),w||(w=uh(A,o)),w&&Fu(u,a,e,n,l),u.push(Bu(y,h)),u.push(" ")}return NodeFilter.FILTER_REJECT}return NodeFilter.FILTER_ACCEPT},g=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,m),d=g.nextNode();for(;d;)d=g.nextNode();Fu(u,a,e,n,l)}return a}function Fu(e,t,n,r,a){if(e.length>0){let o=mt([...e],!1,n,r);o&&(o.isPdf=!0,o.targetContainer=a,o.inline=!1,Dt(o,t)),e.length=0}}function Ds(e){return{top:parseFloat(e.top.slice(0,-2)),left:parseFloat(e.left.slice(0,-2)),right:parseFloat(e.left.slice(0,-2))+parseFloat(e.width.slice(0,-2)),fontSize:parseFloat(e.fontSize.slice(0,-2))}}function uh(e,t){return e.fontSize>2||e.fontSize<-2||e.top>=t.pdfNewParagraphLineHeight||e.top<=t.pdfNewParagraphLineHeight*-1}function Hu(e,t){let n=t.fontSize,r=e.fontSize;return{top:(e.top-t.top)/n,left:(e.left-t.left)/n,fontSize:r-n}}function Bu(e,t){return t.fontFamily==="monospace"?{element:e,isStayOriginal:!0,targetTagName:"code"}:e}function gh(e){if(!ge(e,tn))return!1;if(ge(e,Tn))return!0;let t=Mt(e,nn);if(!t)return!1;let n=parseInt(t),a=Ou().has(n);if(!a){let o=document.getElementById(`${et}-${n}`);o&&o.remove()}return a}function $u(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function fh(e,t,n=[],r,a){let o=["notranslate"];return r&&o.push(Vi),e&&(o.push(`${he}-target-translation-theme-${e}`),t?o.push(`${co}-theme-${e}`):o.push(`${lo}-theme-${e}`)),n.length>0&&o.push(...n),t?o.push(co):(o.push(lo),a&&o.push(qi)),o}function dh(e){let t=["notranslate",Wi];return e&&t.push(`${he}-target-translation-theme-${e}-inner`),t}function ju(e,t,n){let{rule:r,state:a}=n,{translationTheme:o}=a,{variables:i,isVertical:s}=e;i=i||[];let{text:l}=t,{wrapperPrefix:u,wrapperSuffix:c}=r,f=Zn(n),m="afterend",g=new RegExp(`${f[0]}(\\d+)${f[1]}`,"g"),d=$u(l);i.length>0&&(d=d.replace(g,h=>{let x=d.indexOf(h),L=d[x-1]===" ",I=d[x+h.length]===" ",A=h.slice(f[0].length,-f[1].length),w=Number(A);if(isNaN(w))return h;let E=i[Number(w)];if(E&&E.type==="element"){let v=E.value.outerHTML;return L||(v=" "+v),I||(v=v+" "),v}else R.error("variable type not supported",E,h);return h}));let T=fh(o,e.inline,r.translationClasses||[],e.preWhitespace,n.rule.isPdf);s&&T.push(zi);let y=dh(o),p="";return r.translationBlockStyle&&(p=`style="${r.translationBlockStyle}"`),d=`<span ${p} class="${T.join(" ")}"><span class="${y.join(" ")}">${d}</span></span>`,e.inline||(u==="smart"?d=`<br />${d}`:d=`${u}${d}`,c==="smart"?d=`${d}`:d=`${d}${c}`),e.inline&&(d=`<span class="notranslate">&#160;</span>${d}`),{html:d,position:m}}function zu(e,t){let n=[];for(let r of e){if(ge(r,rt))continue;if(ie(r,to,"1"),r.normalize(),t.lineBreakMaxTextCount>0){let o=s=>s.nodeType===Node.ELEMENT_NODE&&Xe(s,t,!0)?NodeFilter.FILTER_REJECT:(s.nodeType===Node.TEXT_NODE&&(s.textContent?s.textContent.trim():"").length>=t.lineBreakMaxTextCount&&Is(s,t.lineBreakMaxTextCount),NodeFilter.FILTER_ACCEPT),i=document.createTreeWalker(r,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,o);for(;i.nextNode(););}if(!(t.excludeTags.includes("PRE")||t.additionalExcludeTags.includes("PRE"))&&t.isTransformPreTagNewLine){let o=r.querySelectorAll("pre");for(let i of o)Wu(i)}t.preWhitespaceDetectedTags.includes(r.tagName)&&(tl(r,xn)||(mh(r)?(ie(r,xn,"1"),t.isTransformPreTagNewLine&&Wu(r)):ie(r,xn,"0"))),Os(0,r,t,n)}return{hiddenElements:n}}function Os(e,t,n,r=[]){if(ge(t,rt))return;let a=!1;if(e===0){let o=Sn(t,n);t.childNodes&&t.childNodes.length===1&&t.nodeType===Node.ELEMENT_NODE&&ft(t,n)&&!o&&(a=!0)}if(t&&t.childNodes&&t.childNodes.length>0){for(let o of t.childNodes)if(o.nodeType===Node.ELEMENT_NODE){if(Xe(o,n,!1))continue;{let i=globalThis.getComputedStyle(o),s=!1;if(i.display==="none"&&(r.push(o),s=!0),!s){let l=i.clip,u=i.zIndex,c=i.height,f=i.width,m=0;if(u.startsWith("-")){let g=parseInt(u);isNaN(g)||(m=g)}if((l==="rect(1px, 1px, 1px, 1px)"||m<0)&&(s=!0),!s&&o.nodeName!=="BR"){let g=parseInt(c),d=parseInt(f);!isNaN(g)&&!isNaN(d)&&(g>0&&g<8||d>0&&d<=8)&&(s=!0)}}if(s){ie(o,ut,"1",!0);continue}else{if(_e(o.nodeName,["DIV"])||rl(o,n))if(i.display==="inline"||i.display==="inline-flex"){if(!ge(o,rn)){ie(o,Ct,"1");continue}}else i.display==="block"||i.display;else if(_e(o.nodeName,["SPAN","A"])&&!i.display.startsWith("inline")){ge(o,Ct)||(ie(o,rn,"1"),Os(e+1,o,n,r));continue}if(ft(o,n)&&!a)continue;Os(e+1,o,n,r)}}}else if(o.nodeType===Node.TEXT_NODE){let i=o.textContent;if(i&&i.trim().length>0){let s=document.createElement("span");o.after(s),s.appendChild(o)}}}}function mh(e){let t=window.getComputedStyle(e);return t.whiteSpace.startsWith("pre")||t.whiteSpace==="break-spaces"}function Wu(e){let n=e.innerHTML.replace(/\n/g,"<br />");e.innerHTML=n}function Is(e,t){let n=e.textContent||"";if(n.trim().length<=t)return;let o=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((i,s)=>{let l=n.lastIndexOf(s,t);return l>i?l:i},-1);if(o===-1)n.length>t+20&&Is(e,t+20);else{let i=n.slice(o+1);o++,i.startsWith(" ")&&o++;let s=e.splitText(o),l=document.createElement("br");s.parentNode?.insertBefore(l,s),o+1<n.length&&Is(s,t)}}function qu(e,t){let n=[];for(let r of e){let a=0,o=1e5,i=document.createElement("div"),s=c=>{let f=c;if(_e(f.nodeName,["DIV","BR"]))return NodeFilter.FILTER_REJECT;if(f.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(_e(f.nodeName,["SPAN"])){let m=f.getBoundingClientRect(),g=globalThis.getComputedStyle(f),d=m.right,T=m.left,y=g.top.slice(0,-2),p=g.fontSize.slice(0,-2);return d>a&&(a=d),T<o&&(o=T),ie(f,Jn,`${T}`),ie(f,Or,`${d}`),ie(f,Ui,y),ie(f,$i,p),NodeFilter.FILTER_ACCEPT}else return NodeFilter.FILTER_ACCEPT},l=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,s);for(;l.nextNode(););let u=a-o;u<600&&(u=600),n.push(i),i.style.left=a+"px",i.style.width=a+"px",i.classList.add(Nr),r.childNodes.length>0&&r.insertBefore(i,r.childNodes[0])}return{targetContainers:n}}var ce=class{constructor(t,n){this.maxTextLength=1800;this.throttleLimit=3;this.isSupportList=!0;this.maxTextGroupLength=200;this.serviceConfig=t,this.generalConfig=n}static getAllProps(){return[]}static getProps(){return[]}async init(){}getMaxTextGroupLength(){return this.maxTextGroupLength}translate(t){throw new Error("Not implemented")}translateList(t){throw new Error("Not implemented")}async multipleTranslate(t,n){if(t.sentences.length===0)return{sentences:[]};let{sentences:r}=t,a=[],o=[],i=0,s=new Set,l=null,u=new Set;for(let m of r)m.from&&m.from!=="auto"&&u.add(m.from);let c=!1;u.size>1&&(c=!0);try{o=gu(r,this.maxTextLength,this.maxTextGroupLength)}catch(m){if(n){s.has(i)&&i++;for(let g=i;g<r.length;g++){let d=r[g];n(m,null,d)}l=m}else l=m}let f=Qr({limit:this.throttleLimit,interval:1e3});R.debug("tempSentenceGroups",o.map(m=>m));for(let m=0;m<o.length;m++){let g=o[m],d=g.url,T=f(async()=>{let h=g.from;if(c&&(h="auto"),g.fromByClient&&g.fromByClient!=="auto"&&(h=g.fromByClient),this.isSupportList)return await this.translateList({text:g.tempSentences.map(L=>L.text),from:h,to:g.to,url:d});{let x=g.tempSentences.map(w=>w.text).join(io),L=await this.translate({text:x,from:h,to:g.to,url:d}),{text:I}=L;return{text:I.split(io),from:L.from,to:L.to}}}),y;try{y=await T()}catch(h){if(n){s.has(i)&&i++;for(let x=i;x<r.length;x++){let L=r[x];n(h,null,L)}l=h;continue}else{l=h;continue}}let{text:p}=y;for(let h=0;h<p.length;h++)try{let x=p[h],L=g.tempSentences[h],{index:I,prefix:A,suffix:w}=L;a[I]===void 0?a[I]={...r[I],from:g.from,to:g.to,text:A+x+w}:a[I].text+=A+x+w,I!==i&&n&&(s.add(i),n(null,a[i],r[i])),i=I}catch(x){if(n){s.has(i)&&i++;for(let L=i;L<r.length;L++){let I=r[L];n(x,null,I)}throw x}else throw x}}if(n&&!s.has(i)&&a[i]&&r[i]&&n(null,a[i],r[i]),l)throw l;return{sentences:a}}detectLanguageLocally(t){return it({text:t,minLength:18})}detectLanguageRemotely(t){return Promise.resolve("auto")}detectLanguage(t){return t.length>=50?this.detectLanguageLocally(t):this.detectLanguageRemotely(t)}};var Pn="input is invalid type",Ns=typeof window=="object",Vt=Ns?window:{};Vt.JS_SHA256_NO_WINDOW&&(Ns=!1);var ph=!Ns&&typeof self=="object",hh=!Vt.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;hh?Vt=global:ph&&(Vt=self);var oS=!Vt.JS_SHA256_NO_COMMON_JS&&typeof module=="object"&&module.exports,sS=typeof define=="function"&&define.amd,yr=!Vt.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",H="0123456789abcdef".split(""),bh=[-2147483648,8388608,32768,128],pt=[24,16,8,0],La=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],Aa=["hex","array","digest","arrayBuffer"],Ie=[];(Vt.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"});yr&&(Vt.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return typeof e=="object"&&e.buffer&&e.buffer.constructor===ArrayBuffer});var Vu=function(e,t){return function(n){return new Ne(t,!0).update(n)[e]()}},Gu=function(e){var t=Vu("hex",e);t.create=function(){return new Ne(e)},t.update=function(a){return t.create().update(a)};for(var n=0;n<Aa.length;++n){var r=Aa[n];t[r]=Vu(r,e)}return t},Ku=function(e,t){return function(n,r){return new _a(n,t,!0).update(r)[e]()}},Ju=function(e){var t=Ku("hex",e);t.create=function(a){return new _a(a,e)},t.update=function(a,o){return t.create(a).update(o)};for(var n=0;n<Aa.length;++n){var r=Aa[n];t[r]=Ku(r,e)}return t};function Ne(e,t){t?(Ie[0]=Ie[16]=Ie[1]=Ie[2]=Ie[3]=Ie[4]=Ie[5]=Ie[6]=Ie[7]=Ie[8]=Ie[9]=Ie[10]=Ie[11]=Ie[12]=Ie[13]=Ie[14]=Ie[15]=0,this.blocks=Ie):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}Ne.prototype.update=function(e){if(!this.finalized){var t,n=typeof e;if(n!=="string"){if(n==="object"){if(e===null)throw new Error(Pn);if(yr&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!yr||!ArrayBuffer.isView(e)))throw new Error(Pn)}else throw new Error(Pn);t=!0}for(var r,a=0,o,i=e.length,s=this.blocks;a<i;){if(this.hashed&&(this.hashed=!1,s[0]=this.block,s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0),t)for(o=this.start;a<i&&o<64;++a)s[o>>2]|=e[a]<<pt[o++&3];else for(o=this.start;a<i&&o<64;++a)r=e.charCodeAt(a),r<128?s[o>>2]|=r<<pt[o++&3]:r<2048?(s[o>>2]|=(192|r>>6)<<pt[o++&3],s[o>>2]|=(128|r&63)<<pt[o++&3]):r<55296||r>=57344?(s[o>>2]|=(224|r>>12)<<pt[o++&3],s[o>>2]|=(128|r>>6&63)<<pt[o++&3],s[o>>2]|=(128|r&63)<<pt[o++&3]):(r=65536+((r&1023)<<10|e.charCodeAt(++a)&1023),s[o>>2]|=(240|r>>18)<<pt[o++&3],s[o>>2]|=(128|r>>12&63)<<pt[o++&3],s[o>>2]|=(128|r>>6&63)<<pt[o++&3],s[o>>2]|=(128|r&63)<<pt[o++&3]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.block=s[16],this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}};Ne.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=bh[t&3],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}};Ne.prototype.hash=function(){var e=this.h0,t=this.h1,n=this.h2,r=this.h3,a=this.h4,o=this.h5,i=this.h6,s=this.h7,l=this.blocks,u,c,f,m,g,d,T,y,p,h,x;for(u=16;u<64;++u)g=l[u-15],c=(g>>>7|g<<25)^(g>>>18|g<<14)^g>>>3,g=l[u-2],f=(g>>>17|g<<15)^(g>>>19|g<<13)^g>>>10,l[u]=l[u-16]+c+l[u-7]+f<<0;for(x=t&n,u=0;u<64;u+=4)this.first?(this.is224?(y=300032,g=l[0]-1413257819,s=g-150054599<<0,r=g+24177077<<0):(y=704751109,g=l[0]-210244248,s=g-1521486534<<0,r=g+143694565<<0),this.first=!1):(c=(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10),f=(a>>>6|a<<26)^(a>>>11|a<<21)^(a>>>25|a<<7),y=e&t,m=y^e&n^x,T=a&o^~a&i,g=s+f+T+La[u]+l[u],d=c+m,s=r+g<<0,r=g+d<<0),c=(r>>>2|r<<30)^(r>>>13|r<<19)^(r>>>22|r<<10),f=(s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7),p=r&e,m=p^r&t^y,T=s&a^~s&o,g=i+f+T+La[u+1]+l[u+1],d=c+m,i=n+g<<0,n=g+d<<0,c=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),f=(i>>>6|i<<26)^(i>>>11|i<<21)^(i>>>25|i<<7),h=n&r,m=h^n&e^p,T=i&s^~i&a,g=o+f+T+La[u+2]+l[u+2],d=c+m,o=t+g<<0,t=g+d<<0,c=(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),f=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7),x=t&n,m=x^t&r^h,T=o&i^~o&s,g=a+f+T+La[u+3]+l[u+3],d=c+m,a=e+g<<0,e=g+d<<0;this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+n<<0,this.h3=this.h3+r<<0,this.h4=this.h4+a<<0,this.h5=this.h5+o<<0,this.h6=this.h6+i<<0,this.h7=this.h7+s<<0};Ne.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,a=this.h4,o=this.h5,i=this.h6,s=this.h7,l=H[e>>28&15]+H[e>>24&15]+H[e>>20&15]+H[e>>16&15]+H[e>>12&15]+H[e>>8&15]+H[e>>4&15]+H[e&15]+H[t>>28&15]+H[t>>24&15]+H[t>>20&15]+H[t>>16&15]+H[t>>12&15]+H[t>>8&15]+H[t>>4&15]+H[t&15]+H[n>>28&15]+H[n>>24&15]+H[n>>20&15]+H[n>>16&15]+H[n>>12&15]+H[n>>8&15]+H[n>>4&15]+H[n&15]+H[r>>28&15]+H[r>>24&15]+H[r>>20&15]+H[r>>16&15]+H[r>>12&15]+H[r>>8&15]+H[r>>4&15]+H[r&15]+H[a>>28&15]+H[a>>24&15]+H[a>>20&15]+H[a>>16&15]+H[a>>12&15]+H[a>>8&15]+H[a>>4&15]+H[a&15]+H[o>>28&15]+H[o>>24&15]+H[o>>20&15]+H[o>>16&15]+H[o>>12&15]+H[o>>8&15]+H[o>>4&15]+H[o&15]+H[i>>28&15]+H[i>>24&15]+H[i>>20&15]+H[i>>16&15]+H[i>>12&15]+H[i>>8&15]+H[i>>4&15]+H[i&15];return this.is224||(l+=H[s>>28&15]+H[s>>24&15]+H[s>>20&15]+H[s>>16&15]+H[s>>12&15]+H[s>>8&15]+H[s>>4&15]+H[s&15]),l};Ne.prototype.toString=Ne.prototype.hex;Ne.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,a=this.h4,o=this.h5,i=this.h6,s=this.h7,l=[e>>24&255,e>>16&255,e>>8&255,e&255,t>>24&255,t>>16&255,t>>8&255,t&255,n>>24&255,n>>16&255,n>>8&255,n&255,r>>24&255,r>>16&255,r>>8&255,r&255,a>>24&255,a>>16&255,a>>8&255,a&255,o>>24&255,o>>16&255,o>>8&255,o&255,i>>24&255,i>>16&255,i>>8&255,i&255];return this.is224||l.push(s>>24&255,s>>16&255,s>>8&255,s&255),l};Ne.prototype.array=Ne.prototype.digest;Ne.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e};function _a(e,t,n){var r,a=typeof e;if(a==="string"){var o=[],i=e.length,s=0,l;for(r=0;r<i;++r)l=e.charCodeAt(r),l<128?o[s++]=l:l<2048?(o[s++]=192|l>>6,o[s++]=128|l&63):l<55296||l>=57344?(o[s++]=224|l>>12,o[s++]=128|l>>6&63,o[s++]=128|l&63):(l=65536+((l&1023)<<10|e.charCodeAt(++r)&1023),o[s++]=240|l>>18,o[s++]=128|l>>12&63,o[s++]=128|l>>6&63,o[s++]=128|l&63);e=o}else if(a==="object"){if(e===null)throw new Error(Pn);if(yr&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!yr||!ArrayBuffer.isView(e)))throw new Error(Pn)}else throw new Error(Pn);e.length>64&&(e=new Ne(t,!0).update(e).array());var u=[],c=[];for(r=0;r<64;++r){var f=e[r]||0;u[r]=92^f,c[r]=54^f}Ne.call(this,t,n),this.update(c),this.oKeyPad=u,this.inner=!0,this.sharedMemory=n}_a.prototype=new Ne;_a.prototype.finalize=function(){if(Ne.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();Ne.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),Ne.prototype.finalize.call(this)}};var Rn=Gu();Rn.sha256=Rn;Rn.sha224=Gu(!0);Rn.sha256.hmac=Ju();Rn.sha224.hmac=Ju(!0);var Yu=Rn;var Xu=Yu.sha256;function ht(e){return Promise.resolve(Xu(e))}function Ca(e){return Array.from(new Uint8Array(e)).map(r=>r.toString(16).padStart(2,"0")).join("")}function Kt(e,t){let n=Xu.hmac.create(t);return n.update(e),Promise.resolve(n.array())}async function Qu(e,t){let n=await Kt(e,t);return Ca(n)}async function Ma(e,t){let n=yh(t),r=await Kt(e,n);return Ca(r)}function yh(e){let t=[];return e.replace(/../g,function(n){return t.push(parseInt(n,16)),""}),new Uint8Array(t).buffer}var Zu=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","jp"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],bt=class extends ce{constructor(n,r){super(n,r);this.secretId="";this.secretKey="";this.isSupportList=!0;if(!n||!n.secretId||!n.secretKey)throw new Error("secretId and secretKey are required");this.secretId=n.secretId,this.secretKey=n.secretKey}static getUTCDate(n){let r=n.getUTCFullYear(),a=`${n.getUTCMonth()+1}`.padStart(2,"0"),o=`${n.getUTCDate()}`.padStart(2,"0");return`${r}-${a}-${o}`}static getAllProps(){return[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]}async translate(n){let{text:r,from:a,to:o}=n,i=JSON.stringify({ProjectId:0,Source:bt.langMap.get(a)||"auto",SourceText:r,Target:bt.langMap.get(o)||o}),s=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslate",payload:i,service:"tmt",version:"2018-03-21"});return{text:s.Response.TargetText,from:bt.langMapReverse.get(s.Response.Source)||a,to:bt.langMapReverse.get(s.Response.Target)||o}}async translateList(n){let{text:r,from:a,to:o}=n,i=JSON.stringify({ProjectId:0,Source:bt.langMap.get(a)||"auto",SourceTextList:r,Target:bt.langMap.get(o)||o}),s=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslateBatch",payload:i,service:"tmt",version:"2018-03-21"});return{text:s.Response.TargetTextList,from:bt.langMapReverse.get(s.Response.Source)||a,to:bt.langMapReverse.get(s.Response.Target)||o}}async signedRequest({secretId:n,secretKey:r,action:a,payload:o,service:i,version:s}){let l=`${i}.tencentcloudapi.com`,u=new Date,c=`${new Date().valueOf()}`.slice(0,10),f=["POST","/","","content-type:application/json; charset=utf-8",`host:${l}`,"","content-type;host",await ht(o)].join(`
`),m=bt.getUTCDate(u),g=["TC3-HMAC-SHA256",c,`${m}/${i}/tc3_request`,await ht(f)].join(`
`),d=await Qu(m,`TC3${r}`),T=await Ma(i,d),y=await Ma("tc3_request",T),p=await Ma(g,y),h=await te({retry:2,url:`https://${i}.tencentcloudapi.com`,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Host:l,"X-TC-Action":a,"X-TC-Timestamp":c,"X-TC-Region":"ap-beijing","X-TC-Version":s,Authorization:`TC3-HMAC-SHA256 Credential=${n}/${m}/${i}/tc3_request, SignedHeaders=content-type;host, Signature=${p}`},body:o});if(h instanceof Error)throw h;if(h.Response&&h.Response.Error&&h.Response.Error.Message)throw new Error(h.Response.Error.Message);return h}},un=bt;un.langMap=new Map(Zu),un.langMapReverse=new Map(Zu.map(([n,r])=>[r,n]));var eg=[["auto","auto"],["zh-CN","zh-CN"],["zh-TW","zh-TW"],["en","en"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["ceb","ceb"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["haw","haw"],["he","he"],["hi","hi"],["hmn","hmn"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["jw","jw"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["fil","tl"],["tr","tr"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zu","zu"]],Tr=class extends ce{constructor(n,r){super(n,r);this.isSupportList=!1;this.throttleLimit=100}async translate(n){let{text:r,from:a,to:o}=n;if(!r)return{...n};let i=Tr.langMap.get(a)||"auto",s=Tr.langMap.get(o)||o,l=await this.fetchWithoutToken(r,i,s);if(!l)throw new Error("google translate NETWORK_ERROR");if(!l.data[0]||l.data[0].length<=0)throw new Error("google translate API_SERVER_ERROR");return{text:l.data[0].map(c=>c[0]).filter(Boolean).join(""),from:Tr.langMapReverse.get(l.data[2])||"auto",to:o}}async fetchWithoutToken(n,r,a){let o=new URLSearchParams({client:"gtx",dt:"t",sl:r,tl:a,q:n}),i="https://translate.googleapis.com/translate_a/single?"+o.toString();return{data:await te({retry:2,url:i})}}},gn=Tr;gn.langMap=new Map(eg),gn.langMapReverse=new Map(eg.map(([n,r])=>[r,n]));function tg(e){return e.result.texts}function Th(e,t){return t?e+(t-e%t):e}function xh(e,t){return e.split(t).length-1}function ng(e){let t=Date.now(),n=1;for(let r of e)n+=xh(r,"i");return Th(t,n)}function wh(e,t){return Math.floor(Math.random()*(t-e+1))+e}function Fs(){return wh(1e6,1e8)}var rg="https://www2.deepl.com/jsonrpc",ka="auto",ag=[{code:"BG",language:"Bulgarian"},{code:"ZH",language:"Chinese"},{code:"CS",language:"Czech"},{code:"DA",language:"Danish"},{code:"NL",language:"Dutch"},{code:"EN",language:"English"},{code:"ET",language:"Estonian"},{code:"FI",language:"Finnish"},{code:"FR",language:"French"},{code:"DE",language:"German"},{code:"EL",language:"Greek"},{code:"HU",language:"Hungarian"},{code:"IT",language:"Italian"},{code:"JA",language:"Japanese"},{code:"LV",language:"Latvian"},{code:"LT",language:"Lithuanian"},{code:"PL",language:"Polish"},{code:"PT",language:"Portuguese"},{code:"RO",language:"Romanian"},{code:"RU",language:"Russian"},{code:"SK",language:"Slovak"},{code:"SL",language:"Slovenian"},{code:"ES",language:"Spanish"},{code:"SV",language:"Swedish"}],og=["formal","informal"];function ig(e,t=ka,n=Fs()){return{jsonrpc:"2.0",method:"LMT_split_text",params:{commonJobParams:{mode:"translate"},lang:{lang_user_selected:t,user_preferred_langs:[]},texts:e},id:n}}function vh(e,t=1){let n=[],r=0;for(let a=0;a<e.length;a++){let o=e[a].chunks;for(let i=0;i<o.length;i++){let s=o[i];n.push({kind:"default",_index:a,sentences:[{id:r,text:s.sentences[0].text,prefix:s.sentences[0].prefix}],raw_en_context_before:o.slice(0,r).map(l=>l.sentences[0].text),raw_en_context_after:r+1<o.length?[o[r+1].sentences[0].text]:[],preferred_num_beams:t}),r++}}return n}function sg(e){return e.reduce((t,n)=>{let r=n.chunks;for(let a of r)t.push(a.sentences[0].text);return t},[])}function Sh(e){if(!e)return{};if(!og.includes(e))throw new Error("Formality tone '{formality_tone}' not supported.");return{formality:e}}function lg(e,t,n,r=Fs(),a=1,o){let i=sg(n);return{jsonrpc:"2.0",method:"LMT_handle_jobs",params:{jobs:vh(n,a),lang:{user_preferred_langs:[t,e],source_lang_computed:e,target_lang:t},priority:1,commonJobParams:Sh(o),timestamp:ng(sg(n))},id:r}}function Eh(e=ag){return e.reduce((t,n)=>(t[n.code.toLowerCase()]=n.code,t[n.language.toLowerCase()]=n.code,t),{})}function Hs(e){return Eh()[e.toLowerCase()]}var cg={Accept:"*/*","Accept-Language":"en-US;q=0.8,en;q=0.7","Content-Type":"application/json",Origin:"https://www.deepl.com",Referer:"https://www.deepl.com/translator","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-site"};function ug(e){return JSON.stringify(e).replace('"method":"',()=>{let t=e;return(t.id+3)%13===0||(t.id+5)%29===0?'"method" : "':'"method": "'})}async function Lh(e,t,n,r){let a=ig(t,n,r);return await te({retry:2,method:"POST",url:e+"?method=LMT_split_text",headers:cg,body:ug(a)})}async function Ah(e,t,n,r,a,o,i){let s=await Lh(e,t,r,a),l=lg(r==="auto"?s.result.lang.detected:r,n,tg(s),a,o,i),u=l.params.jobs.map(m=>m._index);l.params.jobs=l.params.jobs.map(m=>{let g={...m};return delete g._index,g});let c=await te({retry:2,method:"POST",url:e+"?method=LMT_handle_jobs",body:ug(l),headers:cg}),f={from:s.result.lang.detected,to:n,text:[]};return c.result.translations.forEach((m,g)=>{let d=u[g];f.text[d]===void 0&&(f.text[d]="");let T=l.params.jobs[g].sentences[0].prefix,y=l.params.jobs[g].sentences[0].prefix;f.text[d]=f.text[d]+T+m.beams[0].sentences[0].text}),f}async function gg(e,t,n,r=ka,a,o,i){return t?t&&t.length===1&&t[0]===""?{text:[""],from:r,to:n}:Ah(e,t,Hs(n),Hs(r)??"auto",a,o,i):{text:[],from:r,to:n}}var fg=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],Dn=class extends ce{constructor(n,r){super(n,r);this.maxTextGroupLength=3;this.maxTextLength=800;this.isSupportList=!0;this.API_URL=rg;n&&n.API_URL&&(this.API_URL=n.API_URL)}async translateList(n){let{text:r,to:a,from:o}=n,i=await gg(this.API_URL,r,Dn.langMap.get(a)||a,Dn.langMap.get(o)||"auto");return{text:i.text,from:Dn.langMapReverse.get(i.from),to:Dn.langMapReverse.get(i.to)}}},Gt=Dn;Gt.langMap=new Map(fg),Gt.langMapReverse=new Map(fg.map(([n,r])=>[r,n]));var dg=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","ja"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],Bs="https://transmart.qq.com/api/imt",fn=class extends ce{constructor(n,r){super(n,r);this.maxTextGroupLength=50;this.maxTextLength=1e3;this.throttleLimit=1e3;this.isSupportList=!1;this.clientKey=btoa("transmart_crx_"+navigator.userAgent).slice(0,100)}async translate(n){let{text:r,to:a}=n,o=await this.detectLanguage(r),i=fn.langMap.get(o)||o,s=fn.langMap.get(a)||a;if(o===a)return{text:r,from:o,to:a};let l=JSON.stringify({header:{fn:"auto_translation_block",client_key:this.clientKey},source:{text_block:r,lang:i,orig_url:n.url},target:{lang:s}}),u=await te({url:Bs,body:l,method:"POST",retry:2});if(u.header.ret_code!=="succ")throw new Error(u.message||u.header.ret_code);return{text:u.auto_translation,from:o||"auto",to:a}}async translateList(n){let{from:r,text:a,to:o}=n;if(a.length===1){let f=await this.translate({from:r,text:a[0],to:o,url:n.url});return{text:[f.text],from:f.from,to:f.to}}let i=await this.detectLanguage(a.join(`
`));if(i===o)return{text:a,from:i,to:o};let s=fn.langMap.get(i)||i,l=fn.langMap.get(o)||o,u=JSON.stringify({header:{fn:"auto_translation",client_key:this.clientKey},source:{text_list:a,lang:s,orig_url:n.url},target:{lang:l},type:"plain"}),c=await te({url:Bs,body:u,method:"POST"});if(c.header.ret_code!=="succ")throw new Error(c.message||c.header.ret_code);return{text:c.auto_translation,from:i||"auto",to:o}}detectLanguageLocally(n){return this.detectLanguageRemotely(n)}async detectLanguageRemotely(n){let r={header:{fn:"text_analysis",client_key:this.clientKey},text:n.slice(0,280)},a=await te({url:Bs,method:"POST",body:JSON.stringify(r)});if(a.header.ret_code!=="succ")throw new Error(a.message||a.header.ret_code);let o=a.language,i=fn.langMapReverse.get(o);return i||o}},dn=fn;dn.langMap=new Map(dg),dn.langMapReverse=new Map(dg.map(([n,r])=>[r,n]));function mg(){return Math.random()>=0}var On=class extends ce{constructor(){super(...arguments);this.isSupportList=!0}async translate(n){let{text:r}=n;await Ms(),await er(5e3);let a=r.match(/^\s*/)[0].length;return{text:r.slice(0,a)+"\u6A21\u62DF\uFF1A"+r.slice(a,-6),from:n.from,to:n.to}}async translateList(n){let{text:r,from:a,to:o}=n;if(await Ms(),!mg())throw new Error("\u6A21\u62DF\u9519\u8BEF");return r.length===0?{from:a,to:o,text:[""]}:{from:a,to:o,text:r.map(i=>{let s=i.match(/^\s*/)[0].length;return i.slice(0,s)+"\u6A21\u62DF\uFF1A"+i.slice(s,-6)})}}};var bg=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"],["de","de"],["fr","fr"],["it","it"],["es","es"],["nl","nl"],["pl","pl"],["pt","pt"],["ru","ru"]],pg=new Map(bg),hg=new Map(bg.map(([e,t])=>[t,e])),xr=class extends ce{constructor(n,r){super(n,r);this.apikey="";this.codename=xr.DEFAULT_CODENAME;this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.apikey)throw new Error("apikey are required");this.apikey=n.apikey,n.codename&&(this.codename=n.codename)}static getAllProps(){return[...xr.getProps(),{type:"password",name:"apikey",required:!0}]}static getProps(){return[{type:"select",name:"codename",label:"translationEngine",default:xr.DEFAULT_CODENAME,required:!1,options:[{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.aws",value:"aws"},{label:"translationServices.google",value:"google"}]}]}async translate(n){let{text:r,from:a,to:o}=n,i=await te({retry:2,url:`https://api.openl.club/services/${this.codename}/translate`,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({apikey:this.apikey,text:r,source_lang:pg.get(a)||"auto",target_lang:pg.get(o)||o})});if(i.status){let s=i;return{text:s.result,from:hg.get(s.source_lang),to:hg.get(s.target_lang)}}else throw new Error(i.msg)}},Pa=xr;Pa.DEFAULT_CODENAME="deepl";var Ra=Pa;var _h=gt(),Tg=[["auto",""],["zh-CN","ZH"],["zh-TW","ZH"],["en","EN"],["de","DE"],["fr","FR"],["it","IT"],["ja","JA"],["es","ES"],["nl","NL"],["pl","PL"],["pt","PT"],["ru","RU"]],yg=new Map(Tg),Ch=new Map(Tg.map(([e,t])=>[t,e])),Us=class extends ce{constructor(n,r){super(n,r);this.authKey="";this.maxTextGroupLength=10;this.maxTextLength=1200;if(!n||!n.authKey)throw new Error("authKey are required");this.authKey=n.authKey}static getAllProps(){return[{name:"authKey",required:!0,type:"password"}]}async translateList(n){let{from:r,to:a,text:o}=n,i={source_lang:yg.get(r)||"",target_lang:yg.get(a)||a},s=new URLSearchParams(i);o.forEach(g=>{s.append("text",g)});let l=s.toString(),u="https://api-free.deepl.com/v2/translate";this.authKey.endsWith(":im")?u=_h.DEEPL_PROXY_ENDPOINT:this.authKey.endsWith(":fx")||(u="https://api.deepl.com/v2/translate");let c=await te({retry:2,url:u,method:"POST",body:l,headers:{Authorization:"DeepL-Auth-Key "+this.authKey,"content-type":"application/x-www-form-urlencoded"}}),{translations:f}=c;return{text:f.map(g=>g.text),from:f[0]&&Ch.get(f[0].detected_source_language)||r,to:a}}},xg=Us;var Mh=[["auto","auto"],["zh-CN","zh"],["zh-TW","cht"],["en","en"],["ja","ja"],["ru","ru"],["es","es"],["de","de"],["ko","ko"],["fr","fr"]],wg=new Map(Mh),$s=class extends ce{constructor(n,r){super(n,r);this.APIKEY="";this.isSupportList=!1;if(!n||!n.APIKEY)throw new Error("APIKEY are required");this.APIKEY=n.APIKEY}static getAllProps(){return[{name:"APIKEY",required:!0,type:"password"}]}async translate(n){let{text:r,from:a,to:o}=n,i=r,s={url:"https://api.niutrans.com/NiuTransServer/translation",retry:2,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({src_text:i,from:wg.get(a)||a,to:wg.get(o)||o,apikey:this.APIKEY})},l=await te(s);if(l.tgt_text){let u=l.tgt_text;return u.endsWith(`
`)&&(u=u.slice(0,-1)),{text:u,from:a,to:o}}else throw new Error(JSON.stringify(l))}},vg=$s;var kh=["authorization","content-type","content-length","user-agent","presigned-expires","expect"],Ae={algorithm:"HMAC-SHA256",v4Identifier:"request",dateHeader:"X-Date",tokenHeader:"X-Security-Token",contentSha256Header:"X-Content-Sha256",notSignBody:"X-NotSignBody",kDatePrefix:"",credential:"X-Credential",algorithmKey:"X-Algorithm",signHeadersKey:"X-SignedHeaders",signQueriesKey:"X-SignedQueries",signatureKey:"X-Signature"},js=e=>{try{return encodeURIComponent(e).replace(/[^A-Za-z0-9_.~\-%]+/g,escape).replace(/[*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)}catch{return""}},Ws=e=>Object.keys(e).map(t=>{let n=e[t];if(typeof n>"u"||n===null)return;let r=js(t);if(!!r)return Array.isArray(n)?`${r}=${n.map(js).sort().join(`&${r}=`)}`:`${r}=${js(n)}`}).filter(t=>t).join("&"),In=class{constructor(t,n,r){this.request=t,this.request.headers=t.headers||{},this.serviceName=n,r=r||{},this.bodySha256=r.bodySha256,this.request.params=this.sortParams(this.request.params)}sortParams(t){let n={};return t&&Object.keys(t).filter(r=>{let a=t[r];return typeof a<"u"&&a!==null}).sort().map(r=>{n[r]=t[r]}),n}async addAuthorization(t,n){let r=this.getDateTime(n);await this.addHeaders(t,r),this.request.headers.Authorization=await this.authorization(t,r)}async authorization(t,n){let r=[],a=this.credentialString(n);return r.push(`${Ae.algorithm} Credential=${t.accessKeyId}/${a}`),r.push(`SignedHeaders=${this.signedHeaders()}`),r.push(`Signature=${await this.signature(t,n)}`),r.join(", ")}async getSignUrl(t,n){let r=this.getDateTime(n),a={...this.request.params},o=this.request.params,i=this.request.headers;t.sessionToken&&(a[Ae.tokenHeader]=t.sessionToken),a[Ae.dateHeader]=r,a[Ae.notSignBody]="",a[Ae.credential]=`${t.accessKeyId}/${this.credentialString(r)}`,a[Ae.algorithmKey]=Ae.algorithm,a[Ae.signHeadersKey]="",a[Ae.signQueriesKey]=void 0,a[Ae.signatureKey]=void 0,a=this.sortParams(a),this.request.params=a,this.request.headers={};let s=await this.signature(t,r);return this.request.params=o,this.request.headers=i,a[Ae.signQueriesKey]=Object.keys(a).sort().join(";"),a[Ae.signatureKey]=s,Ws(a)}getDateTime(t){return this.iso8601(t).replace(/[:\-]|\.\d{3}/g,"")}async addHeaders(t,n){if(this.request.headers[Ae.dateHeader]=n,t.sessionToken&&(this.request.headers[Ae.tokenHeader]=t.sessionToken),this.request.body){let r=this.request.body;this.request.headers[Ae.contentSha256Header]=await ht(r)}}async signature(t,n){let r=await this.getSigningKey(t,n.substr(0,8),this.request.region,this.serviceName);return Ca(await Kt(await this.stringToSign(n),r))}async stringToSign(t){let n=[];n.push(Ae.algorithm),n.push(t),n.push(this.credentialString(t));let r=await this.canonicalString();return n.push(await this.hexEncodedHash(r)),n.join(`
`)}async canonicalString(){let t=[],n=this.request.pathname||"/";t.push(this.request.method.toUpperCase()),t.push(n);let r=Ws(this.request.params)||"";return t.push(r),t.push(`${this.canonicalHeaders()}
`),t.push(this.signedHeaders()),t.push(await this.hexEncodedBodyHash()),t.join(`
`)}canonicalHeaders(){let t=[];Object.keys(this.request.headers).forEach(r=>{t.push([r,this.request.headers[r]])}),t.sort((r,a)=>r[0].toLowerCase()<a[0].toLowerCase()?-1:1);let n=[];return t.forEach(r=>{let a=r[0].toLowerCase();if(this.isSignableHeader(a)){let o=r[1];if(typeof o>"u"||o===null||typeof o.toString!="function")throw new Error(`Header ${a} contains invalid value`);n.push(`${a}:${this.canonicalHeaderValues(o.toString())}`)}}),n.join(`
`)}canonicalHeaderValues(t){return t.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")}signedHeaders(){let t=[];return Object.keys(this.request.headers).forEach(n=>{n=n.toLowerCase(),this.isSignableHeader(n)&&t.push(n)}),t.sort().join(";")}signedQueries(){return Object.keys(this.request.params).join(";")}credentialString(t){return this.createScope(t.substr(0,8),this.request.region,this.serviceName)}async hexEncodedHash(t){return await ht(t)}async hexEncodedBodyHash(){return this.request.headers[Ae.contentSha256Header]?this.request.headers[Ae.contentSha256Header]:this.request.body?await this.hexEncodedHash(Ws(this.request.body)):await this.hexEncodedHash("")}isSignableHeader(t){return kh.indexOf(t)<0}iso8601(t){return t===void 0&&(t=new Date),t.toISOString().replace(/\.\d{3}Z$/,"Z")}async getSigningKey(t,n,r,a){let o=await Kt(n,`${Ae.kDatePrefix}${t.secretKey}`),i=await Kt(r,o),s=await Kt(a,i);return Kt(Ae.v4Identifier,s)}createScope(t,n,r){return[t.substr(0,8),n,r,Ae.v4Identifier].join("/")}};var Eg=[["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],Sg=new Map(Eg),Ph=new Map(Eg.map(([e,t])=>[t,e])),zs=class extends ce{constructor(n,r){super(n,r);this.accessKeyId="";this.secretAccessKey="";this.maxTextGroupLength=8;if(!n||!n.accessKeyId||!n.secretAccessKey)throw new Error("accessKeyId and secretAccessKey are required");this.accessKeyId=n.accessKeyId,this.secretAccessKey=n.secretAccessKey}static getAllProps(){return[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"}]}async remoteDetectLanguage(n){let r={TextList:[n]},a={region:"cn-north-1",method:"POST",params:{Action:"LangDetect",Version:"2020-06-01"},pathname:"/",headers:{"Content-Type":"application/json",host:"open.volcengineapi.com"},body:JSON.stringify(r)},o=new In(a,"translate");await o.addAuthorization({accessKeyId:this.accessKeyId,secretKey:this.secretAccessKey});let i=new URLSearchParams(a.params),s=await te({retry:2,url:"https://open.volcengineapi.com"+a.pathname+"?"+i.toString(),headers:o.request.headers,method:a.method,body:a.body});if(s.DetectedLanguageList&&s.DetectedLanguageList.length>0)return s.DetectedLanguageList[0].Language;if(s.ResponseMetadata&&s.ResponseMetadata.Error){let l=s.ResponseMetadata.Error;throw new Oe(l.Code,l.Message)}else if(s.ResponseMetaData&&s.ResponseMetaData.Error){let l=s.ResponseMetaData.Error;throw new Oe(l.Code,l.Message)}else throw new Error("response: "+JSON.stringify(s))}async translateList(n){let{text:r,from:a,to:o}=n,i=Sg.get(a),s={TargetLanguage:Sg.get(o)||o,TextList:r};i?s.SourceLanguage=i:s.SourceLanguage=await this.remoteDetectLanguage(r.join(`
`).slice(0,1e3));let l={region:"cn-north-1",method:"POST",params:{Action:"TranslateText",Version:"2020-06-01"},pathname:"/",headers:{"Content-Type":"application/json",host:"open.volcengineapi.com"},body:JSON.stringify(s)},u=new In(l,"translate");await u.addAuthorization({accessKeyId:this.accessKeyId,secretKey:this.secretAccessKey});let c=new URLSearchParams(l.params),f=await te({retry:2,url:"https://open.volcengineapi.com"+l.pathname+"?"+c.toString(),headers:u.request.headers,method:l.method,body:l.body});if(f.TranslationList){let m=f.TranslationList.map(d=>d.Translation),g=a;return f.TranslationList.length>0&&f.TranslationList[0].DetectedSourceLanguage&&(g=Ph.get(f.TranslationList[0].DetectedSourceLanguage)||a),{text:m,from:g,to:o}}else if(f.ResponseMetadata&&f.ResponseMetadata.Error){let m=f.ResponseMetadata.Error;throw new Oe(m.Code,m.Message)}else if(f.ResponseMetaData&&f.ResponseMetaData.Error){let m=f.ResponseMetaData.Error;throw new Oe(m.Code,m.Message)}else throw new Error("response: "+JSON.stringify(f))}},Lg=zs;var _g=[["auto","detect"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],Ag=new Map(_g),Rh=new Map(_g.map(([e,t])=>[t,e])),wr=class extends ce{constructor(){super(...arguments);this.maxTextGroupLength=50;this.isSupportList=!1}async translate(n){let{text:r,from:a,to:o}=n,i=Ag.get(a)||"detect",s=Ag.get(o)||o,l={source_language:i,target_language:s,text:r},u=await te({url:"https://translate.volcengine.com/crx/translate/v1/",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(u.base_resp&&u.base_resp.status_code===0){let c=u.translation,f=a;return u.detected_language&&(f=Rh.get(u.detected_language)||a),{text:c,from:f,to:o}}else{let c=u.base_resp;throw new Oe(c.status_code.toString(),c.status_message)}}};var Dh=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],Cg=new Map(Dh),vr=class extends ce{constructor(n,r){super(n,r);this.url="";this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.url)throw new Error("deeplx custom url are required, please check your settings.");this.url=n.url}static getAllProps(){return[{name:"url",required:!0,type:"text"}]}async translate(n){let{text:r,from:a,to:o}=n,s=await te({retry:2,url:this.url,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({source_lang:Cg.get(a)||a,target_lang:Cg.get(o)||o,text:r})});if(s.code===200)return{text:s.data,from:a,to:o};throw new Error(s.message||s.message||"API Error")}};var qs="https://{s}bing.com",Dg=qs+"/translator",Oh=qs+"/ttranslatev3",Ih=qs+"/tspellcheckv3",Da="bingGlobalConfig",Og=[["auto","auto-detect"],["ar","ar"],["ga","ga"],["et","et"],["bg","bg"],["is","is"],["pl","pl"],["bs","bs-Latn"],["fa","fa"],["da","da"],["de","de"],["ru","ru"],["fr","fr"],["zh-TW","zh-Hant"],["fil","fil"],["fj","fj"],["fi","fi"],["gu","gu"],["kk","kk"],["ht","ht"],["ko","ko"],["nl","nl"],["ca","ca"],["zh-CN","zh-Hans"],["cs","cs"],["kn","kn"],["otq","otq"],["tlh","tlh"],["hr","hr"],["lv","lv"],["lt","lt"],["ro","ro"],["mg","mg"],["mt","mt"],["mr","mr"],["ml","ml"],["ms","ms"],["mi","mi"],["bn","bn-BD"],["hmn","mww"],["af","af"],["pa","pa"],["pt","pt"],["ps","ps"],["ja","ja"],["sv","sv"],["sm","sm"],["sr-Latn","sr-Latn"],["sr-Cyrl","sr-Cyrl"],["no","nb"],["sk","sk"],["sl","sl"],["sw","sw"],["ty","ty"],["te","te"],["ta","ta"],["th","th"],["to","to"],["tr","tr"],["cy","cy"],["ur","ur"],["uk","uk"],["es","es"],["he","iw"],["el","el"],["hu","hu"],["it","it"],["hi","hi"],["id","id"],["en","en"],["yua","yua"],["yue","yua"],["vi","vi"],["ku","ku"],["km","kmr"]],Mg=new Map(Og),kg=new Map(Og.map(([e,t])=>[t,e])),Pg=1e3,yt,Nn;function Vs(e,t){return e.replace("{s}",t?t+".":"")}async function Nh(){if(!yt){let n=await Q.storage.local.get(Da);return n&&(yt=n[Da]),!0}let{tokenTs:e,tokenExpiryInterval:t}=yt;return Date.now()-e>t}async function Rg(){let e,t,n,r,a,o,i,s,l,u;try{let c=Vs(Dg,e),f=await te({retry:2,url:c,responseType:"raw"}),{body:m,headers:g,url:d}=f;e=d.match(/^https?:\/\/(\w+)\.bing\.com/)[1],u=g["set-cookie"],t=m.match(/IG:"([^"]+)"/)[1],n=m.match(/data-iid="([^"]+)"/)[1],[a,r,o,i,s,l]=JSON.parse(m.match(/params_AbusePreventionHelper\s?=\s?([^\]]+\])/)[1])}catch(c){throw console.error("failed to fetch global config",c),c}return yt={subdomain:e,IG:t,IID:n,key:a,token:r,tokenTs:a,tokenExpiryInterval:o,isVertical:i,frontDoorBotClassification:s,isSignedInOrCorporateUser:l,cookie:u,count:0},await Q.storage.local.set({[Da]:yt}),yt}function Fh(e){let{IG:t,IID:n,subdomain:r,isVertical:a}=yt;return Vs(e?Ih:Oh,r)+"?isVertical=1"+(t&&t.length?"&IG="+t:"")+(n&&n.length?"&IID="+n+"."+yt.count++:"")}function Hh(e,t,n,r){let{token:a,key:o}=yt,i={fromLang:n,text:t,token:a,key:o};return!e&&r&&(i.to=r),i}async function Ig(e,t,n){if(!e||!(e=e.trim()))return;if(e.length>Pg)throw new Error(`The supported maximum length of text is ${Pg}. Please shorten the text.`);Nn||(Nn=Rg()),await Nn,await Nh()&&(Nn=Rg(),await Nn),t=t||"auto",n=n||"zh-CN",t=Mg.get(t)||t,n=Mg.get(n)||n;let a=Fh(!1),o=Hh(!1,e,t,n==="auto-detect"?"zh-Hans":n),i={referer:Vs(Dg,yt.subdomain),"content-type":"application/x-www-form-urlencoded"},s=new URLSearchParams(o),l=a,u=s.toString(),c=await te({retry:2,url:l,headers:i,method:"POST",body:u});if(c.ShowCaptcha||c.StatusCode===401||c.statusCode){if(yt=null,Nn=null,await Q.storage.local.remove(Da),c.ShowCaptcha)throw new Error(`
      Sorry that bing translator seems to be asking for the captcha,
      Please take care not to request too frequently.
      The response code is ${c.StatusCode}.
    `);if(c.StatusCode===401)throw new Error(`
      Max count of translation exceeded. Please try it again later.
      The response code is 401.
    `);if(c.statusCode)throw new Error(`Something went wrong! The response is ${JSON.stringify(c)}.`)}let f=c[0].translations[0],m=c[0].detectedLanguage;return{text:f.text,from:kg.get(m.language),to:kg.get(f.to)}}var Sr=class extends ce{constructor(n,r){super(n,r);this.isSupportList=!1;this.maxTextLength=1e3}async translate(n){let{text:r,from:a,to:o}=n;return r?await Ig(r,a,o):{...n}}};var Fg=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],Ng=new Map(Fg),Bh=new Map(Fg.map(([e,t])=>[t,e])),Ks=class extends ce{constructor(n,r){super(n,r);this.endpoint="https://api.fanyi.baidu.com/api/trans/vip/translate";this.appid="";this.key="";this.isSupportList=!1;if(!n||!n.appid||!n.key)throw new Error("appid and key are required");this.appid=n.appid,this.key=n.key}static getAllProps(){return[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"}]}async translate(n){let r=Date.now().toString(),{endpoint:a}=this,{appid:o,key:i}=this,{text:s,from:l,to:u}=n,c=new URLSearchParams({from:Ng.get(l)||"auto",to:Ng.get(u)||u,q:s,salt:r,appid:o,sign:Cn(o+s+r+i)}),f=new URL(a);f.search=c.toString();let m=await te({url:f.toString()});if(m.error_code)throw console.error(new Error("[Baidu service]"+m.error_msg)),new Oe("API_SERVER_ERROR",m.error_msg);let{trans_result:g,from:d}=m,T=g.map(({dst:p})=>p);return{from:Bh.get(d)||d,to:u,text:T.join(`
`)}}},Hg=Ks;var Uh=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"]],Gs=new Map(Uh),Js=class extends ce{constructor(n,r){super(n,r);this.token="";if(!n||!n.token)throw new Error("token are required");this.token=n.token}static getAllProps(){return[{name:"token",required:!0,type:"password"}]}async translateList(n){let{text:r,from:a,to:o}=n;if(!Gs.get(o))throw new Error(`Unsupported language: ${o}`);a==="auto"&&(a=await it({text:r.join(" "),minLength:10}));let s=r;return{text:(await te({retry:2,url:"https://api.interpreter.caiyunai.com/v1/translator",headers:{"content-type":"application/json","x-authorization":"token "+this.token},method:"POST",body:JSON.stringify({source:s,trans_type:`${Gs.get(a)||"auto"}2${Gs.get(o)}`})})).target,from:a,to:o}}},Bg=Js;var $g=[["auto","auto"],["en","en"],["ru","ru"],["pt","pt"],["es","es"],["zh-CN","zh-CHS"],["ja","ja"],["ko","ko"],["fr","fr"],["ar","ar"],["id","id"],["vi","vi"],["it","it"]],Ug=new Map($g),$h=new Map($g.map(([e,t])=>[t,e]));function jh(e){let t=e.length;return t<=20?e:e.substring(0,10)+t+e.substring(t-10,t)}var Ys=class extends ce{constructor(n,r){super(n,r);this.isSupportList=!1;this.appId="";this.appSecret="";if(!n||!n.appId||!n.appSecret)throw new Error("appId and appSecret are required");this.appId=n.appId,this.appSecret=n.appSecret}static getAllProps(){return[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"}]}async translate(n){let{text:r,from:a,to:o}=n,i=new Date().getTime(),s=Math.round(new Date().getTime()/1e3),l=this.appId+jh(r)+i+s+this.appSecret,u=await ht(l),c={q:r,appKey:this.appId,salt:i.toString(),from:Ug.get(a)||"auto",to:Ug.get(o)||o,sign:u,signType:"v3",curtime:s.toString()},f=new URLSearchParams(c),g=await te({url:"https://openapi.youdao.com/api",method:"POST",body:f.toString(),headers:{"Content-Type":"application/x-www-form-urlencoded"}}),d=g.l,[T,y]=d.split("2");return{text:g.translation.join(`
`),from:$h.get(T),to:o}}},jg=Ys;var Wh="https://api.deepl.com/jsonrpc",Fn={mock:{class:On,name:"Mock",homepage:"https://www.google.com"},mock2:{class:On,name:"Mock2",homepage:"https://www.google.com"},google:{class:gn,name:"Google",homepage:"https://translate.google.com/"},transmart:{class:dn,name:"Transmart",homepage:"https://transmart.qq.com/"},deepl:{class:xg,name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://hcfy.app/docs/services/deepl"},volc:{class:Lg,name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://hcfy.app/docs/services/hs-api"},volcAlpha:{class:wr,name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},bing:{class:Sr,name:"Bing",homepage:"https://www.bing.com/translator"},tencent:{class:un,name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://hcfy.app/docs/services/qq-api"},baidu:{class:Hg,name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://hcfy.app/docs/services/baidu-api"},caiyun:{class:Bg,name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://hcfy.app/docs/services/caiyun-api"},openl:{class:Ra,name:"Openl",homepage:"https://openl.club/",docUrl:"https://docs.openl.club/"},youdao:{class:jg,name:"Youdao",homepage:"https://fanyi.youdao.com/",docUrl:"https://hcfy.app/docs/services/youdao-api"},d:{class:Gt,name:"D (Alpha) ",alpha:!0,homepage:"https://www.deepl.com/translator"},dpro:{class:Gt,name:"DPro (Canary) ",canary:!0,homepage:"https://www.deepl.com/translator"},deeplx:{class:vr,name:"DeepLX (Beta)",beta:!0,homepage:"https://www.deepl.com/translator"},niu:{class:vg,name:"niutrans",homepage:"https://niutrans.com/",docUrl:"https://niutrans.com/documents/contents/beginning_guide/6"}};function Xs(e,t){let n=Fn[e],r=t.config.translationServices[e]||{},a=!0,o=n.class.getAllProps();if(o.length>0){let i=o.filter(s=>s.required);if(i.length>0){for(let s of i)if(!r[s.name]){a=!1;break}}}return{...n,id:e,selected:t.translationService===e,ok:a,config:r,props:n.class.getProps(),allProps:o}}var zh=Object.keys(Fn),Wg=e=>{let{config:t}=e,n=t.alpha,r=t.beta,a=t.canary,o=t.debug;return zh.filter(i=>{let s=Fn[i];if(i.startsWith("mock"))return!!o;let l=!!s.canary,u=!!s.alpha,c=!!s.beta;return l&&a||u&&(n||a)||c&&(r||n||a)||i===e.translationService?!0:!u&&!c&&!l}).map(i=>Xs(i,e))};async function Qs(e,t){if(!e.text)return e;let n=await Zs({sentences:[e]},t);if(n.sentences.length>0)return{...e,...n.sentences[0]};throw new Oe("translateFailed","translate failed")}async function Zs(e,t,n){if(!e.sentences.length)return{...e};let{config:r,translationService:a}=t,o=r.translationGeneralConfig,i=r.translationServices,s=a,l=i[s]||{};s==="dpro"&&(l.API_URL=Wh);let u=[],c={sentences:Array(e.sentences.length)},f=e.sentences.length,m=-1;if(r.cache)for(let y of e.sentences){m++;let p=s;s==="openl"&&(p=s+"-"+l.codename||Ra.DEFAULT_CODENAME);let h=null;try{h=await $r(_u({originalText:y.text,from:y.from,to:y.to,service:p}),1e3)}catch(x){R.warn("query cache DB error, but it's ok",x)}if(h){let x={...y,text:h.translatedText};c.sentences[m]=x,n&&n(null,x,y)}else u.push(y)}else u.push(...e.sentences);let g=u.length;if(f-g>0&&R.debug(`use ${f-g} sentences from cache`),!u.length)return c;let d;try{d=new Fn[s].class(l,o),await d.init()}catch(y){if(n)for(let p of u)n(y,null,p);throw y}let T=await d.multipleTranslate({sentences:u},(y,p,h)=>{if(n&&(n(y,p,h),!y&&p&&!s.startsWith("mock")&&r.cache)){let x=s;s==="openl"&&(x=s+"-"+l.codename||Ra.DEFAULT_CODENAME),r.cache&&$r(Cu({translatedText:p.text,from:h.from,to:h.to,detectedFrom:p.from,key:Cn(h.text),service:x}),3e3).catch(L=>{R.warn("set cache DB error",L)})}});for(let y of T.sentences){let p=c.sentences.findIndex(h=>!h);if(p===-1)throw new Oe("translateFailed","can not match the result");c.sentences[p]=y}return c}var zg=["*://*/*","*","*://*"],Vg="immersive-translate-wildcard-placeholder.com";function ei(e,t){let n=[];if(!t||(t&&!Array.isArray(t)?n=[t]:n=t,n.length===0))return null;if(n.some(i=>zg.includes(i)))return e;let r=new URL(e);r.hash="",r.search="";let a=r.href,o=r.hostname;if(n&&n.length>0){let i=n.find(s=>{let l=s;if(s===o)return!0;if(zg.includes(s))return!0;if(!s.includes("*")&&s.includes("://")){try{let u=new URL(s);return u.pathname==="/"&&!s.endsWith("/")?u.hostname===o:Vh(a,s)}catch{}return!1}else{let u,c=s;s.includes("://")?u=s.split("://")[0]:(u="*",s="https://"+s);let f=s.replace(/\*/g,Vg),m;try{m=new URL(f)}catch{return R.debug("invalid match pattern",f,"raw match value:",c),!1}let g=m.hostname,d=m.pathname;d==="/"&&(c.replace("://","").includes("/")||(d="/*"));let T=qh(u+":",qg(g),qg(d));if(T){let y=new URL(a);return y.port="",T.test(y.href)}else return!1}});if(i)return i}return null}function qg(e){return e.replace(Vg,"*")}function qh(e,t,n){let r="^";return e==="*:"?r+="(http:|https:|file:)":r+=e,r+="//",t&&(e==="file:"||(t==="*"?r+="[^/]+?":(t.match(/^\*\./)&&(r+="[^/]*?",t=t.substring(2)),r+=t.replace(/\./g,"\\.").replace(/\*/g,"[^/]*")))),n?n==="*"||n==="/*"?r+="(/.*)?":n.includes("*")?(r+=n.replace(/\*/g,".*?"),r+="/?"):r+=n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):r+="/?",r+="$",new RegExp(r)}function Er(e,t){return ei(e,t)!==null}function Vh(e,t){let n=new URL(e),r=new URL(t);return n.hostname===r.hostname&&n.pathname===r.pathname&&n.protocol===r.protocol&&n.port===r.port}async function Ot(e){let{url:t,config:n,state:r}=e,a=new URL(t),o="auto",{translationParagraphLanguagePattern:i,translationService:s,translationServices:l,translationTheme:u,translationThemePatterns:c,translationUrlPattern:f,targetLanguage:m,sourceLanguageUrlPattern:g,immediateTranslationPattern:d}=n,T=Hn(t,i),y=Hn(t,d),p=s,h=Object.keys(l);for(let P of h){let F=l[P];if(Hn(t,F)){p=P;break}}let x=u,L=Object.keys(c);for(let P of L){let F=c[P];if(Hn(t,F)){x=P;break}}let I=Hn(t,f),A=Kh(t,f);A||(A=Er(t,Ki));let w=Object.keys(g),E={};for(let P of w){let F=g[P];if(F&&F.matches)for(let ne of F.matches)E[ne]=P}let v=Object.keys(E),O=ei(t,v);O&&(o=E[O]??"auto",E[O]&&E[O]!=="auto"&&jt(E[O]));let $=m||"zh-CN",_=a.hostname,N=await ht(_),z=a.pathname+a.search+a.hash,W=await ht(z),be=`https://${N}.com/${W}`,Me=await fr(),xe=n.translationStartMode;xe==="dynamic"&&y&&(xe="immediate");let ae={targetLanguage:$,config:n,translationService:p,isTranslateUrl:I,sourceLanguage:o,isTranslateExcludeUrl:A,rule:n.generalRule,url:t,encryptedUrl:be,state:r||{translationArea:n.translationArea,translationStartMode:xe,isAutoTranslate:!1,isNeedClean:!1,isDetectParagraphLanguage:T,translationTheme:x},localConfig:Me};ae.state.translationArea==="body"&&(ae.config.generalRule.excludeTags=ae.config.generalRule.excludeTags.filter(P=>P!=="BUTTON"&&P!=="LABEL"),ae.config.generalRule.additionalExcludeSelectors=ae.config.generalRule.additionalExcludeSelectors.filter(P=>P!==".btn")),ae.translationService==="d"&&(n.immediateTranslationTextCount=0);let Ve=n.rules,le;globalThis.PDFViewerApplication?le=Ve.find(P=>P.isPdf):le=Ve.find(P=>Hn(t,P)),ae.rule.isPdf&&(ae.state.translationArea="main"),ae.state.translationArea==="body"&&(ae.rule.paragraphMinTextCount=1,ae.rule.paragraphMinWordCount=1);let S=n.generalRule;return le&&(ae.rule=ua(S,le)),ae.state.translationArea==="body"&&ae.rule.excludeTags&&(ae.rule.excludeTags=ae.rule.excludeTags.filter(P=>P!=="LABEL"&&P!=="BUTTON"&&P!=="ASIDE"&&P!=="OPTION")),ae}function Hn(e,t){if(!t)return!1;let{matches:n,excludeMatches:r,selectorMatches:a,excludeSelectorMatches:o}=t;return r&&r.length>0&&Er(e,r)?!1:n&&n.length>0&&Er(e,n)?!0:o&&o.length>0&&Br(o)?!1:!!(a&&a.length>0&&Br(a))}function Kh(e,t){if(!t)return!1;let{excludeMatches:n,excludeSelectorMatches:r}=t;return!!(n&&n.length>0&&Er(e,n)||r&&r.length>0&&Br(r))}var Ia="Original",Oa=[],oi=new Set,ti=[],Na=[],Gg=[],Fa=[],Kg=Fe().split("#")[0],si=0,pe,Gh=dt(tb,300),Jh=wo(Yg,200),ii=gt(),Yh=ii.PROD==="1",Bn,Un=new Map,Jg,Lr="";async function Ta(){if(Ge()==="Original"){let e=await St(Fe());e.state.translationTheme=e.config.translationTheme,await Rt(pe)}else(Ge()==="Translated"||Ge()==="Error")&&zt()}async function xa(){if(Ge()==="Original")pe=await St(Fe()),pe.state.translationTheme="mask",await Rt(pe);else if(Ge()==="Translated"){let e=[document.body,...Un.keys()],t=pe?.state.translationTheme;for(let n of e){let r=Mt(n,wn,!0);t==="mask"?r!=="none"?ie(n,wn,"none",!0):ie(n,wn,"mask",!0):r!=="mask"?ie(n,wn,"mask",!0):ie(n,wn,"none",!0)}}}function zt(){Rs();let e=[document.body,...Un.keys()];for(let t of e)ai(t),t.querySelectorAll("."+et).forEach(o=>{o.remove()}),t.querySelectorAll("."+Nr).forEach(o=>{o.remove()}),t.querySelectorAll("["+oo+"]").forEach(o=>{if(Yh)delete o[Re];else{let s=Object.keys(o.dataset).filter(l=>l.startsWith(de));for(let l of s)delete o.dataset[l]}o.removeAttribute(oo)});tf(),qe("Translating"),Lr&&(document.title=Lr),qe("Original")}function Xh(e,t){let n=!1,r=go(e.elements),a=Nt(e.elements);oi.add(e.id);let o=[];if(r){let s=new IntersectionObserver((l,u)=>{l.forEach(c=>{c.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});Na.push(s),o.push(s),s.observe(r)}if(a&&a!==r){let s=new IntersectionObserver((l,u)=>{l.forEach(c=>{c.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});Na.push(s),o.push(s),s.observe(a)}let i=qt(e.id);i&&(i.observers=o,br(e.id,i))}function Qh(e,t){if(e){let n=new ResizeObserver((r,a)=>{for(let o of r)o.contentRect.width>10&&(a.disconnect(),t(o.target))});n.observe(e),Gg.push(n)}}async function Yg(e){let t=[...Fa];Fa=[];let n=new Map;t.forEach(r=>{n.has(r.rootFrame)||n.set(r.rootFrame,[]),n.get(r.rootFrame)?.push(r.element)});for(let[r,a]of n)try{let o=[];for(let i of a){let s=ks(i,e);if(s.length===0)continue;let l=s;o.push(...l)}await li(o,r,e)}catch(o){R.error(`translateNewDynamicNodes error: ${o.message}`)}}function ni(e,t){oi.delete(e.id);let n=qt(e.id);n&&(n.observers&&n.observers.length>0&&n.observers.forEach(o=>{o.disconnect()}),n.observers=[],n.state="Translating",br(e.id,n));let r=e.id;si+=e.text.length;let a=Hr(e.elements);if(e.isPdf){let o=go(e.elements),i=globalThis.getComputedStyle(o),s=i.top,l=i.fontSize,u=parseFloat(l.slice(0,-2));isNaN(u)||u>20&&(l="20px");let c=e.targetContainer,f=document.createElement("span");a.length===1&&(f.style.fontSize=l),f.id=`${et}-${r}`,f.style.top=s;let m=Mt(o,Jn),g=a.reduce((y,p)=>{let h=Mt(p,Jn);return h&&h<y?h:y},1e3),T=a.reduce((y,p)=>{let h=Mt(p,Or);return h&&h>y?h:y},0)-g;T<30,T>600&&(T=600),m<200&&(m=10),m&&m<0&&(m=0),f.style.left=`${g||10}px`,g<400?f.style.width=T+"px":f.style.width=`calc(100% - ${g}px)`,f.classList.add("notranslate",`${et}`),c.appendChild(f)}else{let o=Nt(e.elements),i="afterend";e.elements.length>0&&o&&(a.length===1?i="beforeend":ft(e.elements[0],t.rule)||(i="beforeend")),t.rule.insertPosition&&(i=t.rule.insertPosition);let s=document.createElement("span");s.classList.add("notranslate",et),s.id=`${et}-${r}`;let l=Zg(t.config.loadingTheme);if(s.innerHTML=l,i==="beforeend"){let u=al(o);u?u.appendChild(s):o.appendChild(s)}else if(i==="afterend")o.insertAdjacentElement(i,s);else throw new Error("not support position")}Oa.push(r),Gh(t)}function Zh(e,t){t.state.translationStartMode==="dynamic"&&si>t.config.immediateTranslationTextCount?Xh(e,n=>{ni(n,t)}):ni(e,t)}async function Rt(e){if(Ia==="Translating")return;if(qe("Translating"),e||(e=await St(Fe())),!e.state.isAutoTranslate&&e.config.tempTranslateDomainMinutes>0){let r=Date.now(),o=new URL(e.url).hostname,i=e.localConfig.tempTranslationUrlMatches||[],s=i.findIndex(u=>u.match===o&&u.expiredAt>r),l=!1;s>-1||(i.push({match:o,expiredAt:r+e.config.tempTranslateDomainMinutes*60*1e3}),l=!0),l&&await dr({...e.localConfig,tempTranslationUrlMatches:[...i]})}e.state.isAutoTranslate=!0;let t=globalThis.scrollY,n=globalThis.innerHeight;t>=n&&(e.config.immediateTranslationTextCount=0),R.debug("ctx",e),e.state.isNeedClean?zt():pe.state.isNeedClean=!0,e.rule.normalizeBody&&document.querySelector(e.rule.normalizeBody)&&(document.body=document.body.cloneNode(!0)),Pu(()=>{si=0,Iu(),Na.forEach(r=>{r.disconnect()}),Gg.forEach(r=>{r.disconnect()}),Na=[],oi.clear()}),qe("Translating");try{let r=[document.body];document.querySelectorAll("iframe").forEach(i=>{bo(i)&&(r.push(i.contentDocument.body),ho(i.contentDocument,ii.IMMERSIVE_TRANSLATE_INJECTED_CSS))}),e.rule.shadowRootSelectors&&e.rule.shadowRootSelectors.length>0&&Ye(document.body,e.rule.shadowRootSelectors).forEach(s=>{s.shadowRoot&&s.shadowRoot.mode==="open"&&r.push(s.shadowRoot)});let o=0;qe("Translating"),R.debug("allFrames",r);for(let i of r)o+=await Xg(i,e);o===0&&qe("Translated"),Qg(e).catch(i=>{R.error("translateTitle error:",i.name,i.message,i.details||"")}),rb(e)}catch(r){qe("Error"),R.error(r)}}async function Xg(e,t){yo(e,t.rule);let n=ks(e,t);R.debug("detect containers",n);let{rule:r}=t;n.length>0&&await li(n,e,t);let a=nb(e,r,t);return e===document.body?Jg=a:Un.set(e,a),n.length}async function St(e){let t=await Ze();if(!pe)pe=await Ot({url:e,config:t});else{let n={url:e,config:t,state:pe.state};pe=await Ot(n)}return pe}async function xu(){Ge()==="Original"?await wa():(Ge()==="Translated"||Ge()==="Error")&&(pe=await St(Fe()),pe.state.translationArea!=="main"?await wa():zt())}async function wa(){pe=await St(Fe()),pe.state.translationArea="main",await Rt(pe)}async function Cs(){pe=await St(Fe()),pe.state.translationArea="body",await Rt(pe)}async function wu(){Ge()==="Original"?await Cs():(Ge()==="Translated"||Ge()==="Error")&&(pe=await St(Fe()),pe.state.translationArea!=="body"?(pe.state.translationArea="body",await Rt(pe)):zt())}async function vu(){pe=await St(Fe()),pe.state.translationArea="body",pe.state.translationStartMode="immediate",await Rt(pe),await Yg(pe)}async function Qg(e){let t=document.title;if(!t||t.includes(Ir))return;Lr!==t&&(Lr=t);let n="auto";if(e.state.isDetectParagraphLanguage||(n=pa()),n==="auto"){let r=await it({text:t,minLength:10});if(pr(r,e.targetLanguage))return}try{let r=await Qs({id:0,url:e.url,text:t,from:n,to:e.targetLanguage,fromByClient:n},e);r&&r.text&&(document.title=Lr+Ir+r.text)}catch(r){throw r}}function eb(e,t,n){let r=e.querySelector("#"+et+"-"+t);r&&(r.innerHTML=Zg(n.config.loadingTheme))}function Zg(e){return`&#160;<span class="${he}-loading-${e} notranslate"></span>`}async function li(e,t,n){let{rule:r}=n;for(let i of e)yo(i,r);let a=[];if(n.rule.isPdf)e.length>0&&(qe("Translating"),a=qu(e,r).targetContainers);else{qe("Translating");let i=zu(e,r),{hiddenElements:s}=i;for(let l of s)Qh(l,()=>{nl(l,ut,!0),li([l],t,n)});qe("Translating")}let o=[];if(n.rule.isPdf?o=await Uu(t,e,n,a):(e=e.filter(i=>!Xe(i,r,!1)),o=await Nu(t,e,n)),qe("Translating"),o.length===0){qe("Translated");return}R.debug("detect paragraphs",o);for(let i of o)Zh(i,n);qe("Translated")}async function ef(e){let t=qt(e);if(!t)throw new Error("paragraph not found");let n=await St(Fe());eb(t.rootFrame,e,n);let r={id:t.id,text:t.text,from:t.languageByLocal,fromByClient:t.languageByClient,to:n.targetLanguage,url:n.encryptedUrl};try{let a=await Qs(r,n);ri(null,a,r,n)}catch(a){ri(a,null,r,n)}}function ri(e,t,n,r){let a=qt(n.id);if(a&&(e||!t)){e||(R.error("translate error",t),e=new Error("no response from server"));let o=n.id,i=a.rootFrame.querySelector(`#${et}-${o}`),s=e.message.replaceAll(`
`,"");s=s.replaceAll('"',"&quot;"),a&&(a.state="Error",br(a.id,a));let l=`<span class="${he}-error notranslate"> <span class="immersive-translate-tooltip" data-immersive-translate-tooltip-text="${s}"><button class="${he}-clickable-button notranslate" title="${s}">\u2757</button></span> <button class="${he}-clickable-button notranslate" data-${he}-paragraph-id="${o}" data-${he}-action="retry">\u{1F504}</button></span>`;i&&(i.innerHTML=l)}else{let o=qt(n.id);if(o){o.state="Translated",br(o.id,o);let i=ju(o,t,r),s=t.id,l=o.rootFrame.querySelector(`#${et}-${s}`);l&&(l.innerHTML=i.html,o.rootFrame.querySelectorAll(`[${nn}="${s}"]`).forEach(c=>{ie(c,Tn,"1")}))}else R.error("paragraph not found",n.id)}}async function tb(e){if(Oa.length===0)return Promise.resolve();let t=[...Oa];Oa=[];let n="auto";e.state.isDetectParagraphLanguage||(n=Wt());let r={sentences:t.filter(o=>qt(o)).map(o=>{let i=qt(o),s=i.languageByLocal;return s==="auto"&&(s=n),{id:i.id,url:e.encryptedUrl,text:i.text,from:s,fromByClient:i.languageByClient,to:e.targetLanguage}})};if(r.sentences.length>0){qe("Translating");try{await Zs(r,e,(o,i,s)=>{ri(o,i,s,e)})}catch(o){qe("Error"),R.error("translateCurrentQueue error",o.name,o.message,o.details||" ");return}}qe("Translated")}function qe(e){Ia=e,Au(Ia)}function nb(e,t,n){R.debug("enableMutatinObserver for ",e),ai(e),ti=[],Fa=[];let r=t.inlineTags.concat(t.excludeTags).concat("#text","BR"),a=new MutationObserver(function(o){o.forEach(i=>{if(e===document.body){let s=Fe();if(s.split("#")[0]!==Kg&&t.observeUrlChange){Kg=s.split("#")[0],Rs(),ai(e),tf(),setTimeout(()=>{R.debug("url changed, reinit page"),Ha()},t.urlChangeDelay);let u=new Event(Hi);document.dispatchEvent(u);return}}i.addedNodes.forEach(s=>{if(s.nodeType===Node.ELEMENT_NODE){let l=s;if(l.nodeName==="IFRAME")bo(l)&&setTimeout(()=>{ho(l.contentDocument,ii.IMMERSIVE_TRANSLATE_INJECTED_CSS),Xg(l.contentDocument.body,n).catch(u=>{R.error("translateFrame error",u.details||" ",u)})},n.rule.urlChangeDelay);else if(ab(t,l)||!r.includes(l.nodeName)){if(l.classList.contains("notranslate")||l.getAttribute("translate")==="no")return;Yi(l,ti)||(Fa.push({element:l,rootFrame:e}),ti.push(l),Jh(n))}}})})});return a.observe(e,{childList:!0,subtree:!0}),a}function rb(e){let t=document.querySelector("title");t&&(Bn=new MutationObserver(function(n){n.length>0&&(n[0].target.text.includes(Ir)||Qg(e).catch(a=>{R.error("translateTitle error:",a.name,a.message,a.details||"")}))}),Bn.observe(t,{subtree:!0,characterData:!0,childList:!0}))}function ab(e,t){if(e.extraBlockSelectors){for(let n of e.extraBlockSelectors)if(t.matches(n))return!0}return!1}async function Ha(){let e=vn(),t=await St(Fe());t.rule.urlChangeDelay&&await er(t.rule.urlChangeDelay);let n=t.sourceLanguage;n==="auto"?(me()?n=await it({text:an(document.body).slice(0,1e3)}):e?n=await it({text:an(document.body).slice(0,1e3)}):n=await Lu(),n==="auto"&&(n=await ku()),bu(n)):jt(n);let r=t.state.isAutoTranslate||t.isTranslateUrl||t.rule.isPdf;!r&&!t.isTranslateExcludeUrl&&(R.debug(`detect page language: ${n}`),ol(n,t.config.translationLanguagePattern)&&(r=!0,R.debug(`match language pattern ${n}, auto translate`))),r?(pe.state.isAutoTranslate=!0,await Rt(pe)):R.debug("do not auto translate",t)}function ai(e){if(Un.has(e)){let t=Un.get(e);t.disconnect(),t.takeRecords(),Un.delete(e)}else if(e===document.body){let t=Jg;t&&(t.disconnect(),t.takeRecords())}}function tf(){Bn&&(Bn.disconnect(),Bn.takeRecords(),Bn=void 0)}function Ge(){return Ia}function nf(e,t){return[e,!e||e.endsWith("/")?"":"/",t,".json"].join("")}function ci(e,t){let n=e;return t&&Object.keys(t).forEach(r=>{let a=t[r],o=ob(r);if(typeof a=="object"||o){let i=a;o&&typeof i=="string"&&(i={tag:"a",href:i});let s=`<${r}>`,l=n.indexOf(s);if(l!==-1){let u=i.tag||"a",c=n.indexOf(`</${r}>`);if(c!==-1){let f=n.substring(l+s.length,c),m=Object.keys(i).filter(g=>g!=="tag").map(g=>`${g}="${i[g]}"`).join(" ");n=n.replace(`${s}${f}</${r}>`,`<${u} ${m}>${f}</${u}>`)}}}else{let i=new RegExp("{"+r+"}","gm");n=n.replace(i,a.toString())}}),n}function Ar(e,t,n){let r=e[t];if(!r)return n;let a=n.split("."),o="";do{o+=a.shift();let i=r[o];i!==void 0&&(typeof i=="object"||!a.length)?(r=i,o=""):a.length?o+=".":r=n}while(a.length);return r}function ui(e,t,n,r,a){if(!e.hasOwnProperty(n))return t;let o=Ar(e,n,t);return o===t&&n!==r&&(o=Ar(e,r,t)),ci(o,a)}function ob(e){if(typeof e=="number")return!0;if(e){let t=parseInt(e);return!isNaN(t)}else return!1}var rf={"zh-CN":{"languages.en":"\u82F1\u8BED","languages.ja":"\u65E5\u8BED","languages.ko":"\u97E9\u8BED","languages.es":"\u897F\u73ED\u7259\u8BED","languages.fr":"\u6CD5\u8BED","languages.de":"\u5FB7\u8BED","languages.it":"\u610F\u5927\u5229\u8BED","languages.pt":"\u8461\u8404\u7259\u8BED","languages.ru":"\u4FC4\u8BED"},"zh-TW":{"languages.en":"\u82F1\u8A9E","languages.ja":"\u65E5\u8A9E","languages.ko":"\u97D3\u8A9E","languages.es":"\u897F\u73ED\u7259\u8A9E","languages.fr":"\u6CD5\u8A9E","languages.de":"\u5FB7\u8A9E","languages.it":"\u610F\u5927\u5229\u8A9E","languages.pt":"\u8461\u8404\u7259\u8A9E","languages.ru":"\u4FC4\u8A9E"}},gi={...Zt,"zh-CN":{...rf["zh-CN"],...Zt["zh-CN"]},"zh-TW":{...rf["zh-TW"],...Zt["zh-TW"]}},af=gi;function Ba(e,t,n){return ui(gi,e,t,Fr,n)}var Ua=(e,t,n)=>{let r=ui(gi,`languages.${e}`,t,"en");return n?uo[e]||e:r!==`languages.${e}`?r:uo[e]};var sb=dt(()=>{Ta();let e=new CustomEvent(_t,{detail:{method:"toggleTranslatePage"}});globalThis.document.dispatchEvent(e)},200),ib=dt(()=>{xa();let e=new CustomEvent(_t,{detail:{method:"toggleTranslationMask"}});globalThis.document.dispatchEvent(e)},200);function of(e){document.addEventListener("click",t=>{let n=t.target,r=n.getAttribute("data-immersive-translate-action");if(r&&r==="retry"){let a=n.getAttribute("data-immersive-translate-paragraph-id");a&&ef(Number(a))}}),e.rule.fingerCountToToggleTranslagePageWhenTouching>=2&&document.addEventListener("touchstart",t=>{t.touches.length==e.rule.fingerCountToToggleTranslagePageWhenTouching?sb():t.touches.length===e.rule.fingerCountToToggleTranslationMaskWhenTouching&&ib()}),me()&&globalThis.top!=globalThis.self&&globalThis.addEventListener("message",t=>{t&&t.data&&t.data.payload&&t.data.author===kr&&ln(t.data.payload,{tab:{id:1,url:"https://www.fake-iframe.com",active:!0}})},!1)}function _r(e,t){return e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"})>=0}async function $a(e){try{let t=new Date;R.debug("cron task start, next will run at",new Date(t.getTime()+e).toLocaleString()),await Q.storage.local.set({[Yn]:t.toISOString()}),await lb(),me()||await Mu()}catch(t){R.error("run cron task failed",t)}}async function sf(){let t=(await Ze()).interval;if(t){let n=await Q.storage.local.get(Yn);if(n&&n[Yn]){let r=n[Yn];if(Date.now()-new Date(r).getTime()<t){let a=new Date(new Date(r).getTime()+t);R.debug(`cron task not run, next will run at ${a}`);return}else $a(t)}else $a(t)}}async function lb(){try{let e=await Ze(),t=await te({url:Gn}),n=e.buildinConfigUpdatedAt,r=new Date(n),a=t.buildinConfigUpdatedAt,o=new Date(a),i=t.minVersion,s=Q.runtime.getManifest().version;_r(s,i)?o>r?(await Q.storage.local.set({buildinConfig:t}),R.info(`sync remote rules success, latest: ${new Date(a).toLocaleString()}`)):R.debug(`no need to sync rules, latest: ${r}`):R.info(`local version is too old, please update to ${i} or later`)}catch(e){R.error("sync rules error: ",e)}}function lf(){let e=["localhost",Rr],t=["/dist/userscript/options/","/options/","/options"],n=Fe(),r=new URL(n),a=r.hostname,o=r.pathname;if((e.includes(a)||a.startsWith("192.168"))&&t.includes(o)){let i=document.querySelector("meta[name=immersive-translate-options]");if(i&&i.getAttribute("content")==="true")return!0}return!1}async function uf(){if(!document.getElementById("immersive-translate-status")){R.error("Could not find status element");return}await cf("local"),await cf("sync"),cb();let t=document.getElementById("immersive-translate-page-ready");t&&setTimeout(()=>{t.value="true",t.dispatchEvent(new Event("change"))},100)}function cb(){let e=document.getElementById("immersive-translate-manifest");if(!e){R.error("Could not find manifest element");return}e.value=JSON.stringify(Q.runtime.getManifest()),e.dispatchEvent(new Event("change")),document.getElementById("immersive-translate-message").addEventListener("change",n=>{try{let r=JSON.parse(n.target.value);r&&r.method==="removeStorageKey"&&r.data&&r.data.area&&r.data.keys&&Q.storage[r.data.area].remove(r.data.keys)}catch(r){R.error("parse message error",r)}})}async function cf(e){let t=document.getElementById("immersive-translate-status"),n=document.getElementById(`immersive-translate-${e}-storage`);if(n){R.debug("init storage");let r=await Q.storage[e].get(null);n.value=JSON.stringify(r),n.dispatchEvent(new Event("change")),n.addEventListener("change",a=>{try{let o=JSON.parse(a.target.value);Q.storage[e].set(o)}catch(o){R.error("save to storage error",o)}})}else{R.error(`Could not find storage ${e} element`),t.innerText="Could not find storage local input element";return}}function ja(e){ln(e,{tab:{id:1,url:"https://www.fake.com",active:!0}}).catch(r=>{R.error("send content message request failed",e,r)}),document.querySelectorAll("iframe").forEach(r=>{r.contentWindow&&r.contentWindow.postMessage({author:kr,payload:e},"*")});let n=new CustomEvent(_t,{detail:e});globalThis.document.dispatchEvent(n)}function gf(e){let t=e.shortcuts||{},r=Object.keys(t).reduce((o,i)=>(o[t[i]]=i,o),{}),a=Object.keys(r);for(let o of a){let i=o.replace(/MacCtrl/ig,"Ctrl");st(i,s=>{s.preventDefault(),ja({method:r[o]})})}}var $n={},ub={root:"",lang:"en",fallbackLang:"en"};function fi(e,t){let n=Object.assign({},ub,e);$n=t||$n;let[r,a]=fe(n.lang),[o,i]=fe($n),[s,l]=fe(!1),u=f=>{if(o.hasOwnProperty(f))return;l(!1);let m=nf(n.root||"",f);n.getUrl&&(m=n.getUrl(n.root||"",f),fetch(m).then(g=>g.json()).then(g=>{$n[f]=g,i({...$n}),l(!0)}).catch(g=>{i({...$n}),l(!0)}))};return Ke(()=>{u(n.fallbackLang||"en"),u(r)},[r]),{lang:r,setLang:a,t:(f,m)=>{if(!o.hasOwnProperty(r))return f;let g=Ar(o,r,f);return g===f&&r!==n.fallbackLang&&(g=Ar(o,n.fallbackLang,f)),ci(g,m)},isReady:s}}var gb=0;function D(e,t,n,r,a){var o,i,s={};for(i in t)i=="ref"?o=t[i]:s[i]=t[i];var l={type:e,props:s,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--gb,__source:a,__self:r};if(typeof e=="function"&&(o=e.defaultProps))for(i in o)s[i]===void 0&&(s[i]=o[i]);return J.vnode&&J.vnode(l),l}var mi=Ao(null),di={root:"assets",lang:"en",fallbackLang:"en"},ff=e=>{let{t,setLang:n,lang:r,isReady:a}=fi({root:e.root||di.root,lang:e.lang||di.lang,fallbackLang:e.fallbackLang||di.fallbackLang,getUrl:e.getUrl},e.translations);return D(mi.Provider,{value:{t,setLang:n,lang:r,isReady:a},children:e.children})};function df(e,t,n){let r=[];n||(n={}),t!=="auto"&&!n[t]&&(n[t]={matches:[],excludeMatches:[]}),r=t!=="auto"?n[t].matches:[];let a={},o=Object.keys(n);for(let u of o){let f=n[u].matches;for(let m of f)a[m]||(a[m]=[]),a[m].push(u)}let i=a[e];if(i&&i.length>0)for(let u of i)n[u].matches.indexOf(e)>-1&&(n[u]={...n[u],matches:n[u].matches.filter(f=>f!==e)});let s=new Set(r);if(t==="auto")return{...n};s.add(e);let l=Array.from(s);return{...n,[t]:{...n[t],matches:l}}}function mf(e,t=2e3){return n=>{let r,a=0;return o=>{++a==e&&(n(o),a=0),clearTimeout(r),r=setTimeout(()=>a=0,t)}}}function pf(e){let t;try{t=new URL(e)}catch{return!1}let n=t.pathname;return n.endsWith(".html")||n.endsWith(".htm")?!0:!(t.protocol!=="http:"&&t.protocol!=="https:"&&t.protocol!=="file:"&&t.protocol!=="data:")}function hf(e){let t=e.split(".");return t.length>2?(t[0]="*",t.join(".")):null}function bf(e){let t=e.indexOf("#");return t===-1?e:e.slice(0,t)}function Wa(){return Q.runtime.getManifest().version}function Jt(e){let{items:t,maxWidth:n}=e;return n=n||128,D("select",{autoComplete:"off",class:"min-select",style:{maxWidth:`${n}px`},value:t.find(r=>r.selected)?.value,onChange:r=>{let a=r.target.value,o=t.find(i=>i.value===a);o&&o.onSelected(o)},children:t.map(r=>D("option",{value:r.value,selected:r.selected,children:r.label}))})}var za="DROP_DOWN_DEFAULT_VALUE";function pi(e){let{showArrow:t,onSelected:n,className:r,menus:a,maxWidth:o}=e;r=r||"",t=t??!0,o=o||60;let i=Mo(null);return D("select",{ref:i,autoComplete:"off",class:`min-select ${t?"":"min-select-no-arrow"} ${r||""}`,value:za,style:{maxWidth:`${o}px`},onChange:s=>{s.preventDefault();let l=s.target.value;if(i.current&&l!==za){i.current.value=za,i.current?.dispatchEvent(new Event("change"));let u=a.find(c=>c.value===l);u&&n(u)}},children:[{value:za,label:e.label}].concat(a).map(s=>D("option",{value:s.value,children:s.label}))})}function Et(){return ko(mi)}function hi(e){let{field:t,onChange:n,value:r}=e;r=r||t.default||"";let{t:a}=Et();return t.type==="select"?D("div",{class:"flex justify-between mb-2",children:[D("label",{class:"inline-block",children:[t.label?a(t.label):t.name,"\uFF1A"]}),D(Jt,{items:t.options.map(o=>({label:`${o.label?a(o.label):o.value}`,value:r,selected:r===o.value,onSelected:()=>{n(o.value)}}))})]}):null}var fb=({date:e})=>{let{t}=Et(),[n,r]=fe(!1);return Ke(()=>{setTimeout(()=>{r(!0)},5e3)},[]),n?null:D("p",{class:"text-sm",children:[t("Successfully synchronized with the latest official rules:")," ",new Date(e).toLocaleString()]})},db=({minVersion:e})=>{let{t}=Et();return D("p",{class:"text-sm",children:t("localVersionIsTooOld",{minVersion:e})})},mb=()=>{let{t:e}=Et();return D("p",{class:"text-sm",dangerouslySetInnerHTML:{__html:e("badUserscriptBrowser",{1:"https://immersive-translate.owenyoung.com/installation.html"})}})},pb=({message:e,handleSyncing:t,date:n})=>{let{t:r}=Et();return D("p",{class:"text-sm",children:[r("failToSyncRules")," ",D("a",{onClick:t,children:r("retry")}),D("br",{}),r("failedReason"),"\uFF1A",e,D("br",{}),r("currentRuleVersion"),"\uFF1A",n]})};function bi(e){let{request:t}=e,[n,r]=fe(null),{t:a}=Et(),[o,i]=fe(null),[s,l]=fe(null),[u,c]=fe(""),[f,m]=fe(!1),[g,d]=fe(!1),[T,y]=fe(!1),[p,h]=fe(null),[x,L]=fe(null),I=Wa(),A=async()=>{c("");let w=o;if(o===null)try{let E=await t({url:Gn});E?(i(E),w=E,m(!0)):(c(a("unknownError")),l(null))}catch(E){l(null),c(E.message);return}w!==null?(e.setStorageBuildinConfig(w),l(!1),r(w.buildinConfigUpdatedAt)):(c(a("canNotFetchRemoteRule")),l(null))};return Ke(()=>{mr().then(w=>{let E=w.buildinConfigUpdatedAt;h(w);let v=new Date(E);if(r(E),I==="0.0.0"){y(!0);return}t({url:Gn}).then(O=>{let $=O,_=$.minVersion,N=I;i($);let z=$.latestVersion;if(z&&(_r(N,z)?L(!0):L(!1)),_r(N,_)){let W=$.buildinConfigUpdatedAt;new Date(W)>v?(l(!0),A()):l(!1)}else d(!0),l(null)}).catch(O=>{l(null),c(O.message)})})},[]),Ke(()=>{mr().then(w=>{h(w)})},[n]),p?D("div",{class:"text-sm mt-2",style:{maxWidth:218},children:T?D(mb,{}):u?D(pb,{handleSyncing:A,message:u,date:n||""}):g?D(db,{minVersion:o.minVersion}):s===null||s===!0?null:f?D(fb,{date:n}):null}):null}function yi(e){let t=Wa(),{onTranslateTheMainPage:n,onUserConfigChange:r,request:a,onSetBuildinConfig:o,pageStatus:i,config:s,openAboutPage:l,onTranslateTheWholePage:u,openOptionsPage:c,ontranslateToThePageEndImmediately:f,onSetPageLanguage:m,onToggleTranslate:g,onTranslateLocalPdfFile:d,onTranslatePdf:T,onRestorePage:y,ctx:p,currentUrl:h,currentLang:x,onClose:L,onTranslatePage:I,onSetLocalConfig:A}=e,w=r,[E,v]=fe(""),[O,$]=fe(""),{t:_}=Et(),N=null,z=null,W=null,be=null,Me=null,xe=null,ae=null,Ve=null,le=null,S=null,P=null,F=null;if(s){let{translationService:k,translationServices:U,translationUrlPattern:B}=s;if(Fn[k]&&(Ve=Xs(k,p)),U&&U[k]?F=U[k]||{}:F={},h&&pf(h)){le=new URL(h),S=hf(le.hostname),P=bf(h);let{matches:G,excludeMatches:ee}=B;z=G.includes(S),N=G.includes(le.hostname),be=ee.includes(S),W=ee.includes(le.hostname),xe=G.includes(P),ae=ee.includes(P)}}if(s&&x&&x!=="auto"){let{translationLanguagePattern:k}=s,{matches:U}=k;U.includes(x)?Me=!0:Me=!1}let ne=k=>{k.preventDefault(),c()},K=k=>{w(U=>(U.alpha?v("Success disable alpha!"):v("Success enable alpha!"),{...U,alpha:!U.alpha}))},ve=()=>{w(k=>({...k,translationArea:"body"})),u()},ke=()=>{w(k=>({...k,translationArea:"main"})),n()},ye=(k,U,B,G)=>{if(k==="default"){w(Se=>{let Pe={...Se.translationUrlPattern};return{...Se,translationUrlPattern:{...Se.translationUrlPattern,matches:Ut([le?.hostname,S,h],Pe.matches),excludeMatches:Ut([le?.hostname,S,h],Pe.excludeMatches)}}});return}let ee=k,we=ee==="matches"?"excludeMatches":"matches";le&&w(Se=>{let Pe={...Se.translationUrlPattern};return Pe[ee]=vs(U,Pe[ee]),G.length>0&&(Pe[ee]=Ut(G,Pe[ee])),Pe[we]=Ut(B,Pe[we]),{...Se,translationUrlPattern:{...Se.translationUrlPattern,...Pe}}}),ee==="matches"&&i==="Original"?setTimeout(()=>{I(),L()},100):ee==="excludeMatches"&&i==="Translated"&&setTimeout(()=>{y(),L()},100)},X=k=>{if(!k){w(G=>{let ee={...G.translationLanguagePattern};return{...G,translationLanguagePattern:{...G.translationLanguagePattern,matches:Ut(x,ee.matches),excludeMatches:Ut(x,ee.excludeMatches)}}});return}let U=k,B=U==="matches"?"excludeMatches":"matches";x&&w(G=>{let ee={...G.translationLanguagePattern};return ee[U]=vs(x,ee[U]),ee[B]=Ut(x,ee[B]),{...G,translationLanguagePattern:{...G.translationLanguagePattern,...ee}}}),U==="matches"&&i==="Original"&&setTimeout(()=>{I(),L()},100)},Z=le?.pathname.toLowerCase().endsWith(".pdf"),Y=_("translate");i==="Translated"?Y=_("show-original"):i==="Original"?Z?eu()&&le.protocol==="file:"?Y=_("translate-firefox-local-pdf"):Y=_("translate-pdf"):Y=_("translate"):Y=_(i);let ue=_("translateToThePageEndImmediately");(i==="Original"||i==="Translated")&&(s.shortcuts.toggleTranslatePage&&(tu()&&p.rule.fingerCountToToggleTranslagePageWhenTouching>=2?Y+=` (${_(`fingers.${p.rule.fingerCountToToggleTranslagePageWhenTouching}`)})`:Y+=` (${s.shortcuts.toggleTranslatePage})`),s.shortcuts.toggleTranslateToThePageEndImmediately&&(ue+=` (${s.shortcuts.toggleTranslateToThePageEndImmediately})`));let j=[];p&&(j=Wg(p));let oe=k=>{k.preventDefault(),L()};return D("div",{class:"p-3",children:[D("div",{class:"text-sm",children:[D("div",{class:"flex justify-between mb-2",children:[D("label",{class:"inline-block",children:[_("popupSourceLanguage"),"\uFF1A"]}),D(Jt,{items:It.map(k=>({label:Ua(k,s.interfaceLanguage),value:k,selected:k===x,onSelected:U=>{m(U.value)}}))})]}),s&&s.targetLanguage&&D("div",{class:"flex justify-between mb-2",children:[D("label",{class:"inline-block",children:[_("popupTarget"),"\uFF1A"]}),D(Jt,{items:It.filter(k=>k!=="auto").map(k=>({label:Ua(k,s.interfaceLanguage),value:k,selected:k===s.targetLanguage,onSelected:U=>{w(B=>({...B,targetLanguage:U.value}))}}))})]}),Ve&&j.length>0&&D(xt,{children:[D("div",{class:"flex justify-between mb-2",children:[D("label",{class:"inline-block",children:[_("popupService"),"\uFF1A"]}),D(Jt,{items:j.map(k=>({label:`${_("translationServices."+k.id)}${k.ok?"":" "+_("needAction")}`,value:k.id,selected:k.selected,onSelected:U=>{let B=j.find(G=>G.id===U.value);B.ok?(w(G=>({...G,translationService:B.id})),B.props.length===0?setTimeout(()=>{I()},1):setTimeout(()=>{y()},1)):(w(G=>({...G,translationService:B.id})),setTimeout(()=>{c()},100))}}))})]}),F&&Ve.props.length>0&&Ve.props.map((k,U)=>D("div",{class:"pl-4 text-sm",children:D(hi,{field:k,value:F[k.name],onChange:B=>{w(G=>{let ee=G.translationServices||{},we=ee[Ve.id]||{};return setTimeout(()=>{y()},1),{...G,translationServices:{...ee,[Ve.id]:{...we,[k.name]:B}}}})}},"field-"+U)}))]}),le&&D("div",{class:"flex justify-between mb-2",children:[D("label",{class:"inline-block",children:_("forThisSite")}),D(Jt,{items:[{label:_("default"),value:"default",selected:N===!1&&W===!1&&!z&&!be&&!xe&&!ae,onSelected:()=>{ye("default",le.hostname,[],[]);let k=le.hostname,U=p.localConfig.tempTranslationUrlMatches||[],B=U.filter(ee=>ee.match!==k),G=!1;B.length!==U.length&&(G=!0),G&&A({...p.localConfig,tempTranslationUrlMatches:[...B]})}},P&&{label:_("alwaysTranslateSomeSite",{hostname:_("currentUrl")}),value:"matchesUrl",selected:xe,onSelected:()=>{ye("matches",P,[P],[])}},{label:_("alwaysTranslateSomeSite",{hostname:le.hostname}),value:"matches",selected:N,onSelected:k=>{ye(k.value,le.hostname,[le.hostname,S,P],[S])}},S&&{label:_("alwaysTranslateSomeSite",{hostname:S}),value:"matchesWild",selected:z,onSelected:()=>{ye("matches",S,[P,le.hostname,S],[le.hostname])}},P&&{label:_("neverTranslateSomeSite",{hostname:_("currentUrl")}),value:"excludeMatchesUrl",selected:ae,onSelected:()=>{ye("excludeMatches",P,[P],[])}},{label:_("neverTranslateSomeSite",{hostname:le.hostname}),value:"excludeMatches",selected:W,onSelected:k=>{ye(k.value,le.hostname,[le.hostname,S,P],[S])}},S&&{label:_("neverTranslateSomeSite",{hostname:S}),value:"excludeMatchesWild",selected:be,onSelected:()=>{ye("excludeMatches",S,[le.hostname,P,S],[le.hostname])}}].filter(Boolean)})]})]}),D("div",{class:"",children:D("button",{class:"py-2 mt-1 mb-2 main-button ",onClick:()=>{Z?T&&T():g()},"aria-busy":i==="Translating",disabled:i==="Translating",children:Y})}),D("div",{class:"flex justify-between",children:[x&&x!=="auto"?D("label",{for:"alwaysTranslateThisLanugage",class:"text-sm",children:[D("input",{type:"checkbox",id:"alwaysTranslateThisLanugage",name:"alwaysTranslateThisLanugage",checked:!!Me,onChange:k=>{let U=k.target.checked;X(U?"matches":void 0)}}),_("alwaysTranslateSomeLanguage",{language:Ua(x,s.interfaceLanguage)})]}):D("span",{}),D(pi,{label:_("more"),showArrow:!0,onSelected:k=>{k.value==="translateTheWholePage"?u():k.value==="translateToThePageEndImmediately"?f():k.value==="translateTheMainPage"?n():k.value==="showTranslationOnly"||(k.value==="translateLocalPdfFile"?d&&d():k.value==="donate"?(globalThis.open(s.donateUrl),L()):k.value==="feedback"?(globalThis.open(s.feedbackUrl),L()):k.value==="options"?(c(),L()):k.value==="changeToTranslateTheWholePage"?ve():k.value==="changeToTranslateTheMainPage"?ke():k.value==="about"&&l())},menus:[s.translationArea==="main"&&{label:"\u{1F480} "+_("changeToTranslateTheWholePage"),value:"changeToTranslateTheWholePage"},s.translationArea==="body"&&{label:"\u{1F4D6} "+_("changeToTranslateTheMainPage"),value:"changeToTranslateTheMainPage"},{label:"\u26A1 "+ue,value:"translateToThePageEndImmediately"},!me()&&{label:"\u{1F4C1} "+_("browser.translateLocalPdfFile"),value:"translateLocalPdfFile"},{label:"\u2764\uFE0F "+_("aboutLabel"),value:"about"}].filter(Boolean)})]}),D("div",{class:"text-sm",children:E}),D("div",{class:"text-sm",children:O}),D("footer",{children:[D(bi,{request:a,setStorageBuildinConfig:o}),D("div",{class:"mt-3 text-sm flex justify-between",children:[D("a",{href:"#",class:"secondary",onClick:ne,children:_("options")}),me()&&D("a",{href:"#",class:"secondary",onClick:oe,children:_("close")}),D("span",{class:"immersive-translate-no-select muted",onClick:mf(7)(K),children:["V",t]})]})]})]})}var Ti={get:(e,t,n)=>{let r=t===void 0?e:{[e]:t};return Q.storage[n].get(r)},set:(e,t,n)=>Q.storage[n].set({[e]:t})};function qa(e,t,n){let[r]=fe(()=>typeof t=="function"?t():t),[a]=fe(n),[o,i]=fe(r),[s,l]=fe(!0),[u,c]=fe("");Ke(()=>{Ti.get(e,r,a).then(m=>{m[e]&&i(m[e]),l(!0),c("")}).catch(m=>{l(!1),c(m)})},[e,r,a]);let f=ar(m=>{let g=typeof m=="function"?m(o):m;R.debug("new settings",g),Ti.set(e,g,a).then(()=>{i(g),l(!0),c("")}).catch(d=>{i(g),l(!1),c(d)})},[a,e,o]);return[o,f,s,u]}function xi(e,t,n){let r=[];return function(){let[o,i,s,l]=qa(e,t,n),u=ar(c=>{for(let f of r)f(c)},[]);return Ke(()=>(r.push(i),()=>{r.splice(r.indexOf(i),1)}),[i]),[o,u,s,l]}}function yf(e,t){return xi(e,t,"sync")}var hb="userConfig",bb={},yb=yf(hb,bb);function Tf(){let[e,t,n,r]=yb();return[e,function(o){let i=typeof o=="function"?o(e):o;i&&(i.updatedAt=new Date().toISOString()),t(i)},n,r,t]}function wi(e){let{onClose:t}=e,[n,r]=fe("Original"),[a,o,i,s]=Tf(),[l,u]=fe(null),[c,f]=fe(globalThis.location.href),[m,g]=fe("auto"),[d,T]=fe(null),y=v=>{r(v.detail)},p=v=>{g(v);let O=df(c,v,l.sourceLanguageUrlPattern);o($=>({...$,sourceLanguageUrlPattern:O})),jt(v)},h=()=>{f(globalThis.location.href)};Ke(()=>(document.addEventListener(Pr,y,!1),Ze().then(v=>{u(v);let O=Wt();g(O);let $=Ge();r($),$a(v.interval)}),document.addEventListener("urlChange",h),()=>{document.removeEventListener("pageTranslatedStatus",y),document.removeEventListener("urlChange",h)}),[]),Ke(()=>{Ze().then(v=>{u(v)})},[a]),Ke(()=>{c&&l&&Ot({url:c,config:l}).then(v=>{T(v)})},[c,l]);let x=(v,O)=>()=>{ja({method:v}),O&&t()},L=()=>{t()},I=()=>{globalThis.alert("Not implemented yet"),t()},A=()=>{globalThis.alert("Not implemented yet"),t()},w=()=>{Sa(!0),setTimeout(()=>{t()},50)},E=()=>{Ea(),setTimeout(()=>{t()},50)};return!l||!d?null:D(yi,{request:te,onClose:L,onTranslateTheWholePage:x("translateTheWholePage",!0),openOptionsPage:w,onToggleTranslate:x("toggleTranslatePage",!0),onTranslateTheMainPage:x("translateTheMainPage",!0),ontranslateToThePageEndImmediately:x("translateToThePageEndImmediately",!0),onTranslatePage:x("translatePage",!0),onRestorePage:x("restorePage",!1),onTranslatePdf:I,openAboutPage:E,onTranslateLocalPdfFile:A,onSetPageLanguage:p,onUserConfigChange:o,config:l,pageStatus:n,ctx:d,currentUrl:c,currentLang:m,onSetLocalConfig:va,onSetBuildinConfig:Eu})}function Tb(e,t){for(let n of t)e.appendChild(document.createElement("style")).innerHTML=n}var Je={position:"right",right:0,top:335},Ga=!1,mn=null,Lt=null,Ja=null,vi=null,jn=null,Si=null,xf=6,Va,Ka,vf=null,Sf=null;async function Li(){let e=gt();Si=await Su(),Je=Si.pagePopupConfig||Je;let t=document.createElement("div");t.id="immersive-translate-popup",t.setAttribute("style","all: initial"),document.documentElement.appendChild(t);let n=t.attachShadow({mode:"open"});vi=n;let r=[e.IMMERSIVE_TRANSLATE_PICO_CSS,e.IMMERSIVE_TRANSLATE_COMMON_CSS,e.IMMERSIVE_TRANSLATE_POPUP_CSS];Tb(n,r);let a=document.createElement("div");a.innerHTML=e.IMMERSIVE_TRANSLATE_POPUP_HTML,n.appendChild(a),mn=n.querySelector("#immersive-translate-popup-container");let i=n.querySelector("#immersive-translate-popup-btn");Lt=i,Ja=n.querySelector("#mount"),mn.setAttribute("style",Ei(Je)),Mi(),i.addEventListener("mousedown",Ef),i.addEventListener("touchstart",vb),globalThis.addEventListener("resize",l=>{mn.setAttribute("style",Ei(Je))})}function xb(){Gr(null,Ja),Ja.style.display="none",Lt.style.display="block",jn=setTimeout(()=>{Mi(!0)},2e3)}function wf(e){let t=e.querySelector("#mount"),n=()=>{xb()},r=a=>{a&&a.target&&a.target.id==="immersive-translate-popup-overlay"&&n()};(async()=>{let a=await Ze();Gr(D(ff,{lang:a.interfaceLanguage,fallbackLang:"zh-CN",translations:af,children:D("div",{onClick:r,id:"immersive-translate-popup-overlay",class:"immersive-translate-popup-overlay",children:D("div",{class:"immersive-translate-popup-wrapper",style:wb(),children:D(wi,{onClose:n})})})}),t)})().then(()=>{Lt.style.display="none",Ja.style.display="block"})}function wb(){let e=Ai(),t=e.height,{position:n,top:r,left:a}=Je,o={position:"fixed"},i=300,s=300,l=100;return n==="right"||n==="left"?(o.top=r-l,o.top+i>=t?(o.bottom=30,delete o.top):o.top<=10&&(o.top=10),n==="right"?o.right=0:n==="left"&&(o.left=0)):(n==="top"||n==="bottom")&&(o.left=a-l,o.left+s>=e.width?(o.right=0,delete o.left):o.left<=10&&(o.left=0),n==="top"?o.top=0:n==="bottom"&&(o.bottom=0)),o}function Ai(){return{width:Math.max(document.documentElement.clientWidth,window.innerWidth||0),height:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}function Ef(e){Sf=mn.getAttribute("style"),Va=e.pageX,Ka=e.pageY,jn&&clearTimeout(jn),Ga=!1,Lt.style.opacity="1",Lt.style.transform="none",vf=Lt.getAttribute("style"),globalThis.addEventListener("mousemove",_i),globalThis.addEventListener("mouseup",Ci),globalThis.addEventListener("touchmove",Lf),globalThis.addEventListener("touchend",Ya),globalThis.addEventListener("touchcancel",Ya)}function vb(e){e.preventDefault&&e.preventDefault(),Ef(e.changedTouches[0])}function Lf(e){_i(e.changedTouches[0])}function Ya(e){e.preventDefault&&e.preventDefault(),Ci(e.changedTouches[0])}function _i(e){e.preventDefault&&e.preventDefault(),Ga=!0,mn.setAttribute("style",`left:${e.clientX}px;top:${e.clientY}px;transform:scale(1.6);`)}function Ci(e){e.preventDefault&&e.preventDefault(),Eb(),jn&&clearTimeout(jn),Va=Va||0,Ka=Ka||0;let t=Math.abs(e.pageX-Va),n=Math.abs(e.pageY-Ka);t<xf&&n<xf?(mn.setAttribute("style",Sf),Lt.setAttribute("style",vf),wf(vi)):Ga?Sb(e):wf(vi),Ga=!1}function Sb(e){let t=Ai(),n=e.clientX,r=e.clientY,a=r,o=t.height-r,i=n,s=t.width-n;a<o&&a<i&&a<s?Je={position:"top",left:n,top:0}:o<a&&o<i&&o<s?Je={position:"bottom",bottom:0,left:e.clientX}:i<a&&i<o&&i<s?Je={position:"left",left:0,top:e.clientY}:s<a&&s<o&&s<i&&(Je={position:"right",right:0,top:e.clientY});let l=Ei(Je);mn.setAttribute("style",l),va({...Si,pagePopupConfig:Je}),jn=setTimeout(()=>{Mi(!0)},2e3)}function Mi(e=!1){Lt.style.opacity="0.4";let t="";Je.position==="left"?t="translateX(-40%)":Je.position==="right"?t="translateX(40%)":Je.position==="top"?t="translateY(-40%)":Je.position==="bottom"&&(t="translateY(40%)"),Lt.style.transform=t,e&&(Lt.style.transition="transform 0.2s ease-in-out, opacity 0.2s ease-in-out")}function Eb(){globalThis.removeEventListener("mousemove",_i),globalThis.removeEventListener("mouseup",Ci),globalThis.removeEventListener("touchmove",Lf),globalThis.removeEventListener("touchend",Ya),globalThis.removeEventListener("touchcancel",Ya)}function Ei(e){let t=Lb(e);return Object.keys(t).map(n=>typeof t[n]=="number"?`${n}:${t[n]}px;`:"").join("")}function Lb(e){let{position:t,...n}=e,r=Ai(),a={};return t==="left"?(a.left=0,n.top>r.height?a.top=r.height-100:a.top=n.top):t==="right"?(a.right=0,n.top>r.height?a.top=r.height-100:a.top=n.top):t==="top"?(a.top=0,n.left>r.width?a.left=r.width-100:a.left=n.left):t==="bottom"&&(a.bottom=0,n.left>r.width?a.left=r.width-100:a.left=n.left),a}var Xa=!1;async function Af(){let e=await Ze(),t={url:globalThis.location.href,config:e},n=await Ot(t);e.debug&&R.setLevel("debug"),globalThis.document.addEventListener(_t,r=>{Xa||(Xa=!0,Li().catch(a=>{R.error("init popup error",a)}))}),n.isTranslateExcludeUrl?R.debug("detect exclude url, do not inject anything."):(la().any||me())&&n.rule.isShowUserscriptPagePopup&&(Xa||(Xa=!0,Li().catch(r=>{R.error("init popup error",r)})))}var Ab=e=>document.head.appendChild(document.createElement("style")).innerHTML=e;function _f(){let t=gt().IMMERSIVE_TRANSLATE_INJECTED_CSS;t&&Ab(t)}var Cf={manifest_version:3,name:"__MSG_brandName__",description:"__MSG_brandDescription__",version:"0.2.49",default_locale:"en",background:{service_worker:"background.js"},web_accessible_resources:["styles/inject.css","pdf/index.html"],content_scripts:[{matches:["<all_urls>","file:///*","*://*/*"],js:["content_script.js"],css:["styles/inject.css"],run_at:"document_end",all_frames:!0}],commands:{toggleTranslatePage:{suggested_key:{default:"Alt+A"},description:"__MSG_toggleTranslatePage__"},toggleTranslateTheWholePage:{suggested_key:{default:"Alt+W"},description:"__MSG_toggleTranslateTheWholePage__"},toggleTranslateToThePageEndImmediately:{description:"__MSG_toggleTranslateToThePageEndImmediately__"},toggleTranslateTheMainPage:{description:"__MSG_toggleTranslateTheMainPage__"},toggleTranslationMask:{description:"__MSG_toggleTranslationMask__"}},options_page:"options.html",options_ui:{page:"options.html",open_in_tab:!0,browser_style:!1},permissions:["storage","activeTab","contextMenus","webRequest","webRequestBlocking","declarativeNetRequestWithHostAccess","declarativeNetRequestFeedback","declarativeNetRequest","tabs","identity","alarms"],host_permissions:["<all_urls>"],declarative_net_request:{rule_resources:[{id:"ruleset_1",enabled:!0,path:"rules/request_modifier_rule.json"}]},action:{default_popup:"popup.html",default_icon:{32:"icons/32.png",48:"icons/48.png",64:"icons/64.png",128:"icons/128.png",256:"icons/256.png"}},browser_action:{default_icon:"icons/32.png",default_popup:"popup.html"},icons:{32:"icons/32.png",48:"icons/48.png",64:"icons/64.png",128:"icons/128.png",256:"icons/256.png"},browser_specific_settings:{gecko:{id:"{5efceaa7-f3a2-4e59-a54b-85319448e305}",strict_min_version:"63.0"}},key:"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7JPn78UfqI3xIIOPPLPS74UTzLfJL1gQM8hlk/deKWvFP/WqUBnPJPdhQeF45sFpI1OjO70nFqdATT4/RwYAiZK7G/E6m27MDVnhHjszfzReOuoAEn9J3RnE2xEx5pFhRFcelhnwTTLrrn90aaPcaMtNsgXtZA1Ggz/SnX9I4ZygqpJYjx3Ql2t6SyNK222oRQiKMT93Rrjgyc8RFA7FKXsWglG0TvseRjbmG5Jk5gDx+2/YTcWGqCDotQnWnkPj/dBO23UAX7IpyJK3FGYdkvWFih6OVClHIIWY8mfCjjwSGbXNQNesaa9F2hrzBZ5MRTj4m7yj76mGxuPHPIE8mwIDAQAB"};async function Mf(){let e=await Ze(),t=await Ot({config:e,url:Fe()});if(t.isTranslateExcludeUrl&&lf())R.debug("detect web options page"),uf();else if(of(t),me()?(_f(),gf(e),kb(e)):Tu(),e.debug?R.setLevel("debug"):R.setLevel("info"),globalThis.top!=globalThis.self||await Af().catch(a=>{R.error(`init popup page error: ${a}`)}),!t.isTranslateExcludeUrl){if(t.rule.isPdf){let a=!1;globalThis.PDFViewerApplication&&globalThis.PDFViewerApplication.initializedPromise.then(()=>{let o=globalThis.PDFViewerApplication;o.eventBus.on("pagesdestroy",()=>{zt()}),o.eventBus.on("textlayerrendered",async()=>{a||(a=!0,await Ha())}),o.eventBus.on("fileinputchange",()=>{a=!1})})}else await Ha();sf()}}var _b=dt(async()=>{await Sa()},50),Cb=dt(async()=>{await Ea()},50),Mb=dt(e=>{Pb({method:e})},50);function kb(e){if(me()&&typeof GM<"u"&&GM&&GM.registerMenuCommand){let t=Cf.commands,a=[...Object.keys(t).filter(o=>o==="toggleTranslatePage").map(o=>{let i=t[o].description,s=i;return i.startsWith("__MSG_")&&i.endsWith("__")&&(s=Ba(`browser.${i.slice(6,-2)}`,e.interfaceLanguage)),{id:o,title:s}}),{id:no,title:Ba("browser.openOptionsPage",e.interfaceLanguage),key:"o"},{id:ro,title:Ba("browser.openAboutPage",e.interfaceLanguage),key:"o"}];for(let o of a)GM.registerMenuCommand(o.title,()=>{o.id===no?_b():o.id===ro?Cb():Mb(o.id)},o.key)}}function Pb(e){ln(e,{tab:{id:1,url:"https://www.fake.com",active:!0}}).catch(n=>{R.error("send content message request failed",e,n)});let t=new CustomEvent(_t,{detail:e});globalThis.document.dispatchEvent(t)}var Cr={capture:!0,once:!0,passive:!0},Rf=()=>document.readyState==="interactive"||document.readyState==="complete",Rb=e=>document.readyState===e,Mr=(e,t)=>Rb(e)||Rf()?(t(e),!0):!1,Db=()=>new Promise(e=>{Mr("loading",e)||document.addEventListener("readystatechange",()=>{document.readyState==="loading"&&e("loading")},Cr)}),Ob=()=>new Promise(e=>{Mr("interactive",e)||document.addEventListener("readystatechange",()=>{document.readyState==="interactive"&&e("interactive")},Cr)}),Ib=()=>new Promise(e=>{Mr("complete",e)||document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&e("complete")},Cr)}),kf=()=>new Promise(e=>{Mr("domready",e)||document.addEventListener("DOMContentLoaded",()=>{e("domready")},Cr)}),Pf=()=>new Promise(e=>{Mr("load",e)||window.addEventListener("load",()=>{e("load")},Cr)}),Df={};Object.defineProperties(Df,{state:{get:function(){return document.readyState}},loading:{get:function(){return Db()}},interactive:{get:function(){return Ob()}},complete:{get:function(){return Ib()}},window:{get:function(){return Pf()}},load:{get:function(){return Pf()}},domready:{get:function(){return kf()}},dom:{get:function(){return kf()}},ready:{get:function(){return Rf()}}});var Of=Df;var If={NOT_FUNCTION:"Your executor is not a function. functions and promises are valid.",FAILED_TO_WAIT:"Failed to wait"};function Nb(e){return async()=>await e()}function Fb(e){if(typeof e!="function")throw new Error(If.NOT_FUNCTION)}var ki=class{constructor({interval:t=100,timeout:n=1e3,stopOnFailure:r=!1,verbose:a=!1,backoffFactor:o=1,backoffMaxInterval:i,message:s=""}={}){this._interval=t,this._timeout=n,this._stopOnFailure=r,this._isWaiting=!1,this._isResolved=!1,this._verbose=a,this._userMessage=s,this.originalStacktraceError=new Error,this._Console=console,this._backoffFactor=o,this._backoffMaxInterval=i||n,this.start=+Date.now()}tryEvery(t){return this._interval=t,this}stopAfter(t){return this._timeout=t,this}execute(t){return this._applyPromiseHandlers(),Fb(t),this._executeFn=Nb(t),this.start=Date.now(),this._isWaiting=!0,this._log("starting to execute"),this._runFunction(),this.promise}getPromise(){return this.promise}isResolved(){return this._isResolved}isWaiting(){return this._isWaiting}stopOnFailure(t){return this._stopOnFailure=t,this}_applyPromiseHandlers(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}_timeFromStart(){return Date.now()-this.start}_shouldStopTrying(){return this._timeFromStart()>this._timeout}_executeAgain(){this._log("executing again");let t=this._interval,n=t*this._backoffFactor;this._interval=n>this._backoffMaxInterval?this._backoffMaxInterval:n,setTimeout(this._runFunction.bind(this),t)}_failedToWait(){let t=`${If.FAILED_TO_WAIT} after ${this._timeFromStart()}ms`;if(this._userMessage&&(t=`${t}: ${this._userMessage}`),this._lastError){this._lastError.message=`${t}
${this._lastError.message}`;let n=this.originalStacktraceError.stack;n&&(this._lastError.stack+=n.substring(n.indexOf(`
`)+1))}else this._lastError=this.originalStacktraceError,this._lastError.message=t;return this._log(this._lastError),this._lastError}_runFunction(){if(this._shouldStopTrying()){this._isWaiting=!1,this.reject?.(this._failedToWait());return}this._executeFn().then(t=>{if(t===!1){this._log(`then execute again with result: ${t}`),this._executeAgain();return}this.resolve?.(t),this._isWaiting=!1,this._isResolved=!0,this._log(`then done waiting with result: ${t}`)}).catch(t=>this._stopOnFailure?(this._log(`stopped on failure with err: ${t}`),this.reject?.(t)):(this._lastError=t,this._log(`catch with err: ${t}`),this._executeAgain()))}_log(t){this._verbose&&this._Console&&this._Console.log&&this._Console.log(t)}},Nf=(e,t)=>new ki(t).execute(e);async function Ff(){try{return await Nf(()=>{let e=an(document.body);if(e&&e.length>=10)return!0;throw new Error("there is no main text")},{timeout:1e4}),!0}catch(e){throw e}}Of.domready.then(()=>{Ff().then(()=>{Mf().catch(e=>{e&&R.error("translate page error",e.name,e.message,e.details||"",e)})}).catch(e=>{R.debug("can not detect a valid body: ",e)})}).catch(e=>{e&&R.error("translate dom ready detect error",e)});
