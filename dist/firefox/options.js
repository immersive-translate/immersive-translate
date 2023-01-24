var ed=Object.defineProperty;var td=(e,t)=>{for(var n in t)ed(e,n,{get:t[n],enumerable:!0})};var y={BUILD_TIME:"2023-01-24T18:22:59.339Z",VERSION:"0.2.21",PROD:"1",IMMERSIVE_TRANSLATE_INJECTED_CSS:`.immersive-translate-target-translation-pre-whitespace {
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
`,MOCK:"0",DEBUG:"0"};function un(){let e,t="pending",n=new Promise((r,a)=>{e={async resolve(o){await o,t="fulfilled",r(o)},reject(o){t="rejected",a(o)}}});return Object.defineProperty(n,"state",{get:()=>t}),Object.assign(n,e)}var Na=class extends Error{constructor(){super("Deadline"),this.name="DeadlineError"}};function Sr(e,t){let n=un(),r=setTimeout(()=>n.reject(new Na),t);return Promise.race([e,n]).finally(()=>clearTimeout(r))}function fn(e,t={}){let{signal:n,persistent:r}=t;return n?.aborted?Promise.reject(new DOMException("Delay was aborted.","AbortError")):new Promise((a,o)=>{let i=()=>{clearTimeout(c),o(new DOMException("Delay was aborted.","AbortError"))},c=setTimeout(()=>{n?.removeEventListener("abort",i),a()},e);if(n?.addEventListener("abort",i,{once:!0}),r===!1)try{Deno.unrefTimer(c)}catch(u){if(!(u instanceof ReferenceError))throw u;console.error("`persistent` option is only available in Deno")}})}var mi=class{#e=0;#t=[];#n=[];#r=un();add(t){++this.#e,this.#a(t[Symbol.asyncIterator]())}async#a(t){try{let{value:n,done:r}=await t.next();r?--this.#e:this.#t.push({iterator:t,value:n})}catch(n){this.#n.push(n)}this.#r.resolve()}async*iterate(){for(;this.#e>0;){await this.#r;for(let t=0;t<this.#t.length;t++){let{iterator:n,value:r}=this.#t[t];yield r,this.#a(n)}if(this.#n.length){for(let t of this.#n)throw t;this.#n.length=0}this.#t.length=0,this.#r=un()}}[Symbol.asyncIterator](){return this.iterate()}};var Qe={};td(Qe,{bgBlack:()=>Md,bgBlue:()=>Nd,bgBrightBlack:()=>Fd,bgBrightBlue:()=>Bd,bgBrightCyan:()=>zd,bgBrightGreen:()=>Ud,bgBrightMagenta:()=>jd,bgBrightRed:()=>Hd,bgBrightWhite:()=>Wd,bgBrightYellow:()=>$d,bgCyan:()=>Id,bgGreen:()=>Ad,bgMagenta:()=>Dd,bgRed:()=>Pd,bgRgb24:()=>Gd,bgRgb8:()=>Vd,bgWhite:()=>Od,bgYellow:()=>Rd,black:()=>gd,blue:()=>bd,bold:()=>sd,brightBlack:()=>yi,brightBlue:()=>Cd,brightCyan:()=>kd,brightGreen:()=>Sd,brightMagenta:()=>Ld,brightRed:()=>wd,brightWhite:()=>_d,brightYellow:()=>Ed,cyan:()=>xd,dim:()=>id,getColorEnabled:()=>ad,gray:()=>vd,green:()=>md,hidden:()=>fd,inverse:()=>ud,italic:()=>ld,magenta:()=>yd,red:()=>pd,reset:()=>od,rgb24:()=>Kd,rgb8:()=>qd,setColorEnabled:()=>rd,strikethrough:()=>dd,stripColor:()=>Yd,underline:()=>cd,white:()=>Td,yellow:()=>hd});var{Deno:hi}=globalThis,bi=typeof hi?.noColor=="boolean"?hi.noColor:!0,Da=!bi;function rd(e){bi||(Da=e)}function ad(){return Da}function B(e,t){return{open:`\x1B[${e.join(";")}m`,close:`\x1B[${t}m`,regexp:new RegExp(`\\x1b\\[${t}m`,"g")}}function j(e,t){return Da?`${t.open}${e.replace(t.regexp,t.open)}${t.close}`:e}function od(e){return j(e,B([0],0))}function sd(e){return j(e,B([1],22))}function id(e){return j(e,B([2],22))}function ld(e){return j(e,B([3],23))}function cd(e){return j(e,B([4],24))}function ud(e){return j(e,B([7],27))}function fd(e){return j(e,B([8],28))}function dd(e){return j(e,B([9],29))}function gd(e){return j(e,B([30],39))}function pd(e){return j(e,B([31],39))}function md(e){return j(e,B([32],39))}function hd(e){return j(e,B([33],39))}function bd(e){return j(e,B([34],39))}function yd(e){return j(e,B([35],39))}function xd(e){return j(e,B([36],39))}function Td(e){return j(e,B([37],39))}function vd(e){return yi(e)}function yi(e){return j(e,B([90],39))}function wd(e){return j(e,B([91],39))}function Sd(e){return j(e,B([92],39))}function Ed(e){return j(e,B([93],39))}function Cd(e){return j(e,B([94],39))}function Ld(e){return j(e,B([95],39))}function kd(e){return j(e,B([96],39))}function _d(e){return j(e,B([97],39))}function Md(e){return j(e,B([40],49))}function Pd(e){return j(e,B([41],49))}function Ad(e){return j(e,B([42],49))}function Rd(e){return j(e,B([43],49))}function Nd(e){return j(e,B([44],49))}function Dd(e){return j(e,B([45],49))}function Id(e){return j(e,B([46],49))}function Od(e){return j(e,B([47],49))}function Fd(e){return j(e,B([100],49))}function Hd(e){return j(e,B([101],49))}function Ud(e){return j(e,B([102],49))}function $d(e){return j(e,B([103],49))}function Bd(e){return j(e,B([104],49))}function jd(e){return j(e,B([105],49))}function zd(e){return j(e,B([106],49))}function Wd(e){return j(e,B([107],49))}function Mt(e,t=255,n=0){return Math.trunc(Math.max(Math.min(e,t),n))}function qd(e,t){return j(e,B([38,5,Mt(t)],39))}function Vd(e,t){return j(e,B([48,5,Mt(t)],49))}function Kd(e,t){return typeof t=="number"?j(e,B([38,2,t>>16&255,t>>8&255,t&255],39)):j(e,B([38,2,Mt(t.r),Mt(t.g),Mt(t.b)],39))}function Gd(e,t){return typeof t=="number"?j(e,B([48,2,t>>16&255,t>>8&255,t&255],49)):j(e,B([48,2,Mt(t.r),Mt(t.g),Mt(t.b)],49))}var Jd=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function Yd(e){return e.replace(Jd,"")}function Er(e,t){let n=null,r=null,a=(...o)=>{a.clear(),r=()=>{a.clear(),e.call(a,...o)},n=setTimeout(r,t)};return a.clear=()=>{typeof n=="number"&&(clearTimeout(n),n=null,r=null)},a.flush=()=>{r?.()},Object.defineProperty(a,"pending",{get:()=>typeof n=="number"}),a}var Pr,G,Si,Xd,jn,xi,Ei,kr={},Ci=[],Qd=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Pt(e,t){for(var n in t)e[n]=t[n];return e}function Li(e){var t=e.parentNode;t&&t.removeChild(e)}function ki(e,t,n){var r,a,o,i={};for(o in t)o=="key"?r=t[o]:o=="ref"?a=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?Pr.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return Cr(e,i,r,a,null)}function Cr(e,t,n,r,a){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a??++Si};return a==null&&G.vnode!=null&&G.vnode(o),o}function Ze(e){return e.children}function Lr(e,t){this.props=e,this.context=t}function dn(e,t){if(t==null)return e.__?dn(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?dn(e):null}function _i(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return _i(e)}}function Ia(e){(!e.__d&&(e.__d=!0)&&jn.push(e)&&!_r.__r++||xi!==G.debounceRendering)&&((xi=G.debounceRendering)||setTimeout)(_r)}function _r(){for(var e;_r.__r=jn.length;)e=jn.sort(function(t,n){return t.__v.__b-n.__v.__b}),jn=[],e.some(function(t){var n,r,a,o,i,s;t.__d&&(i=(o=(n=t).__v).__e,(s=n.__P)&&(r=[],(a=Pt({},o)).__v=o.__v+1,Oa(s,o,a,n.__n,s.ownerSVGElement!==void 0,o.__h!=null?[i]:null,r,i??dn(o),o.__h),Ri(r,o),o.__e!=i&&_i(o)))})}function Mi(e,t,n,r,a,o,i,s,c,u){var l,f,d,g,h,x,b,m=r&&r.__k||Ci,T=m.length;for(n.__k=[],l=0;l<t.length;l++)if((g=n.__k[l]=(g=t[l])==null||typeof g=="boolean"?null:typeof g=="string"||typeof g=="number"||typeof g=="bigint"?Cr(null,g,null,null,g):Array.isArray(g)?Cr(Ze,{children:g},null,null,null):g.__b>0?Cr(g.type,g.props,g.key,g.ref?g.ref:null,g.__v):g)!=null){if(g.__=n,g.__b=n.__b+1,(d=m[l])===null||d&&g.key==d.key&&g.type===d.type)m[l]=void 0;else for(f=0;f<T;f++){if((d=m[f])&&g.key==d.key&&g.type===d.type){m[f]=void 0;break}d=null}Oa(e,g,d=d||kr,a,o,i,s,c,u),h=g.__e,(f=g.ref)&&d.ref!=f&&(b||(b=[]),d.ref&&b.push(d.ref,null,g),b.push(f,g.__c||h,g)),h!=null?(x==null&&(x=h),typeof g.type=="function"&&g.__k===d.__k?g.__d=c=Pi(g,c,e):c=Ai(e,g,d,m,h,c),typeof n.type=="function"&&(n.__d=c)):c&&d.__e==c&&c.parentNode!=e&&(c=dn(d))}for(n.__e=x,l=T;l--;)m[l]!=null&&(typeof n.type=="function"&&m[l].__e!=null&&m[l].__e==n.__d&&(n.__d=dn(r,l+1)),Di(m[l],m[l]));if(b)for(l=0;l<b.length;l++)Ni(b[l],b[++l],b[++l])}function Pi(e,t,n){for(var r,a=e.__k,o=0;a&&o<a.length;o++)(r=a[o])&&(r.__=e,t=typeof r.type=="function"?Pi(r,t,n):Ai(n,r,r,a,r.__e,t));return t}function Ai(e,t,n,r,a,o){var i,s,c;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(n==null||a!=o||a.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(a),i=null;else{for(s=o,c=0;(s=s.nextSibling)&&c<r.length;c+=2)if(s==a)break e;e.insertBefore(a,o),i=o}return i!==void 0?i:a.nextSibling}function Zd(e,t,n,r,a){var o;for(o in n)o==="children"||o==="key"||o in t||Mr(e,o,null,n[o],r);for(o in t)a&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||Mr(e,o,t[o],n[o],r)}function Ti(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Qd.test(t)?n:n+"px"}function Mr(e,t,n,r,a){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Ti(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Ti(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?wi:vi,o):e.removeEventListener(t,o?wi:vi,o);else if(t!=="dangerouslySetInnerHTML"){if(a)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function vi(e){this.l[e.type+!1](G.event?G.event(e):e)}function wi(e){this.l[e.type+!0](G.event?G.event(e):e)}function Oa(e,t,n,r,a,o,i,s,c){var u,l,f,d,g,h,x,b,m,T,w,C,F,_=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,s=t.__e=n.__e,t.__h=null,o=[s]),(u=G.__b)&&u(t);try{e:if(typeof _=="function"){if(b=t.props,m=(u=_.contextType)&&r[u.__c],T=u?m?m.props.value:u.__:r,n.__c?x=(l=t.__c=n.__c).__=l.__E:("prototype"in _&&_.prototype.render?t.__c=l=new _(b,T):(t.__c=l=new Lr(b,T),l.constructor=_,l.render=tg),m&&m.sub(l),l.props=b,l.state||(l.state={}),l.context=T,l.__n=r,f=l.__d=!0,l.__h=[]),l.__s==null&&(l.__s=l.state),_.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=Pt({},l.__s)),Pt(l.__s,_.getDerivedStateFromProps(b,l.__s))),d=l.props,g=l.state,f)_.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(_.getDerivedStateFromProps==null&&b!==d&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(b,T),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(b,l.__s,T)===!1||t.__v===n.__v){l.props=b,l.state=l.__s,t.__v!==n.__v&&(l.__d=!1),l.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(z){z&&(z.__=t)}),l.__h.length&&i.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(b,l.__s,T),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(d,g,h)})}if(l.context=T,l.props=b,l.__v=t,l.__P=e,w=G.__r,C=0,"prototype"in _&&_.prototype.render)l.state=l.__s,l.__d=!1,w&&w(t),u=l.render(l.props,l.state,l.context);else do l.__d=!1,w&&w(t),u=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++C<25);l.state=l.__s,l.getChildContext!=null&&(r=Pt(Pt({},r),l.getChildContext())),f||l.getSnapshotBeforeUpdate==null||(h=l.getSnapshotBeforeUpdate(d,g)),F=u!=null&&u.type===Ze&&u.key==null?u.props.children:u,Mi(e,Array.isArray(F)?F:[F],t,n,r,a,o,i,s,c),l.base=t.__e,t.__h=null,l.__h.length&&i.push(l),x&&(l.__E=l.__=null),l.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=eg(n.__e,t,n,r,a,o,i,c);(u=G.diffed)&&u(t)}catch(z){t.__v=null,(c||o!=null)&&(t.__e=s,t.__h=!!c,o[o.indexOf(s)]=null),G.__e(z,t,n)}}function Ri(e,t){G.__c&&G.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){G.__e(r,n.__v)}})}function eg(e,t,n,r,a,o,i,s){var c,u,l,f=n.props,d=t.props,g=t.type,h=0;if(g==="svg"&&(a=!0),o!=null){for(;h<o.length;h++)if((c=o[h])&&"setAttribute"in c==!!g&&(g?c.localName===g:c.nodeType===3)){e=c,o[h]=null;break}}if(e==null){if(g===null)return document.createTextNode(d);e=a?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,d.is&&d),o=null,s=!1}if(g===null)f===d||s&&e.data===d||(e.data=d);else{if(o=o&&Pr.call(e.childNodes),u=(f=n.props||kr).dangerouslySetInnerHTML,l=d.dangerouslySetInnerHTML,!s){if(o!=null)for(f={},h=0;h<e.attributes.length;h++)f[e.attributes[h].name]=e.attributes[h].value;(l||u)&&(l&&(u&&l.__html==u.__html||l.__html===e.innerHTML)||(e.innerHTML=l&&l.__html||""))}if(Zd(e,d,f,a,s),l)t.__k=[];else if(h=t.props.children,Mi(e,Array.isArray(h)?h:[h],t,n,r,a&&g!=="foreignObject",o,i,o?o[0]:n.__k&&dn(n,0),s),o!=null)for(h=o.length;h--;)o[h]!=null&&Li(o[h]);s||("value"in d&&(h=d.value)!==void 0&&(h!==e.value||g==="progress"&&!h||g==="option"&&h!==f.value)&&Mr(e,"value",h,f.value,!1),"checked"in d&&(h=d.checked)!==void 0&&h!==e.checked&&Mr(e,"checked",h,f.checked,!1))}return e}function Ni(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){G.__e(r,n)}}function Di(e,t,n){var r,a;if(G.unmount&&G.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Ni(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){G.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&Di(r[a],t,typeof e.type!="function");n||e.__e==null||Li(e.__e),e.__=e.__e=e.__d=void 0}function tg(e,t,n){return this.constructor(e,n)}function Fa(e,t,n){var r,a,o;G.__&&G.__(e,t),a=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],Oa(t,e=(!r&&n||t).__k=ki(Ze,null,[e]),a||kr,kr,t.ownerSVGElement!==void 0,!r&&n?[n]:a?null:t.firstChild?Pr.call(t.childNodes):null,o,!r&&n?n:a?a.__e:t.firstChild,r),Ri(o,e)}function Ha(e,t){var n={__c:t="__cC"+Ei++,__:e,Consumer:function(r,a){return r.children(a)},Provider:function(r){var a,o;return this.getChildContext||(a=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&a.some(Ia)},this.sub=function(i){a.push(i);var s=i.componentWillUnmount;i.componentWillUnmount=function(){a.splice(a.indexOf(i),1),s&&s.call(i)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Pr=Ci.slice,G={__e:function(e,t,n,r){for(var a,o,i;t=t.__;)if((a=t.__c)&&!a.__)try{if((o=a.constructor)&&o.getDerivedStateFromError!=null&&(a.setState(o.getDerivedStateFromError(e)),i=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,r||{}),i=a.__d),i)return a.__E=a}catch(s){e=s}throw e}},Si=0,Xd=function(e){return e!=null&&e.constructor===void 0},Lr.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Pt({},this.state),typeof e=="function"&&(e=e(Pt({},n),this.props)),e&&Pt(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Ia(this))},Lr.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ia(this))},Lr.prototype.render=Ze,jn=[],_r.__r=0,Ei=0;var Wn,Se,Ua,Ii,zn=0,ji=[],Ar=[],Oi=G.__b,Fi=G.__r,Hi=G.diffed,Ui=G.__c,$i=G.unmount;function Nr(e,t){G.__h&&G.__h(Se,e,zn||t),zn=0;var n=Se.__H||(Se.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:Ar}),n.__[e]}function J(e){return zn=1,ng(qi,e)}function ng(e,t,n){var r=Nr(Wn++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):qi(void 0,t),function(o){var i=r.__N?r.__N[0]:r.__[0],s=r.t(i,o);i!==s&&(r.__N=[s,r.__[1]],r.__c.setState({}))}],r.__c=Se,!Se.u)){Se.u=!0;var a=Se.shouldComponentUpdate;Se.shouldComponentUpdate=function(o,i,s){if(!r.__c.__H)return!0;var c=r.__c.__H.__.filter(function(l){return l.__c});if(c.every(function(l){return!l.__N}))return!a||a.call(this,o,i,s);var u=!1;return c.forEach(function(l){if(l.__N){var f=l.__[0];l.__=l.__N,l.__N=void 0,f!==l.__[0]&&(u=!0)}}),!!u&&(!a||a.call(this,o,i,s))}}return r.__N||r.__}function ce(e,t){var n=Nr(Wn++,3);!G.__s&&Wi(n.__H,t)&&(n.__=e,n.i=t,Se.__H.__h.push(n))}function gn(e){return zn=5,zi(function(){return{current:e}},[])}function zi(e,t){var n=Nr(Wn++,7);return Wi(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function qn(e,t){return zn=8,zi(function(){return e},t)}function Ba(e){var t=Se.context[e.__c],n=Nr(Wn++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(Se)),t.props.value):e.__}function rg(){for(var e;e=ji.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Rr),e.__H.__h.forEach($a),e.__H.__h=[]}catch(t){e.__H.__h=[],G.__e(t,e.__v)}}G.__b=function(e){typeof e.type!="function"||e.o||e.type===Ze?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),Se=null,Oi&&Oi(e)},G.__r=function(e){Fi&&Fi(e),Wn=0;var t=(Se=e.__c).__H;t&&(Ua===Se?(t.__h=[],Se.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Ar,n.__N=n.i=void 0})):(t.__h.forEach(Rr),t.__h.forEach($a),t.__h=[])),Ua=Se},G.diffed=function(e){Hi&&Hi(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ji.push(t)!==1&&Ii===G.requestAnimationFrame||((Ii=G.requestAnimationFrame)||ag)(rg)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Ar&&(n.__=n.__V),n.i=void 0,n.__V=Ar})),Ua=Se=null},G.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Rr),n.__h=n.__h.filter(function(r){return!r.__||$a(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],G.__e(r,n.__v)}}),Ui&&Ui(e,t)},G.unmount=function(e){$i&&$i(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Rr(r)}catch(a){t=a}}),n.__H=void 0,t&&G.__e(t,n.__v))};var Bi=typeof requestAnimationFrame=="function";function ag(e){var t,n=function(){clearTimeout(r),Bi&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Bi&&(t=requestAnimationFrame(n))}function Rr(e){var t=Se,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),Se=t}function $a(e){var t=Se;e.__c=e.__(),Se=t}function Wi(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function qi(e,t){return typeof t=="function"?t(e):t}var x0=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var sg=class extends Error{constructor(){super("Throttled function aborted"),this.name="AbortError"}};function Dr({limit:e,interval:t,strict:n}){if(!Number.isFinite(e))throw new TypeError("Expected `limit` to be a finite number");if(!Number.isFinite(t))throw new TypeError("Expected `interval` to be a finite number");let r=new Map,a=0,o=0;function i(){let l=Date.now();return l-a>t?(o=1,a=l,0):(o<e?o++:(a+=t,o=1),a-l)}let s=[];function c(){let l=Date.now();if(s.length<e)return s.push(l),0;let f=s.shift()+t;return l>=f?(s.push(l),0):(s.push(f),f-l)}let u=n?c:i;return l=>{let f=function(...d){if(!f.isEnabled)return(async()=>l.apply(this,d))();let g;return new Promise((h,x)=>{g=setTimeout(()=>{h(l.apply(this,d)),r.delete(g)},u()),r.set(g,x)})};return f.abort=()=>{for(let d of r.keys())clearTimeout(d),r.get(d)(new sg);r.clear(),s.splice(0,s.length)},f.isEnabled=!0,f}}var Vn;function Xa(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function el(e,t=","){return e.map(Xa).join(t)}var Qa=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function pn(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function tl(e,t="@media "){return t+Te(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function Te(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function ig(e){return e}function Za(){}var ke={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function nl(e){var t;return((t=e.match(/[-=:;]/g))==null?void 0:t.length)||0}function Ka(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?+RegExp.$1/(RegExp.$2?15:1)/10:0,15)<<22|Math.min(nl(e),15)<<18}var lg=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function eo({n:e,i:t,v:n=[]},r,a,o){for(let s of(e&&(e=Xa({n:e,i:t,v:n})),o=[...Te(o)],n)){let c=r.theme("screens",s);for(let u of Te(c&&tl(c)||r.v(s))){var i;o.push(u),a|=c?67108864|Ka(u):s=="dark"?1073741824:u[0]=="@"?Ka(u):(i=u,1<<~(/:([a-z-]+)/.test(i)&&~lg.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:a,r:o,i:t}}var to=new Map;function Ga(e){if(e.d){let t=[],n=ja(e.r.reduce((r,a)=>a[0]=="@"?(t.push(a),r):a?ja(r,o=>ja(a,i=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(s){let c=o.indexOf(s[1]);return~c?o.slice(0,c)+s[0]+o.slice(c+s[1].length):za(o,i)}return za(i,o)})):r,"&"),r=>za(r,e.n?"."+Qa(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,a)=>a+"{"+r+"}",e.d)}}function ja(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,a)=>t(r)+a)}function za(e,t){return e.replace(/&/g,t)}var cg=new Intl.Collator("en",{numeric:!0});function rl(e,t){for(var n=0,r=e.length;n<r;){let a=r+n>>1;0>=al(e[a],t)?n=a+1:r=a}return r}function al(e,t){let n=e.p&ke.o;return n==(t.p&ke.o)&&(n==ke.b||n==ke.o)?0:e.p-t.p||e.o-t.o||cg.compare(e.n,t.n)}function Wa(e,t){return Math.round(parseInt(e,16)*t)}function ol(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,a=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",a);if(e[0]=="#"&&(e.length==4||e.length==7)){let o=(e.length-1)/3,i=[17,1,.062272][o-1];return`rgba(${[Wa(e.substr(1,o),i),Wa(e.substr(1+o,o),i),Wa(e.substr(1+2*o,o),i),a]})`}return a=="1"?e:a=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${a})`)}function no(e,t,n,r,a=[]){return function o(i,{n:s,p:c,r:u=[],i:l},f){let d=[],g="",h=0,x=0;for(let T in i||{}){var b,m;let w=i[T];if(T[0]=="@"){if(!w)continue;if(T[1]=="a"){d.push(...ao(s,c,Kn(""+w),f,c,u,l,!0));continue}if(T[1]=="l"){for(let C of Te(w))d.push(...o(C,{n:s,p:(b=ke[T[7]],c&~ke.o|b),r:u,i:l},f));continue}if(T[1]=="i"){d.push(...Te(w).map(C=>({p:-1,o:0,r:[],d:T+" "+C})));continue}if(T[1]=="k"){d.push({p:ke.d,o:0,r:[T],d:o(w,{p:ke.d},f).map(Ga).join("")});continue}if(T[1]=="f"){d.push(...Te(w).map(C=>({p:ke.d,o:0,r:[T],d:o(C,{p:ke.d},f).map(Ga).join("")})));continue}}if(typeof w!="object"||Array.isArray(w))T=="label"&&w?s=w+pn(JSON.stringify([c,l,i])):(w||w===0)&&(T=T.replace(/[A-Z]/g,C=>"-"+C.toLowerCase()),x+=1,h=Math.max(h,(m=T)[0]=="-"?0:nl(m)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(m)?+!!RegExp.$1||-!!RegExp.$2:0)+1),g+=(g?";":"")+Te(w).map(C=>f.s(T,sl(""+C,f.theme)+(l?" !important":""))).join(";"));else if(T[0]=="@"||T.includes("&")){let C=c;T[0]=="@"&&(T=T.replace(/\bscreen\(([^)]+)\)/g,(F,_)=>{let z=f.theme("screens",_);return z?(C|=67108864,tl(z,"")):F}),C|=Ka(T)),d.push(...o(w,{n:s,p:C,r:[...u,T],i:l},f))}else d.push(...o(w,{p:c,r:[...u,T]},f))}return d.unshift({n:s,p:c,o:Math.max(0,15-x)+1.5*Math.min(h||15,15),r:u,d:g}),d.sort(al)}(e,eo(t,n,r,a),n)}function sl(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,a,o,i)=>{let s=t(a,i);return typeof s=="function"&&/color|fill|stroke/i.test(a)?ol(s):""+s})}function ro(e,t){let n,r=[];for(let a of e)a.d&&a.n?n?.p==a.p&&""+n.r==""+a.r?(n.c=[n.c,a.c].filter(Boolean).join(" "),n.d=n.d+";"+a.d):r.push(n={...a,n:a.n&&t}):r.push({...a,n:a.n&&t});return r}function Ir(e,t,n=ke.u,r,a){let o=[];for(let i of e)for(let s of function(c,u,l,f,d){var g;c={...c,i:c.i||d};let h=function(x,b){let m=to.get(x.n);return m?m(x,b):b.r(x.n,x.v[0]=="dark")}(c,u);return h?typeof h=="string"?({r:f,p:l}=eo(c,u,l,f),ro(Ir(Kn(h),u,l,f,c.i),c.n)):Array.isArray(h)?h.map(x=>{var b,m;return{o:0,...x,r:[...Te(f),...Te(x.r)],p:(b=l,m=(g=x.p)!=null?g:l,b&~ke.o|m)}}):no(h,c,u,l,f):[{c:Xa(c),p:0,o:0,r:[]}]}(i,t,n,r,a))o.splice(rl(o,s),0,s);return o}function ao(e,t,n,r,a,o,i,s){return ro((s?n.flatMap(c=>Ir([c],r,a,o,i)):Ir(n,r,a,o,i)).map(c=>c.p&ke.o&&(c.n||t==ke.b)?{...c,p:c.p&~ke.o|t,o:0}:c),e)}function ug(e,t,n,r){var a;return a=(o,i)=>{let{n:s,p:c,r:u,i:l}=eo(o,i,t);return n&&ao(s,t,n,i,c,u,l,r)},to.set(e,a),e}function qa(e,t){if(e[e.length-1]!="("){let n=[],r=!1,a=!1,o="";for(let i of e)if(!(i=="("||/[~@]$/.test(i))){if(i[0]=="!"&&(i=i.slice(1),r=!r),i.endsWith(":")){n[i=="dark:"?"unshift":"push"](i.slice(0,-1));continue}i[0]=="-"&&(i=i.slice(1),a=!a),i.endsWith("-")&&(i=i.slice(0,-1)),i&&i!="&"&&(o+=(o&&"-")+i)}o&&(a&&(o="-"+o),t[0].push({n:o,v:n.filter(fg),i:r}))}}function fg(e,t,n){return n.indexOf(e)==t}var Vi=new Map;function Kn(e){let t=Vi.get(e);if(!t){let n=[],r=[[]],a=0,o=0,i=null,s=0,c=(u,l=0)=>{a!=s&&(n.push(e.slice(a,s+l)),u&&qa(n,r)),a=s+1};for(;s<e.length;s++){let u=e[s];if(o)e[s-1]!="\\"&&(o+=+(u=="[")||-(u=="]"));else if(u=="[")o+=1;else if(i)e[s-1]!="\\"&&i.test(e.slice(s))&&(i=null,a=s+RegExp.lastMatch.length);else if(u=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))i=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")c(),n.push(u);else if(u==":")e[s+1]!=":"&&c(!1,1);else if(/[\s,)]/.test(u)){c(!0);let l=n.lastIndexOf("(");if(u==")"){let f=n[l-1];if(/[~@]$/.test(f)){let d=r.shift();n.length=l,qa([...n,"#"],r);let{v:g}=r[0].pop();for(let h of d)h.v.splice(+(h.v[0]=="dark")-+(g[0]=="dark"),g.length);qa([...n,ug(f.length>1?f.slice(0,-1)+pn(JSON.stringify([f,d])):f+"("+el(d)+")",ke.a,d,/@$/.test(f))],r)}l=n.lastIndexOf("(",l-1)}n.length=l+1}else/[~@]/.test(u)&&e[s+1]=="("&&r.unshift([])}c(!0),Vi.set(e,t=r[0])}return t}function il(e,t,n){return t.reduce((r,a,o)=>r+n(a)+e[o+1],e[0])}function ll(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?il(e,t,n=>Va(n).trim()):t.filter(Boolean).reduce((n,r)=>n+Va(r),e?Va(e):"")}function Va(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=ll(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var N0=cl("@"),D0=cl("~");function cl(e){return new Proxy(function(n,...r){return t("",n,r)},{get:(n,r)=>r in n?n[r]:function(a,...o){return t(r,a,o)}});function t(n,r,a){return el(Kn(n+e+"("+ll(r,a)+")"))}}function Ja(e,t){return Array.isArray(e)?Ki(il(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?Ki(e):[e]}var dg=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function Ki(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],a=[];for(;t=dg.exec(e);)t[4]&&(n.shift(),a.shift()),t[3]?(a.unshift(t[3]),n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))),n[0][t[1]]=t[2]);return r}function ul(e,...t){var n,r;let a=Ja(e,t),o=(((n=a.find(i=>i.label))==null?void 0:n.label)||"css")+pn(JSON.stringify(a));return r=(i,s)=>ro(a.flatMap(c=>no(c,i,s,ke.o)),o),to.set(o,r),o}var I0=new Proxy(function(e,t){return Gi("animation",e,t)},{get:(e,t)=>t in e?e[t]:function(n,r){return Gi(t,n,r)}});function Gi(e,t,n){return{toString:()=>ul({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}var O0=Symbol();function Gn({presets:e=[],...t}){let n={preflight:t.preflight!==!1&&[],darkMode:void 0,darkColor:void 0,theme:{},variants:Te(t.variants),rules:Te(t.rules),ignorelist:Te(t.ignorelist),hash:t.hash,stringify:t.stringify||gg};for(let r of Te([...e,{darkMode:t.darkMode,darkColor:t.darkColor,preflight:t.preflight!==!1&&Te(t.preflight),theme:t.theme,hash:t.hash,stringify:t.stringify}])){let{preflight:a,darkMode:o=n.darkMode,darkColor:i=n.darkColor,theme:s,variants:c,rules:u,ignorelist:l,hash:f=n.hash,stringify:d=n.stringify}=typeof r=="function"?r(n):r;n={preflight:n.preflight!==!1&&a!==!1&&[...n.preflight,...Te(a)],darkMode:o,darkColor:i,theme:{...n.theme,...s,extend:{...n.theme.extend,...s?.extend}},variants:[...n.variants,...Te(c)],rules:[...n.rules,...Te(u)],ignorelist:[...n.ignorelist,...Te(l)],hash:f,stringify:d}}return n}function gg(e,t){return e+":"+t}function Ji(e,t){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?(n,r)=>({[e]:t?t(n,r):Yi(n,1)}):n=>e||{[n[1]]:Yi(n,2)}}function Yi(e,t,n=e.slice(t).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${n} * -1)`:n}function Xi(e,t,n,r,a,o){for(let i of t){let s=n.get(i);s||n.set(i,s=r(i));let c=s(e,a,o);if(c)return c}}function pg(e){var t;return Ya(e[0],typeof(t=e[1])=="function"?t:()=>t)}function mg(e){var t,n;return Array.isArray(e)?Ya(e[0],Ji(e[1],e[2])):Ya(e,Ji(t,n))}function Ya(e,t){return fl(e,(n,r,a,o)=>{let i=r.exec(n);if(i)return i.$$=n.slice(i[0].length),i.dark=o,t(i,a)})}function fl(e,t){let n=Te(e).map(hg);return(r,a,o)=>{for(let i of n){let s=t(r,i,a,o);if(s)return s}}}function hg(e){return typeof e=="string"?RegExp("^"+e+(e.includes("$")||e.slice(-1)=="-"?"":"$")):e}function Qi(e,t){return e.replace(/--(tw(?:-[\w-]+)?)\b/g,(n,r)=>"--"+t(r).replace("#",""))}function bg(e,t){let n=Gn(e),r=function({theme:c,darkMode:u,darkColor:l,variants:f,rules:d,hash:g,stringify:h,ignorelist:x}){let b=new Map,m=new Map,T=new Map,w=new Map,C=fl(x,(_,z)=>z.test(_));f.push(["dark",Array.isArray(u)||u=="class"?`${Te(u)[1]||".dark"} &`:typeof u=="string"&&u!="media"?u:"@media (prefers-color-scheme:dark)"]);let F=typeof g=="function"?_=>g(_,pn):g?pn:ig;return{theme:function({extend:_={},...z}){let ue={},E={get colors(){return D("colors")},theme:D,negative:()=>({}),breakpoints(A){let W={};for(let O in A)typeof A[O]=="string"&&(W["screen-"+O]=A[O]);return W}};return D;function D(A,W,O,Y){if(A){var I;if({1:A,2:Y}=/^(\S+?)(?:\s*\/\s*([^/]+))?$/.exec(A)||[,A],/[.[]/.test(A)){let M=[];A.replace(/\[([^\]]+)\]|([^.[]+)/g,(H,v,N=v)=>M.push(N)),A=M.shift(),O=W,W=M.join("-")}let fe=ue[A]||Object.assign(Object.assign(ue[A]={},$(z,A)),$(_,A));if(W==null)return fe;let S=(I=fe[W||"DEFAULT"])!=null?I:O;return Y?ol(S,{opacityValue:sl(Y,D)}):S}let oe={};for(let fe of[...Object.keys(z),...Object.keys(_)])oe[fe]=D(fe);return oe}function $(A,W){let O=A[W];return typeof O=="function"&&(O=O(E)),O&&/color|fill|stroke/i.test(W)?function Y(I,oe=[]){let fe={};for(let S in I){let M=I[S],H=[...oe,S];fe[H.join("-")]=M,S=="DEFAULT"&&(H=oe,fe[oe.join("-")]=M),typeof M=="object"&&Object.assign(fe,Y(M,H))}return fe}(O):O}}(c),e:Qa,h:F,s(_,z){return h(Qi(_,F),Qi(z,F),this)},d(_,z,ue){return l?.(_,z,this,ue)},v(_){return b.has(_)||b.set(_,Xi(_,f,m,pg,this)||"&:"+_),b.get(_)},r(_,z){let ue=JSON.stringify([_,z]);return T.has(ue)||T.set(ue,!C(_,this)&&Xi(_,d,w,mg,this,z)),T.get(ue)}}}(n),a=new Map,o=[],i=new Set;function s(c){let u=c.n&&r.h(c.n),l=Ga(u?{...c,n:u}:c);if(l&&!i.has(l)){i.add(l);let f=rl(o,c);t.insert(l,f,c),o.splice(f,0,c)}return u}return t.resume(c=>a.set(c,c),(c,u)=>{t.insert(c,o.length,u),o.push(u),i.add(c)}),Object.defineProperties(function(c){if(!a.size)for(let l of Te(n.preflight))typeof l=="function"&&(l=l(r)),l&&(typeof l=="string"?ao("",ke.b,Kn(l),r,ke.b,[],!1,!0):no(l,{},r,ke.b)).forEach(s);c=""+c;let u=a.get(c);if(!u){let l=new Set;for(let f of Ir(Kn(c),r))l.add(f.c).add(s(f));u=[...l].filter(Boolean).join(" "),a.set(c,u).set(u,u)}return u},Object.getOwnPropertyDescriptors({get target(){return t.target},theme:r.theme,config:n,snapshot(){let c=t.snapshot(),u=new Set(i),l=new Map(a),f=[...o];return()=>{c(),i=u,a=l,o=f}},clear(){t.clear(),i=new Set,a=new Map,o=[]},destroy(){this.clear(),t.destroy()}}))}function yg(e,t){return e!=t&&""+e.split(" ").sort()!=""+t.split(" ").sort()}function xg(e=oo,t=document.documentElement){if(!t)return e;let n=new MutationObserver(a);n.observe(t,{attributeFilter:["class"],subtree:!0,childList:!0}),o(t),a([{target:t,type:""}]);let{destroy:r}=e;return e.destroy=()=>{n.disconnect(),r.call(e)},e;function a(i){for(let{type:s,target:c}of i)if(s[0]=="a")o(c);else for(let u of c.querySelectorAll("[class]"))o(u);n.takeRecords()}function o(i){let s,c=i.getAttribute("class");c&&yg(c,s=e(c))&&i.setAttribute("class",s)}}function dl(e){let t=document.querySelector(e||"style[data-twind]");return t&&t.tagName=="STYLE"||((t=document.createElement("style")).dataset.twind="",document.head.prepend(t)),t}function Tg(e){let t=e?.cssRules?e:(e&&typeof e!="string"?e:dl(e)).sheet;return{target:t,snapshot(){let n=Array.from(t.cssRules,r=>r.cssText);return()=>{this.clear(),n.forEach(this.insert)}},clear(){for(let n=t.cssRules.length;n--;)t.deleteRule(n)},destroy(){var n;(n=t.ownerNode)==null||n.remove()},insert(n,r){try{t.insertRule(n,r)}catch{t.insertRule(":root{}",r),/:-[mwo]/.test(n)}},resume:Za}}function vg(e){let t=e&&typeof e!="string"?e:dl(e);return{target:t,snapshot(){let n=Array.from(t.childNodes,r=>r.textContent);return()=>{this.clear(),n.forEach(this.insert)}},clear(){t.textContent=""},destroy(){t.remove()},insert(n,r){t.insertBefore(document.createTextNode(n),t.childNodes[r]||null)},resume:Za}}function gl(e,t){let n=e?vg():Tg();return t||(n.resume=Sg),n}function wg(e){return(e.ownerNode||e).textContent||(e.cssRules?Array.from(e.cssRules,t=>t.cssText):Te(e)).join("")}function Sg(e,t){let n=wg(this.target),r=/\/\*!([\da-z]+),([\da-z]+)(?:,(.+?))?\*\//g;if(r.test(n)){var a;let o;for(let i of(r.lastIndex=0,this.clear(),document.querySelectorAll("[class]")))e(i.getAttribute("class"));for(;a=r.exec(n),o&&t(n.slice(o.index+o[0].length,a?.index),{p:parseInt(o[1],36),o:parseInt(o[2],36)/2,n:o[3]}),o=a;);}}var oo=new Proxy(Za,{apply:(e,t,n)=>Vn(n[0]),get(e,t){let n=Vn[t];return typeof n=="function"?function(){return n.apply(Vn,arguments)}:n}});function pl(e={},t=gl,n){return Vn?.destroy(),Vn=xg(bg(e,typeof t=="function"?t():t),n)}function so(e,t=!0){var n;let r=Gn(e);return pl({...r,hash:(n=r.hash)!=null?n:t},()=>gl(!t))}var F0=function e(t){return new Proxy(function(n,...r){return Zi(t,"",n,r)},{get:(n,r)=>r==="bind"?e:r in n?n[r]:function(a,...o){return Zi(t,r,a,o)}})}();function Zi(e,t,n,r){return{toString(){let a=Ja(n,r),o=Qa(t+pn(JSON.stringify([t,a])));return(typeof e=="function"?e:oo)(ul({[`@keyframes ${o}`]:Ja(n,r)})),o}}}var Eg=new Map([["align-self","-ms-grid-row-align"],["color-adjust","-webkit-print-color-adjust"],["column-gap","grid-column-gap"],["forced-color-adjust","-ms-high-contrast-adjust"],["gap","grid-gap"],["grid-template-columns","-ms-grid-columns"],["grid-template-rows","-ms-grid-rows"],["justify-self","-ms-grid-column-align"],["margin-inline-end","-webkit-margin-end"],["margin-inline-start","-webkit-margin-start"],["mask-border","-webkit-mask-box-image"],["mask-border-outset","-webkit-mask-box-image-outset"],["mask-border-slice","-webkit-mask-box-image-slice"],["mask-border-source","-webkit-mask-box-image-source"],["mask-border-repeat","-webkit-mask-box-image-repeat"],["mask-border-width","-webkit-mask-box-image-width"],["overflow-wrap","word-wrap"],["padding-inline-end","-webkit-padding-end"],["padding-inline-start","-webkit-padding-start"],["print-color-adjust","color-adjust"],["row-gap","grid-row-gap"],["scroll-margin-bottom","scroll-snap-margin-bottom"],["scroll-margin-left","scroll-snap-margin-left"],["scroll-margin-right","scroll-snap-margin-right"],["scroll-margin-top","scroll-snap-margin-top"],["scroll-margin","scroll-snap-margin"],["text-combine-upright","-ms-text-combine-horizontal"]]);function ml(e){return Eg.get(e)}function hl(e){var t=/^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(e);return t?t[1]?1:t[2]?2:t[3]?3:5:0}function bl(e,t){var n=/^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(e);return n?n[1]?/^sti/i.test(t)?1:0:n[2]?/^pat/i.test(t)?1:0:n[3]?/^image-/i.test(t)?1:0:n[4]?t[3]==="-"?2:0:/^(?:inline-)?grid$/i.test(t)?4:0:0}var Cg=[["-webkit-",1],["-moz-",2],["-ms-",4]];function Or(){return({stringify:e})=>({stringify(t,n,r){let a="",o=ml(t);o&&(a+=e(o,n,r)+";");let i=hl(t),s=bl(t,n);for(let c of Cg)i&c[1]&&(a+=e(c[0]+t,n,r)+";"),s&c[1]&&(a+=e(t,c[0]+n,r)+";");return a+e(t,n,r)}})}var io;function yo(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function Ll(e,t=","){return e.map(yo).join(t)}var kl=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function Fr(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function Hr(e,t="@media "){return t+et(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function et(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function Lg(){}var Fe={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function _l(e){return e.match(/[-=:;]/g)?.length||0}function po(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(_l(e),15)<<18}var kg=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function xo({n:e,i:t,v:n=[]},r,a,o){e&&(e=yo({n:e,i:t,v:n})),o=[...et(o)];for(let s of n){let c=r.theme("screens",s);for(let u of et(c&&Hr(c)||r.v(s))){var i;o.push(u),a|=c?67108864|po(u):s=="dark"?1073741824:u[0]=="@"?po(u):(i=u,1<<~(/:([a-z-]+)/.test(i)&&~kg.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:a,r:o,i:t}}var To=new Map;function yl(e){if(e.d){let t=[],n=lo(e.r.reduce((r,a)=>a[0]=="@"?(t.push(a),r):a?lo(r,o=>lo(a,i=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(s){let c=o.indexOf(s[1]);return~c?o.slice(0,c)+s[0]+o.slice(c+s[1].length):co(o,i)}return co(i,o)})):r,"&"),r=>co(r,e.n?"."+kl(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,a)=>a+"{"+r+"}",e.d)}}function lo(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,a)=>t(r)+a)}function co(e,t){return e.replace(/&/g,t)}var xl=new Intl.Collator("en",{numeric:!0});function _g(e,t){for(var n=0,r=e.length;n<r;){let a=r+n>>1;0>=Ml(e[a],t)?n=a+1:r=a}return r}function Ml(e,t){let n=e.p&Fe.o;return n==(t.p&Fe.o)&&(n==Fe.b||n==Fe.o)?0:e.p-t.p||e.o-t.o||xl.compare(Tl(e.n),Tl(t.n))||xl.compare(vl(e.n),vl(t.n))}function Tl(e){return(e||"").split(/:/).pop().split("/").pop()||"\0"}function vl(e){return(e||"").replace(/\W/g,t=>String.fromCharCode(127+t.charCodeAt(0)))+"\0"}function uo(e,t){return Math.round(parseInt(e,16)*t)}function At(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,a=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",a);if(e[0]=="#"&&(e.length==4||e.length==7)){let o=(e.length-1)/3,i=[17,1,.062272][o-1];return`rgba(${[uo(e.substr(1,o),i),uo(e.substr(1+o,o),i),uo(e.substr(1+2*o,o),i),a]})`}return a=="1"?e:a=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${a})`)}function Pl(e,t,n,r,a=[]){return function o(i,{n:s,p:c,r:u=[],i:l},f){let d=[],g="",h=0,x=0;for(let T in i||{}){var b,m;let w=i[T];if(T[0]=="@"){if(!w)continue;if(T[1]=="a"){d.push(...Rl(s,c,wo(""+w),f,c,u,l,!0));continue}if(T[1]=="l"){for(let C of et(w))d.push(...o(C,{n:s,p:(b=Fe[T[7]],c&~Fe.o|b),r:u,i:l},f));continue}if(T[1]=="i"){d.push(...et(w).map(C=>({p:-1,o:0,r:[],d:T+" "+C})));continue}if(T[1]=="k"){d.push({p:Fe.d,o:0,r:[T],d:o(w,{p:Fe.d},f).map(yl).join("")});continue}if(T[1]=="f"){d.push(...et(w).map(C=>({p:Fe.d,o:0,r:[T],d:o(C,{p:Fe.d},f).map(yl).join("")})));continue}}if(typeof w!="object"||Array.isArray(w))T=="label"&&w?s=w+Fr(JSON.stringify([c,l,i])):(w||w===0)&&(T=T.replace(/[A-Z]/g,C=>"-"+C.toLowerCase()),x+=1,h=Math.max(h,(m=T)[0]=="-"?0:_l(m)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(m)?+!!RegExp.$1||-!!RegExp.$2:0)+1),g+=(g?";":"")+et(w).map(C=>f.s(T,Al(""+C,f.theme)+(l?" !important":""))).join(";"));else if(T[0]=="@"||T.includes("&")){let C=c;T[0]=="@"&&(T=T.replace(/\bscreen\(([^)]+)\)/g,(F,_)=>{let z=f.theme("screens",_);return z?(C|=67108864,Hr(z,"")):F}),C|=po(T)),d.push(...o(w,{n:s,p:C,r:[...u,T],i:l},f))}else d.push(...o(w,{p:c,r:[...u,T]},f))}return d.unshift({n:s,p:c,o:Math.max(0,15-x)+1.5*Math.min(h||15,15),r:u,d:g}),d.sort(Ml)}(e,xo(t,n,r,a),n)}function Al(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,a,o,i="")=>{let s=t(a,i);return typeof s=="function"&&/color|fill|stroke/i.test(a)?At(s):""+et(s).filter(c=>Object(c)!==c)})}function vo(e,t){let n,r=[];for(let a of e)a.d&&a.n?n?.p==a.p&&""+n.r==""+a.r?(n.c=[n.c,a.c].filter(Boolean).join(" "),n.d=n.d+";"+a.d):r.push(n={...a,n:a.n&&t}):r.push({...a,n:a.n&&t});return r}function mo(e,t,n=Fe.u,r,a){let o=[];for(let i of e)for(let s of function(c,u,l,f,d){c={...c,i:c.i||d};let g=function(h,x){let b=To.get(h.n);return b?b(h,x):x.r(h.n,h.v[0]=="dark")}(c,u);return g?typeof g=="string"?({r:f,p:l}=xo(c,u,l,f),vo(mo(wo(g),u,l,f,c.i),c.n)):Array.isArray(g)?g.map(h=>{var x,b;return{o:0,...h,r:[...et(f),...et(h.r)],p:(x=l,b=h.p??l,x&~Fe.o|b)}}):Pl(g,c,u,l,f):[{c:yo(c),p:0,o:0,r:[]}]}(i,t,n,r,a))o.splice(_g(o,s),0,s);return o}function Rl(e,t,n,r,a,o,i,s){return vo((s?n.flatMap(c=>mo([c],r,a,o,i)):mo(n,r,a,o,i)).map(c=>c.p&Fe.o&&(c.n||t==Fe.b)?{...c,p:c.p&~Fe.o|t,o:0}:c),e)}function Mg(e,t,n,r){var a;return a=(o,i)=>{let{n:s,p:c,r:u,i:l}=xo(o,i,t);return n&&Rl(s,t,n,i,c,u,l,r)},To.set(e,a),e}function fo(e,t,n){if(e[e.length-1]!="("){let r=[],a=!1,o=!1,i="";for(let s of e)if(!(s=="("||/[~@]$/.test(s))){if(s[0]=="!"&&(s=s.slice(1),a=!a),s.endsWith(":")){r[s=="dark:"?"unshift":"push"](s.slice(0,-1));continue}s[0]=="-"&&(s=s.slice(1),o=!o),s.endsWith("-")&&(s=s.slice(0,-1)),s&&s!="&"&&(i+=(i&&"-")+s)}i&&(o&&(i="-"+i),t[0].push({n:i,v:r.filter(Pg),i:a}))}}function Pg(e,t,n){return n.indexOf(e)==t}var wl=new Map;function wo(e){let t=wl.get(e);if(!t){let n=[],r=[[]],a=0,o=0,i=null,s=0,c=(u,l=0)=>{a!=s&&(n.push(e.slice(a,s+l)),u&&fo(n,r)),a=s+1};for(;s<e.length;s++){let u=e[s];if(o)e[s-1]!="\\"&&(o+=+(u=="[")||-(u=="]"));else if(u=="[")o+=1;else if(i)e[s-1]!="\\"&&i.test(e.slice(s))&&(i=null,a=s+RegExp.lastMatch.length);else if(u=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))i=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")c(),n.push(u);else if(u==":")e[s+1]!=":"&&c(!1,1);else if(/[\s,)]/.test(u)){c(!0);let l=n.lastIndexOf("(");if(u==")"){let f=n[l-1];if(/[~@]$/.test(f)){let d=r.shift();n.length=l,fo([...n,"#"],r);let{v:g}=r[0].pop();for(let h of d)h.v.splice(+(h.v[0]=="dark")-+(g[0]=="dark"),g.length);fo([...n,Mg(f.length>1?f.slice(0,-1)+Fr(JSON.stringify([f,d])):f+"("+Ll(d)+")",Fe.a,d,/@$/.test(f))],r)}l=n.lastIndexOf("(",l-1)}n.length=l+1}else/[~@]/.test(u)&&e[s+1]=="("&&r.unshift([])}c(!0),wl.set(e,t=r[0])}return t}function Nl(e,t,n){return t.reduce((r,a,o)=>r+n(a)+e[o+1],e[0])}function Dl(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?Nl(e,t,n=>go(n).trim()):t.filter(Boolean).reduce((n,r)=>n+go(r),e?go(e):"")}function go(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=Dl(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var Q0=Il("@"),Z0=Il("~");function Il(e){return new Proxy(function(n,...r){return t("",n,r)},{get(n,r){return r in n?n[r]:function(a,...o){return t(r,a,o)}}});function t(n,r,a){return Ll(wo(n+e+"("+Dl(r,a)+")"))}}function ho(e,t){return Array.isArray(e)?Sl(Nl(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?Sl(e):[e]}var Ag=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function Sl(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],a=[];for(;t=Ag.exec(e);)t[4]&&(n.shift(),a.shift()),t[3]?(a.unshift(t[3]),n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))),n[0][t[1]]=t[2]);return r}function Ol(e,...t){var n;let r=ho(e,t),a=(r.find(o=>o.label)?.label||"css")+Fr(JSON.stringify(r));return n=(o,i)=>vo(r.flatMap(s=>Pl(s,o,i,Fe.o)),a),To.set(a,n),a}var eb=new Proxy(function(e,t){return El("animation",e,t)},{get(e,t){return t in e?e[t]:function(n,r){return El(t,n,r)}}});function El(e,t,n){return{toString(){return Ol({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}}function L(e,t,n){return[e,Rg(t,n)]}function Rg(e,t){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?(n,r)=>({[e]:t?t(n,r):bo(n,1)}):n=>e||{[n[1]]:bo(n,2)}}function bo(e,t,n=e.slice(t).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${n} * -1)`:n}function k(e,t,n,r){return[e,Ng(t,n,r)]}function Ng(e,t,n){let r=typeof t=="string"?(a,o)=>({[t]:n?n(a,o):a._}):t||(({1:a,_:o},i,s)=>({[a||s]:o}));return(a,o)=>{let i=Fl(e||a[1]),s=o.theme(i,a.$$)??Jn(a.$$,i,o);if(s!=null)return a._=bo(a,0,s),r(a,o,i)}}function Ae(e,t={},n){return[e,Dg(t,n)]}function Dg(e={},t){return(n,r)=>{let{section:a=Fl(n[0]).replace("-","")+"Color"}=e,[o,i]=Ig(n.$$);if(!o)return;let s=r.theme(a,o)||Jn(o,a,r);if(!s||typeof s=="object")return;let{opacityVariable:c=`--tw-${n[0].replace(/-$/,"")}-opacity`,opacitySection:u=a.replace("Color","Opacity"),property:l=a,selector:f}=e,d=r.theme(u,i||"DEFAULT")||i&&Jn(i,u,r),g=t||(({_:x})=>{let b=Yn(l,x);return f?{[f]:b}:b});n._={value:At(s,{opacityVariable:c||void 0,opacityValue:d||void 0}),color:x=>At(s,x),opacityVariable:c||void 0,opacityValue:d||void 0};let h=g(n,r);if(!n.dark){let x=r.d(a,o,s);x&&x!==s&&(n._={value:At(x,{opacityVariable:c||void 0,opacityValue:d||"1"}),color:b=>At(x,b),opacityVariable:c||void 0,opacityValue:d||void 0},h={"&":h,[r.v("dark")]:g(n,r)})}return h}}function Ig(e){return(e.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function Yn(e,t){let n={};return typeof t=="string"?n[e]=t:(t.opacityVariable&&t.value.includes(t.opacityVariable)&&(n[t.opacityVariable]=t.opacityValue||"1"),n[e]=t.value),n}function Jn(e,t,n){if(e[0]=="["&&e.slice(-1)=="]"){if(e=mn(Al(e.slice(1,-1),n.theme)),!t)return e;if(!(/color|fill|stroke/i.test(t)&&!(/^color:/.test(e)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e))||/image/i.test(t)&&!(/^image:/.test(e)||/^[a-z-]+\(/.test(e))||/weight/i.test(t)&&!(/^(number|any):/.test(e)||/^\d+$/.test(e))||/position/i.test(t)&&/^(length|size):/.test(e)))return e.replace(/^[a-z-]+:/,"")}}function Fl(e){return e.replace(/-./g,t=>t[1].toUpperCase())}function mn(e){return e.includes("url(")?e.replace(/(.*?)(url\(.*?\))(.*?)/g,(t,n="",r,a="")=>mn(n)+r+mn(a)):e.replace(/(^|[^\\])_+/g,(t,n)=>n+" ".repeat(t.length-n.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,t=>t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}var tb=Symbol();var Og=new Proxy(Lg,{apply(e,t,n){return io(n[0])},get(e,t){let n=io[t];return typeof n=="function"?function(){return n.apply(io,arguments)}:n}});var nb=function e(t){return new Proxy(function(n,...r){return Cl(t,"",n,r)},{get(n,r){return r==="bind"?e:r in n?n[r]:function(a,...o){return Cl(t,r,a,o)}}})}();function Cl(e,t,n,r){return{toString(){let a=ho(n,r),o=kl(t+Fr(JSON.stringify([t,a])));return(typeof e=="function"?e:Og)(Ol({[`@keyframes ${o}`]:ho(n,r)})),o}}}var Fg="inherit",Hg="currentColor",Ug="transparent",$g="#000",Bg="#fff",jg={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},zg={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},Wg={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},qg={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},Vg={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},Kg={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},Gg={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},Jg={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},Yg={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},Xg={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},Qg={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},Zg={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},ep={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},tp={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},np={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},rp={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},ap={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},op={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},sp={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},ip={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},lp={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},cp={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},up={__proto__:null,inherit:Fg,current:Hg,transparent:Ug,black:$g,white:Bg,slate:jg,gray:zg,zinc:Wg,neutral:qg,stone:Vg,red:Kg,orange:Gg,amber:Jg,yellow:Yg,lime:Xg,green:Qg,emerald:Zg,teal:ep,cyan:tp,sky:np,blue:rp,indigo:ap,violet:op,purple:sp,fuchsia:ip,pink:lp,rose:cp},Eo={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},colors:up,columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...Ye(4,"rem",4,.5,.5),...Ye(12,"rem",4,5),14:"3.5rem",...Ye(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:Q("blur"),backdropBrightness:Q("brightness"),backdropContrast:Q("contrast"),backdropGrayscale:Q("grayscale"),backdropHueRotate:Q("hueRotate"),backdropInvert:Q("invert"),backdropOpacity:Q("opacity"),backdropSaturate:Q("saturate"),backdropSepia:Q("sepia"),backgroundColor:Q("colors"),backgroundImage:{none:"none"},backgroundOpacity:Q("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...Ye(200,"",100,0,50),...Ye(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:e})=>({DEFAULT:e("colors.gray.200","currentColor"),...e("colors")}),borderOpacity:Q("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:Q("spacing"),borderWidth:{DEFAULT:"1px",...tt(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:Q("colors"),caretColor:Q("colors"),accentColor:({theme:e})=>({auto:"auto",...e("colors")}),contrast:{...Ye(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:Q("borderColor"),divideOpacity:Q("borderOpacity"),divideWidth:Q("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:Q("colors"),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({...e("spacing"),...Xn(2,6),...Xn(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:Q("spacing"),gradientColorStops:Q("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:e})=>({...e("spacing"),...Xn(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:e})=>({...e("spacing"),...Xn(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...Ye(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),maxHeight:({theme:e})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...e("spacing")}),maxWidth:({theme:e,breakpoints:t})=>({...t(e("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...Ye(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:Q("spacing"),placeholderColor:Q("colors"),placeholderOpacity:Q("opacity"),outlineColor:Q("colors"),outlineOffset:tt(8,"px"),outlineWidth:tt(8,"px"),ringColor:({theme:e})=>({...e("colors"),DEFAULT:e("colors.blue.500","#3b82f6")}),ringOffsetColor:Q("colors"),ringOffsetWidth:tt(8,"px"),ringOpacity:({theme:e})=>({...e("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...tt(8,"px")},rotate:{...tt(2,"deg"),...tt(12,"deg",3),...tt(180,"deg",45)},saturate:Ye(200,"",100,0,50),scale:{...Ye(150,"",100,0,50),...Ye(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:Q("spacing"),scrollPadding:Q("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...tt(2,"deg"),...tt(12,"deg",3)},space:Q("spacing"),stroke:Q("colors"),strokeWidth:Ye(2),textColor:Q("colors"),textDecorationColor:Q("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...tt(8,"px")},textUnderlineOffset:{auto:"auto",...tt(8,"px")},textIndent:Q("spacing"),textOpacity:Q("opacity"),transitionDuration:({theme:e})=>({...e("durations"),DEFAULT:"150ms"}),transitionDelay:Q("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:e})=>({...e("spacing"),...Xn(2,4),full:"100%"}),width:({theme:e})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...e("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...Ye(50,"",1,0,10),auto:"auto"}};function Xn(e,t){let n={};do for(var r=1;r<e;r++)n[`${r}/${e}`]=Number((r/e*100).toFixed(6))+"%";while(++e<=t);return n}function tt(e,t,n=0){let r={};for(;n<=e;n=2*n||1)r[n]=n+t;return r}function Ye(e,t="",n=1,r=0,a=1,o={}){for(;r<=e;r+=a)o[r]=r/n+t;return o}function Q(e){return({theme:t})=>t(e)}var fp={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${Eo.fontFamily.sans})`},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${Eo.fontFamily.mono})`,fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},dp=[L("\\[([-\\w]+):(.+)]",({1:e,2:t},n)=>({"@layer overrides":{"&":{[e]:Jn(`[${t}]`,e,n)}}})),L("(group|peer)(~[^-[]+)?",({input:e},{h:t})=>[{c:t(e)}]),k("aspect-","aspectRatio"),L("container",(e,{theme:t})=>{let{screens:n=t("screens"),center:r,padding:a}=t("container"),o={width:"100%",marginRight:r&&"auto",marginLeft:r&&"auto",...i("xs")};for(let s in n){let c=n[s];typeof c=="string"&&(o[Hr(c)]={"&":{maxWidth:c,...i(s)}})}return o;function i(s){let c=a&&(typeof a=="string"?a:a[s]||a.DEFAULT);if(c)return{paddingRight:c,paddingLeft:c}}}),k("content-","content",({_:e})=>({"--tw-content":e,content:"var(--tw-content)"})),L("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),L("box-(border|content)","boxSizing",({1:e})=>e+"-box"),L("hidden",{display:"none"}),L("table-(auto|fixed)","tableLayout"),L(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",L("isolate","isolation"),L("object-(contain|cover|fill|none|scale-down)","objectFit"),k("object-","objectPosition"),L("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",Ur),L("overscroll(-[xy])?-(auto|contain|none)",({1:e="",2:t})=>({["overscroll-behavior"+e]:t})),L("(static|fixed|absolute|relative|sticky)","position"),k("-?inset(-[xy])?(?:$|-)","inset",({1:e,_:t})=>({top:e!="-x"&&t,right:e!="-y"&&t,bottom:e!="-x"&&t,left:e!="-y"&&t})),k("-?(top|bottom|left|right)(?:$|-)","inset"),L("visible","visibility"),L("invisible",{visibility:"hidden"}),k("-?z-","zIndex"),L("flex-((row|col)(-reverse)?)","flexDirection",Hl),L("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),k("(flex-(?:grow|shrink))(?:$|-)"),k("(flex)-"),k("grow(?:$|-)","flexGrow"),k("shrink(?:$|-)","flexShrink"),k("basis-","flexBasis"),k("-?(order)-"),"-?(order)-(\\d+)",k("grid-cols-","gridTemplateColumns"),L("grid-cols-(\\d+)","gridTemplateColumns",jl),k("col-","gridColumn"),L("col-(span)-(\\d+)","gridColumn",Bl),k("col-start-","gridColumnStart"),L("col-start-(auto|\\d+)","gridColumnStart"),k("col-end-","gridColumnEnd"),L("col-end-(auto|\\d+)","gridColumnEnd"),k("grid-rows-","gridTemplateRows"),L("grid-rows-(\\d+)","gridTemplateRows",jl),k("row-","gridRow"),L("row-(span)-(\\d+)","gridRow",Bl),k("row-start-","gridRowStart"),L("row-start-(auto|\\d+)","gridRowStart"),k("row-end-","gridRowEnd"),L("row-end-(auto|\\d+)","gridRowEnd"),L("grid-flow-((row|col)(-dense)?)","gridAutoFlow",e=>Ur(Hl(e))),L("grid-flow-(dense)","gridAutoFlow"),k("auto-cols-","gridAutoColumns"),k("auto-rows-","gridAutoRows"),k("gap-x(?:$|-)","gap","columnGap"),k("gap-y(?:$|-)","gap","rowGap"),k("gap(?:$|-)","gap"),"(justify-(?:items|self))-",L("justify-","justifyContent",Ul),L("(content|items|self)-",e=>({["align-"+e[1]]:Ul(e)})),L("(place-(content|items|self))-",({1:e,$$:t})=>({[e]:("wun".includes(t[3])?"space-":"")+t})),k("p([xytrbl])?(?:$|-)","padding",hn("padding")),k("-?m([xytrbl])?(?:$|-)","margin",hn("margin")),k("-?space-(x|y)(?:$|-)","space",({1:e,_:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[e]]:`calc(${t} * calc(1 - var(--tw-space-${e}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[e]]:`calc(${t} * var(--tw-space-${e}-reverse))`}})),L("space-(x|y)-reverse",({1:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"1"}})),k("w-","width"),k("min-w-","minWidth"),k("max-w-","maxWidth"),k("h-","height"),k("min-h-","minHeight"),k("max-h-","maxHeight"),k("font-","fontWeight"),k("font-","fontFamily","fontFamily",bt),L("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),L("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),L("italic","fontStyle"),L("not-italic",{fontStyle:"normal"}),L("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:e,2:t="",3:n})=>t=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(n?"numeric-fraction":"pt".includes(t[0])?"numeric-spacing":t?"numeric-figure":e)]:e,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"}}}),k("tracking-","letterSpacing"),k("leading-","lineHeight"),L("list-(inside|outside)","listStylePosition"),k("list-","listStyleType"),L("list-","listStyleType"),k("placeholder-opacity-","placeholderOpacity",({_:e})=>({"&::placeholder":{"--tw-placeholder-opacity":e}})),Ae("placeholder-",{property:"color",selector:"&::placeholder"}),L("text-(left|center|right|justify|start|end)","textAlign"),L("text-(ellipsis|clip)","textOverflow"),k("text-opacity-","textOpacity","--tw-text-opacity"),Ae("text-",{property:"color"}),k("text-","fontSize",({_:e})=>typeof e=="string"?{fontSize:e}:{fontSize:e[0],...typeof e[1]=="string"?{lineHeight:e[1]}:e[1]}),k("indent-","textIndent"),L("(overline|underline|line-through)","textDecorationLine"),L("no-underline",{textDecorationLine:"none"}),k("underline-offset-","textUnderlineOffset"),Ae("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),k("decoration-","textDecorationThickness"),L("decoration-","textDecorationStyle"),L("(uppercase|lowercase|capitalize)","textTransform"),L("normal-case",{textTransform:"none"}),L("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),L("align-","verticalAlign"),L("whitespace-","whiteSpace"),L("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),L("break-words",{overflowWrap:"break-word"}),L("break-all",{wordBreak:"break-all"}),Ae("caret-",{opacityVariable:!1,opacitySection:"opacity"}),Ae("accent-",{opacityVariable:!1,opacitySection:"opacity"}),L("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:e})=>`linear-gradient(to ${jt(e," ")},var(--tw-gradient-stops))`),Ae("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-from":e.value,"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),Ae("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`})),Ae("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),L("bg-(fixed|local|scroll)","backgroundAttachment"),L("bg-origin-(border|padding|content)","backgroundOrigin",({1:e})=>e+"-box"),L(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),L("bg-blend-","backgroundBlendMode"),L("bg-clip-(border|padding|content|text)","backgroundClip",({1:e})=>e+(e=="text"?"":"-box")),k("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),Ae("bg-",{section:"backgroundColor"}),k("bg-","backgroundImage"),k("bg-","backgroundPosition"),L("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",Ur),k("bg-","backgroundSize"),k("rounded(?:$|-)","borderRadius"),k("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:e,_:t})=>{let n={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[e]||[e,e];return{[`border-${jt(n[0])}-radius`]:t,[`border-${jt(n[1])}-radius`]:t}}),L("border-(collapse|separate)","borderCollapse"),k("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),L("border-(solid|dashed|dotted|double|none)","borderStyle"),k("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:e,_:t})=>({"@layer defaults":{"*,::before,::after,::backdrop":{"--tw-border-spacing-x":0,"--tw-border-spacing-y":0}},["--tw-border-spacing"+(e||"-x")]:t,["--tw-border-spacing"+(e||"-y")]:t,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),Ae("border-([xytrbl])-",{section:"borderColor"},hn("border","Color")),Ae("border-"),k("border-([xytrbl])(?:$|-)","borderWidth",hn("border","Width")),k("border(?:$|-)","borderWidth"),k("divide-opacity(?:$|-)","divideOpacity",({_:e})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":e}})),L("divide-(solid|dashed|dotted|double|none)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:e}})),L("divide-([xy]-reverse)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+e]:"1"}})),k("divide-([xy])(?:$|-)","divideWidth",({1:e,_:t})=>{let n={x:"lr",y:"tb"}[e];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${e}-reverse`]:"0",[`border-${jt(n[0])}Width`]:`calc(${t} * calc(1 - var(--tw-divide-${e}-reverse)))`,[`border-${jt(n[1])}Width`]:`calc(${t} * var(--tw-divide-${e}-reverse))`}}}),Ae("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),k("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),Ae("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),k("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),L("ring-inset",{"--tw-ring-inset":"inset"}),Ae("ring-",{property:"--tw-ring-color"}),k("ring(?:$|-)","ringWidth",({_:e},{theme:t})=>({"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":t("ringOffsetWidth","","0px"),"--tw-ring-offset-color":At(t("ringOffsetColor","","#fff")),"--tw-ring-color":At(t("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":t("ringOpacity","","0.5")}}}})),Ae("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-shadow-color":e.value,"--tw-shadow":"var(--tw-shadow-colored)"})),k("shadow(?:$|-)","boxShadow",({_:e})=>({"--tw-shadow":bt(e),"--tw-shadow-colored":bt(e).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}}})),k("(opacity)-"),L("mix-blend-","mixBlendMode"),...$l(),...$l("backdrop-"),k("transition(?:$|-)","transitionProperty",(e,{theme:t})=>({transitionProperty:bt(e),transitionTimingFunction:e._=="none"?void 0:bt(t("transitionTimingFunction","")),transitionDuration:e._=="none"?void 0:bt(t("transitionDuration",""))})),k("duration(?:$|-)","transitionDuration","transitionDuration",bt),k("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",bt),k("delay(?:$|-)","transitionDelay","transitionDelay",bt),k("animate(?:$|-)","animation",(e,{theme:t,h:n})=>{let r=bt(e),a=r.split(" "),o=t("keyframes",a[0]);return o?{["@keyframes "+(a[0]=n(a[0]))]:o,animation:a.join(" ")}:{animation:r}}),"(transform)-(none)",L("transform",Co),L("transform-(cpu|gpu)",({1:e})=>({"--tw-transform":zl(e=="gpu")})),k("scale(-[xy])?-","scale",({1:e,_:t})=>({["--tw-scale"+(e||"-x")]:t,["--tw-scale"+(e||"-y")]:t,...Co()})),k("-?(rotate)-","rotate",So),k("-?(translate-[xy])-","translate",So),k("-?(skew-[xy])-","skew",So),L("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",Ur),"(appearance)-",k("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",k("(cursor)-"),"(cursor)-",L("snap-(none)","scroll-snap-type"),L("snap-(x|y|both)",({1:e})=>({"scroll-snap-type":e+" var(--tw-scroll-snap-strictness)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-scroll-snap-strictness":"proximity"}}})),L("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),L("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),L("snap-(normal|always)","scroll-snap-stop"),L("scroll-(auto|smooth)","scroll-behavior"),k("scroll-p([xytrbl])?(?:$|-)","padding",hn("scroll-padding")),k("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",hn("scroll-margin")),L("touch-(auto|none|manipulation)","touch-action"),L("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:e,2:t,3:n})=>({[`--tw-${t?"pan-x":n?"pan-y":e}`]:e,"touch-action":"var(--tw-touch-action)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}}})),L("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),L("outline",{outlineStyle:"solid"}),L("outline-(dashed|dotted|double|hidden)","outlineStyle"),k("(outline-offset)-"),Ae("outline-",{opacityVariable:!1,opacitySection:"opacity"}),k("outline-","outlineWidth"),"(pointer-events)-",k("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:e})=>({x:"horizontal",y:"vertical"})[e]||e||"both"],L("select-(none|text|all|auto)","userSelect"),Ae("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),Ae("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),k("stroke-","strokeWidth"),L("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),L("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function Ur(e){return(typeof e=="string"?e:e[1]).replace(/-/g," ").trim()}function Hl(e){return(typeof e=="string"?e:e[1]).replace("col","column")}function jt(e,t="-"){let n=[];for(let r of e)n.push({t:"top",r:"right",b:"bottom",l:"left"}[r]);return n.join(t)}function bt(e){return e&&""+(e._||e)}function Ul({$$:e}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[e[3]||""]||"")+e}function hn(e,t=""){return({1:n,_:r})=>{let a={x:"lr",y:"tb"}[n]||n+n;return a?{...Yn(e+"-"+jt(a[0])+t,r),...Yn(e+"-"+jt(a[1])+t,r)}:Yn(e+t,r)}}function $l(e=""){let t=["blur","brightness","contrast","grayscale","hue-rotate","invert",e&&"opacity","saturate","sepia",!e&&"drop-shadow"].filter(Boolean),n={};for(let r of t)n[`--tw-${e}${r}`]="var(--tw-empty,/*!*/ /*!*/)";return n={[`${e}filter`]:t.map(r=>`var(--tw-${e}${r})`).join(" "),"@layer defaults":{"*,::before,::after,::backdrop":n}},[`(${e}filter)-(none)`,L(`${e}filter`,n),...t.map(r=>k(`${r[0]=="h"?"-?":""}(${e}${r})(?:$|-)`,r,({1:a,_:o})=>({[`--tw-${a}`]:et(o).map(i=>`${r}(${i})`).join(" "),...n})))]}function So({1:e,_:t}){return{["--tw-"+e]:t,...Co()}}function Co(){return{transform:"var(--tw-transform)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":zl()}}}}function zl(e){return[e?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function Bl({1:e,2:t}){return`${e} ${t} / ${e} ${t}`}function jl({1:e}){return`repeat(${e},minmax(0,1fr))`}var gp=[["sticky","@supports ((position: -webkit-sticky) or (position:sticky))"],["motion-reduce","@media (prefers-reduced-motion:reduce)"],["motion-safe","@media (prefers-reduced-motion:no-preference)"],["print","@media print"],["portrait","@media (orientation:portrait)"],["landscape","@media (orientation:landscape)"],["contrast-more","@media (prefers-contrast:more)"],["contrast-less","@media (prefers-contrast:less)"],["marker","& *::marker,&::marker"],["selection","& *::selection,&::selection"],["first-letter","&::first-letter"],["first-line","&::first-line"],["file","&::file-selector-button"],["placeholder","&::placeholder"],["backdrop","&::backdrop"],["first","&:first-child"],["last","&:last-child"],["even","&:nth-child(2n)"],["odd","&:nth-child(odd)"],["open","&[open]"],["((group|peer)(~[^-[]+)?)(-[a-z-]+|-\\[(.+)]|\\[.+])",({1:e,4:t,5:n},{e:r,h:a,v:o})=>{let i=n&&mn(n)||(t[0]=="["?t:o(t.slice(1)));return`${(i.includes("&")?i:"&"+i).replace(/&/g,`:merge(.${r(a(e))})`)}${e[0]=="p"?"~":" "}&`}],["(ltr|rtl)",({1:e})=>`[dir="${e}"] &`],[/^\[(.+)]$/,({1:e})=>/[&@]/.test(e)&&mn(e).replace(/[}]+$/,"").split("{")]];function $r({disablePreflight:e}={}){return{preflight:e?void 0:fp,theme:Eo,variants:gp,rules:dp}}var pp=Object.create,ql=Object.defineProperty,mp=Object.getOwnPropertyDescriptor,hp=Object.getOwnPropertyNames,bp=Object.getPrototypeOf,yp=Object.prototype.hasOwnProperty,xp=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Tp=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of hp(t))!yp.call(e,a)&&a!==n&&ql(e,a,{get:()=>t[a],enumerable:!(r=mp(t,a))||r.enumerable});return e},vp=(e,t,n)=>(n=e!=null?pp(bp(e)):{},Tp(t||!e||!e.__esModule?ql(n,"default",{value:e,enumerable:!0}):n,e)),wp=xp((e,t)=>{(function(n,r){typeof e=="object"&&typeof t=="object"?t.exports=r():typeof define=="function"&&define.amd?define([],r):typeof e=="object"?e.notie=r():n.notie=r()})(e,function(){return function(n){function r(o){if(a[o])return a[o].exports;var i=a[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var a={};return r.m=n,r.c=a,r.i=function(o){return o},r.d=function(o,i,s){r.o(o,i)||Object.defineProperty(o,i,{configurable:!1,enumerable:!0,get:s})},r.n=function(o){var i=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(i,"a",i),i},r.o=function(o,i){return Object.prototype.hasOwnProperty.call(o,i)},r.p="",r(r.s=1)}([function(n,r){n.exports=function(a){return a.webpackPolyfill||(a.deprecate=function(){},a.paths=[],a.children||(a.children=[]),Object.defineProperty(a,"loaded",{enumerable:!0,get:function(){return a.l}}),Object.defineProperty(a,"id",{enumerable:!0,get:function(){return a.i}}),a.webpackPolyfill=1),a}},function(n,r,a){"use strict";(function(o){var i,s,c,u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l};(function(l,f){u(r)==="object"&&u(o)==="object"?o.exports=f():(s=[],i=f,c=typeof i=="function"?i.apply(r,s):i,c!==void 0&&(o.exports=c))})(void 0,function(){return function(l){function f(g){if(d[g])return d[g].exports;var h=d[g]={i:g,l:!1,exports:{}};return l[g].call(h.exports,h,h.exports,f),h.l=!0,h.exports}var d={};return f.m=l,f.c=d,f.i=function(g){return g},f.d=function(g,h,x){f.o(g,h)||Object.defineProperty(g,h,{configurable:!1,enumerable:!0,get:x})},f.n=function(g){var h=g&&g.__esModule?function(){return g.default}:function(){return g};return f.d(h,"a",h),h},f.o=function(g,h){return Object.prototype.hasOwnProperty.call(g,h)},f.p="",f(f.s=0)}([function(l,f,d){function g(v,N){var P={};for(var ee in v)N.indexOf(ee)>=0||Object.prototype.hasOwnProperty.call(v,ee)&&(P[ee]=v[ee]);return P}Object.defineProperty(f,"__esModule",{value:!0});var h=typeof Symbol=="function"&&u(Symbol.iterator)==="symbol"?function(v){return typeof v>"u"?"undefined":u(v)}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v>"u"?"undefined":u(v)},x=Object.assign||function(v){for(var N=1;N<arguments.length;N++){var P=arguments[N];for(var ee in P)Object.prototype.hasOwnProperty.call(P,ee)&&(v[ee]=P[ee])}return v},b={top:"top",bottom:"bottom"},m={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:b.top,force:b.top,confirm:b.top,input:b.top,select:b.bottom,date:b.top}},T=f.setOptions=function(v){m=x({},m,v,{classes:x({},m.classes,v.classes),ids:x({},m.ids,v.ids),positions:x({},m.positions,v.positions)})},w=function(){return new Promise(function(v){return setTimeout(v,0)})},C=function(v){return new Promise(function(N){return setTimeout(N,1e3*v)})},F=function(){document.activeElement&&document.activeElement.blur()},_=function(){var v="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(N){var P=16*Math.random()|0,ee=N==="x"?P:3&P|8;return ee.toString(16)});return"notie-"+v},z={1:m.classes.backgroundSuccess,success:m.classes.backgroundSuccess,2:m.classes.backgroundWarning,warning:m.classes.backgroundWarning,3:m.classes.backgroundError,error:m.classes.backgroundError,4:m.classes.backgroundInfo,info:m.classes.backgroundInfo,5:m.classes.backgroundNeutral,neutral:m.classes.backgroundNeutral},ue=function(){return m.transitionSelector+" "+m.transitionDuration+"s "+m.transitionCurve},E=function(v){return v.keyCode===13},D=function(v){return v.keyCode===27},$=function(v,N){v.classList.add(m.classes.container),v.style[N]="-10000px",document.body.appendChild(v),v.style[N]="-"+v.offsetHeight+"px",v.listener&&window.addEventListener("keydown",v.listener),w().then(function(){v.style.transition=ue(),v.style[N]=0})},A=function(v,N){var P=document.getElementById(v);P&&(P.style[N]="-"+P.offsetHeight+"px",P.listener&&window.removeEventListener("keydown",P.listener),C(m.transitionDuration).then(function(){P.parentNode&&P.parentNode.removeChild(P)}))},W=function(v,N){var P=document.createElement("div");P.id=m.ids.overlay,P.classList.add(m.classes.overlay),P.classList.add(m.classes.backgroundOverlay),P.style.opacity=0,v&&m.overlayClickDismiss&&(P.onclick=function(){A(v.id,N),O()}),document.body.appendChild(P),w().then(function(){P.style.transition=ue(),P.style.opacity=m.overlayOpacity})},O=function(){var v=document.getElementById(m.ids.overlay);v.style.opacity=0,C(m.transitionDuration).then(function(){v.parentNode&&v.parentNode.removeChild(v)})},Y=f.hideAlerts=function(v){var N=document.getElementsByClassName(m.classes.alert);if(N.length){for(var P=0;P<N.length;P++){var ee=N[P];A(ee.id,ee.position)}v&&C(m.transitionDuration).then(function(){return v()})}},I=f.alert=function(v){var N=v.type,P=N===void 0?4:N,ee=v.text,V=v.time,he=V===void 0?m.alertTime:V,ve=v.stay,Ke=ve!==void 0&&ve,Pe=v.position,de=Pe===void 0?m.positions.alert||de.top:Pe;F(),Y();var le=document.createElement("div"),ge=_();le.id=ge,le.position=de,le.classList.add(m.classes.textbox),le.classList.add(z[P]),le.classList.add(m.classes.alert),le.innerHTML='<div class="'+m.classes.textboxInner+'">'+ee+"</div>",le.onclick=function(){return A(ge,de)},le.listener=function(U){(E(U)||D(U))&&Y()},$(le,de),he&&he<1&&(he=1),!Ke&&he&&C(he).then(function(){return A(ge,de)})},oe=f.force=function(v,N){var P=v.type,ee=P===void 0?5:P,V=v.text,he=v.buttonText,ve=he===void 0?"OK":he,Ke=v.callback,Pe=v.position,de=Pe===void 0?m.positions.force||de.top:Pe;F(),Y();var le=document.createElement("div"),ge=_();le.id=ge;var U=document.createElement("div");U.classList.add(m.classes.textbox),U.classList.add(m.classes.backgroundInfo),U.innerHTML='<div class="'+m.classes.textboxInner+'">'+V+"</div>";var ne=document.createElement("div");ne.classList.add(m.classes.button),ne.classList.add(z[ee]),ne.innerHTML=ve,ne.onclick=function(){A(ge,de),O(),Ke?Ke():N&&N()},le.appendChild(U),le.appendChild(ne),le.listener=function(Ne){E(Ne)&&ne.click()},$(le,de),W()},fe=f.confirm=function(v,N,P){var ee=v.text,V=v.submitText,he=V===void 0?"Yes":V,ve=v.cancelText,Ke=ve===void 0?"Cancel":ve,Pe=v.submitCallback,de=v.cancelCallback,le=v.position,ge=le===void 0?m.positions.confirm||ge.top:le;F(),Y();var U=document.createElement("div"),ne=_();U.id=ne;var Ne=document.createElement("div");Ne.classList.add(m.classes.textbox),Ne.classList.add(m.classes.backgroundInfo),Ne.innerHTML='<div class="'+m.classes.textboxInner+'">'+ee+"</div>";var be=document.createElement("div");be.classList.add(m.classes.button),be.classList.add(m.classes.elementHalf),be.classList.add(m.classes.backgroundSuccess),be.innerHTML=he,be.onclick=function(){A(ne,ge),O(),Pe?Pe():N&&N()};var K=document.createElement("div");K.classList.add(m.classes.button),K.classList.add(m.classes.elementHalf),K.classList.add(m.classes.backgroundError),K.innerHTML=Ke,K.onclick=function(){A(ne,ge),O(),de?de():P&&P()},U.appendChild(Ne),U.appendChild(be),U.appendChild(K),U.listener=function(Oe){E(Oe)?be.click():D(Oe)&&K.click()},$(U,ge),W(U,ge)},S=function(v,N,P){var ee=v.text,V=v.submitText,he=V===void 0?"Submit":V,ve=v.cancelText,Ke=ve===void 0?"Cancel":ve,Pe=v.submitCallback,de=v.cancelCallback,le=v.position,ge=le===void 0?m.positions.input||ge.top:le,U=g(v,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);F(),Y();var ne=document.createElement("div"),Ne=_();ne.id=Ne;var be=document.createElement("div");be.classList.add(m.classes.textbox),be.classList.add(m.classes.backgroundInfo),be.innerHTML='<div class="'+m.classes.textboxInner+'">'+ee+"</div>";var K=document.createElement("input");K.classList.add(m.classes.inputField),K.setAttribute("autocapitalize",U.autocapitalize||"none"),K.setAttribute("autocomplete",U.autocomplete||"off"),K.setAttribute("autocorrect",U.autocorrect||"off"),K.setAttribute("autofocus",U.autofocus||"true"),K.setAttribute("inputmode",U.inputmode||"verbatim"),K.setAttribute("max",U.max||""),K.setAttribute("maxlength",U.maxlength||""),K.setAttribute("min",U.min||""),K.setAttribute("minlength",U.minlength||""),K.setAttribute("placeholder",U.placeholder||""),K.setAttribute("spellcheck",U.spellcheck||"default"),K.setAttribute("step",U.step||"any"),K.setAttribute("type",U.type||"text"),K.value=U.value||"",U.allowed&&(K.oninput=function(){var Ue=void 0;if(Array.isArray(U.allowed)){for(var Ge="",_t=U.allowed,vt=0;vt<_t.length;vt++)_t[vt]==="an"?Ge+="0-9a-zA-Z":_t[vt]==="a"?Ge+="a-zA-Z":_t[vt]==="n"&&(Ge+="0-9"),_t[vt]==="s"&&(Ge+=" ");Ue=new RegExp("[^"+Ge+"]","g")}else h(U.allowed)==="object"&&(Ue=U.allowed);K.value=K.value.replace(Ue,"")});var Oe=document.createElement("div");Oe.classList.add(m.classes.button),Oe.classList.add(m.classes.elementHalf),Oe.classList.add(m.classes.backgroundSuccess),Oe.innerHTML=he,Oe.onclick=function(){A(Ne,ge),O(),Pe?Pe(K.value):N&&N(K.value)};var it=document.createElement("div");it.classList.add(m.classes.button),it.classList.add(m.classes.elementHalf),it.classList.add(m.classes.backgroundError),it.innerHTML=Ke,it.onclick=function(){A(Ne,ge),O(),de?de(K.value):P&&P(K.value)},ne.appendChild(be),ne.appendChild(K),ne.appendChild(Oe),ne.appendChild(it),ne.listener=function(Ue){E(Ue)?Oe.click():D(Ue)&&it.click()},$(ne,ge),K.focus(),W(ne,ge)};f.input=S;var M=f.select=function(v,N){var P=v.text,ee=v.cancelText,V=ee===void 0?"Cancel":ee,he=v.cancelCallback,ve=v.choices,Ke=v.position,Pe=Ke===void 0?m.positions.select||Pe.top:Ke;F(),Y();var de=document.createElement("div"),le=_();de.id=le;var ge=document.createElement("div");ge.classList.add(m.classes.textbox),ge.classList.add(m.classes.backgroundInfo),ge.innerHTML='<div class="'+m.classes.textboxInner+'">'+P+"</div>",de.appendChild(ge),ve.forEach(function(ne,Ne){var be=ne.type,K=be===void 0?1:be,Oe=ne.text,it=ne.handler,Ue=document.createElement("div");Ue.classList.add(z[K]),Ue.classList.add(m.classes.button),Ue.classList.add(m.classes.selectChoice);var Ge=ve[Ne+1];Ge&&!Ge.type&&(Ge.type=1),Ge&&Ge.type===K&&Ue.classList.add(m.classes.selectChoiceRepeated),Ue.innerHTML=Oe,Ue.onclick=function(){A(le,Pe),O(),it()},de.appendChild(Ue)});var U=document.createElement("div");U.classList.add(m.classes.backgroundNeutral),U.classList.add(m.classes.button),U.innerHTML=V,U.onclick=function(){A(le,Pe),O(),he?he():N&&N()},de.appendChild(U),de.listener=function(ne){D(ne)&&U.click()},$(de,Pe),W(de,Pe)},H=f.date=function(v,N,P){var ee=v.value,V=ee===void 0?new Date:ee,he=v.submitText,ve=he===void 0?"OK":he,Ke=v.cancelText,Pe=Ke===void 0?"Cancel":Ke,de=v.submitCallback,le=v.cancelCallback,ge=v.position,U=ge===void 0?m.positions.date||U.top:ge;F(),Y();var ne="&#9662",Ne=document.createElement("div"),be=document.createElement("div"),K=document.createElement("div"),Oe=function(we){Ne.innerHTML=m.dateMonths[we.getMonth()],be.innerHTML=we.getDate(),K.innerHTML=we.getFullYear()},it=function(we){var ht=new Date(V.getFullYear(),V.getMonth()+1,0).getDate(),cn=we.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(cn)>ht&&(cn=ht.toString()),we.target.textContent=cn,Number(cn)<1&&(cn="1"),V.setDate(Number(cn))},Ue=function(we){var ht=we.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);we.target.textContent=ht,V.setFullYear(Number(ht))},Ge=function(we){Oe(V)},_t=function(we){var ht=new Date(V.getFullYear(),V.getMonth()+we+1,0).getDate();V.getDate()>ht&&V.setDate(ht),V.setMonth(V.getMonth()+we),Oe(V)},vt=function(we){V.setDate(V.getDate()+we),Oe(V)},pi=function(we){var ht=V.getFullYear()+we;ht<0?V.setFullYear(0):V.setFullYear(V.getFullYear()+we),Oe(V)},Ut=document.createElement("div"),Aa=_();Ut.id=Aa;var Ra=document.createElement("div");Ra.classList.add(m.classes.backgroundInfo);var lt=document.createElement("div");lt.classList.add(m.classes.dateSelectorInner);var on=document.createElement("div");on.classList.add(m.classes.button),on.classList.add(m.classes.elementThird),on.classList.add(m.classes.dateSelectorUp),on.innerHTML=ne;var sn=document.createElement("div");sn.classList.add(m.classes.button),sn.classList.add(m.classes.elementThird),sn.classList.add(m.classes.dateSelectorUp),sn.innerHTML=ne;var ln=document.createElement("div");ln.classList.add(m.classes.button),ln.classList.add(m.classes.elementThird),ln.classList.add(m.classes.dateSelectorUp),ln.innerHTML=ne,Ne.classList.add(m.classes.element),Ne.classList.add(m.classes.elementThird),Ne.innerHTML=m.dateMonths[V.getMonth()],be.classList.add(m.classes.element),be.classList.add(m.classes.elementThird),be.setAttribute("contentEditable",!0),be.addEventListener("input",it),be.addEventListener("blur",Ge),be.innerHTML=V.getDate(),K.classList.add(m.classes.element),K.classList.add(m.classes.elementThird),K.setAttribute("contentEditable",!0),K.addEventListener("input",Ue),K.addEventListener("blur",Ge),K.innerHTML=V.getFullYear();var Un=document.createElement("div");Un.classList.add(m.classes.button),Un.classList.add(m.classes.elementThird),Un.innerHTML=ne;var $n=document.createElement("div");$n.classList.add(m.classes.button),$n.classList.add(m.classes.elementThird),$n.innerHTML=ne;var Bn=document.createElement("div");Bn.classList.add(m.classes.button),Bn.classList.add(m.classes.elementThird),Bn.innerHTML=ne,on.onclick=function(){return _t(1)},sn.onclick=function(){return vt(1)},ln.onclick=function(){return pi(1)},Un.onclick=function(){return _t(-1)},$n.onclick=function(){return vt(-1)},Bn.onclick=function(){return pi(-1)};var $t=document.createElement("div");$t.classList.add(m.classes.button),$t.classList.add(m.classes.elementHalf),$t.classList.add(m.classes.backgroundSuccess),$t.innerHTML=ve,$t.onclick=function(){A(Aa,U),O(),de?de(V):N&&N(V)};var Bt=document.createElement("div");Bt.classList.add(m.classes.button),Bt.classList.add(m.classes.elementHalf),Bt.classList.add(m.classes.backgroundError),Bt.innerHTML=Pe,Bt.onclick=function(){A(Aa,U),O(),le?le(V):P&&P(V)},lt.appendChild(on),lt.appendChild(sn),lt.appendChild(ln),lt.appendChild(Ne),lt.appendChild(be),lt.appendChild(K),lt.appendChild(Un),lt.appendChild($n),lt.appendChild(Bn),Ra.appendChild(lt),Ut.appendChild(Ra),Ut.appendChild($t),Ut.appendChild(Bt),Ut.listener=function(we){E(we)?$t.click():D(we)&&Bt.click()},$(Ut,U),W(Ut,U)};f.default={alert:I,force:oe,confirm:fe,input:S,select:M,date:H,setOptions:T,hideAlerts:Y}}])})}).call(r,a(0)(n))}])})}),Sp=vp(wp()),{default:Wl,...Ep}=Sp,Lo=Wl!==void 0?Wl:Ep;var xb=Symbol("clean");var Tb=Symbol();function ko(e,t){if(typeof e=="string")return t(e);{let n={};for(let r in e)n[r]=ko(e[r],t);return n}}function Kl(e){return t=>{if(t.transform){let n=t.transform;return t=t.input,{input:t,transform(r,a,o){let i=e(r,a,...o);return(...s)=>n(r,i,s)}}}else return{input:t,transform(n,r,a){return e(n,r,...a)}}}}var Mb=Kl((e,t,n)=>ko(t,r=>{for(let a in n)r=r.replace(new RegExp(`{${a}}`,"g"),n[a]);return r})),Pb=Kl((e,t,n)=>{let r=new Intl.PluralRules(e).select(n);return r in t||(r="many"),ko(t[r],a=>a.replace(/{count}/g,n))});var _o=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Mo(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on".concat(t),function(){n(window.event)})}function Ql(e,t){for(var n=t.slice(0,t.length-1),r=0;r<n.length;r++)n[r]=e[n[r].toLowerCase()];return n}function Zl(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function kp(e,t){for(var n=e.length>=t.length?e:t,r=e.length>=t.length?t:e,a=!0,o=0;o<n.length;o++)r.indexOf(n[o])===-1&&(a=!1);return a}var Zn={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":_o?173:189,"=":_o?61:187,";":_o?59:186,"'":222,"[":219,"]":221,"\\":220},yt={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},Ro={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},He={16:!1,18:!1,17:!1,91:!1},_e={};for(Qn=1;Qn<20;Qn++)Zn["f".concat(Qn)]=111+Qn;var Qn,pe=[],Gl=!1,ec="all",tc=[],jr=function(e){return Zn[e.toLowerCase()]||yt[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},_p=function(e){return Object.keys(Zn).find(function(t){return Zn[t]===e})},Mp=function(e){return Object.keys(yt).find(function(t){return yt[t]===e})};function nc(e){ec=e||"all"}function er(){return ec||"all"}function Pp(){return pe.slice(0)}function Ap(){return pe.map(function(e){return _p(e)||Mp(e)||String.fromCharCode(e)})}function Rp(e){var t=e.target||e.srcElement,n=t.tagName,r=!0;return(t.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!t.readOnly)&&(r=!1),r}function Np(e){return typeof e=="string"&&(e=jr(e)),pe.indexOf(e)!==-1}function Dp(e,t){var n,r;e||(e=er());for(var a in _e)if(Object.prototype.hasOwnProperty.call(_e,a))for(n=_e[a],r=0;r<n.length;)n[r].scope===e?n.splice(r,1):r++;er()===e&&nc(t||"all")}function Ip(e){var t=e.keyCode||e.which||e.charCode,n=pe.indexOf(t);if(n>=0&&pe.splice(n,1),e.key&&e.key.toLowerCase()==="meta"&&pe.splice(0,pe.length),(t===93||t===224)&&(t=91),t in He){He[t]=!1;for(var r in yt)yt[r]===t&&($e[r]=!1)}}function Op(e){if(typeof e>"u")Object.keys(_e).forEach(function(i){return delete _e[i]});else if(Array.isArray(e))e.forEach(function(i){i.key&&Po(i)});else if(typeof e=="object")e.key&&Po(e);else if(typeof e=="string"){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=n[0],o=n[1];typeof a=="function"&&(o=a,a=""),Po({key:e,scope:a,method:o,splitKey:"+"})}}var Po=function(e){var t=e.key,n=e.scope,r=e.method,a=e.splitKey,o=a===void 0?"+":a,i=Zl(t);i.forEach(function(s){var c=s.split(o),u=c.length,l=c[u-1],f=l==="*"?"*":jr(l);if(_e[f]){n||(n=er());var d=u>1?Ql(yt,c):[];_e[f]=_e[f].filter(function(g){var h=r?g.method===r:!0;return!(h&&g.scope===n&&kp(g.mods,d))})}})};function Jl(e,t,n,r){if(t.element===r){var a;if(t.scope===n||t.scope==="all"){a=t.mods.length>0;for(var o in He)Object.prototype.hasOwnProperty.call(He,o)&&(!He[o]&&t.mods.indexOf(+o)>-1||He[o]&&t.mods.indexOf(+o)===-1)&&(a=!1);(t.mods.length===0&&!He[16]&&!He[18]&&!He[17]&&!He[91]||a||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function Yl(e,t){var n=_e["*"],r=e.keyCode||e.which||e.charCode;if($e.filter.call(this,e)){if((r===93||r===224)&&(r=91),pe.indexOf(r)===-1&&r!==229&&pe.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(h){var x=Ro[h];e[h]&&pe.indexOf(x)===-1?pe.push(x):!e[h]&&pe.indexOf(x)>-1?pe.splice(pe.indexOf(x),1):h==="metaKey"&&e[h]&&pe.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(pe=pe.slice(pe.indexOf(x))))}),r in He){He[r]=!0;for(var a in yt)yt[a]===r&&($e[a]=!0);if(!n)return}for(var o in He)Object.prototype.hasOwnProperty.call(He,o)&&(He[o]=e[Ro[o]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(pe.indexOf(17)===-1&&pe.push(17),pe.indexOf(18)===-1&&pe.push(18),He[17]=!0,He[18]=!0);var i=er();if(n)for(var s=0;s<n.length;s++)n[s].scope===i&&(e.type==="keydown"&&n[s].keydown||e.type==="keyup"&&n[s].keyup)&&Jl(e,n[s],i,t);if(r in _e){for(var c=0;c<_e[r].length;c++)if((e.type==="keydown"&&_e[r][c].keydown||e.type==="keyup"&&_e[r][c].keyup)&&_e[r][c].key){for(var u=_e[r][c],l=u.splitKey,f=u.key.split(l),d=[],g=0;g<f.length;g++)d.push(jr(f[g]));d.sort().join("")===pe.sort().join("")&&Jl(e,u,i,t)}}}}function Fp(e){return tc.indexOf(e)>-1}function $e(e,t,n){pe=[];var r=Zl(e),a=[],o="all",i=document,s=0,c=!1,u=!0,l="+",f=!1;for(n===void 0&&typeof t=="function"&&(n=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(o=t.scope),t.element&&(i=t.element),t.keyup&&(c=t.keyup),t.keydown!==void 0&&(u=t.keydown),t.capture!==void 0&&(f=t.capture),typeof t.splitKey=="string"&&(l=t.splitKey)),typeof t=="string"&&(o=t);s<r.length;s++)e=r[s].split(l),a=[],e.length>1&&(a=Ql(yt,e)),e=e[e.length-1],e=e==="*"?"*":jr(e),e in _e||(_e[e]=[]),_e[e].push({keyup:c,keydown:u,scope:o,mods:a,shortcut:r[s],method:n,key:r[s],splitKey:l,element:i});typeof i<"u"&&!Fp(i)&&window&&(tc.push(i),Mo(i,"keydown",function(d){Yl(d,i)},f),Gl||(Gl=!0,Mo(window,"focus",function(){pe=[]},f)),Mo(i,"keyup",function(d){Yl(d,i),Ip(d)},f))}function Hp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(_e).forEach(function(n){var r=_e[n].filter(function(a){return a.scope===t&&a.shortcut===e});r.forEach(function(a){a&&a.method&&a.method()})})}var Ao={getPressedKeyString:Ap,setScope:nc,getScope:er,deleteScope:Dp,getPressedKeyCodes:Pp,isPressed:Np,filter:Rp,trigger:Hp,unbind:Op,keyMap:Zn,modifier:yt,modifierMap:Ro};for(Br in Ao)Object.prototype.hasOwnProperty.call(Ao,Br)&&($e[Br]=Ao[Br]);var Br;typeof document<"u"&&(Xl=window.hotkeys,$e.noConflict=function(e){return e&&window.hotkeys===$e&&(window.hotkeys=Xl),$e},window.hotkeys=$e);var Xl;var No=Lo.alert;var Up=0;function p(e,t,n,r,a){var o,i,s={};for(i in t)i=="ref"?o=t[i]:s[i]=t[i];var c={type:e,props:s,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Up,__source:a,__self:r};if(typeof e=="function"&&(o=e.defaultProps))for(i in o)s[i]===void 0&&(s[i]=o[i]);return G.vnode&&G.vnode(c),c}function Do({value:e,defaultCase:t=null,cases:n}){return e==null?null:p(Ze,{children:n[e]!=null?n[e]:t})}function Io(){let[e,t]=J(location.hash);return ce(()=>{let n=()=>t(location.hash);return globalThis.addEventListener("hashchange",n,!1),()=>{globalThis.removeEventListener("hashchange",n)}},[]),e}function Xe(e){No({type:"success",text:e})}function wt(e){No({type:"error",text:e})}var rc={lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",enableLineBreak:"\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u952E\u8BF7\u624B\u52A8\u8F93\u5165\uFF0C\u683C\u5F0F\u4E3A\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u817E\u8BAF/\u706B\u5C71\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165\u914D\u7F6E",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u8BF7\u5F00\u53D1\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u5F00\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u7ACB\u5373\u7FFB\u8BD1\u7F51\u9875\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\u53BB\u7FFB\u8BD1\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF1F","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF(\u5F53\u524D\u4E3A\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF)",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF(\u5F53\u524D\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF)",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF08\u533A\u522B\u4E8E\u6EDA\u52A8\u7FFB\u8BD1\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u4E4B\u540E\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1{language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA","translationTheme.none":"\u65E0","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u5E94\u7FFB\u8BD1","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8BD1(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u7FFB\u8BD1\u8BE5\u6BB5\u843D",enableUserscriptPagePopup:"\u603B\u662F\u5728\u9875\u9762\u4E0A\u5C55\u793A Popup \u6D6E\u7A97",enableUserscriptPagePopupDescription:"\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u524D\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\u4E3A\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u8BA9\u67D0\u4E9B\u7F51\u7AD9\u4F7F\u7528\u8BE5\u6837\u5F0F\uFF0C\u70B9\u51FB\u53F3\u8FB9\u7684\u6309\u94AE\u6DFB\u52A0\u540E\uFF0C\u518D\u5207\u6362\u5230\u53E6\u4E00\u79CD\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\uFF0C\u8FD9\u6837\u5373\u53EF\u5B9E\u73B0\u4E0D\u540C\u7F51\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8BD1\u6587\u6837\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00"};var ac={lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u7B26\u6578\u91CF","translate-pdf":"\u9EDE\u64CA\u7FFB\u8B6FPDF","translate-firefox-local-pdf":"\u9EDE\u64CA\u4E0A\u50B3PDF",enableLineBreak:"\u662F\u5426\u958B\u5553\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",help:"\u5E6B\u52A9",browserShortcutsNoteForFirefox:"Firefox\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u6377\u9375\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762`about:addons`\uFF0C\u7136\u5F8C\u9EDE\u64CA\u300C\u8A2D\u7F6E\u300D\uFF0C\u518D\u9EDE\u64CA\u300C\u7BA1\u7406\u5FEB\u6377\u9375\u300D\u5373\u53EF\u8A2D\u7F6E",browserShortcutsNoteForChrome:"\u985EChrome\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u7D50\u75C2\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u2019\u7BA1\u7406\u5FEB\u6377\u9375\u2018\u9762\u677F\uFF08\u2019chrome://extensions/shortcuts\u2018\uFF09\u8A2D\u7F6E\uFF0C\u9EDE\u64CA\u4E0B\u65B9\u6309\u9215\u8DF3\u8F49\u5230\u5FEB\u6377\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u9375\u8ACB\u624B\u52D5\u8F38\u5165\uFF0C\u683C\u5F0F\u7232\uFF1A",enableLineBreakDescription:"\u958B\u5553\u5F8C\uFF0C\u8B1B\u6703\u5728\u9577\u77ED\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u7B26\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u958B\u8A2D\u7F6E\u9801","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u5730 PDF \u6587\u4EF6",changelog:"\u66F4\u65B0\u65E5\u8A8C",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u7F6E",toggleDebug:"\u5728\u63A7\u5236\u6AAF\u6253\u5370\u8ABF\u8A66\u65E5\u8A8C",document:"\u6587\u6A94",resetSuccess:"\u885D\u7F6E\u6240\u6709\u8A2D\u7F6E\u6210\u529F",goAdvancedSettings:"\u53BB\u9032\u968E\u8A2D\u7F6E\u9801",advanced:"\u9032\u968E\u8A2D\u7F6E",advancedDescription:"\u4E00\u4E9B\u96E3\u4EE5\u7406\u89E3\u7684\u8A2D\u7F6E\u9805\uFF08\u4E00\u822C\u7121\u9700\u8A2D\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8A8D\u5373\u53EF\uFF09",developer:"\u958B\u767C\u8005\u8A2D\u7F6E",donateCafe:"\u8ACB\u958B\u767C\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u958B\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u53CD\u994B",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u958B\u5553\u5F8C\uFF0C\u5C07\u6703\u7ACB\u5373\u7FFB\u8B6F\u7DB2\u9801\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\uFF0C\u800C\u4E0D\u662F\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u958B\u5553\u5F8C\uFF0C\u6574\u500B\u7DB2\u9801\u7684\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\uFF0C\u800C\u4E0D\u662F\u9ED8\u8A8D\u7684\u667A\u80FD\u8B58\u5225\u4E3B\u8981\u5340\u57DF\u53BB\u7FFB\u8B6F\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u500B\u5B57\u7B26\u7121\u9700\u7B49\u5F85\u6EFE\u52D5\u5230\u53EF\u8996\u5340\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8B6F\uFF1F","interface language":"\u754C\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u6377\u9375",modify:"\u4FEE\u6539\u5FEB\u6377\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u4E3B\u9801",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u5730\u9069\u914D\u898F\u5247\u5DF2\u662F\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9069\u914D\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9069\u914D\u898F\u5247",localVersionIsTooOld:"\u672C\u5730\u64F4\u5C55\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u64F4\u5C55\u5230{minVersion} \u6216\u4E4B\u5F8C\u7684\u7248\u672C\u5F8C\u518D\u5617\u8A66\u540C\u6B65",foundNewVersion:"\u767C\u73FE\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u7576\u524D\u64F4\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9069\u914D\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u885D\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u7576\u524D\u898F\u5247\u7248\u672C",calculating:"\u8A08\u7B97\u4E2D",unknownError:"\u672A\u77E5\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u7372\u53D6\u9060\u7A0B\u898F\u5247",enableAlphaSuccess:"\u5DF2\u958B\u5553Alpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u95DC\u9589Alpha\u529F\u80FD",cacheSize:"\u7DE9\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7DE9\u5B58",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"\uFF08\u53BB\u8A2D\u7F6E\uFF09",goSettings:"\u53BB\u8A2D\u7F6E",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u5C0D\u65BC\u8A72\u7DB2\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F{language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",add:"\u589E\u52A0",default:"\u9ED8\u8A8D",forThisLanguage:"\u5C0D\u65BC\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u4ED6\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u7F6E\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4E00\u9805\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u7FFB\u8B6F\u4E2D",Error:"\u932F\u8AA4",allowCacheTranslations:"\u958B\u555F\u672C\u5730\u7FFB\u8B6F\u7DE9\u5B58\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8ACB\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8A2D\u7F6E",import_export:"\u5C0E\u5165/\u5C0E\u51FA","translationTheme.none":"\u7121","translationTheme.dashed":"\u865B\u7DDA\u4E0B\u5283\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u4E0B\u5283\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u908A\u6846","translationTheme.underline":"\u76F4\u7DDA\u4E0B\u5283\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7DDA","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u865B\u7DDA\u4E0B\u5283\u7DDA","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6\uFF08Alpha\uFF09","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u61C9\u7FFB\u8B6F","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"\u5FAE\u8EDF\u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u5BC6\u9470\u5F8C\u624D\u53EF\u7528\uFF0C\u8A73\u60C5\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u9470\u7533\u8ACB\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u7576\u524D\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\u70BA\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8A2D\u7F6E\u70BA\u8B93\u67D0\u4E9B\u7DB2\u7AD9\u4F7F\u7528\u8A72\u6A23\u5F0F\uFF0C\u9EDE\u64CA\u53F3\u908A\u7684\u6309\u9215\u6DFB\u52A0\u5F8C\uFF0C\u518D\u5207\u63DB\u5230\u53E6\u4E00\u7A2E\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\uFF0C\u9019\u6A23\u5373\u53EF\u5BE6\u73FE\u4E0D\u540C\u7DB2\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8B6F\u6587\u6A23\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C\u8A9E\u8A00"};var oc={lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","translate-firefox-local-pdf":"Click to upload Pdf",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.brandName":"Immersive Translate","browser.brandDescription":"Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.","browser.toggleTranslatePage":"Toggle translate webpage ","browser.toggleTranslateTheWholePage":"Toggle translate the whole page","browser.toggleTranslateToThePageEndImmediately":"Toggle translate to the bottom of the page immediately","browser.toggleTranslateTheMainPage":"Toggle translate the main page","browser.openOptionsPage":"Open Settings Page","browser.translateLocalPdfFile":"Translate local PDF files",changelog:"Change Log",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"General",toggleDebug:"Print debug logs on the console",document:"Document",resetSuccess:"All settings reset successful",goAdvancedSettings:"Go to Advanced Settings Page",advanced:"Advanced",advancedDescription:"Some unintelligible settings (normally set without setting to default)",developer:"Developer settings",donateCafe:"Buy Me a Coffee","translate to the bottom of the page":"Whether translate to the bottom of the page once you open the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate",translateToThePageEndImmediatelyDescription:"When turned on, it will immediately translate the page from the top to the bottom, instead of translating as you read. (Not recommended to turn on)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, the entire area of the page will be translated, not the default intelligent recognition main area to translate ( not recommended)","the number of characters to be translated first":"How many characters are translated directly without waiting to scroll to the visible area for the first few characters?","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",translateTheWholePage:"Translate the whole page area (different from only the main area)",translateToThePageEndImmediately:"Immediately translate to the bottom (different from translating the current visible area)",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension is too old. Please upgrade to {minVersion} or then try syncing again",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",translationEngine:"Engine Options",sourceLanguage:"Original language",popupTarget:"Target",popupService:"Service",target:"Target Language",popupSourceLanguage:"Source",forThisSite:"For This Site:",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export","translationTheme.none":"None","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Maker","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationServices.tencent":"Tencent Translator","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeeplX (Alpha)","translationServices.bing":"Bing translate","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Microsoft Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.transmart":"Tencent Smart Translation","translationServices.d":"DeeplX (Alpha)","translate title":"Translate page title","always languages":"Always translate the following languages","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"The current default translation style is \u300C{theme}\u300D, you can also set it to let some websites use this style, click the button on the right to add it, and then switch to another default translation style, so that you can use different translation styles for different websites.",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language"};var $p=[{code:"zh-CN",messages:rc},{code:"zh-TW",messages:ac},{code:"en",messages:oc}],zt={};for(let e of $p)zt[e.code]=e.messages;var Wt="Immersive Translate",ye="immersive-translate";var me="immersiveTranslate",Oo=`${me}Container`,qt=`${me}SpecifiedContainer`,Wr="buildinConfig",tr="localConfig",sc="openOptionsPage",ic="translateLocalPdfFile",lc=`${me}PageTranslatedStatus`,cc=`${me}PageUrlChanged`,My=`${me}ReceiveCommand`,Py=`${me}PopupReceiveMessage`,uc="immersive-translate.owenyoung.com",Ay=`https://${uc}/`,Fo=`https://${uc}/buildin_config.json`,Vt=`${me}Mark`,Ho="immersiveTranslateEffect",Re=`${me}Root`,Uo=`data-${ye}-effect`,Kt=`${me}TranslatedMark`,Gt=`${me}ParagraphId`,nt=`${me}AtomicBlockMark`,rt=`${me}ExcludeMark`,qr=`${me}StayOriginalMark`,bn=`${me}PreWhitespaceMark`,St=`${me}InlineMark`,Jt=`${me}BlockMark`,nr=`${me}Left`,Vr=`${me}Right`,Ry=`${me}Width`,Ny=`${me}Height`,fc=`${me}Top`,dc=`${me}FontSize`;var $o=`${me}GlobalStyleMark`,gc=["@","#"],Kr=" --- ",Bo=`
`,at=`${ye}-target-wrapper`,Gr=`${ye}-pdf-target-container`,pc=`${ye}-target-inner`,Dy=`${ye}-source-wrapper`,jo=`${ye}-target-translation-block-wrapper`,mc=`${ye}-target-translation-pdf-block-wrapper`,hc=`${ye}-target-translation-pre-whitespace`,zo=`${ye}-target-translation-inline-wrapper`,bc=["none","dashed","underline","dashedBorder","mask","dotted","dividingLine","highlight","marker","blockquote","weakening","paper","italic","bold","thinDashed"],yn=["auto","en","zh-CN","zh-TW","ja","af","am","ar","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","de","el","eo","es","et","eu","fa","fi","fil","fj","fr","fy","ga","gd","gl","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","id","ig","is","it","jw","ka","kk","km","kn","ko","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","ms","mt","mww","my","ne","nl","no","ny","otq","pa","pl","ps","pt","ro","ru","sd","si","sk","sl","sm","sn","so","sq","sr","sr-Cyrl","sr-Latn","st","su","sv","sw","ta","te","tg","th","tlh","tlh-Qaak","to","tr","ty","ug","uk","ur","uz","vi","wyw","xh","yi","yo","yua","yue","zu"],Wo={af:"Afrikaans",am:"Amharic",ar:"Arabic",auto:"Detect Language",az:"Azerbaijani",be:"Belarusian",bg:"Bulgarian",tn:"Zana",bn:"Bengali",bs:"Bosnian",ca:"Catalan",ceb:"Cebuano",co:"Corsican",cs:"Czech",cy:"Welsh",da:"Danish",de:"German",el:"Greek",en:"English",eo:"Esperanto",es:"Spanish",et:"Estonian",eu:"Basque",fa:"Farsi",fi:"Finnish",fil:"Filipino",fj:"Fijian",fr:"French",fy:"Frisian",ga:"Irish",gd:"Scottish Gaelic",gl:"Galician",gu:"Gujarati",ha:"Hausa",haw:"Hawaiian",he:"Hebrew",hi:"Hindi",hmn:"Hmong",hr:"Croatian",ht:"Haitian Creole",hu:"Hungarian",hy:"Armenian",id:"Indonesian",ig:"Igbo",is:"Icelandic",it:"Italian",ja:"\u65E5\u672C\u8A9E",jw:"Javanese",ka:"Georgian",kk:"Kazakh",km:"Khmer",kn:"Kannada",ko:"Korean",ku:"Kurdish",ky:"Kyrgyz",la:"Latin",lb:"Luxembourgish",lo:"Lao",lt:"Lithuanian",lv:"Latvian",mg:"Malagash",mi:"Maori",mk:"Macedonian",ml:"Malayalam",mn:"Mongolian",mr:"Marathi",ms:"Malay",mt:"Maltese",mww:"Bai Miao",my:"Burmese",ne:"Nepali",nl:"Dutch",no:"Norwegian",ny:"Nyanza (Chichewa)",otq:"Quer\xE9taro Otomi",pa:"Punjabi",pl:"Polish",ps:"Pashto",pt:"Portuguese (Portugal, Brazil)",ro:"Romanian",ru:"Russian",sd:"Sindhi",si:"Sinhala",sk:"Slovak",sl:"Slovenian",sm:"Samoan",sn:"Shona",so:"Somali",sq:"Albanian",sr:"Serbian","sr-Cyrl":"Serbian (Cyrillic)","sr-Latn":"Serbian (Latin)",st:"Sesotho",su:"Sundanese",sv:"Swedish",sw:"Swahili",ta:"Tamil",te:"Telugu",tg:"Tajik",th:"Thai",tlh:"Klingon","tlh-Qaak":"Klingon (piqaD)",to:"Tongan",tr:"Turkish",ty:"Tahiti",ug:"Uyghur",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",vi:"Vietnamese",wyw:"Classical Chinese",xh:"Bantu",yi:"Yiddish",yo:"Yoruba",yua:"Yucatan Mayan",yue:"Cantonese (Traditional)","zh-CN":"\u7B80\u4F53\u4E2D\u6587","zh-TW":"\u7E41\u9AD4\u4E2D\u6587",zu:"Zulu"};var yc=["toggleTranslatePage","toggleTranslateTheWholePage","toggleTranslateToThePageEndImmediately","toggleTranslateTheMainPage"],xc=["https://immersive-translate.owenyoung.com/options/","http://localhost:8000/dist/userscript/options/","http://192.168.50.9:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com"],Tc="Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post.",vc="\u957F\u591C\u5C06\u81F3\uFF0C\u6211\u4ECE\u4ECA\u5F00\u59CB\u5B88\u671B\uFF0C\u81F3\u6B7B\u65B9\u4F11\u3002\u6211\u5C06\u4E0D\u5A36\u59BB\u3001\u4E0D\u5C01\u5730\u3001\u4E0D\u751F\u5B50\u3002\u6211\u5C06\u4E0D\u6234\u5B9D\u51A0\uFF0C\u4E0D\u4E89\u8363\u5BA0\u3002\u6211\u5C06\u5C3D\u5FE0\u804C\u5B88\uFF0C\u751F\u6B7B\u4E8E\u65AF\u3002",Jr="zh-CN";var qo=class{#e=performance.now();reset(){this.#e=performance.now()}stop(t){let n=performance.now(),r=Math.round(n-this.#e),a=Qe.green;r>1e4?a=Qe.red:r>1e3&&(a=Qe.yellow),console.debug(Qe.dim(Wt+" TIMING:"),t,"in",a(r+"ms")),this.#e=n}},rr=class{#e=1;get level(){return this.#e}setLevel(t){switch(t){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...t){this.#e<=0&&console.log(Qe.dim(Wt+" DEBUG:"),...t)}info(...t){this.#e<=1&&console.log(Qe.green(Wt+" INFO:"),...t)}warn(...t){this.#e<=2&&console.warn(Qe.yellow(Wt+" WARN:"),...t)}error(...t){this.#e<=3&&console.error(Qe.red(Wt+" ERROR:"),...t)}fatal(...t){this.#e<=4&&console.error(Qe.red(Wt+" FATAL:"),...t)}timing(){return this.level===0?new qo:{reset:()=>{},stop:()=>{}}}},q=new rr;var Vo=/iPhone/i,wc=/iPod/i,Sc=/iPad/i,Ec=/\biOS-universal(?:.+)Mac\b/i,Ko=/\bAndroid(?:.+)Mobile\b/i,Cc=/Android/i,xn=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,Yr=/Silk/i,Et=/Windows Phone/i,Lc=/\bWindows(?:.+)ARM\b/i,kc=/BlackBerry/i,_c=/BB10/i,Mc=/Opera Mini/i,Pc=/\b(CriOS|Chrome)(?:.+)Mobile/i,Ac=/Mobile(?:.+)Firefox\b/i,Rc=e=>typeof e<"u"&&e.platform==="MacIntel"&&typeof e.maxTouchPoints=="number"&&e.maxTouchPoints>1&&typeof globalThis.MSStream>"u";function Bp(e){return t=>t.test(e)}function Xr(e){let t={userAgent:"",platform:"",maxTouchPoints:0};!e&&typeof navigator<"u"?t={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof e=="string"?t.userAgent=e:e&&e.userAgent&&(t={userAgent:e.userAgent,platform:e.platform,maxTouchPoints:e.maxTouchPoints||0});let n=t.userAgent,r=n.split("[FBAN");typeof r[1]<"u"&&(n=r[0]),r=n.split("Twitter"),typeof r[1]<"u"&&(n=r[0]);let a=Bp(n),o={apple:{phone:a(Vo)&&!a(Et),ipod:a(wc),tablet:!a(Vo)&&(a(Sc)||Rc(t))&&!a(Et),universal:a(Ec),device:(a(Vo)||a(wc)||a(Sc)||a(Ec)||Rc(t))&&!a(Et)},amazon:{phone:a(xn),tablet:!a(xn)&&a(Yr),device:a(xn)||a(Yr)},android:{phone:!a(Et)&&a(xn)||!a(Et)&&a(Ko),tablet:!a(Et)&&!a(xn)&&!a(Ko)&&(a(Yr)||a(Cc)),device:!a(Et)&&(a(xn)||a(Yr)||a(Ko)||a(Cc))||a(/\bokhttp\b/i)},windows:{phone:a(Et),tablet:a(Lc),device:a(Et)||a(Lc)},other:{blackberry:a(kc),blackberry10:a(_c),opera:a(Mc),firefox:a(Ac),chrome:a(Pc),device:a(kc)||a(_c)||a(Mc)||a(Ac)||a(Pc)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}var Go="DENO",Qr="CHROME",Zr="FIREFOX";function Nc(e){let t=Qr;try{let n=navigator?.userAgent||"";/firefox/i.test(n)?t=Zr:/deno/i.test(n)&&(t=Go)}catch{}return e===Qr&&t===Qr||e===Zr&&t===Zr||e===Go&&t===Go}function Dc(){return Nc(Qr)}function Ic(){return typeof Deno<"u"}function Jo(){return Nc(Zr)}function Oc(){return!!navigator.maxTouchPoints||"ontouchstart"in document.documentElement}var Fc={addListener:()=>{},removeListener:()=>{},hasListener:()=>{}},Hc={permissions:{contains:()=>{},request:()=>{}},runtime:{onMessage:Fc,openOptionsPage:()=>{},lastError:{message:""}},storage:{sync:{get:()=>{},set:()=>{}}},tabs:{onUpdated:Fc,query:()=>{},sendMessage:()=>{}}};var X;Ic()?X=Hc:X=globalThis.browser;var Yo={get:(e,t,n)=>{let r=t===void 0?e:{[e]:t};return X.storage[n].get(r)},set:(e,t,n)=>X.storage[n].set({[e]:t})};function ea(e,t,n){let[r]=J(()=>typeof t=="function"?t():t),[a]=J(n),[o,i]=J(r),[s,c]=J(!0),[u,l]=J("");ce(()=>{Yo.get(e,r,a).then(d=>{d[e]&&i(d[e]),c(!0),l("")}).catch(d=>{c(!1),l(d)})},[e,r,a]);let f=qn(d=>{let g=typeof d=="function"?d(o):d;q.debug("new settings",g),Yo.set(e,g,a).then(()=>{i(g),c(!0),l("")}).catch(h=>{i(g),c(!1),l(h)})},[a,e,o]);return[o,f,s,u]}function ta(e,t,n){let r=[];return function(){let[o,i,s,c]=ea(e,t,n),u=qn(l=>{for(let f of r)f(l)},[]);return ce(()=>(r.push(i),()=>{r.splice(r.indexOf(i),1)}),[i]),[o,u,s,c]}}function Uc(e,t){return ta(e,t,"local")}function $c(e,t){return ta(e,t,"sync")}var jp="userConfig",zp={},ot=$c(jp,zp);function Rt(e){if(typeof e!="string")return"auto";let t=e.toLowerCase();if(t==="zh"||t==="zh-hans")return"zh-CN";if(t==="zh-hant"||t==="zh-hk")return"zh-TW";if(t==="iw")return"he";if(t==="jv")return"jw";let n=yn.map(a=>a.toLowerCase()),r=n.indexOf(t);if(r===-1)if(t.indexOf("-")>=0){t=t.split("-")[0];let a=n.indexOf(t);return a===-1?"auto":yn[a]}else return"auto";else return yn[r]}function ar(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():y}var te=ar();function xe(){return te.IMMERSIVE_TRANSLATE_USERSCRIPT==="1"}function Bc(){return typeof Deno<"u"}var jc={minVersion:"0.0.20",immediateTranslationTextCount:4e3,interval:36e5,cache:!0,donateUrl:"https://immersive-translate.owenyoung.com/donate.html",feedbackUrl:"https://github.com/immersive-translate/immersive-translate/issues",translationServices:{volcAlpha:{placeholderDelimiters:["{","}"]},volc:{placeholderDelimiters:["{","}"]},tencent:{placeholderDelimiters:["{","}"]},transmart:{placeholderDelimiters:["#","#"]},baidu:{placeholderDelimiters:["#","#"]},caiyun:{placeholderDelimiters:["{","}"]},youdao:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}"]}},shortcuts:{toggleTranslatePage:"Alt+A",toggleTranslateTheWholePage:"Alt+W",toggleTranslateToThePageEndImmediately:"Alt+S"},translationParagraphLanguagePattern:{matches:["www.reddit.com","old.reddit.com","twitter.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","read.readwise.io","www.inoreader.com","mail.google.com","google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},sourceLanguageUrlPattern:{},generalRule:{_comment:"",normalizeBody:"",wrapperPrefix:"smart",wrapperSuffix:"smart",isPdf:!1,isTransformPreTagNewLine:!1,urlChangeDelay:20,isShowUserscriptPagePopup:!0,observeUrlChange:!0,paragraphMinTextCount:8,paragraphMinWordCount:2,blockMinTextCount:32,blockMinWordCount:5,containerMinTextCount:18,lineBreakMaxTextCount:0,globalAttributes:{},globalStyles:{".sr-only":"display:none"},selectors:[],preWhitespaceDetectedTags:["DIV","SPAN"],stayOriginalSelectors:[],additionalSelectors:["h1","section h2","section h3","section h4","main h2","main h3","main h4",".article-title",".article-subtitle",".article_title",".article_subtitle",".article__title",".articleTitle",".Article__content",".title",".abstract",".titleLink",".summary",".content",".headline",".page-content"],atomicBlockTags:[],excludeSelectors:[],additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]"],translationClasses:[],atomicBlockSelectors:[],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","LABEL","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","META"],metaTags:["META","SCRIPT","STYLE","NOSCRIPT"],additionalExcludeTags:[],stayOriginalTags:["CODE","TT","IMG","SUP"],additionalStayOriginalTags:[],inlineTags:["A","ABBR","FONT","ACRONYM","B","INS","DEL","BDO","MARK","BIG","NOBR","CITE","DFN","EM","I","LABEL","Q","S","SMALL","SPAN","STRONG","SUB","SUP","U","KBD","TT","VAR","IMG","CODE","SCRIPT","STYLE","LINK","TIME","META"],additionalInlineTags:[],extraInlineSelectors:[],additionalInlineSelectors:[],extraBlockSelectors:[],allBlockTags:["HGROUP","CONTENT","ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","CANVAS","DD","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","HEADER","FORM","HR","MAIN","NAV","OL","NOSCRIPT","PRE","SECTION","TABLE","TFOOT","UL","VIDEO","P","DIV","H1","H2","H3","H4","H5","H6","UL","LI","OL","BR","PICTURE","TBODY","TR","TD","TH","SOURCE","C-WIZ"],pdfNewParagraphLineHeight:2.4,pdfNewParagraphIndent:1.2,pdfNewParagraphIndentRightIndentPx:130,fingerCountToToggleTranslagePageWhenTouching:4},rules:[{matches:["moz-extension://*/pdf/index.html*"],isPdf:!0,wrapperPrefix:"",wrapperSuffix:"",urlChangeDelay:0,selectors:[".textLayer"],excludeSelectors:[".annotationLayer"],globalStyles:{"div.page":"width: 98%;",".textLayer":"overflow:visible;opacity: 1;"}},{matches:["mail.jabber.org","antirez.com"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.wikipedia.org",excludeSelectors:[".mw-editsection",".mw-cite-backlink","#mw-panel-toc"],stayOriginalSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],extraInlineSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"]},{matches:["twitter.com","mobile.twitter.com","tweetdeck.twitter.com"],selectors:['[data-testid="tweetText"]',".tweet-text",".js-quoted-tweet-text","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)","[data-testid='developerBuiltCardContainer'] > div:nth-child(2)","[data-testid='card.layoutLarge.detail'] > div:nth-child(2)"],extraInlineSelectors:['[data-testid="tweetText"] div']},{matches:["stackoverflow.com","*.stackexchange.com","superuser.com","askubuntu.com","serverfault.com"],additionalSelectors:[".comment-copy"]},{matches:"developer.apple.com/documentation/*",selectors:[".container","h3.title"]},{matches:"news.ycombinator.com",selectors:[".titleline > a",".comment > .commtext",".toptext","a.hn-item-title",".hn-comment-text",".hn-story-title"],excludeSelectors:[".reply"]},{matches:["*.quora.com","quora.com"],additionalSelectors:[".puppeteer_test_question_title",".puppeteer_test_answer_content",".q-text"],globalStyles:{".qu-truncateLines--3":"-webkit-line-clamp: unset;"}},{matches:["old.reddit.com/*/.compact","old.reddit.com/.compact","www.reddit.com/*/.compact","www.reddit.com/.compact"],selectors:[".title > a",".usertext-body"],detectParagraphLanguage:!0},{matches:"old.reddit.com",selectors:["p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0},{matches:"www.reddit.com",selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title']","[data-adclicklocation=media]",".PostContent",".Comment__body","faceplate-batch .md"],detectParagraphLanguage:!0},{matches:"www.reuters.com/",excludeSelectors:["header"]},{matches:"github.com",selectors:[".markdown-title",".markdown-body",".Layout-sidebar p"],excludeSelectors:[".css-truncate","[data-test-selector='commit-tease-commit-message']","div.blob-wrapper-embedded"],detectParagraphLanguage:!0},{matches:"www.facebook.com",selectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],excludeSelectors:["[role=button]"],translationClasses:"immersive-translate-text",detectParagraphLanguage:!0},{matches:"m.youtube.com",selectors:[".comment-text"],atomicBlockSelectors:[".comment-text"],globalStyles:{".comment-text":"max-height:unset;"}},{matches:"www.youtube.com",selectors:["yt-formatted-string[slot=content].ytd-comment-renderer","yt-formatted-string.ytd-video-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title","a#video-title"],wrapperPrefix:"",wrapperSuffix:"",globalStyles:{"ytd-expander.ytd-comment-renderer":"--ytd-expander-max-lines: 1000;","h1.ytd-watch-metadata":"-webkit-line-clamp: unset;max-height: unset;","yt-formatted-string#video-title":"-webkit-line-clamp: unset;max-height: unset;","#video-title":"-webkit-line-clamp: unset;max-height: unset;"},urlChangeDelay:2e3,atomicBlockSelectors:["yt-formatted-string[slot=content].ytd-comment-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title"],detectParagraphLanguage:!0},{matches:"1paragraph.app",selectors:"#book"},{matches:["*.substack.com","newsletter.rootsofprogress.org"],selectors:[".post-preview-title",".post-preview-description",".post",".comment-body"],excludeSelectors:[".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader"],extraBlockSelectors:[".tweet-link-top",".tweet-link-bottom",".expanded-link"]},{matches:["seekingalpha.com/article/*","seekingalpha.com/news/*"],selectors:["[data-test-id=card-container]"],excludeSelectors:["[data-test-id=post-page-meta]","header > div:first-child"]},{matches:"hn.algolia.com",selectors:[".Story_title > a:first-child",".Story_comment > span"]},{matches:"read.readwise.io",selectors:['div[class^="_titleRow_"]','div[class^="_description_"]',"#document-text-content"],detectParagraphLanguage:!0},{matches:["www.inoreader.com","*.inoreader.com"],selectors:[".article_header_title",".article_title_link",".article_content",".article_magazine_title_link"],observeUrlChange:!1,globalStyles:{".article_title_link":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:["scholar.google.com"],wrapperPrefix:`
`,selectors:["h3 a[data-clk]","div.gs_rs"],atomicBlockSelectors:[".gs_rs","h3 a[data-clk]"]},{matches:"mail.google.com",selectors:["h2[data-thread-perm-id]","span[data-thread-id]","div[data-message-id] div[class='']"],detectParagraphLanguage:!0},{matches:"www.producthunt.com",selectors:["h2","div[class^='styles_htmlText__']","[class^='styles_tagline']","a[href^='/discussions/'].fontWeight-600","button[class^='styles_textButton'] > div > span"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.gitbook.io",additionalSelectors:["main"],_comment:"https://midjourney.gitbook.io/docs/user-manual"},{matches:"arxiv.org",additionalSelectors:["h1","blockquote.abstract"]},{matches:"https://discord.com/channels/*",selectors:["li[id^=chat-messages] div[id^=message-content]","h3[data-text-variant='heading-lg/semibold']"],excludeSelectors:["div[class^='repliedTextContent']"],globalStyles:{"div[class^=headerText]":"max-height: unset;","h3[data-text-variant='heading-lg/semibold']":"-webkit-line-clamp: none;"},detectParagraphLanguage:!0,wrapperPrefix:"<br>",wrapperSuffix:"<br><br>"},{matches:"web.telegram.org/z/*",selectors:[".text-content"],detectParagraphLanguage:!0},{matches:["web.telegram.org/k/*","web.telegram.org/k/"],selectors:[".message"],detectParagraphLanguage:!0},{matches:"gist.github.com",selectors:[".markdown-body",".readme"],detectParagraphLanguage:!0},{matches:"lobste.rs",selectors:[".u-repost-of",".comment_text"]},{matches:"*.slack.com",selectors:[".p-rich_text_section"],detectParagraphLanguage:!0},{matches:"1paragraph.app",additionalSelectors:["#book"]},{matches:"www.google.*/search*",detectParagraphLanguage:!0,excludeSelectors:["a h3 + div","div#sfooter"],wrapperSuffix:"",globalStyles:{"div[data-content-feature='1'] > div":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:2']":"-webkit-line-clamp: unset;max-height: unset;"},extraBlockSelectors:[".MUFPAc"]},{matches:"lowendtalk.com",selectors:["[role=heading]","h1",".userContent"]},{matches:"www.linkedin.com/jobs/*",selectors:["#job-details > span"]},{matches:"www.linkedin.com",addtionalSelectors:["span.break-words > span > span[dir=ltr]"]},{matches:"www.indiehackers.com",selectors:[".content","h1",".feed-item__title-link"]},{matches:"libreddit.de",selectors:["h2.post_title",".comment_body > .md"]},{matches:["notion.site","www.notion.so"],selectors:["div[data-block-id]"]},{matches:"www.newyorker.com",additionalSelectors:["h1","[data-testid=SummaryItemHed]"]},{matches:"start.me",selectors:[".rss-article__title",".rss-articles-list__article-link",".rss-showcase__title",".rss-showcase__text"]},{matches:"www.scmp.com",additionalSelectors:[".info__subHeadline",".section-content h2"]},{matches:"www.lesswrong.com",extraBlockSelectors:["span.commentOnSelection"]},{matches:["mastodon.social","mastodon.online","kolektiva.social","indieweb.social","mastodon.world","infosec.exchange"],selectorMatches:["div#mastodon"],selectors:["div.status__content__text"],detectLanguage:!0},{matches:"www.cnbc.com",additionalSelectors:["div.RenderKeyPoints-list"]},{matches:"app.daily.dev",selectors:["h1",".typo-body","article h3","[class^=markdown_markdown]"],globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset"}},{matches:"www.aljazeera.com",addtionalSelectors:["h1",".article__subhead"]},{matches:["*.pornhub.com","pornhub.com"],selectors:[".title >a",".title > span",".thumbnailTitle",".commentMessage > span"],detectParagraphLanguage:!0,wrapperPrefix:`

`,wrapperSuffix:`
`,globalStyles:{".title":"height: unset; max-height: unset;"}},{matches:["weibo.com"],selectors:["div[class^='detail_wbtext']"]},{matches:["medium.com","*.medium.com"],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],urlChangeDelay:2e3,selectors:["article section","h2","[aria-hidden='false'] pre","article p"],excludeSelectors:["[aria-label='Post Preview Reading Time']"],globalStyles:{h2:"-webkit-line-clamp: unset;max-height:unset;","article p":"-webkit-line-clamp: unset;max-height:unset;"}},{selectorMatches:["meta[property='og:site_name'][content='Nitter']"],selectors:[".tweet-content",".quote-text"]},{matches:"*.fandom.com",additionalSelectors:[".mcf-card-article__title"]},{matches:["www.washingtonpost.com"],additionalSelectors:["[data-qa='article-body']"]},{matches:"www.economist.com",extraInlineSelectors:"span[data-caps='initial']"},{matches:"www.healthline.com",excludeSelectors:".icon-hl-trusted-source-after"},{matches:"www.amazon.com",selectors:["h1","h2 > a > span","[data-a-expander-name='book_description_expander'] > div","[data-feature-name='editorialReviews']",'[data-a-expander-name="review_text_read_more"] > div > span','[data-feature-name="featurebullets"]','[data-feature-name="aplus"'],excludeBlockSelectors:["div.reviewText > span"],globalStyles:{".s-line-clamp-2":"-webkit-line-clamp: unset;max-height: unset;","[data-a-expander-name='review_text_read_more']":" max-height: unset;"}},{matches:"www.bloomberg.com",urlChangeDelay:2e3},{matches:"xueshu.baidu.com",globalStyles:{".abstract_wr":"height: unset; overflow: visible; max-height:unset;"}},{matches:"www.sciencedirect.com",urlChangeDelay:2e3},{matches:"www.thehighestofthemountains.com",extraBlockSelectors:"div"},{matches:"telegra.ph",normalizeBody:"div.ql-editor[contenteditable='false']"},{matches:["*.annas-archive.org","annas-archive.org"],selectors:["div[class='truncate text-xl font-bold']","div[class='truncate text-sm']"],globalStyles:{"div[id^='link-index-']":"height: unset; max-height: unset;"},normalizeBody:"body",extraBlockSelectors:["a.custom-a"]},{matches:["explainshell.com"],selectors:["[class='help-box']"]},{matches:["apnews.com"],urlChangeDelay:2e3},{matches:"play.google.com",additionalSelectors:["header[data-review-id] + div"]}]};function Xo(e){return Array.isArray(e)?e:e?[e]:[]}function Tn(e,t){return t?(Array.isArray(t)||(t=[t]),Array.from(new Set([...t,e]))):[e]}function xt(e,t){return t?(Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),t.filter(n=>!e.includes(n))):[]}function na(e,t){let n=[],r=Object.keys(e);for(let i of r){let s=e[i];Array.isArray(s)&&n.push(i)}let a=e;return Object.keys(t).forEach(i=>{let s=t[i];if(s!==void 0)if(!n.includes(i))a[i]=s;else if(i.startsWith("additional")){let c=Xo(s);a[i]=Array.from(new Set([...a[i],...c]))}else a[i]=Xo(s)}),a}function Yt(){if(te.PROD==="1")return{};let e={};if(te.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID&&te.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY){let t={secretId:te.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,secretKey:te.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY};e.translationServices={},e.translationServices.tencent=t}if(te.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID&&te.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY){let t={appid:te.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,key:te.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY};e.translationServices||(e.translationServices={}),e.translationServices.baidu=t}if(te.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN){let t={token:te.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN};e.translationServices||(e.translationServices={}),e.translationServices.caiyun=t}if(te.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY){let t={apikey:te.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY};e.translationServices||(e.translationServices={}),e.translationServices.openl=t}if(te.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID&&te.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET){let t={appId:te.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,appSecret:te.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET};e.translationServices||(e.translationServices={}),e.translationServices.youdao=t}if(te.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID&&te.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY){let t={accessKeyId:te.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,secretAccessKey:te.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY};e.translationServices||(e.translationServices={}),e.translationServices.volc=t}if(te.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY){let t={authKey:te.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY};e.translationServices||(e.translationServices={}),e.translationServices.deepl=t}return te.IMMERSIVE_TRANSLATE_SERVICE&&(e.translationService=te.IMMERSIVE_TRANSLATE_SERVICE),te.DEBUG==="1"&&(e.debug=!0,e.cache=!1,e.alpha=!0),te.MOCK==="1"&&(e.translationService="mock"),e}async function ra(){let e=await X.storage.local.get(tr);return e[tr]?e[tr]:{}}async function vn(){await X.storage.local.set({[tr]:{}})}async function Ee(){let e=await X.storage.local.get(Wr),t={...jc,buildinConfigUpdatedAt:te.BUILD_TIME};if(e[Wr]){let d=e[Wr],g=new Date(d.buildinConfigUpdatedAt),h=new Date(t.buildinConfigUpdatedAt);g>h&&(t=d)}let n={};if(!xe()){let d=await X.commands.getAll();for(let g of d)g.name&&g.shortcut&&(n[g.name]=g.shortcut)}let r={...t,targetLanguage:Jr,interfaceLanguage:"en",debug:!1,alpha:!1,translationUrlPattern:{matches:[],excludeMatches:[]},translationLanguagePattern:{matches:[],excludeMatches:[]},translationThemePatterns:{},translationParagraphLanguagePattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationBodyAreaPattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationTheme:"none",translationService:"google",translationArea:"main",translationStartMode:"dynamic",translationServices:{},generalRule:t.generalRule,translationGeneralConfig:{engine:"google"},rules:[]},a=Yt(),i=(await X.storage.sync.get("userConfig")||{}).userConfig||{},s=globalThis.IMMERSIVE_TRANSLATE_CONFIG||{},c=Object.assign({},s,a,i);if(!c.interfaceLanguage){let d=await Wp();c.interfaceLanguage=d}let u=Object.assign(r,t),l=Object.keys(u),f=["translationUrlPattern","translationLanguagePattern","translationBodyAreaPattern","translationParagraphLanguagePattern","translationThemePatterns","translationGeneralConfig","shortcuts"];for(let d of l){let g=d;if(g==="generalRule")typeof c[g]=="object"&&(u[g]=na(r[g],c[g]));else if(g==="translationServices"){let h=c[g]||{},x=t[g]||{},b=Object.keys(x),m=Object.keys(h),T=[...new Set([...b,...m])],w={};for(let C of T)w[C]={...x[C],...h[C]};u[g]=w}else if(typeof c[g]!="string"&&typeof c[g]!="boolean"&&typeof c[g]!="number"&&f.includes(g))c[g]&&(u[g]=Object.assign(u[g],c[g])),g==="shortcuts"&&(u[g]={...u[g],...n});else if(g==="rules"){if(Array.isArray(c[g])&&(u[g]=[...c[g],...u[g]]),te.PROD==="0"&&te.DEV_RULES){let h=JSON.parse(te.DEV_RULES);u[g]=[...h,...u[g]]}}else c[g]!==void 0&&(u[g]=c[g])}return u.donateUrl=t.donateUrl,u.minVersion=t.minVersion,u.feedbackUrl=t.feedbackUrl,u}var Wp=async()=>{let n=(await X.i18n.getAcceptLanguages()).map(r=>Rt(r)).find(r=>zt[r]);return n||"en"};async function Zo(e){if(Math.abs(e)<1024)return e+" B";let n=["KB","MB","GB","TB","PB","EB","ZB","YB"],r=-1;do e/=1024,++r;while(Math.abs(e)>=1024&&r<n.length-1);return e.toFixed(1)+" "+n[r]}function zc(e,t,n){let r=qp(e,t),a=[],o={from:e[0].from,to:e[0].to,tempSentences:[],url:e[0].url};for(let i of r)(o.tempSentences.reduce((c,u)=>c+u.text.length,0)+i.text.length>t||o.tempSentences.length>=n)&&(a.push(o),o={from:i.from,to:i.to,tempSentences:[],url:i.url}),(o.from!==i.from||o.to!==i.to)&&(o.tempSentences.length>0?(a.push(o),o={from:i.from,to:i.to,tempSentences:[],url:i.url}):(o.from=i.from,o.to=i.to)),o.tempSentences.push(i);return o.tempSentences.length>0&&a.push(o),a}function qp(e,t){let n=[];for(let r=0;r<e.length;r++){let a=e[r],{from:o,to:i,text:s,url:c}=a,u=s.split(/\r?\n/),l=[],f="";for(let d=0;d<u.length;d++){let g=u[d];if(g===""){l.length>0?d<u.length-1&&(l[l.length-1].suffix+=`
`):f+=`
`;continue}else if(g.length>t){let h=[];Qo(g,t,h);for(let x=0;x<h.length;x++){let b=h[x],{text:m,prefix:T,suffix:w}=b;l.push({from:o,to:i,text:m,prefix:T,suffix:w,index:r,url:c})}}else l.push({text:g,prefix:f,suffix:"",from:o,to:i,index:r,url:c});l.length>0&&d<u.length-1&&(l[l.length-1].suffix+=`
`)}n.push(...l)}return n}function or(e,t){let n=Rt(e),r=Rt(t),a=n===r;return a?!0:(a=n.startsWith("zh")&&r.startsWith("zh"),a)}function Qo(e,t,n){let a=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((o,i)=>{let s=e.lastIndexOf(i,t);return s>o?s:o},-1);if(a===-1)n.push({text:e.slice(0,t),prefix:"",suffix:""}),e.length>t&&Qo(e.slice(t),t,n);else{let o=e.slice(0,a+1);o.startsWith(" ")?n.push({text:o.slice(1),prefix:" ",suffix:""}):n.push({text:o,prefix:"",suffix:""}),a+1<e.length&&Qo(e.slice(a+1),t,n)}return n}var Be=class extends Error{constructor(n,r,a){super(r);this.name=n,a&&(this.details=a)}};async function wn(e){e.body;let{url:t,responseType:n,...r}=e;n||(n="json"),r={mode:"cors",...r};let o=await(e.fetchPolyfill||fetch)(t,r);if(o.ok&&o.status>=200&&o.status<400){if(n==="json")return await o.json();if(n==="text")return await o.text();if(n==="raw"){let i=await o.text(),s=Object.fromEntries([...o.headers.entries()]),c=o.url;return c||(o.headers.get("X-Final-URL")?c=o.headers.get("X-Final-URL"):c=t),{body:i,headers:s,status:o.status,statusText:o.statusText,url:c}}}else{let i;try{i=await o.text()}catch(s){q.error("parse response failed",s)}throw new Be("fetchError",o.status+": "+o.statusText||"",i)}}function Nt(e,t){var n=(e&65535)+(t&65535),r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}function Vp(e,t){return e<<t|e>>>32-t}function oa(e,t,n,r,a,o){return Nt(Vp(Nt(Nt(t,e),Nt(r,o)),a),n)}function je(e,t,n,r,a,o,i){return oa(t&n|~t&r,e,t,a,o,i)}function ze(e,t,n,r,a,o,i){return oa(t&r|n&~r,e,t,a,o,i)}function We(e,t,n,r,a,o,i){return oa(t^n^r,e,t,a,o,i)}function qe(e,t,n,r,a,o,i){return oa(n^(t|~r),e,t,a,o,i)}function aa(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;var n,r,a,o,i,s=1732584193,c=-271733879,u=-1732584194,l=271733878;for(n=0;n<e.length;n+=16)r=s,a=c,o=u,i=l,s=je(s,c,u,l,e[n],7,-680876936),l=je(l,s,c,u,e[n+1],12,-389564586),u=je(u,l,s,c,e[n+2],17,606105819),c=je(c,u,l,s,e[n+3],22,-1044525330),s=je(s,c,u,l,e[n+4],7,-176418897),l=je(l,s,c,u,e[n+5],12,1200080426),u=je(u,l,s,c,e[n+6],17,-1473231341),c=je(c,u,l,s,e[n+7],22,-45705983),s=je(s,c,u,l,e[n+8],7,1770035416),l=je(l,s,c,u,e[n+9],12,-1958414417),u=je(u,l,s,c,e[n+10],17,-42063),c=je(c,u,l,s,e[n+11],22,-1990404162),s=je(s,c,u,l,e[n+12],7,1804603682),l=je(l,s,c,u,e[n+13],12,-40341101),u=je(u,l,s,c,e[n+14],17,-1502002290),c=je(c,u,l,s,e[n+15],22,1236535329),s=ze(s,c,u,l,e[n+1],5,-165796510),l=ze(l,s,c,u,e[n+6],9,-1069501632),u=ze(u,l,s,c,e[n+11],14,643717713),c=ze(c,u,l,s,e[n],20,-373897302),s=ze(s,c,u,l,e[n+5],5,-701558691),l=ze(l,s,c,u,e[n+10],9,38016083),u=ze(u,l,s,c,e[n+15],14,-660478335),c=ze(c,u,l,s,e[n+4],20,-405537848),s=ze(s,c,u,l,e[n+9],5,568446438),l=ze(l,s,c,u,e[n+14],9,-1019803690),u=ze(u,l,s,c,e[n+3],14,-187363961),c=ze(c,u,l,s,e[n+8],20,1163531501),s=ze(s,c,u,l,e[n+13],5,-1444681467),l=ze(l,s,c,u,e[n+2],9,-51403784),u=ze(u,l,s,c,e[n+7],14,1735328473),c=ze(c,u,l,s,e[n+12],20,-1926607734),s=We(s,c,u,l,e[n+5],4,-378558),l=We(l,s,c,u,e[n+8],11,-2022574463),u=We(u,l,s,c,e[n+11],16,1839030562),c=We(c,u,l,s,e[n+14],23,-35309556),s=We(s,c,u,l,e[n+1],4,-1530992060),l=We(l,s,c,u,e[n+4],11,1272893353),u=We(u,l,s,c,e[n+7],16,-155497632),c=We(c,u,l,s,e[n+10],23,-1094730640),s=We(s,c,u,l,e[n+13],4,681279174),l=We(l,s,c,u,e[n],11,-358537222),u=We(u,l,s,c,e[n+3],16,-722521979),c=We(c,u,l,s,e[n+6],23,76029189),s=We(s,c,u,l,e[n+9],4,-640364487),l=We(l,s,c,u,e[n+12],11,-421815835),u=We(u,l,s,c,e[n+15],16,530742520),c=We(c,u,l,s,e[n+2],23,-995338651),s=qe(s,c,u,l,e[n],6,-198630844),l=qe(l,s,c,u,e[n+7],10,1126891415),u=qe(u,l,s,c,e[n+14],15,-1416354905),c=qe(c,u,l,s,e[n+5],21,-57434055),s=qe(s,c,u,l,e[n+12],6,1700485571),l=qe(l,s,c,u,e[n+3],10,-1894986606),u=qe(u,l,s,c,e[n+10],15,-1051523),c=qe(c,u,l,s,e[n+1],21,-2054922799),s=qe(s,c,u,l,e[n+8],6,1873313359),l=qe(l,s,c,u,e[n+15],10,-30611744),u=qe(u,l,s,c,e[n+6],15,-1560198380),c=qe(c,u,l,s,e[n+13],21,1309151649),s=qe(s,c,u,l,e[n+4],6,-145523070),l=qe(l,s,c,u,e[n+11],10,-1120210379),u=qe(u,l,s,c,e[n+2],15,718787259),c=qe(c,u,l,s,e[n+9],21,-343485551),s=Nt(s,r),c=Nt(c,a),u=Nt(u,o),l=Nt(l,i);return[s,c,u,l]}function Wc(e){var t,n="",r=e.length*32;for(t=0;t<r;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function es(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var r=e.length*8;for(t=0;t<r;t+=8)n[t>>5]|=(e.charCodeAt(t/8)&255)<<t%32;return n}function Kp(e){return Wc(aa(es(e),e.length*8))}function Gp(e,t){var n,r=es(e),a=[],o=[],i;for(a[15]=o[15]=void 0,r.length>16&&(r=aa(r,e.length*8)),n=0;n<16;n+=1)a[n]=r[n]^909522486,o[n]=r[n]^1549556828;return i=aa(a.concat(es(t)),512+t.length*8),Wc(aa(o.concat(i),512+128))}function qc(e){var t="0123456789abcdef",n="",r,a;for(a=0;a<e.length;a+=1)r=e.charCodeAt(a),n+=t.charAt(r>>>4&15)+t.charAt(r&15);return n}function ts(e){return unescape(encodeURIComponent(e))}function Vc(e){return Kp(ts(e))}function Jp(e){return qc(Vc(e))}function Kc(e,t){return Gp(ts(e),ts(t))}function Yp(e,t){return qc(Kc(e,t))}function Sn(e,t,n){return t?n?Kc(t,e):Yp(t,e):n?Vc(e):Jp(e)}var En=[];async function sr(e,t){return await new Promise((n,r)=>{let a=e,o=1,i=indexedDB.open(a,o);i.onsuccess=s=>{n(i.result)},i.onerror=s=>{console.error("onerror: Error opening the database, switching to non-database mode",s),r()},i.onupgradeneeded=s=>{let c=i.result,u=t||"cache";c.createObjectStore(u,{keyPath:"key"})}})}async function ns(e){let t=`${ye}-${e.service}@${e.from}->${e.to}`;return await Qp(t,e)}async function rs(e){let t=Sn(e.originalText),n=`${ye}-${e.service}@${e.from}->${e.to}`;return await Xp(n,t)}async function Xp(e,t){let n=await sr(e);return await new Promise((r,a)=>{if(!n)return a();let o="cache",s=n.transaction([o],"readonly").objectStore(o).get(t);s.onsuccess=c=>{n.close();let u=s.result;r(u)},s.onerror=c=>{n.close(),console.error("queryInDB->onerror:",c),a()}})}async function Qp(e,t){let n=await sr(e);return(await as()).includes(e)||await Zp(e),await new Promise(a=>{if(!n)return a(!1);let o="cache",s=n.transaction([o],"readwrite").objectStore(o).put(t);s.onsuccess=c=>{n.close(),a(!0)},s.onerror=c=>{console.error("addInDB->onerror:",c),n.close(),a(!1)}})}async function Zp(e){let t="cache_list",n=await sr(ye+"-cacheList",t),a=n.transaction([t],"readwrite").objectStore(t).put({key:e});a.onsuccess=o=>{n.close(),En.push(e)},a.onerror=o=>{n.close(),console.error(o)}}async function as(){if(En&&En.length>0)return En;let e=await sr(ye+"-cacheList","cache_list");return En=await new Promise(t=>{let n="cache_list",a=e.transaction([n],"readonly").objectStore(n).getAllKeys();a.onsuccess=o=>{e.close(),t(a.result)},a.onerror=o=>{e.close(),console.error(o),t([])}}),En}async function os(){try{let e=[];(await as()).forEach(r=>{e.push(em(r))});let n=await Promise.all(e);return Zo(n.reduce((r,a)=>r+a,0))}catch(e){return console.error(e),Zo(0)}}async function em(e){let t=await sr(e),r=[...t.objectStoreNames].reduce((i,s)=>{let c=tm(t,s);return i.push(c),i},[]),a=await Promise.all(r);return t.close(),a.reduce((i,s)=>i+s,0)}async function tm(e,t){return await new Promise((n,r)=>{if(e==null)return r();let a=0,o=e.transaction([t]).objectStore(t).openCursor();o.onsuccess=i=>{let s=o.result;if(s){let c=s.value;a+=JSON.stringify(c).length,s.continue()}else n(a)},o.onerror=i=>r("error in "+t+": "+i)})}async function Gc(){try{let t=(await as()).map(r=>nm(r));return!!(await Promise.all(t)).every(r=>r)}catch(e){return console.error("deleteAll error",e),!1}}async function nm(e){return await new Promise(t=>{let n=indexedDB.deleteDatabase(e);n.onsuccess=()=>{t(!0)},n.onerror=r=>{t(!1)}})}var rm=/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,am=/[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g,om=/[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,sm=/(\s+)|([\p{P}\p{S}])/gu,im=[["zh-CN",rm],["ja",am],["ko",om]];function Jc(e){if(!e)return"auto";let t="auto",n=0,r=0,a=e.match(sm);a&&(r=a.reduce((i,s)=>i+s.length,0));let o=e.length-r;for(let i of im){let s=i[1],c=i[0],u=e.match(s),l=u?u.length:0;l>n&&(n=l,t=c)}return n*2.5/o>.5?t:"auto"}var lm=ar(),ir=lm.PROD==="1";function Yc(e,t,n){let r=e.querySelectorAll("footer"),a=e.querySelectorAll("aside"),o=Array.from(r).concat(Array.from(a)),i=e.querySelectorAll("header"),s=e.querySelectorAll("main"),c=[];for(let l of i)s.length>0&&s[0].contains(l)||c.push(l);for(let l=0;l<t.length;l++){let f=t[l].element;for(let d=l+1;d<t.length;d++){let g=t[d].element;if(f.contains(g))t.splice(d,1),d--;else if(g.contains(f)){t.splice(l,1),l--;break}else f===g&&(t.splice(d,1),d--)}}return t.filter(l=>{let f=l.element;if(l.reserve)return!0;let d=!1,g=!1;for(let h of o)if(f===h||h.contains(f)){d=!0;break}if(d)return!1;for(let h of c){if(f.nodeName==="H1")continue;let x=h.querySelector("h1");if(!(x&&eu(x.textContent||"",n.paragraphMinTextCount,n.paragraphMinWordCount))&&(f===h||h.contains(f))){g=!0;break}}return!g}).map(l=>l.element)}function Cn(e){for(let t=e.length-1;t>=0;t--){let n=e[t].element||e[t];if(typeof n!="string")return n}return null}function sa(e){let t=[];for(let n=e.length-1;n>=0;n--){let r=e[n].element||e[n];typeof r!="string"&&t.push(r)}return t}function is(e){for(let t=0;t<e.length;t++){let n=e[t];if(typeof n!="string")return n}return null}function lr(e,t){return e&&e.nodeType===Node.TEXT_NODE&&e.textContent&&e.textContent?.length>0?t?e.textContent:" ":null}function st(e,t){let n=[];for(let r of t){let a=e.querySelectorAll(r);for(let o of a)n.push(o)}return n}function cm(e,t){let n=function(o){return o.nodeType===Node.ELEMENT_NODE||o.nodeType===Node.TEXT_NODE?o.nodeType===Node.ELEMENT_NODE&&Je(o,t,!0)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,n),a=!0;for(;r.nextNode();){let o=r.currentNode;if(o.nodeType===Node.ELEMENT_NODE){if(re(o,St)){if(a===!0)return!0;continue}if(!t.inlineTags.includes(o.nodeName))return!1}}return!0}function ct(e,t){let n=t.inlineTags;return e.nodeType===Node.ELEMENT_NODE?n.includes(e.nodeName)?re(e,Jt)||e.nodeName==="BR"?!1:re(e,St)?!0:cm(e,t):re(e,St):!1}function Xc(e,t){for(let n of t)if(n===e)return!0;return!1}function Qc(e,t){return!!t.metaTags.includes(e.nodeName)}function Je(e,t,n){if(!(e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE))return!0;let{stayOriginalTags:r,excludeTags:a}=t,o=[];return n&&a&&a.length>0?o=a||[]:o=a.filter(i=>!r.includes(i)),e.nodeType===Node.ELEMENT_NODE&&e.isContentEditable||e.nodeType===Node.ELEMENT_NODE&&re(e,rt)?!0:e.nodeType===Node.ELEMENT_NODE&&re(e,qt)?!1:!!o.includes(e.nodeName)}function Zc(e,t,n,r){let a=cr(r),o=new RegExp(`^${a[0]}(\\d+)${a[1]}$`),i=e.text,s=i.trim();return s===""||s.length===1&&s.charCodeAt(0)===8203||/^\d+(,\d+)*(\.\d+)?$/.test(i)||s.includes("</style>")||s.includes("< styles>")||us(s)||ls(s)||cs(s)||o.test(s)?!1:eu(i,t,n)}function eu(e,t,n){let r=e.trim();return r.length>=t||r.split(" ").length>=n}function ls(e){if(e&&e.includes("://"))try{return new URL(e),!0}catch{return!1}else return!1}function cs(e){return!!(e&&e.startsWith("#")&&e.indexOf(" ")===-1)}function us(e){return!!(e&&e.startsWith("@")&&e.indexOf(" ")===-1)}function tu(e){return!!(e&&e.startsWith("$")&&e.indexOf(" ")===-1)}function re(e,t){return um(e,t,"1")}function um(e,t,n){return ir?e[Re]?!!(e[Re]&&e[Re][t]===n):!1:e.dataset[t]===n}function nu(e,t){return ir?e[Re]?!!(e[Re]&&e[Re][t]):!1:e.dataset[t]!==void 0}function ss(e){return e.replace(/\s/g," ")}function ia(e){let t=e.querySelector("main"),n="";if(t&&(n=ss(t.innerText||t.textContent||"")),n.length>=10)return n;let r=e.querySelectorAll("article");if(r.length>0)for(let a of r)n=ss(a.innerText||a.textContent||"");return n.length>=10||(n=ss(e.innerText||e.textContent||"")),n}function fs(e){return e?typeof e=="string"?document.querySelector(e)!==null:e.some(t=>document.querySelector(t)):!1}function ie(e,t,n){e.isContentEditable||(e.dataset[Ho]||(e.dataset[Ho]="1"),ir?(e[Re]||(e[Re]={}),e[Re][t]||(e[Re][t]=n)):e.dataset[t]!==n&&(e.dataset[t]=n))}function ru(e,t){if(ir){if(!e[Re]||!e[Re][t])return;delete e[Re][t]}else delete e.dataset[t]}function Dt(e,t){return ir?!e[Re]||!e[Re][t]?void 0:e[Re][t]:e.dataset[t]}function Ln(e,t){let n=!1;return(t.stayOriginalTags.includes(e.nodeName)||re(e,qr))&&(n=!0),n}function au(e,t){return!t.allBlockTags.concat(t.inlineTags).concat(t.excludeTags).includes(e.nodeName)}function cr(e){let{config:t}=e,n=gc;return t.translationServices[e.translationService]&&t.translationServices[e.translationService].placeholderDelimiters&&(n=t.translationServices[e.translationService].placeholderDelimiters),n}function la(e,t){if(!t)return!1;Array.isArray(t)||(t=[t]);for(let n of t)if(e.querySelector(n))return!0;return!1}function ou(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,r=>r.textContent&&r.textContent.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT),n=null;for(;t.nextNode();)n=t.currentNode;return n?n.parentElement:null}function ds(e,t){let{excludeSelectors:n,additionalExcludeSelectors:r,extraInlineSelectors:a,additionalInlineSelectors:o,extraBlockSelectors:i,atomicBlockSelectors:s,atomicBlockTags:c,globalStyles:u,stayOriginalTags:l,stayOriginalSelectors:f,globalAttributes:d}=t,g=Object.keys(u);if(g.length>0)for(let E of g){let D=st(document.body,[E]);for(let $ of D)if(!re($,$o)){ie($,$o,"1");let A=u[E];$.style.cssText+=A}}let h=Object.keys(d);if(h.length>0)for(let E of h){let D=d[E],$=Object.keys(D),A=st(document.body,[E]);for(let W of A)for(let O of $){let Y=D[O];W.getAttribute(O)!==Y&&(Y===null?W.removeAttribute(O):W.setAttribute(O,Y))}}let x=[...n,...r],b=[...a,...o],m=[...s],T=c.map(E=>E.toLowerCase()),w=i;st(document.body,x).forEach(E=>{re(E,rt)||ie(E,rt,"1")});let F=[];if(m.length>0&&(F=st(document.body,m).filter(E=>!re(E,nt))),T.length>0){let E=l.reduce((A,W)=>{let O=W.toLowerCase();return A.push(`<${O}>`,`</${O}>`,`<${O} />`),A},[]),D=[">http://",">https://"];E.push(...D);let $=st(document.body,T).filter(A=>{if(re(A,nt))return!1;{let O=A.innerHTML;return!E.some(I=>O.includes(I))}});F.push(...$)}F.forEach(E=>{re(E,nt)||ie(E,nt,"1")});let _=[];if(b.length>0)for(let E of e)_.push(...st(E,b));_.forEach(E=>{ie(E,St,"1")});let z=[];if(w.length>0)for(let E of e)z.push(...st(E,w));z.forEach(E=>{ie(E,Jt,"1")});let ue=[];if(f.length>0)for(let E of e)ue.push(...st(E,f));ue.forEach(E=>{ie(E,qr,"1")})}function su(e,t){let n=t.matches||[];if(n&&!Array.isArray(n)&&(n=[n]),n.length===0)return!1;if(n.length>0){if(n.includes(e))return!0;for(let r of n)if(r.includes("*")&&new RegExp(r).test(e))return!0}return!1}async function iu(){let e="auto";return document.body&&document.body.textContent&&document.body.textContent.trim()&&(e=await ut({text:ia(document.body)})),e==="auto"&&document.documentElement&&document.documentElement.lang&&(e=Rt(document.documentElement.lang)),e}function gs(e,t){if(!(e&&e.textContent&&e.textContent.trim()))return[];let{rule:n,state:{translationArea:r}}=t,a=[];if(r==="body")return[e];if(n&&n.selectors.length>0){let i=n.selectors.map(s=>{let c=e.matches(s),u=[];c?u=[e]:u=e.querySelectorAll(s);for(let l of u)re(l,qt)||ie(l,qt,"1");return Array.from(u)}).flat();a.push(...i.map(s=>({element:s,reserve:!0})))}else{if(n&&n.additionalSelectors.length>0){let f=st(e,n.additionalSelectors);for(let d of f)re(d,qt)||ie(d,qt,"1");a.push(...f.map(d=>({element:d,reserve:!0})))}let i=st(e,["article"]);a.push(...i.map(f=>({element:f,reserve:!0})));let s;if(a.length===0&&(s=e.querySelectorAll("[role=main]"),s.length===0&&(s=e.querySelectorAll("main")),s.length===0&&(s=e.querySelectorAll(".main")),s.length>0)){let f=Array.from(s);a=a.concat(f.map(d=>({element:d,reserve:!0})))}let c=[],u=f=>{if(f.nodeType===Node.ELEMENT_NODE&&Je(f,t.rule,!1))return NodeFilter.FILTER_REJECT;if(f.nodeType===Node.TEXT_NODE&&(f.textContent?f.textContent.trim():"").length>=n.containerMinTextCount){let g=f.parentNode;g&&g.parentNode&&(g=g.parentNode),g&&g.nodeType===Node.ELEMENT_NODE&&(c.includes(g)||c.push(g))}return NodeFilter.FILTER_ACCEPT},l=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,u);for(;l.nextNode(););a.push(...c.map(f=>({element:f,reserve:!1})))}let o=Yc(e,a,n);return o.sort(function(i,s){return i.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}),o}var ps=[];function lu(e){ps.push(e)}function ms(){ps.forEach(e=>e()),ps=[]}var uu="auto",ca="auto",cu="auto";function fu(e){uu=e}function ua(e){ca=e}function hs(){return ca!=="auto"?ca:cu!=="auto"?cu:uu}function du(){return ca}function ft(e,t,n){let r=[],{rule:a}=n,o=cr(n);if(e.length===0)return null;e=e.map(d=>d.element?d:{element:d});let i="",s=!1;for(let d=0;d<e.length;d++){let h=e[d].element;if(typeof h=="string"){i+=h;continue}let x="";la(h,`[${rt}]`)?x=fm(h):x=h.innerText;let b=x.startsWith(" "),m=x.endsWith(" ");h.tagName==="A"&&(b=!0,m=!0);let T=Ln(h,a);if(x===""||T){T&&(b=!0,m=!0);let w={type:"element",value:h};r.push(w);let C=r.length-1,F=`${o[0]}${C}${o[1]}`;i+=(b?" ":"")+F+(m?" ":"");continue}if(!Je(h,a,!0)){{let w=t?x:x.trim().replace(/\n/g," ");if(ls(w)||cs(w)||us(w)||tu(w)){let C={type:"element",value:h};r.push(C);let F=r.length-1,_=`${o[0]}${F}${o[1]}`;i+=(b?" ":"")+_+(m?" ":"")}else s=!0,i+=(b?" ":"")+w+(m?" ":"")}if(typeof h!="string"){let w=lr(h.nextSibling,t);w&&(i+=w)}}}if(!s)return null;let c=!1,u=i.split(" ").length,l=i.split(`
`).length;u<=a.blockMinWordCount&&i.length<=a.blockMinTextCount&&l<2&&(c=!0);let f={elements:e.map(d=>d.element),text:i,variables:r,inline:c,preWhitespace:t};return Zc(f,n.state.translationArea==="body"?2:a.paragraphMinTextCount,n.state.translationArea==="body"?1:a.paragraphMinWordCount,n)?f:null}function fm(e){let t="",n=a=>a.nodeType===Node.ELEMENT_NODE?re(a,rt)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:a.nodeType===Node.TEXT_NODE?(a.textContent&&a.textContent.trim()!==""&&(t+=a.textContent.replace(/\s+/g," ")),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT,r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,n);for(;r.nextNode(););return t}var dm=1,kn=new Map;function mu(){return kn}function Xt(e){return kn.get(e)}function ur(e,t){kn.set(e,t)}function hu(){kn.clear()}function gu(e){if(!re(e,Vt))return!1;if(re(e,Kt))return!0;let t=Dt(e,Gt);if(!t)return!1;let n=parseInt(t),r=kn.has(n);if(!r){let a=document.getElementById(`${at}-${n}`);a&&a.remove()}return r}function Ct(e,t){let n={...e,id:dm++};n.elements.forEach(r=>{r instanceof HTMLElement&&(ie(r,Vt,"1"),ie(r,Gt,`${n.id}`))}),t.push(n),kn.set(n.id,{...n,state:"Original",observers:[]})}async function bu(e,t,n){let r=[],{targetLanguage:a,rule:o}=n;for(let l of t){if(Je(l,o,!1))continue;let f=re(l,bn),d=[];if(re(l,nt)){if(!gu(l)){let b=ft([l],f,n);b&&Ct(b,r)}continue}let g=b=>{if(!(b.nodeType===Node.TEXT_NODE||b.nodeType===Node.ELEMENT_NODE))return NodeFilter.FILTER_REJECT;if(b.nodeType===Node.ELEMENT_NODE){let m=b;if(m.isContentEditable||gu(b))return NodeFilter.FILTER_REJECT;if(ie(m,Vt,"1"),re(m,nt)){if(d.length>0){let w=ft([...d],f,n);w&&Ct(w,r),d.length=0}d.push(m);let T=ft([...d],f,n);return T&&Ct(T,r),d.length=0,NodeFilter.FILTER_REJECT}}if(Je(b,o,!0)){if((b.nodeName==="CODE"||b.nodeName==="TT")&&b.parentNode?.nodeName==="PRE")return NodeFilter.FILTER_REJECT;if(ct(b,o))return pu(b,d,r,f,n),NodeFilter.FILTER_REJECT;if(d.length>0){let m=ft([...d],f,n);m&&Ct(m,r),d.length=0}return NodeFilter.FILTER_REJECT}return b.nodeName==="PRE"?(b.classList.contains("code"),NodeFilter.FILTER_REJECT):ct(b,o)?(pu(b,d,r,f,n),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT},h=document.createTreeWalker(l,NodeFilter.SHOW_ELEMENT,g),x=h.nextNode();for(;x;){if(d.length>0){let b=ft([...d],f,n);b&&Ct(b,r),d.length=0}x=h.nextNode()}if(d.length>0){let b=ft([...d],f,n);b&&Ct(b,r),d.length=0}}let i=r.map(l=>{let{text:f}=l;return ut({text:f})}),s=await Promise.all(i),c=[],u=n?.config?.translationLanguagePattern?.excludeMatches||[];return s.forEach((l,f)=>{if(!or(l,a)){if(u.length>0&&u.some(h=>or(l,h)))return;c.push(r[f])}}),r=c,r}function gm(e,t){let n=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null),a=null,o=!1;for(;a=r.nextNode();){let s=a.textContent||"",c=s.trim();if(!o&&s.length>0&&c.length===0){o=!0,n.push(" ");continue}c.length>0&&(n.push(a.parentElement),o=!1)}let i=n[n.length-1];if(i&&typeof i!="string"){let s=lr(i.nextSibling,t);s&&n.push(s)}if(typeof n[n.length-1]!="string"){let s=lr(e.nextSibling,t);s&&n.push(s)}return n}function pu(e,t,n,r,a){let o=e.previousElementSibling;if(o&&!ct(o,a.rule)&&t.length>0){let s=ft([...t],r,a);s&&Ct(s,n),t.length=0}Je(e,a.rule,!1)?Qc(e,a.rule)||t.push(e):Ln(e,a.rule)?t.push(e):la(e,["code","tt"])?t.push(...gm(e,r)):t.push(e)}async function vu(e,t,n,r){let a=[],{rule:o}=n;for(let i=0;i<t.length;i++){let s=t[i],c=r[i];if(!c)throw new Error("targetContainer is null");let u=[],l=!0,f=null,d=function(x){let b=x;if(["DIV","BR"].includes(b.nodeName))return l=!0,NodeFilter.FILTER_REJECT;if(b.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(mm(x))return NodeFilter.FILTER_REJECT;if(ie(b,Vt,"1"),ct(b,o)){let m=Cn(u),T=globalThis.getComputedStyle(b);if(!m)u.push(Tu(b,T));else{let w=globalThis.getComputedStyle(m),C=bs(w),F=bs(T),_=xu(F,C),z=!1;l&&f&&xu(F,f).left>=1.2&&(z=!0),!z&&l&&Cn(u)&&sa(u).reduce(($,A)=>{let W=bs(globalThis.getComputedStyle(A));return Math.max($,W.right)},0)-C.right>o.pdfNewParagraphIndentRightIndentPx&&(z=!0),l&&(f=F,l=!1),z||(z=pm(_,o)),z&&yu(u,a,n,c),u.push(Tu(b,T)),u.push(" ")}return NodeFilter.FILTER_REJECT}return NodeFilter.FILTER_ACCEPT},g=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,d),h=g.nextNode();for(;h;)h=g.nextNode();yu(u,a,n,c)}return a}function yu(e,t,n,r){if(e.length>0){let a=ft([...e],!1,n);a&&(a.isPdf=!0,a.targetContainer=r,a.inline=!1,Ct(a,t)),e.length=0}}function bs(e){return{top:parseFloat(e.top.slice(0,-2)),left:parseFloat(e.left.slice(0,-2)),right:parseFloat(e.left.slice(0,-2))+parseFloat(e.width.slice(0,-2)),fontSize:parseFloat(e.fontSize.slice(0,-2))}}function pm(e,t){return e.fontSize>2||e.fontSize<-2||e.top>=t.pdfNewParagraphLineHeight||e.top<0}function xu(e,t){let n=t.fontSize,r=e.fontSize;return{top:(e.top-t.top)/n,left:(e.left-t.left)/n,fontSize:r-n}}function Tu(e,t){return t.fontFamily==="monospace"?{element:e,isStayOriginal:!0,targetTagName:"code"}:e}function mm(e){if(!re(e,Vt))return!1;if(re(e,Kt))return!0;let t=Dt(e,Gt);if(!t)return!1;let n=parseInt(t),a=mu().has(n);if(!a){let o=document.getElementById(`${at}-${n}`);o&&o.remove()}return a}function wu(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ys(e,t,n=[],r,a){let o=["notranslate"];return r&&o.push(hc),e&&(o.push(`${ye}-target-translation-theme-${e}`),t?o.push(`${zo}-theme-${e}`):o.push(`${jo}-theme-${e}`)),n.length>0&&o.push(...n),t?o.push(zo):(o.push(jo),a&&o.push(mc)),o}function xs(e){let t=["notranslate",pc];return e&&t.push(`${ye}-target-translation-theme-${e}-inner`),t}function Su(e,t,n){let{rule:r,translationTheme:a}=n,{variables:o}=e;o=o||[];let{text:i}=t,{wrapperPrefix:s,wrapperSuffix:c}=r,u=cr(n),l="afterend",f=new RegExp(`${u[0]}(\\d+)${u[1]}`,"g"),d=0,g=wu(i);o.length>0&&(g=g.replace(f,b=>{let m=g.indexOf(b),T=g[m-1]===" ",w=g[m+b.length]===" ",C=o[Number(d)];if(d++,C.type==="element"){let F=C.value.outerHTML;return T||(F=" "+F),w||(F=F+" "),F}else q.error("variable type not supported",C);return b}));let h=ys(a,e.inline,r.translationClasses||[],e.preWhitespace,n.rule.isPdf),x=xs(a);return g=`<span class="${h.join(" ")}"><span class="${x.join(" ")}">${g}</span></span>`,e.inline||(s==="smart"?g=`<br>${g}`:g=`${s}${g}`,c==="smart"?g=`${g}`:g=`${g}${c}`),e.inline&&(g=`<span class="notranslate">&nbsp;</span>${g}`),{html:g,position:l}}function Cu(e,t){let n=[];for(let r of e){if(re(r,nt))continue;if(ie(r,Oo,"1"),r.normalize(),t.lineBreakMaxTextCount>0){let o=s=>s.nodeType===Node.ELEMENT_NODE&&Je(s,t,!0)?NodeFilter.FILTER_REJECT:(s.nodeType===Node.TEXT_NODE&&(s.textContent?s.textContent.trim():"").length>=t.lineBreakMaxTextCount&&vs(s,t.lineBreakMaxTextCount),NodeFilter.FILTER_ACCEPT),i=document.createTreeWalker(r,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,o);for(;i.nextNode(););}if(!(t.excludeTags.includes("PRE")||t.additionalExcludeTags.includes("PRE"))&&t.isTransformPreTagNewLine){let o=r.querySelectorAll("pre");for(let i of o)Eu(i)}t.preWhitespaceDetectedTags.includes(r.tagName)&&(nu(r,bn)||(hm(r)?(ie(r,bn,"1"),t.isTransformPreTagNewLine&&Eu(r)):ie(r,bn,"0"))),Ts(0,r,t,n)}return{hiddenElements:n}}function Ts(e,t,n,r=[]){if(re(t,nt))return;let a=!1;if(e===0){let o=Ln(t,n);t.childNodes&&t.childNodes.length===1&&t.nodeType===Node.ELEMENT_NODE&&ct(t,n)&&!o&&(a=!0)}if(t&&t.childNodes&&t.childNodes.length>0){for(let o of t.childNodes)if(o.nodeType===Node.ELEMENT_NODE){if(Je(o,n,!1))continue;{let i=globalThis.getComputedStyle(o),s=!1;if(i.display==="none"&&(r.push(o),s=!0),!s){let c=i.clip,u=i.zIndex,l=i.height,f=i.width,d=0;if(u.startsWith("-")){let g=parseInt(u);isNaN(g)||(d=g)}if((c==="rect(1px, 1px, 1px, 1px)"||d<0)&&(s=!0),!s&&o.nodeName!=="BR"){let g=parseInt(l),h=parseInt(f);!isNaN(g)&&!isNaN(h)&&(g>0&&g<8||h>0&&h<=8)&&(s=!0)}}if(s){ie(o,rt,"1");continue}else{if(o.nodeName==="DIV"||au(o,n)){if((i.display==="inline"||i.display==="inline-flex")&&!re(o,Jt)){ie(o,St,"1");continue}}else if((o.nodeName==="SPAN"||o.nodeName==="A")&&!i.display.startsWith("inline")){re(o,St)||(ie(o,Jt,"1"),Ts(e+1,o,n,r));continue}if(ct(o,n)&&!a)continue;Ts(e+1,o,n,r)}}}else if(o.nodeType===Node.TEXT_NODE){let i=o.textContent;if(i&&i.trim().length>0){let s=document.createElement("span");o.after(s),s.appendChild(o)}}}}function hm(e){let t=window.getComputedStyle(e);return t.whiteSpace.startsWith("pre")||t.whiteSpace==="break-spaces"}function Eu(e){let n=e.innerHTML.replace(/\n/g,"<br>");e.innerHTML=n}function vs(e,t){let n=e.textContent||"";if(n.trim().length<=t)return;let o=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((i,s)=>{let c=n.lastIndexOf(s,t);return c>i?c:i},-1);if(o===-1)n.length>t+20&&vs(e,t+20);else{let i=n.slice(o+1);o++,i.startsWith(" ")&&o++;let s=e.splitText(o),c=document.createElement("br");s.parentNode?.insertBefore(c,s),o+1<n.length&&vs(s,t)}}function Lu(e,t){let n=[];for(let r of e){let a=0,o=1e5,i=document.createElement("div"),s=l=>{let f=l;if(["DIV","BR"].includes(f.nodeName))return NodeFilter.FILTER_REJECT;if(f.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(f.nodeName==="SPAN"){let d=f.getBoundingClientRect(),g=globalThis.getComputedStyle(f),h=d.right,x=d.left,b=g.top.slice(0,-2),m=g.fontSize.slice(0,-2);return h>a&&(a=h),x<o&&(o=x),ie(f,nr,`${x}`),ie(f,Vr,`${h}`),ie(f,fc,b),ie(f,dc,m),NodeFilter.FILTER_ACCEPT}else return NodeFilter.FILTER_ACCEPT},c=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,s);for(;c.nextNode(););let u=a-o;u<600&&(u=600),n.push(i),i.style.left=a+"px",i.style.width=u+"px",i.classList.add(Gr),r.childNodes.length>0&&r.insertBefore(i,r.childNodes[0])}return{targetContainers:n}}var ku=["*://*/*","*","*://*"],Mu="immersive-translate-wildcard-placeholder.com";function ws(e,t){let n=[];if(!t||(t&&!Array.isArray(t)?n=[t]:n=t,n.length===0))return null;if(n.some(i=>ku.includes(i)))return e;let r=new URL(e);r.hash="",r.search="";let a=r.href,o=r.hostname;if(n&&n.length>0){let i=n.find(s=>{let c=s;if(s===o)return!0;if(ku.includes(s))return!0;if(!s.includes("*")&&s.includes("://")){try{let u=new URL(s);return u.pathname==="/"&&!s.endsWith("/")?u.hostname===o:ym(a,s)}catch{}return!1}else{let u,l=s;s.includes("://")?u=s.split("://")[0]:(u="*",s="https://"+s);let f=s.replace(/\*/g,Mu),d;try{d=new URL(f)}catch{return q.debug("invalid match pattern",f,"raw match value:",l),!1}let g=d.hostname,h=d.pathname;h==="/"&&(l.replace("://","").includes("/")||(h="/*"));let x=bm(u+":",_u(g),_u(h));if(x){let b=new URL(a);return b.port="",x.test(b.href)}else return!1}});if(i)return i}return null}function _u(e){return e.replace(Mu,"*")}function bm(e,t,n){let r="^";return e==="*:"?r+="(http:|https:|file:)":r+=e,r+="//",t&&(e==="file:"||(t==="*"?r+="[^/]+?":(t.match(/^\*\./)&&(r+="[^/]*?",t=t.substring(2)),r+=t.replace(/\./g,"\\.").replace(/\*/g,"[^/]*")))),n?n==="*"||n==="/*"?r+="(/.*)?":n.includes("*")?(r+=n.replace(/\*/g,".*?"),r+="/?"):r+=n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):r+="/?",r+="$",new RegExp(r)}function Lt(e,t){return ws(e,t)!==null}function ym(e,t){let n=new URL(e),r=new URL(t);return n.hostname===r.hostname&&n.pathname===r.pathname&&n.protocol===r.protocol&&n.port===r.port}var _n="input is invalid type",Ss=typeof window=="object",It=Ss?window:{};It.JS_SHA256_NO_WINDOW&&(Ss=!1);var xm=!Ss&&typeof self=="object",Tm=!It.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;Tm?It=global:xm&&(It=self);var gv=!It.JS_SHA256_NO_COMMON_JS&&typeof module=="object"&&module.exports,pv=typeof define=="function"&&define.amd,fr=!It.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",R="0123456789abcdef".split(""),vm=[-2147483648,8388608,32768,128],dt=[24,16,8,0],fa=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],da=["hex","array","digest","arrayBuffer"],De=[];(It.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"});fr&&(It.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return typeof e=="object"&&e.buffer&&e.buffer.constructor===ArrayBuffer});var Pu=function(e,t){return function(n){return new Ie(t,!0).update(n)[e]()}},Ru=function(e){var t=Pu("hex",e);t.create=function(){return new Ie(e)},t.update=function(a){return t.create().update(a)};for(var n=0;n<da.length;++n){var r=da[n];t[r]=Pu(r,e)}return t},Au=function(e,t){return function(n,r){return new ga(n,t,!0).update(r)[e]()}},Nu=function(e){var t=Au("hex",e);t.create=function(a){return new ga(a,e)},t.update=function(a,o){return t.create(a).update(o)};for(var n=0;n<da.length;++n){var r=da[n];t[r]=Au(r,e)}return t};function Ie(e,t){t?(De[0]=De[16]=De[1]=De[2]=De[3]=De[4]=De[5]=De[6]=De[7]=De[8]=De[9]=De[10]=De[11]=De[12]=De[13]=De[14]=De[15]=0,this.blocks=De):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}Ie.prototype.update=function(e){if(!this.finalized){var t,n=typeof e;if(n!=="string"){if(n==="object"){if(e===null)throw new Error(_n);if(fr&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!fr||!ArrayBuffer.isView(e)))throw new Error(_n)}else throw new Error(_n);t=!0}for(var r,a=0,o,i=e.length,s=this.blocks;a<i;){if(this.hashed&&(this.hashed=!1,s[0]=this.block,s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0),t)for(o=this.start;a<i&&o<64;++a)s[o>>2]|=e[a]<<dt[o++&3];else for(o=this.start;a<i&&o<64;++a)r=e.charCodeAt(a),r<128?s[o>>2]|=r<<dt[o++&3]:r<2048?(s[o>>2]|=(192|r>>6)<<dt[o++&3],s[o>>2]|=(128|r&63)<<dt[o++&3]):r<55296||r>=57344?(s[o>>2]|=(224|r>>12)<<dt[o++&3],s[o>>2]|=(128|r>>6&63)<<dt[o++&3],s[o>>2]|=(128|r&63)<<dt[o++&3]):(r=65536+((r&1023)<<10|e.charCodeAt(++a)&1023),s[o>>2]|=(240|r>>18)<<dt[o++&3],s[o>>2]|=(128|r>>12&63)<<dt[o++&3],s[o>>2]|=(128|r>>6&63)<<dt[o++&3],s[o>>2]|=(128|r&63)<<dt[o++&3]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.block=s[16],this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}};Ie.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=vm[t&3],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}};Ie.prototype.hash=function(){var e=this.h0,t=this.h1,n=this.h2,r=this.h3,a=this.h4,o=this.h5,i=this.h6,s=this.h7,c=this.blocks,u,l,f,d,g,h,x,b,m,T,w;for(u=16;u<64;++u)g=c[u-15],l=(g>>>7|g<<25)^(g>>>18|g<<14)^g>>>3,g=c[u-2],f=(g>>>17|g<<15)^(g>>>19|g<<13)^g>>>10,c[u]=c[u-16]+l+c[u-7]+f<<0;for(w=t&n,u=0;u<64;u+=4)this.first?(this.is224?(b=300032,g=c[0]-1413257819,s=g-150054599<<0,r=g+24177077<<0):(b=704751109,g=c[0]-210244248,s=g-1521486534<<0,r=g+143694565<<0),this.first=!1):(l=(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10),f=(a>>>6|a<<26)^(a>>>11|a<<21)^(a>>>25|a<<7),b=e&t,d=b^e&n^w,x=a&o^~a&i,g=s+f+x+fa[u]+c[u],h=l+d,s=r+g<<0,r=g+h<<0),l=(r>>>2|r<<30)^(r>>>13|r<<19)^(r>>>22|r<<10),f=(s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7),m=r&e,d=m^r&t^b,x=s&a^~s&o,g=i+f+x+fa[u+1]+c[u+1],h=l+d,i=n+g<<0,n=g+h<<0,l=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),f=(i>>>6|i<<26)^(i>>>11|i<<21)^(i>>>25|i<<7),T=n&r,d=T^n&e^m,x=i&s^~i&a,g=o+f+x+fa[u+2]+c[u+2],h=l+d,o=t+g<<0,t=g+h<<0,l=(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),f=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7),w=t&n,d=w^t&r^T,x=o&i^~o&s,g=a+f+x+fa[u+3]+c[u+3],h=l+d,a=e+g<<0,e=g+h<<0;this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+n<<0,this.h3=this.h3+r<<0,this.h4=this.h4+a<<0,this.h5=this.h5+o<<0,this.h6=this.h6+i<<0,this.h7=this.h7+s<<0};Ie.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,a=this.h4,o=this.h5,i=this.h6,s=this.h7,c=R[e>>28&15]+R[e>>24&15]+R[e>>20&15]+R[e>>16&15]+R[e>>12&15]+R[e>>8&15]+R[e>>4&15]+R[e&15]+R[t>>28&15]+R[t>>24&15]+R[t>>20&15]+R[t>>16&15]+R[t>>12&15]+R[t>>8&15]+R[t>>4&15]+R[t&15]+R[n>>28&15]+R[n>>24&15]+R[n>>20&15]+R[n>>16&15]+R[n>>12&15]+R[n>>8&15]+R[n>>4&15]+R[n&15]+R[r>>28&15]+R[r>>24&15]+R[r>>20&15]+R[r>>16&15]+R[r>>12&15]+R[r>>8&15]+R[r>>4&15]+R[r&15]+R[a>>28&15]+R[a>>24&15]+R[a>>20&15]+R[a>>16&15]+R[a>>12&15]+R[a>>8&15]+R[a>>4&15]+R[a&15]+R[o>>28&15]+R[o>>24&15]+R[o>>20&15]+R[o>>16&15]+R[o>>12&15]+R[o>>8&15]+R[o>>4&15]+R[o&15]+R[i>>28&15]+R[i>>24&15]+R[i>>20&15]+R[i>>16&15]+R[i>>12&15]+R[i>>8&15]+R[i>>4&15]+R[i&15];return this.is224||(c+=R[s>>28&15]+R[s>>24&15]+R[s>>20&15]+R[s>>16&15]+R[s>>12&15]+R[s>>8&15]+R[s>>4&15]+R[s&15]),c};Ie.prototype.toString=Ie.prototype.hex;Ie.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,a=this.h4,o=this.h5,i=this.h6,s=this.h7,c=[e>>24&255,e>>16&255,e>>8&255,e&255,t>>24&255,t>>16&255,t>>8&255,t&255,n>>24&255,n>>16&255,n>>8&255,n&255,r>>24&255,r>>16&255,r>>8&255,r&255,a>>24&255,a>>16&255,a>>8&255,a&255,o>>24&255,o>>16&255,o>>8&255,o&255,i>>24&255,i>>16&255,i>>8&255,i&255];return this.is224||c.push(s>>24&255,s>>16&255,s>>8&255,s&255),c};Ie.prototype.array=Ie.prototype.digest;Ie.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e};function ga(e,t,n){var r,a=typeof e;if(a==="string"){var o=[],i=e.length,s=0,c;for(r=0;r<i;++r)c=e.charCodeAt(r),c<128?o[s++]=c:c<2048?(o[s++]=192|c>>6,o[s++]=128|c&63):c<55296||c>=57344?(o[s++]=224|c>>12,o[s++]=128|c>>6&63,o[s++]=128|c&63):(c=65536+((c&1023)<<10|e.charCodeAt(++r)&1023),o[s++]=240|c>>18,o[s++]=128|c>>12&63,o[s++]=128|c>>6&63,o[s++]=128|c&63);e=o}else if(a==="object"){if(e===null)throw new Error(_n);if(fr&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!fr||!ArrayBuffer.isView(e)))throw new Error(_n)}else throw new Error(_n);e.length>64&&(e=new Ie(t,!0).update(e).array());var u=[],l=[];for(r=0;r<64;++r){var f=e[r]||0;u[r]=92^f,l[r]=54^f}Ie.call(this,t,n),this.update(l),this.oKeyPad=u,this.inner=!0,this.sharedMemory=n}ga.prototype=new Ie;ga.prototype.finalize=function(){if(Ie.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();Ie.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),Ie.prototype.finalize.call(this)}};var Mn=Ru();Mn.sha256=Mn;Mn.sha224=Ru(!0);Mn.sha256.hmac=Nu();Mn.sha224.hmac=Nu(!0);var Du=Mn;var Iu=Du.sha256;function gt(e){return Promise.resolve(Iu(e))}function pa(e){return Array.from(new Uint8Array(e)).map(r=>r.toString(16).padStart(2,"0")).join("")}function Ot(e,t){let n=Iu.hmac.create(t);return n.update(e),Promise.resolve(n.array())}async function Ou(e,t){let n=await Ot(e,t);return pa(n)}async function ma(e,t){let n=wm(t),r=await Ot(e,n);return pa(r)}function wm(e){let t=[];return e.replace(/../g,function(n){return t.push(parseInt(n,16)),""}),new Uint8Array(t).buffer}async function kt(e){let{url:t,config:n,state:r}=e,a=new URL(t),o="auto",{translationParagraphLanguagePattern:i,translationService:s,translationServices:c,translationTheme:u,translationThemePatterns:l,translationUrlPattern:f,targetLanguage:d,sourceLanguageUrlPattern:g}=n,h=Lt(t,i.matches);if(!h){let M=i.selectorMatches;h=fs(M)}let x=s,b=Object.keys(c);for(let M of b){let H=c[M];if(Lt(t,H.matches)){x=M;break}}let m=u,T=Object.keys(l);for(let M of T){let H=l[M];if(Lt(t,H.matches)){m=M;break}}let w=Lt(t,f.matches),C=Lt(t,f.excludeMatches);C||(C=Lt(t,xc));let F=Object.keys(g),_={};for(let M of F){let H=g[M];if(H&&H.matches)for(let v of H.matches)_[v]=M}let z=Object.keys(_),ue=ws(t,z);ue&&(o=_[ue]??"auto");let E=d||"zh-CN",D=a.hostname,$=await gt(D),A=a.pathname+a.search+a.hash,W=await gt(A),O=`https://${$}.com/${W}`,Y=await ra(),I={targetLanguage:E,config:n,isDetectParagraphLanguage:h,translationService:x,translationTheme:m,isTranslateUrl:w,sourceLanguage:o,isTranslateExcludeUrl:C,rule:n.generalRule,url:t,encryptedUrl:O,state:r||{translationArea:n.translationArea,translationStartMode:n.translationStartMode,isAutoTranslate:!1,isNeedClean:!1},localConfig:Y};I.state.translationArea==="body"&&(I.config.generalRule.excludeTags=I.config.generalRule.excludeTags.filter(M=>M!=="BUTTON"&&M!=="LABEL"),I.config.generalRule.additionalExcludeSelectors=I.config.generalRule.additionalExcludeSelectors.filter(M=>M!==".btn")),I.translationService==="d"&&(n.immediateTranslationTextCount=0);let oe=n.rules,fe;globalThis.PDFViewerApplication?fe=oe.find(M=>M.isPdf):fe=oe.find(M=>{let H=Lt(t,M.matches);if(!H){let v=M.selectorMatches;v&&v.length>0&&(H=fs(v))}return H});let S=n.generalRule;return fe&&(I.rule=na(S,fe)),I.rule.isPdf&&(I.state.translationArea="main"),I.state.translationArea==="body"&&(I.rule.paragraphMinTextCount=1,I.rule.paragraphMinWordCount=1),I}var ba="Original",ha=[],ks=new Set,Es=[],ya=[],Hu=[],xa=[],Fu=globalThis.location.href.split("#")[0],_s=0,Me,Sm=Er(Rm,300),Em=Er(Bu,200),Cm=ar(),Lm=Cm.PROD==="1",dr,gr,pr="";async function Uu(){Tt()==="Original"?await Ft():(Tt()==="Translated"||Tt()==="Error")&&Pn()}function $u(){let e=document.querySelectorAll(`[${Kt}="1"]`);for(let t of e)t.style.display="none"}function Pn(){ms(),Ls(),Ve("Translating"),pr&&(document.title=pr),document.querySelectorAll("."+at).forEach(r=>{r.remove()}),document.querySelectorAll("."+Gr).forEach(r=>{r.remove()}),document.querySelectorAll("["+Uo+"]").forEach(r=>{if(Lm)delete r[Re];else{let o=Object.keys(r.dataset).filter(i=>i.startsWith(me));for(let i of o)delete r.dataset[i]}r.removeAttribute(Uo)}),Ve("Original")}function km(e,t){let n=!1,r=is(e.elements),a=Cn(e.elements);ks.add(e.id);let o=[];if(r){let s=new IntersectionObserver((c,u)=>{c.forEach(l=>{l.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});ya.push(s),o.push(s),s.observe(r)}if(a&&a!==r){let s=new IntersectionObserver((c,u)=>{c.forEach(l=>{l.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});ya.push(s),o.push(s),s.observe(a)}let i=Xt(e.id);i&&(i.observers=o,ur(e.id,i))}function _m(e,t){if(e){let n=new ResizeObserver((r,a)=>{for(let o of r)o.contentRect.width>10&&(a.disconnect(),t(o.target))});n.observe(e),Hu.push(n)}}async function Bu(e){let t=[...xa];xa=[];try{let n=[];for(let r of t){let a=gs(r,e);if(a.length===0)continue;let o=a;n.push(...o)}await Ps(n,e)}catch(n){q.error(`translateNewDynamicNodes error: ${n.message}`)}}function Cs(e,t){ks.delete(e.id);let n=Xt(e.id);n&&(n.observers&&n.observers.length>0&&n.observers.forEach(o=>{o.disconnect()}),n.observers=[],n.state="Translating",ur(e.id,n));let r=e.id;_s+=e.text.length;let a=sa(e.elements);if(e.isPdf){let o=is(e.elements),i=window.getComputedStyle(o),s=i.top,c=i.fontSize,u=parseFloat(c.slice(0,-2));isNaN(u)||u>28&&(c="28px");let l=e.targetContainer,f=document.createElement("span");a.length===1&&(f.style.fontSize=c),f.id=`${at}-${r}`,f.style.top=s;let d=Dt(o,nr),g=a.reduce((b,m)=>{let T=Dt(m,nr);return T&&T<b?T:b},1e3),x=a.reduce((b,m)=>{let T=Dt(m,Vr);return T&&T>b?T:b},0)-g;x<30,x>600&&(x=600),d<200&&(d=10),d&&d<0&&(d=0),f.style.left=`${d||10}px`,g<400?f.style.width=x+"px":f.style.width=`calc(100% - ${g}px)`,f.classList.add("notranslate",`${at}`),l.appendChild(f)}else{let o=Cn(e.elements),i="afterend";e.elements.length>0&&o&&(a.length===1?i="beforeend":ct(e.elements[0],t.rule)||(i="beforeend"));let s=document.createElement("span");if(s.classList.add("notranslate",at),s.id=`${at}-${r}`,s.innerHTML=Pm(),i==="beforeend"){let c=ou(o);c?c.appendChild(s):o.appendChild(s)}else if(i==="afterend")o.insertAdjacentElement(i,s);else throw new Error("not support position")}ha.push(r),Sm(t)}function Mm(e,t){t.state.translationStartMode==="dynamic"&&_s>t.config.immediateTranslationTextCount?km(e,n=>{Cs(n,t)}):Cs(e,t)}async function Ft(){if(ba==="Translating")return;Ve("Translating");let e=await Qt(globalThis.location.href);e.state.isAutoTranslate=!0;let t=globalThis.scrollY,n=globalThis.innerHeight;t>=n&&(e.config.immediateTranslationTextCount=0),q.debug("ctx",e),e.state.isNeedClean?Pn():Me.state.isNeedClean=!0,e.rule.normalizeBody&&document.querySelector(e.rule.normalizeBody)&&(document.body=document.body.cloneNode(!0)),lu(()=>{_s=0,hu(),ya.forEach(r=>{r.disconnect()}),Hu.forEach(r=>{r.disconnect()}),ya=[],ks.clear()}),Ve("Translating");try{ds([document.body],e.rule);let r=gs(document.body,e);q.debug("detect containers",r),Ve("Translating");let{rule:a}=e;r.length>0&&await Ps(r,e),qu(e).catch(o=>{q.error("translateTitle error:",o.name,o.message,o.details||"")}),Nm(a,e),r.length===0&&Ve("Translated")}catch(r){Ve("Error"),q.error(r)}}async function Qt(e){let t=await Vu();if(!Me)Me=await kt({url:e,config:t});else{let n={url:e,config:t,state:Me.state};Me=await kt(n)}return Me}async function ju(){Tt()==="Original"?await Ta():(Tt()==="Translated"||Tt()==="Error")&&(Me=await Qt(globalThis.location.href),Me.state.translationArea!=="main"?await Ta():Pn())}async function Ta(){Me=await Qt(globalThis.location.href),Me.state.translationArea="main",await Ft()}async function Ms(){Me=await Qt(globalThis.location.href),Me.state.translationArea="body",await Ft()}async function zu(){Tt()==="Original"?await Ms():(Tt()==="Translated"||Tt()==="Error")&&(Me=await Qt(globalThis.location.href),Me.state.translationArea!=="body"?(Me.state.translationArea="body",await Ft()):Pn())}async function Wu(){Me=await Qt(globalThis.location.href),Me.state.translationArea="body",Me.state.translationStartMode="immediate",await Ft(),await Bu(Me)}async function qu(e){let t=document.title;if(!t||t.includes(Kr))return;pr!==t&&(pr=t);let n="auto";if(e.isDetectParagraphLanguage||(n=du()),n==="auto"){let r=await ut({text:t});if(or(r,e.targetLanguage))return}try{let r=await Ju({text:t,from:n,to:e.targetLanguage},e);r&&r.text&&(document.title=pr+Kr+r.text)}catch(r){throw r}}function Pm(){return`&nbsp;<span class="${ye}-loading notranslate"></span>`}async function Ps(e,t){let{rule:n}=t;ds(e,n);let r=[];if(t.rule.isPdf)e.length>0&&(Ve("Translating"),r=Lu(e,n).targetContainers);else{Ve("Translating");let o=Cu(e,n),{hiddenElements:i}=o;for(let s of i)_m(s,()=>{ru(s,rt),Ps([s],t)});Ve("Translating")}let a=[];if(t.rule.isPdf?a=await vu(document.body,e,t,r):(e=e.filter(o=>!Je(o,n,!1)),a=await bu(document.body,e,t)),Ve("Translating"),a.length===0){Ve("Translated");return}q.debug("detect paragraphs",a);for(let o of a)Mm(o,t);Ve("Translated")}function Am(e,t,n,r){let a=Xt(n.id);if(e||!t){e||(q.error("translate error",t),e=new Error("no response from server"));let o=n.id,i=document.getElementById(`${at}-${o}`),s=e.message.replaceAll(`
`,"");s=s.replaceAll('"',"&quot;"),a&&(a.state="Error",ur(a.id,a));let c=`<span class="${ye}-error notranslate"> <span class="immersive-translate-tooltip" data-immersive-translate-tooltip-text="${s}"><button class="${ye}-clickable-button notranslate" title="${s}">\u2757</button></span> <button class="${ye}-clickable-button notranslate" data-${ye}-paragraph-id="${o}" data-${ye}-action="retry">\u{1F504}</button></span>`;i&&(i.innerHTML=c)}else{let o=Xt(n.id);if(o){o.state="Translated",ur(o.id,o);let i=Su(o,t,r),s=t.id,c=document.getElementById(`${at}-${s}`);c&&(c.innerHTML=i.html,document.querySelectorAll(`[${Gt}="${s}"]`).forEach(l=>{ie(l,Kt,"1")}))}else q.error("paragraph not found",n.id)}}async function Rm(e){if(ha.length===0)return Promise.resolve();let t=[...ha];ha=[];let n="auto";e.isDetectParagraphLanguage||(n=hs());let r={sentences:t.filter(o=>Xt(o)).map(o=>{let i=Xt(o);return{id:i.id,url:e.encryptedUrl,text:i.text,from:n,to:e.targetLanguage}})};if(r.sentences.length>0){Ve("Translating");try{await As(r,e,(o,i,s)=>{Am(o,i,s,e)})}catch(o){Ve("Error"),q.error("translateCurrentQueue error",o.name,o.message,o.details||" ");return}}Ve("Translated")}function Ve(e){ba=e,Gu(ba)}function Nm(e,t){q.debug("enableMutatinObserver"),Ls(),Es=[],xa=[];let n=e.inlineTags.concat(e.excludeTags).concat("#text","BR");dr=new MutationObserver(function(a){a.forEach(o=>{let i=globalThis.location.href;if(i.split("#")[0]!==Fu&&e.observeUrlChange){Fu=i.split("#")[0],ms(),Ls(),setTimeout(()=>{q.debug("url changed, reinit page"),Im()},e.urlChangeDelay);let c=new Event(cc);document.dispatchEvent(c);return}o.addedNodes.forEach(c=>{if(c.nodeType===Node.ELEMENT_NODE){let u=c;if(Dm(e,u)||!n.includes(u.nodeName)){if(u.classList.contains("notranslate"))return;Xc(u,Es)||(xa.push(u),Es.push(u),Em(t))}}})})}),dr.observe(document.body,{childList:!0,subtree:!0});let r=document.querySelector("title");r&&(gr=new MutationObserver(function(a){a.length>0&&(a[0].target.text.includes(Kr)||qu(t).catch(i=>{q.error("translateTitle error:",i.name,i.message,i.details||"")}))}),gr.observe(r,{subtree:!0,characterData:!0,childList:!0}))}function Dm(e,t){if(e.extraBlockSelectors){for(let n of e.extraBlockSelectors)if(t.matches(n))return!0}return!1}async function Im(){let e=await Qt(globalThis.location.href);e.rule.urlChangeDelay&&await fn(e.rule.urlChangeDelay);let t=e.sourceLanguage;t==="auto"?(xe()?t=await ut({text:ia(document.body).slice(0,1e3)}):t=await Ku(),t==="auto"&&(t=await iu()),fu(t)):ua(t);let n=e.state.isAutoTranslate||e.isTranslateUrl||e.rule.isPdf;!n&&!e.isTranslateExcludeUrl&&(q.debug(`detect page language: ${t}`),su(t,e.config.translationLanguagePattern)&&(n=!0,q.debug(`match language pattern ${t}, auto translate`))),n?(Me.state.isAutoTranslate=!0,await Ft()):q.debug("do not auto translate")}function Ls(){dr&&(dr.disconnect(),dr.takeRecords()),gr&&(gr.disconnect(),gr.takeRecords())}function Tt(){return ba}var mr=new Map,An=class{constructor(t,n=!1){this.logger=new rr,n&&this.logger.setLevel("debug"),this.fromType=t,mr.has(t)||(mr.set(t,new Map),X.runtime.onMessage.addListener((r,a,o)=>{let i=r.from,s=r.to,c,u,l;a.tab&&a.tab.id&&(c=a.tab.id,i=`${i}:${c}`,u=a.tab.url,l=a.tab.active),this.logger.debug(`${r.to} received message [${r.payload.method}] from ${r.from}`,r.payload.data?r.payload.data:" ");let f=Ns(s),{type:d,name:g}=f;if(d!==t)return!1;let h=Ns(i),b=mr.get(d).get(g);if(!b)return this.logger.debug(`no message handler for ${d}:${s}`),o({ok:!1,errorName:"notActive",errorMessage:`${s} is not active, from ${i} ${r.payload.method}`}),!1;let{messageHandler:m,sync:T}=b,w={type:t,name:h.name,id:c,url:u,active:l};if(T){try{let C=m(r.payload,w);o({ok:!0,data:C})}catch(C){o({ok:!1,errorName:C.name,errorMessage:C.message,errorDetails:C.details})}return!1}else return m(r.payload,w).then(C=>{o({ok:!0,data:C})}).catch(C=>{o({ok:!1,errorName:C.name,errorMessage:C.message,errorDetails:C.details})}),!0}))}getConnection(t,n,r){let a=!1;r&&r.sync&&(a=!0);let o=this.fromType,i=mr.get(o);if(i.has(t))return i.get(t).connectionInstance;{let s=new Rs(`${o}:${t}`,this.logger);return mr.get(o).set(t,{messageHandler:n,sync:a,connectionInstance:s}),s}}},Rs=class{constructor(t,n){this.from=t,this.logger=n}async sendMessage(t,n){let r=Ns(t),{type:a,id:o}=r;if(a!=="content_script"){let i={to:t,from:this.from,payload:n};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");try{let s=await X.runtime.sendMessage(i);return Yu(i,s,this.logger)}catch(s){if(a==="popup"){let c=`popup ${t} is not active, so the message does not send, ignore this error, ${JSON.stringify(n)}`;return this.logger.debug(c,n,t,s),Promise.resolve({message:c})}else throw s}}else{let i={from:this.from,to:t,payload:n};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");let s=await X.tabs.sendMessage(o,i);return Yu(i,s,this.logger)}}};function Yu(e,t,n){if(t.ok)return n.debug(`${e.from} received response from ${e.to}:`,t.data?t.data:" "),t.data;throw new Be(t.errorName||"UnknownError",t.errorMessage||"Unknown error",t.errorDetails)}function Ns(e){let t=e.split(":");if(t.length<2)throw new Error("not a valid to string");let n={type:t[0],name:t[1]};if(t[0]==="content_script"){let r=parseInt(t[2]);if(!isNaN(r))n.id=r;else throw new Error("tab id not a valid number")}return n}var Om=async function(e,t){let{method:n,data:r}=e;n==="translateTheWholePage"?await Ms():n==="translateTheMainPage"?await Ta():n==="translateToThePageEndImmediately"?await Wu():n==="toggleTranslatePage"?await Uu():n==="toggleTranslateTheWholePage"?await zu():n==="toggleTranslateTheMainPage"?await ju():n==="translatePage"?await Ft():n==="restorePage"?Pn():n==="showTranslationOnly"?$u():n==="setCurrentPageLanguageByClient"&&ua(r)};var va;function Ds(){return va||(va=new An("content_script",!1).getConnection("main",Om),va)}async function Zt(e){return await Ds().sendMessage("background:main",e)}function se(e){return xe()||Bc()?(e.fetchPolyfill=globalThis.GM_fetch,wn(e)):Zt({method:"fetch",data:e})}function Vu(){return xe()?Ee():Zt({method:"getConfig"})}function ut(e){if(e.text){let t=Jc(e.text);if(t!=="auto")return Promise.resolve(t)}else return Promise.resolve("auto");if(xe()){let t=X.extra.detectLanguage(e.text);return Promise.resolve(t)}return Zt({method:"detectLanguage",data:e})}function Ku(){return Zt({method:"detectTabLanguage"})}function Gu(e){if(xe()){let n=new CustomEvent(lc,{detail:e});document.dispatchEvent(n);return}Ds().sendMessage("popup:main_sync",{method:"setPageStatus",data:e}).catch(n=>{})}function Xu(e){return xe()?rs(e):Zt({method:"queryParagraphCache",data:e})}async function Qu(e){if(xe()){await ns(e);return}return Zt({method:"setParagraphCache",data:e})}async function Is(){if(xe())return Promise.resolve();await Zt({method:"mockRequest"})}var ae=class{constructor(t,n){this.maxTextLength=1800;this.throttleLimit=3;this.isSupportList=!0;this.maxTextGroupLength=200;this.serviceConfig=t,this.generalConfig=n}static getAllProps(){return[]}static getProps(){return[]}async init(){}getMaxTextGroupLength(){return this.maxTextGroupLength}translate(t){throw new Error("Not implemented")}translateList(t){throw new Error("Not implemented")}async multipleTranslate(t,n){if(t.sentences.length===0)return{sentences:[]};let{sentences:r}=t,a=[],o=[],i=0,s=new Set,c=null;try{o=zc(r,this.maxTextLength,this.maxTextGroupLength),q.debug("tempSentenceGroups",o)}catch(l){if(n){s.has(i)&&i++;for(let f=i;f<r.length;f++){let d=r[f];n(l,null,d)}c=l}else c=l}let u=Dr({limit:this.throttleLimit,interval:1e3});for(let l=0;l<o.length;l++){let f=o[l],d=f.url,g=u(async()=>{if(this.isSupportList)return await this.translateList({text:f.tempSentences.map(m=>m.text),from:f.from,to:f.to,url:d});{let b=f.tempSentences.map(C=>C.text).join(Bo),m=await this.translate({text:b,from:f.from,to:f.to,url:d}),{text:T}=m;return{text:T.split(Bo),from:m.from,to:m.to}}}),h;try{h=await g()}catch(b){if(n){s.has(i)&&i++;for(let m=i;m<r.length;m++){let T=r[m];n(b,null,T)}c=b;continue}else{c=b;continue}}let{text:x}=h;for(let b=0;b<x.length;b++)try{let m=x[b],T=f.tempSentences[b],{index:w,prefix:C,suffix:F}=T;a[w]===void 0?a[w]={...r[w],from:f.from,to:f.to,text:C+m+F}:a[w].text+=C+m+F,w!==i&&n&&(s.add(i),n(null,a[i],r[i])),i=w}catch(m){if(n){s.has(i)&&i++;for(let T=i;T<r.length;T++){let w=r[T];n(m,null,w)}throw m}else throw m}}if(n&&!s.has(i)&&a[i]&&r[i]&&n(null,a[i],r[i]),c)throw c;return{sentences:a}}detectLanguageLocally(t){return ut({text:t})}detectLanguageRemotely(t){return Promise.resolve("auto")}detectLanguage(t){return t.length>=32?this.detectLanguageLocally(t):this.detectLanguageRemotely(t)}};var Zu=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","jp"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],pt=class extends ae{constructor(n,r){super(n,r);this.secretId="";this.secretKey="";this.isSupportList=!0;if(!n||!n.secretId||!n.secretKey)throw new Error("secretId and secretKey are required");this.secretId=n.secretId,this.secretKey=n.secretKey}static getUTCDate(n){let r=n.getUTCFullYear(),a=`${n.getUTCMonth()+1}`.padStart(2,"0"),o=`${n.getUTCDate()}`.padStart(2,"0");return`${r}-${a}-${o}`}static getAllProps(){return[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]}async translate(n){let{text:r,from:a,to:o}=n,i=JSON.stringify({ProjectId:0,Source:pt.langMap.get(a),SourceText:r,Target:pt.langMap.get(o)}),s=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslate",payload:i,service:"tmt",version:"2018-03-21"});return{text:s.Response.TargetText,from:pt.langMapReverse.get(s.Response.Source)||a,to:pt.langMapReverse.get(s.Response.Target)||o}}async translateList(n){let{text:r,from:a,to:o}=n,i=JSON.stringify({ProjectId:0,Source:pt.langMap.get(a),SourceTextList:r,Target:pt.langMap.get(o)}),s=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslateBatch",payload:i,service:"tmt",version:"2018-03-21"});return{text:s.Response.TargetTextList,from:pt.langMapReverse.get(s.Response.Source)||a,to:pt.langMapReverse.get(s.Response.Target)||o}}async signedRequest({secretId:n,secretKey:r,action:a,payload:o,service:i,version:s}){let c=`${i}.tencentcloudapi.com`,u=new Date,l=`${new Date().valueOf()}`.slice(0,10),f=["POST","/","","content-type:application/json; charset=utf-8",`host:${c}`,"","content-type;host",await gt(o)].join(`
`),d=pt.getUTCDate(u),g=["TC3-HMAC-SHA256",l,`${d}/${i}/tc3_request`,await gt(f)].join(`
`),h=await Ou(d,`TC3${r}`),x=await ma(i,h),b=await ma("tc3_request",x),m=await ma(g,b),T=await se({url:`https://${i}.tencentcloudapi.com`,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Host:c,"X-TC-Action":a,"X-TC-Timestamp":l,"X-TC-Region":"ap-beijing","X-TC-Version":s,Authorization:`TC3-HMAC-SHA256 Credential=${n}/${d}/${i}/tc3_request, SignedHeaders=content-type;host, Signature=${m}`},body:o});if(T instanceof Error)throw T;if(T.Response&&T.Response.Error&&T.Response.Error.Message)throw new Error(T.Response.Error.Message);return T}},en=pt;en.langMap=new Map(Zu),en.langMapReverse=new Map(Zu.map(([n,r])=>[r,n]));var ef=[["auto","auto"],["zh-CN","zh-CN"],["zh-TW","zh-TW"],["en","en"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["ceb","ceb"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["haw","haw"],["he","he"],["hi","hi"],["hmn","hmn"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["jw","jw"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["fil","tl"],["tr","tr"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zu","zu"]],hr=class extends ae{constructor(n,r){super(n,r);this.isSupportList=!1;this.throttleLimit=100}async translate(n){let{text:r,from:a,to:o}=n;if(!r)return{...n};let i=hr.langMap.get(a)||"auto",s=hr.langMap.get(o)||"zh-CN",c=await this.fetchWithoutToken(r,i,s);if(!c)throw new Error("google translate NETWORK_ERROR");if(!c.data[0]||c.data[0].length<=0)throw new Error("google translate API_SERVER_ERROR");return{text:c.data[0].map(l=>l[0]).filter(Boolean).join(""),from:hr.langMapReverse.get(c.data[2])||"auto",to:o}}async fetchWithoutToken(n,r,a){let o=new URLSearchParams({client:"gtx",dt:"t",sl:r,tl:a,q:n}),i="https://translate.googleapis.com/translate_a/single?"+o.toString();return{data:await se({url:i})}}},tn=hr;tn.langMap=new Map(ef),tn.langMapReverse=new Map(ef.map(([n,r])=>[r,n]));function tf(e){return e.result.texts}function Hm(e,t){return t?e+(t-e%t):e}function Um(e,t){return e.split(t).length-1}function nf(e){let t=Date.now(),n=1;for(let r of e)n+=Um(r,"i");return Hm(t,n)}function $m(e,t){return Math.floor(Math.random()*(t-e+1))+e}function Os(){return $m(1e6,1e8)}var Fs="https://www2.deepl.com/jsonrpc",wa="auto",rf=[{code:"BG",language:"Bulgarian"},{code:"ZH",language:"Chinese"},{code:"CS",language:"Czech"},{code:"DA",language:"Danish"},{code:"NL",language:"Dutch"},{code:"EN",language:"English"},{code:"ET",language:"Estonian"},{code:"FI",language:"Finnish"},{code:"FR",language:"French"},{code:"DE",language:"German"},{code:"EL",language:"Greek"},{code:"HU",language:"Hungarian"},{code:"IT",language:"Italian"},{code:"JA",language:"Japanese"},{code:"LV",language:"Latvian"},{code:"LT",language:"Lithuanian"},{code:"PL",language:"Polish"},{code:"PT",language:"Portuguese"},{code:"RO",language:"Romanian"},{code:"RU",language:"Russian"},{code:"SK",language:"Slovak"},{code:"SL",language:"Slovenian"},{code:"ES",language:"Spanish"},{code:"SV",language:"Swedish"}],af=["formal","informal"];function sf(e,t=wa,n=Os()){return{jsonrpc:"2.0",method:"LMT_split_text",params:{commonJobParams:{mode:"translate"},lang:{lang_user_selected:t,user_preferred_langs:[]},texts:e},id:n}}function Bm(e,t=1){let n=[],r=0;for(let a=0;a<e.length;a++){let o=e[a].chunks;for(let i=0;i<o.length;i++){let s=o[i];n.push({kind:"default",_index:a,sentences:[{id:r,text:s.sentences[0].text,prefix:s.sentences[0].prefix}],raw_en_context_before:o.slice(0,r).map(c=>c.sentences[0].text),raw_en_context_after:r+1<o.length?[o[r+1].sentences[0].text]:[],preferred_num_beams:t}),r++}}return n}function of(e){return e.reduce((t,n)=>{let r=n.chunks;for(let a of r)t.push(a.sentences[0].text);return t},[])}function jm(e){if(!e)return{};if(!af.includes(e))throw new Error("Formality tone '{formality_tone}' not supported.");return{formality:e}}function lf(e,t,n,r=Os(),a=1,o){let i=of(n);return{jsonrpc:"2.0",method:"LMT_handle_jobs",params:{jobs:Bm(n,a),lang:{user_preferred_langs:[t,e],source_lang_computed:e,target_lang:t},priority:1,commonJobParams:jm(o),timestamp:nf(of(n))},id:r}}function zm(e=rf){return e.reduce((t,n)=>(t[n.code.toLowerCase()]=n.code,t[n.language.toLowerCase()]=n.code,t),{})}function Hs(e){return zm()[e.toLowerCase()]}var cf={Accept:"*/*","Accept-Language":"en-US;q=0.8,en;q=0.7",Authority:"www2.deepl.com","Content-Type":"application/json",Origin:"https://www.deepl.com",Referer:"https://www.deepl.com/translator","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-site"};function uf(e){return JSON.stringify(e).replace('"method":"',()=>{let t=e;return(t.id+3)%13===0||(t.id+5)%29===0?'"method" : "':'"method": "'})}async function Wm(e,t,n){let r=sf(e,t,n);return await se({method:"POST",url:Fs+"?method=LMT_split_text",headers:cf,body:uf(r)})}async function qm(e,t,n,r,a,o){let i=await Wm(e,n,r),s=lf(n==="auto"?i.result.lang.detected:n,t,tf(i),r,a,o),c=s.params.jobs.map(f=>f._index);s.params.jobs=s.params.jobs.map(f=>{let d={...f};return delete d._index,d});let u=await se({method:"POST",url:Fs+"?method=LMT_handle_jobs",body:uf(s),headers:cf}),l={from:i.result.lang.detected,to:t,text:[]};return u.result.translations.forEach((f,d)=>{let g=c[d];l.text[g]===void 0&&(l.text[g]="");let h=s.params.jobs[d].sentences[0].prefix,x=s.params.jobs[d].sentences[0].prefix;l.text[g]=l.text[g]+h+f.beams[0].sentences[0].text}),l}async function ff(e,t,n=wa,r,a,o){return e?e&&e.length===1&&e[0]===""?{text:[""],from:n,to:t}:qm(e,Hs(t),Hs(n)??"auto",r,a,o):{text:[],from:n,to:t}}var df=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],Rn=class extends ae{constructor(n,r){super(n,r);this.maxTextGroupLength=3;this.maxTextLength=800;this.isSupportList=!0}async translateList(n){let{text:r,to:a,from:o}=n,i=await ff(r,Rn.langMap.get(a),Rn.langMap.get(o));return{text:i.text,from:Rn.langMapReverse.get(i.from),to:Rn.langMapReverse.get(i.to)}}},nn=Rn;nn.langMap=new Map(df),nn.langMapReverse=new Map(df.map(([n,r])=>[r,n]));var gf=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],ES=new Map(gf),CS=new Map(gf.map(([e,t])=>[t,e]));var pf=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","ja"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],Us="https://transmart.qq.com/api/imt",rn=class extends ae{constructor(n,r){super(n,r);this.maxTextGroupLength=50;this.maxTextLength=1e3;this.throttleLimit=1e3;this.isSupportList=!1;this.clientKey=btoa("transmart_crx_"+navigator.userAgent).slice(0,100)}async translate(n){let{text:r,to:a}=n,o=await this.detectLanguage(r),i=rn.langMap.get(o)||o,s=rn.langMap.get(a)||a;if(o===a)return{text:r,from:o,to:a};let c=JSON.stringify({header:{fn:"auto_translation_block",client_key:this.clientKey},source:{text_block:r,lang:i,orig_url:n.url},target:{lang:s}}),u=await se({url:Us,body:c,method:"POST"});if(u.header.ret_code!=="succ")throw new Error(u.message||u.header.ret_code);return{text:u.auto_translation,from:o||"auto",to:a}}async translateList(n){let{from:r,text:a,to:o}=n;if(a.length===1){let f=await this.translate({from:r,text:a[0],to:o,url:n.url});return{text:[f.text],from:f.from,to:f.to}}let i=await this.detectLanguage(a.join(`
`));if(i===o)return{text:a,from:i,to:o};let s=rn.langMap.get(i)||i,c=rn.langMap.get(o)||o,u=JSON.stringify({header:{fn:"auto_translation",client_key:this.clientKey},source:{text_list:a,lang:s,orig_url:n.url},target:{lang:c},type:"plain"}),l=await se({url:Us,body:u,method:"POST"});if(l.header.ret_code!=="succ")throw new Error(l.message||l.header.ret_code);return{text:l.auto_translation,from:i||"auto",to:o}}detectLanguageLocally(n){return this.detectLanguageRemotely(n)}async detectLanguageRemotely(n){let r={header:{fn:"text_analysis",client_key:this.clientKey},text:n.slice(0,280)},a=await se({url:Us,method:"POST",body:JSON.stringify(r)});if(a.header.ret_code!=="succ")throw new Error(a.message||a.header.ret_code);let o=a.language,i=rn.langMapReverse.get(o);return i||o}},an=rn;an.langMap=new Map(pf),an.langMapReverse=new Map(pf.map(([n,r])=>[r,n]));function mf(){return Math.random()>=0}var Nn=class extends ae{constructor(){super(...arguments);this.isSupportList=!0}async translate(n){let{text:r}=n;await Is(),await fn(5e3);let a=r.match(/^\s*/)[0].length;return{text:r.slice(0,a)+"\u6A21\u62DF\uFF1A"+r.slice(a,-6),from:n.from,to:n.to}}async translateList(n){let{text:r,from:a,to:o}=n;if(await Is(),!mf())throw new Error("\u6A21\u62DF\u9519\u8BEF");return r.length===0?{from:a,to:o,text:[""]}:{from:a,to:o,text:r.map(i=>{let s=i.match(/^\s*/)[0].length;return i.slice(0,s)+"\u6A21\u62DF\uFF1A"+i.slice(s,-6)})}}};var yf=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"],["de","de"],["fr","fr"],["it","it"],["es","es"],["nl","nl"],["pl","pl"],["pt","pt"],["ru","ru"]],hf=new Map(yf),bf=new Map(yf.map(([e,t])=>[t,e])),br=class extends ae{constructor(n,r){super(n,r);this.apikey="";this.codename=br.DEFAULT_CODENAME;this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.apikey)throw new Error("apikey are required");this.apikey=n.apikey,n.codename&&(this.codename=n.codename)}static getAllProps(){return[...br.getProps(),{type:"password",name:"apikey",required:!0}]}static getProps(){return[{type:"select",name:"codename",label:"translationEngine",default:br.DEFAULT_CODENAME,required:!1,options:[{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.aws",value:"aws"},{label:"translationServices.google",value:"google"}]}]}async translate(n){let{text:r,from:a,to:o}=n,i=await se({url:`https://api.openl.club/services/${this.codename}/translate`,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({apikey:this.apikey,text:r,source_lang:hf.get(a)||"auto",target_lang:hf.get(o)})});if(i.status){let s=i;return{text:s.result,from:bf.get(s.source_lang),to:bf.get(s.target_lang)}}else throw new Error(i.msg)}},Sa=br;Sa.DEFAULT_CODENAME="deepl";var Ea=Sa;var Tf=[["auto",""],["zh-CN","ZH"],["zh-TW","ZH"],["en","EN"],["de","DE"],["fr","FR"],["it","IT"],["ja","JA"],["es","ES"],["nl","NL"],["pl","PL"],["pt","PT"],["ru","RU"]],xf=new Map(Tf),Vm=new Map(Tf.map(([e,t])=>[t,e])),$s=class extends ae{constructor(n,r){super(n,r);this.authKey="";this.maxTextGroupLength=10;this.maxTextLength=1200;if(!n||!n.authKey)throw new Error("authKey are required");this.authKey=n.authKey}static getAllProps(){return[{name:"authKey",required:!0,type:"password"}]}async translateList(n){let{from:r,to:a,text:o}=n,i={source_lang:xf.get(r),target_lang:xf.get(a)},s=new URLSearchParams(i);o.forEach(g=>{s.append("text",g)});let c=s.toString(),u="https://api-free.deepl.com/v2/translate";this.authKey.includes(":fx")||(u="https://api.deepl.com/v2/translate");let l=await se({url:u,method:"POST",body:c,headers:{Authorization:"DeepL-Auth-Key "+this.authKey,"content-type":"application/x-www-form-urlencoded"}}),{translations:f}=l;return{text:f.map(g=>g.text),from:f[0]&&Vm.get(f[0].detected_source_language)||r,to:a}}},vf=$s;var Km=["authorization","content-type","content-length","user-agent","presigned-expires","expect"],Ce={algorithm:"HMAC-SHA256",v4Identifier:"request",dateHeader:"X-Date",tokenHeader:"X-Security-Token",contentSha256Header:"X-Content-Sha256",notSignBody:"X-NotSignBody",kDatePrefix:"",credential:"X-Credential",algorithmKey:"X-Algorithm",signHeadersKey:"X-SignedHeaders",signQueriesKey:"X-SignedQueries",signatureKey:"X-Signature"},Bs=e=>{try{return encodeURIComponent(e).replace(/[^A-Za-z0-9_.~\-%]+/g,escape).replace(/[*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)}catch{return""}},js=e=>Object.keys(e).map(t=>{let n=e[t];if(typeof n>"u"||n===null)return;let r=Bs(t);if(!!r)return Array.isArray(n)?`${r}=${n.map(Bs).sort().join(`&${r}=`)}`:`${r}=${Bs(n)}`}).filter(t=>t).join("&"),yr=class{constructor(t,n,r){this.request=t,this.request.headers=t.headers||{},this.serviceName=n,r=r||{},this.bodySha256=r.bodySha256,this.request.params=this.sortParams(this.request.params)}sortParams(t){let n={};return t&&Object.keys(t).filter(r=>{let a=t[r];return typeof a<"u"&&a!==null}).sort().map(r=>{n[r]=t[r]}),n}async addAuthorization(t,n){let r=this.getDateTime(n);await this.addHeaders(t,r),this.request.headers.Authorization=await this.authorization(t,r)}async authorization(t,n){let r=[],a=this.credentialString(n);return r.push(`${Ce.algorithm} Credential=${t.accessKeyId}/${a}`),r.push(`SignedHeaders=${this.signedHeaders()}`),r.push(`Signature=${await this.signature(t,n)}`),r.join(", ")}async getSignUrl(t,n){let r=this.getDateTime(n),a={...this.request.params},o=this.request.params,i=this.request.headers;t.sessionToken&&(a[Ce.tokenHeader]=t.sessionToken),a[Ce.dateHeader]=r,a[Ce.notSignBody]="",a[Ce.credential]=`${t.accessKeyId}/${this.credentialString(r)}`,a[Ce.algorithmKey]=Ce.algorithm,a[Ce.signHeadersKey]="",a[Ce.signQueriesKey]=void 0,a[Ce.signatureKey]=void 0,a=this.sortParams(a),this.request.params=a,this.request.headers={};let s=await this.signature(t,r);return this.request.params=o,this.request.headers=i,a[Ce.signQueriesKey]=Object.keys(a).sort().join(";"),a[Ce.signatureKey]=s,js(a)}getDateTime(t){return this.iso8601(t).replace(/[:\-]|\.\d{3}/g,"")}async addHeaders(t,n){if(this.request.headers[Ce.dateHeader]=n,t.sessionToken&&(this.request.headers[Ce.tokenHeader]=t.sessionToken),this.request.body){let r=this.request.body;this.request.headers[Ce.contentSha256Header]=await gt(r)}}async signature(t,n){let r=await this.getSigningKey(t,n.substr(0,8),this.request.region,this.serviceName);return pa(await Ot(await this.stringToSign(n),r))}async stringToSign(t){let n=[];n.push(Ce.algorithm),n.push(t),n.push(this.credentialString(t));let r=await this.canonicalString();return n.push(await this.hexEncodedHash(r)),n.join(`
`)}async canonicalString(){let t=[],n=this.request.pathname||"/";t.push(this.request.method.toUpperCase()),t.push(n);let r=js(this.request.params)||"";return t.push(r),t.push(`${this.canonicalHeaders()}
`),t.push(this.signedHeaders()),t.push(await this.hexEncodedBodyHash()),t.join(`
`)}canonicalHeaders(){let t=[];Object.keys(this.request.headers).forEach(r=>{t.push([r,this.request.headers[r]])}),t.sort((r,a)=>r[0].toLowerCase()<a[0].toLowerCase()?-1:1);let n=[];return t.forEach(r=>{let a=r[0].toLowerCase();if(this.isSignableHeader(a)){let o=r[1];if(typeof o>"u"||o===null||typeof o.toString!="function")throw new Error(`Header ${a} contains invalid value`);n.push(`${a}:${this.canonicalHeaderValues(o.toString())}`)}}),n.join(`
`)}canonicalHeaderValues(t){return t.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")}signedHeaders(){let t=[];return Object.keys(this.request.headers).forEach(n=>{n=n.toLowerCase(),this.isSignableHeader(n)&&t.push(n)}),t.sort().join(";")}signedQueries(){return Object.keys(this.request.params).join(";")}credentialString(t){return this.createScope(t.substr(0,8),this.request.region,this.serviceName)}async hexEncodedHash(t){return await gt(t)}async hexEncodedBodyHash(){return this.request.headers[Ce.contentSha256Header]?this.request.headers[Ce.contentSha256Header]:this.request.body?await this.hexEncodedHash(js(this.request.body)):await this.hexEncodedHash("")}isSignableHeader(t){return Km.indexOf(t)<0}iso8601(t){return t===void 0&&(t=new Date),t.toISOString().replace(/\.\d{3}Z$/,"Z")}async getSigningKey(t,n,r,a){let o=await Ot(n,`${Ce.kDatePrefix}${t.secretKey}`),i=await Ot(r,o),s=await Ot(a,i);return Ot(Ce.v4Identifier,s)}createScope(t,n,r){return[t.substr(0,8),n,r,Ce.v4Identifier].join("/")}};var Sf=[["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],wf=new Map(Sf),Gm=new Map(Sf.map(([e,t])=>[t,e])),zs=class extends ae{constructor(n,r){super(n,r);this.accessKeyId="";this.secretAccessKey="";this.maxTextGroupLength=8;if(!n||!n.accessKeyId||!n.secretAccessKey)throw new Error("accessKeyId and secretAccessKey are required");this.accessKeyId=n.accessKeyId,this.secretAccessKey=n.secretAccessKey}static getAllProps(){return[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"}]}async translateList(n){let{text:r,from:a,to:o}=n,i=wf.get(a),s={TargetLanguage:wf.get(o)||o,TextList:r};i&&(s.SourceLanguage=i);let c={region:"cn-north-1",method:"POST",params:{Action:"TranslateText",Version:"2020-06-01"},pathname:"/",headers:{"Content-Type":"application/json",host:"open.volcengineapi.com"},body:JSON.stringify(s)},u=new yr(c,"translate");await u.addAuthorization({accessKeyId:this.accessKeyId,secretKey:this.secretAccessKey});let l=new URLSearchParams(c.params),f=await se({url:"https://open.volcengineapi.com"+c.pathname+"?"+l.toString(),headers:u.request.headers,method:c.method,body:c.body});if(f.TranslationList){let d=f.TranslationList.map(h=>h.Translation),g=a;return f.TranslationList.length>0&&f.TranslationList[0].DetectedSourceLanguage&&(g=Gm.get(f.TranslationList[0].DetectedSourceLanguage)||a),{text:d,from:g,to:o}}else{let d=f.ResponseMetaData.Error;throw new Be(d.Code,d.Message)}}},Ef=zs;var Cf=[["auto","detect"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],Jm=new Map(Cf),Ym=new Map(Cf.map(([e,t])=>[t,e])),xr=class extends ae{constructor(){super(...arguments);this.maxTextGroupLength=50;this.isSupportList=!1}async translate(n){let{text:r,from:a,to:o}=n,s={source_language:Jm.get(a)||"detect",target_language:"zh",text:r},c=await se({url:"https://translate.volcengine.com/crx/translate/v1/",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(c.base_resp&&c.base_resp.status_code===0){let u=c.translation,l=a;return c.detected_language&&(l=Ym.get(c.detected_language)||a),{text:u,from:l,to:o}}else{let u=c.base_resp;throw new Be(u.status_code.toString(),u.status_message)}}};var Xm=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],Lf=new Map(Xm),Tr=class extends ae{constructor(n,r){super(n,r);this.url="";this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.url)throw new Error("deeplx custom url are required, please check your settings.");this.url=n.url}static getAllProps(){return[{name:"url",required:!0,type:"text"}]}async translate(n){let{text:r,from:a,to:o}=n,s=await se({url:this.url,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({source_lang:Lf.get(a)||a,target_lang:Lf.get(o)||o,text:r})});if(s.code===200)return{text:s.data,from:a,to:o};throw new Error(s.message||s.message||"API Error")}};var Ws="https://{s}bing.com",Af=Ws+"/translator",Qm=Ws+"/ttranslatev3",Zm=Ws+"/tspellcheckv3",Ca="bingGlobalConfig",Rf=[["auto","auto-detect"],["ar","ar"],["ga","ga"],["et","et"],["bg","bg"],["is","is"],["pl","pl"],["bs","bs-Latn"],["fa","fa"],["da","da"],["de","de"],["ru","ru"],["fr","fr"],["zh-TW","zh-Hant"],["fil","fil"],["fj","fj"],["fi","fi"],["gu","gu"],["kk","kk"],["ht","ht"],["ko","ko"],["nl","nl"],["ca","ca"],["zh-CN","zh-Hans"],["cs","cs"],["kn","kn"],["otq","otq"],["tlh","tlh"],["hr","hr"],["lv","lv"],["lt","lt"],["ro","ro"],["mg","mg"],["mt","mt"],["mr","mr"],["ml","ml"],["ms","ms"],["mi","mi"],["bn","bn-BD"],["hmn","mww"],["af","af"],["pa","pa"],["pt","pt"],["ps","ps"],["ja","ja"],["sv","sv"],["sm","sm"],["sr-Latn","sr-Latn"],["sr-Cyrl","sr-Cyrl"],["no","nb"],["sk","sk"],["sl","sl"],["sw","sw"],["ty","ty"],["te","te"],["ta","ta"],["th","th"],["to","to"],["tr","tr"],["cy","cy"],["ur","ur"],["uk","uk"],["es","es"],["he","iw"],["el","el"],["hu","hu"],["it","it"],["hi","hi"],["id","id"],["en","en"],["yua","yua"],["yue","yua"],["vi","vi"],["ku","ku"],["km","kmr"]],kf=new Map(Rf),_f=new Map(Rf.map(([e,t])=>[t,e])),Mf=1e3,mt,Dn;function qs(e,t){return e.replace("{s}",t?t+".":"")}async function eh(){if(!mt){let n=await X.storage.local.get(Ca);return n&&(mt=n[Ca]),!0}let{tokenTs:e,tokenExpiryInterval:t}=mt;return Date.now()-e>t}async function Pf(){let e,t,n,r,a,o,i,s,c,u;try{let l=qs(Af,e),f=await se({url:l,responseType:"raw"}),{body:d,headers:g,url:h}=f;e=h.match(/^https?:\/\/(\w+)\.bing\.com/)[1],u=g["set-cookie"],t=d.match(/IG:"([^"]+)"/)[1],n=d.match(/data-iid="([^"]+)"/)[1],[a,r,o,i,s,c]=JSON.parse(d.match(/params_AbusePreventionHelper\s?=\s?([^\]]+\])/)[1])}catch(l){throw console.error("failed to fetch global config",l),l}return mt={subdomain:e,IG:t,IID:n,key:a,token:r,tokenTs:a,tokenExpiryInterval:o,isVertical:i,frontDoorBotClassification:s,isSignedInOrCorporateUser:c,cookie:u,count:0},await X.storage.local.set({[Ca]:mt}),mt}function th(e){let{IG:t,IID:n,subdomain:r,isVertical:a}=mt;return qs(e?Zm:Qm,r)+"?isVertical=1"+(t&&t.length?"&IG="+t:"")+(n&&n.length?"&IID="+n+"."+mt.count++:"")}function nh(e,t,n,r){let{token:a,key:o}=mt,i={fromLang:n,text:t,token:a,key:o};return!e&&r&&(i.to=r),i}async function Nf(e,t,n){if(!e||!(e=e.trim()))return;if(e.length>Mf)throw new Error(`The supported maximum length of text is ${Mf}. Please shorten the text.`);Dn||(Dn=Pf()),await Dn,await eh()&&(Dn=Pf(),await Dn),t=t||"auto",n=n||"zh-CN",t=kf.get(t)||t,n=kf.get(n)||n;let a=th(!1),o=nh(!1,e,t,n==="auto-detect"?"zh-Hans":n),i={referer:qs(Af,mt.subdomain),"content-type":"application/x-www-form-urlencoded"},s=new URLSearchParams(o),c=a,u=s.toString(),l=await se({url:c,headers:i,method:"POST",body:u});if(l.ShowCaptcha||l.StatusCode===401||l.statusCode){if(mt=null,Dn=null,await X.storage.local.remove(Ca),l.ShowCaptcha)throw new Error(`
      Sorry that bing translator seems to be asking for the captcha,
      Please take care not to request too frequently.
      The response code is ${l.StatusCode}.
    `);if(l.StatusCode===401)throw new Error(`
      Max count of translation exceeded. Please try it again later.
      The response code is 401.
    `);if(l.statusCode)throw new Error(`Something went wrong! The response is ${JSON.stringify(l)}.`)}let f=l[0].translations[0],d=l[0].detectedLanguage;return{text:f.text,from:_f.get(d.language),to:_f.get(f.to)}}var vr=class extends ae{constructor(n,r){super(n,r);this.isSupportList=!1;this.maxTextLength=1e3}async translate(n){let{text:r,from:a,to:o}=n;return r?await Nf(r,a,o):{...n}}};var If=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],Df=new Map(If),rh=new Map(If.map(([e,t])=>[t,e])),Vs=class extends ae{constructor(n,r){super(n,r);this.endpoint="https://api.fanyi.baidu.com/api/trans/vip/translate";this.appid="";this.key="";this.isSupportList=!1;if(!n||!n.appid||!n.key)throw new Error("appid and key are required");this.appid=n.appid,this.key=n.key}static getAllProps(){return[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"}]}async translate(n){let r=Date.now().toString(),{endpoint:a}=this,{appid:o,key:i}=this,{text:s,from:c,to:u}=n,l=new URLSearchParams({from:Df.get(c),to:Df.get(u),q:s,salt:r,appid:o,sign:Sn(o+s+r+i)}),f=new URL(a);f.search=l.toString();let d=await se({url:f.toString()});if(d.error_code)throw console.error(new Error("[Baidu service]"+d.error_msg)),new Be("API_SERVER_ERROR",d.error_msg);let{trans_result:g,from:h}=d,x=g.map(({dst:m})=>m);return{from:rh.get(h),to:u,text:x.join(`
`)}}},Of=Vs;var ah=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"]],Ff=new Map(ah),Ks=class extends ae{constructor(n,r){super(n,r);this.token="";if(!n||!n.token)throw new Error("token are required");this.token=n.token}static getAllProps(){return[{name:"token",required:!0,type:"password"}]}async translateList(n){let{text:r,from:a,to:o}=n;a==="auto"&&(a=await ut({text:r.join(" ")}));let i=r;return{text:(await se({url:"https://api.interpreter.caiyunai.com/v1/translator",headers:{"content-type":"application/json","x-authorization":"token "+this.token},method:"POST",body:JSON.stringify({source:i,trans_type:`${Ff.get(a)}2${Ff.get(o)}`})})).target,from:a,to:o}}},Hf=Ks;var $f=[["auto","auto"],["en","en"],["ru","ru"],["pt","pt"],["es","es"],["zh-CN","zh-CHS"],["ja","ja"],["ko","ko"],["fr","fr"],["ar","ar"],["id","id"],["vi","vi"],["it","it"]],Uf=new Map($f),oh=new Map($f.map(([e,t])=>[t,e]));function sh(e){let t=e.length;return t<=20?e:e.substring(0,10)+t+e.substring(t-10,t)}var Gs=class extends ae{constructor(n,r){super(n,r);this.isSupportList=!1;this.appId="";this.appSecret="";if(!n||!n.appId||!n.appSecret)throw new Error("appId and appSecret are required");this.appId=n.appId,this.appSecret=n.appSecret}static getAllProps(){return[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"}]}async translate(n){let{text:r,from:a,to:o}=n,i=new Date().getTime(),s=Math.round(new Date().getTime()/1e3),c=this.appId+sh(r)+i+s+this.appSecret,u=await gt(c),l={q:r,appKey:this.appId,salt:i.toString(),from:Uf.get(a),to:Uf.get(o),sign:u,signType:"v3",curtime:s.toString()},f=new URLSearchParams(l),g=await se({url:"https://openapi.youdao.com/api",method:"POST",body:f.toString(),headers:{"Content-Type":"application/x-www-form-urlencoded"}}),h=g.l,[x,b]=h.split("2");return{text:g.translation.join(`
`),from:oh.get(x),to:o}}},Bf=Gs;var In={mock:{class:Nn,name:"Mock",homepage:"https://www.google.com"},mock2:{class:Nn,name:"Mock2",homepage:"https://www.google.com"},google:{class:tn,name:"Google",homepage:"https://translate.google.com/"},transmart:{class:an,name:"Transmart",homepage:"https://transmart.qq.com/"},deepl:{class:vf,name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://hcfy.app/docs/services/deepl"},volc:{class:Ef,name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://hcfy.app/docs/services/hs-api"},volcAlpha:{class:xr,name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},bing:{class:vr,name:"Bing",homepage:"https://www.bing.com/translator"},tencent:{class:en,name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://hcfy.app/docs/services/qq-api"},baidu:{class:Of,name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://hcfy.app/docs/services/baidu-api"},caiyun:{class:Hf,name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://hcfy.app/docs/services/caiyun-api"},openl:{class:Ea,name:"Openl",homepage:"https://openl.club/",docUrl:"https://docs.openl.club/"},youdao:{class:Bf,name:"Youdao",homepage:"https://fanyi.youdao.com/",docUrl:"https://hcfy.app/docs/services/youdao-api"},d:{class:nn,name:"Deepl(Alpha) ",alpha:!0,homepage:"https://www.deepl.com/translator"},deeplx:{class:Tr,name:"DeepLX(Alpha)",alpha:!0,homepage:"https://www.deepl.com/translator"}};function Js(e,t){let n=In[e],r=t.config.translationServices[e]||{},a=!0,o=n.class.getAllProps();if(o.length>0){let i=o.filter(s=>s.required);if(i.length>0){for(let s of i)if(!r[s.name]){a=!1;break}}}return{...n,id:e,selected:t.translationService===e,ok:a,config:r,props:n.class.getProps(),allProps:o}}var ih=Object.keys(In),jf=e=>{let{config:t}=e,n=t.alpha,r=t.debug;return ih.filter(a=>{let o=In[a];return a.startsWith("mock")?!!r:!o.alpha||n||a===e.translationService}).map(a=>Js(a,e))};async function Ju(e,t){if(!e.text)return e;let n=await As({sentences:[e]},t);if(n.sentences.length>0)return{...e,...n.sentences[0]};throw new Be("translateFailed","translate failed")}async function As(e,t,n){if(!e.sentences.length)return{...e};let{config:r,translationService:a}=t,o=r.translationGeneralConfig,i=r.translationServices,s=a,c=i[s]||{};e.sentences=e.sentences.map(b=>b);let u=[],l={sentences:Array(e.sentences.length)},f=e.sentences.length,d=-1;if(r.cache)for(let b of e.sentences){d++;let m=s;s==="openl"&&(m=s+"-"+c.codename||Ea.DEFAULT_CODENAME);let T=null;try{T=await Sr(Xu({originalText:b.text,from:b.from,to:b.to,service:m}),1e3)}catch(w){q.warn("query cache DB error, but it's ok",w)}if(T){let w={...b,text:T.translatedText};l.sentences[d]=w,n&&n(null,w,b)}else u.push(b)}else u.push(...e.sentences);let g=u.length;if(f-g>0&&q.debug(`use ${f-g} sentences from cache`),!u.length)return l;let h;try{h=new In[s].class(c,o),await h.init()}catch(b){if(n)for(let m of u)n(b,null,m);throw b}let x=await h.multipleTranslate({sentences:u},(b,m,T)=>{if(n&&(n(b,m,T),!b&&m&&!s.startsWith("mock")&&r.cache)){let w=s;s==="openl"&&(w=s+"-"+c.codename||Ea.DEFAULT_CODENAME),r.cache&&Sr(Qu({translatedText:m.text,from:T.from,to:T.to,detectedFrom:m.from,key:Sn(T.text),service:w}),3e3).catch(C=>{q.warn("set cache DB error",C)})}});for(let b of x.sentences){let m=l.sentences.findIndex(T=>!T);if(m===-1)throw new Be("translateFailed","can not match the result");l.sentences[m]=b}return l}function zf(e,t){return[e,!e||e.endsWith("/")?"":"/",t,".json"].join("")}function Ys(e,t){let n=e;return t&&Object.keys(t).forEach(r=>{let a=t[r],o=new RegExp("{"+r+"}","gm");n=n.replace(o,a.toString())}),n}function wr(e,t,n){let r=e[t];if(!r)return n;let a=n.split("."),o="";do{o+=a.shift();let i=r[o];i!==void 0&&(typeof i=="object"||!a.length)?(r=i,o=""):a.length?o+=".":r=n}while(a.length);return r}function Xs(e,t,n,r,a){if(!e.hasOwnProperty(n))return t;let o=wr(e,n,t);return o===t&&n!==r&&(o=wr(e,r,t)),Ys(o,a)}var On={},lh={root:"",lang:"en",fallbackLang:"en"};function Qs(e,t){let n=Object.assign({},lh,e);On=t||On;let[r,a]=J(n.lang),[o,i]=J(On),[s,c]=J(!1),u=f=>{if(o.hasOwnProperty(f))return;c(!1);let d=zf(n.root||"",f);n.getUrl&&(d=n.getUrl(n.root||"",f),fetch(d).then(g=>g.json()).then(g=>{On[f]=g,i({...On}),c(!0)}).catch(g=>{i({...On}),c(!0)}))};return ce(()=>{u(n.fallbackLang||"en"),u(r)},[r]),{lang:r,setLang:a,t:(f,d)=>{if(!o.hasOwnProperty(r))return f;let g=wr(o,r,f);return g===f&&r!==n.fallbackLang&&(g=wr(o,n.fallbackLang,f)),Ys(g,d)},isReady:s}}var ei=Ha(null),Zs={root:"assets",lang:"en",fallbackLang:"en"},Wf=e=>{let{t,setLang:n,lang:r,isReady:a}=Qs({root:e.root||Zs.root,lang:e.lang||Zs.lang,fallbackLang:e.fallbackLang||Zs.fallbackLang,getUrl:e.getUrl},e.translations);return p(ei.Provider,{value:{t,setLang:n,lang:r,isReady:a},children:e.children})};function Z(){return Ba(ei)}function Le(e){return p("div",{class:"nav-left",children:[p("div",{class:"title",children:e.title}),p("div",{class:"description",children:e.description})]})}function ti(e){let{items:t,maxWidth:n}=e;return n=n||128,p("select",{autoComplete:"off",class:"min-select",style:{maxWidth:`${n}px`},value:t.find(r=>r.selected)?.value,onChange:r=>{let a=r.target.value,o=t.find(i=>i.value===a);o&&o.onSelected(o)},children:t.map(r=>p("option",{value:r.value,selected:r.selected,children:r.label}))})}function La(e){let{t}=Z();return p("div",{class:"input-row",children:[p("div",{class:"input-left",children:p("label",{for:e.field.name,children:[e.field.label?t(e.field.label):e.field.name,"\uFF1A"]})}),p("div",{class:"input-right",children:p("input",{required:e.field.required,placeholder:e.field.name,class:"input",value:e.value,type:e.type,onChange:n=>{e.onChange(n.target.value)}})})]})}function ni(e){let{field:t,root:n,onChange:r,value:a}=e;a=a||t.default||"";let{t:o}=Z();return t.type==="select"?p("div",{class:"flex justify-end mb-2",children:[p("label",{class:"engine",children:[t.label?o(t.label):t.name,"\uFF1A"]}),p(ti,{items:t.options.map(i=>({label:`${i.label?o(i.label):i.value}`,value:a??"",selected:a===i.value,onSelected:()=>{r(i.value)}}))})]}):t.type==="text"?p("div",{children:p(La,{field:t,value:a,type:t.type,onChange:r})}):t.type==="password"?p("div",{children:p(La,{field:t,value:a,type:t.type,onChange:r})}):null}var qf={"zh-CN":{"languages.en":"\u82F1\u8BED","languages.ja":"\u65E5\u8BED","languages.ko":"\u97E9\u8BED","languages.es":"\u897F\u73ED\u7259\u8BED","languages.fr":"\u6CD5\u8BED","languages.de":"\u5FB7\u8BED","languages.it":"\u610F\u5927\u5229\u8BED","languages.pt":"\u8461\u8404\u7259\u8BED","languages.ru":"\u4FC4\u8BED"},"zh-TW":{"languages.en":"\u82F1\u8A9E","languages.ja":"\u65E5\u8A9E","languages.ko":"\u97D3\u8A9E","languages.es":"\u897F\u73ED\u7259\u8A9E","languages.fr":"\u6CD5\u8A9E","languages.de":"\u5FB7\u8A9E","languages.it":"\u610F\u5927\u5229\u8A9E","languages.pt":"\u8461\u8404\u7259\u8A9E","languages.ru":"\u4FC4\u8A9E"}},ri={...zt,"zh-CN":{...qf["zh-CN"],...zt["zh-CN"]},"zh-TW":{...qf["zh-TW"],...zt["zh-TW"]}},ka=ri;function Vf(e,t,n){return Xs(ri,e,t,Jr,n)}var Kf=()=>yn.filter(e=>e!=="auto"),Ht=(e,t,n)=>{let r=Xs(ri,`languages.${e}`,t,"en");return n?Wo[e]||e:r!==`languages.${e}`?r:Wo[e]};function _a(e){let{t,lang:n}=Z();return p("details",{role:"list",class:"nav-right",children:[p("summary",{"aria-haspopup":"listbox",children:t("edit")}),p("ul",{role:"listbox",class:"option-list",children:e.options.map(r=>{let a=Ht(r.value,n);return p("li",{children:p("label",{children:[p("input",{type:"checkbox",onChange:()=>{e.onToggleAlwaysLangs(!r.checked,r.value)},value:r.value,checked:r.checked}),a]})})})})]})}function Fn(e){let{t}=Z();return p("div",{children:e.urls.map((n,r)=>p("div",{class:"url-list",children:[p("div",{class:"url-left",children:[p("div",{class:"url-name height-tight",children:n}),p("div",{class:"description text-1 height-tight",children:n})]}),p("nav",{children:p("ul",{children:p("li",{children:p("details",{role:"list",dir:"rtl",children:[p("summary",{"aria-haspopup":"listbox",role:"link"}),p("ul",{class:"delete",role:"listbox",children:[p("li",{children:p("a",{onClick:a=>{e.onEditUrl(n,e.type,r)},children:t("edit")})}),p("li",{children:p("a",{onClick:a=>{e.onDeleteUrl(n,e.type)},children:t("delete")})})]})]})})})})]},"menu"+r))})}function Hn(e){let{t}=Z(),n=gn(null),{toggleModal:r}=e;return p("dialog",{id:"immersive-translate-overlay",onClick:o=>{o.preventDefault(),o.target&&o.target.id==="immersive-translate-overlay"&&r(o)},open:!0,children:p("article",{class:"add-modal",children:[p("a",{href:"#close","aria-label":"Close",class:"close","data-target":"modal-example",onClick:e.toggleModal}),p("div",{class:"add-text",children:t("add url")}),p("input",{placeholder:"URL",ref:n,value:e.urlValue}),p("blockquote",{children:p("p",{class:"text-sm",children:t("addUrlDescription")})}),p("div",{class:"flex",children:[p("div",{class:"footer-button",children:p("a",{href:"#cancel",role:"button",class:"full-button secondary margin-right","data-target":"modal-example",onClick:e.toggleModal,children:t("cancel")})}),p("div",{class:"footer-button",children:p("a",{href:"#confirm",role:"button",class:"full-button margin-left","data-target":"modal-example",onClick:o=>{if(o.preventDefault(),n.current&&n.current.value){if(e.onSubmitAddUrl){if(e.urlValue!==""){e.onSubmitAddUrl(n.current.value,e.index,e.type,"edit");return}e.onSubmitAddUrl(n.current.value,e.index,e.type);return}else if(e.onAddInterfaceUrl){if(e.urlValue!==""){e.onAddInterfaceUrl(n.current.value,"edit");return}e.onAddInterfaceUrl(n.current.value)}}},children:t("confirm")})})]})]})})}var ai=Kf();function Ma(){let{t:e}=Z(),[t,n,r,a]=ot(),[o,i]=J(null),[s,c]=J(null),[u,l]=J(0),[f,d]=J(!1),[g,h]=J(!1),[x,b]=J(""),m=[];s&&(m=jf(s));let T=null,w=null,C=[],F=[];if(o&&s){let{translationService:S,translationServices:M}=o;In[S]&&(w=Js(S,s)),M&&M[S]?T=M[S]||{}:T={},C=ai.map(H=>o.translationLanguagePattern&&o.translationLanguagePattern.matches&&o.translationLanguagePattern.matches.includes(H)?{checked:!0,value:H}:{checked:!1,value:H}),F=ai.map(H=>o.translationLanguagePattern&&o.translationLanguagePattern.excludeMatches&&o.translationLanguagePattern.excludeMatches.includes(H)?{checked:!0,value:H}:{checked:!1,value:H})}ce(()=>($e("esc",()=>{d(!1),h(!1)}),Ee().then(S=>{i(S),q.debug(S)}),()=>{$e.unbind("esc")}),[]),ce(()=>{Ee().then(S=>{i(S)})},[t]),ce(()=>{o&&kt({url:"http://localhost",config:o}).then(S=>{c(S)})},[o]);let _=S=>{n(M=>({...M,translationService:S}))},z=S=>{n(()=>({...S}))},ue=S=>{S.preventDefault(),confirm(e("confirmResetConfig"))&&(z(Yt()),vn().catch(M=>{q.error("clean local config error",M)}),Xe(e("resetSuccess")))},E=S=>{n(M=>({...M,targetLanguage:S}))},D=(S,M)=>{if(!S){n(N=>{let P={...N.translationLanguagePattern};return{...N,translationLanguagePattern:{...N.translationLanguagePattern,matches:xt(M,P.matches),excludeMatches:xt(M,P.excludeMatches)}}});return}let H=S,v=H==="matches"?"excludeMatches":"matches";M&&n(N=>{let P={...N.translationLanguagePattern};return P[H]=Tn(M,P[H]),P[v]=xt(M,P[v]),{...N,translationLanguagePattern:{...N.translationLanguagePattern,...P}}})},$=(S,M)=>{D(S?"matches":void 0,M)},A=(S,M)=>{D(S?"excludeMatches":void 0,M)},W=S=>{S==="matches"?d(!f):h(!g)},O=(S,M,H,v)=>{W(H),n(N=>{let P=t.translationUrlPattern,ee=[],V=[];P&&P.matches&&P.excludeMatches&&(ee=P.matches,V=P.excludeMatches);let he=[...ee],ve=[...V];return v==="edit"&&(H==="matches"?he[M]=S:ve[M]=S),H==="matches"?(he=Tn(S,he),ve=xt(S,V)):(he=xt(S,ee),ve=Tn(S,ve)),{...N,translationUrlPattern:{...N.translationUrlPattern,matches:he,excludeMatches:ve}}})},Y=(S,M)=>{n(H=>{let v=t.translationUrlPattern,N=[];M==="matches"?v&&v.matches&&(N=v.matches):v&&v.excludeMatches&&(N=v.excludeMatches);let P=[...N];return P=xt(S,P),{...H,translationUrlPattern:{...H.translationUrlPattern,[M]:P}}})},I=(S,M,H)=>{W(M),b(S),l(H)};if(!o)return p("div",{children:"loading"});let oe=[];o&&o.translationLanguagePattern&&o.translationLanguagePattern.matches&&(oe=o.translationLanguagePattern.matches);let fe=[];return o&&o.translationLanguagePattern&&o.translationLanguagePattern.excludeMatches&&(fe=o.translationLanguagePattern.excludeMatches),p("div",{children:[p("div",{class:"nav",children:[p("strong",{class:"text-lg",children:e("general")}),p("a",{class:"text-sm",href:"#",onClick:ue,children:e("reset")})]}),p("div",{class:"nav",children:[p(Le,{title:e("target"),description:e("translate other languages into specific language")}),p("select",{class:"select",onChange:S=>{S.preventDefault(),E(S.target.value)},children:ai.filter(S=>S!=="auto").map(S=>p("option",{value:S,selected:S===o.targetLanguage,children:Ht(S,o.interfaceLanguage)}))})]}),p("div",{class:"nav",children:[p(Le,{title:e("service"),description:e("select translation service")}),p("select",{class:"select",onChange:S=>{S.preventDefault(),_(S.target.value)},children:m.map(S=>p("option",{value:S.id,selected:S.id===o.translationService,children:`${e("translationServices."+S.id)}`}))})]}),w&&w.docUrl?p("div",{children:[p("a",{class:"pb-1 docUrl",href:w.homepage,children:e(`translationServices.${w.id}`)}),"\xA0",p("span",{class:"description pb-1",children:e("please refer to")}),"\xA0",p("a",{class:"pb-1 docUrl",href:w.docUrl,children:e("KeyAndConfigurationTutorial")})]}):null,T&&w&&w.allProps.length>0&&w.allProps.map(S=>p(ni,{field:S,value:T[S.name],onChange:M=>{n(H=>{let v=H.translationServices||{},N=v[w.id]||{};return{...H,translationServices:{...v,[w.id]:{...N,[S.name]:M}}}})}})),p("div",{class:"nav",children:[p(Le,{title:e("always languages"),description:e("always translate the following languages")}),p(_a,{options:C,onToggleAlwaysLangs:$})]}),p("div",{class:"langs-list",children:oe.map((S,M)=>p("div",{class:"lang-card",children:[p("div",{id:`${S}`,children:Ht(S,o.interfaceLanguage)}),p("a",{href:"#close",class:"close",target:"_blank","aria-label":"Close","data-target":`${S}`,onClick:H=>{H.preventDefault(),$(!1,oe[M])}})]}))}),p("div",{class:"nav",children:[p(Le,{title:e("neverTranslateLanguagesLabel"),description:e("neverTranslateTheFollowingLanguagesDescription")}),p(_a,{options:F,onToggleAlwaysLangs:A})]}),p("div",{class:"langs-list",children:fe.map((S,M)=>p("div",{class:"lang-card",children:[p("div",{id:`${S}`,children:Ht(S,o.interfaceLanguage)}),p("a",{href:"#close",class:"close",target:"_blank","aria-label":"Close","data-target":`${S}`,onClick:H=>{H.preventDefault(),A(!1,fe[M])}})]}))}),p("div",{class:"nav",children:[p(Le,{title:e("always sites"),description:e("always translate the following sites")}),p("div",{class:"nav-right",children:p("a",{href:"#",role:"button",class:"add-button secondary outline",onClick:S=>{S.preventDefault(),W("matches")},children:e("add")})}),f?p(Hn,{toggleModal:S=>{S.preventDefault(),W("matches")},onSubmitAddUrl:O,type:"matches",urlValue:x,index:u}):null]}),p(Fn,{urls:o.translationUrlPattern.matches,type:"matches",onDeleteUrl:Y,onEditUrl:I}),p("div",{class:"nav",children:[p(Le,{title:e("never sites"),description:e("never translate the following sites")}),p("div",{class:"nav-right",children:p("a",{href:"#",role:"button",class:"add-button secondary outline",onClick:S=>{S.preventDefault(),W("excludeMatches")},children:e("add")})}),g?p(Hn,{toggleModal:S=>{S.preventDefault(),W("excludeMatches")},onSubmitAddUrl:O,type:"excludeMatches",urlValue:x,index:u}):null]}),p(Fn,{urls:o.translationUrlPattern.excludeMatches,type:"excludeMatches",onDeleteUrl:Y,onEditUrl:I}),p("div",{class:"nav",children:[p(Le,{title:e("advanced"),description:e("advancedDescription")}),p("a",{class:"text-sm",href:"#advanced",children:e("goAdvancedSettings")})]})]})}function oi(e){let{t}=Z(),{corfirmText:n,fingerCountToToggleTranslagePageWhenTouching:r,onChange:a,onClose:o,shortcuts:i}=e,s={},c=gn(null);for(let l=0;l<i.length;l++)s[i[l].name]=gn(null);let u=l=>{l.preventDefault(),l.target&&l.target.id==="immersive-translate-overlay"&&o()};return ce(()=>{},[]),p("dialog",{id:"immersive-translate-overlay",onClick:u,open:!0,children:p("article",{class:"add-modal",children:[p("a",{href:"#close","aria-label":"Close",class:"close","data-target":"modal-example",onClick:l=>{l.preventDefault(),o()}}),i.map((l,f)=>{let{name:d,description:g,shortcut:h}=l;return p("div",{class:"flex justify-between items-center",children:[p("label",{class:"mb-2 text-sm",for:d,children:[g,":"]}),p("input",{type:"text",class:"!w-36",ref:s[d],disabled:l.disabled,id:d,name:d,value:h})]},`key-${f}`)}),Oc()&&p("div",{class:"flex justify-between items-center",children:[p("label",{for:"switch",class:"text-sm mb-2",children:t("toggleTranslatePageWhenThreeFingersOnTheScreen")}),p("select",{class:"select !w-36",ref:c,onChange:l=>{l.preventDefault()},children:[0,2,3,4,5].map(l=>p("option",{value:l,selected:l===r,children:`${t("fingers."+l)}`}))})]}),e.note&&p(e.note,{}),p("div",{class:"flex",children:[p("div",{class:"footer-button",children:p("a",{href:"#cancel",role:"button",class:"full-button secondary margin-right","data-target":"modal-example",onClick:l=>{l.preventDefault(),o()},children:t("cancel")})}),n&&p("div",{class:"footer-button",children:p("a",{href:"#confirm",role:"button",class:"full-button margin-left","data-target":"modal-example",onClick:l=>{l.preventDefault();let f=[];for(let g=0;g<i.length;g++){let h=i[g],x=s[h.name];if(x.current){let b=x.current.value;f.push({...h,shortcut:b})}}let d={shortcuts:f};if(c.current){let g=c.current.value;d.fingerCountToToggleTranslagePageWhenTouching=parseInt(g)}a(d)},children:n})})]})]})})}var si=Dc()?["action"]:["browser_action","page_action"],uh=[{id:"toggleTranslatePage",contexts:["page","frame",...si]},{id:sc,contexts:si},{id:ic,contexts:si}];async function Gf(){let e=await Ee();q.debug("update ContextMenu",e);for(let t of uh){let n=Vf(`browser.${t.id}`,e.interfaceLanguage);X.contextMenus.update(t.id,{title:n})}}var fh=Object.keys(ka),dh=e=>{let t=e.translationTheme;return e.translationThemePatterns[t]?[...e.translationThemePatterns[t].matches]:[]};function ii(){let[e,t,n,r]=ot(),[a,o]=J(!1),[i,s]=J(!1),[c,u]=J(0),[l,f]=J(null),{t:d,setLang:g}=Z(),[h,x]=J(""),b=X.runtime.getManifest();ce(()=>($e("esc",()=>{o(!1),s(!1)}),()=>{$e.unbind("esc")}),[]),ce(()=>{Ee().then(E=>{kt({config:E,url:globalThis.location.href}).then(D=>{f(D)})})},[e]);let m=E=>{t(D=>({...D,translationTheme:E}))},T=E=>{t(D=>({...D,interfaceLanguage:E}))},w=(E,D,$)=>{o(!a),t(A=>{let W=A.translationThemePatterns||{},O=W[D]||{},Y=O.matches||[],I=[...Y];return $==="edit"&&(I=xt(h,Y)),I=Tn(E,I),{...A,translationThemePatterns:{...W,[D]:{...O,matches:I}}}})},C=(E,D)=>{t($=>{let A=$.translationThemePatterns||{},W=A[D]||{},Y=[...W.matches||[]];return Y=xt(E,Y),{...$,translationThemePatterns:{...A,[D]:{...W,matches:Y}}}})},F=(E,D,$)=>{o(!a),x(E),u($)};if(!l)return p("div",{children:"loading"});let _=l.config,z=d("confirm"),ue=()=>p("blockquote",{class:"text-sm",children:[d("browserShortcutsSucks")," ",p("kbd",{children:"Ctrl+A"}),"\xA0",p("kbd",{children:"Alt+B"}),"\xA0",p("kbd",{children:"Command+C"}),"\xA0 ",p("kbd",{children:"Ctrl+Shift+D"})," ",p("a",{href:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#shortcut_values",children:[d("help"),"?"]})]});return xe()||(Jo()?(ue=()=>p("blockquote",{class:"text-sm",children:[d("browserShortcutsNoteForFirefox"),"  ",p("a",{href:"https://support.mozilla.org/zh-CN/kb/%E7%AE%A1%E7%90%86Firefox%E7%9A%84%E6%89%A9%E5%B1%95%E5%BF%AB%E6%8D%B7%E6%96%B9%E5%BC%8F",children:[d("help"),"?"]})," "]}),z=""):(ue=()=>p("blockquote",{class:"text-sm",children:d("browserShortcutsNoteForChrome")}),z=d("goSettings"))),p("div",{children:[p("div",{class:"nav",children:p("strong",{class:"text-lg",children:d("interface")})}),p("div",{class:"nav",children:[p(Le,{title:d("interface language")}),p("select",{class:"select",onChange:E=>{g(E.target.value),T(E.target.value),xe()||setTimeout(()=>{Gf()},200)},children:fh.map(E=>p("option",{value:E,selected:E===_.interfaceLanguage,children:Ht(E,_.interfaceLanguage,!0)}))})]}),p("div",{class:"nav",children:[p(Le,{title:d("keyboard shortcuts")}),p("div",{class:"nav-right",children:p("a",{href:"#",role:"button",class:"add-button secondary outline",onClick:E=>{E.preventDefault(),s(!i)},children:d("modify")})})]}),p("div",{class:"nav",children:[p(Le,{title:d("enableLineBreak"),description:d("enableLineBreakDescription")}),p("label",{for:"switch",children:p("input",{type:"checkbox",onChange:E=>{let D=E.target.checked;t($=>{let A=$.generalRule||{};return{...$,generalRule:{...A,lineBreakMaxTextCount:D?280:0}}})},checked:l.rule.lineBreakMaxTextCount>0,id:"switch",name:"switch",role:"switch"})})]}),l.rule.lineBreakMaxTextCount>0&&p("div",{class:"nav",children:[p(Le,{title:d("lineBreakMaxTextCount")}),p("label",{for:"count",children:p("input",{type:"number",id:"count",onChange:E=>{let D=E.target.value;t($=>{let A=$.generalRule||{};return{...$,generalRule:{...A,lineBreakMaxTextCount:parseInt(D)}}})},name:"count",value:l.rule.lineBreakMaxTextCount,placeholder:"Text Length",required:!0})})]}),(Xr().any||xe())&&p("div",{class:"nav",children:[p(Le,{title:d("enableUserscriptPagePopup"),description:d("enableUserscriptPagePopupDescription",{touch:d("fingers."+_.generalRule.fingerCountToToggleTranslagePageWhenTouching)})}),p("label",{for:"switch",children:p("input",{type:"checkbox",onChange:E=>{let D=E.target.checked;t($=>{let A=$.generalRule||{};return{...$,generalRule:{...A,isShowUserscriptPagePopup:D}}})},checked:l.rule.isShowUserscriptPagePopup,id:"switch",name:"switch",role:"switch"})})]}),p("div",{class:"nav",children:[p(Le,{title:d("translation display"),description:d("select diplay style")}),p("select",{class:"select",onChange:E=>{m(E.target.value)},children:bc.map(E=>p("option",{value:E,selected:E===_.translationTheme,children:d(`translationTheme.${E}`)}))})]}),p("div",{class:"pt-2 text-sm",children:p("p",{children:[Tc,p("br",{}),p("br",{}),p("span",{class:ys(_.translationTheme,!1,[],!1,!1).join(" "),children:p("span",{class:xs(_.translationTheme).join(" "),children:vc})})]})}),p("div",{class:"nav",children:[p(Le,{title:"",description:d("useAboveStyleForTheseSites",{theme:d(`translationTheme.${_.translationTheme}`)})}),p("div",{class:"nav-right",children:p("a",{href:"#",role:"button",class:"add-button secondary outline",onClick:E=>{E.preventDefault(),o(!a)},children:d("add")})})]}),a?p(Hn,{toggleModal:E=>{E.preventDefault(),o(!a)},onAddInterfaceUrl:(E,D)=>{w(E,_.translationTheme,D)},urlValue:h,index:c}):null,p(Fn,{urls:dh(_),type:"matches",onDeleteUrl:E=>{C(E,_.translationTheme)},onEditUrl:F}),i?p(oi,{note:ue,corfirmText:z,fingerCountToToggleTranslagePageWhenTouching:_.generalRule.fingerCountToToggleTranslagePageWhenTouching,shortcuts:yc.map(E=>({name:E,shortcut:_.shortcuts[E],description:d(`browser.${E}`),disabled:!xe()})),onChange:E=>{let{shortcuts:D,fingerCountToToggleTranslagePageWhenTouching:$}=E;xe()?t(A=>{let W=D.reduce((Y,I)=>(Y[I.name]=I.shortcut,Y),{...A.shortcuts}),O={...A,shortcuts:W};return $!==void 0&&(O.generalRule={...O.generalRule,fingerCountToToggleTranslagePageWhenTouching:$}),O}):X.tabs.create({url:"chrome://extensions/shortcuts"}),s(!1)},onClose:()=>{s(!1)}}):null]})}function li(){let[e,t,n,r]=ot(),[a,o]=J(null),{t:i}=Z();ce(()=>{Ee().then(x=>{o(x)})},[e]);let s=x=>{t(b=>({...b,debug:x}))},c=x=>{t(()=>({...x}))},u=x=>{try{let b=JSON.parse(x.target.value);if(!Array.isArray(b)){wt("Invalid rules, rules must be an array");return}let m={...e};m.rules=b,c(m),Xe(i("saved"))}catch(b){wt(`Invalid JSON ${b.message}`)}},l=x=>{try{let b=JSON.parse(x.target.value);c(b),Xe(i("saved"))}catch(b){wt(`Invalid JSON ${b.message}`)}},f=x=>{x.preventDefault()},d=x=>{x.preventDefault(),c(Yt()),Xe(i("resetSuccess")),setTimeout(()=>{vn().catch(b=>{q.error("clean local config error",b)})},500)},g=x=>{x.preventDefault();let b={...e};delete b.rules,c(b)},h={matches:"www.google.com",selectors:[".title",'[data-testid="title"]'],excludeSelectors:["footer"]};return a?p("div",{children:[p("div",{class:"nav",children:p("strong",{class:"text-lg",children:i("developer")})}),p("fieldset",{children:p("label",{for:"switch",children:[p("input",{type:"checkbox",id:"cache",name:"cache",role:"switch",onChange:()=>{s(!a.debug)},checked:a.debug}),i("toggleDebug")]})}),p("details",{class:"py-2",children:[p("summary",{children:"Edit User Rules"}),p("textarea",{rows:10,onChange:u,placeholder:JSON.stringify(h,null,2),value:e.rules?JSON.stringify(e.rules||[],null,2):""}),p("div",{children:[p("a",{href:"#",class:"mr-3 !py-2",onClick:f,role:"button",children:i("save")}),p("a",{class:"secondary text-sm mr-3",href:"https://immersive-translate.owenyoung.com/advanced",children:[i("help"),"?"]}),p("a",{href:"#",onClick:g,class:"text-sm secondary mr-2",children:i("reset")})]})]}),p("details",{class:"py-2",children:[p("summary",{children:"Edit User Config"}),p("textarea",{rows:10,onChange:l,value:JSON.stringify(e,null,2)}),p("div",{children:[p("a",{href:"#",class:"mr-3 !py-2",onClick:f,role:"button",children:i("save")}),p("a",{class:"secondary text-sm mr-3",href:"https://immersive-translate.owenyoung.com/advanced",children:[i("help"),"?"]}),p("a",{href:"#",onClick:d,class:"text-sm secondary mr-2",children:i("reset")})]})]}),p("details",{class:"py-2",children:[p("summary",{children:"Click to expand the final config"}),p("pre",{children:p("code",{children:JSON.stringify(a,null,2)})})]})]}):p("div",{children:"loading"})}function ci(){let[e,t,n,r]=ot(),[a,o]=J(null),{t:i}=Z();ce(()=>{Ee().then(f=>{o(f)})},[]);let s=f=>{t(()=>({...f}))},c=f=>{try{let d=JSON.parse(f.target.value);s(d)}catch(d){wt(`Invalid JSON ${d.message}`)}},u=f=>{f.preventDefault();let d=document.createElement("input");d.setAttribute("type","file"),d.setAttribute("accept","text/plain"),d.style.display="none",document.body.appendChild(d),d.oninput=g=>{let h=g.target,x=new FileReader;x.onload=function(){try{let b=JSON.parse(x.result);s(b),Xe(i("successImportConfig"))}catch(b){wt(`Invalid JSON ${b.message}`)}},x.readAsText(h.files[0])},d.click(),document.body.removeChild(d)},l=f=>{f.preventDefault(),confirm(i("confirmResetConfig"))&&(s(Yt()),Xe(i("resetSuccess")),setTimeout(()=>{vn().catch(d=>{q.error("clean local config error",d)})},500))};return p("div",{children:[p("div",{class:"nav",children:p("strong",{class:"text-lg",children:i("import_export")})}),p("div",{class:"pb-2",children:[p("a",{class:"mr-2 secondary",onClick:u,href:"#",role:"button",children:[p("svg",{class:"inline mr-1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[p("path",{fill:"none",d:"M0 0h24v24H0z"}),p("path",{d:"M3 19h18v2H3v-2zM13 5.828V17h-2V5.828L4.929 11.9l-1.414-1.414L12 2l8.485 8.485-1.414 1.414L13 5.83z"})]}),i("import")]}),p("a",{href:"data:text/plain;charset=utf-8,"+encodeURIComponent(JSON.stringify(e,null,2)),download:"immersive-translate-backup-"+new Date().toISOString().replace(/T/,"_").replace(/\..+/,"").replace(/\:/g,".")+".txt",class:"secondary mr-4",role:"button",children:[p("svg",{class:"inline mr-1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[p("path",{fill:"none",d:"M0 0h24v24H0z"}),p("path",{d:"M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"})]}),i("export")]}),p("a",{href:"#",onClick:l,class:"secondary text-sm",children:i("reset")})]}),p("details",{class:"pt-4",children:[p("summary",{children:i("clickToExpandConfig")}),p("pre",{children:p("code",{children:JSON.stringify(e,null,2)})})]})]})}function Pa(){return X.runtime.getManifest().version}var gh="buildinConfig",ph={},Jf=Uc(gh,ph);function ui(e,t){return e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"})>=0}function fi(e,t=2e3){return n=>{let r,a=0;return o=>{++a==e&&(n(o),a=0),clearTimeout(r),r=setTimeout(()=>a=0,t)}}}async function Yf(){let e=["bingGlobalConfig","baiduGlobalConfig"];for(let t of e)await X.storage.local.remove(t);xe()||await Gc()}function Xf(){return xe()?Promise.resolve("0 B"):os()}var mh=({date:e})=>{let{t}=Z();return p("p",{class:"text-sm",children:[t("The local rules are up to date")," ",new Date(e).toLocaleString()]})},hh=({date:e})=>{let{t}=Z();return p("p",{class:"text-sm",children:[t("Successfully synchronized with the latest official rules:")," ",new Date(e).toLocaleString()]})},bh=()=>{let{t:e}=Z();return p("p",{class:"text-sm","aria-busy":!0,children:[e("Checking for updates"),"..."]})},yh=()=>{let{t:e}=Z();return p("p",{class:"text-sm",children:[e("Rules are being synchronized"),"..."]})},xh=({minVersion:e})=>{let{t}=Z();return p("p",{class:"text-sm",children:t("localVersionIsTooOld",{minVersion:e})})},Th=({latestVersion:e})=>{let{t}=Z();return p("p",{class:"text-sm",children:[t("foundNewVersion"),":"," ",p("a",{href:"https://github.com/immersive-translate/immersive-translate/releases",children:e})]})},vh=()=>{let{t:e}=Z();return p("p",{class:"text-sm",children:e("theLocalExtensionIsUpToUpdate")})},wh=({message:e,handleSyncing:t,date:n})=>{let{t:r}=Z();return p("p",{class:"text-sm",children:[r("failToSyncRules")," ",p("a",{onClick:t,children:r("retry")}),p("br",{}),r("failedReason"),"\uFF1A",e,p("br",{}),r("currentRuleVersion"),"\uFF1A",n]})};function di(){let[e,t]=J(null),{t:n}=Z(),[r,a]=J(n("calculating")+"..."),[o,i]=J(null),[s,c]=Jf(),[u,l]=J(null),[f,d]=J(""),[g,h]=J(!1),[x,b]=J(!1),[m,T]=J(null),[w,C]=J(null),[F,_,z,ue]=ot(),[E,D]=J(!1),$=Pa(),A=async()=>{d("");let I=o;if(o===null)try{let oe=await wn({url:Fo});oe?(i(oe),I=oe,h(!0)):(d(n("unknownError")),l(null))}catch(oe){l(null),d(oe.message);return}I!==null?(c(I),l(!1),t(I.buildinConfigUpdatedAt)):(d(n("canNotFetchRemoteRule")),l(null))};ce(()=>{Ee().then(I=>{let oe=I.buildinConfigUpdatedAt;T(I);let fe=new Date(oe);t(oe),wn({url:Fo}).then(S=>{let M=S.minVersion,H=$;i(S);let v=S.latestVersion;if(v&&(ui(H,v)?C(!0):C(!1)),ui(H,M)){let N=S.buildinConfigUpdatedAt;new Date(N)>fe?(l(!0),A()):l(!1)}else b(!0),l(null)}).catch(S=>{l(null),d(S.message)})}),Xf().then(I=>{a(I)})},[]),ce(()=>{Ee().then(I=>{T(I)})},[F,e]);let W=I=>{_(oe=>{let fe=!oe.alpha;return fe?Xe(n("enableAlphaSuccess")):Xe(n("disableAlphaSuccess")),{...oe,alpha:fe}})},O=I=>{I.preventDefault(),I.stopPropagation(),D(!0),Yf().then(()=>{D(!1),Xe("\u6E05\u7406\u6210\u529F"),a("0 B")}).catch(oe=>{D(!1),wt(oe.message)})},Y=I=>{_(oe=>({...oe,cache:I}))};return m?p("div",{class:"text-sm",children:[p("div",{class:"nav",children:p("strong",{onClick:fi(7)(W),class:"text-lg immersive-translate-no-select",children:n("about")})}),p("p",{onClick:fi(7)(W),class:"mb-2 immersive-translate-no-select",children:["V",$]}),w===!1&&p(Th,{latestVersion:o?.latestVersion}),w===!0&&p(vh,{}),p("fieldset",{children:p("label",{for:"switch",children:[p("input",{type:"checkbox",id:"cache",name:"cache",role:"switch",onChange:()=>{Y(!m.cache)},checked:m.cache}),n("allowCacheTranslations")]})}),!xe()&&r&&p("p",{class:"text-sm",children:[n("cacheSize"),"\xA0",r," \xA0 ",E?p("span",{children:[n("cleaning"),"..."]}):p("a",{class:"text-sm",href:"#",onClick:O,children:n("cleanCache")})]}),f?p(wh,{handleSyncing:A,message:f,date:e||""}):x?p(xh,{minVersion:o.minVersion}):u===null?p(bh,{}):u===!0?p(yh,{}):g?p(hh,{date:e}):p(mh,{date:e})]}):null}function gi(){let[e,t,n,r]=ot(),[a,o]=J(null),{t:i}=Z();ce(()=>{Ee().then(l=>{kt({config:l,url:globalThis.location.href}).then(f=>{o(f)})})},[e]);let s=l=>{t(f=>({...f,translationTheme:l}))},c=l=>{t(f=>({...f,interfaceLanguage:l}))};if(!a)return p("div",{children:"loading"});let u=a.config;return p("div",{children:[p("div",{class:"nav",children:p("strong",{class:"text-lg",children:i("advanced")})}),p("div",{class:"nav",children:[p(Le,{title:i("translate all areas of the page"),description:i("translationAreaDescription")}),p("label",{for:"switch",children:p("input",{type:"checkbox",id:"switch",name:"switch",role:"switch",onChange:l=>{let f=l.target.checked;t(d=>({...d,translationArea:f?"body":"main"}))},checked:u.translationArea==="body"})})]}),p("div",{class:"nav",children:[p(Le,{title:i("translate to the bottom of the page"),description:i("translateToThePageEndImmediatelyDescription")}),p("label",{for:"switch",children:p("input",{type:"checkbox",onChange:l=>{let f=l.target.checked;t(d=>({...d,translationStartMode:f?"immediate":"dynamic"}))},checked:u.translationStartMode==="immediate",id:"switch",name:"switch",role:"switch"})})]}),p("div",{class:"nav",children:[p(Le,{title:i("the number of characters to be translated first")}),p("label",{for:"count",children:p("input",{type:"number",id:"count",onChange:l=>{let f=l.target.value;t(d=>({...d,immediateTranslationTextCount:parseInt(f)}))},name:"count",value:u.immediateTranslationTextCount,placeholder:"Text Length",required:!0})})]})]})}var Qf=Gn({presets:[Or(),$r()]});function Zf(){let e=document.getElementById("mount");e&&(async()=>{so(Qf);let t=await Ee();t.debug&&q.setLevel("debug"),Fa(p(Wf,{lang:t.interfaceLanguage,fallbackLang:"zh-CN",translations:ka,children:p(Sh,{donateUrl:t.donateUrl})}),e)})()}function Sh(e){let t=Io(),{t:n}=Z(),r=Pa(),a=[{name:n("general"),props:{href:"#general",className:"secondary"}},{name:n("interface"),props:{href:"#interface",className:"secondary"}},{name:n("import_export"),props:{href:"#import_export",className:"secondary"}},{name:n("about"),props:{href:"#about",className:"secondary"}}];return a.forEach(o=>{t===o.props.href&&(o.props.className="primary",o.props["aria-current"]="page")}),p(Ze,{children:p("main",{class:"container-fluid",children:[p("aside",{children:p("nav",{class:"flex flex-col h-full justify-between",children:[p("div",{children:[p("hgroup",{children:[p("h4",{class:"cursor-pointer p-0 m-0",onClick:()=>{globalThis.location.hash="#general"},children:n("browser.brandName")}),p("h6",{class:"!text-sm",children:r})]}),p("ul",{children:a.map((o,i)=>p("li",{class:"li",children:p("a",{...o.props,children:o.name})},`nav-${i}`))})]}),p("div",{class:"m-0 p-0 flex flex-col",children:[p("a",{class:"py-3 text-xs no-focus secondary",href:e.donateUrl,children:[n("donateCafe"),"\u2615\uFE0F"]}),p("a",{class:"py-3 text-xs no-focus secondary",href:"https://immersive-translate.owenyoung.com/CHANGELOG.html",children:n("changelog")}),p("a",{class:"py-3 text-xs no-focus secondary",href:"https://immersive-translate.owenyoung.com/",children:n("document")}),p("a",{class:"py-3 text-xs no-focus secondary",href:"#developer",children:n("developer")})]})]})}),p("div",{role:"main",children:p(Do,{value:t,defaultCase:p(Ma,{}),cases:{"#general":p(Ma,{}),"#interface":p(ii,{}),"#import_export":p(ci,{}),"#about":p(di,{}),"#advanced":p(gi,{}),"#developer":p(li,{})}})})]})})}Zf();
